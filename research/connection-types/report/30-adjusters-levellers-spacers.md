# adjusters, levellers & spacers: Sets, fine-tunes or levels a position, height or gap, then holds it

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 129 Eccentric adjuster (eccentric nut, spacer or bushing)

*adjusters, levellers & spacers.* An off-centre spacer or bushing that moves a wheel, pulley or shaft sideways as you turn it, for setting tension or taking up play

### What it is

- **plain_name**: A round spacer, nut or sleeve with its hole drilled off-centre: turn it with a spanner and the wheel, pulley or shaft riding on it shifts a little sideways, then clamp it so it stays put
- **term**: Eccentric adjuster (eccentric spacer, eccentric bushing or eccentric cam bolt)
- **aliases**: 
  - eccentric nut (common 3D-printer name, e.g. on V-wheel carriages)
  - eccentric spacer (V-slot and OpenBuilds systems)
  - eccentric bushing / eccentric bush / offset bushing / eccentric sleeve
  - eccentric bottom bracket, EBB (bicycles) / 'the eccentric' (tandems)
  - eccentric hub (bicycle rear hubs; motorcycles with single-sided swingarms)
  - cam bolt / camber bolt / eccentric bolt with eccentric or offset washer (car wheel alignment)
  - eccentric stud cam follower / eccentric type cam follower (bearing catalogues)
  - cam height adjustment (cabinet hinge mounting plates)
  - eccentric-mounted tensioner pulley (engine timing belts)
  - Exzenter (German)
- **family**: adjusters, levellers & spacers
- **other_families**: tensioning, reels & take-up, locating & alignment, clamping, magnetic & friction connections, sliding, telescoping & linear motion
- **one_liner**: A spacer, bushing or bolt whose hole is off-centre, so turning it moves the part mounted on it sideways by up to twice the offset; you turn it until a belt, chain, wheel or gear is just right and then clamp it to lock the setting.
- **complexity**: A few parts: the eccentric itself (a round or hex-headed spacer, sleeve, plug or bolt with an off-centre bore or shank, often marked on its thin side); the axle, bolt or bearing that runs through the off-centre hole; the part being adjusted (a wheel, pulley, sprocket, bottom bracket or gear); and a clamp to lock it (a nut, pinch bolts, set screws or a wedge). Example: 'eccentric spacer, M5 bolt, V-wheel, lock nut'.
- **how_it_works**: The eccentric sits in a round hole or on a bolt and can turn about its own centre, but the part it carries sits in the off-centre hole, so as you turn it the carried part travels around a small circle whose radius is the offset (eccentricity). Half a turn takes it from one side to the other, giving a total sideways shift of twice the offset; turning further brings it back again, so unlike a normal nut it never gets 'tighter and tighter'. Once the belt, chain or wheel is at the right tightness you clamp the eccentric (nut, pinch bolt, set screws or wedge) so friction stops it turning. Because the carried part moves on an arc, it also moves slightly at right angles to the direction you want, for example an eccentric bottom bracket also changes the pedal height.

### Finder attributes

- **job**: 
  - tighten and hold tension: takes up slack in a chain or belt, or presses rollers onto a rail
  - line parts up exactly: sets a wheel, bearing, gear or hinge to the right position and takes up play
  - join and hold: once clamped it is also the mounting for the axle or bolt it carries
- **motion**: rotate: you turn the eccentric through up to half a turn (180°) while adjusting, which shifts the carried part sideways along a short arc; none once it is clamped
- **degrees_of_freedom**: 0 once clamped. While adjusting, 1: turning the eccentric, which moves the carried part along an arc (mostly sideways, a little up or down).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): set once and clamped; it does not re-adjust itself as a belt or chain stretches (unlike a spring tensioner), so it must be reset as parts wear
  - motion conversion (e.g. rotary to linear): a turn of the eccentric becomes a small, finely controllable sideways movement
- **holding_principle**: friction or clamping (force-fit): a nut, pinch bolt, set screws or a wedge clamps the eccentric so it cannot turn; plus shape (form-fit): the off-centre bore holds the axle or bolt
- **input_output**: An adjuster, not a drive: a rotation of the eccentric (up to 180°) gives a sideways shift of up to twice the offset, e.g. about 0.79 mm in total for an OpenBuilds V-slot eccentric spacer, and 0.25-1.5 mm eccentricity on catalogue eccentric cam followers. The ratio is not constant: by geometry, the shift per degree is largest in the middle of the range and smallest near the two ends. Back-drivable: yes when unclamped, because a sideways load on the carried part tries to turn the eccentric; clamped, it is held only by friction, so under-tightened eccentrics can slip.
- **power**: passive (no power needed)
- **removability**: removable: unclamp, then slide off or unscrew; set screws can dent the eccentric so it is harder to re-set finely
- **reuse_cycles**: many times: metal eccentrics can be re-adjusted and re-used indefinitely if not corroded; printed eccentrics wear and can break at thin sections
- **tools_needed**: a spanner to turn it (10 mm for full-size OpenBuilds spacers and Ender 3 eccentric nuts, 8 mm for 'mini' spacers), plus a spanner or Allen key for the lock nut, ideally holding the eccentric with one tool while tightening the nut with another; a pin spanner (e.g. Park Tool SPA-1) for bicycle eccentric bottom brackets; a special hook spanner for motorcycle eccentric hubs; a screwdriver for cabinet hinge cams
- **seal**: none
- **load**: light to heavy depending on size: V-slot wheel spacers and hinge cams are light-duty; bicycle eccentric bottom brackets, motorcycle eccentric hubs, car camber bolts and bearing cam followers carry heavy loads (catalogue eccentric cam followers have static load ratings of kilonewtons). Strong in straight shear across the bolt or axle; the weak direction is rotation: a load pushing the carried part sideways makes a turning force on the eccentric that only the clamp's friction resists, which is why under-clamped eccentrics creep, creak or slip.
- **adjustable**: yes: that is its purpose; loosen the clamp, turn the eccentric to shift the part (total range twice the offset), and re-clamp
- **play_and_precision**: none once clamped: it is used to remove play (e.g. between V-wheels and a rail, or in a chain). Very fine adjustment, down to a fraction of a millimetre, especially near the ends of its range. Tolerates only small misalignment corrections (at most twice the offset, typically well under a few millimetres, except large bicycle and motorcycle eccentrics). The carried part moves on an arc, so there is a small unwanted shift at right angles.
- **access_needed**: one side only (blind) in most cases: V-slot spacers, cam bolts and hinge cams are turned from the head side; bicycle eccentric bottom brackets and motorcycle eccentric hubs are reached from the side of the frame or swingarm
- **materials**: Stainless steel (OpenBuilds eccentric spacers), steel (car cam bolts, cam-follower studs, cabinet hinge plates), aluminium or steel (bicycle eccentric bottom brackets and hubs), bronze or steel (industrial eccentric bushes). 3D-printed eccentrics in PETG or similar for light, low-stress uses, always with a metal bolt through them. The part around it can be metal, printed plastic, acrylic or wood; a metal eccentric spacer's collar needs a round hole of about 7.1 mm.
- **maker_difficulty**: easy to use bought ones (V-slot eccentric spacers are cheap and fit a round hole in a printed or cut plate); moderate to make your own: the off-centre hole must be accurate, which needs a lathe or careful printing, and printed ones are weak

### Making it

- **processes**: 
  - off-the-shelf part (most common: eccentric spacers, eccentric bushings, eccentric cam followers, eccentric bottom brackets, cam bolts)
  - 3D print (FDM): design round pockets in printed plates to take bought eccentric spacers, or print light-duty eccentric spacers or bushings
  - CNC or lathe: turning an off-centre bore (metal eccentric bushings)
  - laser cut: round holes in acrylic or plywood gantry plates to take eccentric spacers
