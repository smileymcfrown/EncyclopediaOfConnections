---
title: Driving several things from one
description: Turn one shaft and drive two or more outputs, the same way or opposite ways, or combine several inputs into one. Which way each arrangement turns, and how to keep the outputs in step.
banner:
  content: '<strong>Beta:</strong> this guide is new. ⚑ marks something that still needs confirming. <a href="/EncyclopediaOfConnections/help/">Help improve it</a>.'
---

Makers often want one motor or handle to drive several things: two lead screws on a 3D printer,
the wheels of a toy, the cams of an automaton, or two propellers turning opposite ways. Most of
the time you don't need a special part. You need the right **arrangement** of gears, belts or
chains you already know, and the rule for which way each output turns. This page puts those
rules in one place and points to the entries that explain each part.

The [finder](../../finder/) asks this too: *Change a movement → Drive several things from one,
or combine several into one*.

## Which way do the outputs turn?

<figure>
<img src="../directions.svg" alt="Six small drawings: two meshing gears turn opposite ways; three gears in a line, the first and last turn the same way; a belt round three pulleys turns them all the same way; a crossed belt turns the second pulley the opposite way; one bevel gear between two facing bevel gears turns them opposite ways on one line; a central gear with three gears round it turns them all the same way as each other." width="900" />
<figcaption>Which way each arrangement turns. Red arrows show the direction of turning. Drawn for the encyclopaedia ⚑ (needs confirming).</figcaption>
</figure>

| Arrangement | What the outputs do | Entry |
|---|---|---|
| Two gears meshing | Turn opposite ways [1][2] | [Spur gear pair and gear train](../../entries/spur-gear-pair-and-gear-train/) |
| A line of gears | Each extra gear flips the direction again. **Count the gears:** an odd number (1st, 3rd, 5th…) turns the same way as the first, an even number the opposite way. The middle gears' sizes don't change the overall speed ratio [3][4] | [Spur gear pair and gear train](../../entries/spur-gear-pair-and-gear-train/) |
| An extra gear in between (idler gear) | The output turns the same way as the input, at the same ratio [3][5][1] | [Spur gear pair and gear train](../../entries/spur-gear-pair-and-gear-train/) |
| One central gear with several gears round it | All the outer gears turn the same way as each other, opposite to the centre [1] | [Planetary gear set](../../entries/planetary-gear-set/) |
| A gear running inside a ring gear (internal gear) | Same way as the ring [1] | [Planetary gear set](../../entries/planetary-gear-set/) |
| A belt or chain round several pulleys, all inside the loop | All turn the same way [6][7][8] | [Belt drives](../../entries/belt-drives/), [Chain and sprocket drive](../../entries/chain-and-sprocket-drive/) |
| A pulley driven by the back (outside) of the belt | Turns the opposite way to the others [9] | [Belt drives](../../entries/belt-drives/) |
| A crossed (figure-8) belt | The second pulley turns the opposite way. Suits flat and round belts; toothed and V-belts need a twist so the same face meets each pulley [10][7][11] | [Belt drives](../../entries/belt-drives/) |
| One bevel gear between two facing bevel gears | The two outputs turn opposite ways on one line; with one shaft inside the other they turn opposite ways on one axis (counter-rotating) [12][13] | [Bevel splitter and counter-rotating drive](../../entries/bevel-splitter-and-counter-rotating-drive/), [Bevel gears](../../entries/bevel-gears/) |
| A right-angle gearbox turned end for end | Reverses its output [14] | [Bevel gears](../../entries/bevel-gears/) |
| A differential | Two outputs share one input but can turn at different speeds; the input's speed is the average of the two outputs, and each output gets the same turning force. Hold one output and the other turns twice as fast [15][16] | [Differential](../../entries/differential/) |

**Outputs that are locked together but need slightly different speeds fight each other.** Cars
add a differential between the front and rear axles for this reason [17].

## Keeping several outputs in step

- **Toothed drives stay in step; friction drives creep.** Toothed (timing) belts, chains and gears
  can't slip [7][8]. Flat and V-belts slip about 0.5-1% even in normal running, and more under
  load [7][18], and a rubber-tyred (friction) idler can slip too [5]. Use a toothed drive when the
  outputs must stay lined up, such as two lead screws.
- **Play adds up.** In a gear train the looseness (backlash) at the output is the sum of each
  stage's looseness [1], and every extra gearbox, shaft or bearing adds a little more [19].
- **Line things up before you tighten.** Level everything and mark the couplings first, so you can
  see later if one slips [20]. One motor with a closed belt can't let two screws drift apart, which
  is why many printers use it [21]. See [Linked lead screws](../../entries/linked-lead-screws/).
- **On a long line of shafts,** feed the drive in near the middle rather than at one end, and line
  up every gearbox, shaft and bearing exactly [19]. See
  [Line shaft and power take-off](../../entries/line-shaft-and-power-take-off/).
- **Gears spaced round a central gear inside a ring** must fit evenly: (teeth on the centre gear +
  teeth on the ring) ÷ number of gears round it must be a whole number [1].
- **Several cams on one shaft** each turned a set angle further round give a travelling wave, as in
  wave sculptures and automata [22]. See [Cam and follower](../../entries/cam-and-follower/).
- **Air or liquid split with a tee does not stay in step by itself.** If the branches don't have
  the same resistance, the flow can be very different in each [23][24]. A flow divider, or tying
  the cylinders together mechanically (a rack on each rod, both pinions on one shaft), keeps them
  together [23]. See [Syringe hydraulics](../../entries/syringe-hydraulics/).
