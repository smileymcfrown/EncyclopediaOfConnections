# adhesives & bonding: Glues (types, by material and use)

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 137 Cyanoacrylate (superglue)

*adhesives & bonding.* A runny or gel glue that sets in seconds by reacting with moisture; strong on tight-fitting plastics, metal and wood but brittle and weak in peel

### What it is

- **plain_name**: A runny or jelly-like 'instant' glue that grabs in seconds when two close-fitting parts are pressed together, because the moisture on their surfaces makes it harden; very strong when you pull or slide the parts, but brittle, so it can crack if you peel, bend or knock the joint
- **term**: Cyanoacrylate adhesive (CA glue, instant adhesive)
- **aliases**: 
  - superglue, super glue, CA glue, CA (Wikipedia; Prusa)
  - instant glue, instant adhesive, power glue (Wikipedia)
  - Super Glue, Krazy Glue (brands; Wikipedia), Loctite Super Glue / Super Bonder (brands; Wikipedia), Zap, Zap-a-Gap (brands; thisTOthat)
  - Eastman 910, Permabond 910 (brands; the original formula, named because it set in 9 to 10 seconds, per Permabond)
  - ethyl cyanoacrylate (ECA), methyl cyanoacrylate (MCA); n-butyl and 2-octyl cyanoacrylate for medical 'skin glue', e.g. Dermabond (brand) (Wikipedia)
  - thin (water-thin, wicking), medium and thick or gel CA; rubber-toughened (usually black) CA; odourless or low-bloom, 'foam-safe' CA; surface-insensitive CA (Prusa; Loctite design guide)
  - Sekundenkleber (German; Hackaday)
  - nail glue (cosmetic use; Wikipedia)
- **family**: adhesives & bonding
- **one_liner**: Cyanoacrylate (superglue) is a one-part liquid glue that hardens in seconds in a thin film between tight-fitting parts, triggered by traces of moisture, giving a strong but brittle bond on most plastics, metal, rubber and wood.
- **complexity**: Single piece: one liquid or gel, no mixing. Optional helpers: an accelerator (activator) spray to make it set instantly, a primer that lets it stick to polyethylene and polypropylene, and a debonder that dissolves it (Loctite design guide; Prusa).
- **how_it_works**: The glue in the bottle contains a weak acid that keeps it liquid. Almost every surface carries a trace of water, and when the glue is squeezed into a thin film between two parts that water neutralises the acid and sets off a very fast chain reaction (anionic polymerisation) that links the small liquid molecules into long, solid plastic chains (Loctite design guide; Wikipedia). Because the reaction starts at the surfaces, thin layers bond well and thick blobs or wide gaps set slowly and weakly (Wikipedia: 'Thin layers bond effectively, thick layers much less so'; Loctite: 'limited gap cure'). It grabs within seconds to about a minute and reaches full hardness over 8-24 hours (Prusa; 3M CA100 data sheet: handling strength in 20-70 s). The result is a hard, glassy plastic: strong in shear and tension, but brittle, with poor peel strength (Loctite design guide).

### Finder attributes

- **job**: glue or bond: joins parts permanently in seconds, join and hold: also used to 'tack' parts in position quickly while a slower, tougher glue such as epoxy sets (Wikipedia; Prusa)
- **motion**: none: a rigid joint with no movement
- **degrees_of_freedom**: 0: the glued parts are locked together
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks are setting in seconds without mixing or clamping, wicking by itself into a tight crack when a thin grade is dripped on the seam (capillary action), and being partly reversible: acetone or a debonder softens it so parts can be separated (Prusa; thisTOthat; Wikipedia)
- **holding_principle**: material bond (glue, solvent or melting): the cured glue sticks to both surfaces
- **input_output**: not applicable
- **power**: passive (no power needed): it cures by itself at room temperature from surface moisture; accelerators or UV-curing versions only speed this up (Loctite design guide; Permabond).
- **removability**: semi-permanent (can be undone but may damage parts): acetone, some nail-polish removers or a commercial debonder soften cured CA so a model can be taken apart 'with little or no damage'; test first, as some debonders also attack plastic. Cooling the part in a freezer makes CA brittle enough to snap joints apart (Prusa; Wikipedia).
- **reuse_cycles**: once: the glue itself can't be reused; to redo a joint, clean off the old glue and apply fresh
- **tools_needed**: The glue (a nozzle, precision tips or a cocktail stick for small amounts), sandpaper and isopropyl alcohol to prepare surfaces, and optionally accelerator spray, primer (for PE, PP and similar plastics) and debonder or acetone for clean-up (Prusa; Loctite design guide; 3M CA100 data sheet). Clamps are rarely needed. Wear non-cotton gloves: cotton reacts dangerously with CA (Wikipedia).
- **seal**: none: it is not a sealant. Ordinary CA has only 'weak' resistance to moisture, although special water-resistant grades exist (Wikipedia; Permabond).
- **load**: medium: in a tight lap joint general-purpose CA is very strong in shear and tension: Loctite's tests reached more than 24 MPa on ABS and about 28 MPa on nylon 6, often breaking the plastic before the glue, and Prusa measured about 10-13 MPa pulling apart glued PLA, PETG and ASA test prints (Loctite design guide; Prusa). It is weak in peel and impact, and hobby testers find parts 'much easier twisted or peeled than pulled apart' (Prusa; Loctite: 'poor peel strength'). Without a primer it holds almost nothing on polyethylene or polypropylene (about 0.3-1 MPa) (Loctite design guide). *(unverified parts omitted)*
- **adjustable**: no: it grabs in seconds, and moving the parts after that weakens the bond; if the fit isn't right within a few seconds, clean off the glue and start again (Prusa).
- **play_and_precision**: not applicable (nothing moves). It needs close-fitting parts: cyanoacrylate grades cover gaps of about 0.015-0.5 mm, with water-thin grades for the tightest joints and gels for the largest (Permabond); a thick 3,000 cP grade fills gaps up to 0.020 in (0.5 mm) (3M CA100 data sheet).
- **access_needed**: not applicable: glue is put on the joint faces before assembly, or a thin grade is dripped along the seam of parts already held together, from one side (thisTOthat; Prusa).
- **materials**: Bonds well: most rigid plastics including ABS, ASA, PLA, PETG, PET, nylon, polycarbonate, PVC and resin prints; rubber; metals when clean and tight-fitting; wood (surface-insensitive grades cure better on acidic surfaces such as wood); ceramics; leather and natural fibres (but see the heat warning below); TPU if the parts are stiff enough (Loctite design guide; Prusa; Wikipedia; Permabond). Poor or needs a primer: polyethylene (PE), polypropylene (PP), PTFE and acetal (POM), where primers can raise bond strength up to 20 times (Loctite design guide). Other problems: glass (poor long-term durability, Loctite); very smooth glass, ceramic or metal can be difficult (Prusa); expanded polystyrene foam is melted by ordinary CA, so use foam-safe CA (Prusa); clear styrene can turn brittle, and acrylic, polycarbonate, ABS and PVC can crack from uncured CA under stress, so test first (Prusa; Loctite stress-cracking table); cotton, wool and leather react in a fast, hot reaction when soaked with CA (Wikipedia).
- **maker_difficulty**: easy: no mixing and it sets in seconds. The main difficulties are lining parts up before it grabs, keeping it off fingers, and making the parts fit closely enough (Prusa).

### Making it

- **processes**: 
  - off-the-shelf part: bottles, tubes and pens of thin, medium and gel CA, plus accelerator sprays, primers and debonders
  - 3D print (FDM): gluing printed parts together, filling seams and small repairs (Prusa)
  - 3D print (resin): bonds resin prints almost instantly (Prusa)
  - woodwork: thin CA as a hard, glossy finish (e.g. on turned pens), and mixed with sawdust to fill cracks (Wikipedia)
  - CNC: as a temporary hold, e.g. gluing a workpiece to a sacrificial block on a lathe and breaking it off afterwards (Wikipedia)
  - model making and electronics: models, miniatures, and tacking wires in place (Wikipedia; Loctite design guide)
- **print_in_place**: no: it is a glue for joining separately printed parts, although you can design pins, keys and flat mating faces into the prints to make gluing easier.
- **making_tips_3d_printing**: 1) Make the mating faces flat and close-fitting: CA fills only small gaps (about 0.015-0.5 mm, Permabond), so sand faces flat, remove sanding dust, grease and old glue (Prusa), and wipe with isopropyl alcohol (3M CA100 data sheet). A slightly rough or layered surface helps it grip (Prusa). 2) Use only a little and spread it on one face; press and line up within a few seconds. If it isn't right, pull apart, clean off and restart rather than wiggling it (Prusa; thisTOthat). 3) For clean joints, hold the parts together and run water-thin CA along the seam so it wicks in by capillary action, but on rough FDM prints it can also run along layer lines and fingerprints and spoil the surface (Prusa). 4) For gaps or poorly fitting prints, use gel CA (it sets a little slower, which also gives more time to align, but is slightly weaker and frosts more), or mix CA with talc, microballoons or baking soda as a quick filler (Prusa; Wikipedia). 5) Accelerator sets it instantly, but the faster reaction gives off more heat, which can slightly warp low-temperature plastics like PLA; use a light mist (Prusa). 6) Stop white 'frosting' (blooming) with good ventilation: don't shut freshly glued parts in a box, and use odourless / low-bloom CA on clear or visible parts (Prusa; Loctite design guide). 7) Design joints to be loaded in shear or compression, not peel: overlapping or stepped joints, pins and keys; make the joint wider rather than longer, because the ends of an overlap take most of the load (Loctite design guide). 9) Soaking prints in thin CA to make them stronger barely helps: CNC Kitchen's hooks went from about 53 kg to 58 kg (Hackaday). 10) Keep bottles clean and upright, work from a small puddle on a non-porous scrap, and let refrigerated, unopened bottles warm up before opening (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for 'cyanoacrylate adhesive', 'CA glue' or 'instant adhesive' in thin (low viscosity, wicking), medium, thick and gel grades; 'rubber-toughened CA' for impact and peel; 'surface-insensitive CA' for wood and acidic surfaces; 'low-odor / low-bloom' or 'foam-safe' CA; 'water-resistant' and 'high-temperature' CA; 'CA accelerator' or 'activator' spray; 'polyolefin primer' (e.g. Loctite 770, brand) for PE and PP; 'CA debonder'; and replacement 'precision tips' for bottles (Loctite design guide; Permabond; Prusa). Industrial ranges include Loctite 401 / 414, 3M Scotch-Weld CA100 and Permabond 910 (brands).
- **rules_of_thumb**: 
  - Keep the glue line thin: 'thin layers bond effectively, thick layers much less so' (Wikipedia). Cyanoacrylate grades fill gaps of about 0.015-0.5 mm (0.006-0.02 in), gels at the top of that range (Permabond 'About Cyanoacrylate Adhesives'; 3M CA100 data sheet: up to 0.020 in).
  - Handling strength comes in seconds to about a minute (3M CA100: 20-70 s; Permabond 910 sets in 9-10 s), but full hardness takes 8-24 hours (Prusa 'The Great Guide to Gluing and Assembling 3D Prints').
  - Design for shear and compression, avoid peel and cleavage, and make an overlap joint wider rather than longer (Loctite 'Design Guide for Bonding Plastics', vol. 6, pp. 77-79).
  - Accelerator is applied to one surface first; its solvent needs 10-60 s to evaporate and the active part stays effective for 1 minute to 72 hours (Loctite design guide, p. 6).
  - Polyolefin primer can raise CA bond strength on hard-to-bond plastics up to 20 times; e.g. on low-density polyethylene general-purpose CA gave about 1.0 MPa and primed CA about 3.5 MPa, and on polypropylene primed CA typically broke the plastic (Loctite design guide, pp. 6, 51, 63).
  - Heat: ordinary CA reportedly keeps about 50% of its strength at 80 °C and 20% at 100 °C, while heat-resistant grades keep 80% at 120 °C (Prusa). A general industrial grade is rated for 100 °C long term and -54 °C (3M CA100); special grades reach 200-250 °C (Permabond).
  - Shelf life: about one year unopened and one month once opened (Wikipedia). Store unopened glue cold (2-8 °C per the Loctite design guide; 4 °C or below per 3M), never refrigerate an opened bottle, and let it reach room temperature before opening to avoid condensation (Wikipedia; Prusa).
  - In Prusa's quick one-sample pull test on printed PLA, PETG and ASA, good CA glues reached about 10-13 MPa, more than two 5-minute epoxies (about 2-6 MPa) (Prusa).

### When to use it

- **everyday_examples**: 
  - The small tube of 'super glue' used for quick household and model repairs (Wikipedia)
  - Nail glue for artificial nail tips (Wikipedia)
  - Hospital 'skin glue' used to close small cuts instead of stitches, e.g. Dermabond (brand) (Wikipedia)
  - Model aircraft, miniatures and aquarium coral fragments glued to rock (Wikipedia)
- **when_to_use**: Use CA for small, well-fitting parts that you want joined right now: snapping a broken printed part back together, assembling multi-part prints and models, gluing small rubber parts, fixing small plastic, metal, wood or rubber parts, and tacking parts in place while a slower glue cures (Prusa; Wikipedia). It works on almost all common printing plastics (PLA, PETG, ASA, ABS, resin) and is often the strongest simple option for them (Prusa; Loctite design guide). Water-thin CA is ideal for dribbling into a tight crack; gel CA for vertical surfaces and slightly gappy joints (Prusa).
- **when_not_to_use**: Avoid it for loose-fitting or gappy joints and large areas: use two-part epoxy, which fills gaps and gives more working time. Avoid it for joints that will be peeled, bent, twisted or knocked: use rubber-toughened CA, epoxy or a flexible adhesive (Loctite design guide; Prusa). Don't use it on polyethylene or polypropylene without a primer (Loctite design guide), on expanded polystyrene foam unless it's foam-safe CA, or on clear parts where frosting would show (use odourless CA or UV-curing glue) (Prusa). Avoid it where parts get hot (e.g. near an extruder), stay wet or are outdoors in freezing weather; use epoxy, high-temperature or water-resistant grades, or screws (Prusa; Wikipedia). For ABS or ASA, solvent welding with acetone fuses the plastic itself (Prusa). If you may need to take it apart, use screws, magnets or threaded inserts (Prusa).
- **environment_limits**: Heat: ordinary CA reportedly keeps about 50% of its strength at 80 °C and only about 20% at 100 °C (Prusa); industrial grades are rated around 100 °C long term (3M CA100), and heat-resistant grades up to 120-250 °C (Permabond; Prusa). Heating cured CA breaks it down into irritating gases (Wikipedia). Cold: CA 'becomes brittle when frozen, so it's not suitable for outdoor use in temperate/arctic climates' (Prusa). Water: traditional CA has 'weak' resistance to moisture and heat (Wikipedia), but water-resistant grades keep 75% of their strength after 1,000 hours in 60 °C water (Permabond 712). Chemicals: poor solvent resistance, and acetone dissolves it (Loctite design guide; Wikipedia). Glass bonds lose strength over time (Loctite). Unused glue thickens and goes off within months, faster once opened (Prusa; Wikipedia).
- **safety_notes**: It bonds skin in seconds: don't pull stuck skin apart; soak with warm soapy water, vegetable oil or acetone, and the glue comes away by itself within a few days (Wikipedia). If it gets in an eye, rinse with lukewarm water for 15 minutes and get medical help; nail-glue bottles have been mistaken for eye drops (Wikipedia). The fumes irritate eyes and nose, so ventilate; about 5% of people become sensitised to them after repeated exposure, with flu-like symptoms, and rarely asthma (Wikipedia; Prusa). Cotton, wool, leather and similar fibres react with CA in a fast, hot reaction that can cause burns or smoke, so never wear cotton gloves, and wipe nozzles with a non-cotton cloth (Wikipedia; 3M CA100 data sheet; Prusa). Accelerators make the reaction, and the heat, faster (Prusa). Heating cured CA, e.g. burning out a clogged metal nozzle, gives off irritating fumes (Wikipedia; Prusa).
- **common_failures**: The joint snaps when knocked, bent or peeled because cured CA is hard and brittle; design the joint for shear, or use rubber-toughened CA or epoxy (Loctite design guide; Prusa). Weak or slow bonds in gappy joints or thick blobs; improve the fit or switch to gel CA or epoxy (Wikipedia; Loctite). Parts that simply pop off polyethylene, polypropylene or acetal because nothing wets the surface; use a primer or another joining method (Loctite design guide). White frosting around the joint from fumes in still air (Prusa; Loctite). Cracking or crazing of acrylic, polycarbonate, ABS or clear styrene near uncured glue, especially where the plastic is under stress; use as little glue as possible and cure it quickly (Loctite design guide; Prusa). Weak bonds from old, thickened or cheap glue, or from repositioning after it has grabbed (Prusa). Thin glue wicking along layer lines and fingerprints and marking the print (Prusa). Accelerator heat slightly warping thin PLA parts (Prusa). Bonds on glass, or in wet or hot places, failing over time (Loctite; Wikipedia).
- **related**: 
  - Two-part epoxy: slower to set but fills gaps, handles knocks and peel better, bonds metal, wood and glass very well; usually weaker than CA on smooth plastics
  - Solvent welding (solvent cement): softens and fuses the plastic itself, e.g. acetone on ABS or ASA; doesn't work on PETG or PLA with hobby solvents (Prusa)
  - UV-curing adhesive: stays liquid until lit by UV, so there is time to line parts up; good for clear parts
  - Hot-melt adhesive (glue gun): fills gaps and is quick, but weak and softens with heat
  - Double-sided foam tape (pressure-sensitive adhesive): sticks on contact and stays flexible; good for mounting
  - Rubber-toughened CA: a CA variant with rubber added for better peel and impact strength (Loctite; Permabond)
  - Structural methacrylate (MMA) and polyurethane construction adhesives: scored highest on PETG in Cosel's long-term test (Hackaday)
  - Heat staking and plastic welding with a soldering iron: join printed parts by melting them together, no glue needed
  - Screws, threaded inserts and magnets: when the parts must come apart again (Prusa)

