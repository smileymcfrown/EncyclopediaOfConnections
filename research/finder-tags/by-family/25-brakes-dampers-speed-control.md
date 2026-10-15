# brakes, dampers & speed control: Slows it, stops it, or keeps its speed steady

6 entries. ⚑ = needs confirming: 16 best guesses and 2 values from text marked [uncertain]
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

- ⚑ **211 Friction brake**, `holds_for` = a load: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **211 Friction brake**, `slows_by` = brake: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **212 Eddy-current brake**, `slows_by` = brake: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **213 Speed governor**, `motion_in` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **213 Speed governor**, `motion_out` = pressure, heat: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **213 Speed governor**, `shaft_layout` = –: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **213 Speed governor**, `slows_by` = steady speed or level: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **214 Dampers**, `motion_in` = steady turning, straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `motion_out` = steady turning: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `shaft_layout` = at an angle, in line: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **214 Dampers**, `one_way_kind` = for air or liquid: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **214 Dampers**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **215 Elastomer isolation mount**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **215 Elastomer isolation mount**, `wall_hold` = tape or pads: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **215 Elastomer isolation mount**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **294 Tuned mass damper**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **211 Friction brake**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…brakes (Printables 208775, 1804380); a bleed kit for hydraulic brakes [uncertain]…"
- ⚑ **212 Eddy-current brake**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…t holder and disc hub; non-magnetic spacers or shims help set the gap [uncertain]; pressing magnets into print…"
