# over-centre, toggle & cam clamps: Snaps past a dead point and stays

4 entries; 4 values the script was unsure of, 7 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 19 | Over-centre linkage | **any solid parts** | none | – | **back-and-forth turning, straight push or pull** | **back-and-forth turning, straight push or pull** | **–** | – | – | none, drill and tap, hand tools | *heavy* | 3D print (FDM) | yes | tool-free quick release |
| 20 | Toggle clamp | something to grip | none | – | **back-and-forth turning** | **back-and-forth turning, straight push or pull** | **–** | – | – | none, drill and tap, hand tools | *heavy* | off-the-shelf part | yes | tool-free quick release |
| 21 | Draw latch | lid, door or cover | none | – | *–* | *–* | *–* | – | – | none, drill and tap, hand tools | *heavy* | **off-the-shelf part** | yes | tool-free quick release |
| 22 | Eccentric cam lever | something to grip | none | – | *steady turning* | *straight push or pull* | *–* | – | – | *none, hand tools* | *heavy* | off-the-shelf part | yes | tool-free quick release |

## The script was unsure

- **19 Over-centre linkage**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **19 Over-centre linkage**, motion_in: both sides turn, but no shaft layout named
- **20 Toggle clamp**, motion_in: both sides turn, but no shaft layout named
- **21 Draw latch**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **19 Over-centre linkage**, load_max: the source field `load` is marked [uncertain]
- **20 Toggle clamp**, load_max: the source field `load` is marked [uncertain]
- **21 Draw latch**, motion_in: the source field `input_output` is marked [uncertain]
- **21 Draw latch**, load_max: the source field `load` is marked [uncertain]
- **22 Eccentric cam lever**, motion_in: the source field `input_output` is marked [uncertain]
- **22 Eccentric cam lever**, tools: the source field `tools_needed` is marked [uncertain]
- **22 Eccentric cam lever**, load_max: the source field `load` is marked [uncertain]
