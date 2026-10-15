# springs & energy storage: Stores energy

11 entries. ⚑ = needs confirming: 4 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 117 | Constant-force spring | – | none | – | straight push or pull | steady turning | – | – | – | drill and tap, hand tools | medium | off-the-shelf part | no | removable |
| 118 | Ortho-planar spring | – | none | – | – | – | – | – | – | none, hand tools ⚑ | light | 3D print (FDM) | no | removable |
| 119 | Spring balancer | – | none | – | – | – | – | – | – | hand tools ⚑ | heavy | 3D print (FDM) | yes | removable |
| 120 | Printed leaf spring | – | none | – | – | – | – | – | – | none, power tools, hand tools ⚑ | light | 3D print (FDM) | no | permanent |
| 236 | Wave and disc springs | – | none | – | – | – | – | – | – | none, press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 237 | Gas spring | – | none | – | – | – | – | – | – | hand tools ⚑ | heavy | off-the-shelf part | partly | removable |
| 238 | Spiral power spring | – | none | – | steady turning ⚑ | steady turning, straight push or pull ⚑ | – ⚑ | – | – | none, hand tools | medium | off-the-shelf part | partly | removable |
| 268 | Coil spring | – | none | – | – | – | – | – | – | press or vice, hand tools | heavy | off-the-shelf part | yes | removable |
| 282 | Elastic band and elastic cord springs | strap, cord or fabric ⚑ | none | – | – | – | – | – | – | hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 293 | Variable-radius pulley | – | none | – | straight push or pull | steady turning | – | – | clicks | hand tools ⚑ | medium | 3D print (FDM) | partly | removable |
| 401 | Flywheel | – | none | – | steady turning | steady turning | in line | – | silent | hand tools | light | 3D print (FDM) | yes | removable |

## Best guesses

The script was unsure of these values.

- ⚑ **238 Spiral power spring**, `motion_in` = steady turning: both sides turn, but no shaft layout named
- ⚑ **238 Spiral power spring**, `motion_out` = steady turning, straight push or pull: both sides turn, but no shaft layout named
- ⚑ **238 Spiral power spring**, `shaft_layout` = –: both sides turn, but no shaft layout named
- ⚑ **282 Elastic band and elastic cord springs**, `connects` = strap, cord or fabric: worked out from its name, but joining parts is not one of its two main jobs

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **118 Ortho-planar spring**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…gs that drop into a housing; a screwdriver if the rim is screwed down [uncertain: depends on the housing]…"
- ⚑ **119 Spring balancer**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…or points; pliers or a spring hook to fit stretched extension springs [uncertain]; garage-door torsion springs…"
- ⚑ **120 Printed leaf spring**, `tools` = none, power tools, hand tools: `tools_needed` is marked [uncertain] here: "…ewed or clamped strips; shears or a grinder to cut spring-steel strip [uncertain]…"
- ⚑ **237 Gas spring**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…ocket ends, often a small flat screwdriver to lift the retaining clip [uncertain]; someone or something to hol…"
- ⚑ **293 Variable-radius pulley**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…dia, Compound bow); a winding key and let-down tools for fusee clocks [uncertain]; 'everyday tools' to adjust…"
