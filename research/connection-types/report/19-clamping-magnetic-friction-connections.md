# clamping, magnetic & friction connections: Held by clamping, friction, suction or magnets

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 111 Magnet joint (embedded magnets, magnetic catch)

*clamping, magnetic & friction connections.* Pairs of magnets, or a magnet and a steel plate, set into parts so they snap together, align themselves and pull apart by hand

### What it is

- **plain_name**: Small, strong magnets hidden in two parts (or a magnet facing a bit of steel) so the parts snap together with a click, line themselves up, and pull apart by hand
- **term**: Magnetic joint (embedded magnets; magnetic catch)
- **aliases**: 
  - magnet joint or magnetic connection
  - embedded magnets, press-fit magnets or magnet pockets (3D printing)
  - magnetic catch or magnetic latch (cabinet and box doors)
  - magnetic closure or magnetic clasp (boxes, bags, cases)
  - magnet and strike plate (magnet and steel counter plate)
  - neodymium (rare-earth) magnet joint
  - magnetic breakaway connector, e.g. MagSafe (Apple, brand)
- **family**: clamping, magnetic & friction connections
- **other_families**: quick-release & tool-free, locks, latches & catches, locating & alignment
- **one_liner**: Pairs of permanent magnets, or a magnet and a piece of steel, set into the faces of two parts so the parts pull together, roughly line themselves up and stay shut, yet can be pulled apart by hand.
- **complexity**: A few parts: two magnets (or one magnet and a steel washer, plate or ball), the pockets or housings they sit in, and usually glue or a press fit to keep them there. A cabinet magnetic catch is a small ready-made unit: a plastic housing holding a flat magnet with steel plates beside it, plus a separate steel strike plate or bracket on the door (as seen in a photo of one taken apart, Wikimedia Commons 'Magnetic Catch parts').
- **how_it_works**: A permanent magnet pulls hard on steel and on the opposite pole of another magnet, and the pull is strongest when the faces touch: even a gap of well under a millimetre can halve it (K&J 'How much will a magnet hold?'). Set into two mating faces, the magnets pull the parts shut and hold them there with no power. Straight pulling apart is resisted by the full magnetic force, but sliding sideways is resisted mainly by friction, which is only about 10-25 % of the pull (K&J; supermagnete). Because two magnets pull hardest towards each other when slightly offset and settle where they line up, the parts also pull themselves roughly into line as they close (K&J 'Magnet shear force with doors').

### Finder attributes

- **job**: 
  - join and hold: holds lids, doors, covers, panels and modules closed or in place
  - lock, and release by hand: pulls shut on its own and opens with a firm pull, no latch to operate
  - line parts up exactly: pulls mating parts roughly into line as they close; add pins or a recess for exact location (K&J 'Magnet shear force with doors')
  - slip or let go when overloaded: pulls apart instead of breaking when yanked, as in magnetic breakaway power connectors (Wikipedia 'MagSafe')
- **motion**: none: the parts are held together; they separate completely when pulled apart
- **degrees_of_freedom**: 0 once snapped together, but the magnets themselves mainly resist pulling straight apart; sliding sideways is resisted only by friction (about 10-25 % of the pull force) unless a lip, recess or pin stops it (K&J 'How much will a magnet hold?'; supermagnete)
- **special_behaviour**: 
  - self-aligning or self-centring: two facing magnets pull towards the lined-up position; the centring force is zero when they are exactly aligned and largest when slightly offset, so a door 'bobs' before settling (K&J 'Magnet shear force with doors'); ball magnets also turn themselves to face an opposing magnet (Slant 3D, via Hackaday)
  - quick-release: pulls apart by hand with no tools or catch to operate
  - fail-safe or breakaway: lets go instead of breaking when yanked, e.g. a magnetic laptop power connector pulls out when someone trips over the cable, without damaging the port or pulling the computer off the table (Wikipedia 'MagSafe')
- **holding_principle**: 
  - magnetic: the magnets pull the faces together
  - friction or clamping (force-fit): sideways loads are carried only by friction between the pressed-together faces (K&J; supermagnete)
  - shape (the parts interlock; form-fit): only if you add a lip, recess, pin or cone, which is the usual way to take sideways loads
- **input_output**: not applicable
- **power**: passive (no power needed): permanent magnets hold indefinitely with no power; neodymium magnets lose less than 1 % of their strength in 10 years if not overheated or damaged (K&J Magnetics FAQ)
- **removability**: tool-free quick release
- **reuse_cycles**: effectively unlimited: the magnets don't wear out or weaken with use (under 1 % loss in 10 years, even when held attracting or repelling, K&J FAQ); only the plating or plastic faces wear, and magnets can chip if allowed to slam together (K&J safety page)
- **tools_needed**: none to open or close. To fit: glue (two-part epoxy or superglue), a vice, clamp or arbor press for press-fit pockets, a drill for wood, or a print pause to seal magnets inside a print; never use a hot-glue gun or soldering iron, whose heat can demagnetise the magnets (K&J 'Sticky business'; Hackaday 'Ways to embed magnets'; Slant 3D via Hackaday)
- **seal**: none
- **load**: light to medium. Strongest straight apart (the listed pull force, e.g. about 29 N (6.44 lb) for a 1/2 in × 1/8 in disc on thick steel); weak when slid sideways: only about 15-25 % of the pull (supermagnete) or 10-25 % for a nickel-plated magnet on steel (K&J), rising to 75 % or more with a rubber coating (K&J). Two magnets facing across a small gap need about half their pull force to be slid apart (K&J door tests: 47-70 % measured, 40-75 % simulated). Strength falls quickly with any gap, thin steel, or a plastic skin over the magnet (K&J)
- **adjustable**: not in itself, but the holding force can be tuned by changing the gap (a thicker plastic skin, tape or a shim weakens it), the magnet size or grade, or the steel thickness (K&J 'How much will a magnet hold?'; K&J 'Steel thickness')
- **play_and_precision**: Play: none in the pulling direction when the faces touch, but sideways the parts can shift unless something locates them. Misalignment: very tolerant while closing, because the magnets pull the parts in *(unverified parts omitted)*
- **access_needed**: one side only (blind): the parts just meet face to face, and hidden magnets can work through a thin plastic skin or panel (at reduced force)
- **materials**: Magnets: sintered neodymium-iron-boron (NdFeB) discs or cylinders, grades N35 to N52, usually with nickel-copper-nickel plating; ferrite (ceramic) magnets are much weaker (Rapid Elevation; K&J safety page). Counterparts: ordinary low-carbon steel works best; ferritic 430 stainless steel works (about 82-99 % of the pull on plain steel) but 304 and 316 stainless steels are not magnetic (K&J 'Is stainless steel magnetic?'). Housings: 3D-printed PLA, PETG or ASA, wood, or plastic catch housings. Glues: epoxy, superglue, polyurethane glue and similar bond to magnets; polypropylene and polyethylene are almost impossible to glue (K&J 'Sticky business')
- **maker_difficulty**: easy: print or drill a pocket, press or glue in a magnet the right way round, and add a matching magnet or steel washer; the main traps are polarity, pocket size and heat (Rapid Elevation; Hackaday)

### Making it

- **processes**: 
  - 3D print (FDM): press-fit or glued magnets in printed pockets, or magnets sealed inside during a print pause (Rapid Elevation; Hackaday)
  - woodwork: magnets glued into drilled holes, or surface-mounted cabinet magnetic catches
  - off-the-shelf part: magnetic catches, countersunk ring magnets, pot (cup) magnets, adhesive-backed magnets (K&J) *(unverified parts omitted)*
