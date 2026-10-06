---
title: Float valve
description: 'A self-acting tap fitted through the wall of a tank: a float rides on the water and moves a lever, which opens
  the inlet when the level drops and presses a rubber washer or diaphragm onto the inlet hole when the level reaches a set
  height, keeping cisterns, troughs and reservoirs topped up with no power and no attention.'
num: 319
term: Float valve (ballcock, float-operated valve)
plain_name: A floating ball, cup or bottle on an arm that lets water into a tank and shuts it off by itself when the water
  rises to the right level, so the tank refills after use but never overflows
aliases:
- ballcock, ball cock, balltap (Wikipedia)
- ball valve or ball float valve (UK plumbers' everyday name; not the same thing as a quarter-turn ball valve tap) (diydata;
  APM)
- float-operated valve (the British Standard BS 1212 term) (Squote)
- fill valve, toilet fill valve, inlet valve, flush-tank fill valve (US and toilet terms) (UpCodes; DIY Doctor)
- Portsmouth valve and Croydon valve (the old piston types, BS 1212 Part 1) (Squote; Wikipedia)
- diaphragm ballvalve (BS 1212 Parts 2 and 3, brass and plastic bodies) (Squote)
- equilibrium float valve, compact float valve (BS 1212 Part 4) (Wikipedia; Squote)
- float cup valve or cup float valve (pioneered by Fluidmaster (brand) in 1957) and internal-float 'quiet fill' valve (Wikipedia;
  DIY Doctor)
- Torbeck valve (brand; a compact side- or bottom-entry WC cistern valve) (APM)
- anti-siphon fill valve (US plumbing-code term) (UpCodes)
- trough valve, stock-tank float valve, livestock waterer valve (Nelson Manufacturing)
- auto top-off (ATO) float valve (aquariums) (Thingiverse sbash); hydroponics or Kratky float valve (Hackaday)
- 'floatless (pressure-sensing) fill valve and delay fill valve: relatives that do the same job without a lever float (Wikipedia)'
family: hydraulics, pneumatics & vacuum
other_families: [seals & pass-throughs]
finder:
  job:
  - seal it, or pass cables or fluid through
  - slow it, stop it or keep its speed steady
  motion: multiple
  special_behaviour: [motion conversion, fail-safe or breakaway]
  holding_principle: [not a holding joint, friction or clamping, suction or air pressure]
  reuse_cycles: many times
  seal: watertight
  access_needed: both sides
  print_in_place: 'no'
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
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming:
  motion_in:
    kind: best guess
    reason: 'could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a
      lever: the closing force o..."'
  motion_out:
    kind: best guess
    reason: 'could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a
      lever: the closing force o..."'
  shaft_layout:
    kind: best guess
    reason: 'could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a
      lever: the closing force o..."'
confirmed: []
open_points:
- kind: content
  note: '*Float valve* and *Air bearing* cite some Thingiverse models whose licences weren''t shown (marked [uncertain]).
    A Commons page for a ram-pump video shows the uploader''s email address; the entry credits the name only.'
uncertain_fields: [play_and_precision, environment_limits, making_tips_3d_printing, common_failures, make_it_yourself]
diagram_idea: 'A cut-away tank shown twice side by side: on the left the water is low, the float has dropped and the arm has
  pulled the washer off the inlet so water pours in; on the right the water is at the set line, the float has lifted the arm
  and the washer is pressed onto the inlet, with a dashed overflow pipe just above the water line and a small lever sketch
  showing how the long arm multiplies the float''s push.'
links:
- url: https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg
  title: Portsmouth-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)
  shows: 'Labelled cross-section of a Portsmouth (piston) ballcock: float, float arm, pivot, piston, washer, seat and inlet'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg
  title: Portsmouth-Valve-Open.svg (SouthHamsian; Wikimedia Commons), used with Portsmouth-Valve-Closed.svg
  shows: 'A whole water tank with a Portsmouth-type ballcock open: the float has dropped with the water level and the arm
    has pulled the piston and washer away from the inlet'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg
  title: Diaphragm-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)
  shows: 'Cross-section of a diaphragm ballcock: the float arm pushes a plunger pin that presses a flexible diaphragm against
    the seat'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg
  title: Equilibrium-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons), with A_diagram_of_an_open_equilibrium_float_valve.svg
  shows: 'Equilibrium float valve closed (and, in the companion file, open): the float only seals a small relief hole, and
    water pressure on the diaphragm''s larger face holds the main valve shut'
  license: CC BY-SA 4.0
