# brakes, dampers & speed control: Slows it, stops it, or keeps its speed steady

6 entries. ⚑ = needs confirming: 6 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 211 | Friction brake | – | none | – | – | – | – | slips and keeps going | silent | hand tools ⚑ | heavy | off-the-shelf part | yes | removable |
| 212 | Eddy-current brake | – | none | – | – | – | – | – | – | press or vice, hand tools ⚑ | heavy | off-the-shelf part | yes | removable |
| 213 | Speed governor | – | none | – | steady turning ⚑ | pressure, heat ⚑ | – ⚑ | slips and keeps going | – | hand tools | light | 3D print (FDM) | yes | removable |
| 214 | Dampers | – | none | – | steady turning, straight push or pull ⚑ | steady turning ⚑ | at an angle, in line ⚑ | – | silent | hand tools | medium | off-the-shelf part | partly | removable |
| 215 | Elastomer isolation mount | wall, rail, desk or grid | none | – | – | – | – | – | – | sewing or leather tools, hand tools | heavy | off-the-shelf part | no | removable |
| 294 | Tuned mass damper | – | none | – | – | – | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **213 Speed governor**, `motion_in` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **213 Speed governor**, `motion_out` = pressure, heat: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **213 Speed governor**, `shaft_layout` = –: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `motion_in` = steady turning, straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `motion_out` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `shaft_layout` = at an angle, in line: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **211 Friction brake**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…brakes (Printables 208775, 1804380); a bleed kit for hydraulic brakes [uncertain]…"
- ⚑ **212 Eddy-current brake**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…t holder and disc hub; non-magnetic spacers or shims help set the gap [uncertain]; pressing magnets into print…"
