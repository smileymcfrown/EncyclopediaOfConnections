---
title: Straight-line linkages
description: Pivoted bars (or, in the Tusi couple, a gear rolling inside a ring gear twice its size) are proportioned so that
  one point moves in a straight line, turning rotation or rocking into straight-line motion, or the reverse, without any sliding
  guide.
num: 197
term: 'Straight-line linkage (straight-line mechanism): approximate types such as Watt''s, Chebyshev''s, Roberts'' and Hoecken''s
  linkages; exact types such as the Peaucellier-Lipkin linkage, Hart''s inversors and the Sarrus linkage; and the rolling-circle
  Tusi couple (Cardan gear)'
plain_name: A few bars joined by pivots and arranged so that one point on them travels in a straight (or very nearly straight)
  line, with no slide or rail to guide it
aliases:
- straight-line mechanism
- parallel motion (the 18th- and 19th-century name, e.g. Watt's parallel motion)
- Watt's linkage
- Chebyshev (Tchebicheff) linkage; Chebyshev lambda linkage; Chebyshev's plantigrade machine
- Roberts linkage
- Hoecken (Hoekens) linkage
- Peaucellier-Lipkin linkage / Peaucellier cell / Peaucellier-Lipkin inversor
- Hart's inversor (Hart's W-frame or antiparallelogram; Hart's A-frame)
- Sarrus linkage (a folding 3D straight-line linkage)
- inversor, inversor cell (the exact straight-line linkages)
- Tusi couple (Tusi's mechanism)
- Cardan gear / Cardan's movement / hypocycloidal straight-line mechanism
- Lenkergeradführung (German, 'linkage straight-line guide')
- 直线机构 (Chinese, 'straight-line mechanism'), e.g. 瓦特直线导向机构 (Watt) and 切比雪夫直线机构 (Chebyshev)
family: motion conversion
other_families: ['sliding, telescoping & linear motion']
finder:
  job: [change the kind of motion, let it move]
  motion: multiple
  special_behaviour: [motion conversion]
  holding_principle: [not a holding joint, shape]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, woodwork]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [back-and-forth turning]
  motion_out: [back-and-forth turning, straight push or pull]
  shaft_layout: [parallel, at an angle]
  overload_response: not applicable
  clicks: not applicable
  tools: [soldering iron, drill and tap, press or vice, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, load, adjustable, play_and_precision, processes, making_tips_3d_printing, off_the_shelf_parts,
  environment_limits, safety_notes, common_failures, make_it_yourself]
diagram_idea: Side-by-side sketches of Watt's linkage (two arms curving opposite ways, midpoint staying straight) and the
  Peaucellier cell (diamond plus two long arms, one corner on a circle, the opposite corner on a line), each with its traced
  path drawn in colour, plus a small inset of a gear rolling inside a ring gear twice its size with one rim point sliding
  along a diameter.
links:
- url: https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif
  title: Watts Linkage.gif (Wikimedia Commons, by Arglin Kampling)
  shows: Animated Watt's linkage tracing its nearly straight line (and figure-8 ends); dimensions given in the description
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif
  title: Peaucellier-Lipkin Inversor.gif (Wikimedia Commons, by Arglin Kampling)
  shows: Animated Peaucellier-Lipkin linkage drawing an exact straight line, with bar lengths in the description
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif
  title: Chebyshev Lambda Linkage.gif (Wikimedia Commons, by Arglin Kampling)
  shows: 'Animated Chebyshev lambda linkage: crank 1, rocker 2.5, coupler 5, fixed pivots 2 apart, with a long flat section
    of its path'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif
  title: Cardano's hypocyclic gears.gif (Wikimedia Commons, by Bryllig)
  shows: 'Animated Cardan gear (Tusi couple made with gears): pins on a gear rolling inside a ring gear twice its size move
    back and forth along straight diameters'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif
  title: Sarrus Linkage.gif (Wikimedia Commons, by Arglin Kampling)
  shows: 'Animated Sarrus linkage made of hinged plates: the top plate moves straight up and down'
  license: CC BY-SA 4.0
make_it_yourself:
- url: https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md
  title: lego-linkages (Zoltán Kovács, GitHub), README
  what_it_is: 'Building instructions for LEGO Technic linkages that draw with a pen refill: Watt''s linkage, Chebyshev''s
    linkage and lambda linkage, Peaucellier''s linkage (with an optional 3D-printed 4-hole beam) and Hart''s A-frame'
  license: GPL-3.0
- url: https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated
  title: Heat Set Insert Press, only weird and complicated (Ubrch, Printables)
  what_it_is: A working heat-set insert press whose soldering-iron holder is guided straight down by a Peaucellier-Lipkin
    linkage; detailed notes on 2 mm dowel pivots, reaming holes and print orientation
  license: CC BY-NC-SA
- url: https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage
  title: Heat Set Insert Press (Sarrus Linkage) (Illmilliner, Printables) (URL from Printables API, page not opened)
  what_it_is: An almost all-printed insert press using a Sarrus linkage instead of rails, with 1.75 mm filament as hinge pins
    (work in progress)
  license: CC BY-NC
- url: https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism
  title: Tusi Couple illusion mechanism (Kladrie, Printables) (URL from Printables API, page not opened)
  what_it_is: 'Motorised Tusi couple: a 64-tooth gear inside a 128-tooth ring gear carries magnets that drag steel balls along
    straight lines'
  license: CC BY-SA
- url: https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto
  title: Chebyshev Linkage walker Unit for OTTO (Namako, Printables) (URL from Printables API, page not opened)
  what_it_is: Servo-driven walking unit for the OttoDIY robot using Chebyshev linkages (work in progress)
  license: CC BY-NC-SA
- url: https://pmksplus.com/
  title: PMKS+ web linkage analysis tool
  what_it_is: Free, open-source browser tool to build and animate planar linkages, share them by URL and run kinematic analysis;
    useful for checking straight-line proportions before printing
  license: 'free and open source [uncertain: licence not checked]'
- url: https://huangyan920.github.io/Mechanical/
  title: HUANGYAN920/Mechanical interactive mechanism animations
  what_it_is: Browser animations with adjustable bar lengths, including Watt, Chebyshev, Roberts, Hart and a Peaucellier-type
    straight-line mechanism (labels mostly in Chinese; its Peaucellier entry is mislabelled as an ellipsograph)
  license: MIT (code)
sources:
- https://en.wikipedia.org/wiki/Straight-line_mechanism
- https://en.wikipedia.org/wiki/Watt%27s_linkage
- https://en.wikipedia.org/wiki/Parallel_motion_linkage
- https://en.wikipedia.org/wiki/Chebyshev_linkage
- https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage
- https://en.wikipedia.org/wiki/Roberts_linkage
- https://en.wikipedia.org/wiki/Hoecken_linkage
- https://en.wikipedia.org/wiki/Peaucellier%E2%80%93Lipkin_linkage
- https://en.wikipedia.org/wiki/Hart%27s_inversors
- https://en.wikipedia.org/wiki/Sarrus_linkage
- https://en.wikipedia.org/wiki/Scott_Russell_linkage
- https://en.wikipedia.org/wiki/Tusi_couple
- https://en.wikipedia.org/wiki/Murray%27s_Hypocycloidal_Engine
- https://de.wikipedia.org/wiki/Geradf%C3%BChrung
- https://www.gutenberg.org/files/25155/25155-pdf.pdf
- http://www.designofmachinery.com/DOM/Chap_03_3ed_p134.pdf
- https://507movements.com/mm_329.html
- https://507movements.com/mm_339.html
- https://507movements.com/mm_343.html
- https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif
- https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif
- https://commons.wikimedia.org/wiki/File:Chebyshev_Linkage.gif
- https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif
- https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif
- https://commons.wikimedia.org/wiki/File:TusiCouple.gif
- https://commons.wikimedia.org/wiki/File:Goodman_Tusi_Couple.webm
- https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif
- https://www.youtube.com/watch?v=P31fzSIGrl0
- https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md
- https://raw.githubusercontent.com/kovzol/lego-linkages/master/LICENSE
- https://makezine.com/article/maker-news/the-peaucelliers-cell-dra/
- https://api.printables.com/graphql/
- https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated
- https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage
- https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism
- https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto
- https://pmksplus.com/
- https://huangyan920.github.io/Mechanical/
- https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://help.prusa3d.com/article/pla_2062
research: research/connection-types/results/Straightline_linkages_Watt_Chebyshev_Peaucellier.json
image: null
glossary: [stroke, pitch, idler, crank, linkage, flexure, clearance, form-fit--force-fit--material-bond, heat-set-insert,
  repeatability--accuracy, print-in-place]
---

Pivoted bars (or, in the Tusi couple, a gear rolling inside a ring gear twice its size) are proportioned so that one point moves in a straight line, turning rotation or rocking into straight-line motion, or the reverse, without any sliding guide.

**In plain words:** A few bars joined by pivots and arranged so that one point on them travels in a straight (or very nearly straight) line, with no slide or rail to guide it. **Proper term:** Straight-line [linkage](../glossary.md#linkage) (straight-line mechanism): approximate types such as Watt's, Chebyshev's, Roberts' and Hoecken's linkages; exact types such as the Peaucellier-Lipkin linkage, Hart's inversors and the Sarrus linkage; and the rolling-circle Tusi couple (Cardan gear).

**Also called:** straight-line mechanism; parallel motion (the 18th- and 19th-century name, e.g. Watt's parallel motion); Watt's linkage; Chebyshev (Tchebicheff) linkage; Chebyshev lambda linkage; Chebyshev's plantigrade machine; Roberts linkage; Hoecken (Hoekens) linkage; Peaucellier-Lipkin linkage / Peaucellier cell / Peaucellier-Lipkin inversor; Hart's inversor (Hart's W-frame or antiparallelogram; Hart's A-frame); Sarrus linkage (a folding 3D straight-line linkage); inversor, inversor cell (the exact straight-line linkages); Tusi couple (Tusi's mechanism); Cardan gear / Cardan's movement / hypocycloidal straight-line mechanism; Lenkergeradführung (German, 'linkage straight-line guide'); 直线机构 (Chinese, 'straight-line mechanism'), e.g. 瓦特直线导向机构 (Watt) and 切比雪夫直线机构 (Chebyshev).

## How it works

In the approximate linkages two swinging arms move their ends along circles that curve in opposite directions, and a point halfway along the bar joining them has the two curves cancel out, so near the middle of its travel it moves almost straight (Kempe; Watt described it as 'a certain point in the connecting-lever which has very little sensible variation from a straight line'). A four-bar linkage can never give a perfectly straight line without a slide (Wikipedia 'Straight-line mechanism'). The exact linkages use geometric inversion: in the Peaucellier cell the product of two distances from the fixed pivot stays constant, so when one corner of the diamond is made to move on a circle passing through the fixed pivot, the opposite corner is forced along a perfectly straight line. In the Tusi couple a small circle rolls inside one twice its diameter, and every point on the small circle's rim moves back and forth along a diameter of the large one.

## Parts

A few parts. Watt's, Chebyshev's, Roberts' and Hoecken's linkages are four-bar linkages: three moving bars plus the frame and four pivots. The Peaucellier linkage has seven bars (two long ones, a diamond (rhombus) of four equal short ones, and one extra bar) meeting at six pivot points, most shared by two or three bars; Hart's inversor needs five bars (Kempe, 1877). The Sarrus linkage is two plates joined by two pairs of hinged plates or bars. The Tusi couple / Cardan gear is a fixed ring gear, a gear half its size, and a [crank](../glossary.md#crank) arm carrying that gear.

## Everyday examples

- The rear axle of some cars, held sideways by a Watt's linkage instead of a Panhard rod (Wikipedia 'Watt's linkage')
- Level-luffing dockside cranes with a 'horse-head' jib, which use a Chebyshev-type linkage to keep the load at a constant height (Wikipedia 'Chebyshev linkage')
- Beam engines in steam museums, whose piston rods are guided by Watt's parallel motion (Wikipedia; 507 Mechanical Movements no. 343)
- Maker-built [heat-set insert](../glossary.md#heat-set-insert) presses that guide a soldering iron straight down with a Peaucellier or Sarrus linkage instead of a linear rail (Printables)

## When to use it

Use one when a point, pen, tool or platform must move in a straight line but a slide or rail would be expensive, hard to make straight, prone to wear, or poor when 3D printed: pivots are easy to make accurately and have little friction (Kempe explains that sliding guides must be made truly straight and suffer wear, friction and temperature distortion). Good uses: guiding a tool straight up and down (heat-set insert press, drill or punch guide), drawing or plotting straight lines, keeping an axle or piston rod moving straight, the feet of walking robots and rover wheels (the Chebyshev lambda linkage, per Wikipedia), a compact straight-lifting platform (Sarrus), or turning continuous rotation into a smooth, easily balanced straight [stroke](../glossary.md#stroke) (Tusi couple / Cardan gear). Also a classic, satisfying desk demonstration.

## When not to use it

Avoid them for long strokes, where the linkage becomes huge (use a linear guide, lead screw, rack and pinion or belt); for motion that must be stiff against side loads and twisting (use linear guides or bushings on rods); for very small, very precise motions (use a parallel leaf-spring [flexure](../glossary.md#flexure) stage, which has no play at all); and for approximate types, whenever you need the line to stay straight beyond the linkage's good range (use an exact type or a slide). If you only need a platform to stay level while it moves, a parallelogram four-bar or scissor linkage is simpler.

## Details

- **What it does (jobs):**
  - change the kind of motion: turns rotation or rocking into straight-line motion (or straight-line motion into rocking)
  - let it move (turn, slide or bend): guides a point or a platform along a straight line using only pivots, instead of a slide or rail
- **Movement:** multiple: the bars rotate or rock through limited angles (for example the Chebyshev linkage's input bar works between about 37 and 102 degrees, per Wikipedia); the traced point slides along a straight line of limited length. The Tusi couple / Cardan gear takes continuous rotation and gives an endless back-and-forth straight stroke.
- **Directions it can move (degrees of freedom):** 1: one input angle fixes the whole linkage (the Sarrus linkage counts as 0 by the usual formula, but because its constraints overlap its top plate keeps 1 freedom to move straight up and down; Wikipedia 'Sarrus linkage')
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): rocking or rotation becomes straight-line motion, exactly (Peaucellier, Hart, Sarrus, Tusi couple) or approximately (Watt, Chebyshev, Roberts, Hoecken), and the reverse
  - none of the other listed behaviours: it neither locks nor slips; it just guides
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it guides a point along a line
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): each pivot pin sits in its hole, which is what constrains the path
- **Input and output:** Rocking or rotation -> straight-line motion, or straight-line motion -> rocking (Wikipedia: 'or vice versa'). Stroke is limited by the bar lengths; approximate linkages are only straight over part of their travel (for example the Chebyshev lambda linkage stays within 1% of a line for over half its cycle; Wikipedia). The Tusi couple / Cardan gear gives a stroke equal to the ring gear's [pitch](../glossary.md#pitch) diameter and a pure sine-wave (simple harmonic) motion, which produces no second-order shaking forces and so is easy to balance (Wikipedia 'Straight-line mechanism'). Efficiency: high, since there are only turning pivots and no sliding guide; Kempe reported the 'ease of working and absence of friction and noise' of Peaucellier linkages on the Houses of Parliament ventilation engines; no number found ⚑ [uncertain]. Shafts: all pivot axes parallel in the planar linkages; two sets of hinge axes at an angle in the Sarrus linkage. Back-drivable: yes, the straight-moving point can drive the linkage back, except near positions where two bars line up (toggle or dead positions), where the linkage can lock or push hard sideways (the Scott Russell article warns of this for its slider) ⚑ [uncertain as a general rule].
- **Power:** passive (no power needed): it is moved by hand, a motor, a piston or the load; nothing happens when power is lost except that it stops
- **Load:** Light to heavy depending on build: these linkages guided the piston rods of steam engines (Watt's parallel motion), locate the rear axles of some cars sideways (Watt's linkage) and carry the jibs of level-luffing dockside cranes (Chebyshev 'horse-head' design) (Wikipedia). Printed versions are light-duty guides (e.g. for a soldering iron in a heat-set insert press). Planar linkages are strong in their own plane but weak against sideways (out-of-plane) forces and twisting, which the pivots must resist ⚑ [uncertain]; forces rise sharply near toggle positions where two bars line up ⚑ [uncertain].
- **Play and precision:** Approximate types have a built-in error that grows with stroke: the Watt linkage is only nearly straight near its middle position and traces a figure-8 overall (Kempe; Wikipedia); a Hoeken-type linkage optimised for straightness stays within 0.096% over half the crank's turn (Norton, Design of Machinery 3rd ed., Table 3-1). Exact types are perfect in theory, but every pivot adds [clearance](../glossary.md#clearance), and the Peaucellier linkage has six pivot points joining seven bars, so real [accuracy](../glossary.md#repeatability--accuracy) depends on tight, low-play joints and accurate bar lengths ⚑ [uncertain]. The pivots must be parallel; misaligned pivots bind. Kovács (kovzol) notes that even the pen refill's up-and-down play affects LEGO linkage drawings.
- **Taking it apart:** removable: the bars are joined by pins, screws or shoulder bolts and can be taken apart
- **How often it can be reused:** many times: it can be dismantled and reassembled repeatedly; the limit is wear of the pivot holes
- **Sealing:** none: it is an open mechanism and does not seal anything
- **Adjustable:** Usually no: the bar lengths fix the path, and changing them makes the line curved. Prototypes can use slotted or multi-hole bars to find good proportions ⚑ [uncertain]; the Tusi couple has no adjustment.
- **Access needed:** not applicable: it is a mechanism in a frame, reached wherever the frame opens
- **Materials:** Historically cast and wrought iron and steel on steam engines. For models Kempe (1877) used cardboard links with catgut rivets, or tin-plate links with bootmaker's eyelets as pivots. LEGO Technic beams and pins (brand) work well (kovzol/lego-linkages). Printed versions use PLA or PLA-CF bars with 2 mm steel dowel pins and small ball bearings (Ubrch), or 1.75 mm filament as hinge pins (Illmilliner's Sarrus press). Tusi couples use printed involute gears (Kladrie: 64-tooth gear in a 128-tooth ring).
- **Heat, cold, water and wear:** Printed PLA softens and deforms above about 60 °C and degrades in UV light (Prusa PLA guide); keep printed insert-press linkages away from the hot soldering-iron tip. Pivot holes wear over time, which adds play and bends the line ⚑ [uncertain]. Kempe notes linkages avoid the temperature distortion that plagues long sliding guides. Outdoors or on vehicles, pivots need sealed bushings or rod ends to keep grit out ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): bars, frames and gears print flat; examples include heat-set insert presses based on the Peaucellier and Sarrus linkages, a Chebyshev walking robot and a Tusi couple toy
  - laser cut: ⚑ [uncertain] the bars are flat profiles that suit acrylic, plywood or card, but no tested laser-cut example was found; Kempe built his models from hand-cut card and tin-plate
  - woodwork: card, thin wood or tin-plate with eyelets as pivots (Kempe, 1877)
  - CNC: metal links for heavy-duty uses such as vehicle suspension
  - off-the-shelf part: LEGO Technic beams and pins (brand), shoulder bolts, dowel pins, small ball bearings, rod ends
- **Printing it in one piece (print in place):** no: printed straight-line linkages are printed as separate bars and joined with pins (steel dowels, screws or lengths of filament); the designer of a printed Sarrus insert press was considering a [print-in-place](../glossary.md#print-in-place) version but had not released one
- **Tools:** Screwdriver or hex key for pivot screws; a drill bit used by hand to ream printed pivot holes to size (Ubrch); a vice or soft-jawed clamp to press in small ball bearings (Ubrch); pliers; a soldering iron to press nuts into printed parts (Namako's walker)
- **Difficulty:** easy to moderate: Watt's, Chebyshev's and Roberts' linkages are just four bars and four pins; the Peaucellier and Hart linkages need more bars with accurate lengths and low-play pivots, and the Tusi couple needs a printed internal (ring) gear exactly twice the size of its partner

### 3D printing tips

1) Get the proportions right first: sketch the linkage in a simulator (PMKS+, Linkage, or HUANGYAN920's animations) or build it from LEGO Technic or card and pins (kovzol; Kempe), then print. 2) Use real pins for pivots: Ubrch's Peaucellier insert press uses 2 mm steel dowels in interference-fit holes and small ball bearings; printed 2 mm holes were not accurate enough, so he reamed them by hand with a drill bit held in a chuck (a 5/64 in bit, slightly under 2 mm). 3) Ubrch prints the bars so the pivot holes run along the Z axis (vertical), adds extra walls on long load-bearing bars, uses a randomised seam position, and sands the undersides so the bars slide past each other smoothly. 4) Cheap pin option: Illmilliner's Sarrus insert press uses lengths of 1.75 mm filament as hinge pins. 5) For moving fits start with at least 0.3 mm clearance and tune (Prusa); for pivots, less play means a straighter line, so prefer pins in reamed holes or bearings over loose printed pins ⚑ [uncertain]. 6) Namako's Chebyshev walker uses M2 screws with washers and nuts pressed in with a soldering iron, and drills holes to size (2, 3 and 5 mm). 7) Tusi couple: Kladrie printed a 64-tooth gear running inside a 128-tooth ring gear in PLA at 0.2 mm layers without supports; the tooth counts must be exactly 1:2. 8) Keep bars stiff and lay them in separate planes so they don't collide as they cross ⚑ [uncertain]. 9) PLA softens above about 60 °C (Prusa), which matters for insert presses that hold a hot soldering iron nearby.

### Buying one (off-the-shelf parts)

Dowel pins (e.g. 2 mm or 3 mm steel dowel pins); shoulder bolts (shoulder screws); miniature and flanged ball bearings; e-clips or retaining rings; rod ends (rose joints) for heavy-duty links such as a car's Watt's link; LEGO Technic beams and pins (brand) for quick prototypes; for a Cardan gear, a spur gear and an internal (ring) gear with exactly twice as many teeth of the same module ⚑ [uncertain: none checked in a catalogue]. For long, stiff straight motion the off-the-shelf alternative is a linear guide or linear bushings on rods.

## Rules of thumb

- Watt's linkage: two equal swinging bars; the connecting bar's length is chosen so that when the swinging bars are parallel it is at right angles to them; the tracing point is halfway along the connecting bar. The path is only nearly straight close to the middle position (Kempe, How to Draw a Straight Line, 1877).
- Chebyshev's linkage: swinging bars 5 units long, fixed pivots 4 units apart, connecting bar 2 units, tracing point at its middle; the point moves parallel to the line between the fixed pivots, and is exactly on the line at the middle and above each fixed pivot (Kempe, 1877; Wikipedia 'Chebyshev linkage'). Input bar range about 36.9 to 101.5 degrees (Wikipedia).
- Roberts' linkage: equal swinging bars; fixed pivots twice as far apart as the two pivots on the moving piece; tracing point on the moving piece at a distance from those pivots equal to the swinging-bar length (Kempe, 1877).
- Chebyshev lambda linkage: crank 1, distance between fixed pivots 2, rocker 2.5, and a coupler 5 long with the tracing point at its far end (rocker joined at its middle); it stays within 1% of a straight line for over half the cycle, at nearly constant speed (Wikipedia 'Chebyshev lambda linkage').
- Hoeken-type four-bar (Norton, Design of Machinery 3rd ed., p. 134, Table 3-1): for a straight portion lasting half the crank's turn, ground link / crank = 2.2 and coupler / crank = 2.8 give 0.096% straightness error but 35% speed variation; for near-constant speed over 60 degrees of crank, 2.025 and 2.538 give 0.387% straightness error and 0.106% speed variation. You cannot have best straightness and steadiest speed at once.
- Peaucellier linkage: two equal long bars from the fixed pivot O to opposite corners of a diamond (rhombus) of four equal short bars; an extra bar, pivoted to the frame at a distance from O equal to its own length, makes a third corner move on a circle through O; the fourth corner then moves exactly straight (Kempe, 1877; Wikipedia). Distance(O, B) x distance(O, D) = long bar squared - short bar squared, a constant (Wikipedia).
- A four-bar linkage can only approximate a straight line; exact straight lines need at least a six-bar inversor (Peaucellier, Hart) or a slide (Wikipedia 'Straight-line mechanism'; Kempe: 'impossible to solve the problem with three moving links').
- Tusi couple / Cardan gear: the rolling gear's pitch diameter must be exactly half the ring gear's (tooth ratio 1:2); any point on the small gear's pitch circle then moves along a diameter of the ring gear, so the stroke equals the ring's pitch diameter (Wikipedia 'Straight-line mechanism'); points inside the pitch circle trace ellipses (Wikipedia 'Tusi couple').
- Tusi couple without a ring gear (Goodman's version): a fixed gear, an [idler](../glossary.md#idler) on a rotating arm, and an output gear with half the teeth of the fixed gear; an output arm of length d (equal to the distance between the fixed and output gears) moves its tip along a straight line of length 2d (Wikipedia 'Tusi couple').
- Scott Russell linkage: keep the slider well away from the short link's pivot; as they approach, the straight-line constraint weakens and sideways forces on the slider rise (Wikipedia 'Scott Russell linkage').

## Common failures

1) Using an approximate linkage beyond its straight range, so the point wanders off the line (the Watt linkage traces a figure-8; Kempe). 2) Wrong proportions or inaccurate bar lengths, giving a curved path: lay it out in a simulator or with card first (Kempe; PMKS+). 3) Play in loose pivot holes adding up across many joints: ream holes to size and use steel dowels or bearings (Ubrch). 4) Binding because pivot axes or hinges are not parallel, especially in the Sarrus linkage's hinge pairs ⚑ [uncertain]. 5) Locking up or pushing hard sideways near toggle positions where two bars line up (Wikipedia 'Scott Russell linkage'). 6) In a Tusi couple, gears that are not exactly 1:2 or not concentric make the point trace a thin ellipse instead of a line ⚑ [uncertain].

