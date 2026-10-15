# self-locking & anti-back-drive: Holds against a load until you release it

6 entries. ⚑ = needs confirming: 6 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | Bidirectional anti-back-drive clutch | – | none | – | steady turning | steady turning | in line | – | – | press or vice, hand tools ⚑ | medium | off-the-shelf part | no | removable |
| 146 | Self-locking wedge | something to grip | none | – | – | – | – | – | – | none, power tools, hand tools | heavy | woodwork | yes | removable |
| 147 | Inertia-locking reel | lid, door or cover ⚑ | none | – | straight push or pull | steady turning | – | – | clicks | hand tools ⚑ | heavy | off-the-shelf part | no | removable |
| 148 | Woven self-tightening grip | strap, cord or fabric | none | – | – | – | – | – | – | none, sewing or leather tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 260 | Thread-locking hardware | any solid parts ⚑ | none | – | – | – | – | – | clicks ⚑ | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |
| 292 | Weight-activated gripping tongs | something to grip | none | – | straight push or pull ⚑ | – ⚑ | – ⚑ | – | – | none, drill and tap, hand tools | heavy | off-the-shelf part | partly | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **147 Inertia-locking reel**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **260 Thread-locking hardware**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **260 Thread-locking hardware**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **292 Weight-activated gripping tongs**, `motion_in` = straight push or pull: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."
- ⚑ **292 Weight-activated gripping tongs**, `motion_out` = –: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."
- ⚑ **292 Weight-activated gripping tongs**, `shaft_layout` = –: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **15 Bidirectional anti-back-drive clutch**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…may also need circlip pliers or a small press for shafts and bearings [uncertain]…"
- ⚑ **147 Inertia-locking reel**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "To fit: spanner or socket for the anchor bolts [uncertain: specific bolt types vary]. T…"
