# motion conversion: Changes one kind of motion into another (cams, linkages, stepping motion)

19 entries. ⚑ = needs confirming: 9 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 17 | Lead screw and nut | – | none | – | steady turning | straight push or pull | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 35 | Geneva drive | – | none | – | steady turning | steps | – | – | clicks ⚑ | hand tools | heavy | 3D print (FDM) | no | removable |
| 36 | Intermittent gear | – | none | – | steady turning | steps, back-and-forth straight | – | – | clicks ⚑ | drill and tap, power tools, hand tools ⚑ | light | 3D print (FDM) | no | removable |
| 84 | Cam and follower | – | none | – | steady turning | back-and-forth turning, back-and-forth straight | parallel, at an angle | – | clicks | hand tools | heavy | 3D print (FDM) | no | removable |
| 85 | Scotch yoke | – | none | – | steady turning | back-and-forth straight | – | – | – | hand tools | heavy | 3D print (FDM) | no | removable |
| 86 | Slider-crank | – | none | – | steady turning | back-and-forth straight | – | – | – | hand tools | heavy | 3D print (FDM) | no | removable |
| 87 | Four-bar linkage | – | none | – | back-and-forth turning | back-and-forth turning | parallel, at an angle | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | no | removable |
| 88 | Rack and pinion | – | none | – | steady turning | straight push or pull | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part ⚑ | yes | removable |
| 89 | Scissor linkage | something to grip ⚑ | none | – | straight push or pull | straight push or pull | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 90 | Iris mechanism | – | none | – | steady turning | back-and-forth turning | in line | – | clicks | hand tools | light | 3D print (FDM) | yes | removable |
| 91 | Whippletree | – | none | – | straight push or pull | straight push or pull | – | – | – | none, hand tools | heavy | 3D print (FDM) | yes | removable |
| 92 | Twisted-string actuator | – | electricity ⚑ | lets go ⚑ | steady turning | straight push or pull | – | – | – | hand tools ⚑ | heavy | off-the-shelf part | yes | removable |
| 196 | Quick-return mechanism | – | none | – | steady turning | back-and-forth turning, back-and-forth straight | parallel | – | – | soldering iron, hand tools | heavy | 3D print (FDM) | yes | removable |
| 197 | Straight-line linkages | – | none | – | back-and-forth turning | back-and-forth turning, straight push or pull | parallel, at an angle | – | – | soldering iron, drill and tap, press or vice, hand tools | heavy | 3D print (FDM) | no | removable |
| 198 | Escapement | – | none | – | steady turning ⚑ | steps, back-and-forth turning, straight push or pull ⚑ | parallel, at an angle, crossed ⚑ | – | clicks ⚑ | press or vice, hand tools | light | 3D print (FDM) | yes | removable |
| 199 | Bell crank | – | none | – | back-and-forth turning, straight push or pull | straight push or pull | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 200 | Swashplate and wobble plate | – | none | – | steady turning | back-and-forth straight | – | – | – | press or vice, hand tools | heavy | 3D print (FDM) | yes | removable |
| 278 | Tendon-driven joint | – | electricity ⚑ | – ⚑ | straight push or pull | bending | – | – | – | crimper, heat gun, drill and tap, hand tools | medium | 3D print (FDM) | yes | removable |
| 279 | Walking linkage | – | none | – | steady turning | steady turning | parallel | – | – | none, soldering iron, hand tools | heavy | 3D print (FDM) | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **35 Geneva drive**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **36 Intermittent gear**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **88 Rack and pinion**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **89 Scissor linkage**, `connects` = something to grip: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **198 Escapement**, `motion_in` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `motion_out` = steps, back-and-forth turning, straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `shaft_layout` = parallel, at an angle, crossed: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **278 Tendon-driven joint**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **36 Intermittent gear**, `tools` = drill and tap, power tools, hand tools: `tools_needed` is marked [uncertain] here: "…ning rings (osamutake's printed models are held with retaining rings) [uncertain: tool not named]; for wooden…"
- ⚑ **92 Twisted-string actuator**, `power_source` = electricity: `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"
- ⚑ **92 Twisted-string actuator**, `power_loss` = lets go: `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"
- ⚑ **92 Twisted-string actuator**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…or hub and mounts; a lighter or heat sealer for synthetic string ends [uncertain]; grease (Tan and Collins mas…"
- ⚑ **278 Tendon-driven joint**, `power_source` = electricity: `power` is marked [uncertain] here: "…whereas a back-drivable drive lets the elastic return open the finger [uncertain].…"
