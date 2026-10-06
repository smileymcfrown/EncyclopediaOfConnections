# locks, latches & catches: Latches, catches and locks

15 entries; 11 values the script was unsure of, 13 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 24 | Push-push latch | **lid, door or cover** | none | – | straight push or pull | straight push or pull | – | – | clicks | *none, drill and tap, hand tools* | light | off-the-shelf part | *no* | tool-free quick release |
| 26 | Sear and trigger | – | *none* | – | *–* | *–* | *–* | – | – | none | heavy | 3D print (FDM) | partly | tool-free quick release |
| 27 | Compliant one-piece latch | lid, door or cover | none | – | – | – | – | – | – | none | medium | 3D print (FDM) | no | tool-free quick release |
| 28 | Hidden latches | **lid, door or cover** | none | – | – | – | – | – | – | drill and tap, hand tools | *light* | off-the-shelf part | no | tool-free quick release |
| 29 | Push-and-turn child-resistant cap | **any solid parts** | none | – | **–** | **–** | **–** | – | clicks | none | light | off-the-shelf part | no | tool-free quick release |
| 159 | Cam latch | lid, door or cover | none | – | – | – | – | – | clicks | drill and tap, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 160 | Mechanical interlock | **lid, door or cover** | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | partly | tool-free quick release |
| 161 | Pin-tumbler lock | **lid, door or cover** | none | – | – | – | – | – | – | *hand tools* | medium | off-the-shelf part | yes | tool-free quick release |
| 162 | Combination lock | **lid, door or cover** | none | – | – | – | – | – | clicks | hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 163 | Rotary latch | lid, door or cover | *none* | – | – | – | – | – | clicks | crimper, drill and tap, hand tools | *heavy* | off-the-shelf part | *partly* | tool-free quick release |
| 164 | Folding-blade lock | **lid, door or cover** | none | – | – | – | – | – | clicks | heat gun, hand tools | *medium* | off-the-shelf part | partly | tool-free quick release |
| 165 | Tamper-evident breakaway bridge | lid, door or cover | none | – | – | – | – | breaks or lets go once | **clicks** | none, hand tools | *light* | 3D print (FDM) | no | semi-permanent |
| 262 | Basic latches | lid, door or cover | none | – | – | – | – | – | **clicks** | drill and tap, hand tools | medium | off-the-shelf part | *partly* | tool-free quick release |
| 375 | Tamper-resistant fasteners | lid, door or cover | none | – | – | – | – | breaks or lets go once | silent | drill and tap, power tools, hand tools | *heavy* | off-the-shelf part | no | removable |
| 400 | Multi-point bolt | lid, door or cover | none | – | **steady turning** | **–** | **–** | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |

## The script was unsure

- **24 Push-push latch**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **28 Hidden latches**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **29 Push-and-turn child-resistant cap**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **29 Push-and-turn child-resistant cap**, motion_in: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- **160 Mechanical interlock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **161 Pin-tumbler lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **162 Combination lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **164 Folding-blade lock**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **165 Tamper-evident breakaway bridge**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **262 Basic latches**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **400 Multi-point bolt**, motion_in: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **24 Push-push latch**, tools: the source field `tools_needed` is marked [uncertain]
- **24 Push-push latch**, adjustable: the source field `adjustable` is marked [uncertain]
- **26 Sear and trigger**, power_source: the source field `power` is marked [uncertain]
- **26 Sear and trigger**, motion_in: the source field `input_output` is marked [uncertain]
- **28 Hidden latches**, load_max: the source field `load` is marked [uncertain]
- **161 Pin-tumbler lock**, tools: the source field `tools_needed` is marked [uncertain]
- **163 Rotary latch**, power_source: the source field `power` is marked [uncertain]
- **163 Rotary latch**, load_max: the source field `load` is marked [uncertain]
- **163 Rotary latch**, adjustable: the source field `adjustable` is marked [uncertain]
- **164 Folding-blade lock**, load_max: the source field `load` is marked [uncertain]
- **165 Tamper-evident breakaway bridge**, load_max: the source field `load` is marked [uncertain]
- **262 Basic latches**, adjustable: the source field `adjustable` is marked [uncertain]
- **375 Tamper-resistant fasteners**, load_max: the source field `load` is marked [uncertain]
