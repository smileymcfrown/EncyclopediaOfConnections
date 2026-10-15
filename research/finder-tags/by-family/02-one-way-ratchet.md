# one-way & ratchet: Moves one way only

8 entries. ⚑ = needs confirming: 21 best guesses and 1 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | Ratchet and pawl | – | none | – | back-and-forth turning, straight push or pull | steps | – | – | clicks | hand tools | heavy | 3D print (FDM) | no | removable |
| 8 | Linear ratchet | – | none | – | straight push or pull | steps, straight push or pull | – | – | clicks | none, hand tools | heavy | off-the-shelf part ⚑ | yes | permanent |
| 9 | Face ratchet | – | none | – | steady turning | steady turning | in line | – | clicks | hand tools | heavy | off-the-shelf part | no | removable |
| 10 | Sprag clutch | – | none | – | steady turning | steady turning | in line | – | silent ⚑ | press or vice, hand tools | heavy | off-the-shelf part | no | removable |
| 11 | Roller clutch | – | none | – | steady turning | steady turning | in line | – | silent | press or vice, hand tools | medium | off-the-shelf part ⚑ | no | semi-permanent |
| 12 | Wrap-spring clutch | – | none | – | steady turning | steady turning | in line | slips and keeps going | silent | hand tools | medium | off-the-shelf part | partly | removable |
| 13 | Compliant ratchet and overrunning clutch | – | none | – | steady turning | steady turning | in line | – | clicks | none | medium | 3D print (FDM) | no | removable |
| 14 | Binding-plate lock | – | none | – | back-and-forth turning | steps, straight push or pull | – | – | silent | none, hand tools ⚑ | heavy | off-the-shelf part | yes | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **7 Ratchet and pawl**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **7 Ratchet and pawl**, `clicks_do` = step forward: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **8 Linear ratchet**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **8 Linear ratchet**, `tightens` = strap, cord or rope, parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **8 Linear ratchet**, `tension_hold` = ratchet, winch or screw: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **9 Face ratchet**, `drive_does` = one way only: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **9 Face ratchet**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **9 Face ratchet**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **10 Sprag clutch**, `clicks` = silent: the text uses both clicking and silent words
- ⚑ **10 Sprag clutch**, `drive_does` = one way only: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **10 Sprag clutch**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **10 Sprag clutch**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **11 Roller clutch**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **11 Roller clutch**, `drive_does` = one way only: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **11 Roller clutch**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **11 Roller clutch**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **12 Wrap-spring clutch**, `drive_does` = one way only: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **12 Wrap-spring clutch**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **12 Wrap-spring clutch**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **13 Compliant ratchet and overrunning clutch**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **13 Compliant ratchet and overrunning clutch**, `clicks_do` = step forward: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **14 Binding-plate lock**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…reverse or replace plates usually needs only a screwdriver or pliers [uncertain]…"
