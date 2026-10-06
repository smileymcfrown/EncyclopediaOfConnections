# motion conversion: Changes one kind of motion into another (cams, linkages, stepping motion)

19 entries; 7 values the script was unsure of, 29 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 17 | Lead screw and nut | – | none | – | steady turning | straight push or pull | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 35 | Geneva drive | – | none | – | *steady turning* | *steps* | *–* | – | **clicks** | hand tools | heavy | 3D print (FDM) | no | removable |
| 36 | Intermittent gear | – | none | – | *steady turning* | *steps, back-and-forth straight* | *–* | – | **clicks** | *drill and tap, power tools, hand tools* | light | 3D print (FDM) | no | removable |
| 84 | Cam and follower | – | *none* | – | *steady turning* | *back-and-forth turning, back-and-forth straight* | *parallel, at an angle* | – | clicks | hand tools | heavy | 3D print (FDM) | *no* | removable |
| 85 | Scotch yoke | – | none | – | *steady turning* | *back-and-forth straight* | *–* | – | – | hand tools | heavy | 3D print (FDM) | no | removable |
| 86 | Slider-crank | – | none | – | *steady turning* | *back-and-forth straight* | *–* | – | – | hand tools | heavy | 3D print (FDM) | no | *removable* |
| 87 | Four-bar linkage | – | none | – | *back-and-forth turning* | *back-and-forth turning* | *parallel, at an angle* | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | no | removable |
| 88 | Rack and pinion | – | none | – | steady turning | straight push or pull | – | – | – | drill and tap, hand tools | heavy | **off-the-shelf part** | yes | removable |
| 89 | Scissor linkage | **something to grip** | none | – | *straight push or pull* | *straight push or pull* | *–* | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 90 | Iris mechanism | – | *none* | – | *steady turning* | *back-and-forth turning* | *in line* | – | clicks | hand tools | light | 3D print (FDM) | yes | removable |
| 91 | Whippletree | – | none | – | *straight push or pull* | *straight push or pull* | *–* | – | – | none, hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 92 | Twisted-string actuator | – | *electricity* | lets go | *steady turning* | *straight push or pull* | *–* | – | – | *hand tools* | heavy | off-the-shelf part | yes | removable |
| 196 | Quick-return mechanism | – | none | – | *steady turning* | *back-and-forth turning, back-and-forth straight* | *parallel* | – | – | soldering iron, hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 197 | Straight-line linkages | – | none | – | *back-and-forth turning* | *back-and-forth turning, straight push or pull* | *parallel, at an angle* | – | – | soldering iron, drill and tap, press or vice, hand tools | *heavy* | 3D print (FDM) | *no* | removable |
| 198 | Escapement | – | none | – | **steady turning** | **steps, back-and-forth turning, straight push or pull** | **parallel, at an angle, crossed** | – | **clicks** | press or vice, hand tools | light | 3D print (FDM) | *yes* | removable |
| 199 | Bell crank | – | none | – | *back-and-forth turning, straight push or pull* | *straight push or pull* | *–* | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 200 | Swashplate and wobble plate | – | none | – | *steady turning* | *back-and-forth straight* | *–* | – | – | press or vice, hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 278 | Tendon-driven joint | – | *electricity* | **–** | straight push or pull | bending | – | – | – | crimper, heat gun, drill and tap, hand tools | medium | 3D print (FDM) | yes | removable |
| 279 | Walking linkage | – | none | – | *steady turning* | *steady turning* | *parallel* | – | – | none, soldering iron, hand tools | heavy | 3D print (FDM) | no | removable |

## The script was unsure

- **35 Geneva drive**, clicks: both clicking and silent words appear; check
- **36 Intermittent gear**, clicks: both clicking and silent words appear; check
- **88 Rack and pinion**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **89 Scissor linkage**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **198 Escapement**, motion_in: read from the "Input: ... Output: ..." wording of `input_output`; check
- **198 Escapement**, clicks: both clicking and silent words appear; check
- **278 Tendon-driven joint**, power_loss: mentions power loss, but no outcome matched; check

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **35 Geneva drive**, motion_in: the source field `input_output` is marked [uncertain]
- **36 Intermittent gear**, motion_in: the source field `input_output` is marked [uncertain]
- **36 Intermittent gear**, tools: the source field `tools_needed` is marked [uncertain]
- **84 Cam and follower**, power_source: the source field `power` is marked [uncertain]
- **84 Cam and follower**, motion_in: the source field `input_output` is marked [uncertain]
- **84 Cam and follower**, adjustable: the source field `adjustable` is marked [uncertain]
- **85 Scotch yoke**, motion_in: the source field `input_output` is marked [uncertain]
- **86 Slider-crank**, motion_in: the source field `input_output` is marked [uncertain]
- **86 Slider-crank**, removability: the source field `removability` is marked [uncertain]
- **87 Four-bar linkage**, motion_in: the source field `input_output` is marked [uncertain]
- **89 Scissor linkage**, motion_in: the source field `input_output` is marked [uncertain]
- **90 Iris mechanism**, power_source: the source field `power` is marked [uncertain]
- **90 Iris mechanism**, motion_in: the source field `input_output` is marked [uncertain]
- **91 Whippletree**, motion_in: the source field `input_output` is marked [uncertain]
- **91 Whippletree**, load_max: the source field `load` is marked [uncertain]
- **92 Twisted-string actuator**, power_source: the source field `power` is marked [uncertain]
- **92 Twisted-string actuator**, motion_in: the source field `input_output` is marked [uncertain]
- **92 Twisted-string actuator**, tools: the source field `tools_needed` is marked [uncertain]
- **196 Quick-return mechanism**, motion_in: the source field `input_output` is marked [uncertain]
- **196 Quick-return mechanism**, load_max: the source field `load` is marked [uncertain]
- **197 Straight-line linkages**, motion_in: the source field `input_output` is marked [uncertain]
- **197 Straight-line linkages**, load_max: the source field `load` is marked [uncertain]
- **197 Straight-line linkages**, adjustable: the source field `adjustable` is marked [uncertain]
- **198 Escapement**, adjustable: the source field `adjustable` is marked [uncertain]
- **199 Bell crank**, motion_in: the source field `input_output` is marked [uncertain]
- **200 Swashplate and wobble plate**, motion_in: the source field `input_output` is marked [uncertain]
- **200 Swashplate and wobble plate**, load_max: the source field `load` is marked [uncertain]
- **278 Tendon-driven joint**, power_source: the source field `power` is marked [uncertain]
- **279 Walking linkage**, motion_in: the source field `input_output` is marked [uncertain]
