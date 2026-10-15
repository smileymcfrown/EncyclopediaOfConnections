# motion conversion: Changes one kind of motion into another (cams, linkages, stepping motion)

19 entries. ⚑ = needs confirming: 34 best guesses and 5 values from text marked [uncertain]
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

- ⚑ **17 Lead screw and nut**, `straight_drive` = screw: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **35 Geneva drive**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **35 Geneva drive**, `clicks_do` = step forward: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **36 Intermittent gear**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **36 Intermittent gear**, `clicks_do` = step forward: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **84 Cam and follower**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **84 Cam and follower**, `straight_drive` = crank or cam: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **85 Scotch yoke**, `slide_kind` = pushed by a screw, chain or crank: carried over from the finder's old rule on entry names (R33), for "What kind of slide?" under "Let something move > Slide in a straight line, or telescope"
- ⚑ **85 Scotch yoke**, `straight_drive` = crank or cam: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **86 Slider-crank**, `straight_drive` = crank or cam: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **87 Four-bar linkage**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **87 Four-bar linkage**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **88 Rack and pinion**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **88 Rack and pinion**, `straight_drive` = long travel or pulling: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **89 Scissor linkage**, `connects` = something to grip: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **89 Scissor linkage**, `push_by` = levers and linkages: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **90 Iris mechanism**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **91 Whippletree**, `push_by` = levers and linkages: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **92 Twisted-string actuator**, `straight_drive` = long travel or pulling: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **92 Twisted-string actuator**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **196 Quick-return mechanism**, `straight_drive` = crank or cam: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **197 Straight-line linkages**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **197 Straight-line linkages**, `push_by` = levers and linkages: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **198 Escapement**, `motion_in` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `motion_out` = steps, back-and-forth turning, straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `shaft_layout` = parallel, at an angle, crossed: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **198 Escapement**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **198 Escapement**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **199 Bell crank**, `push_by` = levers and linkages: carried over from the finder's old rule on entry names (R33), for "How?" under "Change a movement > A push or pull moved, multiplied or redirected"
- ⚑ **200 Swashplate and wobble plate**, `straight_drive` = crank or cam: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **278 Tendon-driven joint**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes
- ⚑ **278 Tendon-driven joint**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **278 Tendon-driven joint**, `straight_drive` = long travel or pulling: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **279 Walking linkage**, `move_kind` = follows a set path: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **36 Intermittent gear**, `tools` = drill and tap, power tools, hand tools: `tools_needed` is marked [uncertain] here: "…ning rings (osamutake's printed models are held with retaining rings) [uncertain: tool not named]; for wooden…"
- ⚑ **92 Twisted-string actuator**, `power_source` = electricity: `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"
- ⚑ **92 Twisted-string actuator**, `power_loss` = lets go: `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"
- ⚑ **92 Twisted-string actuator**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…or hub and mounts; a lighter or heat sealer for synthetic string ends [uncertain]; grease (Tan and Collins mas…"
- ⚑ **278 Tendon-driven joint**, `power_source` = electricity: `power` is marked [uncertain] here: "…whereas a back-drivable drive lets the elastic return open the finger [uncertain].…"
