# tensioning, reels & take-up: Tightens and holds tension

5 entries. ⚑ = needs confirming: 16 best guesses and 1 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Ratcheting reel closure | – | none | – | steady turning | steady turning, straight push or pull | in line | clicks or pops out and resets | clicks | none, soldering iron, sewing or leather tools, hand tools | medium | 3D print (FDM) | yes | tool-free quick release |
| 128 | Belt tensioner | – | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 150 | Turnbuckle | strap, cord or fabric ⚑ | none | – | steady turning | straight push or pull | – | – | – | none, hand tools | heavy | off-the-shelf part | yes | removable |
| 151 | Capstan and windlass | – | none | – | steady turning | steady turning, straight push or pull | parallel, in line | – | clicks ⚑ | none, crimper, hand tools ⚑ | heavy | 3D print (FDM) | yes | removable |
| 152 | Shock-corded sectional pole | tube, rod or extrusion, strap, cord or fabric | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | no | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **1 Ratcheting reel closure**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **1 Ratcheting reel closure**, `tightens` = strap, cord or rope: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **1 Ratcheting reel closure**, `tension_hold` = ratchet, winch or screw: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **128 Belt tensioner**, `tightens` = belt, chain or cable: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **150 Turnbuckle**, `connects` = strap, cord or fabric: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **150 Turnbuckle**, `tightens` = strap, cord or rope: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **150 Turnbuckle**, `tension_hold` = ratchet, winch or screw: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **151 Capstan and windlass**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **151 Capstan and windlass**, `straight_drive` = long travel or pulling: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **151 Capstan and windlass**, `tightens` = strap, cord or rope: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **151 Capstan and windlass**, `tension_hold` = ratchet, winch or screw: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **152 Shock-corded sectional pole**, `carries_fluid` = no: carried over from the finder's old rule on entry names (R33), for "Does it carry air or liquid?" under "Hold two things together > Tube, rod, pole or aluminium extrusion"
- ⚑ **152 Shock-corded sectional pole**, `cord_use` = a fitted part: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Hold two things together > Strap, cord, rope or fabric"
- ⚑ **152 Shock-corded sectional pole**, `cord_part` = join or grip ends: carried over from the finder's old rule on entry names (R33), for "What should the part do?" under "Hold two things together > Strap, cord, rope or fabric > Fit a part"
- ⚑ **152 Shock-corded sectional pole**, `tightens` = strap, cord or rope: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **152 Shock-corded sectional pole**, `tension_hold` = spring or elastic: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **151 Capstan and windlass**, `tools` = none, crimper, hand tools: `tools_needed` is marked [uncertain] here: "…eel cable, fittings such as wire rope clips or crimps at the hook end [uncertain]…"
