---
title: Kinematic coupling
description: A locating joint that touches at exactly six points, two for each of three balls sitting in three V-grooves (or
  three, two and one points for a Kelvin coupling), which pins down all six ways a part can move so it always drops back into
  the same position, while a light hold-down such as gravity, magnets or springs keeps it seated.
num: 114
term: Kinematic coupling (three-groove Maxwell coupling; Kelvin coupling)
plain_name: Three balls on one part that drop into three V-shaped grooves on the other, so the part can be lifted off and
  put back in exactly the same place every time, without wobbling or jamming
aliases:
- kinematic mount / kinematic base / kinematic seat
- ball-and-groove coupling / three-ball, three-groove coupling / balls in V-grooves
- Maxwell coupling (three V-grooves pointing to the centre)
- Kelvin coupling / Kelvin clamp (cone or three-sided dimple, V-groove and flat)
- hole, slot and flat mount / cone, groove and flat mount
- exact-constraint coupling / exactly constrained mount
- kinematic bed mount / kinematic bed (3D printers)
- kinematic tool changer coupling / toolchanger tool plate (multi-tool 3D printers)
- quasi-kinematic coupling (QKC), canoe-ball coupling, three-tooth coupling (engineering variants)
- E3D ToolChanger (brand), Jubilee (open-source machine), Bondtech INDX (brand), Prusa XL (brand)
family: locating & alignment
other_families: [quick-release & tool-free]
finder:
  job: [line parts up exactly, join and hold]
  motion: none
  special_behaviour: [self-aligning or self-centring, quick-release]
  holding_principle: [shape, friction or clamping, magnetic, spring force]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, drill and tap, press or vice]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: tool-free quick release
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: []
diagram_idea: Top view of a round base with three V-grooves at 120 degrees all pointing at the centre, and three balls on
  the underside of a lid dropping into them; small dots mark the two contact points in each groove (six in total), and a second
  frame shows the lid heated and slightly larger, with the balls slid outward along their grooves while a cross at the centre
  stays in the same place.
links:
- url: https://en.wikipedia.org/wiki/Kinematic_coupling
  title: Kinematic coupling (Wikipedia)
  shows: Definition, Kelvin and Maxwell coupling diagrams, exact-constraint theory and links to MIT's kinematic couplings
    site
  license: text CC BY-SA 4.0; images per file
- url: https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png
  title: Maxwell kinematic coupling.png (Wikimedia Commons, MichaelFrey)
  shows: 'Three red spherical surfaces resting in three green V-grooves: the Maxwell three-groove coupling'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png
  title: Kelvin Kinematic Coupling.png (Wikimedia Commons, Imminent77)
  shows: 'CAD drawing of a Kelvin coupling: one ball in a three-sided dimple, one in a V-groove and one on a flat (a Maxwell
    version by the same author is ''Maxwell Kinematic Coupling.png'')'
  license: CC BY-SA 4.0
- url: https://www.youtube.com/watch?v=cfSHss5j5KU
  title: 3D Printed Kinematic Coupling Proof of Concept (Sonya Vasquez, YouTube; title confirmed via YouTube oEmbed)
  shows: Video demonstration of a 3D-printed kinematic coupling (linked from the Jubilee tool-changer wiki's 'Locating Tools'
    page)
  license: link only
- url: https://jubilee3d.com/index.php?title=Locating_Tools
  title: Locating Tools (Jubilee wiki)
  shows: Plain explanation of how Jubilee's tool plates use a Maxwell kinematic coupling (tool balls on carriage pins) to
    return tools to the same position, with links to further references; the companion page 'The Remote Elastic Lock' explains
    the twist lock that preloads it
  license: CC BY (wiki content, unless otherwise noted)
make_it_yourself:
- url: https://www.printables.com/model/1493826-pocket-kinematic-coupling
  title: Pocket Kinematic Coupling by BYU CMR (Printables) (URL from Printables API, page not opened)
  what_it_is: Pocket-sized modular kinematic coupling kit from BYU's Compliant Mechanisms and Robotics group for building
    and testing coupling designs in seconds; inspired by a model in Slocum's lectures
  license: CC BY-NC
