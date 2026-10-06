# sliding, telescoping & linear motion: Slides, telescopes and locks in place

12 entries. ⚑ = needs confirming: 7 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 70 | Telescoping tube twist lock | tube, rod or extrusion, something to grip ⚑ | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 71 | Telescoping tube lever lock | tube, rod or extrusion ⚑ | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 72 | Spring button lock | tube, rod or extrusion ⚑ | none | – | – | – | – | – | clicks ⚑ | none, drill and tap, power tools | medium | off-the-shelf part | yes | tool-free quick release |
| 73 | Dovetail slide with gib strip | – | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | yes | removable |
| 74 | Threadless ball screw | – | none | – | steady turning | straight push or pull | – | slips and keeps going | – | hand tools | medium | 3D print (FDM) | yes | removable |
| 75 | Reversing screw | – | none | – | steady turning | back-and-forth straight | – | – | – | hand tools | medium | 3D print (FDM) | no | removable |
| 76 | Multi-stage slide rigging | – | none | – | steady turning, straight push or pull ⚑ | straight push or pull ⚑ | – ⚑ | – | – | press or vice, hand tools ⚑ | medium | 3D print (FDM) | yes | removable |
| 186 | Drawer slide | – | none | – | – | – | – | – | clicks | drill and tap, hand tools | heavy | off-the-shelf part | no ⚑ | removable |
| 187 | Ball screw | – | none | – | steady turning | steady turning, straight push or pull | in line | – | – | press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 188 | Differential screw | – | none | – | steady turning | straight push or pull | – | – | – | none, drill and tap, power tools, hand tools | light | off-the-shelf part | yes | removable |
| 189 | Rigid chain actuator | – | electricity ⚑ | keeps its last state ⚑ | steady turning | straight push or pull | – | – | – | hand tools | light | off-the-shelf part | yes | removable |
| 265 | Linear guides | – | none | – | – | – | – | – | – | press or vice, power tools, hand tools | heavy | off-the-shelf part | yes | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **70 Telescoping tube twist lock**, `connects` = tube, rod or extrusion, something to grip: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **71 Telescoping tube lever lock**, `connects` = tube, rod or extrusion: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **72 Spring button lock**, `connects` = tube, rod or extrusion: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **72 Spring button lock**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **76 Multi-stage slide rigging**, `motion_in` = steady turning, straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **76 Multi-stage slide rigging**, `motion_out` = straight push or pull: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form
- ⚑ **76 Multi-stage slide rigging**, `shaft_layout` = –: read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **76 Multi-stage slide rigging**, `tools` = press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…a knife for the line, and usually a way to stop braided line fraying [uncertain]. A clamp, vice or arbor pres…"
- ⚑ **186 Drawer slide**, `adjustable` = no: `adjustable` is marked [uncertain] here: "…e the screws go (some slides have slotted holes for small adjustments [uncertain]), and travel, detent force a…"
- ⚑ **189 Rigid chain actuator**, `power_source` = electricity: `power` is marked [uncertain] here: "…rake motor); window openers are driven by 24 V DC or 230 V gearmotors [uncertain whether every model holds aga…"
- ⚑ **189 Rigid chain actuator**, `power_loss` = keeps its last state: `power` is marked [uncertain] here: "…rake motor); window openers are driven by 24 V DC or 230 V gearmotors [uncertain whether every model holds aga…"