- **print_in_place**: no: the eccentric is a separate part fitted onto a bolt or into a hole; a printed eccentric still needs a metal bolt and nut
- **making_tips_3d_printing**: Easiest: print or cut the gantry plate or carriage with round holes that fit bought metal eccentric spacers (OpenBuilds spacers have a collar that 'fits into a 7.12mm hole'; one maker drilled acrylic plates to 7.1 mm), and use them on only one side of each set of wheels, with plain spacers on the other side. Print a hole-size test gauge first to find the right printed hole for M5 bolts and 7 mm eccentric collars on your printer (Printables 466199). If you print the eccentric spacer itself, keep it for light duty: one designer notes that the neck of his printed long eccentric spacer 'is a bit weak so the spacer shouldn't be turned under the stress' (Printables 79881). Mark the thin side of a home-made eccentric as OpenBuilds does with a divot, so you always know where the offset points. Leave room for a spanner (or print a long eccentric-nut wrench, Printables 890104). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'eccentric spacer' (V-slot, 5 mm bore, 6 mm or 1/4 in tall, 8 mm or 10 mm hex), 'eccentric nut' (3D printer V-wheels), 'eccentric bushing' or 'eccentric bush', 'eccentric cam follower' or 'eccentric stud cam follower' (e.g. IKO CFE and CFES, THK CFH-A and CFH-AB series; brands), 'eccentric bottom bracket' (bicycles), 'eccentric hub' (singlespeed bicycles with vertical dropouts), 'camber bolt' or 'cam bolt kit' (cars), 'cam adjustable mounting plate' (cabinet hinges, e.g. Blum CLIP top, brand). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Total adjustment is twice the eccentricity: half a turn moves the carried part from one side to the other (geometry). Examples: an OpenBuilds eccentric spacer gives 'a total range of adjustment of approximately 0.79mm' (MakerTechStore, https://www.makertechstore.com/products/eccentric-spacer); THK eccentric cam followers have 0.25-1.0 mm eccentricity (https://www.thk.com/jp/en/products/other_rotary_guides/cam_follower/eccentric/); IKO CFE 0.4-1.5 mm (https://www.ikont.co.jp/eg/product/needle/ndl0603.html); IKO CFES 0.25-0.6 mm (https://www.mrosupply.com/bearings/862859_cfes16_iko-bearing/).
  - V-wheel carriages: turn eccentric nuts in very small steps until the wheels roll smoothly and can easily be pushed both ways but the carriage never wobbles; too tight and the wheels grind and damage themselves and the rail (3D Print Beast, https://www.3dprintbeast.com/eccentric-nuts-ender-3-v2-pro/). Over-tight V-wheels develop flat spots (FlixMySwitch video title, https://www.youtube.com/watch?v=I6NI7lGAv44).
  - Tandem front chain set with an eccentric: about 1/2 inch (12 mm) of up-and-down play halfway between the axles, checked all the way round the crank rotation (Park Tool, https://www.parktool.com/en-int/blog/repair-help/chain-tension-for-tandem-front-end); for a synchronising chain, set it taut at the tightest point of the crank rotation (Sheldon Brown, https://www.sheldonbrown.com/synchain.html).
  - Choose the clamp to suit the frame: pinch-bolt eccentrics are easiest to adjust but are 'normally only used on steel frames because of the risk of breaking off the ears'; set screws are simple but dent the eccentric; wedge types must be kept greased or they corrode in place (Sheldon Brown, https://www.sheldonbrown.com/synchain.html).
  - Cabinet hinge mounting plates with a cam give about +/-2 mm of height adjustment (Blum catalogue 2022/2023, https://publications.blum.com/2022/catalogue/en/144/).
  - Car camber bolts with eccentric or offset washers can change camber by up to about two degrees (Wikipedia 'Camber angle', https://en.wikipedia.org/wiki/Camber_angle).
  - Setting gear backlash by turning an eccentric hub to change the centre distance shifts the tooth contact zone, can lower load capacity and efficiency, and causes start-up wear (Wikipedia 'Duplex worm', https://en.wikipedia.org/wiki/Duplex_worm).

### When to use it

- **everyday_examples**: 
  - the 'eccentric nuts' you turn with a 10 mm spanner to snug up the wheels on a 3D printer such as the Ender 3
  - the eccentric bottom bracket that tensions the chain or belt on a tandem, single-speed or belt-drive bicycle
  - cam bolts used in car wheel alignment to set camber
  - kitchen cabinet hinge mounting plates with a small cam screw for moving the door up or down
- **when_to_use**: When you need a small, precise, lockable adjustment of where a wheel, pulley, sprocket, bearing or shaft sits: taking up play between rollers and a rail (V-slot carriages), setting chain or belt tension where the axles cannot slide (vertical bicycle dropouts, tandem timing chains, belt-drive bikes, motorcycles with single-sided swingarms), setting gear mesh or roller contact, or trimming alignment (car camber, cabinet doors, cam followers). It is compact, needs no slots, and holds its setting firmly once clamped.
- **when_not_to_use**: When tension must be kept up automatically as a belt or chain stretches: use a spring-loaded tensioner. When you need more travel than about twice the offset: use a slotted mount, sliding motor plate or jacking screw. When the part must not move sideways at all while you adjust it in one direction (the eccentric moves it on an arc): use a straight slide or screw adjuster. For precise, repeatable gear backlash: an eccentric centre-distance change disturbs tooth contact, so consider anti-backlash or duplex-worm gearing. In weak, soft or printed parts under heavy load: printed eccentrics can break and plastic creeps under the clamp.
- **environment_limits**: Corrosion can seize an eccentric in its housing: wedge-type bicycle eccentrics left unserviced 'can become corroded in place' (Sheldon Brown), and owners report having to tap stuck eccentric bottom brackets to turn them (Montague Bikes blog comments), so grease the outside of the eccentric. *(unverified parts omitted)*
- **safety_notes**: Eccentrics set things that matter for safety, such as a car's wheel alignment, a motorcycle's chain tension or a bicycle's chain: re-tighten the clamp or pinch bolts to the maker's torque after adjusting, and check that the setting has not moved. When tightening the lock nut, hold the eccentric with a second tool so it does not turn and change the setting (VW Vortex forum, on an eccentric-mounted timing belt tensioner). Pinch-bolt eccentric shells on non-steel frames risk breaking the bolt ears (Sheldon Brown). *(unverified parts omitted)*
- **common_failures**: (1) It slips and loses tension because the clamp was not tight enough or the load keeps trying to turn it; tighten to the proper torque and hold the eccentric while tightening. (2) It is seized by corrosion and will not turn; grease it at assembly (Sheldon Brown), and free a stuck one with gentle taps rather than by forcing the spanner, as bicycle owners report (Montague Bikes blog comments). (3) Set screws dent the eccentric, making fine re-adjustment difficult (Park Tool; Sheldon Brown). (4) Over-tightened V-wheels grind or develop flat spots; back it off until the carriage just runs without wobble. (5) Confusion because a full turn returns to the start: work in small steps and watch the effect, and use the thin-side mark. (7) A printed eccentric breaks at its thin neck when turned under load (Printables 79881). (8) Adjusting the eccentric also changes another dimension (pedal height, wheel toe) because it moves on an arc; check both after adjusting. *(unverified parts omitted)*
- **related**: 
  - Belt tensioner (spring-loaded idler): keeps tension automatically as the belt stretches, instead of a set-and-lock adjustment
  - Eccentric cam lever (cam clamp, quick-release skewer): also uses an off-centre shape, but to clamp quickly with a lever rather than to set a position
  - Cam and follower: an off-centre or shaped disc that moves a follower continuously as it turns (the same geometry used for motion)
  - Slotted adjustment with a jacking screw: slides the part along slots, often pushed by a separate screw, for a straight, longer adjustment range; less compact
  - Lead screw and nut (incl. anti-backlash nut): fine straight-line adjustment with a screw
  - Dovetail slide with gib strip: takes up play in a slide with an adjustable strip instead of an eccentric
  - Kinematic coupling: locates parts exactly without any adjustment
  - Turnbuckle: sets tension in a rod, wire or cable by screwing
  - Locking adjustment screws: opposing screws, or a screw and a spring, that set a tilt or height and lock it, rather than shifting a part sideways with an off-centre bush

### Pictures, videos and models

- **links**: 
  - [Eccentric bottom bracket.jpg (Wikimedia Commons, by AndrewDressel, 2007)](https://commons.wikimedia.org/wiki/File:Eccentric_bottom_bracket.jpg): Photo of an eccentric bottom bracket: the off-centre bearing plug inside an oversized bicycle frame shell *(licence: GFDL or CC BY-SA 3.0 (reuse with credit))*
  - [Eccentric animation.gif (Wikimedia Commons, by ThreeE, 2008)](https://commons.wikimedia.org/wiki/File:Eccentric_animation.gif): Animation of a disc turning about an off-centre axle; shows how an off-centre hole makes the centre travel in a circle (here used for motion rather than adjustment) *(licence: GFDL or CC BY-SA 3.0 (reuse with credit))*
  - [How to adjust Eccentric nuts 3dprinter correct adjustment no more flat wheels (FlixMySwitch, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=I6NI7lGAv44): Video of adjusting the eccentric nuts on a 3D printer's V-wheels *(licence: link only)*
  - [Chain Tension for Tandem Front End (Park Tool)](https://www.parktool.com/en-int/blog/repair-help/chain-tension-for-tandem-front-end): Illustrated steps for rotating a tandem's front eccentric with a pin spanner to set chain tension, and the wedge-bolt locking system *(licence: link only)*
  - [Cam Follower Eccentric Models CFH-AB (THK)](https://www.thk.com/jp/en/products/other_rotary_guides/cam_follower/eccentric/): Catalogue drawings of eccentric-stud cam followers whose position is set by turning the stud *(licence: link only (manufacturer page))*
- **make_it_yourself**: 
  - [Hole Tolerance Gauge For Designing 3D Prints With Openbuilds Screws and Eccentric Nuts M5, M7 (Printables 466199; URL from Printables API, page not opened)](https://www.printables.com/model/466199-hole-tolerance-gauge-for-designing-3d-prints-with-): Test print with 5 mm and 7 mm holes in 0.0-0.2 mm steps, to find the right printed hole size for M5 bolts and OpenBuilds eccentric nuts *(licence: CC BY (Creative Commons Attribution))*
  - [Long eccentric spacer for Tronxy X5S (Printables 79881; URL from Printables API, page not opened)](https://www.printables.com/model/79881-long-eccentric-spacer-for-tronxy-x5s): Printed long eccentric spacer for V-slot wheels, with notes on its weak neck and on drilling 7.1 mm holes to fit metal eccentric spacers *(licence: CC BY (Creative Commons Attribution))*
  - [Vertical X Carriage (w/ eccentric nut) v2.0 (Printables 236807; URL from Printables API, page not opened)](https://www.printables.com/model/236807-vertical-x-carriage-w-eccentric-nut-v20): Printed 3-wheel carriage for 2040 extrusion that uses one eccentric nut for fine adjustment; printed in PETG after a PLA prototype wore *(licence: CC BY (Creative Commons Attribution))*
  - [Long Eccentric spacer / nut wrench! (Printables 890104; URL from Printables API, page not opened)](https://www.printables.com/model/890104-long-eccentric-spacer-nut-wrench): Printable long wrench for turning eccentric nuts in hard-to-reach places *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: A face-on view of a hex spacer with its hole drawn off-centre and a V-wheel outline on it, shown at 0°, 90° and 180° of rotation beside a rail, with a dimension arrow showing the wheel moving across by twice the offset and a small arc showing it also rises and falls.
- **sources**: 
  - https://www.makertechstore.com/products/eccentric-spacer
  - https://www.thk.com/jp/en/products/other_rotary_guides/cam_follower/eccentric/
  - https://www.ikont.co.jp/eg/product/needle/ndl0603.html
  - https://www.nodeshk.com/iko/catalogue/eccentric-cam.html
  - https://www.mrosupply.com/bearings/862859_cfes16_iko-bearing/
  - https://www.3dprintbeast.com/eccentric-nuts-ender-3-v2-pro/
  - https://www.parktool.com/en-int/blog/repair-help/chain-tension-for-tandem-front-end
  - https://www.sheldonbrown.com/synchain.html
  - https://www.sheldonbrown.com/gloss_e-f.html
  - https://www.montaguebikes.com/folding-bikes-blog/2016/03/adjusting-belt-tension-with-eccentric-bb/
  - https://www.canyonchasers.net/2018/09/single-sided-swingarm-chain-adjustment-tool/
  - https://en.wikipedia.org/wiki/Bottom_bracket
  - https://en.wikipedia.org/wiki/Eccentric_(mechanism)
  - https://en.wikipedia.org/wiki/Tensioner
  - https://en.wikipedia.org/wiki/Camber_angle
  - https://en.wikipedia.org/wiki/Duplex_worm
  - https://publications.blum.com/2022/catalogue/en/144/
  - https://www.hardwaresource.com/products/blum-in-line-mounting-plate-cam-adjustable
  - https://www.vwvortex.com/threads/diy-install-updated-mechanical-timing-belt-tensioner.8497345/
  - https://www.designwithajay.com/the-mechanics-of-eccentric-bushes/
  - https://commons.wikimedia.org/wiki/File:Eccentric_bottom_bracket.jpg
  - https://commons.wikimedia.org/wiki/File:Eccentric_animation.gif
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=I6NI7lGAv44 (verified via YouTube oEmbed)

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, making_tips_3d_printing, off_the_shelf_parts, safety_notes

## 327 Shims, spacers and standoffs (packing, spacer washer)

*adjusters, levellers & spacers.* Thin packing pieces, washers or tubes put between parts to fill a gap, set a height or spacing, or lift a circuit board clear of a surface; the simplest way to adjust a fit

*Also covers:* Baseline entry for the family. Also covers shim stock and peel shims, spacer washers, threaded standoffs for circuit boards and panels, and printed spacers. Tapered shims and folding wedges stay in Self-locking wedge.

### What it is

- **plain_name**: Thin packing pieces, washers or little tubes that you put between two parts to fill a gap, raise one part to the right height, or hold a circuit board up off a surface
- **term**: Shims, spacers and standoffs (packing, spacer washer)
- **aliases**: 
  - shim stock / shimstock (thin sheet or foil cut to size)
  - pre-cut shim / slotted shim / U-shaped shim (machine alignment shims that slide round a bolt)
  - laminated shim / peel shim / peelable shim / peel-off shim (stacked foil layers peeled off one at a time)
  - separable shim (layers held by glue spots on the edge only)
  - spacer / spacer tube / spacer sleeve / unthreaded spacer / round spacer
  - spacer washer / plain washer used as a spacer / height washer (rowing oarlocks)
  - standoff / stand-off / PCB standoff / hex standoff / threaded spacer / pillar / PCB support
  - male-female standoff, female-female standoff (Wikipedia 'Spacers and standoffs')
  - motherboard standoff / brass standoff (PCs)
  - insulating standoff / nylon standoff
  - machinist's jack (a threaded spacer with a bolt in it, used as an adjustable support) (Wikipedia 'Jackscrew')
  - CPU shim (protects a processor when fitting a heat sink)
  - tile spacer (masonry and tiling) *(unverified parts omitted)*
- **family**: adjusters, levellers & spacers
- **other_families**: locating & alignment, everyday fasteners & fixings
- **one_liner**: A shim, spacer or standoff is a piece of known thickness or length put between two parts, so that the gap, height or spacing between them is set by that piece and then held when the parts are bolted or pressed together.
- **complexity**: Single piece in most cases: a flat shim, a washer or a spacer tube. A laminated (peel) shim is one piece made of many bonded foil layers. A standoff is one threaded pillar, used with one or two screws (e.g. 'standoff, two M3 screws, circuit board, base plate'). A machinist's jack is a few parts: a threaded spacer and a bolt.
- **how_it_works**: Two parts that are clamped together end up exactly as far apart as whatever is squeezed between them, so putting in a piece of known thickness sets the gap, height or spacing. Flat shims are stacked or swapped until a part sits level, lines up or has the right clearance; a peel shim is a stack of bonded foils, and you peel off layers until it is the right thickness. Spacers and spacer washers are tubes or rings that a bolt passes through, so they hold two parts a set distance apart when the bolt is tightened. A standoff is a threaded pillar: one end screws to the base and the other takes the screw that holds a circuit board or panel, lifting it clear so solder joints on the back can't touch the surface (and, if it is nylon, insulating it).

### Finder attributes

- **job**: 
  - line parts up exactly: sets a height, gap, level or alignment, e.g. under a motor foot, a wobbly table leg or a guitar neck
  - join and hold: standoffs and spacers are part of the screwed joint that holds a circuit board or panel a set distance from its base
- **motion**: none: once clamped the parts don't move; a shim can be changed later to re-adjust
- **degrees_of_freedom**: 0 once clamped. The shim or spacer fixes the distance along the bolt; the bolt and clamping friction stop the parts moving the other ways.
- **special_behaviour**: none: it simply fills a gap with a known thickness. The 'adjustment' happens by choosing, stacking or peeling shims, not by any mechanism
- **holding_principle**: friction or clamping (force-fit): shims and spacers only work when squeezed by bolts or by the weight of the part; plus shape (form-fit) for standoffs, which screw into threads
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: undo the bolts and slide out, add or swap shims; standoffs unscrew
- **reuse_cycles**: many times for metal shims, washers and standoffs; a few times for paper, card, wood and printed shims, which crush, creep or crack; peel shims can only get thinner (layers once peeled can't be put back)
- **tools_needed**: none to slide in a shim under a part; spanner or screwdriver for the bolts that clamp it; nut driver or small spanner for hex standoffs; scissors or tin snips to cut shim stock; a micrometer or caliper (or feeler gauge) to measure the gap and the shim stack
- **seal**: none: shims and spacers leave or set a gap; to seal a joint use a gasket or sealing washer instead
- **load**: Light to heavy, depending on material: metal shims under machine feet carry the full weight of motors and pumps in compression. Strong when squeezed (compression); they carry no pull (tension) themselves and resist sideways shear only by clamping friction and the bolt. Standoffs are light-duty: they hold circuit boards and panels and are weak in bending and at their small threads. Paper, card, wood and printed shims are light-duty and crush or creep under a constant heavy load.
- **adjustable**: yes, by changing the shims: add, remove, swap or peel layers off a laminated shim, then re-tighten; spacer height is changed by swapping to a different length or stacking spacers or washers
- **play_and_precision**: No play once clamped. Precision depends on the shims: machine-alignment shims are made to small tolerances (ground stock about +/-0.0005 in for 0.020 in and thinner; rolled stock about +/-0.005 in for 0.025 in and thicker, according to Acoem), but every extra layer, plus dirt, rust or paint, adds error and springiness, so use as few as possible. Peel shims adjust in 0.05 to 0.1 mm steps (Jicey; ERIKS). Spacers and standoffs locate only along the bolt; sideways position comes from the holes.
- **access_needed**: one side only (blind) for slip-in shims (they slide in from the side) and for a male-female standoff screwed into a tapped hole; both sides for a female-female standoff or a spacer with a through bolt and nut
- **materials**: Shims: almost anything flat: steel, stainless steel, brass, aluminium, plastic film, wood, stone, card or paper (Wikipedia 'Shim (spacer)'). Pre-cut stainless steel shims are standard for machine alignment because they don't rust (Acoem). Laminated peel shims: steel, aluminium, brass, stainless steel and titanium foils, or polyester (Mylar) and polyimide (Kapton) films for electrical insulation (Jicey). Spacers and standoffs: stainless steel, aluminium, brass or nylon (Wikipedia 'Spacers and standoffs'); washers also in copper, zinc-plated steel, PTFE, phenolic, fibre and mica (Wikipedia 'Washer (hardware)'). Printed spacers: PETG or ASA rather than PLA where warm. They suit any material being joined, as long as the clamping force doesn't crush a soft shim.
- **maker_difficulty**: easy: buy washers, spacers and standoffs, cut shims from shim stock, drink cans or card, or print spacers in one piece

### Making it

- **processes**: 
  - off-the-shelf part (washers, spacer tubes, hex standoffs, pre-cut and laminated shims, shim stock)
  - 3D print (FDM): spacers, step shims, printed standoffs (with heat-set inserts or self-tapping screws)
  - 3D print (resin): small threaded or self-tapping standoffs (Printables 601883 was resin-printed)
  - sheet metal: cut shims from shim stock or thin sheet with scissors or snips
  - laser cut: acrylic or plywood spacers and shim plates
  - woodwork: wooden packers and wedges
- **print_in_place**: yes for a plain printed spacer, washer or shim: it is one solid piece that works straight off the bed; partly for a printed standoff, which needs screws or a heat-set insert to hold the board
- **making_tips_3d_printing**: Use plenty of walls and high infill so the spacer doesn't crush: makers use about 80% infill for step shims (Printables 355004) and 100% for workshop table shims (Printables 777364). Make the hole slightly bigger than the screw (e.g. 3.2 mm for M3, as in the 'Spacer Kit' Printables 1182373) or, for a self-tapping standoff, slightly smaller (2.9 mm for M3 in Printables 601883). For threaded standoffs that are undone often, melt in a heat-set insert instead of tapping plastic. Choose the material for the heat: in an oven test under a small load, PLA started to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen); and plastic under a constant clamp load slowly creeps (Thrinter), so a bolt through a printed spacer can lose tightness over time. For accurate gap-setting, print a shim sizer or gauge first (Printables 175528) and remember a printed shim's thickness is only as accurate as your first layer and layer height. Don't use printed parts as shims under heavy machinery: use metal. *(unverified parts omitted)*
- **off_the_shelf_parts**: For sizes, look them up in a supplier catalogue (e.g. McMaster-Carr, ERIKS) rather than copying size tables. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Use as few shims as possible: 'Three pre-cut shims should always be enough; in extraordinary situations, four could be needed', because too many shims can themselves cause a rocking 'soft foot' (Easy-Laser via LUDECA, https://ludeca.com/blog/alignment/10213/5-dos-and-donts-of-shimming/). Acoem says to try to use no more than 4 under each foot, and to use one thick ground steel block plus a few shims for big gaps (https://acoem.us/blog/shaft-alignment/shims-101-for-shaft-alignment/).
  - 'Dirt is a shim – as is rust, paint, sand': clean under the foot, measure the stack with a micrometer or caliper instead of trusting the number stamped on the shim, and sandwich thin shims between thicker ones (Acoem, https://acoem.us/blog/shaft-alignment/shims-101-for-shaft-alignment/).
  - Slide slotted shims in until they touch the bolt, then pull them back slightly so the bolt threads don't bend them when tightened (Acoem, https://acoem.us/blog/shaft-alignment/shims-101-for-shaft-alignment/).
  - Peel shims: a standard 1 mm U-shaped laminated shim is made of 8 layers of 0.1 mm and 4 of 0.05 mm, peeled until the exact thickness is reached (Jicey, https://jicey.com/shims.html; ERIKS BETEX, https://shop.eriks.be/en/peel-off-shims-hard-brass-or-stainless-steel-pr451749624000/1/).
  - Match the standoff thread to the board: Raspberry Pi mounting holes take M2.5, and 11 mm standoffs give the right spacing for an add-on board (HAT) on standard female headers (Pololu, https://www.pololu.com/product/1952); PC motherboards use 6-32 standoffs and D-sub connector jackscrews use 4-40 (Wikipedia, https://en.wikipedia.org/wiki/Spacers_and_standoffs).
  - Fit a standoff only under a matching board hole; remove any extra ones, because 'a standoff installed in the wrong place may cause electrical shorts' (ASRock install guide, https://download.asrock.com/Manual/InstallEATXMB/Install%20EATX%20Motherboard.pdf).
  - Use a washer to spread a bolt's load on soft material; hardened steel washers keep the bolt tight in high-quality joints, and insulating washers prevent galvanic corrosion between steel screws and aluminium (Wikipedia, https://en.wikipedia.org/wiki/Washer_(hardware)).
  - Printed spacers soften under load at about 60 °C (PLA), 80 °C (PETG) and 110 °C (ASA) (CNC Kitchen, https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament).

### When to use it

- **everyday_examples**: 
  - a folded piece of paper or card pushed under a wobbly table leg (Wikipedia 'Shim (spacer)')
  - the brass standoffs that hold a computer motherboard off the metal case, or the M2.5 standoffs that stack an add-on board on a Raspberry Pi
  - thin shims behind a door hinge to stop the door rubbing (Printables 146015 'Door Hinge Shim Set')
  - a shim under a bolt-on guitar neck, or under the nut or saddle, to change string height (Wikipedia 'Shim (spacer)')
- **when_to_use**: Whenever something is slightly too low, too loose, not level or out of line and the parts are (or can be) clamped together: under machine and motor feet, behind hinges and brackets, under furniture legs, in a bearing housing to set end float, or between a gear and a housing. Use spacers or spacer washers to hold two parts a fixed distance apart on a bolt, e.g. a pulley clear of a frame. Use standoffs to mount circuit boards, displays and panels clear of a case or plate, to stack boards, and (in nylon) to insulate them. It is the cheapest, simplest adjustment there is and needs no design changes.
- **when_not_to_use**: When the adjustment must be made often or continuously: use a levelling foot, locking adjustment screws (push-pull screws) or a slotted mount with a jacking screw instead. For a tapered gap or a quick tight fit under load, use a wedge (Self-locking wedge, which covers tapered shims and folding wedges). For a gap that must also seal, use a gasket. Where the parts must be located exactly and repeatably without fiddling, design in locating features (locating pins, kinematic coupling, exact-constraint mounting). Don't use many thin shims, or soft paper, wood or PLA shims, under heavy or vibrating machinery: they compress and cause soft foot; use a few metal shims or one machined block.
- **environment_limits**: Carbon-steel shims rust, and rust under a foot changes the height ('dirt is a shim'), so stainless shims are preferred (Acoem; LUDECA). Plastic-film peel shims work from about -70 °C to +220 °C (polyester) and above 400 °C (polyimide) (Jicey). Printed spacers soften from about 60 °C (PLA), 80 °C (PETG) or 110 °C (ASA) under load (CNC Kitchen) and creep under a constant clamp load, so bolts through them can loosen over time (Thrinter). *(unverified parts omitted)*
- **safety_notes**: Thin metal shims and cut shim stock have sharp edges and corners: handle with gloves and deburr cut edges (Acoem; LUDECA recommends burr-free, rounded-corner shims). Lock out (switch off and isolate) a machine before putting your hands under its feet (LUDECA). Metal standoffs fitted where there is no board hole can short-circuit a circuit board (ASRock), and metal standoffs and washers connect the board's mounting holes to the case, so use nylon ones where the board must stay insulated (Wikipedia 'Spacers and standoffs').
- **common_failures**: (1) Too many thin shims make a springy stack that lets the part rock or move when bolts are tightened (soft foot): use three or four at most (LUDECA; Acoem). (2) Dirt, paint or rust under the shim changes the height: clean first (Acoem). (3) Trusting the stamped thickness: measure the stack (Acoem). (4) A shim bent by the bolt threads: pull it back slightly from the bolt (Acoem). (5) Soft shims (paper, card, wood, PLA) crush or creep and the part sinks or the bolt loosens: use metal or a stiffer plastic. (6) A shim that only touches part of the foot leaves it rocking (angular soft foot); a single shim cut to fit the wedge-shaped gap is better than a stair-step of shims (Acoem). (7) An extra or misplaced metal standoff shorts a circuit board (ASRock). (8) Wrong standoff thread or length (e.g. M3 instead of M2.5, or too short for the connector headers between stacked boards) (Pololu).
- **related**: 
  - Self-locking wedge (wedge clamp, taper key): tapered shims and folding wedges are covered there; they set a gap by sliding a taper rather than by stacking flat pieces
  - Eccentric adjuster (eccentric nut, spacer or bushing): an off-centre spacer turned to shift a part sideways, then clamped
  - Levelling foot (adjustable foot, swivel levelling pad): screw-adjusted height instead of packing under a leg
  - Locking adjustment screws (push-pull screws, spring-loaded levelling screws): fine, repeatable height or tilt adjustment without loose shims
  - Slotted adjustment with a jacking screw (slotted mount, sliding motor plate): adjusts position sideways along slots
  - Tolerance ring (wavy-band press fit): an 'elastic shim' that takes up a radial gap between a shaft and a hole
  - Wave and disc springs (compact axial springs): spring washers that take up end float with a spring force instead of a fixed thickness
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin): lock washers stop loosening; plain washers only spread load or space parts
  - Gasket (flat, cord-in-groove or cast-in-place): looks like a washer or shim but is made to seal
  - Heat-set threaded insert: gives a 3D-printed part metal threads for standoff screws
  - Exact-constraint mounting (3-2-1 locating) and Locating pins and hole-and-slot: locate parts exactly by design rather than by shimming

### Pictures, videos and models

- **links**: 
  - [Metal shims.jpg (Wikimedia Commons, by Ikris72)](https://commons.wikimedia.org/wiki/File:Metal_shims.jpg): Pre-cut slotted metal shims of different sizes, all 1.00 mm thick *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Three types of standoffs.jpg (Wikimedia Commons, by Petteri Aimonen)](https://commons.wikimedia.org/wiki/File:Three_types_of_standoffs.jpg): Three loose standoffs in front and one fitted between a motherboard and the case *(licence: Public domain)*
  - [Hex Spacers and Standoffs.png (Wikimedia Commons, by Dhruvvasoya91)](https://commons.wikimedia.org/wiki/File:Hex_Spacers_and_Standoffs.png): Brass hex spacers and male-female and female-female standoffs *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Aluminum Standoff for Raspberry Pi: 11mm Length, 6mm M2.5 Thread, M-F (Pololu)](https://www.pololu.com/product/1952): Photos of male-female standoffs stacking an expansion board above a Raspberry Pi, and 11 mm versus 18.6 mm stacks *(licence: link only (supplier page))*
  - [Shims 101 (Acoem USA blog, Stan Riddle, 2012)](https://acoem.us/blog/shaft-alignment/shims-101-for-shaft-alignment/): How to use pre-cut stainless shims under machine feet: how many, how to place them, and measuring the stack *(licence: link only)*
- **make_it_yourself**: 
  - [Shimmy Shims (shim sizer, box and shims) (Printables 175528; URL from Printables API, page not opened)](https://www.printables.com/model/175528-shimmy-shims-shim-sizer-box-and-shims): A printable gap sizer that reads the gap to the nearest millimetre, plus a set of matching shims and a box, for wobbly furniture *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Spacer Kit - 66 items (M2, M3, M4, M5, M6, M8) (Printables 1182373; URL from Printables API, page not opened)](https://www.printables.com/model/1182373-spacer-kit-66-items-m2m3m4m5m6m8): Unthreaded printed spacers for M2 to M8 screws in heights from 3 to 40 mm, for mounting boards and parts *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
  - [Customizable PCB Standoff (Printables 100692; URL from Printables API, page not opened)](https://www.printables.com/model/100692-customizable-pcb-standoff): OpenSCAD parametric standoff with a base, for mounting circuit boards to flat surfaces; set base, height, diameters and fillet *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [M2.5 Standoff Spacer Female-Female Polygon 4-30mm (Printables 609450; URL from Printables API, page not opened)](https://www.printables.com/model/609450-m25-standoff-spacer-female-female-polygon-4-30mm): Printable self-tapping female-female standoffs for M2.5 screws (Raspberry Pi size); an M3 version is Printables 601883 *(licence: Public domain (Creative Commons Public Domain))*
  - [Door Hinge Shim Set (Printables 146015; URL from Printables API, page not opened)](https://www.printables.com/model/146015-door-hinge-shim-set): A set of printed hinge shims in several thicknesses with slots for the hinge screws *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: Two side-by-side cutaways: on the left, a motor foot bolted to a base with a gap underneath, then the same foot with three slotted shims (thin one sandwiched between thick ones) slid round the bolt; on the right, a circuit board held above a metal plate by female-female standoffs and screws, with an arrow showing the solder joints kept clear of the plate.
- **sources**: 
  - https://en.wikipedia.org/wiki/Shim_(spacer)
  - https://en.wikipedia.org/wiki/Spacers_and_standoffs
  - https://en.wikipedia.org/wiki/Jackscrew
  - https://en.wikipedia.org/wiki/Washer_(hardware)
  - https://en.wikipedia.org/wiki/Feeler_gauge
  - https://ludeca.com/blog/alignment/10213/5-dos-and-donts-of-shimming/
  - https://acoem.us/blog/shaft-alignment/shims-101-for-shaft-alignment/
  - https://jicey.com/shims.html
  - https://shop.eriks.be/en/peel-off-shims-hard-brass-or-stainless-steel-pr451749624000/1/
  - https://www.pololu.com/product/1952
  - https://download.asrock.com/Manual/InstallEATXMB/Install%20EATX%20Motherboard.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://commons.wikimedia.org/wiki/File:Metal_shims.jpg
  - https://commons.wikimedia.org/wiki/File:Three_types_of_standoffs.jpg
  - https://commons.wikimedia.org/wiki/File:Hex_Spacers_and_Standoffs.png
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, making_tips_3d_printing, off_the_shelf_parts

## 336 Locking adjustment screws (push-pull screws, spring-loaded levelling screws)

*adjusters, levellers & spacers.* Screws that set the tilt, height or end position of a part and then hold it there; one screw pushes while its partner or a spring pulls, so the part is clamped firmly at the chosen setting, as in telescope mirror cells and 3D-printer bed levelling

*Also covers:* Also covers adjustable stop screws with lock nuts and three-point levelling.

### What it is

- **plain_name**: Screws you turn to tilt, raise or stop a part until it is just right, which then hold it there: one screw (or a spring) pushes while another screw (or the spring) pulls, so the part is squeezed between them and can't wobble or drift
- **term**: Locking adjustment screws (push-pull screw pairs, spring-loaded levelling screws, adjustable stop screws with lock nuts)
- **aliases**: 
  - push-pull screws / push and pull screws (telescope mirror cells, e.g. the MAK150 manual)
  - collimation screws / collimation bolts and locking screws (Newtonian telescope mirror cells)
  - bed levelling screws / levelling knobs / bed springs (3D printers)
  - tramming screws, bed tramming (the more exact word for 'bed levelling', Wikipedia 'Tramming')
  - three-point levelling / 3-point bed levelling (reference, pitch and roll screws)
  - kinematic mount adjusters / adjuster screws (optical mirror mounts)
  - foot screws / levelling screws (theodolites and surveyor's levels, on the tribrach)
  - silicone levelling columns / bed spacers (replacements for printer bed springs)
  - adjustable stop / stop screw / setting bolt with lock nuts (fixtures, e.g. GN 251.2, Ganter brand)
  - limit screws, H and L screws (bicycle derailleurs)
  - jam nut / lock nut (the second nut that locks a stop screw)
  - 'Nylock mod' (a nylon-insert nut in a printed levelling knob)
- **family**: adjusters, levellers & spacers
- **other_families**: locating & alignment, everyday fasteners & fixings
- **one_liner**: Two or three screws, each opposed by a second screw, a spring or a lock nut, that set the tilt, height or end position of a plate or part and then clamp it at that exact setting, as on telescope mirror cells, 3D-printer beds and machine end stops.
- **complexity**: A few parts. At each adjustment point: an adjusting screw (the push screw), plus its opponent, which is either a pull (locking) screw, a compression or extension spring (or a rubbery silicone column), or a second nut jammed against the first; a threaded hole, nut, printed knob with a nut, or threaded insert for each screw; and the plate being adjusted (mirror cell, printer bed, bracket). A plate usually has three such points. Example: 'bed plate, 3 flat-head screws, 3 springs, 3 knurled knobs with nuts'.
- **how_it_works**: A screw on its own can push a part away but can't hold it against being lifted, so the part can rattle, sag or drift. Here every adjusting screw has an opponent: a second screw that pulls the part towards the base (a push-pull pair), a spring that keeps the part pressed against the screw (spring-loaded), or, for a single stop screw, a thin second nut tightened against the first (a jam nut). Each turn moves that point by one thread pitch (0.7 mm for an M4 screw), and with three points (a reference, one for front-to-back tilt and one for side-to-side tilt) a flat plate can be set to any small height and tilt without being bent. Once set, the opposing forces press the threads together so friction stops them turning.

### Finder attributes

- **job**: line parts up exactly: sets a tilt, height or end position precisely (bed tramming, mirror collimation, end stops), join and hold: clamps the part firmly at that setting so it can't wobble or drift
- **motion**: none once locked; while adjusting: multiple (each screw moves its support point up or down by a few millimetres, which tilts the plate by a few degrees at most)
- **degrees_of_freedom**: 0 once locked. While adjusting, three screws give 3 (height plus tilt in two directions, called pitch and roll); a single stop screw gives 1 (how far it sticks out).
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): the screw thread, loaded by the opposing screw, spring or jam nut, holds by friction, so pushing on the part does not turn the screws
  - self-aligning or self-centring: only in kinematic versions, where ball-ended screws sit in a cone, a V-groove and on a flat, so the plate returns to the same place after a knock and can grow with heat without bending (Wikipedia 'Mirror mount'; Rehorst's kinematic printer bed)
- **holding_principle**: friction or clamping (force-fit): the push against the pull loads the threads so friction holds the setting; spring force (a spring or springy part presses it in place) in spring-loaded versions; shape (form-fit) where screw tips sit in cones and grooves in kinematic versions
- **input_output**: An adjuster, not a drive: turning the screw -> a small straight movement of that support point, one thread pitch per turn (0.5 mm for M3, 0.7 mm for M4, 0.8 mm for M5 coarse threads; 0.5 mm for M4 fine), which becomes a small tilt of the plate. An optical 1/4-80 adjuster (80 threads per inch) moves about 0.32 mm per turn (arithmetic from the thread). Back-drivable: no, thread friction plus the opposing preload stops the load turning the screws; but vibration can slowly turn a screw held only by a soft spring.
- **power**: passive (no power needed)
- **removability**: removable: unscrew it; the setting is lost unless you count turns or leave the reference screw alone
- **reuse_cycles**: effectively unlimited for metal screws in metal threads, nuts or threaded inserts; fewer for screws turned straight into printed plastic, whose threads wear (Hubs advises inserts for repeated assembly)
- **tools_needed**: a hex key or screwdriver for collimation screws (the MAK150 uses a 4 mm hex key); fingers for knurled levelling knobs; two spanners for a stop screw and its jam nut; a sheet of paper or feeler gauge, a dial gauge or a bubble level to check the result
- **seal**: none
- **load**: Light to heavy: printer beds, mirror cells and optical mounts carry light loads; fixture stops and setting bolts (e.g. Strong along the screw in the push direction; in the pull direction only as strong as the spring or pull screw (a soft spring lets the part lift or sag); weak sideways, where the screws bend, unless the part is also located by cones and grooves or clamped. *(unverified parts omitted)*
- **adjustable**: yes: that is its purpose. Loosen the locking screw or jam nut (or just turn against the spring), set the new position, and lock again.
- **play_and_precision**: No play when properly preloaded, which is the point of opposing every push. Fine steps: 0.7 mm per turn for an M4 knob; one printed click knob claims 0.01 mm per click (Printables 422895). Repeatable while locked, but spring-only versions can drift with vibration, temperature and orientation (soft springs let a telescope mirror sag when pointed straight up, IceInSpace forum). Kinematic versions return to the same place after a shock (Wikipedia 'Mirror mount'). Corrects only small misalignment: a few millimetres of screw travel, so a few degrees of tilt.
- **access_needed**: one side only (blind) for most: knobs under a printer bed or screws at the back of a mirror cell are turned from one side; some beds need a hand above as well to stop the screw head spinning; a stop screw with a jam nut needs room for two spanners on the nut side
- **materials**: Steel or stainless-steel screws (flat-head screws in countersunk holes on printer beds, ball-tipped screws on kinematic mounts), steel compression or extension springs, or silicone or TPU columns instead of springs; aluminium, steel, cast tooling plate or wood for the plates and cells; nuts pressed into printed PETG or PLA knobs; heat-resistant PTFE or Torlon blocks where screws thread into plastic next to a heated bed (Rehorst); SLA resin bodies with epoxied bushings for small printed mirror mounts (MIT class guide).
- **maker_difficulty**: easy: ordinary screws, nuts and springs, with simple printed knobs or brackets; moderate for a kinematic version, whose cone, groove and flat seats need to be accurate

### Making it

- **processes**: 
  - off-the-shelf part: screws, springs, knurled knobs, nyloc nuts, jam nuts, setting bolts and adjustable stops
  - 3D print (FDM): levelling knobs that hold a nut, three-point bed brackets, spacers and TPU columns
  - 3D print (resin): small kinematic mirror mounts (an MIT class guide recommends SLA over FDM)
  - CNC or drill and tap: threaded holes in metal plates and blocks
  - laser cut: flat plates and brackets with clearance holes
  - woodwork: simple telescope mirror cells (Wikipedia: basic cells are built from wood, plastic or metal)
- **print_in_place**: no: the screws, nuts and springs are separate; the printed parts are knobs, brackets, spacers or columns that are assembled with them
- **making_tips_3d_printing**: Use three adjustment points, not four: three points define a plane, while a fourth screw just bends the bed or the carriage under it (Rehorst). Put the screws close to where the support structure is stiffest (Rehorst). Don't rely on threads printed into the part for an adjuster you will turn often: Hubs rates printed threads as unsuited to sizes under M5 and self-tapping screws as unsuited to repeated assembly, so press a nut into the printed knob, use a captive nut pocket or a heat-set insert, or let the screw roll its own thread into a tougher plastic block, as Rehorst does with PTFE or Torlon blocks beside his heated bed. To stop the setting drifting, use a nylon-insert (nyloc) nut in the knob (Printables 317119), add click detents to the knob (Printables 422895 prints its snap features in PETG because PLA may become brittle and fatigue), fit stiffer springs or silicone or TPU columns (Printables 577841 prints TPU columns at 20% infill and raises infill to make them stiffer), or swap the springs for nuts once the bed is set (Rehorst: 'if you allow something to move, it will!'). If you need the bed to pivot cleanly while adjusting, keep springs or use a kinematic seat (cone, slot, flat) rather than rigid lock nuts, which force something to flex (Rehorst). For a printed kinematic mirror mount, an MIT class guide uses ball-tipped M4 screws in epoxied bushings and extension springs on dowel pins, and recommends SLA over FDM; expect more thermal drift than a bought metal mount. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Three points, not four: 'two points define a line and 3 points define a plane'; four levelling screws bend the bed plate, the carriage plate or both (Rehorst, https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html).
  - Three-point order: set the reference screw for overall height, then adjust pitch first and roll second; adjusting roll doesn't disturb pitch because the bed pivots on the other two screws (Rehorst blog, as above). The same idea on a theodolite: bring the bubble to centre by turning two foot screws together, inward or outward, then use the third foot screw for the other bubble (NPTEL, https://archive.nptel.ac.in/content/storage2/courses/105107122/modules/module6/html/54.htm).
  - Push-pull pairs: turn each screw 'no more than 1/4 turn' at a time; loosen the opposing screw of the set before tightening its partner, then make the opposite change on the other two sets, keeping all screws 'not too loose and not too tight' (iOptron MAK150 manual, https://astronomics.com/cdn/shop/files/6101_MAK150_Collimation.pdf).
  - Telescope cells with spring screws plus separate lock screws: use springs strong enough to carry the mirror, collimate with the spring screws, then only 'nip' the lock screws; lock screws should never be used to adjust or be done up too tight (IceInSpace forum, https://www.iceinspace.com.au/forum/showthread.php?p=15261). Often only two of the three cell screws need adjusting; leave the third in a middle position (N. O. Carlin's collimation guide, https://bbastrodesigns.com/kolli/kolli.html).
  - Jam nut on a stop screw: tighten the inner nut to about a quarter to a half of the outer nut's torque, hold it with a spanner, then tighten the outer nut to full torque; if the inner nut is tighter than the outer, the lock is unreliable (Wikipedia 'Jam nut', https://en.wikipedia.org/wiki/Jam_nut).
  - Thread pitch sets the step size: ISO coarse pitch is 0.5 mm for M3, 0.7 mm for M4 and 0.8 mm for M5; fine M4 is 0.5 mm (Wikipedia 'ISO metric screw thread', https://en.wikipedia.org/wiki/ISO_metric_screw_thread).
  - Kinematic seats: reference screw tip in a chamfered hole, pitch screw in a chamfered slot, roll screw on a flat, with springs holding the plate down, lets a heated bed expand without bending (Rehorst, https://hackaday.io/project/28933-kinematic-mount-for-3d-printer-bed). On mirror mounts, the three balls make three, two and one points of contact, exactly six (Wikipedia 'Mirror mount', https://en.wikipedia.org/wiki/Mirror_mount).
  - For adjusters in printed parts, prefer metal inserts or nuts: printed threads are 'not suited for small threads (less than M5)' and self-tapping screws are 'not optimal for repeated disassembly' (Hubs, https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/).

### When to use it

- **everyday_examples**: 
  - the spring-loaded levelling knobs under the bed of many 'bed slinger' 3D printers (Wikipedia 'Tramming')
  - the collimation screws at the back of a reflecting telescope, often in push and pull pairs (iOptron MAK150 manual)
  - the H and L limit screws on a bicycle derailleur, which the derailleur's spring pulls against so the chain can't go into the spokes (Park Tool)
  - the three foot screws that level a surveyor's theodolite on its tripod (NPTEL)
- **when_to_use**: When something must be set once to an exact tilt, height or end position and then stay put: levelling (tramming) a printer bed, collimating a telescope mirror or aiming a laser mirror, squaring a sensor, camera or tool to a machine, or setting how far a part or a workpiece may travel (fixture stops, derailleur limit screws). Push-pull pairs and stiff springs are best when the part is jolted, transported or turned in different directions; spring-loaded screws are best when you adjust often and want the plate to pivot freely while you do. Use three points for anything flat.
- **when_not_to_use**: When you need large or frequent position changes, use a lead screw or a slide instead. For finer steps than a normal screw allows, use a differential screw or a micrometer head. When the part must come off and go back to exactly the same place without readjusting, use a kinematic coupling or locating pins. To level a whole table or machine on the floor, use levelling feet. For moving a motor or bracket sideways in slots, use a slotted mount with a jacking screw. Don't use four adjustment screws on a flat plate (it bends); and don't rely on springs alone where the part is heavy, carried around or tipped (it will sag or drift: use push-pull pairs, lock screws, or nuts once set).
- **environment_limits**: Vibration slowly turns knobs held only by soft springs, so the setting drifts (Printables 422895 adds click detents so the knob isn't 'vibrating out of position'). Heat: plastic knobs and blocks next to a heated bed can soften or loosen (Rehorst found one PTFE screw block 'getting wobbly' and redesigned it), and printed mirror mounts drift more with temperature than commercial ones (MIT class guide). Gravity: soft springs compress under a heavy mirror pointed straight up (IceInSpace forum). Temperature change makes a rigidly clamped plate try to bend; kinematic seats let it expand freely (Rehorst). *(unverified parts omitted)*
- **safety_notes**: Mostly low risk. Over-tightened locking screws can distort a mirror or optic, spoiling it (IceInSpace forum; Photonic Solutions: 'Avoid over-tightening locking screws'). Stop and limit screws can be safety-critical: a derailleur limit screw set wrong lets the chain go into the spokes (Park Tool), and a machine stop that loosens lets a part over-travel, so always lock the jam nut. Printer beds can be hot, and some are mains-heated (Rehorst's 750 W line-powered heater), so adjust them cold and keep away from the heater wiring. *(unverified parts omitted)*
- **common_failures**: (1) The bed or mirror slowly drifts out of adjustment because soft springs let vibration turn the knobs; fix with stiffer springs, silicone or TPU columns, nyloc nuts or click knobs (Printables 317119, 422895, 577841), lock screws, or nuts once set (Rehorst). (2) Four-point beds that never stay level because each screw bends the plate (Rehorst); convert to three points. (3) Over-tightened lock screws pulling the setting off or distorting the mirror; only nip them (IceInSpace forum). (5) The screw spinning with the knob; Printables 317119 adds a nut tightened against the bed to stop it. (6) Worn or stripped threads in printed plastic; use nuts or inserts (Hubs). (7) A jam nut that works loose because the inner nut was tightened harder than the outer (Wikipedia 'Jam nut'). (8) Running out of screw travel, or a bed that isn't flat, which three-point levelling can't correct (a commenter on Rehorst's blog had to go back to four-point adjustment for a warped bed). *(unverified parts omitted)*
- **related**: 
  - Differential screw (fine adjustment screw): two threads of slightly different pitch for extra-fine movement; a different principle, often used inside optical adjusters
  - Kinematic coupling (balls in V-grooves): the cone, groove and flat seats that adjuster tips sit in, so a plate returns exactly to place
  - Exact-constraint mounting (3-2-1 locating): the rule behind using three, not four, support points
  - Thread-locking hardware (nyloc nut, lock washer): keeps a single screw from turning; used inside levelling knobs
  - Levelling foot (adjustable foot): one screw and pad under each leg sets a machine or table to the floor, rather than tilting a plate on its base
  - Slotted adjustment with a jacking screw: pushes a motor or bracket sideways in slots, then separate bolts clamp it
  - Eccentric adjuster: a turning off-centre bush that shifts a wheel or pulley, then is clamped
  - Shims, spacers and standoffs: fixed packing with no adjustment; what springs are sometimes replaced with once a bed is set
  - Tool-free fasteners (thumbscrew, wing nut): the knurled knobs used to turn levelling screws by hand
  - Lead screw and nut: moves a part continuously rather than setting and locking it

### Pictures, videos and models

- **links**: 
  - [Instruction of Collimating iOptron MAK150 (manufacturer PDF)](https://astronomics.com/cdn/shop/files/6101_MAK150_Collimation.pdf): Photos of the three sets of push and pull screws on a telescope mirror cell (push screws stand higher than pull screws) and step-by-step figures of which screw to turn which way *(licence: link only (manufacturer document))*
  - [Mirrormount1.jpg (Wikimedia Commons, by Alison Chaiken, 2006)](https://commons.wikimedia.org/wiki/File:Mirrormount1.jpg): Annotated photo of a kinematic optical mirror mount 'showing some of the mechanism' (Wikipedia 'Mirror mount' caption): a front plate tilted by adjustment screws in a fixed back plate *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [3 Point Print Bed Leveling vs 4 Point Bending (Mark Rehorst's Tech Topics blog)](https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html): Diagram and photos of three-point printer bed levelling with reference, pitch and roll screws, and why four screws bend the bed *(licence: link only)*
  - [Kinematic mount for 3D printer bed (Mark Rehorst, hackaday.io)](https://hackaday.io/project/28933-kinematic-mount-for-3d-printer-bed): Renders and photos of a heated bed resting on three levelling screws in a chamfered hole, a chamfered slot and on a flat, held down by springs *(licence: link only)*
  - [Rear Derailleur Adjustment (Park Tool)](https://www.parktool.com/en-us/blog/repair-help/rear-derailleur-adjustment): Photos of a derailleur's H and L limit screws stopping its travel, and how to set them by quarter turns *(licence: link only)*
- **make_it_yourself**: 
  - [Ender 3 S1/S1 pro - Locking Bed Level Knob (Printables 422895; URL from Printables API, page not opened)](https://www.printables.com/model/422895-ender-3-s1s1-pro-locking-bed-level-knob): Printed levelling knob holding a pressed-in M4 nut, with snap detents that stop vibration turning it and give clicks of about 0.01 mm (designer's figure); printed in PETG *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Easy printed bed levelling knob with M4 nyloc nut for Ender (and more) (Printables 317119; URL from Printables API, page not opened)](https://www.printables.com/model/317119-easy-printed-bed-levelling-knob-with-m4-nyloc-nut-): Printed knob that holds a nylon-insert lock nut so the bed stops drifting; notes adding a plain nut to stop the screw turning *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Ender3/Ender3 Pro bed levelling column / bed springs replacement (Printables 577841; URL from Printables API, page not opened)](https://www.printables.com/model/577841-ender3ender3-pro-bed-levelling-column-bed-springs-): TPU columns that replace bed springs; stiffness is tuned by infill, up to nearly solid *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Anet A8 3 points bed levelling conversion (Printables 110874; URL from Printables API, page not opened)](https://www.printables.com/model/110874-anet-a8-3-points-bed-levelling-conversion): Printed parts to convert a four-screw printer bed to three-point levelling *(licence: CC BY (Creative Commons Attribution))*
  - [Kinematic Mirror Mounts (Printables 1308932, LIBRE-hub project; URL from Printables API, page not opened)](https://www.printables.com/model/1308932-kinematic-mirror-mounts): Printable laser mirror mounts adjusted by three knobs (two to move, one left fixed), based on UC2 cubes *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [3D Printed Kinematic Mirror Mounts (MIT class page)](https://fab.cba.mit.edu/classes/865.24/people/max/kinematics.html): Build guide with parts list: SLA-printed body, three ball-tip M4 screws in epoxied bushings, and extension springs on dowel pins that pull the plate onto the screws *(licence: link only (licence not stated))*
- **diagram_idea**: Side view of a plate above a base with three kinds of adjuster: a push-pull pair (a push screw threaded through the base pressing up on the plate, beside a pull screw passing through the base into the plate), a spring-loaded screw (spring between plate and base, knob below), and a stop screw locked by a jam nut, with arrows showing the opposing forces; an inset top view marks the three points as reference, pitch and roll.
- **sources**: 
  - https://astronomics.com/cdn/shop/files/6101_MAK150_Collimation.pdf
  - https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html
  - https://hackaday.io/project/28933-kinematic-mount-for-3d-printer-bed
  - https://en.wikipedia.org/wiki/Tramming
  - https://en.wikipedia.org/wiki/Mirror_mount
  - https://en.wikipedia.org/wiki/Mirror_support_cell
  - https://en.wikipedia.org/wiki/Jam_nut
  - https://en.wikipedia.org/wiki/ISO_metric_screw_thread
  - https://bbastrodesigns.com/kolli/kolli.html
  - https://www.iceinspace.com.au/forum/showthread.php?p=15261
  - https://fab.cba.mit.edu/classes/865.24/people/max/kinematics.html
  - https://photonicsolutions.co.uk/the-ultimate-guide-to-kinematic-mirror-mounts/
  - https://www.3doptix.com/catalog/optomechanics/optics-mount/thorlabs/KM100
  - https://www.ganternorm.com/en/products/3.2-Mounting-positioning-levelling-with-screws-clamping-and-supporting-elements/Positioning-elements-Clamping-pads/GN-251.2-Setting-bolts-with-limit-switch
  - https://www.amf.de/en_us/stop-adjustable-75663
  - https://archive.nptel.ac.in/content/storage2/courses/105107122/modules/module6/html/39.htm
  - https://archive.nptel.ac.in/content/storage2/courses/105107122/modules/module6/html/54.htm
  - https://www.parktool.com/en-us/blog/repair-help/rear-derailleur-adjustment
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://commons.wikimedia.org/wiki/File:Mirrormount1.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, load, making_tips_3d_printing, off_the_shelf_parts, safety_notes

## 395 Slotted adjustment with a jacking screw (slotted mount, sliding motor plate)

*adjusters, levellers & spacers.* Screws pass through slots instead of round holes, so a part such as a motor can slide to a new position, often pushed by a separate screw, and is then locked by tightening the screws

*Also covers:* Also covers adjustable centres for belts and chains.

### What it is

- **plain_name**: Screw holes stretched into slots, so a part such as a motor can be slid along a little and then clamped tight; often a separate screw pushes or pulls it along, so you can tighten a belt or chain and line it up before locking it
- **term**: Slotted adjustment with a jacking screw (slotted mount, sliding motor plate, adjustable centres)
- **aliases**: 
  - slotted holes, slotted mounting holes, elongated holes, oblong slots, short-slotted and long-slotted holes (structural steel terms, RCSC)
  - slotted mount, slotted bracket, sliding motor plate, adjustable motor mount, motor tensioner (3D-printer and robot-kit term)
  - motor slide rails, slide base, adjustable motor base (industrial; automatic motor bases add a spring)
  - jacking screw, jack bolt, jackbolt, pusher screw, adjusting screw, tensioning screw, draw bolt
  - adjustable centres, adjustable centre distance, take-up, centre-distance allowance (belt and chain drive terms, Gates)
  - chain tug, chain tensioner screw, 'banjo bolt' (BMX), chain adjuster (motorcycles)
  - horizontal dropout, track fork end, rear-facing forkend (bicycles: the axle slides in a slot)
  - pivoting motor plate with an arc slot, alternator adjusting bracket (a hinge plus a curved slot)
- **family**: adjusters, levellers & spacers
- **other_families**: tensioning, reels & take-up
- **one_liner**: A part is fixed with screws through slots instead of round holes, so it can be slid to set a belt or chain tension or line it up, usually pushed by a separate adjusting (jacking) screw, and is then locked by tightening the screws.
- **complexity**: A few parts: a base, plate or rails with slots (or a part with slotted feet), clamping screws or bolts with washers through the slots, a fixed lug, block or nut with a threaded hole for the jacking screw, the jacking screw itself (often with a lock nut), and sometimes a scale or index marks. The moving part is a motor, an idler pulley, a bearing block or a wheel axle.
- **how_it_works**: The clamping screws pass through slots, so while they are loose the part can slide along the slot but not sideways. A jacking screw, threaded through a fixed lug, pushes or pulls the part along a little for each turn, giving a fine, controlled move and stopping it from springing back while you work. When the belt or chain is tight enough, or the part is lined up, the clamping screws are tightened and friction under their heads locks it; the jacking screw also acts as a backstop against the belt's pull. On Prusa's MK3/MK4 X axis you slightly release the motor screws so 'the motor must be able to move', turn the screw at the back of the X-end to tension the belt, then tighten the motor screws again.

### Finder attributes

- **job**: 
  - tighten and hold tension: sets the tension of a belt or chain by moving a motor, idler or axle, then holds it
  - line parts up exactly: lines up pulleys, sprockets, shafts or a sensor before clamping
  - join and hold: once clamped it is an ordinary screwed joint
- **motion**: Pivoting versions rotate a few degrees about a hinge bolt while a bolt slides in an arc slot (Wikimedia Commons alternator tensioner photo) *(unverified parts omitted)*
- **degrees_of_freedom**: 0 once clamped. While adjusting, 1 (along the slot) if the slots and screws guide it well; with only one screw or wide slots it can also twist, so 2, which is why two jacking screws or a guide edge are used.
- **special_behaviour**: 
  - tensioning (takes up slack and holds): moving the motor or axle takes up belt or chain slack, then the clamping screws hold that setting; it is set by hand, not automatic
  - self-locking (holds under load, won't back-drive): the jacking screw's thread doesn't turn back under the belt's pull, because screw threads are self-locking (Wikipedia 'Jackscrew'), so it holds the setting even while the clamping screws are loose
- **holding_principle**: friction or clamping (force-fit): the clamping screws squeeze the part onto its base; plus shape (form-fit) where the jacking screw butts against the part or lug and stops it sliding back along the slot. Structural practice notes that a load along a slot is carried only by friction (a slip-critical joint), whereas a load across the slot bears on the bolt (UMD notes on RCSC 2000)
- **input_output**: An adjuster, not a drive: turning the jacking screw -> a small straight movement of one thread pitch per turn (0.5 mm for M3, 0.7 mm for M4, 0.8 mm for M5 coarse threads, Wikipedia 'ISO metric screw thread'); arrangement in line with the slot. Back-drivable: no, thread friction holds it (Wikipedia 'Jackscrew').
- **power**: passive (no power needed)
- **removability**: removable: undo the clamping screws and slide the part out; the setting is lost unless you mark it or leave the jacking screw where it is
- **reuse_cycles**: effectively unlimited with metal screws in metal threads or nuts; fewer when the jacking screw turns in a printed thread, which wears (use inserts or captive nuts, Hubs)
- **tools_needed**: hex key or spanner (Prusa uses a 2.5 mm hex key for all its belt adjustments); a straightedge or laser tool to check pulley alignment (IronHorse motor base instructions); optionally a belt-tension gauge or phone app
- **seal**: none
- **load**: Light to heavy, depending on the screws: from M3 screws on a printer motor to steel slide rails under large electric motors (US Motors; Soco). Strong across the slot, where the bolts bear on the slot sides; along the slot it holds only by clamping friction unless the jacking screw or a stop backs it up (UMD notes on RCSC 2000: slotted holes are normally placed with the slot across the load). Shock or vibration along the slot can make it creep.
- **adjustable**: yes: that is its purpose. Loosen the clamping screws, turn the jacking screw (or slide by hand), re-tighten; re-adjust as belts and chains stretch (Tsubaki: chain elongates 0.05 to 0.1 % early in use, so adjustment is required)
- **play_and_precision**: No play once clamped. Fine resolution with a jacking screw: an M3 screw moves 0.5 mm per turn, so a quarter turn is about 0.12 mm (arithmetic from the thread pitch). Belt drives tolerate only small misalignment (Gates: synchronous belts no more than 1/4 degree or 1/16 in per foot). Not a repeatable locator: use pins or a hole-and-slot pair when the part must return to exactly the same place. *(unverified parts omitted)*
- **access_needed**: one side only (blind) when the clamping screws go into tapped holes, T-slot nuts or captive nuts; both sides when through-bolts and nuts are used; the jacking screw needs room for a hex key or spanner along its axis
- **materials**: Steel or aluminium plates and rails (industrial slide rails are fabricated galvanised steel, Soco), printed brackets in PETG, ASA or ABS (Printables 338646 is printed in ABS or ASA), plywood or MDF bases with slots routed or cut; steel screws with washers. Hard materials hold best; soft wood and plastics need large washers because the screw heads sink in and creep.
- **maker_difficulty**: easy: slots print, laser-cut or rout easily and need only ordinary screws, washers and a nut or insert for the jacking screw

### Making it

- **processes**: 
  - 3D print (FDM): slotted motor brackets and tensioners with captive nuts or heat-set inserts
  - laser cut: slotted plates in acrylic, plywood or metal
  - CNC: milled slots in aluminium or steel plates
  - woodwork: routed or drilled-and-joined slots in a wooden base
  - sheet metal: slotted brackets and bent lugs for the jacking screw
  - off-the-shelf part: motor slide rails and bases, adjustable motor mounts, chain tugs
- **print_in_place**: partly: a slotted bracket with its jacking-screw lug prints as one piece, but it needs screws, washers and nuts or threaded inserts before it works (Printables 338646 needs two M3x40 screws and two M3 heat-set inserts)
- **making_tips_3d_printing**: Print slotted plates lying flat so the slots are formed in the XY plane, where outlines are most accurate and the clamping force runs along the layers rather than prising them apart (QIDI blog on clamping force direction; Make the slot as wide as a normal clearance hole for the screw and as long as the travel you need plus spare for belt stretch (Gates tensioning allowance). Put a washer under every screw head on a slot; one designer of a slotted NEMA 17 bracket notes it is 'probably a good idea to add washers' (Printables 217277), and washers stop heads sinking into plastic (QIDI blog). Don't let the jacking screw cut its own thread in the print: use a heat-set insert or a captive nut (Printables 338646 uses brass threaded inserts), with at least one screw diameter of plastic round it and a nut pocket about 0.2 mm larger than the nut (Hubs). Give the lug the jacking screw pushes against plenty of perimeters and infill, because it carries the full belt pull. Use PETG, ASA or ABS rather than PLA near warm motors: PLA softens above about 60 °C and creeps under constant load (Prusa PLA page; Thrinter creep test). Re-check tension after a few hours of use, because printed parts and new belts settle. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'adjustable motor mount', 'slotted motor mount', 'NEMA 17 motor bracket slotted', 'motor slide rails', 'motor slide base', 'adjustable motor base', 'automatic motor base' (spring-loaded), 'belt tensioner screw', 'jack bolt' or 'jacking screw', 'chain tug' or 'chain tensioner' (bicycle), 'track fork ends' or 'horizontal dropouts', 'idler pulley with slotted bracket', 'T-slot nut' (for sliding along aluminium extrusion), 'flat washer', 'heat-set insert', 'nylon-insert lock nut'.
- **rules_of_thumb**: 
  - Always leave room to move: Gates says fixed-centre belt drives are not recommended and gives a minimum centre-distance allowance for installing and for tensioning; for a synchronous belt 500 to 1000 mm long it is 1.8 mm shorter to fit the belt (sprockets removed) and 0.8 mm longer to tension it, with extra if the belt must go over flanged sprockets (Gates PowerGrip GT2 Drive Design Manual, Table 4, https://static.chipdip.ru/lib/569/DOC010569405.pdf).
  - If you must use fixed centres, Gates limits them to lightly loaded or motion-transfer drives and says the centre distance must be held within about 0.05 to 0.08 mm, because belt tension can vary by a factor of 3 or more from tolerance stack-up (same manual, section 11).
  - Keep pulleys lined up while sliding: synchronous belt misalignment should not exceed 1/4 degree or 1/16 in per foot (Gates, same manual); move the motor with the adjusting screw only to keep its alignment (IronHorse automatic motor base instructions, https://cdn.automationdirect.com/static/manuals/ironhorsemotorbases/ihautobaseinstall.pdf); with two adjusters, turn both an equal number of turns and check the index marks match (Honda CB400 owner's manual p. 60, https://www.bike-parts.fr/thumbs/pdf_url/img/owner_manuals/CB400B/2500_2500/0063.pdf).
  - Chains: set slack to about 4 % of the span (32 mm on an 800 mm span), or about 2 % for vertical drives, spans over 1 m, heavy frequent starts or reversing; re-adjust as the chain stretches 0.05 to 0.1 % early on (Tsubaki Installation & Maintenance Guide p. 15, https://catalog.ustsubaki.com/view/303394094/15/).
  - Put slots across the main load where you can; a load along the slot is held only by friction, which is why structural codes treat such joints as slip-critical and use washers over slots (UMD lecture notes summarising RCSC 2000, https://user.eng.umd.edu/~ccfu/ref/Bolt%26Weld.pdf). For a belt pull along the slot, let the jacking screw act as the backstop.
  - Use jack bolts rather than a hammer to shift a machine sideways, place them where they let you pivot the machine, and back them off once the hold-down bolts are tight (Ludeca, https://ludeca.com/blog/alignment/10070/using-jack-bolts-for-horizontal-correction-when-performing-shaft-alignment/).
  - Use the minimum belt tension that transmits the power without slipping; more shortens belt and bearing life (IronHorse instructions, as above).

### When to use it

- **everyday_examples**: 
  - a 3D printer's X-axis motor that is slid along to tighten its belt (Prusa MK3/MK4)
  - a single-speed or track bike whose rear wheel slides in horizontal fork ends, pulled back by chain tugs (Sheldon Brown glossary)
  - a motorcycle's rear axle moved by two adjusting bolts to set chain slack (Honda owner's manual)
  - an older car's alternator, swung on a hinge and locked by a bolt in a curved slot to tension the fan belt (Wikimedia Commons photo)
- **when_to_use**: When a belt or chain needs setting up once and re-tightening now and then as it stretches, and you can move one of the shafts (Gates prefers moving a shaft to adding an idler; the Belt tensioner entry agrees); when parts made with loose tolerances must be lined up on assembly; when you need more travel than an eccentric bush can give (the Eccentric adjuster entry suggests a slot when you need more than about twice the offset); for prototypes, where you don't yet know the exact centre distance. A jacking screw is worth adding whenever the part is heavy, the belt pull is strong, or you need fine, controlled moves.
- **when_not_to_use**: When tension must stay right on its own as a belt stretches or the load changes: use a spring-loaded idler (Belt tensioner) or an automatic spring motor base (IronHorse). When a part must come back to exactly the same place every time: use locating pins or a hole-and-slot pair. For a very compact adjustment, an eccentric adjuster is neater. For setting tilt or height rather than sliding, use locking adjustment screws, shims or levelling feet. For continuous, powered movement use a lead screw. Avoid relying on friction alone along a slot under shock or vibration; add the jacking screw as a stop.
- **environment_limits**: Printed slotted brackets near warm motors creep and soften, PLA above about 60 °C (Prusa PLA page; Thrinter creep test). Outdoors, plain steel slides and screws rust and seize; galvanised or stainless parts last longer (industrial slide rails are galvanised steel, Soco). Rail tubes on automatic motor bases need greasing every 6 months (IronHorse instructions). *(unverified parts omitted)*
- **safety_notes**: Belt and chain drives trap fingers, hair and clothing: switch off and unplug before adjusting, keep tools outside guards and refit guards afterwards (IronHorse instructions: 'Keep hands, tools, and clothing clear of any moving parts'). Over-tensioning overloads shafts and bearings (Gates; IronHorse). On road vehicles the axle adjusters also set wheel alignment; Honda says chain adjustment 'requires special tools' and to have it done by a dealer, so follow the vehicle's manual.
- **common_failures**: (1) The part creeps back along the slot under belt pull and the belt goes slack: add or tighten the jacking screw as a backstop, use washers, and tighten the clamping screws properly (UMD/RCSC notes on slip along slots). (2) The part twists while the screws are tightened, misaligning the belt and wearing it on one edge: tighten evenly, move it with the adjusting screw only, turn twin adjusters by equal amounts and check marks (IronHorse; Honda; Gates on misalignment). (3) Not enough slot length left after the belt or chain stretches: design in the tensioning allowance (Gates; Tsubaki). (4) The printed thread for the jacking screw strips: use an insert or captive nut (Hubs; Printables 338646). (5) Screw heads sink into plastic or wood and the joint loosens: washers, harder material, re-tighten after settling (QIDI blog; Printables 217277). (6) Jack bolts left pressing after the hold-down bolts are tight, preloading the machine: back them off (Ludeca). (7) Over-tightened belts wear bearings (IronHorse).
- **related**: 
  - Eccentric adjuster (eccentric nut, spacer or bushing): a compact turning adjustment with less travel
  - Belt tensioner (spring-loaded idler): keeps tension automatically instead of set-and-lock
  - Locking adjustment screws (push-pull screws, spring-loaded levelling screws): set tilt or height with opposing screws rather than sliding
  - Shims, spacers and standoffs: fixed packing to set a gap with no screw adjustment
  - Lead screw and nut: the same screw idea used to drive a part continuously
  - Turnbuckle: sets tension in a rod or cable by screwing
  - Locating pins and hole-and-slot: a slot used to locate a part exactly, not to adjust it
  - Aluminium-extrusion connectors (T-slot nuts and brackets): a continuous slot, so a mount can be slid anywhere along the extrusion and clamped
  - Dovetail slide with gib strip: a guided slide for parts that must move straight, with play taken up by a gib
  - Ordinary screw joint (bolt and nut): what it becomes once the screws are tightened

### Pictures, videos and models

- **links**: 
  - [Tendeur courroie alternateur automobile.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tendeur_courroie_alternateur_automobile.jpg): Car alternator belt tensioners: the alternator swings on a hinge and its position is set by a bolt sliding in an oblong slot *(licence: CC BY-SA 3.0 / GFDL (reuse with credit))*
  - [Kettenspanner für Singlespeed-Räder.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Kettenspanner_f%C3%BCr_Singlespeed-R%C3%A4der.jpg): A screw chain tensioner (chain tug) for bikes without derailleur gears *(licence: Public domain)*
  - [Surly forkends.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Surly_forkends.JPG): Rear-facing track fork ends on a single-speed mountain bike: the axle slides in a slot to set chain tension *(licence: Public domain)*
  - [Adjusting belt tension (MK4/S, MK3.9/S, MK3.5/S, MK3/S/+) (Prusa Knowledge Base)](https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380): Step photos of loosening the motor screws, turning the tensioning screw and re-tightening on a 3D printer *(licence: link only)*
  - [Using Jack Bolts for Horizontal Correction When Performing Shaft Alignment (Ludeca)](https://ludeca.com/blog/alignment/10070/using-jack-bolts-for-horizontal-correction-when-performing-shaft-alignment/): Figures of correct and incorrect jack-bolt positions on a motor base *(licence: link only)*
- **make_it_yourself**: 
  - [Nema 17 Stepper Motor - Bracket / Mount & Belt Tensioner (Printables 338646; URL from Printables API, page not opened)](https://www.printables.com/model/338646-nema-17-stepper-motor-bracket-mount-belt-tensioner): Two-part printed NEMA 17 bracket with a built-in screw tensioner (two M3x40 screws in brass inserts); Tinkercad source linked *(licence: CC BY)*
  - [Adjustable Motor Mount 2020 Extrusion Perpendicular Nema 17 (Printables 217277; URL from Printables API, page not opened)](https://www.printables.com/model/217277-adjustable-motor-mount-2020-extrusion-perpendicula): Simple motor mount for 2020 extrusion with slotted M3 screw holes for adjustment *(licence: CC BY)*
  - [Simple Prusa i3 MK4 s Y-Axis belt tensioner (Printables 575521; URL from Printables API, page not opened)](https://www.printables.com/model/575521-simple-prusa-i3-mk4-s-y-axis-belt-tensioner-3-mm-a): Screw-driven sliding idler tensioner with a large travel, built from M3 screws, nuts and a lock nut *(licence: GPL v2.0)*
  - [Ender 3 - XY Belt Tensioner (Printables 302473; URL from Printables API, page not opened)](https://www.printables.com/model/302473-ender-3-xy-belt-tensioner): Printed screw-pulled idler tensioners for a common printer, using an M5x30 screw as the puller *(licence: CC BY-NC)*
  - [Voron V2.4 Z-Drive Motor Tensioner Mod (Printables 838991; URL from Printables API, page not opened)](https://www.printables.com/model/838991-voron-v24-z-drive-motor-tensioner-mod-top-and-bott): A sliding-motor belt tensioner modification for a kit printer's Z drives *(licence: GPL v3.0)*
- **diagram_idea**: Top view of a motor plate with four slotted holes over a base, a belt running to a driven pulley, and a jacking screw in a fixed lug pushing the plate away from the pulley; step 1 shows the clamping screws loose and an arrow for the screw turn, step 2 the belt tight and the clamping screws locked, with a small inset of a bicycle axle in a horizontal fork end pulled back by a chain tug.
- **sources**: 
  - https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380
  - https://en.wikipedia.org/wiki/Jackscrew
  - https://en.wikipedia.org/wiki/ISO_metric_screw_thread
  - https://static.chipdip.ru/lib/569/DOC010569405.pdf
  - https://catalog.ustsubaki.com/view/303394094/15/
  - https://cdn.automationdirect.com/static/manuals/ironhorsemotorbases/ihautobaseinstall.pdf
  - https://acim.nidec.com/motors/usmotors/TechDocs/ProFacts/Slide-Rails
  - https://soco.co.nz/electric-motors/motor-components/slide-rails
  - https://ludeca.com/blog/alignment/10070/using-jack-bolts-for-horizontal-correction-when-performing-shaft-alignment/
  - https://user.eng.umd.edu/~ccfu/ref/Bolt%26Weld.pdf
  - https://www.bike-parts.fr/thumbs/pdf_url/img/owner_manuals/CB400B/2500_2500/0063.pdf
  - https://www.sheldonbrown.com/gloss_ch.html
  - https://www.sheldonbrown.com/gloss_e-f.html
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://qidi3d.com/blogs/print-lab/gopro-mounts-cyclists
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://commons.wikimedia.org/wiki/File:Tendeur_courroie_alternateur_automobile.jpg
  - https://commons.wikimedia.org/wiki/File:Kettenspanner_f%C3%BCr_Singlespeed-R%C3%A4der.jpg
  - https://commons.wikimedia.org/wiki/File:Surly_forkends.JPG
  - https://commons.wikimedia.org/wiki/File:Horizontal_rear_dropout.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, motion, play_and_precision

## 397 Levelling foot (adjustable foot, swivel levelling pad)

*adjusters, levellers & spacers.* A threaded stud with a pad, screwed into the bottom of a leg or machine, so turning it raises or lowers that corner, with a ball joint that often lets the pad sit flat on an uneven floor

*Also covers:* Also covers threaded inserts in tube legs and printed levelling feet.

### What it is

- **plain_name**: A screw-in foot under a table leg, cabinet, appliance or machine that you turn to make that corner a little taller or shorter, so the piece stops rocking and stands level; many have their pad on a ball, so the pad lies flat even where the floor slopes
- **term**: Levelling foot (adjustable foot, leveling foot; swivel or ball-jointed levelling pad)
- **aliases**: 
  - leveling foot / leveling feet (US spelling)
  - adjustable foot / adjustable feet / adjustable levelling feet
  - levelling element / leveling mount / levelling mount (machine-building trade names, e.g. Elesa LV.F, brand)
  - stud-mount levelling foot / threaded stud foot / screw foot (stud fixed in the base)
  - untapped foot or female-thread foot (the base has a threaded socket or ball that screws onto a rod already in the leg; Carr Lane calls this the 'plain leveling foot')
  - ball-jointed levelling foot / swivel levelling pad / swivel foot / articulated foot (e.g. GN 638, Ganter brand)
  - tilt foot / tilting adjustable foot / 'tilt glide machine feet' (Superior Glide, Keystone)
  - jig foot / jig leveling foot (fixture trade, Carr Lane brand)
  - machine foot, Stellfuss / Gerätefuss (German names seen in Printables model titles)
  - levelling glide / table leveler / leg leveller (furniture)
  - cabinet legs / plinth legs (kitchen base cabinets, Wikipedia 'Cabinetry')
  - bolt-down or ground-mounting levelling foot (base with fixing holes, e.g. Elesa LV.F)
  - anti-slip or no-slip levelling foot / no-slip disk (rubber-faced base)
  - threaded tube insert / square threaded insert / 'square tube leveling foot insert' (fits a foot into a hollow tube leg, Superior Glide)
  - lock nut / clamp nut / jam nut (the nut that holds the setting, e.g. on washing machine feet)
- **family**: adjusters, levellers & spacers
- **other_families**: hinges & pivots, everyday fasteners & fixings
- **one_liner**: A threaded stud with a foot pad that screws into the bottom of a leg, cabinet or machine; turning it in or out raises or lowers that corner so the piece stands steady and level, and the ball joint under many pads lets the pad lie flat on a sloping or uneven floor.
- **complexity**: A few parts: a threaded stud (steel or stainless steel, often with a hex or spanner flats for adjusting), a base or pad (plastic, metal, often rubber-faced), usually joined to the stud by a ball held in a socket, a lock nut to hold the setting, and something threaded to screw into: a tapped leg or machine base, a screw-on or weld-on mount, a T-nut or nut trapped in wood or in a print, or a threaded insert pressed into the end of a hollow tube leg. Example: 'M8 stud with ball end, plastic pad with rubber disc, lock nut, square tube insert with nut'.
- **how_it_works**: The stud is a screw, so each full turn moves the foot up or down by one thread pitch (1.25 mm for an M8 foot, Superior Glide), and you wind each corner in or out until the piece stops rocking and is level. The weight pushes straight down the stud and the friction in the thread stops it turning by itself; a lock nut tightened up against the leg or cabinet stops vibration slowly unscrewing it (Samsung and Amana washing-machine guides; Superior Glide). On swivel feet the stud ends in a ball held in a socket in the pad (a ball joint), so the pad tilts to sit flat on a floor that slopes or is not square to the leg (about 20 degrees in total on Carr Lane and Keystone tilting feet, 9 degrees on Superior Glide tilt feet), and the stud can turn inside the pad without the pad scrubbing round on the floor (Ganter GN 638). A hollow tube leg first gets a press-in threaded insert whose ribs grip the tube walls and which carries a nut for the stud (Superior Glide).

### Finder attributes

- **job**: 
  - line parts up exactly: sets the height of each corner so a table, cabinet, appliance, machine or printer stands level and does not rock
  - join and hold: screws into the leg and carries the weight down to the floor; bolt-down versions also fix a machine to the floor
- **motion**: none once set. While adjusting: slide (the stud screws in or out along its own axis; stems from 10 mm to 110 mm long are sold for M8 feet, Superior Glide) and, on swivel feet, the pad also rocks on its ball (rotate, about 20 degrees total tilt on Carr Lane and Keystone tilting feet, 9 degrees on Superior Glide tilt feet)
- **degrees_of_freedom**: 0 once set and locked. While adjusting: 1 (height; turning and rising are tied together by the thread). A swivel pad adds small rotations between pad and stud (tilt in two directions and spin), but with the pad standing on the floor these only let the pad settle flat.
- **special_behaviour**: 
  - self-aligning or self-centring: the ball-jointed pad tilts to sit flat on the floor; Ganter says the ball joint 'adapts to mounting surfaces that are uneven or not perpendicular to the screw axis' and 'prevents the clamping surface from rotating' while you turn the stud
  - self-locking (holds under load, won't back-drive): the weight on the thread does not turn the screw, so the foot keeps its height; vibration can slowly unscrew it unless a lock nut is tightened against the leg (Superior Glide)
- **holding_principle**: shape (the parts interlock; form-fit): the screw thread carries the weight; friction or clamping (force-fit): thread friction plus a lock nut tightened against the leg hold the setting, a press-in tube insert holds by its ribs pressing on the tube walls (Superior Glide), and rubber or TPE pads grip the floor by friction
- **input_output**: An adjuster, not a drive: turning the stud (or the base) -> the foot moves in or out by one thread pitch per turn (1.25 mm per turn for M8, so a quarter turn is about 0.3 mm). Shaft arrangement: in line. Back-drivable: no, the weight will not turn the screw; only vibration can, which a lock nut stops.
- **power**: passive (no power needed)
- **removability**: removable: the foot unscrews from its thread; a press-in tube insert or a weld-on mount stays in the leg
- **reuse_cycles**: many times: a steel stud in a steel nut, insert or tapped hole can be re-adjusted and swapped again and again; a thread printed in plastic wears faster
- **tools_needed**: fingers for small furniture feet; a spanner on the stud's hex or flats (Samsung says its washing machines may come with a spanner of about 14 mm) and a second spanner for the lock nut; a hex key for feet adjusted from the stud end (Carr Lane jig feet have a hex socket) or a screwdriver for kitchen cabinet legs turned from inside the cabinet (Wikipedia 'Cabinetry'); a spirit level or phone level to check; a drill and tap, a T-nut or a threaded insert to give a leg a thread; a rubber mallet to press in tube inserts (Superior Glide)
- **seal**: none (a press-in tube insert also closes off the open end of the tube, Superior Glide)
- **load**: Light to heavy, set by the thread size, the design and the maker's rating; figures differ a lot between makers, so use the rating of the foot you buy. Side by side: Superior Glide rates its furniture feet for static loads at 20 kg (M4), 60 kg (M6), 80 kg (M8), 120 kg (M10) and 150 kg (M12) per foot; Keystone rates tilting M10 feet at 75-250 kg per foot depending on base size; heavy-duty machine feet from fixture makers (Carr Lane, Ganter, Elesa) are made for machinery and conveyors and rated much higher, with Ganter calling its static load 'a guide value' to which a safety factor must be added. Strong when pushed straight down the stud (compression). Weak sideways: pushing or dragging the piece bends the stud and works the thread loose, more so the further it is wound out (Superior Glide: a fully extended stem 'becomes a lever'). Static ratings do not cover vibration, impact, or anything rolled or dragged (Superior Glide).
- **adjustable**: yes, that is its purpose: loosen the lock nut, turn the stud or base to raise or lower that corner, check with a level, then tighten the lock nut against the leg or cabinet (Samsung; Amana)
- **play_and_precision**: Small: fine height steps (about 0.3 mm per quarter turn of an M8 foot) and no play once the weight and the lock nut load the thread; without a lock nut, vibration slowly turns the foot (Superior Glide). Tolerates a floor that slopes or is out of square up to the pad's tilt range (about 20 degrees total, Carr Lane, Keystone; 9 degrees on tilt feet, Superior Glide); a rigid foot on a sloping floor stands on one edge of its base, which creeps until the piece rocks again (Superior Glide). *(unverified parts omitted)*
- **access_needed**: one side only (blind): the foot is screwed in from underneath, and some kinds are adjusted from above (kitchen cabinet legs through a hole in the cabinet floor, Wikipedia 'Cabinetry'; Carr Lane jig feet from the stud end). Fitting a press-in tube insert needs the open end of the tube (end of a tube or shaft).
- **materials**: Stud: zinc-plated or galvanised steel, or stainless steel for damp, washdown or corrosive places (Superior Glide; Carr Lane; Ganter GN 638-NI and NV use AISI 303 stainless, and its steel stud is property class 5.8). Base or pad: glass-fibre-reinforced polyamide (PA) or acetal (POM) plastic, steel or stainless steel (Elesa LV.F; Ganter; Superior Glide); white acetal (Delrin, brand) pads don't mark floors but have the lowest load capacity (Carr Lane). Floor face: NBR rubber or TPE anti-slip disc, or a PA6 pad for sealed hard floors (Elesa LV.F-AS; Superior Glide). Tube inserts: ribbed polyamide body holding a zinc-plated steel nut, for tube walls 1-2 mm thick (Superior Glide). Printed feet: PETG, PLA, ABS or ASA bodies with TPU pads, or whole feet in TPU (Printables models in make_it_yourself).
- **maker_difficulty**: easy: buy a foot and give the leg a thread (tap it, fit a T-nut or threaded insert, or trap a nut in a printed cap), or print a foot around a standard bolt and nut; moderate if you print the screw thread itself, which needs tuned clearances

### Making it

- **processes**: 
  - off-the-shelf part: levelling feet, swivel and bolt-down machine feet, tube inserts, weld-on or screw-on mounts, T-nuts and lock nuts
  - 3D print (FDM): TPU feet and pads, caps and adapters that hold a nut for a standard bolt, printed-thread feet, ball-jointed pads, and corner brackets that take a foot in an aluminium extrusion frame
  - woodwork: drilling a wooden leg for a T-nut or a threaded insert so a foot can screw in
  - CNC or drill and tap: threaded holes in metal machine bases and frames
- **print_in_place**: no: printed feet are printed as separate parts (threaded body, foot, ball, pad) and screwed, snapped or glued together, usually around a metal bolt and nut (Printables 1340235, 1318189, 198880, 1343635)
- **making_tips_3d_printing**: Easiest and strongest: let a metal bolt and nut carry the load and print only the parts around them. Printables 1318189 is a printed block that screws under a leg and holds an M8 nut for an M8 bolt; Printables 174610 is a cap for a 20 x 30 mm rectangular tube with a nut put in during a pause at a dummy filament change, glued in with a little silicone. Hubs rates printed threads as 'not suited for small threads (less than M5)' and asks for a wall around any threaded hole at least as thick as the fastener's diameter (5 mm for M5). If you print the thread itself, use a large, coarse thread with extra clearance: Printables 1340235 now offers 0.2, 0.4 and 0.6 mm thread tolerance gaps and says the larger gap 'is a safer bet for your first print'; Printables 196277 uses a 0.8 mm thread offset so the bolt turns smoothly at 0.2 mm layers. Small printed threads can be cleaned up with a tap (Printables 198880 recommends finishing its M5 thread with a tap). Keep plenty of thread engaged: Printables 196277 marks a minimum engagement of 21 mm on its printed glide, Superior Glide keeps at least two-thirds of the stem inside the insert, and even metal threads need at least 1 x the diameter engaged in steel and 2 x in aluminium (Nord-Lock), more in plastic. Layer lines are the weak direction: CNC Kitchen's hooks printed standing broke at 46-55% of the load of hooks printed lying flat, and Printables 1340235 v1.1 lengthened its screw channels because over-tightened screws cracked the bracket along layer lines, so do not over-tighten mounting screws in printed brackets. Material: PLA starts to give at about 60 degC (CNC Kitchen) and plastic spacers under a constant load slowly get thinner (creep, filamentspecs), so use PETG or ASA for feet under heavy, warm or outdoor loads (the designer of Printables 198880 suggests ASA for UV and heat on a windowsill) and keep the plastic in compression over a large area. Floor grip: glue a TPU pad into the foot with CA or hot glue (Printables 1340235), print the washer under a ball-jointed pad in TPU for friction (Printables 198880), or print the whole foot in TPU (Printables 367208, 15% gyroid infill; its thicker 18 mm version gives more thread engagement). Ball-jointed pads: Printables 198880 prints ball and socket in PETG with no supports and snaps the socket over the ball; in Printables 1343635 the M8 bolt press-fits into a printed ball that presses into the foot; moving printed parts generally need a gap of at least 0.3 mm (Prusa 'Modeling with 3D printing in mind'). Give the foot something to turn it by once the weight is on it: Printables 1340235 adds a 3/8 in square socket for a ratchet and includes printed wrenches. For aluminium extrusion frames, a printed corner bracket can hold an M8 foot with its lock nut (Printables 446009, 2020 I-type extrusion, printed without supports).
- **off_the_shelf_parts**: Search terms: 'levelling foot' or 'leveling feet' plus the thread (M4, M6, M8, M10, M12, 1/4-20 or 5/16-18; Superior Glide gives a thread chart, and M8 is the common furniture size), 'stud mount leveling foot', 'swivel leveling foot' or 'ball jointed leveling feet' (e.g. GN 638, Ganter brand), 'tilting adjustable feet', 'levelling feet for ground mounting' (bolt-down, e.g. LV.F, Elesa brand), 'anti-slip levelling foot' or 'no-slip disk', 'jig feet' and 'machine leveling feet' (e.g. Carr Lane, brand), 'mounts for leveling feet' (e.g. GN 349, Ganter brand), 'square threaded insert', 'round threaded tube insert' or 'threaded tube insert' for hollow legs (match the tube's outside size and wall thickness), 'tee nut' or 'threaded insert for wood' for wooden legs, 'hex jam nut' or 'lock nut', 'kitchen cabinet legs' or 'plinth legs', and 'anti-vibration levelling mount' (rubber-cushioned; see Elastomer isolation mount). Link to a catalogue for sizes rather than copying tables, e.g. https://www.keystonecastors.co.uk/levelling-feet-and-inserts/page/2/.
- **rules_of_thumb**: 
  - Steady first, level second: wind every foot fully in, find the two diagonal legs the piece rocks across, wind out one foot under a corner that lifts until the rocking just stops, then raise whole sides together to make it level; chasing level first means adjusting four feet against each other (Superior Glide 'Adjustable Leveling Feet Guide', https://superiorglide.com/product-guides/adjustable-leveling-feet-guide/).
  - Three points define a plane, so a three-legged stand never rocks, while four or more legs need all but three adjusted to the floor (Rehorst, https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html; Superior Glide: a four-legged piece 'pivots across two diagonal legs').
  - Size by load per foot: divide the total weight by the number of feet and stay inside the maker's static rating with a margin; Ganter calls its static load 'a guide value' to which a safety factor must be added (https://www.elesa-ganter.in/en/ind/Levelling-elements--Ball-Jointed-Leveling-Feet--GN638-ST), and Superior Glide's static ratings exclude vibration, impact and rolling or dragging. Ratings differ between makers: 80 kg per M8 furniture foot (Superior Glide) against 75-250 kg per M10 tilting foot (Keystone, https://www.keystonecastors.co.uk/levelling-feet-and-inserts/page/2/).
  - Don't wind a foot right out: keep at least two-thirds of the stem inside the insert (Superior Glide); in a tapped metal hole engage at least about 1 x the thread diameter in steel and 2 x in aluminium (Nord-Lock, https://www.nord-lock.com/learnings/bolting-tips/2015/the-experts-thread-engagement-in-a-tapped-hole/). If one corner needs more lift than that, use a tilt base or a packer under the whole side (Superior Glide).
  - Lock the setting: after levelling, tighten the lock nut up against the cabinet or leg (Amana, https://producthelp.amana.com/Laundry/Washers/Washer_Installation_Support/Leveling_a_Top_Load_washer; Samsung, https://www.samsung.com/au/support/home-appliances/how-do-i-level-my-washing-machine/).
  - Pad tilt range: about 20 degrees total on standard ball-jointed machine feet (Carr Lane, https://www.carrlane.com/engineering-resources/technical-information/jig-fixture-design/how-to-use-leveling-feet; Keystone lists a maximum tilt angle of 20 degrees for its tilting feet), 9 degrees on Superior Glide tilt feet; rigid feet are for floors that are flat and square to the leg.
  - Tube inserts: match the tube's outside size and its wall thickness (1-2 mm walls for Superior Glide's square inserts, sizes 20 x 20 to 50 x 50 mm, M8 to M12), line the insert's corners up with the tube's corners and press it in by hand or with a rubber mallet (https://superiorglide.com/product/square-threaded-inserts/).
  - Check the thread before forcing it: M8 (1.25 mm pitch) and 5/16-18 (about 1.41 mm pitch) look alike and each will start in the other's thread, then bind and strip the insert; stop if it gets stiff after two turns (Superior Glide).
  - Printed threads: avoid printing threads smaller than M5, and give a threaded hole a wall at least as thick as the thread diameter (Hubs, https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/).

### When to use it

- **everyday_examples**: 
  - the screw-in front feet of a washing machine, locked with a nut once level (Samsung; Amana)
  - kitchen base cabinet legs, turned from inside the cabinet with a screwdriver so the cabinets need no shims (Wikipedia 'Cabinetry')
  - the adjustable feet under workbenches, machines and conveyors (Carr Lane)
  - screw-in feet under 3D printers, tables and shelving, often printed (Printables 367208, 1340235)
- **when_to_use**: Whenever something stands on legs or a base on a floor that is not flat or level and must not rock: tables, benches, shelving and cabinets, washing machines and fridges, 3D printers and their tables, machine stands and extrusion frames, outdoor or camping tables. Choose swivel or ball-jointed pads for sloping or old floors and angled legs, anti-slip pads where the piece tends to creep or the floor is smooth, wide bases on soft floors, and bolt-down feet where a machine must also be fixed to the floor. Put a foot on every leg so you can always level to the floor wherever the piece is moved (Superior Glide).
- **when_not_to_use**: If it has to roll, use castors (or levelling castors that combine both). If it must stay put against vibration, use bolt-down feet or anchor it, and if vibration or noise must not reach the floor, use an anti-vibration (elastomer isolation) mount. To tilt or level a plate on its own base, such as a printer bed or mirror, use locking adjustment screws. For a one-off fix under something that never moves, a shim or spacer is enough, although shims creep out and compress over time (Superior Glide). For a large slope (beyond the stud's travel or the pad's tilt), use a packer under the whole side or a wedge. Levelling feet do not stop tall furniture tipping over: anchor bookcases, dressers and TVs to the wall (CPSC Anchor It!).
- **environment_limits**: Heat: Ganter's plastic (POM) thrust pads are for up to 80 degC, its stainless pads with an FPM O-ring up to 200 degC. Water and corrosion: the plated steel stem is the part that fails first anywhere wet, so use stainless stems in damp rooms, washdown areas and coastal air (Superior Glide; Carr Lane recommends 300-series stainless for corrosive places). Vibration (washing machines, compressors, tables leaned on rhythmically) slowly unscrews feet that have no lock nut (Superior Glide), and an unlevelled washing machine is noisy and vibrates (Samsung). Floors: hard plastic bases can mark sealed hard floors and narrow bases dent soft floors, so use pad faces or wide bases (Superior Glide). Printed feet: PLA starts to give at about 60 degC (CNC Kitchen), and printed spacers under constant load slowly get thinner (creep, filamentspecs); use PETG, ASA or TPU, and ASA outdoors for UV (Printables 198880 designer's advice).
- **safety_notes**: A levelling foot is not an anti-tip device: the US CPSC's Anchor It! campaign says to 'anchor TVs and furniture, such as bookcases and dressers, securely to the wall'. Respect the maker's static load rating and add a safety factor (Ganter); a stem wound out too far can bend or strip and let a corner drop (Superior Glide). Make sure appliance feet do not press on the power cord (Samsung). Never force a mismatched thread (Superior Glide). *(unverified parts omitted)*
- **common_failures**: (1) The piece rocks again a week later because the feet were levelled before the rock was taken out, or a rigid base stands on one edge on a sloping floor and creeps; take out the rock with one foot first, and use tilt or ball-jointed feet on slopes (Superior Glide). (2) Feet slowly unscrew from vibration: wind a lock nut onto the stem and tighten it against the leg (Superior Glide; Samsung). (3) A near-miss thread (M8 versus 5/16-18) forced in and the insert stripped (Superior Glide). (4) Stem wound out too far, so side loads lever it and work the thread loose; keep two-thirds of the stem engaged (Superior Glide). (5) Worn or hard pads scratching the floor; replace pads or use pad-faced feet (Superior Glide). (6) Paint on the thread seizing it (Superior Glide). (7) Printed threads too tight or too loose; print with a larger tolerance gap first (Printables 1340235) or use a metal bolt and nut. (8) Printed brackets cracking along layer lines when their screws are over-tightened (Printables 1340235). (9) Printed PLA feet sagging under constant weight or in heat (filamentspecs; CNC Kitchen).
- **related**: 
  - Shims, spacers and standoffs: fixed packing under a corner; free and quick, but it creeps out and compresses, while a foot can be re-set wherever the piece is moved (Superior Glide)
  - Locking adjustment screws (push-pull screws, spring-loaded levelling screws): set the tilt or height of a plate on its own base, rather than a whole piece on the floor
  - Castor (swivel castor, fixed castor, locking castor): lets the piece roll; 'levelling castors' combine a castor with a foot
  - Ball caster (ball transfer unit): a ball that rolls in every direction, used where a levelling foot would be the fixed alternative
  - Ball-and-socket joint: the same ball-in-cup joint that lets a swivel pad tilt, used to hold an angle
  - Internal tube anchors (star nut, expansion plug, ribbed threaded insert): how to put a thread inside a hollow tube leg so a foot can screw in
  - Elastomer isolation mount (rubber bobbin mount): a rubber-cushioned mount, some with a levelling screw, that also stops vibration reaching the floor
  - Printed screw thread: for printing the foot's thread itself
  - Threaded rod and studs: the plain threaded stem a foot is built on
  - Heat-set threaded insert and Screw-in threaded insert: give a printed or wooden leg a durable metal thread for the foot
  - Self-locking wedge: wedge levelling mounts set height by sliding a wedge instead of turning a screw
  - Thread-locking hardware (nylon-insert nut, lock washer): alternatives to a plain lock nut for holding the setting

### Pictures, videos and models

- **links**: 
  - [GN 638 Ball Jointed Leveling Feet (Elesa+Ganter product page)](https://www.elesa-ganter.in/en/ind/Levelling-elements--Ball-Jointed-Leveling-Feet--GN638-ST): Photos and dimension drawings of a threaded stud with a ball end that presses into a plastic or stainless thrust pad, with text on how the ball joint adapts to uneven or angled surfaces *(licence: link only (manufacturer page))*
  - [How to Use Leveling Feet (Carr Lane Mfg.)](https://www.carrlane.com/engineering-resources/technical-information/jig-fixture-design/how-to-use-leveling-feet): Photos of standard, stud and jig leveling feet with large swivel balls (20 degrees total swivel), materials, and load-rating graphs *(licence: link only (manufacturer page))*
  - [LV.F Levelling feet for ground mounting (Elesa)](https://www.elesa.com/en/elesab2bstoreuk/Levelling-feet-and-supports--Levelling-feet-for-ground-mounting--LVF): Photos and drawings of a plastic levelling foot with an articulated steel stem, optional rubber no-slip disc, and two covered holes for bolting it to the floor *(licence: link only (Elesa: 'Always mention the source when reproducing our drawings and photos'))*
  - [Adjustable Leveling Feet Guide (Superior Glide)](https://superiorglide.com/product-guides/adjustable-leveling-feet-guide/): Illustrated guide to thread sizes, base types (standard, low profile, wide, tilt, ball-joint), load per foot, and the step-by-step method for taking the rock out of a piece of furniture *(licence: link only (vendor guide))*
  - [W7-X gyrotron, adjustable foot.jpg (Wikimedia Commons, 2008)](https://commons.wikimedia.org/wiki/File:W7-X_gyrotron,_adjustable_foot.jpg): Photo of an 'adjustable machine leg' (the file's description) under a large laboratory machine *(licence: CC BY-SA 3.0 (reuse with credit))*
- **make_it_yourself**: 
  - [Cabinet Leveling Foot - Small (Printables 1340235; URL from Printables API, page not opened)](https://www.printables.com/model/1340235-cabinet-leveling-foot-small): Printed screw-thread levelling foot for light furniture, with a glued-in TPU pad, a choice of 0.2/0.4/0.6 mm thread tolerance gaps, a 3/8 in square drive socket and printed wrenches; Fusion 360 source with a tolerance parameter *(licence: Creative Commons Public Domain)*
  - [Screw in leveling feet using an M8 bolt (Printables 1318189; URL from Printables API, page not opened)](https://www.printables.com/model/1318189-screw-in-leveling-feet-using-an-m8-bolt): Printed block that screws to the bottom of a leg and holds an M8 nut, so an M8 bolt becomes the adjustable foot; OpenSCAD source included *(licence: Creative Commons Attribution (CC BY))*
  - [Ball joint leveling feet (M5) / tilting adjustable foot (Printables 198880; URL from Printables API, page not opened)](https://www.printables.com/model/198880-ball-joint-leveling-feet-m5-tilting-adjustable-foo): Parametric OpenSCAD ball-jointed foot: PETG ball with an M5 thread snapped into a socket, with a TPU friction washer, for sloping surfaces *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Leveled Table Top - Leveling Foot (Printables 196277; URL from Printables API, page not opened)](https://www.printables.com/model/196277-leveled-table-top-leveling-foot): Fully printed screw-and-nut levelling glide (40 mm base, 56-64 mm adjustable height) with the minimum thread engagement marked in a second colour *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [I-Type 2020 Extrusion (5mm Slot) Leveling Foot Bracket (Printables 446009; URL from Printables API, page not opened)](https://www.printables.com/model/446009-i-type-2020-extrusion-5mm-slot-leveling-foot-brack): Corner bracket that mounts a bought M8 levelling foot with lock nut into a 2020 aluminium extrusion frame using M4 screws and slot nuts *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [BOSL2 threading.scad (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad): Parametric threaded_rod() and threaded_nut() modules with a printer 'slop' clearance setting, for designing your own printed levelling foot thread *(licence: BSD 2-Clause)*
- **diagram_idea**: Side view of a table leg on a floor that slopes, with a cut-away levelling foot: a threaded stud screwing into a nut or tube insert in the leg, a lock nut tightened up against the leg, and the stud's ball end sitting in a socket in the pad so the pad lies flat on the slope; arrows show 'turn to raise or lower' and an inset shows a four-legged table rocking across two diagonal legs.
- **sources**: 
  - https://www.elesa-ganter.in/en/ind/Levelling-elements--Ball-Jointed-Leveling-Feet--GN638-ST
  - https://www.carrlane.com/engineering-resources/technical-information/jig-fixture-design/how-to-use-leveling-feet
  - https://www.elesa.com/en/elesab2bstoreuk/Levelling-feet-and-supports--Levelling-feet-for-ground-mounting--LVF
  - https://superiorglide.com/product-guides/adjustable-leveling-feet-guide/
  - https://superiorglide.com/product/square-threaded-inserts/
  - https://www.keystonecastors.co.uk/levelling-feet-and-inserts/page/2/
  - https://www.samsung.com/au/support/home-appliances/how-do-i-level-my-washing-machine/
  - https://producthelp.amana.com/Laundry/Washers/Washer_Installation_Support/Leveling_a_Top_Load_washer
  - https://en.wikipedia.org/wiki/Cabinetry
  - https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html
  - https://www.nord-lock.com/learnings/bolting-tips/2015/the-experts-thread-engagement-in-a-tapped-hole/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.anchorit.gov/2025/07/28/cpsc-anchor-it-campaign-marks-10-years-fewer-furniture-tip-overs-lead-to-safer-american-households/
  - https://commons.wikimedia.org/wiki/File:W7-X_gyrotron,_adjustable_foot.jpg
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://api.printables.com/graphql/ (Printables API: models 1340235, 1318189, 198880, 196277, 446009, 174610, 367208, 1343635)

### Other info

- **Fields with unverified parts:** play_and_precision, safety_notes

