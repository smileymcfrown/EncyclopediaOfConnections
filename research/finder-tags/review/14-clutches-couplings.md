# clutches & couplings: Connects shafts, or engages and disengages drive

16 entries; 6 values the script was unsure of, 24 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 77 | Oldham coupling | shaft | none | – | *steady turning* | *steady turning* | *parallel, in line* | breaks or lets go once | – | hand tools | *medium* | 3D print (FDM) | no | removable |
| 78 | Jaw coupling | shaft | none | – | *steady turning* | *steady turning* | *in line* | – | – | hand tools | heavy | off-the-shelf part | no | removable |
| 79 | Flexible beam coupling | shaft | none | – | steady turning | steady turning | in line | – | – | *soldering iron, hand tools* | medium | off-the-shelf part | no | removable |
| 80 | Universal joint | shaft | none | – | *steady turning* | *steady turning* | *at an angle* | – | – | *press or vice, hand tools* | *heavy* | 3D print (FDM) | no | *removable* |
| 81 | Dog clutch | shaft | *none* | – | *steady turning* | *steady turning* | *in line* | – | clicks | none, hand tools | heavy | 3D print (FDM) | no | tool-free quick release |
| 82 | Servo horn and spline hub | shaft | *none* | – | *steady turning* | *steady turning* | *in line* | – | clicks | hand tools | medium | off-the-shelf part | yes | removable |
| 83 | Series-elastic coupling | **shaft** | *electricity* | **–** | *steady turning* | *steady turning* | *in line* | – | – | *soldering iron, hand tools* | *heavy* | 3D print (FDM) | partly | removable |
| 145 | Centrifugal clutch | **shaft** | none | – | *steady turning* | *steady turning* | *in line* | slips and keeps going | **clicks** | hand tools | medium | off-the-shelf part | yes | removable |
| 190 | Spline shaft | shaft | none | – | *steady turning* | *steady turning* | *in line* | – | – | none, power tools, hand tools | heavy | 3D print (FDM) | yes | removable |
| 191 | Constant-velocity joint | **shaft** | none | – | *steady turning* | *steady turning* | *at an angle* | – | – | drill and tap, hand tools | *heavy* | 3D print (FDM) | no | removable |
| 192 | Friction clutch | **shaft** | none | – | *steady turning* | *steady turning* | *in line* | slips and keeps going | – | none, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 193 | Keyless locking bush | shaft | none | – | *–* | *–* | *–* | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 194 | Schmidt coupling | shaft | none | – | *steady turning* | *steady turning* | *parallel, in line* | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | yes | removable |
| 195 | Flexible drive shaft | shaft | none | – | steady turning | steady turning | at an angle, in line | – | – | power tools, hand tools | medium | off-the-shelf part | no | removable |
| 266 | Shaft-to-hub joints and rigid couplings | shaft | none | – | steady turning | steady turning | in line | breaks or lets go once | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 287 | Gearless right-angle drive | shaft | none | – | *steady turning* | *steady turning* | *at an angle* | – | – | hand tools | medium | 3D print (FDM) | no | removable |

## The script was unsure

- **83 Series-elastic coupling**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **83 Series-elastic coupling**, power_loss: mentions power loss, but no outcome matched; check
- **145 Centrifugal clutch**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **145 Centrifugal clutch**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **191 Constant-velocity joint**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **192 Friction clutch**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **77 Oldham coupling**, motion_in: the source field `input_output` is marked [uncertain]
- **77 Oldham coupling**, load_max: the source field `load` is marked [uncertain]
- **78 Jaw coupling**, motion_in: the source field `input_output` is marked [uncertain]
- **79 Flexible beam coupling**, tools: the source field `tools_needed` is marked [uncertain]
- **80 Universal joint**, motion_in: the source field `input_output` is marked [uncertain]
- **80 Universal joint**, tools: the source field `tools_needed` is marked [uncertain]
- **80 Universal joint**, load_max: the source field `load` is marked [uncertain]
- **80 Universal joint**, removability: the source field `removability` is marked [uncertain]
- **81 Dog clutch**, power_source: the source field `power` is marked [uncertain]
- **81 Dog clutch**, motion_in: the source field `input_output` is marked [uncertain]
- **82 Servo horn and spline hub**, power_source: the source field `power` is marked [uncertain]
- **82 Servo horn and spline hub**, motion_in: the source field `input_output` is marked [uncertain]
- **83 Series-elastic coupling**, power_source: the source field `power` is marked [uncertain]
- **83 Series-elastic coupling**, motion_in: the source field `input_output` is marked [uncertain]
- **83 Series-elastic coupling**, tools: the source field `tools_needed` is marked [uncertain]
- **83 Series-elastic coupling**, load_max: the source field `load` is marked [uncertain]
- **145 Centrifugal clutch**, motion_in: the source field `input_output` is marked [uncertain]
- **190 Spline shaft**, motion_in: the source field `input_output` is marked [uncertain]
- **191 Constant-velocity joint**, motion_in: the source field `input_output` is marked [uncertain]
- **191 Constant-velocity joint**, load_max: the source field `load` is marked [uncertain]
- **192 Friction clutch**, motion_in: the source field `input_output` is marked [uncertain]
- **193 Keyless locking bush**, motion_in: the source field `input_output` is marked [uncertain]
- **194 Schmidt coupling**, motion_in: the source field `input_output` is marked [uncertain]
- **287 Gearless right-angle drive**, motion_in: the source field `input_output` is marked [uncertain]