- **print_in_place**: partly: magnets can be sealed inside a part by pausing the print and dropping them in (see 'Mid-print embedding'), or pressed into printed pockets afterwards; the magnets themselves are always added
- **making_tips_3d_printing**: 1) Pocket size: design pockets 0.2-0.3 mm larger in diameter than the magnet and exactly the magnet's thickness deep, at least 1-2 mm from any outside wall; print a small test piece with pockets at a few sizes first (Rapid Elevation). One maker found, for 6 × 2 mm magnets in PLA on a Bambu X1C, that 0 mm clearance needed pliers or a jig, 0.1-0.2 mm went in with finger pressure, and 0.3 mm or more was too loose (Tarrant1701, Printables). 2) Polarity: mark the north face of every magnet (e.g. with a marker dot) and test each pair in its final orientation before fitting, because a sealed or glued magnet that repels can't be fixed (Rapid Elevation). 3) Retention: a tiny drop of superglue in the pocket works; epoxy is better for parts that are pulled apart often; avoid hot glue, which doesn't bond well to PLA and whose heat can demagnetise the magnet (Rapid Elevation; K&J 'Sticky business'). Press fits loosen over time through creep; use cylindrical rather than flat magnets for more grip area, an arbor press, a small lip the magnet is pushed past, or side slots (Slant 3D, via Hackaday). 4) Don't heat magnets in like threaded inserts: a soldering iron demagnetises typical magnets, which are ruined below 200 °C (Hackaday 'Ways to embed magnets'). 5) When embedding mid-print, keep magnets away from the nozzle (some so-called brass nozzles are magnetic) and from magnetic print beds, which a strong magnet can permanently disturb; side-insertion slots avoid the nozzle pulling the magnet out (Hackaday 'Ways to embed magnets'). 6) Keep the plastic skin over a hidden magnet thin: about 0.76 mm (0.03 in) of paper halved the pull of a 1/2 in × 1/8 in disc on steel (K&J). 7) Use a steel washer or ball bearing on one side instead of a second magnet where you can: it is cheaper, has no polarity to get wrong, and is less brittle than a magnet (Slant 3D, via Hackaday). 8) PLA softens at about 60 °C, so a press-fitted magnet in PLA can loosen in a hot car or sunny window; PETG manages about 80 °C and ASA about 110 °C (CNC Kitchen).
- **off_the_shelf_parts**: Neodymium disc and cylinder magnets (6 × 2 mm and 10 × 3 mm are the common hobby sizes, in grades N35 and N52) (Rapid Elevation); countersunk ring and block magnets that screw on (K&J); pot magnets / cup magnets / mounting magnets (a magnet in a steel cup) (supermagnete; K&J); rubber-coated magnets and adhesive anti-slip pads to raise sideways grip (K&J); adhesive-backed magnets and adhesive dots (K&J); cabinet magnetic catches with a strike plate; steel washers, strike plates and steel balls as counterparts; ferritic (430) stainless parts where a rust-free counterpart is needed (K&J).
- **rules_of_thumb**: 
  - Sideways (shear) holding is only about 15-25 % of the listed pull force (supermagnete); assume a friction coefficient of 0.1-0.25 for a nickel-plated magnet on steel, i.e. 10-25 % of the pull, or 75 % or more with a rubber coating (K&J 'How much will a magnet hold?')
  - Two magnets pulling across a gap need about half their pull force (Pull Force Case 3) to be slid apart sideways: 47-70 % measured and 40-75 % simulated (K&J 'Magnet shear force with doors')
  - Air gaps cost a lot: a 1/2 in × 1/8 in (D82) disc pulling 6.44 lb on steel dropped to 3 lb with about 0.03 in (0.76 mm) of paper between (K&J 'How much will a magnet hold?')
  - Steel must be thick enough: a 1/2 in × 1/4 in disc needs steel at least 0.073 in (1.85 mm) thick for its full pull; on 24-gauge (0.6 mm) fridge-door steel it gives only about 45 % (K&J 'Calculating steel thickness')
  - A magnet sandwiched between two steel plates can pull far harder than on one plate, especially a thin magnet: the D82 disc goes from 6.44 lb to 16 lb (K&J 'How much will a magnet hold?')
  - Two magnets attracting each other keep about 50 % of their listed pull when used to hang things, because of friction (K&J 'How much will a magnet hold?')
  - Magnet pockets: 0.2-0.3 mm larger than the magnet diameter, depth equal to the magnet thickness, at least 1-2 mm from outside walls (Rapid Elevation 'Magnets in prints')
  - Standard N-grade neodymium magnets are rated to about 80 °C; letter grades (M, H, SH, UH, EH, TH) go higher, up to about 230 °C (Wikipedia 'Neodymium magnet'; K&J safety page)
  - Ferritic 430 stainless steel gives about 82-99 % of the pull of plain steel; 304 and 316 stainless steel is non-magnetic (K&J 'Is stainless steel magnetic?')

### When to use it

- **everyday_examples**: 
  - Fridge magnets, held on by friction against the painted door (K&J 'How much will a magnet hold?')
  - Magnetic catches that hold cupboard and cabinet doors shut (Wikimedia Commons 'Magnetic Catch parts')
  - Magnetic laptop chargers (MagSafe, brand) and magnetic plugs on deep fryers, which pull out safely if the cable is tugged (Wikipedia 'MagSafe')
  - Boxes and cases with magnetic lids, e.g. 3D-printed magnetic boxes (Printables)