## Safety

Crossing bars close like scissors and can pinch fingers ⚑ [uncertain: general]. Insert presses built on these linkages hold a soldering iron at around 200+ °C, so treat them as a burn hazard ⚑ [uncertain: typical insert-setting temperature not checked]. Kladrie's Tusi toy uses small neodymium magnets and steel balls, which must be kept from small children ⚑ [uncertain: general magnet safety]. Don't modify a vehicle's suspension linkage without proper engineering; it carries large loads.

## Related

- Four-bar linkage (incl. parallelogram linkage): the parent mechanism of the approximate straight-line linkages; a parallelogram keeps a part level but does not move a point straight
- Linear guides (bushings on rods, wheels or carriages on rails) and dovetail slides: the usual way to get straight motion; longer strokes and stiffer, but they slide, need straight rails and wear
- Parallel leaf-spring flexure (linear flexure stage): nearly straight motion over tiny distances with no pivots and no play
- Scissor linkage (lazy tongs, scissor lift): a chain of crossed bars that also lifts a platform straight, with one sliding end
- Scotch yoke and slider-crank: turn rotation into straight motion but need a slide; the Scotch yoke's sine-wave motion matches the Tusi couple's, and both relate to the double-slider trammel (Wikipedia 'Straight-line mechanism')
- Rack and pinion, lead screw and nut: long straight strokes from rotation
- Virtual-pivot linkage (remote centre of motion): the rotary counterpart, a linkage whose part turns about a point in empty space
- Scott Russell linkage: turns a straight motion through a right angle; often combined with a straight-line linkage (Wikipedia)

