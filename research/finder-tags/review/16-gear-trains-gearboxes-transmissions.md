# gear trains, gearboxes & transmissions: Changes speed or turning force

18 entries; 3 values the script was unsure of, 19 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 16 | Worm drive | – | none | – | steady turning | steady turning | at an angle, crossed | – | – | hand tools | *heavy* | off-the-shelf part | no | removable |
| 93 | Planetary gear set | – | none | – | *steady turning* | *steady turning* | *in line* | – | – | soldering iron, hand tools | heavy | **off-the-shelf part** | no | removable |
| 94 | Compound planetary gearbox | – | none | – | *steady turning* | *steady turning* | *in line* | – | – | soldering iron, press or vice, hand tools | heavy | 3D print (FDM) | no | removable |
| 95 | Strain-wave gear | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, press or vice, hand tools | heavy | off-the-shelf part | no | removable |
| 96 | Cycloidal drive | – | none | – | *steady turning* | *steady turning* | *in line* | – | – | soldering iron, press or vice, hand tools | heavy | 3D print (FDM) | no | removable |
| 97 | Differential | – | *none* | – | *steady turning* | *steady turning* | *at an angle, in line* | slips and keeps going | – | hand tools | *heavy* | 3D print (FDM) | *no* | removable |
| 98 | Bevel gears | – | none | – | *steady turning* | *steady turning* | *at an angle, crossed* | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 99 | Herringbone and helical gears | – | none | – | *steady turning* | *steady turning* | *parallel, at an angle, crossed* | – | – | hand tools | heavy | 3D print (FDM) | no | removable |
| 100 | Belt drives | – | none | – | steady turning | steady turning, straight push or pull | parallel, crossed | slips and keeps going | – | soldering iron, welding or brazing torch, hand tools | heavy | off-the-shelf part | yes | removable |
| 101 | Capstan cable drive | – | none | – | back-and-forth turning | back-and-forth turning | parallel | – | – | *crimper, hand tools* | heavy | 3D print (FDM) | yes | removable |
| 102 | Bowden cable | – | none | – | straight push or pull | straight push or pull | – | – | – | *crimper, sewing or leather tools, hand tools* | medium | off-the-shelf part | yes | removable |
| 201 | Anti-backlash gear | – | none | – | *steady turning* | *steady turning* | *parallel* | – | – | hand tools | *light* | off-the-shelf part | yes | removable |
| 202 | Chain and sprocket drive | – | none | – | steady turning | steady turning, straight push or pull | parallel | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 203 | Non-circular gears | – | none | – | *steady turning* | *steady turning* | *parallel* | – | – | *hand tools* | medium | 3D print (FDM) | no | removable |
| 204 | Lantern gear | – | none | – | *steady turning* | *steady turning, straight push or pull* | *parallel, at an angle* | – | – | drill and tap, press or vice, power tools, hand tools | heavy | laser cut | partly | removable |
| 205 | Friction drives and CVTs | – | none | – | *steady turning* | *steady turning, straight push or pull* | *parallel, at an angle, in line* | slips and keeps going | silent | hand tools | heavy | 3D print (FDM) | yes | removable |
| 206 | Pulley system | – | none | – | straight push or pull | straight push or pull | – | – | **clicks** | none, hand tools | heavy | 3D print (FDM) | yes | removable |
| 267 | Spur gear pair and gear train | – | none | – | steady turning | steady turning | parallel | – | – | *hand tools* | heavy | **off-the-shelf part** | no | removable |

## The script was unsure

- **93 Planetary gear set**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **206 Pulley system**, clicks: both clicking and silent words appear; check
- **267 Spur gear pair and gear train**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **16 Worm drive**, load_max: the source field `load` is marked [uncertain]
- **93 Planetary gear set**, motion_in: the source field `input_output` is marked [uncertain]
- **94 Compound planetary gearbox**, motion_in: the source field `input_output` is marked [uncertain]
- **96 Cycloidal drive**, motion_in: the source field `input_output` is marked [uncertain]
- **97 Differential**, power_source: the source field `power` is marked [uncertain]
- **97 Differential**, motion_in: the source field `input_output` is marked [uncertain]
- **97 Differential**, load_max: the source field `load` is marked [uncertain]
- **97 Differential**, adjustable: the source field `adjustable` is marked [uncertain]
- **98 Bevel gears**, motion_in: the source field `input_output` is marked [uncertain]
- **99 Herringbone and helical gears**, motion_in: the source field `input_output` is marked [uncertain]
- **101 Capstan cable drive**, tools: the source field `tools_needed` is marked [uncertain]
- **102 Bowden cable**, tools: the source field `tools_needed` is marked [uncertain]
- **201 Anti-backlash gear**, motion_in: the source field `input_output` is marked [uncertain]
- **201 Anti-backlash gear**, load_max: the source field `load` is marked [uncertain]
- **203 Non-circular gears**, motion_in: the source field `input_output` is marked [uncertain]
- **203 Non-circular gears**, tools: the source field `tools_needed` is marked [uncertain]
- **204 Lantern gear**, motion_in: the source field `input_output` is marked [uncertain]
- **205 Friction drives and CVTs**, motion_in: the source field `input_output` is marked [uncertain]
- **267 Spur gear pair and gear train**, tools: the source field `tools_needed` is marked [uncertain]
