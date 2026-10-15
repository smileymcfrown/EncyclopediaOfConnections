# clutches & couplings: Connects shafts, or engages and disengages drive

16 entries. ⚑ = needs confirming: 44 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 77 | Oldham coupling | shaft | none | – | steady turning | steady turning | parallel, in line | breaks or lets go once | – | hand tools | medium | 3D print (FDM) | no | removable |
| 78 | Jaw coupling | shaft | none | – | steady turning | steady turning | in line | – | – | hand tools | heavy | off-the-shelf part | no | removable |
| 79 | Flexible beam coupling | shaft | none | – | steady turning | steady turning | in line | – | – | soldering iron, hand tools ⚑ | medium | off-the-shelf part | no | removable |
| 80 | Universal joint | shaft | none | – | steady turning | steady turning | at an angle | – | – | press or vice, hand tools ⚑ | heavy | 3D print (FDM) | no | removable |
| 81 | Dog clutch | shaft | none | – | steady turning | steady turning | in line | – | clicks | none, hand tools | heavy | 3D print (FDM) | no | tool-free quick release |
| 82 | Servo horn and spline hub | shaft | none | – | steady turning | steady turning | in line | – | clicks | hand tools | medium | off-the-shelf part | yes | removable |
| 83 | Series-elastic coupling | shaft ⚑ | electricity ⚑ | – ⚑ | steady turning | steady turning | in line | – | – | soldering iron, hand tools ⚑ | heavy | 3D print (FDM) | partly | removable |
| 145 | Centrifugal clutch | shaft ⚑ | none | – | steady turning | steady turning | in line | slips and keeps going | clicks ⚑ | hand tools | medium | off-the-shelf part | yes | removable |
| 190 | Spline shaft | shaft | none | – | steady turning | steady turning | in line | – | – | none, power tools, hand tools | heavy | 3D print (FDM) | yes | removable |
| 191 | Constant-velocity joint | shaft ⚑ | none | – | steady turning | steady turning | at an angle | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | no | removable |
| 192 | Friction clutch | shaft ⚑ | none | – | steady turning | steady turning | in line | slips and keeps going | – | none, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 193 | Keyless locking bush | shaft | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 194 | Schmidt coupling | shaft | none | – | steady turning | steady turning | parallel, in line | – | – | drill and tap, hand tools | heavy | 3D print (FDM) | yes | removable |
| 195 | Flexible drive shaft | shaft | none | – | steady turning | steady turning | at an angle, in line, far apart ⚑ | – | – | power tools, hand tools | medium | off-the-shelf part | no | removable |
| 266 | Shaft-to-hub joints and rigid couplings | shaft | none | – | steady turning | steady turning | in line | breaks or lets go once | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 287 | Gearless right-angle drive | shaft | none | – | steady turning | steady turning | at an angle | – | – | hand tools | medium | 3D print (FDM) | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **77 Oldham coupling**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **77 Oldham coupling**, `shaft_alignment` = a little out of line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **78 Jaw coupling**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **78 Jaw coupling**, `shaft_alignment` = a little out of line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **78 Jaw coupling**, `drive_does` = passes the turning on: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **78 Jaw coupling**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **79 Flexible beam coupling**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **79 Flexible beam coupling**, `shaft_alignment` = a little out of line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **79 Flexible beam coupling**, `flex_does` = straight line or spring: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **80 Universal joint**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **80 Universal joint**, `shaft_alignment` = at an angle or a bent path: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **80 Universal joint**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **81 Dog clutch**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **81 Dog clutch**, `shaft_alignment` = exactly in line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **82 Servo horn and spline hub**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **82 Servo horn and spline hub**, `printable` = yes: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **83 Series-elastic coupling**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **83 Series-elastic coupling**, `power_loss` = –: `power` mentions losing power, but none of the three outcomes
- ⚑ **83 Series-elastic coupling**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **83 Series-elastic coupling**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **145 Centrifugal clutch**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **145 Centrifugal clutch**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **190 Spline shaft**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **190 Spline shaft**, `printable` = no: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **190 Spline shaft**, `slide_kind` = carriage on a rail: carried over from the finder's old rule on entry names (R33), for "What kind of slide?" under "Let something move > Slide in a straight line, or telescope"
- ⚑ **191 Constant-velocity joint**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **191 Constant-velocity joint**, `drive_does` = passes the turning on: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **191 Constant-velocity joint**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **192 Friction clutch**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **193 Keyless locking bush**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **193 Keyless locking bush**, `printable` = no: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **194 Schmidt coupling**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **194 Schmidt coupling**, `shaft_alignment` = a little out of line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **194 Schmidt coupling**, `move_kind` = swivel or tilt: carried over from the finder's old rule on entry names (R33), for "How should it move?" under "Let something move"
- ⚑ **195 Flexible drive shaft**, `shaft_layout` = at an angle, in line, far apart: worked out from the name: a belt, chain, cable or flexible shaft links the two shafts
- ⚑ **195 Flexible drive shaft**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **195 Flexible drive shaft**, `shaft_alignment` = at an angle or a bent path: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **195 Flexible drive shaft**, `drive_does` = passes the turning on: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **195 Flexible drive shaft**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **266 Shaft-to-hub joints and rigid couplings**, `shaft_joint` = part onto a shaft, shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **266 Shaft-to-hub joints and rigid couplings**, `printable` = no: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **266 Shaft-to-hub joints and rigid couplings**, `shaft_alignment` = exactly in line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **287 Gearless right-angle drive**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **287 Gearless right-angle drive**, `shaft_alignment` = at an angle or a bent path: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **79 Flexible beam coupling**, `tools` = soldering iron, hand tools: `tools_needed` is marked [uncertain] here: "…screws, per Adafruit). Optional thread-locking compound on set screws [uncertain]. Printed versions need nuts,…"
- ⚑ **80 Universal joint**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…pliers and a vice or press to replace a car's cross-and-bearing joint [uncertain]. Printed joints need small m…"
- ⚑ **83 Series-elastic coupling**, `power_source` = electricity: `power` is marked [uncertain] here: "…arbox holds with springy give, a back-drivable one lets the joint sag [uncertain]…"
- ⚑ **83 Series-elastic coupling**, `tools` = soldering iron, hand tools: `tools_needed` is marked [uncertain] here: "…d known weights or a torque gauge to calibrate the spring's stiffness [uncertain: general practice]…"
