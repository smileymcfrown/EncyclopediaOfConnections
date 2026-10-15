# quick-release & tool-free: Joins and comes apart without tools

17 entries. ⚑ = needs confirming: 29 best guesses and 2 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart | Electrical |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 18 | Half nut | – | none | – | steady turning | straight push or pull | – | – | – | none, press or vice, power tools, hand tools | heavy | 3D print (FDM) | yes | tool-free quick release | – |
| 37 | Bayonet mount | lid, door or cover, wall, rail, desk or grid | none | – | – | – | – | – | – | none, power tools, hand tools | heavy | 3D print (FDM) | no | tool-free quick release | – |
| 38 | Interrupted-screw lock | lid, door or cover | none | – | – | – | – | – | – | none, power tools | heavy | 3D print (FDM) | no | tool-free quick release | – |
| 39 | Quarter-turn fastener | lid, door or cover | none | – | – | – | – | – | – | drill and tap, press or vice, sewing or leather tools, hand tools | medium | off-the-shelf part | no | tool-free quick release | – |
| 40 | Quick-release pin | wall, rail, desk or grid | none | – | – | – | – | – | – | none, drill and tap | heavy | off-the-shelf part | no | tool-free quick release | – |
| 41 | Quick-release plate | wall, rail, desk or grid | none | – | – | – | – | – | – | none, press or vice, hand tools | medium | 3D print (FDM) | yes | tool-free quick release | – |
| 42 | Hang-on mounts | wall, rail, desk or grid | none | – | – | – | – | – | – | none, drill and tap, power tools, hand tools | medium | woodwork | yes | tool-free quick release | – |
| 43 | Modular grid mounting systems | wall, rail, desk or grid | none | – | – | – | – | – | clicks ⚑ | none, drill and tap, hand tools | medium | off-the-shelf part | yes | tool-free quick release | – |
| 166 | Quick couplers for tubes and hoses | tube, rod or extrusion, hoses or pipes | none | – | – | – | – | comes apart without damage, refit by hand | clicks | none, hand tools | medium | off-the-shelf part | no | tool-free quick release | – |
| 167 | DIN-rail clip | wall, rail, desk or grid | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part ⚑ | yes | tool-free quick release | – |
| 168 | Indexable clamping lever | wall, rail, desk or grid | none | – | back-and-forth turning | steady turning | in line | – | clicks | none, hand tools ⚑ | medium | off-the-shelf part | yes | removable | – |
| 169 | Spring bar | tube, rod or extrusion | none | – | – | – | – | – | – | drill and tap, press or vice | medium | off-the-shelf part | no | removable | – |
| 170 | Band flange clamp | hoses or pipes | none | – | – | – | – | – | – | none, welding or brazing torch, press or vice, hand tools | heavy | off-the-shelf part | partly | tool-free quick release | – |
| 171 | Temporary sheet fastener | boards or sheet | none | – | – | – | – | – | – | drill and tap, hand tools | light | off-the-shelf part | no | removable | – |
| 261 | Tool-free fasteners | any solid parts ⚑ | none | – | – | – | – | – | – | none, hand tools | medium | off-the-shelf part | yes | tool-free quick release | – |
| 286 | Genderless connector | wires | none | – | – | – | – | – | – | none, soldering iron, crimper, hand tools ⚑ | heavy | 3D print (FDM) | no | tool-free quick release | – ⚑ |
| 393 | Tripod and stand screw mount | wall, rail, desk or grid | none | – | – | – | – | – | – | none, soldering iron, drill and tap, power tools, hand tools | medium | off-the-shelf part | yes | removable | – |

## Best guesses

The script was unsure of these values.

- ⚑ **18 Half nut**, `straight_drive` = screw: carried over from the finder's old rule on entry names (R33), for "What kind of straight-line motion?" under "Change a movement > Turning into straight-line motion, or back"
- ⚑ **37 Bayonet mount**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **37 Bayonet mount**, `mounts_on` = bar, pole or desk edge: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **38 Interrupted-screw lock**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **39 Quarter-turn fastener**, `opens_by` = twist: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **40 Quick-release pin**, `mounts_on` = rail, extrusion or grid: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **41 Quick-release plate**, `mounts_on` = tripod or stand, rail, extrusion or grid: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **42 Hang-on mounts**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **42 Hang-on mounts**, `wall_hold` = screws, anchors or hooks: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **43 Modular grid mounting systems**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **43 Modular grid mounting systems**, `mounts_on` = wall or ceiling, rail, extrusion or grid: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **43 Modular grid mounting systems**, `wall_hold` = screws, anchors or hooks: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **166 Quick couplers for tubes and hoses**, `carries_fluid` = yes: carried over from the finder's old rule on entry names (R33), for "Does it carry air or liquid?" under "Hold two things together > Tube, rod, pole or aluminium extrusion"
- ⚑ **166 Quick couplers for tubes and hoses**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **166 Quick couplers for tubes and hoses**, `hose_join` = pushed, clamped or clicked: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **167 DIN-rail clip**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **167 DIN-rail clip**, `mounts_on` = rail, extrusion or grid: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **168 Indexable clamping lever**, `mounts_on` = bar, pole or desk edge: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **168 Indexable clamping lever**, `clicks_do` = step forward: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **169 Spring bar**, `carries_fluid` = no: carried over from the finder's old rule on entry names (R33), for "Does it carry air or liquid?" under "Hold two things together > Tube, rod, pole or aluminium extrusion"
- ⚑ **169 Spring bar**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **170 Band flange clamp**, `seal_use` = seal a still joint, join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **170 Band flange clamp**, `hose_join` = pushed, clamped or clicked: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **171 Temporary sheet fastener**, `sheet_material` = sheet metal or plastic: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **261 Tool-free fasteners**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **286 Genderless connector**, `electrical_band` = –: tagged electrical, but `load` does not start with the fixed electrical lead-in
- ⚑ **286 Genderless connector**, `wire_use` = to a board or terminal: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **286 Genderless connector**, `plugs_in` = yes: carried over from the finder's old rule on entry names (R33), for "Will you unplug it often?" under "Connect wires or power > A wire to a board, terminal or device"
- ⚑ **393 Tripod and stand screw mount**, `mounts_on` = tripod or stand: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **168 Indexable clamping lever**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…for the retaining screw on some models (vxb lists a 3 mm hex socket) [uncertain: varies by model]…"
- ⚑ **286 Genderless connector**, `tools` = none, soldering iron, crimper, hand tools: `tools_needed` is marked [uncertain] here: "…s; a crimp tool (or soldering iron) to fit Powerpole contacts to wire [uncertain]…"
