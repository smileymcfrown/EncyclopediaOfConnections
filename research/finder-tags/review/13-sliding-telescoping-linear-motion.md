# sliding, telescoping & linear motion: Slides, telescopes and locks in place

12 entries; 5 values the script was unsure of, 10 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 70 | Telescoping tube twist lock | **tube, rod or extrusion, something to grip** | none | – | – | – | – | – | – | none, hand tools | *medium* | off-the-shelf part | yes | tool-free quick release |
| 71 | Telescoping tube lever lock | **tube, rod or extrusion** | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 72 | Spring button lock | **tube, rod or extrusion** | none | – | – | – | – | – | **clicks** | none, drill and tap, power tools | *medium* | off-the-shelf part | yes | *tool-free quick release* |
| 73 | Dovetail slide with gib strip | – | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 74 | Threadless ball screw | – | *none* | – | *steady turning* | *straight push or pull* | *–* | slips and keeps going | – | hand tools | medium | 3D print (FDM) | yes | removable |
| 75 | Reversing screw | – | none | – | *steady turning* | *back-and-forth straight* | *–* | – | – | hand tools | medium | 3D print (FDM) | no | removable |
| 76 | Multi-stage slide rigging | – | none | – | **steady turning, straight push or pull** | **straight push or pull** | **–** | – | – | *press or vice, hand tools* | medium | 3D print (FDM) | yes | removable |
| 186 | Drawer slide | – | none | – | – | – | – | – | clicks | drill and tap, hand tools | heavy | off-the-shelf part | *no* | removable |
| 187 | Ball screw | – | none | – | steady turning | steady turning, straight push or pull | in line | – | – | press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 188 | Differential screw | – | none | – | steady turning | straight push or pull | – | – | – | none, drill and tap, power tools, hand tools | light | off-the-shelf part | yes | removable |
| 189 | Rigid chain actuator | – | *electricity* | keeps its last state | *steady turning* | *straight push or pull* | *–* | – | – | hand tools | light | off-the-shelf part | yes | removable |
| 265 | Linear guides | – | none | – | – | – | – | – | – | press or vice, power tools, hand tools | heavy | off-the-shelf part | yes | removable |

## The script was unsure

- **70 Telescoping tube twist lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **71 Telescoping tube lever lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **72 Spring button lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **72 Spring button lock**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **76 Multi-stage slide rigging**, motion_in: read from the "Input: ... Output: ..." wording of `input_output`; check

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **70 Telescoping tube twist lock**, load_max: the source field `load` is marked [uncertain]
- **72 Spring button lock**, load_max: the source field `load` is marked [uncertain]
- **72 Spring button lock**, removability: the source field `removability` is marked [uncertain]
- **74 Threadless ball screw**, power_source: the source field `power` is marked [uncertain]
- **74 Threadless ball screw**, motion_in: the source field `input_output` is marked [uncertain]
- **75 Reversing screw**, motion_in: the source field `input_output` is marked [uncertain]
- **76 Multi-stage slide rigging**, tools: the source field `tools_needed` is marked [uncertain]
- **186 Drawer slide**, adjustable: the source field `adjustable` is marked [uncertain]
- **189 Rigid chain actuator**, power_source: the source field `power` is marked [uncertain]
- **189 Rigid chain actuator**, motion_in: the source field `input_output` is marked [uncertain]
