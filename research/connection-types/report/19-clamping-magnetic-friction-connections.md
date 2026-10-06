# clamping, magnetic & friction connections: Held by clamping, friction, suction or magnets

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 111 Magnet joint (embedded magnets, magnetic catch)

*clamping, magnetic & friction connections.* Pairs of magnets, or a magnet and a steel plate, set into parts so they snap together, align themselves and pull apart by hand

*Also covers:* Also covers programmable (coded) magnet arrays that only mate with a matching pattern.

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
  - magnetic breakaway connector, e.g. MagSafe (Apple, brand); magnetic plugs that also carry current through contacts have their own entry, Magnetic connector
  - programmable, correlated or coded magnets (patterns of magnets with alternating poles that only mate with a matching pattern); Polymagnets (brand, trademark of Correlated Magnetics Research) (Wikipedia 'Programmable magnet')
- **family**: clamping, magnetic & friction connections
- **other_families**: quick-release & tool-free, locks, latches & catches, locating & alignment
- **one_liner**: Pairs of permanent magnets, or a magnet and a piece of steel, set into the faces of two parts so the parts pull together, roughly line themselves up and stay shut, yet can be pulled apart by hand.
- **complexity**: A few parts: two magnets (or one magnet and a steel washer, plate or ball), the pockets or housings they sit in, and usually glue or a press fit to keep them there. A cabinet magnetic catch is a small ready-made unit: a plastic housing holding a flat magnet with steel plates beside it, plus a separate steel strike plate or bracket on the door (as seen in a photo of one taken apart, Wikimedia Commons 'Magnetic Catch parts').
- **how_it_works**: A permanent magnet pulls hard on steel and on the opposite pole of another magnet, and the pull is strongest when the faces touch: even a gap of well under a millimetre can halve it (K&J 'How much will a magnet hold?'). Set into two mating faces, the magnets pull the parts shut and hold them there with no power. Straight pulling apart is resisted by the full magnetic force, but sliding sideways is resisted mainly by friction, which is only about 10-25 % of the pull (K&J; supermagnete). Because two magnets pull hardest towards each other when slightly offset and settle where they line up, the parts also pull themselves roughly into line as they close (K&J 'Magnet shear force with doors'). A cleverer version sets many small magnets side by side with their poles alternating in a planned pattern (programmable, correlated or coded magnets). Two patterns made to match pull together and lock, while a pattern that doesn't match won't: Wikipedia says they 'can be programmed to interact only with other magnetic structures that have been coded to respond', and the inventors' patent describes sets of codes that act 'as a unique identifier or key, requiring a matching part to operate the device' (Wikipedia 'Programmable magnet'; US7843297B2).

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
- **play_and_precision**: Play: none in the pulling direction when the faces touch, but sideways the parts can shift unless something locates them. Magnets pull themselves into line as they close (K&J), which gives rough alignment only; for repeatable positioning add pins, cones or a recess ⚑ [uncertain]. Misalignment: very tolerant while closing, because the magnets pull the parts in *(⚑ parts need confirming)*
- **access_needed**: one side only (blind): the parts just meet face to face, and hidden magnets can work through a thin plastic skin or panel (at reduced force)
- **materials**: Magnets: sintered neodymium-iron-boron (NdFeB) discs or cylinders, grades N35 to N52, usually with nickel-copper-nickel plating; ferrite (ceramic) magnets are much weaker (Rapid Elevation; K&J safety page). Counterparts: ordinary low-carbon steel works best; ferritic 430 stainless steel works (about 82-99 % of the pull on plain steel) but 304 and 316 stainless steels are not magnetic (K&J 'Is stainless steel magnetic?'). Housings: 3D-printed PLA, PETG or ASA, wood, or plastic catch housings. Glues: epoxy, superglue, polyurethane glue and similar bond to magnets; polypropylene and polyethylene are almost impossible to glue (K&J 'Sticky business')
- **maker_difficulty**: easy: print or drill a pocket, press or glue in a magnet the right way round, and add a matching magnet or steel washer; the main traps are polarity, pocket size and heat (Rapid Elevation; Hackaday)

### Making it

- **processes**: 
  - 3D print (FDM): press-fit or glued magnets in printed pockets, or magnets sealed inside during a print pause (Rapid Elevation; Hackaday)
  - woodwork: magnets glued into drilled holes, or surface-mounted cabinet magnetic catches
  - off-the-shelf part: magnetic catches, countersunk ring magnets, pot (cup) magnets, adhesive-backed magnets (K&J)
  - 3D print (resin), CNC and laser cut: pockets can be cut or printed the same way ⚑ [uncertain] *(⚑ parts need confirming)*
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
- **when_to_use**: Use it for lids, doors, covers, access panels, detachable modules, tool holders, display pieces and cosplay parts that should close with a satisfying click, stay shut against light loads and come apart by hand many times with no wear (Rapid Elevation; K&J FAQ); when parts should find their own position as they close (K&J); where a connection should break away safely instead of breaking, such as a cable or a part that could snag (Wikipedia 'MagSafe'); and where you want a hidden fastening with no visible latch. Use a coded magnet pattern when a lid or module should only fit one way round or only with its own partner, a magnetic form of keying. The four jobs these patterns are designed for are 'align, attach, latch, and spring', and they 'may be constructed from discrete permanent magnets', so a simple one can be laid out from separate disc magnets in printed pockets, alternating north and south (Wikipedia 'Programmable magnet'). Wikipedia also says they give 'stronger shear resistance' than ordinary magnets, but its article is flagged as reading like a press release, so treat that as the makers' claim.
- **when_not_to_use**: Avoid it where the joint takes large sideways, peeling or twisting loads, since magnets are weak in shear (15-25 % of pull, supermagnete): add a lip or pins, or use a snap fit, bayonet or screws instead. Don't rely on it for heavy or safety-critical loads, or where the parts must stay together in a crash or drop: use a mechanical latch, or a magnetic-assisted buckle where the magnet only guides and a catch carries the load. Avoid it in hot places above about 80 °C for standard magnets (Wikipedia), outdoors or underwater without corrosion protection (K&J), near pacemakers, and in anything small children could take apart (K&J safety page).
- **environment_limits**: Heat: standard N-grade neodymium magnets are rated to about 80 °C and lose strength above that; letter grades reach about 230 °C and all lose their magnetism near 320 °C (Wikipedia 'Neodymium magnet'; K&J safety page). The plastic around them usually fails first: PLA softens at about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen), so a press-fit magnet in PLA can loosen in a hot car. Water: plated neodymium magnets are not waterproof and corrode outdoors or when wet, losing strength (K&J safety page); badly corroded sintered magnets can crumble to powder (Wikipedia). Over time they lose less than 1 % in 10 years if not overheated (K&J FAQ), but press fits can loosen through creep (Slant 3D via Hackaday). Vibration and shocks can slide the parts apart because sideways grip is only friction ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Keep neodymium magnets away from children: if two or more small magnets are swallowed they can pinch the intestine between them and need emergency surgery (K&J safety page; Wikipedia), so glue or seal magnets in well. Larger magnets can pinch skin painfully or, when big, break bones; magnets that slam together can chip or shatter and throw sharp pieces, so wear eye protection (K&J safety page; Wikipedia). Strong magnets can switch off or upset pacemakers and implanted defibrillators, and can damage bank cards and magnetic media (K&J safety page). People with a nickel allergy should avoid long contact with nickel-plated magnets. Don't drill or grind magnets: the dust is flammable (K&J safety page).
- **common_failures**: Magnets repel instead of attract because one was fitted the wrong way round: mark poles and test each pair before gluing or sealing (Rapid Elevation). Magnets pull out of their pockets (the other magnet is stronger than the press fit or glue): size pockets carefully, use epoxy, a retaining lip or a sealed pocket (Rapid Elevation; Slant 3D via Hackaday). Weak hold because of too much plastic or paint between the magnets, or steel that is too thin (K&J). Parts slide apart sideways: add a lip, recess or pins, a rubber pad, or bigger magnets (K&J; supermagnete). Chipped or cracked magnets from slamming together: use a steel counterpart on one side (Slant 3D via Hackaday; K&J). Loss of strength from heat (hot glue, soldering iron, hot environments) or corrosion (K&J; Hackaday). Press-fit magnets loosen over time through creep (Slant 3D via Hackaday). A magnet dropped in during a print jumps to a steel nozzle or spoils a magnetic print bed (Hackaday).
- **related**: 
  - Mid-print embedding (captive nuts, magnets and bearings): the method for sealing magnets inside a print during a pause
  - Magnetic-assisted buckle: magnets pull the halves together and line them up, but a mechanical catch carries the load
  - Switchable permanent magnet (rotary magnetic base): a magnet you can turn on and off by hand for strong, removable holding
  - Holding electromagnet and electro-permanent magnet: magnets switched by electricity instead of being always on
  - Hidden latches (magnetic-key latch): a magnet held outside a box moves a hidden catch inside
  - Snap fits and push-push latches: mechanical ways to hold a lid or door shut that take sideways loads better
  - Kinematic coupling: locates parts exactly with balls in grooves; magnets can supply the force that holds it together ⚑ [uncertain]
  - Magnetic coupling and magnetic gear: magnets that pass turning force through a gap instead of holding parts together
  - Magnetic connector: a magnetic plug that also carries current through spring contacts (MagSafe-style chargers, magnetic pogo connectors); this entry only holds parts together
  - Keying: makes parts fit only the right way round or only with the right partner; coded magnet patterns do the same job magnetically (Wikipedia 'Programmable magnet') *(⚑ parts need confirming)*

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
  - https://en.wikipedia.org/wiki/Programmable_magnet
  - https://patents.google.com/patent/US7843297B2/en (read via WebFetch: Google Patents blocked direct download)

### Finder tags

- **connects**: 3D-printed part, lid, door or cover, wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: comes apart without damage, refit by hand
- **clicks**: not applicable
- **tools**: none, soldering iron, glue gun, drill and tap, press or vice
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, play_and_precision, processes, related

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
- **reuse_cycles**: effectively unlimited ⚑ [uncertain: the magnets are not worn out by switching, but no cycle rating was found; wear is in the knob, bearing, detent or lock pin and the base face] *(⚑ parts need confirming)*
- **tools_needed**: none to use (turn the knob or lever by hand); a screwdriver or bolts to fix the magnet into a jig or stand; for a home-made one, a 3D printer, strong magnets, steel pole pieces (bolts, rods, nuts or washers), glue and a vice or clamp to press parts together
- **seal**: none: it holds but does not seal
- **load**: Light to heavy depending on size: printed DIY versions hold a few kilograms (one 10-magnet printed base held 3.6 kg upside down); dial-indicator stands are typically rated about 60 kgf of magnetic pull; woodworking clamps are sold as up to 95 lb, 150 lb or 400 lb; hand-held lifting versions hold tens of kilograms safely. Strong against pulling straight off a thick, flat, clean steel surface; much weaker against sliding (one hand lifter is rated 89.4 kg breakaway but only 20.4 kg safe shear) and against peeling or prying; much weaker on thin, painted, rusty or curved steel.
- **adjustable**: No adjustment of force in most (fully on or fully off); position is set by where you put it down. Some industrial lifters and chucks are manually set to different strengths ⚑ [uncertain: not checked for hobby-size units]. *(⚑ parts need confirming)*
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
  - [Real Magnet Turns on and off Science! by JCisMe (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/465572-real-magnet-turns-on-and-off-science): Very simple two-magnet on/off magnet using two 1/2 x 1/2 x 1/8 in block magnets and a steel bottle cap, with clear notes on magnet orientation *(licence: CC BY-NC-SA)*
  - [Switchable Magnet by larsch (Thingiverse) (appeared in search results; page is JavaScript-only and was not read)](https://www.thingiverse.com/thing:3623166): Magswitch-like printable switchable magnet using 12 small cylinder magnets and 12 steel cylinder rods (per search-result summary) *(licence: ⚑ [uncertain: not visible])* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, make_it_yourself, reuse_cycles

## 113 Aluminium-extrusion connectors (T-slot nuts and brackets)

*clamping, magnetic & friction connections.* The nuts, brackets and hidden fasteners that slide into the grooves of T-slot aluminium extrusion to build 3D-printer, CNC and robot frames without welding

*Also covers:* Also covers strut channel and fixed-pitch hole-grid kits (goBILDA, Actobotics, Meccano) as the stepped alternative to a T-slot.

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
  - strut channel, metal framing channel, Unistrut (brand)-type channel: the heavier sheet-steel relative, with inward-curving lips and a channel nut that 'may have a spring' (Wikipedia 'Strut channel')
  - channel nut, spring nut (the nut used inside strut channel; Wikipedia 'Strut channel')
  - fixed-pitch hole-grid systems: goBILDA (brand), Actobotics (brand) and Meccano (brand), the stepped alternative to a continuous slot (Game Manual 0; Wikipedia 'Meccano')
- **family**: clamping, magnetic & friction connections
- **other_families**: interlocking joints & joinery, sliding, telescoping & linear motion
- **one_liner**: A family of nuts, bolts, brackets and hidden connectors that lock into the T-shaped grooves of aluminium extrusion, clamping onto the groove's lips when tightened so bars, panels, motors and accessories can be bolted together anywhere along their length and moved later.
- **complexity**: A few parts per joint: the extrusion itself (a bar with a T- or V-shaped groove on each side and a hole down the middle), a nut that sits inside the groove (plain block, drop-in or spring-loaded), a screw, and usually a bracket, plate or internal connector; hidden joints may add an end-tapped thread and a drilled access hole.
- **how_it_works**: Each side of the bar has a narrow slot opening over a wider hidden channel. The nut is wider than the opening, so once inside it cannot be pulled out through the slot (it interlocks), but it can slide along the groove. When the screw through a bracket or part is tightened, it pulls the nut up against the underside of the slot lips and clamps everything together, so friction (and on some nuts, teeth or ridges biting into the anodised surface) stops sliding. Slide-in nuts must be threaded on from an open end of the bar; drop-in and roll-in nuts are shaped so they can be pushed in anywhere and turned 90 degrees to lock, often with a spring or ball to hold them in place while you fit the screw. Hidden joints instead screw into the tapped centre hole in the end of one bar, with the screw head or a connector clamping inside the other bar's slot. Two relatives use the same ideas. Strut channel (Unistrut (brand)-type) is sheet metal folded into an open channel whose lips curve inwards; parts are fixed 'with a bolt, threaded into a channel nut, that may have a spring to ease installation', and punched versions also have holes or slots at fixed spacings for fixing the channel to walls (Wikipedia 'Strut channel'). Fixed-pitch hole-grid kits swap the continuous slot for a regular grid of holes, so parts can only be moved in whole steps: goBILDA (brand) uses '4mm holes on 8mm grid, M4 screws', Actobotics (brand) is its inch-based relative (Game Manual 0), and Meccano (brand) strips have holes at a standard 1/2 in (12.7 mm) spacing (Wikipedia 'Meccano').

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
- **adjustable**: Yes: loosen the screw, slide the nut, bracket or part along the groove to any position, and re-tighten; drop-in and roll-in nuts can be added later in the middle of a bar. Hidden end-tapped joints and end fasteners are fixed in position. Hole-grid kits adjust only in steps of the grid, e.g. 8 mm on goBILDA (Game Manual 0).
- **play_and_precision**: No play once tightened, but the position is only as good as the cut ends and your assembly: squareness is not automatic (Voron's build guide says measure the diagonals, which should differ by less than 2 mm, and notes that blind-jointed bars may rotate until panels and corners are fitted). Butt fasteners give 'near perfect alignment' end to end (80/20). Slot widths and shapes differ between systems (e.g. 5.25 mm versus 6 mm slots on so-called 20-series bars, and I-type versus B-type profiles), so nuts from one system may fit loosely or bend another's slot lips.
- **access_needed**: one side only (blind) for T-nuts and brackets, which bolt on from the outside face; hidden end-tapped joints and end fasteners need the end of the bar tapped and an access hole drilled in the mating bar to reach the screw head
- **materials**: Bars: extruded aluminium, typically 6105-T5 (Wikipedia) or EN AW-6063 T66 (maunsystem), usually anodised. Nuts: zinc-plated or black-zinc carbon steel (80/20 standard slide-in nuts are 1215 carbon steel), stainless steel, or die-cast zinc for light-duty nuts. Brackets and connectors: die-cast zinc, aluminium or steel. 3D-printed PLA or PETG nuts and brackets for light accessories and prototypes. Panels of acrylic, polycarbonate, wood, sheet metal or mesh are fixed into the slots with the same nuts. Strut channel is usually zinc-coated (galvanised), painted, epoxy- or powder-coated sheet steel, with stainless steel, aluminium or fibreglass versions for corrosive or food-processing places (Wikipedia 'Strut channel').
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
  - Strut channel from different makers fits together because they follow the Metal Framing Manufacturers Association standard (MFMA-4, as of 2020); the basic channel is about 41 mm (1 5/8 in) square, and nuts inside the channel need special sockets, because normal sockets won't fit through the opening (Wikipedia 'Strut channel', https://en.wikipedia.org/wiki/Strut_channel).
  - goBILDA's grid is 4 mm holes on an 8 mm pitch with M4 screws; its 8 mm pitch chain and HTD 3 mm and 5 mm belts fit exactly centre to centre on the grid (Game Manual 0, goBILDA page, https://game-manual-0.readthedocs.io/en/latest/docs/hardware-basics/kit-and-hardware-guide/gobilda.html).

### When to use it

- **everyday_examples**: 
  - the frame of a Creality Ender-3 or Voron 3D printer, with T-nuts holding the motors, rails and panels
  - hobby CNC routers and laser-cutter frames built from 2020 or 4040 extrusion
  - workshop enclosures, machine guards and grow-light racks with acrylic panels held in the slots
  - a bicycle trailer or camper-van shelving built from aluminium profile (Wikipedia shows a trekking trailer carrying Euroboxes)
  - strut channel (Unistrut (brand)-type) frames supporting pipes, electrical conduit and ventilation ducts in buildings, sometimes hung from threaded rod (Wikipedia 'Strut channel')
- **when_to_use**: When you want a strong, stiff metal frame that you can build with hand tools, adjust, and change later: 3D-printer, CNC and laser frames, robot chassis, test rigs, jigs, enclosures, workbenches, camera or lighting rigs, and shelving. Great when you do not know the final layout yet, because every part can slide along the grooves and new parts can be added mid-bar with drop-in nuts. Also useful as a mounting grid: any accessory with a slot-sized screw can be clamped anywhere along the bar. Strut channel suits cheaper, heavier frames for building services and the workshop: pipe, cable and duct supports, workbenches, shelving and equipment racks, which go together 'with minimal tools' and can be changed later (Wikipedia 'Strut channel'). A hole-grid kit suits robots, where parts should land on standard spacings, for example shafts placed so that chain and belts fit exactly between grid holes (Game Manual 0).
- **when_not_to_use**: Not for the cheapest or lightest builds, where wood, plywood or printed parts with captive nuts are cheaper; every joint needs special nuts and brackets (Hackaday: 'what you do need is a lot of special parts'), and their cost adds up. Not for permanent heavy structures that are never changed, where welding or bolted steel is cheaper and stronger; for building services use strut channel. Not where a joint must resist large sliding or twisting loads with only one screw: use two screws per joint, gussets, joining plates or butt fasteners, or add a diagonal brace. Not for precise locating on its own: add dowel pins, a kinematic coupling or a machined reference edge. Not for load-bearing joints with printed T-nuts or brackets.
- **environment_limits**: Anodised aluminium and zinc-plated or stainless nuts cope with normal indoor and outdoor conditions; heat is not a problem for the metal parts at maker temperatures, but aluminium grows about 24 µm per metre per °C, so a 300 mm aluminium plate grows about 0.58 mm from 25 °C to 105 °C (Rehorst), which matters where aluminium is bolted rigidly to steel or to a heated bed. Vibration can loosen screws over time: 80/20 sells 'vibration-proof' fasteners (Drop-Lock studs, anchor fasteners), item's hammerhead nut has a self-locking thread, and Voron builders are advised to use threadlocker and proper torque (Wikipedia, Voron 2.4). Printed nuts and brackets creep and soften with heat, especially PLA.
- **safety_notes**: Freshly cut extrusion has sharp burrs: deburr the ends and wear gloves and eye protection when cutting and drilling aluminium. Large frames are heavy and can tip over or pinch fingers while being squared; support them while tightening. Do not rely on printed T-nuts or brackets for anything that holds weight overhead or on a moving machine. Using a nut made for a different slot type can bend open the slot lips (maunsystem), leaving a weak joint that may let go later; over-tightening can strip threads or crack die-cast zinc nuts, which item rates for only 1-1.5 Nm.
- **common_failures**: (1) Parts slide under load: screws not tight enough, too few nuts, or a drop-in nut; tighten to the maker's torque, use two nuts or a joining plate, or switch to slide-in or heavy-duty nuts. (2) Nut spins while tightening: use self-aligning or spring nuts, or hold it with a hex key. (3) Wrong-size nut: slot width or I/B-type mismatch; nuts sit crooked, damage the anodising or bend the slot lips; buy nuts for the exact profile. (4) Screw too long bottoms out before clamping, or too short grips only a few threads (Hackaday). (5) Frame out of square or twisted: uneven cut ends or blind-jointed bars rotating; check the diagonals and add corner brackets or panels. (6) Forgot to put a slide-in nut in before closing the frame: use a drop-in nut or take the end off. (7) Stripped end-tap threads: tap straight, clean the chips off the tap between holes (Voron assembly guide) and do not over-torque. (8) Cracked printed nuts or brackets: replace with metal ones for structural joints.
- **related**: 
  - Captive nut pocket (nut trap): a nut held in a printed hexagonal pocket; similar job in plastic parts, but fixed in one position instead of sliding along a groove
  - Heat-set threaded insert: a permanent metal thread melted into a plastic part; not adjustable along a slot
  - Strut channel (e.g. Unistrut-type steel channel): the same slot-and-nut idea in cheaper, heavier steel for building services (Wikipedia 'See also'); described as a variant under how it works
  - Modular grid mounting systems (pegboard, Gridfinity-style grids): hang or clip accessories on a grid of holes instead of sliding them along a continuous groove
  - Quick-release plate (dovetail clamp): a clamp that slides and locks in a dovetail groove, usually released by a lever or knob
  - Dovetail slide with gib strip: a groove joint designed for smooth sliding motion rather than clamping
  - Knock-down furniture fittings (cam locks, cross dowels): hidden bolt-together joints for panels and wood rather than metal bars
  - V-slot wheels and linear rails: use the same extrusion grooves as a track for moving carriages
  - Threaded rod and studs: long bolts, tie rods and hangers; strut channel frames can be hung from threaded rod

### Pictures, videos and models

- **links**: 
  - [T-Nut - Installed in a T-Slot.png (Wikimedia Commons, Robert Hewitt / ManufacturingET org)](https://commons.wikimedia.org/wiki/File:T-Nut_-_Installed_in_a_T-Slot.png): CAD render of a rotating T-nut (red) sitting in the T-slot of an extrusion; the related CAD model of a T-Nut 1-3 images in the same Wikipedia gallery show the nut from several angles *(licence: CC BY-SA 3.0)*
  - [T-slot structural framing (Wikipedia)](https://en.wikipedia.org/wiki/T-slot_structural_framing): Photos of T-slotted profiles, a cross-section drawing of 80/20 fractional profiles, a 1964 patent drawing, the table of standard profile sizes and the T-nut gallery *(licence: text CC BY-SA 4.0; images per file (e.g. 8020-Fractional-Profiles-1.svg is CC BY-SA 3.0))*
  - [Getting Started With Aluminum Extrusions (Hackaday, Al Williams, 2021)](https://hackaday.com/2021/05/25/getting-started-with-aluminum-extrusions/): Beginner guide with photos of profiles, slide-in, drop-in and spring T-nuts, brackets, inner brackets and blind (end-tapped) joints, plus printed extrusion accessories *(licence: link only)*
  - [Aluminum Extrusion Blind Joints – The RIGHT Way to Do It (Brogan M. Pratt, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=-I9Jsa1x880): Video of making hidden blind joints: tapping the end of one bar and drilling an access hole in the other *(licence: link only)*
  - [SpringNutInPlace.jpg (Wikimedia Commons, by Bob Blaylock)](https://commons.wikimedia.org/wiki/File:SpringNutInPlace.jpg): Photo of a spring-loaded channel nut sitting inside the lips of a strut channel, ready for a bolt (used on Wikipedia 'Strut channel') *(licence: CC BY-SA 4.0)*
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
  - https://en.wikipedia.org/wiki/Strut_channel
  - https://en.wikipedia.org/wiki/Meccano
  - https://game-manual-0.readthedocs.io/en/latest/docs/hardware-basics/kit-and-hardware-guide/gobilda.html
  - https://commons.wikimedia.org/wiki/File:SpringNutInPlace.jpg

### Finder tags

- **connects**: boards or sheet, tube, rod or extrusion
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

## 216 Suction cup

*clamping, magnetic & friction connections.* A soft rubber cup pressed onto a smooth surface so air pressure holds it on; some have a lever to increase the suction

### What it is

- **plain_name**: A soft rubber cup you press flat onto glass or tile so it sticks there with no glue or screws, and pops off when you lift its tab; some have a flip lever that makes it grip much harder
- **term**: Suction cup (vacuum cup)
- **aliases**: 
  - sucker
  - vacuum cup, vacuum pad (industrial and glass-handling term)
  - suction pad
  - lever suction cup, locking suction cup, flip-lever suction cup (a cam lever pulls the cup's centre up; used on phone, sat-nav and camera mounts and tile lifters)
  - suction cup lifter, glass lifter, tile lifter, flip cup (hand tools with one or two lever cups)
  - pump vacuum cup, hand-held vacuum cup, red-line vacuum cup (a hand plunger pump keeps the vacuum up; Wood's Powr-Grip)
  - mushroom-head (button-head) suction cup, suction cup with threaded stud (e.g. M4), suction cup hook (ways the cup attaches to what it holds)
  - self-sealing suction cup (research robot-gripper cup that only sucks when touching an object)
  - vacuum gripper, bellows suction cup (powered versions, covered in the 'Vacuum gripper' entry)
- **family**: clamping, magnetic & friction connections
- **other_families**: quick-release & tool-free, hydraulics, pneumatics & vacuum
- **one_liner**: A soft cup that you press flat against a smooth, airtight surface; as it springs back it leaves a pocket of low pressure under it, and the outside air pressure then holds it on until you let air back in.
- **complexity**: Single piece for a plain cup (a moulded soft cup with a knob, hook, loop or threaded stud); a small assembly for lever cups (cup, cam lever and rigid housing or handle) and pump cups (cup, rigid handle, hand plunger pump with a red-line low-vacuum indicator, and a release tab or lever) (Wood's Powr-Grip 'How They Work').
- **how_it_works**: Pressing the cup flat pushes most of the air out past its rim. The springy cup then tries to return to its dome shape, which enlarges the space under it while its soft rim stops air getting back in, so the pressure inside drops below the outside air pressure (a partial vacuum) (Wikipedia 'Suction cup'). The outside air, pressing at about 100 kPa (roughly 1 kg on every square centimetre at sea level), pushes the cup onto the surface; the ideal pull-off force is the covered area times the pressure difference (F = A x P), and sideways loads are carried by friction, which that pushing force creates (Wikipedia; Schmalz). A lever cup uses a cam to pull the centre of the cup further away from the surface, enlarging the trapped space: if the space doubles, the pressure inside halves (Boyle's law) (Energy Vanguard). Air slowly leaks back in through tiny gaps between the rim and the surface, so the grip fades over minutes to days depending on how smooth and clean the surface is (Wikipedia; Tiwari and Persson 2019).

### Finder attributes

- **job**: 
  - join and hold: sticks a hook, holder, sign, camera or phone mount to glass, tile or smooth metal without drilling, or lets you pick up and carry a smooth panel such as glass or floor tiles
  - lock, and release by hand: lever and pump cups stay stuck until you flip the lever or pull the release tab
- **motion**: none: a fixed attachment (it can rock slightly on its soft rubber)
- **degrees_of_freedom**: 0 while it holds: it cannot move, although the soft cup lets the held object wobble a little, and it will slide if pushed sideways harder than friction can resist
- **special_behaviour**: 
  - quick-release: lifting the release tab, flipping the lever or pressing the release valve lets air in and the cup comes straight off (Adams Manufacturing; Wood's Powr-Grip)
  - none of the other clever behaviours; research 'self-sealing' cups (Kessens and Desai) only suck when they touch an object, but everyday cups do not
- **holding_principle**: 
  - suction or air pressure: the outside air pushes the cup onto the surface because the pressure under it is lower
  - friction or clamping (force-fit): sideways loads, such as a hook on a wall, are held by friction, which the air pressure creates by pushing the rim onto the surface (Schmalz friction coefficients; Energy Vanguard)
- **input_output**: not applicable
- **power**: passive (no power needed): plain and lever cups work on air pressure alone; pump cups are pumped up by hand. Powered vacuum cups with a pump or ejector are a separate entry ('Vacuum gripper').
- **removability**: tool-free quick release: lift the edge or release tab, flip the lever, or press the release lever on a pump cup (Adams Manufacturing; Wood's Powr-Grip).
- **reuse_cycles**: many times: it can be stuck and unstuck over and over until the rubber ages, hardens or gets nicked on the rim ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: none: clean the surface and the cup (warm soapy water, lint-free cloth) and optionally put a little water, oil or petroleum jelly on the rim (Adams Manufacturing; Wikipedia)
- **seal**: airtight or pressure, but only at its own rim: the soft lip must seal against the surface to keep the low pressure inside the cup, and it leaks slowly over time; it is not used to seal an opening. A dab of oil or water improves the seal (Wikipedia; Adams Manufacturing).
- **load**: Light to medium. Strongest when pulled straight off: the ideal force is area x pressure difference (about 130 N for a cup 4 cm across; Wikipedia), but a real 4 cm PVC cup held at most about 9 kg on a smooth surface in lab tests (Tiwari and Persson). Sideways loads (a hook on a wall) rely on friction, roughly half as much when dry and less when wet or oily (Schmalz; Pneumatic Tips). Very weak in peel: a heavy object on a long stem tilts the cup and lifts its edge (US patent 6,648,285). Hand-pumped lifting cups are rated about 7-79 kg per cup (Wood's Powr-Grip).
- **adjustable**: no: to move it you release it and stick it on again. Lever and pump cups can be re-tightened, and a plain cup can be 'burped' by pressing it down again to push out air that has leaked in (Adams Manufacturing).
- **play_and_precision**: noticeable: the soft cup lets the held object sag, tilt or wobble a little, and it may creep or slide slowly, so it is poor at locating anything precisely. Tolerates a slightly curved surface if the cup is soft enough, but not texture or gaps.
- **access_needed**: one side only (blind): it sticks to the face of a window, tile, mirror or panel without reaching behind it
- **materials**: Cups: soft PVC (vinyl), neoprene, natural rubber, nitrile rubber (NBR), silicone, polyurethane and other elastomers (Adams Manufacturing; Schmalz material guide); 3D-printed cups use soft TPU (85A-98A) (Fredslund on Printables). Surfaces it suits: smooth, non-porous ones such as glass, mirrors, glazed tiles, polished stone, smooth metal and gloss plastic (Wikipedia; Wood's Powr-Grip). Poor on porous or textured surfaces such as wood, concrete, cardboard, textured dashboards and most painted walls, which let air leak in (Wood's Powr-Grip: porous materials need powered high-flow systems).
- **maker_difficulty**: easy: buy a cup and design or print a holder that clips onto its knob; making a cup that seals well yourself (for example printing one in TPU) is moderate, and printed cups leak faster than moulded ones (Fredslund)

### Making it

- **processes**: 
  - off-the-shelf part: moulded suction cups with mushroom (button) heads, hooks, threaded studs or lever housings are cheap and seal far better than home-made ones
  - 3D print (FDM): holders, clips, keyhole mounts, lever housings and hooks in PLA or PETG around a bought cup; complete cups printed in soft TPU with a PETG lever and housing (Fredslund on Printables; fitz08uk on Thingiverse)
  - CNC or laser cut: flat backing plates, brackets and shelves that the cups' knobs slot into ⚑ [uncertain]
  - moulding: cups are normally moulded in soft plastics and rubbers (Adams Manufacturing; Schmalz); home casting of silicone cups in printed moulds is possible but was not checked ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: a printed cup is made in soft TPU and the lever, housing and handle in a rigid plastic, then assembled (Fredslund's 'Suction Cup 2.0' needs no screws)
- **making_tips_3d_printing**: 1) Easiest and most reliable: buy the suction cups and print only the part they hold. Design a keyhole slot or snap-in pocket for the cup's mushroom (button) head; one Printables design hides 1 1/8 in (29 mm) mushroom-head cups inside printed 'floating' shelves (The Odd Artisan), and another prints a hook with a built-in M4 thread for suction cups that have an M4 threaded stud, printed at 0.1 mm layers (wuguigui). 2) Printing the cup itself: use the softest TPU you can get (85A is recommended; 98A also works for some designs) and print it on a smooth build plate so the sealing face comes out glossy and airtight; printing TPU a little hot helps it flow, and a slightly higher first layer avoids back-pressure jams (Fredslund, 'Suction Cup' and 'Suction Cup 2.0'). 3) Expect a printed cup to be strong only for a short time: its designer notes it 'does not hold air forever, as the filament is not soft enough to close completely' (Fredslund). 4) Rigid parts (lever, clip, housing, handle) in PETG with about 5 perimeters and 30% infill, layers no thicker than 0.2 mm for the lever and clip so they assemble and move smoothly; all print without supports (Fredslund). 5) A lever that pulls the cup's centre away from the surface (a cam or over-centre lever) greatly increases the hold compared with a plain cup (Energy Vanguard; Fredslund's design). 6) Keep the load close to the surface and near the cup's centre: a long arm or a heavy item on the stem tilts the cup and peels its rim (US patent 6,648,285). 7) Size the cup from the load: holding force = area x pressure difference, divided by a safety factor of at least 2, and divided again by the friction coefficient (about 0.5) if the load pulls sideways along the surface (Schmalz; Pneumatic Tips). 8) Printed TPU adapter cups also work for pressing onto smooth plastic parts, e.g. a TPU cup that fits a vacuum pump to storage bags (mosselini1 on Printables).
- **off_the_shelf_parts**: Suction cups (vacuum cups) with mushroom or button head, with hook, with threaded stud (e.g. M4) or with keyhole mount; lever suction cup mounts (locking suction cups) for phones, sat-navs and cameras; suction cup lifters (glass or tile lifters, flip-lever cups); hand-held pump vacuum cups with red-line indicator (Wood's Powr-Grip); industrial vacuum suction cups and bellows suction cups in NBR, silicone, natural rubber, polyurethane or PVC (Schmalz), which need a vacuum pump or ejector.
- **rules_of_thumb**: 
  - Ideal pull-off force F = A x P: a cup of 2.0 cm radius (area 0.0013 m2) at 100,000 Pa could hold about 130 N (about 13 kg), assuming a perfect vacuum, no leaks and a straight pull (Wikipedia 'Suction cup').
  - Real cups hold less: a soft PVC cup about 4 cm across (theoretical 113 N, about 11 kg) held at most about 9 kg on a smooth surface because not all the air could be pushed out (Tiwari and Persson, 'Physics of suction cups in air and in water', arXiv:1905.09042).
  - Safety factor: at least 1.5 for smooth, dense surfaces; 2 or more for rough, porous, oily or uneven ones; 2.5 or more when the load is swung or tilted (Schmalz 'Design of the suction cup' and 'Theoretical holding force of a suction cup'; Pneumatic Tips).
  - Cup diameter for industrial vacuum pads: d (cm) = 1.12 x sqrt(m x S / (P x n)) for a horizontal lift, and divide inside the root by the friction coefficient for a vertical (sideways) load; m in kg, P = vacuum in bar, n = number of cups, S = safety factor. Example: 50 kg, 4 cups, 0.4 bar vacuum, S = 2 gives 8.85 cm (horizontal) or 12.5 cm (vertical) (Schmalz 'Design of the suction cup').
  - When the load pulls along the surface (a cup on a wall or a window), the needed holding force is the weight divided by the friction coefficient: about 0.5 for dry glass, stone, metal and plastic, 0.2-0.4 for wet and about 0.1 for oily surfaces (Pneumatic Tips 'How do you size a vacuum cup?'; Schmalz).
  - Air pressure drops about 12.5 mbar per 100 m of height, so a suction cup holds a little less in the mountains (Pneumatic Tips).
  - The smoother the surface, the longer the hold: leak-out time fell steeply as surface roughness rose; on surfaces smoother than about 1 micrometre (rms) soft PVC cups held much longer than predicted because plasticiser from the PVC blocked the leak paths (Tiwari and Persson 2019).
  - Household cups work best if stuck on above about 5 C (40 F), and then hold reliably from about -30 C to 49 C (-22 F to 120 F) (Adams Manufacturing 'Suction Cups 101').
  - Long-term temperature ranges of industrial cup materials: NBR -10 to 70 C, silicone -30 to 180 C, natural rubber -25 to 80 C, PVC -15 to 50 C (Schmalz 'Selection by material of the suction cup', 2025).

### When to use it

- **everyday_examples**: 
  - Sat-nav, phone and dash-camera mounts on a car windscreen, often with a locking lever (Wikipedia 'Suction cup')
  - Hooks, soap dishes and shelves stuck to bathroom tiles, a fridge door or a shower screen (Wikipedia 'Suction cup': attaching objects to a refrigerator door or a tile on a wall)
  - A toilet plunger and toy darts with rubber suction-cup tips (Wikipedia 'Suction cup')
  - Glass and tile lifters with one or two flip-lever cups (Wikimedia Commons 'One cup suction tile lifter')
- **when_to_use**: Use a suction cup when you need to fix something light to glass, glazed tile, a mirror, polished stone or smooth metal without drilling or leaving glue behind, for example in a rented home, on a car window or inside a fish tank; when you want to move it often; or when you need a handle to lift or position a smooth flat panel such as glass, a floor tile or a sheet of acrylic. Lever and pump cups suit short jobs that need a much stronger grip, such as carrying glass or holding a camera to a car for a video.
- **when_not_to_use**: Avoid suction cups on porous or textured surfaces (wood, concrete, cardboard, textured car dashboards, most painted walls): air leaks in and they fall off; use screws, a magnet on steel, or double-sided foam tape instead. Do not rely on a plain suction cup for anything that would hurt someone or break if it fell, for overhead loads, or to support a person (Wood's Powr-Grip safety advice); screw a bracket to the wall. Avoid them for heavy sideways loads, long stems or leverage that peels the rim, and for anything that must stay precisely in position. For a strong, lasting hold on steel use a magnet; for a powered pick-and-place machine use a vacuum gripper with a pump.
- **environment_limits**: Temperature and humidity swings can make a cup lose its grip: household cups are best stuck on above about 5 C and then work from about -30 C to 49 C (Adams Manufacturing). Industrial cup materials have long-term limits of about -15 to 50 C for PVC, -10 to 70 C for nitrile rubber (NBR) and -30 to 180 C for silicone (Schmalz). Natural rubber resists sunlight, abrasion and temperature extremes less well than PVC or neoprene (Adams Manufacturing), and nitrile and natural rubber have poor ozone resistance (Schmalz). Water, oil or dirt on the surface lowers friction, so cups slide sooner sideways (Pneumatic Tips; Wood's Powr-Grip), although a thin film of water or oil on the rim helps it seal (Wikipedia). All cups slowly lose their grip as air leaks in, faster on rougher surfaces (Tiwari and Persson), and hold a little less at high altitude (Pneumatic Tips). Clear cups in strong sun can focus light like a magnifying glass and scorch or fade what is behind them (Adams Manufacturing).
- **safety_notes**: A suction cup can let go suddenly with no warning: simple flip-lever lifting cups 'can pop off and drop a load without any warning' (Wood's Powr-Grip), so never carry glass or stone over your feet or other people with them. Do not use suction cups to support a person (e.g. as a grab handle) unless they are specifically designed for it (Wood's Powr-Grip safety advice). On pump cups, stop lifting if the red line on the plunger shows, because it means air has leaked in (Wood's Powr-Grip). Clear cups on a sunny window can focus sunlight and scorch what is behind them (Adams Manufacturing).
- **common_failures**: Falls off hours or days later because air leaks back in: the cause is usually dust, grease or scratches on the rim or surface, or a textured or porous surface; clean both with warm soapy water, add a trace of water, oil or petroleum jelly to the rim, and press it down again ('burp' it) now and then (Adams Manufacturing; Wikipedia; Tiwari and Persson). Peels off because the load hangs on a long stem or lever arm that tilts the cup and lifts its edge (US patent 6,648,285); keep the load close to the surface or use a lever or pump cup. Slides down a wall under a sideways load, especially when wet (Pneumatic Tips friction values). Stops working after months or years because the rubber has aged, hardened or cracked ⚑ [uncertain]; replace the cup. Leaves a sticky or dark ring on some surfaces because plasticiser migrates out of soft PVC (Tiwari and Persson). Printed TPU cups leak faster than moulded ones because the filament is too stiff to seal completely (Fredslund). *(⚑ parts need confirming)*
- **related**: 
  - Vacuum gripper (suction-cup end effector): the same cups kept at low pressure by a pump or ejector, used on robots; holds reliably but needs power and air
  - Magnet joint (embedded magnets, magnetic catch): also sticks without drilling, but only to steel or to another magnet, and does not leak away with time
  - Double-sided foam tape (acrylic foam pressure-sensitive adhesive): sticks to rougher surfaces and holds long-term, but is hard to remove and cannot be moved
  - Switchable permanent magnet (rotary magnetic base): a strong, lever-switched hold on steel with no power, the steel-surface equivalent of a lever suction cup
  - Hang-on mounts (keyhole slot, French cleat): the usual way to hang things from screws in a wall when drilling is allowed
  - Self-sealing suction cup (research gripper): a cup with a built-in valve that only sucks when it touches an object (Wikipedia 'Self-sealing suction cup')
  - Quick-release plate (camera plate, dovetail clamp): can be added to a suction-cup mount so the camera or phone comes off without unsticking the cup

### Pictures, videos and models

- **links**: 
  - [Suction cup pressure from collisions.svg (Wikimedia Commons, by Becarlson)](https://commons.wikimedia.org/wiki/File:Suction_cup_pressure_from_collisions.svg): Diagram of a suction cup on a surface with the air molecules outside pushing it on, and few inside, showing why the pressure difference holds it *(licence: CC BY-SA 3.0)*
  - [Suction-lifter-one-cup.jpg: one cup suction tile lifter (Wikimedia Commons, by Adamantios)](https://commons.wikimedia.org/wiki/File:Suction-lifter-one-cup.jpg): Photo of a hand tile lifter with a single lever-operated suction cup *(licence: GFDL 1.2 or later and CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 (multi-licensed))*
  - [How suction cups work (YouTube, Energy Vanguard / Allison Bailes)](https://www.youtube.com/watch?v=CEUs2aU0IqY): Video demonstration of two lever-handled suction cups stuck together; closing the handles enlarges the trapped space and lowers the pressure (explained in the accompanying article) *(licence: link only (standard YouTube licence))*
  - [How Do Suction Cups Work? (Energy Vanguard blog, Allison Bailes, 2023)](https://www.energyvanguard.com/blog/how-do-suction-cups-work/): Plain explanation of suction cups with Boyle's law and pressure difference, with the embedded video and a photo of the Magdeburg hemispheres *(licence: link only)*
  - [How They Work (Wood's Powr-Grip)](https://www.wpg.com/service/work): How a hand-pumped vacuum cup is attached, how the red-line low-vacuum indicator on the plunger works, and how it is released *(licence: link only)*
- **make_it_yourself**: 
  - [Suction Cup 2.0 - 100% Printed (Fredslund, Printables)](https://www.printables.com/model/73849-suction-cup-20-100-printed): A fully printed lever suction cup: TPU 85A or 98A cup with PETG lever, clips and housing, no screws; notes that it is very strong for a short time but slowly leaks. URL seen in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Suction Cup (Fredslund, Printables)](https://www.printables.com/model/70715-suction-cup): The earlier printed lever suction cup for lifting tiles and smooth objects: soft TPU cup, PETG lever, coupling and handle, one M3 and four M5 bolts. URL seen in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [printable tpu suction cup and hook (fitz08uk, Thingiverse)](https://www.thingiverse.com/thing:3195496): A TPU suction cup with a PLA hook, both printed at 100% infill *(licence: CC BY-NC-SA 4.0)*
  - [Suction Cup "Floating" Shelves for Bathroom, Kitchen, and more (The Odd Artisan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/721209-suction-cup-floating-shelves-for-bathroom-kitchen-): Printed shelves that hide bought 1 1/8 in mushroom-head suction cups inside them; includes a 'Suction Cup Attachment Point' STEP and Fusion 360 file to build your own mounts *(licence: Creative Commons Public Domain)*
  - [Suction Cup Hook (wuguigui, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/365697-suction-cup-hook): A swivelling hook with a printed M4 thread that screws onto a bought suction cup with an M4 stud; print at 0.1 mm layers *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: Three side views of a cup on glass: (1) pressed flat with arrows showing air pushed out past the rim; (2) springing back, with a small low-pressure pocket inside and big outside-air arrows pressing it on; (3) a lever version whose cam lifts the cup's centre to make the pocket bigger, plus a small inset showing a sideways load held by friction and a peeling load lifting the rim.
- **sources**: 
  - https://en.wikipedia.org/wiki/Suction_cup
  - https://en.wikipedia.org/wiki/Self-sealing_suction_cup
  - https://commons.wikimedia.org/wiki/File:Suction_cup_pressure_from_collisions.svg
  - https://commons.wikimedia.org/wiki/File:Suction-lifter-one-cup.jpg
  - https://www.schmalz.com/en-us/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/design-of-the-suction-cup
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/system-design-calculation-example/theoretical-holding-force-of-a-suction-cup
  - https://media.schmalz.com/MAM_Library/Dokumente/Auswahlhilfen/VA/272fbdc64cc1_Document_Selection_Guidelines_Material_Suction_Cup_EN_2025.pdf
  - https://www.pneumatictips.com/size-vacuum-cup/
  - https://www.wpg.com/suction-cup-lifters-how-they-work-and-how-to-choose-the-right-one
  - https://www.wpg.com/service/work
  - https://www.wpg.com/vacuum-lifter-safety-you-can-live-by
  - https://www.wpg.com/quality-suction-cups
  - https://suctioncups.com/pages/suction-cups-101
  - https://www.energyvanguard.com/blog/how-do-suction-cups-work/
  - https://www.youtube.com/watch?v=CEUs2aU0IqY
  - https://arxiv.org/abs/1905.09042
  - https://arxiv.org/pdf/1905.09042
  - https://patents.google.com/patent/US6648285B1/en
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/73849-suction-cup-20-100-printed
  - https://www.printables.com/model/70715-suction-cup
  - https://www.thingiverse.com/thing:3195496

### Finder tags

- **connects**: wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, processes, reuse_cycles

## 217 Taper fit (Morse taper)

*clamping, magnetic & friction connections.* A slightly tapered shaft pushed into a matching tapered hole that locks by friction and is knocked apart with a wedge, as in drill chucks

*Also covers:* Also covers the Luer taper and Luer lock (syringe and tubing fittings)

### What it is

- **plain_name**: A very slightly cone-shaped peg pushed or tapped into a matching cone-shaped hole, where it jams tight by friction, lines itself up exactly and stays put without screws, until you knock it out with a wedge or twist it off (drill chucks, lathe centres, syringe tips)
- **term**: Taper fit (self-holding taper; Morse taper, Luer taper)
- **aliases**: 
  - self-holding taper, self-locking taper (a shallow taper that stays in by friction; Wikipedia 'Machine taper')
  - machine taper, taper shank, taper socket
  - Morse taper (MT0-MT7 and MT4.5; German 'MK', Morsekegel), standardised as ISO 296 and DIN 228-1
  - Jacobs taper (JT, e.g. JT33: fits a drill chuck onto its arbor) and DIN 238 B-series tapers (B10, B12, B16, B18, B22, B24)
  - Brown & Sharpe taper and Jarno taper (other self-holding machine tapers)
  - self-releasing or steep taper (7:24 taper: NMTB, CAT, BT; also HSK): the opposite kind, held in by a drawbar (Wikipedia)
  - Luer taper, 6% taper: Luer slip (slip tip) and Luer lock (threaded collar); 'Luer-Lok' and 'Luer-slip' are trademarks associated with Becton Dickinson (brand); small-bore connector standard ISO 80369-7 (formerly ISO 594)
  - ground-glass joint, standard taper joint (ST 14/23, 19/26, 24/29, 24/40) for laboratory glassware
  - square taper (bicycle 'cotterless' crank-to-spindle joint)
  - taper pin (1:50 metric, 1:48 inch)
  - conical press fit, oil-injection taper fit (German 'Ölpressverband'; large industrial version released with pressurised oil)
- **family**: clamping, magnetic & friction connections
- **other_families**: locating & alignment, self-locking & anti-back-drive, seals & pass-throughs, quick-release & tool-free, hydraulics, pneumatics & vacuum
- **one_liner**: A shallow cone pressed into a matching cone-shaped socket, where the wedge action squeezes the surfaces so hard that friction holds it in, centres it exactly and (in syringe and lab-glass fittings) seals it, yet a knock with a wedge or a twist separates it again.
- **complexity**: A few parts: a male cone (taper shank, arbor, lathe centre, syringe tip, glass stopper) and a female cone-shaped socket (spindle, tailstock quill, adaptor sleeve, needle hub, glass neck). Often with extras: a flat tang on the end of a Morse shank for extra drive and for ejecting it, a wedge-shaped drift to knock it out, a drawbar screwed into the shank on milling machines, or a threaded collar on a Luer lock (Wikipedia 'Machine taper'; 'Luer taper').
- **how_it_works**: The cone and socket have the same very shallow angle (about 1.5 degrees per side for a Morse taper), so pushing the cone in acts like driving a long, thin wedge: a small push along the axis creates a very large squeezing force on the whole cone surface (Wikipedia 'Machine taper'). A wedge sticks when its angle is less than the angle whose tangent equals the friction coefficient (Wikipedia 'Wedge'), and these tapers are far shallower than that, so friction over the whole surface holds the part in and carries turning force without keys, while the matching cones centre it precisely both across and along the axis. The fit gets tighter the harder it is pushed, which is why a drill held this way needs end thrust to keep it seated, and why it is freed by a sharp knock with a wedge (drift) through a slot, by pushing from behind, or, for lab glass, by warming the outer part (Wikipedia 'Machine taper'; 'Ground glass joint'). In a Luer fitting the same close cone contact also seals liquid and gas, and the Luer-lock thread only stops the cones being pulled apart (Wikipedia 'Luer taper').

### Finder attributes

- **job**: 
  - join and hold: holds a drill, chuck, lathe centre, syringe needle or glass stopper firmly by friction
  - line parts up exactly: the cones centre the parts on one axis and set how far in they go, with very repeatable results (Wikipedia 'Machine taper')
  - seal it, or pass cables or fluid through: Luer fittings and greased ground-glass joints make leak-tight connections for liquids and gases (Wikipedia 'Luer taper'; 'Ground glass joint')
- **motion**: none: a fixed joint once seated
- **degrees_of_freedom**: 0 once seated: the cones stop sideways movement and tilting, the wedge fit stops it moving along the axis, and friction stops it turning (a Luer slip can still be twisted off by hand)
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a self-holding taper stays in by friction alone and actually grips harder when pushed along its axis (Wikipedia 'Machine taper')
  - self-aligning or self-centring: the cones pull the parts onto the same centre line and to the same depth every time (Wikipedia 'Machine taper'; German Wikipedia 'Pressfügen' notes good self-centring for press fits)
  - quick-release: tools change in seconds with a drift or by retracting a lathe tailstock quill; Luer fittings pull or twist off by hand (Wikipedia)
- **holding_principle**: 
  - friction or clamping (force-fit): the wedge action of the shallow cones creates the clamping pressure
  - shape (the parts interlock; form-fit): only as a backup, e.g. the flat tang on a Morse shank, the key and drawbar on milling tapers, or the thread of a Luer lock
- **input_output**: Mostly not applicable (it holds a tool or fitting). When a Morse-taper drill or chuck is driven through it, it acts as a rigid in-line coupling: rotation in -> the same rotation out, 1:1, with no backlash; torque is carried by friction and depends on end thrust, with the tang as a backup if it slips (Wikipedia 'Machine taper'; 'Drill bit shank').
- **power**: passive (no power needed)
- **removability**: removable: a Morse taper is knocked out with a drift through the slot in the socket, pushed out from behind, or ejected by retracting a lathe quill; a Luer fitting is pulled or twisted off by hand; a stuck glass joint can be freed with solvent, warmth on the outer part or special tools (Wikipedia 'Machine taper'; 'Ground glass joint').
- **reuse_cycles**: many times: machine tapers are changed thousands of times as long as the cones are kept clean and free of nicks ⚑ [uncertain]; plastic Luer fittings wear with the number of connection cycles (Wikipedia 'Luer taper') *(⚑ parts need confirming)*
- **tools_needed**: none to fit (push it in or give it a light tap); a drift (drift key) and hammer, or a lathe's own quill, to remove a Morse taper; a taper cleaning tool to clean the socket; Luer fittings and glass joints by hand (Wikipedia 'Machine taper'; Newman Tools)
- **seal**: Machine tapers: none (not used to seal). Luer and ground-glass joints: watertight to airtight or pressure, made by the close cone-on-cone contact; Luer fittings are tested for leakage under pressure, and ground-glass joints are sealed with a thin layer of grease or a PTFE sleeve (Wikipedia 'Luer taper'; 'Ground glass joint').
- **load**: Medium to heavy in steel: taper-shank drills and lathe centres are driven by friction alone, but only while there is enough push along the axis; high torque with little thrust (e.g. a big drill opening an existing hole) can make it slip and spin (Wikipedia 'Machine taper'). Strong in axial push (it only wedges tighter) and twist; weak against sideways loads, which can wobble it out, so milling cutters on tapers need a drawbar or thread (Wikipedia). Weak against a straight pull unless retained. Luer fittings: light loads, for syringes, needles and small tubes.
- **adjustable**: no: the fit and position are fixed by the cone angle and size
- **play_and_precision**: none: no play, and it relocates very repeatably on the same centre line and at the same depth, which is why lathe centres and tool holders use it (Wikipedia 'Machine taper'). It tolerates no angular error between cone and socket (rigid glass joints can crack if forced out of line; Wikipedia 'Ground glass joint'), and dirt, chips or nicks stop it seating accurately.
- **access_needed**: end of a tube or shaft: the cone goes into the end of a spindle, quill, sleeve, needle hub or glass neck; removing a Morse taper needs access to the drift slot or the back of the socket
- **materials**: Machine tapers: hardened steel shanks in steel or cast-iron spindles and sleeves. Bicycle square tapers: steel or alloy spindles in (often aluminium) crank arms (Wikipedia 'Bottom bracket'). Luer fittings: moulded plastics and metal hubs ⚑ [uncertain]; printed copies in PETG, PP or resin (Printables designers). Ground-glass joints: glass, usually greased or with a PTFE sleeve. Suits hard, stiff materials that keep their shape; soft plastics creep and let a taper loosen over time (DuPont on press fits in plastics). *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: using bought taper tools and Luer fittings is easy, but machining a true self-holding metal taper needs a lathe set to a precise angle (or a taper reamer), and printed Luer fittings often leak unless resin-printed or sealed (Printables and Thingiverse designers)

### Making it

- **processes**: 
  - off-the-shelf part: Morse taper arbors, sleeves, drills and centres, Luer connectors and caps, ground-glass fittings and taper pins are cheap and precise
  - CNC or manual lathe: tapers are turned and bored with the compound slide or a taper attachment, and sockets can be cleaned up with Morse taper reamers (Wikipedia mentions Morse taper reamers for repair) ⚑ [uncertain]
  - 3D print (resin): the most practical way to print working Luer tips and adaptors; SLA or SLS parts should be airtight where FDM parts may leak (wavexx; permanentbrownmark on Printables)
  - 3D print (FDM): Luer caps and adaptors for non-medical use, Morse-taper size gauges, taper-fit lids and holders; not for real machine-tool tapers (kaje; stonie422 on Printables) *(⚑ parts need confirming)*
- **print_in_place**: no: the cone and socket are separate parts that are pushed together
- **making_tips_3d_printing**: 1) Do not print a Morse taper to hold cutting tools in a machine: plastic is far too soft and creeps. Printed Morse tapers are useful as size gauges, holders and storage (kaje's 'MT (Morse Taper) Gauges' are 'not precision gauges' but identify the size; PETG, 0.2 mm layers, 3 perimeters) and one maker tested only an MT5-to-MT2 adapter sleeve, printed in ABS at 50% infill (Projunk). 2) Luer fittings: print in PETG or PP with a 0.4 mm nozzle and layers of 0.15 mm or less; print several copies at once so each small part has time to cool; expect FDM parts not to be airtight because liquid can seep between layers, and use SLA or SLS for airtight parts (wavexx, 'Luer Lock M/F Cap'). Another designer found resin 'probably the only acceptable option' for Luer dispensing tips (permanentbrownmark). 3) Model the Luer cone to the standard: 6% taper (3.44 degrees included, 1.72 degrees per side), male cone about 4.0 mm at the tip widening to about 4.45 mm over at most 7.5 mm; Luer-lock collar about 8 mm inside with a double-start thread of 2.5 mm pitch (University of Bremen MARUM 'Luer slip and Luer lock connector dimensions'), then tweak for your printer (dexter747 adjusted dimensions to fit three different syringes). 4) Check the thread direction against a real syringe: one popular printed Luer adaptor had to be remixed because its thread was mirrored (Finn's 'Luer Adapter - Fixed Threads'). 5) Small bores close up when printed: drill them out or open them with a hot needle, and seal a leaky print with a coat of clear nail polish (mrAkuaku and dexter747 on Thingiverse). 6) Printed tapered holes grip very hard even at tiny angles: in kaje's PLA tests an 8 mm peg in a hole with 0.3 mm ribs was very tight at 0.5 degree draft (one peg broke on removal), a good firm fit at 1 degree, and loose at 2 degrees ('Test Print - Crush Ribs - Version02'); AON3D suggests about 2 degrees of taper plus 0.2 mm crush ribs for a printed fit that can be taken apart and refitted. 7) Print cones and conical holes with their axis vertical so the cross-section comes out round and the layer steps on the shallow slope are tiny ⚑ [uncertain]. 8) Add a pull tab or a lip so taper-fit lids and plugs can be separated by hand (kaje's taper-fit box has tabs for this). 9) Plastic creeps and relaxes under constant squeeze, so a printed taper fit loosens over time and faster when warm (DuPont design guide on press fits); add a thread, clip or bayonet if it must not come apart. 10) Printed Luer parts are for hobby and lab use only, never medical, sterile or food use (stonie422). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Morse taper drill chuck arbors (e.g. MT2 to JT33 or MT2 to B16), Morse taper reducing sleeves (e.g. MT3 to MT2) and extension sockets, Morse taper shank drills and reamers, dead centres and live centres, drill drifts (drift keys) and automatic drifts, taper cleaning tools, Morse taper reamers (Wikipedia 'Machine taper'; 'Drill bit shank'; Newman Tools). Luer lock and Luer slip connectors (male, female, barb-to-Luer, gender changers), Luer caps, stopcocks, syringes and blunt dispensing needles. Ground-glass joint clips (Keck clips) and PTFE joint sleeves. Taper pins and taper-pin reamers (Wikipedia 'Taper pin'). Square-taper bottom brackets and a crank puller.
- **rules_of_thumb**: 
  - Morse taper: about 1:20 on diameter, roughly 52 mm per metre (5/8 in per foot), about 1.49 degrees per side (about 3 degrees included); sizes MT0 to MT7 plus MT4.5, and MT2 is the usual size in drill presses up to 13 mm capacity (Wikipedia 'Machine taper').
  - Self-holding machine tapers have an included angle of only about 2-3 degrees (Newman Tools); Jacobs tapers for drill chucks vary from 1.41 to 2.33 degrees per side; the Jarno taper is exactly 1:20 on diameter and Brown & Sharpe about 0.5 in per foot (Wikipedia 'Machine taper'; Newman Tools).
  - Steep 7:24 tapers (about 16.6 degrees included; NMTB, CAT, BT) do not hold by themselves and need a drawbar, but they release easily for quick tool changes (Wikipedia 'Machine taper').
  - A wedge binds (self-locks) when its angle is less than the arctangent of the friction coefficient between the surfaces (Wikipedia 'Wedge'); shallow tapers are far below this, steep ones are above it.
  - Self-holding tapers need mostly axial load to carry high torque; with side loads (milling) use a threaded end and drawbar (Wikipedia 'Machine taper').
  - Luer taper: 6% (the diameter changes by 6% of the cone's length), which is 3.44 degrees included, not 6 degrees (Wikipedia 'Luer taper'; University of Bremen MARUM). Luer slip and Luer lock parts fit each other, and a Luer lock is secure after about one full turn (University of Bremen MARUM).
  - Ground-glass joints use a 1:10 taper; common ISO sizes are 14/23, 19/26 and 24/29 (diameter/ground length in mm) and US sizes 14/20, 19/22 and 24/40 (Wikipedia 'Ground glass joint').
  - Taper pins: 1:50 on diameter for metric pins, 1:48 for inch pins (Wikipedia 'Taper pin'); bicycle square-taper cranks use a 2-degree taper in two incompatible sizes, JIS and ISO (Wikipedia 'Bottom bracket').
  - Tapered press fits need less force to assemble and separate more easily than straight ones, but are less reliable: once loosened they come free with very little axial movement (Wikipedia 'Interference fit', quoting Machinery's Handbook).

### When to use it

- **everyday_examples**: 
  - The chuck on a drill press, which sits on a Morse-taper arbor and is knocked off with a drift (Wikipedia 'Machine taper'; Newman Tools)
  - A syringe and needle joined by a Luer slip or Luer lock fitting (Wikipedia 'Luer taper')
  - A ground-glass stopper in a lab flask or bottle (Wikipedia 'Ground glass joint')
  - Bicycle cranks pressed onto the square-taper ends of the bottom-bracket spindle (Wikipedia 'Bottom bracket')
- **when_to_use**: Use a taper fit when a tool or part must be swapped often yet sit exactly on centre every time with no play: drill chucks, lathe centres and tool holders on metalworking machines. Use Luer fittings to join syringes, dispensing needles, small tubes, filters and stopcocks for glue, flux, lubricant, lab or hobby fluid work, and ground-glass joints for lab glassware. A taper is also good whenever the load pushes the parts together along the axis, because that only makes it grip harder.
- **when_not_to_use**: Avoid a plain self-holding taper where there are strong side loads or vibration (e.g. a milling cutter), where high torque comes with little end thrust, or where a pull could draw it out: add a drawbar, key or thread, or use a clamp hub, collet or keyless locking bush instead. Don't rely on a printed or soft-plastic taper to stay tight for long, because plastic creeps; add a thread, clip or bayonet. For fittings that must never come apart under pressure, use a Luer lock rather than a Luer slip, or a threaded or push-to-connect fitting. For guiding parts together without locking them, use a steeper self-centring cone that releases easily.
- **environment_limits**: Chips, dust, burrs and small dents on either cone stop it seating, so it will not locate accurately or hold reliably (Wikipedia 'Machine taper'). Very heavy axial loads, or long periods seated, can jam a narrow taper so it is hard to release; vibration (chatter) helps free it (Wikipedia 'Machine taper'). Ground-glass joints seize if the grease is missing or dissolved by solvents, and can be freed by warming the outer joint or cooling the inner one; polyacetal (POM) joint clips soften around 140 C and can crumble within minutes in corrosive vapours (Wikipedia 'Ground glass joint'). Plastic tapers and Luer fittings creep and loosen under constant squeeze, faster when warm (DuPont design guide on plastic press fits) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: If a Morse taper slips under heavy torque, the tang can snap and the tool spins in the socket, damaging it (Wikipedia 'Machine taper'). A chuck or drill knocked out with a drift drops free suddenly; hold it or put something soft underneath ⚑ [uncertain]. Morse-taper milling cutters must be held by a C-collar or drawbar because side loads can pull them out (Wikipedia 'Machine taper'). Luer fittings from different medical systems can look alike and be misconnected, and printed Luer parts must never be used for medical, sterile or food purposes (Wikipedia 'Luer taper'; stonie422 on Printables); needles are sharp. Forcing a misaligned or seized glass joint can crack the glass (Wikipedia 'Ground glass joint'). *(⚑ parts need confirming)*
- **common_failures**: Won't hold or runs off-centre because of dirt, chips or dents on the cones: wipe the shank and clean the socket with a taper cleaning tool, and keep tools from knocking each other (Wikipedia 'Machine taper'). Slips and spins under high torque with little thrust, scoring both cones and snapping the tang; avoid those cuts, keep the fit clean, and repair minor damage with a Morse taper reamer (Wikipedia 'Machine taper'). Jams so tight it won't come out after heavy loading or a long time; use the drift, let vibration help, or warm the outer part (Wikipedia 'Machine taper'; 'Ground glass joint'). Frozen glass joints when the grease is missing (Wikipedia 'Ground glass joint'). Luer slip tips pop off under pressure; use a Luer lock (Wikipedia 'Luer taper'). Printed Luer fittings that leak, don't lock or spin freely because FDM tolerances are too loose or tight and layers aren't airtight (mrAkuaku; wavexx). Mixed standards that almost fit but don't seat: different Morse sizes, Jacobs vs B-series, or JIS vs ISO square tapers (Wikipedia 'Machine taper'; 'Bottom bracket').
- **related**: 
  - Self-centring cone and socket (taper locator): a steeper cone used only to guide and centre parts as they come together; it does not lock
  - Collet (and keyless chuck): a slotted sleeve squeezed by a taper so it grips a round shaft; the taper does the clamping but the parts are released by unscrewing, not knocking
  - Keyless locking bush (taper-lock bush, shaft locking device): tapered rings pulled together by screws to clamp a hub on a plain shaft; adjustable and easy to release
  - Self-locking wedge (wedge clamp, taper key): the same friction-wedge idea in a flat wedge driven into a gap
  - Press fit (interference fit): a straight (cylindrical) fit held by squeeze alone; stronger and more reliable once in, but harder to separate and needs tighter sizes
  - Friction clutch (plate or cone clutch): cones pressed together so they can be engaged and slip on purpose
  - Hose barb (barbed tube fitting): a ridged cone that a soft tube is stretched over; grips the tube instead of a matching cone
  - Quick couplers for tubes and hoses (push-to-connect): latch tubes in place for fluid connections that must not pull apart
  - Bayonet mount (push-and-twist lock) and ordinary screw joint: ways to add positive retention, like the Luer lock's thread
  - Kinematic coupling (balls in V-grooves): exact repeatable location without friction locking

### Pictures, videos and models

- **links**: 
  - [Morse Taper No 2.jpg (Wikimedia Commons, by DerrickOswald)](https://commons.wikimedia.org/wiki/File:Morse_Taper_No_2.jpg): Photo of an MT2 Morse-taper shank with its flat tang *(licence: Public domain (released by the author for any purpose))*
  - [Morse taper.svg (Wikimedia Commons, by DerrickOswald, redrawn by Wizard191)](https://commons.wikimedia.org/wiki/File:Morse_taper.svg): Dimensioned drawing of a Morse-taper shank with tang (the key to Wikipedia's Morse-taper size table) *(licence: Public domain (released by the author for any purpose))*
  - [Lathe Tailstock Taper Ejection System.jpg (Wikimedia Commons, by Progress and Poverty)](https://commons.wikimedia.org/wiki/File:Lathe_Tailstock_Taper_Ejection_System.jpg): Photo of a lathe tailstock quill, a Morse-taper drill shank and the quill screw, showing how retracting the quill pushes the tang and ejects the drill *(licence: CC BY 4.0)*
  - [Syringe and hypodermic.jpg (Wikimedia Commons, by William Rafti of the William Rafti Institute)](https://commons.wikimedia.org/wiki/File:Syringe_and_hypodermic.jpg): A syringe with a male Luer-lock fitting beside a needle with a female Luer-lock hub *(licence: Attribution only (free use, including commercial, with credit to the copyright holder))*
  - [How To Use a Drift On a Drill Press (YouTube, Kep-Kraft Industries)](https://www.youtube.com/watch?v=K2yJgkuteQc): Video showing what a drift is and how it is used to remove a Morse-taper drill chuck from a drill press (per the video's description in search results) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [MT (Morse Taper) Gauges (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/285795-mt-morse-taper-gauges): Printable inner and outer gauges for identifying Morse taper sizes 0-7, made from Machinery's Handbook dimensions; PETG, with Onshape CAD *(licence: Creative Commons Public Domain)*
  - [Luer Lock M/F Cap (wavexx, Printables)](https://www.printables.com/model/144785-luer-lock-mf-cap): Double-ended male/female Luer-lock cap printable in FDM without supports, with notes on material (PETG or PP), layer height and why FDM parts may not be airtight. URL seen in search results; details read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Luer lock connectors (straight, gender-switching, slip, and cap) (chesamo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1407443-luer-lock-connectors-straight-gender-switching-sli): Parametric OpenSCAD file for male/female Luer-lock connectors, gender changers, slip tips and caps, with adjustable body length and twist grips *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Parametric Luer Lock Dispenser Tips for Syringe (SCAD) (permanentbrownmark, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/843170-parametric-luer-lock-dispenser-tips-for-syringe-sc): OpenSCAD generator for Luer-lock dispensing tips of any length, diameter and shape, with resin-printing versions *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Luer Slip Tip Parametric (Fusion) (stonie422, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1518411-luer-slip-tip-parametric-fusion): Parametric Fusion 360 Luer slip tip with 1-1.5 mm outlets; printed in PLA at 0.2 mm; for non-medical hobby use only *(licence: Creative Commons Public Domain)*
  - [Luer slip and Luer lock connector dimensions (University of Bremen, MARUM Marine Geochemistry)](https://www.sedgeochem.uni-bremen.de/luer%20connector.html): Dimension notes and drawings for male Luer cones and Luer-lock collars and threads, useful for modelling your own fittings *(licence: link only)*
- **diagram_idea**: Cut-away of a drill-press spindle: a Morse-taper shank sitting in its cone-shaped socket with arrows showing a small push along the axis turning into large squeezing forces all round the cone, the tang poking into the cross slot, and a wedge-shaped drift being tapped in to push the tang and pop the shank out; beside it, a small inset of a syringe tip in a needle hub labelled '6% Luer taper'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Machine_taper
  - https://en.wikipedia.org/wiki/Drill_bit_shank
  - https://en.wikipedia.org/wiki/Luer_taper
  - https://en.wikipedia.org/wiki/Ground_glass_joint
  - https://en.wikipedia.org/wiki/Wedge
  - https://en.wikipedia.org/wiki/Taper_pin
  - https://en.wikipedia.org/wiki/Bottom_bracket
  - https://en.wikipedia.org/wiki/Interference_fit
  - https://de.wikipedia.org/wiki/Pressf%C3%BCgen
  - https://www.newmantools.com/tech/taper.htm
  - https://www.sedgeochem.uni-bremen.de/luer%20connector.html
  - https://commons.wikimedia.org/wiki/File:Morse_Taper_No_2.jpg
  - https://commons.wikimedia.org/wiki/File:Morse_taper.svg
  - https://commons.wikimedia.org/wiki/File:Lathe_Tailstock_Taper_Ejection_System.jpg
  - https://commons.wikimedia.org/wiki/File:Syringe_and_hypodermic.jpg
  - https://www.youtube.com/watch?v=K2yJgkuteQc
  - https://www.aon3d.com/applications/engineering-fits-how-to-design-for-3d-printed-assemblies/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/144785-luer-lock-mf-cap
  - https://www.thingiverse.com/thing:3712257
  - https://www.thingiverse.com/thing:1161394

### Finder tags

- **connects**: shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, materials, processes, reuse_cycles, safety_notes

## 218 Press fit (interference fit)

*clamping, magnetic & friction connections.* A part pushed into a hole that is slightly too small for it, so it is held by the squeeze alone (bearings, pins, printed parts)

### What it is

- **plain_name**: A pin, shaft, bearing or peg pushed into a hole that is a tiny bit too small for it, so the squeezed material grips it tightly with no glue, screws or clips
- **term**: Press fit (interference fit)
- **aliases**: 
  - interference fit
  - force fit, friction fit, drive fit (Wikipedia 'Interference fit')
  - push fit (a lighter fit that goes together by hand; Formlabs)
  - shrink fit (the outer part is heated so it grows, slipped on, and grips as it cools), expansion fit or cold fit (the inner part is cooled instead)
  - hydraulic dilation / oil-injection press fit (oil pumped between the parts to assemble or release them)
  - ISO fit codes H7/p6 (press fit), H7/s6 (driving fit), H7/u6 (forced or shrink fit) (Wikipedia 'Engineering fit')
  - pressed-in (press-in) bearing, bushing or dowel pin
  - German 'Pressverband' / 'Pressfügen'
- **family**: clamping, magnetic & friction connections
- **other_families**: print-in-place & 3D-printing joints, locating & alignment
- **one_liner**: The inner part is made slightly bigger than the hole and forced (or heat-shrunk) into it, so both materials spring back against each other and friction holds them together, centred and with no play.
- **complexity**: Single joint of two parts: the inner part (pin, shaft, bearing, bushing, magnet, dowel) and the outer part with the hole (hub, housing, wheel, printed or wooden part); nothing else, apart from the press, vice, mallet, heat or cold used to assemble it.
- **how_it_works**: The inner part is made a little larger than the hole. Forcing it in stretches the hole slightly and squeezes the inner part slightly; both materials act like very stiff springs, so they keep pressing on each other, and that contact pressure times the friction coefficient over the contact area resists sliding and turning (Wikipedia 'Interference fit'; Slocum, FUNdaMENTALs of Design, Topic 5). Metal parts need only a few hundredths of a millimetre of oversize (an ISO H7/p6 fit on 50 mm gives 0.001-0.042 mm; Wikipedia 'Engineering fit'), while plastics need more because they are much less stiff (DuPont design guide). Instead of force, the outer part can be heated or the inner part cooled so they slide together and grip as the temperatures even out (a shrink fit); this keeps the surface roughness intact and gives a stronger joint than pressing, which scrapes the surfaces smoother (Wikipedia 'Interference fit'; German Wikipedia 'Pressfügen').

### Finder attributes

- **job**: 
  - join and hold: fixes a bearing, bushing, pin, shaft, gear, wheel, magnet or dowel in a hole with nothing else
  - line parts up exactly: dowel pins and pressed-in bearing seats locate parts precisely with no play
- **motion**: none: a fixed joint
- **degrees_of_freedom**: 0: the parts cannot move relative to each other unless the friction is overcome
- **special_behaviour**: 
  - self-aligning or self-centring: a round press fit centres the parts on each other with no play (German Wikipedia 'Pressfügen')
  - none of the others: an overloaded press fit will slip, but it is not a dependable torque limiter; Slocum asks students whether it is safe to rely on one as a clutch, and a university robot-design guide notes plastic press fits slip unless the torque is very low (University of Florida EML2322L)
- **holding_principle**: friction or clamping (force-fit): the elastic squeeze of the oversized part creates the pressure, and friction holds it
- **input_output**: not applicable (when it fixes a gear or wheel to a shaft it simply passes the turning force on 1:1; see shaft-to-hub joints)
- **power**: passive (no power needed)
- **removability**: semi-permanent: it can be pressed or pulled out with a press or puller, but the surfaces are smoothed and grip less the next time (German Wikipedia 'Pressfügen'), and plastic or brittle parts may crack; heavy shrink and force fits are effectively permanent (Wikipedia 'Engineering fit': H7/u6 'cannot be disassembled without risking destruction').
- **reuse_cycles**: a few times: each re-pressing wears the surfaces and lowers the holding force (German Wikipedia 'Pressfügen'); crushable printed ribs lose grip after the first assembly (AON3D)
- **tools_needed**: a press: arbor press, hydraulic press, bench vice, or a bolt with washers as a drawbolt; a soft mallet for light fits; an oven, heat gun or induction heater for shrink fits, or a freezer for cooling the inner part; a puller to take it apart (Wikipedia 'Interference fit'; Hackaday)
- **seal**: none: it is not a designed seal; use an O-ring, gasket or glue where it must keep out water or hold pressure
- **load**: Metal: medium to heavy. A well-made interference fit gives the best torque transmission of the usual ways of fixing a part to a shaft (Slocum) and copes with shock and alternating loads (German Wikipedia 'Pressfügen'). Plastic and 3D prints: light to medium; they slip unless the torque is very low (University of Florida EML2322L) and loosen over time as the plastic creeps (DuPont). Strong in twist and along the axis up to the friction limit; weak if the outer part is thin or brittle, which can split.
- **adjustable**: no: once pressed, position and grip are fixed (Slocum: 'there is no means for adjustment')
- **play_and_precision**: none: no play at all, and it centres the parts accurately; but it needs very accurate sizes (in metal, a few hundredths of a millimetre decide between loose and cracked; Slocum) and tolerates no misalignment while pressing, so parts must start straight on a chamfer (Wikipedia 'Interference fit').
- **access_needed**: one side only (blind) to press a part into a blind hole, though the other part must be supported behind while pressing; removing a part from a blind hole needs a special puller ⚑ [uncertain] *(⚑ parts need confirming)*
- **materials**: Metals: steel, aluminium, brass and bronze (bushings), cast iron (Wikipedia 'Engineering fit' notes H7/s6 is the tightest possible with cast iron). Plastics: acetal (POM) and nylon hubs are covered by DuPont's interference limits; 3D prints in PLA, PETG, ABS/ASA, nylon and TPU (Creative3DP; Kragujevac PET-G study). Wood: dowels in wood joints (Wikipedia 'Dowel'). Brittle materials (acrylic, standard resin, glass, ceramics) crack easily, since materials 'have to have significant ductility else they will crack when forced together' (Slocum).
- **maker_difficulty**: moderate: simple to design, but the size difference is tiny, so printed parts need a quick test print to tune the hole, and metal parts need a reamed hole and a press

### Making it

- **processes**: 
  - 3D print (FDM): the commonest maker use, e.g. ball bearings, magnets, pins and bushings pressed into printed parts (AON3D; Creative3DP; Kragujevac PET-G study)
  - 3D print (resin): possible for tight fits, but standard resins are brittle, so keep the interference small or use a clearance fit with glue ⚑ [uncertain]
  - CNC and lathe work: reamed or bored holes and turned shafts to ISO fit tolerances (Wikipedia 'Engineering fit')
  - woodwork: dowels pressed or tapped into drilled holes, usually with glue (Wikipedia 'Dowel')
  - off-the-shelf part: dowel pins, bushings, bearings and press-fit inserts made to standard press-fit sizes *(⚑ parts need confirming)*
- **print_in_place**: no: the part is pushed into the printed hole after printing (to trap a part during printing instead, see mid-print embedding)
- **making_tips_3d_printing**: 1) Always test first: printers and filaments differ, so print a small test coupon or gauge with a range of hole sizes and keep the numbers that work for that printer and material (Creative3DP; Hackaday 'Finding perfect part fits with the Goldilocks approach'; test models such as DrKriegerAUS's 'Simple Press Fit & Clearance Test', which steps from -0.2 mm interference to +0.55 mm clearance in 0.05 mm steps). 2) Printed holes usually come out 0.1-0.3 mm undersize and printed pins about 0.1 mm oversize (Creative3DP); in OpenSCAD, circles are polygons drawn inside the stated diameter, so holes print smaller still unless you raise $fn (Hackaday readers' comments). 3) Starting point for rigid filaments (PLA, PETG, ABS) and parts 5-25 mm across: about 0.1 mm of interference on diameter in the finished parts; TPU needs about twice as much (Creative3DP, community guidance). 4) Expect real force: PET-G bearing seats printed 0.2 mm undersize for 13 mm and 26 mm bearings needed up to about 583 N and 588 N (roughly 60 kg) to press in (Petrović et al., MVM 2024), so use a vice or arbor press, not a hammer. 5) Plain round holes can only stretch around their circumference, so tight round fits crack or split along layer lines; use a hexagonal or square hole or shaft, a few 0.2 mm crush ribs, or thin slots that let the wall flex (AON3D). Hex shafts also hide the Z-seam in a corner (AON3D). 6) Print holes with their axis vertical for the roundest result; horizontal holes sag at the top, more so as they get larger (Hackaday readers' comments) ⚑ [uncertain]. 7) Add a lead-in chamfer (e.g. 0.5 mm x 45 degrees) so the part starts straight and spreads the force (Creative3DP; Wikipedia 'Interference fit'). 8) Put the precision on the pin or shaft: outside sizes print more accurately and can be measured and sanded, while the inside of a small hole can't (Creative3DP). 9) Give the housing enough wall and perimeters around the seat so it doesn't split ⚑ [uncertain]. 10) Plastic creeps and relaxes, so a printed press fit slowly loosens, faster when warm; for lasting joints add a shoulder, a groove and snap ring, a drop of glue, or use a knurled or grooved metal pin so the plastic flows into the grooves (DuPont; Creative3DP). 11) PLA softens from about 60 C, PETG from about 80 C and ASA from about 110 C (CNC Kitchen oven test), so press-fitted parts in PLA can shift in a hot car. 12) In resin (SLA) prints, Formlabs distinguishes push, force and press fits by how much force they need; a press fit needs an arbor press or similar (Formlabs 'Understanding 3D printing tolerances for engineering fits'). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Dowel pins (hardened and ground), grooved pins and knurled pins, spring pins (roll pins, slotted spring pins), oil-impregnated sintered bronze bushings and flanged bushings, deep-groove ball bearings such as 608 (8 x 22 x 7 mm) and 623, press-fit threaded inserts and knurled inserts; tools: arbor press, bearing driver set, bearing puller, induction or oven heating for shrink fits (Wikipedia 'Interference fit'; Hackaday).
- **rules_of_thumb**: 
  - ISO fits (hole/shaft): H7/p6 press fit, light interference, assembled or taken apart by cold pressing (hubs, bearings, bushings); H7/s6 driving fit, medium interference, hot pressing or large cold-pressing force (permanent gears, shafts, bushes); H7/u6 forced (shrink) fit needing a large temperature difference, not removable without risk of damage. Example: H7/p6 on a 50 mm diameter gives 0.001-0.042 mm interference (Wikipedia 'Engineering fit').
  - Classic workshop rule for metal force fits: interference of 0.001-0.0025 in per inch of diameter (0.1-0.25%), about 0.0015 in (0.15%) as a fair average, with less per inch on larger diameters (Wikipedia 'Interference fit', quoting Machinery's Handbook).
  - A typical interference is 0.001 in per inch of diameter in a relatively soft metal like aluminium; less for steel, more for plastics (University of Florida EML2322L 'Mechanical Power Transmission').
  - Chamfer the edges of both shaft and hole so the press starts straight and the force builds gradually (Wikipedia 'Interference fit').
  - Plastic press fits: calculate the maximum allowable interference from the plastic's yield strength and stiffness, then reduce it by a safety factor of 1.5-2; knurl or groove the metal part to keep the grip as the plastic relaxes, and test at the working temperatures (DuPont 'General Design Principles for Engineering Polymers', Module I, pp. 68-72).
  - It only takes a little interference to make a strong joint, but only a little tolerance error to make it fail; the materials must be ductile or they crack (Slocum, FUNdaMENTALs of Design, Topic 5, 'Shafts: Interference-Fits').
  - FDM: a transition fit is the tightest fit a desktop printer achieves reliably; for tighter fits use hex or square shapes, 0.2 mm crush ribs or flexing relief slots instead of a smaller round hole (AON3D 'Engineering fits').
  - PET-G bearing seats: 0.1 and 0.2 mm undersize seats were tested for 13 mm and 26 mm bearings; the 0.2 mm undersize seats needed up to 583 N and 588 N to press in (Petrović et al., 'Determining 3D printed housing diameters for press-fitting standard ball bearings', MVM 2024).
  - Shrink-fitting a steel tool holder: heat it to about 250-300 C, drop the tool in, and it grips as it cools (Hackaday 'Simple induction heater helps with homebrew shrink fitting').
  - Pressed (longitudinal) fits should have a surface roughness of about Rz 3-10 micrometres and a generous chamfer; re-pressing lowers the torque they can carry (German Wikipedia 'Pressfügen', an article flagged as lacking citations) ⚑ [uncertain]. *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Railway wheels pressed or shrunk onto their axles (Wikipedia 'Interference fit')
  - Ball bearings and bushings pressed into housings, including in 3D-printed machine and robot parts (Wikipedia 'Interference fit'; Petrović et al.)
  - Wooden dowels tapped into holes in furniture (Wikipedia 'Dowel')
  - A robot or toy wheel pressed onto its hub (University of Florida EML2322L)
- **when_to_use**: Use a press fit to fix a bearing, bushing, dowel pin, magnet or peg in a hole permanently, compactly and without play, where there is no room for screws or clips and you won't need to take it apart often. In metal it is one of the strongest and most reliable ways to fix a gear or hub to a shaft, and it suits shock and alternating loads. In 3D prints it is quick and cheap for bearings, pins and magnets, as long as you test the hole size on your own printer.
- **when_not_to_use**: Avoid a press fit for parts you will take apart often (use screws, a snap fit, a taper fit or a keyless locking bush), for passing real torque through plastic (use a hex shaft, key, D-flat or clamp hub; University of Florida EML2322L), for files other people will print on different printers (use crush ribs or springy features, or a tolerance ring), for brittle materials such as acrylic, resin or glass (use a clearance fit with glue or a springy feature), and for plastic parts in hot places or under constant load, where creep loosens them. Don't press parts onto motor shafts or precision parts without supporting them, since the force can damage them (University of Florida EML2322L).
- **environment_limits**: Plastic press fits creep and stress-relax, so they loosen with time, faster when warm (DuPont). Different materials expand differently with heat, so a metal pin in a plastic hub gets looser or more stressed as the temperature changes (DuPont; Slocum also lists differential thermal expansion and high-speed rotation as loads that change the fit). PLA begins to soften at about 60 C, PETG at about 80 C and ASA at about 110 C (CNC Kitchen), so printed press fits can shift in a hot car or near a motor. Stress concentration and fretting (tiny rubbing movements) at the edge of the fit reduce the strength of loaded metal press fits (German Wikipedia 'Pressfügen').
- **safety_notes**: Pressing can crack the outer part suddenly and send fragments flying, especially brittle plastics, resin and acrylic; press slowly and wear eye protection ⚑ [uncertain]. Long shafts can buckle sideways while being pressed (Slocum). Shrink fitting uses parts heated to about 250-300 C (Hackaday), and cold-fitting uses a freezer or very cold substances, so wear gloves against burns and frostbite ⚑ [uncertain]. Arbor presses and hydraulic presses can crush fingers. Pressing a part onto a motor or other precision component without support can damage it (University of Florida EML2322L). *(⚑ parts need confirming)*
- **common_failures**: Too tight: the hub or printed part splits, often along a layer line, or the part jams halfway (AON3D; Slocum). Too loose: the part slips or falls out; in plastic it slips under torque (University of Florida EML2322L). Loosens over weeks or months as the plastic creeps, faster when warm (DuPont). Grips less each time it is pressed in again because the surfaces are smoothed (German Wikipedia 'Pressfügen'). Enters crooked and shaves material or jams: add a chamfer and press straight (Wikipedia 'Interference fit'). Shaft buckles while pressing (Slocum). A wooden dowel in a blind hole splits the wood because trapped air and glue can't escape; plane a flat or cut a groove on the dowel (Wikipedia 'Dowel'). A pressed-in ball bearing may feel tight or rough if the housing squeezes its outer ring too much ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Crush ribs and spring-fit features (compliant press fit): a few small ribs or flexing arms do the gripping, so the fit tolerates printer and material variation
  - Tolerance ring (wavy-band press fit): a bought wavy spring-steel band between shaft and hole that grips over a wide range of sizes and can slip at a set torque
  - Taper fit (Morse taper): a cone-shaped version that centres itself and comes apart with a knock, but comes loose completely once it moves
  - Keyless locking bush (taper-lock bush, shaft locking device): clamps a hub on a shaft with screws and tapered rings; adjustable and releasable
  - Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub): positive or clamped ways to fix a hub that are easier to undo
  - Press-fit and expanding inserts (tap-in insert) and heat-set threaded inserts: metal threads fixed into plastic by pressing or melting
  - Mid-print embedding (captive nuts, magnets and bearings): traps the part inside the print instead of pressing it into a hole
  - Dowel and biscuit joints: the woodworking version, usually with glue
  - Annular snap fit: a ring-shaped bump that clicks into a groove, so it holds by shape rather than by squeeze
  - Drive-in fixing pins: a dowel, grooved, knurled or spring pin tapped into a hole drilled through the parts; a spring (roll or coiled) pin grips by its own springiness, so it accepts looser hole sizes than a solid pin pressed in

### Pictures, videos and models

- **links**: 
  - [Engineering Fits: How to Design for 3D Printed Assemblies (AON3D)](https://www.aon3d.com/applications/engineering-fits-how-to-design-for-3d-printed-assemblies/): Illustrated guide to clearance, transition and interference fits for FDM, with pictures of round holes stretching versus hexagonal shafts, crush ribs, relief slots and grip fins *(licence: link only)*
  - [EML2322L Mechanical Power Transmission (University of Florida design lab handout)](https://web.mae.ufl.edu/designlab/Lab%20Assignments/EML2322L-Mechanical%20Power%20Transmission.pdf): Exploded view of a motor, hub and wheel where the wheel is pressed onto the hub, and an illustration of a press (interference) fit, with pros and cons *(licence: link only)*
  - [Simple Induction Heater Helps With Homebrew Shrink-Fitting (Hackaday, 2020)](https://hackaday.com/2020/10/26/simple-induction-heater-helps-with-homebrew-shrink-fitting/): Article with an embedded video of a home-built induction heater expanding a tool holder so a cutter drops in and is gripped by a shrink fit *(licence: link only)*
  - [DIY Tool Shrinking for less than 100€? (YouTube, Roetz 4.0)](https://www.youtube.com/watch?v=rb9rXfSn1Ak): Video of shrink-fitting milling tools into a heated holder (embedded in the Hackaday article) *(licence: link only (standard YouTube licence))*
  - [Determining 3D printed housing diameters for press-fitting standard ball bearings (Petrović et al., MVM 2024, University of Kragujevac)](https://scidar.kg.ac.rs/bitstream/123456789/21632/1/Determining%203D%20Printed%20Housing%20Diameters%20For%20Press-Fitting%20Standard%20Ball%20Bearings.pdf): Short paper with force-displacement graphs for pressing 13 mm and 26 mm ball bearings into PET-G printed seats of different sizes *(licence: link only)*
- **make_it_yourself**: 
  - [Simple Press Fit & Clearance Test (DrKriegerAUS, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/547983-simple-press-fit-clearance-test): Two tiny blocks giving 16 combinations from -0.2 mm (interference) to +0.55 mm (clearance) in 0.05 mm steps; prints in under 10 minutes *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Press/Tight/Loose-Fit Offset Gauge (0.05 mm increment) / Tolerance test (CheruTijntje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/484641-presstightloose-fit-offset-gauge-005-mm-increment): A gauge of pins and windows in 0.05 mm steps for finding press, tight and loose fit offsets for a printer and filament *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [608 bearing tolerance tester (Handy Maker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1293573-608-bearing-tolerance-tester): Test prints for the outer and inner diameter of a 608 bearing in 0.1 mm steps; print the 0 model first, then the + or - versions *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Snap Fit Test / Press Fit Test (Wilko, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/9185-snap-fit-test-press-fit-test): A base test piece for finding the clearance or interference your printer, material and settings need for press, sliding and snap fits *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: Before-and-after cross-section: a pin drawn slightly fatter than its hole with the overlap shaded red, then the pin pressed in with the hole wall bulging outward and arrows showing the squeeze pressing inward all round; a small inset shows a chamfer guiding the pin in, and another shows a heated hub slipping over a cold shaft (shrink fit).
- **sources**: 
  - https://en.wikipedia.org/wiki/Interference_fit
  - https://en.wikipedia.org/wiki/Engineering_fit
  - https://en.wikipedia.org/wiki/Dowel
  - https://de.wikipedia.org/wiki/Pressf%C3%BCgen
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://web.mae.ufl.edu/designlab/Lab%20Assignments/EML2322L-Mechanical%20Power%20Transmission.pdf
  - https://www.aon3d.com/applications/engineering-fits-how-to-design-for-3d-printed-assemblies/
  - https://tools.creative3dp.com/blog/press-fit-tolerances-3d-printing/
  - https://formlabs.com/global/blog/3D-printing-tolerances-for-engineering-fit/
  - https://scidar.kg.ac.rs/bitstream/123456789/21632/1/Determining%203D%20Printed%20Housing%20Diameters%20For%20Press-Fitting%20Standard%20Ball%20Bearings.pdf
  - https://hackaday.com/2020/06/09/finding-perfect-part-fits-with-the-goldilocks-approach-and-openscad/
  - https://hackaday.com/2020/10/26/simple-induction-heater-helps-with-homebrew-shrink-fitting/
  - https://www.youtube.com/watch?v=rb9rXfSn1Ak
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: 3D-printed part, shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: heat gun, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** access_needed, common_failures, making_tips_3d_printing, processes, rules_of_thumb, safety_notes

## 219 Collet (and keyless chuck)

*clamping, magnetic & friction connections.* A slotted sleeve squeezed by a nut or taper so it closes evenly around a round shaft or tool, gripping it centred

### What it is

- **plain_name**: A split sleeve that slides over a drill bit or rod; tightening a nut pushes it into a cone so its springy fingers close evenly all round and grip the rod dead-centre. The hand-twisted three-jaw chuck on a cordless drill is its everyday cousin
- **term**: Collet (collet chuck); close relative covered here: keyless drill chuck (a self-centring three-jaw chuck tightened by hand)
- **aliases**: 
  - collet chuck; spring collet; split collet
  - ER collet: the most widely used standard (DIN 6499 / ISO 15488), sizes ER 8 to ER 50, first made by REGO-FIX (brand)
  - 5C, R8, 2J, 3J, 16C and DIN 6343 dead-length collets (machine-tool collet systems named in Wikipedia 'Collet')
  - watchmaker collets ('split wire chucks'), sized by their outer thread, e.g. 8 mm
  - router collet; rotary-tool collet, e.g. Dremel (brand) 480-483 collets with the 4485 collet nut
  - draw-in collet versus dead-length (non-draw-in) collet
  - emergency collet / soft collet (bought unhardened and machined to an odd size); step collet; expanding collet (grips the inside of a bore, like an expanding mandrel; see 'Expanding internal grip')
  - pin chuck / pin vise: a tiny collet holder for drills under about 1 mm
  - multi-size collet, e.g. Rubber-Flex (brand, Jacobs): steel blades held in rubber
  - Autolock collet / Clarkson chuck (self-tightening collet for threaded-shank cutters)
  - valve collet (split collet, valve keeper): the two tapered half-rings that hold an engine valve spring retainer
  - keyless chuck, keyless drill chuck, hand-tightened chuck, ratcheting keyless chuck
  - Jacobs chuck (brand; often used loosely for any drill chuck); Super Chuck (brand)
- **family**: clamping, magnetic & friction connections
- **other_families**: locating & alignment, quick-release & tool-free, clutches & couplings
- **one_liner**: A slotted sleeve with a cone-shaped outside that a nut or pull-rod forces into a matching cone, so it squeezes evenly around a round tool shank or rod and holds it tight and accurately centred; a keyless chuck does the same job with three jaws that you tighten by hand.
- **complexity**: A few parts: the collet itself (a sleeve slit along its length into springy fingers; an ER collet has 16 slits, REGO-FIX), a body or spindle with a cone-shaped socket, and a threaded nut (cap) or a pull-rod (drawbar). The keyless chuck is a small assembly that acts as one unit: body, three jaws sliding in angled holes, a threaded nut, an outer sleeve you twist, and in most modern chucks a ratchet ring that clicks (Jacobs patent GB2426944A).
- **how_it_works**: The collet is a sleeve cut into fingers, with a cone (taper) on the outside. Tightening the nut pushes the collet into a matching cone (or a drawbar pulls it in), and the slope turns that push along the axis into an even squeeze inward from all sides, so the fingers close onto the rod and hold it by friction, centred on the axis (Wikipedia 'Collet'). The screw thread and the slope multiply force one after the other, so a modest turn of the spanner gives a very large grip (Wikipedia 'Collet'); undo the nut and the springy fingers open again. A keyless chuck works on a similar sloping principle: twisting the outer sleeve turns a nut inside that drives three threaded jaws along angled holes, so they move forward and inward together onto the shank, and a ratchet clicks to stop it working loose (Jacobs patent GB2426944A; Pro Tool Reviews).

### Finder attributes

- **job**: 
  - join and hold: grips a tool bit, rod, pin, tube or shaft so it stays put or turns with the holder (Wikipedia 'Collet')
  - line parts up exactly: centres the rod on the axis; a standard ER collet runs true to within 10 µm (REGO-FIX)
  - lock, and release by hand: a keyless chuck, and printed collets with knurled nuts, are tightened and released by hand (Wikipedia 'Chuck (engineering)'; QuadeHale's Collet Drill Stop)
- **motion**: none: once tightened nothing moves. Before tightening, the rod can slide in and out and turn to any angle, which is how its depth is set
- **degrees_of_freedom**: 0 when tightened. Wikipedia explains that the taper itself fixes 4 of the 6 (two sideways positions and two tilt angles); friction then stops the rod sliding along the axis and turning. An internal stop can also fix the depth, and square or hex collets stop turning by shape. While loose: 2 (slide in and out, and turn).
- **special_behaviour**: 
  - self-aligning or self-centring: the even squeeze from all sides centres the rod on the axis. Wikipedia's comparison table rates collets as reliably self-centring, with run-out (wobble) usually below 0.001 in (0.025 mm); REGO-FIX guarantees 10 µm on standard ER collets and 5 µm on its ultra-precision (ER-UP) collets. A keyless chuck's three jaws also self-centre, but less precisely
  - quick-release: a keyless chuck opens and closes by hand, with no key or spanner (Wikipedia 'Chuck (engineering)'; Dremel sells its 4486 keyless chuck for 'tool-free accessory changes'). Collet nuts usually need a spanner, though printed collet nuts can be knurled for hand use (QuadeHale)
  - none of the other listed behaviours. Note that some types tighten themselves further under load: Autolock (Clarkson) collets are tightened by the cutter's own turning force (Wikipedia 'Collet'), and a keyless chuck 'can cause the chuck to tighten too much when high torque is applied' (Wikipedia 'Chuck (engineering)'), which can make it hard to undo
- **holding_principle**: 
  - friction or clamping (force-fit): the cone turns the nut's push into an even inward squeeze, and static friction carries the load (Wikipedia 'Chuck (engineering)')
  - spring force (a springy part presses it in place): the springy fingers of a spring-steel collet open again when the nut is released (Wikipedia 'Collet'); the spring helps release rather than hold
  - shape (the parts interlock; form-fit): only in special cases, e.g. square and hex collets, Autolock collets that screw onto a threaded shank, and engine valve collets whose inner rib sits in a groove in the valve stem (Wikipedia 'Collet')
- **input_output**: Not a motion converter. When it holds a spinning tool it passes rotation straight through: rotation in -> the same rotation out (1:1), on one axis (in line), with no play until it slips, so practically no power is lost ⚑ [uncertain: no efficiency figure published]. Back-drivable: yes; torque passes either way. *(⚑ parts need confirming)*
- **power**: passive (no power needed). Machine collet closers on CNC lathes can be powered (electric, hydraulic or air), but the collet itself needs no power (Wikipedia 'Chuck (engineering)')
- **removability**: removable: undo the nut (or twist the keyless chuck open) and pull the rod out. ER collets clip into their nut and are taken out by pressing on the collet's face while pushing its back sideways (REGO-FIX); keyless chucks are tool-free quick release
- **reuse_cycles**: many times: collets are made to be tightened and released at every tool change; replace one when it is damaged or no longer grips a correctly sized, clean shank (ToolsToday). 3D-printed plastic collets are weaker: Brandano broke one taking it apart
- **tools_needed**: Collet: one or two spanners (a hex spanner for router and rotary-tool collet nuts, a hook or ring spanner for ER nuts), ideally a torque wrench for ER nuts (REGO-FIX); no tools for hand-knurled printed nuts (QuadeHale). Keyless chuck: none, hand only (Wikipedia 'Chuck (engineering)').
- **seal**: none: it is not a seal
- **load**: Medium to heavy for its size, and strong against twisting and pulling as long as the rod fills the collet properly: Wikipedia's comparison rates collets as reliably strong and reliably resistant to being jarred loose, provided the rod closely matches the collet's size. ER nuts are tightened hard to give this grip (e.g. 24 N·m for an ER 11 collet holding 3-7 mm, 136 N·m for ER 32, REGO-FIX) ⚑ [uncertain: none of the sources opened publishes the resulting holding torque]. Weak points: each collet grips only a narrow size range (about 1 mm for ER collets, often one exact size for others, Wikipedia); a bit inserted too shallowly can creep out or bend (Highland Woodworking); oil or dirt on the gripping surfaces lets it slip (ToolsToday); keyless chucks slip if not tightened firmly (Pro Tool Reviews). 3D-printed collets are light duty. *(⚑ parts need confirming)*
- **adjustable**: yes: before tightening, the rod can be set at any depth and angle; loosen, move and re-tighten at any time. Because each ER collet covers a 1 mm range, a set in 1 mm steps holds any diameter within the system's capacity (Wikipedia 'Collet')
- **play_and_precision**: No play once tight. Very repeatable centring: standard ER collets run true within 10 µm over their whole clamping range and ER-UP within 5 µm (REGO-FIX); collets are generally more accurate than self-centring three-jaw chucks (Wikipedia 'Chuck (engineering)'). It tolerates almost no misalignment or wrong size: the rod must be straight, round and within the collet's range, and oversize shanks must never be forced in (REGO-FIX). 'Draw-in' collets pull the rod slightly into the holder as they close, changing how far it sticks out; 'dead-length' collets avoid this (Wikipedia 'Chuck (engineering)'). A keyless chuck can grip a bit off-centre if the bit slips between two jaws while tightening (Pro Tool Reviews).
- **access_needed**: end of a tube or shaft: the rod goes in from its end and the nut is worked from the front, so nothing behind the holder needs to be reached
- **materials**: Collets are usually hardened spring steel with one or more cuts along their length (Wikipedia 'Collet'); 'emergency' collets that you machine yourself come in steel, brass or nylon (Wikipedia 'Chuck (engineering)'). Chuck bodies and jaws are steel. For 3D printing, a tough, slightly springy plastic such as PETG suits the collet, with a stiffer plastic such as PLA for the nut (Hackaday, 'Printed It: Collet Drill Stop'). They grip round steel shanks (drill bits, cutters, router bits), rods, pins and tubes; special collets hold square and hex bar.
- **maker_difficulty**: easy to use, moderate to make: buying an ER collet with a matching holder or nut is easy, but making a metal collet needs a lathe and hardening. Printed collets work for light jobs (drill stops, bit holders, rod couplers, tube mounts) but need tuned clearances and the right plastics (LoboCNC; Hackaday)

### Making it

- **processes**: 
  - off-the-shelf part: ER, 5C and R8 collets with their chucks and nuts, router and rotary-tool collets, keyless drill chucks and pin chucks
  - 3D print (FDM): light-duty collets and nuts for drill stops, bit holders, rod couplers, telescopic-rod locks and tube-to-plate mounts (LoboCNC; QuadeHale; Brandano; sdk; GetBurning)
  - CNC: lathe-turned metal collets, and soft 'emergency' collets bored to an odd size or shape (Wikipedia 'Collet')
  - 3D print (resin): ⚑ [uncertain] possible for small parts, but no tested printed-resin collet was found and most resins are brittle *(⚑ parts need confirming)*
- **print_in_place**: no: the collet, nut and body are printed as separate parts and then screwed together; LoboCNC's design has you work the printed threads back and forth and grease them after assembly
- **making_tips_3d_printing**: 1) Buy metal collets for anything that spins fast or cuts; print collets for light holding jobs such as drill stops, bit holders, rod couplers and tube mounts. LoboCNC found printed chucks with moving jaws 'just don't have enough gripping force', while printed collets similar to ER11 'can grab onto your bit with much greater force'. 2) Use two plastics: a tough, springy one for the collet so its fingers can flex 'a millimeter or so without breaking' (PETG), and a stiffer one for the nut (PLA) (Hackaday, Tom Nardi, on Adam Harrison's Collet Drill Stop). 3) Print the collet solid: Hackaday's collets were printed at 100% infill; Brandano printed his PETG coupling collet at 0.2 mm layers and 25% infill with a 3 mm brim. 4) Print the collet and the body at different layer heights (LoboCNC: body and ring 0.2 mm, collets 0.15 mm) so the layer ridges don't line up and lock against each other as the collet seats in the cone; print the thin fingers slowly (perimeters at about 20 mm/s) so they fuse fully (LoboCNC). 5) Print fine layers where there are threads (Hackaday used 0.1 mm for the threaded parts of the nut, with variable layer height). 6) Allow clearance: Brandano made the shaft bores 0.2 mm larger than the shafts and the nut threads about 0.5 mm larger in diameter than the collet threads; expect to tune this for your printer, as sdk notes his telescopic-rod collet 'pretty much has to be generated for your material'. 7) Lubricate the threads and the cone (PTFE grease or petroleum jelly, QuadeHale; light grease, LoboCNC) so the nut turns smoothly and the collet releases, but keep lubricant off the inside of the collet where it grips (LoboCNC; ToolsToday). 8) Choose the smallest collet that fits the rod without being stretched open; if the rod still moves when fully tightened, use a smaller collet (LoboCNC; QuadeHale's collets flex about ±1 mm). Put the rod in the collet before fitting it into the holder (LoboCNC). 9) Never tighten a printed collet hard without a rod in it: Brandano warns 'the collet segments will snap'. 10) Expect creep: a plastic collet slowly relaxes under constant squeeze, and PLA softens above about 60 °C (Prusa), so re-tighten now and then and use PETG (usable below about 80 °C, Prusa) or better for anything warm ⚑ [uncertain: creep advice is general, not a tested rule]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'ER collet' (ER 8, ER 11, ER 16, ER 20, ER 25, ER 32, ER 40, ER 50; in 1 mm or 0.5 mm steps, and inch sizes), 'ER collet chuck', 'ER straight shank collet holder' or 'ER extension', 'ER clamping nut', 'ER collet spanner'; '5C collet', 'R8 collet', 'Morse taper ER collet chuck'; 'router collet' (1/4 in, 1/2 in, 6 mm, 8 mm, 12 mm) and 'collet reducer sleeve'; rotary-tool collets such as Dremel (brand) 480 (3.2 mm), 481 (2.4 mm), 482 (1.6 mm), 483 (0.8 mm) and the 4485 collet nut set; 'keyless drill chuck' (with a threaded mount such as 1/2-20 UNF or 3/8-24 UNF, or a JT/B taper) ⚑ [uncertain: mount sizes not checked in an opened source]; Dremel (brand) 4486 keyless chuck for 1/32-1/8 in shanks; 'pin chuck' or 'pin vise' for tiny drills; 'expanding mandrel' for gripping inside a bore. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Each ER collet grips about 1 mm below its nominal size (0.5 mm in small sizes, 2 mm in ER 50), so buy a set in 1 mm steps to cover every diameter; the ER number is the opening diameter of the cone socket in mm (Wikipedia 'Collet'; REGO-FIX clamping range 1 mm).
  - Never force an oversize shank into a collet: REGO-FIX's example is never to use a 12-11 mm collet for a 12.2 mm shank, but the next size up (REGO-FIX ER catalogue, p. 2.04).
  - Insert the tool the full length of the collet if possible, and never less than two-thirds of the collet's bore length, or the collet can be permanently deformed and lose accuracy (REGO-FIX ER catalogue, p. 2.04).
  - Clip the ER collet into the nut first, then screw nut and collet onto the holder; fitting it wrongly can permanently damage the collet and nut (REGO-FIX ER catalogue, p. 2.04).
  - Tighten ER nuts with a torque wrench to the maker's figure, e.g. 8 N·m for an ER 11 collet holding 1-2.9 mm, 24 N·m for 3-7 mm, 136 N·m for ER 32 (REGO-FIX torque table, standard Hi-Q/ER nut); never more than 25% above the recommended torque (REGO-FIX Technical Information p. 14.03).
  - Standard ER collets hold run-out to 10 µm and ER-UP to 5 µm over the whole clamping range (REGO-FIX ER catalogue p. 2.02).
  - Router bits: push the bit fully in, then pull it back 1/16-1/8 in (1.5-3 mm) before tightening, so the collet can draw the bit in as it closes; a bottomed-out bit can stop the collet tightening fully and then creep out (Highland Woodworking, 'Installing Router Bits'; ToolsToday says back it out about 1/8 in).
  - Grip the shank over the full depth of the collet's grip, usually at least 3/4 in (19 mm); less 'risks creeping bits, bent or broken shanks' (Highland Woodworking).
  - Tighten firmly but don't 'kill it': over-tightening eventually stretches the mouth of a router spindle so it can't hold any bit (Highland Woodworking).
  - Keep the gripping surfaces dry and clean: no oil or anti-rust coating on the shank or inside the collet (Highland Woodworking; ToolsToday).
  - A self-holding taper (like the Morse taper that holds many drill chucks on their arbor) sticks by itself; a steep 'self-releasing' taper needs a drawbar to stay in (Wikipedia 'Machine taper'). Collet cones are made steep enough to let go when the nut is undone.
  - Keyless chuck: once the ratchet starts clicking, give the sleeve an extra-hard turn by hand; keep the bit centred between the three jaws while tightening, and insert driver bits deeply rather than just the tip (Pro Tool Reviews).

### When to use it

- **everyday_examples**: 
  - The collet and nut that hold the bit in a Dremel-type rotary tool or a wood router (Wikipedia 'Collet'; Dremel 4485)
  - The blade holder of an X-Acto-style craft knife (Wikipedia 'Collet')
  - The hand-twisted keyless chuck on a cordless drill (Wikipedia 'Chuck (engineering)'; Pro Tool Reviews)
  - The twist collar that locks the legs of many tripods and trekking poles (see the 'Telescoping tube twist lock' entry)
- **when_to_use**: Use a collet when a round rod, pin, bit or tube must be held very firmly and exactly centred, and be quick to change or re-position: holding cutting tools in rotary tools, routers and mills; holding round work in a lathe; clamping a drill stop or depth collar anywhere along a drill bit; locking a rod or tube in a bracket at any depth; or joining two shafts in line (Brandano's printed double collet coupling). Collets are the best choice for accuracy, grip and repetitive work, and resist being shaken loose (Wikipedia 'Collet'). Use a keyless chuck when you need to change between many different shank sizes quickly by hand, e.g. drills and screwdriver bits in a hand drill.
- **when_not_to_use**: Avoid collets when the rod sizes vary a lot (each collet covers only a narrow range, so you need many; Wikipedia says this makes them unsuitable for general use in electric drills: use a three-jaw chuck), when the rod is not round and straight (use a clamp, set screw on a flat, or a jaw chuck), when the part must slip on overload (use a slip clutch), or for large-diameter hubs on shafts (use a keyless locking bush or clamp hub). Avoid keyless chucks where precise centring matters (use a collet) or for very small drills (use a pin chuck). Don't rely on a printed plastic collet for high-speed cutting tools.
- **environment_limits**: Metal collets are unaffected by normal workshop heat and cold, but spring steel rusts: keep them clean, and use anti-rust products only where the equipment maker allows, never on the gripping surfaces (ToolsToday). Dust, resin and oil reduce the grip (Highland Woodworking; ToolsToday). Vibration is handled well once tight (Wikipedia rates collets as reliably resistant to being jarred loose). Printed collets lose grip over time as plastic creeps, and PLA softens and deforms above about 60 °C and degrades in sunlight, while PETG is usable below about 80 °C indoors and out (Prusa knowledge base).
- **safety_notes**: Collets usually hold spinning cutters: a bit that is under-inserted, bottomed out or loose can creep out or snap and fly off (Highland Woodworking), so follow the insertion and tightening rules and unplug the tool before changing bits. Use the correct collet size; forcing an oversize shank or clamping an empty or under-filled collet can deform it (REGO-FIX) or, for printed collets, snap the segments (Brandano). Keyless chucks can over-tighten themselves under high torque (Wikipedia 'Chuck (engineering)'), so expect to need a firm grip to open them. Keep fingers and loose clothing away from a spinning chuck.
- **common_failures**: 1) Bit slips or creeps out: wrong collet size, oil, resin or rust on the grip surfaces, too-shallow insertion, or bit bottomed out before tightening (Highland Woodworking; ToolsToday). Fix: clean, use the right size, insert deeply, pull back slightly, then tighten. 2) Bit wobbles (run-out): dirty cone, worn or bell-mouthed collet, ER collet not clipped into the nut, or tool inserted less than two-thirds of the bore (REGO-FIX; ToolsToday). Fix: clean, fit correctly, replace worn collets. 3) Collet or spindle damaged by over-tightening or by clamping oversize shanks (REGO-FIX; Highland Woodworking). 4) Stuck collet or chuck: tight taper or self-tightening chuck; ER collets are released from the nut by a sideways push (REGO-FIX); LoboCNC greases the printed cone lightly so collets release. 5) Keyless chuck slipping or bit going in crooked: not tightened hard enough, or bit caught between two jaws (Pro Tool Reviews). 6) Printed collets: layer ridges catching in the cone, thin fingers breaking, collet segments snapping when tightened without a rod, and threads that are hard to start (LoboCNC; Brandano).
- **related**: 
  - Keyless locking bush (taper-lock bush, shaft locking device): the same wedge-and-taper idea, scaled up to lock pulleys and gears onto shafts rather than hold tools
  - Telescoping tube twist lock (cam or collet twist lock): uses a collet-like split collar or an internal expander to lock sliding tubes at any length
  - Internal tube anchors (star nut, expansion plug): an expanding plug is an 'inside-out' collet that grips the inside of a tube
  - Taper fit (Morse taper): a self-holding cone joint with no slits; many drill chucks are mounted on their arbor this way (Wikipedia 'Machine taper')
  - Shaft-to-hub joints and rigid couplings (set screw, clamp hub): cheaper and simpler for light loads, but a set screw marks the shaft and does not centre it
  - Three-jaw (scroll) chuck: grips a much wider range of sizes but centres less precisely (Wikipedia 'Chuck (engineering)')
  - Quick couplers for tubes and hoses (push-to-connect): the 'collet' in a push-fit pneumatic fitting is a ring of gripping teeth that bites the tube, a different mechanism with the same name
  - Self-centring cone and socket (taper locator): uses a cone only to locate, not to grip
  - SDS chucks (and hex quick-change bit holders): hold bits by shape (grooves or flats) instead of friction, so they can't slip but only take special shanks (SDS: Wikipedia 'Chuck (engineering)')
  - Expanding internal grip: the expanding collet and expanding mandrel, which grow outward to grip the inside of a hole, tube or ring instead of squeezing a rod from outside

### Pictures, videos and models

- **links**: 
  - [External thread pull collet action.gif (Slashme, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:External_thread_pull_collet_action.gif): Animation of a collet being pulled into its tapered seat by a drawbar, clamping a shaft, spinning, and then releasing it *(licence: CC BY-SA 4.0)*
  - [ER Collet.jpg (Aweber4418, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:ER_Collet.jpg): Photo of an ER collet with a 10-9 mm clamping range, showing the slits from both ends *(licence: CC BY-SA 4.0)*
  - [ChuckDrillKeyedKeylessArbor.jpg (Glenn McKechnie, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:ChuckDrillKeyedKeylessArbor.jpg): An assembled keyless drill chuck above a keyed chuck with its key, arbor and an end view of the three jaws *(licence: CC BY-SA 3.0)*
  - [ER Collets and Collet Chucks (Stuart de Haro, YouTube)](https://www.youtube.com/watch?v=mdq4OryG9D8): Short introduction to ER collets and matching collet chucks (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [What's Inside a Keyless Drill Chuck | How To Take Apart and Re-Assemble | Remove From CNC Taper Tool (Engineerable, YouTube)](https://www.youtube.com/watch?v=kPmZA2VUVew): Teardown of a keyless drill chuck showing the jaws, nut and sleeve inside (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Collet Chuck and Collet Assortment (LoboCNC, Printables) (URL from search results; details read via the Printables API)](https://www.printables.com/model/314149-collet-chuck-and-collet-assortment): Printable collet chuck with a set of ER11-like collets holding bits from 6.35 mm down to 1.1 mm, plus collets for 1/4 in and 4 mm hex shanks; includes STEP files for remixing and detailed print and lubrication advice *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Collet Drill Stop (QuadeHale, Thingiverse)](https://www.thingiverse.com/thing:3177276): Drill-bit depth stop loosely based on an ER20 collet, with knurled hand-tightened nuts (M28x2 thread) and a range of collets; the design Hackaday printed and tested in 'Printed It: Collet Drill Stop' *(licence: CC BY-NC-SA 4.0)*
  - [Rigid coupling collet (Brandano, Printables) (URL from search results; details read via the Printables API)](https://www.printables.com/model/240848-rigid-coupling-collet): Parametric OpenSCAD double-ended collet with two threaded nuts that joins two shafts in line; printed in PETG *(licence: GNU General Public License v2.0)*
  - [parametric lock collet for telescopic rod (sdk, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1421540-parametric-lock-collet-for-telescopic-rod): Parametric collet that locks two nested tubes (e.g. 12 mm in 10 mm) at any length, for a bike-stand fixing rod or woodworking pinch rods; a v2 is linked from the description *(licence: GNU Lesser General Public License)*
  - [Parametric tube to plate collet mount (GetBurning, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1030662-parametric-tube-to-plate-collet-mount): OpenSCAD (BOSL2) collet-and-nut mount that clamps a 22 mm carbon or metal tube to a plate with a 40x40 mm M4 bolt pattern *(licence: GNU General Public License v3.0)*
- **diagram_idea**: Side cross-section of a slotted collet in a cone-shaped holder, shown twice: loose with a small gap around a rod, then with the nut screwed on and arrows showing the nut pushing the collet into the cone and the fingers squeezing in evenly from all sides; a small inset shows the three angled jaws of a keyless chuck doing the same job.
- **sources**: 
  - https://en.wikipedia.org/wiki/Collet
  - https://en.wikipedia.org/wiki/Chuck_(engineering)
  - https://en.wikipedia.org/wiki/Machine_taper
  - https://us.rego-fix.com/en/products/collets/standard?system=ER
  - https://usa.rego-fix.com/rego_torque.pdf
  - https://www.productivity.com/wp-content/uploads/2020/04/Rego-Fix-ER-Collet-3-26-20-Interactive.pdf
  - https://productivity.com/wp-content/uploads/2020/04/Rego-Fix-Technical-Information-3-27-20-Interactive.pdf
  - https://patents.google.com/patent/GB2426944A/en
  - https://www.protoolreviews.com/how-to-use-a-keyless-drill-chuck/
  - https://info.highlandwoodworking.com/library/installingrouterbits.pdf
  - https://toolstoday.com/learn/router-bit-slipping-wobbling-stuck-check-collet
  - https://www.dremel.com/us/en/p/4485-26154485ab
  - https://www.dremel.com/us/en/p/4486-26154486ac
  - https://hackaday.com/2020/04/22/printed-it-collet-drill-stop/
  - https://www.thingiverse.com/thing:3177276
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/314149-collet-chuck-and-collet-assortment
  - https://www.printables.com/model/240848-rigid-coupling-collet
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:External_thread_pull_collet_action.gif
  - https://commons.wikimedia.org/wiki/File:ER_Collet.jpg
  - https://commons.wikimedia.org/wiki/File:ChuckDrillKeyedKeylessArbor.jpg
  - https://commons.wikimedia.org/wiki/Category:Collet_chucks
  - https://www.youtube.com/watch?v=mdq4OryG9D8
  - https://www.youtube.com/watch?v=kPmZA2VUVew

### Finder tags

- **connects**: tube, rod or extrusion, shaft, something to grip
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** input_output, load, making_tips_3d_printing, off_the_shelf_parts, processes

## 220 Clamp-on tube fittings (slip-on structural fittings)

*clamping, magnetic & friction connections.* Tees, elbows and crosses that slide onto round tube and lock with set screws, building frames and rails that can be taken apart

*Also covers:* Also covers rod-to-rod cross clamps (the lab boss head) and the external-fixator frame idea, described only for building frames and jigs.

### What it is

- **plain_name**: Chunky metal tees, elbows and crosses that you slide onto plain round pipe and lock by tightening a screw with an Allen key, so you can build rails, racks, desks and frames like a construction kit, with no welding or threading, and take them apart again
- **term**: Structural pipe fittings (slip-on pipe fittings, clamp-on tube fittings, key clamp fittings)
- **aliases**: 
  - slip-on pipe fittings; slip-on tube fittings; structural pipe fittings (Wikipedia 'Structural pipe fitting')
  - pipe clamp / tube clamp fittings; tube-and-clamp system; clamp fittings
  - key clamp / Key Klamp: generic name taken from Kee Klamp (brand, Kee Safety), made since 1934; related brand names Interclamp and Tubeclamp (Wikipedia 'Kee Klamp')
  - Kee Lite (brand): aluminium version of Kee Klamp
  - Speed-Rail (brand, Hollaender): aluminium slip-on fittings used for handrails and for film and TV grip rigs; Nu-Rail (brand, Hollaender)
  - set-screw pipe fittings; grub-screw tube connectors; threadless pipe fittings
  - tee (single socket tee, three socket tee), elbow, cross, side outlet tee, base flange, wall flange, swivel fitting (names of fitting types in the Kee Klamp manual)
  - lean pipe / pipe-and-joint system: 28 mm plastic-coated steel pipe joined by bolted metal clamp joints, used for workshop racks and trolleys (WJ-LEAN)
  - scaffold coupler (right-angle coupler, swivel coupler, sleeve coupler): the bolted clamp-on cousin used on scaffolding tubes (Wikipedia 'Scaffolding')
  - rod-to-rod cross clamp; boss head, clamp holder or clamp fastener (the laboratory version that locks a clamp to a stand rod; Wikipedia 'Clamp stand')
- **family**: clamping, magnetic & friction connections
- **one_liner**: Cast metal fittings with round sockets that slip over plain tube and are locked on by a set screw pressing on the tube, so tees, elbows, crosses and flanges can join cut lengths of pipe into strong frames and railings that can be adjusted or taken apart.
- **complexity**: A few parts per joint: the fitting (a one-piece casting with one to four sockets, e.g. elbow, tee, cross or flange), one set screw (grub screw) per socket, and the plain tubes it joins; some split, hinged and swivel fittings are two or three pieces bolted together (Kee Klamp manual).
- **how_it_works**: Each socket of the fitting is a round hole slightly larger than the pipe, so the fitting slides onto the pipe and can be moved to any position and angle (Wikipedia 'Structural pipe fitting'). A set screw in a threaded hole in the socket wall is then tightened with a hex key; it presses on the pipe, pushing it against the far side of the socket, and 'the sharp edge of the set screw locks the fitting into the pipe' (Simplified Building). Friction plus that small bite hold the joint against sliding and turning; loosen the screw and the fitting slides free again, so the structure can be adjusted or taken apart (Wikipedia 'Structural pipe fitting'). A light-duty relative is the rod-to-rod cross clamp, such as the lab boss head (clamp holder): a stand rod and a clamp's rod go into its two jaws, and thumbscrews lock them 'at any height or angle', normally at 90° to each other; swivel and all-position holders allow other angles, and 'in some cases it can be used to attach support rods together' (Wikipedia 'Clamp stand').

### Finder attributes

- **job**: 
  - join and hold: joins lengths of round pipe at fixed angles (tees, elbows, crosses) or to walls and floors (flanges) to build rigid frames (Wikipedia 'Structural pipe fitting')
  - let it move (turn, slide or bend): swivel and adjustable fittings let a brace be set at any angle before locking, and eye and pin fittings (Kee types 78 and 83) make gate hinges, with a collar (type 75) supporting a fitting that is left loose so it can turn (Kee Klamp manual)
- **motion**: none: once the set screws are tight the joint is rigid. While loose, a fitting can slide along its pipe and turn round it; swivel fittings add a pivot for braces at any angle, e.g. the BC53-8 swivel elbow adjusts through 202° (Kee Klamp manual)
- **degrees_of_freedom**: 0 when tightened. Before tightening, each socket allows 2 (slide along the pipe and turn round it); a swivel fitting adds 1 more (its pivot) until locked.
- **special_behaviour**: 
  - none: it is a fixed joint. Its useful trick is that it is fully adjustable and reusable: fittings can be moved, re-angled or taken apart simply by loosening the set screws (Wikipedia 'Structural pipe fitting'), and split or hinged fittings can be added to an existing frame without dismantling it (Kee Klamp manual, split single socket tee)
- **holding_principle**: 
  - friction or clamping (force-fit): the set screw presses the pipe against the socket wall and friction resists sliding and turning
  - shape (the parts interlock; form-fit): partly, because the pointed or sharp-edged set screw bites a small dent into the pipe ('the sharp edge of the set screw locks the fitting into the pipe', Simplified Building); for permanent or high-load joints held by a single screw, Kee advises drilling and pinning the tube to stop rotational slip (Kee Klamp manual)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: loosen the set screws and slide the fittings off; the pipe and fittings can be reused in a new project (Wikipedia 'Structural pipe fitting')
- **reuse_cycles**: many times: fittings and pipe can be reconfigured and reused (Wikipedia 'Structural pipe fitting'); replacement set screws are sold separately (Simplified Building). The set screw leaves small dents in the pipe, so re-tighten on fresh spots if a joint is moved ⚑ [uncertain: general advice, not from a manufacturer] *(⚑ parts need confirming)*
- **tools_needed**: A hex key (Allen key): Kee Klamp uses 3/16 in for size 4, 1/4 in for sizes 5-6 and 5/16 in for sizes 7-9 (Simplified Building); a ratchet or torque wrench helps reach the rated torque (Kee Klamp manual). A pipe cutter or saw and a file to cut and deburr the pipe; for railings, a drill for floor anchors (Hollaender Speed-Rail instructions).
- **seal**: none: the joint is not sealed and the pipes do not carry fluid
- **load**: Heavy: Kee Klamp fittings in sizes 5-9 support an axial (sliding) load of 900 kg per set screw tightened to 39 N·m (Kee Klamp manual; Kee Safety technical specification), and Simplified Building says this rating includes a 2:1 safety factor; some Kee load tables use 770 kg with a safety factor of 2. Strong in bending and pull along the pipe; weakest against twisting round the pipe axis where only one screw holds, which is why Kee says single-screw joints under high or permanent load should be drilled and pinned (Kee Klamp manual). Much weaker on thin-wall or soft tube: Kee specifies tube with a wall of at least 3.2 mm if it is not standard BS EN 10255 steel tube (Kee Klamp manual). 3D-printed plastic versions are light duty only.
- **adjustable**: yes: fittings can be slid and rotated to any position before tightening, and adjustable fittings exist for angles, e.g. a 30-45° adjustable cross and swivel fittings for bracing (Kee Klamp manual); 'Adjustability in the fittings allows greater on-site tolerances to be met' (Kee Safety technical specification)
- **play_and_precision**: No play once tight. Positioning is by eye and tape measure, not by precise location, so squareness depends on how carefully the pipes are cut and set before tightening; the clearance in the sockets absorbs small cutting errors (Kee Safety technical specification) ⚑ [uncertain: no figure for socket clearance published]. Tube must not be joined end-to-end inside a split tee fitting (Kee Klamp manual); a structure built only from swivel fittings will not be rigid (Kee Klamp manual). *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: most fittings are slid onto the pipe from its end, so plan the assembly order; split and hinged fittings can be clamped onto a pipe from the side (Kee Klamp manual). The set screw is tightened from outside, so the inside of the pipe never needs to be reached
- **materials**: Fittings: hot-dip galvanised malleable (cast) iron, to BS EN 1562/1563 or ASTM A47 (Kee Klamp manual; Simplified Building); aluminium-magnesium alloy 535 (Hollaender), which Hollaender says is comparable in strength to iron at one-third the weight; aluminium Kee Lite; plastic for 3D-printed or light versions. Set screws: case-hardened steel with a corrosion coating, stainless for aluminium fittings (Kee Klamp manual; Simplified Building). Pipe: steel tube to BS EN 10255 / ISO 65 or US Schedule 40 in standard outside diameters (e.g. size 7 = 42.4 mm = 1-1/4 in nominal bore), galvanised, stainless, aluminium or black iron pipe (Kee Klamp manual; Hollaender).
- **maker_difficulty**: easy: buy the fittings and matching pipe, cut the pipe to length with a saw or pipe cutter, and tighten with a hex key; 'only simple hand tools are required' (Wikipedia 'Structural pipe fitting'). 3D-printing strong versions is harder (moderate), because set screws need metal threads and plastic creeps under the clamping force

### Making it

- **processes**: 
  - off-the-shelf part: cast iron or aluminium slip-on fittings in standard pipe sizes, plus galvanised or aluminium pipe cut to length
  - 3D print (FDM): light-duty tube connectors and clamps for thin tube, grow-tent frames, PVC or aluminium tube, usually as two-piece bolted clamps or push-fit sockets (Thingiverse 'Pipe Clamps' by Theorist; jprince's tube tee/cross connector)
  - CNC: machined or laser-cut custom brackets and clamp blocks for tube ⚑ [uncertain: no specific design guide found]
  - woodwork: ⚑ [uncertain] wooden clamp blocks with bolts are possible, but no tested source was found *(⚑ parts need confirming)*
- **print_in_place**: no: printed fittings are single rigid parts or two clamp halves, assembled onto the tube with screws or set screws
- **making_tips_3d_printing**: 1) Treat printed fittings as light duty: the metal versions rely on a hardened set screw biting into steel pipe at 39 N·m (Kee Klamp manual), which printed plastic threads cannot take. 2) Give the set screw a metal thread: fit a heat-set insert or a captive nut rather than screwing into plastic (see the 'Heat-set threaded insert' and 'Captive nut pocket' entries) ⚑ [uncertain: design advice, not a tested rule]. 3) A split clamp is usually better than a single set screw on plastic: jprince's grow-tent tube connector uses two printed halves clamped round the tubes with four M3 screws, can be fitted to an existing frame without taking it apart, and mixes halves to join 16-22 mm tubes of different sizes. 4) Print settings from that design: PLA, PETG, ASA or ABS, 0.4 mm nozzle, 0.16-0.20 mm layers, 15% gyroid infill, no supports, printed with the tube cut-outs facing up. 5) Orientation matters: Mike Car prints his 25 mm 3-way connector 'on the corner for strength' so each socket is at an angle to the layers ⚑ [uncertain: why this is stronger is not explained]. 6) Clearance: make sockets a little larger than the tube; Brandano's printed collet coupler uses bores 0.2 mm larger than the shaft, while push-fit connectors are made tight on purpose (randunel's 20 mm 3-way connector is a 'tight fit so that no glue is required'); print a test ring first and adjust for your printer ⚑ [uncertain: values vary by printer]. 7) Don't let a screw tip press straight on a thin plastic or aluminium tube; spread the load with a curved pad or clamp saddle ⚑ [uncertain: general advice]. 8) Plastic creeps and loosens under constant clamping: PLA softens above about 60 °C and degrades in sunlight, while PETG suits indoor and most outdoor use below about 80 °C (Prusa), so use PETG, ASA or ABS outdoors and re-tighten after a few days. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'structural pipe fittings', 'slip-on pipe fittings', 'key clamp fittings', 'Kee Klamp' (brand) or 'Kee Lite' (brand), 'Speed-Rail' (brand) or 'Nu-Rail' (brand) aluminium fittings, 'Interclamp' (brand). Fitting names: single socket tee, three socket tee, 90° elbow, cross, side outlet tee, corner, swivel socket, base flange, wall flange, railing flange, adjustable cross, split tee, set screw (e.g. Kee 97 series) and matching hex keys. Pipe: steel tube to BS EN 10255 (ISO 65) medium or heavy, or US Schedule 40 pipe, galvanised or aluminium; Kee sizes 2-9 fit outside diameters 13.5, 17.5, 21.3, 26.9, 33.7, 42.4, 48.3 and 60.3 mm (1/4 in to 2 in nominal bore) (Kee Klamp manual). Related systems: 'lean pipe' 28 mm coated pipe with 'metal joints' (WJ-LEAN), scaffold 'right-angle coupler', 'swivel coupler' and 'sleeve coupler' for 48.3 mm scaffold tube ⚑ [uncertain: scaffold tube size not checked in an opened source]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Kee Klamp sizes 5-9: each set screw tightened to 39 N·m (29 lbf·ft) holds 900 kg of axial load; this torque is 'normally obtained when the screw is fully tightened using a ratchet wrench' (Kee Klamp Fittings Manual, 2007, p. 4; Kee Safety technical specification).
  - Simplified Building states the 2000 lb (900 kg) per-screw rating includes a 2:1 safety factor, and that size 6 Kee Lite aluminium fittings should be tightened to only 19 lbf·ft (about 26 N·m) (Simplified Building, 'Kee Klamp Concept').
  - Hollaender Speed-Rail aluminium fittings: tighten set screws to about 16 lbf·ft (about 22 N·m); without a torque wrench, tighten until the screw touches the pipe, then one more full turn (Hollaender Speed-Rail installation instructions, step 7).
  - Use tube with the standard outside diameter; tube to other specifications is fine if its outside diameter matches BS EN 10255 (ISO 65) and its wall is at least 3.2 mm (Kee Klamp manual, p. 5).
  - Match fitting size to pipe size: e.g. Kee size 5 = 26.9 mm (3/4 in), size 6 = 33.7 mm (1 in), size 7 = 42.4 mm (1-1/4 in), size 8 = 48.3 mm (1-1/2 in), size 9 = 60.3 mm (2 in) outside diameter (Kee Klamp manual, p. 5).
  - Never build a whole structure from swivel fittings; it won't be stable or rigid (Kee Klamp manual, swivel fittings warnings).
  - Where a tube is held by a single grub screw under high or permanent load, drill and pin it to stop it turning (Kee Klamp manual, type 72 warning).
  - Don't join two tubes end-to-end inside a split single socket tee (Kee Klamp manual).
  - If the load on a socket could exceed its set screw's slip load, or a fitting must be left loose (e.g. a gate hinge), add a clamp-on collar (Kee type 75) underneath to carry it (Kee Klamp manual).
  - Tighten set screws after the frame is plumb and square, starting from the base flanges and working up (Hollaender Speed-Rail instructions, step 7).
  - Under dynamic loads (vibration, swinging, gym use), check set screws at regular intervals (Simplified Building, 'Kee Klamp Concept'); in an independent 4 g vibration test of a size 7 tee for 24 hours, neither standard nor self-locking set screws loosened (Kee Safety technical specification, vibration test).

### When to use it

- **everyday_examples**: 
  - Galvanised handrails and guardrails around car parks, stairs, loading docks and flat roofs (Wikipedia 'Kee Klamp')
  - Market stalls, shop clothing rails and pipe shelving (Wikipedia 'Kee Klamp'; Simplified Building)
  - Home-made pipe desks, parkour and ninja-warrior training rigs (Wikipedia 'Kee Klamp')
  - Film and TV lighting and camera rigs built from aluminium Speed-Rail (Hollaender)
- **when_to_use**: Use them to build strong, rigid frames from round pipe without welding, threading or special skills: railings, racks, shelves, desks, workbenches, gates, gym rigs, greenhouse or grow-tent frames, camera and lighting rigs. They suit projects you may want to adjust, extend or take apart and rebuild, and outdoor structures when galvanised or aluminium (Wikipedia 'Structural pipe fitting'; Simplified Building). They are also handy for adding a crossbar or mount to an existing tube frame with split or two-piece clamps (Kee Klamp manual; jprince). For jigs and frames that must hold short rods or pins at odd angles, one idea borrowed from medicine is the external-fixator frame: pins are joined to an outside rod by 'special ball-and-socket joints', which are adjusted to set each pin's position and make a rigid support (Wikipedia 'External fixation'). It is mentioned here only as a frame-building idea for non-medical maker use.
- **when_not_to_use**: Avoid them for thin-wall tube such as electrical conduit, bike or tent tubing, or soft plastic pipe unless the fitting is made for it (the set screw can crush or dent the tube; Kee requires at least 3.2 mm wall for non-standard tube): use split clamps (see 'Clamp-on accessory mount for bars, poles and edges'), plastic push-fit connectors or internal tube anchors instead. For square or rectangular frames use aluminium extrusion with T-slot connectors. For a light, cheap, permanent frame, welding or glued PVC fittings may be cheaper: Wikipedia notes that for simple installations welding can cost less than Key Klamp. Where precise alignment matters (machines, printers), use extrusion or machined brackets. For safety-critical guardrails, use only certified fittings and the maker's load tables.
- **environment_limits**: Galvanised iron fittings with coated set screws are made for outdoor and industrial use (Kee Klamp manual); aluminium alloy 535 fittings are very corrosion resistant and suited to harsh environments (Hollaender); stainless set screws are fitted on aluminium fittings (Simplified Building). Vibration: Kee's 4 g, 24-hour vibration test showed no loosening, but dynamic loads call for periodic checks of set screws (Kee Safety technical specification; Simplified Building). Printed plastic fittings creep and loosen under constant clamping and heat; PLA softens above about 60 °C and degrades in sunlight (Prusa).
- **safety_notes**: If a frame will hold people (railings, guardrails, climbing or gym rigs) or overhead loads, follow the maker's load tables, torque figures and certification: Kee's ratings apply only to standard tube and correctly torqued screws (Kee Klamp manual; Simplified Building). A set screw that is under-tightened or on thin tube can slip and let a joint collapse suddenly. Cut pipe ends are sharp: deburr them and fit end caps ⚑ [uncertain: general advice]. Structures made only of swivel fittings are not rigid (Kee Klamp manual). Printed plastic connectors must not be used for anything that holds a person's weight ⚑ [uncertain: general advice]. The external-fixator frame idea is for building jigs and frames only: never make or use anything like it on a person. *(⚑ parts need confirming)*
- **common_failures**: 1) Joint slips along or turns round the pipe: set screw not tight enough, tube too thin or undersized, or a single screw resisting twist (Kee Klamp manual; Simplified Building). Fix: torque correctly, use standard tube, drill and pin highly loaded joints. 2) Screws loosening under repeated or dynamic loads (Simplified Building). Fix: check periodically. 3) Wobbly or out-of-square frame: pipes cut to the wrong length, screws tightened before the frame was plumb, or too many swivel fittings (Hollaender; Kee Klamp manual). 4) Can't fit a fitting because the pipe ends are already captured: plan the assembly order or use split fittings (Kee Klamp manual). 5) Corrosion where the galvanising or coating is damaged; use coated or stainless screws (Kee Klamp manual; Simplified Building). 6) Printed versions: cracked sockets, stripped plastic threads and loosening from creep (Prusa) ⚑ [uncertain: no test data found]. *(⚑ parts need confirming)*
- **related**: 
  - Aluminium-extrusion connectors (T-slot nuts and brackets): the equivalent kit system for square aluminium profiles; more precise and easier to attach accessories, but square rather than round
  - Internal tube anchors (star nut, expansion plug): grip the inside of a tube end instead of the outside, e.g. for feet, casters or an end thread
  - Collet (and keyless chuck): a split sleeve that grips a round rod evenly and centred; printed collet mounts can clamp a tube to a plate
  - Shaft-to-hub joints and rigid couplings (set screw, clamp hub): the same set-screw or split-clamp idea used on rotating shafts
  - Telescoping tube lever lock (flip lock) and twist lock: clamp one tube inside another at any length
  - Scaffold couplers (right-angle, swivel and sleeve couplers): bolted clamp-on fittings for scaffold tube; only right-angle and swivel couplers are load-bearing (Wikipedia 'Scaffolding')
  - Threaded pipe fittings (plumbing tees and elbows): screw onto threaded pipe ends, so pipes must be cut and threaded to exact lengths and can't be slid or rotated
  - Plastic push-fit tube connectors (e.g. PVC furniture fittings and printed 3-way connectors): cheap and light, held by a tight fit or glue rather than screws
  - Ordinary screw joint (bolt and nut): drilling through tubes and bolting them gives a positive joint but weakens the tube and can't be slid
  - Clamp-on accessory mount for bars, poles and edges: split bar clamps, U-bolts, pipe clamps and camera-rod clamps that grip a tube from outside to fix one accessory to it; the better choice on thin-wall tube
  - Strut hub: joins three or more straight struts at fixed compound angles in one node, for domes and space frames rather than right-angle pipe frames

### Pictures, videos and models

- **links**: 
  - [Basic kee klamp.jpg (Cwpollock, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Basic_kee_klamp.jpg): Photo of a basic slip-on Kee Klamp fitting with its set screw (used as the lead image of Wikipedia's 'Kee Klamp' article) *(licence: GFDL 1.2 or later / CC BY-SA 3.0)*
  - [Kee Klamp & Kee Lite Pipe Fittings - Features & Use (Simplified Building, YouTube)](https://www.youtube.com/watch?v=2SXjwiZgTSk): Overview of slip-on fittings, sizes and how the set screw locks the fitting onto the pipe; a transcript is on the Simplified Building website (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Kee Klamp Fittings Manual (Kee Klamp Ltd, 2007, PDF hosted by a Swedish distributor)](https://www.fallskydd.se/pdfs/UK_KeeKlamp_2007_C.pdf): Drawings and dimension tables for every fitting type (tees, elbows, crosses, swivels, flanges), sectional drawings of the tube sizes, and load tables *(licence: link only (copyright Kee Klamp Ltd))*
  - [Speed-Rail Assembly/Installation Instructions (Hollaender, PDF)](https://www.hollaender.com/site/assets/files/9374/speed-rail_2-line_installation.pdf): Step-by-step drawings of building a two-line railing from slip-on aluminium fittings, with pipe cut-length formulas and set screw tightening advice *(licence: link only)*
  - [Coupler 1.jpg (Warburg, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Coupler_1.jpg): Photo of a bolted scaffold coupler holding a diagonal brace on a frame scaffold: the related tube-and-clamp system *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [Pipe Clamps (Theorist, Thingiverse, 2012)](https://www.thingiverse.com/thing:33780): Printable pipe fittings for building furniture and railings from pipe, designed as a cheaper alternative to Kee Klamp and Alvin Industrial metal fittings *(licence: CC BY-SA 4.0)*
  - [Tube Tee / Cross Connector - 90° Perpendicular Tube Clamp (jprince, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1849731-tube-tee-cross-connector-90deg-perpendicular-tube): Two-piece printed clamp with four M3 screws that joins two round tubes (16-22 mm, including 1/2 in EMT) at 90°, designed for grow-tent frames; halves can be mixed to join different tube sizes *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Parametric pipe connector (Konstantin Radchenko, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1441958-parametric-pipe-connector): Fusion 360 parametric tube connector: change one diameter parameter to fit your tube and build 3D lattice frames *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Parametric tube to plate collet mount (GetBurning, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1030662-parametric-tube-to-plate-collet-mount): OpenSCAD (BOSL2) collet-and-nut fitting that clamps a 22 mm carbon or metal tube to a plate, a flange-style clamp-on fitting *(licence: GNU General Public License v3.0)*
- **diagram_idea**: Cut-away of a slip-on tee fitting on a pipe: first sliding freely along the pipe, then with the set screw tightened by a hex key, arrows showing the screw pushing the pipe against the far wall and a close-up of the screw point biting a small dent; beside it, a small frame built from elbows, tees and flanges.
- **sources**: 
  - https://en.wikipedia.org/wiki/Structural_pipe_fitting
  - https://en.wikipedia.org/wiki/Kee_Klamp
  - https://en.wikipedia.org/wiki/Scaffolding
  - https://www.fallskydd.se/pdfs/UK_KeeKlamp_2007_C.pdf
  - https://www.keesafety.com/media/hcnluj0x/kee_klamp_technical_specification.pdf
  - https://www.simplifiedbuilding.com/pipe-fittings/kee-klamp-concept
  - https://www.simplifiedbuilding.com/97-set-screw
  - https://www.simplifiedbuilding.com/pipe-fittings/kee-klamp/97s-stainless-steel-set-screw
  - https://www.simplifiedbuilding.com/projects/video-kee-klamp-and-kee-lite-features-use
  - https://www.youtube.com/watch?v=2SXjwiZgTSk
  - https://www.hollaender.com/
  - https://www.hollaender.com/site/assets/files/9374/speed-rail_2-line_installation.pdf
  - https://www.wj-lean.com/professional-china-pipe-and-joint-system-diameter-28mm-0-7mm-thickness-coated-pipe-wj-lean-product/
  - https://www.thingiverse.com/thing:33780
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:Basic_kee_klamp.jpg
  - https://commons.wikimedia.org/wiki/File:Coupler_1.jpg
  - https://en.wikipedia.org/wiki/Clamp_stand
  - https://en.wikipedia.org/wiki/External_fixation

### Finder tags

- **connects**: tube, rod or extrusion, hoses or pipes
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, reuse_cycles, safety_notes

## 221 Internal tube anchors (star nut, expansion plug)

*clamping, magnetic & friction connections.* Parts pushed into the end of a tube that grip the inside with barbs, a squeezed rubber plug or a wedge, giving a thread or a clamp point

### What it is

- **plain_name**: A plug you push into the open end of a tube that grips the inside wall, either with springy barbs that dig in, ribs that press outward, or a rubber or split sleeve that swells when you turn a bolt, so the tube end gets a screw thread or a firm anchor point
- **term**: Internal tube anchor (tube-end insert): star nut (star-fangled nut), expansion plug (compression plug, expander), wedge or cone expander, and ribbed threaded tube insert
- **aliases**: 
  - star nut; star-fangled nut ('Star Fangled' is a registered trade name, per Sheldon Brown); starnut; Ahead nut; threadless headset nut
  - expansion plug; compression plug; expander plug; headset expander (for carbon fork steerers) (Park Tool; Wikipedia 'Stem (bicycle part)')
  - quill stem expander: wedge bolt (wedge-shaped nut) or cone expander nut (Wikipedia 'Stem (bicycle part)')
  - threaded tube insert; threaded tube end; square or round threaded insert for levelling feet; tube insert with nut (Superior Glide)
  - expanding adapter stem; expansion stem; rubber expansion adapter (for casters in tube legs) (Caster Technology)
  - expanding bar-end plug (bicycle handlebar end plug)
  - tube-connecting nut ('push inside tubes to join them with a threaded stud instead of welding', McMaster-Carr category name)
  - expanding tube plug; wedge expanding plug; tube end plug with thread
- **family**: clamping, magnetic & friction connections
- **other_families**: seals & pass-throughs
- **one_liner**: A part pushed or tapped into the open end of a tube that locks against the inside wall, by barbs biting in, ribs pressing out, or a sleeve swollen by a bolt, wedge or cone, so the tube gets a thread, a foot, a caster or a pull point without welding or drilling.
- **complexity**: Single piece to a few parts. Star nut: one piece (a threaded centre with two stacked rings of springy barbed flanges). Ribbed threaded insert: a plastic (PA) body with a steel nut moulded in. Expansion plug: a small assembly acting as one unit: an expandable split or rubber sleeve, a cone at the top and at the bottom, and a bolt through the middle (Park Tool). Wedge expander: a sleeve or tube cut at an angle, a matching wedge nut and a bolt (Wikipedia 'Stem (bicycle part)').
- **how_it_works**: Barb type: the star nut is slightly wider than the inside of the tube, so when it is hammered in its springy barbed flanges bend back and bite into the wall; they slide one way but dig in if pulled back, so it resists pulling out (Park Tool; Sheldon Brown). Rib type: a plastic insert with flexible ribs is pressed in and the ribs push outward on all the walls, holding a nut in the centre (Superior Glide). Expanding type: tightening a bolt pulls two cones (or a wedge) together inside a split or rubber sleeve, which swells outward and jams against the inside wall by friction; loosen the bolt and it lets go (Park Tool; Caster Technology). In a bicycle quill stem, the bolt pulls a wedge or cone nut up so the bottom of the stem spreads and presses on the inside of the steerer tube (Wikipedia 'Stem (bicycle part)').

### Finder attributes

- **job**: 
  - join and hold: gives the end of a tube a thread or anchor point for a bolt, top cap, levelling foot, caster or accessory (Park Tool; Superior Glide; Caster Technology)
  - tighten and hold tension: the star nut or expansion plug is what the top-cap bolt pulls against to pre-load (squeeze) a bicycle's headset bearings (Wikipedia 'Headset (bicycle part)')
  - seal it, or pass cables or fluid through: plugs close the tube end against dirt and insects, and rubber expanding plugs can seal it airtight (Superior Glide; 'Tube Plug With Double Expanding Seal' by windi)
- **motion**: none: once fitted it stays fixed in the tube. Expanding types can be slid to any depth before they are tightened
- **degrees_of_freedom**: 0 once fitted. Before tightening, an expanding plug can slide along the tube and (in a round tube) turn; a star nut has 0 from the moment it is driven in.
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): a star nut's barbed flanges 'allow it to be forced downward into the steerer, but ... prevent it from moving upward' (Sheldon Brown); Park Tool says it 'is designed not to pull upward' and is not designed to be removable
  - none for expansion plugs, wedge expanders and ribbed inserts: they simply hold by friction until released
- **holding_principle**: 
  - shape (the parts interlock; form-fit): a star nut's sharp barbs dig into the tube wall (Park Tool: the flanges 'bite into the fork walls')
  - spring force (a springy part presses it in place): the star nut's springy flanges and a ribbed insert's flexible ribs press outward on the wall (Superior Glide)
  - friction or clamping (force-fit): expansion plugs, wedge expanders and rubber expanding stems are squeezed against the wall by a bolt and hold by friction (Park Tool; Caster Technology; Wikipedia 'Stem (bicycle part)')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: Star nut: permanent ('a star nut is not designed to be removable'; to replace one, drive it deeper or right through the tube, or drill it out, Park Tool). Ribbed push-in inserts: semi-permanent ⚑ [uncertain: they can usually be prised out but the ribs may be damaged]. Expansion plugs, wedge expanders and expanding caster stems: removable; loosen the bolt and pull them out (Caster Technology: 'Just loosen the bolt to collapse the bushing and pull out the stem') *(⚑ parts need confirming)*
- **reuse_cycles**: Star nut: once (it is destroyed or left in the tube when removed, Park Tool). Expansion plugs and expanding stems: many times; Caster Technology says the system can be reused across different frames. Ribbed inserts: a few times ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: Star nut: a star-nut setter (e.g. Park Tool TNS-1 or TNS-4) and a hammer or mallet, or a long bolt and a printed guide tool (Park Tool; Russell Smyth's printed installer). Ribbed inserts: hand pressure or a rubber mallet (Superior Glide). Expansion plugs and expanding stems: a hex key, spanner or socket (Park Tool; Caster Technology). A pipe cutter or saw and a deburring tool to square and clean the tube end ⚑ [uncertain: general advice]. *(⚑ parts need confirming)*
- **seal**: Star nut: none. Ribbed plugs: dust-resistant, since they close the tube end (Superior Glide: 'The insert seals the tube end'). Rubber or flexible expanding plugs: can be watertight or airtight, because the squeezed rubber presses all round the wall, e.g. windi's printed plug with TPU sections seals a vibraphone resonator tube airtight, and Kirk's TPU plug stops a pool or spa drain
- **load**: Light to medium, mostly along the tube: star nuts carry the pull of a headset top-cap bolt (just the bearing pre-load; the fork is actually held by the stem clamp bolts, Wikipedia 'Headset (bicycle part)'); ribbed inserts carry a levelling foot's weight, which pushes the insert into the tube and passes the load through the plastic body to the tube walls (Superior Glide); expanding caster stems carry furniture, cart and prep-table loads (Caster Technology). Pull-out resistance depends on friction and on the tube's wall and inside size matching the insert. Twisting is the weak direction in round tubes, since a friction plug can spin; square plugs and square wedges resist turning ('Square wedge to prevent rotation', ray of sunshine's wedge plug) ⚑ [uncertain: no load figures published in the sources opened]. *(⚑ parts need confirming)*
- **adjustable**: Expansion plugs and wedge expanders: yes, they can be set at any depth before tightening, and loosened and moved later (Park Tool; Wikipedia 'Headset (bicycle part)' on quill stems, which can be adjusted in height). Star nut: no; its depth is fixed when it is driven in (Park Tool sets it 15 mm down). Threaded inserts give a thread, so a screwed-in levelling foot can then be adjusted up and down (Superior Glide).
- **play_and_precision**: No play once fitted. Alignment follows the tube: a star nut can go in crooked unless it is guided straight, which is why Park Tool's TNS-4 has a built-in guide. Tolerance to size is limited: ribbed inserts must match both the tube's outside size and its wall thickness (Superior Glide: walls of 1 to 2 mm), and expanding stems must match the tube's inside diameter (Caster Technology); an expanding plug copes with more variation than a barbed or ribbed one ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: everything is fitted from the open end; nothing needs to reach the outside of the tube wall or the far end
- **materials**: Star nuts: steel barbed flanges (Sheldon Brown) ⚑ [uncertain: aluminium versions exist but were not checked]; only for metal tubes, never carbon (Sheldon Brown; Wikipedia 'Stem (bicycle part)'). Expansion plugs: metal cones and sleeves, or a rubber or thermoplastic bushing (Caster Technology); suited to carbon, plastic and thin tubes because nothing bites. Ribbed threaded inserts: polyamide (PA) body with a zinc-plated steel nut (Superior Glide). 3D-printed plugs: ABS or ASA for rigid wedge plugs (ray of sunshine), PLA hard parts with TPU sealing sections (windi), TPU for rubber-like expanding plugs (Kirk). Tubes: steel, aluminium, stainless, carbon fibre (expansion plugs only), PVC. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: buy the right size, then press, tap or bolt it in; the main skill is measuring the tube's inside size and wall thickness. Printed expanding plugs are also easy to make (ray of sunshine; Rossero), but a printed star nut would not have springy metal barbs

### Making it

- **processes**: 
  - off-the-shelf part: star nuts, compression or expansion plugs, threaded tube inserts, expanding caster stems, bar-end plugs
  - 3D print (FDM): expanding plugs and wedge plugs with a metal screw and nut, bar-end plugs, flexible (TPU) sealing plugs, and push-in connectors that fit inside PVC pipe (ray of sunshine; Rossero; windi; Kirk; KPV)
  - CNC: ⚑ [uncertain] turned metal expanders or plugs for special tube sizes; no specific guide found *(⚑ parts need confirming)*
- **print_in_place**: partly: an expanding plug is usually printed as one or two plastic parts and then needs an added screw and nut (Rossero's bar-end plug needs an M3 bolt of at least 20 mm and an M3 nut; ray of sunshine's wedge plug needs an M3 flat-head screw and a nut dropped in during a print pause); multi-material plugs can combine hard and flexible sections in one print (windi)
- **making_tips_3d_printing**: 1) Measure the tube's inside diameter in several places and average it; for a tight push-in fit KPV adds about 0.4 mm to the measured inside diameter and suggests printing one connector first and adjusting until the fit is right. 2) For a plug that must hold, make it expand rather than relying on a push fit: a screw that pulls a wedge or cone into a split sleeve gives a strong, removable grip (ray of sunshine's wedge plug for 1.5 in, 13-gauge square tube; Rossero's bar-end plug that expands from 18 to 21 mm). 3) Stop it turning: in square tube a square plug and a square wedge can't rotate (ray of sunshine). 4) Put metal threads inside: ray of sunshine pauses the print at 7.2 mm (at 0.35 mm layers) to drop in a thin M3 nut and notes a heat-set insert would also work; see the 'Mid-print embedding' and 'Heat-set threaded insert' entries. 5) Printed plastic is brittle at thin hinges: Rossero redesigned the common expanding bar-end mechanism 'for the more brittle 3D printing filament with extra flexible joints'. 6) Lightly sand the wedge's sliding faces so it slides smoothly as you tighten (ray of sunshine). 7) Choose material for where it lives: ray of sunshine used ABS and would use ASA next time for UV resistance; PLA softens above about 60 °C and degrades in sunlight (Prusa). 8) For a sealing or rubbery plug, print in TPU: windi's plug squeezes TPU sections between two PLA parts so they spread out and seal airtight (with filament changes in the G-code), and Kirk prints a TPU drain plug compressed by a bolt and washers, with the part-cooling fan off. 9) A printed tool helps fit a metal star nut straight and at the right depth: Russell Smyth's installer, printed in PLA at 100% infill with 4 shells, sets the nut 15 mm deep using an M6 x 40 mm bolt and a rubber mallet. 10) Don't try to print a star nut for real use: its grip depends on springy, sharp metal barbs ⚑ [uncertain: reasoning, no test found]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'star nut' or 'star fangled nut' (sized by steerer tube, e.g. 1 in, 1-1/8 in, 1-1/4 in ⚑ [uncertain: sizes not checked in an opened source]; M6 x 1 thread, the bolt size Russell Smyth's printed installer uses), 'star nut setter' (Park Tool TNS-1, TNS-4), 'compression plug', 'expansion plug' or 'headset expander' for carbon steerers, 'quill stem wedge bolt', 'threaded tube insert' / 'square threaded insert' / 'round threaded tube insert' (e.g. 20 x 20 to 50 x 50 mm square tube, M8 to M12 thread, walls 1-2 mm, Superior Glide), 'expanding adapter stem' or 'expansion stem caster' (3/4 in to about 1-1/2 in, Caster Technology), 'expanding bar end plug', 'tube-connecting nuts' (McMaster-Carr category), 'tube end plug', 'expanding rubber plug'. Related: 'rivet nut' and 'well nut' (see 'Blind threaded fixings'), 'weld nut'. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Set a bicycle star nut about 15 mm (9/16 in) below the top of the steerer tube, so the top-cap bolt can thread fully into it (Park Tool, 'Star Fangled Nut and Expansion Plug Installation').
  - Drive a star nut in straight: use a setter with a guide (Park Tool TNS-4) or use the stem as a guide (Park Tool).
  - Never put a star nut in a carbon-fibre tube; use an expansion plug, because the star nut's barbs can weaken carbon 'to the point of failure' (Wikipedia 'Stem (bicycle part)'; Sheldon Brown).
  - To replace a star nut, don't try to pull it out: drive the old one deeper than the new one will sit, drive it right through, or drill out its centre (Park Tool).
  - Grease or oil the threads of an expansion plug's bolt before fitting it (Park Tool).
  - Match ribbed threaded inserts to the tube's outside size and its wall thickness (typically 1-2 mm walls for square furniture tube, Superior Glide); align the insert's corners with the tube's corners and press in by hand or with a rubber mallet (Superior Glide).
  - Choose an expanding stem by the tube's inside diameter (Caster Technology).
  - A threadless headset's top-cap bolt and star nut only pre-load the bearings; the stem clamp bolts hold the fork, so tighten them after adjusting (Wikipedia 'Headset (bicycle part)').
  - To free a quill stem's wedge, undo the bolt a couple of turns and give it a sharp tap (Wikipedia 'Headset (bicycle part)').
  - For a printed push-in connector, add about 0.4 mm to the pipe's measured inside diameter and test-fit before printing a full set (KPV, Printables).

### When to use it

- **everyday_examples**: 
  - The star nut or expansion plug under the top cap of a bicycle's threadless headset (Park Tool; Wikipedia 'Headset (bicycle part)')
  - The wedge or cone expander that holds an older bicycle's quill handlebar stem (Wikipedia 'Stem (bicycle part)')
  - Screw-in levelling feet in square steel table and desk legs (Superior Glide), and expanding-stem casters in kitchen prep tables and carts (Caster Technology)
  - The expanding plug that closes the end of a bicycle handlebar (Rossero's printable bar-end plug is based on 'common expanding sleeve bar ends')
- **when_to_use**: Use one when you need a thread or a fixing point at the end of a tube and can't or don't want to weld, drill or tap: fitting levelling feet, glides or casters to tube legs; giving a pole or frame an end thread for a knob, mount or accessory; anchoring a bolt that pulls things together inside a tube (like a headset top cap); plugging tube ends to keep dirt and insects out. Choose an expansion plug when the tube is carbon, plastic or thin-walled, when you may want to remove or move it, or when it should seal; choose a star nut for a cheap, permanent anchor in a metal tube; choose a ribbed threaded insert for furniture legs that take a levelling foot (Park Tool; Superior Glide; Caster Technology).
- **when_not_to_use**: Avoid them for heavy pulling loads or safety-critical joints where the only thing holding is friction inside a tube: use a through-bolt, a welded or bonded insert, or a rivet nut (see 'Blind threaded fixings'). Never use a barbed star nut in carbon fibre or other brittle tubes (use an expansion plug) (Sheldon Brown). If you need to fix something to the side of a tube rather than its end, use a clamp-on fitting or a rivet nut. If the tube's inside size varies or is unknown, a barbed or ribbed insert may be loose or impossible to fit: use an expanding type. For joining two tubes at an angle, clamp-on tube fittings are usually stronger.
- **environment_limits**: Steel star nuts and plated nuts can rust inside a wet tube; zinc-plated steel nuts resist corrosion better (Superior Glide). Rubber and thermoplastic expanding bushings rely on staying squeezed: they may relax or loosen with time, heat or vibration, so re-check them ⚑ [uncertain: no source gives figures]. Printed plugs: PLA softens above about 60 °C and degrades in sunlight (Prusa); use ASA for outdoor parts (ray of sunshine). Quill stem wedges can bind or seize inside the steerer over time (Wikipedia 'Stem (bicycle part)'). *(⚑ parts need confirming)*
- **safety_notes**: On a bicycle, a missing or loose steerer anchor lets the headset come loose, and a star nut in a carbon steerer can crack it to the point of failure (Wikipedia 'Stem (bicycle part)'); remember the anchor only pre-loads the bearings, and the stem clamp bolts must be tightened to hold the fork (Wikipedia 'Headset (bicycle part)'). Hammering in a star nut calls for eye protection and a guide so the hammer doesn't glance off ⚑ [uncertain: general advice]. Don't rely on a friction-only plug to hold a person's weight in tension ⚑ [uncertain: general advice]. Cut tube ends are sharp: deburr before fitting. *(⚑ parts need confirming)*
- **common_failures**: 1) Star nut goes in crooked or at the wrong depth: use a guided setter (Park Tool). 2) Star nut can't be removed or moved: by design; drive it deeper or through, or drill it out (Park Tool). 3) Carbon steerer cracked by a star nut (Wikipedia 'Stem (bicycle part)'). 4) Expansion plug or expanding stem slips, spins or pulls out: bolt not tight enough, wrong size for the tube's inside diameter, or rubber relaxed over time (Caster Technology) ⚑ [uncertain: relaxation]; re-tighten or use the correct size. 5) Ribbed insert too loose or won't go in: wall thickness or tube size doesn't match (Superior Glide). 6) Quill stem wedge seized or binding in the steerer: free it by loosening the bolt and tapping it down (Wikipedia 'Headset (bicycle part)' and 'Stem (bicycle part)'). 7) Printed plugs: thin flexing sections crack in brittle filament (Rossero), or the wedge sticks because layer lines catch (ray of sunshine). *(⚑ parts need confirming)*
- **related**: 
  - Blind threaded fixings (rivet nut, well nut): fitted through a hole in a tube's side wall rather than its end; a rubber well nut is a close cousin of the rubber expansion plug
  - Press-fit and expanding inserts (tap-in insert): threaded sleeves pushed or expanded into a hole in plastic or wood rather than a tube end
  - Spring-steel push-on fasteners (push nut, speed nut): use the same idea as the star nut, springy barbs that slide on one way and dig in the other
  - Collet (and keyless chuck): an outside-gripping split sleeve closed by a cone; an expansion plug is the same idea turned inside out
  - Telescoping tube twist lock: an internal expander that locks one tube inside another at any length, and releases by twisting
  - Clamp-on tube fittings (slip-on structural fittings): grip the outside of a tube, for joining tubes at angles
  - Keyless locking bush (shaft locking device): tapered rings that expand into a hub bore and shrink onto a shaft, a much stronger cousin of the cone expander
  - Self-locking wedge (wedge clamp, taper key): the wedge principle behind the quill-stem wedge and printed wedge plugs
  - Hose barb (barbed tube fitting): barbs that hold a soft hose from inside, and also seal
  - Castor: the wheel that an expanding caster stem or a threaded tube insert holds in the end of a tube leg
  - Levelling foot: the screw-in foot that a ribbed threaded insert gives a square or round tube leg a thread for

### Pictures, videos and models

- **links**: 
  - [Star Fangled Nut and Expansion Plug Installation (Park Tool, 2015)](https://www.parktool.com/en-us/blog/repair-help/star-fangled-nut-and-expansion-plug-installation): Photos of star nuts, star-nut setters and an expansion plug, with step-by-step fitting and removal *(licence: link only)*
  - [Installing a Star Nut or Compression Plug in a Threadless Headset (Park Tool, YouTube)](https://www.youtube.com/watch?v=c_-ikObUv5A): Video of driving a star nut with a setter and fitting a compression (expansion) plug (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Quill stems.JPG (AndrewDressel, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Quill_stems.JPG): Bicycle quill stems with a wedge-shaped expander nut (left) and a cone-shaped expander nut (right), per the caption in Wikipedia's 'Stem (bicycle part)' *(licence: CC BY-SA 3.0 / GFDL 1.2 or later)*
  - [Bicycle headset (threadless) exploded view-en.png (Keithonearth, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bicycle_headset_(threadless)_exploded_view-en.png): Labelled exploded drawing of a 1-1/8 in threadless headset; Wikipedia's 'Nut (hardware)' table uses it to illustrate the star nut *(licence: CC BY-SA 3.0 / GFDL 1.2 or later)*
  - [Square Threaded Inserts (Superior Glide)](https://superiorglide.com/product/square-threaded-inserts/): Product photos and a how-it-works explanation of ribbed square tube inserts with a moulded-in nut for levelling feet *(licence: link only)*
- **make_it_yourself**: 
  - [Wedge Expanding Plug for 1.5-in Square 13-ga. Tubing (ray of sunshine, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/534088-wedge-expanding-plug-for-15-in-square-13-ga-tubing): Printed square tube plug with a square wedge pulled tight by an M3 flat-head screw into a nut inserted during a print pause; closes the tube end and can't rotate *(licence: CC BY (Creative Commons Attribution))*
  - [Expanding Bar-End Plug for Road bikes (Rossero, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/821879-expanding-bar-end-plug-for-road-bikes): Printed expanding sleeve plug for handlebar ends, expanding from 18 to 21 mm with an M3 bolt and nut, redesigned with extra-flexible joints for brittle filament *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Tube Plug With Double Expanding Seal (windi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/72669-tube-plug-with-double-expanding-seal): Sliding tube plug printed in PLA and TPU: a screw pulls the hard parts together so the TPU sections spread and seal airtight at an adjustable position *(licence: Creative Commons Public Domain)*
  - [Star Nut Installer (Russell Smyth, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/466317-star-nut-installer): Printed guide tool that drives a bicycle star nut in straight and stops at 15 mm depth, using an M6 x 40 mm bolt and a rubber mallet *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [TinyWhoop Gates - PVC Pipe Connector For Any Size of Pipe (KPV, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1119072-tinywhoop-gates-pvc-pipe-connector-for-any-size-of): OpenSCAD parametric connector whose arms push inside PVC pipe with a tight fit; set the pipe's measured inside diameter plus about 0.4 mm *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: Three cut-away tube ends side by side: a star nut with its barbs bent back and biting the wall (arrow showing it can go in but not out), a ribbed insert with a nut pressing out on the walls, and an expansion plug where a bolt pulls two cones together so a split sleeve swells outward against the wall.
- **sources**: 
  - https://www.parktool.com/en-us/blog/repair-help/star-fangled-nut-and-expansion-plug-installation
  - https://www.youtube.com/watch?v=c_-ikObUv5A
  - https://www.sheldonbrown.com/gloss_st-z.html
  - https://en.wikipedia.org/wiki/Headset_(bicycle_part)
  - https://en.wikipedia.org/wiki/Stem_(bicycle_part)
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://www.castertech.com/ctc-tech-resources/tech-articles/expanding-adapter-stem-casters-a-versatile-mounting-solution/
  - https://superiorglide.com/product/square-threaded-inserts/
  - https://www.mcmaster.com/products/threaded-tube-inserts/
  - https://www.mcmaster.com/products/tube-connecting-nuts/
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:Quill_stems.JPG
  - https://commons.wikimedia.org/wiki/File:Bicycle_headset_(threadless)_exploded_view-en.png

### Finder tags

- **connects**: tube, rod or extrusion
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: silent
- **tools**: sewing or leather tools, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…e cutter or saw and a deburring tool to square and clean the tube end [uncertain: general advice].…"*
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, load, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, removability, reuse_cycles, safety_notes, tools_needed

## 222 Blind threaded fixings (rivet nut, well nut)

*clamping, magnetic & friction connections.* Threaded inserts fitted from one side only that swell behind thin sheet or a tube wall; a rubber well nut also seals and damps vibration

### What it is

- **plain_name**: A threaded metal tube or rubber plug you push into a hole from the front, which bulges out behind the sheet when you squeeze or tighten it, so a thin panel or tube wall gets a strong screw thread even though you can't reach the back
- **term**: Blind threaded insert: blind rivet nut (rivet nut) and rubber well nut (rubber-insert nut)
- **aliases**: 
  - rivet nut; blind rivet nut; rivnut; nutsert (Wikipedia 'Rivet nut'); 'RIVNUT' is a registered trade name (brand), first made by BF Goodrich (Wikipedia 'Rivet nut'; Böllhoff RIVNUT catalogue)
  - nut-sert, nut-cert (maker spellings, JC's Printables knob model); Rivkle (brand, Böllhoff)
  - plus nut; plusnut; slotted-body rivet nut; pre-bulbed rivet nut; split rivet nut ('PLUSNUT' is a brand, Böllhoff; RivetLab)
  - hex-body rivet nut; knurled rivet nut; closed-end rivet nut; countersunk (flush) rivet nut; twist-resistant rivet nut (McMaster-Carr category names)
  - rivet stud (rivstud): the same idea with a threaded stud sticking out instead of a threaded hole (Böllhoff RIVNUT catalogue)
  - well nut; wellnut; rubber nut; rubber-insert nut; rubber-coated rivet nut; expanding nut (Wikipedia 'Well nut'; McMaster-Carr; HR Fastener)
  - Rawlnut or Rawl nut (brand; the usual UK name for a well nut, Wikipedia 'Well nut')
  - blind nut; blind threaded insert; one-sided nut; threaded insert for thin sheet
- **family**: clamping, magnetic & friction connections
- **other_families**: seals & pass-throughs, everyday fasteners & fixings
- **one_liner**: A threaded insert that you push into a drilled hole from one side and then squeeze (rivet nut) or tighten a screw into (well nut), so its body swells into a collar behind the sheet or tube wall and gives you a strong thread where no nut could be held behind.
- **complexity**: Rivet nut: a single piece (a short metal tube with a flange or head at the front, a thin plain section in the middle that collapses, and a threaded section at the far end), fitted with a separate setting tool (Wikipedia 'Rivet nut'; Böllhoff). Plus nut: one piece with the plain section slit into four strips (Böllhoff). Well nut: a few parts moulded as one unit: a flanged rubber (neoprene or EPDM) sleeve with a brass or stainless nut embedded in the far end, used with your own screw (Wikipedia 'Well nut'; Rivet Nut USA).
- **how_it_works**: Rivet nut: you screw it onto the threaded rod (mandrel) of a setting tool, push it into the hole, and the tool pulls the threaded end back towards the head; the thin plain part of the body buckles outward into a ring or bulge behind the sheet, riveting itself in place, and the tool is then unscrewed, leaving a thread (Böllhoff RIVNUT catalogue p.4; Wikipedia 'Rivet nut'). A slotted plus nut splits into four 'petals' that spread over a wide area behind soft or thin material (Böllhoff PLUSNUT data sheet). Well nut: you push the rubber sleeve through the hole and tighten a screw into the embedded nut; the flange's friction stops it turning, and as the nut is drawn towards you the rubber squashes into a thick lip behind the panel, clamping the panel and sealing the hole (Wikipedia 'Well nut'). In a blind hole in solid material the squashed rubber instead presses outward on the hole walls and anchors by friction (Wikipedia 'Well nut').

### Finder attributes

- **job**: 
  - join and hold: gives thin sheet, plastic panels, tube walls and hollow sections a load-bearing screw thread that can be reached from one side only, and can also rivet two sheets together at the same time (Böllhoff RIVNUT catalogue p.4)
  - seal it, or pass cables or fluid through: a well nut seals the bolt hole against water and air, and closed-end or foam-sealed rivet nuts keep water and dirt out of the thread (Wikipedia 'Well nut'; Böllhoff RIVNUT catalogue pp.8, 22-23)
  - slow it, stop it or keep its speed steady: the rubber of a well nut damps vibration and noise, e.g. from a shaking motor (Wikipedia 'Well nut'; McMaster-Carr 'Rubber-Coated Rivet Nuts')
- **motion**: none: once set, the insert stays fixed in the hole (a well nut's rubber lets the attached part rock very slightly, which is what damps vibration)
- **degrees_of_freedom**: 0: once set, the insert cannot move in the hole. Before setting it can turn and slide in the hole, which is why the hole size and anti-turn features matter.
- **special_behaviour**: 
  - none of the listed behaviours for an ordinary rivet nut: it is simply a permanent nut fitted from one side
  - self-aligning or self-centring (well nut only, in a loose sense): the rubber lets the fixed part sit slightly out of line and isolates it from vibration ⚑ [uncertain: described only as vibration isolation by the sources, not as alignment]
  - Its own tricks: it installs blind (from one side), it can rivet sheets together and act as a nut at once, and a well nut is also a gasket and an electrical insulator (Böllhoff; Wikipedia 'Well nut'; McMaster-Carr) *(⚑ parts need confirming)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the collapsed bulge, ring or 'petals' behind the sheet and the head in front trap the sheet between them, like a rivet (Böllhoff RIVNUT catalogue; Böllhoff PLUSNUT data sheet); hex bodies in hex holes and keyed heads stop it turning (Böllhoff)
  - friction or clamping (force-fit): knurls and the clamping of the sheet stop a round rivet nut spinning; a well nut's squashed rubber clamps the panel and, in a blind hole, grips the hole walls by friction (Eugene Fasteners; Wikipedia 'Well nut')
  - spring force (a springy part presses it in place): the compressed rubber of a well nut keeps pressing on the panel ⚑ [uncertain: inferred from how it works; not stated in these words by a source] *(⚑ parts need confirming)*
- **input_output**: not applicable
- **power**: passive (no power needed); pneumatic or battery setting tools are only used to install rivet nuts faster (Böllhoff RIVNUT catalogue pp.24-27)
- **removability**: Rivet nut: permanent; the screw can be removed and refitted, but the insert itself has to be drilled out, and a spun or failed one is drilled out and replaced, going up a size if the hole is damaged (Eugene Fasteners 'Troubleshooting Rivet Nut Failures'). Well nut: removable; loosen the screw and pull it out (RivetLab; Rivet Nut USA), though Spring Creek notes that once screwed up it expands beyond the 1/2 in hole 'and will not be able to come out' until loosened.
- **reuse_cycles**: Rivet nut: once for the insert itself, but its metal thread takes the screw effectively unlimited times (Zortrax and JC's Printables knob use rivet nuts in prints for exactly this reason ⚑ [uncertain: Zortrax page could not be opened; JC only says it was used as an insert]). Well nut: a few times to many times; RivetLab calls it reusable, and HR Fastener advises replacing it if the rubber sleeve is damaged. *(⚑ parts need confirming)*
- **tools_needed**: A drill with the exact bit size from the data sheet, a deburring tool (Eugene Fasteners). Rivet nut: a setting tool fitted with the right mandrel and nose piece for the thread size: hand tools (lever or wrench type), pneumatic, pneumatic-hydraulic or battery tools (Böllhoff RIVNUT catalogue pp.24-29; Eugene Fasteners). Some types (pre-bulbed plus nuts, 'easy-install' rivet nuts) can be set by turning a screw with a simple torque hand tool or ordinary screw driver tool (Böllhoff PLUSNUT data sheet; McMaster-Carr 'Easy-Install Rivet Nuts ... Install with nothing more than a screw'); makers also set them with a bolt, nut and washer (Smoking Steel Garage video 'Install Rivnuts Without The Tool') ⚑ [uncertain: video not watched]. Well nut: only a screwdriver or hex key, sometimes a rubber mallet to seat it (Wikipedia; RivetLab; Spring Creek). *(⚑ parts need confirming)*
- **seal**: Rivet nut: none for an open-end type (water can pass through the thread); closed-end types 'seal the threads' and versions with a pre-applied PVC foam head seal 'against dust, water, air and non-petroleum based liquids' (Böllhoff RIVNUT catalogue pp.8, 23). Well nut: watertight, and described as airtight or gas-proof, because the squashed rubber lip presses round the hole and under the flange (Wikipedia 'Well nut'; Rivet Nut USA; RivetLab).
- **load**: Rivet nut: medium to heavy for its size. Böllhoff's figures for an M6 steel RIVNUT in steel plate are about 7.7 kN ultimate tension (pull-out along the screw), 4.4 kN ultimate shear and more than 21 kN thread strength; an M6 aluminium one in 2024-T4 aluminium is about 4.1 kN tension and 2.6 kN shear (Böllhoff RIVNUT catalogue p.31, averages). It is weakest in twisting: a round one can spin in its hole if the hole is oversize or the material soft (Eugene Fasteners). In thin sheet and plastics a slotted plus nut holds much more: e.g. 5.40 kN versus 2.13 kN for a standard rivet nut in 0.76 mm steel, and 3.22 kN versus 1.25 kN in 4.69 mm blow-moulded plastic (Böllhoff PLUSNUT data sheet; thread size not stated). Well nut: light; Wikipedia says well nuts 'are not particularly strong', and RivetLab says they have weaker pull-out and torque strength than rivet nuts and are not for structural use.
- **adjustable**: no for position: it is fixed in its hole. A well nut's clamping force (how hard it squeezes the panel and seal) is set by how far the screw is tightened; stop when you feel resistance (RivetLab).
- **play_and_precision**: Rivet nut: no play once set; position depends on drilling the hole accurately, and a tilted tool or a burr on the back of the hole leaves a tilted flange (Eugene Fasteners). Tolerance to sheet thickness is limited to the part's grip range, so different lengths are sold for different thicknesses (Böllhoff). Slotted plus nuts and 'oversize grip range' types cope with the widest range of thicknesses and less perfect holes (Böllhoff; Eugene Fasteners). Well nut: small but noticeable give, because the attached part sits on rubber; it tolerates a wide range of thicknesses (e.g. 0.4-4.0 mm grip for one size, Swordfish).
- **access_needed**: one side only (blind): both types are inserted and set entirely from the front of the panel or tube (Wikipedia 'Rivet nut'; Wikipedia 'Well nut'); the back only needs a little clear space for the body and bulge (McMaster-Carr sells 'Tight-Space Rivet Nuts' for limited backside clearance).
- **materials**: Rivet nuts are made of steel, stainless steel, aluminium and brass, with alloy-steel high-strength versions (Böllhoff RIVNUT catalogue pp.5-6). They install in steel, aluminium, plastics, composites and fibreglass, in flat sheet and in tubes (Wikipedia 'Rivet nut'; Böllhoff), in material as thin as 0.5 mm (0.020 in) (Böllhoff p.4). Slotted plus nuts suit soft and brittle plastics (rotomoulded, blow-moulded, pultruded, SMC, vinyl extrusions) and thin sheet (Böllhoff PLUSNUT data sheet). Choose aluminium rivet nuts for aluminium panels and stainless for stainless or marine use to avoid rust and galvanic corrosion (Eugene Fasteners). Well nuts: a neoprene (chloroprene) or EPDM rubber body with a brass or stainless steel nut (Wikipedia 'Well nut'; Rivet Nut USA); used in metal, plastic, composite, glass, plywood and tube (McMaster-Carr; RivetLab). 3D prints: rivet nuts can be pressed or heat-set into printed parts as ordinary inserts (Hackaday comment; JC's Printables knob in PCTG), and flexible TPU or TPE can be printed into home-made well nuts (Kalafatis; ParametricFab).
- **maker_difficulty**: easy to moderate: well nuts are easy (drill a hole, push in, tighten a screw). Rivet nuts are moderate: a hand setting tool is cheap, but you must drill the exact hole size, deburr it and pick the right grip length, or the insert spins or pulls out (Eugene Fasteners).

### Making it

- **processes**: 
  - off-the-shelf part: rivet nuts, plus nuts, rivet studs and well nuts are bought and fitted; they are not made at home
  - sheet metal: the main use, adding threads to thin steel or aluminium sheet, van and car bodies, enclosures and aircraft skins (Wikipedia 'Rivet nut'; Böllhoff)
  - tube and extrusion: square, round and rectangular steel or aluminium tube walls (Böllhoff 'tubular materials')
  - 3D print (FDM): rivet nuts used as pressed-in or heat-set inserts in printed parts; well nuts to fix printed parts to thin panels; printed TPU or TPE well nuts with an embedded nut (Hackaday; JC; Kalafatis; ParametricFab)
  - woodwork: well nuts in plywood, and in blind holes in solid material (RivetLab; Wikipedia 'Well nut')
  - laser cut: rivet nuts and well nuts in cut plastic or composite panels ⚑ [uncertain: no specific source; follows from the materials list] *(⚑ parts need confirming)*
- **print_in_place**: partly: a home-made well nut can be printed in flexible TPU or TPE, but it needs a metal nut added (Kalafatis's design uses the M4, M5 and M6 embedded nuts 'popular in 3D printing'; ParametricFab's uses an M5 nut on the back). Metal rivet nuts can't be printed; they are fitted to printed parts afterwards.
- **making_tips_3d_printing**: 1) Two ways to use a rivet nut in a print: (a) as an ordinary insert: press it into a close-fitting hole so its knurls or splines bite (a Hackaday reader: 'I always press fit rivet nuts into a print ... The splines bite into the plastic and almost never spin'), or heat it in with a soldering iron like a heat-set insert (JC set one in PCTG at 330 °C and notes 'It is not compressed'); (b) as a true blind nut through a thin printed wall, where the bulge forms inside a hollow part. For (b), design the wall thickness to fall inside the rivet nut's grip range (for example 0.75-2.00 mm for the shortest M6 flat-head RIVNUT, Böllhoff) and use the data-sheet hole size (8.50-8.60 mm for that M6). 2) Printed plastic is soft and can crack: prefer a slotted plus nut, which Böllhoff designed for plastics with 'minimal radial stresses in the setting process to avoid the risk of breakage on soft or fragile materials', or a hex-body rivet nut in a printed hex hole so it can't spin (Böllhoff; Eugene Fasteners recommends hex bodies for soft materials) ⚑ [uncertain: no published test of crimped rivet nuts in FDM walls was found]. 3) Make the area round the hole solid (extra perimeters or 100% infill) so the setting force and the bulge bear on solid plastic, not infill ⚑ [uncertain: general printing advice]. 4) Squeeze gently: over-setting crushes soft material and can strip the insert's own thread (Eugene Fasteners); a hand tool gives better feel than a pneumatic one ⚑ [uncertain]. 5) To fix a printed part to a thin panel you can only reach from the front (a car panel, kayak hull, pegboard), use a well nut through the panel and a screw through the printed part; the rubber also stops vibration cracking the print ⚑ [uncertain: vibration benefit for prints inferred from the well nut's damping]. 6) Printed well nuts: print in soft flexible filament (Kalafatis uses 83A TPE) with a hexagonal pocket for a standard nut; ParametricFab's TPU windscreen well nut 'should probably only be used temporarily', so treat printed versions as light-duty. 7) For fixing into a 3D-printer's aluminium extrusion slot rather than a hole, see the printed 'push rivet nut' for 15 mm extrusions (famichu, printed in ABS or PC with an M2 self-tapping screw) and the 'Aluminium-extrusion connectors' entry. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'rivet nut' / 'blind rivet nut' / 'rivnut' / 'nutsert' (flat head, reduced or thin head, countersunk; round, knurled, hex or half-hex body; open end or closed end), 'plus nut' / 'slotted rivet nut' / 'pre-bulbed rivet nut' for plastics and thin sheet, 'rivet stud' (external thread), 'rivet nut tool' or 'rivet nut setting tool' (hand lever, wrench type, pneumatic-hydraulic, cordless) with mandrels for M3-M12 or #4-40 to 1/2-13 (Böllhoff RIVNUT catalogue; McMaster-Carr categories 'Rivet Nuts', 'Twist-Resistant Rivet Nuts', 'Closed-End Twist-Resistant Rivet Nuts', 'Flush-Profile Rivet Nuts', 'Rivet Nuts For Plastic and Composites', 'Easy-Install Rivet Nuts', 'Tight-Space Rivet Nuts'). For well nuts: 'well nut', 'rubber well nut', 'rubber-insert nut', 'rubber-coated rivet nut' (McMaster-Carr), 'neoprene well nut' or 'EPDM well nut' with brass insert, sizes about #6-32 to 3/8-16 and M3 to M10 (Rivet Nut USA; McMaster-Carr). Specialised versions: rivet nuts with a pre-applied foam seal under the head, anti-vibration rubber rivet nuts with a moulded-in washer, and rivet nuts with a thread-locking feature (Böllhoff pp.22-23).
- **rules_of_thumb**: 
  - Pick the rivet nut length (grip range) to suit the sheet thickness: each part only works over a band of thicknesses, e.g. Böllhoff's M6 flat-head round-body RIVNUT comes in 0.75-2.00, 2.00-3.50, 3.50-5.00 and 5.00-6.50 mm grips, identified by marks on the head (Böllhoff RIVNUT catalogue p.7). Too short and the body can't reach the back; too long and it can't collapse tight (Eugene Fasteners).
  - Drill the exact hole size on the data sheet, e.g. 8.50-8.60 mm for an M6 round-body RIVNUT, 9 mm for an M6 RIVKLE and 8.80-8.93 mm for an M6 plus nut (Böllhoff RIVNUT catalogue pp.7, 12, 14); even 0.005 in (0.13 mm) oversize can let the knurls fail to grip so it spins (Eugene Fasteners).
  - Deburr the back of the hole after drilling: a burr stops the body collapsing properly and tilts the flange (Eugene Fasteners).
  - Rivet nuts work in material as thin as 0.5 mm (0.020 in) (Böllhoff RIVNUT catalogue p.4), but thin aluminium panels of about 1 mm (0.040 in) and below can 'crater' if set too hard (Eugene Fasteners).
  - Don't tighten the screw beyond the rivet nut's rated torque, which equals its maximum setting load; e.g. about 130 lb-in (14.7 N·m) for a 1/4-20 steel RIVNUT and 60 lb-in (6.8 N·m) for aluminium, or the screw breaks or the insert keeps collapsing until the thread strips (Böllhoff RIVNUT catalogue p.32).
  - For soft or slippery materials and high screw torque, use a hex-body rivet nut in a hex hole, a knurled or keyed one, or a closed-end twist-resistant type (Böllhoff RIVNUT catalogue pp.10-11, 23; Eugene Fasteners; McMaster-Carr).
  - For plastics, fibreglass and thin sheet use a slotted plus nut: in Böllhoff's tests it held about 2.5 times more than a standard rivet nut in 0.76 mm steel (5.40 vs 2.13 kN) and 7 times more in 3.04 mm rotomoulded plastic (0.7 vs 0.1 kN) (Böllhoff PLUSNUT data sheet).
  - Outdoors or at sea use 18-8 or 316 stainless rivet nuts, and avoid stainless in aluminium where galvanic corrosion is a risk (Eugene Fasteners).
  - Well nuts: drill the hole the well nut is sized for (e.g. 1/2 in for Spring Creek's kayak well nuts), tighten until you feel resistance and stop, and don't use them where the joint is structural (RivetLab; Spring Creek).
  - Well nuts have a working temperature of about -30 °C to +80 °C for neoprene with brass inserts (Swordfish product data).

### When to use it

- **everyday_examples**: 
  - The rubber well nuts that hold a motorcycle windscreen or fairing panels, and accessory mounts on sit-on-top kayaks without access inside the hull (Kalafatis's Printables 'Wellnuts'; Spring Creek)
  - Rivet nuts in a car, van or trailer body for roof racks, panels and fittings, and in the tubular frames of furniture and equipment (Böllhoff 'tubular materials') ⚑ [uncertain: vehicle examples from general knowledge, not an opened source]
  - Aircraft inspection covers and static dischargers screwed into rivet nuts in the skin (Wikipedia 'Rivet nut') *(⚑ parts need confirming)*
- **when_to_use**: Use a blind threaded fixing when you need a proper screw thread in something too thin to tap, and you can't reach the back to hold a nut: sheet-metal enclosures, car and van panels, box-section tube frames, plastic tanks and hollow mouldings, and composite or fibreglass panels (Wikipedia 'Rivet nut'; Böllhoff). A rivet nut is a good replacement for a welded-on nut because it doesn't distort the panel, burn the paint or give off welding fumes, and it can go in after painting (Wikipedia 'Rivet nut'; Böllhoff). Choose a well nut when you also want a watertight seal, vibration and noise damping, electrical isolation between metals, or the option to remove it later: boats, kayaks, fairings, water tanks, glass and brittle panels (Wikipedia 'Well nut'; Rivet Nut USA; RivetLab).
- **when_not_to_use**: If you can reach both sides, an ordinary bolt and nut is simpler and stronger (see 'Ordinary screw joint'). For thick plastic or 3D prints, a heat-set insert, press-fit insert or captive nut pocket is usually easier than a crimped rivet nut (see those entries). For a permanent join of two sheets with no thread needed, use a blind (pop) rivet. For high-volume sheet-metal parts where both sides are reachable, self-clinching (press-in) nuts sit flush and are cheaper per part. Don't use a well nut for structural or high-torque joints, because it is 'not particularly strong' and the rubber lets the joint move (Wikipedia 'Well nut'; RivetLab); use a rivet nut or through-bolt. Don't use a standard round rivet nut in soft plastic or thin soft aluminium if it will see high screw torque: it can spin or crater the sheet; use a plus nut or hex-body type (Eugene Fasteners; Böllhoff).
- **environment_limits**: Rivet nuts: zinc-plated steel ones rust in marine environments, and stainless rivet nuts in aluminium panels can cause galvanic corrosion; match the material to the panel (Eugene Fasteners). Open-end rivet nuts let water through the thread: use closed-end or foam-sealed types on wet or sealed panels (Böllhoff). Well nuts: rated about -30 °C to +80 °C for neoprene with brass inserts (Swordfish); the rubber can age, crack or relax over the years, especially in sun and heat, so the clamp and seal may need re-tightening or the well nut replacing ⚑ [uncertain: no source gives ageing data; HR Fastener only advises replacing a damaged sleeve]. Well nuts resist vibration and don't corrode, since the brass insert is sealed in rubber (Wikipedia; RivetLab). *(⚑ parts need confirming)*
- **safety_notes**: Drilling sheet metal leaves sharp burrs and swarf: wear eye protection and deburr the hole (Eugene Fasteners) ⚑ [uncertain: eye protection is general advice]. Because you can't see behind the panel, check what is behind it (wiring, fuel or brake lines, a fuel tank or a kayak's hull) before drilling, and choose screw lengths that won't reach it ⚑ [uncertain: general advice]. Keep fingers clear of the jaws of lever-type setting tools ⚑ [uncertain: general advice]. A well nut is an electrical insulator, so it will not earth (ground) whatever is screwed to it (McMaster-Carr: shields threads from 'accidental electrical contact'). Don't rely on well nuts for anything safety-critical (RivetLab: not for structural use). *(⚑ parts need confirming)*
- **common_failures**: 1) Rivet nut spins when the screw is tightened or loosened: hole oversize, material too soft for the knurls, or not set hard enough; drill it out and fit a new one in a correct hole, going up a size if needed, or use a hex-body, knurled or plus-nut type (Eugene Fasteners). 2) Pulls out under load: wrong grip range for the thickness, thin aluminium cratered by over-setting, or load too high (Eugene Fasteners); use a plus nut to spread the load. 3) Stripped or damaged thread: over-setting crushes the threaded section, or the screw is cross-threaded or bottoms out in a closed-end nut (Eugene Fasteners; Böllhoff p.32). 4) Won't go in or won't set: hole undersize, low air pressure, worn or short mandrel (Eugene Fasteners). 5) Tilted flange or marked paint: tool not held square, or a burr on the back of the hole (Eugene Fasteners). 6) Corrosion: wrong material for the environment (Eugene Fasteners). 7) Well nut spins with the screw or pulls through: hole too big or rubber over-squeezed; tighten only until resistance is felt (RivetLab). 8) Well nut leaks or loosens after years: rubber aged or damaged; replace it (HR Fastener) ⚑ [uncertain: ageing]. 9) Printed well nut tears or creeps: flexible printed plastic is weaker than moulded rubber; ParametricFab suggests printed ones only as a temporary fix. *(⚑ parts need confirming)*
- **related**: 
  - Blind rivet (pop rivet): also set from one side by pulling a mandrel, but joins sheets permanently and leaves no thread
  - Internal tube anchors (star nut, expansion plug): fitted into the open end of a tube rather than through a hole in its wall; a rubber expansion plug is a close cousin of the well nut
  - Self-clinching fastener (press-in nut or stud): a nut pressed permanently into sheet metal, but it needs access to both sides and a press
  - Heat-set threaded insert: the usual way to add a metal thread to a 3D print when the plastic is thick enough; melted in rather than crimped
  - Press-fit and expanding inserts (tap-in insert): threaded inserts pushed or expanded into a hole in thick plastic or wood, not bulging behind a thin sheet
  - Spring-steel push-on fasteners (push nut, speed nut, U-nut): a clip-on nut that grips the edge of a panel; needs edge access, not a hole in the middle
  - Captive nut pocket (nut trap) and mid-print embedding: ordinary nuts trapped inside a 3D print instead of an insert
  - Aluminium-extrusion connectors (T-slot nuts and brackets): drop-in nuts for the slots of aluminium extrusion, the extrusion's own blind fixing
  - Temporary sheet fastener (Cleco-type spring pin): also fitted from one side, but only holds sheets temporarily while drilling or riveting
  - Gasket and O-ring seal entries: for sealing without a thread; a well nut is effectively a gasket and a nut in one
  - Hollow-wall anchors: toggles, molly bolts and self-drilling plasterboard anchors use the same blind idea in plasterboard walls; Wikipedia compares the well nut to a molly bolt
  - Wall plug: a plastic sleeve that swells in a drilled hole in brick or concrete as a screw goes in; for solid walls, where a rivet nut or well nut has no hollow space behind to bulge into

### Pictures, videos and models

- **links**: 
  - [Blindklinkmoer opengewerkt met bout.jpg (Erik Wannee, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Blindklinkmoer_opengewerkt_met_bout.jpg): A rivet nut cut open with an M5 bolt inside, showing the thin collapsing section and the thread *(licence: CC BY-SA 4.0)*
  - [Well nut.jpg (Lithopsian, Wikimedia Commons, 2017)](https://commons.wikimedia.org/wiki/File:Well_nut.jpg): Three 15 mm well nuts, showing the captive nut, the rubber cylinder and flange, and a hex bolt *(licence: CC BY-SA 4.0)*
  - [Blindnietmutter.jpg (PeterScha, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Blindnietmutter.jpg): Photo of an M8 stainless steel (V2A) blind rivet nut *(licence: CC BY-SA 4.0)*
  - [Operation of hand riveting tool for blind rivet nuts (YatoTeam, YouTube)](https://www.youtube.com/watch?v=ykvbCXs7slU): Video of setting blind rivet nuts with a hand lever tool (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [These threaded inserts aren't made for 3D prints (but work amazingly well) (Made with Layers, Thomas Sanladerer, YouTube)](https://www.youtube.com/watch?v=lYXTiJo_FQQ): Video testing alternative threaded inserts, including rivnuts, in 3D prints (summarised by Hackaday, 15 April 2024; title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Wellnuts (Apostolos Kalafatis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1174824-wellnuts): Printable M4, M5 and M6 rubber-style well nuts for motorcycle fairings and windscreens, printed in 83A TPE with a standard nut embedded. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Windshield Well Nut 2008+ klr650 (ParametricFab, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/264580-windshield-well-nut-2008-klr650): TPU well nut with an M5 nut on the back, for a motorcycle windscreen; the designer says printed ones 'should probably only be used temporarily'. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Well nut for 1/4" pegboard (KG3DPrinting, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/161882-well-nut-for-14-pegboard): A printed anchor that works like a well nut in plastic pegboard holes, sized for a #6 wood screw, with a STEP file to change the dimensions. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [6mm Knob using Rivet-Nut Insert (JC, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1373120-6mm-knob-using-rivet-nut-insert): A printed PCTG clamp knob with a McMaster-Carr rivet nut melted in with a soldering iron at 330 °C as a thread insert (not crimped). Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A three-step cross-section through a thin sheet: (1) the rivet nut on the tool's threaded rod pushed into the hole, (2) the rod pulling the thread back so the thin middle section buckles into a ring behind the sheet, (3) the tool removed and a bolt holding a bracket; beside it, a well nut shown before and after tightening, its rubber squashed into a sealing lip behind the panel.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rivet_nut
  - https://en.wikipedia.org/wiki/Well_nut
  - https://www.rivetnutusa.com/wp-content/uploads/2018/11/RIVNUT-TheOriginalRivnut.pdf
  - https://www.rivetnutusa.com/wp-content/uploads/2019/01/Engineering-Data-Specifications-and-Mechanical-Properties-Information_Bollhoff-Plusnut.pdf
  - https://www.eugenefast.com/home/page/resources/how-to-install-rivet-nuts
  - https://www.eugenefast.com/home/page/resources/troubleshooting-rivet-nut-failures
  - https://www.mcmaster.com/products/rivet-nuts/
  - https://www.mcmaster.com/products/well-nuts/
  - https://rivetlab.com/blogs/news/well-nuts-a-hidden-gem
  - https://rivetlab.com/products/m3-well-nuts-rubber-in-rnm3250
  - https://www.rivetnutusa.com/specialty-fasteners/other-fasteners/well-nut-fasteners/
  - https://hrfastener.com/well-nuts-benefits-and-how-to-use/
  - https://www.swordfish-tools.com/product-page/rubber-well-nuts-sae-metric-thread
  - https://www.springcreek.com/product/paddle-sports/stabilizer-float-package-accessories-replacement-parts/well-nuts-rubber-expandable-nuts/
  - https://hackaday.com/2024/04/15/alternate-threaded-inserts-for-3d-prints/
  - https://commons.wikimedia.org/wiki/Category:Rivet_nuts
  - https://commons.wikimedia.org/wiki/File:Blindklinkmoer_opengewerkt_met_bout.jpg
  - https://commons.wikimedia.org/wiki/File:Well_nut.jpg
  - https://commons.wikimedia.org/wiki/File:Blindnietmutter.jpg
  - https://www.youtube.com/watch?v=ykvbCXs7slU
  - https://www.youtube.com/watch?v=FJ4gF2tXRBE
  - https://www.youtube.com/watch?v=lYXTiJo_FQQ
  - https://api.printables.com/graphql/ (models 1174824, 264580, 161882, 1373120, 126459)

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…asher (Smoking Steel Garage video 'Install Rivnuts Without The Tool') [uncertain: video not watched]. Well nut…"*
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, holding_principle, making_tips_3d_printing, processes, reuse_cycles, safety_notes, special_behaviour, tools_needed

## 257 Ordinary screw joint (bolt and nut, machine screw)

*clamping, magnetic & friction connections.* A bolt through the parts into a nut or tapped thread, clamping them together; the baseline everything else is compared with

*Also covers:* Also covers washers by job, the carriage (coach) bolt, and robot-kit hole grids.

### What it is

- **plain_name**: A metal screw or bolt goes through holes in the parts and is tightened into a nut, or into a hole with a thread cut in it, squeezing the parts together; undo it and everything comes apart again
- **term**: Bolted joint (screw joint; threaded fastener joint with a bolt and nut, or a machine screw in a tapped hole)
- **aliases**: 
  - bolted joint, bolted connection (Wikipedia 'Bolted joint')
  - screw joint, screwed joint: a screw into an internal thread in one of the parts instead of a nut (Wikipedia 'Screw joint')
  - nut and bolt, through-bolt joint
  - machine screw and nut; machine screw into a tapped (threaded) hole (Wikipedia 'Screw')
  - cap screw, socket-head cap screw, hex bolt, set of 'nuts, bolts and washers'
  - tension joint and shear joint (the two main engineering types: preloaded, slip-resistant or bearing type) (Wikipedia 'Bolted joint')
  - threaded fastener, threaded connection
  - carriage bolt (coach bolt, round-head square-neck bolt; cup-head bolt in Australia and New Zealand): the square neck under its domed head locks in a square hole or sinks into wood, so the nut can be done up from the other side with one spanner (Wikipedia 'Carriage bolt')
- **family**: clamping, magnetic & friction connections
- **other_families**: everyday fasteners & fixings
- **one_liner**: A threaded fastener passes through clearance holes and is tightened into a nut or a tapped hole, stretching slightly like a stiff spring so it clamps the parts together; it is the standard removable joint that other connections are compared with.
- **complexity**: A few parts: a bolt or machine screw (head, shank, thread), a nut or a threaded (tapped) hole in one part, and usually one or two washers; sometimes a locking part such as a nylon-insert nut or threadlocker (Wikipedia 'Bolted joint'; Wikipedia 'Washer (hardware)').
- **how_it_works**: Turning the head or nut makes the bolt climb its thread, which stretches the bolt a tiny amount and squeezes the parts together with an equal force (preload or clamp load) (Wikipedia 'Bolted joint'). The squeezed parts then hold by friction, so sideways (shear) loads are carried by friction between the faces rather than by the bolt, and pulling loads are shared between bolt and parts, with the bolt typically seeing only about 10-20% of the extra load in a well-designed joint (Wikipedia 'Bolted joint'). If the joint is not tightened much, sideways loads are carried by the bolt pressing on the sides of its holes instead (bearing-type joint). Undoing the nut or screw releases the clamp so the parts can be separated and the joint reused.

### Finder attributes

- **job**: 
  - join and hold: the general-purpose way to fasten parts so they can be taken apart again
  - lock, and release by hand: undone with a screwdriver, hex key or spanner rather than by hand alone
  - tighten and hold tension: the tightening torque sets the clamping force (Wikipedia 'Bolted joint')
- **motion**: none: a tightened bolted joint doesn't move. A loosely fitted bolt can also act as a pivot pin (e.g. a clevis linkage), which is then a bearing-type joint (Wikipedia 'Bolted joint').
- **degrees_of_freedom**: 0 when tightened. A loose bolt used as a pivot leaves 1 (rotation about the bolt).
- **special_behaviour**: 
  - none: it simply clamps. (Tightened to the right preload it resists loosening and fatigue much better, but that is good practice rather than a special behaviour) (Wikipedia 'Bolted joint'; Bolt Science)
- **holding_principle**: 
  - friction or clamping (force-fit): the preload squeezes the parts so friction carries sideways loads (slip-resistant joint) (Wikipedia 'Bolted joint')
  - shape (the parts interlock; form-fit): the thread flanks lock bolt and nut together, and in a bearing-type joint the bolt shank bears on the hole walls (Wikipedia 'Bolted joint')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: undone with the same tool used to tighten it.
- **reuse_cycles**: many times: a steel bolt and nut can be undone and refitted many times; a thread tapped straight into a soft part (aluminium, plastic) wears with repeated reuse, so fit a threaded insert if it will be undone often (Wikipedia 'Screw joint'; Hubs). An all-metal deformed-thread locknut can be reused about 10 times before it loses its locking grip (NASA RP-1228), and it is good practice to replace old fasteners with new ones of the same grade (Wikipedia 'Bolted joint').
- **tools_needed**: screwdriver, hex (Allen) key or Torx driver for machine screws; spanner (wrench) or socket for hex bolts and nuts, often a second one to hold the nut; a torque wrench or torque screwdriver when the clamping force matters (Wikipedia 'Bolted joint'); a drill and tap to cut threads in a part instead of using a nut.
- **seal**: none: the joint does not seal by itself; add a gasket, O-ring or sealant between the faces, and a sealing washer or thread sealant on the bolt, if it must be watertight ⚑ [uncertain]. *(⚑ parts need confirming)*
- **load**: Medium to heavy, depending on bolt size and grade (e.g. ISO property classes 5.8, 8.8, 10.9 give tensile strengths of 500, 800 and 1000 MPa) (Wikipedia 'Screw'). Strong in shear when preloaded (friction grip) and in tension as long as the preload exceeds the pulling load; once the parts separate the bolt carries all the load (Wikipedia 'Bolted joint'). Weak points: the threads (strip in soft materials if too short), fatigue under repeated loads if not tight enough, and the clamped material itself when it is soft plastic or wood (Wikipedia 'Bolted joint'; CNC Kitchen).
- **adjustable**: yes: the parts can be shifted within the clearance of the holes (or along slotted holes) before tightening, and the clamping force is set by how tight it is done up (Wikipedia 'Bolted joint').
- **play_and_precision**: Before tightening there is play equal to the clearance hole minus the bolt, e.g. an M3 screw in a 3.2 / 3.4 / 3.6 mm hole for close / normal / loose fit (ISO 273) (Engineering Hardware). Once tightened, friction removes the play, but the parts will not return to exactly the same spot after reassembly unless dowel pins or fitted (close-tolerance) bolts locate them ⚑ [uncertain]. Tolerates sideways misalignment up to the hole clearance; the clamped faces should be kept close to parallel; NASA RP-1228 says this is normally better than using costly self-aligning (conical) washers and nuts. *(⚑ parts need confirming)*
- **access_needed**: both sides for a bolt and nut (one side to hold the head, one to turn the nut); one side only (blind) when the screw goes into a tapped hole, threaded insert or captive nut (Wikipedia 'Screw joint').
- **materials**: Bolts, screws and nuts are usually steel (plain, zinc-plated or stainless) (Wikipedia 'Screw'); brass, aluminium and nylon versions exist for light or non-magnetic uses ⚑ [uncertain]. They can clamp almost any rigid material: metal, wood, plywood, plastics, 3D prints, acrylic and composites. Soft or brittle clamped materials (plastic, wood, acrylic) need washers to spread the load and should not be over-tightened (Wikipedia 'Washer (hardware)'; filamentspecs). A thread tapped directly in the part needs a strong material (steel, aluminium) or a longer thread (Nord-Lock). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: buy standard screws, nuts and washers and drill clearance holes; tapping threads needs a tap set and a little care (Hubs).

### Making it

- **processes**: 
  - off-the-shelf part: bolts, machine screws, nuts and washers are bought, not made
  - 3D print (FDM): print clearance holes, counterbores and nut pockets into the part (Hubs; BOSL2)
  - 3D print (resin): same, holes are usually more accurate than FDM ⚑ [uncertain]
  - CNC: drilled and tapped holes in metal or plastic
  - laser cut: clearance holes and slots in sheet parts, often with a nut held in a T-slot
  - woodwork: through-bolts, or machine screws into threaded inserts or cross dowels
  - sheet metal: drilled or punched holes; self-clinching or rivet nuts give a thread in thin sheet *(⚑ parts need confirming)*
- **print_in_place**: no: the screw and nut are separate metal parts added after printing (they can be embedded mid-print, but that is a separate technique).
- **making_tips_3d_printing**: 1) Holes: vertical holes print undersized; print them slightly small and drill to size if accuracy matters (Hubs 'How to design parts for FDM 3D printing'). Print a hole test (see make_it_yourself) to find your printer's clearance sizes. 2) Horizontal holes droop at the top; use a teardrop or octagonal shape (BOSL2 screw_hole() has a teardrop option). 3) Counterbores for screw heads that start in mid-air can be printed without supports by a few layers of bridging, or by a thin sacrificial layer drilled out afterwards (Hackaday 'Look Ma, No Support For My Floating Holes!'). 4) Walls around a threaded hole should be at least as thick as the screw diameter (e.g. 5 mm for M5), or the part may bulge, split or delaminate (Hubs). 5) Nut pockets: 0.2 mm larger than the nut (0.1 mm per side) is a starting point (Hubs); a nut pocket where the screw pulls the nut against solid plastic (bottom pocket) held 166 kg in CNC Kitchen's PETG tests versus 86 kg for a side pocket. 6) Don't over-tighten: plastic under the head creeps and the clamp loosens over time; an M6 bolt through PLA lost about 3% and through PETG about 11.5% of its undoing torque in a week (Amza et al. 2021). Use large washers to spread the load (filamentspecs). 7) For parts that will be taken apart often, use heat-set inserts or nuts rather than screwing into plastic (Hubs; CNC Kitchen). 8) PLA softens above about 60 °C, so clamped PLA parts may loosen in a hot place (Prusa knowledge base).
- **off_the_shelf_parts**: Hex bolts, socket-head cap screws (SHCS), button-head and countersunk (flat-head) screws, pan-head and cheese-head machine screws; hex nuts, nylon-insert lock nuts (nyloc), flange nuts, square nuts, thin jam nuts; flat washers, fender (penny) washers, conical (Belleville) washers; threadlocker; threaded rod and studs. Metric sizes (M2, M2.5, M3, M4, M5, M6...) and ISO property classes (e.g. 8.8, A2-70 stainless) are the terms used in catalogues (Wikipedia 'Screw'; Wikipedia 'Nut (hardware)'; NASA RP-1228). Washers by job (Wikipedia 'Washer (hardware)'): plain (flat) washers spread the load and cover a hole bigger than the nut; fender, penny or repair washers have a large outside diameter for thin sheet metal and for holes enlarged by rust or wear; hardened steel washers keep the preload in high-quality joints by stopping the surface under the nut from being dented (brinelling); insulating and shoulder washers (often nylon) keep steel screws off aluminium to prevent galvanic corrosion and isolate the screw electrically; a torque washer with a square hole and teeth stops a carriage bolt spinning in wood. Carriage (coach) bolts, with a square neck under a domed head (Wikipedia 'Carriage bolt').
- **rules_of_thumb**: 
  - Clearance holes (ISO 273, fine / medium / coarse): M2 2.2/2.4/2.6 mm, M2.5 2.7/2.9/3.1, M3 3.2/3.4/3.6, M4 4.3/4.5/4.8, M5 5.3/5.5/5.8, M6 6.4/6.6/7.0, M8 8.4/9.0/10.0 (Engineering Hardware 'Clearance Hole Sizes (ISO 273)').
  - Thread engagement in a tapped hole: at least about 1 x the screw diameter in steel and 2 x in aluminium (Nord-Lock 'The Experts: Thread engagement in a tapped hole'); at least 1-1.5 x diameter even in steel, and more in plastics (Field Fastener 'Rules of Thumb for Thread Engagement').
  - The FAA generally requires at least one thread to protrude beyond the nut (Wikipedia 'Bolted joint').
  - Tightening torque is roughly T = K x F x d, with the nut factor K about 0.2 for dry steel (Wikipedia 'Bolted joint'); NASA suggests 0.15 as a more realistic typical value for steel on steel (NASA RP-1228). About 50% of the torque is lost to friction under the head or nut, 40% in the threads, and only about 10% stretches the bolt; lubrication can cut the torque needed by 15-25% (Wikipedia 'Bolted joint').
  - Preload for structural joints: at least 75% of the fastener's proof load for higher-strength fasteners, up to 90% for permanent ones (Wikipedia 'Bolted joint').
  - Setting preload by feel is accurate to about +/-35%, with a torque wrench about +/-25%, and by measuring bolt stretch about +/-3-5% (Industrial Fasteners Institute table in NASA RP-1228, Table VII).
  - Choose a bolt length so the threaded part does not sit in the shear plane between the parts; add washers to adjust (NASA RP-1228).
  - Helical spring (split) lock washers are flat by the time the bolt is tight and give no locking; use preload, prevailing-torque nuts or threadlocker instead (NASA RP-1228; Bolt Science says spring lock washers can even aid self-loosening).
  - 3D prints: wall around a threaded hole at least equal to the screw diameter (Hubs); even 1 Nm on an M3 screw gives more than 1500 N of clamping force, plenty for most printed assemblies (CNC Kitchen).

### When to use it

- **everyday_examples**: 
  - Meccano (brand) and similar construction sets, whose metal strips and plates are joined with small nuts and bolts through holes at a standard 1/2 in (12.7 mm) spacing (Wikipedia 'Meccano')
  - Car wheel nuts, tightened to a set torque (Wikipedia 'Bolted joint')
  - Steel structures and machines, where bolted joints are 'one of the most common elements' (Wikipedia 'Bolted joint')
  - Flat-pack furniture, bicycles and 3D printers held together with hex-key machine screws ⚑ [uncertain]
  - Robot building kits with a fixed grid of holes, such as goBILDA (brand), with 4 mm holes on an 8 mm grid for M4 screws, and its inch-based relative Actobotics (brand) (Game Manual 0) *(⚑ parts need confirming)*
- **when_to_use**: Use it whenever parts must be strong, easy to make and able to come apart again for repair, adjustment or transport: frames, brackets, enclosures, robot and 3D-printer parts, jigs and prototypes. Parts are cheap and standard, the clamping force can be set with a torque tool, positions can be adjusted before tightening, and the joint can be undone and redone many times (Wikipedia 'Bolted joint'). It is the baseline to compare every other connection against. Use a carriage bolt through wood or a square-holed metal strap when you can only turn the nut: the square neck stops the bolt turning, and because its smooth domed head can't be gripped from outside, it is used in locks and hinges that must only be undone from one side (Wikipedia 'Carriage bolt').
- **when_not_to_use**: Avoid it when you can't reach both sides and have no threaded hole (use a blind rivet, rivet nut or well nut instead); when you need tool-free, very fast assembly (use a snap fit, cam lock or quick-release pin); when parts must line up exactly every time (add dowel pins); when heavy vibration is expected without proper preload or locking (use locknuts, threadlocker or rivets) (Bolt Science); when the joint must seal without extra parts (add a gasket); or in thin, soft material that crushes under the head (use large washers, inserts or glue) (Hubs; filamentspecs). For permanent, cheap mass production, rivets, welding, clinching or snap fits are faster.
- **environment_limits**: Vibration and small sideways slips are the main cause of loosening; keep the preload high enough to stop the joint slipping (Bolt Science). Differences in temperature or between clamped materials also cause slip and loosening (Bolt Science). Corrosion, especially steel against aluminium or in damp conditions, and 'embedding' (the surfaces settling) lose preload over time (Wikipedia 'Bolted joint'). Plastic clamped parts creep: 3% loss for PLA and 11.5% for PETG in one week at room temperature in one test, more after UV ageing for PETG (Amza et al. 2021); PLA softens above about 60 °C (Prusa).
- **safety_notes**: Over-tightening can strip threads or stretch a bolt past its limit so it loses clamping force (Wikipedia 'Bolted joint'). Use bolts of the right strength grade for anything load-bearing or overhead, and beware of counterfeit fasteners with false grade markings (Wikipedia 'Screw'). A loosened bolt in a moving machine or vehicle can let parts fall off; check critical joints. Cut bolt ends can be sharp ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Loosening under vibration because the joint slips sideways; fix by tightening properly (enough preload), and use prevailing-torque locknuts or threadlocker rather than split spring washers (Bolt Science; NASA RP-1228). Stripped threads from too short an engagement or soft material; use a longer thread, a nut or an insert (Nord-Lock; Wikipedia 'Bolted joint'). Fatigue cracking of the bolt from under-tightening (Wikipedia 'Bolted joint'). Crushed or cracked plastic or wood under the head; use washers and less torque (CNC Kitchen; filamentspecs). Preload loss over time from creep and embedding; re-check torque (Wikipedia 'Bolted joint'; Amza et al. 2021). Holes out of line so the screw won't go in; use clearance holes of the right size (ISO 273).
- **related**: 
  - Self-tapping screw into plastic (thread-forming screw): no nut or tapped hole needed, but the plastic thread wears out after a few uses
  - Heat-set threaded insert: a brass insert melted into a printed or moulded hole gives a durable metal thread for machine screws
  - Captive nut pocket (nut trap): a printed pocket that holds a standard nut, so the screw can be tightened from one side
  - Blind threaded fixings (rivet nut, well nut): give a thread in thin sheet or a hole you can only reach from one side
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin): stops a bolted joint from undoing itself
  - Anaerobic adhesive (threadlocker): glue for threads that stops loosening and seals
  - Rivet and clinching: permanent sheet joints with no thread to loosen
  - Cam lock and knock-down fittings: furniture fastenings that tighten with a quarter turn instead of many turns
  - Printed screw thread: threads printed into the part; fine for big coarse threads only
  - Aluminium-extrusion connectors: bolts into nuts that slide in the slots of aluminium bars, so parts can be moved anywhere along a frame instead of only to drilled holes
  - Wood screw: a pointed, coarse-threaded screw that cuts its own thread in wood, so no nut or tapped hole is needed
  - Threaded rod and studs: a rod threaded along its length, used with nuts as a long bolt, tie rod or adjustable spacer

### Pictures, videos and models

- **links**: 
  - [Bolted joint with nut.svg (Wikimedia Commons, by Андрей Перцев)](https://commons.wikimedia.org/wiki/File:Bolted_joint_with_nut.svg): Cross-section drawing of two plates clamped by a bolt, washer and nut *(licence: CC0)*
  - [Bolted joint in the part body (color).svg (Wikimedia Commons, by Андрей Перцев)](https://commons.wikimedia.org/wiki/File:Bolted_joint_in_the_part_body_(color).svg): Cross-section drawing of a screw going through one part into a tapped (threaded) hole in the other *(licence: CC0)*
  - [Bolted joint spring analogy.svg (Wikimedia Commons, by Duk)](https://commons.wikimedia.org/wiki/File:Bolted_joint_spring_analogy.svg): Diagram showing the bolt as a stretched spring and the clamped parts as a squeezed spring, explaining preload *(licence: CC BY-SA 3.0)*
  - [Bolt-in-shear.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bolt-in-shear.svg): Cross-sections of a bolt in single shear and in double shear *(licence: CC BY-SA 3.0)*
  - [Video of a Helical Spring Washer subjected to a Junker vibration loosening test (Bolt Science)](https://www.boltscience.com/pages/junkertesthelicalspringwasher.htm): Video of a nut with a split spring washer loosening in a sideways-vibration (Junker) test machine *(licence: link only)*
- **make_it_yourself**: 
  - [BOSL2 screws.scad (OpenSCAD library: screw(), screw_hole(), nut(), nut_trap_side())](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad): Parametric metric and inch screws, nuts, clearance holes (ISO fine/medium/coarse) with teardrop option for printing, counterbores and nut traps *(licence: BSD 2-Clause)*
  - [Ultimate Hole-Test (M3 - M6) / pattern for hole size design (WS Design & Engineering, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/712481-ultimate-hole-test-m3-m6-pattern-for-hole-size-des): Test print with horizontal and vertical holes for M3-M6 screws, both loose-fit and thread-in sizes, to find the right hole sizes for your printer *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [M3 Hole Clearance Test (slinger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/53614-m3-hole-clearance-test): Quick test print of holes shrinking in 0.025 mm steps, to choose how tight to make holes for M3 cap screws *(licence: Creative Commons Public Domain)*
- **diagram_idea**: A cut-away of two plates held by a bolt, washer and nut, with springs drawn over the bolt (stretched) and the plates (squeezed) to show preload, arrows showing friction carrying a sideways load, and a small inset of the same screw going into a tapped hole instead of a nut.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bolted_joint
  - https://en.wikipedia.org/wiki/Screw_joint
  - https://en.wikipedia.org/wiki/Screw
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://en.wikipedia.org/wiki/Washer_(hardware)
  - https://en.wikipedia.org/wiki/Meccano
  - https://ntrs.nasa.gov/api/citations/19900009424/downloads/19900009424.pdf
  - https://engineeringhardware.com/fastener/clearance-hole-sizes/
  - https://www.nord-lock.com/learnings/bolting-tips/2015/the-experts-thread-engagement-in-a-tapped-hole/
  - https://www.fieldfastener.com/blog/2018/03/13/rules-of-thumb-for-thread-engagement
  - https://www.boltscience.com/pages/vibloose.htm
  - https://www.boltscience.com/pages/junkertesthelicalspringwasher.htm
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8659210/fullTextXML
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://hackaday.com/2020/05/17/look-ma-no-support-for-my-floating-holes/
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
  - https://commons.wikimedia.org/wiki/File:Bolted_joint_with_nut.svg
  - https://commons.wikimedia.org/wiki/File:Bolted_joint_in_the_part_body_(color).svg
  - https://commons.wikimedia.org/wiki/File:Bolted_joint_spring_analogy.svg
  - https://commons.wikimedia.org/wiki/File:Bolt-in-shear.svg
  - https://api.printables.com/graphql/
  - https://en.wikipedia.org/wiki/Carriage_bolt
  - https://game-manual-0.readthedocs.io/en/latest/docs/hardware-basics/kit-and-hardware-guide/gobilda.html

### Finder tags

- **connects**: any solid parts ⚑ *needs confirming (best guess): joins parts, but no specific kind of part found; set to any solid parts*
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** everyday_examples, materials, play_and_precision, processes, safety_notes, seal

## 284 Scroll mechanism (self-centring scroll chuck, spiral-slot plate)

*clamping, magnetic & friction connections.* Turning one plate with a spiral groove or spiral slots moves three or more jaws in or out together, so they always grip a part centred

### What it is

- **plain_name**: A round clamp with three (or more) jaws that all slide in or out together when you turn one ring or key, because a spiral groove on a hidden plate pushes on the back of every jaw at once, so whatever round thing it grips ends up right in the middle; the chuck on a metal or wood lathe
- **term**: Scroll mechanism: self-centring scroll chuck (spiral scroll plate driving radial jaws); simple form: spiral-slot (eccentric-slot) cam plate
- **aliases**: 
  - self-centring chuck, self-centering chuck, scroll chuck, universal chuck, three-jaw chuck (Wikipedia 'Chuck (engineering)')
  - scroll plate, scroll gear, spiral scroll, spiral rack (Wikipedia; Thang 'Three-jaw self-centering chuck 1')
  - geared scroll chuck (turned by a bevel pinion and chuck key) and lever scroll chuck (turned with tommy bars) (Woodworker's Journal; EB1911 figures)
  - four-jaw scroll chuck (woodturning), four-jaw and six-jaw self-centring chucks (Woodworker's Journal; Wikipedia)
  - adjust-true or 'exact-adjust' chuck: a scroll chuck with screws to fine-tune centring; GripTru (brand), Setrite (brand, Pratt Burnerd) (Wikipedia; Pratt Burnerd)
  - spiral-slot plate, cam plate with eccentric slots (Thang 'Three-jaw self-centering chuck 4')
  - Dreibacken-Spannfutter, Dreibackenfutter (German for three-jaw chuck; Wikimedia Commons file '3-Backen-Futter-800.jpg')
- **family**: clamping, magnetic & friction connections
- **other_families**: motion conversion, locating & alignment
- **one_liner**: A plate with a spiral groove (or spiral slots) that, when turned, moves three or more jaws in or out by exactly the same amount, so they clamp a round or hexagonal part and centre it in one movement.
- **complexity**: A small assembly that acts as one unit: a body with radial slots (jaw ways), a flat scroll plate with a spiral ridge on its face, three (or four or six) jaws with curved teeth on their backs that engage the spiral, and a way to turn the scroll: a knurled ring or tommy-bar holes on simple chucks, or one to three bevel pinions turned by a chuck key and meshing with a bevel gear on the back of the scroll on geared chucks (Wikipedia 'Chuck (engineering)'; EB1911 Figs 39-40; Thang part 4 p. 67; Sherline). Woodturning chucks use two-piece jaws: a bottom jaw that engages the scroll and a screw-on top jaw that can be swapped (Woodworker's Journal). The simplest printed form is a plate with three spiral or eccentric slots that push pins on three sliding jaws (Thang 'Three-jaw self-centering chuck 4').
- **how_it_works**: Each jaw can only slide straight in or out along its slot, and teeth on its underside sit in the spiral on the scroll plate. Turning the scroll makes the spiral slide past the teeth like a very flat screw thread, so every jaw is pushed in (or pulled out) at the same time. Because the spiral is an Archimedean spiral, the gap between one turn and the next is the same everywhere ('any ray from the origin intersects successive turnings of the spiral in points with a constant separation distance'; Wikipedia 'Archimedean spiral'), so all the jaws move the same distance for each turn and stay the same distance from the centre: a round part is centred automatically (Wikipedia 'Chuck (engineering)'). On geared chucks a small bevel pinion turned by the key drives a bevel gear on the back of the scroll for extra leverage (Thang; Woodworker's Journal). The jaws must be put into their slots in a set order so each one meets the spiral at the right point (Sherline; Woodworker's Journal).

### Finder attributes

- **job**: 
  - join and hold: clamps a round, hexagonal or (with four jaws) square part, gripping it from outside or, with the jaws reversed or expanding, from inside a bore or recess (Wikipedia; Pratt Burnerd; Woodworker's Journal)
  - line parts up exactly: centres the part on the axis automatically, to within about 0.08-0.13 mm on ordinary chucks (Sherline; Wikipedia)
  - change the kind of motion: turns the rotation of a key or ring into equal straight-line (radial) movement of several jaws at once
- **motion**: multiple: the scroll plate rotates and the jaws slide straight in or out (radially). Example ranges: a 2.5 in Sherline four-jaw self-centring chuck holds about 2-30 mm with the jaws normal and 8-56 mm with them reversed (Sherline); a 125 mm Setrite three-jaw chuck covers 1.5-124 mm with different jaw positions (Pratt Burnerd)
- **degrees_of_freedom**: 1: one turn of the scroll moves all the jaws together, so the jaw set has a single degree of freedom (in/out). Once clamped, the workpiece has 0 degrees of freedom relative to the chuck
- **special_behaviour**: 
  - self-aligning or self-centring: all jaws close by the same amount, so a round or hexagonal part ends up on the centre line without measuring (Wikipedia 'Chuck (engineering)')
  - motion conversion: rotary input to equal radial movement of three or more jaws
  - self-locking (holds under load) ⚑ [uncertain]: in practice a tightened scroll holds its grip while the part is turned or cut, but no opened source states the scroll is self-locking; and an untightened scroll can be turned by inertia when the spindle starts, opening or closing the jaws (Sherline; Woodworker's Journal) *(⚑ parts need confirming)*
- **holding_principle**: friction or clamping (force-fit): the jaws squeeze the part and friction carries the turning and cutting forces. Inside the chuck the jaw teeth interlock with the spiral (shape, form-fit). Woodturners also grip by shape, expanding the jaws into a dovetail-shaped recess cut in the bowl base (Woodworker's Journal)
- **input_output**: Rotation of a key, pinion, knurled ring or tommy bar -> rotation of the scroll -> equal radial travel of every jaw. Jaw travel per scroll turn equals the pitch of the spiral, the same at every radius (Wikipedia 'Archimedean spiral'). Force: a 125 mm Pratt Burnerd Setrite chuck takes a maximum input torque of 52 N m and produces a total jaw force of 24.1 kN (Setrite manual). Shaft arrangement on geared chucks: the key and pinion are at right angles to the chuck axis and drive the scroll through bevel gears (intersecting axes; Thang; EB1911 Fig. 40). Back-drivable: yes when unloaded: starting the lathe can turn an untightened scroll and open or close the jaws (Sherline; Woodworker's Journal). Once tightened, clamping and cutting forces do not unwind it in normal use ⚑ [uncertain: inferred from normal use, not stated in an opened source]. Efficiency: low, with a lot of sliding friction ⚑ [uncertain: no figure found] *(⚑ parts need confirming)*
- **power**: passive (no power needed): turned by hand with a key, ring or tommy bars. Powered self-centring chucks can use a different mechanism, e.g. a wedge pulled by a pneumatic cylinder (Thang 'Three-jaw self-centering chuck 3')
- **removability**: removable: loosen with the key or ring and the part comes out; the jaws can be wound out of the scroll, removed and reversed; the whole chuck screws or bolts onto the spindle (Sherline; Pratt Burnerd)
- **reuse_cycles**: effectively unlimited clamping cycles, but wear and damage slowly reduce centring accuracy; gripping parts that are not uniform along their length can strain the jaws and permanently impair accuracy (Wikipedia 'Chuck (engineering)'), and replacement jaws are less accurate than the original set ground in the chuck (Setrite manual)
- **tools_needed**: A chuck key (square-ended T-handle) for geared chucks, tommy bars for lever and knurled-ring chucks, a hex key for jaw screws and mounting bolts; a brush and lubricant for cleaning (Pratt Burnerd; Sherline; Woodworker's Journal). Printed chucks: tommy bars or M3 screws, a needle file and a circlip (mdkendall; Charleszard on Printables)
- **seal**: none: chips, swarf and dust get into the scroll, so it needs regular cleaning and lubrication (Sherline; Pratt Burnerd; Woodworker's Journal)
- **load**: Heavy for metal chucks: a 125 mm Setrite chuck clamps with a total of 24.1 kN, and larger sizes with up to 73.5 kN (Setrite manual). Strong in radial grip and in turning (by friction); weakest when the part sticks out a long way (it can be levered out, so support long work with a tailstock centre) or is gripped on too short a step or too small a diameter (Setrite manual). Printed or spiral-slot plate versions are light duty: Thang notes his eccentric-slot cam chuck 'should be used only for operation of light cutting force'
- **adjustable**: Yes: it grips any size within its range by turning the scroll; the jaws can be reversed for larger work; woodturning chucks take different top jaws and a screw-chuck insert (Sherline; Woodworker's Journal). Adjust-true chucks have screws that shift the chuck body so a part can be trued to within 0.013 mm, or 0.005 mm if set for each part (Setrite manual; Wikipedia mentions GripTru (brand))
- **play_and_precision**: small: there is some backlash between jaw teeth and scroll (Setrite manual), and centring is good but not perfect: Wikipedia gives about +/-0.005 in (0.125 mm) total indicator reading for a typical three-jaw chuck (marked 'citation needed' there), and Sherline specifies an allowable runout of 0.003 in (0.076 mm) or less. 'Self-centering chucks will never duplicate the accuracy that can be attained with jaws that are moved independently' (Sherline). Even-numbered jaws need truly round or square stock: on an oval part one jaw does not grip (Sherline), and imperfectly round work can 'teeter' between opposite jaws (Wikipedia). It cannot correct an offset: use an independent four-jaw chuck or an adjust-true chuck for that
- **access_needed**: end of a tube or shaft: the part is gripped on its end (outside diameter) or from inside a bore or recess; the chuck itself is mounted on the end of a spindle
- **materials**: Metal chucks: steel bodies with scrolls of tough alloy steel, hardened and ground (Setrite manual). Woodturning chucks: metal bodies with swappable top jaws shaped for wood, because metalworking jaws 'mar wood egregiously' (Woodworker's Journal). Printed versions: ordinary FDM plastics such as PLA for light work (mdkendall's 2.5 in chuck is 'fully printable'; Printables). Grips metal, wood, plastic and more; soft or thin-walled parts can be crushed or distorted, which is why six-jaw chucks are used for thin-walled tubing and plastics (Wikipedia)
- **maker_difficulty**: easy to use: buy a ready-made chuck. Moderate to print a working light-duty one: tested designs print without supports, but the jaws and teeth may need filing to fit (mdkendall). Hard to make an accurate metal one at home: the scroll and jaws must be hardened and ground

### Making it

- **processes**: 
  - off-the-shelf part: lathe chucks, woodturning chucks and mini-lathe chucks are the normal choice
  - 3D print (FDM): light-duty scroll chucks, chuck vises and holders (e.g. mdkendall's 2.5 in chuck, C-Series Scroll Chuck on Printables)
  - laser cut: a flat plate with spiral or eccentric slots driving pins on sliding jaws, as in Thang's cam-plate chuck ⚑ [uncertain: a plausible flat-part build, no tested laser-cut design found]
  - CNC: metal scroll plates, jaws and bodies, and machining soft jaws to fit a part *(⚑ parts need confirming)*
- **print_in_place**: no: printed scroll chucks are printed as separate parts (housing, scroll plate, jaws, circlip or screws) and assembled, inserting the jaws in order (mdkendall, Printables). A print-in-place self-centring vise exists, but it uses a two-start screw, not a scroll (Alterity Design, Printables)
- **making_tips_3d_printing**: 1) Start from a tested model: mdkendall's 2.5 in (63 mm) three-jaw chuck prints 'in the orientation shown with no support material', with chamfers so the overhangs bridge cleanly (Printables). 2) Clearance: that model uses 0.2 mm clearance between all fitting parts; clean up tight jaws or teeth with a needle file (mdkendall). 3) Print the jaws flat with a small brim (2 mm worked) so the teeth do not lift (mdkendall). 4) Use a true Archimedean spiral (constant spacing between turns) and give the jaw teeth the same spacing, so every jaw moves the same distance (Wikipedia 'Archimedean spiral'). 5) Mark jaws and slots (A, B, C) and insert in order: turn the scroll until its leading tip is about to appear in a slot, feed in jaw A, turn to capture it, then B, then C; reversed jaws go in C-B-A (mdkendall; Sherline does the same with numbered jaws). 6) Give it something to turn with: tommy-bar holes (4 mm on mdkendall's chuck), screws that lock the scroll once set (Charleszard's 48 mm remix), or a bevel pinion and ring gear for more force, as on geared metal chucks (Woodworker's Journal). 7) Add a stop so jaws cannot run off the end of the spiral and fall out; Nova woodturning chucks use a stop screw for this (Woodworker's Journal). 8) Keep it light duty: Thang warns that even a metal eccentric-slot cam chuck is only for light cutting forces. A printed spiral is also weaker and springier than a hardened steel one, and plastic parts slowly creep and loosen under constant clamping ⚑ [uncertain: general behaviour of printed plastics, not tested on these models]. 9) A dry lubricant or wax helps the scroll turn smoothly (Woodworker's Journal recommends paste wax or a dry lubricant on wood chucks). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Three-jaw self-centring lathe chuck (scroll chuck, universal chuck) with chuck key; four-jaw and six-jaw self-centring chucks; adjust-true chucks (Setrite (brand, Pratt Burnerd), GripTru (brand)); reversible hard jaws, two-piece jaws and soft top jaws; back plates and adaptor plates for the spindle nose (Pratt Burnerd; Wikipedia). Woodturning four-jaw scroll chucks, lever or gear-driven, with interchangeable jaws and screw-chuck inserts: Nova (brand, Teknatool), Oneway Stronghold and Talon (brands), Vicmarc VM150 (brand), Barracuda (brand, Penn State Industries) (Woodworker's Journal). Mini-lathe chucks, e.g. Sherline 2.5 in and 3.1 in four-jaw self-centring chucks (Sherline). Spring-loaded, self-ejecting chuck keys (WorkSafe New Zealand).
- **rules_of_thumb**: 
  - Woodturning scroll chucks: 'never extend the jaws more than one-third out of the chuck', or they can lose engagement with the scroll (Ernie Conover, Woodworker's Journal, https://www.woodworkersjournal.com/four-jaw-scroll-chucks/).
  - Metal chucks: don't let the jaws project beyond the chuck body, don't exceed the clamping range, grip on the largest possible diameter, and support long or heavy parts between centres (Pratt Burnerd Setrite manual, https://prattburnerd.com/wp-content/uploads/2022/01/PBA-Setrite-Manual-2021.pdf).
  - Expect about 0.08-0.13 mm of runout from an ordinary scroll chuck: Sherline allows 0.003 in (0.076 mm) or less (https://sherline.com/wp-content/uploads/2015/01/1075inst.pdf); Wikipedia quotes +/-0.005 in (0.125 mm) TIR, unsourced (https://en.wikipedia.org/wiki/Chuck_(engineering)). For better, use a collet, an independent four-jaw chuck or an adjust-true chuck (0.013 mm repeat, Setrite manual).
  - Speed: never exceed the maximum speed marked on the chuck body, because centrifugal force can throw out parts or the workpiece (Setrite manual); Sherline's small chucks are not designed for use above 3,000 rpm (Sherline).
  - Force: a 125 mm Setrite chuck gives a total jaw force of 24.1 kN at its maximum input torque of 52 N m; don't extend the key handle or use a power wrench (Setrite manual, https://prattburnerd.com/wp-content/uploads/2022/01/PBA-Setrite-Manual-2021.pdf).
  - Jaw count: three jaws for round and hexagonal stock; four self-centring jaws only for truly round or truly square stock (Sherline, https://sherline.com/wp-content/uploads/2015/01/1075inst.pdf).
  - Printed chuck: 0.2 mm clearance between fitting parts, jaws printed flat with a 2 mm brim (mdkendall, https://www.printables.com/model/133491-25inch-three-jaw-chuck).

### When to use it

- **everyday_examples**: 
  - the three-jaw chuck on a metal lathe, tightened with a T-shaped chuck key (Wikipedia 'Chuck (engineering)')
  - the four-jaw chuck on a wood lathe that holds a bowl blank (Woodworker's Journal)
  - printed scroll-chuck holders for painting miniatures (C-Series Scroll Chuck, Printables)
  - not the drill chuck: the jaws of a keyed drill chuck are moved along a taper by a threaded ring, not by a scroll (Wikipedia 'Chuck (engineering)')
- **when_to_use**: When you need to grip round or hexagonal parts of different sizes quickly and have them come out centred without measuring: holding work on a lathe, centring a bowl blank, gripping a rod or tube in a fixture, or a printed holder that grips cylindrical objects of varying size. It is the 'fast, good enough' choice that saves setting-up time (Sherline: self-centring chucks 'will usually get the job done, saving a machinist much time and effort').
- **when_not_to_use**: Not for irregular, square-ish or off-centre work: use an independent four-jaw chuck, which can also hold a part deliberately off-centre (Wikipedia). Not when you need the last few hundredths of a millimetre: use a collet, an independent-jaw chuck or an adjust-true chuck (Wikipedia; Setrite). Not for thin-walled tubes that would be squashed by three jaws: use a six-jaw chuck or a collet (Wikipedia). Not for small drill bits in a hand drill: use a drill chuck or collet. Not, in printed form, for heavy cutting or high speeds.
- **environment_limits**: Swarf, chips and dust: they get into the scroll and jaw ways and make it stiff and inaccurate; clean and lubricate regularly (Sherline; Setrite; Woodworker's Journal). Rust: keep steel chucks lightly oiled and stored wrapped (Sherline). Speed: centrifugal force at high speed can throw out jaws or the workpiece, so keep below the marked maximum speed (Setrite). Wood movement: green or drying wood shrinks and can loosen its grip ⚑ [uncertain: general woodturning knowledge, not from an opened page]. Printed plastic chucks: plastic creeps under constant clamping and softens with heat, so grip falls off over time ⚑ [uncertain: general behaviour of printed plastics]. *(⚑ parts need confirming)*
- **safety_notes**: Never leave the chuck key in the chuck: if the lathe starts it is flung out (Setrite manual; WorkSafe New Zealand recommends spring-loaded keys that eject themselves and interlocked chuck guards). A spinning chuck catches loose clothing, gloves, jewellery and long hair: tie hair back and don't wear gloves, rings or loose sleeves at a lathe (WorkSafe New Zealand; CCOHS). Jaws wound too far out can lose engagement with the scroll, and starting the lathe then causes 'a very dangerous ballistic event'; protruding jaws can also cut you (Woodworker's Journal; Setrite). Don't start the spindle unless the jaws are tightened, because the scroll can open the jaws as the spindle accelerates (Sherline). Never exceed the marked maximum speed, and support long work so it can't be levered out (Setrite).
- **common_failures**: 1) Off-centre grip because the jaws were put in the wrong slots or out of order: the jaws and jaw ways are numbered, so reinstall in sequence (Setrite; Sherline; Woodworker's Journal). 2) Lost accuracy from wear, dirt or strain: gripping non-uniform work 'can strain the jaws and permanently impair accuracy' (Wikipedia); clean, lubricate and don't over-tighten with an extended key (Setrite). 3) Work slipping or being pulled out: too short a gripping step, too small a diameter, long overhang or too little tightening; grip longer and support with a tailstock (Setrite). 4) One jaw not gripping on a four-jaw chuck because the stock is oval or rectangular (Sherline). 5) Binding when refitting jaws: back the scroll off slightly and wiggle the jaw, never force it (Sherline). 6) Printed chucks: jaw teeth skipping or stripping, the plate flexing, and grip loosening as plastic creeps; keep loads light.
- **related**: 
  - Collet (and keyless chuck): a slotted sleeve squeezed by a cone; more accurate and grips all round, but each collet fits only a narrow size range
  - Independent four-jaw chuck: each jaw has its own screw, so it holds irregular or deliberately off-centre work and can be trued exactly, but setting up is slow (Wikipedia)
  - Drill chuck (keyed or keyless): three jaws moved along a taper by a threaded sleeve rather than by a scroll (Wikipedia)
  - Iris mechanism: blades or pins driven by a turning ring also close evenly towards the centre, but to make an opening rather than to clamp
  - Self-centring vise with a left- and right-hand screw: two jaws closing equally on a part (Thang 'Self-centering fixture 1b'; a print-in-place example by Alterity Design)
  - Wedge (power) chuck: jaws closed by a wedge pulled by a pneumatic cylinder instead of by a scroll (Thang 'Three-jaw self-centering chuck 3')
  - Self-centring cone and socket (taper locator): centres a part by a cone instead of by jaws
  - Rack-and-pinion and screw-driven self-centring chucks: other ways to move several jaws together (Thang 'Three-jaw self-centering chuck 2')

### Pictures, videos and models

- **links**: 
  - [ThreeJawChuckKey.jpg (Glenn McKechnie, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:ThreeJawChuckKey.jpg): Photo of a three-jaw self-centring chuck with one jaw removed and turned over to show the teeth that engage the scroll plate, and the chuck key *(licence: CC BY-SA 3.0)*
  - [EB1911 - Tool - Fig 39.png: Scroll Chuck, ungeared (Encyclopaedia Britannica 1911, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:EB1911_-_Tool_-_Fig_39.png): Labelled drawing of a simple scroll chuck: knurled body with the scroll on its face and jaws with sectional scroll teeth, turned with a tommy bar *(licence: Public domain)*
  - [EB1911 - Tool - Fig 40.png: Combination Geared Scroll Chuck (Encyclopaedia Britannica 1911, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:EB1911_-_Tool_-_Fig_40.png): Labelled drawing of a geared scroll chuck: pinions driving a circular rack with the scroll on its face, plus screws to move the jaws independently *(licence: Public domain)*
  - [Three-jaw self-centering chuck 1 (thang010146, YouTube)](https://www.youtube.com/watch?v=0ERIZeZhckw): CAD animation of a bevel pinion turning the scroll (spiral rack) so all three jaws move together (title and channel confirmed via YouTube oEmbed; described in Thang's PDF part 4 p. 67; video not watched) *(licence: link only)*
  - [Three-jaw self-centering chuck 4 (thang010146, YouTube)](https://www.youtube.com/watch?v=zzcj0-C6Njo): CAD animation of the simple spiral-slot version: a cam plate with three eccentric slots moving three jaws (title and channel confirmed via YouTube oEmbed; described in Thang's PDF part 4 p. 68; video not watched) *(licence: link only)*
- **make_it_yourself**: 
  - [2.5inch Three Jaw Chuck (mdkendall, Printables)](https://www.printables.com/model/133491-25inch-three-jaw-chuck): Fully printable 63 mm three-jaw scroll chuck with reversible jaws, M14 x 1 mm mounting thread for Unimat-style and '8-in-1' mini lathes, 0.2 mm clearances, tommy-bar holes; no supports needed *(licence: CC BY-SA)*
  - [C-Series Scroll Chuck (ThatRobHuman, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/992137-c-series-scroll-chuck): Small printed three- or four-jaw scroll chuck used to hold larger miniatures in a ball vise; bill of materials and step-by-step PDF included *(licence: CC BY-SA)*
  - [Self-Centering 48mm Chuck for Mini Lathe (Charleszard, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/352130-self-centering-48mm-chuck-for-mini-lathe): 48 mm remix of mdkendall's chuck for toy mini lathes; holds round objects up to about 40 mm; M3 screws lock the scroll plate once set *(licence: CC BY-NC-SA)*
  - [Functional 3-Jaw Chuck Vise (N00dle, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/743872-functional-3-jaw-chuck-vise): Printed three-jaw chuck vise in which a toothed plate turns to drive three jaw runners; designer recommends 0.12 mm layers or finer *(licence: CC BY-NC)*
- **diagram_idea**: Two views of a three-jaw chuck: an exploded side view showing the scroll plate with a spiral ridge on its face, three jaws with curved teeth on their backs above it, and a bevel pinion with the chuck key; and a face-on view in which turning the scroll a quarter turn (curved arrow) moves all three jaws inwards by the same distance (three equal arrows) onto a round bar that ends up in the centre.
- **sources**: 
  - https://en.wikipedia.org/wiki/Chuck_(engineering) (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Archimedean_spiral (read as raw wikitext)
  - https://cs448m.github.io/lectures/machines/doc/4.pdf (Nguyen Duc Thang, 2700 Animated Mechanical Mechanisms part 4, pp. 67-68, section 28.2 'Mechanisms for clamping and centering workpieces'; Stanford course-site copy)
  - https://www.youtube.com/watch?v=0ERIZeZhckw (title and channel confirmed via YouTube oEmbed)
  - https://www.youtube.com/watch?v=zzcj0-C6Njo (title and channel confirmed via YouTube oEmbed)
  - https://prattburnerd.com/wp-content/uploads/2022/01/PBA-Setrite-Manual-2021.pdf (Pratt Burnerd America, Setrite Self Centering Scroll Chucks manual, 2021)
  - https://sherline.com/wp-content/uploads/2015/01/1075inst.pdf (Sherline, 4-Jaw Self-Centering Chucks P/N 1075, 1076, 1076C and 1078 instructions)
  - https://www.woodworkersjournal.com/four-jaw-scroll-chucks/ (Ernie Conover, 'Four-Jaw Scroll Chucks', Woodworker's Journal)
  - https://www.worksafe.govt.nz/topic-and-industry/machinery/metal-turning-lathes/ (WorkSafe New Zealand, Metal turning lathes)
  - https://www.ccohs.ca/oshanswers/safety_haz/metalworking/lathes.html (CCOHS, Metalworking Machines - Lathes)
  - https://commons.wikimedia.org/wiki/File:ThreeJawChuckKey.jpg
  - https://commons.wikimedia.org/wiki/File:EB1911_-_Tool_-_Fig_39.png
  - https://commons.wikimedia.org/wiki/File:EB1911_-_Tool_-_Fig_40.png
  - https://commons.wikimedia.org/wiki/File:3-Backen-Futter-800.jpg (file title used for the German alias)
  - https://api.printables.com/graphql/ (Printables API: models 133491, 992137, 352130, 743872, 946636)

### Finder tags

- **connects**: something to grip
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: at an angle
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, making_tips_3d_printing, processes, special_behaviour

## 339 Expanding internal grip (expanding mandrel, inside gripper)

*clamping, magnetic & friction connections.* A plug or a set of fingers pushed into a hole, ring or tube that grows outward to grip it from the inside and shrinks again to let go, driven by a cone or wedge, a screw-driven linkage or an inflated bladder

*Also covers:* Also covers expanding mandrels for turning, robot inside grippers and bladder grippers. Safety: a powered inside gripper can drop its part when pressure or power is lost.

### What it is

- **plain_name**: A plug, sleeve or ring of fingers that you push into a hole, tube or ring and then make fatter, so it presses outward on the inside wall and holds the part from within; make it thinner again and the part slides off
- **term**: Expanding internal grip: the expanding mandrel (expanding arbor) used to hold a part by its bore for turning, grinding or sanding, and the internal gripper (I.D. gripper, expansion gripper) used on robots, including the inflatable bladder gripper
- **aliases**: 
  - expanding mandrel; expanding arbor; expansion arbor (Wikipedia 'Mandrel'; Joe Pie video title)
  - expanding mandrel and sleeve; split-sleeve mandrel (a slotted sleeve pushed along a tapered arbor) (Birla Precision; US patent 6832756)
  - expanding collet; internal expanding collet; ID chuck (Printables 'Watch Case Back Polishing Arbor - Internal Expanding Collet / ID Chuck')
  - O-ring mandrel; O-ring expansion arbor (rubber rings squeezed so they bulge outward) (US patent 6832756; Hobby-Machinist forum)
  - ring expanding mandrel (jeweller's or lathe ring holder) (Sherline video title; Printables 'Expanding ring mandrel')
  - internal gripper; inside gripper; I.D. (inside-diameter) gripper; internal gripping; expansion gripping (Ozobot ORA guide; SCHUNK CGP data sheet 'I.D. gripping')
  - EOAT internal gripper (end-of-arm tooling) (US patent 4770456)
  - inflatable bladder gripper; bladder gripper; inflatable gripper (US patents 4770456 and 4955655)
  - airshaft; air shaft; air expanding shaft, lug type or strip type, for gripping the cardboard core of a roll of paper or film (Wikipedia 'Airshaft')
  - rubber expansion sanding drum (nut-lock, screw-lock and quick-lock types) (Bearing Distributors catalogue)
  - expanding spool holder; spool hub expander (Printables 'Ankermake M5 - Spoolholder - Expanding Mandrel')
- **family**: clamping, magnetic & friction connections
- **other_families**: powered & active connectors, locating & alignment, hydraulics, pneumatics & vacuum
- **one_liner**: A plug or set of fingers goes into a hole, tube or ring and is made to grow outward, by a cone or wedge, a screw-driven linkage or an inflated rubber bladder, so friction against the inside wall holds and centres the part, and shrinking it again lets the part go.
- **complexity**: A few parts to a small assembly that acts as one unit. Lathe expanding mandrel: a tapered arbor (bar), a sleeve slit along its length, and a nut or pull-rod (drawbar) that pushes the sleeve up the taper (Birla Precision; US patent 6832756). Shop-made mandrel: a bar slit into four at one end, a tapered thread and a screw (Model Engineer forum). Rubber type: spacers, O-rings or a rubber sleeve and a nut that squashes them (US patent 6832756; Bearing Distributors). Robot inside gripper: an actuator (air cylinder or servo), a wedge, cone or linkage, and two or more fingers or jaws (US patent 4770456; SCHUNK CGP). Bladder gripper or airshaft: a rubber or silicone bladder inside a housing or slotted tube, an air valve, an air supply, and in airshafts metal lugs pushed out by the bladder (US patent 4770456; Wikipedia 'Airshaft').
- **how_it_works**: Something inside the plug pushes its outer surface outward until it presses hard against the inside of the part, and friction then stops the part sliding or turning. In the classic lathe mandrel a sleeve with long slots is pushed along a gently tapered bar, so the slotted sections are forced outward, roughly parallel to the centre line (US patent 6832756); squashing rubber O-rings or a rubber sleeve along its length makes it bulge outward in the same way (US patent 6832756; Bearing Distributors). Robot inside grippers either move fingers outward through a linkage driven by an actuator, or inflate a bladder (with or without a shell) inside the cavity (US patent 4770456); airshafts inflate a bladder that pushes metal lugs out of slots to grip a roll's core (Wikipedia 'Airshaft'). Because the push is even all round, the part ends up centred on the plug, and reversing the screw, nut or air lets the springy sleeve or rubber shrink back so the part comes off.

### Finder attributes

- **job**: 
  - join and hold: holds a ring, bush, gear, tube, spool or roll by its hole so the outside stays free to be machined, sanded, polished or handled (Birla Precision; Ozobot ORA guide; Wikipedia 'Airshaft')
  - hold or release using power: robot and air versions grip when air pressure or a motor pushes the fingers or bladder outward, and let go when it is removed (PFA 'What is an Air Gripper?'; US patent 4770456)
  - line parts up exactly: centres the part on its bore, so the outside can be turned true to the hole (Birla Precision: expanding mandrels are used 'for locating and holding the components with a bore')
  - lock, and release by hand: screw, nut and knob versions are tightened and undone by hand or with a spanner (Printables 'Expanding ring mandrel'; Printables 'Ankermake M5 - Spoolholder - Expanding Mandrel')
- **motion**: none: once expanded nothing moves. The gripping surface only moves outward a little: about 0.8 mm on the diameter for a standard precision sleeve (Birla Precision), 9 mm for a printed spool-holder mandrel (50 to about 59 mm, Printables 346075) and about 7 mm for a printed ring mandrel (13.2 to 20.2 mm, Printables 882417)
- **degrees_of_freedom**: 0 while gripping: the outward push fixes the part's sideways position and tilt, and friction stops it sliding along or turning on the plug. On lathe mandrels a shoulder or face sets the depth, and the sleeve's pull-back action draws the part 'hard against the locating face' (Birla Precision). While released: 2 (the part can slide on and off and turn).
- **special_behaviour**: 
  - self-aligning or self-centring: the even outward push centres the part on its bore; a precision double-angle sleeve mandrel holds parts to within 0.013 mm (0.0005 in) total indicated run-out (Birla Precision). The older single-taper sleeve type 'has never been a particularly accurate method' (US patent 6832756)
  - quick-release: powered inside grippers open and close in a few hundredths of a second (closing and opening times of 0.02 to 0.07 s for SCHUNK CGP grippers), and an airshaft 'may also be easily deflated to facilitate easy withdrawal' (Wikipedia 'Airshaft'). Screw-driven mandrels need a few turns of a nut or knob
  - fail-safe or breakaway: only in spring-assisted powered grippers: a spring keeps a minimum gripping force if the air pressure drops, and in the version made for inside gripping (SCHUNK 'IS') the spring pushes the jaws open, i.e. outward against the bore (SCHUNK CGP data sheet; PFA 'What is an Air Gripper?'). Plain air and bladder grippers are not fail-safe: they relax when the air goes
- **holding_principle**: 
  - friction or clamping (force-fit): the outward push presses the sleeve, fingers or bladder against the bore and friction carries the load (US patent 6832756; SCHUNK rates its grippers for 'force-fit gripping' by friction, SCHUNK CGP data sheet)
  - powered hold: robot grippers, bladder grippers and airshafts hold only while air pressure or motor force is applied, unless a spring or brake keeps the grip (PFA 'What is an Air Gripper?'; SCHUNK CGP data sheet)
  - spring force (a spring or springy part presses it in place): in spring-assisted grippers a spring keeps a minimum grip force; in slit sleeves and rubber types the springiness mainly shrinks the plug again for release (SCHUNK CGP data sheet; US patent 6832756)
  - shape (the parts interlock; form-fit): only in special cases, e.g. serrated sleeves that locate in splines or internal gear teeth (Birla Precision) or fingers that hook under a lip; SCHUNK notes that form-fit gripping allows 'significantly higher' part weights than friction gripping (SCHUNK CGP data sheet)
- **input_output**: Not a motion converter in use. A lathe or drill mandrel passes the spindle's rotation straight into the part, 1:1 and in line, until it slips. Inside, a cone, wedge or linkage turns an axial push (a nut, drawbar, air piston or servo) into a small outward movement; e.g. the SCHUNK CGP uses a wedge-hook to turn the piston's up-and-down movement into synchronised jaw movement. Back-drivable: ⚑ [uncertain] screw-tightened mandrels are not undone by the part's load in normal use, but no source states this. *(⚑ parts need confirming)*
- **power**: passive (no power needed) for screw, nut, knob and drawbar mandrels: they stay tight on their own. Powered (compressed air, hydraulics or an electric motor) for robot inside grippers, bladder grippers and airshafts. If power is lost: an air gripper 'will relax its grip on an object when air pressure is lost. This may cause the object to be dropped' (PFA 'What is an Air Gripper?'); spring-assisted versions keep a minimum grip force (SCHUNK CGP data sheet); a pressure maintenance valve can hold the air in the gripper's piston for a while during an emergency stop (SCHUNK SDV-P, in the CGP data sheet). Electric grippers can be fitted with a permanent-magnet brake to keep their grip (SCHUNK gripper range filter 'M (permanent magnet brake)'). ⚑ [uncertain] A hobby servo that is back-drivable will usually let the fingers relax when unpowered; a worm or lead-screw drive tends to keep its last position (reasoning; see the self-locking entries). *(⚑ parts need confirming)*
- **removability**: removable: undo the nut or knob, or release the air, and the part slides off. Powered grippers and airshafts are effectively tool-free quick release (Wikipedia 'Airshaft'; PFA 'What is an Air Gripper?')
- **reuse_cycles**: effectively unlimited for metal mandrels and industrial grippers (pneumatic grippers 'can provide millions of cycles without needing upkeep', PFA 'What is an Air Gripper?'); bladders wear and are replaced when they fail (US patent 4955655). Printed plastic mandrels: many times, but thin fingers can chip or crack (Printables 346075: cardboard spools 'resulting in chipped keys')
- **tools_needed**: Lathe mandrels: a spanner or 'C' spanner, or the machine's drawbar (Birla Precision). Shop-made slit mandrel: a hex key for the taper-ended screw (Model Engineer forum). Printed mandrels: a screwdriver or hex key for an M4 or M5 screw and nut (Printables 882417, 1854987), or no tools where a hand knob is printed (Printables 346075). Powered grippers: no tools in use, but they need an air supply and valve, or a servo and controller. Making a metal one needs a lathe and a slitting saw or hacksaw (Model Engineer forum; Hobby-Machinist forum).
- **seal**: none: it grips but is not meant to seal. The same squeezed-rubber or inflated-bladder principle is used in tube and pipe plugs, which are a separate type (see Internal tube anchors)
- **load**: Light to heavy depending on build. Strong against twisting and against pulling the part off along the axis, as long as friction holds; weaker against tilting or prying if the grip is short. Industrial guide: SCHUNK CGP air grippers give 350 to 1585 N of gripping force but are rated for parts of only 1.75 to 5.6 kg when gripping by friction, because the rating assumes a friction coefficient of 0.1 and a safety factor of 2 (SCHUNK CGP data sheet). Precision mandrels hold well enough for 'heavy machining operations' (Birla Precision). Printed mandrels and grippers are light duty. The part's own wall limits the load: a thin ring or cardboard core can deform or crush (Printables 346075).
- **adjustable**: yes: how far it expands, and so how tightly it grips, is set by how far the screw, nut or knob is turned, or by the air pressure. Grip force of an air gripper rises in proportion to pressure: 'If you increase the air pressure by 20 percent, you increase the force on the gripper by 20 percent', and a regulator can reduce it (PFA 'What is an Air Gripper?'). Each mandrel covers only a small size range (0.8 mm per standard precision sleeve, up to 6.3 mm on large diameters, Birla Precision), so different bores need different sleeves or keys.
- **play_and_precision**: No play once gripping. Precision varies widely: double-angle precision sleeves 0.013 mm (0.0005 in) run-out or better (Birla Precision); the older single-taper slotted sleeve is 'never ... particularly accurate' (US patent 6832756); the O-ring type 'requires a very tightly controlled size tolerance for the workpiece inside diameter' (US patent 6832756). Home-made mandrels run truer if you expand them slightly and then turn the outside to the bore size, so they clamp evenly (Hobby-Machinist forum). It tolerates bore size only within its small expansion range, and a robot needs to line the gripper up accurately with the hole ('This technique requires a high degree of precision', Ozobot ORA guide).
- **access_needed**: one side only (blind): it goes into the hole from one end, so it suits blind bores and parts whose outside must stay free; cantilever mandrels are 'specifically useful for blind bores' (Birla Precision), and Joe Pie's O-ring expansion arbor video is titled 'No through hole...No Problem'
- **materials**: Made from: hardened steel (traditional precision mandrels, US patent 6832756); free-cutting steel such as 12L14 or EN1A, or aluminium, for shop-made mandrels (Hobby-Machinist forum); rubber O-rings, rubber drums or silicone bladders (US patent 6832756; Bearing Distributors; US patent 4770456); printed PLA, PETG or ABS, with TPU suggested for extra grip (Printables 882417). Parts it holds: anything with a round bore or inner surface: metal rings, bushes and gears, wheels, watch case backs, drink cans, cardboard and plastic spool and roll cores, game-piece cones (Printables 1854987, 129962, 346075; Wikipedia 'Airshaft'; MatterHackers). Poor fits: parts with burrs or sharp edges inside (they damage bladders, US patent 4955655), thin or soft parts that bulge, and nested or stacked parts.
- **maker_difficulty**: easy to moderate: a printed ring or spool mandrel with one screw and nut is easy (Printables 882417); an accurate metal mandrel needs a lathe and a slitting cut (moderate); a powered robot inside gripper is moderate to hard because it needs an actuator, control and careful alignment (Ozobot ORA guide)

### Making it

- **processes**: 
  - off-the-shelf part: expanding mandrels and sleeves, ring expanding mandrels, rubber expansion sanding drums, airshafts, air grippers with an I.D. gripping option, inflatable internal grippers
  - 3D print (FDM): screw-expanded mandrels for rings, watch case backs, cans and filament spools, and game-piece grippers for robot contests (Printables 882417, 1854987, 129962, 346075; MatterHackers 'Slight Malfunction')
  - CNC: turned and slit metal mandrels on a lathe, including the taper-tap-and-screw method and expand-then-turn-to-size (Model Engineer forum; Hobby-Machinist forum)
- **print_in_place**: partly: most printed versions are one or a few printed parts plus a bought screw and nut, e.g. the ring mandrel needs an M4 nut and an M4 x 30 bolt (Printables 882417) and the watch case-back arbor an M5 screw, nut and washer (Printables 1854987); bigger ones are assemblies of many printed parts (the spool mandrel uses 24 key halves, 12 dowels, threaded bodies and two 608 bearings, Printables 346075)
- **making_tips_3d_printing**: 1) Print the split body so the layers run along the fingers, not across their roots: the ring mandrel 'must be printed as shown in the picture to prevent snapping of the moving jaws' (Printables 882417). 2) Make the fingers solid: Bobino used 5 perimeters and 20% adaptive cubic infill in PLA, and says PETG or ABS also work and TPU 'might provide even better grip' (untested) (Printables 882417). 3) Use metal threads: a captive nut plus a screw that pushes into a cone or tapered hole is the usual drive (Printables 882417, 129962); a washer under the screw head spreads the force, and chamfering the screw head makes it run smoother (Printables 1854987). 4) Print a small tolerance test first: the spool mandrel is 'a tight tolerance model' and its author added a cut-down test piece of the expansion collar (Printables 346075). 5) Keep thin finger tips away from crushable parts: hollow cardboard spool cores put all the force on the thin edge of the keys and chipped them (Printables 346075). 6) Expect only a small size range per design: plan one printed mandrel per size band (13-20 mm and 18-26 mm ring versions, Printables 1803272). 7) Printed plastic slowly creeps under constant load (Filament Specs 'Creep Resistance'), so re-tighten a printed mandrel that has to hold for a long time ⚑ [uncertain: no test of printed mandrels found]. 8) Keep PLA mandrels out of heat: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa PLA guide); friction from sanding or polishing can warm the part, so use PETG (good below about 80 °C, Prusa PETG guide) for heavy use ⚑ [uncertain: heating during sanding not measured]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'expanding mandrel' or 'expanding mandrel set' (lathe, between centres or with a Morse-taper shank), 'expanding sleeve' and 'expanding mandrel sleeve' (standard, flush, segmented and serrated types, Birla Precision), 'expansion arbor', 'ring expanding mandrel' (jewellery and small lathes, e.g. Sherline (brand)), 'rubber expansion sanding drum' (nut-lock, screw-lock or quick-lock, Bearing Distributors), 'airshaft' or 'air expanding shaft' (lug type or strip type, Wikipedia 'Airshaft'), 'pneumatic parallel gripper' with 'I.D. gripping' or a 'spring-opening' gripping-force-maintenance version (SCHUNK 'IS' (brand) type), 'inflatable internal gripper' or 'bladder gripper', and 'pressure maintenance valve' for grippers (SCHUNK SDV-P (brand)). For home-made versions: a 'taper tap', socket-cap screws, M3-M5 screws and nuts, washers and 608 bearings for spool versions (Model Engineer forum; Printables 882417, 346075).
- **rules_of_thumb**: 
  - For friction grips, the gripping force must be many times the part's weight: SCHUNK rates its grippers for 'force-fit gripping with a coefficient of static friction of 0.1 and a safety factor of 2', which works out at a grip force of about 20 times the part's weight (e.g. 350 N for a 1.75 kg part) (SCHUNK CGP data sheet).
  - Gripping by shape (fingers hooking under a lip or into a groove) allows 'significantly higher permissible workpiece weights' than friction gripping (SCHUNK CGP data sheet).
  - Each precision expanding sleeve covers only about 0.8 mm of bore size as standard (the page's inch figure of 0.32 in appears to be a misprint for 0.032 in), with special types expanding up to 6.3 mm on large diameters; precision double-angle sleeves hold to 0.013 mm run-out (Birla Precision).
  - Fit an over-expansion stop: commercial mandrels have one 'to avoid over-stressing on the expanding sleeve' (Birla Precision).
  - A plain (non-expanding) tapered mandrel has a taper of about 0.005 in per foot and is driven into an accurate hole to grip by friction (Wikipedia 'Mandrel').
  - Shop-made mandrel: turn a bar to the bore size, drill and tap the end with a taper tap, slit it into four, and tighten a screw so the taper spreads the fingers (Sparey, 'The Amateur's Lathe', as described on the Model Engineer forum); slot width hardly matters, about 0.7 mm is fine, and expanding the mandrel slightly before turning it to final size gives even clamping (Hobby-Machinist forum).
  - Air gripper force is proportional to air pressure (+20% pressure gives +20% force) (PFA 'What is an Air Gripper?'); SCHUNK CGP grippers run at 6 bar nominal, with a minimum of 2.5 bar, or 4 bar for spring-assisted versions (SCHUNK CGP data sheet).
  - Inflatable bladder grippers often need 'very high air or hydraulic pressure' to grip properly and can have sealing problems (US patent 4770456).

### When to use it

- **everyday_examples**: 
  - The rubber sanding drum on a rotary tool or drill, which swells when you tighten its nut or screw to hold the sanding band (Bearing Distributors)
  - A jeweller's or hobbyist's expanding ring mandrel that holds a ring on a drill or lathe for filing and polishing (Printables 882417; Sherline video)
  - Filament spool holders whose hub expands to grip the spool's centre hole (Printables 346075)
  - The airshaft that grips the cardboard core of a big roll of paper or plastic film in printing and packaging machines (Wikipedia 'Airshaft')
- **when_to_use**: Use it when you have to hold a part by its hole: to machine, sand or polish the outside of a ring, bush, wheel or case back so the outside ends up true to the hole (Birla Precision; Printables 1854987); when the outside is delicate and must not be touched, like gear teeth (Ozobot ORA guide); when a robot must pick up rings, cups, cones, tubes or roll cores from the inside (MatterHackers 'Slight Malfunction'; Wikipedia 'Airshaft'); and when the hole is blind or only one end is reachable (Birla Precision).
- **when_not_to_use**: Avoid it when the part has no reasonably round, clean bore, when the bore is too thin-walled or soft and would bulge or crack, or when sizes vary more than the mandrel's small range (Birla Precision; Printables 346075) - use an outside grip such as a collet or scroll chuck instead. Avoid friction-only grips for heavy parts held overhead; grip by shape (a lip or groove) or add a spring-assisted or braked gripper (SCHUNK CGP data sheet). Avoid inside grips on stacked or nested parts: REV Robotics' Power Play guide preferred outside gripping 'to reduce the chances of picking up more than one element' (REV FTC Kickoff Concepts). Avoid bladders where burrs or sharp edges are inside the bore (US patent 4955655).
- **environment_limits**: Printed PLA mandrels soften and deform above about 60 °C and degrade in UV light; PETG is fine below about 80 °C (Prusa PLA and PETG guides). Printed plastic creeps under constant load, so the grip of a printed mandrel can fade over time (Filament Specs 'Creep Resistance') ⚑ [uncertain: not measured for mandrels]. Oil or grease in the bore lowers friction and grip ⚑ [uncertain: no source opened]. Rubber and silicone bladders wear and can be cut; failures can be sudden (US patent 4955655). Air grippers lose grip with pressure (PFA 'What is an Air Gripper?'). *(⚑ parts need confirming)*
- **safety_notes**: A powered inside gripper can drop its part if air pressure or power is lost: 'A gripper will relax its grip on an object when air pressure is lost. This may cause the object to be dropped' (PFA 'What is an Air Gripper?'). Use a spring-assisted version (for inside gripping the spring must push outward, SCHUNK 'IS' type), a pressure maintenance valve, a brake or a self-locking drive, keep the part low, and never stand or reach under a part held this way (SCHUNK CGP data sheet). Bladders can fail suddenly (US patent 4955655). On lathes and drills, a part that slips off a spinning mandrel can be flung out: tighten fully and keep clear of the line of the part ⚑ [uncertain: general workshop practice, no source opened]. Don't over-expand: commercial mandrels have an over-expansion stop to protect the sleeve (Birla Precision). Robot arms need a slow test speed and an emergency stop within reach (Ozobot ORA guide). Keep fingers out of the fingers' and arm's path. *(⚑ parts need confirming)*
- **common_failures**: Slipping because the grip force is too low for the part's weight or the bore is oily: size the force with a large safety margin (SCHUNK CGP data sheet). Part dropped when air or power fails (PFA 'What is an Air Gripper?'). Part not centred or wobbling because the sleeve expands unevenly: expand slightly and turn to size (Hobby-Machinist forum) or use a precision double-angle sleeve (Birla Precision; US patent 6832756). Cracked or over-stressed sleeves from over-expanding (Birla Precision). Chipped printed fingers on hollow cardboard cores (Printables 346075) or snapped jaws from the wrong print orientation (Printables 882417). Burst or cut bladders from burrs (US patent 4955655). A robot gripper that misses the hole because of misalignment (Ozobot ORA guide), or that picks up two nested parts at once (REV FTC Kickoff Concepts).
- **related**: 
  - Collet (and keyless chuck): grips a rod from the outside by squeezing inward; the 'expanding collet' variant is this entry
  - Internal tube anchors (star nut, expansion plug): uses the same expanding idea as a semi-permanent fixing inside a tube, not as a quick-release grip
  - Scroll mechanism (self-centring scroll chuck, spiral-slot plate): a chuck whose jaws can also be opened against the inside of a bore; covers a much wider size range
  - Press-fit and expanding inserts (tap-in insert): expand once to stay in a hole permanently
  - Wall plug (expansion anchor for solid walls): expands inside a drilled hole to anchor a screw; permanent
  - Taper fit (Morse taper): grips by wedging a cone into a cone with no moving fingers
  - Keyless locking bush (taper-lock bush, shaft locking device): a pair of tapered rings that expand and contract to lock a hub to a shaft
  - Compliant gripper and force amplifier / Fin-ray gripper: grip from the outside with flexing fingers
  - Granular jamming gripper (coffee-balloon gripper) and Vacuum (suction) gripper: other ways to pick parts without precise jaws; a jamming balloon can also be pushed into an opening
  - Bellows and inflatable actuators (air bag, air spring): the same inflating idea used to push rather than grip
  - Air or hydraulic cylinder (pneumatic cylinder, hydraulic ram): the usual actuator behind a powered inside gripper

### Pictures, videos and models

- **links**: 
  - [H. P. King Expanding Mandrels (US Patent Office drawing, 1874, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:H._P._King_Expanding_-_Mandrels_-_DPLA_-_3e18df8d7fdf3370ffcd9787f697a9e1_(page_1).jpg): Historic patent drawing of an expanding mandrel *(licence: Public domain)*
  - [Airshaft closeup.jpg (Alexander Davronov, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Airshaft_closeup.jpg): An airshaft inside a paper roll core with its air inlet; the caption in Wikipedia 'Airshaft' notes the protruding holders that expand when air is let in *(licence: CC BY-SA 4.0)*
  - [Model Engineering Basics: No 6 An Expanding Mandrel (SteamWorx, YouTube)](https://www.youtube.com/watch?v=gX25t4OaNOI): Making a simple expanding mandrel in a home workshop (title and channel verified via YouTube oEmbed; video content not viewed) *(licence: link only (standard YouTube licence))*
  - [Expansion Arbors --- No through hole...No Problem..Take a Look (Joe Pie, YouTube)](https://www.youtube.com/watch?v=J1RFTRzuAcU): Expansion arbors for parts with blind holes; forum users describe Joe Pie's videos as making mandrels with O-rings instead of slitting (Hobby-Machinist forum) (title and channel verified via YouTube oEmbed; video content not viewed) *(licence: link only (standard YouTube licence))*
  - [ORA Expansion Gripping: Getting a Grip from Within, Student Guide (Ozobot)](https://classroom.ozobot.com/wp-content/uploads/2026/07/ORA-Expansion-Gripping-Getting-a-Grip-from-Within-Student-Guide.MOzGTDjKRv6effhDH6GTlwxO.pdf): Classroom robot-arm lab with a photo of a finger gripper expanded inside a gear's centre hole, placing it on a peg; the gears and wall can be 3D-printed *(licence: link only)*
- **make_it_yourself**: 
  - [Expanding ring mandrel (Bobino, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/882417-expanding-ring-mandrel): Printed split mandrel for a drill: an M4 nut and M4 x 30 bolt expand it to hold rings of 13.2 to 20.2 mm for filing and sanding; PLA, 5 perimeters *(licence: CC BY (Creative Commons Attribution))*
  - [Ankermake M5 - Spoolholder - Expanding Mandrel (Drekentai HieloRey, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/346075-ankermake-m5-spoolholder-expanding-mandrel): Expanding spool hub with 12 keys pushed out by threaded expansion collars, from 50 to about 59 mm, on two 608 bearings; a tight-tolerance print with a test piece *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Watch Case Back Polishing Arbor - Internal Expanding Collet / ID Chuck (hummi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1854987-watch-case-back-polishing-arbor-internal-expanding): Split-collet mandrel expanded by an M5 screw and nut that holds watch case backs or bezels from the inside, so the outside can be polished in a drill or lathe *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Can Internal Expanding collet (tylermor, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/129962-can-internal-expanding-collet): Screw-and-nut expanding mandrel that clamps inside a standard US soda can *(licence: CC BY (Creative Commons Attribution))*
  - [Expanding ring mandrel for drill (Damien Villeneuve, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1803272-expanding-ring-mandrel-for-drill): Simple ring mandrel for a drill in two size ranges, 13-20 mm and 18-26 mm *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A three-panel cut-away: (1) a slotted sleeve on a tapered bar, with an arrow showing the nut pushing the sleeve up the taper and small arrows showing the sleeve swelling against a ring; (2) a robot finger gripper inside a gear's hole with outward arrows; (3) a rubber bladder inside a tube, deflated then inflated, with a red 'air lost = part drops' warning arrow.
- **sources**: 
  - https://en.wikipedia.org/wiki/Mandrel
  - https://en.wikipedia.org/wiki/Airshaft
  - https://classroom.ozobot.com/wp-content/uploads/2026/07/ORA-Expansion-Gripping-Getting-a-Grip-from-Within-Student-Guide.MOzGTDjKRv6effhDH6GTlwxO.pdf
  - https://patents.google.com/patent/US4770456
  - https://patents.google.com/patent/US4955655
  - https://patents.google.com/patent/US6832756
  - https://www.birlaprecision.com/product/bpt/expanding-mandrels-and-sleeves.html
  - https://www.model-engineer.co.uk/forums/topic/expanding-mandrels/
  - https://www.hobby-machinist.com/threads/home-made-expanding-mandrels.64513/
  - https://www.pfa-inc.com/what-is-an-air-gripper/
  - https://a.storyblok.com/f/298593/x/71527a6786/cgp-catalog-section.pdf
  - https://schunk.com/us/en/sistemi-di-presa/pinza-parallela/c/PUB_8295
  - https://products.bearingdistributors.com/category/sanding-drums
  - https://www.matterhackers.com/articles/3d-prints-robot-for-competition
  - https://docs.revrobotics.com/ftc-kickoff-concepts/powerplay-2022-2023/intake
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://commons.wikimedia.org/wiki/File:H._P._King_Expanding_-_Mandrels_-_DPLA_-_3e18df8d7fdf3370ffcd9787f697a9e1_(page_1).jpg
  - https://commons.wikimedia.org/wiki/File:Airshaft_closeup.jpg
  - https://www.youtube.com/watch?v=gX25t4OaNOI
  - https://www.youtube.com/watch?v=J1RFTRzuAcU
  - https://www.youtube.com/watch?v=ceuVGYqovXw
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: tube, rod or extrusion, something to grip
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, making_tips_3d_printing, power, safety_notes

## 341 Strut hub (geodesic dome hub, space-frame node)

*clamping, magnetic & friction connections.* A connector that joins three to six sticks, dowels, tubes or wooden struts at set angles in one node, to build domes, frames and trusses from straight pieces

*Also covers:* Also covers printed hubs for sticks, skewers and timber, flattened-and-bolted conduit domes, and ball nodes in space frames. Safety: don't climb on or load printed hubs.

### What it is

- **plain_name**: A star-shaped or ball-shaped connector with several sockets or arms pointing out at set angles, so you can plug or bolt sticks, dowels, tubes or planks into it and build a dome or frame out of nothing but straight pieces
- **term**: Strut hub (node connector): the geodesic dome hub and the space-frame node
- **aliases**: 
  - geodesic dome hub; dome hub; geodesic connector; dome connector; vertex hub (Domerama 'Geodesic Hub Connectors'; Printables model titles)
  - 4-way, 5-way and 6-way connector or hub (by the number of struts it joins) (Desert Domes 'Dome Formulas')
  - hub-and-strut dome (a dome whose struts are tied together by steel hubs) (Wikipedia 'Geodesic dome')
  - flattened-conduit dome; conduit dome; EMT dome (strut ends flattened, drilled and bolted at each vertex) (Wikipedia 'Geodesic dome'; Mike Tyka 'Playa dome')
  - star hub; pipe hub; pipe-section hub with steel strap; T-blocking hub; disc hub (Domerama)
  - space-frame node; ball joint system; ball node; MERO node (MERO (brand), Mengeringhausen Rohrbauweise) (Wikipedia 'Space frame'; Virginia Tech SAFAS 'Mero System')
  - plate joint, slot joint, shell joint and socket joint systems (other space-frame node types, e.g. Unistrut (brand), Triodetic (brand), Nodus (brand)) (Virginia Tech SAFAS 'Nodular or Piece-Small Systems')
  - printed stick hub; skewer connector; popsicle-stick hub; straw connector (Printables model titles)
  - connector node (construction toys): Zometool (brand) ball node; Tinkertoy (brand) spool (Wikipedia 'Zometool'; Wikipedia 'Tinkertoy')
  - hubs (brand) ball-connector dome hubs (Printables 998685)
- **family**: clamping, magnetic & friction connections
- **other_families**: interlocking joints & joinery, print-in-place & 3D-printing joints
- **one_liner**: A single connector that holds the ends of three to six (or more) straight struts at fixed angles where they meet, so a pile of sticks, tubes or planks can be built into a rigid dome, frame or truss.
- **complexity**: A few parts at each node. Printed stick hub: one printed part with sockets, plus the sticks (Printables 370482). Flattened conduit: no separate hub at all; the flattened, drilled strut ends are stacked on one bolt with a nut (Wikipedia 'Geodesic dome'). Timber hubs: a steel pipe section or plate, bolts or a steel strap, or ball connectors held by a screw, wing nut and washer (Domerama; Printables 998685). Space-frame ball node: a forged steel ball with threaded holes, and tubes with welded cone-shaped end fittings, each held by a bolt through a sleeve (Virginia Tech SAFAS 'Mero System').
- **how_it_works**: The hub's sockets, arms or threaded holes point in exactly the directions the struts must take, so it fixes the angles between them, and the strut lengths then fix the shape (Desert Domes 'Dome Formulas'). Each strut is held by being pushed into a snug socket, bolted or pinned through, screwed, or clamped (Printables 370482; Wikipedia 'Geodesic dome'; Domerama). Because the struts form triangles, loads travel along the struts as push and pull rather than bending, which is what makes a space frame or geodesic dome strong and light (Wikipedia 'Space frame'). Until the last triangle is closed the frame is floppy; once complete it becomes 'one whole stiff thing' (Printables 175330).

### Finder attributes

- **job**: 
  - join and hold: joins the ends of several struts at one point (Wikipedia 'Geodesic dome'; Virginia Tech SAFAS)
  - line parts up exactly: the hub sets the angle of each strut so the frame takes the intended shape; some printed hubs and toy nodes are keyed so each strut can only go in its correct socket (Printables 370482; Wikipedia 'Zometool')
- **motion**: none: a finished frame is rigid. During assembly a single-bolt conduit vertex lets struts swing until the triangles are closed (Printables 175330 describes the frame as 'quite flimsy until the last piece is fitted'); some hubs flex slightly so one design fits several dome sizes (Domerama 'vertex hub'; Printables 186195)
- **degrees_of_freedom**: 0 when the frame is complete: each strut is fixed by its hub at both ends, and the triangles stop the joints turning (Wikipedia 'Space frame'). A single-bolt vertex on its own behaves like a hinge (each strut can pivot about the bolt) and only becomes rigid as part of the triangulated frame ⚑ [uncertain: reasoning from Wikipedia 'Space frame' pin-jointed truss description]. *(⚑ parts need confirming)*
- **special_behaviour**: 
  - none of the listed behaviours: it simply joins and sets angles
  - keyed sockets (a related feature): Zometool's node holes are rectangular, triangular or pentagonal to match the strut cross-section, so a strut only fits in the right direction (Wikipedia 'Zometool'); printed hubs mark sockets A, A' and B so the right hubs are joined (Printables 370482)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): struts sit in shaped sockets, or a bolt, pin or screw passes through the strut and hub (Wikipedia 'Geodesic dome'; Domerama: Lotus Domes poles fixed with stainless steel pins; Printables 998685 deck screws)
  - friction or clamping (force-fit): snug push-fit sockets (Printables 370482; Domerama: the Vertex hub 'uses a friction fit to secure its pipes'), a bolt clamping the stack of flattened ends (Wikipedia 'Geodesic dome'), or a screw and wing nut clamping ball connectors into the hub (Printables 998685)
  - material bond (glue, solvent or melting): only in welded steel or aluminium frames and glued model kits (Wikipedia 'Geodesic dome': aluminium frames 'bolted or welded together')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: bolted, pinned and push-fit hubs can be taken apart, and portable domes are designed for it, e.g. 'if the dome is portable, have a castellated nut with a cotter pin' (Wikipedia 'Geodesic dome'); the simple connection design of space-frame nodes 'facilitates the erection and dismantling of the structure' (Virginia Tech SAFAS). Semi-permanent or permanent when nailed, glued or welded.
- **reuse_cycles**: many times for bolted or pinned metal hubs (e.g. a 10 m Lotus Domes dome put up by one person in about 3 hours, Domerama); ⚑ [uncertain] a few times for printed plastic hubs, which wear and can crack (Printables 175330) *(⚑ parts need confirming)*
- **tools_needed**: Push-fit stick, skewer and straw hubs: none (Printables 370482, 480245). Flattened conduit: pipe cutter or saw, a vise and heavy hammer or an arbor press to flatten the ends, a drill press, spanners (Stanford 'Geodesic Dome Assembly'; Mike Tyka 'Playa dome'). Timber hubs: saw, drill, spanners or a screwdriver, an Allen key for the wing-nut screw of ball-connector hubs (Printables 998685), a strap-tensioning tool for strap hubs (Domerama).
- **seal**: none: it is a frame joint; a dome is made weathertight by its cover or panels, not by the hubs
- **load**: Ranges from toy-light to building-heavy. Space-frame tubes with ball nodes carry 4.5 to 450 kips (about 20 to 2000 kN) (Virginia Tech SAFAS 'Mero System'). DIY domes: struts carry push and pull, and the hub is the weak point: 'the seams and especially the hubs in most wooden-framed domes are the weakest point in the structure' (Wikipedia 'Geodesic dome'). Printed hubs are light duty: printed connectors on a 3.8 m 3V dome broke in the lower sections within a season and 'were definitely too weak for a 3/4 sphere of this size' (Printables 175330). A commercial plastic ball-connector hub system limits domes to under 6 m across and struts to 500 g each (30 kg total) (Printables 998685, quoting hubsTM).
- **adjustable**: Mostly no: the angles are fixed by the hub and the shape by the strut lengths. Some hubs flex to suit several dome sizes (Domerama 'vertex hub'; Printables 186195), ball-connector hubs let struts settle before the wing nut is tightened (Printables 998685), and printed hubs can be regenerated for any frequency and strut size in OpenSCAD (Printables 601680).
- **play_and_precision**: Small play once tightened, but accuracy matters: strut lengths must match the calculated 'strut factors' (Desert Domes), and for hubless timber domes the compound angle cuts should be accurate 'to a tenth of a degree' (Domerama). Flexible conduit and slightly flexing hubs take up small errors (Domerama). Push-fit printed sockets must be snug but not so tight that sticks break (Printables 370482).
- **access_needed**: end of a tube or shaft: struts are joined at their ends, by pushing into sockets or bolting through end holes; bolted hubs need a hand on both sides of the node for the bolt and nut (Printables 998685: wing nut on the inside)
- **materials**: Struts: 3/4 in EMT electrical conduit (Wikipedia 'Geodesic dome'; Mike Tyka), PVC pipe, timber (50 x 25 mm, 2x4, 1.5 x 1.5 in), bamboo, wooden dowels, popsicle sticks, bamboo skewers and drinking straws (Printables 601680, 998685, 370482, 120101, 480245; Domerama). Hubs: steel pipe sections with stainless straps, laser-cut steel star hubs, machined plastic, PVC (Domerama); forged galvanised steel balls (Virginia Tech SAFAS 'Mero System'); printed PLA, PETG or ASA, or PLA with a TPU base (Printables 601680, 998686, 175330).
- **maker_difficulty**: easy for printed hubs with sticks, skewers or straws (print, then push in sticks); moderate for a conduit dome (cutting, flattening and drilling dozens of struts accurately, Stanford 'Geodesic Dome Assembly'); hard for a large timber dome that must withstand wind and snow, which needs proper hubs and structural design (Printables 998686, 175330; Wikipedia 'Geodesic dome')

### Making it

- **processes**: 
  - 3D print (FDM): hubs for popsicle sticks, skewers, straws, dowels and timber struts, including OpenSCAD hub generators (Printables 370482, 120101, 480245, 601680)
  - woodwork: timber struts with compound-angle ends or straight-cut ends in hubs; pipe-section and T-blocking hubs (Domerama; Printables 175330)
  - sheet metal: laser-cut steel star hubs and brackets, bent flat-bar hubs, steel strap hubs (Domerama)
  - off-the-shelf part: EMT conduit and bolts, commercial dome hub kits, space-frame node systems, construction toys (Wikipedia 'Geodesic dome'; Domerama; Virginia Tech SAFAS)
- **print_in_place**: no: hubs are printed as separate connectors and assembled with bought or cut struts; one design prints a flexible TPU base and a PLA top in one job with a pause, but still needs separate struts (Printables 175330)
- **making_tips_3d_printing**: 1) Print one hub first and test the fit of your sticks; adjust the slicer's XY size compensation until the stick is snug 'but not too difficult to fully insert', because over-tight sockets can break sticks and hurt you (Printables 370482). 2) Measure your actual sticks: standard popsicle sticks measured 113 x 9.5 x 2 mm (Printables 370482); skewers come in 3 mm and 5 mm (Printables 120101, 8278). 3) For timber struts use PETG-like filament for durability, and a 0.8 mm nozzle to print faster (Printables 601680). 4) For outdoor domes use ASA (UV-resistant, up to 93 °C, Prusa ASA guide), 0.15 mm layers and 50% infill, printed in an enclosure (Printables 998686). PLA degrades in UV and softens above about 60 °C (Prusa PLA guide). 5) Orient hubs so the arms lie along the layers: 'Like wood, FFF prints are stronger in one direction than another' (Prusa 'Modeling with 3D printing in mind'); layer adhesion in PLA is weaker than in other materials (Prusa PLA guide). ⚑ [uncertain: no hub-specific orientation test found] 6) Use the OpenSCAD generator for other frequencies and strut sizes, and a dome calculator for strut lengths (Printables 601680; Desert Domes). 7) Mark or colour-code hubs and struts: printed letters on the hubs (Printables 370482) and spray-painted strut ends (Mike Tyka) make assembly much easier. 8) Don't scale printed hubs up to building size: one maker's printed connectors on a 3.8 m dome broke within a season and were replaced with cheaper, stronger metal straps (Printables 175330). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: '3/4 inch EMT conduit' and '5/16 hex bolts' with nuts for a conduit dome (Mike Tyka); 'castellated nut' and 'cotter pin' or removable threadlocker for the vertex bolts (Wikipedia 'Geodesic dome'); 'geodesic dome hub kit', 'dome connector kit', 'star hub' (laser-cut steel), 'pipe hub' with 'stainless steel banding strap' (Domerama); hubs (brand) ball-connector hubs with an M6 countersunk screw, M6 wing nut, 30 mm washer and #8 x 2-1/2 in deck screws (Printables 998685); 'space frame node', 'ball joint space frame' (MERO (brand) and similar, Virginia Tech SAFAS); Zometool (brand) and Tinkertoy (brand) construction sets for models (Wikipedia).
- **rules_of_thumb**: 
  - Strut length = dome radius x strut factor. For a 2V (two-frequency) dome: struts A = 0.61803 (35 in a half dome) and B = 0.54653 (30 in a half dome), with ten 4-way, six 5-way and ten 6-way hubs (Desert Domes 'Dome Formulas').
  - A 2V half dome has 26 vertices, so 26 bolts for a conduit build; one example used 3/4 in EMT with 5/16 in bolts, 1-1/2 in long for 4-way and 2 in long for 5- and 6-way vertices (Mike Tyka 'Playa dome').
  - For flattened-and-drilled struts, add about 2 x 3/4 in = 1.5 in (about 4 cm) to each calculated strut length so the holes can be drilled 3/4 in from each end (Domerama); another builder drilled about 1-1/4 in from the end (Mike Tyka) - the calculated length is always hole centre to hole centre.
  - Lock the vertex nuts with removable threadlocker, or with a castellated nut and cotter pin for a portable dome (Wikipedia 'Geodesic dome').
  - Hubless timber domes need compound angle cuts accurate to about a tenth of a degree (Domerama).
  - Keep plastic-hub domes small and light: under 6 m across, struts under 500 g each and 30 kg in total, and not used as climbing frames (Printables 998685, quoting hubsTM).
  - MERO-type space-frame nodes have 18 faces at 45°, 60° and 90° and their multiples, with member lengths in ratios of 1.414 or 1.732 (Virginia Tech SAFAS 'Mero System').
  - Assemble domes from the top down: build the central pentagon first and 'walk the structure up' (Mike Tyka 'Playa dome'; Stanford 'Geodesic Dome Assembly').

### When to use it

- **everyday_examples**: 
  - Tinkertoy, whose wooden spools have holes every 45° around the edge for sticks (Wikipedia 'Tinkertoy')
  - Zometool and similar ball-and-strut kits for maths and molecule models (Wikipedia 'Zometool')
  - A dome climber on a playground, often built from bolted tubes (Wikipedia 'Geodesic dome'; Wikimedia Commons 'Climberdome.JPG')
  - Space-frame roofs over airports and stations, and the portable lighting trusses over concert stages (Wikipedia 'Space frame')
- **when_to_use**: Use a strut hub when you want to build a large, light, rigid shape from short straight pieces: model and toy domes from sticks, skewers or straws; garden greenhouse or shade domes and festival shelters from conduit or timber; frames, trusses and sculptures where many members meet at odd angles (Printables 370482, 601680; Mike Tyka 'Playa dome'; Wikipedia 'Space frame'). Printed hubs are good for models, decorations such as an LED light ball, and small light structures (Printables 120101).
- **when_not_to_use**: Don't use printed hubs for anything people climb on, hang from or shelter under in wind or snow: hubs are the weakest part of most wooden domes (Wikipedia 'Geodesic dome') and printed connectors on a 3.8 m dome failed within a season (Printables 175330); use metal hubs, bolted conduit or a professionally designed structure instead. For right-angle tube frames, use clamp-on tube fittings or aluminium-extrusion connectors; for flat sheet parts, use a cross-halving slot joint; for a stick structure with no connectors at all, see Reciprocal frame. Paneled timber domes can avoid hubs altogether by bolting triangles together (Wikipedia 'Geodesic dome').
- **environment_limits**: Outdoors, PLA hubs degrade in UV and soften above about 60 °C; ASA is UV-resistant to about 93 °C (Prusa PLA and ASA guides). Wind and snow add large loads: a hub maker advises extra secure caps where domes may see high winds or more than 20 cm of snow (Printables 998686). Damp and condensation inside domes 'tend to quickly degrade wooden framing' (Wikipedia 'Geodesic dome'). Printed plastic creeps under constant load (Filament Specs 'Creep Resistance') ⚑ [uncertain: not measured on hubs]. Bolts loosen with movement unless locked (Wikipedia 'Geodesic dome'). *(⚑ parts need confirming)*
- **safety_notes**: Don't climb on, hang things from or load printed or plastic hubs: one hub maker states its domes 'are not climbing frames and are not intended for suspending heavy weights' and should not be installed in public spaces (Printables 998685, quoting hubsTM). Test one hub first. A dome is floppy and can fold up until the last strut is fitted (Printables 175330), so keep people out from under it during assembly. Over-tight stick sockets can break sticks and injure you (Printables 370482). Flattened conduit ends have sharp edges (Mike Tyka padded them to protect the cover); wear gloves when cutting and flattening tube (Stanford 'Geodesic Dome Assembly'). Bamboo skewer points are sharp ⚑ [uncertain: no source opened]. Any dome people go inside or climb on is a structure: follow local building and playground rules and use rated parts ⚑ [uncertain: no regulator page opened]. *(⚑ parts need confirming)*
- **common_failures**: Printed hubs cracking at the arms, especially low in the dome where loads are highest (Printables 175330). Ball connectors popping out of their sockets in wind or snow unless secure caps and washers are fitted (Printables 998686). Struts too tight in sockets (breaking sticks) or too loose (frame falls apart): tune XY compensation (Printables 370482). Dome not closing because strut lengths or hole positions are wrong: calculate from hole centre to hole centre and add the end allowance (Domerama; Desert Domes). Mixing up strut lengths during assembly: colour-code them (Mike Tyka; Printables 175330). Nuts working loose: use threadlocker or castellated nuts and cotter pins (Wikipedia 'Geodesic dome'). Wooden struts and hubs rotting from condensation (Wikipedia 'Geodesic dome').
- **related**: 
  - Clamp-on tube fittings (slip-on structural fittings): join round tubes, mostly at right angles, with set screws; a strut hub joins many members at compound angles
  - Reciprocal frame (self-supporting stick bridge): sticks rest on and lock each other with no connector
  - Tensegrity (floating struts held by cords): struts don't touch; cords hold them in place
  - Aluminium-extrusion connectors (T-slot nuts and brackets): build square frames from slotted bars
  - Cross-halving slot joint (egg-crate joint): slots flat sheets into each other
  - Metal brackets and plates (angle bracket, mending plate, joist hanger): join timber at a single joint, usually two members
  - Ball-and-socket joint (lockable ball head): the ball connectors in some dome hubs work like a ball joint locked by a screw
  - Split-part joints for large prints: other ways to build something bigger than the print bed
  - Mortise and tenon / Dowel and biscuit joints: traditional two-member timber joints with no separate hub

### Pictures, videos and models

- **links**: 
  - [Mero Knoten Grafik.jpg (Martin Maloblocki / Klaus Knebel, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Mero_Knoten_Grafik.jpg): Computer rendering of a MERO space-frame ball node with tubes bolted into it *(licence: Copyrighted free use)*
  - [Zome vertices.jpg (Zometool, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Zome_vertices.jpg): Zometool ball nodes with shaped holes and struts *(licence: CC SA 1.0)*
  - [Climberdome.JPG (GreenGlass1972, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Climberdome.JPG): A playground dome climber built from tubes joined at hubs *(licence: Public domain)*
  - [Geodesic Hub Connectors (Domerama)](https://www.domerama.com/dome-basics/geodesic-dome-hub-connectors/): Photos of many hub types: flattened conduit, star hubs, pipe-section hubs with straps, T-blocking, bamboo star hubs, plastic and 3D-printed connectors *(licence: link only)*
  - [Dome build methods - flattened conduit (Paul Robinson, YouTube)](https://www.youtube.com/watch?v=RasWKQfpFzY): The flattened-and-bolted conduit dome method (title and channel verified via YouTube oEmbed; video content not viewed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [1V 2V 3V 4V 5V 6V Connector for Geodesic Dome with customizer (Florian, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/601680-1v-2v-3v-4v-5v-6v-connector-for-geodesic-dome-with): OpenSCAD hub generator for 1V to 6V domes with rectangular or round struts; ready-made STLs for 50 x 25 mm timber; lists the hubs needed for each dome *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Geodesic Dome hubs for popsicle sticks (flipmarley, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/370482-geodesic-dome-hubs-for-popsicle-sticks): Lettered 5-way and 6-way hubs and base hubs for a popsicle-stick sphere or half dome with no stick cutting; includes fit-tuning advice *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Geodesic Dome Hubs (3mm Dia. Bamboo Skewer Style) (zuberio, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/120101-geodesic-dome-hubs-3mm-dia-bamboo-skewer-style): 2V sphere hubs for 3 mm bamboo skewers (60 sticks of 208 mm and 55 of 180 mm), used as an LED light-ball frame *(licence: CC BY (Creative Commons Attribution))*
  - [Straw building connectors (olsenge, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/480245-straw-building-connectors): Cone-ended printed connectors for 7 mm drinking straws, for building frames and structures *(licence: CC BY (Creative Commons Attribution))*
  - [Dome Formulas (Desert Domes)](https://www.desertdomes.com/formula.html): Strut factors and hub counts for 1V to higher-frequency domes, to work out strut lengths for any dome radius *(licence: link only)*
- **diagram_idea**: Side-by-side close-ups of three hubs: a printed 6-way stick hub with sockets angled slightly downward, five flattened conduit ends stacked on one bolt, and a steel ball node with threaded holes; below them a small 2V dome with the 4-, 5- and 6-way hubs coloured differently.
- **sources**: 
  - https://en.wikipedia.org/wiki/Geodesic_dome
  - https://en.wikipedia.org/wiki/Space_frame
  - https://en.wikipedia.org/wiki/Mero-Schmidlin
  - https://en.wikipedia.org/wiki/Tinkertoy
  - https://en.wikipedia.org/wiki/Zometool
  - https://www.setareh.arch.vt.edu/safas/010_system_04_mero.html
  - https://setareh.arch.vt.edu/safas/010_system_01_nodular.html
  - https://www.domerama.com/dome-basics/geodesic-dome-hub-connectors/
  - https://www.desertdomes.com/formula.html
  - https://science.miketyka.com/make/2010/02/04/playa-dome.html
  - https://graphics.stanford.edu/~munzner/dome/struts/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/asa_1809
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://commons.wikimedia.org/wiki/File:Mero_Knoten_Grafik.jpg
  - https://commons.wikimedia.org/wiki/File:Zome_vertices.jpg
  - https://commons.wikimedia.org/wiki/File:Climberdome.JPG
  - https://www.youtube.com/watch?v=RasWKQfpFzY
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: tube, rod or extrusion, shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** degrees_of_freedom, environment_limits, making_tips_3d_printing, reuse_cycles, safety_notes

## 364 Hose clamp (worm-drive clamp, ear clamp, spring hose clamp)

*clamping, magnetic & friction connections.* A metal band tightened round a hose or tube to squeeze it onto a spigot, also used as an all-purpose strap clamp for fixing things to poles and pipes

*Also covers:* Also covers ear (crimp) clamps, spring clamps, T-bolt clamps, and rubber-sleeve (no-hub) drain couplings held by worm-drive bands. Jubilee clip (brand) as an alias. Hose barb keeps only a short retention summary. Safety: moderate pressures only; cut band ends are sharp; over-tightening cuts soft hose.

### What it is

- **plain_name**: A metal strap that goes round a hose and is tightened with a screw (or squeezed shut, or springs shut by itself) so the hose is squashed onto the pipe it is pushed over and can't leak or pull off; the screw kind is also handy for strapping things to poles and pipes
- **term**: Hose clamp (worm-drive clamp, ear clamp, spring hose clamp)
- **aliases**: 
  - hose clamp, hose clip (Wikipedia 'Hose clamp')
  - worm-drive clamp, worm gear clamp, worm gear clip, screw/band clamp, band clamp; Jubilee Clip (brand, a genericized UK name; trademark of L. Robinson & Co) (Wikipedia 'Hose clamp')
  - Make-A-Clamp (brand): a roll of perforated band with separate worm-gear housings, to make clamps of any size (EFC International)
  - constant-tension clamp, spring-loaded worm-drive clamp, 'radial-worm-drive' clamp with an inner spring (EFC International; Freightliner service bulletin)
  - T-bolt clamp, T clamp (Wikipedia 'Hose clamp'; AMS Performance)
  - spring clamp, spring band clamp, constant tension band; wire spring clamp (Wikipedia 'Hose clamp'; EFC International)
  - wire clamp, double-wire clamp (Wikipedia 'Hose clamp'; EFC International)
  - ear clamp, pinch clamp, crimp clamp, single- or multi-ear clamp (Wikipedia: 'one or more “ears”'), StepLess ear clamp; Oetiker clamp (brand) (Wikipedia 'Hose clamp'; Oetiker data sheet; YouTube video title 'How to remove and install pinch clamps, or oetiker clamps')
  - plastic ratchet clamp, interlocking plastic clamp, polymer hose clamp (nylon PA66, PA12 or polypropylene) (Wikipedia 'Hose clamp')
  - no-hub coupling, no-hub band, rubber-sleeve coupling, shielded coupling, hubless coupling (Wikipedia 'Hose clamp' and 'Piping and plumbing fitting'; Charlotte Pipe)
  - clamp standards a beginner may meet in catalogues: SAE J1508 (32 hose clamp designs including screw, spring and T-bolt styles), NAS1922/NAS1924, and the US DoD CID A-A-52506 (Wikipedia 'Hose clamp')
- **family**: clamping, magnetic & friction connections
- **other_families**: seals & pass-throughs, hydraulics, pneumatics & vacuum
- **one_liner**: A hose clamp is a ring of metal band, wire or spring steel that is tightened round the end of a hose pushed over a spigot, barb or pipe, squeezing the hose so it seals and so it can't slide off; worm-drive types tighten with a screw and can be undone, ear clamps are crimped shut once, and spring clamps hold by their own springiness.
- **complexity**: Single piece or a few parts. Worm-drive: a slotted or embossed steel band, a housing riveted to one end, and a captive screw whose thread engages the band like a worm gear (Wikipedia 'Hose clamp'); constant-tension versions add a spring or a stack of disc springs (EFC International; Freightliner service bulletin). T-bolt: a heavy band, a T-shaped bolt and a nut ⚑ [uncertain: construction from catalogue photos, not a text source]. Spring clamp: one piece of spring-steel strip with interleaving tabs, or a loop of spring wire (Wikipedia). Wire clamp: a loop of heavy wire with a captive screw and nut (Wikipedia). Ear clamp: one stainless band with one or two formed 'ears' and an interlock (Oetiker data sheet). No-hub coupling: a rubber (neoprene) sleeve, a corrugated stainless shield and two or four worm-drive bands (Charlotte Pipe). *(⚑ parts need confirming)*
- **how_it_works**: The clamp is slid over the hose, the hose is pushed onto its spigot or barb, and the clamp is moved to sit over the spigot just behind the barb or bead and tightened (Wikipedia 'Hose clamp'; Boshart). Tightening shrinks the ring: in a worm-drive clamp the screw 'acts as a worm drive pulling the threads of the band'; in an ear clamp a pincer tool squeezes the ear shut, permanently deforming it and pulling the band tight; a spring clamp is held open with pliers and simply let go (Wikipedia). The squeeze presses the soft hose against the spigot all round, which makes the seal, and because the clamp sits behind the barb or bead, the hose can't slide off without stretching the clamp over it (Wikipedia 'Hose clamp'). Spring and constant-tension clamps keep pushing as the hose shrinks or relaxes with heat and age, while a plain screw clamp can lose some of its grip (EFC International; Freightliner service bulletin).

### Finder attributes

- **job**: 
  - join and hold: holds a hose or rubber sleeve onto a spigot, barb or pipe end; the screw-band type is also a general strap for fixing things round poles and pipes (Wikipedia 'Hose clamp')
  - seal it, or pass cables or fluid through: squeezes the hose onto the fitting so liquid or air can't leak, at moderate pressures only (Wikipedia 'Hose clamp')
- **motion**: none: the clamped joint is rigid; a rubber no-hub coupling allows a little flexing between pipes (Charlotte Pipe: maximum joint deflection 5 degrees for its neoprene coupling).
- **degrees_of_freedom**: 0 once tightened: the hose can't slide or turn on the spigot (a loose clamp lets it do both).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): spring clamps and constant-tension worm-drive clamps keep squeezing as the hose relaxes or the joint grows and shrinks with temperature, giving 'a continuously readjusting dynamic tightening effect' (EFC International); an ear clamp's ear and dimple give a little spring action to follow 'changes in diameter due to thermal expansion' (Oetiker data sheet)
  - none (plain worm-drive, T-bolt and wire clamps): they simply hold the tension the screw puts in; the ear clamp's only extra is that it is tamper-evident, because the crushed ear shows if it has been disturbed (Wikipedia 'Hose clamp')
- **holding_principle**: 
  - friction or clamping (force-fit): the band squeezes the hose onto the spigot; friction and the hose's grip on the barb hold it (Wikipedia 'Hose clamp')
  - shape (the parts interlock; form-fit): placed behind a barb or a raised bead on a tube, the clamp would have to stretch over the bump for the hose to slide off (Wikipedia 'Hose clamp')
  - spring force (a spring or springy part presses it in place): spring-steel band and wire clamps, and the springs in constant-tension clamps, provide the squeeze (Wikipedia 'Hose clamp'; EFC International)
- **input_output**: not applicable (Wikipedia notes a short hose clamped between two shafts can pass small amounts of power as a makeshift flexible coupling for lab mock-ups, but that is the hose's job, not the clamp's)
- **power**: passive (no power needed)
- **removability**: removable for worm-drive, T-bolt, wire and spring clamps (loosen the screw or open the spring with pliers); semi-permanent for ear clamps, which are crimped once and are removed by cutting or by prising the ear open with pliers, which spoils them (Wikipedia 'Hose clamp'; Oetiker pincer data sheet: pincers are for 'pinching and removing ear clamps'). No-hub couplings can be taken apart, but 'it is often not customary to re-use the clamps and rubber sleeves' because they may not seal well after being deformed (Wikipedia 'Piping and plumbing fitting').
- **reuse_cycles**: many times for stainless worm-drive and spring clamps if the screw and band are undamaged ⚑ [uncertain: no maker's reuse figure opened]; once for ear clamps (single stroke, 'do not apply secondary crimping force', Oetiker data sheet); usually once for no-hub sleeves (Wikipedia 'Piping and plumbing fitting'). The hose end may need trimming after each removal, and a stuck hose 'should never be removed by slitting' it, which can scratch the fitting (Wikipedia 'Hose clamp'). *(⚑ parts need confirming)*
- **tools_needed**: Worm-drive: a flat screwdriver or a 1/4 in nut driver for mini clamps and a 5/16 in nut driver for standard clamps (Boshart); a torque-limiting 'T' nut driver with a 60 in-lb slip clutch stops over-tightening (Boshart); no-hub couplings need a torque wrench or preset torque driver, since standard ones are designed for 60 in-lb and heavy-duty ones are installed with a torque wrench (Charlotte Pipe). Spring clamps: pliers, or hose-clamp pliers (Wikipedia 'Hose clamp'). Ear clamps: ear-clamp pincers, which also remove them (Oetiker pincer data sheet). T-bolt: a spanner or socket ⚑ [uncertain]. Cable-tie stand-ins: a cutter. *(⚑ parts need confirming)*
- **seal**: airtight or pressure (moderate pressures only): the clamp presses the hose evenly onto a smooth spigot; even pressure with 'no gaps' is the design goal, which is why wire clamps overlap their ends and StepLess ear clamps have no step inside (Wikipedia 'Hose clamp'; Oetiker data sheet). The seal needs a fitting that is 'smooth and free of nicks, scratches, or contamination' (Wikipedia). No-hub drain couplings seal with a neoprene gasket squeezed by the bands (Charlotte Pipe).
- **load**: Medium. Pressure: 'Hose clamps are typically limited to moderate pressures, such as those found in automotive and home applications'; at high pressures compression or crimp fittings are used instead (Wikipedia 'Hose clamp'). Pull-off: strong when the clamp sits behind a barb or bead (Wikipedia); two clamps side by side ('double clamping') 'will greatly reduce the chance of a hose blowing off the fitting' (Boshart). Holding force comes from screw torque: e.g. 35-45 in-lb (3.96-4.52 N m) for standard worm-drive clamps, with an ultimate (breaking) torque of at least 60 in-lb (6.8 N m) (Boshart). As a general strap round a pole it is strong in tension round the band but can slip along or round a smooth pole under a sideways or twisting load ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: yes for worm-drive and T-bolt clamps: re-tighten the screw. To check a worm-drive clamp properly, loosen it completely and re-tighten to the stated torque, because torque on these clamps normally drops about 30% soon after tightening and can't be checked by simply turning the screw (Freightliner service bulletin). Spring and constant-tension clamps adjust themselves; ear clamps can't be adjusted after closing (Wikipedia 'Hose clamp'; EFC International).
- **play_and_precision**: not applicable (it doesn't locate parts; a rubber no-hub coupling tolerates slight misalignment, up to 5 degrees of joint deflection for one maker's neoprene coupling, Charlotte Pipe; Wikipedia 'Piping and plumbing fitting')
- **access_needed**: end of a tube or shaft for closed-ring clamps: spring, wire and most ear clamps must be slid onto the hose before it is pushed onto the spigot (Wikipedia 'Hose clamp'), though some ear-clamp interlocks 'can be opened for radial installation' (Oetiker data sheet). A worm-drive band can be unscrewed fully and wrapped round from the side (Wikipedia: the loose end is fed into the housing), so it needs only access to one side for the screwdriver; point the screw head where a driver can reach it (Boshart).
- **materials**: Bands: stainless steel (grades 304, 316 or 430), zinc-plated steel, or plastics such as nylon 66, nylon 12 and polypropylene (Wikipedia 'Hose clamp'); Oetiker's StepLess ear clamps come in zinc-plated or galvanised steel or 1.4301 (304) stainless (Oetiker data sheet). No-hub couplings: type 301 stainless shield and bands, 305 stainless screws and a neoprene gasket to ASTM C564 (Charlotte Pipe). Bands are 'slotted' (perforated) or 'embossed' (non-perforated, 'European style'); embossed bands have no sharp slot edges to cut into the hose (FastFix / EFC International). Hoses and pipes clamped: rubber, silicone and PVC hose, polyethylene pipe on barbed inserts (heat the pipe first, Boshart), turbo silicone couplers on aluminium or steel pipe (AMS Performance), and cast-iron, copper and plastic drain pipe in no-hub couplings (Wikipedia 'Piping and plumbing fitting').
- **maker_difficulty**: easy: buy a clamp of the right size and tighten it with a screwdriver; the skills are choosing the size, placing it behind the barb and not over-tightening. Ear clamps need the special pincers.

### Making it

- **processes**: 
  - off-the-shelf part: metal hose clamps are bought; a worm-drive clamp of any length can be made from a roll of perforated band and loose housings (EFC International Make-A-Clamp kit)
  - 3D print (FDM): plastic clamps for low-pressure duty such as dust-collection and ventilation hose, and the spigots, adapters and barbs that metal clamps go over (Printables models in make_it_yourself)
- **print_in_place**: no: metal clamps are bought; printed plastic hose clamps are a different, weaker version, usually a one-piece ratchet or clasp strip or a two-piece clamp closed with a screw (Printables 485192, 1338893, 22483).
- **making_tips_3d_printing**: 1) Printed spigots under a metal clamp: a worm-drive clamp squeezes hard and plastics creep, so a printed spigot slowly shrinks away and the joint loosens, faster when warm. PLA 'gets soft and deforms at temperatures over 60 °C' and isn't for outdoor use; PETG suits indoor and outdoor parts 'with temperatures below 80 °C' (Prusa knowledge base 'PLA', 'PETG'). Re-check the clamp after a few days ⚑ [uncertain: creep rate not measured in an opened source]. 2) Give the spigot a raised bead or barb and put the clamp just behind it, so the hose can't slide off even if the squeeze relaxes (Wikipedia 'Hose clamp'). 3) Make the wall under the clamp thick and solid, and blend (fillet) the spigot into the body: one printed vacuum adapter broke 'along the layer lines at the cross section where the snout joins the fitting' (Ed Nisley's blog, Softsolder). 4) Don't use metal-pipe torque values on printed spigots; tighten just until the hose stops turning ⚑ [uncertain: no printed-spigot torque figure found]. 5) For hose barbs and leak-tight printed fittings, see the Hose barb entry. 6) Printed clamps: Marius Hornberger's tool-free dust-hose clamp was printed in PETG at 0.2 mm layers and 20% infill, with concentric top and bottom layers and 'the round section of the clamps should be solid'; it uses M5 hardware (Printables 22483). Print flat strap-style clamps lying down ('print horizontally (as generated) to keep good elasticity and strength'; Printables 244215). Hardware-free clasp clamps may be too loose at first; one remixer tightened the clasp so it 'won't disengage accidentally' (Printables 1338893). Small printed clamps may need scaling to about 105% to fit over a hose on a barb, and one designer 'wouldn't recommend' them 'for critical applications' (Printables 6758). 7) Keep printed clamps to low-pressure jobs such as dust collection, ventilation and holding tubes; use a metal clamp wherever fluid is under pressure (Wikipedia 'Hose clamp': moderate pressures only). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search catalogues for: 'worm drive hose clamp' or 'worm gear clamp' (SAE sizes, mini clamps for small hoses), 'Jubilee clip' (brand, UK), 'embossed band' or 'non-perforated' worm clamps for soft silicone hose (FastFix / EFC International), 'constant tension hose clamp' or 'spring-loaded worm clamp' (EFC International), 'T-bolt clamp', 'spring band clamp' or 'constant tension band', 'double wire clamp', 'ear clamp', 'stepless ear clamp' (Oetiker, brand), 'ear clamp pincers', 'hose clamp pliers', 'no-hub coupling' or 'shielded coupling' (CISPI 310 / ASTM C1277; heavy-duty to ASTM C1540) (Charlotte Pipe), 'Make-A-Clamp' band kits (EFC International), 'torque-limiting nut driver' (Boshart). For sizes, use a maker's size table rather than guessing, e.g. Oetiker's StepLess ear clamp data sheet or Charlotte Pipe's no-hub coupling article.
- **rules_of_thumb**: 
  - Choose the type by hose size: worm-drive clamps 'are normally used for hoses 1/2 inch diameter and up, with other clamps used for smaller hoses' (Wikipedia 'Hose clamp').
  - Choose the size with the hose already on its spigot: measure the hose's outside diameter there; it should be 'slightly above the average value of the diameter range of the clamp' (Oetiker data sheet). For worm-drive clamps, 'ensure after the hose clamp is tight the tail of the hose clamp is not too long' (Home Depot 'Hose Clamp Installation Guide – Worm Gear Clamps').
  - Position: leave at least 1/4 in (6 mm) of hose showing between the clamp and the hose end (Home Depot installation guide); on fully barbed inserts put the clamp 1/4 in from the end for fittings up to 1-1/4 in and 3/8 in for 1-1/2 in and larger, or centre it in the smooth groove behind the barbs (Boshart). Always behind the first barb or the bead, never on its crest (Wikipedia 'Hose clamp').
  - Worm-drive tightening torque: 35 lbf-in (4 N m) 'for most applications', minimum destructive torque 60 lbf-in (6.8 N m) for a stainless screw (Home Depot installation guide); Boshart gives 35-45 in-lb (3.96-4.52 N m) for #6 and larger clamps (ultimate 60 in-lb min.) and 10-12 in-lb (1.1-1.4 N m) for #4 and #5 mini clamps (ultimate 15 in-lb); Freightliner's chart for its cooling-system clamps runs from 31 ± 2.5 in-lb (1.26 in clamp) to 40 ± 2.5 in-lb (3.03 in clamp). 'NEVER tighten clamps beyond the rated ultimate torque' (Boshart).
  - Expect about 30% torque loss soon after tightening a spring-loaded worm-drive clamp; that is normal. To check one, loosen it completely and re-tighten to the stated torque; tightening an installed clamp further leads to over-tightening and leaks (Freightliner service bulletin).
  - Double clamping for extra hold: two clamps on a long insert with about 3/4 in between the bands, recommended for high pressure and where the joint carries weight (Boshart).
  - Ear clamps: close the ear in a single stroke of the pincers and never crimp twice; a clamp counts as properly closed only when the ear width has been reduced by at least 40% with the right closing force; the most it can shrink is ear width divided by π (Oetiker data sheet). Wikipedia: pick a size whose ears end up 'almost completely closed'.
  - No-hub (shielded) drain couplings to CISPI 310 are 'designed for an installation torque of 60 inch-pounds'; medium- and heavy-duty couplings are installed with a torque wrench set between 80 and 120 in-lb, and 'Torque requirements may vary per manufacturer' (Charlotte Pipe).
  - Trim long worm-drive tails and secure the cut end so it can't snag hands: for clamps with a kink in the band, Kitplanes cuts the tail 'just long enough to extend one or two slots past the kink' and safety-wires it to the pipe (Kitplanes).

### When to use it

- **everyday_examples**: 
  - Car cooling-system hoses, held by spring clamps on many cars (e.g. most water-cooled Volkswagens) or by worm-drive clamps (Wikipedia 'Hose clamp')
  - Washing-machine and dishwasher drain hoses, PC water-cooling loops on barb fittings, and workshop dust-extraction hoses (Wikipedia 'Hose clamp'; Printables 747926, 22483)
  - Rubber 'no-hub' couplings joining cast-iron or plastic drain pipes under a floor (Wikipedia 'Piping and plumbing fitting', with photo)
  - Jubilee clips used as an all-purpose strap: mounting signs and rooftop TV aerials, makeshift pipe hangers, and holding the bag on bagpipes while it is tied in (Wikipedia 'Hose clamp')
- **when_to_use**: To hold and seal a soft hose on a barb, spigot or beaded tube carrying water, coolant, air or vacuum at moderate pressure, as in cars, homes, garden watering, aquariums and PC cooling (Wikipedia 'Hose clamp'). Pick the kind by the job: worm-drive for most hoses 1/2 in and up and for anything you may want to undo or re-tighten (Wikipedia); spring clamps in tight or awkward places such as engine bays and PC water-cooling, where a screwdriver can't reach (Wikipedia); constant-tension clamps where hot-cold cycling or hose creep would loosen a plain clamp (EFC International); ear clamps for small hoses where a neat, low, tamper-evident, permanent clamp is wanted (Wikipedia; Oetiker data sheet); T-bolt clamps for heavy hoses and higher clamping force, e.g. turbo and coolant hoses (Wikipedia), on strong pipe. Also as a quick, strong strap to fix things round poles, tubes and pipes, or chained end to end into a long clamp (Wikipedia 'Hose clamp').
- **when_not_to_use**: Not for high-pressure lines, hydraulics, fuel at pressure or anything where a blow-off is dangerous: 'For these high pressure applications, compression fittings, thick crimp fittings, or other designs are normally used' (Wikipedia 'Hose clamp'); see Compression fitting and Quick couplers for tubes and hoses. Not on hard tubing such as nylon or PTFE that a clamp can't squeeze; use push-to-connect or compression fittings (see Hose barb). Not a T-bolt clamp on thin aluminium pipe: its uneven, high force 'can oftentimes bend and distort the aluminum piping' (AMS Performance). Not a plain slotted-band worm clamp on soft silicone hose that the slot edges can cut; use an embossed band (FastFix / EFC International). Not for frequent connect-disconnect; use a quick coupler. As a structural strap, not for lifting or safety-critical loads: Boshart says to use a safety cable or rope as well when hanging a pump on clamped pipe. For a light-duty hose hold or a temporary fix, a cable tie or a constrictor knot can do (see Linear ratchet and Binding knots and seizings).
- **environment_limits**: Corrosion: choose band material for the place: in salt-spray tests Oetiker rates zinc-plated steel at 96 h or more, Galfan-coated steel at 144 h or more and 304 stainless at 1000 h or more (DIN EN ISO 9227, Oetiker data sheet); stainless screws matter outdoors and in drains (Wikipedia 'Piping and plumbing fitting': ideally all stainless 'to provide maximum service life'). Heat and cold: rubber and plastic hose relaxes and 'creeps' under the band, and temperature swings loosen plain clamps, which is what constant-tension clamps are for (EFC International); a spring-loaded worm clamp normally loses about 30% of its torque soon after tightening (Freightliner service bulletin). Neoprene no-hub gaskets are rated to 212 °F (100 °C) (Charlotte Pipe). Printed spigots or clamps: PLA softens above about 60 °C and PETG is fine below about 80 °C (Prusa knowledge base). Vibration: clamps hold well when tightened correctly and spring types follow movement (Oetiker data sheet: the dimple's spring effect), but check worm-drive clamps periodically (AMS Performance: 'periodic checks and appropriate maintenance are important').
- **safety_notes**: PRESSURE: hose clamps are for moderate pressures only (Wikipedia 'Hose clamp'); a hose that blows off can spray hot or harmful fluid and whip about (see Hose barb); double-clamp where pressure or weight is high (Boshart), and use proper pressure fittings for hydraulics or high-pressure air. SHARP BAND ENDS: cut tails of worm-drive bands are sharp: 'The trimmed “tail” often sticks out—ready to snag hands, fingers' (Kitplanes); one manufacturer's assembly workers 'were frequently cutting their hands' on slotted-band clamps (FastFix / EFC International). Trim tails short, deburr or cover them, and wear gloves. OVER-TIGHTENING: over-tightened clamps can cut or crush soft hose and cause leaks; never exceed the rated ultimate torque (Boshart; Freightliner service bulletin; FastFix). HOT SYSTEMS: let car cooling systems cool before undoing clamps, because the coolant is hot and under pressure ⚑ [uncertain: no source opened]. SPRING CLAMPS store energy and can spring out of the pliers ⚑ [uncertain]. SUPPORT: never let a clamped hose or pipe joint hold up a heavy load on its own; Boshart warns to 'always use safety cable or rope' when installing a submersible pump on clamped poly pipe. *(⚑ parts need confirming)*
- **common_failures**: Leaks from a clamp that is too loose, sitting on the barb crest instead of behind it, or on a scratched or dirty spigot (Wikipedia 'Hose clamp'). Hose cut or crushed by over-tightening, or by the slot edges and long tail of a slotted band (FastFix / EFC International; Boshart). Stripped screw or broken band from too much torque (Boshart). Loss of grip over time as the hose relaxes ('cold flow') or with temperature cycling; fit constant-tension clamps or re-tighten correctly by loosening first (EFC International; Freightliner service bulletin). A gap in the squeeze under a plain wire loop's screw, which is why good wire clamps overlap their ends (Wikipedia). Wrong size: worm tail far too long, or an ear clamp whose ear can't close enough (Oetiker data sheet: at least 40% closure). Ear clamp crimped twice or with the wrong tool (Oetiker data sheet: single stroke only). T-bolt clamp distorting thin aluminium pipe and causing a leak (AMS Performance). Rusted zinc-plated clamps outdoors (Oetiker salt-spray ratings). A fitting scratched by slitting a stuck hose off, which then leaks (Wikipedia). Re-used no-hub sleeves that no longer seal (Wikipedia 'Piping and plumbing fitting'). Printed spigots that creep, soften or crack at layer lines under the clamp (Prusa knowledge base; Softsolder).
- **related**: 
  - Hose barb (barbed tube fitting): the ridged spigot a hose is pushed onto; a clamp behind the barb is its usual add-on (that entry keeps only a short retention summary)
  - Band flange clamp (V-band clamp, tri-clamp): a hinged band whose V-section wedges two flanges together, joining pipe ends rather than squeezing a hose
  - Compression fitting (ferrule fitting): a nut squeezes a ferrule onto hard tubing; for higher pressures
  - Quick couplers for tubes and hoses (push-to-connect, sleeve lock): for frequent connecting and disconnecting
  - Linear ratchet (cable-tie ratchet): a cable tie is a light-duty, one-use stand-in for a hose clamp
  - Binding knots and seizings (constrictor knot): a tied 'hose clamp made of string' for light jobs
  - Clamp-on accessory mount for bars, poles and edges (handlebar clamp, U-bolt): the purpose-made way to fix things to poles, where a hose clamp is the quick improvised strap
  - Clamp-on tube fittings (slip-on structural fittings): set-screw fittings for building frames from tube
  - Parallel pipe thread with a sealing washer (garden-hose thread): a threaded hose connection that unscrews by hand
  - Ratchet tie-down strap: a webbing strap tightened by a ratchet, for much larger loads and bundles
  - Spring clip clamp (clothes-peg clip): the same 'held shut by its own spring' idea for light holding jobs

### Pictures, videos and models

- **links**: 
  - [Hoseclamps.screw.agr.jpg (Wikimedia Commons, by ArnoldReinhold)](https://commons.wikimedia.org/wiki/File:Hoseclamps.screw.agr.jpg): Assorted screw/band (worm-drive) hose clamps, showing the slotted band and screw housing *(licence: CC BY-SA 3.0 / GFDL 1.2+)*
  - [Two spring Hose Clamps - small.jpg (Wikimedia Commons, by Bushytails)](https://commons.wikimedia.org/wiki/File:Two_spring_Hose_Clamps_-_small.jpg): A pair of spring-steel hose clamps of the kind used on car fuel and coolant lines, with the tabs you squeeze to open them *(licence: CC BY-SA 3.0 / GFDL 1.2+)*
  - [StepLess Ear Clamps, Product Group 117 & 167, technical data sheet (Oetiker)](https://eu-assets.contentstack.com/v3/assets/bltbc4004bca00989b0/blt91a068ac67624fea/676043bcabb68b8dccc2851c/oet_tds_117-167_StepLess_Ear_Clamps_EN.pdf): Labelled drawings of a 1-ear clamp (narrow band, ear, dimple, tongue-in-groove interlock), the open and closed ear widths, and block closure *(licence: link only)*
  - [How to remove and install pinch clamps, or oetiker clamps. It's easy (Best Dual Sport Bikes, YouTube; cited by Wikipedia 'Hose clamp')](https://www.youtube.com/watch?v=_m4_hwOkjsE): Video of closing ear (pinch) clamps with pincers and removing them by prising the ear *(licence: link only (YouTube))*
  - [How to Install a Worm Gear Hose Clamp (Boshart Knowledge Base, 2023)](https://support.boshart.com/how-to-install-a-worm-gear-hose-clamp): Step-by-step worm-gear clamp fitting with figures for clamp position on barbed inserts, double clamping and a torque-limiting T-handle nut driver *(licence: link only)*
- **make_it_yourself**: 
  - [Hose clamp for dust collection hoses (Marius Hornberger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/22483-hose-clamp-for-dust-collection-hoses): Printed clamp shaped to the spiral of dust-collection hose, assembled without tools using M5 hardware; several sizes and four connectors for left- or right-hand coils; PETG *(licence: CC BY)*
  - [150mm (6") Ratcheting Hose Clamp (Pyrex, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/485192-150mm-6-ratcheting-hose-clamp): One-piece printed ratcheting clamp for 150 mm (6 in) exhaust and ventilation hose *(licence: CC BY-NC)*
  - [100mm (4in) Hose Clamp (More Sizes Added) (Apok84, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1338893-100mm-4in-hose-clamp-more-sizes-added): Hardware-free printed clamp with a tightened clasp, in 80-165 mm sizes *(licence: CC BY-NC-SA)*
  - [Parametric hose clamp (yduf, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/244215-parametric-hose-clamp): Customisable printed screw-closed strap clamp for tubes (works on 20 mm tube in PLA), can tie several tubes together; print lying flat *(licence: CC BY)*
  - [Hose Clamp (ppaukstelis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/6758-hose-clamp): Small printed ratchet-tooth clamp for 3/4 in OD tubing; scale about 105% to fit over a hose on a barb; not for critical uses *(licence: CC BY)*
- **diagram_idea**: A cut-away of a hose pushed over a barbed spigot with a worm-drive clamp sitting just behind the barb, arrows showing the band squeezing inwards all round and the barb blocking the hose from sliding off; beside it, small side views of a spring clamp (squeeze tabs to open), an ear clamp before and after the ear is pinched, and a no-hub coupling joining two drain pipes with two bands.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hose_clamp
  - https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting
  - https://support.boshart.com/how-to-install-a-worm-gear-hose-clamp
  - https://images.thdstatic.com/catalog/pdfImages/a2/a20703c2-78f5-47d4-8a02-9f0db5a2e29a.pdf ('Hose Clamp Installation Guide – Worm Gear Clamps', hosted by Home Depot; it points to Ideal-Tridon clamp pages for sizes)
  - https://static.nhtsa.gov/odi/tsbs/2018/MC-10141687-9999.pdf (Freightliner Service Bulletin 20-46 'ABA Hose Clamp Torque Values', January 2004, hosted by NHTSA)
  - https://eu-assets.contentstack.com/v3/assets/bltbc4004bca00989b0/blt91a068ac67624fea/676043bcabb68b8dccc2851c/oet_tds_117-167_StepLess_Ear_Clamps_EN.pdf
  - https://eu-assets.contentstack.com/v3/assets/bltbc4004bca00989b0/bltba0ec9189d36ea59/69aee022d627ad00081edd6c/oet_tds_HIP_1000_396_426_446_Single_Action_Pincers_EN.pdf
  - https://efc-intl.com/category/constant-tension-clamps
  - https://fastfixtechnology.com/other-industries/hose-clamping-improvements
  - https://www.amsperformance.com/wp-content/uploads/2016/08/Worm_Gear_Clamp.pdf
  - https://www.charlottepipe.com/articles/cispi-310-a-guide-to-no-hub-cast-iron-connections
  - https://www.kitplanes.com/tame-the-hose-clamp-tail-for-safer-maintenance/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://softsolder.com/2016/08/24/kenmore-progressive-vacuum-tool-adapters-first-failure
  - https://www.youtube.com/watch?v=_m4_hwOkjsE
  - https://commons.wikimedia.org/wiki/Category:Hose_clamps
  - https://commons.wikimedia.org/wiki/File:Hoseclamps.screw.agr.jpg
  - https://commons.wikimedia.org/wiki/File:Two_spring_Hose_Clamps_-_small.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: hoses or pipes
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…remove them (Oetiker pincer data sheet). T-bolt: a spanner or socket [uncertain]. Cable-tie stand-ins: a cutt…"*
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** complexity, load, making_tips_3d_printing, reuse_cycles, safety_notes, tools_needed

## 394 Clamp-on accessory mount for bars, poles and edges (handlebar clamp, desk clamp, U-bolt)

*clamping, magnetic & friction connections.* A clamp that grips something already there, such as a handlebar, pole, tube, lighting pipe or the edge of a desk or shelf, so an accessory can be fixed on, moved or removed without drilling

*Also covers:* Also covers split bar clamps, rubber shims for several sizes, U-bolts, pipe clamps and camera-rod clamps. Safety: on bikes and scooters a mount must not slip into the steering, brakes or wheel.

### What it is

- **plain_name**: A clamp that squeezes round something that is already there, such as a handlebar, a pole, a pipe or the edge of a desk, so you can fix a light, phone, camera, lamp or holder onto it, slide or turn it to a new spot, and take it off again without drilling any holes
- **term**: Clamp-on accessory mount (bar clamp, U-bolt, pipe clamp, desk-edge clamp)
- **aliases**: 
  - handlebar mount, handlebar clamp, bar mount, out-front mount (bike computers), stem mount
  - split clamp, split bar clamp, two-piece clamp, hinged clamp, ring clamp, pinch clamp, saddle clamp
  - handlebar shim, rubber shim, rubber pad, clamp spacer (to fit one clamp to several bar sizes)
  - U-bolt (with saddle, V-block or backing plate), mast clamp, pipe U-bolt (sized in pipe measurements, Wikipedia 'U-bolt')
  - pipe clamp, pipe clip, P-clip, pipe saddle clamp, Rohrschelle (German)
  - stage lighting C-clamp (pipe clamp, hook clamp), trigger clamp, half coupler / Cheeseborough (stagecraft terms, Wikipedia 'C-clamp (stagecraft)')
  - grip clamps: Super Clamp (Manfrotto, brand), Cardellini clamp (a jaw-style clamp for round, square or rectangular tubing or flat objects, Wikipedia 'Clamp (tool)')
  - desk clamp, desk-edge clamp, table clamp, C-clamp mount (monitor arms, microphone arms, desk lamps), clamp-on shelf
  - camera rod clamp, 15 mm or 19 mm rod clamp (standard camera support rods; spacings in OConnor's explainer)
  - frame clamp, bottle-cage clamp (for bikes without threaded bosses, Wikipedia 'Bottle cage')
  - Standard interfaces often found on the clamp's other side: Garmin/Wahoo-type quarter-turn mount, GoPro-type prongs, 1/4-20 tripod thread, 16 mm (5/8 in) spigot socket
- **family**: clamping, magnetic & friction connections
- **other_families**: quick-release & tool-free
- **one_liner**: A clamp that grips an existing bar, pole, tube, pipe or desk edge by squeezing it, often through a rubber pad, so an accessory can be fixed on, repositioned or removed without drilling or changing the thing it is clamped to.
- **complexity**: A few parts that act as one unit. Ring or bar clamps: a split ring or two half-shells, one or two pinch screws with nuts (or a thumbscrew or cam lever), a rubber pad or shims, and the accessory interface (for example a quarter-turn mount, prongs, a threaded stud or a socket). U-bolt mounts: a U-shaped rod threaded at both ends, a saddle or backing plate, two nuts and washers. Desk clamps: a C-shaped frame, a screw with a swivelling pad, and a top plate or socket. Stage C-clamps: clamp body, clamp bolt, spigot that turns through 360 degrees, pan bolt and yoke bolt (Wikipedia 'C-clamp (stagecraft)').
- **how_it_works**: Tightening the screw pulls the clamp's jaws or half-shells together round the bar (or pushes a pad up under a desk edge), squeezing it so hard that friction stops the clamp sliding along it or turning round it. A rubber pad raises the grip, protects the finish and fills the gap, so one clamp fits several sizes: Garmin's out-front mount uses its thicker pad on a 25.4 mm bar and the thinner pad on a 31.8 mm bar. A U-bolt wraps round a pipe or post and its two nuts pull it against a plate on the other side. Because nothing is drilled, loosening the screw lets you slide or turn the mount to a new place, or take it off.

### Finder attributes

- **job**: 
  - join and hold: fixes an accessory (light, phone, bike computer, camera, lamp, monitor arm, sign, bottle cage) onto a bar, pole, pipe, tube or desk edge without drilling
  - lock, and release by hand: thumbscrew, knob and cam-lever versions are tightened and released without tools, so the accessory can be moved or taken off quickly
- **motion**: none once tightened; when loosened it can slide along the bar and turn round it (rotate+slide) to a new position. Many mounts add a swivel after the clamp, for example a stage C-clamp's spigot that turns through 360 degrees and is locked by a pan bolt (Wikipedia 'C-clamp (stagecraft)')
- **degrees_of_freedom**: 0 when tight. Loosened, 2 (slide along the bar and turn round it). A desk clamp loosened can slide along the edge (1 to 2).
- **special_behaviour**: 
  - quick-release: versions with a thumbscrew, knob or cam lever go on and off by hand, and many carry a quick-release interface (a quarter-turn bike-computer mount, GoPro-type prongs or a hexagonal spigot socket) so the accessory comes off while the clamp stays on the bar (Garmin instructions; Manfrotto Super Clamp page)
  - none otherwise: it simply holds by squeezing; it does not slip at a set force, so anything that hits it hard can still make it twist or shift (Wikipedia 'Shaft collar': shock loads can make clamp collars shift)
- **holding_principle**: friction or clamping (force-fit): the squeeze of the screw, U-bolt or C-frame holds by friction, helped by rubber pads; partly shape (form-fit) in hook-shaped clamps, such as a stage C-clamp whose body is 'designed to sit overtop of a typical theatrical batten' (Wikipedia 'C-clamp (stagecraft)'), and where a clamp hooks round a desk edge
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable with a hex key or spanner for screw-closed clamps and U-bolts; tool-free quick release for thumbscrew, knob and cam-lever clamps and for quarter-turn or prong interfaces, where the accessory twists or slides off and the clamp stays on the bar
- **reuse_cycles**: many times: metal clamps and U-bolts can be refitted again and again; rubber pads wear and printed clamps lose grip as screw holes wear or the plastic creeps, so printed versions are good for a few to many times (use captive nuts or inserts rather than screwing into plastic, QIDI blog) ⚑ [uncertain: no maker's reuse figure opened] *(⚑ parts need confirming)*
- **tools_needed**: hex key (Garmin's mount uses a 2 mm hex key for its interface screws) or spanner for screw-closed clamps and U-bolt nuts; none for thumbscrews, knobs and cam levers; a torque wrench or torque driver with a newton-metre scale on carbon or lightweight handlebars (Surly handlebar instructions)
- **seal**: none
- **load**: Light to medium. Examples: a bike computer of well under 100 g on an out-front mount (QIDI blog); 15 kg payload for a Super Clamp on round tube from 13 to 55 mm (Manfrotto); U-bolts are heavy enough to support pipework and overhead road signs (Wikipedia 'U-bolt'). Strong in the direction it squeezes and against a straight pull-off; weakest against twisting round the bar, because an accessory on an arm turns its weight into a twisting force at the clamp (QIDI: a 154 g camera on a 60 mm arm with a 5x shock factor gives about 0.45 N·m), and against knocks and vibration, which can make friction clamps shift (Wikipedia 'Shaft collar').
- **adjustable**: yes: loosen, slide along or turn round the bar, and re-tighten; swap the rubber pad or add a shim to fit another bar size (Garmin pads; Wikipedia 'Bicycle handlebar': shims fit 25.4 mm or 26 mm bars to 31.8 mm stems); many mounts add a swivel or ball joint for the accessory's angle
- **play_and_precision**: No play when tight, but no set positions: it can be clamped anywhere, so returning to exactly the same place needs a mark or a stop ⚑ [uncertain: general practice]. Tolerates a range of bar sizes only through its pads, shims or long screws (Super Clamp 13 to 55 mm; Garmin two pads); a fixed printed clamp that is about 1 mm off 'will either not close or will crush the tube' (QIDI blog). Bars taper, so the size is only guaranteed at the stem clamp (QIDI blog). *(⚑ parts need confirming)*
- **access_needed**: both sides for most: two-piece and hinged clamps and U-bolts wrap round the bar from the side, so you need to reach round it but not to its end; a desk clamp needs room above and below the desk edge and, for monitor arms, about 5 cm of space behind the desk (BenQ); end of a tube or shaft for one-piece closed rings, which must be slid on from a free end
- **materials**: Bodies of aluminium, steel, cast metal or glass-filled plastic; rubber or TPU pads; zinc-plated or stainless U-bolts (Wikipedia gives 'bright zinc-plated mild steel' as an example). Printed clamps are best in PETG or ASA rather than PLA for bikes and outdoors (QIDI blog; Prusa material pages), with TPU for pads. Clamps onto steel, aluminium and wood easily; carbon-fibre and thin-walled bars need low, measured tightening (Surly); glass and hollow-core desk tops need a reinforcement plate (BenQ).
- **maker_difficulty**: easy to buy and fit; moderate to print one that lasts on a bike or scooter, because vibration fatigue, creep and screw threads in plastic are the usual failure points (QIDI blog)

### Making it

- **processes**: 
  - off-the-shelf part (handlebar mounts, U-bolts, pipe clamps, grip clamps, desk clamps)
  - 3D print (FDM): split or hinged bar clamps, pipe clamps, desk-clamp brackets and adapters, with metal screws and nuts
  - CNC: machined aluminium bar clamps
  - sheet metal: bent strap clamps and backing plates for U-bolts
  - woodwork: wooden jaw pads, desk-edge blocks and backing plates
  - laser cut: flat backing plates and brackets held on with U-bolts
- **print_in_place**: partly: a hinged clamp can be printed already joined, as in a print-in-place handlebar clamp that needs only an M3 screw and nut (Printables 156668), or a hinged pipe clamp that uses filament as hinge pins (Printables 1196715); most printed clamps are two halves joined by screws and nuts, with a rubber or TPU pad added
- **making_tips_3d_printing**: Measure the bar with calipers exactly where the clamp will sit, because bars taper; one guide suggests making the bore about 0.3 mm larger than measured and letting the screw gap close the difference (QIDI blog), and parametric models let you set the size (Printables 156668, 1196715, 243996). Print in PETG or ASA, not PLA, for bikes and anything outdoors: road vibration gives millions of small load cycles and PLA tends to crack along layer lines, while PETG bends before it breaks (QIDI blog); PLA also softens above about 60 °C and degrades in UV, PETG is fine below about 80 °C and ASA is UV-resistant to about 93 °C (Prusa material pages). Orient the part so the clamping force runs along the layers, not trying to split them apart (QIDI blog). Use at least 4 perimeters and plenty of infill around screw bosses (QIDI: 4+ walls, 40 to 60 % infill; Printables 243996: 4 perimeters and 40 % gyroid). Keep at least one screw diameter of wall round each screw hole (Hubs). Never screw into the plastic itself for a clamp that is re-tightened: use a captive hex nut in a nut trap (QIDI: M4 nut 7.0 mm across flats, pocket 7.2 mm wide and 3.4 mm deep) or a heat-set insert, with washers under the head and the nut so they don't sink in (QIDI blog; Hubs suggests about 0.2 mm extra round a nut pocket). The weak spot is usually the clamp ear at the screw boss: one designer's mount broke on the bar clamp itself, not the device interface, and was then thickened (Printables 156668; QIDI table). A thin TPU pad (about 2 mm) between clamp and bar adds grip and damps buzz (QIDI blog). For heavier loads let metal take the force: a printed bike-rack bracket uses bent M5 threaded rod as U-bolts in a protective sleeve, with metal plates so 'the plastic only receives pressure load' (Printables 123887). Re-check the screws after the first use, because printed parts creep under a new clamping load (QIDI blog; Thrinter creep test).
- **off_the_shelf_parts**: Search terms: 'handlebar mount', 'out-front mount', 'stem mount', 'handlebar shim' or 'bar shim 31.8 to 25.4', 'rubber shim strip'; 'U-bolt' (with 'saddle', 'V-block' or 'backing plate'), 'mast clamp', 'antenna mast U-bolt'; 'pipe clamp', 'pipe clip', 'cushioned P-clip', 'pipe saddle clamp'; 'stage lighting C-clamp', 'hook clamp', 'trigger clamp', 'half coupler'; 'super clamp' or 'grip clamp' (Manfrotto Super Clamp, brand), 'Cardellini clamp'; 'desk clamp', 'monitor arm desk clamp', 'desk clamp reinforcement plate'; '15 mm rod clamp' (camera support rods); 'two-piece clamp-style shaft collar' (a ready-made split clamp that can carry a bracket); 'bottle cage clamp' or 'frame clamp adapter' for bikes without bosses.
- **rules_of_thumb**: 
  - Match the bar size first. Common bicycle handlebar clamp diameters are 22.2, 25.4, 26.0, 31.8 and 35 mm, and shims adapt smaller bars to larger clamps; the lever and grip areas are 22.2 mm (flat bars) or 23.8 mm (drop bars) (Wikipedia 'Bicycle handlebar', https://en.wikipedia.org/wiki/Bicycle_handlebar; full list there).
  - Tighten to the maker's figure, not 'as tight as possible': Garmin gives a maximum of 0.8 N·m (7 lbf-in) for its out-front mount and says to check the screw periodically (Garmin Out-Front Mount Instructions, https://www.adorama.com/col/productManuals/GP0101334000.pdf); Surly says to tighten brake and shifter clamps to the stated torque or 5 N·m, whichever is less, because over-tightening the stem, brake or shifter clamps, or accessories can damage the handlebar (https://surlybikes.com/cdn/shop/files/85-001047_INST01.pdf).
  - A clamp that wraps round the bar holds better and leaves no mark compared with a set screw pressing on one point: Wikipedia says clamp-style shaft collars have 'nearly twice' the holding power of set-screw collars and cause no shaft damage, but shock loads can make them shift (https://en.wikipedia.org/wiki/Shaft_collar).
  - Desk clamps: allow at least about 5 cm (2 in) behind the desk; bevelled or rounded edges over about 2.5 cm (1 in) reduce stability; glass, hollow-core (honeycomb) and easily dented tops need a reinforcement plate to spread the force (BenQ, https://www.benq.eu/en-uk/knowledge-center/knowledge/10-things-to-consider-when-buying-a-monitor-arm.html). Put scrap wood or a pad under a C-clamp's jaws to spread the force and avoid dents (Wikipedia 'C-clamp', https://en.wikipedia.org/wiki/C-clamp).
  - Printed clamps: bore about 0.3 mm over the measured bar, 4 or more perimeters, 40 to 60 % infill, captive nuts or inserts with washers, and a tether for anything that could fall into the road (QIDI blog, a filament maker's guide, https://qidi3d.com/blogs/print-lab/gopro-mounts-cyclists); at least one screw diameter of wall round threaded holes (Hubs, https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/).
  - A U-bolt is specified by four things: material, thread size (e.g. M12 x 50 mm), inside width between the legs and inside height; pipe U-bolts are sold by the pipe size they fit, which is not the bar's measured diameter (Wikipedia 'U-bolt', https://en.wikipedia.org/wiki/U-bolt).

### When to use it

- **everyday_examples**: 
  - a bike light, phone holder or bike computer clamped to the handlebar (Garmin out-front mount)
  - a monitor arm, microphone arm or desk lamp clamped to the edge of a desk (BenQ)
  - theatre and film lights hung from a lighting pipe with C-clamps (Wikipedia 'C-clamp (stagecraft)')
  - a bottle cage clamped to a bike frame that has no threaded bosses, or overhead road signs held with U-bolts (Wikipedia 'Bottle cage'; 'U-bolt')
- **when_to_use**: When you want to add something to a bar, pole, tube, pipe or desk you don't want to drill, or don't own (a rented flat's desk, a bike frame, a tent pole, a camera rig); when the accessory must move between places or come off often; when you need to fine-tune its position along or round the bar; when one clamp must fit several bar sizes (use pads or shims). Use a U-bolt for heavier or outdoor jobs on round posts and pipes, a jaw-type grip clamp for odd shapes or flat edges (a Super Clamp grips round and square sections and, with its rubber wedge, flat surfaces), and a desk clamp for arms and lamps on a desk edge.
- **when_not_to_use**: When a threaded boss, rail or tripod socket is already there: bolt to it instead (Tripod and stand screw mount; Aluminium-extrusion connectors; Clevis joint prongs). For building frames from tube, use clamp-on tube fittings. For loads that hit hard, swing on a long arm or must never move, add a positive stop, a second clamp or a drilled and bolted bracket, because friction clamps can shift under shock (Wikipedia 'Shaft collar'). Don't clamp onto glass or hollow-core desk tops without a reinforcement plate (BenQ), onto carbon parts without a torque figure (Surly), onto steering, brake or gear cables, or onto anything that moves or gets hot. For a quick, light, temporary hold use a spring clip clamp; for an improvised strap round a pole, a hose clamp or cable tie.
- **environment_limits**: Sun and heat: PLA softens above about 60 °C and degrades in UV, so it is a poor choice on a bike or car left in the sun; PETG suits outdoor use below about 80 °C and ASA resists UV up to about 93 °C (Prusa material pages). Vibration: a riding season is millions of small load cycles, which crack brittle printed mounts (QIDI blog). Creep: printed clamps and rubber pads relax, so screws loosen after the first use (QIDI blog; Thrinter creep test). Rain and road salt corrode plain steel screws and U-bolts; zinc-plated or stainless parts last longer ⚑ [uncertain: no corrosion test opened]. *(⚑ parts need confirming)*
- **safety_notes**: On bikes and scooters, fit the mount where it 'does not interfere with the safe operation of your bike' and check the screw now and then (Garmin); make sure it can't slide or swing into the steering, brake levers, cables, the front wheel or the spokes. Things clamped to handlebars have caused crashes: a quick-release handlebar bag fell under a rider's front wheel causing serious injuries (CPSC recall of Cannondale handlebar bags, 2004), and handlebar bracket arms that could crack let gear fall while riding (CPSC recall of Rockgeist BarJam brackets, 2022). Scooter makers say not to hang bags or heavy items on the handlebar (Xiaomi Electric Scooter 4 Pro manual). Over-tightening can crack or crush handlebars, especially carbon, and 'improper installation or repeated rotation of mounted components may lead to product failure' (Surly). Tether cameras and lights so a broken mount doesn't drop them into traffic (QIDI blog), and give anything clamped above head height a separate safety cable (stage practice; Camerastuff safety cable page). Desk clamps can crack glass tops (BenQ).
- **common_failures**: (1) It slowly turns round the bar under an offset load or on bumps: use the right pad or shim, tighten to the stated torque, use a wider clamp or two screws, and keep the arm short (QIDI blog; Garmin). (2) The bar is crushed, dented or cracked from over-tightening, especially carbon or thin-walled tube: use a torque figure and a pad (Surly; Wikipedia 'C-clamp'). (3) A printed clamp cracks at the screw ear or splits along layers: thicken the boss, add fillets, print in PETG or ASA and orient the layers sensibly (QIDI blog; Printables 156668). (4) It works loose as plastic creeps or a screw head sinks into the plastic: washers, captive nuts or inserts, and re-tighten after first use (QIDI blog). (5) Threads strip in plastic: never screw directly into a print for a clamp that is re-tightened (QIDI blog; Hubs). (6) The wrong bore size means it won't close or it crushes the tube (QIDI blog). (7) Set-screw clamps mar the bar and get hard to move (Wikipedia 'Shaft collar'). (8) A desk top crushes or cracks under a monitor-arm clamp (BenQ). (9) A knock or shock load makes a friction clamp jump to a new position (Wikipedia 'Shaft collar').
- **related**: 
  - Clamp-on tube fittings (slip-on structural fittings): tees and elbows held by set screws for building frames from tube, rather than adding one accessory
  - Hose clamp (worm-drive clamp): a screw band that can strap something round a pole as a quick improvised mount
  - Linear ratchet (cable tie): the cheapest strap mount for light items, but slips and is single-use
  - Spring clip clamp (clothes-peg clip, clip-on holder): jaws held shut by a spring, for quick, light, tool-free holding
  - Eccentric cam lever (cam clamp, quick-release skewer): the lever often used to close a bar clamp without tools
  - Shaft-to-hub joints (clamp hub, set screw): the same split-clamp idea on a turning shaft
  - Collet: a slotted sleeve that grips a rod evenly and centred
  - Tripod and stand screw mount (camera thread): for things that already have a 1/4-20 or 3/8-16 socket; many clamps end in one
  - Bayonet mount (push-and-twist lock): the quarter-turn interface on bike-computer mounts
  - Clevis joint (fork-and-pin joint, prong mount): the GoPro-style prong interface found on many bar mounts
  - Ball-and-socket joint (lockable ball head): adds an adjustable angle after the clamp
  - Toggle clamp: includes over-centre U-bolt latch clamps
  - Hang-on mounts (keyhole slot, French cleat): for fixing to walls rather than bars
  - Internal tube anchors and Expanding internal grip: grip the inside of a tube end instead of the outside
  - Aluminium-extrusion connectors (T-slot nuts and brackets): when the frame already has slots to bolt into

### Pictures, videos and models

- **links**: 
  - [AltmanClamp.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:AltmanClamp.jpg): A stage-lighting C-clamp (pipe clamp) with its clamp bolt and spigot *(licence: Public domain)*
  - [Measure a u-bolt.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Measure_a_u-bolt.jpg): Diagram of how to measure a U-bolt (inside width, inside height, thread) *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Studded C-Clamp.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Studded_C-Clamp.JPG): A film-grip C-clamp with a stud for mounting small lights *(licence: CC BY 3.0 (reuse with credit))*
  - [Pipe Clamps with Rubber (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pipe-Clamps-with-Rubber_12704-360x480_(5000534544).jpg): Two-part pipe clamps with rubber linings *(licence: CC BY 2.0 (reuse with credit))*
  - [Garmin Out-Front Mount Instructions (PDF, hosted by a retailer)](https://www.adorama.com/col/productManuals/GP0101334000.pdf): Numbered drawings of fitting the rubber pad and handlebar connector, with pad choice for 25.4 and 31.8 mm bars and the torque limit *(licence: link only (manufacturer document))*
- **make_it_yourself**: 
  - [Yet Another Garmin/Wahoo Quarter Turn Bike Handlebar Mount (Printables 156668; URL from Printables API, page not opened)](https://www.printables.com/model/156668-yet-another-garminwahoo-quarter-turn-bike-handleba): Parametric handlebar clamp that prints in place without supports, closed with an M3 screw and nut, in several bar sizes; the designer reinforced the bar clamp after one broke *(licence: CC BY-NC-SA)*
  - [Parametric pipe clamp with quick release, fully adjustable in FreeCAD (Printables 1196715; URL from Printables API, page not opened)](https://www.printables.com/model/1196715-parametric-pipe-clamp-with-quick-release-fully-adj): Hinged pipe clamp that snaps shut, adjustable in diameter and thickness; print in PETG with filament hinge pins *(licence: CC BY)*
  - [Parametric Pipe Clamp Mount (Printables 243996; URL from Printables API, page not opened)](https://www.printables.com/model/243996-parametric-pipe-clamp-mount): FreeCAD-parametric pipe mount adaptable to any tube size, height or angle; designer recommends 40 % gyroid infill and 4 perimeters *(licence: CC BY)*
  - [Desk Mount Headphone Holder / Mount / Clamp (Printables 55862; URL from Printables API, page not opened)](https://www.printables.com/model/55862-desk-mount-headphone-holder-mount-clamp): Popular screw desk-clamp headphone holder for desks up to 40 mm thick *(licence: CC BY-SA)*
  - [Parametric U-Bolt Bracket for Bicycle Head Tube (Printables 123887; URL from Printables API, page not opened)](https://www.printables.com/model/123887-parametric-u-bolt-bracket-for-bicycle-head-tube): OpenSCAD bracket held to a bike head tube by bent M5 threaded-rod U-bolts with metal backing plates, so the print only takes pressure *(licence: GPL v2.0)*
  - [Parametric Pipe Clamp - Rohrschelle - Quickschelle - Interlocks (Printables 85521; URL from Printables API, page not opened)](https://www.printables.com/model/85521-parametric-pipe-clamp-rohrschelle-quickschelle-int): Fusion 360 parametric snap-in wall pipe clip (minimum pipe 16 mm), with interlocking versions for several pipes *(licence: CC BY-NC)*
- **diagram_idea**: Three side-by-side cross-sections: a two-piece bar clamp round a handlebar with a rubber shim and its pinch screw, a U-bolt pulling a post against a backing plate, and a desk C-clamp pushing a swivel pad up under the desk edge, with arrows for the squeeze and a shaded 'keep clear' zone round a bike's steering, brake levers and front wheel.
- **sources**: 
  - https://www.adorama.com/col/productManuals/GP0101334000.pdf
  - https://surlybikes.com/cdn/shop/files/85-001047_INST01.pdf
  - https://en.wikipedia.org/wiki/Bicycle_handlebar
  - https://en.wikipedia.org/wiki/U-bolt
  - https://en.wikipedia.org/wiki/C-clamp_(stagecraft)
  - https://en.wikipedia.org/wiki/Clamp_(tool)
  - https://en.wikipedia.org/wiki/C-clamp
  - https://en.wikipedia.org/wiki/Bottle_cage
  - https://en.wikipedia.org/wiki/Shaft_collar
  - https://www.ocon.com/inspiration/labs/rod-standards-explained/
  - https://www.manfrotto.com/uk-en/super-photo-clamp-without-stud-aluminium-035/
  - https://www.benq.eu/en-uk/knowledge-center/knowledge/10-things-to-consider-when-buying-a-monitor-arm.html
  - https://www.cpsc.gov/Recalls/2004/cpsc-cannondale-bicycle-corp-announce-recall-of-certain-quick-release-handlebar-bags
  - https://www.cpsc.gov/Recalls/2022/Rockgeist-Recalls-BarJam-Brackets-Due-to-Crash-and-Injury-Hazards-Recall-Alert
  - https://wheelyshop.se/cdn/shop/files/Xiaomi_4_Pro_Nordic_Edition__2nd_Gen__Manual.pdf
  - https://qidi3d.com/blogs/print-lab/gopro-mounts-cyclists
  - https://camerastuff.co.za/products/camerastuff-safety-cable-stage-light-security-rope-steel-cable-locking-wire-3mm-70cm
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/asa_1809
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://commons.wikimedia.org/wiki/File:AltmanClamp.jpg
  - https://commons.wikimedia.org/wiki/File:Measure_a_u-bolt.jpg
  - https://commons.wikimedia.org/wiki/File:Studded_C-Clamp.JPG
  - https://commons.wikimedia.org/wiki/File:Pipe-Clamps-with-Rubber_12704-360x480_(5000534544).jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: tube, rod or extrusion, wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, play_and_precision, reuse_cycles

## 398 Spring clip clamp (clothes-peg clip, spring clamp, clip-on holder)

*clamping, magnetic & friction connections.* Two jaws on a pivot, squeezed shut by a spring; you pinch the handles to open it and let go to clamp, as in clothes pegs, spring clamps and clip-on phone or lamp holders

*Also covers:* Also covers printed spring clamps and clips that use a rubber band as the spring.

### What it is

- **plain_name**: A clip with two jaws that pivot like scissors and are pushed shut by a spring: you pinch the handles to open it, put it over the edge, and let go so it grips, like a clothes peg, a workshop spring clamp or a clip-on lamp or phone holder
- **term**: Spring clamp (spring clip, spring-loaded pivoted jaw clamp; clothes peg)
- **aliases**: 
  - clothes peg (UK) / clothespin or clothes pin (US) (Wikipedia 'Clothespin')
  - spring clothespin / sprung wooden clothes peg
  - pinch clamp (This Old House)
  - spring clamp, spring cramp (UK woodworking; listed with temporary clamps in Wikipedia 'Clamp (tool)')
  - plastic spring clamp, e.g. Clippix (Bessey, brand); needle-nose spring clamp; ratchet spring clamp (Bessey XCR, a ratchet-locking cousin)
  - muslin clamp / backdrop clamp / photo spring clip (photography studio names seen in Woodsmith's spring clamp review)
  - chip clip / bag clip (kitchen use; Printables model titles)
  - C47 / CP47 / 'bullet' (film-set slang for a wooden spring clothes peg, Wikipedia 'Clothespin')
  - crocodile clip / alligator clip (spring-jaw clip for temporary electrical connections, Wikipedia 'Crocodile clip')
  - rubber-band clamp / rubber band spring clamp (printed clamp that uses rubber bands as the spring, Printables 617245)
  - springless clothespin / one-piece peg / dolly peg (one-piece version whose own springy prongs grip, Wikipedia; Printables 33109)
  - clip-on holder / clip-on lamp / clamp lamp / clip-on phone holder
- **family**: clamping, magnetic & friction connections
- **other_families**: springs & energy storage, quick-release & tool-free
- **one_liner**: Two jaws joined by a pivot and closed by a spring (usually a coiled wire torsion spring, sometimes rubber bands or a springy printed arm), so you squeeze the handles to open it and let go to clamp it onto cloth, paper, a board edge, a rod or a cable.
- **complexity**: A few parts: two jaw-and-handle halves (wood, plastic or steel), a pivot (a pin or rivet, or the coil of the spring itself acting as the hinge), and a spring (a wire torsion spring, a trapped compression spring, rubber bands, or a springy part of the clip itself); often soft or swivelling jaw pads and grips on the handles. Examples: 'two wooden halves and one wire spring that is both spring and pivot' (Solon E. Moore's 1887 clothespin, Wikipedia 'Clothespin'); 'two printed halves, snap-on jaw pads, rubber bands' (Printables 617245).
- **how_it_works**: Each half is a lever with the pivot between the handle and the jaw. The spring pushes the handles apart, which pulls the jaws together, so the clip grips on its own; squeezing the handles harder than the spring opens the jaws ('By a lever action, when the two prongs are pinched at the top of the peg, the prongs open up, and when released, the spring draws the two prongs shut', Wikipedia 'Clothespin'). In the classic wooden peg one coiled wire is both the spring and the pivot the two halves rock on (Wikipedia). A coiled (torsion) spring pushes back harder the further it is twisted (Wikipedia 'Torsion spring'), and the grip at the jaws is the spring's turning force divided by the distance from the pivot (lever arithmetic), so it is greatest close to the pivot. The jaws hold by friction, helped by teeth on crocodile clips and toothed pegs; the clamping force is small (up to about 100-150 N for metal workshop spring clamps, Bessey).

### Finder attributes

- **job**: 
  - join and hold: grips cloth, paper, sheet, a board edge, a rod or a cable, for a few minutes (glue-ups, laundry) or as a clip-on mount for a lamp, phone or sensor
  - lock, and release by hand: it holds by itself and lets go when you squeeze the handles
- **motion**: rotate: the jaws pivot open about the pin; workshop spring clamps open about 20-75 mm (Bessey XC and XM ranges), and Bessey's variable-opening XV up to 170 mm
- **degrees_of_freedom**: 1 while opening and closing (the jaws turn about the pivot); 0 once clamped, as long as the grip is not overcome. Swivelling jaw pads add a small tilt at each tip.
- **special_behaviour**: 
  - quick-release: pinch to open, let go to clamp, with one hand (This Old House: spring clamps 'can be operated with one hand')
  - self-aligning or self-centring: many spring clamps have swivelling pads at the jaw tips (Woodsmith mentions 'swiveling red pads at the tips of the jaw') so the pads lie flat on surfaces that are not parallel
- **holding_principle**: spring force (a spring or springy part presses it in place), producing friction or clamping (force-fit) at the jaws; toothed or serrated jaws add a little shape grip
- **input_output**: not applicable (it holds rather than passing motion on; the handles are simply levers that open the jaws)
- **power**: passive (no power needed)
- **removability**: tool-free quick release: squeeze the handles and lift it off
- **reuse_cycles**: many times: metal-spring pegs and clamps last until the spring tires or the halves come apart; printed plastic springs last far fewer cycles, especially in PLA (Printables 1096058, 1707408)
- **tools_needed**: none to use. To build a printed clamp around a strong reclaimed metal spring: locking pliers, a vice to squeeze the handles together and safety glasses (Printables 559737); rubber bands for rubber-band clamps; a pin, screw or rivet for the pivot of two-part designs
- **seal**: none
- **load**: Light: the grip comes only from the spring. Bessey's metal spring clamps give clamping forces of up to 100 N at 25 mm opening, 120 N at 50 mm and 150 N at 75 mm; This Old House says spring clamps 'aren't the best option for heavy-duty tasks'. A sliding pull along the jaw faces is resisted only by friction, so a firm tug slides it off; prying or twisting levers the jaws open. Not for lifting, holding anything overhead or holding a person.
- **adjustable**: Mostly no: the spring sets the force and you simply re-clip to change position. Rubber-band clamps get stronger as you add bands (Printables 617245, 982731), and Bessey's VarioClippix XV has a variable opening width.
- **play_and_precision**: Not a locating joint: it holds wherever it is clipped and can shift if knocked. Swivelling jaw pads tolerate faces that are not parallel; plain jaws grip best on parallel faces near the pivot.
- **access_needed**: both sides: the jaws close on both faces of the part, so the clip must reach over an edge (or round a rod, cable or rope) and needs room for the jaws to open
- **materials**: Classic pegs: wood with a steel wire spring; wooden pegs are used on hot film lights because they do not pass heat on, while plastic would melt and metal would get too hot to touch (Wikipedia 'Clothespin'). Plastic pegs; stainless steel pegs with a trapped compression spring for outdoor use (Wikipedia). Workshop spring clamps: nickel-plated steel with PVC tips and handles 'to prevent marring' (Bessey XM), or fibreglass-reinforced plastic (Bessey Clippix XC, XV, XCL). Crocodile clips: steel or, for battery jump leads, solid copper (Wikipedia 'Crocodile clip'). Printed: PETG for any printed spring, PLA only for rigid halves (Printables 1096058, 1707408; Hackaday); TPU or rubber pads on the jaws. It grips almost any material; pads protect soft or finished surfaces.
- **maker_difficulty**: easy: buy them cheaply, or print two halves and join them with rubber bands or a pin; moderate for a one-piece or print-in-place peg, whose printed spring has to be tuned and printed in PETG, or for fitting a strong metal spring into printed halves (Printables 559737 warns the assembly 'can be tricky or dangerous')

### Making it

- **processes**: 
  - off-the-shelf part: clothes pegs, metal and plastic spring clamps, crocodile clips, clip-on lamps and phone holders
  - 3D print (FDM): one-piece pegs with a flexing printed spring, print-in-place pegs, two-piece rubber-band clamps, printed halves around a reclaimed metal spring, and replacement jaw pads
  - woodwork: the classic two-piece wooden peg with a wire spring, and wooden jaws for larger rubber-band or spring clamps
- **print_in_place**: yes for one-piece and print-in-place pegs, whose spring is part of the print and which are ready to use straight off the printer (Printables 33109, 659163, 1096058; Printables 1707408 needs its centre snapped together once after printing); partly for rubber-band clamps (two printed halves plus added rubber bands, Printables 617245) and for printed clamps built around a metal spring and screws (Printables 559737)
- **making_tips_3d_printing**: Spring material: print anything that has to spring back in PETG, not PLA; one designer found 'the spring from PLA doesnt really hold up that well but petg works great' (Printables 1096058), another says a PLA spring 'may wear out or crack sooner' (Printables 1707408), and Hackaday notes 'PLA makes for a very poor spring material'. Plastic held bent for a long time slowly loses force (stress relaxation: 'a clip or clamp loses holding force', filamentspecs), so don't store printed clips clamped shut on something thick, and use rubber bands or a metal spring where it must keep gripping for months. Orientation: print the halves lying flat so the bending runs along the layers; Printables 617245 'prints flat for much greater strength', and CNC Kitchen's hooks printed standing broke at only 46-55% of the load of flat ones. Settings seen on popular models: for rubber-band clamp halves, PLA at 0.2 mm layers, 3 perimeters and 15% infill (Printables 617245); for a print-in-place PETG peg, 3 perimeters and no supports (Printables 1707408); some one-piece pegs suggest 100% infill (Printables 904305). Rubber bands: add as many as you need for the force you want (Printables 617245, 982731); natural rubber bands crack quickly when kept stretched in air (ozone cracking), while EPDM and silicone O-rings resist ozone (Wikipedia 'Ozone cracking'), so O-rings make longer-lasting springs. Jaw gap: for springless pegs pick the gap to suit the thickness held; Printables 33109 comes in 1, 2, 3 and 4 mm gaps. Pivots between printed parts need at least 0.3 mm clearance to move freely (Prusa 'Modeling with 3D printing in mind'). Reusing a metal spring: Printables 559737 takes a spring with wire up to 2.5 mm thick, a coil about 10 mm high and 15 mm across and legs up to 50 mm long, prints its jaws flat with supports, and assembles the spring with locking pliers and a vice while wearing safety glasses. Heat: PLA starts to give at about 60 degC (CNC Kitchen), so a PLA clip on a lamp or left in a hot car will soften; PETG lasted to about 80 degC in the same test. Printed replacement tips and jaws for bought spring clamps are common (Printables 586755, 466832).
- **off_the_shelf_parts**: Search terms: 'spring clamp' (metal with PVC tips, or plastic), 'nylon spring clamp', 'heavy duty spring clamp', 'needle nose spring clamp', 'ratchet spring clamp' (e.g. Bessey XM, XC Clippix, XCL, XCR, brand), 'muslin clamp' or 'backdrop clamp', 'clothes pegs' (wooden spring, plastic, stainless steel), 'crocodile clip' or 'alligator clip' (electrical), 'binder clip' or 'foldback clip' (spring-steel, no pivot), 'clip-on lamp' or 'clamp lamp', 'clip-on phone holder', 'spring clamp tips' or 'spring clamp pads' (replacement jaw pads), and 'torsion spring' for replacement springs (see the Coil spring entry). For sizes and forces, link to a maker's sheet such as Bessey's: https://bessey.de/getmedia/4aaf3598-88bf-4334-8867-07e665352c04/pr-bessey-xm-xv-xc-xcl-xcr__en.
- **rules_of_thumb**: 
  - Expect light clamping force: metal spring clamps give up to about 100 N (25 mm opening), 120 N (50 mm) and 150 N (75 mm) (Bessey, https://bessey.de/getmedia/4aaf3598-88bf-4334-8867-07e665352c04/pr-bessey-xm-xv-xc-xcl-xcr__en); for big glue-ups use bar or screw clamps, which give 'immense, even pressure' (This Old House, https://www.thisoldhouse.com/house-one/clamp-guide).
  - A coiled torsion spring's turning force is proportional to how far it is twisted (Wikipedia 'Torsion spring', https://en.wikipedia.org/wiki/Torsion_spring), so a spring clamp grips a thick part harder than a thin one, and gripping close to the pivot gives more force than at the jaw tips (lever arithmetic; no clamp test opened).
  - Print springy parts in PETG, not PLA (Printables 1096058 and 1707408; Hackaday, https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/).
  - Print clamp halves and pegs lying flat, so bending loads run along the layers (Printables 617245; CNC Kitchen found standing prints broke at about half the load, https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament).
  - Plastic held at a fixed bend loses force over time (stress relaxation; https://filamentspecs.com/creep-resistance-3d-printed-parts/): for clips that grip for months, use a metal spring or replaceable rubber bands or O-rings.
  - Rubber-band clamps: add bands until the grip is enough (Printables 617245); natural rubber cracks from ozone under very small stretch, while EPDM, silicone and fluoroelastomer rubbers resist it (Wikipedia 'Ozone cracking', https://en.wikipedia.org/wiki/Ozone_cracking).
  - Give a printed pivot at least 0.3 mm clearance (Prusa, https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135).

### When to use it

- **everyday_examples**: 
  - clothes pegs on a washing line (Wikipedia 'Clothespin')
  - small spring clamps holding a glue-up, a drop cloth or a tarp (This Old House)
  - crocodile clips on electrical test leads and car jump leads (Wikipedia 'Crocodile clip')
  - chip or bag clips, and clip-on reading lamps and phone holders
- **when_to_use**: When you need to hold something quickly with one hand and take it off just as quickly: small glue-ups (luthiers use clothes pegs to hold kerfing while the glue sets, Wikipedia), holding cloth, paper, tarps or photo backdrops, holding parts while marking or fitting, clipping a light, phone, sign or sensor onto a shelf edge, rod or strap, and holding gels on hot film lights with wooden pegs (Wikipedia). It needs no tools, doesn't mark the work if it has pads, and costs almost nothing.
- **when_not_to_use**: When you need high or adjustable pressure, use a screw clamp (C-clamp or G-clamp, F-clamp or bar clamp), or a toggle clamp for fast, repeatable, firm holding. For a semi-permanent clip-on mount on a bar, pole or desk edge, use a screw-tightened clamp-on mount or U-bolt. To hold sheets with holes in them, use temporary sheet fasteners (Cleco-type pins). For anything overhead, anything that could fall and cause harm (such as a heat lamp), any lifting and any person, use rated fixings and a chain or safety line instead; NDSU Extension says heat lamps 'should be secured as if they are permanent', with a chain and a locking chain connector. For electrical connections, crocodile clips are only for temporary test connections (see Binding post and banana plug); mains wiring must follow local law and never uses improvised clips.
- **environment_limits**: Heat: wooden pegs stay safe to touch on hot film lights, whereas plastic would melt and metal would get too hot (Wikipedia 'Clothespin'); PLA starts to give at about 60 degC and PETG at about 80 degC (CNC Kitchen). Outdoors: torsion-spring pegs can twist and fall apart, which is why stainless steel pegs with a trapped compression spring are made, as they 'do not rust or decay with outdoor use' (Wikipedia). Plastic pegs left in sunlight go brittle ⚑ [uncertain: common experience, not found on an opened page]. Rubber: natural rubber bands crack from ozone when stretched (Wikipedia 'Ozone cracking'). Over time: printed springs lose force if left clamped (stress relaxation, filamentspecs). Vibration: a friction-only grip can creep or walk off a vibrating edge ⚑ [uncertain: not found on an opened page]. *(⚑ parts need confirming)*
- **safety_notes**: Pinch points: strong metal clamps snap shut hard on fingers and skin ⚑ [uncertain: general caution]. Fitting a strong metal spring into a home-made clamp 'can be tricky or dangerous'; wear safety glasses and squeeze it together in a vice rather than by hand (Printables 559737). Never rely on a spring clip alone to hold a heat lamp or anything hot or heavy overhead: heat lamps over straw bedding add to the risk of barn fires, so NDSU Extension says to hang them with a chain and a locking chain connector so they can't fall into the straw, and Dorset & Wiltshire Fire and Rescue Service says to secure them to something solid 'using chain not twine'. Never use one to lift, to hold anything overhead or to hold a person. Small clips and loose springs are a choking hazard for small children ⚑ [uncertain: general caution]. Crocodile clips are for temporary test connections; never improvise mains connections with them. *(⚑ parts need confirming)*
- **common_failures**: (1) The torsion spring twists sideways and the two halves fall apart (Wikipedia 'Clothespin'); stainless pegs with a trapped compression spring avoid this. (2) Swivelling jaw pads pop off and get lost (Woodsmith); print replacements (Printables 586755, 466832). (3) Cheap plastic handles or jaws break while the spring survives ('The only durable part in spring clamps is the spring', Printables 559737); reuse the spring in printed parts. (4) Printed PLA springs crack or go limp (Printables 1096058, 1707408; Hackaday); use PETG. (5) A printed clip left clamped slowly loses its grip (stress relaxation, filamentspecs). (6) Rubber bands perish and snap (Wikipedia 'Ozone cracking'); swap in EPDM or silicone O-rings. (7) Not enough force, so the work slips; use a screw or bar clamp (This Old House). (8) Printed halves split along layer lines when printed standing; print flat (Printables 617245; CNC Kitchen).
- **related**: 
  - Toggle clamp: a lever that snaps past a dead point (over-centre) and locks with much more force; not sprung
  - Screw clamps (C-clamp or G-clamp, F-clamp, bar clamp; Wikipedia 'Clamp (tool)'): adjustable, high force, slower to fit; one-handed bar clamps lock with a binding plate (see Binding-plate lock)
  - Binder clip (foldback clip): a bent spring-steel strip that clamps without a pivot pin, with wire handles that fold flat (Wikipedia 'Binder clip')
  - Crocodile clip (alligator clip): a spring-jaw clip for temporary electrical connections, covered in Binding post and banana plug
  - Clamp-on accessory mount (handlebar clamp, desk clamp, U-bolt): screw-tightened for a mount that stays put
  - Cantilever snap fit and Spring-steel push-on fasteners: clips that catch on a feature instead of squeezing
  - Spring-gate hook (carabiner, snap hook): a spring holds a gate shut rather than squeezing jaws together
  - Coil spring (compression, extension, torsion): the spring inside most spring clamps
  - Elastic band and elastic cord springs: the spring in rubber-band clamps
  - Printed leaf spring and Compliant mechanisms & flexures: the principle behind one-piece springless pegs
  - Temporary sheet fastener (Cleco-type spring pin): holds drilled sheets together while they are fixed
  - Hose clamp (spring hose clamp): a spring-steel band that squeezes a hose onto a fitting

### Pictures, videos and models

- **links**: 
  - [Clothespin (US Patent 10,163).png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Clothespin_(US_Patent_10,163).png): Drawing of the first modern clothespin (David M. Smith, 1853): two prongs on a fulcrum plus a spring *(licence: Public domain)*
  - [Clothespin-0157e3.jpg (Wikimedia Commons, 2009)](https://commons.wikimedia.org/wiki/File:Clothespin-0157e3.jpg): Photo of a wooden spring-type clothespin, showing the coiled wire spring that is also the pivot *(licence: CC BY-SA 3.0 or GFDL (reuse with credit))*
  - [Clamps and filings (2420233104).jpg (Wikimedia Commons, from Flickr)](https://commons.wikimedia.org/wiki/File:Clamps_and_filings_(2420233104).jpg): Photo of workshop spring clamps (captioned 'Spring clamps' in Wikipedia 'Clamp (tool)') *(licence: CC BY 2.0 (reuse with credit))*
  - [Category:Spring clamps (Wikimedia Commons)](https://commons.wikimedia.org/wiki/Category:Spring_clamps): Photos of many spring clamps and clips, including metal and plastic spring clamps, a crocodile clip and a binder clip *(licence: per file (check each file's page))*
  - [BESSEY spring clamps XM, XV, XC, XCL and ratchet clamp XCR (manufacturer PDF, 03/2025)](https://bessey.de/getmedia/4aaf3598-88bf-4334-8867-07e665352c04/pr-bessey-xm-xv-xc-xcl-xcr__en): Photos of metal and fibreglass-reinforced plastic spring clamps, with openings, throat depths and clamping forces *(licence: link only (manufacturer document))*
- **make_it_yourself**: 
  - [Rubber Band Spring Clamp (Printables 617245; URL from Printables API, page not opened)](https://www.printables.com/model/617245-rubber-band-spring-clamp): Two flat-printed halves with snap-in pads, held together and closed by as many rubber bands as you like; opens 0-50 mm and scales up or down *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Print-in-Place Clothespin (Printables 1707408; URL from Printables API, page not opened)](https://www.printables.com/model/1707408-print-in-place-clothespin-print-in-place-kolicek): One-piece print-in-place clothes peg with an integrated printed spring; snap the centre together after printing; tested in PETG *(licence: Creative Commons Attribution-NonCommercial (CC BY-NC))*
  - [Simple yet effective clothespin (Printables 1096058; URL from Printables API, page not opened)](https://www.printables.com/model/1096058-simple-yet-effective-clothespin): One-piece printed peg with no assembly, in smooth-jaw and toothed-jaw versions; designer recommends PETG over PLA for the spring *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Springless Clothespin (Printables 33109; URL from Printables API, page not opened)](https://www.printables.com/model/33109-springless-clothespin): One-piece springy peg (no pivot) in four jaw gaps from 1 to 4 mm, ready to use off the printer; STEP files included *(licence: Creative Commons Attribution (CC BY))*
  - [Serious Spring Clamp (Printables 559737; URL from Printables API, page not opened)](https://www.printables.com/model/559737-serious-spring-clamp): Printed handles and pivoting jaws that reuse the metal spring from a broken spring clamp, with M3 and M4 screws; includes a safe assembly method using a vice *(licence: Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA))*
- **diagram_idea**: Side view of a clothes-peg style spring clamp as two levers crossing at a pivot, with a coiled torsion spring at the pivot pushing the handles apart; arrows show 'squeeze here' at the handles and 'jaws close' at the tips, with a second panel showing the same clamp made from two printed halves and rubber bands.
- **sources**: 
  - https://en.wikipedia.org/wiki/Clothespin
  - https://en.wikipedia.org/wiki/Clamp_(tool)
  - https://en.wikipedia.org/wiki/Torsion_spring
  - https://en.wikipedia.org/wiki/Crocodile_clip
  - https://en.wikipedia.org/wiki/Binder_clip
  - https://en.wikipedia.org/wiki/Ozone_cracking
  - https://bessey.de/getmedia/4aaf3598-88bf-4334-8867-07e665352c04/pr-bessey-xm-xv-xc-xcl-xcr__en
  - https://www.thisoldhouse.com/house-one/clamp-guide
  - https://www.woodsmith.com/review/spring-clamp/
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.ag.ndsu.edu/news/newsreleases/2023/march/take-precautions-when-using-heat-lamps-for-newborn-livestock
  - https://www.dwfire.org.uk/business-fire-safety/fire-safety-and-the-law/fire-risks-on-farms/heat-lamp-safety/
  - https://commons.wikimedia.org/wiki/File:Clothespin_(US_Patent_10,163).png
  - https://commons.wikimedia.org/wiki/File:Clothespin-0157e3.jpg
  - https://commons.wikimedia.org/wiki/File:Clamps_and_filings_(2420233104).jpg
  - https://commons.wikimedia.org/wiki/File:Clamps.jpg
  - https://commons.wikimedia.org/wiki/Category:Spring_clamps
  - https://api.printables.com/graphql/ (Printables API: models 617245, 1707408, 1096058, 33109, 559737, 904305, 659163, 982731, 9024; titles of 586755 and 466832 from search results)

### Finder tags

- **connects**: wall, rail, desk or grid, something to grip
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, press or vice, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes

