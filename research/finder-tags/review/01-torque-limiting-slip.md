# torque limiting & slip: Slips or lets go when overloaded

7 entries; 3 values the script was unsure of, 8 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | Ratchet-tooth torque limiter | – | none | – | *steady turning* | *steady turning* | *in line* | clicks or pops out and resets | clicks | none, hand tools | light | 3D print (FDM) | no | *removable* |
| 3 | Ball-detent torque limiter | **any solid parts** | none | – | *steady turning* | *steady turning* | *in line* | clicks or pops out and resets | clicks | drill and tap, hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 4 | Friction slip clutch | **shaft** | none | – | steady turning | steady turning | in line | slips and keeps going | – | hand tools | *heavy* | 3D print (FDM) | yes | removable |
| 5 | Torque-limiting gear with flexing spring arms | shaft | none | – | steady turning | steady turning | parallel, in line | slips and keeps going | – | none, press or vice, hand tools | light | 3D print (FDM) | no | removable |
| 6 | Shear-pin coupling | shaft | none | – | steady turning | steady turning | in line | breaks or lets go once | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 143 | Magnetic coupling and magnetic gear | **shaft** | none | – | *steady turning* | *steady turning* | *parallel, at an angle, in line* | slips and keeps going | – | press or vice, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release |
| 144 | Tolerance ring | 3D-printed part, shaft | none | – | *steady turning* | *steady turning* | *in line* | slips and keeps going | – | drill and tap, press or vice, power tools, hand tools | heavy | off-the-shelf part | no | *removable* |

## The script was unsure

- **3 Ball-detent torque limiter**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **4 Friction slip clutch**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **143 Magnetic coupling and magnetic gear**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **2 Ratchet-tooth torque limiter**, motion_in: the source field `input_output` is marked [uncertain]
- **2 Ratchet-tooth torque limiter**, removability: the source field `removability` is marked [uncertain]
- **3 Ball-detent torque limiter**, motion_in: the source field `input_output` is marked [uncertain]
- **3 Ball-detent torque limiter**, load_max: the source field `load` is marked [uncertain]
- **4 Friction slip clutch**, load_max: the source field `load` is marked [uncertain]
- **143 Magnetic coupling and magnetic gear**, motion_in: the source field `input_output` is marked [uncertain]
- **144 Tolerance ring**, motion_in: the source field `input_output` is marked [uncertain]
- **144 Tolerance ring**, removability: the source field `removability` is marked [uncertain]
