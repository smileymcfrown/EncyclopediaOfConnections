# hydraulics, pneumatics & vacuum: Moves, holds or lets go using air or liquid pressure, or suction

27 entries; 36 values the script was unsure of, 11 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 283 | Soft pneumatic bending actuator | – | compressed air, liquid | lets go | pressure | bending | – | – | – | hand tools | light | 3D print (FDM) | yes | removable |
| 288 | Pneumatic artificial muscle | – | **electricity, compressed air, liquid** | **lets go** | pressure | straight push or pull | – | – | – | crimper, hand tools | heavy | off-the-shelf part | yes | removable |
| 289 | Check valve | – | none | – | – | – | – | – | – | none, soldering iron, hand tools | heavy | off-the-shelf part | no | removable |
| 300 | Syringe hydraulics | – | none | – | *straight push or pull* | *back-and-forth turning, straight push or pull* | *–* | – | – | none, drill and tap, hand tools | light | off-the-shelf part | yes | removable |
| 301 | Air or hydraulic cylinder | – | **electricity, compressed air, liquid** | **lets go** | pressure | straight push or pull | – | **–** | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 302 | Switching valve | – | electricity, compressed air | **lets go** | – | – | – | – | clicks | hand tools | **medium** | off-the-shelf part | no | removable |
| 303 | Peristaltic pump | **tube, rod or extrusion** | electricity, compressed air | keeps its last state | *steps, steady turning* | *pressure* | *–* | – | – | soldering iron, press or vice, hand tools | light | 3D print (FDM) | yes | removable |
| 304 | Venturi vacuum generator | – | **compressed air, liquid, suction** | lets go | pressure | pressure | – | – | – | none, soldering iron, drill and tap, hand tools | light | 3D print (FDM) | yes | tool-free quick release |
| 305 | Bellows and inflatable actuators | – | **compressed air, liquid, suction** | **lets go** | *pressure* | *straight push or pull* | *–* | – | – | hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 306 | Air-logic valve | – | **electricity, compressed air, suction** | **–** | pressure | pressure | – | – | – | none, drill and tap | light | **off-the-shelf part** | partly | removable |
| 307 | Tesla valve | – | none | – | – | – | – | – | – | none, power tools, hand tools | *light* | 3D print (FDM) | no | removable |
| 308 | Vacuum-driven artificial muscle | – | **compressed air, liquid, suction** | **–** | pressure | straight push or pull, bending | – | – | – | soldering iron, glue gun, power tools, hand tools | heavy | laser cut | yes | removable |
| 309 | Syringe pump | – | *electricity, liquid* | keeps its last state | steady turning | straight push or pull, pressure | – | **–** | – | soldering iron, crimper, hand tools | medium | 3D print (FDM) | yes | removable |
| 310 | Diaphragm pump and squeeze bulb | – | **electricity, compressed air, liquid, suction** | **–** | *back-and-forth straight, steady turning* | *pressure* | *–* | **slips and keeps going** | – | none, soldering iron, hand tools | light | off-the-shelf part | yes | removable |
| 311 | Air tank and hydraulic accumulator | – | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 312 | Pressure regulator | – | none | – | – | – | – | – | – | hand tools | **medium** | off-the-shelf part | yes | removable |
| 313 | Pressure relief valve | – | none | – | – | – | – | clicks or pops out and resets | – | drill and tap, hand tools | **medium** | off-the-shelf part | partly | removable |
| 314 | Speed-control valve | – | none | – | – | – | – | – | – | sewing or leather tools, hand tools | **medium** | off-the-shelf part | yes | removable |
| 315 | Shut-off valve | – | none | – | – | – | – | – | clicks | none, hand tools | **medium** | off-the-shelf part | yes | removable |
| 316 | Vacuum hold-down table | wall, rail, desk or grid | **electricity, compressed air, suction** | lets go | – | – | – | – | – | none, power tools, hand tools | **medium** | CNC | yes | tool-free quick release |
| 317 | Gear pump | – | electricity, liquid | **–** | steady turning | pressure | – | – | – | soldering iron, hand tools | **medium** | 3D print (FDM) | partly | removable |
| 318 | Rotary air actuator | – | **compressed air, liquid, suction** | **–** | *pressure* | *back-and-forth turning* | *–* | **–** | clicks | drill and tap, press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 319 | Float valve | – | none | – | **–** | **–** | **–** | – | – | hand tools | medium | off-the-shelf part | yes | removable |
| 320 | Hydraulic ram pump | – | none | – | **–** | **straight push or pull** | **–** | – | – | drill and tap, hand tools | **medium** | off-the-shelf part | yes | removable |
| 321 | Air bearing and air caster | – | compressed air | **–** | – | – | – | – | – | *drill and tap, hand tools* | heavy | off-the-shelf part | yes | removable |
| 322 | Centrifugal pump | – | electricity, liquid | lets go | *steady turning* | *pressure* | *–* | slips and keeps going | – | none, soldering iron, drill and tap, hand tools | light | off-the-shelf part | yes | removable |
| 323 | Automatic siphon | – | *none* | – | **–** | **steps** | **–** | – | – | drill and tap, power tools, hand tools | light | off-the-shelf part | yes | tool-free quick release |

