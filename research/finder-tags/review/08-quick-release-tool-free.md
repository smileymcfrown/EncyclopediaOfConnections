# quick-release & tool-free: Joins and comes apart without tools

17 entries; 5 values the script was unsure of, 9 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart | Electrical |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 18 | Half nut | – | none | – | steady turning | straight push or pull | – | – | – | none, press or vice, power tools, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release | – |
| 37 | Bayonet mount | lid, door or cover, wall, rail, desk or grid | none | – | – | – | – | – | – | none, power tools, hand tools | heavy | 3D print (FDM) | no | tool-free quick release | – |
| 38 | Interrupted-screw lock | lid, door or cover | none | – | – | – | – | – | – | none, power tools | heavy | 3D print (FDM) | no | tool-free quick release | – |
| 39 | Quarter-turn fastener | lid, door or cover | none | – | – | – | – | – | – | drill and tap, press or vice, sewing or leather tools, hand tools | medium | off-the-shelf part | *no* | tool-free quick release | – |
| 40 | Quick-release pin | wall, rail, desk or grid | none | – | – | – | – | – | – | none, drill and tap | heavy | off-the-shelf part | no | tool-free quick release | – |
| 41 | Quick-release plate | wall, rail, desk or grid | none | – | – | – | – | – | – | none, press or vice, hand tools | medium | 3D print (FDM) | yes | tool-free quick release | – |
| 42 | Hang-on mounts | wall, rail, desk or grid | none | – | – | – | – | – | – | none, drill and tap, power tools, hand tools | medium | woodwork | yes | tool-free quick release | – |
| 43 | Modular grid mounting systems | wall, rail, desk or grid | none | – | – | – | – | – | **clicks** | none, drill and tap, hand tools | *medium* | off-the-shelf part | yes | tool-free quick release | – |
| 166 | Quick couplers for tubes and hoses | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | **comes apart without damage, refit by hand** | clicks | none, hand tools | medium | off-the-shelf part | no | tool-free quick release | – |
| 167 | DIN-rail clip | wall, rail, desk or grid | none | – | – | – | – | – | – | none, hand tools | medium | **off-the-shelf part** | yes | tool-free quick release | – |
| 168 | Indexable clamping lever | wall, rail, desk or grid | none | – | *back-and-forth turning* | *steady turning* | *in line* | – | clicks | *none, hand tools* | *medium* | off-the-shelf part | yes | removable | – |
| 169 | Spring bar | tube, rod or extrusion | none | – | – | – | – | – | – | drill and tap, press or vice | medium | off-the-shelf part | no | removable | – |
| 170 | Band flange clamp | hoses or pipes | none | – | – | – | – | – | – | none, welding or brazing torch, press or vice, hand tools | heavy | off-the-shelf part | partly | tool-free quick release | – |
| 171 | Temporary sheet fastener | boards or sheet | none | – | – | – | – | – | – | drill and tap, hand tools | light | off-the-shelf part | no | removable | – |
| 261 | Tool-free fasteners | **any solid parts** | none | – | – | – | – | – | – | none, hand tools | *medium* | off-the-shelf part | yes | tool-free quick release | – |
| 286 | Genderless connector | wires | none | – | – | – | – | – | – | *none, soldering iron, crimper, hand tools* | heavy | 3D print (FDM) | no | tool-free quick release | **–** |
| 393 | Tripod and stand screw mount | wall, rail, desk or grid | none | – | – | – | – | – | – | none, soldering iron, drill and tap, power tools, hand tools | *medium* | off-the-shelf part | *yes* | removable | – |

## The script was unsure

- **43 Modular grid mounting systems**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **166 Quick couplers for tubes and hoses**, overload_response: new option (not yet a finder answer): lets go without damage and is put back by hand
- **167 DIN-rail clip**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **261 Tool-free fasteners**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **286 Genderless connector**, electrical_band: tagged electrical, but `load` does not start with the fixed electrical lead-in

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **39 Quarter-turn fastener**, adjustable: the source field `adjustable` is marked [uncertain]
- **43 Modular grid mounting systems**, load_max: the source field `load` is marked [uncertain]
- **168 Indexable clamping lever**, motion_in: the source field `input_output` is marked [uncertain]
- **168 Indexable clamping lever**, tools: the source field `tools_needed` is marked [uncertain]
- **168 Indexable clamping lever**, load_max: the source field `load` is marked [uncertain]
- **261 Tool-free fasteners**, load_max: the source field `load` is marked [uncertain]
- **286 Genderless connector**, tools: the source field `tools_needed` is marked [uncertain]
- **393 Tripod and stand screw mount**, load_max: the source field `load` is marked [uncertain]
- **393 Tripod and stand screw mount**, adjustable: the source field `adjustable` is marked [uncertain]
