# locating & alignment: Locates parts exactly

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 114 Kinematic coupling (balls in V-grooves)

*locating & alignment.* Three balls sitting in three V-grooves so a part drops back into exactly the same position every time; used in tool changers and removable print beds

*Also covers:* Also covers kinematic tool-changer mounts, e.g. on multi-tool 3D printers

### What it is

- **plain_name**: Three balls on one part that drop into three V-shaped grooves on the other, so the part can be lifted off and put back in exactly the same place every time, without wobbling or jamming
- **term**: Kinematic coupling (three-groove Maxwell coupling; Kelvin coupling)
- **aliases**: 
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
- **family**: locating & alignment
- **other_families**: quick-release & tool-free
- **one_liner**: A locating joint that touches at exactly six points, two for each of three balls sitting in three V-grooves (or three, two and one points for a Kelvin coupling), which pins down all six ways a part can move so it always drops back into the same position, while a light hold-down such as gravity, magnets or springs keeps it seated.
- **complexity**: A few parts: three balls or ball-ended pins on one part; three V-grooves on the other (often each made from two parallel dowel pins or rods), or a cone-shaped dimple, one groove and one flat; plus something to hold it down (its own weight, magnets, springs, or a twist lock or clamp).
- **how_it_works**: Any loose part can move in six ways: slide in three directions and turn about three axes. A ball resting in a V-groove touches it at two points, so it stops two of those movements, and three balls in three grooves give exactly six contact points, which fixes all six movements with nothing extra to fight against: the part can neither wiggle nor bind, and it only fits one way. With the grooves pointing towards the centre (Maxwell coupling), the balls can slide along their grooves if the part grows or shrinks with heat, so the centre stays put. In the Kelvin version one ball sits in a three-sided dimple (3 points), one in a groove aimed at it (2 points) and one on a flat (1 point), so the part stays fixed at the dimple and grows away from it. A hold-down force (called preload) is needed to keep all six contacts closed; without it the part can tip or lift.

### Finder attributes

- **job**: 
  - line parts up exactly: returns a removable part (tool head, print bed, jig, instrument, optic) to the same position every time
  - join and hold (only together with a hold-down force such as magnets, springs, gravity or a lock)
- **motion**: none while seated; the part is lifted straight off and set back down
- **degrees_of_freedom**: 0 when seated and held down: six contact points remove all six degrees of freedom exactly once, with no over-constraint; when lifted off the part is completely free (6).
- **special_behaviour**: 
  - self-aligning or self-centring: set down roughly in place, the balls slide down the grooves into the one and only resting position
  - quick-release: lifts off as soon as the hold-down is released (by hand for magnet or gravity preload; by a motor-driven twist lock on tool-changing printers)
  - none of the others; its extra trick is thermal: a Maxwell coupling lets the part expand or shrink about a fixed centre without being forced out of shape
