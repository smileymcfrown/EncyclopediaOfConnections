# locks, latches & catches: Latches, catches and locks

15 entries. ⚑ = needs confirming: 51 best guesses and 4 values from text marked [uncertain]
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
- ⚑ **24 Push-push latch**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **24 Push-push latch**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **26 Sear and trigger**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **26 Sear and trigger**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **27 Compliant one-piece latch**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **27 Compliant one-piece latch**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **28 Hidden latches**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **28 Hidden latches**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **28 Hidden latches**, `locks_out` = yes: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **28 Hidden latches**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **29 Push-and-turn child-resistant cap**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **29 Push-and-turn child-resistant cap**, `motion_in` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **29 Push-and-turn child-resistant cap**, `motion_out` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **29 Push-and-turn child-resistant cap**, `shaft_layout` = –: no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ **29 Push-and-turn child-resistant cap**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **159 Cam latch**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **159 Cam latch**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **160 Mechanical interlock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **160 Mechanical interlock**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **160 Mechanical interlock**, `locks_out` = yes: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **161 Pin-tumbler lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **161 Pin-tumbler lock**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **161 Pin-tumbler lock**, `locks_out` = yes: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **161 Pin-tumbler lock**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **162 Combination lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **162 Combination lock**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **162 Combination lock**, `locks_out` = yes: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **162 Combination lock**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **163 Rotary latch**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **163 Rotary latch**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **163 Rotary latch**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **164 Folding-blade lock**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **164 Folding-blade lock**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **164 Folding-blade lock**, `locks_out` = yes: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **164 Folding-blade lock**, `clicks_do` = hold a set position: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **164 Folding-blade lock**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **165 Tamper-evident breakaway bridge**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **165 Tamper-evident breakaway bridge**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **262 Basic latches**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **262 Basic latches**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **262 Basic latches**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **262 Basic latches**, `one_way_kind` = clicks: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **375 Tamper-resistant fasteners**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **400 Multi-point bolt**, `motion_in` = steady turning: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."
- ⚑ **400 Multi-point bolt**, `motion_out` = –: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."
- ⚑ **400 Multi-point bolt**, `shaft_layout` = –: could not read both sides of `input_output`: "Handle or key rotation -> two or more bolt movements at once. Crémone: rotation -> two opp..."
- ⚑ **400 Multi-point bolt**, `opens_by` = catch or lever: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **400 Multi-point bolt**, `locks_out` = no: carried over from the finder's old rule on entry names (R33), for "Should it lock, so only the right person can open it?" under "Hold two things together > A lid, door or cover that opens and closes > Press, pull or flip a catch or lever"
- ⚑ **400 Multi-point bolt**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **400 Multi-point bolt**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **24 Push-push latch**, `tools` = none, drill and tap, hand tools: `tools_needed` is marked [uncertain] here: "…o operate; screwdriver or drill to fit a cabinet latch and its strike [uncertain]…"
- ⚑ **161 Pin-tumbler lock**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…e set screw); a mortice lock also needs a pocket cut in the door edge [uncertain: fitting details not from an…"
- ⚑ **163 Rotary latch**, `adjustable` = partly: `adjustable` is marked [uncertain] here: "…clearance hole (Southco R4 lists single-hole and slot-mount strikers) [uncertain: adjustment procedure not des…"
- ⚑ **375 Tamper-resistant fasteners**, `load_max` = heavy: `load` is marked [uncertain] here: "…ame size and material, because the special shape is only in the drive [uncertain…"