- url: https://www.youtube.com/watch?v=TTad0HzrQt8
  title: Water tank automatic valve (Nguyen Duc Thang, YouTube channel thang010146)
  shows: 'CAD animation of a float-operated tank valve cut in half: the float arm closes a cone-shaped valve as the water
    rises; the arm-to-lever angle sets the highest level (described in Thang''s 2700 Animated Mechanical Mechanisms, part
    3, p. 168)'
  license: link only (YouTube, all rights reserved)
make_it_yourself:
- url: https://www.thingiverse.com/thing:4574305
  title: Hydroponics Float Valve Snap-in No screws (cheungbx, Thingiverse) (page is JavaScript-only; description read from
    the page's metadata)
  what_it_is: Printed float valve for passive hydroponics, fed by gravity from a nutrient tank; keeps the level at no more
    than about 20 mm; PLA, 40% infill, no supports; the printed inlet pipe can be swapped for a 4.7 mm plastic tube
  license: '[uncertain: licence not shown in the page metadata]'
- url: https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/
  title: DIY Float Valve For Passive Hydroponics Leverages 3D Printing (Hackaday, 2022)
  what_it_is: 'Article and video on Billy''s printed float valve: a sealed printed float in a housing presses a silicone strip
    over the outlet when the level is high'
  license: link only
- url: https://www.thingiverse.com/thing:1679411
  title: Float valve for hose (JMK54, Thingiverse) (page is JavaScript-only; description read from the page's metadata)
  what_it_is: Printed lever float valve that fits through a tank wall, with a glued-on bottle or a rod-mounted float and a
    rubber ball as the seal; PLA (ABS preferred), 35% infill, no supports
  license: '[uncertain: licence not shown in the page metadata]'
- url: https://www.printables.com/model/1695086-planter-float-valve-reservoir-box
  title: Planter Float Valve Reservoir Box (Eric Hennigan, Printables) (URL from Printables API, page not opened)
  what_it_is: Parametric slotted box that houses a small bought float valve at the bottom of a planter to make it self-watering;
    print in PETG or ASA
  license: CC BY-NC-SA
- url: https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket
  title: Aquarium Auto Fill Float Ball Valve Bracket (William, Printables) (URL from Printables API, page not opened)
  what_it_is: Bracket for mounting a small bought float ball valve on an aquarium for automatic top-off
  license: CC BY
- url: https://www.thingiverse.com/thing:3353247
  title: Aquarium Trim Float Valve Mount (sbash, Thingiverse) (page is JavaScript-only; description read from the page's metadata)
  what_it_is: Two-part clamp that holds a float valve on an aquarium rim for auto top-off; printed in PETG ('Don't use PLA')
  license: '[uncertain: licence not shown in the page metadata]'
sources:
- https://en.wikipedia.org/wiki/Ballcock
- https://en.wikipedia.org/wiki/Hydraulic_shock
- https://en.wikipedia.org/wiki/Float_switch
- https://en.wikipedia.org/wiki/Archimedes%27_principle
- https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg
- https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg
- https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg
- https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg
- https://commons.wikimedia.org/wiki/File:A_diagram_of_an_open_equilibrium_float_valve.svg
- https://www.diydata.com/plumbing/ball_valves/ball_valves.php
- https://www.diydoctor.org.uk/projects/fit-float-valve.htm
- https://apmi.uk/blogs/news/float-valves-portsmouth-diaphragm-and-equilibrium-types-choosing-the-right-valve-for-cisterns
- https://squote.app/knowledge/plumbing/float-valves
- https://up.codes/s/fill-valves
- https://www.nelsonmfg.com/how-automatic-livestock-waterers-work-part-1-refilling-systems/
- https://removeandreplace.com/2013/03/18/how-does-an-evaporative-cooler-swamp-cooler-work/
- https://www.bobvila.com/articles/what-is-a-swamp-cooler/
- https://cs448m.github.io/lectures/machines/doc/3.pdf
- https://www.youtube.com/watch?v=TTad0HzrQt8
- https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/
- https://www.thingiverse.com/thing:4574305
- https://www.thingiverse.com/thing:1679411
- https://www.thingiverse.com/thing:3353247
- https://www.thingiverse.com/thing:696601
- https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf
- https://api.printables.com/graphql/
- https://www.printables.com/model/1695086-planter-float-valve-reservoir-box
- https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket
research: research/connection-types/results/Float_valve_ballcock.json
glossary: [misalignment, crank, solenoid, fail-safe--fail-secure, form-fit--force-fit--material-bond, pilot-hole, creep, perimeters,
  infill, check-valve, regulator, water-hammer]
---

A self-acting tap fitted through the wall of a tank: a float rides on the water and moves a lever, which opens the inlet when the level drops and presses a rubber washer or diaphragm onto the inlet hole when the level reaches a set height, keeping cisterns, troughs and reservoirs topped up with no power and no attention.

**In plain words:** A floating ball, cup or bottle on an arm that lets water into a tank and shuts it off by itself when the water rises to the right level, so the tank refills after use but never overflows. **Proper term:** Float valve (ballcock, float-operated valve).

**Also called:** ballcock, ball cock, balltap (Wikipedia); ball valve or ball float valve (UK plumbers' everyday name; not the same thing as a quarter-turn ball valve tap) (diydata; APM); float-operated valve (the British Standard BS 1212 term) (Squote); fill valve, toilet fill valve, inlet valve, flush-tank fill valve (US and toilet terms) (UpCodes; DIY Doctor); Portsmouth valve and Croydon valve (the old piston types, BS 1212 Part 1) (Squote; Wikipedia); diaphragm ballvalve (BS 1212 Parts 2 and 3, brass and plastic bodies) (Squote); equilibrium float valve, compact float valve (BS 1212 Part 4) (Wikipedia; Squote); float cup valve or cup float valve (pioneered by Fluidmaster (brand) in 1957) and internal-float 'quiet fill' valve (Wikipedia; DIY Doctor); Torbeck valve (brand; a compact side- or bottom-entry WC cistern valve) (APM); anti-siphon fill valve (US plumbing-code term) (UpCodes); trough valve, stock-tank float valve, livestock waterer valve (Nelson Manufacturing); auto top-off (ATO) float valve (aquariums) (Thingiverse sbash); hydroponics or Kratky float valve (Hackaday); floatless (pressure-sensing) fill valve and delay fill valve: relatives that do the same job without a lever float (Wikipedia).

## How it works

The water pushes the float up with a force equal to the weight of water it pushes aside (Archimedes' principle, Wikipedia), and the float arm acts as a lever that multiplies this force onto the valve. When the level falls, the float drops, the arm swings away and supply pressure pushes the washer or diaphragm off the inlet, so water flows in; as the level rises, the float lifts the arm until it presses the washer or diaphragm back onto the seat and shuts the supply at a preset level (Wikipedia 'Ballcock'). Because the valve closes gradually as the float rises, it is a simple automatic controller (Wikipedia: 'an example of negative feedback and of proportional control'). In an equilibrium valve the float only opens or shuts a tiny relief hole: water pressure behind the diaphragm then does the work of holding the main valve shut or letting it open, so a small float on a short arm can control mains pressure (Wikipedia; Commons diagram descriptions).

## Parts

A small assembly that acts as one unit. Lever types: a hollow sealed float (ball, cup or flat shape), a float arm, a pivot, a valve body that screws through the tank wall with a back-nut and washers, a seat (nozzle), and a closing part: a sliding piston with a rubber washer (Portsmouth type) or a plunger pin pressing a rubber diaphragm (diaphragm type) (Wikipedia diagrams; diydata). Equilibrium valves add a [pilot hole](../glossary.md#pilot-hole) through the diaphragm and a small pressure-relief hole that the float arm closes with its own washer (Wikimedia Commons diagram descriptions). Cup-float toilet valves have a cup-shaped float that slides up and down the upright valve body (DIY Doctor).

## Everyday examples

- The float and arm inside a toilet cistern that refill it after every flush (Wikipedia; DIY Doctor)
- The ball valve in a loft cold-water tank or central-heating header tank (UK homes) (DIY Doctor; APM)
- Automatic water troughs and drinkers for cattle, horses and chickens (Nelson Manufacturing; APM)
- The water reservoir in an evaporative (swamp) cooler, topped up as water evaporates (Remove and Replace; Bob Vila)

## When to use it

Use one when a tank, trough or reservoir must stay full while water is drawn from it at unpredictable times, and there is a supply under pressure (mains) or a higher reservoir to feed it: toilet and storage cisterns, animal drinkers, aquarium auto top-off, passive hydroponics and self-watering planters, and evaporative coolers (Wikipedia; Nelson Manufacturing; Hackaday 2022; Remove and Replace). It needs no power, sensors or pump, so it suits off-grid and outdoor setups, and with an equilibrium or diaphragm design it can control mains pressure from a small float (Wikipedia; APM).

## When not to use it

Don't use one where the fill must stop at an exact time or volume, or where you need an alarm or remote control: use a float switch (an electrical level sensor) with a [solenoid](../glossary.md#solenoid) valve or pump instead (Wikipedia 'Float switch'). Don't put one at the end of a hydraulic ram pump's delivery pipe: a ram that is blocked pumps up to its maximum pressure, stops and must be restarted by hand, so troughs fed by a ram need a continuous overflow instead (Clemson LGP 1017). Avoid a submerged inlet or home-made valve on a drinking-water connection: use an approved valve with an air gap or anti-siphon device (APM; UpCodes). For draining a tank automatically, use an automatic (bell) siphon or a pump with a float switch; the float valve only fills. Where animals can reach it, protect it or use a design with no exposed float, since a valve under water in a big tank is hard to reach and clean (Nelson Manufacturing).

## Details

- **What it does (jobs):**
  - seal it, or pass cables or fluid through: lets water through the tank wall when the level is low and seals the inlet shut when the tank is full (Wikipedia 'Ballcock')
  - slow it, stop it or keep its speed steady (loosely): keeps the water level steady by itself, refilling whatever is drawn off by a flush, by animals drinking, by evaporation or by plants, with no power (Wikipedia; Nelson Manufacturing; Remove and Replace)
- **Movement:** multiple: the float and arm swing up and down about a pivot (rotate) through a small angle; inside the body a piston slides (Portsmouth type) or a diaphragm flexes (diaphragm and equilibrium types); in cup-float toilet valves the float slides up and down the valve stem (Wikipedia; diydata; DIY Doctor)
- **Directions it can move (degrees of freedom):** 1: the float, arm and closing part are linked so they move together as one, driven only by the water level
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): the rise and fall of the water level becomes a swing of the float arm, which a cam or pin turns into a short push on the piston or diaphragm (diydata); the lever also multiplies the float's small lift into a force big enough to close against the supply pressure (Wikipedia)
  - [fail-safe](../glossary.md#fail-safe--fail-secure) or breakaway: it is NOT fail-safe on its own: a punctured float fills with water and sinks, holding the valve open, and a broken or detached arm leaves nothing to close it, so the tank floods unless there is an overflow (warning) pipe (DIY Doctor; Squote: a warning pipe is mandatory)
  - none of the locking behaviours: it does not latch or snap; it opens partly or fully in proportion to how far the level has dropped (Wikipedia: 'proportional control')
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it controls the flow of water rather than holding parts together
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the float's buoyancy, multiplied by the lever, presses a rubber washer or diaphragm hard onto the seat to seal it (Wikipedia diagram captions); the valve body is clamped through the tank wall by a back-nut and rubber washers (APM; DIY Doctor)
  - suction or air pressure (water pressure, in equilibrium valves): supply pressure acting on the larger back face of the diaphragm holds it against the outlet, and the float only has to keep a tiny relief hole shut (Wikimedia Commons equilibrium-valve diagram description)
- **Input and output:** Water level (float height) -> valve opening. The float arm is a lever: the closing force on the seat equals the float's buoyancy times the ratio of arm length to the short distance from pivot to valve, which is why piston valves need a big float or a long arm to close against mains pressure (Wikipedia 'Ballcock'). The action is proportional, not snap-action: near the shut-off level the valve is only slightly open, so the last part of filling is slow and can hiss or keep dribbling (US patent 2837111, quoted in Wikipedia 'Ballcock'). Not back-drivable in a useful sense: pushing the arm down by hand opens the valve, lifting it shuts it. Shaft arrangement and efficiency: not applicable.
- **Power:** passive (no power needed): the water level moves the float and the supply pressure does the rest, so it keeps working in a power cut (Wikipedia; Hackaday 2022: no pumps or electrical equipment). If the supply pressure is lost it simply stops filling; it does not need resetting
- **Load:** Not a structural part. Valves are made in high-, medium- and low-pressure versions with different seat-hole sizes (Squote; diydata); compact WC valves typically cover about 0.05 to 10 bar (APM, vendor guide); old Portsmouth valves suit low-pressure gravity feeds below about 0.5 bar, and on supplies above about 3 bar an equilibrium valve or a pressure-reducing valve is advised (APM). Don't lean on or hang anything from the float arm: bending it changes the water level (diydata)
- **Play and precision:** noticeable: it is a level controller, not a locating joint. Because it closes gradually as the level rises, the final level depends a little on supply pressure and the valve can [creep](../glossary.md#creep) shut slowly, hissing or dribbling before it fully seals (US patent 2837111 via Wikipedia) ⚑ [uncertain: how many millimetres the level varies was not found]. [Misalignment](../glossary.md#misalignment): the float must hang freely and not rub on the tank wall or other fittings, or it sticks (DIY Doctor; Squote list sticking and debris as common faults)
- **Taking it apart:** removable: the valve body is held through the tank wall by a back-nut and connected to the supply by a compression or threaded fitting; the float arm clips on or is held by a split pin, and the float screws onto the arm (APM; DIY Doctor)
- **How often it can be reused:** many times: the valve can be unscrewed, repaired with a washer or diaphragm kit and refitted (DIY Doctor; APM). It opens and closes after every flush or drink for years, until the washer or diaphragm wears or scale builds up (APM; Squote)
- **Sealing:** watertight: a rubber washer (piston type) or rubber diaphragm pressed onto a smooth seat shuts off the supply, and rubber washers either side of the tank wall seal the body (Wikipedia; APM). It is not a backflow seal: protection of drinking water against back-siphoning comes from the outlet discharging above the water with an air gap, or from an approved anti-siphon device; low 'silent fill' tubes that discharged under water are now banned (diydata; APM; UpCodes)
- **Adjustable:** yes: the shut-off level is set by bending the brass float arm (up for more water, down for less), by a hinge in the arm with an adjusting screw and lock nut, by an adjusting screw at the valve end, by sliding the float along the arm, or on cup-float toilet valves by a small plastic screw or by raising or lowering the valve head (diydata; DIY Doctor; APM). Thang's animation shows the same idea: the angle between the float arm and the valve lever sets the highest water level (Thang, part 3, p. 168). The fill rate is set by fitting the high- or low-pressure seat (diydata)
- **Access needed:** both sides: the valve body goes through a hole in the tank wall (or base, for bottom-entry valves), with the float and back-nut inside or outside depending on design and the supply pipe outside, so you need the lid off and room to reach the supply connection (APM; DIY Doctor)
- **Materials:** Bodies: brass (BS 1212 Parts 1 and 2) or plastic (Parts 3 and 4) (Squote; DIY Doctor). Floats: hollow sealed plastic balls or cups (DIY Doctor); a plastic bottle can serve as a home-made float (Thingiverse JMK54). Arms: solid brass rod or plastic (diydata). Seals: rubber washers and rubber or elastomer diaphragms (Wikipedia; APM). Printed: PETG or ASA rather than PLA for parts that live in water (Printables 'Planter Float Valve Reservoir Box'; Thingiverse sbash: 'Don't use PLA'); FoodRising's float valve receiver is printed in Taulman t-glase (brand filament) at 100% [infill](../glossary.md#infill) and its maker says PLA and ABS are too fragile (Thingiverse); a strip of silicone or a rubber ball makes the seal (Hackaday 2022; Thingiverse JMK54)
- **Heat, cold, water and wear:** Hard water: scale builds up on seats and moving parts; old brass Portsmouth valves corrode and seize in hard-water areas, and diaphragm valves are claimed to suffer less (APM; diydata). Cold: tanks and valves in cold lofts can freeze, stopping the supply (APM). Pressure: the valve must suit the supply pressure class (HP, MP or LP), or it leaks or fills slowly (Squote; diydata). Ageing: rubber washers and diaphragms wear, and hollow floats can crack and fill with water (DIY Doctor; APM). Printed plastic: PLA is discouraged for parts in water (Thingiverse sbash; FoodRising) ⚑ [uncertain: no test of how long printed PLA or PETG float valves last in water was found]. Sunlight on outdoor troughs, and warm water in coolers, are likely to age plastic floats faster ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: toilet fill valves, BS 1212 cistern valves, trough and stock-tank valves, aquarium and hydroponics mini float valves, evaporative-cooler float valves (Squote; Nelson Manufacturing; Remove and Replace; Printables and Thingiverse mounts for bought valves)
  - 3D print (FDM): low-pressure float valves for passive hydroponics, planters and tanks fed by gravity from a reservoir, and brackets, boxes and mounts for bought mini float valves (Hackaday 2022; Thingiverse cheungbx, JMK54, sbash; Printables)
  - plumbing fittings: a bought float valve fitted to a bucket, barrel or trough with a tank connector and back-nut (APM)
- **Printing it in one piece (print in place):** no: printed float valves are printed as separate parts (body, lever, float or float holder, retaining nut) and assembled with an added seal such as a silicone strip or rubber ball, and often a rod, bottle or tube (Thingiverse JMK54 and cheungbx; FoodRising part on Thingiverse; Hackaday 2022)
- **Tools:** Adjustable spanner and pump (slip-joint) pliers to hold the body while undoing the back-nut and supply nut, PTFE tape for threads, and a screwdriver or key for the servicing (isolation) valve (APM; DIY Doctor). Adjusting the level needs only your hands (bending a brass arm) or a screwdriver for an adjusting screw (diydata). Printed versions need a hole cut in the tank (FoodRising Thingiverse part: a 15 mm hole) and a tube to the supply (Thingiverse cheungbx)
- **Difficulty:** easy to buy and fit: cheap, screws through one hole and is adjusted by hand (DIY Doctor; diydata). Moderate to make: printed float valves work for low-pressure, gravity-fed reservoirs (plants, aquariums, small animal drinkers), but need a smooth seat, a soft seal and a float that stays sealed (Hackaday 2022; Thingiverse designs). Not advisable to print one for mains-pressure drinking water: those valves must meet backflow rules and approvals (UpCodes; APM: WRAS approval in the UK)

### 3D printing tips

1) Only for low pressure: printed float valves are used on gravity feeds from a reservoir a little above the tank (Hackaday 2022; Thingiverse cheungbx), not on mains pressure, where the float would need far more force to close the seat (Wikipedia 'Ballcock') ⚑ [uncertain: no test of printed valves at mains pressure was found]. 2) Material: use PETG or ASA (or a tough specialist filament such as the t-glase used by FoodRising); makers warn against PLA for parts that sit in water or take load (Thingiverse sbash 'Don't use PLA'; FoodRising: PLA and ABS 'too fragile', printed at 100% infill; Printables 'Planter Float Valve Reservoir Box' recommends PETG or ASA). JMK54's simple design was printed in PLA at 35% infill with no supports but notes ABS would be preferable (Thingiverse). 3) The seal: don't rely on plastic against plastic; press a soft part onto the outlet, e.g. a strip of silicone (Hackaday 2022) or a rubber ball glued to the lever (Thingiverse JMK54). 4) The float: it must stay sealed and light. Billy's design prints a sealed hollow float shaped to fit its housing (Hackaday 2022); JMK54 offers either a glued-on plastic bottle or a 4 mm threaded rod carrying a separate float (Thingiverse). Printed hollow shells can let water seep in through gaps between layers, so use extra [perimeters](../glossary.md#perimeters) or check by weighing after a soak ⚑ [uncertain: general FDM advice, not from a float-valve source]. 5) Thin printed nozzles are weak: cheungbx suggests replacing the printed inlet pipe with a 4.7 mm outside-diameter plastic tube (Thingiverse). 6) Give the lever room to swing and make the float big enough, or put it on a longer arm, since closing force = buoyancy x lever ratio (Wikipedia; Archimedes' principle). 7) Make the level adjustable (a slot or screw between arm and lever), as on commercial valves (diydata; Thang p. 168). 8) Test over a sink or tray first and keep an overflow route: a sticking printed valve will flood (sbash warns a printed bracket breaking makes 'a big, wet mess').

### Buying one (off-the-shelf parts)

BS 1212 Part 1 (Portsmouth piston) brass float valves; Part 2 brass diaphragm and Part 3 plastic diaphragm float valves; Part 4 compact and equilibrium float valves; high-pressure (HP), medium (MP) and low-pressure (LP) seats or nozzles; diaphragm and washer repair kits; plastic float balls and float arms; tank connectors with back-nuts and washers; servicing (isolation) valves; overflow or warning pipe kits (Squote; APM; diydata; DIY Doctor). US toilet fill valves: float-cup, internal-float 'quiet fill' and anti-siphon fill valves to ASSE 1002 marked with a critical level 'CL' line (Wikipedia; DIY Doctor; UpCodes). Agricultural: trough and stock-tank float valves (Nelson Manufacturing). Small 1/4 in and 1/2 in plastic mini float valves for aquariums, hydroponics, chicken waterers and evaporative (swamp) coolers (Printables mounts and boxes for these; Remove and Replace)

## Rules of thumb

- Match the valve's seat to the supply: the high-pressure seat (smaller hole) for mains-fed tanks and the low-pressure seat for tank-fed (gravity) supplies; an HP seat on a gravity feed fills very slowly, and an LP seat on the mains may not shut off properly and leaks (diydata; Squote)
- Set the shut-off level at least 25 mm below the overflow (warning) pipe in a cold-water storage cistern, and about 25-50 mm below the overflow in a WC cistern, or to the maker's marked line (APM; Squote says about 25 mm)
- Every tank with a float valve needs an overflow or warning pipe (Squote: minimum 19 mm or 22 mm depending on tank size) that discharges somewhere an overflow will be noticed (Squote; APM)
- Drinking-water supplies: the valve must discharge above the water with an air gap (UK Water Fittings Regulations, BS EN 1717 air gaps) (APM); in the US, flush tanks need an anti-siphon fill valve to ASSE 1002 with its critical level mark at least 1 inch (25 mm) above the top of the overflow pipe (International Residential Code P2902.4.1, via UpCodes)
- On supplies above about 3 bar, use an equilibrium valve or fit a pressure-reducing valve, because ordinary valves must close against the full supply pressure and can hammer (APM)
- Closing force = float buoyancy (the weight of water the float displaces, Archimedes' principle) multiplied by the lever ratio; piston (Portsmouth) and diaphragm valves therefore need a large float or a long arm, while equilibrium valves manage with a small float on a short arm (Wikipedia 'Ballcock'; Wikipedia 'Archimedes' principle')
- Fit a servicing (isolation) valve on the supply just before the float valve so it can be repaired without draining everything (APM; DIY Doctor)
- Threaded plastic bodies: tighten hand-tight then about a quarter turn with a spanner; over-tightening a back-nut can crack a plastic cistern (APM)
- Use a quiet-fill or slow-closing valve where banging pipes ([water hammer](../glossary.md#water-hammer)) are a problem (Wikipedia 'Hydraulic shock')

## Common failures

1) Constant trickle from the overflow: worn washer or diaphragm, or the level set too high; replace the washer or diaphragm, or lower the arm (APM; diydata). 2) Won't shut off: the float is punctured and waterlogged, or the arm has come off; replace the float (DIY Doctor; APM). 3) Slow or noisy filling: debris or scale in the seat, or the wrong pressure seat; clean it or fit the right HP or LP seat (APM; diydata). 4) Banging on filling: high supply pressure on a non-equilibrium valve; fit an equilibrium valve or a pressure-reducing valve (APM). 5) Seized or corroded arm on old brass valves in hard-water areas: replace with a modern diaphragm valve (APM). 6) Hissing and slow final closing, because the valve closes gradually as the float rises against supply pressure (US patent 2837111, via Wikipedia). 7) Tank won't refill: the isolation valve is shut, the supply pressure is too low, or a diaphragm has collapsed (APM). 8) Frozen supply in a cold loft (APM). 9) Printed valves: leaks at a rough seat, floats that slowly fill, and weak thin printed nozzles (Thingiverse cheungbx) ⚑ [uncertain: from maker notes, not tests].

## Safety

1) Flooding: if the float punctures or the arm breaks, the valve stays open, so always keep the overflow (warning) pipe clear and discharging where it will be seen (DIY Doctor; Squote). 2) Drinking-water contamination: a valve whose outlet is under the water can siphon tank water back into the mains when supply pressure drops; this is why 'silent fill' tubes are banned and approved valves with air gaps or anti-siphon devices are required (diydata; APM; UpCodes). Non-compliant fittings can be an offence (APM: under the Water Industry Act 1991 in England and Wales). 3) Water hammer: valves that shut quickly against high pressure can make pipes bang and stress fittings; use an equilibrium or quiet-fill valve or reduce the pressure (APM; Wikipedia 'Hydraulic shock'). 4) Turn off the supply (servicing valve or stopcock) before taking a valve apart (APM; DIY Doctor). 5) Printed valves: keep them to low-pressure gravity feeds and test them where a leak can't do damage. Otherwise low risk.

## Related

- [Check valve](../glossary.md#check-valve) (one-way valve): also self-acting, but it reacts to which way the water flows, not to the water level
- Float switch: a float that works an electrical switch to run a pump or a solenoid valve; it needs power but can sound alarms and act on several levels (Wikipedia 'Float switch')
- Shut-off valve (tap, ball valve, stopcock): the hand-operated valve fitted before a float valve so it can be serviced
- Switching valve (solenoid valve): an electrically operated valve, often paired with a float switch instead of a float valve
- Pressure [regulator](../glossary.md#regulator) (pressure-reducing valve): lowers high mains pressure so a float valve can shut off cleanly and quietly (APM)
- Automatic siphon (bell siphon): empties a tank automatically, where the float valve fills one
- Hydraulic ram pump: can lift water to a trough, but must not be shut off by a float valve (Clemson LGP 1017)
- Floatless and delay fill valves: fill toilet tanks using a pressure-sensing diaphragm instead of a float, or wait until the level is low before refilling (Wikipedia)
- Balance-beam waterer: a drinking bowl on a counterweighted beam that opens the valve as the bowl gets lighter, a float-free alternative for livestock (Nelson Manufacturing)
- Bell [crank](../glossary.md#crank) and other levers: the float arm is a simple lever that multiplies the float's force

## Make it yourself

- [Hydroponics Float Valve Snap-in No screws (cheungbx, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:4574305): Printed float valve for passive hydroponics, fed by gravity from a nutrient tank; keeps the level at no more than about 20 mm; PLA, 40% infill, no supports; the printed inlet pipe can be swapped for a 4.7 mm plastic tube *(licence: ⚑ [uncertain: licence not shown in the page metadata])*
- [DIY Float Valve For Passive Hydroponics Leverages 3D Printing (Hackaday, 2022)](https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/): Article and video on Billy's printed float valve: a sealed printed float in a housing presses a silicone strip over the outlet when the level is high *(licence: link only)*
- [Float valve for hose (JMK54, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:1679411): Printed lever float valve that fits through a tank wall, with a glued-on bottle or a rod-mounted float and a rubber ball as the seal; PLA (ABS preferred), 35% infill, no supports *(licence: ⚑ [uncertain: licence not shown in the page metadata])*
- [Planter Float Valve Reservoir Box (Eric Hennigan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1695086-planter-float-valve-reservoir-box): Parametric slotted box that houses a small bought float valve at the bottom of a planter to make it self-watering; print in PETG or ASA *(licence: CC BY-NC-SA)*
- [Aquarium Auto Fill Float Ball Valve Bracket (William, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket): Bracket for mounting a small bought float ball valve on an aquarium for automatic top-off *(licence: CC BY)*
- [Aquarium Trim Float Valve Mount (sbash, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:3353247): Two-part clamp that holds a float valve on an aquarium rim for auto top-off; printed in PETG ('Don't use PLA') *(licence: ⚑ [uncertain: licence not shown in the page metadata])*

## Pictures, videos and models

- [Portsmouth-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg): Labelled cross-section of a Portsmouth (piston) ballcock: float, float arm, pivot, piston, washer, seat and inlet *(licence: CC BY-SA 4.0)*
- [Portsmouth-Valve-Open.svg (SouthHamsian; Wikimedia Commons), used with Portsmouth-Valve-Closed.svg](https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg): A whole water tank with a Portsmouth-type ballcock open: the float has dropped with the water level and the arm has pulled the piston and washer away from the inlet *(licence: CC BY-SA 4.0)*
- [Diaphragm-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg): Cross-section of a diaphragm ballcock: the float arm pushes a plunger pin that presses a flexible diaphragm against the seat *(licence: CC BY-SA 4.0)*
- [Equilibrium-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons), with A_diagram_of_an_open_equilibrium_float_valve.svg](https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg): Equilibrium float valve closed (and, in the companion file, open): the float only seals a small relief hole, and water pressure on the diaphragm's larger face holds the main valve shut *(licence: CC BY-SA 4.0)*
- [Water tank automatic valve (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=TTad0HzrQt8): CAD animation of a float-operated tank valve cut in half: the float arm closes a cone-shaped valve as the water rises; the arm-to-lever angle sets the highest level (described in Thang's 2700 Animated Mechanical Mechanisms, part 3, p. 168) *(licence: link only (YouTube, all rights reserved))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 9 sentences on this page marked [uncertain].
- ⚑ Finder value `motion_in` = not applicable (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ Finder value `motion_out` = not applicable (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ Finder value `shaft_layout` = not applicable (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ Research note: *Float valve* and *Air bearing* cite some Thingiverse models whose licences weren't shown (marked [uncertain]). A Commons page for a ram-pump video shows the uploader's email address; the entry credits the name only.

## Sources

- <https://en.wikipedia.org/wiki/Ballcock>
- <https://en.wikipedia.org/wiki/Hydraulic_shock>
- <https://en.wikipedia.org/wiki/Float_switch>
- <https://en.wikipedia.org/wiki/Archimedes%27_principle>
- <https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg>
- <https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg>
- <https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg>
- <https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg>
- <https://commons.wikimedia.org/wiki/File:A_diagram_of_an_open_equilibrium_float_valve.svg>
- <https://www.diydata.com/plumbing/ball_valves/ball_valves.php>
- <https://www.diydoctor.org.uk/projects/fit-float-valve.htm>
- <https://apmi.uk/blogs/news/float-valves-portsmouth-diaphragm-and-equilibrium-types-choosing-the-right-valve-for-cisterns>
- <https://squote.app/knowledge/plumbing/float-valves>
- <https://up.codes/s/fill-valves>
- <https://www.nelsonmfg.com/how-automatic-livestock-waterers-work-part-1-refilling-systems/>
- <https://removeandreplace.com/2013/03/18/how-does-an-evaporative-cooler-swamp-cooler-work/>
- <https://www.bobvila.com/articles/what-is-a-swamp-cooler/>
- <https://cs448m.github.io/lectures/machines/doc/3.pdf>
- <https://www.youtube.com/watch?v=TTad0HzrQt8>
- <https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/>
- <https://www.thingiverse.com/thing:4574305>
- <https://www.thingiverse.com/thing:1679411>
- <https://www.thingiverse.com/thing:3353247>
- <https://www.thingiverse.com/thing:696601>
- <https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/1695086-planter-float-valve-reservoir-box>
- <https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket>
