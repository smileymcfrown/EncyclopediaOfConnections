# hinges & pivots: Unusual hinges and pivots

19 entries. ⚑ = needs confirming: 55 best guesses and 2 values from text marked [uncertain]
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

- ⚑ **63 Geared hinge**, `opens_by` = swings on a hinge: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **63 Geared hinge**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **63 Geared hinge**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **64 Friction hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **64 Friction hinge**, `clicks` = silent: the text uses both clicking and silent words
- ⚑ **64 Friction hinge**, `holds_position` = yes: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **64 Friction hinge**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **64 Friction hinge**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **65 Ball-and-socket joint**, `holds_position` = yes: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **65 Ball-and-socket joint**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **65 Ball-and-socket joint**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **66 Posable segmented arm**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **66 Posable segmented arm**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **66 Posable segmented arm**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **67 Clevis joint**, `mounts_on` = tripod or stand: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **67 Clevis joint**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **67 Clevis joint**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **68 Rod end and ball link**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **68 Rod end and ball link**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **69 Turntable bearing**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **69 Turntable bearing**, `drive_does` = passes the turning on: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **69 Turntable bearing**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **180 Gimbal**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **180 Gimbal**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **180 Gimbal**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **181 Clip-on concealed hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **181 Clip-on concealed hinge**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **181 Clip-on concealed hinge**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **182 Invisible barrel hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **182 Invisible barrel hinge**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **183 Virtual-pivot linkage**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **183 Virtual-pivot linkage**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **183 Virtual-pivot linkage**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **184 Self-closing hinges**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **184 Self-closing hinges**, `holds_position` = yes: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **184 Self-closing hinges**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **184 Self-closing hinges**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **185 Lid and flap stays**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **185 Lid and flap stays**, `opens_by` = swings on a hinge: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **185 Lid and flap stays**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **185 Lid and flap stays**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **185 Lid and flap stays**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **185 Lid and flap stays**, `also_under` = hold together: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **263 Knuckle hinge**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **263 Knuckle hinge**, `opens_by` = swings on a hinge: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **263 Knuckle hinge**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **263 Knuckle hinge**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **264 Plain pivot and rolling bearing**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **264 Plain pivot and rolling bearing**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **285 Multi-turn rotation limiter**, `slows_by` = brake: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **285 Multi-turn rotation limiter**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **296 Knife-edge and jewel pivots**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **337 Ball caster**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **337 Ball caster**, `also_under` = spin: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **396 Castor**, `also_under` = spin: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **285 Multi-turn rotation limiter**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…r for clock and watch stop work; none for push-together printed rings [uncertain]…"
- ⚑ **285 Multi-turn rotation limiter**, `usual_process` = 3D print (FDM): `processes` is marked [uncertain] here: "…: rings, discs, nut carriers and gears are simple flat or round parts [uncertain: no tested printable model of…"
