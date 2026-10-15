# snap & clip fits: Snaps or clips together

9 entries. ⚑ = needs confirming: 4 best guesses and 4 values from text marked [uncertain]
(reasons below the table). These are the working values, accepted by the owner on 2026-10-06; corrections
are welcome. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 44 | Cantilever snap fit | 3D-printed part | none | – | – | – | – | – | – | none, hand tools ⚑ | medium | 3D print (FDM) | no | removable |
| 45 | Annular snap fit | 3D-printed part | none | – | – | – | – | – | – | none, press or vice, hand tools ⚑ | medium | 3D print (FDM) | no | removable |
| 46 | Torsional snap fit | 3D-printed part | none | – | – | – | – | – | – | none | medium | off-the-shelf part ⚑ | no | tool-free quick release |
| 47 | Snap pin | 3D-printed part | none | – | – | – | – | – | – | none, press or vice, hand tools | light | 3D print (FDM) | no | removable |
| 48 | Push-in plastic rivet | 3D-printed part, boards or sheet | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part | no | semi-permanent |
| 172 | Press stud | 3D-printed part, strap, cord or fabric | none | – | – | – | – | – | – | press or vice, sewing or leather tools, hand tools | light | off-the-shelf part | no | tool-free quick release |
| 173 | Spring-steel push-on fasteners | 3D-printed part, boards or sheet | none | – | – | – | – | – | clicks | hand tools ⚑ | medium | off-the-shelf part | no | permanent |
| 259 | Retaining ring | 3D-printed part, shaft | none | – | – | – | – | – | clicks ⚑ | power tools, hand tools | heavy | off-the-shelf part | no | removable |
| 368 | Push-on edge trim | 3D-printed part | none | – | – | – | – | – | – | none, hand tools | light | off-the-shelf part ⚑ | yes | removable ⚑ |

## Best guesses

The script was unsure of these values.

- ⚑ **46 Torsional snap fit**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ **48 Push-in plastic rivet**, `threaded` = no: set by Claude (R33) as the follow-up answer after the check gave this entry the answer before it
- ⚑ **259 Retaining ring**, `clicks` = clicks: one-way or indexing, but neither clicking nor silent named; defaulted to clicks
- ⚑ **368 Push-on edge trim**, `usual_process` = off-the-shelf part: first-listed process is off-the-shelf, but `print_in_place` is yes

## From research text marked [uncertain]

These values are probably right, but the research run could not confirm the fact behind them.

- ⚑ **44 Cantilever snap fit**, `tools` = none, hand tools: `tools_needed` is marked [uncertain] here: "…all flat screwdriver or pry tool to press the hook clear, for release [uncertain]…"
- ⚑ **45 Annular snap fit**, `tools` = none, press or vice, hand tools: `tools_needed` is marked [uncertain] here: "…apart with a knife blade'); a press or mallet for large, stiff joints [uncertain]…"
- ⚑ **173 Spring-steel push-on fasteners**, `tools` = hand tools: `tools_needed` is marked [uncertain] here: "…ds pliers, a screwdriver to pry or cutters, and destroys the push nut [uncertain]. Speed nuts, U- and J-nuts:…"
- ⚑ **368 Push-on edge trim**, `removability` = removable: `removability` is marked [uncertain] here: "…d refitted, though trims with pre-applied adhesive are semi-permanent [uncertain: no source describes removing…"
