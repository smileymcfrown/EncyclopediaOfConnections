# compliant mechanisms & flexures: Bends instead of hinging

11 entries. ⚑ = needs confirming: 42 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 23 | Bistable compliant mechanism | lid, door or cover ⚑ | none | – | – | – | – | – | clicks ⚑ | none | light | 3D print (FDM) | no | tool-free quick release |
| 49 | Living hinge | lid, door or cover | none | – | – | – | – | – | – | none | light | off-the-shelf part ⚑ | no | permanent |
| 50 | Flexure hinge | lid, door or cover ⚑ | none | – | – | – | – | – | – | none, hand tools ⚑ | medium | 3D print (FDM) | no | permanent |
| 51 | Parallel leaf-spring flexure | – | none | – | – | – | – | – | – | none, hand tools ⚑ | medium | 3D print (FDM) | yes | permanent |
| 52 | Compliant gripper and force amplifier | something to grip | none | – | straight push or pull | steady turning, straight push or pull | – | – | – | none, hand tools | light | 3D print (FDM) | no | tool-free quick release |
| 53 | Fin-ray gripper | something to grip | none | – | – | – | – | – | – | hand tools | light | 3D print (FDM) | no | tool-free quick release |
| 174 | Lamina emergent torsional joint | – | none | – | – | – | – | – | clicks ⚑ | power tools, hand tools ⚑ | light | laser cut | no | permanent |
| 175 | Rolling-contact joint | lid, door or cover ⚑ | none | – | – | – | – | – ⚑ | clicks ⚑ | crimper, hand tools | medium | 3D print (FDM) | yes | removable |
| 176 | Mechanical metamaterial mechanism | lid, door or cover ⚑ | none | – | steady turning ⚑ | – ⚑ | – ⚑ | – | – | none, power tools, hand tools | light | 3D print (FDM) | no | permanent |
| 177 | Tape-spring hinge | lid, door or cover ⚑ | none | – | – | – | – | – ⚑ | – | hand tools ⚑ | light | off-the-shelf part | no | removable |
| 178 | Origami mechanisms | boards or sheet ⚑ | none | – | straight push or pull ⚑ | – ⚑ | – ⚑ | – | – | none, hand tools | light | 3D print (FDM) | partly | permanent |

## Best guesses

The script was unsure of these values.

- ⚑ **23 Bistable compliant mechanism**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **23 Bistable compliant mechanism**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **23 Bistable compliant mechanism**, `flex_does` = grips or snaps: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **23 Bistable compliant mechanism**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **23 Bistable compliant mechanism**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **49 Living hinge**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **49 Living hinge**, `opens_by` = swings on a hinge: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **49 Living hinge**, `flex_does` = folds like a hinge: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **49 Living hinge**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **50 Flexure hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **50 Flexure hinge**, `flex_does` = folds like a hinge, straight line or spring: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **51 Parallel leaf-spring flexure**, `flex_does` = straight line or spring: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **52 Compliant gripper and force amplifier**, `gripped_by` = machine: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **52 Compliant gripper and force amplifier**, `flex_does` = grips or snaps: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **52 Compliant gripper and force amplifier**, `push_by` = levers and linkages: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **53 Fin-ray gripper**, `gripped_by` = machine: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **53 Fin-ray gripper**, `flex_does` = grips or snaps: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **174 Lamina emergent torsional joint**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **174 Lamina emergent torsional joint**, `flex_does` = folds like a hinge: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **174 Lamina emergent torsional joint**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **175 Rolling-contact joint**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **175 Rolling-contact joint**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **175 Rolling-contact joint**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **175 Rolling-contact joint**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **175 Rolling-contact joint**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **176 Mechanical metamaterial mechanism**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **176 Mechanical metamaterial mechanism**, `motion_in` = steady turning: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **176 Mechanical metamaterial mechanism**, `motion_out` = –: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **176 Mechanical metamaterial mechanism**, `shaft_layout` = –: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **176 Mechanical metamaterial mechanism**, `flex_does` = folds like a hinge: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **176 Mechanical metamaterial mechanism**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **176 Mechanical metamaterial mechanism**, `also_under` = control: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **177 Tape-spring hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **177 Tape-spring hinge**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **177 Tape-spring hinge**, `flex_does` = folds like a hinge: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **177 Tape-spring hinge**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **177 Tape-spring hinge**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **178 Origami mechanisms**, `connects` = boards or sheet: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **178 Origami mechanisms**, `motion_in` = straight push or pull: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."
- ⚑ **178 Origami mechanisms**, `motion_out` = –: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."
- ⚑ **178 Origami mechanisms**, `shaft_layout` = –: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."
- ⚑ **178 Origami mechanisms**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **50 Flexure hinge**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…hinges; a screwdriver or hex key to clamp metal blades between blocks [uncertain]; bought pivot bearings are f…"
- ⚑ **51 Parallel leaf-spring flexure**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…sitioning Device'); a hex key or screwdriver for clamped metal blades [uncertain]…"
- ⚑ **174 Lamina emergent torsional joint**, `tools` = power tools, hand tools: `tools_needed` is marked [uncertain] here: "…model has to hold its shape (BYU CMR 'Mini Flex Chair' instructions) [uncertain] (for water jet and stamping)…"
- ⚑ **177 Tape-spring hinge**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…he sharp cut edges (Naked Scientists); a screwdriver for clamp screws [uncertain]…"
