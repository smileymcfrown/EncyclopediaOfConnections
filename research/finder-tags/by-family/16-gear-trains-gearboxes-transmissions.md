# gear trains, gearboxes & transmissions: Changes speed or turning force

18 entries. ⚑ = needs confirming: 6 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 16 | Worm drive | – | none | – | steady turning | steady turning | at an angle, crossed | – | – | hand tools | heavy | off-the-shelf part | no | removable |
| 93 | Planetary gear set | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, hand tools | heavy | off-the-shelf part ⚑ | no | removable |
| 94 | Compound planetary gearbox | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, press or vice, hand tools | heavy | 3D print (FDM) | no | removable |
| 95 | Strain-wave gear | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, press or vice, hand tools | heavy | off-the-shelf part | no | removable |
| 96 | Cycloidal drive | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, press or vice, hand tools | heavy | 3D print (FDM) | no | removable |
| 97 | Differential | – | none | – | steady turning | steady turning | at an angle, in line | slips and keeps going | – | hand tools | heavy | 3D print (FDM) | no ⚑ | removable |
| 98 | Bevel gears | – | none | – | steady turning | steady turning | at an angle, crossed | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 99 | Herringbone and helical gears | – | none | – | steady turning | steady turning | parallel, at an angle, crossed | – | – | hand tools | heavy | 3D print (FDM) | no | removable |
| 100 | Belt drives | – | none | – | steady turning | steady turning, straight push or pull | parallel, crossed, far apart ⚑ | slips and keeps going | – | soldering iron, welding or brazing torch, hand tools | heavy | off-the-shelf part | yes | removable |
| 101 | Capstan cable drive | – | none | – | back-and-forth turning | back-and-forth turning | parallel, far apart ⚑ | – | – | crimper, hand tools ⚑ | heavy | 3D print (FDM) | yes | removable |
| 102 | Bowden cable | – | none | – | straight push or pull | straight push or pull | – | – | – | crimper, sewing or leather tools, hand tools ⚑ | medium | off-the-shelf part | yes | removable |
| 201 | Anti-backlash gear | – | none | – | steady turning | steady turning | parallel | – | – | hand tools | light | off-the-shelf part | yes | removable |
| 202 | Chain and sprocket drive | – | none | – | steady turning | steady turning, straight push or pull | parallel, far apart ⚑ | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 203 | Non-circular gears | – | none | – | steady turning | steady turning | parallel | – | – | hand tools ⚑ | medium | 3D print (FDM) | no | removable |
| 204 | Lantern gear | – | none | – | steady turning | steady turning, straight push or pull | parallel, at an angle | – | – | drill and tap, press or vice, power tools, hand tools | heavy | laser cut | partly | removable |
| 205 | Friction drives and CVTs | – | none | – | steady turning | steady turning, straight push or pull | parallel, at an angle, in line | slips and keeps going | silent | hand tools | heavy | 3D print (FDM) | yes | removable |
| 206 | Pulley system | – | none | – | straight push or pull | straight push or pull | – | – | clicks ⚑ | none, hand tools | heavy | 3D print (FDM) | yes | removable |
| 267 | Spur gear pair and gear train | – | none | – | steady turning | steady turning | parallel | – | – | hand tools ⚑ | heavy | off-the-shelf part ⚑ | no | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **93 Planetary gear set**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **100 Belt drives**, `shaft_layout` = parallel, crossed, far apart: worked out from the name: a belt, chain, cable or flexible shaft links the two shafts
- ⚑ **101 Capstan cable drive**, `shaft_layout` = parallel, far apart: worked out from the name: a belt, chain, cable or flexible shaft links the two shafts
- ⚑ **202 Chain and sprocket drive**, `shaft_layout` = parallel, far apart: worked out from the name: a belt, chain, cable or flexible shaft links the two shafts
- ⚑ **206 Pulley system**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **267 Spur gear pair and gear train**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **97 Differential**, `adjustable` = no: `adjustable` is marked [uncertain] here: "…(gear mesh and backlash are set with shims or spacers when assembled [uncertain]).…"
- ⚑ **101 Capstan cable drive**, `tools` = crimper, hand tools: `tools_needed` is marked [uncertain] here: "…g or ball-end fittings; a lighter or glue to seal synthetic rope ends [uncertain]…"
- ⚑ **102 Bowden cable**, `tools` = crimper, sewing or leather tools, hand tools: `tools_needed` is marked [uncertain] here: "…; Sheldon Brown). For 3D-printer PTFE tubes: a square-cut tube cutter [uncertain]; push-in fittings need no to…"
- ⚑ **203 Non-circular gears**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…ff will bind or gap (follows from the fixed-centre rule in Wikipedia) [uncertain]…"
- ⚑ **267 Spur gear pair and gear train**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…gears, EngineerDog); a feeler gauge or paper strip to check backlash [uncertain]…"