- **when_to_use**: Use it for lids, doors, covers, access panels, detachable modules, tool holders, display pieces and cosplay parts that should close with a satisfying click, stay shut against light loads and come apart by hand many times with no wear (Rapid Elevation; K&J FAQ); when parts should find their own position as they close (K&J); where a connection should break away safely instead of breaking, such as a cable or a part that could snag (Wikipedia 'MagSafe'); and where you want a hidden fastening with no visible latch.
- **when_not_to_use**: Avoid it where the joint takes large sideways, peeling or twisting loads, since magnets are weak in shear (15-25 % of pull, supermagnete): add a lip or pins, or use a snap fit, bayonet or screws instead. Don't rely on it for heavy or safety-critical loads, or where the parts must stay together in a crash or drop: use a mechanical latch, or a magnetic-assisted buckle where the magnet only guides and a catch carries the load. Avoid it in hot places above about 80 °C for standard magnets (Wikipedia), outdoors or underwater without corrosion protection (K&J), near pacemakers, and in anything small children could take apart (K&J safety page).
- **environment_limits**: Heat: standard N-grade neodymium magnets are rated to about 80 °C and lose strength above that; letter grades reach about 230 °C and all lose their magnetism near 320 °C (Wikipedia 'Neodymium magnet'; K&J safety page). The plastic around them usually fails first: PLA softens at about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen), so a press-fit magnet in PLA can loosen in a hot car. Water: plated neodymium magnets are not waterproof and corrode outdoors or when wet, losing strength (K&J safety page); badly corroded sintered magnets can crumble to powder (Wikipedia). Over time they lose less than 1 % in 10 years if not overheated (K&J FAQ), but press fits can loosen through creep (Slant 3D via Hackaday). *(unverified parts omitted)*
- **safety_notes**: Keep neodymium magnets away from children: if two or more small magnets are swallowed they can pinch the intestine between them and need emergency surgery (K&J safety page; Wikipedia), so glue or seal magnets in well. Larger magnets can pinch skin painfully or, when big, break bones; magnets that slam together can chip or shatter and throw sharp pieces, so wear eye protection (K&J safety page; Wikipedia). Strong magnets can switch off or upset pacemakers and implanted defibrillators, and can damage bank cards and magnetic media (K&J safety page). People with a nickel allergy should avoid long contact with nickel-plated magnets. Don't drill or grind magnets: the dust is flammable (K&J safety page).
- **common_failures**: Magnets repel instead of attract because one was fitted the wrong way round: mark poles and test each pair before gluing or sealing (Rapid Elevation). Magnets pull out of their pockets (the other magnet is stronger than the press fit or glue): size pockets carefully, use epoxy, a retaining lip or a sealed pocket (Rapid Elevation; Slant 3D via Hackaday). Weak hold because of too much plastic or paint between the magnets, or steel that is too thin (K&J). Parts slide apart sideways: add a lip, recess or pins, a rubber pad, or bigger magnets (K&J; supermagnete). Chipped or cracked magnets from slamming together: use a steel counterpart on one side (Slant 3D via Hackaday; K&J). Loss of strength from heat (hot glue, soldering iron, hot environments) or corrosion (K&J; Hackaday). Press-fit magnets loosen over time through creep (Slant 3D via Hackaday). A magnet dropped in during a print jumps to a steel nozzle or spoils a magnetic print bed (Hackaday).
- **related**: 
  - Mid-print embedding (captive nuts, magnets and bearings): the method for sealing magnets inside a print during a pause
  - Magnetic-assisted buckle: magnets pull the halves together and line them up, but a mechanical catch carries the load
  - Switchable permanent magnet (rotary magnetic base): a magnet you can turn on and off by hand for strong, removable holding
  - Holding electromagnet and electro-permanent magnet: magnets switched by electricity instead of being always on
  - Hidden latches (magnetic-key latch): a magnet held outside a box moves a hidden catch inside
  - Snap fits and push-push latches: mechanical ways to hold a lid or door shut that take sideways loads better
  - Magnetic coupling and magnetic gear: magnets that pass turning force through a gap instead of holding parts together *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Magnetic Catch parts (tony_duell, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Magnetic_Catch_parts.jpg): Photo of a cabinet-style magnetic catch taken apart, from a VAX 11/730 computer cabinet: a plastic housing, what appears to be a flat magnet with two steel plates, and the steel strike bracket *(licence: CC BY 2.0)*
  - [Magnet Shear Force with Doors (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/magnet-shear-force): Photos of a door-magnet test rig, a table of measured shear forces, and a graph of the centring force as two magnets slide past each other *(licence: link only)*
  - [How Much Will a Magnet Hold? (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/how-much-will-a-magnet-hold): Illustrated explanation of pull force on steel, between two steel plates, between two magnets, with friction, and across a gap *(licence: link only)*
  - [Stop Gluing Magnets Into Your 3D Prints (Slant 3D, YouTube)](https://www.youtube.com/watch?v=BwUzOJ8B_H0): Video of seven ways to fit magnets into 3D prints without glue, including press fits, snap-past lips, side slots and ball magnets (title and channel confirmed via YouTube oEmbed; summarised by Hackaday; video not watched) *(licence: link only)*
  - [Ways To Embed Magnets In 3D Prints And Not Ruin Printers (Hackaday)](https://hackaday.com/2026/06/04/ways-to-embed-magnets-in-3d-prints-and-not-ruin-printers/): Article with photos (including the magnetic pattern of a printer bed) on fitting magnets after printing or during a pause, and the hazards to nozzles and beds *(licence: link only)*
- **make_it_yourself**: 
  - [Tolerance test for 6x2mm magnets (Tarrant1701, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/656425-tolerance-test-for-6x2mm-magnets): Test block with 6 × 2 mm magnet holes from 0 to 0.5 mm clearance, to find your printer's best press fit *(licence: CC BY)*
  - [Magnet Press Fit Tester (TastyPi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1718287-magnet-press-fit-tester): Compares a crush-rib pocket with plain holes from 6.0 to 6.4 mm for 6 × 2 mm magnets, with push-out holes to recover them *(licence: CC BY)*
  - [Magnet Fit Gauge – 6/8/10 mm Magnet Hole Tolerance Tester (Dorian, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1841160-magnet-fit-gauge-6810-mm-magnet-hole-tolerance-tes): Gauge with 6, 8 and 10 mm magnet holes at +0.0 to +0.4 mm clearance, 3 mm deep, with 3 mm push-out holes *(licence: CC BY-NC-ND)*
  - [Magnetic Box Collection *6 Sizes* (Jallim, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/384798-magnetic-box-collection-6-sizes): Popular hinged printed boxes whose lids are held shut by four 8 × 2 mm disc magnets; STEP files included *(licence: CC BY-NC)*
  - [Gridfinity Friction Fit Magnet Jig (Palm handle remix) (pyrho, Printables) (URL seen in search results; read via Printables API)](https://www.printables.com/model/595230-gridfinity-friction-fit-magnet-jig-palm-handle-rem): Hand tool for pressing magnets into printed pockets with the correct polarity every time *(licence: CC BY-SA)*
  - [Magnetic Latch - added PIP-Version! (eltimbo1991, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/458683-magnetic-latch-added-pip-version): Printed door latch hook that is lifted open by repelling magnets and pulled shut by attracting ones; includes a print-in-place version *(licence: CC BY-NC)*
- **diagram_idea**: Two printed blocks with magnet pockets, shown first apart with N and S labels and arrows pulling them together, then closed with a big arrow showing the strong straight pull, a small arrow showing the weak sideways (shear) grip, and a third frame showing a lip or pin added to take the sideways load.
- **sources**: 
  - https://www.kjmagnetics.com/blog/magnet-shear-force
  - https://www.kjmagnetics.com/blog/how-much-will-a-magnet-hold
  - https://www.kjmagnetics.com/blog/steel-thickness-and-magnetic-fields
  - https://www.kjmagnetics.com/blog/is-stainless-steel-magnetic
  - https://www.kjmagnetics.com/blog/sticky-business-how-to-glue-neodymium-magnets
  - https://www.kjmagnetics.com/safety.asp
  - https://www.kjmagnetics.com/faq.asp
  - https://www.supermagnete.de/eng/faq/What-is-the-difference-between-adhesive-force-and-displacement-force-shear-force
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://en.wikipedia.org/wiki/MagSafe
  - https://rapidelevation.com/article-07-magnets-in-prints.html
  - https://hackaday.com/2026/07/19/seven-ways-to-install-magnets-into-your-3d-prints/
  - https://hackaday.com/2026/06/04/ways-to-embed-magnets-in-3d-prints-and-not-ruin-printers/
  - https://www.youtube.com/watch?v=BwUzOJ8B_H0
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Magnetic_Catch_parts.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, play_and_precision, processes, related

## 112 Switchable permanent magnet (rotary magnetic base)

*clamping, magnetic & friction connections.* A magnet that is turned on and off by hand with a knob, by rotating one magnet against another, so it holds strongly with no power

### What it is

- **plain_name**: A strong magnet with an on/off knob or lever: turn it one way and it grabs steel hard, turn it back and it lets go, with no batteries or wires
- **term**: Switchable permanent magnet (switchable magnetic base, mechanically switched permanent magnet)
- **aliases**: 
  - switchable magnet / switchable magnetic device / magnetic switchable device (MSD)
  - magnetic base / mag base / on-off magnetic base (for dial indicators and test indicators)
  - magnetic stand (machine-shop measuring stands with an on/off lever)
  - on/off magnet / switch magnet / magnetic switch (maker name for printed versions; not the same as a reed switch)
  - switchable magnetic clamp / magnetic jig clamp / magnetic featherboard base (woodworking)
  - welding magnet with on/off switch
  - permanent magnetic lifter / manual lifting magnet (with a turn lever)
  - manually operated (permanent) magnetic chuck (grinding and milling work holding)
  - Magswitch, MagJig, MagSquare (brand, Magswitch Technology)
  - Mitutoyo magnetic stand (brand of measuring stands)
- **family**: clamping, magnetic & friction connections
- **other_families**: quick-release & tool-free
- **one_liner**: A permanent magnet inside a steel housing that you switch on and off by hand: turning a knob rotates a magnet so its pull either flows out through the base into the steel you want to hold (on) or loops round harmlessly inside the housing (off).
- **complexity**: A small assembly that acts as one unit: one or two permanent magnets (usually neodymium discs magnetised across their diameter), a steel or iron housing or pole pieces that carry the magnetism to the base, a non-magnetic spacer (brass or aluminium) in simple bases, a shaft and knob or lever to turn the moving magnet, and often a detent or lock pin to hold the on and off positions.
- **how_it_works**: Magnetism prefers to flow through iron and steel rather than air, so the housing acts like pipes for it. In the simple single-magnet base, a round magnet sits in a hole between two iron halves joined by brass or aluminium: turned one way, each pole faces one iron half, so the halves become the magnet's poles and a steel surface bridging them completes the circuit and is pulled on hard; turned 90 degrees, both poles face the non-magnetic joint, the iron halves just short the magnet out (like a keeper) and almost nothing reaches outside. In the two-magnet design (Magswitch type) a fixed lower disc and a rotating upper disc sit inside steel side walls: turning the knob 180 degrees lines the discs up so they act as one strong magnet (on), or sets them opposite so their fields loop from one magnet through the walls into the other and cancel outside (off). No power is used in either state; you only put in the effort of turning the knob.

### Finder attributes

- **job**: 
  - join and hold: clamps a jig, fixture, measuring stand, featherboard or workpiece to any flat steel surface
  - lock, and release by hand: a quarter or half turn of the knob or lever switches the hold on or off
- **motion**: rotate: only the knob and internal magnet turn, usually 90 degrees (single-magnet base) or 180 degrees (two-magnet Magswitch type); the joint itself does not move while on
- **degrees_of_freedom**: 0 while switched on and seated on steel (held against pulling off and, less strongly, against sliding); 6 when switched off (the part simply lifts away).
- **special_behaviour**: 
  - quick-release: switched off by turning the knob, then lifted away; switched on again anywhere on steel with no tools
  - hand-release only (partly): it keeps holding until a person turns the knob; power cuts cannot affect it because it uses none
- **holding_principle**: magnetic (permanent-magnet pull, switched mechanically); sideways (shear) hold comes only from friction between the base and the steel
- **input_output**: not applicable
- **power**: passive: no power needed to hold, switch on or switch off; only hand effort on the knob or lever
- **removability**: tool-free quick release
- **tools_needed**: none to use (turn the knob or lever by hand); a screwdriver or bolts to fix the magnet into a jig or stand; for a home-made one, a 3D printer, strong magnets, steel pole pieces (bolts, rods, nuts or washers), glue and a vice or clamp to press parts together
- **seal**: none: it holds but does not seal
- **load**: Light to heavy depending on size: printed DIY versions hold a few kilograms (one 10-magnet printed base held 3.6 kg upside down); dial-indicator stands are typically rated about 60 kgf of magnetic pull; woodworking clamps are sold as up to 95 lb, 150 lb or 400 lb; hand-held lifting versions hold tens of kilograms safely. Strong against pulling straight off a thick, flat, clean steel surface; much weaker against sliding (one hand lifter is rated 89.4 kg breakaway but only 20.4 kg safe shear) and against peeling or prying; much weaker on thin, painted, rusty or curved steel.
- **adjustable**: No adjustment of force in most (fully on or fully off); position is set by where you put it down. *(unverified parts omitted)*
- **play_and_precision**: No play once on; it holds the part wherever it is set down, so it is not a precise locator. Rough, curved or dirty surfaces reduce contact and grip. For repeatable positions add a fence, dowel or kinematic seat against which the magnet clamps.
- **access_needed**: one side only (blind): it grabs a steel surface from one side
- **materials**: Inside: neodymium (NdFeB) magnets, usually magnetised across the diameter or across the width, in a mild-steel or iron housing or pole pieces, with brass or aluminium spacers in simple bases; plastic or aluminium knob. The target must be ferromagnetic: plain steel or cast iron (thick, flat, bare steel works best). It does not grip aluminium, brass, wood, plastic or most (austenitic) stainless steel; screw a steel plate onto such parts. Printed DIY versions use PLA or PETG housings with plain or nickel-plated steel nuts, washers or rods as pole pieces (not stainless washers, which are not magnetic).
- **maker_difficulty**: moderate: a printed version needs correctly oriented strong magnets, steel pole pieces and tight press or snap fits that resist the magnets' pull; K&J Magnetics found assembly 'a real challenge' and more expensive in parts than buying a ready-made unit, so buy one for heavy or safety-critical holding

### Making it

- **processes**: 
  - off-the-shelf part: magnetic bases and stands, switchable magnetic clamps (woodworking and welding), manual lifting magnets, permanent magnetic chucks
  - 3D print (FDM): housings, knobs and bases for DIY switchable magnets; jigs, featherboards and templates built around a bought switchable magnet
  - woodwork: routing a pocket so a bought switchable magnet sits inside a jig or featherboard
  - CNC: iron pole pieces and housings for machined versions
- **print_in_place**: no: printed switchable magnets are printed as separate top and bottom housings; the magnets and steel pole pieces are pressed or glued in, then the halves are pressed or snapped together
- **making_tips_3d_printing**: How printed versions are built: two printed discs or rings stacked on a central axle, each holding a ring of small magnets, with steel pole pieces (hex nuts, rod slices or stacked washers) standing between the magnets and passing through both layers; turning the top layer lines the magnets up (on) or opposes them (off). Andrew Klein's design ('3D Print a Magnetic Switch, and how it works') inspired many remixes; a Printables remix by povsky uses 24 small 10 x 5 x 3 mm magnets and 12 #10 hex nuts with an internal locking feature and snap-fit assembly, and a parametric remix by bnorick lets you set magnet diameter, depth, tolerance and body tolerance. (1) Magnet direction matters most: the magnets must be magnetised across the face you mount against the steel pieces, not through their thickness; JCisMe warns that a design for magnets polarised across their length 'WILL NOT WORK if the north is on one large face', and that thick magnets leak more in the off position. Test each pair before gluing: JCisMe's check is to place two magnets large face to large face (attracting) and rotate one while keeping the faces touching; correctly magnetised magnets start to repel close to 180 degrees. (2) Use plain or nickel-plated steel pole pieces; stainless washers are not magnetic (RemiRafael's printed magnetic base uses 1 mm steel washers stacked to 3 mm, or 12 mm steel bar slices). (3) Print the magnet pockets as a snug press fit and glue them: the magnets fight each other hard in the off position and will twist or pop out of loose pockets; greasing the rotating cylinder helps the final press-fit (JCisMe) and a bench vice helps seat press-fit parts fully (povsky). (4) Add a detent or stop so the knob sits firmly at on and off; printed designs include an internal lock (povsky) and tab stops (JCisMe). (5) Keep the steel pole pieces flush with or just proud of the base: any plastic skin between them and the target is an air gap that cuts the grip. (6) Orientation: print the housings flat on the bed; povsky notes the handle body prints without supports if its orientation is reversed. PLA works for demonstrations and light jigs (Prusa lists PLA as having low temperature and UV resistance); PETG is tougher for tools that get knocked about. (7) Expect a few kilograms, not tens: RemiRafael's 10-magnet base (12 x 3 mm magnets) held 3.6 kg upside down and the 20-magnet version more than 5 kg. For woodworking jigs it is usually better to print a holder, featherboard or template around a bought switchable magnet (many such models exist for the Magswitch MagJig 95 and 150).
- **off_the_shelf_parts**: Switchable magnetic base / magnetic stand for dial indicators (on/off lever, V-groove base for round bars); switchable magnetic clamp / magnetic jig clamp (Magswitch MagJig 95 and 150, MagSquare 400); switchable welding magnet / on-off welding angle magnet; manual permanent magnetic lifter (lever-operated lifting magnet, rated by safe working load); manually operated permanent magnetic chuck (surface grinding, milling); for DIY builds: diametrically magnetised neodymium disc or ring magnets, block magnets magnetised through the width, steel hex nuts, steel dowel or drill-rod slices, steel washers, brass or aluminium spacer, axle screw and knob.
- **rules_of_thumb**: 
  - Rated pull is measured on very thick, clean, flat steel in ideal conditions; plan on lower numbers, especially on thin sheet (a 400 lb unit on an I-beam holds far less on a thin filing cabinet), painted or rusty surfaces and irregular shapes (K&J Magnetics, https://www.kjmagnetics.com/blog/magswitch).
  - Sideways force is the weak direction: 'You're not going to be able to apply 150 lb of shear or sideways force against an MJ-150 and expect it not to move' (K&J Magnetics, https://www.kjmagnetics.com/blog/magswitch). Example: the Magswitch Hand Lifter 60 is rated 197 lb (89.4 kg) maximum breakaway on 2 in thick SAE 1018 steel, 66 lb (30 kg) safe working load and only 45 lb (20.4 kg) maximum safe shear (Magswitch spec sheet, https://downloads.magswitch.com/products/110673-8800487-Spec-Sheet.pdf).
  - Thin steel cuts the grip: the same hand lifter needs 1/4 in (6.35 mm) steel for 'full saturation', and its safe working load chart (at a 3:1 safety factor) falls steadily for sheets from 3/8 in down to 26 gauge (0.4 mm) (Magswitch spec sheet, https://downloads.magswitch.com/products/110673-8800487-Spec-Sheet.pdf).
  - For anything lifted, use a safety factor: lifting magnets are rated at a safe working load of about one third of breakaway force (3:1; 2.5:1 to 3.5:1 across brands), and a flat base on round bar or pipe keeps only about 30-50% of its flat-plate rating (AIMS Industrial lifting-magnet guide, vendor source, https://aimsindustrial.com.au/blogs/product-guides/magnetic-lifter-guide; Magswitch charts SWL 'at 3:1').
  - Surface layers act as air gaps: the AIMS guide states a 0.5 mm layer of rust scale or paint 'can reduce capacity by 30-50%' (vendor source, https://aimsindustrial.com.au/blogs/product-guides/magnetic-lifter-guide).
  - Keep neodymium switchable magnets below about 80 °C (176 °F) or they can be partly demagnetised (K&J Magnetics, https://www.kjmagnetics.com/blog/magswitch).
  - Measuring stands: a typical dial-indicator magnetic stand is rated at 60 kgf of magnetic pull, switched by an on/off lever (Mitutoyo 7010SN listing, https://www.globaltestsupply.com/product/mitutoyo-7010sn-stand-magnetic-60kgf).
  - Switch on only when it is in contact with the steel: Magswitch labels its lifter 'Do Not Operate Unless In Contact With Ferrous Target', and K&J advises the same to avoid pinched fingers (https://downloads.magswitch.com/products/110673-8800487-Spec-Sheet.pdf; https://www.kjmagnetics.com/blog/magswitch).
  - DIY benchmark: a printed base with ten 12 x 3 mm magnets and steel washer pole pieces held 3.6 kg upside down; a 20-magnet version held more than 5 kg (RemiRafael, Printables model 1839898, read via the Printables API).

### When to use it

- **everyday_examples**: 
  - the magnetic base with an on/off lever that holds a dial indicator on a lathe or milling machine
  - magnetic featherboards and jig clamps that lock onto a cast-iron table-saw top with a twist of a knob
  - welding magnets and hand lifting magnets in metal shops that are switched off to release the steel
  - the magnetic table (permanent magnetic chuck) on a surface grinder, switched by a lever
- **when_to_use**: When you need a strong hold on steel that you can put on and take off in seconds, anywhere on the surface, with no power and no holes: jigs, fences and featherboards on cast-iron machine tables, measuring stands, welding set-ups, temporary brackets on a steel workbench or frame, camera or phone mounts on steel surfaces, and lifting or carrying steel sheet. Also when an always-on magnet would be a nuisance: it can be stored, carried and positioned while off, so it does not snap onto tools or pick up swarf.
- **when_not_to_use**: Not on aluminium, wood, plastic or most stainless steel (add a steel plate, or use a vacuum/suction gripper or a clamp instead). Not where large sideways, twisting or peeling loads act on it: add a fence, dowel or lip, or use a toggle clamp or bolts. Not for small, light, always-on catches such as box lids (a plain embedded magnet or magnetic catch is simpler). Not when a machine must release it automatically: use a holding electromagnet (lets go when power is cut) or an electropermanent magnet (switched by an electric pulse). Not for lifting over people or on thin, curved or dirty steel unless it is a rated lifting magnet used within its safe working load.
- **environment_limits**: Neodymium magnets lose strength when hot and can be permanently weakened above about 80 °C (K&J Magnetics), so keep them away from freshly welded or heat-treated parts; lifting-magnet guides warn that many rare-earth magnets lose capacity above 80 °C and some grades fail above 120 °C (AIMS vendor guide). Water and dust do not stop it working, but rust on the base or target adds an air gap and reduces grip. The hold does not fade over time because nothing is powered, but vibration can walk it sideways because sliding resistance is only friction; lifters use a lock pin in the on position 'to prevent accidental release under vibration' (AIMS). Printed housings (PLA especially) soften in heat and sunlight (Prusa lists PLA as low in temperature and UV resistance).
- **safety_notes**: Pinch hazard: switched on while loose it can jump onto steel and trap fingers, so switch on only when already in contact (K&J; Magswitch labels its lifter 'Do Not Operate Unless In Contact With Ferrous Target'). Never lift loads over people, and make sure a lifting magnet's lever is fully on and locked. Loose neodymium magnets used in DIY builds are brittle and can shatter if they slam together (wear eye protection), can pinch skin badly, can affect pacemakers and implanted devices, and are very dangerous if swallowed, because swallowed magnets can attract through intestine walls (K&J Magnetics safety page). Keep them away from children.
- **common_failures**: (1) Weak hold: thin, painted, rusty, dirty or curved steel, or a small contact patch; clean the surfaces and use thick flat steel, or add a steel plate. (2) Slides under sideways load: shear capacity is a fraction of pull-off force; add a fence, pin or lip. (3) Peels off when levered: a long arm on a stand or jig pries one edge up; keep loads close to the base. (4) Does not switch fully off or keeps a small residual pull: often a design or assembly issue in DIY builds (mismatched magnets, wrong magnetisation direction, thick magnets or missing steel pole pieces); check each magnet's direction before gluing. (5) DIY magnets twist or pop out of their printed pockets: glue them and use tighter pockets. (6) Knob creeps from on towards off: add a detent or lock. (7) Lost strength after heating above about 80 °C: the neodymium was partly demagnetised; replace it.
- **related**: 
  - Magnet joint (embedded magnets, magnetic catch): always on and pulled apart by hand; simpler and cheaper for light holding
  - Electropermanent magnet: the same on/off idea, but an electric pulse flips one magnet instead of a hand turning a knob
  - Holding electromagnet (maglock): needs power all the time it holds and lets go when power is cut
  - Vacuum (suction) gripper: grips non-steel smooth surfaces but needs a pump or a sealed cup
  - Toggle clamp: clamps any material mechanically with a lever; needs a place to bolt it down
  - Kinematic coupling (balls in V-grooves): locates a part exactly; magnets are often used only to hold it down (preload)
  - Manually operated permanent magnetic chuck: the same principle in a flat table form, with rows of poles to hold workpieces for grinding and milling

### Pictures, videos and models

- **links**: 
  - [Switchable magnet (Wikipedia)](https://en.wikipedia.org/wiki/Switchable_magnet): Explanation with three diagrams of a magnetic base: the assembly, the magnet in the off position (iron blocks act as keepers) and in the on position (iron blocks extend the magnet's poles), plus a photo of a magnetic base with a post *(licence: text CC BY-SA 4.0; images per file)*
  - [Wiki MagneticBase ON.svg (Wikimedia Commons; BaubiPacific, SVG by Malyszkz)](https://commons.wikimedia.org/wiki/File:Wiki_MagneticBase_ON.svg): Schematic of the rotating magnet in the ON position between two iron halves; companion files Wiki MagneticBase OFF.svg and ALL.svg show the off state and the assembly *(licence: public domain (released by its author))*
  - [Magnets with an OFF Switch (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/magswitch): Field-line drawings of a magnet on steel, a cabinet catch, and the two-disc Magswitch in its ON and OFF states; an animated GIF of a switchable magnet picking up and dropping paperclips; photos of a home-made version made from two diametric ring magnets *(licence: link only)*
  - [3D Print a Magnetic Switch, and how it works (Andrew Klein, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=n9tZIFfM14o): Video of the 3D-printed switchable magnet that started the maker trend, with an explanation of how the aligned and opposed magnet rings switch the pull on and off *(licence: link only)*
  - [A Permanent Magnet That Turns On and Off (The Action Lab, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=PMma3OJUHhs): Demonstration and explanation of a mechanically switchable permanent magnet *(licence: link only)*
- **make_it_yourself**: 
  - [Magnetic Switch by povsky (Printables; appeared in search results, details read via the Printables API)](https://www.printables.com/model/30673-magnetic-switch): Printable switchable magnet using 24 cheap 10 x 5 x 3 mm magnets and 12 #10 hex nuts as pole pieces, with an internal locking feature and snap-fit assembly (inspired by Andrew Klein's design) *(licence: CC BY)*
  - [Magnetic Switch (parametric remix) by bnorick (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/129107-magnetic-switch): Parametric version: set magnet diameter, depth, inset and tolerance plus body tolerance to suit the magnets you have *(licence: CC BY-NC-SA)*
  - [Magnetic base (Compact On/Off Magnet) by RemiRafael (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1839898-magnetic-base-compact-onoff-magnet): Compact printed switchable magnetic base for phone, camera and lab-tool mounts using 10 or 20 magnets (12 x 3 mm) and 1 mm steel washers, M3 bolts and heat-set inserts; tested holding 3.6 kg (10 magnets) upside down *(licence: CC BY-SA)*
  - [DIY switchable magnet by greenail (Printables; appeared in search results, details read via the Printables API)](https://www.printables.com/model/13192-diy-switchable-magnet): Smaller variant where steel bars (3/8 in) pass all the way through and only the top magnets (N42, 10 x 5 mm) rotate; demo video linked from the model *(licence: CC BY)*
  - [Real Magnet Turns on and off Science! by JCisMe (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/465572-real-magnet-turns-on-and-off-science): Very simple two-magnet on/off magnet using two 1/2 x 1/2 x 1/8 in block magnets and a steel bottle cap, with clear notes on magnet orientation *(licence: CC BY-NC-SA)* *(unverified parts omitted)*
- **diagram_idea**: Top view of a round magnet between two iron half-blocks joined by a brass strip, shown twice: 'OFF' with the magnet's N-S arrow pointing along the brass strip and short field loops staying inside the iron, and 'ON' with the arrow turned 90 degrees so one pole faces each iron half and the field lines arc down through a steel plate underneath; a curved arrow on the knob shows the quarter turn.
- **sources**: 
  - https://en.wikipedia.org/wiki/Switchable_magnet (read as raw wikitext)
  - https://commons.wikimedia.org/wiki/File:Wiki_MagneticBase_ON.svg
  - https://commons.wikimedia.org/wiki/File:MagneticBase.jpg
  - https://www.kjmagnetics.com/blog/magswitch
  - https://www.kjmagnetics.com/neodymium-magnet-safety.asp
  - https://downloads.magswitch.com/products/110673-8800487-Spec-Sheet.pdf
  - https://aimsindustrial.com.au/blogs/product-guides/magnetic-lifter-guide
  - https://www.globaltestsupply.com/product/mitutoyo-7010sn-stand-magnetic-60kgf
  - https://www.assfalg-metal.com/magnets/magnetic-chucks/manually-operated-magnetic-chucks
  - https://hackaday.com/2024/08/22/you-can-3d-print-yourself-some-simple-magnetic-switches/
  - https://hackaday.com/tag/switchable-magnet/
  - https://help.prusa3d.com/article/pla_2062
  - https://www.youtube.com/watch?v=n9tZIFfM14o (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=PMma3OJUHhs (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=YUt_nx_uZZ0 (verified via YouTube oEmbed; 'DIY switchable magnet printed and pla', Jesse Schoch)
  - https://api.printables.com/graphql/ (Printables models 30673, 129107, 1839898, 13192, 465572 and 668351 read via the public API)
  - https://www.printables.com/model/30673-magnetic-switch (search result)
  - https://www.printables.com/model/13192-diy-switchable-magnet (search result)
  - https://www.thingiverse.com/thing:3623166 (search result snippet only)

### Other info

- **Fields with unverified parts:** adjustable, make_it_yourself, reuse_cycles

## 113 Aluminium-extrusion connectors (T-slot nuts and brackets)

*clamping, magnetic & friction connections.* The nuts, brackets and hidden fasteners that slide into the grooves of T-slot aluminium extrusion to build 3D-printer, CNC and robot frames without welding

### What it is

- **plain_name**: Special nuts that slide or drop into the grooves along aluminium frame bars, plus the brackets and hidden connectors that bolt onto them, so you can build and rearrange a frame with just hex keys, no welding
- **term**: T-slot fasteners for aluminium extrusion (T-slot nuts, brackets and connectors for T-slot structural framing)
- **aliases**: 
  - T-nut / tee nut / T-slot nut / slot nut / sliding nut (not the same as the furniture T-nut with prongs that is hammered into wood)
  - drop-in T-nut / roll-in T-nut / twist-in T-nut / hammer nut / hammerhead nut / spring T-nut / post-assembly insertion nut (can be added into the middle of a finished frame)
  - slide-in T-nut / economy T-nut / pre-assembly insertion nut (must be slid in from the open end)
  - self-aligning T-nut / anti-rotation T-nut
  - corner bracket / angle bracket / L-bracket / cast corner bracket / gusset / joining plate / connector plate / tee plate
  - inner bracket / hidden corner connector / internal corner connector
  - blind joint / end-tapped joint (a screw in the tapped end hole whose head slides in the other bar's slot)
  - anchor fastener, end fastener, butt fastener, bolt connector, central connector (80/20 and item catalogue names)
  - T-slot bolt / T-slot stud / drop-in T-stud
  - aluminium profile / aluminium extrusion / 2020, 3030, 4040 extrusion / strut profile / system profile (the bars they fit)
  - V-slot (brand, OpenBuilds: a V-grooved profile that also works as a rail for wheels)
  - 80/20 (brand), item (brand), MISUMI HFS (brand), Bosch Rexroth (brand), MakerBeam (brand)
  - Nutenstein (German)
- **family**: clamping, magnetic & friction connections
- **other_families**: interlocking joints & joinery, sliding, telescoping & linear motion
- **one_liner**: A family of nuts, bolts, brackets and hidden connectors that lock into the T-shaped grooves of aluminium extrusion, clamping onto the groove's lips when tightened so bars, panels, motors and accessories can be bolted together anywhere along their length and moved later.
- **complexity**: A few parts per joint: the extrusion itself (a bar with a T- or V-shaped groove on each side and a hole down the middle), a nut that sits inside the groove (plain block, drop-in or spring-loaded), a screw, and usually a bracket, plate or internal connector; hidden joints may add an end-tapped thread and a drilled access hole.
- **how_it_works**: Each side of the bar has a narrow slot opening over a wider hidden channel. The nut is wider than the opening, so once inside it cannot be pulled out through the slot (it interlocks), but it can slide along the groove. When the screw through a bracket or part is tightened, it pulls the nut up against the underside of the slot lips and clamps everything together, so friction (and on some nuts, teeth or ridges biting into the anodised surface) stops sliding. Slide-in nuts must be threaded on from an open end of the bar; drop-in and roll-in nuts are shaped so they can be pushed in anywhere and turned 90 degrees to lock, often with a spring or ball to hold them in place while you fit the screw. Hidden joints instead screw into the tapped centre hole in the end of one bar, with the screw head or a connector clamping inside the other bar's slot.

### Finder attributes

- **job**: join and hold: builds frames for 3D printers, CNC machines, robots, enclosures, racks and jigs, and fixes panels, motors, rails and accessories to them
- **motion**: none once tightened; when the screw is loosened the nut (and whatever it holds) slides freely along the groove for adjustment
- **degrees_of_freedom**: 0 when tightened (a joint with a single screw may still be able to twist until another part stops it); 1 when loosened (slides along the groove).
- **special_behaviour**: 
  - self-aligning or self-centring: self-aligning or anti-rotation T-nuts have a raised neck that sits in the slot opening, centring the thread and stopping the nut from spinning while you tighten it (80/20; item)
  - none of the others: it is a plain bolted clamp, although drop-in and spring nuts make it quick to add parts to a finished frame
- **holding_principle**: friction or clamping (the tightened screw clamps the nut against the slot lips, and friction resists sliding) plus shape (the nut is wider than the slot opening, so it cannot pull out)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable
- **reuse_cycles**: many times: frames can be taken apart, moved and rebuilt, and drop-in or roll-in nuts let you add parts without dismantling; self-tapped threads, over-tightened zinc nuts and toothed nuts that scratch the anodising wear a little each time
- **tools_needed**: Hex (Allen) keys or a T-handle hex wrench; a torque screwdriver helps avoid over-tightening. A saw with a square cut or pre-cut lengths. For hidden joints: a tap to thread the end holes and a drill (with a drilling jig) for access holes; anchor fasteners need a counterbore; 80/20's self-tapping S12 connecting screws need only a T40 or T50 power bit and drill.
- **seal**: none (the open slots can be closed with slot cover strips, but the joint does not seal)
- **load**: Medium to heavy, depending on size: item's small steel 'T-Slot Nut 5 St M5' (Line 5) is rated 500 N (about 50 kgf) at 4.5 Nm, an item hammerhead nut for 8 mm slots 1,000 N, and a heavy-duty M12 T-slot nut 10,000 N (Wikipedia, citing item). Strong against pulling the nut out through the slot; sliding along the groove is resisted only by clamping friction, so slip under shear is the usual weak point; a joint with a single screw is weak in twist. Printed nuts and brackets are for light duty only.
- **adjustable**: Yes: loosen the screw, slide the nut, bracket or part along the groove to any position, and re-tighten; drop-in and roll-in nuts can be added later in the middle of a bar. Hidden end-tapped joints and end fasteners are fixed in position.
- **play_and_precision**: No play once tightened, but the position is only as good as the cut ends and your assembly: squareness is not automatic (Voron's build guide says measure the diagonals, which should differ by less than 2 mm, and notes that blind-jointed bars may rotate until panels and corners are fitted). Butt fasteners give 'near perfect alignment' end to end (80/20). Slot widths and shapes differ between systems (e.g. 5.25 mm versus 6 mm slots on so-called 20-series bars, and I-type versus B-type profiles), so nuts from one system may fit loosely or bend another's slot lips.
- **access_needed**: one side only (blind) for T-nuts and brackets, which bolt on from the outside face; hidden end-tapped joints and end fasteners need the end of the bar tapped and an access hole drilled in the mating bar to reach the screw head
- **materials**: Bars: extruded aluminium, typically 6105-T5 (Wikipedia) or EN AW-6063 T66 (maunsystem), usually anodised. Nuts: zinc-plated or black-zinc carbon steel (80/20 standard slide-in nuts are 1215 carbon steel), stainless steel, or die-cast zinc for light-duty nuts. Brackets and connectors: die-cast zinc, aluminium or steel. 3D-printed PLA or PETG nuts and brackets for light accessories and prototypes. Panels of acrylic, polycarbonate, wood, sheet metal or mesh are fixed into the slots with the same nuts.
- **maker_difficulty**: easy: bolt-together with hex keys using bought nuts and brackets; moderate if you make hidden blind joints, which need accurate tapping and drilling of access holes

### Making it

- **processes**: 
  - off-the-shelf part: extrusion cut to length (often pre-tapped), T-nuts, brackets, gussets, joining plates, hidden connectors
  - 3D print (FDM): light-duty T-nuts and nut carriers, corner brackets, accessory mounts, slot covers and drilling jigs for access holes
  - laser cut: joining plates and brackets from aluminium or steel sheet
  - sheet metal: bent brackets and gussets
  - CNC: custom plates and machined connectors
- **print_in_place**: no: printed T-nuts and brackets are single parts that are bolted on; a printed carrier often holds a standard steel nut
- **making_tips_3d_printing**: Measure your own slot first: slot width and lip shape differ between systems and brands (I-type versus B-type, 5 versus 6 mm slots on 20 mm bars), and most printable parts on model sites assume 6 mm slots; a Hackaday reader found 80/20's 20-series slots were only 5.25 mm. Printed T-nuts are for light duty: one maker labels his PETG M5 T-nut 'NOT for structural use', and Hackaday warns that 'plastic brackets and extrusions won't be as strong as those made of metal'. A stronger printed option is a printed carrier that holds a standard steel hex nut (for example the popular drop-in carrier that turns an M3 nut into a T-nut for Ender-3 frames, printed flat on a large face without supports at 0.16 mm layers). If you print threads directly, ORM's T-nut pack recommends PLA or PETG, 100% infill, a 0.4 mm or smaller nozzle, 0.12 mm layers, slow speed (about 50 mm/s) and a 2-3 mm brim because the parts are tiny. Brackets: print them lying so the layers run along both legs of the L rather than across the corner, use PETG and solid or high infill (a 5 mm-slot remix of a popular 'strong corner bracket' says it prints without support and works best in PETG), and treat printed brackets as prototypes or light-duty stiffeners until metal ones arrive (the customizable plate-bracket generator's author describes them as for prototyping or temporary use). Choose screw length so the screw passes fully through the nut but does not bottom on the extrusion: bracket thickness plus nut thickness minus about 1 mm (Hackaday: a 10 mm bracket and 6 mm nut take a 15 mm screw). Printed drilling jigs that snap into the slot make accurate access holes for blind joints (e.g. akak's 2020 blind-joint drilling jig for M6 button-head screws). Keep printed parts away from heated beds and hot enclosures if made of PLA (Prusa lists PLA as low in temperature resistance).
- **off_the_shelf_parts**: T-slotted aluminium extrusion / aluminium profile (metric 20, 30, 40, 45 series; fractional 10 and 15 series; V-slot); T-slot nuts: slide-in (economy, standard, double, offset), drop-in / roll-in / twist-in, hammer-head nuts, spring-loaded roll-in nuts (ball spring, spring leaf, set screw, flex handle), self-aligning / anti-rotation nuts, heavy-duty nuts, die-cast zinc T-slot nuts; T-slot bolts and drop-in T-studs; button-head and low-profile cap screws; corner brackets (cast, with alignment tabs), gussets, L, T and cross joining plates, 90-degree and 45-degree connector plates; inner brackets / hidden corner connectors with set screws; anchor fasteners (need counterbore), end fasteners (need end tap and access hole), butt fasteners, bolt connectors, central connectors; self-tapping connecting screws; end caps and slot cover strips; panel retainers; linear bearings and V-slot wheels that run in the profile.
- **rules_of_thumb**: 
  - Match both slot width and system type: slot width (e.g. 6, 8, 10 mm) must match the nuts, and the system type (I-type or B-type) defines the slot shape; a 'slot 8, B-type' nut may fit an I-type slot 8 but with a smaller bearing surface or wrong web height, damaging the anodising or bending the slot lip open (Motedis, https://www.motedis.com/en/blog/aluminium-profiles-guide; maunsystem, https://www.maunsystem.de/en/blog/slot-width-explained).
  - Respect the tightening torque for the nut, not just the screw: item lists 4.5 Nm and a permissible force of 500 N for its steel T-Slot Nut 5 St M5; 8 Nm for Nut 6 St M5; 25 Nm for Nut 8 St M8; only 1-1.5 Nm for its die-cast zinc Zn nuts; and 6 Nm with a permissible operating load of 1,000 N for Hammerhead Nut 8 M6 (item product page https://www.item24.com/en-us/t-slot-nut-5-st-m5-bright-zinc-plated-37001; item T-slot nut datasheet, catalogue pp. 132-138, https://shop.tech-con.ro/media/catalog/product/pdf/item-MB-T-Slot-nuts.pdf).
  - A joint is only as strong as the whole chain of T-slot nut, groove flank and screw (item product page, https://www.item24.com/en-us/t-slot-nut-5-st-m5-bright-zinc-plated-37001); the slot lips take the tensile force and their strength depends on the alloy (maunsystem, https://www.maunsystem.de/en/blog/slot-width-explained).
  - Anti-rotation versions can be weaker: item's T-slot nut V 8 M8 with anti-torsion feature has 20 percent lower load capacity than the comparable standard nut, and its zinc nuts are 'not suitable for connecting profiles to other profiles' (item datasheet, https://shop.tech-con.ro/media/catalog/product/pdf/item-MB-T-Slot-nuts.pdf).
  - Drop-in nuts that twist into place mid-bar 'are the least secure attachment but are often good enough'; slide-in nuts need access to the open end of the slot (Hackaday, https://hackaday.com/2021/05/25/getting-started-with-aluminum-extrusions/).
  - Screw length: long enough to pass fully through the nut without bottoming on the extrusion, e.g. a 10 mm bracket plus a 6 mm nut takes a 15 mm screw, leaving a 1 mm margin (Hackaday, https://hackaday.com/2021/05/25/getting-started-with-aluminum-extrusions/).
  - Hidden joints need machining: 80/20 end fasteners need an end tap in one bar and an access hole in the other; anchor fasteners need a counterbore; its self-tapping S12 connecting screws need no machining (80/20 Catalog 17, Metric Fastening Options, pp. 712-713, 737, 739, 741, http://www.gawirth.net/Metric_Fastening_Options_8020_Catalog_17.pdf).
  - Check squareness: build on a flat surface and measure the diagonals, which should differ by less than 2 mm; blind-jointed bars may rotate until panels and corners are fitted (Voron mechanical assembly guide, https://docs.vorondesign.com/build/mechanical/).
  - Heavy loads need heavy-duty nuts: a heavy-duty T-slot nut with an M12 screw is rated to 10,000 N (Wikipedia, citing item, https://en.wikipedia.org/wiki/T-slot_nut).

### When to use it

- **everyday_examples**: 
  - the frame of a Creality Ender-3 or Voron 3D printer, with T-nuts holding the motors, rails and panels
  - hobby CNC routers and laser-cutter frames built from 2020 or 4040 extrusion
  - workshop enclosures, machine guards and grow-light racks with acrylic panels held in the slots
  - a bicycle trailer or camper-van shelving built from aluminium profile (Wikipedia shows a trekking trailer carrying Euroboxes)
- **when_to_use**: When you want a strong, stiff metal frame that you can build with hand tools, adjust, and change later: 3D-printer, CNC and laser frames, robot chassis, test rigs, jigs, enclosures, workbenches, camera or lighting rigs, and shelving. Great when you do not know the final layout yet, because every part can slide along the grooves and new parts can be added mid-bar with drop-in nuts. Also useful as a mounting grid: any accessory with a slot-sized screw can be clamped anywhere along the bar.
- **when_not_to_use**: Not for the cheapest or lightest builds, where wood, plywood or printed parts with captive nuts are cheaper; every joint needs special nuts and brackets (Hackaday: 'what you do need is a lot of special parts'), and their cost adds up. Not for permanent heavy structures that are never changed, where welding or bolted steel is cheaper and stronger; for building services use strut channel. Not where a joint must resist large sliding or twisting loads with only one screw: use two screws per joint, gussets, joining plates or butt fasteners, or add a diagonal brace. Not for precise locating on its own: add dowel pins, a kinematic coupling or a machined reference edge. Not for load-bearing joints with printed T-nuts or brackets.
- **environment_limits**: Anodised aluminium and zinc-plated or stainless nuts cope with normal indoor and outdoor conditions; heat is not a problem for the metal parts at maker temperatures, but aluminium grows about 24 µm per metre per °C, so a 300 mm aluminium plate grows about 0.58 mm from 25 °C to 105 °C (Rehorst), which matters where aluminium is bolted rigidly to steel or to a heated bed. Vibration can loosen screws over time: 80/20 sells 'vibration-proof' fasteners (Drop-Lock studs, anchor fasteners), item's hammerhead nut has a self-locking thread, and Voron builders are advised to use threadlocker and proper torque (Wikipedia, Voron 2.4). Printed nuts and brackets creep and soften with heat, especially PLA.
- **safety_notes**: Freshly cut extrusion has sharp burrs: deburr the ends and wear gloves and eye protection when cutting and drilling aluminium. Large frames are heavy and can tip over or pinch fingers while being squared; support them while tightening. Do not rely on printed T-nuts or brackets for anything that holds weight overhead or on a moving machine. Using a nut made for a different slot type can bend open the slot lips (maunsystem), leaving a weak joint that may let go later; over-tightening can strip threads or crack die-cast zinc nuts, which item rates for only 1-1.5 Nm.
- **common_failures**: (1) Parts slide under load: screws not tight enough, too few nuts, or a drop-in nut; tighten to the maker's torque, use two nuts or a joining plate, or switch to slide-in or heavy-duty nuts. (2) Nut spins while tightening: use self-aligning or spring nuts, or hold it with a hex key. (3) Wrong-size nut: slot width or I/B-type mismatch; nuts sit crooked, damage the anodising or bend the slot lips; buy nuts for the exact profile. (4) Screw too long bottoms out before clamping, or too short grips only a few threads (Hackaday). (5) Frame out of square or twisted: uneven cut ends or blind-jointed bars rotating; check the diagonals and add corner brackets or panels. (6) Forgot to put a slide-in nut in before closing the frame: use a drop-in nut or take the end off. (7) Stripped end-tap threads: tap straight, clean the chips off the tap between holes (Voron assembly guide) and do not over-torque. (8) Cracked printed nuts or brackets: replace with metal ones for structural joints.
- **related**: 
  - Captive nut pocket (nut trap): a nut held in a printed hexagonal pocket; similar job in plastic parts, but fixed in one position instead of sliding along a groove
  - Heat-set threaded insert: a permanent metal thread melted into a plastic part; not adjustable along a slot
  - Strut channel (e.g. Unistrut-type steel channel): the same slot-and-nut idea in cheaper, heavier steel for building services (Wikipedia 'See also')
  - Modular grid mounting systems (pegboard, Gridfinity-style grids): hang or clip accessories on a grid of holes instead of sliding them along a continuous groove
  - Quick-release plate (dovetail clamp): a clamp that slides and locks in a dovetail groove, usually released by a lever or knob
  - Dovetail slide with gib strip: a groove joint designed for smooth sliding motion rather than clamping
  - Knock-down furniture fittings (cam locks, cross dowels): hidden bolt-together joints for panels and wood rather than metal bars
  - V-slot wheels and linear rails: use the same extrusion grooves as a track for moving carriages

### Pictures, videos and models

- **links**: 
  - [T-Nut - Installed in a T-Slot.png (Wikimedia Commons, Robert Hewitt / ManufacturingET org)](https://commons.wikimedia.org/wiki/File:T-Nut_-_Installed_in_a_T-Slot.png): CAD render of a rotating T-nut (red) sitting in the T-slot of an extrusion; the related CAD model of a T-Nut 1-3 images in the same Wikipedia gallery show the nut from several angles *(licence: CC BY-SA 3.0)*
  - [Kaffeemaschine 2.0 Rahmen Schienenmutter1 ICEBE B25.jpg (Wikimedia Commons, Best Tech Nick 25)](https://commons.wikimedia.org/wiki/File:Kaffeemaschine_2.0_Rahmen_Schienenmutter1_ICEBE_B25.jpg): Photo of a tee nut fastening an acrylic panel to an aluminium profile frame; companion file 'Kaffeemaschine 2.0 Rahmen Winkel ICEBE B25.jpg' shows an L-shaped corner bracket on the same frame *(licence: CC BY-SA 4.0)*
  - [T-slot structural framing (Wikipedia)](https://en.wikipedia.org/wiki/T-slot_structural_framing): Photos of T-slotted profiles, a cross-section drawing of 80/20 fractional profiles, a 1964 patent drawing, the table of standard profile sizes and the T-nut gallery *(licence: text CC BY-SA 4.0; images per file (e.g. 8020-Fractional-Profiles-1.svg is CC BY-SA 3.0))*
  - [Getting Started With Aluminum Extrusions (Hackaday, Al Williams, 2021)](https://hackaday.com/2021/05/25/getting-started-with-aluminum-extrusions/): Beginner guide with photos of profiles, slide-in, drop-in and spring T-nuts, brackets, inner brackets and blind (end-tapped) joints, plus printed extrusion accessories *(licence: link only)*
  - [Aluminum Extrusion Blind Joints – The RIGHT Way to Do It (Brogan M. Pratt, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=-I9Jsa1x880): Video of making hidden blind joints: tapping the end of one bar and drilling an access hole in the other *(licence: link only)*
- **make_it_yourself**: 
  - [Customizable Plate Bracket for Aluminium Extrusion Profiles (Misumi 2020, 2040, 4040, ...) (StarrEngineer's Printables port of mightynozzle's Thingiverse thing:2503622) (URL from Printables API, page not opened)](https://www.printables.com/model/382730-customizable-plate-bracket-for-aluminium-extrusion): OpenSCAD/Customizer generator that produces 21 plate brackets (L, T, cross and more) for any extrusion width, number of rails, bracket length and thickness and screw-hole settings; featured on Hackaday in 2017 *(licence: CC BY-NC)*
  - [T-nut for 2020 aluminium extrusion profile by ORM (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1245868-t-nut-for-2020-aluminium-extrusion-profile): Pack of printable T-nuts for 2020 profiles: drop-in and slide-in, pre-threaded or holding a standard nut, single and double, with print settings *(licence: CC BY-NC)*
  - [Drop-in T-Nut 2020 / 2040 extrusion | M3 nut insertion | Ender 3 by Raschmaschine (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/203578-drop-in-t-nut-2020-2040-extrusion-m3-nut-insertion): Printed drop-in carrier that turns a standard steel M3 nut into a T-nut for Ender-3-style 2020 frames *(licence: CC BY-NC-SA)*
  - [2020 Extrusion Blind Joint Drilling Jig by akak (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/815359-2020-extrusion-blind-joint-drilling-jig): Snap-in drilling guide for 6 mm slots that locates the access holes needed to tighten M6 button-head screws in blind joints *(licence: public domain (CC0))*
  - [Strong corner bracket for 2020 aluminium extrusion by Matten79 (Printables; appeared in search results, details read via the Printables API)](https://www.printables.com/model/122072-strong-corner-bracket-for-2020-aluminium-extrusion): Popular printable corner bracket for 2020 extrusion (a 5 mm-slot remix by ripper is Printables model 145209) *(licence: CC BY-NC-SA)*
- **diagram_idea**: End-on cross-section of a 20 x 20 mm bar with a T-slot on each face, showing a drop-in T-nut first lying lengthwise in the slot opening, then twisted 90 degrees so its wings hook under the slot lips, then clamped by a screw through an L-bracket; small arrows show the nut pulled up against the lips and the whole assembly free to slide along the bar before tightening.
- **sources**: 
  - https://en.wikipedia.org/wiki/T-slot_nut (read as raw wikitext)
  - https://en.wikipedia.org/wiki/T-slot_structural_framing (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Voron_2.4 (read as raw wikitext)
  - https://commons.wikimedia.org/wiki/Category:T-slot_structural_framing
  - https://commons.wikimedia.org/wiki/File:T-Nut_-_Installed_in_a_T-Slot.png
  - https://commons.wikimedia.org/wiki/File:Kaffeemaschine_2.0_Rahmen_Schienenmutter1_ICEBE_B25.jpg
  - https://commons.wikimedia.org/wiki/File:Kaffeemaschine_2.0_Rahmen_Winkel_ICEBE_B25.jpg
  - https://commons.wikimedia.org/wiki/File:8020-Fractional-Profiles-1.svg
  - https://commons.wikimedia.org/wiki/File:Aluminiumprofile_item.jpg
  - http://www.gawirth.net/Metric_Fastening_Options_8020_Catalog_17.pdf (80/20 Catalog 17, Metric Fastening Options, pp. 711-742)
  - https://www.item24.com/en-us/t-slot-nut-5-st-m5-bright-zinc-plated-37001
  - https://shop.tech-con.ro/media/catalog/product/pdf/item-MB-T-Slot-nuts.pdf (item T-slot nuts datasheet, catalogue pp. 132-138)
  - https://www.motedis.com/en/blog/aluminium-profiles-guide
  - https://www.maunsystem.de/en/blog/slot-width-explained
  - https://hackaday.com/2021/05/25/getting-started-with-aluminum-extrusions/
  - https://hackaday.com/2017/12/16/if-3d-printer-then-custom-aluminum-extrusion-brackets/
  - https://hackaday.com/2023/08/03/better-3d-prints-courtesy-of-a-simple-mass-produced-bracket/
  - https://docs.vorondesign.com/build/mechanical/
  - https://voron.dozuki.com/Guide/Voron+0+Assembly+Guide:+01.+Preparing+the+Frame+Extrusions/79
  - https://drmrehorst.blogspot.com/2017/07/ultra-megamax-dominator-3d-printer-bed.html
  - https://help.prusa3d.com/article/pla_2062
  - https://www.youtube.com/watch?v=-I9Jsa1x880 (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=NLeTvSaPJIs (verified via YouTube oEmbed; 'Corner Brackets | Design for Mass Production 3D Printing', Slant 3D)
  - https://api.printables.com/graphql/ (Printables models 382730, 1245868, 203578, 815359, 122072, 145209 and 1069061 read via the public API)
  - https://www.printables.com/model/122072-strong-corner-bracket-for-2020-aluminium-extrusion (search result)

## 216 Suction cup

*clamping, magnetic & friction connections.* A soft rubber cup pressed onto a smooth surface so air pressure holds it on; some have a lever to increase the suction

*Not researched yet.*

## 217 Taper fit (Morse taper)

*clamping, magnetic & friction connections.* A slightly tapered shaft pushed into a matching tapered hole that locks by friction and is knocked apart with a wedge, as in drill chucks

*Also covers:* Also covers the Luer taper and Luer lock (syringe and tubing fittings)

*Not researched yet.*

## 218 Press fit (interference fit)

*clamping, magnetic & friction connections.* A part pushed into a hole that is slightly too small for it, so it is held by the squeeze alone (bearings, pins, printed parts)

*Not researched yet.*

## 219 Collet (and keyless chuck)

*clamping, magnetic & friction connections.* A slotted sleeve squeezed by a nut or taper so it closes evenly around a round shaft or tool, gripping it centred

*Not researched yet.*

## 220 Clamp-on tube fittings (slip-on structural fittings)

*clamping, magnetic & friction connections.* Tees, elbows and crosses that slide onto round tube and lock with set screws, building frames and rails that can be taken apart

*Not researched yet.*

## 221 Internal tube anchors (star nut, expansion plug)

*clamping, magnetic & friction connections.* Parts pushed into the end of a tube that grip the inside with barbs, a squeezed rubber plug or a wedge, giving a thread or a clamp point

*Not researched yet.*

## 222 Blind threaded fixings (rivet nut, well nut)

*clamping, magnetic & friction connections.* Threaded inserts fitted from one side only that swell behind thin sheet or a tube wall; a rubber well nut also seals and damps vibration

*Not researched yet.*

## 257 Ordinary screw joint (bolt and nut, machine screw)

*clamping, magnetic & friction connections.* A bolt through the parts into a nut or tapped thread, clamping them together; the baseline everything else is compared with

*Not researched yet.*