## The script was unsure

- **288 Pneumatic artificial muscle**, power_source: several power sources named; check which ones apply
- **288 Pneumatic artificial muscle**, power_loss: versions differ: lets go, keeps its last state
- **301 Air or hydraulic cylinder**, power_source: several power sources named; check which ones apply
- **301 Air or hydraulic cylinder**, power_loss: versions differ: lets go, keeps its last state
- **301 Air or hydraulic cylinder**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **302 Switching valve**, power_loss: versions differ: lets go, keeps its last state
- **302 Switching valve**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **303 Peristaltic pump**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **304 Venturi vacuum generator**, power_source: several power sources named; check which ones apply
- **305 Bellows and inflatable actuators**, power_source: several power sources named; check which ones apply
- **305 Bellows and inflatable actuators**, power_loss: versions differ: lets go, keeps its last state
- **306 Air-logic valve**, power_source: several power sources named; check which ones apply
- **306 Air-logic valve**, power_loss: uses power, but `power` does not say what happens when it is lost
- **306 Air-logic valve**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **308 Vacuum-driven artificial muscle**, power_source: several power sources named; check which ones apply
- **308 Vacuum-driven artificial muscle**, power_loss: uses power, but `power` does not say what happens when it is lost
- **309 Syringe pump**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **310 Diaphragm pump and squeeze bulb**, power_source: several power sources named; check which ones apply
- **310 Diaphragm pump and squeeze bulb**, power_loss: mentions power loss, but no outcome matched; check
- **310 Diaphragm pump and squeeze bulb**, overload_response: several overload behaviours named: clicks or pops out and resets, slips and keeps going
- **312 Pressure regulator**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **313 Pressure relief valve**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **314 Speed-control valve**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **315 Shut-off valve**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **316 Vacuum hold-down table**, power_source: several power sources named; check which ones apply
- **316 Vacuum hold-down table**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **317 Gear pump**, power_loss: uses power, but `power` does not say what happens when it is lost
- **317 Gear pump**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **318 Rotary air actuator**, power_source: several power sources named; check which ones apply
- **318 Rotary air actuator**, power_loss: mentions power loss, but no outcome matched; check
- **318 Rotary air actuator**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **319 Float valve**, motion_in: could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."
- **320 Hydraulic ram pump**, motion_in: could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."
- **320 Hydraulic ram pump**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **321 Air bearing and air caster**, power_loss: uses power, but `power` does not say what happens when it is lost
- **323 Automatic siphon**, motion_in: could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **300 Syringe hydraulics**, motion_in: the source field `input_output` is marked [uncertain]
- **303 Peristaltic pump**, motion_in: the source field `input_output` is marked [uncertain]
- **305 Bellows and inflatable actuators**, motion_in: the source field `input_output` is marked [uncertain]
- **305 Bellows and inflatable actuators**, load_max: the source field `load` is marked [uncertain]
- **307 Tesla valve**, load_max: the source field `load` is marked [uncertain]
- **309 Syringe pump**, power_source: the source field `power` is marked [uncertain]
- **310 Diaphragm pump and squeeze bulb**, motion_in: the source field `input_output` is marked [uncertain]
- **318 Rotary air actuator**, motion_in: the source field `input_output` is marked [uncertain]
- **321 Air bearing and air caster**, tools: the source field `tools_needed` is marked [uncertain]
- **322 Centrifugal pump**, motion_in: the source field `input_output` is marked [uncertain]
- **323 Automatic siphon**, power_source: the source field `power` is marked [uncertain]
