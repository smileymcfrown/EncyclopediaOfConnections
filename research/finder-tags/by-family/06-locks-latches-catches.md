# locks, latches & catches: Latches, catches and locks

15 entries. ⚑ = needs confirming: 15 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 24 | Push-push latch | lid, door or cover ⚑ | none | – | straight push or pull | straight push or pull | – | – | clicks | none, drill and tap, hand tools ⚑ | light | off-the-shelf part | no | tool-free quick release |
| 26 | Sear and trigger | – | none | – | – | – | – | – | – | none | heavy | 3D print (FDM) | partly | tool-free quick release |
| 27 | Compliant one-piece latch | lid, door or cover | none | – | – | – | – | – | – | none | medium | 3D print (FDM) | no | tool-free quick release |
| 28 | Hidden latches | lid, door or cover ⚑ | none | – | – | – | – | – | – | drill and tap, hand tools | light | off-the-shelf part | no | tool-free quick release |
| 29 | Push-and-turn child-resistant cap | any solid parts ⚑ | none | – | – ⚑ | – ⚑ | – ⚑ | – | clicks | none | light | off-the-shelf part | no | tool-free quick release |
| 159 | Cam latch | lid, door or cover | none | – | – | – | – | – | clicks | drill and tap, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 160 | Mechanical interlock | lid, door or cover ⚑ | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | partly | tool-free quick release |
| 161 | Pin-tumbler lock | lid, door or cover ⚑ | none | – | – | – | – | – | – | hand tools ⚑ | medium | off-the-shelf part | yes | tool-free quick release |
| 162 | Combination lock | lid, door or cover ⚑ | none | – | – | – | – | – | clicks | hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 163 | Rotary latch | lid, door or cover | none | – | – | – | – | – | clicks | crimper, drill and tap, hand tools | heavy | off-the-shelf part | partly ⚑ | tool-free quick release |
| 164 | Folding-blade lock | lid, door or cover ⚑ | none | – | – | – | – | – | clicks | heat gun, hand tools | medium | off-the-shelf part | partly | tool-free quick release |
| 165 | Tamper-evident breakaway bridge | lid, door or cover | none | – | – | – | – | breaks or lets go once | clicks ⚑ | none, hand tools | light | 3D print (FDM) | no | semi-permanent |
| 262 | Basic latches | lid, door or cover | none | – | – | – | – | – | clicks ⚑ | drill and tap, hand tools | medium | off-the-shelf part | partly | tool-free quick release |
| 375 | Tamper-resistant fasteners | lid, door or cover | none | – | – | – | – | breaks or lets go once | silent | drill and tap, power tools, hand tools | heavy ⚑ | off-the-shelf part | no | removable |
| 400 | Multi-point bolt | lid, door or cover | none | – | steady turning ⚑ | – ⚑ | – ⚑ | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **24 Push-push latch**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **28 Hidden latches**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **29 Push-and-turn child-resistant cap**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **29 Push-and-turn child-resistant cap**, `motion_in` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **29 Push-and-turn child-resistant cap**, `motion_out` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **29 Push-and-turn child-resistant cap**, `shaft_layout` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **160 Mechanical interlock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **161 Pin-tumbler lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **162 Combination lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **164 Folding-blade lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **165 Tamper-evident breakaway bridge**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **262 Basic latches**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **400 Multi-point bolt**, `motion_in` = steady turning: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."
- ⚑ **400 Multi-point bolt**, `motion_out` = –: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."
- ⚑ **400 Multi-point bolt**, `shaft_layout` = –: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **24 Push-push latch**, `tools` = none, drill and tap, hand tools: `tools_needed` is marked [uncertain] here: "…o operate; screwdriver or drill to fit a cabinet latch and its strike [uncertain]…"
- ⚑ **161 Pin-tumbler lock**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…e set screw); a mortice lock also needs a pocket cut in the door edge [uncertain: fitting details not from an…"
- ⚑ **163 Rotary latch**, `adjustable` = partly: `adjustable` is marked [uncertain] here: "…clearance hole (Southco R4 lists single-hole and slot-mount strikers) [uncertain: adjustment procedure not des…"
- ⚑ **375 Tamper-resistant fasteners**, `load_max` = heavy: `load` is marked [uncertain] here: "…ame size and material, because the special shape is only in the drive [uncertain…"
