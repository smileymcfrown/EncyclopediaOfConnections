# adhesives & bonding: Glues (types, by material and use)

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 137 Cyanoacrylate (superglue)

*adhesives & bonding.* A runny or gel glue that sets in seconds by reacting with moisture; strong on tight-fitting plastics, metal and wood but brittle and weak in peel

*Also covers:* Also covers gluing baked polymer clay (flexible gel superglue on clean, uncoated surfaces).

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
- **load**: medium: in a tight lap joint general-purpose CA is very strong in shear and tension: Loctite's tests reached more than 24 MPa on ABS and about 28 MPa on nylon 6, often breaking the plastic before the glue, and Prusa measured about 10-13 MPa pulling apart glued PLA, PETG and ASA test prints (Loctite design guide; Prusa). It is weak in peel and impact, and hobby testers find parts 'much easier twisted or peeled than pulled apart' (Prusa; Loctite: 'poor peel strength'). Note the conflict: Wikipedia calls CA's shear strength 'low', while industrial lap-shear tests rate it 'excellent'; the difference is probably brittleness under knocks and twisting ⚑ [uncertain]. Without a primer it holds almost nothing on polyethylene or polypropylene (about 0.3-1 MPa) (Loctite design guide). *(⚑ parts need confirming)*
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
- **making_tips_3d_printing**: 1) Make the mating faces flat and close-fitting: CA fills only small gaps (about 0.015-0.5 mm, Permabond), so sand faces flat, remove sanding dust, grease and old glue (Prusa), and wipe with isopropyl alcohol (3M CA100 data sheet). A slightly rough or layered surface helps it grip (Prusa). 2) Use only a little and spread it on one face; press and line up within a few seconds. If it isn't right, pull apart, clean off and restart rather than wiggling it (Prusa; thisTOthat). 3) For clean joints, hold the parts together and run water-thin CA along the seam so it wicks in by capillary action, but on rough FDM prints it can also run along layer lines and fingerprints and spoil the surface (Prusa). 4) For gaps or poorly fitting prints, use gel CA (it sets a little slower, which also gives more time to align, but is slightly weaker and frosts more), or mix CA with talc, microballoons or baking soda as a quick filler (Prusa; Wikipedia). 5) Accelerator sets it instantly, but the faster reaction gives off more heat, which can slightly warp low-temperature plastics like PLA; use a light mist (Prusa). 6) Stop white 'frosting' (blooming) with good ventilation: don't shut freshly glued parts in a box, and use odourless / low-bloom CA on clear or visible parts (Prusa; Loctite design guide). 7) Design joints to be loaded in shear or compression, not peel: overlapping or stepped joints, pins and keys; make the joint wider rather than longer, because the ends of an overlap take most of the load (Loctite design guide). 8) PETG can't be solvent-welded with hobby chemicals, so CA is a common choice for it (Prusa); in one long-term test some superglues seemed to weaken PETG over time, while polyurethane construction glue and methacrylate glues scored highest (Hackaday on Cosel's test) ⚑ [uncertain]. 9) Soaking prints in thin CA to make them stronger barely helps: CNC Kitchen's hooks went from about 53 kg to 58 kg (Hackaday). 10) Keep bottles clean and upright, work from a small puddle on a non-porous scrap, and let refrigerated, unopened bottles warm up before opening (Prusa). *(⚑ parts need confirming)*
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
- **common_failures**: The joint snaps when knocked, bent or peeled because cured CA is hard and brittle; design the joint for shear, or use rubber-toughened CA or epoxy (Loctite design guide; Prusa). Weak or slow bonds in gappy joints or thick blobs; improve the fit or switch to gel CA or epoxy (Wikipedia; Loctite). Parts that simply pop off polyethylene, polypropylene or acetal because nothing wets the surface; use a primer or another joining method (Loctite design guide). White frosting around the joint from fumes in still air (Prusa; Loctite). Cracking or crazing of acrylic, polycarbonate, ABS or clear styrene near uncured glue, especially where the plastic is under stress; use as little glue as possible and cure it quickly (Loctite design guide; Prusa). Weak bonds from old, thickened or cheap glue, or from repositioning after it has grabbed (Prusa). Thin glue wicking along layer lines and fingerprints and marking the print (Prusa). Accelerator heat slightly warping thin PLA parts (Prusa). Bonds on glass, or in wet or hot places, failing over time (Loctite; Wikipedia). On polymer clay, ordinary thin CA is brittle and 'notorious for popping right off of polymer' under stress: use a flexible gel CA, clean both faces with alcohol or acetone first, and don't glue onto paint, sealer or mica powder, because the glue then holds only the surface coating (Blue Bottle Tree).
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
  - Pinned glue joint: CA is the usual glue for pinning metal and resin miniatures, the pin taking the knocks
  - Slot-in model hinge: CA hinges are set by wicking thin CA into the hinge's porous covering
  - Liquid-clay bond: bakes polymer clay to itself; gel CA is the choice for baked clay that can't be baked again
  - Baked-in findings: embedding metal in the clay before baking holds better than gluing it on afterwards; gel CA locks screw eyes and gems into baked clay

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
  - https://thebluebottletree.com/best-glue-for-polymer-clay/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fast
- **bonds_well**: PLA, PETG, ABS or ASA, nylon, TPU or flexible prints, resin prints, acrylic or polycarbonate, PVC, wood, metal, glass or ceramic, rubber, fabric or leather
- **bonds_poorly**: slippery plastics (PE or PP), foam
- **tools**: press or vice
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, foam, clay or putty, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** load, making_tips_3d_printing

## 138 Two-part epoxy

*adhesives & bonding.* A resin and hardener mixed together that set into a strong, gap-filling solid; slow or fast types, for metal, wood, most plastics and composites

*Also covers:* Also covers J-B Weld (brand), the epoxy makers often suggest instead of welding. Also covers epoxy on polystyrene foam, filler mixes by job, and slow epoxy for model hinge points and hole fills.

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
  - J-B Weld or JB Weld (brand): a two-part epoxy whose name sounds like welding (it began as 'Just Bond'), so makers use it as a verb ('you can probably jb-weld it') and suggest it instead of welding, e.g. for fixing a flange onto a small motor shaft (Wikipedia 'J-B Weld'; r/robotics thread read through the Arctic Shift archive)
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
- **holding_principle**: 
  - material bond (glue, solvent or melting): the cured epoxy sticks to both surfaces
  - shape (the parts interlock; form-fit): when it fills holes, grooves, threads or undercuts and hardens, it also locks parts mechanically ⚑ [uncertain] *(⚑ parts need confirming)*
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
- **materials**: Bonds well: steel, aluminium and other metals, wood, glass, stone, ceramics, fibreglass and carbon-fibre composites, cured epoxy and polyester, and many rigid plastics such as PVC, polycarbonate, ABS, PLA, PETG and resin prints (Wikipedia; Loctite EA E-00CL; Loctite design guide; Prusa). Safe on polystyrene foam (EPS and XPS) because it contains no solvent, unlike polyester and vinylester resins, whose styrene melts them (Swaylocks forum thread 'Resin and foam compatibility'). Weaker on nylon and acrylic (about 1-6 MPa in Loctite's tests), and poor on polyethylene, polypropylene, PTFE and silicone (Loctite design guide; Loctite EA E-00CL) ⚑ [uncertain for silicone and PTFE]. Polyester gelcoat does not stick to cured epoxy, although epoxy sticks well to polyester (Wikipedia). *(⚑ parts need confirming)*
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
- **making_tips_3d_printing**: 1) Prepare the surfaces: sand the mating faces, clean off dust and grease with isopropyl alcohol or acetone, and glue soon after (Prusa; Epoxyworks; Loctite EA E-00CL). 2) Pick the speed: fast 5-minute epoxy for small quick jobs, slow epoxy for strength, because the long cure lets it 'creep in each pore and crack' and slow types are 'usually stronger and less brittle'. A few dots of CA can hold the parts while the epoxy cures (Prusa). 3) Measure the ratio exactly (1:1 for many syringes, 5:1 by volume for some bulk epoxies) and never add extra hardener to speed it up (Loctite EA E-00CL; West System 105/205; Epoxyworks). Mix thoroughly for at least two minutes in a cup, scraping sides and bottom, or about 15 seconds past an even colour for small amounts; add fillers only after mixing (Epoxyworks; Loctite EA E-00CL; West System). 4) Mix small batches and spread them out: a lump in a cup heats itself and sets much faster, and large masses can smoke or melt the cup (Epoxyworks; Wikipedia). PLA starts to soften at about 60 °C (CNC Kitchen), so avoid thick, fast-setting lumps against thin PLA walls ⚑ [uncertain]. 5) Design a little glue gap: about 0.1-0.2 mm gives the strongest shear bond (Loctite EA E-00CL); for bigger gaps, thicken the epoxy with colloidal silica or a high-density filler to a mayonnaise or peanut-butter consistency (Epoxyworks; West System). 6) Clamp or tape just firmly enough to squeeze a little out; clamping too hard squeezes it all out and leaves a weak, 'starved' joint (West System). Keep the parts still until it has cured (Loctite EA E-00CL). 7) Use epoxy to glue nuts, magnets, threaded rod or bearings into printed pockets, or to fill and fair seams, and clear epoxy to imitate glass (Epoxyworks; Prusa). 8) Speed curing with gentle warmth after it has gelled, up to about 49 °C (120 °F) (Epoxyworks), which is below PLA's softening point. 9) Avoid relying on epoxy for nylon, PE or PP prints, where it bonds poorly (Loctite design guide). 10) In Prusa's quick pull test on printed samples, two 5-minute epoxies reached about 2-6 MPa, less than good CA glues (about 10-13 MPa), and in CNC Kitchen's test soaking prints in epoxy did not make them stronger (Prusa; Hackaday); in a long-term PETG test, two-part epoxy held well enough that the PETG broke first (Hackaday on Cosel's test). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'two-part epoxy adhesive' in '5-minute' (fast), '30-minute' and 'slow cure' types; 'structural epoxy' or 'high-strength epoxy'; 'clear epoxy'; 'flexible' or 'toughened' epoxy; 'steel-filled epoxy'; 'epoxy putty'; 'dual cartridge' with a 'static mixing nozzle' and dispensing gun; bulk 'epoxy resin and hardener' with metering pumps; fillers such as 'colloidal silica', 'microfibres', 'high-density filler' and 'microballoons' (Loctite design guide; Epoxyworks; West System). Brand examples: Loctite EA E-00CL / E-05MR, WEST SYSTEM 105 with 205 or 206 hardener, Z-Poxy, J-B Weld (brands).
- **rules_of_thumb**: 
  - Mix exactly at the stated ratio (e.g. 1:1 for Loctite EA E-00CL, 5:1 by volume for WEST SYSTEM 105/205); changing the amount of hardener does not control cure speed and gives a mix that never fully cures (Loctite EA E-00CL data sheet; West System 105/205 data sheet; Epoxyworks 'The Basics of WEST SYSTEM Epoxy Resin and Hardener').
  - Temperature: every 18 °F (10 °C) warmer than 72 °F (22 °C) roughly halves the pot life and cure time (Epoxyworks); each hardener has a minimum working temperature, e.g. 4-5 °C for a fast hardener and 16-18 °C for slow ones (West System 105/205 data sheet; West System hardener selection guide).
  - Pot life is measured on 100 g in a cup and is much shorter than working time in a thin film (e.g. 9-12 minutes vs 60-70 minutes for 105/205); mix small batches (Epoxyworks).
  - Strongest bond line about 0.1-0.2 mm; contact pressure is necessary and parts must not move while it cures (Loctite EA E-00CL). For gaps, thicken with filler and clamp only until a little squeezes out (West System 'Bonding and Clamping').
  - Design joints for shear and compression, avoid peel and cleavage, and widen rather than lengthen overlaps (Loctite 'Design Guide for Bonding Plastics', vol. 6, pp. 77-79).
  - Full strength takes time: 24 hours at 25 °C for high strength with a fast epoxy (Loctite EA E-00CL), and 1-4 days to working strength for 105/205 (West System 105/205 data sheet).
  - Heat limits: room-temperature-cured epoxies soften at fairly low temperatures, e.g. heat deflection temperature 118 °F (48 °C) and ultimate Tg 142 °F (61 °C) for 105/205 (West System), and a glass transition temperature of just 20 °C for a fast epoxy cured at 25 °C (Loctite EA E-00CL). Curing with heat raises it (Loctite design guide), and in general epoxy adhesive strength degrades above 177 °C (Wikipedia 'Epoxy').
  - Thicken it to suit the job: to 'peanut butter' with wood flour for fillets that mustn't sag (CLC Boats), or to 'mayonnaise' with 406 or 404 filler to fill a hole round a fastener (Cruising World). For hole fills in warm weather use a slow hardener, because 'fast-cure will exotherm, creating bubbles and a poor seal' (Practical Sailor).

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
- **common_failures**: Soft, sticky or never-curing epoxy from the wrong ratio, poor mixing or working too cold; scrape it off and redo it, never pile fresh epoxy on uncured epoxy (West System 'Epoxy Problem Solver'; Epoxyworks). A weak, 'starved' joint from clamping so hard that all the glue squeezes out (West System). Bonds peeling off smooth, dirty or low-energy surfaces (PE, PP, nylon) because the surface wasn't sanded and cleaned, or the plastic can't be glued (Loctite design guide; Epoxyworks). Parts moved before the epoxy cured (Loctite EA E-00CL). The mix going hard in the cup before you've finished, because a big batch heats itself (Epoxyworks). A waxy film (amine blush) on some cured epoxies, a normal by-product in some conditions; wash it off with water before sanding or adding more epoxy (West System). Fast epoxy joints softening in warm places or losing strength in damp ones (Loctite EA E-00CL). Old stock that no longer cures properly (Prusa). Misaligned hinges on model aircraft from using 5-minute epoxy or CA, which set before you can check the line-up, or from gluing both surfaces at once: use slow epoxy and glue the hinges into one surface first, then the other once it has cured (Airfield Models).
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
  - Liquid-clay bond: bakes polymer clay to itself; epoxy is a cold alternative for baked clay, but can turn brittle with age
  - Bonded tube joint: tubes glued into or over sockets, sleeves or lugs, usually with epoxy
  - Fillet-and-tape joint: thickened epoxy fillets and resin-soaked glass tape welding plywood panels into one shell
  - Potted insert: an epoxy plug set into the soft core of a sandwich panel so a bolt can grip and clamp
  - Bonding fastener: a threaded stud or nut on a perforated base plate, usually glued on with epoxy

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
  - https://en.wikipedia.org/wiki/J-B_Weld
  - https://arctic-shift.photon-reddit.com/api/posts/ids?ids=1kcikdx
  - https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1kcikdx&limit=200
  - https://swaylocks.com/t/resin-and-foam-compatibility/38848 (forum.swaylocks.com redirects here; WebFetch got 403, read with curl)
  - https://airfieldmodels.com/information_source/how_to_articles_for_model_builders/construction/hinge_points/05.htm
  - https://clcboats.com/blogs/boatbuilding-tips/fillets (WebFetch returned only menus; read with curl)
  - https://www.cruisingworld.com/?p=40890
  - https://www.practical-sailor.com/boat-maintenance/a-solid-connection

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fills gaps
- **bonds_well**: PLA, PETG, ABS or ASA, nylon, resin prints, acrylic or polycarbonate, PVC, wood, metal, glass or ceramic, foam, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ropylene, PTFE and silicone (Loctite design guide; Loctite EA E-00CL) [uncertain for silicone and PTFE]. Polye…"*
- **bonds_poorly**: slippery plastics (PE or PP), silicone ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ropylene, PTFE and silicone (Loctite design guide; Loctite EA E-00CL) [uncertain for silicone and PTFE]. Polye…"*
- **tools**: press or vice
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, foam, clay or putty, carbon fibre or composites, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** holding_principle, making_tips_3d_printing, materials

## 139 Solvent welding (solvent cement)

*adhesives & bonding.* A solvent that softens the surfaces of certain plastics so they fuse together as it evaporates, like acetone on ABS or cement on acrylic and PVC

*Also covers:* Also covers why PE and PP pipe is heat-fused instead.

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
- **other_families**: seals & pass-throughs, welding, brazing & soldering
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
- **materials**: It only works when the solvent can dissolve both parts, so the solvent has to be matched to the plastic (Prusa; Oatey). Works well: ABS and ASA with acetone (Prusa; Wikipedia 'Plastic welding'); acrylic (PMMA, Plexiglas) with acrylic cement (U.S. Plastic Corp.; Associated Plastics); PVC, CPVC and ABS pipe, each with a cement made for that plastic (Oatey); polystyrene model kits with plastic cement (Wikipedia 'Plastic model'); HIPS with limonene and PVB filament with isopropyl alcohol (Prusa; CNC Kitchen). Acrylic cement also bonds acrylic to PVC, foamed PVC, high-impact polystyrene and ABS, though less strongly than acrylic to itself (Associated Plastics). Polycarbonate can be solvent-welded with dichloromethane (Wikipedia 'Plastic welding'), but Associated Plastics finds acrylic cement softens it without fusing it properly. PLA can be welded with dichloromethane, while acetone only makes PLA's surface sticky (Wikipedia 'Polylactic acid'); Prusa found acetone glued PLA 'just fine', but a reader reports it did not bond PLA+, so test first ⚑ [uncertain]. PETG is 'inert to all chemicals normally available to a hobbyist' (Prusa); one Prusa reader reports PVC cement containing tetrahydrofuran (THF) bonds PETG ⚑ [uncertain]. Does not work: polyethylene, HDPE, polypropylene and other polyolefins (Associated Plastics); thermosets, including cured resin prints (Henkel LOCTITE guide p. 13; Raise3D); and metals, glass, wood or other dissimilar materials (Henkel p. 13). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: for ABS, ASA, acrylic, PVC and polystyrene it needs only a bottle of the right solvent and a way to hold the parts still, although neat, invisible acrylic seams need square, well-fitting edges and practice on scrap (U.S. Plastic Corp.). It is harder for PLA and PETG, which need more hazardous solvents, so another glue is usually the better choice there.

### Making it

- **processes**: 
  - 3D print (FDM): ABS and ASA prints weld with acetone, HIPS with limonene and PVB with isopropyl alcohol; PLA only with stronger solvents, and PETG hardly at all (Prusa; CNC Kitchen; Wikipedia 'Polylactic acid')
  - laser cut: laser-cut or sawn acrylic boxes, cases and displays are the classic solvent-welded project, joined with water-thin capillary cement (U.S. Plastic Corp.; Associated Plastics; Wikipedia 'Plastic welding')
  - CNC: routed acrylic, PVC and polystyrene sheet parts; a router gives the flat, square edges that capillary cement needs (U.S. Plastic Corp.)
  - off-the-shelf part: PVC, CPVC and ABS pipe and fittings (Oatey) and injection-moulded plastic model kits (Wikipedia 'Plastic model')
  - 3D print (resin): not suitable, because cured resin is a thermoset that solvents can't fuse; use the same resin cured with UV light, superglue or epoxy instead (Henkel LOCTITE guide p. 13; Raise3D)
- **print_in_place**: no: the parts are printed separately and welded together afterwards. Solvent welding is a way to join split or repaired prints, not a printed mechanism.
- **making_tips_3d_printing**: 1) Match the solvent to the filament: ABS and ASA with acetone, HIPS with limonene, PVB with isopropyl alcohol; PETG is inert to the solvents hobbyists can normally get (Prusa). PLA can be welded with dichloromethane, but that solvent is highly hazardous and its consumer use is now banned in the USA (Wikipedia 'Polylactic acid'; US EPA); acetone only makes PLA's surface tacky (Wikipedia), and results differ between brands (Prusa's test versus a reader's failed PLA+ attempt), so try it on offcuts first. Resin prints can't be solvent-welded at all. 2) Make flat, clean mating faces: sand them level and remove dust, grease and old glue (Prusa). Because the wet joint is slippery and takes a while to set, design split parts with large flat gluing faces and add alignment pins or keys so the parts can't slide [design suggestion, not from a tested source]. 3) Two ways to apply it: (a) wet both faces with solvent, wait a few seconds for them to soften, then press firmly together (CNC Kitchen soaked broken ABS faces in acetone and pushed them together after a couple of seconds); or (b) press the parts together first and brush an extra-thin solvent along the seam so capillary action draws it in. The second is the cleanest method but needs smooth, level faces, and the solvent will also wick along layer lines and fingerprint grooves and mark the surface (Prusa). 4) For gaps, use a thicker cement made from the same filament: MatterHackers dissolves 4 g of ABS in 50 mL of acetone for thin 'ABS juice', 8 g for 'ABS glue' and 20 g for putty-like 'ABS slurry' that fills gaps, leaving it overnight in a glass, metal, polypropylene or HDPE container; using the same colour of filament gives a colour-matched joint. You can also glue in bits of filament to fill larger gaps (Prusa). 5) Clamp the parts with clothes pegs, rubber bands or clamps; pressing them together greatly improves strength (Prusa). 6) Let it dry properly: parts hold within seconds or minutes, but large joints, or joints with too much solvent, can take many days to lose all the solvent (Prusa). CNC Kitchen dried acetone-welded ABS for 24 hours at 60 °C in a food dehydrator; only do this with heat-resistant filaments, because PLA starts to soften at about 60 °C (CNC Kitchen oven test). The joint sinks a little as the solvent leaves, so leave some material to sand flush (Prusa). 7) Don't brush acetone onto each layer during printing to 'weld' the layers: CNC Kitchen found it gave only 6 MPa, about 15% of the strength of normal parts, and it puts a flammable solvent next to the hot nozzle. 8) You can design printed ABS accessories to be acetone-welded to ABS boxes instead of screwed on (Printables 'ABS Hinges & Latches (Weld to ABS with Acetone)'). 9) Filaments with a lot of additives may react differently: on the Bambu Lab forum one user reports their ABS solvent-welds well, while others found it would not vapour-smooth (forum reports) ⚑ [uncertain], so test a sample joint first. *(⚑ parts need confirming)*
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
- **when_not_to_use**: Don't use it on plastics your solvent can't dissolve: PETG (use superglue or epoxy), polyethylene, HDPE and polypropylene (use hot-gas plastic welding or a structural acrylic adhesive made for low-surface-energy plastics), or resin prints (use the same resin cured with UV light, superglue or epoxy) (Prusa; Associated Plastics; Raise3D). It can't join plastic to metal, glass or wood (use epoxy or superglue; Henkel p. 13), and it can't fill real gaps (use a thickened cement, slurry or epoxy; Associated Plastics; Henkel). Avoid it where you can't ventilate the fumes, for PLA if the only solvent that works is dichloromethane, and for parts that need to come apart again (use screws, heat-set inserts or snap fits). PE and PP-R pipe can't be solvent-welded either: it is joined by heat fusion, melting pipe and fitting on a hot tool or with a heating wire built into the fitting (see Heat-fused plastic pipe; Wikipedia 'Electrofusion'; NIBCO PP-R socket fusion instructions).
- **environment_limits**: The fused joint is the same plastic as the parts, so it softens at the same temperature (for printed parts, CNC Kitchen found PLA gives at about 60 °C, PETG at about 80 °C and ASA at about 110 °C). Until all the solvent has escaped, which can take days or weeks, the joint is weaker (Prusa; Henkel p. 13), and Henkel notes solvent-cemented joints have poor resistance to heat and to solvents; the same solvent that made the joint will soften it again. Cold and damp slow curing: don't cement acrylic below 15 °C (U.S. Plastic Corp.), and allow 50% more time for pipe joints in humid weather (Oatey cure chart). Humidity can also leave a white haze (blushing) on acrylic joints, and stressed or flame-polished edges craze into fine cracks when they meet solvent (Associated Plastics; Henkel).
- **safety_notes**: Solvent glues usually have the strongest smell of all glues and can contain flammable, harmful or even narcotic ingredients such as toluene, so ventilate well (Prusa). Wear gloves and safety glasses and keep solvents away from flames and heat (Oatey); CNC Kitchen warns that putting flammable acetone next to a hot printer is a serious fire risk. Dichloromethane (methylene chloride), used in some acrylic and model cements and able to weld PLA, can kill through acute exposure and causes cancer; the US EPA banned all consumer uses in a 2024 rule, phased out within a year (US EPA). Associated Plastics reports that Weld-On acrylic cements were reformulated in 2025 without dichloromethane and trichloroethylene, but says they are 'safer, not safe'. Never pressure-test solvent-welded pipes with compressed air or gas (Oatey).
- **common_failures**: Nothing happens, or the joint pops apart: the solvent doesn't dissolve that plastic (PETG, polyethylene, polypropylene, resin prints); check the solvent and plastic pair first (Prusa; Associated Plastics). Weak joint from a poor fit: capillary cement can't bridge gaps, so make square, flat edges or switch to a thickened cement or slurry (Associated Plastics; U.S. Plastic Corp.). Starved joint from clamping too hard, which squeezes the softened plastic out (Associated Plastics). Crazing (a web of fine cracks) around the joint on flame-polished or stressed edges (Associated Plastics; Henkel). White blush in humid weather (Associated Plastics). Soft or porous joint from trapped solvent, or loading it too early; wait days, not minutes (Prusa; Henkel). Surface damage where thin solvent wicked along layer lines or fingerprints (Prusa). On long acrylic seams the start of the joint sets before you finish the end, so work in shorter sections (Associated Plastics). Pipe joints leak when primer is skipped on PVC or CPVC, the wrong cement is used, cement is puddled, the pipe isn't fully pushed in with a quarter turn, or old, thickened cement is used (Oatey).
- **related**: 
  - Cyanoacrylate (superglue): sticks the surfaces together instead of dissolving them; works on most plastics including PLA and PETG and sets in seconds, but is brittle in peel (Prusa)
  - Two-part epoxy: fills gaps and bonds metal, wood and dissimilar materials that solvents can't; slower to cure (Prusa; Henkel)
  - Elastomeric solvent glue and contact adhesive: also solvent-based, but they leave a rubbery glue layer behind as the solvent dries instead of fusing the parts into one piece
  - UV-curing adhesive (including resin used as glue): the way to 'weld' resin prints, which solvents can't touch
  - Melted plastic weld: fuses plastics with heat instead of solvent, melting in extra plastic from a rod or filament with a hot-air gun or soldering iron; for polyethylene and polypropylene parts, which solvents can't touch, Associated Plastics says they have to be welded with a hot gas gun and a filler rod of the same polymer (Associated Plastics; Wikipedia 'Plastic welding')
  - Friction-welded plastic: fuses plastic with heat made by rubbing, e.g. a length of filament spun in a rotary tool and run along a seam, instead of solvent
  - Ultrasonic weld: fuses plastic parts with heat made by high-frequency vibration, a factory process, instead of solvent
  - Heat staking: melts a post on one part into a rivet head, a mechanical joint rather than fused faces
  - Structural acrylic and low-surface-energy plastic adhesives: the glue route for polyethylene and polypropylene, which solvents can't weld
  - Glued joint design (butt, lap and scarf joints): a bigger overlapping area makes a solvent weld stronger, just as with glues
  - Heat-fused plastic pipe: how polyethylene and polypropylene (PP-R) pipe, which solvent cement can't weld, is joined instead: pipe and fitting are melted on a hot tool (socket or butt fusion) or by a heating wire built into the fitting (electrofusion) (Wikipedia 'Electrofusion'; Wikipedia 'Piping and plumbing fitting'; NIBCO PP-R socket fusion instructions)
  - Liquid-clay bond: joins polymer clay to itself with a liquid of the same plastic cured by baking, rather than by dissolving the surfaces

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
  - https://en.wikipedia.org/wiki/Electrofusion
  - https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting
  - https://res.cloudinary.com/dzhpkjoqj/Nibco/PP-R-Pro-IOM-Manual.pdf

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest
- **bonds_well**: PLA, PETG, ABS or ASA, acrylic or polycarbonate, PVC, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…'just fine', but a reader reports it did not bond PLA+, so test first [uncertain]. PETG is 'inert to all chemi…"*
- **bonds_poorly**: resin prints, slippery plastics (PE or PP), wood, metal, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…'just fine', but a reader reports it did not bond PLA+, so test first [uncertain]. PETG is 'inert to all chemi…"*
- **tools**: press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: plastic or film
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: melt
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing, materials

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
- **seal**: watertight ⚑ [uncertain]: a continuous cured bead is solid plastic, and light-curing adhesives are also used to seal and coat products (Wikipedia 'Adhesive'), but no pressure rating was found for hobby joints *(⚑ parts need confirming)*
- **load**: Light to medium in hobby use. Industrial light-cure acrylics bond close-fitting parts strongly in shear (Henkel p. 9; LOCTITE AA 3105 datasheet), but most cured UV adhesives and printer resins are hard and rather brittle, so a joint can crack under impact, bending or peel, and shrinkage during curing adds stress (GA Lindberg; Raise3D). Resin used as glue is about as strong as the resin itself: a Formlabs forum user reports that properly cured joints break through the resin rather than along the seam, while Raise3D advises treating resin welding as mainly cosmetic and backing it up with superglue or epoxy for structural joints.
- **adjustable**: no: there is virtually unlimited time to reposition the parts before the light is switched on (Henkel p. 9), but none afterwards
- **play_and_precision**: not applicable: the glue doesn't locate the parts, but curing on demand lets you align parts precisely (for example in a jig) and then fix them in seconds without the glue shifting while it sets (Henkel p. 9; GA Lindberg). Acrylate-based formulations shrink quite a lot as they cure, which can pull parts slightly and adds stress (GA Lindberg).
- **access_needed**: one side only (blind), but the light must reach the glue: either through a part that lets UV or violet light pass, or from the open edge of the seam. Glue in shadow under an opaque part will not cure unless the product has a second cure mechanism (GA Lindberg; Henkel p. 9).
- **materials**: Bonds well: glass, many plastics, ceramics and most metals (LOCTITE AA 3105 datasheet; Wikipedia 'Adhesive' lists glass and optical manufacturing among its main uses); cured resin prints, best of all with the same resin (Formlabs; Raise3D; Anycubic). A reader of Prusa's gluing guide reports printer resin cured with a UV torch works 'amazingly well' on PETG, ASA, polycarbonate and PLA prints, but only where the cross-section is small enough for the light to get through (single user report) ⚑ [uncertain]. Limits: at least one part must let the curing light through, and some transparent plastics block UV (a 405 nm blue-light grade may still work) (GA Lindberg); opaque and black parts block the light (Prusa forum). Before it cures, the liquid adhesive can cause stress cracking in polycarbonate that is under stress (LOCTITE AA 3105 datasheet, ASTM D3929 test). Adhesion to low-surface-energy plastics such as polyethylene, polypropylene and silicone is expected to be poor ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: no mixing, and a UV torch kit, or leftover printer resin plus the printer's curing light, is all you need; the main skill is getting enough light to every part of the glue line

### Making it

- **processes**: 
  - 3D print (resin): the main maker use, gluing, repairing or hiding seams on resin prints with the same resin and a 405 nm light (Formlabs; Raise3D; Anycubic)
  - 3D print (FDM): small joints, seam filling and cosmetic repairs; printer resin brushed onto PLA prints cures into a sandable coating (Hackaday 2018, 2022; Prusa reader comment)
  - laser cut: clear acrylic or glass parts can be joined with clear UV adhesive where the sheet lets enough curing light through ⚑ [uncertain]
  - off-the-shelf part: bonding glass, lenses and optics, and small electronics, phone-screen and jewellery repairs (Wikipedia 'Adhesive'; Wikimedia Commons photos) *(⚑ parts need confirming)*
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
- **environment_limits**: Temperature depends on the product: as one industrial example, LOCTITE AA 3105 kept 100% of its lap-shear strength on polycarbonate after 340 hours at 93 °C, tested back at room temperature (datasheet); cheap craft UV resins are not documented ⚑ [uncertain]. Too much light degrades the adhesive and discolours it (GA Lindberg), and Raise3D warns that prolonged UV exposure can make cured resin brittle ⚑ [uncertain]. Acrylate types shrink as they cure, leaving built-in stress in the joint (GA Lindberg). Any glue left uncured in shadow stays soft liquid and never gains strength (GA Lindberg). *(⚑ parts need confirming)*
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
  - Baked-in findings: metal findings baked into polymer clay; UV resin poured over earring posts is an alternative that can't be baked again
  - Glass fusing: joins glass to glass by melting it in a kiln into one piece, where UV glue joins it cold with a glue line

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

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fast
- **bonds_well**: PLA, PETG, ABS or ASA, resin prints, slippery plastics (PE or PP), silicone, acrylic or polycarbonate, metal, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ion is small enough for the light to get through (single user report) [uncertain]. Limits: at least one part m…"*
- **bonds_poorly**:  ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ion is small enough for the light to get through (single user report) [uncertain]. Limits: at least one part m…"*
- **tools**: press or vice
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, clay or putty, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, materials, processes, seal

## 141 Hot-melt adhesive (glue gun)

*adhesives & bonding.* A plastic stick melted in a glue gun that sticks as it cools; quick and gap-filling but weak and softens with heat

*Also covers:* Also covers PLA glue sticks in a high-temperature glue gun, and a dab of hot glue to stop screw-terminal wires working loose. Also covers hot glue in foam-board folds and creases, foam-safe hot melts for polystyrene, and avoiding it on EVA foam that will be heat-formed.

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
  - PLA glue gun: a high-temperature glue gun fed with 3D-printed PLA 'glue sticks' to join PLA prints with PLA (Hackaday 2018)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs, welding, brazing & soldering
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
- **materials**: Glue sticks are usually EVA (ethylene-vinyl acetate) blended with tackifier resin and wax; polyamide sticks resist heat and oil better; polyolefin types are made for polypropylene and polyethylene (Wikipedia; Henkel p. 8). Bonds well: porous or rough materials such as wood, card, paper, fabric and foam (Wikipedia; Surebonder), many plastics (Henkel p. 8), and rubber, ceramics, metal and glass to some degree (Wikipedia). 3D prints: fine for light and temporary joints on PLA, PETG, ABS and resin (Raise3D), and hot glue sticks very firmly to PETG unless a release agent is used (Hackaday 2024); but a hot gun can soften thin PLA, foam or thin plastic (thisTOthat: 'it can melt the material you are working with'; CNC Kitchen: PLA gives at about 60 °C). Weak: smooth metal and glass, which chill the glue before it can wet them, unless cleaned, roughened and preheated (Henkel p. 8; Glu-Stix); standard EVA sticks on polypropylene and polyethylene (use polyolefin hot melt; Wikipedia; Henkel p. 8); silicone rubber and PTFE are not expected to bond ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: cheap tools, no mixing and no waiting; the main skills are working quickly before the glue skins over and avoiding burns

### Making it

- **processes**: 
  - 3D print (FDM): tacking parts, holding wires and circuit boards in printed enclosures, and casting hot glue into printed moulds for strain relief and waterproof over-moulds (Hackaday; Printables models)
  - 3D print (resin): temporary or non-structural joints such as attaching models to bases or painting handles (Raise3D)
  - woodwork: quick bonds on wood and other porous materials; high-temperature guns give the strongest bonds on wood (Surebonder; Wikipedia)
  - laser cut: card, foam board and thin wood parts for models and prototypes; low-temperature guns suit foam and fabric (Surebonder)
  - off-the-shelf part: glue guns and sticks; in industry, hot melt closes cartons, binds book spines and fixes wires and parts in electronics (Wikipedia)
- **print_in_place**: no: the glue is added after printing. Printed moulds for casting hot glue are separate parts that are opened afterwards.
- **making_tips_3d_printing**: 1) Watch the heat: PLA starts to soften at about 60 °C (CNC Kitchen oven test) while a high-temperature glue gun runs at about 380 °F (193 °C) (Surebonder), so a big blob can warp thin PLA walls; use a low-temperature or dual-temperature gun, dab small amounts, or glue onto thicker areas (Raise3D recommends low-temperature guns for thin resin parts and testing a dot on scrap first). 2) Design for it: add holes, grooves, slots or undercuts that the melted glue can flow into and lock around, and pockets that surround a part, since hot glue holds non-porous parts best by encasing them (thisTOthat). 3) Use it for wiring: tack wires and circuit boards inside printed enclosures and add strain relief where cables exit (Wikipedia notes electronics makers use hot melt to fix parts and wires). 4) Cast hot glue in printed moulds for strain relief and waterproof over-moulds on wire splices and connectors: print the mould in PETG so it survives the heat (Hackaday 2020), and coat it with a release agent (silicone oil, vegetable oil, Vaseline or silicone grease) or the glue will stick firmly (Hackaday 2020, 2024; Printables 1280166). A PLA mould works but wears out sooner (Printables 1280166). One mould maker suggests glue 'not too hot, about 170-180 °C' and waiting 5 minutes before opening (Printables 15081). 5) Work fast: glue skins over in seconds, so apply short beads or dots and press the parts together at once (Raise3D); let the gun preheat 3-5 minutes first, since stringy, thick glue means it isn't hot enough (Surebonder). 6) Removing it from prints: run isopropyl alcohol into the edge of the bond with a cotton swab and it releases cleanly (Make:); a Hackaday reader uses isopropyl alcohol to release glue from printed moulds. 7) Keep hot-glued prints out of hot cars and sunny windows: both the glue and PLA soften there (Raise3D; Wikipedia). 8) PLA instead of glue: Hackaday printed 11 mm PLA 'glue sticks' (an 11 x 150 mm cylinder at 75% infill, with angled notches added so the gun's feed lever could grip the hard, smooth PLA) and fed them through an 80 W high-temperature glue gun rated up to 208 °C to join thin, curved PLA panels along their inside seams, with no clamping. A small hobby gun, expected to run at about 150 °C, only softened the PLA to a putty. The molten PLA fused to the parts only at the surface, so it is closer to a hard glue than a true weld, but pulling the seams apart broke the parts or the bead itself; the gun took 10-15 minutes to warm up (Hackaday 2018, '3D Printering: Printing Sticks For A PLA Hot Glue Gun').
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
  - PLA in a glue gun: PLA softens at about 60-65 °C and melts at about 180-220 °C (RepRap wiki figures quoted by Hackaday), so a hobby gun at about 150 °C only softens it, while a high-temperature gun rated up to 208 °C extruded it acceptably; the sticks need to match the gun's 11 mm stick size and have notches for the feed lever (Hackaday 2018).

### When to use it

- **everyday_examples**: 
  - The flaps of cardboard boxes and cartons sealed on packaging lines (Wikipedia)
  - The glued spines of paperback books (Wikipedia)
  - Wires and components held in place inside electronic gadgets (Wikipedia)
  - Craft projects, artificial flower arrangements and foam radio-controlled model aircraft (Wikipedia)
- **when_to_use**: Use it for quick, cheap joints where speed matters more than strength: crafts, cardboard and foam models, prototypes, props and cosplay, tacking parts in place while other fixings go in, holding wires and small boards in enclosures, strain relief on cables, and filling gaps between rough or mismatched parts (Wikipedia; Surebonder; Raise3D). It sets in seconds with no mixing, joins many different materials, and can be undone with heat or isopropyl alcohol, which suits temporary fixtures (Make:; Raise3D). Cast into printed moulds, it makes simple waterproof over-moulds for wire joints (Hackaday). A small dab of hot glue also stops a wire working out of a screw terminal, 'without being too difficult to remove later' (SparkFun 'Connector Basics'). On foam board, run a bead inside a bevelled or overlap fold before folding it up and hold it at the right angle for a few seconds for 'a very sturdy joint' (Fold N Fly); spread into the foam of a score-and-fold crease and left to cool, it makes 'a rubber-like hinge' that stops the paper tearing (Flite Test). On polystyrene foam (EPS and XPS) use low-temperature, foam-safe hot melts, because standard-temperature glue may melt the foam (gluegun.com).
- **when_not_to_use**: Avoid it for load-bearing or structural joints (use epoxy, screws or a structural adhesive), for anything that gets warm, such as car interiors, sunny windows or near motors and lamps (use epoxy, polyamide or PUR hot melt), for parts under a constant load, where it creeps (Wikipedia; Raise3D), and in the cold, where it can let go (thisTOthat). It grips smooth metal and glass poorly unless they are preheated (Henkel p. 8; Glu-Stix; use epoxy or superglue instead), can melt thin plastic and foam (thisTOthat; use a low-temperature gun or another glue), and leaves thick, stringy joints that are hard to make neat (thisTOthat; Raise3D; for neat joints use superglue or solvent welding). Don't use it on EVA foam armour that will be heat-formed afterwards: it 'will start to melt when you use a heatgun' (cosplayadvice.com).
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
  - Melted plastic weld: melts the parts' own plastic, plus filler, into the seam with a soldering iron, 3D pen or hot-air gun; a glue gun fed with PLA sticks sits halfway between hot glue and plastic welding (Hackaday 2018)
  - Heat-shrink tubing: adhesive-lined (dual-wall) heat-shrink has a layer of thermoplastic glue inside, so shrinking it over a wire joint seals it much like a hot-glue over-mould (Wikipedia 'Heat-shrink tubing')
  - Screw terminal: a dab of hot glue on a screw terminal keeps its wire from working loose and can still be picked off later (SparkFun 'Connector Basics')
  - Glue stick and starch paste: gentle water-based paper glues; hot glue is fast and gap-filling on card but lumpy on paper, and its 'glue sticks' are a different thing

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
  - https://hackaday.com/2018/02/05/3d-printering-printing-sticks-for-a-pla-hot-glue-gun/
  - https://learn.sparkfun.com/tutorials/connector-basics/all
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://www.foldnfly.com/lounge/foam-core-tools-techniques.php (WebFetch hit a verification page; read with curl)
  - https://www.flitetest.com/articles/FT_Old_Fogey_Scratch_Build
  - https://cosplayadvice.com/using-eva-foam-for-cosplay/
  - https://www.gluegun.com/blogs/tips-tutorials/adhesives-for-polystyrene

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible, fills gaps, fast, can be undone
- **bonds_well**: PLA, PETG, ABS or ASA, nylon, slippery plastics (PE or PP), silicone, wood, paper or card, metal, glass or ceramic, rubber, fabric or leather, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…edia; Henkel p. 8); silicone rubber and PTFE are not expected to bond [uncertain].…"*
- **bonds_poorly**:  ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…edia; Henkel p. 8); silicone rubber and PTFE are not expected to bond [uncertain].…"*
- **tools**: glue gun, heat gun
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, paper or card, foam, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** materials

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
- **materials**: Tape: acrylic foam with acrylic adhesive (the strongest and most heat- and weather-resistant type), or polyethylene (PE) or polyurethane (PU) foam with acrylic or rubber adhesive (cheaper, lighter duty) (tesa acrylic and PE foam tape pages; Wikimedia Commons photo of PU foam tape). Bonds well to high-surface-energy materials: metals (aluminium, steel, copper), glass, and plastics such as ABS and polycarbonate (42 dynes/cm), PVC (39), acrylic (38), polyester (43, the family PETG belongs to) and nylon (46), plus many paints and powder coats with 'modified acrylic' tapes (3M/JBC LSE selection guide; 3M VHB Tape Design Guide). Bonds poorly to low-surface-energy plastics such as polypropylene (29 dynes/cm), polyethylene (31) and PTFE (18) unless you use a special low-surface-energy (LSE) tape or a primer such as 3M Primer 94 (3M/JBC LSE guide; 3M VHB Tape Design Guide). Needs extra care: bare wood, particleboard and concrete must be sealed first, glass needs a silane treatment for best results, and soft vinyl and rubber with plasticisers that migrate can weaken the bond (3M VHB 5952 data sheet). PLA prints: surface energy not found in these sources, but makers report printed PLA hooks holding well ⚑ [uncertain]. Silicone rubber and silicone-coated surfaces: poor ⚑ [uncertain] *(⚑ parts need confirming)*
- **maker_difficulty**: easy: cut, clean, stick and press. The only real skills are cleaning the surface, pressing hard, giving it enough area, and waiting a day or more before loading it fully

### Making it

- **processes**: 
  - off-the-shelf part: rolls of tape in many widths and thicknesses, and die-cut pads
  - 3D print (FDM): design printed parts with a flat pad for the tape
  - 3D print (resin): the same; bond to fully cured, clean parts ⚑ [uncertain]
  - laser cut: acrylic and sealed plywood parts
  - woodwork: only onto sealed or painted wood
  - sheet metal: panels, stiffeners and brackets (3M VHB Tape Design Guide shows panel-to-frame and stiffener-to-panel bonds) *(⚑ parts need confirming)*
- **print_in_place**: no: the tape is applied after printing (you could print a recess to locate the tape, but the tape itself is a separate part)
- **making_tips_3d_printing**: Give the part a flat mounting pad and put that face on the print bed: a surface printed directly on the bed is 'perfectly flat and smooth' (Prusa knowledge base), which gives the tape the most contact. A textured bed sheet makes that face bumpy, so use a smooth sheet for the pad face or a thicker, more conformable tape ⚑ [uncertain]. Watch for warped corners and elephant's foot, because the tape conforms only a little and 'will not flow to fill large gaps' (3M VHB 5952 data sheet); a thick tape (about 1.1 mm or more) is suggested for rigid parts. Size the pad for the load: about 57 cm² of tape per kg of steady load (3M), so a 200 g holder needs roughly 11-12 cm² (for example two 19 mm x 30 mm pieces). Round the pad and tape corners, because pointed corners start to lift first (Wikipedia 'Pressure-sensitive adhesive'). Shape the part so the load pulls along the wall (shear) rather than prising the top edge off (peel): for a hook, make the pad tall and put the hook low on it ⚑ [uncertain]. Material: ABS, ASA, PETG and nylon are high-surface-energy plastics that bond well (3M/JBC chart lists ABS 42, polyester 43, nylon 46 dynes/cm); polypropylene prints need an LSE tape or primer. PLA softens above about 60 °C (Prusa), below the tape's own long-term limit of about 93 °C, so in a hot car or near a heater the print may fail before the tape. Clean the pad with isopropyl alcohol and water, press firmly (3M suggests about 100 kPa, 15 psi), and wait: about 50% of full strength after 20 minutes, 90% after 24 hours and 100% after 72 hours at room temperature (3M). In a test of tesa tapes on printed nylon (PA-12), a PU-foam tape (tesa 4976) was strongest and every tape got stronger with longer dwell time (Forerunner 3D). If you print a pocket for the tape, keep it shallower than the tape so the tape stands proud and gets squeezed ⚑ [uncertain] *(⚑ parts need confirming)*
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
  - Signs bonded to their frames, and stiffeners stuck inside metal panels with no visible screws (3M VHB Tape Design Guide)
  - Foam mounting squares used at home to stick hooks, small mirrors and cable clips to walls and furniture ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: When you want to mount something light or medium-weight on a smooth, clean surface without drilling holes (tiles, glass, painted metal, smooth plastics, a 3D-printed bracket onto a desk or enclosure). When joining different materials, such as metal to plastic or glass, which expand differently with heat. When screws would show, crack thin material or concentrate the load at a few points. When you also want the joint to seal out water and dust, or to damp vibration and rattles (e.g. mounting a sensor, circuit board, or lens window). When the parts are slightly uneven and need something that fills small gaps
- **when_not_to_use**: Not on rough, dusty, crumbly or unsealed porous surfaces such as raw wood, plaster, brick or concrete (use screws and wall plugs, or an epoxy or construction adhesive after sealing). Not on polypropylene, polyethylene, PTFE or silicone unless you use an LSE tape or primer (or use mechanical fasteners). Not for heavy, overhead or safety-critical loads, where creep or a peeling edge could drop the part: add screws or brackets. Not if you want to take the part off cleanly later (use stretch-release adhesive strips, hook-and-loop fasteners, magnets or screws). Not above about 93 °C long-term for acrylic foam, or on PLA parts in hot places. Not where the part must be positioned exactly (use pins, a jig or screws), or where the joint is loaded in peel
- **environment_limits**: Heat: a typical acrylic foam tape (3M VHB 5952) is rated about 93 °C long-term and 149 °C for short periods, and its steady-load holding halves between 23 °C and 66 °C and again by 93 °C (3M VHB 5952 data sheet). PSAs generally lose shear holding when hot and lose tack when cold (Wikipedia 'Pressure-sensitive adhesive'). Cold: apply above about 10 °C (0 °C for low-temperature tapes); below about -40 °C the tape turns rigid and a sharp knock can fracture it (3M disassembly bulletin). Water, UV and solvents: acrylic foam tapes are made to resist UV, moisture, temperature cycling and many solvents and seal against water (3M VHB Tape Design Guide; 3M VHB 5952 data sheet); cheaper PE-foam tapes with rubber adhesive are less heat- and weather-resistant ⚑ [uncertain]. Creep: under a constant load the viscoelastic foam slowly flows, so steady loads need about 57 cm² of tape per kg (3M). The printed part may be the weak point: PLA softens above about 60 °C (Prusa). Shelf life of unused tape about 24 months (3M VHB 5952 data sheet) *(⚑ parts need confirming)*
- **safety_notes**: Low hazard in itself. Isopropyl alcohol, primers and adhesive removers are flammable and give off fumes (3M lists a flash point of -20 °C for Primer 94); use them in a ventilated place away from flames (3M VHB Tape Design Guide; 3M disassembly bulletin). Take care with heat guns, knives and wires when removing tape. Don't rely on tape alone where a falling object could hurt someone (heavy items, overhead, children's rooms): creep, heat, or a peeling edge can let go without warning ⚑ [uncertain] *(⚑ parts need confirming)*
- **common_failures**: Peels off from one edge or corner because the load prises the part away instead of sliding it (design for shear, round the corners, use a taller pad). Slowly slides or sags (creep) under a steady weight because the tape area is too small (use about 57 cm² per kg). Never stuck properly because the surface was dusty, oily, textured, warped or low-surface-energy plastic, the tape was applied in the cold, or it was not pressed hard enough (clean with IPA/water, prime plastics, press to about 100 kPa, apply above 10 °C). Loaded too early, before the bond built up over 24-72 hours. Pulls off a layer of paint, the top layers of a print, or the surface of unsealed wood instead of failing in the tape ⚑ [uncertain]. Loosens over time on soft vinyl or rubber whose plasticisers migrate into the adhesive (3M VHB 5952 data sheet). Lets go in a hot car when the tape or the PLA part softens *(⚑ parts need confirming)*
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
  - Adhesive tape joint and tape hinge: thin sticky tape for quick joints and bendable hinges, with no foam layer
  - Glue stick and starch paste: paper glues; foam tape pads are used instead to lift card layers off the page
  - Bonding fastener: a glue-on threaded stud or nut that gives a strong mounting point with no hole; foam tape is the quick, removable way to stick light mounts
  - Panel standoff: holds a drilled sign or glass panel off the wall on metal posts; foam tape holds light signs with no holes but can't be taken apart
  - Glass and mirror edge clips and clamps: hold a mirror or glass sheet by its edges with no glue; foam tape sticks light mirrors and panels on instead

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

### Finder tags

- **connects**: wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible
- **bonds_well**: PETG, ABS or ASA, nylon, slippery plastics (PE or PP), acrylic or polycarbonate, PVC, metal, glass or ceramic, rubber, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…nd in these sources, but makers report printed PLA hooks holding well [uncertain]. Silicone rubber and silicon…"*
- **bonds_poorly**: PLA, silicone, wood, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…nd in these sources, but makers report printed PLA hooks holding well [uncertain]. Silicone rubber and silicon…"*
- **tools**: heat gun, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: wall or ceiling
- **wall_hold**: tape or pads
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, paper or card, foam, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, making_tips_3d_printing, materials, processes, safety_notes

## 223 PVA wood glue (white and yellow glue)

*adhesives & bonding.* A water-based glue that dries by soaking into porous materials like wood, paper and cork; strong on wood, with water-resistant grades

*Also covers:* Also covers fabric and tacky glues (many are acrylic, not PVA) and anti-fray seam sealant. Also covers PVA on foam board and polystyrene foam, and its slow drying between foam faces.

### What it is

- **plain_name**: The everyday white or yellow bottle glue that cleans up with water, soaks into wood, paper or card, and dries as the water leaves, making wood joints that are often stronger than the wood around them
- **term**: Polyvinyl acetate (PVA, PVAc) emulsion wood glue, including aliphatic resin (yellow) glue and cross-linking PVA
- **aliases**: 
  - PVA glue; PVAc glue; polyvinyl acetate emulsion (Wikipedia 'Polyvinyl acetate'; FPL Wood Handbook ch.10)
  - white glue; school glue; hobby and craft glue (Wikipedia 'Wood glue')
  - yellow glue; carpenter's glue; aliphatic resin glue (Wikipedia 'Wood glue')
  - wood glue; woodworking glue; joiner's glue ⚑ [uncertain: common usage]
  - cross-linking PVA; Type II glue; Type I (waterproof) wood glue; D2, D3, D4 wood glue (Titebond; FPL Wood Handbook ch.10; IVK EN 204 leaflet)
  - brand names beginners search for (brands): Titebond Original, II and III (Titebond); Elmer's Carpenter's Wood Glue (Rockler); Lepage (Wikipedia 'Wood glue'); Ponal (Printables model name)
  - not to be confused with PVA (polyvinyl alcohol) water-soluble 3D-printing support filament, a different polymer (Wikipedia 'Polyvinyl acetate': 'Not to be confused with Polyvinyl alcohol')
  - tacky glue: a thick, fast-grabbing PVA craft glue that sticks on contact ('A PVA Glue (polyvinyl acetate white glue) with a thick, fast-grabbing formula', Aleene's glossary); Aleene's Original Tacky Glue (brand)
  - fabric glue (only some are PVA: Aleene's (brand) says fabric glues are made with acrylic instead, which is more water-resistant and flexible than PVA and holds up better in the wash, Aleene's FAQ; solvent-based fabric adhesives are covered under Elastomeric solvent glue) *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **one_liner**: A water-based glue of plastic particles suspended in water that soaks into wood, paper, card and other porous materials and hardens as the water is absorbed and evaporates, giving strong, cheap, non-toxic joints for indoor woodwork, with yellow and water-resistant grades for tougher jobs.
- **complexity**: Single piece (a one-part liquid used straight from the bottle); used with clamps, and some industrial D4 grades add a separate hardener (2K PVA, 100 parts glue to 5 parts hardener) (European Wood Review; AkzoNobel).
- **how_it_works**: The glue is tiny particles of polyvinyl acetate plastic dispersed in water (an emulsion). When spread on wood, the water soaks into the wood and evaporates, so the glue thickens until the particles merge into a continuous, slightly flexible plastic film (FPL Wood Handbook ch.10: 'cold-setting waterborne wood adhesives lose water by absorption and evaporation'). Clamping pressure squeezes the glue into a thin film and pushes it into the open cells of the wood, where it 'interlocks several cells deep', which is why it grips porous materials so well and non-porous ones poorly (FPL Wood Handbook ch.10; thisTOthat: 'All PVAs are designed to work on porous materials only'). Yellow (aliphatic resin) glue grabs faster and is a bit more heat- and water-resistant than white; cross-linking grades also react chemically as they dry, which makes them more water-resistant (Wikipedia 'Wood glue'; FPL Table 10-1).

### Finder attributes

- **job**: 
  - glue or bond: the standard glue for wood-to-wood joints, panels, laminations, veneers, paper, card and other porous materials (FPL Table 10-1; Rockler)
  - join and hold: holds wood joinery (dowels, biscuits, mortise and tenon, finger joints) permanently once the joint is clamped (Rockler) ⚑ [uncertain: joint types from general knowledge] *(⚑ parts need confirming)*
- **motion**: none: a rigid joint (the glue film itself stays slightly flexible, Wikipedia 'Wood glue')
- **degrees_of_freedom**: 0: the glued parts are locked together once the glue has set
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks: it cleans up with water while wet; white glue stays slippery for a while so parts can be slid into line, while yellow glue grabs faster (Wikipedia 'Wood glue'); and the bond can be softened with heat or steam to take a joint apart (Titebond FAQ)
- **holding_principle**: material bond (glue, solvent or melting): the dried glue film sticks to both faces and locks into the pores of the wood (FPL Wood Handbook ch.10)
- **input_output**: not applicable
- **power**: passive (no power needed): it sets at room temperature as water leaves; heat, radio-frequency or hot-press systems are only used in factories to speed it up (FPL Wood Handbook ch.10; Titebond II page)
- **removability**: semi-permanent (can be undone but may damage parts): heating the joint with a heat gun or hair dryer, or steam from an iron, weakens yellow and water-resistant PVA glues so joints can be separated (Titebond FAQ); dried squeeze-out is scraped or sanded off (Titebond). Re-gluing is hard because most glues, including PVA and epoxy, don't stick well to old cured PVA, so it must be cleaned off to bare wood first (Wikipedia 'Wood glue').
- **reuse_cycles**: once: the glue can't be reused; to redo a joint, clean the old glue off down to bare wood and apply fresh (Wikipedia 'Wood glue')
- **tools_needed**: The glue bottle, a brush, roller or notched spreader to spread an even film (about 6 mil / 0.15 mm, Titebond), clamps (bar, F, pipe or band clamps) to press joints together, a damp cloth for wet squeeze-out, and a scraper or sandpaper for dried glue (Titebond product pages). A jointer, plane or sander to freshen the surfaces just before gluing (FPL Wood Handbook ch.10).
- **seal**: none: it is not a sealant, and ordinary white and yellow glues are 'not intended for exterior use or where moisture is likely' (Titebond Original and White). Water-resistant grades resist water but are still 'not for continuous submersion or for use below the waterline' (Titebond II and III).
- **load**: medium to heavy in shear on long-grain (side-grain) wood joints: manufacturer tests to ASTM D905 on hard maple give about 3,550-4,000 psi (24-28 MPa) at room temperature, with much of the break in the wood itself (Titebond Original 3,600 psi, 77% wood failure; White 3,550 psi; II 3,750 psi; III 4,000 psi) (Titebond product pages), and Wood by Wright's 32-glue test found PVA long-grain joints stood up 'very nicely' to far more expensive epoxies (Popular Woodworking, 2018). Weak on end grain: glued end-grain butt joints reach only about 25% of the wood's tensile strength even with special techniques (FPL Wood Handbook ch.10). Weak under long-term load and heat: PVA joints 'yield under continued stress' (creep) (FPL Table 10-1; Wikipedia). Manufacturers state it is not for structural or load-bearing applications (Titebond).
- **adjustable**: no once set. While wet, parts can be slid into line within the open assembly time (about 3-10 minutes, depending on grade), and white glue gives more slip than yellow (Titebond; Wikipedia 'Wood glue').
- **play_and_precision**: not applicable (nothing moves). It needs close-fitting, flat joints: PVA is a poor gap filler, and a 'gap-filling puddle will shrink as it dries' (Rockler; Woodcraft). The standard EN 205 test joint uses a 0.1 mm glue line (IVK leaflet).
- **access_needed**: not applicable: glue is spread on the joint faces before the parts are put together and clamped
- **materials**: Bonds well: wood (softwood and hardwood), plywood, hardboard, particleboard and MDF, veneer, paper, card, cork, leather, cloth and 'most other porous materials' (Titebond Original; FPL Table 10-1; thisTOthat). Also plastic laminates to wood in industry (FPL Table 10-1). Foam board and polystyrene foam too: PVA is 'foam-safe', while solvent glue (UHU-type) melts polystyrene foam (Studio Matrx model-making lesson). Between two foam faces it is slow to dry, because it needs air to dry; forum advice is to use it on small areas only, or use epoxy, which 'doesn't require air to dry' and won't melt the foam (Model Boat Mayhem forum, 'glueing polystyrene', 2008). Poor or no bond: non-porous materials such as metal, glass and most plastics, including 3D prints in PLA, PETG and ABS (Prusa: PVA/wood glues are 'probably not strong enough for most plastics'); painted, stained or sealed wood, where the bond is only as strong as the paint (Titebond FAQ); oily or tannin-rich woods such as teak and ipe unless freshly planed or wiped with acetone (Titebond FAQ); wood wetter than about 16% moisture, where it may not dry at all (Titebond FAQ); old cured PVA (Wikipedia 'Wood glue'). Acidic grades (pH 2.5-3.0) can corrode metal (Titebond II and III).
- **maker_difficulty**: easy: no mixing, water cleanup and cheap. The skills are spreading an even film, working within the open time, and clamping evenly (FPL Wood Handbook ch.10; Titebond).

### Making it

- **processes**: 
  - woodwork: its main use, for joinery, edge-joined panels, laminations and veneering (FPL Table 10-1; Rockler)
  - laser cut: gluing finger-jointed plywood or MDF boxes and panels ⚑ [uncertain: common maker practice, no specific source opened]
  - CNC: gluing routed wood and plywood parts ⚑ [uncertain: same as above]
  - paper, card and model making: white 'school glue' and 'hobby and craft' glue (Wikipedia 'Wood glue')
  - 3D print (FDM): only for fixing prints to porous materials such as wood, cork, fabric or paper, or for printed glue-up tools; not for gluing plastic to plastic (Prusa) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a glue, not a printed part
- **making_tips_3d_printing**: 1) Don't use PVA wood glue to join plastic prints to each other: Prusa's gluing guide lists 'PVA/wood glues (probably not strong enough for most plastics)'; use cyanoacrylate, epoxy or solvent welding instead (see those entries). 2) Gluing a print to wood, cork, fabric or card: PVA grips the porous side well but only holds the plastic side mechanically, so roughen the print's face with coarse sandpaper, add holes or grooves for the glue to key into, or use epoxy or contact cement for these mixed joints ⚑ [uncertain: reasoning from how PVA bonds (FPL) and Prusa's note]. 3) PVA wood glue is not the same as the water-soluble 'PVA' support filament (polyvinyl alcohol); don't confuse the two (Wikipedia 'Polyvinyl acetate'). 4) Printed glue-up tools work well: toothed glue spreaders (Mario M's parametric FreeCAD spreader with 1.5, 2.5 and 3.5 mm teeth), rollers with a TPU tyre (blecheimer's textured roller; goldon's roller with a glue tank, PLA or PETG body and TPU roller) and glue-bottle holders are popular models. 5) Wet PVA can be wiped off PLA and PETG tools, and dried glue usually peels off smooth plastic, which is why printed spreaders and cauls are practical ⚑ [uncertain: maker experience, not tested in a source]. 6) Use printed glue test pieces (MethodicalMaker; iqless) if you want to check for yourself how weakly PVA holds a given filament compared with other glues. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'PVA wood glue', 'white glue' or 'school glue' (general and paper), 'yellow glue' / 'aliphatic resin glue' / 'carpenter's glue' (faster grab, better sanding), 'water-resistant wood glue' / 'ANSI Type II' / 'D3 wood glue' (outdoor furniture under cover, cutting boards), 'waterproof wood glue' / 'ANSI Type I' / 'D4 wood glue' (outdoor, damp), 'extended open time wood glue' for big glue-ups, 'dark wood glue' for dark woods, and 'cold press veneer glue' (Titebond and AkzoNobel product ranges; European Wood Review). Accessories: glue rollers and spreaders, glue bottles with fine or biscuit/dowel tips, bar, F, pipe and band clamps, clamping cauls.
- **rules_of_thumb**: 
  - Make close-fitting, flat joints: PVA is not a gap filler (Rockler; Woodcraft), and the standard EN 205 test joint uses only a 0.1 mm glue line (IVK leaflet).
  - Plane, joint or sand the wood within 24 hours before gluing for a clean, easily wetted surface; bonding within minutes of surfacing can be noticeably better (FPL Wood Handbook ch.10).
  - Glue wood that is dry: about 12% moisture content is the usual specification (FPL Wood Handbook ch.10); above 10% slows drying and above about 16% the glue may not dry at all (Titebond FAQ).
  - Spread a film of about 6 mil (0.15 mm), i.e. roughly 250 square feet per US gallon (Titebond product pages).
  - Assemble within the open time: about 3-5 minutes for cross-linking yellow (Type II), 4-6 minutes for yellow aliphatic, about 5 minutes for white and 8-10 minutes for Type I glue at 70 °F / 50% RH (Titebond product pages).
  - Clamp firmly but not too hard: about 100-150 psi (0.7-1.0 MPa) for softwoods, 125-175 psi for medium woods and 175-250 psi (1.2-1.7 MPa) for hardwoods (Titebond); FPL gives 0.7 MPa (100 psi) for low-density up to 1.7 MPa (250 psi) for the densest woods, and warns that too much pressure squeezes out the glue and leaves a starved joint (FPL Wood Handbook ch.10).
  - Keep an unstressed joint clamped for 30-60 minutes; a stressed joint (bent or sprung parts) for 24 hours; and don't load a new joint for at least 24 hours (Titebond FAQ). Water-based glues can take about 24 hours to cure before machining (Titebond FAQ).
  - Don't glue below the 'chalk temperature' of the glue, air and wood: about 50 °F (10 °C) for white and ordinary yellow glue, 55 °F (13 °C) for Type II and 45-47 °F (7-8 °C) for Type I (Titebond product pages).
  - Don't rely on end-grain butt joints: they reach only about 25% of the wood's tensile strength; use a scarf joint with a slope of 1 in 12 or flatter, finger joints, or joinery that turns end grain into side grain (FPL Wood Handbook ch.10).
  - Choose water resistance by where the piece will live (EN 204 classes): D1 dry interiors (wood below about 15% moisture), D2 occasional high humidity or brief water, D3 frequent short contact with water or outdoors under cover, D4 frequent long exposure to water or outdoors with a protective finish (European Wood Review; IVK leaflet). In US terms, ANSI/HPVA Type II passes three 4-hour soak and 120 °F bake cycles; Type I passes boiling tests (Titebond FAQ).
  - Don't thin it with more than about 5% water (Titebond FAQ).
  - Joints made with ordinary wood glues keep their strength indefinitely if the wood stays below about 15% moisture and at temperatures comfortable for people; some adhesives deteriorate if kept above 38 °C (100 °F) for long periods (FPL Wood Handbook ch.10).

### When to use it

- **everyday_examples**: 
  - White school glue for paper and card crafts (Wikipedia 'Wood glue': 'white glue', 'school glue')
  - The glue in furniture joints, cabinets and doors (FPL Table 10-1: 'Furniture; flush doors ... general purpose in home and shop')
  - Wooden cutting boards, birdhouses, planters and outdoor furniture made with water-resistant yellow glue (Titebond II and III product pages; Titebond FAQ)
  - Laser-cut plywood boxes and models glued at the finger joints ⚑ [uncertain: common maker practice] *(⚑ parts need confirming)*
- **when_to_use**: Use PVA for almost any indoor wood-to-wood joint that fits well and can be clamped: furniture, boxes, cabinets, edge-glued panels, laminations, dowel and biscuit joints, and for paper, card, cork, leather and fabric onto wood (FPL Table 10-1; Rockler; Titebond Original). It is cheap, one-part, non-toxic, cleans up with water and makes side-grain joints stronger than the wood (Wikipedia 'Wood glue'; Titebond). Choose yellow (aliphatic) glue for faster grab and better sanding, white glue when you need more sliding time, a longer-open-time or Type I grade for big or complicated glue-ups, and Type II/D3 or Type I/D4 grades for kitchens, bathrooms, cutting boards and covered outdoor projects (Wikipedia; Titebond; European Wood Review).
- **when_not_to_use**: Not for gaps or poorly fitting joints: use epoxy or polyurethane glue (Rockler; Wikipedia 'Wood glue'). Not for plastics, metal or glass, or for 3D prints to each other: use cyanoacrylate, epoxy, solvent welding or contact adhesive (Prusa). Not for joints under constant heavy load, such as bent laminations that want to spring back or shelves carrying weight on the glue alone, because PVA creeps: use urea-formaldehyde (which 'does not creep'), epoxy or mechanical fasteners (Wikipedia 'Wood glue'; FPL). Not for boats below the waterline, continuous submersion or exposed structural outdoor work: use epoxy or resorcinol (Titebond III limitations; Wikipedia; Wood by Wright found all PVAs, even Type I, 'did very poorly' in its exterior test). Not for joints you may need to take apart cleanly later, such as musical instruments and antique repairs: use hide glue, which can be undone with heat and moisture (Wikipedia 'Wood glue'; Woodcraft). Not for end-grain butt joints without joinery (FPL).
- **environment_limits**: Heat: PVA is a thermoplastic that softens as it warms (its glass transition is about 30-45 °C, Wikipedia 'Polyvinyl acetate'); after a night at 150 °F (66 °C) Titebond's ASTM D905 strengths fall from 3,550-4,000 psi to 1,600-1,750 psi for white, yellow and Type II glue and to 800 psi for Type I, with almost no wood failure (Titebond product pages), so avoid hot cars, radiators and sunny dark surfaces for loaded joints. Water: ordinary white and yellow glues are for dry interiors only; cross-linked grades resist water but none is for continuous submersion, and uncross-linked PVA 'often fail[s] after exposure to wet-dry cycling' (FPL; Titebond). Creep: joints slowly yield under constant load, worse with heat and moisture (FPL Table 10-1; Wikipedia). Cold: apply above the chalk temperature (about 45-55 °F / 7-13 °C depending on grade); cold makes no significant difference to cured joints (FPL; Titebond). Freezing: keep the liquid from freezing; Titebond says freezing may only thicken it and it is freeze-thaw stable, while thisTOthat warns freezing ruins PVA, so check the bottle. Storage: about 2 years, below 75 °F (24 °C) (Titebond). UV: ⚑ [uncertain: no data found; glue lines are normally shielded by wood and finish]. *(⚑ parts need confirming)*
- **safety_notes**: Low hazard: water-based, with no harmful fumes, and meets ASTM D4236 for arts and crafts (Titebond FAQ; thisTOthat: 'only toxic to ingest'). Some grades are labelled as eye and skin irritants, so avoid eye contact and prolonged skin contact and keep it from children (Titebond Original, II and White caution statements). Type II and III yellow glues are approved for indirect food contact (cutting boards) (Titebond FAQ). Acidic grades (pH 2.5-3.0) can corrode steel and cause rust or dark stains near metal (Titebond II and III). Dried glue on clothes is permanent, especially water-resistant grades, so rinse it out while wet (Titebond FAQ). Sanding dried glue and wood makes fine dust: use dust extraction or a mask ⚑ [uncertain: general advice]. *(⚑ parts need confirming)*
- **common_failures**: 1) Starved joint: too much clamping pressure, too little glue, or glue soaking into end grain leaves too little in the joint; spread both faces and clamp moderately (FPL Wood Handbook ch.10). 2) Glue skinned over before assembly: open time exceeded, so it doesn't transfer and leaves a thick, weak line; work faster or use a longer-open-time grade (FPL; Titebond). 3) Gappy joint fails: PVA doesn't fill gaps and shrinks as it dries (Rockler; Woodcraft). 4) End-grain joint snaps (FPL). 5) Chalky, white, weak glue line: glued below the glue's chalk temperature, e.g. in an unheated winter workshop (Titebond; European Wood Review). 6) Joint slides or opens over months under constant load (creep), or lets go in heat (FPL; Wikipedia; Titebond). 7) Delamination outdoors or in the wet: wrong grade (FPL; Wood by Wright). 8) Won't bond: painted, sealed, oily or wet wood, old glue residue, or a non-porous material (Titebond FAQ; Wikipedia). 9) Blotches after staining: squeeze-out left on the surface, since the glue does not take stain; remove it wet or sand it off (Wikipedia 'Wood glue'; Titebond). 10) Sunken glue lines: the board was planed or sanded before the moisture from the glue had evened out (Titebond FAQ). 11) Parts slip out of line under the clamps: white glue is slippery before it grabs; use yellow glue, cauls or a pin (Wikipedia). 12) Glue has gone thick and stringy or turned to an orange gel in the bottle: it is past its useful life (Titebond FAQ).
- **related**: 
  - Hide glue (animal glue): the traditional wood glue; doesn't creep and can be undone with heat and moisture, so it is used for instruments and antiques
  - Polyurethane glue (foaming moisture-cure glue): waterproof, foams to fill gaps and bonds more materials, but messier and needs moisture to cure
  - Two-part epoxy: gap-filling, waterproof and bonds metal and plastics; better for poor fits and boats, but costlier and won't stick to cured PVA
  - Cyanoacrylate (superglue): sets in seconds for small repairs and plastics; brittle and low in peel
  - Contact adhesive (contact cement): for large sheets such as plastic laminate and veneer where clamping is awkward; bonds instantly but creeps and is weaker than PVA on wood
  - Hot-melt adhesive (glue gun): fast, gap-filling but weak and heat-sensitive; for temporary holds and crafts
  - Elastomeric solvent glue (flexible craft glue): stays rubbery and bonds non-porous and dissimilar materials that PVA can't
  - Dowel and biscuit joints, and Butt and lap wood joints: the joinery that PVA is usually used with
  - Glued joint design (butt, lap and scarf joints; peel vs shear): how to shape a joint so the glue is loaded in shear on side grain
  - Liquid seam sealant (anti-fray liquid, e.g. Fray Check (brand)): a colourless liquid dabbed on buttonholes, seams and cut edges that stops fabric fraying by reinforcing the fibres (Prym Fray Check product description); it seals an edge rather than joining two parts
  - Iron-on fusible web: a dry sheet or tape of heat-activated glue ironed between two layers of fabric to bond them, an alternative to liquid fabric glue for hems and patches
  - Glue stick and starch paste (wheat-starch paste, methyl cellulose): milder, water-based paper glues that cockle thin paper less and can often be undone with water; bookbinders mix methyl cellulose 50/50 with PVA for more working time
  - Score-and-slip join: how wet or leather-hard pottery and air-dry clay is joined with slip; PVA is used instead once air-dry clay has already dried

### Pictures, videos and models

- **links**: 
  - [Wood glue and clamping the pieces before screwing them together.jpg (Boohyabuddha, Wikimedia Commons, 2014)](https://commons.wikimedia.org/wiki/File:Wood_glue_and_clamping_the_pieces_before_screwing_them_together.jpg): A woodworking assembly with wood glue applied and the parts clamped *(licence: CC BY-SA 4.0)*
  - [Using wood glue.JPG (Amirreza Saharkhiz, Wikimedia Commons, 2012)](https://commons.wikimedia.org/wiki/File:Using_wood_glue.JPG): Wood glue being applied in woodworking *(licence: CC BY-SA 3.0)*
  - [Pva wood glue.jpg (Victuallers, Wikimedia Commons, 2014)](https://commons.wikimedia.org/wiki/File:Pva_wood_glue.jpg): A bottle of PVA wood glue *(licence: CC BY-SA 3.0)*
  - [The Great Glue Test | What Is The Best Wood Glue | Results | Wood By Wright Extra (YouTube)](https://www.youtube.com/watch?v=ZoaTZY5cSQE): Load-cell tests of 32 glues on long-grain, end-grain, gap-filling and exterior joints, summarised by Popular Woodworking (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Wood Handbook chapter 10: Wood adhesives: bond formation and performance (Frihart and Hunt, USDA Forest Products Laboratory, FPL-GTR-282, 2021)](https://research.fs.usda.gov/treesearch/62250): Diagrams of glue penetration into wood, glue-line thickness and pressure (Fig. 10-5), edge-grain and end-grain joints (Figs 10-6, 10-7), and Table 10-1 comparing adhesive types *(licence: US government work (public domain in the US))*
- **make_it_yourself**: 
  - [Glue spreader Parametric (FreeCad) (Mario M, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/86892-glue-spreader-parametric-freecad): Parametric toothed glue spreader with 1.5, 2.5 and 3.5 mm triangular teeth; the FreeCAD file lets you set tooth size, spacing and body size. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Textured Glue Roller (blecheimer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1065435-textured-glue-roller): Printable glue roller for spreading wood glue over large panels, with an exchangeable TPU95 roller, PLA inlay and PETG snap-on handle. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Wood glue roller with glue tank (goldon, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1450540-wood-glue-roller-with-glue-tank): A 36 mm wide wood glue roller with a built-in glue tank, running on two 608 bearings; PLA handle and tank, TPU roller. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing glues in torque, shear and tension with a hanging scale; useful to see how weakly PVA holds printed plastic compared with CA or epoxy. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A magnified cross-section of a clamped glue line between two boards: blue water droplets leaving the glue downward into the wood and upward into the air, glue fingers reaching into the open wood cells, and a second panel contrasting a strong side-grain joint with a weak end-grain butt joint where the glue has soaked away.
- **sources**: 
  - https://en.wikipedia.org/wiki/Wood_glue
  - https://en.wikipedia.org/wiki/Polyvinyl_acetate
  - https://research.fs.usda.gov/treesearch/62250
  - https://research.fs.usda.gov/download/treesearch/62250.pdf
  - https://www.titebond.com/resources/use/all/faqs
  - https://www.titebond.com/product/glues/d4d28015-603f-4dfc-a7d9-f684acc71207
  - https://www.titebond.com/product/glues/2ef3e95d-48d2-43bc-8e1b-217a38930fa2
  - https://www.titebond.com/product/glues/e8d40b45-0ab3-49f7-8a9c-b53970f736af
  - https://www.titebond.com/product/glues/c944de78-f0a8-4180-b75e-026994aba708
  - https://www.klebstoffe.com/wp-content/uploads/2020/04/Interpretation_DIN_EN_204-205_EN.pdf
  - https://revistadinlemn.ro/en/2026/06/24/adeziv-lemn-d2-d3-d4-cum-alegi-dupa-expunerea-la-apa
  - https://woodadhesives.akzonobel.com/en/adhesive-technologies/polyvinyl-acetate
  - https://www.thistothat.com/glue/pva.shtml
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.popularwoodworking.com/editors-blog/the-great-glue-test-wood-by-wright/
  - https://www.youtube.com/watch?v=ZoaTZY5cSQE
  - https://commons.wikimedia.org/wiki/File:Wood_glue_and_clamping_the_pieces_before_screwing_them_together.jpg
  - https://commons.wikimedia.org/wiki/File:Using_wood_glue.JPG
  - https://commons.wikimedia.org/wiki/File:Pva_wood_glue.jpg
  - https://api.printables.com/graphql/ (models 86892, 1065435, 1450540, 236948, 32037)
  - https://aleenes.com/blogs/glossary/tacky-glue
  - https://aleenes.com/blogs/glossary/polyvinyl-acetate-glue
  - https://aleenes.com/a/faq
  - https://www.coolcrafting.co.uk/product/prym-fray-check/
  - https://www.studiomatrx.org/students/model-making/cutting-and-finishing
  - https://www.modelboatmayhem.co.uk/forum/index.php/topic,12818.0.html

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest
- **bonds_well**: wood, paper or card, fabric or leather, foam
- **bonds_poorly**: PLA, PETG, ABS or ASA, metal, glass or ceramic
- **tools**: press or vice
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: wood, paper or card, foam, clay or putty, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, everyday_examples, job, making_tips_3d_printing, processes, safety_notes

## 224 Contact adhesive (contact cement)

*adhesives & bonding.* A rubbery glue spread on both surfaces, left to dry until tacky, then pressed together to bond instantly; good for sheets, rubber, fabric and leather

*Also covers:* Also covers spray mount for paper and card, polystyrene-safe solvent contact glue, and EVA foam seams.

### What it is

- **plain_name**: A rubbery glue you paint thinly on both surfaces, leave until it feels dry to the touch, and then press together, when the two glue layers grab each other instantly and permanently without clamps
- **term**: Contact adhesive (contact cement), usually a polychloroprene (neoprene) or natural-rubber solution or water-based dispersion
- **aliases**: 
  - contact cement; contact glue; impact glue; impact adhesive; neoprene glue (Wikipedia 'Impact glue')
  - neoprene contact adhesive; polychloroprene contact adhesive; elastomeric contact adhesive (FPL Wood Handbook ch.10 Table 10-1; 3M Fastbond 30-NF data sheet)
  - water-based contact adhesive (waterborne, solvent-free) and solvent-based contact cement (FPL Wood Handbook ch.10; 3M; thisTOthat)
  - spray contact adhesive (thisTOthat, which notes some spray glues can be used as contact adhesives)
  - laminate adhesive; shoe glue; leather cement ⚑ [uncertain: trade descriptions, not checked in a single source]
  - brand names beginners search for (brands): Weldwood Contact Cement (DAP), Fastbond (3M), Barge cement ⚑ [uncertain: Barge seen only in search results, as a shoe glue] *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **one_liner**: A rubber-based glue spread on both mating surfaces and allowed to dry until tacky, so that when the surfaces touch the two rubber films fuse at once, bonding large sheets, laminate, veneer, rubber, foam, leather and fabric without clamps.
- **complexity**: Single piece (a one-part liquid, gel or spray); used with a brush or roller, and a hand roller (J-roller) to press the parts together (DAP Weldwood data sheet; 3M Fastbond 30-NF data sheet).
- **how_it_works**: The glue is a rubber, most often polychloroprene (neoprene) or natural rubber, dissolved in solvent or dispersed in water (Wikipedia 'Impact glue'; FPL Table 10-1). You coat both surfaces and let the solvent or water evaporate until the film is tacky but no longer wet; the rubber molecules in the two dry films then stick to each other the moment they are pressed together, so the bond forms instantly and needs no clamping (Wikipedia 'Impact glue'; FPL Wood Handbook ch.10: 'the solvent evaporates until both sides become tacky and then the bond is formed'). Firm pressure over every part of the surface makes full contact; strength keeps rising over days to weeks as the rubber crystallises and the last solvent leaves (DAP: maximum strength in 7 days; FPL: 'increases slowly over a period of weeks'; Wikipedia notes neoprene and natural rubber 'undergo strain crystallization').

### Finder attributes

- **job**: 
  - glue or bond: laminates and veneers onto boards, rubber, cork, foam, leather, fabric and shoe soles, and many dissimilar materials (Wikipedia 'Impact glue'; DAP; 3M)
  - join and hold: holds large flat sheets flat without clamps, for example plastic laminate on kitchen counters (FPL Table 10-1)
- **motion**: none: a fixed joint, though the rubbery glue film lets flexible materials such as leather, foam and fabric keep bending (Lumin's Workshop: 'a flexible adhesive')
- **degrees_of_freedom**: 0: once the films touch, the parts are locked together; 'no adjustment is possible after the adhesive films make contact' (3M Fastbond 30-NF)
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks: it bonds instantly on contact with no clamping time, the glue only sticks to itself once dry (so dry-coated parts can be laid on clean dowels or paper and slid into position), and the bond can be trimmed or machined straight away (Wikipedia 'Impact glue'; 3M; DAP)
- **holding_principle**: material bond (glue, solvent or melting): two dried rubber films fuse into one layer that sticks to both surfaces (Wikipedia 'Impact glue'; FPL Wood Handbook ch.10)
- **input_output**: not applicable
- **power**: passive (no power needed): it works by evaporation of solvent or water; heat lamps are only used to speed drying (3M Fastbond 30-NF)
- **removability**: semi-permanent (can be undone but may damage parts): the bond is meant to be permanent (DAP) and dried adhesive must be cut or scraped away (DAP), but solvent attacks the glue line and weakens the bond, which 3M warns about ('Never pour solvent onto a bonded surface; it will attack the adhesive line'), so solvents or heat can sometimes be used to peel parts apart ⚑ [uncertain: heat-release not stated by a source]. *(⚑ parts need confirming)*
- **reuse_cycles**: once: the glue can't be reused; parts that come apart need the old film cleaned off or recoated before rebonding (DAP; 3M)
- **tools_needed**: A brush (nylon or chip brush), small foam or texturing paint roller, or spray gun to spread it (3M; thisTOthat; This Old House); clean dowels, wood strips or paper slip sheets as spacers for large sheets (DAP; 3M; Rockler); a small hand roller no wider than 3 in (a 'J-roller'), or a towel-wrapped piece of 2x4, to press it down (3M; Rockler); a router with a flush-trim or laminate bit for trimming laminate (Rockler; This Old House); mineral spirits for wet solvent cement, or soapy water for wet water-based cement (DAP; 3M); good ventilation or a vapour respirator for solvent types (Rockler).
- **seal**: none: it is not a sealant. Solvent neoprene types claim resistance to heat, water and weather once cured (DAP), and 3M's water-based Fastbond 30 is approved to the ANSI/HPMA Type II water-resistance test, but the FPL rates elastomeric contact adhesives as having 'low resistance to water and damp atmospheres' (FPL Table 10-1; 3M).
- **load**: light to medium: the FPL says dry strengths are 'much lower than those of conventional wood adhesives' and the joints 'creep under static load' (FPL Table 10-1). For example, 3M's water-based Fastbond 30-NF gives about 480 psi (3.3 MPa) overlap shear on birch at 23 °C, against about 3,600 psi for a yellow PVA wood glue, and about 26-62 N/cm (240-560 oz/in, roughly 15-35 lb per inch of width) 180° peel strength for canvas on steel after 1-3 weeks (3M Fastbond 30-NF data sheet; Titebond Original). It is good for large bonded areas loaded in shear, such as laminate and veneer, and its flexible film suits materials that bend (Wikipedia 'Impact glue': 'high shear resistance'; Lumin's Workshop). Manufacturers say it is not for structural applications (DAP).
- **adjustable**: no: parts cannot be shifted once the glue films touch (DAP; 3M). Position them first on dry spacers, then pull the spacers out one at a time (DAP; Rockler).
- **play_and_precision**: not applicable (nothing moves). Alignment must be right first time, so pre-fit all parts and use spacers or slip sheets to position large pieces (DAP; 3M). It copes with rough or porous surfaces better than thin wood glues because a thick glossy film is built up on each face ⚑ [uncertain: inferred from coating advice], but it is not a gap filler. *(⚑ parts need confirming)*
- **access_needed**: not applicable: both faces are coated before assembly
- **materials**: Bonds well: plastic laminate (e.g. Formica, brand) to particleboard, MDF and plywood; wood and plastic veneers (backed veneers for water-based types); wood; rubber; cork; leather and pleather; felt, fabric and canvas; EVA foam; polyurethane foam and 'most foamed plastics' (water-based); paper and cardboard; tile; metal; 'some plastics and vinyls'; shoe soles to uppers (DAP; 3M Fastbond 30-NF; Wikipedia 'Impact glue'; Lumin's Workshop). Flexible 3D prints (TPU/TPE): Prusa suggests contact cements 'might be good especially for flexible filament materials!' Poor or damaged: polystyrene foam with ordinary solvent types, whose ketone solvents (acetone, MEK in DAP's) dissolve it (DAP); polystyrene-safe solvent types exist, such as UHU por (brand), a synthetic-rubber contact adhesive whose aliphatic solvents are chosen so 'the structure of the polystyrene foam is not attacked' (UHU por data sheet), so the rule is to check the solvent, not to avoid every solvent glue; copper and copper alloys (DAP); drywall laminating and metal with water-based types unless the metal is force-dried and protected (3M); un-backed wood veneer with water-based types (3M); painted surfaces, vinyls and some plastics can be stained or softened by the solvents, so test first (DAP). For best results at least one surface should be porous, and painted or non-porous surfaces should be roughened (DAP). Slippery plastics such as polyethylene, polypropylene and silicone ⚑ [uncertain: not tested in an opened source; generally poor for most glues]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: no mixing and no clamps, but you must wait for the right dryness, get the alignment right first time, press hard everywhere, and handle flammable fumes safely (thisTOthat; DAP; 3M; Rockler).

### Making it

- **processes**: 
  - woodwork: plastic laminate on countertops and tabletops, veneering, and edge banding (FPL Table 10-1; DAP; Rockler)
  - sheet materials and upholstery: foam, fabric and canvas panels, cork, rubber sheet (3M Fastbond 30-NF; DAP)
  - leatherwork, shoe repair and cosplay: leather, pleather, felt and EVA foam armour (Wikipedia 'Impact glue'; Lumin's Workshop)
  - 3D print (FDM): bonding flexible TPU or TPE prints, or bonding prints to foam, leather, rubber or fabric (Prusa) ⚑ [uncertain: Prusa only suggests it 'might be good'; no test found]
  - laser cut: bonding laser-cut foam, leather, felt or rubber gaskets ⚑ [uncertain: common maker practice, no source opened] *(⚑ parts need confirming)*
- **print_in_place**: no: it is a glue, not a printed part
- **making_tips_3d_printing**: 1) Contact cement is one of the few glues that stays flexible, so it is worth trying for TPU and TPE prints that must bend: Prusa's gluing guide lists 'contact cements, typically for shoe repairs, etc. (might be good especially for flexible filament materials!)'; test it on offcuts first (see Peter Solomon's video 'Methods of gluing Flexible Prints in TPU together!'). 2) It is also handy for fixing printed parts to EVA foam, leather, rubber or fabric, e.g. printed details on cosplay armour, since the rubbery film follows the flexible side (Lumin's Workshop) ⚑ [uncertain: printed-part use is inferred]. 3) Watch for solvent attack: solvent contact cements can contain acetone and MEK (DAP), which soften or dissolve ABS, ASA and polystyrene-based prints and foams; DAP warns the solvents may damage 'some plastics' and that it must not be used on polystyrene foam. Use a water-based contact adhesive or test on a scrap print ⚑ [uncertain: effect on specific filaments not tested in a source]. 4) Printed layers give some grip, but for smooth printed faces roughen them, since DAP says non-porous surfaces must be roughened and at least one surface should ideally be porous. 5) Apply a thin, even coat to both parts, wait until it is touch-dry (it doesn't come off on your finger) and press hard with a small roller; thicker coats take longer to dry and bonding too soon is the most common mistake (thisTOthat; 3M). 6) For rigid plastic-to-plastic joints, CA, epoxy or solvent welding are stronger (see those entries). 7) A small printed seam roller (Sagittario's 20 mm roller; vega480's roller on 608 bearings) can serve as a J-roller for pressing small bonded parts; 3M recommends a roller no wider than about 3 in with heavy pressure ⚑ [uncertain: these rollers were designed for sewing and wallpaper]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'contact cement', 'contact adhesive', 'neoprene contact adhesive', 'solvent-based contact cement', 'water-based contact adhesive' or 'non-flammable contact cement' (safer indoors and for foam), 'gel contact cement' (thixotropic, for vertical surfaces; Wikipedia 'Impact glue'), 'spray contact adhesive', 'laminate adhesive', 'leather cement' or 'shoe contact cement'. Tools: 'J-roller' or 'laminate roller', 'seam roller', foam or texturing paint roller, chip brush, 'laminate trimmer' with 'flush-trim bit', dowels or slip sheets (DAP; 3M; Rockler; This Old House).
- **rules_of_thumb**: 
  - Coat BOTH surfaces with an even film; porous materials may need two coats, letting each dry fully in between (3M Fastbond 30-NF; thisTOthat; DAP). A uniform glossy film means enough glue; dull spots mean too little (3M; DAP).
  - Use about 3.0-3.5 g of dry adhesive per square foot per surface on wood, particleboard and laminate, and more on soft wood, fabric and foam (3M Fastbond 30-NF).
  - Wait until it is touch-dry before joining: if it doesn't come off on your finger it is ready (thisTOthat); a water-based adhesive turns from milky to clear, typically in about 30 minutes (3M). Guides give roughly 15-20 minutes for solvent cement in normal conditions, longer when cool or humid and for thicker coats (This Old House; Rockler; thisTOthat).
  - Join within the bonding window: up to 4 hours for 3M's water-based Fastbond 30-NF; recoat solvent cement if not assembled within 2-3 hours (DAP); in a dusty shop bond within about 2 hours (thisTOthat). If the surfaces don't grab on contact, apply another coat (3M).
  - Work at 65 °F (18 °C) or warmer: adhesive, surfaces and room (DAP; 3M).
  - Position large sheets on clean dowels or strips every 6-12 in, or on paper slip sheets, then remove them from the centre outwards (DAP; 3M; This Old House; Rockler).
  - Press hard everywhere: at least 25 psi, equal to about 75 lb on a 3 in J-roller, working from the centre to the edges; don't use a rolling pin or wide roller, which bridges low spots (DAP; 3M). Insufficient pressure lets blisters form later (DAP).
  - You can trim straight after bonding, but it reaches full strength in about 7 days; keep bonded work out of direct sun or above 150 °F (66 °C) for 72 hours (DAP).
  - Don't roll over a laminate edge with the J-roller, which can snap it (This Old House).
  - Don't thin water-based contact adhesive (3M).
  - Spray adhesive (3M Super 77): spraying one surface (the less porous one) gives an open time of only 10-15 seconds and suits less demanding jobs; spraying both surfaces gives 1-30 minutes and a permanent bond; work at 16-27 °C (3M Super 77 data sheet).
  - Polystyrene-safe solvent contact glue (UHU por): coat both surfaces, about 150-250 g/m², and join 5-20 minutes later, when it passes the finger test (touch-dry) (UHU por data sheet).
  - EVA foam seams: cut both edges at 45 degrees (a bevel), which on 10 mm foam gives a natural glue channel; coat both surfaces (one side gives 'maybe 30%' of the strength), wait 3-5 minutes until tacky, and let it cure at least 30 minutes before stressing the joint (Costumary). Heat-form curves before gluing, because foam glued flat into a curve keeps springing back and pulls the seams apart over time (Costumary).

### When to use it

- **everyday_examples**: 
  - Plastic laminate (e.g. Formica, brand) on kitchen countertops and tabletops (Wikipedia 'Impact glue'; FPL Table 10-1)
  - The soles of shoes glued to the uppers, and shoe repairs (Wikipedia 'Impact glue'; Prusa)
  - EVA foam cosplay armour and props glued at the seams (Lumin's Workshop; CosplayShop video)
  - Cork boards, rubber mats and foam upholstery glued to boards ⚑ [uncertain: examples from the material lists in DAP and 3M, not named as products] *(⚑ parts need confirming)*
- **when_to_use**: Use contact adhesive when you need to bond large flat areas that are hard to clamp, such as laminate, veneer, cork, foam or fabric onto board (thisTOthat: 'ideal when it is awkward to clamp, or when you have large surface area'; FPL); when you want an instant bond with no waiting in clamps, so the work can be trimmed straight away (DAP; 3M); and for flexible or dissimilar materials, such as leather, rubber, EVA foam, fabric and shoe soles, where a rigid glue would crack (Wikipedia; Lumin's Workshop). Choose a water-based type for foams, indoor work and less fire risk, and a solvent type for faster drying and wider material range, following each can's list (3M; DAP). Spray adhesive (spray mount) is the spray form used for mounting paper, card, fabric and foam: 3M Super 77 gives 'temporary and permanent lightweight bonds' on papers, cardboard, fabrics and foams; spray one surface for lighter jobs, or both surfaces for a permanent bond (3M Super 77 data sheet). For EVA foam armour it gives 'the strongest foam bonds' if you wait for it to go tacky (Costumary), and solvent-based contact cement is also used to glue the hook side of hook-and-loop patches inside ABS cosplay armour for flexible attachment points (xposeddesigns).
- **when_not_to_use**: Not for load-bearing or structural joints, or anything that will carry a constant load, because it creeps and is much weaker than wood glue or epoxy (FPL Table 10-1; DAP): use PVA for wood joints and epoxy or structural adhesives elsewhere. Not where you need to slide parts into position after contact: use PVA, epoxy or double-sided tape with a liner. Not on polystyrene foam with an ordinary solvent type (use a water-based contact adhesive, a polystyrene-safe solvent type such as UHU por (brand), or another foam-safe glue) (DAP; 3M; UHU por data sheet). Not for rigid plastic-to-plastic joints such as 3D prints: use CA, epoxy or solvent welding (Prusa). Not for small, tight-fitting joinery such as dowels or mortise and tenon, where the parts would grab before they are home ⚑ [uncertain: reasoning]. Not near sparks or flames, or in small unventilated rooms, with a solvent type: use a non-flammable water-based type (FPL; Rockler; 3M). Not for permanently wet or hot places, such as behind a stove or outdoors in full sun, without checking the rating (FPL; DAP). *(⚑ parts need confirming)*
- **environment_limits**: Heat: it softens as it warms; DAP rates its solvent cement for service from -40 °F to 150 °F (-40 to 66 °C), and 3M's water-based Fastbond 30-NF drops from about 480 psi overlap shear at 23 °C to 60 psi at 82 °C (180 °F) (DAP; 3M). Creep: bonds 'creep under static load' (FPL Table 10-1), and 3M's laminate static-shear results fall with time at 82 °C. Water: solvent neoprene types claim resistance to water and weather, while FPL rates elastomeric contact adhesives as having low resistance to water and damp atmospheres (DAP; FPL). Cold: apply above 65 °F (18 °C); cured 3M film is stronger in shear at -34 °C but its peel strength drops to about 8.8 N/cm (DAP; 3M). Sunlight: keep new bonds out of direct sun for 72 hours (DAP); long-term UV ageing ⚑ [uncertain: no data found]. Solvents: cleaning a bonded joint with solvent weakens it (3M). Shelf life about 12 months for DAP's solvent cement (DAP). *(⚑ parts need confirming)*
- **safety_notes**: Solvent contact cements are highly flammable: DAP's contains acetone, ethyl acetate, petroleum spirits and methyl ethyl ketone with a flash point of -10 °C (14 °F), and the FPL warns that in small, unventilated spaces the solvent vapour can build up and explode if ignited. Work with doors or windows open, or wear a vapour respirator, and keep away from sparks, flames and pilot lights (Rockler; 3M; Wikipedia 'Impact glue'). The solvents are generally toxic if breathed; follow the label and SDS (FPL). Neoprene glue is abused as an inhalant, which can cause brain damage or death, and in the UK it is illegal to sell it to people likely to use it that way, so store it away from children (Wikipedia 'Impact glue'). Don't clean skin with solvents; use soap and warm water (DAP). Water-based types are non-flammable when wet and low-emitting (3M). Parts grab instantly, so keep fingers out from between large coated sheets while positioning ⚑ [uncertain: general advice]. Spray adhesive: both the solvent and the propellant are flammable, and 3M Super 77 contains 534 g/L of volatile organic compounds (3M Super 77 data sheet). UHU por is highly flammable too (flash point about -5 °C; UHU por data sheet). For EVA foam work indoors, Costumary advises good ventilation and a half-face respirator with organic vapour cartridges, not a dust mask. *(⚑ parts need confirming)*
- **common_failures**: 1) Bonding too soon, while the film is still wet: 'the most common mistake', leading to weak bonds, bubbles and blisters; wait until touch-dry (thisTOthat). 2) Surfaces won't grab: glue left too long, dust on it, or too little glue; apply another coat (3M; thisTOthat). 3) Dull, starved patches on porous materials: not enough glue; apply two coats (3M; DAP). 4) Blisters or bubbles appear later: not enough rolling pressure, or air trapped; roll hard from the centre out (DAP; Rockler). 5) Sheet lands in the wrong place and can't be moved: use dowels or slip sheets (DAP; 3M). 6) Foam or plastic melts or distorts: solvent attack; use a water-based type and test first (DAP). 7) Edges lift or laminate creeps near heat or in sun, or under constant load (FPL; DAP). 8) Cracked laminate edge from rolling over the edge (This Old House). 9) Poor bond in a cold room: below 65 °F (DAP; 3M). 10) Seams on EVA foam pull apart over time when flat pieces are glued into a curve or stretched while joining: heat-form the curve first, then glue (Costumary). A hot-glue backup seam is a poor idea if the piece will be heat-formed later, because hot glue 'will start to melt when you use a heatgun' (cosplayadvice.com).
- **related**: 
  - Rubber cement: a similar rubber-in-solvent glue used for paper crafts; peels off cleanly when used on one side, and can act as a contact adhesive when put on both
  - Elastomeric solvent glue (flexible craft glue): also rubbery and flexible but applied wet to one side and positioned before it sets
  - Double-sided foam tape (acrylic foam PSA): also sticks instantly on contact, with no solvent and no drying wait
  - PVA wood glue: stronger and cheaper for wood-to-wood joints, but needs clamping and doesn't suit non-porous or flexible materials
  - Two-part epoxy: much stronger and gap-filling for rigid, loaded joints
  - Hot-melt adhesive (glue gun): also fast, but a thick, heat-sensitive bead rather than a thin film
  - Polyurethane glue: a moisture-curing glue that also bonds foam and many materials, but foams and needs clamping
  - Silicone and MS-polymer adhesive sealants: flexible and waterproof, for joints that must also seal
  - Glue stick and starch paste: the mild water-based glues for paper and card, often undone with water; for paper and card, contact adhesive is mostly met as spray mount or rubber cement

### Pictures, videos and models

- **links**: 
  - [Contact-cement 000000.jpg (Mwnuk, Wikimedia Commons, 2012)](https://commons.wikimedia.org/wiki/File:Contact-cement_000000.jpg): A can of Weldwood contact cement (used on Wikipedia's 'Impact glue' article) *(licence: CC BY-SA 3.0)*
  - [How to Apply Plastic Laminate (Rockler, 2020)](https://www.rockler.com/learn/how-to-apply-plastic-laminate): Step-by-step photos of rolling contact cement onto laminate and board, positioning on spacer strips, rolling with a J-roller and trimming with a router *(licence: link only)*
  - [How To Laminate a Countertop (This Old House)](https://www.thisoldhouse.com/kitchens/21016508/how-to-laminate-a-countertop): Photos of coating a countertop and laminate with contact cement, laying the sheet on dowels every 12 in, and pressing it with a J-roller *(licence: link only)*
  - [Contact Cement Basics - Cosplay Tutorial (CosplayShop, YouTube)](https://www.youtube.com/watch?v=iPHEUvkJPGE): Video on using contact cement for EVA foam seams (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Methods of gluing Flexible Prints in TPU together! (Peter Solomon, YouTube)](https://www.youtube.com/watch?v=Oqh01j7ZG_s): Video comparing ways of gluing flexible TPU 3D prints (title and channel checked via YouTube oEmbed; not watched, so whether contact cement is shown is unverified) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Seam Roller (Sagittario, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/321669-seam-roller): A small printed hand roller (20 mm diameter, 25 mm wide) on a 5 mm bolt, made for sewing and wallpaper seams; usable as a mini J-roller for pressing small contact-cemented parts. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Seam Roller with 608 bearings (vega480, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1130696-seam-roller-with-608-bearings): A printed seam roller running on 608 skateboard bearings, printed in PLA or PETG and 'strong enough to put some force behind the roller'. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Textured Glue Roller (blecheimer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1065435-textured-glue-roller): Printable TPU-tyred glue roller for spreading glue over large panels; contact cement is also spread with rollers (3M recommends a texturing-type roller). Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing glues in torque, shear and tension with a hanging scale, e.g. contact cement against CA or epoxy on your own filament. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: Three panels: (1) both surfaces brushed with glue and solvent wisps rising off them, (2) a finger touching the now-dry tacky film with a tick, and a sheet resting on dowels above the board, (3) the dowels pulled out from the centre while a J-roller presses the sheet down, with a close-up showing the two glue films merged into one.
- **sources**: 
  - https://en.wikipedia.org/wiki/Contact_cement
  - https://en.wikipedia.org/wiki/Wood_glue
  - https://en.wikipedia.org/wiki/Rubber_cement
  - https://research.fs.usda.gov/treesearch/62250
  - https://research.fs.usda.gov/download/treesearch/62250.pdf
  - https://www.buildsite.com/pdf/dap/DAP-WELDWOOD-Original-Contact-Cement-Product-Data-2217932.pdf
  - https://multimedia.3m.com/mws/media/2366610O/3m-fastbond-contact-adhesive-30-nf.pdf
  - https://www.thistothat.com/glue/contact.shtml
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://www.luminsworkshop.com/en-us/blogs/news/glue-guide
  - https://www.rockler.com/learn/how-to-apply-plastic-laminate
  - https://www.thisoldhouse.com/kitchens/21016508/how-to-laminate-a-countertop
  - https://www.titebond.com/product/glues/d4d28015-603f-4dfc-a7d9-f684acc71207
  - https://commons.wikimedia.org/wiki/File:Contact-cement_000000.jpg
  - https://www.youtube.com/watch?v=iPHEUvkJPGE
  - https://www.youtube.com/watch?v=Oqh01j7ZG_s
  - https://api.printables.com/graphql/ (models 321669, 1130696, 1065435, 236948)
  - https://cdn.shopify.com/s/files/1/0264/4272/7498/files/3M_Super_77_Adhesive_Technical_Data_Sheet.pdf
  - https://static.rapidonline.com/pdf/64-1845t_v1.pdf
  - https://www.costumary.com/blog/eva-foam-clean-builds
  - https://cosplayadvice.com/using-eva-foam-for-cosplay/
  - https://www.xposeddesigns.com/blog/how-to-attach-cosplay-armor-to-a-bodysuit-without-the-straps-showing

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible, fast
- **bonds_well**: TPU or flexible prints, wood, paper or card, metal, rubber, fabric or leather, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…). Slippery plastics such as polyethylene, polypropylene and silicone [uncertain: not tested in an opened sour…"*
- **bonds_poorly**: slippery plastics (PE or PP), silicone ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…). Slippery plastics such as polyethylene, polypropylene and silicone [uncertain: not tested in an opened sour…"*
- **tools**: power tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, paper or card, foam, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, everyday_examples, making_tips_3d_printing, materials, play_and_precision, processes, removability, safety_notes, when_not_to_use

## 225 Polyurethane glue (foaming moisture-cure glue)

*adhesives & bonding.* A glue that cures by reacting with moisture and foams as it sets, filling gaps; bonds wood, stone, metal, foam and some plastics

### What it is

- **plain_name**: A brown, honey-like glue from a bottle that hardens by soaking up moisture, and puffs up into a foam as it sets; it sticks wood to almost anything (stone, metal, foam, ceramic, many plastics) and is waterproof, but the parts must be clamped tightly because the foam itself is weak
- **term**: Polyurethane glue (one-part moisture-curing polyurethane adhesive, PU glue)
- **aliases**: 
  - PU glue, poly glue, polyurethane adhesive (Wikipedia; Loctite design guide)
  - moisture-cure polyurethane, one-component (1K) polyurethane adhesive (Wikipedia 'Wood glue')
  - expanding glue, foaming glue (VCA Animal Hospitals; Rockler)
  - Gorilla Glue, Original Gorilla Glue (brand; Wikipedia), Titebond Polyurethane Glue (brand; Titebond data sheet), Elmer's ProBond Polyurethane (brand; thisTOthat), Excel (brand; Wikipedia), Loctite Wood Wizard (brand; Popular Woodworking)
  - polyurethane construction adhesive, e.g. Loctite PL Premium (brand): the same moisture-curing chemistry as a thick paste in a caulk-gun cartridge (Henkel specification)
  - PUR hot melt (reactive polyurethane hot melt): starts like hot glue, then moisture-cures into a tough polyurethane (Loctite design guide)
  - Note: 'Gorilla Wood Glue' is a different, PVA-type product that does not foam (woodgears.ca)
- **family**: adhesives & bonding
- **one_liner**: Polyurethane glue is a one-part liquid glue that cures by reacting with moisture in the air and in the materials, foaming slightly as it hardens, to give a strong, waterproof bond between wood and many other materials, provided the joint is tight and clamped.
- **complexity**: Single piece: one liquid, no mixing. In use you also need water (a damp cloth or spray bottle) to dampen one surface, clamps or weights to hold the joint tight while it foams, and gloves (Gorilla Glue directions; Titebond data sheet).
- **how_it_works**: The liquid is made of short polymer chains that end in reactive isocyanate groups (an isocyanate-terminated prepolymer). When they meet water, from the air, the wood or a dampened surface, they react and link up into a solid polyurethane plastic, which is why it is called a moisture-cure glue (Wikipedia 'Wood glue'). The same reaction with water also releases carbon dioxide gas (Wikipedia 'Isocyanate': RNCO + H2O -> RNH2 + CO2), so the glue swells into a foam, about 3 times its volume according to one maker (Gorilla Glue). In a tight, clamped joint the glue is pushed into the pores of the material and gives a strong bond, but any foam left in a gap is mostly bubbles and has almost no strength (Popular Woodworking; woodgears.ca).

### Finder attributes

- **job**: glue or bond: joins wood to wood, and wood to stone, metal, ceramic, foam, glass and many plastics, permanently and waterproof (Gorilla Glue; Woodcraft)
- **motion**: none: a rigid joint with no movement
- **degrees_of_freedom**: 0: the glued parts are locked together
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks are curing from moisture without any mixing, and foaming up as it sets, which pushes the glue into pores and end grain (Popular Woodworking) but can also push parts apart if they are not clamped (Woodcraft; Snapmaker)
- **holding_principle**: material bond (glue, solvent or melting): the cured polyurethane sticks to both surfaces and keys into their pores
- **input_output**: not applicable
- **power**: passive (no power needed): it cures by itself at room temperature using moisture from the air and the materials (Wikipedia 'Wood glue'; Gorilla Glue).
- **removability**: permanent: there is no practical solvent for the cured glue; wet glue wipes off with a dry cloth or mineral spirits (paint thinner), but once cured it has to be scraped, chiselled or sanded off (Gorilla Glue; Titebond data sheet; Rockler).
- **reuse_cycles**: once: the glue can't be reused; a failed joint has to be cleaned back to bare material and glued again
- **tools_needed**: The glue, water in a spray bottle or a damp cloth, clamps (or weights, tape or rubber bands for light parts), disposable gloves, a brush or roller to spread it thinly, masking tape to catch squeeze-out, a dry cloth or mineral spirits for wet glue, and a scraper, chisel or sandpaper for cured foam (Gorilla Glue; Titebond data sheet; Popular Woodworking).
- **seal**: none: it is a glue, not a sealant, and its foam is full of bubbles. Polyurethane sealants in caulk tubes are a separate product made for sealing gaps against air and water (Wikipedia 'List of polyurethane applications').
- **load**: medium to heavy on wood, if the joint is tight: Titebond reports 3,500+ psi (about 24 MPa) shear strength on hard maple at room temperature and 3,000 psi (about 21 MPa) after a night at 150 °F (Titebond data sheet), and Franklin International's tests quoted by Popular Woodworking found polyurethane (3,510 psi) about as strong as yellow PVA glue (3,600 psi), with the wood usually breaking first. It is claimed to beat PVA on end grain, though this was not scientifically tested (Popular Woodworking). In gappy joints it is very weak: with a 0.3 mm gap, Matthias Wandel's test joints broke at about 15 lb against about 220 lb for tight joints (woodgears.ca). Titebond says its polyurethane glue is 'not for structural applications' (Titebond data sheet). On polyethylene and polypropylene it hardly sticks at all: a two-part urethane adhesive managed only about 1.0 MPa on LDPE and 0.7 MPa on PP (Loctite design guide, pp. 51, 63).
- **adjustable**: no, but it gives time to line parts up: about 15-30 minutes of open time before assembly (Woodcraft), and 25-30 minutes at 70 °F and 50% humidity for Titebond's version (Titebond data sheet). Once it has foamed and cured, nothing can be adjusted.
- **play_and_precision**: not applicable (nothing moves). It needs tight-fitting joints: glue experts say it can't fill a gap larger than 1-2 mm with any strength (Popular Woodworking), and a 0.3 mm gap already made joints weak in Wandel's test (woodgears.ca). The foam can lift or shift parts slightly, so clamp them or use pins and keys to hold alignment (Woodcraft; Snapmaker).
- **access_needed**: not applicable: glue goes on the faces before assembly, but you need to reach both sides to clamp the joint while it foams and cures
- **materials**: Bonds well: wood (including wet or oily wood and end grain), stone, concrete, brick, ceramic, metal, glass, rigid foams including polystyrene insulation board, fibreglass, rigid PVC, and many other plastics and composites (Gorilla Glue; Woodcraft: 'best for wet wood and bonding wood to non wood'; Wikipedia 'Wood glue'; Henkel PL Premium specification; Titebond data sheet: 'most plastics'). For 3D prints, a polyurethane construction adhesive was the overall winner on PETG in Cosel's pull test (Hackaday). Poor or not recommended: polyethylene (PE), polypropylene (PP), PTFE, flexible (soft) PVC, and rubber with a lot of oil or plasticiser (Gorilla Glue FAQ; Henkel PL Premium specification). Glass is claimed by makers, but test first ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: no mixing, and there is time to line parts up, but you have to dampen the surfaces, clamp firmly for 1-2 hours, wear gloves, and deal with foaming squeeze-out (Gorilla Glue; Rockler).

### Making it

- **processes**: 
  - off-the-shelf part: bottles of polyurethane glue, and polyurethane construction adhesive in caulk-gun cartridges
  - woodwork: waterproof outdoor projects, end-grain joints, oily or wet timber and wood-to-other-material joints (Woodcraft; Popular Woodworking)
  - 3D print (FDM): gluing prints to wood, stone, foam or metal, and large prints; for small precise plastic parts CA or epoxy is usually easier (Snapmaker; Hackaday)
  - 3D print (resin): possible for resin to other materials ⚑ [uncertain]: no test found
  - building and repair: subfloors, foam insulation board, trim, stone and masonry with polyurethane construction adhesive (Henkel PL Premium specification) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a glue for joining separate parts, although you can print pins, keys and flat, tight mating faces to make gluing easier.
- **making_tips_3d_printing**: 1) Make the mating faces flat and tight-fitting. The foam is weak, so the glue only has real strength in a thin, closed joint; don't rely on it to fill gaps (Popular Woodworking: no more than 1-2 mm; woodgears.ca: a 0.3 mm gap made joints very weak). 2) Printed plastic is not porous, so the glue's moisture must come from outside: lightly dampen one surface with a damp cloth or spray bottle without soaking it, and put the glue on the dry surface (Gorilla Glue directions). 3) Use a thin layer (about ½ oz per square foot, Gorilla Glue; a film about 6 thousandths of an inch or 0.15 mm, Titebond data sheet), because it expands and too much gives messy squeeze-out (Rockler). 4) Clamp firmly for 1-2 hours and leave it 24 hours to cure fully (Gorilla Glue); keep clamps on until it has fully cured, or the foam can push the joint open (Woodcraft). The expansion can push unclamped parts apart and spoil the alignment (Snapmaker), so add pins, keys or a stepped joint to locate the parts. 5) Put masking tape along the seam to catch the foam, and peel it off after curing (Popular Woodworking). Wipe wet squeeze-out with a dry cloth or mineral spirits; cured foam has to be cut or sanded off (Gorilla Glue; Rockler). 6) Don't use it on PP or PE prints or on soft, plasticised flexible parts (Gorilla Glue FAQ). 7) It is most useful for joining prints to wood, stone, foam, concrete or metal, and outdoors, where it is waterproof (Woodcraft; Gorilla Glue). For PETG, a polyurethane construction adhesive gave the highest pull strength in Cosel's test of many glues, although one commenter notes that it also expands from CO2 (Hackaday). 8) Test first on scrap pieces to see how much it foams (Rockler; Gorilla Glue).
- **off_the_shelf_parts**: Search for 'polyurethane glue', 'PU glue' or 'moisture-cure polyurethane adhesive' (e.g. Gorilla Glue, Titebond Polyurethane, Elmer's ProBond, brands); 'polyurethane construction adhesive' in 10 oz / 300 ml cartridges (e.g. Loctite PL Premium, brand); 'two-part polyurethane adhesive' for plastics and deep sections; 'PUR hot melt' glue sticks for a hot-glue-style polyurethane; plus bar or F-clamps, a spray bottle, nitrile gloves and mineral spirits (Gorilla Glue; Titebond data sheet; Henkel PL Premium specification; Loctite design guide).
- **rules_of_thumb**: 
  - Keep joints tight: polyurethane glue can't fill a gap larger than 1-2 mm with any strength, because the foam is mostly bubbles (Popular Woodworking, 'The Truth About Polyurethane Glue', p. 2). In Wandel's test a 0.3 mm gap cut joint strength to less than a tenth of a tight joint's (woodgears.ca, 'Gorilla glue sucks (at filling gaps)').
  - Moisture: dampen one surface lightly, or both surfaces on dense hardwoods; spread about ½ oz of glue per square foot (Gorilla Glue directions).
  - Times: about 15-30 minutes open time and 1-4 hours clamp time (Woodcraft glue chart); Gorilla says clamp for 1-2 hours and allow 24 hours to cure (Gorilla Glue); Titebond's version gives a 30-minute working time and a 45-minute clamp time (Titebond data sheet).
  - Clamping pressure: enough to close the joint tightly; Titebond gives about 100-150 psi for softwoods, 125-175 psi for medium woods and 175-250 psi for hardwoods (Titebond data sheet).
  - Temperature: apply above 40 °F (4 °C) for Gorilla Glue and above 50 °F (10 °C) for Titebond; cold thickens the glue and slows the cure (Gorilla Glue; Titebond data sheet).
  - Strength on wood: about 3,500 psi (24 MPa) in hard-maple shear, about the same as yellow PVA glue (Titebond data sheet; Popular Woodworking).
  - Shelf life: about 12 months (Titebond data sheet; Woodcraft), about a year after opening (Popular Woodworking); squeeze air out of the bottle before capping, because moisture gets in and cures it (Gorilla Glue).
  - One-part moisture-cure polyurethanes cure through only about 9.5 mm (0.375 in) in a reasonable time, because moisture has to soak in; two-part versions have no such limit (Loctite 'Design Guide for Bonding Plastics', vol. 6, p. 10).

### When to use it

- **everyday_examples**: 
  - The brown bottle of Original Gorilla Glue used for household repairs (Wikipedia 'Gorilla Glue')
  - Teak outdoor furniture, where Danish polyurethane glue was used before it was sold in North America (Wikipedia 'Gorilla Glue')
  - Polyurethane construction adhesive in a caulk-gun tube for gluing subfloors, foam insulation board and trim (Henkel PL Premium specification)
  - Bookbinding: the spines of many paperback books are glued with reactive polyurethane (PUR) adhesive (Wikipedia 'List of polyurethane applications')
- **when_to_use**: Use it for waterproof outdoor woodwork, for wood that is wet, oily or hard to glue, for end-grain joints, and when gluing wood to a different material such as stone, metal, ceramic, concrete or rigid foam (Woodcraft; Gorilla Glue; Popular Woodworking). It suits complicated glue-ups that need time to assemble, because it stays workable for about 15-30 minutes (Woodcraft), and it can be used down to about 40 °F (4 °C), where most PVA glues need 50 °F (10 °C) or more (Gorilla Glue; Woodcraft). In 3D printing it is useful for fixing prints to wood, stone or foam, and a polyurethane construction adhesive did best on PETG in one large test (Hackaday).
- **when_not_to_use**: Don't use it to fill gaps or rescue loose joints: the foam has almost no strength, so use two-part epoxy instead (Popular Woodworking; woodgears.ca; Woodcraft). For ordinary indoor wood-to-wood joints, PVA wood glue is as strong, cheaper, cleaner and washes up with water (Popular Woodworking; Woodcraft). Avoid it on small, precise plastic parts where foaming would push them out of line; use CA or epoxy (Snapmaker). Don't use it on polyethylene, polypropylene, PTFE, soft PVC or oily rubber (Gorilla Glue FAQ; Henkel PL Premium specification), for parts that sit underwater or below a boat's waterline (use epoxy), or for structural, load-bearing joints (Titebond data sheet; Woodcraft: 'Epoxy is the only woodworking adhesive suited for constant water contact'). Avoid it where people with isocyanate allergy or asthma would be exposed (Titebond data sheet; OSHwiki).
- **environment_limits**: Heat: service temperature -40 °F to 200 °F (-40 °C to 93 °C) for Gorilla Glue, and -40 °F to 160 °F (-40 °C to 71 °C) for PL Premium construction adhesive (Gorilla Glue; Henkel PL Premium specification); Titebond keeps about 3,000 psi after a night at 150 °F (66 °C) (Titebond data sheet); polyurethanes 'typically degrade in strength after long-term exposure over 302 °F (150 °C)' (Loctite design guide). Cold: apply above 40-50 °F (4-10 °C); cold weather and dry air slow the cure a lot (Gorilla Glue; Titebond data sheet; Henkel PL Premium specification). Water: passes ANSI/HPVA Type I and II water-resistance tests and is fine outdoors (Titebond data sheet; Gorilla Glue), but it is not for constant immersion, marine use or below the waterline (Titebond data sheet; Henkel PL Premium specification), and in water-soaking tests polyurethane bonds were 'much less durable' than resorcinol bonds (Wikipedia 'Wood glue'). Sunlight (UV): no clear data found ⚑ [uncertain]. Storage: moisture that gets into the bottle cures the glue, so it keeps about a year (Gorilla Glue; Titebond data sheet). *(⚑ parts need confirming)*
- **safety_notes**: It contains isocyanates, which irritate the eyes and skin and can sensitise the skin and lungs, so repeated exposure can cause allergies or asthma; wear gloves and work with good ventilation (Titebond data sheet: 'potential skin and respiratory sensitizer'; Woodcraft; OSHwiki). Since 24 August 2023, EU professional and industrial users of products with more than 0.1% diisocyanates need training (OSHwiki). It stains skin brown for several days (Gorilla Glue; Titebond data sheet). Keep it away from children and pets: if swallowed, the wet glue foams in the warm, wet stomach into a hard mass that usually has to be removed by surgery, and as little as half a teaspoon can cause a blockage (VCA Animal Hospitals; Wikipedia 'Gorilla Glue'). The reaction gives off carbon dioxide, so don't seal wet glue in a closed container ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Joints that snap easily because the parts didn't fit tightly and the gap filled with weak foam; make the fit tight and clamp firmly, or use epoxy (woodgears.ca; Popular Woodworking). Joints pushed open or parts pushed out of line because the clamps came off too early, or were never used, while the glue was foaming (Woodcraft; Snapmaker). Messy foam squeeze-out that is hard to remove and can stop stain soaking in; use less glue, mask the seam, and wipe wet glue with mineral spirits or lacquer thinner (Rockler; Popular Woodworking). Slow or weak curing in cold or very dry conditions, or on dry, non-porous surfaces that weren't dampened (Gorilla Glue; Henkel PL Premium specification). Glue that has thickened or hardened in the bottle after moisture got in (Gorilla Glue). No grip on PE, PP, PTFE, soft PVC or oily rubber (Gorilla Glue FAQ; Henkel PL Premium specification).
- **related**: 
  - PVA wood glue (white and yellow glue): about as strong on wood, cheaper, water clean-up and no foam, but most grades are less water-resistant and it is poor on non-wood materials (Popular Woodworking; Woodcraft)
  - Two-part epoxy: the choice for gap filling, underwater use and wobbly joints; needs mixing (Popular Woodworking; Woodcraft)
  - Cyanoacrylate (superglue): sets in seconds on tight-fitting plastic parts, but brittle and not waterproof
  - Polyurethane construction adhesive: the same moisture-cure chemistry as a thick, gap-bridging paste in a cartridge, curing to a rubbery solid (Henkel PL Premium specification)
  - Two-part polyurethane adhesive: mixed from two parts, so it cures right through thick sections without needing moisture (Loctite design guide)
  - Silicone and MS-polymer adhesive sealants: also moisture-curing and waterproof, but they stay rubbery and flexible, seal gaps, and MS polymers contain no isocyanates
  - PUR hot-melt adhesive: applied with a hot-glue gun, grabs as it cools, then moisture-cures into tough polyurethane (Loctite design guide)
  - Structural acrylic (MMA) adhesives: two-part plastics glues; MMA-type glues were also among the strongest on PETG in Cosel's test (Hackaday)

### Pictures, videos and models

- **links**: 
  - [Gorilla glue sucks (at filling gaps) (woodgears.ca, Matthias Wandel)](https://woodgears.ca/joint_strength/gorilla_glue.html): Photos of foamed-up squeeze-out, broken gapped and tight joints showing the weak foam inside, and the home-made test rig, with a table of breaking forces *(licence: link only)*
  - [Gorilla glue sucks (at filling gaps) (YouTube, MatthiasWandel)](https://www.youtube.com/watch?v=MUWu-N85oXM): Video of the same test: gapped and tight polyurethane joints compared with yellow glue (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Original Gorilla Glue (Gorilla Glue Company product page)](https://gorillatough.com/product/original-gorilla-glue): Step-by-step directions with pictures: dampen, apply, clamp, cure; plus technical specs (service temperature, Type I, expands when cured). A brand page, used here for the type's general instructions *(licence: link only)*
  - [Teardrop polyglue strength.jpg (Wikimedia Commons, by Wikiwerks at English Wikibooks)](https://commons.wikimedia.org/wiki/File:Teardrop_polyglue_strength.jpg): Photo of an author's strength test of polyurethane glue: a pine block glued to plywood, broken so that the plywood failed *(licence: Public domain)*
  - [The glue we used..jpg (Wikimedia Commons, by Fissbusta)](https://commons.wikimedia.org/wiki/File:The_glue_we_used..jpg): Photo of a bottle of Gorilla (polyurethane) glue *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing glues in torque, shear and tension with a hanging scale; useful to see how polyurethane glue does on your own filament, tight versus gapped. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Glue tensile strength test object (Patrol_maverick, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1352973-glue-tensile-strength-test-object): Two printed tubes glued end to end over a 6 x 6 mm area, then loaded with a bucket filled slowly with water until the joint fails. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [F-style Clamp / Glue clamp (MisterJ, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1341341-f-style-clamp-glue-clamp): A fully printable F-clamp for holding glued parts together while the glue cures, which polyurethane glue needs; the designer notes a plastic clamp bends under high force. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Clamp to glue with rubber band (3D-Muc, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/125755-clamp-to-glue-with-rubber-band): A simple printed sliding clamp that uses a rubber band for pressure, for light parts (Gorilla suggests rubber bands for light objects). Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: Two side-by-side cut-aways of a glued joint: on the left, a tight clamped joint where a thin glue film has been pushed into the wood pores (strong); on the right, a gappy joint filled with bubbly foam (weak), with small arrows showing water from a damp cloth and the air entering the glue and CO2 bubbles coming out.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gorilla_Glue
  - https://en.wikipedia.org/wiki/Wood_glue
  - https://en.wikipedia.org/wiki/Isocyanate
  - https://en.wikipedia.org/wiki/List_of_polyurethane_applications
  - https://en.wikipedia.org/wiki/Adhesive
  - https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://gorillatough.com/product/original-gorilla-glue
  - https://ardec.ca/media/catalog/documents/Titebond_Polyurethane_Glue_TDS.pdf
  - https://www.popularwoodworking.com/article/the_truth_about_polyurethane_glue/
  - https://www.popularwoodworking.com/article/the_truth_about_polyurethane_glue/2/
  - https://woodgears.ca/joint_strength/gorilla_glue.html
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://dm.henkel-dam.com/is/content/henkel/Loctite-PL-Premium
  - https://hackaday.com/2025/01/30/comparing-adhesives-for-gluing-petg-prints/
  - https://www.snapmaker.com/blog/best-glue-for-pla-3d-prints/
  - https://vcahospitals.com/know-your-pet/expanding-glues
  - https://oshwiki.osha.europa.eu/en/themes/isocyanates
  - https://www.thistothat.com/glue/elmers_probond.shtml
  - https://commons.wikimedia.org/wiki/File:Teardrop_polyglue_strength.jpg
  - https://commons.wikimedia.org/wiki/File:The_glue_we_used..jpg
  - https://www.youtube.com/watch?v=MUWu-N85oXM
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fills gaps
- **bonds_well**: PETG, PVC, wood, metal, glass or ceramic, foam, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…PL Premium specification). Glass is claimed by makers, but test first [uncertain].…"*
- **bonds_poorly**: slippery plastics (PE or PP), rubber ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…PL Premium specification). Glass is claimed by makers, but test first [uncertain].…"*
- **tools**: press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, foam, carbon fibre or composites, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, materials, processes, safety_notes

## 226 Structural acrylic and low-surface-energy plastic adhesives (for PE and PP)

*adhesives & bonding.* Two-part acrylic glues, and primers used with superglue, that bond tough slippery plastics like polyethylene and polypropylene which most glues can't

### What it is

- **plain_name**: Special glues for the slippery, waxy-feeling plastics that ordinary glue just peels off, such as polyethylene (milk jugs, chopping boards) and polypropylene (bottle caps, storage boxes): either a two-part glue from a double cartridge, or a kit where you paint on a primer and then use superglue
- **term**: Low-surface-energy (LSE) plastic adhesives: structural acrylic (methacrylate) polyolefin bonders, and polyolefin primers used with cyanoacrylate
- **aliases**: 
  - LSE adhesive, polyolefin bonder, PE/PP glue, 'glue for hard-to-bond plastics' (3M white paper; Loctite design guide)
  - structural acrylic, toughened acrylic, reactive acrylic, methacrylate or MMA (methyl methacrylate) adhesive (Permabond; Loctite design guide)
  - no-mix acrylic (resin on one part, activator on the other) and static-mix acrylic (two parts mixed in a nozzle) (Loctite design guide)
  - polyolefin primer, CA primer or surface primer; kits sold as a 'plastics bonding system' with an activator pen (Loctite SF 770 data sheet; Loctite Plastics Bonding System data sheet)
  - 3M Scotch-Weld DP8005 / DP8010, Loctite 3032, Permabond TA4610 (brands of LSE structural acrylics); Loctite 770 / SF 770 primer and Loctite Plastics Bonding System (brands of CA-plus-primer)
  - 'plastic welder' glues, e.g. Devcon Plastic Welder (brand): general-purpose methacrylates for ABS, PVC and fibreglass that are not made for PE or PP (Devcon data sheet)
- **family**: adhesives & bonding
- **one_liner**: LSE adhesives are special structural acrylic glues, or superglue used after a polyolefin primer, that can make strong bonds to polyethylene, polypropylene and similar slippery plastics that normal glues can't wet or grip.
- **complexity**: A few parts. Route 1, structural acrylic: a double cartridge of resin and activator, a static mixing nozzle and an applicator gun (3M DP8005 data sheet; Permabond TA4610 data sheet). Route 2, primer plus superglue: a felt-tip or brush-on primer and a bottle of cyanoacrylate (Loctite Plastics Bonding System data sheet). Optional: a propane torch with a flame spreader for flame treatment, used with some other glues (TAP Poly-Weld data sheet).
- **how_it_works**: Glue can only stick if it spreads out and wets the surface, but polyethylene (PE), polypropylene (PP) and PTFE have very low surface energy (about 31 mN/m for PE and PP, 18.5 for PTFE, compared with about 1,000 for glass), so most liquid glues bead up on them 'like raindrops on a freshly waxed car' and make weak bonds (3M white paper). LSE structural acrylics are two-part methacrylate glues: rubber dissolved in acrylic monomers, which a peroxide catalyst sets off into a tough, rubber-toughened plastic, and which are specially formulated to grip polyolefins without any surface treatment (Loctite design guide, p. 12; 3M DP8005 data sheet). The primer route paints on an amine dissolved in a fast-evaporating solvent; it acts as a chemical bridge that sticks to the plastic and triggers superglue, so the superglue can then bond (Loctite design guide, pp. 6, 75; Loctite SF 770 data sheet). A third route raises the plastic's surface energy with a brief flame, corona or plasma treatment so that other glues can wet it (Loctite design guide, p. 75; 3M white paper).

### Finder attributes

- **job**: glue or bond: joins PE, PP and other low-surface-energy plastics to themselves or to metal, wood and other plastics (3M DP8005 data sheet; Permabond TA4610 data sheet)
- **motion**: none: a rigid joint with no movement
- **degrees_of_freedom**: 0: the glued parts are locked together
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its trick is sticking to plastics that almost nothing else sticks to; the acrylics are also rubber-toughened, so they resist peel and impact better than most rigid glues (Permabond MMA article; Loctite design guide)
- **holding_principle**: material bond (glue, solvent or melting): the cured acrylic or primed superglue sticks to both surfaces
- **input_output**: not applicable
- **power**: passive (no power needed): the two-part acrylics cure at room temperature once mixed, and primed superglue cures from surface moisture; heating the joint to 66-80 °C for 30 minutes only speeds up the acrylic's cure (3M DP8005 data sheet).
- **removability**: permanent: on PE and PP the plastic itself usually breaks before the glue lets go (3M DP8005 data sheet: 'SF' substrate failure; Loctite design guide, p. 63). Strong solvents such as acetone and toluene weaken the cured acrylic (3M DP8005 chemical exposure table), but that is not a practical way to take a joint apart.
- **reuse_cycles**: once
- **tools_needed**: For structural acrylics: the double cartridge, the matching applicator gun and mixing nozzles (hand mixing is not recommended for 10:1 products), isopropyl alcohol wipes, fine sandpaper (150 grit or finer), clamps or tape giving light pressure, gloves and good ventilation (3M DP8005 data sheet; Permabond TA4610 data sheet). For the primer route: the primer pen or bottle, superglue and tissue (Loctite Plastics Bonding System data sheet). For flame treatment: a propane torch with a flame spreader and a water spray to check the result (TAP Poly-Weld data sheet).
- **seal**: none: it is a glue, not a sealant, although the structural acrylics resist water well and one is sold as able to bond underwater (3M DP8005 data sheet; Permabond TA4610 data sheet).
- **load**: medium to heavy for plastics. The right LSE glue is usually stronger than the PE or PP itself: 3M DP8005 gave about 1,100 psi (7.6 MPa) overlap shear on HDPE and PP, with the plastic breaking first (3M DP8005 data sheet); Permabond TA4610 gave more than 8 MPa on PP (the plastic broke) and 15 MPa on HDPE (Permabond TA4610 data sheet); primed superglue gave about 15 MPa on PP (Loctite SF 770 data sheet). 3M notes that by convention a glue counts as structural above 1,000 psi (about 7 MPa) overlap shear (3M white paper). Without the right product, bonds on PE and PP are almost nil: general-purpose superglue, epoxies, polyurethane, general-purpose methacrylate and silicone all gave only about 0.3-1.4 MPa or less (Loctite design guide, pp. 51, 63). Peel: the acrylics are toughened (DP8005 T-peel of 17 pounds per inch on HDPE with the plastic failing), but primed superglue is 'not recommended in assemblies where high peel strength is required' (3M DP8005 data sheet; Loctite SF 770 data sheet).
- **adjustable**: no, and there is little time to line parts up: 3M DP8005 has a work life of only 2.5-3 minutes at 23 °C (3M DP8005 data sheet), Permabond TA4610 a pot life of 5-8 minutes (Permabond TA4610 data sheet), and primed superglue sets in about 30 seconds, with the instructions saying 'do not reposition parts' (Loctite Plastics Bonding System data sheet).
- **play_and_precision**: not applicable (nothing moves). The glue layer has to be the right thickness: 3M wants a 0.005-0.008 in (0.13-0.2 mm) bondline and puts 0.008 in glass microspheres in the glue to set it, warning that a layer thinner than 0.005 in gives unpredictable results (3M DP8005 data sheet). Permabond TA4610 fills gaps up to 1 mm (Permabond TA4610 data sheet). The primer-plus-superglue kit needs close-fitting parts and is 'not suitable for... gap-filling' (Loctite Plastics Bonding System data sheet).
- **access_needed**: not applicable: the glue goes on the joint faces before assembly
- **materials**: Bonds well: polypropylene (PP), polyethylene (HDPE, LDPE, UHMWPE), thermoplastic polyolefin (TPO), and with the acrylics also ABS, PVC, polycarbonate, acrylic (PMMA), polystyrene, fibreglass, PET and PETG, glass, wood, concrete, aluminium and steel, so it is good for joining PE or PP to something else (3M DP8005 data sheet; Permabond TA4610 data sheet). Primed superglue also bonds PTFE and thermoplastic rubber (Loctite SF 770 data sheet). Poor or not recommended: 3M DP8005 lists PTFE, silicone, nylon, polyimide and surfaces with mould-release agents, oils or anti-static additives as not recommended (3M DP8005 data sheet); PTFE bonds are weak even with Permabond TA4610 (more than 2 MPa) (Permabond TA4610 data sheet). The primer-plus-superglue kit does not suit polystyrene foam, foam rubber, glass, glazed surfaces or silicone rubber (Loctite Plastics Bonding System data sheet). Ordinary methacrylate 'plastic welder' glues don't list PE or PP at all (Devcon data sheet; Loctite design guide: general-purpose H3000 gave under 0.3 MPa on PP).
- **maker_difficulty**: moderate: the primer-plus-superglue kit is easy and cheap, but the structural acrylics need a special cartridge and gun, have only a few minutes' working time, smell strongly and are not cheap; flame treatment needs care with a torch (Loctite Plastics Bonding System data sheet; 3M DP8005 data sheet; Permabond MMA article; Hackaday comments).

### Making it

- **processes**: 
  - off-the-shelf part: LSE structural acrylic cartridges, polyolefin primers and primer-plus-superglue kits
  - 3D print (FDM): joining PP or PE prints, or PETG, ABS, ASA and PC prints to each other or to metal ⚑ [uncertain]: no maker test of these glues on printed PP was found
  - CNC and sheet work: bonding HDPE or PP sheet (e.g. chopping-board plastic) and plastic lumber (3M white paper)
  - repairs: plastic toys, containers, bumpers and trim, wiper blades and rubber seals (Loctite Plastics Bonding System data sheet; 3M white paper) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a glue for joining separate parts.
- **making_tips_3d_printing**: 1) Know what you are gluing: PP is so hard to stick to that PP prints only grip a PP bed sheet or PP tape (Prusa knowledge base), which is the same problem glue has. For PLA, PETG, ABS and ASA prints, ordinary superglue or epoxy usually works, though methacrylate glues were among the strongest on PETG in Cosel's test (Hackaday). 2) Clean with isopropyl alcohol and let it evaporate; lightly sand with 150-grit or finer paper; avoid anti-static or oily additives and mould-release sprays (3M DP8005 data sheet; Permabond TA4610 data sheet). 3) With structural acrylics, use the maker's gun and mixing nozzle, throw away the first bit of mixed glue, and close the joint within the 2.5-3 minute work life (3M DP8005 data sheet). Design the joint so the glue layer is about 0.13-0.2 mm thick, and add small bumps or ribs about that height if parts sit flat (3M DP8005 data sheet: 0.005-0.008 in bondline). Clamp lightly (about 4-8 psi) for at least 2 hours; 3M notes plastic parts can be designed to hold themselves in place (3M DP8005 data sheet). 4) Mixed acrylic gets hot as it cures, and the heat can deform thin or heat-sensitive parts, which matters for thin PLA walls (Loctite design guide, p. 12) ⚑ [uncertain]. Also, glue squeezed out into the air stays soft for longer, while glue inside the joint cures solid (Permabond TA4610 data sheet). 5) With the primer route, prime only the PE or PP part, let it dry (about 60 seconds for the kit; about 8-9 seconds for the industrial primer), then put one drop of superglue per square inch on the other part and press together for about 30 seconds (Loctite Plastics Bonding System data sheet; Loctite SF 770 data sheet). Bond soon: the primer stays active for about 8 hours (Loctite SF 770 data sheet). 6) Load the joint in shear, not peel, especially with primed superglue (Loctite SF 770 data sheet); use wide overlapping or stepped joints. 7) Don't use it on nylon (PA) prints without testing, because 3M lists nylon as not recommended for DP8005 (3M DP8005 data sheet), although Permabond reports 5 MPa on PA6 with TA4610 (Permabond TA4610 data sheet). 8) For PP or PE prints, melting them together with a soldering iron or hot-air plastic welder is often simpler (Wikipedia 'Polyethylene'; Wikipedia 'Plastic welding'); see the Melted plastic weld entry. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'polyolefin bonder', 'LSE structural adhesive', 'polypropylene adhesive' or 'structural plastic adhesive' (e.g. 3M Scotch-Weld DP8005 / DP8010, Loctite 3032, Permabond TA4610, brands) with the matching 'duo-pak applicator' or dispensing gun and 'static mixing nozzles'; 'polyolefin primer' or 'CA primer' (e.g. Loctite SF 770, brand) with a surface-insensitive cyanoacrylate; consumer 'plastics bonding system' kits with a primer pen; 'LSE double-sided tape' (e.g. 3M 300LSE or VHB LSE, brands) where tape will do; and a 'propane torch with flame spreader' for flame treatment (3M white paper; Loctite SF 770 data sheet; TAP Poly-Weld data sheet).
- **rules_of_thumb**: 
  - The lower a surface's energy (critical surface tension), the harder it is to glue: PTFE is about 18.5 mN/m, silicone 24, PE and PP 31 and polystyrene 33, while PVC (39), nylon 6,6 (43) and PET (43) are easier, and aluminium (about 500) and glass (about 1,000) are easy (3M 'Innovations in Bonding to Low Surface Energy Surfaces' white paper, table after Kinloch 1987).
  - Water test: after flame treating PE (about five quick passes of 0.5 s each, 2-3 s in total, without melting it), wet it; if water beads up and runs off, the treatment didn't work; if it spreads out in a sheet, the surface is ready. Bond within 1 hour (TAP Poly-Weld data sheet).
  - A polyolefin primer can raise superglue bond strength on hard-to-bond plastics by up to 20 times (Loctite 'Design Guide for Bonding Plastics', vol. 6, p. 6). The primer dries in about 8-9 seconds and stays active for about 8 hours (Loctite SF 770 data sheet).
  - 3M DP8005: 10:1 mix, 2.5-3 minute work life, handling strength in 2-3 hours, full cure in 8-24 hours at 23 °C; bondline 0.005-0.008 in (0.13-0.2 mm); clamp at 4-8 psi for at least 2 hours (3M DP8005 data sheet).
  - Permabond TA4610: 1:1 mix, gap fill up to 1 mm, pot life 5-8 minutes, fixture in 12-15 minutes, full cure in 24-36 hours at 23 °C (Permabond TA4610 data sheet).
  - No-mix acrylics (resin on one face, activator on the other) cure only through about 0.76 mm from the activator face, so they need thin joints; static-mix acrylics cure through any depth but get hot (Loctite design guide, p. 12; the guide prints this as '0.30" (0.76 mm)', and the inch figure looks like a typo for 0.030") ⚑ [uncertain].
  - A glue is called structural if it gives more than 1,000 psi (about 7 MPa) in an overlap shear test; LSE acrylics reach this on untreated PE and PP (3M white paper). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - The two-tube 'plastics bonding system' kit (superglue plus a felt-tip primer pen) sold for fixing polypropylene and polyethylene toys, figurines and household items (Loctite Plastics Bonding System data sheet)
  - Car bumper fascia, trim and plastic fuel or liquid containers bonded with LSE structural acrylics in factories (3M white paper)
  - Things made of the plastics these glues are for: milk and household-chemical bottles, squeeze bottles, screw caps and toys (Loctite design guide, p. 50; Wikipedia 'Polyolefin')
- **when_to_use**: Use an LSE structural acrylic when you need a strong, tough joint on polyethylene or polypropylene, or between PE/PP and metal, wood or another plastic, and screws, clips or welding won't do; for example gluing HDPE sheet, repairing a PP box or bonding a PP print to an aluminium bracket (3M DP8005 data sheet; Permabond TA4610 data sheet). Use the primer-plus-superglue kit for small, close-fitting indoor repairs to PP, PE, PTFE or rubber parts where a quick, no-mixing fix is enough (Loctite Plastics Bonding System data sheet). General structural acrylics (MMA) are also good whenever you need a fast, tough, peel-resistant bond on ABS, PVC, polycarbonate, fibreglass or metal (Permabond MMA article; Devcon data sheet).
- **when_not_to_use**: Don't use ordinary superglue, epoxy, polyurethane glue, general-purpose MMA or silicone on PE or PP and expect it to hold: they give almost no strength there (Loctite design guide, pp. 51, 63). Avoid the primer-plus-superglue kit outdoors, for gap filling, for flexible joints, for parts that hold hot liquids or go in an oven or microwave, and wherever the joint will be peeled (Loctite Plastics Bonding System data sheet; Loctite SF 770 data sheet). Avoid LSE acrylics on PTFE, silicone, nylon or oily and anti-static plastics without testing (3M DP8005 data sheet), and where the joint gets hot, since DP8005 keeps only about a quarter of its strength at 82 °C (3M DP8005 data sheet). Often a better answer for PE and PP is plastic welding (hot air, a speed-tip welder or a soldering iron), which 'readily' gives high-strength joints (Wikipedia 'Polyethylene'; Wikipedia 'Plastic welding'; see the Melted plastic weld entry), or mechanical fixing: screws, clips, snap fits or rivets (3M white paper). Solvent welding does not work, because polyolefins resist solvents (Wikipedia 'Polyolefin').
- **environment_limits**: Heat: 3M DP8005's overlap shear on HDPE falls from about 1,100 psi at 23 °C to about 700 psi at 49 °C, 500 psi at 66 °C and 300 psi at 82 °C (Tg onset about 33 °C); it keeps about 750-875 psi at -29 °C (3M DP8005 data sheet). Permabond TA4610 can be used down to -55 °C (Permabond TA4610 data sheet). Primed superglue is rated to 82 °C (180 °F) in the consumer kit (Loctite Plastics Bonding System data sheet). Water: the acrylics resist water and humidity well; DP8005 kept 950-1,000 psi on HDPE after 14 days in 71 °C water, and TA4610 is sold as bonding underwater (3M DP8005 data sheet; Permabond TA4610 data sheet). The consumer primer kit is 'not suitable for exterior applications' (Loctite Plastics Bonding System data sheet), although industrial primed superglue kept full strength after 1,000 hours in water or 95% humidity at 40 °C (Loctite SF 770 data sheet). Chemicals: gasoline, toluene and acetone badly weaken DP8005 (down to about 25-450 psi); diesel, antifreeze, salt water, isopropyl alcohol and dilute acid or alkali had little effect (3M DP8005 data sheet). Sunlight: cured DP8005 yellows with time (3M DP8005 data sheet). Storage: keep DP8005 cartridges at 4 °C or below for best shelf life, and primer at 8-21 °C (3M DP8005 data sheet; Loctite SF 770 data sheet).
- **safety_notes**: Methacrylate glues smell strongly and are flammable (Permabond MMA article); methyl methacrylate irritates the eyes, skin and lungs and is a recognised skin sensitiser (contact allergen) (Wikipedia 'Methyl methacrylate'), so wear gloves and work with good ventilation. Primers and activators use highly flammable solvents (heptane or isopropyl acetate): keep them away from flames and sparks (Loctite SF 770 data sheet; Loctite Plastics Bonding System data sheet). Don't flame-treat in the same place you have just used primer or solvent. Superglue bonds skin in seconds and can cause burns on skin contact (Loctite Plastics Bonding System data sheet). Flame treatment uses an open propane flame: only touch the plastic with the tip of the outer flame for 2-3 seconds in total, and don't let it melt (TAP Poly-Weld data sheet). Large amounts of mixed static-mix acrylic get hot as they cure (Loctite design guide, p. 12).
- **common_failures**: The glue peels cleanly off the PE or PP with no plastic torn off: the wrong glue was used, or the surface was dirty. Use an LSE product, clean with isopropyl alcohol, and remove mould release (Loctite design guide; 3M DP8005 data sheet). Weak or patchy bonds on plastics containing oils or anti-static additives (3M DP8005 data sheet). Bonds that never reach strength because the parts were joined after the few-minute work life, the cartridge was mixed by hand in the wrong ratio, or the glue layer was thinner than 0.13 mm (3M DP8005 data sheet). Primed superglue failing because too much primer was used, too long passed after priming, or the parts had gaps (Loctite SF 770 data sheet; Loctite Plastics Bonding System data sheet). Primed superglue joints breaking when peeled or flexed, or failing outdoors (Loctite SF 770 data sheet; Loctite Plastics Bonding System data sheet). Flame treatment that didn't work (water still beads up) or that melted and warped the part (TAP Poly-Weld data sheet). Glue squeezed out of the joint that stays tacky, because air slows the cure of acrylics (Permabond TA4610 data sheet). Joints that soften and creep when warm (3M DP8005 data sheet).
- **related**: 
  - Cyanoacrylate (superglue): the same glue used in the primer route; without primer it gives only about 0.3-1 MPa on PE and PP (Loctite design guide)
  - General-purpose structural acrylic (MMA) 'plastic welder' glues: tough and fast on ABS, PVC, polycarbonate, fibreglass and metal, but not on PE or PP (Devcon data sheet; Loctite design guide)
  - Two-part epoxy: excellent on metal, wood and many plastics, but weak on untreated PE and PP (Loctite design guide)
  - Melted plastic weld: hot-air, speed-tip or soldering-iron welding that melts PE or PP parts together with filler rod; often the strongest and cheapest fix for polyolefins (Wikipedia 'Plastic welding'; Wikipedia 'Polyethylene')
  - Friction-welded plastic: melts a spinning rod of plastic into the seam with a rotary tool; another glue-free way to fuse plastic prints
  - Solvent welding: fuses ABS, PVC and acrylic, but can't be used on PE or PP because they resist solvents (Wikipedia 'Polyolefin')
  - Double-sided foam tape made for LSE plastics (e.g. 3M 300LSE or VHB LSE, brands): sticks to PP and TPO without primer; PE may still need flame, corona or plasma treatment (3M white paper)
  - Polyolefin hot melts: hot-glue sticks formulated specially to stick to polyolefins (Loctite design guide)
  - Screws, rivets, clips and snap fits: the traditional way to join PE and PP parts (3M white paper)

### Pictures, videos and models

- **links**: 
  - [Innovations in Bonding to Low Surface Energy Surfaces (3M white paper, 2021)](https://multimedia.3m.com/mws/media/755526O/innovations-in-bonding-to-low-surface-energy-white-paper.pdf): A table of surface energies of plastics and metals, a sketch of a liquid beading up on a low-energy surface and spreading on a high-energy one, a chart of how surface treatments raise polyethylene's surface energy, a photo of a duo-pak cartridge with mixing nozzle, and strength charts on PP and PE *(licence: link only)*
  - [Sessile drop - effect of the drop and support nature.png (Wikimedia Commons, by DaraDaraDara)](https://commons.wikimedia.org/wiki/File:Sessile_drop_-_effect_of_the_drop_and_support_nature.png): Diagram of liquid drops that spread out (wetting) or bead up (not wetting) depending on the surface, the reason ordinary glue fails on PE and PP *(licence: CC BY-SA 4.0)*
  - [Waterdruppels op plastiek tuintafel.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Waterdruppels_op_plastiek_tuintafel.JPG): Photo of water beading up on a plastic garden table, the same test used to check whether a flame-treated surface is ready to glue *(licence: Public domain)*
  - [Two-component adhesive cartridges.jpg (Wikimedia Commons, by Grzegorz W. Tężycki)](https://commons.wikimedia.org/wiki/File:Two-component_adhesive_cartridges.jpg): Photo of two-part adhesive cartridges of the kind structural acrylics come in *(licence: CC BY-SA 4.0)*
  - [Permabond TA46XX range directions for use (YouTube, Permabond Engineering Adhesives)](https://www.youtube.com/watch?v=YVeKBCVVhYo): Video of how to use Permabond's polyolefin-bonding structural acrylics, linked from the TA4610 data sheet (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable torque, shear and tension specimens; print them in PP or PE-type filament to compare an LSE glue, primed superglue and ordinary glue on your own material. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Glue Test Pieces (iqless, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/32037-glue-test-pieces): A simple OpenSCAD shape: glue two together, push a dowel through and pull by hand to compare glues. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
- **diagram_idea**: Two side-by-side close-ups: a drop of ordinary glue beading up on a waxy PE surface like rain on a waxed car (no grip), and a drop of LSE glue, or glue on a primed or flame-treated surface, spreading flat and gripping, with a small inset of the water test (water beads up = not ready, water sheets out = ready to glue).
- **sources**: 
  - https://multimedia.3m.com/mws/media/755526O/innovations-in-bonding-to-low-surface-energy-white-paper.pdf
  - https://multimedia.3m.com/mws/media/1235571O/dp8005-scotch-weld-technical-data-sheet.pdf
  - https://permabond.com/wp-content/uploads/2016/04/TA4610_TDS.pdf
  - https://permabond.com/mma-methylmethacrylate-adhesives/
  - https://datasheets.tdx.henkel.com/LOCTITE-SF-770-en_GL.pdf
  - https://images.thdstatic.com/catalog/pdfImages/15/154c2da4-eb5f-4f70-8219-9a8be12441d1.pdf
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://www.chemical-concepts.com/wp-content/uploads/2022/06/DEVCON-PLASTIC-WELDER-TDS.pdf
  - https://www.tapplastics.com/image/pdf/Prod_Data-_Poly-Weld.pdf
  - https://hackaday.com/2025/01/30/comparing-adhesives-for-gluing-petg-prints/
  - https://help.prusa3d.com/article/polypropylene-pp_167126
  - https://en.wikipedia.org/wiki/Polyolefin
  - https://en.wikipedia.org/wiki/Polyethylene
  - https://en.wikipedia.org/wiki/Polypropylene
  - https://en.wikipedia.org/wiki/Methyl_methacrylate
  - https://en.wikipedia.org/wiki/Corona_treatment
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://commons.wikimedia.org/wiki/File:Sessile_drop_-_effect_of_the_drop_and_support_nature.png
  - https://commons.wikimedia.org/wiki/File:Waterdruppels_op_plastiek_tuintafel.JPG
  - https://commons.wikimedia.org/wiki/File:Two-component_adhesive_cartridges.jpg
  - https://www.youtube.com/watch?v=YVeKBCVVhYo
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest
- **bonds_well**: PETG, ABS or ASA, slippery plastics (PE or PP), acrylic or polycarbonate, PVC, wood, metal, glass or ceramic, rubber, foam, stone or concrete
- **bonds_poorly**: nylon, silicone
- **tools**: welding or brazing torch, press or vice
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, carbon fibre or composites, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing, processes, rules_of_thumb

## 227 Silicone and MS-polymer adhesive sealants

*adhesives & bonding.* Rubbery glues that cure from moisture in the air into a flexible, waterproof bond that also seals gaps

*Also covers:* Also covers mirror adhesive and aquarium silicone.

### What it is

- **plain_name**: A thick paste squeezed from a caulk-gun tube that skins over in minutes and, overnight, turns into soft, stretchy rubber by soaking up moisture from the air; it seals gaps against water and holds parts together flexibly, like the 'silicone' round a bath, or the newer paintable 'hybrid' or 'MS polymer' glue-and-seal tubes
- **term**: Moisture-curing elastomeric adhesive sealants: RTV silicone and silyl-modified polymer (MS polymer, hybrid polymer)
- **aliases**: 
  - silicone sealant, silicone caulk, 'silicone'; technically a silicone joint filler is called a sealant rather than a caulk (Wikipedia 'Caulk')
  - RTV silicone (room-temperature vulcanising); acetoxy or acid-cure silicone (smells of vinegar) versus neutral-cure silicone (alkoxy or oxime) (Wikipedia 'Silicone rubber'; Loctite design guide)
  - RTV gasket maker, flange sealant, e.g. Loctite 5900 (brand) 'heavy body RTV silicone' (Loctite design guide); aquarium silicone (Wikipedia 'Silicone')
  - MS polymer, SMP (silyl- or silane-modified polymer), STP or STPE (silane-terminated polyether), 'modified silicone', hybrid polymer, SMX polymer (Wikipedia 'Silyl modified polymers'; Kaneka; Soudal)
  - adhesive sealant, polymer adhesive, 'mounting' or grab adhesive, e.g. Soudal Fix ALL, Pattex One for All (brands) (Soudal data sheet; Prusa)
  - DOWSIL 732 (brand), a classic general-purpose acetoxy silicone adhesive sealant (Dow data sheet)
  - silicone mouldable glue, e.g. Sugru (brand), a silicone rubber that is moulded by hand and hardens at room temperature (Wikipedia 'Silicone')
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: Silicone and MS-polymer adhesive sealants are one-part pastes that cure from moisture in the air into flexible rubber, filling and sealing gaps against water while holding parts together with a bond that stretches and absorbs movement.
- **complexity**: Single piece: one paste in a cartridge or tube, no mixing (two-part and UV-curing versions exist for industry). You also need a caulking gun for cartridges, a nozzle cut to size, and a smoothing (tooling) tool (Dow data sheet; GE Sealants; Loctite design guide).
- **how_it_works**: The paste is made of long, flexible polymer chains whose ends carry reactive silicon groups. Moisture from the air reacts with those end groups, which then link to one another (hydrolysis then condensation) and cross-link the chains into a rubber, giving off a small by-product: acetic acid (vinegar smell) from acetoxy silicones, alcohols from alkoxy silicones, an oxime from oxime silicones, and methanol from MS polymers (Loctite design guide, p. 11; Wikipedia 'Silicone'; Wikipedia 'Silyl modified polymers'). Silicones have a silicon-oxygen (siloxane) backbone, which gives them heat and UV resistance, while MS polymers have a polyether backbone with silyl ends, which makes them paintable, stronger and isocyanate-free (Loctite design guide; Wikipedia 'Silyl modified polymers'). Because moisture has to soak in from the surface, a skin forms in minutes and the cure then works inward at about 3 mm per day, so thick or enclosed beads cure very slowly (Dow data sheet; Soudal data sheet). The cured rubber stretches (hundreds of percent), so the joint can take movement and vibration without cracking, but it is much weaker than a rigid glue (Dow data sheet; Wikipedia 'Sealant').

### Finder attributes

- **job**: 
  - glue or bond: flexible, gap-filling bonds between glass, metal, ceramic, wood, stone and many plastics (Dow data sheet; Soudal data sheet)
  - seal it, or pass cables or fluid through: fills and seals gaps and seams against water, draughts and dust, e.g. around baths, windows and enclosure lids, or round a cable where it passes through a wall (Wikipedia 'Sealant'; Wikipedia 'Silicone')
- **motion**: flex: the cured rubber bead lets the joined parts shift slightly relative to each other; the Soudal hybrid sealant allows ±20% distortion of the joint (Soudal data sheet). It is not a hinge, just a forgiving joint
- **degrees_of_freedom**: 0 in intended use (the parts stay put), but the rubbery layer gives a little in every direction, which is what lets it absorb vibration, knocks and heat expansion
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks are sealing and bonding in one step, curing from air moisture without mixing, and staying rubbery so the joint moves with the parts instead of cracking (Wikipedia 'Sealant'; Wikipedia 'Silyl modified polymers')
- **holding_principle**: material bond (glue, solvent or melting): the cured rubber sticks to both surfaces
- **input_output**: not applicable
- **power**: passive (no power needed): it cures at room temperature from moisture in the air (Loctite design guide; Dow data sheet).
- **removability**: semi-permanent (can be undone but may damage parts): the rubber can be sliced through with a knife or wire and scraped or peeled off; silicone remover and isopropyl alcohol clean off the residue (Dow Corning technical manual; GE Sealants; Sashco).
- **reuse_cycles**: once: the cured bead can't be reused, but the parts can usually be cut apart, cleaned and sealed again. Dow says fresh silicone sticks to freshly cut cured silicone without primer (Dow Corning technical manual), while Sashco says nothing, 'not even silicone', sticks to old silicone (Sashco); the safest course is to remove old silicone completely ⚑ [uncertain]: the two sources disagree. *(⚑ parts need confirming)*
- **tools_needed**: A caulking gun (for cartridges), a utility knife to cut the nozzle at about 45° to suit the joint width, masking tape, isopropyl alcohol and a lint-free cloth for cleaning, a smoothing (tooling) spatula, and for removal a scraper or remover tool and silicone remover (GE Sealants; Dow data sheet; Soudal data sheet). Gloves and ventilation, especially for vinegar-smelling acetoxy silicones.
- **seal**: watertight: the rubber bead fills the gap and sticks to both sides, keeping out water, draughts and dust (Wikipedia 'Sealant'; Wikipedia 'Caulk': silicone sealant is water-, mould- and mildew-resistant). Silicone rubber is very permeable to gases (about 400 times more than butyl rubber for oxygen), so it can't make gas-tight seals for high-pressure gas or vacuum (Wikipedia 'Silicone'). For a printed enclosure that must stay dry under water pressure, an O-ring in a groove is more reliable (Prusa watertight printing, part 2).
- **load**: light to medium: silicones have 'low cohesive strength', which limits them as structural adhesives (Loctite design guide, p. 11). A typical silicone reaches about 2.3 MPa tensile strength at 540% elongation (Dow data sheet); on plastics, a heavy-bodied RTV silicone gave about 1.0-1.7 MPa shear on ABS, polycarbonate, nylon, PET and PVC, 0.1 MPa on acrylic and under 0.3 MPa on PE and PP (Loctite design guide, pp. 17-69). MS/hybrid polymers are stronger and harder: about 3.2 MPa maximum tension and 65 Shore A (Soudal data sheet). Spread over a large area, these soft glues are still strong enough to hold aquarium glass under water pressure and to fix glass on building facades (Wikipedia 'Silicone'). They are good in peel, vibration and impact because they stretch, and weak where stiffness is needed.
- **adjustable**: briefly: parts can be moved and the bead smoothed until a skin forms, about 5-10 minutes (GE Sealants; Soudal data sheet: skin in about 5 minutes; Dow data sheet: skins over in 7 minutes, tack-free in 20). After curing, the rubber lets parts shift slightly but can't be adjusted; cut it out and redo it.
- **play_and_precision**: not applicable for locating: the soft layer doesn't hold parts in an exact position, so hold or fixture them while it cures (high-tack MS polymers reduce the need for support, Soudal data sheet). It tolerates uneven gaps well: Soudal gives 2-10 mm bond widths and 5-30 mm sealing joints (Soudal data sheet), and Dow recommends at least 6 mm (1/4 in) width and depth for weather seals (Dow Corning technical manual).
- **access_needed**: one side only (blind) for sealing: a bead is run along the visible side of a seam or gap. For bonding, the paste goes on one face before assembly (Dow data sheet).
- **materials**: Silicone bonds well without primer to glass, metals, ceramics and most engineering plastics (Dow data sheet); in Loctite's tests an RTV silicone did best on ABS, polycarbonate, nylon and PET (about 1.0-1.7 MPa) (Loctite design guide). It sticks poorly to PTFE, polyethylene, polypropylene and related plastics (Dow data sheet; Loctite design guide), and has no long-term adhesion to acrylic (PMMA), which is why acrylic aquariums aren't made with it (Wikipedia 'Silicone'). Acetoxy silicone can corrode some metals, especially when enclosed, and oxime silicone can stain copper and brass (Dow data sheet; Loctite design guide). MS/hybrid polymers bond most building materials, wood, MDF, metals, PVC and plastics, even on slightly damp surfaces, but not PE, PP, PTFE, bitumen, copper or brass, and they can lose adhesion next to plasticiser-releasing rubbers such as EPDM, neoprene and butyl (Soudal data sheet). 3D-printing plastics such as PLA and PETG were not in these tests ⚑ [uncertain]; test first. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: one tube, no mixing and a forgiving gap fill. The only skills are cutting the nozzle, laying a steady bead and smoothing it before it skins, and giving thick beads days to cure (GE Sealants; Dow data sheet).

### Making it

- **processes**: 
  - off-the-shelf part: cartridges and tubes of silicone, MS/hybrid polymer and gasket-maker sealants
  - 3D print (FDM): sealing seams and cable holes in printed enclosures, bonding prints flexibly to glass, metal or wood, and casting custom gaskets in printed moulds (Prusa watertight printing, part 2); large prints glued with a polymer construction adhesive (Prusa gluing guide)
  - woodwork and building: sealing and bonding panels, trim, glazing, baths and kitchens (Soudal data sheet; Wikipedia 'Sealant')
  - electronics and model making: potting, sealing and flexible mounting; use neutral-cure (alkoxy) silicone near electronics because acetic acid can corrode (Loctite design guide)
  - CNC and metalwork: RTV silicone as a formed-in-place gasket on flanges (Loctite design guide)
- **print_in_place**: no: it is applied to parts after printing, although you can print a two-part mould and cast a silicone gasket in it (Prusa watertight printing, part 2).
- **making_tips_3d_printing**: 1) Use it as a seal, not a structural glue: for load-bearing printed joints use CA, epoxy or screws, and let silicone or MS polymer do the waterproofing or vibration damping (Loctite design guide: silicones have low cohesive strength). 2) Design a groove or recess for the bead so that it is at least a few millimetres wide and deep, and keep it open to the air: one-part sealants need air moisture and cure only about 3 mm per day from the exposed surface, and at most about 9.5-12.7 mm deep in a reasonable time (Dow data sheet; Soudal data sheet; Loctite design guide, p. 11). A bead sealed inside a closed box may never fully cure. 3) Clean prints with isopropyl alcohol and let them dry; lightly roughen smooth faces (Dow data sheet; GE Sealants). 4) Mask the edges with tape, apply a steady bead, smooth it within 5-10 minutes before it skins, and pull the tape while the bead is still wet (GE Sealants; Dow Corning technical manual). 5) For electronics, choose a neutral-cure (alkoxy or 'electronics grade') silicone rather than vinegar-smelling acetoxy, whose acetic acid can corrode copper contacts, especially in a closed box (Dow data sheet; Loctite design guide). 6) Printed flexible (TPU) gaskets didn't seal in Prusa's tests; instead print a two-piece mould, fill it with silicone caulk and demould after curing, or better, design for a standard O-ring and grease it with silicone grease (Prusa watertight printing, part 2). 7) Silicone doesn't stick to PP or PE prints (Dow data sheet), which also means PP or PE-lined moulds release silicone easily ⚑ [uncertain]. 8) If you want to paint the part afterwards, use MS/hybrid polymer, which takes water-based paint, not silicone, which paint won't stick to (Soudal data sheet; Sashco). 9) Keep silicone off surfaces you still need to glue or paint, because its residue stops later adhesion (Sashco). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'RTV silicone sealant' or 'silicone adhesive sealant' (acetoxy / general purpose, e.g. DOWSIL 732, brand), 'neutral cure silicone' or 'electronics-grade RTV' for metal and electronics, 'aquarium-safe silicone', 'high-temperature RTV gasket maker' or 'flange sealant' (e.g. Loctite 5900, brand), 'MS polymer' or 'hybrid polymer adhesive sealant' (e.g. Soudal Fix ALL, CT1, Pattex One for All, brands), 'high-tack' grab adhesive, 'silicone primer' (e.g. DOWSIL 1200 OS, brand), 'backer rod' and 'bond-breaker tape' for wide joints, a 'caulking gun', 'caulk smoothing tool' and 'silicone remover' (Dow data sheet; Loctite design guide; Soudal data sheet; Dow Corning technical manual; GE Sealants).
- **rules_of_thumb**: 
  - Cure speed: skin in about 5-10 minutes; about 3 mm cured depth per 24 hours at 23 °C and 50% humidity; slower when cold or dry (Dow 732 data sheet; Soudal Fix ALL High Tack data sheet). Moisture-cure silicones are tack-free in 5-60 minutes, thick sections take up to 72 hours, and full adhesion can keep building for 1-2 weeks (Loctite 'Design Guide for Bonding Plastics', vol. 6, p. 11).
  - Maximum practical cure depth is about 0.375-0.5 in (9.5-12.7 mm) for moisture-cure silicones (Loctite design guide, p. 11).
  - Joint shape for sealing: make the bead about twice as wide as it is deep (2:1), shaped like an hourglass; at least 1/4 in (6 mm) wide and deep for weather seals; over 1 in (25 mm) wide, keep the depth at about 3/8-1/2 in (9-12 mm) (Dow Corning Americas Technical Manual, pp. 49-50; Soudal data sheet: 'joint width = 2 x joint depth').
  - Avoid three-sided adhesion (sticking to the bottom of the joint as well as both sides): put in a backer rod or bond-breaker tape, otherwise the joint can take only about ±15% movement before tearing (Dow Corning Americas Technical Manual, p. 50).
  - Hybrid bonding bead: 2-10 mm wide for bonding; sealing joints 5-30 mm wide and at least 5 mm deep (Soudal Fix ALL High Tack data sheet).
  - Temperature range: general-purpose silicone about -60 to +180 °C, with short peaks to 205 °C (Dow 732 data sheet); MS/hybrid about -40 to +90 °C (Soudal data sheet).
  - A properly designed and installed silicone building joint typically lasts about 20 years (Dow Corning Americas Technical Manual, p. 68).
  - Mirrors: use a mirror adhesive, because the adhesive must hold the mirror without damaging the protective coating over the silver (Bostik); Soudal's is a neutral-cure (alkoxy), solvent-free type that 'does not react with the silver backing', and Bostik's hybrid (MS) mirror adhesive is 'compatible with most common silver backing coatings'. Check the back coating for scratches first ('Do not bond a damaged mirror'), apply vertical beads, and add double-sided mirror tape 'for an initial tack and to create the necessary ventilation behind the mirror' (Soudal Trade Mirror Adhesive). Bead spacing differs between makers: 10-20 cm apart (Soudal) or ideally 20-40 cm apart (Bostik); follow the label of the product you use.
  - Glass aquariums (Den Braven Aqua-Silicone, an acetoxy silicone): leave a 1-2 mm joint of sealant between the panes and between sides and bottom, finish inside corners with a triangular fillet of 3-5 mm depending on the water level, let it cure fully (up to 1 week) before moving or filling, and rinse several times; it is 'Not suitable for aquaria larger than 1000 litres and/or higher than 60cm', or for PE, PP, PC or PMMA (acrylic); glass thickness is chosen to DIN 32622 (Aqua-Silicone data sheet).

### When to use it

- **everyday_examples**: 
  - The bead of sealant around a bath, shower tray or kitchen sink; household bathroom caulk is usually acetoxy-cure silicone (Wikipedia 'Silicone rubber')
  - Glass aquariums, whose panes are joined only with silicone sealant (Wikipedia 'Silicone')
  - Window glazing and glass building facades held by structural silicone (Wikipedia 'Silicone'; Wikipedia 'Sealant')
  - RTV 'gasket maker' squeezed onto car engine flanges instead of a cut gasket (Loctite design guide: oxime silicones in automotive gasketing)
- **when_to_use**: Use it when a joint has to be waterproof and flexible at the same time: sealing seams, lids and cable holes in enclosures, bonding glass, mirrors, tiles or panels where parts expand and contract differently, and damping vibration or rattles (Wikipedia 'Sealant'; Loctite design guide; Soudal data sheet). Choose silicone for heat (up to about 180 °C), strong sunlight, wet areas and glass (Dow data sheet; Wikipedia 'Silicone'). Choose MS/hybrid polymer when you need a stronger, faster-grabbing bond, want to paint over it, are gluing to damp or porous building materials, or want to avoid isocyanates and vinegar smell (Soudal data sheet; Wikipedia 'Silyl modified polymers').
- **when_not_to_use**: Don't use it where the joint must be stiff or carry high loads: use epoxy, CA or screws (Loctite design guide: low cohesive strength). Don't use it on PE, PP or PTFE (Dow data sheet; Soudal data sheet), or silicone on acrylic (Wikipedia 'Silicone'). Don't use plain silicone where it will be painted (use MS polymer or acrylic caulk) (Soudal data sheet; Sashco). Avoid acetoxy silicone on copper, brass, bare steel or electronics, especially in closed boxes; use neutral cure (Dow data sheet; Loctite design guide). Avoid very thick or fully enclosed beads that air can't reach (Dow Corning technical manual; Loctite design guide), gas-tight or vacuum seals (Wikipedia 'Silicone'), and, for the MS sealant tested, continuous underwater use, aquariums and glazing (Soudal data sheet). For reusable, pressure-proof seals on printed parts, use an O-ring (Prusa watertight printing, part 2). For mirrors, use a mirror adhesive (neutral-cure or hybrid, solvent-free) rather than general-purpose or aquarium silicone, which is acetoxy (Soudal; Bostik; Aqua-Silicone data sheet) ⚑ [uncertain: no opened source tests acetoxy silicone on a mirror backing; the advice follows from the makers' warnings about the silver coating]. Aquarium silicone does not suit acrylic (PMMA) or polycarbonate tanks either (Aqua-Silicone data sheet). *(⚑ parts need confirming)*
- **environment_limits**: Heat and cold: general-purpose silicone stays flexible from -60 °C to +180 °C, with short peaks to 205 °C, or to 230 °C for the black grade (Dow data sheet); MS/hybrid about -40 °C to +90 °C (Soudal data sheet). Sunlight: silicone has 'extreme UV resistance' and is used on roofs for decades (Wikipedia 'Silicone'); MS polymers have good UV resistance but can discolour after long exposure (Soudal data sheet; Wikipedia 'Silyl modified polymers'). Water: silicone is water-, mould- and mildew-resistant (Wikipedia 'Caulk'); the MS sealant tested resists salt water but is not for continuous immersion (Soudal data sheet). Chemicals: silicones are swelled by non-polar solvents (Loctite design guide); MS polymer resists water, aliphatic solvents, alcohols and dilute acids but not aromatic solvents, concentrated acids or chlorinated solvents (Soudal data sheet). Curing needs humidity; cold and dry air slow it (Dow data sheet). Silicone rubber lets gases through, so it is not gas-tight (Wikipedia 'Silicone'). Soap residue and dirt on bathroom joints encourage mould (Soudal data sheet). Lifetime: about 20 years for a good silicone building joint (Dow Corning technical manual).
- **safety_notes**: Acetoxy silicones give off acetic acid (vinegar) while curing, which irritates eyes and lungs, so ventilate; it can also corrode metals and electronics (Wikipedia 'Silicone'; Dow data sheet). Oxime-cure silicones give off methyl ethyl ketoxime (MEKO) (Loctite design guide), which the EU has classified as a presumed carcinogen ⚑ [uncertain]: reported in search results, not verified on an opened page. MS polymers give off small amounts of methanol as they cure (Wikipedia 'Silyl modified polymers' reaction), but contain no isocyanates, unlike polyurethane sealants (Wikipedia 'Silyl modified polymers'; Soudal data sheet). Keep uncured sealant off skin and out of eyes, and read the label and safety data sheet (Soudal data sheet: 'Dangerous. Respect the precautions for use'). Not all silicones are safe for fish or food: use aquarium-safe or food-contact grades where needed (Wikipedia 'Silicone'; Dow data sheet: FDA 177.2600 compliance). *(⚑ parts need confirming)*
- **common_failures**: The bead peels off because the surface was dirty, greasy or damp, or was PE, PP, PTFE or old silicone residue; clean with isopropyl alcohol, remove old silicone completely, and use a primer where the maker recommends one (Dow data sheet; Sashco; Soudal data sheet). The middle of a thick or enclosed bead stays soft because air moisture can't reach it; keep beads shallow and open to air (Loctite design guide; Dow Corning technical manual). The bead tears when the joint moves, because it stuck to the bottom of the joint as well as the sides (three-sided adhesion), or the joint was too narrow or too deep (Dow Corning technical manual). Lumpy or wrinkled finish from tooling after the skin had formed; smooth within 5-10 minutes and pull masking tape while wet (GE Sealants; Dow Corning technical manual). Green corrosion or failed electronics under acetoxy silicone in a closed box (Dow data sheet). Paint beading up or peeling on silicone (Sashco). Black mould on bathroom joints from soap and dirt (Soudal data sheet). Discolouration and loss of grip next to EPDM, neoprene or butyl rubber (Soudal data sheet). Using it as a structural glue and finding the joint too weak or springy (Loctite design guide).
- **related**: 
  - Polyurethane sealant and polyurethane construction adhesive: also moisture-curing, strong and paintable, but they contain isocyanates and have poorer UV resistance than MS polymers (Wikipedia 'Silyl modified polymers'; Wikipedia 'List of polyurethane applications')
  - Polyurethane glue (foaming): rigid-ish, strong wood glue that foams; not a sealant
  - O-ring seal: a rubber ring in a groove; the most reliable reusable seal for printed enclosures (Prusa watertight printing, part 2)
  - Gasket (flat, cord or cast-in-place): a separate soft layer squeezed between parts; silicone can be cast into a printed mould to make one (Prusa watertight printing, part 2)
  - Two-part epoxy: rigid, much stronger, gap-filling, but cracks if the parts move differently
  - Contact adhesive and elastomeric solvent glues: flexible glues for sheets, rubber and fabric that don't need air moisture, but give off solvent
  - Double-sided foam tape: an instant, flexible, clean bond for mounting, but not a gap-filling seal
  - Silicone mouldable glue (e.g. Sugru, brand): silicone rubber you shape by hand like clay, which hardens at room temperature and sticks to glass and aluminium (Wikipedia 'Silicone')
  - Melted plastic weld: for a watertight printed tank or box, makers suggest welding the printed seams first (e.g. with a soldering iron) and then sealing the whole thing, warning that 'silicone on its own might not be enough' (r/3Dprinting thread read through the Arctic Shift archive)
  - Glass and mirror edge clips and clamps: hold a mirror or glass sheet by its edges with clips or padded clamps instead of gluing it on
  - Copper-foil joint (Tiffany method): joins pieces of stained glass with soldered copper foil instead of glue; silicone is used for clear glass-to-glass seams such as aquariums
  - Glazing in a rebated frame (glazier's points, putty, glazing bead): holds a pane in a frame rebate; silicone is the modern bedding in place of putty

### Pictures, videos and models

- **links**: 
  - [Caulking.jpg (Wikimedia Commons, by Achim Hering)](https://commons.wikimedia.org/wiki/File:Caulking.jpg): Photo of silicone sealant being squeezed from a caulking gun into a joint *(licence: CC BY 3.0)*
  - [Adhesive sealant in aluminium cartridge packaging.jpg (Wikimedia Commons, by Cjp24)](https://commons.wikimedia.org/wiki/File:Adhesive_sealant_in_aluminium_cartridge_packaging.jpg): Photo of an MS-polymer adhesive sealant in a 310 ml aluminium cartridge with a screw-on nozzle *(licence: CC BY-SA 3.0)*
  - [CrosslinkedSilicone.svg (Wikimedia Commons, by Smokefoot)](https://commons.wikimedia.org/wiki/File:CrosslinkedSilicone.svg): Chemical diagram highlighting a cross-link between silicone chains, the link formed when the sealant cures *(licence: CC BY-SA 4.0)*
  - [Watertight 3D printing part 2: Airtight closable models (Prusa Research blog)](https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/): Photos of printed underwater housings, printed moulds for casting silicone-caulk gaskets, and O-ring seals, with results of bucket and 30 m depth tests *(licence: link only)*
  - [How To Get The Perfect Finish To A Silicone Sealant Bead (YouTube, 3C Sealants)](https://www.youtube.com/watch?v=ajXmnBRQ5yI): Video of laying and finishing a silicone sealant bead (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Silicone Ring Gasket Molding (eried, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/33362-silicone-ring-gasket-molding): A printable mould for casting a ring gasket from silicone, made for a bathroom repair; the method Prusa recommends over printing gaskets in TPU. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Caulking tools (Miguel Silveira, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/531799-caulking-tools): A set of printable smoothing tools modelled on commercial caulking tools, printed flat in PLA without supports. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Silicone / Acrylic / Caulk Smoothing Tools (Vladimir Mincev, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1093421-silicone-acrylic-caulk-smoothing-tools): Two printable finishing tools with labelled chamfered (5, 9, 11 mm) and filleted (4, 8, 10 mm) edges for shaping sealant beads of different sizes. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Caulking Gun Nozzle Unblocker (apembo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/497778-caulking-gun-nozzle-unblocker): A corkscrew-like printed tool that winds into a used nozzle and pulls out the plug of cured sealant so a half-used tube can be reused (the plug Dow's data sheet says forms in the tip). Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Silicone Caulking Nozzle with Integrated Smoother (Micha Hainz, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1358983-silicone-caulking-nozzle-with-integrated-smoother): A push-on printed nozzle that lays and smooths the bead in one pass on standard cartridges. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: A cut-away of a sealant joint between two parts: a curved hourglass-shaped bead twice as wide as it is deep sitting on a round foam backer rod, arrows showing moisture entering from the air and the cured skin growing inward about 3 mm a day, with a second small sketch showing the joint stretching as the parts move apart.
- **sources**: 
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  - https://ecommapi.krayden.com/Content/pdf/datasheet/dow_732_tds.pdf
  - https://www.soudal.co.uk/sites/default/files/soudal_api/document/34053/F0034053_0001.pdf
  - https://www.fleetwoodusa.net/Documents_Guide/Products/_General/Sealant-Technical-Manual.pdf
  - https://gesealants.com/projects-howtos/how-to-quickly-apply-silicone-sealant-without-sacrificing-quality/
  - https://www.sashco.com/will-my-new-caulk-stick-to-silicone/
  - https://www.kaneka.co.jp/en/business/material/pms_002.html
  - https://en.wikipedia.org/wiki/Silyl_modified_polymers
  - https://en.wikipedia.org/wiki/Silicone
  - https://en.wikipedia.org/wiki/Silicone_rubber
  - https://en.wikipedia.org/wiki/Sealant
  - https://en.wikipedia.org/wiki/Caulk
  - https://en.wikipedia.org/wiki/List_of_polyurethane_applications
  - https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://commons.wikimedia.org/wiki/File:Caulking.jpg
  - https://commons.wikimedia.org/wiki/File:Adhesive_sealant_in_aluminium_cartridge_packaging.jpg
  - https://commons.wikimedia.org/wiki/File:CrosslinkedSilicone.svg
  - https://www.youtube.com/watch?v=ajXmnBRQ5yI
  - https://api.printables.com/graphql/
  - https://arctic-shift.photon-reddit.com/api/posts/ids?ids=1g4byc1
  - https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1g4byc1&limit=200
  - https://www.soudal.co.uk/diy/products/trade-range/adhesive/trade-mirror-adhesive
  - https://www.bostik.com/global/en/knowledge-list/knowledge/mirror-bonding-adhesive
  - https://www.bostik.com/assets/bostik/TDS_Aqua%20Silicone_en_ZA.pdf

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible, fills gaps
- **bonds_well**: PETG, ABS or ASA, nylon, silicone, acrylic or polycarbonate, metal, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…t). 3D-printing plastics such as PLA and PETG were not in these tests [uncertain]; test first.…"*
- **bonds_poorly**: PLA, slippery plastics (PE or PP), PVC, wood, rubber ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…t). 3D-printing plastics such as PLA and PETG were not in these tests [uncertain]; test first.…"*
- **tools**: hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: seal a still joint
- **seal_material**: metal, plastic, fabric or a gap
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, foam, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing, materials, reuse_cycles, safety_notes, when_not_to_use

## 228 Elastomeric solvent glue (flexible craft glue)

*adhesives & bonding.* Thick, clear, rubbery solvent-based glues that stay flexible, for bonding dissimilar materials, fabric, shoes and jewellery

*Also covers:* Also covers why E6000 is a poor choice on polymer clay.

### What it is

- **plain_name**: A thick, clear, gooey glue from a tube that smells strongly of solvent and dries into a tough rubbery layer, so the joint can still bend and stretch; used to stick fabric, shoes, rhinestones, rubber, glass, metal and wood to each other
- **term**: Elastomeric solvent-based adhesive (rubber-based solvent glue; flexible multi-purpose craft adhesive)
- **aliases**: 
  - flexible craft glue, industrial-strength craft adhesive, multi-purpose adhesive, jewellery glue, shoe glue / shoe repair adhesive (manufacturer data sheets)
  - rubber-based adhesive, solvent-based adhesive, drying adhesive (Wikipedia 'Adhesive': solvent-based adhesives harden as the solvent evaporates)
  - styrene-butadiene (SBR) adhesive, from the synthetic rubber it is made of (Goop and Shoe Goo safety data sheets; Wikipedia 'Shoe Goo')
  - E6000, E6000 Craft, E6000 Jewelry & Bead, E6000 Premium, E6000 Fabri-Fuse (brands, Eclectic Products)
  - Amazing Goop, Household Goop, Shoe Goo (brands, Eclectic Products)
  - B-7000, T-7000, E-7000 (generic clear 'phone and rhinestone' glues sold online; described as solvent-based and semi-flexible, but their exact recipe varies and is not published) ⚑ [uncertain]
  - Loctite Vinyl, Fabric & Plastic (now 'Vinyl, Fabric & Leather') Flexible Adhesive (brand): a thinner, polyurethane-in-solvent cousin (Henkel data sheet) *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: An elastomeric solvent glue is a synthetic rubber dissolved in a strong solvent; when the solvent evaporates the rubber is left behind as a clear, tough, stretchy layer that grips most materials and keeps the joint flexible and waterproof.
- **complexity**: Single piece: one thick liquid or gel in a tube, no mixing. Parts: the glue, the tube with a piercing cap or precision nozzle; optional helpers are sandpaper, a cleaning solvent (acetone or citrus cleaner for wet glue), clamps, tape or clothes pegs, and a syringe or fine nozzle for small jobs (E6000 Craft data sheet; Printables syringe adaptor).
- **how_it_works**: The tube holds a rubbery plastic (a styrene-butadiene copolymer in Goop and Shoe Goo) dissolved in solvents such as toluene and petroleum naphtha; about 45-49% of the weight is solids (the rubber and resins) and the rest evaporates (Goop and Shoe Goo safety data sheets; E6000 Craft, Goop and Shoe Goo data sheets). When you spread it on the parts, the solvent wets the surfaces and starts to evaporate; after about 2 minutes it becomes tacky, it is 'set' in 20-45 minutes and fully cured in 24 hours for a thin film or 48-72 hours for a thick one (E6000 Craft, Goop and Shoe Goo data sheets). Nothing chemically reacts: it simply dries (a drying adhesive, Wikipedia 'Adhesive'), and what is left is a soft rubber (80 Shore A hardness) that can stretch by 800-1,100% before breaking, so the bond bends with the parts instead of cracking (E6000 Craft and Industrial data sheets). You can use it 'wet' (press the parts together straight away and hold or clamp them) or like a contact adhesive (coat both faces, wait about 2 minutes, then press: it grabs immediately and is hard to reposition) (E6000 Craft data sheet).

### Finder attributes

- **job**: 
  - glue or bond: permanent, flexible bonds between the same or different materials, e.g. rhinestones to fabric, rubber to metal, glass to wood (E6000 Craft and Industrial data sheets)
  - join and hold: holds small hardware, trims, beads and findings in place; one manufacturer also lists 'locking down fasteners against vibration' (E6000 Industrial data sheet)
  - seal it, or pass cables or fluid through: seals and waterproofs boots, waders and fabrics and fills small cracks; it is sold as an 'adhesive & sealant' (Shoe Goo and Amazing Goop data sheets)
- **motion**: flex: the cured glue is rubbery, so the joint bends and stretches with flexible materials such as fabric, leather, vinyl and rubber, and absorbs vibration (E6000 Industrial data sheet). It does not let parts move in a controlled way.
- **degrees_of_freedom**: 0: the parts are bonded together; the rubbery glue line only gives a little elastic movement
- **special_behaviour**: 
  - none: it has none of the listed behaviours. Its own tricks are staying flexible even in cold weather (does not become brittle), filling small gaps with a thick bead that can be built up (e.g. rebuilding a worn shoe sole), and doubling as a waterproof sealant or coating (E6000, Goop and Shoe Goo data sheets)
- **holding_principle**: 
  - material bond (glue, solvent or melting): the dried rubber sticks to both surfaces; on some plastics the solvent also softens the surface slightly so the glue 'bites' in (E6000 Premium data sheet says it bonds most 3D-printing plastics, ABS, polycarbonate, PVC and acrylic) ⚑ [uncertain: the bite mechanism is inferred, not stated by the manufacturer] *(⚑ parts need confirming)*
- **input_output**: not applicable
- **power**: passive (no power needed): it dries by solvent evaporation at room temperature; the ideal working temperature is 10-32 °C (E6000 Craft data sheet).
- **removability**: semi-permanent (can be undone but may damage parts): wet glue wipes off with acetone or citrus cleaner, but cured glue has to be cut or scraped away (E6000 Craft data sheet); it is dissolved by strong solvents such as toluene, petrol (gasoline), cyclohexane and perchloroethylene (E6000 Craft data sheet), which may also attack the parts.
- **reuse_cycles**: once: the glue is single-use; to redo a joint, cut or scrape the old rubber off and re-glue
- **tools_needed**: The glue (pierce the foil seal with the cap), sandpaper to lightly roughen smooth surfaces, a clean cloth, and something to hold the parts while it sets (tape, clothes pegs, clamps, rubber bands). For fine work a toothpick, syringe with a blunt needle or a precision nozzle helps (E6000 Craft data sheet; Printables syringe adaptor). Acetone or citrus cleaner for wet squeeze-out. Work with good ventilation.
- **seal**: watertight: after full cure it is waterproof and can be submerged in fresh and salt water, and it is used to seal boots, waders and waterproof fabrics and to fill small cracks (E6000 Industrial, Amazing Goop and Shoe Goo data sheets). It is not a pressure seal.
- **load**: light to medium ⚑ [uncertain]: manufacturers publish the strength of the cured rubber film itself (tensile strength about 2,000-3,800 psi, roughly 14-26 MPa, with 800-1,100% stretch; E6000, Goop and Shoe Goo data sheets), not the strength of a glued joint. A related flexible solvent glue (Loctite Vinyl, Fabric & Leather, polyurethane-based) gives about 12-17 lb per inch of width in a T-peel test on vinyl, polycarbonate and SBR rubber (Henkel data sheet). In one maker's hanging-bucket test on 6 x 6 mm glued PLA pads, that Loctite glue failed at about 5.9-9.6 kg (roughly 1.6-2.6 MPa), roughly half to three-quarters of the load reached by a rigid 'hard plastic' glue (12.9-14.8 kg), but it stretched and yielded before failing rather than snapping (Printables 1352973). Good in peel and impact on flexible parts because it stretches; weaker and creepier than rigid glues under a steady structural load ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: Only while wet: parts can be slid into position for a few minutes (the Loctite flexible adhesive 'can be repositioned while the adhesive is still wet'), but once two tacky coated faces are pressed together the bond is immediate and 'difficult to reposition' (E6000 Craft data sheet; Henkel data sheet). After curing, no.
- **play_and_precision**: not applicable (it does not locate parts). The thick glue fills small gaps and uneven surfaces, but the rubbery layer lets parts shift slightly under load, so it is not for precise alignment; use a jig, tape or locating pins.
- **access_needed**: not applicable: glue goes on the joint faces before assembly, or is run along a seam or crack from one side
- **materials**: Goop and Shoe Goo are a styrene-butadiene synthetic rubber in toluene and petroleum naphtha (safety data sheets); current US E6000 Craft also uses toluene and petroleum distillates, but the sheets opened here don't name its rubber ⚑ [uncertain]. Older and Canadian formulas used perchloroethylene, and E6000 Premium uses n-propyl acetate (2013 E6000 SDS; 2016 and 2025 E6000 Craft data sheets; thisTOthat; E6000 Premium data sheet). Note the conflict: thisTOthat calls Household Goop 'silicone-based', but the manufacturer's safety data sheet lists styrene-butadiene rubber and no silicone. Bonds well: wood, metal, glass, fibreglass, ceramics, masonry and concrete, leather, rubber, vinyl, PVC, neoprene, fabric and many plastics (E6000 Craft and Industrial data sheets); gems, beads, polymer clay and jewellery metals (E6000 Premium Jewelry & Bead). E6000 Premium claims to bond most 3D-printing plastics, ABS, polycarbonate, acrylic and polystyrene. Makers report good results on PLA (Blue Paper Tech) and on flexible TPU prints (Snapmaker), but no manufacturer test on PLA, PETG or TPU was found ⚑ [uncertain]. Poor or not recommended: polyethylene (PE), polypropylene (PP), polystyrene and Styrofoam (for standard E6000), paper, and finished surfaces that the solvent may damage (E6000 Craft and Industrial data sheets). Not for anything in contact with food, drinking water or animals (E6000 Craft data sheet). A polymer clay specialist disagrees: E6000 'often does not properly set on polymer clay or becomes brittle with age', and the bond 'will degrade with heat', so it cannot be baked (The Blue Bottle Tree). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: squeeze, press and wait. The main difficulties are the long cure (a full day or more), keeping squeeze-out off visible surfaces, and working with strong solvent fumes

### Making it

- **processes**: 
  - off-the-shelf part: tubes (from 5 mL minis to cartridges), precision-tip and 'jewellery' versions, and clear, black or white colours (E6000 data sheets)
  - 3D print (FDM): gluing prints to fabric, leather or other materials, and bonding flexible TPU parts, where a rigid glue would crack (Snapmaker; Prusa notes that contact cements for shoe repairs 'might be good especially for flexible filament materials')
  - sewing, cosplay and textiles: fabric, trims, rhinestones and patches; it is washer and dryer safe but should not be dry-cleaned (E6000 Craft and Goop data sheets)
  - jewellery and beading: stones, crystals and beads on findings; securing knots (E6000 Premium Jewelry & Bead data sheet)
  - shoe and outdoor-gear repair: re-attaching soles, rebuilding worn heels, sealing boots and waders (Shoe Goo data sheet)
  - woodwork and household repair: small repairs where materials differ or the joint must flex (Amazing Goop data sheet)
- **print_in_place**: no: it is a glue for joining separately made parts, although you can print shallow recesses or textured pads to take a bead of glue
- **making_tips_3d_printing**: 1) Use it for the jobs where flexibility matters: printed parts onto fabric, straps, leather or rubber, and TPU to TPU or TPU to rigid parts. For rigid PLA-to-PLA assemblies it is 'safe, but it cures flexibly', so CA or epoxy give stiffer joints (Snapmaker). 2) Lightly roughen the faces and make sure they are clean and dry (E6000 Craft data sheet); a slightly rough print surface is fine, since one maker chose it because it 'glues slightly rough surfaces', 'sets up in about an hour' and doesn't discolour PLA like superglue can (Blue Paper Tech, 2017). 3) Give the solvent a way out: it cures by evaporation, and 'the thicker the layer of adhesive, the longer it will take to dry' (thisTOthat), so use thin beads and allow 24 hours (thin) to 48-72 hours (thick) before loading (E6000 Craft data sheet). Large, tight, non-porous overlaps may stay soft inside for longer ⚑ [uncertain]. 4) For a quick grab, coat both faces, wait about 2 minutes until tacky, then press; for adjustable positioning, join while wet and tape or clamp (E6000 Craft data sheet). 5) The solvents attack some plastics: E6000 is not recommended on polystyrene (so test on HIPS), and makers report that E6000 softens or glues printed PLA and PETG nozzles and made an ABS tube cap brittle and cracked; print tools that touch the glue in TPU or treat them as disposable (E6000 Craft data sheet; Printables 1101848 and 1133417) ⚑ [uncertain]. 6) Print a small applicator: a Luer-lock syringe adaptor or fine nozzle lets you place tiny amounts on rhinestones or thin prints (Printables 3660 and 1101848). 7) Check outdoors use: standard E6000 and Goop have no UV resistance, so paint over the joint or choose a UV-resistant grade (E6000 Industrial and Goop data sheets). 8) Test the bond on scrap prints first: glue two printed test pieces and pull or hang weights from them (Printables 1352973). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'flexible multi-purpose adhesive', 'industrial strength craft adhesive', 'rubber-based adhesive', 'SBR adhesive', 'shoe repair adhesive', 'jewelry and bead adhesive', 'fabric adhesive (solvent-based)' and 'adhesive sealant'. Common brands: E6000 Craft / Industrial / Premium / Jewelry & Bead / Fabri-Fuse, Amazing Goop, Shoe Goo (Eclectic Products); Loctite Vinyl, Fabric & Leather Flexible Adhesive (Henkel). Accessories: precision tips, blunt syringe needles, replacement caps (e.g. Printables 1133417). Note that some look-alike products use a different chemistry: E6000 Plus is solvent-free and cures differently (E6000 Plus data sheet).
- **rules_of_thumb**: 
  - Tack time about 2 minutes, set time 20-45 minutes, full cure 24 hours for a thin film and 48-72 hours for a thick one; maximum strength may take up to 72 hours (E6000 Craft, Amazing Goop and Shoe Goo data sheets).
  - Apply between 10 and 32 °C (50-90 °F); cured E6000 and Goop take -40 to 82 °C intermittently, Shoe Goo -40 to 66 °C (E6000 Craft, Amazing Goop and Shoe Goo data sheets).
  - The cured rubber is about 80 Shore A with 800-1,100% elongation and 2,000-3,800 psi tensile strength (ASTM D-412 film tests; E6000 Craft, Amazing Goop and Shoe Goo data sheets). These are film properties, not joint strength.
  - About 45-49% of the tube's weight (42-46% of its volume) is solids; the rest (toluene and petroleum distillates, about 450-490 g/L VOC) evaporates into the room (E6000 Craft, Goop and Shoe Goo data sheets).
  - Roughen smooth surfaces and keep them clean and dry; do not use on PE, PP, polystyrene, Styrofoam or paper (E6000 Craft and Industrial data sheets).
  - Not UV resistant: paint over it for outdoor use in sunlight (Amazing Goop and Shoe Goo data sheets: 'UV resistance: None; paint-over for UV resistance').
  - Unopened shelf life 2 years; if it thickens in the cold, warm it to room temperature; a thin coat of petroleum jelly on the tube threads stops the cap sticking (E6000 Craft data sheet).

### When to use it

- **everyday_examples**: 
  - Re-attaching a flapping sole or rebuilding a worn heel with Shoe Goo (Shoe Goo data sheet; Wikipedia 'Shoe Goo')
  - Rhinestones and gems glued onto clothing, bags and jewellery findings (E6000 Premium Jewelry & Bead data sheet)
  - Patching snowboard boots, waders and rubber boots (Wikimedia Commons photo; Shoe Goo data sheet)
  - Household fixes such as a loose towel rail or a broken teacup (Amazing Goop data sheet)
- **when_to_use**: Use it when the joint must bend, stretch or take knocks and vibration, or when you are joining two different materials: fabric, leather, rubber, vinyl and TPU prints to themselves or to wood, metal, glass or rigid plastic (E6000 Craft and Industrial data sheets). It is good for jewellery and craft work (clear, gap-filling, washer and dryer safe), for shoe and outdoor-gear repairs where it also waterproofs and seals, and for small parts that a brittle glue would pop off when flexed (Shoe Goo and Amazing Goop data sheets; Snapmaker).
- **when_not_to_use**: Avoid it for rigid, load-bearing plastic or metal joints: use two-part epoxy, CA or a structural adhesive (Snapmaker). Avoid it on PE, PP, polystyrene foam and paper (E6000 Craft data sheet): use a low-surface-energy adhesive or mechanical fixing. Don't use it where you need handling strength quickly: CA sets in seconds. Don't use it for food, drinking-water or pet items (E6000 Craft data sheet), for parts exposed to fuel or strong solvents that dissolve it (petrol, toluene), in constant sunlight without paint or a UV grade (E6000 Industrial and Goop data sheets), or near heat above about 66-82 °C (data sheets). If the fumes are a problem, choose a solvent-free or water-based flexible adhesive such as an MS-polymer or silicone adhesive sealant (e.g. E6000 Plus is solvent-free; E6000 Plus data sheet). For large flat areas (laminates, foam sheets) a brush-on contact cement is usually easier (thisTOthat; Wikipedia 'Adhesive'). On polymer clay, don't rely on it for earring posts or anything that will be baked again: The Blue Bottle Tree says 'Do not use E6000' for earring posts and that 'you cannot bake E6000'; bake metal findings into the clay, or join clay to clay with liquid clay and bake (see Liquid-clay bond).
- **environment_limits**: Heat: E6000 and Amazing Goop withstand -40 to 82 °C (-40 to 180 °F) intermittently, Shoe Goo -40 to 66 °C (E6000 Craft, Goop and Shoe Goo data sheets); the Loctite flexible polyurethane type is 'not for applications over 140 °F (60 °C)' (Henkel data sheet). Cold: stays flexible and 'does not become brittle in cold weather' (E6000 Craft data sheet). Water: waterproof after full cure, can be submerged in fresh and salt water, and survives washing machines and tumble dryers but not dry cleaning (E6000 Industrial and Amazing Goop data sheets). Sunlight: no UV resistance; paint over it or use a UV grade (Goop and Shoe Goo data sheets; E6000 Industrial). Chemicals: excellent resistance to water, dilute acids and bases, antifreeze and motor oil; thin films immersed for two weeks gained under 2% weight and lost under 10% strength, but it is dissolved by petrol, toluene, cyclohexane, perchloroethylene and propyl acetate (Shoe Goo and E6000 Craft data sheets). Creep: as a soft rubber it can slowly give under a constant load ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: The solvents are the main hazard. US Goop and Shoe Goo contain 25-50% toluene plus petroleum naphtha: highly flammable liquid and vapour (flash point about 0-4 °C for Goop), harmful if swallowed, eye and skin irritant, may cause drowsiness or dizziness, suspected of damaging the unborn child, and may damage organs with prolonged or repeated exposure (Goop and Shoe Goo safety data sheets; E6000 Craft data sheet California Prop 65 warning). Older and Canadian formulas used perchloroethylene (tetrachloroethylene), a suspected carcinogen (2013 E6000 SDS; thisTOthat), so read the label of the tube you have. Work with good ventilation, away from flames and sparks, keep it away from children, and never deliberately inhale it (Henkel label: misuse by inhaling 'may be harmful or fatal'). Wear gloves (nitrile recommended for the Loctite version; Henkel data sheet). It can damage painted or finished surfaces and some plastics before it dries (E6000 Craft data sheet). Don't use it on items for food, drinking water or animals (E6000 Craft data sheet).
- **common_failures**: Loading the joint too early: it only sets in 20-45 minutes and needs 24-72 hours to reach full strength, longer for thick beads (data sheets; thisTOthat). Parts that simply peel off PE, PP or polystyrene, or off greasy, dusty or glossy surfaces; roughen and clean first (E6000 Craft data sheet). Moving the parts after two tacky faces have touched: the bond grabs at once and repositioning weakens it (E6000 Craft data sheet). Joints that sag or creep because the glue is soft rubber, when a rigid glue was needed (Snapmaker) ⚑ [uncertain]. Sunlight breaking down unpainted glue outdoors (Goop and Shoe Goo data sheets). Solvent damage: crazed or melted polystyrene, foam or painted finishes, and printed applicators that go soft or brittle (E6000 Craft data sheet; Printables 1101848 and 1133417). Glue smeared on visible faces; wipe wet glue with acetone or citrus cleaner, cut away cured glue (E6000 Craft data sheet). A cap glued shut; smear petroleum jelly on the tube threads (E6000 Craft data sheet). *(⚑ parts need confirming)*
- **related**: 
  - Contact adhesive (contact cement): also a rubber in solvent (often polychloroprene), but brushed thin on both faces and left to dry before pressing, for large flat areas such as laminates and shoe soles; no repositioning (Wikipedia 'Adhesive'; thisTOthat)
  - Rubber cement: a weaker natural-rubber solvent glue for paper and crafts that rubs off cleanly (Wikipedia 'Rubber cement')
  - Silicone and MS-polymer adhesive sealants: also flexible and waterproof, but cure with air moisture rather than by evaporation, with less or no solvent (e.g. solvent-free E6000 Plus)
  - Cyanoacrylate (superglue), including rubber-toughened CA: sets in seconds and is much stiffer; better for rigid small parts, worse for fabric and flexing joints
  - Two-part epoxy: rigid, gap-filling and strong for structural joints; cracks if the joint flexes
  - Hot-melt adhesive (glue gun): instant, also slightly flexible, but weak and softens with heat
  - Solvent welding (solvent cement): fuses plastics such as ABS, PVC or acrylic into one piece; rigid
  - Polyurethane flexible solvent adhesives, e.g. vinyl and inflatable repair glues: thinner liquids for vinyl, PVC and fabric patches (Henkel data sheet)
  - Sewing, rivets and snap fasteners: mechanical alternatives for fabric and leather that don't need solvent
  - Liquid-clay bond (bakeable clay glue): the usual way to join polymer clay to itself, by brushing on liquid clay and baking; E6000 often fails to set on polymer clay and can't be baked

### Pictures, videos and models

- **links**: 
  - [Repairing snowboard boots with Shoe Goo.jpg (Wikimedia Commons, by Syced)](https://commons.wikimedia.org/wiki/File:Repairing_snowboard_boots_with_Shoe_Goo.jpg): Photo of a boot repair with a clear, rubbery bead of Shoe Goo *(licence: CC0 (public domain dedication))*
  - [Which Glue is Best?? ShooGoo Amazing Goop E6000 and Gorilla Glue (YouTube, Exocaged RC)](https://www.youtube.com/watch?v=hsmqOMNsekg): Hobbyist comparison of Shoe Goo, Amazing Goop, E6000 and Gorilla Glue (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Testing glue SHOE GOO, GOOP, Gorilla clear glue (YouTube, The Tank RC)](https://www.youtube.com/watch?v=R_r53OCHYKU): Hobbyist test of flexible rubber glues on RC parts (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Technical Data Sheet: E6000 Craft Adhesive, Rev 4 (Eclectic Products)](https://eclecticproducts.com/wp-content/uploads/2025/04/E6-Craft-TDS-US-CAN-MEX-ME-AU-NZ_REV-4.pdf): No pictures, but the full property table: tack, set and cure times, hardness, stretch, temperature range, chemical resistance list and step-by-step directions *(licence: link only)*
- **make_it_yourself**: 
  - [e6000 to Luer Lock Syringe Adaptor (Joe Balough, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/3660-e6000-to-luer-lock-syringe-adaptor): Printed adaptor for filling a glue syringe from an E6000 tube so you can dispense tiny, precise amounts through a blunt needle. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Premium Pro Glue Nozzle: E6000 (Adam L, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1101848-premium-pro-glue-nozzle-e6000): Fine screw-on nozzle for E6000 tubes (about 14 mm thread, 20 TPI), with a warning that the glue's solvent can attack PLA and PETG, so treat it as disposable. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [E6000 tube cap (qwindelzorf, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1133417-e6000-tube-cap): Replacement cap for the 3.7 oz tube; the designer recommends printing it in TPU because an ABS version became brittle and cracked, perhaps from the solvent. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Glue tensile strength test object (Patrol_maverick, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1352973-glue-tensile-strength-test-object): Two printed pieces with a 6 x 6 mm glue face, glued and loaded with a bucket of water to compare glues; includes the designer's results for a flexible Loctite glue versus a rigid plastic glue on PLA. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: Two panels: first, a tube squeezing a bead of glue between a piece of fabric and a printed part, with small arrows showing solvent vapour leaving the bead; second, the dried rubbery layer stretching like a rubber band as the fabric bends, next to a rigid glue line that has cracked under the same bend.
- **sources**: 
  - https://eclecticproducts.com/wp-content/uploads/2025/04/E6-Craft-TDS-US-CAN-MEX-ME-AU-NZ_REV-4.pdf
  - https://eclecticproducts.com/wp-content/uploads/2024/12/E6-Industrial-Clr_Blk-US-CAN-MEX-TDS_REV-2.pdf
  - https://eclecticproducts.com/wp-content/uploads/2024/04/E6000-PREMIUM-TDS-USA-REV-3.pdf
  - http://eclecticproducts.com/downloads/tds-e6000-craft-english.pdf
  - http://eclecticproducts.com/downloads/sds-e6000-craft-english.pdf
  - https://eclecticproducts.com/wp-content/uploads/2021/06/tds-e6000Plus-us-ca-eu.pdf
  - http://eclecticproducts.com/downloads/tds-amazing-goop-all-purpose-english.pdf
  - http://eclecticproducts.com/downloads/sds-amazing-goop-english.pdf
  - https://eclecticproducts.com/downloads/sds-shoegoo-clear-english.pdf
  - https://pdf.lowes.com/productdocuments/56156c53-6c4f-47a8-b81c-8351c98c6572/16663399.pdf
  - https://datasheets.tdx.henkel.com/LOCTITE-Vinyl-Fabric--Plastic-Flexible-Adhesive-en_US.pdf
  - https://en.wikipedia.org/wiki/Shoe_Goo
  - https://en.wikipedia.org/wiki/Adhesive
  - https://en.wikipedia.org/wiki/Rubber_cement
  - https://www.thistothat.com/glue/hgoop.shtml
  - https://www.thistothat.com/glue/contact.shtml
  - https://bluepapertech.com/3d-printing/experimenting-with-pla-glue/
  - https://www.snapmaker.com/blog/best-glue-for-pla-3d-prints/
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://etech61.com/blogs/news/b7000-glue-guide-b7000-vs-t7000-vs-e7000
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Repairing_snowboard_boots_with_Shoe_Goo.jpg
  - https://www.youtube.com/watch?v=hsmqOMNsekg
  - https://www.youtube.com/watch?v=R_r53OCHYKU
  - https://thebluebottletree.com/best-glue-for-polymer-clay/
  - https://thebluebottletree.com/securing-polymer-clay-earring-post-backs-whats-the-best-way/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible
- **bonds_well**: PLA, PETG, ABS or ASA, TPU or flexible prints, silicone, acrylic or polycarbonate, PVC, wood, metal, glass or ceramic, rubber, fabric or leather, foam, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…troleum distillates, but the sheets opened here don't name its rubber [uncertain]. Older and Canadian formulas…"*
- **bonds_poorly**: slippery plastics (PE or PP), paper or card ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…troleum distillates, but the sheets opened here don't name its rubber [uncertain]. Older and Canadian formulas…"*
- **tools**: press or vice, sewing or leather tools
- **load_max**: medium ⚑ *needs confirming (source uncertain): `load` is marked [uncertain] here: "light to medium [uncertain]…"*
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, clay or putty, carbon fibre or composites, glass or mirror, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, common_failures, environment_limits, holding_principle, load, making_tips_3d_printing, materials

## 229 Anaerobic adhesive (threadlocker, retaining compound)

*adhesives & bonding.* A liquid that hardens only when shut off from air between close-fitting metal parts, used to stop screws loosening or to fix bearings on shafts

### What it is

- **plain_name**: A few drops of coloured liquid you put on a screw thread (or around a shaft) that stays runny in the bottle but turns into hard plastic once it is squeezed between tight metal parts, so the screw can't shake loose and the bearing or gear can't slip
- **term**: Anaerobic adhesive (threadlocker, thread-locking compound, retaining compound)
- **aliases**: 
  - threadlocker, thread-locking compound, thread-locking fluid, thread locker (Wikipedia 'Thread-locking compound')
  - retaining compound, shaft retaining compound (Loctite retaining compounds catalogue; Voron forum)
  - anaerobic thread sealant, pipe sealant, anaerobic gasket maker or flange sealant: the same chemistry used to seal rather than lock (Permabond; Permatex)
  - blue / red / purple / green threadlocker (colour-coded strength grades; Wikipedia; Permatex), 'removable' vs 'permanent' threadlocker
  - wicking or penetrating threadlocker (green) for screws that are already assembled (Henkel threadlocking guide)
  - pre-applied or pre-coated threadlocker, threadlocker tape, threadlocker stick (Henkel threadlocking guide; LDO Voron kit notes)
  - Loctite 222 / 243 / 242 / 263 / 271 / 290 (threadlockers) and 603 / 620 / 638 / 641 / 648 / 660 (retaining compounds) (brand and product numbers; Henkel)
  - Loctite (brand, often used as a generic name, e.g. 'blue Loctite'), Permatex (brand), Permabond (brand)
  - Schraubensicherung (German, 'screw securing'; Printables listings)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs, clamping, magnetic & friction connections
- **one_liner**: An anaerobic adhesive is a one-part liquid that hardens only when it is shut away from air and touching metal, so it cures inside screw threads and close-fitting shaft joints, locking screws against vibration, holding bearings and gears on shafts, and sealing the gaps against leaks and rust.
- **complexity**: Single piece: one liquid, gel, paste stick or tape, no mixing. Optional helpers: a primer or activator for 'inactive' surfaces such as stainless steel, zinc plating or anodised aluminium, and a cleaner or degreaser for oily parts (Henkel threadlocking guide; Loctite retaining compounds catalogue).
- **how_it_works**: The liquid is made of methacrylate building blocks plus a peroxide starter. As long as oxygen can reach it, the oxygen mops up any reaction and it stays liquid, which is why the bottles are only half full and made of air-permeable polyethylene (Loctite threadlocker manual). When it is trapped between a bolt and a nut, air can't get in and metal ions from the surface break the starter into reactive fragments that link the building blocks into a hard, cross-linked plastic (a thermoset) (Loctite threadlocker manual; Wikipedia). The hard plastic fills every gap between the threads, so the nut can no longer rock sideways and shake loose, and it also seals out water and rust (Henkel threadlocking guide). Any glue left outside the joint, in the air, stays liquid and can be wiped away. Retaining compounds are the same chemistry used between a shaft and a bearing, gear or bush: they fill the tiny gap and turn a slip fit or light press fit into a strong, solid joint (Loctite retaining compounds catalogue).

### Finder attributes

- **job**: 
  - glue or bond: bonds close-fitting metal parts, e.g. a bearing into a housing or a pulley onto a shaft (retaining compounds)
  - join and hold: stops screws, nuts, set screws and studs from loosening under vibration and thermal cycling (threadlockers; Henkel threadlocking guide)
  - seal it, or pass cables or fluid through: seals threads against leaks and corrosion, and related grades seal pipe threads and flanges (Henkel threadlocking guide; Permatex)
- **motion**: none: a fixed joint. Low- and medium-strength threadlockers still let you undo the screw later with ordinary tools (Loctite products page).
- **degrees_of_freedom**: 0: once cured, the screw or shaft is locked to its partner
- **special_behaviour**: 
  - none of the listed behaviours in the strict sense. Its own tricks are curing only where it is needed (inside the joint, not in the bottle or on the outside), being graded by strength so you can choose how hard the joint is to undo, and a 'wicking' grade that creeps into screws that are already tightened (Henkel threadlocking guide; Loctite threadlocker manual). Its effect is close to self-locking: it stops a screw undoing itself under vibration, while still allowing a person to undo low- and medium-strength grades with a spanner (Loctite products page)
- **holding_principle**: 
  - material bond (glue, solvent or melting): the hardened plastic bonds to both metal surfaces (Henkel threadlocking guide)
  - shape (the parts interlock; form-fit): the solid plastic fills the gaps between the threads or around the shaft, so the parts can't shift or rock (Henkel threadlocking guide; Loctite threadlocker manual)
  - friction or clamping (force-fit): the screw is still held by its clamping force, and the threadlocker adds friction and break-loose torque; retaining compounds add to the grip of press fits (Loctite threadlocker manual; Loctite retaining compounds catalogue)
- **input_output**: not applicable
- **power**: passive (no power needed): it cures by itself at room temperature once air is shut out; heat or an activator only speeds it up (Loctite threadlocker manual; Permatex).
- **removability**: Depends on the grade. Low strength (purple) and medium strength (blue): removable with normal hand tools. High strength (red): semi-permanent (can be undone but may damage parts); it needs local heating to about 230-260 °C and undoing while hot, and forcing it may twist the bolt off (Wikipedia; Loctite products page; Permatex; Henkel threadlocking guide). Retaining compounds: high-strength grades are for joints that won't be taken apart; lower-strength grades are chosen when parts must come apart for maintenance (Loctite retaining compounds catalogue).
- **reuse_cycles**: once: each application is single-use; clean off the old plastic and apply fresh liquid when you reassemble. The screws and parts themselves can be reused
- **tools_needed**: The liquid (a few drops from the bottle; don't touch the tip to the metal, or glue in the bottle may start curing; Loctite threadlocker manual; Wikipedia), a degreaser or cleaner for oily parts, and a primer/activator for inactive metals or cold conditions (Henkel threadlocking guide; Loctite retaining compounds catalogue). Normal spanners, hex keys and screwdrivers to assemble. For removing high-strength grades: a heat source such as a blowtorch, heat-resistant gloves and safety glasses (Loctite products page). Nitrile or similar protective gloves (Loctite 243 SDS).
- **seal**: airtight or pressure: the cured plastic fills the thread gaps and seals them against leakage and corrosion; threadlockers keep oil and coolant in through-bolts on gearboxes and engines, and dedicated anaerobic thread sealants are used on pipe fittings (Henkel threadlocking guide; Permatex). Ordinary threadlocker is not a gasket for large gaps.
- **load**: light to heavy, chosen by grade. On a 3/8-16 (about M10) bolt, typical torque to break loose is about 7 N·m for purple, 12-20 N·m for blue and 25 N·m for red, and the strongest permanent grades reach about 21 MPa (3,000 psi) in shear (Wikipedia, from a Permatex guide). Makers' figures vary: Henkel lists Loctite 243 at 230/40 in-lb (about 26/4.5 N·m) break/prevail on M10 steel in one chart and 106/26 in-lb in another (Henkel properties chart; Henkel threadlocking guide). Retaining compounds reach about 6.5-31 N/mm² (MPa) shear strength, e.g. Loctite 603: 22.5, 638: 29, 648: 31, 641 (medium, for parts that must come apart): 6.5 (Loctite retaining compounds catalogue). Strong against twisting and shaking loose; it adds to, but does not replace, a correctly tightened screw.
- **adjustable**: Only before it cures: there are minutes before it sets (typical fixture time 10-20 minutes on steel at room temperature, about 5 minutes with an activator; full cure in 24 hours) (Henkel threadlocking guide; Permatex). Low- and medium-strength grades can be broken loose later to re-adjust, then re-applied. A wicking grade can lock a screw after it has been adjusted (Henkel threadlocking guide).
- **play_and_precision**: No play once cured: it fills the clearance in the threads so the parts can't rock sideways (Henkel threadlocking guide). It needs close fits: retaining compounds are chosen by gap, low-viscosity grades up to 0.15 mm, thicker grades 0.15-0.25 mm, and special pastes 0.25-0.5 mm for badly worn parts (Loctite retaining compounds catalogue); larger gaps cure slower and need an activator (Loctite threadlocker manual; Permabond). It does not fix the position more accurately than the parts' own fit.
- **access_needed**: one side only (blind): drops go on the male thread or into a blind hole before assembly; a wicking grade can be dripped onto the joint from outside after assembly (Henkel threadlocking guide)
- **materials**: Made of methacrylate resins; cured it is a hard thermoset plastic (Wikipedia; Loctite threadlocker manual). Works on metal-to-metal joints. Fast-curing 'active' metals: iron, plain steel, copper, brass, bronze. Slow or 'inactive' metals that need a primer (unless you choose a primerless or surface-insensitive grade such as Loctite 243 or 638): stainless steel, zinc plating, galvanised steel, anodised or pure aluminium, titanium, cadmium, magnesium, black oxide, silver and gold (Henkel threadlocking guide; Loctite threadlocker manual; Loctite retaining compounds catalogue). Plastics: not recommended for plastic or powder-coated fasteners because they don't start the cure, and it can attack some plastics and cause stress cracking; Henkel rates ABS, acrylic (PMMA), ASA, polycarbonate, polystyrene, PVC, SAN and PPO as 'often not suitable', and nylon, acetal (POM), PET, PE, PP, PU, epoxy and phenolic as 'often suitable, test to verify' (Loctite threadlocker manual). PLA and PETG are not listed ⚑ [uncertain]. For plastic-to-plastic threads Henkel suggests a cyanoacrylate-based threadlocker such as Loctite 425 (Henkel threadlocking guide; Loctite threadlocker manual). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: a drop on a clean thread and tighten as normal. The skill is choosing the right strength (purple for small screws, blue for normal service, red only for joints you never want to undo) and keeping it off printed plastic

### Making it

- **processes**: 
  - off-the-shelf part: small bottles of liquid (purple, blue, red, green), semi-solid sticks, threadlocker tape, pre-coated screws, retaining compounds and primers/activators (Henkel threadlocking guide; LDO Voron kit notes)
  - 3D print (FDM): used on the metal hardware of printers and printed machines, e.g. grub screws holding pulleys on motor D-shafts (Loctite 222 in the Voron documentation, per the Voron forum; LDO kits include threadlocker or pre-coated set screws); a retaining compound such as Loctite 641 has been used to fix pulleys on motor shafts (Voron forum)
  - CNC and metalwork: locking set screws and studs, fixing bearings, bushes, gears and pulleys on shafts, and repairing worn bearing seats without re-machining (Loctite retaining compounds catalogue)
  - robotics, RC, bicycles and vehicles: screws exposed to vibration (Loctite products page; Permatex)
- **print_in_place**: no: it is applied to metal fasteners and shafts during assembly; it is not a printed feature
- **making_tips_3d_printing**: 1) Use it on metal-to-metal joints only: screw into a metal nut, brass threaded insert or metal part, set screws on metal shafts, bearings on metal shafts (Henkel threadlocking guide; Loctite threadlocker manual). 2) Keep it off printed plastic: it does not cure on plastic and can stress-crack ABS, ASA, polycarbonate, acrylic and polystyrene (and, by extension, possibly HIPS) (Loctite threadlocker manual) ⚑ [uncertain for PLA and PETG, which Henkel does not list]. If you need to lock a screw in a printed thread, use a CA-based threadlocker (e.g. Loctite 425), a nylon-insert lock nut, a drop of CA or design in a friction feature (Henkel threadlocking guide). 3) Choose the weakest grade that works: for the small M2-M5 screws common in printers, low-strength purple (e.g. 222) is 'ideal for fasteners < 1/4 in (6 mm)'; blue for 1/4-3/4 in (6-20 mm); avoid red on anything you may need to adjust (Henkel threadlocking guide; Permatex). A Prusa MK2 builder who used red on the probe nut cracked the printed mount when trying to adjust it (Prusa forum). 4) Grub screws on motor pulleys: the Voron manual and documentation suggest 'grub screws with Loctite 222' (low strength) to secure pulleys on motor D-shafts, and LDO's later kits ship set screws pre-coated with threadlocker (Voron forum; LDO Voron kit notes). 5) Stainless and zinc-plated screws (very common in maker kits) are 'inactive': choose a primerless grade such as 243 or use an activator, or cure will be slow and weak (Henkel threadlocking guide). 6) Degrease oily screws and let it cure 24 hours before heavy loading; warm parts cure faster, cold parts slower (Henkel threadlocking guide; Loctite threadlocker manual). 7) Wipe off any excess that might run onto printed parts; it stays liquid in air (Loctite threadlocker manual) ⚑ [uncertain whether this liquid excess harms PLA or PETG]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'threadlocker' by strength: 'low strength threadlocker purple' (e.g. Loctite 222), 'medium strength threadlocker blue' (Loctite 242 / 243, Permatex 242 blue), 'high strength threadlocker red' (Loctite 263 / 271), 'wicking threadlocker green' (Loctite 290), 'high temperature threadlocker' (Loctite 2422 / 2620), 'threadlocker stick' (Loctite 248 / 268), 'threadlocker tape' (Loctite QuickTape 249) and 'pre-applied threadlocker' or 'pre-coated screws'. For shafts: 'retaining compound' (Loctite 603, 620, 638, 641, 648, 660). Helpers: 'anaerobic primer' or 'activator' (Loctite SF 7649, SF 7240, 7088 primer stick; cleaner SF 7063; Permatex Surface Prep 24163). Related sealants: 'anaerobic thread sealant' and 'anaerobic gasket maker'. (Henkel threadlocking guide; Loctite retaining compounds catalogue; Permatex)
- **rules_of_thumb**: 
  - Pick strength by screw size and removability: low strength (purple) for fasteners under 1/4 in (6 mm), medium (blue) for 1/4-3/4 in (6-20 mm) and removable with hand tools, high (red) for 1/4-3/4 in and above when it may need heat above 260 °C (500 °F) to remove (Henkel threadlocking guide; Permatex; Loctite products page).
  - Typical break-loose torque on a 3/8-16 (about M10) bolt: purple about 7 N·m, blue about 12 N·m (20 N·m for surface-insensitive blue), red about 25 N·m (Wikipedia 'Thread-locking compound', from a Permatex selector guide).
  - Fixture (handling) time about 10-20 minutes on steel at room temperature, about 5 minutes with an activator; full cure 24 hours (Henkel threadlocking guide; Permatex). A general-purpose threadlocker takes about 10-15 minutes on steel and under 5 minutes on copper, and much longer on passive surfaces (Permabond).
  - Service temperature for most grades about -54 to +150 °C; high-temperature grades up to 232 °C (Permatex red high temperature) or 340 °C (Loctite 2422 / 2620) (Wikipedia; Permatex; Henkel threadlocking guide).
  - Retaining compound choice by diametral gap: up to 0.15 mm use low-viscosity grades (Loctite 603, 641, 648); 0.15-0.25 mm use 620 or 638; 0.25-0.5 mm use a paste such as 660 with an activator. Most withstand -55 to +150 °C, special grades 180-230 °C (Loctite retaining compounds catalogue).
  - Apply below +5 °C only with an activator/primer, and degrease, clean and dry the parts first (Loctite retaining compounds catalogue).
  - Most threadlockers keep for about two years at room temperature; never pour used liquid back into the bottle (Loctite threadlocker manual; Wikipedia).

### When to use it

- **everyday_examples**: 
  - The 'blue Loctite' used on bicycle, motorbike and car bolts such as water-pump and oil-pan bolts (Loctite products page; Permatex)
  - Grub screws holding the belt pulleys on a 3D printer's motor shafts (Voron forum; LDO Voron kit notes)
  - Small screws in electronics, instruments and carburettors locked with purple or green grades (Permatex; Henkel threadlocking guide)
  - Bearings, gears and pulleys fixed on shafts in machines, and worn bearing seats repaired with a thick retaining compound (Loctite retaining compounds catalogue)
- **when_to_use**: Use a threadlocker on metal screws, nuts, studs and set screws that are shaken, knocked or heated and cooled, where a lock washer or lock nut would add parts or not be reliable (Henkel threadlocking guide), especially on robots, RC models, vehicles, bikes and printer motion systems. Use a retaining compound to fix a bearing, gear, pulley or bush onto a shaft or into a housing when a press fit alone is too weak, when you can't press-fit, or to rescue a slightly worn fit (Loctite retaining compounds catalogue). It also seals the threads against water and rust, which makes screws easier to undo years later (Loctite products page).
- **when_not_to_use**: Don't use it on plastic screws, printed threads, powder-coated fasteners or on joints where the liquid will touch ABS, polycarbonate, acrylic, polystyrene or PVC parts; use a CA-based threadlocker, nylon-insert lock nuts or mechanical locking instead (Loctite threadlocker manual; Henkel threadlocking guide). Don't use red (high strength) on small screws or anything you'll need to adjust; the screw may twist off before the joint lets go (Wikipedia). Don't rely on it for loose or badly fitting parts beyond about 0.5 mm gap; it won't cure well (Loctite retaining compounds catalogue; Permabond). Avoid it where the joint gets hotter than its rating (about 150 °C for standard grades) unless you choose a high-temperature grade (Wikipedia; Permatex). For parts you undo often, use lock nuts, spring washers or a reusable non-anaerobic thread-locking coating instead ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Heat: most grades work from about -54 to +150 °C; above this the plastic softens and strength drops (Wikipedia; Permatex); high-temperature grades reach 232-340 °C (Permatex; Henkel threadlocking guide). Deliberate heating to about 230-260 °C releases high-strength grades (Wikipedia; Permatex). Cold: cures slowly when parts are cold; below +5 °C use an activator (Loctite retaining compounds catalogue; Loctite threadlocker manual). Chemicals: the cured thermoset 'resists most solvents' and is used in oil- and coolant-filled engines and gearboxes (Loctite threadlocker manual; Henkel threadlocking guide). Water and rust: sealing the threads prevents corrosion (Loctite products page). Vibration: this is what it is for; in Henkel's transverse vibration (Junker) test a threadlocked bolt kept its clamp load better than nylon nuts, serrated flanges and split or tooth washers (Henkel threadlocking guide). Creep: it does not stop the clamping force being lost if the bolt itself stretches or the joint settles (Henkel threadlocking guide) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Skin: typical threadlockers are skin sensitisers ('May cause an allergic skin reaction') and cause serious eye irritation, and are toxic to aquatic life; wear protective gloves and keep it out of drains (Loctite 243 SDS). Removal: freeing red grades needs a blowtorch or heat gun at 230-260 °C, so wear heat-resistant gloves and safety glasses (Loctite products page; Permatex). Forcing a high-strength joint can snap the bolt (Wikipedia). Using too strong a grade near printed parts can crack them when you try to adjust later (Prusa forum).
- **common_failures**: It never hardens: the surfaces were oily, the metal was 'inactive' (stainless, zinc-plated, anodised aluminium), it was cold, the gap was too big, or the parts were plastic; clean, use a primer or a primerless grade, warm the parts, or choose a gap-filling grade (Henkel threadlocking guide; Loctite threadlocker manual; Permabond). The screw can't be undone: red was used where blue or purple was enough; heat to about 260 °C and undo while hot (Loctite products page; Permatex). Cracked plastic parts near the joint from contact with the liquid or from high removal torque (Loctite threadlocker manual; Prusa forum). The bottle goes solid because it was contaminated by metal (touching the nozzle to the part or pouring back used liquid) (Wikipedia; Loctite threadlocker manual). Loosening anyway because the bolt was not tightened to the right clamp load or the parts settled (Henkel threadlocking guide) ⚑ [uncertain]. Weak retaining joints from too large a gap for the grade chosen (Loctite retaining compounds catalogue). *(⚑ parts need confirming)*
- **related**: 
  - Nylon-insert lock nut (prevailing-torque nut): mechanical locking that works with plastic parts too, but doesn't seal the threads and kept less clamp load than threadlocker in Henkel's vibration test (Henkel threadlocking guide)
  - Split, spring, tooth and serrated lock washers: cheap mechanical locking; performed worse than threadlocker in Henkel's vibration test (Henkel threadlocking guide)
  - Jam nut, castle nut with split pin, tab washer and safety wire: positive mechanical locks, sometimes combined with threadlocker (Wikipedia; Henkel threadlocking guide)
  - Thread-locking lacquer (German 'Schraubensicherungslack'): a paint-like lacquer dabbed onto a tightened screw joint, a different, non-anaerobic product (Wikimedia Commons photos) ⚑ [uncertain about how well it locks]
  - CA-based threadlocker (e.g. Loctite 425): cyanoacrylate formulation for plastic screws and plastic-to-metal threads (Henkel threadlocking guide)
  - Cyanoacrylate (superglue): also cures in a thin film between close parts but triggered by moisture, works on plastics, and is brittle
  - Press fit / interference fit and keyless locking bushes: purely mechanical ways to fix a hub on a shaft; retaining compounds can be added to press fits (Loctite retaining compounds catalogue)
  - Two-part epoxy: gap-filling alternative for fixing parts on shafts when fits are loose or the parts are plastic
  - Tapered pipe thread: the NPT or BSPT pipe joint where anaerobic pipe-thread sealant (or PTFE tape or pipe dope) is actually used, to seal the threads rather than lock them (Wikipedia; Permatex) *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Thread-locking fluid applied.jpg (Wikimedia Commons, by Paul Breen)](https://commons.wikimedia.org/wiki/File:Thread-locking_fluid_applied.jpg): Photo of bolts with blue threadlocker on their threads *(licence: CC BY-SA 4.0)*
  - [Thread locking fluid Loctite 243.jpg (Wikimedia Commons, by Hugo LUC)](https://commons.wikimedia.org/wiki/File:Thread_locking_fluid_Loctite_243.jpg): Photo of a small bottle of blue medium-strength threadlocker *(licence: CC BY-SA 4.0)*
  - [LOCTITE Threadlocking User's Guide (Henkel, via Ellsworth Adhesives)](https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-user-guide-threadlocking.pdf): Illustrated guide: why screws loosen, how threadlocker fills the thread gaps, vibration test graph, active vs inactive metals, and a decision tree for choosing a grade *(licence: link only)*
  - [How to Increase Reliability and Prevent Threaded Assembly Failure (LOCTITE threadlocker manual, Henkel, 2020)](https://dm.henkel-dam.com/is/content/henkel/LOCTITE-Threadlocker-Manual.pdf): Four-step diagram of the anaerobic cure (Figure 52), photos of bolt platings and finishes, cure speed by metal, and a plastics compatibility table *(licence: link only)*
  - [Nuts & Bolts - Loctite Red & Blue EXTREME Impact Vibration Test (YouTube, Hacks by Dad)](https://www.youtube.com/watch?v=lwtUWB2TIYA): Hobbyist vibration test of bolts with red and blue threadlocker (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **diagram_idea**: A cut-away of a nut on a bolt, magnified to show the small gaps between the threads: first filled with liquid while air can still reach it at the open edges, then with the gaps inside turned solid (shaded) so the nut can no longer rock sideways, with small labels 'no air + metal = hardens' inside and 'air = stays liquid' at the exposed edge.
- **sources**: 
  - https://en.wikipedia.org/wiki/Thread-locking_compound
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-user-guide-threadlocking.pdf
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-selector-guide-threadlocker-properties-chart.pdf
  - https://dm.henkel-dam.com/is/content/henkel/LOCTITE-Threadlocker-Manual.pdf
  - https://www.silmid.com/Documents/Brochures/Loctite%20Retaining%20Compounds%202022%20(1).pdf
  - https://permabond.com/curing-anaerobic-adhesive/
  - https://www.permatex.com/threadlockers/
  - https://www.loctiteproducts.com/ideas/build-things/threadlocker-red-or-blue-which-ones-right-for-you.html
  - https://www.farnell.com/datasheets/3202874.pdf
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk2-s-others-archive/thread-locker-loctite/
  - https://forum.vorondesign.com/threads/where-to-use-shaft-retaining-compound-loctite-641.2181/
  - https://docs.ldomotors.com/en/voron/voron01
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Thread-locking_fluid_applied.jpg
  - https://commons.wikimedia.org/wiki/File:Thread_locking_fluid_Loctite_243.jpg
  - https://commons.wikimedia.org/wiki/File:PXL_20211004_114900846.jpg
  - https://www.youtube.com/watch?v=lwtUWB2TIYA

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, can be undone
- **bonds_well**: metal ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…to verify' (Loctite threadlocker manual). PLA and PETG are not listed [uncertain]. For plastic-to-plastic thre…"*
- **bonds_poorly**: PLA, PETG, ABS or ASA, nylon, slippery plastics (PE or PP), acrylic or polycarbonate, PVC, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…to verify' (Loctite threadlocker manual). PLA and PETG are not listed [uncertain]. For plastic-to-plastic thre…"*
- **tools**: welding or brazing torch, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: metal

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, making_tips_3d_printing, materials, related, when_not_to_use

## 230 Stretch-release adhesive strips

*adhesives & bonding.* Sticky strips that hold firmly but come away cleanly when you pull the tab slowly along the wall, leaving no residue

### What it is

- **plain_name**: A double-sided sticky strip with a non-sticky pull tab: it holds a hook or picture firmly on the wall, and when you want it off you pull the tab slowly straight down along the wall so the strip stretches like chewing gum and lets go, leaving no marks
- **term**: Stretch-release adhesive strip (stretch-releasing pressure-sensitive adhesive tape)
- **aliases**: 
  - stretch release adhesive, stretch release tape, stretch-releasing adhesive tape (iFixit; 3M and tesa product sheets; patents)
  - redetachable adhesive strips, 'redetachable without residue or destruction by extensive stretching in the bond plane' (tesa patent US 6,905,100)
  - removable adhesive strips, damage-free hanging strips, adhesive refill strips (3M and tesa product pages)
  - pull-tab adhesive, battery pull tabs (phones and laptops; iFixit)
  - debonding on demand (tesa's industrial term) (tesa stretch release tapes page)
  - Command strips, Command hooks, Command Picture Hanging Strips (brand, 3M) (3M product information sheet; arXiv paper)
  - tesa Powerstrips, Powerstrips CLICK, tesa adhesive nails (brand, tesa); Bond & Detach (tesa industrial brand) (tesa pages)
- **family**: adhesives & bonding
- **other_families**: quick-release & tool-free
- **one_liner**: A stretch-release strip is a double-sided pressure-sensitive adhesive on a very stretchy backing that holds strongly while the load pulls along the wall, but lets go cleanly and without residue when its tab is pulled slowly and parallel to the surface.
- **complexity**: A few parts: the stretchy adhesive strip with a non-sticky pull tab, two release liners that you peel off, and usually a plastic hook, clip, back plate or picture-hanging pair that the strip sticks to (3M Command product information sheet; tesa Powerstrips pages). Command Picture Hanging Strips work in pairs that interlock with mushroom-shaped plastic fibrils, so the picture can be lifted off and put back (arXiv 2607.11650).
- **how_it_works**: The strip is a soft, sticky rubber (a pressure-sensitive adhesive, typically a styrene block-copolymer or synthetic rubber; silicone in the water-resistant 3M version) that wets both surfaces when pressed, on a highly stretchable backing such as polyethylene foam (tesa patent US 6,905,100; 3M Command product information sheets; tesa Powerstrips FAQ). A hanging weight loads the whole bonded area in shear, so a thin strip can carry a lot. When you pull the tab straight along the wall, the strip stretches enormously and gets thinner, and the stretching peels the glue away from the wall and the back plate a little at a time, like two cracks running along the strip; because the glue holds together better than it holds onto the wall, it comes away in one piece without leaving residue (arXiv 2607.11650; 3M scientist Margaret Sheridan quoted by iFixit). A fracture-mechanics analysis found that the ratio of the maximum load to the removal force grows with the ratio of bonded length to adhesive thickness, which is very large, so the strip can hold a heavy load yet still be removed with a gentle pull (arXiv 2607.11650).

### Finder attributes

- **job**: 
  - join and hold: mounts hooks, clips, pictures, posters, bathroom accessories, cable clips and phone batteries without drilling (3M Command sheet; tesa pages; iFixit)
  - glue or bond: a pressure-sensitive adhesive bond that needs no drying or curing, only pressure (3M Command sheet)
  - lock, and release by hand: holds until you deliberately pull the tab, then releases cleanly with no tools (tesa stretch release tapes page)
- **motion**: none: a fixed mount. The soft foam and adhesive allow a little give, and the strip must not be peeled away from the wall
- **degrees_of_freedom**: 0: the mounted part is held still
- **special_behaviour**: 
  - quick-release: releases on demand without tools, heat or solvents by stretching the tab (tesa stretch release tapes page). It is a one-time release: the strip is used up, although hooks and plates can be reused with refill strips (3M Command sheet; tesa Powerstrips refill pages)
  - hand-release only (locks under load, releases when a person operates it): it holds the hanging load, and lets go only when someone pulls the tab parallel to the surface (arXiv 2607.11650; tesa Powerstrips FAQ)
- **holding_principle**: 
  - material bond (glue, solvent or melting): a pressure-sensitive adhesive that grips both surfaces by molecular attraction without hardening (Wikipedia 'Adhesive'; 3M Command sheet)
  - shape (the parts interlock; form-fit): in two-part systems the hook slides onto a back plate, or picture strips interlock with mushroom-shaped fibrils (3M Command sheet; arXiv 2607.11650)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: pulling the tab slowly and parallel to the surface removes it 'without a trace' and without tools, heat or solvents; the strip itself is destroyed (tesa Powerstrips FAQ; tesa stretch release tapes page; 3M Command sheet). Pulling it towards you instead can damage the surface ('NEVER pull the strip towards you'; 3M Command sheet).
- **reuse_cycles**: once for each strip: every removal uses up the strip. The hook, plate or printed mount can be reused many times with refill strips (3M Command sheet; tesa Powerstrips refill pages), and interlocking picture strips let you take the picture off and put it back: tesa says the 'hook and loop elements' of Powerstrips CLICK 'offer repetitive use' (tesa adhesive strips page).
- **tools_needed**: none to fit: isopropyl alcohol (rubbing alcohol) or methylated spirit and a cloth to clean the surface; do not use household or bathroom cleaners (3M Command sheet; tesa Powerstrips FAQ). The waterproof tesa strips come with a primer tissue (tesa Powerstrips FAQ). None to remove; if the tab tears off, iFixit suggests heat, isopropyl alcohol, string and patience (iFixit).
- **seal**: none: it is a mounting strip, not a seal
- **load**: light: household strips are rated from about 0.2 to 3.4 kg (0.5-7.5 lb) per hook, pictures up to about 2.3 kg (5 lb) per hanger (3M Command sheet), tesa Powerstrips CLICK 1.8, 5.4 or 7.2 kg by size, and tesa Waterproof XL up to 3 kg per strip; more strips help, 'but not linearly' (tesa pages). Strong in shear (load along the wall): a Command strip's lab values are 58 N/100 mm peel adhesion, 1,000 g static shear and 45 kg (100 lb) dynamic shear (3M Command sheet). Weak against peeling, levering or pulling straight off the wall, and deliberately weak when stretched along the wall (arXiv 2607.11650) ⚑ [uncertain: the peel weakness is inferred from how the strips are designed and removed]. *(⚑ parts need confirming)*
- **adjustable**: no: once pressed down it can't be repositioned; remove it by stretching and use a new strip (iFixit: 'once you put it down, you can't reposition it'). Hooks that slide onto a back plate, and interlocking picture strips, can be lifted off and refitted (3M Command sheet; tesa adhesive strips page).
- **play_and_precision**: not applicable: it does not locate the part; position it by eye, with a level or a paper template (iFixit uses a film template for phone batteries). No play once stuck, but the soft foam lets the part give slightly
- **access_needed**: one side only (blind): you stick it from the front. The pull tab must stay reachable and have a clear path, since it is pulled downwards along the wall for at least 12 in (30 cm) on Command strips (3M Command sheet); in phones, designers cut windows or move parts so the tab can be pulled at a low angle without snagging (iFixit).
- **materials**: Strip: a rubber-based or synthetic-rubber pressure-sensitive adhesive on polyethylene foam (3M Command sheet; tesa Powerstrips FAQ), typically styrene block copolymers (tesa patent US 6,905,100); water-resistant Command strips use a silicone adhesive (3M water-resistant sheet). Surfaces: painted walls and painted wood, tiles, glass, metal, stone, wood, ABS, polystyrene and acrylic; smooth, flat, solid, clean surfaces work best, and the foam copes with 'smooth and semi-rough' surfaces (3M Command sheet; tesa installation guide). Poor: polyethylene (PE), polypropylene (PP) and PTFE ('won't hold'), vinyl, bare or porous unpainted wood, wallpaper, loose plaster or cement and weak varnish (the strip is 'stronger than the surface and might tear it off'), and paint less than 7 days old (3M Command sheet; tesa installation guide). 3D-printed PLA, PETG and ABS mounts are widely used with Command and tesa refill strips (Printables models), but no manufacturer data for printed surfaces was found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: clean, peel, press and wait an hour. The skills are cleaning with alcohol, pressing firmly, leaving the tab free, and removing it slowly along the wall

### Making it

- **processes**: 
  - off-the-shelf part: strips in mini, small, medium and large sizes, refill packs, hooks, clips, poster and picture-hanging strips, and waterproof versions (3M Command sheet; tesa pages)
  - 3D print (FDM): printed hooks, holders and wall mounts sized to take refill strips, e.g. replacement Command hooks and Honeycomb Storage Wall mounts (Printables)
  - laser cut: acrylic and painted or sealed wood parts can be mounted, since tesa lists acrylic and wood as suitable (tesa installation guide)
  - electronics: battery mounting in phones, tablets, laptops and wearables, and removable mounting of displays and modules (iFixit; tesa stretch release tapes page)
- **print_in_place**: no: the strip is bought and stuck on after printing; you print the hook or mount with a flat pad sized for the strip
- **making_tips_3d_printing**: 1) Size the flat pad to the strip: on Command strips the adhesive area is about 1.27 x 1.55 cm (mini), 1.58 x 2.69 cm (small), 1.58 x 5.08 cm (medium) and 1.90 x 7.36 cm (large) on the wall side, with a 1.4-1.9 cm tab (3M Command sheet). 2) Leave the tab free: put it at the bottom edge, and keep the path below it clear so it can be pulled straight down along the wall for at least 30 cm without catching on the print (3M Command sheet; iFixit on designing for tab access). 3) Make the pad flat, solid and smooth, and clean it with isopropyl alcohol before sticking (3M Command sheet; tesa installation guide); a smooth face, e.g. the side printed on a smooth bed, probably gives more contact than a textured or ridged face ⚑ [uncertain]. 4) Don't stick strips to PE or PP prints; they 'won't hold' (tesa installation guide). 5) Press each side firmly (3M: 10 s for the hook, 30 s for a back plate; tesa: 5 s) and wait an hour before loading (3M Command sheet; tesa Powerstrips FAQ). 6) Keep the load pulling down the wall, not out from it: put the hook close to the wall and avoid long lever arms, which peel the top edge ⚑ [uncertain]. 7) Make hooks tough: a maker recommends PETG for toughness on a simple Command hook, and replacement hooks that slide onto the original Command back plate are printed on their side with supports (Printables 105625 and 1006631). 8) For removable decor, a slide-on design (hook on back plate) lets you take the item off without removing the strip (3M Command sheet; Printables 556091). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'stretch release adhesive strips', 'removable adhesive strips', 'damage-free hanging strips', 'refill strips', 'poster strips', 'picture hanging strips' and 'water-resistant (bathroom) strips'. Brands: 3M Command strips, hooks and Picture Hanging Strips; tesa Powerstrips (Small, Large, Poster, Transparent, Waterproof, CLICK) and tesa adhesive nails. Industrial: tesa Bond & Detach stretch release tapes (e.g. tesa 76565, 770xx series) and phone 'battery adhesive pull tabs' (3M sheet; tesa pages; iFixit).
- **rules_of_thumb**: 
  - Clean with isopropyl alcohol, not household cleaners; press firmly; wait one hour before hanging anything (3M Command sheet).
  - Remove by pulling the tab slowly, straight down and parallel to the wall, for at least 12 in (30 cm); never towards you (3M Command sheet). Industrial tesa tapes can be released at angles up to 90° (tesa stretch release tapes page); in phones, pull at as low an angle as possible, under 60° (iFixit).
  - Apply above 10 °C (3M) or ideally at 20-25 °C, minimum 15 °C (tesa); removal is 'considerably' harder below 15 °C (tesa Powerstrips FAQ).
  - Heat: Command adhesive 'could soften and lose adhesion above 105 °F (40 °C)'; tesa Powerstrips are rated for 35 °C continuously and 40 °C briefly; both are for indoor use and out of direct sunlight (3M Command sheet; tesa Powerstrips FAQ).
  - Wait at least 7 days before sticking to fresh paint (3M Command sheet).
  - Load capacity rises with more strips, but not in proportion (tesa Powerstrips FAQ); use one hook per item (3M Command sheet).
  - The load-to-release-force ratio scales with bonded length divided by adhesive thickness, so long, thin bonded areas give strong holding with easy removal (arXiv 2607.11650).

### When to use it

- **everyday_examples**: 
  - Command hooks and picture-hanging strips on rented or painted walls (3M Command sheet; arXiv 2607.11650)
  - tesa Powerstrips holding posters, bathroom shelves and kitchen pull-outs (tesa pages)
  - The pull-tab strips under smartphone batteries, e.g. in iPhones and Google Pixel phones (iFixit)
  - Printed hooks and mounts on Command refill strips, e.g. for a Honeycomb Storage Wall (Printables)
- **when_to_use**: Use it when you want to hang or mount something light without drilling and remove it later without damage: rented homes, tiles, glass, painted walls and furniture (3M Command sheet; tesa pages). It suits 3D-printed hooks, cable clips and organisers, temporary or re-arrangeable setups, and parts that must come out cleanly for repair or recycling, such as batteries in electronics (iFixit; tesa stretch release tapes page).
- **when_not_to_use**: Don't use it for heavy, valuable or irreplaceable items, or over beds (3M Command sheet): use screws and wall plugs or a picture rail. Avoid wallpaper, loose plaster, bare or porous wood, dirty, dusty or oily surfaces, vinyl, PE and PP (3M Command sheet; tesa installation guide). Avoid hot places (above about 35-40 °C), direct sunlight, outdoors and wet areas unless you choose a waterproof version (3M Command sheet; tesa Powerstrips FAQ). If the part must be moved often, use a slide-on hook and back plate, hook-and-loop strips or magnets rather than re-sticking. For a permanent, strong bond use double-sided acrylic foam tape (VHB) or glue instead.
- **environment_limits**: Heat: Command strips are rated -10 to 50 °C, but the adhesive may soften and lose grip above 40 °C (3M Command sheet); tesa Powerstrips are rated for 35 °C continuously and 40 °C briefly (tesa Powerstrips FAQ). Cold: apply above 10-15 °C; cold after fitting is not a problem for holding, but removal below 15 °C is much harder (3M Command sheet; tesa Powerstrips FAQ). Water and humidity: standard strips are not for wet places; water-resistant versions use silicone adhesive (3M) or a primer tissue (tesa) (3M water-resistant sheet; tesa Powerstrips FAQ). Sunlight: not recommended in direct UV; very high UV might make transparent tesa strips harder to remove (3M Command sheet; tesa Powerstrips FAQ). Chemicals: no apparent degradation from splashes of most hydrocarbon solvents (3M Command sheet). Creep: loads applied within the first hour reduce holding capacity (3M Command sheet); long-term creep of the soft adhesive under a steady load is likely ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: The main hazard is the object falling: 3M warns not to hang items over beds, not to use it for valuable or irreplaceable items, and that failure to follow the instructions may cause damage; secure the object while removing the strip so it doesn't drop (3M Command sheet; tesa Powerstrips FAQ). Pulling the strip out from the wall can tear off paint, wallpaper or plaster (3M Command sheet; tesa installation guide). tesa states its Powerstrips adhesive 'contains no toxic materials' and is made of synthetic rubber (tesa Powerstrips FAQ). In electronics, stretch-release strips are safer than glue because you don't have to pry at a soft lithium-ion battery (iFixit).
- **common_failures**: The tab snaps or the strip tears when pulled too fast, at a steep angle or when it catches; pull slowly and keep constant tension, re-grip closer to the part, and if the tab is lost use heat, isopropyl alcohol and string (iFixit; tesa Powerstrips FAQ). Paint or wallpaper torn off because the strip was pulled towards you, or because the surface layer was weaker than the adhesive (3M Command sheet; tesa installation guide). The hook falls off: dirty or greasy surface, household-cleaner residue, fresh paint, bare wood or porous unpainted surface, loaded within the first hour, too heavy, or too warm (3M Command sheet). Strips that won't release in a cold room (tesa Powerstrips FAQ). Wrinkled or twisted strips; iFixit advises keeping them flat and even when fitting and removing (iFixit). Strips on PE or PP that never hold (tesa installation guide).
- **related**: 
  - Double-sided foam tape (acrylic foam pressure-sensitive adhesive, e.g. VHB): much stronger and permanent, but hard to remove cleanly
  - Hook-and-loop fastener and interlocking mushroom fasteners: let you take the item off and put it back many times; Command picture strips combine both ideas (arXiv 2607.11650)
  - Suction cups: also tool-free and removable, but only on smooth, non-porous surfaces such as glass and tiles
  - Magnets: removable mounting on steel surfaces
  - Screws and wall plugs (anchors): for heavy or permanent loads
  - Contact adhesive and other glues: permanent bonds
  - Gel 'nano tape': reusable, washable acrylic gel tape for very light items ⚑ [uncertain]
  - Adhesive tape joint and tape hinge (pressure-sensitive tape): ordinary tapes grip under finger pressure the same way, but are not made to stretch off cleanly; a strip across a gap also makes a light hinge *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [How do 3M Command strips work? A fracture mechanics approach (Luo, Bouklas and Hui, arXiv 2607.11650, 2026)](https://arxiv.org/html/2607.11650): Figure 1 schematic of a Command Picture Hanging strip pair (backing, adhesive, wall, pull tab, interlocking fibrils) under hanging and release loads, and simulation plots of the strip peeling away as it is stretched *(licence: CC BY 4.0 (paper licence shown on arXiv))*
  - [Ask iFixit: What Is Stretch Release Adhesive (and Why Do We Love It)? (iFixit)](https://www.ifixit.com/News/45779/ask-ifixit-what-is-stretch-release-adhesive-and-why-do-we-love-it): Plain explanation with photos of battery pull tabs in phones and a drawing from Korpman's 1976 stretch-release patent *(licence: link only)*
  - [How to Remove Command Brand Hooks (YouTube, Command)](https://www.youtube.com/watch?v=luSNQjWUEx0): Official video of removing a Command hook by stretching the tab down along the wall (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [How to Remove Stretch Release Tape | tesa 76565 Bond & Detach (YouTube, tesa APAC)](https://www.youtube.com/watch?v=QttXI2UnXwI): Industrial stretch-release tape being removed by pulling its tab (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Parametric Adhesive hook (tesa nail / command strips) (KlipGans, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/569668-parametric-adhesive-hook-tesa-nail-command-strips): OpenSCAD parametric hooks modelled on 0.5, 1 and 2 kg tesa adhesive nails, for use with refill strips. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Simple 3M Command Hook (Alex, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/105625-simple-3m-command-hook): Small and medium hooks sized for Command strips; no supports, PETG recommended for toughness. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Replacement Command Hook (Large, 5lb) (James Lovett, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1006631-replacement-command-hook-large-5lb): Printed hook that clips onto an existing Command wall plate; print on its side with tree supports. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Medium Utility Command Hook (3M 17001) (jhfield, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/556091-medium-utility-command-hook-3m-17001): Replacement slide-on hook with a STEP file of the mount so you can design your own Command-mounted parts. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Honeycomb 3M Command Strip Mount + Wall Double Hollow Insert (Spatula, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/266346-honeycomb-3m-command-strip-mount-wall-double-hollo): Mount that hangs a printed Honeycomb Storage Wall on large Command strips without drilling. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A side view of a hook stuck to a wall: first with a weight hanging (arrows along the wall showing the strip carrying the load in shear), then a hand pulling the tab straight down along the wall, the strip stretched long and thin, with the glue peeling away from the wall and back plate from the bottom up; a small crossed-out arrow shows the wrong way, pulling out towards you.
- **sources**: 
  - https://docs.rs-online.com/8d0d/0900766b813690ff.pdf
  - https://multimedia.3m.com/mws/media/1160623O/command-water-resistant-strips-product-information-sheet.pdf
  - https://www.ifixit.com/News/45779/ask-ifixit-what-is-stretch-release-adhesive-and-why-do-we-love-it
  - https://arxiv.org/abs/2607.11650
  - https://arxiv.org/html/2607.11650
  - https://www.tesa.com/en/consumer/bathroom-accessories/technology-power-kit/installation-guide-powerstrip-technology
  - https://www.tesa.com/en/consumer/kitchen-organization/technology/installation-guide-powerstrips-technology
  - https://www.tesa.com/en/consumer/mounting-hanging-sms/adhesive-strip-powerstrips
  - https://www.tesa.com/en/industry/products/stretch-release-tapes
  - https://patents.google.com/patent/US6905100B2/en
  - https://en.wikipedia.org/wiki/Adhesive
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=luSNQjWUEx0
  - https://www.youtube.com/watch?v=QttXI2UnXwI

### Finder tags

- **connects**: wall, rail, desk or grid
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: can be undone
- **bonds_well**: ABS or ASA, slippery plastics (PE or PP), silicone, acrylic or polycarbonate, wood, metal, glass or ceramic, rubber, foam, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…bles models), but no manufacturer data for printed surfaces was found [uncertain].…"*
- **bonds_poorly**: PLA, PETG, paper or card ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…bles models), but no manufacturer data for printed surfaces was found [uncertain].…"*
- **tools**: none
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: wall or ceiling
- **wall_hold**: tape or pads
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, making_tips_3d_printing, materials, related

## 231 Hide glue (animal glue)

*adhesives & bonding.* A traditional glue made from animal collagen that can be undone later with heat and moisture, used in instrument making and furniture repair

### What it is

- **plain_name**: An old-fashioned brown glue made from boiled animal skin (the same stuff as jelly), melted in a warm water bath and brushed on hot; it grabs in about a minute as it cools, dries rock hard, and can later be softened again with heat and water so the parts come apart for repair
- **term**: Hide glue (animal glue, a protein glue made from collagen); supplied as hot hide glue (granules melted in a glue pot) or liquid hide glue (kept liquid with urea)
- **aliases**: 
  - animal glue, animal protein glue, protein glue, collagen glue (Wikipedia; Fine Woodworking; SkillCult)
  - hot hide glue, HHG (Old Brown Glue FAQ; Valley Woodworkers)
  - liquid hide glue, cold hide glue, premixed hide glue (Wikipedia; Fine Woodworking #129)
  - Scotch glue, pearl glue, cake glue (older British trade names for the dry forms; Rockler, Ian Kirby)
  - bone glue, rabbit-skin glue, fish glue and isinglass (close relatives made from bone, rabbit skin or fish; Wikipedia)
  - Glutinleim, Knochenleim (German for glutin glue and bone glue; Wikimedia Commons file names)
  - gelatin (the refined food-grade version of the same protein; Wikipedia; SkillCult)
  - Old Brown Glue (brand; liquid hide glue), Titebond Genuine Hide Glue / Titebond Liquid Hide Glue (brand), Milligan & Higgins 192 (brand of dry granules) (Old Brown Glue FAQ; Titebond; Fine Woodworking)
- **family**: adhesives & bonding
- **one_liner**: Hide glue is a traditional glue made from boiled animal skin that is brushed on warm, grips as it cools and dries into a hard, non-creeping bond, and stays reversible, so heat and moisture can release the joint for repair years later.
- **complexity**: Single piece: one glue. Hot hide glue needs dry granules, water, a glue pot or double boiler kept at about 60 °C (140 °F), a thermometer and a brush. Liquid hide glue comes ready to use in a bottle (Popular Woodworking; Valley Woodworkers; Titebond).
- **how_it_works**: The glue is collagen, the protein in skin and bone, boiled out and dried into granules. Soaked in water and warmed to about 60 °C it becomes a runny syrup that soaks into wood fibres; as it cools below about 50 °C it turns to jelly (a gel), and then it slowly dries hard as its water soaks away or evaporates (Wikipedia; Old Brown Glue FAQ). While it gels it tacks up and shrinks, which pulls the joint tight, so two edges rubbed together can hold without clamps (a 'rubbed joint') (Wikipedia; Fine Woodworking, Patrick Edwards). Because nothing chemically cures, adding moisture and heat turns the dry glue back into gel and liquid, so the joint can be taken apart, and fresh hot glue re-wets and bonds to old hide glue (Old Brown Glue FAQ; Wikipedia). Liquid hide glue has urea added, which lowers the gel point from about 38 °C (100 °F) to about 27 °C (80 °F), so it stays liquid at room temperature and gives a long working time (Old Brown Glue FAQ).

### Finder attributes

- **job**: 
  - glue or bond: joins wood, veneer, paper, leather and cloth, mainly in furniture and musical instruments
  - join and hold: glue blocks and edge joints can be held by the glue's own quick tack without clamps (rubbed joint) (Fine Woodworking; Rockler)
- **motion**: none: a rigid glued joint
- **degrees_of_freedom**: 0: the glued parts are locked together
- **special_behaviour**: 
  - none of the listed behaviours strictly. Its own tricks: it is reversible (heat plus moisture turns it back to liquid, so joints can be taken apart and re-glued; Old Brown Glue FAQ), it sticks to itself (new glue bonds to old, so repairs need less cleaning; Wikipedia), it clamps itself as it gels and shrinks (rubbed joints and hammer veneering without clamps; Wikipedia; Fine Woodworking), and dried glue can be re-melted in place with a hot iron or palette knife to lay veneer or close a joint (Wikipedia)
- **holding_principle**: 
  - material bond (glue, solvent or melting): the protein soaks into the wood surface and dries hard; Patrick Edwards describes it as a mechanical bond plus a molecular attraction to wood (Fine Woodworking)
- **input_output**: not applicable
- **power**: passive (no power needed) to hold. Hot hide glue needs heat (a glue pot, hot plate or warm water bath) only while you apply it; liquid hide glue works at room temperature, although Old Brown Glue is meant to be warmed first (Popular Woodworking; Old Brown Glue FAQ).
- **removability**: semi-permanent (can be undone but may damage parts): a cured joint is rehydrated with moisture and then heated (steam, warm water, a hot palette knife) and comes apart, usually without damaging the wood; a sharp knock or a palette knife can also split a hide-glue joint cleanly along the glue line, which is how violin tops are removed. Steam and water can mark finishes (Old Brown Glue FAQ; Wikipedia). It is the most easily reversible common wood glue (Fine Woodworking #129).
- **reuse_cycles**: a few times: each repair re-glues the same parts with fresh hide glue, which bonds to the old glue, so instruments and antiques are taken apart and re-glued over decades or centuries (Wikipedia; Old Brown Glue FAQ). The protein itself can be re-melted and re-dried over and over (Old Brown Glue FAQ), but a pot of prepared glue loses strength with every reheating, and one old workshop allowed only two reheats (Rockler, Ian Kirby).
- **tools_needed**: Hot hide glue: dry granules, a kitchen scale, a glue pot (electric glue pot, double boiler, or a glass jar standing in a pan of water on a hot plate), a thermometer, a glue brush, clamps (or none for a rubbed joint), and a heat gun or hair dryer to warm the parts; a scraper and hot damp rag for squeeze-out (Valley Woodworkers; Popular Woodworking). Liquid hide glue: the bottle, a pan of hot water to warm it (Old Brown Glue), brush and clamps (Old Brown Glue FAQ; Titebond). To take a joint apart: water or steam, heat, and a thin palette knife; alcohol makes the glue brittle so it cracks apart more easily (Wikipedia).
- **seal**: none: it is water-soluble and not a sealant (Rockler; Woodcraft)
- **load**: medium to heavy in wood joints: on hard maple Titebond's liquid hide glue measured 3,591 psi (about 24.8 MPa) in shear (ASTM D905), with 72% of the break in the wood (Titebond), and Franklin's tests put hide glue at about 3,600 psi (Fine Woodworking #129). In Fine Woodworking's own test (#192) hot hide glue reached 76% and liquid hide glue 79% of the strength of a waterproof PVA glue (Wikipedia, Wood glue). It is rigid and does not creep under a constant load (Wikipedia; Titebond), but it is brittle, so a sharp shock tends to break it cleanly along the glue line (Wikipedia). It loses strength when wet (Rockler; Titebond). Titebond says its liquid hide glue is 'not for structural or load bearing applications'.
- **adjustable**: no once dry. Hot hide glue gives about a minute or less to position the parts before it gels (Wikipedia); liquid hide glue gives about 10 minutes open time and 20-30 minutes total assembly time (Titebond). A mistake can be fixed later by re-heating and re-wetting the joint (Old Brown Glue FAQ).
- **play_and_precision**: not applicable (nothing moves). It needs well-fitting joints: it 'doesn't fill huge gaps well; the parts need to fit together' (Valley Woodworkers); it has some gap-filling ability but epoxy is better (Wikipedia).
- **access_needed**: not applicable: glue is brushed onto the joint faces before assembly. Taking it apart needs you to get moisture and heat into the glue line, e.g. with a heated palette knife or steam (Wikipedia).
- **materials**: Made from collagen in cattle hides (and bone); fish and rabbit versions exist (Wikipedia; Popular Woodworking; Valley Woodworkers). Bonds well: wood and wood veneer, paper and cardboard, leather, cloth, bark, sinew wrappings, parchment and gesso work (Wikipedia; Old Brown Glue FAQ: lower temperatures suit gluing paper, leather or cloth to wood). It also grips glass strongly enough that its shrinkage chips the glass surface, a decorative technique called glass chipping (Wikipedia; Valley Woodworkers). Poor: anything that will get wet. Plastics and 3D prints: no tests were found; it works by soaking into porous surfaces, so smooth plastics such as PLA, PETG and ABS are unlikely to bond well ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: hot hide glue needs a warm glue pot, temperature control and fast work (about a minute before it gels), and it spoils once mixed; liquid hide glue in a bottle is easy, like ordinary wood glue with a longer working time (Valley Woodworkers; Woodcraft).

### Making it

- **processes**: 
  - woodwork: furniture making and restoration, veneering and marquetry, glue blocks and rubbed edge joints (Fine Woodworking; Rockler)
  - musical instrument making (lutherie): violins, guitars, pipe organs and pianos, where joints must come apart for repair (Wikipedia)
  - off-the-shelf part: dry granules or pearls in gram strengths, and bottled liquid hide glue (Titebond; Old Brown Glue)
  - bookbinding, paper, leather and gilding work, and as a size or binder in painting (Wikipedia; SkillCult)
  - not a normal choice for 3D prints (FDM or resin); see making_tips_3d_printing
- **print_in_place**: no: it is a glue for joining separate parts, not a printed feature.
- **making_tips_3d_printing**: Not applicable in practice: hide glue is a wood, paper and leather glue that works by soaking into porous surfaces, and no tests on PLA, PETG, ABS or resin prints were found, so use CA, epoxy or solvent welding for plastic prints ⚑ [uncertain]. Where a printed part is combined with wood (for example a printed jig or instrument part), it is the wood-to-wood joints that suit hide glue. Printed tools can help: a printed glue-brush rest or jar holder for the water bath, but keep printed PLA away from the 60 °C glue pot, which is about where PLA starts to soften ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'hide glue granules' or 'pearl glue' by gram strength (135, 192, 251 g; 192 g is the usual woodworking grade) (Wikipedia, Wood glue); 'liquid hide glue' (e.g. Titebond Genuine / Liquid Hide Glue, Old Brown Glue, brands); 'rabbit skin glue' and 'fish glue' for artists and bookbinders; an 'electric glue pot' or 'double boiler glue pot' (a baby-bottle warmer or a jar in a pan on a hot plate also works); 'urea' to extend open time; a hog-hair 'glue brush'; and a 'veneer hammer' for hammer veneering (Popular Woodworking; Valley Woodworkers; Old Brown Glue FAQ; Fine Woodworking).
- **rules_of_thumb**: 
  - Keep the glue at about 60 °C (140 °F): warmer temperatures quickly destroy its strength (Wikipedia). Valley Woodworkers' handout: 145 °F is OK and 150 °F only for short periods; Old Brown Glue works between 110 and 160 °F, best around 140 °F, and should not go above 180 °F for any length of time (Valley Woodworkers 'Hot Hide Glue Information', 2023; Old Brown Glue FAQ).
  - Mix about 2 parts water to 1 part dry glue by weight (traditional), or 1.6-1.8 : 1 for a thicker glue; let it soak until it looks like tapioca before heating, and aim for a runny syrup (Valley Woodworkers; Popular Woodworking).
  - Gram strength (a jelly-firmness test): 192 g is the most used for woodworking, 251 g is the highest normally used for instruments, 135 g the lowest for general woodwork; higher gram strength is stronger and tackier but gels faster (Wikipedia, Wood glue; Popular Woodworking; Valley Woodworkers). Instrument and cabinet makers use 120-200 g (Wikipedia, Animal glue).
  - Open time: hot hide glue about 1 minute or less, so do a dry run and assemble fast, and gel sets in below about 50 °C (120 °F) (Wikipedia; Woodcraft chart); Patrick Edwards gives 1-2 minutes for 192 g glue (Fine Woodworking). Liquid hide glue: 10 minutes open, 20-30 minutes total assembly at 21 °C / 50% RH (Titebond); 15-30 minutes (Fine Woodworking #129).
  - Clamping: unstressed hot hide glue joints need only about half an hour in clamps; joints under stress or glue with added urea need clamping overnight (Valley Woodworkers); Old Brown Glue should stay clamped overnight (Old Brown Glue FAQ). Hide glue has only 30-50% of its full strength at the stated clamp time and needs about 24 hours to cure (Woodcraft).
  - Clamping pressure for liquid hide glue: about 100-150 psi for softwoods, 125-175 psi for medium woods and 175-250 psi for hardwoods (Titebond).
  - Adding urea at about 20% of the dry glue weight makes a glue that stays liquid at room temperature (like Old Brown Glue) but needs clamping and dries a little weaker and more flexible; 5-10% just extends the open time (Valley Woodworkers).
  - Strength: 3,591 psi (about 24.8 MPa) on hard maple at room temperature and 3,207 psi after 150 °F overnight (Titebond Genuine Hide Glue, ASTM D905).
  - Shelf life: dry granules keep indefinitely if dry (Wikipedia; Woodcraft); bottled liquid hide glue is guaranteed about 24 months (Titebond; Old Brown Glue), though one restoration text warns that any liquid hide glue over six months old 'can be suspect' because urea slowly breaks the protein down (Wikipedia, citing Weisshaar 1988). Prepared hot glue spoils; keep leftovers in the fridge or freezer (Wikipedia; Popular Woodworking).

### When to use it

- **everyday_examples**: 
  - Violins, cellos and acoustic guitars, whose tops are glued with hide glue so they can be removed for repair (Wikipedia)
  - Antique furniture: glue blocks under table tops and around feet, and veneered surfaces (Fine Woodworking, Patrick Edwards)
  - The lick-and-stick glue on old postage stamps and brown gummed packing tape, which works the same way: moisten, stick, and it can be steamed off again (Rockler, Ian Kirby); envelopes, match heads and garnet sandpaper also use animal glue (Valley Woodworkers)
  - Jelly (gelatin dessert), which is a refined version of the same protein (Wikipedia; Valley Woodworkers)
- **when_to_use**: Use it for indoor wooden things you (or someone else) may need to take apart one day: musical instruments, antique and reproduction furniture repair, and any joint where a future repairer should be able to reverse the glue (Wikipedia; Titebond). It is ideal when repairing old hide-glued pieces, because new glue bonds to the old (Wikipedia; Woodcraft). Choose it for joints that carry a steady load, like chair joints, because it does not creep (Wikipedia; LD Davis, a hide glue maker). Hot hide glue is the classic choice for veneering without a press (hammer veneering), rubbed joints and glue blocks, where its quick tack replaces clamps (Fine Woodworking; Old Brown Glue FAQ). Liquid hide glue suits complex glue-ups that need a long working time (Woodcraft; Titebond). It cleans up with warm water and does not leave marks under stains and finishes (Popular Woodworking; Rockler).
- **when_not_to_use**: Don't use it outdoors, in bathrooms and kitchens, or anywhere it may get wet or very humid; use a water-resistant PVA (Type II), Type I PVA, polyurethane or epoxy instead (Titebond; Woodcraft; Rockler). Don't use it for loose, gappy joints; use epoxy (Valley Woodworkers; Wikipedia). Avoid it for plastics, metals and 3D prints (use CA, epoxy or solvent welding) ⚑ [uncertain]. Titebond says its liquid version is not for structural or load-bearing applications. If you want a quick, easy glue-up and never need to reverse it, ordinary PVA wood glue is simpler (Valley Woodworkers). Liquid hide glue is not suitable for hammer veneering or rubbed joints; use hot hide glue for those (Old Brown Glue FAQ). *(⚑ parts need confirming)*
- **environment_limits**: Water and humidity: it stays water-soluble and hygroscopic, so moisture softens it; a coat of finish protects it from a few humid days (Fine Woodworking #129; Rockler; Titebond: 'not intended for exterior use or where moisture is likely'). Heat: once cured it is more heat-resistant than other common woodworking glues (Fine Woodworking #129); Titebond's liquid hide glue kept 3,207 psi after a night at 150 °F, against 3,591 psi at room temperature. Cold: liquid hide glue starts to gel at about 50 °F (10 °C), so keep the bottle and the workshop warm (Woodcraft; Titebond). Creep: none under constant load (Wikipedia; Titebond). Ageing: it darkens and shrinks as it dries and ages, and repeated handling and swings of temperature and humidity can damage glued artworks (Wikipedia). Rot: made-up glue is food for bacteria and mould and spoils, and liquid hide glue with urea slowly weakens with age (Wikipedia; SkillCult; Valley Woodworkers). Old Brown Glue is not affected by freezing (Old Brown Glue FAQ).
- **safety_notes**: Low toxicity: the glue itself is non-toxic, and Woodcraft notes you needn't worry if a dog raids the glue pot (Woodcraft; Fine Woodworking). Hazards are mainly heat: the glue pot and water bath are around 60 °C, a hot plate and water are used together, and a heat gun used to warm parts can scorch wood if held still (Valley Woodworkers). A pot that boils dry burns the glue and makes a strong, unpleasant smell (Rockler). Glue that smells rancid has spoiled: throw it out (Fine Woodworking, Patrick Edwards). Bottled liquid hide glue can contain additives that irritate the eyes; Titebond's label says 'CAUTION: EYE IRRITANT' and to rinse for 15 minutes if it gets in the eyes (Titebond).
- **common_failures**: Glue gels before the parts are clamped, leaving a weak 'Jello' joint: do a dry run, warm the parts and the room, work fast, or add a little urea (Valley Woodworkers; Wikipedia). Overheated or repeatedly reheated glue loses strength: keep it at about 60 °C and make fresh batches (Wikipedia; Rockler). Spoiled glue from poor storage, or liquid hide glue past its date, fails: check smell and dates (Fine Woodworking; Valley Woodworkers). Joints fail after getting wet or in damp places (Rockler; Titebond). Poor-fitting, gappy joints are weak because it doesn't fill gaps well (Valley Woodworkers). A hard knock can pop a joint cleanly apart because the glue is brittle; the plus side is a clean break that is easy to re-glue (Wikipedia; Valley Woodworkers). Too many freeze-thaw cycles of pre-made glue bottles have caused failures (Valley Woodworkers). Squeeze-out left to dry hard is very hard to remove: scrape it off while it is still jelly and wipe with hot water (Valley Woodworkers). One source warns that applying glue to hot wood can make the wood soak up all the glue, while others recommend warming the parts; warm them moderately ⚑ [uncertain] (SkillCult; Valley Woodworkers). *(⚑ parts need confirming)*
- **related**: 
  - PVA wood glue (white and yellow glue): easier (no heating, longer open time) and water-resistant grades exist, but it creeps under constant load, does not stick to itself, and must be scraped out before re-gluing (Wikipedia; LD Davis; Woodcraft)
  - Liquid hide glue: the same glue with urea added so it stays liquid at room temperature; covered in this entry (Wikipedia; Old Brown Glue FAQ)
  - Rabbit-skin glue and fish glue (isinglass): related animal glues; rabbit-skin glue is more flexible when dry and used for sizing canvases and bookbinding (Wikipedia)
  - Casein glue: a traditional protein glue made from milk (Wikipedia, Wood glue)
  - Two-part epoxy: gap-filling and waterproof, bonds plastics and metal, but is effectively permanent
  - Contact adhesive (contact cement): a modern way to lay veneer without a press, but not reversible (Fine Woodworking #129 compares it unfavourably for veneering)
  - Hot-melt adhesive (glue gun): also sets by cooling, but is a soft plastic that fills gaps and is weak in wood joints
  - Polyurethane glue: water-resistant and gap-filling (foams), for outdoor wood; not reversible (Woodcraft)
  - Paper glue stick and starch or cellulose paste: mild water-based glues for paper and card that are often reversible with water, as hide glue is with heat and moisture

### Pictures, videos and models

- **links**: 
  - [Glutinleime-warm.jpg (Wikimedia Commons, by Simon A. Eugster)](https://commons.wikimedia.org/wiki/File:Glutinleime-warm.jpg): Photo of bone glue, hide glue and rabbit glue mixed 1:1 with water and warmed in a water bath until liquid *(licence: CC BY-SA 3.0)*
  - [Old hot hide glue pot (Wikimedia Commons, by Joost J. Bakker IJmuiden)](https://commons.wikimedia.org/wiki/File:Old_hot_hide_glue_pot_(51879504851).jpg): Photo of a traditional pottery glue pot used to heat and dispense hot hide glue *(licence: CC BY 2.0)*
  - [A Quick Guide to Hot Hide Glue (Popular Woodworking, Logan Wittmer, 2024)](https://www.popularwoodworking.com/techniques/a-quick-guide-to-hot-hide-glue/): Numbered step photos: granules poured into a double-boiler glue pot, covered with cold water, melting as it heats, and thinned to a runny syrup *(licence: link only)*
  - [Using hot hide glue (YouTube, StewMac)](https://www.youtube.com/watch?v=Raq3pbGmmOg): Video demonstration of preparing and using hot hide glue for instrument work (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [How to Make a Rub Joint with Hide Glue - Build a Side Table with Hand Tools (YouTube, Bob Rozaieski Fine Woodworking)](https://www.youtube.com/watch?v=OKkCHM0sDks): Video of edge-joining boards with a rubbed hide-glue joint and no clamps (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Valley Woodworkers: Hot Hide Glue Information (Don Parker, 2023, club handout PDF)](https://valleywoodworkers.org/wp-content/uploads/2022/03/Hot-Hide-Glue-Information-2023.pdf): A six-page beginner's how-to for mixing and using your own hot hide glue with a kitchen scale, a glass jar in a pan of water on a hot plate and a meat thermometer, plus tips on urea, freezing batches and bottled liquid hide glue *(licence: link only (no licence stated))*
  - [Choosing and mixing hot hide glue (Fine Woodworking video workshop, W. Patrick Edwards, 2020)](https://www.finewoodworking.com/2020/03/20/choosing-and-mixing-hot-hide-glue): Article and video (part of a four-part series, which also covers glue blocks, rub joints and hammer veneering) on choosing 192 g granulated hide glue and mixing it; the full videos may need a membership *(licence: link only)*
- **diagram_idea**: A three-stage loop showing the same glue as dry granules, then warm liquid in a water-bath pot (about 60 °C), then jelly as it cools in a wood joint, then hard dry glue, with a return arrow labelled 'add water + heat' back to liquid to show why the joint can be taken apart and re-glued.
- **sources**: 
  - https://en.wikipedia.org/wiki/Animal_glue
  - https://en.wikipedia.org/wiki/Wood_glue
  - https://www.popularwoodworking.com/techniques/a-quick-guide-to-hot-hide-glue/
  - https://oldbrownglue.com/faq/
  - https://www.titebond.com/product/glues/9e9995b4-08eb-4fc6-8254-c47daa20f8ed
  - https://valleywoodworkers.org/wp-content/uploads/2022/03/Hot-Hide-Glue-Information-2023.pdf
  - https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://www.rockler.com/learn/using-classic-hide-glue-in-modern-shop
  - https://www.finewoodworking.com/2020/03/20/choosing-and-mixing-hot-hide-glue
  - https://www.finewoodworking.com/2020/03/20/glue-blocks-and-rub-joints-with-hide-glue
  - https://www.finewoodworking.com/1998/04/01/sticking-with-hide-glue
  - https://blog.lddavis.com/hide-glue-strength-for-woodworking-applications
  - https://skillcult.com/blog/2013/07/21/hide-glue-part-i-meet-hide-glue
  - https://commons.wikimedia.org/wiki/File:Glutinleime-warm.jpg
  - https://commons.wikimedia.org/wiki/File:Old_hot_hide_glue_pot_(51879504851).jpg
  - https://commons.wikimedia.org/wiki/File:Knochenleim_Granulat.jpg
  - https://www.youtube.com/watch?v=Raq3pbGmmOg
  - https://www.youtube.com/watch?v=OKkCHM0sDks

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: can be undone
- **bonds_well**: wood, paper or card, glass or ceramic, fabric or leather ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…o smooth plastics such as PLA, PETG and ABS are unlikely to bond well [uncertain].…"*
- **bonds_poorly**: PLA, PETG, ABS or ASA ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…o smooth plastics such as PLA, PETG and ABS are unlikely to bond well [uncertain].…"*
- **tools**: heat gun, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: wood, paper or card, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, making_tips_3d_printing, materials, when_not_to_use

## 232 Epoxy putty (kneadable two-part putty)

*adhesives & bonding.* Two doughs kneaded together that set hard in place, for filling gaps, repairing and building up shapes that can then be drilled and tapped

*Also covers:* Also covers epoxy putty as the no-bake sculpting material over 3D prints, as armature reinforcement, and as a filler that locks pins in oversized holes.

### What it is

- **plain_name**: A two-colour modelling clay: cut off equal amounts of the two parts, knead them together until the colour is even, press the dough into a crack, hole or joint, and within minutes to hours it sets rock hard and stuck in place; once hard you can sand, file, drill and even cut a screw thread in it
- **term**: Epoxy putty (two-part, hand-mixable epoxy putty)
- **aliases**: 
  - epoxy putty stick, two-part epoxy putty, hand-mixable epoxy (Wikipedia; Loctite Repair Putty data sheet)
  - repair putty, metal repair putty, steel-filled or steel-reinforced epoxy putty (Loctite EA 3463 data sheet; J-B Weld)
  - epoxy modelling or sculpting putty; 'green stuff' among miniature modellers, from the yellow and blue parts that mix to green (Wikipedia)
  - Milliput (brand; UK modelling and repair putty), Pratley Putty (brand; South Africa) (Wikipedia)
  - J-B Weld SteelStik (brand), Loctite Repair Putty and Loctite EA 3463 (brands) (J-B Weld; Henkel data sheets)
  - Oatey Fix-it Stick, QuikSteel, PC-7, KBS NuMetal, Gorilla Glue Epoxy Stick, POR 15 Epoxy Putty (brands tested by Project Farm; AllOutdoor)
- **family**: adhesives & bonding
- **other_families**: seals & pass-throughs
- **one_liner**: Epoxy putty is a two-part dough of epoxy resin and hardener that you knead together by hand and press into place, where it sets into a hard, shrink-free, glued-on solid for filling gaps, plugging leaks, repairing and building up shapes that can then be sanded, drilled and tapped.
- **complexity**: Single piece once mixed: two doughs (resin and hardener), usually sold as two bars or as one stick with the hardener as a core or outer layer, mixed 1:1 (Wikipedia; Milliput instructions; Loctite Repair Putty). Helpers: gloves, a knife to cut it, water or a damp cloth to smooth it, sandpaper or a wire brush for preparing surfaces (Loctite Repair Putty data sheet).
- **how_it_works**: Each part is a clay-like paste: one holds epoxy resin, the other the hardener (for example a polymercaptan in Loctite Repair Putty), both packed with filler such as talc or steel powder (Loctite data sheets; Wikipedia). Kneading mixes them and starts a heat-releasing (exothermic) chemical reaction that joins the molecules into a hard, cross-linked plastic (a thermoset), so once set it will not melt when heated (Wikipedia). Because it hardens by reaction rather than by drying, it does not shrink, so it can fill gaps and be moulded into a solid part (Milliput data sheet; Loctite Repair Putty). It sticks to clean, roughened surfaces it is pressed against, and after it has set it can be sanded, filed, drilled and tapped like a soft metal or hard plastic (J-B Weld; Milliput on Wikipedia).

### Finder attributes

- **job**: 
  - glue or bond: sticks broken parts together and bonds itself to the surface it is pressed onto (Loctite Repair Putty)
  - seal it, or pass cables or fluid through: plugs leaks in pipes and tanks and cures under water (Loctite EA 3463; Loctite Repair Putty)
  - join and hold: fills oversized or stripped holes so a screw can be fitted again, and builds up worn or missing material (Loctite EA 3463; J-B Weld)
- **motion**: none: a rigid repair or joint
- **degrees_of_freedom**: 0: the bonded or filled parts are locked together
- **special_behaviour**: 
  - none of the listed behaviours. Its own tricks: it fills gaps and can be modelled into missing pieces without shrinking; once hard it can be machined (sanded, drilled, tapped); many repair putties cure on damp surfaces and even under water (Milliput data sheet; J-B Weld; Loctite EA 3463; Loctite Repair Putty)
- **holding_principle**: 
  - material bond (glue, solvent or melting): the cured epoxy sticks to the surfaces it was pressed onto (Loctite Repair Putty)
  - shape (the parts interlock; form-fit): putty pressed into holes, cracks and undercuts also locks in mechanically once hard, which is why roughening the surface improves adhesion (Milliput; Loctite) ⚑ [uncertain] *(⚑ parts need confirming)*
- **input_output**: not applicable
- **power**: passive (no power needed): cures by itself at room temperature once mixed; gentle warmth speeds the cure and cold slows it (Loctite EA 3463 cure-speed chart; Milliput data sheet).
- **removability**: permanent: cured putty can only be cut away with a sharp blade, ground or drilled out (Loctite Repair Putty: 'Cured putty may be cut away with caution using a sharp blade').
- **reuse_cycles**: once: it cannot be softened and reused; a failed repair is cut or ground out and redone
- **tools_needed**: A knife to cut off the amount needed; nitrile or other impervious gloves for kneading; water or a damp cloth for smoothing; sandpaper or a wire brush and a solvent (or soap and warm water) to clean and roughen the surfaces first. After curing: files, sandpaper, a drill, and a tap if you want a thread (Loctite Repair Putty; Loctite EA 3463; Milliput instructions; J-B Weld).
- **seal**: watertight: it forms a waterproof seal and is used to stop leaks in pipes, tanks, tubs and showers; Loctite's all-purpose putty is rated safe for drinking water and cures under water (Loctite Repair Putty; Loctite EA 3463). Some putties held pipe pressure in Project Farm's test (PC-7 paste did best) (AllOutdoor).
- **load**: medium, best in compression and as a filler: a steel-filled putty (Loctite EA 3463) has 50 MPa (7,200 psi) compressive strength and 18.8 MPa (2,700 psi) tensile strength, but only 3.8 MPa (550 psi) lap-shear strength on grit-blasted steel and 0.3% elongation, so it is hard and brittle. Loctite Repair Putty All-Purpose gives about 1,700 psi (11.7 MPa) shear on steel and about 970 psi (6.7 MPa) on beech after 24 hours, much less on wet surfaces (Henkel data sheets). J-B Weld rates SteelStik at 4,000 psi (test not stated) (J-B Weld). Wikipedia notes that 'hard as steel' claims refer to surface hardness (Shore rating), and the putties are much weaker than steel in tension and shear. Loctite says not to use its repair putty for structural applications or for repairs subject to movement.
- **adjustable**: no once set. Working time depends on the type: fast metal-repair sticks give only 3-5 minutes (Loctite Repair Putty; Loctite EA 3463: 4 minutes), while modelling putty such as Milliput is sticky at first, turns rubbery and less tacky after about an hour, and is hard in 3-4 hours; one sculptor gives it about two hours of malleable time (Milliput data sheet). Mixed Milliput can be paused for up to 36 hours by putting it in a deep freezer (Milliput instructions).
- **play_and_precision**: not applicable (nothing moves). It fills gaps of any practical size, but Loctite advises against using its repair putty for large or deep holes (Loctite Repair Putty).
- **access_needed**: one side only (blind): putty is pressed into a crack, hole or leak from the side you can reach, or packed around a joint (Loctite Repair Putty: 'Work putty firmly into the crack or hole'; Loctite EA 3463).
- **materials**: Made of epoxy resin and hardener with fillers such as talc or steel powder (Loctite data sheets). Bonds: metals (iron, steel, aluminium), wood, ceramic and porcelain, glass, brick, concrete, fibreglass, PVC and most rigid and semi-flexible plastics (Loctite Repair Putty; Milliput on Wikipedia). Not recommended: polyethylene (PE), polypropylene (PP), non-stick coatings (PTFE), nylon and flexible materials (Loctite Repair Putty). For 3D prints this suggests rigid PLA, PETG, ABS, ASA and resin parts are fine after sanding, while nylon, PP and TPU prints are poor candidates; no maker test data on PLA or PETG were found ⚑ [uncertain]. Grades exist for metal repair (steel-filled), high temperatures, tanks, plumbing and drinking water, and fine modelling (J-B Weld; Henkel data sheets; Milliput on Wikipedia). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: no measuring or special tools, just knead equal parts to an even colour and press in place; the main skills are thorough mixing, clean roughened surfaces and working within the pot life (Loctite Repair Putty; Milliput instructions).

### Making it

- **processes**: 
  - off-the-shelf part: sticks and bars of general-purpose, metal-filled, wood, plumbing and modelling putty
  - 3D print (FDM): filling gaps and seams in printed parts and repairing broken prints before sanding and painting (Tinkerine video)
  - 3D print (resin): repairing and filling resin prints (rigid plastic) ⚑ [uncertain]
  - woodwork: filling holes and rotted areas and rebuilding wood; Loctite quotes bond strength on beech (Loctite Repair Putty; Milliput on Wikipedia)
  - metal repair and CNC-style finishing: rebuilding worn metal parts, filling oversized bolt holes, then drilling, tapping, filing or machining (Loctite EA 3463; J-B Weld)
  - model making and sculpture: miniatures ('green stuff'), restoring porcelain and pottery (Wikipedia; Milliput data sheet) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a separate material pressed onto or into parts after printing, although a print can be designed with a pocket for it.
- **making_tips_3d_printing**: 1) Prepare the print: sand the area to remove the shiny skin and give the putty something to grip, then clean off dust and grease; 'abrading the surface will improve adhesion' (Milliput instructions; Loctite Repair Putty). 2) Mix equal parts until there are no streaks at all: about 1 minute for Loctite Repair Putty, 2-3 minutes for Loctite EA 3463, at least 5 minutes plus one more for Milliput (Henkel data sheets; Milliput instructions). Wear gloves. 3) Press it firmly into the gap so it contacts all surfaces, then smooth it with a wet finger or damp cloth before it hardens; water stops it sticking to fingers and tools (Milliput; Loctite). 4) Choose the working time to suit the job: fast metal putties (3-5 minutes) for small repairs, modelling putty (roughly 1-2 hours before it gets too firm) for sculpting details or filling seams on cosplay and model prints (Loctite Repair Putty; Milliput data sheet). 5) To make a strong screw hole in a print, fill an oversized hole or pocket with putty, let it cure fully (J-B Weld SteelStik can be drilled and tapped after 60 minutes; Loctite Repair Putty after 15-60 minutes), then drill a tap-size hole and cut the thread; Loctite EA 3463 is sold for 'filling oversized bolt holes' (J-B Weld; Henkel data sheets). In Project Farm's drill-and-tap pull-out test KBS NuMetal did best, then J-B Weld SteelStik and Oatey Pro Poxy 20 (AllOutdoor). 6) Design the print with a recess, holes or undercuts where the putty goes, so it locks in by shape as well as by glue ⚑ [uncertain]. 7) Keep thick blobs modest on thin PLA parts: the curing reaction gives off heat (Wikipedia) and PLA softens at low temperatures ⚑ [uncertain]. 8) Avoid it on nylon, PP and flexible TPU prints (Loctite Repair Putty). 9) Sand the cured putty flush with P100-P400 paper, wearing a dust mask ('Do not breathe fumes/dust while sanding', Loctite Repair Putty), then prime and paint as for body filler (Prusa post-processing guide). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'epoxy putty stick' (co-extruded, cut-and-knead); 'steel-reinforced' or 'steel-filled epoxy putty' (e.g. J-B Weld SteelStik, Loctite EA 3463, QuikSteel, brands); 'high-temperature epoxy putty' (J-B Weld HighHeat, brand); 'plumbing' or 'potable-water epoxy putty' and 'underwater epoxy putty'; 'tank repair putty' (J-B Weld TankWeld, brand); 'wood epoxy putty'; and 'epoxy modelling putty' or 'sculpting putty' (Milliput grades including Superfine White, brand; 'green stuff') (J-B Weld; Henkel; Wikipedia; Milliput data sheet).
- **rules_of_thumb**: 
  - Mix equal amounts and knead until the colour is completely even with no streaks: at least 5 minutes plus one more for Milliput, 2-3 minutes for Loctite EA 3463, about 1 minute for Loctite Repair Putty (Milliput instructions; Henkel data sheets).
  - Working time: 3-5 minutes for fast repair sticks (Loctite Repair Putty; Loctite EA 3463: gel 3 min, working life 4 min at 25 °C); modelling putty such as Milliput turns rubbery after about an hour, hard and tack-free in 3-4 hours and rock hard overnight (Milliput data sheet).
  - Machining: J-B Weld SteelStik 'sets in 5 minutes and after 60 minutes, can be drilled, tapped, machined, ground, filed and painted' (J-B Weld); Loctite Repair Putty can be sanded, drilled or painted after 15-60 minutes and fully cures in 24 hours (Henkel); Milliput hardens fully in 24 hours before carving, sanding and drilling (Wikipedia, Milliput).
  - Strength (steel-filled Loctite EA 3463, cured 1 week at 23 °C): compressive 50 MPa, tensile 18.8 MPa, lap shear 3.8 MPa on grit-blasted mild steel, Shore D 70, elongation 0.3% (Henkel TDS, March 2021). Loctite Repair Putty All-Purpose: shear 1,703 ± 58 psi on steel and 969 ± 26 psi on beech, falling to 747 and 207 psi on wet surfaces; Shore D 84 (Henkel TDS, 2019).
  - Temperature: Loctite Repair Putty is rated -27 to 121 °C for fills but only up to 70 °C for load-bearing bonds; Loctite EA 3463's glass transition (softening) temperature is 54 °C; J-B Weld SteelStik 'will withstand temperatures up to 350°F' (177 °C) (Henkel; J-B Weld).
  - Apply between about 4 and 35 °C (Loctite Repair Putty) or 15-30 °C (Loctite EA 3463), and never to surfaces hotter than 66 °C (Loctite EA 3463). Store unopened sticks at about 8-21 °C (Loctite EA 3463).
  - Shelf life about 2 years (Milliput: 'about 2 years', often workable much longer; Loctite Repair Putty: 24 months from manufacture).
  - Surface preparation matters most: clean, dry, grease-free and roughened; bonding to wet surfaces works but is weaker (Henkel data sheets; Milliput instructions).

### When to use it

- **everyday_examples**: 
  - A plumber's repair stick pressed round a leaking pipe or tank (Loctite EA 3463; Loctite Repair Putty)
  - Miniature and wargaming figures sculpted or converted with 'green stuff' (Wikipedia)
  - A chipped porcelain figure or pottery restored with Milliput and painted to match (Milliput data sheet; Wikipedia)
  - A stripped screw hole on a drawer pull filled and re-drilled; J-B Weld lists this among its home repair guides (J-B Weld)
- **when_to_use**: Use it when you need to fill, rebuild or plug rather than just glue a thin line: filling holes, cracks and gaps; rebuilding a broken corner or missing piece; patching a leak in a pipe, tank or boat; restoring worn metal or rotten wood; and making a solid spot that can then be drilled and tapped for a screw (Loctite EA 3463; Loctite Repair Putty; J-B Weld; Milliput on Wikipedia). Its modelling-clay consistency lets it be shaped and formed before it cures (Loctite Repair Putty), and underwater-rated types handle damp or wet repairs (Loctite Repair Putty; Loctite EA 3463). For 3D prints it fills seams and gaps between glued parts, repairs broken prints and adds sculpted detail (Tinkerine video; Wikipedia). For sculpting over a 3D print it is the no-bake choice: baking a PLA print under polymer clay "will not end well", and makers suggest "a 2 part epoxy clay for this purpose" such as Apoxie Sculpt or Magic Sculpt (r/polymerclay thread, read through the Arctic Shift archive). Sculptors also press a thin layer over a finished wire armature to reinforce it, let it cure for 24 hours, then build clay over it (Make: 'How to Sculpt a Fantasy Owl': "Any 2-part epoxy putty will work"), and modellers pack it into an oversized pin hole to lock a pin in place (pinning; Starship Modeler forum: "stuff the surrounding hole and the joint surface with apoxy putty to lock the pin down").
- **when_not_to_use**: For thin, close-fitting glue joints use liquid epoxy or CA, which flow into a thin bond line; the putty's own lap-shear strength is modest (3.8 MPa for Loctite EA 3463 on steel; Henkel). Don't use it for structural or load-bearing joints, parts that flex or move, or large or deep holes (Loctite Repair Putty). Avoid it on polyethylene, polypropylene, non-stick (PTFE) surfaces, nylon and flexible materials; use a low-surface-energy adhesive, plastic welding (see Melted plastic weld) or mechanical fasteners there (Loctite Repair Putty). Avoid it for hot parts beyond its rating (e.g. above 70 °C for load-bearing Loctite Repair Putty bonds) and in pure-oxygen systems (Henkel). If the parts must come apart later, use screws, threaded inserts or a removable joint. For a smooth cosmetic finish over large areas of a print, spray filler or body filler sands more easily (Prusa post-processing guide).
- **environment_limits**: Heat: it will not melt once cured (Wikipedia), but it softens and weakens: Loctite Repair Putty is rated to 121 °C for fills and 70 °C for load-bearing bonds, Loctite EA 3463 has a glass transition temperature of 54 °C, and J-B Weld SteelStik claims 177 °C (350 °F) (Henkel; J-B Weld). Cold: Loctite Repair Putty is rated down to -27 °C, and the uncured putty is not damaged by freezing (Henkel). Water: waterproof and resistant to most common solvents once cured, and some grades cure under water, but bonds made on wet surfaces are weaker (Loctite Repair Putty; Loctite EA 3463). Oil: J-B Weld lists SteelStik as water and oil resistant. Flexing and vibration: very little stretch (0.3% elongation for EA 3463), so it cracks if the part bends or moves (Henkel). Long-term creep and UV behaviour were not found in the sources opened ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Uncured epoxy can cause allergic skin reactions and irritate eyes, skin and airways: wear impervious (e.g. nitrile) gloves and wash hands after use (Loctite Repair Putty; Milliput instructions). Don't lick fingers or tools to smooth it, a habit among sculptors that the Milliput data sheet calls 'inadvisable on health grounds'; use water or a lubricant instead. Don't breathe the dust when sanding cured putty (Loctite Repair Putty). Loctite's label carries a California Proposition 65 cancer warning and 'may cause allergic skin reaction'. The mixing reaction gives off heat (Wikipedia), so a large lump can get warm ⚑ [uncertain]. Keep out of reach of children, and don't use steel-filled putty in pure-oxygen or chlorine systems (Henkel; Milliput). *(⚑ parts need confirming)*
- **common_failures**: Soft, sticky or weak spots from uneven mixing: knead until there are no streaks, especially with same-colour grades such as Superfine White Milliput (Milliput instructions). The repair pops off because the surface was greasy, dusty, smooth or wet: clean, dry and roughen first (Henkel; Milliput). It won't stick to PE, PP, PTFE or nylon (Loctite Repair Putty). Cracks where the part flexes or moves, because cured putty barely stretches (Loctite Repair Putty; EA 3463 elongation 0.3%). Working past the pot life, so it no longer wets the surface; mix only small amounts of fast putties (Henkel). Weak threads or loose screws when drilled and tapped before full cure; wait the full time (J-B Weld; Henkel). Softening near hot parts above its rated temperature (Henkel). Hardened putty stuck on tools: clean them straight away with a wet rag (Milliput).
- **related**: 
  - Two-part epoxy (liquid): the same chemistry as a liquid; better for thin, close-fitting bond lines and higher shear strength, but runs and needs containment for filling
  - Polyester body filler and spray filler: cheaper, sand more easily for cosmetic smoothing of prints, but not for strong repairs or leaks (Prusa post-processing guide)
  - Cyanoacrylate mixed with talc, microballoons or baking soda: a quick 'makeshift putty' for small gaps in prints (Prusa gluing guide)
  - Heat-set threaded inserts and printed or tapped threads: the usual way to put a screw thread into a print; putty is an alternative for repairing stripped or oversized holes (CNC Kitchen tests via Hackaday)
  - Hot-melt adhesive (glue gun): also fills gaps quickly, but stays soft, weak and heat-sensitive
  - Structural acrylic and low-surface-energy plastic adhesives: for PE and PP, which epoxy putty cannot bond (Loctite Repair Putty limitation)
  - Silicone and MS-polymer sealants: flexible, waterproof gap-fillers where the joint moves; epoxy putty is rigid
  - Melted plastic weld: for a watertight printed tank, makers suggest welding the seams first (e.g. with a soldering iron) and then sealing, using 'glue and sealer' rather than one product alone (r/3Dprinting thread read through the Arctic Shift archive)
  - Pinned glue joint (pinning): a wire or rod pin glued into holes in both parts; epoxy putty can be packed round the pin in an oversized hole to lock it (Starship Modeler forum)
  - Liquid-clay bond (bakeable clay glue): joins polymer clay parts by baking them again; epoxy putty sets at room temperature with no bake
  - Score-and-slip join (scratch and slip): joins soft water-based clay parts as they dry; epoxy putty sets by chemical reaction instead and does not shrink
  - Sculpture armature (wire and foil armature): the wire skeleton that clay or putty is built over; a thin layer of epoxy putty can reinforce it (Make: owl project)

### Pictures, videos and models

- **links**: 
  - [Epoxy putty.jpg (Wikimedia Commons, by Salil Kumar Mukherjee)](https://commons.wikimedia.org/wiki/File:Epoxy_putty.jpg): Photo of the two unmixed parts of an epoxy putty: brown resin and black hardener, to be kneaded together in equal amounts *(licence: CC BY-SA 4.0)*
  - [Which Epoxy Putty Brand is Best? JB Weld, Gorilla, Oatey, POR 15, QuickSteel, PC-7 (YouTube, Project Farm)](https://www.youtube.com/watch?v=R3r0UZ7txzs): Video testing twelve epoxy putties: drill-and-tap pull-out strength, crush resistance, sealing a pressurised pipe, an engine repair and a putty-joined chain (title and channel checked via YouTube oEmbed; content summarised by AllOutdoor) *(licence: link only (standard YouTube licence))*
  - [Post-Processing 3D Printed PLA Print with Epoxy Putty (YouTube, Tinkerine)](https://www.youtube.com/watch?v=k5VkDj82_dc): Video of using epoxy putty to fill and finish a 3D-printed PLA part (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Milliput Product Datasheet (distributor copy, MBFG)](https://www.mbfg.co.uk/datasheets/milliput_tech.pdf): Instructions plus photos of a restorer rebuilding a missing lute head on a ceramic figure with Milliput, and a sculptor's article on building figures over a wire armature *(licence: link only)*
  - [Stuff Breaks. What's the Best Epoxy Putty? (AllOutdoor, Russ Chastain, 2021)](https://www.alloutdoor.com/2021/01/26/stuff-breaks-whats-best-epoxy-putty/): Screenshot and written summary of Project Farm's epoxy putty tests with the winner of each test *(licence: link only)*
- **make_it_yourself**: 
  - [Glue strength test pieces (MethodicalMaker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable specimens for comparing adhesives in torque, shear and tension with a torque adapter and a hanging scale; the designer sands glue faces with 80 grit, washes, clamps and waits 5 days. Made for glues in general, it can be used to compare a putty against liquid epoxy or CA on your own filament. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: Three panels: two coloured sticks cut and kneaded into one even colour; the dough pressed into a chipped corner of a part and smoothed with a wet finger; then the hardened patch sanded flush with a hole drilled and tapped through it and a screw going in.
- **sources**: 
  - https://en.wikipedia.org/wiki/Epoxy_putty
  - https://en.wikipedia.org/wiki/Milliput
  - https://en.wikipedia.org/wiki/Pratley_Putty
  - https://loctite.mn/wp-content/uploads/2025/06/LOCTITE-EA-3463-en_US.pdf
  - https://datasheets.tdx.henkel.com/LOCTITE-Repair-Putty-All-Purpose-en_US.pdf
  - https://www.jbweld.com/product/steelstik-epoxy-putty-stick
  - https://www.mbfg.co.uk/datasheets/milliput_tech.pdf
  - https://www.cousinsuk.com/PDF/products/3651_C4908-C4909Instructions.pdf
  - https://www.alloutdoor.com/2021/01/26/stuff-breaks-whats-best-epoxy-putty/
  - https://blog.prusa3d.com/postprocessing-of-3d-prints-step-by-step_29270/
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://hackaday.com/2022/11/01/the-best-threaded-holes-for-resin-parts/
  - https://commons.wikimedia.org/wiki/File:Epoxy_putty.jpg
  - https://www.youtube.com/watch?v=R3r0UZ7txzs
  - https://www.youtube.com/watch?v=k5VkDj82_dc
  - https://api.printables.com/graphql/
  - https://arctic-shift.photon-reddit.com/api/posts/ids?ids=1g4byc1
  - https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1g4byc1&limit=200
  - https://arctic-shift.photon-reddit.com/api/comments/search?link_id=1loknv6
  - https://makezine.com/projects/how-to-sculpt-a-fantasy-owl
  - https://mail.starshipmodeler.net/talk/viewtopic.php?p=983361

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest, fills gaps
- **bonds_well**: PVC, wood, metal, glass or ceramic, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…nts are poor candidates; no maker test data on PLA or PETG were found [uncertain]. Grades exist for metal repa…"*
- **bonds_poorly**: PLA, PETG, ABS or ASA, nylon, TPU or flexible prints, slippery plastics (PE or PP) ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…nts are poor candidates; no maker test data on PLA or PETG were found [uncertain]. Grades exist for metal repa…"*
- **tools**: drill and tap, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: seal a still joint
- **seal_material**: metal, plastic, fabric or a gap
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, clay or putty, carbon fibre or composites, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, holding_principle, making_tips_3d_printing, materials, processes, safety_notes

## 270 Glued joint design (butt, lap and scarf joints; peel vs shear)

*adhesives & bonding.* How the shape of a glued joint decides its strength, since most glues are strong in shear and weak when peeled or pulled straight apart

*Also covers:* Also covers bevelled seams in EVA foam, 12:1 scarf repairs in fibreglass and cored laminates, and plywood butt blocks.

### What it is

- **plain_name**: How to shape the faces you glue together so the glue is slid along (strong) rather than peeled or pulled straight apart (weak): overlap the parts, or cut long slanted ends, instead of just sticking two ends face to face
- **term**: Adhesive joint design (bonded joint geometry): butt, lap (overlap) and scarf joints; shear, tension, compression, peel and cleavage loading
- **aliases**: 
  - glued joint, bonded joint, adhesive joint, glue line or bondline (Henkel LOCTITE design guide; Wood Handbook)
  - butt joint, head-to-head joint, end-grain butt joint (Loctite manual; Wood Handbook)
  - lap joint, overlap joint, single lap joint, offset joint; half lap, end lap, cross lap (Henkel; Wikipedia 'Lap joint')
  - joggle lap joint; tapered or bevelled lap joint; double lap joint; double butt lap joint (3M; Loctite manual)
  - strap joint, single strap, double strap, recessed or bevelled double strap (Henkel; Loctite manual)
  - scarf joint, scarph joint, plain scarf, stepped scarf, stepped lap, landed scarf tongue and groove (Wikipedia 'Scarf joint'; 3M; Loctite manual)
  - fingerjoint (finger joint) for lengthening timber (Wood Handbook)
  - tongue-and-groove joint, cylindrical or slip joint, T-joint (3M; Henkel)
  - load types: shear, tensile (tension), compressive, peel, cleavage; tests: lap shear (ASTM D1002, ISO 4587), T-peel (ISO 11339), wedge (cleavage) test (Loctite manual)
  - hybrid joining (glue plus rivets, screws, spot welds or clinching) (Wikipedia 'Adhesive bonding')
- **family**: adhesives & bonding
- **other_families**: interlocking joints & joinery, print-in-place & 3D-printing joints
- **one_liner**: The rules for shaping a glued joint so that the glue is loaded in shear (the two faces sliding past each other) or compression over a wide area, and never peeled from one edge or split open like a wedge, because almost every glue is many times stronger in shear than in peel or cleavage.
- **complexity**: A few parts: the two pieces being joined, a layer of glue, and sometimes an extra part such as a strap (splice plate), dowel, peg, spline or rivet. The design choices are the joint shape (butt, lap, joggle lap, tapered lap, double lap, strap, scarf, stepped lap, tongue and groove), the overlap length and width, the glue-line thickness and how the load reaches the joint.
- **how_it_works**: Glue carries load best when the whole glued area shares it: sliding the faces past each other (shear) or pressing them together (compression) spreads the load over the joint, while peel (a flexible part lifted from one end, like tape) and cleavage (rigid parts levered open at one end) put almost all the load on the first thin line of glue, which tears and then 'unzips' along the joint (Henkel LOCTITE design guide; Loctite manual; Sika). A butt joint only has the small end area and puts the glue in tension, and any bending turns that into cleavage, so it is the weakest joint (Loctite manual; 3M). A lap joint gives much more area and loads the glue in shear, but the offset makes it bend, so the ends of the overlap carry most of the load and failure starts there in peel (Sika; Steven Abbott). A scarf joint cuts both parts on a long slant so the glue area is many times the cross-section and the load runs along the glue line in shear; that is why scarfed or finger-jointed wood can reach up to about 90% of the strength of solid wood while an end-grain butt joint reaches only about 25% (Wood Handbook).

### Finder attributes

- **job**: glue or bond: joins parts permanently with an adhesive, join and hold: the joint shape decides how strong and stiff the glued connection is
- **motion**: none
- **degrees_of_freedom**: 0: once the glue has cured the parts are fixed together
- **special_behaviour**: 
  - none: a glued joint has no mechanism; its 'clever' part is the geometry that turns peel and cleavage into shear and compression
  - self-aligning or self-centring (only for some shapes): tongue-and-groove, stepped lap and stepped scarf joints, pegs and landed scarfs locate the parts and can set the glue-line thickness, whereas plain butt, scarf and lap joints need a jig or clamps (Loctite manual joint suitability table; 3M; Prusa)
- **holding_principle**: material bond (glue), sometimes helped by shape (tongue and groove, stepped laps, dovetails, pegs) or by added fasteners (hybrid joining: rivets, screws, clinching)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: most structural glue joints can't be undone without damaging a part; cyanoacrylate can be dissolved with a debonder (Prusa gluing guide), and some glues are easier to remove than others (Wikipedia 'Adhesive bonding')
- **reuse_cycles**: once
- **tools_needed**: glue and mixing tools; clamps, clothes pegs, rubber bands or weights to hold the parts while the glue cures (Prusa); sandpaper and a solvent or soap to clean the faces (Prusa; Printables 'Glue strength test pieces'); for scarf joints in wood a plane, saw, router or scarfing jig to cut a long, even taper; shims or spacer beads to set glue-line thickness (Loctite manual)
- **seal**: none by design; a continuous, gap-free glue line with a water-resistant glue can also seal the joint (sealing is listed as a side benefit of bonding in Wikipedia 'Adhesive bonding'), but spot-glued joints do not seal
- **load**: From light to heavy depending on the glue, the area and the shape: strong in shear and compression, weak in tension across a butt joint, and weakest in peel and cleavage, where stress is concentrated at one edge (Henkel; 3M; Sika). Lap joints are strongest when forces are parallel to the parts and weak when bent (Loctite manual; Printpool). In wood, an end-grain butt joint reaches only about 25% of the wood's tensile strength, a good scarf, finger or lap joint up to about 90% (Wood Handbook). In plastics and 3D prints the part itself often breaks before a well-designed bond (Henkel).
- **adjustable**: no: position is fixed once the glue sets; only during the glue's working time (seconds for superglue, minutes to hours for epoxy and wood glue) can the parts be moved (Prusa)
- **play_and_precision**: None once cured. Accuracy depends on how the parts are located while the glue cures: plain butt, scarf and lap joints have no self-alignment, stepped laps and scarfs are better, and tongue-and-groove is best (Loctite manual joint suitability table); pegs or alignment pins help printed parts line up (Prusa; Printpool). The glue line must be even and the faces parallel, or the load goes off-axis and turns into cleavage (Loctite manual).
- **access_needed**: not applicable: glue goes on the mating faces before the parts are put together; clamping usually needs access to both sides of the joint
- **materials**: Applies to any glue and material. EVA foam (cosplay armour): the edges are cut at a bevel (an angle) before gluing with contact cement, so the pieces meet in a curve instead of a hard corner; on 10 mm foam the bevel 'creates a natural glue channel that strengthens the joint' (Costumary). Wood: long grain to long grain (edge-grain joints) bonds almost as strong as the wood, end grain soaks up glue and bonds poorly (Wood Handbook). Plastics and 3D prints (PLA, PETG, ABS/ASA, resin): usually stiffer glues (epoxy, superglue) on rigid parts; plastics are more flexible than metals, so flexible adhesives are generally recommended and joints should be designed against peel (Loctite manual 5.1.6; Henkel). Metals and composites: joggle, tapered, double-lap, strap and scarf joints (3M; Loctite manual). Hard-to-bond plastics such as PE, PP and silicone need special adhesives regardless of joint shape (see the adhesive entries).
- **maker_difficulty**: easy for lap, stepped-lap and pegged joints (easy to model in CAD or cut with hand tools); moderate for scarf joints, which need a long, accurate, flat taper (1 in 8 to 1 in 12 in wood) and a jig or careful planing

### Making it

- **processes**: 
  - 3D print (FDM): split large prints with lap, stepped-lap, tongue-and-groove or pegged glue faces instead of flat butt faces
  - 3D print (resin): the same joint shapes; superglue and epoxy bond resin prints
  - woodwork: scarf joints and finger joints to lengthen boards, half laps and edge-grain glue-ups
  - laser cut and CNC: slot-and-tab or stepped features that add glue area and locate the parts
  - sheet metal: joggle laps, straps and folded flanges bonded with structural adhesives
- **print_in_place**: no: glued joints are made from separate parts that are glued after printing
- **making_tips_3d_printing**: (1) Never rely on a flat butt joint between two printed faces: it has little area and loads the glue in tension, so it is the first to fail when knocked; use a lap joint, a tongue and groove (about twice the glue area of a simple lap and stronger in bending), a mortise and tenon or a dovetail, and round sharp corners, which act as stress raisers (Printpool). (2) Design so the joint is loaded in shear and compression, not peel: make the glued area wider rather than longer, because extra overlap length adds little strength while extra width adds strength almost in proportion (Henkel LOCTITE plastics guide; Sika). In plastics a long overlap is wasted: in one worked example of 1 in x 1/8 in plastic strips, an overlap of 0.58 in gave the same assembly strength as a longer one, because the plastic broke first (Henkel). (3) If you use a scarf in a plastic part, make the glued length at least four times the wall thickness (Loctite manual 5.1.6). (4) Add pegs or alignment pins so the parts line up and share the load (Prusa 'Modeling with 3D printing in mind'; Printpool). (5) Leave room for glue: for printed interlocking parts Formlabs suggests a 0.2 mm gap for small, thin parts and up to 0.4 mm for larger, chunkier ones (FDM needs more clearance than resin), and, if the parts are glued, CA or two-part epoxy applied thoroughly because some glue soaks into the print surface (Formlabs). Rigid glues are strongest in thin, even glue lines of about 0.02-0.2 mm (Loctite manual), so avoid big gaps filled with glue. (6) Surface preparation: make the faces clean and level, sand if needed and remove the dust, and press or clamp the parts together while the glue cures (Prusa gluing guide); one glue tester sands faces with 80-grit paper, washes them with soap and waits 5 days before testing (Printables 'Glue strength test pieces'). (7) Remember print direction: FFF prints are stronger in one direction than another (Prusa), so a glued joint can be stronger than the layers next to it; place split lines so the load does not pull the layers apart ⚑ [uncertain: layer-direction advice inferred from Prusa's general statement]. (8) Epoxy warms up as it cures and can distort thin prints, so allow a slightly looser fit (Printpool). (9) For permanent, strong assemblies, let the joint shape carry the load and use the glue mainly to stop it loosening (Printpool). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Adhesives (two-part epoxy, cyanoacrylate with activator and debonder, PVA wood glue, polyurethane, structural acrylic; see the adhesive entries); dowels, biscuits, splines and alignment pins to add shape and area; splice plates or straps for strap joints; clamps (bar, spring, F-clamps), clothes pegs and rubber bands (Prusa); scarfing jigs and guides for planes, routers and saws (woodwork); shims or glass spacer beads to control glue-line thickness (Loctite manual); rivets, screws and clinch tools for hybrid joints (Wikipedia 'Adhesive bonding').
- **rules_of_thumb**: 
  - Maximise shear and compression and minimise peel and cleavage: in peel and cleavage the stress sits at one end of the bond line, while in shear both ends resist it (Henkel, The LOCTITE Design Guide for Bonding Plastics, Vol. 6, p. 79, https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf; Sika, General Guideline Structural Bonding, 2022, sections 2.2-2.3, https://industry.sika.com/dam/dms/global-industry/b/general-guidelinestructuralbonding.pdf; 3M Technical Bulletin 'Joint Design for Structural Adhesives', 2017, https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf).
  - 'Wider is better': increase joint width rather than overlap, because the ends of the overlap carry most of the load; a much longer overlap adds little if any strength (Henkel guide p. 79). Strength rises linearly with width but less and less with overlap, especially with rigid glues; two joints of equal area bonded with the same rigid epoxy differed by more than 10 MPa, the wider one being stronger (Sika, section 2.4 and Fig. 11).
  - In plastic lap joints, stress concentration at the overlap ends falls with a shorter overlap (maximum stress ratio 22.5 at 1 in, 13.0 at 0.5 in, 7.17 at 0.25 in, 3.78 at 0.125 in), with a softer adhesive (22.4 at 300,000 psi modulus down to 1.13 at 200 psi) and with a thicker bondline (18.4 at 0.001 in down to 3.06 at 0.040 in) (Henkel guide p. 80, tables based on 0.125 in plastic, 0.5 in overlap, 100 lb load).
  - Glue-line thickness: for rigid adhesives 0.02-0.20 mm, optimum about 0.1 mm; thicker gaps usually lower strength (Loctite 'Gap requirements for bonded assemblies', https://www.loctitex.com/en/manuals/bonding/5.2.1.1-gap-requirements-for-bonded-assemblies/); 3M gives typically 0.1-0.5 mm depending on the joint (3M bulletin); for stiff structural wood adhesives the strongest bonds are 0.08-0.15 mm (Wood Handbook ch. 10, p. 10-17).
  - Wood end-grain butt joints reach only about 25% of the wood's tensile strength. To approach the strength of solid wood, a scarf or finger joint needs a glue area at least 10 times the cross-section, because wood is about 10 times stronger in tension than in shear; slopes of 1 in 12 or flatter give the highest strength, 1 in 8 is typical for structural plywood, and a well-made scarf, finger or lap joint can reach up to 90% of clear wood's tensile strength (USDA Forest Products Laboratory, Wood Handbook FPL-GTR-190, ch. 10, p. 10-18, https://research.fs.usda.gov/treesearch/download/37422.pdf). Scarf tapers are generally cut at 1:8 to 1:10, and vintage aircraft restorations need no steeper than 1:8 (Wikipedia 'Scarf joint', https://en.wikipedia.org/wiki/Scarf_joint).
  - Clamping pressure for wood: about 0.7 MPa (100 psi) for low-density woods, up to 1.7 MPa (247 psi) for the densest; too much pressure squeezes out or drives in the glue and leaves a starved joint (Wood Handbook ch. 10, p. 10-16).
  - A datasheet shear strength is only a starting point: in Sika's worked example a 28 MPa epoxy was reduced to an allowable 3 MPa after factors for 70 °C service temperature (x0.58), three months' water immersion (x0.94), two million fatigue cycles (x0.39) and a safety factor of 2 (Sika, section 2.5 'Dimensioning with material reduction factors').
  - A single lap joint bends under load; reduce the end stress peaks with tapered (bevelled) ends, a joggle that brings the loads into line, a double lap or a double strap; use a scarf or stepped lap to make the stress even (Sika sections 2.3-2.4; 3M bulletin; Loctite manual 5.1.3.11-5.1.3.13, https://www.loctitex.com/en/manuals/bonding/5.1.3.11-joggle-lap-joint/). For thin plastic parts the double strap is one of the most effective joints, with straps of similar material and thickness (Loctite manual 5.1.6, https://www.loctitex.com/en/manuals/bonding/5.1.6-joints-with-plastic-and-elastomeric-substrates/).
  - Avoid butt joints on rods and tubes; use a sleeve, socket or overlapping (slip) joint that adds bonded area and bending strength (Loctite manual 5.1.5, https://www.loctitex.com/en/manuals/bonding/5.1.5-cylindrical-substrates/; 3M bulletin).
  - The standard lap-shear test mostly fails by peel at the ends of the overlap, and above a minimum overlap its length makes no difference to the breaking force (Steven Abbott, Practical Adhesion Science, https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php).
  - Repairing a fibreglass or other laminate (scarf repair): grind the edge of the damaged area to a long slant of at least 12:1 (scarf length to laminate thickness), give the repair a rounded outline with no sharp corners, where stress concentrates, and build the patch up to the same thickness as the original laminate so it is just as stiff and doesn't crack round the edge; on a cored (sandwich) panel the 12:1 slope applies to both skins (Epoxyworks 'Common errors in fiberglass laminate repair'; West System 'Determining laminate thickness').

### When to use it

- **everyday_examples**: 
  - sticky tape, which is hard to slide off a surface (shear) but peels off easily when lifted from one corner (peel)
  - finger-jointed and scarf-jointed timber and plywood, made by gluing long slanted ends together (Wood Handbook)
  - car windscreens and body parts, which are bonded to the car body with adhesives (Wikipedia 'Adhesive bonding')
  - a large 3D print split into pieces and glued back together, ideally with pegs and overlapping joints (Prusa; Printpool)
  - plywood boat panels joined end to end with a glued plywood butt block (a strap joint) on one side and glass cloth on the other, as in stitch-and-glue boats (Duckworks stitch-and-glue skiff)
- **when_to_use**: Whenever you glue parts that must carry load: splitting a 3D print that is too big for the printer, lengthening a board or strip, repairing a broken part, joining thin sheets, or bonding different materials that can't be screwed or welded. Choose a lap, double lap or strap joint for thin parts; a scarf or finger joint to lengthen wood, plywood or composite with an almost invisible glue line; tongue and groove or stepped laps when the parts must also locate themselves; and sockets or sleeves for rods and tubes. Glue spreads the load over the whole area without drilling holes, and can seal and damp at the same time (Wikipedia 'Adhesive bonding'; Loctite manual).
- **when_not_to_use**: Don't design a glued joint that will be peeled, levered open, or bent across a butt joint: redesign it into a lap, sleeve or strap, or add a mechanical fastener (Sika; Loctite manual). Don't glue when you need to take it apart again: use screws, snap fits or interlocking joints instead (Printpool). Don't rely on glue alone where failure would be dangerous (overhead loads, anything that holds people) or where it will get hot: glue strength drops with heat and ageing (Sika) and some glues creep (Wikipedia 'Adhesive bonding'); combine glue with rivets, screws or clinching (hybrid joining). Don't glue end grain to end grain in wood and expect strength; use a scarf, finger joint, dowel, mortise and tenon or biscuit (Wood Handbook). Hard-to-glue plastics (PE, PP, silicone) need a special adhesive or a mechanical joint.
- **environment_limits**: Heat: adhesive strength and stiffness change with temperature; in Sika's example an epoxy kept only 58% of its room-temperature strength at 70 °C, and service temperatures from -20 °C to 80 °C can shift strength well away from datasheet values (Sika). Water and ageing: temperature, humidity, chemicals, radiation and mechanical stress all age bonds (Wikipedia 'Adhesive bonding'); in Sika's test three months under water kept 94% of the strength. Wood movement: wood swells far more across the grain than along it, so end-to-edge-grain joints build up large internal stresses as moisture changes and should be protected from changes in moisture content (Wood Handbook). Fatigue: repeated loading greatly lowers the usable strength (Sika: to 39% for two million cycles). Creep: some adhesives slowly creep under constant load (Wikipedia 'Adhesive bonding'). Differential expansion between different materials stresses the glue line; flexible adhesives cope better (Wikipedia 'Adhesive bonding'; Loctite manual).
- **safety_notes**: Glue and solvent fumes: some adhesives, cleaning solvents and primers are hazardous and need proper handling and ventilation (Wikipedia 'Adhesive bonding'); don't breathe superglue fumes (Prusa). Superglue bonds skin in seconds, so wear gloves (Printpool), and it can react hot with cotton or wool, in extreme cases burning a hole and giving off smoke (Prusa). Epoxy gives off heat as it cures (Printpool). Structural safety: a glued joint that looks fine can fail suddenly in peel or after heat, damp or fatigue, and bonded joints can't be fully checked without breaking them (Wikipedia 'Adhesive bonding'); don't trust a glued joint alone with heavy or overhead loads.
- **common_failures**: (1) Peeling or cleaving from one edge: a flexible part or a lever loads one edge; redesign to shear, stiffen the parts, taper the edges or add a fastener at the edge (Henkel; Sika; Loctite manual). (2) Butt joint snaps when bent or knocked: add area and shape (lap, tongue and groove, dowel, sleeve) (Loctite manual; Printpool). (3) Joint fails at the ends of a long, narrow overlap: make it wider rather than longer (Henkel; Sika). (4) Starved or thick glue lines: too much clamping pressure squeezes the glue out; too little or rough, badly fitting faces leave thick, weak, bubbly glue lines (Wood Handbook; Loctite manual). (5) Poor surface preparation: dust, grease, paint or old glue on the faces (Prusa). (6) End grain soaks up the glue (over-penetration), so the joint is weak (Wood Handbook). (7) The part breaks next to the glue line: in plastics and prints the substrate is often weaker than a good bond (Henkel), so strengthen the part or move the joint. (8) Parts moved during superglue's short setting time, which weakens the bond; clean off and start again (Prusa). (9) Failure after heat, water or many cycles because the datasheet strength was used without safety factors (Sika).
- **related**: 
  - Two-part epoxy, cyanoacrylate (superglue), PVA wood glue, polyurethane glue, structural acrylic and the other adhesive entries: the glue itself; this entry is about the shape of the joint that any of them goes into
  - Butt and lap wood joints (screwed, pocket-hole, half-lap): the same basic shapes held by screws as well as, or instead of, glue
  - Dowel and biscuit joints: add shape and glue area to a weak butt joint in wood
  - Finger joint (box joint) and dovetail joint: interlocking shapes with far more glue area than a butt joint
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): printable shapes that locate and help carry load in glued prints
  - Solvent welding (solvent cement): melts plastic faces together; the same shear-not-peel rules apply
  - Double-sided foam tape: a pressure-sensitive adhesive that is very sensitive to peel; the same design rules apply
  - Clinching and rivets: mechanical joints often combined with glue in hybrid joints to stop peel at the edges
  - Glued tab joint: the paper-and-card lap joint, a folded flap glued behind the next part
  - Glue stick and starch paste: mild water-based glues for paper and card joints
  - V-groove fold: a one-piece mitred corner, grooved and folded and then glued, instead of two bevelled pieces
  - Score-and-slip join: soft clay joined with slip, so the clay itself grows together instead of a glue line
  - Bonded tube joint: sockets, sleeves and lugs that apply the 'no butt joints on tubes' rule to glued tubes
  - Fillet-and-tape joint: panels joined edge to edge by an epoxy fillet and glass tape, the strap idea applied to boat and box seams

### Pictures, videos and models

- **links**: 
  - [Joint Design for Structural Adhesives, Technical Bulletin (3M, November 2017)](https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf): Drawings of lap, joggle lap, tapered lap, double butt lap, double scarf lap, angle, butt, tongue-and-groove, cylindrical, corner and stiffener joints, rated good or fair for different loads *(licence: link only)*
  - [Woodworking-joint-scarf.gif (Wikimedia Commons, SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif): Diagram of a plain scarf joint joining two boards end to end on a long slant *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licensed))*
  - [Woodworking lap joints.svg (Wikimedia Commons, Fred the Oyster)](https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg): Half lap, mitred half lap, cross lap and dovetail lap joints *(licence: CC BY-SA 4.0)*
  - [Lap Shear Doesn't Measure Shear (Steven Abbott, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=n0LNrwTk9MQ): Explanation, with an interactive model, of why a lap joint fails by peel at the ends of the overlap *(licence: link only)*
  - [Shear Strength Adhesive Testing (LOCTITE North America, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=3_9HR64bVus): Manufacturer's video of lap-shear testing of bonded joints *(licence: link only)*
- **make_it_yourself**: 
  - [Lap Joint Models: Kendall & Goland-Reissner (Practical Adhesion Science, Prof. Steven Abbott)](https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php): Free interactive web app: enter the thickness and stiffness of the parts and the glue, the overlap and the width, and see where the shear and peel stresses peak along a lap joint *(licence: link only)*
  - [Glue strength test pieces by MethodicalMaker (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable shear, tensile and torque test pieces for comparing glues on 3D prints, with the author's method (80-grit sanding, washing, clamping, 5 days' cure, hanging scale with peak hold) *(licence: CC BY)*
  - [Glue Adhesion Strength Tester by TinkerTiger (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/327466-glue-adhesion-strength-tester): Two printed testers glued face to face and pulled apart with a luggage scale; print flat or on the side to test different directions *(licence: CC BY-SA)*
  - [Glue Test Strips by kaje (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30133-glue-test-strips): Printed strips with a flat face and nesting hemispheres for comparing glues on PLA by flat versus shaped joints *(licence: CC0 / Public Domain)*
- **diagram_idea**: Four small side-view panels of the same glued strip being loaded: shear (arrows along the joint, glue stress shown evenly spread with small peaks at the ends), tension across a butt joint, cleavage (rigid parts levered open at one end) and peel (a flexible strip lifted like tape), each with a red bar showing where the glue stress piles up; below, the fixes: butt joint to lap, lap to tapered or joggle lap, and a long 1-in-10 scarf.
- **sources**: 
  - https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf (Henkel, The LOCTITE Design Guide for Bonding Plastics, Vol. 6, 'Adhesive Joint Design' pp. 77-81)
  - https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf (3M Technical Bulletin 'Joint Design for Structural Adhesives', 2017)
  - https://industry.sika.com/dam/dms/global-industry/b/general-guidelinestructuralbonding.pdf (Sika Services AG, 'General Guideline Structural Bonding', July 2022, version 2)
  - https://www.loctitex.com/en/manuals/bonding/5.1-adhesive-joint-design/
  - https://www.loctitex.com/en/manuals/bonding/4.4-stresses-on-joints/
  - https://www.loctitex.com/en/manuals/bonding/4.4.1-shear-stress/
  - https://www.loctitex.com/en/manuals/bonding/4.4.4-peel-stress/
  - https://www.loctitex.com/en/manuals/bonding/4.4.5-cleavage-stress/
  - https://www.loctitex.com/en/manuals/bonding/5.1.3.1-head-to-head-or-butt-joints/
  - https://www.loctitex.com/en/manuals/bonding/5.1.3.2-scarf-joint/
  - https://www.loctitex.com/en/manuals/bonding/5.1.3.10-overlap-joint/
  - https://www.loctitex.com/en/manuals/bonding/5.1.3.11-joggle-lap-joint/
  - https://www.loctitex.com/en/manuals/bonding/5.1.3.13-double-lap-joint/
  - https://www.loctitex.com/en/manuals/bonding/5.1.5-cylindrical-substrates/
  - https://www.loctitex.com/en/manuals/bonding/5.1.6-joints-with-plastic-and-elastomeric-substrates/
  - https://www.loctitex.com/en/manuals/bonding/5.2.1-summary-of-suitability-of-common-bonded-joint-types/
  - https://www.loctitex.com/en/manuals/bonding/5.2.1.1-gap-requirements-for-bonded-assemblies/
  - https://research.fs.usda.gov/treesearch/download/37422.pdf (Frihart and Hunt, 'Adhesives with Wood Materials: Bond Formation and Performance', Wood Handbook FPL-GTR-190, 2010, ch. 10)
  - https://en.wikipedia.org/wiki/Scarf_joint (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Butt_joint (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Lap_joint (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Adhesive_bonding (read as raw wikitext)
  - https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://www.printpool.co.uk/articles/how-to-join-and-bond-3d-printed-parts
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif
  - https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg
  - https://www.youtube.com/watch?v=n0LNrwTk9MQ (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=3_9HR64bVus (verified via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables models 236948, 327466, 30133, 32037 and 1352973 read via the public API)
  - https://www.costumary.com/blog/eva-foam-clean-builds
  - https://www.epoxyworks.com/common-errors-in-fiberglass-laminate-repair/
  - https://www.westsystem.com/determining-laminate-thickness/
  - https://duckworksmagazine.com/05/articles/s-and-g/index.htm

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest
- **bonds_well**: wood, foam
- **bonds_poorly**: PLA, PETG, ABS or ASA, slippery plastics (PE or PP), silicone, metal
- **tools**: press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, paper or card, foam, clay or putty, carbon fibre or composites

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing

## 297 Hand-mouldable thermoplastic (polycaprolactone)

*adhesives & bonding.* Plastic pellets that go soft in hot water at about 60 °C, are shaped by hand into grips, fixings or repairs, set hard as they cool, and can be reheated and reused

*Also covers:* Sold as Polymorph (brand) and similar

### What it is

- **plain_name**: Plastic beads you drop into hot water until they turn clear and go soft like warm putty, then squash together and shape by hand into a grip, bracket, clip or repair around the parts you want to hold; as it cools it sets hard and tough, and dropping it back into hot water softens it again so you can reshape or reuse it
- **term**: Hand-mouldable low-temperature thermoplastic (polycaprolactone, PCL)
- **aliases**: 
  - polycaprolactone, PCL, caprolactone polymer (Wikipedia; Perstorp Capa data sheets; Preproom)
  - mouldable or moldable plastic, hand-moldable plastic, low-temperature thermoplastic beads or pellets, thermoplastic beads (Adafruit; Polly Plastics; Easy Composites)
  - 'smart plastic' or 'smart polymer', as it is often called in UK school design and technology (Preproom; Kitronik)
  - Polymorph (brand), InstaMorph (brand), ShapeLock (brand), Friendly Plastic (brand), Plastimake (brand); Wikipedia also lists Re-Form, Polydoh, NiftyFix, Protoplastic, ReMoldables, Plastdude and TechTack (brands)
  - Mouldphorm (brand; Easy Composites), Polly Plastics moldable plastic (brand), Thermoworx (brand of colour pigments for it; Kitronik)
  - Capa 6500 and Capa 6800 (brands; industrial PCL grades from Perstorp, now Ingevity, sold as about 3 mm pellets; Adafruit links the Capa 6800 data sheet for its hand-moldable plastic)
  - PCL filament or 3D-pen filament (the same plastic as filament; Printables 'PCL (Polycaprolactone) Material Profile')
- **family**: adhesives & bonding
- **other_families**: locating & alignment, welding, brazing & soldering
- **one_liner**: A tough plastic (polycaprolactone) that softens in hot water at about 60 °C, so you can shape it by hand into grips, brackets, clips, moulds and repairs that lock round other parts as they cool, then reheat it later to adjust or reuse it.
- **complexity**: Single piece: one material, usually sold as pellets about 3-3.5 mm across (Perstorp Capa 6800 data sheet; Wikimedia Commons 'PCL beads'), and also as sheets, strips, colour pellets and filament (Polly Plastics FAQ; Printables). Helpers: a bowl or pan of hot water (or a heat gun or hair dryer), tongs or a spoon, parchment paper or glass to work on, scissors to trim it while warm (Polly Plastics instructions; Adafruit Learn edge-guard guide).
- **how_it_works**: Polycaprolactone is a semi-crystalline plastic whose crystals melt at about 58-62 °C (Perstorp Capa data sheets; Wikipedia). In water hotter than that, the white pellets turn clear and stick to each other, forming a putty-like lump that can be handled because its specific heat and thermal conductivity are low (Wikipedia; Easy Composites). As it cools, the crystals form again (around 25-27 °C in Perstorp's DSC test) and it turns opaque white, hard and tough, keeping whatever shape it was pressed into (Perstorp Capa properties sheet; Easy Composites). It holds parts mainly by its shape, moulded round, through or into them, and while hot it also sticks like a hot-melt glue to itself and to some plastics such as ABS, acrylic, PVC and polycarbonate (Polly Plastics FAQ; Wikipedia). Nothing cures chemically, so reheating softens it again for adjusting, removing or reusing (Kitronik; Easy Composites).

### Finder attributes

- **job**: 
  - join and hold: moulded round or into parts to make custom brackets, mounts, clips, handles and repairs (Hackaday 'Polymorph In Practice'; Wikimedia Commons bike-light mount; Easy Composites)
  - glue or bond: while hot it sticks to itself and to some plastics like a hot-melt glue, so pieces can be fused together or built up (Polly Plastics FAQ; Wikipedia)
  - line parts up exactly: pressed against the real part or into a rail, it takes an exact negative shape, used for custom-fit seats, tool guards and temporary moulds (Hackaday wall-storage brackets; Adafruit Learn; Easy Composites)
- **motion**: none: a rigid but tough, slightly flexible solid once cool; it can only be changed by reheating it
- **degrees_of_freedom**: 0 once set: the parts it was moulded round or into are locked in place by its shape (and by its stickiness where it bonded)
- **special_behaviour**: 
  - none of the listed behaviours. Its own trick: it is reversible. Warming it back above about 60 °C softens it, so a fixing can be reshaped, removed or reused many times (Kitronik; Easy Composites; Preproom)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the plastic is moulded round, through or into parts and locks them in by its shape; a screw twisted into the soft plastic and backed out leaves a thread when it sets (Polly Plastics blog 'What Does Moldable Plastic Stick To?')
  - material bond (glue, solvent or melting): when hot it sticks to itself and to ABS, acrylic, polycarbonate, polyester, PVC and vinyl, but not to wood, nylon, polypropylene, silicone or PTFE (Polly Plastics FAQ)
  - friction or clamping (force-fit): a sleeve or clip moulded tightly round a tube or tool grips it as it cools and springs back slightly ⚑ [uncertain] *(⚑ parts need confirming)*
- **input_output**: not applicable
- **power**: passive (no power needed) once shaped. Heat is needed to shape it or undo it: water above about 62-65 °C, a heat gun or a hair dryer (Kitronik; Adafruit Learn; Polly Plastics FAQ).
- **removability**: removable: warm it again and it softens, so it can be peeled off and the plastic reused. If it has stuck to something by mistake, 're-heating it with a blow dryer or a heat gun and peeling it off' may remove it (Polly Plastics blog). Where it has fused onto ABS, PVC or acrylic, or onto paint or nail polish, removal can mark or lift the surface, so treat that as semi-permanent ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: many times: it 'can therefore be re-heated and thermoformed many times without deterioration' (Preproom) and 'can be melted and re-used indefinitely' (Easy Composites). Avoid overheating: Perstorp's safety data sheet warns of possible decomposition and release of monomer above 200 °C.
- **tools_needed**: Hot water in a bowl or pan (heated with a kettle, stove or microwave; a thermometer helps), tongs, a spoon or a fork to lift it out, and parchment paper or glass as a non-stick work surface. Optional: heat-resistant gloves, a heat gun or hair dryer for local reheating, scissors to trim it while warm, and cold water or a freezer to set it quickly. Afterwards it can be sanded, drilled, varnished or painted (Polly Plastics instructions; Preproom; Adafruit Learn).
- **seal**: loose: no sealing data were found. It is a water-resistant solid that can fill a gap, but hand-pressed PCL can trap small air bubbles and leave voids (Easy Composites), and PCL film lets water vapour through much more readily than it does oxygen (Perstorp Capa properties sheet). Don't rely on it as a sealant ⚑ [uncertain]. *(⚑ parts need confirming)*
- **load**: Light to medium. Cool PCL is tough and stretchy rather than stiff: Perstorp gives a yield stress of about 14-17.5 MPa, a tensile modulus of about 430-500 MPa, Shore D hardness 50-51 and a strain at break of over 700% (Capa 6500) to 920% (Capa 6800) (Perstorp Capa properties sheet). A school-supplier data sheet gives a tensile strength of 580 kg/cm² (about 57 MPa) (Preproom). Wikipedia describes it as 'a very tough, nylon-like plastic', and Adafruit says it has 'the feel and durability of polyethelene [sic]'. It is strongest where it wraps round and locks onto a part by shape, and weakest where it is only stuck to a surface (peel) or where it gets warm, because it softens well below its 60 °C melting point (maximum service temperature 45 °C; Easy Composites).
- **adjustable**: yes, by reheating: dip it back in hot water, or warm one area with a heat gun or hair dryer, and reshape it. After it comes out of the water you have 'several minutes' to shape it, and it hardens in about 10 minutes depending on size (Polly Plastics FAQ).
- **play_and_precision**: It takes the shape of whatever it is pressed against, so it can give a snug, play-free seat, for example an edge guard formed on the actual chisel (Adafruit Learn). But hand shaping is imprecise, and it can trap small air bubbles, so fine surface detail is unreliable (Easy Composites). In one project a bracket moulded separately wiggled in its dovetail rail, so the maker moulded the rail part directly in the box's rail for 'a much higher degree of accuracy' (Hackaday 'Direct, Wall-Mounted Storage With Lasers And Polymorph').
- **access_needed**: one side only (blind) for most jobs: the soft plastic is pressed into a hole, slot or rail, or onto a surface, from the side you can reach. Wrapping it right round a tube, handle or edge needs access all the way round (Wikimedia Commons bike-light mount; TechACCESS utensil guide).
- **materials**: Made of polycaprolactone (PCL), a biodegradable polyester (Wikipedia; Polly Plastics FAQ). When hot it sticks to itself and to ABS (LEGO), acrylic, polycarbonate, polyester, PVC and vinyl (Polly Plastics FAQ), and also to PET, polystyrene, fabrics, metal and nail polish (Polly Plastics blog). It won't attach to wood, nylon, polypropylene, silicone or Teflon (PTFE), and doesn't stick to parchment paper, cling film or glass (Polly Plastics FAQ and blog). Most PU, polyester and epoxy resins release from it, so it makes temporary moulds for resin casting (Easy Composites). For 3D prints: ABS and ASA, and PETG (a polyester), should take a hot bond, but no tests on PLA or PETG prints were found, and nylon and PP prints won't bond ⚑ [uncertain]. To fix cooled PCL to materials it doesn't stick to, use superglue (cyanoacrylate) or epoxy, or drill it and use screws (Polly Plastics FAQ). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: you need no special tools beyond hot water and tongs. The main skills are letting every pellet turn fully clear, squeezing out trapped water, and shaping it before it cools (Polly Plastics instructions; Adafruit Learn; Easy Composites).

### Making it

- **processes**: 
  - off-the-shelf part: pellets, sheets, strips and colour pellets (Polly Plastics; Kitronik; Easy Composites)
  - hand moulding: shaped by hand, pressed into moulds, or formed onto the parts it will hold or onto a body part with a release film (Polly Plastics; Easy Composites)
  - laser cut: laser-cut plywood or acrylic moulds to press it into, as in Hackaday's wall-storage brackets
  - 3D print (FDM): PCL filament itself prints at about 112-115 °C (Printables 'PCL (Polycaprolactone) Material Profile'), and moulded PCL grips, pads and mounts can be added to printed parts ⚑ [uncertain]
  - woodwork and CNC: once cool it can be sanded, drilled and machined like other soft thermoplastics, but only slowly or with cooling, because friction heat softens it (Polly Plastics; Easy Composites) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a separate material shaped by hand after printing. PCL filament can itself be 3D printed (Printables PCL material profile), but nothing about this connection prints in place.
- **making_tips_3d_printing**: 1) Use it alongside prints for the jobs a printer is bad at: custom-fitted handles and grips, cradles that must match an odd-shaped object, quick repairs, and one-off brackets. Design the printed part with holes, slots or undercuts for the PCL to flow into, so it locks in by shape rather than relying on stickiness ⚑ [uncertain]. 2) Heat it in water above about 62 °C (Kitronik), e.g. about 65 °C or 150 °F (Adafruit Learn). Boiling water isn't needed and is a scald risk (Preproom). Wait until every pellet is clear; a big batch can cool small amounts of water below 62 °C, so add or change the water (Easy Composites). 3) Lift it out with tongs, knead it into one lump and squeeze out the water: pockets of hot water trapped between pellets can burn (Hackaday reader comment) and leftover water rusts steel tools (Adafruit Learn). 4) Keep thin PLA prints out of very hot water and put only warm (60-65 °C) PCL onto them, because Prusa lists 'low UV and temperature resistance' as a PLA weakness ⚑ [uncertain]. 5) Bonding to prints: hot PCL sticks to ABS, acrylic, polycarbonate and polyester plastics but not to nylon or polypropylene (Polly Plastics FAQ). It hasn't been tested on PLA or PETG prints, so add superglue or epoxy, or shape it to lock mechanically ⚑ [uncertain]. 6) Printed moulds: press the soft plastic in (it is too thick to pour; Easy Composites) and coat the mould lightly with vegetable spray so the part releases (Polly Plastics FAQ). 7) Threads and screw holes: twist a screw into the soft plastic and back it out to leave a thread (Polly Plastics blog), or drill slowly once it is cool, since power tools can heat it until it softens (Easy Composites). 8) Printing PCL filament: one maker's working settings were nozzle 112-115 °C, bed 57 °C, PVA glue stick, cooling 60-100%, minimum layer time about 40 s and minimum speed 10 mm/s, with the slicer material type set to 'FLEX'. The profile uses special start and end G-code to allow 'cold extrusion'. Bridging is very poor and edges tend to warp (Printables 'PCL (Polycaprolactone) Material Profile', CC BY-SA). 9) Keep finished assemblies below about 45 °C (Easy Composites) and out of hot cars (Polly Plastics). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'polymorph pellets', 'mouldable (moldable) plastic pellets', 'low temperature thermoplastic beads' or 'polycaprolactone (PCL) pellets/granules'; brands include Polymorph, InstaMorph, ShapeLock, Friendly Plastic, Plastimake and Mouldphorm (Wikipedia; Easy Composites; Adafruit). Also 'moldable plastic sheets' and 'strips' (e.g. Polly Plastics sheets 8 x 12 x 1/16 in, brand), colour or pigment pellets (Thermoworx, Polly Plastics, InstaMorph Pigment Pack, brands), 'PCL filament' or '3D pen PCL filament', and the industrial grades Capa 6500 and Capa 6800 (brands) (Polly Plastics FAQ; Kitronik; Printables; Perstorp data sheets).
- **rules_of_thumb**: 
  - Melting range 58-62 °C: Capa 6800 data sheet 58-60 °C, Perstorp properties sheet 60-62 °C, Easy Composites and Kitronik 62 °C, Wikipedia about 60 °C. Use water a little above this, about 65 °C or 150 °F (Adafruit Learn; Polly Plastics); boiling water is not needed (Preproom).
  - It is ready when fully clear: the pellets change from white to transparent and stick together; if they don't melt, add hotter water (Easy Composites; Adafruit Learn).
  - Working time: several minutes after it comes out of the water; it hardens in about 10 minutes depending on size, faster in cold water or a freezer (Polly Plastics FAQ and instructions).
  - For a thin wrap-round shell such as a tool edge guard, stretch it to about 3 mm (1/8 in) thick (Adafruit Learn).
  - Keep finished parts below about 45 °C (Easy Composites, maximum service temperature) and away from very hot places such as a car interior on a hot day (Polly Plastics).
  - Never heat it above about 200 °C: decomposition temperature 200 °C and flash point 275 °C (Perstorp Capa 6800 MSDS; Easy Composites SDS: decomposition >200 °C).
  - Typical properties (Perstorp Capa 6500/6800, ASTM D412): yield stress 14-17.5 MPa, modulus 430-500 MPa, strain at break >700-920%, Shore D 50-51, crystallinity 56%, glass transition about -60 °C (Perstorp Capa properties sheet).
  - Density about 1.1-1.145 g/cm³, so it sinks in water (Perstorp MSDS; Easy Composites; Preproom). As a guide to quantity, 250 g fills a regular coffee mug (Kitronik).

### When to use it

- **everyday_examples**: 
  - A home-made bicycle light mount moulded to fit the handlebar (Wikimedia Commons 'Shapelock bike light')
  - A thick, finger-shaped grip moulded onto a spoon for someone who finds thin handles hard to hold, made by occupational therapists (TechACCESS of Rhode Island)
  - Snug edge guards for chisels and other sharp tools (Adafruit Learn)
  - Radiotherapy masks, pressed to fit a patient's face while warm, are commonly made of PCL (Scientific Reports, 2021)
- **when_to_use**: Use it when you need a one-off part shaped to fit something awkward, quickly and without CAD: a handle or grip moulded to your hand, a bracket or clip moulded round a tube, cable or gadget, a cradle that matches an odd shape, a missing knob, a tool guard, or a quick robot part (Hackaday; Adafruit; Preproom: 'ergonomic products such as hand tools and component mountings'). It also suits temporary moulds for casting PU, polyester or epoxy resin, because most resins release from it without wax (Easy Composites), and prototypes you may want to change later, because you can reheat and reshape it (Kitronik). It is safe enough for school use and craft work at its low working temperature (Preproom).
- **when_not_to_use**: Avoid it anywhere that gets warmer than about 45 °C, such as a car in summer, near motors, lamps or hot drinks, or in a dishwasher. It softens and loses its shape there (Easy Composites; Polly Plastics), so use a heat-resistant print (PETG, ASA), epoxy putty or metal instead. It is too soft for stiff, heavily loaded or precision parts (modulus only about 0.5 GPa; Perstorp), so use a 3D print, a metal bracket or a proper fastener. Don't use it as a waterproof seal; use silicone or MS-polymer sealant or epoxy putty. It won't stick to wood, nylon, polypropylene, silicone or PTFE (Polly Plastics FAQ), so for those use mechanical fixing, superglue or epoxy. Avoid it where fine surface detail matters (air bubbles; Easy Composites), and don't use it for food-contact or medical-internal uses, since it is non-toxic but not FDA-approved for those (Polly Plastics FAQ).
- **environment_limits**: Heat: it melts at about 58-62 °C and has a maximum service temperature of 45 °C (Easy Composites), so it can soften in a hot car (Polly Plastics). Cold: its glass transition is about -60 °C (Perstorp), so it should stay tough rather than brittle in normal freezing weather ⚑ [uncertain]. Water: it is handled in water and doesn't dissolve, but it is biodegradable; bacteria and fungi break it down in soil and compost (Wikipedia; Preproom: 'Biodegradable in soil'), and it hydrolyses slowly, more slowly than polylactide (Wikipedia). Chemicals: it dissolves in several common solvents (Capa 6800 data sheet; Wikipedia mentions chloroform), and Perstorp's safety data sheet says to avoid contact with acids and bases. UV: no data were found ⚑ [uncertain]. Creep: it is soft and only about 35-40 °C below its melting point at room temperature, so it may slowly deform under a constant load; no creep data were found ⚑ [uncertain]. Shelf life: Kitronik says it 'has no shelf-life'. *(⚑ parts need confirming)*
- **safety_notes**: Scalds and burns are the main hazard. Don't put your hands into hot water; lift the plastic out with tongs (Easy Composites; Adafruit Learn), and use monitored water at about 60-65 °C rather than boiling water (Preproom). If the plastic is 'much above 62°C', let it cool slightly before handling (Easy Composites). Overheated PCL becomes 'a sticky treacle-like mass' that can burn (Preproom), and hot water trapped inside a lump of pellets can leak out and burn your hand (Hackaday reader comment). Preproom (a school science-technician site) says it should never be moulded round parts of the body in school because of the risk of it hardening in place, while Easy Composites sells it for moulding body parts with cling film over the skin to stop it sticking to hairs. Treat skin moulding as an adult, supervised job ⚑ [uncertain]. The pellets are a choking hazard for children under 3, and children under 7 should be supervised (Polly Plastics). Preproom advises against heating it in a microwave; Adafruit and Polly Plastics use the microwave only to heat the water. Overheating above 200 °C can release caprolactone monomer, and burning gives off carbon monoxide (Perstorp Capa 6800 MSDS). It is sold as non-toxic, but Polly Plastics has 'not sought FDA approval for food contact or internal use' (Polly Plastics FAQ). *(⚑ parts need confirming)*
- **common_failures**: Lumpy, grainy or weak parts because some pellets never went fully clear: wait until all are transparent, and add hotter water if a big batch cooled it (Easy Composites; Adafruit Learn). Trapped water, which makes hot pockets, voids and rust on steel tools: knead with tongs first, squeeze the water out, and dry and oil tools before fitting a guard (Hackaday reader comment; Adafruit Learn). Plastic sticking to the work surface, bowl, utensils or nail polish: work on parchment paper, cling film or glass (Polly Plastics). Parts that won't stay on wood, nylon, PP or silicone: lock them on by shape, or use superglue, epoxy or screws (Polly Plastics FAQ). A bracket that wobbles: mould it directly against the real part or rail instead of separately (Hackaday wall-storage brackets). Sagging or losing its shape in heat above about 45 °C (Easy Composites; Polly Plastics). Melting or smearing when drilled or sanded with power tools: go slowly and keep it cool (Easy Composites). Surface voids from trapped air: rough-mould it, then refine (Easy Composites). It is too hot and sticky to work when the water is far above 65 °C (Preproom).
- **related**: 
  - Hot-melt adhesive (glue gun): also a thermoplastic that bonds by melting (PCL grades such as Capa 6800 are used in adhesives), but it is applied from a gun as a bead of glue, not shaped by hand into a solid part
  - Epoxy putty (kneadable two-part putty): kneaded and shaped by hand too, but it cures permanently by chemical reaction, is harder and more heat-resistant, and can't be reshaped
  - Silicone and MS-polymer adhesive sealants, including mouldable silicone glue such as Sugru (brand): flexible, waterproof and cure in air, permanently; Adafruit describes hand-moldable plastic as 'lying somewhere between 3D Filament and Sugru'
  - Polymer clay: shaped by hand like PCL but set once by baking (listed under 'See also' on Wikipedia's PCL page)
  - 3D-printed custom mounts and brackets: more precise and more heat-resistant (PETG, ASA), but need CAD and a printer; PCL is quicker for a one-off shape that fits by hand
  - Heat staking (melted plastic rivet): also uses softened plastic to lock parts by shape, but melts a post on the part itself

### Pictures, videos and models

- **links**: 
  - [PCL beads.jpg (Wikimedia Commons, by Prosthetic Head / Crispin Cooper, 2019)](https://commons.wikimedia.org/wiki/File:PCL_beads.jpg): Close-up photo of polycaprolactone plastic beads about 3.5 mm across, as sold for industrial or hobby use *(licence: CC BY-SA 4.0)*
  - [Shapelock bike light.png (Wikimedia Commons, by Catsmeat, 2009)](https://commons.wikimedia.org/wiki/File:Shapelock_bike_light.png): A home-made front bicycle light mount moulded from polycaprolactone (ShapeLock) to fit the handlebar *(licence: Public domain)*
  - [Making Edge Guards for Hand Tools Using Hand-Moldable Plastic: Forming the Guard (Adafruit Learning System, Todd Treece, 2015)](https://learn.adafruit.com/hand-moldable-edge-guards/forming-the-guard): Step-by-step photos and short videos of heating the pellets until clear, stretching the lump into a 3 mm sheet, folding it over a chisel and trimming it *(licence: link only)*
  - [Working with Polymorph (YouTube, Daniel Wood)](https://www.youtube.com/watch?v=aW5kZTQP7v4): Video on using polymorph (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Working with Moldable Plastic - Heating (Polymorph, Instamorph) (YouTube, Cosplay Apprentice)](https://www.youtube.com/watch?v=s1OqZSYmStU): Video tip on heating moldable plastic for shaping (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Making Edge Guards for Hand Tools Using Hand-Moldable Plastic (Adafruit Learning System)](https://learn.adafruit.com/hand-moldable-edge-guards): A beginner project: mould a snug protective guard over a chisel edge from a handful of pellets, a microwave-safe bowl, tongs and scissors *(licence: link only)*
  - [How To: Make Your Own Built-Up Utensil Using Instamorph (TechACCESS of Rhode Island)](https://www.techaccess-ri.org/how-to-make-your-own-built-up-utensil-using-instamorph/): Photo guide from assistive-technology therapists for moulding a thick, finger-printed grip onto a spoon handle, with optional colour pellets *(licence: link only)*
  - [Direct, Wall-Mounted Storage With Lasers And Polymorph (Hackaday, 2013)](https://hackaday.com/2013/12/24/direct-wall-mounted-storage-with-lasers-and-polymorph/): Write-up of a maker pressing polymorph into laser-cut moulds and directly into a storage box's dovetail rail to make wall brackets; shows why moulding against the real part gives a better fit *(licence: link only)*
  - [PCL (Polycaprolactone) Material Profile (Sterling, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/68622-pcl-polycaprolactone-material-profile): A maker's slicer profile and test prints for printing PCL filament at 112-115 °C, with notes on cooling, bed adhesion and the custom 'cold-extrusion' G-code; scraps can be remelted in warm water. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: Three panels: white pellets in a bowl of 65 °C water turning clear; the soft clear lump being pressed by hand round a handlebar and a bike light; the cooled white bracket gripping both, with a curved arrow back to the bowl labelled 'reheat to reshape'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Polycaprolactone
  - https://cdn-shop.adafruit.com/product-files/2504/Perstorp_CAPA_6800_PDS.pdf
  - https://cdn-shop.adafruit.com/product-files/2504/Perstorp_Capa_6800_MSDS.pdf
  - http://www.rapstrap.com/TDS-CAPA6500.pdf
  - https://www.easycomposites.eu/mouldphorm-pcl-thermoplastic-granules
  - https://media.easycomposites.eu/datasheets/EC-SDS-Mouldphorm.pdf
  - https://www.preproom.org/equipment/printer-friendly.aspx?eqID=5105
  - https://kitronik.co.uk/products/smart-materials-range-polymorph
  - https://pollyplastics.com/pages/moldable-plastic-faq
  - https://pollyplastics.com/pages/moldable-plastic-instructions
  - https://pollyplastics.com/blogs/news/what-does-moldable-plastic-stick
  - https://www.adafruit.com/product/2504
  - https://learn.adafruit.com/hand-moldable-edge-guards
  - https://learn.adafruit.com/hand-moldable-edge-guards/forming-the-guard
  - https://www.techaccess-ri.org/how-to-make-your-own-built-up-utensil-using-instamorph/
  - https://hackaday.com/2010/01/19/polymorph-in-practice/
  - https://hackaday.com/tag/polymorph/
  - https://hackaday.com/2013/12/24/direct-wall-mounted-storage-with-lasers-and-polymorph/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC8516973/
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:PCL_beads.jpg
  - https://commons.wikimedia.org/wiki/File:Shapelock_bike_light.png
  - https://www.youtube.com/watch?v=aW5kZTQP7v4
  - https://www.youtube.com/watch?v=s1OqZSYmStU
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: fills gaps, can be undone
- **bonds_well**: PETG, ABS or ASA, acrylic or polycarbonate, PVC, metal, fabric or leather, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…on PLA or PETG prints were found, and nylon and PP prints won't bond [uncertain]. To fix cooled PCL to materi…"*
- **bonds_poorly**: PLA, nylon, slippery plastics (PE or PP), silicone, wood, paper or card, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…on PLA or PETG prints were found, and nylon and PP prints won't bond [uncertain]. To fix cooled PCL to materi…"*
- **tools**: heat gun, drill and tap, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, holding_principle, making_tips_3d_printing, materials, processes, removability, safety_notes, seal

## 391 Iron-on fusible web (heat-activated adhesive web, hem tape)

*adhesives & bonding.* A dry web or film of heat-melting glue laid between two fabrics and pressed with an iron so it melts and bonds them, for no-sew hems, appliqué and iron-on patches

*Also covers:* Also covers fusible interfacing and iron-on patches.

### What it is

- **plain_name**: A dry sheet or tape of glue that you lay between two pieces of fabric and press with a hot iron, so it melts and sticks them together: for hems with no sewing, fabric shapes stuck onto a quilt or bag, and iron-on patches
- **term**: Fusible web (heat-activated adhesive web, iron-on adhesive), including hem tape (fusible hemming web), fusible interfacing and iron-on patches
- **aliases**: 
  - fusible web, fusible webbing, iron-on adhesive, double-sided iron-on adhesive (Therm O Web; William Gee)
  - web adhesive, adhesive web, hot-melt web: the industrial name for 'hot melt adhesives that have been formed into a web-like, nonwoven material that handles like fabric' (Bostik)
  - paper-backed fusible web: the glue web on a release paper that you can draw your shape on (Vilene Bondaweb product text via William Gee; Therm O Web HeatnBond)
  - hem tape, hemming web, fusible hemming tape, hem repair tape: a narrow strip for no-sew hems (Wikipedia 'Hem'; William Gee)
  - fusible interfacing, iron-on interfacing, fusible interlining: a fabric with heat-activated glue on one side that stiffens or steadies another fabric (Wikipedia 'Interfacing'; onlineclothingstudy)
  - iron-on patch, iron-on badge, heat-activated patch backing (Wikipedia 'Embroidered patch')
  - 'sewable' or 'lite' web (holds pieces for stitching) versus 'no-sew' or 'ultra' web (permanent on its own) (Therm O Web)
  - polyamide (nylon), polyester and polyurethane web adhesives, named by base plastic (Bostik)
  - heat transfer vinyl (HTV), iron-on vinyl: a related decorative film with heat-activated glue, cut on a plotter and pressed onto T-shirts (Wikipedia 'Heat transfer vinyl')
  - brand names a beginner may search for: Bondaweb (brand) and Wonderweb (brand) from Vilene/Vlieseline, also searched as 'wundaweb' or 'wondaweb' (William Gee); HeatnBond (brand, Therm O Web); Steam-A-Seam (brand) (USU Extension; All About Quilts)
- **family**: adhesives & bonding
- **other_families**: knots, lashings & sewn joints
- **one_liner**: A thin, dry web or film of hot-melt glue, sold as sheets, tape or already on the back of interfacing and patches, that is laid between fabrics and pressed with an iron so it melts into both and sets as it cools, giving a no-sew hem, appliqué or patch.
- **complexity**: A few parts: the glue web (often on a paper backing), the two fabrics, and a hot iron with a pressing cloth or non-stick sheet. Fusible interfacing and iron-on patches carry their glue already coated on the back, so they are one piece plus the iron.
- **how_it_works**: The web is a hot-melt glue (thermoplastic) made into a fine non-woven mesh or film, usually polyamide, polyester or polyurethane, that turns soft and sticky when heated, typically somewhere between about 77 and 166 °C depending on the type (Bostik brochure). Heat from the iron passes through the fabric to the glue, pressure pushes the melted glue in among the fibres of both layers, and when it cools it sets again and locks them together (onlineclothingstudy, 'Fusing parameters'). Paper-backed webs are used in two steps: a short press fixes the web to the back of the first fabric, then the paper is peeled off and a longer press bonds it to the second fabric (Therm O Web; Vilene Bondaweb instructions via William Gee). Because the glue only melts and never cures chemically, enough heat for long enough can soften it again (Bostik brochure).

### Finder attributes

- **job**: 
  - glue or bond: melts a layer of glue between two fabrics, or between fabric and felt, leather, card or wood
  - join and hold: no-sew hems, appliqué shapes, iron-on patches and stiffening (interfacing) that stays put through wear and washing
- **motion**: none: the fused layers act as one piece of cloth, though the cloth itself still bends.
- **degrees_of_freedom**: 0: the two fabrics can no longer slide or lift apart where they are fused; the fused area stays flexible but slightly stiffer.
- **special_behaviour**: 
  - none: it is a plain glued joint. The one useful trick is that it can be placed and fused in seconds with no pins or stitching, and light 'sewable' webs act as temporary basting that holds pieces still while you stitch them (Therm O Web)
- **holding_principle**: material bond (glue, solvent or melting): a thermoplastic glue melts, flows into the fibres of both layers and sets on cooling (Bostik; onlineclothingstudy)
- **input_output**: not applicable
- **power**: passive (no power needed): the joint itself needs nothing once made; making it needs a hot iron or heat press.
- **removability**: permanent: no-sew webs are sold as 'Permanent' (Therm O Web UltraHold), and light 'sewable' webs are only meant to hold until the edges are stitched (Therm O Web Lite). Because the glue is a thermoplastic, reheating can soften it again (Bostik), so a patch can sometimes be lifted with heat, but glue stays in the fabric and the fabric may be marked ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: once: a fused piece is not meant to be taken apart and re-fused; makers advise avoiding 'repeated or excessive ironing to the area after fusing' (Therm O Web).
- **tools_needed**: A household iron (or a heat press), ironing board, scissors, and a pressing cloth, baking parchment or non-stick appliqué pressing sheet to keep glue off the iron (SparkFun; All About Quilts); a damp cloth for webs that call for it (Vilene Bondaweb); a sewing machine or needle when using a sewable web or finishing appliqué edges (Therm O Web Lite; USU Extension).
- **seal**: none: the web is a porous mesh and makes 'Breathable bonds' (Bostik); it is not a waterproof seam. For a sealed seam in coated fabric, use a heat-sealed seam or seam tape instead.
- **load**: Light. It holds hems, patches and appliqué against everyday wear and washing, with the glue spread over the whole area (good in shear along the cloth), but edges are where it gives way, which is why sewable webs 'must be sewn for permanent bond' and appliqué is normally finished by stitching around the shape (Therm O Web Lite; USU Extension). Wikipedia notes no-sew (threadless) hems 'are not common, and are often used only on a temporary basis' (Wikipedia 'Hem'). No published strength figures for hobby fusible webs were found ⚑ [uncertain]. Never use a fused joint for straps, handles or anything that holds a person; sew load-bearing joints. *(⚑ parts need confirming)*
- **adjustable**: no: once fused it is set. Some webs are slightly tacky before pressing so a shape can be placed and moved first (Steam-A-Seam, as described by All About Quilts), but after pressing the only way to move it is to reheat and peel it ⚑ [uncertain]. *(⚑ parts need confirming)*
- **play_and_precision**: not applicable
- **access_needed**: one side only (blind): the web sits between the layers and the iron presses from one face, though thick fabrics benefit from extra pressing from the back (Therm O Web Lite: 'Press thick fabrics an additional 2-4 seconds from the back of the project').
- **materials**: The web: polyamide (nylon) is common in craft webs (Bondaweb and Wonderweb are '100% Polyamide', William Gee); industrial webs also come in polyester and polyurethane (Bostik). Bonds well: cotton and most woven fabrics (the makers' times are given for cotton, Therm O Web), and, depending on the product, felt, suede, leather, foil, lamé, cardboard and wood (Therm O Web UltraHold), 'almost all fabrics, raffia and cardboard' and leather at lower temperatures (Vilene Bondaweb via William Gee). Matching the glue to the fabric helps: polyester webs suit polyester fabrics, polyamide webs bond better to nylon, and polyurethane webs bond to urethane foams, films, vinyl and synthetic rubber (Bostik). Avoid: 'acetates, pure silks or silicon-created fabrics' (probably silicone-finished ones), for which fusibles 'are not recommended' (University of Missouri Extension guide 414); synthetic fabrics that melt at the iron setting needed (SparkFun). Not for ironing straight onto PLA or PETG prints: the two-dot (wool) iron setting is about 150 °C (Wikipedia 'Laundry symbol'), far above what these plastics stand (Prusa lists PLA's 'Low UV and temperature resistance'), so fuse fabric to fabric first and then glue or sew it to the print.
- **maker_difficulty**: easy: buy it, cut it with scissors and press it with a household iron; the only skill is getting heat, pressure and time right for the product and fabric, so test on a scrap first.

### Making it

- **processes**: 
  - off-the-shelf part: fusible web by the metre or as sheets, hem tape on rolls, fusible interfacing, and iron-on patches with the glue already on the back
  - 3D print (FDM): not the web itself, but printed helpers (hem gauges, templates) and printed patches whose own plastic is ironed into the fabric (see making_tips_3d_printing)
- **print_in_place**: no: fusible web is bought as a sheet or tape; it isn't printed.
- **making_tips_3d_printing**: Fusible web is not printed, but makers combine it with prints in a few ways. 1) Never iron onto a PLA or PETG print: the iron is much hotter than the plastic can take (Prusa: PLA has 'Low UV and temperature resistance'; Wikipedia 'Laundry symbol': two dots is about 150 °C). Fuse the fabric layers first, then attach the fabric to the print by sewing through holes or slots (Sew-on part) or with a flexible glue. 2) Behind costume fabric where printed or cast parts are attached, a hidden reinforcement patch helps 'distribute the weight of the attached piece', and fusible interfacing may be enough for this, since it 'is made for stabilizing fabrics, and stopping them from stretching or fraying' (Dangerous Ladies cosplay tutorial). 3) Printed iron-on patches use the print's own plastic as the glue: one design is printed onto 'a sheet of thin paper' fixed to the build plate, torn out, laid print-down on the fabric and ironed on high; tiny details such as dots may not fuse or may fall off (Printables 1343). Another is a 0.40 mm thick patch (2 layers at 0.20 mm) in TPU 95A, which 'melts and fuses mechanically deep into the fabric weave'; its designer warns that PLA versions 'will eventually crack under repeated sharp folds or machine drying' (Printables 1837546). These are print-based experiments, not tested products ⚑ [uncertain]. 4) A printed hem gauge helps fold an even hem before laying in hem tape (Printables 321393). 5) Keep glue and heat off the print bed and any electronics: put baking parchment between iron and work, and keep the iron away from sewn-in e-textile parts, which heat could damage (SparkFun). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search catalogues for: 'paper-backed fusible web' (sheets, rolls and wide bolts), 'fusible web tape', 'hem tape' or 'hemming web' (narrow rolls, e.g. 13, 19 and 25 mm wide at William Gee), 'sewable' or 'lite' fusible web versus 'no-sew' or 'ultra hold' fusible web (Therm O Web), 'fusible interfacing' (woven, non-woven and knit, light to heavy; Wikipedia 'Interfacing'), 'one-sided' fusible interfacing for stabilising fabric (SparkFun), 'iron-on patches', 'appliqué pressing sheet' (non-stick sheet; All About Quilts), 'pressing cloth', and 'heat press'. Industrial 'web adhesive' is sold by base polymer and basis weight, about 14 to 120 g/m² (Bostik brochure).
- **rules_of_thumb**: 
  - Two-step pressing for paper-backed web: first press on the paper side for about 2 s (HeatnBond UltraHold), 2-4 s (HeatnBond Lite) or 5 s dry (Vilene Bondaweb), let it cool and peel the paper; then press the glue side onto the second fabric for 8 s (UltraHold), 6-8 s (Lite) or about 10 s under a damp cloth (Bondaweb). The times are for cotton; thicker fabric needs longer (Therm O Web product pages; Vilene Bondaweb instructions via William Gee).
  - Follow the instructions for the exact product, including steam or no steam (HeatnBond: 'medium heat, no steam'; Bondaweb: damp cloth for the second press), because 'you can actually over do it on some brands and then they won't stick' (Therm O Web; William Gee; USU Extension 'Machine Appliqué Techniques').
  - Press, don't iron: 'Raise, do not slide, the iron', overlap each new position, press 'for the recommended time, not more or less', and let it 'Cool before handling' (University of Missouri Extension guide 414 'Tips for Fusing').
  - Iron temperatures: one dot on the iron dial is about 110 °C, two dots 150 °C and three dots 200 °C (Wikipedia 'Laundry symbol'). Polyamide webs work over roughly 125-150 °C and polyester webs over 85-180 °C (Bostik blog), and web activation temperatures range from about 77 to 166 °C (Bostik brochure), so a medium (two-dot, wool) setting is the usual starting point.
  - Prepare and test: pre-wash fabrics without fabric softener and pre-test the adhesive (Therm O Web); pre-shrink fusible interfacing by soaking it 10 minutes in tepid water and letting it drip-dry; test on a swatch of the real fabric first (University of Missouri Extension guide 414).
  - Match the web to the fabric: use a light web on thin or stretchy fabric such as lace or spandex and a heavier one on thick fabric; too heavy a web makes the bond stiff or lets glue ooze out, and too light a web can fail (Bostik blog and brochure).
  - Light 'sewable' webs must be stitched along the edges for a permanent bond, and before washing; the no-sew grade is marked 'DO NOT SEW!', while the sewable grade 'Doesn't gum up needles' (Therm O Web). For appliqué, 'Finish by stitching around shape' (USU Extension).
  - For big appliqué shapes, fuse only a band around the edge and cut away the middle of the web, which uses less web and gives a softer result (All About Quilts, 'Steam-A-Seam').
  - With interfacing, trim about 1/2 inch of seam allowance off the interfacing before fusing, and pink (zigzag-cut) the edges if a line shows on the right side (University of Missouri Extension guide 414; University of Idaho Extension 'Fusible Interfacing').
  - Washing, side by side: HeatnBond UltraHold 'Machine wash warm and dry on low heat or no heat'; HeatnBond Lite must be sewn first, then 'Machine wash cold' (Therm O Web); Vilene Bondaweb 'Machine wash 60°' and 'Dry cleanable' (William Gee); in Bostik's industrial range the polyamide webs rate 'Fair' for washing and 'Excellent' for dry cleaning, while most polyester webs rate 'Good' or 'Excellent' for washing but 'Poor' for dry cleaning (Bostik web adhesive selector).

### When to use it

- **everyday_examples**: 
  - Iron-on badges and patches on jeans, jackets, bags and uniforms (Wikipedia 'Embroidered patch')
  - A quick no-sew hem on trousers or curtains with hem tape (William Gee; Wikipedia 'Hem')
  - The stiff layer inside shirt collars and cuffs, which is usually fusible interfacing (Wikipedia 'Interfacing')
  - Fabric shapes stuck onto quilts and wall hangings before their edges are stitched (appliqué; USU Extension; Therm O Web)
- **when_to_use**: Use it to join fabric to fabric quickly and invisibly with no stitching: taking up a hem on trousers, skirts or curtains; fixing appliqué shapes so they don't shift while you stitch their edges; putting on a patch; stiffening or steadying a fabric with fusible interfacing (behind buttonholes, collars, bag panels, or costume fabric that has parts attached; Wikipedia 'Interfacing'; Dangerous Ladies). It also works for fabric onto felt, leather, card or wood with suitable webs (Therm O Web UltraHold; Vilene Bondaweb). In e-textiles, one-sided fusible interfacing ironed over conductive-thread lines is the 'Quickest method of insulation' (SparkFun).
- **when_not_to_use**: Not for anything load-bearing such as straps, handles, harnesses or webbing loops: sew them (Sewn seams and hand stitches; Load-bearing stitch patterns for straps and webbing), and never let a fused joint hold a person. Not for waterproof or airtight seams: use a heat-sealed seam on coated fabric. Not on fabrics that can't take the heat or won't take the glue, such as acetate, pure silk or silicone-finished fabrics (University of Missouri Extension) or thin synthetics that melt (SparkFun): use a fabric glue (PVA or elastomeric fabric glue) or sew. Not for ironing onto 3D prints or foam, which soften long before the glue melts: sew or glue instead. Not where the part gets hot again (near heaters, hot dryers, repeated ironing), since heat can reactivate the glue (Bostik; Therm O Web). Not for long-lasting hems on clothes washed often unless finished with stitching, as no-sew hems are 'often used only on a temporary basis' (Wikipedia 'Hem').
- **environment_limits**: Heat: the glue is a thermoplastic, so it 'cannot be used in applications subjected to temperatures that exceed their melting point for too long, as that can reactivate the adhesive'; Bostik's industrial webs list heat resistance from about 75 °C (low-melt polyester) to 165 °C (high-melt polyester) (Bostik brochure). Makers advise drying on low or no heat and avoiding repeated ironing over fused areas (Therm O Web). Washing and dry cleaning: resistance depends on the glue type (see rules_of_thumb), and light webs must be stitched before washing (Therm O Web). Moisture: polyamide hot melts let moisture through more easily than polyesters (Wikipedia 'Hot-melt adhesive'). Shrinkage: interfacing that wasn't pre-shrunk can shrink in the wash and pull away as bubbles; pre-shrink it (University of Missouri Extension). No data on sunlight (UV) ageing of hobby webs was found.
- **safety_notes**: Burns: 'Burns can occur from touching hot metal parts, hot water, or steam'; don't leave the iron unattended while it is plugged in or on the ironing board, and supervise children closely (Hamilton Beach iron manual). Scorching or melting: some fabrics 'could melt when using the iron setting needed to activate the adhesive', so test on a scrap (SparkFun). Keep melted glue off the iron's soleplate and the ironing board with baking parchment or a pressing sheet (SparkFun; Therm O Web: 'Do not touch iron directly to the adhesive sheet. Do not iron directly to your ironing board'). Keep the iron away from sewn-in electronics, which heat could damage (SparkFun). A fused joint must never hold a person: sew anything that takes a load.
- **common_failures**: Not sticking or peeling off: too little heat, pressure or time, or on some brands too much (USU Extension; onlineclothingstudy); fix by following the product's exact time and setting and testing on a scrap. Glue soaking through to the front of the fabric, or back through onto the iron (strike-through and strike-back): too much heat, pressure or time (onlineclothingstudy), or too heavy a web for a thin fabric (Bostik: 'the adhesive will ooze out'); use a lighter web and the recommended settings. Bubbles or puckers after washing: interfacing shrinking; pre-shrink it (University of Missouri Extension). Edges of appliqué lifting with wear: the light web was never meant to hold alone; stitch round the edges (Therm O Web Lite; USU Extension). A stiff, board-like patch: the web is too heavy; use a lite web or cut away the centre (Bostik; All About Quilts). A visible line where the interfacing stops: pink its edges (University of Missouri Extension; University of Idaho Extension). Pieces shifting: the iron was slid instead of lifted and pressed (University of Missouri Extension). Glue on the iron: the web's rough (glue) side faced the iron; the rough side goes on the wrong side of the fabric (Vilene Bondaweb via William Gee). Melted or shiny fabric: the iron was too hot for that fibre; test first (SparkFun).
- **related**: 
  - Hot-melt adhesive (glue gun): the same kind of thermoplastic glue, but applied molten from a gun as beads instead of as a dry web pressed with an iron
  - Heat-sealed seam (heat-sealed plastic film and coated fabric): melts the plastic coating of the fabric itself into a seam that can be airtight; fusible web adds a separate glue layer and is not waterproof
  - Sewn seams and hand stitches (lockstitch, saddle stitch, flat-felled seam): stronger and repairable, and the usual way to finish the edges of fused appliqué
  - Load-bearing stitch patterns for straps and webbing (bar tack, box-X stitch): what to use instead of fusing wherever a strap carries load
  - PVA wood glue (white glue, also sold as fabric or tacky glue) and Elastomeric solvent glue (flexible craft glue): liquid fabric glues for fabrics or parts that can't be ironed
  - Contact adhesive (contact cement): better for bonding fabric or leather to foam, rubber or prints without heat
  - Printing onto fabric (fabric embedded in a 3D print): the way to join cloth and printed plastic, where fusing can't be used
  - Sew-on part (sewing holes, loops and slots on a rigid part): attach a printed part to fused or interfaced fabric with thread
  - Hook-and-loop fastener: a reopenable way to attach a patch or panel, sewn or glued on
  - Heat transfer vinyl (iron-on vinyl): a decorative plastic film with heat-activated glue for T-shirt designs, pressed the same way but not used to join fabrics (Wikipedia 'Heat transfer vinyl')

### Pictures, videos and models

- **links**: 
  - [HemRepairTape.jpg (Wikimedia Commons, by DavidBoden)](https://commons.wikimedia.org/wiki/File:HemRepairTape.jpg): Photo of a roll of iron-on hem repair tape (fusible hemming web) *(licence: Public domain (PD-user))*
  - [Interfacing at hem.jpg (Wikimedia Commons, by kellyhogaboom via Flickr)](https://commons.wikimedia.org/wiki/File:Interfacing_at_hem.jpg): Photo of interfacing used to reinforce a garment hem *(licence: CC BY-SA 2.0)*
  - [Insulation Techniques for e-Textiles: Fusible Interfacing (SparkFun Learn)](https://learn.sparkfun.com/tutorials/insulation-techniques-for-e-textiles/fusible-interfacing): Step-by-step photos of choosing one-sided fusible interfacing, marking it and ironing it over conductive-thread lines with parchment to protect the iron *(licence: CC BY-SA 4.0 (SparkFun tutorials))*
  - [HeatnBond Lite Iron-On Adhesive Tape (Therm O Web product page)](https://www.thermoweb.com/products/lite-7-8-x-10-yards): Product photos and the maker's step-by-step directions for a sewable paper-backed fusible tape, with times, settings and washing advice *(licence: link only)*
- **make_it_yourself**: 
  - [3D printed Iron-On Patch (Ky3_actual, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1343-3d-printed-iron-on-patch): A thin patch printed onto paper on the build plate, then ironed print-side down onto fabric so its own plastic fuses into the weave *(licence: Creative Commons Attribution-ShareAlike)*
  - [Orca & Waves - Iron-On 3D Printed Patch (Flexible TPU + PLA) (Eolexy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1837546-orca-waves-iron-on-3d-printed-patch-flexible-tpu-p): A 0.40 mm thick printed patch in TPU (with a PLA version) designed to be heat-pressed into T-shirts, bags and denim with a household iron *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Hem Gauge for Sewing (TheNewRow, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/321393-hem-gauge-for-sewing): A printed gauge for measuring and folding an even hem before laying in hem tape *(licence: Creative Commons Attribution-NonCommercial)*
- **diagram_idea**: A cross-section in three frames: two fabric layers with a loose mesh of glue between them; an iron pressing down with heat arrows passing through the top fabric and the mesh melting into droplets that soak into both layers; and the cooled result with the glue locked among the fibres, plus a side panel showing the paper-backed two-step (press on the paper side, peel, press onto the second fabric).
- **sources**: 
  - https://en.wikipedia.org/wiki/Interfacing
  - https://en.wikipedia.org/wiki/Hem
  - https://en.wikipedia.org/wiki/Embroidered_patch
  - https://en.wikipedia.org/wiki/Hot-melt_adhesive
  - https://en.wikipedia.org/wiki/Heat_transfer_vinyl
  - https://en.wikipedia.org/wiki/Laundry_symbol
  - https://extension.usu.edu/sewing/research/machine-applique-techniques.pdf
  - https://mospace.umsystem.edu/bitstreams/13498848-4381-4357-90e0-25f4d4ffb045/download
  - https://objects.lib.uidaho.edu/uiext/uiext29299.pdf
  - https://www.thermoweb.com/products/ultrahold-value-pack-17-x-5-yards
  - https://www.thermoweb.com/products/lite-7-8-x-10-yards
  - https://www.williamgee.co.uk/shop/wonderweb/
  - https://www.williamgee.co.uk/shop/vilene-bondaweb-329/
  - https://www.bostik.com/us/en_US/blog/post/2018/6/web-adhesives-in-textile-applications-what-to-consider/
  - https://page.bostik.com/rs/253-HSZ-754/images/Web%20Brochure_V2.pdf?version=0
  - https://www.onlineclothingstudy.com/2018/10/the-fusing-technology-fusing-parameters.html
  - https://learn.sparkfun.com/tutorials/insulation-techniques-for-e-textiles/fusible-interfacing
  - https://dangerousladies.ca/blogs/tutorials/attaching-resin-3d-prints-cosplay
  - https://www.all-about-quilts.com/steam-a-seam.html
  - https://useandcares.hamiltonbeach.com/files/840235703.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:HemRepairTape.jpg
  - https://commons.wikimedia.org/wiki/File:Interfacing_at_hem.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: stays flexible
- **bonds_well**: nylon, wood, paper or card, rubber, fabric or leather, foam
- **bonds_poorly**: PLA, PETG, silicone, metal
- **tools**: sewing or leather tools, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: plastic sheet, tube or moulded parts, wood, paper or card, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, load, making_tips_3d_printing, removability

## 411 Glued tab joint (glue tab, glue flap, construction tab; edge gluing with a backing strip)

*adhesives & bonding.* A narrow flap left on the edge of a paper or card part is folded and glued under or behind the next part, the standard way to join papercraft models, card boxes and cardboard tubes

*Also covers:* Also covers tab width and angled tab ends, gluing the face rather than the tab, tabless edge gluing with a hidden backing strip, flange tabs for joining cardboard tubes and round parts, which glues suit tabs (glue stick, PVA, tacky glue, double-sided tape), and unfolding software that adds tabs automatically. A tab is a small lap joint, so see Glued joint design. Safety: craft knife and solvent glues.

### What it is

- **plain_name**: A narrow flap left along the edge of a paper or card part that is folded over and glued behind the next part, which is how paper models, card boxes and cardboard tubes are stuck together
- **term**: Glued tab joint (glue tab, glue flap)
- **aliases**: 
  - glue tab, tab (papercraft; Tabgen Inkscape extension README; Gedelgo, DeviantArt)
  - glue flap, flap (the word used by Pepakura users and by the PolyZamboni Blender add-on, which places 'glue flaps' on cut edges)
  - construction tab (Wikipedia 'Paper model', describing tabs added by unfolding software)
  - sticking tab (Export Paper Model add-on for Blender documentation)
  - manufacturer's joint (the glued flap that closes the side seam of a corrugated box; Wikipedia 'Corrugated box design')
  - edge gluing, butt-gluing or tabless gluing with an internal strip or backing strip (Zealot Models forum 'Tabs or no tabs?')
  - internal tab, separate tab (a strip glued behind both edges instead of a tab on one part; Zealot Models forum)
  - flange, flange method (tabs cut around the end of a cardboard tube and folded out; Makedo 'Connections and joints')
  - glue margin ⚑ [uncertain: term used in some kit instructions, no source opened] *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: interlocking joints & joinery
- **one_liner**: A strip of extra paper or card left on one part's edge is folded on a scored line and glued under or behind the matching edge of the next part, making a small glued overlap (lap joint) that holds papercraft, card boxes and cardboard tubes together.
- **complexity**: A few parts: the two paper or card parts (the tab is part of one of them), the glue (or double-sided tape), and a scored fold line at the base of the tab. The tabless version replaces the tab with a separate backing strip glued behind both edges.
- **how_it_works**: The tab overlaps the back of the next part, so the glue film sits between two flat faces; loads along the seam slide those faces past each other (shear), which glue resists well over the whole tab, whereas a seam that springs open peels the tab off from one end, which glue resists badly (see Glued joint design). The tab is folded on a scored line so it sits at the right angle and the two outer faces meet edge to edge. Water-based glues such as PVA or tacky glue soak into the paper fibres and grab within seconds when the parts are pressed together (PlanetJune; Wikipedia 'Paper model'). In the tabless method the two outer edges are butted together and a hidden strip glued behind both of them carries the joint, avoiding the visible step a tab makes (Zealot Models forum). For tubes and round parts, a ring of short tabs (flanges) is cut around the end, folded outwards and glued or fixed to the flat panel (Makedo).

### Finder attributes

- **job**: 
  - join and hold: joins paper and card parts into boxes, models and tubes
  - glue or bond: the tab is the gluing surface
  - line parts up exactly: numbered tabs and printed positioning lines show where each part goes (PlanetJune; Canon Creative Park)
- **motion**: none
- **degrees_of_freedom**: 0: once the glue has set, the two parts cannot move relative to each other.
- **special_behaviour**: none: it simply holds. (It does help locate parts: the tab and its numbered mark show where the next part goes, but it does not self-align on its own.)
- **holding_principle**: material bond (glue, solvent or melting): glue between the tab and the next part; double-sided tape works the same way with a pressure-sensitive adhesive
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: once glued, the paper usually tears before the tab comes away ⚑ [uncertain: no test found]. Cardboard flanges fixed with plastic cardboard screws instead of glue can be undone (Makedo). *(⚑ parts need confirming)*
- **reuse_cycles**: once
- **tools_needed**: Scissors or a craft knife and cutting mat to cut the parts (Canon Creative Park), a ruler and blunt point to score the tab's fold line (Canon), glue (PVA, tacky glue, wood glue or a glue stick) or double-sided tape, a toothpick or needle to spread small amounts of glue, tweezers to press small tabs, and paper scraps under the part to keep glue off the table (Canon Creative Park; Gedelgo, DeviantArt). Hot-glue gun for cardboard (Adafruit).
- **seal**: none: paper seams are not sealed against water or air.
- **load**: Light. The joint is strongest when loaded along the seam (shear) and weakest when the seam is pried open so the tab peels from one end (see Glued joint design). In practice the paper or card itself usually fails first ⚑ [uncertain]. Heavier cardboard joints use folded flanges, brackets and ribs, often across the flutes, for strength (Makedo). *(⚑ parts need confirming)*
- **adjustable**: No, once the glue has set. Slow white glues give a few seconds to slide a part into place before they grab (PlanetJune: hold for a few seconds until the glue 'grabs'); misplaced creases can be nudged with a fingernail during assembly (Gedelgo, DeviantArt).
- **play_and_precision**: No play once set. Accuracy depends on careful cutting and scoring, and small errors add up across many parts (tolerance stack-up), so build outwards from the middle (Gedelgo, DeviantArt). A tab leaves a small visible step the thickness of the paper at the seam; a tabless butt joint is flush but can leave a gap if the edges do not quite meet (Zealot Models forum).
- **access_needed**: both sides: you press the tab against the back of the next part from inside and outside; the last tab of a closed model must be pressed from one side only (blind), which is why papercrafters plan the final seam where it is hidden or leave the model open (Gedelgo, DeviantArt)
- **materials**: Made in and suits: paper, card stock and paperboard (Wikipedia 'Paper model'; Canon), and corrugated cardboard and cardboard tubes (Makedo; Adafruit). Glues that suit tabs: white PVA craft glue and tacky glue (Wikipedia 'Paper model'; PlanetJune; Gedelgo), wood glue for small parts and glue stick for large flat areas (Canon Creative Park; but PlanetJune finds glue stick too weak for tabs), double-sided tape for flat surfaces (Zealot Models; Fold 'N Fly), and hot glue or white glue for cardboard (Adafruit). Not suited: ordinary superglue on foam board (it melts the foam; Fold 'N Fly). Not used for wood, metal, plastics or 3D prints, which use lap joints and other glued joint shapes instead.
- **maker_difficulty**: easy: the tabs are drawn on the printed or drawn pattern; the skill is in neat cutting, scoring and using little glue. Tabless edge gluing is harder and suits experienced modellers (Zealot Models forum).

### Making it

- **processes**: 
  - hand cut with scissors or a craft knife from printed or drawn patterns (Canon Creative Park; PlanetJune)
  - cutting plotter or laser cutter: tab outlines and dashed score lines can be generated automatically (Tabgen Inkscape extension README)
  - unfolding software that turns a 3D model into flat printable parts with tabs: Pepakura Designer (commercial), Export Paper Model for Blender, PolyZamboni for Blender (Wikipedia 'Paper model'; Blender Extensions pages)
  - industrial: folding cartons and corrugated boxes are die-cut, scored, folded and glued on a glued side flap (Wikipedia 'Folding carton'; 'Corrugated box design')
  - 3D print (FDM) and resin: not applicable; printed parts use lap joints and other glued joint shapes
- **print_in_place**: no: a paper and card joint; it is not 3D printed.
- **making_tips_3d_printing**: not applicable: glue tabs are a paper and card joint. For gluing 3D-printed parts see Glued joint design (lap and scarf joints) and the split-part joints for large prints.
- **off_the_shelf_parts**: White PVA craft glue and tacky glue, e.g. Aleene's Original Tacky Glue (brand; used by PlanetJune and Gedelgo), wood glue, glue sticks, double-sided tape and double-sided tissue tape, glue pens or a fine needle or toothpick for spreading, tweezers, cutting mat and craft knife. Software: Pepakura Designer (Tama Software, commercial), Export Paper Model add-on (included with Blender, GPL-3.0-or-later), PolyZamboni add-on for Blender (GPL-3.0-or-later), Tabgen extension for Inkscape. For cardboard flanges, plastic cardboard screws such as Makedo Scru (brand) can replace glue (Makedo).
- **rules_of_thumb**: 
  - Put the glue on the place where the tab will land, not on the tab itself, for better sticking and a cleaner finish (Canon Creative Park 'How to Make Paper Crafts'). Others spread glue thinly on the tab instead (Gedelgo, DeviantArt; PlanetJune); both work if the glue is thin.
  - Use very little glue: too much moisture makes the paper buckle, slows drying and lets parts slip out of place (Gedelgo, DeviantArt); apply white glue 'sparingly to each tab' (PlanetJune).
  - Choose the glue by the size of the area: glue stick for large areas, wood glue spread thinly with a toothpick for small parts, then pinch with tweezers (Canon Creative Park). PlanetJune warns that a glue stick does not grab tabs tightly enough and recommends tacky white glue instead.
  - Glue tabs one at a time in their numbered order, holding each for a few seconds until the glue grabs (PlanetJune).
  - Point tabs away from the main viewing direction: the edge over a tab shows as a step, more visible with thicker card (Gedelgo, DeviantArt; Zealot Models forum figure 'a').
  - Build from the most important part outwards, starting near the middle so errors split both ways, and plan the last seam where it is hidden; never finish on a pointed or intricate part (Gedelgo, DeviantArt).
  - Score the tab fold before folding; a folded tab at a corner otherwise leaves a gap because the card curves at the fold (Zealot Models forum; Canon Creative Park).
  - Tabless practice piece: make a tube from a 2 cm wide strip by gluing its ends edge to edge with a strip over the seam inside, glue tiny strips about 1 cm long and 2 mm wide around the inside of the rim with half of each sticking out, bend them inwards and glue on a 5 cm end disc (Zealot Models forum, member 'Rhaven'). For flush corners, sand both edges to 45 degrees and glue edge to edge (Zealot Models forum).
  - Flange method for tubes and round parts: cut flanges around the end, fold them out and test whether 2, 3 or 4 fixings work best; fold across the flutes where possible for strength (Makedo 'Connections and joints').
  - A tab is a small lap joint: keep it loaded along the seam (shear) and avoid shapes that pry it open from one end (peel); a longer tab along the edge helps more than a deeper one (see Glued joint design, which cites the Henkel LOCTITE design guide).
  - Tab size: tab-generator software lets you set the tab angle at its ends and the tab height (how far it sticks out) (Tabgen README). A forum answer says Pepakura's default flap width is 5 mm ⚑ [uncertain: forum page blocked, not read]. Angle the tab ends so tabs meeting at a corner do not overlap ⚑ [uncertain: common practice, no source opened]. *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Printable paper models and papercraft kits, such as Canon Creative Park models (Canon Creative Park; Wikipedia 'Paper model')
  - Cereal and other folding-carton boxes, which are printed, cut, folded and glued along a flap (Wikipedia 'Folding carton')
  - Corrugated shipping boxes, whose side seam (the manufacturer's joint) is usually a glued flap (Wikipedia 'Corrugated box design')
  - Cardboard tube towers and pillars in cardboard building kits, joined to panels with folded flanges (Makedo)
- **when_to_use**: Use glue tabs to join paper and card parts that must stay together permanently: papercraft and card models, architectural and game-terrain models, gift and storage boxes, costume and cosplay parts made with unfolding software, and cardboard prototypes. Tabs make assembly easy for beginners because they show where each part goes. Use flange tabs to join cardboard tubes and round parts to flat panels. Use the tabless backing-strip method when a smooth, step-free surface matters more than speed.
- **when_not_to_use**: Avoid glue tabs when the joint must come apart again (use tab-and-slot joints, folding box closures, split-pin paper fasteners or cardboard screws instead), when the model must survive water or outdoor use, or when a hinge is needed (use a score-and-fold or tape hinge). For heavy cardboard furniture, glued tabs alone are weak; add folded brackets, ribs or mechanical fasteners (Makedo). Do not use tabs on 3D prints, wood or plastics; use a proper lap joint.
- **environment_limits**: Water-based glues (PVA, tacky glue, glue stick) and paper soften in damp; paper models are sometimes sealed with varnish to last longer (Wikipedia 'Paper model'). Hot glue on cardboard softens again with heat (see Hot-melt adhesive). Paper glued with too much water-based glue cockles and buckles as it dries (Gedelgo, DeviantArt). Long-term ageing figures for craft glues in paper were not found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Craft knives: cut on a mat against a metal ruler, keep your fingers out of the blade's path and cut away from yourself (Adafruit; Canon: 'Avoid cutting your fingers'). Solvent glues and especially spray adhesives give off harmful fumes, so use them only with good ventilation and read the label (Fold 'N Fly). Hot-glue guns burn (Fold 'N Fly). Keep small parts and glue away from young children ⚑ [uncertain: general advice]. *(⚑ parts need confirming)*
- **common_failures**: Tabs popping up or seams opening: too little or too weak glue (a glue stick on a tab may not grab; PlanetJune), or glue not held long enough to grab; use tacky white glue and hold each tab for a few seconds. Buckled, cockled paper and parts sliding out of place: too much wet glue (Gedelgo, DeviantArt). Visible steps and coloured gaps at seams: tabs on the viewed side, or tabless edges that did not quite meet; colour the white edges with a pen and point tab steps away from view (Zealot Models forum; Canon Creative Park). Gaps at folded corners: unscored tab folds (Zealot). Misfits that grow across the model: tolerance stack-up; build from the middle out (Gedelgo). The final tab cannot be pressed shut: plan the last seam in a hidden, flat area (Gedelgo).
- **related**: 
  - Glued joint design (butt, lap and scarf joints; peel vs shear): a tab is a small lap joint, so the same rules apply
  - Score-and-fold hinge: every tab is folded on a scored line first
  - Glue stick and starch paste: the mild paper glues often used on tabs
  - PVA wood glue and Hot-melt adhesive: white glue for papercraft and hot glue for cardboard
  - Adhesive tape joint and tape hinge: double-sided tape or tissue tape can replace glue on tabs and seams, and single-sided tape is the quick no-drying alternative
  - Tab-and-slot joint: a tab pushed through a slot that holds without glue and can be taken apart
  - Folding box closures: tuck flaps and lock bottoms that hold boxes shut without glue
  - Cardboard screws and rivets: hold cardboard flanges and overlaps with removable plastic fasteners instead of glue
  - Bent or twisted tab through a slot: the sheet-metal relative, held by bending rather than glue

### Pictures, videos and models

- **links**: 
  - [Tutorial: Cut & Fold Paper Models (PlanetJune)](https://www.planetjune.com/blog/paper-models/): Photos of cutting, scoring, mountain and valley folding and gluing numbered tabs on printable animal paper models, with a legend of the line markings *(licence: link only)*
  - [Tabs or no tabs? (Zealot Models forum)](https://www.zealotmodels.com/threads/tabs-or-no-tabs.173794/): Forum discussion of tabbed versus tabless (edge-glued) seams, with a member's diagram of tab steps, internal tabs and corner joints, and a step-by-step tabless tube exercise *(licence: link only)*
  - [Connections and Joints: How to use Flanges, Tabs and Patches (Makedo Resource Hub)](https://hub.make.do/at-home/maker-tips/connections-and-joints-how-to-use-flanges-tabs-patches): Photos of tabs added to cardboard designs and the flange method for joining cardboard tubes and circles to panels *(licence: link only (copyright Makedo))*
  - [Blank RSC.svg (Wikimedia Commons, by Life of Riley)](https://commons.wikimedia.org/wiki/File:Blank_RSC.svg): Flat blank of a regular slotted cardboard box with score lines, slots and the manufacturer's joint flap that is glued to close the side seam *(licence: Public domain)*
  - [Paper VALMETRO.JPG (Wikimedia Commons, by Haridas Mederos Ocando)](https://commons.wikimedia.org/wiki/File:Paper_VALMETRO.JPG): A printable sheet of unfolded parts for a paper model of a Valencia (Venezuela) metro train, used on Wikipedia 'Paper model' ⚑ [uncertain: glue tabs not checked at full size] *(licence: CC BY-SA 2.5)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Export Paper Model (Blender add-on by Adam Dominec)](https://extensions.blender.org/add-ons/export-paper-model/): Exports a flat printable net of a 3D mesh as PDF or SVG, with markers showing which parts stick together and labelled sticking tabs; it ships with Blender *(licence: GNU GPL v3.0 or later)*
  - [PolyZamboni (Blender add-on)](https://extensions.blender.org/add-ons/polyzamboni/): Interactive paper-model unfolding in Blender: mark cuts, then 'Recompute Flaps' places glue flaps on every cut edge while trying to avoid overlaps; flaps can be added, removed or flipped by hand *(licence: GNU GPL v3.0 or later)*
  - [Tabgen 3D Papercraft Extension for Inkscape (README)](https://inkscape.org/fr/gallery/item/27672/readme.txt): An Inkscape extension that adds tabs with dashed score lines to any straight-sided outline, with settings for tab angle, tab height and placement inside or outside *(licence: ⚑ [uncertain: licence not stated in the README])*
  - [Parametric Cardboard Box Template Maker (basquepunk, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1233463-parametric-cardboard-box-template-maker): An OpenSCAD box-template generator exporting SVG or DXF outlines with bending lines, with a choice of 'simple' or 'no-glue' box. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))* *(⚑ parts need confirming)*
- **diagram_idea**: Two papercraft panels meeting at a corner, shown three ways side by side: (1) a folded tab on one panel glued behind the other, with an arrow showing the small visible step; (2) the tabless version with both edges butted and a hidden strip glued behind; (3) a cardboard tube with a ring of folded-out flanges glued to a flat base.
- **sources**: 
  - https://en.wikipedia.org/wiki/Paper_model
  - https://en.wikipedia.org/wiki/Folding_carton
  - https://en.wikipedia.org/wiki/Corrugated_box_design
  - https://creativepark.canon/event/howtomake/en/index.html
  - https://www.zealotmodels.com/threads/tabs-or-no-tabs.173794/
  - https://hub.make.do/at-home/maker-tips/connections-and-joints-how-to-use-flanges-tabs-patches
  - https://www.planetjune.com/blog/paper-models/
  - https://www.deviantart.com/gedelgo/journal/Stuff-You-Might-Want-to-Know-About-Papercraft-528533435
  - https://inkscape.org/fr/gallery/item/27672/readme.txt
  - https://extensions.blender.org/add-ons/export-paper-model/
  - https://extensions.blender.org/add-ons/polyzamboni/
  - https://raw.githubusercontent.com/addam/export-paper-model-from-blender/master/README.md
  - http://addam.github.io/Export-Paper-Model-from-Blender
  - https://tamasoft.co.jp/pepakura-en
  - https://learn.adafruit.com/cardboard-fundamentals?view=all
  - https://www.foldnfly.com/lounge/foam-core-tools-techniques.php
  - https://commons.wikimedia.org/wiki/File:Blank_RSC.svg
  - https://commons.wikimedia.org/wiki/File:Paper_VALMETRO.JPG
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: fast ⚑ *needs confirming (best guess): not on the glue lists in the finder tree; traits read from the text*
- **bonds_well**: wood, paper or card
- **bonds_poorly**: metal, foam
- **tools**: glue gun, sewing or leather tools, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent ⚑ *needs confirming (source uncertain): `removability` is marked [uncertain] here: "…manent: once glued, the paper usually tears before the tab comes away [uncertain: no test found].…"*
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: paper, card or foam board
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: paper or card

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, links, load, make_it_yourself, off_the_shelf_parts, removability, rules_of_thumb, safety_notes

## 412 Adhesive tape joint and tape hinge (pressure-sensitive tape; masking, packing, gummed paper and double-sided tissue tape)

*adhesives & bonding.* A strip of sticky tape across or between two parts holds them together at once with no drying time, and a strip across a gap makes a quick bendy hinge, as on parcels, cardboard models and book repairs

*Also covers:* Also covers choosing a tape (masking and drafting tape for temporary holds, transparent office tape, box-sealing and filament tape, water-activated gummed paper tape that soaks into cardboard, double-sided tissue tape and adhesive transfer tape for hidden joints, duct and gaffer tape), tape hinges on one side, both sides or woven (incl. the hinges on the moving flaps of foam model planes: clear packing tape, fibre-reinforced tape, soft medical tape of the Blenderm type and gapless hinge tape), quick taped seams on foam-board and cardboard prototypes, and why tape creeps, dries out and lets go with heat, sun and age. Thick foam tape is Double-sided foam tape and copper tape is Conductive tape. Safety: none special beyond residue on surfaces.

### What it is

- **plain_name**: A strip of sticky tape pressed across or between two parts so they hold together straight away, or laid across a gap so the parts can bend like a hinge, as on parcels, cardboard models, torn pages and the moving flaps of foam model planes
- **term**: Adhesive tape joint and tape hinge (pressure-sensitive adhesive tape, PSA tape)
- **aliases**: 
  - sticky tape, self-stick tape, adhesive tape (Wikipedia 'Pressure-sensitive tape')
  - Sellotape, Scotch tape, Durex tape (brands used as everyday names; Wikipedia 'Pressure-sensitive tape')
  - transparent office tape, clear tape, invisible tape (matte clear tape) (Wikipedia 'Pressure-sensitive tape')
  - masking tape, painter's tape; drafting tape (lower tack) (Wikipedia 'Masking tape')
  - box-sealing tape, packing tape, parcel tape (UK), shipping tape (Wikipedia 'Box-sealing tape')
  - filament tape, strapping tape, fibre tape (Wikipedia 'Filament tape'; Fold 'N Fly)
  - gummed paper tape, water-activated tape, gummed tape (Wikipedia 'Corrugated box design'; 'Pressure-sensitive tape')
  - double-sided tape, double-sided tissue tape, adhesive transfer tape (Wikipedia 'Double-sided tape'; 'Pressure-sensitive tape')
  - duct tape, duck tape; gaffer tape, gaff tape, gaffa tape, spike tape (Wikipedia 'Duct tape'; 'Gaffer tape')
  - hinge tape, gapless hinge tape, tape hinge (model aircraft; Model Aviation FAQ 2010/02; Flite Test)
  - tape weave hinge (Flite Test)
  - Blenderm (3M, brand): a soft medical tape used as hinge tape on very light model planes (Model Aviation FAQ 2010/02)
  - taped seam, taped joint ⚑ [uncertain: informal names] *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: hinges & pivots
- **one_liner**: A strip of tape whose adhesive grips under finger pressure (or, for gummed paper tape, when wetted) holds two parts together at once with no drying time, and a strip bridging a gap between two parts makes a quick, light, bendable hinge.
- **complexity**: A few parts: the two parts and the tape. The tape is a backing (plastic film, paper, cloth or foil) coated with pressure-sensitive adhesive, sometimes with embedded glass-fibre filaments for strength, and with a release liner on double-sided tape; adhesive transfer tape is adhesive alone on a liner (Wikipedia 'Pressure-sensitive tape'). Gummed paper tape is paper with a dry starch adhesive that is activated by water (iTape 'The Science Behind Water-Activated Tape'). A tape hinge is usually two strips, one on each face, or a 'woven' pair.
- **how_it_works**: Pressure-sensitive adhesive is soft enough to flow into the surface (wet it) when pressed, yet firm enough to resist flowing when the joint is loaded, so it grips at once without solvent, water or heat; how well it sticks depends on how hard it is pressed and on the surface's smoothness, cleanliness and temperature (Wikipedia 'Pressure-sensitive adhesive'). A strip across a seam carries the load through its backing; it holds best when pulled along the surface and worst when an edge or corner is lifted and peeled, so corners start lifting first (Wikipedia 'Pressure-sensitive adhesive'). A strip across a narrow gap leaves a short free length of backing that bends like a hinge; taping both faces holds the hinge line in place (Flite Test 'RC Plane Hinge Types'). Gummed paper tape works differently: water reactivates a starch glue that soaks into the cardboard's fibres and dries into a permanent bond that cannot be peeled off without tearing the box (iTape; Wikipedia 'Corrugated box design').

### Finder attributes

- **job**: 
  - join and hold: closes boxes, holds cardboard and foam-board prototypes and repairs torn paper at once, with no drying time
  - glue or bond: the adhesive layer is the bond; double-sided and transfer tapes make hidden flat joints
  - let it move (turn, slide or bend): a strip across a gap makes a light, bendable tape hinge for flaps, covers and model-plane control surfaces
  - seal it, or pass cables or fluid through: a continuous strip over a box seam, or an 'H-seal', keeps dust and dirt out (Wikipedia 'Box-sealing tape')
- **motion**: none for a taped seam; flex for a tape hinge, which bends through the full movement of the flap, limited by the gap and the bevelled edges (Model Aviation FAQ 2010/02)
- **degrees_of_freedom**: 0 for a taped seam. 1 for a tape hinge (folding about the gap); a hinge with too wide a gap also lets the flap flutter sideways ('flapping or vibration'; Model Aviation FAQ 2010/02).
- **special_behaviour**: 
  - quick-release: low-tack masking tape, drafting tape and gaffer tape are made to peel off later without damaging the surface or leaving much residue (Wikipedia 'Masking tape'; 'Gaffer tape'); other tapes may leave residue or tear paper
  - none otherwise: tape holds, or bends as a hinge; it does not lock, click or limit force
- **holding_principle**: material bond (glue, solvent or melting): a pressure-sensitive adhesive that grips under pressure, or for gummed tape a water-activated starch glue that dries into the fibres
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): it depends on the tape. Masking, drafting and gaffer tape are meant to come off cleanly (within a limited time for masking tape; Wikipedia 'Masking tape'; 'Gaffer tape'); box tape and duct tape usually come off but can tear paper or leave residue (Wikipedia 'Duct tape'); gummed paper tape is permanent and tears the carton if removed (iTape).
- **reuse_cycles**: once: tape is used once; the parts can usually be re-taped with new tape
- **tools_needed**: none beyond scissors or a knife; a hand-held tape gun or desk dispenser makes long strips easier (Wikipedia 'Box-sealing tape'); a water dispenser to wet gummed paper tape (iTape); for model-plane hinges, scrap 1/16 in (1.6 mm) balsa spacers to set the gap and painter's tape to hold the parts while taping (Model Aviation FAQ 2010/02)
- **seal**: dust-resistant: a continuous strip over a seam, or an 'H-seal' with cross strips over the box ends, helps keep contaminants out (Wikipedia 'Box-sealing tape'). Duct tape resists water and was first used to seal ammunition cases (Wikipedia 'Duct tape'), but taped seams are not reliably watertight long term ⚑ [uncertain]. *(⚑ parts need confirming)*
- **load**: Light to medium. Strong when pulled along the tape: filament tape reaches up to about 600 lb per inch of width (100 N/mm) in tension (Wikipedia 'Filament tape'). The adhesive resists sliding (shear) well but is weak in peel, so tape fails from a lifted edge or corner (Wikipedia 'Pressure-sensitive adhesive'). Holding under a steady load drops as the tape warms (Wikipedia 'Pressure-sensitive adhesive'). On paper and thin card, the paper usually tears before good tape lets go ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: Partly: removable tapes (masking, drafting) can be lifted and repositioned; other tapes cannot be moved once pressed down without damage. The gap of a tape hinge is set when it is taped, using spacers (Model Aviation FAQ 2010/02). Some permanent adhesives grow stronger over hours or days after application (Wikipedia 'Pressure-sensitive adhesive').
- **play_and_precision**: Taped seam: no play, but the backing stretches a little and the adhesive slowly creeps under steady load, so taped parts can drift out of line over time ⚑ [uncertain: no figure found]. Tape hinge: precision depends on the gap: too little causes binding and limits travel, too much causes flapping or vibration (Model Aviation FAQ 2010/02). A woven tape hinge has no gap on either side, but its pivot line shifts slightly depending on which way the flap moves (Flite Test 'Tape weave hinges' and comments). *(⚑ parts need confirming)*
- **access_needed**: one side only (blind) for a single strip over a seam or a one-piece gapless hinge; both sides for the usual two-strip hinge (top and underside) or a woven hinge (Flite Test; Model Aviation FAQ 2010/02)
- **materials**: Tape sticks best to clean, dry, smooth surfaces; surface smoothness, surface energy and cleanliness all affect the bond (Wikipedia 'Pressure-sensitive adhesive'). Suits: paper and card (office tape, masking and drafting tape), corrugated cardboard (box-sealing tape, filament tape, gummed paper tape), foam board and foam model planes (clear packing tape and fibre tape; Fold 'N Fly; Flite Test), balsa (Flite Test 'Tape weave hinges' comments), painted walls and car body panels for masking (Wikipedia 'Masking tape'), wood and veneer as a temporary hinge in mitre folds (Woodweb). Gummed paper tape needs a fibrous surface such as cardboard to soak into (iTape). Poor: dusty, oily, damp, rough or very low-energy surfaces such as polyethylene and polypropylene film ⚑ [uncertain: surface energy named in Wikipedia but no plastic list opened]; fragile or valuable paper and documents (tape stains and damages them; Manitoba Museum; JAIC 1984); anything to be painted, since duct tape won't take paint (Cool Tools). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: no drying, no tools, instantly strong enough for prototypes; the skill is choosing the right tape and pressing it down firmly.

### Making it

- **processes**: 
  - off-the-shelf part: rolls of tape applied by hand or with a dispenser (Wikipedia 'Box-sealing tape')
  - used with any making method for prototypes and quick fixes: cardboard and foam-board builds, papercraft, woodworking mitre folds (Woodweb)
  - 3D print (FDM): not for the tape itself; printers can make tape dispensers and bevel cutters for hinge lines
- **print_in_place**: no: tape is a bought material applied after making the parts.
- **making_tips_3d_printing**: not applicable to the joint itself, but a printer makes useful helpers: a 45-degree bevel cutter for 6 mm foam, so control-surface edges can be bevelled before taping a hinge (Printables '6mm foam bevel cutter 45°'; Model Aviation recommends bevelled edges for top hinging), and wall- or magnet-mounted masking-tape dispensers (Printables '24 mm masking tape dispenser with magnetic mount'). Tape is also handy for holding printed parts while glue sets ⚑ [uncertain: general practice, no source opened]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search names: 'masking tape', 'painter's tape', 'drafting tape', 'transparent office tape', 'archival tape', 'box-sealing tape' or 'packing tape' (BOPP or polyester backing, 36, 48 or 72 mm wide), 'filament tape' or 'strapping tape', 'water-activated tape' or 'gummed paper tape' (plain or fibre-reinforced), 'double-sided tape', 'double-sided tissue tape', 'adhesive transfer tape', 'duct tape', 'gaffer tape', 'spike tape' (Wikipedia 'Pressure-sensitive tape'; 'Corrugated box design'; 'Box-sealing tape'). For model planes: 'hinge tape', 'gapless hinge tape', soft medical tape of the Blenderm type (3M, brand; sold by Du-Bro as Electric Flyer Hinge Tape) (Model Aviation FAQ 2010/02). Dispensers: hand-held tape gun, desk dispenser, water-activated tape dispenser.
- **rules_of_thumb**: 
  - Box closure: a single centre-seam strip should run 50-75 mm (2-3 in) down onto the end panels; add cross strips over the ends (an 'H-seal' or six-strip closure) when the tape is weak or the box needs reinforcing (Wikipedia 'Box-sealing tape'). Filament-tape L-clips likewise extend 50-75 mm onto the panels (Wikipedia 'Filament tape').
  - Packing tape is commonly 48-50 mm wide (also 36 and 72 mm) and about 40 um thick for low strength, 45 um normal and 50 um or more for extra strength (Wikipedia 'Box-sealing tape').
  - Filament tape: usually 12-24 mm wide, with grades up to about 600 lb per inch of width (100 N/mm) in tension (Wikipedia 'Filament tape'); on foam board it is strongest with its fibres running across the cut edge (Fold 'N Fly).
  - Press tape down firmly, since the bond depends on pressure, and round the corners of a tape strip or label, because pointed corners start to lift first (Wikipedia 'Pressure-sensitive adhesive').
  - To remove tape with least damage, pull it off slowly at a low angle; heat or a solvent softens residue, and freeze spray makes many adhesives glassy so they release (Wikipedia 'Pressure-sensitive adhesive').
  - Two-strip tape hinge: tape the top with the flap fully down, then tape the underside with the flap fully up (Flite Test 'RC Plane Hinge Types').
  - Hinge gap: set it with scrap 1/16 in (1.6 mm) balsa spacers and press the tape down thoroughly; too little gap binds, too much flaps or vibrates; bevel the edges for top hinging (Model Aviation FAQ 2010/02).
  - Pick hinge tape by model weight: soft Blenderm-type tape for micro and indoor models under 8 oz (about 225 g); a gapless hinge tape for 8-48 oz (about 225 g-1.4 kg); very few tapes resist fuel, so tape hinges suit electric models and gliders (Model Aviation FAQ 2010/02). Flite Test limits tape hinges to electric foam planes.
  - Woven tape hinge: cut a strip in half and stick the two halves together so they overlap in the middle by about the foam thickness (about 1/4 in), then stick one free end down on each part, keeping the overlap over the gap (in a woven hinge the two ends usually go on opposite faces ⚑ [uncertain: not stated in the text]), giving a hinge with no bevel and no gap (Flite Test 'Tape weave hinges').
  - Masking-tape adhesives: rubber-based grip hardest but tolerate the least heat; acrylic works from below freezing to about 150 °C; silicone tapes tolerate intermittent use up to about 260 °C (Wikipedia 'Masking tape', partly unsourced there).
  - Mitre folds in wood: cut 45-degree V-grooves, lay the pieces face up edge to edge, tape across the face with heavy packing tape, flip, glue and fold; with brittle materials cut right through and slightly into the tape (Woodweb 'Miterfolds for clean corner joints'). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - A cardboard parcel closed with brown or clear packing tape (Wikipedia 'Box-sealing tape')
  - A torn page or a sealed envelope fixed with clear office tape (Wikipedia 'Pressure-sensitive tape')
  - Masking tape holding paper to a drawing board or marking off a wall for painting (Wikipedia 'Masking tape')
  - The moving flaps on foam radio-controlled planes, hinged with clear packing tape (Flite Test 'RC Plane Hinge Types')
- **when_to_use**: Use tape when you need a joint right now with no drying or clamping: closing boxes, mocking up cardboard and foam-board prototypes, holding parts while glue sets, temporary holds that must come off cleanly (masking, drafting or gaffer tape), hidden flat joints in paper and card (double-sided or tissue tape), strong closures and bundles (filament tape), permanent tamper-evident box seals (gummed paper tape), and light hinges for card covers, flaps and the control surfaces of electric foam model planes. It is also a quick reinforcement: packing tape over foam-board seams, or over skewer holes that tear out (Fold 'N Fly; Flite Test 'FT Old Fogey' comments).
- **when_not_to_use**: Avoid tape for anything that must last for years, stay outdoors, carry steady weight or survive heat (use glue, glued tabs, screws or rivets). For durable cardboard builds, Make: advises avoiding tape, especially duct tape, and Cool Tools notes that tape is clumsy, unpeels outdoors and won't take paint, so use hot glue, starch paste, box rivets or cardboard screws instead. Never use ordinary tape to repair valuable documents, books or art: it stains and damages them; conservators use Japanese tissue with wheat-starch paste instead (Manitoba Museum; JAIC 1984). For model planes with fuel engines use pinned or slot-in hinges (Model Aviation FAQ 2010/02). Thick foam tape is a separate entry (Double-sided foam tape), as is copper tape (Conductive tape).
- **environment_limits**: Pressure-sensitive adhesives lose tack in the cold and hold less under load when hot (Wikipedia 'Pressure-sensitive adhesive'). Rubber-based tapes such as masking and older clear tape age by oxidation: first little change, then the adhesive turns sticky, oily and yellow and soaks into paper, and finally it hardens, discolours and lets go, with the backing falling off; acrylic tapes discolour much less but slowly flow (cold flow) into porous paper (JAIC 1984, 'Pressure-sensitive tape and techniques for its removal from paper'). Ordinary duct tape fails on hot heating ducts, and tests at Lawrence Berkeley National Laboratory found it becomes brittle, fails and can fall off (Wikipedia 'Duct tape'). Masking tape is meant for temporary use at room temperature and to come off cleanly only within a limited time (Wikipedia 'Masking tape'; 'Pressure-sensitive tape'). Tape unpeels outdoors in weather (Cool Tools), and hinge tape loses adhesion over time, so check model hinges often (Flite Test). Sunlight speeds ageing ⚑ [uncertain: no UV figure found on an opened page]. *(⚑ parts need confirming)*
- **safety_notes**: None special for the tape itself; the main risks are to the work: residue on surfaces, and stains and damage on paper that are often permanent (Manitoba Museum). Removing old tape residue from paper can need solvents, which should only be used with fume extraction (Connecting to Collections Care 'Book Repair' handout). A tape hinge on a flying model that loses grip can cause loss of control, so inspect hinges often (Flite Test). Blenderm-type medical tape is mentioned here only as a hinge material for models, not for any use on people.
- **common_failures**: Lifting at the corners or edges: corners not rounded, tape not pressed down, or a dusty, damp or oily surface (Wikipedia 'Pressure-sensitive adhesive'). Sliding or creeping apart under steady load or in warmth (Wikipedia 'Pressure-sensitive adhesive'). Drying out, yellowing and falling off with age (JAIC 1984; Manitoba Museum). Tearing paper or pulling up veneer when removed: use a less aggressive tape, or peel slowly at a low angle (Woodweb; Wikipedia 'Pressure-sensitive adhesive'). Tape hinges that bind, flutter or let go: wrong gap, unbevelled edges, too stiff a tape for a light model, or old tape; re-tape with the right spacers and check often (Model Aviation FAQ 2010/02; Flite Test). Duct-taped cardboard looking lumpy and refusing paint (Cool Tools).
- **related**: 
  - Double-sided foam tape: thick foam tape for mounting and gap filling, a separate entry
  - Conductive tape: copper or conductive fabric tape that also carries current, a separate entry
  - Stretch-release adhesive strips: tape-like pads that come off cleanly when stretched
  - Glued tab joint: the permanent glued alternative for papercraft and boxes
  - Glue stick and starch paste: the reversible paper glue that conservators use with Japanese tissue instead of tape
  - Score-and-fold hinge: the fold in the card itself, which tape can reinforce
  - Slot-in model hinge (CA hinge, hinge points): the stronger, longer-lasting hinge for model-plane control surfaces, especially fuel-powered ones
  - V-groove fold: a mitre fold in foam board or wood where packing tape on the face can act as the hinge while the glue sets
  - Living hinge and Knuckle hinge: one-piece printed or moulded hinges and pin hinges for parts that must last
  - Heat-shrink tubing: the entry that covers electrical tape for insulating wires

### Pictures, videos and models

- **links**: 
  - [Filament tape - 01.jpg (Wikimedia Commons, by Phliar)](https://commons.wikimedia.org/wiki/File:Filament_tape_-_01.jpg): Filament (strapping) tape used to mend part of a model airplane; used on Wikipedia 'Filament tape' *(licence: CC BY-SA 2.5)*
  - [Tape weave hinges (Flite Test)](https://flitetest.com/articles/tape-weave-hinges): Step-by-step photos and video of making a woven tape hinge on foam board, with the non-sticky side coloured to show the overlap *(licence: link only)*
  - [RC Plane Hinge Types (Flite Test)](https://www.flitetest.com/articles/RC_Plane_Hinge_Types): Explains pin, iron-on and clear-packing-tape hinges for model planes, including the top-and-bottom taping method *(licence: link only)*
  - [Tape is evil (Manitoba Museum conservation blog)](https://manitobamuseum.ca/tape-is-evil/): Photos of yellow tape stains, failed tape and pages stuck together by old tape in a scrapbook, and its repair with Japanese paper and wheat-starch paste *(licence: link only)*
  - [Foam Board Tools & Techniques (Fold 'N Fly)](https://www.foldnfly.com/lounge/foam-core-tools-techniques.php): Photos of foam-board folds and joints, with clear packing tape and fibre tape used to seal and reinforce seams *(licence: link only)*
- **make_it_yourself**: 
  - [6mm foam bevel cutter 45° (Andries Muylaert, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/309041-6mm-foam-bevel-cutter-45deg): A printed blade holder for cutting 45-degree bevels in 6 mm foam, useful for bevelling control-surface edges before taping a hinge. Read through the Printables public API. *(licence: GNU GPL v2.0)*
  - [24 mm masking tape dispenser with magnetic mount (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/29505-24-mm-masking-tape-dispenser-with-magnetic-mount): A printable dispenser for 24 mm masking tape that mounts magnetically, e.g. on a printer frame. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: Three side views of two flat panels with a small gap: (1) a single strip of tape across the top as a seam, with an arrow showing it peeling from the corner; (2) a two-strip hinge, top strip applied with the flap down and bottom strip with the flap up; (3) a woven hinge, two half-strips overlapping in the gap and stuck to opposite faces, with the flap swinging both ways.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pressure-sensitive_tape
  - https://en.wikipedia.org/wiki/Pressure-sensitive_adhesive
  - https://en.wikipedia.org/wiki/Double-sided_tape
  - https://en.wikipedia.org/wiki/Masking_tape
  - https://en.wikipedia.org/wiki/Duct_tape
  - https://en.wikipedia.org/wiki/Gaffer_tape
  - https://en.wikipedia.org/wiki/Box-sealing_tape
  - https://en.wikipedia.org/wiki/Filament_tape
  - https://en.wikipedia.org/wiki/Corrugated_box_design
  - https://blog.itape.com/blog/the-science-behind-water-activated-tape
  - https://www.flitetest.com/articles/RC_Plane_Hinge_Types
  - https://flitetest.com/articles/tape-weave-hinges
  - https://www.flitetest.com/articles/FT_Old_Fogey_Scratch_Build
  - https://library.modelaviation.com/article/frequently-asked-questions-201002
  - https://www.foldnfly.com/lounge/foam-core-tools-techniques.php
  - https://woodweb.com/knowledge_base/Miterfolds_for_clean_corner_joints.html
  - https://makezine.com/article/craft/working-with-cardboard-tips-cut-fold-mold-papier-mache/
  - https://kk.org/cooltools/?p=1518
  - https://cool.culturalheritage.org/jaic/articles/jaic23-02-003_2.html
  - https://manitobamuseum.ca/tape-is-evil/
  - https://connectingtocollections.org/wp-content/uploads/2019/08/Book-Repair_handout-1-1.pdf
  - https://commons.wikimedia.org/wiki/File:Filament_tape_-_01.jpg
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: lid, door or cover
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: wood, paper or card, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…very low-energy surfaces such as polyethylene and polypropylene film [uncertain: surface energy named in Wiki…"*
- **bonds_poorly**: slippery plastics (PE or PP) ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…very low-energy surfaces such as polyethylene and polypropylene film [uncertain: surface energy named in Wiki…"*
- **tools**: none, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: paper, card or foam board
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: wood, paper or card, foam

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, load, making_tips_3d_printing, materials, play_and_precision, rules_of_thumb, seal

## 415 Glue stick and starch paste (paper glue stick, wheat-starch paste, methyl cellulose, wallpaper paste)

*adhesives & bonding.* Mild water-based glues for paper and card, either a solid stick rubbed on like a lipstick or a cooked flour or starch paste brushed on, which grip the paper fibres and can often be loosened again with water

*Also covers:* Also covers permanent, washable and colour-change glue sticks, why wet glue makes paper cockle and how to press it flat, wheat-starch paste and methyl cellulose in bookbinding and paper repair (reversible), papier-mâché strips to strengthen cardboard joints, and wallpaper paste. Rubber cement is mentioned under Contact adhesive. Safety: none special; cooked paste goes mouldy, so make it fresh

### What it is

- **plain_name**: Gentle, water-based glues for paper and card: either a solid glue in a twist-up tube that you rub on like a lipstick, or a smooth paste cooked from flour or starch (or mixed from a powder) and brushed on, which soak into the paper fibres and can often be softened again with water
- **term**: Paper glue stick and starch or cellulose paste (wheat-starch paste, flour paste, methyl cellulose, wallpaper paste)
- **aliases**: 
  - glue stick; solid glue stick; stick glue; school glue stick (Wikipedia 'Glue stick'; Canon Creative Park)
  - brand names beginners search for (brands): Pritt Stick, often used in the UK for any glue stick; UHU stic; Elmer's; Scotch; Bostik (Wikipedia 'Glue stick')
  - permanent, washable, acid-free and coloured ('disappearing purple', 'goes on purple dries clear') glue sticks (Wikipedia 'Glue stick'; Elmer's Disappearing Purple listing at Wegmans)
  - wheatpaste; flour and water paste; flour paste; paste (Wikipedia 'Wheatpaste')
  - wheat starch paste; starch paste; rice starch paste: the refined, reversible paste used in book and paper conservation (Wikipedia 'Wheatpaste'; CCI Notes 11/4; Indiana University Libraries Book Repair Manual)
  - methyl cellulose; methylcellulose; MC paste (Wikipedia 'Methyl cellulose'; Conservation Resources)
  - PVA mixture: a 50/50 mix of PVA and methyl cellulose used by bookbinders (Indiana University Libraries Book Repair Manual)
  - wallpaper paste; wallpaper adhesive (Wikipedia 'Wallpaper paste')
  - papier-mache paste (Wikipedia 'Papier-mache'; Make:)
  - not the hot-melt 'glue sticks' that go in a glue gun (see Hot-melt adhesive) (Wikipedia 'Glue stick')
- **family**: adhesives & bonding
- **one_liner**: Mild water-based glues for paper and card, either a solid stick rubbed on from a twist-up tube or a cooked starch, flour or cellulose paste brushed on, which soak into the paper fibres and harden as the water leaves, giving clean, non-toxic paper joints that are often reversible with water.
- **complexity**: Single piece: a one-part glue. A glue stick is a solid soap-thickened glue in a twist-up or push-up tube (Wikipedia 'Glue stick'). A paste is made from a powder (wheat starch, flour, cornstarch or methyl cellulose, or wallpaper-paste flakes) and water, cooked or soaked, then applied with a brush (CCI Notes 11/4; Wikipedia 'Wallpaper paste').
- **how_it_works**: Both kinds are mostly water with a sticky natural or synthetic polymer dissolved or dispersed in it: Pritt Stick is 'Starch ether, polysaccharides, soap and water' (Henkel Pritt Stick TDS), other sticks use PVA, PVP or acrylic polymer (Wikipedia 'Glue stick'), and pastes use cooked starch or methyl cellulose (Wikipedia 'Wheatpaste'; 'Methyl cellulose'). Spread on paper, the wet glue soaks into the fibres; as the water soaks away and evaporates, the polymer dries into a film that locks the fibres of both sheets together ⚑ [uncertain: general adhesive science, stated in our words]. Because the dried film is still water-soluble or water-swellable, starch paste and methyl cellulose can later be softened and undone with water, which is why conservators use them (University of Virginia Library: 'the adhesion is reversible'; Conservation Resources: methyl cellulose 'is fully reversible with water'). The water also makes the paper fibres swell, mostly across the grain, so wet-glued paper can ripple (cockle) or warp unless it is kept flat while it dries (OAB 'grain direction'; Brighton 'Grain Direction'). *(⚑ parts need confirming)*

### Finder attributes

- **job**: 
  - glue or bond: joins paper to paper, paper to card and card to card in crafts, papercraft models, scrapbooks, bookbinding, paper repair, papier-mache and wallpapering (Wikipedia 'Glue stick'; 'Wheatpaste'; 'Wallpaper paste'; Canon Creative Park)
- **motion**: none
- **degrees_of_freedom**: 0: the glued sheets are fixed together once dry
- **special_behaviour**: 
  - none: none of the listed behaviours. Its own useful traits: starch paste and methyl cellulose stay reversible with water for many years, which is why they are used in conservation (University of Virginia Library; Conservation Resources); some glue sticks go on coloured and dry clear so you can see where you have glued (Wegmans/Elmer's); and wet paste or a fresh glue stick bond can be slid into line before it sets (Henkel Pritt Stick TDS; Wikipedia 'Wallpaper paste')
- **holding_principle**: material bond (glue, solvent or melting): the dried glue film grips the fibres of both surfaces
- **input_output**: not applicable
- **power**: passive (no power needed): it sets at room temperature as the water leaves. Starch pastes must be cooked first (CCI Notes 11/4), but that is preparation, not curing
- **removability**: Depends on the glue. Wheat starch paste and methyl cellulose: semi-permanent (can be undone but may damage parts); they are made to be undone later with water, 'even after a long period of time, without damage to the original library item' (University of Virginia Library). Flour paste: harder to undo, because 'Over time the gluten in a flour paste cross-links, making it very difficult to release' (Wikipedia 'Wheatpaste'). Glue stick: permanent in practice once dry; parts can be moved only 'within a short period of time after bonding' (Henkel Pritt Stick TDS), and peeling a dried joint usually tears the paper ⚑ [uncertain]. Washable glue sticks wash out of clothes and off hands (Henkel: 'Washable at 20 C'; Wegmans/Elmer's). *(⚑ parts need confirming)*
- **reuse_cycles**: once: the glue is used up in the joint; to redo it, soften (paste) or tear (glue stick) the joint and apply fresh glue
- **tools_needed**: Glue stick: none; slip a scrap of paper under the edges so the glue doesn't get on the table (Canon Creative Park). Paste: a pan or double boiler or a microwave to cook it, a spoon or whisk, a sieve to remove lumps, a clean lidded jar, and a brush (CCI Notes 11/4; Indiana University Libraries Book Repair Manual). To dry work flat: blotting paper or felt, a non-stick polyester web such as Reemay or Hollytex, and boards with weights or a press (AIC Conservation Wiki 'BPG Drying and Flattening'; Indiana University Libraries Book Repair Manual).
- **seal**: none: the glues are water-soluble and do not seal; methyl cellulose paste is 'not waterproof' (Wikipedia 'Papier-mache')
- **load**: light: strong enough that a good paper-to-paper joint usually holds better than the paper itself, but nothing structural ⚑ [uncertain: no strength tests found]. CCI says cooked wheat starch paste gives 'a strong, reliable bond' for paper; Indiana University calls methyl cellulose on its own 'a weak adhesive'; Wikipedia says glue sticks 'are not as strong as some liquid-based variants'. Weak in peel and under damp conditions; best used over large flat areas in shear ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: Only while wet. Pritt Stick has an open time of up to 210 seconds and sets in 60-90 seconds, and 'Correction of the bonding parts is possible within a short period of time after bonding' (Henkel Pritt Stick TDS). Wallpaper paste is made to bond slowly, which 'gives the wallpaper hanger time to line up the wallpaper' (Wikipedia 'Wallpaper paste'). Methyl cellulose 'dries fairly quickly', so bookbinders add a little PVA when they need more time (Conservation Resources), and the 50/50 PVA mixture 'sets a bit more slowly than PVA, allowing for an extended working time' (Indiana University).
- **play_and_precision**: not applicable (nothing moves). Wet paste lets paper stretch, so parts that were lined up while wet can shrink out of line as they dry, especially if their grain directions differ (Brighton 'Grain Direction': layers that stretch and shrink 'in opposite directions' warp).
- **access_needed**: not applicable: glue is spread on the surfaces before they are pressed together
- **materials**: Bonds well: paper, card, cardboard and paperboard, photos, felt, cork and 'lightweight craft materials' (Henkel Pritt Stick TDS); paper, fabric and artwork (Wegmans/Elmer's); paper-to-paper repairs, Japanese tissue and book cloth in bookbinding (Indiana University); fabric or paper sizing with methyl cellulose (Conservation Resources). Corrugated cardboard is itself made by joining the fluted layer to the liners 'with a starch based adhesive' (Wikipedia 'Corrugated fiberboard'). Wheatpaste posters stick well to 'concrete and metal' walls but it 'does not adhere well to wood or plastic' (Wikipedia 'Wheatpaste'). Ordinary glue sticks are made for paper and card; a special 'PowerPritt' stick was sold for wood, glass and some plastics (Wikipedia 'Glue stick'). Poor choice for 3D prints (PLA, PETG, ABS), metal, glass, rubber, foam and other non-absorbent materials, since the glue needs to soak into fibres ⚑ [uncertain: inferred from the makers' material lists]. On 3D-printer beds a glue stick is used the other way round, as a release layer that stops PETG sticking too hard (Prusa). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: glue sticks are used by children at school and need no tools; paste needs only a few minutes of cooking and a sieve (CCI Notes 11/4). The skills are using little enough water to stop cockling and drying the work flat.

### Making it

- **processes**: 
  - off-the-shelf part: glue sticks, wallpaper-paste flakes, ready-mixed paste, wheat-starch and methyl-cellulose powders (Wikipedia 'Glue stick'; 'Wallpaper paste'; Conservation Resources)
  - home-made: cook wheat starch, cornstarch or flour with water (CCI Notes 11/4; Make: 'Working with Cardboard')
  - paper, card and cardboard work: papercraft models, card making, scrapbooking, bookbinding, papier-mache, wallpapering (Canon Creative Park; Wikipedia 'Wheatpaste'; 'Papier-mache')
  - laser cut: for gluing laser- or plotter-cut card parts ⚑ [uncertain: no page opened]
  - 3D print (FDM): not for joining prints; only as a thin release or adhesion layer on the print bed (Prusa) *(⚑ parts need confirming)*
- **print_in_place**: no: it is a glue, not a printed part
- **making_tips_3d_printing**: Not used to join 3D-printed parts; use a glue made for plastics (see related). Its 3D-printing use is on the print bed: Prusa recommends 'adding PVA glue as a separation layer' on a smooth PEI sheet when printing PETG, because PETG can bond so strongly to clean smooth PEI that removing the print damages the sheet. 'PVA (paper) glue' is usually sold as sticks; 'only a thin layer of glue is enough', spread only under the print, and applied to a cold sheet because 'the PVA glue melts at relatively low temperatures'; marks left in the glue layer 'disappear with the glue after washing' (Prusa 'Print surface preparation'). Some glue sticks are not PVA (Pritt is starch ether, Henkel TDS), so results vary by brand ⚑ [uncertain]. Glue sticks are also handy for sticking paper templates onto parts as cutting or drilling guides ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Glue sticks in permanent, washable, acid-free and colour-change types and in sizes from about 8 g to 43 g (Wikipedia 'Glue stick'; Henkel Pritt Stick TDS https://datasheets.tdx.henkel.com/PRITT-Glue-Stick-en_GB.pdf). Wheat starch and methyl cellulose powders from conservation and bookbinding suppliers (Conservation Resources methyl cellulose: https://www.conservationresources.com/?p=4022). Wallpaper paste as flakes 'based on modified starch, methylcellulose, or clay' to mix with water, or ready-mixed in tubs (Wikipedia 'Wallpaper paste'); some contain a fungicide (Solvite listing at Dunelm). Ready-made 'PVA mixture' or reversible PVA for bookbinding.
- **rules_of_thumb**: 
  - Wheat starch paste for paper (CCI Notes 11/4): 30 g of wheat starch to 300 mL of distilled water; mix the starch with 50 mL of the water, add it to the other 250 mL once boiling in a double boiler, then 'continue heating and stirring for another five to ten minutes'. Thin with water and force through a sieve to remove lumps.
  - Keep paste only a few days: at least 3 days at room temperature or at least 7 days in a fridge, and throw it away 'as soon as it separates or sours' (CCI Notes 11/4); 'a few days without refrigeration, or up to about a week in the fridge', and covering it with water helps (Indiana University Libraries Book Repair Manual).
  - Methyl cellulose for papier-mache: 'one part powder to 16 parts hot water'; it is 'naturally mold free' but 'not waterproof' (Wikipedia 'Papier-mache').
  - Cornstarch papier-mache paste for cardboard: dissolve 1 cup of cornstarch in 2 cups of cold water, stir it slowly into half a gallon of boiling water, then stir while it cools, about 45 minutes, until cloudy and milky (Make: 'Working with Cardboard', Bread & Puppet recipe). Flour paste for papier-mache is mixed 'to the consistency of heavy cream' (Wikipedia 'Papier-mache').
  - Glue stick: rub it on 'two or three times', join the parts, and keep the cap on so it doesn't dry out (Henkel Pritt Stick TDS). Use a glue stick for large areas and a little white (wood) glue on a toothpick for small parts, and put the glue on the place where the tab goes rather than on the tab (Canon Creative Park).
  - To stop cockling and warping, line up the grain of every layer the same way (in a book, parallel to the spine) so they expand and shrink together (OAB 'grain direction'; Brighton 'Grain Direction'), use as little water as you can ⚑ [uncertain], and dry flat between blotters with a non-stick polyester web, 'placed in a press or under weights', changing the damp blotters for dry ones (AIC Conservation Wiki 'BPG Drying and Flattening').
  - Wallpaper paste: paste the paper and let it soak so it expands before hanging; for non-woven papers that don't expand, paste the wall instead (Wikipedia 'Wallpaper paste').
  - Let papier-mache dry right through before painting, or 'mold will form and the product will rot from the inside out' (Wikipedia 'Papier-mache'). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - A school glue stick for sticking worksheets into exercise books and making cards (Wikipedia 'Glue stick')
  - Papier-mache masks, bowls and pinatas made with flour or starch paste (Wikipedia 'Papier-mache'; 'Wheatpaste')
  - Wallpaper hung with paste mixed from flakes (Wikipedia 'Wallpaper paste')
  - Street posters pasted onto walls with wheatpaste, and the starch glue inside every corrugated cardboard box (Wikipedia 'Wheatpaste'; 'Corrugated fiberboard')
- **when_to_use**: For paper and card crafts, papercraft models and scrapbooks, where you want a clean, non-toxic glue that grips quickly and is safe for children (glue stick: Henkel TDS conforms to EN 71 toy safety; Elmer's conforms to ASTM D 4236). For gluing large flat areas of paper, where a glue stick puts on less water than liquid glue ⚑ [uncertain] (Canon Creative Park recommends glue sticks for large areas). For bookbinding, paper mending and mounting where the joint should be reversible later: wheat starch paste and methyl cellulose (Indiana University; University of Virginia Library). For papier-mache, including covering cardboard joints with pasted paper strips to strengthen them (Make: 'A cooked starch-based papier-mache ... can add strength'). For wallpaper. *(⚑ parts need confirming)*
- **when_not_to_use**: For anything that carries load, gets wet or lives outdoors: use PVA, hot glue, or a waterproof glue instead. For plastics, metal, glass, rubber and 3D prints, which these glues don't soak into (use a glue matched to the material). For small, quick structural card joints such as glued tabs on models, where white (PVA) glue grips better (Canon Creative Park). For thin papers you don't want to ripple, where a wet paste can cockle the sheet: use a glue stick, spray adhesive or double-sided tissue tape instead ⚑ [uncertain]. For permanent bookbinding joints between boards, bookbinders use PVA rather than paste (Indiana University: 'PVA is used for all such joints'). *(⚑ parts need confirming)*
- **environment_limits**: Water and damp undo or weaken the bond, since the glues stay water-soluble (Wikipedia 'Methyl cellulose': 'a mild glue which can be washed away with water'; 'Papier-mache': methyl cellulose 'is not waterproof'). Damp also lets starch and flour paste go mouldy; methyl cellulose is 'not subject to deterioration from microbes or enzymes' (Conservation Resources). Paper itself cockles as humidity changes (Interior Angle 'Paper Cockling'). Flour paste becomes harder to release with age as its gluten cross-links (Wikipedia 'Wheatpaste'). Store glue sticks between 5 and 50 C with the cap on; shelf life 36 months (Henkel Pritt Stick TDS). Once set, methyl cellulose 'is unaffected by temperature extremes' (Conservation Resources). Glue-stick joints may lift at the edges with age or heat ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Nothing special for glue sticks and starch pastes: glue sticks for children are tested to toy safety rules (Henkel Pritt Stick TDS: 'UKCA/CE conformance according to EN 71 Safety of Toys') or labelled non-toxic to ASTM D 4236 (Wegmans/Elmer's), and methyl cellulose is 'non-toxic, and not an allergen' (Wikipedia). Cooked paste goes off: make small batches fresh, keep them cool and covered, and throw paste away 'as soon as it separates or sours' (CCI Notes 11/4). Some wallpaper pastes contain a fungicide and say 'Keep away from children and animals' and 'Wash hands thoroughly after use' (Solvite listing at Dunelm), so use flour, starch or plain methyl cellulose paste for children's papier-mache. Take care with boiling water and hot paste when cooking it (Make: recipe uses boiling water).
- **common_failures**: Paper ripples or the work curls as it dries (cockling, warping): use less water, match grain directions, and dry flat between blotters under weight (OAB; Brighton; AIC Conservation Wiki). Edges lift because too little glue was used or the glue stick had dried out: apply two or three strokes right to the edges and keep the cap on (Henkel Pritt Stick TDS). Lumpy paste: sieve it (CCI Notes 11/4). Paste or papier-mache goes mouldy or smells: make it fresh, add a preservative such as oil of cloves or salt, or use methyl cellulose, and let work dry fully before painting (Wikipedia 'Papier-mache'; CCI). A flour-paste repair can't be undone later: use refined wheat starch paste instead (Wikipedia 'Wheatpaste'). Wheatpaste won't stick to wood or plastic (Wikipedia 'Wheatpaste'). Joints fail when wet.
- **related**: 
  - PVA wood glue (white and yellow glue): white school glue is stronger and more water-resistant for paper, card and wood, but wetter, so it cockles thin paper more; mixed 50/50 with methyl cellulose by bookbinders
  - Hide glue (animal glue): the traditional hot glue for wood and bookbinding, also reversible with heat and water
  - Contact adhesive (contact cement): includes rubber cement and spray adhesive for mounting paper without water, so no cockling
  - Hot-melt adhesive (glue gun): fast, thick and gap-filling for cardboard, but lumpy on paper and a burn risk; its 'glue sticks' are a different thing
  - Adhesive tape joint and tape hinge: double-sided tissue tape and transfer tape join paper with no water at all
  - Glued tab joint: the papercraft joint these glues are most often used for
  - Glued joint design: why paper joints should be overlapped in shear rather than pulled apart in peel
  - Double-sided foam tape: thick sticky pads for lifting card layers (3D card toppers)

### Pictures, videos and models

- **links**: 
  - [Pritt Sticks.JPG (Wikimedia Commons, by Elarkon)](https://commons.wikimedia.org/wiki/File:Pritt_Sticks.JPG): A selection of twist-up glue sticks (Pritt Stick international and UK versions and Power Pritt) *(licence: CC BY-SA 3.0 (also GFDL 1.2 or later))*
  - [Wallpaper paste flakes.JPG (Wikimedia Commons, by Sealman)](https://commons.wikimedia.org/wiki/File:Wallpaper_paste_flakes.JPG): Modified-starch wallpaper-paste flakes that are mixed with water to make paste *(licence: CC BY-SA 3.0)*
  - [Papier mache.jpg (Wikimedia Commons, by Larry D. Moore)](https://commons.wikimedia.org/wiki/File:Papier_mache.jpg): A papier-mache pig in progress, made with pasted paper strips over a form *(licence: CC BY 4.0)*
  - [The Tools of Preservation Services: Adhesives (University of Virginia Library exhibit)](https://explore.lib.virginia.edu/exhibits/show/preservation-services/adhesives): Photo of wheat starch paste being applied by hand to Japanese tissue to repair a torn book page, with an explanation of reversible conservation adhesives *(licence: link only)*
  - [Grain Direction (University of Brighton Visual Communication Technical Resource)](https://blogs.brighton.ac.uk/viscommtech/bookarts/worksheets-for-bookbinders/grain-direction): Photos of the roll test and hang-over test for finding paper grain, and why wet glue makes layers warp *(licence: link only)*
- **make_it_yourself**: 
  - [Wheat Starch Paste - Canadian Conservation Institute (CCI) Notes 11/4](https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/wheat-starch-paste.html): Step-by-step recipe for conservation-grade wheat starch paste (30 g starch to 300 mL distilled water, cooked in a double boiler), with storage and thinning advice *(licence: Government of Canada (link only))*
  - [Working with Cardboard: Tips to Cut, Fold, Mold, and Papier-Mache (Make:)](https://makezine.com/article/craft/working-with-cardboard-tips-cut-fold-mold-papier-mache/): A cooked cornstarch papier-mache paste recipe for strengthening cardboard builds with pasted cardboard scraps *(licence: link only)*
- **diagram_idea**: A side view of two sheets with a thin layer of paste between them: arrows show water soaking into the fibres and evaporating, the fibres swelling sideways across the grain, and two outcomes, one sheet rippled (cockled) after drying freely and one flat after drying between blotters under a weight; a small inset shows a glue stick being rubbed on and a brush loading paste.
- **sources**: 
  - https://en.wikipedia.org/wiki/Glue_stick
  - https://en.wikipedia.org/wiki/Wheatpaste
  - https://en.wikipedia.org/wiki/Methyl_cellulose
  - https://en.wikipedia.org/wiki/Wallpaper_paste
  - https://en.wikipedia.org/wiki/Papier-m%C3%A2ch%C3%A9
  - https://en.wikipedia.org/wiki/Corrugated_fiberboard
  - https://datasheets.tdx.henkel.com/PRITT-Glue-Stick-en_GB.pdf
  - https://www.wegmans.com/shop/product/656417-School-Glue-Sticks-Disappearing-Purple-Washable
  - https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/wheat-starch-paste.html
  - https://iu.pressbooks.pub/iulibrariesbookrepairmanual/?p=55
  - https://www.conservationresources.com/?p=4022
  - https://explore.lib.virginia.edu/exhibits/show/preservation-services/adhesives
  - https://blogs.brighton.ac.uk/viscommtech/bookarts/worksheets-for-bookbinders/grain-direction
  - https://oab.lib.utah.edu/?p=1774
  - https://www.conservation-wiki.com/wiki/BPG_Drying_and_Flattening
  - https://interiorangle.co.uk/paper-cockling/
  - https://creativepark.canon/event/howtomake/en/index.html
  - https://makezine.com/article/craft/working-with-cardboard-tips-cut-fold-mold-papier-mache/
  - https://help.prusa3d.com/article/print-surface-preparation_686951
  - https://www.dunelm.com/product/solvite-paste-the-wall-wallpaper-paste-1000249386
  - https://commons.wikimedia.org/wiki/File:Pritt_Sticks.JPG
  - https://commons.wikimedia.org/wiki/File:Wallpaper_paste_flakes.JPG
  - https://commons.wikimedia.org/wiki/File:Papier_mache.jpg

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: paper or card, metal, fabric or leather, stone or concrete ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…her non-absorbent materials, since the glue needs to soak into fibres [uncertain: inferred from the makers' ma…"*
- **bonds_poorly**: PLA, PETG, ABS or ASA, wood, glass or ceramic, rubber, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…her non-absorbent materials, since the glue needs to soak into fibres [uncertain: inferred from the makers' ma…"*
- **tools**: press or vice
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: semi-permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: paper or card, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, how_it_works, load, making_tips_3d_printing, materials, processes, removability, rules_of_thumb, when_not_to_use, when_to_use

## 425 Pinned glue joint (pinning; wire, rod, toothpick or skewer pins)

*adhesives & bonding.* A short pin glued or pushed into matching holes in both parts, so a small glued joint (an arm on a miniature, a broken figure, a resin print, a polymer clay head, foam or foam-board parts) has a hidden pin across it and does not slide or snap off when handled

*Also covers:* Also covers brass rod, paper-clip and garden-wire pins; toothpick and bamboo-skewer pins in foam and foam board; toothpick and wire pins pushed into raw clay before baking; temporary pins (dressmaker's pins, T-pins) holding foam-board parts while glue sets; marking the second hole with a dab of paint or Blu Tack; oversize holes filled with epoxy or epoxy putty; two pins to stop a part spinning; pinning miniatures to their bases; spreading the load in foam with tape, card or a thin plywood washer. Wooden dowels in furniture are Dowel and biscuit joints. Safety: drill with a pin vice (hand drill), not by holding the part under a power drill; clip wire with eye protection; cut skewer ends flush.

### What it is

- **plain_name**: A short bit of wire, rod, toothpick or skewer hidden inside a glued joint, poking into a hole in each part like a little bone, so a small glued-on arm, head or wall doesn't snap or slide off when it is handled
- **term**: Pinned glue joint (pinning; pinned butt joint)
- **aliases**: 
  - pinning (miniature and model-kit term; Wikipedia 'Pinning (modelling)')
  - pinned joint / wire pin and glue
  - brass-rod pin, paper-clip pin, garden-wire pin
  - toothpick pin, toothpick joint (foam board; foldnfly 'Toothpick joints')
  - skewer pin, BBQ or bamboo skewer through foam (Flite Test)
  - neck pin or toothpick neck (polymer clay figures)
  - base pin (pinning a miniature to its base)
  - dowelling a broken figure (repair wording) ⚑ [uncertain]
  - pinning a hinge (model-aircraft term for a toothpick or straight pin pushed through a flat hinge; see Slot-in model hinge) *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: interlocking joints & joinery, locating & alignment, everyday fasteners & fixings
- **one_liner**: Drill (or poke) a matching hole into each of the two faces to be joined, push a short pin into both, and glue it all together, so the joint is held by the glue and also by a hidden pin that stops it sliding or snapping off.
- **complexity**: A few parts: the two parts being joined, one or two pins (brass rod, paper-clip steel, garden wire, carbon rod, a round toothpick or a bamboo skewer) and the glue or filler (superglue, epoxy, epoxy putty, hot glue or, for raw clay, the clay itself). Temporary pins (dressmaker's pins, T-pins) are only used to hold parts while glue sets.
- **how_it_works**: A plain glued butt joint between two small faces is held only by a thin layer of glue, which is brittle (especially superglue on metal) and breaks with a knock or a sideways bend. A pin that goes into both parts carries that sideways (shear) and bending load itself, so the glue only has to stop the pin pulling out; the long glued surface along the pin is much bigger than the joint face (Bolter and Chainsword: 'the strength of the bond is in the surface area'). Tabletop Gaming calls the wire 'a support beam of sorts'. One round pin still lets a part turn on it, so two pins, or one pin plus a shaped joint face, stop it spinning (Bolter and Chainsword). In soft foam a toothpick or skewer pushed through several layers does the same job, and in raw polymer clay a wire or toothpick is pushed in before baking so the part sits on it.

### Finder attributes

- **job**: 
  - glue or bond: it is a way of making a small glued joint much stronger
  - join and hold: the pin holds the parts together against knocks and sideways loads
  - line parts up exactly: matching holes put a part back in the same place, and pins pushed into a cork or base hold a miniature while it is painted (Bolter and Chainsword)
  - let it move (turn, slide or bend): only the unglued toothpick version in foam board, which foldnfly says can make 'joints that can freely pivot or swivel'
- **motion**: none (glued); a single unglued toothpick or skewer pin in foam can act as a pivot (rotate)
- **degrees_of_freedom**: 0 once glued. A single round pin before gluing leaves 2 (turning around the pin and sliding along it); a second pin, or a shaped joint face, removes the turning (Bolter and Chainsword)
- **special_behaviour**: 
  - self-aligning or self-centring: once the holes are matched, the pin puts the part back in exactly the same place every time you dry-fit it
  - none of the others: it has no lock, release, click or spring action
- **holding_principle**: 
  - material bond (glue, solvent or melting): superglue, epoxy or epoxy putty glues the pin into both holes and the faces together
  - shape (the parts interlock; form-fit): the pin sitting in both holes stops the parts sliding sideways or snapping off even if the face glue lets go
  - friction or clamping (force-fit): toothpicks and skewers pushed tightly into foam, and temporary dressmaker's pins or T-pins, hold by friction only
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent once glued (the pin can only be got out by cutting or drilling it out); temporary pins in foam board and dry-fitted pins in a painting cork are removable
- **reuse_cycles**: once for glued pins; many times for temporary pins and unglued push-in pins in foam (but foam holes wear bigger each time; Flite Test comments)
- **tools_needed**: a pin vice (hand drill) with small drill bits (1.0 mm is the common hobby size; Tabletop Gaming), side cutters to clip wire, a file to roughen the pin, superglue or slow epoxy, epoxy putty for gaps, paint or Blu Tack to mark the second hole; for foam just a toothpick or skewer, a knife and hot glue or foam-safe glue; safety glasses when clipping wire (CCOHS)
- **seal**: none
- **load**: light: for miniatures, models, figures, props and foam models handled by hand, not for anything structural. Strong against sideways knocks and bending across the joint (the pin carries them) and against twisting when two pins are used; weakest in straight pull-out, which only the glue along the pin resists. In soft foam the weak point is the foam around the pin, which crushes and tears (Flite Test comments). No published strength figures were found ⚑ [uncertain] *(⚑ parts need confirming)*
- **adjustable**: no once glued; the pin can be bent slightly to fine-tune the pose before the second side is glued (Spikey Bits; Bolter and Chainsword)
- **play_and_precision**: small: the hole is drilled 0.25 to 0.5 mm larger than the pin to leave room for glue and for small misalignment (Bolter and Chainsword), and the glue or epoxy putty fills the slop; Starship Modeler forum members deliberately drill one hole oversize so the two holes need not line up exactly. Locating accuracy depends on how well the second hole is marked
- **access_needed**: both sides (the two faces being joined must be reachable to drill before assembly); one side only when the joint is glued first and then drilled through from the most reachable side and pinned (Starship Modeler forum)
- **materials**: Pins: brass rod (won't rust, easy to cut and file; Bolter and Chainsword), steel paper clips (harder on cutters, can rust over time; Bolter and Chainsword), garden wire (Tabletop Gaming), carbon-fibre rod (Starship Modeler), round toothpicks, bamboo BBQ skewers. Parts it suits: metal (pewter) and plastic miniatures, resin kits and resin 3D prints, FDM prints, baked or raw polymer clay, air-dry clay, foam board, Depron and EPO foam planes, balsa. Glue: superglue (cyanoacrylate) for metal, plastic and resin; slow epoxy or epoxy putty for larger or loose-fitting parts; hot glue or foam-safe glue in foam, because ordinary superglue can melt foam (foldnfly). Not suited to: wood furniture (use dowel joints), parts too thin to hold a hole, or anything that must come apart again
- **maker_difficulty**: easy to moderate: easy in foam (push a toothpick in) and in raw clay; moderate in metal, resin and small plastic parts, where the hard part is marking and drilling the second hole in line with the first (Tabletop Gaming; Starship Modeler: 'The marking & drilling of holes is about the toughest part')

### Making it

- **processes**: 
  - off-the-shelf part: brass rod, piano wire or carbon rod as pin stock; pin vice and micro drill bits
  - 3D print (resin): pinning large or heavy resin-printed parts and broken resin figures (Starship Modeler forum covers resin kit parts)
  - 3D print (FDM): drill into printed parts, or design pin holes into the cut faces (see Split-part joints for large prints)
  - woodwork: balsa model parts and hinge pinning with toothpicks (Airfield Models)
  - hand work in foam board, EPO and Depron foam and polymer clay (no machine needed)
- **print_in_place**: no: the pin is a separate part pushed or glued in after printing; designed-in holes can be printed so that only the pin is added ⚑ [uncertain] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) For prints you design yourself, put the pin holes into the CAD model on both faces so they line up exactly; this is the 'pegs and holes' or 'loose pin' method covered in Split-part joints for large prints (item 62). 2) Small printed holes usually come out undersize, so print them slightly small and open them to size with a drill bit in a pin vice afterwards ⚑ [uncertain]. 3) For already-printed or broken parts, drill with a pin vice, not a power drill: the part can't be held safely under a power drill (CCOHS) and a fast drill wanders and breaks through thin walls (Airfield Models, about balsa). 4) Resin prints are brittle: use a pin of 1 mm or less in small parts, drill slowly, and back the bit out often to clear the swarf (Bolter and Chainsword recommends ground, not rolled, bits for small holes). 5) Hollow resin prints have thin walls, so pin where the wall is solid or fill the cavity with epoxy putty first, the way Bolter and Chainsword fills bases with Milliput before drilling. 6) Make holes 0.25 to 0.5 mm larger than the pin and glue with superglue for a snug fit or slow epoxy or epoxy putty for a loose one (Bolter and Chainsword; Starship Modeler). 7) Roughen the pin with a file for extra grip (Bolter and Chainsword). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Brass rod (common hobby sizes 0.020 in / 0.51 mm and 0.032 in / 0.81 mm; Bolter and Chainsword), 'pinning rod' or 'pinning wire' sold for miniatures, piano wire, carbon-fibre rod, round toothpicks, bamboo BBQ skewers, dressmaker's pins and T-pins (temporary), pin vice (pin vise) hand drill with collets, ground HSS or cobalt micro drill bits (0.7 mm and 1.0 mm are the most used; Bolter and Chainsword), side cutters, superglue (cyanoacrylate), slow-setting two-part epoxy, epoxy putty (e.g. Milliput or 'green stuff', brands), Blu Tack (brand) for marking holes, silicone fuel tubing to pad T-pins (Model Airplane News)
- **rules_of_thumb**: 
  - Drill the hole 0.25 to 0.5 mm larger than the pin to leave room for glue; e.g. 0.8 mm brass rod in a 1.0 mm hole (Bolter and Chainsword forum)
  - 1.0 mm is the standard bit that most hobby drills come with and suits garden wire pins in metal miniatures (Tabletop Gaming)
  - Each hole should be at least half the length of the pin deep, i.e. the pin is fully buried (Starship Modeler forum); about 1/4 in (6 mm) deep is fine for typical resin model parts (Starship Modeler forum)
  - Up to a point, longer pins are stronger; about 20 mm of pin for a trooper on its base, trimmed to 5 to 10 mm showing below the feet when fitted (Bolter and Chainsword forum)
  - Use two pins (or two thin pins in one slightly larger hole) to stop a part with one small contact point loosening or spinning (Bolter and Chainsword forum)
  - Dry-fit and cut the pin to length before any glue goes on; cut it too long rather than too short (Tabletop Gaming)
  - For a pinned hinge in balsa: drill 3/32 in (2.4 mm) through surface and hinge, push in a round toothpick, trim flush, add a drop of thin CA (Airfield Models)
  - In foam, spread the load where a pin goes through a wall that is pulled on: glue a popsicle stick or an old gift card with a hole in it over the skewer hole, or back it with packing tape (Flite Test Old Fogey comments); a thin plywood washer does the same ⚑ [uncertain] *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - a metal or resin tabletop miniature whose arm, weapon or wings are pinned on, and the miniature pinned to its base
  - a polymer clay figure whose head sits on a toothpick or wire through the neck
  - a foam-board model plane or school model held together with toothpicks and hot glue, or with skewers poking through the fuselage for the rubber-band wing hold-down
  - a broken ornament or figurine repaired with a hidden pin
- **when_to_use**: When a small glued joint has little contact area and will be knocked or handled: heavy metal miniatures used for gaming (Wikipedia), conversions where parts were not designed to fit together (Wikipedia), big or heavy resin parts (Starship Modeler), attaching a figure firmly to its base (Bolter and Chainsword), polymer clay heads, hearts and limbs that would otherwise just sit on top (a toothpick or wire pushed in before baking; The-Leaky-Cauldron.org and Tiny Pandora clay tutorials), and foam-board or foam-plane parts where glue alone tears the soft foam (foldnfly; Flite Test). Also as a quick way to hold foam-board walls square while glue sets, using pins (Studio Matrx: 'glue and hold with clamps/pins').
- **when_not_to_use**: Display models that are rarely handled often don't need it (Wikipedia). Not for parts too thin to hold a hole without breaking through. Not for wooden furniture and boxes: use Dowel and biscuit joints. Not when the part must come apart again: use a magnet joint or an unglued locating pin. Not for loads that matter (shelves, anything that could fall on someone): use proper fasteners. Not for steel pins that must be pressed in hard: see Drive-in fixing pins.
- **environment_limits**: Limits are those of the glue: superglue is brittle and 'not recommended on parts that will flex or twist under load' (Motion RC), so pinned superglue joints still crack if bent; hot glue in foam softens in heat (see Hot-melt adhesive). Steel paper-clip pins can rust after a long time (Bolter and Chainsword); brass does not. In polymer clay, wood (toothpicks, skewers) holds moisture that can expand in the oven and crack the piece, so Sculpey's blog advises drying wooden parts in the oven first; metal does not have this problem (Sculpey blog). Foam holes wear larger with use and after hard landings (Flite Test comments).
- **safety_notes**: Drill small parts with a hand pin vice, not by holding the part under a power drill: CCOHS says 'Never drill with one hand while holding the material with the other' and to clamp small stock so it can't spin. Wear safety glasses when clipping wire, because cut ends fly (CCOHS: eye protection 'whenever there is a potential hazard from flying particles, pieces of wire'), and don't cut hardened wire (e.g. piano wire) with ordinary cutters (CCOHS). Superglue bonds skin. Cut skewer and toothpick ends flush or cap them so no sharp point sticks out. Temporary dressmaker's pins and T-pins are sharp: count them out and back in. Keep cut wire offcuts away from children and pets.
- **common_failures**: 1) Holes don't line up, so the part sits crooked: mark the second hole by touching a blob of paint on the pin end (Tabletop Gaming), a ring of thick paint around the first hole (Spikey Bits), Blu Tack (Wikipedia) or a sharpened pin tip (Starship Modeler), or drill one hole oversize and fill it with epoxy putty (Starship Modeler). 2) Superglue grabs before the pin is fully in: dry-fit first and push it home quickly (Tabletop Gaming). 3) Drill breaks or wanders: use ground (not rolled) bits and a pin vice, and drill straight (Bolter and Chainsword; Spikey Bits). 4) Drilling right through a thin part: mark the depth and stop early (Spikey Bits). 5) Glue squeezed out of the hole stops the parts closing flush: lightly countersink the hole edge (Bolter and Chainsword). 6) Pin pulls out of a smooth hole: roughen the pin with a file (Bolter and Chainsword). 7) Part spins on a single pin: add a second pin (Bolter and Chainsword). 8) Skewer or toothpick holes in foam tear out: spread the load with tape, card or a popsicle stick (Flite Test comments). 9) Toothpick in raw clay leaves a weak, crumbly joint or cracks: bake the body first, then add the head on the baked pin and smooth it in (Ann's Clay How To page), or use wire instead.
- **related**: 
  - Dowel and biscuit joints: wooden pegs or biscuits in sized holes in woodwork; pinning is the same idea scaled down for models, using wire and glue
  - Locating pins and hole-and-slot: precise pins for exact, repeatable location in machines, usually without glue
  - Split-part joints for large prints: pegs, dowels and puzzle joints designed into the cut faces of a 3D print
  - Drive-in fixing pins (roll pin, spring pin, dowel pin): steel pins held by a press or spring fit, not glue
  - Epoxy putty: the filler used to fill gaps and oversize holes around pins
  - Cyanoacrylate (superglue): the usual glue for pinning metal and resin miniatures
  - Wire and foil armature: a full wire skeleton inside a clay figure, rather than a short pin across one joint
  - Magnet joint: lets a pinned-on part come off again (swappable weapons on miniatures)
  - Slot-in model hinge: 'pinning a hinge' with a toothpick through the hinge leaf is the same trick

### Pictures, videos and models

- **links**: 
  - [Hobby tips: how to pin metal miniatures (Tabletop Gaming, 2019)](https://tabletopgaming.co.uk/features/hobby-tips-how-to-pin-metal-miniatures): Step-by-step photos of drilling a 1.0 mm hole in a metal miniature's arm and body, dry-fitting garden wire, cutting it to length and gluing *(licence: link only)*
  - [This is How To Pin Metal Miniatures (the right way) (Spikey Bits, with Next Level Painting video)](https://spikeybits.com/this-is-how-to-pin-metal-miniatures-the-right-way/): Embedded video and text: drilling, marking the second hole with a ring of thick paint, paper-clip or brass pins *(licence: link only (embedded YouTube video))*
  - [Foam Core Tools & Techniques (Fold 'N Fly)](https://www.foldnfly.com/lounge/foam-core-tools-techniques.php): Photo labelled 'Toothpick joints': toothpicks poked through several layers of foam board, plus glue and folding techniques *(licence: link only)*
  - [FT Old Fogey Scratch Build (Flite Test)](https://www.flitetest.com/articles/FT_Old_Fogey_Scratch_Build): Build photos and video of a foam-board plane with BBQ skewers through the fuselage as rubber-band anchors; comments on skewer holes tearing out and fixes *(licence: link only)*
  - [Hinges for Model Aircraft, section 'Pinning Hinges' (Airfield Models)](https://airfieldmodels.com/information_source/model_aircraft_hardware/hinges.htm): Photos and text on pinning a glued flat hinge with a round toothpick through a 3/32 in hole *(licence: link only)*
- **make_it_yourself**: 
  - [Pin Vise (mdkendall, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/133502-pin-vise): A printable pin vice whose jaws grip tools with a 1/8 in shank, for drilling small holes by hand; read through the Printables public API *(licence: CC BY-SA)*
  - [Pin Vise (David Gunter, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/543282-pin-vise): A printable pin vice for 2 to 3 mm drills and taps, printed in PLA+ upright with no supports; read through the Printables public API *(licence: CC0 (Public Domain))*
- **diagram_idea**: A cut-away of a miniature's arm and shoulder pulled slightly apart, showing a wire pin glued into a hole in each face, with arrows showing that a sideways knock is carried by the pin, and a second view of a toothpick pushed through two layers of foam board.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pinning_(modelling)
  - https://tabletopgaming.co.uk/features/hobby-tips-how-to-pin-metal-miniatures
  - https://spikeybits.com/this-is-how-to-pin-metal-miniatures-the-right-way/
  - https://bolterandchainsword.com/topic/344681-some-very-noobish-questions-priming-and-assembling-related/
  - https://mail.starshipmodeler.net/talk/viewtopic.php?p=983361
  - https://www.foldnfly.com/lounge/foam-core-tools-techniques.php
  - https://www.flitetest.com/articles/FT_Old_Fogey_Scratch_Build
  - https://www.studiomatrx.org/students/model-making/cutting-and-finishing
  - https://membership.modelairplanenews.com/members/soft-hold-downs
  - https://airfieldmodels.com/information_source/model_aircraft_hardware/hinges.htm
  - https://www.motionrc.com/blogs/motion-rc-blog/benchcraft-accessories
  - https://www.oocities.org/Athens/Olympus/3457/clay_howto.htm
  - https://www.the-leaky-cauldron.org/?p=11233
  - https://cdn.shopify.com/s/files/1/1174/5346/files/CthulhuTutorial2019.pdf?41
  - https://blog.sculpey.com/creating-armature-that-supports-your-sculpts
  - https://ccohs.ca/oshanswers/safety_haz/hand_tools/pliers.html
  - https://ccohs.ca/oshanswers/safety_haz/power_tools/drills.html
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: metal
- **bonds_poorly**: wood, paper or card, foam
- **tools**: drill and tap, press or vice, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, foam, clay or putty

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, load, making_tips_3d_printing, print_in_place, rules_of_thumb

## 428 Liquid-clay bond (bakeable clay glue, bake-in-stages join)

*adhesives & bonding.* A thin coat of liquid polymer clay brushed between two pieces of polymer clay, raw or already baked, which fuses them into one when the piece is baked again; used to add small details and to build a sculpture in several bakes

*Also covers:* Also covers raw-to-raw, raw-to-baked and baked-to-baked joins, a raw-clay bridge between baked parts, thick bakeable pastes, and gel superglue for baked parts that cannot be baked again. Brand of clay changes the result. Safety: bake at the packet temperature with ventilation; burnt polymer clay gives off hydrogen chloride; do not use for food items.

### What it is

- **plain_name**: Brushing a thin coat of runny oven-bake clay between two pieces of polymer clay (soft or already baked) so that, when the piece goes back in the oven, the two pieces fuse into one
- **term**: Liquid-clay bond (bakeable bond with liquid polymer clay; bake-in-stages join)
- **aliases**: 
  - liquid clay as glue / liquid polymer clay (Wikipedia 'Polymer clay': 'can be used as an adhesive to combine pieces')
  - bakeable glue, bakeable bond, baked bond, bonding agent (Blue Bottle Tree)
  - vinyl plastisol (the material's proper name; Blue Bottle Tree)
  - oven-bake clay adhesive
  - Sculpey Bake and Bond / Bake 'n Bond / Sculpey Oven-Bake Clay Adhesive / Oven Bond Adhesive (brand; the same product renamed)
  - Translucent Liquid Sculpey (TLS), Clear Liquid Sculpey (CLS) (brand)
  - FIMO liquid oven-bake liquid gel (brand)
  - Kato Liquid Polyclay, Kato PolyPaste (brand)
  - Cernit Glue, Lucy Clay Glassymer Glue and Gel, PVClay Gel (brand)
  - Genesis Thick Medium (brand; heat-set paint medium, no longer made)
  - raw clay bridge (a thin snake of soft clay between two baked parts)
  - baking in stages, partial baking, rebaking (sculptors' wording) ⚑ [uncertain] *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: welding, brazing & soldering
- **one_liner**: A thin layer of liquid polymer clay (the same PVC-and-plasticiser material as the clay, without the fillers) is brushed onto the joint between two polymer clay parts, and baking the piece again cures it so the parts become one solid piece.
- **complexity**: A few parts: the two polymer clay parts (raw, baked, or one of each), the bonding layer (a liquid clay, a thick bakeable paste or gel, or a thin snake of raw clay used as a bridge between baked parts), and an oven. Sometimes a temporary support (card, foil or a prop) to hold the parts together until baked.
- **how_it_works**: Polymer clay is a PVC resin powder in a liquid plasticiser (a plastisol); baking at about 129 to 135 °C makes the resin take up the plasticiser and set solid (Wikipedia 'Polymer clay'). Liquid clay and the 'bakeable glues' are the same plastisol 'without the binders that turn polymer clay into a putty', so they are not real glues at all (Blue Bottle Tree). Brushed into a joint, the liquid wets both surfaces, even baked ones, and when the piece is baked again it cures together with them into one continuous plastic. Nothing holds until it is baked, so the parts have to be supported in place until then; one Sculpey designer leaves a raw-to-baked joint resting overnight first 'so that the plasticizer in all the layers could leach into each other' (Sculpey blog, Oven Bake Clay Adhesive).

### Finder attributes

- **job**: glue or bond: it fuses polymer clay parts into one piece in the oven, join and hold: adds small details (salt on a clay cracker, feet on a tray) and assembles a sculpture built in several bakes
- **motion**: none
- **degrees_of_freedom**: 0: once baked the two parts are one rigid (or slightly bendy) piece
- **special_behaviour**: none: it has no lock, release, click or spring action; its only trick is that it stays wet and movable until it is baked
- **holding_principle**: 
  - material bond (glue, solvent or melting): the liquid clay cures in the oven together with the clay on both sides, much like a weld in plastic
  - shape (the parts interlock; form-fit): only in the raw-clay-bridge and wrap-around versions, where soft clay pressed over or between parts also grips them by shape
- **input_output**: not applicable
- **power**: passive (no power needed) in use; it needs an oven (heat) once to cure the joint
- **removability**: permanent: once baked the joint can only be broken or cut apart
- **reuse_cycles**: once
- **tools_needed**: a small brush, needle tool or toothpick to apply the liquid clay; rubbing alcohol to wipe oils off baked clay before bonding (Blue Bottle Tree); a home or toaster oven with a separate oven thermometer (Sculpey FAQ); card, foil or a prop to hold parts in place until baked; gel superglue instead for baked parts that cannot be baked again
- **seal**: none (it is not meant as a seal), although a cured joint is waterproof: Sculpey's blog calls clay bonded to cork with it 'completely waterproof'
- **load**: light: for jewellery, figures, miniatures and decorations. Blue Bottle Tree's hand test found joints made with a bonding agent 'strong and nearly impossible to break', while some brands' plain raw-to-raw joints could be flicked off with a finger. No published strength figures found ⚑ [uncertain]. The cured joint stays slightly flexible, so it copes with knocks better than brittle glues; FIMO liquid is 'Extremely flexible after hardening' (STAEDTLER), and thin liquid clays can cure rubbery (Blue Bottle Tree) *(⚑ parts need confirming)*
- **adjustable**: yes, until it is baked: the parts can be slid into position while the liquid clay is still runny (Sculpey blog); no once baked
- **play_and_precision**: not applicable
- **access_needed**: both sides (the two joining faces must be coated before they are pressed together)
- **materials**: Joins PVC polymer clay to itself in every combination: raw to raw, raw to baked and baked to baked (Blue Bottle Tree; Sculpey blog). The brand matters: in Blue Bottle Tree's test Fimo Professional bonded well to itself even without liquid clay, Cernit bonded well raw to raw, and Premo, Souffle and Kato bonded poorly unless a bonding agent was used. Sculpey's oven-bake clay adhesive also bonds raw clay to porous things that can go in the oven: wood, cork, cardboard, papier-mâché and heavy paper (Sculpey blog), and bare wood should be baked first at 135 °C for 20 minutes to drive out moisture and sap (Sculpey FAQ). Does not work: smooth metal, glass and other non-porous surfaces ('Clay cannot be bonded to metal or other non-porous surfaces', Sculpey FAQ; wrap or embed instead, see Baked-in findings); air-dry clay, pottery clay or epoxy putty (different materials, see Score-and-slip join and Epoxy putty); anything that cannot take about 130 °C, such as plastic 'crystals', amber, pearls (Blue Bottle Tree) or PLA prints ⚑ [uncertain] *(⚑ parts need confirming)*
- **maker_difficulty**: easy: brush, press and bake; the skill is in supporting the parts until baked and in baking fully at the right temperature

### Making it

- **processes**: hand work in polymer clay (sculpting, jewellery, miniatures) with a home or toaster oven, off-the-shelf part: liquid polymer clay or bakeable paste from a craft shop
- **print_in_place**: no: this is a bond between oven-bake clay parts, not a printed joint
- **making_tips_3d_printing**: not applicable as a printed joint. Where a maker combines prints and polymer clay: printed cutters and texture tools for clay are common, but a PLA print should not be baked with the clay, because PLA softens far below polymer clay baking temperatures ⚑ [uncertain]; bake the clay parts on their own and glue them to the print afterwards with gel superglue or epoxy (see Cyanoacrylate and Two-part epoxy). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Liquid polymer clay (translucent, clear or coloured; e.g. Translucent Liquid Sculpey, Clear Liquid Sculpey, FIMO liquid, Kato Liquid Polyclay, PVClay Gel, brands), thick bakeable pastes (Sculpey Oven-Bake Clay Adhesive, formerly Bake and Bond; Kato PolyPaste, brands), Cernit Glue and Lucy Clay Glassymer (brands), an oven thermometer, a soft brush or needle tool, rubbing alcohol, gel superglue (e.g. Loctite Gel Control, Gorilla Glue Gel Superglue, Zap-a-Gap, brands) for parts that cannot be rebaked
- **rules_of_thumb**: 
  - Polymer clay cures at 129 to 135 °C (265 to 275 °F), held for 15 minutes per 6.4 mm (1/4 in) of thickness (Wikipedia 'Polymer clay'); always follow the packet for the brand you use
  - Sculpey lists most of its clays at 275 °F for 15 or 30 minutes per 1/4 in, Liquid Sculpey at 275 to 300 °F (135 to 149 °C) for 15 to 30 minutes and Clear Liquid Sculpey at 300 °F (149 °C); turn the oven fan (convection) off when baking liquids (Sculpey FAQ)
  - FIMO liquid: 130 °C for 20 minutes (STAEDTLER product page)
  - When mixing brands or products, bake at the highest temperature and for the longest time any of them needs (Sculpey FAQ)
  - Sculpey Bake and Bond 'doesn't cure fully at the regular temps. You have to heat it quite a bit hotter. Check the label' (Blue Bottle Tree, earring posts)
  - Use a separate oven thermometer: oven dials are often wrong (Sculpey FAQ); do not heat polymer clay above 175 °C (350 °F) (Premo safety data sheet, Potterycrafts, March 2022)
  - Raw to baked: let the joint rest overnight before baking so the plasticiser can soak across (Sculpey blog, Oven Bake Clay Adhesive); on wood or cardboard let the adhesive soak in for at least 30 minutes until it turns cloudy (same source)
  - Baked to baked: rub on a 'seriously thin' layer and put a thin snake of raw clay between the parts as a bridge (Blue Bottle Tree, describing Genesis Thick Medium, no longer made)
  - Wipe baked clay with alcohol to remove oils before bonding; any glue sticks only to paint, sealer or mica powder if those are on the surface, so bond bare clay (Blue Bottle Tree)
  - Stir liquid clays well before use (Blue Bottle Tree)

### When to use it

- **everyday_examples**: 
  - tiny 'salt' crystals or sprinkles fixed onto a miniature clay cracker or pastry (Sculpey blog)
  - clay feet added to an already-baked clay trinket tray (Sculpey blog)
  - a polymer clay figure sculpted in stages: head baked first, then the body added and baked again
  - polymer clay mosaics or coasters on wood or cork bases (Sculpey blog)
- **when_to_use**: When both parts are polymer clay and the whole piece can go back in the oven: adding small details that would otherwise fall off (Sculpey blog), joining delicate raw parts that would squash if pressed hard (Sculpey blog: 'just a drop of the liquid can be placed at the joint'), adding new raw clay to a piece that is already baked, repairing a broken baked piece, and building a big or fiddly sculpture in several bakes so finished parts are not squashed while you work on the rest. Also for covering wood, cork, cardboard or paper with polymer clay (Sculpey blog). Blue Bottle Tree recommends it whenever a strong bond is needed, especially with Premo, Souffle or Kato.
- **when_not_to_use**: When the piece cannot be baked again (it has glued-on parts, resin, a magnet or plastic decorations): use a gel superglue instead (Blue Bottle Tree), or a two-part epoxy, which 'can become brittle with age and pop off' (Blue Bottle Tree). For metal findings (bails, posts, pins): embed them in the clay instead, because liquid clay does not bond to bare metal (Sculpey FAQ; see Baked-in findings). For air-dry or pottery clay: use the Score-and-slip join. For epoxy putty: it sets by itself without baking (see Epoxy putty). For anything that will hold food or drink: polymer clay is not recommended for food items (Wikipedia 'Polymer clay').
- **environment_limits**: Once cured it behaves like the clay itself: polymer clay is 'strong, durable, and waterproof', and properly baked unsealed clay buttons survive the washing machine and tumble dryer (Blue Bottle Tree, buttons). It stays a little flexible. Underbaking leaves the clay and the joint weak (Blue Bottle Tree). Heat limits are those of the clay; the safety data sheet says not to heat it above 175 °C (Premo SDS). Plasticisers stay in the cured clay and can leach out (Wikipedia 'Polymer clay').
- **safety_notes**: Heat joining: the hazards are the oven, not the liquid. Bake at the temperature on the packet with a separate oven thermometer and good ventilation, such as the cooker-hood fan or an open window (Sculpey FAQ). If clay is overheated or burnt it blackens and can give off hydrogen chloride (hydrochloric acid) vapour, plus carbon monoxide and carbon dioxide; turn off the oven, open the nearest window and get fresh air (Premo safety data sheet; Wikipedia 'Polymer clay'). Sculpey says overheated clay gives off fumes that are 'not acutely toxic' but irritate eyes, nose and mouth (Sculpey FAQ). Never use a microwave, and baking should be done by an adult (Sculpey FAQ). Keep clay off surfaces also used for food unless there is a barrier such as parchment or foil (Sculpey FAQ). Do not use for items that hold or serve food or drink, because plasticisers (some phthalates are endocrine disruptors) remain in the cured clay (Wikipedia 'Polymer clay'). If a joint is repaired with superglue and then rebaked, the breakdown is 'really minor' but the glue weakens; don't bake resin, not even UV resin, which is highly allergenic (Blue Bottle Tree, earring posts). Wash hands after handling clay (Premo safety data sheet).
- **common_failures**: 1) Parts slide or drop off before the bake, because liquid clay is runny: use a thicker paste (Bake and Bond, PolyPaste) that 'stays put', or prop the parts up (Blue Bottle Tree). 2) Raw-to-baked or baked-to-baked joints pull apart after baking: wipe the baked surface with alcohol first, use a better bonding agent (Fimo Liquid gave the strongest joints in Blue Bottle Tree's test), add a raw clay bridge, or let the joint rest before baking (Sculpey blog). 3) Some brands bond poorly even raw to raw (Premo, Souffle and Kato in Blue Bottle Tree's test): add liquid clay to every joint. 4) Joint stays weak or peels: Bake and Bond was not baked hot enough (Blue Bottle Tree), or the whole piece was underbaked; check the temperature with an oven thermometer. 5) Bonding agent put on paint, sealer or mica powder holds only to that coating (Blue Bottle Tree). 6) Ripples in liquid clay from the oven fan (Sculpey FAQ). 7) Thin liquid clays cure rubbery, which feels wrong on an earring back (Blue Bottle Tree). 8) Darkened or bubbling (burnt) clay from an oven that runs hot; white, translucent and light clays discolour most easily, so bake on card stock or parchment and check with a thermometer (Sculpey blog, 6 things to avoid). 9) Underbaked clay is 'softer and more fragile', and brittleness can also come from baking too long (same source).
- **related**: 
  - Score-and-slip join: the same idea for water-based pottery and air-dry clay, using the clay thinned with water instead of liquid plastic, and drying instead of baking
  - Baked-in findings: how metal loops, pins and posts are held in polymer clay by shape, often with a dip of liquid clay
  - Melted plastic weld: joining plastic to itself by melting it, with a soldering iron or hot air instead of an oven
  - Solvent welding: joining plastic to itself by dissolving its surface rather than curing a liquid of the same plastic
  - Cyanoacrylate (superglue): gel superglue is the choice for baked polymer clay that cannot be rebaked
  - Two-part epoxy: an alternative cold glue for baked clay, which can turn brittle with age
  - Elastomeric solvent glue (flexible craft glue): often recommended for clay, but Blue Bottle Tree finds it often does not set properly on polymer clay
  - Epoxy putty: a two-part modelling putty that sets without baking
  - Pinned glue joint: a wire or toothpick across the joint to stop a clay head or limb snapping off
  - Wire and foil armature: the skeleton that thin clay parts are built over

### Pictures, videos and models

- **links**: 
  - [Bonding Polymer Clay to Itself – Testing Bakeable Bonds (The Blue Bottle Tree, Ginger Davis Allman)](https://thebluebottletree.com/bonding-polymer-clay-to-itself-testing-bakeable-bonds/): Photos of test tiles in five clay brands with circles bonded raw-to-raw, raw-to-baked and baked-to-baked using ten bakeable glues, and the results *(licence: link only)*
  - [How to Effectively Use Oven Bake Clay Adhesive (Sculpey blog, Amy Koranek, 2022)](https://blog.sculpey.com/how-to-effectively-use-oven-bake-clay-adhesive): Photos of raw-to-raw, raw-to-baked and clay-to-wood, cork, cardboard and paper bonds with Sculpey's bakeable adhesive *(licence: link only)*
  - [The Diversity of Liquid Polymer Clay (Sculpey blog, Whitney Gallina)](https://www.sculpey.com/blogs/blog/the-diversity-of-liquid-polymer-clay): Photos of liquid clay used to fix tiny details (salt on a clay cracker) and eye pins, compared with score and slip for air-dry clay *(licence: link only)*
  - [What's the Best Glue for Polymer Clay? (The Blue Bottle Tree)](https://thebluebottletree.com/best-glue-for-polymer-clay/): Guide with photos comparing baked bonds (liquid clay, Bake and Bond, PolyPaste) with superglue, epoxy, PVA and E6000 on polymer clay *(licence: link only)*
- **diagram_idea**: Three side-by-side sketches of two clay pieces with a thin coloured layer of liquid clay between them, labelled raw-to-raw, raw-to-baked and baked-to-baked (with a thin raw clay snake as a bridge), then an arrow into an oven showing them coming out as one piece.
- **sources**: 
  - https://thebluebottletree.com/bonding-polymer-clay-to-itself-testing-bakeable-bonds/
  - https://thebluebottletree.com/best-glue-for-polymer-clay/
  - https://thebluebottletree.com/polymer-clay-needs-flexible-glue/
  - https://thebluebottletree.com/securing-polymer-clay-earring-post-backs-whats-the-best-way/
  - https://thebluebottletree.com/make-polymer-clay-buttons/
  - https://thebluebottletree.com/can-you-bake-crystals-in-clay/
  - https://www.sculpey.com/blogs/blog/the-diversity-of-liquid-polymer-clay
  - https://blog.sculpey.com/how-to-effectively-use-oven-bake-clay-adhesive
  - https://www.sculpey.com/pages/faqs-1
  - https://en.wikipedia.org/wiki/Polymer_clay
  - https://www.staedtler.com/uk/en/products/fimo-modelling-clay-accessories/fimo-accessoires/surface-treatment/fimo-liquid-8050-oven-bake-liquid-gel-m8050/
  - https://potterycrafts.co.uk/cdn/shop/files/Premo_Sculpey_Polymer_Clay_747a26ae-3aa8-4d8e-a413-1cfe01b669f7.pdf
  - https://www.sculpey.com/blogs/blog/6-things-to-avoid-when-baking-polymer-clay

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: fills gaps ⚑ *needs confirming (best guess): not on the glue lists in the finder tree; traits read from the text*
- **bonds_well**: PVC ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…as plastic 'crystals', amber, pearls (Blue Bottle Tree) or PLA prints [uncertain]…"*
- **bonds_poorly**: PLA, wood, paper or card, metal, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…as plastic 'crystals', amber, pearls (Blue Bottle Tree) or PLA prints [uncertain]…"*
- **tools**: sewing or leather tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: wood, paper or card, clay or putty

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, load, making_tips_3d_printing, materials

## 429 Score-and-slip join (scratch and slip, luting)

*adhesives & bonding.* Scratching criss-cross lines into both clay surfaces and brushing on slip (the same clay thinned with water to a thick cream), then pressing and blending the seam, so two pieces of soft or leather-hard pottery clay or air-dry clay grow into one; how handles, spouts and modelled details are attached

*Also covers:* Also covers vinegar or 'magic water' (sodium silicate) instead of slip, reinforcing the seam with a thin coil, matching the dryness of both parts, and PVA glue for already-dry air-dry clay. Safety: dry slowly and evenly, or the join cracks; vinegar dissolves slip-cast pieces; clay dust from sanding dry clay should not be breathed. Firing ceramics is out of scope (parked).

### What it is

- **plain_name**: Scratching criss-cross lines into both pieces of soft clay, painting on a creamy mix of the same clay and water, then pressing them together and smoothing over the seam so they grow into one piece
- **term**: Score-and-slip join (scratch and slip; luting)
- **aliases**: 
  - score and slip / slip and score
  - scratch and slip (Wikipedia 'Slip (ceramics)')
  - luting: joining two pieces of dry or leather-hard clay with a slip (Wikipedia 'Glossary of pottery terms')
  - a lute (the joint itself; Wikipedia 'Leather-hard')
  - slip as 'the glue of clay' (Lillian Gray)
  - joining slip, joining clay
  - magic water (a sodium silicate and soda ash solution used instead of slip)
  - magic mud, paper clay slip (slip with paper fibre added; Lakeside Pottery)
  - vinegar join (white vinegar instead of slip; AMACO)
  - sprigging (fixing moulded relief decoration on with slip; Wikipedia 'Slip (ceramics)')
- **family**: adhesives & bonding
- **one_liner**: Two pieces of soft or part-dried water-based clay are scratched (scored) where they meet, coated with slip (the same clay mixed with water to a thick cream), pressed together and blended, so that as they dry the clay knits into one piece; this is how handles, spouts, ears and other details are attached.
- **complexity**: A few parts: the two clay pieces, the slip (or vinegar, or magic water), a scoring tool (needle tool, fork, serrated rib, toothbrush or taped toothpicks), a brush, and optionally a thin coil of clay pressed round the seam as a reinforcing fillet.
- **how_it_works**: Damp clay sticks to damp clay, but two smooth, firm surfaces pressed together only touch at a few points and pull apart as they dry and shrink. Scoring both surfaces with criss-cross lines roughens them so they key together, and the slip, a thick clay-and-water paste, fills the scratches so the clay particles of both pieces meet and mingle (Wikipedia 'Slip (ceramics)'). Pressing and blending the seam, and often rolling a thin coil into the corner, makes a smooth, solid join. The join only stays whole if both parts are at about the same dampness and the piece dries slowly and evenly, because clay shrinks as it dries and parts that shrink at different rates pull apart (Wikipedia 'Leather-hard'; TeachKidsArt). Vinegar or magic water can replace slip: vinegar 'breaks down the clay a bit, and makes it sticky' (AMACO), and magic water is a deflocculant that lets clay particles pack tightly while staying fluid (Potclays).

### Finder attributes

- **job**: glue or bond: the clay itself is the 'glue', so the parts become one material, join and hold: handles, spouts, knobs, feet, ears, noses and other modelled details on pottery and clay models
- **motion**: none
- **degrees_of_freedom**: 0: once dry (and fired, for pottery) the joined parts are one rigid piece
- **special_behaviour**: none: no lock, release or spring action; it only works while the clay is still damp enough to be blended
- **holding_principle**: 
  - material bond (glue, solvent or melting): the clay particles of both pieces merge through the slip, so the join becomes the same material as the parts
  - shape (the parts interlock; form-fit): the scored grooves key into each other and a pressed-in coil wraps the seam
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent once dry: it can only be undone while still soft, or by breaking it
- **reuse_cycles**: once
- **tools_needed**: a scoring tool (needle tool, fork, serrated rib, wire brush, stiff toothbrush, or a few toothpicks taped side by side; TeachKidsArt, Pottery Supplies Online, Ceramics Monthly), a small brush for the slip, a lidded pot of slip made from the same clay, a small dowel or skewer to seal and smooth the seam (Ceramics Monthly), plastic sheet to slow drying; optionally a spray bottle of vinegar and water or ready-made magic water; PVA glue for already-dry air-dry clay
- **seal**: none
- **load**: light: for pottery handles, spouts and modelled details, which carry only the weight of the piece and its contents. A well-made join is as strong as the clay around it; Wikipedia says lutes 'increase the overall strength of the pot', but no strength figures were found ⚑ [uncertain]. Weak points are a crack along the seam from uneven drying and a handle levered off by a knock *(⚑ parts need confirming)*
- **adjustable**: yes, while the clay is still soft (it can be pressed into a new position or pulled off and rejoined); no once dry
- **play_and_precision**: not applicable
- **access_needed**: both sides (both meeting faces are scored and slipped before joining; a hand inside a pot supports the wall while the handle is pressed on)
- **materials**: Suits water-based clays while they are still soft or leather-hard: pottery clay of every kind (earthenware, stoneware, porcelain) and paper clay, before firing, and air-dry clay (Art Shed, Lillian Gray, Sculpey blog). The slip must be made from the same clay as the parts, or 'different drying and shrinking rates can cause problems' (TeachKidsArt). Paper clay can even be joined dry to dry or dry to soft (Wikipedia 'Paper clay'). Not for polymer clay, which is oil-based and joined with liquid clay instead (Sculpey blog; see Liquid-clay bond), not for epoxy putty, and not for fired ceramics (out of scope here; use a ceramic repair glue). Already-dry air-dry clay is glued with PVA instead (Art Shed). Vinegar should not be used on slip-cast pieces, which it starts to dissolve (AMACO)
- **maker_difficulty**: easy: needs only a pin and some slip, and is taught to schoolchildren; the skill is in matching the dampness of the two parts and drying slowly

### Making it

- **processes**: hand building and wheel-thrown pottery (before firing), air-dry clay modelling, off-the-shelf part: ready-made magic water or a bought scoring tool
- **print_in_place**: no: this is a join between soft clay parts, not a printed joint
- **making_tips_3d_printing**: not applicable as a printed joint. A 3D printer can make the tools: printable pottery scoring tools and pottery tool sets exist (see make_it_yourself). Ceramic 3D printers that extrude clay paste would join added parts the same way, but this was not researched ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Pottery or air-dry clay, ready-made slip or casting slip, scoring tool (sold as a 'scoring tool', 'scratch tool' or 'clay scorer'; also serrated ribs and needle tools), slip brush, magic water (sold ready-made or mixed from liquid sodium silicate and soda ash), white vinegar, paper clay, PVA glue, handle maker (a loop tool for cutting handle strips; Ceramics Monthly)
- **rules_of_thumb**: 
  - Join at the leather-hard stage, about 15% moisture, which is the easiest time to add handles and other extensions (Wikipedia 'Leather-hard')
  - Make the slip from the same clay as the pieces (TeachKidsArt); 'the efficacy will vary with different clay types' for magic water too (Potclays)
  - Slip consistency: 'thick but still pourable' (TeachKidsArt); for air-dry clay 'like the texture of toothpaste' (Lillian Gray)
  - Score both surfaces with criss-crossing lines before slipping (Wikipedia 'Slip (ceramics)'; TeachKidsArt; Pottery Supplies Online)
  - Vinegar instead of slip: white vinegar and water 'about equal parts' in a spray bottle (AMACO); one potter scores and slips twice with neat vinegar on a toothbrush (Ceramics Monthly, 'Foolproof Handles', 2021)
  - Magic water: 1 gallon of water, 3 tablespoons of liquid sodium silicate and 1 1/2 teaspoons of soda ash (Lakeside Pottery); Potclays suggests starting at 1 litre of water, 1 g soda ash and 2.5 g sodium silicate, used 'quite watery' because concentrated sodium silicate can form a glaze
  - After pressing the parts together, seal the edges with a small dowel, then roll a thin coil into the joint and smooth it in (Ceramics Monthly, 'Foolproof Handles')
  - Air-dry clay takes 24 to 48 hours to dry depending on thickness; turn it over after 24 hours so it dries evenly (Art Shed)

### When to use it

- **everyday_examples**: 
  - the handle on a handmade mug
  - the spout and lid knob of a teapot
  - ears, nose and lips added to a school clay mask or animal (Lillian Gray)
  - raised moulded decoration on Jasperware (sprigging; Wikipedia 'Slip (ceramics)')
- **when_to_use**: Whenever two pieces of water-based clay (pottery clay, paper clay or air-dry clay) are joined while still soft or leather-hard: handles, spouts, knobs, feet, slab boxes, coil pots, and modelled details on sculptures and masks. Vinegar or magic water are handy when several clay bodies are in use and the right slip isn't mixed (AMACO), or when joining parts at slightly different dampness (Lakeside Pottery). Paper clay slip ('magic mud') is for more extreme cases, such as joining wet clay to drier clay or repairing bone-dry pieces (Lakeside Pottery).
- **when_not_to_use**: Not for polymer clay: use the Liquid-clay bond. Not for pieces that are already fully dry and not paper clay: for air-dry clay use PVA glue (Art Shed); for dry pottery clay try paper clay slip, which can repair bone-dry pieces (Lakeside Pottery), or remake the piece. Not for fired ceramics or tiles (kiln firing and fired-ceramic repair are out of scope here). Do not use vinegar on slip-cast pieces (AMACO). Not for anything that must come apart again.
- **environment_limits**: Unfired pottery clay and air-dry clay soften again in water: 'As air dry clay is a water-based clay, it needs to be waterproofed to survive the elements', with acrylic gloss medium, PVA or paint, and even then 'This wont make the clay food safe' (Art Shed). Air-dry clay should not be dried in the sun, with a hairdryer or by baking, 'as this will cause cracks' (Art Shed); Sculpey's FAQ, by contrast, allows air-dry clay in the oven at a low 200 °F, warning that it tends to crack if left in too long or too hot. The two sources disagree. Fast or uneven drying cracks the join.
- **safety_notes**: Dry the piece slowly and evenly, or the join cracks: keep it under plastic, and remember a thin handle dries faster than a thick body (Wikipedia 'Leather-hard'; Lakeside Pottery; Diamond Core Tools). Vinegar dissolves slip-cast pieces (AMACO). Clay dust contains crystalline silica, which can cause silicosis and lung cancer if breathed over time: sanding dry pieces 'should be avoided, as a wet sponge can be used instead'; if you must, do it at the end of the day, wear an approved mask (e.g. P100) and mop and sponge surfaces afterwards; dust is easily stirred up again, even by wet mopping, and vacuuming with an ordinary vacuum 'can be extremely hazardous' (Ceramics Monthly, 'Techno File: Studio Dust'). Wikipedia also warns that slip is a fine silica-based material that could be hazardous if inhaled ('Leather-hard'). Magic water contains soda ash, which forms an alkaline solution (Pottery Supplies Online), so keep it out of eyes and off skin; gloves are sensible ⚑ [uncertain]. Air-dry clay pieces sealed with paint or PVA are still not food safe (Art Shed). Firing is out of scope; note that a piece that is not completely dry can burst in a kiln (Wikipedia 'Paper clay'). *(⚑ parts need confirming)*
- **common_failures**: 1) The join cracks or the part falls off while drying: the two parts were at different dampness or dried at different rates (Wikipedia 'Leather-hard' describes a handle drying before the body and cracking; Lakeside Pottery blames uneven shrinkage between wet and leather-hard parts); match their dampness, use magic water or paper clay slip for wet-to-drier joins (Lakeside Pottery), and dry slowly under plastic. 2) Skipping the slip and using only water gives 'attachment malfunctions' (TeachKidsArt). 3) Slip made from a different clay shrinks differently and cracks (TeachKidsArt). 4) Slip too runny makes 'one mushy mess' (Lillian Gray). 5) Only one side scored: score both. 6) A hairline crack round the seam: seal the edge with a dowel and add a thin coil (Ceramics Monthly). 7) Air-dry clay cracks from drying in the sun or with a hairdryer (Art Shed). 8) Details glued to dry air-dry clay soak up the PVA: use more glue (Art Shed). 9) Magic water used too strong can leave a glaze-like layer, so use it 'quite watery' (Potclays).
- **related**: 
  - Liquid-clay bond: the polymer clay equivalent, using liquid PVC clay and a bake instead of slip and drying
  - PVA wood glue: used to glue pieces onto air-dry clay that is already dry
  - Epoxy putty: a two-part putty that is sculpted and joined to itself without water or baking
  - Glued joint design: the general rules (more contact area, avoid peeling loads) behind why handles are blended with a coil
  - Wire and foil armature: the inner support used for air-dry clay figures, which must come out of clay that will be kiln-fired
  - Pinned glue joint: a toothpick or wire pin across a clay joint for extra strength in models that will not be fired

### Pictures, videos and models

- **links**: 
  - [Tips and Tools: Foolproof Handles (Ceramics Monthly, Tania Rustage, October 2021)](https://ceramicartsnetwork.org/ceramics-monthly/ceramics-monthly-article/tips-and-tools-foolproof-handles): Numbered photos of making a mug handle, scoring and slipping with vinegar, sealing the joint with a dowel and blending a thin coil round it *(licence: link only (free complimentary article; Ceramic Arts Network))*
  - [Don't Slip! Joining Clay Without Slip (AMACO)](https://amaco.com/resources/tutorials/dont-slip-joining-clay-without-slip): Video and text on joining clay with a vinegar and water spray instead of slip, with the slip-cast warning *(licence: link only)*
  - [How to Make the Perfect Clay Slip (TeachKidsArt)](https://www.teachkidsart.net/how-to-make-the-perfect-clay-slip/): Step-by-step photos of making slip in an old blender, storing it, and a home-made toothpick scoring tool *(licence: link only)*
  - [Air-dry clay mask tutorial (Lillian Gray)](https://lilliangray.co.za/air-dry-clay-african-mask): Photos of scratching both surfaces and adding slip to attach a nose and lips to an air-dry clay mask, and slow drying *(licence: link only)*
  - [Slip (ceramics) (Wikipedia)](https://en.wikipedia.org/wiki/Slip_(ceramics)): Definition of slip and of 'scratch and slip' joining, with photos of slipware *(licence: text CC BY-SA 4.0; images per file)*
- **make_it_yourself**: 
  - [Pottery Scoring Tool (A3D Printing Farm, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/509567-pottery-scoring-tool): A simple printable pottery scoring tool; found and read through the Printables public API *(licence: CC BY-NC)*
  - [Pottery Tool Collection (MabelLeaves, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1161644-pottery-tool-collection): A set of printable pottery tools, mainly for wheel throwing; found and read through the Printables public API *(licence: CC BY-SA)*
- **diagram_idea**: Three steps of a mug handle join: the handle end and mug wall each scratched with a criss-cross pattern, slip brushed on, then pressed together with a thin coil rolled into the corner, with a small inset showing two pieces drying at different rates and cracking apart.
- **sources**: 
  - https://en.wikipedia.org/wiki/Slip_(ceramics)
  - https://en.wikipedia.org/wiki/Glossary_of_pottery_terms
  - https://en.wikipedia.org/wiki/Leather-hard
  - https://en.wikipedia.org/wiki/Paper_clay
  - https://amaco.com/resources/tutorials/dont-slip-joining-clay-without-slip
  - https://www.teachkidsart.net/how-to-make-the-perfect-clay-slip/
  - https://www.artshedonline.com.au/blog/art-shed-blog/sculpting-and-modelling/14-air-dry-clay-techniques
  - https://lilliangray.co.za/air-dry-clay-african-mask
  - https://ceramicartsnetwork.org/ceramics-monthly/ceramics-monthly-article/tips-and-tools-foolproof-handles
  - https://ceramicartsnetwork.org/ceramics-monthly/ceramics-monthly-article/Techno-File-Studio-Dust
  - https://diamondcoretools.com/blogs/resources/5-tips-for-making-functional-pottery-handles
  - https://potclays.co.uk/what-is-magic-water
  - https://lakesidepottery.com/HTML%20Text/Tips/pottery-magic-mud-magic-water-paper-clay.htm
  - https://www.potterysuppliesonline.com.au/pottery-magic-water-what-is-it/
  - https://www.sculpey.com/blogs/blog/the-diversity-of-liquid-polymer-clay
  - https://www.sculpey.com/pages/faqs-1
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: paper or card, glass or ceramic, fabric or leather, stone or concrete
- **bonds_poorly**: 
- **tools**: sewing or leather tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: clay or putty

### Other info

- ⚑ **Fields with parts that need confirming:** load, making_tips_3d_printing, safety_notes

## 433 Bonded tube joint (lugged, sleeved or fibre-wrapped tube joint; carbon tube connector, bonded end fitting)

*adhesives & bonding.* Tube ends are glued into or over a socket, sleeve or lug, or wrapped with resin-soaked fibre, so tubes join without drilling holes, as in carbon bike frames, drone booms, camera rigs and bamboo bikes

*Also covers:* Also covers bond gap and bond length, sanding and cleaning, internal joiners (ferrule tubing), bonded threaded end plugs and quick-release end fittings, printed and metal lugs, tube-to-tube wrapped joints and hemp-wrapped bamboo joints. Safety: carbon touching bare aluminium corrodes it (isolate with anodising, glue or a glass layer); carbon dust; epoxy skin allergy; never ride a home-made frame without testing.

### What it is

- **plain_name**: Joining tubes by gluing their ends into (or over) a fitted socket, sleeve or corner piece, or by wrapping the joint in glue-soaked fibre, so you never have to drill holes through the tubes
- **term**: Bonded tube joint (adhesively bonded tube connector: lugged, sleeved, ferrule or fibre-wrapped joint)
- **aliases**: 
  - lugged tube joint, bonded lug, lug (bicycle frames: tubes glued into lugs, 'analogous to a lugged steel frame'; Wikipedia 'Bicycle frame')
  - carbon fiber tube connector, modular tube connector (DragonPlate)
  - bonded insert, bonded end fitting, bonded end plug, threaded end adapter, quick-release tube connector (DragonPlate)
  - ferrule, ferrule tubing, internal joiner, tube splice (a smaller tube glued inside two tube ends; Clearwater Composites)
  - sleeve joint, overlap joint, socket joint
  - tube-to-tube construction, wrapped joint, carbon-wrapped junction (Condor Leggero; road.cc)
  - hemp lug, fibre-wound lug, hemp-wrapped bamboo joint (Calfee; road.cc)
  - 3D-printed lug (colorFabb XT-CF20 bike)
  - gusset plate (riveted and bonded, for square tube; DragonPlate)
- **family**: adhesives & bonding
- **other_families**: interlocking joints & joinery, print-in-place & 3D-printing joints
- **one_liner**: Tubes are joined by gluing each tube end into or over a close-fitting socket, sleeve, plug or lug, or by binding the joint with resin-soaked fibre, so the load passes through a long glued overlap instead of through holes drilled in the tube wall.
- **complexity**: A few parts. The tubes; a connector (a metal, composite or 3D-printed lug or corner block with sockets, an internal ferrule tube, a threaded end plug or quick-release end fitting, or a plate gusset) or, for wrapped joints, strips of carbon or glass cloth or hemp fibre; the adhesive or laminating resin (usually two-part epoxy; colorFabb used polyurethane); and a jig or fixture to hold alignment while it cures (Clearwater Composites; DragonPlate; road.cc).
- **how_it_works**: One part slides inside or over the other with a small, even gap (the bond gap) that is filled with adhesive, so the joint is a long glued overlap all round the tube (Clearwater Composites). Pulling or pushing along the tube, and twisting it, loads the glue in shear, the direction adhesive is strongest, which is why a long overlap is used instead of drilled bolts or pins that 'compromise the tube wall' (DragonPlate; Materials 2021 bond-gap study). Wrapped joints skip the connector: mitred tubes are tacked together in a jig and then bound with resin-soaked carbon strips or hemp fibre that is built up into a lug shape and cured (Condor Leggero and Calfee bamboo, road.cc). Strength depends as much on preparation as on the glue: sand off the glossy surface, clean with solvent, fill the gap fully, and hold the parts still until fully cured (Clearwater Composites).

### Finder attributes

- **job**: 
  - glue or bond: the tubes are held by adhesive in a long overlap
  - join and hold: makes permanent frames, booms and trusses from separate tubes
  - lock, and release by hand: bonded threaded or quick-release end fittings let tube sections be taken apart (DragonPlate)
- **motion**: none (rigid joint); DragonPlate's grooved quick-release fitting lets a bonded end fitting turn, and its 'adjustable angle joints' are set and then fixed
- **degrees_of_freedom**: 0: a bonded tube joint is rigid once cured. Quick-release end fittings come apart along the tube axis but are rigid when assembled (DragonPlate).
- **special_behaviour**: 
  - quick-release: bonded quick-release end fittings let long trusses be broken into shorter sections for carrying (DragonPlate)
  - self-aligning or self-centring: a close-fitting socket or ferrule centres the tubes; glass beads mixed into the glue keep the gap even all round (Materials 2021 bond-gap study)
- **holding_principle**: 
  - material bond (glue, solvent or melting): the adhesive or laminating resin holds the joint
  - shape (the parts interlock; form-fit): a lug or socket wraps round the tube, and DragonPlate's connectors have ridges and slots that strengthen the bond; plate gussets are also riveted (DragonPlate)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent for glued and wrapped joints; tool-free quick release at bonded quick-release end fittings, or removable at threaded end adapters (DragonPlate)
- **reuse_cycles**: once for the glued joint itself; many times for the quick-release or threaded fittings bonded into the tube ends (DragonPlate)
- **tools_needed**: Fine saw or cut-off tool for the tubes; 120-180 grit sandpaper, drum sander, rotary tool or flex hone; acetone or isopropyl alcohol; masking tape; two-part epoxy with mixing stick or dispenser; gloves, safety glasses and ventilation; a jig, fixture or clamps for alignment; an oven if the adhesive needs heat curing (Clearwater Composites; road.cc Condor).
- **seal**: none (the glue line may happen to keep water out of the tube end, but the joint is not designed as a seal) ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: medium to heavy: strongest in pull, push and twist along the tube, which shear the glue. Example: 3M DP420 has an estimated shear strength of about 2,200 psi on aluminium and steel (Clearwater Composites); motorsport carbon-tube and aluminium-insert joints with a 30 mm bond met design loads of 8 and 12 kN, and one adhesive reached 35 kN when the gap was properly filled (Materials 2021 bond-gap study). Weakest in peel and in bending that prises the end of the overlap open ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: no once cured; angles and lengths are set in the jig before the glue cures. Threaded or quick-release end fittings let sections be swapped (DragonPlate).
- **play_and_precision**: none once cured; precision depends on the jig and on an even bond gap. Glass beads in the glue gave more consistent strength than relying on the parts' own shape to set the gap (Materials 2021 bond-gap study). Quick-release fittings may have small play ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: the connector, ferrule or plug goes into or over the open tube end; wrapped joints need room all round the junction
- **materials**: Tubes: roll-wrapped or pultruded carbon fibre, fibreglass, aluminium, titanium, steel and bamboo (DragonPlate; colorFabb lugs 'connect standard tubing in carbon, titanium, aluminum or bamboo', 3D Printing Industry; road.cc Calfee). Connectors: anodised aluminium (DragonPlate), moulded carbon, 3D-printed carbon-filled polymer such as XT-CF20 (colorFabb), stainless or titanium printed lugs, wrapped carbon cloth or hemp fibre. Adhesives: two-part epoxies such as 3M Scotch-Weld DP420 and 2216 (brands; Clearwater, DragonPlate), polyurethane adhesive (colorFabb). Poor matches: bare aluminium touching carbon (galvanic corrosion; Clearwater), HDPE and other low-surface-energy plastics, which need special adhesives (Clearwater), and the glossy outer skin of bamboo, which 'doesn't stick to epoxy well' unless sanded (Instructables 'Bamboo and Hemp Road Bike').
- **maker_difficulty**: moderate: gluing a bought connector into a tube is easy, but getting the bond gap, preparation, alignment and cure right takes care; a load-bearing frame such as a bicycle is hard, because a hidden bad joint can fail without warning

### Making it

- **processes**: 
  - off-the-shelf part: modular aluminium tube connectors, ferrules, threaded end adapters and quick-release fittings (DragonPlate)
  - 3D print (FDM): printed lugs and corner connectors with sockets for the tubes (colorFabb XT-CF20 bike; Printables 'Carbon fiber tube corner connector/bracket')
  - CNC: turned or milled aluminium inserts and lugs (Materials 2021 study)
  - composite lay-up: wrapping joints with carbon or glass cloth or hemp fibre and resin (road.cc Condor and Calfee)
  - woodwork: mitring and jigs for bamboo frames (aesdes bamboo bicycle)
- **print_in_place**: no: the printed lug or connector is printed on its own and the tubes are glued into it.
- **making_tips_3d_printing**: 1) Size the socket for a glue gap, not a press fit: Clearwater recommends about 0.005-0.010 in (0.13-0.25 mm) per side for most two-part epoxies, so a socket for a 16 mm tube would be roughly 16.25-16.5 mm across (Clearwater Composites); the Printables 'Carbon fiber tube corner connector/bracket' instead uses a 16.1 mm socket for 16 mm tube (only 0.05 mm per side), 30 mm long, with a 21 mm outside diameter. Print a short test socket, since printers vary ⚑ [uncertain]. 2) Make the socket long: for internal joiners, a bond length of at least 2-3 times the inside diameter, and 3 in by default for tubes under 1 in (Clearwater). 3) Material: colorFabb printed its bike lugs in XT-CF20 carbon-filled filament on a 0.8 mm nozzle and checked the design with FEM analysis and riding (colorFabb). 4) Use the print's freedom of shape: colorFabb built channels into the lugs so polyurethane glue 'distributes itself to the right places' (colorFabb). 5) Sand the inside of the printed socket and the outside of the tube to remove gloss, and clean with solvent before gluing (Clearwater) ⚑ [uncertain] (Clearwater's advice is for carbon tubes; it is applied here to printed sockets). 6) Print sockets so the layers wrap round the tube (socket axis vertical), so the hoop strength doesn't depend on layer adhesion ⚑ [uncertain]. 7) PLA creeps and softens with heat, so for loaded joints in warm places prefer a tougher, more heat-resistant filament ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'carbon fiber tube connectors' / 'modular tube connectors' (blocks, cubes, links, clevis connectors; DragonPlate (brand)), 'pultruded tube connectors', 'threaded end adapter' and 'quick release tube connector', 'ferrule tubing' or 'tube splice' sized to fit inside your tube, 'carbon tube end plug', 'plate gusset kit' (square tube), 'bond line controller glass beads' (Materials 2021 study, citing Rock West Composites (brand)), structural epoxies such as '3M Scotch-Weld DP420' and '2216' (brands; Clearwater, DragonPlate), and 'carbon fibre braided sleeve' or 'hemp twine' for wrapped joints. Clamp-on and slip-on framing fittings are the no-glue alternative (McMaster-Carr links on the UWRT wiki).
- **rules_of_thumb**: 
  - Bond gap about 0.005-0.010 in (0.13-0.25 mm) per side for most two-part epoxies; check the adhesive's data sheet (Clearwater Composites; repeated on the UWRT wiki). Other sources agree: 0.2 mm was used and recommended by a glass-bead maker for epoxies (Materials 2021 study), and a university solar-car team started at 0.008 in (0.203 mm) (UT Austin Longhorn Racing Solar wiki).
  - Bond length for ferrule tubing: at least 2-3 times the inside diameter; 3 in by default for tubes under 1 in diameter (Clearwater Composites).
  - Preparation: abrade with 120-180 grit until all gloss is gone, wipe with acetone or isopropyl alcohol, wear gloves so skin oils don't spoil the bond; a water-bead test shows whether sanding is enough (Clearwater Composites). The Materials 2021 study sanded from 240 to 400 grit; the UT Austin team used about 300 grit and acetone.
  - Apply adhesive to both surfaces for 100% coverage and look for squeeze-out; fixture the parts so they can't shift, and don't handle them until fully cured, which can take days at room temperature (Clearwater Composites).
  - Most standard two-part epoxies are limited to below about 250 °F (about 120 °C) in service (Clearwater Composites).
  - Don't drill and pin or bolt carbon tubes; it 'compromises the tube wall and weakens the tube' (DragonPlate). Square tubes are joined with plate gussets that are riveted (DragonPlate).
  - Mixing glass beads the size of the bond gap into the epoxy gave more consistent joint strength than controlling the gap with the parts' shape (Materials 2021 study).
  - Isolate carbon from bare aluminium: anodising, the epoxy layer itself, or a glass-fibre layer stops galvanic corrosion (Clearwater Composites).

### When to use it

- **everyday_examples**: 
  - Carbon bicycle frames made of tubes glued into lugs, or tubes wrapped at the joints (Wikipedia 'Bicycle frame'; Condor Leggero, road.cc)
  - Bamboo bicycles with hemp-wrapped joints (Calfee, road.cc)
  - Camera booms, lighting rigs and drone arms made from carbon tubes with glued-in end fittings (DragonPlate)
  - Tent and kite poles with a short joining sleeve (ferrule) glued into one tube end ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use a bonded tube joint for light, stiff frames of carbon, fibreglass, aluminium or bamboo tube where drilling would weaken the tube or crush it: camera rigs and booms, drone frames, robot chassis, model and kite structures, trusses that break down into sections (with bonded quick-release fittings), and bicycle or vehicle frames built in a jig. It spreads the load over a long overlap and can join different materials, such as carbon tube to aluminium end fittings.
- **when_not_to_use**: Avoid it when the joint must be taken apart (use clamp-on tube fittings, bonded threaded end fittings or push-fit sockets); when you can't prepare and clean the surfaces or control the gap; when the joint will get hotter than the adhesive's service limit (about 120 °C for most epoxies; Clearwater); for low-surface-energy plastics such as HDPE without a special adhesive (Clearwater); and for anything that carries a person unless the joint design is proven and the finished part is tested. For a quick, light, non-structural join of solid rods, push-fit rod fittings are simpler.
- **environment_limits**: Most standard two-part epoxies are limited to below about 250 °F (about 120 °C); also consider chemicals and weather when choosing an adhesive (Clearwater Composites). Carbon and aluminium expand differently with heat, which can delaminate a metal-to-carbon bond; DragonPlate uses ridged and slotted connectors to resist this. Carbon touching bare aluminium causes galvanic corrosion, especially in wet conditions (Clearwater) ⚑ [uncertain] (the wet-conditions point is not on the page). Bamboo can crack as it dries out in a dry climate (aesdes bamboo bicycle). Bonded joints can crack from crashes, overtightening or poor installation (Wikipedia 'Bicycle frame'). *(⚑ parts need confirming)*
- **safety_notes**: Galvanic corrosion: carbon touching bare aluminium corrodes the aluminium; isolate it with anodising, the epoxy layer or a glass-fibre layer (Clearwater Composites). Carbon dust: sanding and cutting composites makes dust; capture it at the source with extraction, wear a suitable dust mask, goggles, coveralls and gloves, consider wet sanding, and note that carbon dust conducts electricity and can short electrical equipment (Gurit composite dust guidance). Epoxy allergy: uncured epoxy resins and hardeners can sensitise the skin, after which even small contact causes dermatitis; epoxies are the most frequent cause of work-related allergic skin disease; cured epoxy no longer sensitises; wear chemical-resistant gloves (DGUV IFA; Composites Australia). Ventilate and wear safety glasses and gloves while bonding (Clearwater). Never ride a home-made bicycle frame, or trust any frame that carries a person, until it has been properly tested: hidden bonding faults and cracks in adhesive at joints can let it fail without warning (Wikipedia 'Bicycle frame'; one builder's underbuilt bamboo bottom-bracket joint cracked, reported in search results) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Joint pulls apart cleanly with bare-looking surfaces: poor preparation (gloss or release agent left on, oily fingers) or the wrong adhesive (Clearwater). Weak or uneven strength: glue gap too thick, too thin or off-centre, or the glue ran out of the gap; control the gap with glass beads or a stepped insert (Materials 2021 study). Misaligned frame: parts shifted while curing; use a jig or fixture (Clearwater; road.cc Condor). Corrosion at a carbon-to-aluminium joint: no isolation layer (Clearwater). Cracked tube where a bolt or pin went through: drilled instead of bonded (DragonPlate). Wrapped bamboo joints cracking or letting go: cracked bamboo, the shiny bamboo skin left unsanded, or too little wrap at highly loaded joints such as the bottom bracket (Instructables 'Bamboo and Hemp Road Bike'; aesdes).
- **related**: 
  - Glued joint design (butt, lap and scarf joints; peel vs shear): the general rules for glued overlaps; a bonded tube joint is a lap joint wrapped round a tube
  - Two-part epoxy: the usual adhesive for these joints
  - Clamp-on tube fittings (slip-on structural fittings): join tubes with set screws and no glue, but set screws can crush carbon
  - Internal tube anchors (star nut, expansion plug): grip inside a tube by friction or barbs, not glue
  - Push-fit rod and spar fittings (kite fittings): friction-fit sockets for small solid rods, meant to be pulled apart
  - Shock-corded sectional pole: tube sections joined by ferrule sockets held together by elastic cord, not glue
  - Fillet-and-tape joint (glass-tape tabbing): the same wrapped-fibre idea used for flat panels
  - Brazed joint: lugged steel frames are brazed into lugs instead of glued (Wikipedia 'Bicycle frame')
  - Split-part joints for large prints: other ways of joining printed parts

### Pictures, videos and models

- **links**: 
  - [Video: making the Condor Leggero carbon frame (road.cc)](https://road.cc/content/news/96466-video-making-condor-leggero-carbon-frame): Video and photos of mitred carbon tubes held in a jig, bonded and wrapped with carbon strips at the junctions, then oven-cured *(licence: link only)*
  - [XT-CF20 bike project release (colorFabb)](https://colorfabb.com/xt-cf20-bike-project-release): Photos of a bicycle made from standard tubes glued into nine 3D-printed carbon-filled lugs *(licence: link only)*
  - [How to Connect Carbon Fiber Tubes (DragonPlate)](https://dragonplate.com/how-to-connect-carbon-fiber-tubes): Pictures of bonded aluminium modular connectors, moulded pultruded-tube connectors, quick-release end fittings and riveted plate gussets *(licence: link only)*
  - [Bamboo bike frame Bamboosero (Noah Scalin, Wikimedia Commons; Handmade Bicycle Show 2010)](https://commons.wikimedia.org/wiki/File:Bamboo_bike_frame_Bamboosero.jpg): Photo of a bamboo bicycle frame with fibre-wrapped joints *(licence: CC BY-SA 2.0)*
  - [How to Bond Carbon Fiber Tubes (Clearwater Composites)](https://www.clearwatercomposites.com/resources/how-to-guides/bond-carbon-fiber-tubes/): Step-by-step guide to bond gap, bond length, sanding, cleaning, gluing and fixturing carbon tubes *(licence: link only)*
- **make_it_yourself**: 
  - [Carbon fiber tube corner connector/bracket (SpaceCadet, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/157670-carbon-fiber-tube-corner-connectorbracket): A printable corner bracket for 16 mm carbon tube from a camera rig: 16.1 mm socket, 21 mm outside, 30 mm long, with 1/4-20 tappable holes. Read through the Printables public API. *(licence: CC BY)*
  - [XT-CF20 bike - 3D printed bicycle (colorFabb, GrabCAD) (linked from colorFabb's release; page returned 200 but its content loads by script and could not be read)](https://grabcad.com/library/xt-cf20-bike-3d-printed-bicycle-1): CAD files for the nine printed lugs of colorFabb's bike *(licence: ⚑ [uncertain])*
  - [Remix villamany F450 type Drone Arm - carbon fiber tube reinforced (N7 Cat, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/340743-remix-villamany-f450-type-drone-arm-carbon-fiber-t): A printed drone arm with a 6 mm OD, 4 mm ID pultruded carbon tube inserted for stiffness. Read through the Printables public API. *(licence: CC BY-NC-SA)* *(⚑ parts need confirming)*
- **diagram_idea**: Three side-by-side cut-aways of joining two tubes: a ferrule glued inside both ends, a lug glued over both ends, and a mitred joint wrapped with fibre, each with the thin glue gap drawn and the bond length marked as 2-3 times the tube's inside diameter.
- **sources**: 
  - https://www.clearwatercomposites.com/resources/how-to-guides/bond-carbon-fiber-tubes/
  - https://uwaterloo.atlassian.net/wiki/spaces/UWRT/pages/33964069714/Connecting+CF+Tubes
  - https://dragonplate.com/how-to-connect-carbon-fiber-tubes
  - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8071265/
  - https://cloud.wikis.utexas.edu/wiki/spaces/LHRSOLAR/pages/220234798
  - https://en.wikipedia.org/wiki/Bicycle_frame
  - https://road.cc/content/news/96466-video-making-condor-leggero-carbon-frame
  - https://road.cc/content/news/10980-just-calfee-bamboo-road-bike
  - https://3dprintingindustry.com/news/home-3d-print-bike-colorfabbs-composite-filament-51938/
  - https://colorfabb.com/xt-cf20-bike-project-release
  - https://www.aesdes.org/2016/04/20/from-fists-and-steel-to-jungle-bicycle-part-1/
  - https://www.instructables.com/Bamboo-and-Hemp-Road-Bike/
  - https://www.instructables.com/Bamboo-Bicycle-Frame/
  - https://www.gurit.com/wp-content/uploads/2026/08/Composite-Dust-Guidance.pdf
  - https://www.dguv.de/ifa/Praxishilfen/hazardous-substances/epoxidharze/index.jsp
  - https://www.compositesaustralia.com.au/for-industry/health-and-safety/epoxy-resins/
  - https://commons.wikimedia.org/wiki/Category:Bamboo_bicycles
  - https://commons.wikimedia.org/wiki/File:Bamboo_bike_frame_Bamboosero.jpg
  - https://grabcad.com/library/xt-cf20-bike-3d-printed-bicycle-1
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: tube, rod or extrusion
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**: strongest ⚑ *needs confirming (best guess): not on the glue lists in the finder tree; traits read from the text*
- **bonds_well**: metal, glass or ceramic, fabric or leather
- **bonds_poorly**: slippery plastics (PE or PP)
- **tools**: power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: no
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, wood, metal, carbon fibre or composites

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, everyday_examples, load, make_it_yourself, making_tips_3d_printing, play_and_precision, safety_notes, seal

## 434 Fillet-and-tape joint (stitch-and-glue seam, glass-tape tabbing, tack-and-tape)

*adhesives & bonding.* Two panels are held edge to edge, often with wire stitches or cable ties, then a cove of thickened epoxy is run into the corner and resin-wet glass tape is laid over it, joining plywood boats, kayaks, bulkheads and fibreglass parts without frames or screws

*Also covers:* Also covers stitching with copper wire or cable ties, tack fillets, fillet tools and fillers, taping both sides, tabbing bulkheads and stringers into fibreglass hulls, foam fillets against hard spots, taped butt joints in plywood, and wrapping printed or foam parts into a composite shell. Safety: epoxy skin allergy, sanding dust from glass and cured epoxy, heat from large batches.

### What it is

- **plain_name**: Two panels held edge to edge (often with twists of wire or cable ties), then a rounded bead of thick glue-paste smoothed into the inside corner and a strip of glass-fibre cloth soaked in resin laid over it, so the seam becomes one solid piece with no frames, nails or screws, as in home-built plywood boats and kayaks
- **term**: Fillet-and-tape joint (stitch-and-glue seam; glass-tape tabbing)
- **aliases**: 
  - stitch and glue, stitch-and-glue construction (Wikipedia 'Stitch and glue')
  - tack and tape, stitch and tape (Wikipedia 'Stitch and glue'; John Welsford 'How Stitch & Tape Seams')
  - taped seam, fillet and tape, epoxy fillet joint (CLC Boats 'Fillets'; JW Boat Designs)
  - tabbing, glass tabbing, tabbing in a bulkhead or stringer (fibreglass boat building; Epoxyworks 'Common errors in fiberglass laminate repair'; boatdesign.net thread)
  - secondary bonding ⚑ [uncertain: common composites term for bonding to an already-cured laminate; not defined on an opened page]
  - taped butt joint, 'hybrid' plywood joint, 'save a butt' (Epoxyworks 'Joining Plywood'; boatdesign.net forum term seen in search results)
  - tack fillets (small dabs that tack a part in place before the full fillet; Duckworks 'Quick and Dirty Stitch and Glue')
  - Instant Boats method (Phil Bolger and Harold 'Dynamite' Payson designs; Wikipedia 'Stitch and glue') *(⚑ parts need confirming)*
- **family**: adhesives & bonding
- **other_families**: interlocking joints & joinery
- **one_liner**: A seam made by pulling two panels together with temporary stitches, filling the inside corner with a smooth cove of thickened epoxy (the fillet) and laying resin-soaked glass tape across it, so the panels are welded into one stiff shell without frames or fasteners.
- **complexity**: A few parts, made in place: the two panels (plywood, fibreglass laminate or a bulkhead), temporary stitches (copper or steel wire, cable ties, or tape and staples), thickened epoxy for the fillet (epoxy plus a filler such as wood flour or colloidal silica), glass-fibre tape or cloth, and unthickened epoxy to wet it out. Tools: a rounded fillet spreader, brushes, mixing pots and gloves (CLC Boats 'Fillets'; Wikipedia 'Stitch and glue').
- **how_it_works**: The stitches are only clamps: they hold the panels in the right shape until the epoxy sets, then they are snipped off, pulled out or left buried (Wikipedia 'Stitch and glue'). The fillet fills the sharp inside corner with a curved ramp of glue, which gives a large glue area and lets load spread gradually into each panel instead of at a hard edge, so there is no stress concentration (a 'hard spot') where one panel meets the other (boatdesign.net thread 'Proper way to tab bulkheads'). The glass tape laid over the wet fillet and onto both panels then carries the load across the seam like a bandage, making a small composite joint; taping the outside as well makes a double-sided joint (Duckworks 'Quick and Dirty Stitch and Glue'; Wikipedia 'Stitch and glue'). Tabbing a bulkhead or stringer into a fibreglass hull is the same joint: a fillet, then layers of glass that step out in width onto both parts (Epoxyworks 'Common errors in fiberglass laminate repair').

### Finder attributes

- **job**: 
  - join and hold: joins panels at an angle (chines, keels, bulkheads, stringers) or edge to edge (taped butt joints) into one rigid shell
  - glue or bond: the fillet and glass tape are glued (epoxy) joints; the stitches only hold the shape while they cure
  - seal it, or pass cables or fluid through: a filled and taped seam is part of a waterproof hull when the whole surface is sealed (Wikipedia 'Stitch and glue'; boatdesign.net notes the fillet also seals the joint against moisture)
- **motion**: none
- **degrees_of_freedom**: 0: once cured the seam is rigid and the panels cannot move relative to each other.
- **special_behaviour**: 
  - self-aligning or self-centring: the panel shapes themselves set the hull form; stitching the edges together pulls the flat panels into the right curve without moulds or frames (Wikipedia 'Stitch and glue')
  - none otherwise: it is a permanent glued and laminated seam
- **holding_principle**: material bond (glue, solvent or melting): epoxy glues the fillet and the resin-soaked glass tape to both panels
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: the seam can only be undone by cutting or grinding it out; stuck wire stitches can be freed by heating them with a heavy soldering iron or blowtorch so the epoxy lets go (JW Boat Designs 'How Stitch & Tape Seams')
- **reuse_cycles**: once
- **tools_needed**: Drill for stitch holes; pliers and wire or cable ties; mixing pots, stir sticks and gloves; a fillet spreader (a plastic body-filler squeegee with a 1 in radius cut in one end, or a 1/2 in radius stick for small fillets; CLC Boats 'Fillets'), brushes or a 'brush on a stick' for long kayak seams (Guillemot Kayaks 'Precision Seam Taping'); scissors for glass tape; sanding block, coarse abrasive and a dust mask for finishing (JW Boat Designs; WEST SYSTEM 'General Epoxy Safety Guidelines').
- **seal**: watertight: the epoxy fillet fills the gap and the glass tape over it is saturated with resin, so a well-made seam keeps water out; taping the outside too, and sealing plywood end grain with epoxy, keeps water from wicking into the wood (Wikipedia 'Stitch and glue'; boatdesign.net thread). Masking tape along the outside of an open seam stops resin draining out and leaving a 'starved seam' while taping the inside (Guillemot Kayaks).
- **load**: Medium to heavy for its weight. Strong in tension and bending across the seam when glass is on both faces; small boats' cloth-taped seams are strong enough that the plywood next to the seam usually fails first (boatdesign.net thread: cloth 'is more then strong enough to reach the peel strength of the surrounding wood'). Wikipedia claims 'something close to 8-10 times the strength of fastenings and timber framing' ⚑ [uncertain: unsourced on Wikipedia, ⚑ needs confirming]. Weakest in peel: a single thin layer of tape, or tape with dry (unwetted) patches, can lift from the edge; bigger, more heavily loaded boats need heavier double-bias (±45°) tape, where every fibre crosses the seam (boatdesign.net thread; Fiberglass Supply 'Stitch and Glue Boatbuilding Materials Guide'). *(⚑ parts need confirming)*
- **adjustable**: Only before the epoxy sets: copper wire stitches can be twisted tighter or looser to adjust the fit (Wikipedia 'Stitch and glue'); once tack fillets or the full fillet cure, the shape is fixed.
- **play_and_precision**: No play once cured. Accuracy depends on the cut panel shapes and on the stitching; the method tolerates small gaps along the seam, which the fillet fills (JW Boat Designs: the seam can be open on the outside as long as it is a close fit on the inside edge).
- **access_needed**: both sides: you need to reach the inside corner to lay the fillet and tape, and the outside to snip or pull stitches, fill and (usually) tape it too (Duckworks; Wikipedia 'Stitch and glue'). Tabbing a bulkhead needs access to both faces of the bulkhead where it meets the hull.
- **materials**: Suits: marine and other plywood panels (the classic use), solid wood, fibreglass (GRP) laminates and hulls, plywood bulkheads into GRP hulls, and composite sandwich panels (Wikipedia 'Stitch and glue'; boatdesign.net thread). Epoxy is strongly recommended for wood ('nothing sticks as well to wood as epoxy', Fiberglass Supply); polyester resin is the traditional production-boat choice for GRP but bonds poorly to already-cured laminate (Practical Sailor 'Bulletproof Sailboat Deck Hardware': the secondary bond is about 4-6 times weaker for polyester and 2-4 times weaker for vinylester). Fabrics: plain glass tape or cloth for small boats; knitted double-bias tape for larger ones; mat-backed tapes waste resin in epoxy (Fiberglass Supply; boatdesign.net thread). Foam and 3D prints: glass and epoxy can wrap a foam or printed shape (see making tips), but polyester resin dissolves polystyrene foam ⚑ [uncertain: forum consensus in search results; no authoritative page opened] and a PLA print's plastic can peel away from the epoxy-glass skin (3DPrint.com 'strengthening 3D parts'). Poor: polyethylene and polypropylene (epoxy does not stick) ⚑ [uncertain: not stated on a page opened for this entry; see the Two-part epoxy entry]. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: no special tools and very forgiving ('messy but very easy, sort of like making mud pies', CLC Boats), but it needs careful epoxy handling, working fast before the mix goes off, and a lot of sanding to finish neatly.

### Making it

- **processes**: 
  - woodwork (plywood panels cut with a saw or CNC, then stitched)
  - off-the-shelf part (glass tape, epoxy, fillers, kits)
  - 3D print (FDM) for fillet tools and for printed cores wrapped in glass or carbon
  - laser cut or CNC for panel kits ⚑ [uncertain: kits are machine-cut but no opened page says how] *(⚑ parts need confirming)*
- **print_in_place**: no: it is a wet lay-up joint made by hand; only the tools (fillet spreaders) or a printed core are printed
- **making_tips_3d_printing**: Print your own fillet tools: a flat card of PLA or PETG with radiused ends (parametric models exist, e.g. 1-15 mm or 15-25 mm radii; Printables 565974 and 138672) is easy to replace when epoxy builds up on it. For wrapping a printed part in a composite shell, one maker printed a hollow shell with 1 mm walls, filled it with fibreglass and epoxy, and found the printed plastic later peeled off, leaving an epoxy-glass part, so allow for the shell not staying bonded (3DPrint.com 'strengthening 3D parts'). Another maker wets both sides of the carbon cloth with epoxy, lays it on the PLA part, does one side at a time and leaves each side 24 hours before trimming (hackaday.io project log 'How we made our materials more resistant on a low budget'). Lightly sanding the print first and testing a small sample is wise, since bond strength to PLA, PETG and ABS varies ⚑ [uncertain: forum advice only, no test data opened]. Treat a printed core as a former (a shape to build on), not a load-bearing part of the joint. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: 
  - fibreglass tape (woven glass tape, e.g. 3 in wide, 9 oz with woven 'selvedge' edges, as supplied in a CLC kayak kit; Guillemot Kayaks)
  - double-bias (±45°) knitted glass tape, e.g. 12 oz without mat ('DB120') or 17 oz with mat ('DB1708') (Fiberglass Supply)
  - 6 oz glass cloth (styles 7533 plain weave or 3733 flat weave) for sheathing over the taped seams (Fiberglass Supply)
  - laminating epoxy resin and hardener; pre-mixed filleting compound (e.g. System Three SilverTip EZ Fillet (brand)) (Fiberglass Supply)
  - fillers: wood flour, colloidal silica (Cab-O-Sil (brand)), filleting blend (WEST SYSTEM 405 (brand)), low-density fairing filler (WEST SYSTEM 410 Microlight (brand)) (CLC Boats; Fiberglass Supply; JW Boat Designs)
  - copper wire, soft steel wire or plastic cable ties for stitching (Wikipedia 'Stitch and glue'; JW Boat Designs)
  - plastic body-filler spreaders (squeegees) to cut into fillet tools (CLC Boats)
  - precut triangular or trapezoid foam fillets for under bulkhead edges (boatdesign.net thread)
- **rules_of_thumb**: 
  - Fillet size: cut a 1 in (25 mm) radius into a spreader for the main seams and a 1/2 in (13 mm) radius for bulkheads (CLC Boats 'Fillets'); about 30 mm (1 1/4 in) radius for 1/4-3/8 in plywood, a little bigger for 1/2 in and up (JW Boat Designs 'How Stitch & Tape Seams').
  - Stitch spacing: tie at close intervals, about 15 times the plywood thickness, so the edges stay put while you work (JW Boat Designs).
  - Fillet mix: thicken epoxy with wood flour to 'peanut butter consistency' so it doesn't sag; a little colloidal silica makes it smoother (CLC Boats).
  - Tape onto the wet fillet ('wet on wet'): brush unthickened epoxy out to the tape line, lay the tape, wet it out; do a couple of metres at a time on hot days so the fillet doesn't cure first (CLC Boats; JW Boat Designs).
  - Multiple tapes: stagger the tape edges so they don't build up in one place (JW Boat Designs); when tabbing stringers and frames, taper the layers to give a gradual thickness change, and fillet inside corners (Epoxyworks 'Common errors in fiberglass laminate repair').
  - Hiding tape edges: after a day or two, knock off the ragged edges, then spread a wide, shallow fillet of low-density filler: about 60 mm wide for one layer of 6 oz tape, about 100 mm for two layers or one layer of 10 oz (JW Boat Designs).
  - Fabric choice: plain cloth is enough on small taped-seam boats; heavily loaded bulkheads need double-bias (biax) tape, because in woven cloth only half the fibres cross the joint and the woven fibres must straighten before they take load (boatdesign.net thread).
  - Hard spots: on a solid (uncored) laminate, leave a small gap or put a tapered foam filler under a bulkhead edge so it doesn't press a hard line into the hull; if in doubt, make fillets bigger (boatdesign.net thread; forum opinion, not a standard).
  - Taped plywood butt joint ('hybrid' joint): edge-glue the panels, make a shallow bevel along the joint on both faces, then add one or two layers of glass (biaxial is a good choice) on each side; for comparison a wooden butt block should be at least 16 times the plywood thickness wide, and a scarf about 8:1 (Epoxyworks 'Joining Plywood').

### When to use it

- **everyday_examples**: 
  - home-built plywood kayaks, canoes and dinghies (e.g. the Mirror dinghy, whose kit used copper wire stitches; Wikipedia 'Stitch and glue')
  - bulkheads, seat fronts and stringers glassed into the hull of a fibreglass yacht or motorboat (boatdesign.net thread)
  - plywood 'Instant Boats' and one-sheet boats built at home (Wikipedia 'Stitch and glue')
- **when_to_use**: When you want to join thin panels at an angle or edge to edge into a light, stiff, watertight shell with no frames or fasteners: plywood boats, kayaks, boxes, fairings, and adding or repairing bulkheads and stringers in a fibreglass hull. Good when the panels themselves can define the shape, when the joint must be sealed, and when you can reach both sides of the seam. Also a way to join plywood sheets end to end (taped butt) when you can't cut a scarf.
- **when_not_to_use**: Not for anything that must come apart (use screws, bolts or the Glued joint design entry's mechanical options). Not where you can't reach the inside corner. Not for thick solid timber joints where ordinary woodworking joints and glue are simpler (Butt and lap wood joints; Glued joint design). Not on polyethylene or polypropylene. Avoid polyester resin over polystyrene foam. For joining tubes, use a Bonded tube joint; for adding a threaded mounting point to a panel, use a Bonding fastener or Potted insert instead of tabbing on a block.
- **environment_limits**: Water: cured epoxy and glass are waterproof, but exposed plywood end grain wicks water and must be sealed with epoxy (boatdesign.net thread). Sunlight: epoxy is damaged by UV and needs paint or varnish over it; some resin systems add UV inhibitors (Fiberglass Supply mentions WEST SYSTEM 105/207 'with UV inhibitors') ⚑ [uncertain: no figure]. Heat: epoxy softens as it warms; check the resin's data sheet for its heat limit ⚑ [uncertain: no figure on an opened page]. Cold: cure slows; full cure can take over two weeks at room temperature (WEST SYSTEM 'General Epoxy Safety Guidelines'). Hard landings or flexing: a stiff fillet edge on a solid laminate can crack the hull along a 'hard spot' (boatdesign.net thread). *(⚑ parts need confirming)*
- **safety_notes**: Epoxy skin allergy (sensitisation): fewer than 10% of users react, less than 2% become allergic, but once sensitised even tiny amounts can trigger worse reactions, so always wear gloves, eye protection and long sleeves, and never clean epoxy off skin with solvent (WEST SYSTEM 'Health effects from overexposure to epoxy'; 'General Epoxy Safety Guidelines'). Sanding dust: never breathe dust from partly cured epoxy, which is still reactive; use ventilation and at least an N95 dust mask (WEST SYSTEM). Glass-fibre dust from sanding and cutting causes itchy rashes and eye and throat irritation: wear long sleeves, gloves, goggles and a mask, wash with soap and water afterwards, and wash work clothes separately (Illinois Department of Public Health 'Fiberglass' fact sheet). Heat from large batches: a pot of mixed epoxy can get hot enough to ignite nearby materials and give off fumes that ordinary respirators don't stop, so mix small batches and move a hot pot outside, away from people and anything that burns (Epoxyworks 'Health and safety'). Hardener on sawdust can self-heat: don't put hardener in a bin with sawdust (WEST SYSTEM). Never use a home-built boat without testing it near shore with buoyancy aids ⚑ [uncertain: general advice, no source opened]. *(⚑ parts need confirming)*
- **common_failures**: 
  - Starved seam (too little resin, dry white patches in the tape): resin drains through an open seam or is soaked up by the wood; tape the outside of the seam and saturate the tape well (Guillemot Kayaks).
  - Sagging or runny fillet: the mix is too thin; thicken to peanut-butter consistency (CLC Boats).
  - Lumpy fillet and endless sanding: scrape up the squeeze-out with the flat of the tool as you go, and don't go back to touch up a fillet that has started to stiffen (CLC Boats).
  - Tape lifting or not bonding: laid on after the fillet cured, or on a contaminated surface; lay tape wet on wet (CLC Boats; JW Boat Designs).
  - Visible tape edges and dips in the plywood from sanding them: feather with a wide low-density filler fillet rather than sanding into the plywood (JW Boat Designs).
  - Hard spot or crack where a bulkhead meets a solid hull: add a foam fillet, a gap, or a bigger fillet, and taper the tabbing layers (boatdesign.net thread; Epoxyworks).
  - Tabbing too light for the load (e.g. a single layer of roving in production boats): scale the glass to the load and use directional (biax) fabrics for structural bulkheads (boatdesign.net thread).
  - Wire stitches stuck in cured epoxy: heat with a soldering iron or blowtorch to release, or use plastic ties that can be planed off (JW Boat Designs).
- **related**: 
  - Glued joint design (butt, lap and scarf joints): explains overlap, scarf and peel-vs-shear rules for glued joints in general; scarfing is stronger and smoother than a taped butt for joining plywood (Epoxyworks 'Joining Plywood')
  - Butt and lap wood joints: wooden joints held with screws, pocket holes or glue; no glass tape or fillet
  - Two-part epoxy: the glue used for the fillet and to wet out the tape
  - Bonded tube joint: the same idea of glued or fibre-wrapped overlaps, but for tubes (carbon, bamboo) instead of panels
  - Potted insert: how to make a hard point in a cored panel that you will later tab or bolt to
  - Bonding fastener: a glued-on threaded stud, sometimes laminated in with a square of glass over it
  - Sewn seams and hand stitches: in historic 'sewn boats' the stitches were the permanent joint; in stitch and glue they are only temporary clamps (Wikipedia 'Stitch and glue')
  - Adhesive tape joint and tape hinge: pressure-sensitive tape across a seam, a much weaker, quick version for cardboard and foam board

### Pictures, videos and models

- **links**: 
  - [StitchAndGlue.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:StitchAndGlue.svg): Cross-section diagram of a stitch-and-glue joint: two plywood panels, wire stitch, epoxy fillet and glass tape (used in Wikipedia 'Stitch and glue') *(licence: CC BY-SA 3.0 or GFDL 1.2+ (choice of licence))*
  - [Canoe_stitch_and_glue.jpg (Wikimedia Commons, by Kevin Saff)](https://commons.wikimedia.org/wiki/File:Canoe_stitch_and_glue.jpg): Photo of a plywood canoe being built by stitch and glue, with the stitches along the seams *(licence: CC BY-SA 2.0)*
  - [Fillets (Chesapeake Light Craft boatbuilding tips)](https://clcboats.com/blogs/boatbuilding-tips/fillets): Photos of a fillet being spread with a radiused tool, examples of filleting tools, and an overhead view of a cleaned-up fillet *(licence: link only)*
  - [Quick and Dirty Stitch and Glue (Steve Lewis, Duckworks Magazine)](https://duckworksmagazine.com/05/articles/s-and-g/index.htm): Step-by-step photos of a 10 ft skiff: stitching panels with wire ties, filleting and taping seams, tack fillets on seats, taping the outside *(licence: link only)*
  - [Precision Seam Taping - Petrel Play SG - E21 (Guillemot Kayaks)](https://guillemot-kayaks.com/stitch-and-glue/recreational-kayak-sea-kayak/stitch-and-glue-petrel-play/precision-seam-taping): Video and transcript of running pre-wetted glass tape down the inside seam of a kit kayak with a 'brush on a stick' *(licence: link only)*
- **make_it_yourself**: 
  - [Epoxy Fillet Tool (Parametric) (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/565974-epoxy-fillet-tool-parametric): A 50 x 50 mm printable fillet spreader for composite work in three thicknesses, with 1, 5, 10 and 15 mm radii and an Onshape model to change them. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Fillet tool epoxy (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/138672-fillet-tool-epoxy): Printable epoxy fillet tools in 25 mm and 15 mm radii. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Woodworking Corner fillet tool (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/840633-woodworking-corner-fillet-tool): Parametric Fusion model of a corner fillet tool, supplied in 30 mm and 15 mm radius versions; change the 'CornerRadius' parameter for other sizes. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A three-step cross-section of two plywood panels meeting at a V: (1) stitched with a wire twist, (2) a curved fillet of thick epoxy filling the inside corner, (3) glass tape laid over the fillet and onto both panels, with arrows showing load flowing smoothly round the curve instead of through a sharp corner.
- **sources**: 
  - https://en.wikipedia.org/wiki/Stitch_and_glue
  - https://commons.wikimedia.org/wiki/File:StitchAndGlue.svg
  - https://commons.wikimedia.org/wiki/File:Canoe_stitch_and_glue.jpg
  - https://clcboats.com/blogs/boatbuilding-tips/fillets
  - https://duckworksmagazine.com/05/articles/s-and-g/index.htm
  - https://jwboatdesigns.co.nz/how-stitch-tape-seams/
  - https://duckworksmagazine.com/03/r/columns/welsford/019/john.htm
  - https://www.epoxyworks.com/common-errors-in-fiberglass-laminate-repair/
  - https://www.epoxyworks.com/joining-plywood-3/
  - https://www.boatdesign.net/goto/post?id=549947
  - https://fiberglasssupply.com/stitch-and-glue-boatbuilding-materials-guide/
  - https://guillemot-kayaks.com/stitch-and-glue/recreational-kayak-sea-kayak/stitch-and-glue-petrel-play/precision-seam-taping
  - https://www.practical-sailor.com/boat-maintenance/a-solid-connection
  - https://3dprint.com/108318/strengthening-3d-parts/
  - https://hackaday.io/project/176681/log/190592
  - https://www.westsystem.com/safety/health-effects-from-overexposure-to-epoxy/
  - https://www.westsystem.com/safety/preventing-overexposure/
  - https://www.epoxyworks.com/?p=9878
  - https://idph.illinois.gov/envhealth/factsheets/fiberglass.htm
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **glue_traits**:  ⚑ *needs confirming (best guess): no glue traits found*
- **bonds_well**: wood, glass or ceramic ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ape (see making tips), but polyester resin dissolves polystyrene foam [uncertain: forum consensus in search re…"*
- **bonds_poorly**: PLA, slippery plastics (PE or PP), fabric or leather, foam ⚑ *needs confirming (source uncertain): `materials` is marked [uncertain] here: "…ape (see making tips), but polyester resin dissolves polystyrene foam [uncertain: forum consensus in search re…"*
- **tools**: drill and tap, sewing or leather tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: permanent
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: wood, carbon fibre or composites

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, load, making_tips_3d_printing, materials, processes, safety_notes