- **holding_principle**: shape (the balls locate in the grooves; this sets the position) combined with a separate hold-down: gravity, magnetic, spring force, or a clamp or twist lock (friction or clamping). The coupling itself only locates; it does not resist being lifted off.
- **input_output**: not applicable
- **power**: passive (no power needed); on tool-changing printers a motor or servo only works the separate lock that clamps the tool onto the coupling
- **removability**: tool-free quick release (when held down by magnets, gravity or a hand lock); removable when bolted down
- **reuse_cycles**: many times: designed to be taken apart and put back routinely, but heavily loaded steel-on-steel contacts wear (Slocum: repeatability worsened to about ten microns after several hundred cycles, with fretting marks), while polished hard ceramic contacts wear in and then stay sub-micron; the separate lock also wears (Jubilee's wedge plate needs replacing after thousands of cycles)
- **tools_needed**: none to seat or remove it; to make one: drill (and ideally a reamer) for dowel-pin holes, a vice or press to push pins and balls in, epoxy or glue, and magnets or springs for the hold-down
- **seal**: none
- **load**: Light to heavy, depending on ball size, contact shape and material: in Slocum's worked examples at a 1.3 GPa contact-pressure limit, a 25 mm stainless half-sphere in a V carries up to 229 N per contact, while a 250 mm sphere in a V carries 16,160 N; large 'canoe ball' couplings reached over 200 N/µm stiffness. Strong and stiff against loads that push the balls into the grooves; weak against pulling off or tipping unless the preload is larger than the lifting load, and loads should act inside the triangle formed by the balls.
- **adjustable**: Not normally: the point is a fixed, repeatable position. Some designs use ball-ended adjusting screws as the 'balls' so height and tilt can be set once (e.g. a Kelvin-type 3D-printer bed levelled on three spherical-headed screws, or an optical mount with tip/tilt adjustment).
- **play_and_precision**: No play and no backlash when preloaded. Repeatability ranges from about 50 nm (polished ceramic on steel, heavily preloaded) through sub-micron to 5 µm (hard steel; E3D's tool changer picks tools with under 5 µm repeatability) to tens of microns for cheap sheet-metal V-grooves, and about 47 arcseconds (angular, standard deviation) for one home-made coupling of 3D-printed parts with steel balls and dowel pins. Tolerates small placement errors (the balls slide into the grooves) and thermal expansion, but not dirt, burrs or oil films on the contact points.
- **access_needed**: one side only (blind): the part is simply set down onto the base
- **materials**: Contacts: hardened steel bearing balls (e.g. 440C stainless), hardened ground dowel pins or rods for the grooves, or for top precision silicon nitride, silicon carbide or tungsten carbide; stainless or ceramic avoids fretting corrosion. Bodies: aluminium or steel plates, laser-cut aluminium (Voron bed mounts), or 3D-printed plastic holding the steel parts (PETG, ABS, PC or nylon near heated beds). Hold-down: neodymium magnets, extension springs, leaf springs, or a twist lock.
- **maker_difficulty**: easy to moderate: a good coupling can be made from 3D-printed bodies with pressed-in or glued steel balls, dowel pins and magnets, with no machining; the hard part is getting clean, hard contact surfaces and enough preload, and very high precision needs hardened, ground or ceramic parts

### Making it

- **processes**: 
  - 3D print (FDM): bodies, ball holders and groove holders with pockets for steel balls, dowel pins and magnets
  - 3D print (resin): stiffer, more accurate bodies for optical mounts (nickw's tutorial includes an SLA version)
  - off-the-shelf part: bearing balls, dowel pins, ground rods, ball-ended screws, magnets; ready-made kinematic bases for optics; tool-changer tool plates
  - laser cut: aluminium plates that clamp pairs of steel dowel pins as V-grooves (e.g. Voron 2.4 kinematic bed mounts)
  - CNC: machined V-grooves, cones and flats in metal
- **print_in_place**: no: the printed parts hold separately added steel balls, dowel pins and magnets; all-plastic contacts wear and creep
- **making_tips_3d_printing**: Do not let plastic be the contact surface for anything loaded: print the two bodies and press or glue in hard steel parts, so the six contact points are steel on steel. The easy way to make a precise V-groove is two parallel steel dowel pins (or ground rods) side by side with a gap, and the ball touches both; E3D's ToolChanger makes its 3-groove coupling from dowel pins and the Voron 2.4 laser-cut kinematic bed mount clamps steel dowel pins between aluminium plates. Use precision bearing balls or ball-ended screws; Henry Quach's home-made mount used 3/8 in stainless balls on 3/16 in stainless cylinders in 3D-printed bodies and measured about 47 arcseconds angular repeatability. Layout: put the three grooves 120 degrees apart around a circle and point them at the centre (Maxwell); aim for contact at about 45 degrees for balanced stiffness, and make the triangle as large as the part allows so it resists tipping (Slocum). Quach's design notes: use a large V angle and the largest practical balls and cylinders, choose hard, corrosion-resistant steel, keep the contacts clean (skin oil and corrosion spoil repeatability), and print thick parts with more than 30% infill so the plastic does not flex or yield. Preload: embed neodymium magnets beside the balls (glue them, and check all poles match before gluing), or use springs pulling the parts together; magnets suit light parts (Slocum), springs or a lock suit heavy or moving parts. Heat: for heated-bed mounts use high-temperature plastics such as ABS, PC or nylon (Hathaway's printable magnetic bed mounts), and remember the magnets weaken with heat. Accuracy of pocket positions matters less than you might think: the coupling still finds one repeatable position, and Slocum notes kinematic couplings are often two to three times more accurate than their parts. Try it first with the printable BYU 'Pocket Kinematic Coupling' kit or nickw's 'An Introduction to Kinematic Coupling' models.
- **off_the_shelf_parts**: Precision bearing balls (chrome steel, 440C stainless, silicon nitride ceramic), ball-ended screws / spherical-head adjusting screws, hardened ground dowel pins, ground rods or drill rod, vee blocks, 'canoe balls' (industrial), neodymium disc magnets for preload, extension springs, heat-set inserts and set screws; ready-made optical kinematic bases (magnetic, ball-and-groove); tool-changer tool plates and carriages (E3D ToolChanger, Jubilee, Bondtech INDX); kinematic bed-mount kits for Voron and similar printers.
- **rules_of_thumb**: 
  - Exact constraint: use exactly six contact points for the six degrees of freedom, e.g. three balls in three V-grooves (2+2+2) or a dimple, groove and flat (3+2+1); more contacts over-constrain the part and can bend it, for example when it expands with heat (Wikipedia, https://en.wikipedia.org/wiki/Kinematic_coupling; Slocum 2010, author's manuscript pp. 2-4, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Standard layout: grooves spaced 120 degrees apart on a circle (the coupling diameter), balls contacting at 45 degrees for balanced stiffness in all directions, and the normals to the contact-force planes bisecting the angles of the triangle joining the balls; for stability each ball/groove's instant centre must lie outside the coupling triangle (Slocum 2010, pp. 6 and 8, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Preload is one of the most important parameters for repeatability: it must be high, repeatable and must not deform the rest of the structure; bolts compressing springs for heavy fixtures, magnets for lightly loaded instruments (Slocum 2010, p. 9, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Contact load limits: at 1.3 GPa maximum contact pressure, a 25 mm stainless half-sphere carries 111 N on a 25 mm cylinder but 229 N in a V (4.7 µm deflection), and a 250 mm sphere in a V carries 16,160 N; bigger contact radii carry much more (Slocum 2010, p. 8, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Materials and wear: heavily loaded steel ball/steel groove couplings start sub-micron but drift to about ten microns after several hundred cycles as fretting appears, so steel suits low-cycle use; silicon nitride on steel reached 50 nm; use corrosion-resistant stainless, carbide or ceramic for high cycles (Slocum 2010, p. 5, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Cheap versions still beat pins: sheet-metal V-grooves give repeatability of tens of microns (Slocum 2010, p. 10), a 3-2-1 fixture about 3-5 microns (p. 3), and a prototype with three small plastic hemispheres in wooden grooves was an order of magnitude more repeatable than the production wafer-pod locator it replaced (p. 15) (https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Tool-changer example: E3D's kinematic tool coupling, preloaded by a sprung bayonet cam-lock, picks and drops tools with better than 5 µm repeatability (E3D, https://e3d-online.com/blogs/news/research-and-development-motion-system-and-tool-changer); Bondtech says its Maxwell-coupled INDX tools mean 'you calibrate your tool offsets once' (https://raw.githubusercontent.com/BondtechAB/INDX/main/README.md).
  - Heated beds grow: aluminium expands about 24 µm/m·K, so a 300 mm bed grows about 0.576 mm from 25 °C to 105 °C, which a kinematic mount absorbs without side forces (Rehorst, https://drmrehorst.blogspot.com/2017/07/ultra-megamax-dominator-3d-printer-bed.html); a Voron 2.4 bed bolted with four tight screws showed about 0.06 mm curvature/tilt on heating (whopping_Voron_mods README, https://raw.githubusercontent.com/tanaes/whopping_Voron_mods/main/kinematic_bed/README.md).
  - Home-made benchmark: 3D-printed bodies with stainless balls and dowel pins, preloaded by the weight of steel optical posts, gave about 47 arcseconds standard deviation in angle (mean deviation about 67 arcseconds) over about 30 replacements, measured with a laser spot 4.4 m away (Henry Quach, https://henryquach.org/kinematic.html).

### When to use it

- **everyday_examples**: 
  - multi-tool 3D printers such as the Prusa XL, E3D ToolChanger and Jubilee, which swap print heads that click back into exactly the same place
  - heated print beds resting on three balls in grooves (kinematic bed mounts on Voron and similar printers)
  - a three-legged stool, which never wobbles because three points always sit firmly (the simplest exact-constraint idea)
  - optical mirror and camera mounts in labs that lift off and drop back without re-aligning
- **when_to_use**: Whenever a part must come off and go back on in exactly the same place without re-measuring: tool heads on tool-changing printers, removable print beds or build plates, swap-out jigs and fixtures, probe and sensor mounts, camera, laser and optics mounts, and modules that must be removed for maintenance. Also when a part changes size with heat but must stay centred and flat, such as a heated bed, because the balls slide along the grooves instead of forcing the plate to bow.
- **when_not_to_use**: Not for heavy or shock loads that could lift or tip it off unless there is a strong clamp or lock; not where the parts must be sealed flat against each other (use a compliant kinematic design or dowel pins plus bolts); not in dirty, gritty places where debris gets onto the contact points. Where simple alignment is enough, dowel pins or a self-centring cone and socket are cheaper; where the part also needs to be joined strongly, combine the coupling with bolts, a toggle clamp or a twist lock. For many-position indexing, use an indexing plunger or a Hirth joint instead.
- **environment_limits**: Handles temperature change well because it lets parts grow about a fixed centre, but printed bodies soften near heated beds (use ABS, PC or nylon there) and magnet preload weakens with heat (neodymium magnets are often rated to about 80 °C). Steel contacts can rust and fret, which ruins repeatability; stainless or ceramic contacts resist this (Slocum). Dust, swarf and oil films on the contacts shift the position. Vibration or knocks can unseat a part held only by gravity or weak magnets, so moving machines use springs or a lock; tool-changer locks and latches wear with use (Jubilee's wedge plate; Prusa notes dry coupler pins can cause pick-up problems).
- **safety_notes**: Magnet or spring preload can snap the parts together and pinch fingers. A bed or tool held only by magnets can fall off if the machine is tipped or turned over (one Voron kinematic-bed designer chose leaf-spring retention so a 2 kg bed could not crash out). Tool-changing printers move tools automatically; keep hands clear of the lock and dock. Small magnets used for preload are dangerous if swallowed.
- **common_failures**: (1) Poor repeatability: dirt, burrs or oil on the balls or grooves, soft plastic contacts that dent, or too little preload; use clean, hard steel or ceramic contacts and enough hold-down force. (2) Part tips or lifts: load acts outside the ball triangle or exceeds the preload; widen the triangle or add a lock. (3) Wear and fretting over many cycles, especially steel on steel under heavy load; use stainless or ceramic balls and lubricate lightly where the maker recommends it (Prusa lubricates the XL's coupler pins). (4) Over-constrained 'kinematic' designs with four or more supports or tight screws that bind or warp with heat; keep to exactly six contacts. (5) Balls or pins working loose in printed pockets; glue or press-fit them and use thick, dense printed parts. (6) Grooves not pointing at the centre, making the coupling unstable or weak in one direction; follow the 120-degree layout.
- **related**: 
  - Self-centring cone and socket (taper locator): centres a part with one tapered contact; simpler but over-constrains if more than one is used
  - Split-part joints with alignment pins (dowel pins): cheap and strong locating, but need clearance, so less repeatable than a kinematic coupling
  - Keying (one-way-only fit, poka-yoke): makes a part fit only one way round, but does not set a precise position
  - Hirth joint (face-spline coupling): many teeth average out errors (elastic averaging) for a stiff, precise joint that can also index to set angles
  - Magnet joint (embedded magnets): often used as the hold-down for a kinematic coupling, but on its own does not locate precisely
  - Quick-release plate (camera plate, dovetail clamp): quick to swap, but relies on a sliding clamp rather than exact contact points
  - Bayonet mount (push-and-twist lock): the kind of twist lock used on tool changers to pull the tool onto its kinematic coupling

### Pictures, videos and models

- **links**: 
  - [Kinematic coupling (Wikipedia)](https://en.wikipedia.org/wiki/Kinematic_coupling): Definition, Kelvin and Maxwell coupling diagrams, exact-constraint theory and links to MIT's kinematic couplings site *(licence: text CC BY-SA 4.0; images per file)*
  - [Maxwell kinematic coupling.png (Wikimedia Commons, MichaelFrey)](https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png): Three red spherical surfaces resting in three green V-grooves: the Maxwell three-groove coupling *(licence: CC BY-SA 4.0)*
  - [Kelvin Kinematic Coupling.png (Wikimedia Commons, Imminent77)](https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png): CAD drawing of a Kelvin coupling: one ball in a three-sided dimple, one in a V-groove and one on a flat (a Maxwell version by the same author is 'Maxwell Kinematic Coupling.png') *(licence: CC BY-SA 4.0)*
  - [3D Printed Kinematic Coupling Proof of Concept (Sonya Vasquez, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=cfSHss5j5KU): Video demonstration of a 3D-printed kinematic coupling (linked from the Jubilee tool-changer wiki's 'Locating Tools' page) *(licence: link only)*
  - [Locating Tools (Jubilee wiki)](https://jubilee3d.com/index.php?title=Locating_Tools): Plain explanation of how Jubilee's tool plates use a Maxwell kinematic coupling (tool balls on carriage pins) to return tools to the same position, with links to further references; the companion page 'The Remote Elastic Lock' explains the twist lock that preloads it *(licence: CC BY (wiki content, unless otherwise noted))*
- **make_it_yourself**: 
  - [Pocket Kinematic Coupling by BYU CMR (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1493826-pocket-kinematic-coupling): Pocket-sized modular kinematic coupling kit from BYU's Compliant Mechanisms and Robotics group for building and testing coupling designs in seconds; inspired by a model in Slocum's lectures *(licence: CC BY-NC)*
  - [3D Printed: An Introduction to Kinematic Coupling (nickw, Pinshape)](https://pinshape.com/items/36874-3d-printed-an-introduction-to-kinematic-coupling): Three-lesson printable tutorial: Maxwell and Kelvin test couplings held together by magnets with stainless steel balls and dowel pins, then an FDM and an SLA kinematic optics mount *(licence: CC BY)*
  - [Laser cut kinematic bed mounts (whopping_Voron_mods, GitHub; README read via raw.githubusercontent.com)](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed): Maxwell-style kinematic bed mount for the Voron 2.4 made from laser-cut aluminium and steel dowel pins with leaf-spring preload, with theory, FEA, before-and-after bed meshes, CAD and DXFs *(licence: GPL v3 (repository licence))*
  - [Kinematic Couplings Tools Repository (MIT Precision Engineering Research Group, A. Slocum)](http://pergatory.mit.edu/kinematiccouplings/html/tools.html): Free Excel design spreadsheets for three-groove kinematic couplings (Kinematic_Coupling_3Groove_Design) and Hertz contact stress *(licence: link only)*
  - [E3D ToolChanger (GitHub; README read via raw.githubusercontent.com)](https://github.com/e3donline/ToolChanger): STEP, STL, DXF and PDF files for E3D's open tool plate and carriage, whose tools locate on a dowel-pin kinematic coupling *(licence: GPL v3)*
  - [Kinematic Bed Mounts by Michael Hathaway (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1057179-kinematic-bed-mounts): Printable magnetic bed mounts with a dimple and U-groove holding 9-10 mm balls, designed for the Ender 5; print in ABS, PC or nylon *(licence: CC BY-NC-SA)*
- **diagram_idea**: Top view of a round base with three V-grooves at 120 degrees all pointing at the centre, and three balls on the underside of a lid dropping into them; small dots mark the two contact points in each groove (six in total), and a second frame shows the lid heated and slightly larger, with the balls slid outward along their grooves while a cross at the centre stays in the same place.
- **sources**: 
  - https://en.wikipedia.org/wiki/Kinematic_coupling (read as raw wikitext)
  - https://commons.wikimedia.org/wiki/File:Maxwell_kinematic_coupling.png
  - https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png
  - https://commons.wikimedia.org/wiki/File:Maxwell_Kinematic_Coupling.png
  - https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf (Slocum, A., 'Kinematic couplings: A review of design principles and applications', Int. J. Machine Tools and Manufacture 50(4), 2010, 310-327; MIT open-access author's manuscript, CC BY-NC-SA 3.0)
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

## 115 Self-centring cone and socket (taper locator)

*locating & alignment.* A cone or tapered pin sliding into a matching socket, which guides two parts into line and centres them as they come together

### What it is

- **plain_name**: A pointed or cone-shaped peg that slides into a matching funnel-shaped hole, so that even if you start a little off-centre the slope steers the two parts into exactly the right place as you push them together
- **term**: Self-centring taper locator (cone and socket; tapered or cone locating pin with a lead-in)
- **aliases**: 
  - cone locator pin, cone-head locating pin, tapered locating pin (Carr Lane and McMaster-Carr catalogue names; McMaster filters locating pins by head type: cone, diamond, round, tapered)
  - bullet-nose pin, bullet-nose locating pin (Carr Lane)
  - centring cone / centering cone (e.g. filament-spool and router-base centring cones on Printables)
  - taper fit, conical fit, tapered joint, conical fit assembly (Creitaru and Grigore 2011)
  - machine taper, Morse taper, self-holding taper, self-releasing (steep, 7/24) taper (Wikipedia 'Machine taper')
  - lead-in, lead-in chamfer, chamfered pin and hole (design-for-assembly term for a short cone on the end of a pin or the mouth of a hole)
  - probe and drogue, docking cone, plug-in funnel (spacecraft docking and connector terms)
  - taper pin (a separate, slightly tapered steel pin driven into a reamed hole to line two parts up; Wikipedia 'Taper pin')
  - conical seat, e.g. 'lug-centric' conical wheel nuts (Wikipedia 'Lug nut')
  - standard taper (ST) ground-glass joint; Luer taper / Luer slip (tapered fits that also seal)
- **family**: locating & alignment
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A cone on one part slides into a matching cone-shaped socket on the other, and the sloping walls push the parts sideways into line so they end up exactly centred on each other.
- **complexity**: A few parts, often just two: a male cone (a cone-tipped or bullet-nosed pin, or a tapered shank) and a female socket (a conical hole, funnel, countersink or bushing). Industrial versions add a hardened bushing pressed into the second part and often a second, relieved 'diamond' pin to stop the parts turning (Carr Lane). Something else must usually hold the parts together: gravity, a clamp, a screw or drawbar, a latch or magnet, or the friction of a very shallow 'self-holding' taper (Wikipedia 'Machine taper').
- **how_it_works**: When the cone meets the socket off-centre, it touches one side first; because that wall is sloped, pushing the parts together makes a sideways force that slides the cone towards the middle (Carr Lane: cone locator pins 'compensate for considerable misalignment'; CTE magazine: contact with the tapered nose 'produces a force that tends to straighten and center the holder'). When the cone is fully seated its sloping faces touch all round, so there is no gap left for play and the part is centred and set at a fixed depth (Wikipedia 'Machine taper'). The angle decides what happens next: a shallow taper (a Morse taper is about 1.5 degrees per side) wedges tight and holds by friction, while a steeper one (the 7/24 'steep taper', about 16.6 degrees included) centres the parts but lets go easily and needs a drawbar or clamp to stay in (Wikipedia 'Machine taper'; Creitaru and Grigore 2011). A round cone does not stop the parts turning about its own axis, so a second pin, a flat or a key is added when rotation matters.

### Finder attributes

- **job**: 
  - line parts up exactly: centres one part on another and sets how deep it sits, even when you start slightly off
  - join and hold: only when the taper is shallow enough to wedge tight by friction (self-holding tapers such as the Morse taper), or when combined with a clamp, screw, latch or magnet
- **motion**: none once seated. While engaging, the parts slide along the axis and the slope shifts them sideways into line.
- **degrees_of_freedom**: About 1 when fully seated and pressed together: a single round cone stops sideways movement, tilting and going deeper, but the parts can still turn about the cone's axis, and they can be pulled apart unless the taper is self-holding or clamped. Adding a second off-centre pin (usually a relieved 'diamond' pin) or a key removes the turning, giving 0 (Carr Lane bullet-nose pins).
- **special_behaviour**: 
  - self-aligning or self-centring: the sloped walls turn a push along the axis into a sideways push that slides the parts into line, so they centre themselves as they close (Carr Lane; CTE magazine)
  - self-locking (holds under load, won't back-drive): only for shallow 'self-holding' tapers, which wedge together and stay put by friction until knocked apart with a wedge called a drift (Wikipedia 'Machine taper'; Newman Tools)
  - quick-release: steep 'self-releasing' tapers (7/24) centre accurately but come apart freely once the clamp or drawbar is released, which is why they are used for fast tool changes (Wikipedia 'Machine taper'; CTE magazine)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the cone sitting in its socket stops sideways movement and sets the depth
  - friction or clamping (force-fit): self-holding tapers such as the Morse taper, Luer slip syringe tips and ground-glass joints stay together by friction between the cones (Wikipedia 'Machine taper', 'Luer taper', 'Ground glass joint'); steep tapers need a separate clamp or drawbar
  - not a holding joint (it moves or passes on motion): a plain locating cone only positions the parts, and something else (gravity, screws, a latch, magnets) holds them together
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for locating cones and steep self-releasing tapers (just lift or unclamp); removable for self-holding tapers, which need a drift, ejector or a sharp tap to break them free (Wikipedia 'Machine taper'; Newman Tools); ground-glass joints can seize and need solvent, heat or cold to free them (Wikipedia 'Ground glass joint').
- **tools_needed**: none to use a locating cone. A drift (wedge) or ejector to release a self-holding machine taper (Wikipedia 'Machine taper'); a taper-pin reamer to prepare holes for steel taper pins (Wikipedia 'Taper pin'); a press or bore to fit industrial cone locators and their bushings, whose shank and bushing outside diameters match so both holes can be bored at once (Carr Lane).
- **seal**: none for a locating cone. Precision tapers can seal: Luer slip fittings on syringes are leak-free by friction between the tapers (watertight), and greased ground-glass laboratory joints give a good seal (airtight) (Wikipedia 'Luer taper', 'Ground glass joint'). The seal comes from two accurately matched, smooth cone surfaces pressed together.
- **load**: Light to heavy depending on material and size. Strong against sideways (shear) loads and against pushing further in, because the cone seats on its sloped faces. Weak against pulling apart unless it is a self-holding taper or clamped. A round cone gives no resistance to twisting except friction: self-holding tapers transmit turning force by friction (Newman Tools), but a plain locator needs a second pin or key.
- **adjustable**: no: the cone sets one fixed centred position. The seating depth changes slightly if either cone is made a little too big or too small.
- **play_and_precision**: none when seated: the cones touch all round, so a taper removes play instead of needing a clearance gap, and returns to the same place very repeatably (Wikipedia 'Machine taper': tools are 'precisely located both concentrically and axially'). Industrial cone locators are rated 'medium-accuracy' because they are designed to catch large starting errors (Carr Lane). Tolerates sideways offset up to about the radius of the cone's mouth and some tilt while engaging; size errors show up as a change in seating depth rather than as looseness. Two rigid cones on the same part will bind if their spacing doesn't match exactly, so use one cone plus a relieved or slotted second locator (Carr Lane).
- **access_needed**: not applicable: the parts are simply pushed together along the cone's axis. Self-holding machine tapers need access to a drift slot or ejector to get them apart (Wikipedia 'Machine taper').
- **materials**: Hardened steel pins with steel bushings for fixtures (Carr Lane); steel for machine tapers; glass for laboratory joints and plastic for Luer fittings (Wikipedia). For home-made locators any printable plastic works: smooth, slippery PLA or PETG centre best, while rubbery TPU grips and stops the cone sliding into the centre (Printables 'Universal Spool Centering Cone', STORM DESIGN). *(unverified parts omitted)*
- **maker_difficulty**: easy: a cone and matching conical hole print well and centre reliably with a generous clearance. Hard only if you need a precision self-holding taper, which has to be ground or reamed accurately, so buy a standard Morse-taper part or taper pin instead.

### Making it

- **processes**: 
  - 3D print (FDM): cones and conical sockets print well standing upright; the most common home approach (Printables centring-cone models)
  - CNC: lathe taper turning or a tapered reamer for accurate male and female cones; drilling and countersinking for simple lead-in cones
  - off-the-shelf part: cone locator pins and bushings, bullet-nose pins, taper pins and reamers, Morse-taper arbors (Carr Lane; McMaster-Carr; Wikipedia 'Taper pin') *(unverified parts omitted)*
- **print_in_place**: no: the cone and socket are separate parts that are meant to come apart and go back together.
- **making_tips_3d_printing**: 1) Print cones and conical holes with their axis vertical so every layer is a true circle; the sloped face then shows fine stair-steps, which are smaller on steep-sided (shallow-angle) cones. Check the CAD model has enough facets, because a low-polygon 'circle' prints as a polygon (Prusa 'Modeling with 3D printing in mind'). Variable layer height smooths the slope (Prusa). 2) Overhangs: a cone pointing up needs no support. A conical socket opening downwards is an overhang; keep each wall within about 45 degrees of vertical (Hubs: overhangs print up to about 45 degrees; Prusa: 45-60 degrees) so no support is needed. 3) Choose the angle for the job: a slimmer cone centres more precisely and more easily, a wider one catches bigger starting errors. One designer threw away several spool-centring cones until he made the cone angle smaller, after which 'centering is now simple and works the first time' (Printables 'Universal Spool Centering Cone', STORM DESIGN). If you do not want the parts to stick, keep the half-angle well above the friction angle of the material (see rules of thumb), because shallow cones wedge tight. 4) Deliberately tight fits: AON3D suggests sloping a diameter by about 2 degrees and adding 0.2 mm crush ribs, so the part slides in easily and tightens only at the end. 5) Clearance: a plain locator can be modelled with zero clearance on the cone because it simply seats a little deeper or shallower; any cylindrical part next to the cone still needs at least 0.3 mm clearance, and FDM parts are only accurate to about 0.2 mm (Prusa). 6) Keep the seam and blobs off the sliding faces: set the Z-seam to the back or into a recess; one router-centring cone adds recesses 'for keeping seams away from faces that need to be smooth' (Printables 'Palm Router Centering Cone Tool', Vincent). 7) Material: use smooth, slippery PLA or PETG, not TPU, which grips and stops the cone sliding into the centre (Printables 'Universal Spool Centering Cone'). 8) Elephant's foot: add a 45-degree chamfer to edges touching the build plate so the first layers don't bulge and jam the fit (Hubs). 9) Instead of thin printed pins, which are weak under about 5 mm diameter (Hubs), use chamfered pins and holes or chamfered fins and slots; chamfers let the features print in several orientations and guide the parts together (Hackaday on Slant 3D's 'Alternative to Pins and Holes'). 10) If you need two locators on one part, make only one a full cone and let the second locate in one direction only (a slot or relieved pin) so the parts do not bind (Carr Lane).
- **off_the_shelf_parts**: Search supplier catalogues for: 'cone locator pins' with matching 'mating bushings' (Carr Lane); 'bullet-nose locating pins' in 'round' and 'diamond' versions (Carr Lane); 'locating pins' by head type cone, diamond, round or tapered, and 'slotted bushings' that stop alignment pins binding (McMaster-Carr); 'taper pins' (1:50 metric, 1:48 inch) with 'taper pin reamers' (Wikipedia 'Taper pin'); 'Morse taper' (MT1, MT2...) arbors, sleeves and drifts (Wikipedia 'Machine taper'); 'conical seat lug nuts' (Wikipedia 'Lug nut'); 'Luer slip' and 'Luer lock' fittings (Wikipedia 'Luer taper').
- **rules_of_thumb**: 
  - Self-holding or self-releasing: a taper locks by friction when its half-angle is smaller than the friction angle (arctan of the friction coefficient); the paper gives the limit as full angle alpha < 2 x arctan(mu) and suggests a safety factor of 1.2-3 above it if the joint must not stick (Creitaru and Grigore, 'Tribological considerations regarding the functional domain determination of the conical fit assembly', Machine Design vol. 3 no. 3, 2011).
  - The Morse taper's angle is 'typically 1.49 degrees' per side (about 3 degrees included, roughly 1:20) and it is self-holding; the 7/24 'steep taper' (3.5 in per foot, 16.59 degrees included) is self-releasing and needs a drawbar (Wikipedia 'Machine taper'; CTE magazine 'Understanding tapered spindle connections').
  - Self-holding tapers are 'usually 2-3 degrees included angle' (Newman Tools 'Self Holding Tapers').
  - Model engineers treat 3.5 in per foot (about 8 degrees per side) as a reliably self-releasing taper and quote 15-20 degrees full angle as a typical range for a taper that locates without locking (Model Engineer forum 'What taper angle to use?'; forum opinion, not a standard).
  - Conical wheel-nut seats are normally 60 degrees (45 degrees on some racing wheels) and centre the wheel on the axle as the nuts are tightened (Wikipedia 'Lug nut').
  - Other standard tapers for comparison: Luer fittings 6 percent (diameter change per length, not 6 degrees); laboratory ground-glass joints 1:10; metric taper pins 1:50 and inch taper pins 1:48 (Wikipedia 'Luer taper', 'Ground glass joint', 'Taper pin').
  - Locate from two holes with one round pin and one relieved 'diamond' pin, which locates in only one direction, so the part does not bind (Carr Lane 'Bullet-Nose Pins').
  - FDM parts are accurate to about 0.2 mm; start movable fits at 0.3 mm or more; overhangs print cleanly at 45-60 degrees (Prusa 'Modeling with 3D printing in mind'). Overhangs up to about 45 degrees need no support (Hubs 'How to design parts for FDM 3D printing').
  - For a tight printed fit: slope one diameter by about 2 degrees and add 0.2 mm vertical crush ribs (AON3D 'Engineering Fits: How to Design for 3D Printed Assemblies').
  - Gridfinity bins drop into their baseplate on slanted, stepped walls with a 0.25 mm gap on every side, which is enough for them to self-centre (Printables 'Gridfinity Specification', grizzie17).

### When to use it

- **everyday_examples**: 
  - Car wheel nuts with cone-shaped ends that pull the wheel into the centre as they are tightened (Wikipedia 'Lug nut')
  - A drill chuck or drill bit pushed into a lathe tailstock or drill press on a Morse taper (Wikipedia 'Machine taper')
  - A syringe tip pushed into a needle hub (Luer slip taper) (Wikipedia 'Luer taper')
  - Stackable storage bins (Gridfinity) whose chamfered feet drop into a baseplate grid, and filament-spool centring cones (Printables)
- **when_to_use**: Use a cone and socket when two parts must go back together in exactly the same place again and again, especially when you can't see what you are doing, the parts are heavy or come together at an angle, or a robot or machine puts them together: tool changers, removable heads and covers, stacking modules, docking stations, fixtures and jigs (Carr Lane: 'quick assembly of two fixture pieces'; arXiv 2603.04760 self-aligning tool changer). Use a shallow self-holding taper when you want the fit itself to grip, as in machine tools and syringes. A taper is also a good choice in 3D printing because it removes play without needing an exact clearance: the part just sits a little deeper or shallower.
- **when_not_to_use**: Don't rely on a round cone alone to stop parts turning: add a second pin, a flat or a key (see Keying and Locating pins and hole-and-slot). Don't use two full cones on the same part unless their spacing is exact; use one cone plus a slot or diamond pin (Carr Lane). Don't use a shallow taper where the parts must separate easily, because it can wedge and stick (Creitaru and Grigore 2011); use a steeper cone or a clamp instead. For the very best repeatability without over-constraint, use a kinematic coupling (balls in a cone, a V-groove and a flat) (Wikipedia 'Kinematic coupling'). For joints that must carry large pull-apart loads, add screws, latches or a bayonet; the cone only locates.
- **environment_limits**: Dirt, chips and dents stop tapers seating: 'All machine tapers are sensitive to chips, nicks (dents), and dirt' and then neither locate accurately nor hold reliably (Wikipedia 'Machine taper'). Thermal expansion changes the fit: a stuck ground-glass joint can be freed by heating the outer part or cooling the inner one, and grease can be washed out by solvents, making glass joints seize (Wikipedia 'Ground glass joint'). Printed plastic cones soften with heat: in CNC Kitchen's test PLA began to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C. *(unverified parts omitted)*
- **safety_notes**: Don't force a seized glass taper joint, which can break the glass; free it with solvent, gentle warming or cooling instead (Wikipedia 'Ground glass joint' describes these methods). *(unverified parts omitted)*
- **common_failures**: Cone angle wrong for the job: too wide and it doesn't slide into the centre (the spool-cone designer's first cones 'all ended up in the trash'), too shallow and it wedges and sticks (Printables 'Universal Spool Centering Cone'; Creitaru and Grigore 2011). Over-constraint: two cones or two round pins on one part bind if the spacing is slightly off (Carr Lane). Dirt, chips or dents on the cone faces spoil the location and grip (Wikipedia 'Machine taper'). Grippy material such as TPU stops the parts sliding into the centre (Printables 'Universal Spool Centering Cone'). 3D-printing defects: Z-seam blobs, supports or elephant's foot on the sliding faces (Printables 'Palm Router Centering Cone Tool'; Hubs). Tilted entry and jamming: a pin that starts off-centre can twist and wedge in a straight hole instead of sliding in, which lead-in cones and chamfers help prevent (Wikipedia 'Remote center compliance'). Parts can still turn about the axis if nothing else stops them.
- **related**: 
  - Locating pins and hole-and-slot: straight pins with chamfered tips; more precise sideways fit but less able to catch a bad start
  - Kinematic coupling (balls in V-grooves): three balls in a cone-shaped hole, a V-groove and a flat locate a part in all six directions exactly once, giving very high repeatability without binding
  - Keying (one-way-only fit): uneven pins or notches that let parts go together only the right way round; often added to a cone locator to stop rotation
  - Elastic averaging (many-feature alignment): many small, slightly springy features share the job of locating
  - Split-part joints for large prints (alignment pins and dowels): pegs and holes, often chamfered, used to line up glued pieces
  - Bayonet mount and quick-release plate (dovetail clamp): quick-release joints that often include a centring spigot or cone
  - Morse taper, Luer taper and ground-glass joint: standard self-holding tapers that locate, grip and sometimes seal
  - Taper pin and dowel pin: separate pins driven into holes in both parts to fix their alignment

### Pictures, videos and models

- **links**: 
  - [Morse Taper No 2 (Wikimedia Commons, by DerrickOswald)](https://commons.wikimedia.org/wiki/File:Morse_Taper_No_2.jpg): Photo of a No. 2 Morse taper shank, the classic self-holding machine taper *(licence: Public domain (released by the author))*
  - [Original Soyuz probe and drogue docking system (Wikimedia Commons, from NASA RP-1357 'Mir Hardware Heritage', D. S. F. Portree)](https://commons.wikimedia.org/wiki/File:RP1357_p9_Original_Soyuz_probe_and_drogue_docking_system.svg): Diagram of a docking probe entering a receiving cone that guides it into a central socket *(licence: Public domain (NASA work))*
  - [Cone Locator Pins (Carr Lane Manufacturing)](https://www.carrlane.com/product/locating-pins/locating-pins/cone-locator-pins): Product photos and drawings of cone-tipped locating pins and their mating bushings used to align two fixture pieces *(licence: link only)*
  - [Morse Taper Basics for Woodturners (YouTube, Mike Peace Woodturning)](https://www.youtube.com/watch?v=1yOzPAO4_ds): Video showing how Morse-taper accessories seat in a lathe spindle and tailstock and how they are removed (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Alternative to Pins and Holes: Design for Mass Production 3D Printing (YouTube, Slant 3D)](https://www.youtube.com/watch?v=xog9YlMt9UU): Video on chamfered pins, holes, fins and slots that guide 3D-printed parts together (title checked via YouTube oEmbed; summarised by Hackaday) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Tapered indexing pin (georgmierau, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1720433-tapered-indexing-pin): A simple tapered locating pin, 30 mm tall, 6 mm at the top and 4 mm at the bottom, with an M3 thread to screw into a part. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Universal Spool Centering Cone for Bambu Lab Filament Spool Switcher & Winder (STORM DESIGN, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/752030-universal-spool-centering-cone-for-bambu-lab-filam): A slim centring cone that centres filament spools with 44-57 mm holes on an axle; the notes explain why a smaller cone angle and slippery PLA or PETG work better than a wide cone or TPU. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Palm Router Centering Cone Tool (Vincent, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1130539-palm-router-centering-cone-tool): A cone that fits on a 1/4 inch pin in the router collet and centres the base plate opening (32-44 mm) before the screws are tightened; designed with recesses to keep print seams off the centring faces. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Gridfinity Specification (grizzie17, Printables)](https://www.printables.com/model/417152-gridfinity-specification): An illustrated write-up of the Gridfinity storage standard: 42 x 42 mm grid, slanted stepped baseplate walls and a 0.25 mm gap that lets bins drop in and self-centre. URL found in search results; details read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [BOSL2 shapes3d.scad: cyl() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/shapes3d.scad): Makes cylinders and cones (different end radii) with chamfers at a chosen angle, including negative (outward) chamfers for funnel-shaped hole mouths, for modelling tapered pins and matching sockets *(licence: BSD 2-Clause)*
- **diagram_idea**: Three side-view frames of a cone-tipped pin coming down off-centre into a funnel-shaped hole: first contact on one side, an arrow showing the slope pushing the part sideways, then the pin fully seated and centred, with a small inset comparing a slim self-holding taper to a wide self-releasing one.
- **sources**: 
  - https://www.carrlane.com/product/locating-pins/locating-pins/cone-locator-pins
  - https://www.carrlane.com/product/locating-pins/locating-pins/bullet-nose-pins
  - https://www.mcmaster.com/products/locating-pins/
  - https://ctemag.com/articles/understanding-tapered-spindle-connections/
  - https://en.wikipedia.org/wiki/Machine_taper
  - https://en.wikipedia.org/wiki/Taper_pin
  - https://en.wikipedia.org/wiki/Lug_nut
  - https://en.wikipedia.org/wiki/Luer_taper
  - https://en.wikipedia.org/wiki/Ground_glass_joint
  - https://en.wikipedia.org/wiki/Kinematic_coupling
  - https://en.wikipedia.org/wiki/Remote_center_compliance
  - https://www.newmantools.com/tech/taper.htm
  - http://www.mdesign.ftn.uns.ac.rs/download/v3n3/p10.pdf
  - https://www.model-engineer.co.uk/forums/topic/what-taper-angle-to-use/
  - https://arxiv.org/abs/2603.04760
  - https://hackaday.com/2023/04/29/alternatives-to-pins-and-holes-for-3d-printed-assemblies/
  - https://www.aon3d.com/applications/engineering-fits-how-to-design-for-3d-printed-assemblies/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Morse_Taper_No_2.jpg
  - https://commons.wikimedia.org/wiki/File:RP1357_p9_Original_Soyuz_probe_and_drogue_docking_system.svg
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/shapes3d.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/417152-gridfinity-specification
  - https://www.youtube.com/watch?v=1yOzPAO4_ds
  - https://www.youtube.com/watch?v=xog9YlMt9UU

### Other info

- **Fields with unverified parts:** environment_limits, materials, processes, reuse_cycles, safety_notes

## 116 Keying (one-way-only fit, poka-yoke)

*locating & alignment.* Uneven pins, notches, tapers or shapes that let a part go together only the right way round, preventing mistakes

### What it is

- **plain_name**: Deliberately uneven shapes (an extra bump, a notch, one pin bigger or off to one side, a flat on a round shaft) that make two parts fit together only the right way round, so nobody can put them together backwards or plug in the wrong one
- **term**: Keying (polarization; mechanical mistake-proofing, poka-yoke)
- **aliases**: 
  - polarization, polarizing feature, polarized plug or connector (stops a connector being turned the wrong way, e.g. 180 degrees) (Harwin; Wikipedia 'NEMA connector')
  - keyed connector, keyway, key notch, keying feature (Wikipedia 'Electrical connector'; Wikipedia 'DIMM')
  - coding or keying between look-alike connectors, so plug A can't go into socket B (Harwin)
  - poka-yoke (Japanese, roughly 'mistake-proofing'); older name baka-yoke ('fool-proofing') (Wikipedia 'Poka-yoke')
  - mistake-proofing, error-proofing, fool-proofing, idiot-proofing (informal)
  - one-way fit, orientation feature, asymmetric feature, 'emphasized asymmetry' (design-for-assembly term) (HKUST DFA notes after Boothroyd and Dewhurst)
  - pin indexing, pin-index (e.g. the Pin Index Safety System for medical gas cylinders) (Wikipedia)
  - non-interchangeable connectors, misconnection prevention (e.g. ISO 80369 small-bore connectors) (Wikipedia 'Luer taper')
  - offset lugs or offset pins (e.g. BAY15d two-filament car bulbs) (Wikipedia 'Bayonet mount')
  - D-shaft, D-cut or flatted shaft (a flat on a round shaft that lets a knob go on only one way round)
  - not to be confused with a shaft key and keyway, which is a separate small bar that passes turning force from a shaft to a hub
- **family**: locating & alignment
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Keying adds a deliberately lopsided feature, such as a notch, an offset pin, a bigger pin or a flat, to two mating parts so that they fit only in the one correct position and cannot be assembled backwards, upside down or with the wrong partner.
- **complexity**: Single piece or a few parts: usually just a shape moulded, printed or machined into parts that are being joined anyway, e.g. a rib and matching slot, a notch and matching bump, pins and holes in an uneven pattern, a pin of a different size, a D-shaped flat, or a missing pin with a blocked socket hole. Add-on versions use blanking pins or keying plugs pushed into a connector (Harwin).
- **how_it_works**: Most parts that are round, square or evenly spaced will fit in several positions, and people (or machines) will sooner or later pick the wrong one. Keying breaks that symmetry: one part gets a bump, pin or ridge and the other a matching notch, hole or groove, placed so that they only line up in the correct position; in every other position the bump hits solid material and the parts won't go together (Wikipedia 'Electrical connector': keying 'prevents mating in an incorrect orientation'). The same trick can stop the wrong partner being fitted: each variant gets its key in a different place, as with the different notch positions on DDR and DDR2 memory sticks or the unique pin positions for each medical gas cylinder (Wikipedia 'DIMM', 'Pin Index Safety System'). In poka-yoke terms this is a 'control' device that physically prevents the mistake, rather than a 'warning' device such as a label or colour that only draws attention to it (Wikipedia 'Poka-yoke').

### Finder attributes

- **job**: 
  - line parts up exactly: allows only the one correct orientation, and often only the correct partner
  - join and hold: only as part of another joint (a connector, bayonet, peg joint or knob) that it makes foolproof; the key itself doesn't hold anything
- **motion**: none: it is a static shape. During assembly the parts slide or turn together only in the permitted way.
- **degrees_of_freedom**: Not a separate joint: keying doesn't take away a direction of movement so much as it removes the wrong choices (for example turning a plug 180 degrees). The joint it belongs to usually ends up with 0 degrees of freedom once assembled; a flat on a D-shaft also stops the knob slipping round the shaft.
- **special_behaviour**: none of the listed behaviours exactly: its special job is mistake-proofing (the part cannot be fitted wrongly), which the list doesn't include *(unverified parts omitted)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the key blocks wrong positions by shape
  - not a holding joint (it moves or passes on motion): the key only decides how parts go together; clips, screws, friction or a latch hold them
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: keying doesn't change how easily the parts come apart; that depends on the joint it is part of (plug, bayonet, screwed joint and so on). Add-on keying plugs and blanking pins are usually pressed in to stay (Harwin).
- **reuse_cycles**: effectively unlimited if the key isn't forced; plastic keys can be worn, broken or deliberately removed (Wikipedia 'Pin Index Safety System': the system can be bypassed if pins are 'removed, damaged or corroded')
- **tools_needed**: none to use. Adding keying to plain pin headers: pliers or cutters to remove one pin and a blanking pin to block the matching socket hole (Harwin).
- **seal**: none: keying doesn't seal. (In the Pin Index system, the pins must line up before the cylinder can press on its sealing washer, so the wrong cylinder won't seal) (Wikipedia 'Pin Index Safety System').
- **load**: light: keys are meant to guide, not to carry load. A small plastic key can be broken or bent if someone forces the part the wrong way; the pins of the Pin Index system are 4 mm in diameter by 6 mm long (Wikipedia 'Pin Index Safety System'). *(unverified parts omitted)*
- **adjustable**: usually no. Some connector families have several built-in keying positions to choose from, or accept add-on keys, so look-alike connectors can be given different codes (Harwin).
- **play_and_precision**: The key only needs to block the wrong positions, so it can have more clearance than the locating features; it doesn't have to set the position accurately. It must still be big enough that the difference between right and wrong is far larger than any looseness or manufacturing error, or the wrong way may be forced in (design-for-assembly advice to 'emphasize asymmetry', HKUST notes).
- **access_needed**: not applicable: the key is built into the mating faces
- **materials**: Any: the key is made in the same material as the part (moulded plastic for connectors and memory sticks, brass or steel for gas-cylinder pins and valves, printed PLA, PETG or ABS for home-made parts). *(unverified parts omitted)*
- **maker_difficulty**: easy: add an offset pin, a bigger pin, a notch or a flat in CAD before printing; no extra parts needed

### Making it

- **processes**: 
  - 3D print (FDM): add the key in CAD, or place slicer cut connectors off-centre (PrusaSlicer Cut tool lets you click connectors anywhere on the cut face)
  - CNC: uneven hole patterns, flats on shafts and keyed slots
  - off-the-shelf part: keyed or polarized connectors, D-shaft components, blanking pins and keying plugs (Harwin) *(unverified parts omitted)*
- **print_in_place**: no: keying is a feature of separate parts that are assembled later.
- **making_tips_3d_printing**: 1) Break every symmetry, not just one: a square peg still fits four ways and a triangle three ways; use pins at uneven spacing, pins of two different sizes, one round and one square peg, or a single peg placed off-centre (Machine Design: use 'nonsymmetrical hole patterns'). 2) Exaggerate the difference: make the right and wrong options obviously different to the eye and the hand (HKUST DFA notes after Boothroyd and Dewhurst: 'emphasized asymmetry'). FDM parts are only accurate to about 0.2 mm and moving fits need 0.3 mm or more (Prusa), so pins of 5.0 and 5.3 mm are not a reliable key; use sizes that differ by several millimetres, or clearly different shapes. 4) Make keys sturdy: printed pins under about 5 mm diameter are weak and snap off (Hubs), which would defeat the key; chamfered fins and slots are stronger than thin pins and print without support (Hackaday on Slant 3D). 5) Chamfer the key and the entry of its slot so the right way slides in easily (Hackaday on Slant 3D; Hubs recommends a 45-degree chamfer on edges touching the bed to avoid elephant's foot). 6) D-shaped holes for knobs: print the hole vertically for roundness; one parametric D-shaft knob adds chamfers to the inside corners of the shaft relief so it 'should print and fit better' (Printables 'Parametric D-Shaft Knob', darthrax). 7) Split prints: in PrusaSlicer's Cut tool, connectors are placed by clicking on the cut face, so placing pegs unevenly keys the two halves (Prusa 'Cut tool'). 8) Add a visual cue as well (an arrow, dot or text moulded in), because machined-in or printed pictures 'cannot wear off' (Machine Design); this is the 'warning' kind of poka-yoke that backs up the physical key. 9) If orientation really doesn't matter, consider the opposite approach: make the part fully symmetrical so any way is right (HKUST DFA notes; USB-C is reversible, Wikipedia 'USB hardware'). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'polarized connectors' and 'keyed connectors' (Wikipedia 'Electrical connector'); 'blanking pins', 'keying plugs' or 'polarizing keys' for pin headers and sockets (Harwin); 'D-shaft' or 'flatted shaft' potentiometers, rotary encoders and motors with matching 'D-bore' knobs and wheels (Printables D-shaft models); 'bullet-nose round pin' plus 'bullet-nose diamond pin' to locate a part from two holes (Carr Lane); 'offset-lug bayonet bulbs' (e.g. type 1157) (Wikipedia 'Bayonet mount'); 'pin-index yoke' valves for medical gases (Wikipedia 'Pin Index Safety System').
- **rules_of_thumb**: 
  - Design parts that cannot be installed incorrectly: (a) add projections that block wrong assembly; (b) make mating features asymmetrical; (c) or make parts symmetrical so orientation doesn't matter; (d) if two parts can still go together wrongly, make a later part impossible to fit; (e) if all else fails, add assembly markers. Maximise symmetry, or emphasise asymmetry so the right orientation is found faster (HKUST course notes 'Design for Manufacturing/Assembly', after Boothroyd and Dewhurst's Product Design for Assembly).
  - Avoid symmetry when a particular orientation is critical, e.g. with nonsymmetrical hole patterns; give each connector a different number of pins so they 'cannot join others' (Paul Dvorak, 'Poka-Yoke Designs Make Assemblies Mistakeproof', Machine Design, 10 March 1998).
  - Polarization stops a connector pair being mated the wrong way round; keying stops look-alike connector pairs being mated with the wrong partner (Harwin 'What are polarization and keying in connectors?').
  - Medical gas cylinders: two holes in gas-specific positions below the outlet accept pins 4 mm in diameter by 6 mm long on the yoke (e.g. oxygen positions 2 and 5, nitrous oxide 3 and 5) (Wikipedia 'Pin Index Safety System', standard EN ISO 407).
  - Polarized North American plugs: the neutral blade is 7.9 mm (5/16 in) wide, 1.6 mm wider than the live blade, 'so the plug can be inserted only one way'; on three-pin plugs the earth pin enforces polarity (Wikipedia 'NEMA connector').
  - Fuel nozzles: diesel nozzles are about 25 mm and petrol nozzles about 21 mm across, so a diesel nozzle won't fit a petrol filler, but a petrol nozzle still fits a diesel filler; a size key only blocks one direction of mistake (EEK Mechanical).
  - Some two-filament bulbs such as the 1157 have slightly offset lugs so they go in only one way; some special bulbs use 3 pins 120 degrees apart so they only fit their own socket (Wikipedia 'Bayonet mount').
  - Small printed pins under about 5 mm diameter are weak (Hubs 'How to design parts for FDM 3D printing'); FDM accuracy is about 0.2 mm and movable fits start at 0.3 mm (Prusa 'Modeling with 3D printing in mind').

### When to use it

- **everyday_examples**: 
  - A USB-A plug or an HDMI plug, which only goes in one way up (Wikipedia 'USB hardware'; Wikipedia 'Poka-yoke')
  - Computer memory sticks, whose notch is in a different place for each generation so the wrong kind won't fit the slot (Wikipedia 'DIMM')
  - A North American mains plug with one blade wider than the other, or a three-pin plug (Wikipedia 'NEMA connector')
  - Car tail-light bulbs with offset lugs, and petrol-station nozzles of different sizes (Wikipedia 'Bayonet mount'; EEK Mechanical)
- **when_to_use**: Use keying whenever a part could physically go together more than one way but only one way is right, especially when the wrong way would damage something, be dangerous or be hard to spot: battery holders, power and signal connectors, parts with a visible 'front', lids with hinges or labels, split prints that must be glued in the right order, and kits that other people will assemble. Also use it to stop look-alike parts being swapped, by keying each variant differently (Harwin; Wikipedia 'DIMM'; Wikipedia 'Pin Index Safety System'). It costs almost nothing when designed in from the start (Machine Design 1998).
- **when_not_to_use**: Don't key a part when any orientation would work: making it fully symmetrical is even better, because it can't be put in wrongly and needs no thought (HKUST DFA notes; USB-C is reversible, Wikipedia 'USB hardware'). Don't rely on keying where people may force parts or modify them: keys can be broken or removed, so for safety-critical connections add a second check such as different sizes, colours or labels (Wikipedia 'Pin Index Safety System'). Don't make keys so subtle that the right way isn't obvious, or users will keep trying the wrong way first (MacroFab warns against subtle top-bottom differences). Keying doesn't hold or locate precisely by itself: combine it with locating pins, a cone, or a latch.
- **environment_limits**: The key is only as tough as the part: printed plastic keys soften with heat (in CNC Kitchen's test PLA began to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C). Metal keys can corrode: the Pin Index system can be bypassed when pins are corroded (Wikipedia 'Pin Index Safety System'). *(unverified parts omitted)*
- **safety_notes**: Keying is often a safety feature, so never file off, cut away or bypass a key to make something fit; the Pin Index system can be defeated by removed or damaged pins, extra washers, or turning the cylinder upside down on some valves, which can connect the wrong gas (Wikipedia 'Pin Index Safety System'). Misconnections between look-alike medical tubing connectors are a known hazard, which is why non-interchangeable connector standards exist (Wikipedia 'Luer taper', ISO 80369). *(unverified parts omitted)*
- **common_failures**: Key too small or too subtle, so the part can be forced in the wrong way or users can't tell which way is right (HKUST DFA notes; MacroFab). Symmetry not fully broken: a key that stops one wrong position but leaves another (e.g. a part that can still go in upside down) (fiveflute on 'partial symmetry that allows multiple assembly orientations'). Only one direction of mistake blocked, like fuel nozzles that stop diesel in a petrol car but not petrol in a diesel car (EEK Mechanical). Keys broken off, worn, corroded or deliberately removed (Wikipedia 'Pin Index Safety System'). On 3D prints, thin key pins snap along layer lines, and over-extrusion or elephant's foot makes the right way too tight, tempting people to force it (Hubs). *(unverified parts omitted)*
- **related**: 
  - Locating pins and hole-and-slot: set the exact position; placing them unevenly also keys the part
  - Self-centring cone and socket (taper locator): centres parts but lets them turn, so it is often combined with a key
  - Split-part joints for large prints: pegs and dovetails that can be placed unevenly to key the pieces
  - Bayonet mount (push-and-twist lock): often keyed with lugs of different sizes or spacing
  - Shaft key and keyway, splines and D-shafts: pass turning force from a shaft to a hub; a D-flat also sets the knob's angle
  - Interlocks (poka-yoke 'motion-step' devices), e.g. a microwave that won't start with the door open (Wikipedia 'Poka-yoke'): prevent the wrong sequence rather than the wrong fit
  - Colour coding and labels: 'warning' poka-yoke that points out the right way but can't stop the wrong one

### Pictures, videos and models

- **links**: 
  - [Notch position between DDR and DDR2 (Wikimedia Commons, by Jérôme Blum / Wagner51)](https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg): Photo comparing the key notch positions on DDR and DDR2 memory modules, which stop the wrong type being fitted *(licence: CC BY-SA 3.0, CC BY-SA 2.0 FR or GFDL 1.2+ (multi-licensed))*
  - [HDMI-Connector.jpg (Wikimedia Commons, by Evan-Amos)](https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg): Close-up of an HDMI plug, whose uneven trapezoid shape only fits one way up (used as the poka-yoke example on Wikipedia) *(licence: Public domain)*
  - [Pin index dimensions (English Wikipedia file, by Onionmon)](https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG): Technical drawing of the Pin Index Safety System hole and pin positions on a medical gas cylinder valve *(licence: Public domain (released by the author; hosted on English Wikipedia, not yet on Commons))*
  - [What are Polarization and Keying in Connectors? (Harwin blog)](https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors): Illustrations comparing a polarized connector with a keyed one, and how blanking pins key simple pin headers *(licence: link only)*
  - [POKA-YOKE / Mistake Proofing – Concept, History and Approaches explained with examples (YouTube, Quality HUB India)](https://www.youtube.com/watch?v=kqJsiAS5Q5Q): Video explaining poka-yoke with examples of devices that prevent or signal mistakes (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Parametric D-Shaft Knob (darthrax, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1412697-parametric-d-shaft-knob): A parametric knob with a D-shaped bore (default 6 mm shaft, 4.2 mm across the flat) that only fits the shaft one way round, with an editable Onshape model. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [PrusaSlicer Cut tool (free slicer)](https://help.prusa3d.com/article/cut-tool_1779): Cuts a model and adds plug, dowel or snap connectors that you place by clicking on the cut face; placing them unevenly keys the pieces so they only go together one way *(licence: PrusaSlicer is AGPL-3.0 open-source software)*
- **diagram_idea**: Two versions of the same two-part box side by side: on the left four evenly spaced pegs let the lid go on four ways (three shown with a red cross in the 'wrong' positions but still fitting); on the right one peg is moved off the pattern, so only the correct position fits and the wrong ones are blocked with the peg hitting solid plastic.
- **sources**: 
  - https://en.wikipedia.org/wiki/Poka-yoke
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors
  - https://en.wikipedia.org/wiki/Pin_Index_Safety_System
  - https://en.wikipedia.org/wiki/NEMA_connector
  - https://en.wikipedia.org/wiki/DIMM
  - https://en.wikipedia.org/wiki/USB_hardware
  - https://en.wikipedia.org/wiki/Bayonet_mount
  - https://en.wikipedia.org/wiki/Luer_taper
  - https://www.eekmechanical.com/help/diesel-vs-petrol-nozzles
  - http://machinedesign.com/archive/poka-yoke-designs-make-assemblies-mistakeproof
  - https://www.macrofab.com/blog/poka-yoke-improve-pcba-design-process
  - https://www.fiveflute.com/guide/design-for-assembly-dfa-best-practices/
  - https://ieda.ust.hk/dfaculty/ajay/courses/ielm317/lecs/dfm/dfm.pdf
  - https://www.carrlane.com/product/locating-pins/locating-pins/bullet-nose-pins
  - https://help.prusa3d.com/article/cut-tool_1779
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://hackaday.com/2023/04/29/alternatives-to-pins-and-holes-for-3d-printed-assemblies/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg
  - https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg
  - https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG
  - https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/LICENSE
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=kqJsiAS5Q5Q

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, load, making_tips_3d_printing, materials, processes, safety_notes, special_behaviour

## 233 Elastic averaging (many-feature alignment)

*locating & alignment.* Many small springy features (ribs, bumps, teeth) that each flex a little so their errors average out, locating parts accurately and repeatably

### What it is

- **plain_name**: Lots of small springy bumps, ribs, tubes or teeth that all press on the mating part at once; each one bends a little, so the small size and position mistakes in each one cancel out and the part settles in the same accurate spot every time, the way LEGO bricks click together
- **term**: Elastic averaging (elastically averaged coupling or alignment)
- **aliases**: 
  - elastically averaged design, controlled compliance, inexact constraint design (Slocum, FUNdaMENTALs of Design)
  - elastic averaging alignment system, elastically averaged alignment (automotive patents, e.g. GM)
  - elastically averaged coupling; compare 'kinematic coupling' (exact constraint) and 'quasi-kinematic coupling', which combines the two (MIT Precision Engineering Research Group)
  - Hirth coupling, curvic coupling, serrated-tooth circle divider (toothed face couplings that work by elastic averaging; MIT kinematic couplings site; Slocum)
  - many-feature or multi-point alignment, over-constrained alignment with compliant features (descriptive)
- **family**: locating & alignment
- **other_families**: compliant mechanisms & flexures, indexing & detents
- **one_liner**: Elastic averaging locates two parts with many more small springy contact features than strictly needed, so each feature flexes slightly and their individual errors average out, giving a stiff, repeatable fit from loosely made parts.
- **complexity**: A few parts: two mating parts, one or both carrying many compliant locating features (ribs between springy walls, springy fingers, studs in tubes, rows of teeth or pins), plus something that pushes and holds them together (preload from bolts, snaps, a clamp or friction) (Slocum; GM patent US20150052725A1).
- **how_it_works**: A kinematic coupling uses exactly as many contacts as there are directions to stop (six), so it never fights itself. Elastic averaging does the opposite: it deliberately uses dozens of contacts (over-constraint), but makes each one compliant enough to bend a little (Slocum; MIT kinematic couplings site). When the parts are pressed together, every feature deflects elastically to fit, and the part settles where all the small spring forces balance, which is the average of all the feature errors; with random errors the leftover error shrinks roughly with the square root of the number of features (MIT kinematic couplings site; GM patent: Xmin = X/√N). The features must stay springy and never be pushed past their elastic limit, so they spring back and the part returns to the same place each time, and because many compliant members act together the joint as a whole is stiff (Slocum).

### Finder attributes

- **job**: 
  - line parts up exactly: many compliant features average out manufacturing errors so a part goes back to the same place (Slocum; Willoughby)
  - join and hold: the interference of the springy features also grips the parts, as with LEGO bricks or clip-on car trim (Slocum; GM patent)
  - click into set positions: toothed Hirth and curvic couplings index a turret or arm to chosen angles (Slocum; MIT kinematic couplings site)
- **motion**: none: once pushed together the parts are held still; the only movement is the tiny flexing of each feature
- **degrees_of_freedom**: 0 when assembled and preloaded: many more contacts than the six needed remove all six ways of moving (deliberately over-constrained), and the compliance of each feature is what stops them fighting each other (Slocum)
- **special_behaviour**: 
  - self-aligning or self-centring: as the parts are pushed together the springy features centre them automatically, with no measuring or adjustment; GM's patent describes components that align themselves this way (GM patent US20150052725A1; Wikipedia: Hirth joints are self-centring)
  - indexing (clicks into set positions): in toothed face couplings (Hirth, curvic) the teeth let a part be set at any tooth position and locked there accurately (Slocum; MIT kinematic couplings site)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): each feature is a small spring deflected by the mating part (Slocum)
  - shape (the parts interlock; form-fit): ribs, studs, tubes or teeth sit between or inside mating features
  - friction or clamping (force-fit): the features are an interference fit, so friction also resists pulling apart (GM patent); toothed couplings are clamped by bolts or springs (Wikipedia, Hirth joint)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: the features only bend elastically, so the parts can be pulled apart and pushed back together, like LEGO bricks (Slocum; Wikipedia, Lego); bolted toothed couplings are removable with a spanner (Wikipedia, Hirth joint).
- **reuse_cycles**: many times, as long as the features never yield (bend permanently); plastic features wear, fatigue and creep with repeated assembly or long-term preload, so repeatability slowly degrades (Slocum; Hubs snap-fit guide on creep and fatigue in printed plastics).
- **tools_needed**: none for push-together features (studs, ribs, tubes); a screwdriver or spanner when the preload comes from bolts, as in Hirth and curvic couplings (Wikipedia, Hirth joint).
- **seal**: none
- **load**: light to heavy depending on material and size: because load is shared by many members, elastic averaging gives higher stiffness and lower local stress than a kinematic coupling (MIT kinematic couplings site; Willoughby 2005). Steel Hirth and curvic couplings carry very high loads and torque in turbines and machine-tool turrets (Wikipedia, Hirth joint; Slocum). Printed or moulded plastic features are light to medium duty and are strongest when the features share the load evenly; pull-apart strength depends on the interference and friction.
- **adjustable**: no: the position is set by the features' geometry. Toothed face couplings can be re-set to a different tooth angle (indexing) (Wikipedia, Hirth joint).
- **play_and_precision**: No play once preloaded. Repeatability is better than any single feature, improving roughly with the square root of the number of contact points (MIT kinematic couplings site; Slocum), and 'can be nearly as high as in deterministic systems' (Willoughby 2005), although generally not as high as a well-made kinematic coupling (MIT kinematic couplings site). Examples: Willoughby's elastically averaged fibre-optic connector measured about 5 µm repeatability at five times scale, predicting about 0.5 µm at full size (Willoughby 2005); Ford's Duratec engine block used eight pin-and-hole joints, and their elastic averaging gave 4.85 µm realignment, but only with very tight hole tolerances (Slocum, Topic 9). It tolerates misalignment up to what the features can absorb elastically; beyond that they yield or the parts won't go together.
- **access_needed**: not applicable: the parts are pushed together face to face and the features engage by themselves; bolted toothed couplings need access to the bolt.
- **materials**: Injection-moulded plastics (LEGO bricks are ABS; GM uses elastically deformable features on car components) (Wikipedia, Lego; GM patent); ground steel for Hirth and curvic couplings (Wikipedia, Hirth joint; For 3D printing, tough, springy plastics such as PETG, ABS and nylon suit flexing features better than brittle ones (Hubs recommends ABS and nylon for 3D-printed snap fits). *(unverified parts omitted)*
- **maker_difficulty**: moderate: adding many small ribs, bumps or teeth in CAD is easy, but getting the stiffness and interference right needs test prints; too stiff and the parts rock or jam (over-constraint), too soft and the location is sloppy (Slocum).

### Making it

- **processes**: 
  - 3D print (FDM): printed ribs, springy fingers, studs-in-tubes and Hirth-type teeth (see make_it_yourself)
  - 3D print (resin)
  - CNC: ground or milled Hirth and curvic couplings (Wikipedia, Hirth joint)
  - injection moulding (not a maker process, but where most examples come from: LEGO, car trim) (Wikipedia, Lego; GM patent)
  - off-the-shelf part: Hirth / curvic couplings and indexing tables *(unverified parts omitted)*
- **print_in_place**: no: the two mating parts are printed separately, each with its compliant features built in, and then pushed together.
- **making_tips_3d_printing**: 1) Use many small, evenly spread features rather than two or three big ones: the averaging improves roughly with the square root of the number of features (Slocum; GM patent). 2) Make each feature flex, not crush: for example a rigid rib pushed between two thin springy walls (GM patent US20150052725A1), slim cantilever fingers, or LEGO-style studs gripping thin-walled tubes, rather than solid bumps that get shaved off. Crush ribs, which deform permanently, fit well but leave the centre in 'an unpredictable location' (NewScrewdriver; Hackaday). 3) Keep the strain elastic: size the interference so the features deflect without yielding, because a feature that bends permanently no longer averages (Slocum). 4) Print so the flexing features bend within a layer (in the X-Y plane); avoid springy beams built vertically in Z, where layer bonding is weakest (Hubs snap-fit guide). 5) Round the root of each flexing feature: Hubs suggests a fillet radius of at least 0.5 times the base thickness. 6) Use tough, springy material (PETG, ABS, nylon) for features that stay deflected, since plastics creep under constant load (Hubs). 7) Add something that pushes the parts fully home and holds them there (a bolt, a snap or a clamp): elastic averaging only works when the joint is preloaded (MIT kinematic couplings site; Slocum). 8) Print a small test coupon first and tune the interference for your printer; LEGO-compatible brick models offer printable calibration pieces for exactly this (FLWE on Printables). 9) For printed Hirth teeth on the bed side, cutting off half the teeth avoids support material and still meshes with full teeth (mechadense, Printables). *(unverified parts omitted)*
- **off_the_shelf_parts**: Hirth couplings and curvic couplings (face-gear couplings); serrated-tooth circle dividers and indexing tables (MIT kinematic couplings site); spring (roll) pins as compliant locating pins (Slocum Topic 9); tolerance rings (wavy spring bands between a shaft and a bore); camera and tripod 'rosettes' (Hirth-toothed joints, e.g. the Manfrotto rosette) (Printables Hirth joint model description).
- **rules_of_thumb**: 
  - Repeatability of a well-designed, preloaded elastically averaged coupling is 'approximately inversely proportional to the square root of the number of contact points' (MIT Precision Engineering Research Group, 'Coupling Types - Elastic Averaging'); GM's patent gives the minimised positional variance as Xmin = X/√N, where X is the variance of the locating features and N the number of features (GM patent US20150052725A1). So 4 features halve the error of one, and 16 quarter it.
  - A curvic coupling's two ground face gears, forced together, index about (number of teeth)^1/2 times more accurately than either gear alone (Slocum, FUNdaMENTALs of Design, p. 3-27 and Topic 9).
  - Manage the forces so that nothing yields: elastic deformation compensates for geometric errors only while the forces stay below the yield point (Slocum, p. 3-27).
  - Neither extreme: 'Too stiff and the system is over constrained and performance suffers. Too compliant, and the system will have poor accuracy, or it may buckle and fail' (Slocum, Topic 9, 'Elastic Averaging: Over-Constraint').
  - Over-constraint is not the same as elastic averaging: just because parts bend does not mean averaging is happening; stiff, mismatched constraints only create parasitic loads, for example on bearings (Slocum, Topic 9, p. 9-32).
  - Example of the cost: Ford's Duratec block and bedplate needed the elastic averaging of eight pin-and-hole joints (not two dowels) to realign within 5 µm, which required hole size tolerance of ±0.008 mm and placement of ±0.04 mm on 16 holes; a quasi-kinematic coupling was designed to replace it (Slocum, Topic 9, 'Quasi-Kinematic Couplings: Automotive Example').
  - LEGO bricks rely on very consistent moulding: the moulds are held to within about 10-20 micrometres (Wikipedia, Lego, citing the LEGO Group).
  - For printed flexing features: fillet the root with radius at least 0.5 times the thickness, and avoid flexing beams printed vertically in Z (Hubs, 'How to design snap-fit joints for 3D printing'). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - LEGO bricks: studs gripping into tubes and walls let bricks from different moulds snap together in the same place every time (Slocum; Wikipedia, Lego)
  - A five-legged office chair, whose slightly flexible legs all touch the floor instead of rocking on three (Slocum)
  - A spoked bicycle wheel: no single spoke is accurate or stiff, but together, tensioned, they make a true, strong wheel (Slocum)
  - Car components that GM aligns by pushing rigid ribs between pairs of springy walls (GM elastic averaging patent)