### Pictures, videos and models

- **links**: 
  - [The Great Guide to Gluing and Assembling 3D Prints (Prusa Research blog)](https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/): Photos of CA types and bottles, CA frosting (blooming) around a joint, glued printed models, and a table of pull-test results for CA, epoxy and solvent glues on PLA, PETG and ASA *(licence: link only)*
  - [Cyanacrylat polymerisation.svg (Wikimedia Commons, by Roland Mattern)](https://commons.wikimedia.org/wiki/File:Cyanacrylat_polymerisation.svg): Diagram of how cyanoacrylate molecules join into a polymer chain when triggered by water (hydroxide ions) *(licence: Public domain)*
  - [Super glue.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Super_glue.jpg): Photo of a tube of 'Super Glue' cyanoacrylate glue *(licence: CC BY-SA 3.0)*
  - [Adam Savage's Favorite Tools: Superglue and Glue Accelerators! (YouTube, Adam Savage's Tested)](https://www.youtube.com/watch?v=VZqf5rOJNCE): Video about using superglue and accelerators in a maker workshop (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing glues in torque, shear and tension; the designer sands glue faces with 80-grit, washes them, clamps and waits 5 days before testing with a hanging scale. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Glue Adhesion Strength Tester (TinkerTiger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/327466-glue-adhesion-strength-tester): Two printed testers glued face to face and pulled apart with a luggage scale; print flat or on their side to test different directions. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Glue Test Strips (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30133-glue-test-strips): Strips with flat faces and nesting hemispheres for testing glues on PLA; the designer's results favoured a 10-minute adhesive and gel superglue. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Baking soda and super glue test block (Jajaxjai, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1708768-baking-soda-and-super-glue-test-block): A small test block for trying the superglue-plus-baking-soda gap-filling trick. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
- **diagram_idea**: A cut-away of two close-fitting parts with a very thin glue film between them, arrows showing surface moisture starting the hardening from both faces inward, next to a thick blob in a wide gap that stays liquid in the middle; plus two small load sketches showing the joint strong when slid (shear) and weak when peeled from one edge.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cyanoacrylate
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://permabond.com/products/cyanoacrylate-adhesives/
  - https://multimedia.3m.com/mws/media/2365937O/3M-Scotch-Weld-Instant-Adhesive-CA100.pdf
  - https://www.thistothat.com/glue/cyan.shtml
  - https://hackaday.com/2025/01/30/comparing-adhesives-for-gluing-petg-prints/
  - https://hackaday.com/2019/12/28/stronger-3d-prints-glue-or-carbon-fiber/
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Cyanacrylat_polymerisation.svg
  - https://commons.wikimedia.org/wiki/File:Super_glue.jpg
  - https://www.youtube.com/watch?v=VZqf5rOJNCE

### Other info

- **Fields with unverified parts:** load, making_tips_3d_printing

## 138 Two-part epoxy

*adhesives & bonding.* A resin and hardener mixed together that set into a strong, gap-filling solid; slow or fast types, for metal, wood, most plastics and composites

### What it is

- **plain_name**: A glue that comes as two separate liquids or pastes that you mix together; over a few minutes to a day the mix hardens into a tough, strong plastic that sticks to almost anything and can also fill gaps and holes
- **term**: Two-part epoxy adhesive (epoxy resin and hardener)
- **aliases**: 
  - epoxy, epoxy glue, epoxy resin, polyepoxide (Wikipedia)
  - two-part epoxy, two-component epoxy, resin and hardener (curing agent) (Prusa; Loctite design guide)
  - 5-minute epoxy, quick-set or fast epoxy; 30-minute, slow-set or 24-hour epoxy (Wikipedia; Prusa)
  - structural adhesive, engineering adhesive (Wikipedia)
  - epoxy putty (a kneadable two-part stick), e.g. Milliput (brand) (Wikipedia 'Cyanoacrylate')
  - laminating, boat-building or 'marine' epoxy, e.g. WEST SYSTEM (brand) (Wikipedia; West System)
  - Loctite Epoxy / Hysol, Z-Poxy, J-B Weld, Araldite (brands; Loctite, Prusa, Wikipedia references)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: Two-part epoxy is a resin and a hardener that you mix in a set ratio; the mix reacts into a hard, tough plastic that bonds metal, wood, glass, composites and many plastics, fills gaps, and comes in fast (minutes) and slow (hours) types.
- **complexity**: A few parts: a resin and a hardener, sold in a double syringe or cartridge, two bottles or tins, or as a kneadable putty stick; plus disposable mixing tools and optional fillers (such as colloidal silica or microfibres) to thicken it for gaps (Prusa; Epoxyworks; West System).
- **how_it_works**: The resin contains reactive ring-shaped groups (epoxide rings) and the hardener contains chemicals, such as amines or mercaptans, that open those rings and bond to them; when the two are mixed they join into a tightly cross-linked network (a thermoset plastic) that can't melt again (Loctite design guide). The two parts react in fixed proportions, so the mix ratio must be right: adding extra hardener does not speed it up but leaves a mix that 'can never fully cure' (Epoxyworks; Loctite design guide). The reaction gives off heat, and warmth speeds it up, so a big lump in a cup sets much faster than a thin film (Epoxyworks). Because it cures all the way through by chemistry, not by air or moisture, it can fill gaps and thick sections (Loctite: 'excellent depth of cure'); it grips surfaces by soaking into their roughness and bonding to them, so clean, sanded surfaces matter (Prusa; Epoxyworks).

### Finder attributes

- **job**: 
  - glue or bond: joins parts permanently, including different materials such as metal to wood or plastic
  - join and hold: fixes screws, threaded rod, nuts and other hardware into holes and pockets (Epoxyworks: 404 filler for 'fastener bonding applications')
  - seal it, or pass cables or fluid through: can pot or encapsulate electronics and seal around parts (Loctite EA E-00CL data sheet: 'bonding, potting, or encapsulating')
- **motion**: none: a rigid joint with no movement (flexible epoxies exist, but still don't let parts move)
- **degrees_of_freedom**: 0: the glued parts are locked together
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks are filling gaps and building up missing material (it can be thickened with fillers and shaped), a choice of working time from minutes to over an hour by choosing the hardener, curing in thick sections, and being sandable, machinable and paintable once hard (Epoxyworks; West System; Loctite design guide)
- **holding_principle**: material bond (glue, solvent or melting): the cured epoxy sticks to both surfaces *(unverified parts omitted)*
- **input_output**: not applicable
- **power**: passive (no power needed): it cures by chemical reaction at room temperature; gentle heat only speeds it up (Loctite design guide; Epoxyworks).
- **removability**: permanent: cured epoxy does not dissolve; acetone or vinegar only loosen it enough to scrape or peel it off (Prusa: 'It does not dissolve like when using debonder on a CA glue').
- **reuse_cycles**: once
- **tools_needed**: Mixing tray or cup and a stick (or a mixing nozzle for cartridges); disposable gloves; sandpaper (80-grit aluminium oxide for wood, metal and fibreglass per Epoxyworks) and a solvent such as isopropyl alcohol or acetone for cleaning surfaces; clamps, tape or weights to hold parts still while it cures; optional fillers, a scale or metering pumps for accurate ratios, and a warm spot to speed curing (Epoxyworks; West System; Loctite EA E-00CL data sheet).
- **seal**: watertight: a joint or pocket completely filled with epoxy keeps water out, and epoxy is used for potting electronics (Loctite EA E-00CL) and for boat building and repair (Wikipedia). Moisture resistance varies a lot: marine epoxies form 'a high-strength, moisture-resistant solid' (West System 105/205), while a fast 5-minute type kept only 35% of its strength after 1,000 hours in water (Loctite EA E-00CL).
- **load**: heavy for a glue on metal, wood, glass and composites: e.g. a 5-minute epoxy reached about 15 MPa lap shear on grit-blasted steel, 28 MPa on etched aluminium, 12 MPa on fir and 15 MPa on glass (Loctite EA E-00CL); slow marine epoxy itself has a tensile strength of about 54 MPa (7,900 psi, West System 105/205). On plastics it is usually weaker than cyanoacrylate: Loctite's tests of several epoxies gave about 3-24 MPa on ABS, 3-6 MPa on nylon, 1-5 MPa on PET and only about 0.3-1.5 MPa on polyethylene and polypropylene, depending on the epoxy, while general-purpose CA broke the ABS test pieces first and reached about 28 MPa on nylon (Loctite design guide). It is tougher than CA in knocks and peel ('good toughness', Loctite; slow types 'stronger and less brittle', Prusa), but still weakest in peel and cleavage, like all glues (Loctite design guide).
- **adjustable**: no, once it gels; before that, parts can be moved and lined up during the working time, from about 3-5 minutes for fast types to an hour or more for slow ones (Loctite EA E-00CL: working life 3.5 min; Epoxyworks: 105/205 working time 60-70 min in a thin film).
- **play_and_precision**: not applicable (nothing moves). It tolerates poor fit because it fills gaps, but a thin bond line is strongest: 'Maximum shear strength is obtained with a 0.1 to 0.2 mm bond line' (Loctite EA E-00CL); bigger gaps should be bridged with epoxy thickened by a filler (West System).
- **access_needed**: not applicable: epoxy is applied to the joint faces before assembly, or packed into a hole or pocket from one side.
- **materials**: Bonds well: steel, aluminium and other metals, wood, glass, stone, ceramics, fibreglass and carbon-fibre composites, cured epoxy and polyester, and many rigid plastics such as PVC, polycarbonate, ABS, PLA, PETG and resin prints (Wikipedia; Loctite EA E-00CL; Loctite design guide; Prusa). Weaker on nylon and acrylic (about 1-6 MPa in Loctite's tests), and poor on polyethylene, polypropylene, PTFE and silicone (Loctite design guide; Polyester gelcoat does not stick to cured epoxy, although epoxy sticks well to polyester (Wikipedia). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: widely sold and forgiving of gaps, but you must measure and mix accurately, work within the pot life, protect your skin and keep parts still while it cures (Epoxyworks; West System).

### Making it

- **processes**: 
  - off-the-shelf part: double syringes and cartridges (5-minute to 24-hour types), bottles or tins of resin and hardener, epoxy putty sticks, and filler powders
  - 3D print (FDM): bonding printed parts, filling seams, gluing in hardware, and as a coating or putty (Prusa)
  - 3D print (resin): bonding and filling resin prints (Prusa)
  - woodwork: gap-filling structural joints, fillets and repairs (West System; Epoxyworks)
  - CNC and metalwork: bonding metal parts and fixing bushes, studs and inserts (Wikipedia; Epoxyworks)
  - composites and boats: laminating glass or carbon fibre cloth (Wikipedia; Epoxyworks)
  - electronics: potting and encapsulating (Loctite EA E-00CL)
- **print_in_place**: no: it is a glue for joining separately made parts, though you can print pockets, grooves and glue channels into parts to receive it.
- **making_tips_3d_printing**: 1) Prepare the surfaces: sand the mating faces, clean off dust and grease with isopropyl alcohol or acetone, and glue soon after (Prusa; Epoxyworks; Loctite EA E-00CL). 2) Pick the speed: fast 5-minute epoxy for small quick jobs, slow epoxy for strength, because the long cure lets it 'creep in each pore and crack' and slow types are 'usually stronger and less brittle'. A few dots of CA can hold the parts while the epoxy cures (Prusa). 3) Measure the ratio exactly (1:1 for many syringes, 5:1 by volume for some bulk epoxies) and never add extra hardener to speed it up (Loctite EA E-00CL; West System 105/205; Epoxyworks). Mix thoroughly for at least two minutes in a cup, scraping sides and bottom, or about 15 seconds past an even colour for small amounts; add fillers only after mixing (Epoxyworks; Loctite EA E-00CL; West System). 4) Mix small batches and spread them out: a lump in a cup heats itself and sets much faster, and large masses can smoke or melt the cup (Epoxyworks; Wikipedia). 5) Design a little glue gap: about 0.1-0.2 mm gives the strongest shear bond (Loctite EA E-00CL); for bigger gaps, thicken the epoxy with colloidal silica or a high-density filler to a mayonnaise or peanut-butter consistency (Epoxyworks; West System). 6) Clamp or tape just firmly enough to squeeze a little out; clamping too hard squeezes it all out and leaves a weak, 'starved' joint (West System). Keep the parts still until it has cured (Loctite EA E-00CL). 7) Use epoxy to glue nuts, magnets, threaded rod or bearings into printed pockets, or to fill and fair seams, and clear epoxy to imitate glass (Epoxyworks; Prusa). 8) Speed curing with gentle warmth after it has gelled, up to about 49 °C (120 °F) (Epoxyworks), which is below PLA's softening point. 9) Avoid relying on epoxy for nylon, PE or PP prints, where it bonds poorly (Loctite design guide). 10) In Prusa's quick pull test on printed samples, two 5-minute epoxies reached about 2-6 MPa, less than good CA glues (about 10-13 MPa), and in CNC Kitchen's test soaking prints in epoxy did not make them stronger (Prusa; Hackaday); in a long-term PETG test, two-part epoxy held well enough that the PETG broke first (Hackaday on Cosel's test). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for 'two-part epoxy adhesive' in '5-minute' (fast), '30-minute' and 'slow cure' types; 'structural epoxy' or 'high-strength epoxy'; 'clear epoxy'; 'flexible' or 'toughened' epoxy; 'steel-filled epoxy'; 'epoxy putty'; 'dual cartridge' with a 'static mixing nozzle' and dispensing gun; bulk 'epoxy resin and hardener' with metering pumps; fillers such as 'colloidal silica', 'microfibres', 'high-density filler' and 'microballoons' (Loctite design guide; Epoxyworks; West System). Brand examples: Loctite EA E-00CL / E-05MR, WEST SYSTEM 105 with 205 or 206 hardener, Z-Poxy, J-B Weld (brands).
- **rules_of_thumb**: 
  - Mix exactly at the stated ratio (e.g. 1:1 for Loctite EA E-00CL, 5:1 by volume for WEST SYSTEM 105/205); changing the amount of hardener does not control cure speed and gives a mix that never fully cures (Loctite EA E-00CL data sheet; West System 105/205 data sheet; Epoxyworks 'The Basics of WEST SYSTEM Epoxy Resin and Hardener').
  - Temperature: every 18 °F (10 °C) warmer than 72 °F (22 °C) roughly halves the pot life and cure time (Epoxyworks); each hardener has a minimum working temperature, e.g. 4-5 °C for a fast hardener and 16-18 °C for slow ones (West System 105/205 data sheet; West System hardener selection guide).
  - Pot life is measured on 100 g in a cup and is much shorter than working time in a thin film (e.g. 9-12 minutes vs 60-70 minutes for 105/205); mix small batches (Epoxyworks).
  - Strongest bond line about 0.1-0.2 mm; contact pressure is necessary and parts must not move while it cures (Loctite EA E-00CL). For gaps, thicken with filler and clamp only until a little squeezes out (West System 'Bonding and Clamping').
  - Design joints for shear and compression, avoid peel and cleavage, and widen rather than lengthen overlaps (Loctite 'Design Guide for Bonding Plastics', vol. 6, pp. 77-79).
  - Full strength takes time: 24 hours at 25 °C for high strength with a fast epoxy (Loctite EA E-00CL), and 1-4 days to working strength for 105/205 (West System 105/205 data sheet).
  - Heat limits: room-temperature-cured epoxies soften at fairly low temperatures, e.g. heat deflection temperature 118 °F (48 °C) and ultimate Tg 142 °F (61 °C) for 105/205 (West System), and a glass transition temperature of just 20 °C for a fast epoxy cured at 25 °C (Loctite EA E-00CL). Curing with heat raises it (Loctite design guide), and in general epoxy adhesive strength degrades above 177 °C (Wikipedia 'Epoxy').

### When to use it

- **everyday_examples**: 
  - The hardware-store double syringe of '5-minute epoxy' with separate resin and hardener sides (Wikipedia 'Epoxy')
  - Wooden and fibreglass boat building and repair (Wikipedia 'Epoxy')
  - Surfboard fin mounts, bicycles, skis, snowboards and golf clubs, which use epoxy structural adhesives (Wikipedia 'Epoxy')
  - Electronics potted in hard resin to seal and protect them (Loctite EA E-00CL data sheet)