- url: https://pinshape.com/items/36874-3d-printed-an-introduction-to-kinematic-coupling
  title: '3D Printed: An Introduction to Kinematic Coupling (nickw, Pinshape)'
  what_it_is: 'Three-lesson printable tutorial: Maxwell and Kelvin test couplings held together by magnets with stainless
    steel balls and dowel pins, then an FDM and an SLA kinematic optics mount'
  license: CC BY
- url: https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed
  title: Laser cut kinematic bed mounts (whopping_Voron_mods, GitHub; README read via raw.githubusercontent.com)
  what_it_is: Maxwell-style kinematic bed mount for the Voron 2.4 made from laser-cut aluminium and steel dowel pins with
    leaf-spring preload, with theory, FEA, before-and-after bed meshes, CAD and DXFs
  license: GPL v3 (repository licence)
- url: http://pergatory.mit.edu/kinematiccouplings/html/tools.html
  title: Kinematic Couplings Tools Repository (MIT Precision Engineering Research Group, A. Slocum)
  what_it_is: Free Excel design spreadsheets for three-groove kinematic couplings (Kinematic_Coupling_3Groove_Design) and
    Hertz contact stress
  license: link only
- url: https://github.com/e3donline/ToolChanger
  title: E3D ToolChanger (GitHub; README read via raw.githubusercontent.com)
  what_it_is: STEP, STL, DXF and PDF files for E3D's open tool plate and carriage, whose tools locate on a dowel-pin kinematic
    coupling
  license: GPL v3
- url: https://www.printables.com/model/1057179-kinematic-bed-mounts
  title: Kinematic Bed Mounts by Michael Hathaway (Printables) (URL from Printables API, page not opened)
  what_it_is: Printable magnetic bed mounts with a dimple and U-groove holding 9-10 mm balls, designed for the Ender 5; print
    in ABS, PC or nylon
  license: CC BY-NC-SA
sources:
- https://en.wikipedia.org/wiki/Kinematic_coupling (read as raw wikitext)
- https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png
- https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png
- https://commons.wikimedia.org/wiki/File:Maxwell_Kinematic_Coupling.png
- 'https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf (Slocum, A., ''Kinematic couplings:
  A review of design principles and applications'', Int. J. Machine Tools and Manufacture 50(4), 2010, 310-327; MIT open-access
  author''s manuscript, CC BY-NC-SA 3.0)'
- http://pergatory.mit.edu/kinematiccouplings/
- http://pergatory.mit.edu/kinematiccouplings/html/tools.html
- http://pergatory.mit.edu/kinematiccouplings/html/about.html
- http://pergatory.mit.edu/kinematiccouplings/html/about/kinematic.html
- https://jubilee3d.com/index.php?title=Locating_Tools
- https://jubilee3d.com/index.php?title=The_Remote_Elastic_Lock
- https://jubilee3d.com/index.php?title=Specs
- https://e3d-online.com/blogs/news/research-and-development-motion-system-and-tool-changer
- https://hackaday.com/2019/07/04/e3ds-love-letter-to-toolchanging-3d-printers/
- https://raw.githubusercontent.com/e3donline/ToolChanger/master/README.md
- https://raw.githubusercontent.com/tanaes/whopping_Voron_mods/main/kinematic_bed/README.md
- https://raw.githubusercontent.com/BondtechAB/INDX/main/README.md
- https://3dprintingindustry.com/news/prusa-debuts-its-large-format-toolchanger-system-the-xl-3d-printer-technical-specifications-and-pricing-199965/
- https://help.prusa3d.com/article/toolchanger-problem-17813-xl-multi-tool_802566
- https://drmrehorst.blogspot.com/2017/07/ultra-megamax-dominator-3d-printer-bed.html
- https://hackaday.io/project/28933-kinematic-mount-for-3d-printer-bed
- https://henryquach.org/kinematic.html
- https://pinshape.com/items/36874-3d-printed-an-introduction-to-kinematic-coupling
- https://www.kjmagnetics.com/neodymium-magnet-safety.asp
- https://www.youtube.com/watch?v=cfSHss5j5KU (verified via YouTube oEmbed)
- https://api.printables.com/graphql/ (Printables models 1493826, 302854 and 1057179 read via the public API)
research: research/connection-types/results/Kinematic_coupling_balls_in_Vgrooves.json
glossary: [degrees-of-freedom, backlash, stiffness, preload, deflection, clearance, set-screw, taper, heat-set-insert, keying,
  kinematic-coupling, exact-constraint, over-constraint, elastic-averaging, repeatability--accuracy, creep, galling--fretting,
  infill]
