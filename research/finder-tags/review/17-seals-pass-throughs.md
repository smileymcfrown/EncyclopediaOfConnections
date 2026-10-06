# seals & pass-throughs: Seals out water and dust, or carries cables and fluid across a joint

16 entries; 11 values the script was unsure of, 11 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart | Electrical |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 130 | O-ring seal | – | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part | no | removable | – |
| 131 | Gasket | strap, cord or fabric | none | – | – | – | – | – | – | sewing or leather tools, power tools, hand tools | light | off-the-shelf part | yes | removable | – |
| 132 | Labyrinth seal | – | none | – | – | – | – | – | – | none | **medium** | 3D print (FDM) | no | removable | – |
| 133 | Hose barb | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | – | **clicks** | none, crimper, hand tools | light | **off-the-shelf part** | no | *semi-permanent* | – |
| 134 | Cable gland and strain relief | **any solid parts** | none | – | – | – | – | – | – | drill and tap, sewing or leather tools, hand tools | medium | off-the-shelf part | yes | removable | – |
| 135 | Slip ring and rotary union | **wires** | none | – | – | – | – | – | – | *soldering iron, crimper, press or vice, hand tools* | light | off-the-shelf part | no | removable | **–** |
| 136 | Cable carrier | – | none | – | – | – | – | – | – | hand tools | *medium* | **off-the-shelf part** | yes | removable | – |
| 210 | Compression fitting | hoses or pipes | none | – | – | – | – | – | – | hand tools | heavy | off-the-shelf part | partly | removable | – |
| 275 | Iris valve | – | none | – | – | – | – | – | clicks | *none, hand tools* | medium | off-the-shelf part | yes | removable | – |
| 290 | Bellows boot and way cover | – | none | – | – | – | – | – | – | *hand tools* | light | **off-the-shelf part** | no | removable | – |
| 291 | Anti-twister mechanism | – | none | – | *steady turning* | *steady turning* | *in line* | – | – | *soldering iron, crimper, hand tools* | light | 3D print (FDM) | *no* | *removable* | – |
| 295 | Radial lip seal | **shaft** | none | – | – | – | – | – | – | press or vice, hand tools | light | off-the-shelf part | *no* | *semi-permanent* | – |
| 338 | Cable through a hinge | **lid, door or cover, wires** | none | – | – | – | – | – | – | soldering iron, crimper, heat gun, drill and tap, hand tools | **light** | 3D print (FDM) | partly | removable | up to about 3 A |
| 402 | Tapered pipe thread | hoses or pipes | none | – | – | – | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | no | semi-permanent | – |
| 403 | Parallel pipe thread with a sealing washer | hoses or pipes | none | – | – | – | – | – | – | none, drill and tap, hand tools | medium | off-the-shelf part | partly | removable | – |
| 408 | Flare fitting | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable | – |

## The script was unsure

- **132 Labyrinth seal**, load_max: no light/medium/heavy band in `load`; defaulted to medium
- **133 Hose barb**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **133 Hose barb**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **134 Cable gland and strain relief**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **135 Slip ring and rotary union**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **135 Slip ring and rotary union**, electrical_band: tagged electrical, but `load` does not start with the fixed electrical lead-in
- **136 Cable carrier**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **290 Bellows boot and way cover**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **295 Radial lip seal**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **338 Cable through a hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **338 Cable through a hinge**, load_max: electrical entry whose mechanical load has no light/medium/heavy band; set to light

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **133 Hose barb**, removability: the source field `removability` is marked [uncertain]
- **135 Slip ring and rotary union**, tools: the source field `tools_needed` is marked [uncertain]
- **136 Cable carrier**, load_max: the source field `load` is marked [uncertain]
- **275 Iris valve**, tools: the source field `tools_needed` is marked [uncertain]
- **290 Bellows boot and way cover**, tools: the source field `tools_needed` is marked [uncertain]
- **291 Anti-twister mechanism**, motion_in: the source field `input_output` is marked [uncertain]
- **291 Anti-twister mechanism**, tools: the source field `tools_needed` is marked [uncertain]
- **291 Anti-twister mechanism**, adjustable: the source field `adjustable` is marked [uncertain]
- **291 Anti-twister mechanism**, removability: the source field `removability` is marked [uncertain]
- **295 Radial lip seal**, adjustable: the source field `adjustable` is marked [uncertain]
- **295 Radial lip seal**, removability: the source field `removability` is marked [uncertain]