- **when_to_use**: Use epoxy when the parts don't fit perfectly and the glue has to fill gaps, when you are joining different materials (metal to wood, plastic to metal, glass), when the joint carries real load or knocks, or when you need time to line things up (Wikipedia; Prusa; Loctite design guide). It's the usual choice for gluing hardware into holes, repairing wood and boats, bonding carbon or glass fibre, filling and fairing, and potting electronics (Epoxyworks; Loctite EA E-00CL). Slow epoxy gives the strongest, toughest bonds; fast epoxy suits small quick repairs (Prusa).
- **when_not_to_use**: Don't use it when you need a bond in seconds (use CA) or when parts must come apart again (use screws, threaded inserts or magnets), because cured epoxy won't dissolve (Prusa). On smooth plastics like ABS, PET and nylon, CA is often stronger in shear (Loctite design guide; Prusa). It bonds poorly to polyethylene and polypropylene (Loctite design guide): use a polyolefin primer with CA, a special polyolefin adhesive, or mechanical fastening. For flexible joints, use a flexible adhesive (polyurethane or silicone) rather than a rigid epoxy. Avoid ordinary room-temperature epoxy in hot places such as on an extruder or in a car in the sun (West System heat deflection temperature 48 °C), and don't leave it uncoated in sunlight (Wikipedia).
- **environment_limits**: Heat: room-temperature-cured epoxies soften at modest temperatures: heat deflection temperature 48 °C and ultimate Tg 61 °C for WEST SYSTEM 105/205, and a Tg of only 20 °C for a fast 5-minute type (Loctite EA E-00CL); heat-cured and special high-temperature epoxies do better, and epoxy adhesives in general degrade above 177 °C (Loctite design guide; Wikipedia). Cold: cure slows sharply, with minimum working temperatures of about 4-18 °C depending on hardener (West System). Water: marine epoxies are moisture-resistant (West System), but a fast epoxy lost most of its strength in hot, humid air (10% left after 500 hours of condensing humidity at 49 °C) (Loctite EA E-00CL). Sunlight: epoxy deteriorates in UV light and needs paint or varnish over it outdoors (Wikipedia). Chemicals: generally good resistance; a fast epoxy kept its strength in motor oil, petrol, acetone and isopropanol (Loctite EA E-00CL). Old epoxy may look fine but never cure fully (Prusa).
- **safety_notes**: Skin: liquid resin and hardener irritate skin and eyes, and repeated contact can cause allergic sensitisation; fewer than 10% of users react when overexposed and fewer than 2% develop allergic dermatitis, but once sensitised even tiny amounts can trigger reactions (West System; Wikipedia). Wear gloves and don't clean skin with solvents (Loctite EA E-00CL). Breathing: ventilate; epoxy is a main cause of occupational asthma among plastics users (Wikipedia), and you should never sand epoxy that is not fully cured, because the reactive dust can cause severe respiratory irritation and allergies (West System). Heat: a large mixed batch can overheat, smoke, melt its container or even catch fire, so mix small amounts and spread them out (Wikipedia; Epoxyworks). Disposal: let leftovers cure solid before throwing them away (Wikipedia).
- **common_failures**: Soft, sticky or never-curing epoxy from the wrong ratio, poor mixing or working too cold; scrape it off and redo it, never pile fresh epoxy on uncured epoxy (West System 'Epoxy Problem Solver'; Epoxyworks). A weak, 'starved' joint from clamping so hard that all the glue squeezes out (West System). Bonds peeling off smooth, dirty or low-energy surfaces (PE, PP, nylon) because the surface wasn't sanded and cleaned, or the plastic can't be glued (Loctite design guide; Epoxyworks). Parts moved before the epoxy cured (Loctite EA E-00CL). The mix going hard in the cup before you've finished, because a big batch heats itself (Epoxyworks). A waxy film (amine blush) on some cured epoxies, a normal by-product in some conditions; wash it off with water before sanding or adding more epoxy (West System). Fast epoxy joints softening in warm places or losing strength in damp ones (Loctite EA E-00CL). Old stock that no longer cures properly (Prusa).
- **related**: 
  - Cyanoacrylate (superglue): sets in seconds with no mixing and is often stronger on smooth plastics, but is brittle and needs tight-fitting parts
  - Structural methacrylate (MMA) adhesives: two-part, fast, strong on plastics; scored highest in a long-term PETG test (Hackaday)
  - Polyurethane adhesives: two-part or moisture-curing, more flexible; a construction polyurethane was the overall winner on PETG in the same test (Hackaday)
  - Epoxy putty: the same chemistry as a dough you knead by hand, for filling and building up shapes
  - UV-curing adhesive: one-part, cures in seconds under UV light, good for clear parts
  - Solvent welding: fuses certain plastics (ABS, acrylic, PVC) with no added glue layer
  - Hot-melt adhesive: fast and gap-filling but weak and heat-sensitive
  - Polyester resin: cheaper laminating resin; epoxy sticks to it, but polyester gelcoat doesn't stick to epoxy (Wikipedia)
  - Heat-set threaded inserts and screws: mechanical alternatives for fixing hardware into prints that can be undone

### Pictures, videos and models

