# clamping, magnetic & friction connections: Held by clamping, friction, suction or magnets

17 entries; 2 values the script was unsure of, 12 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 111 | Magnet joint | 3D-printed part, lid, door or cover, wall, rail, desk or grid | none | – | – | – | – | **comes apart without damage, refit by hand** | – | none, soldering iron, glue gun, drill and tap, press or vice | medium | 3D print (FDM) | no | tool-free quick release |
| 112 | Switchable permanent magnet | wall, rail, desk or grid | none | – | – | – | – | – | – | none, press or vice, hand tools | heavy | off-the-shelf part | *no* | tool-free quick release |
| 113 | Aluminium-extrusion connectors | boards or sheet, tube, rod or extrusion | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 216 | Suction cup | wall, rail, desk or grid | none | – | – | – | – | – | – | none | medium | off-the-shelf part | no | tool-free quick release |
| 217 | Taper fit | shaft | none | – | steady turning | steady turning | in line | – | – | none, power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 218 | Press fit | 3D-printed part, shaft | none | – | – | – | – | – | – | heat gun, press or vice, hand tools | heavy | 3D print (FDM) | no | semi-permanent |
| 219 | Collet | tube, rod or extrusion, shaft, something to grip | none | – | *–* | *–* | *–* | – | – | power tools, hand tools | *heavy* | off-the-shelf part | yes | removable |
| 220 | Clamp-on tube fittings | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 221 | Internal tube anchors | tube, rod or extrusion | none | – | – | – | – | – | silent | *sewing or leather tools, hand tools* | *medium* | off-the-shelf part | yes | *permanent* |
| 222 | Blind threaded fixings | boards or sheet | none | – | – | – | – | – | – | *drill and tap, hand tools* | heavy | off-the-shelf part | no | permanent |
| 257 | Ordinary screw joint | **any solid parts** | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 284 | Scroll mechanism | something to grip | none | – | *steady turning* | *steady turning* | *at an angle* | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 339 | Expanding internal grip | tube, rod or extrusion, something to grip | *none* | – | *–* | *–* | *–* | – | – | power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 341 | Strut hub | tube, rod or extrusion, shaft | none | – | – | – | – | – | – | drill and tap, press or vice, power tools, hand tools | heavy | 3D print (FDM) | no | removable |
| 364 | Hose clamp | hoses or pipes | none | – | – | – | – | – | – | *press or vice, hand tools* | *medium* | off-the-shelf part | yes | removable |
| 394 | Clamp-on accessory mount for bars, poles and edges | tube, rod or extrusion, wall, rail, desk or grid | none | – | – | – | – | – | – | press or vice, hand tools | medium | off-the-shelf part | yes | removable |
| 398 | Spring clip clamp | wall, rail, desk or grid, something to grip | none | – | – | – | – | – | – | none, press or vice, hand tools | light | off-the-shelf part | no | tool-free quick release |

## The script was unsure

- **111 Magnet joint**, overload_response: new option (not yet a finder answer): lets go without damage and is put back by hand
- **257 Ordinary screw joint**, connects: joins parts, but no specific kind of part found; set to any solid parts

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **112 Switchable permanent magnet**, adjustable: the source field `adjustable` is marked [uncertain]
- **219 Collet**, motion_in: the source field `input_output` is marked [uncertain]
- **219 Collet**, load_max: the source field `load` is marked [uncertain]
- **221 Internal tube anchors**, tools: the source field `tools_needed` is marked [uncertain]
- **221 Internal tube anchors**, load_max: the source field `load` is marked [uncertain]
- **221 Internal tube anchors**, removability: the source field `removability` is marked [uncertain]
- **222 Blind threaded fixings**, tools: the source field `tools_needed` is marked [uncertain]
- **284 Scroll mechanism**, motion_in: the source field `input_output` is marked [uncertain]
- **339 Expanding internal grip**, power_source: the source field `power` is marked [uncertain]
- **339 Expanding internal grip**, motion_in: the source field `input_output` is marked [uncertain]
- **364 Hose clamp**, tools: the source field `tools_needed` is marked [uncertain]
- **364 Hose clamp**, load_max: the source field `load` is marked [uncertain]