## Make it yourself

- [lego-linkages (Zoltán Kovács, GitHub), README](https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md): Building instructions for LEGO Technic linkages that draw with a pen refill: Watt's linkage, Chebyshev's linkage and lambda linkage, Peaucellier's linkage (with an optional 3D-printed 4-hole beam) and Hart's A-frame *(licence: GPL-3.0)*
- [Heat Set Insert Press, only weird and complicated (Ubrch, Printables)](https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated): A working heat-set insert press whose soldering-iron holder is guided straight down by a Peaucellier-Lipkin linkage; detailed notes on 2 mm dowel pivots, reaming holes and print orientation *(licence: CC BY-NC-SA)*
- [Heat Set Insert Press (Sarrus Linkage) (Illmilliner, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage): An almost all-printed insert press using a Sarrus linkage instead of rails, with 1.75 mm filament as hinge pins (work in progress) *(licence: CC BY-NC)*
- [Tusi Couple illusion mechanism (Kladrie, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism): Motorised Tusi couple: a 64-tooth gear inside a 128-tooth ring gear carries magnets that drag steel balls along straight lines *(licence: CC BY-SA)*
- [Chebyshev Linkage walker Unit for OTTO (Namako, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto): Servo-driven walking unit for the OttoDIY robot using Chebyshev linkages (work in progress) *(licence: CC BY-NC-SA)*
- [PMKS+ web linkage analysis tool](https://pmksplus.com/): Free, open-source browser tool to build and animate planar linkages, share them by URL and run kinematic analysis; useful for checking straight-line proportions before printing *(licence: free and open source ⚑ [uncertain: licence not checked])*
- [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations with adjustable bar lengths, including Watt, Chebyshev, Roberts, Hart and a Peaucellier-type straight-line mechanism (labels mostly in Chinese; its Peaucellier entry is mislabelled as an ellipsograph) *(licence: MIT (code))*

## Pictures, videos and models

- [Watts Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif): Animated Watt's linkage tracing its nearly straight line (and figure-8 ends); dimensions given in the description *(licence: CC BY-SA 4.0)*
- [Peaucellier-Lipkin Inversor.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif): Animated Peaucellier-Lipkin linkage drawing an exact straight line, with bar lengths in the description *(licence: CC BY-SA 4.0)*
- [Chebyshev Lambda Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif): Animated Chebyshev lambda linkage: crank 1, rocker 2.5, coupler 5, fixed pivots 2 apart, with a long flat section of its path *(licence: CC BY-SA 4.0)*
- [Cardano's hypocyclic gears.gif (Wikimedia Commons, by Bryllig)](https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif): Animated Cardan gear (Tusi couple made with gears): pins on a gear rolling inside a ring gear twice its size move back and forth along straight diameters *(licence: CC BY-SA 4.0)*
- [Sarrus Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif): Animated Sarrus linkage made of hinged plates: the top plate moves straight up and down *(licence: CC BY-SA 4.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 18 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Straight-line_mechanism>
- <https://en.wikipedia.org/wiki/Watt%27s_linkage>
- <https://en.wikipedia.org/wiki/Parallel_motion_linkage>
- <https://en.wikipedia.org/wiki/Chebyshev_linkage>
- <https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage>
- <https://en.wikipedia.org/wiki/Roberts_linkage>
- <https://en.wikipedia.org/wiki/Hoecken_linkage>
- <https://en.wikipedia.org/wiki/Peaucellier%E2%80%93Lipkin_linkage>
- <https://en.wikipedia.org/wiki/Hart%27s_inversors>
- <https://en.wikipedia.org/wiki/Sarrus_linkage>
- <https://en.wikipedia.org/wiki/Scott_Russell_linkage>
- <https://en.wikipedia.org/wiki/Tusi_couple>
- <https://en.wikipedia.org/wiki/Murray%27s_Hypocycloidal_Engine>
- <https://de.wikipedia.org/wiki/Geradf%C3%BChrung>
- <https://www.gutenberg.org/files/25155/25155-pdf.pdf>
- <http://www.designofmachinery.com/DOM/Chap_03_3ed_p134.pdf>
- <https://507movements.com/mm_329.html>
- <https://507movements.com/mm_339.html>
- <https://507movements.com/mm_343.html>
- <https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif>
- <https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif>
- <https://commons.wikimedia.org/wiki/File:Chebyshev_Linkage.gif>
- <https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif>
- <https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif>
- <https://commons.wikimedia.org/wiki/File:TusiCouple.gif>
- <https://commons.wikimedia.org/wiki/File:Goodman_Tusi_Couple.webm>
- <https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif>
- <https://www.youtube.com/watch?v=P31fzSIGrl0>
- <https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md>
- <https://raw.githubusercontent.com/kovzol/lego-linkages/master/LICENSE>
- <https://makezine.com/article/maker-news/the-peaucelliers-cell-dra/>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated>
- <https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage>
- <https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism>
- <https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto>
- <https://pmksplus.com/>
- <https://huangyan920.github.io/Mechanical/>
- <https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://help.prusa3d.com/article/pla_2062>
