# over-centre, toggle & cam clamps: Snaps past a dead point and stays

4 entries. ⚑ = needs confirming: 17 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 19 | Over-centre linkage | any solid parts ⚑ | none | – | back-and-forth turning, straight push or pull ⚑ | back-and-forth turning, straight push or pull ⚑ | – ⚑ | – | – | none, drill and tap, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 20 | Toggle clamp | something to grip | none | – | back-and-forth turning ⚑ | back-and-forth turning, straight push or pull ⚑ | – ⚑ | – | – | none, drill and tap, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 21 | Draw latch | lid, door or cover | none | – | – | – | – | – | – | none, drill and tap, hand tools | heavy | off-the-shelf part ⚑ | yes | tool-free quick release |
| 22 | Eccentric cam lever | something to grip | none | – | steady turning ⚑ | straight push or pull ⚑ | – ⚑ | – | – | none, hand tools ⚑ | heavy | off-the-shelf part | yes | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **19 Over-centre linkage**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **19 Over-centre linkage**, `motion_in` = back-and-forth turning, straight push or pull: both sides turn, but no shaft layout named
- ⚑ **19 Over-centre linkage**, `motion_out` = back-and-forth turning, straight push or pull: both sides turn, but no shaft layout named
- ⚑ **19 Over-centre linkage**, `shaft_layout` = –: both sides turn, but no shaft layout named
- ⚑ **19 Over-centre linkage**, `over_centre_use` = clamp or latch: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **20 Toggle clamp**, `motion_in` = back-and-forth turning: both sides turn, but no shaft layout named
- ⚑ **20 Toggle clamp**, `motion_out` = back-and-forth turning, straight push or pull: both sides turn, but no shaft layout named
- ⚑ **20 Toggle clamp**, `shaft_layout` = –: both sides turn, but no shaft layout named
- ⚑ **20 Toggle clamp**, `gripped_by` = by hand: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **20 Toggle clamp**, `over_centre_use` = clamp or latch: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **21 Draw latch**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **21 Draw latch**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **21 Draw latch**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **21 Draw latch**, `over_centre_use` = clamp or latch: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **22 Eccentric cam lever**, `gripped_by` = by hand: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **22 Eccentric cam lever**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **22 Eccentric cam lever**, `over_centre_use` = clamp or latch: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **22 Eccentric cam lever**, `motion_in` = steady turning: `input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli [uncertain])…"
- ⚑ **22 Eccentric cam lever**, `motion_out` = straight push or pull: `input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli [uncertain])…"
- ⚑ **22 Eccentric cam lever**, `shaft_layout` = –: `input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli [uncertain])…"
- ⚑ **22 Eccentric cam lever**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…ud or to adjust the tension screw on some other pole and tripod locks [uncertain]…"
