# electrical connections: Joins wires, or connects them to boards, batteries and devices

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 324 Soldered wire joint (soldered splice)

*electrical connections.* Two wires, or a wire and a pin or pad, are twisted, hooked or laid together and melted solder flows between them, making a permanent joint that conducts well but needs heat, skill and strain relief

*Also covers:* Baseline entry for the family. Also covers the Western Union (lineman's), lap, lash, rat-tail and T-splices, solder cups, tinning, and covering the joint with heat-shrink. Soldering metal parts (not wires) is Soldered metal joint. Safety: high heat and possibly toxic solders; stiff solder joints break under vibration; tape-only or soldered splices are not allowed in mains wiring by most North American codes

### What it is

- **plain_name**: Two wires (or a wire and a metal pin or pad) are twisted or laid together and melted metal called solder is run into them with a hot soldering iron, so they set into one permanent joint that carries electricity well; a shrink-on plastic sleeve then covers it
- **term**: Soldered wire joint (soldered splice; soft-soldered electrical connection)
- **aliases**: 
  - soldered splice, solder splice, wire splice, electrical splice (a joint directly connecting lengths of cable; Wikipedia 'Line splice')
  - Western Union splice, lineman splice, lineman's splice: hooked and tightly wrapped wires, then soldered (Wikipedia 'Western Union splice'; NASA-STD-8739.4A §19.7)
  - lap splice: wire ends laid side by side, overlapping, and soldered (NASA-STD-8739.4A §19.4)
  - lash splice: a lap splice bound with turns of thin solid wire before soldering (NASA-STD-8739.4A §19.5)
  - rat-tail splice, twist splice, pig-tail splice: two or more wires twisted together round a common axis (Wikipedia 'Rat-tail splice')
  - T-splice, tap: a branch wire joined to the middle of a main wire (Wikipedia 'T-splice'); SparkFun calls the soldered version a 'Western T-splice'
  - solder cup, solder bucket: the hollow cup on the back of a connector pin that is filled with solder and the wire pushed in (Wikipedia 'Electrical connector')
  - tinning, pre-tinning: coating stripped wire with solder before joining (NASA-STD-8739.4A §10.1.2, §19.4.1)
  - solder ferrule splice: wires soldered inside a small metal tube (NASA-STD-8739.4A §19.8)
  - solder joint, soldered connection; 'cold joint' and 'dry joint' for faulty ones (Wikipedia 'Soldering')
- **family**: electrical connections
- **other_families**: welding, brazing & soldering
- **one_liner**: Stripped wire ends are twisted, hooked or laid side by side, molten solder is flowed into them with a soldering iron so it bonds to the copper, and the finished joint is covered with heat-shrink tubing; it is the basic permanent wire joint that crimps, solder sleeves, lever connectors and wire nuts are compared with.
- **complexity**: A few parts: the two (or more) stripped wire ends, or a wire and a terminal, pin, solder cup or circuit-board pad; solder (usually wire solder with flux in its core); and an insulating cover, usually a length of heat-shrink tubing slid onto one wire before joining (SparkFun 'Working with Wire'; NASA-STD-8739.4A §19). Sometimes a few turns of thin solid wire to bind a lash splice (NASA §19.5) or a small metal ferrule (NASA §19.8).
- **how_it_works**: The wires are first held together: twisted round each other (rat-tail or Western Union splice), laid side by side (lap splice), or pushed into a cup or hole. The iron heats the copper above the solder's melting point (183 °C for 63/37 tin-lead, about 217-220 °C for lead-free tin-silver-copper), and the flux in the solder cleans off oxide so the molten solder flows into the gaps and wets the metal (Wikipedia 'Soldering'). When it cools the solder sets into a metal bridge bonded to both wires, giving a low-resistance path; in NASA pull tests on soldered Western Union splices the wire broke beside the splice, never at it (Wikipedia 'Western Union splice'). The solder also soaks a little way along stranded wire (wicking), making it stiff up to that point and flexible beyond, so bending concentrates there and the joint needs strain relief (NASA-STD-8739.4A §13.3.1).

### Finder attributes

- **job**: join and hold: makes a permanent electrical and mechanical join between wires, or between a wire and a pin, cup, tag or pad (the finder reaches this entry through the 'electrical connections' family)
- **motion**: none: the joint is rigid, and the wire next to it must not be flexed repeatedly (NASA-STD-8739.4A §7.2.36: splices 'shall not be located in areas of the cable where flexing may occur').
- **degrees_of_freedom**: 0: the joined wires cannot move relative to each other.
- **special_behaviour**: none: it simply joins. (A joint made with a deliberately low-melting solder can act as a heat-triggered release, but that is the separate Burn-wire and fusible-link release entry.)
- **holding_principle**: 
  - material bond (glue, solvent or melting): molten solder wets both metals and sets into a metal bridge (Wikipedia 'Soldering')
  - shape (the parts interlock; form-fit): in twisted, Western Union and lash splices the wraps hold the wires together before soldering; the Western Union wrap 'causes the join to tighten as the conductors pull against each other' (Wikipedia 'Western Union splice'), and US workplace rules require soldered splices to be 'mechanically and electrically secure without solder' first (OSHA 29 CFR 1910.303(c)(3)(i))
- **input_output**: not applicable
- **power**: passive (no power needed): heat is needed only to make or undo the joint, not to hold it.
- **removability**: semi-permanent (can be undone but may damage parts): the solder can be melted and removed with desoldering braid (wick) or a solder sucker (Wikipedia 'Soldering'), but wrapped splices are usually cut out and the wires shortened and remade.
- **reuse_cycles**: a few times: a joint can be desoldered and remade, but old solder should be removed first because used solder holding dissolved metal makes brittle 'cold' joints (Wikipedia 'Soldering'), and each cut-and-remake shortens the wire.
- **tools_needed**: Soldering iron: pencil type of at least 25 W, ideally a temperature-controlled station (Adafruit 'Tools'), with a stand and a brass or damp-sponge tip cleaner (SparkFun 'How to Solder'); solder, usually flux-cored, plus a flux pen for stubborn joints (SparkFun); wire strippers and flush cutters; something to hold the wires still (helping hands, a vice, tape on a soldering mat, or a 3D-printed clamp) (SparkFun 'Working with Wire'); heat-shrink tubing and a hot-air gun or rework station (SparkFun; Wikipedia 'Heat-shrink tubing'); desoldering braid or a solder sucker for mistakes (Wikipedia 'Soldering'); safety glasses and fume extraction (SparkFun; HSE).
- **seal**: none: the bare joint is exposed until it is covered. Plain heat-shrink gives insulation and protection from dust and solvents; heat-shrink with a glue lining 'help[s] provide a good seal' (Wikipedia 'Heat-shrink tubing'), and a solder-seal sleeve gives 'a tough, waterproof joint' (Hackaday 2023).
- **load**: Electrical: above about 30 A (the joint has no rating of its own: a well-made soldered joint carries whatever its wire and connector are rated for, from signal wires up to e.g. 45 A continuous for an XT90-type plug soldered to 10 AWG wire and 150 A for an AS300-type plug on 6 AWG wire (Holybro 'Connector & Wire Rating')); extra-low voltage only (as a maker's joint: soldered splices in mains wiring are restricted or banned by wiring rules, see safety_notes). Mechanical: medium in a straight pull, since soldered Western Union splices on 16 and 22 AWG wire broke outside the splice in NASA tests (Wikipedia 'Western Union splice'); weak against bending, vibration and repeated flexing, which crack the wire where the solder stops (NASA-STD-8739.4A §13.3.1). Soft solder 'does not make a strong joint and is unsuitable for mechanical load-bearing applications' (Wikipedia 'Soldering'), and solder joints are 'more prone to mechanical failure than crimped joints when subjected to vibration and compression' (Wikipedia 'Electrical connector'). Add strain relief so the joint carries no load.
- **adjustable**: no: once the solder sets the joint can only be changed by desoldering and remaking it.
- **play_and_precision**: not applicable
- **access_needed**: both sides: you need room all round the joint to hold the wires, heat it, solder the underside as well as the top and slide the heat-shrink over (SparkFun 'Working with Wire': 'Ensure that the underside of the wire is also soldered'); a solder cup needs access to the back of the connector (Wikipedia 'Electrical connector').
- **materials**: Wires: copper, solid or stranded, bare or tinned; joins them to tinned, plated or brass pins, tags, cups and circuit-board pads. Copper, zinc, brass, silver and gold solder easily; iron, mild steel and nickel are harder; stainless steel and some aluminium alloys are difficult because of their tough oxide films (Wikipedia 'Soldering'). Solder: tin-lead 63/37 (eutectic, melts at one temperature, 183 °C) or 60/40 (183-190 °C) is easiest; lead-free tin-silver-copper melts at 217-220 °C and needs more heat and flux (Wikipedia 'Soldering'; Adafruit 'Tools'). Flux: rosin, RMA or no-clean for electronics; never acid plumbing flux, whose residue conducts and 'will eventually dissolve small diameter wires' (Wikipedia 'Soldering'). Cover: polyolefin heat-shrink, usable from −55 to 135 °C (Wikipedia 'Heat-shrink tubing'). Wire insulation can melt back if the iron stays on too long (SparkFun 'Working with Wire').
- **maker_difficulty**: moderate: the materials are cheap, but a reliable joint needs a hot, clean iron, the wires held still and some practice; soldering 'requires a combination of technical knowledge and practical experience' (Wikipedia 'Soldering'). Solder-seal sleeves, crimps and lever connectors are the usual lower-skill alternatives (Hackaday 2023).

### Making it

- **processes**: 
  - off-the-shelf part: solder, flux and heat-shrink are bought, and the joint is made by hand with a soldering iron
  - 3D print (FDM): printed clamps, jigs and 'helping hands' hold the wires still while soldering (SparkFun suggests '3D printing clamps'; Printables models in make_it_yourself)
  - 3D print (FDM): printed cable clamps and enclosures that grip the cable sheath so the joint is never bent or pulled ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the joint is made by melting metal and can't be printed; only holding jigs and strain-relief parts are printed (one popular wire-holding clamp prints in place; Printables 1341728).
- **making_tips_3d_printing**: The joint itself can't be printed, but prints help around it. 1) Print a jig or clamp that holds the two wires end to end while you solder and while the solder cools: a joint moved while setting becomes a weak, frosted 'disturbed' joint (Adafruit 'Common Problems'), and SparkFun suggests 'a third hand or 3D printing clamps to hold the wires in place'. 2) Print jigs in a heat-tolerant filament: a popular print-in-place wire clamp recommends PETG or ABS, though PLA also works (Printables 1341728); keep the iron tip and the hot joint off the plastic, because solder melts at 183 °C or more (Wikipedia 'Soldering'), far hotter than printed plastics tolerate ⚑ [uncertain]. 3) Design enclosures with a clamp, gland, cable tie anchor or hot-glue pocket that grips the cable's outer sheath, so a tug on the cable never reaches the soldered joint (NASA-STD-8739.4A §7.2.20: wires exiting connectors 'shall be stress relieved'; see Cable gland and strain relief). 4) Don't put a splice where a printed hinge, slide or moving head will flex the wire (NASA §7.2.36); route the joint into a fixed part of the cable. 5) Leave room in channels and enclosures for the heat-shrink-covered splice, which is fatter than the wire, and stagger several splices along a bundle so it stays slim (NASA §7.2.35). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Solder wire: 63/37 or 60/40 tin-lead, or lead-free tin-silver-copper ('SAC'), usually with a rosin or no-clean flux core; flux pens, flux paste and syringes; heat-shrink tubing (polyolefin, typically 2:1 shrink ratio, also 3:1, plain or glue-lined); solder sleeves (solder-seal splice connectors) with a built-in solder ring; connectors with solder cups or solder tags on the back of the pins; desoldering braid (wick) and solder suckers; helping hands and PCB vices; soldering irons and stations with interchangeable tips; brass tip cleaners; fume extractors (Wikipedia 'Soldering', 'Heat-shrink tubing', 'Electrical connector'; SparkFun 'How to Solder'; Adafruit 'Tools'; Hackaday 2023).
- **rules_of_thumb**: 
  - Lap splice: pre-tin both wires, lay them parallel and touching for at least 3 and not more than 6 wire diameters, don't twist them, and form a solder fillet along the whole overlap with the wire outlines still visible (NASA-STD-8739.4A §19.4.1, pp. 68-69).
  - Lash splice: as a lap splice, bound with solid wire wrapped at least 6 turns, either closed (touching) or as an open spiral with no more than 2 lashing-wire diameters between turns; trim the wrap ends flush before soldering (NASA-STD-8739.4A §19.5.1, pp. 69-70).
  - Western Union splice: pre-tin, then at least 3 tight turns of each wire round the other with no gaps between turns, wraps not overlapping, ends trimmed flush so they can't poke through the sleeve; solder must wet and fillet all round (NASA-STD-8739.4A §19.7.1, pp. 71-72). The 1915 textbook method uses 5-6 snug twists each side (Wikipedia 'Western Union splice').
  - Cover every splice with tubing that reaches past it onto the insulation by at least 2 x the diameter of the largest wire at each end; each extra layer overlaps the one below by at least 2 diameters (NASA-STD-8739.4A §19.2.6, p. 67).
  - When tinning stranded wire, keep the strands visible, don't let solder wick into parts that must stay flexible, and leave no more than 1 wire diameter of untinned wire between the tinning and the insulation; insulation should stop less than 2 wire diameters from the joint (NASA-STD-8739.4A §10.1.2, §10.1.4).
  - Don't place splices where the cable flexes or within two harness diameters of where it branches, and stagger several splices along a bundle (NASA-STD-8739.4A §7.2.35-7.2.37).
  - Iron temperature about 325-375 °C; if the solder smokes, turn it down; heat the pad and the wire together, feed solder to the joint, then remove the solder before the iron (SparkFun 'How to Solder'). Use an iron of at least 25 W (Adafruit 'Tools'); 'A 100-watt soldering iron may provide too much heat for printed circuit boards (PCBs), while a 25-watt iron will not provide enough heat for large electrical connectors' (Wikipedia 'Soldering').
  - Melting points: 63/37 tin-lead 183 °C (eutectic, sets instantly); 60/40 183-190 °C; 50/50 183-215 °C; lead-free tin-silver-copper 217-220 °C (Wikipedia 'Soldering').
  - A good joint is smooth and shiny with a concave fillet and the wire outline visible; dull grey or grainy suggests a moved or cold joint (lead-free solder may look dull even when good) (Wikipedia 'Soldering').
  - Polyolefin heat-shrink usually shrinks 2:1 in diameter (3:1 available), shrinks about 6% in length too, and shrinks at about 143 °C (Wikipedia 'Heat-shrink tubing').

### When to use it

- **everyday_examples**: 
  - Wires soldered to the solder cups or tabs on the back of plugs and sockets, often hidden under a backshell (Wikipedia 'Electrical connector')
  - Battery leads of drones and radio-controlled models soldered into high-current plugs (Holybro 'Connector & Wire Rating')
  - Wires and components soldered onto LED strips, switches and small circuit-board pads in hobby kits; SparkFun shows a resistor and jumper wires added with a T-splice (SparkFun 'Working with Wire')
  - Early telegraph and knob-and-tube house wiring, which used the Western Union splice and the T-splice (Wikipedia 'Western Union splice', 'T-splice')
- **when_to_use**: Use a soldered joint for small, permanent, low-resistance joints in low-voltage wiring when you have a soldering iron: lengthening or repairing wires inside a project, attaching wires to switches, LEDs, motors, battery packs and circuit-board pads, adding a component partway along a wire (T-splice), and wiring solder-cup connectors. It is small and light (solder-style splices give 'a smaller, more compact splice termination, with significant weight reductions over crimp-style splices'; NASA-STD-8739.4A §19.3), needs no crimper matched to each terminal size, copes with mixed wire sizes, and carries the full current of the wire. A Western Union splice suits solid wire that may be pulled (Wikipedia 'Western Union splice'; SparkFun), and a lap or lash splice gives the slimmest joint (NASA §19.4-19.5).
- **when_not_to_use**: Don't use it in fixed mains wiring or inside anything that plugs into the mains: wiring rules set which joints are allowed there, so use the connector the rules require, or a qualified electrician (OSHA 29 CFR 1910.303; Wikipedia 'Rat-tail splice'; Approved Document P). Avoid it where the wire vibrates, flexes or is pulled (vehicles, robot arms, moving print heads): the stiff solder-soaked section cracks at its edge, so use a proper crimp (Crimped butt splice, Crimp terminals), which is 'highly resistant to vibration and thermal shock' (Wikipedia 'Crimp (joining)'), plus strain relief. Don't solder-tin wire ends that go into screw terminals; fit a Wire-end ferrule instead (Wikipedia 'Screw terminal'). Avoid it where the joint gets hot, because soft solder 'loses strength, and eventually melts' (Wikipedia 'Soldering'). If you will want to disconnect it, use a plug-and-socket connector, a lever connector or a screw terminal. Outdoors or in water, seal it with glue-lined heat-shrink or use a solder sleeve. Don't solder where nearby plastic parts, sensors or other joints can't be protected from the heat (NASA-STD-8739.4A §7.2.41).
- **environment_limits**: Heat: soft solder loses strength as it warms and melts at 183 °C (63/37 tin-lead) or 217-220 °C (lead-free) (Wikipedia 'Soldering'); polyolefin heat-shrink is rated about −55 to 135 °C (Wikipedia 'Heat-shrink tubing'). Vibration and flexing are the main threat: 'a soldered joint (of a tinned tip) can fracture under mechanical stress and thermal cycling may cause joint failure' (SparkFun 'Working with Wire'), and movement concentrates stress where the wicking stops (NASA-STD-8739.4A §13.3.1). Creep: solder slowly flows under steady pressure, so heavily tinned wire clamped in a screw terminal works loose (Wikipedia 'Screw terminal'). Damp: leftover flux can stay slightly active, so remove it in high humidity to reduce corrosion (Wikipedia 'Soldering'). Sunlight: coloured heat-shrink resists UV less well, and 'only black is recommended for outdoor applications' (Wikipedia 'Heat-shrink tubing'). Long term: lead-free tin finishes can grow tin whiskers (Wikipedia 'Soldering'); bismuth low-melt solders give joints 'prone to cracking' (Wikipedia 'Solder').
- **safety_notes**: Burns and fire: the tip runs at about 325-375 °C; always park the iron in its stand, because an iron left lying around 'could burn you, or, worse, it could burn your desk and start a fire' (SparkFun 'How to Solder'). Overheated heat-shrink 'can melt, scorch or catch fire like any other plastic'; suppliers don't recommend shrinking it with a lighter (Wikipedia 'Heat-shrink tubing'). Eyes: wear safety glasses in case clipped wire ends or molten solder fly (SparkFun). Fumes: rosin-based flux fume 'is a top cause of occupational asthma'; don't overheat the iron, use fume extraction and keep your head out of the plume (HSE 'Solderer'); 'Even without the presence of lead, soldering can release fumes that are harmful' (Wikipedia 'Soldering'). Lead: tin-lead solder contains lead, which 'can build up in the body over time from inhalation, ingestion, or skin contact' (Adafruit 'Tools'); use lead-free solder where young children may touch the work or outdoors (Wikipedia 'Soldering'). Mains: this entry gives no mains wiring steps; mains work must follow local law, and the rules differ: in US workplaces OSHA allows soldered splices only if the wires are first 'mechanically and electrically secure without solder' and are then insulated as well as the wire itself (29 CFR 1910.303(c)(3)(i)), while Wikipedia says tape-only and soldered splices are not permitted 'for 110 volts or higher by most, or all, North American building electrical codes' (Wikipedia 'Rat-tail splice'); in England, electrical installation work in homes must meet Building Regulations Part P, and some of it must be notified or certified (Approved Document P, 2013 edition).
- **common_failures**: Cold joint: dull, lumpy solder that never fully melted or didn't wet the wire, often from heating the solder instead of the wire; it may work at first and fail later. Fix by reheating with a clean, hot iron powerful enough for the job (Wikipedia 'Soldering'; Adafruit 'Common Problems'). Disturbed (dry) joint: grainy or frosted because the wires moved as the solder set; reheat and hold still in a jig (Adafruit; Wikipedia). Too much solder: a blob that may not have wetted the wire at all (Adafruit). Overheated joint: burnt flux, melted or shrunk-back insulation; work quickly with a hot, clean tip (Adafruit; SparkFun). Wire snapping just beyond the solder after bending or vibration: keep wicking short, add strain relief and don't splice where the cable flexes (NASA-STD-8739.4A §13.3.1, §7.2.36; Wikipedia 'Electrical connector'). Forgetting to slide the heat-shrink on before joining (Hackaday 2023; SparkFun). Sharp wire ends or strands poking through the sleeve: trim wraps flush and leave no protruding strands (NASA §19.4.1, §19.7.1). Tinned wire in a screw terminal working loose and overheating (Wikipedia 'Screw terminal'). Corrosion from flux residue left in a damp place (Wikipedia 'Soldering'). Twisted and taped wires with no solder or connector: mechanically weak and not permitted on mains (Wikipedia 'Rat-tail splice').
- **related**: 
  - Solder sleeve (solder-seal splice): heat-shrink with a solder ring and glue rings that solders, insulates and seals a splice in one step with a hot-air gun, no iron
  - Crimped butt splice: a metal tube squeezed onto both wires with a crimp tool; no heat, better against vibration, but needs the right tool and size
  - Crimp terminals and Wire-end ferrule: crimped ends for screws, blade connectors and terminal blocks, instead of tinning the wire
  - Spring-clamp wire connector (lever connector): tool-free, reusable and joins different wire types, but bulkier
  - Twist-on wire connector (wire nut): twisted wires held by a threaded cap, common in North American mains junction boxes
  - Heat-shrink tubing: the usual insulating cover for this joint
  - Wire wrap: solid wire wound tightly round a square post; no solder, and it can be unwound
  - Insulation-displacement connector: forked blades cut through the insulation; no stripping, small currents only
  - Conductive glue, paint and ink: for parts that can't take heat; much higher resistance than solder
  - Cable gland and strain relief: what stops a pull or bend on the cable reaching the soldered joint
  - Soldered metal joint: the same soft soldering used to join metal parts and copper pipes rather than wires
  - Burn-wire and fusible-link release: uses a low-melting solder joint as a deliberate heat-triggered weak link

### Pictures, videos and models

- **links**: 
  - [Western Union splice.jpg (Wikimedia Commons, from J. M. Sharp, Practical Electric Wiring, 1915)](https://commons.wikimedia.org/wiki/File:Western_Union_splice.jpg): Step-by-step drawing (A-D) of making a short-tie Western Union splice, plus two long-tie variations (E, F) *(licence: Public domain)*
  - [NASA-STD-8739.4A Workmanship Standard for Crimping, Interconnecting Cables, Harnesses, and Wiring (2016), chapter 19 'Splicing', pp. 67-78](https://nepp.nasa.gov/files/27631/nstd87394a.pdf): Photos and drawings of pre-tinned lap, lash, Western Union, solder-sleeve and solder-ferrule splices before and after soldering and sleeving *(licence: US government (NASA) publication, generally public domain in the US ⚑ [uncertain])*
  - [Working with Wire, section 'How to Splice Wires' (SparkFun Learn)](https://learn.sparkfun.com/tutorials/working-with-wire/all): Step-by-step photos of stripping, sliding on heat-shrink, soldering a splice on a mat, shrinking the tube, plus a hooked Western Union splice and a T-splice *(licence: CC BY-SA 4.0)*
  - [Adafruit Guide to Excellent Soldering: Common Problems](https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems): Close-up photos of disturbed, cold and overheated joints, poor wetting and too much solder, with how to repair and prevent each *(licence: link only (licence not stated on the page))*
  - [Cold solder joint2.jpg (Wikimedia Commons, by Coronium)](https://commons.wikimedia.org/wiki/File:Cold_solder_joint2.jpg): Photo of a cold solder joint where the wire was not heated enough *(licence: CC BY-SA 3.0)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Soldering Helping Hands / Clamp for Wire Soldering (Print Hive, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1341728-soldering-helping-hands-clamp-for-wire-soldering): Print-in-place clamp, no supports or assembly, that holds two wires in line while you solder them; PETG or ABS recommended *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Wire Soldering Helper (BakedBean3D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/456570-wire-soldering-helper): Small printed stand that holds wires in place while soldering them together, with a tray for offcuts or a tip-cleaning sponge *(licence: Creative Commons Attribution)*
  - [wire soldering clamp jig / Löthilfe für Kabel löten (kjrps, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/704787-wire-soldering-clamp-jig-lothilfe-fur-kabel-loten): Clamp-on jig with two slots that line up wires up to 1.8 mm (scale 170% for 3 mm) for soldering; print in PETG *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
- **diagram_idea**: Four small sketches of stripped wire ends joined as a rat-tail twist, a Western Union splice (hooked cross with tight wraps either side), a lap splice and a T-splice, each with a solder fillet, then one cut-away of the finished splice inside heat-shrink reaching two wire diameters past each end, with a red band marking the stiff solder-soaked zone where the wire breaks if bent.
- **sources**: 
  - https://en.wikipedia.org/wiki/Western_Union_splice
  - https://en.wikipedia.org/wiki/Rat-tail_splice
  - https://en.wikipedia.org/wiki/T-splice
  - https://en.wikipedia.org/wiki/Line_splice
  - https://en.wikipedia.org/wiki/Soldering
  - https://en.wikipedia.org/wiki/Solder
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Crimp_(joining)
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://en.wikipedia.org/wiki/Screw_terminal
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://learn.sparkfun.com/tutorials/working-with-wire/all
  - https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering/all
  - https://learn.adafruit.com/adafruit-guide-excellent-soldering/tools
  - https://learn.adafruit.com/adafruit-guide-excellent-soldering/common-problems
  - https://www.hse.gov.uk/asthma/solderers.htm
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Western_Union_splice.jpg
  - https://commons.wikimedia.org/wiki/File:Rattail_splice.jpg
  - https://commons.wikimedia.org/wiki/File:T-splice_wire.jpg
  - https://commons.wikimedia.org/wiki/File:Cold_solder_joint2.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: above about 30 A
- **tools**: soldering iron, heat gun, press or vice, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** links, making_tips_3d_printing, processes

## 329 Battery holder and battery contacts (spring battery contact, coin-cell holder)

*electrical connections.* A box or clip that holds cells and presses metal contacts, a coiled spring at one end and a flat or springy tab at the other, onto the battery ends, so cells can be swapped without soldering

*Also covers:* Also covers leaf-spring contacts, coin-cell holders, the 9 V battery snap, reverse-polarity protection and printed holders with bought springs. Cells joined into packs with nickel strip are Spot weld. Safety: shorted, crushed or overheated lithium cells cause fires; printed plastic springs relax, so use metal contact springs.

### What it is

- **plain_name**: A plastic box or clip that holds batteries and presses metal contacts (a coiled spring at one end, a flat or springy metal tab at the other) onto their ends, so you can swap batteries without soldering
- **term**: Battery holder and battery contacts (spring battery contact, coin-cell holder)
- **aliases**: 
  - battery holder / battery box / battery case / battery pack holder (Wikipedia 'Battery holder')
  - battery compartment (moulded into a product's case) (Wikipedia 'Battery holder')
  - battery contact / battery spring / coil spring contact / conical spring contact
  - leaf-spring battery contact / flat battery contact / battery tab / battery clip
  - coin-cell holder / button-cell holder / CR2032 holder / coin-cell socket / battery retainer ⚑ [uncertain: 'socket' and 'retainer' not on an opened page]
  - 9 V battery snap / battery clip / PP3 snap connector (Wikipedia 'Nine-volt battery')
  - 18650 holder / cell holder (lithium-ion cells)
  - battery terminal, battery post and clamp (car batteries: SAE and JIS posts) (Wikipedia 'Battery terminal')
  - InstaLoad (brand; contacts that accept a cell either way round) (Wikipedia 'Battery holder') *(⚑ parts need confirming)*
- **family**: electrical connections
- **other_families**: springs & energy storage, quick-release & tool-free
- **one_liner**: A battery holder grips one or more cells and connects them through springy metal contacts pressed against their ends (and, for several cells, links them in series or parallel), so the cells can be taken out and replaced by hand while the device stays wired to the holder.
- **complexity**: A few parts: a moulded plastic body or compartment, metal contacts (usually a coil spring for the flat negative end and a flat tab or leaf spring for the positive end), a metal link strap between cells, wires, pins or solder tags out, and often a lid, a sliding cover, a switch or a screw-down door; e.g. 'case, 2 springs, 2 tabs, link strap, lid, switch, red and black leads'. A coin-cell holder is a plastic base with one springy clip on top and a contact pad beneath.
- **how_it_works**: The cell sits in a shaped cradle that stops it falling out, and a metal spring at one end pushes it hard against a metal tab at the other end, so both contacts keep touching even though cells vary in length, swell a little as they discharge, or get shaken (Wikipedia 'Battery holder'). Coiled springs or flat springy tabs are the two common contact types; a holder with several cells has metal straps that join the end of one cell to the next, so the voltages add up in series (Wikipedia 'Battery holder'; 'Alkaline battery'). Polarity is often enforced by shape: the positive contact is recessed behind plastic so only the raised 'button' of the cell's positive end can reach it, and the 9 V snap has a small round terminal and a larger hexagonal one that only fit one way (Wikipedia 'Battery holder'; 'Nine-volt battery'). A coin-cell holder clamps the flat cell between a springy clip on its top (positive) face and a pad under its bottom (negative) face.

### Finder attributes

- **job**: join and hold: holds the cells in place and makes the electrical connection to them, without soldering
- **motion**: none in use; the spring contact compresses a few millimetres as the cell goes in
- **degrees_of_freedom**: 0 for the cell once fitted: the cradle and lid stop sideways movement and the spring presses it end-on against the fixed contact.
- **special_behaviour**: 
  - quick-release: cells are pushed or slid in and out by hand without tools (except child-resistant compartments with a screw-down door)
  - tensioning (takes up slack and holds): the spring contact takes up differences in cell length and keeps pressing the cell against the other contact (Wikipedia 'Battery holder')
- **holding_principle**: spring force (a spring or springy part presses it in place): the contact springs press the cell end-on; plus shape (form-fit): the cradle, lid or clip stops it falling out
- **input_output**: not applicable
- **power**: passive (no power needed): the holder itself needs no power; it carries the battery's power to the device
- **removability**: tool-free quick release for the cells; the holder itself is screwed, glued, taped or soldered in place (Wikipedia 'Battery holder'); child-resistant coin-cell doors need a tool
- **reuse_cycles**: many times for cell changes; contacts slowly wear, bend or corrode, and cheap leaf contacts can lose their spring
- **tools_needed**: none to change cells (a small screwdriver for screw-down doors); a soldering iron, crimp tool or plug (e.g. a JST-PH lead, as on Adafruit holders) to wire the holder to the circuit; pliers to fit slide-in contacts into a printed case
- **seal**: none for ordinary holders; special waterproof holders with a sealed lid exist (Adafruit sells a 'Waterproof 2xAA Battery Holder'). Holders for zinc-air cells must not be airtight, because the cells need air (Wikipedia 'Battery holder').
- **load**: Electrical: up to about 3 A (cheap spring holders 'not more than a few amps', and some melt below 1 A, according to forum users; high-current packs use spot-welded strip or quality holders), extra-low voltage only (never part of a mains circuit). Mechanical: light; the cell is held by spring pressure and the cradle, and can be shaken loose by a hard knock, especially against a fixed contact (Wikipedia 'Battery holder'); the holder body is a light plastic moulding.
- **adjustable**: no; the spring contact takes up small differences in cell length automatically
- **play_and_precision**: Small: the cradle locates the cell loosely and the spring takes up end play; a fixed contact plus a spring can briefly lose contact if a knock moves the cell away from the fixed end, while multi-finger flexible contacts tolerate movement in several directions (Wikipedia 'Battery holder'). Not applicable as a precision locator.
- **access_needed**: one side only (blind): cells go in from the open top, lid or door
- **materials**: Bodies: polypropylene or nylon rated for 80-100 °C; coin-cell holders that are soldered to circuit boards are made of high-temperature PBT, nylon or LCP (Wikipedia 'Battery holder'); printed holders in PETG or ASA. Contacts: nickel-plated spring steel or steel wire, matching the nickel-plated cells so that the two metals don't corrode each other (galvanic corrosion) (Wikipedia 'Battery holder'); phosphor bronze and beryllium copper are also used for contact springs ⚑ [uncertain: not confirmed for battery contacts on an opened page]. Printed plastic springs are not suitable as contacts that stay pressed, because plastic creeps (Thrinter). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: buy a ready-made holder with leads; moderate to print your own case, because cell sizes vary and you must fit bought metal contacts and keep the cell from rattling

### Making it

- **processes**: 
  - off-the-shelf part (AA, AAA, C, D, 9 V, 18650 and coin-cell holders, separate spring and tab contacts, 9 V snaps)
  - 3D print (FDM): a printed case or compartment with slots for bought metal contacts
  - 3D print (resin): small, accurate coin-cell holders (the designer of Printables 914834 says it is best printed in resin)
- **print_in_place**: partly: the case prints in one piece, but it needs bought metal contacts (springs and tabs) and wires; print-in-place plastic spring designs exist (Printables 341489, 868708) but plastic springs relax under constant load, so metal springs are the reliable choice
- **making_tips_3d_printing**: Buy the metal contacts ('battery spring plate set', coin-cell clips or 18650 spring contacts) and design slots they slide into, as in the Parametric Spring Contacts Battery Box, whose designer fixes the contacts with a dab of hot glue (Printables 1327766). Don't rely on printed plastic springs for contacts that stay pressed: plastic creeps under a constant load and the contact force fades (Thrinter's creep tests; the existing 'Printed leaf spring' entry gives the same warning). Some designers do use a stiff PLA flexing arm instead of a spring and say it keeps contact 'even in vibrating environment' (Printables 868708), but treat this as experimental. Make the cell pocket a little larger than the nominal cell, because tolerances vary between printers: one designer found 0.3 mm difference between parts needed on a Prusa MINI and made the fit a parameter (Printables 868708); measure your actual cells and print a test pocket first. Add a recessed positive contact or a shaped key so cells can only go in the right way round (Wikipedia 'Battery holder'). Choose a heat-tolerant material: PLA starts to give at about 60 °C under load, PETG about 80 °C and ASA about 110 °C (CNC Kitchen), and a holder in a car or next to a charging lithium cell gets warm; the 18650 charger design Printables 341489 was planned to add a temperature sensor (NTC). Solder the wires to the contacts before fitting them, so the iron doesn't melt the print ⚑ [uncertain: general practice], and add strain relief for the leads. For coin cells in anything a child could use, make the lid screw-down (see safety notes). Leave air holes for zinc-air cells (Wikipedia 'Battery holder'). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'AA battery holder' (1 to 8 cells, with leads, switch, lid, JST plug or DC plug, as sold by maker suppliers such as Adafruit), 'battery spring contact' or 'battery spring plate', 'coil spring battery contact', 'leaf spring battery contact', 'dual battery contact' (series link), 'coin cell holder' or 'CR2032 holder' (through-hole or surface mount), '9V battery snap' or '9V battery clip', '9V battery holder', '18650 battery holder' (look for quality makers such as Keystone (brand), recommended by forum users for high current), 'battery tab' or 'solder tab cell' (cells with welded tabs for permanent fitting, Wikipedia 'Battery holder'), 'nickel strip' (for spot-welded packs, see Spot weld), 'reverse polarity protection' parts: 'Schottky diode' or 'P-channel MOSFET'.
- **rules_of_thumb**: 
  - Use nickel-plated contacts with nickel-plated cells to avoid galvanic corrosion, and prefer a spring at one end or multi-finger flexible contacts over two fixed contacts, which lose connection easily (Wikipedia, https://en.wikipedia.org/wiki/Battery_holder).
  - Cells in series add their voltages: three alkaline AA give about 4.5 V new and about 3.3 V near the end of life; three NiMH AA about 3.7 V falling to 2.7 V, and you can't recharge alkalines on a Li-ion charger (Adafruit, https://www.adafruit.com/product/3287). An alkaline cell is flat at about 0.9 V (Wikipedia, https://en.wikipedia.org/wiki/Alkaline_battery).
  - Don't mix cells of different types or states of charge in one holder, and remove cells from devices that are being stored: both reduce leakage (Wikipedia, https://en.wikipedia.org/wiki/Alkaline_battery).
  - Basic spring holders for 18650 cells are good for 'not more than a few amps'; one user 'melted down those holders at less than an amp'; for high current, reinforce the springs with copper braid or thicker wire, or use better holders or welded packs (forum, https://budgetlightforum.com/t/18650-holder-max-current/28271) ⚑ [uncertain: forum reports, not tests].
  - Reverse-polarity protection: a recessed positive contact or a keyed shape is free (Wikipedia, https://en.wikipedia.org/wiki/Battery_holder); a series diode protects the circuit but 'wastes power in the form of heat', while a P-channel MOSFET wastes about ten times less (Hackaday, https://hackaday.com/tag/p-fet/).
  - Zinc-air cells need about 1 litre of air per ampere-hour per cell, so their holder must not be airtight (Wikipedia, https://en.wikipedia.org/wiki/Battery_holder).
  - Holder bodies are usually polypropylene or nylon rated to 80-100 °C; holders soldered to boards use PBT, nylon or LCP for 180-300 °C soldering (Wikipedia, https://en.wikipedia.org/wiki/Battery_holder).
  - In the US, consumer products with button or coin cells must meet ANSI/UL 4200A (16 CFR part 1263, Reese's Law), which tests how hard the battery compartment is to open and how it survives drops, impact and crushing (eCFR, https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-16?part=1263; Foley, https://www.foley.com/insights/publications/2023/10/new-requirements-manufacturers-importers-batteries/). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - the battery compartment of a TV remote or torch, with a coiled spring on one side and a flat tab on the other
  - the press-stud snap on a 9 V battery in a smoke alarm (Wikipedia 'Nine-volt battery')
  - the coin cell in a clip on a computer motherboard, or the backup cell in a heating controller (Wikipedia 'Button cell')
  - a toy's battery door held shut by a small screw
- **when_to_use**: Whenever a project runs on replaceable cells (AA, AAA, C, D, 9 V, coin cells or loose 18650s) and the user should be able to change them without tools or soldering: toys, remotes, handheld gadgets, sensors, wearables, robot kits and test rigs. Use a coin-cell holder for tiny, low-current loads such as clocks, memory backup and LEDs; use spring holders for low to moderate currents; and choose holders with a switch, lid or DC plug to make the build simpler.
- **when_not_to_use**: For high currents (motors drawing tens of amps, e-bike and RC packs): spring contacts heat up and drop voltage, so use cells joined by spot-welded nickel strip with a battery management system (BMS) and a High-current battery plug instead (Wikipedia '18650 battery', 'Spot welding'). Where the battery should last the product's life: use a cell with welded solder tabs fixed to the board (Wikipedia 'Battery holder'). Where shocks would break contact: use flexible multi-finger contacts or a soldered or welded pack. For docking or charging contacts that touch without plugging in, see Pogo pin or Magnetic connector. Never solder directly onto a lithium-ion cell: the heat can damage it; tabs are spot-welded instead (Wikipedia 'Spot welding').
- **environment_limits**: Bought holders are rated for about 80-100 °C (Wikipedia 'Battery holder'); a PLA printed holder starts to give at about 60 °C (CNC Kitchen), which a parked car can reach. Lithium-ion cells must not be charged below 0 °C (lithium plating makes them unsafe) (Wikipedia 'Lithium-ion battery'). Alkaline cells leak caustic potassium hydroxide when flat or old, which corrodes contacts; storing dry at room temperature and removing cells from stored devices reduces this (Wikipedia 'Alkaline battery'). Vibration can open a fixed contact for a moment (Wikipedia 'Battery holder'). Printed plastic springs creep and lose force over time (Thrinter). Steel contacts rust in damp air unless plated ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: LITHIUM CELLS: shorting, crushing, puncturing, overheating or overcharging a lithium-ion cell can cause thermal runaway, fire, toxic smoke or explosion (Wikipedia 'Lithium-ion battery'); never let metal tools, wires or loose 9 V batteries bridge the terminals ('two loose batteries with terminals exposed can touch and short circuit', Wikipedia 'Nine-volt battery'); use protected cells or a BMS, and never leave a home-made holder charging unattended ⚑ [uncertain: general advice]. Don't put rechargeable and non-rechargeable cells in the wrong holders: fitting a disposable lithium coin cell in a holder meant for a rechargeable one is hazardous (Wikipedia 'Button cell'). BUTTON AND COIN CELLS: if swallowed by small children they can cause severe internal burns and death, especially cells 20 mm or more across such as the CR2032 (Wikipedia 'Button cell'); keep spares away from children, make compartments screw-down in anything a child might handle, and in the US such products must meet ANSI/UL 4200A under Reese's Law (16 CFR 1263). LEAKS: leaked alkaline electrolyte (potassium hydroxide) is caustic; wear gloves and eye protection when cleaning it (Wikipedia 'Battery leakage'). PRINTED SPRINGS: use metal contact springs, because printed plastic springs relax and contact becomes poor, which causes heating at the contact. ELECTRICAL: battery holders are for extra-low voltage only; never use one in a mains-powered circuit, and any mains wiring must follow local law (e.g. in England, Approved Document P covers electrical installation work in homes). *(⚑ parts need confirming)*
- **common_failures**: (1) Intermittent power because a fixed contact loses touch when the device is knocked: use a spring at one end or multi-finger contacts (Wikipedia 'Battery holder'). (2) Corroded contacts from leaked alkaline cells: remove cells for storage and don't mix old and new or different types (Wikipedia 'Alkaline battery'). (3) Galvanic corrosion between unlike metals: use nickel-plated contacts (Wikipedia 'Battery holder'). (4) Hot or melting holders and voltage drop at high current from thin springs and wires (forum reports, budgetlightforum). (5) A cell put in backwards damaging the circuit: add a recessed positive contact, a keyed shape, a diode or a P-MOSFET (Wikipedia; Hackaday). (6) Two cells shorted together, e.g. loose 9 V batteries touching in a drawer (Wikipedia 'Nine-volt battery'). (7) Printed holders: cells too tight or rattling, pockets that don't fit a given brand's cells, and printed contact springs that relax (Printables 868708; Thrinter). (8) Broken solder joints or leads at the holder from flexing: add strain relief. (9) Charging a non-rechargeable cell or holder pack by mistake (Adafruit warns not to plug an AA pack into a Li-ion charger).
- **related**: 
  - Spot weld (resistance spot welding): joins cells permanently into packs with nickel strip; used instead of a holder for high-current packs
  - High-current battery plug (bullet connector, polarised battery connector): connects a whole pack to a device
  - Wire-to-board plug connectors (pin header and crimp housing): e.g. the JST-PH plug on many holder leads
  - Pogo pin (spring-loaded contact pin): spring contact pressing on a flat pad, for docks and charging cradles
  - Magnetic connector (magnetic pogo connector): spring pins plus magnets for snap-on charging
  - Coil spring (compression, extension, torsion): the coiled battery contact is a small compression spring
  - Printed leaf spring (flat cantilever spring): explains why printed springs relax and shouldn't be used for contacts that stay pressed
  - Keying (one-way-only fit, poka-yoke): the shape trick behind recessed positive contacts and the 9 V snap
  - Soldered wire joint (soldered splice): how the holder's leads are usually joined to a circuit
  - Conductive thread (sewn circuit, e-textile stitching): sew-on coin-cell holders in wearables

### Pictures, videos and models

- **links**: 
  - [AAbatteryholder.jpg (Wikimedia Commons, by Tom Blaha)](https://commons.wikimedia.org/wiki/File:AAbatteryholder.jpg): AA cells in a multi-cell holder with spring and tab contacts *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [9 volt Battery Snap.jpg (Wikimedia Commons, by oomlout)](https://commons.wikimedia.org/wiki/File:9_volt_Battery_Snap.jpg): A 9 V battery snap connector with its leads *(licence: CC BY-SA 2.0 (reuse with credit))*
  - [Printed Battery Box Part 5.JPG (Wikimedia Commons, by Will King2013)](https://commons.wikimedia.org/wiki/File:Printed_Battery_Box_Part_5.JPG): A home-made 3D-printed battery box with all its parts fitted *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [LeakedBattery 2585a.jpg (Wikimedia Commons, by Túrelio)](https://commons.wikimedia.org/wiki/File:LeakedBattery_2585a.jpg): A leaked and corroded button cell, the kind of damage that ruins contacts *(licence: CC BY-SA 3.0 DE (reuse with credit))*
  - [Reverse Voltage Protection With A P-FET (Hackaday, 2011)](https://hackaday.com/tag/p-fet/): Schematic and video of protecting a circuit from a backwards battery with a P-channel MOSFET instead of a diode *(licence: link only)*
- **make_it_yourself**: 
  - [Parametric Spring Contacts Battery Box for AA Cells (Printables 1327766; URL from Printables API, page not opened)](https://www.printables.com/model/1327766-parametric-spring-contacts-battery-box-for-aa-cell): Printed AA battery box with slots for bought metal spring-and-plate battery contacts, fixed with a dab of hot glue *(licence: CC BY (Creative Commons Attribution))*
  - [Compact CR2032 Coin Cell Holder (Printables 914834; URL from Printables API, page not opened)](https://www.printables.com/model/914834-compact-cr2032-coin-cell-holder): Very compact printed CR2032 holder for tight spaces, e.g. replacing a wired clock-backup cell; best printed in resin or with a fine FDM nozzle *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Parametric battery holder (Printables 453102; URL from Printables API, page not opened)](https://www.printables.com/model/453102-parametric-battery-holder): FreeCAD spreadsheet-driven holder for AA, AAA and CR2032 cells *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [AA / AAA / C / 18650 battery holder with integrated spring (Printables 110321; URL from Printables API, page not opened)](https://www.printables.com/model/110321-aa-aaa-c-18650-battery-holder-with-integrated-spri): Printed holders with a built-in sliding plastic spring, printed in PETG; an example of the printed-spring approach, which can relax over time, so check contact pressure *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
- **diagram_idea**: A cut-away of a two-AA holder showing the coil spring pressing the flat negative end of one cell, the metal link strap to the next cell, the flat tab touching the positive button set behind a plastic recess (with a backwards cell shown failing to reach it), and the red and black leads out; with a small inset of a coin cell clamped between a springy top clip and a bottom pad.
- **sources**: 
  - https://en.wikipedia.org/wiki/Battery_holder
  - https://en.wikipedia.org/wiki/Battery_terminal
  - https://en.wikipedia.org/wiki/Nine-volt_battery
  - https://en.wikipedia.org/wiki/Button_cell
  - https://en.wikipedia.org/wiki/Lithium-ion_battery
  - https://en.wikipedia.org/wiki/18650_battery
  - https://en.wikipedia.org/wiki/Alkaline_battery
  - https://en.wikipedia.org/wiki/Battery_leakage
  - https://en.wikipedia.org/wiki/Spot_welding
  - https://www.adafruit.com/product/3287
  - https://www.adafruit.com/product/4193
  - https://budgetlightforum.com/t/18650-holder-max-current/28271
  - https://hackaday.com/tag/p-fet/
  - https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-16?part=1263
  - https://www.foley.com/insights/publications/2023/10/new-requirements-manufacturers-importers-batteries/
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://commons.wikimedia.org/wiki/File:AAbatteryholder.jpg
  - https://commons.wikimedia.org/wiki/File:9_volt_Battery_Snap.jpg
  - https://commons.wikimedia.org/wiki/File:Printed_Battery_Box_Part_5.JPG
  - https://commons.wikimedia.org/wiki/File:LeakedBattery_2585a.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 3 A
- **tools**: none, soldering iron, crimper, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, making_tips_3d_printing, materials, rules_of_thumb, safety_notes

## 330 Pogo pin (spring-loaded contact pin)

*electrical connections.* A tiny gold-plated plunger in a tube with a spring behind it, which presses onto a flat pad to make contact without plugging in, for charging docks, test and programming jigs, and parts that dock together

*Also covers:* Also covers target pads, bed-of-nails test jigs, leaf-spring contact fingers, elastomeric (zebra) strips and blind-mate connectors.

### What it is

- **plain_name**: A tiny gold-plated pin with a spring inside that pokes out of a tube, so when you press a part onto it the pin squashes down a little and touches a flat metal pad, making an electrical connection without plugging anything in
- **term**: Spring-loaded contact pin (pogo pin)
- **aliases**: 
  - pogo pin (widely used as a general name, but a registered trademark of Everett Charles Technologies; Wikipedia 'Pogo pin')
  - spring-loaded pin, spring-loaded contact or spring-loaded connector (Wikipedia; Mill-Max)
  - spring pin or spring probe (Tag-Connect; Same Sky)
  - target, land or target pad (the flat or cupped metal pad the pin presses on; Wikipedia; Mill-Max 'target pins' and 'target discs')
  - bed-of-nails tester or test fixture (a board of many pogo pins for testing circuit boards; Wikipedia 'In-circuit testing')
  - pogo tower (a very dense ring of hundreds of pins; Wikipedia)
  - programming jig, test jig or pogo jig (maker names for a holder full of pogo pins; Adafruit)
  - Tag-Connect (brand) 'Plug-of-Nails' programming cable (pogo pins that press onto a small pad pattern instead of a header)
  - leaf-spring contact, spring finger or SMT spring contact (a bent springy metal tab instead of a coil spring; Harwin)
  - elastomeric connector or zebra strip (Zebra (brand), a rubber strip with conductive stripes; Wikipedia 'Elastomeric connector')
  - blind-mate connector (a connector that mates when a whole module is pushed home, with self-aligning features; Wikipedia)
  - fuzz button (brand; a pad of springy gold-plated wire, mostly aerospace; Wikipedia)
  - Omniball (Mill-Max, brand): a ball-tipped spring pin made for sideways engagement
- **family**: electrical connections
- **other_families**: springs & energy storage, quick-release & tool-free
- **one_liner**: A spring-loaded plunger in a small tube that is pressed onto a flat metal pad to carry electricity between two parts that just touch, so devices can be docked, charged, tested or programmed without a plug.
- **complexity**: A few parts: the pin itself is a small assembly that acts as one unit (a plunger, a barrel or tube, and a coil spring, sometimes with a ball between plunger and spring; Wikipedia, Mill-Max), plus the target (a flat or cupped plated pad, a PCB pad or a bought target pin), plus a holder (a jig, dock or connector body) and something that presses the two sides together.
- **how_it_works**: The plunger slides in its tube with a coil spring behind it. When the other part is pressed against the tip, the plunger is pushed in and the spring pushes back, keeping a steady force, typically around 1 newton, on the pad so the contact doesn't break with small movements or vibration (Wikipedia 'Pogo pin'). Current flows through the gold-plated plunger and tube rather than the spring (Mill-Max FAQ; Wikipedia). Because the target is only a flat or cupped pad with no moving parts, one side of the joint can be just a patch of copper on a circuit board (Wikipedia; Mill-Max). The pin does not hold the parts together: a latch, clamp, magnets, gravity or a hand must hold them while the springs make contact. Related pressure contacts work the same way with a different spring: a bent metal tab (leaf-spring finger), a rubber strip with conductive stripes squeezed between two boards (zebra strip), or a ball of springy wire (fuzz button).

### Finder attributes

- **job**: join and hold: makes an electrical connection when two parts are pressed together, for docking, charging, testing or programming; something else has to hold the parts against the springs
- **motion**: none: the docked parts do not move relative to each other. Inside each pin the plunger slides in and out by its stroke (Mill-Max standard pins go up to about 3 mm) to take up gaps and uneven heights.
- **degrees_of_freedom**: 0: once docked and held, the two parts are fixed. Before docking the contact tolerates small sideways offsets because the tip only has to land somewhere on the pad (Mill-Max 'more offset tolerance'), but it is not a moving joint.
- **special_behaviour**: 
  - quick-release: no plugging in or pulling out, just set the part down or lift it away; there is only the spring force, no insertion or extraction force (Mill-Max)
  - self-aligning or self-centring: only for blind-mate connector versions, which have guiding features that accept a small misalignment while a whole module is slid home (Wikipedia 'Blind mate connector'); a plain pogo pin does not centre the parts, so the jig or dock must line them up
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the coil spring, leaf spring or squeezed rubber keeps the contact pressed on the pad. It only presses the contact; it pushes the parts apart, so another method (latch, clamp, magnets, gravity) must hold them together.
- **input_output**: not applicable
- **power**: passive (no power needed). The pins carry electricity, but nothing needs power to make or hold the contact.
- **removability**: tool-free quick release: lift the part off the pins. The pins themselves are soldered, pressed or glued into their holder, or fitted in socket holders so worn pins can be swapped, which Adafruit suggests for jigs that clumsy people will use for a long time (Adafruit jig guide). Same Sky lists press-fit, swaged, crimped, soldered and solderless mounting.
- **reuse_cycles**: effectively unlimited: Mill-Max pins are tested to between 100,000 and 1,000,000 cycles at mid-stroke (Mill-Max FAQ), and Tag-Connect's cycle tests 'easily last for well over 100,000 operations', with the cable usually failing first (Tag-Connect). Variants differ: Harwin leaf-spring contacts are rated up to 10,000 mating cycles, and a Fujipoly gold zebra strip was tested to 500 actuations.
- **tools_needed**: To build a jig or dock: a soldering iron and wire to connect the pins, a drill (or a printed or laser-cut holder) for the pin holes, and often a drop of glue or press-fit sockets to hold the pins. To use it: none.
- **seal**: none: pogo pins are not sealed or IP rated; as the plunger moves it opens a path for liquid and dirt into the tube (Mill-Max FAQ). For wet use the pins are fitted in their own sealed housing with gaskets or O-rings (Mill-Max FAQ). Zebra strips can form a gasket-like seal around the contacts (Wikipedia 'Elastomeric connector').
- **load**: Electrical: up to about 30 A, extra-low voltage only. Most single pins carry a few amps: Mill-Max data sheets list 6.5-9 A at 30 °C temperature rise for ordinary-size pins (5.2-7.2 A after 20% derating), and Mill-Max's highest-rated single pin is 13 A (10.4 A derated); small needle-head test pins carry less ⚑ [uncertain] (for cheap hobby pins, which often have no published rating). Contact resistance is about 20-30 milliohms per pin (Mill-Max data sheets). Zebra strips carry only about 250-500 mA per conductor (Fujipoly). The contacts are exposed when apart, so they are not for mains. Mechanical: light. Each pin pushes with roughly 1 N (about 60-90 g on Mill-Max data sheets), adding up to a push-apart force across many pins; the pin is strong only along its own axis and is damaged by sideways loads, which can bend or break the plunger (Mill-Max application notes). It gives no pull-out strength at all. *(⚑ parts need confirming)*
- **adjustable**: Yes, during design: the working height sets how far each pin is compressed. Raising the target with a target pin or disc, or changing a stand-off, increases compression without changing the pins (Mill-Max). After assembly, adjustment is limited to shimming the holder or swapping springs within compatible Mill-Max spring families (Mill-Max FAQ).
- **play_and_precision**: small: the tip lands on a pad rather than entering a socket, so it tolerates more sideways offset than a pin-and-socket plug (Mill-Max), but the pad must be big enough to catch every tip, so a jig needs locating features (stand-offs, registration posts or a pocket) to place the board; MacroFab made its printed pocket 0.5 mm larger than the board. Height tolerance is taken up by the stroke, ideally working near mid-stroke (Mill-Max). There is a slight gap between plunger and barrel, which is why plungers are often made to tilt slightly to keep contact (Wikipedia).
- **access_needed**: one side only (blind): the device is set onto the dock or pressed onto the pads from one side; the pads need no access from behind, and the board needs no connector at all (Tag-Connect: 'the PCB itself is the mating connector')
- **materials**: Plunger and barrel are usually brass or copper alloy with nickel under a gold plating; springs are copper alloy or spring steel, sometimes stainless (Wikipedia; Mill-Max data sheets). Targets are gold-plated pads or turned brass target pins and discs (Mill-Max). Pins can mate with any conductive surface, but gold-plated targets give the best results (Mill-Max FAQ). Leaf-spring contacts come in gold or tin finish (Harwin). Zebra strips are silicone rubber with carbon, silver or gold conductors (Wikipedia). Holders and jigs can be FR4 circuit board (Adafruit uses a spare 'victim' PCB), printed PETG or PLA (Printables jigs), resin or SLS prints for fine pitch (MacroFab), or laser-cut sheet (pogo-jig generator).
- **maker_difficulty**: easy: pins are cheap and fit drilled or printed holes; the fiddly parts are drilling or printing holes in exactly the right places and setting the height so the pins compress about halfway

### Making it

- **processes**: 
  - off-the-shelf part: the pins, receptacles and target pins are always bought
  - 3D print (FDM): jigs, clips and dock bodies that hold the pins and line up the board (Printables programming clips; MacroFab holder)
  - 3D print (resin): for fine pitches such as 1.27 mm (50 mil), where FDM holes are too small (MacroFab had its holder printed by a service for this reason)
  - laser cut: stacked plates with pin holes (the OpenSCAD pogo-jig generator can export DXF or SVG for laser cutting)
  - circuit board (PCB): a drilled spare or purpose-made board as the pin plate, with the pads on the target board as the other half (Adafruit; MacroFab)
- **print_in_place**: partly: the jig or dock body prints in one piece with holes and locating features, and bought pogo pins are pushed, glued or soldered in afterwards (or dropped in sockets).
- **making_tips_3d_printing**: 1) Hole size: printers usually make small holes undersized, so print a 1x2 or 2x2 test block first and adjust the hole diameter (pogo-jig OpenSCAD generator notes). One maker used 0.68 mm pins in printed holes cleaned out with a 0.7 mm drill and fixed with a drop of superglue (Printables 'Pogo-pin programming clip for Sonoff S31'); Adafruit's 1 mm-body pins fit standard 0.035 in (0.9 mm) drilled holes snugly and stand up straight (Adafruit jig guide and product page). Keep glue off the plunger end so it can't wick into the tube and stick it ⚑ [uncertain]. 2) Height: design the holder so the pins sit at about mid-stroke when the board is in place; MacroFab worked out 6.6 mm from the board to the fixture from an 8.5 mm pin with 1.4 mm stroke and a 0.5 mm round tip landing in a plated hole. Add a hard stop (stand-off or ledge) so the board can't over-compress the pins (Mill-Max). 3) Locating: make a pocket or registration posts that place the board; a pocket 0.5 mm bigger than the board allowed for routing tolerance (MacroFab). The holder should also guide the pins so they aren't side-loaded and don't jam (MacroFab; Mill-Max). 4) Pitch: pins at 2.54 mm (0.1 in) pitch are easy in FDM; 1.27 mm pitch holes were too small for an FDM printer (MacroFab). 5) Hold-down: add clips, 'little ears', a lid, a toggle clamp or magnets to keep the board pressed on the pins while testing (Adafruit 'Advanced Pogo Jigs'). 6) Material: printed jigs on Printables are commonly PETG at 0.15-0.2 mm layers (Sonoff S31 clip; 'Pogo Pin Adapter for flashing'). 7) Print the pin holes upright (along the print's Z axis) so they come out round and straight ⚑ [uncertain]. 8) Pick the head to suit the target: spear or pointed heads for holes and vias, cupped heads for pins and component legs, crown heads for leads and wires (Adafruit sells spear, cupped, crown and needle heads; head-to-target matching is general practice ⚑ [uncertain]); pins with a head larger than a plated hole won't poke through it (MacroFab). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'spring-loaded pin', 'spring-loaded contact', 'pogo pin' or 'test probe', in through-hole, surface-mount (SMT), solder-cup and press-fit styles, and in single rows or arrays ('spring-loaded connector', 'pogo pin header') (Same Sky; Mill-Max). Hobby test pins are sold by head shape: spear, cupped, crown and needle (Adafruit, e.g. 'Pogo Pins Needle Head P75-B1', 1.0 mm body, about 3 mm travel). Socket holders (receptacles) let pins be replaced (Adafruit jig guide). Targets: 'target pins', 'target discs' and 'target connectors' (Mill-Max). Side-load versions: ball-tipped pins such as Mill-Max Omniball (brand). Ready-made programming cables: Tag-Connect (brand) 'Plug-of-Nails' cables, which need only a pad footprint on the board. Solderless GPIO pins: Pimoroni 'Pogo-a-go-go' (brand; named in a Printables jig). Leaf-spring contacts: 'SMT spring contacts' or 'spring fingers' (Harwin). Zebra strips: 'elastomeric connectors' (Fujipoly ZEBRA (brand)). Magnetic pogo connectors are covered in the separate entry 'Magnetic connector'.
- **rules_of_thumb**: 
  - Design for mid-stroke: aim for about 50% of the maximum stroke when docked. Less compression can reduce electrical performance; working near full compression shortens cycle life. All ratings are given at mid-stroke (Mill-Max 'Spring-Loaded General Applications').
  - Push only along the pin's axis. Sideways loading can bend or break the plunger or body; use a ball-tipped side-load pin if parts slide on (Mill-Max application notes).
  - Add stand-offs or a hard stop so the pins can't be over-compressed (Mill-Max application notes).
  - If a finished design has too little compression, raise the target with a target disc or target pin instead of buying longer pins: in Mill-Max's example a 0.025 in target raised compression from 0.010 in to 0.035 in, past the 0.0275 in mid-stroke (Mill-Max application notes).
  - Contact force is typically about 1 N per pin (Wikipedia 'Pogo pin'); Mill-Max data sheets list 60-90 g of spring force with 1.4 mm (0.055 in) maximum stroke for typical pins.
  - Cycle life: spring-loaded pins are rated 100,000 to 1,000,000 cycles, while ordinary plug-and-socket connectors are typically rated for hundreds or a few thousand (Mill-Max).
  - Mill-Max pins are tested to 50 g shock and 10 g vibration at mid-stroke with no contact break longer than 1 microsecond (Mill-Max application notes); with too little compression, the small gap between plunger and barrel can cause momentary disconnections under vibration (Wikipedia).
  - Zebra (elastomeric) strips: squeeze them by 10-15% of their height (8-20% acceptable), make the strip about twice as tall as it is wide, and expect about 4 lb per inch of strip at 15% (Fujipoly ZEBRA Gold 8000 data sheet); hold them in a recess with a deflection stop and alignment pins (Wikipedia).
  - Leaf-spring (SMT spring) contacts tolerate wiping and sliding and are rated up to 10,000 mating cycles (Harwin, via DigiKey product page).

### When to use it

- **everyday_examples**: 
  - The charging contacts on smartwatches and rugged devices, which use spring-loaded pins because they can be sealed (Wikipedia 'Pogo pin', applications)
  - Laptop battery terminals and the keyboard docks of 2-in-1 tablet PCs, where spring pins (often with magnets) connect the parts (Wikipedia 'Pogo pin')
  - The stripy rubber strip that connects the display of a pocket calculator to its circuit board (an elastomeric 'zebra' connector; Wikipedia 'Elastomeric connector')
  - Factory test and programming fixtures for circuit boards in appliances such as coffee machines and garage-door openers (bed-of-nails testers; Tag-Connect footprints; Wikipedia 'In-circuit testing')
- **when_to_use**: Use pogo pins when parts must connect and disconnect often without wear on a plug: charging docks and cradles, robot docking stations and tool changers, battery packs that slide or drop in, modules that click or clip together, and anything that has to survive many thousands of matings. They are also the standard way to test or program circuit boards in batches: a printed or PCB jig full of pins presses onto test pads, so the board needs no connector at all (Adafruit; Tag-Connect; Wikipedia 'In-circuit testing'). They suit blind mating, where you can't see the connector, and stacks with loose height tolerances, because the stroke takes up the gap (Mill-Max). Use a zebra strip to connect a small display to a board, and leaf-spring fingers where space is very tight or where a part wipes or slides into place (Wikipedia; Harwin).
- **when_not_to_use**: Don't use them where nothing holds the parts together; on their own pins push the parts apart. Don't use them for mains voltage or anywhere the live contacts could be touched; use a certified plug and socket (see 'Standard plug-and-socket connector'). Avoid them where the parts slide sideways onto the pins, which bends plungers (use a ball-tipped side-load pin, a leaf-spring contact or a blind-mate connector with guides instead; Mill-Max; Harwin). For a connection that stays made for years with no need to separate, a soldered or crimped joint or a latching wire-to-board plug is simpler and cheaper. For a magnetic, self-aligning or breakaway cable use 'Magnetic connector'. For a contact that keeps turning, use a 'Slip ring'. For a single battery, use spring battery contacts (see 'Battery holder and battery contacts').
- **environment_limits**: Mill-Max pins are rated for -55 to +125 °C (data sheet 0981). Zebra strips are rated -20 to +125 °C and passed salt-spray, humidity and sulphide gas tests with gold contacts (Fujipoly). Pogo pins are not sealed: liquid and dirt can get in as the plunger moves (Mill-Max FAQ); mild soap and deionised water have been used for washing, but cleaners that leave a residue can stop the plunger moving (Mill-Max FAQ). Gold plating resists corrosion; the springs can weaken with age and use, as reported for early MagSafe plugs ('pin springs losing elasticity'; Wikipedia 'MagSafe'). A printed jig softens with heat: PLA gives at about 60 °C, PETG at 80 °C and ASA at 110 °C (CNC Kitchen), so keep soldering heat and hot sun away from PLA holders.
- **safety_notes**: Keep to extra-low voltage, which UK Approved Document P defines as not more than 50 V AC or 120 V ripple-free DC; the contacts are bare when apart, so pogo pins must never carry mains, and any mains work must follow local law. A charging dock whose contacts are live whenever it is switched on can be shorted by a coin, key or tool lying across it; fit a fuse or current limit, or switch power on only when a device is detected, as Apple's MagSafe charger did by giving a low voltage until it saw a load (Wikipedia 'MagSafe') ⚑ [uncertain] (as general advice). Lithium batteries shorted through exposed contacts can overheat ⚑ [uncertain]. Soldering wires to pins needs the usual care with hot irons. *(⚑ parts need confirming)*
- **common_failures**: 1) Intermittent contact because the pins are barely compressed: design for mid-stroke, or raise the target with a target pin or disc (Mill-Max). 2) Bent or jammed plungers from sideways loads or from parts sliding across the tips: guide the board straight down and support the pins in the holder (Mill-Max; MacroFab). 3) Pins crushed or worn early by over-compression: add a hard stop (Mill-Max). 4) Sticky plunger from dirt, flux, cleaning residue or glue that has wicked into the tube: keep pins clean and glue only at the base (Mill-Max FAQ on residues; glue point ⚑ [uncertain]). 5) Pins that miss their pads because the board isn't located: add a pocket, posts or stand-offs as registration (Adafruit; MacroFab). 6) Pins or tips that poke through plated holes: choose a head larger than the hole, or a cupped or crown head (MacroFab). 7) Weak springs after long use; MagSafe owners reported pin springs losing elasticity (Wikipedia 'MagSafe'). 8) Pins too short or too long for the stack-up: check the fit before committing (Adafruit). 9) A heavy bed-of-nails puts a lot of strain on the board under test (Wikipedia 'In-circuit testing'). *(⚑ parts need confirming)*
- **related**: 
  - Magnetic connector (magnetic pogo connector): the same pins plus magnets that pull the halves together, line them up and break away safely
  - Battery holder and battery contacts: coiled and leaf springs that press on battery ends; the same pressure-contact idea for cells
  - Slip ring: sliding brushes carry current across a joint that keeps turning; pogo pins only touch a still pad
  - Ball detent and spring plunger: the same plunger-in-a-tube shape, but used to click and hold mechanically, not to carry current
  - Wire-to-board plug connectors (pin header and crimp housing): pin-and-socket plugs that latch and hold, but wear out after far fewer matings
  - Standard plug-and-socket connector (USB, barrel jack): a certified, ready-made plug; better when users plug and unplug by hand and safety rules apply
  - Coil spring and printed leaf spring: the spring itself; don't use a printed plastic spring as a contact that stays pressed
  - Genderless connector: identical halves that mate either way; some docking systems combine it with pogo pins ⚑ [uncertain]
  - Flat flexible cable with ZIF connector: another way to connect displays and moving boards, where zebra strips are not used *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Federkontaktstift (spring contact pin) cross-section (Wikimedia Commons, by Biezl)](https://commons.wikimedia.org/wiki/File:Federkontaktstift.svg): Cut-away drawing of a pogo pin showing plunger, barrel and spring; used on Wikipedia's 'Pogo pin' article *(licence: CC BY 3.0)*
  - [Pogo Types (Wikimedia Commons, by C.C.P. Contact Probes Co. Ltd.)](https://commons.wikimedia.org/wiki/File:Pogo_Types.png): Diagram of the structure of different pogo pin designs (manufacturer image) *(licence: CC BY-SA 4.0)*
  - [Forwessun Test Fixture Pins (Wikimedia Commons, by Test wiz)](https://commons.wikimedia.org/wiki/File:Forwessun_Test_Fixture_Pins.webp): Close-up of the spring probes on an in-circuit (bed-of-nails) test fixture *(licence: CC BY-SA 4.0)*
  - [Zebra connector (Wikimedia Commons, by Caltrop)](https://commons.wikimedia.org/wiki/File:Zebra_connector.jpg): An elastomeric (zebra) strip used to connect an LCD to a circuit board: pink insulating rubber with black conductive stripes 180 microns apart *(licence: CC BY-SA 3.0 / GFDL 1.2+)*
  - [Pogo Pins - Collin's Lab Notes (YouTube, Adafruit Industries)](https://www.youtube.com/watch?v=NGZ_vd6qmeQ): Short explainer video on pogo pins, linked from Adafruit's pogo-pin jig guide; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [How to Make a Pogo Pin Test Jig (Adafruit Learning System)](https://learn.adafruit.com/how-to-make-a-pogo-pin-test-jig): Illustrated step-by-step guide: drill a spare 'victim' PCB as a pin plate, use stand-offs as registration posts, solder the pins to an Arduino shield and press the board on to test it; also shows a hold-down jig and the different head types *(licence: link only)*
  - [pogo-jig: OpenSCAD pogo pin jig generator (Brian Harrington; repository https://github.com/brianredbeard/pogo-jig appeared in search results, README read via raw.githubusercontent.com)](https://raw.githubusercontent.com/brianredbeard/pogo-jig/master/README.md): Parametric OpenSCAD file that makes a pin block from rows, columns, pitch and pin diameter, exporting STL for printing or DXF/SVG for laser-cut stacked plates; notes that printed holes come out undersized, so test a small block first *(licence: AGPL-3.0)*
  - [Pogo-pin programming clip for Sonoff S31 modules (Tom C, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/11389-pogo-pin-programming-clip-for-sonoff-s31-modules): Printed PETG clip holding 0.68 mm x 16 mm pogo pins (holes cleaned with a 0.7 mm drill, pins fixed with superglue) to reprogram a smart plug without soldering. Details read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Pogo Pin Adapter for flashing, programming (Lukas_Kvapil, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/564334-pogo-pin-adapter-for-flashing-programming): Simple printed pogo-pin programming adapter, printed in PETG at 0.15 mm layers, assembled with M2.5 screws. Details read through the Printables public API. *(licence: GPL-2.0)*
  - [reMarkable 2 Pogo Pin Jig (pixelifytica, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1238779-remarkable-2-pogo-pin-jig): A guide block that holds five solderless pogo pins against the service pads on a tablet so they stay in contact; FreeCAD source included so hole sizes can be changed. Details read through the Printables public API. *(licence: CC0 (Creative Commons Public Domain))*
- **diagram_idea**: Side-view cut-away in three frames: (1) a pogo pin in a printed holder above a circuit board, showing plunger, tube and spring, with the target pad on the board; (2) the board pressed down so the plunger is pushed in about halfway (labelled 'mid-stroke'), with a hard-stop ledge touching the board; (3) a 'wrong' inset of a plunger bent by a board sliding in sideways, plus a small zebra-strip inset showing a striped rubber strip squeezed between a display and a board.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pogo_pin
  - https://en.wikipedia.org/wiki/Elastomeric_connector
  - https://en.wikipedia.org/wiki/Fuzz_button
  - https://en.wikipedia.org/wiki/Blind_mate_connector
  - https://en.wikipedia.org/wiki/In-circuit_testing
  - https://en.wikipedia.org/wiki/MagSafe
  - https://www.mill-max.com/engineering-notebooks/spring-loaded-pogo-pins-connectors/faqs
  - https://www.mill-max.com/engineering-notebooks/general-application-notes
  - https://mill-max.com/products/new/maxneticr-spring-loaded-connectors
  - https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7171/0981-0-15-20-87-14-11-0.pdf
  - https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7171/2074-0-15-20-75-14-11-0.pdf
  - https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7172/2985-0-15-20-71-14-11-0.pdf
  - https://www.sameskydevices.com/blog/pogo-pins-101
  - https://www.tag-connect.com/info
  - https://www.adafruit.com/product/2430
  - https://learn.adafruit.com/how-to-make-a-pogo-pin-test-jig
  - https://learn.adafruit.com/how-to-make-a-pogo-pin-test-jig?view=all
  - https://www.macrofab.com/blog/design-build-simple-programming-fixture
  - https://raw.githubusercontent.com/brianredbeard/pogo-jig/master/README.md
  - https://raw.githubusercontent.com/brianredbeard/pogo-jig/master/pogo_pin_jig.scad
  - https://raw.githubusercontent.com/brianredbeard/pogo-jig/master/LICENSE
  - https://www.nucletron.de/files/zebra_gold_connectors.pdf
  - https://www.digikey.at/en/product-highlight/h/harwin/ez-spring-contacts
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Federkontaktstift.svg
  - https://commons.wikimedia.org/wiki/File:Pogo_Types.png
  - https://commons.wikimedia.org/wiki/File:Pogo_Pin_Connectors.jpg
  - https://commons.wikimedia.org/wiki/File:Forwessun_Test_Fixture_Pins.webp
  - https://commons.wikimedia.org/wiki/File:Zebra_connector.jpg
  - https://www.youtube.com/watch?v=NGZ_vd6qmeQ
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: soldering iron, drill and tap
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, load, making_tips_3d_printing, related, safety_notes

## 331 Magnetic connector (magnetic pogo connector, magnetic breakaway power connector)

*electrical connections.* Spring-loaded contact pins and flat pads with magnets either side that pull the two halves together, line them up and let go safely if the cable is yanked

*Also covers:* Also covers magnets placed so a wrongly turned plug repels, and DIY magnetic connectors for modular robots and wearables. MagSafe (brand) as an alias. Safety: small strong magnets can be swallowed.

### What it is

- **plain_name**: A plug and socket that snap together by themselves with magnets, where little springy pins press on flat metal pads to carry power or signals, and that simply pop apart instead of breaking if someone trips over the cable
- **term**: Magnetic connector (magnetic pogo connector, magnetic breakaway power connector)
- **aliases**: 
  - magnetic pogo connector or magnetic pogo pin connector (maker and seller names; Adafruit, Printables)
  - magnetic breakaway connector or break-away power cord (CPSC, for deep fryers)
  - magnetically attached power connector (Wikipedia 'MagSafe')
  - MagSafe (Apple, brand) for its magnetic laptop power plugs; Apple also uses the name for an unrelated iPhone wireless-charging ring (Wikipedia; Hackaday)
  - Maxnetic (Mill-Max, brand) magnetic spring-loaded connectors
  - DIY magnetic connector (Adafruit product name)
  - magnetic electrical connector or quick-disconnect terminal (Printables; Hackaday)
  - littleBits (brand) modules, which snap together with small magnets (Wikipedia 'LittleBits')
- **family**: electrical connections
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: Two connector halves with magnets that pull them together and line them up, so spring-loaded pins on one half press onto flat pads on the other to carry power or data, and the halves separate cleanly when pulled too hard.
- **complexity**: A small assembly that acts as one unit on each side: one half has spring-loaded (pogo) pins, the other has flat or cupped target pads or pins, and each half has one or more permanent magnets (or a magnet facing a steel plate) in a shaped housing that guides the halves together (Mill-Max; Adafruit; Wikipedia 'MagSafe'). Plus the cable and its strain relief.
- **how_it_works**: Magnets in the two halves attract and pull the faces together, often from several millimetres away, while shaped housings and the magnets themselves slide the halves into line (Mill-Max: alignment from up to 12.7 mm apart). The magnet pull squashes the spring-loaded pins onto their pads, so the springs keep a steady contact force without any latch (see 'Pogo pin'). If the cable is pulled harder than the magnets can hold, especially sideways, the halves simply come apart instead of tearing the socket or dragging the device off the table (Wikipedia 'MagSafe'; CPSC). Placing the magnets with opposite poles facing out, for example one north and one south in each half, makes the plug fit only one way: turned round, it is pushed away (Adafruit; Hackaday).

### Finder attributes

- **job**: 
  - join and hold: makes and holds an electrical connection by magnetic pull, with no latch to work
  - slip or let go when overloaded: pops apart safely when the cable is yanked (breakaway)
  - line parts up exactly: the magnets and housing pull the contacts into line as the halves meet
- **motion**: none: once mated the halves don't move. The pins inside slide a short stroke (Mill-Max Maxnetic pins have 2.3 mm maximum stroke) to take up the gap.
- **degrees_of_freedom**: 0: once mated the two halves are held fixed against each other by the magnets; they can be pulled apart in any direction, which is the breakaway action
- **special_behaviour**: 
  - quick-release: no aligning, plugging or latching; the halves are pulled together and held by magnets, and are pulled apart by hand (Mill-Max 'zero force mating')
  - fail-safe or breakaway: lets go without damage if the cable is tugged, so the laptop or appliance isn't pulled over (Wikipedia 'MagSafe'); required in principle for US household deep fryers, whose short detachable cords are meant to come away if pulled (UL 1083 via ULSE; CPSC)
  - self-aligning or self-centring: the magnets and shaped housings pull the contacts into line (Mill-Max 'self-alignment, self-location'); with polarised magnets a wrongly turned plug is pushed away instead of connecting (Adafruit; Mill-Max)
- **holding_principle**: 
  - magnetic: permanent (usually neodymium) magnets hold the halves together (Mill-Max)
  - spring force (a spring or springy part presses it in place): the pogo pins' springs keep each contact pressed on its pad
- **input_output**: not applicable
- **power**: passive (no power needed): permanent magnets hold the halves without power. The connector carries power, but losing power changes nothing about how it holds. (A switchable version using an electro-permanent magnet is a separate entry.)
- **removability**: tool-free quick release: pull the halves apart by hand; they also come apart on their own if pulled hard enough
- **reuse_cycles**: effectively unlimited: Mill-Max Maxnetic pins have a cycle life of up to 1,000,000 cycles (Mill-Max). In practice the cable often fails first: early MagSafe cables had complaints of the plug separating from the cord, frayed wires and pin springs losing elasticity (Wikipedia 'MagSafe').
- **tools_needed**: None to connect or disconnect. To build one: a soldering iron for the pins or wires, glue (epoxy or superglue) or press-fit pockets for the magnets, and screws if the housing is screwed together (Printables designs).
- **seal**: none: ready-made hobby magnetic pogo connectors are not sealed, and the magnets corrode in damp conditions unless protected (K&J Magnetics). The pins can be put in a gasketed housing, as for ordinary pogo pins (Mill-Max FAQ).
- **load**: Electrical: up to about 30 A, extra-low voltage only. Mill-Max Maxnetic connectors are rated 7.2 A per pin at 4 mm pitch and 5.2 A per pin at 2.54 mm pitch (derated, single pin in free air); MagSafe 3 delivers up to 140 W (Wikipedia). Cheap hobby connectors are sold at a few amps (one Printables designer uses a 2 A-rated 3-pin connector) ⚑ [uncertain] (many have no published rating). Not for mains. Mechanical: light, on purpose. Mill-Max quotes 1.4 lb (636 g) average separation force (1 lb minimum) for its 4 mm series, and from 0.57 lb (259 g) to 1.6 lb (726 g) for its 2.54 mm series. Magnets resist a sideways (shear) pull with only about half their straight-pull force (K&J Magnetics), so a sideways yank releases the plug more easily than a straight pull. *(⚑ parts need confirming)*
- **adjustable**: no: the holding force is set by the magnets chosen and the gap between them; to change it, swap magnets or change the housing
- **play_and_precision**: small: the magnets and housing pull the pins onto their pads every time, and the pads only need to catch the pin tips (Mill-Max 'self-location'). It tolerates large misalignment while mating (Mill-Max: pulls into alignment from up to 12.7 mm apart), but small rocking of the plug can break contact on cheap designs ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: one side only (blind): the plug is offered up to the socket face and the magnets do the rest; useful for blind mating (Mill-Max)
- **materials**: Contacts: gold-plated spring-loaded pins and gold-plated target pins or pads (Mill-Max). Magnets: neodymium (NdFeB) on both halves in Mill-Max connectors; MagSafe 1 used a steel shroud on the plug as the 'ferrous attractor' for the magnet in the laptop (Wikipedia). Neodymium magnets are usually nickel-copper-nickel plated, brittle, and not waterproof (K&J Magnetics). DIY housings are printed in PETG, PLA, TPU or resin (Printables designs).
- **maker_difficulty**: easy: ready-made magnetic pogo pairs just need soldering and a housing; building your own from separate magnets and pins is moderate, mainly because the magnet poles must be put in the right way round and the pins set to the right height

### Making it

- **processes**: 
  - off-the-shelf part: ready-made magnetic pogo connector pairs (Adafruit, Mill-Max) and the magnets and pins for DIY versions
  - 3D print (FDM): housings, cable boots and mounts for bought connectors, or DIY shells holding disc magnets (Printables designs in PETG, PLA and TPU)
  - 3D print (resin): small, detailed housings; one designer found them too fine for FDM and used flexible resin for the outer shell (Printables 'Magnetic Pogo Pin Connector Housings')
  - woodwork: mounts let into furniture with a Forstner bit or router so a light module connects when slid in place (Printables '2 Pin Magnetic Pogo pin connector mount')
- **print_in_place**: partly: the housing prints in one piece (one Printables mount even has a print-in-place sliding holder), but the magnets and pins are bought and pressed, glued or screwed in.
- **making_tips_3d_printing**: 1) Magnet polarity: in each housing put one magnet north-out and one south-out, and the opposite in the mating half, so the halves line themselves up and can't be joined the wrong way (Hackaday 'Print Your Own Magnetic Connector'; the designer of Printables 'Magnetic electrical connector' says this prevents short circuits). Mark each magnet's pole before fitting, because you can't see or feel which pole is which ⚑ [uncertain]. 2) Fixing magnets: press-fit pockets, glue or a sealed pocket; see 'Magnet joint' and 'Mid-print embedding' for the methods. 3) Soldering to magnets: some DIY designs solder the wires straight onto plated magnets so the magnets carry the current, but heating magnets weakens them; one maker accepted a weaker magnet, and Hackaday suggests soldering to a thin washer glued to the magnet, or using separate contacts and keeping the magnets only for holding (Hackaday 2018 and 2024). Neodymium magnets are typically rated to about 80 °C (K&J Magnetics). 4) Pins for current, magnets for holding: commercial designs use spring-loaded pins for the contacts and separate magnets that only hold and align (Mill-Max; ICBlocks guide), and Hackaday suggests using magnets for alignment with a separate arrangement for the contacts. 5) Strain relief: a flexible TPU boot or outer shell stops the cable breaking where it leaves the plug (Printables 'Magnetic electrical connector' used TPU95 reinforcement; 'Magnetic Pogo Pin Connector Housings' used a flexible-resin outer shell); poor strain relief was the main MagSafe complaint (Wikipedia). 6) Fit: housings for bought connectors need tight, calibrated tolerances; one designer recommends 0.1-0.2 mm layers, 3-4 walls and no supports (Printables 'Housing for 3-Pin Magnetic Pogo Connector'). 7) Recess the pins: a mount that lets the pin side drop back when unmated protects the plungers (Printables '2 Pin Magnetic Pogo pin connector mount' uses a print-in-place slide with 2 mm travel each way). 8) Heat: PLA gives at about 60 °C, PETG at 80 °C and ASA at 110 °C (CNC Kitchen), so a PLA housing near a hot charger or in a car can let magnets loosen. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Ready-made pairs: 'magnetic pogo connector', 'magnetic spring-loaded connector' or 'DIY magnetic connector', in right-angle or straight PCB-mount versions with 2 to 10 contacts (Adafruit's range includes 3 contacts at 2.54 mm (0.1 in) pitch and up to 9 contacts at 2.2 mm pitch, which Adafruit notes is too small for breadboards; Mill-Max Maxnetic (brand) 872/873 single-row and 874/875 double-row series at 2.54 mm pitch, plus a 4 mm-pitch series with solder-cup cable halves). DIY parts: neodymium disc magnets (Printables designs use 6 x 2 mm and 5 x 1 mm discs), spring-loaded pin headers and matching target headers (one Printables design uses Mill-Max 854- and 858-series headers), and flexible cable. For holding-only magnets, see 'Magnet joint'.
- **rules_of_thumb**: 
  - Use opposite poles in each half (one N-out, one S-out, mirrored in the mate) so a wrongly turned plug repels; Adafruit and Mill-Max build their connectors this way to prevent short circuits (Hackaday 2024; Adafruit product 5360; Mill-Max).
  - Let the spring-loaded pins carry the current and keep the magnets for holding and alignment, as Mill-Max Maxnetic connectors and ICBlocks robot ports do ('two strong magnets for attachment but not for signal transmission'); Hackaday suggests the same for DIY designs instead of soldering wires to magnets (Mill-Max; ICreateRobot ICBlocks guide; Hackaday 2024).
  - Expect about 1-1.6 lb (0.45-0.73 kg) of separation force from a commercial 2-6 pin connector: Mill-Max quotes 1.4 lb average (1 lb minimum) for the 4 mm series and 0.57-1.6 lb for the 2.54 mm series.
  - A sideways pull separates magnets at roughly half the straight-pull force (K&J Magnetics shear tests), which helps a cable break away when tripped over.
  - Keep magnets below about 80 °C, the usual rating for standard neodymium grades (K&J Magnetics), so take care soldering near them.
  - Spring-loaded pins in Mill-Max magnetic connectors have 2.3 mm (0.090 in) maximum stroke, 20 milliohms contact resistance and up to 1,000,000 cycles (Mill-Max).
  - MagSafe 1 kept the plug at a low voltage (about 6.86 V) until it detected the laptop's load, then switched to full voltage (Wikipedia 'MagSafe'); a mirror-image pin layout let the plug fit either way up (Wikipedia).
  - US household deep fryers must have a short (2-3 ft) detachable cord that comes away if pulled, so the fryer doesn't tip; these cords are held on by a magnet (UL 1083 via ULSE; CPSC 2001).

### When to use it

- **everyday_examples**: 
  - Apple MagSafe laptop chargers, which pop off when someone trips over the cable (Wikipedia 'MagSafe')
  - The magnetic break-away power cord on an electric deep fryer (CPSC; ULSE)
  - littleBits electronic building blocks, which snap together with small magnets (Wikipedia 'LittleBits')
  - Educational robot building blocks that connect through magnetic ports with four spring probes and two magnets (ICreateRobot ICBlocks documentation)
- **when_to_use**: Use a magnetic connector where a cable might be yanked or tripped over and you'd rather it let go than damage the socket or pull the device off a table: chargers, lamps, wearable or handheld gadgets, and appliances (Wikipedia 'MagSafe'; CPSC). It also suits modules that are clicked together and pulled apart often, such as robot or educational building blocks and removable furniture lighting (littleBits; ICBlocks; Printables mount), connections made one-handed or without looking (blind mating), and places where users struggle to line up a small plug (Mill-Max). Polarised versions stop a plug being joined the wrong way round.
- **when_not_to_use**: Don't use one where the connection must not come apart under vibration, shock or a heavy cable, or where an accidental disconnect would be dangerous; use a latching plug or a screwed terminal instead. Don't use it for mains voltage, or anywhere the exposed live pins could be touched or shorted; use a certified plug and socket (see 'Standard plug-and-socket connector'). Avoid it near steel swarf, filings, staples or other magnetic debris, which the magnets collect (patent US9196979). Keep it away from small children and from people with pacemakers or implanted defibrillators. For a connection that only holds, with no current, see 'Magnet joint'; for one that is switched on and off electrically, see 'Electro-permanent magnet'; for docking without magnets, see 'Pogo pin'.
- **environment_limits**: Heat: standard neodymium magnets are usually rated to about 80 °C and lose strength permanently if overheated (K&J Magnetics); printed housings soften first, PLA at about 60 °C and PETG at 80 °C (CNC Kitchen). Water: neodymium magnets corrode in moist conditions and lose strength unless sealed or coated (K&J Magnetics); pogo pins are not sealed (Mill-Max FAQ). Dirt: the magnets attract clips, staples and other steel bits onto the contacts, which can obstruct the pins or short the plug and socket (patent US9196979); grime builds up on the probes and contact points and causes signal errors, so they need periodic cleaning with a stiff brush and electronics cleaner (ICreateRobot ICBlocks maintenance guide). Ageing: pin springs can lose elasticity with long use (Wikipedia 'MagSafe'), while the magnets themselves keep their strength if not overheated.
- **safety_notes**: Small strong magnets can be swallowed: if two or more (or a magnet and a piece of steel) are swallowed they can pull together through the intestine walls and need emergency surgery (K&J Magnetics; US CPSC proposed magnet standard, Federal Register 10 January 2022). Glue and enclose magnets so they can't come out, and keep loose magnets away from children. Magnets can pinch fingers, and can chip or shatter if they snap together, so wear eye protection; they can affect pacemakers and implanted defibrillators; don't drill or grind them, as the dust is flammable (K&J Magnetics). Keep to extra-low voltage (UK Approved Document P: not more than 50 V AC or 120 V ripple-free DC); the contacts are bare when apart, so never use a DIY magnetic connector for mains, and mains work must follow local law. A live socket can be shorted by steel debris pulled onto it (patent US9196979); fit a fuse or current limit ⚑ [uncertain] (as general advice). Fake MagSafe chargers sold online were sometimes unsafe (Wikipedia). *(⚑ parts need confirming)*
- **common_failures**: 1) Cable breaks or pulls out of the plug, the commonest MagSafe complaint, with frayed wires and overheating reported: add a flexible boot and strain relief (Wikipedia 'MagSafe'; TPU boot on Printables designs). 2) The plug tip breaks off (Commons photo 'Magsafe tipoff 2'). 3) Intermittent power or data from dirty contacts or debris on the face: keep it clean and brush the pins (ICBlocks guide; patent US9196979). 4) Weak pin springs (Wikipedia 'MagSafe'). 5) A DIY plug that fits the wrong way round and shorts: use opposite poles in each half (Hackaday; Printables 'Magnetic electrical connector'). 6) Magnets weakened by soldering heat (Hackaday 2018) or knocked loose in a soft or hot housing: fix them well and keep them cool (K&J; CNC Kitchen). 7) Too weak to stay connected under the cable's weight, or too strong to break away: choose magnets for the cable and test the pull-off force ⚑ [uncertain]. 8) Chipped or cracked magnets from snapping together (K&J Magnetics). *(⚑ parts need confirming)*
- **related**: 
  - Pogo pin (spring-loaded contact pin): the same pins without magnets; something else must hold the parts together
  - Magnet joint (embedded magnets, magnetic catch): magnets used only to hold or close; no current
  - Electro-permanent magnet: a magnet that is switched on or off by a pulse of current, for docking that releases on command
  - Magnetic-assisted buckle: magnets line up and pull the halves together while a mechanical catch carries the load
  - Genderless connector: identical halves that mate either way, without magnets
  - Standard plug-and-socket connector (USB, barrel jack): a certified plug that holds by friction or a latch and doesn't break away
  - Wire-to-board plug connectors: latching plugs for permanent internal wiring
  - Cable gland and strain relief: needed where the cable leaves the plug, the usual weak point

### Pictures, videos and models

- **links**: 
  - [MagSafe Connector for Late 2008 MacBook (Wikimedia Commons, by Shannon Savage)](https://commons.wikimedia.org/wiki/File:MagSafe1.jpg): Photo of an Apple MagSafe 1 magnetic power plug, showing the five contacts and the steel shroud *(licence: public domain)*
  - [MagSafe pinout (Wikimedia Commons, by Max Naylor)](https://commons.wikimedia.org/wiki/File:MagSafe-Pinout.svg): Diagram of the MagSafe plug face: mirrored power and ground pins, centre signal pin, and the area that acts as the magnet attractor *(licence: GFDL 1.2+ / CC BY-SA 3.0, 2.5, 2.0, 1.0)*
  - [MagSafe L-type adaptor that lost its tip (Wikimedia Commons, by Anihl)](https://commons.wikimedia.org/wiki/File:Magsafe_tipoff_2.jpg): A typical failure: the plug tip broken away from the cable after about six months of use *(licence: CC BY-SA 3.0)*
  - [DIY Magnetic Connector - Right Angle Three Contact Pins (Adafruit)](https://www.adafruit.com/product/5360): Product photos of a two-half magnetic pogo connector with three 0.1 in pins; the description says the halves repel if joined backwards (vendor page) *(licence: link only)*
  - [Print Your Own Magnetic Connector (Hackaday, 2024)](https://hackaday.com/2024/07/27/print-your-own-magnetic-connector/): Article with photo of a 3D-printed two-conductor magnetic connector, explaining magnet polarity for one-way mating and the problem of soldering to magnets *(licence: link only)*
- **make_it_yourself**: 
  - [Magnetic connector for a 3 pins spring loaded pogo (Adjuro, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/70240-magnetic-connector-for-a-3-pins-spring-loaded-pogo): Printed magnetic housing pair for Mill-Max 3-pin spring-loaded and target headers, using eight 6 x 2 mm neodymium magnets and M2.5 screws; PETG or PLA, no supports. Read through the Printables public API. *(licence: CC BY)*
  - [Magnetic electrical connector (DarthKaker, Printables) (link taken from the Hackaday article; page not opened)](https://www.printables.com/model/899384-magnetic-electrical-connector): Two-conductor printed connector where 5 x 1 mm neodymium magnets carry the current; magnets fitted in reverse polarity so it self-positions and can't short; PETG with TPU95 cable reinforcement; made as an emergency quick disconnect for a heated waistcoat on a motorbike. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Housing for 3-Pin Magnetic Pogo Connector (Bugo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1564668-housing-for-3-pin-magnetic-pogo-connector): Housing with grip and protection for a bought 3-pin magnetic pogo connector, used to disconnect LED strips on movable furniture; M3 screws and nuts. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [2 Pin Magnetic Pogo pin connector mount (Glen Bayley, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1611233-2-pin-magnetic-pogo-pin-connector-mount): Press-fit mounts that set a round 2-pin magnetic pogo connector flush into wood, with a print-in-place sliding holder that retracts the pin side; Fusion 360 source with a diameter parameter. Read through the Printables public API. *(licence: CC BY-SA)*
  - [Magnetic Pogo Pin Connector Housings (John Silvia, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1020888-magnetic-pogo-pin-connector-housings): Resin-printed in-line housings for 6-pin and 2-pin magnetic pogo connectors, including a flexible-resin outer shell for grip and strain relief. Read through the Printables public API. *(licence: CC BY-SA)*
- **diagram_idea**: Two side-view frames: (1) plug and socket a few millimetres apart, with arrows showing magnets (N and S marked, mirrored) pulling them together and into line, pogo pins on one side and flat pads on the other; (2) mated, with the pins pushed in halfway, then a cable yanked sideways and the plug popping off cleanly; plus an inset showing the plug turned round and the like poles pushing it away.
- **sources**: 
  - https://en.wikipedia.org/wiki/MagSafe
  - https://en.wikipedia.org/wiki/Pogo_pin
  - https://en.wikipedia.org/wiki/LittleBits
  - https://www.adafruit.com/product/5360
  - https://www.adafruit.com/product/5470
  - https://mill-max.com/products/new/maxneticr-spring-loaded-connectors
  - https://www.mill-max.com/products/new/introducing-100-pitch-maxnetic-connectors
  - https://www.mill-max.com/engineering-notebooks/maxnetic-connector-technology
  - https://www.mill-max.com/engineering-notebooks/spring-loaded-pogo-pins-connectors/faqs
  - https://hackaday.com/2024/07/27/print-your-own-magnetic-connector/
  - https://hackaday.com/2018/11/15/magnets-and-printed-parts-make-quick-disconnect-terminals/
  - https://hackaday.com/2025/02/25/tech-in-plain-sight-magsafe-and-how-to-roll-your-own/
  - https://www.cpsc.gov/Newsroom/News-Releases/2001/CPSC-Announces-New-Standard-for-Break-Away-Power-Cords-on-Electric-Deep-Fryers
  - https://ulse.org/standards-and-engagement/standards-matter/standards-household-deep-fryers-helping-reduce
  - https://www.kjmagnetics.com/neodymium-magnet-safety.asp
  - https://www.kjmagnetics.com/blog/magnet-shear-force
  - https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
  - https://www.govinfo.gov/content/pkg/FR-2022-01-10/html/2021-27826.htm
  - https://patents.google.com/patent/US9196979B2/en
  - https://icreaterobot-docs.readthedocs.io/en/latest/docs/ICBlocks/06MaintenanceandDebug/02CleaningMagneticConnectors/01ReadBeforeOperation.html
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:MagSafe1.jpg
  - https://commons.wikimedia.org/wiki/File:MagSafe-Pinout.svg
  - https://commons.wikimedia.org/wiki/File:Magsafe_tipoff_2.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: comes apart without damage, refit by hand
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: none, soldering iron
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, load, making_tips_3d_printing, play_and_precision, safety_notes

## 346 Wire-to-board plug connectors (pin header and crimp housing)

*electrical connections.* Rows of small metal pins on a board, with a plastic plug of crimped sockets on the wires that pushes on, often latched and shaped so it fits only one way; the small plugs on servos, sensors, 3D-printer boards and battery balance leads

*Also covers:* Also covers pin pitch (look-alike pitches don't mate), shrouded headers, crimp contacts and their tools, jumper wires and solderless breadboards, stacking headers, card-edge connectors and IC sockets. Dupont, JST and Molex (brands) as aliases. Safety: low current only; reversed plugs can damage boards.

### What it is

- **plain_name**: The small plastic plugs on the ends of thin wires that push onto rows of little metal pins on a circuit board, often with a clip that catches and a shape that only fits one way round: the plugs on servos, sensors, 3D-printer boards, battery balance leads and Arduino jumper wires
- **term**: Wire-to-board connector (pin header and crimp housing)
- **aliases**: 
  - pin header, header, male header, breakaway header; female header, pin socket, header socket (Wikipedia 'Pin header')
  - shrouded header, box header (BH): a header inside a plastic guide box with a key notch (Wikipedia 'Pin header')
  - crimp housing, connector housing, receptacle housing; crimp contact, crimp terminal, crimp socket (SparkFun 'Connector Basics'; JST XH datasheet)
  - Dupont connector, DuPont wire, Berg connector (historic trade names now used for any 0.1 in housing; Wikipedia 'Pin header'); Hackaday says the 'Dupont' parts are really the Mini-PV series (brand)
  - JST connector (brand): J.S.T. Mfg. Co.; 'JST' is often used loosely for 'any small white electrical connector' on a board (Wikipedia 'JST connector'); common series JST-XH, PH, ZH, GH, SH (brand series names)
  - Molex connector (brand), e.g. KK 254 (2.54 mm signal) and Mini-Fit Jr. (power), and the PC 'Molex' drive power plug, which is really an AMP Mate-n-Lok style (Wikipedia 'Molex connector')
  - jumper wire, jump wire, DuPont wire, breadboard wire (Wikipedia 'Jump wire')
  - solderless breadboard, protoboard, plugboard (Wikipedia 'Breadboard')
  - stackable header, stacking header, shield header (SparkFun 'Arduino Shields')
  - card-edge connector, edge connector (Wikipedia 'Edge connector')
  - IC socket, DIP socket, DIL socket, machined-pin socket, ZIF socket (zero insertion force) (Wikipedia 'Dual in-line package', 'Zero insertion force')
  - balance lead, balance plug (JST-XH on RC lithium batteries; Wikipedia 'JST connector'); servo plug (radio-control)
- **family**: electrical connections
- **other_families**: quick-release & tool-free
- **one_liner**: A plastic plug (housing) holding small sprung metal sockets that have been crimped onto wire ends pushes onto a matching row of pins (header) soldered to a circuit board, making a removable, often latched and polarised, low-current connection.
- **complexity**: A few parts: the board half (a pin header, plain or in a shrouded box, soldered into the circuit board); the cable half (a moulded plastic housing); one crimp contact per wire (a stamped metal socket with a wire crimp and an insulation crimp, locked into the housing); and the wires. Many housings add a latch, ramp or friction lock and a polarising key (JST XH datasheet; Wikipedia 'Pin header'; SparkFun 'Connector Basics'). Related forms: jumper wires (wire with a single-way housing at each end), solderless breadboards (blocks of sprung clips at 0.1 in pitch), stacking headers, card-edge sockets and IC sockets.
- **how_it_works**: Each wire end is stripped and a small metal contact is squeezed onto it with a crimp tool: one pair of tabs bites the copper and a second pair wraps the insulation for strain relief (Hackaday 'Good In A Pinch'). The crimped contact is then pushed into its cavity in the plastic housing until it is 'fully seated and locked', so it is captured and can't push back out when the plug is mated (SparkFun 'Connector Basics'; NASA-STD-8739.4A §13.2.1). When the housing is pushed onto the header, each springy socket grips a pin, and the spring pressure keeps the metal surfaces touching (SparkFun 'Connector Basics'). The housing shape, a shroud or a blocked hole lines the plug up and stops it going on the wrong way round, and a latch or friction ramp stops it shaking loose (Wikipedia 'Pin header', 'Electrical connector').

### Finder attributes

- **job**: 
  - join and hold: connects wires to a circuit board (or board to board) so signals and small currents pass through; the finder reaches this entry through the 'electrical connections' family
  - lock, and release by hand: latching housings (e.g. JST XH-type, Molex KK 254-type friction ramp) hold until the latch is pressed or the plug is pulled off by its housing
- **motion**: none: a fixed joint once mated; the plug only moves when it is plugged in or pulled out.
- **degrees_of_freedom**: 0 when mated and latched; an unlatched friction-fit plug can work loose along the pins (Wikipedia 'Molex connector': 'held in place by friction instead of a latch').
- **special_behaviour**: 
  - quick-release: plugs in and pulls out by hand with no tools, which is the main reason to use it instead of soldering wires to the board
  - hand-release only (locks under load, releases when a person operates it): latching housings resist a pull on the wires and are released by lifting or pressing the latch; SparkFun warns the small 2 mm JST-PH battery plug is 'wicked hard to disconnect' (SparkFun 'Connector Basics')
  - self-aligning or self-centring: a shroud (box header) guides the plug onto the pins, and a notch, bump, missing pin or blocked socket makes it fit only one way round (polarised or keyed) (Wikipedia 'Pin header'; see Keying)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): each socket is a sprung metal contact that grips its pin (e.g. JST XH 'double-leaf contact'; breadboards use 'spring clips') (JST XH datasheet; Wikipedia 'Breadboard')
  - shape (the parts interlock; form-fit): a latch or ramp on the housing hooks over the header, and each crimp contact is locked into its housing cavity, e.g. by a retaining clip (JST XH datasheet; NASA-STD-8739.4A §13.2.1)
  - friction or clamping (force-fit): unlatched plugs and the crimp itself, which deforms the contact 'past its yield point' so it grips the wire by static friction (Wikipedia 'Electrical connector', 'Crimp (joining)')
- **input_output**: not applicable
- **power**: passive (no power needed).
- **removability**: tool-free quick release: the plug mates and unmates by hand. The crimp on each contact is permanent ('Crimped contacts are permanent'; Wikipedia 'Crimp (joining)'), but contacts can be released from the housing with a thin depinning tool and re-arranged.
- **reuse_cycles**: many times, but not unlimited: every connector has a datasheet life in mating cycles; 'a board-to-board connector designed for use inside of consumer electronics may be limited to tens of cycles' (SparkFun 'Connector Basics'), and tight PC drive power plugs are 'intended to be connected and disconnected only a few times' (SparkFun). Machined-pin headers last longer than stamped ones (SparkFun). Small crimp housings are typically rated for tens of cycles ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: To plug in: none. To make leads: wire strippers, a crimp tool with the die made for that contact family (ratcheting tools are preferred), and a depinning tool or needle to remove contacts; the official crimper for 'Dupont'-type contacts costs over $1500, but suitable third-party tools cost under $60 (Hackaday 'Inside The Secret World Of Crimping'). To fit headers: a soldering iron. Ready-made pre-crimped leads and jumper wires need no tools.
- **seal**: none: open housings and headers let in dust and moisture; use a sealed connector series or an enclosure where that matters.
- **load**: Electrical: up to about 3 A; extra-low voltage only (in maker projects). Examples: JST-XH 3 A per contact with 22 AWG wire, JST-PH 2 A with 24 AWG (JST XH and PH datasheets); 2.54 mm 'Dupont'-like JST RE 2 A (Wikipedia 'JST connector'); breadboard clips 'rated for 1 ampere at 5 volts and 0.333 amperes at 15 volts' (Wikipedia 'Breadboard'). Larger power housings of the same style carry more (Molex-type 1.57 mm pins 5 A, 2.36 mm pins 8.5 A; Wikipedia 'Molex connector'). Some series carry a maker's 250 V rating for use inside finished equipment (JST XH datasheet), but open headers are not a mains connection for a hobby project; mains work must follow local law. Mechanical: light. The latch or friction holds against vibration and a light tug; the crimp is the weak point (minimum crimp pull strengths are only 22 N for 28 AWG and 57 N for 22 AWG wire; NASA-STD-8739.4A Table 12-1), so never pull a plug out by its wires and give the cable strain relief.
- **adjustable**: no: pin positions are fixed. Contacts can be moved to other cavities with a depinning tool to change the pin order.
- **play_and_precision**: small: sprung sockets take up a little sideways error, and shrouds guide the plug, but the pitch must match exactly. A 2.50 mm part looks like a 2.54 mm one and is sometimes sold as such (Wikipedia 'JST connector'); the 0.04 mm difference per pin adds up along a row (0.4 mm over 11 pins). Unshrouded headers let a plug go on shifted by one pin or turned round.
- **access_needed**: one side only (blind): the plug is pushed on from the front, with finger room to grip the housing and work the latch; fitting the header itself needs both sides of the board for soldering through-hole pins.
- **materials**: Housings: nylon, e.g. natural (white) PA 6 for JST-XH housings with a glass-filled PA 66 header option (JST XH datasheet), and nylon rated UL 94V-0 for Molex KK 254 housings (Molex datasheet via Farnell). Contacts: tin-plated phosphor bronze (JST-XH) or copper alloy (JST-PH), gold plating on request (JST XH and PH datasheets); breadboard clips are 'tin plated phosphor bronze or nickel silver alloy' (Wikipedia 'Breadboard'). Wire: stranded copper in a narrow size range per contact, e.g. 30-22 AWG with insulation 0.9-1.9 mm across for JST-XH, and 32-24 AWG for JST-PH (JST datasheets); breadboard jumpers usually 22 AWG solid tin-plated copper (Wikipedia 'Breadboard'). Header pins: 0.64 mm square for 2.54 mm pitch or 0.50 mm round for machined pins (Wikipedia 'Pin header').
- **maker_difficulty**: moderate: plugging in and soldering headers is easy, and ready-made leads are cheap, but crimping the tiny contacts needs the matching die and practice; most general crimp tools 'make a mess of these terminals' (Hackaday 'Inside The Secret World Of Crimping').

### Making it

- **processes**: 
  - off-the-shelf part: headers, housings, crimp contacts, pre-crimped leads, jumper wires, breadboards, stacking headers and IC sockets are bought
  - 3D print (FDM): custom multi-way housings for single 'Dupont' jumper ends, connector covers and strain-relief sleeves, depinning tools, crimp-tool contact holders and hot-glue moulds (Printables 219847, 1224903, 394200, 1195233, 15081)
  - soldering: through-hole or surface-mount headers are soldered to the board (Wikipedia 'Pin header')
- **print_in_place**: no: the metal contacts must be bought and crimped; only holders, covers and tools around them are printed.
- **making_tips_3d_printing**: 1) Printed multi-way housings for jumper ends: measure the single-way housings first; one designer found little difference between brands except length, 12-14 mm, most at 14 mm, and used an inner width of 10.6 mm for 4 ends, 1.7 mm side walls and snap-on lid tabs (Nerd Corner); print in PLA or PETG, though nylon would suit the flexing tabs best (Nerd Corner). Add a small rib inside the lid that pushes the wires down and pulls each housing against a stop, so pulling the cable can't drag the ends back. 2) Covers and sleeves that hold a plug to its header and keep the wires from bending at the crimp are popular for battery and printer leads (Printables 1224903, 15081); keep them clear of the latch so the plug can still be released. 3) For printed contact holders and crimp jigs, the slot for the contact should be a tight fit; adjust with the slicer's XY size compensation if it is too tight (Printables 1195233). 4) In printed enclosures leave finger room and a straight pull path to the plug, and clamp the cable to the case so a tug never reaches the crimp (SparkFun 'Connector Basics': strain relief). 5) Don't rely on printed plastic springs as electrical contacts; use the metal crimp contacts ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Male pin headers (straight or right-angle, single or double row, through-hole or SMD, 36/40/50-pin breakaway strips), female headers (pin sockets), machined-pin headers and IC sockets, shrouded box headers, stackable (stacking) headers (Wikipedia 'Pin header'; SparkFun 'Arduino Shields'); crimp housings and crimp contacts by series (e.g. JST-XH, JST-PH, Molex KK 254, Mini-PV-type 'Dupont' housings: brand series names); pre-crimped leads and jumper wire kits (male-male, male-female, female-female); solderless breadboards and breadboard jumper wire sets; card-edge connectors; ZIF sockets; depinning (extraction) tools; ratcheting open-barrel crimpers with dies for 0.1 in and 2.5 mm contacts. Search terms: 'pin header 2.54 mm', 'crimp housing', 'crimp terminal', 'pre-crimped lead', 'box header', 'stacking header', 'DIP socket'.
- **rules_of_thumb**: 
  - Match the pitch first: common header pitches are 5.08, 3.96, 2.54, 2.00, 1.27 and 1.00 mm (Wikipedia 'Pin header'); JST series run XH 2.50 mm, PH 2.00 mm, ZH 1.50 mm, GH 1.25 mm and SH 1.00 mm (Wikipedia 'JST connector'; Hackaday 'JST Is Not A Connector'). Some 2.50 mm parts are sold as 2.54 mm and some 1.25 mm parts as 1.27 mm (Wikipedia 'JST connector').
  - Name connectors by maker, series and pitch, e.g. 'JST-XH 2.50 mm', never just 'JST' or 'Molex' (Wikipedia 'JST connector'; Hackaday 'JST Is Not A Connector').
  - Check the current rating per contact for your wire size: JST-XH 3 A at 22 AWG, 250 V, wire 30-22 AWG, -25 to +85 °C; JST-PH 2 A at 24 AWG, 100 V, wire 32-24 AWG, -40 to +105 °C (JST XH and PH datasheets); breadboard clips 1 A at 5 V (Wikipedia 'Breadboard').
  - Breadboards: 0.1 in hole spacing, five clips per half-row, 22 AWG solid tin-plated copper jumpers; usable for signals up to about 10 MHz only (Wikipedia 'Breadboard').
  - Use only the wire size and contact combination the maker specifies, with the matching tool, and don't modify contacts or wire (NASA-STD-8739.4A §12.3.3-12.3.4); crimp tools should have a full-cycle ratchet (§12.3.1).
  - Pull-test crimps: minimum crimp pull strength 22 N (28 AWG), 36 N (26 and 24 AWG), 57 N (22 AWG), 92 N (20 AWG), 142 N (18 AWG); for other combinations at least 60% of the wire's own tensile strength (NASA-STD-8739.4A Table 12-1, §12.3.5).
  - Leave 0.25 mm to 0.75 mm of bare wire between the insulation and the crimp barrel for 20 AWG and smaller (NASA-STD-8739.4A §10.1.4.b), and push each contact in until it is 'fully seated and locked' (§13.2.1).
  - Low-insertion-force contact versions are easier to plug but 'less resistant to the vibration' (JST XH datasheet; JST PH datasheet).
  - When stacking boards on stacking headers, make sure no two boards use the same pins (SparkFun 'Arduino Shields').

### When to use it

- **everyday_examples**: 
  - Arduino and Raspberry Pi pin headers with rainbow jumper wires and a white solderless breadboard (SparkFun 'Connector Basics'; Wikipedia 'Jump wire')
  - The white balance plug on a radio-control lithium battery and the stepper-motor plugs on a 3D-printer control board (JST-XH type) (Hackaday 'JST Is Not A Connector'; Wikipedia 'JST connector')
  - The three-wire plug on a hobby servo (Wikipedia 'JST connector')
  - Computer motherboard headers for the front-panel buttons, USB and fans, and PC power plugs (Wikipedia 'Pin header', 'Molex connector')
- **when_to_use**: Use it whenever a low-current wire must connect to a circuit board and you may want to unplug it later: sensors, servos, motors, LEDs, switches, displays, battery balance leads, and modules on a robot or 3D printer. It keeps parts swappable and lets you take a project apart for repair (Hackaday 'Inside The Secret World Of Crimping': 'a proper connector can solve a lot of headaches'). Pick a latching, polarised, shrouded series for anything that vibrates or is wired by someone else; use jumper wires and a breadboard for trying a circuit before building it permanently (Wikipedia 'Breadboard'); use stacking headers to stack add-on boards, and IC sockets where a chip may need replacing or reprogramming (Wikipedia 'Dual in-line package').
- **when_not_to_use**: Not for mains voltage or for currents above a few amps: use proper high-current battery plugs, screw terminals or spring-clamp terminals sized for the load, and follow local law for any mains wiring (e.g. Approved Document P in England). Not where the joint must be permanent and vibration-proof with no latch (solder or crimp the wire directly, or use a latching series). Avoid breadboards in finished projects: they have 'relatively high resistance, and less reliable connections, which are subject to jostle and physical degradation' (Wikipedia 'Breadboard'). Avoid unkeyed, unshrouded headers for power, where a reversed or shifted plug can damage the board; use a keyed connector (see Keying). Don't solder wires onto crimp contacts instead of crimping them: 'It makes for easily damaged connections' (Hackaday 'Inside The Secret World Of Crimping').
- **environment_limits**: Temperature: JST-XH is rated -25 to +85 °C and JST-PH -40 to +105 °C, including self-heating from the current (JST datasheets); most JST through-hole headers can't survive reflow soldering heat (Wikipedia 'JST connector'). Vibration: friction-held plugs work loose; latching types and standard (not low-insertion-force) contacts hold better (JST datasheets; Wikipedia 'Molex connector'). Damp and dirt: open tin-plated contacts can become 'soiled or oxidized', and 'the springiness required to hold the contacts together may fade with time' (SparkFun 'Connector Basics'). Wear: each mating cycle wears the plating, so connectors have a finite life (SparkFun; NASA-STD-8739.4A §17.1).
- **safety_notes**: Low current only: overloaded or worn contacts heat up; female sockets 'can spread, making the connection imperfect and subject to arcing', and 'in extreme cases the whole connector can melt'; replace any plug whose shell shows blackening or browning (Wikipedia 'Molex connector'). Reversed or shifted plugs: keying exists to prevent 'incompatible or dangerous electrical connections' (Wikipedia 'Electrical connector'); forcing a polarised connector in wrong 'will result in damage to the device' (SparkFun 'Connector Basics'), and a maker on a synth forum reported burnt parts after plugging a module's power header in backwards (Look Mum No Computer forum). Check pin 1 and polarity before powering up. Batteries: balance leads of lithium batteries are live all the time; a short across their pins can make a cell overheat ⚑ [uncertain], and NASA's rule to de-energise circuits before mating is noted as 'not applicable to circuits containing batteries' (NASA-STD-8739.4A §17.2.1). Mains: these are not mains connectors in a hobby project; mains work must follow local law (in England, Building Regulations Part P; Approved Document P, 2013 edition). *(⚑ parts need confirming)*
- **common_failures**: Wrong pitch or series: the plug won't fit or fits badly because 2.50, 2.54 and 2.00 mm look alike; identify by pitch and datasheet (Hackaday 'JST Is Not A Connector'). Plug fitted backwards or shifted one pin on an unshrouded header: use shrouded or keyed headers (Wikipedia 'Pin header'). Bad crimp: wire pulls out or connection is intermittent; use the correct die and ratcheting tool and pull-test (Hackaday 'Good In A Pinch'; NASA-STD-8739.4A §12.3). Contact not clicked fully into the housing, so it backs out when the plug is pushed on (NASA-STD-8739.4A §13.2.1). Wires breaking at the crimp after being used as a handle or flexed: pull by the housing and add strain relief (SparkFun 'Connector Basics'). Tight plugs damaged while unplugging: SparkFun notes a JST-PH battery plug can be damaged when disconnected for charging (SparkFun). Friction plugs loosening, pins skewing or detaching, spread sockets arcing (Wikipedia 'Molex connector'). Breadboard faults: loose, worn or dirty clips and long jumpers (Wikipedia 'Breadboard'). Thin flat tabs (e.g. on flex sensors) breaking or working loose in a breadboard (SparkFun 'Connector Basics').
- **related**: 
  - Keying (polarization, poka-yoke): the one-way-only shapes and blocked pins that make these plugs fit only one way
  - Insulation-displacement connector (IDC, ribbon-cable plug): the other common way to terminate a header plug, pressing all wires of a ribbon cable on at once with no stripping or crimping
  - Crimp terminals (ring, fork, spade, blade): larger single-wire crimped ends for screws and tabs, for higher currents
  - Soldered wire joint: wires soldered straight to the board; permanent, smaller, no connector to buy
  - Screw terminal and Spring-clamp wire connector: take bare or ferruled wire ends, carry more current, no crimping, but bulkier and slower to disconnect
  - Standard plug-and-socket connector (USB, barrel jack, JST-RCY-style wire-to-wire): plugs between devices or cables rather than onto a board
  - High-current battery plug: for motor and battery power above a few amps
  - Pogo pin: spring-loaded pins that touch flat pads, for docking and test jigs with no plug at all
  - Flat flexible cable and latching connector (FFC with ZIF): a thin ribbon slid into a latching board connector, for very fine pitches
  - Cable gland and strain relief: how to stop a pull on the cable reaching the crimp
  - Genderless connector: plugs where both halves are identical

### Pictures, videos and models

- **links**: 
  - [Balancer Buchse XH.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG): 2.50 mm JST-XH-type vertical board headers, the kind used for battery balance leads and 3D-printer boards *(licence: CC BY 3.0)*
  - [Stiftwanne2x13v2.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Stiftwanne2x13v2.jpg): A 2x13 shrouded (box) header with its key notch and the triangle marking pin 1 *(licence: CC BY-SA 3.0 / GFDL)*
  - [Insidebreadboard (2).jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Insidebreadboard_(2).jpg): The underside of a solderless breadboard with the backing removed, showing the strips of spring clips that join each row *(licence: CC BY-SA 3.0 / GFDL)*
  - [Connector Basics (SparkFun Learn)](https://learn.sparkfun.com/tutorials/connector-basics/all): Photos and terms for gender, polarity, pitch, mating cycles and strain relief, plus pin headers, machine-pin headers, crimp housings and IDC ribbon plugs *(licence: CC BY-SA 4.0)*
  - [JST Is Not A Connector (Hackaday, 2017)](https://hackaday.com/2017/12/27/jst-is-not-a-connector/): Photos of JST RCY, XH, PH, ZH, GH and SH plugs and how to tell look-alike connectors apart by pitch *(licence: link only)*
- **make_it_yourself**: 
  - [Connector housing Dupont/Jumper 4Pin (NT / Nerd Corner, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/219847-connector-housing-dupontjumper-4pin): Printed snap-lid housing that groups four single 'Dupont' jumper ends into one plug; other pin counts are separate models *(licence: GNU General Public License v2.0)*
  - [3D printed Dupont connector for jumper cable (Nerd Corner blog)](https://nerd-corner.com/3d-printed-dupont-connector-for-jumper-cable/): Design write-up for the printed housing above, with measured jumper-housing sizes, wall thicknesses and snap-tab design *(licence: link only)*
  - [JST-XH.2 Connector Depinner (Micro Center, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/394200-jst-xh2-connector-depinner): Printed tool for releasing crimp contacts from JST-XH-type housings of up to 15 pins *(licence: Creative Commons Attribution-NonCommercial)*
  - [JST-XH Connector Protector Case (2-9pin) Kit (Ferret, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1224903-jst-xh-connector-protector-case-2-9pin-kit): Snap-on covers for 2-9 pin JST-XH-type plugs that stop the wires bending and breaking at the plug *(licence: Creative Commons Attribution-ShareAlike)*
  - [Crimp tool dupont contact holder (GunbleR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1195233-crimp-tool-dupont-contact-holder): Printed positioner that holds a 'Dupont' crimp contact in a generic crimp tool for repeatable crimps *(licence: Creative Commons Attribution)*
- **diagram_idea**: Cut-away of a three-way crimp housing pushed onto a shrouded header: one contact shown with its wire crimp and insulation crimp, locked into its housing cavity, the sprung socket gripping the square pin, the latch over the header ramp, and a side panel comparing 2.54 mm and 2.50 mm rows drifting apart over ten pins.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pin_header
  - https://en.wikipedia.org/wiki/JST_connector
  - https://en.wikipedia.org/wiki/Molex_connector
  - https://en.wikipedia.org/wiki/Jump_wire
  - https://en.wikipedia.org/wiki/Breadboard
  - https://en.wikipedia.org/wiki/Edge_connector
  - https://en.wikipedia.org/wiki/Dual_in-line_package
  - https://en.wikipedia.org/wiki/Zero_insertion_force
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Crimp_(joining)
  - https://www.jst-mfg.com/product/pdf/eng/eXH.pdf
  - https://www.jst-mfg.com/product/pdf/eng/ePH.pdf
  - https://www.farnell.com/datasheets/4644099.pdf
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://learn.sparkfun.com/tutorials/arduino-shields-v2/all
  - https://hackaday.com/2017/12/27/jst-is-not-a-connector/
  - https://hackaday.com/2019/02/28/inside-the-secret-world-of-crimping/
  - https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://lookmumnocomputer.discourse.group/t/help-i-plugged-veils-in-backwards/1869
  - https://nerd-corner.com/3d-printed-dupont-connector-for-jumper-cable/
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG
  - https://commons.wikimedia.org/wiki/File:Stiftwanne2x13v2.jpg
  - https://commons.wikimedia.org/wiki/File:Insidebreadboard_(2).jpg
  - https://commons.wikimedia.org/wiki/File:6_Pin_Header.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 3 A
- **tools**: soldering iron, crimper, sewing or leather tools, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing, reuse_cycles, safety_notes

## 347 Crimp terminals (ring, fork and spade terminals, blade quick-disconnect)

*electrical connections.* A metal end squeezed onto a stripped wire with a crimping tool, ending in a ring or fork that goes under a screw, or a flat blade or sleeve that pushes onto a tab

*Also covers:* Also covers insulated and bare types, the colour code for wire size, open- and closed-barrel crimps, the insulation crimp for strain relief, bullet terminals, earth ring terminals and heavy cable lugs. Safety: the wrong tool or size pulls out; poor joints heat up and can start fires

### What it is

- **plain_name**: A small metal end that is squeezed hard onto a stripped wire with a special pliers-like tool; the other end is a flat ring or fork that goes under a screw, or a flat blade or sleeve that pushes onto a matching tab
- **term**: Crimp terminal (ring, fork and spade terminals; blade quick-disconnect)
- **aliases**: 
  - ring terminal, ring tongue terminal, eyelet; fork terminal, spade terminal, split-ring terminal (Wikipedia 'Electrical connector': ring and spade 'sometimes called fork or split ring terminals'); flanged spade, hook, flag and rectangular tongue terminals (Wikipedia 'Crimp (joining)')
  - blade connector, blade terminal, quick disconnect, quick connect, tab terminal, spade connector (male tab and female receptacle) (Wikipedia 'FASTON terminal', 'Electrical connector')
  - FASTON (brand, TE Connectivity), Lucar (brand) (Wikipedia 'FASTON terminal', 'Crimp (joining)'); 6.3 mm or 0.250 in, 4.8 mm or 0.187 in and 2.8 mm or 0.110 in tabs
  - crimp lug, solderless lug, cable lug, tubular lug, battery lug, battery cable terminal (heavy-cable versions; SG Tool Aid crimper instructions; Grote catalogue)
  - bullet terminal, bullet connector, snap plug (male and female) (Wikipedia 'Crimp (joining)'; Grote catalogue)
  - earth (ground) ring terminal, ground lug (Hammond ground kit bulletin)
  - insulated (pre-insulated) and non-insulated (bare) terminals; vinyl (PVC) or nylon insulated; fully insulated female disconnects; heat-shrink sealed terminals (Grote catalogue)
  - open-barrel (F-crimp, B-crimp) and closed-barrel terminals; brazed-seam and butted-seam barrels (Wikipedia 'Crimp (joining)'; Hackaday 'Good In A Pinch'; Grote catalogue)
  - red, blue and yellow terminals (named by their wire-size colour code)
- **family**: electrical connections
- **one_liner**: A metal terminal whose barrel is squeezed (crimped) onto a stripped wire end with a crimping tool, giving a ring or fork to clamp under a screw or stud, or a blade or receptacle that pushes onto a matching tab, so a wire can be fixed to a terminal or unplugged without soldering.
- **complexity**: A few parts: the terminal (a stamped or tubular copper or brass part with a wire barrel and a ring, fork, blade, receptacle or bullet end), often a plastic or heat-shrink insulating sleeve over the barrel, and the wire; plus the screw, stud, washer and nut, or the matching tab, that it connects to (Wikipedia 'Electrical connector'; Grote catalogue). Open-barrel types have a second set of tabs that grip the insulation (Hackaday 'Good In A Pinch').
- **how_it_works**: The stripped wire goes into the barrel and the crimping tool squeezes the barrel so hard that the metal is deformed 'past its yield point'; the copper strands are pressed into a solid, gas-tight mass that keeps out air and moisture, and the springiness of the squeezed barrel keeps gripping the wire by friction (Wikipedia 'Crimp (joining)'; Hackaday 'Good In A Pinch'). A second, lighter crimp grips the wire's insulation (or the insulated sleeve is pressed round it) so bending is taken by the insulation, not the copper (strain relief) (Hackaday 'Good In A Pinch'; Wikipedia 'Electrical connector'). A ring or fork then makes contact through its flat face when a screw or bolt clamps it; a blade receptacle is a springy sleeve that grips a flat tab (Wikipedia 'Electrical connector').

### Finder attributes

- **job**: 
  - join and hold: terminates a wire so it can be screwed to a stud, terminal block or busbar, or pushed onto a tab on a switch, relay, speaker, heater or battery; the finder reaches this entry through the 'electrical connections' family
- **motion**: none: a fixed connection; the wire next to the terminal should not be flexed repeatedly (Hackaday on the Wanhao recall: crimps failed from 'mechanical stress in the cable drag chain').
- **degrees_of_freedom**: 0 once crimped and screwed down or pushed on; a ring can still turn on a loose screw, which is a sign it needs tightening.
- **special_behaviour**: 
  - quick-release: blade (quick-disconnect) terminals pull off and push on by hand, and a fork (spade) terminal can be removed or fitted while the screw is 'left partially screwed in' (Wikipedia 'Electrical connector', 'FASTON terminal')
- **holding_principle**: 
  - friction or clamping (force-fit): the crimp holds the wire by 'a high degree of static friction' from the deformed barrel (Wikipedia 'Crimp (joining)'), and a ring or fork is clamped under a screw head or nut
  - spring force (a spring or springy part presses it in place): a blade receptacle is a sprung sleeve gripping the tab (Wikipedia 'Electrical connector')
  - shape (the parts interlock; form-fit): a ring encircles its screw, so it can't slide off if the screw loosens a little; insulated receptacles and bullets are held in a sleeve
- **input_output**: not applicable
- **power**: passive (no power needed).
- **removability**: removable: the ring or fork is unscrewed and a blade pulled off; the crimp itself is permanent, since 'crimped contacts are permanent (i.e. the connectors and wire ends cannot be reused)' (Wikipedia 'Crimp (joining)'), so a bad crimp is cut off and redone.
- **reuse_cycles**: many times for the screw or blade joint; once for the crimp on the wire. Blade receptacles may loosen after many pull-offs ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: Wire strippers; a crimping tool whose die matches the terminal type and size (insulated or non-insulated, colour or wire size), ideally with a full-cycle ratchet that won't open until the crimp is complete (NASA-STD-8739.4A §12.3.1; Wikipedia 'Crimp (joining)'); for heavy lugs a large hex or indent crimper, mechanical or hydraulic, with rotating or swappable dies (SG Tool Aid crimper instructions; Wikipedia 'Crimp (joining)'); a heat gun for heat-shrink terminals (Grote catalogue); a screwdriver or spanner to fit ring and fork terminals.
- **seal**: none: ordinary insulated or bare terminals let in water; heat-shrinkable terminals with an adhesive lining 'protect splices from water, corrosion, salt and moisture' (watertight) (Grote catalogue), and sealing a heavy lug with double-wall adhesive heat-shrink is recommended (SG Tool Aid). The crimp itself is designed to be 'gas-tight' inside (Wikipedia 'Crimp (joining)').
- **load**: Electrical: up to about 30 A for ordinary insulated ring, fork and blade terminals (heavy cable lugs go above about 30 A); rated for mains as components (insulated terminals are typically rated 300 V or 600 V; Grote catalogue), but mains work must follow local law (e.g. Approved Document P in England). Blade examples: 6.35 mm (0.250 in) tab 3 A at 22 AWG up to 24 A at 10 AWG; 4.8 mm (0.187 in) tab 10 A at 16 AWG; 2.8 mm (0.110 in) tab 5 A at 16 AWG (Wikipedia 'FASTON terminal'). Mechanical: medium in a straight pull when crimped correctly, e.g. NASA minimum crimp pull strengths 57 N (22 AWG), 142 N (18 AWG), 183 N (16 AWG), 290 N (14 AWG), 459 N (12 AWG), 707 N (10 AWG) and 1281 N (8 AWG) (NASA-STD-8739.4A Table 12-1); weak against repeated bending at the barrel end, and blade terminals can be pulled or shaken off.
- **adjustable**: no
- **play_and_precision**: not applicable (it doesn't locate parts). Choose a ring or fork whose hole matches the stud or screw size (Grote catalogue gives a stud-size and hole-size chart) so it seats flat under the screw head.
- **access_needed**: one side only (blind) for a ring or fork going onto a stud or into a tapped hole, or a blade going onto a tab; both sides when a loose bolt and nut are used.
- **materials**: Terminals: copper, usually electro tin-plated against corrosion (Grote catalogue); heavy lugs of electrolytic (ETP) copper, with butted or brazed seams or seamless tubes (Grote catalogue); crimp metals generally copper, brass, aluminium or bronze (Hackaday 'Good In A Pinch'). A copper-terminal crimper must not be used on steel terminals (SG Tool Aid). Insulation: vinyl (PVC) rated for 75 °C continuous, nylon for 105 °C, bare terminals 75 °C (Grote catalogue); heat-shrink polyolefin with adhesive for sealed versions (Grote). Wire: stranded copper in the size range marked or colour-coded on the terminal; crimps suit 'cables of both small and large cross-sections' (Wikipedia 'Crimp (joining)').
- **maker_difficulty**: easy: with the right size terminal and a matching ratcheting crimper a crimp takes seconds, but 'if you use crappy crimp tools or crimps or just mismatch them ... You'll get pullouts and failures' (Hackaday 2023 'What Do You Do When You Can't Solder?'). Heavy lugs need a large crimper and more force (SG Tool Aid).

### Making it

- **processes**: 
  - off-the-shelf part: terminals, lugs and crimp tools are bought; the joint is made by hand with a crimping tool
  - 3D print (FDM): covers, insulating boots, holders and keyed housings for spade and blade terminals, and adapters that hold blade terminals against battery contacts (Printables 1599622, 1306699, 70578, 220863)
- **print_in_place**: no: the terminal is metal and must be crimped; only covers, boots and housings around it are printed.
- **making_tips_3d_printing**: 1) Printed two-way plug for spade terminals: friction fit is enough because spade terminals 'make a solid connection'; offset the terminals to one side so the plug fits only one way; print flat side down with no supports; add grip ribs to pull it apart; heat-shrink over bare crimped spades replaces the insulation sleeve (Printables 1599622). 2) Adapter blocks: press blade terminals into printed grooves, tack with quick glue, then fill round the terminals and wires with two-part epoxy so a tug can't move them (Printables 70578, a power-tool battery adapter). 3) Flexible boots over ring terminals print well in TPU; one design fits 14-16 AWG at 100% and 10-12 AWG at about 115% scale (Printables 1306699). 4) Covers near hot parts, e.g. a 3D-printer heated bed with ring terminals, need a heat-tolerant filament (one designer used a high-temperature PLA) and room for the terminal's bend radius (Printables 220863). 5) Clamp ring terminals metal-to-metal (a metal stud, nut or threaded insert), not directly against printed plastic, because plastic under a screw creeps and the joint loosens and heats up ⚑ [uncertain]. 6) Provide a cable clamp or tie point so pulls and vibration never reach the crimp. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Insulated and non-insulated ring terminals (by wire range and stud size), fork/spade terminals (straight and flanged), blade terminals: male tabs, female receptacles, fully insulated receptacles, piggyback and flag types (0.110, 0.187, 0.250 in series), bullet terminals and receptacles, heat-shrink sealed terminals, 'crimp, solder and seal' terminals, heavy copper battery lugs and tubular cable lugs, ratcheting crimpers with colour-coded dies, hex and indent lug crimpers (mechanical or hydraulic), wire strippers, insulating boots and terminal covers, earth (ground) kits with lugs and lock washers (Grote catalogue; Wikipedia 'FASTON terminal', 'Crimp (joining)'; Hammond ground kit bulletin; SG Tool Aid). For sizes, use a catalogue chart (e.g. Grote's wire-size, stud-size and tab-size tables) rather than guessing.
- **rules_of_thumb**: 
  - Colour code by wire size (sources differ slightly, so read the size printed on the pack): red 22-18 AWG, blue 16-14 AWG, yellow 12-10 AWG (Wikipedia 'Crimp (joining)'; Grote catalogue); Wikipedia's FASTON page gives red as 22-16 AWG; in metric, DIN 46245 gives red 0.5-1 mm², blue 1.5-2.5 mm², yellow about 4-6 mm² (Wikipedia 'Electrical connector'). The colours show wire size, not polarity (Wikipedia 'FASTON terminal').
  - Insulation temperature ratings: vinyl 75 °C, nylon 105 °C, bare copper 75 °C continuous (Grote catalogue).
  - Blade current ratings depend on tab size and wire: 0.250 in tab 3 A (22 AWG), 4 A (20), 7 A (18), 10 A (16), 15 A (14), 20 A (12), 24 A (10); 0.187 in tab up to 10 A (16 AWG); 0.110 in tab up to 5 A (16 AWG) (Wikipedia 'FASTON terminal').
  - Insert the stripped wire so its end is flush with the far end of the barrel, with all strands inside, and strip to the terminal maker's length (Wikipedia 'Crimp (joining)'; SG Tool Aid). Leave 0.25-0.75 mm of bare wire between the insulation and the barrel for 20 AWG and smaller (NASA-STD-8739.4A §10.1.4.b).
  - A good crimp: all strands cold-flowed into the barrel, force neither too light nor too strong, barrel not over-deformed, no large voids, insulation not pinched or charred (Wikipedia 'Crimp (joining)'); crimp height measured with a micrometer is the key non-destructive check (Hackaday 'Good In A Pinch').
  - Pull-test crimps: minimum pull strength 57 N (22 AWG), 142 N (18 AWG), 183 N (16 AWG), 290 N (14 AWG), 459 N (12 AWG), 707 N (10 AWG), 1281 N (8 AWG); otherwise at least 60% of the wire's own tensile strength (NASA-STD-8739.4A Table 12-1, §12.3.5).
  - Use a full-cycle ratcheting crimp tool and only the terminal-wire combinations the maker recommends; don't modify terminals or wires to fit (NASA-STD-8739.4A §12.3.1, §12.3.3-12.3.4).
  - Heavy lugs: set the crimper's dies for the lug type and wire size, crimp twice if the lug maker says so (first crimp at the open end), pull to check, and seal with double-wall adhesive heat-shrink (SG Tool Aid crimper instructions).
  - Earth terminals on painted metal: a lug 'will not ground the enclosure without either removing any exterior paint or installing ground wires' (Hammond ground kit bulletin); one minimum torque given for a 3/8 in brass ground stud is 50 in-lbf (5.6 N·m) (Hammond).

### When to use it

- **everyday_examples**: 
  - Car battery cables, earth straps and the spade terminals on car fuses, relays and speakers (GM TechLink; Wikipedia 'Electrical connector': blades on switches and speaker units)
  - Barrier-strip terminal blocks with ring or spade terminals under the screws (Wikipedia 'Electrical connector')
  - The heated-bed power wires of a 3D printer fixed with ring terminals (Printables 220863, Prusa MK3)
  - Push-on blade terminals on household appliance switches, heaters and thermostats ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use crimp terminals to fix a stranded wire to a screw, stud, terminal block, busbar or battery post (ring or fork), or to make a wire that pushes onto a tab on a switch, relay, heater or speaker (blade), especially where the wiring vibrates: crimps are 'highly resistant to vibration and thermal shock' and need no heat (Wikipedia 'Crimp (joining)', 'Electrical connector'). Choose a ring where the screw might loosen, since it can't slide off the screw; a fork where you need to fit or remove it without taking the screw out (Wikipedia 'Electrical connector'); a blade where you want to unplug parts for service; a heavy lug for battery and inverter cables; a sealed heat-shrink terminal outdoors or in boats and vehicles (Grote catalogue).
- **when_not_to_use**: Don't use them without the right crimp tool and terminal size: pliers or a mismatched tool give pull-outs and hot joints (Hackaday 2023). Don't crimp onto solid-core house wire in place of the connectors your local rules require, and don't do mains installation work unless allowed (mains work must follow local law; e.g. Approved Document P in England). For wire ends going straight into screw or spring terminal blocks, use a Wire-end ferrule instead of tinning or a fork; for joining two wires end to end use a Crimped butt splice or Soldered wire joint; for small signal wires to a board use Wire-to-board plug connectors; for high-current plug-and-unplug battery leads use a High-current battery plug. Avoid blade terminals where vibration or a cable pull could shake them off unless they have a locking feature or insulating housing ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Heat: vinyl-insulated terminals are rated 75 °C, nylon 105 °C (Grote catalogue). Vibration and flexing: a correct crimp resists vibration (Wikipedia 'Crimp (joining)'), but repeated bending breaks wires at the barrel and screws can loosen; Wikipedia notes closed-barrel crimps are 'less resilient to vibration' than open-barrel (Wikipedia 'Crimp (joining)'). Corrosion: tin plating 'prevents corrosion' (Grote), and sealed adhesive heat-shrink terminals keep out 'water, corrosion, salt and moisture' (Grote); GM found star washers under vehicle ground terminals increase 'the chance for corrosion' (GM TechLink). Loosening: 'terminal screws loosened by vibration, improper tightening' raise resistance, causing heating and 'thermal creep, which will cause the termination to loosen further' (Wikipedia 'High resistance connection').
- **safety_notes**: Fire from poor joints: a loose or badly crimped terminal becomes a high-resistance connection that can reach 'temperatures above 1000 °C' and 'ignite most flammable materials', and fuses and RCDs can't detect it (Wikipedia 'High resistance connection'). A 3D-printer maker issued a recall because heater-cartridge crimp connections failed from flexing in the cable chain and could cause fires (Hackaday on the Wanhao Duplicator i3). Pull-test every crimp and replace any that move. Wrong tool or size: pull-outs and failures (Hackaday 2023). Batteries: make sure no power is on the cable being crimped, and near vehicle batteries a spark can ignite the hydrogen they give off; wear eye and face protection and keep fingers clear of the crimper's jaws (SG Tool Aid crimper instructions). Mains: these terminals appear in mains equipment, but this entry gives no mains wiring steps; mains work must follow local law (in England, Building Regulations Part P; Approved Document P, 2013 edition).
- **common_failures**: Wire pulls out: wrong die, wrong terminal size or a worn tool; use the matching ratcheting tool and pull-test (Hackaday 2023; NASA-STD-8739.4A §12.3). Poor crimp quality: strands left out, voids, over- or under-crimping, crushed or charred insulation (Wikipedia 'Crimp (joining)'). Wire breaking at the barrel after vibration or repeated flexing: add strain relief and keep crimps out of moving cable runs (Hackaday on the Wanhao recall). Overheated, browned or melted terminal or connector: loose screw, oxidised or poorly crimped joint (Wikipedia 'High resistance connection'; Hackaday 'Don't Leave 3D Printers Unattended'). Earth terminal not making contact because it is clamped on paint (Hammond ground kit bulletin). Corrosion under a vehicle ground terminal fitted with a star washer, which also stops the terminal reaching proper torque (GM TechLink). Blade terminal pulled off by a cable tug. Ring hole too big for the stud, so it seats on a small area ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Crimped butt splice: the same crimp barrel used to join two wires end to end
  - Wire-end ferrule: a crimped sleeve that tidies a stranded wire end for screw and spring terminal blocks, instead of a ring or fork
  - Screw terminal (terminal block, barrier strip): what ring and fork terminals are usually screwed into
  - Soldered wire joint and Solder sleeve: heat-made alternatives; crimp-solder-and-seal terminals combine both (Grote catalogue)
  - High-current battery plug (bullet connectors): plug-and-unplug ends for battery and motor leads
  - Wire-to-board plug connectors: the much smaller crimp contacts used in multi-pin plastic housings
  - Heat-shrink tubing: seals and insulates bare terminals and lugs
  - Spring-clamp wire connector: tool-free alternative for joining wires
  - Cable gland and strain relief: stops pulls reaching the crimp
  - Wave and disc springs: Belleville washers keep bolted busbar and lug joints tight

### Pictures, videos and models

- **links**: 
  - [Kabelschuh verschiedene commons.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg): Insulated ring and spade terminals, FASTON blade tabs and receptacles, and male and female bullet terminals side by side *(licence: CC BY-SA 3.0 / GFDL)*
  - [Kabelschuh detailfoto 2.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg): Close-up of two ring-tongue terminals before and after crimping *(licence: CC BY-SA 3.0)*
  - [Female Faston Style Terminals.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg): Insulated female blade receptacles in three sizes and colours, with a matchstick for scale *(licence: CC BY-SA 4.0)*
  - [Good In A Pinch: The Physics Of Crimped Connections (Hackaday, 2017)](https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/): Cross-section photo of a good open-barrel F-crimp and an explanation of the wire crimp, the insulation crimp and crimp height *(licence: link only)*
  - [Crimping tool 04.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg): A wire and terminal being crimped in a hand crimping tool *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [Quick Connector (For Spade Terminals) (Distracted by Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1599622-quick-connector-for-spade-terminals): Printed friction-fit two-wire plug and socket that houses standard male and female spade terminals, offset so it fits only one way *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Wire Ring Terminal Boot Protector (tubeless2276, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1306699-wire-ring-terminal-boot-protector): Scalable TPU insulating boot for ring terminals on 14-16 AWG wire (scale up for 10-12 AWG) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [PARKSIDE X20V_Team Battery connector with Faston terminal (Marin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/70578-parkside-x20v_team-battery-connector-with-faston-t): Printed power-tool battery adapter in which crimped male blade terminals are pressed into grooves and potted with epoxy to touch the battery's contacts *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- **diagram_idea**: Side-by-side drawings of ring, fork, blade (tab and receptacle) and bullet terminals, then a cut-away of an insulated terminal before and after crimping showing the wire crimp, the insulation grip, the colour sleeve, and a red arrow at the barrel end where an unsupported wire breaks.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Crimp_(joining)
  - https://en.wikipedia.org/wiki/FASTON_terminal
  - https://en.wikipedia.org/wiki/High_resistance_connection
  - https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://hackaday.com/tag/design-fail-manufacturing/
  - https://hackaday.com/2016/12/07/dont-leave-3d-printers-unattended-they-can-catch-fire/
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://www.grote.com/file-attachments/ACC_CAT_04_TERMINAL_CONN.pdf
  - https://images.toolsid.com/sg-tool-aid/items/pdf/18840-instructions.pdf
  - https://www.hammfg.com/files/parts/bulletins/BUL86513.pdf
  - https://www.corvetteactioncenter.com/tech/knowledgebase/article/26/1996-2005-corvette-gm-techlink-star-washers-in-grounds-349.html
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg
  - https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg
  - https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg
  - https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: crimper, heat gun, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, everyday_examples, making_tips_3d_printing, reuse_cycles, when_not_to_use

## 348 Crimped butt splice (crimp splice connector)

*electrical connections.* A short metal tube, usually inside a plastic or heat-shrink sleeve; one wire goes in each end and both are squeezed with a crimping tool, joining two wires end to end with no heat

*Also covers:* Also covers glue-lined heat-shrink butt splices, parallel and closed-end splices, and why a good crimp is gas-tight. Safety: the wrong tool or size gives pull-outs; pull-test every crimp

### What it is

- **plain_name**: A short metal tube, usually inside a coloured plastic sleeve, with one stripped wire pushed into each end; a crimping tool squeezes the tube flat onto both wires so they are joined end to end for good, with no heat or solder
- **term**: Crimped butt splice (butt splice connector, crimp splice connector)
- **aliases**: 
  - butt splice, butt connector, butt splice connector: 'A tube-shaped connector with two crimps for splicing wires in-line is called a butt splice connector' (Wikipedia 'Crimp (joining)')
  - crimp splice, crimp splice connector, in-line crimp splice, crimped splice (NASA-STD-8739.4A §19.9 'Crimped Splices')
  - insulated (pre-insulated) butt connector with a vinyl or nylon sleeve, and non-insulated (bare) butt splice: NASA says the butt splice 'is available in both an insulated and uninsulated version' (NASA-STD-8739.4A §19.12); 3M lists 'non-insulated brazed seam, vinyl insulated butted seam, nylon insulated seamless' constructions (3M MH-series data sheet)
  - heat-shrink butt connector, heat-shrink butt splice, glue-lined (adhesive-lined) heat-shrink butt splice, environment-resistant (sealed) crimp splice; product names include Scotchlok (3M, brand) and DuraSeal (TE Connectivity / Raychem, brand) (3M data sheet; TE drawing D-406-00XX; Gardner Bender AMT-123)
  - closed-end splice, closed-end connector, pigtail crimp connector: one cup-shaped barrel that takes two or more wires from the same side (Gardner Bender 20-090); NASA calls this layout an 'end type' splice, used 'to terminate two or more conductors in a pig-tail configuration' (NASA-STD-8739.4A §19.11)
  - parallel splice: 'used to dress and terminate multiple conductors, of the same or different gauges, in a parallel configuration' (NASA-STD-8739.4A §19.11)
  - crimp ferrule splice: wires crimped together inside a small metal ferrule (NASA-STD-8739.4A §19.11)
  - red, blue and yellow connectors: everyday names from the sleeve colour code for wire size (TE drawing D-406-00XX; Wikipedia 'Electrical connector', DIN 46245)
  - wire in-line junction device, 'Jiffy Junction': crimped pin contacts pushed into a shared splice tube, an aerospace relative (NASA-STD-8739.4A §19.13)
- **family**: electrical connections
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A crimped butt splice joins two wires end to end: each stripped end goes into one half of a short metal tube, a ratcheting crimp tool squeezes the tube so hard that metal and strands cold-weld into a gas-tight joint, and the plastic or glue-lined heat-shrink sleeve outside insulates it (and, for the glue-lined kind, seals it against water).
- **complexity**: A few parts, bought as one: a short tin-plated copper tube (the barrel), seamless or with a brazed or butted seam, usually with a centre stop so each wire goes in only halfway (3M data sheet: 'double-length, round seamless barrel with a center stop'); an insulating sleeve of vinyl, nylon or heat-shrink plastic, sometimes lined with hot-melt glue (TE drawing D-406-00XX; Gardner Bender AMT-123); and the two stripped wire ends. A closed-end splice is a single cup-shaped barrel in a nylon cap (Gardner Bender 20-090).
- **how_it_works**: Each stripped wire is pushed into its half of the tube until it reaches the stop, and a crimp tool with the right-sized die squeezes the tube onto it. The squeeze bends the metal past the point where it would spring back (its yield point), so the round strands are crushed into a tight honeycomb, their surface oxide is broken off, and they cold-weld to each other and to the tube, giving 'cold-welded, gas-tight junctions' (Hackaday 2017). Because wire and tube are both still slightly springy, they keep pressing on each other, creating 'a high degree of static friction' that holds the wire and makes the joint 'highly resistant to vibration and thermal shock'; being gas-tight, it 'prevents oxygen and moisture from reaching the metals' so they don't corrode (Wikipedia 'Crimp (joining)', 'Electrical connector'). In a glue-lined heat-shrink splice a hot-air gun then shrinks the sleeve and melts its glue lining onto the wire insulation, sealing the joint (TE drawing D-406-00XX; 3M data sheet).

### Finder attributes

- **job**: 
  - join and hold: joins two wires end to end (or several wires, in a closed-end or parallel splice) permanently and without heat; the finder reaches it through the 'electrical connections' family
  - seal it, or pass cables or fluid through: only the glue-lined heat-shrink type, which 'waterproofs and environmentally seals electrical connections' (Gardner Bender AMT-123)
- **motion**: none: the splice is rigid, and it must not sit where the cable bends: 'Splices shall not be located in areas of the cable where flexing may occur' (NASA-STD-8739.4A §7.2.36).
- **degrees_of_freedom**: 0: the wires are locked into the tube and can't move relative to each other.
- **special_behaviour**: none: it simply joins two wires; it doesn't move, lock or release.
- **holding_principle**: 
  - friction or clamping (force-fit): the crimp deforms the tube past its yield point so that 'the compressed wire causes tension in the surrounding connector, and these forces counter each other to create a high degree of static friction' (Wikipedia 'Electrical connector'); where the strands are pressed hardest they also cold-weld to the tube (Hackaday 2017; SparkFun 'How to Crimp')
  - material bond (glue, solvent or melting): only in glue-lined heat-shrink types, whose 'polyamide-based hot-melt adhesive liner' melts onto the wire insulation (TE drawing D-406-00XX); this seals the joint, while the crimp still carries the load
- **input_output**: not applicable
- **power**: passive (no power needed): heat is used only to shrink the sleeve of heat-shrink types, not to make the electrical joint.
- **removability**: permanent: 'Crimped contacts are permanent (i.e. the connectors and wire ends cannot be reused)' (Wikipedia 'Crimp (joining)'); to undo it, cut the splice out and strip fresh wire.
- **reuse_cycles**: once: each splice is used once, and every repair shortens the wires by the length cut out.
- **tools_needed**: A crimp tool matched to the splice. Best is a ratcheting crimper with die positions colour-coded red, blue and yellow to match the sleeves: 'it will ratchet and prevent the jaws from opening back up. When enough pressure has been applied, the ratchet will disengage' (SparkFun 'How to Crimp'); NASA requires full-cycle ratcheting tools (NASA-STD-8739.4A §12.3.1). Makers name tools for their own splices, e.g. 3M TH-440 or TH-450 scissor-style tools for Scotchlok heat-shrink splices and TE AD-1522 'or equivalent' for DuraSeal (3M data sheet; TE drawing D-406-00XX). 'Pliers are not crimpers! Neither are hammers, vises, needle nose pliers or flat rocks' (SparkFun). Also wire strippers, and a hot-air (heat) gun for heat-shrink types (TE; 3M).
- **seal**: none for bare, vinyl- and nylon-insulated splices (the sleeve only insulates); watertight for glue-lined heat-shrink splices, where the melted glue lining 'waterproofs and environmentally seals electrical connections' (Gardner Bender AMT-123), but only if the wire's insulation diameter is within the sleeve's stated range (TE drawing D-406-00XX, note 2).
- **load**: Electrical: up to about 30 A (the splice has no current rating of its own: 3M lists 'Max. Current: Same as Wire', and the common colour-coded sizes take 22-10 AWG wire (3M data sheet; TE drawing D-406-00XX); bare splices for heavy battery or welding cable go higher ⚑ [uncertain: no heavy-cable splice data opened]); rated for mains (listed splices are marked e.g. '600 V Building Wire, 1000 V Signs, Fixtures' (3M data sheet) or 600 V max (Gardner Bender AMT-123); closed-end connectors 300 V (Gardner Bender 20-090); but mains work must follow local law, see safety_notes). Mechanical: medium in a straight pull when made with the right tool: NASA's minimum crimp pull-out forces are 57 N (13 lb) for 22 AWG, 142 N (32 lb) for 18 AWG, 290 N (65 lb) for 14 AWG, 459 N (103 lb) for 12 AWG and 707 N (159 lb) for 10 AWG, or 60% of the wire's own tensile strength for sizes not listed (NASA-STD-8739.4A Table 12-1 and §12.3.5.c(4)). With the wrong tool or size 'You'll get pullouts and failures' (Hackaday 2023). Weak against repeated bending at the barrel ends: keep splices out of flexing parts of a cable (NASA §7.2.36). *(⚑ parts need confirming)*
- **adjustable**: no: once crimped it can only be cut out and replaced.
- **play_and_precision**: not applicable
- **access_needed**: both sides: you need both wire ends free to strip and insert (and, for heat-shrink types, the sleeve slid over), room round the splice for the crimp tool's jaws, and room to heat the sleeve.
- **materials**: Barrel: tin-plated annealed copper ('ETP Copper', 3M data sheet; 'Copper alloy C11000', TE drawing), seamless or seamed. Sleeve: vinyl (PVC), nylon, or heat-shrink polyolefin or cross-linked polyamide with a hot-melt glue lining (3M; TE; Gardner Bender). Wire: stranded copper is the normal partner ('Crimp connectors are typically used to terminate stranded wire', Wikipedia 'Crimp (joining)'). Solid wire is accepted by some types (closed-end connectors are 'designed to be used with both solid and stranded wire', Gardner Bender 20-090), but SparkFun warns that crimps on solid wire may create a weak point and are more likely to come loose. Size colour code: red 0.5-1.0 mm² (22-18 AWG), blue 1.5-2.5 mm² (16-14 AWG), yellow 3.0-6.0 mm² (12-10 AWG) (TE drawing D-406-00XX; 3M data sheet), matching DIN 46245 (Wikipedia 'Electrical connector'). Copper wire only unless the splice is marked for aluminium ⚑ [uncertain: no aluminium-rated butt splice data opened]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: no soldering skill or heat is needed and splices are cheap, but a reliable joint depends on a proper crimper with the right die and on matching splice size to wire size; with 'crappy crimp tools or crimps' or mismatched parts 'you're in for a lot of pain' (Hackaday 2023).

### Making it

- **processes**: 
  - off-the-shelf part: splices are bought and crimped by hand with a matching tool
  - 3D print (FDM): printed moulds, covers and clips that add strain relief over a finished splice (Printables models in make_it_yourself)
- **print_in_place**: no: the joint is cold-formed metal and can't be printed; only covers, jigs and strain-relief parts are printed.
- **making_tips_3d_printing**: The splice itself can't be printed, but prints help around it. 1) Route cables so splices sit in a fixed part of the harness, never in wire that bends with a printed hinge, carriage or drag chain: 'Splices shall not be located in areas of the cable where flexing may occur' (NASA-STD-8739.4A §7.2.36). 2) Make printed channels, clips and enclosures wide enough for the splice, which is much fatter than the wire, and stagger several splices along a bundle so they don't stack up: 'Splices shall be staggered to minimize buildup of the wire bundle diameter' (NASA §7.2.35). 3) Add strain relief: clamp the cable to the printed part on each side of the splice, or pot it in a printed two-part mould filled with hot glue; one popular mould 'should handle most types of slim splices including crimp and heat-gun-solder types' (Printables 736625). 4) Keep the heat gun off nearby printed parts while shrinking heat-shrink splices: polyolefin heat-shrink shrinks at about 143 °C (Wikipedia 'Heat-shrink tubing'), while PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa knowledge base 'PLA'); shrink the sleeve before fitting the splice into a printed housing, or shield the print. 5) Never print the barrel or the insulating sleeve for a current-carrying joint; the metal tube and the listed sleeve are what make it safe.
- **off_the_shelf_parts**: Insulated butt splices (butt connectors) with vinyl or nylon sleeves in red (22-18 AWG), blue (16-14 AWG) and yellow (12-10 AWG); heat-shrink and glue-lined (adhesive-lined) heat-shrink butt connectors, e.g. 3M Scotchlok MH18BC, MH14BC, MH10BC and TE Raychem DuraSeal (brands) (3M data sheet; TE drawing D-406-00XX); non-insulated (bare) butt splices; step-down butt splices with a different size at each end ⚑ [uncertain: seen only in search-result titles]; closed-end (pigtail) connectors (Gardner Bender 20-090); crimp ferrules for parallel splices (NASA §19.11); ratcheting crimp tools with colour-coded dies; wire strippers; hot-air guns. Search terms: 'butt splice', 'butt connector', 'heat shrink butt connector', 'closed end connector', 'ratcheting crimper insulated terminals'. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Pick the splice by wire size: red 0.5-1.0 mm² (22-18 AWG), blue 1.5-2.5 mm² (16-14 AWG), yellow 3.0-6.0 mm² (12-10 AWG) (TE drawing D-406-00XX; 3M data sheet). Wikipedia gives the DIN 46245 bands as red 0.5-1, blue 1.5-2.5 and yellow 'over 4 to 6' mm² (Wikipedia 'Electrical connector'), so read the range printed on the pack.
  - Strip length is about the length of the barrel half, so the wire reaches the centre stop and the insulation butts against the barrel: SparkFun says it 'should be equal to the length of the metal barrel on the connector, usually around 1/4 inch'; 3M says 3/8 inch for its heat-shrink splices; TE says 6-10 mm for 22-14 AWG and 10-13 mm for 12-10 AWG DuraSeal splices (SparkFun 'How to Crimp'; 3M data sheet; TE drawing).
  - Gap between the end of the insulation and the barrel: at least 0.25 mm, and no more than 0.75 mm for 20 AWG and thinner or 1.25 mm for 18 AWG and thicker; the wire ends should be 'visible in the wire inspection hole' (NASA-STD-8739.4A §10.1.4.b, §19.12.1a).
  - Several wires in one end: add up their cross-section areas (circular-mil areas) and multiply by 1.25 to get the 'equivalent wire size' for choosing the splice; insert the wires parallel, not twisted (NASA-STD-8739.4A §19.12.1c-d, §19.10.1b). SparkFun: make sure the combined wires fit and the connector can carry the current.
  - Pull-test every crimp. NASA's minimum pull-out forces: 57 N (13 lb) for 22 AWG, 92 N (21 lb) for 20 AWG, 142 N (32 lb) for 18 AWG, 183 N (41 lb) for 16 AWG, 290 N (65 lb) for 14 AWG, 459 N (103 lb) for 12 AWG, 707 N (159 lb) for 10 AWG (NASA-STD-8739.4A Table 12-1). At home, a firm hand pull is the practical check: 'If the connection can be pulled apart, the crimp was not done correctly' (SparkFun).
  - Crimp indents should be symmetrical and centred on each half of the barrel, and a single indent goes opposite the barrel's seam (NASA-STD-8739.4A §19.12.1g-h).
  - Cover bare splices with tubing that reaches past the splice onto the wire insulation by at least 2 x the largest wire's diameter at each end (NASA-STD-8739.4A §19.2.6).
  - Heat-shrink splices: heat the sleeve along its whole length 'until the crimp marks are gone and the ends of the sleeve recover onto the wires' (TE drawing D-406-00XX), or 'until tubing is completely shrunk and adhesive protrudes slightly from the tubing' (3M data sheet). The sealed type seals only on wire whose insulation diameter is within its stated range, and TE asks for wire rated at least 85 °C.

### When to use it

- **everyday_examples**: 
  - Joining a radio-control model's motor wires to its speed controller (photos on Wikimedia Commons)
  - Car, trailer, motorbike and boat wiring repairs, where glue-lined heat-shrink splices resist 'salt water, oil, gasoline' (Gardner Bender AMT-123)
  - The red, blue and yellow crimp connectors sold in hardware-store and car-accessory kits (TE drawing; 3M data sheet)
  - Closed-end 'pigtail' connectors capping several wires together in light fittings and appliances (Gardner Bender 20-090)
- **when_to_use**: When two wires must be joined permanently and the joint will be shaken, heated or cooled: vehicles, robots, boats, radio-control models and appliances. Crimps are 'highly resistant to vibration and thermal shock' (Wikipedia 'Crimp (joining)') and are 'credited in some contexts with being more reliable than solder joints, too, particularly in applications like aerospace or motorsport' (Hackaday 2023). Also when you can't or don't want to use heat near the work: crimping is done 'with zero heat' (Hackaday 2023) and avoids soldering's 'aggressive cleaning, high heat, and possibly toxic solders' (Wikipedia 'Crimp (joining)'). Choose glue-lined heat-shrink splices outdoors or where water, salt or oil can reach the joint (Gardner Bender AMT-123), closed-end splices to cap several wires together (Gardner Bender 20-090), and parallel splices to gather several wires side by side (NASA-STD-8739.4A §19.11).
- **when_not_to_use**: Not when you will want to undo the joint: use a Spring-clamp wire connector (lever connector), a Screw terminal or a plug-and-socket connector. Not without the right crimp tool and splice size: a pliers-squashed crimp is worse than a soldered joint (SparkFun; Hackaday 2023), so use a Soldered wire joint or a Solder sleeve instead. Not inside a cable that keeps bending (NASA-STD-8739.4A §7.2.36): move the joint to a fixed spot or run a continuous wire. Not where the slimmest, lightest joint matters: soldered splices give 'a smaller, more compact splice termination, with significant weight reductions over crimp-style splices' (NASA §19.3). Be wary on solid-core wire, where crimps may weaken the wire or loosen (SparkFun); a lever or push-in connector suits solid wire better. Not on aluminium wire unless the splice is marked for it ⚑ [uncertain: no aluminium-rated splice data opened]. For mains wiring use only a joint your local rules allow (see safety_notes). *(⚑ parts need confirming)*
- **environment_limits**: Heat: set by the sleeve and the wire: 3M heat-shrink splices are rated to 105 °C (3M data sheet); TE DuraSeal sealed splices are for wire rated at least 85 °C (TE drawing); polyolefin heat-shrink in general is rated −55 to 135 °C (Wikipedia 'Heat-shrink tubing'). Vibration and thermal cycling: good, because the crimp's springy pressure keeps it tight (Wikipedia 'Crimp (joining)'), though closed-barrel crimps (which a butt splice is) are 'less resilient to vibration' than open-barrel ones (same article), and the wire still breaks if it is flexed at the barrel end (NASA §7.2.36). Water and corrosion: a gas-tight crimp keeps oxygen and moisture out of the metal joint (Wikipedia), but plain insulated splices let water into the barrel ends; glue-lined heat-shrink types resist 'salt water, oil, gasoline and other environmental contaminants' (Gardner Bender AMT-123). Sunlight: coloured heat-shrink resists UV less well, and 'only black is recommended for outdoor applications' (Wikipedia 'Heat-shrink tubing'). Shelf life: 3M gives its heat-shrink splices a 5-year shelf life in humidity-controlled storage (3M data sheet).
- **safety_notes**: PULL-OUTS: the wrong tool, a mismatched splice or the wrong wire size gives crimps that pull out or work loose: 'You'll get pullouts and failures and all kinds of issues' (Hackaday 2023). Pull-test every crimp by hand before covering it: 'It is better to have the crimp fail now, versus after it has been installed in its application' (SparkFun). HEAT AND FIRE: a poor crimp 'leaves air pockets'; 'moisture causes corrosion, corrosion causes resistance, resistance causes heat' (SparkFun), and loose or poor connections can get hot enough to start a fire that fuses and RCDs 'cannot detect' (Wikipedia 'High resistance connection'). HEAT GUN: risk of burns; overheating scorches the sleeve, and hot air softens nearby printed parts (Wikipedia 'Heat-shrink tubing'; Prusa 'PLA'). MAINS: this entry gives no mains wiring steps, and mains work must follow local law. In England, electrical installation work in homes must meet Part P of the Building Regulations and some of it must be notified (Approved Document P, 2013 edition). UK wiring rules require every connection to stay accessible for inspection, with a few exceptions that include 'A joint made by welding, soldering, brazing or appropriate compression tool' (BS 7671 regulation 526.3(iv), quoted in IET Wiring Matters, Spring 2012). In US workplaces OSHA requires conductors to be joined with 'splicing devices identified for the use' and covered with insulation equivalent to the wire's (29 CFR 1910.303(c)(3)). Use only listed splices, crimped with the tool the maker names.
- **common_failures**: Wire pulls out: wrong die or tool, splice too big for the wire, or wire not pushed fully in; check that the wire ends show in the inspection hole (NASA §19.12.1a) and tug every crimp; one Hackaday commenter: 'always tug on them to make sure it's a sound connection… half the time they fall apart in your hand' (Hackaday 2023 comments). Squeezed with pliers: the barrel is crushed unevenly and leaves air pockets that corrode and heat up (SparkFun). Wrong squeeze: 'The compression force is not too light, nor too strong' and 'The connector body is not overly deformed' are quality criteria (Wikipedia 'Crimp (joining)'); SparkFun says over-crimping is almost impossible with a matched tool, so the usual cause is a mismatched die. Insulation caught in the crimp, or too much bare wire outside the barrel (NASA §10.1.4.b). Nicked or cut strands from stripping, or too few strands in the barrel, leaving voids (Wikipedia 'Crimp (joining)'; NASA §10.1.4). Heat-shrink not fully shrunk, or wire too thin for the sealed sleeve's range, so water gets in (TE drawing). A sleeve pierced by a sharp die ⚑ [uncertain: general caution, no source opened]. Wire snapping just outside the barrel after repeated bending: add strain relief and keep splices out of moving cable (NASA §7.2.36). Solder added on top of a crimp: SparkFun says it 'will add stress to the joint due to mechanical vibrations and thermal cycling', and Hackaday commenters disagree about whether it ever helps. *(⚑ parts need confirming)*
- **related**: 
  - Crimp terminals (ring, fork and spade terminals, blade quick-disconnect): the same crimp, but ending in a ring, fork or blade for a screw or tab instead of joining two wires
  - Soldered wire joint (soldered splice): smaller and lighter, but needs heat and skill and is weaker against vibration
  - Solder sleeve (solder-seal splice): heat-shrink with a solder ring and glue rings that solders and seals in one step with a heat gun, no crimper
  - Heat-shrink tubing (heat-shrink sleeve, adhesive-lined heat-shrink): the cover for bare splices; glue-lined tubing also seals
  - Wire-end ferrule (bootlace ferrule, end sleeve): a crimped tube on a single wire end, for screw and spring terminals
  - Spring-clamp wire connector (lever connector, push-in wire connector): tool-free and reusable, joins different wire types, but much bulkier
  - Twist-on wire connector (wire nut): screwed on by hand over twisted wires; not for vibration
  - Screw terminal (terminal block, barrier strip, connector strip): joins wires so they can be undone with a screwdriver
  - Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap): taps or joins without stripping; small currents only
  - Cable gland and strain relief: stops a pull or bend on the cable from reaching the splice
  - Clinching (press joining without rivets): the same idea of cold-forming metal into a lasting joint, but for sheet metal

### Pictures, videos and models

- **links**: 
  - [ESC and Motor Wires and Butt Connectors.JPG (Wikimedia Commons, by Shatton8111)](https://commons.wikimedia.org/wiki/File:ESC_and_Motor_Wires_and_Butt_Connectors.JPG): Wires from a radio-control speed controller and motor laid out ready to be joined with insulated butt connectors *(licence: CC BY-SA 3.0)*
  - [First Butt Splice Completed.jpg (Wikimedia Commons, by Rhorton4549)](https://commons.wikimedia.org/wiki/File:First_Butt_Splice_Completed.jpg): A finished crimped butt splice joining two cables *(licence: CC BY-SA 3.0)*
  - [NASA-STD-8739.4A Workmanship Standard for Crimping, Interconnecting Cables, Harnesses, and Wiring (2016), §19.9-19.13 and Fig. 12-1, pp. 54 and 74-79](https://nepp.nasa.gov/files/27631/nstd87394a.pdf): Photos of crimped modified-contact, end-type (pigtail), parallel and butt splices before and after crimping and sleeving, plus a figure of crimp pull-test failure types *(licence: US government (NASA) publication, generally public domain in the US ⚑ [uncertain])*
  - [Working with Wire, section 'How to Crimp an Electrical Connector' (SparkFun Learn)](https://learn.sparkfun.com/tutorials/working-with-wire/all): Photos of an insulated splice connector and other crimp terminals, ratcheting and manual crimp tools, correct strip length and a pull check *(licence: CC BY-SA 4.0)*
  - [Good In A Pinch: The Physics Of Crimped Connections (Hackaday, 2017)](https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/): A polished cross-section of a good crimp with the strands squeezed into a gas-tight honeycomb, and an explanation of crimp height *(licence: link only)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Wire Splice Mold - Slightly Modified (MushyUniverse, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/736625-wire-splice-mold-slightly-modified): Two-part printed mould that clamps round a finished splice (crimp or solder) and is filled with hot glue to give strain relief; sized for 14 AWG, with a 1-to-1 and a 1-to-2 side *(licence: Creative Commons Attribution-ShareAlike)*
  - [Cover for spliced cable (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/796341-cover-for-spliced-cable): Scalable printed cover that slips over a spliced cable and can be filled with epoxy or hot glue *(licence: Creative Commons Attribution-NonCommercial)*
  - [Strain Relief wire splice (Beefdip, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/829238-strain-relief-wire-splice): Printed strain-relief housing for joining three cables, with FreeCAD sources that scale to other cable sizes; filled with epoxy or hot glue after joining *(licence: Creative Commons Attribution)*
- **diagram_idea**: A cut-away of an insulated butt splice before and after crimping: two stripped wires entering a tube with a centre stop and inspection hole, then the crimped tube with the round strands squashed into a solid honeycomb (gas-tight zone highlighted) and the insulation stopping just short of the barrel; a side panel shows a glue-lined heat-shrink sleeve with glue oozing out at both ends, plus small icons of a closed-end (pigtail) splice and a parallel splice.
- **sources**: 
  - https://en.wikipedia.org/wiki/Crimp_(joining)
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://en.wikipedia.org/wiki/High_resistance_connection
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://learn.sparkfun.com/tutorials/working-with-wire/all
  - https://docs.rs-online.com/1969/0900766b813b0db0.pdf
  - https://assets.rs-online.com/v1698805178/Datasheets/84f1c9b9de59e2c68b8331c2185cc2a5.pdf
  - https://www.gardnerbender.com/en/p/AMT-123/Splice-Butt-He-Shrink-Adhesive-lined
  - https://www.gardnerbender.com/en/p/20-090/22-10-AWG-Closed-End-Pigtail-Crimp
  - https://help.prusa3d.com/article/pla_2062
  - https://electrical.theiet.org/media/1534/accessibility-of-connections-and-maintenance-free-junction-boxes.pdf
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://commons.wikimedia.org/wiki/File:ESC_and_Motor_Wires_and_Butt_Connectors.JPG
  - https://commons.wikimedia.org/wiki/File:First_Butt_Splice_Completed.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: crimper, heat gun, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, links, load, materials, off_the_shelf_parts, when_not_to_use

## 349 Spring-clamp wire connector (lever connector, push-in wire connector)

*electrical connections.* A spring inside a clear plastic body grips each stripped wire; lift a lever, or just push a solid wire in, and the spring sets the clamping force itself, so it never needs tightening and can be undone and reused

*Also covers:* Also covers PCB spring terminals, spring speaker terminals, the historic Fahnestock clip, and which wire types suit push-in and lever types. Wago and Lever-Nuts (brands) as aliases. Safety: mains use must follow local law.

### What it is

- **plain_name**: A small clear plastic block with a spring inside for each wire: you lift a little lever (or, on push-in types, just push a stiff wire in), the spring grips the bare copper with its own built-in force, and later you lift the lever (or twist and pull) to get the wire out again
- **term**: Spring-clamp wire connector (lever connector, push-in wire connector; spring-clamp terminal)
- **aliases**: 
  - lever connector, lever splicing connector, lever nut; 'Wago' (brand) and 'Lever-Nuts' (WAGO trade name, brand) are often used for any lever connector (AutomationDirect WAGO 221 catalogue; Hackaday 2023)
  - push-in wire connector, push-in connector, poke-home connector, push wire connector; PUSH WIRE (WAGO, brand) and In-Sure (Ideal, brand) are product names (SparkFun 'Connector Basics'; WAGO 'Connection technology'; Ideal In-Sure instructions)
  - spring terminal, spring-clamp terminal, cage clamp, spring-pressure connection; CAGE CLAMP and Push-in CAGE CLAMP are WAGO (brand) names (SparkFun 'Connector Basics': spring terminals 'a.k.a. push-in, cage-clamp, or poke-home connectors'; WAGO)
  - splicing connector, compact splicing connector, junction box connector (Wikipedia 'WAGO 221'; WAGO 'Connection technology')
  - PCB spring terminal, push-button terminal block, lever-type PCB terminal (SparkFun 'Spring Terminals - PCB Mount'; Same Sky TB0015-500)
  - spring speaker terminal, spring-clip speaker terminal (SparkFun 'Speaker Terminal - 4 Spring'); Wikipedia notes speaker binding posts that are 'screwed down or held down by a spring' (Wikipedia 'Speaker wire')
  - Fahnestock clip: the historic one-piece spring clip, patented in 1907 (Wikipedia 'Fahnestock clip')
  - maintenance-free (MF) connector or junction box: UK term for screwless terminals that pass the BS 5733 tests (IET Wiring Matters, Spring 2012)
  - screwless terminal (IET Wiring Matters 2012, quoting BS 5733)
- **family**: electrical connections
- **other_families**: quick-release & tool-free, clamping, magnetic & friction connections
- **one_liner**: A spring-clamp wire connector joins wires, or lands them on a board or terminal block, with a pre-loaded spring instead of a screw: each stripped wire has its own spring clamp, opened by a lever or button or simply pushed past by a stiff wire, which presses it onto a tinned copper bar with the same force every time, so the joint needs no tool, never needs tightening and can be undone and reused.
- **complexity**: A small assembly that acts as one unit: a transparent plastic housing (polycarbonate on WAGO 221), one spring-steel clamp per wire, a tinned copper current bar linking them, and on lever types one nylon lever per wire; many have holes for meter probes (test ports) (Wikipedia 'WAGO 221'; WAGO 'Connection technology'; AutomationDirect catalogue). PCB versions have a push button or small lever per way (Same Sky TB0015-500; SparkFun). A Fahnestock clip is a single bent strip of springy metal (Wikipedia 'Fahnestock clip').
- **how_it_works**: Inside, a flat spring is pre-loaded so it presses toward a tinned copper bar. Lifting the lever (or pressing a button or tab with a screwdriver or pen tip on board-mounted types) bends the spring open; you push the stripped wire in to the stop and close the lever, and the spring pinches the wire against the bar (Wikipedia 'WAGO 221'; SparkFun 'Connector Basics'). Push-in types have no lever: a stiff wire pushes the spring aside as it goes in ('The conductor rigidity is used to offset the clamping force'), and it can't be pulled straight out; you free it by 'simultaneously twisting and pulling', or with a release tool (WAGO 'Connection technology'; Ideal In-Sure instructions). Because the spring, not your hand, sets the force, 'the tension is automatically adjusted to the wire gauge', and the spring follows the wire as it expands and contracts with temperature (SparkFun 'Connector Basics'). A Fahnestock clip works the same way in one piece: press its tab to open a hole, slip the wire in and let go (Wikipedia 'Fahnestock clip').

### Finder attributes

- **job**: 
  - join and hold: joins two, three, five or more wires in one block, or lands a wire on a circuit board or terminal block, without tools (AutomationDirect catalogue); the finder reaches it through the 'electrical connections' family
  - lock, and release by hand: lever types let go of a wire when the lever is lifted and grip it again when it is closed
- **motion**: none once wired; the lever only moves while you fit or remove a wire.
- **degrees_of_freedom**: 0: the clamped wires can't move.
- **special_behaviour**: 
  - quick-release: lever types open and close by hand: 'Lever-operated termination — no tools required' (AutomationDirect catalogue). The spring also sets its own clamping force for each wire size, so there is nothing to tighten (SparkFun 'Connector Basics')
  - hand-release only: push-in types hold a wire against a pull and let go only when you twist it while pulling, or press the release with a tool: 'An operating tool is always required to remove the conductor' from a Push-in CAGE CLAMP terminal (WAGO 'Connection technology'; Ideal In-Sure instructions)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): a pre-loaded clamp of 'chrome nickel spring steel' presses the wire onto a tinned copper current bar (WAGO 'Connection technology')
  - friction or clamping (force-fit): the spring's pinch holds the wire by friction; push-in types resist a straight pull and release only when the wire is twisted (WAGO; Ideal; a Hackaday 2023 commenter on WAGO 2273: solid wires 'can not be pulled from those unless you twist them')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for lever types (lift the lever and pull the wire out); push-in types are removable by twisting and pulling a solid wire, or with an operating tool for Push-in CAGE CLAMP and push-button PCB terminals (WAGO 'Connection technology'; Ideal In-Sure instructions; SparkFun).
- **reuse_cycles**: many times for lever types, which are made to be opened and closed again ⚑ [uncertain: no rated number of cycles found on an opened page]; only a few times for push-in types, and only on solid wire of 'the same wire gage or larger' after cutting and re-stripping; 'DO NOT RE-USE connector on stranded wire' (Ideal In-Sure instructions). *(⚑ parts need confirming)*
- **tools_needed**: Usually only wire strippers; the clear housing lets you check the strip length and that the wire is fully in (AutomationDirect: 'Transparent housing for strip-length inspection and conductor insertion verification'). Push-in CAGE CLAMP terminal blocks need a small screwdriver or operating tool to open the clamp for fine-stranded wire and to release any wire (WAGO 'Connection technology'); PCB push-button and tab terminals can be pressed with 'a ball-point pen or a Phillips head screwdriver' (SparkFun). A ferrule crimper if fine-stranded wire is to go into a push-in terminal (WAGO).
- **seal**: none: the wire entries are open. For damp, outdoor or buried use WAGO sells a gel-filled enclosure (Gelbox) with 'IPX8-rated moisture-protection' that is 'Suitable for direct-burial applications' (AutomationDirect catalogue).
- **load**: Electrical: up to about 30 A (WAGO 221 lever connectors: 20 A for the 24-12 AWG size and 30 A for the 20-10 AWG size under UL, 'Up to 32A' and 'Up to 41A' under IEC, depending on wire size (AutomationDirect catalogue); WAGO 2273 push-in: 24 A (Rapid Online product page); PCB spring terminal blocks around 10 A UL / 17.5 A IEC (Same Sky TB0015-500)); rated for mains (WAGO 221: 600 V under UL 486C and 450 V under EN 60998 (AutomationDirect); Ideal In-Sure: '600 volts maximum building wire' (Ideal instructions)), but mains work must follow local law, see safety_notes. Mechanical: light to medium: the spring holds the wire firmly against vibration (SparkFun 'Connector Basics'; AutomationDirect: 'vibration-resistant'), but the small plastic body is not meant to carry the cable's weight or a tug, so fix the cables nearby ⚑ [uncertain: no pull-out figure found on an opened page]. *(⚑ parts need confirming)*
- **adjustable**: no: the spring sets the force, so there is nothing to adjust; on lever types wires can be added, swapped or removed at any time.
- **play_and_precision**: not applicable
- **access_needed**: one side only: on side-entry types all wires go in from one face and the levers are on top; inline types take one wire from each end (Wikipedia 'WAGO 221'; AutomationDirect). Leave room to lift the levers and to see through the clear housing.
- **materials**: Housing: transparent polycarbonate (flammability UL94 V-2) with nylon levers (Wikipedia 'WAGO 221'; AutomationDirect); clamp: chrome-nickel spring steel; current bar: tinned electrolytic copper (WAGO 'Connection technology'). PCB spring terminals: PA66 nylon housing (UL94 V-0), stainless-steel spring, tinned copper-alloy contacts (Same Sky TB0015-500). Fahnestock clips: phosphor bronze or spring steel, today usually nickel-plated (Wikipedia). WHICH WIRE SUITS WHICH TYPE: lever types take solid, stranded and fine-stranded (flexible) copper wire and can mix them; WAGO 221 takes fine-stranded wire from 0.14 to 4 mm² and solid or stranded from 0.2 to 4 mm² (24-12 AWG) in the small size, and all types from 0.5 to 6 mm² (20-10 AWG) in the large size (WAGO 221 page; Wikipedia 'WAGO 221'). Push-in types rely on the wire being stiff, so they are made for solid wire: WAGO PUSH WIRE takes 'rigid solid and stranded conductors' (WAGO 'Connection technology'); Ideal In-Sure takes 12-20 AWG solid wire (reusable) but stranded wire only in 12-16 AWG with fewer than 19 strands or 18 AWG with 7 strands, and then not reusable (Ideal instructions); WAGO 2273 is listed for solid wire 0.5-2.5 mm² (Rapid Online). Fine-stranded wire needs a lever type, or a ferrule plus a Push-in CAGE CLAMP terminal ('ferruled, fine-stranded conductors can be terminated by simply pushing them in', WAGO). Copper wire only ('For copper conductors only', AutomationDirect; 'COPPER TO COPPER ONLY', Ideal), except WAGO's note that aluminium wire can be used with its Alu-Plus contact paste (Wikipedia 'WAGO 221').
- **maker_difficulty**: easy: buy them and fit them by hand; just strip to the marked length, push the wire fully home and close the lever.

### Making it

- **processes**: 
  - off-the-shelf part: the connector itself is bought; its spring and current bar can't be printed
  - 3D print (FDM): printed mounts, holders, DIN-rail clips, junction boxes and power-distribution blocks for lever connectors are very common (Printables models in make_it_yourself)
- **print_in_place**: no: the connector is bought; printed holders are separate parts that the connector snaps or screws into.
- **making_tips_3d_printing**: 1) Print holders, not connectors: the spring and tinned bar make the contact, and a printed body carrying current is unsafe. 2) Snap-fit holders depend on your printer's tolerances and bridging; the designer of one parametric OpenSCAD holder recommends 'printing a single-position bracket first and testing the snap fit before printing more' and warns that 'creep may be an issue, especially with PLA' (Printables 1364964). 3) Leave room above for the levers to swing fully open, keep the clear sides and test ports visible, and add a hole for pushing the connector out with a screwdriver, as one popular mount does (Printables 941104). 4) Typical mounts use M3 screws and nuts, or clip onto 2020/3030 extrusion or DIN rail; one popular mount prints 'side with the numbers' down at 40% infill (Printables 941104). 5) Use PETG, ABS or ASA for holders near warm power supplies or heated beds: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa knowledge base 'PLA'), while standard WAGO 221 connectors are rated for surrounding air up to 85 °C (AutomationDirect). 6) Add cable-tie points or clamps so the cables, not the connector, take any pull (IET Wiring Matters 2012, quoting BS 7671 reg. 522.8.5: no 'appreciable mechanical strain on the terminations'). 7) For mains, a printed box is not a certified enclosure: UK junction boxes must be marked as meeting BS EN 60670-22, and BS 5733 'MF' where they will be hidden (IET Wiring Matters 2012); one printed distribution-block designer adds: 'Mains voltage is hazardous… follow the safety codes that apply in your area' (Printables 551482).
- **off_the_shelf_parts**: Lever splicing connectors: WAGO 221-412, 221-413, 221-415 (2, 3 and 5 wires up to 4 mm²), 221-612, 221-613, 221-615 (up to 6 mm²), 221-2401 inline (brands) and generic lever connectors; push-in splicing connectors: WAGO 2273 COMPACT PUSH WIRE, WAGO 2773 PUSHWIRE, Ideal In-Sure (brands); PCB spring terminal blocks with a push button or lever (e.g. Same Sky TB0015-500); DIN-rail spring and push-in terminal blocks (WAGO CAGE CLAMP and Push-in CAGE CLAMP); spring speaker-terminal plates (SparkFun); Fahnestock clips for teaching kits (Wikipedia); gel-filled boxes for wet places (WAGO Gelbox 207 series, AutomationDirect). Search terms: 'lever splicing connector', 'push-in wire connector', 'spring terminal block PCB', 'push-in terminal block', 'speaker terminal spring clip', 'Fahnestock clip'.
- **rules_of_thumb**: 
  - Strip length: 11 mm for WAGO 221 small housings (0.2-4 mm²) and 12-14 mm for large ones (0.5-6 mm²) (AutomationDirect catalogue); 11 mm for WAGO 2273 push-in (Rapid Online); 1/2 inch for Ideal In-Sure (Ideal instructions); 9-10 mm for one 5 mm-pitch PCB push-button terminal (Same Sky TB0015-500). Check through the clear housing that the wire reaches the stop and no bare copper shows outside.
  - One wire per clamping point: 'Use only one conductor per port' (Ideal); WAGO's funnel-shaped entry 'prevents connecting multiple conductors in one clamping unit' (WAGO 'Connection technology'). For more wires choose a 3-, 5- or 10-way connector (AutomationDirect).
  - Match the type to the wire: push-in for solid (and stiff stranded) wire; lever for fine-stranded, flexible and mixed wires; fit a ferrule if fine-stranded wire must go into a push-in terminal (WAGO 'Connection technology'; Ideal instructions; Hackaday 2023: 'the Wago connector can be used to join different wire types and gauges quite easily').
  - WAGO 221 ratings: 20 A (24-12 AWG) or 30 A (20-10 AWG) under UL, 600 V UL / 450 V IEC, surrounding air −40 to +85 °C (AutomationDirect); each side of the housing carries the rating for a different standard (Wikipedia 'WAGO 221'), so read the one that applies where you are.
  - Re-using push-in connectors: only on solid wire of the same size or larger, after cutting and re-stripping; never after stranded wire (Ideal In-Sure instructions).
  - Spring terminals 'work better in environments with a lot of vibrations (i.e. automotive applications) or when a wire expanding/contracting due to temperature cycling' than screw terminals (SparkFun 'Connector Basics').

### When to use it

- **everyday_examples**: 
  - Clear lever connectors joining the wires of a ceiling light or inside a junction box (Wikipedia 'WAGO 221'; Hackaday 2023)
  - The spring clips on the back of home stereo speakers and amplifiers (SparkFun 'Speaker Terminal - 4 Spring')
  - Small push-tab terminals on hobby boards that you press with a pen to release the wire (SparkFun: gamer:bit)
  - Fahnestock clips on school electricity kits and home-made crystal radios (Wikipedia 'Fahnestock clip')
  - Lever connectors in printed mounts inside 3D printers and Voron-style printer wiring (Printables)
- **when_to_use**: When you want a joint that is quick, needs no special tool or skill, and can be opened again: prototypes, test rigs, 3D-printer and robot wiring that will change, and joining different wire types, e.g. solid to flexible ('By using a seperate lever and contact for each wire to be joined, the Wago connector can be used to join different wire types and gauges quite easily', Hackaday 2023). Good where screws would loosen with vibration or temperature cycling (SparkFun 'Connector Basics'). The clear body lets you check strip length and insertion, and test ports let you probe without opening it (Wikipedia 'WAGO 221'; WAGO 221 page). Push-in types are the fastest for solid wire; PCB spring terminals suit boards whose wires are changed often (SparkFun). In UK buildings, screwless connectors in boxes certified maintenance-free (marked MF to BS 5733) may go where they can't be reached later, unlike screw connector strips (IET Wiring Matters 2012).
- **when_not_to_use**: Not inside a slim cable or where size and weight matter: it is far bulkier than a Crimped butt splice or Soldered wire joint, which suit permanent in-line joins. Not for flexible (fine-stranded) wire in a push-in type, which can't push the spring open and isn't reusable there (Ideal; WAGO): use a lever type or fit ferrules. Not outdoors, buried or in damp places unless inside a gel-filled or sealed box (AutomationDirect: Gelbox for 'Wet locations, outdoor, moisture-prone'). Not on aluminium wire without the maker's approval and paste (Wikipedia 'WAGO 221'; Ideal: 'Do Not Use on Aluminum wire'). Not as the cable's anchor: fix the cable separately (IET Wiring Matters 2012, BS 7671 reg. 522.8.5). Not above its temperature rating, e.g. next to heaters; standard WAGO 221 connectors have 'a maximum operating temperature of 85 °C' (Wikipedia 'WAGO 221'). For a cheap, compact row of board connections where vibration isn't a worry, a Screw terminal does the same job.
- **environment_limits**: Heat: WAGO 221 surrounding air −40 to +85 °C, continuous up to 105 °C (AutomationDirect; WAGO 221 page: 'T85'); Ex e versions to 105 °C (Wikipedia 'WAGO 221'); Ideal In-Sure '105°C (221°F) maximum' (Ideal instructions); PCB spring terminal blocks −40 to 105 °C (Same Sky TB0015-500). Vibration and temperature cycling: good, because the spring keeps its force (SparkFun; WAGO calls its connections 'vibration-proof'); UK maintenance-free terminals must pass tests for long-term connection, vibration, overload and thermal shock (IET Wiring Matters 2012, BS 5733 §14.5). Water: not sealed; IPX8 only inside a gel box (AutomationDirect). Spring relaxation over the years: makers claim 'maintenance-free' connections (WAGO), but no independent long-term figure was found ⚑ [uncertain]. Flammability: WAGO 221 housing is UL94 V-2 polycarbonate (AutomationDirect). *(⚑ parts need confirming)*
- **safety_notes**: MAINS: this entry gives no mains wiring steps, and mains use must follow local law. In England, electrical installation work in homes must meet Part P of the Building Regulations and some of it must be notified (Approved Document P, 2013 edition). Under UK wiring rules (BS 7671 regulation 526.3) every connection must stay accessible for inspection, testing and maintenance unless it falls under an exception such as 'Equipment complying with BS 5733 for maintenance-free accessory and marked with the symbol [MF] and installed in accordance with the manufacturer's instructions' (IET Wiring Matters, Spring 2012). In US workplaces OSHA requires conductors to be joined with 'splicing devices identified for the use' (29 CFR 1910.303(c)(3)). The maker's own warning: 'Contact with electricity can cause electrical fires, personal injury, or death. Shut off power to the circuit before using this product and consult local building codes' (Ideal In-Sure instructions). Use certified connectors within their printed ratings; cheap look-alikes are common and their ratings are unverified ⚑ [uncertain: Hackaday commenters discuss clones, but no test was opened]. POOR CONTACT: a wire not pushed to the stop, stripped too short, or fine-stranded wire in a push-in port makes a poor contact that can overheat; loose or poor connections can start fires that fuses and RCDs 'cannot detect' (Wikipedia 'High resistance connection'). Check every wire through the clear housing (AutomationDirect). *(⚑ parts need confirming)*
- **common_failures**: Wire not fully inserted, or stripped to the wrong length, so bare copper sticks out or the spring grips the insulation; check through the clear body (AutomationDirect; WAGO 221 page). Fine-stranded wire pushed into a push-in connector, where the strands splay and don't hold (WAGO; Ideal). Two wires forced into one port (Ideal; WAGO). A lever left partly open ⚑ [uncertain: general caution]. Pulling a push-in wire straight out: it won't come; twist while pulling (WAGO; Ideal). Re-using a push-in connector after stranded wire (Ideal). Overloading: a 20 A size used on a bigger load, or the UL and IEC ratings confused (AutomationDirect). Cable weight hanging on the connector instead of being clamped (IET Wiring Matters 2012). Aluminium wire without the maker's paste (Wikipedia 'WAGO 221'). A gel box reopened and reused: AutomationDirect says it 'may be reopened only to add or remove a conductor', and a new connector needs a new Gelbox. Printed PLA mounts creeping or softening near warm parts (Printables 1364964; Prusa 'PLA'). *(⚑ parts need confirming)*
- **related**: 
  - Screw terminal (terminal block, barrier strip, connector strip): you set the clamping force by tightening a screw; smaller and cheaper per way, but can work loose
  - Twist-on wire connector (wire nut): the hand-twisted North American splice that lever connectors often replace
  - Crimped butt splice (crimp splice connector): small, permanent and slim enough for a harness, but needs a crimper
  - Soldered wire joint (soldered splice): permanent and compact; needs heat
  - Wire-end ferrule (bootlace ferrule, end sleeve): lets fine-stranded wire go into push-in and screw terminals
  - Binding post and banana plug (test-lead connector, crocodile clip): screw-cap and spring-plug connections for test leads
  - Battery holder and battery contacts: springs pressing on battery ends rather than gripping a wire
  - Pogo pin (spring-loaded contact pin): a spring presses a pin onto a pad; no wire is clamped
  - Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap): grips insulated wire without stripping
  - DIN-rail clip (top-hat rail snap mount): how rail-mounted spring terminal blocks are fixed

### Pictures, videos and models

- **links**: 
  - [WAGO 221 mechanism.png (Wikimedia Commons, by im_tau)](https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png): Diagram of the inside of a lever connector: lever, spring, copper busbar and test contact *(licence: CC BY 4.0)*
  - [Cage Clamp.jpg (Wikimedia Commons, WAGO design department)](https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg): A spring-force cage clamp with a conductor in it *(licence: CC BY-SA 4.0)*
  - [WAGO 2273-200C.JPG (Wikimedia Commons, by Dmitry G)](https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG): Push-in (push wire) splicing connectors *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Fahnestock clip.png (Wikimedia Commons, from a 1912 Central Scientific Co. catalogue)](https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png): Drawing of a Fahnestock clip gripping a stripped wire, released by pushing the tab down *(licence: Public domain in the US (published before 1923))*
  - [WAGO 221 Series LEVER-NUTS catalogue pages (AutomationDirect)](https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf): Photos of the open-lever, insert-wire, close-lever steps, correct strip length and insertion seen through the clear housing, ratings tables and the gel-filled box *(licence: link only)*
- **make_it_yourself**: 
  - [Parametric Wago 221 lever nut holder (Adam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1364964-parametric-wago-221-lever-nut-holder): OpenSCAD parametric bracket that lever connectors snap into, with screw ears; designer advises test-printing one slot first and warns of creep in PLA *(licence: Creative Commons Attribution-ShareAlike)*
  - [WAGO 221 Mount - 11 Variations (VC Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/941104-wago-221-mount-11-variations): Snug-fit mounts for 3- and 5-way lever connectors, fixed with two M3 bolts, with a poke-through hole to release the connector *(licence: Creative Commons Attribution)*
  - [Wago 221 Power Distribution Block (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/551482-wago-221-power-distribution-block): Printed block holding several lever connectors to share a power feed, with magnet, screw and hang-tab mounting options and STEP files for remixing *(licence: Creative Commons Attribution)*
  - [Wago 221 mounts (fns720, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/66531-wago-221-mounts): Simple screw-on mounts for 3- and 5-way lever connectors, with Fusion 360 source *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- **diagram_idea**: Three side-by-side cut-aways: a lever connector with the lever up (spring bent open, stripped wire sliding in) and lever down (spring pressing the wire onto the copper bar); a push-in connector with a solid wire pushing the spring aside and an arrow showing 'twist and pull' to remove it; and a Fahnestock clip with its tab pressed down to open the hole.
- **sources**: 
  - https://en.wikipedia.org/wiki/WAGO_221
  - https://en.wikipedia.org/wiki/Fahnestock_clip
  - https://en.wikipedia.org/wiki/High_resistance_connection
  - https://en.wikipedia.org/wiki/Speaker_wire
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf
  - https://www.wago.com/au/products/electrical-interconnections/connection-technology
  - https://www.wago.com/gb/electrical-interconnections/splicing-connectors-221
  - https://assets.testequity.com/te1/Documents/pdf/Ideal/Ideal_30-087J_Instructions_0924.pdf
  - https://rapidonline.com/21-5768
  - https://www.farnell.com/datasheets/4790133.pdf
  - https://electrical.theiet.org/media/1534/accessibility-of-connections-and-maintenance-free-junction-boxes.pdf
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png
  - https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg
  - https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG
  - https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: crimper, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, load, reuse_cycles, safety_notes

## 350 Screw terminal (terminal block, barrier strip, connector strip)

*electrical connections.* A stripped wire is clamped by tightening a screw, directly under its head or under a plate, on boards, power supplies and connector strips, so wires can be undone later with a screwdriver

*Also covers:* Also covers clamping-plate and screw-head types, barrier strips with ring or fork terminals, pluggable terminal blocks, connector-strip enclosures and busbars. Chocolate block as an alias. Safety: never tin wire ends before clamping (solder creeps and the joint loosens and heats); screws loosen with vibration.

### What it is

- **plain_name**: A small metal clamp with a screw in it: you push a stripped wire into a hole or under a plate and tighten the screw to pinch it, and undo the screw to free it again; rows of them sit on circuit boards, power supplies and plastic connector strips
- **term**: Screw terminal (screw terminal block, barrier strip, connector strip)
- **aliases**: 
  - terminal block, terminal board, terminal strip (Wikipedia 'Electrical connector')
  - barrier strip, barrier terminal block: pairs of screws on metal strips separated by raised insulating 'barriers', often used with crimped ring or spade lugs (Wikipedia 'Screw terminal', 'Electrical connector')
  - connector strip, chocolate block, choc block (UK nicknames; the first ones, made by GEC in the 1950s in brown plastic, 'were said to resemble a small bar of chocolate', Wikipedia 'Screw terminal'); luster terminal (Wikimedia Commons caption); kroonsteen (Dutch, Printables 32652)
  - PCB terminal block, PCB screw terminal: a block with pins soldered into a circuit board (Wikipedia 'Screw terminal'; Same Sky TB001-500)
  - pluggable terminal block, two-piece terminal block, Euroblock ('European-style terminal block'), Phoenix connector, Combicon (Phoenix Contact, brand) (Wikipedia 'Euroblock')
  - clamping-plate (compression) screw terminal versus basic screw-head terminal (Wikimedia Commons 'Screw Terminals. Basic and Compression Types'; Wikipedia 'Screw terminal')
  - set-screw terminal, pressure connector (set-screw type) (Wikipedia 'Screw terminal'; OSHA 29 CFR 1910.303(c)(2))
  - busbar: a long terminal strip with several screws on one metal bar, used to share power (Wikipedia 'Screw terminal', 'Busbar')
  - earth (grounding) screw: often green, with a toothed washer (Wikipedia 'Screw terminal')
  - Chocbox (brand): a snap-shut box enclosing a connector strip (Wikipedia 'Chocbox')
- **family**: electrical connections
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A screw terminal holds a stripped wire (or a crimped ring, fork or ferrule) by tightening a screw onto it, either under the screw head, under a clamping plate or with a set screw in a metal tube; it is the cheap, reusable way to land wires on boards, power supplies, barrier strips and connector strips and to undo them later with a screwdriver.
- **complexity**: A few parts per way: a metal body (a tube, box clamp or plate of tinned copper alloy or brass), a steel screw, often a separate clamping plate, an insulating housing or barrier strip, and on PCB types pins for soldering; e.g. Same Sky TB0014-500 lists tin-plated copper-alloy contacts, a zinc-plated steel screw, a nickel-plated copper-alloy clamp and a PA66 nylon housing. Pluggable types add a plug and a matching board header (Wikipedia 'Euroblock'); connector strips are brass tubes 'loosely encased in an insulating block with a set screw at each end' (Wikipedia 'Screw terminal').
- **how_it_works**: Turning the screw drives it, or a plate it pushes, against the wire, squeezing the strands between metal surfaces so they touch over a large area; when properly tightened 'the connections are physically and electrically secure because they firmly contact a large section of wire' (Wikipedia 'Screw terminal'). There are three common layouts: the wire wrapped clockwise under the screw head, so tightening pulls it in; the wire slid between a clamping plate and the terminal body, so the screw presses the plate; or a set screw in the side of a metal tube, as in connector strips (Wikipedia 'Screw terminal'). The joint is only good while the screw stays tight: vibration, poor tightening or soft metal that slowly flows under pressure (creep) let it loosen, the resistance rises and the joint heats, which makes it loosen further (Wikipedia 'High resistance connection').

### Finder attributes

- **job**: 
  - join and hold: lands a wire on a board, device or panel, or joins wires in a connector strip or barrier strip, and can be undone with a screwdriver; the finder reaches it through the 'electrical connections' family
- **motion**: none
- **degrees_of_freedom**: 0: the clamped wire can't move while the screw is tight.
- **special_behaviour**: 
  - none: it simply clamps. (Pluggable Euroblock versions add a plug, so a whole row of wires can be unplugged at once and 'quickly disconnected from or connected to the electronic device', Wikipedia 'Euroblock'.)
- **holding_principle**: 
  - friction or clamping (force-fit): the screw squeezes the wire against metal (Wikipedia 'Screw terminal')
  - shape (the parts interlock; form-fit): a crimped ring terminal round the screw can't slide off, while a fork can once the screw is loose; SparkFun: 'the ring terminal provides a more reliable connection', but 'you would need to completely remove the screw' to fit it (SparkFun 'Working with Wire'; Wikipedia 'Electrical connector')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: undo the screw with a screwdriver; 'The terminals easily can be re-used in the field, allowing for the replacement of wires or equipment, generally with standard hand tools' (Wikipedia 'Screw terminal').
- **reuse_cycles**: many times: the terminal can be re-used (Wikipedia 'Screw terminal'), but cut and strip a fresh wire end, or fit a new ferrule, if the old end has been squashed ⚑ [uncertain: general practice, no source opened]. *(⚑ parts need confirming)*
- **tools_needed**: A screwdriver of the right type and size: 'a flat-blade screwdriver, a cross-blade screwdriver, hex key, Torx key, or other tool' (Wikipedia 'Screw terminal'), ideally a torque screwdriver set to the datasheet value (e.g. 0.5 N·m for small M3 PCB terminals, Same Sky); wire strippers; a ferrule crimper for stranded wire (Wikipedia; Hackaday 2018); a ring/fork terminal crimper for barrier strips (Wikipedia 'Electrical connector').
- **seal**: none: open terminals, and screw terminals 'are generally not very well protected from contact with persons or foreign conducting materials' (Wikipedia 'Electrical connector'); enclose them, e.g. in a connector-strip box such as Chocbox (brand) (Wikipedia 'Chocbox') or a printed cover.
- **load**: Electrical: up to about 30 A for the small PCB terminal blocks, barrier strips and connector strips makers use (e.g. Same Sky TB001-500: 15 A under UL and 24 A under IEC; TB0014-500: 12 A UL / 15 A IEC), although the type as a whole covers 'a fraction of an ampere up to several hundred amperes' (Wikipedia 'Screw terminal'); rated for mains when the block is certified for it (these PCB blocks: 300 V UL / 250 V IEC; screw terminals are used throughout building wiring, Wikipedia), but mains work must follow local law, see safety_notes. Mechanical: medium hold against a pull while tight, weak once loose; vibration loosens it ('Vibration or corrosion can cause a screw connection to deteriorate over time', Wikipedia 'Screw terminal'; 'they can come undone fairly easily', SparkFun 'Connector Basics').
- **adjustable**: yes: the screw can be re-tightened and the wire changed at any time; the clamping force depends on how tightly it is done up (Wikipedia 'Screw terminal').
- **play_and_precision**: not applicable
- **access_needed**: one side only: you need to reach the screw heads with a screwdriver and the wire entries with the wire; in UK fixed mains installations screw connectors must also stay reachable afterwards for servicing (Wikipedia 'Screw terminal').
- **materials**: Body and clamp: tin-plated copper alloy or brass, nickel-plated clamp, zinc-plated steel screw, PA66 nylon housing rated UL94 V-0 (Same Sky TB0014-500, TB001-500). Wire: solid copper wire can be clamped bare; stranded wire should have a crimped ferrule so the strands can't splay or bridge to the next terminal (Wikipedia 'Screw terminal'; Hackaday 2018), and barrier strips take crimped ring or spade lugs (Wikipedia 'Electrical connector'). Never tin stranded wire with solder before clamping: 'the soft metal will cold flow, resulting in a loose connection and possible fire hazard' (Wikipedia 'Screw terminal'). Each block takes a set wire range, e.g. 26-14 AWG (0.2-2.5 mm²) or 22-12 AWG (Same Sky); 'wires that are too small can be as big a problem as wires that are too big' (SparkFun 'Connector Basics'). Aluminium wire needs terminals 'identified for the material of the conductor' (OSHA 29 CFR 1910.303(c)(1)).
- **maker_difficulty**: easy: needs only a screwdriver and wire strippers, but a lasting joint needs the right wire size, a ferrule on stranded wire and the right tightness.

### Making it

- **processes**: 
  - off-the-shelf part: PCB terminal blocks, barrier strips, connector strips and busbars are bought
  - 3D print (FDM): printed covers, mounts, strain-relief clamps and enclosures for bought terminals; simple printed hobby terminal blocks that use a metal screw, nut and washers also exist (Printables 308134, 164503)
- **print_in_place**: no: the metal parts carry the current; printed parts are separate housings, covers or clamps.
- **making_tips_3d_printing**: 1) Buy the terminal and print around it. A printed housing under a constantly tight screw creeps (a printed clamp holder's designer warns that 'creep may be an issue, especially with PLA', Printables 1364964), and commercial terminal housings are flame-rated nylon (PA66, UL94 V-0, Same Sky), which ordinary filament isn't ⚑ [uncertain: flammability of printing filaments not checked on an opened page]. 2) If you print a hobby terminal block, make the current path all metal: one Printables design uses 'M3 Screws 7mm', an M3 nut and two M3 washers per way and says it 'is for hobby use' (Printables 308134); keep such blocks to low-voltage, low-current wiring. 3) Print covers that stop fingers and loose wires touching live screws; one connector-strip cover is made tight on the cable on purpose to give 'stress/pull relieve on the actual screw terminal itself' (Printables 32652). 4) Print cable clamps so a tug or a moving cable never reaches the terminal, as in heated-bed cable clamps for printers with screw-terminal beds (Printables 84842). 5) Use PETG, ABS or ASA near power supplies, heated beds and warm terminals: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa knowledge base 'PLA'). 6) Leave screwdriver access and a view of each wire entry, and line printed wire holes up with the terminal holes. 7) In 3D printers, fit ferrules to stranded heated-bed and power wires and tighten firmly: 'melted terminal blocks are a common complaint with many DIY 3D printer kits' (Hackaday 2018), and Prusa's guide warns that 'Loose or incorrect connections can lead to printer malfunction or pose a serious fire hazard' (Prusa CORE One heatbed guide). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: PCB screw terminal blocks in 2.54, 3.5, 5 and 10 mm pitch that clip together side by side for longer rows (SparkFun 'Connector Basics'; Same Sky TB001-500 'interlocking (side)'); pluggable terminal blocks (Euroblock, 'Phoenix connector') with plug and board header (Wikipedia 'Euroblock'); barrier strips used with crimped ring or spade terminals (Wikipedia 'Electrical connector'); connector strips (chocolate blocks) and connector-strip boxes such as Chocbox (brand) (Wikipedia); DIN-rail screw terminal blocks; busbars and earth bars (Wikipedia 'Screw terminal', 'Busbar'); wire-end ferrules and crimp ring/fork terminals; torque screwdrivers. Search terms: 'PCB terminal block 5 mm', 'barrier terminal strip', 'pluggable terminal block', 'connector strip', 'busbar terminal block'.
- **rules_of_thumb**: 
  - Tighten to the datasheet torque: small M3 PCB terminal blocks are typically specified at 0.5 N·m (Same Sky TB001-500 and TB0014-500); 'Verifying adequate tightening torque requires calibrated installation tools and proper training' (Wikipedia 'Screw terminal').
  - Strip only as much as the clamp holds: 5-6 mm for these 5 mm-pitch PCB blocks (Same Sky), so no bare wire shows outside and no insulation sits under the clamp.
  - Stay within the wire range printed on the block (e.g. 26-14 AWG / 0.2-2.5 mm² for Same Sky TB0014-500; 22-12 AWG for TB001-500); a thin wire 'may be cut through by the over-tightening of the screw', which is 'less likely to occur when a wire is clamped between two plates' (Wikipedia 'Screw terminal').
  - A wire under a screw head must be 'wound' in the tightening direction, 'usually clockwise', 'so that the conductors are not forced outwards when the screw is tightened' (Wikipedia 'Screw terminal').
  - Stranded wire: crimp on a ferrule; never tin it with solder (Wikipedia 'Screw terminal'; Hackaday 2018). For barrier strips, a ring lug is the most secure (the screw must come out to fit it); a fork lug fits with the screw only loosened (SparkFun 'Working with Wire'; Wikipedia 'Electrical connector').
  - Typical 5 mm-pitch PCB screw terminal ratings: 300 V and 12-15 A under UL, 250 V and 15-24 A under IEC, −40 to 105 °C (Same Sky TB0014-500, TB001-500); check the datasheet of the actual part.
  - Where wires keep working loose on a board, 'A small dab of hot glue can address this without being too difficult to remove later' (SparkFun 'Connector Basics').

### When to use it

- **everyday_examples**: 
  - The screw terminals inside wall switches, sockets and light fittings, and the plastic connector strips ('chocolate blocks') used to join light fittings (Wikipedia 'Screw terminal')
  - Green or blue screw terminals on Arduino shields, motor drivers, LED power supplies and 3D-printer boards (SparkFun 'Connector Basics'; Hackaday 2018)
  - Barrier strips and terminal strips in alarm panels, public-address speaker wiring and building control systems (Wikipedia 'Screw terminal')
  - The green earth screw with a toothed washer on equipment cases (Wikipedia 'Screw terminal')
  - Green plug-in 'Euroblock' connectors on audio and control equipment (Wikipedia 'Euroblock')
- **when_to_use**: When you want a cheap, compact, reusable way to land loose wires on a board, power supply or panel and change them later with only a screwdriver: 'Screw terminals provide a good solution' for connecting bare, unterminated wire to a circuit, and suit 'situations in which a connection should be capable of supporting multiple different connecting devices' (SparkFun 'Connector Basics'). They cover a huge current range ('a fraction of an ampere up to several hundred amperes', Wikipedia) and need no matching plug on the wire. Use ring lugs on a barrier strip where the joint mustn't slip off even if it loosens; a pluggable Euroblock when the wired plug should come off as a unit (Wikipedia 'Euroblock'); and a busbar-style strip to share one supply among many wires (Wikipedia 'Screw terminal').
- **when_not_to_use**: Not where it vibrates or heats and cools a lot unless you can check it: screws loosen (Wikipedia 'Screw terminal'; SparkFun); a Spring-clamp wire connector works 'better in environments with a lot of vibrations' (SparkFun), and crimped joints don't loosen. Not for plugging and unplugging often: screw connections are 'uncommon for portable equipment, where wires are repeatedly connected and disconnected' (Wikipedia); use a plug-and-socket connector. Not where many connections must fit in a small space: 'The screw mechanism limits the minimum physical size of a terminal' (Wikipedia). Not with solder-tinned stranded wire (Wikipedia). Not in a UK mains joint that will be hidden: 'chocolate blocks are no longer approved for connections that are not accessible for inspection (such as under floors)' (Wikipedia 'Screw terminal'; BS 7671 reg. 526.3 in IET Wiring Matters 2012); a crimp or an MF-marked maintenance-free connector is used there. Not where fingers or tools could touch live screws unless covered (Wikipedia 'Electrical connector').
- **environment_limits**: Heat: typical PCB blocks are rated −40 to 105 °C (Same Sky); a loose terminal heats itself, and such 'glowing connections' 'can generate temperatures above 1000 °C (1800 °F) and can ignite most flammable materials' (Wikipedia 'High resistance connection'). Vibration and thermal cycling are the main weakness: 'Terminal screws loosened by vibration, improper tightening or other causes offer increased resistance to the current, with consequent heating and potential thermal creep, which will cause the termination to loosen further' (Wikipedia 'High resistance connection'). Creep: solder-tinned wire 'will cold flow' (Wikipedia 'Screw terminal'); oxidised aluminium wire suffers the same creep at terminations (Wikipedia 'High resistance connection'). Water and corrosion: not sealed, and corrosion degrades the joint over time (Wikipedia 'Screw terminal'). Printed holders and covers: PLA softens above 60 °C (Prusa 'PLA').
- **safety_notes**: LOOSE MEANS HOT: a loose or poorly made terminal heats up and can start a fire, and 'fuses and Residual Current Devices (RCDs) are unable to disconnect the electrical supply because they cannot detect a HRC' (Wikipedia 'High resistance connection'); Prusa warns that loose power connections 'pose a serious fire hazard' (Prusa CORE One heatbed guide), and Hackaday reports melted terminal blocks on DIY 3D printers from stranded wire jammed in without ferrules (Hackaday 2018). NEVER TIN wire ends before clamping: solder creeps and the joint loosens and heats (Wikipedia 'Screw terminal'). SCREWS LOOSEN WITH VIBRATION: check them, or choose spring terminals (Wikipedia; SparkFun). STRAY STRANDS can bridge to the next terminal and short it; ferrules prevent 'the bridging of terminals' (Wikipedia 'Screw terminal'). EXPOSED METAL: screw terminals are poorly protected against touch (Wikipedia 'Electrical connector'): cover them and switch off before touching. MAINS: this entry gives no mains wiring steps, and mains work must follow local law. In England, electrical installation work in homes must meet Part P of the Building Regulations and some of it must be notified (Approved Document P, 2013 edition). UK wiring rules (BS 7671 reg. 526.3) require 'Every connection shall be accessible for inspection, testing and maintenance' apart from listed exceptions, so screw connector strips must stay reachable, and the IET notes screw-terminal junction boxes 'can be used where they are accessible' (IET Wiring Matters, Spring 2012). In US workplaces OSHA requires terminals 'identified for the material of the conductor' and 'properly installed and used' (29 CFR 1910.303(c)(1)).
- **common_failures**: Working loose from vibration or heat cycling, then overheating or melting (Wikipedia 'High resistance connection'; Hackaday 2018). Not tightened enough at fitting time: 'Screw connectors sometimes come loose if not done up tightly enough at fitting time' (Wikipedia 'Screw terminal'). Over-tightened: a thin wire cut through, especially under a plain screw head (Wikipedia); a stripped screw thread ⚑ [uncertain: general caution]. Stranded wire splaying, so some strands miss the clamp or touch the next terminal (Wikipedia; IET Wiring Matters 2012: 'ensure all the strands are clamped in the connector'). Solder-tinned wire creeping loose (Wikipedia). Wire wound the wrong way under a screw head and squeezed out (Wikipedia). Wire too thin or too thick for the terminal (SparkFun). A fork lug sliding out of a loosened barrier-strip screw, where a ring lug would have stayed (SparkFun 'Working with Wire'). Cable pulled or levered so the terminal loosens; fix the cable so there is no 'appreciable mechanical strain on the terminations' (IET Wiring Matters 2012, quoting BS 7671 reg. 522.8.5). Wire working out of a PCB terminal: SparkFun suggests a small dab of hot glue. *(⚑ parts need confirming)*
- **related**: 
  - Spring-clamp wire connector (lever connector, push-in wire connector): a spring sets the force; tool-free and better against vibration
  - Wire-end ferrule (bootlace ferrule, end sleeve): the crimped sleeve to fit on stranded wire before it goes into a screw terminal
  - Crimp terminals (ring, fork and spade terminals, blade quick-disconnect): what goes under the screws of a barrier strip
  - Binding post and banana plug (test-lead connector, crocodile clip): a screw-cap terminal made for test leads and quick changes
  - Twist-on wire connector (wire nut): joins wires by twisting a threaded cap over them
  - Crimped butt splice (crimp splice connector): a permanent splice with no screw to loosen
  - Wire-to-board plug connectors (pin header and crimp housing): pluggable alternative for small signal wires
  - DIN-rail clip (top-hat rail snap mount): how rail-mounted terminal blocks are fixed
  - Ordinary screw joint (bolt and nut, machine screw): the same screw clamping used mechanically; the same vibration-loosening advice applies
  - Shaft-to-hub joints (set screw): the set-screw clamping idea used on shafts

### Pictures, videos and models

- **links**: 
  - [Screw Terminals. Basic and Compression Types..jpg (Wikimedia Commons, by Fredquint)](https://commons.wikimedia.org/wiki/File:Screw_Terminals._Basic_and_Compression_Types..jpg): A basic terminal with wires held under the screw heads beside a clamping-plate (compression) terminal with wires held between plates *(licence: CC BY-SA 3.0)*
  - [Terminal Blocks 01CJC.png (Wikimedia Commons, by C J Cowie)](https://commons.wikimedia.org/wiki/File:Terminal_Blocks_01CJC.png): Screw terminals as individual board connectors, a barrier strip with set screws, and a barrier strip with spade and ring lugs fitted *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [BarrierStrip.jpg (Wikimedia Commons, by Leonard G.)](https://commons.wikimedia.org/wiki/File:BarrierStrip.jpg): A barrier strip with screw terminals separated by raised insulating barriers *(licence: CC Sharealike 1.0 (retired licence))*
  - [Connector Basics, section 'Screw Terminals' (SparkFun Learn)](https://learn.sparkfun.com/tutorials/connector-basics/all): Photos of 3.5 mm-pitch PCB screw terminals showing the wire entry, retention screw and the modular side connectors that gang blocks together *(licence: CC BY-SA 4.0)*
  - [To Ferrule Or Not To Ferrule? (Hackaday, 2018)](https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/): Cross-section and comparison images (credited to Weidmüller) of stranded wire in a terminal with and without a ferrule *(licence: link only)*
- **make_it_yourself**: 
  - [Terminal Block (Kazmar, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/308134-terminal-block): Simplified printed terminal block, extendable by copying terminals; each way uses an M3 screw, nut and two washers so the current path is metal; 'for hobby use' *(licence: Creative Commons Attribution-NonCommercial)*
  - [Terminal Block / Wire Connector (Feat. optional cable relief and bridging) (Raschmaschine, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/164503-terminal-block-wire-connector-feat-optional-cable-): Printed screw terminal block modelled on a power-supply terminal, with clip-on cable relief and bridging between terminals using 1.5 mm² solid copper wire *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Kroonsteen (Luster / Screw terminal) Cover (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/32652-kroonsteen-luster-screw-terminal-cover): Printed covers for connector strips in several sizes, tight on the cable to give pull relief to the screw terminal *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Prusa Lack Enclosure Heatbed Cable Clamp - 60 Degree, for Screw Terminal Heatbed and Textile (Butterworth Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/84842-prusa-lack-enclosure-heatbed-cable-clamp-60-degree): Printed cable clamp that keeps the moving heated-bed cable from pulling on its screw-terminal connections *(licence: Creative Commons Attribution)*
- **diagram_idea**: Three small cut-aways side by side: a wire wrapped clockwise under a screw head, a wire squeezed under a rising clamping plate, and a wire in a brass tube held by a set screw (connector strip); below them a barrier strip with a ring lug and a fork lug, and a warning panel showing splayed strands and a solder-tinned end creeping loose next to a neat ferruled end.
- **sources**: 
  - https://en.wikipedia.org/wiki/Screw_terminal
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Euroblock
  - https://en.wikipedia.org/wiki/Chocbox
  - https://en.wikipedia.org/wiki/Busbar
  - https://en.wikipedia.org/wiki/High_resistance_connection
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://learn.sparkfun.com/tutorials/working-with-wire/all
  - https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/
  - https://www.sameskydevices.com/product/resource/tb001-500.pdf
  - https://www.sameskydevices.com/product/resource/tb0014-500.pdf
  - https://help.prusa3d.com/wp-content/uploads/generated/printer-maintenance_247_guide_246701_en_2026-06-26.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://electrical.theiet.org/media/1534/accessibility-of-connections-and-maintenance-free-junction-boxes.pdf
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://commons.wikimedia.org/wiki/File:Screw_Terminals._Basic_and_Compression_Types..jpg
  - https://commons.wikimedia.org/wiki/File:Terminal_Blocks_01CJC.png
  - https://commons.wikimedia.org/wiki/File:BarrierStrip.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: crimper, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, making_tips_3d_printing, reuse_cycles

## 351 Wire-end ferrule (bootlace ferrule, end sleeve)

*electrical connections.* A thin metal tube, usually with a coloured plastic collar, crimped onto the end of a stranded wire so the strands can't splay apart in a screw or spring terminal

*Also covers:* Also covers twin-wire ferrules, crimp shapes and colour codes. Safety: splayed strands make a poor, hot joint

### What it is

- **plain_name**: A tiny metal tube, usually with a coloured plastic funnel on one end, that is squeezed onto the stripped end of a bendy many-stranded wire so the loose strands become one neat solid pin that a screw or spring terminal can grip without strands spreading out
- **term**: Wire-end ferrule (bootlace ferrule; electric wire ferrule; end sleeve)
- **aliases**: 
  - bootlace ferrule (Hackaday tags the article 'bootlace'; Commons file descriptions use 'bootlace ferrules')
  - electric wire ferrule, wire ferrule, electric end terminal (Wikipedia 'Electric wire ferrule')
  - wire-end ferrule (Weidmüller 'Wire-end Ferrules'); end sleeve, wire end sleeve (catalogue names)
  - insulated ferrule, ferrule with plastic collar (DIN 46228-4) and uninsulated or bare ferrule (DIN 46228-1) (WAGO 'Using Ferrules')
  - twin ferrule, twin wire ferrule, dual wire ferrule, duo ferrule: one ferrule with an oval collar that takes two wires (DigiKey 'Dual Wire Ferrule for Daisy Chain Connections'; German Wikipedia 'Aderendhülse')
  - Aderendhülse (German); 'Mischke tube' (German trade slang for uninsulated ferrules, after a maker; German Wikipedia)
  - E1508-style codes: first digits give the wire size, last digits the metal tube length (e.g. 1.5 mm², 8 mm) (German Wikipedia); Weidmüller writes H1.5/14
  - not the same as a compression fitting's 'ferrule' (plumbing) or a wire-rope ferrule (crimped sleeve on steel rope)
- **family**: electrical connections
- **one_liner**: A thin tin-plated copper tube, usually with a colour-coded plastic collar, is slid over the stripped end of a stranded wire and crushed onto it with a crimping tool, so the strands stay together and the wire end goes into a screw or spring terminal like a single solid pin, giving a cooler, more reliable joint than bare splayed strands.
- **complexity**: Single piece, fitted with a tool: a soft copper tube (usually tin-plated) with a flared mouth, mostly inside a conical plastic collar; twin versions have an oval collar for two wires (Hackaday 2018; German Wikipedia 'Aderendhülse'; DigiKey 'Dual Wire Ferrule'). It needs a matching crimping tool and the terminal it goes into.
- **how_it_works**: Stranded wire is used because it bends without breaking, but once the insulation is stripped the strands untwist and spread, and under a screw they splay apart so fewer strands touch the terminal, the resistance goes up and the joint heats (Hackaday 2018; Wikipedia 'Electric wire ferrule'). The ferrule's flared mouth and plastic collar funnel all the strands into the tube, and the crimping tool then squeezes tube and strands into a solid square, hexagonal or trapezoid bar; the pressure stretches and squashes the strands, breaking up surface oxide and closing the air gaps, so the joint resists corrosion like other gas-tight crimps (Hackaday 2018; WAGO 'Using Ferrules'). The terminal then clamps this solid bar, and the collar, which is not crushed, stays round the insulation and moves the bending point away from the end of the bare wire as a little strain relief (Hackaday 2018; Weidmüller).

### Finder attributes

- **job**: 
  - join and hold: finishes the end of a stranded wire so it can be clamped in a screw or spring terminal (and lets two wires share one terminal with a twin ferrule); the finder reaches this entry through the 'electrical connections' family
- **motion**: none: once crimped and clamped, nothing moves.
- **degrees_of_freedom**: 0: the ferrule is crushed onto the wire and the terminal clamps the ferrule, so there is no movement between the parts.
- **special_behaviour**: 
  - none: it simply keeps the strands together. (Its plastic collar gives a little bend protection at the end of the insulation, which is strain relief rather than one of the listed behaviours; Hackaday 2018, Weidmüller.)
- **holding_principle**: 
  - friction or clamping (force-fit): the crimping tool squeezes the tube round the strands into a gas-tight bundle (WAGO 'Using Ferrules'; Wikipedia 'Crimp (joining)'), and the terminal's screw or spring then clamps the ferrule
- **input_output**: not applicable
- **power**: passive (no power needed).
- **removability**: permanent: the crimped ferrule can't be taken off the wire, only cut off and replaced. The ferruled wire end itself is easy to unscrew and move to another terminal, and is less damaged by this than bare strands (DigiKey 'Using and Crimping Wire Ferrules').
- **reuse_cycles**: once: each ferrule is crimped one time. A ferruled wire end can be clamped, unclamped and moved many times (DigiKey 'Using and Crimping Wire Ferrules').
- **tools_needed**: Wire strippers set to cut the insulation without nicking strands (DigiKey 'Quality Standards for Wire-Ferrule Crimps'); a ferrule crimping tool: self-adjusting square (4-sided) or hexagonal (6-sided) tools, trapezoid tools, or pliers that press a V-shaped indent (DigiKey 2018; German Wikipedia; PHPI on Knipex self-adjusting hexagonal pliers); flush cutters; a screwdriver for the terminal. Hackaday notes kits of assorted ferrules with a ratcheting crimper for about $30, while branded crimpers cost $200 or more (Hackaday 2018 and comments). Never squash ferrules with ordinary pliers.
- **seal**: none: it is not a seal. A gas-tight crimp keeps air and moisture out from between the strands inside the tube, which slows corrosion (WAGO 'Using Ferrules'; Hackaday 2018), but the joint is not waterproof.
- **load**: Electrical: above about 30 A (a ferrule has no current rating of its own: it carries what its wire and terminal are rated for, and Weidmüller makes ferrules for wires from 0.14 to 50 mm², AWG 26 to 0; makers mostly use 0.5-2.5 mm² sizes); rated for mains (UL, CSA and VDE-approved ferrules are standard in mains-rated industrial terminals (Weidmüller), but this entry gives no mains wiring steps). Mechanical: light: it only has to hold the strands together while the terminal clamps it. Pull-out strength depends on the crimp (crimped joints are tested to EN 60352-2, which includes a pull test; German Wikipedia) and on the terminal. Weidmüller says ferrules give 'higher vibration resistance than without ferrules'. Weak against repeated bending next to the collar and against pulling on the wire, so add strain relief.
- **adjustable**: no: the ferrule is crimped once; only the terminal screw can be re-tightened.
- **play_and_precision**: not applicable
- **access_needed**: not applicable: the ferrule is crimped onto the free end of the wire before it goes into the terminal; the terminal itself needs access to its wire entry and its screw or release lever.
- **materials**: Tube: copper, usually tin-plated (in special cases silver- or gold-plated) (Hackaday 2018; German Wikipedia; WAGO requires 'tubular tin-plated copper ferrules'). Collar: plastic such as polypropylene (PP) or nylon (PA 6.6) (German Wikipedia). Wire: stranded and fine-stranded copper wire; solid wire does not need one. Each ferrule fits one wire size, so wire, ferrule and crimp tool must match (DigiKey 'How to Select a Wire Ferrule?'), and the wire's insulation must fit inside the collar (DigiKey): thick-insulated wire may need a larger collar. Twin ferrules take two wires of the same size (DigiKey 'Dual Wire Ferrule').
- **maker_difficulty**: easy: with a matching crimper, fitting one takes seconds and gives a neat result (Hackaday 2018). The skill is in choosing the right size and strip length and checking each crimp (DigiKey 'Quality Standards for Wire-Ferrule Crimps').

### Making it

- **processes**: 
  - off-the-shelf part: ferrules are bought, usually as an assortment kit with a crimping tool
  - 3D print (FDM): only accessories, such as boxes that keep ferrule sizes apart and trays for the crimper (see make_it_yourself)
- **print_in_place**: no: it is a soft metal tube crushed onto the wire; only storage boxes and tool trays are printed.
- **making_tips_3d_printing**: A ferrule can't be printed, but it matters in printed projects. 1) 3D printers: crimp ferrules on the stranded wires that go into screw terminals on the mainboard and power supply, especially the high-current heated-bed and power leads; melted terminal blocks are 'a common complaint with many DIY 3D printer kits' when thick stranded wire is simply jammed into screw terminals (Hackaday 2018). Unplug the printer and let the power supply's capacitors discharge before touching mains-side terminals (Voron 'Electrical Wiring'). 2) In printed enclosures, leave room in front of the terminal block for the ferrule, its collar and the wire's bend, and add a cable clamp, tie point or gland so a tug on the cable never reaches the crimp (see Cable gland and strain relief). Don't clamp too long a ferrule or push the wire in too far: WAGO warns the conductor can buckle above the ferrule. 3) Keep printed parts away from high-current terminals: a failing joint can get hot enough to melt the ferrule's plastic collar (Commons photos 'Burnt wire ferrule'). 4) Colour codes differ between makers, so store ferrules by size in a box with separate compartments or lids; one popular printed box gives each size its own lid so a dropped box can't mix sizes (Printables 1535499).
- **off_the_shelf_parts**: Insulated wire-end ferrules with a plastic collar (DIN 46228-4) and uninsulated ferrules (DIN 46228-1) (WAGO); twin (dual-entry) ferrules for two wires (DigiKey); assortment boxes of common sizes, often sold with a crimper (Hackaday 2018); ferrules on strips or reels for automatic stripping and crimping tools, e.g. Weidmüller Stripax (Weidmüller); ferrule crimping pliers in square, hexagonal and trapezoid profiles, e.g. Molex 2002180600 (4-sided) and 2002180700 (6-sided) (DigiKey 2018), Weidmüller PZ 10 SQR and PZ 10 HEX (Automation World), Knipex hexagonal and trapezoid pliers (PHPI); pin terminals (pin lugs), a crimped solid pin used as an alternative (German Wikipedia). Brand names are given only as catalogue search terms.
- **rules_of_thumb**: 
  - Choose the ferrule by wire size, not colour. Weidmüller lists 0.5 mm² for AWG 20, 0.75 mm² for AWG 18, 1.0 mm² for AWG 17, 1.5 mm² for AWG 16, 2.5 mm² for AWG 14, 4 mm² for AWG 12 and 6 mm² for AWG 10 (Weidmüller 'Wire-end Ferrules', LIT1902).
  - Two common colour codes disagree (Weidmüller LIT1902, side by side). DIN code: 0.5 mm² white, 0.75 grey, 1.0 red, 1.5 black, 2.5 blue, 4 grey, 6 yellow, 10 red, 16 blue. Weidmüller's own code: 0.25 light blue, 0.34 turquoise, 0.5 orange, 0.75 white, 1.0 yellow, 1.5 red, 2.5 blue, 4 grey, 6 black, 10 ivory, 16 green. Hackaday calls them the French and German codes; German Wikipedia lists three partly conflicting codes and says DIN 46228-4:2020 is becoming the norm. Only 2.5 mm² (blue) and 4 mm² (grey) match in both. Twin ferrules are sold in the same two colour sets, coded by the size of each wire (e.g. 2 x 1.5 mm² black in the DIN set, red in the other; RS twin-ferrule datasheet).
  - Strip the wire so it fills the whole metal tube and sticks out very slightly at the tip; a wire end you can't see means too short a strip or a wire not pushed fully home (DigiKey 'Quality Standards for Wire-Ferrule Crimps'; DigiKey 'Dual Wire Ferrule').
  - The ferrule's metal length must match the strip length printed on the terminal or connector: too long and bare metal sticks out past the insulation; too short and the clamp may not hold (WAGO 'Using Ferrules').
  - A ferrule makes the wire end fatter, so a terminal takes a smaller maximum wire size with ferrules than with bare wire, and a plastic collar can reduce it further (WAGO 'Using Ferrules').
  - Put only the metal barrel in the crimping jaws; the collar may touch the jaws but must not go in. A good crimp is crushed on all four faces (for a square crimp), leaves the plastic unmarked and shows the wire tip. Reject crimps with only two compressed faces, crimps on the collar, and crimps with no wire visible (DigiKey 'Quality Standards for Wire-Ferrule Crimps').
  - Match the crimp shape to the terminal: a square (4-sided) crimp suits square terminal openings and gives flat contact faces; a hexagonal (6-sided) crimp suits round openings and tight spaces (DigiKey 2018; Weidmüller via Automation World; Knipex via PHPI). A trapezoid crimp suits the tall, slim clamps of terminal strips (Knipex via PHPI). Insert the ferrule with a flat crimp face parallel to the terminal's contact face (WAGO).
  - Treat wire, ferrule and crimp tool as a matched set chosen to the makers' instructions; don't use a twin ferrule for a single wire, because the crimp may not grip it (DigiKey 'How to Select a Wire Ferrule?'; DigiKey 'Dual Wire Ferrule').
  - Use twin ferrules only for low-power daisy chains (e.g. a shared 24 V feed); high-current loads should get their own wire back to a distribution block or fuse (DigiKey 'Dual Wire Ferrule').
  - Never tin stranded wire ends with solder for screw terminals instead: solder cold-flows under the screw, leaving a loose connection and a possible fire hazard (Wikipedia 'Screw terminal').

### When to use it

- **everyday_examples**: 
  - The stranded power and heated-bed wires in the screw terminals of a 3D printer's mainboard and power supply (Hackaday 2018)
  - Wires in the terminals of industrial controllers and control panels, including twin ferrules on a small PLC's power daisy chain (DigiKey 'Dual Wire Ferrule')
  - Speaker cable ends finished with 1.5 mm² and 2.5 mm² ferrules (Commons 'Lautsprecherkabel Aderendhuelsen Makro.jpg')
  - Stranded wires in the terminals of equipment made for the European market, where Hackaday says ferrules are expected (Hackaday 2018)
- **when_to_use**: Use a ferrule whenever a stranded or fine-stranded wire goes into a screw terminal, a pluggable terminal block or a terminal strip, and into spring or push-in terminals whose datasheet allows ferrules. It matters most for higher currents (power supplies, heated beds, motor drivers), where splayed strands cause heating (Hackaday 2018), for wires that may be moved to another terminal later (DigiKey 2018), for equipment that vibrates (Weidmüller) and wherever a stray strand could touch the next terminal (Wikipedia 'Screw terminal'). Use a twin ferrule to put two thin wires into one terminal for a low-power daisy chain (DigiKey 'Dual Wire Ferrule'). It also gives a neat, professional finish (Hackaday 2018).
- **when_not_to_use**: Solid wire doesn't need one. Some spring terminals that can be opened by hand don't need ferrules and may even work better with bare strands, because the spring keeps pressing and the strands spread over a large contact area; cage-clamp (lift) terminals also don't need them (German Wikipedia); check the terminal's datasheet. Don't use one if the terminal can't take the ferruled size (WAGO). To fix a wire under a screw head or onto a stud, use a ring or fork crimp terminal instead; to join two wires end to end, use a crimped butt splice, soldered joint or lever connector. Don't fit ferrules without a proper crimper, because a squashed or half-crimped ferrule can pass a tug test and fail later (DigiKey 'Quality Standards'). In mains wiring, follow local law and the equipment maker's instructions, or use a qualified electrician.
- **environment_limits**: Heat: the ferrule is only as cool as its joint; a loose or overloaded terminal can melt the plastic collar (Commons 'Burnt wire ferrule' and 'Burnt wire ferrule 2'). Corrosion: tin-plated copper and a gas-tight crimp resist oxidation better than bare stranded wire (Hackaday 2018; Weidmüller: 'protection against corrosion'). Vibration: ferruled wires resist vibration better than bare strands (Weidmüller), but screw terminals can still work loose with vibration or corrosion (Wikipedia 'Screw terminal'), so re-check high-current terminals. Creep: unlike solder-tinned ends, a crimped copper ferrule doesn't cold-flow away from the screw (Wikipedia 'Screw terminal'; Hackaday 2018 comments). The collar plastic's own temperature limit varies by maker and was not checked ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Splayed strands make a poor, hot joint: fewer strands touch the terminal, the resistance rises and the joint heats, a known cause of melted terminal blocks on 3D printers (Hackaday 2018). A stray strand can bridge to the next terminal or stick out of the terminal (Wikipedia 'Screw terminal'; German Wikipedia), causing a short or a shock risk. Tinned (soldered) wire ends in screw terminals loosen and can become a fire hazard (Wikipedia 'Screw terminal'). A ferrule crimped on its collar instead of its metal can pass a tug test and then cause intermittent faults (DigiKey 'Quality Standards'). Mains: this entry gives no mains wiring steps. Unplug equipment and let power-supply capacitors discharge before touching terminals (Voron 'Electrical Wiring'). Mains work must follow local law: for example, in England electrical installation work in homes must meet Part P of the Building Regulations, and new circuits, consumer-unit replacements and work in bathrooms are notifiable (Approved Document P, 2013 edition, regulation 12(6A)). Hackaday says CE-marked equipment must use ferrules on stranded wire in screw or spring terminals; this is a journalist's summary that was not checked against the standards ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Wrong size: too big and the crimp 'may not hold the wire securely' (DigiKey 'Dual Wire Ferrule'); too small and strands get pushed back or pinched off (German Wikipedia's list of crimp faults). Wrong strip length: wire hidden inside the tube, or bare wire showing between collar and insulation (DigiKey 'Quality Standards'; WAGO). Broken strands from a stripper set too deep (DigiKey 'Quality Standards'). Strands pushed back so they stick out of the collar (German Wikipedia). Crimp on the collar, or only partly crushed (two faces instead of four) (DigiKey 'Quality Standards'). Split or cracked tube, lopsided crimp, sharp burrs along the edges, or a ferrule bent lengthways (German Wikipedia's list of crimp faults). Poor crimpers with badly made dies (Hackaday 2018 comments). A twin ferrule used for one wire (DigiKey 'Dual Wire Ferrule'). Ferrule clamped too deep so the wire buckles above it (WAGO). Screws not tightened enough at fitting, which can lead to a loose, hot joint and a burnt ferrule (Wikipedia 'Screw terminal'; Commons 'Burnt wire ferrule'). Avoid all of these by matching wire, ferrule and tool, checking every crimp by eye and with a gentle tug, and re-tightening terminals after first use.
- **related**: 
  - Screw terminal (terminal block, barrier strip): the terminal a ferrule most often goes into; the screw clamps the ferrule
  - Spring-clamp wire connector (lever or push-in connector): may not need a ferrule; push-in types often accept ferruled fine-stranded wire
  - Crimp terminals (ring, fork and spade terminals): crimped ends for screw heads, studs and tabs, where a ferrule would slip out; the pin terminal is a solid-pin cousin of the ferrule
  - Soldered wire joint (tinning): tinning a wire end is the old alternative, but it loosens in screw terminals; use a ferrule instead
  - Crimped butt splice: a crimped tube that joins two wires end to end, while a ferrule only finishes one wire end
  - Heat-shrink tubing: insulates joints, but does not stop strands splaying in a terminal
  - Wire-to-board plug connectors: use their own crimp contacts rather than ferrules
  - Compression fitting (ferrule fitting): a plumbing 'ferrule', unrelated apart from the name
  - Wire-rope terminations (crimped sleeve): a mechanical ferrule that holds a loop in steel rope
  - Rope-end finishing (aglet): the same idea, a tight sleeve that stops strands unravelling, used on laces and cords
  - Ultrasonic compaction of wire ends: a factory process that welds the strands into a solid end without any added part (German Wikipedia)

### Pictures, videos and models

- **links**: 
  - [Wire ferrules with and without insulation.jpg (Wikimedia Commons, Simon A. Eugster)](https://commons.wikimedia.org/wiki/File:Wire_ferrules_with_and_without_insulation.jpg): Insulated and uninsulated wire ferrules next to a ferrule crimping plier *(licence: CC BY-SA 3.0)*
  - [Wire ferrule crimped.jpg (Wikimedia Commons, Simon A. Eugster)](https://commons.wikimedia.org/wiki/File:Wire_ferrule_crimped.jpg): Close-up of a ferrule crimped onto the end of a wire *(licence: CC BY-SA 3.0)*
  - [Burnt wire ferrule.jpg (Wikimedia Commons, Phiarc)](https://commons.wikimedia.org/wiki/File:Burnt_wire_ferrule.jpg): A ferrule from a failed screw terminal with its plastic collar completely melted and the wire insulation stained: what an overheated joint looks like *(licence: CC BY-SA 4.0)*
  - [Quality Standards for Wire-Ferrule Crimps (DigiKey TechForum, Aaron Dahlen)](https://forum.digikey.com/t/quality-standards-for-wire-ferrule-crimps/71081): Photos of a properly stripped wire, a stripping failure with broken strands, the ferrule placed in the crimping die, and one passing crimp next to three failed ones *(licence: link only (licence not stated on the page))*
  - [To Ferrule Or Not To Ferrule? (Hackaday, 2018)](https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/): Weidmüller cross-section drawing of an insulated ferrule on stranded wire and a chart comparing ferruled and bare stranded wire in terminals *(licence: link only (images credited to Weidmüller))*
- **make_it_yourself**: 
  - [ferule box organizer (Jan Ticháček, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1535499-ferule-box-organizer): PETG storage box with a separate hinged lid for each ferrule size (filament used as the hinge pin), so a dropped box can't mix sizes *(licence: Creative Commons Attribution-NonCommercial)*
  - [Case for Crimping Tool and Ferrules (based on Frog Box v2.0) (Marcelismus, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/558341-case-for-crimping-tool-and-ferrules-based-on-frog): Printed case with a compartment for a common low-cost ferrule crimper and eight compartments for ferrule sizes, plus a test outline to check your tool fits *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Ferrule crimp tool gridfinity tray (Miguel Camba, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/384125-ferrule-crimp-tool-gridfinity-tray): Gridfinity tray for the popular square (6-4A) and hexagonal (6-6A) self-adjusting ferrule crimpers, with a 12-compartment bin for ferrule sizes; Fusion 360 file included *(licence: Creative Commons Attribution)*
- **diagram_idea**: Two cut-away views of a screw terminal side by side: on the left, bare stranded wire with strands splayed out sideways, a few strands touching the clamp and one stray strand reaching the next terminal, marked with a heat glow; on the right, the same wire in a crimped ferrule, with the collar round the insulation and a solid bar under the clamp. Below, four small end-on sections of the crimp shapes (square, hexagonal, trapezoid, indent) next to the terminal openings they suit.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electric_wire_ferrule
  - https://de.wikipedia.org/wiki/Aderendh%C3%BClse
  - https://en.wikipedia.org/wiki/Screw_terminal
  - https://en.wikipedia.org/wiki/Crimp_(joining)
  - https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/
  - https://assets.dam.weidmueller.com/assets/api/019ef608-9ee2-7586-9f45-7bed2411e1f4/Original/Wire_end_Ferrules.pdf
  - https://www.wago.com/global/building-technology/electrical-installers/helpful-tips/ferrules
  - https://forum.digikey.com/t/using-and-crimping-wire-ferrules/1358
  - https://forum.digikey.com/t/quality-standards-for-wire-ferrule-crimps/71081
  - https://forum.digikey.com/t/dual-wire-ferrule-for-daisy-chain-connections/37115
  - https://forum.digikey.com/t/how-to-select-a-wire-ferrule/37706
  - https://www.automationworld.com/home/product/13313578/weidmuller-pz-10-hex-and-pz-10-sqr-crimping-tools-provide-precise-results-for-secure-connections
  - https://phpionline.co.uk/feature-articles/knipexs-latest-crimping-tools/
  - https://assets.rs-online.com/v1698723014/Datasheets/3276c839a3aadaba656db01fed2fd608.pdf
  - https://docs.vorondesign.com/build/electrical/
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Wire_ferrules_with_and_without_insulation.jpg
  - https://commons.wikimedia.org/wiki/File:Wire_ferrule_crimped.jpg
  - https://commons.wikimedia.org/wiki/File:Burnt_wire_ferrule.jpg
  - https://commons.wikimedia.org/wiki/File:Burnt_wire_ferrule_2.jpg
  - https://commons.wikimedia.org/wiki/File:Lautsprecherkabel_Aderendhuelsen_Makro.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: above about 30 A
- **tools**: crimper, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes

## 352 High-current battery plug (bullet connector, polarised battery connector)

*electrical connections.* Chunky two-pin plugs with large contacts in a shaped, polarised housing that carry tens of amps between a battery, a speed controller and a charger in drones, RC models, robots and e-bikes

*Also covers:* Also covers matching plug and wire to the current, anti-spark plugs, and sealed solar connectors and larger cousins. XT60, Deans (T-plug), Tamiya, EC3 and MC4 (brands) as aliases. Genderless power connectors stay in Genderless connector. Safety: reversed or shorted lithium packs burn; the plug and the wire must both suit the current

### What it is

- **plain_name**: A chunky two-pin plug with fat metal pins in a shaped plastic body that only fits one way round, used to plug a big rechargeable battery into a drone, model car, robot or charger and pull it out again, carrying a lot of current without melting
- **term**: High-current battery connector (polarised DC power plug; bullet connector)
- **aliases**: 
  - battery plug, battery connector, LiPo connector, power lead, discharge lead (RC hobby terms)
  - XT60, XT30, XT90, XT120 (AMASS, brand): yellow polarised plugs with gold-plated brass bullet contacts (AMASS XT60 datasheet; Holybro 'Connector & Wire Rating')
  - XT90-S / anti-spark connector (brand variants): a plug with a built-in resistor contact that limits the spark when connecting (Aloft Hobbies); AS150, AS300 (AMASS, brand) larger plugs listed by Holybro
  - Deans (brand), T-plug, T-connector, Ultra Plug: flat contacts set at right angles in a T so it only fits one way (Wikipedia 'DC connector'; Commons 'Deans connector 1.JPG')
  - Tamiya connector (brand), standard and mini Tamiya: latched plug on RC car and airsoft battery packs (Wikipedia 'Tamiya connector')
  - EC3, EC5 (E-flite, brand): 3.5 mm and 5 mm contacts in a polarised housing (Horizon Hobby)
  - gold bullet connectors, banana plugs (RC usage): single round pin-and-socket pairs, 2, 3.5, 4, 5.5, 6 and 8 mm, used between speed controller and motor (Oscar Liang 2014)
  - MC4 (brand, Stäubli; MC4-type from other makers): sealed, locking single-pole solar-panel connectors (Wikipedia 'MC4 connector')
  - Anderson SB / SBS (brand): large plugs for vehicle dual-battery systems and UPS banks (Wikipedia 'DC connector'); Anderson Powerpole and SAE leads are covered in Genderless connector
  - polarised connector, keyed connector, reverse-polarity-proof connector
- **family**: electrical connections
- **other_families**: quick-release & tool-free
- **one_liner**: A two-pin plug and socket with thick metal contacts in a shaped housing that fits only one way round, soldered (or crimped) onto heavy wires so a battery pack can be plugged into a model, robot or charger and unplugged by hand, carrying tens of amps; the plug and the wire must both suit the current.
- **complexity**: A few parts per side: a moulded plastic housing (nylon, flame-retardant) holding two contacts, usually gold-plated brass bullets with solder cups (AMASS XT60 datasheet); the battery lead and device lead each get one half. Variants add a latch (Tamiya), a resistor contact (anti-spark XT90-S), or a rubber seal ring and locking clips (MC4). Loose bullet connectors are single pins and sockets, one pair per wire, insulated with heat-shrink (Oscar Liang 2014).
- **how_it_works**: Each contact is a round or flat metal pin that slides into a matching socket; the tight fit presses the metal surfaces firmly together, so the joint has a very low resistance (0.55 milliohm for an XT60 contact; AMASS datasheet) and stays cool at tens of amps. The plastic housing is shaped (bevelled corners, a T or D-shaped contact layout) so the halves only fit with positive to positive, which stops a battery being connected backwards (Wikipedia 'DC connector'). The current rating depends on how hot the plug gets: AMASS rates a genuine XT60 at 30 A continuous for a temperature rise under 60 °C, with 12 AWG wire (Holybro), so a thinner wire or poor solder joint lowers the real rating. Anti-spark versions first connect through a small resistor so the speed controller's capacitors charge slowly before the main contacts close (Aloft Hobbies).

### Finder attributes

- **job**: 
  - join and hold: makes an electrical joint for battery power that can be plugged and unplugged by hand (the finder reaches this entry through the 'electrical connections' family)
  - lock, and release by hand: latching types (Tamiya's latch; MC4's locking clips, which need a tool to release) stop the plug pulling apart by accident (Wikipedia 'Tamiya connector', 'MC4 connector')
- **motion**: none: once mated the halves don't move; they are pushed together and pulled apart along one line.
- **degrees_of_freedom**: 0 when mated. While plugging in, the halves slide along one axis only.
- **special_behaviour**: 
  - quick-release: plug in and pull apart by hand, with no tools, to swap or charge a battery (Oscar Liang 2014). The housing shape also lets it fit only one way round (keying), which is not one of the listed behaviours
  - hand-release only: Tamiya plugs have a latch that 'prevents accidental disconnection' until pressed (Wikipedia 'Tamiya connector'), and MC4 plugs lock and 'require a tool to disconnect them' (Wikipedia 'MC4 connector'); plain XT, Deans, EC and bullet plugs have no latch
- **holding_principle**: 
  - friction or clamping (force-fit): XT, Deans, EC and bullet plugs are held together only by the tight fit of their contacts
  - shape (the parts interlock; form-fit): Tamiya's latch and MC4's locking clips hook into the other half (Wikipedia 'Tamiya connector', 'MC4 connector')
- **input_output**: not applicable
- **power**: passive (no power needed).
- **removability**: tool-free quick release: the two halves plug and unplug by hand (MC4 needs its unlocking tool). The wires are soldered or crimped into each half and are not meant to come out.
- **reuse_cycles**: many times: AMASS recommends 1000 mating cycles for the XT60 (AMASS XT60 datasheet). Sparks when connecting and pulling apart under load pit the contacts and shorten their life (Aloft Hobbies; Wikipedia 'MC4 connector').
- **tools_needed**: To fit: a soldering iron with enough heat for thick wire and large brass contacts (a Flite Test community guide used a 30 W iron to fit a T-plug; bigger plugs and thicker wire need more heat ⚑ [uncertain]), solder and flux, wire strippers, heat-shrink tubing and a heat gun, and a holder or jig (Flite Test). Crimp-type plugs (Tamiya-type, Anderson, MC4) need their matching crimp tool, and MC4 needs its unlocking tool (Wikipedia 'MC4 connector'). A multimeter to check polarity before first use. To use: none. *(⚑ parts need confirming)*
- **seal**: none for XT, Deans, EC, Tamiya and bullet plugs (Tamiya's housing separates the two contacts so it is usable in damp, dirty conditions, but it is not sealed; Wikipedia 'Tamiya connector'). Watertight for MC4-type solar connectors: a rubber sealing ring keeps out moisture, but only on cable of the correct diameter (Wikipedia 'MC4 connector').
- **load**: Electrical: above about 30 A (genuine AMASS ratings with the matching wire, continuous / 1-minute burst at under 60 °C temperature rise: XT60 with 12 AWG 30/60 A, XT90 with 10 AWG 45/90 A, XT120 with 8 AWG 60/120 A, AS150 with 8 AWG 75/150 A, AS300 with 6 AWG 150/300 A (Holybro); small types are lower, e.g. Tamiya 'up to about 15 A' in practice (Wikipedia)); extra-low voltage only (as used by makers for battery packs; the plugs themselves are rated higher, e.g. XT60 500 V DC (AMASS) and MC4 1500 V DC (Wikipedia), but solar strings at hundreds of volts are outside this entry). Mechanical: light: friction-held plugs (XT, Deans, EC, bullets) can be pulled apart by a firm tug or a crash; latched Tamiya and locked MC4 hold against pulling (Wikipedia). The solder joints at the back are weak against bending and pulling, so the wires need strain relief.
- **adjustable**: no.
- **play_and_precision**: not applicable
- **access_needed**: not applicable: most are in-line plugs on flying leads. Panel-mount versions are fixed into a printed or cut panel from the front (Printables 'XT60 Panel Mount').
- **materials**: Contacts: brass, gold-plated (AMASS XT60: brass gold plated, contact resistance 0.55 milliohm). Housing: nylon (PA) to UL94 V-0 flame rating, working range −20 to 120 °C (AMASS XT60 datasheet); some Deans-style housings soften when soldered (Wikipedia 'DC connector'). Wire: stranded copper, often soft silicone-insulated wire (Flite Test), sized to the plug: 12 AWG for XT60, 10 AWG for XT90, 8 AWG for XT120 and AS150, 6 AWG for AS300 (Holybro). Choose bullets that fit the wire without cutting strands away (Oscar Liang 2014). MC4: double-insulated, UV- and heat-resistant PV cable of the right diameter (Wikipedia 'MC4 connector').
- **maker_difficulty**: moderate: the plugs are cheap and easy to buy, but soldering thick wire into big brass cups needs a hot iron and some practice without melting the housing (Flite Test; Wikipedia 'DC connector'), and the real hazard is shorting a live lithium pack while working on its leads (Flite Test).

### Making it

- **processes**: 
  - off-the-shelf part: plugs, sockets and ready-made leads are bought and soldered or crimped onto the wires
  - 3D print (FDM): panel mounts, holders and soldering jigs for the plugs (see make_it_yourself)
  - laser cut: plates with a cut-out for a panel-mount plug ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the contacts are metal and are bought; only mounts, holders and jigs are printed.
- **making_tips_3d_printing**: 1) Never let a printed part carry current or stand in for a contact; print only mounts, covers, strain reliefs and jigs. 2) Material: AMASS ratings allow the plug to warm by up to 60 °C at its rated current (Holybro), while PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa 'PLA'), so print mounts that hold high-current plugs in PETG, ABS or ASA; jig designers also recommend PETG (Printables 120493). 3) Panel mounts: a popular XT60 panel mount is a 40 x 14 mm, 3 mm thick plate for M3 screws that prints without supports, and its author notes some off-brand XT60s need a patch of tape to fit tightly, so check your plug's real size and print a test (Printables 82137). 4) Soldering jigs: printed holders keep the plug and wires still; keep the male and female halves plugged together while soldering so the pins stay aligned if the housing softens (Printables 117183; Flite Test). 5) Leave room in printed battery bays for the plug body, the heat-shrink over the solder cups and the bend of thick wire, and add a strap or clamp so a yank on the battery pulls the housing, not the solder joints (see Cable gland and strain relief).
- **off_the_shelf_parts**: XT30, XT60, XT90 and XT120 plugs and sockets, and XT90-S anti-spark versions (AMASS, brand; Holybro; Aloft Hobbies); AS150 and AS300 larger plugs (Holybro); Deans-style T-plugs (Wikipedia 'DC connector'); standard and mini Tamiya housings and crimp contacts, also made by Molex, e.g. housing 19-09-1029 with crimp 02-09-1119 (Wikipedia 'Tamiya connector'); EC3 and EC5 plugs and leads (Horizon Hobby); gold bullet connectors 2, 3.5, 4, 5.5, 6 and 8 mm (Oscar Liang 2014); MC4 and MC4-compatible solar connectors with matching crimp and unlocking tools (Wikipedia 'MC4 connector'); Anderson SB / SBS plugs (Wikipedia 'DC connector'); ready-made pigtails and adapter leads; silicone wire in 6-14 AWG; heat-shrink tubing. Brand names are given only as catalogue search terms.
- **rules_of_thumb**: 
  - Size the plug and the wire together. Genuine AMASS ratings (continuous, 4 hours / burst, 1 minute; both at under 60 °C temperature rise): XT60 + 12 AWG 30 A / 60 A; XT90 + 10 AWG 45 A / 90 A; XT120 + 8 AWG 60 A / 120 A; AS150 + 8 AWG 75 A / 150 A; AS300 + 6 AWG 150 A / 300 A. For higher currents change both the plug type and the wire size (Holybro 'Connector & Wire Rating').
  - AMASS's own XT60 datasheet gives: rated current 30 A, momentary current 60 A, 500 V DC, contact resistance 0.55 milliohm, 1000 mating cycles, recommended wire 12 AWG, working temperature −20 to 120 °C; the female (XT60-F) is listed for the battery and the male (XT60-M) for the controller (AMASS XT60-F / XT60-M datasheet).
  - Figures from other sources are higher and are not measured the same way; record them side by side and design to the lower one: Oscar Liang's rules give 2 mm bullets up to 20 A, 3.5 mm 40 A, XT60 60 A, 4 mm 70 A, 6 mm 120 A, 8 mm 200 A (Oscar Liang 2014); Horizon Hobby says EC3 is 'capable of 60 continuous amps' and EC5 'more than 120A continuous current with 10-awg wire' (Horizon Hobby); Deans-type plugs up to 40 A (pulse 70 A) depending on make (Wikipedia 'DC connector'); Tamiya is rated 20 A at 160 V but about 15 A at 12 V in real use (Wikipedia 'Tamiya connector').
  - Change a battery's plug one wire at a time: cut one lead, solder and heat-shrink it, then do the other, so both bare ends are never exposed together (Flite Test 'How to - Soldering battery connector'; Flite Test 'Soldering Battery Connectors').
  - Slide the heat-shrink on before soldering, make sure both the wire and the cup are hot enough to take solder, don't overheat the housing, and double-check polarity (red to +) before plugging in (Flite Test 'Soldering Battery Connectors').
  - On a Deans-type T-plug the negative (−) is usually the parallel pin and the positive (+) the perpendicular pin (Wikipedia 'DC connector'). On a Tamiya the positive goes to the square terminal, but some airsoft packs are wired the other way (Wikipedia 'Tamiya connector').
  - Choose bullet connectors that fit the wire: if you have to cut strands away to make it fit, the connector is too small (Oscar Liang 2014).
  - Never connect or disconnect DC connectors under load: the arc can melt the contacts, raising resistance and causing overheating, and DC arcs don't self-extinguish like AC (Wikipedia 'MC4 connector'). Use an anti-spark plug where large capacitors cause a spark on connecting (Aloft Hobbies).

### When to use it

- **everyday_examples**: 
  - The yellow XT60 plug on a drone's lithium battery and power module (Holybro 'Connector & Wire Rating')
  - The latched Tamiya plug on radio-controlled car battery packs and airsoft gun batteries (Wikipedia 'Tamiya connector')
  - The red Deans-style T-plug on RC car batteries (Commons 'Deans connector 1.JPG')
  - The black MC4 plugs on the leads of a solar panel (Wikipedia 'MC4 connector')
- **when_to_use**: Use one when a battery has to be unplugged often, for charging or swapping, and the current is too high for small signal plugs: drones, RC cars, boats and planes, combat and hobby robots, and similar battery packs. Pick the size from the current and match the wire to it (Holybro). Use bullet connectors between a speed controller and motor when you want to swap motors or reverse a motor by swapping two wires without resoldering (Oscar Liang 2014). Use a latched type (Tamiya) where vibration or knocks could pull a plain plug apart, and a sealed, locking MC4-type connector for solar panels outdoors (Wikipedia). The polarised shape is the main safety feature: it stops a pack being plugged in backwards (Wikipedia 'DC connector').
- **when_not_to_use**: Not for mains: these are for battery and low-voltage DC wiring. Not for small currents or signals: use a wire-to-board plug (JST-type balance and servo plugs) or a standard barrel jack. If any half must mate any other half, use a genderless connector such as Anderson Powerpole (see Genderless connector). Don't use a plug or wire that is undersized for the current: change both to the next size up (Holybro). Don't use plain friction plugs where a tug, crash or vibration must never disconnect power; add a latch or strap, or use a locking type. Don't mix MC4 connectors from different makers: certifications and the US National Electrical Code and UL 6703 require the same type and brand (Wikipedia 'MC4 connector'). Don't unplug under load to switch something off; use a switch or fuse. Battery systems above about 60 V bring shock and arc hazards that need proper protection (MIT 'Lithium Battery Safety Guidance').
- **environment_limits**: Heat: AMASS XT60 working range is −20 to 120 °C, and its current rating assumes a temperature rise of under 60 °C (AMASS datasheet; Holybro). Deans-type housings can soften and twist if overheated while soldering (Wikipedia 'DC connector'). Lithium packs themselves should be kept out of direct sunlight, off hot surfaces and out of hot places (MIT). Water: XT, Deans, EC and bullet plugs are not sealed; Tamiya plugs are usable in damp, dirty conditions at low current (Wikipedia); MC4 is sealed by a rubber ring when used on the correct cable, and its cable must be UV- and heat-resistant because 'most cables deteriorate if used outdoors without protection from sunlight' (Wikipedia 'MC4 connector'). Corrosion: leftover soldering flux paste is corrosive, so clean it off (Flite Test). Wear: arcing on connection pits the contacts and raises their resistance (Wikipedia 'MC4 connector'; Aloft Hobbies).
- **safety_notes**: Shorted lithium packs burn: 'short-circuiting them will transform all this energy into heat/fire' (Flite Test), and fires at MIT were linked to 'shorts from improperly wired or isolated connections' (MIT 'Lithium Battery Safety Guidance'). When rewiring a pack, keep at least one wire insulated at all times and never cut both leads together (Flite Test). Reversed polarity: 'Do not reverse the polarity' (MIT); the T-plug's shape exists to stop reversed connection and the 'LiPo flash' that can cause burns (Wikipedia 'DC connector'); check polarity with a meter before first use. The plug and the wire must both suit the current, or they overheat (Holybro). Don't connect or disconnect under load: DC arcs melt contacts (Wikipedia 'MC4 connector'). Charging: use the right charger and settings, balance-charge packs of 2 cells and more, and never charge unattended (MIT). Disconnect a pack that smells, gets hot or swells (MIT). Solar: panel strings can reach 600-1500 V DC (Wikipedia 'MC4 connector'), which is dangerous and must be installed under local electrical rules, so this entry gives no solar or mains wiring steps. Soldering burns and fumes: see Soldered wire joint.
- **common_failures**: Melted or twisted housing from too much soldering heat, leaving pins misaligned so the plug won't mate; solder with the halves plugged together and work quickly (Wikipedia 'DC connector'; Flite Test). Cold or dry solder joints in the big cups because the wire or cup wasn't hot enough (Flite Test). Plug or wire too small for the current, so it runs hot (Holybro). Pitted, high-resistance contacts from sparks when plugging in or unplugging under load (Aloft Hobbies; Wikipedia 'MC4 connector'). Wrong polarity wiring, especially on Tamiya packs where some airsoft packs are reversed (Wikipedia 'Tamiya connector'; Flite Test). Ordering the wrong half, because many hobby shops name the gender after the housing rather than the metal contact (Wikipedia 'Tamiya connector'). Off-brand plugs that differ slightly in size and don't fit mounts (Printables 82137). Strands cut off to squeeze wire into a small bullet (Oscar Liang 2014). Exposed copper at the solder cups if the heat-shrink is left off or slides back (readers of Flite Test's guide ask how to stop it sliding). Mixed-brand MC4 connectors that don't seal or overheat (Wikipedia 'MC4 connector').
- **related**: 
  - Genderless connector (hermaphroditic coupling): Anderson Powerpole and SAE leads, where any half mates any other; Powerpole is the genderless choice for battery power
  - Keying (one-way-only fit): the shaped housing that stops reversed connection is keying
  - Soldered wire joint: how wires are usually fixed into XT, Deans and bullet plugs
  - Heat-shrink tubing: insulates each solder cup and bullet
  - Crimp terminals (ring, fork and spade terminals): crimped bullet and blade terminals for car and appliance wiring
  - Wire-to-board plug connectors: the small JST-type plugs used for battery balance leads and low-current power
  - Standard plug-and-socket connector (barrel jack, USB): low-current DC power
  - Magnetic connector: a plug held by magnets that breaks away safely when pulled
  - Battery holder and battery contacts: spring contacts for loose cylindrical cells at low current
  - Binding post and banana plug: test-lead plugs; RC 'banana' bullets share the name but are soldered in-line
  - Cable gland and strain relief: keeps pulls on the battery lead off the solder joints

### Pictures, videos and models

- **links**: 
  - [T-plug.jpg (Wikimedia Commons, .tirnado)](https://commons.wikimedia.org/wiki/File:T-plug.jpg): A T-shaped polarised plug for low-voltage power circuits (Deans-style T-plug) *(licence: CC BY-SA 3.0)*
  - [Deans connector 1.JPG (Wikimedia Commons, KundaliniZero)](https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG): A Deans-style T-plug pair: the male half with two flat gold contacts at right angles, and the matching female half, so it fits only one way *(licence: CC BY-SA 3.0)*
  - [Tamiya Connector.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif): A standard Tamiya battery connector, the plug used on many RC car battery packs *(licence: Public domain)*
  - [MC4 Connector Front and Top View.jpg (Wikimedia Commons, Orion Lawlor)](https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg): Positive and negative MC4 solar connectors, showing the red sealing ring and the locking clips *(licence: CC0)*
  - [Tamiya adapter.jpg (Wikimedia Commons, Cqdx)](https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg): An adapter cable between a standard Tamiya and a mini Tamiya connector, showing the two sizes side by side *(licence: CC0)*
- **make_it_yourself**: 
  - [XT60 Panel Mount (Fuzebox, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/82137-xt60-panel-mount): 40 x 14 mm, 3 mm thick plate that holds an XT60 in a panel with M3 screws; prints without supports *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [XT30 XT60 XT90 Solder Assistant (Guyzerr, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/117183-xt30-xt60-xt90-solder-assistant): Holder that grips a mated XT30, XT60 or XT90 pair and its wires while you solder, keeping the pins aligned *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [XT60/XT90 connector soldering tool (LuKowalski, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/120493-xt60xt90-connector-soldering-tool): Spring-loaded PETG jig that lines the wires up with XT60 or XT90 contacts to speed soldering and avoid overheating the housing; needs two springs and M2 screws *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- **diagram_idea**: End-on outlines of four plug faces (XT60 with its bevelled corners, Deans T-plug, Tamiya, a bullet pair) showing that each only fits one way, with + and − marked, beside a simple chart linking plug size, wire gauge and continuous amps (XT60 + 12 AWG = 30 A, XT90 + 10 AWG = 45 A, AS150 + 8 AWG = 75 A), and a small inset of the anti-spark resistor contact touching first.
- **sources**: 
  - https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating
  - https://mrsdprojects.ri.cmu.edu/2025teamb/wp-content/uploads/sites/84/2025/05/xt60.pdf
  - https://en.wikipedia.org/wiki/DC_connector
  - https://en.wikipedia.org/wiki/Tamiya_connector
  - https://en.wikipedia.org/wiki/MC4_connector
  - https://oscarliang.com/choosing-gold-bullet-connectors-motor-esc/
  - https://assets.horizonhobby.com/product/connector-ec3-battery-with-4-wire-16-awg/EFLAEC310.html
  - https://assets.horizonhobby.com/product/extension-lead-ec5-with-6-wire-10-awg/EFLAEC506.html
  - https://alofthobbies.com/products/xt90-s-with-spark-suppression
  - https://flitetest.com/articles/how-to-soldering-battery-connector
  - https://flitetest.com/articles/soldering-battery-connectors
  - https://ehs.mit.edu/wp-content/uploads/2019/09/Lithium_Battery_Safety_Guidance.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:T-plug.jpg
  - https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG
  - https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif
  - https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg
  - https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: above about 30 A
- **tools**: soldering iron, crimper, heat gun, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…W iron to fit a T-plug; bigger plugs and thicker wire need more heat [uncertain]), solder and flux, wire stri…"*
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** processes, tools_needed

## 353 Heat-shrink tubing (heat-shrink sleeve, adhesive-lined heat-shrink)

*electrical connections.* A plastic tube slid over a joint before it is made; heating makes it shrink tightly round the joint, insulating it and protecting it from rubbing, and glue-lined types also seal out water

*Also covers:* Also covers shrink ratio, materials, end caps, cold-shrink tubing, electrical tape, self-amalgamating tape, and mechanical uses (grips, sleeves, bundling). Safety: heat-gun burns.

### What it is

- **plain_name**: A plastic tube you slide over a wire joint before you make it, then warm with a hot-air gun so it shrinks tight round the joint, covering the bare metal; some have glue inside that melts and seals out water
- **term**: Heat-shrink tubing (heat-shrinkable insulation sleeving)
- **aliases**: 
  - heat shrink, heatshrink, shrink tube, shrink tubing, shrink sleeve (Wikipedia 'Heat-shrink tubing')
  - heat-shrinkable sleeving, insulation sleeving (NASA-STD-8739.4A)
  - adhesive-lined heat-shrink, dual-wall heat-shrink, glue-lined heat-shrink: an outer polyolefin tube with a meltable glue lining that seals (AutomationDirect)
  - heat-shrink end cap: a closed-end tube for insulating cut wire ends (Wikipedia)
  - shrinkable parts and boots: moulded heat-shrink shapes such as connector backshell boots (NASA-STD-8739.4A §9.11)
  - heat-shrink cable repair sleeve: a wrap-around sleeve for mending a cable without cutting it (Commons 'Heat shrink cable repair tubing (HSRS-N).jpg')
  - heat-shrinkable sleeve: a large wrap-around or tubular glue-lined sleeve used as a corrosion coating on pipeline joints, a bigger cousin (Wikipedia 'Heat-shrinkable sleeve')
  - solder sleeve: heat-shrink with a solder ring inside (separate entry, Solder sleeve)
  - cold-shrink tubing: a pre-stretched rubber tube on a removable core that shrinks with no heat (Wikipedia 'Cold shrink tubing'; covered here as an alternative)
  - electrical tape, insulating tape, vinyl tape; self-amalgamating (self-fusing, self-vulcanising) tape: wrap-on alternatives covered here
  - Schrumpfschlauch (German); Raychem (brand; invented heat-shrink tubing in 1962, Wikipedia)
- **family**: electrical connections
- **other_families**: seals & pass-throughs
- **one_liner**: A tube of specially treated plastic is slid over a wire or joint and heated with a hot-air gun, so it shrinks to between a half and a sixth of its diameter and grips tightly, insulating the joint and protecting it from rubbing, while glue-lined versions also melt their inner glue to seal out water.
- **complexity**: Single piece: one length of tubing, usually polyolefin plastic; adhesive-lined types have a second inner layer of hot-melt glue (Wikipedia 'Heat-shrink tubing'; AutomationDirect). It needs a heat source to fit, usually a hot-air gun.
- **how_it_works**: The tube is made by extruding plastic, cross-linking it (usually with radiation) so it 'remembers' its size, then heating it, stretching it wider and cooling it fast so it stays stretched; when you heat it again above the plastic's crystalline melting point, it shrinks back towards its original size (Wikipedia 'Heat-shrink tubing'). It shrinks mainly in diameter, typically 2:1 or 3:1 for polyolefin, and only about 6% in length, so it closes tightly round wires, crimps and solder joints of awkward shape and stays in place by its tight grip (Wikipedia). In adhesive-lined tubing the inner glue melts as the tube shrinks and flows into the gaps, making 'a water-tight, air-tight, secure bond' when it cools (AutomationDirect). Cold-shrink does the same without heat: a rubber tube is held stretched on a plastic core, and when you unwind the core it collapses onto the joint (Wikipedia 'Cold shrink tubing').

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: insulates and covers bare joints, and glue-lined tubing seals them against water (Wikipedia; AutomationDirect)
  - join and hold: holds a bundle of wires together, adds strain relief at a joint or connector, and grips small parts (Wikipedia 'Heat-shrink tubing')
  - glue or bond: adhesive-lined tubing glues itself to what it covers, e.g. as a non-slip grip on tool handles (Fine Woodworking)
- **motion**: none: it is a fixed covering. Short lengths stay flexible, but long lengths over a cable make it 'extremely difficult to bend and coil without damage' (NASA-STD-8739.4A §9.10).
- **degrees_of_freedom**: 0: once shrunk it grips the part and doesn't move.
- **special_behaviour**: none: it is a covering. (Its shrink-to-fit shape memory, which makes it grip irregular shapes, is not one of the listed behaviours; the same effect is used in Self-folding print.)
- **holding_principle**: 
  - friction or clamping (force-fit): the shrunk tube squeezes the part and is 'mechanically held in place ... by its tight fit' (Wikipedia 'Heat-shrink tubing')
  - material bond (glue, solvent or melting): adhesive-lined tubing's glue bonds to the part (AutomationDirect); plain tubing heated very near its melting point may fuse to the material below (Wikipedia)
- **input_output**: not applicable
- **power**: passive (no power needed): heat is needed only to shrink it; cold-shrink needs no heat at all.
- **removability**: permanent: it must be slit along its length with a knife and peeled off, and can't be reused. Self-amalgamating tape is the easiest wrap-on cover to remove: 'quick, clean, and easy' (Wikipedia 'Self-amalgamating tape').
- **reuse_cycles**: once.
- **tools_needed**: A hot-air gun or hot-air rework station, or an oven for batches (Wikipedia; NASA-STD-8739.4A §9.9.1); a sharp knife or scissors for a clean, burr-free cut, because a ragged end can split (TE 114-120022); heat-resistant gloves and good ventilation (TE 114-120022). Suppliers don't recommend lighters or holding a soldering iron near the tube, which heat unevenly (Wikipedia). Cold-shrink and tapes need no tools.
- **seal**: dust-resistant for plain tubing: it protects 'from dust, solvents and other foreign materials' but has no glue to stop water creeping along the wire (Wikipedia 'Heat-shrink tubing'). Watertight for adhesive-lined (dual-wall) tubing, whose melted glue lining seals the ends (AutomationDirect 'water-tight, air-tight'; Wikipedia). Self-amalgamating tape also gives a 'seamless, rubbery, waterproof' layer (Wikipedia 'Self-amalgamating tape').
- **load**: Electrical: above about 30 A (it carries no current: it insulates joints of any current, and is chosen by diameter, not amps); rated for mains (common tubing is rated 600 V, e.g. AutomationDirect's adhesive-lined tubing, and UL 224 is a listed standard (Wikipedia)), but this entry gives no mains wiring steps. Mechanical: light: it adds some strain relief and protection from rubbing (Wikipedia), but it is not a structural joint and must not be relied on to hold wires together; the joint underneath must already be mechanically sound. Thin tubing can be cut by sharp edges and wire ends (TE 114-120022: strands poking through).
- **adjustable**: no: it can be slid along before heating, but once shrunk it stays put.
- **play_and_precision**: not applicable
- **access_needed**: end of a tube or shaft: the tube has to be slid on over a free end, so it must go onto one wire before a joint is made or a plug is fitted (SparkFun 'Working with Wire'). Where no end is free, use a wrap-around repair sleeve (Commons 'Heat shrink cable repair tubing (HSRS-N)') or tape.
- **materials**: Tubing materials (Wikipedia 'Heat-shrink tubing'): polyolefin, the most common, −55 to 135 °C, shrinks at about 143 °C, usually 2:1 (3:1 available), many colours including clear, and can survive a brief touch of a soldering iron; PVC, cheap and very colourful, but 'tends to burn if touched with a soldering iron'; silicone rubber, −50 to 200 °C, flexible and scrape-resistant; fluoropolymers: FEP, PVDF, PTFE (−55 to 175 °C) and Viton (−55 to 200 °C) for heat and chemicals; woven fabric for abrasion. Adhesive-lined: flame-retardant polyolefin outside with a meltable glue lining, shrinking at 110 °C (AutomationDirect). It covers copper wire, solder joints, crimps, connector bodies, cable jackets and also non-electrical parts such as wooden clamp handles (Fine Woodworking). Tapes: PVC (vinyl) electrical tape (Wikipedia 'Electrical tape'); silicone, EPR and PIB self-amalgamating tapes (Wikipedia 'Self-amalgamating tape').
- **maker_difficulty**: easy: cut a length, slide it on before making the joint, and heat it evenly; the main thing to remember is to slide it onto the wire before making the joint (SparkFun 'Working with Wire').

### Making it

- **processes**: off-the-shelf part: tubing, end caps, cold-shrink tubes and tapes are bought, 3D print (FDM): only accessories such as tube cutters and spool holders (see make_it_yourself)
- **print_in_place**: no: it is bought tubing shrunk with heat; only cutters and holders are printed.
- **making_tips_3d_printing**: 1) Keep the heat off printed parts: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa 'PLA'), while tubing shrinks at about 110-143 °C (AutomationDirect; Wikipedia) and a heat gun blows air at 100-550 °C (Wikipedia 'Heat gun'), so shrink the tubing before the wire goes into a printed housing, or shield the print; NASA likewise says nearby temperature-sensitive parts 'should be protected from exposure to direct heat' (NASA-STD-8739.4A §9.9.2). 2) Shrinking glue-lined tubing over a printed handle or knob as a grip risks warping the print; try it on a test piece first, or use a more heat-resistant filament such as PETG, ABS or ASA ⚑ [uncertain]. 3) Leave room in printed cable channels and enclosures for sleeved splices, which are fatter than the wire, and stagger several splices so a bundle stays slim (NASA-STD-8739.4A §7.2.35). 4) In 3D printers, heat-shrink is useful on larger wires such as heater-cartridge leads (Voron 'Electrical Wiring'). 5) Printed tube cutters with length stops and spool holders make it easy to cut clean, square lengths (Printables 94283, 579937); TE stresses a clean cut, because a ragged end can split as it shrinks (TE 114-120022). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Thin-wall polyolefin heat-shrink, 2:1 and 3:1, in assortment boxes and on reels (Wikipedia); adhesive-lined (dual-wall) heat-shrink, 2:1 and 3:1, sold in 4 ft sticks (AutomationDirect); clear tubing, which turns clear as it shrinks (TE 114-120022); heat-shrink end caps (Wikipedia); solder sleeves (Wikipedia); conductive-lined tubing for unsoldered joints (Wikipedia); moulded shrinkable boots for connectors (NASA-STD-8739.4A §9.11); wrap-around cable repair sleeves (Commons HSRS-N photo); fluoropolymer and silicone tubing for high temperatures (Wikipedia); cold-shrink tubes on removable cores (Wikipedia 'Cold shrink tubing'); PVC electrical tape, e.g. 3M Scotch Super 33+ (7 mil, UL 510 listed; 3M data sheet); silicone self-amalgamating tape (A-A-59163 / MIL-I-46852 for aviation, marine and military use) and EPR and PIB rubber self-amalgamating tapes (Wikipedia); hot-air guns and rework stations. Brand names are given only as catalogue search terms.
- **rules_of_thumb**: 
  - Choose a size whose expanded (supplied) inside diameter slides over the biggest part, and whose fully shrunk (recovered) inside diameter is smaller than the part, so that after shrinking it still grips tightly (NASA-STD-8739.4A §9.8.3a, with a sizing table, Table 9-3).
  - TE's sizing rule: the tube should shrink by at least 20% of its supplied size, but not all the way to its fully recovered size; leave at least 10% 'unresolved recovery'. Choose the biggest size that will still fit snugly, for the thickest finished wall (TE 'How to select correct size tubing'; TE 114-120022 §3.1).
  - Polyolefin usually shrinks 2:1 in diameter (3:1 available); heat-shrink in general shrinks to between a half and a sixth of its diameter, and about 6% in length (Wikipedia 'Heat-shrink tubing'). Cut it longer than needed: 'Do not cut the tube length to be the final installed length required' (TE).
  - Make insulation tubing reach past the end of the wire insulation, or cable jacket, by at least 2 x the diameter of the larger of the two, on both sides of a splice (NASA-STD-8739.4A §9.8.5 and §19.2.6).
  - Shrink from one end to the other, rotating the work or the gun, so no air is trapped; keep the gun's nozzle off the tube; stop at once if it blisters, chars, or turns unusually glossy or matt; finished tubing should be smooth, with no cold spots or wrinkles (TE 114-120022 §3.2). For boots, shrink the end that grips the connector first (NASA-STD-8739.4A §9.11.2).
  - Large metal parts soak up heat, so they need longer heating than plastic ones (TE 114-120022).
  - Outdoors use black: coloured polyolefin resists ultraviolet less well, and 'only black is recommended for outdoor applications' (Wikipedia 'Heat-shrink tubing').
  - Vinyl electrical tape: wrap at least two half-lapped layers, stretched to about 5/8 of the tape's width, wrapping from the smaller diameter to the larger, with no tension on the last wrap so the end doesn't lift ('flag'); Super 33+ is rated 105 °C (80 °C under UL 510) and 600 V (3M Scotch Super 33+ data sheet).
  - Store cold-shrink tubing below 43 °C (Wikipedia 'Cold shrink tubing').

### When to use it

- **everyday_examples**: 
  - The coloured sleeve over a soldered wire splice or a resistor added to a wire (SparkFun 'Working with Wire')
  - Sleeves on the heater-cartridge wires and other larger wires in a 3D printer (Voron 'Electrical Wiring')
  - Rubbery glue-lined grips shrunk onto clamp handles (Fine Woodworking 2021)
  - Colour bands for coding wires, and the plastic coat on fibreglass CB radio aerials (Wikipedia 'Heat-shrink tubing')
- **when_to_use**: Use it to insulate and protect almost any wire joint: soldered splices, crimps, solder cups on plugs, bullet connectors, resistor and LED legs. It is neat, tough and slim, and won't unwind like tape (Wikipedia; SparkFun). Use it to repair damaged insulation, bundle wires, colour-code them and add strain relief where a wire leaves a connector (Wikipedia). Use adhesive-lined tubing outdoors, in vehicles and anywhere damp, because its glue seals the ends (AutomationDirect). Use it beyond electronics too: glue-lined tubing makes thick, grippy handles (Fine Woodworking). Choose cold-shrink where heat isn't allowed or practical, electrical tape for a quick wrap where no wire end is free, and self-amalgamating tape for a removable waterproof wrap or an emergency hose patch (Wikipedia).
- **when_not_to_use**: It is not a joint: never use it to hold wires together that aren't already soldered, crimped or clamped. Don't use plain tubing where water must be kept out: use adhesive-lined tubing, a solder sleeve or self-amalgamating tape. It can't go on if no end of the wire is free (use a wrap-around sleeve or tape). Don't shrink it next to heat-sensitive parts, sensors, optics or printed plastic that can't be shielded (NASA-STD-8739.4A §7.2.41; Prusa 'PLA'). Long lengths make a cable stiff, so avoid sleeving cables that must flex a lot (NASA-STD-8739.4A §9.10). Avoid PVC tubing near a soldering iron (Wikipedia). For mains wiring, use only the methods the wiring rules and the equipment maker allow.
- **environment_limits**: Heat: polyolefin −55 to 135 °C, silicone −50 to 200 °C, PTFE −55 to 175 °C, Viton −55 to 200 °C (Wikipedia 'Heat-shrink tubing'); vinyl tape up to 105 °C (3M). Sunlight: coloured polyolefin resists UV poorly, so use black outdoors; PVC tubing needs a UV stabiliser for outdoor use (Wikipedia). Water: only adhesive-lined tubing and self-amalgamating tape seal (AutomationDirect; Wikipedia). Rubbing and cold flow: NASA requires sleeving over splices to be 'protected from cold flow and abrasion' (NASA-STD-8739.4A §7.2.33); silicone self-amalgamating tape is soft and tears from small nicks (Wikipedia). Vinyl tape's end can lift over time if the last wrap is stretched (3M). Storage: cold-shrink must be kept below 43 °C before use (Wikipedia).
- **safety_notes**: Heat-gun burns: a heat gun blows air at about 100-550 °C, much hotter than a hair dryer, and can easily scald skin or set hair alight (Wikipedia 'Heat gun'); wear heat-resistant gloves when handling hot tubing (TE 114-120022), and park the gun on its stand pointing away from things that can burn. Fire and fumes: overheated tubing 'can melt, scorch or catch fire like any other plastic', and suppliers don't recommend lighters (Wikipedia 'Heat-shrink tubing'); stop heating if it blisters or chars, avoid breathing the fumes and ventilate before carrying on (TE 114-120022); burning PVC gives off hydrogen chloride fumes (Wikipedia 'Polyvinyl chloride'). Hidden faults: heat-shrink covers a joint, so a bad solder joint or crimp underneath can't be seen; check the joint before covering it, or use clear tubing so it stays visible. Not a substitute for proper insulation in mains work; this entry gives no mains wiring steps, and mains work must follow local law (e.g. Approved Document P in England).
- **common_failures**: Forgetting to slide the tube on before making the joint, which SparkFun's splicing steps tell you to do first (SparkFun 'Working with Wire'). Tube too big, so it stays loose; tube too small, so it won't fit or splits (TE 114-120022 troubleshooting; NASA §9.8.3). Not fully shrunk, leaving loose or partly shrunk areas: too little heat, too little time, or a big metal part soaking up heat (TE; NASA §9.8.3b). Overheated: scorched, blistered, split or charred tubing, or melted wire insulation at the tube's edge (TE troubleshooting; NASA §9.8.3c). Air trapped inside from heating the middle first (TE). Stray wire strands or sharp ends poking through (TE troubleshooting). Tube too short, because it shrank in length or wasn't cut long enough, leaving bare metal at the ends (TE; NASA §9.8.5). Sliding sleeves: NASA requires tubing to be secured so it can't slide along a bundle (NASA §9.8.4). Plain tubing used outdoors, letting water wick along the wire; use glue-lined tubing (AutomationDirect). Coloured tubing cracking in sunlight (Wikipedia). Tape unwinding ('flagging') because the last turn was stretched (3M).
- **related**: 
  - Solder sleeve (solder-seal splice): heat-shrink with a solder ring and glue rings inside, which solders, insulates and seals in one step
  - Soldered wire joint: the joint heat-shrink most often covers
  - Crimped butt splice: often sold inside its own glue-lined heat-shrink sleeve
  - Hot-melt adhesive: the same kind of glue lines adhesive-lined tubing; a blob of hot glue is a quick, rougher insulator
  - Cable gland and strain relief: seals and grips a cable where it passes through a wall; heat-shrink only covers and lightly supports
  - Wire-end ferrule: finishes a stranded wire for a terminal, while heat-shrink insulates a joint
  - Self-folding print (4D printing): uses the same shape memory, plastic that shrinks back when heated
  - Silicone and MS-polymer adhesive sealants: for sealing gaps and potting, where a tube can't be slid on
  - Linear ratchet (cable-tie ratchet): cable ties bundle wires and can be removed; heat-shrink bundles more neatly but permanently
  - Rope-end finishing (whipping, heat-sealing, aglet): heat-shrink can also cap a cord end

### Pictures, videos and models

- **links**: 
  - [Schrumpfschlauch animated modified.gif (Wikimedia Commons, Smial)](https://commons.wikimedia.org/wiki/File:Schrumpfschlauch_animated_modified.gif): Animation of heat-shrink tubing shrinking round a wire as heat is applied *(licence: CC BY-SA 2.0 DE)*
  - [Video of Heat shrink tube before and after.ogv (Wikimedia Commons, Andrewlord)](https://commons.wikimedia.org/wiki/File:Video_of_Heat_shrink_tube_before_and_after.ogv): Video of adhesive-lined, cross-linked polyolefin heat-shrink being shrunk with a 2000 W hot-air gun *(licence: CC BY-SA 3.0)*
  - [Heat shrink covering.JPG (Wikimedia Commons, Steven1108)](https://commons.wikimedia.org/wiki/File:Heat_shrink_covering.JPG): Small sleeves on individual joints with a larger heat-shrink tube covering them all *(licence: CC BY-SA 3.0)*
  - [Heat-shrink tubing.jpg (Wikimedia Commons, oomlout)](https://commons.wikimedia.org/wiki/File:Heat-shrink_tubing.jpg): Ten colours of 3 mm heat-shrink tubing, as used for colour coding *(licence: CC BY-SA 2.0)*
  - [TE Connectivity 114-120022, Size Selection & Installation of Single Wall Heat Shrink Tubing (2023)](https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6166/Microsoft%20Word%20-%20Application%20Spec_General%20Purpose%20Single%20wall_%20114-120022.pdf): Figures of shrinking a tube from one end with a heat gun while rotating the work, the finished result, and a troubleshooting table *(licence: link only (manufacturer document))*
- **make_it_yourself**: 
  - [Heat-shrink tube cutter (multi material) (ripper, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/94283-heat-shrink-tube-cutter-multi-material): Spring-loaded cutter with a length stop for cutting heat-shrink to clean, square lengths; needs a blade, two springs and M3/M4 screws; printed in PETG *(licence: Creative Commons Attribution-ShareAlike)*
  - [HSW Organizer/Winder For Heat Shrink (Ben Carlisle, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/579937-hsw-organizerwinder-for-heat-shrink): Snap-together spool that holds up to about 4 m of heat-shrink so you can pull out and snip a length; mounts with one M3 screw *(licence: Creative Commons Attribution-NonCommercial)*
  - [Heat-shrink tube organizer IKEA Skådis (Hoemp Made, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/751236-heat-shrink-tube-organizer-ikea-skadis): Pegboard organiser for sticks of heat-shrink tubing sorted by size *(licence: Creative Commons Attribution)*
- **diagram_idea**: Three frames of the same soldered splice: a loose tube slid back along the wire before soldering, the tube moved over the joint, and the tube shrunk tight reaching two wire diameters past each end; plus a cut-away of glue-lined tubing showing the melted glue filling the gaps at the ends, and a small arrow showing heating start at one end and move along.
- **sources**: 
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://en.wikipedia.org/wiki/Cold_shrink_tubing
  - https://en.wikipedia.org/wiki/Electrical_tape
  - https://en.wikipedia.org/wiki/Self-amalgamating_tape
  - https://en.wikipedia.org/wiki/Heat_gun
  - https://en.wikipedia.org/wiki/Polyvinyl_chloride
  - https://en.wikipedia.org/wiki/Heat-shrinkable_sleeve
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://www.te.com/en/products/heat-shrink-tubing/intersection/how-to-select-correct-size-tubing.html
  - https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6166/Microsoft%20Word%20-%20Application%20Spec_General%20Purpose%20Single%20wall_%20114-120022.pdf
  - https://www.automationdirect.com/adc/overview/catalog/wire_-a-_cable_management/heat_shrink_tubing/adhesive_lined
  - https://multimedia.3m.com/mws/media/993011O/scotch-super-33-vinyl-electrical-tape.pdf
  - https://learn.sparkfun.com/tutorials/working-with-wire/all
  - https://www.finewoodworking.com/2021/01/28/workshop-tip-heat-shrink-tubing-makes-clamp-handles-easy-to-grip
  - https://docs.vorondesign.com/build/electrical/
  - https://help.prusa3d.com/article/pla_2062
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Schrumpfschlauch_animated_modified.gif
  - https://commons.wikimedia.org/wiki/File:Video_of_Heat_shrink_tube_before_and_after.ogv
  - https://commons.wikimedia.org/wiki/File:Heat_shrink_covering.JPG
  - https://commons.wikimedia.org/wiki/File:Heat-shrink_tubing.jpg
  - https://commons.wikimedia.org/wiki/File:Heat_shrink_cable_repair_tubing_(HSRS-N).jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: above about 30 A
- **tools**: soldering iron, heat gun, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing

## 354 Solder sleeve (solder-seal splice)

*electrical connections.* A clear heat-shrink tube with a ring of solder in the middle and rings of meltable glue at each end; heating it with a hot-air gun solders, insulates and seals a splice in one step, with no soldering iron

*Also covers:* Also covers inspecting the joint through the clear tube. Safety: it is still soldering, so the same vibration and mains limits as Soldered wire joint apply

### What it is

- **plain_name**: A short see-through shrink tube with a ring of solder in the middle and a ring of meltable glue near each end: you push two stripped wire ends into it, warm it with a hot-air gun, and it solders, insulates and seals the joint in one go, with no soldering iron
- **term**: Solder sleeve (solder-seal splice; heat-shrinkable soldering device)
- **aliases**: 
  - solder seal connector, solder seal wire connector, solder seal butt connector (the usual shop names; Hackaday 2023; Vetco)
  - solder butt connector, heat-shrink solder connector, soldering heat-shrink butt connector, waterproof solder connector (shop names; Markertek; Vetco)
  - solder sleeve splice; 'heat shrinkable soldering device' and 'heat-shrinkable solder termination device with meltable sealing preforms at ends' (NASA-STD-8739.4A §3.2 Definitions, §7.2.39, §19.6)
  - 'Lötverbinder' (German name) (German Wikipedia 'Lötverbinder')
  - solder sleeve shield terminator: the same idea used to solder a ground wire onto a cable's braided screen (NASA-STD-8739.4A §11, Fig. 11-2; TE RPIP-688-00)
  - solder sleeve wire terminator: a stepped sleeve that solders a wire onto a connector pin, post or component lead (TE RPIP-824-00 §4.4)
  - crimp/solder shrink butt connector: a hybrid with a metal barrel to crimp as well as a solder ring (Quick Cable 165605)
  - SolderSleeve (TE Connectivity / Raychem, brand) (TE catalogue; Raychem SolderSleeve data sheet). History: Raychem patented a 'heat shrinkable connector with preplaced solder therein' (US 3,316,343, priority 1966), and a 'sealed solder connector' with the glue rings was patented in 1988 (US 4,883,925) (Google Patents)
- **family**: electrical connections
- **other_families**: welding, brazing & soldering, seals & pass-throughs
- **one_liner**: A clear heat-shrink tube with a built-in ring of flux-cored solder and two rings of hot-melt glue: heated with a hot-air gun over two overlapped bare wire ends, the solder melts into the wires while the tube shrinks and the glue seals onto the insulation, giving a soldered, insulated, splash-proof splice you can inspect through the tube.
- **complexity**: A single ready-made part (a small assembly that acts as one unit): a transparent heat-shrinkable plastic tube (polyolefin or, in aerospace types, PVDF); a ring (preform) of solder with flux in the middle; and two rings of meltable thermoplastic glue (sealing rings) near the ends, often coloured to show the wire size (TE catalogue p. 4; German Wikipedia 'Lötverbinder'; Markertek). Some versions add a pre-fitted ground lead (shield terminators) or a metal crimp barrel (Raychem SolderSleeve data sheet; Quick Cable).
- **how_it_works**: You strip both wires, overlap (or lightly twist) the bare ends and slide the sleeve on so the solder ring sits over the bare copper and the glue rings sit over the insulation (NASA-STD-8739.4A §19.6.1a; TE RPIP-824-00 §4.2). Hot air shrinks the tube, which squeezes the softening solder ring onto the wires; the flux cleans the copper so the molten solder flows in and wets it, and the glue rings melt and seal round the insulation at each end (TE catalogue p. 3-4; Hackaday 2023). Because the tube is clear you can check the result: a good joint shows no trace of the ring's original shape and a smooth solder fillet along the wires (NASA §19.6.1c, §20.5.1g; TE RPIP-824-00 §4.2.3).

### Finder attributes

- **job**: 
  - join and hold: makes a permanent soldered splice between two (or more) wires, or a wire and a pin or cable screen (the finder reaches this entry through the 'electrical connections' family)
  - seal it, or pass cables or fluid through: the glue rings and the shrunk tube keep water and dirt out of the joint and out from under the wire insulation (German Wikipedia 'Lötverbinder'; TE catalogue p. 7)
- **motion**: none: the finished splice is a stiff section of wire, and it must not sit where the cable flexes (NASA-STD-8739.4A §7.2.36).
- **degrees_of_freedom**: 0: the joined wires are fixed to each other.
- **special_behaviour**: 
  - none: it simply joins and seals. Its one clever feature is that it combines soldering, insulating and sealing in a single heating step, and the clear tube lets you inspect the joint afterwards (TE catalogue p. 3).
- **holding_principle**: 
  - material bond (glue, solvent or melting): molten solder wets both wires and sets into a metal bridge (NASA-STD-8739.4A §19.6.1c), and the melted glue rings bond the tube to the insulation
  - friction or clamping (force-fit): the shrunk tube grips the wires tightly, which gives some strain relief (TE catalogue p. 3: the sleeve 'conforms to cable contours, and provides strain relief')
- **input_output**: not applicable
- **power**: passive (no power needed): heat is used only to make the joint.
- **removability**: permanent: the usual repair is to cut the splice out and fit a new one. TE's procedure for a badly overheated shield terminator is to score the sleeve lengthwise with a blade, soften it with the heat gun and peel it off (TE RPIP-688-00 §6.2).
- **reuse_cycles**: once: each sleeve is used once. An under-heated sleeve can be reheated until the solder flows (TE RPIP-688-00 §6.1), but a finished splice is cut out, not taken apart.
- **tools_needed**: Hot-air gun, ideally with a reflector nozzle that wraps the heat round the sleeve; TE's procedure lists hot-air guns set to about 650 ± 50 °F (about 340 °C), or infrared heaters (TE RPIP-824-00 §2.0), and suppliers advise against a lighter for heat-shrink (Wikipedia 'Heat-shrink tubing'). Wire strippers. Something to hold the wires and sleeve still while it heats and cools: TE sells a holding fixture (TE RPIP-824-00 §4.2.2), or use a printed wire clamp. A soldering iron is needed only to pre-tin thick or fine-stranded wires (TE RPIP-824-00 §4.2.1). No crimp tool, except for crimp/solder hybrids.
- **seal**: watertight: the melted glue rings seal the tube to the wire insulation so moisture can't reach the joint or creep under the insulation (German Wikipedia 'Lötverbinder'; Hackaday 2023: 'a tough, waterproof joint'). Grades differ: TE rates its everyday B-155 and CWT splices only as 'splashproof' and its D-1744 aerospace series as 'immersion sealed' (TE catalogue p. 7), so treat cheap sleeves as splash-proof rather than fit for long immersion ⚑ [uncertain]. *(⚑ parts need confirming)*
- **load**: Electrical: up to about 30 A, extra-low voltage only. The splice carries what its wire carries: sleeves come in colour-coded sizes for 26-24, 22-18, 16-14 and 12-10 AWG wire (Vetco; Markertek), and TE quotes a voltage drop of only 2.0 mV across its splices (TE catalogue p. 12); no seller publishes a current rating for the sleeve itself ⚑ [uncertain]. Shop packets state 600 V (Quick Cable) or 1 kV (Markertek) insulation ratings, but that is not an approval for mains wiring (see safety_notes). Mechanical: medium in a straight pull when well made (TE: tensile strength 'exceeds strength of conductor', catalogue p. 12); weak against bending and vibration, which crack the wire where the stiff soldered section ends (NASA-STD-8739.4A §7.2.36), as with any soldered splice. Cheap sleeves vary: one hobbyist found in destructive tests that many 'had not wetted the copper and the wires were only physically held together by the plastic' (Hobby-Machinist forum, 2021) ⚑ [uncertain: forum report]. *(⚑ parts need confirming)*
- **adjustable**: no: once heated the splice is fixed.
- **play_and_precision**: not applicable
- **access_needed**: both sides: you need room all round the splice to slide the sleeve on, wrap hot air round it and see through it; the wires must be fed into the sleeve from both ends (TE RPIP-824-00 §4.2.2). Hot air also reaches nearby parts, so NASA forbids splices where neighbouring parts, wires or joints can't be shielded from the heat (NASA-STD-8739.4A §7.2.41).
- **materials**: Wires: copper, bare or tinned, solid or stranded; TE's splice tables cover 26 to 10 AWG, with 'Micro SolderSleeve' parts for finer wire (TE catalogue p. 8-11). Wires 16 AWG and larger, or with more than 19 strands, should be pre-tinned with an iron first (TE catalogue p. 7; RPIP-824-00 §4.2.1). Solder alloy and flux must suit the wire's plating (NASA-STD-8739.4A §7.2.40); aluminium and stainless steel are hard to solder at all (Wikipedia 'Soldering'). Sleeve: radiation-crosslinked polyolefin (low-temperature types) or PVDF (high-temperature types) (TE catalogue p. 12). Solder: most shop sleeves use lead-free tin-bismuth Sn42Bi58, which melts at about 138 °C (Markertek; Quick Cable; Wikipedia 'Solder alloys' lists the similar Bi57Sn43 at 139 °C); TE's own range uses Sn42Bi58 (B-155), tin-lead Sn63Pb37 (D-110, D-1744) or tin-lead-cadmium Sn50Pb32Cd18 (CWT) (TE catalogue p. 12). The wire insulation must survive installation: TE lists a minimum wire temperature rating of 85 °C for its low-temperature B-155 and CWT splices and 125 °C for D-110 and D-1744 (TE catalogue p. 7), and NASA allows solder sleeves only 'where wire insulation temperatures permit' (NASA-STD-8739.4A §7.2.21).
- **maker_difficulty**: easy: no soldering-iron skill is needed, just stripping, positioning and even heating; the main skill is judging when to stop heating, which the clear tube makes possible (Hackaday 2023; TE RPIP-824-00 §4.2.3). Getting a properly wetted joint with cheap sleeves takes care (iATN teardown, 2013).

### Making it

- **processes**: 
  - off-the-shelf part: bought ready-made and fitted with a hot-air gun
  - 3D print (FDM): only helpers, such as a clamp that holds the two wires in line while the sleeve is heated, and cable clamps that keep bending away from the splice
- **print_in_place**: no: the sleeve is a bought part; only holding jigs can be printed (one popular print-in-place wire clamp is listed in make_it_yourself).
- **making_tips_3d_printing**: The sleeve itself can't be printed, but prints help around it. 1) A wire-holding jig keeps the overlap centred under the solder ring and stops the wires moving while the solder sets; TE recommends a holding fixture for exactly this (TE RPIP-824-00 §4.2.2). Leave the jaws far enough apart that the sleeve and the hot air sit in free space between them, not against plastic. 2) Keep printed parts out of the hot-air stream: the gun runs at around 340 °C (TE RPIP-824-00 §2.0) and the solder only melts at about 138 °C or more (Markertek), far hotter than PLA or PETG can stand, so print jigs in a heat-tolerant filament and point the gun away from them ⚑ [uncertain: no printed-jig heat test found]. 3) In a printed enclosure, grip the cable's outer jacket with a clamp, gland or cable-tie anchor so pulls and bends never reach the splice (NASA-STD-8739.4A §7.2.36; see Cable gland and strain relief). 4) Leave room in cable channels for the splice, which is fatter and stiffer than the wire: sleeves are about 25-40 mm long (German Wikipedia 'Lötverbinder'), and staggering several splices keeps a bundle slim (NASA §7.2.35). 5) Don't shrink sleeves with the wires already inside a printed housing; make and inspect the splice first, then fit it. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Solder seal (solder sleeve) butt connectors, sold in assortments colour-coded by wire size (26-24, 22-18, 16-14, 12-10 AWG) with clear tubes and coloured glue rings (Vetco; Markertek); crimp/solder hybrid shrink butt connectors (Quick Cable); TE/Raychem SolderSleeve families: wire splices (B-155, CWT, D-110, D-1744/NAS 1744), shield terminators with or without pre-fitted ground leads (B-155-XX, CWT, S01/S02, M83519), wire-to-pin terminators and coaxial cable terminators (TE catalogue p. 5); military specifications SAE AS81824 (splices) and SAE AS83519 (shield terminators) (TE catalogue cover). Hot-air guns with reflector nozzles; heat-shrink and solder-sleeve holding fixtures; wire strippers.
- **rules_of_thumb**: 
  - Position: the solder ring goes over the middle of the bare, overlapped conductors and the sealing rings over the insulation, before any heat (NASA-STD-8739.4A §19.6.1a; TE RPIP-824-00 §4.2.2).
  - Strip lengths (TE B-155/CWT splices): wires up to 18 AWG with 19 or fewer strands, strip 9.5 mm and overlap at least 6.0 mm; all other wires, strip 12.5 mm, pre-tin, and overlap 9.5 mm (TE RPIP-824-00 §4.2.1, §4.2.3).
  - Small wires (up to 1 mm²) can be twisted together first where a mechanical hold is needed, keeping strands aligned so none poke through the sleeve; otherwise lay the strands parallel (TE RPIP-824-00 §4.2.2).
  - Heat until the ring's outline has disappeared and a solder fillet at least 4.5 mm long (8.0 mm for 12.5 mm strips) is visible along one side of the wires, the tube has shrunk onto the wires and the sealing rings have closed round the insulation, then stop (TE RPIP-824-00 §4.2.3; NASA-STD-8739.4A §19.6.1c).
  - Use a heat gun that gives even heat at the sleeve maker's recommended temperature (NASA-STD-8739.4A §19.6.1b); TE lists about 650 ± 50 °F (about 340 °C) with a reflector nozzle (TE RPIP-824-00 §2.0), and as low as 300 °C for wires whose insulation is not cross-linked (TE RPIP-688-00 §2.0).
  - Pick the sleeve size from the total copper cross-section of all the wires going in, not just one wire size (TE catalogue p. 11-12).
  - Don't place splices where the cable flexes (NASA-STD-8739.4A §7.2.36), near sensors or optics that flux fumes could contaminate (§7.2.39), or where nearby parts can't be shielded from the heat (§7.2.41).
  - Low-melt sleeves: the common Sn42Bi58 solder starts melting at about 138 °C, while sellers rate the finished splice for use up to 125 °C (Markertek) or 110 °C (Quick Cable); the two figures differ, so keep these splices well away from hot spots.

### When to use it

- **everyday_examples**: 
  - Repairing or extending wires in cars, trailers, boats and caravans, where the joint must keep water out (German Wikipedia 'Lötverbinder'; Hackaday 2023)
  - Car wiring repairs: Wikipedia notes pre-cut heat-shrink with a solder blob in the middle 'was specified by Daimler-Benz for automotive electrical repairs' (Wikipedia 'Heat-shrink tubing')
  - Aircraft and spacecraft wiring, where solder sleeves join wires and attach ground wires to cable screens (NASA-STD-8739.4A §11, §19.6; TE catalogue)
  - Colour-coded assortments sold for car, boat, RV and home wiring repairs (Vetco; Markertek)
- **when_to_use**: Use a solder sleeve for a permanent, sealed, low-voltage splice when you don't have (or can't use) a soldering iron: repairing or lengthening wires in vehicles, boats, outdoor lighting and robots, and splices that must keep out splashes and damp. It is quick, needs only a heat gun and strippers, joins different wire sizes in one size of sleeve, and its clear tube lets you check every joint (TE catalogue p. 3; Hackaday 2023; German Wikipedia 'Lötverbinder'). Solder-style splices are also smaller and lighter than crimp splices (NASA-STD-8739.4A §19.3). Variants terminate a cable's screen or solder a wire to a pin.
- **when_not_to_use**: Don't use it in mains wiring or in anything that plugs into the mains: wiring rules decide which splices are allowed, and in US workplaces a soldered splice must first be 'mechanically and electrically secure without solder' (OSHA 29 CFR 1910.303(c)(3)(i)), which two overlapped wire ends in a sleeve are not; a Hackaday commenter doubted 'most inspectors' would accept them (Hackaday 2023). Use the connector your local rules require, or an electrician. Avoid it where the wire flexes or vibrates hard (moving robot joints, engine-mounted harnesses): use a Crimped butt splice with strain relief instead. Avoid low-melt (tin-bismuth) sleeves near engines, exhausts, heaters or lamps, since the solder starts melting at about 138 °C (Markertek). Don't use it where you will want to disconnect the wires (use a plug, lever connector or screw terminal), next to heat-sensitive parts, sensors or optics (NASA-STD-8739.4A §7.2.39, §7.2.41), or on wire whose insulation can't take the heat (NASA §7.2.21).
- **environment_limits**: Heat: TE's low-temperature splices are rated -55 to +125 °C and its D-110/D-1744 series -55 to +150 °C (TE catalogue p. 12); shop sleeves with Sn42Bi58 solder are rated -55 to +125 °C (Markertek) or to 110 °C (Quick Cable), with the solder starting to melt at about 138 °C. Tin-bismuth solder mixed with lead-tin from previously tinned wire can melt far lower, and bismuth joints are 'prone to cracking' (Wikipedia 'Solder'; Wikipedia 'Solder alloys': 'Combination with lead-tin solder may dramatically lower melting point and lead to joint failure'). Water: the glue rings keep out splashes and damp (TE: 'splashproof'; D-1744: 'immersion sealed') (TE catalogue p. 7). Sunlight: coloured and clear heat-shrink resists UV less well than black, and 'only black is recommended for outdoor applications' (Wikipedia 'Heat-shrink tubing'), so shade clear sleeves outdoors or cover them ⚑ [uncertain: no UV data found for solder sleeves]. Vibration and flexing: like any soldered splice, the wire fatigues where the stiff section ends (NASA-STD-8739.4A §7.2.36). *(⚑ parts need confirming)*
- **safety_notes**: Burns: the heat gun and the splice get hot; TE warns 'allow tool and the assembly to cool down before handling' (TE RPIP-824-00 §4.0). Fire and fumes: overheated heat-shrink 'can melt, scorch or catch fire like any other plastic' (Wikipedia 'Heat-shrink tubing'), and TE warns that 'charring or burning the product will produce fumes that may cause eye, skin, nose and throat irritation'; use adequate ventilation (TE RPIP-824-00 §4.0). The flux in the solder ring is a fume source too: rosin-based flux fume 'is a top cause of occupational asthma' (HSE 'Solderer'). Metals: shop sleeves are usually lead-free tin-bismuth, but some sleeves contain lead (Sn63Pb37) or even cadmium (Sn50Pb32Cd18 in TE's CWT range) (TE catalogue p. 12; Quick Cable carries a California lead warning), so check the packet, don't overheat, and wash your hands. Mains: this entry gives no mains wiring steps. It is still soldering, so the same mains limits as Soldered wire joint apply: mains work must follow local law (for example, in England, Approved Document P covers electrical installation work in homes, and even non-notifiable repairs must still comply (Approved Document P 2013, §2.7)); in US workplaces OSHA requires soldered splices to be mechanically secure before soldering (29 CFR 1910.303(c)(3)(i)). A voltage figure printed on a sleeve packet is not a mains approval.
- **common_failures**: Under-heating: the ring's outline is still visible, the solder hasn't flowed and the joint is weak or open; reheat until the ring disappears and a fillet shows (TE RPIP-824-00 §4.2.3; TE RPIP-688-00 §5.2.2, §6.1). Tube sealed before the solder collapsed: with too little heat the tube shrinks and seals first, leaving an air pocket, and the solder melts without being pressed into the wires (iATN teardown, 2013). Solder squeezed in but not wetted: in the same teardown the solder 'did not penetrate the joint or flow well' even when the sleeve looked perfect, until heat was kept on after shrinking; one forum tester found many cheap sleeves held only by the plastic (Hobby-Machinist forum, 2021) ⚑ [uncertain: forum and technician reports]. Give each splice a firm tug and look for a smooth fillet. Overheating: a dark-brown or charred sleeve, scorched insulation, or no visible fillet because the solder has run away (TE RPIP-688-00 §5.2.2-5.2.3); NASA rejects split, burned or damaged sleeves (NASA-STD-8739.4A §20.5.2g). Strands poking through the sleeve or bare metal left uncovered (NASA §20.5.2g; TE RPIP-824-00 §4.2.3). Sleeve too large or too small for the total wire size (TE catalogue p. 11-12). Wire breaking at the end of the sleeve after bending or vibration (NASA §7.2.36). Low-melt solder softening in hot places (see environment_limits). *(⚑ parts need confirming)*
- **related**: 
  - Soldered wire joint (soldered splice): the baseline; stronger control of the solder and better for odd joints, but needs an iron, skill and a separate cover
  - Heat-shrink tubing (incl. adhesive-lined): the same tube without solder; covers and seals a joint made some other way
  - Crimped butt splice: a metal tube squeezed onto both wires; no heat, better against vibration, but needs the right crimp tool; glue-lined heat-shrink versions also seal
  - Twist-on wire connector (wire nut): a removable cap for twisted wires, used in North American mains junction boxes; not sealed unless gel-filled
  - Spring-clamp wire connector (lever connector): tool-free and reusable, but bulky and not sealed
  - Insulation-displacement connector (Scotchlok-type splices): no stripping and gel-filled versions seal, but only for small solid or matched wires
  - Cable gland and strain relief: what stops pulls and bends reaching the splice
  - Historic self-soldering sleeve (WWII, Special Operations Executive): a copper sleeve whose solder was melted by a built-in burning composition lit with a striker, with no heat gun (Wikimedia Commons 'Soe self-solder sleeve 2.jpg', photo of the original instructions)

### Pictures, videos and models

- **links**: 
  - [Geschrumpfter Lötverbinder auf Litzendraht (shrunk solder sleeve on stranded wire), Wikimedia Commons, photo by wdwd](https://commons.wikimedia.org/wiki/File:Geschrumpfter_L%C3%B6tverbinder_auf_Litzendraht.JPG): A finished solder sleeve on stranded wire: the solder area and contact ring in the middle and the two blue sealing rings closed round the insulation either side *(licence: CC BY-SA 4.0)*
  - [Lötverbinder versch Durchmesser (solder sleeves of different diameters), Wikimedia Commons, photo by wdwd](https://commons.wikimedia.org/wiki/File:L%C3%B6tverbinder_versch_Durchmesser.JPG): Unused solder sleeves in several sizes, showing the clear tube, the solder ring and the coloured glue rings *(licence: CC BY-SA 4.0)*
  - [Lötverbinder - verlötet (solder sleeve after soldering), Wikimedia Commons, by Hkoschinski](https://commons.wikimedia.org/wiki/File:L%C3%B6tverbinder_-_verl%C3%B6tet.jpg): A solder sleeve after heating, with the melted solder visible through the tube *(licence: CC0 (public domain dedication))*
  - [TE Connectivity RPIP-824-00 rev. G, SolderSleeve One-Step Wire and Cable Terminators: Installation Procedures for CWT and B-155 Products (2018)](https://www.electrokit.com/upload/quick/e6/ca/3736_specifications.pdf): Drawings of strip lengths and overlaps, and acceptable versus unacceptable (under-heated, ring still visible) splices and shield terminations *(licence: link only (TE copyright))*
  - [NASA-STD-8739.4A (2016), §19.6 'Solder Sleeve', Figures 19-13 and 19-14, p. 70-71](https://nepp.nasa.gov/files/27631/nstd87394a.pdf): Photos of a solder sleeve splice before heating and fully melted, plus a shield termination with a solder sleeve (Fig. 11-2, Fig. 19-3) *(licence: US government (NASA) publication, generally public domain in the US ⚑ [uncertain])* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Soldering Helping Hands / Clamp for Wire Soldering (Print Hive, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1341728-soldering-helping-hands-clamp-for-wire-soldering): Print-in-place clamp, no supports or assembly, that holds two wires in line; usable to hold wires while a solder sleeve is heated between the jaws. Recommended plastic PETG or ABS, PLA also works *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Wire soldering clamp (PDX3D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1700782-wire-soldering-clamp): Mostly print-in-place mini clamp with two jaws about 25.6 mm apart that holds two wires up to about 4-6 mm diameter end to end, with no metal springs *(licence: Creative Commons Attribution)*
- **diagram_idea**: A cut-away of a solder sleeve in two frames: before heating (loose clear tube, grey solder ring centred over two overlapped bare wire ends, blue glue rings over the insulation) and after heating (tube shrunk tight, solder flowed into the strands with a visible fillet, glue rings squeezed shut), with a magnifier inset comparing a good joint (ring gone, smooth fillet) and a bad one (ring outline still visible).
- **sources**: 
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://en.wikipedia.org/wiki/Solder
  - https://en.wikipedia.org/wiki/Solder_alloys
  - https://en.wikipedia.org/wiki/Soldering
  - https://de.wikipedia.org/wiki/L%C3%B6tverbinder
  - https://nepp.nasa.gov/files/27631/nstd87394a.pdf
  - https://www.electrokit.com/upload/quick/e6/ca/3736_specifications.pdf
  - https://static.chipdip.ru/lib/025/DOC027025500.pdf
  - https://docs.rs-online.com/a831/A700000013653945.pdf
  - https://nonprod.docs.rs-online.com/2984/0900766b80020e9d.pdf
  - https://nonprod.docs.rs-online.com/29bc/0900766b803074f4.pdf
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://patents.google.com/patent/US4883925A/en
  - https://www.markertek.com/product/ups-butcon-1210/waterproof-heat-shrink-butt-connector-with-internal-lead-free-solder-for-12-10awg-wire-100-pack
  - https://quickcable.com/product/165605
  - https://vetco.net/products/soldering_heat_shrink_butt_connector_50_pack
  - https://www.hobby-machinist.com/threads/solder-seal-wire-connectors.94958/
  - https://www.iatn.net/forums/18/79277/electrical-connections-again-the-inspection
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://www.hse.gov.uk/asthma/solderers.htm
  - https://commons.wikimedia.org/wiki/File:Geschrumpfter_L%C3%B6tverbinder_auf_Litzendraht.JPG
  - https://commons.wikimedia.org/wiki/File:L%C3%B6tverbinder_versch_Durchmesser.JPG
  - https://commons.wikimedia.org/wiki/File:L%C3%B6tverbinder_-_verl%C3%B6tet.jpg
  - https://commons.wikimedia.org/wiki/File:Soe_self-solder_sleeve_2.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: soldering iron, crimper, heat gun, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, links, load, making_tips_3d_printing, seal

## 355 Standard plug-and-socket connector (USB, barrel jack, audio jack, RJ45)

*electrical connections.* A ready-made plug and socket built to a published standard, so cables and chargers from anywhere fit; you choose by what the other device already has, how often it will be plugged in, and whether it must latch or seal

*Also covers:* One entry only: link to lists of the standards rather than describing each one. Also covers gender, panel, board and cable mounting, mating cycles, latching and sealed circular connectors, and look-alike barrel-jack sizes and polarity. Safety: reversed-polarity barrel plugs damage circuits.

### What it is

- **plain_name**: A ready-made plug and matching socket, like a USB port, the round socket for a power adapter, a headphone jack or a network-cable socket, made to a published size so leads and chargers from anywhere fit and can be unplugged by hand
- **term**: Standard plug-and-socket connector (plug and jack built to a published connector standard)
- **aliases**: 
  - plug and socket, plug and jack, port, connector; 'male' and 'female' halves; inline (cable) connector, panel (chassis) connector and PCB-mount connector (Wikipedia 'Electrical connector'; 'Gender of connectors and fasteners')
  - USB connectors: Type-A, Type-B, Mini, Micro and USB-C (Wikipedia 'USB hardware', 'USB-C'; SparkFun 'Connector Basics')
  - barrel jack, barrel connector, DC jack, coaxial power connector, tip connector; common sizes 5.5 x 2.1 mm, 5.5 x 2.5 mm and 3.5 x 1.3 mm; standardised as IEC 60130-10 types A-E and EIAJ RC-5320A (Wikipedia 'Coaxial power connector'; SparkFun)
  - audio jack, headphone jack, phone connector, jack plug: 6.35 mm (1/4 in), 3.5 mm (1/8 in) and 2.5 mm, in TS, TRS and TRRS versions (Wikipedia 'Phone connector (audio)'; SparkFun); RCA (phono) connector (SparkFun)
  - RJ45, Ethernet jack, network socket: properly an 8P8C modular connector, since 'RJ45' originally named one wiring configuration (Wikipedia 'Modular connector')
  - keystone module: a standard 14.5 x 16.0 mm snap-in housing that holds RJ45, USB, HDMI, audio, F, BNC or banana jacks in wall plates and patch panels (Wikipedia 'Keystone module')
  - IEC connector, kettle plug, figure-8 and cloverleaf connectors: IEC 60320 mains appliance couplers such as C13/C14 (Wikipedia 'IEC 60320'; SparkFun)
  - circular connectors such as XLR, BNC, DIN and the threaded, sealed M12 (IEC 61076-2-101) (Wikipedia 'Electrical connector')
  - SMA and RP-SMA antenna connectors (SparkFun)
  - Lists of the standards (one entry here; follow these for each type): Wikipedia 'Audio and video interfaces and connectors', 'DC connector', 'Computer port (hardware)', 'AC power plugs and sockets' and 'Category:Electrical connectors'
- **family**: electrical connections
- **other_families**: quick-release & tool-free, seals & pass-throughs
- **one_liner**: A bought plug and socket made to a published standard (USB, barrel jack, audio jack, RJ45 and many more), so a project can take power or signals from leads and chargers that already exist and be unplugged by hand; you choose by what the other device has, how often it will be plugged in, and whether it must latch or seal.
- **complexity**: A few parts: the plug, usually on a cable, and the socket (jack), usually fixed to a panel or circuit board. Each half has metal contacts (pins, sleeves or springy fingers) held in a moulded insulator, usually inside a metal shell or keyed housing; many add a latch, locking ring, screws or bayonet; the cable end has a moulded strain-relief boot or a backshell; panel versions have a threaded bushing, nut and washer, and sealed versions add O-rings or grommets (Wikipedia 'Electrical connector'; SparkFun 'Connector Basics'; Same Sky DC jack release).
- **how_it_works**: Springy contacts in one half press against the pins or sleeves of the other, so spring force and friction make a low-resistance contact that can be pulled apart again (Wikipedia 'Electrical connector'). The housing's shape (keying) lets the plug go in only the right way, and latching versions add a tab, threaded ring, screws, bayonet or push-pull sleeve so it can't be pulled out by accident (Wikipedia 'Electrical connector'; 'Coaxial power connector'). Because the shape and pin layout follow a published standard, any plug of that type fits any matching socket; but some standards fix only the shape, not what is wired to it: barrel jacks, for example, have no fixed voltage or polarity (Wikipedia 'DC connector').

### Finder attributes

- **job**: 
  - join and hold: makes an electrical connection for power or signals that can be unplugged by hand (the finder reaches this entry through the 'electrical connections' family)
  - lock, and release by hand: latching versions (RJ45 tab, lock-ring and lock-tab barrel plugs, screw-lock, bayonet and push-pull circular connectors) stay in until a person releases them (Wikipedia 'Electrical connector', 'Modular connector', 'Coaxial power connector')
- **motion**: none: nothing moves once it is plugged in; mating is a straight push, plus a twist for bayonet or lock-ring types.
- **degrees_of_freedom**: 0: when mated the plug is held in its socket; a friction-fit plug can still wobble slightly.
- **special_behaviour**: 
  - quick-release: unplugs by hand with no tools (SparkFun 'Connector Basics')
  - hand-release only: latching versions hold against a pull until you press the tab or undo the ring or screws; the RJ45 plug's tab 'locks against a ridge in the socket so that the plug cannot be removed without disengaging the tab' (Wikipedia 'Modular connector')
  - self-aligning or self-centring: keyed shells guide the plug in and stop it going in the wrong way round (keying; Wikipedia 'Electrical connector')
  - fail-safe or breakaway: plain friction plugs and the lock-tab barrel plug, which 'will disengage when pulled hard enough', pull out instead of breaking when the cable is yanked (Wikipedia 'Coaxial power connector'); for a deliberate breakaway see Magnetic connector
- **holding_principle**: 
  - friction or clamping (force-fit): the contacts grip the pins and the housings fit snugly
  - spring force (a spring or springy part presses it in place): springy contact fingers or spring wires press on the mating contacts (Wikipedia 'Modular connector': 'The spring force of the jack contacts ensures a good interface')
  - shape (the parts interlock; form-fit): keys, latch tabs, threads and bayonet lugs on locking versions (Wikipedia 'Electrical connector')
- **input_output**: not applicable
- **power**: passive (no power needed): the connector holds itself; it only carries power or signals.
- **removability**: tool-free quick release: the mated pair unplugs by hand. Fitting the connector itself is permanent or semi-permanent: plugs are moulded on, soldered to solder cups or crimped, and sockets are soldered to a board or bolted into a panel (Wikipedia 'Electrical connector', 'Modular connector').
- **reuse_cycles**: many times: connectors are rated in mating cycles. Standard-size USB connectors are rated for at least 1,500 insertions, Mini-B for 5,000 and all Micro connectors and USB-C for 10,000 (Wikipedia 'USB hardware'); 'A USB connector may have a lifetime in the thousands or tens of thousands of cycles, while a board-to-board connector ... may be limited to tens of cycles' (SparkFun). Some, like the old 'Molex' PC power plug, are 'intended to be connected and disconnected only a few times' (SparkFun). Check the datasheet.
- **tools_needed**: None to plug and unplug. To fit: a soldering iron for solder cups, tags and board-mount sockets (Wikipedia 'Electrical connector'); a crimp tool with the matching die for RJ45 plugs (WE/SS and Tyco/AMP plug types need different dies) (Wikipedia 'Modular connector'); a punch-down tool for keystone network jacks with 110-style terminals (Wikipedia 'Keystone module'); a drill or step drill and a spanner for panel-mount nuts. Ready-made moulded cables need no tools.
- **seal**: none: ordinary USB, barrel, audio and RJ45 connectors are open to dust and water. Sealed circular connectors (for example M12) use O-rings, grommets or potting to reach IP ratings up to watertight (Wikipedia 'Electrical connector'); IP67 means protected against immersion up to 1 m for 30 minutes (Wikipedia 'IP code'). Such ratings normally apply when the pair is mated; makers sell caps so that unmated connectors keep IP67 (eeNews Europe on Binder NCC connectors).
- **load**: Electrical: up to about 30 A, extra-low voltage only. Most connectors in this entry carry signals or a few amps: every USB-C cable must carry at least 3 A, and e-marked cables up to 5 A at up to 48 V (240 W) (Wikipedia 'USB-C'); barrel jack ratings 'commonly vary from unspecified up to 5 A', with 12 V typical and up to 48 V (Wikipedia 'Coaxial power connector'), for example 20 V DC at 5 A for one family of panel jacks (Same Sky), while EIAJ plugs are rated 2 A (Wikipedia 'Coaxial power connector'); audio and network jacks are signal connectors. Mains appliance couplers (IEC 60320, up to 250 V and 16 A; Wikipedia 'IEC 60320') are also standard plug-and-socket connectors, but mains wiring is outside this entry (see safety_notes); for tens of amps use a High-current battery plug. Mechanical: light. Friction plugs pull out with a firm tug, latching ones hold against a straight pull until released; sideways force on a plugged-in lead levers on the socket and its solder joints, so board-mounted sockets are the weak point: through-hole USB-B is used 'for maximum reliability', while surface-mount Mini-USB trades 'robustness for size' (SparkFun).
- **adjustable**: no
- **play_and_precision**: small: a mated plug can wobble a little, and look-alike sizes differ by fractions of a millimetre: a plug made for a 2.5 mm pin 'will fit in a 2.1 mm jack, but ... the connection will be, at best, intermittent' (SparkFun). Keyed housings guide the plug into line, but connectors do not locate parts precisely (Wikipedia 'Coaxial power connector' notes size differences of only 0.05 mm between listed barrel sizes).
- **access_needed**: one side only (blind): plugging in needs only the socket's face. Fitting a panel-mount socket needs the back of the panel for its nut and wiring; board-mount sockets are soldered to the board before it goes in (SparkFun 'Connector Basics').
- **materials**: Contacts: copper alloys such as brass, phosphor bronze and beryllium copper, plated with gold, nickel or tin; gold is used for low-voltage signals because it doesn't form an oxide layer (Wikipedia 'Electrical connector'). Housings: moulded plastic, metal shells and backshells, ceramic for high-temperature types (Wikipedia 'Electrical connector'). Wires are soldered, crimped or pressed in by insulation displacement; RJ45 plugs are made for either solid or stranded wire and must match (Wikipedia 'Modular connector'). Panels: metal, wood, acrylic or 3D-printed plastic, within the panel thickness the connector allows (Same Sky offers long bushings 'for mounting to thick enclosures').
- **maker_difficulty**: easy: buy ready-made cables and sockets (or breakout boards) and fit them in a hole or on a board; soldering solder-cup plugs or crimping RJ45 plugs takes more skill and the right tool (Wikipedia 'Modular connector'; SparkFun).

### Making it

- **processes**: 
  - off-the-shelf part: the plugs and sockets are always bought
  - 3D print (FDM): enclosure cut-outs, keystone slots, connector mounts and brackets, cable strain-relief clamps and dust caps
  - laser cut: panel cut-outs in acrylic or plywood
  - sheet metal: drilled or punched metal panels for panel-mount sockets
- **print_in_place**: no: the connector is bought; only the parts that hold it are printed.
- **making_tips_3d_printing**: 1) Take the panel cut-out and the allowed panel thickness from the connector's datasheet, then print a small test plate first: a well-tuned printer is accurate to about 0.2 mm and materials shrink, so 'you will have to make test prints', and a parametric CAD model makes the tweaks easy (Prusa 'Modeling with 3D printing in mind'). 2) Threaded panel jacks need a wall thin enough for the nut to grip; printed walls are often thicker, so thin the wall locally round the hole or buy long-bushing versions made 'for mounting to thick enclosures' (Same Sky). 3) For a flexible front panel, print standard keystone ports (14.5 x 16.0 mm snap-in face) and snap in whichever jacks you need: RJ45, USB, HDMI, audio, F, BNC or banana (Wikipedia 'Keystone module'); the fit is tight, which is why one published model is parametric so you can tune it to your printer (Printables 537480 description). 4) For board-mounted sockets, line the socket face up with an opening in the wall and support the board close to the socket, so plugging and levering forces go into the case rather than the solder joints; SparkFun notes through-hole sockets are chosen 'for maximum reliability' ⚑ [uncertain: no printed-enclosure test found]. 5) Add a clamp or cable-tie anchor that grips the cable jacket behind any plug you wire yourself, as moulded boots and backshells do on bought cables (SparkFun; Wikipedia 'Electrical connector'). 6) Solder wires to panel connectors before mounting them in a printed panel, or work quickly: soldering heat spreads through the metal and can melt the plastic between pins (Wikipedia 'Electrical connector'), and a printed panel softens far below solder temperatures. 7) Keep keying features and polarity marks visible on printed bezels, and label barrel inputs with the voltage and polarity symbol. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: USB Type-A, Type-B, Micro-B and USB-C receptacles for board, panel or cable mounting, panel-mount USB extension leads and breakout boards (SparkFun); barrel jacks (5.5 x 2.1 mm, 5.5 x 2.5 mm, 3.5 x 1.3 mm) for board, panel or cable mounting, with or without a switch contact that disconnects batteries when a plug is inserted, plus lock-ring and lock-tab (bayonet) versions (Wikipedia 'Coaxial power connector'; SparkFun; Same Sky); 3.5 mm and 6.35 mm TS/TRS/TRRS jacks with switch contacts, and breakout boards (SparkFun); RCA jacks; XLR and DIN connectors; 8P8C (RJ45) jacks, plugs, crimp tools and strain-relief boots ('snagless' boots), keystone modules, wall plates and patch panels (Wikipedia 'Modular connector', 'Keystone module'); IEC 60320 C13/C14 inlets and cords (Wikipedia 'IEC 60320'); M12 and other sealed circular connectors with dust caps (Wikipedia 'Electrical connector'; eeNews Europe); SMA and RP-SMA antenna connectors and adapters (SparkFun). For the full catalogue of standards follow Wikipedia's lists: https://en.wikipedia.org/wiki/Audio_and_video_interfaces_and_connectors, https://en.wikipedia.org/wiki/DC_connector, https://en.wikipedia.org/wiki/Computer_port_(hardware), https://en.wikipedia.org/wiki/AC_power_plugs_and_sockets and https://en.wikipedia.org/wiki/Category:Electrical_connectors.
- **rules_of_thumb**: 
  - Choose first by what the other device or charger already has, then by how often it will be plugged in: USB Standard connectors are rated for 1,500 cycles, Mini-B 5,000, Micro and USB-C 10,000 (Wikipedia 'USB hardware'), while some board-to-board connectors manage only tens (SparkFun).
  - Barrel jacks: the sleeve is usually 5.5 mm (with a 2.1 or 2.5 mm pin) or 3.5 mm (with a 1.3 mm pin), plugs are usually 9.5 mm long, and tip-positive is the most common polarity; SparkFun standardises on a 5.5 mm sleeve, 2.1 mm pin, centre positive (SparkFun 'Connector Basics'). IEC 60130-10 defines types A-E, and EIAJ RC-5320A ties five plug sizes to voltage ranges (Wikipedia 'Coaxial power connector').
  - A barrel connector's size does not tell you its voltage or polarity: 'It is not possible ... to reliably infer any information on power parameters ... by examining the connector' (Wikipedia 'DC connector'). Check the label and the polarity symbol.
  - Where the voltage or current can hurt, the side connected to the power source must be the female one with hidden contacts (Wikipedia 'Gender of connectors and fasteners').
  - Don't use tip-sleeve audio jacks for power: during insertion the tip and sleeve can be briefly shorted together, which may damage the supply (SparkFun 'Connector Basics').
  - RJ45: use plugs made for your wire type (solid or stranded), because 'a mismatch between plug type and wire type results in unreliable connections', and use the crimp die that matches the plug type (Wikipedia 'Modular connector').
  - Sealing: IPX7 (immersion) does not automatically include IPX5/IPX6 (water jets) (Wikipedia 'IP code'), and a connector's IP rating usually needs it mated or capped (eeNews Europe).
  - Printed mounts: allow for about 0.2 mm printer accuracy plus material shrinkage and test-print the cut-out (Prusa 'Modeling with 3D printing in mind'); keystone ports are 14.5 x 16.0 mm (Wikipedia 'Keystone module').

### When to use it

- **everyday_examples**: 
  - Charging a phone through its USB-C socket (Wikipedia 'USB-C')
  - A wall power adapter's round barrel plug going into a router, guitar pedal or Arduino board (Wikipedia 'Coaxial power connector'; SparkFun)
  - Headphones plugged into a 3.5 mm jack (SparkFun)
  - An Ethernet cable clicking into a router's RJ45 socket, or a kettle-style IEC lead into a computer power supply (Wikipedia 'Modular connector'; SparkFun)
- **when_to_use**: Use a standard connector wherever a project meets the outside world: power input from a USB charger or wall adapter, data to a computer, sound in or out, a network cable, an antenna, or a sensor or controller you want to unplug. Ready-made cables are cheap and available almost everywhere, and the shapes stop most wrong connections (SparkFun 'Connector Basics'; Wikipedia 'Electrical connector'). Pick a latching type (RJ45, lock-ring barrel, screw-lock or bayonet circular) where a lead could be knocked out, and a sealed circular type with caps outdoors or in wet places (Wikipedia 'Coaxial power connector', 'Electrical connector'; eeNews Europe). Keystone ports in a printed panel let you mix connector types freely (Wikipedia 'Keystone module').
- **when_not_to_use**: Inside a project, between boards and modules, small Wire-to-board plug connectors (pin headers and crimp housings) are smaller and cheaper. For tens of amps use a High-current battery plug. For a lead that must pop off safely when yanked, use a Magnetic connector. Don't put an unusual voltage on a common connector where someone could plug in the wrong thing: 'Use of the wrong power supply may cause severe equipment damage or even fire' (Wikipedia 'Coaxial power connector'); choose a different or keyed connector and label it. Don't use audio jacks for power (SparkFun). For mains power, use a bought, approved appliance inlet or a ready-made power supply and follow local law (see safety_notes). Where vibration, dust or water are expected, avoid plain friction-fit USB, barrel and audio connectors and use latching, sealed types (Wikipedia 'Electrical connector').
- **environment_limits**: Water and dust: ordinary connectors are unsealed; sealed types reach IP ratings such as IP67 only when mated or capped (Wikipedia 'IP code'; eeNews Europe). Corrosion and wear: surface corrosion raises contact resistance, causing heating and intermittent faults, and fretting (tiny rubbing movements) wears contacts in connectors that are 'frequently mated and de-mated' (Wikipedia 'Electrical connector'). Heat: overheating feeds on itself, since hotter contacts have higher resistance and make more heat (Wikipedia 'Electrical connector'). Vibration and shock: insecure chassis mounting 'can contribute significantly to the risk of failure' (Wikipedia 'Electrical connector'); friction plugs can work loose. Printed panels: plastic under a tightened panel nut can slowly creep and loosen the nut, so check it after a while ⚑ [uncertain: general creep behaviour, no connector-specific test found]. *(⚑ parts need confirming)*
- **safety_notes**: Reversed polarity: inverted-polarity barrel plugs 'can and do damage circuitry when plugged in, even if the voltage is correct' (Wikipedia 'DC connector'), and the wrong supply 'may cause severe equipment damage or even fire' (Wikipedia 'Coaxial power connector'). Look-alike plugs: same-looking barrel plugs come in different sizes, voltages and polarities, and a 2.5 mm plug fits a 2.1 mm jack loosely (SparkFun). USB-C is not always 5 V: with USB Power Delivery it can supply up to 48 V (Wikipedia 'USB-C'). Keying exists partly to prevent 'dangerous electrical connections, such as plugging an audio cable into a power outlet' (Wikipedia 'Electrical connector'). The power-source side must be female with hidden contacts; a double-ended male mains lead (a 'suicide cable') is 'extremely dangerous' (Wikipedia 'Gender of connectors and fasteners'). IEC 60320 appliance couplers are 'not keyed or colour-coded to indicate voltage' (Wikipedia 'IEC 60320'). Mains: this entry gives no mains wiring steps; mains work must follow local law. For example, in England, installing fixed electrical equipment is within Part P of the Building Regulations even if its final connection is a standard 13 A plug and socket (Approved Document P 2013, §2.8); buy approved inlets and power supplies rather than wiring your own mains connector. Soldering connectors brings the usual burn and fume hazards (see Soldered wire joint).
- **common_failures**: Loose, intermittent contact from a look-alike plug of the wrong size (a 2.5 mm plug in a 2.1 mm jack) (SparkFun). Damage from a power supply with the wrong voltage or reversed polarity (Wikipedia 'DC connector'). 'Same plug, different standard': physically compatible connectors may not work together because several interfaces share one connector (Wikipedia 'Audio and video interfaces and connectors'), and 8P8C sockets on radios often use mirrored pinouts (Wikipedia 'Modular connector'); likewise SMA and RP-SMA antenna parts look alike but each needs its own matching half (SparkFun). Shorts: a mono plug in a stereo socket shorts the ring contact to ground (Wikipedia 'Phone connector (audio)'), and tip-sleeve plugs short briefly on insertion (SparkFun). Worn or corroded contacts after many cycles (fretting) (Wikipedia 'Electrical connector'). Broken RJ45 latch tabs that snag on other cables; snagless boots prevent this (Wikipedia 'Modular connector'). Sockets torn off a board or with cracked solder joints from levering forces (SparkFun). Cables breaking just behind a home-wired plug with no strain relief (SparkFun). RJ45 plugs crimped with the wrong die or the wrong plug for the wire type (Wikipedia 'Modular connector'). Overall, connector failures are mostly open circuits (61%), then poor contact (23%) and shorts (16%) (Wikipedia 'Electrical connector').
- **related**: 
  - Wire-to-board plug connectors (pin header and crimp housing): small, cheap plugs used inside a project rather than at its outside panel
  - High-current battery plug (bullet connector, polarised battery connector): for tens of amps between batteries and motors
  - Genderless connector (hermaphroditic coupling): both halves identical, such as Powerpole-style power connectors
  - Magnetic connector: held by magnets so it pops off safely when yanked
  - Pogo pin (spring-loaded contact pin): contacts that press onto pads for docks and test jigs
  - Binding post and banana plug: screw-down and push-in test-lead connectors on bench equipment
  - Flat flexible cable and latching connector (FFC with ZIF connector): thin ribbon cables inside devices
  - Insulation-displacement connector: how RJ45 plugs and ribbon-cable plugs grip their wires
  - Keying (one-way-only fit): the shape trick that stops plugs going in wrongly
  - Bayonet mount (push-and-twist lock): the locking principle of bayonet connectors
  - Cable gland and strain relief: carries cables through walls and keeps pulls off connectors
  - Quick couplers for tubes and hoses: the same plug-and-socket idea for air and liquids

### Pictures, videos and models

- **links**: 
  - [Connector Basics (SparkFun Learn)](https://learn.sparkfun.com/tutorials/connector-basics/all): Photos of USB, audio, RCA, barrel, IEC, JST, SMA and pin-header connectors, the three ways of mounting a barrel jack (board, inline cable, panel), a strain-relief boot, and barrel-jack polarity diagrams *(licence: CC BY-SA 4.0)*
  - [Klinken- und Hohlstecker (jack and barrel plug adapters), Wikimedia Commons, by Smial](https://commons.wikimedia.org/wiki/File:Klinken-_und_Hohlstecker.jpg): A set of look-alike barrel and jack plugs from a universal power adapter, showing how many similar sizes exist *(licence: CC BY-SA 2.0 DE)*
  - [Photo-RoundPowerConnectors (common DC power connectors), Wikimedia Commons, by Shaddack](https://commons.wikimedia.org/wiki/File:Photo-RoundPowerConnectors.jpg): Several round DC power plugs and sockets side by side *(licence: Public domain (PD-self))*
  - [Lock-Ring Connectors, Wikimedia Commons, by PetesGuide](https://commons.wikimedia.org/wiki/File:Lock-Ring_Connectors.jpg): Lock-ring DC barrel connectors whose knurled threaded ring screws onto the jack so the plug can't be pulled out *(licence: CC BY-SA 4.0)*
  - [Assortment of keystone modules, Wikimedia Commons, by Dmeranda](https://commons.wikimedia.org/wiki/File:Assortment_of_keystone_modules.jpg): Keystone snap-in modules with RJ-11, RJ-45 (with punch-down block behind), mini-DIN, RCA, F and banana jacks, all with the same standard outline *(licence: Public domain (PD-self))*
- **make_it_yourself**: 
  - [Simple Keystone Slot (domrim, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/60732-simple-keystone-slot): A keystone port made to be reused inside other projects, so any keystone jack can snap into a printed panel *(licence: Creative Commons Attribution-ShareAlike)*
  - [(Parametric) Keystone Connector (Paul Hatcher, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/537480-parametric-keystone-connector): A tested keystone holder; the designer notes the tolerances are very tight, so the model is parametric to tune for your printer *(licence: Creative Commons Public Domain)*
  - [Barrel Jack DC Connector Mount (lhclin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1289333-barrel-jack-dc-connector-mount): A screw-down holder for a common 5.5 x 2.1 mm female barrel jack, with two 3 mm screw holes 22 mm apart *(licence: Creative Commons Public Domain)*
  - [Usb C female panel mount (octopuss, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/644783-usb-c-female-panel-mount): A panel mount for a USB-C female breakout board *(licence: Creative Commons Attribution-ShareAlike)*
- **diagram_idea**: A grid of common sockets drawn face-on (USB-C, USB-A, barrel jack, 3.5 mm audio jack, RJ45, M12), each with a small icon for mounting (board, panel, cable), a padlock icon on the latching ones and a droplet on the sealed one, plus a magnified barrel plug beside a jack showing the 5.5 mm sleeve, 2.1 versus 2.5 mm pin, and the centre-positive polarity symbol.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Coaxial_power_connector
  - https://en.wikipedia.org/wiki/DC_connector
  - https://en.wikipedia.org/wiki/Gender_of_connectors_and_fasteners
  - https://en.wikipedia.org/wiki/USB_hardware
  - https://en.wikipedia.org/wiki/USB-C
  - https://en.wikipedia.org/wiki/Phone_connector_(audio)
  - https://en.wikipedia.org/wiki/Modular_connector
  - https://en.wikipedia.org/wiki/Keystone_module
  - https://en.wikipedia.org/wiki/IEC_60320
  - https://en.wikipedia.org/wiki/IP_code
  - https://en.wikipedia.org/wiki/Audio_and_video_interfaces_and_connectors
  - https://en.wikipedia.org/wiki/Computer_port_(hardware)
  - https://en.wikipedia.org/wiki/AC_power_plugs_and_sockets
  - https://en.wikipedia.org/wiki/Category:Electrical_connectors
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://www.sameskydevices.com/news/press-releases/cui-devices-expands-dc-power-jack-line-up
  - https://www.eenewseurope.com/en/connector-has-ip67-protection-even-when-unmated/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Klinken-_und_Hohlstecker.jpg
  - https://commons.wikimedia.org/wiki/File:Photo-RoundPowerConnectors.jpg
  - https://commons.wikimedia.org/wiki/File:Lock-Ring_Connectors.jpg
  - https://commons.wikimedia.org/wiki/File:Assortment_of_keystone_modules.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: comes apart without damage, refit by hand
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: none, soldering iron, crimper, drill and tap, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing

## 356 Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap)

*electrical connections.* A forked metal blade is pressed onto an insulated wire so it cuts through the plastic and grips the copper with no stripping, joining many ribbon-cable wires in one squeeze or tapping a new wire into an existing one

*Also covers:* Also covers pin 1 marking on ribbon cable, punch-down blocks, RJ45 plugs, gel-filled splices and clip-on LED-strip connectors. Scotchlok (brand) as an alias. Safety: cheap fold-over taps chew through wire and fail; signal and small currents only

### What it is

- **plain_name**: A connector with little forked metal blades that you press an insulated wire into: the blades slice through the plastic coating and pinch the copper inside, so you never strip the wire, and one squeeze can connect a whole flat ribbon of wires or tap a new wire onto an existing one
- **term**: Insulation-displacement connector (IDC; insulation-displacement contact, insulation-piercing contact)
- **aliases**: 
  - IDC, insulation-displacement contact, insulation-piercing contact (IPC) (Wikipedia 'IDC (electrical connector)')
  - ribbon-cable plug, IDC socket or 'IDC connector'; the female plug slides onto a male box header or pin header; ribbon cable is also called flat cable (Wikipedia 'IDC (electrical connector)', 'Ribbon cable'; Fablab Brussels)
  - punch-down block, punch block, quick-connect block; 66 block, 110 block, Krone (LSA-PLUS) and BIX blocks (Wikipedia 'Punch-down block')
  - RJ45 (8P8C) and RJ11 modular plugs, which are crimped on with insulation-displacement contacts (Wikipedia 'Modular connector')
  - T-tap, quick splice, splice connector, inline or tap (suitcase) connector (Tools and Toys; Electrokit; DigiKey listing for 3M 562)
  - gel-filled splice, telecom splice, UY2 and UR2 connectors (Electrokit; Hackaday 2023 comments)
  - solderless LED-strip clip connector (Adafruit 'Solderless RGB LED Clips')
  - vampire tap, piercing tap: historic clamp-on tap for thick 10BASE5 network cable (Wikipedia 'Vampire tap')
  - Scotchlok (3M, brand; the UY2 line now sold as Corning Presslok) and PressLok (brand) (Hackaday 2023; Electrokit)
- **family**: electrical connections
- **other_families**: quick-release & tool-free
- **one_liner**: Insulated wires are pushed or squeezed into slotted metal blades that cut through the insulation and grip the copper, making a gas-tight, unstripped joint; used to terminate many ribbon-cable wires in one press, punch network and phone wires into blocks and jacks, crimp RJ45 plugs, and tap a branch wire onto an existing one.
- **complexity**: A few parts acting as one unit: one or more forked (slotted) metal contacts in a plastic housing, plus a cover, cap or strain-relief bar that pushes the wire into the slot and keeps it there. Ribbon-cable plugs come in three pieces: the contact body, the cover that presses the cable down, and a strain-relief clamp (Fablab Brussels). Gel-filled splices are pre-filled with sealant (Electrokit UY2). T-taps are a one-piece fold-over body plus a separate spade (blade) terminal for the branch wire (Tools and Toys).
- **how_it_works**: Each contact is a slot slightly narrower than the copper wire, with sharpened edges. When the wire is forced down into the slot by a tool, a cover or pliers, the edges cut through the insulation and the two sides of the slot spring against the copper (Wikipedia 'IDC (electrical connector)'; Wikipedia 'Punch-down block'). The pressure is so high that 'when properly made, the connector blade cold-welds to the conductor, making a theoretically reliable gas-tight connection' (Wikipedia 'IDC (electrical connector)'). Because the slot width is made for one range of wire sizes, the wire, the slot and (for some types) solid versus stranded wire must all match (Wikipedia 'Modular connector'; Wikipedia 'Punch-down block').

### Finder attributes

- **job**: 
  - join and hold: connects wires to a plug, block or each other without stripping, including tapping a branch onto a wire without cutting it (the finder reaches this entry through the 'electrical connections' family)
- **motion**: none: the wire is fixed in the contact once it is pressed home.
- **degrees_of_freedom**: 0: the wire can't move in the contact; any movement of the wire near the contact damages the joint.
- **special_behaviour**: none: it simply joins. Its trick is that it is self-stripping (the contact cuts the insulation itself) and that one press can terminate many wires at once (Wikipedia 'Electrical connector').
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the two sides of each slotted contact spring against the conductor (Wikipedia 'Punch-down block')
  - friction or clamping (force-fit): the wire is pinched hard enough to cold-weld to the blade (Wikipedia 'IDC (electrical connector)'), and the cover or strain-relief clamp grips the insulation
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): ribbon-cable connectors 'are not designed to be reusable, but can often be re-used if care is taken when removing the cable' (Wikipedia 'IDC (electrical connector)'); punch-down wires can be pulled out and the slot re-used, but blades that have been sprung apart mean the whole block may have to be replaced (Wikipedia 'Punch-down block'); crimped RJ45 plugs and squeezed splices and taps are cut off and replaced (Wikipedia 'Modular connector').
- **reuse_cycles**: once: most IDC plugs, splices and taps are made to be closed once; ribbon-cable plugs and punch-down positions can sometimes be re-used with care (Wikipedia 'IDC (electrical connector)'; Wikipedia 'Punch-down block'). The plug-and-socket side of an IDC ribbon plug or RJ45 plug can of course be unplugged many times.
- **tools_needed**: Depends on the type: a bench vice, IDC press or IDC crimping pliers to close ribbon-cable plugs evenly (Fablab Brussels; DigiKey TechForum 2022); a punch-down tool with the right blade for 66, 110 or Krone blocks and keystone jacks (Wikipedia 'Punch-down block'); a modular-plug crimp tool with the matching die for RJ45 plugs (Wikipedia 'Modular connector'); flat-nose pliers for gel-filled splices and T-taps (Electrokit), or Klein's IDC crimp pliers, made to close Scotchlok-type splices without damaging the housing (DigiKey TechForum 2022); a sharp knife for LED-strip clips (Adafruit). No stripper and no heat.
- **seal**: none: plain IDC plugs, blocks and taps are open; T-taps are 'not rated for weather exposure' (Tools and Toys), and a T-tap seller advises wrapping it in electrical or self-vulcanizing tape in humid places (Electrokit T-tap). Gel-filled splices are the exception: factory-filled sealant keeps moisture off the contact (Electrokit UY2), and a Hackaday commenter reports they 'hold up in out door applications' (Hackaday 2023 comments).
- **load**: Electrical: up to about 3 A, extra-low voltage only. IDCs 'are usually used with small conductors for signal purposes and at low voltage. Power conductors carrying more than a few amperes are more reliably terminated with other means, though "hot tap" press-on connectors find some use in automotive applications' (Wikipedia 'Electrical connector'). Ribbon cable wires are only 22-26 AWG (Wikipedia 'Ribbon cable'). T-taps are sold up to 4-6 mm² (12-10 AWG) wire for vehicles (Electrokit T-tap), and some certified mains fittings use IDC terminals (Wikipedia 'IDC (electrical connector)' shows an Australian 230 V outlet), but those are outside a maker's choice (see safety_notes). Mechanical: light; a ribbon plug relies on its strain-relief clamp to keep pulls off the contacts (Fablab Brussels), and a wire that moves in a tap gets chewed through (Hackaday 2023).
- **adjustable**: no
- **play_and_precision**: not applicable
- **access_needed**: both sides: closing a ribbon plug, gel splice or T-tap means squeezing it between vice jaws or pliers from both sides (Fablab Brussels; Electrokit). Punch-down blocks and keystone jacks are worked from the front only (Wikipedia 'Punch-down block'). A T-tap can be fitted anywhere along an existing wire without reaching its ends (Electrokit T-tap).
- **materials**: Wire must match the contact. Punch-down blocks are 'designed for solid wire connections' (Wikipedia 'Punch-down block'). Gel-filled UY2 splices take two solid copper conductors of 0.4-0.9 mm (26-19 AWG) (Electrokit UY2). Ribbon cable is usually stranded copper of 0.32, 0.20 or 0.13 mm² (22, 24 or 26 AWG) at 1.27 mm pitch (Wikipedia 'Ribbon cable'). RJ45 plugs are made for either solid or stranded wire, with different prongs (Wikipedia 'Modular connector'). T-taps come in sizes for 0.5-1.5, 1.5-2.5 and 4-6 mm² wire (Electrokit T-tap). IDC technology was first made for solid wire and later extended to stranded wire (Wikipedia 'IDC (electrical connector)'). LED-strip clips press onto the strip's exposed copper pads (Adafruit).
- **maker_difficulty**: easy: no stripping, soldering or heat, and most types close with pliers or a vice; but reliability depends on exactly matching wire, connector and tool, and a bad joint is hard to see from outside (Hackaday 2023; Wikipedia 'Punch-down block').

### Making it

- **processes**: 
  - off-the-shelf part: the contacts and housings are always bought
  - 3D print (FDM): crimp aids and tool adapters that close IDC plugs evenly, holders for punching down keystone jacks, ribbon-cable clips and covers
- **print_in_place**: no: the cutting contacts must be metal; only helper jigs and holders are printed.
- **making_tips_3d_printing**: The contact itself can't be printed, but printed helpers make IDC work more reliable. 1) A printed crimp aid that holds the plug halves square lets you close small ribbon plugs by hand without damaging them; one designer settled on 0.1 mm layers and 40% gyroid infill after strength tests (Printables 831720). Printed adapters for IDC crimping pliers do the same for several 1.27 mm-cable plug types (Printables 1248613). The aim is to close the two halves parallel, as a vice does (Fablab Brussels). 2) A printed 'punch puck' holds a keystone jack steady while you punch the wires down (Printables 727380). 3) In printed enclosures, give ribbon cable a gentle fold rather than a sharp crease next to the plug, leave space for the plug's strain-relief clamp (Fablab Brussels), and clamp the cable so it doesn't pull on the contacts. 4) Don't let printed parts squeeze or flex a T-tap or splice: movement lets the blade chew through the wire (Hackaday 2023). 5) Keystone ports printed into a panel accept punch-down network jacks (Wikipedia 'Keystone module'; see Standard plug-and-socket connector).
- **off_the_shelf_parts**: IDC ribbon-cable sockets (two-row, 2.54 mm pitch, mating with box or pin headers; 'BT224' type), IDC D-sub, micro-ribbon and PCB transition headers (Wikipedia 'Ribbon cable'); grey and rainbow ribbon cable at 1.27 mm pitch (Wikipedia 'Ribbon cable'); IDC crimp tools and presses (DigiKey TechForum 2022); 66, 110, Krone and BIX punch-down blocks, patch panels and punch-down tools (Wikipedia 'Punch-down block'); 8P8C (RJ45) and 6P (RJ11) modular plugs for solid or stranded wire, crimp tools and keystone jacks with 110-style terminals (Wikipedia 'Modular connector'; 'Keystone module'); gel-filled telecom splices (UY2, UR2) (Electrokit UY2); colour-coded T-tap splices and tap (suitcase) connectors such as the 3M Scotchlok 562 'Tap (Suitcase) Connector' (Electrokit T-tap; DigiKey listing); solderless LED-strip clip connectors (Adafruit).
- **rules_of_thumb**: 
  - Ribbon cable is normally 1.27 mm (0.05 in) pitch, which matches two-row IDC plugs with 2.54 mm (0.1 in) pin spacing (Wikipedia 'Ribbon cable').
  - Pin 1: put the cable's red-striped (or ridged) edge on the side of the plug marked with a triangle or 'V' (Wikipedia 'IDC (electrical connector)'; Fablab Brussels).
  - Close ribbon plugs with the halves kept parallel, ideally in a vice, without over-pressing (which crushes the plastic); leave about 2 cm of cable beyond the plug, then fold it back under the strain-relief clamp (Fablab Brussels).
  - Punch-down: solid wire, one wire per slot, all the same size, and a proper punch-down tool; pushing a screwdriver into the slot 'forces the two blades of the terminal post apart, leading to bad contacts' (Wikipedia 'Punch-down block'). (DigiKey's forum says a flat screwdriver 'can work in a pinch'; the two sources differ.)
  - RJ45: use the plug made for your wire (solid or stranded), since 'a mismatch between plug type and wire type results in unreliable connections' (Wikipedia 'Modular connector').
  - Gel-filled UY2 splices: two solid wires of 0.4-0.9 mm (26-19 AWG), no stripping, closed with flat-nose pliers (Electrokit UY2).
  - T-taps: choose the size by wire: red 0.5-1.5 mm² (22-18 AWG), blue 1.5-2.5 mm² (18-14 AWG), yellow 4-6 mm² (12-10 AWG), and tape them in damp places (Electrokit T-tap).
  - Keep IDCs to signals and small currents: 'Power conductors carrying more than a few amperes are more reliably terminated with other means' (Wikipedia 'Electrical connector').

### When to use it

- **everyday_examples**: 
  - The flat grey ribbon cables with black plugs inside older PCs (floppy and IDE drive cables) (Wikipedia 'IDC (electrical connector)')
  - The clear plug on every Ethernet patch cable, crimped onto the wires with insulation-displacement contacts (Wikipedia 'Modular connector')
  - Network and phone wall jacks and patch panels where wires are punched down (Wikipedia 'Punch-down block'; 'Keystone module')
  - Plastic snap-shut taps on car stereo and accessory wiring (Hackaday 2023), and clip-on connectors for LED strips (Adafruit)
- **when_to_use**: Use IDC when you need to connect many wires at once (a ribbon cable to a two-row pin header on a circuit board), to terminate network and phone cable (punch-down jacks, blocks and RJ45 plugs), to tap a low-current signal off an existing wire without cutting it, or to splice small solid telecom wires in damp places (gel-filled splices). It is fast, needs no stripping or heat, and terminates all the wires of a ribbon 'in a single action' (Wikipedia 'Electrical connector'; Electrokit). LED-strip clips join strips without soldering (Adafruit).
- **when_not_to_use**: Not for power above a few amps: use a crimped or soldered joint (Wikipedia 'Electrical connector'). Not where the wire moves or vibrates: cheap fold-over taps 'tend to cut or damage the wire and eventually fail', worse 'if there's movement that allows them to flex and chew their way through a wire' (Hackaday 2023); for permanent vehicle work use a Crimped butt splice, a Solder sleeve or a Soldered wire joint. Not with the wrong wire: stranded wire in solid-wire blocks, mixed gauges in one slot, or a wire size outside the connector's range (Wikipedia 'Punch-down block'; Hackaday 2023). Not outdoors unless gel-filled and rated for it (Tools and Toys). For permanent LED-strip installs, soldering lasts longer, since quick connectors 'can become loose over time, especially in environments with frequent vibrations or temperature fluctuations' (HitLights). Never in mains wiring unless it is a certified fitting installed under local rules (see safety_notes).
- **environment_limits**: Vibration and movement: taps and clips loosen or cut into the wire (Hackaday 2023; HitLights). Damp: plain IDCs are open to moisture and T-taps are 'not rated for weather exposure' (Tools and Toys), so corrosion can raise resistance; gel-filled splices resist moisture (Electrokit UY2). Temperature swings loosen LED-strip quick connectors over time (HitLights). High-speed data through punch-down blocks needs careful work to control impedance and crosstalk (Wikipedia 'Punch-down block').
- **safety_notes**: Cheap fold-over taps cut into or chew through the wire and fail, and Hackaday warns 'If you find these in a car's wiring harness… buy a different car' (Hackaday 2023); poor connections risk 'fire hazards or short circuits' (HitLights), so keep IDCs to signals and small currents. Closing taps and splices by hand can hurt ('They also hurt your hands to use', Hackaday 2023): use pliers. A reversed ribbon cable (pin 1 on the wrong side) can feed signals or power to the wrong pins, which is why one edge is marked (Wikipedia 'Ribbon cable'). Mains: this entry gives no mains wiring steps. Some certified mains outlets use IDC terminals (Wikipedia 'IDC (electrical connector)'), but mains work must follow local law; for example, in England, Approved Document P covers electrical installation work in homes, and even non-notifiable repairs must comply (Approved Document P 2013, §2.7).
- **common_failures**: Wrong wire size or type: the blade either misses the copper or cuts strands, giving a poor or failing contact (Hackaday 2023; Wikipedia 'Modular connector'). Wire chewed through by movement in a tap (Hackaday 2023). Ribbon plug fitted the wrong way round (pin 1 not on the striped edge) (Wikipedia 'Ribbon cable'). Plug closed unevenly, so some contacts don't seat, or over-pressed so the housing cracks (Fablab Brussels). Punch-down blades sprung apart by a screwdriver, by two wires in one slot or by mixed gauges, giving 'extremely troublesome intermittent connections'; once sprung, the block often has to be replaced (Wikipedia 'Punch-down block'). Stranded wire in a solid-wire block or plug (Wikipedia 'Punch-down block'; 'Modular connector'). Re-used connectors that no longer grip (Wikipedia 'IDC (electrical connector)'). Flickering LED strips from clip connectors: 'Almost exclusively present in solderless connectors (not in soldered or spliced connections)'; moving the strip in the connector changes the flicker (HitLights). Corrosion in unsealed taps in damp places (Electrokit T-tap; Tools and Toys).
- **related**: 
  - Wire-to-board plug connectors (pin header and crimp housing): the headers IDC ribbon plugs push onto, and the crimped alternative for single wires
  - Crimped butt splice: the stronger, vibration-proof way to join wires, but needs stripping and a crimp tool
  - Solder sleeve (solder-seal splice) and Soldered wire joint: permanent soldered splices; a soldered T-splice is the reliable way to tap a wire
  - Spring-clamp wire connector (lever connector): tool-free and reusable, but needs stripped wire
  - Standard plug-and-socket connector: RJ45 and keystone jacks use IDC on the cable side
  - Flat flexible cable and latching connector (FFC with ZIF connector): the thin modern replacement for ribbon cable inside devices
  - Wire wrap: another gas-tight, solderless joint, made by winding solid wire round a square post
  - Twist-on wire connector (wire nut): a removable cap for twisted, stripped wires
  - Keying (one-way-only fit): shrouded box headers stop ribbon plugs going on backwards

### Pictures, videos and models

- **links**: 
  - [FDD 34 PIN Scheidklemmen (IDC blades in a 34-pin floppy cable plug), Wikimedia Commons, by Hans Haase](https://commons.wikimedia.org/wiki/File:FDD_34_PIN_Scheidklemmen_IMG_0691.JPG): Close-up of the forked connector blades cutting through the insulation of a ribbon cable *(licence: CC BY-SA 4.0)*
  - [Pin 1 idc (Wikimedia Commons, by Nick1nildram)](https://commons.wikimedia.org/wiki/File:Pin_1_idc.png): The 'V' mark on an IDC plug that shows pin 1, where the striped wire goes *(licence: GFDL (marked for relicensing to CC BY-SA 3.0))*
  - [110 punch block (Wikimedia Commons, by Adamantios)](https://commons.wikimedia.org/wiki/File:110-punch-block-IDC-0a.jpg): A 110-type punch-down block with wires pressed into its insulation-displacement slots *(licence: CC BY-SA 3.0 / GFDL)*
  - [Rj-45 male compare (Wikimedia Commons, by Baran Ivo)](https://commons.wikimedia.org/wiki/File:Rj-45_male_compare.jpg): Two RJ45 plugs side by side: contacts made for solid wire and contacts made for stranded wire *(licence: Public domain (PD-self))*
  - [How to crimp IDC connectors (Fablab Brussels, 3-page photo guide, Dutch and English)](http://www.fablab-brussels.be/fablab-english/wp-content/uploads/2021/11/IDC-crimps-instructies.pdf): Step-by-step photos: the three parts of a ribbon plug, the pin 1 triangle, lining up the red stripe, pressing in a bench vice and fitting the strain-relief clamp *(licence: link only (licence not stated))*
- **make_it_yourself**: 
  - [Crimp Aid for AMP TE IDC Connector (24-pin | 1.27mm) (vinzcenzo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/831720-crimp-aid-for-amp-te-idc-connector-24-pin-127mm): A printed holder that keeps a small ribbon-cable IDC plug square so it can be squeezed shut by hand until it clicks *(licence: Creative Commons Attribution-ShareAlike)*
  - [Crimping Tool Adapter for IDC Connectors (MichaelQ, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1248613-crimping-tool-adapter-for-idc-connectors): Adapters and a stand for an IDC crimping tool, for 2.54 mm-pitch male and female IDC headers on 1.27 mm ribbon cable *(licence: GNU General Public License v3.0)*
  - [Punch Puck - CAT5e/6+ keystone punch down holder (Belden) (Jerry Lee, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/727380-punch-puck-cat5e6-keystone-punch-down-holder-belde): A printed holder that grips a keystone network jack while the wires are punched down *(licence: Creative Commons Attribution-NonCommercial)*
- **diagram_idea**: A cut-away of one IDC contact in three steps: an insulated wire above a forked metal slot, the wire being pushed down so the sharp edges slice the insulation, and the copper squeezed between the two springy sides; beside it, a ribbon plug with the red stripe lined up to the pin 1 triangle, and a T-tap showing a branch wire pressed across a through wire.
- **sources**: 
  - https://en.wikipedia.org/wiki/IDC_(electrical_connector)
  - https://en.wikipedia.org/wiki/Electrical_connector
  - https://en.wikipedia.org/wiki/Punch-down_block
  - https://en.wikipedia.org/wiki/Ribbon_cable
  - https://en.wikipedia.org/wiki/Modular_connector
  - https://en.wikipedia.org/wiki/Vampire_tap
  - https://en.wikipedia.org/wiki/Keystone_module
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://learn.adafruit.com/solderless-rgb-led-clips
  - https://hitlights.com/blogs/premium-led-strip-lighting/solve-flickering-led-strips
  - https://hitlights.com/blogs/premium-led-strip-lighting/quick-connectors-or-soldering
  - https://www.electrokit.com/en/skarvklamma-2-trad-hjkt2-uy2
  - https://www.electrokit.com/en/skarvklamma-rod
  - https://toolsandtoys.net/ticonn-quick-splice-t-tap-wire-connector-kit/
  - https://www.digikey.com.au/en/products/detail/3m/562-BIN/3864018
  - https://forum.digikey.com/t/idc-crimp-solutions-for-the-budget-conscious/22965
  - https://forum.digikey.com/t/how-do-idc-connectors-work-and-what-tools-should-i-use/6951
  - https://www.fablab-brussels.be/fablab-english/how-to-crimp-idc-connectors/
  - http://www.fablab-brussels.be/fablab-english/wp-content/uploads/2021/11/IDC-crimps-instructies.pdf
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:FDD_34_PIN_Scheidklemmen_IMG_0691.JPG
  - https://commons.wikimedia.org/wiki/File:Pin_1_idc.png
  - https://commons.wikimedia.org/wiki/File:110-punch-block-IDC-0a.jpg
  - https://commons.wikimedia.org/wiki/File:Rj-45_male_compare.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 3 A
- **tools**: crimper, press or vice, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

## 357 Binding post and banana plug (test-lead connector, crocodile clip)

*electrical connections.* A threaded post with a screw-down cap that clamps a bare wire, spade or plug, and the spring-pin banana plug that pushes into it, as on bench power supplies, meters and speakers; crocodile clips grab anything for a quick test

*Also covers:* Also covers five-way posts, 4 mm and 2 mm plugs, stackable and shrouded safety plugs, test hooks and jump-lead clamps. Safety: ordinary binding posts aren't insulated for dangerous voltages; use shrouded plugs.

### What it is

- **plain_name**: The coloured screw-down knobs on a power supply, meter or speaker that you clamp a wire under or push a plug into, the springy 'banana' plug on the end of a test lead that pushes into them, and the spring-loaded toothed clip (crocodile clip) that grabs any bare wire or terminal for a quick test
- **term**: Binding post and banana plug (test-lead connector, crocodile clip)
- **aliases**: 
  - binding post / five-way binding post / universal binding post (Wikipedia 'Binding post')
  - banana plug (male) and banana jack or banana socket (female); 4 mm plug or 4 mm connector, especially in Europe; 2 mm banana plug (miniature) (Wikipedia 'Banana connector')
  - stackable or stacking banana plug (a plug with a socket in its back for another plug) (Wikipedia 'Banana connector'; Cal Test 'Banana Plugs 101')
  - double banana plug / dual banana plug (two plugs on 3/4 in, 19.05 mm centres) (Wikipedia 'Banana connector')
  - shrouded, sheathed, sleeved or safety banana plug; retractable-sheath banana plug; safety banana jack (Cal Test 'Banana Plugs 101'; Wikipedia 'Banana connector')
  - test lead / patch cord / test prod (Wikipedia 'Test probe'; Pomona catalogue)
  - crocodile clip / alligator clip / croc clip (Wikipedia 'Crocodile clip')
  - test hook / seizer probe / IC hook or IC clip / grabber test clip (Wikipedia 'Test probe'; SparkFun 'Connector Basics'; Pomona catalogue)
  - Kelvin clip (a crocodile clip with its two jaws insulated from each other, for four-wire measurement) (Wikipedia 'Crocodile clip')
  - automotive clip / battery clamp / jump-lead clamp; jump leads, jumper cables or booster cables (Wikipedia 'Crocodile clip', 'Jump start (vehicle)')
  - Pee-Wee and Mini-Gator (Mueller Electric, brands of crocodile clip) (Wikipedia 'Crocodile clip')
  - speaker terminal (binding posts on loudspeakers and amplifiers) (Wikipedia 'Binding post')
  - pin tip plug and pin tip jack (2 mm pin with no spring; related) (Wikipedia 'Banana connector')
  - wander plug (older British split-pin plug; does not mate reliably with banana sockets) (Wikipedia 'Banana connector')
  - Fahnestock clip (an older springy-tab wire clip that binding posts largely replaced) (Wikipedia 'Fahnestock clip')
- **family**: electrical connections
- **other_families**: quick-release & tool-free, clamping, magnetic & friction connections
- **one_liner**: A binding post is a threaded metal post with a screw-down insulated cap that clamps a bare wire, spade or pin, and also takes a springy banana plug pushed into its end, so test leads and wires can be connected and removed by hand in seconds; crocodile clips and test hooks do the same job by gripping any bare wire, lead or terminal with a spring.
- **complexity**: A few parts. Binding post: threaded metal post with a cross-hole and a 4 mm socket in its tip, insulated captive thumb nut (cap), insulating washers or mounting base, lock washer and hex nut that fix it through a panel (Pomona model 3750 data sheet). Banana plug: a 4 mm or 2 mm metal pin with one or more lengthwise springs that bulge outwards, a body where the wire is screwed, soldered or crimped, and an insulating sleeve or shroud (Wikipedia 'Banana connector'). Crocodile clip: two serrated metal jaws on a pivot, a spring, a wire screw or crimp, and often a plastic boot (Wikipedia 'Crocodile clip').
- **how_it_works**: Screwing down the binding post's cap squeezes a bare wire, spade terminal or pin against the post (or inside its cross-hole), so friction and clamping force hold it and make the electrical contact (Wikipedia 'Binding post'). A banana plug's bulging springs are slightly bigger than the 4 mm hole, so when pushed in they press outwards against the socket wall, which both makes good contact and stops the plug falling out, yet it pulls out by hand (Wikipedia 'Banana connector'). A crocodile clip's spring forces its tapered, toothed jaws together so they bite onto a wire or terminal; squeezing the handles opens it (Wikipedia 'Crocodile clip'). Shrouded (safety) plugs and sockets add an insulating sleeve so no live metal can be touched while plugged in (Wikipedia 'Banana connector').

### Finder attributes

- **job**: join and hold: makes a temporary, hand-operated electrical connection between a wire or test lead and a device, or between two test leads
- **motion**: none in use; a banana plug can turn freely in its socket and a crocodile clip's jaws open about 7-19 mm on a pivot (Mueller BU-60 and BU-65 data sheets)
- **degrees_of_freedom**: 0 once a wire is clamped under the cap; a banana plug in its socket keeps 1 (it can still turn about its own axis without losing contact, because pin and socket are both round)
- **special_behaviour**: 
  - quick-release: banana plugs pull straight out and crocodile clips open by squeezing, with no tools; a stacking plug lets another plug share the same point (Cal Test 'Banana Plugs 101')
  - self-aligning or self-centring: the springy banana pin centres itself in the round socket and takes up its small clearance (Wikipedia 'Banana connector')
- **holding_principle**: friction or clamping (force-fit): the screwed cap clamps the wire or spade; spring force (a spring or springy part presses it in place): the banana plug's springs press outwards in the socket and the crocodile clip's spring closes its jaws
- **input_output**: not applicable
- **power**: passive (no power needed): it only carries the current of the circuit it connects
- **removability**: tool-free quick release for banana plugs, crocodile clips and test hooks; removable by hand (unscrew the cap) for bare wires and spades; the post itself is fixed into the panel with a nut
- **reuse_cycles**: many times: posts, plugs and clips are made for repeated connection; plug springs, clip springs and cheap plating wear with use ⚑ [uncertain: no cycle figure found on an opened page] *(⚑ parts need confirming)*
- **tools_needed**: none to connect and disconnect; a small screwdriver, soldering iron or crimp tool to fit a wire into a banana plug or clip; a spanner or nut driver and a drilled panel to mount a binding post
- **seal**: none: open metal contacts
- **load**: Electrical: up to about 30 A (a typical panel binding post is rated 15 A (Pomona 3750); quality banana plugs and cables are 'typically rated for 30 V at 15 A' (Wikipedia 'Banana connector'), with some heavy 4 mm plugs claiming 36-50 A (Gough Lui); a common crocodile clip is rated 10 A and a fully insulated one 30 A (Mueller BU-60, BU-65); the exception is the large copper battery clamps on jump leads, which carry hundreds of amperes (Wikipedia 'Crocodile clip')); extra-low voltage only for ordinary binding posts and unshrouded plugs, which are 'not suitable to be used for carrying dangerous voltages' (Wikipedia 'Binding post'); shrouded safety plugs and leads carry measurement-category ratings up to 1000 V, but this entry does not cover mains measurement. Mechanical: light; a banana plug or crocodile clip pulls off with a firm tug or a snagged lead, and clips have 'a reasonably poor grip that can be easily compromised' (SparkFun 'Connector Basics'); a wire clamped under a tightened cap holds much better in a pull.
- **adjustable**: no; the cap is simply tightened by hand onto the wire
- **play_and_precision**: not applicable as a locator; the plug's springs take up the small clearance between a 3.90 mm compressed plug and a 4.00 mm socket (Cal Test 'Banana Plugs 101'), so it sits snugly with no noticeable play but can turn
- **access_needed**: one side only (blind) to connect leads, from the front of the panel; both sides of the panel to mount the post (nut and washer on the back) (Pomona 3750 data sheet)
- **materials**: Posts: brass, gold- or tin-plated, or gold-plated tellurium copper for low thermal voltage in precision work; caps and bases in polycarbonate; nickel-plated brass nut and steel lock washer (Pomona 3750/3760/3770 data sheet). Banana plugs: copper-alloy contact springs (Cal Test) in an insulating plastic body; loudspeaker plugs often have bare metal bodies (Wikipedia 'Banana connector'). Crocodile clips: nickel-plated steel or solid copper jaws with a music-wire spring (Mueller BU-60, BU-60CHS); boots of PVC, shells of glass-filled nylon (Mueller BU-652); early clips were zinc-coated steel, changed to nickel plating because zinc soiled easily (Wikipedia 'Crocodile clip'). Fahnestock clips: phosphor bronze or spring steel, usually nickel-plated (Wikipedia 'Fahnestock clip'). Joins copper wire, spade and pin terminals and component leads.
- **maker_difficulty**: easy: buy posts, plugs and clip leads; mounting a post only needs a drilled hole in a panel, and fitting a screw-type banana plug onto a wire needs only a screwdriver

### Making it

- **processes**: 
  - off-the-shelf part (binding posts, banana plugs and jacks, test leads, crocodile clips, test hooks, jump leads)
  - 3D print (FDM): front panels, enclosures, adapters, plug covers, lead holders and organisers that hold bought metal posts and plugs
  - laser cut: flat front panels drilled or cut for binding posts ⚑ [uncertain: general practice, not from an opened page] *(⚑ parts need confirming)*
- **print_in_place**: no: the metal post, plug springs and clip are bought parts; printed parts are panels, adapters, covers and holders that the metal parts are fitted into
- **making_tips_3d_printing**: Print the panel or enclosure and fit bought metal posts: a typical binding post clamps through a panel 1.77-6.35 mm (0.070-0.250 in) thick with a nut on the back (Pomona 3750 data sheet), so make the printed wall at least that thick around the hole and add a flat washer so the nut doesn't dig into the plastic ⚑ [uncertain: washer advice is general practice]. Space pairs of posts or jacks on 19.05 mm (3/4 in) centres so double banana plugs and adapters fit (Wikipedia 'Banana connector'; Cal Test). For printed parts that a 4 mm plug pushes into, size the hole to the plug's springs, not to 4 mm: a printed banana-plug cover uses a 4.3 mm hole that 'should fit most connectors', with 4.1 mm and 4.5 mm versions for tight or loose prints and an editable SCAD file (Printables 87079). Simple banana-jack-to-breadboard adapters print with no supports in about 30 minutes (Printables 95349). Keep cross-holes in neighbouring posts pointing different ways so wires pushed in from opposite sides can't touch (Wikipedia 'Binding post'). Choose a heat-tolerant plastic (PETG or ASA rather than PLA) if the posts carry several amps, since contacts warm up ⚑ [uncertain: no test found]; one maker printed a cigarette-lighter-to-binding-post adapter in PLA with no supports and fixed the parts with CA glue (Printables 768315). Printed parts give no safety insulation rating: use them only on extra-low-voltage circuits. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'binding post' or '5-way binding post' (gold- or tin-plated, single or double, with mounting base or shorting link; 'spring-loaded binding post' and 'top-loading binding post' for quick wire attachment, as in the Pomona catalogue), '4mm banana socket' or 'banana jack' (panel), '4mm safety socket' or 'shrouded banana jack', '4mm banana plug' (screw, solder or crimp termination; 'stackable banana plug'), '2mm banana plug', 'shrouded banana plug' or 'safety banana plug', 'double banana plug' or 'dual banana plug', 'banana to crocodile clip test lead', 'test lead set', 'crocodile clip' or 'alligator clip' (with insulating boot; 'insulated safety alligator clip' that mounts on a 4 mm plug), 'test hook', 'grabber test clip' or 'IC test clip', 'Kelvin clip', 'jump leads' or 'booster cables', 'Fahnestock clip'. Supplier categories to browse: Pomona's 'Banana Plugs, Jacks and Hardware', 'Alligator Test Clips' and 'Grabber Test Clips'.
- **rules_of_thumb**: 
  - 4 mm banana jacks are 4.00 ± 0.05 mm across, a plug's springs compress to 3.90 ± 0.05 mm, and the standard spacing between two jacks is 19.05 mm (0.75 in) (Cal Test 'Banana Plugs 101', https://assets.testequity.com/te1/Documents/pdf/caltest/HowDoBananaPlugsWork.pdf; spacing also Wikipedia, https://en.wikipedia.org/wiki/Banana_connector).
  - An unsheathed (exposed-contact) banana plug is 'not recommended for handheld use above 30 VAC / 60 VDC' under IEC 61010-031; sheathed (shrouded) plugs are recommended for all CAT III and IV use, retractable-sheath plugs for CAT II (Cal Test, https://assets.testequity.com/te1/Documents/pdf/caltest/HowDoBananaPlugsWork.pdf).
  - A lead set is only as safe as its weakest part: 'The measurement category of a combination of probe, lead and or accessory is the lower of their respective category ratings' (Cal Test, https://assets.testequity.com/te1/Documents/pdf/caltest/HowDoBananaPlugsWork.pdf).
  - A typical binding post: 15 A, up to 115 °C, and for CE compliance 'not intended for hand-held use at voltage above 33 Vrms/70 Vdc' (Pomona model 3750/3760/3770 data sheet, https://assets.rs-online.com/v1698942361/Datasheets/a981ed7dbcb7403ec0b1ef9cc2e05d9b.pdf).
  - Quality banana plugs and cables are 'typically rated for 30 V at 15 A'; unsheathed banana connectors are not usually rated for mains voltage (Wikipedia, https://en.wikipedia.org/wiki/Banana_connector).
  - A five-way binding post takes bare wire up to 10 AWG through its cross-hole and spade terminals with a 1/4 in throat (Wikipedia, https://en.wikipedia.org/wiki/Binding_post).
  - Crocodile clip ratings vary widely: a common 58 mm clip is rated 10 A with a 7.9 mm jaw opening (Mueller BU-60, https://www.farnell.com/datasheets/3677775.pdf); a safety clip that mounts on a 4 mm plug is 20 A, 300 V CAT II (Mueller BU-652, https://assets.testequity.com/te1/Documents/pdf/muellerelectric/Mueller-Electric_BU-652-0_Datasheet.pdf); a fully insulated clip is 30 A, 1000 V CAT II with a 19 mm jaw (Mueller BU-65, https://static.rapidonline.com/pdf/05-4711_v1.pdf). Check the rating printed on your own clip leads; cheap ones may be lower ⚑ [uncertain: no test of cheap leads found].
  - Small laboratory crocodile clips are about 15-40 mm long (Wikipedia, https://en.wikipedia.org/wiki/Crocodile_clip). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - the red and black screw terminals on the back of a hi-fi speaker or amplifier, often with banana plugs pushed into them (Wikipedia 'Binding post')
  - the coloured output terminals on a bench power supply, and the plugs on multimeter test leads (Wikipedia 'Banana connector')
  - crocodile-clip leads used to wire up a bulb and battery in a school science lesson (Wikipedia 'Crocodile clip')
  - the big clamps on car jump leads (Wikipedia 'Jump start (vehicle)')
- **when_to_use**: When a connection needs to be made and unmade often, by hand, without tools: hooking a project up to a bench power supply or meter, swapping test leads, wiring a temporary test rig, or giving a home-made power box or battery pack universal outputs. Binding posts suit panels and enclosures because one post takes a banana plug, a crocodile clip, a spade terminal or a bare wire (Wikipedia 'Binding post'); stackable plugs let several leads share one point (Cal Test). Use crocodile clips and test hooks to grab a component lead, bare wire or terminal for a moment; test hooks and IC clips are small enough to grab one pin without touching its neighbours (SparkFun 'Connector Basics'). Speaker cables use banana plugs so they can be swapped quickly (Wikipedia 'Banana connector').
- **when_not_to_use**: Not for permanent wiring inside a project, or anything that is moved, shaken or pulled: plugs and clips come off easily, so use a Screw terminal, Crimp terminals or a Standard plug-and-socket connector instead. Not for dangerous voltages with ordinary binding posts or unshrouded plugs; use shrouded safety sockets and plugs with leads rated for the job (Wikipedia 'Binding post'; Cal Test), and leave mains measurement to people trained for it. Not for currents above the clip or plug rating (often 10-15 A): use a High-current battery plug, ring terminals on studs or proper battery clamps. Not for small signal or high-frequency connections where the leads pick up noise; signal generators now often outrun binding posts (Wikipedia 'Binding post' photo caption), so use coaxial plugs (BNC) instead. Not where clips could slip onto neighbouring parts: crocodile clips are bulky and easily short to nearby bare metal (SparkFun 'Connector Basics'); use a test hook or a soldered test wire.
- **environment_limits**: A typical binding post works up to 115 °C (Pomona 3750 data sheet). Plated contacts are better than bare ones: early zinc-coated steel clips soiled easily and were changed to nickel plating (Wikipedia 'Crocodile clip'); dirty, oxidised or loose clips add resistance and give wrong readings ⚑ [uncertain: from a search summary, not an opened page]. Vibration shakes banana plugs and crocodile clips loose. Banana plug springs and clip springs can lose some grip after much use or after being forced into the wrong size of socket (Wikipedia warns that forcing banana plugs into wander-plug sockets is insecure and that spreading a wander plug's tip often breaks it) ⚑ [uncertain: no figure for spring wear]. *(⚑ parts need confirming)*
- **safety_notes**: VOLTAGE: 'Even so-called isolated binding posts are typically not sufficiently isolated to protect users from coming into contact with their metal parts carrying voltage', so they are 'not suitable to be used for carrying dangerous voltages' (Wikipedia 'Binding post'); an exposed or half-inserted banana plug, a plug stacked through a cross-hole, or a set screw on the plug body can all leave live metal exposed (Wikipedia 'Banana connector'). Keep ordinary posts, plugs and clips to extra-low voltage; the Pomona post is 'not intended for hand-held use at voltage above 33 Vrms/70 Vdc' (data sheet) and unsheathed plugs not above 30 V AC / 60 V DC hand-held (Cal Test, IEC 61010-031). Where higher voltages are possible use shrouded (sheathed) plugs in safety sockets; IEC 61010 now requires this design on multimeter test leads (Wikipedia 'Banana connector'). Many bench supplies now fit only shrouded sockets because some outputs may exceed safe extra-low voltage (SELV) or supply high current; a home-made adapter back to bare wire removes that protection and has no safety rating (Gough Lui). Mains: this entry gives no mains instructions; mains work must follow local law (in England, Part P of the Building Regulations, Approved Document P). WALL SOCKETS: in most European countries a mains socket will physically accept banana plugs and US double banana plugs, a shock risk (Wikipedia 'Banana connector'); never plug a test lead into a wall socket; EU amplifiers and speakers with banana sockets are said to ship with removable plastic plugs in them for this reason ⚑ [uncertain: marked 'citation needed' on Wikipedia]. SHORTS: crocodile clips 'easily cause shorts to nearby bare metal' (SparkFun); use booted clips. Old binding posts with lined-up cross-holes let wires pushed in from opposite sides touch (Wikipedia 'Binding post'). A short across a battery or power supply can make leads and clips very hot. Test leads with too low a current rating can overheat and melt their insulation ⚑ [uncertain: from a search summary of a Fluke guide that could not be opened]. JUMP LEADS: a car battery can give off hydrogen; connect the last clamp to bare metal away from the battery so any spark happens away from the gas, and remove the leads in reverse order; never jump-start a frozen battery, which may explode (Wikipedia 'Jump start (vehicle)'); about 442 people in the US were injured by exploding batteries while jump-starting in 1994 (NHTSA, quoted in Wikipedia). PINCH: large battery clamps have strong springs. *(⚑ parts need confirming)*
- **common_failures**: (1) Intermittent or high-resistance contact from loose, dirty or worn clips and plugs, giving wrong meter readings or voltage drop under load; replace worn leads ⚑ [uncertain]. (2) A clip slipping off or onto the wrong pin: clips have a poor grip that is easily compromised (SparkFun); use a test hook or IC clip on small pins. (3) A stray wire strand or a crocodile clip bridging two terminals and shorting the supply or amplifier output; twist strands neatly, use booted clips and keep red and black apart (SparkFun; Wikipedia 'Binding post') ⚑ [uncertain: the speaker-strand advice comes from a search summary]. (4) A plug only partly inserted, or a 20 mm plug in a socket meant for 15 mm plugs, leaving live metal exposed (Wikipedia 'Banana connector'). (5) A shrouded plug that won't fit an old unshrouded socket: a sheathed plug only fits a safety socket, though an unsheathed plug fits a safety socket (Wikipedia 'Banana connector'; Cal Test). (6) Overheating when a lead or clip carries more than its rating, e.g. a 10 A clip on a motor or charger. (7) A binding post turning in its panel hole when the cap is tightened; tighten the back nut firmly ⚑ [uncertain]. (8) Mixing up red and black and connecting a supply backwards; red usually means positive and black negative, green earth (Wikipedia 'Binding post'). *(⚑ parts need confirming)*
- **related**: 
  - Screw terminal (terminal block, barrier strip, connector strip): for wires that stay put; needs a screwdriver and doesn't take plugs
  - Spring-clamp wire connector (lever connector, push-in wire connector): tool-free like a binding post but for joining wires to each other, not for test leads
  - Crimp terminals (ring, fork and spade terminals, blade quick-disconnect): a spade terminal on a wire end slides under a binding post's cap for a firmer connection
  - Standard plug-and-socket connector (USB, barrel jack, audio jack, RJ45): multi-pin or keyed connectors for finished devices; BNC coaxial plugs replace banana plugs for signals
  - High-current battery plug (bullet connector, polarised battery connector): for currents above what banana plugs and clips handle, and for battery packs that must not be plugged in backwards
  - Battery holder and battery contacts (spring battery contact, coin-cell holder): spring contacts for cells; crocodile clips are often clipped onto cells for a quick test
  - Pogo pin (spring-loaded contact pin): a spring contact for test fixtures that press onto pads, instead of clipping on
  - Magnetic connector (magnetic pogo connector, magnetic breakaway power connector): a tool-free plug that breaks away safely when pulled
  - Wire-to-board plug connectors (pin header and crimp housing): crocodile-clip-to-pin jumper leads connect test equipment to these headers
  - Fahnestock clip: an older springy-tab clip for bare wire, still found on school kits, largely supplanted by binding posts (Wikipedia 'Fahnestock clip')
  - Chicago screw (binding screw, sex bolt): the non-electrical screw-and-barrel fastener that shares the 'binding post' name

### Pictures, videos and models

- **links**: 
  - [BindingPostRed.jpg (Wikimedia Commons, by Nap fu xoxo)](https://commons.wikimedia.org/wiki/File:BindingPostRed.jpg): A red five-way binding post with its screw-down cap and the 4 mm socket in its tip *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Double-stackable banana plugs.jpg (Wikimedia Commons, by Ishimvlad)](https://commons.wikimedia.org/wiki/File:Double-stackable_banana_plugs.jpg): Red and blue 4 mm stackable banana plugs with sockets in their backs, branching in two directions *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Three alligator clips.JPG (Wikimedia Commons, by Atlant)](https://commons.wikimedia.org/wiki/File:Three_alligator_clips.JPG): A bare standard crocodile clip, a miniature clip in a plastic boot and a large multi-function clip *(licence: CC BY 2.5 (reuse with credit))*
  - [Hameg Power Supplies.jpg (Wikimedia Commons, by Theoprakt)](https://commons.wikimedia.org/wiki/File:Hameg_Power_Supplies.jpg): Two bench power supplies: the top one with screw-type banana jacks, the bottom one with shrouded safety banana jacks *(licence: Public domain)*
  - [Banana Plugs 101: How Do Banana Plugs Work (Cal Test Electronics, PDF)](https://assets.testequity.com/te1/Documents/pdf/caltest/HowDoBananaPlugsWork.pdf): Dimension drawing of 4 mm plugs and jacks, measurement categories, and pictures of plain, stacking, shrouded and retractable-sheath plugs *(licence: link only)*
- **make_it_yourself**: 
  - [Banana jack adapter for breadboards (Printables 95349; URL from Printables API, page not opened)](https://www.printables.com/model/95349-banana-jack-adapter-for-breadboards): Printed adapter that lets up to four banana plugs connect along each side of a standard breadboard; prints with no supports in about 30 minutes *(licence: CC BY (Creative Commons Attribution))*
  - [Cover for banana plug (Printables 87079; URL from Printables API, page not opened)](https://www.printables.com/model/87079-cover-for-banana-plug): Insulating cap for a banana plug pin, with or without a loop, in 4.1, 4.3 and 4.5 mm hole sizes plus an editable SCAD file; a quick tolerance test for 4 mm plugs *(licence: CC BY (Creative Commons Attribution))*
  - [Updated 4mm Lab cable organizer | Banana Jack | Customizable (Printables 42135; URL from Printables API, page not opened)](https://www.printables.com/model/42135-updated-4mm-lab-cable-organizer-banana-jack-custom): Customisable OpenSCAD holder that 4 mm banana leads plug into for storage *(licence: CC BY (Creative Commons Attribution))*
  - [Cigarette Lighter to Binding Post (Banana Plug) (Printables 768315; URL from Printables API, page not opened)](https://www.printables.com/model/768315-cigarette-lighter-to-binding-post-banana-plug): Printed box that turns a 12 V car socket plug into a pair of binding posts for a hobby charger; printed in PLA, no supports, STEP file included *(licence: CC BY (Creative Commons Attribution))*
  - [Project: Banana to Terminal Block Breakout (or Where Are My Binding Posts?!) (Gough's Tech Zone, 2022)](https://goughlui.com/2022/10/02/project-banana-to-terminal-block-breakout-or-where-are-my-binding-posts/): A maker's small PCB that plugs into four shrouded banana sockets on 19 mm spacing and breaks them out to screw terminals, with the parts list and a safety warning *(licence: link only)*
- **diagram_idea**: A cut-away of a five-way binding post showing the threaded post, the screw-down cap clamping a bare wire through the cross-hole, a banana plug's bulging springs pressing on the inside of the 4 mm socket in the post's tip, and beside it a shrouded safety plug in a recessed socket with no metal showing, plus a small crocodile clip with its spring and toothed jaws.
- **sources**: 
  - https://en.wikipedia.org/wiki/Binding_post
  - https://en.wikipedia.org/wiki/Banana_connector
  - https://en.wikipedia.org/wiki/Crocodile_clip
  - https://en.wikipedia.org/wiki/Fahnestock_clip
  - https://en.wikipedia.org/wiki/Test_probe
  - https://en.wikipedia.org/wiki/Jumper_cable
  - https://en.wikipedia.org/wiki/Jump_start_(vehicle)
  - https://assets.testequity.com/te1/Documents/pdf/caltest/HowDoBananaPlugsWork.pdf
  - https://assets.rs-online.com/v1698942361/Datasheets/a981ed7dbcb7403ec0b1ef9cc2e05d9b.pdf
  - https://www.pomonaelectronics.com/products/banana-plugs-jacks-and-hardware/binding-posts
  - https://www.farnell.com/datasheets/3677775.pdf
  - https://assets.rs-online.com/v1699541512/Datasheets/cf5ba4e7bb40b3937e85c648ed30456f.pdf
  - https://assets.testequity.com/te1/Documents/pdf/muellerelectric/Mueller-Electric_BU-652-0_Datasheet.pdf
  - https://static.rapidonline.com/pdf/05-4711_v1.pdf
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://goughlui.com/2022/10/02/project-banana-to-terminal-block-breakout-or-where-are-my-binding-posts/
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:BindingPostRed.jpg
  - https://commons.wikimedia.org/wiki/File:Double-stackable_banana_plugs.jpg
  - https://commons.wikimedia.org/wiki/File:Three_alligator_clips.JPG
  - https://commons.wikimedia.org/wiki/File:Hameg_Power_Supplies.jpg
  - https://commons.wikimedia.org/wiki/File:Jumper_cable_sequence.svg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: none, soldering iron, crimper, drill and tap, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, making_tips_3d_printing, processes, reuse_cycles, rules_of_thumb, safety_notes

## 358 Twist-on wire connector (wire nut)

*electrical connections.* A plastic cap with a tapered metal coil inside, screwed by hand onto the twisted, stripped ends of two or more wires, pulling them together and insulating them; the usual splice in North American house wiring

*Also covers:* Also covers gel-filled types for damp places. Marrette (brand) as an alias. Safety: describe the type only, with no mains instructions: mains work must follow local law; not certified in most European countries, not for vibrating or damp places unless gel-filled, and not generally recommended for aluminium wire

### What it is

- **plain_name**: A small coloured plastic cap, like a thimble, with a cone-shaped metal spring inside, that is screwed by hand onto the bare ends of two or more wires to join them and cover them
- **term**: Twist-on wire connector (wire nut)
- **aliases**: 
  - twist-on wire connector / wire nut / wire connector / cone connector / thimble connector (Wikipedia 'Twist-on wire connector')
  - wire nut is a genericised trademark (Wikimedia Commons file description)
  - Marrette (brand; used in Canada for connectors of any brand, after inventor William P. Marr) (Wikipedia 'Twist-on wire connector')
  - screw-on wire connector (Gardner Bender catalogue title cited by Wikipedia)
  - Wing-Nut (Ideal, brand: a winged twist-on connector) (Ideal installation instructions)
  - Highland, Secure Grip and Performance Plus (3M, brands) (3M wire connector brochure)
  - lasdop (Dutch) (Wikimedia Commons file 'Gebruik lasdop.jpg')
  - gel-filled, grease-filled or silicone-filled wire connector; underground or direct-bury wire connector; direct bury splice kit (3M DBR data sheet)
  - feed-through grounding connector / screw-on grounding connector (green, with a hole in the top for a bare earth wire); pigtail connector (with a short wire already fitted) (Wikipedia 'Twist-on wire connector')
  - ceramic wire connector (for hot places such as heating appliances) (Wikipedia 'Twist-on wire connector')
- **family**: electrical connections
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A twist-on wire connector is an insulating cap with a tapered coil spring inside that is screwed by hand onto the stripped ends of several wires, drawing them together and squeezing them into one electrical joint while covering the bare metal.
- **complexity**: A few parts acting as one unit: a moulded flame-retardant plastic shell (often ribbed or with wings for grip, and a skirt that covers the insulation edge) and a tapered coiled metal insert, usually a steel spring; some types use moulded internal grooves instead of a spring; damp-location types are pre-filled with silicone gel or grease, or come with a grease-filled tube (Wikipedia 'Twist-on wire connector'; Purdue 4-H 'Wire Connectors'; 3M brochure and DBR data sheet).
- **how_it_works**: The tapered coil inside the cap works like a cone-shaped internal thread: as the cap is turned onto the bunched wire ends, the coil threads onto them, draws them deeper into the narrowing cone and squeezes them hard together (Wikipedia 'Twist-on wire connector'). Current then flows both through the twisted wires touching each other and through the metal coil (Wikipedia). The plastic shell insulates the joint and its skirt covers the bare copper (3M brochure). Gel- or grease-filled versions surround the joint with a sealant that keeps water out (3M DBR data sheet).

### Finder attributes

- **job**: join and hold: joins two or more wire ends into one electrical splice and insulates it
- **motion**: none in use; the cap is turned onto the wires when it is fitted
- **degrees_of_freedom**: 0: the wires are locked together inside the coil
- **special_behaviour**: none: it is a plain clamping splice; its practical advantages are that it is fitted by hand with no special tool and can be unscrewed again (Wikipedia 'Twist-on wire connector')
- **holding_principle**: friction or clamping (force-fit): the tapered coil threads onto the wires and squeezes them together; spring force (a spring or springy part presses it in place): the coil spring expands as it goes on and keeps gripping (3M brochure: 'flexible spring that has generous room for expansion and a strong bite')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: it unscrews, which is why it is used instead of solder or crimps where wiring may be changed later (Wikipedia 'Twist-on wire connector'; 3M: 'engineered for easy back-off and reuse'); gel- or grease-filled direct-bury splices are better treated as one-use ⚑ [uncertain: one-use statement seen only in a search summary of Ideal's product listing] *(⚑ parts need confirming)*
- **reuse_cycles**: a few times: the connector can be backed off and refitted (3M brochure), but the wire ends become kinked or nicked and may need re-stripping ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: none to fit (by hand); wire strippers and side cutters to prepare the wires; winged connectors can also be turned with a nut driver or special tool (Wikipedia 'Twist-on wire connector'), e.g. 3M's hand and power 'wire connector drivers' (3M brochure)
- **seal**: none for ordinary connectors, which are for 'dry locations only' (Ideal Wing-Nut instructions); watertight for gel-filled or grease-filled types: 3M's DBR/Y-6 direct-bury kit (a connector in a grease-filled tube) is listed for 'wet, damp, direct bury and submersible locations' and rated IP68, but 'not recommended for long-term continuous submersion' (3M DBR data sheet)
- **load**: Electrical: up to about 30 A (the connector itself is rated by wire size and voltage, not current: listed connectors take wire up to about AWG 10 and are rarely used on anything thicker (Wikipedia 'Twist-on wire connector'); the current is set by the wire and its fuse or breaker ⚑ [uncertain: no current rating found on an opened page]); rated for mains (listed connectors carry ratings such as 600 V in building wire and 1000 V in signs or light fittings (Ideal Wing-Nut instructions; 3M brochure), but mains work must follow local law and they are not certified in most European countries (Wikipedia)). Mechanical: light; it is not meant to take a pull: a badly fitted wire can come out 'with a light tug' (Hackaday commenter), and vibration loosens it, so it is not used on vehicles or trailers (Wikipedia). *(⚑ parts need confirming)*
- **adjustable**: no
- **play_and_precision**: not applicable
- **access_needed**: end of a tube or shaft: it goes onto the free ends of the wires, so all the wire ends must be brought out together
- **materials**: Shell: insulating, flame-retardant plastic (Purdue 4-H; 3M DBR data sheet: 'Flame Retardant Insulator'); 3M Highland shells 'withstand temperatures up to 221°F (105°C)' (3M brochure); ceramic shells for high-temperature uses such as heating appliances (Wikipedia). Insert: a tapered steel coil spring (3M DBR data sheet), or moulded internal grooves (Purdue). Sealant types: silicone gel or a moisture-resistant grease (3M uses grease 711B in a UV-resistant polypropylene tube) (3M DBR data sheet). Joins copper wire, solid or stranded, to copper wire (Ideal: 'Use only on Copper to Copper (Cu/Cu) wire combinations'; 3M Highland 'work equally well with either solid or stranded copper wire'). Aluminium wire needs connectors specially marked for it ('AL-CU' or 'CU-AL' in Ontario's rules) and the US CPSC does not recommend ordinary twist-on connectors for it (Electrical Safety Authority; CPSC Publication 516).
- **maker_difficulty**: easy: screwed on by hand, but always buy listed connectors in the right size for the wire combination; never make or 3D-print one

### Making it

- **processes**: off-the-shelf part only (listed, colour-coded connectors; gel-filled or direct-bury kits for damp places)
- **print_in_place**: no: it is a bought, safety-listed part and should not be printed
- **making_tips_3d_printing**: Not applicable for the connector itself: real wire connectors are listed parts made from flame-retardant materials (Purdue 4-H) with a steel coil, so a printed copy must never be used to join wires that carry real current, and never on mains. Printable helpers exist: handles that grip several sizes of wire nut so they can be turned tighter than with fingers (print opening-down, 3 walls, 20% infill, Printables 887096) and a version that fits a 1/4 in square drive for a drill (any non-flexible filament, no supports, Printables 896471).
- **off_the_shelf_parts**: Search terms: 'twist-on wire connector' or 'wire nut' (sold in colour-coded sizes with a wire-combination chart on the pack), 'winged wire connector' (e.g. Ideal Wing-Nut, brand), 'Marrette' (Canada), 'gel-filled wire connector' or 'silicone-filled wire connector', 'underground wire connector', 'direct bury splice kit' (e.g. 3M DBR, brand), 'grounding wire connector' or 'feed-through grounding connector' (green), 'pigtail wire connector', 'AL/CU wire connector' (only types marked for aluminium), 'wire connector driver' or 'wire nut driver', 'ceramic wire connector' (for hot places). Low-voltage landscape-lighting and sprinkler-valve splices are sold as direct-bury kits ⚑ [uncertain: from search listings]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Sizes are shown by colour, but capacity differs between makers, so always follow the wire-combination chart on the pack; a de facto scheme for two equal wires is roughly grey or blue for AWG 22-16, orange for about AWG 18-14, yellow for AWG 18-12 and red for AWG 14-10 (Wikipedia, https://en.wikipedia.org/wiki/Twist-on_wire_connector; Purdue 4-H, https://www.extension.purdue.edu/county/newton/4-h-youth-development/_docs/all-levels-wire-connectors-1.pdf; 3M's own range runs from H-29 grey for 2 x AWG 22 to H-35 red, https://multimedia.3m.com/mws/media/68624O/3m-wire-connectors-family-brochure-low-res-pdf.pdf).
  - Not often used on wire thicker than AWG 10 (5.26 mm²), because such solid wire is too stiff to join reliably this way; set-screw connectors, clamps or crimps are used instead (Wikipedia, https://en.wikipedia.org/wiki/Twist-on_wire_connector).
  - A typical ordinary connector: copper to copper only, dry locations only, 105 °C maximum, 600 V in building wire or 1000 V in signs and light fittings (Ideal Wing-Nut instructions, https://assets.testequity.com/te1/Documents/pdf/Ideal/Ideal_30-451J_Manual_0825.pdf). Smaller 3M Highland sizes H-29 and H-30 are rated only 300 V (3M brochure, https://multimedia.3m.com/mws/media/68624O/3m-wire-connectors-family-brochure-low-res-pdf.pdf).
  - For wet or buried joints use a kit listed for it: 3M's DBR/Y-6 is UL 486D listed for wet, damp, direct-bury and submersible locations, IP68, 600 V, operating -40 to 105 °C, applied at 0-49 °C, and 'not recommended for long-term continuous submersion' (3M data sheet, https://multimedia.3m.com/mws/media/653865O/3m-direct-bury-splice-kit-dbr-y-6-data-sheet-78-8129-9255-6-c.pdf). In US workplaces, 'Wire connectors or splicing means installed on conductors for direct burial shall be listed for such use' (OSHA 29 CFR 1910.303(c)(3)(ii), https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303).
  - Aluminium: in CPSC laboratory and life tests 'substantial numbers of these connectors overheated severely' on aluminium wire, and 'Pigtailing with Twist-on Connectors Is Not a Recommended Repair' (CPSC Publication 516, https://www.cpsc.gov/s3fs-public/516.pdf); in Ontario, connectors used with aluminium must be marked 'AL-CU' or 'CU-AL' (Electrical Safety Authority Flash, https://www.powercheck.ca/pdfs/Ontario_ESA_Flash_Aluminum_wiring.pdf).
  - An international standard exists for these devices: IEC 60998-2-4 covers twist-on connecting devices for copper conductors of 0.5-16 mm², total no more than 35 mm², in circuits up to 1000 V AC and 1500 V DC (IEC webstore, https://webstore.iec.ch/publication/4117); acceptance still differs by country (see safety_notes).

### When to use it

- **everyday_examples**: 
  - the coloured caps joining wires inside a ceiling-light fitting or switch box in a North American home (Wikimedia Commons 'Junction box.agr.jpg'); in Canada they are called Marrettes (Wikipedia)
  - the joints on the leads of ceiling fans, doorbells, thermostats, smoke alarms and garage-door openers (Purdue 4-H lists these uses)
  - buried garden-lighting or sprinkler-valve wire joints sealed in a grease-filled tube (3M DBR direct-bury kit) ⚑ [uncertain: garden lighting and sprinklers as uses come from search listings] *(⚑ parts need confirming)*
- **when_to_use**: For splicing several solid or stranded copper wires together in a fixed, dry place inside an enclosure, where the joint should be quick to make and easy to undo later, as is usual in North American building wiring (Wikipedia; Purdue 4-H). For a maker, small sizes are handy for joining low-voltage DC wires while testing (a Hackaday commenter: 'whip out small wire nuts while testing low voltage dc power stuff') and for joining the leads of low-voltage lighting. For damp or buried low-voltage joints, choose a gel- or grease-filled type listed for wet locations (3M DBR data sheet; Wikipedia).
- **when_not_to_use**: Anything that moves, vibrates or gets pulled, such as vehicles, trailers, robots and drones: use a Crimped butt splice, a Soldered wire joint with heat-shrink, or a Solder sleeve (Wikipedia: twist-on connectors are 'not used in damp or vibration-prone locations, such as automotive or trailer applications'). Damp or outdoor places with an ordinary connector: use a gel-filled or direct-bury type (Wikipedia; Ideal). Aluminium wire: use only connectors and methods approved for it (CPSC Publication 516). Thick wire above AWG 10: use set-screw, clamp or crimp connectors (Wikipedia). Mains wiring in countries where they are not certified, which Wikipedia says is most of Europe: use the connectors your local rules allow, such as a Screw terminal or a Spring-clamp wire connector. Where a joint must be easy to get right first time: one Hackaday commenter complains that after fitting 'one wire falls out or gets pulled out with a light tug', and several say they now use a Spring-clamp wire connector (lever connector) instead (Hackaday commenters).
- **environment_limits**: Ordinary connectors are for 'dry locations only' and shells are rated to 105 °C (Ideal; 3M Highland); not for damp or vibrating places (Wikipedia); ceramic versions are made for hot places such as heating appliances (Wikipedia). Grease-filled direct-bury kits: operating -40 to 105 °C, fitted at 0-49 °C, IP68, but not for long-term continuous submersion (3M DBR data sheet). Joints with aluminium wire deteriorate over time, raising resistance and causing overheating 'cumulative in effect' (CPSC Publication 516). Early porcelain versions could break apart and expose the wires, which is one reason some countries distrust the type (Wikipedia).
- **safety_notes**: MAINS: this entry describes the type only and gives no mains wiring steps. Mains work must follow local law: in England, electrical installation work in homes must meet Part P of the Building Regulations and some of it must be notified (Approved Document P, 2013); in US workplaces OSHA requires splices made 'with splicing devices identified for the use' and covered with insulation equivalent to the wire's (29 CFR 1910.303(c)(3)(i)). The maker's own warning: 'Contact with electricity can cause electrical fires, personal injury, or death... Consult local building codes to determine installation requirements' (Ideal Wing-Nut instructions). NOT ALLOWED EVERYWHERE: Wikipedia says that 'in most European countries, they are not certified for use' (its sources are forum pages), although an international standard for twist-on devices exists (IEC 60998-2-4), so rules differ by country; check yours. ALUMINIUM: CPSC testing found 'substantial numbers' of twist-on connectors 'overheated severely' on aluminium wire, and failing aluminium connections can overheat 'without any prior indications' (CPSC Publication 516); use only types marked for aluminium. DAMP AND VIBRATION: ordinary connectors are not for damp or vibrating places unless gel-filled (Wikipedia; Ideal). NEVER 3D-PRINT OR IMPROVISE a wire connector for real current: listed connectors are made of flame-retardant materials and tested (Purdue 4-H; 3M). Use the right size: an undersized or oversized connector, or the wrong wire combination, can leave a loose, heating joint or bare copper showing ⚑ [uncertain: general warning; Purdue only says to follow the label]. Low-voltage battery projects can still overheat a poor joint at high current. *(⚑ parts need confirming)*
- **common_failures**: (1) A wire pulling out of the bundle: 'one wire falls out or gets pulled out with a light tug' (Hackaday commenter); use the connector size and wire combination given on the pack (Purdue 4-H), and check each wire is gripped ⚑ [uncertain: the cause (mixed or wrong-size wires) is not stated on an opened page]. (2) Loose, overheating joints on aluminium wire (CPSC Publication 516). (3) Corrosion in damp places with ordinary connectors (Wikipedia; Ideal 'dry locations only'). (4) Loosening from vibration in vehicles and trailers (Wikipedia). (5) Bare copper showing below the cap: 3M adds a flexible skirt 'to help prevent copper exposure' (3M brochure). (6) Overtwisted wires breaking, or thick solid wire (above AWG 10) too stiff to grip (Wikipedia) ⚑ [uncertain: breakage from overtwisting not on an opened page]. (7) Old porcelain connectors cracking and exposing wires (Wikipedia). (8) Water getting into a direct-bury splice when voids or water paths are left in the grease (3M DBR data sheet tip). *(⚑ parts need confirming)*
- **related**: 
  - Spring-clamp wire connector (lever connector, push-in wire connector): the tool-free modern alternative; easier to get right and allowed in more countries; many makers have switched to it (Hackaday commenters)
  - Crimped butt splice (crimp splice connector): better for vehicles and anything that vibrates, but needs a crimp tool and is permanent
  - Soldered wire joint (soldered splice): the 'solder and tape' method the wire nut replaced; the rat-tail splice is the twist a wire nut often caps (Wikipedia)
  - Solder sleeve (solder-seal splice): a sealed, permanent splice with heat
  - Screw terminal (terminal block, barrier strip, connector strip): the usual way to join wires in many countries that don't use twist-on connectors
  - Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap): taps or joins small wires without stripping
  - Heat-shrink tubing (heat-shrink sleeve, adhesive-lined heat-shrink): insulates and seals soldered or crimped splices
  - Wire-end ferrule (bootlace ferrule, end sleeve): tidies stranded wire ends for screw terminals instead

### Pictures, videos and models

- **links**: 
  - [Array of twist-on wire connectors aka wire nuts in different sizes.jpg (Wikimedia Commons, by Junkyardsparkle)](https://commons.wikimedia.org/wiki/File:Array_of_twist-on_wire_connectors_aka_wire_nuts_in_different_sizes.jpg): Five colour-coded sizes seen end-on, showing the metal coil inserts *(licence: CC0 (public domain dedication))*
  - [Gebruik lasdop.jpg (Wikimedia Commons, by Alex P. Kok)](https://commons.wikimedia.org/wiki/File:Gebruik_lasdop.jpg): Stripped wires twisted and trimmed, a connector screwed on, then cut open to show the coil around the wires *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Junction box.agr.jpg (Wikimedia Commons, by ArnoldReinhold)](https://commons.wikimedia.org/wiki/File:Junction_box.agr.jpg): Twist-on connectors joining wires inside a typical US junction box *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Lasdoppen van keramiek.jpg (Wikimedia Commons, by Electroprof)](https://commons.wikimedia.org/wiki/File:Lasdoppen_van_keramiek.jpg): Early 20th-century ceramic twist-on connectors *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [3M Direct Bury Splice Kit DBR/Y-6 Data Sheet (3M, 2019, PDF)](https://multimedia.3m.com/mws/media/653865O/3m-direct-bury-splice-kit-dbr-y-6-data-sheet-78-8129-9255-6-c.pdf): Drawings of a twist-on connector sealed in a grease-filled tube for wet and buried joints, with its ratings and wire combinations *(licence: link only)*
- **make_it_yourself**: 
  - [Wire Nut Twister (Printables 887096; URL from Printables API, page not opened)](https://www.printables.com/model/887096-wire-nut-twister): Printed handle for turning several sizes of wire nut tighter than fingers can; a tool only, not a connector *(licence: CC BY (Creative Commons Attribution))*
  - [Wire Nut Twister With 1/4" Drive (Printables 896471; URL from Printables API, page not opened)](https://www.printables.com/model/896471-wire-nut-twister-with-14-drive): Printed wire-nut driver that fits a 1/4 in square-drive socket adapter on a drill; a tool only *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A cut-away of a wire nut on three twisted wire ends, showing the tapered coil spring threading onto them and squeezing them together, the plastic shell and skirt covering the bare copper, and beside it a gel-filled version with the sealant filling all the gaps, with a crossed-out vibrating car and a crossed-out aluminium wire as 'don't use here' icons.
- **sources**: 
  - https://en.wikipedia.org/wiki/Twist-on_wire_connector
  - https://www.extension.purdue.edu/county/newton/4-h-youth-development/_docs/all-levels-wire-connectors-1.pdf
  - https://assets.testequity.com/te1/Documents/pdf/Ideal/Ideal_30-451J_Manual_0825.pdf
  - https://multimedia.3m.com/mws/media/68624O/3m-wire-connectors-family-brochure-low-res-pdf.pdf
  - https://multimedia.3m.com/mws/media/653865O/3m-direct-bury-splice-kit-dbr-y-6-data-sheet-78-8129-9255-6-c.pdf
  - https://www.cpsc.gov/s3fs-public/516.pdf
  - https://www.powercheck.ca/pdfs/Ontario_ESA_Flash_Aluminum_wiring.pdf
  - https://webstore.iec.ch/publication/4117
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://commons.wikimedia.org/wiki/File:Array_of_twist-on_wire_connectors_aka_wire_nuts_in_different_sizes.jpg
  - https://commons.wikimedia.org/wiki/File:Gebruik_lasdop.jpg
  - https://commons.wikimedia.org/wiki/File:Junction_box.agr.jpg
  - https://commons.wikimedia.org/wiki/File:Lasdoppen_van_keramiek.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 30 A
- **tools**: none, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, everyday_examples, load, off_the_shelf_parts, removability, reuse_cycles, safety_notes

## 359 Conductive thread (sewn circuit, e-textile stitching)

*electrical connections.* Thread spun from stainless steel or silver-coated fibres, sewn through the holes of sew-on boards and battery holders so the stitches themselves are the wires in clothing, bags and soft toys

*Also covers:* Also covers resistance per length, sealing knots, sew-on snaps as plug-and-unplug connectors, conductive fabric and washing. Safety: loose tails and crossing stitches short out, most often next to the battery holder.

### What it is

- **plain_name**: Sewing thread with metal in it, so that when you sew small lights, a battery holder and a little circuit board onto fabric, the stitches themselves are the wires
- **term**: Conductive thread (sewn circuit, e-textile stitching)
- **aliases**: 
  - conductive thread / conductive sewing thread / conductive yarn (Adafruit 'Conductive Thread'; SparkFun 'LilyPad Basics: E-Sewing')
  - stainless steel thread / stainless steel conductive thread (spun from stainless fibres) (Adafruit; SparkFun)
  - silver-plated conductive thread (e.g. Madeira HC, brand; Electro-Fashion, Kitronik brand) (Rapid Electronics; Wiltronics product pages)
  - e-textiles / electronic textiles / sewable electronics / wearable electronics (Wikipedia 'E-textiles'; SparkFun)
  - sewn circuit / soft circuit / stitched circuit ⚑ [uncertain: 'soft circuit' and 'stitched circuit' not seen on an opened page]
  - sew tabs (the big plated holes on sewable boards) (SparkFun)
  - LilyPad (SparkFun, brand: sewable boards, LEDs, switches and coin-cell holders designed by Leah Buechley); FLORA and Gemma (Adafruit, brands: sewable microcontroller boards) (SparkFun; Adafruit)
  - sewable snaps (small metal press studs used as plug-and-unplug connectors) (Adafruit 'Flora Snaps')
  - conductive fabric / conductive textile; lamé (conductive fencing jacket fabric) (Wikipedia 'Conductive textile') *(⚑ parts need confirming)*
- **family**: electrical connections
- **other_families**: knots, lashings & sewn joints, cord, strap, webbing & textile hardware
- **one_liner**: Conductive thread is sewing thread made from stainless-steel fibres or silver-plated filaments that is stitched through the holes (sew tabs) of sewable boards, LEDs and battery holders, so the tight loops make the electrical contacts and the lines of stitching act as bare wires across the fabric.
- **complexity**: Single piece (the thread) used with a few bought parts: conductive thread, needle, sewable boards and LEDs with sew tabs, a sew-on coin-cell battery holder, knots sealed with clear nail polish or Fray Check, and optionally sewable snaps as connectors and an insulating cover of fabric paint, fabric glue or a fabric layer (Adafruit; SparkFun).
- **how_it_works**: The thread contains metal, either spun stainless-steel fibres or filaments coated with silver, so it conducts like a very thin, flexible, uninsulated wire (Adafruit; SparkFun; Wikipedia 'Conductive textile'). At each part, three or four tight loops through the plated sew-tab hole press the thread against the metal pad, giving both the electrical and the mechanical connection; a running stitch then carries the 'wire' to the next part (SparkFun 'LilyPad Basics: E-Sewing'). Knots at the back are sealed with clear nail polish or Fray Check so the springy metal thread can't untie (Adafruit). The thread has noticeable resistance per length, so a long run behaves like a resistor in series with the circuit (Adafruit; Wiltronics).

### Finder attributes

- **job**: join and hold: carries current between sewn-on parts and holds them on the fabric
- **motion**: flex: the stitched lines bend and fold with the fabric
- **degrees_of_freedom**: 0 at each sew tab once the loops are pulled snug; the stitched line between parts is flexible and follows the fabric, but does not give a controlled movement
- **special_behaviour**: none for plain stitching, quick-release: when sewable snaps are used as connectors, a board can be snapped off before machine washing or moved to another project (Adafruit 'Flora Snaps')
- **holding_principle**: shape (the parts interlock; form-fit): loops pass through the sew-tab holes and are tied off; friction or clamping (force-fit): snug loops press the thread onto the pads; material bond: knots are sealed with nail polish or Fray Check, and parts are often tacked to the fabric with a dot of hot glue or fabric glue before sewing (Adafruit; SparkFun)
- **input_output**: not applicable
- **power**: passive (no power needed): the thread only carries the battery's current
- **removability**: semi-permanent: stitches can be cut and unpicked, but the thread is usually spoiled and the part re-sewn; sewable snaps give a tool-free quick release (Adafruit 'Flora Snaps')
- **reuse_cycles**: once for stitched joints; many times for sewable snaps
- **tools_needed**: hand-sewing needle with a medium eye, scissors, embroidery hoop, multimeter with continuity beeper, clear nail polish or Fray Check, water-soluble marker or tailor's chalk, hot glue or fabric glue to tack parts down (Adafruit; SparkFun); optional sewing or embroidery machine (2-ply thread in the bobbin, Adafruit); soldering iron only to fit snaps to a board (Adafruit 'Flora Snaps')
- **seal**: none: the thread is uninsulated and 'behaves like bare wire'; covering it with fabric paint, stretch fabric glue, embroidery, a fabric layer or fusible interfacing insulates it against shorts and wear but does not make it waterproof (SparkFun 'LilyPad Basics: E-Sewing'; SparkFun 'Insulation Techniques for e-Textiles')
- **load**: Electrical: signal only (small loads: Adafruit's 2-ply stainless thread is for parts using 'under ~50mA' and its 3-ply for 'under ~100mA'; typical loads are LEDs, sensors and small sewable boards) (Adafruit 'Conductive Thread'); extra-low voltage only: coin-cell projects 'shouldn't burn or shock you... but higher voltage projects or power sources could be dangerous' (SparkFun). Mechanical: light; the thread itself is strong in a straight pull (one silver-plated thread breaks at about 4.2 kg, Wiltronics), but the loops at sew tabs loosen if the project moves and the thread pulls away from the tab (SparkFun).
- **adjustable**: no; a loose connection is fixed by pulling the loops tighter or sewing over them again (SparkFun)
- **play_and_precision**: not applicable
- **access_needed**: both sides: the needle passes through the front and back of the fabric
- **materials**: Thread: 316L stainless-steel fibres (Adafruit), or filaments plated with silver (Madeira HC, Rapid; Kitronik Electro-Fashion, about 96 filaments each 'coated with a micron-thick layer of natural silver', Wiltronics); SparkFun's silver-plated thread has a nylon core, which its stainless thread lacks; the stainless thread is harder to solder but 'won't burn up when you touch it with a soldering iron' (SparkFun product page), and does not oxidise (Adafruit); silver conducts well but tarnishes and wears off (Adafruit; Wiltronics). Conductive fabrics are coated or woven with carbon, nickel, copper, silver and other metals (Wikipedia 'Conductive textile'). Sewable snaps: tin-plated brass (Adafruit). Suits woven fabric, felt and garments held flat in a hoop; stretchy knits can open the stitches ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: a first LED-and-coin-cell circuit is a beginner kit project (SparkFun LilyPad kit), but tight sew-tab loops, sealed knots and keeping positive and negative lines apart take practice

### Making it

- **processes**: 
  - off-the-shelf part (conductive thread, sewable boards, LEDs, coin-cell holders, sewable snaps, conductive fabric)
  - sewing by hand, or by sewing or embroidery machine (Adafruit; SparkFun)
  - 3D print (FDM): sewable covers, buttons and coin-cell holders with sew holes
- **print_in_place**: no: thread joints are sewn; printed parts are separate sew-on covers and holders
- **making_tips_3d_printing**: Printed sew-on parts need holes big enough for a medium needle and several passes of thread, like the large plated sew tabs on bought boards (Adafruit; SparkFun), and rounded edges so they don't snag fabric or cut thread (SparkFun on the LilyPad shape); see the Sew-on part entry for hole design. Example settings from published models: a sewable button cover printed in PETG at 100% infill (Printables 372865); a sewable cover for a LilyPad slide switch at 0.1 mm layers and 100% infill (Printables 372868); a sewable coin-cell holder that must be printed in a flexible filament or the cell can't be pushed in, best printed standing on edge at 45° to the bed, 100% infill, no supports, with a flanged version that is sewn through its own material (Printables 199828, 199827). Keep conductive stitching from rubbing on sharp printed edges or layer lines, which can fray it ⚑ [uncertain]. Tack printed parts and boards to the fabric with a small dot of hot glue first, without blocking the sew holes (SparkFun). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'conductive thread' ('stainless steel conductive thread' 2-ply or 3-ply, 'smooth conductive thread', 'silver-plated conductive thread', e.g. Madeira HC, brand), 'conductive yarn', 'LilyPad' (SparkFun, brand) parts such as 'LilyPad coin cell battery holder' (switched), 'LilyPad LED', buttons and switches, 'sewable LED' or 'LED sequin', Adafruit 'FLORA', 'Gemma' or 'Circuit Playground' (brands) sewable boards, 'sewable snaps' (5 mm tin-plated brass), 'conductive fabric', 'conductive fabric tape', 'Fray Check' (brand) or clear nail polish, 'embroidery hoop', 'water-soluble fabric marker', 'stretch fabric glue', 'fusible interfacing', 'dimensional fabric paint'.
- **rules_of_thumb**: 
  - Stainless thread resistance and current: Adafruit 2-ply 16 ohms per foot (about 52 ohms per metre) for parts under about 50 mA; 3-ply 10 ohms per foot (about 33 ohms per metre) for parts under about 100 mA (Adafruit, https://learn.adafruit.com/conductive-thread?view=all). SparkFun's 60 g stainless spool is 28 ohms per foot (about 92 ohms per metre) (https://www.sparkfun.com/conductive-thread-60g-smooth-stainless-steel.html). Worked example (calculated): 1 m of 2-ply thread carrying 20 mA to an LED drops about 1 V, a large share of a 3 V coin cell, so keep runs short.
  - Silver-plated thread: 40-160 ohms per metre depending on thread tension, usually mid-range once sewn, rising to over 280 ohms on older, washed samples (Kitronik Electro-Fashion thread, Wiltronics, https://www.wiltronics.com.au/product/51818/electro-fashion-conductive-thread/); Madeira HC12 is under 100 ohms per metre (Rapid, https://rapidonline.com/madeira-hc12-conductive-thread-150m-spool-87-6098). Figures from different makers are not measured the same way, so test your own thread with a meter.
  - Make three to four loops around each sew tab, pulling each snug, then use a running stitch of about 1/4 in (6 mm) to travel to the next part (SparkFun, https://learn.sparkfun.com/tutorials/lilypad-basics-e-sewing/all).
  - Work with a length of about one arm (Adafruit) or about 2 ft (60 cm) (SparkFun); longer thread tangles and twists (https://learn.adafruit.com/conductive-thread?view=all).
  - Knots: tie the two ends in a tight reef or square knot (ABOK #1204) at the back of the fabric (Adafruit), or start with a simple overhand knot (ABOK #46) or a quilter's knot (SparkFun); seal each knot with clear nail polish or Fray Check and trim the tail close once dry (Adafruit). ABOK numbers from Wikipedia, https://en.wikipedia.org/wiki/Reef_knot and https://en.wikipedia.org/wiki/Overhand_knot; quilter's knot: no ABOK number found.
  - Keep power and ground lines far apart, never let stitches cross or touch another line, and check for shorts with a continuity tester after finishing each line (Adafruit, https://learn.adafruit.com/conductive-thread?view=all; SparkFun).
  - Stainless thread is slightly 'hairy': wax it for hand sewing, and avoid sewing close parallel lines by machine, because loose fibres 'could potentially short across small distances' (SparkFun, https://www.sparkfun.com/conductive-thread-60g-smooth-stainless-steel.html).
  - For machine sewing, put 2-ply conductive thread in the bobbin with plain thread in the needle and adjust the tension on scrap first (Adafruit, https://learn.adafruit.com/conductive-thread?view=all).

### When to use it

- **everyday_examples**: 
  - light-up costumes, badges, masks and soft toys sewn with LilyPad LEDs and a coin-cell holder (SparkFun LilyPad projects; Wikimedia Commons 'Wearable electronics dinosaur.jpg')
  - touchscreen-friendly gloves with conductive yarn sewn into the fingertips (Adafruit)
  - the conductive lamé jacket a fencer wears so that hits are detected (Wikipedia 'Conductive textile')
  - embroidered touch or sensor areas on fabric (Wikimedia Commons 'Gestickte Textile Sensorflächen.jpg')
- **when_to_use**: For soft, flexible projects where ordinary wires would be stiff, would snag or would look out of place: clothing, bags, costumes, soft toys, quilts and banners, with low-current parts such as LEDs, small sensors and sewable microcontroller boards powered from a coin cell or a small battery pack (Adafruit; SparkFun). It is also a good way to teach circuits through craft (SparkFun LilyPad). Use sewable snaps where the electronics must come off for washing or reuse (Adafruit 'Flora Snaps'), and conductive fabric for larger touch pads and switches (Wikipedia 'E-textiles'; SparkFun).
- **when_not_to_use**: For more than about 100 mA, such as motors, heaters (unless heating is the aim), long LED strips or many bright LEDs: the thread's resistance wastes voltage and warms the thread (Adafruit; Wikipedia notes higher-resistance conductive textiles are used as heaters); use thin, flexible stranded wire soldered to the parts, or Conductive tape (copper foil tape, conductive fabric tape) on stiffer backings. For long runs, where resistance adds up (Adafruit; Wiltronics). For higher voltages or large battery packs (SparkFun warns these 'could be dangerous'). For closely spaced connections or fine-pitch parts, where stray fibres can short (SparkFun); use a board with a plug, a Wire-to-board plug connector or a Flat flexible cable. For things washed often with the electronics in place: remove boards using snaps, and prefer stainless over silver-plated thread (Adafruit; Wiltronics).
- **environment_limits**: Washing: stainless thread 'will not oxidize like silver does... and its safe to wash' (Adafruit); silver plating deteriorates, 'especially if washed', with resistances over 280 ohms measured on older samples (Wiltronics). Remove the battery, hand wash with mild detergent and air dry; 'a dryer can damage the LilyPad pieces or stitching' (SparkFun). Movement and flexing: if the project moves, the thread may pull away from the sew tab and disconnect (SparkFun). Heat: SparkFun contrasts its stainless thread, which 'won't burn up when you touch it with a soldering iron', with its silver-plated, nylon-core thread, so keep irons away from plated thread (SparkFun product page). Silver tarnishes in air over months, raising resistance (Adafruit).
- **safety_notes**: SHORT CIRCUITS: the thread is bare and uninsulated, so a loose tail or two crossing stitches between positive and negative short the battery; 'One of the most common short circuits in e-sewing happens when a loose thread tail near the negative tab on the battery holder touches the battery' (SparkFun). A short 'may even cause your battery to heat up' (Adafruit); coin-cell projects 'shouldn't burn or shock you... but higher voltage projects or power sources could be dangerous' (SparkFun). Seal and trim knot tails, keep power and ground far apart, check with a continuity tester, cover finished lines with an insulating layer, remove the battery while working, and 'Never work on a metal surface' (SparkFun). Never connect conductive-thread circuits to mains or chargers, and treat rechargeable lithium packs with extra care because a short through the thread can overheat the cell ⚑ [uncertain: lithium advice is general, not from an opened e-textile page]. COIN CELLS: coin cells are dangerous to small children; swallowed, they 'can cause severe internal burns and significant injury or death', especially cells 20 mm or more across (Wikipedia 'Button cell'); use holders a child can't open in anything for children, and keep spares away from them. NOT MEDICAL: conductive fabrics are used for medical electrodes such as EEG (Wikipedia 'Conductive textile'), but a home-sewn patch is not a medical electrode; never use a sewn circuit to stimulate or monitor the body. NOT LOAD-BEARING: stitched circuits hold small parts only; never rely on home-made stitching or knots to hold a person. *(⚑ parts need confirming)*
- **common_failures**: (1) Short circuits from loose tails, frayed fibres or stitches crossing another line, often next to the battery holder (SparkFun); trim tails, seal knots, keep lines apart and test after each line (Adafruit). (2) Intermittent connection where the loops around a sew tab are loose or the fabric flexes; pull loops tight with tweezers or a needle, or sew over them again (SparkFun). (3) Knots working undone in springy metal thread; seal them with nail polish or Fray Check (Adafruit). (4) LEDs dim at the far end of a long run because of thread resistance (Adafruit; Wiltronics) ⚑ [uncertain: dimming not described on an opened page, inferred from the resistance figures]. (5) Silver-plated thread losing conductivity from tarnish and washing (Adafruit; Wiltronics). (6) Thread breaking mid-line; stitch onto the existing thread to continue the connection (SparkFun). (7) Polarised parts sewn the wrong way round, a dead battery, or a switch left off (SparkFun troubleshooting). (8) Shorts after the project is folded or worn, because the fabric lets lines touch; insulate finished lines (SparkFun 'Insulation Techniques for e-Textiles'). *(⚑ parts need confirming)*
- **related**: 
  - Sew-on part (sewing holes, loops and slots on a rigid part): how to design printed or bought parts with sew holes, which conductive thread passes through
  - Sewn seams and hand stitches (lockstitch, saddle stitch, flat-felled seam): the stitches themselves; conductive thread mostly uses a running stitch
  - Basic knots (overhand knot, half hitch, reef knot): the knots used to start and finish conductive thread
  - Press stud (snap fastener, popper): metal snaps double as plug-and-unplug connectors in e-textiles (Adafruit 'Flora Snaps')
  - Conductive tape (copper foil tape, conductive fabric tape): flat sticky conductors for paper, card or fabric, lower resistance than thread
  - Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy): painted or printed traces instead of stitched ones
  - Battery holder and battery contacts (spring battery contact, coin-cell holder): sew-on coin-cell holders power most thread circuits
  - Soldered wire joint (soldered splice): thin flexible wire soldered to the parts is the alternative for higher currents; snaps are soldered to boards
  - Printing onto fabric (fabric embedded in a 3D print): another way to fix rigid parts to fabric
  - Twisted-and-coiled polymer muscle (fishing-line artificial muscle): uses conductive thread as a heater rather than a wire

### Pictures, videos and models

- **links**: 
  - [Conductive thread.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:Conductive_thread.jpg): A bobbin of conductive thread *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Lilypad Arduino with fading LEDs.jpg (Wikimedia Commons, by Osamu Iwasaki)](https://commons.wikimedia.org/wiki/File:Lilypad_Arduino_with_fading_LEDs.jpg): A LilyPad board sewn into fabric with 20 LEDs, the stitched conductive lines visible *(licence: CC BY-SA 2.0 (reuse with credit))*
  - [Wearable electronics dinosaur.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:Wearable_electronics_dinosaur.jpg): A soft e-textile piece made with conductive thread *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Gestickte Textile Sensorflächen.jpg (Wikimedia Commons, by Forster Rohner AG)](https://commons.wikimedia.org/wiki/File:Gestickte_Textile_Sensorfl%C3%A4chen.jpg): Embroidered conductive-thread sensor areas on fabric *(licence: CC BY-SA 3.0 DE (reuse with credit))*
  - [LilyPad Basics: E-Sewing (SparkFun Learn)](https://learn.sparkfun.com/tutorials/lilypad-basics-e-sewing/all): Photos of loops around sew tabs, running and hidden stitches, knots, and the typical short circuit at the battery holder *(licence: link only)*
- **make_it_yourself**: 
  - [Sewable Flexible Coin Cell Holder (Printables 199828; URL from Printables API, page not opened)](https://www.printables.com/model/199828-sewable-flexible-coin-cell-holder): Printed coin-cell holder for sewable projects, printed in flexible filament on edge at 45°; a flanged remix (Printables 199827) is sewn through its own material *(licence: CC BY (Creative Commons Attribution))*
  - [Sewable Cover for LilyPad Sliding Swich (Printables 372868; URL from Printables API, page not opened)](https://www.printables.com/model/372868-sewable-cover-for-lilypad-sliding-swich): Printed sew-on cover for a LilyPad slide switch, part of a 'Learning Platform for E-textiles' project *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Sewable Button for E-Textile projects (Printables 372865; URL from Printables API, page not opened)](https://www.printables.com/model/372865-sewable-button-for-e-textile-projects): Printed sew-on cover for a 12 mm push button, printed in PETG at 100% infill *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Flora Snaps (Adafruit Learning System)](https://learn.adafruit.com/flora-snaps?view=all): Step-by-step guide to soldering snap studs to a sewable board and sewing the sockets with conductive thread, so the board unsnaps for washing *(licence: link only)*
  - [Insulation Techniques for e-Textiles (SparkFun Learn)](https://learn.sparkfun.com/tutorials/insulation-techniques-for-e-textiles/all): Five ways to cover finished conductive-thread lines: stretch fabric glue, fabric paint, a fabric layer, embroidery and fusible interfacing *(licence: link only)*
- **diagram_idea**: A flat view of a felt patch with a coin-cell holder, two LEDs and a slide switch joined by two separate lines of running stitch (red for positive, black for negative), with a close-up of three tight loops around a sew tab, a sealed reef knot on the back, and a 'short' warning showing a loose tail from the negative line touching the coin cell.
- **sources**: 
  - https://learn.adafruit.com/conductive-thread?view=all
  - https://learn.adafruit.com/flora-snaps?view=all
  - https://www.adafruit.com/product/1126
  - https://learn.sparkfun.com/tutorials/lilypad-basics-e-sewing/all
  - https://learn.sparkfun.com/tutorials/insulation-techniques-for-e-textiles/all
  - https://www.sparkfun.com/conductive-thread-60g-smooth-stainless-steel.html
  - https://www.wiltronics.com.au/product/51818/electro-fashion-conductive-thread/
  - https://rapidonline.com/madeira-hc12-conductive-thread-150m-spool-87-6098
  - https://www.rapidonline.com/Catalogue/Product/87-6099
  - https://en.wikipedia.org/wiki/Conductive_thread
  - https://en.wikipedia.org/wiki/Conductive_textile
  - https://en.wikipedia.org/wiki/E-textiles
  - https://en.wikipedia.org/wiki/Button_cell
  - https://en.wikipedia.org/wiki/Reef_knot
  - https://en.wikipedia.org/wiki/Overhand_knot
  - https://commons.wikimedia.org/wiki/File:Conductive_thread.jpg
  - https://commons.wikimedia.org/wiki/File:Lilypad_Arduino_with_fading_LEDs.jpg
  - https://commons.wikimedia.org/wiki/File:Wearable_electronics_dinosaur.jpg
  - https://commons.wikimedia.org/wiki/File:Gestickte_Textile_Sensorfl%C3%A4chen.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: signal only
- **tools**: soldering iron, sewing or leather tools, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, common_failures, making_tips_3d_printing, materials, safety_notes

## 360 Conductive tape (copper foil tape, conductive fabric tape)

*electrical connections.* Thin copper or metal-coated fabric tape with a sticky backing, laid on paper, card or a print as flat wires that parts are taped, soldered or glued onto

*Also covers:* Also covers whether the glue layer conducts (many cheap copper tapes don't), folding corners instead of cutting, and shielding.

### What it is

- **plain_name**: Sticky metal ribbon (thin copper foil, or fabric coated with metal) that you stick onto paper, card, fabric or a 3D print as a flat wire, then tape, solder, glue or sew small parts such as LEDs onto it
- **term**: Conductive tape (copper foil tape, conductive fabric tape)
- **aliases**: 
  - copper tape / copper foil tape (Wikipedia 'Copper tape'; Chibitronics 'Getting Started with Copper Tape')
  - copper foil tape with conductive adhesive (conducts through the glue, e.g. 3M 1181, brand product number) versus copper foil tape with non-conductive adhesive (only the top face conducts, e.g. 3M 1194, brand product number) (3M data sheets; Chibitronics)
  - EMI shielding tape / copper shielding tape / RF shielding tape (3M 1181 and 1194 data sheets; SparkFun product page; guitar-cavity shielding tape sold by guitar suppliers)
  - slug tape / snail barrier tape (garden copper tape, which usually has non-conductive glue) (Wikipedia 'Copper tape'; Chibitronics)
  - copper foil for stained glass (Tiffany-lamp foil, soldered along its length) (Wikipedia 'Copper tape'; SparkFun product page)
  - conductive fabric tape / conductive nylon fabric tape / Ni/Cu/Co fabric tape (nickel, copper and cobalt plated fabric) (SparkFun 'Great Big Guide to Paper Circuits'; Adafruit product 3961)
  - paper circuit / paper electronics / circuit sketchbook traces (SparkFun; Chibitronics, brand)
  - z-axis tape (a double-sided tape that conducts only through its thickness, used to stick parts onto traces) (SparkFun 'Great Big Guide to Paper Circuits')
  - circuit stickers (LED stickers with conductive glue on their pads; Chibitronics, brand) (SparkFun; Chibitronics)
  - metal tape / aluminium foil tape (a related tape; Wikipedia 'Copper tape' lists it under 'See also')
- **family**: electrical connections
- **other_families**: adhesives & bonding
- **one_liner**: Conductive tape is a thin copper foil or metal-plated fabric with a peel-off sticky back, laid down as flat 'wires' on paper, card, fabric or a 3D print so that LEDs, batteries and other small parts can be taped, soldered, glued or sewn onto it; the same copper tape is used to line boxes and guitar cavities as an electrical shield.
- **complexity**: Single piece (the tape: copper foil or metal-plated fabric, a pressure-sensitive acrylic glue layer and a peel-off paper liner, 3M; Adafruit) used with a few small parts: LEDs or LED stickers, a coin cell, clear sticky tape to hold component legs down, solder for copper tape, conductive fabric patches, conductive glue or conductive thread for fabric tape, and a binder clip or folded tape flap as a switch and battery holder (SparkFun 'Paper Circuit Pin'; SparkFun 'Great Big Guide to Paper Circuits'; Chibitronics).
- **how_it_works**: The copper foil (or the metal plating on fabric tape) carries current along its length like a flat, uninsulated wire, and the sticky back holds it to the surface (Adafruit: 'the tape itself can carry current just like a wire'). Whether current also passes through the sticky layer depends on the glue: in tape with conductive adhesive, 'conductive particles in the adhesive provide the electrical path between the application substrate and the foil backing' (3M 1181 data sheet), so a piece stuck on top of another connects; tape with non-conductive adhesive 'is only conductive on the top', so overlaps must be soldered, or the end folded back so bare copper faces both ways (Chibitronics). Parts are connected by pressing their legs or pads onto the foil under clear tape, by soldering (copper only), with conductive glue or paint, or by sewing through fabric tape with conductive thread (SparkFun). Laid as a continuous sheet connected to the circuit's ground, the same foil acts as an electrical shield that blocks interference (3M data sheets; Wikipedia 'Electromagnetic shielding').

### Finder attributes

- **job**: 
  - join and hold: flat sticky 'wires' carry current between parts on paper, card, fabric or a print and hold the parts flat (the finder reaches this entry through the 'electrical connections' family)
  - glue or bond: the tape sticks itself down, and tape with conductive glue (or fabric tape) joins to another piece just by being stuck on top (Chibitronics)
- **motion**: none: the tape is stuck down flat. Conductive fabric tape 'does not break when folded repeatedly', so it can cross a card crease or book hinge; copper tape 'will crack if folded repeatedly' (Chibitronics 'Guide to Conductive Tapes')
- **degrees_of_freedom**: 0: once pressed down, the tape and the parts taped or soldered to it don't move; a fold line in fabric tape can act as a hinge, but that is the card or paper moving, not the joint
- **special_behaviour**: 
  - none: it is a passive flat conductor. Its useful trick is that tape with conductive glue (and fabric tape) makes a connection simply by being stuck on top of another piece, so branches and repairs can be added anywhere (Chibitronics)
- **holding_principle**: material bond (glue): a pressure-sensitive acrylic adhesive holds the tape down (3M); parts are held by clear tape pressed over their legs (friction or clamping), by solder (material bond), by conductive glue, or by conductive-thread stitches through fabric tape (shape) (SparkFun 'Great Big Guide to Paper Circuits')
- **input_output**: not applicable
- **power**: passive (no power needed): the tape only carries the battery's current
- **removability**: semi-permanent: the tape can be peeled off but usually wrinkles or tears the paper and is not reused; parts held only by clear tape can be lifted and moved, and fabric-tape patches let a circuit sticker be reused (Chibitronics); soldered parts need desoldering, which Hackaday notes is harder than soldering on tape laid over a 3D print (Hackaday 2026)
- **reuse_cycles**: once for the tape itself; a few times for parts held on with clear tape or conductive fabric patches (Chibitronics: a patch 'makes it possible to reuse a Circuit Sticker many times')
- **tools_needed**: scissors or craft knife (fabric tape 'requires scissors to cut'; copper tape can be torn by hand, Chibitronics), a fingernail, pen or pencil eraser to crease corners and burnish the foil flat (SparkFun; Chibitronics), clear sticky tape, tweezers for small surface-mount parts, a soldering iron and solder for copper tape, a needle and conductive thread or conductive glue for fabric tape (SparkFun), and a multimeter with continuity beeper to find breaks and shorts
- **seal**: none: the top of the foil is bare metal and the tape gives no protection from water ⚑ [uncertain: no opened page discusses waterproofing; covering lines with clear tape or paper also helps stop accidental shorts] *(⚑ parts need confirming)*
- **load**: Electrical: up to about 3 A ⚑ [uncertain: no maker publishes a current rating], extra-low voltage only. The solid copper foil 'can carry current just like a wire' (Adafruit product 1128); 1-ounce copper foil is 0.04 mm (1.4 mil) thick (3M 1181 and 1194 data sheets), so a 6 mm tape has a resistance of roughly 0.08 ohm per metre (calculated from copper's resistivity of 1.68 x 10^-8 ohm m, Wikipedia 'Electrical resistivity and conductivity'). The joints, not the foil, set the real limit: conductive adhesive 'can't carry significant current' (Adafruit), taped-over component legs are 'not as reliable as other methods' (SparkFun), and conductive fabric tape has 'around 3-5 ohms of resistance per foot' (Chibitronics), so fabric tape and glue-only or tape-only joints are for signals and small LEDs; soldered copper tape is the only version for more current. Typical use is LEDs on a 3 V coin cell (SparkFun). Never for mains; extra-low voltage means not more than 50 V AC or 120 V ripple-free DC (UK Approved Document P). Mechanical: light. Copper tape breaks at about 44 N per 10 mm of width and sticks to steel with about 3.8-4.4 N per 10 mm of width in a peel test (3M 1181 and 1194 data sheets); it tears at sharp turns and peels off paper easily (Chibitronics). *(⚑ parts need confirming)*
- **adjustable**: partly: the layout is fixed once stuck down, but new branches can be added anywhere by sticking conductive-adhesive tape or fabric tape on top of an existing line, and weak spots can be patched the same way (Chibitronics)
- **play_and_precision**: not applicable
- **access_needed**: one side only (blind): the tape and the parts all go on the same face; a battery flap or a tape line that wraps over an edge to the back needs both sides (SparkFun 'Paper Circuit Pin')
- **materials**: Copper tape: 'deadsoft 1-ounce copper foil' 0.04 mm thick with a conductive or non-conductive acrylic pressure-sensitive adhesive, 0.066 mm total (3M 1181, 1194); hobby rolls are about 3 mil (0.07 mm) thick and 5-6 mm wide (SparkFun; Adafruit). The copper is solderable and 'resists oxidation and discoloration' (3M). Conductive fabric tape: nylon fabric plated with nickel, copper and cobalt, with conductive glue (SparkFun; Adafruit product 3961); it 'cannot be soldered' (Chibitronics) but can be sewn (Adafruit). Sticks well to paper and cardstock (SparkFun projects), smooth 3D prints (Hackaday 2026), wood and plastic enclosure walls; wrinkled foil makes poor contact and should be burnished flat (Chibitronics). PLA prints soften above about 60 °C, so soldering onto tape laid over PLA must be quick (Prusa 'PLA'; Hackaday 2026). Garden and hardware-store copper tapes usually have non-conductive adhesive (SparkFun; Chibitronics); aluminium tape can't be soldered with ordinary electronics solder ⚑ [uncertain: not on an opened page]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: peel and stick, 'one of the easiest ways to get started crafting a paper circuit' (SparkFun); the fiddly parts are neat corners, reliable joints between pieces, and soldering on paper without burning it

### Making it

- **processes**: 
  - off-the-shelf part (copper foil tape, conductive fabric tape, fabric tape patches, circuit stickers)
  - hand-applied papercraft (paper circuits, cards, books; SparkFun; Chibitronics)
  - 3D print (FDM): a printed board with raised traces that copper tape is laid over and trimmed to (Hackaday 2026; Printables 1785446)
  - woodwork, 3D print or sheet enclosures lined with copper tape as a shield (3M; guitar-cavity shielding)
- **print_in_place**: no: the tape is applied after printing; at most a print can be paused to lay tape between layers ⚑ [uncertain: not tried on an opened page] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: Tape on a print: put tape on the smoothest face (the top surface or the bed side) and burnish it flat, since wrinkled foil makes poor contact (Chibitronics). Printed 'PCB' method (Hackaday 2026, from QWZ Labs): export the board design from KiCad, raise the traces 0.6 mm in CAD, print, cover with copper tape, cut along the raised edges and peel away the waste; use wide traces (about 2 mm) with plenty of clearance, holes of at least about 1 mm, and the Arachne wall generator to avoid voids. A published example recommends 0.12 mm layers and printing slowly so the holes come out at size (Printables 1785446). Heat: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa), and Hackaday notes it 'both softens and melts easily' when soldered, so solder quickly with a hot iron, or print the board in a more heat-resistant plastic ⚑ [uncertain: which plastic works best was not tested on an opened page]. Shielding a printed enclosure: line the inside with copper tape that has conductive adhesive (3M 1181), overlap the seams, and connect the foil to the circuit's ground; gaps must be much smaller than the wavelength being blocked (Wikipedia 'Electromagnetic shielding'). Design printed slots or recesses for coin cells so the tape lines can't be pressed onto both faces of the cell at once and short it ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'copper foil tape with conductive adhesive' (e.g. 3M 1181, Adafruit 1128 6 mm and 1127 25 mm, brand product numbers), 'copper foil tape' with non-conductive adhesive (e.g. 3M 1194; SparkFun PRT-10561 5 mm), 'EMI shielding tape', 'copper shielding tape' (guitar cavity), 'conductive fabric tape' or 'conductive nylon fabric tape' (Adafruit 3961 5 mm, 3960 8 mm), 'nylon fabric squares with conductive adhesive', 'Chibitronics circuit stickers' and 'conductive fabric tape patches' (brand), 'z-axis conductive tape', 'CR2032 coin cell', 'sewable coin cell holder' or coin cells with solder tabs (SparkFun), 'binder clip' for a switch, 'conductive thread', 'conductive glue'. Don't buy garden 'slug tape' for circuits unless the label says the adhesive conducts (SparkFun; Chibitronics).
- **rules_of_thumb**: 
  - Check the glue before you buy: tape with conductive adhesive conducts through the glue (3M 1181: 0.005 ohm through the adhesive over 1 square inch at 5 psi, https://www.farnell.com/datasheets/530748.pdf); tape with non-conductive adhesive (3M 1194, https://www.farnell.com/datasheets/1635465.pdf) conducts only on top. Garden copper tape's 'adhesive is probably not conductive' (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all).
  - Use one continuous piece of tape between parts and turn corners by folding, not by cutting and overlapping: stick the tape up to the corner, fold it back on itself, crease it, then swing it round the corner and press it flat (SparkFun, https://learn.sparkfun.com/tutorials/paper-circuit-pin/all); or flip it sticky-side-up away from the turn, then flip it back towards the turn and flatten (Chibitronics, https://chibitronics.com/copper-tape/). 'The thinner your tape, the sharper you can make the turns' (Chibitronics).
  - If you must join two pieces of non-conductive-adhesive tape, solder them or fold the end so 'exposed copper is on both sides of the tape', then hold it with ordinary tape (Chibitronics, https://chibitronics.com/copper-tape/). Even with conductive adhesive, overlaps 'are still far less durable over time than continuous lines' (Chibitronics); use a large overlap, press hard, or bridge with a conductive fabric patch (Chibitronics, https://chibitronics.com/troubleshooting/).
  - Leave gaps in the tape where parts sit, and bridge each gap with the part's legs (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all). 5 mm tape is a good width for craft-sized circuits (SparkFun).
  - Resistance compared (figures side by side): conductive fabric tape about 3-5 ohms per foot, about 10-16 ohms per metre (Chibitronics, https://chibitronics.com/tapes/) or 'a few ohms per foot' (Adafruit, https://www.adafruit.com/product/3961); 6 mm copper tape about 0.08 ohm per metre (calculated from 0.04 mm copper, 3M, and copper's resistivity, Wikipedia https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity). So fabric tape is roughly 100-200 times more resistive per length (calculated); keep fabric-tape runs short.
  - Copper tape is the only one of the paper-circuit trace materials you can solder to: 'you cannot solder to conductive paints, inks, or most fabrics' (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all). For fabric tape, sew over the leads with conductive thread or use conductive glue (SparkFun).
  - Printed board under copper tape: traces raised 0.6 mm, about 2 mm wide with generous clearance, holes at least about 1 mm (Hackaday, https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/).
  - Shielding: copper tape with conductive adhesive gave 60-80 dB of shielding and the non-conductive-adhesive version 50-60 dB in 3M's far-field test from 30 MHz to 1 GHz (3M 1181 and 1194 data sheets). Holes in a shield must be 'significantly smaller than the wavelength' (Wikipedia, https://en.wikipedia.org/wiki/Electromagnetic_shielding).
  - 'Never solder directly to a coin cell battery!': use a holder or a cell with solder tabs (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all).

### When to use it

- **everyday_examples**: 
  - light-up greeting cards, badges and pop-up cards with copper-tape paper circuits (SparkFun 'Paper Circuit Pin'; Wikimedia Commons 'Paper circuit ninja card.jpg')
  - copper tape round plant pots or tree trunks to keep slugs and snails off (Wikipedia 'Copper tape')
  - copper foil wrapped round the edges of glass pieces and soldered in Tiffany-style stained-glass lamps (Wikipedia 'Copper tape'; SparkFun product page)
  - copper shielding tape lining the control cavity of an electric guitar to cut hum (guitaranatomy.com shielding tape page), and the copper tape shield wrapped round some power cables (Wikimedia Commons 'CopperTapeShieldedCable.jpg')
- **when_to_use**: For flat, low-power circuits on paper, card, books, posters, fabric or the surface of a print: light-up cards, art, classroom circuits, simple capacitive touch pads and quick prototypes where wires would be bulky (SparkFun; Chibitronics; Adafruit). Choose copper tape when you want to solder parts on for a stronger joint and for the lowest resistance; choose conductive fabric tape where the circuit is folded again and again (cards that open, accordion books) or must be sewn (Chibitronics). Use copper tape with conductive adhesive to line enclosures, cable shields or guitar cavities against interference and to make ground connections (3M 1181 data sheet), and in printed-board experiments where a quick single-sided board is enough (Hackaday 2026).
- **when_not_to_use**: For anything above small currents or above extra-low voltage: use a Soldered wire joint, a proper printed circuit board, or Wire-to-board plug connectors. Not for mains, ever. For copper tape that will be folded back and forth, which cracks: use conductive fabric tape or Conductive thread (Chibitronics). For clothing that is washed and worn: use Conductive thread or wires sewn in. For many signals through a hinge or into a moving part: use a Flat flexible cable and latching connector (FFC with ZIF connector) or the methods in Cable through a hinge. Where you can't solder and the tape has non-conductive glue, don't rely on overlapped pieces: use one continuous piece, fold the ends, or add a conductive fabric patch or Conductive glue, paint and ink (Chibitronics). Outdoors or in damp places, bare copper tarnishes and paper swells ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Heat: the copper and its glue are made for electronics and pass the UL 510 flame test (3M data sheets), but the surface the tape is stuck to usually gives out first: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa 'PLA'), and paper scorches under a soldering iron ⚑ [uncertain]. Flexing: copper tape 'will crack if folded repeatedly' and 'can accidentally tear at turns'; fabric tape 'does not break when folded repeatedly' (Chibitronics). Surface condition: smooth the copper 'so that it's shiny, bright and has a solid connection' (Chibitronics 'Troubleshooting'); dusty or greasy surfaces hold the glue less well ⚑ [uncertain]. Corrosion: 3M's copper foil 'resists oxidation and discoloration', but bare copper stored for a long time does oxidise (Wikimedia Commons 'Corroded copper tape.jpg' description); polish tarnished foil before soldering ⚑ [uncertain]. Joints between pieces of conductive-adhesive tape become less reliable over time (Chibitronics). *(⚑ parts need confirming)*
- **safety_notes**: CUTS: 'Copper tape can give you a nasty paper cut, please be careful!' (SparkFun); copper tape has 'sharper edges' than fabric tape (Chibitronics), so fabric tape is the better choice for young children. SHORT CIRCUITS: if the + and - lines touch, 'you will drain power from the battery rather than turning on the light' (Chibitronics 'Troubleshooting'); keep the two battery lines apart and check with a meter. COIN CELLS: 'Button cells are dangerous for small children, as when swallowed they can cause severe internal burns and significant injury or death', and cells 20 mm or more across cause the worst injuries (Wikipedia 'Button cell'): use a holder or tape flap a child can't open, and keep spares away from children. Never solder directly to a coin cell (SparkFun). SOLDERING: the iron can scorch paper and soften PLA (Prusa; Hackaday 2026); work on a heat-proof mat and park the iron in its stand ⚑ [uncertain: general soldering practice]. MAINS: never use conductive tape for mains wiring; it is for extra-low voltage only (not more than 50 V AC or 120 V ripple-free DC, UK Approved Document P), and any mains work must follow local law (in England, Approved Document P covers electrical installation work in homes). *(⚑ parts need confirming)*
- **common_failures**: (1) Light flickers or stays off because two pieces of tape were overlapped and the glue doesn't conduct; solder the joint, fold the ends so copper faces both ways, or patch it with conductive fabric tape (Chibitronics). (2) Crack or tear at a corner or fold; fold corners instead of cutting, use fabric tape across hinges, or bridge the crack by soldering or with a strip of tape stuck upside-down over it (Chibitronics 'Troubleshooting'). (3) Poor contact under taped-on LEDs because the foil is wrinkled or the part isn't pressed down; burnish the foil flat with a pencil eraser (and clear away the crumbs) and press the pads firmly (Chibitronics). (4) LED in backwards; flip the battery to test (Chibitronics). (5) Short circuit across the battery (Chibitronics). (6) Fabric tape scorched by a soldering iron, since it 'cannot be soldered' (Chibitronics; Adafruit). (7) A shield that doesn't work because overlapped pieces of non-conductive-adhesive tape are not connected to each other or to ground; use conductive-adhesive tape or solder the seams ⚑ [uncertain: inferred from the 3M data sheets and Chibitronics, not from a shielding test]. (8) PLA board warped under the soldering iron (Hackaday 2026). *(⚑ parts need confirming)*
- **related**: 
  - Conductive thread (sewn circuit, e-textile stitching): stitched lines instead of taped ones, for soft and washable projects; higher resistance than copper tape
  - Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy): painted or drawn traces, and the way to attach parts to fabric tape or ink where solder won't work
  - Soldered wire joint (soldered splice): the stronger, lower-resistance way to join wires; copper tape can be soldered the same way
  - Double-sided foam tape (acrylic foam pressure-sensitive adhesive): the same kind of sticky backing, but it only holds parts and doesn't conduct
  - Battery holder and battery contacts (spring battery contact, coin-cell holder): a proper holder instead of a copper-tape flap round a coin cell
  - Flat flexible cable and latching connector (FFC with ZIF connector): the factory-made flat cable for many signals through hinges and into moving parts
  - Wire-to-board plug connectors (pin header and crimp housing): the plug-in way to connect wires to a board
  - Cable through a hinge (hollow hinge pin, cable on the pivot axis, service loop): how to route a conductor across a moving joint

### Pictures, videos and models

- **links**: 
  - [5mm copper tape.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg): A roll of adhesive-backed copper tape for making paper electronics *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Paper circuit ninja card.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg): A light-up card made with copper tape and LEDs *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [CopperTapeShieldedCable.jpg (Wikimedia Commons, by Nova ryan)](https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg): A 15 kV power cable shielded with a wrapped 5 mil copper tape, showing tape used as an electrical shield *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Paper Circuit Pin (SparkFun Learn)](https://learn.sparkfun.com/tutorials/paper-circuit-pin/all): Step-by-step photos of folding copper tape round corners, a copper-tape battery flap round a coin cell, and LED legs held down with clear tape *(licence: link only)*
  - [Getting Started with Copper Tape (Chibitronics, by Jie Qi)](https://chibitronics.com/copper-tape/): Video and photos comparing conductive and non-conductive adhesive tape, and the flip-and-fold method for sharp corners and curves *(licence: link only)*
- **make_it_yourself**: 
  - [Paper Circuit Pin (SparkFun Learn)](https://learn.sparkfun.com/tutorials/paper-circuit-pin/all): A beginner project with a printable template: copper-tape lines with folded corners, an LED, a coin-cell flap and a binder-clip switch *(licence: link only)*
  - [The Great Big Guide to Paper Circuits (SparkFun Learn)](https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all): Comparison of copper tape, fabric tape, paint and ink traces, with ways to attach LEDs, SMD parts and batteries (clear tape, z-axis tape, conductive glue, soldering) *(licence: link only)*
  - [3D prited 555 timer circuit - made with copper foil tape (Printables 1785446; URL from Printables API, page not opened)](https://www.printables.com/model/1785446-3d-prited-555-timer-circuit-made-with-copper-foil): A printed circuit board with raised traces to lay copper foil tape on and solder to; printed at 0.12 mm layers *(licence: CC0 / Public Domain (Printables 'Creative Commons — Public Domain'))*
  - [Using 3D Printing And Copper Tape To Make PCBs (Hackaday, 2026)](https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/): Write-up of the raised-trace method: design in KiCad, raise traces 0.6 mm, print, cover with copper tape and cut it to the traces *(licence: link only)*
- **diagram_idea**: A flat card with two copper-tape lines from a coin-cell flap to an LED, with a close-up of the fold-back corner in three steps, and a side-by-side cross-section of conductive-adhesive tape (particles in the glue linking two overlapped pieces) versus non-conductive-adhesive tape (glue layer blocking the overlap, so the end must be folded or soldered).
- **sources**: 
  - https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
  - https://learn.sparkfun.com/tutorials/paper-circuit-pin/all
  - https://www.sparkfun.com/copper-tape-5mm-50ft.html
  - https://chibitronics.com/copper-tape/
  - https://chibitronics.com/tapes/
  - https://chibitronics.com/troubleshooting/
  - https://www.adafruit.com/product/1128
  - https://www.adafruit.com/product/1127
  - https://www.adafruit.com/product/3961
  - https://www.farnell.com/datasheets/530748.pdf
  - https://static.rapidonline.com/pdf/524067_v1.pdf
  - https://www.farnell.com/datasheets/1635465.pdf
  - https://en.wikipedia.org/wiki/Copper_tape
  - https://en.wikipedia.org/wiki/Electromagnetic_shielding
  - https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
  - https://en.wikipedia.org/wiki/Button_cell
  - https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/
  - https://help.prusa3d.com/article/pla_2062
  - https://guitaranatomy.com/product/copper-shielding-tape-for-guitar-cavities-pickguards/
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg
  - https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg
  - https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg
  - https://commons.wikimedia.org/wiki/File:Corroded_copper_tape.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: strap, cord or fabric, wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: nylon, acrylic or polycarbonate, metal, fabric or leather ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…s); aluminium tape can't be soldered with ordinary electronics solder [uncertain: not on an opened page].…"*
- **bonds_poorly**: PLA, wood, paper or card ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…s); aluminium tape can't be soldered with ordinary electronics solder [uncertain: not on an opened page].…"*
- **electrical_band**: up to about 3 A ⚑ *needs confirming (source uncertain): `load` is marked [uncertain] here: "Electrical: up to about 3 A [uncertain: no maker publishes a current…"*
- **tools**: soldering iron, sewing or leather tools, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, load, making_tips_3d_printing, materials, print_in_place, safety_notes, seal, when_not_to_use

## 361 Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy)

*electrical connections.* Glue, paint or ink filled with silver, copper, nickel or carbon particles that touch each other, to stick or paint a joint or track where solder won't work, on heat-sensitive parts, glass, paper, fabric or prints

*Also covers:* Also covers resistance compared with solder (small currents only), PCB-track and rear-window heater repair, and conductive 3D-printing filament. Safety: solvent fumes in some paints; not for power wiring.

### What it is

- **plain_name**: Glue, paint or ink packed with tiny grains of silver, copper, nickel or carbon, so that once it dries or sets it carries electricity: you can glue a part on, paint or draw a wire, or mend a broken track where a soldering iron can't be used
- **term**: Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy)
- **aliases**: 
  - electrically conductive adhesive (ECA) (Wikipedia 'Electrically conductive adhesive')
  - silver conductive epoxy / silver epoxy / conductive epoxy (two-part epoxy filled with silver; e.g. MG Chemicals 8331 and 8330, brand) (MG Chemicals data sheets; SparkFun)
  - silver conductive paint / silver paint (e.g. Electrolube Silver Conductive Paint, brand) (Electrolube safety data sheet; Wikipedia 'Electrically conductive adhesive')
  - conductive paint / electric paint (carbon-based, water-based; e.g. Bare Conductive Electric Paint, brand) and copper paint (e.g. CuPro-Cote, brand) (SparkFun 'Great Big Guide to Paper Circuits'; Bare Conductive data sheet)
  - conductive ink / conductive ink pen / silver ink pen (e.g. Circuit Scribe and AgIC, brands) (Wikipedia 'Conductive ink'; SparkFun)
  - conductive pen / circuit trace repair pen (e.g. CircuitWorks CW2200, brand) (Chemtronics data sheet)
  - cold solder / cold soldering (using conductive paint or epoxy in place of solder) (SparkFun; MG Chemicals 8331 data sheet: 'quick, cold-soldering repairs')
  - rear window defogger (defroster) grid repair / tab adhesive (e.g. Permatex, brand) (Wikipedia 'Defogger'; Permatex data sheet)
  - rubber keypad repair kit (silver and carbon coating for remote-control buttons; CircuitWorks CW2605, brand) (Chemtronics data sheet)
  - conductive filament / conductive PLA / carbon-filled filament (e.g. Protopasta Conductive PLA, brand) and copper-filled filament (e.g. Electrifi, brand) (Protopasta data sheet; filament2print)
  - anisotropic conductive film (ACF) / anisotropic conductive adhesive: the factory version that conducts only straight through the joint, used to bond display flex cables (Wikipedia 'Anisotropic conductive film'); z-axis tape is the hobby tape form (SparkFun)
- **family**: electrical connections
- **other_families**: adhesives & bonding
- **one_liner**: Conductive glue, paint and ink are adhesives, paints and inks loaded with silver, copper, nickel or carbon particles that touch each other once dry or cured, so they stick a part on or draw a track that carries a small current where solder can't be used, such as on heat-sensitive parts, glass, paper, fabric or 3D prints.
- **complexity**: Single material in one of three forms: a one-part paint, ink or pen that dries as its solvent or water evaporates; a two-part epoxy (silver-filled resin plus hardener) that cures; or a conductive 3D-printing filament (plastic filled with carbon black or copper) (Wikipedia; MG Chemicals; Protopasta; filament2print). Used with a mixing stick, toothpick or syringe, a fine brush or stencil, isopropyl alcohol for cleaning, and sometimes a heat lamp or oven for curing (MG Chemicals; Bare Conductive; Permatex; SparkFun).
- **how_it_works**: A glue, varnish, resin, silicone or water-based binder holds a large amount of conductive powder, about 80% of the total mass in a conductive adhesive (Wikipedia 'Electrically conductive adhesive'). When the solvent has evaporated or the epoxy has cured, 'the particles of the conductive component are in contact to each other and in this way make electric current possible' (Wikipedia). Because current has to hop from grain to grain, the result conducts far worse than solid metal, and paint is 'not conductive until fully dry' (SparkFun). The binder also does the sticking, so one blob both holds a part and connects it, which is why it is called 'cold solder' (MG Chemicals; SparkFun). Conductive filament works the same way, with carbon black or copper grains in printable plastic (Protopasta; filament2print).

### Finder attributes

- **job**: 
  - glue or bond: one blob both sticks a part on and makes the electrical connection
  - join and hold: paints, draws or prints a track that carries current between parts, or mends a broken track (the finder reaches this entry through the 'electrical connections' family)
- **motion**: none: once dry or cured it is rigid; paint 'can crack or break under repeated stress' and traces over folds 'will mostly likely fail with repeated movement' (SparkFun)
- **degrees_of_freedom**: 0: a cured joint holds the part fixed
- **special_behaviour**: none: it is a passive conductor that sets in place
- **holding_principle**: material bond (glue, solvent or melting): the binder sticks to both surfaces and the conductive grains inside it carry the current (Wikipedia; MG Chemicals)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent for silver epoxy ('strong permanent electrical connections', MG Chemicals); semi-permanent for paints and inks, which can be scraped or dissolved off (Bare Conductive Electric Paint cleans up with warm water and soap; Permatex's grid repair cleans off with acetone) (Bare Conductive data sheet; Permatex data sheet)
- **reuse_cycles**: once
- **tools_needed**: toothpick, mixing stick or syringe (SparkFun recommends a syringe to cut down mess), fine brush, squeeze bottle or pen, a stencil or masking tape for straight lines (Permatex kit includes a stencil and brush), isopropyl alcohol to degrease surfaces (MG Chemicals), fine sandpaper (MG Chemicals; Permatex), a hair dryer, heat lamp or oven to speed drying or curing (SparkFun; Bare Conductive; MG Chemicals), a multimeter to check for near-zero resistance across a repair (Permatex), gloves and ventilation for solvent-based paints (Electrolube safety data sheet)
- **seal**: none: it is not a seal, though cured silver epoxy has 'strong resistance to humidity, salt water' (MG Chemicals 8331) and water-based paint can be over-painted with acrylic to protect it (SparkFun)
- **load**: Electrical: signal only, extra-low voltage only. Conductive adhesives are for when 'just a small current is needed' (Wikipedia 'Electrically conductive adhesive'), and Bare Conductive's paint is 'intended for applications with circuits using low DC voltages at low currents' (Bare Conductive data sheet). Resistivity compared with tin, the main metal in most solder (1.09 x 10^-5 ohm cm, Wikipedia 'Electrical resistivity and conductivity'): silver pen 5 x 10^-5 to 1.25 x 10^-4 ohm cm (CircuitWorks CW2200), silver epoxy 5.3 x 10^-4 to 6.0 x 10^-3 ohm cm (MG Chemicals range), copper-filled filament about 0.006 ohm cm (Electrifi, filament2print), carbon paint about 0.28 ohm cm (calculated from 55 ohm per square at 50 microns, Bare Conductive), and carbon-filled PLA 30-115 ohm cm when printed (Protopasta). So silver glue is roughly 50-550 times worse than tin and carbon materials thousands to millions of times worse (calculated). Worked example (calculated): a silver-epoxy bridge 10 mm long, 2 mm wide and 0.1 mm thick at 1.8 x 10^-3 ohm cm measures about 0.9 ohm, so 1 A would waste about 0.9 W in it. A short glued joint under a component lead is far lower and fine for small loads. The one higher-current everyday use is patching a short break in a car's rear-window heater line, where the repair carries the line's own heater current (Permatex: 'designed to conduct electricity and distribute heat'). Never for mains or power wiring. Mechanical: light to medium for silver epoxy (lap shear 1.2-7.1 N/mm² depending on product and metal, MG Chemicals category data sheet); light for paints and inks, which crack when bent (SparkFun).
- **adjustable**: no; an unreliable painted joint can be fixed by layering more paint on top (SparkFun)
- **play_and_precision**: not applicable
- **access_needed**: one side only (blind)
- **materials**: Fillers: silver, nickel, copper or graphite (Wikipedia), carbon black (Protopasta) or copper (Electrifi); binders: varnish, synthetic resin or silicone (Wikipedia), two-part epoxy (MG Chemicals), acrylic resin (Permatex) or water-based binders (Bare Conductive). MG Chemicals 8331 sticks best to aluminium, then steel, fibreglass, wood, paper, glass, rubber, polycarbonate and acrylic (weaker), and 'does not bond' to polypropylene; MG's range also bonds to gold, brass, bronze, glass, conductive polymers and flexible circuits (MG Chemicals data sheets). Bare Conductive paint 'adheres to a wide variety of substrates' (data sheet); conductive inks 'will not adhere to some types of paper. Photo paper works best', and don't stick well over printer toner (SparkFun). Copper-based paints 'will oxidize quickly and can have a short shelf life' (SparkFun). On PLA prints, use room-temperature cure, because heat cures at 65 °C or more (MG Chemicals) are above the 60 °C at which PLA 'gets soft and deforms' (Prusa 'PLA'). Not for PE or PP (MG Chemicals: polypropylene 'does not bond').
- **maker_difficulty**: easy for paints and ink pens ('Beginner - Intermediate', SparkFun), though paint is messy and slow to dry; moderate for silver epoxy, 'one of the more expensive ways' to attach parts that 'can be difficult to work with' and needs 'a long dry time or to be heat set' (SparkFun); moderate for conductive filament, which is brittle and resistive (Printables 1423421)

### Making it

- **processes**: 
  - off-the-shelf part (silver epoxy, conductive paint, conductive ink pens, repair kits, conductive filament)
  - hand-applied by brush, pen, syringe or stencil; screen printing for paint (Bare Conductive data sheet)
  - 3D print (FDM): conductive filament traces and touch pads (Protopasta; Hackaday 2022)
  - 3D print (FDM), woodwork or sheet enclosures painted inside as an electrical shield (Wikipedia 'Electrically conductive adhesive'; Wikipedia 'Electromagnetic shielding')
- **print_in_place**: partly: conductive-filament traces can be printed in the same job as the plastic part on a dual-extruder or colour-change print (Printables 1423421; Printables 425558), but parts and wires still have to be added afterwards; glue, paint and ink are applied after printing
- **making_tips_3d_printing**: Conductive filament: print traces flat, along the layers. Protopasta's carbon PLA measures 30 ohm cm along the layers but 115 ohm cm through them (data sheet), and Hackaday has found conductive filament 'isn't reliably resistive across vertical layers' ⚑ [uncertain: Hackaday writer's own experience]. Protopasta's settings: 215 °C nozzle, 60 °C bed, 25-45 mm/s, extrusion width 0.05 mm wider than the nozzle (data sheet). Copper-filled Electrifi prints much cooler, 140-180 °C nozzle and bed at 50 °C or less, from a brass or hardened-steel nozzle (filament2print). Carbon filament is brittle, so feed it straight into the extruder rather than through a long PTFE tube; even a thick printed trace only just lights a white LED from 9 V (Printables 1423421). Use a dab of silver paint or paste where wires meet a printed trace: filament2print notes that silver paste improves resistance measurements of Electrifi prints by 'reducing contact resistance', and says Electrifi 'works best as a conductive structural material, not as a solder replacement'. Hackaday 2022 describes printing a non-conductive PLA layer over conductive traces 'like a PCB solder mask'. Glue and paint on prints: degrease with isopropyl alcohol and lightly sand for better grip (MG Chemicals), cure at room temperature on PLA (Prusa: PLA softens over 60 °C), and avoid PP (MG Chemicals). Painting the inside of a printed box with conductive paint and connecting it to ground makes a shield (Wikipedia 'Electrically conductive adhesive'; Wikipedia 'Electromagnetic shielding'). Design small holes so component legs pass through the part before being painted over, which gives 'some strain relief' as SparkFun recommends for paper ⚑ [uncertain: applied to prints by analogy]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'silver conductive epoxy' (e.g. MG Chemicals 8331D, 8330D, brand; 'syringe kit'), 'silver conductive paint', 'conductive pen' or 'circuit trace repair pen' (e.g. CircuitWorks CW2200, brand), 'conductive ink pen' (e.g. Circuit Scribe, brand), 'Electric Paint' (Bare Conductive, brand, carbon, water-based), 'copper conductive paint', 'nickel conductive paint' or 'shielding paint', 'rear window defogger repair kit' (e.g. Permatex, brand), 'rubber keypad repair kit' (e.g. CircuitWorks CW2605, brand), 'conductive PLA filament' (e.g. Protopasta, brand), 'copper conductive filament' (e.g. Electrifi, brand), 'z-axis conductive tape', 'isopropyl alcohol'.
- **rules_of_thumb**: 
  - Resistivity side by side (lower is better): copper 1.68 x 10^-6 and tin 1.09 x 10^-5 ohm cm (Wikipedia, https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity); silver pen 5 x 10^-5 to 1.25 x 10^-4 ohm cm (CircuitWorks CW2200, https://www.farnell.com/datasheets/2792788.pdf); silver epoxy 5.3 x 10^-4 (8330D), 1.8 x 10^-3 (8331D) up to 6.0 x 10^-3 ohm cm (8331S) (MG Chemicals, https://mgchemicals.com/downloads/category-data-sheets/CDS-ElectricallyConductiveAdhesives.pdf), and 0.007 ohm cm for the older 8331 (2018 data sheet, https://www.farnell.com/datasheets/2614609.pdf); rear-window grid repair 1.01 x 10^-3 ohm cm minimum (Permatex, https://cdn.amplifi.pattern.com/69210793-d726-4c85-9584-3b22296b7321); copper-filled filament about 0.006 ohm cm (https://filament2print.com/en/advanced/4451-conductive-filament-electrifi.html); carbon PLA 15 ohm cm moulded, 30 along and 115 through printed layers (Protopasta, https://www.farnell.com/datasheets/3179312.pdf).
  - Carbon paint line resistance: Bare Conductive Electric Paint is 55 ohm per square at 50 microns, about 32 ohm per square when brushed or screen printed, and R ≈ 19.77 x (length / width) + 12 ohm for a screen-printed line, e.g. about 2500 ohm for a 1250 mm x 10 mm line (Bare Conductive data sheet, https://cdn.sparkfun.com/assets/8/e/2/6/5/ElectricPaint_TechnicalDataSheet.pdf). Worked example (calculated): a 100 mm x 5 mm painted line is about 400 ohm, fine for a touch sensor, too much to power a motor.
  - About 80% of a conductive adhesive's mass is the conductive filler (Wikipedia, https://en.wikipedia.org/wiki/Electrically_conductive_adhesive).
  - Paint is 'not conductive until fully dry' and may need to dry overnight; a hair dryer or heat gun speeds it up (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all). Bare Conductive dries in 5-15 minutes at room temperature (data sheet).
  - Push parts into paint while it is still wet and let it dry completely before powering; attach parts to a painted trace while the trace is still wet for the best connection (SparkFun).
  - Silver epoxy cure: MG Chemicals 8331 works for 10 minutes and fully cures in 24 hours at 22 °C or 15 minutes at 65 °C (2018 data sheet); the current 8331D has 20 minutes working time and cures in 6 hours at room temperature or 10 minutes at 65 °C (category data sheet).
  - Rear-window heater line repair: brush on four coats inside the stencil, letting each go tack-free; the repair must look completely opaque with 'essentially zero (0)' ohms across it; remove the stencil after 30 minutes and wait 24 hours before switching the heater on (Permatex, https://cdn.amplifi.pattern.com/69210793-d726-4c85-9584-3b22296b7321).
  - Clean surfaces first: 8331 'is not compatible with contaminants like water, oil, or greasy flux residues'; clean with isopropyl alcohol, and sand or prime weak surfaces (MG Chemicals, https://www.farnell.com/datasheets/2614609.pdf).
  - Glue parts down first with superglue, then paint over their pads, keeping glue out from between the ink and the pads (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all).

### When to use it

- **everyday_examples**: 
  - the thin heater lines on a car's rear window, often a silver-ceramic material printed onto the glass, which are mended with a copper-coloured conductive paint kit (Wikipedia 'Defogger'; Permatex)
  - TV remote-control buttons whose worn carbon contacts are restored with a keypad repair coating (CircuitWorks CW2605 data sheet)
  - computer keyboard membranes and transit-card RFID tags, which have printed silver-ink circuits (Wikipedia 'Conductive ink')
  - painted light-up cards and interactive paintings made with conductive paint (SparkFun 'Great Big Guide to Paper Circuits')
- **when_to_use**: When solder can't be used: on parts that can't take the heat, on glass, soft metals or plastics (MG Chemicals 8331), on paper, card, fabric and prints (SparkFun), to mend a broken track on a circuit board or make a jumper (MG Chemicals; CircuitWorks CW2200), to mend a car's rear-window heater line or reattach its tab (Permatex), or to restore worn rubber keypad contacts (CircuitWorks CW2605). Choose silver epoxy for a strong, low-resistance permanent joint; a silver pen for neat, quick-drying repair tracks; carbon paint for art, touch and proximity sensors and painted resistors (Bare Conductive data sheet); and conductive filament for printed touch pads and simple low-current tracks (Protopasta). Painting the inside of a plastic box with conductive paint can also shield it (Wikipedia 'Electrically conductive adhesive').
- **when_not_to_use**: For power wiring, motors, heaters, chargers or anything on mains: use a Soldered wire joint, Crimp terminals or a Screw terminal. Where solder works: solder is far lower in resistance, quicker and cheaper (see the resistivity rule of thumb). On parts that flex or fold: paint 'will mostly likely fail with repeated movement' (SparkFun); use Conductive thread, conductive fabric tape (Conductive tape) or thin flexible wire. On polypropylene or polyethylene, which silver epoxy doesn't bond (MG Chemicals). Where a joint must come apart: use a plug (Wire-to-board plug connectors, Pogo pin). For long thin carbon-paint or carbon-filament lines that must carry more than a few milliamps, since resistance adds up with length (Bare Conductive data sheet; Printables 1423421).
- **environment_limits**: Heat: silver epoxy is rated for service from about -50 to 150 °C (MG Chemicals), but its glass transition (where it starts to soften) is only 34-40 °C for MG's current two-part grades and 50 °C for the older 8331, whose heat-deflection temperature is 48 °C (MG Chemicals data sheets), so don't rely on it to hold a load when warm; the silver pen is rated to 205 °C (CircuitWorks CW2200); Permatex's grid repair is rated -30 to +180 °F (about -34 to 82 °C). PLA prints soften above 60 °C (Prusa). Water: Bare Conductive paint is water-based and 'water soluble' (data sheet), so it needs a protective coat where it may get damp ⚑ [uncertain: protective coat advice is general]; cured 8331 epoxy resists water and salt but not long contact with solvents, strong acids, bases or oxidisers (MG Chemicals). Ageing: copper paints oxidise quickly (SparkFun); Bare Conductive paint keeps 6 months after opening (data sheet). Flexing: paint cracks under strain (SparkFun). Textiles: printed inks 'must stand up to regular wear and washing', which is still a problem being researched (Wikipedia 'Conductive ink'). *(⚑ parts need confirming)*
- **safety_notes**: SOLVENT FUMES AND FIRE: some silver paints are solvent-based. Electrolube's Silver Conductive Paint is classed 'Highly flammable liquid and vapor' (H225) and 'May cause drowsiness or dizziness' (H336), with ethanol, acetone, ethyl acetate and 1-ethoxypropan-2-ol as solvents; 'Use only outdoors or in a well-ventilated area' and wear gloves and eye protection (Electrolube safety data sheet). Permatex's grid repair has a solvent smell and a flash point of 94 °F (about 34 °C) (Permatex data sheet). Keep these away from soldering irons and flames. Water-based carbon paint is the low-hazard choice: Bare Conductive's is 'nontoxic, water based' (data sheet). EPOXY: read the safety data sheet, as MG Chemicals directs; the hardener has an amine smell (MG Chemicals 8331 data sheet); wear gloves, since uncured epoxy can irritate skin ⚑ [uncertain: general epoxy advice, not from an opened data sheet]. NOT FOR POWER: high resistance makes joints heat up under load (see load); never use these on mains or for power wiring. Mains work must follow local law (in England, Approved Document P covers electrical installation work in homes); extra-low voltage means not more than 50 V AC or 120 V ripple-free DC (Approved Document P). NOT ON SKIN: research inks are being made for 'smart tattoos' and sensors on skin (Wikipedia 'Conductive ink'), but hobby paints, inks and epoxies must never be put on or in the body or used as medical electrodes. COIN CELLS in paper circuits are a swallowing hazard for small children (see Conductive tape). *(⚑ parts need confirming)*
- **common_failures**: (1) Nothing works because the paint isn't fully dry or the epoxy isn't fully cured; wait (SparkFun) or follow the cure schedule (MG Chemicals). (2) Joint fails because of oil, water or flux residue on the surface; clean with isopropyl alcohol first (MG Chemicals). (3) Cracked trace after bending or folding (SparkFun). (4) Dim LED or a circuit that misbehaves because a long carbon trace has too much resistance (Bare Conductive; Printables 1423421). (5) Ink doesn't stick to the paper or toner (SparkFun). (6) Copper paint stops conducting as it oxidises (SparkFun). (7) Printed conductive part conducts poorly between layers (Protopasta: 115 versus 30 ohm cm). (8) A smear of glue or paint bridges neighbouring pins and shorts them ⚑ [uncertain: general experience, not on an opened page]. (9) Rear-window repair fails because the stencil leaked or too few coats were applied; Permatex calls for four coats until no light shows through (Permatex). *(⚑ parts need confirming)*
- **related**: 
  - Soldered wire joint (soldered splice): the normal, much lower-resistance joint when heat is acceptable
  - Conductive tape (copper foil tape, conductive fabric tape): ready-made flat conductors; conductive glue is the way to attach parts to fabric tape
  - Conductive thread (sewn circuit, e-textile stitching): flexible stitched conductors for fabric
  - Two-part epoxy: the same kind of glue without metal filler; stronger, but it insulates
  - Cyanoacrylate (superglue): used to tack parts down before painting over their pads (SparkFun)
  - Crimp terminals and Crimped butt splice: cold, heat-free joints that do carry real current
  - Wire wrap (wire-wrapped connection): another solder-free connection, for solid wire on square posts
  - Mid-print embedding (captive nuts, magnets and bearings): embedding wires or metal contacts in a print, an alternative to printed conductive tracks

### Pictures, videos and models

- **links**: 
  - [Conductive silver.jpg (Wikimedia Commons, by PhysikingerC, University of Konstanz)](https://commons.wikimedia.org/wiki/File:Conductive_silver.jpg): Scanning electron microscope image of conductive silver, showing the touching flakes that carry the current (picture width 434 µm) *(licence: Public domain (released by the copyright holder))*
  - [Making Conductive Ink.JPG (Wikimedia Commons, by Klosito)](https://commons.wikimedia.org/wiki/File:Making_Conductive_Ink.JPG): Graphite, glue and paint laid out for making a home-made conductive ink *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [The Great Big Guide to Paper Circuits (SparkFun Learn)](https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all): Photos of painting traces with conductive paint, drawing with a silver ink pen, cold-soldering parts into wet paint and a conductive epoxy syringe *(licence: link only)*
  - [Add Conductive Traces On Vacuum Formed Plastic With 3D Printing (Hackaday, 2022)](https://hackaday.com/2022/04/22/add-conductive-traces-on-vacuum-formed-plastic-with-3d-printing/): Six-panel diagram of printing conductive-PLA traces onto a plastic sheet and vacuum forming it into a touch-sensing tray *(licence: link only)*
- **make_it_yourself**: 
  - [Conductive filament - test sample (Printables 1423421; URL from Printables API, page not opened)](https://www.printables.com/model/1423421-conductive-filament-test-sample): A two-material test print with a conductive-filament trace on a PLA base, to measure resistance and light an LED *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Flashlight with Conductive Filament - Limited Success - Learning Experience (Printables 425558; URL from Printables API, page not opened)](https://www.printables.com/model/425558-flashlight-with-conductive-filament-limited-succes): A printed torch whose current path is conductive filament, made with colour changes in PrusaSlicer; documents why it barely lit *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [The Great Big Guide to Paper Circuits (SparkFun Learn)](https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all): How-to for painted and inked paper circuits, including attaching parts with wet paint, conductive glue or z-axis tape *(licence: link only)*
- **diagram_idea**: A magnified cross-section of a cured blob of silver epoxy joining a component lead to a track, showing silver flakes touching in a chain through the glue, beside a bar chart comparing resistivity of copper, tin, silver pen, silver epoxy, carbon paint and carbon filament on a log scale.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electrically_conductive_adhesive
  - https://en.wikipedia.org/wiki/Conductive_ink
  - https://en.wikipedia.org/wiki/Defogger
  - https://en.wikipedia.org/wiki/Anisotropic_conductive_film
  - https://en.wikipedia.org/wiki/Electromagnetic_shielding
  - https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
  - https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
  - https://mgchemicals.com/downloads/category-data-sheets/CDS-ElectricallyConductiveAdhesives.pdf
  - https://www.farnell.com/datasheets/2614609.pdf
  - https://www.farnell.com/datasheets/2615500.pdf
  - https://cdn.sparkfun.com/assets/8/e/2/6/5/ElectricPaint_TechnicalDataSheet.pdf
  - https://www.farnell.com/datasheets/2792788.pdf
  - https://www.farnell.com/datasheets/1728860.pdf
  - https://cdn.amplifi.pattern.com/69210793-d726-4c85-9584-3b22296b7321
  - https://www.farnell.com/datasheets/3179312.pdf
  - https://filament2print.com/en/advanced/4451-conductive-filament-electrifi.html
  - https://hackaday.com/2022/04/22/add-conductive-traces-on-vacuum-formed-plastic-with-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:Conductive_silver.jpg
  - https://commons.wikimedia.org/wiki/File:Making_Conductive_Ink.JPG
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fills gaps
- **bonds_well**: silicone, acrylic or polycarbonate, wood, paper or card, metal, glass or ceramic, rubber
- **bonds_poorly**: PLA, slippery plastics (PE or PP)
- **electrical_band**: signal only
- **tools**: hand tools ⚑ *needs confirming (best guess): no tool named in `tools_needed`; defaulted to hand tools*
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, making_tips_3d_printing, safety_notes

## 362 Flat flexible cable and latching connector (FFC with ZIF connector)

*electrical connections.* A very thin plastic ribbon with flat copper strips whose bare end slides into a low-profile socket and is locked by flipping a tiny latch, used for cameras and displays and to carry many signals through hinges and moving heads

*Also covers:* Also covers pitch, same-side and opposite-side contacts (which way up each end goes), stiffeners and latch types. Routing a cable across a pivot is Cable through a hinge.

### What it is

- **plain_name**: A very thin, flat plastic strip with a row of tiny copper stripes inside; its bare end slides into a slim socket on a circuit board and is clamped by flipping or sliding a little lid. It carries many signals to a camera or screen, and can bend through a hinge or follow a moving print head
- **term**: Flat flexible cable and latching connector (FFC with ZIF connector)
- **aliases**: 
  - flat flexible cable / flexible flat cable (FFC) (Wikipedia 'Flexible flat cable')
  - flat flex cable / flat flex jumper (e.g. Premo-Flex, Molex brand; WR-FFC, Würth Elektronik brand) (Molex and Würth data sheets)
  - FPC (flexible printed circuit): strictly an etched or printed flexible circuit board, but often used loosely for any FFC (Wikipedia 'Flexible flat cable')
  - ribbon cable / flex cable / camera cable (loose everyday names; true ribbon cable has round wires) (iFixit 'Categorisation of Connectors'; Raspberry Pi camera documentation; Wikipedia)
  - ZIF connector (zero insertion force) and LIF or non-ZIF connector (low insertion force) (Wikipedia 'Zero insertion force'; IRISO 'FPC/FFC connector types')
  - FPC connector / FFC connector / FPC-FFC connector (e.g. Hirose FH12 series, brand) (Hirose data sheet)
  - latch styles: flip-lock or front-flip, back-flip, slide-lock or slider-cover, push-lock, locking-bar and non-locking (IRISO; iFixit; Hirose)
  - Type A (same-side contacts) and Type D (opposite-side contacts) (Molex), also called Type 1 and Type 2 (Würth Elektronik) (Wikipedia 'Flexible flat cable')
  - top-contact and bottom-contact connectors (which face of the cable end touches the contacts) (Hirose data sheet)
  - Raspberry Pi camera and display connectors: standard 15-pin and mini 22-pin (Raspberry Pi camera documentation)
  - ZIF tape connector (1.8-inch hard drives, ZIF-24, ZIF-40, ZIF-50) (Wikipedia 'Zero insertion force')
  - clockspring / spiral cable (a wound flat cable that lets a car's steering wheel turn) (Wikipedia 'Clockspring')
- **family**: electrical connections
- **other_families**: seals & pass-throughs
- **one_liner**: A flat flexible cable is a thin plastic film with many flat copper conductors whose stiffened, bared ends slide into low-profile board connectors that are clamped shut by a small latch (a ZIF connector), carrying many low-current signals between boards, cameras and displays and through hinges and moving parts.
- **complexity**: A few parts: the cable (polyester film insulation, a row of flat tin- or gold-plated copper conductors, and a stiffener or 'support tape' on the back of each bared end) and two board-mounted connectors, each with a plastic housing, a row of spring contacts and a latch that flips or slides (Wikipedia 'Flexible flat cable'; Würth WR-FFC data sheet; IRISO; Hirose FH12 data sheet).
- **how_it_works**: The copper strips are bared for a few millimetres at each end on one face only, and a stiffener on the other face makes the end a firm tab of a set thickness, typically 0.3 mm (Wikipedia; Hirose). In a ZIF connector, opening the latch takes the pressure off the contacts so the tab slides in with almost no force; closing the latch pushes the tab against the row of spring contacts and holds it there (Wikipedia 'Zero insertion force'; IRISO). Non-ZIF (LIF) connectors have no latch: the contacts are sprung from the start and grip the tab by friction, which is simpler and smaller but holds less well (IRISO; Wikipedia). Because the contacts touch only one face of the tab, the bared side must face them: a connector is either top-contact or bottom-contact, and a cable has its bare contacts on the same side at both ends (Type A) or on opposite sides (Type D), which together decide which way up each end goes (Molex; Wikipedia; Hirose).

### Finder attributes

- **job**: 
  - join and hold: connects many signal lines between two boards, or to a camera or display, with a plug-free cable end (the finder reaches this entry through the 'electrical connections' family)
  - seal it, or pass cables or fluid through: a thin flat cable carries many signals across a hinge, a sliding carriage or a limited-turn joint (see Cable through a hinge)
  - lock, and release by hand: the latch locks the cable in and is opened with a fingernail or plastic spudger (Hirose; iFixit)
- **motion**: flex: the connector is fixed, but the cable can bend and fold, and some thin grades are made for repeated movement (Molex flex-life table: 10,000 to 2.5 million cycles depending on thickness)
- **degrees_of_freedom**: 0 at each latched connector; the cable between them bends easily across its thin direction but resists bending sideways in its own plane and stretching ⚑ [uncertain: geometry, not stated on an opened page], so it suits hinges and back-and-forth carriages, not twisting or endless rotation *(⚑ parts need confirming)*
- **special_behaviour**: quick-release: the latch opens by hand and the cable slides out with almost no force (IRISO; Hirose), none otherwise: it is a passive set of conductors
- **holding_principle**: friction or clamping (force-fit): the closed latch presses the tab against the contacts; spring force: the springy contacts keep the pressure on (Hirose: its contacts 'maintain the required normal force'); shape: some connectors add a catch that hooks a notch in the cable end (IRISO 'I-Lock')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: lift or slide the latch with a fingernail or spudger and pull the cable straight out (Hirose; iFixit); check first for a latch, since 'it is important not to pull an FPC out of a connector until you are sure that there is no retention method that you've missed' (iFixit)
- **reuse_cycles**: a few times: typical ratings are 20 mating cycles for both connector and cable (Hirose FH12: 20 cycles; Würth WR-FFC: 20 mating cycles)
- **tools_needed**: none to plug in (the latch is flicked up 'with the fingernail of the thumb or forefinger', Hirose); a plastic spudger or tweezers helps (iFixit); fitting the connector to your own board needs fine-pitch surface-mount soldering, or use a ready-made breakout board (Adafruit FPC Stick)
- **seal**: none: the connector is open and the bared contacts are exposed
- **load**: Electrical: up to about 3 A, extra-low voltage only. Each conductor carries little: Molex Premo-Flex 0.5 A at 0.5 mm pitch, 1.2 A at 1.0 mm and 1.4 A at 1.25 mm (Molex); Würth 0.5 mm-pitch cable 0.5 A (Würth); and the connector contact may be lower, e.g. 0.4 A DC for Hirose FH12 (Hirose). Larger currents are shared over several conductors ⚑ [uncertain: common practice, not stated on an opened page]. Voltage: 60 V maximum for the cables (Molex; Würth) and 50 V AC for the FH12 connector (Hirose), so extra-low voltage only (not more than 50 V AC or 120 V ripple-free DC, UK Approved Document P); never mains. Mechanical: light. The latched joint survives vibration (10-55 Hz) and shock (490 m/s²) tests (Hirose), but the connectors 'do not have strong resistance to upward pulling; therefore, support the FPC when a pulling force is applied' (Hirose), and the conductors are only 0.05 mm thick (Würth). *(⚑ parts need confirming)*
- **adjustable**: no: cable length, pitch, pin count and contact type are fixed when you buy it
- **play_and_precision**: The tab must go in straight and all the way: 'When the FPC is partially inserted or there is an extreme insertion offset, the lock level will engage poorly or not at all', and poor insertion 'could cause FPC breakage and conduction faults' (Hirose); Raspberry Pi says to make sure the cable 'is seated straight to correctly align all contacts'. The cable end must match the connector's thickness, typically 0.3 ± 0.05 mm (Hirose).
- **access_needed**: one side only (blind): the connector is reached from the component side of the board, with room above it to lift the latch (the FH12 latch stands 2.0 mm above the board, Hirose) and room in front to slide the cable in
- **materials**: Cable: white PET (polyester) insulation 0.043 mm thick, tin-plated copper conductors 0.3 mm wide and 0.05 mm thick at 0.5 mm pitch, and a blue PET support tape 0.225 mm thick at the ends (Würth WR-FFC); total cable thickness 0.12, 0.22 or 0.27 mm, tin or gold plated (Molex). Connectors: plastic housing with solder- or gold-plated contacts (Hirose). Not a material that joins other things; it only connects to matching FFC/FPC connectors or is soldered to pads (Adafruit FPC adapters).
- **maker_difficulty**: easy to plug in when the board already has the connector (camera modules, displays, Raspberry Pi); moderate to hard to design in yourself, because the connectors are tiny 0.5 mm-pitch surface-mount parts and four things must match (pitch, pin count, end thickness and contact side); breakout boards make prototyping easier (Adafruit FPC Stick)

### Making it

- **processes**: 
  - off-the-shelf part (cables bought by pitch, pin count, length and contact type; board connectors)
  - printed circuit board with a surface-mount connector footprint
  - 3D print (FDM): clamps, guides, strain reliefs and hinge channels for the cable (Printables 905215 and 35028)
- **print_in_place**: no: the cable and connectors are bought; only clips and guides are printed
- **making_tips_3d_printing**: Clamp the cable close to each connector so pulls and movement don't reach the latch, because ZIF connectors have little resistance to upward pulling (Hirose); a printed clip screwed down next to the connector does this (Printables 35028 uses a 2.5 mm screw). Printed guides that hold a cable along an aluminium extrusion can be printed upright without supports in PLA (Printables 905215). Make any slot the cable passes through a little thicker than the cable (0.12-0.3 mm, Molex; Hirose) and round its edges so the film is not cut ⚑ [uncertain: no clearance figure found on an opened page]. Never fold the cable sharply against a printed edge: Molex's folding test uses a 4 mm radius, and for parts that move (hinges, carriages) choose the thinnest cable and the largest loop you can, since flex life falls from 2.5 million cycles at 0.12 mm thick to 10,000 cycles at 0.27 mm (Molex). Leave room in the enclosure to reach the latch with a fingernail or spudger, and to slide the cable in straight (Hirose; iFixit). For routing across a pivot (hollow pin, on-axis routing, service loop), see Cable through a hinge. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'FFC cable' or 'flat flex cable jumper' with pitch (0.5 mm, 1.0 mm, 1.25 mm), pin count, length and contact type ('Type A' same-side or 'Type D' opposite-side, Molex Premo-Flex; 'Type 1' or 'Type 2', Würth WR-FFC); 'FFC FPC connector' or 'ZIF connector' with pitch, pin count, 'top contact' or 'bottom contact', and latch style ('flip lock', 'back flip', 'slider'), e.g. Hirose FH12 (brand); 'FPC breakout' or 'FPC adapter' (e.g. Adafruit FPC Stick 20-pin 0.5/1.0 mm, Adafruit 50-pin 0.5 mm FPC adapter); 'Raspberry Pi camera cable' (standard 15-pin or mini 22-pin, and 15-to-22-pin adapter cables); 'FFC extension board' ⚑ [uncertain]; 'plastic spudger'. Link to a catalogue rather than copying part numbers. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Match four things between cable and connector: pitch, number of pins, end thickness (commonly 0.3 ± 0.05 mm; 0.18 mm for thin-FPC versions) and which side the contacts are on (Hirose FH12, https://datasheet.trustcompo.com/hirose-fh12-12s-0.5sh.pdf; Molex, https://cdn.hackaday.io/files/1956458370475680/Data%20Sheet%20-%20987650-6631.pdf).
  - Common pitches are 0.5, 1.0 and 1.25 mm (Wikipedia, https://en.wikipedia.org/wiki/Flexible_flat_cable); 0.5 mm 'is the most used' today (IRISO, https://www.irisoele.com/en/technology/connectors/feature/fpcffc-types-features).
  - Which way up: Type A cables have contacts on the same side at both ends, Type D on opposite sides, to suit top- and bottom-contact connectors (Molex; Wikipedia). On a bottom-contact connector insert the cable 'with the conductive surface facing down'; on a top-contact one, facing up (Hirose). On a Raspberry Pi camera port, insert the cable 'with the metallic contacts facing away from the flap' (Raspberry Pi, https://www.raspberrypi.com/documentation/accessories/camera.html).
  - Current per conductor: 0.5 A at 0.5 mm pitch, 1.2 A at 1.0 mm, 1.4 A at 1.25 mm, 60 V maximum (Molex); 0.4 A DC and 50 V AC per contact for the Hirose FH12 connector (Hirose). Use the lower of the cable and connector ratings.
  - Mating cycles: about 20 (Hirose FH12; Würth WR-FFC, https://www.we-online.com/components/products/datasheet/687712050002.pdf). Don't plan to unplug it often.
  - Bending, figures side by side: Molex tests folding at 180° over a 4 mm radius for at least 20 cycles and gives flex life of 2.5 million cycles for 0.12 mm cable, 100,000 for 0.22 mm and 10,000 for 0.27 mm; its feature list separately claims 900,000 cycles versus 6,000 for a standard jumper (Molex). Würth's cable passes a 180° flexing test 20 times (Würth).
  - Latch type: front-flip is small and easy to work but holds less if the cable is tilted upward; back-flip is more resistant to tilt; the slider type holds best but is larger and fiddlier (IRISO).
  - Close a flip latch by pressing on both sides; pressing only one side won't lock it (Hirose). Don't force the latch up when no cable is in, and don't grip it with your fingers (Hirose).
  - Power off before plugging in, and earth yourself first, since camera boards are 'sensitive to static' (Raspberry Pi camera documentation).

### When to use it

- **everyday_examples**: 
  - the cable from a laptop's screen to its motherboard (Wikipedia 'Zero insertion force')
  - the ribbon from a Raspberry Pi camera module to the board (Raspberry Pi camera documentation)
  - the cable to the moving print head in an inkjet printer (Wikipedia 'Flexible flat cable'; Molex lists printers)
  - the flat cable joining the two halves of a slide phone (Wikimedia Commons 'Samsung SGH-U700 FFC.jpg'), and the spiral 'clockspring' cable behind a car's steering wheel (Wikipedia 'Clockspring')
- **when_to_use**: When you need many low-current signals in very little space, such as between two boards, to a camera or display module, or across a hinge, sliding drawer or carriage, where a bundle of round wires would be too thick or stiff (Wikipedia 'Flexible flat cable'; Molex). FFCs 'take up less space than round cables' and suit 'high-flex applications' (Wikipedia). Use a ZIF connector where the cable must go in without strain on the delicate contacts, and a non-ZIF one only where space and cost matter most (IRISO). Ready-made modules (cameras, displays) often come with the cable and connector, so this is what you use to connect them.
- **when_not_to_use**: For power above about an amp per conductor or for any mains voltage: use Wire-to-board plug connectors, a Screw terminal or a High-current battery plug. For connections that are plugged and unplugged often (about 20 cycles only): use a Standard plug-and-socket connector or Wire-to-board plug connectors. For a joint that keeps turning: use a Slip ring and rotary union or an Anti-twister mechanism; a clockspring only allows a few turns (Wikipedia 'Clockspring'). For long runs outside an enclosure, or where the cable could be pulled or snagged: use a round, jacketed cable with Cable gland and strain relief. For a custom length or pin count you can't buy: use ribbon cable with Insulation-displacement connector (IDC) plugs, since an FFC's ends need factory-made bared contacts and stiffeners ⚑ [uncertain: inferred from the cable construction]. *(⚑ parts need confirming)*
- **environment_limits**: Temperature: cables are rated -30 to +105 °C (Würth) or -40 to +105 °C (Molex); the Hirose FH12 connector -40 to +70 °C including its own heating from current. Humidity: 90% relative humidity maximum, not condensing (Hirose). Flexing: copper fatigue limits moving use; thicker cables last far fewer cycles (Molex flex-life table). Vibration: a latched FH12 showed no break in contact over 10-55 Hz for 2 hours in each axis (Hirose). Dust and water: open contacts, so keep the joint inside an enclosure ⚑ [uncertain]. Static: camera modules are static-sensitive (Raspberry Pi). *(⚑ parts need confirming)*
- **safety_notes**: Shut down and unplug the device before connecting or disconnecting a cable, and earth yourself, because modules are 'sensitive to static' (Raspberry Pi camera documentation). A cable put in the wrong way up, or the wrong type (A instead of D), may put power on the wrong pins and damage the boards ⚑ [uncertain: not stated on an opened page]. Ratings are 50-60 V at most (Hirose; Molex; Würth): never use FFCs for mains. Mains work must follow local law; in England, Approved Document P covers electrical installation work in homes. A car's clockspring is part of the airbag and horn circuit (Wikipedia 'Clockspring'): don't take one apart or reuse it in a project ⚑ [uncertain: general caution]. The latch is 'small and thin and could be damaged', so don't force it (Hirose). *(⚑ parts need confirming)*
- **common_failures**: (1) Broken latch from forcing it, gripping it with fingers, or opening the wrong way; identify the latch type first (Hirose; iFixit). (2) Cable not fully inserted or skewed, giving intermittent faults or a latch that won't lock (Hirose; Raspberry Pi). (3) Cable in upside down, or Type A used where Type D was needed, so nothing works (Molex; Hirose). (4) Cable torn out because a latch was not opened, or pulled upward at the connector (iFixit; Hirose). (5) Crack in the conductors from a sharp crease or too many flex cycles in a moving joint (Molex). (6) Contacts worn after more than about 20 matings (Hirose; Würth). (7) Static damage to a camera or display module (Raspberry Pi). (8) Flip latch closed on one side only, so it doesn't lock (Hirose).
- **related**: 
  - Cable through a hinge (hollow hinge pin, cable on the pivot axis, service loop): how to route this or any cable across a pivot
  - Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap): round-wire ribbon cable with crimp-on plugs, thicker but easy to make to any length
  - Wire-to-board plug connectors (pin header and crimp housing): sturdier plugs for fewer wires and more current
  - Slip ring and rotary union: passes signals across a joint that keeps turning
  - Anti-twister mechanism (twist-free cable feed): lets a joint turn endlessly with a plain cable; clocksprings are the flat-cable answer for a few turns
  - Cable carrier (drag chain, energy chain): guides cables, including flat ones, along a moving axis
  - Pogo pin (spring-loaded contact pin): spring contacts pressed onto pads, an alternative way to connect a moving or removable board
  - Conductive tape (copper foil tape, conductive fabric tape): a home-made flat conductor for paper and card
  - Keying (one-way-only fit, poka-yoke): FFC orientation is a keying problem that the connector does not solve for you

### Pictures, videos and models

- **links**: 
  - [ZIF connector and FFC.jpg (Wikimedia Commons, by Zeroping)](https://commons.wikimedia.org/wiki/File:ZIF_connector_and_FFC.jpg): A pair of zero-insertion-force connectors on a laptop mainboard with the flat flexible cables that plug into them *(licence: CC0 1.0 (public domain dedication))*
  - [Flat-Flex-Cable.jpg (Wikimedia Commons, by Marcus Wong)](https://commons.wikimedia.org/wiki/File:Flat-Flex-Cable.jpg): A length of 35-conductor flat flexible cable with bared ends *(licence: CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit))*
  - [Samsung SGH-U700 FFC.jpg (Wikimedia Commons, by RobbertS)](https://commons.wikimedia.org/wiki/File:Samsung_SGH-U700_FFC.jpg): Close-up of the flat flexible cable linking the two sliding halves of a phone, an example of a cable across a moving joint *(licence: CC BY-SA 3.0 or GFDL 1.2+ (author also releases it to the public domain))*
  - [Categorisation of Connectors (iFixit wiki)](https://www.ifixit.com/Wiki/Categorisation_of_Connectors): Photo pairs of front-flip, back-flip, push-lock, pinch-lock, locking-bar, slide-lock and non-locking FPC/FFC connectors, open and closed *(licence: link only [licence not shown on the page as read])*
  - [FPC/FFC connector types and features (IRISO)](https://www.irisoele.com/en/technology/connectors/feature/fpcffc-types-features): Drawings comparing slider-cover, front-flip, back-flip and non-ZIF connectors, with their pros and cons *(licence: link only)*
- **make_it_yourself**: 
  - [Adafruit FPC Stick - 20 Pin 0.5mm/1.0mm Pitch Adapter (Adafruit)](https://www.adafruit.com/product/1325): A breakout board with long pads for 0.5 mm and 1.0 mm pitch FPC connectors broken out to 0.1 inch headers, for prototyping with flat cables on a breadboard *(licence: link only (product))*
  - [Adafruit 50 pin 0.5mm pitch FPC Adapter (Adafruit)](https://www.adafruit.com/product/1492): A breakout board for 0.5 mm pitch connectors up to 50 pins, broken out to breadboard-friendly headers *(licence: link only (product))*
  - [V Slot FFC Cable Clamp (Printables 905215; URL from Printables API, page not opened)](https://www.printables.com/model/905215-v-slot-ffc-cable-clamp): Printed clamps that hold an FFC or ribbon cable where it crosses a 2020 or 2040 aluminium extrusion; printed upright in PLA without supports *(licence: CC BY (Creative Commons Attribution))*
  - [Raspberry Pi Camera Ribbon Cable holder (Printables 35028; URL from Printables API, page not opened)](https://www.printables.com/model/35028-raspberry-pi-camera-ribbon-cable-holder): A tiny printed clip, fixed with a 2.5 mm screw, that holds a camera's flat cable in place *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: Side view of a flip-lock ZIF connector in three steps (latch up, cable tab sliding in with bare contacts facing the spring contacts, latch down pressing the tab), beside a top view of a Type A and a Type D cable showing which face the bare contacts are on at each end.
- **sources**: 
  - https://en.wikipedia.org/wiki/Flexible_flat_cable
  - https://en.wikipedia.org/wiki/Zero_insertion_force
  - https://en.wikipedia.org/wiki/Clockspring
  - https://www.irisoele.com/en/technology/connectors/feature/fpcffc-types-features
  - https://www.ifixit.com/Wiki/Categorisation_of_Connectors
  - https://datasheet.trustcompo.com/hirose-fh12-12s-0.5sh.pdf
  - https://www.we-online.com/components/products/datasheet/687712050002.pdf
  - https://cdn.hackaday.io/files/1956458370475680/Data%20Sheet%20-%20987650-6631.pdf
  - https://www.raspberrypi.com/documentation/accessories/camera.html
  - https://www.adafruit.com/product/1325
  - https://www.adafruit.com/product/1492
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
  - https://commons.wikimedia.org/wiki/File:ZIF_connector_and_FFC.jpg
  - https://commons.wikimedia.org/wiki/File:Flat-Flex-Cable.jpg
  - https://commons.wikimedia.org/wiki/File:Samsung_SGH-U700_FFC.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: lid, door or cover, wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 3 A
- **tools**: none, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** degrees_of_freedom, environment_limits, load, making_tips_3d_printing, off_the_shelf_parts, safety_notes, when_not_to_use

## 363 Wire wrap (wire-wrapped connection)

*electrical connections.* Bare solid wire is wound tightly, about seven turns, round a square metal post with a small hand tool, so the post's corners bite into the wire and make a gas-tight joint that can be unwound and redone with no solder

*Also covers:* Also covers wire-wrap wire, long-post sockets and modified wraps for strain relief. Low voltage only

### What it is

- **plain_name**: A pen-like hand tool spins a stripped end of very thin solid wire tightly round a square metal pin, about seven turns, so the pin's sharp corners dig into the wire and make a lasting electrical joint with no solder; the same tool's other end unwinds it again
- **term**: Wire wrap (solderless wrapped connection, wire-wrapped connection)
- **aliases**: 
  - wire wrap, wire-wrap, wirewrap, wire wrapping (Wikipedia 'Wire wrap'; Nuts and Volts 'Wire Wrap Is Alive And Well!')
  - solderless wrapped connection, solderless wrapped electrical connection (MIL-STD-1130C title and §3.1)
  - wire-wrapped connection, wire-wrap connection (ECSS-Q-ST-70-30C)
  - modified wrap = Class A wrap = the 'preferred' wrap with a part-turn of insulated wire at the bottom for strain relief; regular or conventional wrap = Class B wrap, bare wire only (MIL-STD-1130C §3.2-3.3; Nuts and Volts; Hackaday 2024)
  - wrappost, wrap post, terminal post, wire-wrap pin (MIL-STD-1130C; ECSS-Q-ST-70-30C)
  - wire-wrap socket, wire-wrap DIP socket, two-level / three-level socket, wire-wrap header or SIP strip (Nuts and Volts; Hackaday 'Wire Wrap 101')
  - wire-wrap wire, Kynar wire (30 AWG silver-plated copper with Kynar (PVDF) or Tefzel insulation) (Wikipedia; Nuts and Volts)
  - wrap gun, wire-wrap gun, wrap/strip/unwrap tool, WSU-30 and WSU-30M (OK Industries / Jonard Tools, brand) (Nuts and Volts; Hackaday 2024)
  - Keller Wrap Gun (historic brand name of the first tool) (Wikipedia)
  - not to be confused with wire-wrapped jewellery (Wikipedia hatnote)
- **family**: electrical connections
- **one_liner**: Wire wrap joins a thin solid wire to a square metal post by winding the bared wire tightly round it with a small spinning tool: the post's sharp corners bite into the wire at every turn, making about 28 tiny gas-tight, cold-welded contact points that need no solder and can be unwound and redone.
- **complexity**: A few parts: a square (or rectangular) metal post with sharp corners, usually the long tail of a wire-wrap socket or header (typically 0.025 in / 0.64 mm square, gold- or tin-plated); a length of single-strand (solid) wire, usually 30 AWG silver-plated copper with thin Kynar insulation; and the hand tool (a bit with two holes, often with an unwrap bit and a stripper in the handle) (Wikipedia; MIL-STD-1130C §5.2; Nuts and Volts).
- **how_it_works**: The stripped wire end (about 1 in / 25 mm for 30 AWG) goes into the small hole near the edge of the tool bit, and the centre hole goes over the post; turning the tool winds the wire round the post under tension (Wikipedia; Nuts and Volts). At each of the post's four sharp corners the wire is bent so hard that the oxide on both metals is crushed or sheared and the corner indents the wire, giving 'a clean, oxide-free metal-to-metal' contact that is gas-tight, so air can't get in to corrode it (Nuts and Volts; MIL-STD-1130C §4.1). Seven turns on a four-cornered post make about 28 such contact points, and the wire and post can form a cold weld (Wikipedia; Hackaday 2018). In a 'modified' wrap, the tool also winds half a turn to 1.5 turns of the still-insulated wire round the bottom of the post, which supports the wire and stops it snapping from vibration where it leaves the post (MIL-STD-1130C §3.2; Wikipedia).

### Finder attributes

- **job**: 
  - join and hold: connects a thin solid wire to a square post (socket pin, header pin or terminal) for low-voltage signal wiring and prototypes; the finder reaches it through the 'electrical connections' family
- **motion**: none: the wrap holds the wire still on the post; long wires should be tied down so they don't vibrate (ECSS-Q-ST-70-30C §5.3.4e).
- **degrees_of_freedom**: 0: the wrapped wire can't move along or round the post until it is unwrapped.
- **special_behaviour**: 
  - none: it simply joins a wire to a post; its useful extra is that it can be unwound with an unwrap tool and redone, which is why it is used for prototypes and modifications (Wikipedia; ECSS-Q-ST-70-30C Annex A.2)
- **holding_principle**: 
  - friction or clamping (force-fit): the wire is wound under tension so it grips the post, and the sharp corners create 'high pressure points' that 'shall provide electrical continuity and mechanical stability' (MIL-STD-1130C §4.1); the wire and post can cold-weld at the corners (Hackaday 2018; Wikipedia)
  - shape (the parts interlock; form-fit): the corners leave indentations in the wire (or in both wire and post) that resist the wrap being pushed along the post (MIL-STD-1130C §4.1, strip test §5.6.1)
- **input_output**: not applicable
- **power**: passive (no power needed): the joint itself needs no power; the wrapping tool can be hand-turned, or an electric, battery or air-powered wrap gun (Nuts and Volts; Wikipedia).
- **removability**: removable: an unwrap tool turned the other way uncoils the wire without damaging the post (Nuts and Volts; MIL-STD-1130C §5.6.3); ECSS says 'A wire-wrapped joint is not intended to be a “removable” joint, but it can be easily reprocessed' (ECSS-Q-ST-70-30C Annex A.2). Pulling or stripping a wrap off the post instead of unwrapping it is not allowed (MIL-STD-1130C §5.5.2).
- **reuse_cycles**: a few times per post: ECSS allows a post to be reworked, with new wire each time, 'up to 3 times, using copper alloy wire, or up to 5 times, using soft copper wire' (ECSS-Q-ST-70-30C Annex A.2). The wrapped part of the wire itself is not re-used in high-reliability work: 'It is not permissible to rewrap the portion of wire that has been previously wrapped' (MIL-STD-1130C §5.5.1); hobby guides straighten and re-wrap it once or twice with care (Nuts and Volts), or just snip it and re-strip (Nuts and Volts).
- **tools_needed**: A wire-wrap tool matched to the wire size and post: for hobby use a hand wrap/strip/unwrap tool for 30 AWG (e.g. WSU-30 regular or WSU-30M modified, brand), with the wrap and unwrap bits at opposite ends and a 30 AWG stripper in the handle (Nuts and Volts; Hackaday 2024); for many joints a squeeze-ratchet hand gun, battery gun or 115 V electric gun with a bit and sleeve for each wire size (Nuts and Volts; Make 2009). A stripper that does not nick the thin wire: 'A universal V-notch stripper will nick and weaken or break the wire' (Nuts and Volts). Flush cutters. Optional: a pin or needle to straighten unwrapped wire (Nuts and Volts). No soldering iron is needed.
- **seal**: none: the wrap doesn't seal anything; only the contact points under the corners are gas-tight, which keeps air and moisture out of the electrical contact itself (Nuts and Volts; MIL-STD-1130C §3.6, §5.6.2). In flight hardware, assemblies may be conformally coated with wax to damp vibration (Wikipedia).
- **load**: Electrical: up to about 3 A, and in practice signal and small logic-supply currents: 'Although a short run of 30 AWG wire can carry up to an amp, higher currents will require a heavier gauge wire soldered in place' (Nuts and Volts); MIL-STD-1130C tests 30 AWG wraps at 1.0 A, 24-26 AWG at 2.4 A and 18-20 AWG at 7.5 A (Table V); SparkFun warns that wire-wrap wire 'is not able to handle a lot of power due to the thickness of the wire'. Extra-low voltage only (see safety_notes; one 30 AWG Kynar wire data sheet lists 300 V, but the same sheet's heading says 'no voltage rated' (Talmir data sheet), so don't rely on it). Mechanical: light. Minimum strip force (the push needed to slide a finished wrap along its post) is 2.0 lb (about 8.9 N) for 30 AWG on a 0.025 in post, rising to 5.0 lb for 24 AWG (MIL-STD-1130C Table IV); ECSS asks for 20 N for 30 AWG on a 0.64 mm post (ECSS-Q-ST-70-30C Table 5-3). The thin wire itself is the weak point: a pull on the wire, or wire 'strung banjo string tight', strains the wrap and post (Nuts and Volts), and repeated bending where the wire leaves the post breaks it unless there is an insulated turn (Wikipedia).
- **adjustable**: no: to change a connection, unwrap it and wrap again (Nuts and Volts).
- **play_and_precision**: not applicable
- **access_needed**: end of a tube or shaft: the tool's centre hole must slide down over the free tip of the post, so the post must stick out (usually through the back of the board) with room round it for the tool bit (MIL-STD-1130C §5.3.3: post spacing 'shall allow sufficient room to accommodate the wrapping tool').
- **materials**: Posts: premium posts are hard-drawn beryllium copper with gold plating; cheaper ones are bronze with tin plating (Wikipedia); MIL-STD-1130C allows gold over nickel or tin-lead plating and forbids silver underplating (§5.2.5); ECSS lists copper and nickel alloys such as brass, phosphor bronze, nickel silver, beryllium copper, Monel and nickel-clad copper (ECSS-Q-ST-70-30C §5.2.2.1). Wire: single-strand (solid) round wire only (MIL-STD-1130C §1.1), normally 30 AWG (0.25 mm) silver-plated soft copper with Kynar (PVDF) or Tefzel (ETFE) insulation (Wikipedia; Nuts and Volts); one data sheet gives 30 AWG Kynar wire a 0.0195 in (0.5 mm) outside diameter and -60 to +105 °C rating (Talmir data sheet). Larger sizes (28-18 AWG) exist for bigger posts but are hard to buy as a hobbyist (Nuts and Volts). Round component leads are a poor fit: wire wrap 'is designed for posts with sharp corners' (Nuts and Volts). Stranded wire can't be wrapped ⚑ [uncertain: implied by the 'single, solid, round wire' scope of MIL-STD-1130C, not stated as a ban]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: a hand tool, sockets and wire are cheap and the knack takes a few practice wraps, much like soldering (Nuts and Volts); the hard parts are finding long-post sockets and keeping a large board's wiring organised and checked, and a printed tool needs a fine nozzle (Hackaday 2024).

### Making it

- **processes**: 
  - off-the-shelf part: wire-wrap sockets, headers, posts, wire and tools are bought
  - 3D print (FDM): the hand wrapping tool can be printed (Thingiverse and Printables models in make_it_yourself), as can board holders, wire organisers and enclosures
  - 3D print (resin): Hackaday suggests an SLA printer is 'probably a good idea' for the tool's fine wire channel (Hackaday 2024)
- **print_in_place**: no: the joint is metal wire on a metal post; only the hand tool and holders are printed (and a printed tool is a single solid part, not a mechanism).
- **making_tips_3d_printing**: The connection itself can't be printed, but printing helps around it. 1) Printed wrap tools: the bit needs a centre hole for the post and a small off-centre hole or side channel for the wire; designs with a side channel stop the wire tangling and snagging (Hackaday 2024). Tolerances matter, so use a 0.2 mm nozzle on FDM or a resin printer (Hackaday 2024); one Printables designer recommends 0.12-0.2 mm layers, PLA or PETG, a slightly reduced extrusion width on a 0.4 mm nozzle, no supports and a brim so the thin tool doesn't fall over (Printables 977002); another prints at 0.1 mm layers and says to scale the model for other wire sizes (Printables 1072612). Printed tools don't include a stripper or an unwrap end (Hackaday 2024), and cheap tools with sloppy tolerances give poor wraps (Hackaday 2024), so test-wrap and inspect. 2) Hand-wired keyboards are a popular modern use; makers have printed small wrap tools for wiring keyboard switches and diode legs (Thingiverse 4273748, 5892385; Printables 977002). 3) Enclosures and mounts: wrap posts stick out from the back of the board, so mount it on standoffs long enough to keep the post tips off the case: 5/8 in (16 mm) or longer clears three-level posts (Nuts and Volts). 4) Wire routing: leave slack and route the longest wires first so the short ones hold them down (Nuts and Volts); tie or clip long wires down every 50-75 mm against vibration (ECSS-Q-ST-70-30C §5.3.4e), e.g. with printed clips; never route wire over the post tips (ECSS §5.3.4d). 5) Keep the soldering iron or hot-air gun away from printed parts and the wrap posts; ECSS forbids adding solder to posts that carry wraps (ECSS §5.3.2.1e).
- **off_the_shelf_parts**: Wire-wrap IC sockets (DIP and SIP) with long square posts, sold as two-level or three-level (the number of wraps the post will take) (Nuts and Volts); wire-wrap pin headers and single wire-wrap pins that press into perfboard (Nuts and Volts); ordinary 2.54 mm pin headers also have 0.64 mm square pins (Wikipedia 'Pin header') and can take a wrap if long enough (SparkFun used male headers); 30 AWG Kynar wire-wrap wire on rolls or pre-cut with 1 in stripped ends (Nuts and Volts; Wikipedia); hand wrap/strip/unwrap tools such as WSU-30 (regular) and WSU-30M (modified) (OK Industries / Jonard Tools, brand), squeeze-ratchet, battery and electric wrap guns with interchangeable bits and sleeves, and 'modified' bits that also wrap 1.5 turns of insulation (Nuts and Volts; Hackaday 2024); wire dispensers that cut and strip; slip-on 'Wrap-ID' labels for reading pin numbers from the back of the board (Hackaday 'Wire Wrap 101'). Search terms: 'wire wrap socket', 'wire wrap wire 30 AWG Kynar', 'wire wrap tool WSU-30M', 'wire wrapping bit modified'.
- **rules_of_thumb**: 
  - Number of turns of bare wire: at least 7 for 30 and 28 AWG, 6 for 26 AWG, 5 for 24 and 22 AWG and 4 for 20 and 18 AWG; a Class A ('modified') wrap adds at least half a turn of insulated wire touching at least three corners of the post (MIL-STD-1130C Table III, §3.2). ECSS asks for 7 + 3/4, 7 + 3/4, 6 + 3/4 and 5 + 3/4 turns (bare + insulated) for 30, 28, 26 and 24 AWG (ECSS-Q-ST-70-30C Table 5-2). Wikipedia gives 7 turns plus 0.5-1.5 insulated turns for 30 and 28 AWG, and says a hand tool typically lays 7-9 bare turns over 1.5-2 insulated turns. Hobby articles quote fewer: 'between 5-6 turns', and 'a good wrap has 3-4 turns' (Bil Herd, Hackaday 'Wire Wrap 101'), or 'about five complete turns' (Hackaday 2018); go by the standards.
  - Strip about 1 in (25 mm) of insulation for a 30 AWG hand-tool wrap (Nuts and Volts; SparkFun; Hackaday 'Wire Wrap 101'); pre-cut wires come with 1 in stripped at each end (Wikipedia).
  - Wire size must match the post: 30-26 AWG on 0.025 in (0.64 mm) square posts; 22, 20 and 18 AWG are 'not recommended' on 0.025 in posts, and 30 and 28 AWG not on the larger 0.045 in posts (MIL-STD-1130C Table III note; ECSS-Q-ST-70-30C Table 5-1). Hobby hand tools are for 30 AWG only; a mismatched bit gives a loose wrap (Nuts and Volts).
  - Usual posts are 0.025 in (0.64 mm) square, 1 in (25.4 mm) long and spaced at 0.1 in (2.54 mm) (Wikipedia); a post takes up to three wraps (Wikipedia; ECSS §5.3.2.2). Minimum wrappable length on the post for 30 AWG: 0.185 in for one wrap, 0.320 in for two and 0.455 in for three (MIL-STD-1130C Table I); ECSS gives 4.7, 8.2 and 11.6 mm (ECSS Fig. 5-1).
  - Turns must lie close: the gap between neighbouring bare turns must not exceed half the wire's diameter, and all gaps together not more than one wire diameter (first and last turns excepted); turns must not overlap; the cut end ('end tail') must not stick out more than one wire diameter (MIL-STD-1130C §5.3.2, §5.3.2.1; ECSS-Q-ST-70-30C Fig. 5-3, §5.3.3).
  - Quality targets: minimum strip force 2.0 lb (30 AWG), 3.0 lb (28), 4.0 lb (26) and 5.0 lb (24 AWG) on 0.025 in posts (MIL-STD-1130C Table IV); ECSS gives 20 N for 30 AWG and 25 N for 28 and 26 AWG on 0.64 mm posts (ECSS Table 5-3). Voltage drop across a wrap no more than 4 mV at 1 A for 30 AWG (MIL-STD-1130C §5.6.4, Table V); ECSS: connection resistance of a single wrap no more than 2 mΩ (ECSS §5.5.3.4).
  - Position the wire before wrapping so that the way it is later routed doesn't tend to unwrap the connection (MIL-STD-1130C §5.3.1.1, §5.3.2.1g); route wires so they don't press on post corners hard enough to cut the insulation (ECSS-Q-ST-70-30C §5.3.4a).
  - Leave slack: avoid 'banjo string tight' wires, leave enough for a re-strip and re-wrap, and if a pre-cut wire looks just long enough, use the next size up (Nuts and Volts).
  - Rework: unwrap with an unwrap tool, never pull the wrap off; a post can be re-wrapped 'up to 3 times, using copper alloy wire, or up to 5 times, using soft copper wire', with new wire each time (ECSS-Q-ST-70-30C Annex A.2; MIL-STD-1130C §5.5).

### When to use it

- **everyday_examples**: 
  - Old telephone exchange equipment: wire wrap was invented to wire Bell System crossbar switches (Wikipedia, with a photo of a crossbar switch)
  - Backplanes of 1960s-1980s computers such as the IBM 1401, PDP-8 and Z80 systems, with 'bed of nails' rows of posts (Wikipedia; Wikimedia Commons category 'Wire wrapping'; EE World 'Before the Dinosaurs, there was Wire-Wrap…')
  - A modern compact fluorescent lamp, where the lamp's wires are wrapped onto pins (Wikipedia photo 'Wire wrap in OSRAM CFL')
  - Hobby retro-computer builds and hand-wired computer keyboards (Hackaday 'wire wrap' tag; Thingiverse 4273748, 5892385)
- **when_to_use**: For one-off digital prototypes with many connections, where designing a printed circuit board is too slow and loose jumper wires are too messy: 'It's relatively fast, reliable, simple, solderless, inexpensive, and easy to learn' and 'ideal for complex one-of-a-kind circuits' (Nuts and Volts). When you expect to change the wiring: a wrap unwinds in seconds and can be redone, and modifications can be added on the post's third level (Nuts and Volts; ECSS-Q-ST-70-30C §5.3.2.2). Where vibration or temperature changes would crack solder: wire wrap is 'very stable when exposed to temperature changes, corrosive atmospheres, humidity, and vibration', and 'stronger than a solder connection' (Nuts and Volts). Where heat must be avoided or no iron is to hand, e.g. field repairs (Make 2009). For wiring many signals in tight spaces, e.g. hand-wired keyboards and repair jumpers with 30 AWG wire-wrap wire (Hackaday 'Wire Wrap 101').
- **when_not_to_use**: Not for anything carrying real power or more than about 1 A: use heavier wire with soldered, crimped or screw-terminal joints (Nuts and Volts; SparkFun). Never for mains voltage (see safety_notes): use a listed connector such as a Screw terminal, Spring-clamp wire connector or Twist-on wire connector, fitted to local rules. Not onto round component leads or stranded wire: the wrap needs a square post and solid wire (MIL-STD-1130C §1.1, §4.1); Nuts and Volts adds a drop of solder when wrapping onto round leads. Not for analogue, sensitive or very fast circuits: the wires cause cross-talk, radiate interference, have unpredictable impedance and can't give ground and power planes (Wikipedia, citing Horowitz and Hill); use a PCB. Not with surface-mount parts unless on adapter boards: surface-mount technology has made wire wrap 'comparatively much less useful' (Wikipedia). Not for several identical boards: a PCB is better for repeats (Nuts and Volts). For a quick temporary test, a solderless breadboard is faster; for a lasting one-off where sockets are unwanted, a Soldered wire joint on stripboard or perfboard is cheaper (Wikipedia: sockets 'are an additional cost' and 'add size and mass').
- **environment_limits**: Heat: set by the wire insulation; 30 AWG Kynar wire is rated about -60 to +105 °C (Talmir data sheet; Allied Wire & Cable KYN30-1, 'maximum temperature of 105°C'). Humidity and corrosion: good, because the contact is gas-tight and any corrosion forms 'on the outside of the wire, not on the gas-tight contact' (Wikipedia; Nuts and Volts). Vibration: good if a 'modified' wrap (insulated turn) is used, since 'the turn and a half of insulated wire helps prevent wire fatigue where it meets the post' (Wikipedia); long wires should be tied down every 50-75 mm 'to reduce resonance in the wire during vibration' (ECSS-Q-ST-70-30C §5.3.4e); space assemblies may be wax-coated, never epoxy-potted, so they stay repairable (Wikipedia). Ageing: the wrap does not loosen by itself in normal use (Nuts and Volts: stable under temperature changes) ⚑ [uncertain: no long-term test data opened]. Chemicals: Kynar insulation 'is resistant to cut-through and many chemicals' (Allied Wire & Cable). *(⚑ parts need confirming)*
- **safety_notes**: LOW VOLTAGE ONLY: wire wrap is a prototyping and signal-wiring method with very thin wire and thin insulation; this entry gives no mains wiring steps, and mains work must follow local law. In US workplaces, for example, OSHA requires conductors to be 'spliced or joined with splicing devices identified for the use' and every joint covered with insulation equivalent to the wire's (29 CFR 1910.303(c)(3)(i)); wire-wrapped posts are bare. HEAT: overloaded 30 AWG wire gets hot; SparkFun warns it 'is not able to handle a lot of power'. SHARP POINTS AND OFFCUTS: posts are sharp-cornered pins that stick out of the back of the board, and the ECSS standard requires that workers are not 'exposed to hazards such as electric shock, cutting edges, sharp points' (ECSS-Q-ST-70-30C §5.1.1); snipped wire ends are tiny and sharp ⚑ [uncertain: no source opened on offcuts]. Bare posts on the back of a board can short against a metal case, so mount it on standoffs (Nuts and Volts). Don't strip wire with your teeth ('PSA: using your teeth is not recommended', Hackaday 2024). AIR TOOLS: air-powered wrap guns go on a 'regulated, lubricated and filtered air supply' and are disconnected when not in use (ECSS §5.1.1b). *(⚑ parts need confirming)*
- **common_failures**: Insufficient turns: the stripped end wasn't pushed all the way into the bit (Nuts and Volts; MIL-STD-1130C Fig. 8). Loose wrap or 'pigtail': the bit doesn't match the wire size (Nuts and Volts). Overwrap (turns piled on each other): too much downward pressure on a power tool; let the tool do the work (Nuts and Volts; MIL Fig. 10). Open or spiral wrap (gaps between turns): the power tool was lifted off before the wrap finished (Nuts and Volts; MIL Figs 11-12). No insulated turn: wire fatigue and breakage at the post under vibration; use a 'modified' bit (Wikipedia; Nuts and Volts). Nicked or broken wire from a general-purpose stripper (Nuts and Volts; ECSS §5.3.1). Insulation cut through where a tight wire presses on a neighbouring post's corner, causing a short (ECSS §5.3.4). Wrap pushed onto the bevelled post tip, or wraps overlapping a lower wrap (ECSS §5.3.2.2, Fig. 5-4). Damaged post corners from careless handling or unwrapping, which spoil later wraps (ECSS §5.2.2.3, §5.1.3.4). Posts that twist while wrapping: stackable female headers 'can twist with the wire wrap tool' (SparkFun); posts must not rotate (MIL-STD-1130C §5.3.1.2). Wrong pin wired because the pin numbers are mirrored when seen from the back of the board; slip-on labels help (Hackaday 'Wire Wrap 101'). Wiring mistakes are slow to find on big boards: 'Debugging was an absolute nightmare' (Hackaday 2023 reader comment). Noise and cross-talk in analogue or fast circuits (Wikipedia; Hackaday 'Wire Wrap 101' on routing power and ground together). Adding solder on top: SparkFun and Nuts and Volts suggest a drop of solder for extra security (Nuts and Volts only on round leads), but ECSS forbids solder on posts that carry wraps (ECSS §5.3.2.1e), and it makes unwrapping harder ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Soldered wire joint (soldered splice): permanent and works on round leads and stranded wire, but needs heat and is harder to undo
  - Wire-to-board plug connectors (pin header and crimp housing): crimped sockets that push onto the same 0.64 mm square header pins and unplug in a second
  - Crimped butt splice and Crimp terminals: also cold, gas-tight metal-to-metal joints, but squeezed with a crimp tool and permanent
  - Insulation-displacement connector (IDC, ribbon-cable plug, punch-down): also solderless; blades cut through the insulation, and punch-down blocks replaced wire wrap in much telephone wiring ⚑ [uncertain]
  - Screw terminal (terminal block): for heavier wires and higher currents, undone with a screwdriver
  - Spring-clamp wire connector (lever connector): tool-free and reusable, but bulky and for heavier wire
  - Pogo pin (spring-loaded contact pin): a temporary pressed contact for test fixtures, not a lasting joint
  - Binding knots and seizings (cable lacing): the traditional way to tie the bundles of wires in a wired frame or loom
  - Solderless breadboard and stripboard (not separate entries): breadboards are quicker and fully reusable but their spring contacts are loose; stripboard needs soldering (Wikipedia 'Wire wrap' see-also) *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Wire Wrap 1.jpg (Wikimedia Commons, by Shri Hari Ram / Bullygram)](https://commons.wikimedia.org/wiki/File:Wire_Wrap_1.jpg): Close-up of wire-wrapped connections on an 8051 (AT89S51) development board, with coloured wires coiled on square posts *(licence: CC BY-SA 4.0)*
  - [Wire wrap tool.jpg (Wikimedia Commons, by Amr Bekhit)](https://commons.wikimedia.org/wiki/File:Wire_wrap_tool.jpg): The working end of a hand wire-wrap tool: the off-centre hole for the wire and the centre hole for the post *(licence: Public domain)*
  - [Introduction to Wire Wrap (Hackaday, Bil Herd; video for the article 'Wire Wrap 101')](https://www.youtube.com/watch?v=IXvEDM-m9CE): Video walkthrough of wire-wrap tools, wire, sockets and demonstrations of wrapping *(licence: link only (YouTube))*
  - [Wire Wrap Is Alive And Well! (Russ Shumaker, Nuts and Volts)](https://www.nutsvolts.com/magazine/article/wire_wrap_is_alive_and_well): Illustrations (with OK Industries' permission) of the gas-tight corner contact, regular vs modified wraps, hand and power tools, two- and three-level sockets, and pictures of each wrapping fault (overwrap, open/spiral wrap, insufficient turns, loose wrap) *(licence: link only)*
  - [MIL-STD-1130C Connections, Electrical, Solderless Wrapped (US DoD, 2012; copy hosted by RF Cafe, downloaded from everyspec.com)](https://rfcafe.com/references/electrical/pdf/MIL-STD-1130C.pdf): Line drawings of Class A and Class B wraps on a square post (Fig. 1), the wrapping process (Fig. 4) and every rejection fault (Figs 5-12), plus the strip-test fixture *(licence: US government standard; generally public domain in the US ⚑ [uncertain])* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Wire Wrap Tool by DieKatzchen (Thingiverse)](https://www.thingiverse.com/thing:5892385): Printable hand wire-wrap tool with a side wire channel, slim enough to reach into small spaces; made for wiring the LucidVR glove (named in Hackaday 2024 as one of the better printed designs) *(licence: CC BY 4.0)*
  - [Wire wrap tool — Stupid tool, the original by 4sStylZ (Thingiverse)](https://www.thingiverse.com/thing:4273748): Large printable wrap tool made for bending diode legs round keyboard switch pins in hand-wired keyboards; scale it for other sizes *(licence: CC BY 4.0)*
  - [Simple wire wrap tool (RINZLER, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/977002-simple-wire-wrap-tool): Compact printable wrap tool for electronics and hand-wired keyboards, with print settings (0.12-0.2 mm layers, PLA/PETG, no supports) *(licence: GNU GPL v2.0)*
  - [Super Simple Wire Wrapping Tool (Red Dot Geek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1072612-super-simple-wire-wrapping-tool): Very small printable wrap tool for 22-24 AWG wire, printed at 0.1 mm layers; can be scaled for other wire sizes or remixed as a hex driver bit *(licence: CC0 (Public Domain))*
  - [Wire wrapping tool head (Chip, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/115486-wire-wrapping-tool-head): Printed wire-wrap bit that fits a multi-bit screwdriver handle *(licence: CC BY)*
- **diagram_idea**: Three panels: (1) the tool's end with a stripped wire in the off-centre hole and the square post entering the centre hole; (2) the finished wrap from the side, showing 1.5 insulated turns at the bottom (strain relief) and 7 bare turns above, with 'regular' and 'modified' versions side by side; (3) a cross-section through one turn showing the four post corners biting into the round wire, with the gas-tight contact spots highlighted and the oxide pushed aside.
- **sources**: 
  - https://en.wikipedia.org/wiki/Wire_wrap
  - https://en.wikipedia.org/wiki/Pin_header
  - https://rfcafe.com/references/electrical/pdf/MIL-STD-1130C.pdf
  - https://ecss.nl/wp-content/uploads/standards/ecss-q/ECSS-Q-ST-70-30C31July2008.pdf
  - https://www.nutsvolts.com/magazine/article/wire_wrap_is_alive_and_well
  - https://learn.sparkfun.com/tutorials/working-with-wire/how-to-use-a-wire-wrap-tool
  - https://makezine.com/article/technology/lost-knowledge-wire-wrapping/
  - https://hackaday.com/2024/09/22/3d-printing-a-wire-wrap-tool-emergency-fix-or-permanent-solution/
  - https://hackaday.com/2018/05/04/ask-hackaday-whatever-happened-to-wire-wrapping/
  - https://hackaday.com/2014/12/18/wire-wrap-101/
  - https://hackaday.com/tag/wire-wrap
  - https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  - https://www.eeworldonline.com/dinosaurs-wire-wrap/
  - https://www.talmir.co.il/gallery/1505412469.pdf
  - https://www.awcwire.com/product/kyn30-1
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
  - https://www.youtube.com/watch?v=IXvEDM-m9CE
  - https://commons.wikimedia.org/wiki/File:Wire_Wrap_1.jpg
  - https://commons.wikimedia.org/wiki/File:Wire_wrap_tool.jpg
  - https://commons.wikimedia.org/wiki/File:Manual_wire_wrap_tool_and_wire_wrap_wire_in_various_colours.jpg
  - https://commons.wikimedia.org/wiki/Category:Wire_wrapping (file list read via the Commons API)
  - https://www.thingiverse.com/thing:5892385
  - https://www.thingiverse.com/thing:4273748
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: up to about 3 A
- **tools**: soldering iron, sewing or leather tools, hand tools
- **load_max**: light ⚑ *needs confirming (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, links, materials, related, safety_notes

