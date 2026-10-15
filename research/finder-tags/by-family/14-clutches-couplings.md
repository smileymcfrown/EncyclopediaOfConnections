# clutches & couplings: Connects shafts, or engages and disengages drive

16 entries. ⚑ = needs confirming: 7 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 77 | Oldham coupling | shaft | none | – | steady turning | steady turning | parallel, in line | breaks or lets go once | – | hand tools | medium | 3D print (FDM) | no | removable |
| 78 | Jaw coupling | shaft | none | – | steady turning | steady turning | in line | – | – | hand tools | heavy | off-the-shelf part | no | removable |
| 79 | Flexible beam coupling | shaft | none | – | steady turning | steady turning | in line | – | – | soldering iron, hand tools ⚑ | medium | off-the-shelf part | no | removable |
| 80 | Universal joint | shaft | none | – | steady turning | steady turning | at an angle | – | – | press or vice, hand tools ⚑ | heavy | 3D print (FDM) | no | removable |
| 81 | Dog clutch | shaft | none | – | steady turning | steady turning | in line | – | clicks | none, hand tools | heavy | 3D print (FDM) | no | tool-free quick release |
| 82 | Servo horn and spline hub | shaft | none | – | steady turning | steady turning | in line | – | clicks | hand tools | medium | off-the-shelf part | yes | removable |
| 83 | Series-elastic coupling | shaft ⚑ | electricity ⚑ | – ⚑ | steady turning | steady turning | in line | – | – | soldering iron, hand tools ⚑ | heavy | 3D print (FDM) | partly | removable |
| 145 | Centrifugal clutch | shaft ⚑ | none | – | steady turning | steady turning | in line | slips and keeps going | clicks ⚑ | hand tools | medium | off-the-shelf part | yes | removable |
| 190 | Spline shaft | shaft | none | – | steady turning | steady turning | in line | – | – | none, power tools, hand tools | heavy | 3D print (FDM) | yes | removable |
| 191 | Constant-velocity joint | shaft ⚑ | none | – | steady turning | steady turning | at an angle | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | no | removable |
| 192 | Friction clutch | shaft ⚑ | none | – | steady turning | steady turning | in line | slips and keeps going | – | none, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 193 | Keyless locking bush | shaft | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 194 | Schmidt coupling | shaft | none | – | steady turning | steady turning | parallel, in line | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | yes | removable |
| 195 | Flexible drive shaft | shaft | none | – | steady turning | steady turning | at an angle, in line, far apart ⚑ | – | – | power tools, hand tools | medium | off-the-shelf part | no | removable |
| 266 | Shaft-to-hub joints and rigid couplings | shaft | none | – | steady turning | steady turning | in line | breaks or lets go once | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 287 | Gearless right-angle drive | shaft | none | – | steady turning | steady turning | at an angle | – | – | hand tools | medium | 3D print (FDM) | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **83 Series-elastic coupling**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **83 Series-elastic coupling**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes
- ⚑ **145 Centrifugal clutch**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **145 Centrifugal clutch**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **191 Constant-velocity joint**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **192 Friction clutch**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **195 Flexible drive shaft**, `shaft_layout` = at an angle, in line, far apart: worked out from the name: a belt, chain, cable or flexible shaft links the two shafts

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **79 Flexible beam coupling**, `tools` = soldering iron, hand tools: `tools_needed` is marked [uncertain] here: "…screws, per Adafruit). Optional thread-locking compound on set screws [uncertain]. Printed versions need nuts,…"
- ⚑ **80 Universal joint**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…pliers and a vice or press to replace a car's cross-and-bearing joint [uncertain]. Printed joints need small m…"
- ⚑ **83 Series-elastic coupling**, `power_source` = electricity: `power` is marked [uncertain] here: "…arbox holds with springy give, a back-drivable one lets the joint sag [uncertain]…"
- ⚑ **83 Series-elastic coupling**, `tools` = soldering iron, hand tools: `tools_needed` is marked [uncertain] here: "…d known weights or a torque gauge to calibrate the spring's stiffness [uncertain: general practice]…"
