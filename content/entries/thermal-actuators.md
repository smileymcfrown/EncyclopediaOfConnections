---
title: Thermal actuators
description: 'A heat-driven mover: a bimetal strip bends (or a bimetal disc snaps inside-out) and a wax capsule pushes out
  a pin when warmed, turning a temperature change, or an electric heater, into a small push that trips or opens a latch, valve
  or switch.'
num: 208
term: 'Thermal actuator: bimetallic strip (thermostatic bimetal) and wax motor (wax thermostatic element, paraffin actuator)'
plain_name: 'Parts that move by themselves when they get hot: a strip of two metals stuck together that bends as it warms,
  or a small sealed can of wax that pushes a pin out when the wax melts, used to trip, open or lock a catch'
aliases:
- bimetal strip / bimetallic strip / thermostatic bimetal / thermobimetal
- bimetal disc / snap disc / snap-action bimetal thermostat / thermal cutout (TCO) / thermal switch
- bimetal coil (spiral bimetal, as in dial thermometers)
- wax motor / wax actuator / wax pellet / wax element / paraffin actuator / phase-change actuator
- thermostatic element (car engine thermostat, radiator valve head)
- thermoelectric actuator / electrothermal actuator / thermal actuator (heated wax heads for underfloor-heating manifolds
  and zone valves)
- High Output Paraffin (HOP) actuator (aerospace term, Tibbitts 1988)
- Klixon (brand; snap-disc thermal cutouts, named in Wikipedia's Thermal cutoff article)
family: powered & active connectors
other_families: ['locks, latches & catches', torque limiting & slip]
finder:
  job: [hold or release using power, slip or let go when overloaded, change the kind of motion]
  motion: multiple
  special_behaviour: [over-centre, fail-safe or breakaway, motion conversion]
  holding_principle: [not a holding joint, powered hold, spring force]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, 3D print (FDM), sheet metal]
  connects: [not applicable]
  power_source: [electricity, heat]
  power_loss: keeps its last state
  motion_in: [heat]
  motion_out: [straight push or pull]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: partly
  removability: removable
  power: both
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…a spanner'', underfloor heating supplier); snips to cut bimetal
      strip [uncertain]; for electric versions, wiri…"'
confirmed: []
open_points: []
uncertain_fields: [tools_needed, making_tips_3d_printing, when_not_to_use, safety_notes]
diagram_idea: 'Two side-by-side panels: left, a bimetal strip fixed at one end, drawn cold (straight) and hot (curved, with
  the high-expansion layer on the outside), its tip pushing a small sear so a spring-loaded latch flies open; right, a wax
  capsule cut in half, cold (solid wax, pin in) and hot (liquid wax grown 15%, pin out a few millimetres, return spring squashed),
  with a thermometer and a small PTC heater icon.'
links:
- url: https://commons.wikimedia.org/wiki/File:Bimetal.gif
  title: Bimetal.gif (Wikimedia Commons), by Baran Ivo
  shows: Animated scheme of a bimetal strip bending as it is heated
  license: CC BY-SA 3.0 (also GFDL 1.2)
- url: https://commons.wikimedia.org/wiki/File:Bimetal_coil_reacts_to_lighter.gif
  title: Bimetal coil reacts to lighter.gif (Wikimedia Commons), by Hustvedt
  shows: A bimetal coil from a thermometer uncoiling when a lighter heats it and coiling back when the flame is removed
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:Double_valve_automotive_thermostat.jpg
  title: Double valve automotive thermostat.jpg (Wikimedia Commons), by Dougsim
  shows: Photo of a car engine thermostat built around a wax pellet element, with two valve discs
  license: CC BY-SA 3.0
- url: https://www.youtube.com/watch?v=MiADday0mDA
  title: 'BOLTR: Wax Actuated Motor | Mindblowing OLD Tech (AvE)'
  shows: Teardown of an appliance wax motor, cut in half to show the wax, seal and piston (featured by Hackaday, 2018; title
    checked with YouTube oEmbed; contains strong language)
  license: YouTube standard licence; link only
- url: https://commons.wikimedia.org/wiki/File:Bimetallic_strip_from_circuit_breaker.JPG
  title: Bimetallic strip from circuit breaker.JPG (Wikimedia Commons), by Dmitry G
  shows: Photo of the thermal (bimetal) trip element taken from a circuit breaker
  license: CC BY-SA 3.0
