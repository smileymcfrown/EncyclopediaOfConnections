# print-in-place & 3D-printing joints: Made for 3D printing

15 entries. ⚑ = needs confirming: 3 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 54 | Self-folding print | 3D-printed part | liquid, heat ⚑ | – ⚑ | – | – | – | – | – | heat gun ⚑ | light | 3D print (FDM) | no | permanent |
| 55 | Print-in-place hinge | 3D-printed part, lid, door or cover | none | – | – | – | – | – | – | none, hand tools ⚑ | medium | 3D print (FDM) | no | permanent |
| 56 | Heat-set threaded insert | 3D-printed part | none | – | – | – | – | – | – | soldering iron, drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 57 | Captive nut pocket | 3D-printed part | none | – | – | – | – | – | – | drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 58 | Printed screw thread | 3D-printed part | none | – | steady turning | straight push or pull | – | – | – | none, hand tools | medium | 3D print (FDM) | yes | removable |
| 59 | Crush ribs and spring-fit features | 3D-printed part, shaft | none | – | – | – | – | – | – | none, press or vice, hand tools ⚑ | medium | off-the-shelf part ⚑ | no | semi-permanent |
| 60 | Mid-print embedding | 3D-printed part | none | – | – | – | – | – | – | hand tools | medium | 3D print (FDM) | no | permanent |
| 61 | Heat staking | 3D-printed part, boards or sheet | none | – | – | – | – | – | – | soldering iron, heat gun, press or vice, hand tools | medium | 3D print (FDM) | no | permanent |
| 62 | Split-part joints for large prints | 3D-printed part | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | medium | 3D print (FDM) | no | permanent |
| 179 | Press-fit and expanding inserts | 3D-printed part | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | medium | 3D print (FDM) | no | removable |
| 258 | Self-tapping screw into plastic | 3D-printed part | none | – | – | – | – | – | – | drill and tap, hand tools | medium | 3D print (FDM) | no | removable |
| 281 | Multi-material interlock | 3D-printed part, lid, door or cover | none | – | – | – | – | – | – | hand tools ⚑ | medium | 3D print (FDM) | no | permanent |
| 332 | Screw-in threaded insert | 3D-printed part | none | – | – | – | – | – | – | drill and tap, power tools, hand tools | heavy | off-the-shelf part | no | semi-permanent ⚑ |
| 335 | Printing onto fabric | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | hand tools | light | 3D print (FDM) | no | permanent |
| 340 | Printed chainmail and tile fabric | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | none, crimper, hand tools | light | 3D print (FDM) | no | permanent |

## Best guesses

The script was unsure of these values.

- ⚑ **54 Self-folding print**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **59 Crush ribs and spring-fit features**, `usual_process` = off-the-shelf part: first-listed process "injection moulding: where crush ribs come from; th" not recognised; defaulted
- ⚑ **281 Multi-material interlock**, `tools` = hand tools: no tool named in `tools_needed`; defaulted to hand tools

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **54 Self-folding print**, `power_source` = liquid, heat: `power` is marked [uncertain] here: "…n out of the hot water early it keeps the partial fold it has reached [uncertain]…"
- ⚑ **54 Self-folding print**, `tools` = heat gun: `tools_needed` is marked [uncertain] here: "…ts; a bowl of water for PVA-lock prints; tongs to handle the hot part [uncertain]…"
- ⚑ **55 Print-in-place hinge**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…tuck may need a firm twist or flexing back and forth to break it free [uncertain]. A screwdriver is needed onl…"
- ⚑ **59 Crush ribs and spring-fit features**, `tools` = none, press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…bolt-and-washer puller is kinder than a hammer for pressing bearings [uncertain]; a lead-in chamfer on the ho…"
- ⚑ **332 Screw-in threaded insert**, `removability` = semi-permanent: `removability` is marked [uncertain] here: "…to stay in, but can come out: helical inserts with an extraction tool [uncertain], adhesive-locked E-Z LOK ins…"
