# compliant mechanisms & flexures: Bends instead of hinging

11 entries. ⚑ = needs confirming: 18 best guesses and 4 values from text marked [uncertain]
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
- ⚑ **49 Living hinge**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **50 Flexure hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **174 Lamina emergent torsional joint**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **175 Rolling-contact joint**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **175 Rolling-contact joint**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **175 Rolling-contact joint**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **176 Mechanical metamaterial mechanism**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **176 Mechanical metamaterial mechanism**, `motion_in` = steady turning: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **176 Mechanical metamaterial mechanism**, `motion_out` = –: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **176 Mechanical metamaterial mechanism**, `shaft_layout` = –: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- ⚑ **177 Tape-spring hinge**, `connects` = lid, door or cover: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **177 Tape-spring hinge**, `overload_response` = –: listed as torque-limiting or breakaway, but no overload behaviour matched
- ⚑ **178 Origami mechanisms**, `connects` = boards or sheet: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **178 Origami mechanisms**, `motion_in` = straight push or pull: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."
- ⚑ **178 Origami mechanisms**, `motion_out` = –: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."
- ⚑ **178 Origami mechanisms**, `shaft_layout` = –: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **50 Flexure hinge**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…hinges; a screwdriver or hex key to clamp metal blades between blocks [uncertain]; bought pivot bearings are f…"
- ⚑ **51 Parallel leaf-spring flexure**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…sitioning Device'); a hex key or screwdriver for clamped metal blades [uncertain]…"
- ⚑ **174 Lamina emergent torsional joint**, `tools` = power tools, hand tools: `tools_needed` is marked [uncertain] here: "…model has to hold its shape (BYU CMR 'Mini Flex Chair' instructions) [uncertain] (for water jet and stamping)…"
- ⚑ **177 Tape-spring hinge**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…he sharp cut edges (Naked Scientists); a screwdriver for clamp screws [uncertain]…"
