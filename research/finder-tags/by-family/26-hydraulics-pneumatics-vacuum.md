# hydraulics, pneumatics & vacuum: Moves, holds or lets go using air or liquid pressure, or suction

27 entries. ⚑ = needs confirming: 101 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 283 | Soft pneumatic bending actuator | – | compressed air, liquid | lets go | pressure | bending | – | – | – | hand tools | light | 3D print (FDM) | yes | removable |
| 288 | Pneumatic artificial muscle | – | electricity, compressed air, liquid ⚑ | lets go ⚑ | pressure | straight push or pull | – | – | – | crimper, hand tools | heavy | off-the-shelf part | yes | removable |
| 289 | Check valve | – | none | – | – | – | – | – | – | none, soldering iron, hand tools | heavy | off-the-shelf part | no | removable |
| 300 | Syringe hydraulics | – | none | – | straight push or pull | back-and-forth turning, straight push or pull | – | – | – | none, drill and tap, hand tools | light | off-the-shelf part | yes | removable |
| 301 | Air or hydraulic cylinder | – | electricity, compressed air, liquid ⚑ | lets go ⚑ | pressure | straight push or pull | – | – ⚑ | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 302 | Switching valve | – | electricity, compressed air | lets go ⚑ | – | – | – | – | clicks | hand tools | medium ⚑ | off-the-shelf part | no | removable |
| 303 | Peristaltic pump | tube, rod or extrusion ⚑ | electricity, compressed air | keeps its last state | steps, steady turning | pressure | – | – | – | soldering iron, press or vice, hand tools | light | 3D print (FDM) | yes | removable |
| 304 | Venturi vacuum generator | – | compressed air, liquid, suction ⚑ | lets go | pressure | pressure | – | – | – | none, soldering iron, drill and tap, hand tools | light | 3D print (FDM) | yes | tool-free quick release |
| 305 | Bellows and inflatable actuators | – | compressed air, liquid, suction ⚑ | lets go ⚑ | pressure | straight push or pull | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 306 | Air-logic valve | – | electricity, compressed air, suction ⚑ | – ⚑ | pressure | pressure | – | – | – | none, drill and tap | light | off-the-shelf part ⚑ | partly | removable |
| 307 | Tesla valve | – | none | – | – | – | – | – | – | none, power tools, hand tools | light | 3D print (FDM) | no | removable |
| 308 | Vacuum-driven artificial muscle | – | compressed air, liquid, suction ⚑ | – ⚑ | pressure | straight push or pull, bending | – | – | – | soldering iron, glue gun, power tools, hand tools | heavy | laser cut | yes | removable |
| 309 | Syringe pump | – | electricity, liquid ⚑ | keeps its last state ⚑ | steady turning | straight push or pull, pressure | – | – ⚑ | – | soldering iron, crimper, hand tools | medium | 3D print (FDM) | yes | removable |
| 310 | Diaphragm pump and squeeze bulb | – | electricity, compressed air, liquid, suction ⚑ | – ⚑ | back-and-forth straight, steady turning | pressure | – | slips and keeps going ⚑ | – | none, soldering iron, hand tools | light | off-the-shelf part | yes | removable |
| 311 | Air tank and hydraulic accumulator | – | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 312 | Pressure regulator | – | none | – | – | – | – | – | – | hand tools | medium ⚑ | off-the-shelf part | yes | removable |
| 313 | Pressure relief valve | – | none | – | – | – | – | clicks or pops out and resets | – | drill and tap, hand tools | medium ⚑ | off-the-shelf part | partly | removable |
| 314 | Speed-control valve | – | none | – | – | – | – | – | – | sewing or leather tools, hand tools | medium ⚑ | off-the-shelf part | yes | removable |
| 315 | Shut-off valve | – | none | – | – | – | – | – | clicks | none, hand tools | medium ⚑ | off-the-shelf part | yes | removable |
| 316 | Vacuum hold-down table | wall, rail, desk or grid | electricity, compressed air, suction ⚑ | lets go ⚑ | – | – | – | – | – | none, power tools, hand tools | medium ⚑ | CNC | yes | tool-free quick release |
| 317 | Gear pump | – | electricity, liquid | – ⚑ | steady turning | pressure | – | – | – | soldering iron, hand tools | medium ⚑ | 3D print (FDM) | partly | removable |
| 318 | Rotary air actuator | – | compressed air, liquid, suction ⚑ | – ⚑ | pressure | back-and-forth turning | – | – ⚑ | clicks | drill and tap, press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 319 | Float valve | – | none | – | – ⚑ | – ⚑ | – ⚑ | – | – | hand tools | medium | off-the-shelf part | yes | removable |
| 320 | Hydraulic ram pump | – | none | – | – ⚑ | straight push or pull ⚑ | – ⚑ | – | – | drill and tap, hand tools | medium ⚑ | off-the-shelf part | yes | removable |
| 321 | Air bearing and air caster | – | compressed air | – ⚑ | – | – | – | – | – | drill and tap, hand tools ⚑ | heavy | off-the-shelf part | yes | removable |
| 322 | Centrifugal pump | – | electricity, liquid | lets go | steady turning | pressure | – | slips and keeps going | – | none, soldering iron, drill and tap, hand tools | light | off-the-shelf part | yes | removable |
| 323 | Automatic siphon | – | none | – | – ⚑ | steps ⚑ | – ⚑ | – | – | drill and tap, power tools, hand tools | light | off-the-shelf part | yes | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **288 Pneumatic artificial muscle**, `power_source` = electricity, compressed air, liquid: `power` names several power sources, and not all may apply
- ⚑ **288 Pneumatic artificial muscle**, `power_loss` = lets go: versions differ: lets go, keeps its last state
- ⚑ **288 Pneumatic artificial muscle**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **289 Check valve**, `one_way_kind` = for air or liquid: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **289 Check valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **289 Check valve**, `fluid_does` = one way or let off pressure: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **300 Syringe hydraulics**, `slide_kind` = pushed by a screw, chain or crank: carried over from the finder's old rule on entry names (R33), for "What kind of slide?" under "Let something move > Slide in a straight line, or telescope"
- ⚑ **300 Syringe hydraulics**, `push_by` = cables, pulleys or liquid: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **301 Air or hydraulic cylinder**, `power_source` = electricity, compressed air, liquid: `power` names several power sources, and not all may apply
- ⚑ **301 Air or hydraulic cylinder**, `power_loss` = lets go: versions differ: lets go, keeps its last state
- ⚑ **301 Air or hydraulic cylinder**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **301 Air or hydraulic cylinder**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **302 Switching valve**, `power_loss` = lets go: versions differ: lets go, keeps its last state
- ⚑ **302 Switching valve**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **302 Switching valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **302 Switching valve**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **302 Switching valve**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **303 Peristaltic pump**, `connects` = tube, rod or extrusion: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **303 Peristaltic pump**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **303 Peristaltic pump**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **303 Peristaltic pump**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **304 Venturi vacuum generator**, `power_source` = compressed air, liquid, suction: `power` names several power sources, and not all may apply
- ⚑ **305 Bellows and inflatable actuators**, `power_source` = compressed air, liquid, suction: `power` names several power sources, and not all may apply
- ⚑ **305 Bellows and inflatable actuators**, `power_loss` = lets go: versions differ: lets go, keeps its last state
- ⚑ **305 Bellows and inflatable actuators**, `seal_use` = seal a moving shaft: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **306 Air-logic valve**, `power_source` = electricity, compressed air, suction: `power` names several power sources, and not all may apply
- ⚑ **306 Air-logic valve**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **306 Air-logic valve**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **306 Air-logic valve**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **306 Air-logic valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **306 Air-logic valve**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **306 Air-logic valve**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **307 Tesla valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **307 Tesla valve**, `fluid_does` = one way or let off pressure: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **308 Vacuum-driven artificial muscle**, `power_source` = compressed air, liquid, suction: `power` names several power sources, and not all may apply
- ⚑ **308 Vacuum-driven artificial muscle**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **309 Syringe pump**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **309 Syringe pump**, `straight_drive` = screw: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **309 Syringe pump**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **309 Syringe pump**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **309 Syringe pump**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **310 Diaphragm pump and squeeze bulb**, `power_source` = electricity, compressed air, liquid, suction: `power` names several power sources, and not all may apply
- ⚑ **310 Diaphragm pump and squeeze bulb**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes
- ⚑ **310 Diaphragm pump and squeeze bulb**, `overload_response` = slips and keeps going: several overload behaviours named: clicks or pops out and resets, slips and keeps going
- ⚑ **310 Diaphragm pump and squeeze bulb**, `one_way_kind` = for air or liquid: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **310 Diaphragm pump and squeeze bulb**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **310 Diaphragm pump and squeeze bulb**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **310 Diaphragm pump and squeeze bulb**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **311 Air tank and hydraulic accumulator**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **311 Air tank and hydraulic accumulator**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **311 Air tank and hydraulic accumulator**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **312 Pressure regulator**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **312 Pressure regulator**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **312 Pressure regulator**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **313 Pressure relief valve**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **313 Pressure relief valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **313 Pressure relief valve**, `fluid_does` = one way or let off pressure: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **314 Speed-control valve**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **314 Speed-control valve**, `one_way_kind` = for air or liquid: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **314 Speed-control valve**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **314 Speed-control valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **314 Speed-control valve**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **315 Shut-off valve**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **315 Shut-off valve**, `clicks_do` = hold a set position: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **315 Shut-off valve**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **315 Shut-off valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **315 Shut-off valve**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **316 Vacuum hold-down table**, `power_source` = electricity, compressed air, suction: `power` names several power sources, and not all may apply
- ⚑ **316 Vacuum hold-down table**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **316 Vacuum hold-down table**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **316 Vacuum hold-down table**, `wall_hold` = magnet or suction: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **316 Vacuum hold-down table**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **317 Gear pump**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **317 Gear pump**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **317 Gear pump**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **317 Gear pump**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **317 Gear pump**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **318 Rotary air actuator**, `power_source` = compressed air, liquid, suction: `power` names several power sources, and not all may apply
- ⚑ **318 Rotary air actuator**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes
- ⚑ **318 Rotary air actuator**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **319 Float valve**, `motion_in` = –: could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ **319 Float valve**, `motion_out` = –: could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ **319 Float valve**, `shaft_layout` = –: could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- ⚑ **319 Float valve**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **319 Float valve**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **319 Float valve**, `fluid_does` = one way or let off pressure: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **320 Hydraulic ram pump**, `motion_in` = –: could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."
- ⚑ **320 Hydraulic ram pump**, `motion_out` = straight push or pull: could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."
- ⚑ **320 Hydraulic ram pump**, `shaft_layout` = –: could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."
- ⚑ **320 Hydraulic ram pump**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **320 Hydraulic ram pump**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **320 Hydraulic ram pump**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **321 Air bearing and air caster**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **322 Centrifugal pump**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **322 Centrifugal pump**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **322 Centrifugal pump**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **323 Automatic siphon**, `motion_in` = –: could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."
- ⚑ **323 Automatic siphon**, `motion_out` = steps: could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."
- ⚑ **323 Automatic siphon**, `shaft_layout` = –: could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."
- ⚑ **323 Automatic siphon**, `seal_use` = pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **323 Automatic siphon**, `fluid_does` = pump: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **309 Syringe pump**, `power_source` = electricity, liquid: `power` is marked [uncertain] here: "…built up in the syringe and tubing can still push a little liquid out [uncertain: inferred from Medfusion's de…"
- ⚑ **309 Syringe pump**, `power_loss` = keeps its last state: `power` is marked [uncertain] here: "…built up in the syringe and tubing can still push a little liquid out [uncertain: inferred from Medfusion's de…"
- ⚑ **316 Vacuum hold-down table**, `power_loss` = lets go: `power` is marked [uncertain] here: "…ck valve to hold vacuum briefly after a pump stops is common practice [uncertain]…"
- ⚑ **321 Air bearing and air caster**, `tools` = drill and tap, hand tools: `tools_needed` is marked [uncertain] here: "…unt precision pads: spanners or hex keys (Wikipedia: ball-pin mounts) [uncertain]. DIY builds: a hand drill wi…"
