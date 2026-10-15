# seals & pass-throughs: Seals out water and dust, or carries cables and fluid across a joint

16 entries. ⚑ = needs confirming: 11 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart | Electrical |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 130 | O-ring seal | – | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part | no | removable | – |
| 131 | Gasket | strap, cord or fabric | none | – | – | – | – | – | – | sewing or leather tools, power tools, hand tools | light | off-the-shelf part | yes | removable | – |
| 132 | Labyrinth seal | – | none | – | – | – | – | – | – | none | medium ⚑ | 3D print (FDM) | no | removable | – |
| 133 | Hose barb | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | – | clicks ⚑ | none, crimper, hand tools | light | off-the-shelf part ⚑ | no | semi-permanent | – |
| 134 | Cable gland and strain relief | any solid parts ⚑ | none | – | – | – | – | – | – | drill and tap, sewing or leather tools, hand tools | medium | off-the-shelf part | yes | removable | – |
| 135 | Slip ring and rotary union | wires ⚑ | none | – | – | – | – | – | – | soldering iron, crimper, press or vice, hand tools ⚑ | light | off-the-shelf part | no | removable | – ⚑ |
| 136 | Cable carrier | – | none | – | – | – | – | – | – | hand tools | medium | off-the-shelf part ⚑ | yes | removable | – |
| 210 | Compression fitting | hoses or pipes | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | partly | removable | – |
| 275 | Iris valve | – | none | – | – | – | – | – | clicks | none, hand tools ⚑ | medium | off-the-shelf part | yes | removable | – |
| 290 | Bellows boot and way cover | – | none | – | – | – | – | – | – | hand tools ⚑ | light | off-the-shelf part ⚑ | no | removable | – |
| 291 | Anti-twister mechanism | – | none | – | steady turning | steady turning | in line | – | – | soldering iron, crimper, hand tools ⚑ | light | 3D print (FDM) | no | removable | – |
| 295 | Radial lip seal | shaft ⚑ | none | – | – | – | – | – | – | press or vice, hand tools | light | off-the-shelf part | no | semi-permanent ⚑ | – |
| 338 | Cable through a hinge | lid, door or cover, wires ⚑ | none | – | – | – | – | – | – | soldering iron, crimper, heat gun, drill and tap, hand tools | light ⚑ | 3D print (FDM) | partly | removable | up to about 3 A |
| 402 | Tapered pipe thread | hoses or pipes | none | – | – | – | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | no | semi-permanent | – |
| 403 | Parallel pipe thread with a sealing washer | hoses or pipes | none | – | – | – | – | – | – | none, drill and tap, hand tools | medium | off-the-shelf part | partly | removable | – |
| 408 | Flare fitting | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable | – |

## Best guesses

The script was unsure of these values.

- ⚑ **132 Labyrinth seal**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **133 Hose barb**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **133 Hose barb**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **134 Cable gland and strain relief**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **135 Slip ring and rotary union**, `connects` = wires: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **135 Slip ring and rotary union**, `electrical_band` = –: tagged electrical, but `load` does not start with the fixed electrical lead-in
- ⚑ **136 Cable carrier**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **290 Bellows boot and way cover**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **295 Radial lip seal**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **338 Cable through a hinge**, `connects` = lid, door or cover, wires: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **338 Cable through a hinge**, `load_max` = light: electrical entry whose mechanical load has no light/medium/heavy band; set to light

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **135 Slip ring and rotary union**, `tools` = soldering iron, crimper, press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…or the lead wires; spanners and thread sealant for rotary union ports [uncertain]. DIY slip rings: pipe cutter…"
- ⚑ **275 Iris valve**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…rs for fabric, and a hose clamp or cable ties to grip the sleeve ends [uncertain]…"
- ⚑ **290 Bellows boot and way cover**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…tted with the driveshaft removed and secured with special boot clamps [uncertain: not checked in an opened sou…"
- ⚑ **291 Anti-twister mechanism**, `tools` = soldering iron, crimper, hand tools: `tools_needed` is marked [uncertain] here: "…ngs and cable clamps; soldering iron or crimp tool for the cable ends [uncertain]. The printed demonstrator sn…"
- ⚑ **295 Radial lip seal**, `removability` = semi-permanent: `removability` is marked [uncertain] here: "…ushed out, which tends to damage it, so a new seal is normally fitted [uncertain].…"