- **links**: 
  - [FiveMinEpoxy.jpg (Wikimedia Commons, by Taktoa)](https://commons.wikimedia.org/wiki/File:FiveMinEpoxy.jpg): Photo of a double syringe of 5-minute epoxy with separate resin and hardener compartments *(licence: CC BY-SA 3.0)*
  - [Bonding and Clamping (WEST SYSTEM)](https://www.westsystem.com/instruction/epoxy-basics/bonding-and-clamping/): Illustrated steps for two-step epoxy bonding, applying thickened epoxy, clamping, and shaping fillets *(licence: link only)*
  - [Bonding with WEST SYSTEM Epoxy (YouTube, WEST SYSTEM Epoxy)](https://www.youtube.com/watch?v=DdNfOTLx0q4): Video demonstrating how to bond parts with epoxy (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [The Basics of WEST SYSTEM Epoxy Resin and Hardener (Epoxyworks)](https://www.epoxyworks.com/epoxy-resin-and-hardener-basics/): Graphic of epoxy's cure stages (liquid, gel, solid), photos of filler types, and explanations of pot life, working time and the 18-degree rule *(licence: link only)*
  - [The Great Guide to Gluing and Assembling 3D Prints (Prusa Research blog)](https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/): Photos of two-part epoxy products and glued 3D prints, with a pull-test table comparing epoxy, CA and solvent glues on PLA, PETG and ASA *(licence: link only)*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing glues in torque, shear and tension; the designer sands glue faces with 80-grit, washes them, clamps and waits 5 days before testing. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Epoxy Mixing Trays (Magmabow, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1569337-epoxy-mixing-trays): A 10 g printable mixing tray with a snap-off spatula whose radius matches the tray corners so no unmixed resin is left behind; PLA suggested. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Glue / Epoxy Mixing Tray with Holder (KOSERO, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1608415-glue-epoxy-mixing-tray-with-holder): Small printable mixing tray with a holding tab and a stacking holder; no supports, PLA is fine. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Glue Test Strips (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30133-glue-test-strips): Strips with flat faces and nesting hemispheres for testing glues on PLA; the designer's favourite was a 10-minute two-part adhesive. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
- **diagram_idea**: Two blobs (resin and hardener) being stirred together into one, then a timeline bar showing liquid (working time), gel and solid stages, and below it a joint with a slightly uneven gap completely filled by the epoxy, with a callout showing a filler-thickened 'mayonnaise' bead bridging a bigger gap.
- **sources**: 
  - https://en.wikipedia.org/wiki/Epoxy
  - https://en.wikipedia.org/wiki/Cyanoacrylate
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://datasheets.tdx.henkel.com/LOCTITE-EA-E-00CL-en_GL.pdf
  - https://www.epoxyworks.com/epoxy-resin-and-hardener-basics/
  - https://www.westsystem.com/instruction/epoxy-basics/bonding-and-clamping/
  - https://www.westsystem.com/app/uploads/2022/09/105_205-207-Combined.pdf
  - https://eu.westsystem.com/selection-guides/hardener-selection-guide/
  - https://www.westsystem.com/instruction/epoxy-problem-solver-faq/
  - https://www.westsystem.com/safety/health-effects-from-overexposure-to-epoxy/
  - https://hackaday.com/2025/01/30/comparing-adhesives-for-gluing-petg-prints/
  - https://hackaday.com/2019/12/28/stronger-3d-prints-glue-or-carbon-fiber/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:FiveMinEpoxy.jpg
  - https://www.youtube.com/watch?v=DdNfOTLx0q4

### Other info

- **Fields with unverified parts:** holding_principle, making_tips_3d_printing, materials

## 139 Solvent welding (solvent cement)

*adhesives & bonding.* A solvent that softens the surfaces of certain plastics so they fuse together as it evaporates, like acetone on ABS or cement on acrylic and PVC

### What it is

- **plain_name**: A liquid that melts the surface of two plastic parts for a moment, so they flow into each other and harden into one piece as it dries, like brushing acetone onto a broken LEGO brick or 'gluing' plastic plumbing pipes together
- **term**: Solvent welding (solvent cementing, solvent bonding)
- **aliases**: 
  - solvent cement (the name used in plumbing and acrylic fabrication; Oatey, Associated Plastics)
  - solvent bonding (Wikipedia 'Plastic welding')
  - chemical welding (Prusa: solvent glues work by partially melting the material and 'chemically welding it together')
  - PVC cement, CPVC cement, ABS cement, 'PVC glue' (Oatey points out that the cement is not really a glue, because it fuses the plastic instead of sticking to it)
  - primer and cement (two-step) and one-step or single-step cement (PVC plumbing; Oatey)
  - acrylic cement, 'plexiglass glue', water-thin or capillary cement, thickened or viscous cement (acrylic sheet; U.S. Plastic Corp., Associated Plastics)
  - plastic cement, poly cement, model cement, extra-thin cement (plastic model kits; Prusa, Wikipedia 'Plastic model')
  - ABS juice, ABS glue and ABS slurry, or 'sprue goo' (home-made thick cement made by dissolving scraps of the same plastic in a solvent; MatterHackers, Prusa, Wikimedia Commons)
  - capillary cementing, soak (dip) cementing, viscous cementing (the three ways of applying acrylic cement; U.S. Plastic Corp.)
  - brand names a beginner may search for: Weld-On (brand), Oatey (brand), SCIGRIP (brand), Tamiya Extra Thin Cement (brand), Humbrol Poly Cement (brand), Revell Contacta (brand)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: A solvent is brushed onto, or run into, the joint between two parts made of a plastic it can dissolve; the surfaces soften and mingle, and as the solvent evaporates they harden into one continuous piece of plastic with no separate layer of glue.
- **complexity**: A few parts: (1) the two plastic parts, which must be made of a plastic the solvent can dissolve; (2) the solvent or solvent cement, either plain solvent (for example acetone, or a water-thin acrylic cement) or a thicker cement with some of the same plastic already dissolved in it; (3) for PVC and CPVC pipe, a primer that cleans and pre-softens the surfaces; and (4) an applicator (needle-tip bottle, brush or dauber) plus something to hold the parts still while it sets, such as tape, a light clamp or a jig (Oatey; Associated Plastics; U.S. Plastic Corp.; Prusa).
- **how_it_works**: The solvent temporarily dissolves the surface of each part at room temperature, so the long plastic molecules (polymer chains) become free to move and tangle with the softened molecules of the other part (Wikipedia 'Plastic welding'). Over time the solvent soaks through the plastic and escapes into the air, the molecules lose their mobility, and what is left is one solid mass of intertwined plastic: a solvent weld rather than a layer of glue (Wikipedia; Oatey). A water-thin solvent can be run along the outside of an already-closed, tight joint and is pulled in by capillary action (capillary cementing), while thickened cements carry extra dissolved plastic that can fill small gaps (U.S. Plastic Corp.; Associated Plastics; Prusa). It only works on plastics the solvent can dissolve (thermoplastics such as ABS, acrylic, PVC and polystyrene); it does nothing on polyethylene, polypropylene, thermosets or cured resin prints (Associated Plastics; Henkel LOCTITE guide).

### Finder attributes

- **job**: 
  - glue or bond: fuses two parts of the same (or a closely related) plastic into one piece
  - join and hold: a permanent joint with no screws or separate fasteners
  - seal it, or pass cables or fluid through: solvent-welded PVC, CPVC and ABS pipe joints are leak-free, and cemented acrylic boxes can hold water (Oatey; Associated Plastics)
- **motion**: none: the joint is rigid once the solvent has evaporated
- **degrees_of_freedom**: 0: the two parts become one piece of plastic, so nothing can move
- **special_behaviour**: 
  - none: it is a plain permanent bond. Two useful quirks rather than behaviours: you get time to slide and adjust the parts before it sets (Prusa), and a thin solvent will wick into a closed, tight seam by itself (capillary action; U.S. Plastic Corp.)
- **holding_principle**: material bond (glue, solvent or melting): the plastic of both parts is dissolved and fused together, like a weld made without heat (Wikipedia 'Plastic welding'; Oatey)
- **input_output**: not applicable
- **power**: passive (no power needed): the finished joint needs no power, and making it only needs air for the solvent to evaporate into
- **removability**: permanent: the parts become one piece. Prusa calls solvent gluing an irreversible process, so spilling solvent or joining the wrong parts damages the print; the joint can only be cut or broken apart.
- **reuse_cycles**: once
- **tools_needed**: The right solvent or cement for the plastic; an applicator (needle-tip squeeze bottle or syringe for capillary joints, a brush for acetone or model cement, the dauber in the can lid for pipe cement); tape, clothes pegs, rubber bands, light clamps or a square jig to hold the parts while they set; for pipe, a pipe cutter, deburring tool, cleaner and primer; for acrylic sheet, a saw or router that leaves straight, square edges (Associated Plastics; U.S. Plastic Corp.; Oatey; Prusa). Nitrile gloves, safety glasses and good ventilation (Oatey; Associated Plastics). Keep solvents and home-made cements in glass or metal containers, because they can dissolve a plastic one (MatterHackers; U.S. Plastic Corp.).
- **seal**: airtight or pressure: done properly, the pipe and fitting fuse into one continuous piece 'forming an airtight seal' (Oatey), and Oatey's cure chart gives joint cure times for systems running up to and above 180 psi, so cured PVC, CPVC and ABS pipe joints hold water pressure. Cemented acrylic tanks can hold water if the joints are left at least 48 hours before filling (Associated Plastics). Oatey warns never to test solvent-welded joints with compressed air or gas.
- **load**: Medium to heavy for the plastic being joined, because a good joint can be nearly as strong as the plastic itself. CNC Kitchen's acetone-bonded ABS samples averaged 17 MPa against 19 MPa for normal layer adhesion, and two of three broke next to the joint rather than in it; Associated Plastics says a well-made capillary acrylic joint approaches the strength of the sheet. It is strong in pull and shear across the whole fused area, but a poorly fitting, gappy or starved joint is weak whatever cement is used (Associated Plastics). Results vary a lot with the solvent and plastic: in Prusa's quick single-sample tensile test, model cements reached only about 2-7 MPa on PLA, PETG and ASA, while the best superglues reached about 9-13 MPa.
- **adjustable**: no: parts can be slid and adjusted while the solvent is still wet (Prusa says solvent glues give 'ample time to adjust and fine-tune the joint'), but once it has evaporated the joint is fixed
- **play_and_precision**: not applicable: a solvent weld doesn't locate the parts by itself. The finished joint has no play; accuracy depends on how well the parts fit and how they are held while it sets. The joint shrinks (sinks) slightly as the solvent evaporates (Prusa), and hard clamping squeezes the softened plastic out of the joint (Associated Plastics), so hold the parts in a jig that keeps them in light contact but lets them move slightly as the joint dries (U.S. Plastic Corp.).
- **access_needed**: one side only (blind): nothing has to reach behind the parts. Either brush solvent onto the faces and press them together, or close the joint first and run a thin solvent along the outside of the seam so capillary action pulls it in (U.S. Plastic Corp.; Prusa).
- **materials**: It only works when the solvent can dissolve both parts, so the solvent has to be matched to the plastic (Prusa; Oatey). Works well: ABS and ASA with acetone (Prusa; Wikipedia 'Plastic welding'); acrylic (PMMA, Plexiglas) with acrylic cement (U.S. Plastic Corp.; Associated Plastics); PVC, CPVC and ABS pipe, each with a cement made for that plastic (Oatey); polystyrene model kits with plastic cement (Wikipedia 'Plastic model'); HIPS with limonene and PVB filament with isopropyl alcohol (Prusa; CNC Kitchen). Acrylic cement also bonds acrylic to PVC, foamed PVC, high-impact polystyrene and ABS, though less strongly than acrylic to itself (Associated Plastics). Polycarbonate can be solvent-welded with dichloromethane (Wikipedia 'Plastic welding'), but Associated Plastics finds acrylic cement softens it without fusing it properly. PLA can be welded with dichloromethane, while acetone only makes PLA's surface sticky (Wikipedia 'Polylactic acid'); Does not work: polyethylene, HDPE, polypropylene and other polyolefins (Associated Plastics); thermosets, including cured resin prints (Henkel LOCTITE guide p. 13; Raise3D); and metals, glass, wood or other dissimilar materials (Henkel p. 13). *(unverified parts omitted)*
- **maker_difficulty**: easy: for ABS, ASA, acrylic, PVC and polystyrene it needs only a bottle of the right solvent and a way to hold the parts still, although neat, invisible acrylic seams need square, well-fitting edges and practice on scrap (U.S. Plastic Corp.). It is harder for PLA and PETG, which need more hazardous solvents, so another glue is usually the better choice there.

### Making it

- **processes**: 
  - 3D print (FDM): ABS and ASA prints weld with acetone, HIPS with limonene and PVB with isopropyl alcohol; PLA only with stronger solvents, and PETG hardly at all (Prusa; CNC Kitchen; Wikipedia 'Polylactic acid')
  - laser cut: laser-cut or sawn acrylic boxes, cases and displays are the classic solvent-welded project, joined with water-thin capillary cement (U.S. Plastic Corp.; Associated Plastics; Wikipedia 'Plastic welding')
  - CNC: routed acrylic, PVC and polystyrene sheet parts; a router gives the flat, square edges that capillary cement needs (U.S. Plastic Corp.)
  - off-the-shelf part: PVC, CPVC and ABS pipe and fittings (Oatey) and injection-moulded plastic model kits (Wikipedia 'Plastic model')
  - 3D print (resin): not suitable, because cured resin is a thermoset that solvents can't fuse; use the same resin cured with UV light, superglue or epoxy instead (Henkel LOCTITE guide p. 13; Raise3D)
- **print_in_place**: no: the parts are printed separately and welded together afterwards. Solvent welding is a way to join split or repaired prints, not a printed mechanism.
- **making_tips_3d_printing**: 1) Match the solvent to the filament: ABS and ASA with acetone, HIPS with limonene, PVB with isopropyl alcohol; PETG is inert to the solvents hobbyists can normally get (Prusa). PLA can be welded with dichloromethane, but that solvent is highly hazardous and its consumer use is now banned in the USA (Wikipedia 'Polylactic acid'; US EPA); acetone only makes PLA's surface tacky (Wikipedia), and results differ between brands (Prusa's test versus a reader's failed PLA+ attempt), so try it on offcuts first. Resin prints can't be solvent-welded at all. 2) Make flat, clean mating faces: sand them level and remove dust, grease and old glue (Prusa). Because the wet joint is slippery and takes a while to set, design split parts with large flat gluing faces and add alignment pins or keys so the parts can't slide [design suggestion, not from a tested source]. 3) Two ways to apply it: (a) wet both faces with solvent, wait a few seconds for them to soften, then press firmly together (CNC Kitchen soaked broken ABS faces in acetone and pushed them together after a couple of seconds); or (b) press the parts together first and brush an extra-thin solvent along the seam so capillary action draws it in. The second is the cleanest method but needs smooth, level faces, and the solvent will also wick along layer lines and fingerprint grooves and mark the surface (Prusa). 4) For gaps, use a thicker cement made from the same filament: MatterHackers dissolves 4 g of ABS in 50 mL of acetone for thin 'ABS juice', 8 g for 'ABS glue' and 20 g for putty-like 'ABS slurry' that fills gaps, leaving it overnight in a glass, metal, polypropylene or HDPE container; using the same colour of filament gives a colour-matched joint. You can also glue in bits of filament to fill larger gaps (Prusa). 5) Clamp the parts with clothes pegs, rubber bands or clamps; pressing them together greatly improves strength (Prusa). 6) Let it dry properly: parts hold within seconds or minutes, but large joints, or joints with too much solvent, can take many days to lose all the solvent (Prusa). CNC Kitchen dried acetone-welded ABS for 24 hours at 60 °C in a food dehydrator; only do this with heat-resistant filaments, because PLA starts to soften at about 60 °C (CNC Kitchen oven test). The joint sinks a little as the solvent leaves, so leave some material to sand flush (Prusa). 7) Don't brush acetone onto each layer during printing to 'weld' the layers: CNC Kitchen found it gave only 6 MPa, about 15% of the strength of normal parts, and it puts a flammable solvent next to the hot nozzle. 8) You can design printed ABS accessories to be acetone-welded to ABS boxes instead of screwed on (Printables 'ABS Hinges & Latches (Weld to ABS with Acetone)'). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'acetone' (hardware or pharmacy grade; nail polish remover is diluted acetone, as noted on the Printables ABS hinge model); 'acrylic cement' in water-thin capillary and thickened (gap-filling) grades, for example Weld-On 3 and Weld-On 16 (brand), and a 'needle applicator bottle' (Associated Plastics); 'PVC primer' and 'PVC cement', 'CPVC cement', 'ABS cement', 'transition cement' for ABS-to-PVC joints, and 'one-step PVC cement' for small non-pressure DIY projects (Oatey); 'plastic model cement' or 'extra thin cement', such as Tamiya Extra Thin Cement, Humbrol Poly Cement or Revell Contacta Professional (brands; Prusa); 'limonene' for HIPS (Prusa); and 'PVB filament' for prints to be smoothed or joined with isopropyl alcohol (CNC Kitchen).
- **rules_of_thumb**: 
  - Acrylic sheet: don't cement below 15 °C (60 °F); 21-24 °C (70-75 °F) is ideal. Keep a capillary joint horizontal, tilt the upright piece about 1° outward if the cement doesn't flow all the way in, let the joint dry (usually 10-30 minutes) before moving it, and expect full strength only after 24-48 hours. Don't polish edges you are going to cement (U.S. Plastic Corp. 'Joining Acrylic Sheet').
  - Acrylic soak (dip) method: dip only the very edge for 30 seconds to 2 minutes until it swells into a soft 'cushion', hold the parts together for about 30 seconds without pressure, keep them in a jig for 10-30 minutes, then wait another 8-24 hours before working on the joint (U.S. Plastic Corp.).
  - Fit matters more than the cement: an acrylic joint that is 0.3 mm out will be weak whatever product you use; use only enough clamping pressure to keep the faces touching; allow 24-48 hours before real load and at least 48 hours for anything holding water; never cement a flame-polished edge, because it crazes (Associated Plastics, a fabricator's guide).
  - PVC and CPVC pipe: chamfer the pipe end by about 10-15%; a dry fit should be an interference fit that doesn't bottom out; apply cement while the primer is still wet and assemble within five minutes; push the pipe in with a quarter turn and hold it for at least 30 seconds (Oatey 'Complete Guide to Solvent Welding').
  - PVC and CPVC handling time at 60-100 °F (16-38 °C): about 2 minutes for 1/2-1 1/4 in pipe, 5 minutes for 1 1/2-3 in, 15 minutes for 4-5 in and 30 minutes for 6-8 in; at 40-60 °F allow 5, 10, 30 and 90 minutes; allow 50% more in damp or humid weather (Oatey cure chart LCS358G).
  - Primer is for PVC and CPVC only, never ABS; maximum primer application temperature is 110 °F (43 °C) (Oatey 'What Is Solvent Cement and Primer?').
  - Home-made ABS cement: 50 mL of acetone with 4 g of ABS for thin 'juice', 8 g for 'glue' or 20 g for putty-like 'slurry', left overnight to dissolve (MatterHackers).
  - Acetone-welded ABS reached 17 MPa on average after 24 hours at 60 °C, compared with 19 MPa layer adhesion and 41 MPa along the print lines for unbroken ABS (CNC Kitchen).
  - Solvent bonds can take weeks to reach full strength, can't bridge significant gaps, and the time between applying the solvent and joining is critical: too much solvent left in the joint, or too much already evaporated, both give a weak joint (Henkel 'LOCTITE Design Guide for Bonding Plastics', vol. 6, p. 13).

### When to use it

- **everyday_examples**: 
  - Plastic plumbing: PVC, CPVC and ABS drain and water pipes joined with primer and solvent cement (Oatey; Wikipedia 'Plastic welding')
  - Plastic model kits of aircraft, ships and cars, whose polystyrene parts are joined with solvent-based plastic cement (Wikipedia 'Plastic model')
  - Clear acrylic display cases, brochure holders and dust covers in shops (Wikipedia 'Plastic welding')
  - A broken LEGO or Duplo brick, which is ABS, mended by brushing acetone on both broken faces and pressing them together (CNC Kitchen)
- **when_to_use**: Use it to join parts made of the same plastic (or closely related plastics) when you want a strong, permanent, often invisible joint with no extra glue layer: acrylic boxes, cases and displays; ABS, ASA, HIPS or PVB prints split into pieces; repairs to ABS objects; plastic model kits; and PVC pipe frames, plumbing and anything that has to hold water, where the fused joint also seals (Oatey; Associated Plastics; Prusa). It is cheap, gives time to adjust the parts before it sets, and a thick cement made from the same filament gives a colour-matched, sandable joint and filler (Prusa; MatterHackers).
- **when_not_to_use**: Don't use it on plastics your solvent can't dissolve: PETG (use superglue or epoxy), polyethylene, HDPE and polypropylene (use hot-gas plastic welding or a structural acrylic adhesive made for low-surface-energy plastics), or resin prints (use the same resin cured with UV light, superglue or epoxy) (Prusa; Associated Plastics; Raise3D). It can't join plastic to metal, glass or wood (use epoxy or superglue; Henkel p. 13), and it can't fill real gaps (use a thickened cement, slurry or epoxy; Associated Plastics; Henkel). Avoid it where you can't ventilate the fumes, for PLA if the only solvent that works is dichloromethane, and for parts that need to come apart again (use screws, heat-set inserts or snap fits).
- **environment_limits**: The fused joint is the same plastic as the parts, so it softens at the same temperature (for printed parts, CNC Kitchen found PLA gives at about 60 °C, PETG at about 80 °C and ASA at about 110 °C). Until all the solvent has escaped, which can take days or weeks, the joint is weaker (Prusa; Henkel p. 13), and Henkel notes solvent-cemented joints have poor resistance to heat and to solvents; the same solvent that made the joint will soften it again. Cold and damp slow curing: don't cement acrylic below 15 °C (U.S. Plastic Corp.), and allow 50% more time for pipe joints in humid weather (Oatey cure chart). Humidity can also leave a white haze (blushing) on acrylic joints, and stressed or flame-polished edges craze into fine cracks when they meet solvent (Associated Plastics; Henkel).
- **safety_notes**: Solvent glues usually have the strongest smell of all glues and can contain flammable, harmful or even narcotic ingredients such as toluene, so ventilate well (Prusa). Wear gloves and safety glasses and keep solvents away from flames and heat (Oatey); CNC Kitchen warns that putting flammable acetone next to a hot printer is a serious fire risk. Dichloromethane (methylene chloride), used in some acrylic and model cements and able to weld PLA, can kill through acute exposure and causes cancer; the US EPA banned all consumer uses in a 2024 rule, phased out within a year (US EPA). Associated Plastics reports that Weld-On acrylic cements were reformulated in 2025 without dichloromethane and trichloroethylene, but says they are 'safer, not safe'. Never pressure-test solvent-welded pipes with compressed air or gas (Oatey).
- **common_failures**: Nothing happens, or the joint pops apart: the solvent doesn't dissolve that plastic (PETG, polyethylene, polypropylene, resin prints); check the solvent and plastic pair first (Prusa; Associated Plastics). Weak joint from a poor fit: capillary cement can't bridge gaps, so make square, flat edges or switch to a thickened cement or slurry (Associated Plastics; U.S. Plastic Corp.). Starved joint from clamping too hard, which squeezes the softened plastic out (Associated Plastics). Crazing (a web of fine cracks) around the joint on flame-polished or stressed edges (Associated Plastics; Henkel). White blush in humid weather (Associated Plastics). Soft or porous joint from trapped solvent, or loading it too early; wait days, not minutes (Prusa; Henkel). Surface damage where thin solvent wicked along layer lines or fingerprints (Prusa). On long acrylic seams the start of the joint sets before you finish the end, so work in shorter sections (Associated Plastics). Pipe joints leak when primer is skipped on PVC or CPVC, the wrong cement is used, cement is puddled, the pipe isn't fully pushed in with a quarter turn, or old, thickened cement is used (Oatey).
- **related**: 
  - Cyanoacrylate (superglue): sticks the surfaces together instead of dissolving them; works on most plastics including PLA and PETG and sets in seconds, but is brittle in peel (Prusa)
  - Two-part epoxy: fills gaps and bonds metal, wood and dissimilar materials that solvents can't; slower to cure (Prusa; Henkel)
  - Elastomeric solvent glue and contact adhesive: also solvent-based, but they leave a rubbery glue layer behind as the solvent dries instead of fusing the parts into one piece
  - UV-curing adhesive (including resin used as glue): the way to 'weld' resin prints, which solvents can't touch
  - Hot-gas, friction and ultrasonic plastic welding: fuse plastics with heat instead of solvent; hot-gas welding with a matching filler rod is the only welding route for polyethylene and polypropylene (Associated Plastics; Wikipedia 'Plastic welding')
  - Heat staking: melts a post on one part into a rivet head, a mechanical joint rather than fused faces
  - Structural acrylic and low-surface-energy plastic adhesives: the glue route for polyethylene and polypropylene, which solvents can't weld
  - Glued joint design (butt, lap and scarf joints): a bigger overlapping area makes a solvent weld stronger, just as with glues

### Pictures, videos and models

- **links**: 
  - [Water Ram Repair PVC Cement (Wikimedia Commons, by Jshin722)](https://commons.wikimedia.org/wiki/File:Water_Ram_Repair_PVC_Cement.jpg): Photo of clear PVC cement brushed over dried primer on a pipe and fitting just before they are pushed together *(licence: CC BY-SA 3.0)*
  - [Sprue goo bottle (Wikimedia Commons, by Ralsei Worshipper)](https://commons.wikimedia.org/wiki/File:Sprue_goo_bottle.jpg): A plastic model cement bottle refilled with 'sprue goo', home-made thick cement made by dissolving leftover kit plastic in solvent *(licence: CC0 (public domain dedication))*
  - [How to glue Acrylic (TAP Plastics, YouTube)](https://www.youtube.com/watch?v=hT6Ow_cBTps): Video of acrylic sheet being joined with solvent cement (title and channel checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [MatterHackers How-To: ABS Juice, Glue, and Slurry (MatterHackers, YouTube)](https://www.youtube.com/watch?v=8bYLRFMKDSY): Video of making acetone-and-ABS cements of different thicknesses for welding and filling ABS prints (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Can Acetone Glue Layers of 3D Prints together? (CNC Kitchen, 2022)](https://www.cnckitchen.com/blog/can-acetone-glue-layers-of-3d-prints-together): Photos of a broken Duplo brick repaired with acetone, acetone-bonded ABS test samples breaking beside the joint, and a strength chart *(licence: link only)*
- **make_it_yourself**: 
  - [ABS Hinges & Latches (Weld to ABS with Acetone) (lucan07, Printables)](https://www.printables.com/model/848184-abs-hinges-latches-weld-to-abs-with-acetone): Simple printable ABS hinges and latches designed without screw holes, to be welded onto ABS boxes with acetone. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Glue strength test pieces (MethodicalMaker, Printables)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable shear, tension and torque test pieces for comparing adhesives, including solvent welds, with a hanging scale. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY (Creative Commons Attribution))*
  - [Glue tensile strength test object (Patrol_maverick, Printables)](https://www.printables.com/model/1352973-glue-tensile-strength-test-object): Two printed rings with a 6 x 6 mm glue face that are bonded together and loaded with a bucket of water until the joint fails; a simple home comparison test. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [How To Make ABS Juice, Glue, and Slurry (MatterHackers)](https://www.matterhackers.com/news/how-to-make-abs-juice-glue-and-slurry): Step-by-step recipe for making your own acetone-and-ABS solvent cement and gap filler from filament scraps *(licence: link only)*
- **diagram_idea**: A three-step side cut-away of two plastic plates: (1) thin solvent running into the closed seam by capillary action; (2) the two surface layers softening, with wiggly molecule chains crossing the boundary; (3) the solvent escaping as vapour to leave one continuous piece with no glue line, plus a small inset of a PVC pipe being pushed into a primed fitting with a quarter turn.
- **sources**: 
  - https://en.wikipedia.org/wiki/Solvent_welding
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://en.wikipedia.org/wiki/Polylactic_acid
  - https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene
  - https://en.wikipedia.org/wiki/Plastic_model
  - https://en.wikipedia.org/wiki/List_of_glues
  - https://en.wikipedia.org/wiki/Weld-On
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.cnckitchen.com/blog/can-acetone-glue-layers-of-3d-prints-together
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://associatedplastics.com.au/blog/weld-on-acrylic-cement-guide
  - https://www.usplastic.com/knowledgebase/article.aspx?contentkey=584
  - https://www.oatey.com/faqs-blog-videos-case-studies/blog/how-complete-perfect-solvent-cement-joint
  - https://www.oatey.com/faqs-blog-videos-case-studies/blog/oatey-101-solvent-cements-and-primers
  - https://www.oatey.com/sites/default/files/2020-11/01_SolventWeldCureTimes_CureChart_LCS358G.pdf
  - https://www.epa.gov/newsreleases/biden-harris-administration-finalizes-ban-most-uses-methylene-chloride-protecting
  - https://www.matterhackers.com/news/how-to-make-abs-juice-glue-and-slurry
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://www.raise3d.com/blog/best-resin-prints-glue/
  - https://forum.bambulab.com/t/solved-will-bbl-abs-support-a-proper-solvent-weld/62258
  - https://commons.wikimedia.org/wiki/File:Water_Ram_Repair_PVC_Cement.jpg
  - https://commons.wikimedia.org/wiki/File:Sprue_goo_bottle.jpg
  - https://www.youtube.com/watch?v=hT6Ow_cBTps
  - https://www.youtube.com/watch?v=8bYLRFMKDSY
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** making_tips_3d_printing, materials

## 140 UV-curing adhesive (incl. resin used as glue)

*adhesives & bonding.* A liquid that stays wet until hardened in seconds by ultraviolet light, useful for clear parts and for gluing resin prints with the same resin

### What it is

- **plain_name**: A clear liquid glue that stays runny for as long as you like, then turns hard in seconds when you shine an ultraviolet (UV) or violet light on it; leftover resin from a resin 3D printer can be used the same way
- **term**: UV-curing adhesive (light-curing adhesive, light-cure acrylic)
- **aliases**: 
  - UV glue, UV adhesive, UV-cure adhesive
  - light-curing adhesive, light-cure adhesive, light curing materials (LCM) (Wikipedia 'Adhesive'; Henkel LOCTITE guide)
  - light curing acrylic adhesive (the most common chemistry; Henkel LOCTITE guide p. 9); UV-curing epoxies, silicones and cyanoacrylates also exist (GA Lindberg)
  - UV resin, craft or jewellery UV resin
  - resin welding, UV welding, gluing resin prints with resin (Raise3D; Formlabs)
  - liquid plastic welder, UV plastic welder (marketing names; New Atlas)
  - Bondic (brand), a pen-style kit with a built-in UV LED (New Atlas)
  - UV-curing optical adhesive, UV glass glue (used for lenses, optics and glass)
  - dual-cure adhesive (a light-curing adhesive with a second moisture, heat or anaerobic cure for areas the light can't reach; GA Lindberg)
- **family**: adhesives & bonding
- **one_liner**: A one-part liquid adhesive containing a light-sensitive starter (photoinitiator) that hardens into solid plastic within seconds when UV or violet light reaches it, so you can position parts at leisure and then fix them in place instantly.
- **complexity**: A few parts: (1) the liquid adhesive or resin, a mix of building-block molecules (monomers and oligomers) and a photoinitiator (Wikipedia 'UV curing'); (2) a light source whose wavelength matches it, usually 365-405 nm, such as a UV LED torch or lamp, a 405 nm laser pointer, a resin printer's curing station or direct sunlight (GA Lindberg; Formlabs; Hackaday); and (3) the two parts, at least one of which must let the light through to the glue line unless the glue sits in an open seam or fillet (GA Lindberg).
- **how_it_works**: The liquid contains a photoinitiator, a small molecule that absorbs light of a particular wavelength and breaks apart into reactive fragments (free radicals, or an acid in UV-curing epoxies) (Wikipedia 'UV curing'; Henkel LOCTITE guide p. 9). These start a chain reaction that links the liquid's building blocks into a hard, cross-linked plastic (a thermoset), typically in 2 to 60 seconds (Henkel p. 9). The reaction only runs while enough light is shining on it, so glue in the dark stays liquid, and where the surface touches air, oxygen can stop it curing properly and leave it tacky (GA Lindberg; Dymax). Resin for resin 3D printers is the same kind of light-cured material, so a thin film of it between two resin parts, cured with light of the printer's wavelength (usually 405 nm), glues them with matching material (Formlabs; Raise3D).

### Finder attributes

- **job**: 
  - glue or bond: bonds glass, clear plastics, resin prints and most metals, and fills small cracks and chips
  - join and hold: a permanent, often nearly invisible joint, fixed in seconds exactly where you placed the parts
- **motion**: none: the cured adhesive is rigid (softer, flexible grades also exist; Henkel p. 9)
- **degrees_of_freedom**: 0: once cured the parts are fixed together
- **special_behaviour**: 
  - none of the listed behaviours. Its useful quirk is 'cure on demand': you can position and adjust the parts for as long as you need, then fix them in seconds by switching on the light (Henkel p. 9; GA Lindberg)
- **holding_principle**: material bond (glue, solvent or melting): the liquid wets both surfaces and hardens into a cross-linked plastic that adheres to them (Henkel p. 9)
- **input_output**: not applicable
- **power**: passive (no power needed): the cured joint needs no power. Curing it needs light, from a battery or mains-powered UV lamp, or from direct sunlight outdoors (Hackaday 2018)
- **removability**: permanent: cured light-cure adhesive is a thermoset that doesn't melt again; removing it needs heat, chemicals or mechanical force depending on the type, and GA Lindberg calls removal 'tricky'
- **reuse_cycles**: once
- **tools_needed**: A UV or violet light matched to the adhesive: a 365-405 nm LED torch or lamp (GA Lindberg), a 405 nm laser pointer for Formlabs resins (Formlabs), or a resin printer's curing station for the final cure (Prusa forum); a needle-tip bottle, syringe, micro-brush or toothpick to apply thin films (Raise3D); tape, clamps or fingers to hold the parts for the first seconds; UV-blocking safety glasses and nitrile or neoprene gloves (Raise3D; Formlabs safety page; DermNet); isopropyl alcohol and a cloth to wipe off a tacky surface layer (Raise3D).
- **load**: Light to medium in hobby use. Industrial light-cure acrylics bond close-fitting parts strongly in shear (Henkel p. 9; LOCTITE AA 3105 datasheet), but most cured UV adhesives and printer resins are hard and rather brittle, so a joint can crack under impact, bending or peel, and shrinkage during curing adds stress (GA Lindberg; Raise3D). Resin used as glue is about as strong as the resin itself: a Formlabs forum user reports that properly cured joints break through the resin rather than along the seam, while Raise3D advises treating resin welding as mainly cosmetic and backing it up with superglue or epoxy for structural joints.
- **adjustable**: no: there is virtually unlimited time to reposition the parts before the light is switched on (Henkel p. 9), but none afterwards
- **play_and_precision**: not applicable: the glue doesn't locate the parts, but curing on demand lets you align parts precisely (for example in a jig) and then fix them in seconds without the glue shifting while it sets (Henkel p. 9; GA Lindberg). Acrylate-based formulations shrink quite a lot as they cure, which can pull parts slightly and adds stress (GA Lindberg).
- **access_needed**: one side only (blind), but the light must reach the glue: either through a part that lets UV or violet light pass, or from the open edge of the seam. Glue in shadow under an opaque part will not cure unless the product has a second cure mechanism (GA Lindberg; Henkel p. 9).
- **materials**: Bonds well: glass, many plastics, ceramics and most metals (LOCTITE AA 3105 datasheet; Wikipedia 'Adhesive' lists glass and optical manufacturing among its main uses); cured resin prints, best of all with the same resin (Formlabs; Raise3D; Anycubic). Limits: at least one part must let the curing light through, and some transparent plastics block UV (a 405 nm blue-light grade may still work) (GA Lindberg); opaque and black parts block the light (Prusa forum). Before it cures, the liquid adhesive can cause stress cracking in polycarbonate that is under stress (LOCTITE AA 3105 datasheet, ASTM D3929 test). *(unverified parts omitted)*
- **maker_difficulty**: easy: no mixing, and a UV torch kit, or leftover printer resin plus the printer's curing light, is all you need; the main skill is getting enough light to every part of the glue line

### Making it

- **processes**: 
  - 3D print (resin): the main maker use, gluing, repairing or hiding seams on resin prints with the same resin and a 405 nm light (Formlabs; Raise3D; Anycubic)
  - 3D print (FDM): small joints, seam filling and cosmetic repairs; printer resin brushed onto PLA prints cures into a sandable coating (Hackaday 2018, 2022; Prusa reader comment)
  - off-the-shelf part: bonding glass, lenses and optics, and small electronics, phone-screen and jewellery repairs (Wikipedia 'Adhesive'; Wikimedia Commons photos) *(unverified parts omitted)*
- **print_in_place**: no: it is a glue applied after printing. Resin used as glue is the same material as a resin print, but the parts are still printed separately and joined afterwards.
- **making_tips_3d_printing**: 1) For resin prints, use the same resin as glue: clean and dry the parts, dry-fit them, apply a very thin film, press and hold the parts together, then 'spot-tack' the joint by shining the light on one area for 10-30 seconds and working around the seam before giving the whole part a final post-cure under the lamp or in a curing station (Raise3D; Prusa forum). Matching resin gives matching colour and hardness, and on clear parts matching refractive index makes the seam almost invisible (Raise3D; Formlabs forum). 2) Match the light to the resin: most resin printers use 405 nm, and Formlabs says its resins need a 405 nm laser pen to work as glue; a green (532 nm) laser pointer will not cure them (Formlabs; Formlabs forum). Direct sunlight works outdoors, but most windows block UV (Hackaday 2018). 3) Get light to the whole glue line: it works best on small cross-sections and on clear or translucent parts. On opaque or black parts, glue the middle of the joint with superglue or epoxy and use resin only on the edges, or fill the seam with resin after gluing (Prusa reader comment; Formlabs forum). 4) Keep layers thin: thick layers shrink more and can leave uncured liquid inside (Raise3D). As an unofficial guide, a Formlabs forum reply suggests exposing a thick joint at least 10 times as long as a thin (under 1 mm) layer needs, and says a 12 mm thick joint is probably too thick to cure through. Build up bigger gaps in several thin layers (New Atlas on layering). 5) A tacky surface after curing is oxygen inhibition: cure longer or with a stronger light, cover the glue with a clear film while curing, or wipe it with isopropyl alcohol afterwards (Raise3D; Dymax). 6) For FDM prints, resin can be used like a quick-setting filler: Hackaday reports printer resin brushed onto PLA and cured in sunlight, and resin thickened with talcum powder brushed on to fill layer lines before sanding (Hackaday 2018, 2022). Make sure it is fully cured before sanding. 7) Never pour used or contaminated resin back into the printer's vat or bottle (Hackaday 2018), and keep resin bottles shaded so room light doesn't partly cure them (Raise3D). 8) Solvent cements can't bond cured resin prints, so resin, superglue or epoxy are the options (Raise3D).
- **off_the_shelf_parts**: Search for: 'UV curing adhesive', 'light cure adhesive' or 'UV glue' (glass, optical or plastic-bonding grades); 'UV resin' (craft and jewellery); 'UV LED flashlight 365 nm' or '395 nm', '405 nm UV flashlight' or '405 nm laser pointer'; 'UV curing lamp' or a resin printer 'curing station'; 'UV-blocking safety glasses'; 'nitrile gloves'. Pen-style kits with a built-in LED and refill cartridge are sold as 'liquid plastic welders', e.g. Bondic (brand) (New Atlas). Industrial examples: LOCTITE AA 3105 (brand), a light-cure acrylic for plastics, glass and metal (datasheet); 'dual cure' adhesives for shadowed joints (GA Lindberg).
- **rules_of_thumb**: 
  - Light-curing acrylics typically cure in 2 to 60 seconds, come in viscosities from 50 cP (water-thin) to non-running gels, and with industrial lamps can cure more than 13 mm (0.5 in) deep (Henkel 'LOCTITE Design Guide for Bonding Plastics', vol. 6, p. 9).
  - Most light-curing adhesives cure at about 365-405 nm; the wavelength must match the adhesive's photoinitiator. GA Lindberg gives a lamp intensity of over 50 mW/cm² for its adhesives and says sunlight, at about 2-5 mW/cm², is not enough; 2-3 times the recommended light dose is usually fine, too little leaves it under-cured and far too much degrades and discolours it; practical depth limit is about 10 mm (GA Lindberg 'Basics of light curing adhesives').
  - Example industrial product: LOCTITE AA 3105 fixes glass microscope slides together in 15 seconds or less under a 6 mW/cm² black light measured at 365 nm, and its surface cure improves with short-wave UV (220-260 nm) (LOCTITE AA 3105 technical data sheet, 2015).
  - Short-wave UV (280-320 nm) cures the surface best but not deep; longer wavelengths (400-500 nm) cure deeper; 320-450 nm gives the best balance. A 'tack-free' surface is not the same as a full cure (Dymax 'How to Overcome Oxygen Inhibition').
  - Formlabs resins need a 405 nm light (laser pen or pointer) to work as glue (Formlabs 'Advanced 3D Printing Techniques').
  - Unofficial: expose a thick joint at least 10 times as long as it takes to cure a thin (under 1 mm) droplet; 12 mm is probably too thick to cure through (Formlabs community forum reply).
  - Spot-tack joints for 10-30 seconds, then post-cure the whole part for several minutes (Raise3D).
  - Outdoor sunlight works but most windows block UV; resin coatings took about two to three hours of winter sun to lose their tackiness (Hackaday 'Print Smoothing Tests With UV Resin', 2018).