- **when_to_use**: Willoughby 2005: 'more generous machining requirements'). It suits interfaces that must be both stiff and repeatable, since load is shared across many features (MIT kinematic couplings site), such as modular building systems, snap-together enclosures and lids, trays or tool holders that are swapped often, stacked gearbox stages (Slocum redesigned a Tamiya gearbox with LEGO-like bumps between stages), and toothed joints that must lock at chosen angles without play, such as Hirth couplings, which have no backlash once tightened, on tripod heads and adjustable arms (Slocum; Wikipedia, Hirth joint; Printables Hirth joint model for Manfrotto rosettes). *(unverified parts omitted)*
- **when_not_to_use**: For the very highest repeatability a kinematic coupling (balls in V-grooves) is usually better (MIT kinematic couplings site; Slocum). If you only have two or three features, it is just an over-constrained fit that will bind or rock: use a pin in a hole plus a pin in a slot, or 3-2-1 exact-constraint locating (Slocum). If the parts move relative to each other (a carriage and a leadscrew, for instance), over-constraining them creates large forces that wear bearings: add compliance or clearance instead (Slocum, Topic 9). For a one-off press fit where exact centring doesn't matter, crush ribs are simpler (NewScrewdriver). Where the features would have to be loaded hard for a long time in a creep-prone plastic, use metal parts or a bolted joint.
- **environment_limits**: Plastic features that stay deflected lose springiness over time through creep and relaxation, especially when warm, so fits loosen; printed parts are also weakened by fatigue from repeated assembly (Hubs). Metal toothed couplings can suffer fretting wear under vibration, which causes looseness that re-tightening the bolt can fix (Wikipedia, Hirth joint). *(unverified parts omitted)*
- **safety_notes**: None known beyond the ordinary: fingers can be pinched when pushing parts together, and stiff plastic features can snap and leave sharp edges if over-stressed.
- **common_failures**: Features that yield or crush instead of flexing: the part fits once but no longer returns to the same place; reduce the interference or make features thinner and longer (Slocum; NewScrewdriver). Too few or too stiff features: the joint rocks, binds or needs huge force to assemble, which is over-constraint rather than averaging (Slocum). Too soft features: the part wobbles and location is poor, or features buckle (Slocum). No preload: parts not pushed fully home sit on the tips of a few features (MIT kinematic couplings site). Loosening over time from creep, relaxation and fatigue of plastic features (Hubs). Flexing features printed across the layer lines snap off (Hubs). Parasitic loads on bearings or shafts when a moving part is over-constrained (Slocum). Fretting wear in toothed couplings under vibration (Wikipedia, Hirth joint).
- **related**: 
  - Kinematic coupling (balls in V-grooves): the opposite philosophy, exactly six point contacts; the most repeatable and needs no averaging, but carries load at a few highly stressed points and needs preload (MIT kinematic couplings site)
  - Quasi-kinematic coupling: a hybrid with a few contact lines that flex slightly, combining exact constraint and elastic averaging (Slocum; Culpepper)
  - Exact-constraint mounting (3-2-1 locating): three, two and one contact points on three faces; exact, but loads are concentrated at a few points (Slocum)
  - Locating pins and hole-and-slot: simple and cheap, but accuracy is limited by the clearance each pin needs (Slocum)
  - Crush ribs and spring-fit features: a few ribs that deform (often permanently) to take up size variation for a press fit; good grip but the centre position is less predictable (Hackaday; NewScrewdriver)
  - Hirth joint (face-spline coupling): radial teeth that are a classic elastically averaged coupling, and also index to set angles (Wikipedia; MIT kinematic couplings site)
  - Tolerance ring: a bought wavy spring band that averages out size variation between a shaft and a bore
  - Cantilever and annular snap fits: springy hooks that retain parts but don't locate them precisely on their own; Hubs recommends adding locating lugs alongside them