make_it_yourself:
- url: https://www.printables.com/model/1452459-hydronic-manifold-wax-motor-adapter
  title: Hydronic Manifold Wax Motor Adapter, by Brian Piccioni (URL from Printables API, page not opened)
  what_it_is: An adjustable printed threaded adapter that sets the height of a wax-motor heating head so its short stroke
    closes the valve; description read through the Printables API
  license: Creative Commons Attribution
- url: https://www.thingiverse.com/thing:2745891
  title: Automatic Greenhouse Vent Adapter, by deprav3d (Thingiverse)
  what_it_is: Printed adapter for fitting a cheap wax-cylinder automatic greenhouse window opener without drilling the aluminium
    frame; screws act as the pivot points
  license: CC BY 4.0 (from the page's schema.org metadata)
- url: https://hackaday.com/2014/11/10/wax-motors-add-motion-to-your-projects/
  title: Wax Motors Add Motion To Your Projects (Hackaday, 2014), with electronicsNmore's video 'WAX MOTORS ~ A Full Understanding
    Of Operation & Construction'
  what_it_is: Tutorial and teardown explaining how PTC-heated appliance wax motors work and how to reuse salvaged ones in
    projects
  license: article and video; link only
- url: https://www.youtube.com/watch?v=5fI-El2kipE
  title: Homemade bimetallic strips - Thermostat demonstration // Homemade Science with Bruce Yeany
  what_it_is: Video showing how to make simple bimetal strips and use one as a thermostat (title checked with YouTube oEmbed)
  license: YouTube standard licence; link only
sources:
- https://en.wikipedia.org/wiki/Bimetallic_strip (read via the Wikipedia API)
- https://en.wikipedia.org/wiki/Wax_motor (read via the Wikipedia API)
- https://en.wikipedia.org/wiki/Wax_thermostatic_element (read via the Wikipedia API)
- https://en.wikipedia.org/wiki/Thermal_cutoff (read via the Wikipedia API)
- https://en.wikipedia.org/wiki/Kettle
- https://en.wikipedia.org/wiki/Thermostatic_radiator_valve
- https://www.ibt.co.il/uploaded_files/documents/Kanthal_Thermostatic_Bimetal_U3743.pdf (Kanthal Thermostatic Bimetal Handbook,
  catalogue 3-A-1-3; formulas on pp. 11 and 109-110, application notes pp. 84-85 and 97)
- 'https://ntrs.nasa.gov/api/citations/19880012086 (Tibbitts, ''High output paraffin actuators: Utilization in aerospace mechanisms'',
  22nd Aerospace Mechanisms Symposium, 1988)'
- https://ntrs.nasa.gov/api/citations/19880012086/downloads/19880012086.pdf
- https://ntrs.nasa.gov/api/citations/19910015305/downloads/19910015305.pdf (Maus and Tibbitts, 'Resettable binary latch mechanism
  for use with paraffin linear motors')
- https://www.nasa.gov/wp-content/uploads/2025/02/6-soa-structures-2024.pdf (NASA State-of-the-Art of Small Spacecraft Technology,
  Structures, Materials and Mechanisms; lists paraffin wax and thermal bimorph actuators)
- https://hackaday.com/2018/06/18/dissecting-the-elusive-wax-motor/
- https://hackaday.com/2014/11/10/wax-motors-add-motion-to-your-projects/
- https://hackaday.com/tag/wax-motor/
- https://www.theunderfloorheatingcompany.co.uk/product/24v-4-wire-thermal-actuator/
- https://www.resideo.com/gb/en/products/comfort/zoning-underfloor-heating/underfloor-heating/m4410k1515-thermoelectric-actuator-010v-small-stroke-100n-no-cable-m4410k1515/
- https://www.calcoelectric.com/images/pdfs_thermostats/calco_ksd301series.pdf
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/asa_1809
- https://commons.wikimedia.org/wiki/Category:Bimetallic_strips
- https://commons.wikimedia.org/wiki/File:Bimetal.gif
- https://commons.wikimedia.org/wiki/File:Bimetal_coil_reacts_to_lighter.gif
- https://commons.wikimedia.org/wiki/File:Double_valve_automotive_thermostat.jpg
- https://commons.wikimedia.org/wiki/File:Bimetallic_strip_from_circuit_breaker.JPG
- https://www.youtube.com/watch?v=MiADday0mDA (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=sApyrDEXGAI (verified via YouTube oEmbed; electronicsNmore wax motor video)
- https://www.youtube.com/watch?v=5fI-El2kipE (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=f45kAmjAOYA (verified via YouTube oEmbed; 'Animation How Wax type thermostat works', TechTrixInfo)
- https://www.printables.com/model/1452459-hydronic-manifold-wax-motor-adapter (URL from Printables API, page not opened;
  read via https://api.printables.com/graphql/)