### When to use it

- **everyday_examples**: 
  - Phone screen replacement kits that use a UV-curing glue and a small UV lamp (Wikimedia Commons photo)
  - Laser and camera optics fixed to glass blocks with UV-curing adhesive (Wikimedia Commons photo of a Lightwave Electronics laser)
  - Pocket UV repair pens sold as 'liquid plastic welders', such as Bondic (brand) (New Atlas)
- **when_to_use**: Use it when you need time to line parts up exactly and then want them fixed instantly; when the joint should be clear or nearly invisible (glass, clear acrylic, clear or translucent resin prints); for gluing, repairing and hiding seams on resin prints with the same resin; for tiny parts, cracks and chips where a thin, runny glue can flow in; and for quick tack-welds that hold parts while a stronger glue cures (Henkel p. 9; Raise3D; Formlabs; GA Lindberg). It is one-part, needs no mixing and wastes little, since unused glue stays liquid until light hits it (Hackaday 2018).
- **when_not_to_use**: Avoid it where light can't reach the whole glue line, such as between two opaque parts (use superglue, epoxy or a dual-cure adhesive instead); for big gaps or thick layers (use epoxy); for joints that take impact, bending or peel (use a tougher adhesive such as epoxy, or screws); and for slippery plastics like polyethylene and polypropylene (use a structural acrylic adhesive for low-surface-energy plastics) (GA Lindberg; Raise3D; Henkel p. 9). Don't rely on resin welding alone for load-bearing resin parts; back it up with superglue or epoxy (Raise3D). Anyone who has developed an acrylate skin allergy should avoid it (DermNet).
- **environment_limits**: Acrylate types shrink as they cure, leaving built-in stress in the joint (GA Lindberg). Any glue left uncured in shadow stays soft liquid and never gains strength (GA Lindberg). *(unverified parts omitted)*
- **safety_notes**: UV light is harmful to eyes and skin, so wear UV-blocking glasses and keep the beam off your skin (GA Lindberg; Raise3D); never shine a laser pointer into anyone's eyes (Formlabs forum), and note that Formlabs describes the lasers in its printers as Class 3B, able to injure eyes or skin with direct exposure. Uncured acrylates are a common cause of allergic contact dermatitis (itching, burning, blistering, usually on the fingers and hands); acrylates were named Contact Allergen of the Year 2012, and DermNet advises everyone handling acrylate monomers to avoid skin contact. Wear nitrile or neoprene gloves (Formlabs safety page); DermNet notes methyl methacrylate passes through latex and vinyl gloves within minutes and recommends double gloving. Work with ventilation (Raise3D), keep uncured resin from contaminating the workspace, and don't sand it before it is fully cured (Hackaday 2022). Industrial high-intensity lamps create ozone that must be vented (Henkel p. 9).
- **common_failures**: Joint stays wet or falls apart because the light never reached the glue (opaque or black parts, UV-blocking plastic, shadowed areas): use a clear part, cure from the open edges, or use a dual-cure adhesive, superglue or epoxy inside (GA Lindberg; Prusa reader comment). Nothing cures because the light is the wrong wavelength or too weak: match 365-405 nm to the adhesive, and don't use a green laser pointer or cure through window glass (GA Lindberg; Formlabs forum; Hackaday 2018). Uncured liquid trapped inside a thick layer, and distortion from shrinkage: use thin films and build up in layers (Raise3D). Sticky surface from oxygen inhibition: more light, a clear film cover or an isopropyl alcohol wipe (Dymax; Raise3D). Brittle joint cracks when bumped or flexed (Raise3D). Yellowed or weakened glue from over-curing (GA Lindberg). Crazing of stressed polycarbonate touched by the liquid adhesive (LOCTITE AA 3105 datasheet). Resin in the bottle thickens because room light partly cured it (Raise3D).
- **related**: 
  - Cyanoacrylate (superglue): also fast and one-part, but cures from surface moisture without light, so it works in hidden and opaque joints; similarly brittle
  - Two-part epoxy: cures without light and fills bigger gaps; slower, but better for structural joints on resin prints (Raise3D)
  - Anaerobic adhesive (threadlocker): the opposite trigger, curing when shut off from air between close-fitting metal parts
  - Solvent welding: fuses thermoplastics by dissolving them, but can't bond cured resin prints (Raise3D)
  - Hot-melt adhesive (glue gun): also sets in seconds, but by cooling; gap-filling but weak and softens with heat
  - Dual-cure adhesives: light-curing adhesives with a second moisture, heat or anaerobic cure so shadowed areas harden too (GA Lindberg)
  - Silicone and MS-polymer adhesive sealants: UV-curing silicones exist (Henkel), but the usual ones cure from air moisture and stay flexible

