# hinges & pivots: Unusual hinges and pivots

19 entries. ⚑ = needs confirming: 12 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 63 | Geared hinge | lid, door or cover | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | no | removable |
| 64 | Friction hinge | lid, door or cover ⚑ | none | – | – | – | – | slips and keeps going | silent ⚑ | hand tools | medium | off-the-shelf part | no | removable |
| 65 | Ball-and-socket joint | – | none | – | – | – | – | – | – | none, press or vice, hand tools | heavy | 3D print (FDM) | yes | removable |
| 66 | Posable segmented arm | any solid parts ⚑ | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part | yes | removable |
| 67 | Clevis joint | wall, rail, desk or grid | none | – | – | – | – | – | – | none, hand tools | heavy | 3D print (FDM) | yes | removable |
| 68 | Rod end and ball link | any solid parts ⚑ | none | – | straight push or pull | straight push or pull | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 69 | Turntable bearing | any solid parts ⚑ | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 180 | Gimbal | – | none | – | – | – | – | – | – | none, soldering iron, hand tools | medium | 3D print (FDM) | yes | removable |
| 181 | Clip-on concealed hinge | lid, door or cover ⚑ | none | – | – | – | – | – ⚑ | – | drill and tap, power tools, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 182 | Invisible barrel hinge | lid, door or cover ⚑ | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 183 | Virtual-pivot linkage | – | none | – | steady turning | steady turning | parallel | – | – | drill and tap, hand tools | medium | 3D print (FDM) | partly | removable |
| 184 | Self-closing hinges | lid, door or cover ⚑ | none | – | – | – | – | – | clicks | hand tools | heavy | off-the-shelf part | yes | removable |
| 185 | Lid and flap stays | lid, door or cover ⚑ | none | – | – | – | – | slips and keeps going | silent | drill and tap, hand tools | medium | off-the-shelf part | yes | removable |
| 263 | Knuckle hinge | lid, door or cover | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part ⚑ | no | removable |
| 264 | Plain pivot and rolling bearing | any solid parts ⚑ | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | heavy | off-the-shelf part | no | removable |
| 285 | Multi-turn rotation limiter | – | none | – | – | – | – | – | – | hand tools ⚑ | heavy | 3D print (FDM) ⚑ | yes | removable |
| 296 | Knife-edge and jewel pivots | – | none | – | – | – | – | – | – | none, drill and tap, hand tools | light | off-the-shelf part | yes | tool-free quick release |
| 337 | Ball caster | – | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 396 | Castor | – | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **64 Friction hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **64 Friction hinge**, `clicks` = silent: the text uses both clicking and silent words
- ⚑ **66 Posable segmented arm**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **68 Rod end and ball link**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **69 Turntable bearing**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **181 Clip-on concealed hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **181 Clip-on concealed hinge**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **182 Invisible barrel hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **184 Self-closing hinges**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **185 Lid and flap stays**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **263 Knuckle hinge**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **264 Plain pivot and rolling bearing**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **285 Multi-turn rotation limiter**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…r for clock and watch stop work; none for push-together printed rings [uncertain]…"
- ⚑ **285 Multi-turn rotation limiter**, `usual_process` = 3D print (FDM): `processes` is marked [uncertain] here: "…: rings, discs, nut carriers and gears are simple flat or round parts [uncertain: no tested printable model of…"
