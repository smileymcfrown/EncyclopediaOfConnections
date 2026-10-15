# self-locking & anti-back-drive: Holds against a load until you release it

6 entries. ⚑ = needs confirming: 19 best guesses and 2 values from text marked [uncertain]
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

- ⚑ **15 Bidirectional anti-back-drive clutch**, `drive_does` = one way only: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **15 Bidirectional anti-back-drive clutch**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **15 Bidirectional anti-back-drive clutch**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **15 Bidirectional anti-back-drive clutch**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **146 Self-locking wedge**, `gripped_by` = by hand: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **147 Inertia-locking reel**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **147 Inertia-locking reel**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **147 Inertia-locking reel**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **147 Inertia-locking reel**, `tightens` = strap, cord or rope, belt, chain or cable: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **147 Inertia-locking reel**, `tension_hold` = ratchet, winch or screw: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **148 Woven self-tightening grip**, `cord_use` = a fitted part: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Hold two things together > Strap, cord, rope or fabric"
- ⚑ **148 Woven self-tightening grip**, `cord_part` = join or grip ends: carried over from the finder's old rule on entry names (R33), for "What should the part do?" under "Hold two things together > Strap, cord, rope or fabric > Fit a part"
- ⚑ **260 Thread-locking hardware**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **260 Thread-locking hardware**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **292 Weight-activated gripping tongs**, `motion_in` = straight push or pull: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."
- ⚑ **292 Weight-activated gripping tongs**, `motion_out` = –: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."
- ⚑ **292 Weight-activated gripping tongs**, `shaft_layout` = –: could not read both sides of `input_output`: "Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at..."
- ⚑ **292 Weight-activated gripping tongs**, `gripped_by` = by hand: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **292 Weight-activated gripping tongs**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **15 Bidirectional anti-back-drive clutch**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…may also need circlip pliers or a small press for shafts and bearings [uncertain]…"
- ⚑ **147 Inertia-locking reel**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "To fit: spanner or socket for the anchor bolts [uncertain: specific bolt types vary]. T…"
