---
title: Eddy-current brake
description: A contactless brake in which a magnet (permanent or electromagnet) induces swirling electric currents (eddy currents)
  in a nearby moving conductor, and those currents' own magnetic field drags against the motion, turning it into heat, with
  a force that grows with speed and vanishes at standstill (Wikipedia, Eddy current brake).
num: 212
term: Eddy-current brake
plain_name: A strong magnet held very close to a moving plate or spinning disc of copper or aluminium (metals a magnet doesn't
  stick to); without touching, it drags on the metal, harder the faster it moves, so it slows things smoothly but can't hold
  them still
aliases:
- induction brake, Faraday brake, electric brake, electric retarder (Wikipedia, Eddy current brake)
- 'magnetic brake (common name, but ambiguous: on railways a ''magnetic brake'' can also mean a magnet that pulls a friction
  shoe onto the rail; Wikipedia, Eddy current brake)'
- magnetic damping, eddy-current damper (Wikipedia, Magnetic damping)
- eddy-current absorber (on engine and chassis dynamometers; Wikipedia, Eddy current brake)
- Waltenhofen's pendulum (the classic classroom demonstration; Wikipedia, Eddy current)
- magnetic braking on baitcasting fishing reels (Wikipedia, Fishing reel); that these are eddy-current brakes is [uncertain]
- '''magnetic resistance'' on exercise bikes and rowing machines [uncertain]'
- Wirbelstrombremse (German; Wikipedia)
family: brakes, dampers & speed control
other_families: [powered & active connectors]
finder:
  job:
  - slow it, stop it or keep its speed steady
  motion: rotate
  special_behaviour: [fail-safe or breakaway]
  holding_principle: [magnetic, not a holding joint]
  reuse_cycles: effectively unlimited
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), woodwork]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [press or vice, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…t holder and disc hub; non-magnetic spacers or shims help set the
      gap [uncertain]; pressing magnets into print…"'
confirmed: []
open_points: []
uncertain_fields: [aliases, tools_needed, load, processes, making_tips_3d_printing, off_the_shelf_parts, environment_limits,
  common_failures, make_it_yourself]
diagram_idea: Top view of an aluminium disc spinning between a pair of magnets, with two swirling current loops (one ahead
  of the magnet, one behind), arrows showing the drag opposing rotation, and beside it a small graph of drag force against
  speed that starts at zero, rises in a straight line, peaks and then slowly falls, labelled 'no force when stopped'.
links:
- url: https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg
  title: File:Eddy current brake diagram.svg (Wikimedia Commons)
  shows: 'A disc eddy-current brake: a spinning metal disc between magnet poles, with the induced current loops and the resulting
    drag'
  license: CC0 (Chetvorno)
- url: https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg
  title: File:Eddy currents due to magnet.svg (Wikimedia Commons)
  shows: A metal sheet moving under a magnet, with the swirling currents ahead of and behind the magnet and their opposing
    fields
  license: CC0 (Chetvorno)
- url: https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm
  title: File:What can you do with a Neodymium magnet and a copper pipe-.webm (Wikimedia Commons)
  shows: Video of a neodymium magnet falling slowly through a copper pipe (Lenz's law and eddy currents)
  license: CC BY 3.0 (Avichal Sharma)
- url: https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg
  title: File:KWh meter magnetic brake.jpg (Wikimedia Commons)
  shows: Adjustable permanent-magnet eddy-current brake on the aluminium disc of a 1973 electricity meter
  license: CC0 (Olli Niemitalo)
- url: https://www.kjmagnetics.com/blog/eddy-current-brakes
  title: Eddy Current Brakes (K&J Magnetics blog)
  shows: Photos and graphs of magnet trolleys and an alternating-pole magnet row braking an aluminium plate on a ramp, with
    the drag-force formula
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/1644230-dual-tube-lenzs-law-visualizer
  title: Dual-Tube Lenz's Law Visualizer (Jonathan L, Printables) (URL from Printables API, page not opened)
  what_it_is: Printed end caps for a copper tube (magnet falls slowly) beside a clear tube (steel weight free-falls), to compare
    eddy-current braking with free fall
  license: CC BY-NC-SA
- url: https://www.instructables.com/Eddy-Current-Brake-Experiment/
  title: Eddy Current Brake Experiment (Instructables)
  what_it_is: A neodymium magnet pendulum swinging just above a block of wood and a block of aluminium; the aluminium damps
    the swing until the magnet stops
  license: '[uncertain]'
- url: http://girogeek.blogspot.com/2009/11/so-i-decided-that-in-order-to-gain-some.html
  title: 'Bike Stuff: Eddy Current Resistance Unit for Aluminum Bike Rollers (girogeek blog, 2009)'
  what_it_is: 'Home-made resistance unit: small neodymium disc magnets hot-glued to a wooden block held 1-2 mm from aluminium
    rollers'
  license: '[uncertain]'
- url: https://www.kjmagnetics.com/blog/eddy-currents
  title: Eddy Currents (K&J Magnetics blog)
  what_it_is: 'Simple experiment: a 1 in × 1/8 in disc magnet sliding down a 1/8 in thick aluminium strip, slowed by eddy
    currents'
  license: link only
sources:
- https://en.wikipedia.org/wiki/Eddy_current_brake
- https://en.wikipedia.org/wiki/Eddy_current
- https://en.wikipedia.org/wiki/Magnetic_damping
- https://en.wikipedia.org/wiki/Lenz%27s_law
- https://de.wikipedia.org/wiki/Wirbelstrombremse
- https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
- https://en.wikipedia.org/wiki/Neodymium_magnet
- https://en.wikipedia.org/wiki/Brake
- https://en.wikipedia.org/wiki/Fishing_reel
- https://www.kjmagnetics.com/blog/eddy-current-brakes
- https://www.kjmagnetics.com/blog/eddy-currents
- https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
- https://www.magtrol.com/wp-content/uploads/hbmanual.pdf
- https://roymech.org/Useful_Tables/Drive/Brakes.html
- https://api.openalex.org/works/doi:10.3390/en12132622
- https://hackaday.io/project/171924-braker-one-robot
- https://hackaday.io/project/171924-braker-one-robot/log/179881-eddy-current-brake-failure
- http://girogeek.blogspot.com/2009/11/so-i-decided-that-in-order-to-gain-some.html
- https://www.instructables.com/Eddy-Current-Brake-Experiment/
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg
- https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg
- https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm
- https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg
- https://api.printables.com/graphql/
research: research/connection-types/results/Eddycurrent_brake_magnetic_brake.json
---

A contactless brake in which a magnet (permanent or electromagnet) induces swirling electric currents (eddy currents) in a nearby moving conductor, and those currents' own magnetic field drags against the motion, turning it into heat, with a force that grows with speed and vanishes at standstill (Wikipedia, Eddy current brake).

**In plain words:** A strong magnet held very close to a moving plate or spinning disc of copper or aluminium (metals a magnet doesn't stick to); without touching, it drags on the metal, harder the faster it moves, so it slows things smoothly but can't hold them still. **Proper term:** Eddy-current brake.

**Also called:** induction brake, Faraday brake, electric brake, electric retarder (Wikipedia, Eddy current brake); magnetic brake (common name, but ambiguous: on railways a 'magnetic brake' can also mean a magnet that pulls a friction shoe onto the rail; Wikipedia, Eddy current brake); magnetic damping, eddy-current damper (Wikipedia, Magnetic damping); eddy-current absorber (on engine and chassis dynamometers; Wikipedia, Eddy current brake); Waltenhofen's pendulum (the classic classroom demonstration; Wikipedia, Eddy current); magnetic braking on baitcasting fishing reels (Wikipedia, Fishing reel); that these are eddy-current brakes is ⚑ [uncertain]; 'magnetic resistance' on exercise bikes and rowing machines ⚑ [uncertain]; Wirbelstrombremse (German; Wikipedia).

## How it works

As the metal moves past the magnet, the magnetic field through each part of it changes, which induces circular currents (eddy currents) in the metal (Faraday's law) (Wikipedia, Eddy current brake). By Lenz's law these currents make their own magnetic field that opposes the change: the metal is pushed back at the magnet's leading edge and pulled back at its trailing edge, so either way the motion is resisted. The energy goes into heating the metal. When the metal stops, the field stops changing, the currents die away and the braking force disappears, which is why it can't hold anything still (Wikipedia, Eddy current brake).

## Parts

A few parts: one or more magnets (permanent neodymium magnets, or an electromagnet coil on an iron core), a conductive but non-magnetic plate, disc or rail (usually copper or aluminium), and a frame that holds the magnet at a small, fixed gap; often magnets on both sides of the disc, and a way to move the magnet or change the current to vary braking (Wikipedia, Eddy current brake; K&J Magnetics).

## Everyday examples

- The magnetic brakes that stop roller coaster cars smoothly at the end of the ride (Wikipedia, Eddy current brake)
- A strong magnet falling slowly down a copper pipe in a science lesson (Wikipedia, Eddy current brake)
- The spinning aluminium disc in an old electricity meter, slowed by a permanent magnet (Wikipedia, Eddy current brake; Wikimedia Commons photo)
- Old analogue car and bike speedometers, where a spinning magnet drags a cup against a spring (Wikipedia, Magnetic damping; German Wikipedia)
- Zip-line brakes and power-tool blade brakes that stop a circular saw quickly (Wikipedia, Eddy current; Eddy current brake)

## When to use it

Use it when you want smooth, silent, wear-free slowing that automatically gets stronger at higher speed: limiting how fast a weight falls or a spool unwinds, damping wobble in a pointer, balance or pendulum (Wikipedia, Magnetic damping), adding adjustable resistance to a trainer or exercise machine (girogeek), stopping a spinning blade or wheel without dust, or as a fail-safe speed limiter with permanent magnets that needs no power (Wikipedia, Eddy current brake). It also works where you can't touch the moving part, e.g. through an air gap or a non-magnetic wall.

## When not to use it

Don't use it to hold anything still or park a load: it has no holding force at zero speed, so combine it with a friction brake, ratchet or spring-applied brake (Wikipedia, Eddy current brake; Eddy current). It is weak at low speeds (Wikipedia, Eddy current brake), and small magnets on a thin plate may give almost no braking: one maker's coil-and-chain-link brake on a thin aluminium disc at 450 rpm gave none, and he switched to mechanical calipers (Hackaday.io, Braker One). For speed-independent drag, or drag at standstill, use a hysteresis brake, which gives full torque independent of slip speed (Magtrol manual), or a friction brake. Keep strong magnets away from magnetic sensors and electronics: German railways found eddy-current brakes can disturb trackside equipment such as axle counters (German Wikipedia).

## Details

- **What it does (jobs):**
  - slow it, stop it or keep its speed steady: slows a moving or spinning part smoothly, and limits how fast something can fall or spin (it settles at a steady 'terminal' speed; K&J Magnetics)
- **Movement:** rotate: in a disc brake the conductor spins past the magnet; linear versions slide along a rail or track instead (Wikipedia, Eddy current brake)
- **Directions it can move (degrees of freedom):** 1: the disc or plate keeps its one way of moving (turning or sliding); the brake only resists it and never locks it
- **Special behaviour:**
  - fail-safe or breakaway: permanent-magnet versions need no power, so roller coasters use them to avoid the risk of power cuts (Wikipedia, Eddy current brake)
  - none of the other listed behaviours: its special trait is that the drag grows with speed, like a fluid damper, and falls to zero at standstill (Wikipedia, Eddy current brake; Magnetic damping)
- **How it holds:**
  - magnetic: the force comes from the magnet acting on currents it induces in the metal (no contact)
  - not a holding joint (it moves or passes on motion): it has no holding force when stationary (Wikipedia, Eddy current brake)
- **Input and output:** not applicable: it absorbs motion as heat rather than passing it on. At low speeds the drag force is roughly proportional to speed, F ≈ a·σ·d·B²·A·v (K&J Magnetics); at high speeds it peaks at a 'critical speed' and then falls (OpenAlex abstract of Chen et al. 2019; German Wikipedia on the ICE 3 brake)
- **Power:** passive (no power needed) with permanent magnets; powered with electromagnets, whose braking can be turned on, off or varied by the current. If power is lost, an electromagnet brake stops braking, which is why roller coasters use permanent magnets (Wikipedia, Eddy current brake)
- **Load:** light to heavy depending on size: hobby versions give a gentle drag (K&J Magnetics' eight 2 × 1 × 1/2 in block magnets only slow a sliding aluminium plate), while train brakes reach about 10 kN per brake unit (German Wikipedia, ICE 3). The force acts along the direction of motion; strong magnets also pull hard sideways on any steel nearby ⚑ [uncertain]
- **Play and precision:** not applicable: it doesn't locate anything. Because nothing touches, it tolerates some wobble, but braking changes with the gap, so keep the gap small and constant (German Wikipedia; K&J Magnetics)
- **Taking it apart:** removable: the magnets and the disc or plate are separate parts, screwed, clamped or press-fitted in place (Printables 743728 press-fits its magnets)
- **How often it can be reused:** effectively unlimited: nothing touches, so there are no brake shoes to wear or replace (Wikipedia, Eddy current brake)
- **Sealing:** none: it doesn't seal anything; it works across an air gap (and even through non-magnetic walls, as in a magnet falling inside a copper pipe; Wikipedia, Eddy current brake)
- **Adjustable:** yes: move the magnet closer or further (a bigger gap means weaker braking; German Wikipedia; girogeek), add or remove magnets, change the current in an electromagnet (Wikipedia, Eddy current brake), or swing the magnets away by a linkage, as power-tool brakes do (Wikipedia, Eddy current brake). Old electricity meters used an adjustable permanent-magnet brake (Wikimedia Commons, KWh meter magnetic brake.jpg)
- **Access needed:** not applicable: nothing is fastened through the moving part; you need room to fix the disc to its shaft and to mount the magnet a few millimetres from the disc or plate
- **Materials:** Conductor: copper (about 59.6 MS/m) or aluminium (about 35.5 MS/m) are best; brass is about 56% of copper's conductivity, carbon steel about 7 MS/m and stainless steel only about 1.45 MS/m (Wikipedia, Electrical resistivity and conductivity). Induced current, and so braking, is directly proportional to conductivity, so a copper disc brakes harder than an identical steel one (German Wikipedia). The plate is usually copper or aluminium rather than iron or steel, which a magnet would simply attract (Wikipedia, Eddy current brake), though some dynamometer absorbers use high-inertia steel rotors (Wikipedia, Eddy current brake). Magnets: neodymium (NdFeB) permanent magnets, or electromagnets. Printed plastic can only hold the magnets and frame; it doesn't conduct, so it can't be the braking plate.
- **Heat, cold, water and wear:** Heat: the conductor heats up and its resistance rises, reducing braking (Wikipedia conductivity table); neodymium magnets lose strength when hot, permanently above their maximum operating temperature (about 80 °C for a typical N42 magnet; K&J Magnetics), and their coercivity drops sharply above 100 °C (Wikipedia, Neodymium magnet). Printed holders soften from about 60 °C in PLA (CNC Kitchen). Moisture: neodymium magnets corrode unless plated or coated (Wikipedia, Neodymium magnet). Water or oil on the disc doesn't matter because nothing touches, and there is no wear, noise or smell (Wikipedia, Eddy current brake) ⚑ [uncertain for water specifically]. Vibration can shift magnets and change the gap.

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: neodymium magnets, aluminium or copper plate and discs, copper pipe; industrial eddy-current and hysteresis brakes
  - 3D print (FDM): magnet holders, frames, gap adjusters and pendulum or drop-tube demos (Printables 1644230, 743728)
  - CNC: turning or cutting an aluminium or copper disc ⚑ [uncertain]
  - woodwork: a simple wooden mount for magnets beside an aluminium roller (girogeek)
- **Printing it in one piece (print in place):** no: it needs separate magnets and a metal conductor; printed parts only hold them (magnets can be pressed into printed pockets, as in Printables 743728, or sealed in mid-print)
- **Tools:** Screwdriver or hex keys for the magnet holder and disc hub; non-magnetic spacers or shims help set the gap ⚑ [uncertain]; pressing magnets into printed pockets may need a vice or clamp, and a small hex key to push them out again (Printables 564712)
- **Difficulty:** easy: glue or press neodymium magnets into a printed holder next to an aluminium or copper disc or plate; getting strong braking is harder, because it needs strong magnets, a thick conductor, a tiny gap and enough speed (Hackaday.io, Braker One 'Eddy current brake failure'; K&J Magnetics)

### 3D printing tips

1) The braking plate must be metal: use aluminium or copper; plastic doesn't conduct (Wikipedia, Electrical resistivity and conductivity). 2) Alternate the magnets' poles along the path (N, S, N, S) as K&J Magnetics did with its row of block magnets, and as the eddy-current bike light on Printables 455016 does ('Insert the magnets into the rotor with alternating polarity'). 3) Keep the gap tiny and rigid: K&J used about 1/8 in (3 mm), a DIY roller trainer used 1-2 mm (girogeek), and a bigger gap weakens the maximum braking (German Wikipedia). Magnets on both sides of the disc, facing each other across a small gap, give a stronger, more even field (K&J Magnetics). 4) Magnet pockets: press-fit pockets with a small hole behind each one let you push magnets out again with a hex key (Printables 564712; Printables 743728 press-fitted its magnets without glue). Strong magnets pull on each other and on steel screws while you assemble, so hold them firmly ⚑ [uncertain]. 5) Heat: the disc warms up in use (Wikipedia, Eddy current brake); keep PLA holders from touching it, since PLA gives at about 60 °C (CNC Kitchen), and keep magnets below their rated temperature (about 80 °C for a typical N42 magnet in K&J Magnetics' example). 6) Don't cut slots or radial gaps in the disc: they stop the current loops forming and reduce braking (German Wikipedia).

### Buying one (off-the-shelf parts)

Search for: 'neodymium block magnet' or 'neodymium disc magnet' (N42, N52; 'SH' or higher grades for heat), 'aluminium plate' or 'aluminium disc', 'copper sheet', 'copper pipe' (for drop-tube demos), 'eddy current brake', 'eddy current absorber' (dynamometers), 'hysteresis brake' (Magtrol (brand) and others; gives torque even at zero slip speed), 'magnetic particle brake' (RoyMech), 'magnetic resistance unit' for exercise bikes ⚑ [uncertain]. Sources: Wikipedia, Eddy current brake; K&J Magnetics; Magtrol hysteresis brake manual; RoyMech Brakes.

## Rules of thumb

- Drag force at low speed: F ≈ a·σ·d·B²·A·v, so braking grows with the conductor's conductivity σ, its thickness d, the magnet's pole area A and the speed v, and with the square of the field strength B, so doubling the field gives about four times the braking (K&J Magnetics, Eddy Current Brakes).
- Braking is proportional to speed at low speeds, so a falling or spinning load settles at a steady terminal speed where drag equals the driving force (K&J Magnetics; Wikipedia, Magnetic damping), and there is no holding force at standstill (Wikipedia, Eddy current brake).
- The force doesn't rise forever: it peaks at a 'critical speed' and then falls because of the skin effect (Chen et al. 2019, abstract via OpenAlex); the ICE 3 train's eddy-current brake gives its greatest force, about 10 kN per brake shoe, at 75 km/h and less above that (German Wikipedia, Wirbelstrombremse).
- Conductor choice (Wikipedia conductivity table): copper 59.6 MS/m, aluminium 35.5 MS/m, carbon steel 7 MS/m, stainless steel 1.45 MS/m, so copper brakes about 1.7× harder than aluminium of the same thickness (our calculation), and stainless barely works.
- Keep the magnetic field at right angles to the plate for the strongest braking, keep the gap small, and don't slot the disc (German Wikipedia, Wirbelstrombremse).
- Linear train eddy-current brakes run about 7 mm from the rail (Wikipedia, Eddy current brake); hobby builds use 1-3 mm (girogeek; K&J Magnetics).
- Heat reduces braking: copper's resistance rises about 0.4% per °C (Wikipedia conductivity table), so a disc 50 °C hotter conducts about 17% less (our calculation); disc brakes get hotter than linear ones because the same metal passes the magnet again and again (Wikipedia, Eddy current brake).
- Neodymium magnets lose some strength reversibly as they warm and lose it permanently above their maximum operating temperature: about 80 °C for K&J's N42 example, 150 °C for N42SH, 220 °C for N35AH (K&J Magnetics, Temperature and Neodymium Magnets).

## Common failures

Too little braking: magnets too weak or too few, gap too big, conductor too thin or a poor conductor (steel or stainless), or speed too low (K&J Magnetics; German Wikipedia; Hackaday.io, Braker One). Poor magnet arrangement (not alternating poles) or a slotted disc that breaks up the current loops (German Wikipedia). Braking fades as the disc heats up (Wikipedia conductivity table), and magnets weaken or are permanently demagnetised by heat (K&J Magnetics). Magnets pulled out of their pockets by attraction to each other or to nearby steel, or rubbing on the disc if the gap closes ⚑ [uncertain]. Expecting it to stop completely: it only slows, and theoretically never quite reaches standstill (German Wikipedia).

## Safety

Strong neodymium magnets can pinch skin and even break bones when they snap together or onto steel, can chip and throw sharp fragments, and are very dangerous if a child swallows more than one (Wikipedia, Neodymium magnet). They can also damage magnetic cards and some electronics (Wikipedia, Neodymium magnet). Never rely on an eddy-current brake to hold a load or stop something completely; electromagnet versions stop braking if power fails (Wikipedia, Eddy current brake). The disc or plate can get hot after heavy braking.

## Related

- Friction brake: pads rub on a disc or drum, so it can hold still, but it wears, heats unevenly and can fade or grab
- Hysteresis brake: also contactless, but gives nearly the same torque at any speed, including standstill (Magtrol manual)
- Magnetic particle brake: a coil makes magnetic powder lock a rotor, adjustable by current (RoyMech, Brakes)
- Magnetic coupling and magnetic gear: magnets pass turning force through a gap instead of braking it
- Electromagnetic (power-off) brake: uses a magnet to work a friction brake, so it can hold a load
- Regenerative and dynamic braking: a motor used as a generator (for example with its leads shorted or fed to a resistor) brakes in a similar speed-dependent way (Wikipedia, Brake)
- Dampers (oil or air) and speed governors (air vanes): other speed-dependent ways to slow or steady motion

## Make it yourself

- [Dual-Tube Lenz's Law Visualizer (Jonathan L, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1644230-dual-tube-lenzs-law-visualizer): Printed end caps for a copper tube (magnet falls slowly) beside a clear tube (steel weight free-falls), to compare eddy-current braking with free fall *(licence: CC BY-NC-SA)*
- [Eddy Current Brake Experiment (Instructables)](https://www.instructables.com/Eddy-Current-Brake-Experiment/): A neodymium magnet pendulum swinging just above a block of wood and a block of aluminium; the aluminium damps the swing until the magnet stops *(licence: ⚑ [uncertain])*
- [Bike Stuff: Eddy Current Resistance Unit for Aluminum Bike Rollers (girogeek blog, 2009)](http://girogeek.blogspot.com/2009/11/so-i-decided-that-in-order-to-gain-some.html): Home-made resistance unit: small neodymium disc magnets hot-glued to a wooden block held 1-2 mm from aluminium rollers *(licence: ⚑ [uncertain])*
- [Eddy Currents (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/eddy-currents): Simple experiment: a 1 in × 1/8 in disc magnet sliding down a 1/8 in thick aluminium strip, slowed by eddy currents *(licence: link only)*

## Pictures, videos and models

- [File:Eddy current brake diagram.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg): A disc eddy-current brake: a spinning metal disc between magnet poles, with the induced current loops and the resulting drag *(licence: CC0 (Chetvorno))*
- [File:Eddy currents due to magnet.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg): A metal sheet moving under a magnet, with the swirling currents ahead of and behind the magnet and their opposing fields *(licence: CC0 (Chetvorno))*
- [File:What can you do with a Neodymium magnet and a copper pipe-.webm (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm): Video of a neodymium magnet falling slowly through a copper pipe (Lenz's law and eddy currents) *(licence: CC BY 3.0 (Avichal Sharma))*
- [File:KWh meter magnetic brake.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg): Adjustable permanent-magnet eddy-current brake on the aluminium disc of a 1973 electricity meter *(licence: CC0 (Olli Niemitalo))*
- [Eddy Current Brakes (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/eddy-current-brakes): Photos and graphs of magnet trolleys and an alternating-pole magnet row braking an aluminium plate on a ramp, with the drag-force formula *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 11 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = press or vice, hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…t holder and disc hub; non-magnetic spacers or shims help set the gap ⚑ [uncertain]; pressing magnets into print…"

## Sources

- <https://en.wikipedia.org/wiki/Eddy_current_brake>
- <https://en.wikipedia.org/wiki/Eddy_current>
- <https://en.wikipedia.org/wiki/Magnetic_damping>
- <https://en.wikipedia.org/wiki/Lenz%27s_law>
- <https://de.wikipedia.org/wiki/Wirbelstrombremse>
- <https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity>
- <https://en.wikipedia.org/wiki/Neodymium_magnet>
- <https://en.wikipedia.org/wiki/Brake>
- <https://en.wikipedia.org/wiki/Fishing_reel>
- <https://www.kjmagnetics.com/blog/eddy-current-brakes>
- <https://www.kjmagnetics.com/blog/eddy-currents>
- <https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets>
- <https://www.magtrol.com/wp-content/uploads/hbmanual.pdf>
- <https://roymech.org/Useful_Tables/Drive/Brakes.html>
- <https://api.openalex.org/works/doi:10.3390/en12132622>
- <https://hackaday.io/project/171924-braker-one-robot>
- <https://hackaday.io/project/171924-braker-one-robot/log/179881-eddy-current-brake-failure>
- <http://girogeek.blogspot.com/2009/11/so-i-decided-that-in-order-to-gain-some.html>
- <https://www.instructables.com/Eddy-Current-Brake-Experiment/>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg>
- <https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg>
- <https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm>
- <https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg>
- <https://api.printables.com/graphql/>
