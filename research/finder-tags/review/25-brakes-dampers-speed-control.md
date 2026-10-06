# brakes, dampers & speed control: Slows it, stops it, or keeps its speed steady

6 entries; 2 values the script was unsure of, 5 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 211 | Friction brake | – | *none* | – | – | – | – | slips and keeps going | silent | *hand tools* | heavy | off-the-shelf part | yes | removable |
| 212 | Eddy-current brake | – | none | – | – | – | – | – | – | *press or vice, hand tools* | *heavy* | off-the-shelf part | yes | removable |
| 213 | Speed governor | – | none | – | **steady turning** | **pressure, heat** | **–** | slips and keeps going | – | hand tools | light | 3D print (FDM) | yes | removable |
| 214 | Dampers | – | none | – | **steady turning, straight push or pull** | **steady turning** | **at an angle, in line** | – | silent | hand tools | medium | off-the-shelf part | partly | removable |
| 215 | Elastomer isolation mount | wall, rail, desk or grid | none | – | – | – | – | – | – | sewing or leather tools, hand tools | heavy | off-the-shelf part | no | removable |
| 294 | Tuned mass damper | – | *none* | – | – | – | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |

## The script was unsure

- **213 Speed governor**, motion_in: read from the "Input: ... Output: ..." wording of `input_output`; check
- **214 Dampers**, motion_in: read from the "Input: ... Output: ..." wording of `input_output`; check

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **211 Friction brake**, power_source: the source field `power` is marked [uncertain]
- **211 Friction brake**, tools: the source field `tools_needed` is marked [uncertain]
- **212 Eddy-current brake**, tools: the source field `tools_needed` is marked [uncertain]
- **212 Eddy-current brake**, load_max: the source field `load` is marked [uncertain]
- **294 Tuned mass damper**, power_source: the source field `power` is marked [uncertain]
