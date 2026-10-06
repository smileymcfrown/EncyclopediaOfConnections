# compliant mechanisms & flexures: Bends instead of hinging

11 entries; 14 values the script was unsure of, 11 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 23 | Bistable compliant mechanism | **lid, door or cover** | none | – | – | – | – | – | **clicks** | none | light | 3D print (FDM) | no | tool-free quick release |
| 49 | Living hinge | lid, door or cover | none | – | – | – | – | – | – | none | light | **off-the-shelf part** | no | permanent |
| 50 | Flexure hinge | **lid, door or cover** | none | – | – | – | – | – | – | *none, hand tools* | medium | 3D print (FDM) | no | permanent |
| 51 | Parallel leaf-spring flexure | – | none | – | – | – | – | – | – | *none, hand tools* | medium | 3D print (FDM) | yes | *permanent* |
| 52 | Compliant gripper and force amplifier | something to grip | *none* | – | *straight push or pull* | *steady turning, straight push or pull* | *–* | – | – | none, hand tools | *light* | 3D print (FDM) | no | tool-free quick release |
| 53 | Fin-ray gripper | something to grip | *none* | – | – | – | – | – | – | hand tools | light | 3D print (FDM) | no | tool-free quick release |
| 174 | Lamina emergent torsional joint | – | none | – | – | – | – | – | **clicks** | *power tools, hand tools* | *light* | laser cut | no | permanent |
| 175 | Rolling-contact joint | **lid, door or cover** | none | – | – | – | – | **–** | **clicks** | crimper, hand tools | medium | 3D print (FDM) | yes | removable |
| 176 | Mechanical metamaterial mechanism | **lid, door or cover** | none | – | **steady turning** | **–** | **–** | – | – | none, power tools, hand tools | light | 3D print (FDM) | no | permanent |
| 177 | Tape-spring hinge | **lid, door or cover** | none | – | – | – | – | **–** | – | *hand tools* | light | off-the-shelf part | no | removable |
| 178 | Origami mechanisms | **boards or sheet** | *none* | – | **straight push or pull** | **–** | **–** | – | – | none, hand tools | light | 3D print (FDM) | partly | permanent |

## The script was unsure

- **23 Bistable compliant mechanism**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **23 Bistable compliant mechanism**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **49 Living hinge**, usual_process: first-listed process is off-the-shelf, but `print_in_place` is yes
- **50 Flexure hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **174 Lamina emergent torsional joint**, clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- **175 Rolling-contact joint**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **175 Rolling-contact joint**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **175 Rolling-contact joint**, clicks: both clicking and silent words appear; check
- **176 Mechanical metamaterial mechanism**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **176 Mechanical metamaterial mechanism**, motion_in: could not read both sides of `input_output`: "Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> c..."
- **177 Tape-spring hinge**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **177 Tape-spring hinge**, overload_response: listed as torque-limiting or breakaway, but no overload behaviour matched
- **178 Origami mechanisms**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **178 Origami mechanisms**, motion_in: could not read both sides of `input_output`: "Mostly used as a joint rather than a transmission. Kresling tube: push or pull along the a..."

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **50 Flexure hinge**, tools: the source field `tools_needed` is marked [uncertain]
- **51 Parallel leaf-spring flexure**, tools: the source field `tools_needed` is marked [uncertain]
- **51 Parallel leaf-spring flexure**, removability: the source field `removability` is marked [uncertain]
- **52 Compliant gripper and force amplifier**, power_source: the source field `power` is marked [uncertain]
- **52 Compliant gripper and force amplifier**, motion_in: the source field `input_output` is marked [uncertain]
- **52 Compliant gripper and force amplifier**, load_max: the source field `load` is marked [uncertain]
- **53 Fin-ray gripper**, power_source: the source field `power` is marked [uncertain]
- **174 Lamina emergent torsional joint**, tools: the source field `tools_needed` is marked [uncertain]
- **174 Lamina emergent torsional joint**, load_max: the source field `load` is marked [uncertain]
- **177 Tape-spring hinge**, tools: the source field `tools_needed` is marked [uncertain]
- **178 Origami mechanisms**, power_source: the source field `power` is marked [uncertain]
