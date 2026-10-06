# one-way & ratchet: Moves one way only

8 entries; 3 values the script was unsure of, 8 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | Ratchet and pawl | – | none | – | *back-and-forth turning, straight push or pull* | *steps* | *–* | – | clicks | hand tools | heavy | 3D print (FDM) | no | removable |
| 8 | Linear ratchet | – | none | – | straight push or pull | steps, straight push or pull | – | – | clicks | none, hand tools | *heavy* | **off-the-shelf part** | yes | permanent |
| 9 | Face ratchet | – | none | – | *steady turning* | *steady turning* | *in line* | – | clicks | hand tools | *heavy* | off-the-shelf part | no | removable |
| 10 | Sprag clutch | – | none | – | steady turning | steady turning | in line | – | **silent** | press or vice, hand tools | heavy | off-the-shelf part | no | removable |
| 11 | Roller clutch | – | none | – | *steady turning* | *steady turning* | *in line* | – | silent | press or vice, hand tools | medium | **off-the-shelf part** | no | semi-permanent |
| 12 | Wrap-spring clutch | – | none | – | steady turning | steady turning | in line | slips and keeps going | silent | hand tools | medium | off-the-shelf part | partly | removable |
| 13 | Compliant ratchet and overrunning clutch | – | none | – | *steady turning* | *steady turning* | *in line* | – | clicks | none | *medium* | 3D print (FDM) | no | removable |
| 14 | Binding-plate lock | – | none | – | back-and-forth turning | steps, straight push or pull | – | – | silent | *none, hand tools* | heavy | off-the-shelf part | yes | tool-free quick release |

## The script was unsure

- **8 Linear ratchet**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **10 Sprag clutch**, clicks: both clicking and silent words appear; check
- **11 Roller clutch**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **7 Ratchet and pawl**, motion_in: the source field `input_output` is marked [uncertain]
- **8 Linear ratchet**, load_max: the source field `load` is marked [uncertain]
- **9 Face ratchet**, motion_in: the source field `input_output` is marked [uncertain]
- **9 Face ratchet**, load_max: the source field `load` is marked [uncertain]
- **11 Roller clutch**, motion_in: the source field `input_output` is marked [uncertain]
- **13 Compliant ratchet and overrunning clutch**, motion_in: the source field `input_output` is marked [uncertain]
- **13 Compliant ratchet and overrunning clutch**, load_max: the source field `load` is marked [uncertain]
- **14 Binding-plate lock**, tools: the source field `tools_needed` is marked [uncertain]
