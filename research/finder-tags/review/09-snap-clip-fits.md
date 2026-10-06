# snap & clip fits: Snaps or clips together

9 entries; 3 values the script was unsure of, 7 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 44 | Cantilever snap fit | 3D-printed part | none | – | – | – | – | – | – | *none, hand tools* | medium | 3D print (FDM) | no | removable |
| 45 | Annular snap fit | 3D-printed part | none | – | – | – | – | – | – | *none, press or vice, hand tools* | medium | 3D print (FDM) | no | removable |
| 46 | Torsional snap fit | 3D-printed part | none | – | – | – | – | – | – | none | medium | **off-the-shelf part** | no | tool-free quick release |
| 47 | Snap pin | 3D-printed part | none | – | – | – | – | – | – | none, press or vice, hand tools | light | 3D print (FDM) | no | removable |
| 48 | Push-in plastic rivet | 3D-printed part, boards or sheet | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part | no | semi-permanent |
| 172 | Press stud | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | press or vice, sewing or leather tools, hand tools | *light* | off-the-shelf part | *no* | tool-free quick release |
| 173 | Spring-steel push-on fasteners | 3D-printed part, boards or sheet | none | – | – | – | – | – | clicks | *hand tools* | medium | off-the-shelf part | no | permanent |
| 259 | Retaining ring | 3D-printed part, shaft | none | – | – | – | – | – | **clicks** | power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 368 | Push-on edge trim | 3D-printed part | none | – | – | – | – | – | – | none, hand tools | *light* | **off-the-shelf part** | yes | *removable* |

## The script was unsure

- **46 Torsional snap fit**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **259 Retaining ring**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **368 Push-on edge trim**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **44 Cantilever snap fit**, tools: the source field `tools_needed` is marked [uncertain]
- **45 Annular snap fit**, tools: the source field `tools_needed` is marked [uncertain]
- **172 Press stud**, load_max: the source field `load` is marked [uncertain]
- **172 Press stud**, adjustable: the source field `adjustable` is marked [uncertain]
- **173 Spring-steel push-on fasteners**, tools: the source field `tools_needed` is marked [uncertain]
- **368 Push-on edge trim**, load_max: the source field `load` is marked [uncertain]
- **368 Push-on edge trim**, removability: the source field `removability` is marked [uncertain]
