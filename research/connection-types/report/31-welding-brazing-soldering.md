# welding, brazing & soldering: Joins by melting: welds, brazes, solders and heat seals

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 328 Welded metal joint (fusion welding; stick, MIG, TIG and gas welding)

*welding, brazing & soldering.* The edges of two metal parts are melted together, usually with added filler metal, by an electric arc or a gas flame, so that they cool as one piece of metal

*Also covers:* Baseline entry for the family. One entry, with the processes compared in it (MIG easiest to learn, stick cheapest, TIG for thin metal and aluminium, flux-cored for outdoors, gas welding), the five basic joints (butt, lap, corner, edge, T), tack welds and forge welding. Safety: arc light burns eyes and skin, fire, harmful fumes and electric shock

### What it is

- **plain_name**: Melting the edges of two metal parts together with a very hot electric spark or gas flame, usually adding a little extra metal, so they cool and set as one solid piece
- **term**: Welded metal joint (fusion welding: stick, MIG, TIG, flux-cored and gas welding)
- **aliases**: 
  - weld, weldment, fusion weld
  - arc welding
  - stick welding = shielded metal arc welding (SMAW) = manual metal arc (MMA or MMAW) welding (Wikipedia 'Welding')
  - MIG welding = gas metal arc welding (GMAW); 'MAG' when an active gas such as CO2 is used ⚑ [uncertain: MAG not on an opened page]; 'wire feed welding'
  - flux-cored arc welding (FCAW), 'gasless MIG', self-shielded flux-cored; 'dual shield' when gas is added (Wikipedia 'Welding')
  - TIG welding = gas tungsten arc welding (GTAW); 'Heliarc' (old name) (Wikipedia 'Gas tungsten arc welding')
  - gas welding = oxy-acetylene or oxy-fuel welding (Wikipedia 'Welding')
  - forge welding = fire welding (blacksmithing) (Wikipedia 'Forge welding')
  - tack weld (a small temporary weld that holds parts before the full weld) (TWI)
  - butt weld, lap weld, corner weld, edge weld, T-joint or fillet weld, plug weld
  - bead, weld pool or puddle, heat-affected zone (HAZ) *(⚑ parts need confirming)*
- **family**: welding, brazing & soldering
- **one_liner**: Welding melts the edges of two metal parts, usually with extra filler metal from a wire or rod, using an electric arc or a gas flame, so the melted metal flows together and cools into one continuous piece: the strongest permanent way to join metal parts of the same or compatible metals.
- **complexity**: Single piece once made: the two parts and the weld bead become one. Making it needs a small assembly of equipment: a power source or gas torch, an electrode (consumable rod or wire, or a tungsten electrode plus filler rod), shielding gas or flux, a work (earth) clamp and cable, clamps or magnets to hold the parts, and protective gear.
- **how_it_works**: An electric arc (or a gas flame) heats a small spot until both edges melt into a pool of liquid metal (the weld pool or puddle); filler metal from the wire or rod melts into the pool, and the welder moves along the joint so the pool leaves behind a solid ridge (the bead) (Wikipedia 'Welding'). Hot liquid metal reacts with air, so it is protected by a shielding gas from a bottle (MIG and TIG), or by flux on the rod or inside the wire that makes its own gas and a crust of slag to chip off (stick and flux-cored); gas welding uses the flame itself. The processes differ mainly in how the heat and filler arrive: stick uses a flux-coated rod, MIG a continuously fed wire, TIG a non-melting tungsten electrode with a hand-fed filler rod, and gas welding a torch flame. Forge welding is the old blacksmith's method: two pieces are heated to a bright yellow heat with a borax flux and hammered together without fully melting (Wikipedia 'Forge welding').

### Finder attributes

- **job**: join and hold: permanently joins metal parts into one rigid piece; tack welds also hold parts in line before the full weld
- **motion**: none
- **degrees_of_freedom**: 0: the parts become one piece.
- **special_behaviour**: none: it is a plain permanent joint
- **holding_principle**: material bond (glue, solvent or melting): the parts are melted together (metallic bond); forge welding bonds them by heat and hammering
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a welding power supply (mains or generator) or a gas torch
- **removability**: permanent: can only be undone by cutting or grinding the weld out (small tack welds are easy to grind off and redo, TWI)
- **reuse_cycles**: once
- **tools_needed**: A welder (MIG/flux-cored, stick or TIG machine, or an oxy-acetylene torch set); a gas cylinder and regulator for MIG, TIG and gas welding; a welding helmet with the right filter (auto-darkening is common), leather gloves and a flame-resistant jacket; clamps or welding magnets; an angle grinder and wire brush to clean and bevel the metal; a chipping hammer for slag (stick and flux-cored); a fire extinguisher; fume extraction indoors (Miller; Lincoln manual; HSE)
- **seal**: airtight or pressure when the weld is continuous and sound: tanks, pipes and pressure vessels are made by welding (Wikipedia 'Welding'); porosity (gas holes) or gaps leak
- **load**: Heavy: a sound weld can be stronger than the metal around it and is strong in pull, shear and twist (Wikipedia 'Welding'). The weak spot is the heat-affected zone (HAZ) next to the bead, which 'is often weaker than both the base material and the fusion zone' and holds leftover (residual) stresses; under repeated loads (vibration, fatigue) cracks start at the edge of the bead, and grinding the weld flat improves fatigue life (Wikipedia 'Welding'). Tack welds are light-duty and only hold parts for final welding (TWI).
- **adjustable**: no: once welded the position is fixed; tack welds can be ground off and redone if alignment is wrong (TWI)
- **play_and_precision**: No play: the joint is rigid. Accuracy is limited by distortion: the weld shrinks as it cools and pulls parts out of line, more so with spread-out heat such as gas welding (Wikipedia 'Welding'). Clamps, jigs and tack welds placed in a planned order hold alignment and the joint gap and reduce distortion (TWI). Not suitable for parts that must keep machined accuracy unless re-machined after welding.
- **access_needed**: one side only (blind) for many joints (fillet, lap and plug welds and thin butt welds); thick butt joints are often prepared and welded from both sides (double-V preparation) (Wikipedia 'Welding'). The work clamp must also go on clean bare metal near the weld.
- **materials**: Can join: mild (carbon) steel (all processes); stainless steel (MIG, TIG, stick); aluminium (TIG with AC, or MIG; harder: clean the oxide off first); cast iron (special stick rods); chromoly tube, copper and brass, magnesium and titanium (mostly TIG) (Miller; Wikipedia 'Gas tungsten arc welding', 'Shielded metal arc welding'). Joins the same or compatible metals: steel can't be fusion-welded to aluminium in a home workshop (dissimilar welding is still a research topic, and aluminium-to-steel transition joints are made by explosion welding, Wikipedia 'Welding'); use bolts, rivets or brazing instead. Galvanised, painted, oily or plated metal must be cleaned back to bare metal first (fumes and porosity). Plastics are joined by plastic welding instead (separate entries). Forge welding can join iron and steels of similar carbon content (Wikipedia 'Forge welding').
- **maker_difficulty**: hard: needs a welder, protective gear, a safe place to work and practice; MIG is the easiest process to learn (Miller), but many makers have a local fabricator weld parts instead

### Making it

