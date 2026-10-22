# welding, brazing & soldering: Joins by melting: welds, brazes, solders and heat seals

12 entries. ⚑ = needs confirming: 2 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart | Electrical |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 328 | Welded metal joint | any solid parts | none | – | – | – | – | – | – | welding or brazing torch, press or vice, power tools, hand tools | heavy | sheet metal | no | permanent | – |
| 342 | Melted plastic weld | any solid parts | none | – | – | – | – | – | – | soldering iron, heat gun, welding or brazing torch, power tools, hand tools | medium | 3D print (FDM) | no | permanent | – |
| 343 | Friction-welded plastic | any solid parts | none | – | – | – | – | – | – | welding or brazing torch, drill and tap, press or vice, power tools, hand tools | medium | 3D print (FDM) | no | permanent | – |
| 344 | Heat-sealed seam | strap, cord or fabric | none | – | – | – | – | – | – | soldering iron, power tools | medium | off-the-shelf part | no | permanent | – |
| 404 | Soldered metal joint | wires, hoses or pipes | none | – | – | – | – | – | – | soldering iron, welding or brazing torch, hand tools | medium | sheet metal | no | semi-permanent | – ⚑ |
| 405 | Brazed joint | any solid parts | none | – | – | – | – | – | – | welding or brazing torch, press or vice, hand tools | heavy | sheet metal | no | permanent | – |
| 406 | Spot weld | wires | none | – | – | – | – | – | – | welding or brazing torch, drill and tap, press or vice, hand tools | medium | sheet metal | no | permanent | up to about 30 A ⚑ |
| 407 | Heat-fused plastic pipe | hoses or pipes | none | – | – | – | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | no | permanent | – |
| 409 | Ultrasonic weld | any solid parts | none | – | – | – | – | – | – | welding or brazing torch, press or vice, power tools | heavy | off-the-shelf part | no | permanent | – |
| 441 | Copper-foil joint | any solid parts | none | – | – | – | – | – | – | soldering iron, power tools, hand tools | light | off-the-shelf part ⚑ | no | permanent | – |
| 445 | Lead came joint | any solid parts | none | – | – | – | – | – | – | soldering iron, press or vice, hand tools ⚑ | light | by hand (tied or wrapped) | no | semi-permanent | – |
| 446 | Glass fusing | any solid parts | none | – | – | – | – | – | – | power tools, hand tools | medium | off-the-shelf part | no | permanent | – |

## Best guesses

The script was unsure of these values.

- ⚑ **404 Soldered metal joint**, `electrical_band` = –: tagged electrical, but `load` does not start with the fixed electrical lead-in
- ⚑ **441 Copper-foil joint**, `usual_process` = off-the-shelf part: first-listed process "soldering (by hand with a soldering iron)" not recognised; defaulted

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **406 Spot weld**, `electrical_band` = up to about 30 A: `load` is marked [uncertain] here: "Electrical: up to about 30 A per nickel strip [uncertain: depends on strip width and t…"
- ⚑ **445 Lead came joint**, `tools` = soldering iron, press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…'Cementing Lead Came'; Fine Woodworking). Zinc came is cut with a saw [uncertain: mentioned only in a reader's…"
