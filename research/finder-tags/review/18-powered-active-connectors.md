# powered & active connectors: Needs power to hold or to let go

13 entries; 15 values the script was unsure of, 4 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 103 | Holding electromagnet | **any solid parts** | electricity | **lets go** | – | – | – | – | – | soldering iron, drill and tap, hand tools | heavy | off-the-shelf part | partly | tool-free quick release |
| 104 | Electro-permanent magnet | **any solid parts** | **electricity** | keeps its last state | – | – | – | – | – | soldering iron, crimper, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 105 | Solenoid latch | lid, door or cover | electricity | **stays locked** | – | – | – | – | **clicks** | soldering iron, drill and tap, power tools, hand tools | heavy | off-the-shelf part | partly | tool-free quick release |
| 106 | Servo or motorised latch | lid, door or cover | electricity | **keeps its last state** | – | – | – | – | – | soldering iron, crimper, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 107 | Shape-memory-alloy wire latch | lid, door or cover | electricity, heat | stays locked | – | – | – | – | – | soldering iron, crimper, hand tools | light | off-the-shelf part | yes | tool-free quick release |
| 108 | Electromagnetic brake | – | electricity | stays locked | *–* | *–* | *–* | slips and keeps going | – | hand tools | heavy | off-the-shelf part | partly | removable |
| 109 | Vacuum | wall, rail, desk or grid, something to grip | **electricity, compressed air, suction** | lets go | – | – | – | – | – | none, soldering iron, crimper, hand tools | *heavy* | off-the-shelf part | yes | tool-free quick release |
| 110 | Granular jamming gripper | something to grip | compressed air, suction | **–** | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 207 | Electromagnetic clutch | **any solid parts** | electricity | lets go | steady turning | steady turning | in line | slips and keeps going | **clicks** | hand tools | heavy | off-the-shelf part | partly | removable |
| 208 | Thermal actuators | – | electricity, heat | keeps its last state | heat | straight push or pull | – | – | – | *hand tools* | heavy | off-the-shelf part | partly | removable |
| 209 | Burn-wire and fusible-link release | **any solid parts** | electricity, heat | **stays locked** | – | – | – | breaks or lets go once | – | heat gun, hand tools | medium | off-the-shelf part | no | semi-permanent |
| 276 | Twisted-and-coiled polymer muscle | – | **electricity, compressed air, liquid, heat** | lets go | heat | straight push or pull | – | – | – | soldering iron, crimper, heat gun, drill and tap, power tools, hand tools | light | off-the-shelf part | yes | removable |
| 277 | Bernoulli gripper | something to grip | *compressed air* | **–** | – | – | – | – | – | none, hand tools | light | 3D print (FDM) | yes | tool-free quick release |

## The script was unsure

- **103 Holding electromagnet**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **103 Holding electromagnet**, power_loss: versions differ: lets go, stays locked
- **104 Electro-permanent magnet**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **104 Electro-permanent magnet**, power_source: powered, but no power source named in `power`; defaulted to electricity
- **105 Solenoid latch**, power_loss: versions differ: stays locked, lets go, keeps its last state
- **105 Solenoid latch**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **106 Servo or motorised latch**, power_loss: versions differ: keeps its last state, stays locked, lets go
- **109 Vacuum**, power_source: several power sources named; check which ones apply
- **110 Granular jamming gripper**, power_loss: uses power, but `power` does not say what happens when it is lost
- **207 Electromagnetic clutch**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **207 Electromagnetic clutch**, clicks: both clicking and silent words appear; check
- **209 Burn-wire and fusible-link release**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **209 Burn-wire and fusible-link release**, power_loss: versions differ: stays locked, keeps its last state
- **276 Twisted-and-coiled polymer muscle**, power_source: several power sources named; check which ones apply
- **277 Bernoulli gripper**, power_loss: uses power, but `power` does not say what happens when it is lost

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **108 Electromagnetic brake**, motion_in: the source field `input_output` is marked [uncertain]
- **109 Vacuum**, load_max: the source field `load` is marked [uncertain]
- **208 Thermal actuators**, tools: the source field `tools_needed` is marked [uncertain]
- **277 Bernoulli gripper**, power_source: the source field `power` is marked [uncertain]