---

A locating joint that touches at exactly six points, two for each of three balls sitting in three V-grooves (or three, two and one points for a Kelvin coupling), which pins down all six ways a part can move so it always drops back into the same position, while a light hold-down such as gravity, magnets or springs keeps it seated.

**In plain words:** Three balls on one part that drop into three V-shaped grooves on the other, so the part can be lifted off and put back in exactly the same place every time, without wobbling or jamming. **Proper term:** [Kinematic coupling](../glossary.md#kinematic-coupling) (three-groove Maxwell coupling; Kelvin coupling).

**Also called:** kinematic mount / kinematic base / kinematic seat; ball-and-groove coupling / three-ball, three-groove coupling / balls in V-grooves; Maxwell coupling (three V-grooves pointing to the centre); Kelvin coupling / Kelvin clamp (cone or three-sided dimple, V-groove and flat); hole, slot and flat mount / cone, groove and flat mount; exact-constraint coupling / exactly constrained mount; kinematic bed mount / kinematic bed (3D printers); kinematic tool changer coupling / toolchanger tool plate (multi-tool 3D printers); quasi-kinematic coupling (QKC), canoe-ball coupling, three-tooth coupling (engineering variants); E3D ToolChanger (brand), Jubilee (open-source machine), Bondtech INDX (brand), Prusa XL (brand).

## How it works

Any loose part can move in six ways: slide in three directions and turn about three axes. A ball resting in a V-groove touches it at two points, so it stops two of those movements, and three balls in three grooves give exactly six contact points, which fixes all six movements with nothing extra to fight against: the part can neither wiggle nor bind, and it only fits one way. With the grooves pointing towards the centre (Maxwell coupling), the balls can slide along their grooves if the part grows or shrinks with heat, so the centre stays put. In the Kelvin version one ball sits in a three-sided dimple (3 points), one in a groove aimed at it (2 points) and one on a flat (1 point), so the part stays fixed at the dimple and grows away from it. A hold-down force (called [preload](../glossary.md#preload)) is needed to keep all six contacts closed; without it the part can tip or lift.

## Parts

A few parts: three balls or ball-ended pins on one part; three V-grooves on the other (often each made from two parallel dowel pins or rods), or a cone-shaped dimple, one groove and one flat; plus something to hold it down (its own weight, magnets, springs, or a twist lock or clamp).

## Everyday examples

- multi-tool 3D printers such as the Prusa XL, E3D ToolChanger and Jubilee, which swap print heads that click back into exactly the same place
- heated print beds resting on three balls in grooves (kinematic bed mounts on Voron and similar printers)
- a three-legged stool, which never wobbles because three points always sit firmly (the simplest exact-constraint idea)
- optical mirror and camera mounts in labs that lift off and drop back without re-aligning

## When to use it

Whenever a part must come off and go back on in exactly the same place without re-measuring: tool heads on tool-changing printers, removable print beds or build plates, swap-out jigs and fixtures, probe and sensor mounts, camera, laser and optics mounts, and modules that must be removed for maintenance. Also when a part changes size with heat but must stay centred and flat, such as a heated bed, because the balls slide along the grooves instead of forcing the plate to bow.

## When not to use it

Not for heavy or shock loads that could lift or tip it off unless there is a strong clamp or lock; not where the parts must be sealed flat against each other (use a compliant kinematic design or dowel pins plus bolts); not in dirty, gritty places where debris gets onto the contact points. Where simple alignment is enough, dowel pins or a self-centring cone and socket are cheaper; where the part also needs to be joined strongly, combine the coupling with bolts, a toggle clamp or a twist lock. For many-position indexing, use an indexing plunger or a Hirth joint instead.

## Details

- **What it does (jobs):**
  - line parts up exactly: returns a removable part (tool head, print bed, jig, instrument, optic) to the same position every time
  - join and hold (only together with a hold-down force such as magnets, springs, gravity or a lock)
- **Movement:** none while seated; the part is lifted straight off and set back down
- **Directions it can move (degrees of freedom):** 0 when seated and held down: six contact points remove all six [degrees of freedom](../glossary.md#degrees-of-freedom) exactly once, with no [over-constraint](../glossary.md#over-constraint); when lifted off the part is completely free (6).
- **Special behaviour:**
  - self-aligning or self-centring: set down roughly in place, the balls slide down the grooves into the one and only resting position
  - quick-release: lifts off as soon as the hold-down is released (by hand for magnet or gravity preload; by a motor-driven twist lock on tool-changing printers)
  - none of the others; its extra trick is thermal: a Maxwell coupling lets the part expand or shrink about a fixed centre without being forced out of shape
- **How it holds:** shape (the balls locate in the grooves; this sets the position) combined with a separate hold-down: gravity, magnetic, spring force, or a clamp or twist lock (friction or clamping). The coupling itself only locates; it does not resist being lifted off.
- **Input and output:** not applicable
- **Power:** passive (no power needed); on tool-changing printers a motor or servo only works the separate lock that clamps the tool onto the coupling
- **Load:** Light to heavy, depending on ball size, contact shape and material: in Slocum's worked examples at a 1.3 GPa contact-pressure limit, a 25 mm stainless half-sphere in a V carries up to 229 N per contact, while a 250 mm sphere in a V carries 16,160 N; large 'canoe ball' couplings reached over 200 N/µm [stiffness](../glossary.md#stiffness). Strong and stiff against loads that push the balls into the grooves; weak against pulling off or tipping unless the preload is larger than the lifting load, and loads should act inside the triangle formed by the balls.
- **Play and precision:** No play and no [backlash](../glossary.md#backlash) when preloaded. [Repeatability](../glossary.md#repeatability--accuracy) ranges from about 50 nm (polished ceramic on steel, heavily preloaded) through sub-micron to 5 µm (hard steel; E3D's tool changer picks tools with under 5 µm repeatability) to tens of microns for cheap sheet-metal V-grooves, and about 47 arcseconds (angular, standard deviation) for one home-made coupling of 3D-printed parts with steel balls and dowel pins. Tolerates small placement errors (the balls slide into the grooves) and thermal expansion, but not dirt, burrs or oil films on the contact points.
- **Taking it apart:** tool-free quick release (when held down by magnets, gravity or a hand lock); removable when bolted down
- **How often it can be reused:** many times: designed to be taken apart and put back routinely, but heavily loaded steel-on-steel contacts wear (Slocum: repeatability worsened to about ten microns after several hundred cycles, with [fretting](../glossary.md#galling--fretting) marks), while polished hard ceramic contacts wear in and then stay sub-micron; the separate lock also wears (Jubilee's wedge plate needs replacing after thousands of cycles)
- **Sealing:** none
- **Adjustable:** Not normally: the point is a fixed, repeatable position. Some designs use ball-ended adjusting screws as the 'balls' so height and tilt can be set once (e.g. a Kelvin-type 3D-printer bed levelled on three spherical-headed screws, or an optical mount with tip/tilt adjustment).
- **Access needed:** one side only (blind): the part is simply set down onto the base
- **Materials:** Contacts: hardened steel bearing balls (e.g. 440C stainless), hardened ground dowel pins or rods for the grooves, or for top precision silicon nitride, silicon carbide or tungsten carbide; stainless or ceramic avoids fretting corrosion. Bodies: aluminium or steel plates, laser-cut aluminium (Voron bed mounts), or 3D-printed plastic holding the steel parts (PETG, ABS, PC or nylon near heated beds). Hold-down: neodymium magnets, extension springs, leaf springs, or a twist lock.
- **Heat, cold, water and wear:** Handles temperature change well because it lets parts grow about a fixed centre, but printed bodies soften near heated beds (use ABS, PC or nylon there) and magnet preload weakens with heat (neodymium magnets are often rated to about 80 °C). Steel contacts can rust and fret, which ruins repeatability; stainless or ceramic contacts resist this (Slocum). Dust, swarf and oil films on the contacts shift the position. Vibration or knocks can unseat a part held only by gravity or weak magnets, so moving machines use springs or a lock; tool-changer locks and latches wear with use (Jubilee's wedge plate; Prusa notes dry coupler pins can cause pick-up problems).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): bodies, ball holders and groove holders with pockets for steel balls, dowel pins and magnets
  - 3D print (resin): stiffer, more accurate bodies for optical mounts (nickw's tutorial includes an SLA version)
  - off-the-shelf part: bearing balls, dowel pins, ground rods, ball-ended screws, magnets; ready-made kinematic bases for optics; tool-changer tool plates
  - laser cut: aluminium plates that clamp pairs of steel dowel pins as V-grooves (e.g. Voron 2.4 kinematic bed mounts)
  - CNC: machined V-grooves, cones and flats in metal
- **Printing it in one piece (print in place):** no: the printed parts hold separately added steel balls, dowel pins and magnets; all-plastic contacts wear and [creep](../glossary.md#creep)
- **Tools:** none to seat or remove it; to make one: drill (and ideally a reamer) for dowel-pin holes, a vice or press to push pins and balls in, epoxy or glue, and magnets or springs for the hold-down
- **Difficulty:** easy to moderate: a good coupling can be made from 3D-printed bodies with pressed-in or glued steel balls, dowel pins and magnets, with no machining; the hard part is getting clean, hard contact surfaces and enough preload, and very high precision needs hardened, ground or ceramic parts

### 3D printing tips

Do not let plastic be the contact surface for anything loaded: print the two bodies and press or glue in hard steel parts, so the six contact points are steel on steel. The easy way to make a precise V-groove is two parallel steel dowel pins (or ground rods) side by side with a gap, and the ball touches both; E3D's ToolChanger makes its 3-groove coupling from dowel pins and the Voron 2.4 laser-cut kinematic bed mount clamps steel dowel pins between aluminium plates. Use precision bearing balls or ball-ended screws; Henry Quach's home-made mount used 3/8 in stainless balls on 3/16 in stainless cylinders in 3D-printed bodies and measured about 47 arcseconds angular repeatability. Layout: put the three grooves 120 degrees apart around a circle and point them at the centre (Maxwell); aim for contact at about 45 degrees for balanced stiffness, and make the triangle as large as the part allows so it resists tipping (Slocum). Quach's design notes: use a large V angle and the largest practical balls and cylinders, choose hard, corrosion-resistant steel, keep the contacts clean (skin oil and corrosion spoil repeatability), and print thick parts with more than 30% [infill](../glossary.md#infill) so the plastic does not flex or yield. Preload: embed neodymium magnets beside the balls (glue them, and check all poles match before gluing), or use springs pulling the parts together; magnets suit light parts (Slocum), springs or a lock suit heavy or moving parts. Heat: for heated-bed mounts use high-temperature plastics such as ABS, PC or nylon (Hathaway's printable magnetic bed mounts), and remember the magnets weaken with heat. Accuracy of pocket positions matters less than you might think: the coupling still finds one repeatable position, and Slocum notes kinematic couplings are often two to three times more accurate than their parts. Try it first with the printable BYU 'Pocket Kinematic Coupling' kit or nickw's 'An Introduction to Kinematic Coupling' models.

### Buying one (off-the-shelf parts)

Precision bearing balls (chrome steel, 440C stainless, silicon nitride ceramic), ball-ended screws / spherical-head adjusting screws, hardened ground dowel pins, ground rods or drill rod, vee blocks, 'canoe balls' (industrial), neodymium disc magnets for preload, extension springs, [heat-set inserts](../glossary.md#heat-set-insert) and [set screws](../glossary.md#set-screw); ready-made optical kinematic bases (magnetic, ball-and-groove); tool-changer tool plates and carriages (E3D ToolChanger, Jubilee, Bondtech INDX); kinematic bed-mount kits for Voron and similar printers.

## Rules of thumb

- [Exact constraint](../glossary.md#exact-constraint): use exactly six contact points for the six degrees of freedom, e.g. three balls in three V-grooves (2+2+2) or a dimple, groove and flat (3+2+1); more contacts over-constrain the part and can bend it, for example when it expands with heat (Wikipedia, https://en.wikipedia.org/wiki/Kinematic_coupling; Slocum 2010, author's manuscript pp. 2-4, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Standard layout: grooves spaced 120 degrees apart on a circle (the coupling diameter), balls contacting at 45 degrees for balanced stiffness in all directions, and the normals to the contact-force planes bisecting the angles of the triangle joining the balls; for stability each ball/groove's instant centre must lie outside the coupling triangle (Slocum 2010, pp. 6 and 8, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Preload is one of the most important parameters for repeatability: it must be high, repeatable and must not deform the rest of the structure; bolts compressing springs for heavy fixtures, magnets for lightly loaded instruments (Slocum 2010, p. 9, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Contact load limits: at 1.3 GPa maximum contact pressure, a 25 mm stainless half-sphere carries 111 N on a 25 mm cylinder but 229 N in a V (4.7 µm [deflection](../glossary.md#deflection)), and a 250 mm sphere in a V carries 16,160 N; bigger contact radii carry much more (Slocum 2010, p. 8, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Materials and wear: heavily loaded steel ball/steel groove couplings start sub-micron but drift to about ten microns after several hundred cycles as fretting appears, so steel suits low-cycle use; silicon nitride on steel reached 50 nm; use corrosion-resistant stainless, carbide or ceramic for high cycles (Slocum 2010, p. 5, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Cheap versions still beat pins: sheet-metal V-grooves give repeatability of tens of microns (Slocum 2010, p. 10), a 3-2-1 fixture about 3-5 microns (p. 3), and a prototype with three small plastic hemispheres in wooden grooves was an order of magnitude more repeatable than the production wafer-pod locator it replaced (p. 15) (https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
- Tool-changer example: E3D's kinematic tool coupling, preloaded by a sprung bayonet cam-lock, picks and drops tools with better than 5 µm repeatability (E3D, https://e3d-online.com/blogs/news/research-and-development-motion-system-and-tool-changer); Bondtech says its Maxwell-coupled INDX tools mean 'you calibrate your tool offsets once' (https://raw.githubusercontent.com/BondtechAB/INDX/main/README.md).
- Heated beds grow: aluminium expands about 24 µm/m·K, so a 300 mm bed grows about 0.576 mm from 25 °C to 105 °C, which a kinematic mount absorbs without side forces (Rehorst, https://drmrehorst.blogspot.com/2017/07/ultra-megamax-dominator-3d-printer-bed.html); a Voron 2.4 bed bolted with four tight screws showed about 0.06 mm curvature/tilt on heating (whopping_Voron_mods README, https://raw.githubusercontent.com/tanaes/whopping_Voron_mods/main/kinematic_bed/README.md).
- Home-made benchmark: 3D-printed bodies with stainless balls and dowel pins, preloaded by the weight of steel optical posts, gave about 47 arcseconds standard deviation in angle (mean deviation about 67 arcseconds) over about 30 replacements, measured with a laser spot 4.4 m away (Henry Quach, https://henryquach.org/kinematic.html).

## Common failures

(1) Poor repeatability: dirt, burrs or oil on the balls or grooves, soft plastic contacts that dent, or too little preload; use clean, hard steel or ceramic contacts and enough hold-down force. (2) Part tips or lifts: load acts outside the ball triangle or exceeds the preload; widen the triangle or add a lock. (3) Wear and fretting over many cycles, especially steel on steel under heavy load; use stainless or ceramic balls and lubricate lightly where the maker recommends it (Prusa lubricates the XL's coupler pins). (4) Over-constrained 'kinematic' designs with four or more supports or tight screws that bind or warp with heat; keep to exactly six contacts. (5) Balls or pins working loose in printed pockets; glue or press-fit them and use thick, dense printed parts. (6) Grooves not pointing at the centre, making the coupling unstable or weak in one direction; follow the 120-degree layout.

## Safety

Magnet or spring preload can snap the parts together and pinch fingers. A bed or tool held only by magnets can fall off if the machine is tipped or turned over (one Voron kinematic-bed designer chose leaf-spring retention so a 2 kg bed could not crash out). Tool-changing printers move tools automatically; keep hands clear of the lock and dock. Small magnets used for preload are dangerous if swallowed.

## Related

- Self-centring cone and socket ([taper](../glossary.md#taper) locator): centres a part with one tapered contact; simpler but over-constrains if more than one is used
- Split-part joints with alignment pins (dowel pins): cheap and strong locating, but need [clearance](../glossary.md#clearance), so less repeatable than a kinematic coupling
- [Keying](../glossary.md#keying) (one-way-only fit, poka-yoke): makes a part fit only one way round, but does not set a precise position
- Hirth joint (face-spline coupling): many teeth average out errors ([elastic averaging](../glossary.md#elastic-averaging)) for a stiff, precise joint that can also index to set angles
- Magnet joint (embedded magnets): often used as the hold-down for a kinematic coupling, but on its own does not locate precisely
- Quick-release plate (camera plate, dovetail clamp): quick to swap, but relies on a sliding clamp rather than exact contact points
- Bayonet mount (push-and-twist lock): the kind of twist lock used on tool changers to pull the tool onto its kinematic coupling

## Make it yourself

- [Pocket Kinematic Coupling by BYU CMR (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1493826-pocket-kinematic-coupling): Pocket-sized modular kinematic coupling kit from BYU's Compliant Mechanisms and Robotics group for building and testing coupling designs in seconds; inspired by a model in Slocum's lectures *(licence: CC BY-NC)*
- [3D Printed: An Introduction to Kinematic Coupling (nickw, Pinshape)](https://pinshape.com/items/36874-3d-printed-an-introduction-to-kinematic-coupling): Three-lesson printable tutorial: Maxwell and Kelvin test couplings held together by magnets with stainless steel balls and dowel pins, then an FDM and an SLA kinematic optics mount *(licence: CC BY)*
- [Laser cut kinematic bed mounts (whopping_Voron_mods, GitHub; README read via raw.githubusercontent.com)](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed): Maxwell-style kinematic bed mount for the Voron 2.4 made from laser-cut aluminium and steel dowel pins with leaf-spring preload, with theory, FEA, before-and-after bed meshes, CAD and DXFs *(licence: GPL v3 (repository licence))*
- [Kinematic Couplings Tools Repository (MIT Precision Engineering Research Group, A. Slocum)](http://pergatory.mit.edu/kinematiccouplings/html/tools.html): Free Excel design spreadsheets for three-groove kinematic couplings (Kinematic_Coupling_3Groove_Design) and Hertz contact stress *(licence: link only)*
- [E3D ToolChanger (GitHub; README read via raw.githubusercontent.com)](https://github.com/e3donline/ToolChanger): STEP, STL, DXF and PDF files for E3D's open tool plate and carriage, whose tools locate on a dowel-pin kinematic coupling *(licence: GPL v3)*
- [Kinematic Bed Mounts by Michael Hathaway (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1057179-kinematic-bed-mounts): Printable magnetic bed mounts with a dimple and U-groove holding 9-10 mm balls, designed for the Ender 5; print in ABS, PC or nylon *(licence: CC BY-NC-SA)*

## Pictures, videos and models

- [Kinematic coupling (Wikipedia)](https://en.wikipedia.org/wiki/Kinematic_coupling): Definition, Kelvin and Maxwell coupling diagrams, exact-constraint theory and links to MIT's kinematic couplings site *(licence: text CC BY-SA 4.0; images per file)*
- [Maxwell kinematic coupling.png (Wikimedia Commons, MichaelFrey)](https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png): Three red spherical surfaces resting in three green V-grooves: the Maxwell three-groove coupling *(licence: CC BY-SA 4.0)*
- [Kelvin Kinematic Coupling.png (Wikimedia Commons, Imminent77)](https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png): CAD drawing of a Kelvin coupling: one ball in a three-sided dimple, one in a V-groove and one on a flat (a Maxwell version by the same author is 'Maxwell Kinematic Coupling.png') *(licence: CC BY-SA 4.0)*
- [3D Printed Kinematic Coupling Proof of Concept (Sonya Vasquez, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=cfSHss5j5KU): Video demonstration of a 3D-printed kinematic coupling (linked from the Jubilee tool-changer wiki's 'Locating Tools' page) *(licence: link only)*
- [Locating Tools (Jubilee wiki)](https://jubilee3d.com/index.php?title=Locating_Tools): Plain explanation of how Jubilee's tool plates use a Maxwell kinematic coupling (tool balls on carriage pins) to return tools to the same position, with links to further references; the companion page 'The Remote Elastic Lock' explains the twist lock that preloads it *(licence: CC BY (wiki content, unless otherwise noted))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

Nothing is marked on this page.

## Sources

- <https://en.wikipedia.org/wiki/Kinematic_coupling (read as raw wikitext)>
- <https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png>
- <https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png>
- <https://commons.wikimedia.org/wiki/File:Maxwell_Kinematic_Coupling.png>
- <https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf (Slocum, A., 'Kinematic couplings: A review of design principles and applications', Int. J. Machine Tools and Manufacture 50(4), 2010, 310-327; MIT open-access author's manuscript, CC BY-NC-SA 3.0)>
- <http://pergatory.mit.edu/kinematiccouplings/>
- <http://pergatory.mit.edu/kinematiccouplings/html/tools.html>
- <http://pergatory.mit.edu/kinematiccouplings/html/about.html>
- <http://pergatory.mit.edu/kinematiccouplings/html/about/kinematic.html>
- <https://jubilee3d.com/index.php?title=Locating_Tools>
- <https://jubilee3d.com/index.php?title=The_Remote_Elastic_Lock>
- <https://jubilee3d.com/index.php?title=Specs>
- <https://e3d-online.com/blogs/news/research-and-development-motion-system-and-tool-changer>
- <https://hackaday.com/2019/07/04/e3ds-love-letter-to-toolchanging-3d-printers/>
- <https://raw.githubusercontent.com/e3donline/ToolChanger/master/README.md>
- <https://raw.githubusercontent.com/tanaes/whopping_Voron_mods/main/kinematic_bed/README.md>
- <https://raw.githubusercontent.com/BondtechAB/INDX/main/README.md>
- <https://3dprintingindustry.com/news/prusa-debuts-its-large-format-toolchanger-system-the-xl-3d-printer-technical-specifications-and-pricing-199965/>
- <https://help.prusa3d.com/article/toolchanger-problem-17813-xl-multi-tool_802566>
- <https://drmrehorst.blogspot.com/2017/07/ultra-megamax-dominator-3d-printer-bed.html>
- <https://hackaday.io/project/28933-kinematic-mount-for-3d-printer-bed>
- <https://henryquach.org/kinematic.html>
- <https://pinshape.com/items/36874-3d-printed-an-introduction-to-kinematic-coupling>
- <https://www.kjmagnetics.com/neodymium-magnet-safety.asp>
- <https://www.youtube.com/watch?v=cfSHss5j5KU (verified via YouTube oEmbed)>
- <https://api.printables.com/graphql/ (Printables models 1493826, 302854 and 1057179 read via the public API)>