### Pictures, videos and models

- **links**: 
  - [Lego dimensions.svg (Wikimedia Commons, by Cmglee)](https://commons.wikimedia.org/wiki/File:Lego_dimensions.svg): Dimensioned diagram of standard LEGO bricks: stud spacing, stud size and brick height, the many small interlocking features that locate bricks by elastic averaging *(licence: CC BY-SA 3.0)*
  - [Hirth Verzahnungsringe.JPG (Wikimedia Commons, by Pfedelbacher)](https://commons.wikimedia.org/wiki/File:Hirth_Verzahnungsringe.JPG): Photo of anodised Hirth tooth rings showing how the radial teeth mesh, an elastically averaged toothed coupling *(licence: Copyrighted free use)*
  - [Slocum, FUNdaMENTALs of Design, Topic 9: Structural Connections & Interfaces (MIT, 2008, PDF)](https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%209.PDF): Slides on elastic averaging (p. 9-31 onwards): a curvic coupling in a machine-tool turret, 3-, 4- and 5-legged chair footprints, scraping plates flat, a Tamiya gearbox redesigned with LEGO-like bumps between stages, and over-constraint diagrams *(licence: link only (copyright Alexander Slocum; free download))*
  - [Slocum, FUNdaMENTALs of Design, Topic 3: FUNdaMENTAL Principles (MIT, 2008, PDF)](https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%203.PDF): Pages 3-27 and 3-28, 'Elastically Averaged Design': figures of multi-legged chairs and a curvic coupling, with LEGO, windshield wipers and gecko feet as examples *(licence: link only (copyright Alexander Slocum; free download))*
  - [US20150052725A1 Elastic averaging alignment system and method (GM Global Technology Operations, Google Patents)](https://patents.google.com/patent/US20150052725A1/en): Patent describing a rigid rib pushed between two springy walls to align car components by elastic averaging, with the X/√N formula (patent drawings not checked) *(licence: link only (patent document))*
- **make_it_yourself**: 
  - [Lego compatible Bricks all sizes upto 50x50! (FLWE, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/116754-lego-compatible-bricks-all-sizes-upto-50x50): Printable LEGO-compatible bricks with customisable tolerances and calibration bricks, a hands-on way to feel how many studs averaging together give a firm, repeatable fit, and to tune the interference for your printer. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Customizable LEGO-Compatible Brick (cfinke, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/142352-customizable-lego-compatible-brick): Parametric (Customizer/OpenSCAD) LEGO-compatible brick generator with options for plates, tiles, DUPLO-size bricks and Technic holes, useful for experimenting with stud and tube fit. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Hirth Joint with Source Files and Documentation (lendres, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/114737-hirth-joint-with-source-files-and-documentation): Geometrically correct printable Hirth joint with Fusion 360 and SolidWorks source files and documentation, including a 25-tooth, 60° joint that fits Manfrotto tripod rosettes and a large demonstration version. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [OpenSCAD Hirth Joints (mechadense, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/430589-openscad-hirth-joints): OpenSCAD library for generating Hirth joints of any tooth count and angle, with a tip for printing bed-side teeth without supports. Read through the Printables public API. *(licence: GNU LGPL)*
- **diagram_idea**: Side-by-side comparison: a block held by one stiff pin in a slightly misplaced hole sits off-centre, while the same block held by twelve thin springy ribs, each drawn with a different small error and a slightly different bend, sits in the middle; a small graph beside it shows the leftover error shrinking as 1/√N as the number of ribs goes up.
- **sources**: 
  - https://pergatory.mit.edu/resources/FUNdaMENTALS.html
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%203.PDF
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%209.PDF
  - http://pergatory.mit.edu/kinematiccouplings/html/about/elastic_averaging.html
  - http://pergatory.mit.edu/kinematiccouplings/documents/Presentations/cimit_presentation_may_8_2001.pdf
  - https://dspace.mit.edu/handle/1721.1/30361 (Willoughby, P. J., 'Elastically averaged precision alignment', PhD thesis, MIT, 2005; abstract page)
  - https://psdl.engin.umich.edu/pdf/DETC2006-99752.pdf (Awtar & Sevincer, 'Elastic averaging in flexure mechanisms', ASME IDETC 2006)
  - https://api.crossref.org/works?query.bibliographic=Principle+of+elastic+averaging+for+rapid+precision+design (metadata for Teo & Slocum, Precision Engineering 49, 2017, 146-159, doi:10.1016/j.precisioneng.2017.02.003)
  - https://patents.google.com/patent/US20150052725A1/en
  - https://en.wikipedia.org/wiki/Hirth_joint
  - https://en.wikipedia.org/wiki/Lego
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://hackaday.com/2020/10/15/adding-crush-ribs-to-3d-printed-parts-for-a-better-press-fit/
  - https://newscrewdriver.com/2020/12/31/accommodate-3d-printer-variation-with-crush-ribs/
  - https://commons.wikimedia.org/wiki/File:Lego_dimensions.svg
  - https://commons.wikimedia.org/wiki/File:Hirth_Verzahnungsringe.JPG
  - https://api.printables.com/graphql/ (Printables models 116754, 142352, 114737 and 430589 read via the public API)

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, materials, processes, rules_of_thumb, when_to_use

## 234 Locating pins and hole-and-slot

*locating & alignment.* One pin in a round hole and one in a slot, so parts line up in exactly one position without jamming when sizes vary a little

### What it is

- **plain_name**: Two pegs on one part that drop into a round hole and a slot on the other part, so the parts only go together one way, line up exactly, and still fit even if the holes are not spaced perfectly
- **term**: Locating pins with hole-and-slot location (round pin in a hole plus pin in a slot, or round pin plus diamond pin)
- **aliases**: 
  - locating pins, locator pins, alignment pins, positioning pins
  - dowel pins used as locating features; dowels; parallel pins (ISO 2338; hardened: ISO 8734)
  - round pin and diamond pin; diamond locating pin; relieved locating pin; round-and-diamond pin location
  - hole and slot; pin and slot; dowel hole and dowel slot; slotted hole (for one of the two pins)
  - concentric locator plus radial locator (fixture-design terms for the round pin and the pin that stops rotation)
  - bullet-nose pins, cone locator pins, floating locating pins (variants with lead-in tips or sideways float)
  - tooling holes and tooling pins (circuit boards, sheet metal and assembly fixtures)
  - dowel connectors / plug connectors (PrusaSlicer 'Cut' tool, for split 3D prints)
- **family**: locating & alignment
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Two pins on one part fit into a snug round hole and a slot on the other: the round hole fixes the position, the slot (pointing along the line between the pins) only stops the part turning, so the parts line up in exactly one position and still go together when the hole spacing is slightly off.
- **complexity**: A few parts: two pins (usually hardened steel dowel or locating pins pressed into one part, or pins printed on it); a matching snug round hole and a slot in the other part (or two round holes with one round pin and one 'diamond' pin that has its sides ground away); plus separate bolts, clamps or a latch to hold the parts together.
- **how_it_works**: A pin in a close-fitting round hole stops the part sliding in any direction across the joint face, but it can still spin around that pin. A second pin stops the spinning, but if it also sat in a tight round hole, the distance between the two holes would have to match the distance between the two pins exactly; in real parts it never does, so the parts jam or bend (the joint is over-constrained). Making the second hole a slot that points at the first hole, or using a diamond pin that only touches its hole on two narrow curved lands, lets the second pin slide a little along the line between the pins while still blocking rotation. The flat faces pressed together fix the remaining directions (height and the two tilts), and bolts or clamps hold the parts together, so the part sits in one position every time without strain.

### Finder attributes

- **job**: 
  - line parts up exactly: puts a removable part, cover, fixture, jig or split 3D print back in the same place every time, and only one way round
  - join and hold: only partly; the pins carry sideways (shear) loads and take them off the bolts, but bolts, clamps, glue or magnets must hold the parts together
- **motion**: none once assembled; the part is lifted straight off the pins along their length
- **degrees_of_freedom**: 0 when seated and bolted down: the pin in the round hole removes the two sideways slides, the pin in the slot removes the turning, and the flat faces pressed together remove up-and-down and the two tilts; the one remaining freedom (lifting straight off) is closed by bolts, clamps or gravity. With two tight round holes, the turning is stopped twice over, which is why it jams (Carr Lane; MistyWest).
- **special_behaviour**: 
  - self-aligning or self-centring: with chamfered holes and chamfered, tapered or bullet-nosed pin tips, a part set down slightly off slides onto the pins (Carr Lane bullet-nose and cone locator pins; Forerunner 3D chamfer tip)
  - none of the other listed behaviours; its own trick is tolerance absorption: the slot, a diamond pin or a floating pin lets the pin spacing be slightly wrong without jamming or bending the parts
- **holding_principle**: shape (form-fit: the pins sit in the hole and slot, which sets the position and resists sideways sliding and twisting), together with a separate hold-down by friction or clamping (bolts, clamps), spring force or gravity. The pins on their own do not stop the parts pulling apart.
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: the located part lifts off once its bolts or clamps are undone (tool-free if it is only held by gravity or a latch); the pins themselves are usually pressed in (semi-permanent) or held by a lockscrew in a liner bushing so worn pins can be replaced (Carr Lane)
- **reuse_cycles**: many times: hardened steel pins in steel or bushed holes last a long production life, and replaceable pins in hardened liner bushings are used for long runs or heavy wear (Carr Lane); pins made of soft material wear out much faster than hardened ones (MISUMI), and printed plastic holes and pins wear and loosen sooner
- **tools_needed**: none to put the part on or take it off (apart from its bolts or clamps); to make: drill plus reamer for accurate pin holes, end mill or slot drill for the slot, hammer or arbor press to press pins in; for 3D prints, a drill or reamer to size printed holes and a vice or mallet to press in steel dowel pins
- **seal**: none
- **load**: Medium to heavy in sideways shear for steel pins (dowels help take heavy loads off the bolts holding the parts together, Forerunner 3D), but no strength along the pin: the parts simply pull apart unless bolted or clamped. Light for printed plastic pins, which snap easily, especially when printed standing up so the layer lines run across the pin. The pin in the slot only resists turning, so sideways loads are carried mainly by the round pin.
- **adjustable**: No: the whole point is one fixed, repeatable position. The slot absorbs small spacing errors automatically, and a floating locating pin can shift up to 1/8 in (about 3 mm) in one direction to cope with larger spacing variations (Carr Lane), but the located position itself is not meant to be adjusted.
- **play_and_precision**: Small play, set by the clearance between pin and hole: a 5 mm metric dowel (m6 tolerance) in a slip-fit hole made to +0.012/+0.024 mm gives about 0 to 0.020 mm clearance (Weinberg), and a dowelled engine-block joint repeated to about 5 micrometres (Slocum). Bolts alone in clearance holes let parts shift much more (an M6 bolt in a 6.6 mm hole has about 0.6 mm of slop). Tolerates hole-spacing errors along the slot (up to the slot's length), but not errors across it, and only a little tilt, so holes must be square to the face. *(unverified parts omitted)*
- **access_needed**: one side only (blind): the part is set onto the pins from one side; a worn press-fit pin is easiest to knock out from the back through a through-hole (MISUMI recommends press-fit shanks where the back of the plate can be reached, and an air-vent flat for blind holes)
- **materials**: Pins: hardened tool steel (e.g. O1 hardened to 60-63 HRC) or case-hardened carbon steel (1045, 45-50 HRC); 300-series or hardened 400-series stainless where rust is not acceptable; hard coatings such as hard chrome or TiCN for corrosive places (MISUMI). Standard dowel pins: unhardened parallel pins to ISO 2338, hardened to ISO 8734. Parts located: metal plates and castings, wood, plastic mouldings, sheet metal, circuit boards and 3D prints; in 3D prints use steel dowel pins (or printed pins for light duty) in printed, drilled or reamed holes.
- **maker_difficulty**: easy for 3D prints, laser-cut sheet and wood: model or drill one snug round hole and one slot, and push in steel dowel pins; moderate for precise metalwork, which needs accurately placed reamed holes and a milled slot

### Making it

- **processes**: 
  - 3D print (FDM): model a snug round hole and a slot (or print the pins on one part); press in steel dowel pins for accuracy and strength
  - 3D print (resin): tighter, more accurate holes; still better with steel pins
  - CNC: drilled and reamed pin holes, milled slots, fixture plates with locating pins
  - laser cut: round hole and slot cut into sheet parts and panels
  - sheet metal: punched round (or diamond-shaped) hole and slot in covers and panels
  - woodwork: dowels and pins in jigs and knock-down parts
  - off-the-shelf part: dowel pins, round and diamond locating pins, bullet-nose and cone pins, floating pins, liner bushings
- **print_in_place**: no: the two parts are printed separately and put together; the pins are either printed onto one part or, better, separate steel dowel pins pressed into printed holes
- **making_tips_3d_printing**: Use exactly two locating features: more than two pins generally over-constrains the parts so they go together badly or not at all (Forerunner 3D). If the two pins are closer than about 4 in (100 mm), two true round holes usually work; farther apart than that, turn one hole into a slot so the printer's size errors are absorbed, and point the slot at the other hole (Forerunner rules 1-3; Weinberg). Make the slot at least 0.125 in (about 3 mm) longer than the pin, or 0.05 in (about 1.3 mm) if space is tight (Forerunner rule 4). Printers usually print holes a little off size, so print a hole-size gauge first (e.g. the Printables 'Hole Tolerance Gauge', 3-8 mm holes with +0 to +0.3 mm steps) and design to what fits; for an exact press or slip fit, undersize the hole by about 0.025 in (0.6 mm) and ream it after printing (Forerunner rule 5). Allow clearance for the process: Hubs lists about 0.5 mm for FDM interlocking parts and 0.2 mm for SLA/SLS; Formlabs suggests 0.2 mm gaps for small parts and up to 0.4 mm for larger, chunkier ones on its SLA and SLS printers. Chamfer the pin tips and hole mouths: chamfers guide the parts together, let the pins print in more orientations and make them less brittle (Forerunner bonus tip; Slant 3D via Hackaday). Printed pins are weakest across the layers: CNC Kitchen's hooks printed standing up held only 55% (PLA) and 46% (PETG) of the load of hooks printed lying down, so print pins lying flat, print fins instead of thin pins, or better, use steel dowel pins. Put the two pins as far apart as the part allows so small position errors cause less angle error (Carr Lane). If a pin goes into a blind hole, give trapped air (and glue) a way out, such as a flat along the pin or a vent hole (MISUMI). In a printed jig, you can build rounded or diamond-shaped locators into the jig itself; Formlabs notes these reduce binding by touching over a smaller area. For split prints, PrusaSlicer's Cut tool can add dowel or plug connectors with a tolerance setting; remember that these use two round holes, so for long parts consider editing one into a slot in CAD.
- **off_the_shelf_parts**: Dowel pins (parallel pins; hardened ISO 8734, unhardened ISO 2338); round locating pins (plain or shoulder type, press-fit or lockscrew type); diamond locating pins (relieved pins) in matching sizes; bullet-nose pins and bullet-nose dowels; cone locator pins with bushings; floating locating pins; locating pin liner bushings and lockscrews; stepped (double-pilot) pins; locating plugs for large holes; H7 reamers and slot drills or end mills for making the holes and slots. Suppliers such as Carr Lane and MISUMI (brands) sell configurable pins in custom head diameters.
- **rules_of_thumb**: 
  - Use one round pin in a hole plus one pin that only stops rotation (a diamond pin, or a pin in a slot); two round pins in two round holes locate the rotation twice and bind during loading (Carr Lane, https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/locating-devices/locating-pins and https://www.carrlane.com/product/locating-pins/locating-pins/round-diamond-locating-pins-lockscrew-type; Slocum 2010, author's manuscript p. 13, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Lay the slot along the line between the two pin positions and make it long enough to catch the pin wherever the hole spacings fall within both parts' tolerances (Weinberg, https://www.linkedin.com/pulse/simple-design-guide-alignment-dowels-steven-weinberg; Forerunner 3D rule 3, https://forerunner3d.com/design-guide-for-using-dowel-holes-in-3d-printed-parts/).
  - A diamond pin has four machined flats leaving two contact lands, each usually about one-third of the diameter wide; it must be turned so its lands stop rotation about the round pin, i.e. its long axis at right angles to the line between the pins, or the part can swing around the round pin (Carr Lane locating-pins guide, Figs. 7-7 and 7-8; Mechanical Design Handbook blog, https://mechanical-design-handbook.blogspot.com/2025/12/the-engineers-guide-to-precision.html).
  - Space locators as far apart as practical: Carr Lane shows that a 0.001 in position error barely matters when locators are far apart but significantly shifts the part when they are close together (Carr Lane, Figs. 3-12 and 3-13, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Size a locating pin from the hole's maximum-material (smallest) size, a little under it: for a hole of 0.500-0.510 in, a pin of about 0.4995 in (Carr Lane, Figs. 3-20 and 3-21, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Holder tolerances are typically 20-50% of the part's tolerances; making a tolerance twice as tight could make it about five times as expensive (Carr Lane, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Standard metric dowels are made to m6: for a 5 mm dowel, a light press fit in the part that keeps the pin needs a hole of about -0.008/+0.004 mm, and a slip fit in the part that comes off needs about +0.012/+0.024 mm (converted from ISO H7/p6 and H7/h6) (Weinberg, https://www.linkedin.com/pulse/simple-design-guide-alignment-dowels-steven-weinberg).
  - 3D-printed parts: two true dowel holes are fine closer than 4 in (about 100 mm); farther apart, make one a slot; slots at least 0.125 in (minimum 0.05 in) long; for exact press or slip fits undersize by 0.025 in and ream after printing (Forerunner 3D rules 1-5, https://forerunner3d.com/design-guide-for-using-dowel-holes-in-3d-printed-parts/).
  - Typical tolerances for interlocking 3D-printed parts: FDM 0.5 mm, SLA 0.2 mm, SLS 0.2 mm, material jetting 0.1 mm, versus 0.1 mm for injection moulding (Hubs, https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/).
  - Do not rely on bolts to locate: an M6 bolt in a 6.6 mm clearance hole leaves about 0.6 mm of slop, which dowel pins remove (Mechanical Design Handbook blog, https://mechanical-design-handbook.blogspot.com/2025/12/the-engineers-guide-to-precision.html).
  - Pinned joints are good but not the best: replacing the dowels on an engine block's bearing caps with quasi-kinematic couplings improved repeatability from 5 to 1.5 micrometres, and split-groove kinematic couplings reduced pallet position variation by an order of magnitude compared with round-pin plus diamond-pin systems (Slocum 2010, pp. 13-14, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).

### When to use it

- **everyday_examples**: 
  - car engine blocks, where the top and bottom halves of the crankshaft bearings (the bearing caps) are lined up with dowel pins (Slocum's example)
  - sheet-metal covers and service panels with one round or diamond-shaped hole and one slot over their locating screws, so they fit without forcing (MistyWest)
  - circuit boards with tooling holes (some slotted) that drop onto pins in assembly and test fixtures (I-Connect007)
  - large 3D prints cut into pieces and joined with dowels or plugs made by the slicer's cut tool
- **when_to_use**: Whenever two parts must line up the same way every time and come apart again: covers and lids, removable jigs and fixtures, tool plates and brackets, split 3D prints that are glued or bolted together, laser-cut or sheet-metal panels, moulds and casting patterns, and anything bolted together where the bolts' clearance holes would otherwise let it shift. The hole-and-slot version is the right choice when the pins are far apart, the parts are made with loose tolerances (3D printing, sheet metal, wood), or the parts are made of different materials that grow differently with heat.
- **when_not_to_use**: Not as the thing that holds parts together: add bolts, clamps, glue, magnets or a latch. Not when a part must return to within a few micrometres every time without any play: use a kinematic coupling (balls in V-grooves), which never jams. Not when parts must be guided in from far off-line: a self-centring cone and socket catches a bigger initial error. Not when the only goal is to stop a part going in the wrong way round: an extra offset pin or notch (keying) is simpler. For many small springy features sharing the job (e.g. mass-produced plastic parts), elastic averaging can be cheaper; for pins that must also lock, use a quick-release (ball-lock) pin or indexing plunger.
- **environment_limits**: Steel pins in metal parts are stable over normal temperatures; where the two parts are different materials or change temperature, the slot (or a floating pin) lets them grow without binding, and cone locator pins are also used where parts expand with temperature (Carr Lane). Steel pins can rust; stainless steel or coatings such as hard chrome and TiCN help in corrosive places (MISUMI). Chips, dirt and coolant in the holes stop parts seating (Carr Lane). Printed plastic pins and holes soften with heat (PLA starts to give at about 60 °C, PETG at about 80 °C in CNC Kitchen's oven test) and creep under constant load, so press-fitted pins can loosen over time (Thrinter creep test).
- **safety_notes**: Few hazards. Keep fingers out from between heavy parts as they are lowered onto the pins (pinch point), and wear eye protection when driving or pressing hardened pins. A standard dowel driven into a blind hole can be almost impossible to remove without drilling it out (Mechanical Design Handbook blog).
- **common_failures**: (1) Binding or jamming because two round pins are used in two round holes, so the hole spacing must match perfectly; turn one hole into a slot or use a diamond pin (Carr Lane; Forerunner 3D). (2) Slot or diamond pin pointing the wrong way, so the part can still swing around the round pin; point the slot at the round hole and set the diamond's lands to stop rotation (Carr Lane; Forerunner 3D rule 3). (3) Slot too short to catch the pin when tolerances add up; size it for the worst case (Weinberg). (4) Too loose (the part rattles and lands in a different place each time) or too tight (it won't assemble); size pins from the hole's smallest size and choose standard fits (MistyWest; Carr Lane). (5) Printed pins snapping off along layer lines; chamfer them, print them lying down, or use steel dowel pins (Hackaday on Slant 3D; CNC Kitchen). (6) Pins in blind holes trapping air or glue, or stuck for good; add a vent flat or use through-holes (MISUMI; Mechanical Design Handbook blog). (7) Holes not square to the face, so the pins lean and bind; drill with a guide or drill press. (8) Wear and dirt: soft pins and holes wear and chips stop parts seating; use hardened pins, replaceable liners and keep the pins clean (Carr Lane; MISUMI). (9) Using the bolts to locate instead of pins, so parts shift within the clearance holes.
- **related**: 
  - Split-part joints for large prints (alignment pins, dovetail keys, puzzle joints): the 3D-printing use of pegs and holes; this entry adds the hole-and-slot rule that stops long split parts jamming
  - Dowel and biscuit joints: woodworking dowels that align and strengthen glued joints; wood is forgiving, so two round holes usually work
  - Exact-constraint mounting (3-2-1 locating): the general rule behind hole-and-slot: use exactly as many contacts as there are ways to move
  - Kinematic coupling (balls in V-grooves): locates exactly with six point contacts and never jams; more repeatable than pins, but needs a hold-down force
  - Self-centring cone and socket (taper locator): catches a bigger starting error and centres with no play, but gives no rotation stop on its own
  - Keying (one-way-only fit, poka-yoke): an extra offset pin or notch that only stops parts going on the wrong way round; less precise
  - Elastic averaging (many-feature alignment): many slightly springy features share the locating job instead of two rigid pins
  - Indexing plunger (pull-knob index pin) and quick-release (ball-lock) pin: pins that can be pulled out by hand to lock or release a position
  - Taper pin and spring pin: pins driven through both parts to fix them permanently, rather than letting them lift off

### Pictures, videos and models

- **links**: 
  - [Types of Locating Pins & Their Applications (Carr Lane Mfg.)](https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/locating-devices/locating-pins): Illustrated guide to plain, shoulder, bullet-nose, cone, diamond and floating locating pins, including Fig. 7-8 showing a round pin and a correctly turned diamond pin locating a part without binding *(licence: link only (copyright Carr Lane Manufacturing))*
  - [Make Parts Fit Right the First Time with Exact Constraint Analysis (MistyWest)](https://www.mistywest.com/posts/make-parts-fit-right-the-first-time-with-exact-constraint-analysis/): Step-by-step constraint diagrams: why a pin in a round hole either rattles or jams, a pin in a V-notch, and a sheet-metal service panel redesigned with a diamond-shaped hole and a slot *(licence: link only)*
  - [Locating Pins Pt. 2: Types of Locating | Engineer to Engineer | MISUMI USA (YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=C_vqMerH-oQ): Video explaining the types of locating with locating pins, including round and diamond pins *(licence: link only)*
  - [Dowel Pins as Locating Features - Ep. 5: How do I call out the Locating Holes and Slots? (GD&T Guy, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=CiJwMRodjV8): Video on specifying a locating hole and a locating slot on drawings for a two-dowel-pin locating scheme *(licence: link only)*
  - [Parallel pin DIN EN ISO8734 3D.png (Wikimedia Commons, Silberwolf)](https://commons.wikimedia.org/wiki/File:Parallel_pin_DIN_EN_ISO8734_3D.png): 3D view of a standard hardened dowel pin (parallel pin to DIN EN ISO 8734), the usual off-the-shelf locating pin *(licence: CC BY-SA 2.5)*
- **make_it_yourself**: 
  - [Hole Tolerance Gauge For Designing 3D Prints With Screws and Eccentric Nuts M3-M8 by Learn As You Go (Printables; URL from search results, details from Printables API, page not opened)](https://www.printables.com/model/466114-hole-tolerance-gauge-for-designing-3d-prints-with): Printable gauge with 3-8 mm holes in +0.0 to +0.3 mm steps; push a dowel pin or screw into the holes to find the printed hole size that gives the slip or press fit you want before designing a hole-and-slot joint *(licence: CC BY)* *(unverified parts omitted)*
- **diagram_idea**: Top view of a plate being lowered onto a base with two pins: on the left, pin A drops into a snug round hole and pin B into a slot that points at pin A, with arrows showing that A stops sliding and B only stops turning; on the right, the same plate with its holes spaced slightly too far apart still fits because pin B just sits further along the slot, next to a crossed-out version with two round holes that cannot both drop over the pins.
- **sources**: 
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/locating-devices/locating-pins
  - https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles
  - https://www.carrlane.com/product/locating-pins/locating-pins/round-diamond-locating-pins-lockscrew-type
  - https://www.carrlane.com/product/locating-pins/locating-pins/round-diamond-pins/diamond-pins
  - https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/08/LOCATING-PINS.pdf (Blaszczyk, C., MISUMI USA, 'Locating pins and how they are used', hosted by the University of Arizona optomechanics course)
  - https://forerunner3d.com/design-guide-for-using-dowel-holes-in-3d-printed-parts/
  - https://www.linkedin.com/pulse/simple-design-guide-alignment-dowels-steven-weinberg
  - https://www.mistywest.com/posts/make-parts-fit-right-the-first-time-with-exact-constraint-analysis/
  - https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf (Slocum, A., 'Kinematic couplings: A review of design principles and applications', Int. J. Machine Tools and Manufacture 50(4), 2010; MIT open-access author's manuscript, CC BY-NC-SA 3.0)
  - https://mechanical-design-handbook.blogspot.com/2025/12/the-engineers-guide-to-precision.html
  - https://mechanical-design-handbook.blogspot.com/2009/08/dowel-pins-and-locating-pins.html
  - https://hackaday.com/2023/04/29/alternatives-to-pins-and-holes-for-3d-printed-assemblies/
  - https://www.youtube.com/watch?v=xog9YlMt9UU (Slant 3D, 'Alternative to Pins and Holes: Design for Mass Production 3D Printing'; title confirmed via YouTube oEmbed)
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://formlabs.com/white-papers/how-to-3d-print-in-house-jigs-fixtures-and-other-manufacturing-aids/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://iconnect007.com/article/127610/adventures-in-engineering-its-pronounced-tooling-holes/127613/pcb
  - https://help.prusa3d.com/article/cut-tool_1779
  - https://commons.wikimedia.org/wiki/File:Parallel_pin_DIN_EN_ISO8734_3D.png
  - https://commons.wikimedia.org/wiki/File:Parallel_pin.svg (licence and description read via the Commons API)
  - https://www.youtube.com/watch?v=C_vqMerH-oQ (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=CiJwMRodjV8 (verified via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables model 466114 read via the public API)

### Other info

- **Fields with unverified parts:** make_it_yourself, play_and_precision

## 235 Exact-constraint mounting (3-2-1 locating)

*locating & alignment.* Holding a part with exactly as many contact points as it needs (three on a face, two on an edge, one on an end), so it sits the same way every time without strain

### What it is

- **plain_name**: Holding a part against exactly six small touching points (three underneath, two along one side, one at the end) and pushing it gently into them, so it settles in the same place every time without rocking, rattling or being bent
- **term**: Exact-constraint (kinematic) mounting; 3-2-1 locating principle (six-point location)
- **aliases**: 
  - 3-2-1 principle, 3-2-1 location, 3-2-1 fixturing, six-point location, six-point locating principle
  - exact constraint design, exactly constrained mounting, kinematic design, kinematic mounting (Blanding; Hale)
  - semi-kinematic or quasi-kinematic design (practical versions with small contact areas instead of true points)
  - isostatic mounting (term used in French and other European engineering: isostatic = exactly constrained, hyperstatic = over-constrained, hypostatic = under-constrained)
  - three-point support, three-point mounting, three-point bed levelling or tramming (3D printers)
  - datum reference frame: primary, secondary and tertiary datums A, B and C controlling 3, 2 and 1 degrees of freedom (GD&T, ASME Y14.5)
  - locators, rest buttons and nesting force; plane, concentric and radial location (fixture-design terms)
  - cone (or tetrahedron), vee and flat coupling / Kelvin clamp: a kinematic coupling with its six contacts arranged 3-2-1
- **family**: locating & alignment
- **one_liner**: A way of holding a part with exactly as many small touching points as it has ways to move (six for a solid part: three on its main face, two on one side, one on the end), plus a gentle push that keeps it against them, so it always settles in the same position without being held twice over, bent or left wobbling.
- **complexity**: A design rule more than a part: a base, jig or frame with six small contact points (rest buttons, pins, rounded bumps, ball-ended screws or short edges), plus something that pushes the part into them (its own weight, a spring plunger, a clamp or magnets). A flat part sliding on a table needs only three points in the plane: two along one edge and one on another.
- **how_it_works**: A loose solid part can move in six ways: slide along three directions and turn about three axes. Each small contact point stops one of those movements, so six well-placed points fix the part exactly: three points under its main face stop it dropping and tipping either way, two points along a side stop it sliding sideways and swivelling flat, and one point at the end stops the last slide. A 'nesting force' (weight, a spring or a clamp) pushes the part so it touches all six at once. Add a seventh point doing the same job (over-constraint) and the part rocks on the high point or has to bend to touch them all, like a four-legged chair on an uneven floor; leave one out (under-constraint) and it can slide or rattle.

### Finder attributes

- **job**: line parts up exactly: makes a part (workpiece in a jig, sensor, camera or optic, printer bed, panel, module) sit in the same position every time, without bending it
- **motion**: none once the part is nested and clamped
- **degrees_of_freedom**: 0 when the part is pushed against all six points: 3 + 2 + 1 = 6 contact points each remove one of the six degrees of freedom, with none removed twice. Fixture books count 12 directions (both ways along and around each axis): the six locators stop 9 of them and the clamp or nesting force stops the other 3 (Carr Lane). If some motion is wanted, use fewer constraints: the number needed is n = 6 + f - d, where d is the number of motions you want to keep and f counts floppy bending modes of a flexible part (Hale).
- **special_behaviour**: 
  - self-aligning or self-centring: pushed by the nesting force, the part slides over the contact points into its one resting place even when its own size varies a little; spring-loaded buttons are used to push the workpiece against the fixed locators before clamping (Carr Lane)
  - none of the other listed behaviours; its extra benefit is 'no strain': because nothing is held twice, the part is not bent when it (or the base) is slightly the wrong size or grows with heat
- **holding_principle**: shape (the six contact points set the position; form-fit) together with spring force, gravity, or friction or clamping (the nesting force or clamp that keeps the part against the points). The locators on their own do not hold the part down.
- **input_output**: not applicable
- **power**: passive (no power needed); production fixtures sometimes use hydraulic or air-powered clamps to apply the push
- **removability**: tool-free quick release: the part lifts out as soon as the clamp or push is released; the contact points on the base stay fixed (removable if the part is bolted down)
- **reuse_cycles**: effectively unlimited for loading and unloading parts; hardened steel contact points last a long time, while printed plastic points dent, wear and creep, and point contacts slowly fret (Slocum notes friction and contact deformation limit repeatability)
- **tools_needed**: none to load or unload the part (just the clamp handle); to make a fixture: drill and tap for rest buttons or adjusting screws, a vice or press to fit steel balls or pins, heat-set inserts and a soldering iron for printed jigs
- **seal**: none
- **load**: Light to heavy, depending on the contact points: locators can carry large loads if the working forces are aimed into them (Carr Lane: locators, not clamps, should take the main cutting forces), but each is a small contact that dents under heavy load, which adds tiny extra constraints and friction (Slocum). Heavy loads are spread by giving each 'point' several contacts on a rocking beam (a whiffle tree, as in windscreen-wiper blades) or by many slightly springy contacts (elastic averaging) (Slocum). Weak against forces that pull the part off the points unless the push or clamp is larger; loads must act inside the triangle of the three main points or the part tips (Slocum, three-legged chair).
- **adjustable**: Yes, if the contact points are adjustable: adjustable and equalizing supports set height for rough castings (Carr Lane), and a three-point 3D-printer bed is levelled with a fixed reference screw plus pitch and roll screws, each adjustment pivoting the bed on the other two without bending it (Rehorst). Fixed points give no adjustment but the best repeatability.
- **play_and_precision**: No play while the nesting force holds the part against all six points. Tolerates differences in the part's size (the far sides simply sit in a different place) and heat growth away from the corner of the locators, but not dirt, chips or burrs on the contact points. *(unverified parts omitted)*
- **access_needed**: one side only (blind): the part is placed into the fixture from its open side
- **materials**: Fixture bases: steel, aluminium, wood, MDF or 3D-printed plastic (Formlabs prints production fixtures in Nylon 12, and PETG or PLA suit light jobs). Contact points: hardened steel rest buttons, locating pins, ball-ended screws and steel balls for precise or long-lived fixtures; printed rounded bumps for light, occasional use. Any part material can be located, but locate from its most accurate (e.g. machined) surfaces (Carr Lane).
- **maker_difficulty**: easy to moderate: the idea needs no special tools (a jig with three bumps underneath, two on one side and one at the end, plus a push), but choosing where the points and the push go takes some thought, and precise, hard-wearing points need added steel parts

### Making it

- **processes**: 
  - 3D print (FDM): jigs, nests and corner locators with built-in rounded contact bumps and clamp mounts
  - 3D print (resin) and SLS: stiffer, more accurate fixtures (e.g. Nylon 12 locating jigs, Formlabs)
  - CNC: fixture plates with rest buttons, locating pins and adjustable supports
  - laser cut: plates, fences and stops cut from sheet
  - woodwork: jigs with a fence and a stop block
  - off-the-shelf part: rest buttons, locating pins, spring plungers, toggle clamps, adjustable supports
- **print_in_place**: no: the fixture prints as one piece, but it is a separate holder for another part; steel contact points, inserts, springs or clamps are usually added
- **making_tips_3d_printing**: Give the jig six small, rounded contact points instead of large flat faces: three bumps under the part's main face, two along its longest side and one at the end, each set as far apart as the part allows (Carr Lane: widely spaced locators make small errors matter less and stop the part wobbling). Keep every other surface clear with a gap so it cannot touch; MistyWest first removes all the accidental contacts from an over-constrained panel and then adds back exactly the ones needed. Build the locators into the printed jig as one seamless part, using rounded or diamond-shaped locators that touch over a small area so the part does not bind, and add ribs and fillets for stiffness rather than solid material (Formlabs). Leave relief pockets in inside corners so burrs, dust or the part's own corner radius cannot stop it reaching the points (Carr Lane Fig. 3-14; Formlabs corner locator). Choose the locating surfaces the part is measured from, so the part is referenced the same way it was designed (Carr Lane Fig. 3-16). Add a push aimed so it presses the part into all the points at once: a printed flexure, a spring plunger or a toggle clamp, with the clamping force directed into the supports so the part is not bent (Carr Lane Figs. 3-19 and 3-23). Plastic dents and creeps under a constant load, so for precise or long-term use press steel balls, dowel pins or ball-ended screws into the print, or run screws through heat-set inserts so the height can be tuned; one printed optical mount adds small stainless plates so its adjusting screws do not dig into the plastic (Printables 'Optical Kinematic Mount'). Keep PLA jigs away from heat (it starts to soften at about 60 °C, CNC Kitchen). The same thinking fixes wobbly 3D-printer beds: support the bed on three screws instead of four (Rehorst; printable 3-point conversions exist).
- **off_the_shelf_parts**: Rest buttons (fixture rest pads), locating pins and diamond pins, ball-ended (spherical-head) thrust screws and set screws, adjustable supports and equalizing (rocking) supports, spring plungers and spring-loaded locating buttons, toggle clamps and strap clamps, fixture plates and tooling plates, V-blocks, precision steel balls, heat-set inserts; for 3D-printer beds, three-point levelling kits and kinematic bed mounts.
- **rules_of_thumb**: 
  - Count the constraints: a solid part needs six independent contacts to be fixed; in general n = 6 + f - d, where d is the number of motions you want to keep and f the number of floppy bending modes; the design is exactly constrained if removing any one contact frees exactly one motion (Hale 1999, pp. 81 and 174, https://ocw.mit.edu/courses/2-76-multi-scale-system-design-fall-2004/3aa5862a1724b75c3e4aa7a6fee6c511_reading_l3.pdf).
  - The 3-2-1 sequence: put one face on three support points, push a second face against two points, then push a third face against one point, letting the part slide over the earlier points as it settles (Slocum 2010, author's manuscript pp. 2-3, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Three supports on the main face stop 5 of the 12 directions of motion, two locators on a side bring it to 8, and one on the end to 9; clamps stop the last 3 (Carr Lane, Figs. 3-4 to 3-6, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Avoid redundant locators (two locators controlling the same motion): parts vary in size and will not touch both, which harms accuracy and can damage the part or fixture (Carr Lane, Fig. 3-15, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Space locators as far apart as practical: a 0.001 in position error barely matters with wide spacing but noticeably shifts the part with close spacing, and very close locators let the part wobble (Carr Lane, Figs. 3-12 and 3-13, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Aim clamping forces into the locators or supports, and let the locators, not the clamps, take the main working forces (Carr Lane, Figs. 3-22 to 3-27, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Holder tolerances are usually 20-50% of the part's tolerances (Carr Lane, https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles).
  - Expect about 3-5 micrometres repeatability from a practical steel 3-2-1 fixture, limited by friction and point-contact deformation; kinematic couplings do better (Slocum 2010, p. 3, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - A three-legged stool has just enough constraint and never rocks; a four-legged chair is over-constrained and rocks on an uneven floor, trading a need for flatter floors for more stability (Formlabs, https://formlabs.com/white-papers/how-to-3d-print-in-house-jigs-fixtures-and-other-manufacturing-aids/); a three-legged chair tips unless the load stays inside its triangle (Slocum 2010, p. 2, https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf).
  - Level a printer bed on three screws (reference, pitch and roll): each adjustment pivots the bed on the other two so nothing bends; Rehorst's 300 x 300 mm beds on three points were flat enough for edge-to-edge printing in 200 micrometre layers (Rehorst, https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html).
  - In drawings, datum A (a face) controls 3 degrees of freedom, datum B (an edge) 2 and datum C (another edge) 1, so 3 + 2 + 1 = 6 (Wikipedia 'Datum reference', citing ASME Y14.5, https://en.wikipedia.org/wiki/Datum_reference).
  - Extra (redundant) constraints may be added for stiffness or load capacity, but they give up some benefits of exact constraint, so start from the exactly constrained design and add them knowingly (Hale 1999, p. 82, https://ocw.mit.edu/courses/2-76-multi-scale-system-design-fall-2004/3aa5862a1724b75c3e4aa7a6fee6c511_reading_l3.pdf; Slocum 2010, p. 2).

### When to use it

- **everyday_examples**: 
  - a three-legged stool or camera tripod, which never rocks, while a four-legged chair wobbles on an uneven floor
  - a bench vice: its fixed jaw and base locate the part and the moving jaw only clamps it (Carr Lane)
  - 3D-printer beds levelled on three screws instead of four, so levelling does not bend the bed (Rehorst)
  - pushing a photo into the corner of a scanner's glass: face on the glass, one edge against the side guide, one against the top
- **when_to_use**: When a part must go back into the same place every time and must not be bent by its holder: jigs and nests for drilling, sawing, gluing, soldering, engraving or laser-cutting repeat parts; mounting sensors, cameras, lenses, mirrors and laser modules; supporting a heated printer bed or any flat plate that must stay flat; fitting covers and panels so they neither rattle nor bind; and any assembly of parts made to loose tolerances (3D prints, sheet metal, castings) that must fit without forcing. It is also a checking tool: count the contacts to find out why something jams (too many) or rattles (too few).
- **when_not_to_use**: When loads are heavy, shock-like or come from any direction, point contacts dent and the part can be lifted off them: add strong clamps or bolts, or spread the load with many contacts (elastic averaging, flat faces bolted together with dowel pins). When a thin or flexible part must be supported all over, e.g. a sheet under a cutter, exact constraint leaves it undersupported and it deflects (Formlabs): support it on a full flat bed or many points. When a part must come off and go back to micrometre repeatability, use a kinematic coupling (balls in V-grooves). When the goal is only to stop a part being put in the wrong way round, keying (poka-yoke) is simpler. When two parts just need lining up across a face, two pins in a hole and a slot do the job.
- **environment_limits**: The principle works anywhere and copes well with temperature change: because nothing is held twice, a part or bed can grow with heat without bowing (Rehorst's three-point kinematic bed plate rests on its screws so it can expand freely). Printed fixtures soften with heat (PLA starts to give at about 60 °C, PETG about 80 °C, ASA about 110 °C in CNC Kitchen's test) and creep under a constant clamp or spring (Thrinter creep test), so the push fades and plastic contact points flatten over time; use steel contact points and metal springs for long-term loads. Chips, dust, coolant and burrs on the contact points shift the part (Carr Lane). Vibration can walk a part off its points if the push is weak.
- **safety_notes**: Clamps and spring plungers can pinch fingers. In machining, a part that is under-constrained can move during the cut, which Formlabs warns 'can pose a significant danger to machine operators and equipment'; always clamp against the locators. Otherwise none known.
- **common_failures**: (1) Over-constraint: more contacts than needed (four chair legs, four bed screws, a panel held by nine tight screws), so the part rocks, jams or is bent; remove the extras (MistyWest; Rehorst; Formlabs). (2) Under-constraint: too few contacts, so the part rattles, slides or can be loaded wrongly; add the missing point. (3) Locators too close together, magnifying small errors and letting the part wobble (Carr Lane Fig. 3-13). (4) Push in the wrong direction, so the part is not pressed against all six points at once; aim it between the points. (5) Clamping over an unsupported area, which bends the part; clamp over the supports (Carr Lane Figs. 3-26 and 3-27). (6) Chips, dust or burrs on the contact points or in corners; relieve corners and keep points clean (Carr Lane Fig. 3-14). (7) Soft points denting, wearing or creeping (printed plastic), or point contacts deforming under heavy loads and adding friction (Slocum). (8) Locating from the wrong surfaces, so accurate parts come out wrong; locate from the surfaces the part is measured from (Carr Lane Fig. 3-16).
- **related**: 
  - Locating pins and hole-and-slot: the pin version of the same rule: a pin in a round hole and a pin in a slot, plus the flat faces, fix a part without jamming
  - Kinematic coupling (balls in V-grooves): an exactly constrained joint made of six point contacts that can be lifted off and replaced to micrometres; the cone, vee and flat (Kelvin) version is literally 3-2-1
  - Elastic averaging (many-feature alignment): the opposite approach: many slightly springy contacts share the job, giving stiffness and load capacity instead of exactness
  - Self-centring cone and socket (taper locator): centres a part with one tapered contact; simple, but over-constrains if more than one is used
  - Keying (one-way-only fit, poka-yoke): stops a part being loaded the wrong way round; Carr Lane adds foolproofing pins to 3-2-1 fixtures for this
  - Flexure hinge and parallel leaf-spring flexure: the same constraint counting used to allow exactly the motions you want
  - Toggle clamp and spring plunger: common ways to supply the push (nesting force) that keeps the part on its points

### Pictures, videos and models

- **links**: 
  - [Locating & Clamping Principles for Jig & Fixture Design (Carr Lane Mfg.)](https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles): Figures of the 12 degrees of freedom, the 3-2-1 method step by step (three supports, then two side locators, then one end locator), locator spacing, redundant locators, foolproofing pins, spring-loaded locators and clamp placement *(licence: link only (copyright Carr Lane Manufacturing))*
  - [How to 3D Print In-House Jigs, Fixtures, and Other Manufacturing Aids (Formlabs white paper page)](https://formlabs.com/white-papers/how-to-3d-print-in-house-jigs-fixtures-and-other-manufacturing-aids/): Illustrated explanation of degrees of freedom, exact constraint, under- and over-constraint (three-legged stool versus four-legged chair) and 3D-printed corner locators *(licence: link only)*
  - [Make Parts Fit Right the First Time with Exact Constraint Analysis (MistyWest)](https://www.mistywest.com/posts/make-parts-fit-right-the-first-time-with-exact-constraint-analysis/): Blanding-style constraint-line diagrams in 2D, the V-block and flat, and an over-constrained sheet-metal panel redesigned to exactly three constraints *(licence: link only)*
  - [01_02_P1 The 3-2-1 Principle of Locating a Part in Fixtures and Jigs (Industrial Engineering and Manufacturing, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=fF8h2N7wxko): Video lesson on restricting a part's degrees of freedom with 3-2-1 locators *(licence: link only)*
  - [6DOF en.jpg (Wikimedia Commons, Horia Ionescu)](https://commons.wikimedia.org/wiki/File:6DOF_en.jpg): Diagram of the six degrees of freedom of a body: three slides and three rotations *(licence: Public domain)*
- **make_it_yourself**: 
  - [Pocket Kinematic Coupling by BYU CMR (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1493826-pocket-kinematic-coupling): Pocket-sized modular kit from BYU's Compliant Mechanisms and Robotics group for building and testing exactly constrained couplings in seconds, inspired by a model in Alexander Slocum's lectures *(licence: CC BY-NC)*
  - [Anet A8 3 points bed levelling conversion by aRGiRob (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/110874-anet-a8-3-points-bed-levelling-conversion): Printable parts that convert a four-screw printer bed to three-point levelling (needs 2 M3x8 screws and 5 M3 nuts, no drilling) *(licence: CC BY)*
  - [Optical Kinematic Mount - Low profile 3-axis by Bryan (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/951573-optical-kinematic-mount-low-profile-3-axis): Printed PETG laser mount that pivots on a 7 mm steel ball and is adjusted by round-ended M3 screws in heat-set inserts pressing on small stainless plates, held by springs: a practical exactly constrained, adjustable mount *(licence: CC BY-NC-SA)*
- **diagram_idea**: Three-step drawing of a brick-shaped part being placed in a corner jig: first it rests on three dots under its bottom face (arrows show it can still slide and swivel), then it is pushed against two dots on the long back wall, then against one dot on the end wall, with a spring arrow pushing it diagonally into the corner; a side panel shows a four-legged version rocking on its high leg.
- **sources**: 
  - https://www.carrlane.com/engineering-resources/fixture-design-principles/locating-clamping-principles
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/locating-devices/locating-pins
  - https://web.mit.edu/2.70/Reading%20Materials/Kinematic%20coupling%20review%20article.pdf (Slocum, A., 'Kinematic couplings: A review of design principles and applications', Int. J. Machine Tools and Manufacture 50(4), 2010; MIT open-access author's manuscript, CC BY-NC-SA 3.0)
  - https://ocw.mit.edu/courses/2-76-multi-scale-system-design-fall-2004/3aa5862a1724b75c3e4aa7a6fee6c511_reading_l3.pdf (Hale, L. C., 'Principles and techniques for designing precision machines', PhD thesis, 1999, sections 2.6-2.7 and 6.1; MIT OpenCourseWare 2.76 reading, CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/2-76-multi-scale-system-design-fall-2004/resources/reading_l3/
  - https://formlabs.com/white-papers/how-to-3d-print-in-house-jigs-fixtures-and-other-manufacturing-aids/
  - https://www.mistywest.com/posts/make-parts-fit-right-the-first-time-with-exact-constraint-analysis/
  - https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html
  - https://hackaday.com/2019/09/11/books-you-should-read-exact-constraint-machine-design-using-kinematic-principles/
  - https://www.asme.org/publications-submissions/books/find-book/exact-constraint-machine-design-using-kinematic-principles (Blanding, D. L., 'Exact Constraint: Machine Design Using Kinematic Principles', ASME Press, 1999; publisher page)
  - https://en.wikipedia.org/wiki/Datum_reference (read as raw wikitext)
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://commons.wikimedia.org/wiki/File:6DOF_en.jpg
  - https://commons.wikimedia.org/wiki/File:Kelvin_Kinematic_Coupling.png
  - https://www.youtube.com/watch?v=fF8h2N7wxko (verified via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables models 1493826, 110874 and 951573 read via the public API)

### Other info

- **Fields with unverified parts:** play_and_precision

