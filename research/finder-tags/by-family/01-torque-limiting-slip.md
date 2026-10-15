# torque limiting & slip: Slips or lets go when overloaded

7 entries. ⚑ = needs confirming: 13 best guesses and 0 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | Ratchet-tooth torque limiter | – | none | – | steady turning | steady turning | in line | clicks or pops out and resets | clicks | none, hand tools | light | 3D print (FDM) | no | removable |
| 3 | Ball-detent torque limiter | any solid parts ⚑ | none | – | steady turning | steady turning | in line | clicks or pops out and resets | clicks | drill and tap, hand tools | heavy | 3D print (FDM) | yes | removable |
| 4 | Friction slip clutch | shaft ⚑ | none | – | steady turning | steady turning | in line | slips and keeps going | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 5 | Torque-limiting gear with flexing spring arms | shaft | none | – | steady turning | steady turning | parallel, in line | slips and keeps going | – | none, press or vice, hand tools | light | 3D print (FDM) | no | removable |
| 6 | Shear-pin coupling | shaft | none | – | steady turning | steady turning | in line | breaks or lets go once | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 143 | Magnetic coupling and magnetic gear | shaft ⚑ | none | – | steady turning | steady turning | parallel, at an angle, in line | slips and keeps going | – | press or vice, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 144 | Tolerance ring | 3D-printed part, shaft | none | – | steady turning | steady turning | in line | slips and keeps going | – | drill and tap, press or vice, power tools, hand tools | heavy | off-the-shelf part | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **2 Ratchet-tooth torque limiter**, `tightens` = parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **3 Ball-detent torque limiter**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **4 Friction slip clutch**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **4 Friction slip clutch**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **5 Torque-limiting gear with flexing spring arms**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **5 Torque-limiting gear with flexing spring arms**, `printable` = yes: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **6 Shear-pin coupling**, `shaft_joint` = shaft to shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **6 Shear-pin coupling**, `shaft_alignment` = exactly in line: carried over from the finder's old rule on entry names (R33), for "How well do the shafts line up?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > Two shafts end to end"
- ⚑ **143 Magnetic coupling and magnetic gear**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **144 Tolerance ring**, `printed_take_apart` = yes: carried over from the finder's old rule on entry names (R33), for "Will you need to take it apart again?" under "Hold two things together > 3D-printed parts, or screws, nuts and magnets into a print"
- ⚑ **144 Tolerance ring**, `threaded` = no: carried over from the finder's old rule on entry names (R33), for "Is there a screw or bolt?" under "Hold two things together > 3D-printed parts, or screws, nuts and magnets into a print > Yes"
- ⚑ **144 Tolerance ring**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **144 Tolerance ring**, `printable` = yes: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

None.
