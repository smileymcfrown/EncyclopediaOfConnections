# print-in-place & 3D-printing joints: Made for 3D printing

15 entries; 3 values the script was unsure of, 12 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 54 | Self-folding print | 3D-printed part | *liquid, heat* | **–** | – | – | – | – | – | *heat gun* | light | 3D print (FDM) | no | permanent |
| 55 | Print-in-place hinge | 3D-printed part, lid, door or cover | none | – | – | – | – | – | – | *none, hand tools* | *medium* | 3D print (FDM) | no | permanent |
| 56 | Heat-set threaded insert | 3D-printed part | none | – | – | – | – | – | – | soldering iron, drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 57 | Captive nut pocket | 3D-printed part | none | – | – | – | – | – | – | drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 58 | Printed screw thread | 3D-printed part | none | – | *steady turning* | *straight push or pull* | *–* | – | – | none, hand tools | medium | 3D print (FDM) | yes | removable |
| 59 | Crush ribs and spring-fit features | 3D-printed part, shaft | none | – | – | – | – | – | – | *none, press or vice, hand tools* | medium | **off-the-shelf part** | no | semi-permanent |
| 60 | Mid-print embedding | 3D-printed part | none | – | – | – | – | – | – | hand tools | medium | 3D print (FDM) | no | permanent |
| 61 | Heat staking | 3D-printed part, boards or sheet | none | – | – | – | – | – | – | soldering iron, heat gun, press or vice, hand tools | *medium* | 3D print (FDM) | no | permanent |
| 62 | Split-part joints for large prints | 3D-printed part | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | medium | 3D print (FDM) | no | permanent |
| 179 | Press-fit and expanding inserts | 3D-printed part | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | *medium* | 3D print (FDM) | no | *removable* |
| 258 | Self-tapping screw into plastic | 3D-printed part | none | – | – | – | – | – | – | drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 281 | Multi-material interlock | 3D-printed part, lid, door or cover | none | – | – | – | – | – | – | **hand tools** | medium | 3D print (FDM) | no | permanent |
| 332 | Screw-in threaded insert | 3D-printed part | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | no | *semi-permanent* |
| 335 | Printing onto fabric | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | hand tools | *light* | 3D print (FDM) | no | permanent |
| 340 | Printed chainmail and tile fabric | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | none, crimper, hand tools | *light* | 3D print (FDM) | no | permanent |

## The script was unsure

- **54 Self-folding print**, power_loss: uses power, but `power` does not say what happens when it is lost
- **59 Crush ribs and spring-fit features**, usual_process: first-listed process "injection moulding: where crush ribs come from; th" not recognised; defaulted
- **281 Multi-material interlock**, tools: no tool named in `tools_needed`; defaulted to hand tools

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **54 Self-folding print**, power_source: the source field `power` is marked [uncertain]
- **54 Self-folding print**, tools: the source field `tools_needed` is marked [uncertain]
- **55 Print-in-place hinge**, tools: the source field `tools_needed` is marked [uncertain]
- **55 Print-in-place hinge**, load_max: the source field `load` is marked [uncertain]
- **58 Printed screw thread**, motion_in: the source field `input_output` is marked [uncertain]
- **59 Crush ribs and spring-fit features**, tools: the source field `tools_needed` is marked [uncertain]
- **61 Heat staking**, load_max: the source field `load` is marked [uncertain]
- **179 Press-fit and expanding inserts**, load_max: the source field `load` is marked [uncertain]
- **179 Press-fit and expanding inserts**, removability: the source field `removability` is marked [uncertain]
- **332 Screw-in threaded insert**, removability: the source field `removability` is marked [uncertain]
- **335 Printing onto fabric**, load_max: the source field `load` is marked [uncertain]
- **340 Printed chainmail and tile fabric**, load_max: the source field `load` is marked [uncertain]
