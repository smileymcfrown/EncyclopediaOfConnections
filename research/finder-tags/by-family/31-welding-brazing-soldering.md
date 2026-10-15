# welding, brazing & soldering: Joins by melting: welds, brazes, solders and heat seals

9 entries. ⚑ = needs confirming: 23 best guesses and 1 values from text marked [uncertain]
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

## Best guesses

The script was unsure of these values.

- ⚑ **328 Welded metal joint**, `weld_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **342 Melted plastic weld**, `weld_material` = plastic or film: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **343 Friction-welded plastic**, `weld_material` = plastic or film: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **344 Heat-sealed seam**, `cord_use` = sew or lace, a fitted part: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Hold two things together > Strap, cord, rope or fabric"
- ⚑ **344 Heat-sealed seam**, `weld_material` = plastic or film: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **344 Heat-sealed seam**, `seal_use` = seal a still joint: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **344 Heat-sealed seam**, `seal_material` = plastic, fabric or a gap: carried over from the finder's old rule on entry names (R33), for "What are the parts?" under "Seal it, or pass cables, air or liquid through > Keep water, dust or air out of a joint that does not move > No, never"
- ⚑ **404 Soldered metal joint**, `electrical_band` = –: tagged electrical, but `load` does not start with the fixed electrical lead-in
- ⚑ **404 Soldered metal joint**, `weld_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **404 Soldered metal joint**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **404 Soldered metal joint**, `hose_join` = fused or brazed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **405 Brazed joint**, `weld_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **405 Brazed joint**, `seal_use` = seal a still joint, join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **405 Brazed joint**, `seal_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts?" under "Seal it, or pass cables, air or liquid through > Keep water, dust or air out of a joint that does not move > No, never"
- ⚑ **405 Brazed joint**, `hose_join` = fused or brazed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **406 Spot weld**, `weld_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **406 Spot weld**, `wire_use` = touching or turning contacts: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **406 Spot weld**, `seal_use` = seal a still joint: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **406 Spot weld**, `seal_material` = metal: carried over from the finder's old rule on entry names (R33), for "What are the parts?" under "Seal it, or pass cables, air or liquid through > Keep water, dust or air out of a joint that does not move > No, never"
- ⚑ **407 Heat-fused plastic pipe**, `weld_material` = plastic or film: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"
- ⚑ **407 Heat-fused plastic pipe**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **407 Heat-fused plastic pipe**, `hose_join` = fused or brazed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **409 Ultrasonic weld**, `weld_material` = plastic or film: carried over from the finder's old rule on entry names (R33), for "What are the parts made of?" under "Hold two things together > Melt them together"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **406 Spot weld**, `electrical_band` = up to about 30 A: `load` is marked [uncertain] here: "Electrical: up to about 30 A per nickel strip [uncertain: depends on strip width and t…"