### Pictures, videos and models

- **links**: 
  - [UV curing glue kit for Huawei-Screen (Wikimedia Commons, by Mcapdevila)](https://commons.wikimedia.org/wiki/File:UV_curing_glue_kit_for_Huawei-Screen.jpg): Photo of a consumer UV-curing glue kit with a small UV lamp, used for replacing a phone screen *(licence: CC BY-SA 4.0 (also GFDL))*
  - [Lightwave Electronics model 142 Laser Optics Fix (Wikimedia Commons, by Samuel M. Goldwasser)](https://commons.wikimedia.org/wiki/File:Lightwave_Electronics_model_142_Laser_Optics_Fix.jpg): Close-up photo of laser optics mounted on a glass block and fixed to a platform with UV-curing adhesive *(licence: CC BY-SA 3.0 (also GFDL))*
  - [UV Curing Process (Wikimedia Commons, by Bonobo12345)](https://commons.wikimedia.org/wiki/File:UV_Curing_Process.jpg): Diagram of cross-linking during light-triggered polymerisation (curing) *(licence: CC BY-SA 4.0)*
  - [Basics of light curing adhesives (GA Lindberg knowledge hub)](https://www.galindberg.se/en/knowledge-hub/Basics-of-light-curing-adhesives): Illustrated explanation of the curing steps (light activates the photoinitiator, polymerisation runs while lit) with pros and cons *(licence: link only)*
  - [3D Printering: Print Smoothing Tests With UV Resin (Hackaday, 2018)](https://hackaday.com/2018/03/08/3d-printering-print-smoothing-tests-with-uv-resin/): Photos of printer resin brushed onto FDM prints and cured in sunlight, with notes on thinning and curing *(licence: link only)*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable shear, tension and torque test pieces for comparing adhesives, for example resin-welded against superglued joints. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY (Creative Commons Attribution))*
  - [Glue tensile strength test object (Patrol_maverick, Printables)](https://www.printables.com/model/1352973-glue-tensile-strength-test-object): Two printed rings with a 6 x 6 mm glue face, bonded together and loaded with a bucket of water until the joint fails. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [3D Printering: Print Smoothing Tests With UV Resin (Hackaday)](https://hackaday.com/2018/03/08/3d-printering-print-smoothing-tests-with-uv-resin/): A try-it-yourself write-up of brushing leftover printer resin onto prints, thinning it with isopropyl alcohol and curing it in sunlight *(licence: link only)*
- **diagram_idea**: A side cut-away of a clear part lying over an opaque part with a thin glue line: violet light arrows pass through the clear part and turn the glue from liquid (dots) to solid (hatching), while the region shaded by an opaque tab stays liquid and the air-exposed edge fillet is labelled 'tacky: oxygen stops the surface curing'.
- **sources**: 
  - https://en.wikipedia.org/wiki/UV_curing
  - https://en.wikipedia.org/wiki/Adhesive
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://www.galindberg.se/en/knowledge-hub/Basics-of-light-curing-adhesives
  - https://dymax.com/resources/news-and-media/blog/common-questions/how-to-overcome-oxygen-inhibition-in-light-curable-adhesives
  - https://datasheets.tdx.henkel.com/LOCTITE-AA-3105-en_GL.pdf
  - https://formlabs.com/blog/advanced-3dp-techniques/
  - https://forum.formlabs.com/t/clear-prints-with-seamless-joints-on-multi-part-prints-uv-glue-laser-curing/29063
  - https://forum.prusa3d.com/forum/original-prusa-sl1-general-discussion-announcements-and-releases/whats-the-best-method-to-join-uv-resin-parts/
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.raise3d.com/blog/best-resin-prints-glue/
  - https://store.anycubic.com/blogs/3d-printing-guides/best-glue-for-resin-prints
  - https://dermnetnz.org/topics/allergy-to-acrylate
  - https://formlabs.com/global/support/Safety-Formlabs-SLA-printers/
  - https://newatlas.com/bondic-uv-liquid-plastic-welder/35085/
  - https://hackaday.com/2018/03/08/3d-printering-print-smoothing-tests-with-uv-resin/
  - https://hackaday.com/2022/01/04/uv-resin-perfects-3d-print-but-not-how-you-think/
  - https://commons.wikimedia.org/wiki/File:UV_curing_glue_kit_for_Huawei-Screen.jpg
  - https://commons.wikimedia.org/wiki/File:Lightwave_Electronics_model_142_Laser_Optics_Fix.jpg
  - https://commons.wikimedia.org/wiki/File:UV_Curing_Process.jpg
  - https://commons.wikimedia.org/wiki/Category:UV_curing
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, materials, processes, seal

## 141 Hot-melt adhesive (glue gun)

*adhesives & bonding.* A plastic stick melted in a glue gun that sticks as it cools; quick and gap-filling but weak and softens with heat

### What it is

- **plain_name**: A stick of plastic that a glue gun melts into a hot, runny glue; it grabs as it cools, sets within seconds to a minute and fills gaps, but it is fairly weak and goes soft again when it gets hot
- **term**: Hot-melt adhesive (hot glue, applied with a glue gun)
- **aliases**: 
  - hot glue, hot-melt glue, HMA (Wikipedia 'Hot-melt adhesive')
  - hot adhesive, thermoplastic adhesive (Wikipedia 'Adhesive'; 'List of glues')
  - glue gun, hot glue gun, glue pistol
  - glue sticks: full-size (7/16 in, about 11 mm) and mini (5/16 in, about 7 mm) (Surebonder)
  - high-temp, low-temp, dual-temp and 'cool shot' glue guns (Surebonder)
  - EVA hot melt, polyamide hot melt, polyolefin hot melt (names by base plastic; Henkel LOCTITE guide p. 8; Wikipedia)
  - reactive hot melt or PUR hot melt (applied like hot glue, then cures with moisture so it won't re-melt; Henkel p. 8; Wikipedia)
  - hot-melt pressure-sensitive adhesive (HMPSA), a permanently tacky version used for tapes and labels (Wikipedia)
  - hot-glue over-moulding, potting or strain relief (Hackaday)
  - brand names a beginner may search for: Thermogrip (brand), Surebonder (brand), Glu-Stix (brand)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: A solid plastic glue stick is melted by an electrically heated glue gun and squeezed onto the parts; the molten plastic wets the surfaces and grips them as it cools and hardens, with no drying or curing step.
- **complexity**: A few parts: (1) the glue stick, most often a blend of ethylene-vinyl acetate (EVA) plastic, a sticky tackifier resin and wax (Wikipedia); (2) the glue gun, a heated chamber and nozzle warmed by a continuous-duty heating element, with a trigger mechanism (or thumb pressure) that pushes the stick forward (Wikipedia; Wikimedia Commons photo of glue-gun internals); and (3) the two parts being joined.
- **how_it_works**: Hot-melt glue is a thermoplastic: it softens when heated and hardens when cooled, again and again (Wikipedia 'List of glues'). The gun melts the stick into a hot, sticky liquid that flows onto and into the surfaces; as it cools it solidifies in a few seconds to a minute and grips them (Wikipedia 'Hot-melt adhesive'). Because it doesn't shrink as it sets (solvent glues can lose 50-70% of their thickness as they dry), a blob of it fills gaps, and it can even hold a smooth part by wrapping around it, like the setting of a gemstone in a ring (Wikipedia; thisTOthat). The same property sets its limits: warm it up again and it softens, and even at room temperature a constant load can make it slowly creep (Wikipedia; Henkel p. 8).

### Finder attributes

- **job**: 
  - glue or bond: quick bonds between wood, card, paper, fabric, foam, plastics and many other materials
  - join and hold: holds light parts, wires and circuit boards in place, or tacks parts together temporarily while something else is fitted (Wikipedia; Raise3D)
  - seal it, or pass cables or fluid through: potting, strain relief and waterproof over-moulds on wire splices and connectors (Hackaday)
- **motion**: none: rigid to slightly rubbery once cool
- **degrees_of_freedom**: 0: holds the parts still, although the rubbery glue lets them flex slightly under load
- **special_behaviour**: 
  - none of the listed behaviours. Its useful quirk is that it can be undone: heat softens it again and isopropyl alcohol run into the edge of the bond makes it let go (Make:; Raise3D), which makes it handy for temporary holds
- **holding_principle**: 
  - material bond (glue, solvent or melting): molten plastic wets the surfaces and grips them as it solidifies (Wikipedia; Henkel p. 8)
  - shape (the parts interlock; form-fit): a blob that wraps around a part, or flows into holes and grooves, also locks it in mechanically, e.g. a glass bead held onto wood (thisTOthat)
- **input_output**: not applicable
- **power**: passive (no power needed): the finished joint needs no power; the glue gun needs mains power or a battery to melt the glue
- **removability**: semi-permanent (can be undone but may damage parts): it can usually be peeled or cut off, softened with heat, or released by running isopropyl alcohol into the edge of the bond (Make:; Raise3D). On porous materials such as wood, card or fabric some glue stays in the surface.
- **reuse_cycles**: a few times: the parts can usually be separated and glued again with fresh glue, but the old glue itself is not reused
- **tools_needed**: A glue gun of the right size and temperature (full-size 7/16 in / about 11 mm or mini 5/16 in / about 7 mm sticks; high, low or dual temperature) and matching sticks, since the sizes are not interchangeable (Surebonder); a silicone mat or scrap card to catch drips (Surebonder; thisTOthat); optionally a heat gun to preheat metal parts (Glu-Stix), a lolly (popsicle) stick to spread the glue while hot (thisTOthat), isopropyl alcohol and cotton swabs to remove it (Make:), and a bowl of cold water in case of burns (thisTOthat).
- **seal**: watertight: a continuous bead or over-mould keeps water out of wire splices and cable entries; a hot-glue over-mould made in a 3D-printed mould survived a saltwater bath without leaking (Hackaday 2024), and polyolefin hot melts are good moisture barriers (Wikipedia). It is not a pressure seal, and it can peel away from smooth surfaces.
- **load**: Light (medium at best with high-temperature or specialty sticks). Fine for crafts, card, foam, wires and light fittings; weak on smooth, cold or non-porous surfaces such as metal and glass, where it often pops off (Henkel p. 8 lists 'poor adhesion on metals'; Glu-Stix). Craft EVA sticks have low resistance to creep under a constant load (Wikipedia). It grips best where it can soak into or key into rough, porous surfaces such as wood, card and fabric (Wikipedia: the thick melt suits porous and permeable surfaces). Raise3D calls hot-glue bonds on resin prints 'relatively weak in shear'.
- **adjustable**: no: once cool it is fixed, though it can be softened with heat and repositioned or peeled off (Raise3D)
- **play_and_precision**: not applicable: glue doesn't locate the parts, and you only have seconds to position them before it sets (Wikipedia; Raise3D says about 30-45 seconds before repositioning gets difficult), so precise alignment needs a jig or locating features. The rubbery glue allows a little flex even when set.
- **access_needed**: one side only (blind): glue is put on one face, or run as a fillet along the outside of the joint, from the front; nothing has to reach behind the parts
- **materials**: Glue sticks are usually EVA (ethylene-vinyl acetate) blended with tackifier resin and wax; polyamide sticks resist heat and oil better; polyolefin types are made for polypropylene and polyethylene (Wikipedia; Henkel p. 8). Bonds well: porous or rough materials such as wood, card, paper, fabric and foam (Wikipedia; Surebonder), many plastics (Henkel p. 8), and rubber, ceramics, metal and glass to some degree (Wikipedia). 3D prints: fine for light and temporary joints on PLA, PETG, ABS and resin (Raise3D), and hot glue sticks very firmly to PETG unless a release agent is used (Hackaday 2024); but a hot gun can soften thin PLA, foam or thin plastic (thisTOthat: 'it can melt the material you are working with'; CNC Kitchen: PLA gives at about 60 °C). Weak: smooth metal and glass, which chill the glue before it can wet them, unless cleaned, roughened and preheated (Henkel p. 8; Glu-Stix); standard EVA sticks on polypropylene and polyethylene (use polyolefin hot melt; Wikipedia; Henkel p. *(unverified parts omitted)*
- **maker_difficulty**: easy: cheap tools, no mixing and no waiting; the main skills are working quickly before the glue skins over and avoiding burns

### Making it

- **processes**: 
  - 3D print (FDM): tacking parts, holding wires and circuit boards in printed enclosures, and casting hot glue into printed moulds for strain relief and waterproof over-moulds (Hackaday; Printables models)
  - 3D print (resin): temporary or non-structural joints such as attaching models to bases or painting handles (Raise3D)
  - woodwork: quick bonds on wood and other porous materials; high-temperature guns give the strongest bonds on wood (Surebonder; Wikipedia)
  - laser cut: card, foam board and thin wood parts for models and prototypes; low-temperature guns suit foam and fabric (Surebonder)
  - off-the-shelf part: glue guns and sticks; in industry, hot melt closes cartons, binds book spines and fixes wires and parts in electronics (Wikipedia)
- **print_in_place**: no: the glue is added after printing. Printed moulds for casting hot glue are separate parts that are opened afterwards.
- **making_tips_3d_printing**: 1) Watch the heat: PLA starts to soften at about 60 °C (CNC Kitchen oven test) while a high-temperature glue gun runs at about 380 °F (193 °C) (Surebonder), so a big blob can warp thin PLA walls; use a low-temperature or dual-temperature gun, dab small amounts, or glue onto thicker areas (Raise3D recommends low-temperature guns for thin resin parts and testing a dot on scrap first). 2) Design for it: add holes, grooves, slots or undercuts that the melted glue can flow into and lock around, and pockets that surround a part, since hot glue holds non-porous parts best by encasing them (thisTOthat). 3) Use it for wiring: tack wires and circuit boards inside printed enclosures and add strain relief where cables exit (Wikipedia notes electronics makers use hot melt to fix parts and wires). 4) Cast hot glue in printed moulds for strain relief and waterproof over-moulds on wire splices and connectors: print the mould in PETG so it survives the heat (Hackaday 2020), and coat it with a release agent (silicone oil, vegetable oil, Vaseline or silicone grease) or the glue will stick firmly (Hackaday 2020, 2024; Printables 1280166). A PLA mould works but wears out sooner (Printables 1280166). One mould maker suggests glue 'not too hot, about 170-180 °C' and waiting 5 minutes before opening (Printables 15081). 5) Work fast: glue skins over in seconds, so apply short beads or dots and press the parts together at once (Raise3D); let the gun preheat 3-5 minutes first, since stringy, thick glue means it isn't hot enough (Surebonder). 6) Removing it from prints: run isopropyl alcohol into the edge of the bond with a cotton swab and it releases cleanly (Make:); a Hackaday reader uses isopropyl alcohol to release glue from printed moulds. 7) Keep hot-glued prints out of hot cars and sunny windows: both the glue and PLA soften there (Raise3D; Wikipedia).
- **off_the_shelf_parts**: Search for: 'hot glue gun' (full size or mini; high, low or dual temperature; corded or cordless) and matching 'hot glue sticks 7/16 in' ('11 mm') or 'mini glue sticks 5/16 in' ('7 mm') (Surebonder); 'high temperature' or 'low temperature' glue sticks; 'polyamide hot melt' for heat and oil resistance, 'polyolefin hot melt' for polypropylene and polyethylene, and 'PUR hot melt' (reactive, cures after cooling) (Wikipedia; Henkel p. 8); a 'silicone glue mat' (Surebonder); 'adhesive-lined' or 'dual-wall heat shrink', whose inner wall is essentially hot-melt glue, for sealed wire joints (Hackaday 2024 reader comment).
- **rules_of_thumb**: 
  - Craft EVA glue sticks: strong enough from about 30-50 °C, limited to use below about 60-80 °C, low creep resistance under load, typical melting point about 130 °C (Wikipedia 'Hot-melt adhesive').
  - Polyamide hot melts are applied at over 200 °C and generally bond well from -40 °C to 70 °C; reactive PUR hot melts cure with moisture over several hours to days and then serve from about -30 °C to 150 °C (Wikipedia 'Hot-melt adhesive'; Henkel p. 8).
  - Hot melts are applied molten in the 65-180 °C range (Wikipedia 'Adhesive'); industrial dispensing is typically above 195 °C at 750-10,000 cP (Henkel 'LOCTITE Design Guide for Bonding Plastics', vol. 6, p. 8).
  - Glue gun temperatures: high-temperature about 380 °F (193 °C), low-temperature about 300 °F (149 °C), extra-low 'cool shot' about 250 °F (121 °C) (Surebonder); low-temperature guns range from 170 °F to 250 °F (77-121 °C) (Glu-Stix).
  - Stick sizes: mini 5/16 in (6.8 mm) and full-size 7/16 in (10.9 mm); they are not interchangeable (Surebonder 'How to Choose the Right Size Hot Glue Stick').
  - Let the gun preheat 3-5 minutes before gluing (Surebonder 'Hot Glue Tips').
  - Hot glue solidifies in a few seconds to one minute (Wikipedia 'Hot-melt adhesive'); Raise3D gives about 30-45 seconds before repositioning gets difficult.
  - Metal: clean with alcohol or acetone, roughen the surface, preheat both metal parts, and allow at least 24 hours before testing the bond (Glu-Stix 'Bonding Metals With Hot Melt Glue').
  - Moulds for casting hot glue: print them in PETG and coat them with a release agent (Hackaday 2020, 2024).

### When to use it

- **everyday_examples**: 
  - The flaps of cardboard boxes and cartons sealed on packaging lines (Wikipedia)
  - The glued spines of paperback books (Wikipedia)
  - Wires and components held in place inside electronic gadgets (Wikipedia)
  - Craft projects, artificial flower arrangements and foam radio-controlled model aircraft (Wikipedia)
- **when_to_use**: Use it for quick, cheap joints where speed matters more than strength: crafts, cardboard and foam models, prototypes, props and cosplay, tacking parts in place while other fixings go in, holding wires and small boards in enclosures, strain relief on cables, and filling gaps between rough or mismatched parts (Wikipedia; Surebonder; Raise3D). It sets in seconds with no mixing, joins many different materials, and can be undone with heat or isopropyl alcohol, which suits temporary fixtures (Make:; Raise3D). Cast into printed moulds, it makes simple waterproof over-moulds for wire joints (Hackaday).
- **when_not_to_use**: Avoid it for load-bearing or structural joints (use epoxy, screws or a structural adhesive), for anything that gets warm, such as car interiors, sunny windows or near motors and lamps (use epoxy, polyamide or PUR hot melt), for parts under a constant load, where it creeps (Wikipedia; Raise3D), and in the cold, where it can let go (thisTOthat). It grips smooth metal and glass poorly unless they are preheated (Henkel p. 8; Glu-Stix; use epoxy or superglue instead), can melt thin plastic and foam (thisTOthat; use a low-temperature gun or another glue), and leaves thick, stringy joints that are hard to make neat (thisTOthat; Raise3D; for neat joints use superglue or solvent welding).
- **environment_limits**: Heat: craft EVA glue is limited to below about 60-80 °C and loses strength well before it melts, so hot glue softens in a hot car (Wikipedia; Raise3D). Polyamide sticks work up to about 70 °C under load, and cured reactive PUR hot melt to about 150 °C (Wikipedia). Cold: thisTOthat warns hot glue 'does not withstand cold temperatures'. Creep: EVA hot glue slowly gives way under a constant load (Wikipedia). Weather and chemicals: cheap craft sticks resist weathering and some chemicals less well than specialised hot melts (Wikipedia), and isopropyl alcohol loosens the bond (Make:). Polyamide sticks absorb moisture from the air, which can make them foam and form voids when melted (Wikipedia).
- **safety_notes**: Burns: the glue coming out of the nozzle is hot enough to burn and even blister skin (Wikipedia), and a high-temperature gun at about 380 °F (193 °C) can cause severe burns, so keep children away or give them low-temperature guns (Glu-Stix). Keep a bowl of cold water handy for burns, keep the gun upright, and purge the drip that builds up at the nozzle onto scrap card before gluing (thisTOthat). Hot melts often give off no fumes unless they are overheated (Wikipedia 'List of glues'), so don't leave a gun heating for long periods. The hot nozzle can also scorch work surfaces; use a stand or silicone mat (Surebonder).
- **common_failures**: The glue skins over before the parts meet, giving a weak joint: apply small amounts, press at once and use a fully heated gun (Raise3D; Surebonder; thisTOthat). It pops off smooth metal or glass because the cold surface chills it: clean, roughen and preheat the parts (Glu-Stix; Henkel p. 8). It melts or warps thin plastic, foam or PLA: use a low-temperature gun or less glue (thisTOthat; Surebonder). Stringy 'spider webs' and lumpy beads (thisTOthat). The joint sags or slides over time under a constant load, or lets go in heat or cold (Wikipedia; thisTOthat). The gun jams or the glue flows unevenly when the stick is the wrong diameter (Surebonder). Glue sticks firmly inside a printed mould when no release agent is used (Hackaday 2024).
- **related**: 
  - Heat staking: also melted plastic, but melts a post on the part itself into a rivet head instead of adding glue
  - Cyanoacrylate (superglue): much stronger and neater on tight-fitting parts, but brittle and not gap-filling
  - Two-part epoxy: strong, heat-resistant, gap-filling glue for load-bearing joints; takes minutes to hours to cure
  - Reactive PUR hot melt: applied like hot glue but cures with moisture into a thermoset that won't re-melt, serving to about 150 °C (Wikipedia; Henkel p. 8)
  - Double-sided foam tape: another no-wait way to mount light parts, with no heat and no mess
  - Silicone and MS-polymer adhesive sealants: flexible, heat- and weather-resistant seals, but they take hours to cure
  - Contact adhesive: better for bonding large flat sheets of foam, rubber, fabric or leather
  - UV-curing adhesive: also sets on demand in seconds, but clear and neat; needs light to reach the glue
  - Solvent welding: fuses same-plastic parts into one piece; stronger and neater, but only on plastics the solvent dissolves

### Pictures, videos and models

- **links**: 
  - [Stanley Hot Glue Gun GR35K (Wikimedia Commons, by Evan-Amos)](https://commons.wikimedia.org/wiki/File:Stanley-Hot-Glue-Gun-GR35K.jpg): Photo of an inexpensive hobby hot glue gun, the image used on Wikipedia's hot-melt adhesive article *(licence: Public domain)*
  - [Hot Glue Gun intern (Wikimedia Commons, by 1-1111)](https://commons.wikimedia.org/wiki/File:1111-1_Hot_Glue_Gun_intern_-_Interna_einer_Heißklebepstole.jpg): Photo of the inside of a hot glue gun: heater, melt chamber, nozzle and trigger feed *(licence: CC BY-SA 3.0)*
  - [Can You Inject Hot Glue Into 3D Printed Molds? | DIY Cable Repair & Protection (Print Practical, YouTube)](https://www.youtube.com/watch?v=-uNsyOG0eZY): Video of hot glue injected into a 3D-printed mould to over-mould and waterproof a wire splice, including the need for a release agent (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Sleeve with hot glue. Mold 3D printed / Manchon pour fiche JST. Moule imprimé en 3D (Daniel Roibert, YouTube)](https://www.youtube.com/watch?v=vetH_S9nsAE): Video of casting a hot-glue strain-relief sleeve around a JST connector in a printed mould (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Over-Molding Wires With Hot Glue And 3D Printed Molds (Hackaday, August 2024)](https://hackaday.com/2024/08/02/over-molding-wires-with-hot-glue-and-3d-printed-molds/): Photos and an embedded video of hot-glue over-moulds on wire splices, with the failed first attempt and the vegetable-oil release fix *(licence: link only)*
- **make_it_yourself**: 
  - [A form for injecting hot glue to hermetically seal the wire connection (Miki SP5ME, Printables)](https://www.printables.com/model/1280166-a-form-for-injecting-hot-glue-to-hermetically-seal): Printable two-part mould for sealing soldered or crimped wire joints (cables up to 3 or 6 mm) in hot glue; grease the halves with Vaseline or silicone grease first. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
  - [Hot glue Sleeve, shell mold for JST-XH connector (john3volts3, Printables; original design by Daniel Roibert)](https://www.printables.com/model/15081-hot-glue-sleeve-shell-mold-for-jst-xh-connector): Printable PETG moulds for casting hot-glue strain-relief sleeves on 2- to 8-pin JST-XH battery balance connectors, plus split parts for other widths. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Glue strength test pieces (MethodicalMaker, Printables)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable shear, tension and torque test pieces for comparing hot glue with other adhesives using a hanging scale. Details read through the Printables public API; the URL appeared in search results. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A cut-away glue gun showing the stick pushed by the trigger into the heated chamber and out of the nozzle, next to two joint close-ups: hot glue flowing into the grain of wood and wrapping around a wire, and the same joint with a thermometer above about 60-80 °C where the glue is drawn sagging and letting go.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hot-melt_adhesive
  - https://en.wikipedia.org/wiki/Adhesive
  - https://en.wikipedia.org/wiki/List_of_glues
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://thistothat.com/glue/hotglue.shtml
  - https://surebonder.com/blogs/surebonder-blog/glue-gun-wattage-explained-how-to-pick-the-right-hot-glue-gun-for-your-project
  - https://surebonder.com/blogs/surebonder-blog/how-to-choose-the-right-size-hot-glue-stick
  - https://surebonder.com/blogs/surebonder-blog/tips-for-better-bonding
  - https://glu-stix-online.com/blogs/news/the-difference-between-high-temperature-and-low-temperature-glue-guns
  - https://glu-stix-online.com/blogs/news/bonding-metals-with-hot-melt-glue
  - https://makezine.com/article/technology/simple-solution-to-removing-hot-glu/
  - https://hackaday.com/2020/02/11/cheap-strain-relief-by-casting-hot-glue-in-a-3d-print/
  - https://hackaday.com/2024/08/02/over-molding-wires-with-hot-glue-and-3d-printed-molds/
  - https://www.raise3d.com/blog/best-resin-prints-glue/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://commons.wikimedia.org/wiki/File:Stanley-Hot-Glue-Gun-GR35K.jpg
  - https://commons.wikimedia.org/wiki/File:1111-1_Hot_Glue_Gun_intern_-_Interna_einer_Heißklebepstole.jpg
  - https://commons.wikimedia.org/wiki/Category:Glue_guns
  - https://www.youtube.com/watch?v=-uNsyOG0eZY
  - https://www.youtube.com/watch?v=vetH_S9nsAE
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** materials

## 142 Double-sided foam tape (acrylic foam pressure-sensitive adhesive)

*adhesives & bonding.* A tape with sticky foam that grips on contact and stays flexible, mounting parts without drilling; pressure-sensitive adhesive (PSA)

### What it is

- **plain_name**: A thick, squashy sticky tape with glue on both sides that you press between two parts to stick them together for good, with no drilling, screws or waiting for glue to dry
- **term**: Double-sided foam tape (acrylic foam pressure-sensitive adhesive tape)
- **aliases**: 
  - double-sided foam tape
  - double-coated foam tape
  - acrylic foam tape
  - foam mounting tape
  - mounting tape
  - dimensional tape (thick double-sided tape; Wikipedia 'Double-sided tape')
  - moulding tape / molding tape (car badges and trim)
  - emblem tape, attachment tape (car trade)
  - structural bonding tape
  - PSA foam tape (pressure-sensitive adhesive)
  - foam pads, sticky pads, mounting squares
  - PE foam tape and PU foam tape (cheaper tapes with a polyethylene or polyurethane foam core)
  - VHB tape, 'Very High Bond' (3M brand)
  - ACXplus (tesa brand)
  - Scotch mounting tape (3M brand)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: A roll of tape made of a soft foam layer with pressure-sensitive glue on both faces, which sticks two parts together as soon as you press them, spreads the load along the whole joint, soaks up small gaps and vibration, and can also seal the joint.
- **complexity**: Single piece: a foam core (acrylic foam in the strongest 'VHB-type' tapes, or polyethylene or polyurethane foam in cheaper tapes) with a layer of pressure-sensitive adhesive on each face and a peel-off protective strip (release liner). Optional extras: a surface primer or adhesion promoter, and a small hand roller (J-roller) to press it down
- **how_it_works**: The glue on each face is a pressure-sensitive adhesive (PSA): a soft, permanently tacky, viscoelastic material that flows into the tiny bumps of a surface when you press it, then resists flowing when loaded, so it sticks by molecular attraction (van der Waals forces) without drying or hardening (Wikipedia 'Pressure-sensitive adhesive'). Firm pressure gives more contact and a stronger bond, and the grip keeps building for up to about 3 days as the adhesive keeps flowing into the surface ('wet-out') (3M VHB 5952 data sheet). The foam core squashes to fill slightly uneven or mismatched surfaces, spreads the load along the whole joint instead of at a few screw points, lets two materials that expand differently with heat slide a little, and damps vibration (3M VHB Tape Design Guide). Because it is soft and viscoelastic it is stronger against quick loads than slow steady ones, and it slowly creeps under a constant weight, so it needs enough area for the load.

### Finder attributes

- **job**: 
  - glue or bond: sticks two parts together on contact with no drying time
  - join and hold: mounts hooks, clips, sensors, badges, signs and panels to a surface without drilling
  - seal it, or pass cables or fluid through: a continuous closed-cell foam strip also seals the joint against water, moisture and dust (3M VHB 5952 data sheet; tesa PE foam tapes)
- **motion**: none: a fixed joint. The soft foam does let the parts shift slightly sideways (up to about 3 times the tape thickness, per 3M) so that heat growth does not break it, and a joint can slowly creep under a steady load
- **degrees_of_freedom**: 0: the parts are bonded together (apart from the small give of the foam)
- **special_behaviour**: 
  - none: it simply holds. Useful side effects rather than listed behaviours: the foam absorbs shock and vibration, fills small gaps between uneven parts, and allows different heat growth of the two materials (3M VHB Tape Design Guide)
- **holding_principle**: 
  - material bond (glue, solvent or melting): a pressure-sensitive adhesive that wets the surface and holds by molecular attraction without hardening; the foam core carries the load between the two adhesive faces
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): it is sold as a permanent bond, but it can be cut apart through the foam with a wire, fishing line or fine saw, softened with a heat gun, and the leftover adhesive removed with solvents or a rubber eraser wheel (3M technical bulletin on disassembly). Paint, soft plastics or print surfaces can be damaged; for clean removal use stretch-release strips instead
- **reuse_cycles**: once: the tape is single-use; the parts can usually be cleaned and re-taped
- **tools_needed**: To fit: scissors or a knife to cut the tape, isopropyl alcohol and water on a lint-free cloth to clean, and a small roller (J-roller) or firm hand pressure; optionally a primer or adhesion promoter for plastics and paints. To remove: fishing line, wire or a fine saw to cut through the foam, a heat gun, a plastic scraper, and an adhesive remover (citrus cleaner, bug-and-tar remover or MEK) (3M disassembly bulletin)
- **seal**: watertight: a continuous, unbroken loop of closed-cell foam tape seals against water, moisture and dust, which is why it is used to bond and seal lenses and windows into housings (3M VHB 5952 data sheet; 3M VHB Tape Design Guide; tesa PE foam tapes). Gaps or joins in the loop leak
- **load**: Light to medium. Strong in shear (sliding one part along the other) and in straight pull when the whole area is loaded evenly; weakest in peel and cleavage (a load that lifts one edge first). Example for one 1.1 mm acrylic foam tape after 72 h: overlap shear 550 kPa, straight pull (normal tensile) 480 kPa, but 90° peel only 39 N per cm of width (3M VHB 5952 data sheet). For steady (static) weight 3M advises about 57 cm² of tape per kg (4 in² per lb) to avoid creep, and about 85 kPa (12 psi) as a design value for dynamic loads (3M VHB 5952 data sheet)
- **adjustable**: no: it grabs on contact, so the part can't be slid into position once it touches; cut it off and re-tape to move it
- **play_and_precision**: Not a locating joint: the part ends up wherever you placed it by hand, so use a jig or pencil marks for alignment. No play when bonded, but the foam gives slightly under load, creeps under steady weight, and allows sideways movement of up to about 3 times the tape thickness between parts that grow differently with heat (3M VHB 5952 data sheet)
- **access_needed**: one side only (blind): you stick the part onto the surface from the front; nothing has to reach behind the wall or panel
- **materials**: Tape: acrylic foam with acrylic adhesive (the strongest and most heat- and weather-resistant type), or polyethylene (PE) or polyurethane (PU) foam with acrylic or rubber adhesive (cheaper, lighter duty) (tesa acrylic and PE foam tape pages; Wikimedia Commons photo of PU foam tape). Bonds well to high-surface-energy materials: metals (aluminium, steel, copper), glass, and plastics such as ABS and polycarbonate (42 dynes/cm), PVC (39), acrylic (38), polyester (43, the family PETG belongs to) and nylon (46), plus many paints and powder coats with 'modified acrylic' tapes (3M/JBC LSE selection guide; 3M VHB Tape Design Guide). Bonds poorly to low-surface-energy plastics such as polypropylene (29 dynes/cm), polyethylene (31) and PTFE (18) unless you use a special low-surface-energy (LSE) tape or a primer such as 3M Primer 94 (3M/JBC LSE guide; 3M VHB Tape Design Guide). Needs extra care: bare wood, particleboard and concrete must be sealed first, glass needs a silane treatment for best results, and soft vinyl and rubber with plasticisers that migrate can weaken the bond (3M VHB 5952 data sheet). *(unverified parts omitted)*
- **maker_difficulty**: easy: cut, clean, stick and press. The only real skills are cleaning the surface, pressing hard, giving it enough area, and waiting a day or more before loading it fully

### Making it

- **processes**: 
  - off-the-shelf part: rolls of tape in many widths and thicknesses, and die-cut pads
  - 3D print (FDM): design printed parts with a flat pad for the tape
  - laser cut: acrylic and sealed plywood parts
  - woodwork: only onto sealed or painted wood
  - sheet metal: panels, stiffeners and brackets (3M VHB Tape Design Guide shows panel-to-frame and stiffener-to-panel bonds) *(unverified parts omitted)*
- **print_in_place**: no: the tape is applied after printing (you could print a recess to locate the tape, but the tape itself is a separate part)
- **making_tips_3d_printing**: Give the part a flat mounting pad and put that face on the print bed: a surface printed directly on the bed is 'perfectly flat and smooth' (Prusa knowledge base), which gives the tape the most contact. Watch for warped corners and elephant's foot, because the tape conforms only a little and 'will not flow to fill large gaps' (3M VHB 5952 data sheet); a thick tape (about 1.1 mm or more) is suggested for rigid parts. Size the pad for the load: about 57 cm² of tape per kg of steady load (3M), so a 200 g holder needs roughly 11-12 cm² (for example two 19 mm x 30 mm pieces). Round the pad and tape corners, because pointed corners start to lift first (Wikipedia 'Pressure-sensitive adhesive'). Material: ABS, ASA, PETG and nylon are high-surface-energy plastics that bond well (3M/JBC chart lists ABS 42, polyester 43, nylon 46 dynes/cm); polypropylene prints need an LSE tape or primer. PLA softens above about 60 °C (Prusa), below the tape's own long-term limit of about 93 °C, so in a hot car or near a heater the print may fail before the tape. Clean the pad with isopropyl alcohol and water, press firmly (3M suggests about 100 kPa, 15 psi), and wait: about 50% of full strength after 20 minutes, 90% after 24 hours and 100% after 72 hours at room temperature (3M). In a test of tesa tapes on printed nylon (PA-12), a PU-foam tape (tesa 4976) was strongest and every tape got stronger with longer dwell time (Forerunner 3D). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: double-sided acrylic foam tape, VHB tape (3M brand; e.g. 5952 for plastics and powder-coated paint, 4991 thick grey tape used for action-camera mounts), LSE acrylic foam tape (for polypropylene and polyethylene), PE foam mounting tape, PU foam tape (e.g. tesa 4976), foam mounting squares or pads, emblem or moulding tape, die-cut adhesive pads; adhesion promoter or tape primer (e.g. 3M Primer 94); J-roller (small hand roller); adhesive remover and 'emblem removal' tools
- **rules_of_thumb**: 
  - Steady (static) loads: about 57 cm² of tape per kg (4 in² per lb) of weight to avoid excessive creep; dynamic loads: design at about 85 kPa (12 psi) (3M VHB Tape 5952 technical data sheet)
  - Press the tape to about 100 kPa (15 psi) with a roller or platen; when bonding two rigid parts, press again after assembly so the whole bond line sees that pressure (3M VHB 5952 data sheet; 3M VHB Tape Design Guide)
  - Bond strength at room temperature: about 50% after 20 minutes, 90% after 24 hours, 100% after 72 hours; 1 hour at 66 °C (150 °F) speeds this up and can raise the final strength (3M VHB 5952 data sheet)
  - Apply at 21-38 °C ideally and not below 10-15 °C for most acrylic foam tapes (special low-temperature tapes go down to 0 °C); once applied, cold holding is generally fine (3M VHB 5952 data sheet; 3M VHB Tape Design Guide)
  - Use tape at least 1.1 mm (45 mil) thick to bond rigid parts of normal flatness; thinner tape can be used as the parts get more flexible (3M VHB 5952 data sheet)
  - The tape tolerates sideways (shear) movement between the two parts of up to about 3 times its thickness, e.g. from different heat expansion (3M VHB 5952 data sheet; 3M VHB Tape Design Guide)
  - Clean with isopropyl alcohol and water (3M gives 50:50 in the design guide and 70:30 in the 5952 data sheet); degrease oily parts first, abrade (about 180 grit) oxidised or dirty surfaces, seal porous wood and concrete (3M VHB 5952 data sheet; 3M VHB Tape Design Guide)
  - Surfaces below roughly the mid-30s in surface energy (dynes/cm), such as polypropylene (29), polyethylene (31) and PTFE (18), are hard to bond: use an LSE tape or a primer (3M LSE product selection guide via JBC Technologies)
  - Peel is the weak direction: one 1.1 mm acrylic foam tape gives 550 kPa in overlap shear but only 39 N/cm in 90° peel (3M VHB 5952 data sheet), so design joints to load the tape in shear
  - Heat roughly halves steady-load holding at each step: the 5952 tape held 1,000 g on 3.23 cm² for 10,000 minutes at 23 °C, 500 g at 66 °C and 250 g at 93 °C; its long-term temperature limit is 93 °C and short-term 149 °C (3M VHB 5952 data sheet)
  - Round the corners of tapes and labels: pointed corners start to detach first (Wikipedia 'Pressure-sensitive adhesive')

### When to use it

- **everyday_examples**: 
  - Car badges, emblems and trim strips, which car makers fix in the factory with thin double-sided foam 'moulding tape' (MIG Welding Forum thread on refitting badges; 3M VHB Tape Design Guide lists trim and extrusion attachment)
  - The sticky pad under an action-camera mount on a helmet or car (a tape seller says GoPro mounts use 3M VHB 4991 tape, 2.3 mm thick) (StickyTapes.com)
  - Signs bonded to their frames, and stiffeners stuck inside metal panels with no visible screws (3M VHB Tape Design Guide) *(unverified parts omitted)*
- **when_to_use**: When you want to mount something light or medium-weight on a smooth, clean surface without drilling holes (tiles, glass, painted metal, smooth plastics, a 3D-printed bracket onto a desk or enclosure). When joining different materials, such as metal to plastic or glass, which expand differently with heat. When screws would show, crack thin material or concentrate the load at a few points. When you also want the joint to seal out water and dust, or to damp vibration and rattles (e.g. mounting a sensor, circuit board, or lens window). When the parts are slightly uneven and need something that fills small gaps
- **when_not_to_use**: Not on rough, dusty, crumbly or unsealed porous surfaces such as raw wood, plaster, brick or concrete (use screws and wall plugs, or an epoxy or construction adhesive after sealing). Not on polypropylene, polyethylene, PTFE or silicone unless you use an LSE tape or primer (or use mechanical fasteners). Not for heavy, overhead or safety-critical loads, where creep or a peeling edge could drop the part: add screws or brackets. Not if you want to take the part off cleanly later (use stretch-release adhesive strips, hook-and-loop fasteners, magnets or screws). Not above about 93 °C long-term for acrylic foam, or on PLA parts in hot places. Not where the part must be positioned exactly (use pins, a jig or screws), or where the joint is loaded in peel
- **environment_limits**: Heat: a typical acrylic foam tape (3M VHB 5952) is rated about 93 °C long-term and 149 °C for short periods, and its steady-load holding halves between 23 °C and 66 °C and again by 93 °C (3M VHB 5952 data sheet). PSAs generally lose shear holding when hot and lose tack when cold (Wikipedia 'Pressure-sensitive adhesive'). Cold: apply above about 10 °C (0 °C for low-temperature tapes); below about -40 °C the tape turns rigid and a sharp knock can fracture it (3M disassembly bulletin). Water, UV and solvents: acrylic foam tapes are made to resist UV, moisture, temperature cycling and many solvents and seal against water (3M VHB Tape Design Guide; Creep: under a constant load the viscoelastic foam slowly flows, so steady loads need about 57 cm² of tape per kg (3M). The printed part may be the weak point: PLA softens above about 60 °C (Prusa). Shelf life of unused tape about 24 months (3M VHB 5952 data sheet) *(unverified parts omitted)*
- **safety_notes**: Low hazard in itself. Isopropyl alcohol, primers and adhesive removers are flammable and give off fumes (3M lists a flash point of -20 °C for Primer 94); use them in a ventilated place away from flames (3M VHB Tape Design Guide; 3M disassembly bulletin). Take care with heat guns, knives and wires when removing tape. *(unverified parts omitted)*
- **common_failures**: Peels off from one edge or corner because the load prises the part away instead of sliding it (design for shear, round the corners, use a taller pad). Slowly slides or sags (creep) under a steady weight because the tape area is too small (use about 57 cm² per kg). Never stuck properly because the surface was dusty, oily, textured, warped or low-surface-energy plastic, the tape was applied in the cold, or it was not pressed hard enough (clean with IPA/water, prime plastics, press to about 100 kPa, apply above 10 °C). Loaded too early, before the bond built up over 24-72 hours. Loosens over time on soft vinyl or rubber whose plasticisers migrate into the adhesive (3M VHB 5952 data sheet). Lets go in a hot car when the tape or the PLA part softens *(unverified parts omitted)*
- **related**: 
  - Stretch-release adhesive strips: also stick without drilling, but pull off cleanly by stretching; weaker and meant for light, temporary mounting
  - Contact adhesive (contact cement): a liquid that also bonds on contact, but forms a thin, stiff glue line with no foam to fill gaps or damp vibration
  - Two-part epoxy and structural acrylic adhesives: much stronger and stiffer, and fill gaps, but need mixing, clamping and cure time and are hard to undo
  - Hot-melt adhesive (glue gun): quick and gap-filling, but weak on smooth surfaces and softens in the heat
  - Hook-and-loop fastener: usually attached with its own adhesive backing; lets you remove and refit the part
  - Magnet joint (embedded magnets, magnetic catch): removable mounting on steel surfaces
  - Silicone and MS-polymer adhesive sealants: flexible, gap-filling bond and seal that needs curing time
  - Glued joint design (butt, lap and scarf joints; peel vs shear): how to shape any bonded joint so it is loaded in shear rather than peel
  - Gel 'nano tape': a clear acrylic gel tape without a foam core, used the same way for light items

### Pictures, videos and models

- **links**: 
  - [Double-sided tapes (Wikimedia Commons, by Ural-66)](https://commons.wikimedia.org/wiki/File:Двухсторонний_скотч_f003.jpg): Photo comparing a thin double-sided tape with a thick black polyurethane-foam double-sided tape, with toothpicks stuck to both faces to show that both sides are sticky; used in the Wikipedia 'Double-sided tape' article *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [3M VHB Tape Design Guide (3M, 2022)](https://multimedia.3m.com/mws/media/1400379O/3m-vhb-tape-design-guide.pdf): Illustrated guide with photos of typical bonds (panel to frame, stiffener to panel, lens window to housing), test photos, surface-preparation advice, and a chart of bond strength building up over 72 hours *(licence: link only (manufacturer document))*
  - [Which Double-Sided Mounting Tape is Best? 3M VHB vs, Duck, Gorilla, Gorilla Clear, T-REX, Loctite (Project Farm, YouTube)](https://www.youtube.com/watch?v=cIasko9-AmQ): Side-by-side strength tests of several brands of double-sided mounting tape on different surfaces (title and channel confirmed through YouTube oEmbed; not watched) *(licence: link only (YouTube, all rights reserved))*
  - [A Complete Guide To 3M VHB Tape - Learn About The Wide Capabilities Of 3M VHB! (Adhesive and Die Cutting University, YouTube)](https://www.youtube.com/watch?v=6WYz3Kunk08): Video overview of acrylic foam tape types and uses (title and channel confirmed through YouTube oEmbed; not watched) *(licence: link only (YouTube, all rights reserved))*
  - [Double Sided Tape on 3D Printed Parts - Strength Testing Data (Forerunner 3D Printing)](https://forerunner3d.com/double-sided-tape-strength-testing/): Peel, dynamic shear and T-block test results for four tesa double-sided tapes on printed nylon (PA-12) parts, raw and Cerakote-coated, after immediate, 24 h and 72 h dwell *(licence: link only)*
- **make_it_yourself**: 
  - [Simple Hook (lollo87, Printables)](https://www.printables.com/model/1237722-simple-hook): A simple printable wall hook designed to be stuck on with double-sided tape; the designer prints it in PETG at 100% infill, laid on its side (details read through the Printables public API; page URL seen in search results) *(licence: CC BY)*
  - [Zip Tie Mount with screw and/or double-sided tape (McTech3D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/392054-zip-tie-mount-with-screw-andor-double-sided-tape): Small cable-tie anchor that can be fixed with a screw or with 1/2 in double-sided tape (or both), for comparing tape against a screw *(licence: CC BY)*
  - [KLIPPT mounting base for 3M VHB tape (trudslev, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/535553-klippt-mounting-base-for-3m-vhb-tape): A flat mounting base added to a locking cable clip so it can be stuck on with acrylic foam tape instead of screws *(licence: CC BY-SA)*
- **diagram_idea**: A side cut-away showing the tape's layers (liner, adhesive, foam core, adhesive) being pressed between a printed bracket and a wall by a small roller, then two arrows on the finished joint: a long green arrow along the wall labelled 'shear: strong' and a red arrow lifting the top edge labelled 'peel: weak'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pressure-sensitive_adhesive
  - https://en.wikipedia.org/wiki/Double-sided_tape
  - https://en.wikipedia.org/wiki/Pressure-sensitive_tape
  - https://multimedia.3m.com/mws/media/1400379O/3m-vhb-tape-design-guide.pdf
  - https://multimedia.3m.com/mws/media/2366487O/3m-vhb-tape-5952.pdf
  - https://products.riogrande.com/content/Instruction-Sheets/3M-VHB-Tape-IS.pdf
  - https://www.jbc-tech.com/media/pfznldbx/choosing-the-right-low-surface-energy-tapes-and-adhesives.pdf
  - https://www.tesa.com/en-us/industry/products/foam-tapes/acrylic-foam-tapes
  - https://www.tesa.com/en-us/industry/products/foam-tapes/pe-foam-tape
  - https://forerunner3d.com/double-sided-tape-strength-testing/
  - https://www.mig-welding.co.uk/forum/threads/glue-for-car-badges-emblems.116068/
  - https://www.stickytapes.com/products/gopro-vhb-adhesive-mounting-tape-4991-tape-made-by-3m
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/Category:Double_sided_tapes
  - https://commons.wikimedia.org/wiki/File:Двухсторонний_скотч_f003.jpg
  - https://commons.wikimedia.org/wiki/File:Nano_tape_used_to_hang_household_items.jpg
  - https://www.youtube.com/watch?v=cIasko9-AmQ
  - https://www.youtube.com/watch?v=6WYz3Kunk08
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1237722-simple-hook

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, making_tips_3d_printing, materials, processes, safety_notes

## 223 PVA wood glue (white and yellow glue)

*adhesives & bonding.* A water-based glue that dries by soaking into porous materials like wood, paper and cork; strong on wood, with water-resistant grades

*Not researched yet.*

## 224 Contact adhesive (contact cement)

*adhesives & bonding.* A rubbery glue spread on both surfaces, left to dry until tacky, then pressed together to bond instantly; good for sheets, rubber, fabric and leather

*Not researched yet.*

## 225 Polyurethane glue (foaming moisture-cure glue)

*adhesives & bonding.* A glue that cures by reacting with moisture and foams as it sets, filling gaps; bonds wood, stone, metal, foam and some plastics

*Not researched yet.*

## 226 Structural acrylic and low-surface-energy plastic adhesives (for PE and PP)

*adhesives & bonding.* Two-part acrylic glues, and primers used with superglue, that bond tough slippery plastics like polyethylene and polypropylene which most glues can't

*Not researched yet.*

## 227 Silicone and MS-polymer adhesive sealants

*adhesives & bonding.* Rubbery glues that cure from moisture in the air into a flexible, waterproof bond that also seals gaps

*Not researched yet.*

## 228 Elastomeric solvent glue (flexible craft glue)

*adhesives & bonding.* Thick, clear, rubbery solvent-based glues that stay flexible, for bonding dissimilar materials, fabric, shoes and jewellery

*Not researched yet.*

## 229 Anaerobic adhesive (threadlocker, retaining compound)

*adhesives & bonding.* A liquid that hardens only when shut off from air between close-fitting metal parts, used to stop screws loosening or to fix bearings on shafts

*Not researched yet.*

## 230 Stretch-release adhesive strips

*adhesives & bonding.* Sticky strips that hold firmly but come away cleanly when you pull the tab slowly along the wall, leaving no residue

*Not researched yet.*

## 231 Hide glue (animal glue)

*adhesives & bonding.* A traditional glue made from animal collagen that can be undone later with heat and moisture, used in instrument making and furniture repair

*Not researched yet.*

## 232 Epoxy putty (kneadable two-part putty)

*adhesives & bonding.* Two doughs kneaded together that set hard in place, for filling gaps, repairing and building up shapes that can then be drilled and tapped

*Not researched yet.*

## 270 Glued joint design (butt, lap and scarf joints; peel vs shear)

*adhesives & bonding.* How the shape of a glued joint decides its strength, since most glues are strong in shear and weak when peeled or pulled straight apart

*Not researched yet.*

