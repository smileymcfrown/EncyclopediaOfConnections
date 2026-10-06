# hinges & pivots: Unusual hinges and pivots

19 entries; 12 values the script was unsure of, 11 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 63 | Geared hinge | lid, door or cover | none | – | – | – | – | – | – | drill and tap, hand tools | *heavy* | 3D print (FDM) | no | removable |
| 64 | Friction hinge | **lid, door or cover** | none | – | – | – | – | slips and keeps going | **silent** | hand tools | medium | off-the-shelf part | no | removable |
| 65 | Ball-and-socket joint | – | none | – | – | – | – | – | – | none, press or vice, hand tools | heavy | 3D print (FDM) | yes | removable |
| 66 | Posable segmented arm | **any solid parts** | none | – | – | – | – | – | – | none, hand tools | *light* | off-the-shelf part | yes | removable |
| 67 | Clevis joint | wall, rail, desk or grid | none | – | – | – | – | – | – | none, hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 68 | Rod end and ball link | **any solid parts** | none | – | *straight push or pull* | *straight push or pull* | *–* | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 69 | Turntable bearing | **any solid parts** | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 180 | Gimbal | – | none | – | – | – | – | – | – | none, soldering iron, hand tools | *medium* | 3D print (FDM) | yes | removable |
| 181 | Clip-on concealed hinge | **lid, door or cover** | none | – | – | – | – | **–** | – | drill and tap, power tools, hand tools | *medium* | off-the-shelf part | yes | tool-free quick release |
| 182 | Invisible barrel hinge | **lid, door or cover** | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 183 | Virtual-pivot linkage | – | none | – | *steady turning* | *steady turning* | *parallel* | – | – | drill and tap, hand tools | medium | 3D print (FDM) | partly | removable |
| 184 | Self-closing hinges | **lid, door or cover** | none | – | – | – | – | – | clicks | hand tools | heavy | off-the-shelf part | yes | removable |
| 185 | Lid and flap stays | **lid, door or cover** | none | – | – | – | – | slips and keeps going | silent | drill and tap, hand tools | medium | off-the-shelf part | yes | removable |
| 263 | Knuckle hinge | lid, door or cover | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | **off-the-shelf part** | no | removable |
| 264 | Plain pivot and rolling bearing | **any solid parts** | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | *heavy* | off-the-shelf part | no | removable |
| 285 | Multi-turn rotation limiter | – | none | – | – | – | – | – | – | *hand tools* | heavy | 3D print (FDM) | *yes* | removable |
| 296 | Knife-edge and jewel pivots | – | none | – | – | – | – | – | – | none, drill and tap, hand tools | light | off-the-shelf part | yes | tool-free quick release |
| 337 | Ball caster | – | none | – | – | – | – | – | – | drill and tap, hand tools | *heavy* | off-the-shelf part | no | removable |
| 396 | Castor | – | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |

## The script was unsure

- **64 Friction hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **64 Friction hinge**, clicks: both clicking and silent words appear; check
- **66 Posable segmented arm**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **68 Rod end and ball link**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **69 Turntable bearing**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **181 Clip-on concealed hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **181 Clip-on concealed hinge**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **182 Invisible barrel hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **184 Self-closing hinges**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **185 Lid and flap stays**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **263 Knuckle hinge**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **264 Plain pivot and rolling bearing**, connects: joins parts, but no specific kind of part found; set to any solid parts

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **63 Geared hinge**, load_max: the source field `load` is marked [uncertain]
- **66 Posable segmented arm**, load_max: the source field `load` is marked [uncertain]
- **67 Clevis joint**, load_max: the source field `load` is marked [uncertain]
- **68 Rod end and ball link**, motion_in: the source field `input_output` is marked [uncertain]
- **180 Gimbal**, load_max: the source field `load` is marked [uncertain]
- **181 Clip-on concealed hinge**, load_max: the source field `load` is marked [uncertain]
- **183 Virtual-pivot linkage**, motion_in: the source field `input_output` is marked [uncertain]
- **264 Plain pivot and rolling bearing**, load_max: the source field `load` is marked [uncertain]
- **285 Multi-turn rotation limiter**, tools: the source field `tools_needed` is marked [uncertain]
- **285 Multi-turn rotation limiter**, adjustable: the source field `adjustable` is marked [uncertain]
- **337 Ball caster**, load_max: the source field `load` is marked [uncertain]