- **Copying a movement or sharing a pull.** A [cable splitter](../../entries/cable-splitter/) moves
  every output cable the same distance but doesn't balance how hard each one pulls [25]. A
  [whippletree](../../entries/whippletree/) shares the pull equally and lets the distances
  differ [26].

## Many to one: combining inputs

- **Adding two movements.** A [differential](../../entries/differential/) adds or subtracts two
  turning movements [15]; a [whippletree](../../entries/whippletree/) adds straight-line
  movements [26].
- **Two motors on one output.** To make them share the work, gear them so that each one's speed
  and turning force match [27]. See
  [Several motors driving one load](../../entries/several-motors-driving-one-load/).
- **Two motors at the two ends of one axis** (as on some printers and CNC gantries) must be kept in
  step, by the electronics or a belt. Stepper motors can start up to four steps apart when they
  are switched on [20], and firmware with an end switch on each side can square the axis every time
  it homes [28].
- **A second motor to remove play.** Two pinions on one rack, one driving and one held back against
  the other side of the teeth, take up the looseness; the one-motor version is a split,
  spring-loaded gear [29].
- **Either input can drive.** One-way clutches let either of two inputs drive without dragging the
  other round: a helicopter rotor keeps turning when one engine stops [30]. See
  [Sprag clutch](../../entries/sprag-clutch/) and [Roller clutch](../../entries/roller-clutch/).
  A two-into-one [cable splitter](../../entries/cable-splitter/) lets two brake levers each work
  the same brake [25].
- **Sharing the load inside one gearbox.** A planetary gearbox uses two or more planet gears so
  they share the load evenly [1].

## Sources

Every source was opened during the Phase 5 gap search (2026-10-22); the full notes are in
`research/connection-types/scope-search-2026-10-22-drives.md`.

1. KHK Gears, *Gear Technical Reference* (PDF): https://khkgears.us/media/izojpong/gear_guide1.pdf
2. Notes and Sketches, *Gears*: https://www.notesandsketches.co.uk/Gears.html
3. Wikipedia, *Gear train*: https://en.wikipedia.org/wiki/Gear_train
4. DT Online, *Idler Gear*: https://wiki.dtonline.org/index.php/Idler_Gear
5. Wikipedia, *Idler-wheel*: https://en.wikipedia.org/wiki/Idler-wheel
6. *507 Mechanical Movements*, no. 1: https://507movements.com/mm_001.html
7. Wikipedia, *Belt (mechanical)*: https://en.wikipedia.org/wiki/Belt_(mechanical)
8. DT Online, *Chain and Sprocket*: https://wiki.dtonline.org/index.php/Chain_and_Sprocket
9. Wikipedia, *Serpentine belt*: https://en.wikipedia.org/wiki/Serpentine_belt
10. *507 Mechanical Movements*, no. 2: https://507movements.com/mm_002.html
11. Wikipedia, *Line shaft*: https://en.wikipedia.org/wiki/Line_shaft
12. *507 Mechanical Movements*, no. 53: https://507movements.com/mm_053.html
13. US patent 5,450,714 (counter-rotating coaxial drive): https://patents.google.com/patent/US5450714
14. ZIMM, *What is a bevel gearbox and where is it used?*: https://zimm.com/wiki/what-is-a-bevel-gearbox-and-where-is-it-used/
15. Wikipedia, *Differential (mechanical device)*: https://en.wikipedia.org/wiki/Differential_(mechanical_device)
16. Wikipedia, *Limited-slip differential*: https://en.wikipedia.org/wiki/Limited-slip_differential
17. Wikipedia, *Transfer case*: https://en.wikipedia.org/wiki/Transfer_case
18. Notes and Sketches, *Pulleys*: https://www.notesandsketches.co.uk/Pulleys.html
19. ZIMM, *How are multiple screw jacks mechanically synchronised?*: https://zimm.com/wiki/how-are-multiple-screw-jacks-mechanically-synchronised/
20. EEVblog forum, dual-Z motor upgrade thread: https://eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151
21. Whadda forum, *K8200 dual leadscrew Z axis upgrade*: https://forum.whadda.com/t/k8200-dual-leadscrew-z-axis-upgrade/12184
22. UT Austin, wave generator project: https://cloud.wikis.utexas.edu/wiki/spaces/RMD/pages/51063223/Introduction+Background+-+WG
23. Power & Motion, *Synchronizing circuits*: https://www.powermotiontech.com/hydraulics/hydraulic-valves/article/21885035/synchronizing-circuits
24. Power & Motion, *Flow divider circuits*: https://www.powermotiontech.com/other-technologies/book-2-chapter-11-flow-divider-circuits
25. IHPVA, *2-into-1 brake cable*: https://ihpva.org/Projects/tstrike/building/2into1.htm
26. Wikipedia, *Whippletree (mechanism)*: https://en.wikipedia.org/wiki/Whippletree_(mechanism)
27. Chief Delphi forum, matching two motors: https://www.chiefdelphi.com/forums/showthread.php?p=1272300
28. V1 Engineering, *Dual endstops*: https://docs.v1e.com/electronics/dual-endstops/
29. Motion Control Tips, electrical preload with two motors: https://www.motioncontroltips.com/?p=6874
30. Wikipedia, *Freewheel*: https://en.wikipedia.org/wiki/Freewheel
