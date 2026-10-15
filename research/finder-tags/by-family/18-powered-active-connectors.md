# powered & active connectors: Needs power to hold or to let go

13 entries. ⚑ = needs confirming: 35 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 103 | Holding electromagnet | any solid parts ⚑ | electricity | lets go ⚑ | – | – | – | – | – | soldering iron, drill and tap, hand tools | heavy | off-the-shelf part | partly | tool-free quick release |
| 104 | Electro-permanent magnet | any solid parts ⚑ | electricity ⚑ | keeps its last state | – | – | – | – | – | soldering iron, crimper, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 105 | Solenoid latch | lid, door or cover | electricity | stays locked ⚑ | – | – | – | – | clicks ⚑ | soldering iron, drill and tap, power tools, hand tools | heavy | off-the-shelf part | partly | tool-free quick release |
| 106 | Servo or motorised latch | lid, door or cover | electricity | keeps its last state ⚑ | – | – | – | – | – | soldering iron, crimper, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 107 | Shape-memory-alloy wire latch | lid, door or cover | electricity, heat | stays locked | – | – | – | – | – | soldering iron, crimper, hand tools | light | off-the-shelf part | yes | tool-free quick release |
| 108 | Electromagnetic brake | – | electricity | stays locked | – | – | – | slips and keeps going | – | hand tools | heavy | off-the-shelf part | partly | removable |
| 109 | Vacuum | wall, rail, desk or grid, something to grip | electricity, compressed air, suction ⚑ | lets go | – | – | – | – | – | none, soldering iron, crimper, hand tools | heavy | off-the-shelf part | yes | tool-free quick release |
| 110 | Granular jamming gripper | something to grip | compressed air, suction | – ⚑ | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release |
| 207 | Electromagnetic clutch | any solid parts ⚑ | electricity | lets go | steady turning | steady turning | in line | slips and keeps going | clicks ⚑ | hand tools | heavy | off-the-shelf part | partly | removable |
| 208 | Thermal actuators | – | electricity, heat | keeps its last state | heat | straight push or pull | – | – | – | hand tools ⚑ | heavy | off-the-shelf part | partly | removable |
| 209 | Burn-wire and fusible-link release | any solid parts ⚑ | electricity, heat | stays locked ⚑ | – | – | – | breaks or lets go once | – | heat gun, hand tools | medium | off-the-shelf part | no | semi-permanent |
| 276 | Twisted-and-coiled polymer muscle | – | electricity, compressed air, liquid, heat ⚑ | lets go | heat | straight push or pull | – | – | – | soldering iron, crimper, heat gun, drill and tap, power tools, hand tools | light | off-the-shelf part | yes | removable |
| 277 | Bernoulli gripper | something to grip | compressed air ⚑ | – ⚑ | – | – | – | – | – | none, hand tools | light | 3D print (FDM) | yes | tool-free quick release |

## Best guesses

The script was unsure of these values.

- ⚑ **103 Holding electromagnet**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **103 Holding electromagnet**, `power_loss` = lets go: versions differ: lets go, stays locked
- ⚑ **103 Holding electromagnet**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **104 Electro-permanent magnet**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **104 Electro-permanent magnet**, `power_source` = electricity: powered, but no power source named in `power`; defaulted to electricity
- ⚑ **104 Electro-permanent magnet**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **105 Solenoid latch**, `power_loss` = stays locked: versions differ: stays locked, lets go, keeps its last state
- ⚑ **105 Solenoid latch**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **105 Solenoid latch**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **106 Servo or motorised latch**, `power_loss` = keeps its last state: versions differ: keeps its last state, stays locked, lets go
- ⚑ **106 Servo or motorised latch**, `holds_for` = a person to open: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Control a movement > Stay where I leave it, and let go when I release it > Turns"
- ⚑ **106 Servo or motorised latch**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **107 Shape-memory-alloy wire latch**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **108 Electromagnetic brake**, `slows_by` = brake: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Control a movement > Slow it down, stop it, or keep its speed steady"
- ⚑ **108 Electromagnetic brake**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **109 Vacuum**, `power_source` = electricity, compressed air, suction: `power` names several power sources, and not all may apply
- ⚑ **109 Vacuum**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **109 Vacuum**, `wall_hold` = magnet or suction: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **109 Vacuum**, `gripped_by` = machine: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **109 Vacuum**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **110 Granular jamming gripper**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **110 Granular jamming gripper**, `gripped_by` = machine: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"
- ⚑ **207 Electromagnetic clutch**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **207 Electromagnetic clutch**, `clicks` = clicks: the text uses both clicking and silent words
- ⚑ **207 Electromagnetic clutch**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **208 Thermal actuators**, `over_centre_use` = flip between positions: carried over from the finder's old rule on entry names (R33), for "What is it for?" under "Control a movement > Snap past a point and stay there"
- ⚑ **208 Thermal actuators**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **209 Burn-wire and fusible-link release**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **209 Burn-wire and fusible-link release**, `power_loss` = stays locked: versions differ: stays locked, keeps its last state
- ⚑ **209 Burn-wire and fusible-link release**, `powered_does` = lock or hold: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **209 Burn-wire and fusible-link release**, `also_under` = control, overload: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **276 Twisted-and-coiled polymer muscle**, `power_source` = electricity, compressed air, liquid, heat: `power` names several power sources, and not all may apply
- ⚑ **276 Twisted-and-coiled polymer muscle**, `powered_does` = brake, engage or move: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Hold or let go using power > Electricity"
- ⚑ **277 Bernoulli gripper**, `power_loss` = –: uses power, but `power` does not say what happens when it is lost
- ⚑ **277 Bernoulli gripper**, `gripped_by` = machine: carried over from the finder's old rule on entry names (R33), for "Who does the gripping?" under "Hold two things together > Something that has to be gripped or clamped"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **208 Thermal actuators**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…a spanner', underfloor heating supplier); snips to cut bimetal strip [uncertain]; for electric versions, wiri…"
- ⚑ **277 Bernoulli gripper**, `power_source` = compressed air: `power` is marked [uncertain] here: "…re exists only while air is flowing (Festo OGGB functional principle) [uncertain: no source gives how quickly…"