- https://api.printables.com/graphql/
- https://www.thingiverse.com/thing:2745891
research: research/connection-types/results/Thermal_actuators_bimetal_strip_wax_motor.json
---

A heat-driven mover: a bimetal strip bends (or a bimetal disc snaps inside-out) and a wax capsule pushes out a pin when warmed, turning a temperature change, or an electric heater, into a small push that trips or opens a latch, valve or switch.

**In plain words:** Parts that move by themselves when they get hot: a strip of two metals stuck together that bends as it warms, or a small sealed can of wax that pushes a pin out when the wax melts, used to trip, open or lock a catch. **Proper term:** Thermal actuator: bimetallic strip (thermostatic bimetal) and wax motor (wax thermostatic element, paraffin actuator).

**Also called:** bimetal strip / bimetallic strip / thermostatic bimetal / thermobimetal; bimetal disc / snap disc / snap-action bimetal thermostat / thermal cutout (TCO) / thermal switch; bimetal coil (spiral bimetal, as in dial thermometers); wax motor / wax actuator / wax pellet / wax element / paraffin actuator / phase-change actuator; thermostatic element (car engine thermostat, radiator valve head); thermoelectric actuator / electrothermal actuator / thermal actuator (heated wax heads for underfloor-heating manifolds and zone valves); High Output Paraffin (HOP) actuator (aerospace term, Tibbitts 1988); Klixon (brand; snap-disc thermal cutouts, named in Wikipedia's Thermal cutoff article).

## How it works

A bimetal strip is two metals with different thermal expansion bonded along their length; when heated one side grows more than the other, so the strip curls, and 'the sideways displacement of the strip is much larger than the small lengthways expansion in either of the two metals' (Wikipedia). A dished bimetal disc stores that strain and then flips ('clicks') to the opposite curve at a set temperature, which gives a sudden snap instead of a slow creep (Wikipedia, Thermal cutoff; Kanthal). A wax motor uses the 5-20% volume increase of wax as it melts: the expanding liquid presses on a sealed diaphragm or rubber boot and drives a pin out with high force; as it cools and solidifies, a spring pushes the pin back (Wikipedia, Wax motor; Tibbitts 1988). Either can be heated by the surroundings (engine coolant, sun, steam) or on purpose by an electric heater, so it can trip a latch on command.

## Parts

Bimetal: a single piece (two metal layers rolled together), often with a contact, rivet and adjusting screw, or a pre-formed dished disc in a sealed cup (KSD301 parts: bimetal disc, operating rod, contacts, base, cover). Wax motor: a small assembly that acts as one unit: metal cup of wax, rubber diaphragm or squeeze boot, piston rod, return spring, and in electric versions a PTC heater (Wikipedia; Tibbitts 1988).

## Everyday examples

- A car engine thermostat: a wax pellet opens the coolant valve at about 70-90 °C (Wikipedia, Wax thermostatic element)
- An electric kettle that switches itself off: 'A bimetallic strip, heated through a pipe by the steam ... flexes, and cuts off the current' (Wikipedia, Kettle)
- Dishwashers and front-loading washing machines: a wax motor releases the detergent-flap catch and locks the door during a wash (Wikipedia, Wax motor)
- Circuit breakers and radiator valves: a bimetal trips a breaker on too much current (Wikipedia, Bimetallic strip); a wax plug in a thermostatic radiator valve head closes the valve as the room warms (Wikipedia, Thermostatic radiator valve)

## When to use it

Use a thermal actuator when something should happen automatically at a temperature with no electronics at all (open a greenhouse vent, trip on overheating, cut off a heater), or when you want a silent, gentle, cheap electric latch release that tolerates damp: 'In moist conditions a wax motor costs less for equivalent reliability than an electromagnetic solenoid or motor latch', it moves 'smooth and gentle', and as a resistive load it needs no snubber (Wikipedia, Wax motor). Good for slow jobs that need a strong push from a small part (up to about 100-200 N from a thumb-sized wax head) and for a built-in time delay, such as a door that stays locked for a minute after power is cut. Use a bimetal to sense temperature or current and trip a latch or contacts.

## When not to use it

Not when the release must be fast or happen at an exact moment: it takes seconds to minutes (Tibbitts 1988); use a solenoid latch or servo latch instead. Not for long strokes or precise positions: use a servo, linear actuator or lead screw. Not for battery projects that must fire many times: heating wastes about 95% of the energy (Tibbitts); a latching solenoid or servo uses less ⚑ [uncertain: comparison not measured]. Avoid where the surroundings can reach the trigger temperature by accident, such as a hot car or direct sun, unless that is the point ⚑ [uncertain]. A bimetal strip alone is too weak to hold anything; use it only to trip a stronger catch. For silent, fast pull on command, a shape-memory-alloy (nitinol) wire is the closer alternative.

## Details

- **What it does (jobs):**
  - hold or release using power: an electrically heated wax motor or bimetal pushes or trips a latch on command (dishwasher detergent flap, washing-machine door lock, Wikipedia)
  - slip or let go when overloaded: in circuit breakers and motor overload protectors a strip heated by too much current bends and 'operates a linkage that unlatches a spring-operated contact' (Wikipedia)
  - change the kind of motion: turns a change in temperature straight into a push or a bend, e.g. opening a greenhouse vent or engine coolant valve with no electronics (Wikipedia)
- **Movement:** multiple: slide (a wax motor pushes a pin straight out, stroke 1.5-16 mm depending on type, Wikipedia) or flex (a bimetal strip bends at its free end, or a disc snaps inside-out)
- **Directions it can move (degrees of freedom):** 1: the wax piston slides along its own axis, or the bimetal's free end bends in one plane; the part it drives is usually a separate latch or valve
- **Special behaviour:**
  - over-centre (snaps past a point and stays): a shallow dome-shaped bimetal cap 'clicks' to an inside-out shape when heated (Wikipedia, Thermal cutoff) and snaps back only when it has cooled well below (standard KSD301 discs reset about 17 °C lower, Calco datasheet)
  - fail-safe or breakaway: bimetals trip circuit breakers, motor protectors and thermal cutouts on overheating (Wikipedia); a wax-locked washing-machine door stays locked briefly after power loss, longer than the drum takes to stop, 'then reliably unlocks as the wax cools' (Wikipedia, Wax motor)
  - motion conversion (e.g. rotary to linear): heat is turned directly into a straight push (wax) or a bend (bimetal) with no motor or gears
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it is a small actuator that pushes or trips a separate latch, valve or contact
  - powered hold: an electrically heated wax motor keeps its pin pushed out (e.g. a door locked) only while it is heated
  - spring force (a spring or springy part presses it in place): a return spring or dead weight pushes the wax piston back as it cools (Wikipedia)
- **Input and output:** Heat in -> straight push out (wax motor, 1.5-16 mm stroke, Wikipedia; about 2 mm in AvE's teardown, Hackaday; 3 mm in underfloor-heating heads) or bend/snap (bimetal). Very slow and inefficient: power-on to full stroke 15 s to 20 min, efficiency about 5% (Tibbitts 1988); underfloor heating heads take about 3 min to open or close after a short dead time (supplier data). Shaft arrangement and ratio: not applicable. Back-drivable: not applicable; it is driven by temperature, and the return spring sets how it returns.
- **Power:** passive or powered, depending on version. Passive: heated by its surroundings (car thermostats, greenhouse vent openers, kettle switch-offs). Powered: an electric heater warms it (usually a PTC thermistor that limits its own temperature, Hackaday 2014; underfloor heads use 24 V or 230 V, 3 W running with a 90 W starting surge), or current passes through the bimetal itself (Kanthal). If power is lost: it slowly returns to its cold position as it cools, so it keeps its last state only for a while; manual-reset bimetal cutouts stay tripped until someone resets them (Wikipedia, Thermal cutoff).
- **Load:** Wax: medium to heavy push for its size, only along the pin axis: about 100 N for underfloor-heating heads (Resideo M4410K1515 '100N'), up to 200 N for commercial wax pellets and up to 4000 N for high-output aerospace types (Tibbitts 1988); it cannot pull except via its return spring. Bimetal: light; Wikipedia notes bimetal strips 'cannot produce strength in its moves' because they must be thin to bend noticeably, so they are used to trip a latch or switch contacts rather than carry load; stacks of strips give more force (Kanthal).
- **Play and precision:** noticeable: wax elements show hysteresis (different positions on heating and cooling) caused by thermal lag and friction (Wikipedia); snap discs switch back about 17 °C below where they tripped (Calco KSD301 standard differential); a bimetal only deflects linearly with temperature within a limited range (Kanthal). They are triggers, not precise locators; position depends on temperature.
- **Taking it apart:** removable: wax elements screw in (e.g. M30 x 1.5 thread on heating manifolds) or clip into a bracket; bimetal strips are screwed or riveted at one end and snap discs are mounted by their cup or terminals
- **How often it can be reused:** many times: commercial wax pellet actuators are 'resetable for up to 50K cycles' and high-output paraffin actuators exceed 10,000 cycles (Tibbitts 1988); bimetal thermostats cycle for the life of the appliance; 'one-shot' bimetal cutouts that cannot reset also exist (Calco KSD301)
- **Sealing:** none as a joint; the wax is sealed inside its capsule by a diaphragm or rubber squeeze boot (Wikipedia; Tibbitts), and KSD301 snap-disc thermostats are 'hermetically sealed' (Calco) but must still be kept away from liquids at their terminals
- **Adjustable:** partly: many bimetal thermostats set their switching temperature with an adjusting screw or knob that restrains the strip (Kanthal; Wikipedia); a wax element's working temperature is fixed by its wax recipe (Wikipedia), though where its pin meets the valve or latch can be set with a threaded adapter (Printables hydronic wax-motor adapter)
- **Access needed:** one side only (blind): a wax head screws onto one side of the valve or latch it pushes, and a bimetal strip is fixed at one end on the side it acts from
- **Materials:** Bimetal: an active high-expansion layer (alloys of nickel, iron, manganese or chromium) bonded to a passive low-expansion layer, often Invar (36% nickel iron) (Kanthal); simpler pairs are steel with copper or brass (Wikipedia). Wax motors: specially distilled narrow-range paraffin, sometimes mixed with copper particles for even melting, in a brass, stainless-steel or titanium case with a rubber boot or diaphragm and a steel rod (Wikipedia; Tibbitts 1988). Printed plastic suits only the brackets, levers and latches around them.
- **Heat, cold, water and wear:** Wax elements work over about -15 °C to +120 °C (Wikipedia), with the melt point set by the wax (Tibbitts: -20 °C to 120 °C); response depends on power, insulation and starting temperature, so cold or draughty places slow them down (Tibbitts 1988). Example heating head: ambient 0-50 °C in operation, fluid up to 100 °C (underfloor heating supplier). Bimetals: the most active grades should stay under about 250 °C (Kanthal); a thermostat whose strip is held under restraint by an adjusting screw can be permanently bent if exposed to very low temperatures (Kanthal). Snap-disc thermostats want humidity no higher than 90%, no caustic or flammable gas or conductive dust, and liquids kept out of the inside (Calco KSD301). Corrosion resistance differs between bimetal grades (Kanthal). Wax motors, unlike old liquid bellows thermostats, are insensitive to pressure changes (Wikipedia, Wax thermostatic element).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: wax heating heads (thermoelectric actuators), car engine thermostats, greenhouse vent openers, appliance wax motors, snap-disc thermostats and thermostatic bimetal strip
  - 3D print (FDM): brackets, levers, trip arms, latches and adapters around the element (e.g. a printed threaded adapter for a manifold wax head)
  - sheet metal: cutting and bending bimetal strip to length; mounting plates
- **Printing it in one piece (print in place):** no: the thermal element is bought; printed parts (levers, latches, brackets) are made separately and assembled around it
- **Tools:** screwdriver or spanner to mount; hand-tighten screw-on heating heads ('do NOT use a spanner', underfloor heating supplier); snips to cut bimetal strip ⚑ [uncertain]; for electric versions, wiring and a relay or transistor (resistive load, so no snubber or flyback diode is needed, Wikipedia; Hackaday 2014); thermal paste to couple a snap disc to the surface it senses (Calco)
- **Difficulty:** moderate: buying and fitting a wax heating head, car thermostat, snap disc or bimetal strip is easy, but their small stroke and slow action mean the latch must be designed to need only a small nudge; making a sealed wax actuator yourself is hard

### 3D printing tips

(1) Heat-proof material: the element runs at its trigger temperature (car thermostats open at about 70-90 °C, Wikipedia) and heated heads get warm; PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa), so use PETG or ASA (ASA 'up to 93 °C', Prusa) for anything touching the element, and do not print the latch spring from PLA, which will creep ⚑ [uncertain: creep not measured here]. (2) Small stroke: wax pins move only a few millimetres (about 2-3 mm on appliance and heating heads), so design the latch as a trigger that needs only a small push (a sear or a cam that releases a stored spring), or add a printed lever to multiply the movement at the cost of force ⚑ [uncertain: design advice]. (3) Return force: the pin needs a return force of about 20-30% of its operating force from a spring or weight (Wikipedia, citing Duerig 1990); use a metal spring. (4) Adjustability: add a threaded or slotted adapter so the pin-to-latch gap can be tuned (the Printables hydronic wax-motor adapter does this; its designer printed it in PLA because it only sits on a heating manifold, and suggests PETG if it fails). (5) Bimetal cannot be printed; buy strip or discs, fix one end with a screw or rivet, and keep printed parts from blocking its free end. (6) Snap discs sense best with the cup pressed flat against the heat source and thermal grease between (Calco).

### Buying one (off-the-shelf parts)

Search terms: 'thermoelectric actuator 24V NC M30x1.5' or 'underfloor heating actuator' (wax head, about 100 N, 3-4 mm stroke); 'wax motor' / 'wax actuator' / 'thermal actuator' (appliance spares, e.g. 'dishwasher wax motor', 'washing machine door lock'); 'wax pellet thermostat' / 'engine thermostat'; 'automatic greenhouse vent opener' / 'solar vent opener' (wax cylinder, no power); 'thermostatic radiator valve head'; 'KSD301' / 'snap disc thermostat' / 'bimetal thermostat normally closed / normally open / manual reset'; 'thermal cutout' / 'thermal switch'; 'thermostatic bimetal strip' (sold by the metre); 'PTC heater' / 'PTC heating element' to heat a wax element; 'thermal overload relay'.

## Rules of thumb

- Wax grows 5-20% in volume when it melts (Wikipedia, Wax motor); paraffin actuators use about 15% (Tibbitts 1988, NASA NTRS).
- Wax motor size: commercial wax pellets give up to about 200 N and 50,000 cycles; high-output designs reach 4000 N and 10 cm stroke, with melting points chosen anywhere from -20 °C to 120 °C (Tibbitts 1988). Wax thermostatic elements have strokes of 1.5-16 mm and cover -15 °C to +120 °C (Wikipedia, Wax thermostatic element).
- Return spring: provide a bias force of about 20-30% of the operating force to push the pin back past the seals (Wikipedia, Wax motor, citing Duerig 1990).
- Expect it to be slow: 15 s to 20 min from power-on to full stroke, about 5% efficient (Tibbitts 1988); heating heads take about 3 min, after a short dead time (underfloor heating supplier data).
- Bimetal strip bend: deflection at the free end of a strip fixed at one end is A = a x (T - T0) x L^2 / s, where a is the specific deflection, L the free length and s the thickness, valid when A is under about 10% of L (Kanthal Thermostatic Bimetal Handbook, eq. 9). Worked example with KANTHAL 155 (a = 15.6 x 10^-6 per °C, Kanthal): a 50 mm long, 0.5 mm thick strip warmed by 50 °C bends about 3.9 mm (arithmetic from the handbook formula).
- Bimetal force: if the tip is blocked it pushes with F = a x E x (T - T0) x b x s^2 / (4 L) (b = width, E = modulus) (Kanthal, eq. 30), so force rises with the square of thickness while bend falls with thickness.
- Get a snap, not a creep: a plain bimetal 'has a slow action unless it is specially shaped'; use dished snap discs or a spring or magnet to store energy for a clean switch 'without flutter' (Kanthal).
- Temperature limits: the most active bimetals should not go much above 250 °C, general types up to about 350 °C, high-temperature types about 450 °C (Kanthal); Wikipedia gives about 150 °C to 500 °C depending on the pair. An electric heater for a bimetal typically needs 1-100 W (Kanthal).

## Common failures

Wax motor does not retract or retracts slowly: return spring too weak or missing, since seals resist the piston and a bias of about 20-30% of the operating force is needed (Wikipedia); fix with a stronger metal spring. Slow or incomplete stroke: too little heater power, or heat lost to cold surroundings (Tibbitts 1988). Valve or latch not reached: the head sits at the wrong height for what it pushes, so its few millimetres of stroke never close the valve or trip the catch (the Printables adjustable adapter was made because some heating heads would not close a taller valve); make the gap adjustable. Bimetal strip permanently bent or off-calibration: overstressed by an external force or by restraint at very low temperature (Kanthal); snap disc changed calibration after its cup was pressed or dented (Calco: 'must not be pressed to sink'). Contacts arc or chatter: a plain strip switches slowly; use a snap-action disc or spring (Kanthal). Nuisance cycling: a thermal switch in a hot spot turns a light or heater off and on every few minutes (Wikipedia, Thermal cutoff).

## Safety

Some appliance wax motors run directly on mains voltage (the one in electronicsNmore's video runs on 120 V AC, Hackaday 2014): treat them as mains wiring. Parts reach their trigger temperature and heaters get hot, so avoid touching them in use and keep them off plastics that soften. A door or lid held by a wax lock stays locked for a while after power is cut by design (Wikipedia); do not force it. Automatic-reset thermal switches can restart a machine as they cool; where a sudden restart is dangerous, use a manual-reset type (Wikipedia, Thermal cutoff). The wax is under very high pressure when hot (high-output actuators are designed around 20,700 kPa, Tibbitts 1988), so never heat an element beyond its rating or open one ⚑ [uncertain: general caution].

## Related

- Shape-memory-alloy wire latch (nitinol muscle wire): also driven by heat from a current, but pulls quickly and silently on a thin wire; less force per part than wax
- Solenoid latch: fast electric pull on command, but inductive (needs a diode) and noisier; wax motors are its slow, cheap, damp-tolerant alternative (Wikipedia)
- Servo or motorised latch: fast and holds its position with power off; more parts and electronics
- Burn-wire and fusible-link release: also a heat-triggered release, but one-shot: the link melts or is cut and must be replaced
- Self-folding print (4D printing): printed plastic that changes shape when heated, a printable cousin of the bimetal strip
- Bistable compliant mechanism (snap-through switch): the same snap-past-a-point idea as a bimetal snap disc, but moved by force instead of heat
- Sear and trigger (trip release mechanism): lets a tiny wax or bimetal movement release a large stored spring force
- Thermal fuse and thermal cutoff: bimetal or meltable-pellet switches that cut a circuit when hot (Wikipedia, Thermal cutoff)

## Make it yourself

- [Hydronic Manifold Wax Motor Adapter, by Brian Piccioni (URL from Printables API, page not opened)](https://www.printables.com/model/1452459-hydronic-manifold-wax-motor-adapter): An adjustable printed threaded adapter that sets the height of a wax-motor heating head so its short stroke closes the valve; description read through the Printables API *(licence: Creative Commons Attribution)*
- [Automatic Greenhouse Vent Adapter, by deprav3d (Thingiverse)](https://www.thingiverse.com/thing:2745891): Printed adapter for fitting a cheap wax-cylinder automatic greenhouse window opener without drilling the aluminium frame; screws act as the pivot points *(licence: CC BY 4.0 (from the page's schema.org metadata))*
- [Wax Motors Add Motion To Your Projects (Hackaday, 2014), with electronicsNmore's video 'WAX MOTORS ~ A Full Understanding Of Operation & Construction'](https://hackaday.com/2014/11/10/wax-motors-add-motion-to-your-projects/): Tutorial and teardown explaining how PTC-heated appliance wax motors work and how to reuse salvaged ones in projects *(licence: article and video; link only)*
- [Homemade bimetallic strips - Thermostat demonstration // Homemade Science with Bruce Yeany](https://www.youtube.com/watch?v=5fI-El2kipE): Video showing how to make simple bimetal strips and use one as a thermostat (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*

## Pictures, videos and models

- [Bimetal.gif (Wikimedia Commons), by Baran Ivo](https://commons.wikimedia.org/wiki/File:Bimetal.gif): Animated scheme of a bimetal strip bending as it is heated *(licence: CC BY-SA 3.0 (also GFDL 1.2))*
- [Bimetal coil reacts to lighter.gif (Wikimedia Commons), by Hustvedt](https://commons.wikimedia.org/wiki/File:Bimetal_coil_reacts_to_lighter.gif): A bimetal coil from a thermometer uncoiling when a lighter heats it and coiling back when the flame is removed *(licence: CC BY-SA 3.0)*
- [Double valve automotive thermostat.jpg (Wikimedia Commons), by Dougsim](https://commons.wikimedia.org/wiki/File:Double_valve_automotive_thermostat.jpg): Photo of a car engine thermostat built around a wax pellet element, with two valve discs *(licence: CC BY-SA 3.0)*
- [BOLTR: Wax Actuated Motor | Mindblowing OLD Tech (AvE)](https://www.youtube.com/watch?v=MiADday0mDA): Teardown of an appliance wax motor, cut in half to show the wax, seal and piston (featured by Hackaday, 2018; title checked with YouTube oEmbed; contains strong language) *(licence: YouTube standard licence; link only)*
- [Bimetallic strip from circuit breaker.JPG (Wikimedia Commons), by Dmitry G](https://commons.wikimedia.org/wiki/File:Bimetallic_strip_from_circuit_breaker.JPG): Photo of the thermal (bimetal) trip element taken from a circuit breaker *(licence: CC BY-SA 3.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 6 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…a spanner', underfloor heating supplier); snips to cut bimetal strip ⚑ [uncertain]; for electric versions, wiri…"

## Sources

- <https://en.wikipedia.org/wiki/Bimetallic_strip (read via the Wikipedia API)>
- <https://en.wikipedia.org/wiki/Wax_motor (read via the Wikipedia API)>
- <https://en.wikipedia.org/wiki/Wax_thermostatic_element (read via the Wikipedia API)>
- <https://en.wikipedia.org/wiki/Thermal_cutoff (read via the Wikipedia API)>
- <https://en.wikipedia.org/wiki/Kettle>
- <https://en.wikipedia.org/wiki/Thermostatic_radiator_valve>
- <https://www.ibt.co.il/uploaded_files/documents/Kanthal_Thermostatic_Bimetal_U3743.pdf (Kanthal Thermostatic Bimetal Handbook, catalogue 3-A-1-3; formulas on pp. 11 and 109-110, application notes pp. 84-85 and 97)>
- <https://ntrs.nasa.gov/api/citations/19880012086 (Tibbitts, 'High output paraffin actuators: Utilization in aerospace mechanisms', 22nd Aerospace Mechanisms Symposium, 1988)>
- <https://ntrs.nasa.gov/api/citations/19880012086/downloads/19880012086.pdf>
- <https://ntrs.nasa.gov/api/citations/19910015305/downloads/19910015305.pdf (Maus and Tibbitts, 'Resettable binary latch mechanism for use with paraffin linear motors')>
- <https://www.nasa.gov/wp-content/uploads/2025/02/6-soa-structures-2024.pdf (NASA State-of-the-Art of Small Spacecraft Technology, Structures, Materials and Mechanisms; lists paraffin wax and thermal bimorph actuators)>
- <https://hackaday.com/2018/06/18/dissecting-the-elusive-wax-motor/>
- <https://hackaday.com/2014/11/10/wax-motors-add-motion-to-your-projects/>
- <https://hackaday.com/tag/wax-motor/>
- <https://www.theunderfloorheatingcompany.co.uk/product/24v-4-wire-thermal-actuator/>
- <https://www.resideo.com/gb/en/products/comfort/zoning-underfloor-heating/underfloor-heating/m4410k1515-thermoelectric-actuator-010v-small-stroke-100n-no-cable-m4410k1515/>
- <https://www.calcoelectric.com/images/pdfs_thermostats/calco_ksd301series.pdf>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/asa_1809>
- <https://commons.wikimedia.org/wiki/Category:Bimetallic_strips>
- <https://commons.wikimedia.org/wiki/File:Bimetal.gif>
- <https://commons.wikimedia.org/wiki/File:Bimetal_coil_reacts_to_lighter.gif>
- <https://commons.wikimedia.org/wiki/File:Double_valve_automotive_thermostat.jpg>
- <https://commons.wikimedia.org/wiki/File:Bimetallic_strip_from_circuit_breaker.JPG>
- <https://www.youtube.com/watch?v=MiADday0mDA (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=sApyrDEXGAI (verified via YouTube oEmbed; electronicsNmore wax motor video)>
- <https://www.youtube.com/watch?v=5fI-El2kipE (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=f45kAmjAOYA (verified via YouTube oEmbed; 'Animation How Wax type thermostat works', TechTrixInfo)>
- <https://www.printables.com/model/1452459-hydronic-manifold-wax-motor-adapter (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)>
- <https://api.printables.com/graphql/>
- <https://www.thingiverse.com/thing:2745891>
