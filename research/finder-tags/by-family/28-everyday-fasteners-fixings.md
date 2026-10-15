# everyday fasteners & fixings: Screws, nails, pins, wall plugs and other hardware-shop fixings

9 entries. ⚑ = needs confirming: 16 best guesses and 5 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 325 | Wood screw | boards or sheet | none | – | – | – | – | – | – | drill and tap, hand tools | medium | off-the-shelf part | no | removable |
| 365 | Drive-in fixing pins | boards or sheet, shaft | none | – | steady turning | steady turning | in line | – | – | drill and tap, press or vice, power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 366 | Wall plug | wall, rail, desk or grid | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | semi-permanent |
| 367 | Hollow-wall anchors | wall, rail, desk or grid | none | – | – | – | – | – | – | drill and tap, hand tools | medium | off-the-shelf part | no | semi-permanent |
| 369 | Metal brackets and plates | boards or sheet | none | – | – | – | – | – | – | drill and tap, press or vice, hand tools | light | off-the-shelf part | no | removable |
| 370 | Nails, brads and tacks | boards or sheet | none | – | – | – | – | – | – | drill and tap, hand tools | medium | off-the-shelf part | no | semi-permanent |
| 371 | Threaded rod and studs | any solid parts ⚑ | none | – | steady turning ⚑ | straight push or pull ⚑ | – ⚑ | – | – | drill and tap, power tools, hand tools ⚑ | heavy | off-the-shelf part | yes | removable |
| 372 | Eye bolts, screw eyes and hooks | wall, rail, desk or grid | none | – | – | – | – | – | – | drill and tap, hand tools | heavy | off-the-shelf part | no | removable |
| 373 | Staples for wood and fabric | boards or sheet, strap, cord or fabric | none | – | – | – | – | – | – | hand tools ⚑ | light | off-the-shelf part | no | semi-permanent |

## Best guesses

The script was unsure of these values.

- ⚑ **325 Wood screw**, `sheet_material` = wood: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **365 Drive-in fixing pins**, `sheet_material` = wood: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **365 Drive-in fixing pins**, `shaft_joint` = part onto a shaft: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end"
- ⚑ **365 Drive-in fixing pins**, `printable` = no: carried over from the finder's old rule on entry names (R33), for "Will you 3D print the part that goes on the shaft?" under "Hold two things together > A wheel, gear or arm onto a shaft, or two shafts end to end > A wheel, gear, pulley or arm onto a shaft"
- ⚑ **366 Wall plug**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **366 Wall plug**, `wall_hold` = screws, anchors or hooks: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **367 Hollow-wall anchors**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **367 Hollow-wall anchors**, `wall_hold` = screws, anchors or hooks: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **369 Metal brackets and plates**, `sheet_material` = wood: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **370 Nails, brads and tacks**, `sheet_material` = wood: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **371 Threaded rod and studs**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **371 Threaded rod and studs**, `tightens` = parts clamped together: carried over from the finder's old rule on entry names (R33), for "What are you tightening?" under "Tighten something, or take up slack"
- ⚑ **372 Eye bolts, screw eyes and hooks**, `mounts_on` = wall or ceiling: carried over from the finder's old rule on entry names (R33), for "What is it going onto?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid"
- ⚑ **372 Eye bolts, screw eyes and hooks**, `wall_hold` = screws, anchors or hooks: carried over from the finder's old rule on entry names (R33), for "How should it hold?" under "Hold two things together > Something onto a wall, desk, bar, tripod, rail or grid > A wall or ceiling"
- ⚑ **373 Staples for wood and fabric**, `sheet_material` = wood: carried over from the finder's old rule on entry names (R33), for "What is the sheet made of?" under "Hold two things together > Boards, panels or sheet > No, never"
- ⚑ **373 Staples for wood and fabric**, `cord_use` = a fitted part: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Hold two things together > Strap, cord, rope or fabric"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **371 Threaded rod and studs**, `motion_in` = steady turning: `input_output` is marked [uncertain] here: "…ion of a nut, one thread pitch per turn (1.25 mm for M8 coarse thread [uncertain])…"
- ⚑ **371 Threaded rod and studs**, `motion_out` = straight push or pull: `input_output` is marked [uncertain] here: "…ion of a nut, one thread pitch per turn (1.25 mm for M8 coarse thread [uncertain])…"
- ⚑ **371 Threaded rod and studs**, `shaft_layout` = –: `input_output` is marked [uncertain] here: "…ion of a nut, one thread pitch per turn (1.25 mm for M8 coarse thread [uncertain])…"
- ⚑ **371 Threaded rod and studs**, `tools` = drill and tap, power tools, hand tools: `tools_needed` is marked [uncertain] here: "…for clearance and pilot holes, and a tap to thread a hole for a stud [uncertain]. A ruler or a cut-to-length…"
- ⚑ **373 Staples for wood and fabric**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…o take staples out (The Bulletin); a hammer to tap down proud staples [uncertain]; safety glasses (Toolstation…"
