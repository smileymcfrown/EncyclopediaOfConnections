# seals & pass-throughs: Seals out water and dust, or carries cables and fluid across a joint

16 entries. ⚑ = needs confirming: 51 best guesses and 5 values from text marked [uncertain]
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

- ⚑ **130 O-ring seal**, `seal_use` = seal a still joint: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **131 Gasket**, `cord_use` = a fitted part: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Hold two things together > Strap, cord, rope or fabric"
- ⚑ **131 Gasket**, `seal_use` = seal a still joint: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **132 Labyrinth seal**, `load_max` = medium: no light/medium/heavy band in `load`; defaulted to medium
- ⚑ **132 Labyrinth seal**, `seal_use` = seal a still joint: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **133 Hose barb**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **133 Hose barb**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **133 Hose barb**, `carries_fluid` = yes: carried over from the finder's old rule on entry names (R33), for "Does it carry air or liquid?" under "Hold two things together > Tube, rod, pole or aluminium extrusion"
- ⚑ **133 Hose barb**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **133 Hose barb**, `hose_join` = pushed, clamped or clicked: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **134 Cable gland and strain relief**, `connects` = any solid parts: joins parts, but no specific kind of part found; set to any solid parts
- ⚑ **134 Cable gland and strain relief**, `wire_use` = insulate, protect or route: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **134 Cable gland and strain relief**, `seal_use` = pass cables through: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **134 Cable gland and strain relief**, `also_under` = wires: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **135 Slip ring and rotary union**, `connects` = wires: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **135 Slip ring and rotary union**, `electrical_band` = –: tagged electrical, but `load` does not start with the fixed electrical lead-in
- ⚑ **135 Slip ring and rotary union**, `wire_use` = touching or turning contacts: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **135 Slip ring and rotary union**, `seal_use` = pass cables through: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **135 Slip ring and rotary union**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **136 Cable carrier**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **136 Cable carrier**, `wire_use` = insulate, protect or route: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **136 Cable carrier**, `holds_position` = no: carried over from the finder's old rule on entry names (R33), for "Should it stay where you put it?" under "Let something move > Swing or rock, less than a full turn > Yes, print it assembled"
- ⚑ **136 Cable carrier**, `seal_use` = pass cables through: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **136 Cable carrier**, `also_under` = wires: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **136 Cable carrier**, `turns` = part of a turn: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **210 Compression fitting**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **210 Compression fitting**, `hose_join` = screwed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **275 Iris valve**, `clicks_do` = hold a set position: carried over from the finder's old rule on entry names (R33), for "What should the clicks do?" under "Control a movement > Click into set positions > Turns"
- ⚑ **275 Iris valve**, `seal_use` = pass cables through, pump or control a flow: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **275 Iris valve**, `fluid_does` = switch, set or store: carried over from the finder's old rule on entry names (R33), for "What should it do?" under "Seal it, or pass cables, air or liquid through > Pump, store or control air or liquid"
- ⚑ **290 Bellows boot and way cover**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **290 Bellows boot and way cover**, `seal_use` = seal a still joint, seal a moving shaft: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **291 Anti-twister mechanism**, `drive_does` = passes the turning on: carried over from the finder's old rule on entry names (R33), for "What else should it do?" under "Let something move > Spin round and round > A shaft driving another shaft"
- ⚑ **291 Anti-twister mechanism**, `seal_use` = pass cables through: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **291 Anti-twister mechanism**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **295 Radial lip seal**, `connects` = shaft: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **295 Radial lip seal**, `seal_use` = seal a moving shaft: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **338 Cable through a hinge**, `connects` = lid, door or cover, wires: worked out from its name, but joining parts is not one of its two main jobs
- ⚑ **338 Cable through a hinge**, `load_max` = light: electrical entry whose mechanical load has no light/medium/heavy band; set to light
- ⚑ **338 Cable through a hinge**, `opens_by` = swings on a hinge: carried over from the finder's old rule on entry names (R33), for "How should it open?" under "Hold two things together > A lid, door or cover that opens and closes"
- ⚑ **338 Cable through a hinge**, `wire_use` = insulate, protect or route: carried over from the finder's old rule on entry names (R33), for "What are you connecting?" under "Connect wires or power"
- ⚑ **338 Cable through a hinge**, `seal_use` = pass cables through: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **338 Cable through a hinge**, `also_under` = hold together: carried over from the finder's old rule on entry names (R33), for "Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name)."
- ⚑ **338 Cable through a hinge**, `turns` = full turns: carried over from the finder's old rule on entry names (R33), for "For things that turn: less than a full turn (swings or rocks) or full turns (spins)."
- ⚑ **402 Tapered pipe thread**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **402 Tapered pipe thread**, `hose_join` = screwed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **403 Parallel pipe thread with a sealing washer**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **403 Parallel pipe thread with a sealing washer**, `hose_join` = screwed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"
- ⚑ **408 Flare fitting**, `carries_fluid` = yes: carried over from the finder's old rule on entry names (R33), for "Does it carry air or liquid?" under "Hold two things together > Tube, rod, pole or aluminium extrusion"
- ⚑ **408 Flare fitting**, `seal_use` = join hoses or pipes: carried over from the finder's old rule on entry names (R33), for "What do you need?" under "Seal it, or pass cables, air or liquid through"
- ⚑ **408 Flare fitting**, `hose_join` = screwed: carried over from the finder's old rule on entry names (R33), for "How is it joined?" under "Seal it, or pass cables, air or liquid through > Join hoses, pipes or tubes"

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **135 Slip ring and rotary union**, `tools` = soldering iron, crimper, press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…or the lead wires; spanners and thread sealant for rotary union ports [uncertain]. DIY slip rings: pipe cutter…"
- ⚑ **275 Iris valve**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…rs for fabric, and a hose clamp or cable ties to grip the sleeve ends [uncertain]…"
- ⚑ **290 Bellows boot and way cover**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…tted with the driveshaft removed and secured with special boot clamps [uncertain: not checked in an opened sou…"
- ⚑ **291 Anti-twister mechanism**, `tools` = soldering iron, crimper, hand tools: `tools_needed` is marked [uncertain] here: "…ngs and cable clamps; soldering iron or crimp tool for the cable ends [uncertain]. The printed demonstrator sn…"
- ⚑ **295 Radial lip seal**, `removability` = semi-permanent: `removability` is marked [uncertain] here: "…ushed out, which tends to damage it, so a new seal is normally fitted [uncertain].…"