- **processes**: sheet metal (and steel tube and plate fabrication): the main use, off-the-shelf part (have it welded by a fabrication shop, or buy welded brackets and frames)
- **print_in_place**: no: welding joins metal; 3D-printed parts can only help as jigs, gauges and fixtures (and melt if they get near the arc)
- **making_tips_3d_printing**: not applicable to the joint itself (plastics are joined by Melted plastic weld, Friction-welded plastic and Ultrasonic weld). 3D printing is useful around welding: print alignment jigs, angle templates, magnet holders and weld gauges, but keep them away from the arc and hot metal: a printed fillet weld gauge's designer warns to let the weld cool or print in a heat-resistant filament (Printables 1445951). Never leave printed (flammable) parts in the spark zone: clear combustibles well away from welding (OSHA 1910.252).
- **off_the_shelf_parts**: Search terms: 'MIG welder' or 'MIG/flux-core welder' (120 V or 230 V hobby units), 'multiprocess welder', 'stick welder' or 'MMA inverter welder', 'TIG welder' ('AC/DC TIG' for aluminium), 'oxy-acetylene welding kit' and 'flashback arrestor', 'MIG wire' (e.g. ER70S-6 for mild steel) and 'flux-core wire' ⚑ [uncertain: wire grade names not on an opened page], 'stick electrodes' (e.g. 7018, as in the Commons weld-pool photo), 'argon/CO2 shielding gas', 'auto-darkening welding helmet', 'welding gloves', 'welding magnets' or 'magnetic squares', 'welding clamps' or 'locking C-clamp', 'welding table', 'fume extractor', 'welding curtain' or 'welding screen'. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Current: 'for every .001 inch of material thickness, you need 1 amp of output' (about 125 A for 1/8 in (3.2 mm) steel) (Miller, https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers).
  - Thickness limits: MIG and flux-cored can join metal as thin as 26 gauge; stick is 'limited to metals no thinner than 18 gauge'; a small 120 V MIG welds 24 gauge to 3/16 in (0.8-4.8 mm) mild steel in one pass (Miller, https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers).
  - Duty cycle: the minutes out of every 10 that a welder can run before it must cool; 30% at 215 A means 3 minutes welding then 7 minutes rest, and the duty cycle rises at lower current (Miller, https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers).
  - Outdoors or in wind use stick or self-shielded flux-cored wire, which need no gas; MIG gas is blown away by drafts (Miller; Wikipedia 'Gas metal arc welding', https://en.wikipedia.org/wiki/Gas_metal_arc_welding).
  - Connect the work (earth) clamp 'as close as possible to the area being welded' on clean metal, so welding current doesn't take other paths (Lincoln Electric manual, https://static.prd.echannel.linde.com/wcsstore/AU_SPW_Store/pdf/product/en_AU/lincoln_operatingmanual_redimig455.pdf).
  - Move combustibles at least 35 ft (10.7 m) away or cover them, and keep a fire watch for at least half an hour after welding (OSHA 29 CFR 1910.252, https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252).
  - Gas welding: acetylene is unstable and can explode above about 15 psi (1 atm), so regulators are set below that, and flashback arrestors are fitted to stop a flame running back into the cylinders (Wikipedia, https://en.wikipedia.org/wiki/Oxy-fuel_welding_and_cutting).
  - Forge welding: common steel (0.2-0.8% carbon) welds at a bright yellow heat; both pieces must be at the same heat and cleaned with a flux such as borax (Wikipedia, https://en.wikipedia.org/wiki/Forge_welding).
  - Wear ear plugs above 85 dB(A): welding can exceed 100 dB(A) (Wikipedia, https://en.wikipedia.org/wiki/Welding).

### When to use it

- **everyday_examples**: 
  - steel gates, railings, trailer frames and fencing (Miller lists trailer frames and fencing as typical projects)
  - car-body repairs and motorcycle or car restoration (Miller lists auto body and car and motorcycle projects)
  - bicycle frames (TIG-welded steel, aluminium and titanium) and lawnmower or go-kart tube frames
  - the bead of melted metal along the corners of steel workbenches, shelving and playground climbing frames
- **when_to_use**: For strong, rigid, permanent joints in steel and other weldable metals: frames, brackets, stands, trailers, carts, robot chassis made of steel tube or angle, repairs to broken metal parts, and leak-tight tanks and pipes. Choose the process by metal, thickness, place and budget (Miller; Wikipedia): MIG is the easiest to learn, fast and clean on thin to medium steel and also does stainless and aluminium; flux-cored uses the same machine without gas, for outdoors, wind and rusty metal; stick is the cheapest machine, works outdoors and on dirty or thick metal but is harder to learn and not for thin sheet; TIG gives the neatest, most controlled welds on thin steel, stainless, aluminium and copper alloys but is slow and hardest to master; gas (oxy-acetylene) welding uses cheap, simple equipment, is still used for pipes, tubes and repairs, and the same torch heats, bends and cuts metal; forge welding is for blacksmiths joining iron and steel in a forge.
- **when_not_to_use**: When parts must come apart again: use bolts (Ordinary screw joint). For thin sheet that would burn through or warp, or for joining different metals: use brazing, blind rivets, clinching or adhesive. For aluminium to steel: not by ordinary welding; bolt or rivet them, with insulating washers to prevent galvanic corrosion (Wikipedia 'Washer (hardware)'). For plastics: use plastic welding entries. Near bearings, electronics, batteries, fuel, or on parts that have held flammable liquids (they can explode even when 'cleaned', Lincoln manual). On hardened or heat-treated parts such as shafts, springs and high-carbon steel: the heat-affected zone becomes weak or brittle and cracks (Wikipedia 'Welding'); to fix a hub to a motor shaft use a shaft-to-hub joint (key, D-flat, clamp hub) or a retaining compound instead. Indoors without fume extraction: HSE no longer accepts any welding without suitable exposure control.
- **environment_limits**: A finished steel weld handles the same heat and cold as the metal, but: steel welds rust unless painted; some steels become brittle in cold, below a 'transition temperature' (Wikipedia 'Welding'); welds under vibration fail by fatigue starting at the bead edge (grind flat to improve, Wikipedia); cracks in the heat-affected zone can appear as late as two days after welding (Wikipedia 'Welding'). While welding: wind blows MIG and TIG shielding gas away, causing porosity, so use stick or flux-cored outdoors (Wikipedia 'Gas metal arc welding'; Miller); damp or wet conditions increase the risk of electric shock (OSHA 1910.252; Lincoln manual).
- **safety_notes**: Major hazards: get training and read the machine's manual. ARC LIGHT: the arc gives off intense ultraviolet light that burns the eyes ('arc eye' or welder's flash, a sunburn of the cornea) and bare skin; wear a welding helmet with the correct filter (auto-darkening helmets darken automatically) and cover all skin, and screen bystanders with welding curtains (Wikipedia 'Welding', 'Photokeratitis'). Gas welding needs shaded goggles. ELECTRIC SHOCK can kill: the electrode, wire, torch and work circuit are live when the welder is on; wear dry, hole-free gloves, insulate yourself from the work and ground, take extra care in damp places, never cool the electrode holder in water, and replace damaged cables (Lincoln manual). FIRE AND BURNS: welding is 'hot work'; sparks fly far and through cracks, so clear or cover combustibles (OSHA: 35 ft / 10.7 m), keep an extinguisher ready and watch for smouldering fires for at least half an hour afterwards (OSHA 1910.252); wear leather gloves and flame-resistant, non-synthetic clothing, because molten metal melts through polyester (Wikipedia 'Welding'). Never weld or cut drums, tanks or containers that held fuel or chemicals: they can explode (Lincoln manual; OSHA). FUMES: all welding fume, including mild-steel fume, is classed as a cause of lung cancer and contains manganese (nerve damage); HSE expects extraction (local exhaust ventilation) indoors and a suitable respirator where extraction isn't enough and outdoors, and says there is 'no known level of safe exposure' (HSE bulletin STSU1-2019). Stainless steel gives off hexavalent chromium (cancer-causing) (Wikipedia 'Welding'); galvanised (zinc-coated) steel gives off zinc oxide fume that causes metal fume fever, so grind the coating off first (Wikipedia 'Metal fume fever'); lead- or cadmium-plated metal is worse still (Lincoln manual). Keep chlorinated solvent degreasers away: the arc turns their vapour into phosgene, a highly toxic gas (Lincoln manual; OSHA 1910.252). Shielding gases can displace air in small rooms (Lincoln manual). GAS CYLINDERS: keep them upright and chained; acetylene is explosive above about 15 psi and needs flashback arrestors (Lincoln manual; Wikipedia 'Oxy-fuel welding and cutting'). NOISE above 100 dB(A): wear ear protection (Wikipedia 'Welding'). Arc welding's magnetic fields may affect pacemakers (Lincoln manual).
- **common_failures**: (1) Porosity (gas bubbles) from dirty, oily, rusty or painted metal, wind blowing the gas away, or a long arc: clean to bright metal and shield from drafts (Wikipedia 'Gas metal arc welding'); aluminium is especially prone because of its oxide skin, so wire-brush or chemically clean it. (2) Lack of fusion or incomplete penetration (a 'cold' bead sitting on top): too little current or too fast; follow the 1 A per 0.001 in guide (Miller) and prepare thick joints with a bevel. (3) Burn-through and holes on thin sheet: too much heat; use MIG or TIG, lower current, tack and stitch. (4) Distortion and warping as the weld shrinks: clamp, tack weld in a planned order, and alternate sides (TWI; Wikipedia). (5) Cracks, especially in the heat-affected zone of high-carbon steel or from excess hydrogen in the weld, sometimes appearing up to two days later: preheat and cool slowly (Wikipedia 'Welding'). (6) Undercut, slag inclusions and spatter (Wikipedia list of defects): chip slag between passes with stick and flux-cored. (7) Weak tack welds that tear when the part is moved (TWI). (8) Arcing damage where welding current returns through the wrong path, e.g. lifting chains or a machine's bearings: clamp the work lead next to the weld (Lincoln manual) ⚑ [uncertain: bearings are not named on the opened page]. (9) Running the welder past its duty cycle so it cuts out (Miller). *(⚑ parts need confirming)*
- **related**: 
  - Brazed joint (brazing, silver soldering, hard soldering): melts only a brass or silver filler into a close gap, not the parts; joins thinner metal and different metals with less distortion, but is weaker than a weld
  - Soldered metal joint (soft soldering, sweat-soldered copper pipe): much lower temperature and much weaker; for copper pipe, tinplate and electronics
  - Spot weld (resistance spot welding): joins overlapping sheets (up to about 3 mm, Wikipedia) by clamping and passing current, with no bead or filler; also battery tabs
  - Melted plastic weld, Friction-welded plastic and Ultrasonic weld: the plastic equivalents
  - Blind rivet (pop rivet) and Clinching: cold, one-sided or press joints for sheet metal, including different metals
  - Ordinary screw joint (bolt and nut, machine screw): removable alternative for metal frames
  - Metal brackets and plates (angle bracket, mending plate): bolt-on alternative for frames
  - Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub): use instead of welding a hub to a motor shaft
  - Two-part epoxy and Epoxy putty: 'cold weld' products (e.g. JB Weld (brand)) that glue rather than weld; much weaker but need no welder

### Pictures, videos and models

- **links**: 
  - [Common joint types.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Common_joint_types.png): Diagram of basic weld joint types: square butt, V-butt, lap and T joints *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Weld puddle, also known as a weld pool or welding pool.png (Wikimedia Commons, by Jose Bueno)](https://commons.wikimedia.org/wiki/File:Weld_puddle,_also_known_as_a_weld_pool_or_welding_pool.png): A stick weld pool seen through a welding lens and without it, on a single-bevel groove weld *(licence: CC BY 3.0 (reuse with credit))*
  - [MIG welding.webm (Wikimedia Commons, by Chris MacDonald)](https://commons.wikimedia.org/wiki/File:MIG_welding.webm): Video of MIG welding filmed through a shaded lens, showing the arc and bead forming *(licence: CC BY 3.0 (reuse with credit))*
  - [Man dressed in full welding gear.jpg (Wikimedia Commons, by Borderlands Roomba)](https://commons.wikimedia.org/wiki/File:Man_dressed_in_full_welding_gear.jpg): A welder in full protective gear (helmet, jacket, gloves) *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [4 Types of Welding Explained: MIG vs TIG vs Stick vs Flux Core (TimWelds, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=y-OKi8oSNQ4): Video comparing the four common arc welding processes for beginners (a 5-process version with oxy-acetylene is https://www.youtube.com/watch?v=5M9I_bBrnZ0) *(licence: link only)*
- **make_it_yourself**: 
  - [Fillet Weld Gauge (Printables 1445951; URL from Printables API, page not opened)](https://www.printables.com/model/1445951-fillet-weld-gauge): Printable metric gauge for checking fillet weld sizes; the designer warns to let welds cool or use a heat-resistant filament *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Magnetic Welding Clamp (Printables 590972; URL from Printables API, page not opened)](https://www.printables.com/model/590972-magnetic-welding-clamp): Small printed holder with two 10 x 3 mm magnets for holding small metal parts in place for welding *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Welding Practice Object (Printables 420818; URL from Printables API, page not opened)](https://www.printables.com/model/420818-welding-practice-object): A practice object for working on welding technique *(licence: Public domain (Creative Commons Public Domain))*
- **diagram_idea**: Five small cross-sections of the basic joints (butt, lap, corner, edge and T) with the weld bead shaded, next to a larger close-up of an arc melting both edges into a weld pool under a cloud of shielding gas, the filler wire feeding in and the solid bead and heat-affected zone left behind.
- **sources**: 
  - https://en.wikipedia.org/wiki/Welding
  - https://en.wikipedia.org/wiki/Gas_metal_arc_welding
  - https://en.wikipedia.org/wiki/Shielded_metal_arc_welding
  - https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding
  - https://en.wikipedia.org/wiki/Flux-cored_arc_welding
  - https://en.wikipedia.org/wiki/Oxy-fuel_welding_and_cutting
  - https://en.wikipedia.org/wiki/Forge_welding
  - https://en.wikipedia.org/wiki/Metal_fume_fever
  - https://en.wikipedia.org/wiki/Photokeratitis
  - https://en.wikipedia.org/wiki/Welding_joint
  - https://en.wikipedia.org/wiki/Washer_(hardware)
  - https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers
  - https://www.hse.gov.uk/safetybulletins/mild-steel-welding-fume.htm
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252
  - https://static.prd.echannel.linde.com/wcsstore/AU_SPW_Store/pdf/product/en_AU/lincoln_operatingmanual_redimig455.pdf
  - https://www.twi-global.com/technical-knowledge/faqs/what-is-a-tack-weld
  - https://commons.wikimedia.org/wiki/File:Common_joint_types.png
  - https://commons.wikimedia.org/wiki/File:Weld_puddle,_also_known_as_a_weld_pool_or_welding_pool.png
  - https://commons.wikimedia.org/wiki/File:MIG_welding.webm
  - https://commons.wikimedia.org/wiki/File:Man_dressed_in_full_welding_gear.jpg
  - https://www.youtube.com/watch?v=y-OKi8oSNQ4
  - https://www.youtube.com/watch?v=5M9I_bBrnZ0
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
- **tools**: welding or brazing torch, press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, common_failures, off_the_shelf_parts

## 342 Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun)

*welding, brazing & soldering.* Two plastic parts are joined by melting their edges together and running in a bead of the same plastic as filler, using a soldering iron, a 3D pen, or a hot-air welder with a welding rod

*Also covers:* Also covers soldering-iron welding with filament as filler, melting in staples or mesh across cracks, hot-air and extrusion welding, and matching the filler to the plastic. The fix for PE and PP, which glues and solvents can't join. Safety: burns, fire and plastic fumes; keep a separate iron tip for plastic.

### What it is

- **plain_name**: Melting the edges of two plastic parts with a hot tool and working in a strip of the same plastic as filler, so that everything cools into one solid piece: welding, but for plastic
- **term**: Plastic welding with filler (hot-tool, hot-air and extrusion welding of thermoplastics)
- **aliases**: 
  - plastic welding, thermoplastic welding; ISO 472 calls it 'uniting softened surfaces of materials, generally with the aid of heat' (Wikipedia 'Plastic welding')
  - hot air welding = hot gas welding; freehand (hand) welding = fan welding; speed welding or speed-tip welding (Wikipedia 'Plastic welding', 'Hot gas welding')
  - airless plastic welding (a hot iron with a flat or teardrop tip melts the rod) and nitrogen plastic welding (hot nitrogen gas instead of air) (Polyvance, The Book of Plastic Repair)
  - soldering-iron plastic welding; 'trench' welding with 3D-printer filament as filler (Hackaday 2023 reader comments)
  - 3D pen welding; 'plastic extrusion gun' built from a printer hot-end (Hackaday 2026); PLA 'glue gun' (Hackaday 2018)
  - extrusion welding (hand-held extruder) and injection welding, e.g. Drader injectiweld (brand) (Wikipedia 'Plastic welding')
  - hot stapling, crack stitching, plastic stitching (red-hot staples melted in across a crack) (Rick's Free Auto Repair Advice)
  - welding rod, filler rod, thermoplastic welding rod; 'spline' (rod sold on a spool) (Wikipedia 'Plastic welding')
  - contact welding, plastic 'spot welding' (heated tips pinch two sheets together) (Wikipedia; Hackaday 2018)
  - bumper repair, kayak repair, poly tank repair (common search terms)
- **family**: welding, brazing & soldering
- **other_families**: print-in-place & 3D-printing joints, seals & pass-throughs
- **one_liner**: Plastic welding melts the joint faces of two parts made of the same plastic and fuses in extra plastic from a rod, an offcut or 3D-printer filament, using a soldering iron, a 3D pen or a hot-air welder, so the joint becomes one continuous piece; it is the usual fix for polyethylene (PE) and polypropylene (PP), which glues and solvents can't hold.
- **complexity**: Single piece once made: the parts and the filler fuse into one. Making it needs: a hot tool (a spare soldering iron or an 'airless' welding iron with a flat or teardrop tip, a 3D pen, or a hot-air welder or heat gun with a speed-tip nozzle); filler of the same plastic (welding rod, strips cut from scrap, or 3D-printer filament); and optionally stainless-steel mesh or hot staples for reinforcement, aluminium tape or clamps to hold a crack closed, and a rotary tool or knife to cut a V-shaped groove along the joint (Polyvance; Wikipedia 'Plastic welding').
- **how_it_works**: Most everyday plastics are thermoplastics: they soften and melt when heated and set again when cooled, so two pieces can be melted together (Polyvance). The tool heats both the surface of the part and the filler until both are soft, and pressure pushes them together so the long plastic molecules mix across the joint before it cools; Polyvance stresses melting 'both the substrate and the plastic welding rod at the same time'. If only the filler melts and the part stays hard, the bead just sticks like hot glue (a German rule of thumb quoted by a Hackaday reader calls that 'plastic soldering'), and a 2018 Hackaday test with molten PLA showed only 'superficial' fusion. Filler and part must be the same or a very similar plastic, otherwise they don't mix (Wikipedia 'Plastic welding'). Variants: a soldering iron or airless welder melts the rod into a groove and stirs it into the part; a 3D pen or printer hot-end pushes out molten filament; a hot-air welder blows hot air on both the rod and the joint, either freehand or through a speed tip that feeds and presses the rod; an extrusion welder pushes out molten rod for thick sections; and hot staples or stainless mesh can be melted in across a crack for extra strength (Wikipedia; Polyvance; Rick's Free Auto Repair Advice).

### Finder attributes

- **job**: 
  - join and hold: permanently joins plastic parts, or repairs a cracked or broken one
  - glue or bond: a melted bond used where glue fails, especially on PE and PP (Hackaday 2018: HDPE is 'easy to cut, but not so easy to join. Conventional glues can have a hard time')
  - seal it, or pass cables or fluid through: a continuous, fully fused bead makes plastic tanks, trays and fittings watertight (Wikipedia 'Plastic welding')
- **motion**: none
- **degrees_of_freedom**: 0: the parts become one rigid piece.
- **special_behaviour**: none: it is a plain permanent joint
- **holding_principle**: material bond (glue, solvent or melting): the plastic of both parts and the filler melt and tangle together; also shape (the parts interlock; form-fit) when stainless-steel mesh or hot staples are melted in across a crack (Polyvance; Rick's Free Auto Repair Advice)
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a mains or battery-powered hot tool (soldering iron, airless welder, 3D pen or hot-air welder)
- **removability**: permanent: it can only be cut or ground apart; a poor weld can be re-melted and redone
- **reuse_cycles**: once
- **tools_needed**: A hot tool: a cheap spare soldering iron with a flat or washer-shaped tip (Hackaday 2018), an airless plastic welding iron with welding tips, a 3D pen, or a hot-air plastic welder or temperature-controlled heat gun with a reducing nozzle and speed-tip shoe (Wikipedia; Commons photo). Filler of the same plastic (welding rod, strips cut from scrap, or filament). Rotary tool or knife to cut a V-groove; coarse sandpaper (50-80 grit) and plastic cleaner to prepare the surface; aluminium body tape or clamps to hold the pieces in line; optionally stainless-steel reinforcing mesh or a hot-staple gun (Polyvance; Rick's). For HDPE sheet 'spot welds': a PTFE BBQ mat and a flat presser (Hackaday 2018). Ventilation or fume extraction.
- **seal**: watertight: a continuous, fully fused bead between matching plastics seals tanks and fittings; hot-air welding is used to make chemical tanks, water tanks, heat exchangers and plumbing fittings (Wikipedia 'Plastic welding'). Gas pores and unfused spots leak (Wikipedia 'Hot gas welding'), and on 3D prints the printed walls themselves may be porous, so a reader advised coating the print with epoxy as well (Hackaday 2023 comments).
- **load**: Medium. A well-fused weld in matching plastic is strong: in a 2026 test a printer-hot-end welding pen gave a stronger joint than a normal 3D pen and 'a much, much stronger join than the usual superglue', and hot-air welding was stronger still (Hackaday 2026). Polyvance says a wide ribbon rod welded across a crack keeps its own extruded structure, so tearing the repaired bumper 'is like trying to tear the rod in two'. Strength depends on fusion and bead size: Paddling Magazine says a kayak weld 'should be just as thick or thicker than the original surface'. A bead laid only along the surface of a thin butt joint is weaker than the solid part, especially when bending opens the joint from the unwelded side, so weld both sides or add mesh (Polyvance) ⚑ [uncertain: no test figure for bending versus shear]. *(⚑ parts need confirming)*
- **adjustable**: no: once cool it is fixed, though the weld can be reheated and reshaped while soft (Polyvance reheats a weld and squeezes it flat with forming pliers)
- **play_and_precision**: No play once welded. Accuracy depends on holding the parts in line while welding: Polyvance tapes the outer (show) face with aluminium tape and welds from the back, and Rick's clamps the crack closed. Heat can move the parts: Wikipedia ('Hot gas welding') warns that thermal expansion causes distortion if parts aren't secured, and a Hackaday reader notes that formed plastic has a 'memory' and changes shape when heated.
- **access_needed**: one side only (blind) for a bead, staples or mesh on the back face of a repair; both sides for the strongest repair (Polyvance welds the back, then grooves and welds the front). Injection welding can patch a hole from one side without reaching the back (Wikipedia 'Plastic welding').
- **materials**: Joins thermoplastics to the same or a very similar plastic (Wikipedia: PVC to acrylic is an exception; Popular Science adds PET to polycarbonate for friction welds). Works on: PE (HDPE, LDPE), PP and the PP-rubber blends used in most car bumpers (TPO, TEO), ABS, PVC, nylon (PA), polycarbonate and PC blends, PBT, PET, PPE, TPE and TPU; Polyvance sells a matching rod for each and says more than 95% of late-model bumper covers are TPO, TEO or PP. 3D-printing filaments: PLA, PETG, ABS (Hackaday 2018, 2026; Scorchworks) and printed TPU (Printables 11188). It is the usual answer for PE and PP, which glues and solvents struggle with (Hackaday 2018; Structural acrylic entry). Doesn't work on: thermosets, which bubble and smoke instead of melting: thermoset polyurethane (PUR, RIM), SMC and fibreglass (Polyvance uses adhesives or uses the rod only as a hot-melt glue on them); crosslinked PE (PEX, HDXLPE kayaks) softens but doesn't melt and its melting point is 'very close to its burning point' (Polyvance; Paddling Magazine); mismatched pairs, e.g. nylon cable ties pushed into a PP part, which don't fuse (Hackaday 2023 comments); resin (SLA) prints, which are not thermoplastics ⚑ [uncertain: not stated on an opened page]; fluoropolymers (PVDF, FEP, PFA) are welded industrially but give off fumes that cause polymer fume fever (TWI). Metal, wood and glass can't be joined this way, only embedded. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: the tools are cheap (a spare soldering iron plus offcuts or filament of the same plastic), but you have to identify the plastic and learn to melt both the part and the filler without burning or melting through

### Making it

- **processes**: 
  - 3D print (FDM): welding printed parts together, joining large prints made in sections, or repairing broken prints with the same filament (Scorchworks; Hackaday 2018, 2026)
  - CNC and hand-cut plastic sheet: PE, PP and PVC sheet welded into tanks and trays with hot air or, above 6 mm thick, an extrusion welder (Wikipedia 'Plastic welding')
  - off-the-shelf part: repairing moulded thermoplastic products such as bumpers, kayaks, water tanks and bins (Polyvance; Paddling Magazine)
  - 3D print (resin): not suitable, because cured resin is not a thermoplastic ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: welding assembles separately printed parts after printing (for example a large hollow model printed in pieces, Hackaday 2018, or 20 printed hexagons welded into a ball, Scorchworks)
- **making_tips_3d_printing**: Filler: use the same filament the part was printed with (a short length of filament, or a printed 'glue stick'); a different plastic won't fuse (Hackaday 2023 comments; Wikipedia). Heat the part, not just the filler: the bead must melt into both faces, which is why a printer hot-end with a brass nozzle works faster and better than a commercial 3D pen with its low-conductivity tip (Hackaday 2026). A PLA bead from an 80 W high-temperature glue gun (up to about 208 deg C) only fused superficially but still held well because it filled every gap; a hobby glue gun at about 150 deg C only softened PLA, which melts around 180-220 deg C (Hackaday 2018, citing the RepRap wiki). Soldering-iron 'trench' method: push the hot iron deep into the seam between the two printed parts to make a trench with a welded bottom, then melt filament into the trench as a second pass, like multi-pass TIG welding (Hackaday 2023 reader comment). Design for welding: add bevels or a V-groove along the joint so there is room for a proper bead (Scorchworks), or design built-in 'glue channels' along interlocking tabs to fill with molten filament (Hackaday 2023). Thin walls: hot air 'can be a very dicey business' on thin-walled prints because the wall melts or sags before the joint fuses; a pen or iron gives more control (Hackaday 2026). Keep the iron moving and the temperature low on thin or flexible prints: when fusing a printed TPU lid to a TPU actuator, the designer turned a temperature-controlled iron 'all the way down' and kept it moving to avoid melting through (Printables 11188). Print parts that will be welded solid (high infill) near the joint so there is enough material to melt into ⚑ [uncertain: inferred from the friction-stir study in the Friction-welded plastic entry]. Printed tanks: weld the seams, then test for leaks and seal the walls if needed, since printed walls can be porous (Hackaday 2023 comments). Typical failures: a bead that sits on top and peels off (base not melted), melt-through and warping of thin walls, blobs that need sanding. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search terms: 'plastic welder kit' or 'plastic welding iron' (airless welder with tips), 'hot staple gun' or 'plastic stapler' with 'stitching staples' (e.g. Astro 7600 kit (brand), Rick's), 'hot air plastic welder' with 'speed welding nozzle' or 'speed tip', 'plastic extrusion welder' (thick sheet), 'plastic welding rod' by material (PP, HDPE, LDPE, ABS, PVC, nylon, PC, TPO, PET; round, triangular or flat 'ribbon' profiles), 'universal plastic welding rod' (e.g. Uni-Weld FiberFlex (brand)), 'stainless steel reinforcing mesh' or 'plastic repair mesh', 'aluminium body tape', '3D pen' and '3D pen filament'. Polyvance's rod chart (The Book of Plastic Repair, p. 9) lists rod codes for about 20 plastics: link to it rather than copying sizes.
- **rules_of_thumb**: 
  - Match the plastic: hot-gas welding needs parts and filler rod 'of the same or a very similar plastic' (PVC to acrylic is an exception) (Wikipedia, https://en.wikipedia.org/wiki/Plastic_welding). Find the moulded code (e.g. >PP<, >ABS<) on the back of the part; if there is none, make a small test weld with each likely rod and try to pick it off with a fingernail once cool: 'the one that sticks best is the one to use' (Polyvance, The Book of Plastic Repair, pp. 3-4, https://br.polyvance.com/wp-content/uploads/sites/3/2021/10/thebook.pdf).
  - Melt both: melt the rod and the part at the same time and press them together; with an iron, lay no more than about 2 in (50 mm) of rod into the groove at a time, then go back over it and stir rod and base together (Polyvance, pp. 5 and 9, https://br.polyvance.com/wp-content/uploads/sites/3/2021/10/thebook.pdf).
  - Groove: cut a V-groove about halfway through the part, weld the back, then groove and weld the front; a front groove about 1/16-3/32 in (1.5-2.5 mm) deep and about 1/8 in (3 mm) wide suits a 1/8 in round rod (Polyvance, pp. 5 and 11, https://br.polyvance.com/wp-content/uploads/sites/3/2021/10/thebook.pdf).
  - Hot-gas settings ('T.F.A.P.S.': temperature, flow, angle, pressure, speed) for a nitrogen welder: about 700-1000 deg F (370-540 deg C) gas, about 700-800 deg F for PP/TPO; 10-15 L/min flow; torch at 45 deg; 1-2 lb (0.5-1 kg) down on the rod; travel 4-6 in (100-150 mm) per minute. A properly melted rod is not discoloured, except nylon, which should turn light brown (Polyvance, pp. 5 and 9, https://br.polyvance.com/wp-content/uploads/sites/3/2021/10/thebook.pdf).
  - Thick material: extrusion welding is 'the preferred technique for joining material over 6 mm thick' (Wikipedia, https://en.wikipedia.org/wiki/Plastic_welding).
  - Joint design for hot-gas welds: a small root gap lets hot gas escape and reduces pores; double-V joints take more welding pressure and are less prone to lack of fusion than single-V joints; too fast a travel stretches the rod, too slow overheats it (Wikipedia, https://en.wikipedia.org/wiki/Hot_gas_welding).
  - Kayak (HDPE) repair: hold a heat gun 1-2 in (25-50 mm) from the surface; it is hot enough when it 'starts to get shiny and the fuzziness disappears'; carry the weld at least 1/2 in (13 mm) past the end of the crack; make it as thick or thicker than the hull; let it cool naturally, because water cooling weakens it (Paddling Magazine, https://paddlingmag.com/skills/diy-projects/kayak-repair/).
  - Hot staples: heat the staple until red-hot, push it in across the crack no deeper than half the plastic's thickness while twisting slightly, alternate the twist direction along the crack, then snip off the protruding legs (Rick's Free Auto Repair Advice, https://ricksfreeautorepairadvice.com/avoid-bondo-learn-the-right-way-to-fix-a-cracked-bumper/). Stainless mesh: reinforce about an inch (25 mm) either side of the crack (Hackaday 2023 reader comment, https://hackaday.com/2023/05/15/zippy-plastic-welding/).
  - PTFE release sheets (a BBQ mat under the iron, as in Hackaday's HDPE 'spot welding') must stay cool enough: TWI recommends PTFE-coated hot plates are kept below 270 deg C because overheated PTFE causes polymer fume fever (TWI, https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics).
  - Glue-gun welding of PLA needs a high-temperature gun (about 208 deg C); a hobby gun at about 150 deg C only softens PLA (Hackaday 2018, https://hackaday.com/2018/02/05/3d-printering-printing-sticks-for-a-pla-hot-glue-gun/).

### When to use it

- **everyday_examples**: 
  - a cracked plastic car bumper cover repaired with welding rod and hot staples at a body shop (Wikipedia; Rick's Free Auto Repair Advice)
  - a cracked polyethylene kayak, water butt or fuel/water tank welded with a heat gun and rod (Paddling Magazine; Polyvance lists RV water tanks, kayaks and trash cans)
  - the thin coloured bead along the seams of sheet vinyl flooring in kitchens and hospitals, hot-air welded with a rod (Tarkett video, 'How to hot weld vinyl flooring?')
  - welded plastic chemical tanks, trays and fittings in workshops and labs (Wikipedia 'Plastic welding')
- **when_to_use**: When you need a strong, permanent joint between parts made of the same thermoplastic, especially PE and PP, which most glues and solvents can't hold (Hackaday 2018; Structural acrylic entry). Good for: repairing cracked bumpers, bins, kayaks, tanks, toys and appliance housings (Polyvance; Rick's; Paddling Magazine); joining 3D prints that are bigger than the printer's bed, or filling seams on a printed model, using the same filament (Hackaday 2018, 2026; Scorchworks); making watertight seams on tanks and trays from PE, PP or PVC sheet (Wikipedia); and repairs where the part flexes, because a matching-plastic weld bends with the part while rigid fillers such as epoxy or body filler 'break off the instant your bumper flexes' (Rick's). Pick the tool by the job: a soldering iron or 3D pen for small printed parts and fine control; a hot-air welder with rod for long seams and sheet; hot staples or melted-in mesh for cracks in flexible parts; an extrusion welder for material over 6 mm thick (Wikipedia).
- **when_not_to_use**: When the parts must come apart again: use screws, snap fits or clips. When the plastic is unknown, mixed, or a thermoset (fibreglass, SMC, thermoset polyurethane, resin prints) or crosslinked PE: use a two-part adhesive or epoxy instead (Polyvance). When joining different plastics, or plastic to metal, wood or glass: use glue, mechanical fasteners or Heat staking. On thin-walled prints with a hot-air gun, which tends to melt the wall before the joint fuses (Hackaday 2026): use a soldering iron or pen, or Solvent welding for ABS or acrylic, or Cyanoacrylate. For large flat faces on ABS, ASA or acrylic, Solvent welding bonds the whole contact area. For quick, light, removable or cosmetic joins: Hot-melt adhesive. For anything that carries a person's weight, pressure, or a safety load: don't rely on a home-made plastic weld. Never weld PTFE or other fluoropolymers at home (TWI).
- **environment_limits**: A good weld has the same limits as the plastic itself. PLA softens at about 60-65 deg C (Hackaday 2018 citing the RepRap wiki), so welded PLA parts can sag in a hot car or in sun behind glass; PETG, ABS, PP and PE take more heat ⚑ [uncertain: no figures from an opened page]. PE and PP welds suit water and many chemicals (hot-air welding is used for chemical and water tanks, Wikipedia). Flexing and vibration: mismatched or poorly fused welds crack off when the part flexes (Rick's; Paddling Magazine: 'If it doesn't mix well, the weld will pop open when it cools or is under stress'). Long-term creep of welds under constant load can't be predicted from a quick tensile test (Wikipedia 'Plastic welding' describes separate creep tests). *(⚑ parts need confirming)*
- **safety_notes**: BURNS: soldering-iron and welder tips, molten plastic and red-hot staples cause burns; a heat gun's nozzle air can reach about 600 deg C (1100 deg F) and the nozzle 'remains hot for 30 minutes after use', so never point it at people and stand it nozzle-up on a non-flammable surface (DeWalt heat gun manual). FIRE: direct the hot-air jet away from flammable objects and let the gun cool for 30 minutes before storing it (DeWalt manual); park soldering irons in their stand. FUMES: work outdoors or with good ventilation or extraction, and stop if the plastic smokes. TWI says fumes from hot-gas welding PVC, nylon, acrylic, polycarbonate and PP are 'not normally likely to give cause for concern' except in confined spaces with the welder's head close to the work and poor ventilation, but fluoropolymers (PVDF, ECTFE, PFA, FEP, PTFE) cause polymer fume fever; keep PTFE BBQ mats and PTFE-coated tools below 270 deg C (TWI). Heated PVC gives off hydrogen chloride (TWI, for laser cutting; Wikipedia 'Polyvinyl chloride'); melting urethane 'has been known to give off toxic cyanide gasses' (Wikipedia 'Plastic welding'); thermoset polyurethane 'bubbles & smokes' instead of melting, a sign to stop (Polyvance); printed TPU degrades and fumes above about 230 deg C, so its designer works outside or with an organic-vapour mask (Printables 11188). Hackaday (2018) warns of 'the health risks present when heating up different types of plastic'. SEPARATE TIP: use a cheap spare soldering iron or a tip kept only for plastic (Hackaday 2018 recommends a cheap iron; a reader uses 'a crappy soldering iron with a flat tip'), since burnt plastic left on an electronics tip can spoil it for soldering ⚑ [uncertain: no manufacturer statement opened]. Not for parts that hold people, pressure or loads where failure is dangerous. *(⚑ parts need confirming)*
- **common_failures**: (1) Cold weld: the filler only sits on top of an unmelted surface and peels off; a cut-through PLA test joint showed only 'superficial' fusion (Hackaday 2018); fix by heating the part until glossy and stirring rod and base together (Polyvance; Hackaday 2023 comments: 'If you just melt the filament and smush it in the gap, it won't adhere properly'). (2) Wrong filler: a different plastic (e.g. nylon cable ties in PP) doesn't fuse and cracks off; identify the plastic and test-weld first (Rick's; Polyvance; Hackaday 2023 comments). (3) Overheating: smoking, browning, a rod that folds over backwards, melt-through or sagging of thin walls (Polyvance; Hackaday 2026); keep the heat moving and lower the temperature (Printables 11188). (4) Pores and voids from trapped hot gas, a porous rod or too little pressure (Wikipedia 'Plastic welding' recommends void-free rod; 'Hot gas welding'). (5) Dirt, grease, paint, wax or mould-release in the joint: wash with soap and water, then plastic cleaner, and sand before welding (Polyvance; Paddling Magazine). (6) The crack keeps running: carry the weld past the end of the crack (Paddling Magazine) and add a cross 'tee' weld at the end (Polyvance). (7) Warping as heated plastic relaxes or expands: support and clamp the part and let it cool supported (Wikipedia 'Hot gas welding'; Paddling Magazine). (8) Smearing when finishing: sand slowly with sharp paper, because friction heat melts the plastic (Polyvance). (9) Leaks in welded printed tanks through porous printed walls: test and seal after welding (Hackaday 2023 comments).
- **related**: 
  - Friction-welded plastic (rotary-tool friction welding, spin welding): the heat comes from rubbing instead of a hot tool; no separate heater needed, but it needs a rotary tool or drill press
  - Heat-sealed seam (heat-sealed plastic film and coated fabric): the same idea for thin film and coated fabric, pressed together with no filler
  - Ultrasonic weld (ultrasonic plastic welding, energy director): industrial, very fast; vibration melts a small ridge in seconds
  - Heat-fused plastic pipe (socket fusion, butt fusion, electrofusion): the controlled, tool-based way to weld PE and PP pipe
  - Heat staking (melted plastic rivet): melts a plastic post into a rivet head to hold another part; a mechanical lock, not fused faces, and works with dissimilar materials
  - Solvent welding (solvent cement): dissolves instead of melts; good for ABS, acrylic, PVC and polystyrene but not for PE, PP or PETG
  - Hot-melt adhesive (glue gun): a separate low-melting glue that sticks to the surface; quick but weaker and softens in heat
  - Structural acrylic and low-surface-energy plastic adhesives (for PE and PP): special glues that can bond PE and PP without heat
  - Hand-mouldable thermoplastic (polycaprolactone): a low-melting plastic moulded by hand; it doesn't fuse into other plastics
  - Two-part epoxy and Epoxy putty: rigid gap-fillers across materials; crack off flexible plastics (Rick's)
  - Silicone and MS-polymer adhesive sealants: a flexible sealing layer to add over a welded printed tank
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): mechanical ways to join printed sections, which welding can reinforce
  - Heat-set threaded insert: uses the same soldering iron to melt a metal insert into a print
  - Welded metal joint (fusion welding): the metal equivalent

### Pictures, videos and models

- **links**: 
  - [Kunststoffziehschweissen Schweissschuh.jpg (Wikimedia Commons, by Markus Baerlocher, 2025)](https://commons.wikimedia.org/wiki/File:Kunststoffziehschweissen_Schweissschuh.jpg): A temperature-controlled heat gun fitted with a reducing nozzle and a V-shaped speed-tip shoe, with 4 mm grey PP welding rod *(licence: CC0 1.0 (public domain dedication))*
  - [Classification of welding methods for semi-finished polymeric materials.jpg (Wikimedia Commons, by Onur Balkan)](https://commons.wikimedia.org/wiki/File:Classification_of_welding_methods_for_semi-finished_polymeric_materials.jpg): Diagram sorting plastic welding methods into external heating (hot gas, hot tool, extrusion and others) and internal heating (friction, ultrasonic and others) *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Making a 3D pen that's actually useful (half-baked-research, YouTube; title confirmed via YouTube oEmbed; reviewed by Hackaday 2026)](https://www.youtube.com/watch?v=3gL9PFk9JtA): Welding 3D prints with a normal 3D pen, a home-made welding pen built from a printer hot-end, and hot air, with strength tests from about 13:38 *(licence: link only)*
  - [FiberFlex Bumper Repair (Polyvance, YouTube; title confirmed via YouTube oEmbed; embedded in Rick's Free Auto Repair Advice)](https://www.youtube.com/watch?v=AoUMDnHA8oI): Bumper crack repair: stainless mesh melted into the back with a hot iron, then a groove filled with welding rod *(licence: link only)*
  - [Spot Welding Plastic (Hackaday, 2018)](https://hackaday.com/2018/08/05/spot-welding-plastic/): Photo of a cheap soldering iron with a washer-shaped tip used to 'spot weld' HDPE milk-bottle sheet through a PTFE BBQ mat *(licence: link only)*
- **make_it_yourself**: 
  - [Plastic Welding Coupons (Printables 875756; URL from Printables API, page not opened)](https://www.printables.com/model/875756-plastic-welding-coupons): Printable practice pieces for learning to weld plastic, with a linked video of traditional-style welding *(licence: Creative Commons Public Domain)*
  - [Pillow Soft Robotic Actuator (Printables 11188; URL from Printables API, page not opened)](https://www.printables.com/model/11188-pillow-soft-robotic-actuator): Printed TPU air actuator whose separately printed lid is fused on with a temperature-controlled soldering iron turned down low; includes fume and melt-through warnings *(licence: Creative Commons Attribution)*
  - [Filament Scroll - Plastic Welding Tool (Printables 856329; URL from Printables API, page not opened)](https://www.printables.com/model/856329-filament-scroll-plastic-welding-tool): A printed holder that feeds filament as filler while plastic welding (a remix of a solder scroll) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- **diagram_idea**: A cross-section of a V-grooved crack in a plastic plate before and after welding: on the left the hot tip melting the groove walls and a filler rod at the same time, on the right the filler and base blended into one shaded zone, with an inset showing a 'cold' bead sitting on top of an unmelted groove as the failure to avoid, and a second inset of stainless mesh melted in across the back.
- **sources**: 
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://en.wikipedia.org/wiki/Hot_gas_welding
  - https://en.wikipedia.org/wiki/Polyvinyl_chloride
  - https://br.polyvance.com/wp-content/uploads/sites/3/2021/10/thebook.pdf
  - https://ricksfreeautorepairadvice.com/avoid-bondo-learn-the-right-way-to-fix-a-cracked-bumper/
  - https://paddlingmag.com/skills/diy-projects/kayak-repair/
  - https://hackaday.com/2026/03/07/diy-3d-pen-is-born-to-weld/
  - https://hackaday.com/2023/05/15/zippy-plastic-welding/
  - https://hackaday.com/2018/08/05/spot-welding-plastic/
  - https://hackaday.com/2018/02/05/3d-printering-printing-sticks-for-a-pla-hot-glue-gun/
  - https://www.scorchworks.com/Blog/?p=442
  - https://www.popsci.com/how-to-spin-weld-at-home/
  - https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics
  - https://content.cmpl.org/tg/Tools/HeatGun.pdf
  - https://commons.wikimedia.org/wiki/File:Kunststoffziehschweissen_Schweissschuh.jpg
  - https://commons.wikimedia.org/wiki/File:Classification_of_welding_methods_for_semi-finished_polymeric_materials.jpg
  - https://www.youtube.com/watch?v=3gL9PFk9JtA
  - https://www.youtube.com/watch?v=AoUMDnHA8oI
  - https://www.youtube.com/watch?v=dsoxXsksNvY
  - https://www.youtube.com/watch?v=3XdRiVKAcUA
  - https://api.printables.com/graphql/ (models 875756, 11188, 856329)

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, heat gun, welding or brazing torch, power tools, hand tools
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, making_tips_3d_printing, materials, processes, safety_notes

## 343 Friction-welded plastic (rotary-tool friction welding, spin welding)

*welding, brazing & soldering.* A piece of filament spun in a rotary tool, or a round part spun against another, rubs until friction melts the plastic and the parts fuse into one

*Also covers:* Also covers spin welding round parts on a drill press, and industrial vibration and metal friction welding as one-line mentions. Safety: eye protection, friction burns.

### What it is

- **plain_name**: Spinning a stick of plastic, or a whole round plastic part, against another plastic part so fast that the rubbing melts both surfaces, so they fuse into one piece with no glue and no heater
- **term**: Friction welding of plastics (rotary-tool friction welding and spin welding)
- **aliases**: 
  - friction welding with a rotary tool; 'Dremel (brand) friction welding'; filament friction welding (Scorchworks; Hackaday 2014)
  - 'friction stir welding tips' as makers call printed rotary-tool tips (Printables 737519); true friction stir welding (FSW) uses a spinning tool that is not used up (Wikipedia 'Friction welding'; Hackaday 2014 reader comments)
  - spin welding = rotary friction welding (RFW) of plastics; inertia (flywheel) spin welding; continuous-drive (direct-drive) spin welding (Wikipedia 'Spin welding of polymers')
  - Spinwelder (brand): a 1974 Mattel construction toy that spun a plastic rod against plastic parts (Toy Tales; Wikipedia)
  - vibration welding of plastics: linear vibration welding, orbital friction welding, angular friction welding (Wikipedia 'Linear vibration welding', 'Friction welding')
  - metal friction welding: rotary, linear and inertia friction welding, friction stir welding (Wikipedia 'Friction welding')
  - flash (squeezed-out melt), flash trap, burn-off or upset (shortening during the weld)
- **family**: welding, brazing & soldering
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Friction welding melts plastic by rubbing instead of by heating: a short length of filament spun in a rotary tool is run along a seam like a melting filler rod, or one round part is spun against another on a drill press or lathe, until the contact melts and the parts fuse into a single piece.
- **complexity**: Single piece once made. Rotary-tool method: a rotary tool (Dremel-type) with a short length of 1.75 mm or 3 mm filament, a plastic rod or a printed welding tip held in a collet or chuck (Scorchworks; Printables 692350, 737519). Spin welding: a drill press or lathe, a holder that spins one part and a fixture that holds the other still and in line (Popular Science used a bolt, a threaded rod coupling, two skate bearings and a wooden board).
- **how_it_works**: Pressing a fast-spinning plastic rod or part against another plastic surface makes frictional heat exactly where they touch, until both surfaces melt; the molten plastic mixes, and when the spinning stops and pressure is held, it freezes into a weld (Wikipedia 'Spin welding of polymers'). The rotary-tool method is 'similar to stick welding in that a consumable filler rod is added to the molten joint': the spinning filament wears away into the seam as you move along it (Hackaday 2014). Spin welding joins two round parts face to face: one is held still, the other is spun and pushed against it; once the faces are semi-molten the spin is stopped abruptly and the force is kept on until the joint cools (Wikipedia). Industrial versions rub the parts back and forth instead (vibration welding, about 100-300 Hz with 1-2 mm movement), or stir the joint with a spinning tool (friction stir welding); metal parts such as axles are friction-welded the same way on large machines (Wikipedia 'Plastic welding', 'Friction welding').

### Finder attributes

- **job**: 
  - join and hold: permanently joins plastic parts, e.g. printed sections, or repairs a cracked print (Scorchworks)
  - glue or bond: a melted bond made without glue or a heater; Scorchworks notes it keeps the part 'a homogenous material'
  - seal it, or pass cables or fluid through: a spin-welded round joint makes a sealed container or cap (Branson; Popular Science)
- **motion**: none
- **degrees_of_freedom**: 0: the parts become one rigid piece.
- **special_behaviour**: none: it is a plain permanent joint
- **holding_principle**: material bond (glue, solvent or melting): the plastic of both parts (and the filler rod) is melted by friction and fuses
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a powered rotary tool, drill press or lathe
- **removability**: permanent: it can only be cut or ground apart
- **reuse_cycles**: once
- **tools_needed**: Rotary-tool welding: a variable-speed rotary tool; a 1/16 in collet for 1.75 mm filament or a 1/8 in collet for 3 mm filament, or a keyless chuck; pliers to pull more filament out; or printed tips with a 1/8 in (3.175 mm) shank (Scorchworks; Printables 737519). Spin welding: a drill press (or lathe), a drill-press vice or clamps, and a simple jig (Popular Science used a bolt and threaded coupling as the driver, skate bearings and a board as the spinner holder). Safety glasses or goggles; thin rubber gloves; ventilation for ABS (Popular Science; Printables 737519). Sandpaper or a file to clean up the bead or flash.
- **seal**: airtight or pressure for a good spin weld: Branson says spin welding produces 'a strong hermetic seal', a Hackaday reader describes spin-welded water-filter housings giving 'a nice watertight weld in a few seconds', and Popular Science's spin-welded bottle-neck capsule is watertight. A hand-run rotary-tool bead is a structural repair and is not reliably watertight ⚑ [uncertain: no leak test found]. *(⚑ parts need confirming)*
- **load**: Medium. Rotary-tool welds are 'shockingly strong, vastly superior to glued plastic for some joints' (Hackaday 2014); welded prints tend to break 'somewhere near the joint' rather than at it (Vaasa Hacklab 2016), and Fran's welded styrene seam survived 'a slew of violent whacks on the workbench' (Hackaday 2012). In a lab study, friction-stir welds between PLA+ prints reached 17.83 MPa at best, beating the 20%-infill body of the part (it broke outside the weld) but only about a third of a solid 100%-infill print (42-53 MPa) (Koçar et al., Polymers 2024). A bead run only along the outside of a seam joins less area than the whole contact face, so a reader suggests solvent welding may be stronger on broad flat joints and friction welding on small ones (Hackaday 2014 comment; opinion, untested). A spin weld should have a weld area greater than the part's wall section so the joint is not the weak point (Branson SW-1).
- **adjustable**: no: fixed once cooled
- **play_and_precision**: No play once welded. Spin welding needs the two parts lined up on the same axis: Popular Science lowers the spindle with the power off to align the parts before clamping the jig, and suggests a centre guide rod to make it self-aligning; Branson's joints use lead-ins, self-centring angled faces or a tongue and groove with about 0.005-0.010 in (0.13-0.25 mm) clearance. Some plastic squeezes out as flash, so the joined part ends up slightly shorter than the two parts added together (Wikipedia 'Spin welding of polymers'). Rotary-tool welds are made by hand, so the parts must be held in place, and the bead adds a lump that may need sanding.
- **access_needed**: one side only (blind) for a rotary-tool bead run along a seam; end of a tube or shaft for spin welding, where the round parts are held at their ends in a chuck and a fixture and pressed end to end
- **materials**: Works on most thermoplastics, joined to the same plastic. Rotary-tool welding is proven on PLA and ABS prints (Scorchworks; Vaasa Hacklab) and styrene rod (Hackaday 2012); for two different plastics, the tip should be the higher-melting one and you bias the heat towards that part (Printables 737519). Spin welding: Branson rates relative ease (1 easiest to 5 hardest): ABS 1-2, polycarbonate 1-2, rigid PVC 1-2, polystyrene 1-2, nylon 1-2, acrylic 2, PP 2, PBT 2, acetal 2-3, PET 2-3, PEEK 3, PE 3, fluoropolymers 3-4 (Branson SW-1); Wikipedia lists polyurethane as 'poor to fair'. Popular Science welds PET bottle necks, and notes 'different plastics can't normally be welded to each other', with PET to polycarbonate as an exception. Printed PLA rods (including metal-filled PLA) have been spin welded on a lathe (Kuo et al., Polymers 2023). Glass-fibre fillers don't cross the joint, so filled plastics weld weaker (Wikipedia). Not for thermosets, resin prints, wood or (at home) metal; metal friction welding needs industrial machines (Wikipedia 'Friction welding').
- **maker_difficulty**: easy: rotary-tool welding needs only a rotary tool and spare filament, though it takes practice ('use LOW speed on the dremel, dont get discouraged, its not as easy as you might think it is', Hackaday 2014 reader comment); spin welding is moderate, since it needs a drill press or lathe and an aligned jig (though Popular Science rates its project 'easy', 45 minutes)

### Making it

- **processes**: 
  - 3D print (FDM): joining printed parts into structures bigger than the printer, or repairing failed prints with filament as filler (Scorchworks); printing the welding tips themselves (Printables 692350, 737519)
  - off-the-shelf part: spin welding round bottle necks, caps, tubes and pipe ends (Popular Science); repairing styrene models (Hackaday 2012)
  - CNC: a lathe can spin-weld round parts (Kuo et al. 2023 used a conventional lathe); friction-stir welding of printed plates was done on a machine in a lab (Koçar et al. 2024), but Wikipedia notes that friction stir welding having been done on a CNC machine 'does not mean that it is safe and recommended for the milling machine'
- **print_in_place**: no: it joins separately printed parts after printing (e.g. 20 printed hexagons welded into a ball, Scorchworks)
- **making_tips_3d_printing**: Filler: use the same filament as the part; 3 mm filament fits a standard 1/8 in collet and 1.75 mm filament a 1/16 in collet, or use a chuck (Scorchworks). Printed tips: Printables 692350 (print in PLA at 100% infill, 0.28 mm layers, flat with a brim; includes a weld test print) and 737519 (a 1/8 in shank with a 3 mm tip, designed to sit straight in a standard collet; printed at 100% infill). Speed: run the tool as slowly as it will go and only speed up if it jumps away from the part; thicker filament needs more speed; don't let much filament stick out, or it whips around and snaps (Scorchworks); a reader fits about 4 cm of 3 mm filament at a time (Hackaday 2014 comment). Technique: hold the tool square to the surface, start at one end and wait about a second for a melt before moving along the seam; for delicate areas start the melt nearby and move it in, so the spinning tip doesn't just wear the part away (Printables 737519). Design for welding: add bevels along the joint for a proper weld bead (Scorchworks), and print the parts solid (high infill) where they will be welded: in friction-stir tests on PLA+ prints, a 20%-infill weld zone gave badly flawed welds (1.66-3.32 MPa) for lack of material, while printing a 12 mm-wide band at 60% or 100% infill along the joint gave sound welds (Koçar et al. 2024). Spin-welded printed parts: give one part a circular joint face and the other a matching face, design a drive feature (rib, slot or flat) so the spinning part can be gripped, and allow a flash trap or groove for the squeezed-out melt (Branson SW-1; Wikipedia). Awkward joints: a 2018 Hackaday writer chose a PLA glue gun over friction welding because he 'doubted how maneuverable my rotary tool would be in awkward orientations'. Typical failures: the tool skipping over the surface without melting, filament whipping and snapping when too much sticks out (Scorchworks), and the tip wearing through thin features (Printables 737519).
- **off_the_shelf_parts**: Search terms: 'rotary tool' (e.g. Dremel (brand)), 'collet set 1/16 1/8' or 'rotary tool keyless chuck', 'styrene rod' (craft and model shops, as used by Fran, Hackaday 2012), spare 1.75 mm or 3 mm 3D-printer filament, 'drill press vice', 'skate bearing 608' (for a Popular Science-style spin-welding jig), 'threaded rod coupling'. Industrial machines: 'spin welding machine', 'linear vibration welder', 'orbital welder' (link to makers' catalogues, e.g. Branson/Emerson, rather than copying specs).
- **rules_of_thumb**: 
  - Collets: 3 mm filament fits a 1/8 in collet; 1.75 mm filament fits a 1/16 in collet. Keep the rotary tool speed as low as possible, raising it only if the tool jumps; thicker filament needs more speed (Scorchworks, https://www.scorchworks.com/Blog/?p=442).
  - Drill-press spin welding of PET bottle necks: about 1400 rpm; touch the parts together 'as gently as possible'; after a few seconds the plastic softens and the faces bind; then let go of the spinning part, switch off and let both spin down together (Popular Science, https://www.popsci.com/how-to-spin-weld-at-home/).
  - Lathe spin welding of 20 mm-diameter printed PLA rods: about 950 rpm, about 17 N force, 30 s of friction, 20 s of welding and 10 s of cooling (Kuo et al., Polymers 2023, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10675412/fullTextXML).
  - Industrial spin welding: 200-14,000 rpm (about 2,000 rpm typical); melting takes 0.5-2 s plus 1-2 s of holding while it cools; weld pressures 72.5-290 psi (0.5-2 MPa); at least one part must be round; required rpm = linear speed / (diameter x pi) (Wikipedia, https://en.wikipedia.org/wiki/Spin_welding_of_polymers).
  - Spin-weld joint design (guidelines only): weld area greater than the wall section; tongue-and-groove weld surface about 2.5 x wall thickness, weld depth about 0.5-0.8 x wall thickness, clearance 0.005-0.010 in, flash traps where flash would show (Branson SW-1, https://www.emerson.com/documents/automation/brochure-joint-design-for-spin-welding-en-5183866.pdf).
  - Printed parts for friction-stir welding: print the weld zone solid (60-100% infill, a 12 mm band in the study); a 20%-infill weld zone gives flawed welds; best result 17.83 MPa at 1750 rpm and 20 mm/min (Koçar et al., Polymers 2024, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11244055/fullTextXML).
  - Industrial vibration welding: 1.0-1.8 mm movement at about 200 Hz, or 2-4 mm at about 100 Hz (Wikipedia, https://en.wikipedia.org/wiki/Linear_vibration_welding); generally 100-300 Hz and 1-2 mm (Wikipedia, https://en.wikipedia.org/wiki/Plastic_welding).
  - Two different plastics (rotary tool): make the tip from the higher-melting plastic and bias the heat towards it (Printables 737519, via https://api.printables.com/graphql/).

### When to use it

- **everyday_examples**: 
  - round plastic parts made by spin welding: toy and shopping-trolley wheels, recycling-bin wheels, fuel filters, check valves, floats and aerosol cylinders (Wikipedia 'Spin welding of polymers', 'Plastic welding')
  - spin-welded water-filter housings with end caps (Hackaday 2014 reader comment)
  - Mattel's 1970s Spinwelder construction toys (Toy Tales; Wikipedia)
  - car parts such as under-bonnet components and ports welded by vibration or spin welding (Wikipedia 'Plastic welding')
- **when_to_use**: Rotary-tool welding: to join or repair PLA, ABS or styrene parts quickly without glue, especially to build structures bigger than the printer bed or to fix failed prints, using only a rotary tool and leftover filament (Scorchworks; Hackaday 2014). It needs no warm-up and no heater, and the joint stays one material. Spin welding: to join two round parts end to end with a sealed, strong joint, e.g. tubes, caps, bottle necks, wheels, capsules and round containers, using a drill press or lathe (Popular Science; Wikipedia). It is fast, repeatable once a jig is made, needs little surface preparation and adds no foreign material (Wikipedia).
- **when_not_to_use**: Joints that aren't round can't be spin welded; long straight seams on printed parts are easier with a soldering iron or hot-air plastic weld (Melted plastic weld). Awkward or inside corners where a rotary tool can't reach squarely (Hackaday 2018). Thin or delicate walls, which the spinning tip wears through (Printables 737519). Different plastics (except special pairs such as PET to polycarbonate), thermosets, resin prints, wood or metal at home. Parts that must come apart: use screws or snap fits. Large flat faces on ABS or acrylic: Solvent welding bonds the whole face. Industrial vibration, ultrasonic and metal friction welding need dedicated machines; for a maker, the closest alternatives are Melted plastic weld or bolting.
- **environment_limits**: The weld has the same limits as the plastic: PLA softens at about 60-65 deg C (Hackaday 2018 citing the RepRap wiki), so friction-welded PLA parts can sag in a hot car. Filled plastics weld weaker because glass fibres don't cross the joint (Wikipedia 'Spin welding of polymers'). Temperature matters during welding too: in one study of spin-welded printed PLA rods, the bending strength of PLA/aluminium-filled-PLA welds rose by about 57.5% when the parts were at 45 deg C (Kuo et al. 2023) ⚑ [uncertain: the abstract does not make clear whether this is the temperature during welding or testing]. No figures found for UV, chemicals or fatigue of maker friction welds ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: EYES: wear safety glasses or goggles; 'you're spinning a molten plastic melt, wear goggles' (Printables 737519); Popular Science's reason for safety glasses is 'to keep flying chips out of your eyes'. FRICTION BURNS AND ENTANGLEMENT: Popular Science advises thin rubber gloves against friction burns, and says 'Never wear heavy gloves around rotating equipment, as they may catch on spinning parts and pull your fingers in'; tie long hair back. Check the drill-press jig for wobble by pulsing the power first, and clamp the stationary fixture to the table (Popular Science). BURNS: the bead and the tip are hot right after welding. FUMES: weld ABS and other plastics that give off fumes in a well-ventilated area (Printables 737519). Molten plastic flung from the tip 'does not taste very nice, keep your mouth closed' (Printables 737519). Industrial spin welders use guards in the tooling to stop molten material or parts being thrown out (Wikipedia 'Spin welding of polymers').
- **common_failures**: (1) Speed or pressure wrong: too slow and the tool skips or jumps without melting; too fast and the filament whips and breaks or gouges the part (Scorchworks; Hackaday 2014 comment). (2) Filament worn too short to grip: stop and pull more out with pliers before it disappears into the collet (Scorchworks). (3) Moving before a melt forms gives a cold, unfused bead; wait about a second at the start (Printables 737519). (4) Wearing through thin walls or delicate features (Printables 737519). (5) Underpowered tool: Fran's cheap rotary tool only worked well once given a proper power supply, reaching 16,000 rpm (Hackaday 2012). (6) Low-infill prints: not enough plastic in the weld zone gives voids and weak welds (Koçar et al. 2024). (7) Spin welds: misaligned parts or a wobbling jig give an uneven, leaky joint; releasing pressure before the melt freezes weakens it; squeezed-out flash inside a tube can't be removed, so add a flash trap (Popular Science; Wikipedia; Branson SW-1). (8) Mismatched plastics don't bond (Popular Science).
- **related**: 
  - Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun): heats the plastic from outside with a hot tool; better for long or awkward seams and for PE and PP sheet
  - Ultrasonic weld (ultrasonic plastic welding, energy director): also melts by rubbing, but with tiny, very fast vibrations (15-40 kHz, Wikipedia); industrial, seconds per joint
  - Heat-fused plastic pipe (socket fusion, butt fusion, electrofusion): heats pipe ends on a hot plate or with built-in wires instead of spinning them
  - Solvent welding (solvent cement): dissolves the surfaces instead of melting them; bonds a whole flat face of ABS or acrylic
  - Heat staking (melted plastic rivet): melts a post into a rivet head; Mattel's Spinwelder could also set plastic rivets (Toy Tales)
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): mechanical alignment for printed sections, which a friction weld can then lock
  - Cyanoacrylate (superglue): quicker for small PLA and PETG joints, but weaker than a good weld (Hackaday 2014; Hackaday 2026)
  - Welded metal joint (fusion welding): the metal family; metal friction welding (e.g. truck axles, Wikipedia) is an industrial process in the same family

### Pictures, videos and models

- **links**: 
  - [Makey Robot Friction Weld Repair (Scorch Works, YouTube; title confirmed via YouTube oEmbed; embedded in Scorchworks blog)](https://www.youtube.com/watch?v=tnnN2sBmPLg): Repairing a broken PLA print by friction welding with filament held in a rotary tool *(licence: link only)*
  - [Friction Welded Truncated Icosahedron (Buckyball) (Scorch Works, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=ryZeZ4qxEIw): Printed hexagons and pentagons friction-welded into a hollow ball bigger than their individual prints *(licence: link only)*
  - [Ask Fran: Build Your Own Friction Welder! (Fran Blanche, YouTube; title confirmed via YouTube oEmbed; featured by Hackaday 2012)](https://www.youtube.com/watch?v=r0zpqhhcmp4): A cheap rotary tool spinning styrene rod to friction-weld a plastic seam, inspired by the 1970s Spinwelder toy *(licence: link only)*
  - [How to spin weld at home (Popular Science, Sean Michael Ragan, 2019)](https://www.popsci.com/how-to-spin-weld-at-home/): Step-by-step photos of a drill-press spin-welding jig joining two PET bottle necks into a watertight capsule *(licence: link only)*
  - [Rotary friction welding.jpg (Wikimedia Commons, by Xyz00030280)](https://commons.wikimedia.org/wiki/File:Rotary_friction_welding.jpg): Industrial rotary friction welding of metal parts, the big-machine cousin of spin welding *(licence: CC BY-SA 4.0 (reuse with credit))*
- **make_it_yourself**: 
  - [Dremel Friction Welding Bits (Printables 692350; URL from Printables API, page not opened)](https://www.printables.com/model/692350-dremel-friction-welding-bits): Printable rotary-tool welding tips (angled, thin and thick) plus a welding test print, made from leftover filament *(licence: Creative Commons Attribution-ShareAlike)*
  - [Friction stir welding tips for Dremel (Printables 737519; URL from Printables API, page not opened)](https://www.printables.com/model/737519-friction-stir-welding-tips-for-dremel): Printed tips with a 1/8 in shank and 3 mm tip that run straight in a standard collet, with technique and safety notes *(licence: Creative Commons Attribution-NoDerivatives)*
  - [Plastic welding for dremel or mototool (Printables 1287251; URL from Printables API, page not opened)](https://www.printables.com/model/1287251-plastic-welding-for-dremel-or-mototool): Printable friction-welding pins for a rotary tool *(licence: Creative Commons Public Domain)*
- **diagram_idea**: Two side-by-side sketches: on the left a rotary tool spinning a short length of filament that melts into the seam between two printed plates, leaving a bead behind like a welding rod; on the right a drill press spinning one bottle neck against a stationary one, with arrows for spin and downward pressure, a close-up of the melt layer and the flash squeezing out, and a note that both must stop and stay pressed together while the joint cools.
- **sources**: 
  - https://www.scorchworks.com/Blog/?p=442
  - https://hackaday.com/2014/12/30/3d-printing-technique-friction-welding/
  - https://hackaday.com/2012/12/31/make-your-own-plastic-friction-welder/
  - https://vaasa.hacklab.fi/2016/06/15/friction-welding-3d-prints
  - https://www.popsci.com/how-to-spin-weld-at-home/
  - https://hackaday.com/2018/02/05/3d-printering-printing-sticks-for-a-pla-hot-glue-gun/
  - https://hackaday.com/2026/03/07/diy-3d-pen-is-born-to-weld/
  - https://en.wikipedia.org/wiki/Spin_welding_of_polymers
  - https://en.wikipedia.org/wiki/Friction_welding
  - https://en.wikipedia.org/wiki/Linear_vibration_welding
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://www.emerson.com/documents/automation/brochure-joint-design-for-spin-welding-en-5183866.pdf
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11244055/fullTextXML
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10675412/fullTextXML
  - https://toytales.ca/spinwelder-from-mattel-1974/
  - https://commons.wikimedia.org/wiki/File:Rotary_friction_welding.jpg
  - https://www.youtube.com/watch?v=tnnN2sBmPLg
  - https://www.youtube.com/watch?v=ryZeZ4qxEIw
  - https://www.youtube.com/watch?v=r0zpqhhcmp4
  - https://api.printables.com/graphql/ (models 692350, 737519, 1287251)

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: welding or brazing torch, drill and tap, press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, seal

## 344 Heat-sealed seam (heat-sealed plastic film and coated fabric)

*welding, brazing & soldering.* Two layers of plastic film, or fabric coated with plastic such as TPU-coated nylon, are pressed together with a hot bar, an iron or a heated wire until the plastic melts into an airtight, waterproof seam

*Also covers:* Also covers impulse sealers, sealing with an iron through a release sheet, printer-nozzle sealing of soft-robot pouches, and RF and hot-air welding of tarps as mentions. Safety: burns and fumes, especially with PVC.

### What it is

- **plain_name**: Pressing two layers of plastic film, or of fabric coated with plastic, together with something hot (a sealer bar, an iron or a hot wire) until the plastic melts into one airtight, waterproof line, like the sealed edge of a crisp packet or an air mattress
- **term**: Heat-sealed seam (heat sealing, heat welding of plastic film and coated fabric)
- **aliases**: 
  - heat sealing, heat seal, heat welding, heat bonding (Wikipedia 'Heat sealer'; Niiyama et al. 2015 call it 'heat bonding')
  - hot bar sealing = direct contact thermal sealing; impulse sealing (impulse heat sealer); band or continuous sealing; hot wire sealing (cuts and seals at once) (Wikipedia 'Heat sealer')
  - hot air (hot gas) seam welding of film, tarps and banners, with the sheets 'rolled together' after heating (Wikipedia 'Plastic welding')
  - RF welding = radio-frequency welding = high-frequency (HF) welding = dielectric sealing or dielectric welding (Wikipedia 'Radio-frequency welding')
  - fused plastic, fusing plastic bags (ironed between parchment) (Make: Maker Camp)
  - pouch motor, 'sticky actuator', aeroMorph, heat-sealed hinge (soft-robot pouches sealed by a heated tip on a CNC) (IEEE Spectrum; Ou et al. 2016)
  - heat-sealable fabric, TPU-coated nylon, 'HF-weldable' Cordura (Extremtextil product names)
  - induction (cap) sealing: the foil inner seal under a bottle cap, sealed without contact (Wikipedia 'Heat sealer'; Commons 'Heat seal film.jpg')
- **family**: welding, brazing & soldering
- **other_families**: seals & pass-throughs, hydraulics, pneumatics & vacuum, cord, strap, webbing & textile hardware
- **one_liner**: A heat-sealed seam joins two thin layers of thermoplastic film, or coating-to-coating on plastic-coated fabric, by pressing them with a hot bar, iron, wire or tip until the facing plastic melts together, giving an airtight, waterproof line with no stitches or glue: the joint behind plastic bags, inflatables, dry bags and soft-robot air pouches.
- **complexity**: Single piece once made: two layers fused along a line. Making it needs: a heat source (an impulse sealer with a nichrome wire under a PTFE cover, a constant-heat bar sealer, a household iron, a soldering iron or wood-burning pen, a heat press, or a 3-axis CNC or 3D printer carrying a heated tip); a release sheet (baking parchment or PTFE) so the melted plastic doesn't stick to the tool; a firm backing; and, for pouches with air channels, masks such as copper tape or parchment where the layers must stay apart (Wikipedia 'Heat sealer'; Extremtextil; Ou et al. 2016; Decker et al. 2022).
- **how_it_works**: Heat sealing is 'the process of sealing one thermoplastic to another similar thermoplastic using heat and pressure' (Wikipedia 'Heat sealer'). The hot tool heats a narrow strip through the layers until the plastic where they touch melts; pressure squeezes the soft faces together so the plastic flows into one, and the seam is held pressed while it cools so it sets before anything pulls on it. In an impulse sealer the nichrome wire heats 'only when current flows', and the jaws keep clamping after the heat stops which 'allows the material to fuse before stress can be applied' (Wikipedia). Coated fabric seals only coating-to-coating: the woven fabric carries the load and the thin TPU or PVC coating melts to make the seam (Extremtextil). Places that must stay open, such as air channels in a pouch, are kept unsealed with a heat-sinking strip of copper tape on top or a sheet of parchment between the layers (Ou et al. 2016; Decker et al. 2022). Industrial cousins: RF welding heats polar plastics such as PVC and polyurethane from inside with a 27.12 MHz electric field, and hot-air welders blow hot air between overlapping sheets and roll them together (Wikipedia 'Radio-frequency welding', 'Plastic welding').

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: makes airtight, waterproof seams for inflatables, air pouches and actuators, dry bags, covers and food or storage bags
  - join and hold: joins layers of film or coated fabric into bags, tubes, pouches and covers
  - glue or bond: a melted bond with no glue; some films carry a heat-activated glue layer instead (Wikipedia 'Heat sealer')
- **motion**: none (the seam itself doesn't move; the film around it flexes, and seam patterns in an inflated pouch act as fold lines, Ou et al. 2016)
- **degrees_of_freedom**: 0: the two layers are fused along the seam line (the film itself stays flexible).
- **special_behaviour**: none: it is a plain permanent seal; seam shapes can, however, be designed so a pouch bends or folds in a planned way when inflated (aeroMorph, Ou et al. 2016)
- **holding_principle**: material bond (glue, solvent or melting): the facing plastic layers melt and fuse
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a heat sealer, iron, soldering iron, heat press or heated CNC tip
- **removability**: permanent: a seam is cut open rather than undone; some packaging seals are designed to peel open, and their 'opening force' is tested (Wikipedia 'Heat sealer')
- **reuse_cycles**: once (a cut-open bag can be resealed below the old seam if there is enough material left)
- **tools_needed**: One of: an impulse heat sealer (hand or foot operated; suited to straight seams on bags and film), a constant-heat bar or band sealer, a household iron (TPU-coated fabric, fused bags), a soldering iron or wood-burning pen with a smooth tip (curved seams), a heat press with a cut aluminium stencil (repeated patterns), or a 3D printer or CNC with a heated tip (Wikipedia 'Heat sealer'; Extremtextil; Ou et al. 2016; Hackaday 2020). Also: baking parchment or PTFE sheet as a release layer, a firm flat backing (board or wooden bar the width of the seam), a metal block or roller to press while cooling, paper packing tape to pre-position seams, and copper tape or parchment to mask areas that must stay open (Extremtextil; Ou et al. 2016).
- **seal**: airtight or pressure: heat sealing makes 'gas-tight bladders' for pouch motors (Niiyama et al. 2015) and 'water- and airtight bonds' in TPU-coated fabric (Extremtextil); RF welds are 'water-, air-, and bacteria-proof' (Wikipedia 'Plastic welding'). Pressure capacity is low and depends on the film and seam width: packaging seams are tested by bursting and by holding about 80% of burst pressure until they creep apart (ASTM F1140 and F2054, Wikipedia 'Heat sealer').
- **load**: Light for plastic film, medium for coated fabric. A linear pouch motor made of heat-sealed film reached up to 100 N pull and 28% stroke (Niiyama et al. 2015), and TPU-coated fabric seams are used for inflatables and boats (Extremtextil; Hackaday 2019: a raft planned in TPU-coated fabric 'fused together with a hot iron'). Thin bag film sealed with a printer nozzle could still be pulled apart by hand (Hackaday 2020). A seam is strongest when the load runs along it (shear, as when an inflated pouch stretches the seam) and weakest when the two layers are peeled apart from the inside edge, which is how seal strength is usually tested ('seal strength testing, also known as peel testing', Wikipedia 'Heat sealer') ⚑ [uncertain: no opened page gives peel and shear figures side by side]. *(⚑ parts need confirming)*
- **adjustable**: no
- **play_and_precision**: not applicable for play. Seam placement: by hand within a few millimetres; a heat press with a stencil or a CNC sealing head gives repeatable patterns (Ou et al. 2016). Film shrinks as it fuses (Make: Maker Camp) and bunches under a dragged tip (Hackaday 2020), so leave extra margin and keep film flat and tensioned.
- **access_needed**: both sides: the layers must be pressed between the hot tool and a firm backing (sealer jaws, or an iron onto a board), so the seam must lie flat and be reachable from above with support underneath; it can't be done blind inside a closed bag or tube
- **materials**: Seals thermoplastic film and plastic-coated sheet to the same or a similar plastic: polyethylene (LDPE bags, HDPE milk-bottle sheet), polypropylene, PVC film, polyolefin shrink film, TPU film, and TPU- or PVC-coated fabrics, plus laminates where at least one layer is a thermoplastic, such as foil bags with a plastic liner (Wikipedia 'Heat sealer'; US Packaging & Wrapping; Extremtextil; Hackaday 2018 and 2020 reader comments). Paper, plastic sheet and fabric can be made heat-sealable by first ironing or pressing on a TPU layer (Ou et al. 2016). RF (high-frequency) welding only works on polar plastics such as PVC, polyurethane, nylon, PET, EVA and cellulose acetate, not on polyethylene (Wikipedia 'Radio-frequency welding'). Won't seal: uncoated fabric, coated fabric face-to-back ('The material only sticks when coating is applied to coating', Extremtextil), and mismatched plastics; one maker found LDPE film would not fuse with a household iron and switched to a defocused laser (Hackaday 2019), while others sealed LDPE and HDPE with a wood-burning pen through parchment (Hackaday 2020 comments). Silicone rubber and uncoated paper don't melt and can't be heat-sealed ⚑ [uncertain: not stated on an opened page]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: an impulse sealer or a household iron and baking parchment are enough, but each film or fabric needs a few test seams to find the right heat, time and pressure (Extremtextil; Make: Maker Camp)

### Making it

- **processes**: 
  - off-the-shelf part: plastic film, bags, tubing and TPU- or PVC-coated fabric sealed with a heat sealer or iron
  - 3D print (FDM): a 3D printer or CNC can carry a heated tip to draw seams (Hackaday 2020; Niiyama et al. 2015; Ou et al. 2016), and printed jigs help seal consistently (Printables 732684)
  - laser cut: a defocused CO2 laser at low power can weld LDPE film, and slightly more power cuts it (Hackaday 2019)
  - CNC: a heat-sealing head on a 3-axis CNC (Ou et al. 2016), or a CNC-milled or water-jet-cut aluminium stencil for a heat press
- **print_in_place**: no: the seam joins film or fabric, not printed parts; a printer can be used as the sealing machine
- **making_tips_3d_printing**: Using a 3D printer as a sealing plotter: wrap the hot-end in aluminium foil, put cardboard on the bed, stretch the film tight with binder clips and a frame, and script the printer to drag the nozzle along the seam at different speeds and temperatures; thin (0.5 mil) bag film gave 'decent seams at around 180 deg C' but bunched up and could be pulled apart by hand (Hackaday 2020). Readers suggested laying baking parchment over the film, or using a rolling tip such as a small ball-transfer unit instead of a dragging nozzle (Hackaday 2020 comments); the aeroMorph team did exactly that, fixing a 1/4 in metal ball transfer to a temperature-controlled soldering iron on a CNC, with a 3D-printed spring mount to keep the sealing force even on bumpy surfaces (Ou et al. 2016). Niiyama's pouch motors were made on 'a 3-axis CNC holding a rod that can be heated, like a soldering iron' (IEEE Spectrum). Printed helpers: a fold-out table with reference lines for consistent seal positions on an impulse sealer (Printables 732684). Alternative: if you can't seal film, print the air chamber itself in TPU (see Soft pneumatic bending actuator); a printed TPU lid can also be fused on with a soldering iron (Printables 11188, see Melted plastic weld). Not applicable to sealing printed parts to each other.
- **off_the_shelf_parts**: Search terms: 'impulse heat sealer' (hand or foot; 'with cutter'; seal width e.g. 2 mm or 5 mm), 'replacement heating element' and 'PTFE (Teflon) tape' for impulse sealers, 'continuous band sealer', 'heat press', 'mini iron' or 'craft iron', 'baking parchment' or 'PTFE sheet' ('BBQ mat'), 'TPU film', 'heat-sealable fabric' or 'TPU-coated nylon' (one or both sides coated), 'PVC-coated polyester' (tarp fabric), 'LDPE lay-flat tubing', 'heat-sealable bags' or 'vacuum sealer bags', 'copper foil tape' (masking channels), and 'hot air welder' with 'overlap welding nozzle' for tarps. Link to supplier pages for sizes rather than copying them.
- **rules_of_thumb**: 
  - Good seals come from the right 'time, temperature and pressure for the correct clean material' (Wikipedia, https://en.wikipedia.org/wiki/Heat_sealer).
  - TPU-coated fabric with a household iron: setting 2-3, about 10-15 s with pressure, seam about 1-2 cm wide, coating facing coating, baking paper between iron and fabric, then let the joint cool under pressure (a metal block helps); iron only the seam, e.g. over a wooden bar the width of the seam (Extremtextil, https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics).
  - TPU heat press: about 10 s at 260 deg F (127 deg C) through a 1/4 in aluminium stencil with channels etched to half its depth; thinner stencils or longer heating 'over-seal' and block the air channels. Coating a sheet with TPU first: about 60 s at 260 deg F (Ou et al., aeroMorph, UIST 2016, https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf).
  - Keep areas unsealed with a heat-sinking mask: copper tape over the air channels when sealing by hand (Ou et al. 2016), or parchment paper between two TPU layers (Decker et al., PNAS 2022, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML).
  - Printer-nozzle sealing of 0.5 mil bag film: decent seams at about 180 deg C, but the film bunched up (Hackaday, https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/).
  - Impulse sealers: the right setting depends mainly on the film type and thickness; use the lowest setting that still gives a sturdy seal, which also makes the heating wire and PTFE tape last longer (US Packaging & Wrapping, https://uspackagingandwrapping.com/blog/impulse-sealer-heat-settings.html).
  - Fusing bag film into sheet: iron on the 'synthetics' setting between two sheets of parchment, keep the iron moving, let it cool before lifting the paper, and turn it over to fuse the other side; too hot an iron makes the plastic shrink fast and ripple (Make: Maker Camp, https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat).
  - PTFE release sheets and PTFE-coated tools should not go above 270 deg C, to avoid polymer fume fever (TWI, https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics).
  - RF (high-frequency) welding works at about 27.12 MHz and only on plastics with polar molecules (PVC is excellent, polyethylene can't be done) (Wikipedia, https://en.wikipedia.org/wiki/Radio-frequency_welding).

### When to use it

- **everyday_examples**: 
  - the sealed edges of plastic bags, food pouches and packaging made on heat sealers (Wikipedia 'Heat sealer')
  - beach balls, airbeds and life jackets, whose seams are typically RF-welded (Wikipedia 'Radio-frequency welding')
  - the foil seal under the cap of a new bottle (induction sealing) (Wikipedia 'Heat sealer'; Commons 'Heat seal film.jpg')
  - greenhouse and polytunnel film panels joined with a wheeled heat sealer (Wikipedia 'Heat sealer')
- **when_to_use**: When you need a thin, flexible, airtight or waterproof seam in film or coated fabric: custom inflatables and air pouches for soft robots (pouch motors, aeroMorph hinges, soft valves), vacuum or storage bags, dry bags, waterproof covers and boat or tarp repairs (Niiyama et al. 2015; Ou et al. 2016; Decker et al. 2022; Extremtextil). It is quick, needs no glue or stitching and, unlike a sewn seam, has no needle holes to leak. Choose an impulse sealer for straight seams on bags and film; an iron for TPU-coated fabric; a soldering iron, wood-burning pen or CNC/3D-printer tip for curved patterns; a heat press with a stencil for many identical pouches (Ou et al. 2016).
- **when_not_to_use**: For rigid plastic parts: use Melted plastic weld or Friction-welded plastic. For uncoated fabric, or fabric to a different material: sew it (Sewn seams and hand stitches) and seal with seam tape, or glue it (Iron-on fusible web for non-airtight hems). For seams that must open and close again: use a zipper or a roll-top closure. For films that won't fuse with your tool (e.g. LDPE with a household iron for one maker, Hackaday 2019) or plastics that don't melt (silicone): change the material or method. For anything that must keep a person afloat or hold high pressure (life jackets, rafts, airbags for lifting): buy certified products; a home-made seam isn't tested to the standards industry uses (Wikipedia lists ASTM seal, burst and leak tests).
- **environment_limits**: The seam shares the film's limits: heat softens it again (it was made by heat), so keep sealed TPU or PE away from hot surfaces ⚑ [uncertain: no softening temperatures from an opened page]. Seams under steady internal pressure can creep open over time, which is why packaging is tested by holding about 80% of burst pressure until failure (Wikipedia 'Heat sealer', ASTM F2054). Sunlight, cold and chemical limits depend on the film and coating; no figures found for maker films ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: BURNS: sealer bars, impulse-sealer wires, irons, soldering-iron tips and freshly melted plastic are hot; let the jaws close and cool before handling the seam. FIRE: keep hot irons and tips in a stand and away from loose film. FUMES: ventilate ('be sure your workspace is well ventilated', Make: Maker Camp). PVC gives off hydrogen chloride when overheated (TWI, for laser cutting; Wikipedia 'Polyvinyl chloride'), so seal PVC with good ventilation and without scorching; TWI says hot-gas welding fumes from PVC are not normally a concern except in confined spaces with the face close to the work. Melting urethane (polyurethane, as in TPU) 'has been known to give off toxic cyanide gasses' (Wikipedia 'Plastic welding'), so don't overheat TPU. Keep PTFE (Teflon) release sheets, BBQ mats and sealer covers below 270 deg C, because overheated PTFE causes polymer fume fever (TWI). RF welders need a screening enclosure to protect the operator from radio-frequency radiation (Wikipedia 'Radio-frequency welding'): an industrial machine, not a home project. MEDICAL AND FOOD LOOK-ALIKES: heat-sealed pouches look like medical fluid bags and sterile or food packaging, which industry validates with seal-strength, burst and leak tests; a home-made seal is not validated, so don't use it for medical, sterile or food-safety purposes. Never rely on a home-sealed inflatable to keep a person afloat or to lift a load over people.
- **common_failures**: (1) Too little heat, time or pressure: a seam that peels apart by hand (Hackaday 2020) or leaks in spots; adjust one setting at a time on test strips (Wikipedia; Extremtextil). (2) Too much heat or time: melt-through holes, shrinking and rippled film (Make: Maker Camp), bubbles in the seam, coating that tears away from the fabric instead of the seam failing (Extremtextil), or over-sealed, blocked air channels (Ou et al. 2016). (3) Releasing pressure too early: seams must cool under pressure (Wikipedia; Extremtextil: bubbles 'if the pressure was too low during cooling'). (4) Film sticking to the tool: use parchment or PTFE as a release layer (Wikipedia; Extremtextil). (5) Wrinkles and bunching under a dragged tip: tension the film, use a rolling ball tip or a parchment layer (Hackaday 2020 and comments; Ou et al. 2016). (6) Coated fabric placed face-to-back, which doesn't bond (Extremtextil). (7) Dirty, oily or wet film, or mismatched plastics (Wikipedia: 'correct clean material'; Hackaday 2019). (8) Leaks at corners, where seams cross, and where a tube or fitting passes through: check by inflating the pouch under water and looking for bubbles, the same idea as the bubble-emission leak test ASTM D3078 (Wikipedia 'Heat sealer'). (9) Hot-wire cut-and-seal edges are narrow beads, 'not usually employed when barrier properties are critical' (Wikipedia).
- **related**: 
  - Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun): joins rigid plastic parts, usually with a filler rod
  - Ultrasonic weld (ultrasonic plastic welding, energy director): Wikipedia lists ultrasonic welding as another way to heat-seal film and fabric industrially
  - Sewn seams and hand stitches (lockstitch, saddle stitch, flat-felled seam): strong in any fabric, but leaks through needle holes unless taped or sealed
  - Iron-on fusible web (heat-activated adhesive web, hem tape): also ironed, but uses a separate glue film between fabrics; not airtight
  - Rope-end finishing (whipping, heat-sealing, back splice, aglet): melting synthetic rope and webbing ends so they don't fray
  - Hot-melt adhesive (glue gun): hot-melt glue in strips is one of Wikipedia's listed heat-sealing methods, for materials that won't fuse
  - Bellows and inflatable actuators (air bag, air spring): many hobby versions are heat-sealed film pouches
  - Air-logic valve (pneumatic logic, soft bistable valve): soft valves built from heat-sealed TPU film (Decker et al. 2022)
  - Soft pneumatic bending actuator (air-powered soft finger): a printed or moulded alternative to heat-sealed pouches
  - Zipper (slide fastener): the reopenable closure to pair with heat-sealed bags and covers

### Pictures, videos and models

- **links**: 
  - [Impulse sealer.jpg (Wikimedia Commons, by Cjp24, 2009)](https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg): A small benchtop impulse bag sealer with a metal body and cutter blade *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Heat Sealing Film for Permeability Test.jpg (Wikimedia Commons, USDA photo by Peggy Greb)](https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg): A heat sealer being used to seal a plastic bag of lettuce in a food lab *(licence: Public domain (USDA))*
  - [TPU-coated fabrics: Easy to weld with heat and pressure (Extremtextil know-how)](https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics): Step-by-step guide (steps 1-3): pre-taping, ironing and cooling a TPU-coated fabric seam under a metal block *(licence: link only)*
  - [aeroMorph (MIT Media Lab, Tangible Media Group)](https://www.media.mit.edu/projects/aeromorph/overview/): Project page with video of heat-sealed TPU-coated paper, plastic and fabric pouches folding themselves like origami when inflated, and the CNC heat-sealing head *(licence: link only)*
  - [Fusing Plastic Sheets With A 3D Printer (Sort Of) (Hackaday, 2020)](https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/): Photo of a foil-wrapped printer hot-end dragging seams into tensioned bag film, with reader suggestions *(licence: link only)*
- **make_it_yourself**: 
  - [Cookie/Treat Heat Sealer Table (Printables 732684; URL from Printables API, page not opened)](https://www.printables.com/model/732684-cookietreat-heat-sealer-table): A printable fold-out table with reference lines that clips to an 8 in impulse sealer with magnets, for sealing bags at a consistent position *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Toadstool Tote and Rain Bucket Hat (Make: Maker Camp)](https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat): A beginner project fusing plastic shopping bags into sheet with an iron and parchment, then sewing it into a tote and hat *(licence: link only (licence not stated on the page))*
  - [aeroMorph: Heat-sealing Inflatable Shape-change Materials for Interaction Design (Ou et al., UIST 2016; author-hosted PDF)](https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf): Paper with three fabrication methods (hand sealer with copper-tape masks, heat press with stencil, CNC ball-tip sealer) and sealing parameters for TPU-coated materials *(licence: link only (ACM copyright))*
- **diagram_idea**: A cross-section of two plastic films (or two TPU-coated fabric layers, coating facing coating) clamped between a hot bar above and a rubber pad below with a parchment release sheet, showing the melted zone joining the layers, then a second panel of the jaws still closed while the seam cools, and a top view of a pouch where a copper-tape strip has kept an air channel unsealed.
- **sources**: 
  - https://en.wikipedia.org/wiki/Heat_sealer
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://en.wikipedia.org/wiki/Radio-frequency_welding
  - https://en.wikipedia.org/wiki/Polyvinyl_chloride
  - https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics
  - https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf
  - https://www.media.mit.edu/projects/aeromorph/overview/
  - https://dspace.mit.edu/handle/1721.1/107946
  - https://spectrum.ieee.org/printable-inflatable-pouch-motors-will-make-building-robots-as-easy-as-using-stickers
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML
  - https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/
  - https://hackaday.com/2019/04/02/custom-inflatables-are-only-a-laser-beam-away/
  - https://hackaday.com/2018/08/05/spot-welding-plastic/
  - https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat
  - https://uspackagingandwrapping.com/blog/impulse-sealer-heat-settings.html
  - https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics
  - https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg
  - https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg
  - https://commons.wikimedia.org/wiki/File:Heat_seal_film.jpg
  - https://api.printables.com/graphql/ (models 732684, 11188)

### Finder tags

- **connects**: strap, cord or fabric
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, power tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, materials

## 404 Soldered metal joint (soft soldering of metal parts, sweat-soldered copper pipe)

*welding, brazing & soldering.* Metal parts are joined by melting a low-melting tin alloy (solder) into a tight gap with a soldering iron or a small gas torch, as in copper water pipes, tin toys, stained glass and brass models

*Also covers:* Also covers which metals solder easily, fluxes, copper-pipe capillary fittings (end-feed and solder-ring), lead-free solder for drinking water, and low-melting solders. Wire joints are Soldered wire joint. Safety: flux fumes can cause asthma, lead, and torch fires.

### What it is

- **plain_name**: Joining metal parts by melting a soft, low-melting metal (solder) into a tight gap between them with a soldering iron or a small gas torch, so that it flows in, cools and holds the parts together while sealing the gap, as on copper water pipes, stained glass and tinplate
- **term**: Soldered metal joint (soft soldering; sweat-soldered capillary joint in copper pipe)
- **aliases**: 
  - soft soldering, soft solder, tin-lead or lead-free solder, plumber's solder (Wikipedia 'Solder')
  - sweating, sweat joint, sweated joint: US plumbing names for soldering pipe joints; outside the US 'sweating' means tinning two flat surfaces with solder and then reheating them together (Wikipedia 'Soldering')
  - capillary joint, capillary fitting, solder fitting, solder-joint pressure fitting (ASME B16.18 cast, B16.22 wrought) (Wikipedia 'Soldering'; CDA Copper Tube Handbook)
  - end-feed fitting (no solder inside, solder fed in from the end) and solder-ring fitting, also called a Yorkshire fitting (a ring of solder already inside the fitting) (Wikipedia 'Soldering')
  - wiped joint: an old plumbing joint where pasty solder is wiped and moulded round the pipe joint (Wikipedia 'Solder')
  - tinning (coating a surface with solder first) (Wikipedia 'Flux (metallurgy)'; NBS Circular 492)
  - soldering copper (a heavy copper-headed iron heated in a flame, used on sheet metal) (Wikipedia 'Soldering')
  - electric pipe-soldering tool or resistance soldering tongs, e.g. Antex Pipemaster (brand) (Wikipedia 'Soldering'; CDA Copper Tube Handbook)
  - low-melt solder (e.g. 70 °C solder for white-metal model kits); fusible alloys such as Wood's metal, Field's metal and Rose metal (Wikipedia 'Fusible alloy'; GardenRails forum)
  - came glasswork and the copper-foil (Tiffany) method in stained glass (Wikipedia 'Came glasswork')
  - not the same as silver soldering or hard soldering, which are kinds of brazing (see Brazed joint)
- **family**: welding, brazing & soldering
- **other_families**: seals & pass-throughs, electrical connections
- **one_liner**: Soft soldering joins metal parts by heating them until a tin-based alloy that melts below about 450 °C flows into the narrow gap between them and wets both surfaces, giving a watertight, gas-tight and electrically conductive joint that is good for copper pipes and sheet metal but too weak to carry real mechanical loads on its own.
- **complexity**: Single piece once made: the two metal parts plus a thin film of solder between them. Making it needs a few things: a heat source (soldering iron or gun, soldering copper, gas torch, or electric pipe-soldering tongs), solder (wire, bar or the ring inside a solder-ring fitting), flux, abrasive cloth or wire brushes for cleaning, and something heat-proof to work on. Copper pipe joints also use a capillary fitting (coupler, elbow, tee, reducer or end cap) (Wikipedia 'Soldering'; CDA Copper Tube Handbook).
- **how_it_works**: The parts are cleaned to bare metal, coated with flux and heated until they are hot enough to melt the solder; the molten solder then 'wets' the surfaces, forming a thin alloy layer with them, and is pulled into the narrow gap by capillary action, the same effect that draws water up a thin tube (Wikipedia 'Soldering'). The flux dissolves oxide, stops the hot metal oxidising again and helps the solder spread (CDA Copper Tube Handbook). Because the parts themselves never melt, the joint can be made with a small iron or torch, but the solder is much weaker than the metal, so the strength comes from a large overlap area: lap and sleeve joints are several times stronger than butt joints (NBS Circular 492). In a copper pipe joint the pipe slides into a fitting cup with a gap of about 0.1 mm, the fitting is heated, and solder touched to the edge of the gap is sucked all the way round and in (CDA Copper Tube Handbook).

### Finder attributes

- **job**: 
  - join and hold: light-duty permanent joints in copper, brass, tinplate, lead came and similar metals
  - seal it, or pass cables or fluid through: watertight and gas-tight joints in copper water and heating pipes, tanks, cans, gutters and roof flashing (Wikipedia 'Soldering')
  - glue or bond: it works like a metal 'glue' that bonds to both surfaces, and also conducts electricity
- **motion**: none
- **degrees_of_freedom**: 0: the parts are fixed together once the solder sets.
- **special_behaviour**: 
  - none: it is a plain permanent joint. It can be undone on purpose by reheating it, and very low-melting solders are used as heat-triggered weak links in fusible plugs and sprinklers (Wikipedia 'Fusible alloy'; see Burn-wire and fusible-link release)
- **holding_principle**: material bond (glue, solvent or melting): the molten solder wets and alloys with the surface of each part and sets as a metal bond (Wikipedia 'Soldering'); for strength it is often combined with shape, e.g. a folded seam, a sleeve or a bolt (NBS Circular 492)
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a soldering iron (mains or battery) or a gas torch
- **removability**: semi-permanent (can be undone but may damage parts): reheat until the solder melts and pull the parts apart; copper pipe joints are described as 'reasonably permanent but reversible' (Wikipedia 'Soldering'), but reheating a pipe joint near others can loosen them too
- **reuse_cycles**: a few times: a joint can be melted apart, cleaned and re-soldered, but repeated heating oxidises and erodes the parts
- **tools_needed**: Soldering iron or soldering gun for small parts, sheet metal, stained glass and models (a 25 W iron is too small for large connectors, roof flashing or heavy lead came, Wikipedia 'Soldering'); a propane or propylene ('MAPP') torch, or an electric pipe-soldering tool for 8-22 mm pipe, for copper pipe (Wikipedia 'Soldering'; CDA); tube cutter, deburring tool or file, abrasive cloth or pads and fitting brushes (CDA); flux and a small brush (never apply flux with fingers, CDA); solder; a heat-proof mat or shield behind pipe work; damp cloth or heat-sink paste to protect nearby parts (Wikipedia 'Soldering'); a dry rag to wipe the joint; safety glasses, fume extraction or good ventilation, and a fire extinguisher for torch work.
- **seal**: airtight or pressure: a good solder joint is 'electrically conductive, water- and gas-tight' (Wikipedia 'Soldering'); copper water and heating pipes are sealed this way, with rated working pressures given in the Copper Tube Handbook (CDA, Table 14.4a)
- **load**: Light to medium. Soft solder itself 'does not make a strong joint and is unsuitable for mechanical load-bearing applications' (Wikipedia 'Soldering'). Joint shape decides the strength: a butt joint only carries the tensile strength of the solder, while lap, scarf and sleeve joints carry several times that, and a well-made soldered sleeve joint in copper tube can hold until the tube itself fails (NBS Circular 492). It is weakest when peeled or bent and under long-term load at raised temperature, where solder creeps; joints in copper tube 'should not be considered dependable' above about 121 °C with tin-antimony solder (NBS Circular 492). In lap-shear tests on 1 mm steel, copper and brass sheet, lead-free solders gave about the same joint strength as lead solders (Brožek 2013).
- **adjustable**: no: the parts are fixed once the solder sets; they can only be repositioned by reheating the joint
- **play_and_precision**: No play. Because the parts don't melt and the heat is low, there is little distortion compared with brazing or welding, so close-fitting parts keep their shape. Parts must be held still until the solder has fully set: non-eutectic solders pass through a pasty stage, and movement then cracks the joint (Wikipedia 'Soldering', 'Solder'). Capillary joints need a gap of about 0.1-0.15 mm all round (CDA), so the tube must be supported centred in its fitting.
- **access_needed**: one side only (blind) for many sheet-metal lap seams and stained-glass joints, where the iron and solder are applied from one face; pipe joints need access all round the joint to heat it evenly and feed solder round the whole gap (CDA Copper Tube Handbook)
- **materials**: Easy: copper, zinc, brass, silver and gold; next easiest: iron, mild steel and nickel; difficult because of tough oxide films: stainless steel and some aluminium alloys; titanium, magnesium, cast iron, some high-carbon steels, ceramics and graphite only after plating with a metal that solder wets (Wikipedia 'Soldering'). Galvanised (zinc-coated) steel solders with a zinc/ammonium chloride flux, which must be cleaned off quickly because it attacks zinc (NBS Circular 492), and antimony-bearing solders should be avoided on zinc or galvanised metal because the joint goes brittle (Wikipedia 'Solder'). Stainless steel needs a very aggressive acid flux (NBS Circular 492). Aluminium needs special zinc or tin-zinc solders and fluxes (Wikipedia 'Soldering'; NBS Circular 492). Also used on tinplate, lead came, copper foil on glass and white-metal (low-melting) castings. It cannot join plastics or bare glass, and won't stick to painted, oily or plated-over surfaces until they are cleaned.
- **maker_difficulty**: moderate: the tools are cheap and small parts are easy with an iron, but every joint needs clean metal, the right flux and enough heat, and copper pipe joints take practice ('Skill and knowledge are required to produce a satisfactorily soldered joint', CDA Copper Tube Handbook)

### Making it

- **processes**: 
  - sheet metal: tinplate, brass and copper sheet, gutters, flashing, boxes and models
  - off-the-shelf part: copper pipe and capillary fittings (end-feed and solder-ring), solder, flux and soldering irons or torches
  - woodwork: not for the joint itself, but stained-glass panels are assembled on a wooden board with stops (Wikipedia 'Came glasswork' lists a plywood board among the materials)
- **print_in_place**: no: soldering joins metal; 3D printing can only make jigs and holders
- **making_tips_3d_printing**: not applicable to the joint itself (plastic parts are joined by Melted plastic weld or heat-set inserts instead). Printing helps around it: printed angle jigs hold stained-glass pieces at set angles while they are soldered with an iron (Printables 838700 and the parametric version 1024732; the designers tested them in PLA at 10% infill, printed on their side), a printed 'third hand' holds small parts (Printables 900904), and a printed gauge checks copper pipe outside diameters before buying fittings (Printables 325583). Keep printed jigs away from torch flames and hot copper: PLA deforms at temperatures as low as a hot car (Prusa blog), far below solder melting points (183-220 °C for common solders, Wikipedia 'Soldering'), so use metal clips, fire brick or a heat mat near torch work.
- **off_the_shelf_parts**: Search terms: 'lead-free plumbing solder' (e.g. tin-copper or tin-silver; in the US ASTM B32 alloys E and HB or 95-5 tin-antimony, CDA), 'solder wire 60/40' or '63/37' (not for drinking water), 'plumbing flux paste' (water-soluble, to ASTM B813 in the US, CDA), 'rosin flux' or 'flux-cored solder' (electronics; see Soldered wire joint), 'killed spirits' or 'zinc chloride flux' (for steel, galvanised and sheet metal) ⚑ [uncertain: trade names not on an opened page], 'stainless steel soldering flux', 'aluminium solder', 'low melt solder 70 °C' (white-metal kits), 'end feed fitting', 'solder ring fitting' or 'Yorkshire fitting', 'copper coupler', 'elbow', 'tee', 'reducer' and 'end cap' (15 mm, 22 mm or 1/2 in, 3/4 in), 'tube cutter', 'deburring tool', 'fitting brush', 'abrasive pads', 'propane torch' or 'MAPP / propylene torch', 'electric pipe soldering tool', 'soldering heat mat' or 'heat shield', 'heat-sink paste', 'soldering iron 80-100 W' for stained glass, 'copper foil tape' and 'lead came'. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Gap: the capillary space between a copper tube and its fitting is about 0.004 in (0.1 mm), and capillary action works best between 0.004 and 0.006 in (0.10-0.15 mm); too much clearance 'can lead to solder metal cracking under conditions of stress or vibration' (CDA Copper Tube Handbook pp. 37-40, https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf). In older NBS tests, sleeve-joint strength fell as the solder film got thicker than about 0.002 in (0.05 mm) (NBS Circular 492, https://archive.org/details/circularofbureau492mebs).
  - Shape the joint for strength: butt joints only hold as much as the solder's own tensile strength, lap and scarf joints several times more; where the solder is mainly a seal or an electrical joint, get the mechanical strength first 'by bolting, interlocking, twisting together of wires, or by other suitable joining methods' (NBS Circular 492, https://archive.org/details/circularofbureau492mebs).
  - Temperature limit: lead-tin joints 'should not be used at temperatures higher than about 350 °F (177 °C)', and less under prolonged loading (NBS Circular 492); for continuous service above 250 °F (121 °C), or where the highest strength is needed, braze instead (CDA Copper Tube Handbook p. 33-34, https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf).
  - Melting points: 63/37 tin-lead melts at 183 °C (eutectic, no pasty stage), 60/40 at 183-190 °C, 50/50 at 183-215 °C; common lead-free solders melt around 220 °C and are harder to use (Wikipedia, https://en.wikipedia.org/wiki/Soldering). Soldering is defined as using a filler that melts below 840 °F (450 °C); in practice most soldering is done at about 350-600 °F (177-316 °C) (CDA Copper Tube Handbook p. 35).
  - Drinking water must use lead-free solder and approved flux: in the US solders with more than 0.2% lead have been banned for potable water since the 1986 Safe Drinking Water Act amendment (CDA p. 34; Wikipedia 'Solder' dates the US ban to 1974, the year of the original Act, so the sources differ); in the UK the Water Supply (Water Fittings) Regulations 1999 prohibit lead solder on pipes supplying water for 'cooking, drinking and bathing' (APHC, https://aphc.co.uk/news/safe-pipework-lead-and-the-law/).
  - Copper pipe sequence: measure and cut square, ream the burr, clean to bright metal, flux thinly 'as soon as possible after cleaning', assemble and support, heat the tube then the fitting cup, feed solder opposite the flame, cool naturally (shock-cooling with water may stress the joint), wipe off flux and test (CDA Copper Tube Handbook pp. 35-40). Flux needed is about 2 ounces per pound of solder (CDA p. 40).
  - Heat the fitting, not the solder: solder flows towards the heat, and if the copper starts to discolour it is overheating and the solder will stop flowing (Wikipedia, https://en.wikipedia.org/wiki/Soldering). Don't point the flame into the face of the fitting cup or you burn the flux (CDA p. 39).
  - Pipe repairs: the pipe must be dry, and 'Any pressure which is formed by heating of the tubing must have an outlet' (Wikipedia 'Soldering'); open valves part-way before heating them and heat mainly the tube (CDA p. 40).
  - Iron size: a 25 W iron won't heat large connectors, copper roof flashing or big lead came, while 100 W may be too much for circuit boards; temperature-controlled irons hold their temperature better (Wikipedia 'Soldering'). Don't run the iron hotter than needed: solder fume levels 'can triple between 250-400 °C' (HSE INDG249, https://www.hse.gov.uk/pubns/indg249.pdf).
  - White-metal model kits: use low-melt solder (about 70 °C) with a temperature-controlled iron set to about 150-170 °C, and a higher-melting 100 °C solder for the main build before adding details (GardenRails forum, https://www.gardenrails.org/viewtopic.php?p=138605). Bismuth-containing solders can form a phase that melts at only 95 °C with lead and tin, so joints can come apart or crack (Wikipedia, https://en.wikipedia.org/wiki/Solder).

### When to use it

- **everyday_examples**: 
  - copper water and central-heating pipes with soldered elbows and tees (Wikipedia 'Soldering'; Commons photo Fitting1537.JPG)
  - stained-glass windows and Tiffany-style lamps, where lead came or copper foil is soldered at every joint (Wikipedia 'Came glasswork')
  - sheet-metal objects such as food cans, roof flashing, rain gutters and car radiators (Wikipedia 'Soldering')
  - brass musical instruments, whose bodies are often soldered, and brass, nickel-silver or white-metal model locomotive kits (Wikipedia 'Soldering'; GardenRails forum)
- **when_to_use**: For permanent, sealed joints in copper and brass pipe and tube (water and heating pipes, model steam pipework, small tanks), for sheet-metal boxes, trays, gutters and repairs in tinplate, copper, brass and zinc, for stained glass, and for building brass and white-metal models, where the low heat avoids warping thin parts or melting nearby details. It is cheap, needs only an iron or small torch, and conducts electricity as well as sealing. Soldered pipe joints are quicker and cheaper than compression or flare fittings when many joints are needed, and last a long time if the flux is cleaned off (Wikipedia 'Piping and plumbing fitting').
- **when_not_to_use**: For load-bearing or structural joints (brackets, frames, shafts, hooks): soft solder is 'unsuitable for mechanical load-bearing applications' (Wikipedia 'Soldering'); use brazing, welding, bolts or rivets, or add a folded seam or screws and let the solder only seal (NBS Circular 492). For parts running above about 120 °C or carrying steam: braze instead (CDA). For wet pipes that can't be drained, or places where a flame is dangerous: use push-fit, press or compression fittings or flared joints (CDA). For hidden joints in walls that later need to come apart: use unions or accessible mechanical fittings. For stainless steel or aluminium, soldering is possible only with special fluxes and solders, so riveting, brazing or welding is often easier. For plastics use plastic welding; for wires see Soldered wire joint. Never use lead solder on drinking-water pipes.
- **environment_limits**: Heat: lead-tin solder weakens and creeps as it gets hot and should not be used above about 177 °C, less under constant load (NBS Circular 492); copper systems running continuously above 121 °C should be brazed (CDA). Vibration: a loose-fitting joint with a thick solder layer can crack under stress or vibration (CDA). Corrosion: flux residue left inside or outside a joint keeps corroding and can eat right through the tube wall (CDA); soldered aluminium joints suffer 'rapid galvanic corrosion' in moist or marine air unless protected, e.g. by a moisture-proof lacquer or paint over the joint (NBS Circular 492). Cold: tin on its own can suffer 'tin pest' at low temperatures; lead and antimony in the solder prevent it (Wikipedia 'Solder'). Low-melt bismuth solders can fail at only about 95 °C if they mix with lead-tin solder (Wikipedia 'Solder').
- **safety_notes**: FLUX FUMES: rosin-based flux fume 'is a top cause of occupational asthma'; use fume extraction, keep your head out of the plume, don't overheat the iron, and consider rosin-free fluxes (HSE solderer page; HSE INDG248, INDG249). Acid plumbing and sheet-metal fluxes contain hydrochloric acid, zinc chloride or ammonium chloride, which are harmful: use gloves, goggles and ventilation (Wikipedia 'Flux (metallurgy)'), and 'Do not apply with fingers' because flux carried to the eyes, mouth or cuts can harm you (CDA). Molten flux sticks to skin and can burn worse than a drop of solder (Wikipedia 'Flux (metallurgy)'). LEAD: lead solder and lead came are poisonous if swallowed; never eat, drink or smoke while working, wash your hands with soap and water afterwards (alcohol hand sanitiser does not remove lead), and keep children away; stained-glass work also exposes you to acid-flux fumes (Illinois Department of Public Health 'Lead Safety for Hobbyists'). Use lead-free solder wherever children may touch the work, outdoors, and always on drinking-water pipes, where lead solder is illegal (Wikipedia 'Soldering'; APHC; WaterSafe). Avoid cadmium-bearing solders: heating cadmium gives cadmium oxide fume, which damages lungs and kidneys (HSE EIS31). TORCH FIRES AND BURNS: an open flame in a building is a fire hazard (Wikipedia 'Piping and plumbing fitting'); put a heat mat behind pipes, don't heat pipes touching timber or other combustibles close enough to ignite them by conduction, keep an extinguisher ready, and keep a fire watch for at least half an hour afterwards to catch smouldering fires (OSHA 29 CFR 1910.252, the US hot-work rule for welding, cutting and brazing). Never heat a closed pipe or vessel: trapped water turns to steam and must have an outlet (Wikipedia 'Soldering'). Soldering irons reach several hundred degrees: use a stand and unplug it when finished.
- **common_failures**: (1) Dirty or oxidised metal: solder balls up and won't flow; clean to bright metal and flux straight away (CDA; Wikipedia 'Soldering'). (2) Overheating: burnt flux, discoloured copper, and solder that won't enter the joint (CDA; Wikipedia 'Soldering'). (3) Too little heat: a cold, grainy joint sitting on the surface (Soldered wire joint entry covers cold joints). (4) Voids where flux was trapped because the flame was in the wrong place, so the solder sealed the mouth of the cup first; aim the flame at the back of the fitting cup and feed solder opposite it (Wikipedia 'Soldering'). (5) Water in the pipe stops it getting hot enough (Wikipedia 'Soldering'; CDA). (6) The parts moved while the solder was pasty, cracking the joint (Wikipedia 'Solder'). (7) Loose fit or excess solder film: weaker joint that cracks under vibration (CDA; NBS Circular 492). (8) Flux corrosion pinholes from too much aggressive flux left in the pipe; use only a thin coat and flush the system (CDA). (9) Burrs left inside a cut tube causing erosion-corrosion from turbulent flow; ream every cut end (CDA). (10) Brittle joints from antimony solder on galvanised metal, or bismuth solder mixed with lead-tin (Wikipedia 'Solder'). (11) A soft-soldered part asked to carry load creeps or peels apart over time; redesign as a lap, folded or bolted joint, or braze it (NBS Circular 492).
- **related**: 
  - Brazed joint (brazing, silver soldering, hard soldering): the same capillary idea with a filler that melts above 450 °C at red heat; much stronger and good to higher temperatures, but needs a hotter torch
  - Welded metal joint (fusion welding): melts the parts themselves; strongest, but much more heat, distortion and equipment
  - Soldered wire joint (soldered splice): the same soft soldering used for electrical wires and components
  - Solder sleeve (solder-seal splice): a heat-shrink tube with a solder ring for wires
  - Compression fitting and Push-to-connect fitting: flame-free mechanical ways to join copper pipe, easy to undo; preferred for wet pipes or where a torch is unsafe
  - Flare fitting: flame-free, metal-to-metal copper tube joint, sometimes required where torches are not allowed (CDA)
  - Parallel pipe thread with a sealing washer (pipe union, dielectric union): screwed joints often found on the other end of a soldered fitting
  - Burn-wire and fusible-link release: uses a deliberately weak low-melting solder joint as a heat-triggered release
  - Two-part epoxy and Epoxy putty: cold-bonding alternatives for metal repairs that can't be heated, but not for drinking-water pressure pipes
  - Blind rivet and Clinching: cold mechanical joints for sheet metal that carry more load than solder

### Pictures, videos and models

- **links**: 
  - [Propane torch soldering copper pipe.jpg (Wikimedia Commons, by neffk)](https://commons.wikimedia.org/wiki/File:Propane_torch_soldering_copper_pipe.jpg): A propane torch being used to solder copper pipes for a residential water main *(licence: CC BY 2.0 (reuse with credit))*
  - [Fitting1537.JPG (Wikimedia Commons, by Borsi112)](https://commons.wikimedia.org/wiki/File:Fitting1537.JPG): Soft-soldered plumbing fittings on copper pipework, with the solder line visible at each joint *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Kupferfittings 4062.jpg (Wikimedia Commons, by Torsten Bätge)](https://commons.wikimedia.org/wiki/File:Kupferfittings_4062.jpg): A set of copper capillary solder fittings: 45° elbow, tee, coupler, end cap, 90° elbow and reducer *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Lötbrenner in der Anwendung.jpg (Wikimedia Commons, by Quicksilver86)](https://commons.wikimedia.org/wiki/File:L%C3%B6tbrenner_in_der_Anwendung.jpg): A soldering torch in normal use on a copper pipe joint *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Fluxing & Soldering Techniques (Copper Development Association, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=RwKdMkkkhqo): Video showing how to flux, heat and solder a copper tube joint; the companion 'Soldering Preparation' video is https://www.youtube.com/watch?v=Js7EmUmN8cg *(licence: link only)*
- **make_it_yourself**: 
  - [Stained glass angle soldering jigs (Printables 838700; URL from Printables API, page not opened)](https://www.printables.com/model/838700-stained-glass-angle-soldering-jigs): Printed jigs (160° to 90°) with connecting rods that hold stained-glass pieces at a set angle while they are soldered; tested in PLA at 10% infill *(licence: Public domain (Creative Commons Public Domain))*
  - [Parameterized stained glass angle soldering jig (Printables 1024732; URL from Printables API, page not opened)](https://www.printables.com/model/1024732-parameterized-stained-glass-angle-soldering-jig): A parametric Fusion version of the angle jigs for roughly 40° to 155° *(licence: Public domain (Creative Commons Public Domain))*
  - [Fully Printable Soldering Third Hand Clamp (Printables 900904; URL from Printables API, page not opened)](https://www.printables.com/model/900904-fully-printable-soldering-third-hand-clamp): A printed ball-and-socket arm with a print-open clip for holding small parts while soldering with an iron (not for torch work) *(licence: CC BY (Creative Commons Attribution))*
  - [UFS-105 Copper Pipe Diameter Gage, External Measurement (Printables 325583; URL from Printables API, page not opened)](https://www.printables.com/model/325583-ufs-105-copper-pipe-diameter-gage-external-measure): A printed template of semicircles matching the outside diameters of imperial copper pipe, to check pipe size before buying solder fittings *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: A cut-away of a copper pipe pushed into a fitting cup with the 0.1 mm gap exaggerated, the torch flame on the back of the cup and arrows showing molten solder being drawn into the gap all the way round, beside two small sketches comparing a weak butt joint with a strong lap or sleeve joint.
- **sources**: 
  - https://en.wikipedia.org/wiki/Soldering
  - https://en.wikipedia.org/wiki/Solder
  - https://en.wikipedia.org/wiki/Flux_(metallurgy)
  - https://en.wikipedia.org/wiki/Came_glasswork
  - https://en.wikipedia.org/wiki/Fusible_alloy
  - https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting
  - https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf
  - https://archive.org/details/circularofbureau492mebs
  - https://archive.org/download/circularofbureau492mebs/circularofbureau492mebs_djvu.txt
  - https://www.hse.gov.uk/asthma/solderers.htm
  - https://www.hse.gov.uk/pubns/indg248.pdf
  - https://www.hse.gov.uk/pubns/indg249.pdf
  - https://www.hse.gov.uk/pubns/eis31.pdf
  - https://aphc.co.uk/news/safe-pipework-lead-and-the-law/
  - https://www.watersafe.org.uk/news/latest_news/watersafe_warning_af/
  - https://dph.Illinois.gov/content/dam/soi/en/web/idph/files/publications/lead-safety-hobbyists-041516.pdf
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252
  - https://acta.mendelu.cz/artkey/acu-201306-0006_soldering-sheets-using-soft-solders.php
  - https://www.gardenrails.org/viewtopic.php?p=138605
  - https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  - https://www.youtube.com/watch?v=RwKdMkkkhqo
  - https://www.youtube.com/watch?v=Js7EmUmN8cg
  - https://commons.wikimedia.org/wiki/File:Propane_torch_soldering_copper_pipe.jpg
  - https://commons.wikimedia.org/wiki/File:Fitting1537.JPG
  - https://commons.wikimedia.org/wiki/File:Kupferfittings_4062.jpg
  - https://commons.wikimedia.org/wiki/File:L%C3%B6tbrenner_in_der_Anwendung.jpg
  - https://commons.wikimedia.org/wiki/Category:Solder_fittings
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: wires, hoses or pipes
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **electrical_band**: not applicable ⚑ *needs confirming (best guess): tagged electrical, but `load` does not start with the fixed electrical lead-in*
- **tools**: soldering iron, welding or brazing torch, hand tools
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** off_the_shelf_parts

## 405 Brazed joint (brazing, silver soldering, hard soldering)

*welding, brazing & soldering.* Metal parts are heated red-hot with a torch and a brass or silver alloy is melted into a close-fitting gap, giving a strong, leak-proof joint without melting the parts themselves

*Also covers:* Also covers the gap for capillary flow, silver-solder grades, braze welding, flux-free copper brazing rods, and zinc 'aluminium welding' rods (really a solder). Safety: cadmium-bearing fillers give toxic fumes; fire.

### What it is

- **plain_name**: Joining metal parts by heating them red-hot with a torch and melting a brass or silver alloy into the close-fitting gap between them, so that it is sucked in, sets and makes a strong, leak-proof joint without melting the parts themselves
- **term**: Brazed joint (brazing; silver brazing, also called silver soldering or hard soldering; braze welding)
- **aliases**: 
  - brazing, braze, brazed joint (Wikipedia 'Brazing')
  - silver brazing = hard soldering = silver soldering; the Copper Development Association calls 'hard solders' and 'silver solders' 'confusing terms' that 'should be avoided' (Wikipedia 'Brazing'; CDA Copper Tube Handbook p. 42)
  - torch brazing, induction brazing, furnace brazing, dip brazing, resistance brazing, vacuum brazing (Wikipedia 'Brazing')
  - braze welding = fillet brazing: a bronze or brass rod builds a fillet bead with no capillary action (Wikipedia 'Brazing'; Wikimedia Commons file description)
  - spelter: an old trade name for brass brazing alloys (NBS Circular 492)
  - BCuP (copper-phosphorus and silver-copper-phosphorus) alloys, self-fluxing on copper; Sil-Fos (brand) (CDA Copper Tube Handbook; Lucas-Milhaupt)
  - BAg silver brazing alloys, e.g. BAg-7 (a cadmium-free substitute for BAg-1); Easy-Flo (brand), Silver-flo (brand) (CDA Table 14.12; Lucas-Milhaupt; Model Engineer forum)
  - easy, medium and hard (and extra-easy, extra-hard) silver solder: jewellers' grades named by melting temperature, not by strength (Wikipedia 'Soldering')
  - 'aluminium welding rods', 'aluminium brazing rods' or 'low-temperature aluminium repair rods', e.g. Durafix, HTS-2000, Alumaloy (brands): zinc-aluminium alloys melting at about 388 °C, so really a solder and 'not properly a weld' (Wikipedia 'Soldering'; Practical Sailor; Welding Tips and Tricks)
  - 'cast iron welding': usually a brazing operation with a nickel-rich filler rod (Wikipedia 'Brazing')
  - pin brazing (silver brazing pins for cable lugs on rails) (Wikipedia 'Brazing')
- **family**: welding, brazing & soldering
- **other_families**: seals & pass-throughs
- **one_liner**: Brazing heats close-fitting metal parts above about 450 °C, usually to a dull red heat, so that a brass, copper-phosphorus or silver alloy melts, wets both surfaces and is drawn by capillary action into the gap, giving a strong, leak-tight joint that also joins different metals, while the parts themselves never melt.
- **complexity**: Single piece once made: the parts plus a thin layer (or, in braze welding, a fillet) of filler metal. Making it needs a small set of equipment: a torch (an air-fuel propane or propylene torch for small work, an oxy-fuel torch for larger parts, CDA), filler metal as rod, wire, strip or paste, a flux to match it, fire bricks to build a small hearth, abrasive cloth or a wire brush, tongs or pliers, and hot water or a brush to remove flux afterwards.
- **how_it_works**: Brazing works like soldering but hotter: the filler melts above 450 °C, the parts are heated until they themselves melt the filler, and the molten alloy wets the clean surfaces and is drawn into the narrow gap between close-fitting parts by capillary action, then sets as it cools (Wikipedia 'Brazing'; HSE EIS31). Flux (traditionally borax) dissolves oxide, keeps air off the hot metal and turns clear and liquid when the joint is nearly hot enough, so it doubles as a temperature indicator (Wikipedia 'Flux (metallurgy)'; CDA). Because the parts never melt, brazing can join different metals, causes less distortion than welding and leaves a neat joint (Wikipedia 'Brazing'). The strength comes from a thin, even film over a large overlap: a lap at least three times as long as the thinner part is thick can be as strong as the parts (CDA, quoting AWS). In braze welding a bronze or brass rod is melted on to build up a fillet over the joint instead, without capillary flow (Wikipedia 'Brazing').

### Finder attributes

- **job**: 
  - join and hold: strong permanent joints in steel, copper, brass and other metals, including joints between different metals (e.g. carbide tips to steel)
  - seal it, or pass cables or fluid through: leak-tight joints in copper refrigeration, air-conditioning and plumbing pipe, and in tanks and fittings
- **motion**: none
- **degrees_of_freedom**: 0: the parts become one rigid piece.
- **special_behaviour**: 
  - none: a plain permanent joint. (Jewellers use the different melting grades on purpose, making the first joints with hard silver solder and later ones with easier, lower-melting grades so earlier joints don't come apart, Wikipedia 'Soldering')
- **holding_principle**: material bond (glue, solvent or melting): the molten filler wets and alloys with the surfaces of the parts (Wikipedia 'Brazing')
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a gas torch (or an induction heater or furnace)
- **removability**: permanent: in practice it can only be undone by reheating the whole joint to red heat or by cutting; reheating softens and oxidises the parts
- **reuse_cycles**: once
- **tools_needed**: A torch: propane or propylene (sold as 'MAPP') air-fuel torches handle small silver-soldered parts, while larger work, brass rods and braze welding need more heat, usually oxy-acetylene or oxy-propane (CDA; Wikipedia 'Brazing'; Practical Sailor); fire bricks to build a hearth that reflects heat back onto the job (Model Engineer forum); filler rod or wire and the matching brazing flux; abrasive cloth, wire brush or file to clean; clamps, steel wire or a jig to hold parts still; pliers or tongs; a pot of hot water or a brush to remove flux; safety glasses or shaded goggles, leather gloves, a fire extinguisher, and fume extraction (Wikipedia 'Soldering'; HSE EIS31).
- **seal**: airtight or pressure: brazed joints 'are normally leakproof' (HSE EIS31), and brazing is 'preferred, and often required' for refrigeration and air-conditioning pipes (CDA); a continuous fillet all round the joint shows that it is filled (CDA)
- **load**: Heavy for its size. Brazed joints 'will withstand vibration, tensile and torsional loading' (HSE EIS31), and when the overlap is at least three times the thickness of the thinner part with a good fillet, the joint 'will meet or exceed' the strength of the tube and fitting (CDA, quoting the American Welding Society). The joint is usually less strong than the base metal but stronger than the filler alone (Wikipedia 'Brazing'), and weaker than a weld. Butt joints have 'limited tensile strength'; lap joints turn the load into shear and are much stronger (Lucas-Milhaupt). In a filler-metal maker's own test the strongest stainless-steel butt joint with a silver filler reached 135,000 psi (930.8 MPa) at a 0.0015 in (0.038 mm) gap (Lucas-Milhaupt). Braze welding cannot withstand high stresses or high temperatures as well as fusion welding (Wikipedia 'Brazing').
- **adjustable**: no: once the filler sets, the position is fixed
- **play_and_precision**: No play. Distortion is lower than welding because the parts are not melted and are heated more evenly, so close tolerances can be held (Wikipedia 'Brazing'). But the whole joint area goes to red heat, which softens (anneals) copper and other work-hardened metal near the joint (CDA), and parts must be clamped so they stay in line and keep an even gap while the filler sets (CDA; Practical Sailor). The gap must be small and even: typically 0.03-0.08 mm (Wikipedia 'Brazing'), 'typically just a slip fit' (Lucas-Milhaupt).
- **access_needed**: one side only (blind) for feeding the filler, which is drawn through the joint towards the heat, but you need to heat the joint evenly all round, so the torch must reach all sides of a tube or fitting (CDA)
- **materials**: Joins the same or different metals: steel and cast iron (brass filler, braze welding, nickel rods for cast iron), stainless steel, copper, brass, bronze and nickel alloys (silver fillers), copper to copper (copper-phosphorus fillers), silver and gold (jewellery), and carbide, ceramic or cermet tips to steel tools (Wikipedia 'Brazing'). Fillers: brass (Cu-Zn) for steel and cast iron but not for copper, cupronickel or stainless where its corrosion resistance is inadequate; Cu-P for copper and its alloys only, because phosphorus forms brittle phosphides with iron and nickel; Ag-Cu-Zn silver alloys for most metals and dissimilar pairs; Al-Si for aluminium (Wikipedia 'Brazing'; CDA). Aluminium is hard to braze with a torch; the zinc-aluminium 'aluminium welding' rods are really a solder (Wikipedia 'Soldering'). Silver brazing can cause stress cracking in copper-nickel (Wikipedia 'Brazing'). Not for plastics, painted, galvanised or plated metal until cleaned back.
- **maker_difficulty**: moderate: small silver-soldered joints in copper, brass and steel are possible at home with a propane torch and a hearth of fire bricks, but getting enough heat is the usual problem ('Copper EATS heat like nothing else', Model Engineer forum); large parts, brass rods and braze welding need oxy-fuel equipment and practice

### Making it

- **processes**: 
  - sheet metal: steel, copper and brass sheet and tube fabrication, bicycle frames, model steam boilers and jewellery
  - CNC: machine parts to a close slip fit (about 0.025-0.127 mm clearance, Lucas-Milhaupt) so the filler can be drawn in
  - off-the-shelf part: copper solder or braze fittings for pipe, bicycle frame lugs, brazing alloys and fluxes; or have a shop braze it
- **print_in_place**: no: brazing joins metal at red heat; 3D-printed parts can't be anywhere near it
- **making_tips_3d_printing**: not applicable: plastic parts melt or burn long before brazing temperature (fillers melt above 450 °C, HSE EIS31), so jigs and supports must be steel wire, steel clamps or fire brick. Printed items are only useful away from the heat, e.g. a colour-coded case for keeping different filler rods apart (Printables 1854379) or a stand that stops a propane canister tipping over (Printables 12436). Plastic parts are joined by Melted plastic weld or Friction-welded plastic instead.
- **off_the_shelf_parts**: Search terms: 'silver solder' or 'silver brazing alloy' (cadmium-free; e.g. 55% silver, or AWS BAg-7, CDA), 'easy / medium / hard silver solder' (jewellery), 'copper phosphorus brazing rod' or 'BCuP-2' / 'BCuP-5' (15% silver) for flux-free copper-to-copper joints, 'brass brazing rod' or 'flux-coated bronze rod' for braze welding steel, 'nickel cast iron rod', 'brazing flux' (borax-based, AWS A5.31 type FB3-A or FB3-C for copper, CDA), 'stainless steel brazing flux', 'aluminium brazing rod' (zinc-aluminium), 'propane torch' or 'propylene / MAPP torch', 'oxy-propane' or 'oxy-acetylene brazing kit', 'fire bricks' or 'brazing hearth', 'soldering tweezers', 'pickle' or 'flux remover', 'induction heater' (production brazing). Check the data sheet for cadmium content before buying.
- **rules_of_thumb**: 
  - Gap: 0.03-0.08 mm (0.0012-0.0031 in) is recommended for the best capillary action and strength, though some operations use about 0.6 mm (Wikipedia, https://en.wikipedia.org/wiki/Brazing); a filler maker gives 0.001-0.005 in (0.025-0.127 mm), 'typically just a slip fit', ideally 0.002-0.005 in with paste flux (Lucas-Milhaupt, https://blog.lucasmilhaupt.com/en-us/about/blog/designing-braze-joints and https://blog.lucasmilhaupt.com/en-us/about/blog/joint-clearance-and-joint-strength). The two sources overlap but differ at the wide end.
  - Overlap: make lap joints at least three times as long as the thinner part is thick (Lucas-Milhaupt, https://blog.lucasmilhaupt.com/en-us/about/blog/designing-braze-joints); with that overlap and a well-formed fillet, a brazed copper tube joint meets or exceeds the strength of the tube and fitting (CDA Copper Tube Handbook p. 42, quoting AWS, https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf). Avoid butt joints, sharp corners and blind holes that trap flux (Lucas-Milhaupt).
  - Temperatures: brazing means a filler melting above 450 °C (840 °F) (Wikipedia 'Soldering'; HSE EIS31, https://www.hse.gov.uk/pubns/eis31.pdf); copper-tube brazing fillers melt at 1100-1500 °F (593-816 °C) (CDA p. 42); silver solders melt at about 630-780 °C, which is red heat (Model Engineer forum, https://www.model-engineer.co.uk/forums/topic/first-attempt-at-silver-soldering/); jewellers' extra-easy (56% silver) melts at 618 °C and extra-hard (80% silver) at 740 °C (Wikipedia, https://en.wikipedia.org/wiki/Soldering).
  - Flux: borax or a 75:25 borax-boric acid mix suits ordinary silver and brass brazing; soft-soldering (chloride) fluxes 'will not remain on the work at brazing temperatures' (NBS Circular 492, https://archive.org/details/circularofbureau492mebs). Brazing and soldering fluxes 'cannot be used interchangeably' (CDA p. 42). Heat until the flux on the fitting goes quiet and then 'liquid and transparent' before adding filler (CDA p. 43).
  - Copper-phosphorus (BCuP) fillers need no flux on copper to copper ('When joining copper tube to a wrought fitting using BCuP filler, no flux is required', CDA Figure 14.7), but never use them on steel or nickel alloys, where phosphorus forms brittle phosphides (Wikipedia 'Brazing').
  - Let the work melt the filler: 'Keep the flame away from the filler metal itself as it is fed into the joint' (CDA p. 43); if filler balls up there is oxide or too little heat, and if it runs over the outside one part is too hot and the other too cold (CDA p. 44). Build fire bricks round the back of the joint to reflect heat and lift the work off the brick so the brick doesn't soak up the heat (Model Engineer forum).
  - Afterwards: let it cool naturally, then remove all flux residue with warm water, because hardened flux can 'temporarily' hold pressure and hide a bad joint (CDA p. 44). Brazing anneals copper tube, so use the annealed (lower) pressure ratings (CDA p. 16, https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf).
  - Zinc-aluminium 'aluminium welding' rods work at about 720-750 °F (382-399 °C) with propane or MAPP; heat the metal, not the rod, scratch the rod on the hot surface to break the oxide, and clamp the parts still for the few minutes the filler takes to set; repairs corrode fast in seawater, so use them for freshwater and dry parts only (Practical Sailor, https://www.practical-sailor.com/boat-maintenance/brazing-repairs/; Welding Tips and Tricks, https://www.weldingtipsandtricks.com/aluminum-brazing-rods.html).
  - Hot work: move combustibles at least 35 ft (10.7 m) away or cover them, and keep a fire watch for at least half an hour afterwards (OSHA 29 CFR 1910.252, which covers welding, cutting and brazing, https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252).

### When to use it

- **everyday_examples**: 
  - the copper pipes of fridges, freezers and air conditioners, where brazing is 'preferred, and often required' (CDA Copper Tube Handbook)
  - carbide-tipped circular saw blades, whose hard tips are brazed onto the steel blade (Wikipedia 'Brazing')
  - lugged and fillet-brazed steel bicycle frames (Wikimedia Commons photo of a fillet-brazed frame)
  - brass musical instruments, whose keywork and braces are usually brazed, and silver and gold jewellery (Wikipedia 'Soldering')
- **when_to_use**: When a joint must be strong, leak-tight and stand heat and vibration better than soft solder: copper refrigeration, air-conditioning and heating pipes, model steam boilers and pipework, steel and stainless tube frames, brackets and small machine parts, joints between different metals (brass to steel, copper to steel, carbide to steel), thin parts that would warp or burn through if welded, and repairs to cast iron by braze welding (Wikipedia 'Brazing'; CDA). Copper systems running continuously above 121 °C should be brazed rather than soldered (CDA). A small propane torch, fire bricks and silver solder are enough for small copper, brass and steel parts at home.
- **when_not_to_use**: When a soft-soldered joint is enough and nearby parts (plastic, rubber seals, electronics, valves) can't take red heat: soft solder or a mechanical fitting is safer (Soldered metal joint, Compression fitting entries). For maximum strength in heavy steel structures: weld instead (Wikipedia 'Brazing'). For parts that must come apart: bolts, unions or threaded fittings. For aluminium, torch brazing is difficult and large sections can't be heated enough with propane; small repairs with zinc-aluminium rods are possible, but TIG welding, rivets or epoxy are often better (Practical Sailor). Never braze fuel tanks or containers that have held fuel (Practical Sailor declines to suggest it 'for both safety and integrity reasons'). Avoid red heat on hardened, heat-treated or work-hardened parts whose strength you need, because it softens them (CDA notes this for copper tube). Never use cadmium-bearing fillers (HSE EIS31).
- **environment_limits**: Heat: brazed joints 'maintain integrity at both sub-zero and elevated temperatures' (HSE EIS31), but every brazed joint weakens as it nears the filler's melting point (Wikipedia 'Soldering'); brazed copper tube is rated for service up to 350 °F (177 °C), the temperature of saturated steam at 120 psi (CDA); braze-welded joints lose strength at high temperature (Wikipedia 'Brazing'). Corrosion: galvanic corrosion between filler and base metal or between two different base metals must be considered; copper-rich fillers can stress-crack in ammonia, and brass fillers resist corrosion poorly on copper, silicon bronze, cupronickel and stainless (Wikipedia 'Brazing'); flux left in the joint causes corrosion (Wikipedia 'Brazing'). Zinc-aluminium rod repairs corrode rapidly in seawater (Practical Sailor). Ordinary copper brazed with a hydrogen-rich (reducing) flame can suffer hydrogen embrittlement and later fail without warning; oxygen-free copper does not (Wikipedia 'Brazing').
- **safety_notes**: CADMIUM: older silver solders contained 16-25% cadmium; heated above 320 °C it gives cadmium oxide fume that damages the lungs and can cause irreversible kidney damage (cadmium stays in the kidneys for 10-40 years), and very high exposure can kill; cadmium is now banned in most European brazing and soldering fillers, so use cadmium-free alloys and be careful reheating old joints, which may contain it (HSE EIS31). Check the filler's data sheet: BAg-7 and BAg-34 are cadmium-free substitutes for BAg-1 and BAg-2 (CDA Table 14.12). FLUX FUMES: brazing fluxes often contain fluorides and other toxic chemicals (Wikipedia 'Flux (metallurgy)'); avoid breathing fumes from fluxes containing bifluoride salts (NBS Circular 492), and use extraction or work outdoors; the torch flame scatters fume, so an extracted booth works better than a hood (HSE EIS31). EYES: wear shaded goggles against the bright light of white-hot work (Wikipedia 'Soldering'). FIRE AND BURNS: brazing is hot work: clear or cover combustibles for 35 ft (10.7 m), don't heat pipes touching combustible walls closely enough to ignite them by conduction, keep an extinguisher ready and watch for at least half an hour afterwards for smouldering fires (OSHA 29 CFR 1910.252). The parts stay hot enough to burn long after they stop glowing; let them cool naturally and handle with pliers. Never braze containers that held fuel (Practical Sailor). For oxy-fuel cylinders and flashback arrestors, see Welded metal joint.
- **common_failures**: (1) Not enough heat: the filler won't melt or won't flow; copper and large parts soak up heat, so use a big enough torch and fire bricks (Model Engineer forum). (2) Wrong flux: soft-soldering (plumbing) flux is 'useless' for silver solder (Model Engineer forum; NBS Circular 492). (3) Filler balls up: oxidised surfaces or too little heat; filler runs over the outside instead of in: one part overheated and the other underheated; parts oxidise during heating: too little flux (CDA p. 44). (4) Wrong gap: too tight and flux and filler can't get in, too wide and capillary action fails and strength falls towards that of the filler alone (Lucas-Milhaupt). (5) Flux trapped in blind holes or sharp corners (Lucas-Milhaupt), or left on the joint, causing corrosion or masking leaks (CDA; Wikipedia 'Brazing'). (6) Cast fittings cracked by overheating (CDA). (7) Cracking: stress cracking of copper-nickel during silver brazing (Wikipedia 'Brazing'; Commons photo of a cracked CuNi plate), brittle phosphides from phosphorus fillers on steel or nickel (Wikipedia 'Brazing'), or hydrogen embrittlement of ordinary copper (Wikipedia 'Brazing'). (8) Parts moved while the filler was setting (Practical Sailor). (9) Aluminium parts too big to bring up to temperature with a propane torch (Practical Sailor).
- **related**: 
  - Soldered metal joint (soft soldering, sweat-soldered copper pipe): the same capillary method below 450 °C with an iron or small torch; easier and gentler, but much weaker and only for low service temperatures
  - Welded metal joint (fusion welding): melts the parts themselves; strongest, but more distortion, and it needs the same or compatible metals
  - Spot weld (resistance spot welding): joins overlapping sheet with no filler
  - Flare fitting and Compression fitting: flame-free, removable joints for copper and steel tube
  - Parallel pipe thread with a sealing washer (pipe union): removable joint often brazed or soldered onto copper pipe
  - Blind rivet (pop rivet) and Ordinary screw joint: cold, removable or one-sided alternatives for joining different metals
  - Two-part epoxy and Epoxy putty: cold 'metal repair' alternatives for parts that can't be heated; much weaker
  - Heat staking, Melted plastic weld: the plastic equivalents of heat joining

### Pictures, videos and models

- **links**: 
  - [Principe brasage fort cuivre.svg (Wikimedia Commons, by Cdang)](https://commons.wikimedia.org/wiki/File:Principe_brasage_fort_cuivre.svg): Diagram of copper brazing: flame heating of the parts and the filler melting where it touches the hot parts and running into the joint *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Brazing welding tee joint.svg (Wikimedia Commons, by Interiot, traced by Stannered)](https://commons.wikimedia.org/wiki/File:Brazing_welding_tee_joint.svg): Cross-section of a braze-welded (fillet-brazed) tee joint, with the filler bead reinforcing the joint *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Partially-completed steel bicycle frame.jpg (Wikimedia Commons, by 4300streetcar)](https://commons.wikimedia.org/wiki/File:Partially-completed_steel_bicycle_frame.jpg): A partly built fillet-brazed steel bicycle frame at a makerspace, showing smooth brazed fillets at the tube joints *(licence: CC BY 4.0 (reuse with credit))*
  - [Crack in CuNi metal due to silver brazing.jpg (Wikimedia Commons, by Janke)](https://commons.wikimedia.org/wiki/File:Crack_in_CuNi_metal_due_to_silver_brazing.jpg): A crack in a 90-10 copper-nickel plate caused by stresses during silver brazing: a typical failure *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [How-To: Braze Copper Tube (Copper Development Association, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=07ODV2Bdqow): Video demonstration of heating, fluxing and feeding filler into a brazed copper tube joint *(licence: link only)*
- **make_it_yourself**: 
  - [Welding/Brazing Filler Rod Case Divider (Printables 1854379; URL from Printables API, page not opened)](https://www.printables.com/model/1854379-weldingbrazing-filler-rod-case-divider): A printed 4-bin divider with colour-coded inserts for a filler-rod tube, to keep different brazing rods (e.g. copper-phosphorus and silver rods) from getting mixed up; for storage only, away from the torch *(licence: CC BY (Creative Commons Attribution))*
  - [Propane Torch Holder (Printables 12436; URL from Printables API, page not opened)](https://www.printables.com/model/12436-propane-torch-holder): A simple printed stand for 14 oz (400 g) propane canisters so the torch can't tip over when set down; keep it clear of the flame *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: A sliced view of a tube slipped into a socket with the 0.03-0.08 mm gap exaggerated, a torch heating the socket to dull red, the filler rod touched at the mouth of the joint and arrows showing it drawn right through by capillary action into a full fillet, next to a smaller sketch of braze welding, where a bronze bead sits on top of a V-joint instead.
- **sources**: 
  - https://en.wikipedia.org/wiki/Brazing
  - https://en.wikipedia.org/wiki/Soldering
  - https://en.wikipedia.org/wiki/Flux_(metallurgy)
  - https://copper.org/wp-content/uploads/2026/04/copper_tube_handbook.pdf
  - https://www.hse.gov.uk/pubns/eis31.pdf
  - https://archive.org/details/circularofbureau492mebs
  - https://archive.org/download/circularofbureau492mebs/circularofbureau492mebs_djvu.txt
  - https://blog.lucasmilhaupt.com/en-us/about/blog/joint-clearance-and-joint-strength
  - https://blog.lucasmilhaupt.com/en-us/about/blog/designing-braze-joints
  - https://www.practical-sailor.com/boat-maintenance/brazing-repairs/
  - https://www.weldingtipsandtricks.com/aluminum-brazing-rods.html
  - https://www.model-engineer.co.uk/forums/topic/first-attempt-at-silver-soldering/
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252
  - https://www.youtube.com/watch?v=07ODV2Bdqow
  - https://commons.wikimedia.org/wiki/File:Principe_brasage_fort_cuivre.svg
  - https://commons.wikimedia.org/wiki/File:Brazing_welding_tee_joint.svg
  - https://commons.wikimedia.org/wiki/File:Partially-completed_steel_bicycle_frame.jpg
  - https://commons.wikimedia.org/wiki/File:Crack_in_CuNi_metal_due_to_silver_brazing.jpg
  - https://commons.wikimedia.org/wiki/Category:Brazing
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
- **tools**: welding or brazing torch, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent
- **power**: passive

## 406 Spot weld (resistance spot welding)

*welding, brazing & soldering.* Two overlapping metal sheets or strips are squeezed between copper electrodes and a short burst of very high current melts a small button of metal between them, as on car bodies, steel boxes and battery packs

*Also covers:* Also covers nickel strip on battery packs, seam welding and choosing a hobby spot welder. Safety: sparks, and lithium cells catch fire if overheated.

### What it is

- **plain_name**: Joining two overlapping metal sheets or strips by squeezing them between two copper tips and firing a split-second burst of huge electric current through them, which melts a small button of metal where they touch so they set as one
- **term**: Spot weld (resistance spot welding, RSW)
- **aliases**: 
  - resistance spot welding (RSW), spot welding (Wikipedia 'Spot welding')
  - weld nugget (the small melted button that forms the joint)
  - resistance welding, electric resistance welding (ERW): the family of processes (Wikipedia 'Electric resistance welding')
  - portable spot welder, tong spot welder, spot welding tongs, spot welding gun (Miller OM-716; Wikipedia)
  - battery spot welder, battery tab welder, tab welder, nickel strip welding (Hackaday)
  - micro spot welder (Wikipedia: 1.5 kVA or less, for precision work)
  - capacitor-discharge (stored-energy) spot welder; MOT spot welder (home-made from a microwave-oven transformer) (OSHA 1910.255; Hackaday)
  - seam welding, resistance seam welding, roller or wheel welding (Wikipedia 'Electric resistance welding')
  - projection welding; weld nut, weld stud (Wikipedia 'Spot welding')
  - shot welding (a special process for spot welding stainless steel) (Wikipedia 'Electric resistance welding')
  - kWeld (brand): a hobby battery welder named in maker models (Printables)
- **family**: welding, brazing & soldering
- **other_families**: interlocking joints & joinery, electrical connections
- **one_liner**: A spot weld joins overlapping metal sheets or strips at small points: copper electrodes squeeze the parts together and a very short, very high current melts a nugget of metal between them, with no filler, flame or glue, as used on car bodies, sheet-steel boxes and nickel strips on battery packs.
- **complexity**: Single piece once made: the two sheets become joined at each spot. Making it needs a small assembly of equipment: a power source (a mains welding transformer, or a capacitor bank or battery for battery welders), a timer or control box that sets the pulse length, two copper-alloy electrodes on tongs, arms or hand-held pens, a way of applying force (hand lever, foot pedal or spring), and often a jig to hold the parts (Wikipedia 'Spot welding'; Miller OM-716).
- **how_it_works**: The two sheets are clamped between two shaped copper-alloy electrodes, which press them together and carry the current (Wikipedia 'Spot welding'). Copper conducts very well, so little heat is made in the tips; most is made where the current crosses the resistance of the steel and the contact between the two sheets (the faying surfaces), and in about 10-100 milliseconds a button of metal in the middle of the spot melts, while the cooler edges and the copper tips keep it contained (Wikipedia). The current then stops but the electrodes keep squeezing until the nugget has set (hold time); too little energy gives a weak or no weld, and too much melts right through, throws out molten metal (expulsion) and leaves a hole (Wikipedia 'Spot welding', 'Electric resistance welding'). Seam welding does the same with rotating disc-shaped electrodes that roll along the joint to make long continuous welds, and projection welding uses small raised bumps pressed into one part to place the heat, e.g. to weld nuts onto sheet (Wikipedia). Battery tab welders use the same idea with short pulses from a capacitor or battery to weld thin nickel strip onto cell ends (Wikipedia; Hackaday 2021).

### Finder attributes

- **job**: 
  - join and hold: permanently joins overlapping sheet metal, wire mesh, weld nuts and battery strips
  - seal it, or pass cables or fluid through: only continuous resistance seam welding, which makes long continuous welds and is used to make steel tubing (and was once used for beverage cans) (Wikipedia 'Electric resistance welding'); ordinary spot welds do not seal
- **motion**: none
- **degrees_of_freedom**: 0: the sheets are fixed together at each spot.
- **special_behaviour**: none: a plain permanent joint
- **holding_principle**: material bond (glue, solvent or melting): the metal of both sheets melts and sets as one nugget (a fusion bond); resistance welding can also make solid-state bonds and resistance-heated braze bonds between unlike metals (Wikipedia 'Electric resistance welding')
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a powered spot welder (mains transformer, or a capacitor or battery pulse unit)
- **removability**: permanent: undo it by drilling or cutting each spot out; auto-body spot weld cutters remove spot welds 'without pre-drilling or punching' and separate body panels (ICS Cutting Tools). Nickel strip welded to cells is peeled or cut off, which spoils the strip.
- **reuse_cycles**: once
- **tools_needed**: A spot welder: a portable tong spot welder for sheet steel, or a battery spot welder with a pen or fixed arms for nickel strip (Miller OM-716; Hackaday). Also: a foot switch or hand lever, clamps or a jig, a file or tip dresser to keep the copper tips in shape, a wire brush or abrasive to clean off paint, rust and oil, safety glasses with side shields, leather gloves, a fire extinguisher, and pliers to handle hot parts (Miller OM-716; George Fox University Maker Hub). For removal: a spot weld cutter or spot weld drill (ICS Cutting Tools).
- **seal**: none for ordinary spot welds: the spots are separate and 'do not form a continuous seam' (Wikipedia 'Electric resistance welding'), so add a seam sealer or use another joint for tightness ⚑ [uncertain: sealer not on an opened page]. Airtight or pressure only with continuous resistance seam welding, as used to make steel tube (Wikipedia). *(⚑ parts need confirming)*
- **load**: Electrical: up to about 30 A per nickel strip ⚑ [uncertain: depends on strip width and thickness; no rating table opened], extra-low voltage only (battery packs). Mechanical: medium per spot. Each spot is strong in shear (sideways sliding of the sheets): spot welding is used 'in preference to more costly mechanical fastening, such as riveting' when high shear strength is needed (Wikipedia 'Electric resistance welding'). Weak in peel (prying the sheets apart from an edge), and the separate spots make overall strength 'often significantly lower than with other welding methods' (Wikipedia). Spot welding can harden and crack the metal around the nugget and reduces fatigue strength, so vibration is a weak point (Wikipedia 'Spot welding'). Cars hold together with several thousand spot welds (Wikipedia). *(⚑ parts need confirming)*
- **adjustable**: no: position is fixed once welded; a misplaced spot must be drilled out and re-welded
- **play_and_precision**: No play once welded. Accuracy depends on clamping and fit-up: 'poor part fit-up and close sheet edge distances can lead to poor or variable quality' (TWI), and spot welding 'tends to harden the material, causing it to warp' (Wikipedia 'Spot welding'). Distortion is greatest on the thinner sheet; keep the thickness ratio at 3:1 or less (Machine Design).
- **access_needed**: both sides for ordinary sheet spot welding: one electrode presses on each side, and the welder's throat depth (often 13-130 cm, Wikipedia) limits how far from an edge you can reach; 'good design practice must always allow for adequate accessibility' (Wikipedia 'Spot welding'). One side only for battery tab welding, where both probes press on top of the strip side by side ⚑ [uncertain: described by a Hackaday reader, not by a manufacturer]. *(⚑ parts need confirming)*
- **materials**: Can join: low-carbon (mild) steel, galvanised (zinc-coated) steel and stainless steel sheet (George Fox University Maker Hub; Miller OM-716), usually about 0.5-3 mm thick (Wikipedia 'Spot welding'); welded wire mesh and crossed wires (Wikipedia); thin nickel straps to the terminals of nickel-cadmium, nickel-metal hydride and lithium-ion cells (Wikipedia). Aluminium can be spot welded, but its higher conductivity needs much higher currents and bigger, costlier machines (Wikipedia); hobby tong welders are 'not recommended for aluminum or copper alloys' (Miller OM-716). Thick plate is hard because heat flows away into the metal (Wikipedia). Both parts must conduct electricity (Wikipedia), so it can't join plastics, wood or painted surfaces; clean off paint, oil and scale first (Wikipedia; Miller). For battery packs, a Hackaday reader advises 'pure' nickel strip rather than nickel-plated steel, which 'can corrode rapidly in the presence of moisture' ⚑ [uncertain: reader advice only]. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: the welding itself is quick and easy to learn, but it needs a dedicated spot welder, and cheap battery welders vary widely in quality and safety (Hackaday 2021, 2022, 2024); battery packs add a lithium fire risk

### Making it

- **processes**: 
  - sheet metal: the main use (boxes, brackets, enclosures, car-body panels, wire mesh)
  - off-the-shelf part (battery packs built from cells and nickel strip; weld nuts and studs; parts spot welded by a fabrication shop)
  - 3D print (FDM): only for jigs, cell holders and electrode holders, never the joint itself
- **print_in_place**: no: spot welding joins metal; printed parts are only jigs and holders
- **making_tips_3d_printing**: Not applicable to the joint itself, but printed jigs make battery packs much easier. Cell-squeezing jigs hold 18650 cells tightly together while you weld the strip (Printables 218283); slotted panels line cells up and leave room for 8 mm or 10 mm nickel strip, print without supports in PLA or PETG, and are removable after welding (Printables 1322762); an OpenSCAD generator makes a two-part holder with built-in magnets for 18650, 21700 and 26500 cells (Printables 1292481). For cell holders that stay in the pack, one designer recommends PETG, ABS or ASA because 'PLA may warp under load or during the spot-welding process' and packs get warm (Printables 1618674). Electrode (pen) holders that clamp the probes leave a hand free (Printables 387940). Keep printed parts and other flammables away from the spark spray (Miller OM-716), and design jigs so that no metal screws or magnets can bridge a cell's terminals.
- **off_the_shelf_parts**: Search terms: 'portable spot welder' or 'tong spot welder' (120 V or 230 V, with tongs of different lengths) and 'spot welder timer' (Miller OM-716); 'spot welding tips' or 'electrode tips' and 'tip dresser'; 'battery spot welder', 'battery tab welder', 'spot welding pen' and 'foot pedal switch' (Hackaday); 'pure nickel strip' (sold in widths for 1, 2 or more cells side by side, often called 2P or 3P strip) and 'nickel-plated steel strip' (cheaper) ⚑ [uncertain: strip naming from shop listings in search results, not opened]; 'nickel strip tabs'; '18650 cell holder' or 'battery spacer'; 'weld nut' and 'weld stud' (projection welding, Wikipedia); 'spot weld cutter' and 'spot weld drill' (ICS Cutting Tools). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Typical sheets are 0.5-3 mm thick, and the current flows for only about 10-100 ms; weld times range from 0.01 s to 0.63 s depending on thickness, electrode force and tip diameter (Wikipedia, https://en.wikipedia.org/wiki/Spot_welding).
  - Hobby tong welders are rated by combined thickness: the 110 V Miller MSW-41T welds up to 1/8 in (3.2 mm) total of uncoated mild steel and the 220 V LMSW-52T up to 3/16 in (4.7 mm), at a 50% duty cycle (5 s welding in every 10 s); neither is recommended for aluminium or copper alloys (Miller OM-716 manual, https://makerhub.georgefox.edu/w/images/e/e5/Spot_Welder_Manual.pdf). A university makerspace limits its LMSW-52 to two sheets of 16 gauge and clamps for about 2 seconds (https://makerhub.georgefox.edu/wiki/Spot_Welder).
  - Space spots at least 10 times the sheet thickness apart (about 20 times reduces shunting, where current leaks through the last spot instead of making the new one); keep the spot centre at least two spot diameters from an edge or hole; keep the thickness ratio of the sheets at 3:1 or less; allow at least 3 mm clearance for the weld gun (Machine Design, https://www.machinedesign.com/mechanical-motion-systems/article/21836735/dfm-for-welding).
  - Keep tips dressed to their original face diameter (less than 1/8 in / 3.2 mm on 1.5 kVA models, 5/32 in / 4 mm on 2.5 kVA models); a hole in the middle of the weld means the tip contact area is too large (Miller OM-716, https://makerhub.georgefox.edu/w/images/e/e5/Spot_Welder_Manual.pdf).
  - Surfaces must be 'free of contaminants such as scale, oil, and dirt' (Wikipedia, https://en.wikipedia.org/wiki/Spot_welding); 'remove oxides and chemical compounds including galvanized coating' if welds fail (Miller OM-716).
  - Too much tong pressure dimples the nugget and splashes metal; too little causes arcing and no weld (Miller OM-716, https://makerhub.georgefox.edu/w/images/e/e5/Spot_Welder_Manual.pdf).
  - Welders often use a double pulse: the first pulse softens the metal so the electrodes seat, the second makes the weld (Wikipedia, https://en.wikipedia.org/wiki/Spot_welding).
  - Check settings with test pieces: the usual quality check is a peel test, pulling a welded test strip apart to see the nugget (Wikipedia, https://en.wikipedia.org/wiki/Electric_resistance_welding); keep records and check electrode force and current regularly (TWI, https://www.twi-global.com/technical-knowledge/faqs/faq-what-must-be-done-to-ensure-the-quality-and-consistency-of-resistance-spot-welds).
  - The voltage across the work is tiny: about 1.5 V falling to 1 V when welding 1.0 + 1.0 mm steel, from a transformer giving 5-22 V open circuit (Wikipedia, https://en.wikipedia.org/wiki/Spot_welding); the shock risk is on the mains side, not at the tips.
  - A cheap lithium-battery spot welder measured about 960 A at the start of a 50 ms pulse (Hackaday, https://hackaday.com/2022/03/16/cheap-spot-welder-teardown/).

### When to use it

- **everyday_examples**: 
  - car bodies: 'cars can have several thousand spot welds' (Wikipedia 'Electric resistance welding')
  - metal buckets and other sheet-metal goods, where the row of small round dimples is easy to see (Wikipedia 'Spot welding')
  - battery packs in laptops, power tools and e-bikes, where thin nickel strips are spot welded across 18650 cells (Wikipedia; Hackaday 2021)
  - welded wire mesh and steel cabinets, shelving and computer cases ⚑ [uncertain: cabinets and cases not named on an opened page] *(⚑ parts need confirming)*
- **when_to_use**: For fast, neat, permanent joints between overlapping thin sheets of steel or stainless steel (about 0.5-3 mm), such as boxes, enclosures, brackets, chassis panels and repairs to tin toys or sheet-metal goods: there is no filler, no flame and little distortion of the rest of the sheet, because the heat is delivered in a fraction of a second (Wikipedia 'Spot welding'). For joining battery cells into packs with nickel strip: welding heats the cell so briefly that it 'can keep the battery from getting too hot, as might happen if conventional soldering were done' (Wikipedia). For fixing nuts or studs to sheet (projection welding) and for crossed wires and mesh (Wikipedia). CHOOSING A HOBBY SPOT WELDER: for sheet steel, buy a portable tong welder rated by the combined thickness it can join (e.g. 1/8 in / 3.2 mm on a 110-120 V unit, 3/16 in / 4.7 mm on a 220-230 V unit), check its duty cycle, get a model with a weld timer for consistent nuggets, and pick tong length for reach, remembering that longer tongs weld less (Miller OM-716). For nickel strip on cells, buy a purpose-made battery spot welder with adjustable pulse energy, a foot switch or auto-trigger, and short, heavy leads; reviews suggest a 'traditional' battery welder rather than the cheapest MOSFET boards, one of which failed during testing (Hackaday 2021), though some cheap units do work once inspected and fixed (Hackaday 2022, 2024). Home-made microwave-oven-transformer welders work but bring mains-voltage hazards (Hackaday 2017).
- **when_not_to_use**: When you can only reach one side of a sheet-metal joint (use a blind rivet or a self-clinching or rivet nut). When parts must come apart again (use screws or bolts). For butt joints or edges that don't overlap, thick plate, or long load-carrying seams (use fusion welding: Welded metal joint). For aluminium or copper with a hobby welder (use blind rivets, clinching or bolts; Miller OM-716). For painted, oily or rusty metal unless cleaned (Wikipedia). For joints that must be watertight (spot welds leave gaps; use seam welding, brazing, soldering or a sealant). For joints loaded in peel or heavy vibration (Wikipedia). For high-energy lithium packs such as e-bike batteries, don't build or rebuild them unless you really know what you are doing: the UK regulator OPSS says never to modify or tamper with e-bike or e-scooter batteries (OPSS).
- **environment_limits**: A finished steel spot weld takes the same heat and cold as the sheet, but: the welding changes the metal's 'corrosive properties' and bare steel rusts, so paint or protect it (Wikipedia 'Spot welding'); spot welds lose fatigue strength and can crack around the nugget under vibration (Wikipedia). In battery packs, cells and printed holders must tolerate pack heat: one designer warns PLA holders may warp (Printables 1618674), and a Hackaday reader warns that nickel-plated steel strip corrodes in damp conditions ⚑ [uncertain]. While welding: water and wet clothing raise the shock risk, so 'don't weld in wet gear or standing water' (George Fox University Maker Hub). *(⚑ parts need confirming)*
- **safety_notes**: SPARKS AND FIRE: 'it is common for a spray of molten metal droplets (sparks) to be ejected' (Wikipedia 'Spot welding'); sparks and hot parts can start fires, so don't weld where sparks can reach flammable material, keep an extinguisher nearby and check the area afterwards (Miller OM-716). OSHA requires shields of safety glass or fire-resistant plastic at the point of operation and curtains to protect passers-by (OSHA 1910.255). EYES: wear safety glasses with side shields; spot welding makes no bright arc, so no filter lens is needed, but OSHA requires clear face shields or goggles against splatter (Miller OM-716; Wikipedia). BURNS AND PINCHING: tips, tongs and work get hot, so use gloves and pliers, and never put hands between the tips (Miller OM-716; George Fox University Maker Hub); OSHA requires press welders to be guarded where fingers could be under the electrodes (OSHA 1910.255). ELECTRIC SHOCK: the welder runs on mains power; home-made microwave-oven-transformer welders often put 'mains voltage dangerously close to your finger' (Hackaday 2017), and capacitor-discharge welders above 550 V must be fully enclosed with interlocks that discharge the capacitors (OSHA 1910.255). Remove rings and metal jewellery near high-current leads (Hackaday 2017). FUMES: zinc coatings, oil, lubricants and adhesives give off fume; TWI says general ventilation is usually enough but local extraction is usual for hand work (TWI), while Miller's manual says not to weld galvanised, lead- or cadmium-plated steel unless the coating is removed, the area is well ventilated and you wear an air-supplied respirator (Miller OM-716). PACEMAKERS: the strong magnetic fields can affect implanted medical devices, so wearers should keep away and ask their doctor (Miller OM-716). LITHIUM CELLS: lithium-ion batteries 'can present a risk of serious fire or explosion', and OPSS says never to modify or tamper with e-bike or e-scooter batteries (OPSS). Shorted or overheated cells can catch fire and are hard to put out; build packs in a dedicated area away from loose metal tools, on a non-conductive surface (Hackaday 2021 reader). Cheap battery welders may have 'obvious safety problems', so inspect one before first use (Hackaday 2022), and a cheap MOSFET welder failed short-circuit with smoke during a review (Hackaday 2021).
- **common_failures**: (1) Weak weld that peels apart: too little energy, dirty or coated surfaces, worn tips or too little pressure; increase the setting step by step on scrap and peel-test (Wikipedia; Miller OM-716; Hackaday 2021, where low settings made strips that 'I could easily pull ... apart'). (2) Burn-through, holes and expulsion (molten metal spitting out): too much energy, too long a weld time or too much tong pressure, which leaves a thinner, weaker weld (Wikipedia 'Electric resistance welding'; Miller OM-716). (3) Tips arcing, sticking or overheating: not enough pressure, misaligned or dirty tips, or metal picked up on the tips; dress and realign them (Miller OM-716). (4) Inconsistent nuggets: no timer or varying pressure; use a timer and keep settings recorded (Miller OM-716; TWI). (5) Shunting: spots too close together let current bypass the new spot (Machine Design). (6) Cracks, warping and fatigue failure around the nugget (Wikipedia 'Spot welding'). (7) Spots too near an edge, poor fit-up or a gap between sheets (TWI; Machine Design): clamp the parts so they touch at the spot, because the tongs must not be used as a clamp (Miller OM-716). (8) Battery packs: overheating cells by holding the pulse too long or soldering instead; shorting cells with tools; cheap welders that can't deliver enough current or fail (Hackaday 2021, 2022).
- **related**: 
  - Welded metal joint (fusion welding: stick, MIG, TIG and gas welding): melts a continuous bead along any joint shape, for thicker parts and butt joints; slower and distorts more
  - Clinching (press joining without rivets): cold-presses overlapping sheets into a locked button; no heat or fumes, joins coated and different metals, but needs a press and tooling
  - Blind rivet (pop rivet): fitted from one side through a drilled hole; removable by drilling and suits aluminium and mixed materials
  - Self-clinching fastener (press-in nut or stud): pressed into sheet instead of projection-welding a weld nut
  - Soldered metal joint and Soldered wire joint: lower temperature but slower heating; soldering directly to lithium cells risks overheating them (Wikipedia 'Spot welding')
  - Brazed joint (brazing, silver soldering): fills a close gap with brass or silver alloy; seals and joins different metals
  - Battery holder and battery contacts (spring battery contact, coin-cell holder): the removable, solder-free way to connect a few cells
  - Ultrasonic weld (ultrasonic plastic welding): its metal cousin is used in industry; TWI's 2021 review found laser and ultrasonic welding are the leading ways of joining electric-vehicle battery cells, with resistance welding showing promise
  - Bent or twisted tab through a slot (lanced tab): a no-heat, mechanical way to fix sheet parts together

### Pictures, videos and models

- **links**: 
  - [Spot welding 1anim.gif (Wikimedia Commons, by Tserc)](https://commons.wikimedia.org/wiki/File:Spot_welding_1anim.gif): Animated diagram of resistance spot welding: electrodes close on two sheets, current flows and a nugget forms *(licence: Public domain)*
  - [Structural schematic section of Spot Weld.png (Wikimedia Commons, from GOST 15878-79)](https://commons.wikimedia.org/wiki/File:Structural_schematic_section_of_Spot_Weld.png): Cross-section drawings of spot welds: the nugget between two sheets, including unequal thicknesses and different metals *(licence: Public domain)*
  - [Rollennahtschweißen.gif (Wikimedia Commons, by Mühlenberg)](https://commons.wikimedia.org/wiki/File:Rollennahtschwei%C3%9Fen.gif): Animation of a resistance seam welding machine: two rotating wheel electrodes roll along overlapping sheets to make a continuous weld *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Blast from the Past: Intro to Resistance Welding (American Welding Society, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=BIYlhr2mEKY): Archive training film showing spot, projection and wire resistance welding (linked from Wikipedia 'Spot welding') *(licence: link only)*
  - [TSP #218 - Teardown & Analysis of a Somewhat Dangerous LiPo-Based Mini Spot Welder (The Signal Path, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=mt0229lU9sU): A cheap battery spot welder welding nickel strip to a cell, its current pulse measured, and its safety problems *(licence: link only)*
- **make_it_yourself**: 
  - [3x 18650 cells spot welding tool (Printables 218283; URL from Printables API, page not opened)](https://www.printables.com/model/218283-3x-18650-cells-spot-welding-tool): A simple printed jig that squeezes three 18650 cells together so the nickel strip is easy to spot weld *(licence: Public domain (Creative Commons Public Domain))*
  - [18650 Battery Welding Jig (Printables 1322762)](https://www.printables.com/model/1322762-18650-battery-welding-jig): A five-slot alignment panel for 18650 cells with clearance for 8 mm or 10 mm nickel strip; prints without supports in PLA or PETG *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Spot weld helper (Printables 1292481; URL from Printables API, page not opened)](https://www.printables.com/model/1292481-spot-weld-helper): OpenSCAD generator for a two-part cell holder with built-in magnets, for 18650, 21700 and 26500 cells *(licence: BSD License)*
  - [Li-ion 18650 Battery Spacers | Spot Weld Optimized (Printables 1618674; URL from Printables API, page not opened)](https://www.printables.com/model/1618674-li-ion-18650-battery-spacers-spot-weld-optimized): Single-row cell spacers with nickel-strip guides and wire channels; the designer recommends PETG, ABS or ASA over PLA *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Mini Spot Welder Electrode Holder (Printables 387940; URL from Printables API, page not opened)](https://www.printables.com/model/387940-mini-spot-welder-electrode-holder): A printed holder for battery-welder probes so one hand is free to hold the strip and cell *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A cross-section of two overlapping sheets squeezed between upper and lower copper electrodes, with arrows for force and current, a glowing lens-shaped nugget at the joint line, and a second small panel showing a battery welder's two probes side by side on a nickel strip over a cell's end cap.
- **sources**: 
  - https://en.wikipedia.org/wiki/Spot_welding
  - https://en.wikipedia.org/wiki/Electric_resistance_welding
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.255
  - https://www.twi-global.com/technical-knowledge/faqs/faq-what-must-be-done-to-ensure-the-quality-and-consistency-of-resistance-spot-welds
  - https://www.twi-global.com/technical-knowledge/faqs/faq-is-there-a-problem-of-fume-in-resistance-spot-welding
  - https://www.twi-global.com/what-we-do/research-and-technology/research-reports/technical-literature-reviews/33559-2021-review-of-electric-vehicle-battery-joining-methods-and-testing
  - https://www.machinedesign.com/mechanical-motion-systems/article/21836735/dfm-for-welding
  - https://makerhub.georgefox.edu/wiki/Spot_Welder
  - https://makerhub.georgefox.edu/w/images/e/e5/Spot_Welder_Manual.pdf
  - https://hackaday.com/2021/06/16/review-battery-spot-welders-why-you-should-buy-a-proper-spot-welder/
  - https://hackaday.com/2022/03/16/cheap-spot-welder-teardown/
  - https://hackaday.com/2024/01/08/half-power-bank-half-spot-welder/
  - https://hackaday.com/2017/06/27/dual-purpose-diy-spot-welder-built-with-safety-in-mind/
  - https://hackaday.com/2017/07/18/beautiful-diy-spot-welder-reminds-us-we-love-3d-printing/
  - https://www.gov.uk/guidance/government-safety-message-on-e-bikes-and-e-scooters
  - https://icscuttingtools.com/SpotWeld.htm
  - https://commons.wikimedia.org/wiki/File:Spot_welding_1anim.gif
  - https://commons.wikimedia.org/wiki/File:Structural_schematic_section_of_Spot_Weld.png
  - https://commons.wikimedia.org/wiki/File:Rollennahtschwei%C3%9Fen.gif
  - https://www.youtube.com/watch?v=BIYlhr2mEKY
  - https://www.youtube.com/watch?v=mt0229lU9sU
  - https://www.printables.com/model/1322762-18650-battery-welding-jig
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
- **electrical_band**: up to about 30 A ⚑ *needs confirming (source uncertain): `load` is marked [uncertain] here: "Electrical: up to about 30 A per nickel strip [uncertain: depends on strip width and t…"*
- **tools**: welding or brazing torch, drill and tap, press or vice, hand tools
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** access_needed, environment_limits, everyday_examples, load, materials, off_the_shelf_parts, seal

## 407 Heat-fused plastic pipe (socket fusion, butt fusion, electrofusion)

*welding, brazing & soldering.* Polyethylene or polypropylene pipes are joined by melting the pipe end and the fitting on a hot tool, or with a fitting that has a heating wire built in, and pushing them together so they set as one piece

*Also covers:* Also covers insertion depth, heating and holding times, and why PE and PP pipe can't be solvent-welded. Safety: burns and spurting molten plastic.

### What it is

- **plain_name**: Joining plastic water or gas pipes by melting the pipe end and the fitting on a hot tool (or with a fitting that has a heating wire inside) and pushing them together, so the melted plastic flows together and sets as one piece
- **term**: Heat-fused plastic pipe (heat fusion of PE and PP-R pipe: socket fusion, butt fusion and electrofusion)
- **aliases**: 
  - heat fusion, fusion welding of plastic pipe, thermal fusion (PPI Handbook ch. 9; Wikipedia 'Hot plate welding')
  - socket fusion, socket welding (pipe and socket both heated on male and female heater faces) (PPI; Wikipedia)
  - butt fusion, butt welding, hot plate welding, heated tool welding, heating-element butt welding (Wikipedia 'Hot plate welding'; TEPPFA)
  - saddle fusion, sidewall fusion (a branch fitting fused onto the side of a pipe) (PPI; Wikipedia)
  - electrofusion (EF): electrofusion coupler, tee, tapping tee or saddle; EF welder or control box (Wikipedia 'Electrofusion'; PPI; PIPA)
  - PP-R pipe welding, PPR welding machine, PP-R welding iron (names used by makers, e.g. Printables model titles)
  - polyethylene pipe: PE, HDPE, MDPE, PE80, PE100, 'poly pipe' (Wikipedia 'Electrofusion'; TEPPFA; PIPA)
  - polypropylene random copolymer pipe: PP-R, PPR, PP-RCT (Wikipedia 'Polypropylene')
  - cold ring, depth gauge, melt bead, fusion indicator pins, witness marks (PPI; CPChem; PIPA)
  - Aquatherm (brand): a PP-R piping system whose installer manual is the basis of the NIBCO/Webstone instructions
- **family**: welding, brazing & soldering
- **other_families**: seals & pass-throughs, hydraulics, pneumatics & vacuum
- **one_liner**: Heat fusion joins polyethylene (PE) and polypropylene (PP-R) pipes and fittings by melting their mating surfaces, on a hot tool or with a heating wire built into the fitting, and pressing them together so they cool into one leak-proof piece as strong as the pipe, which is the standard way to join plastics that glue and solvent cement can't.
- **complexity**: Single piece once made: pipe and fitting become one. Making it needs equipment: for socket fusion, a thermostatic heating iron with matched male and female heater faces (bushings), a pipe cutter, a chamfer tool and a depth gauge or cold ring; for butt fusion, a machine that clamps, aligns and faces the pipe ends, a heater plate and a way to apply a set force; for electrofusion, a fitting with a built-in heating coil, a control box (EF welder) and power supply, a peeling tool and alignment clamps (PPI Handbook ch. 9; Wikipedia; PIPA POP001).
- **how_it_works**: The principle is to heat both surfaces to a set temperature and then push them together with enough force that 'the melted materials flow and mix', so the joint is fused (PPI). In socket fusion the outside of the pipe end and the inside of the fitting socket are heated at the same time on male and female heater faces, pulled off, and the pipe is pushed straight in to a marked depth without twisting and held still while it cools (PPI; NIBCO). In butt fusion the two pipe ends are clamped in line, faced flat, pressed against a heater plate until melted, then pressed together under a controlled force, which squeezes out a rolled bead on each side, and held until cool (PPI; Wikipedia 'Hot plate welding'). In electrofusion the pipe is scraped clean and pushed into a fitting with heating wires buried in its bore; a control box sends current (typically 40 V) for a time set by the fitting's barcode, the plastic melts and expands in the cavity between 'cold zones' so the melt pressure fuses pipe and fitting, and the joint is left clamped to cool (Wikipedia 'Electrofusion'; PIPA POP001). PE and PP pipe can't be solvent welded because, at room temperature, crystalline PE does not dissolve and PP resists 'almost all organic solvents' (Wikipedia 'Polyethylene', 'Polypropylene'), while solvent welding needs a solvent that 'can temporarily dissolve the polymer at room temperature' (Wikipedia 'Plastic welding'); heat is the way to melt them together instead.

### Finder attributes

- **job**: join and hold: permanently joins plastic pipes, fittings, tees and branch saddles, seal it, or pass cables or fluid through: makes a leak-proof pressure joint for water, gas and other fluids
- **motion**: none
- **degrees_of_freedom**: 0: pipe and fitting become one piece.
- **special_behaviour**: none: a plain permanent fused joint
- **holding_principle**: material bond (glue, solvent or melting): the plastic of pipe and fitting is melted together and sets as one piece
- **input_output**: not applicable
- **power**: passive (no power needed) once made; making it needs a mains- or generator-powered heating iron, butt fusion machine or electrofusion control box
- **removability**: permanent: a fused joint can only be cut out; repairs are made by cutting out a section and fitting new pipe, often with slide-over electrofusion couplers made for repairs (TEPPFA)
- **reuse_cycles**: once
- **tools_needed**: Socket fusion: fusion iron with the right-size heater faces, held steady by a helper or clamped in place (NIBCO); pipe cutter or shears that keep the pipe round; chamfer and deburring tool; depth gauge and cold ring (PE) or a felt-tip pen and marking template (PP-R); surface thermometer (pyrometer) to check the heater (PPI; CPChem). Butt fusion: butt fusion machine with clamps, facer (planer) and heater plate, plus a bead removal tool if required (PPI). Electrofusion: electrofusion control box with barcode reader, a stable generator or mains supply, a mechanical peeling tool, alignment and re-rounding clamps, ovality gauge, alcohol wipes and gloves, and a non-petroleum marker (PIPA POP001; PPI). All: clean lint-free cloths and isopropyl alcohol cleaner (NIBCO; PPI), heat-resistant gloves.
- **seal**: watertight and airtight or pressure: the fused plastic is continuous with the pipe wall; 'properly fused joints are absolutely leak proof' (PPI Handbook ch. 9), and they are the standard joints for PE water and gas mains (PPI; TEPPFA)
- **load**: Heavy for a plastic pipe joint: fused 'according to the pipe and/or fitting manufacturers' procedures, the joint area becomes as strong as, or stronger than, the pipe itself in both tensile and pressure properties' (PPI Handbook ch. 9). Strong in pull, pressure, bending and twist. Weak only when badly made: cold, contaminated or misaligned fusions can fail in a brittle way (Wikipedia 'Hot plate welding'; PIPA POP001).
- **adjustable**: no: NIBCO allows only 5 to 15 seconds to correct alignment after the rings meet, without twisting; after that the joint is fixed (NIBCO)
- **play_and_precision**: No play. Alignment matters while it is being made: the pipe must go in straight and square, not twisted or at an angle, or voids form (CPChem); butt fusion machines align the pipe ends and re-round them (PPI; TEPPFA); electrofusion needs clamps to keep pipe and fitting still and stress-free until cool, and out-of-round (oval) pipe leaves an uneven gap that weakens the weld (PIPA POP001).
- **access_needed**: end of a tube or shaft: socket, butt and electrofusion couplers all need cut pipe ends; electrofusion saddles and tapping tees fit on the side of an existing pipe, even while it is in service under pressure (TEPPFA; PPI)
- **materials**: Joins polyethylene (PE: HDPE, MDPE; PE80 and PE100) pipe and fittings, and polypropylene random copolymer (PP-R and PP-RCT) plumbing pipe (Wikipedia 'Electrofusion', 'Polypropylene'; TEPPFA; NIBCO). Pipe and fitting must be the same or a compatible material: PE made from unlike resins can be fused following PPI TN 13 (PPI), and electrofusion can join different wall thicknesses and PE types, while butt fusion normally needs the same wall thickness (SDR) (TEPPFA; PPI). Can't join: PVC, CPVC and ABS pipe (use solvent cement); cross-linked PEX, which is turned from a thermoplastic into a thermoset and is joined by expanding it over a fitting instead (Wikipedia 'Polyethylene'); metal pipe (use transition fittings or flange adapters, PPI). Why not glue: PE can't be solvent welded because it is non-polar and very solvent-resistant, and 'cannot be imprinted or bonded with adhesives without pretreatment', whereas 'high-strength joints are readily achieved with plastic welding' (Wikipedia 'Polyethylene'); PP at room temperature resists 'almost all organic solvents' (Wikipedia 'Polypropylene').
- **maker_difficulty**: moderate for small PP-R and PE socket fusion: irons are affordable and the steps are simple, but timing, depth and cleanliness must be right; hard for butt fusion and electrofusion, which need costly machines, and for gas lines, where trained, qualified operators are required (PPI; Wikipedia 'Electrofusion')

### Making it

- **processes**: off-the-shelf part (fusion pipe, fittings and electrofusion couplers from one pipe system), 3D print (FDM): only for marking templates, depth gauges and tool stands, never for the pressure joint
- **print_in_place**: no: the joint is made by melting pipe and fitting together; it can't be printed
- **making_tips_3d_printing**: Not applicable to the joint itself: printed PLA, PETG or ABS can't be fused to PE or PP pipe, and printed fittings shouldn't be used on pressurised water or gas lines. Printed helpers are useful: a collar that marks the weld depth on 20, 25 and 32 mm PP-R pipe and carries the heating and cooling times on its face (Printables 1747916); a marking gauge for 20 and 25 mm PP-R pipe (Printables 1240598); a stand for a PP-R welding iron (Printables 1509771); and a chamfering tool for HDPE pipe (Printables 1285647). Print helpers in a heat-resistant material and keep them clear of the 260 °C (500 °F) heater faces (NIBCO). Check any printed depth gauge against your pipe maker's table, because published depths differ (see rules_of_thumb).
- **off_the_shelf_parts**: Search terms: 'PP-R pipe welding machine' or 'socket fusion iron' with 'heater bushings' or 'welding dies' for each pipe size; 'PP-R pipe cutter' or 'pipe shears'; 'pipe chamfer tool' or 'deburring tool'; 'socket fusion depth gauge' and 'cold ring clamp' (CPChem; PPI); 'butt fusion machine', 'pipe facer', 'heater plate'; 'electrofusion coupler', 'electrofusion tee', 'electrofusion tapping tee' or 'service saddle', 'electrofusion control box' or 'electrofusion welder', 'rotary pipe peeler' or 'pipe scraper', 'alignment clamp', 're-rounding clamp', 'ovality gauge' (PIPA POP001; PPI); 'flange adapter' or 'stub flange' and 'transition fitting' for joining to metal (PPI). Buy pipe, fittings and fusion tools for the same system, because socket tools have not always been standardised: don't mix heating tools or depth gauges from different makers unless they are marked ASTM F1056 (PPI).
- **rules_of_thumb**: 
  - PP-R socket fusion (NIBCO/Webstone sheet based on the Aquatherm installer manual, https://res.cloudinary.com/dzhpkjoqj/Nibco/PP-R-Pro-IOM-Manual.pdf): iron at 'around 500° F' (260 °C); 20 mm pipe: insert 9/16 in, heat 5 s (8 s below 40 °F / 4 °C), 4 s to join, hold still 30 s, cool 1.5 min; 32 mm: 11/16 in, 8 s (12 s), 6 s, 60 s, 3 min; 63 mm: heat 24 s (36 s), 8 s, 90 s, 4.5 min. Over 100 °F (38 °C) heat slightly less, but at least 80% of the table time.
  - Insertion depths published for the same pipe differ: NIBCO gives 9/16 in (about 14 mm) for 20 mm and 5/8 in (about 16 mm) for 25 mm pipe, while a maker's printed marking gauge uses 15 mm and 18 mm (Printables 1240598). Use the depth table or gauge supplied for your own pipe system.
  - PE socket fusion (Performance Pipe PP 750-TN-07, aligned with ASTM F2620, https://www.cpchem.com/sites/default/files/2020-04/PP750-TN-07SocketFusionJoiningProcedures.pdf): heater faces 490-510 °F (254-266 °C) at every point that touches the pipe; heat the fitting first, then the pipe; join 'within 3 seconds' without twisting; hold for the table time (e.g. 6-10 s heating and 30 s cooling for 1/2 in CTS PE4710), then add 5 more minutes before stressing the joint.
  - PE butt fusion, generic PPI TR-33 procedure: heater 400-450 °F (204-232 °C) at an interfacial pressure of 60-90 psi (target 425 °F and 75 psi), and hold under pressure for 30-90 seconds per inch of pipe diameter; ASTM F2620-11 instead uses 11 minutes per inch of wall thickness (PPI 2019 comparison, https://conduitcalc.plasticpipe.org/energy/pdf/epsd-comparison-procedures-astm-fm2620-ppi-tr-33.pdf).
  - PTFE-coated hot plates must stay below 270 °C, because overheated PTFE gives off fumes that cause polymer fume fever (TWI, https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics; Wikipedia 'Hot plate welding').
  - Electrofusion (PIPA POP001 Issue 9, https://pipa.com.au/wp-content/uploads/2024/11/PIPA-POP001-Electrofusion-Jointing-of-PE-Pipes-and-Fittings-for-Pressure-Applications-Issue-9.pdf): peel at least 0.2 mm off the pipe surface with a mechanical peeler, not a hand scraper, to remove the oxidised skin; wipe with alcohol and don't touch the cleaned surface; keep clamps on through heating and cooling; never cool the joint with water; indicator pins show melt pressure but 'are not a confirmation of a successful weld'.
  - Size ranges: butt fusion is generally used on PE pipe of 40 mm to 1,600 mm and needs the same wall thickness (SDR); electrofusion from 20 mm to 2,000 mm (TEPPFA, https://www.teppfa.eu/wp-content/uploads/JointingGuideV3.pdf). Wikipedia gives socket fusion as typical for 40-125 mm, though PP-R plumbing tables start at 20 mm (Wikipedia 'Hot plate welding'; NIBCO).
  - Cut pipe square and keep it round; chamfer PE pipe of 1 1/4 in and larger (PPI Handbook ch. 9, https://conduitcalc.plasticpipe.org/pdf/chapter09.pdf), or all sizes (CPChem); 'Do not twist the pipe or fitting during or after the insertion' (PPI).

### When to use it

- **everyday_examples**: 
  - underground plastic water and gas mains made of polyethylene (PPI; TEPPFA; Wikipedia 'Electrofusion')
  - PP-R hot and cold water plumbing pipe with fused sockets (Wikipedia 'Polypropylene'; NIBCO)
  - an HDPE ring main joined with an electrofusion tee (Wikimedia Commons photo)
  - long plastic pipelines laid without digging trenches, e.g. by directional drilling (TEPPFA)
- **when_to_use**: When joining PE or PP-R pipe that must be permanent and leak-proof under pressure: water supply lines, irrigation mains, plumbing in PP-R, pond and aquaponics pipework in PE or PP-R, and (only by qualified people) gas lines. Choose socket fusion for small PP-R and PE pipe with a hand iron; butt fusion for larger pipes of equal wall thickness, where a machine is available, since it needs no extra fittings to join straight pipes (TEPPFA); and electrofusion where space is tight, for repairs, for joining different wall thicknesses or PE grades, or for branch saddles on a pipe already in service (TEPPFA). Fusion is the right answer to 'why won't my glue hold this PE or PP pipe?': PE and PP resist solvents and glues, but fuse readily with heat (Wikipedia 'Polyethylene').
- **when_not_to_use**: For PVC, CPVC or ABS pipe (use Solvent welding). For PEX, which is cross-linked and can't be melted together (use PEX expansion or other mechanical PEX fittings; Wikipedia 'Polyethylene'). Where the joint must come apart or you need to work in wet conditions or without electricity: mechanical compression fittings can be installed in the wet, need no power and can be dismantled (TEPPFA). For a one-off small repair on garden or irrigation pipe, where a compression fitting, push-fit coupler or hose barb with a clamp is simpler. Not for joining to a different plastic unless the pipe maker says the two are compatible, and not to metal (use transition fittings or flange adapters; PPI). Don't do fusion work on gas pipes unless trained and qualified as local law requires (Wikipedia 'Electrofusion'; PPI). Don't improvise with a clothes iron or heat gun on pressure pipe: use the matched tools and published times (PPI; NIBCO).
- **environment_limits**: A finished fused joint takes whatever the pipe takes (PPI). While fusing: cold weather needs longer heating (NIBCO: below 40 °F / 4 °C), and cold or gaps cause brittle 'cold welds' (Wikipedia 'Hot plate welding'); hot weather and sun can heat pipe surfaces to as much as 70 °C and electrofusion machines work only from -10 °C to 45 °C (PIPA POP001); rain, moisture and wind-blown dust spoil the weld, so shelter the joint (PIPA; TEPPFA; Wikipedia). Sunlight (UV) oxidises the pipe surface, which must be peeled before electrofusion (PIPA). Polyethylene yellows as it ages (Wikipedia 'Polyethylene').
- **safety_notes**: BURNS: socket fusion heater faces run at about 260 °C (500 °F) (NIBCO; CPChem), butt fusion heater plates run at about 204-232 °C (400-450 °F) (PPI TR-33 comparison), and freshly fused joints and melt beads stay hot; wear heat-resistant gloves, keep the iron in its stand or clamped, and have a helper hold it steady (NIBCO). SPURTING MOLTEN PLASTIC: in electrofusion 'molten polyethylene spurts out of the edge of a mis-aligned weld, causing skin burns', and there have been cases of major harm and death (Wikipedia 'Electrofusion'); a pipe not pushed fully into the fitting can also let the melt escape and 'there is also a risk of molten PE igniting' (PIPA POP001). Use alignment clamps and full insertion. GAS: a wrongly installed tapping saddle on a gas line killed two welders in a trench by gas inhalation (Wikipedia); PE gas-pipe joiners must be trained and qualified (in the US under DOT pipeline safety rules) (PPI; Wikipedia), and in the UK gas work in homes is for Gas Safe registered engineers only (HSE, for gas fittings). FUMES: TWI says fumes from hot gas welding of polypropylene and similar plastics are 'not normally likely to give cause for concern' except in confined spaces with poor ventilation, but overheated PTFE coatings on heater plates cause polymer fume fever, so keep them below 270 °C; and TWI notes that PE and PP give off benzene, a carcinogen, when laser cut (TWI). Ventilate, and don't scorch the plastic. ELECTRICITY: irons, fusion machines and electrofusion boxes run on mains or generators outdoors; use equipment with its safety devices working and keep it out of rain (PIPA POP001). PRESSURE: don't pressurise or stress the joint until it has fully cooled, then pressure test it (NIBCO; PIPA).
- **common_failures**: Socket fusion (CPChem troubleshooting table; NIBCO): (1) no cold-ring impression in the bead: depth gauge not used or heating too short; (2) gaps or voids at the socket edge: pipe pushed in or pulled out at an angle, or twisted; (3) wrinkled or collapsed pipe end and voids: heating the pipe before the fitting, so it heats too long; (4) unbonded pipe end or melt beyond the pipe end: cold ring set too deep or too shallow; (5) rough, bubbly or pock-marked bead: oil or hydrocarbon contamination; (6) leaks from cracked or oval pipe, dirty surfaces, pushing the pipe too far into the iron, letting parts cool before joining, or stressing the joint before it sets (NIBCO). Butt fusion: (7) cold welds from low temperature or a gap, contamination in dry, windy places, and under-penetration from loose clamps (Wikipedia 'Hot plate welding'); (8) unequal wall thicknesses (TEPPFA). Electrofusion (PIPA POP001): (9) brittle welds when the oxidised surface layer isn't fully peeled; (10) contamination from hands, sweat, sunscreen or soap; (11) oval pipe or a pipe not inserted to full depth; (12) movement before cooling because clamps were removed early; (13) the generator cutting out mid-weld; (14) trusting indicator pins as proof of a good weld.
- **related**: 
  - Solvent welding (solvent cement): the cold chemical way to join PVC, CPVC and ABS pipe; doesn't work on PE or PP
  - Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun): freehand welding with a filler rod, for tanks, sheets and repairs rather than pressure pipe
  - Compression fitting (ferrule fitting): mechanical fitting with a grip ring and seal, used on PE water pipe; can be undone, needs no power and works in the wet (TEPPFA)
  - Quick couplers for tubes and hoses (push-to-connect, sleeve lock): push-fit fittings for small plastic pipe; quick, reusable, lower pressure
  - Hose barb (barbed tube fitting) and Hose clamp (worm-drive clamp, ear clamp, spring hose clamp): for flexible hose and low-pressure irrigation tube
  - Gasket (flat, cord-in-groove or cast-in-place): PE pipe joins to valves and metal pipe through a fused flange adapter with a gasket and bolted backing ring (TEPPFA; PPI)
  - Friction-welded plastic (rotary-tool friction welding, spin welding): heat made by rubbing, for small round plastic parts
  - Heat-sealed seam (heat-sealed plastic film and coated fabric): the same heat-and-press idea for thin film
  - Welded metal joint (fusion welding; stick, MIG, TIG and gas welding): the metal-pipe equivalent

### Pictures, videos and models

- **links**: 
  - [PE Pipe Joining Procedures, Chapter 9 of the PPI Handbook of PE Pipe (Plastics Pipe Institute)](https://conduitcalc.plasticpipe.org/pdf/chapter09.pdf): Drawings and photos of butt fusion, saddle fusion, socket fusion and electrofusion joints, a butt fusion machine and an electrofusion control box *(licence: link only)*
  - [Guide to the Selection of Jointing Methods for Polyethylene Pressure Pipes (TEPPFA AGU/2017/1)](https://www.teppfa.eu/wp-content/uploads/JointingGuideV3.pdf): Sketches and sections of butt fusion and electrofusion joints, a butt fusion machine and an electrofusion indicator *(licence: link only)*
  - [Electrofusion coupler(1).jpg (Wikimedia Commons, by BildHQ)](https://commons.wikimedia.org/wiki/File:Electrofusion_coupler(1).jpg): An electrofusion coupler with the two terminals where the control box leads plug in to heat the coils inside *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Tapping tee on PE pipe, saddle mount, clamped and elektrofusion welded.jpg (Wikimedia Commons, by PalmölCroissant299)](https://commons.wikimedia.org/wiki/File:Tapping_tee_on_PE_pipe,_saddle_mount,_clamped_and_elektrofusion_welded.jpg): An electrofusion tapping tee clamped and welded onto the side of a PE gas main *(licence: CC0 (public domain dedication))*
  - [Hot plate welding pressure history.svg (Wikimedia Commons, by Missstarsineyes)](https://commons.wikimedia.org/wiki/File:Hot_plate_welding_pressure_history.svg): Graph of pressure against time through the matching, heating, change-over and joining phases of hot plate (butt) welding *(licence: CC BY-SA 4.0 (reuse with credit))*
- **make_it_yourself**: 
  - [Template for welding PPR water pipes (Printables 1747916; URL from Printables API, page not opened)](https://www.printables.com/model/1747916-template-for-welding-ppr-water-pipes-sablona-pro-s): A collar for 20, 25 and 32 mm PP-R pipe that marks the weld depth and shows recommended heating and cooling times *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Marking PPL pipes for welding (Printables 1240598; URL from Printables API, page not opened)](https://www.printables.com/model/1240598-marking-ppl-pipes-for-welding): A marking gauge for 20 and 25 mm polypropylene pipe: push the pipe in to the stop and mark the insertion depth *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [stand for PP-R pipe welding machine (Printables 1509771; URL from Printables API, page not opened)](https://www.printables.com/model/1509771-stand-for-pp-r-pipe-welding-machine): A printed stand to hold a PP-R socket fusion iron *(licence: Public domain (Creative Commons Public Domain))*
  - [PE pipe deburring sharpener tool for beveler (Printables 1285647; URL from Printables API, page not opened)](https://www.printables.com/model/1285647-pe-pipe-deburring-sharpener-tool-for-beveler): A printed chamfering tool body for HDPE pipe ends, using a 52-53 mm blade *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: Three side-by-side cut-away panels: socket fusion (iron with male and female heater faces melting pipe and socket, then the pipe pushed in to its depth mark), butt fusion (two faced pipe ends against a heater plate, then pressed together with a rolled bead each side) and electrofusion (pipe in a coupler with heating coils, a control box lead and a fusion indicator popping up).
- **sources**: 
  - https://conduitcalc.plasticpipe.org/pdf/chapter09.pdf
  - https://conduitcalc.plasticpipe.org/energy/pdf/epsd-comparison-procedures-astm-fm2620-ppi-tr-33.pdf
  - https://res.cloudinary.com/dzhpkjoqj/Nibco/PP-R-Pro-IOM-Manual.pdf
  - https://www.cpchem.com/sites/default/files/2020-04/PP750-TN-07SocketFusionJoiningProcedures.pdf
  - https://pipa.com.au/wp-content/uploads/2024/11/PIPA-POP001-Electrofusion-Jointing-of-PE-Pipes-and-Fittings-for-Pressure-Applications-Issue-9.pdf
  - https://www.teppfa.eu/wp-content/uploads/JointingGuideV3.pdf
  - https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics
  - https://en.wikipedia.org/wiki/Electrofusion
  - https://en.wikipedia.org/wiki/Hot_plate_welding
  - https://en.wikipedia.org/wiki/Polyethylene
  - https://en.wikipedia.org/wiki/Polypropylene
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://www.hse.gov.uk/gas/employers.htm
  - https://commons.wikimedia.org/wiki/File:Electrofusion_coupler(1).jpg
  - https://commons.wikimedia.org/wiki/File:Electrofusion_Welding_of_HDPE_Pipe.jpg
  - https://commons.wikimedia.org/wiki/File:Tapping_tee_on_PE_pipe,_saddle_mount,_clamped_and_elektrofusion_welded.jpg
  - https://commons.wikimedia.org/wiki/File:Hot_plate_welding_pressure_history.svg
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
- **tools**: press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

## 409 Ultrasonic weld (ultrasonic plastic welding, energy director)

*welding, brazing & soldering.* A tool vibrating at 15 to 40 kHz presses two plastic parts together and the vibration melts a small ridge between them in a moment, sealing them shut with no screws or glue, as in sealed chargers, toys and blister packs

*Also covers:* Also covers energy directors and shear joints, ultrasonic welding of prints, and laser, infrared, hot-plate and RF welding as mentions. Safety: keep hands away from the horn; noise

### What it is

- **plain_name**: A machine with a buzzing metal tool presses two plastic parts together and shakes them thousands of times a second, so a small ridge between them melts in under a second and the parts fuse shut for good, with no screws or glue; it is why many chargers, toys and blister packs have no way in
- **term**: Ultrasonic welding of plastics (ultrasonic plastic welding), usually with an energy director or shear joint
- **aliases**: 
  - ultrasonic welding, ultrasonic plastic welding, ultrasonic plastics assembly, ultrasonic bonding, ultrasonic sealing, 'sonic welding' (Wikipedia 'Ultrasonic welding'; Dukane 'Joint Design for Ultrasonic Plastic Bonding'; Herrmann)
  - horn = sonotrode = welding horn; booster or booster horn; converter = piezoelectric transducer; generator = power supply; nest = anvil = holding fixture (Wikipedia; DuPont Design Guide Module I, pp. 95-99)
  - energy director (ED): the small triangular (sometimes round) ridge moulded or printed on one part; energy director butt joint (Branson; Dukane; Herrmann)
  - shear joint = interference joint, called a 'mash joint' by Herrmann; step joint; tongue-and-groove joint; double V joint (DuPont pp. 100-102; Dukane; Herrmann)
  - near-field and far-field welding (horn close to, or far from, the joint) (DuPont p. 103)
  - ultrasonic spot welding (the horn tip pushes through the top sheet, no energy director needed); ultrasonic stud welding; ultrasonic staking or heading; ultrasonic swaging; ultrasonic insertion (Herrmann; DuPont p. 108; Branson 2016)
  - continuous or rotary ultrasonic seam welding of film, foil and fabric; ultrasonic sewing or sealing of nonwovens (e.g. masks and gowns) (Wikipedia 'Ultrasonic welding')
  - ultrasonic metal welding (wire splices, battery foils and tabs, wire bonding on chips) (Wikipedia 'Ultrasonic welding')
  - machine brands a beginner may meet in searches (brands): Branson (Emerson), Dukane, Herrmann Ultraschall, Sonics & Materials, Sonotronic
  - industrial cousins mentioned in this entry: laser transmission welding, infrared (IR) welding, hot-plate (heated tool) welding, radio-frequency (RF) welding = high-frequency (HF) welding = dielectric welding, vibration welding (Wikipedia 'Plastic welding')
- **family**: welding, brazing & soldering
- **other_families**: seals & pass-throughs, print-in-place & 3D-printing joints
- **one_liner**: Ultrasonic welding presses two thermoplastic parts together under a horn that vibrates at about 15-40 kHz; the rubbing and internal heating melt a small ridge (energy director) or a slight overlap (shear joint) where the parts meet, and in well under a second they fuse into one sealed, permanent piece.
- **complexity**: Single piece once welded. The joint itself is just shaped plastic: an energy director ridge, a step, a tongue and groove, or a slight overlap (interference) moulded or printed into the two parts. The machine is a small assembly: a generator (power supply), a converter (piezoelectric transducer), an optional booster, a horn (sonotrode) shaped to the part, a press (usually pneumatic or electric) to push the horn down, a nest (fixture or anvil) that holds the lower part, and a controller (Wikipedia 'Ultrasonic welding'; DuPont Module I, pp. 95-99).
- **how_it_works**: A converter turns an electrical signal into a tiny up-and-down vibration, typically at 15, 20, 30, 35 or 40 kHz; the booster and horn enlarge it (to roughly 5-50 micrometres, Herrmann) and press it into the top part while the bottom part sits in a rigid fixture (Wikipedia 'Ultrasonic welding'). The vibration heats the plastic by internal flexing and rubbing (hysteresis and frictional heating, Branson 2016), most strongly where the parts touch: a sharp ridge called an energy director concentrates the energy, melts first and flows across the joint, and once it softens 'further melting occurs at a faster rate' (DuPont p. 102). In a shear joint the parts overlap slightly, so the plastic melts along the vertical walls as the lid telescopes into the base, and the smeared melt seals the joint without being exposed to air (DuPont pp. 100-101). The vibration then stops, the press holds the parts together for a fraction of a second while the melt freezes, and the two parts are one piece (DuPont p. 103-104). Related ways to melt a plastic joint without vibration include a laser shone through one clear part onto a dark one (laser transmission welding), a hot plate or infrared heater that melts both faces before they are pushed together, and radio waves that heat polar plastics such as PVC (RF welding) (Wikipedia 'Plastic welding').

### Finder attributes

- **job**: 
  - join and hold: permanently joins two plastic parts, such as the two halves of a case (Wikipedia 'Ultrasonic welding')
  - glue or bond: a melted (material) bond made without glue, solvent or screws; Wikipedia calls it 'a good automated alternative to glue, screws or snap-fit designs'
  - seal it, or pass cables or fluid through: shear and tongue-and-groove joints give leak-free, even gas-tight, housings such as butane lighters (Wikipedia; Dukane; DuPont p. 117)
- **motion**: none
- **degrees_of_freedom**: 0: the two parts become one rigid piece.
- **special_behaviour**: 
  - self-aligning or self-centring: only while welding, and only with some joint designs. A step joint or tongue and groove locates and centres the two halves before the melt starts (Herrmann calls this the 'Tetris effect'; Dukane). Once welded it is a plain permanent joint with no other special behaviour.
- **holding_principle**: material bond (glue, solvent or melting): the two parts melt where they touch and fuse. (The related ultrasonic staking and swaging hold by shape instead, see Heat staking.)
- **input_output**: not applicable
- **power**: passive (no power needed) once welded. Making the weld needs a powered ultrasonic welder, a mains-powered generator driving a piezoelectric converter (Wikipedia; DuPont p. 97).
- **removability**: permanent: the halves can only be pried, cracked or cut apart. iFixit says welded power-supply cases are 'hard to separate' and suggests prying them 'strategically' or cutting with a rotary tool and cut-off wheel (iFixit Answers, 2024).
- **reuse_cycles**: once
- **tools_needed**: To make: an ultrasonic welder (generator, converter, booster, a horn tuned to the machine's frequency, and a press or stand), plus a fixture (nest) shaped to hold the lower part. DuPont says horns must resonate very near the operating frequency and are best designed and tuned by equipment makers; simple aluminium step horns can be made in a lab for prototype welds but fatigue, get nicked and mark parts (DuPont pp. 98-99). Hand-held ultrasonic welders also exist (e.g. Herrmann's 'HSG handheld ultrasonic welder' product page). Wear hearing protection and safety glasses (Wikipedia). To undo: plastic opening picks or a thin blade to pry along the seam, or a rotary tool with a cut-off wheel (iFixit).
- **seal**: airtight or pressure, with the right joint. A shear joint 'provides the best path to a leak-free assembly' (Dukane) and is 'the best joint for strong, hermetic seals' (DuPont p. 100); a tongue-and-groove energy director joint is 'the easiest and most robust option' for sealed parts (Dukane). Butane lighters and other hermetic containers are ultrasonically welded and burst-tested (Wikipedia; DuPont p. 105). A plain energy-director butt joint 'provides a strength-only bond' (Dukane) and may not seal complex parts, and butt joints in crystalline plastics rarely seal (DuPont pp. 101-102). With FDM-printed parts, Branson warns that 'creating a consistent hermetic joint may be impossible' because of gaps between layers and print paths.
- **load**: Medium to heavy for a plastic joint, depending on joint design and weld area. A shear joint telescoped 1.25-1.5 times the wall thickness can be stronger than the walls next to it (DuPont pp. 100-101), and a stud weld whose depth is half the stud diameter is stronger than the stud (DuPont p. 108). A bare energy-director butt joint gives less fused area and is weaker. With crystalline plastics such as acetal and nylon, DuPont says it is 'extremely difficult to produce strong joints or hermetic seals' (p. 101). Glass fibres do not cross the weld, so a weld in glass-filled nylon is only as strong as the unfilled plastic unless the joint area is made larger (DuPont pp. 106-107). Printed parts: layers 'may separate during the ultrasonic welding process, or during testing' (Branson 2016). In a lab study of FDM lap joints, ABS/ABS welds were about as strong in shear as the printed base material and PLA/PLA welds were stronger than it, while mixed ABS/PLA welds were weakest (Tiwary et al. 2025). Weakest directions: peeling or prying apart at the seam edge, and across the layer lines of a print ⚑ [uncertain: no peel test data found]. *(⚑ parts need confirming)*
- **adjustable**: no: fixed once welded
- **play_and_precision**: No play once welded. The parts must be held in line in a rigid fixture so pressure is even around the joint; if the lower part just sits on the table, both parts 'may slide out from under the horn' because the vibration cancels friction (DuPont p. 99). Parallel alignment matters most for butt joints and where finished dimensions are critical; the shear joint tolerates more warpage (DuPont p. 105). The parts move closer as the energy director or overlap melts (collapse), and the depth of weld can be measured to check a shear joint (DuPont p. 105). Shear joints need tight moulding tolerances: Branson gives an interference of 0.008 in (0.2 mm) with a tolerance of +/-0.001 in (0.025 mm) for parts under 0.75 in (19 mm). Step and tongue-and-groove joints locate the parts before welding (Dukane; Herrmann).
- **access_needed**: both sides: the horn presses on one part from above while a rigid fixture (nest or anvil) supports the other part from below, and the horn should touch the part directly above and close to the joint (near-field welding) (DuPont pp. 99, 103; Branson 2016). To undo a welded case you only need to reach the seam from outside (iFixit).
- **materials**: Thermoplastics only. Amorphous plastics weld most easily: ABS, polystyrene, polycarbonate and acrylic (PMMA) are rated 'welded well and with ease' (Herrmann), and Branson calls ABS 'one of the easiest polymers to ultrasonically weld'. Semi-crystalline plastics such as nylon (PA), acetal (POM), PET, PP and PE need more energy, a shear joint or a sharper 60-degree energy director, and soft plastics such as polyethylene can only be welded with the horn right at the joint (near field) (DuPont pp. 100-103; Branson 2016; Dukane). Herrmann says 'Apart from PTFE, all thermoplastic materials can be welded', but 'Only identical thermoplastic materials can be welded homogeneously'; in a printed-parts study, ABS welded to PLA gave the weakest joints and the authors advise against that pair (Tiwary et al. 2025). Cannot weld: thermosets and elastomers (Herrmann; Branson), and resin (SLA, DLP, PolyJet) prints, because photopolymers 'cannot be melted, reshaped, or joined' this way (Branson 2016); a 2017 Formlabs forum reply says acrylic-based resins tend to 'burn and crumble' rather than melt. FDM prints in ABS, PLA and other weldable filaments can be welded with caveats (Branson 2016; Tiwary et al. 2025), and a Printables tester reports printed ASA, ABS and PA6-CF stakes welded to moulded PP passing a tensile test (Printables 833859). Wet nylon, pigments, flame-retardant additives and mould-release agents all make welding harder (DuPont pp. 106-107; Herrmann). Thin, soft metals (aluminium, copper, nickel foils, wires and battery tabs) can be welded on special ultrasonic metal welders, and fabrics and nonwovens can be ultrasonically sealed (Wikipedia).
- **maker_difficulty**: hard: you need an ultrasonic welder with a horn tuned to it and a fixture, which home makers rarely have; printing an energy director or shear joint into a part is easy, but printed parts weld 'sometimes', and not reliably (Branson 2016). Easier home alternatives are friction welding, a melted plastic weld or solvent welding.

### Making it

- **processes**: 
  - off-the-shelf part: the usual case is injection-moulded parts with the joint moulded in, welded on a production machine (Wikipedia; DuPont)
  - 3D print (FDM): prototype parts with printed energy directors or shear joints can be welded, with limits on strength, sealing and repeatability; ABS, PLA, ASA and PA6-CF prints have been welded (Branson 2016; Tiwary et al. 2025; Printables 833859)
  - 3D print (resin): no, because photopolymer resins cannot be ultrasonically welded; resin-printed injection moulds can make short runs of weldable test parts instead (Branson 2016)
  - CNC: machined thermoplastic parts weld more consistently than printed ones (Branson 2016 groups 'injection molded, extruded, or machined parts' together)
  - laser cut and sheet: flat thermoplastic sheets can be ultrasonically spot welded with no energy director, as the horn tip pushes through the top sheet (Herrmann)
- **print_in_place**: no: the two halves are printed separately and welded afterwards on an ultrasonic welder
- **making_tips_3d_printing**: Only worth trying if you have access to an ultrasonic welder (for example at work, a lab or a makerspace); with a normal home kit, use friction welding, a melted plastic weld or solvent welding instead. A 2020 Prusa forum reply put it this way: there are 'probably easier ways to adhere PLA parts for the home gamer from glues to stir-welding'. Material: use the same weldable thermoplastic for both halves (ABS, PLA, PETG-type or nylon filaments; not resin). ABS welded to PLA gave the weakest joints in a 2025 study (Tiwary et al.), and Branson warns that 'Digital ABS' and other photopolymers that mimic ABS 'will not ultrasonically weld'. Energy director: a moulded ED is a sharp ridge 0.25-0.75 mm tall (Dukane) or 0.010-0.020 in (0.25-0.5 mm) tall with a 90-degree point for amorphous plastics and 60 degrees for semi-crystalline ones (Branson), but FDM can't print a sharp point that small. Branson's printed ED came out as a rectangle 0.014 in tall by 0.022 in wide (0.36 x 0.56 mm), and Tiwary et al. printed EDs 1-2 mm in size because 'Printing below 1 mm is challenging with FDM'. In that study, triangular and semicircular printed EDs worked better than rectangular ones. Run the ridge along the print path (perimeters) so it prints as a clean continuous bead, and expect printing orientation to change the result: Branson found a weld joint 'printed in three different orientations will produce different results'. Infill: print every wall between the horn contact face and the joint, and between the joint and the support face, at 100% infill, as internal voids stop the vibration reaching the joint (Branson); Tiwary et al. found infill above 20% gave defect-free welds and 50% infill gave their best result, a sign that solid walls near the joint matter most. Horn and support faces: add a flat raised pad directly above the joint so a plain flat horn can touch it, and give the lower part a flat base under the joint so it can sit on a hard flat surface without a custom fixture (Branson). Keep support material away from weld areas, because removing it damages the joint faces (Branson). Shear joints are hard to print because they need interference held to about +/-0.025 mm (Branson), so use energy-director or tongue-and-groove joints for prints. Settings reported in one study: a 20 kHz, 1500 W welder, welding time about 1.5-2 s, 80-100% amplitude, then about 2 minutes in the fixture to cool and avoid warping (Tiwary et al. 2025). Typical failures: layers splitting apart under the vibration, leaks through gaps between layers or print paths, and inconsistent results from part to part (Branson).
- **off_the_shelf_parts**: Search terms: 'ultrasonic plastic welder' or 'ultrasonic welding machine' (press type), 'ultrasonic generator', 'ultrasonic converter' or 'piezoelectric transducer', 'booster', 'horn' or 'sonotrode', 'welding fixture' or 'nest', 'handheld ultrasonic welder' or 'ultrasonic spot welder', 'ultrasonic staking horn' and 'ultrasonic insertion' (Wikipedia; Herrmann; DuPont). Machine makers include Branson (Emerson), Dukane, Herrmann Ultraschall and Sonotronic (brands). Cheaper imported hand-held ultrasonic spot welders, often listed at 28 or 35 kHz, are widely sold online ⚑ [uncertain: seen only in search results, no listing opened]. Ear defenders or earplugs rated for high-frequency noise, and safety glasses. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Operating frequency: the converter, booster and horn are tuned to the same frequency, 'Typically 15, 20, 30, 35 or 40 kHz'; weld times are 'often below one second' (Wikipedia, https://en.wikipedia.org/wiki/Ultrasonic_welding). Herrmann gives 15-70 kHz with a horn amplitude of 5-50 micrometres (https://www.herrmannultraschall.com/en/welding-using-ultrasonics/welding-plastics/ultrasonic-welding-of-plastics), while DuPont gives 0.05-0.15 mm (50-150 micrometres) of total movement as suitable for welding its engineering plastics (DuPont Module I, p. 98); the sources disagree, so treat amplitude as something to tune with the machine maker.
  - Energy director height: 0.25-0.75 mm (Dukane, https://www.dukane.com/resources/blog/item/choosing-the-right-join-design-for-ultrasonic-plastic-bonding); 0.010-0.020 in (0.25-0.5 mm) with an included angle of 90 degrees for amorphous and 60 degrees for semi-crystalline plastics, tip radius 0.002 in (0.05 mm) or less, and an optional texture 0.003-0.006 in deep on the facing part (Branson, https://www.engineering.com/how-to-ultrasonically-weld-3d-printed-parts/); 0.4 mm high with a 90-degree point for walls 1.5-3 mm thick, scaled for other walls (DuPont Design Guide Module I, p. 101, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).
  - Shear joint: interference 0.2-0.4 mm, a 0.5-0.8 mm locating step, and weld depth 1.25-1.5 x wall thickness for full strength; the walls must be supported by a close-fitting fixture (DuPont Module I, pp. 100-101). Branson gives an interference of 0.008 in (+/-0.001 in) for parts under 0.75 in and about 0.014 in (+/-0.003 in) for parts 1.5-3.0 in (https://www.engineering.com/how-to-ultrasonically-weld-3d-printed-parts/).
  - Stud welding: radial interference 0.25-0.4 mm for studs up to 13 mm diameter, weld depth 0.5 x stud diameter so the stud breaks before the weld, at least 0.4 mm lead-in, and a boss outside diameter at least 2 x the stud diameter; more interference only lengthens the weld time (DuPont Module I, pp. 108-109).
  - Process settings (DuPont engineering plastics): amplitude about 0.10-0.15 mm peak-to-peak, hold time 0.3-0.5 s, boosters from 0.4:1 up to 2.5:1; high amplitude needs low pressure and low amplitude needs high pressure (DuPont Module I, pp. 103-104).
  - Horn size: a bar or hollow horn's width is usually limited to about a quarter of the sound's wavelength in the horn, about 65-75 mm for standard titanium horns, unless slotted (DuPont Module I, p. 98).
  - Put the horn directly above and close to the joint (near field); soft plastics such as polyethylene can only be welded this way (DuPont Module I, p. 103).
  - Nylon must be welded dry: 1-2 days at 50% relative humidity and 23 deg C can cut weld quality by 50% or more; pigments may need 50% longer weld times (DuPont Module I, p. 107).
  - 3D-printed parts: print walls between horn, joint and support at 100% infill, add flat horn-contact and support faces, and keep support material off weld areas (Branson, https://www.engineering.com/how-to-ultrasonically-weld-3d-printed-parts/); printed energy directors were made 1-2 mm because features below 1 mm are hard to print with FDM (Tiwary et al. 2025, https://www.techscience.com/cmc/v84n3/63180/html).

### When to use it

- **everyday_examples**: 
  - mains chargers and power adapters whose cases have no screws: iFixit says 'These power supply cases are ultrasonically welded together' (iFixit Answers, DualSense charging-station adapter)
  - plastic toys: the first application of ultrasonic plastic welding 'was in the toy industry' (Wikipedia); Herrmann pictures a toy elephant's parts joined this way
  - blister packs, sealed tubes and containers, and plastic-coated milk and juice cartons (Wikipedia)
  - disposable butane lighters, TV remote controls, print cartridges and USB flash drives (Wikipedia; DuPont p. 117; Herrmann)
- **when_to_use**: In manufacturing: to close plastic housings permanently in a fraction of a second with no screws, glue, solvent or drying time, often with a sealed joint, for many identical parts (Wikipedia; Herrmann). It suits small to medium parts such as electronics cases, toys, filters, lighters and packaging, and lets designers drop screws and gaskets. For makers: when designing a product that will be injection moulded and welded, so the energy director or shear joint is in the design from the start (Dukane; DuPont). If you can use a welder at work or at a makerspace, it can also join FDM prototype parts in weldable plastics, for example to build parts bigger than the print bed (Tiwary et al. 2025), as long as you accept that the result is less repeatable than with moulded parts (Branson 2016). It is also worth knowing about when a gadget won't open: no screws and a fine seam usually mean an ultrasonically welded case (iFixit).
- **when_not_to_use**: At home without an ultrasonic welder: use Friction-welded plastic, Melted plastic weld (soldering iron or hot air), Solvent welding for ABS and acrylic, or Cyanoacrylate. When the product must be opened for repair or battery replacement: use screws (Self-tapping screw into plastic, Heat-set threaded insert) or a Cantilever snap fit. For resin prints, thermosets, rubbers and PTFE, which can't be ultrasonically welded (Branson 2016; Herrmann). For two different plastics (e.g. ABS to PLA), which bond weakly (Tiwary et al. 2025): use glue or a mechanical joint, or Heat staking to hold plastic to metal. For parts with thin metal springs or fragile features, which the vibration can break (DuPont pp. 103, 117). Where the horn can't reach close to the joint, or for very large parts: horn width is limited to about 65-75 mm without slots (DuPont p. 98), so industry uses hot-plate or vibration welding for big parts (Wikipedia 'Hot plate welding', DuPont p. 117). For round parts: Friction-welded plastic (spin welding) is cheaper and simpler (DuPont p. 77). For PVC film and coated fabric: RF (high-frequency) welding or a Heat-sealed seam. For a clear part on a dark part with a hidden seam: laser transmission welding (Wikipedia 'Plastic welding').
- **environment_limits**: Once welded, the joint is the same plastic as the parts, so it shares their heat, UV and chemical limits ⚑ [uncertain: no figures found specifically for ultrasonically welded joints]. Things that weaken the weld before or during welding: moisture in nylon (1-2 days at 50% RH can halve weld quality, DuPont p. 107), pigments, flame-retardant additives and mould release (DuPont p. 107; Herrmann), and glass fibres, which do not cross the weld (DuPont p. 106). During welding the vibration spreads through the whole part and can crack or melt it at sharp inside corners, holes and unsupported tabs far from the joint (DuPont p. 103). Welded plastic joints creep under constant load like the base plastic, and creep-rupture tests are very sensitive to temperature: 'a temperature change of 1 degree Celsius affected the creep rupture time by 13%' in some cases (Wikipedia 'Plastic welding'). *(⚑ parts need confirming)*
- **safety_notes**: HORN AND PRESS: 'operators must never place hands or arms near the welding tip when the machine is activated' (Wikipedia 'Ultrasonic welding'); the press closes with force, so keep fingers out of the gap between horn and fixture. NOISE: 15 and 20 kHz welders 'typically emit a potentially damaging high-pitched squeal in the range of human hearing', and large parts nearby can buzz with audible sub-harmonics (Wikipedia). One 20 kHz welder measured 108.5 dB (equivalent level) and 126.6 dB (maximum) in its 20 kHz band, above the Polish workplace limits of 90 dB over 8 hours and 110 dB maximum for that band; an acoustic enclosure cut this by 25 dB (Dobrucki et al., Archives of Acoustics 2010). Wear hearing protection and safety glasses (Wikipedia). HEAT AND ELECTRICITY: hazards 'include exposure to high temperatures and voltages', and covers and guards may only be removed with the power off, by a trained person (Wikipedia). FUMES AND BURNING: normal welding needs no fume extraction (Wikipedia), but overwelding scorches plastic; PP and PVC 'burn very quickly' and burning PVC 'forms hydrochloric acid' (Herrmann). In the related RF welding, melting urethane 'has been known to give off toxic cyanide gasses' (Wikipedia 'Plastic welding'). FLYING PIECES: vibration can make thin tabs or springs on a part break off (DuPont p. 103). OPENING WELDED CHARGERS: cutting or prying open a mains charger exposes parts meant to stay sealed away; this entry gives no mains repair steps, and Hertfordshire Fire and Rescue advises 'Replace unsafe or counterfeit chargers and leads'. Mains work must follow local law.
- **common_failures**: (1) Overwelding: weld time too long gives heavy flash, degraded plastic, leaks in sealed parts, horn marks on the surface, and melting or cracking away from the joint at holes, weld lines and sharp corners (DuPont p. 103). Underwelding leaves an incomplete seal (Wikipedia, on cartons). Fix: tune amplitude and pressure first, then weld time (DuPont p. 106). (2) Parts slipping or misaligned: the vibration cancels friction, so parts slide out from under the horn unless held in a fitted fixture; uneven flash shows that the fixture needs shimming (DuPont pp. 99, 105). (3) Horn too far from the joint (far field): energy is lost on the way and the plastic melts under the horn instead (DuPont p. 103). (4) Energy director melt freezing too soon in crystalline plastics (nylon, acetal, PET): weak, brittle or leaky butt joints; use a shear joint or a 60-degree director (DuPont p. 102; Branson). (5) Fixture resonating: an anvil about half a wavelength long vibrates with the horn and gives 'annoying squeals and howls' and poor welds (DuPont p. 99). (6) Wet nylon, pigments or mould release reducing weld strength (DuPont p. 107). (7) Printed parts: layers splitting, leaks through gaps between paths, energy directors printing blunt, and low infill blocking the vibration (Branson 2016); dissimilar printed plastics (ABS/PLA) bonding weakly (Tiwary et al. 2025). (8) Resin prints charring or crumbling instead of melting (Formlabs forum). (9) When opening a welded case: cracking or scratching the halves, because the weld is meant to be permanent (iFixit).
- **related**: 
  - Heat staking (melted plastic rivet): the same machines can melt a plastic post into a rivet head (ultrasonic staking) to hold metal or other non-weldable parts; a shape lock, not a fused seam
  - Heat-set threaded insert: metal inserts can also be pushed into plastic ultrasonically (ultrasonic insertion), giving reusable threads instead of a permanent seam
  - Friction-welded plastic (rotary-tool friction welding, spin welding): also melts by rubbing, but with slow, large movements (spin, or 100-300 Hz vibration welding); doable at home, and spin welding suits round parts
  - Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun): the home-workshop way to fuse plastic seams with outside heat and a filler rod
  - Heat-sealed seam (heat-sealed plastic film and coated fabric): film and fabric sealing with heat; RF (high-frequency) welding of PVC and ultrasonic sealing are its industrial cousins
  - Heat-fused plastic pipe (socket fusion, butt fusion, electrofusion): hot-plate style fusion of PE and PP pipe; Wikipedia says hot-plate welding is slower (10 s to minutes) but works on almost all thermoplastics and large parts
  - Solvent welding (solvent cement): dissolves instead of melts; works at home on ABS, acrylic, PVC and polystyrene, but needs drying time
  - Cantilever snap fit and Annular snap fit: moulded clips that can be designed to open again; Wikipedia names ultrasonic welding as an automated alternative to snap fits
  - Self-tapping screw into plastic (thread-forming screw): a joint that can be undone for repair
  - Cyanoacrylate (superglue) and Two-part epoxy: glues for joining or re-closing a case that was pried open
  - Spot weld (resistance spot welding): the metal-sheet equivalent of a quick press-and-fuse joint; ultrasonic metal welding is used instead for thin foils, wires and battery tabs (Wikipedia)
  - Welded metal joint (fusion welding): melts metal with an arc or flame; a different process for a different material that shares the word 'weld'

### Pictures, videos and models

- **links**: 
  - [Ultrasonic Welding of Plastics (Herrmann Ultraschall)](https://www.herrmannultraschall.com/en/welding-using-ultrasonics/welding-plastics/ultrasonic-welding-of-plastics): Animated drawings (GIFs) of each joint design it describes: step joint, tongue and groove, mash (shear) joint, staking, double V joint, swaging and spot welding *(licence: link only)*
  - [Ultrasonic Welding: Can it be used with 3D Printed Parts? (Trevor Larcheveque, Branson Ultrasonics, engineering.com, 2016)](https://www.engineering.com/how-to-ultrasonically-weld-3d-printed-parts/): Photos comparing injection-moulded and 3D-printed energy-director and shear-joint test parts, drawings of an energy director and a shear joint, and a sketch of flat horn-contact and support faces on a printed part *(licence: link only)*
  - [Ultraschall-Schweißmaschine.jpg (Wikimedia Commons, by Herrmann Ultraschalltechnik GmbH & Co. KG)](https://commons.wikimedia.org/wiki/File:Ultraschall-Schwei%C3%9Fmaschine.jpg): Photo of an ultrasonic welding machine, supplied by the machine maker *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Ultrasonic welding of two polystyrene half-shells with inserted drinking straw - Sonotronic GmbH (YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=mSnDKx-UV8M): Two moulded polystyrene half-shells being welded shut around a drinking straw (described from the title) *(licence: link only)*
  - [Ultrasonic welding (Wikipedia)](https://en.wikipedia.org/wiki/Ultrasonic_welding): Plain overview with photos, including a sonotrode rolling along a foil seam (Commons 'Ultrasonic Welding.JPG', CC BY-SA 3.0 / GFDL) and a butane lighter as a sealed welded product *(licence: CC BY-SA 4.0 text; images per file)*
- **make_it_yourself**: 
  - [heat stake and ultrasonic welding test (Printables 833859; URL from Printables API, page not opened)](https://www.printables.com/model/833859-heat-stake-and-ultrasonic-welding-test): A printable test stake for pull-testing ultrasonic welds and heat staking of printed materials; the author reports that ASA, ABS and PA6-CF passed when welded to injection-moulded PP *(licence: Creative Commons Public Domain)*
  - [Ultrasonic Welding of Similar/Dissimilar MEX-3D Printed Parts Considering Energy Director Shape, Infill, Welding Time and Amplitude (Tiwary, Arunkumar P. and Malik, Computers, Materials & Continua 2025)](https://www.techscience.com/cmc/v84n3/63180/html): An open-access recipe for printed lap-shear test coupons (96 x 25 x 4 mm, with rectangular, semicircular and triangular energy directors and alignment tabs) and the weld settings that worked, to copy if you can use a welder *(licence: CC BY 4.0)*
- **diagram_idea**: A cut-away side view of a small box and lid in a fixture under a horn: the generator, converter, booster and horn stacked above, a tiny double-headed arrow on the horn labelled '20,000 times a second', a close-up of the triangular ridge on the lid's edge squashing and melting into a flat seam, and a second close-up of a shear joint where the lid's slightly oversized edge melts as it slides down into the box, with a small hearing-protection icon beside the machine.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ultrasonic_welding
  - https://en.wikipedia.org/wiki/Plastic_welding
  - https://en.wikipedia.org/wiki/Hot_plate_welding
  - https://en.wikipedia.org/wiki/Radio-frequency_welding
  - https://www.dukane.com/resources/blog/item/choosing-the-right-join-design-for-ultrasonic-plastic-bonding
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.engineering.com/how-to-ultrasonically-weld-3d-printed-parts/
  - https://www.herrmannultraschall.com/en/welding-using-ultrasonics/welding-plastics/ultrasonic-welding-of-plastics
  - https://www.herrmannultraschall.com/en/welding-using-ultrasonics/welding-plastics/which-plastics-are-suitable-for-welding
  - https://www.herrmannultraschall.com/en/products/solutions/hsg-handheld-ultrasonic-welder
  - https://www.techscience.com/cmc/online/detail/23728
  - https://www.techscience.com/cmc/v84n3/63180/html
  - https://acoustics.ippt.pan.pl/index.php/aa/article/download/240/230
  - https://forum.formlabs.com/t/ultrasonic-welding/12096
  - https://forum.prusa3d.com/forum/english-forum-general-discussion-announcements-and-releases/ultrasonic-welding
  - https://ts.ifixit.com/Answers/History/833614
  - https://www.hertfordshire.gov.uk/services/fire-and-rescue/home-fire-safety/electrical-safety.aspx
  - https://commons.wikimedia.org/wiki/Category:Ultrasonic_welding
  - https://commons.wikimedia.org/wiki/File:Ultraschall-Schwei%C3%9Fmaschine.jpg
  - https://commons.wikimedia.org/wiki/File:Ultrasonic_Welding.JPG
  - https://www.youtube.com/watch?v=mSnDKx-UV8M
  - https://api.printables.com/graphql/ (model 833859)

### Finder tags

- **connects**: any solid parts
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: welding or brazing torch, press or vice, power tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, off_the_shelf_parts

