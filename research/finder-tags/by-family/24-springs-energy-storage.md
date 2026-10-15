# springs & energy storage: Stores energy

11 entries. ⚑ = needs confirming: 24 best guesses and 5 values from text marked [uncertain]
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

- ⚑ **117 Constant-force spring**, `tightens` = strap, cord or rope, belt, chain or cable: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **117 Constant-force spring**, `tension_hold` = spring or elastic: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **117 Constant-force spring**, `spring_kind` = straight push or pull, twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **118 Ortho-planar spring**, `flex_does` = straight line or spring: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **119 Spring balancer**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **119 Spring balancer**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **120 Printed leaf spring**, `flex_does` = straight line or spring: carried over from the finder's old rule on entry names (R33), for "What should the bendy part do?" under "Let something move > Bend or flex"
- ⚑ **236 Wave and disc springs**, `tightens` = belt, chain or cable, parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **237 Gas spring**, `slows_by` = damper: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **237 Gas spring**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **238 Spiral power spring**, `motion_in` = steady turning: both sides turn, but no shaft layout named
- ⚑ **238 Spiral power spring**, `motion_out` = steady turning, straight push or pull: both sides turn, but no shaft layout named
- ⚑ **238 Spiral power spring**, `shaft_layout` = –: both sides turn, but no shaft layout named
- ⚑ **238 Spiral power spring**, `tightens` = belt, chain or cable, parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **238 Spiral power spring**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **268 Coil spring**, `tightens` = belt, chain or cable, parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **268 Coil spring**, `spring_kind` = twist or wind: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **282 Elastic band and elastic cord springs**, `connects` = strap, cord or fabric: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **282 Elastic band and elastic cord springs**, `tightens` = strap, cord or rope: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **282 Elastic band and elastic cord springs**, `tension_hold` = spring or elastic: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Tighten something, or take up slack > A strap, lace, cord or rope"
- ⚑ **293 Variable-radius pulley**, `straight_drive` = long travel or pulling: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **293 Variable-radius pulley**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"
- ⚑ **401 Flywheel**, `one_way_kind` = silent: carried over from the finder's old rule on entry names (R33), for "Is clicking OK?" under "Control a movement > Move one way only > Turns"
- ⚑ **401 Flywheel**, `spring_kind` = straight push or pull: carried over from the finder's old rule on entry names (R33), for "How should it push back?" under "Spring back, or store energy"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **118 Ortho-planar spring**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…gs that drop into a housing; a screwdriver if the rim is screwed down [uncertain: depends on the housing]…"
- ⚑ **119 Spring balancer**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…or points; pliers or a spring hook to fit stretched extension springs [uncertain]; garage-door torsion springs…"
- ⚑ **120 Printed leaf spring**, `tools` = none, power tools, hand tools: `tools_needed` is marked [uncertain] here: "…ewed or clamped strips; shears or a grinder to cut spring-steel strip [uncertain]…"
- ⚑ **237 Gas spring**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…ocket ends, often a small flat screwdriver to lift the retaining clip [uncertain]; someone or something to hol…"
- ⚑ **293 Variable-radius pulley**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…dia, Compound bow); a winding key and let-down tools for fusee clocks [uncertain]; 'everyday tools' to adjust…"
