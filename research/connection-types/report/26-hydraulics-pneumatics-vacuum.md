# hydraulics, pneumatics & vacuum: Moves, holds or lets go using air or liquid pressure, or suction

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 283 Soft pneumatic bending actuator (air-powered soft finger)

*hydraulics, pneumatics & vacuum.* A rubbery finger cast in silicone or printed in TPU with air chambers along one side, so it curls to grip when pumped full of air and straightens when the air is let out

*Also covers:* Also known by the research name PneuNet (pneumatic network). Also covers fibre-reinforced soft actuators.

### What it is

- **plain_name**: A rubbery finger with a row of hollow air pockets along its back and a stiff strip along its belly; pump air in and the pockets swell and push against each other so the finger curls round and grips, let the air out and it straightens again
- **term**: Soft pneumatic bending actuator (pneumatic network actuator, PneuNet; also fibre-reinforced soft bending actuator)
- **aliases**: 
  - PneuNet, pneu-net, pneumatic network actuator (Whitesides group, Harvard; Mosadegh et al. 2014)
  - slow PneuNet (sPN, chambers joined by one channel) and fast PneuNet (fPN, with gaps between chamber walls) (Mosadegh et al. 2014)
  - fibre-reinforced soft actuator, fiber-reinforced elastomeric enclosure (FREE), boa-type actuator (Galloway et al. 2016; Habibian 2019 thesis)
  - fabric-reinforced soft pneumatic actuator (Yap et al. 2017)
  - monolithic bending PneuNet (MBP), 3D-printed soft actuator, TPU soft actuator (Stano et al. 2020)
  - fluidic elastomer actuator, pneumatic silicone actuator (Wikipedia 'Soft robotics')
  - soft robotic gripper, soft gripper finger, air-powered soft finger, squishy robot (Science Buddies)
  - hydraulic soft actuator when driven by water or oil instead of air (Galloway et al. 2016 drove theirs hydraulically under the sea)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: powered & active connectors, compliant mechanisms & flexures, print-in-place & 3D-printing joints
- **one_liner**: A finger cast in silicone or printed in TPU with a network of air chambers along one side and a stretch-resistant layer along the other, so that pumping air in makes it curl and wrap gently round an object, and letting the air out makes it straighten and let go.
- **complexity**: A small assembly that acts as one unit. The finger itself is one rubbery piece (or two cast halves bonded together) containing: a stretchy top layer with a row of chambers joined by an air channel, a stiffer bottom layer with a strain-limiting sheet (paper, fabric or fibre) moulded in, and an air inlet. Fibre-reinforced versions add thread wound round a tube-shaped bladder and an outer silicone skin (Galloway et al. 2016). To work it needs an air supply (squeeze bulb, syringe, small pump or compressor), tubing and fittings, and usually valves, a pressure sensor or regulator and a relief valve (Science Buddies; Soft-Handy project on Hackaday.io).
- **how_it_works**: Rubber balloons out wherever it is thinnest and stretchiest. In a PneuNet the stretchy top layer is full of chambers, while the bottom layer contains a sheet that does not stretch. When the chambers are pumped up they swell and push on their neighbours, so the top gets longer while the bottom cannot, and the whole finger curls towards the stiff side; without the stiff bottom layer it would simply get longer (Stano et al. 2020). Letting the air out lets the rubber spring back straight. A fibre-reinforced actuator does the same with a tube: thread wound round it stops it ballooning outwards, and a strain-limiting strip along one side makes it bend; changing the winding angle of the thread makes such a tube extend, contract or twist instead (Habibian 2019 thesis; Galloway et al. 2016). Because the finger is soft, it wraps round objects of uncertain size, shape and stiffness and spreads the grip gently over them (Galloway et al. 2016).

### Finder attributes

- **job**: 
  - hold or release using power: grips while it is pressurised and lets go when the air is released (soft grippers and rehabilitation gloves; Galloway et al. 2016; Yap et al. 2017)
  - change the kind of motion: turns air (or liquid) pressure into a curling, bending movement with no hinges, gears or linkages (Galloway et al. 2016: 'no moving parts such as pin joints, gears, or linkages')
  - let it move (turn, slide or bend): the whole finger bends like a flexure, so it can also be used as a powered bending joint (e.g. walking soft robots; Science Buddies)
- **motion**: flex: curls in one plane when pressurised. A 10 cm silicone fast PneuNet bends from a straight rod into an approximate circle (Mosadegh et al. 2014); a home-cast silicone finger bent more than 90 degrees (Tazer Technical, via CircuitDigest); FDM-printed TPU fingers bent 41-73 degrees at 4 bar (Stano et al. 2020). Fibre-reinforced tubes can also be made to extend, contract or twist (Habibian 2019 thesis)
- **degrees_of_freedom**: 1 controlled movement per air channel: bending in one plane, set by the pressure. But because it is soft it can also be pushed sideways, twisted or squashed by the object it holds, so in practice it is a compliant finger with many passive directions of give. Fingers with three chambers round a central axis can bend in any direction when the chambers are pressurised in turn (Galloway et al. 2016, describing Suzumori's early grippers)
- **special_behaviour**: 
  - motion conversion: turns air pressure into bending (pressure in, curl out)
  - self-aligning or self-centring (in a loose sense): a ring of soft fingers closes round an object and conforms to its shape, so it tolerates uncertainty in size, shape and position (Galloway et al. 2016)
  - none of the locking behaviours: it only holds while pressure is kept in it
- **holding_principle**: powered hold (it grips only while pressurised) plus friction or clamping (the curled fingers squeeze the object and friction stops it slipping out; Yap et al. 2017 measured both the squeezing 'normal' grip and the 'frictional' grip)
- **input_output**: air (or water or oil) pressure -> bending. Typical working pressures: about 70-170 kPa for cast silicone fingers (Galloway et al. 2016: bellows type up to 70 kPa unreinforced, 170 kPa with lace reinforcement; Yap et al. 2017: full finger bending at 120 kPa), up to about 345 kPa for very fast silicone PneuNets (full curl in 50 ms; Mosadegh et al. 2014), and about 400 kPa (4 bar) for FDM-printed TPU fingers (Stano et al. 2020). Efficiency is low and depends on design: a slow PneuNet needs about 3 times the pressure, 8 times the air volume and 35 times the energy of a fast PneuNet for the same bend (Mosadegh et al. 2014). Back-drivable: yes, it is soft and can be bent by hand or by the object ('natural compliance and back drivability'; Galloway et al. 2016)
- **power**: powered: needs a supply of compressed air (a squeeze bulb, syringe, small diaphragm pump or compressor) or of pressurised liquid, plus valves to fill and vent it. When power is lost it depends on the valves: if the air is trapped by a closed valve the finger stays curled until it leaks; if the air can escape (vent valve open, or back through a stopped pump) it straightens and lets go
- **removability**: removable: the air tube is pushed into the inlet or onto a barb or quick-disconnect fitting, and the finger is clamped or screwed to a palm or mount (Science Buddies; Galloway et al. 2016 gave each finger a quick-disconnect fitting 'for easy actuator installation and removal'). Pushing a tube into a new hole in the rubber makes a leak, so re-use the same hole (Science Buddies)
- **reuse_cycles**: many times for connecting and disconnecting. The finger's own life varies hugely with design and build quality: slow PneuNets burst after about 126 full bends on average (at most 990), mostly because of air bubbles in the wall, while fast PneuNets ran for more than a million cycles (Mosadegh et al. 2014)
- **tools_needed**: To make: a 3D printer (for moulds or for printing TPU directly), mixing cups and sticks, vinyl or latex-free gloves (latex gloves stop platinum silicone curing), scissors, optionally a vacuum chamber to remove bubbles and a toaster oven for faster curing (Smooth-On Ecoflex technical bulletin; Science Buddies). To fit and run: push-in or barbed fittings, tubing, and a pump or squeeze bulb; a pressure gauge or sensor and a regulator are strongly advised
- **seal**: airtight or pressure: the rubber body itself is the sealed chamber. Leaks usually come from the bonded seam between cast halves, the tube connection, air bubbles in thin walls, or gaps between extruded lines in printed TPU (Galloway et al. 2016; Stano et al. 2020; Mosadegh et al. 2014)
- **load**: Light. A fabric-reinforced silicone finger pushed with a maximum blocked tip force of about 9 N at 120 kPa (Yap et al. 2017); typical home-made grippers lift small, light objects (Science Buddies; Hackaday 2025). It grips well round an object and is gentle on fragile ones (deep-sea biological sampling; Galloway et al. 2016), but it is weak against sideways pushes, twisting and heavy pulling, and sharp objects can puncture it
- **adjustable**: Yes, by pressure: more pressure gives more bend and more grip force, so a regulator or a pump controlled by a pressure sensor sets how hard it grips (Yap et al. 2017 used a PID-controlled valve; Soft-Handy project on Hackaday.io). The shape and stiffness of the finger are fixed once cast or printed
- **play_and_precision**: noticeable: the finger's position depends on pressure, on what it is touching and on the rubber's hysteresis (the pressure-volume curve on the way up differs from the way down; Mosadegh et al. 2014), and on how fast it is filled (fast filling curls the tip first; Mosadegh et al. 2014). It is repeatable enough for gripping but not for precise positioning. It tolerates large misalignment of the object, which is the point of using it
- **access_needed**: not applicable: it is a self-contained actuator; you only need to reach its base to fit the air tube and fixing
- **materials**: Cast versions: soft two-part platinum-cure silicone rubber, e.g. Ecoflex 00-30 or 00-50 (brand) for the stretchy layer and a stiffer silicone such as Dragon Skin 20 (brand) or Elastosil M4601 (brand) for the bottom or skin (Smooth-On; Mosadegh et al. 2014; Galloway et al. 2016); strain-limiting layer of paper, fabric or fibre (one maker reports carbon-fibre fabric worked better than paper; Printables 'PneuNet actuator molds'); reinforcing thread such as Kevlar (Habibian 2019 thesis, citing Connolly et al.). Printed versions: TPU filament, e.g. TPU 95A for stiff parts and TPU 80A for the bending part (Stano et al. 2020) or NinjaFlex (brand) (Printables 'Pillow Soft Robotic Actuator'). Simple FREEs: latex tubing wound with cotton thread and coated in latex (Habibian 2019 thesis). Moulds: ABS or PLA prints; avoid resin (UV photopolymer) moulds, which can stop silicone curing, and porous laser-sintered nylon (Science Buddies)
- **maker_difficulty**: moderate: casting a silicone finger in a printed mould is a well-documented school project (Science Buddies), but getting it leak-free and bubble-free takes practice, and printing an airtight TPU finger needs tuned over-extrusion and thick walls. You also need a safe air supply with pressure control

### Making it

- **processes**: 
  - 3D print (FDM): moulds in ABS or PLA for casting silicone (Science Buddies; Printables 'PneuNet actuator molds'), or the whole actuator printed in TPU with its air connector built in (Stano et al. 2020)
  - 3D print (resin): not recommended for moulds, because UV photopolymers can leave silicone sticky and uncured (Science Buddies); direct printing of soft actuators in elastomeric resins or silicone inks exists in research (Wikipedia 'Soft robotics' on direct ink writing)
  - casting (moulding) two-part silicone rubber in printed moulds, then bonding the halves with a thin layer of fresh silicone (Science Buddies)
  - off-the-shelf part: the silicone kit, TPU filament, tubing, fittings, pump, valves, regulator and relief valve are bought
- **print_in_place**: yes for the TPU version: a monolithic bending PneuNet with its embedded air connector prints in one go on a dual-extruder FDM printer (Stano et al. 2020). The more common cast silicone version is 'partly': the moulds are printed, but the finger is cast, bonded and fitted with tubing by hand
- **making_tips_3d_printing**: Cast silicone route: 1) Print the moulds in ABS or PLA; resin moulds can stop the silicone curing (sticky surface) and laser-sintered nylon is too rough to release it; Smooth-On suggests spraying a clear acrylic lacquer on doubtful moulds (Science Buddies). 2) Mix 1 part A to 1 part B; Ecoflex 00-30 gives about 45 minutes of working time and cures in 4 hours at room temperature (00-50: 18 minutes and 3 hours); don't cure below 18 degC; warmth speeds curing (Smooth-On Ecoflex bulletin; Science Buddies cures in 10 minutes at 150 degF, about 65 degC, if the mould can take it). 3) Wear vinyl or latex-free gloves: latex, sulfur clays and some other materials stop platinum silicone curing (Smooth-On). 4) Get rid of bubbles (vacuum degas, or pop them with a pin): bubbles in the thin top wall were the main reason slow PneuNets burst, after about 126 cycles on average (Mosadegh et al. 2014). 5) Add vent holes to the mould so air is not trapped (Tazer Technical, via CircuitDigest). 6) Bond the top and bottom halves with an even layer of fresh silicone about 1 mm thick: too much clogs the chambers, too little leaks; then seal round the edge (Science Buddies). The bonded seam is where most moulded actuators fail (Galloway et al. 2016). 7) Mould a sheet of paper or fabric into the bottom layer so it cannot stretch (Hackaday 2025; Printables 'PneuNet actuator molds'), or make the bottom from a stiffer silicone (Science Buddies: Ecoflex 00-50 bottom, 00-30 top). 8) Choose soft silicone: one maker found Shore 25A too stiff and 10A worked, with fewer ribs and thinner walls (Tazer Technical, via CircuitDigest). 9) Leave gaps between the chamber walls (fast PneuNet): it bends with about one tenth of the volume change, less strain and far longer life (Mosadegh et al. 2014). Printed TPU route: 10) Make every pressurised wall at least 4-5 extruded lines thick (1.6 mm with 0.4 mm lines; 1 mm walls worked only with a 0.25 mm nozzle and 0.2 mm line width) (Stano et al. 2020). 11) Over-extrude (flow 106-120%), use 100% infill and print a little hotter than recommended (TPU 80A raised from 230 to 240 degC) so the lines fuse airtight; print with the stiff layer flat on the bed (Stano et al. 2020); one maker of a printed NinjaFlex actuator needed about 140% flow and a lowered nozzle (Printables 'Pillow Soft Robotic Actuator'). 12) Print the air connector into the part, upright, and make it about 0.5 mm wider than a standard connector so the tube seals (Stano et al. 2020). 13) Test every actuator under water with low pressure to find leaks (Stano et al. 2020 checked for bubbles in a water bath). 14) Expect printed TPU to need much more pressure than silicone for less bend (about 41-73 degrees at 4 bar versus almost 70 degrees at about 2.5 bar for a moulded one; Stano et al. 2020), so pay extra attention to the safety notes.
- **off_the_shelf_parts**: Two-part platinum-cure silicone rubber (Ecoflex 00-30 and 00-50, Dragon Skin 10 and 20 (brands, Smooth-On); Elastosil M4601 (brand, Wacker)); flexible TPU filament in Shore 80A-95A (e.g. NinjaFlex (brand)); polyethylene tubing 1/16 in inside diameter and silicone rubber tubing 1/8 in inside diameter (Science Buddies parts list, McMaster-Carr 5181K15 and 5236K83); squeeze bulb (camera lens blower) for hand power (Science Buddies); miniature diaphragm air pump; solenoid inlet and outlet valves and an air pressure sensor (Soft-Handy project); pressure regulator and pressure relief valve; barbed, push-in or quick-disconnect fittings (Galloway et al. 2016); Kevlar or polyester thread for fibre reinforcement; paper, cotton or fibreglass fabric for the strain-limiting layer
- **rules_of_thumb**: 
  - Printed TPU walls must be at least 4-5 adjacent extrusion lines thick to be airtight (1.6 mm at 0.4 mm line width); airtightness depends on the number of lines, not just the wall thickness (Stano et al. 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7281577/).
  - For airtight TPU, over-extrude (flow 106-120%), use 100% infill and print hotter (TPU 80A at 240 degC instead of 230 degC) (Stano et al. 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7281577/).
  - Working pressures: cast silicone fingers roughly 70-170 kPa (Galloway et al. 2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC4997628/; full finger bending at 120 kPa with about 9 N blocked tip force, Yap et al. 2017, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5640819/fullTextXML); printed TPU about 400 kPa (Stano et al. 2020). Use the lowest pressure that works and limit it with a regulator and relief valve.
  - Fast PneuNet design (gaps between chamber walls, thinner inner walls): about one tenth of the volume change; the slow design needs about 3 times the pressure, 8 times the volume and 35 times the energy, and lasted about 126 cycles on average versus more than a million (Mosadegh et al. 2014, https://dash.harvard.edu/server/api/core/bitstreams/7312037d-a1d3-6bd4-e053-0100007fdf3b/content).
  - Silicone handling: mix 1A:1B; Ecoflex 00-30 pot life 45 min, cure 4 h, elongation at break 900%; Dragon Skin 20 pot life 25 min, cure 4 h, Shore 20A, elongation 620%; useful temperature -53 to +232 degC; don't cure below 18 degC (Smooth-On, https://www.smooth-on.com/tb/files/ECOFLEX_SERIES_TB.pdf and https://www.smooth-on.com/tb/files/DRAGON_SKIN_SERIES_TB.pdf).
  - Bond cast halves with a fresh silicone layer about 1 mm thick (Science Buddies, https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p020/robotics/squishy-robots-build-an-air-powered-soft-robotic-gripper).
  - Fibre winding angle: a fibre-wound tube switches from getting longer to getting shorter at a winding angle of about 54.7 degrees in theory (about 45-50 degrees in finite-element models of real FREEs) (Habibian 2019 thesis, https://arxiv.org/pdf/1912.07380).

### When to use it

- **everyday_examples**: 
  - soft robot grippers that pick up fragile things, such as the deep-reef grippers used for the first non-destructive sampling of fragile seabed animals by a robot in the deep sea (Galloway et al. 2016)
  - soft robotic rehabilitation gloves that bend a weak hand's fingers with air-filled fingers (Yap et al. 2017)
  - the school 'squishy robot' gripper cast from silicone and pumped with a squeeze bulb (Science Buddies)
  - the inflatable robot arm at Carnegie Mellon that inspired Baymax in Big Hero 6 (Wikipedia 'Soft robotics'; an inflatable arm rather than a PneuNet finger)
- **when_to_use**: When you need to grip delicate, oddly shaped or unpredictable objects gently (fruit, eggs, soft toys, sea creatures) without careful positioning or force sensing; when the gripper must be safe if it bumps into people; for wearable devices that bend fingers; for soft walking or crawling robots; when you want a cheap, light finger with no hinges, gears or bearings to wear or jam; or as an engaging way to learn about pneumatics and moulding.
- **when_not_to_use**: Not for heavy loads, high grip forces or precise positioning: use a motor- or servo-driven gripper, a parallel-jaw gripper or a tendon-driven finger. Not for holding something for long periods without power: a mechanical latch or a self-locking gripper holds with no air. Not near sharp or hot objects that can puncture or melt it. Not where you have no safe, pressure-limited air supply; for passive gentle grippers use a fin-ray finger, and for flat smooth objects a vacuum suction gripper is simpler.
- **environment_limits**: Heat and cold: cured Ecoflex and Dragon Skin silicones are rated for -53 to +232 degC (Smooth-On). Printed TPU softens at much lower temperatures than silicone ⚑ [uncertain: no TPU heat data found on the opened pages]. Wear: silicone has generally poor tear and abrasion resistance (Pooley), so rough or sharp objects nick it and nicks grow into tears. Fatigue: life ranges from about a hundred to over a million bends depending on design and bubbles (Mosadegh et al. 2014). Water: works underwater and even at 800 m depth when filled with liquid (Galloway et al. 2016). Cure: silicone left near latex, sulfur clays or some resins may never cure properly (Smooth-On). Air quality: dirty or wet compressed air causes corrosion and blocked valves (HSE HSG39). *(⚑ parts need confirming)*
- **safety_notes**: Stored pressure: 'vessels containing compressed air, even at comparatively low pressure, can explode violently once their integrity is lost' (HSE HSG39); an over-inflated finger bursts, and printed TPU fingers run at around 4 bar, so keep pressures as low as possible, fit a pressure regulator and a relief valve set below the actuator's safe pressure (HSE HSG39 para. 91), wear safety glasses while testing, and never store pressurised air in a 3D-printed part. A burst hose can whip and snake (HSE HSG39). Never point compressed air at skin or at a person: 'even air at a pressure of 15 psig can cause serious injury' (FRC Zero, Pneumatic Safety); compressed air can enter the body through openings, with severe or fatal results (HSE HSG39). Materials: wear gloves when handling uncured silicone, which can irritate skin; work with ventilation; check the mould plastic can take oven heat before oven curing (Science Buddies; Smooth-On). Carbon-fibre fabric used as a strain layer needs proper protective equipment (Printables 'PneuNet actuator molds'). Ordinary home grippers are soft and low-force, so pinching is a minor risk.
- **common_failures**: 1) Bursting or ballooning ('aneurysm') at a thin spot or air bubble: degas the silicone, make walls even and add fibre or lace reinforcement (Mosadegh et al. 2014; Galloway et al. 2016: lacing raised the safe pressure from 70 to 170 kPa). 2) Seam peeling between cast halves: use an even 1 mm bonding layer and seal the edge (Science Buddies; Galloway et al. 2016). 3) Leak at the tube: re-use the original hole, or use an embedded connector made 0.5 mm oversize (Science Buddies; Stano et al. 2020). 4) Porous printed walls: use 4-5 lines, over-extrusion and higher temperature (Stano et al. 2020). 5) Sticky, uncured silicone: cure inhibition by resin moulds or latex gloves (Science Buddies; Smooth-On). 6) Doesn't bend enough: silicone too stiff (25A instead of 10A), walls too thick or no strain-limiting layer (Tazer Technical, via CircuitDigest; Stano et al. 2020). 7) Tearing when removing from the mould: peel gently from the outside of each finger inwards (Science Buddies). 8) Fatigue cracks after many cycles: use the fast PneuNet layout, which strains the rubber less (Mosadegh et al. 2014).
- **related**: 
  - Pneumatic artificial muscle (McKibben muscle): a rubber tube in a braided sleeve that gets shorter and pulls when pumped up, instead of curling
  - Bellows and inflatable actuators (air bag, air spring): grow longer or lift when inflated; a bellows finger is one form of soft bending actuator
  - Vacuum-driven artificial muscle: works by sucking air out, which is safer than pressurising
  - Fin-ray gripper: a printed finger that wraps round an object passively when pushed against it, with no air needed
  - Vacuum (suction) gripper and Granular jamming gripper: other air-powered ways to hold things, by suction or by grains locking up
  - Compliant gripper and force amplifier: one-piece printed grippers that close by bending flexures, usually driven by a motor or tendon
  - Elastic band and elastic cord springs: the tendon-plus-elastic way to bend and straighten printed fingers without air
  - Diaphragm pump and squeeze bulb, Pressure regulator, Pressure relief valve, Switching valve: the parts that supply and control the air

### Pictures, videos and models

- **links**: 
  - [Squishy Robots: Build an Air-Powered Soft Robotic Gripper (Ben Finio, Science Buddies)](https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p020/robotics/squishy-robots-build-an-air-powered-soft-robotic-gripper): Step-by-step photos of casting a four-finger silicone gripper in a 3D-printed mould, bonding the layers, inserting the air tube and gripping objects with a squeeze bulb *(licence: photos CC BY-NC-SA (as credited on the page); page text link only)*
  - [Additive Manufacturing for Soft Robotics: Design and Fabrication of Airtight, Monolithic Bending PneuNets with Embedded Air Connectors (Stano, Arleo and Percoco, Micromachines 2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7281577/): Figures of four FDM-printed TPU PneuNet shapes, a cross-section of the chambers, the four extrusion lines that make a wall airtight, and bending-angle-versus-pressure graphs *(licence: CC BY 4.0)*
  - [Soft Robotic Grippers for Biological Sampling on Deep Reefs (Galloway et al., Soft Robotics 2016)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4997628/): Figures of a fibre-reinforced 'boa' finger and a bellows finger, a step-by-step fabrication diagram (moulded bladder, fibre reinforcement, outer skin) and the fingers curling under pressure *(licence: CC BY 4.0)*
  - [Attempting to Make a Soft Robotic Gripper (Tazer Technical, YouTube)](https://www.youtube.com/watch?v=basxnQF3ea4): A maker's trial-and-error video of casting silicone fingers in printed moulds, with a fabric layer, reaching more than 90 degrees of bending (title and channel confirmed via YouTube oEmbed; summary from CircuitDigest; video not watched) *(licence: link only)*
  - [Robot Gets A DIY Pneumatic Gripper Upgrade (Hackaday, 2025)](https://hackaday.com/2025/04/25/robot-gets-a-diy-pneumatic-gripper-upgrade/): Article and embedded video of a cast silicone gripper with fabric in its inner side and a printed air manifold, mounted on a desktop robot arm *(licence: link only)*
- **make_it_yourself**: 
  - [Squishy Robots: Build an Air-Powered Soft Robotic Gripper (Science Buddies)](https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p020/robotics/squishy-robots-build-an-air-powered-soft-robotic-gripper): Beginner project with downloadable STL moulds (big and mini gripper), materials list (Ecoflex 00-30, tubing, squeeze bulb) and full casting instructions *(licence: photos CC BY-NC-SA; licence of the STL files not stated)*
  - [PneuNet actuator molds (danya, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/232284-pneunet-actuator-molds): Printable moulds for casting PneuNet bending fingers in silicone, based on the Soft Robotics Toolkit instructions; the maker used carbon-fibre fabric as the strain-limiting layer *(licence: CC BY-SA)*
  - [Soft Robotic Gripper With Exoskeleton (FabianVeile, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/386241-soft-robotic-gripper-with-exoskeleton): One-piece mould for a 200 mm air-powered silicone gripper whose arms close towards the centre when inflated, plus an optional printed exoskeleton for mounting it on a robot *(licence: CC BY-NC-ND)*
  - [Pillow Soft Robotic Actuator (Nlauer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/11188-pillow-soft-robotic-actuator): Airtight soft actuator printed directly in NinjaFlex/Filaflex TPU (about 140% flow, 100% infill) for a peristaltic 'earthworm' robot; shows how to tune a printer for airtight flexible prints *(licence: CC BY)*
- **diagram_idea**: Side cut-away of a soft finger: a row of hollow chambers in the stretchy top layer, a hatched non-stretch strip (paper or fabric) along the bottom, and an air tube at the base; a second frame shows the chambers ballooning and pressing on each other so the finger curls round a ball, with a small inset of a fibre-wound tube version and a pressure gauge plus relief valve on the supply.
- **sources**: 
  - https://en.wikipedia.org/wiki/Soft_robotics (read as raw wikitext)
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC7281577/ (Stano, Arleo and Percoco, Micromachines 2020, CC BY 4.0; full text read via https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7281577/fullTextXML)
  - https://dash.harvard.edu/server/api/core/bitstreams/7312037d-a1d3-6bd4-e053-0100007fdf3b/content (Mosadegh et al., 'Pneumatic Networks for Soft Robotics that Actuate Rapidly', Advanced Functional Materials 2014, author manuscript in Harvard DASH)
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC4997628/ (Galloway et al., 'Soft Robotic Grippers for Biological Sampling on Deep Reefs', Soft Robotics 2016, CC BY 4.0; full text read via Europe PMC)
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5640819/fullTextXML (Yap et al., 'Design and Preliminary Feasibility Study of a Soft Robotic Glove for Hand Function Assistance in Stroke Survivors', Frontiers in Neuroscience 2017, CC BY)
  - https://arxiv.org/abs/1912.07380 and https://arxiv.org/pdf/1912.07380 (Habibian, 'Analysis and Control of Fiber-Reinforced Elastomeric Enclosures (FREEs)', Bucknell University master's thesis 2019)
  - https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p020/robotics/squishy-robots-build-an-air-powered-soft-robotic-gripper
  - https://www.smooth-on.com/tb/files/ECOFLEX_SERIES_TB.pdf (Smooth-On Ecoflex Series technical bulletin)
  - https://www.smooth-on.com/tb/files/DRAGON_SKIN_SERIES_TB.pdf (Smooth-On Dragon Skin Series technical bulletin)
  - https://www.pooleyinc.com/wp-content/uploads/Common-Properties-of-Rubber-Elastomers.pdf (silicone tear and abrasion resistance)
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf (HSE HSG39 'Compressed air safety', 2nd edition 1998)
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://hackaday.com/2025/04/25/robot-gets-a-diy-pneumatic-gripper-upgrade/
  - https://hackaday.io/project/14880-soft-handy
  - https://circuitdigest.com/news/build-a-functional-soft-robotic-gripper-using-3d-printed-mold-and-silicone (summary of the Tazer Technical video)
  - https://www.youtube.com/watch?v=basxnQF3ea4 (title and channel confirmed via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables API: models 232284, 386241, 11188)

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air, liquid
- **power_loss**: lets go
- **motion_in**: pressure
- **motion_out**: bending
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, paper or card, carbon fibre or composites, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits

## 288 Pneumatic artificial muscle (McKibben muscle)

*hydraulics, pneumatics & vacuum.* A rubber tube inside a woven sleeve that gets fatter and shorter when pumped with air, pulling hard like a muscle

### What it is

- **plain_name**: A rubber tube inside a stretchy woven sleeve (the same kind of criss-cross mesh used to bundle cables): pump air in and the tube swells, the sleeve gets fatter and shorter, and its two ends pull together hard, like a muscle. Let the air out and it relaxes and can be stretched back
- **term**: Pneumatic artificial muscle (PAM), McKibben type (braided pneumatic actuator)
- **aliases**: 
  - McKibben muscle, McKibben artificial muscle
  - air muscle
  - pneumatic muscle, pneumatic muscle actuator (PMA)
  - braided pneumatic actuator (BPA)
  - fluidic artificial muscle; hydraulic artificial muscle (when filled with water or oil instead of air)
  - contractile pneumatic actuator; 'extensible McKibben' (a version with a steeper braid that gets longer instead of shorter)
  - Fluidic Muscle (Festo brand; product range DMSP)
  - Air Muscle (Shadow Robot Company brand)
  - Rubbertuator (Bridgestone brand, 1980s)
  - Pneumuscle (Koganei brand) and S-muscle (brand of thin muscles)
  - makkiben-gata jinko kinniku (Japanese: McKibben-type artificial muscle)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: powered & active connectors
- **one_liner**: A soft rubber tube (bladder) inside a woven sleeve (braid), sealed and clamped at both ends: when air is pumped in, the tube swells, the criss-crossed braid fibres scissor outwards and the whole thing shortens, pulling a load like a biological muscle; when the air is let out it relaxes.
- **complexity**: A few parts: an inner rubber tube (silicone, latex or natural rubber bladder); an outer expandable braided sleeve; two end fittings (a plug at one end and a barbed air connector at the other); clamps that grip sleeve and tube onto the fittings (hose clamps, crimped ear clamps, cable ties or wrapped wire); mounting eyes, bolts or hooks; and an air line with a valve (Make:; Open Soft Machines; Ishikawa lab). Commercial muscles have the reinforcing fibres built into the rubber sheath and crimped aluminium end flanges (Festo DMSP).
- **how_it_works**: The braid's fibres don't stretch and are wound in criss-crossing spirals, like a Chinese finger trap. When air pressure swells the rubber tube, the braid can only get wider by turning its fibres closer to crossways, and that pulls its two ends together, so the muscle shortens even while pulling a load (NFPA activity; Shadow). The pull is strongest at the very start of the stroke and falls to zero at full contraction, and at a fixed length it rises in step with the pressure, so the pressure sets how far it pulls (Festo; Shadow; Wikibooks). A braid wound at less than about 54.7 degrees to the tube's axis (the 'critical locking angle') makes it contract; a steeper braid makes a muscle that gets longer instead (Wikipedia; Open Soft Machines). It can only pull, so it works against a spring, a weight or a second, opposing muscle (Wikibooks; Shadow).

### Finder attributes

- **job**: 
  - hold or release using power: pulls and holds a load while it is pressurised, and lets go (lengthens) when the air is let out (Festo; Shadow)
  - change the kind of motion: turns air pressure into a straight, muscle-like pull with no piston or sliding seals (Festo; Make:)
  - tighten and hold tension: used as an adjustable 'air spring' that keeps threads, films or rollers at a set tension, adjusted by changing the pressure (Festo)
- **motion**: flex: the braided tube shortens and fattens along its own axis. Festo allows at most 25% contraction of the nominal length (20% for its smallest size); looser hobby and Shadow braids reach about 30-40% (Festo; Shadow; Ishikawa lab GitHub README)
- **degrees_of_freedom**: 1: only the distance between the two ends changes (it pulls along a straight line). The muscle is soft sideways but is not meant to take side loads: Festo asks for an external guide if lateral forces occur
- **special_behaviour**: 
  - motion conversion: swelling caused by air pressure becomes a straight pull along the axis (Festo; NFPA activity)
  - tensioning: behaves like an 'air spring' whose force and stiffness are set by the pressure (Festo); two muscles pulling against each other at a joint can make it stiff or soft without moving it (co-contraction, Wikibooks)
  - fail-safe (only partly): its force falls to zero at full contraction, so it can't drive a lever past its set angle (Shadow; Wikibooks); but it is not self-locking, so if the air is let out or leaks away it relaxes and a hanging load drops (Festo's lifting-aid example lowers loads by exhausting the muscle)
  - self-aligning (disputed): Shadow says its muscles work when twisted or bent round a corner and need no precise aligning, while Festo forbids kinking, compressing and twisting its muscles and allows only about 1 degree of angle error between the mounts
- **holding_principle**: 
  - powered hold: it pulls only while there is air pressure inside; a closed valve can trap the air so it keeps pulling (Festo: it 'can be disconnected from the compressed air supply, but it will continue to perform its function')
  - suction or air pressure: the pulling force comes from air pressure pushing on the inside of the bladder (Chou and Hannaford 1996)
  - friction or clamping (force-fit): the ends are held by hose clamps, crimped ferrules, cable ties or wire squeezed over barbed plugs (Make:; Open Soft Machines; Ishikawa lab)
- **input_output**: Compressed air pressure -> straight pull (linear contraction). Typical pressures: 0-5 bar for Shadow muscles, never above 6 bar; 0-6 bar for most Festo sizes (0-8 bar for size 10). At a fixed length the pull rises roughly in proportion to pressure; it is highest at the start of the stroke and falls to zero at full contraction (Shadow; Festo). Stroke: up to 25% of length (Festo), about 30-37% for loose braids (Shadow tables; 35% for Chou and Hannaford's nylon-braid muscle). Rough efficiency: Chou and Hannaford put the theoretical best for one muscle at about 0.32-0.49 and estimated about 0.20-0.39 per cycle at 5 bar, before compressor and valve losses, which make a whole air system much less efficient. Arrangement: in line (pulls along its own axis). Back-drivable: yes, an outside pull stretches it like a spring; it can never push (Festo; Wikibooks).
- **power**: powered: needs compressed air (or water or oil in hydraulic versions), usually switched by electric valves fed from a compressor (Wikipedia). When power is lost: if the valve vents the muscle, it relaxes and lengthens, so a load it was holding up drops (Festo lifting-aid example); if the valve shuts and traps the air, it keeps its last state (Festo) until leaks let it relax ⚑ [uncertain: no source gives leak-down rates] *(⚑ parts need confirming)*
- **removability**: removable: the muscle hooks, bolts or screws to the machine by its end fittings and can be swapped out (Wikipedia: muscles connect directly to the structure, which makes a defective one easy to replace; Ishikawa lab: 'easy to attach and detach'); the crimped or clamped joints inside the muscle itself are semi-permanent
- **reuse_cycles**: many times for fitting and removing. Working life is the real limit: traditional muscles last about 10,000 cycles, and Festo's fluidic muscle (fibres built into the rubber) about 10 million (Wikibooks); Osaka's open-recipe muscle survived 10,000 cycles carrying about 20 kg (Ishikawa lab, summarising Naniwa et al., HardwareX 2026)
- **tools_needed**: scissors; a lighter to melt the cut ends of the sleeve so they don't fray; a screwdriver for hose clamps, or a crimping tool for two-ear clamps; cable ties or wire; PTFE tape for threaded fittings; plus an air source (a syringe or bike pump for tests, a compressor or tank for real use) and ideally a pressure regulator and gauge (Make:; NFPA activity; Open Soft Machines; Ishikawa lab)
- **seal**: airtight or pressure: the rubber tube holds the air and the clamped or crimped end fittings seal its ends; the braid itself is open mesh. Commercial muscles are 'hermetically sealed' (Festo)
- **load**: medium to heavy pull for its size and weight, but in one direction only (pull). Festo muscles give up to 140 N (5 mm bore), 630 N (10 mm), 1,500 N (20 mm) and 6,000 N (40 mm) at full pressure; a 30 mm Shadow muscle lifts more than 70 kg at 4 bar; Osaka's 9 mm hand-made muscle has a recommended load of 400 N and breaks at 600-800 N (Festo; Shadow; Ishikawa lab). It can't push, must not be twisted or kinked, and needs a guide if there are side loads (Festo)
- **adjustable**: yes: the pull and the stroke are set by the air pressure (with a regulator or proportional valve), and in-between positions can be held by controlling the pressure (Festo; Shadow). A slight pre-stretch (Festo: 0.5% of length) gives the best force; joint stiffness can be tuned by pressurising two opposed muscles together (Festo; Wikibooks)
- **play_and_precision**: noticeable: rubbing between the bladder and braid, and between the braid's threads, causes hysteresis (Chou and Hannaford suggest allowing about 2.5 N of friction force either way for their muscle), and squashy compressed air makes it springy, so positioning by pressure alone is approximate. Misalignment: Festo allows about 1 degree of angle and 0.5% parallel offset between the mounts and forbids twisting, while Shadow says its muscles tolerate twisting and bending (conflicting vendor advice)
- **access_needed**: both sides: both ends must be anchored, one to the frame and one to the part it pulls, and one end also takes the air line
- **materials**: Bladder: soft silicone rubber tubing, super-soft latex tubing or natural rubber (Make:; Open Soft Machines; Ishikawa lab; Bennington et al. 2023 used latex balloons). Braid: expandable polyester (PET) cable sleeving, nylon, fibreglass, or aramid fibres embedded in the rubber (Chou and Hannaford compared nylon, fibreglass and Bridgestone braids; Festo uses aramid). End fittings: brass or plastic barbed fittings and plugs, nylon bolts, anodised aluminium flanges (Festo), or 3D-printed ABS or resin plugs (Ishikawa lab). Clamps: steel hose clamps, two-ear clamps, cable ties, wire, or Kevlar thread with cyanoacrylate glue (Bennington et al. 2023)
- **maker_difficulty**: easy to moderate: a simple muscle is made from hardware-store tubing, cable sleeving and hose clamps in about an hour (Make:; Open Soft Machines), but sealing the ends well enough for higher pressures takes care (cable ties only hold at fairly low pressure, Ishikawa lab), and you need a safe, regulated air supply

### Making it

- **processes**: 
  - off-the-shelf part: industrial fluidic muscles (e.g. Festo DMSP, brand) and robot air muscles (e.g. Shadow, brand)
  - hand assembly from off-the-shelf parts: silicone or latex tubing, expandable braided sleeving, barbed fittings and clamps (Make:; NFPA activity; Open Soft Machines)
  - 3D print (FDM): end plugs ('air stoppers') in ABS, mounting brackets and lever arms (Ishikawa lab)
  - 3D print (resin): small threaded couplers and caps for thin 5-7 mm muscles, and strong muscle holders, e.g. in a tough resin (Ishikawa lab and its GitHub README)
  - laser cut: simple muscle holders cut from polypropylene sheet and fitted with grommets (Ishikawa lab)
- **print_in_place**: no: the rubber bladder and the woven sleeve are bought parts, assembled by hand. Researchers have 3D printed the braid itself, but that muscle only shortened by up to 6.7% at 0.66 bar water pressure (Sangian et al. 2019), far less than one with a woven sleeve
- **making_tips_3d_printing**: 1) Print the end plugs, not the muscle: Osaka's open recipe prints ABS 'air stoppers' at 100% infill on an ordinary FDM printer, coats each plug generously with ABS cement and rolls it inside the silicone tube so the cement fills the layer lines, then leaves it about an hour to dry, because unfilled or wet layer lines leak (Ishikawa lab). 2) For thin 5-7 mm muscles the couplers and caps were printed on a resin printer; re-cut the modelled M3 or M5 threads with a tap afterwards, and clear the air hole with a 1 mm drill if it closed up during printing (Ishikawa lab GitHub README). 3) Make the pull go through the braid, not the rubber: crimp metal fittings onto the sleeve, melt and curl the sleeve end with a lighter so it hooks behind the crimp, and run instant glue between fitting and sleeve if it still slips; this prevents the two main failures, plugs blowing out and the sleeve sliding off its fitting (Ishikawa lab). 4) Brackets that carry the full pull must be strong: Osaka suggests tough resin or carbon-fibre filament, or folded polypropylene sheet with grommets if you can't print strong parts (Ishikawa lab). 5) Melt the cut ends of polyester sleeving so they don't fray (NFPA activity; Ishikawa lab). 6) A printed plug is part of a pressurised assembly: keep pressures modest, test with safety glasses on and the muscle pointing away from people, and never use a printed part as an air tank or reservoir ⚑ [uncertain: general safety advice, not from a muscle source]. 7) Printing the braid itself is possible but gives a weak muscle (6.7% stroke, Sangian et al. 2019), so buy expandable sleeving instead. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Expandable braided sleeving (polyester or PET 'expandable sleeving' for cable bundling, e.g. McMaster-Carr 9284K2 or 9284K4; 'hard-to-fray braided tube'); super-soft latex rubber tubing or silicone rubber tubing; barbed tube fittings, barbed plugs and barbed reducers; push-to-connect (one-touch) straight fittings, e.g. SMC KQ2H (brand); quick-connect air couplings; worm-drive hose clamps, two-ear clamps and a pincer crimping tool; cable ties; nylon bolts or eye bolts; polyurethane air tubing (4 mm or 1/8 in); a 3-way valve or 3/2 solenoid valve; an air compressor, pressure regulator and gauge; ready-made muscles such as Festo Fluidic Muscle DMSP, Shadow Air Muscle, Koganei Pneumuscle and S-muscle (brands) (Make:; Open Soft Machines; NFPA activity; Ishikawa lab; Festo)
- **rules_of_thumb**: 
  - Braid angle sets the direction: a braid at less than about 54.7 degrees to the axis makes the muscle contract when pressurised; above 54.7 degrees it extends (Wikipedia)
  - Stroke is limited: Festo allows at most 25% contraction (20% for its 5 mm size) and says the most effective range is below 9%; looser braids give about 30-37% (Shadow tables; 35% for Chou and Hannaford's nylon-braid muscle; Osaka's 9 mm muscle about 30% in its GitHub README and about 25% in the later HardwareX test), while Osaka's thin 7 mm and 5 mm muscles give only about 15% and 10% (Festo; Shadow; Ishikawa lab)
  - Force is greatest when the muscle starts fully stretched and falls to zero at full contraction; a muscle that starts slack loses much of its force (Shadow; Festo; Wikibooks)
  - Pressure limits for Shadow muscles: normally 0-5 bar, never above 6 bar, and not above 3 bar when unloaded, or its life is shortened and it may burst (Shadow). Festo rates 0-6 bar (0-8 bar for size 10) and recommends running at about 2 bar below the maximum (Festo)
  - Pre-tension slightly: Festo's ideal starting point is stretched by 0.5% of nominal length, which prevents kinking and compression; avoid fully emptying it and keep a residual pressure of up to 0.5 bar (Festo)
  - Pull-only actuator: use it against a return spring or weight, or as an opposed pair at a joint (Shadow; Wikibooks)
  - Expect hysteresis from friction: Chou and Hannaford suggest adding about 2.5 N of friction force (positive when lengthening, negative when shortening) to their muscle's model, and suggest lubricant to reduce it (Chou and Hannaford 1996)
  - Fatigue life: about 10,000 cycles for traditional muscles versus about 10 million for Festo's fibre-in-rubber design (Wikibooks); Osaka's hand-made 9 mm muscle passed 10,000 cycles at about 20 kg (Ishikawa lab)
  - Cable ties only seal at relatively low pressures; crimped ferrules or wrapped wire are needed for higher pressures (Ishikawa lab, whose crimped muscle runs at up to 1 MPa)
  - If the air is trapped (valve closed) and the outside force changes, the pressure inside can rise a lot, so stay well within the maximum pressure (Festo)

### When to use it

- **everyday_examples**: 
  - A Chinese finger trap: the same criss-cross weave, which gets narrower when pulled long and fatter when pushed short (Shadow compares its braid to one)
  - The stretchy woven sleeve used to bundle computer or car cables: the same expandable braided sleeving is the outer layer of a home-made muscle (Make:; Open Soft Machines)
  - Robot hands and arms driven by air muscles, such as the Shadow Dexterous Hand and Festo's 'Airic' arm (Wikipedia; Make:)
  - McKibben's original 1950s splint, which let his polio-paralysed daughter close her fingers by shrugging a shoulder to work a gas valve (Make:). Dates differ between sources: Wikipedia says he invented it in 1957; Wikibooks says it was patented in 1957 by Gaylord and used by McKibben; Bennington et al. (2023) say such muscles first appeared in the 1930s-1940s and McKibben popularised them in the 1950s
- **when_to_use**: Use it when you need a strong, light, straight pull over a short distance with no sliding parts: robot joints that should feel soft and muscle-like, wearable assist devices, grippers and clamps, or shaking and vibrating loads (Festo quotes up to 150 Hz for strokes under 1 mm; Wikibooks). It suits work around people because it gives way when pushed (compliant) and its force fades to nothing at the end of its stroke, so it can't overrun (Wikipedia; Shadow). It is sealed and has no piston to jam, so it works in dirty places (Festo), and a cheap version can be built from hardware-store parts (Make:). Two opposed muscles can set both the position and the stiffness of a joint (Wikibooks).
- **when_not_to_use**: Avoid it when you need a long stroke (more than about a quarter to a third of its length), a pushing force, precise positioning or steady force over the whole stroke: use an air cylinder, a lead screw with a motor or an electric linear actuator instead (Festo; Wikibooks). Don't use it where there's no compressed-air supply, or where a noisy compressor is unwelcome; for small pulls, electric options such as shape-memory-alloy wire or a twisted-string actuator may suit better. Avoid places where it would be twisted, kinked, side-loaded or rubbed by sharp edges that could cut the bladder (Festo; Wikipedia).
- **environment_limits**: Heat and cold: Festo's muscle is rated for -5 to +60 C ambient, Shadow's for 0-50 C (Festo; Shadow). Air quality: Shadow asks for clean, oil-free air; Festo allows oiled air, but once used it must always be oiled (Shadow; Festo). Corrosion: Festo rates its muscle corrosion class CRC 2, for indoor places where condensation can occur (Festo). Chemicals and sunlight: silicone rubber isn't recommended with oils or petrol (Rubber Group), and latex and natural rubber tubing age in sunlight and ozone ⚑ [uncertain: not checked in a muscle source]. Wear: a damaged braid whose fibres spread apart lets the bladder bulge through and burst (Wikipedia). Creep: printed ABS plugs and brackets under a constant pull may creep over time ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Stored air pressure is the main hazard. Over-inflation shortens a muscle's life and can make it burst: Shadow says never exceed 6 bar and never inflate an unloaded muscle above 3 bar (Shadow); Make: warns that too much pressure may split the tube and says to wear safety glasses whenever working with compressed air. Home-made muscles mostly fail by the end plug blowing out or the sleeve sliding off its fitting (Ishikawa lab), so keep faces clear of the ends while testing. Compressed air can penetrate skin and blow particles into eyes, and a burst or loose hose can 'whip' and 'snake' (HSE HSG39). The muscle can pull hard and fast (Festo lists 'high acceleration of a load'), so keep fingers out of the linkage it drives. If the air is lost the muscle relaxes and anything it was lifting falls; if the air is trapped it stays tense, so prop the load and vent the line before working on it (Festo; HSE HSG39 recommends vent valves that can be locked). Never hold stored pressure in a 3D-printed part.
- **common_failures**: 1) Bladder bursts where the braid is damaged or its fibres have spread apart, leaving a gap for the rubber to bulge through (Wikipedia); don't run a damaged muscle. 2) End plug pushed out, or braid sliding off the end fitting: the two main ways home-made muscles fail. Crimp the fittings onto the braid so the pull goes through the braid, melt the sleeve end so it hooks behind the crimp, and add glue if needed (Ishikawa lab). 3) Leaks at clamps (cable ties only work at low pressure) or through layer lines in printed plugs: use crimps or wire, and print plugs at 100% infill and seal them with ABS cement (Ishikawa lab). 4) Tube split by over-inflation, especially with no load attached (Shadow; Make:). 5) Fatigue cracks next to the rigid end fittings, where stress concentrates (Wikipedia); short life of about 10,000 cycles for traditional designs (Wikibooks). 6) Kinking, twisting or buckling when the muscle is left slack: keep a small pre-stretch and residual pressure (Festo). 7) Weak pull, because the muscle started slack (Shadow) or was asked to contract further than its maximum (Festo). 8) Jerky or imprecise positioning from braid friction and hysteresis (Chou and Hannaford 1996). 9) Cut sleeve ends fraying and unravelling: melt them (NFPA activity).
- **related**: 
  - Air or hydraulic cylinder: a piston in a tube that can push and pull over a long stroke with steadier force, but it is heavier, has sliding seals and suffers from stiction, which makes fine position control hard (Wikibooks)
  - Bellows and inflatable actuators: a folded or balloon-like chamber that gets longer (pushes) when pumped up, with no braid
  - Soft pneumatic bending actuator: a soft finger that curls when pumped up, using stiff and stretchy layers instead of a braid
  - Vacuum-driven artificial muscle: a folded skeleton sealed in a bag that contracts when air is sucked out, using suction instead of positive pressure
  - Woven self-tightening grip (finger-trap grip): the same kind of braid used passively, tightening on a rope or cable when pulled
  - Shape-memory-alloy wire (nitinol muscle wire): an electric 'muscle' wire that shortens when heated by a current; small stroke, no air supply
  - Twisted-string actuator and twisted-and-coiled polymer muscle: pulling actuators driven by a motor or by heat instead of air
  - Extensible McKibben: the same parts with the sleeve pre-shortened (baked on a rod) so the braid angle is steep and the muscle gets longer when pumped up (Open Soft Machines)

### Pictures, videos and models

- **links**: 
  - [Sam animation-real-muscle.gif (Rocketmagnet, Shadow Robot Company; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif): Animation of a Shadow Air Muscle shortening and fattening as it is inflated (used on Wikipedia's 'Pneumatic artificial muscles' page) *(licence: CC BY-SA 3.0)*
  - [Pneumatic muscles.jpg (from Actuators 11(10):288; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg): Comparison picture of different types of pneumatic artificial muscles *(licence: CC BY-SA 4.0)*
  - [Pneumatischer Muskel Aufbau (Red-Cali; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG): How a pneumatic muscle is built (mechanical set-up); a companion file 'Pneumatischer Muskel Dehnung' shows it stretched by a weight or by pressure *(licence: GFDL)*
  - [Recipe for McKibben-type artificial muscle (Osaka University) (Yoichi Masuda, YouTube)](https://www.youtube.com/watch?v=qQCDsxbvZqI): Video of making a McKibben muscle with printed plugs and crimped fittings (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [McKibben Artificial Muscle - opensoftmachines (Open Soft Machines, YouTube)](https://www.youtube.com/watch?v=oBkdKeTJ5NY): Video of a mini McKibben muscle contracting when inflated with a syringe (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
- **make_it_yourself**: 
  - [Recipe for McKibben-Type Pneumatic Muscle (Ishikawa lab, Osaka University)](https://ishikawa-lab.sakura.ne.jp/mckibben_eng): Step-by-step recipe, parts list, videos and printable ABS plug and holder files for a 9 mm crimped muscle that runs at up to 1 MPa and can be made in 1-3 minutes once practised *(licence: the page says the methods may be used without permission or credit; licence of the files not stated)*
  - [Art_muscles README (Yoichi Masuda, GitHub)](https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md): Parts lists (in Japanese) and STL files for 9, 7 and 5 mm McKibben muscles: ABS air stopper, resin couplers and caps, and a muscle holder *(licence: no licence file found in the repository)*
  - [Mini McKibben Pneumatic Artificial Muscle (Open Soft Machines)](https://opensoftmachines.com/2018/04/mini-mckibben/): 60-minute recipe using latex tubing, polyester sleeving, barbed fittings and cable ties, inflated with a syringe *(licence: not stated)*
  - [Mini 'Extensible' McKibben Pneumatic Artificial Muscle (Open Soft Machines)](https://opensoftmachines.com/2018/09/mini-extensible-mckibben/): The same parts, but the sleeve is pushed up short on a rod and baked at 120 C for 20 minutes so the finished muscle gets longer instead of shorter *(licence: not stated)*
  - [Making a Simple Air Muscle (William Gurstelle, Make:)](https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/): History of McKibben's invention plus a hardware-store build with silicone tubing, polyester sleeve, hose clamps, a nylon bolt and a 3-way valve *(licence: link only)*
  - [Build, Test, and Model a McKibben Air Muscle (NFPA classroom activity, PDF)](https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en): Classroom build with 3/8 in silicone tubing, polyester sleeving, brass fittings and a hose clamp, plus load tests at about 20 psi to compare with a computer model *(licence: link only)*
- **diagram_idea**: Two side-by-side cutaways of the same muscle, relaxed and inflated, with the braid drawn as a diamond lattice whose fibre angle widens towards about 55 degrees as the rubber tube swells, so the muscle gets fatter and shorter and lifts a weight; a small inset shows a Chinese finger trap doing the same thing in reverse.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pneumatic_artificial_muscles
  - https://en.wikibooks.org/wiki/Robotics/Components/Actuation_Devices/Air_muscle
  - https://www.motionworld.com/assets/festo-dmsp-fluidic-muscle-datasheet.pdf
  - http://lars.mec.ua.pt/public/LAR%20Projects/RobotActuation/2002_MarcoMelo_VascoQuinteiro/Projecto/Artigos_net/net/air%20muscles/Shadow%20Robot%20Company%20Air%20Muscles.htm
  - https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/
  - https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en
  - https://opensoftmachines.com/2018/04/mini-mckibben/
  - https://opensoftmachines.com/2018/09/mini-extensible-mckibben/
  - https://ishikawa-lab.sakura.ne.jp/mckibben_eng
  - https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md
  - https://bdml.stanford.edu/twiki/pub/HSR/HumanSafeRobot/ChouHannaford96.pdf
  - https://arxiv.org/pdf/2301.04684
  - https://api.crossref.org/works/10.1089/3dp.2018.0103
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://rubber-group.com/molded-rubber-bellows/
  - https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif
  - https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg
  - https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG
  - https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Dehnung.JPG
  - https://www.youtube.com/watch?v=qQCDsxbvZqI
  - https://www.youtube.com/watch?v=eiulN90-6HE
  - https://www.youtube.com/watch?v=oBkdKeTJ5NY
  - https://www.youtube.com/watch?v=iZ5Mo0pjALI

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, compressed air, liquid ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: lets go ⚑ *needs confirming (best guess): versions differ: lets go, keeps its last state*
- **motion_in**: pressure
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: crimper, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, power

## 289 Check valve (one-way valve: flap, ball or duckbill)

*hydraulics, pneumatics & vacuum.* A valve that lets air or liquid flow one way only, closed by a flap, a spring-loaded ball or a rubber beak that any backflow presses shut

*Also covers:* Also covers tyre valves (Schrader and Presta), reed valves and printed TPU duckbill valves.

### What it is

- **plain_name**: A little gate inside a pipe or tube that lets air or water through one way only: the flow pushes it open, and anything trying to flow back pushes it shut. The gate can be a hinged flap, a ball (often pushed by a spring), a thin springy reed, or a soft rubber 'duck's beak' whose lips are squeezed together by backflow
- **term**: Check valve (non-return valve, one-way valve)
- **aliases**: 
  - non-return valve (NRV)
  - one-way valve
  - reflux valve, retention valve (Wikipedia)
  - foot valve (a check valve at the bottom of a pump's suction pipe that keeps debris out and the pump primed; Tameson)
  - ball check valve; spring check valve; poppet check valve; in-line check valve
  - swing check valve, flapper valve, flap valve, clapper valve; tilting-disc and butterfly (double-flap) check valves
  - lift check valve; Y-check valve; stop-check valve (can also be shut by hand)
  - silent check valve or non-slam check valve (spring-closed)
  - diaphragm check valve; exhalation valve (on respirator masks)
  - duckbill valve (also called a spear valve or flutter valve); joker valve (three-flap version); cross-slit valve
  - reed valve
  - tyre valve: Schrader valve (American valve, AV, car valve), Presta valve (French valve, FV, Sclaverand valve) and Dunlop valve (Woods valve)
  - backflow preventer, double check valve, backwater valve (sewers)
  - aquarium check valve (air-line non-return valve)
  - fluid 'diode' (Wikipedia calls the electrical diode the electrical analogue of a check valve)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: seals & pass-throughs, one-way & ratchet
- **one_liner**: A two-port valve that works by itself: when the pressure on the inlet side beats the outlet side by a small 'cracking pressure', a flap, ball, poppet, reed or rubber beak moves aside and lets fluid through, and when the flow stops or reverses the same part is pressed back onto its seat to block it, making it the fluid version of a ratchet.
- **complexity**: A few parts, or a single piece. Ball or poppet type: a body with inlet and outlet, a seat (a tapered ring), a ball or disc, and often a spring and a guide (Tameson; Wikipedia). Swing type: body, hinged disc and seal (Tameson). Reed type: a thin flexible petal over a hole in a plate, with a stop plate that limits how far it opens (Wikipedia; Commons Mota-10 diagram). Duckbill: one moulded rubber piece (Wikipedia 'Duckbill valve'). Tyre valves: a valve stem with a removable spring-loaded core plus a cap (Schrader), or a stem with an inner valve body held shut by air pressure and a small locking nut (Presta) (Wikipedia).
- **how_it_works**: Every check valve has a closing part that is pushed one way by the flow and the other way by back-pressure, gravity or a spring. Forward flow only gets through once the pressure difference across the valve exceeds the cracking pressure, which lifts the ball, swings the flap, bends the reed or parts the rubber lips (Wikipedia; Tameson). When the inlet pressure falls or reverses, the part is pressed back onto its seat; a cone-shaped seat guides a ball back into place, and in a duckbill or reed valve higher back-pressure squeezes the lips or petal tighter, so the seal improves (Wikipedia). A spring makes it shut quickly in any position, while unsprung flaps and balls rely on gravity and so must be fitted the right way up (Tameson).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): lets air, water or oil flow one way and blocks the reverse, automatically and with no handle (Wikipedia)
  - seal it, or pass cables or fluid through: passes fluid along a tube while sealing against backflow, back-siphoning and contamination (Tameson; Wikipedia 'Backflow prevention device')
- **motion**: multiple: a ball, poppet or disc slides off its seat along the flow, a flap swings on a hinge, a reed bends, or a duckbill's lips flex apart; the movement is small and happens by itself
- **degrees_of_freedom**: 1: the closing part moves only between shut and open (along one line for a ball or poppet, about one hinge for a flap); a duckbill or reed bends instead of moving on a joint
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): forward flow opens it and reverse flow shuts it (Wikipedia)
  - self-aligning or self-centring: the seat of a ball check valve is tapered like a cone, which guides the ball back onto the seat to seal (Wikipedia)
  - fail-safe: a spring-closed valve shuts on its own as soon as the flow stops, for example when an aquarium air pump loses power and tank water would otherwise siphon back into it (Tameson; Aquarium Co-op)
  - quick-release (tyre valves only): pressing the centre pin of a Schrader valve, or undoing the small nut of a Presta valve and pressing it, opens it on purpose to let air out (Wikipedia)
- **holding_principle**: 
  - suction or air pressure: back-pressure pushes the ball, flap, reed or rubber lips onto the seat, so the seal gets tighter as the reverse pressure rises (Wikipedia: a reed valve's 'seal improves with back pressure'; a Presta valve is held shut by the air pressure in the tyre)
  - spring force: a spring holds a ball or poppet shut until the cracking pressure is reached; the springiness of a rubber duckbill or a thin reed does the same job (Tameson; Wikipedia)
  - shape (form-fit): a ball sits in a cone-shaped seat that is too small for it to pass through (Tameson; Wikipedia)
- **input_output**: not applicable (it passes fluid one way, not motion)
- **power**: passive (no power needed): the pressure difference across the valve opens and closes it, and it stays shut against backflow when a pump stops or the power fails (Wikipedia; Aquarium Co-op)
- **removability**: removable: most are threaded, push-fit, barbed or clamped into the line and can be taken out again; tyre-valve cores unscrew with a valve-core tool, and a duckbill is stretched over the end of a supply pipe (Wikipedia 'Schrader valve'; Wikipedia 'Duckbill valve'; Tameson)
- **reuse_cycles**: effectively unlimited opening and closing in normal use, though balls and seats wear or crack, springs tire and metal reeds fatigue, so these parts are made replaceable (Wikipedia; Tameson); valves can be fitted and removed many times
- **tools_needed**: none for push-in, barbed or aquarium valves (cut the tube and push the valve in); a spanner and PTFE tape for threaded valves, tightened hand-tight plus about half a turn (Tameson); a valve-core tool for Schrader and removable-core Presta valves (Wikipedia); a soldering iron to weld printed TPU valves into a printed part (tuyere, Printables)
- **seal**: airtight or pressure in the blocked direction: the closing part is pressed onto its seat by back-pressure, a spring or the rubber's springiness; a stronger spring seals better but needs more pressure to open (Tameson). Unsprung, gravity-closed and many 3D-printed valves may let a little through at low back-pressure (a printed ping-pong-ball valve is claimed 'about 99% effective', Printables), and a Tesla valve, which has no moving parts, always leaks (Wikipedia). On tyre valves, a cap with a rubber washer or O-ring is a second seal (Wikipedia 'Schrader valve')
- **load**: light to heavy pressure depending on the body: polypropylene spring check valves are rated up to about 6 bar and stainless or steel ones up to about 400 bar (Tameson); metal-printed hydraulic check valves have been tested to 400 bar (Hackaday). Home-printed plastic valves are for low pressures only. It is not a structural part: don't hang weight on it or use it to support pipes
- **adjustable**: usually no: the cracking pressure is fixed by the spring or the stiffness of the rubber, and is chosen when buying (Tameson). Some printed flap valves let you swap springs to change how easily they open (nolibert, Printables). A stop-check valve can also be shut by hand, and a heating-system 'flow check' has a screw to hold it open (Wikipedia)
- **play_and_precision**: not applicable (it doesn't locate parts or pass on motion)
- **access_needed**: end of a tube or shaft: fitted in line where a tube or pipe is cut, or screwed into a port; an aquarium valve goes in the air line outside the water (Aquarium Co-op); a duckbill is stretched over the outlet end of a pipe (Wikipedia)
- **materials**: Bodies: brass (often nickel-plated), stainless steel, PVC, polypropylene (PP) or nylon (PA) (Tameson). Seals and seats: EPDM, nitrile (NBR), FKM, PTFE, FEP or metal (Tameson). Balls: usually metal; ruby and sapphire balls and seats in high-pressure lab pumps (Wikipedia). Duckbills: rubber or synthetic elastomer (Wikipedia), often silicone. Reeds: leather in traditional pumps and bellows; flexible metal, fibreglass or carbon fibre in engines (Wikipedia). Printed: TPU for one-piece duckbill and cross-slit valves, PETG for duct flaps, with an O-ring, airsoft BB or ping-pong ball as the closing part (Printables models)
- **maker_difficulty**: easy to buy and fit: they are small, cheap and often push straight onto a tube (Wikipedia; Aquarium Co-op). Moderate to print one that seals well, because flexible TPU is hard to print and printed seats leak; printed valves suit low-pressure air and water, not pressure lines (Printables makers; Prusa)

### Making it

- **processes**: 
  - off-the-shelf part: aquarium, plumbing, pneumatic, tyre and medical check valves in plastic and metal (Tameson; Aquarium Co-op; Wikipedia)
  - 3D print (FDM): one-piece TPU duckbill and cross-slit valves, print-in-place 'compliant' check valves, flap valves for ducts, and ball check valves with a ball dropped in during a print pause (Printables models)
  - 3D print (metal, laser powder bed): compact hydraulic check valves tested to 400 bar (SunShine, via Hackaday)
  - moulded rubber: duckbill and joker valves are single moulded rubber or elastomer parts (Wikipedia)
- **print_in_place**: yes for some designs: one-piece TPU duckbill and cross-slit valves (tuyere, Printables) and SunShine's 'Print in Place Check-Valve!' (Printables) print complete and working. Partly for ball valves, where a ball (a 6 mm airsoft BB or a ping-pong ball) is dropped in at a print pause (Clough42 and xA59rhR8FF, Printables). Flap valves are printed as separate parts and assembled with springs and screws (nolibert, Printables)
- **making_tips_3d_printing**: 1) Easiest reliable print: a one-piece TPU duckbill. tuyere's designs (Printables) work well for air; the duckbill style leaks back less, while the cross-slit style flows more but leaks more. Print TPU slowly, one object at a time to limit stringing, and clean off stray hairs with a hot-air gun; when building valves into a squeeze-bulb pump, weld the seams with a soldering iron or the inlet valve can pop off when squeezed hard. 2) Ball valves: pause the print at the right layer and drop in the ball, e.g. a 6 mm airsoft BB at about 7.6 mm height in a TPU (85A) squeeze-bulb duster (Clough42, Printables), or a 40 mm ping-pong ball at about 65 mm in a 50 mm pipe valve printed solid (effectively 100% infill from many walls) with organic supports (xA59rhR8FF, Printables). Give the ball room to lift, and add a cross bar or posts so it can't block the outlet or rattle. 3) Sealing faces: add an O-ring or soft washer where you can; Duane's in-line valve for 19 mm (3/4 in) tube uses an O-ring from a tap fitting and prints without supports in the orientation shown (Printables). 4) Duct flaps: print the flap and inner ring in PETG and support the hinges; a light spring lets the flap open at low air pressure (nolibert, Printables). 5) Orientation: unsprung ball or flap valves must be mounted so gravity closes them (Tameson). 6) TPU absorbs moisture, so keep it dry, and print it slowly with little retraction (Prusa). 7) Printed valves are for low-pressure air and water, not 'mission critical or high pressure applications' (xA59rhR8FF, Printables). 8) A printed Tesla valve is not a substitute: with no moving parts it always leaks a little (Wikipedia 'Tesla valve').
- **off_the_shelf_parts**: In-line spring check valves (push-in, barbed or threaded: NPT, BSP or metric); ball check valves; swing and lift check valves; Y-check valves; foot valves; aquarium air-line check valves for standard airline tubing; silicone duckbill, cross-slit and joker valves; diaphragm check valves and respirator exhalation valves; reed valve blocks and reed petals (two-stroke engines, compressors); double check valves and backflow preventer assemblies (plumbing); Schrader and Presta valve stems and cores, valve-core tools, sealing valve caps, Presta-to-Schrader adapters. Check valves also come built into hand pumps, squeeze bulbs, dispenser pumps, hydraulic jacks and diaphragm pumps (Tameson; Wikipedia; Aquarium Co-op)
- **rules_of_thumb**: 
  - Cracking pressure: many check valves open at 1 bar (14.5 psi) or less. Choose one whose cracking pressure is below your normal working pressure so it doesn't chatter, and whose maximum pressure rating is above the highest pressure in the system (Tameson)
  - A stronger spring gives a higher cracking pressure and a better seal, but more pressure drop (Tameson 'Spring loaded check valves')
  - Orientation: spring-loaded valves work in any position; gravity-closed swing and lift valves go in horizontal pipes; an unsprung ball valve must be vertical with the flow going upwards; for upward flow, the weight of the liquid above adds to the cracking pressure (Tameson)
  - Fit it with the arrow pointing along the flow; if there's no arrow, push the closing part with a finger or thin rod to see which way it opens (Tameson)
  - Threaded valves: screw in hand-tight, then about half a turn more with a spanner; tightening further can damage the valve (Tameson 'Swing check valve')
  - Aquarium air lines: put the check valve outside the tank near the rim, with the flapper end facing the pump (Aquarium Co-op)
  - Where flow can reverse suddenly (a pump stopping, especially in vertical pipes), use spring-closed 'silent' or 'non-slam' check valves rather than swing checks, to limit water hammer (Tameson; Wikipedia 'Hydraulic shock')
  - A check valve alone is usually not an approved way to protect drinking water from backflow; codes ask for an air gap, a double check valve assembly or a reduced-pressure device (Wikipedia 'Backflow prevention device')
  - Reed valves open at very low pressure and respond quickly because the moving part is light, and their seal improves with back-pressure (Wikipedia 'Reed valve')
  - Tyre valves: Presta stems are 6 mm and Schrader and Dunlop stems 8 mm across; a Presta stem should be at least 10 mm longer than the rim is deep so a pump can be attached (Wikipedia 'Schrader valve'; 'Presta valve')
  - A Tesla valve is only 'a slightly leaking valve': a simulation found its reverse flow resistance only about 15-40 times its forward resistance, so use a real check valve where backflow must stop (Wikipedia 'Tesla valve')

### When to use it

- **everyday_examples**: 
  - The valve on a bike or car tyre (Schrader or Presta) that lets air in from the pump but not out (Wikipedia)
  - The little one-way valve in an aquarium air line that stops tank water siphoning back into the pump (Aquarium Co-op)
  - The flapper in a toilet cistern, and the valve on an inflatable mattress or pool toy (Wikipedia)
  - The ball valves inside a soap-dispenser pump or a rubber squeeze bulb, and the exhale valve on a dust mask (Wikipedia)
- **when_to_use**: Use one wherever fluid must only ever go one way without anyone operating a valve: keeping air in a tyre, ball or inflatable; stopping water siphoning back into an air pump; keeping a pump primed or a pipe full when the pump stops; making a pump work at all (a pair of check valves turns the in-and-out movement of a diaphragm, piston or squeeze bulb into one-way flow); letting a hydraulic jack build pressure; holding air in a soft actuator after the pump stops; and keeping two gas streams, or clean and dirty water, from mixing (Wikipedia 'Check valve'; Wikipedia 'Diaphragm pump'; Tameson; Aquarium Co-op). For drains, sewer outfalls and slurries, rubber duckbill valves are used because they don't slam and cope with suspended solids (Fluid Handling Pro).
- **when_not_to_use**: Don't rely on a check valve to shut a line off for maintenance or safety: it can stick or leak, so add a proper shut-off valve and vent the pressure first (Wikipedia 'Backflow prevention device' notes check valves are 'not considered to be reliable' compared with backflow assemblies). For drinking-water connections use an approved backflow preventer or an air gap (Wikipedia). To limit pressure use a pressure relief valve; to choose or switch the flow on command use a switching (directional) valve; to stop flow both ways by hand use a shut-off valve. A swing check valve is a poor choice for pulsing or frequently reversing flow; use a spring check valve instead (Tameson).
- **environment_limits**: Heat: plastic bodies are limited to about 60 C (PVC), 80 C (PP) and 90 C (PA); most brass valves to about 100 C; stainless steel to about -25 to 200 C (Tameson). Chemicals: pick body and seal materials (EPDM, NBR, FKM, PTFE) to suit the fluid; brass isn't suitable for seawater or chlorinated water (Tameson). Wear and fatigue: balls and seats wear or crack after long use, springs fatigue, and metal reeds suffer fatigue from fast, repeated impacts (Wikipedia; Tameson). Dirt: debris on the seat stops it sealing, and grit can get into a Schrader valve's spring-loaded pin (Wikipedia 'Schrader valve'; Tameson advises removing debris regularly). Printed TPU valves: TPU absorbs moisture but stays flexible in the cold (Prusa); printed PLA parts soften in hot water ⚑ [uncertain: not checked for valves]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Water hammer: a check valve that slams shut when a pump stops and the flow reverses ('check valve slam') sends a pressure surge through the pipe that can break pipes and fittings; water hammer has caused accidents and deaths (Wikipedia 'Hydraulic shock'). Use non-slam or spring check valves. 2) Trapped pressure: a check valve keeps pressure on its outlet side after the supply stops (that's how inflatables keep their air, Wikipedia), so a line or actuator can still be pressurised; vent it before undoing fittings (HSE HSG39 recommends vent valves that can be locked). 3) Never remove a Schrader valve core while the tyre or system is under pressure; let the air out first (moovmoov guide). 4) Compressed air can penetrate skin and blow particles into eyes, and a burst hose can whip (HSE HSG39). 5) Drinking water: a single check valve is usually not an approved backflow preventer (Wikipedia). 6) Aquariums: without a working check valve, siphoned water can damage the pump, flood the floor and, in extreme cases, reach electrics and start a fire (Aquarium Co-op). 7) Don't use printed check valves on pressure tanks or anything safety-critical, and never hold stored pressure in a 3D-printed part.
- **common_failures**: 1) Fitted backwards, so nothing flows and pressure builds up behind it (Tameson; Aquarium Co-op). 2) A gravity-closed valve fitted the wrong way up: a swing check in a downward-flow pipe stays open and never shuts (Tameson). 3) Dirt, scale or debris holding the ball or flap off its seat, so it leaks back: clean it regularly and check the ball and seat for wear (Tameson). 4) Chattering and wear when the cracking pressure is close to the working pressure (Tameson). 5) Slamming and water hammer from swing checks when flow reverses (Tameson; Wikipedia). 6) Worn or cracked seats and balls, tired springs and fatigue-cracked reeds after long use (Wikipedia; Tameson). 7) Leaking tyre-valve cores: tighten or replace the core, and use a cap with a seal as a backup, since simple caps don't stop leaks (Wikipedia 'Schrader valve'). 8) Printed valves: leaks past rough or uneven seats, and pressed-in TPU valves popping out when squeezed hard unless welded in (tuyere, Printables).
- **related**: 
  - Tesla valve: a channel with looping pockets and no moving parts; it only slows backflow and always leaks a little (Wikipedia)
  - Ratchet and pawl: the mechanical version of 'one way only' for turning parts
  - Pressure relief valve: also spring-loaded, but it opens only when the pressure gets too high, to stop things bursting
  - Switching valve (directional control or solenoid valve): opened, closed or switched on command, by hand, electricity or air
  - Shut-off valve (ball valve, tap): opened and closed by hand and stops flow in both directions; a ball check valve is not the same as a ball valve (Wikipedia)
  - Iris valve and pinch valve: closed on purpose by twisting or squeezing a soft sleeve, not by the direction of flow
  - Diaphragm pump and squeeze bulb: a flexing chamber between two check valves, which together make a pump (Wikipedia 'Diaphragm pump')
  - Backflow preventer (double check valve assembly, reduced-pressure zone device): two or more check valves plus test points, required to protect drinking water (Wikipedia)
  - Hose barb and quick couplers: the tube fittings check valves are usually connected with

### Pictures, videos and models

- **links**: 
  - [Checkvalveopen.svg (Mion, vectorised by Chris828; Wikimedia Commons), used with Checkvalveclosed.svg](https://commons.wikimedia.org/wiki/File:Checkvalveopen.svg): Cutaway of a spring-loaded ball check valve open to forward flow; the companion file shows it closed against reverse flow *(licence: CC BY-SA 3.0)*
  - [Swing Check Valve Opening and Closing (savree.com; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Swing_Check_Valve_Opening_and_Closing.webm): Animation of a hinged swing check valve opening with flow and closing when it stops *(licence: CC BY-SA 3.0)*
  - [Duck valve.png (Cowlinator; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Duck_valve.png): Cross-section of a duckbill valve: open with forward flow (top) and squeezed shut by backflow (bottom) *(licence: CC BY-SA 4.0)*
  - [Mota-10.gif (unknown author; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Mota-10.gif): Diagram of a reed valve: flexible petals over the holes in a reed block, with stop plates that limit how far they open *(licence: Public domain)*
  - [Valvola Schrader.jpg (A7N8X; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Valvola_Schrader.jpg): Schrader tyre valve taken apart: the core shown closed and open, the order of assembly, the stem with and without its core, and the cap *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [TPU Check/One-Way Valves - No Moving Parts! - and a Demonstration Keyboard Duster (Hand Pump) (tuyere, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1133240-tpu-checkone-way-valves-no-moving-parts-and-a-demo): One-piece print-in-place TPU duckbill and cross-slit check valves, plus an all-TPU squeeze-bulb air pump that uses two duckbills *(licence: CC BY-NC-SA)*
  - [Print in Place Check-Valve! (SunShine, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/243964-print-in-place-check-valve): Print-in-place plastic check valve from the maker of the metal-printed compliant check valves (0.4 mm nozzle, 0.2 mm layers) *(licence: CC BY)*
  - [Squeeze Bulb Duster with Gridfinity Tray and One-Way Valve (Clough42, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/999195-squeeze-bulb-duster-with-gridfinity-tray-and-one-w): 85A TPU squeeze bulb with a ball check valve in its base, using a 6 mm airsoft BB dropped in at a print pause *(licence: BSD)*
  - [Captive Ping Pong Ball One-Way Valve for 50mm Pipe (xA59rhR8FF, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/568665-captive-ping-pong-ball-one-way-valve-for-50mm-pipe): Gravity-closed ball check valve for 50 mm PVC pipe with a ping-pong ball inserted at a print pause; for low-pressure air *(licence: GPL v3)*
  - [Air System / Ventilation - Check Valve / Flap for 100mm / 4inch (nolibert, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/783642-air-system-ventilation-check-valve-flap-for-100mm-): Spring-assisted flap check valve for 100 mm ventilation ducts, with interchangeable springs to set the opening pressure *(licence: CC BY)*
  - [Check Valve - Inline (Duane, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/506442-check-valve-inline): In-line check valve for 19 mm (3/4 in) tube for air or water, sealed with an O-ring from a tap fitting *(licence: CC BY-SA)*
- **diagram_idea**: Four small cutaways in a row (spring-and-ball, hinged flap, reed petal and rubber duckbill), each drawn twice: once with green arrows pushing it open in the forward direction, and once with red arrows pressing it shut against its seat in reverse, with the cracking pressure shown as a small gauge.
- **sources**: 
  - https://en.wikipedia.org/wiki/Check_valve
  - https://en.wikipedia.org/wiki/Duckbill_valve
  - https://en.wikipedia.org/wiki/Reed_valve
  - https://en.wikipedia.org/wiki/Schrader_valve
  - https://en.wikipedia.org/wiki/Presta_valve
  - https://en.wikipedia.org/wiki/Hydraulic_shock
  - https://en.wikipedia.org/wiki/Backflow_prevention_device
  - https://en.wikipedia.org/wiki/Tesla_valve
  - https://en.wikipedia.org/wiki/Diaphragm_pump
  - https://tameson.com/pages/check-valves
  - https://tameson.com/pages/spring-loaded-check-valves
  - https://tameson.com/pages/swing-check-valve
  - https://tameson.com/pages/ball-check-valve
  - https://www.aquariumcoop.com/blogs/faqs/how-to-use-a-check-valve
  - https://fluidhandlingpro.com/news/what-is-a-duckbill-check-valve-and-how-does-it-work/
  - https://hackaday.com/2022/07/21/3d-printing-a-check-valve-in-metal/
  - https://www.youtube.com/watch?v=1E3Ajqaapqk
  - https://moovmoov.com/blogs/tuto/remove-schrader-valve-core
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://help.prusa3d.com/article/flexible-materials_2057
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1133240-tpu-checkone-way-valves-no-moving-parts-and-a-demo
  - https://www.printables.com/model/243964-print-in-place-check-valve
  - https://www.printables.com/model/999195-squeeze-bulb-duster-with-gridfinity-tray-and-one-w
  - https://www.printables.com/model/568665-captive-ping-pong-ball-one-way-valve-for-50mm-pipe
  - https://www.printables.com/model/783642-air-system-ventilation-check-valve-flap-for-100mm-
  - https://www.printables.com/model/506442-check-valve-inline
  - https://commons.wikimedia.org/wiki/File:Checkvalveopen.svg
  - https://commons.wikimedia.org/wiki/File:Checkvalveclosed.svg
  - https://commons.wikimedia.org/wiki/File:Swing_Check_Valve_Opening_and_Closing.webm
  - https://commons.wikimedia.org/wiki/File:Duck_valve.png
  - https://commons.wikimedia.org/wiki/File:Mota-10.gif
  - https://commons.wikimedia.org/wiki/File:Valvola_Schrader.jpg
  - https://commons.wikimedia.org/wiki/File:Schrader_valve_opening_and_closing_on_a_tire.gif

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, soldering iron, hand tools
- **load_max**: heavy
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
- **one_way_kind**: for air or liquid
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: one way or let off pressure
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits

## 300 Syringe hydraulics (hydraulic lever, Pascal's principle)

*hydraulics, pneumatics & vacuum.* Two syringes or cylinders joined by a water-filled tube, so pushing one plunger pushes the other; a small one driving a big one trades distance for force, as in school hydraulic arms, car jacks and bike brakes

*Also covers:* Baseline entry for the family. Also covers master and slave cylinders (brakes), the hydraulic jack and press, water versus air (air feels spongy) and rolling-diaphragm hydrostatic transmissions for robot arms. Also covers hydraulic motion reduction for fine positioning (the micromanipulator principle). Also covers why several cylinders on one line don't stay in step, and how to keep them in step (a mechanical rack-and-pinion tie, or a flow divider).

### What it is

- **plain_name**: Two syringes (or cylinders) joined by a tube full of water: push one plunger in and the other plunger slides out. If the second syringe is fatter than the first, it pushes much harder but moves a shorter distance, so a small push can lift something heavy, like a lever made of water
- **term**: Hydraulic lever (syringe hydraulics; Pascal's principle; master and slave cylinders)
- **aliases**: 
  - syringe hydraulics, syringe hydraulic arm, hydraulic arm (school and museum activity, Exploratorium)
  - hydraulic lever: the hydraulic press 'uses the hydraulic equivalent of a mechanical lever' (Wikipedia 'Hydraulic press')
  - Pascal's law, Pascal's principle, principle of transmission of fluid-pressure (Wikipedia)
  - master cylinder and slave cylinder (car brakes and hydraulic clutches); wheel cylinder; caliper piston (Wikipedia 'Master cylinder', 'Hydraulic brake')
  - hydraulic jack, bottle jack (whiskey jack), floor jack, trolley jack, air hydraulic jack (Wikipedia 'Jack (device)')
  - hydraulic press, Bramah press (Wikipedia)
  - hydraulic lift (car lift, dentist chair, wheelchair lift) (Science Buddies)
  - hydraulic disc brake and hydraulic rim brake on bicycles (Wikipedia 'Bicycle brake')
  - hydrostatic transmission, passive fluid transmission, rolling-diaphragm transmission (robotics; Disney Research)
  - miniature hydraulics, mini hydraulics, micro hydraulics (models; Wikipedia)
  - closed hydraulic system (Wikipedia 'Hydraulic brake')
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: gear trains, gearboxes & transmissions
- **one_liner**: A sealed tube of liquid with a piston at each end, so that pushing one piston pushes the other one wherever the tube goes; because the pressure is the same everywhere in the liquid, a small piston driving a large one multiplies the force and divides the distance by the ratio of their areas, just as a lever does.
- **complexity**: A few parts acting as one unit. Syringe version: two syringes (each a barrel and a plunger with a rubber tip), a length of flexible tube and water (Exploratorium; Science Buddies). Brake version: lever or pedal, pushrod, master cylinder (piston, return spring, seals and a fluid reservoir), reinforced hoses, and one or more caliper or wheel cylinders (slave cylinders) (Wikipedia 'Hydraulic brake'). Jack or press version: oil reservoir, small pump piston and pump cylinder, two check valves, big main cylinder and ram (main piston), and a release valve (Wikipedia 'Jack (device)'; Potter USA bottle jack guide). Robot version: pairs of rolling-diaphragm cylinders joined by tubing, with timing belts or gears turning the push into rotation (Disney Research).
- **how_it_works**: Liquid hardly squashes at all, so when you push one plunger the liquid has to go somewhere, and the only part of its container that can give way is the other plunger, which moves out (Exploratorium; Science Buddies). Pascal's law says the extra pressure is passed on equally to every part of the trapped liquid (Wikipedia), and force equals pressure times area, so a piston with 50 times the area pushes 50 times harder but moves only one-fiftieth as far: the work in equals the work out, exactly as with a lever (Wikipedia 'Pascal's law'). Pulling the first plunger back sucks the second one back too, so a plain pair works both ways (Exploratorium). A jack or press adds two one-way valves (check valves) so that many short strokes of a small pump piston add up to one long, strong lift, and the load stays up until a release valve lets the oil flow back to the reservoir (Wikipedia 'Jack (device)'; Potter USA).

### Finder attributes

- **job**: 
  - change speed or turning force: a small piston driving a big one multiplies force and divides distance by the area ratio, the fluid version of a lever (Wikipedia 'Pascal's law', 'Hydraulic press')
  - let it move (turn, slide or bend): carries a push or pull along a bendy tube to a part somewhere else, like a Bowden cable but with much less friction round bends (Disney Research)
  - lock, and release by hand: in a hydraulic jack or press, check valves trap the oil so the load stays up until you open the release valve (Wikipedia 'Jack (device)'; Potter USA)
- **motion**: slide: each plunger or piston slides in a straight line in its cylinder; what it pushes can swing, e.g. the Exploratorium arm pivots on a bolt as the syringe extends (Exploratorium). Stroke is limited by the syringe length; a jack gets a long lift from many short pump strokes (Wikipedia 'Jack (device)')
- **degrees_of_freedom**: 1 per liquid line: each sealed tube links one input movement to one output movement (several outputs can share one line, such as a car's brake calipers, but they only move together when each meets the same resistance, as calipers do when they all stop on the disc; see the rule of thumb on keeping cylinders in step). A robot arm needs one line (or one pair of lines) per joint (Disney Research: N water lines plus 1 shared air line for N joints)
- **special_behaviour**: 
  - motion conversion: changes force and distance by the ratio of piston areas and sends the push round corners and along any route the tube takes; for example a master piston half the diameter of the slave piston moves 4 times as far with a quarter of the force (Wikipedia 'Hydraulic brake')
  - hand-release only (jacks and presses): check valves stop the oil flowing back, so the ram holds its load until a person opens the release valve (Wikipedia 'Jack (device)'; Potter USA)
  - none of the locking behaviours for a plain syringe pair: it is fully back-drivable, so pushing on the output plunger pushes the input back (Exploratorium; Disney Research: 'complete backdrivability')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes a push or pull from one place to another. In a jack the trapped, almost incompressible oil behind the check valves is what holds the load up (Wikipedia 'Jack (device)')
- **input_output**: Straight push or pull -> straight push or pull somewhere else (and, through a lever arm, a swing; Exploratorium). Force ratio = output piston area / input piston area = (output bore / input bore) squared; the distance ratio is the inverse, e.g. 1 N on the small piston of a pair with a 50:1 area ratio gives 50 N, and a 100 cm stroke gives 2 cm (Wikipedia 'Pascal's law'); identical syringes give the same force and the same distance (Exploratorium). Efficiency: no measured figure found for syringe pairs; rubber plunger seals add friction ⚑ [uncertain]. Rolling-diaphragm cylinders, which have no sliding seal, had static friction of 1% of full-range torque or less (Disney Research 2014). Arrangement: input and output can be in line, at any angle or far apart, because the tube can be routed anywhere; fluid transmissions 'offer greater routing flexibility than cable drives and Bowden cable transmissions' (Disney Research 2014). Back-drivable: yes for a plain closed pair; no for a jack or press until its release valve is opened (Potter USA). *(⚑ parts need confirming)*
- **power**: passive (no power needed): your hand or foot supplies the push, as in syringe arms, brake levers and hand-pumped jacks (Exploratorium; Wikipedia 'Hydraulic brake'). Powered versions exist: an air hydraulic jack is pumped by compressed air, and car brakes add a vacuum booster to multiply the driver's force (Wikipedia 'Jack (device)', 'Hydraulic brake'). Robot transmissions are driven by an electric motor at the input end (Disney Research)
- **removability**: removable: syringe tubes push onto the tips and pull off (Exploratorium); car and bike brake systems are sealed, and opening them lets air in, so they must be bled afterwards (Park Tool; Wikipedia 'Hydraulic brake')
- **reuse_cycles**: many times: syringes and tubes can be emptied, refilled and reconnected over and over, though push-on tube ends loosen and may need tape or putty (Science Buddies)
- **tools_needed**: none for a basic syringe pair: fill the syringe and tube under water (Science Buddies); scissors for tubing and a drill, screwdriver and pliers for the Exploratorium wooden arm (Exploratorium); tape, plumber's putty or hot glue to keep tubes on (Science Buddies; Printables 632407). Bike brakes need a bleed kit of syringes and hoses plus safety glasses and gloves (Park Tool). Bottle jacks need a screwdriver for the oil-fill plug and jack oil (Potter USA)
- **seal**: watertight at low pressure for syringes (the rubber plunger tip and the push fit of the tube on the tip); pressure-tight for brakes, jacks and presses, which are closed systems sealed with O-rings and piston seals (Wikipedia 'Hydraulic brake'). Rolling-diaphragm cylinders seal with a rolling rubber sleeve instead of a sliding seal, so they don't leak or stick (Disney Research 2014)
- **load**: light for syringe models: a 10 mL syringe arm lifts small toys or a set of keys (Exploratorium) and 25 mL and 60 mL syringes lift jars of water (Science Buddies). Heavy for bought jacks and presses: bottle jacks go up to 50 tons (Wikipedia 'Jack (device)'). Strong when pushing along the cylinder's axis; weak against sideways loads on the plungers and against pulling the tube off its tips. Pulling only works by suction, which is limited to about one atmosphere before the liquid cavitates (Disney Research 2014), so a syringe pulls far more weakly than it pushes
- **adjustable**: yes: swap one syringe for a different size to change the force and distance ratio (Exploratorium swaps a 10 mL for a 1 mL syringe); add or remove liquid to change where the output sits when the input is at rest; robot transmissions are pre-pressurised and their preload can be adjusted (Disney Research)
- **play_and_precision**: Small play when the system is full of liquid with no bubbles; any air bubbles compress and make it feel soft and spongy, with lost motion (Park Tool). Soft or balloon-like tubing also adds springiness, so Disney Research used rigid nylon tubing for water to keep it stiff (Disney Research 2014). Sliding-seal systems slowly leak, so the input and output drift out of step over time (Disney Research 2014). It tolerates misalignment very well because the tube bends anywhere. For fine positioning the movement-reducing mechanism usually has to be free of backlash (Wikipedia 'Micromanipulator'), so bubbles and soft tubing matter even more there.
- **access_needed**: not applicable: the two cylinders are mounted wherever needed and joined by a tube; you only need to reach the tube ends (or the fill and bleed ports) to fill and connect it
- **materials**: Cylinders: plastic syringes (Exploratorium; Science Buddies); metal master and caliper cylinders with O-ring-sealed pistons (Wikipedia 'Hydraulic brake'); fabric-reinforced nitrile rubber rolling diaphragms (Disney Research 2014). Tube: clear plastic tubing (Exploratorium), silicone fuel tubing (Science Buddies), nylon tubing (Disney Research), reinforced brake hoses (Wikipedia). Liquid: water for models (Exploratorium; Printables 1037944 recommends water); oil in jacks because it is 'self-lubricating and stable' (Wikipedia 'Jack (device)'); brake fluids are glycol-ether (DOT 3, 4, 5.1), silicone (DOT 5) or mineral oil (Shimano and Magura bike brakes) (Wikipedia 'Brake fluid'). Frames: pine and screws (Exploratorium), PLA prints (Printables models), steel wall plates glued to the plungers (Science Buddies)
- **maker_difficulty**: easy: syringes, tube and water, with a printed or wooden frame; the main skill is getting all the air bubbles out (Exploratorium; Science Buddies). Hard to build a high-pressure system such as a jack, press or brake yourself, so buy those

### Making it

- **processes**: 
  - off-the-shelf part: plastic syringes (catheter-tip, Luer-slip or Luer-lock), flexible tubing, bottle jacks and shop presses, brake master and slave cylinders, rolling-diaphragm cylinders (Science Buddies; Wikipedia; Disney Research)
  - 3D print (FDM): frames, syringe holders, clamps, arms and linkages around bought syringes (Printables models 1037944, 632407, 632421, 74121, 550862, 772606)
  - woodwork: the Exploratorium hydraulic arm is pine boards, a post and an arm held with screws, washers and wing nuts (Exploratorium)
- **print_in_place**: no: the syringes, tube and liquid are bought, and the printed frame, holders and arms are separate parts assembled around them with glue, rods or screws (Printables 1037944; Printables 772606 needs 12 M3 screws)
- **making_tips_3d_printing**: 1) Don't print the cylinder: use bought syringes as the cylinders and print only the frame, clamps and arms (all the Printables syringe models do this). Printed hollow parts leak at their corners under pressure, and a printed PLA air tank burst at 5.5 bar (CVRA), so never hold stored pressure in a printed part. 2) Let both ends pivot: the syringe swings as the arm moves, so mount the barrel in a loop that can turn on a bolt and pin the plunger end with a pin or nail through a hole drilled in the plunger (Exploratorium uses a cable-tie loop on a machine screw, and a nail through a 1/8 in hole in the plunger). 3) Stop the plunger pulling out: Exploratorium drives a small screw into each barrel just below the flange as a stop. 4) Fill without bubbles: fill one syringe and the tube completely, flick the tube to bring bubbles up and top it off, push the other syringe's plunger fully in so it holds no air, then join them (Exploratorium); or hold the syringe tip up, push the air out, and draw water through the tube several times (Science Buddies). 5) Keep the tube on: tubes pop off when pushed hard, so seal joints with plumber's putty, tape or hot glue (Science Buddies; Printables 632407), or use Luer-lock syringes whose threaded collar stops the cone being pulled apart (see Taper fit). 6) Pick the ratio for the job: equal syringes give equal force and movement; a small syringe driving a large one gives more force and less movement (Exploratorium; Science Buddies: 25 mL and 60 mL syringes work well together). 7) Avoid dead points in the linkage: the printed shovel's four-bar linkage has a 'singularity' when the syringe is fully retracted (Printables 1037944), so lay out the arm so the syringe never lines up with the link it drives. 8) Make legs and thin arms strong: a one-piece printed press stand broke its legs on the first drop because the layers ran across the legs; the redesign prints separate parts joined with M3 screws (Printables 772606). Turn parts so layers run along thin legs and arms ⚑ [uncertain: general FDM practice, not tested here]. 9) Rods and pins: the printed shovel uses 5.6 mm by 46 mm printed rods, or wooden sticks of the same size (Printables 1037944). 10) If the arm tips over when lifting, weight the base (Exploratorium). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Syringes from 1 mL to 60 mL with catheter tips, Luer-slip or Luer-lock tips (Exploratorium; Science Buddies; Printables 632407 uses 20 mL and 10 mL); clear vinyl, aquarium air-line or silicone fuel tubing, e.g. 5/32 in (about 4 mm) inside diameter (Science Buddies); plumber's putty. Hydraulic bottle jacks and floor (trolley) jacks with release valves, air hydraulic jacks, hydraulic shop presses, hydraulic jack oil (Wikipedia 'Jack (device)'; Potter USA). Brake master cylinders (single and tandem), wheel cylinders, calipers, hydraulic clutch master and slave cylinders, brake hoses; bicycle hydraulic disc-brake levers, hoses and calipers; brake fluids DOT 3, DOT 4, DOT 5.1, DOT 5 (silicone) and mineral oil, plus matching bleed kits (Wikipedia; Park Tool). Rolling-diaphragm seals and cylinders (e.g. Control Air (brand), as used by Disney Research)
- **rules_of_thumb**: 
  - Force multiplies by the area ratio and distance divides by it: 1 N on a small piston lifts 50 N on a piston of 50 times the area, but a 100 cm push moves the big piston only 2 cm; force times distance stays the same (Wikipedia 'Pascal's law'; Exploratorium)
  - Area goes with diameter squared: a master piston of half the slave's diameter has a quarter of the area, so pushing it 40 mm with 10 N moves the slave 10 mm with 40 N (Wikipedia 'Hydraulic brake')
  - Two identical syringes pass on the same force and the same distance; swapping the hand syringe from 10 mL to 1 mL makes the push much easier but the arm moves much less (Exploratorium)
  - Volume in = volume out: the big piston can only move as far as the small syringe's volume allows, so for a long, strong stroke add two check valves and pump repeatedly, as a jack does (Wikipedia 'Jack (device)')
  - Get every bubble out: 'Air bubbles will compress and cause the brake to feel soft' (Park Tool); in brakes, boiled fluid turns to vapour, which 'is highly compressible relative to liquid' and stops the brake working (Wikipedia 'Brake fluid')
  - Pushing is strong but pulling is weak: liquid can only pull by suction, limited to about one atmosphere of reverse pressure before it cavitates (Disney Research 2014). For strong two-way motion, push one way and return with a spring or weight, use one line per direction, or pre-pressurise both sides as robot transmissions do (to half the maximum pressure; Disney Research 2014)
  - Keep the line stiff: use rigid or reinforced tubing and as little trapped air as possible; Disney Research used rigid nylon tubing (4.3 mm inside diameter) for water, and found that air-filled stiffness falls as the volume of air in the tubing rises (Disney Research 2014)
  - A separate pump means only small-diameter tubing is needed, because narrow tubing resists pressure more easily (Wikipedia 'Hydraulic press')
  - Rolling-diaphragm cylinders are low-pressure parts, typically limited to 10 bar (off-the-shelf up to 17 bar), with a stroke of only about one bore diameter, and they need positive pressure at all times or the diaphragm folds and jams (Disney Research 2014)
  - Bottle jacks: open the release valve only about a quarter turn; store and carry them upright, because laying them down lets air in and 'air-locks' them; purge air by opening the release valve and pumping about 20 times (Potter USA)
  - Bike brakes: never put DOT fluid in a mineral-oil brake or the other way round, and never share bleed kits between them (Park Tool)
  - Several cylinders on one line don't stay in step by themselves: with a tee splitting the flow, 'if the resistance in all the branches is not identical, flow can vary greatly in each path', so the cylinder with the lighter load or less drag moves first or 'runs away' (Power & Motion 'Flow divider circuits'). To keep them together, tie them mechanically, for example a rack on each piston rod with the pinions fixed to one shaft (a chain and sprockets works only if they must keep in step in one direction), or use a flow divider (Power & Motion 'Synchronizing circuits'; HAWE fluid lexicon 'Open loop synchronisation control').

### When to use it

- **everyday_examples**: 
  - The brake pedal of a car and the brake lever of a mountain bike with hydraulic disc brakes: a small master cylinder pushes fluid to the brake pistons (Wikipedia 'Hydraulic brake', 'Bicycle brake')
  - A car jack or bottle jack, and the hydraulic lifts at a garage or in a dentist's chair (Wikipedia 'Jack (device)'; Science Buddies)
  - The syringe-powered 'hydraulic arm' or digger built in school science and technology lessons (Exploratorium; Printables models)
  - The arms of garbage trucks and the blades of bulldozers (Exploratorium)
- **when_to_use**: Use it when you want to move something from a distance or round corners with a simple push, especially where a cable would rub: the tube can go anywhere and has far less friction than a Bowden cable round tight bends (Disney Research 2014). Use a small-to-large pair to multiply your force, for lifting, pressing or clamping something heavy with a small effort (Wikipedia 'Hydraulic press'), or a large-to-small pair to make a small movement bigger. It is ideal for teaching and models (syringe arms, diggers, lifts, cranes; Exploratorium; Printables), and for low-friction, back-drivable robot joints where the motor is kept in the body and the arm stays light (Disney Research). Buy a jack or press when you need tons of force for pressing bearings, forming metal or lifting (Wikipedia 'Hydraulic press'; Potter USA). A small-to-large pair also scales a movement down for fine positioning: micromanipulators reduce a hand movement 'hydraulically using pistons of different diameters connected by tubing containing non-compressible fluid' (Wikipedia 'Micromanipulator'), so a maker can use the same idea to nudge a probe onto a circuit board under a microscope from a distance (the micromanipulator itself is a whole instrument and outside this entry).
- **when_not_to_use**: Not for long strokes from a small input: volume in equals volume out, so you'd need a huge input syringe or a pump with check valves (Wikipedia 'Jack (device)'). Not for holding a position for hours: sliding seals leak and the two ends drift out of step (Disney Research 2014), so use a lead screw or a self-locking worm drive instead. Not for strong pulling: suction is limited to about one atmosphere (Disney Research 2014). For a simple pull over a short, gentle route a Bowden cable is simpler and dry; for a compact, rigid force multiplier use a lever, bell crank or gears; for powered, repeated motion use an air or hydraulic cylinder with a valve, or an electric linear actuator. Don't use a home-made system where failure could hurt someone, such as brakes or anything holding a person or a car up: buy rated parts, and never rely on a jack alone (HSE).
- **environment_limits**: Water freezes and expands, which can split syringes or tubes left in the cold ⚑ [uncertain: not checked against a source]. Glycol-ether brake fluids (DOT 3, 4, 5.1) absorb water from the air, which lowers their boiling point; mineral-oil and silicone fluids don't (Wikipedia 'Brake fluid'). Hot brakes on long descents can boil the fluid, which turns to compressible vapour and the brake fails (Wikipedia 'Bicycle brake', 'Brake fluid'). DOT fluid is corrosive to frame paint (Wikipedia 'Bicycle brake'). Silicone fluid is more compressible than glycol fluid, so brakes feel spongier (Wikipedia 'Brake fluid'). Mixing fluids or contaminating them with water, alcohol or antifreeze can crack seals and cause leaks (Wikipedia 'Hydraulic brake'). Rolling diaphragms are limited to low pressures, typically 10 bar (Disney Research 2014). *(⚑ parts need confirming)*
- **safety_notes**: 1) Syringe models are low risk (a school activity), but use syringes without needles and keep water away from electronics (own advice). 2) Jacks: vehicles falling or rolling off badly placed jacks or stands are 'one of the main causes of fatal accidents in motor vehicle repair'; never work under anything held up by a jack alone, always add axle stands and chock the wheels (HSE 'Working under vehicles'). 3) Brakes are safety-critical: 'Hydraulic brakes rarely fail, but failure tends to be complete' (Wikipedia 'Bicycle brake'); the wrong fluid makes seals fail and can lead to brake failure (Park Tool; Wikipedia); wear safety glasses and gloves when bleeding brakes (Park Tool). 4) High pressure: a small piston driven hard makes very high pressure, and a jet of oil from a pin-hole leak can inject fluid under the skin; serious cases have happened above 100 bar and possibly as low as 7 bar, and need immediate hospital treatment (HSE hydraulic injection bulletin). 5) Pinch points: keep fingers out of the arm and linkage as it moves. 6) Never hold stored pressure in a 3D-printed part: a printed PLA air tank exploded at 5.5 bar (CVRA).
- **common_failures**: 1) Spongy, weak or jerky movement from air bubbles: refill under water and push the bubbles out (Exploratorium; Science Buddies; Park Tool). 2) Tube pops off the syringe tip when pushed hard: refill and refit it, then seal with plumber's putty or tape (Science Buddies), or use Luer-lock syringes. 3) Plunger pulled right out of the barrel: add a stop screw (Exploratorium). 4) Slow leaks past plunger seals, so the two ends drift out of step (Disney Research 2014). 5) Arm tips over under load: add weight to the base (Exploratorium). 6) Linkage jams at a dead point when the syringe is fully in (Printables 1037944). 7) Jack won't lift or won't build pressure: low oil, or air trapped after it was laid on its side; jack creeps or leaks oil when the release valve is opened too far (Potter USA). 8) Brakes: soft lever from air or the wrong fluid swelling the seals, pistons that won't retract and a scraping disc (Wikipedia 'Bicycle brake'); fade from boiling fluid on long descents (Wikipedia). 9) Two output syringes or cylinders on one line drift apart or move one after the other, because the lighter-loaded one takes the flow first: tie them together mechanically or give each its own line (Power & Motion).
- **related**: 
  - Bowden cable: carries a push or pull through a sleeve, but can't change the force, and its friction grows rapidly with every bend (Disney Research 2014)
  - Air or hydraulic cylinder: the powered version, where a pump or compressor and a valve drive the piston instead of a second syringe
  - Syringe pump: a motor and lead screw push a single syringe slowly and precisely to dispense liquid, rather than to move a part
  - Check valve: the one-way valves that turn a hydraulic pair into a jack that pumps up and holds
  - Bell crank, whippletree and other levers: change force and direction with rigid bars instead of liquid
  - Pulley system (block and tackle): trades distance for force with rope instead of liquid
  - Lead screw and nut: a screw jack lifts slowly and holds by itself without leaking
  - Bellows and inflatable actuators: push with a flexible chamber and no sliding seal, like the rolling diaphragm
  - Capstan cable drive (tendon drive): the low-friction cable alternative for robot arms (Disney Research 2014)
  - Taper fit (Luer taper), Hose barb and Quick couplers: the fittings that join syringes and tubes
  - Cable splitter: the cable version of one input driving two outputs; it pulls both cables the same distance but does not balance their force

### Pictures, videos and models

- **links**: 
  - [Hydraulic Arm (Exploratorium Science Snack)](https://www.exploratorium.edu/snacks/hydraulic-arm): Photos, an exploded drawing and step-by-step build of a wooden arm lifted by a water-filled pair of 10 mL syringes, with the Pascal's-principle explanation and the 1 mL syringe swap *(licence: CC BY-NC-SA 4.0)*
  - [Working principle of a hydraulic jack.svg (Olivier Cleynen; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg): Diagram of a small hand piston joined by a pipe to a large piston that lifts a car *(licence: CC0)*
  - [Hydraulic Force, language neutral.png (Darbyshmr; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_Force,_language_neutral.png): Wordless diagram of the hydraulic force ratio: small force and long stroke on a small piston, big force and short stroke on a big piston *(licence: Public domain)*
  - [Hydraulic disc brake diagram.gif (KDS444; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_disc_brake_diagram.gif): Animation of a hydraulic disc brake: the master cylinder pushes fluid to the caliper pistons, which squeeze the pads onto the disc *(licence: CC BY-SA 3.0)*
  - [A Low-Friction Passive Fluid Transmission and Fluid-Tendon Soft Actuator (Whitney, Glisson, Brockmeyer and Hodgins, IROS 2014)](https://la.disneyresearch.com/wp-content/uploads/Project_FluidSoftActuator_IROS14_paper.pdf): Paper with photos and cutaway diagrams of rolling-diaphragm cylinders and a bench-top water or air transmission joining two robot joints *(licence: link only (copyright))*
- **make_it_yourself**: 
  - [Hidraulic shovel with sringe (Oscar NaOH, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1037944-hidraulic-shovel-with-sringe): Printed four-bar digger shovel moved by two 60 mL syringes and a water-filled tube; made for teaching linkages and hydraulics *(licence: CC BY)*
  - [HYDRAULIC PRESS (GML, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/632407-hydraulic-press): Model press driven by a 10 mL syringe pushing four 20 mL syringes; printable or buildable in wood, with tips on fixing tubes to syringes *(licence: CC BY-SA)*
  - [Control panel for hydraulic tools with syringes (GML, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/632421-control-panel-for-hydraulic-tools-with-syringes): Modular holder for 20 mL control syringes, to build a control panel with as many levers as a syringe-powered machine needs *(licence: CC BY-NC-SA)*
  - [Idraulic Double Scissor Lift Table (GML, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/550862-idraulic-double-scissor-lift-table): Double scissor lift platform raised by a 20 mL syringe acting as the hydraulic cylinder *(licence: CC BY)*
  - [Robot Shangai hydraulic arm (CadoEnterprise, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/74121-robot-shangai-hydraulic-arm): Printed robot arm kit driven by 5 mL syringes, with a PDF build guide and a palletising game *(licence: CC BY-NC)*
  - [Simple hydraulic press (stand for joined syringes) (GymRBK, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/772606-stojanek-na-injekcni-strikacky-model-hydraulickeho): Classroom stand holding a 5 mL and a 20 mL syringe joined by aquarium tubing, to demonstrate Pascal's law *(licence: CC BY-NC-SA)*
- **diagram_idea**: A thin syringe and a fat syringe joined by a curving blue tube: a small hand pushes the thin plunger a long way (long arrow, small force label) while the fat plunger lifts a heavy block a short way (short arrow, big force label), with the same 'pressure' gauge reading at both ends and a small inset showing an air bubble squashing to explain the spongy feel.
- **sources**: 
  - https://www.exploratorium.edu/snacks/hydraulic-arm
  - https://www.sciencebuddies.org/stem-activities/lift-a-load-using-liquids
  - https://en.wikipedia.org/wiki/Pascal%27s_law
  - https://en.wikipedia.org/wiki/Hydraulic_press
  - https://en.wikipedia.org/wiki/Hydraulic_brake
  - https://en.wikipedia.org/wiki/Master_cylinder
  - https://en.wikipedia.org/wiki/Jack_(device)
  - https://en.wikipedia.org/wiki/Brake_fluid
  - https://en.wikipedia.org/wiki/Bicycle_brake
  - https://en.wikipedia.org/wiki/Miniature_hydraulics
  - https://en.wikipedia.org/wiki/Pneumatics
  - https://phys.org/news/2014-10-hybrid-fluid-transmission-enabling-swift.html
  - https://la.disneyresearch.com/wp-content/uploads/Project_FluidSoftActuator_IROS14_paper.pdf
  - https://studios.disneyresearch.com/wp-content/uploads/2016/05/A-Hybrid-Hydrostatic-Transmission-and-Human-Safe-Haptic-Telepresence-Robot-1.pdf
  - https://www.parktool.com/en-us/blog/repair-help/brake-bleeding-for-shimano-drop-bar-hydraulic-brakes-using-the-bkm-1
  - https://www.potterusa.com/images/uploaded/Bottle%20Jack%20Instructions%20(1).pdf
  - https://www.hse.gov.uk/MVR/mechanical-repair/under-vehicles.htm
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://cvra.ch/blog/2016/airtank
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1037944-hidraulic-shovel-with-sringe
  - https://www.printables.com/model/632407-hydraulic-press
  - https://www.printables.com/model/632421-control-panel-for-hydraulic-tools-with-syringes
  - https://www.printables.com/model/550862-idraulic-double-scissor-lift-table
  - https://www.printables.com/model/74121-robot-shangai-hydraulic-arm
  - https://www.printables.com/model/772606-stojanek-na-injekcni-strikacky-model-hydraulickeho
  - https://commons.wikimedia.org/wiki/File:Working_principle_of_a_hydraulic_jack.svg
  - https://commons.wikimedia.org/wiki/File:Hydraulic_Force,_language_neutral.png
  - https://commons.wikimedia.org/wiki/File:Hydraulic_disc_brake_diagram.gif
  - https://commons.wikimedia.org/wiki/File:Master_cylinder_diagram.svg
  - https://en.wikipedia.org/wiki/Micromanipulator
  - https://www.powermotiontech.com/technologies/other-technologies/article/21883443/book-2-chapter-11-flow-divider-circuits
  - https://www.powermotiontech.com/hydraulics/hydraulic-valves/article/21885035/synchronizing-circuits
  - https://www.hawe.com/fluid-lexicon/detail/open-loop-synchronisation-control/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: straight push or pull
- **motion_out**: back-and-forth turning, straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, drill and tap, hand tools
- **load_max**: light
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
- **slide_kind**: pushed by a screw, chain or crank
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: cables, pulleys or liquid
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
- **drive_split**: pushes, pulls or flow shared out
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, paper or card

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, making_tips_3d_printing

## 301 Air or hydraulic cylinder (pneumatic cylinder, hydraulic ram)

*hydraulics, pneumatics & vacuum.* A piston in a tube that pushes a rod out when air or oil is let in behind it; a single-acting cylinder returns by a spring or gravity, a double-acting one is driven both ways

*Also covers:* Baseline entry for the family. Also covers telescopic, rodless and cable cylinders, the air gripper, feeding air to a moving cylinder, and printed cylinders. Safety: crush points, trapped air moving a stopped cylinder, hydraulic oil injection injuries. Also covers keeping two cylinders fed through a tee in step.

### What it is

- **plain_name**: A metal tube with a sliding disc inside and a rod sticking out of one end: let compressed air or oil in behind the disc and it shoves the rod out hard; let the air out (or feed the other end) and the rod goes back in. A spring or the load's weight pulls back a one-way type, and a two-way type is driven both ways
- **term**: Fluid-power cylinder (pneumatic cylinder or air cylinder; hydraulic cylinder or hydraulic ram)
- **aliases**: 
  - air cylinder, pneumatic cylinder (Wikipedia)
  - hydraulic cylinder, hydraulic ram, hydraulic actuator, linear hydraulic motor (Wikipedia)
  - 'pneumatic piston' or 'air piston' (informal maker wording seen in model titles)
  - single-acting cylinder (SAC), spring-return cylinder; double-acting cylinder (DAC) (Wikipedia; Tameson)
  - telescopic, telescoping or multi-stage cylinder (Wikipedia)
  - rodless cylinder (magnetically coupled, or slotted with sealing bands), cable cylinder (Wikipedia)
  - through-rod or double-rod cylinder, cushioned (cushion-end) cylinder, tandem cylinder, impact cylinder (Wikipedia)
  - tie-rod cylinder, welded-body cylinder, flanged or threaded-end cylinder (Wikipedia)
  - round or mini cylinder (ISO 6432), profile cylinder (ISO 15552, formerly ISO 6431 and VDMA 24562), compact cylinder (ISO 21287) (Tameson)
  - pneumatic gripper, air gripper (parallel or angular jaws) (Wikipedia; Tameson)
  - swinging, oscillating or 'wobbler' cylinder (fed through its pivot; Thang; Printables)
  - floating cylinder, fixed-piston cylinder, three-position cylinder (Thang)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: sliding, telescoping & linear motion, powered & active connectors
- **one_liner**: A powered straight-line pusher: compressed air or pressurised oil let in behind a sealed piston drives a rod out with a force equal to the pressure times the piston area, and a spring, the load or fluid fed to the other side brings it back.
- **complexity**: A small assembly that acts as one unit: a tube (barrel), two end caps (the cap end and the rod end, which holds the rod seal, wiper and bearing in a 'gland'), a piston with seals and guide rings, a piston rod, one or two ports, and often tie rods, a return spring, end cushions and a magnet in the piston for position sensors (Wikipedia 'Hydraulic cylinder'; Tameson). An air gripper adds jaws driven by the piston (Wikipedia 'Pneumatic gripper').
- **how_it_works**: The piston divides the tube into two chambers. Letting air or oil into the chamber behind the piston pushes it, with a force equal to the pressure times the piston's area, and the rod passes that force to the load (Wikipedia 'Hydraulic cylinder', 'Pneumatic cylinder'). A single-acting cylinder has one port and is returned by a spring, the load or gravity when the air is let out; a double-acting cylinder has a port at each end and is driven both ways by switching the supply between them with a valve, the return stroke being a little weaker because the rod takes up part of the piston's area on that side (Wikipedia; Tameson). Air is springy, so an air cylinder is fast and soft-stopping but hard to stop exactly in mid-stroke, while oil hardly compresses, so a hydraulic cylinder is stiff and very strong (Wikipedia 'Pneumatics').

### Finder attributes

- **job**: 
  - hold or release using power: pushes, pulls, lifts or clamps when air or oil is let in, and lets go when it is let out (Wikipedia; HSE HSG39 on clamping and lifting cylinders)
  - change the kind of motion: turns fluid pressure into a straight push or pull (Wikipedia 'Hydraulic cylinder')
  - let it move (turn, slide or bend): drives a part back and forth between two end positions, e.g. a robot grabber or a door (FIRST pneumatics manual; Tameson)
- **motion**: slide: straight in and out along the cylinder's axis, from a few millimetres of stroke upwards; a single-stage cylinder is about 110% of its stroke long when closed, while a telescopic cylinder closes to 20-40% of its extended length (Wikipedia 'Telescopic cylinder'). Mounted on pivots at both ends, the whole cylinder also swings as the mechanism moves (Wikipedia 'Hydraulic cylinder' mounting options; Thang 'Swinging cylinder')
- **degrees_of_freedom**: 1: the rod slides in and out along one line. With pivot mounts (clevis or trunnion) at both ends the cylinder acts as a link whose length you control, swinging freely as the mechanism moves (Wikipedia 'Hydraulic cylinder'; Thang)
- **special_behaviour**: 
  - motion conversion: fluid pressure becomes a straight-line force (Wikipedia)
  - torque-limiting (here force-limiting): the push can never exceed pressure times area, so setting the regulator sets the maximum force, and an air cylinder 'can stall ... against a load indefinitely with no issue' (FIRST pneumatics manual)
  - fail-safe: a spring-return (single-acting) cylinder goes back to its spring position if the air is lost (Tameson); HSE advises controlling cylinders that must reach a safe position with a spring-returned (mono-stable) valve (HSE HSG39)
  - indexing: special cylinders stop at set points, e.g. a three-position cylinder with floating pistons that settles at left, centre or right depending on which port is fed (Thang); tandem cylinders give extra positions ⚑ [uncertain]
  - self-locking (hydraulic only): with its ports shut, the almost incompressible oil holds the piston firmly, with 'a minimum of spring action' (Wikipedia 'Pneumatics'), as long as the seals and valve don't leak *(⚑ parts need confirming)*
- **holding_principle**: 
  - powered hold: it holds its position or force only while air or oil pressure is kept on it, through a valve (Wikipedia; HSE HSG39)
  - spring force: a single-acting cylinder's return spring holds it at rest, and can provide the clamping force so that a clamp doesn't release if the air fails (HSE HSG39 para 123)
- **input_output**: Pressurised air or oil (from a compressor, tank, pump or hand pump through a valve) -> straight push or pull. Outstroke force = pressure x piston area; instroke force = pressure x (piston area - rod area), so it is weaker (Wikipedia; Tameson: a 40 mm bore at 4 bar gives 502 N out and, with a 6 mm rod, 491 N back; FIRST: a 2 in bore at 60 psi gives up to 188 lbf). Seal and bearing friction take roughly 3-20% of the force at 4-8 bar (Tameson). Speed depends on how fast air or oil can flow in and out, so it is set with flow-control valves (FIRST pneumatics manual). Arrangement: in line with the rod. Back-drivable: an air cylinder can be pushed back like a spring if the load exceeds pressure x area; a hydraulic cylinder with closed ports cannot (Wikipedia 'Pneumatics').
- **power**: powered (needs compressed air or gas, or pressurised oil, switched by a valve; Wikipedia). What happens when power is lost depends on the cylinder and the valve: a spring-return cylinder springs back (Tameson); a single-solenoid valve returns to its rest position, sending a double-acting cylinder to that end, while a double-solenoid valve stays where it was (FIRST pneumatics manual). Lifting cylinders 'may collapse dangerously if the supply fails', and clamps may let go (HSE HSG39 paras 122-123). Stored air keeps a machine working for a while after electrical power is lost (Wikipedia 'Pneumatics')
- **removability**: removable: bolted or pinned in place by its mounts (clevis, trunnion, flange, foot or rod eye) and connected with threaded or push-in fittings (Wikipedia 'Hydraulic cylinder'; HSE HSG39 para 108). Tie-rod cylinders can be fully taken apart for service; welded and crimped ones can't (Wikipedia)
- **reuse_cycles**: effectively unlimited strokes in normal use, though seals wear and are replaced through the gland (Wikipedia); a home-made printed double-acting cylinder passed 10,000 cycles without failing (Hackaday). It can be unmounted and refitted many times
- **tools_needed**: spanners and hex keys for mounts, pins and threaded fittings; a tube cutter, because push-in tubing cut off square seals best (FIRST pneumatics manual lists off-square cuts as a leak cause); a tap to thread printed end caps for standard fittings (Hackaday; Printables 245125 uses an M5 tap)
- **seal**: airtight or pressure: piston seals, rod seals and static O-rings keep air or oil in, and a wiper keeps dirt off the rod (Wikipedia 'Hydraulic cylinder'). Rolling-diaphragm cylinders seal with a rolling rubber sleeve and no sliding seal (Disney Research)
- **load**: medium to heavy: a 40 mm air cylinder at 4 bar pushes about 502 N (Tameson) and a 2 in (51 mm) bore at 60 psi about 188 lbf (FIRST); hydraulics usually run at 1,000-5,000 psi against 80-100 psi for factory air (Wikipedia 'Pneumatics'), so small hydraulic rams push tons. Strong along the axis in push and pull; weak against side loads, which wear the rod bearing and seals (HSE HSG39 para 117; Tameson), and long rods can buckle when pushing: treat a rod longer than 10 times its diameter as a column and check buckling (Wikipedia 'Pneumatic cylinder')
- **adjustable**: yes: force by setting the pressure regulator, speed with one-way flow-control valves (meter-out preferred), and end-of-stroke cushioning on ISO 15552 cylinders with adjustable cushions (FIRST pneumatics manual; Tameson). The stroke is fixed by the cylinder, but external stops can shorten it, and magnetic pistons with reed or Hall-effect switches report the position (Tameson; HSE HSG39 para 121)
- **play_and_precision**: Repeatable at the two ends of the stroke, where it stops against the end caps or a hard stop (FIRST: 'simply and reliably moves to two locations'). Poor at stopping in mid-stroke with air, which is springy; for that use locking cylinders and position feedback (Tameson FAQ), or hydraulics, which are much stiffer (Wikipedia 'Pneumatics'). The rod has a little play in its bearing; it tolerates very little sideways misalignment, so connect the load with a rod eye, clevis, spherical rod eye or alignment coupler and guide the load separately (Wikipedia 'Hydraulic cylinder' parts list; Tameson on side loading)
- **access_needed**: both sides: you need to reach both the base mount and the rod-end mount, plus the ports to connect the tubes
- **materials**: Barrels: aluminium, stainless steel or plastic (Tameson); nickel-plated brass, aluminium, steel or stainless steel for air cylinders (Wikipedia 'Pneumatic cylinder'); honed seamless steel tube for hydraulics, with hard chrome-plated steel rods (Wikipedia 'Hydraulic cylinder'). Seals: nitrile rubber (NBR) or polyurethane for lower temperatures, fluorocarbon (FKM, Viton) for higher; wear bands of filled PTFE, fabric-reinforced resin or bronze (Wikipedia). Working fluid: compressed air, or hydraulic fluid that is mostly mineral oil (Wikipedia 'Hydraulic fluid'); hobby machines such as combat robots are often run on compressed carbon dioxide, which is an asphyxiant and a freezing hazard if vented badly (Wikipedia 'Pneumatics'). Home-made: PVC pipe barrel, printed PLA end caps and piston, steel rod and O-rings (Hackaday); printed TPU 95A seals sanded to fit (Printables 1492011)
- **maker_difficulty**: easy to buy and fit: standard sizes, push-in fittings and a 3/2 or 5/2 valve (Tameson). Moderate to make a low-pressure printed one that seals and lasts (Hackaday: the first version leaked). Hard and not advisable to make hydraulic ones: buy them

### Making it

- **processes**: 
  - off-the-shelf part: ISO round, profile and compact air cylinders, rodless and telescopic cylinders, grippers, hydraulic rams (Tameson; Wikipedia)
  - 3D print (FDM): end caps, pistons, mounts and toy-scale cylinders, used with a bought smooth tube, steel rod and O-rings (Hackaday; Printables 1519000, 1492011)
- **print_in_place**: no: printed cylinders are assembled from separate end caps, piston and rod with a bought tube, O-rings or printed TPU seals, and fittings (Hackaday; Printables 1519000, 1492011)
- **making_tips_3d_printing**: 1) Buy the tube: a printed bore is not smooth or round enough, so Michael Rechtin used PVC pipe as the barrel and printed only the end caps and piston (Hackaday); another printed design uses 50 mm and 30 mm pipes with an M8 threaded rod, rubber gaskets, super glue and lubricant (Printables 1519000). Note that OSHA's position is that PVC pipe 'shall not be used' for compressed air, after a PVC air line shattered and threw plastic fragments (OSHA), so run such builds at low pressure, behind a guard, or use a bought cylinder. 2) Never hold stored pressure in a printed part: a printed PLA tank burst at 5.5 bar, and its makers warn that 2 bar can do nasty damage (CVRA). 3) Thread the ports: print the end caps solid and tap them for standard push-in fittings (Hackaday; Printables 245125 uses M5 fittings and recommends 100% infill PLA). 4) Seal the piston with O-rings in printed grooves on a steel rod (Hackaday) or with printed TPU 95A seals wet-sanded to fit (Printables 1492011); see O-ring seal for groove sizes. 5) Cushion the ends: Rechtin added springs at both ends to soften the hits, which helped his cylinder pass 10,000 cycles (Hackaday); commercial cylinders use rubber bumpers or air cushions for the same reason (Tameson). 6) Lubricate the seals (Printables 1519000; Tameson lists poor lubrication as a cause of failure). 7) Swinging cylinders: oscillating ('wobbler') air engines feed air through a flat port face at the pivot, which must be printed or sanded smooth to seal (Printables 9878 Oscillating Steam (Air) Engine; Thang 'Swinging cylinder'); moving parts are printed at 100% infill (Printables 9869). 8) Printed engines report hoses popping off at 80 psi (Printables 355266), so clip or clamp the tubes. 9) Test at low pressure first, wear safety glasses, and keep hands out of the stroke (FRC Zero).
- **off_the_shelf_parts**: ISO 6432 round mini cylinders (8-25 mm bore), ISO 15552 profile cylinders (32-320 mm), ISO 21287 compact cylinders (20-100 mm), all up to 10 bar (Tameson); single-acting spring-return and double-acting cylinders; through-rod, cushioned, tandem and impact cylinders; telescopic cylinders; rodless (magnetic or slotted band) and cable cylinders (Wikipedia 'Pneumatic cylinder'); rotary cylinders; parallel and angular pneumatic grippers (Tameson symbols table); hydraulic tie-rod and welded-body cylinders, single-acting rams and bottle jacks (Wikipedia). Mountings: rod eye, rod clevis, spherical rod eye, clevis bracket, trunnion, flange, foot, pivot pins and alignment couplers (Wikipedia 'Hydraulic cylinder'). Also: reed-switch or Hall-effect position sensors, push-in fittings, silencers, one-way flow-control valves, pressure regulators and seal kits (Tameson; FIRST pneumatics manual)
- **rules_of_thumb**: 
  - Force = pressure x piston area: a 40 mm bore at 400 kPa (4 bar) gives 502 N (Tameson); a 2 in bore at 60 psi gives up to 188 lbf (FIRST pneumatics manual)
  - The return (instroke) of a double-acting cylinder is weaker because the rod's area is subtracted (40 mm bore, 6 mm rod, 4 bar: 491 N), so size the cylinder for the return stroke if that is the one that does the work (Tameson; Wikipedia)
  - Allow for friction of roughly 3-20% of the force at 4-8 bar, plus any spring force in a single-acting cylinder, and choose a cylinder rated slightly above the force you need (Tameson)
  - If the rod is longer than 10 times its diameter, check it for buckling (Wikipedia 'Pneumatic cylinder'); avoid side loads, which wear bearings and seals (HSE HSG39 para 117; Tameson)
  - Typical pressures: factory air 80-100 psi (5.5-6.9 bar); ISO standard air cylinders up to 10 bar; hydraulics 1,000-5,000 psi (Wikipedia 'Pneumatics'; Tameson). Robot competitions store at 120 psi and work at 60 psi or less (FIRST pneumatics manual)
  - Slow a cylinder with one-way flow-control valves that restrict the air leaving it (meter-out); restricting the air going in (meter-in) can make it jerky (FIRST pneumatics manual)
  - Single-acting cylinders give less force near the end of the stroke as the spring compresses, and their stroke is limited by the room the spring takes (Tameson)
  - Telescopic cylinders close to 20-40% of their extended length, usually have at most 6 stages, and must not carry side loads (Wikipedia 'Telescopic cylinder')
  - Mount the valve as close to the cylinder as practical, for quicker response and less wasted air (Tameson)
  - A double-acting cylinder that has been emptied (e.g. after an emergency stop) can shoot out when air first returns, so fit a soft-start valve where that could hurt someone (HSE HSG39 para 120)
  - Feed moving cylinders with loops of plastic tubing that absorb the movement (HSE HSG39 para 108), through the pivot of a swinging cylinder, or through a hollow fixed piston rod so the hoses stay still (Thang)
  - Two cylinders fed through a tee from one valve do not move in step: the flow splits unevenly unless both meet the same resistance, so the lighter-loaded one moves first. To keep them together, tie the rods mechanically (a rack on each rod, with the pinions on one shared shaft) or use a flow divider (Power & Motion 'Flow divider circuits' and 'Synchronizing circuits'; HAWE fluid lexicon 'Open loop synchronisation control'; these sources are about hydraulics).

### When to use it

- **everyday_examples**: 
  - The arms and bucket of a digger (excavator or backhoe) and the tipping body of a dump truck, which uses a telescopic cylinder (Wikipedia 'Hydraulic cylinder', 'Telescopic cylinder')
  - The puppets of Disney's Enchanted Tiki Room, moved by air so that no fluid can drip on visitors (Wikipedia 'Pneumatic cylinder')
  - Grabbers and launchers on school robot-competition robots (FIRST pneumatics manual)
  - Clamps and part ejectors in woodworking and plastics factories (Tameson)
- **when_to_use**: Use an air cylinder for fast, strong, back-and-forth moves between two end positions: grabbing, clamping, pushing, kicking, opening and closing, where a motor would need sensors and gearing to do the same and could burn out when stalled (FIRST pneumatics manual). It is light, simple to control with one valve, and its force is set simply by the regulator (FIRST). Air suits clean places because leaks don't drip (Wikipedia 'Pneumatic cylinder'), and it absorbs shocks (Wikipedia 'Pneumatics'). Use a single-acting spring-return cylinder where the part must go to a safe position if the air fails (Tameson); a rodless cylinder for long strokes in little space (Tameson); a telescopic cylinder for a long reach from a short body (Wikipedia). Use hydraulics when you need very high force or a stiff hold, as in diggers, presses and lifts (Wikipedia 'Pneumatics'); in animatronics, air drives small figures but large ones need hydraulics (Wikipedia 'Animatronics').
- **when_not_to_use**: Not for accurate stopping in mid-stroke or smooth controlled motion: air is springy, so use a lead screw, ball screw or servo motor, or a cylinder with a lock and position feedback (Tameson). Not if you have no compressed-air supply: an electric linear actuator, lead screw or solenoid avoids the compressor, tank and noise. Not for continuous rotation (use a motor) or for gentle, soft gripping of odd shapes (use a soft pneumatic actuator, vacuum gripper or jamming gripper). For hobby projects avoid making hydraulics: high pressure brings injection injuries and messy oil leaks (HSE), so use air, syringe hydraulics or electric actuators. For a part that only needs a constant push, a gas spring is simpler.
- **environment_limits**: Seals set the temperature range: nitrile rubber and polyurethane suit lower temperatures, fluorocarbon (Viton) higher ones (Wikipedia 'Hydraulic cylinder'); ozone can crack pneumatic seals (Wikipedia 'Pneumatics', see-also). Dirty or wet air causes corrosion and blocked valves (HSE HSG39), and humidity, heat or chemicals corrode cylinder bodies (Tameson). Seals dry out and fail without lubrication (Tameson). Hydraulic oil can burn, while compressed air has 'a very low chance of fire' (Wikipedia 'Pneumatics'). Printed PLA parts soften when warm and creep under constant load, so keep printed cylinders cool and lightly loaded ⚑ [uncertain: not checked against a source here]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Crush and pinch points: cylinders move suddenly and hard; check for people and objects in the path before turning on the air (FRC Zero), and keep hands clear of the stroke. 2) Trapped air: a stopped air cylinder can still move. HSE warns that if a connection to a locked cylinder is broken, air under pressure on the other side of the piston expands and moves it, 'which could lead to injury' (HSE HSG39 para 139). Vent all pressure before working on it (Tameson). 3) An emptied double-acting cylinder can shoot out when air returns; use a soft-start valve (HSE HSG39 para 120). 4) Lifting cylinders can drop their load and clamps can let go if the supply fails; add mechanical props (scotches) or spring-applied clamping (HSE HSG39 paras 122-123). 5) Hard end impacts can eventually break the cylinder or separate the piston from the rod; use cushioned cylinders (HSE HSG39 para 118). 6) Hydraulic injection: a fine jet of oil from a leak can go through the skin; serious cases above 100 bar, possibly as low as 7 bar; get immediate hospital treatment (HSE hydraulic injection bulletin). 7) Never point compressed air at skin, even at 15 psig, and wear safety glasses (FRC Zero); air can 'penetrate the skin' at high pressure (HSE HSG39). 8) Burst hoses can 'whip' and 'snake' (HSE HSG39). 9) Don't use PVC pipe for compressed air (OSHA) and never hold stored pressure in a printed part (CVRA). 10) Manual-override buttons on valves fire the cylinder next to you: use them with 'EXTREME CAUTION' (FRC Zero).
- **common_failures**: 1) Side loading wears the rod, bearing and seals and scores the bore: guide the load and use self-aligning rod ends (Tameson; HSE HSG39). 2) Seals dry out without lubrication (Tameson). 3) Dirt, oil and water in the air block or damage it: filter the air (Tameson; HSE HSG39). 4) Hissing leaks from a worn rod seal or damaged piston, giving slow or weak strokes (Tameson). 5) Repeated end-of-stroke shocks damage end caps or loosen the piston: use cushioning (HSE HSG39 para 118). 6) Bent or buckled rods from overload or long strokes (Wikipedia; Tameson). 7) Jerky motion from restricting the incoming air; use meter-out flow control (FIRST pneumatics manual). 8) Slow response from a valve mounted far away or undersized lines (Tameson). 9) Home-made: leaks past printed parts (Hackaday), and hoses popping off fittings (Printables 355266; FRC Zero lists air leaks forcing hoses off).
- **related**: 
  - Switching valve (directional control or solenoid valve): the valve that sends air to one end or the other; every powered cylinder needs one
  - Syringe hydraulics: the hand-powered version, where a second syringe drives the piston instead of a pump and valve
  - Gas spring: a sealed cylinder that always pushes, with no supply or valve
  - Dampers: cylinders that only resist motion
  - Lead screw and nut, and Rack and pinion: electric-motor routes to straight-line motion that can stop anywhere
  - Solenoid latch: a small electric push-pull actuator
  - Rigid chain actuator: a long-stroke electric pusher
  - Pneumatic artificial muscle (McKibben muscle) and Bellows and inflatable actuators: air actuators with no sliding seals, which pull or push softly
  - Soft pneumatic bending actuator, Vacuum (suction) gripper and Granular jamming gripper: air-powered grippers without a piston
  - Rotary air actuator: pistons driving a rack and pinion to turn a shaft
  - Air tank and hydraulic accumulator, Speed-control valve and Pressure regulator: the supply parts around a cylinder
  - Clevis joint and Rod end (rose joint): how cylinders are usually mounted
  - Linear guides: carry side loads so the cylinder only pushes
  - Slip ring and rotary union, and Cable carrier (drag chain): ways to get air to a cylinder that moves or rotates

### Pictures, videos and models

- **links**: 
  - [Einfachwirkender Zylinder funktionsprinziep.gif (RainerB.; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Einfachwirkender_Zylinder_funktionsprinziep.gif): Animation of a single-acting cylinder: air pushes the piston out and a spring brings it back *(licence: CC BY-SA 3.0)*
  - [Doppelwirkender Zylinder Funktionsprinziep.gif (RainerB.; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Doppelwirkender_Zylinder_Funktionsprinziep.gif): Simplified animation of a double-acting cylinder driven both ways through its two ports *(licence: Public domain)*
  - [Pneumatic cylinder (animation).gif (Kamarton; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatic_cylinder_(animation).gif): Animated cutaway of a pneumatic cylinder working *(licence: CC BY 3.0)*
  - [8-stage single-acting air cylinder, Ergo-Help.jpg (Ergo-Help Pneumatics; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:8-stage_single-acting_air_cylinder,_Ergo-Help.jpg): Photo of an 8-stage telescopic air cylinder, retracted and extended *(licence: CC BY-SA 3.0)*
  - [DIY Pneumatic Actuator Does Great In Action (Hackaday, 2023)](https://hackaday.com/2023/12/23/diy-pneumatic-actuator-does-great-in-action/): Article and embedded video of Michael Rechtin's home-made double-acting cylinder: PVC barrel, printed tapped end caps, printed piston on a steel rod with O-rings, 10,000-cycle test *(licence: link only)*
- **make_it_yourself**: 
  - [Pneumatic cylinder (Henry, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1519000-pneumatic-cylinder): Printed pneumatic cylinder parts used with 50 mm and 30 mm pipes, an M8 threaded rod, nuts, rubber gaskets, glue and lubricant *(licence: CC BY)*
  - [Lego Pneumatik Zylinder XXL (Andreas, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1492011-lego-pneumatik-zylinder-xxl): Large LEGO-compatible pneumatic cylinder printed in PLA with TPU 95A seals wet-sanded to fit *(licence: Public domain)*
  - [Oscillating Steam (Air) Engine - 1941 Popular Mechanics Magazine (kmccon, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/9878-oscillating-steam-air-engine-1941-popular-mechanic): Printed oscillating-cylinder engine run on compressed air: the swinging cylinder is fed through a port face at its pivot, with a reversing lever *(licence: CC BY)*
  - [Wobbler Engine 2.0 (kmccon, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/9869-wobbler-engine-20): Printed 'wobbler' compressed-air engine with a swinging cylinder, 608ZZ bearings and a spring; moving parts printed at 100% infill *(licence: CC BY)*
  - [Pneumatic-mechanical 4/2-way valve (Vincent Groenhuis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve): Printed valve with a small internal cylinder that switches it, which the designer says can also be used as a pneumatic actuator *(licence: CC BY-NC-SA)*
- **diagram_idea**: A cutaway cylinder drawn twice side by side: single-acting (one port, blue air pushing the piston out, a coiled spring pushing it back when the air escapes) and double-acting (two ports, air in one end and out the other, arrows reversing), with a small force label 'pressure x area' on the piston face and a smaller arrow on the rod side to show the weaker return stroke.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pneumatic_cylinder
  - https://en.wikipedia.org/wiki/Hydraulic_cylinder
  - https://en.wikipedia.org/wiki/Single-_and_double-acting_cylinders
  - https://en.wikipedia.org/wiki/Telescopic_cylinder
  - https://en.wikipedia.org/wiki/Pneumatics
  - https://en.wikipedia.org/wiki/Pneumatic_gripper
  - https://en.wikipedia.org/wiki/Animatronics
  - https://en.wikipedia.org/wiki/Hydraulic_fluid
  - https://tameson.com/pages/pneumatic-cylinders
  - https://tameson.com/pages/pneumatic-cylinder-parts
  - https://tameson.com/pages/single-acting-double-acting-pneumatic-cylinder
  - https://tameson.com/pages/pneumatic-cylinder-force-calculator
  - https://tameson.com/pages/pneumatic-cylinder-maintenance
  - https://tameson.com/pages/directional-control-valve-pneumatic-cylinder
  - https://tameson.com/pages/pneumatic-component-symbols
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.frczero.org/pneumatics/pneumatic-control/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://www.osha.gov/publications/hib19880520
  - https://cvra.ch/blog/2016/airtank
  - https://hackaday.com/2023/12/23/diy-pneumatic-actuator-does-great-in-action/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://studios.disneyresearch.com/wp-content/uploads/2016/05/A-Hybrid-Hydrostatic-Transmission-and-Human-Safe-Haptic-Telepresence-Robot-1.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1519000-pneumatic-cylinder
  - https://www.printables.com/model/1492011-lego-pneumatik-zylinder-xxl
  - https://www.printables.com/model/9878-oscillating-steam-air-engine-1941-popular-mechanic
  - https://www.printables.com/model/9869-wobbler-engine-20
  - https://www.printables.com/model/355266-3-cylinder-air-engine
  - https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve
  - https://commons.wikimedia.org/wiki/File:Einfachwirkender_Zylinder_funktionsprinziep.gif
  - https://commons.wikimedia.org/wiki/File:Doppelwirkender_Zylinder_Funktionsprinziep.gif
  - https://commons.wikimedia.org/wiki/File:Pneumatic_cylinder_(animation).gif
  - https://commons.wikimedia.org/wiki/File:8-stage_single-acting_air_cylinder,_Ergo-Help.jpg
  - https://www.powermotiontech.com/technologies/other-technologies/article/21883443/book-2-chapter-11-flow-divider-circuits
  - https://www.powermotiontech.com/hydraulics/hydraulic-valves/article/21885035/synchronizing-circuits
  - https://www.hawe.com/fluid-lexicon/detail/open-loop-synchronisation-control/

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, compressed air, liquid ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: lets go ⚑ *needs confirming (best guess): versions differ: lets go, keeps its last state*
- **motion_in**: pressure
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable ⚑ *needs confirming (best guess): listed as torque-limiting or breakaway, but no overload behaviour matched*
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, special_behaviour

## 302 Switching valve (directional control valve, solenoid valve)

*hydraulics, pneumatics & vacuum.* A valve that sends air or liquid to one port or another when switched by an electric coil, a hand lever, a foot pedal or air pressure, to make a cylinder or soft actuator move

*Also covers:* Covers 2/2, 3/2, 5/2 and 5/3 valves, normally open versus normally closed, and pilot-operated valves that need a pressure difference to work. Safety: water hammer when a valve snaps shut.

### What it is

- **plain_name**: A tap that switches by itself or with a flick: an electric coil (or a lever, button, foot pedal or puff of air) slides a part inside it that connects the air or water supply to one outlet and lets the other outlet breathe out, so a cylinder or soft gripper moves one way or the other, or water starts and stops
- **term**: Directional control valve (switching valve; solenoid valve when switched electrically)
- **aliases**: 
  - directional control valve (DCV), directional valve, way valve; 'Wegeventil' (German) (LibreTexts; Wikimedia Commons)
  - named by ports and positions: 2/2, 3/2, 4/2, 5/2, 4/3 and 5/3 valves, or '3-way, 2-position' etc. (Tameson; LibreTexts)
  - solenoid valve, often just called a 'solenoid' (Wikipedia 'Solenoid valve'; FRC Zero)
  - air valve, pneumatic valve, pneumatic solenoid valve; hydraulic solenoid valve (Tameson)
  - spool valve; poppet valve; diaphragm valve (Wikipedia 'Solenoid valve')
  - direct-acting valve; pilot-operated, servo-operated or indirect-acting valve; semi-direct or assisted-lift valve (Wikipedia; Tameson)
  - normally closed (NC) and normally open (NO) valve (Wikipedia; Tameson)
  - single solenoid (mono-stable, spring return) and double solenoid (bi-stable) valve; latching or pulse valve (Tameson; FIRST pneumatics manual)
  - hand-lever, push-button, foot-pedal (treadle), roller or plunger valve; air-piloted valve (Tameson symbols; LibreTexts)
  - four-way valve or four-way cock (rotary plug type) (Wikipedia 'Four-way valve')
  - valve manifold, valve island, sub-base (Wikipedia; FIRST pneumatics manual)
  - proportional valve (varies the flow with the current) (Wikipedia 'Solenoid valve')
  - irrigation (sprinkler) valve, water inlet valve (Wikipedia)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: powered & active connectors
- **one_liner**: A valve with two or more ports and two or three set positions: shifting its inner spool, poppet or diaphragm by an electric coil, hand, foot or air signal connects the supply to a chosen outlet and vents or blocks the others, which is how every powered cylinder, soft actuator and suction cup is switched on and off.
- **complexity**: A small assembly: a body with ports, a moving spool, poppet or diaphragm with seals, a return spring, and an operator. In a solenoid valve the operator is a coil of copper wire round a non-magnetic tube in which an iron plunger (core or armature) slides, held on by a clip; pilot-operated valves add a diaphragm with a pinhole and a small pilot passage (Wikipedia 'Solenoid valve'). Many valves have a manual-override button (Tameson). Other operators are a lever, button, pedal, roller or an air-pressure piston (LibreTexts; Tameson symbols).
- **how_it_works**: Inside, a sliding spool with seals (or a poppet that lifts off a seat) connects some ports and blocks others; moving it to its other position changes which ports are joined (Tameson; LibreTexts). In a solenoid valve, current in the coil makes a magnetic field that pulls the iron plunger against a spring, and the spring pushes it back when the current stops; if the valve is shut with no power it is 'normally closed', if open, 'normally open' (Wikipedia; Tameson). A small coil can only shift a small opening directly, so bigger water and air valves are pilot-operated: the coil only opens a tiny passage, and the line pressure itself pushes the main diaphragm or spool, which is why these valves 'will not work without a sufficient pressure differential between input and output' (Wikipedia 'Solenoid valve'). For a cylinder, a 3/2 valve feeds or vents a single-acting cylinder, a 5/2 valve feeds one end of a double-acting cylinder while venting the other, and a 5/3 valve adds a middle position that can stop the cylinder part-way (Tameson).

### Finder attributes

- **job**: 
  - hold or release using power: lets an electric signal, a hand, a foot or an air signal start, stop or reverse a cylinder, soft actuator or suction cup, and hold it where it is (Wikipedia; Tameson)
  - seal it, or pass cables or fluid through: passes air or liquid along the chosen path and blocks the others; a 2/2 valve simply turns a flow on or off (Wikipedia; LibreTexts)
- **motion**: slide (inside): a spool or plunger slides a few millimetres between two or three positions; in rotary and four-way-cock valves a plug turns instead (Wikipedia 'Four-way valve'). From outside you see a click, not a movement; the valve's job is to switch flow
- **degrees_of_freedom**: 1: the spool, poppet or plunger moves along one line (or a plug turns about one axis) between its 2 or 3 set positions
- **special_behaviour**: 
  - fail-safe: a single-solenoid (mono-stable) valve has a spring that returns it to its rest position when power is lost (Tameson); HSE says actuators that must reach a safe position on failure should be controlled by a valve 'spring biased (mono-stable) to the safe position' (HSE HSG39 para 114). Choose normally closed where flow must stop without power (e.g. gas appliances) and normally open where it must keep flowing, e.g. to prevent overpressure (Tameson)
  - indexing: hand-lever valves can have detents that hold each position (LibreTexts shows a 'lever operated, detented' 4/3 valve; Tameson lists 'detent' valves), and double-solenoid (bi-stable) and latching valves stay in whichever position they were last switched to (Tameson; FIRST pneumatics manual)
  - one-way: pilot-operated (indirect) valves only let fluid flow in one direction, marked by an arrow on the body (Tameson; Adafruit: 'liquid can only flow one direction')
- **holding_principle**: 
  - spring force: a spring holds the spool or plunger in its rest position until the coil, lever or pilot pressure moves it (Wikipedia; Tameson)
  - magnetic: the energised coil holds a mono-stable valve in its switched position, and latching valves use a permanent magnet to stay put without power (Tameson)
  - suction or air pressure: in a pilot-operated valve, line pressure acting on the larger area of the diaphragm holds it shut (Wikipedia 'Solenoid valve')
- **input_output**: not applicable (it routes fluid, not motion). For reference: input = an electric, hand, foot or air signal; output = which ports are joined. A direct-acting solenoid valve typically switches in 5-10 ms, and a pilot-operated one in 15-150 ms depending on size (Wikipedia 'Solenoid valve'); a hobby plastic water valve opens in at most 0.15 s and closes in at most 0.3 s (Adafruit). Proportional valves give a flow that varies with the current (Wikipedia)
- **power**: powered for solenoid valves (electricity) and air-piloted valves (air pressure); passive for hand-lever, push-button, foot-pedal and roller valves. When power is lost: a single-solenoid valve springs back to its rest position (a normally closed valve shuts, a normally open one opens); a double-solenoid or latching valve keeps its last state (Tameson; FIRST pneumatics manual: single solenoid valves 'return to a specific state when power is removed', double solenoid valves 'require an active signal to change state'). Pilot-operated valves also need enough line pressure: with too little they don't open fully or chatter (Tameson)
- **removability**: removable: screwed in with threaded or push-in fittings, or bolted onto a manifold or sub-base; the coil comes off its tube after removing a retaining clip, and the cable connects through a removable DIN plug (Wikipedia 'Solenoid valve'; Tameson)
- **reuse_cycles**: effectively unlimited switching (a hobby plastic water valve is rated for at least 50 million cycles; Adafruit); the valve can be removed and refitted many times
- **tools_needed**: spanner and thread sealant for threaded ports; a tube cutter for push-in tubing; a screwdriver to wire the DIN connector (Tameson). To switch it from a microcontroller you need a driver transistor or MOSFET and a 'kickback' diode across the coil (Adafruit)
- **seal**: airtight or pressure: seals on the spool or poppet and its seat keep each blocked port shut; worn or dirty seals leak (Tameson troubleshooting). Printed valves only seal at low pressure, and only with very flat, sanded faces and soft seals (Printables 245125, 1405826)
- **load**: Not a structural part; its rating is pressure: pneumatic 5/2 and 4/2 valves handle 7-12 bar maximum (Tameson), a hobby plastic water valve 0.02-0.8 MPa (0.2-8 bar; Adafruit), and high-pressure solenoid valves up to 250 bar (Tameson). Don't hang weight or pipework strain on it
- **adjustable**: mostly no: its switching pattern is fixed when you buy it. Some valves have screws to slow the opening and closing (to prevent water hammer) and a manual override for testing (Tameson); proportional valves vary the flow with the current (Wikipedia)
- **play_and_precision**: not applicable (it doesn't locate parts or pass on motion); its timing is repeatable to within milliseconds (Wikipedia 'Solenoid valve' response times)
- **access_needed**: end of a tube or shaft: fitted in line where tubes or pipes end, or on a manifold; the exhaust ports need room for silencers (Tameson)
- **materials**: Bodies: brass, stainless steel, aluminium, PVC or polyamide, cast iron (Tameson; Wikipedia). Seals: NBR (oil and fuel), EPDM (weather, hot water, steam), FKM/Viton (chemicals, heat), PTFE (aggressive media), plus HNBR and TPU in air valves (Tameson). Inside the coil: a non-magnetic stainless core tube and a magnetic stainless plunger, e.g. 305 and 430F (Wikipedia). Hobby plastic water valves are for water only and are not food-safe (Adafruit). Printed: PLA at 100% infill with 1 mm silicone-rubber sheet seals (Printables 245125); PLA or PETG with a TPU gasket (Printables 1405826)
- **maker_difficulty**: easy to buy and wire: a 12 V valve needs a transistor or MOSFET and a diode to run from a microcontroller (Adafruit). Moderate to print a valve that seals: the printed 4/2 valve needs sanding or ironing, tapping, cut silicone seals and grease (Printables 245125), and another designer calls theirs 'mainly for demonstration purposes' (Printables 1405826). A hobby servo that turns a ball valve or pinches a soft tube is an easy low-pressure alternative (Printables 310335 servo ball-valve blast gate; Printables 207051 and 247744 servo pinch valves)

### Making it

- **processes**: 
  - off-the-shelf part: 2/2, 3/2, 4/2, 5/2 and 5/3 solenoid, hand, pedal and air-piloted valves, micro 12 V valves for soft robotics, plastic and brass water solenoid valves (Tameson; Adafruit; Programmable-Air)
  - 3D print (FDM): low-pressure spool and rotary-plate valves for air (Printables 245125, 1405826, 289258), servo housings that turn a valve or pinch a tube (Printables 154217, 207051, 1083966), brackets and covers for bought valves
- **print_in_place**: no: printed valves are assembled from several parts with screws, seals, grease and bought push-in fittings (Printables 245125, 1405826, 289258), and servo conversions add a bought servo and valve (Printables 1083966, 154217)
- **making_tips_3d_printing**: 1) Flatness is everything: for a printed sliding-plate valve, sand the top face smooth (or use ironing), print at 100% infill in PLA and make sure nothing warps (Printables 245125, Groenhuis); print contact faces down on a glass plate at a low layer height (0.12 mm), with perfect bed levelling, no stringing and minimal over-extrusion (Printables 1405826). 2) Seals: cut 1 mm silicone-rubber sheet seals and add a little petroleum jelly (Printables 245125), or print a TPU gasket face up and keep its contact area small to cut friction (Printables 1405826). 3) Ports: tap the printed holes with an M5 tap (or a home-made tap from an M5 bolt) and screw in M5 push-in fittings for 4 mm tube (Printables 245125). 4) Rotary valves: sand the mating faces to about 800 grit and reduce the extrusion flow to 0.9 so threads and faces come out true (Printables 289258). 5) Set the friction: a screw that clamps the moving disc should leave it 'easily movable without too much force' (Printables 245125). 6) Servo-driven alternatives: a hobby servo can work an air blow gun as a remote valve (Printables 154217), turn a ball valve to switch a dust-collection airflow (Printables 310335), or pinch a silicone or PTFE tube shut (Printables 207051, 247744); the pinch versions are for low pressure only, e.g. gravity-fed water, and may let a drop through after closing (Printables 207051, 247744). Replacing a water solenoid's coil with a servo means power is only needed while switching (Printables 1083966). 7) Printed valves are for low pressures; test them gently, wear safety glasses, and never use them on stored pressure such as a tank (CVRA tank burst at 5.5 bar).
- **off_the_shelf_parts**: 2/2-way solenoid valves (NC or NO) for on/off; 3/2-way valves for single-acting cylinders and vacuum cups; 4/2 and 5/2-way valves (single-solenoid mono-stable or double-solenoid bi-stable) for double-acting cylinders; 5/3-way valves with closed, exhaust (vented) or pressure (open) centre (Tameson); hand-lever, push-button, foot-pedal, roller and air-piloted valves (Tameson symbols); valve manifolds and sub-bases; DIN coil connectors, some with LEDs or surge suppression (Tameson); pneumatic silencers (mufflers) for the exhaust ports (Tameson). Hobby parts: 12 V plastic water solenoid valves (pilot-assisted, minimum 0.02 MPa) and brass ones with no minimum pressure (Adafruit); micro 12 V 2-way and 3-way air valves for 3/16 in tubing, drawing about 0.11 A (Programmable-Air); robot-competition pneumatic control modules (e.g. CTRE PCM, REV Pneumatic Hub (brands); FIRST). Drivers: N-channel MOSFET or TIP120 transistor plus a 1N4001 flyback diode (Adafruit)
- **rules_of_thumb**: 
  - Read the name as ports/positions: a 5/2 valve has 5 ports and 2 positions (Tameson; LibreTexts). Use a 3/2 for a single-acting cylinder, a 5/2 (or 4/2) for a double-acting cylinder, and a 5/3 if it must stop part-way or be held in place (Tameson)
  - Port numbers (ISO 11727): 1 = supply, 2 and 4 = outlets to the cylinder, 3 and 5 = exhausts; the letter system uses P, A, B and R or EA/EB (Tameson); hydraulic valves return oil to the tank through port T (LibreTexts)
  - In a valve symbol each box is one position, the arrows show the flow paths in that position, a spring drawn at one end marks the rest position, and the operator symbol (coil, lever, pedal) shows what shifts it (LibreTexts; Tameson symbols)
  - Pilot-operated (indirect) valves need a minimum pressure difference, about 0.5 bar (Tameson); a popular 12 V plastic water valve needs 0.02 MPa (3 psi) (Adafruit), and robot-competition air valves need 15-30 psi (FIRST pneumatics manual). For gravity-fed water or vacuum, use a direct-acting or semi-direct (assisted-lift) valve, or a motorised ball valve (Tameson)
  - A direct-acting valve's coil must beat pressure x orifice area; a typical small solenoid gives about 15 N, enough only for small openings or low pressures (Wikipedia 'Solenoid valve')
  - Mono-stable valves need power all the time they are switched; bi-stable and latching valves need only a pulse (Tameson). Pick normally closed or normally open by what must happen if the power fails, and by which state lasts longest, since that saves energy (Tameson; HSE HSG39 para 114)
  - Drive a DC coil from a microcontroller through a transistor or MOSFET with a flyback diode; a 12 V water valve draws about 320 mA at 12 V and still worked at 6 V (Adafruit)
  - Mount valves close to the cylinders for fast response and less wasted air (Tameson), with the main spool horizontal so shocks and gravity can't shift it (HSE HSG39 para 114)
  - Two-port valves have a flow arrow on the body: fit them the right way round (Tameson)
  - Prevent water hammer: keep water speed low (some pipe-sizing charts recommend at or below 1.5 m/s), close valves slowly, or fit a water hammer arrestor (Wikipedia 'Hydraulic shock'; Tameson)

### When to use it

- **everyday_examples**: 
  - The valve that lets water into a washing machine or dishwasher (Wikipedia 'Solenoid valve')
  - Garden and lawn sprinkler valves switched by a timer (Wikipedia 'Solenoid valve')
  - The reversing valve in a heat pump, which swaps the flow so it heats or cools (Wikipedia 'Four-way valve')
  - The trigger valve of a paintball gun, and the valves that fire the cylinders on school competition robots (Wikipedia; FIRST pneumatics manual)
- **when_to_use**: Use one whenever something should start, stop or reverse a flow of air or liquid on command: a microcontroller switching a cylinder, soft gripper or suction cup; a timer watering plants; a button or pedal working a clamp (Wikipedia; Tameson). Pick a 3/2 valve for a single-acting cylinder or to inflate and vent a soft actuator, a 5/2 for a double-acting cylinder, and a 5/3 when it must stop mid-stroke or hold against a load (Tameson). Choose hand, pedal or roller-operated valves when no electronics are wanted, and air-piloted valves to build controls that run on air alone (Tameson; Wikipedia 'Pneumatics' on pneumatic logic).
- **when_not_to_use**: For automatic one-way flow, use a check valve, which needs no signal. For a simple hand-operated on/off in a pipe, a shut-off (ball) valve is cheaper and shows its state at a glance. To set a cylinder's speed use a speed-control (flow-control) valve, to set pressure a pressure regulator, and for overpressure protection a pressure relief valve. For gravity-fed water or vacuum avoid pilot-operated solenoid valves, which won't open without a pressure difference: use a direct-acting valve or a motorised ball valve (Tameson; Adafruit). For dirty, sticky or food liquids, a pinch valve (see Iris valve) keeps the liquid inside a tube; pilot valves clog with solid impurities (Wikipedia). Where the valve must stay switched for hours on batteries, use a latching valve or a servo-driven valve, which need power only to switch (Tameson; Printables 1083966).
- **environment_limits**: Pneumatic 5/2 and 4/2 valves typically work from about -25 C up to 40-70 C, with IP40, IP65 or IP67 protection (Tameson); a hobby plastic water valve is rated 1-75 C (Adafruit). Coils run warm and can burn out with the wrong voltage, a sticking plunger, a hot fluid or a hot room; moisture dripping into the connector can short the coil (Tameson). Hard water leaves limescale on the warm plunger, which can make it stick (Tameson). Dirt and solids clog pilot-operated valves (Wikipedia; Tameson). Body and seal materials must suit the fluid (Tameson); hobby plastic valves are for water only (Adafruit). AC coils hum unless fitted with a shading ring or rectifier (Tameson).
- **safety_notes**: 1) Water hammer: a valve snapping shut on flowing water makes a pressure surge that bangs the pipes and can break them; 'Water hammers have caused accidents and fatalities' (Wikipedia 'Hydraulic shock'). Fast solenoid valves are a common cause; use slower-closing valves, bigger pipes or an arrestor (Tameson). 2) Trapped pressure: a closed valve keeps air locked in a cylinder, which can move it suddenly if a pipe is undone (HSE HSG39 para 139); vent the system before working on it. 3) Manual-override buttons fire the cylinder next to your hand: use them with 'EXTREME CAUTION' (FRC Zero). 4) Choose the valve's unpowered state so that a power cut leaves the machine safe (HSE HSG39 para 114), and give machines a red mushroom-head emergency stop (HSE HSG39 para 115). 5) Exhaust blasts and noise: keep exhaust ports away from people and fit silencers or ear protection (HSE HSG39 para 116; FRC Zero). 6) Electricity and water: mains-voltage coils (110-230 V AC) need proper insulated wiring and drip protection (Tameson); a flyback diode protects the driver electronics from voltage spikes when a DC coil switches off (Adafruit). 7) Never point compressed air at anyone, even at 15 psig (FRC Zero), and don't put printed valves on stored pressure.
- **common_failures**: 1) Won't open: no power, wrong voltage, burnt coil, too much or too little pressure difference (pilot-operated valves), dirt on the diaphragm or seat, corrosion (Tameson). 2) Opens only partly or chatters: pressure below the valve's minimum, or undervoltage making it buzz between states (Tameson). 3) Humming: normal for AC coils up to a point; worse with loose parts or high pressure (Tameson). 4) Burnt coil: wrong voltage, moisture short, sticking plunger, hot fluid or surroundings (Tameson). 5) Rapid clicking every second or so: usually a faulty controller or wiring (Tameson). 6) Fitted backwards so a one-way pilot valve never shuts or opens (Tameson; Adafruit). 7) Banging pipes from water hammer (Tameson; Wikipedia). 8) Printed valves leak past warped or rough faces, or stick from too much friction (Printables 245125, 1405826).
- **related**: 
  - Check valve: opened by the flow itself and only lets fluid one way; no signal needed
  - Shut-off valve (ball valve, tap): a hand-operated on/off valve
  - Speed-control valve (flow control, needle valve): sets how fast a cylinder moves rather than which way
  - Pressure regulator and Pressure relief valve: set or limit pressure instead of switching paths
  - Iris valve (and pinch valve): squeezes a soft tube shut; often servo-driven in maker projects
  - Air-logic valve (pneumatic logic, soft bistable valve): valves switched by air pressure and joined into logic with no electronics
  - Air or hydraulic cylinder, Soft pneumatic bending actuator and Vacuum (suction) gripper: the actuators these valves switch
  - Solenoid latch: the same coil-and-plunger idea used to move a bolt instead of a valve
  - Servo or motorised latch: the motor-driven alternative, like a motorised ball valve
  - Quick couplers and Hose barb: the fittings that join valves to tubes

### Pictures, videos and models

- **links**: 
  - [Solenoid Valve.svg (SimonOrJ; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Solenoid_Valve.svg): Cross-section of a pilot-operated solenoid valve shut and open: inlet, diaphragm with pinhole, pressure chamber, pilot passage, solenoid and outlet *(licence: Public domain)*
  - [5 2 solenoid valve example.svg (Qscgy256; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:5_2_solenoid_valve_example.svg): Standard symbol of a 5/2 valve: two boxes (positions) with flow arrows and ports numbered 1-5 *(licence: CC BY-SA 4.0)*
  - [Distributeurs connexions.svg (Ruizo; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Distributeurs_connexions.svg): Symbols of common valves with their pipe connections: a 3/2 valve drawn in each of its two positions and a 4/3 valve with a closed centre *(licence: CC BY-SA 3.0)*
  - [Directional control valves for pneumatic cylinders (Tameson)](https://tameson.com/pages/directional-control-valve-pneumatic-cylinder): Diagrams and photos showing how 3/2, 5/2 and 5/3 valves connect to single- and double-acting cylinders, with step-by-step plumbing *(licence: link only)*
  - [Essential Symbols for Pneumatic Systems (Tameson)](https://tameson.com/pages/pneumatic-component-symbols): Table of valve symbols (2/2 to 5/3, normal positions and centre types) and operator symbols (button, lever, pedal, roller, spring, pressure) *(licence: link only)*
- **make_it_yourself**: 
  - [Pneumatic-mechanical 4/2-way valve (Vincent Groenhuis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve): Printed 4/2 valve switched by air or by hand, with six M5 ports and silicone seals; used in the designer's pneumatic Turing machine *(licence: CC BY-NC-SA)*
  - [4/2-way pneumatic valve for fischertechnik (juh, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1405826-42-way-pneumatic-valve-for-fischertechnik): Printed 4/2 hand valve in PLA/PETG-only and TPU-gasket versions, with tips on printing airtight faces *(licence: CC BY-NC-SA)*
  - [Valve for Lego Pneumatic Engines (Ja Hey 64, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/289258-valve-for-lego-pneumatic-engines): Printed rotary distributor valve that switches air between LEGO pneumatic cylinders to make an engine turn, run from a bicycle pump *(licence: CC BY-NC-SA)*
  - [Solenoid valve SG90 servo conversion (Someguy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1083966-solenoid-valve-sg90-servo-conversion): Housing that replaces a cheap water solenoid's coil with an SG90 servo, so a plant waterer needs power only while switching *(licence: CC BY-SA)*
  - [RC servo solenoid valve (Bakermonitor1932, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/154217-rc-servo-solenoid-valve): Bracket that lets a radio-control servo squeeze an air blow gun, making a remote-controlled air valve *(licence: CC BY)*
  - [Programmable-Air (tinkrmind; GitHub README)](https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md): Open-source Arduino-based pump-and-valve board for soft robotics, with a parts list of cheap 12 V micro solenoid valves and notes on driving them *(licence: MIT)*
- **diagram_idea**: A double-acting cylinder connected to a 5/2 valve drawn as a cutaway spool, shown twice: coil off (spring pushes the spool left, supply port 1 feeds port 2, cylinder retracts, port 4 exhausts through 5) and coil on (spool shifts right, 1 feeds 4, cylinder extends, 2 exhausts through 3), with the matching two-box symbol drawn underneath each.
- **sources**: 
  - https://en.wikipedia.org/wiki/Solenoid_valve
  - https://en.wikipedia.org/wiki/Four-way_valve
  - https://en.wikipedia.org/wiki/Hydraulic_shock
  - https://en.wikipedia.org/wiki/Pneumatics
  - https://tameson.com/pages/directional-control-valve-pneumatic-cylinder
  - https://tameson.com/pages/52-way-and-42-way-pneumatic-valve
  - https://tameson.com/pages/solenoid-valve-types
  - https://tameson.com/pages/solenoid-valve-troubleshooting-the-most-common-failure-modes
  - https://tameson.com/pages/solenoid-valve-noises
  - https://tameson.com/pages/pneumatic-component-symbols
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1:_Fluid_Power_and_Pneumatics_(NWTC)/04:_Basic_Circuits_using_Cylinders/4.02:_Directional_Control_Valves
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2:_Basic_Hydraulics_(NWTC)/04:_Basic_Cylinder_Circuits/4.04:_Operation_and_Schematic_Symbol_of_a_4_3_DCV
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-control/
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.adafruit.com/product/997
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/LICENSE
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://cvra.ch/blog/2016/airtank
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve
  - https://www.printables.com/model/1405826-42-way-pneumatic-valve-for-fischertechnik
  - https://www.printables.com/model/289258-valve-for-lego-pneumatic-engines
  - https://www.printables.com/model/1083966-solenoid-valve-sg90-servo-conversion
  - https://www.printables.com/model/154217-rc-servo-solenoid-valve
  - https://www.printables.com/model/207051-servo-valve
  - https://www.printables.com/model/310335-servo-mounted-ball-valve-blast-gate
  - https://www.printables.com/model/247744-pinch-valve-powered-by-servo
  - https://commons.wikimedia.org/wiki/File:Solenoid_Valve.svg
  - https://commons.wikimedia.org/wiki/File:5_2_solenoid_valve_example.svg
  - https://commons.wikimedia.org/wiki/File:Distributeurs_connexions.svg

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, compressed air
- **power_loss**: lets go ⚑ *needs confirming (best guess): versions differ: lets go, keeps its last state*
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: clicks
- **tools**: hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: powered
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: pushes, pulls or flow shared out
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

## 303 Peristaltic pump (tube pump, roller pump)

*hydraulics, pneumatics & vacuum.* Rollers on a turning rotor squeeze a soft tube and push the liquid along it, so only the tube touches the liquid and each turn moves a set amount, which makes it good for dosing

### What it is

- **plain_name**: A pump where little wheels on a spinning hub roll along a soft tube and squash it flat, pushing the liquid in front of them along the tube, like squeezing toothpaste along a tube with your fingers. The liquid only ever touches the inside of the tube, and every turn pushes out roughly the same amount, so it is handy for measuring out doses
- **term**: Peristaltic pump (roller pump, tube pump)
- **aliases**: 
  - roller pump
  - tube pump, tubing pump (low-pressure type with unreinforced tubing and rollers)
  - hose pump (high-pressure type with reinforced hose, sliding shoes and a lubricant-filled casing)
  - peristaltic dosing pump, peristaltic metering pump
  - linear peristaltic pump, finger pump (the tube lies straight and is squeezed by a row of fingers, as in some medical infusion pumps)
  - squeeze pump
  - 'sapsucker' pump (for maple sap)
  - Masterflex (Avantor brand), Watson-Marlow (brand), Verderflex (Verder brand), Bredel (Watson-Marlow brand of hose pumps)
  - Schlauchpumpe (German), pompe peristaltique (French)
- **family**: hydraulics, pneumatics & vacuum
- **one_liner**: A rotor carrying two or more rollers squeezes a flexible tube against a curved track as it turns, so each squeezed point pushes a trapped pocket of liquid along the tube, giving a valve-free, self-priming pump in which only the tube touches the liquid and the amount pumped is set by how far the rotor turns (Wikipedia 'Peristaltic pump').
- **complexity**: A small assembly that acts as one unit: a rotor (hub) carrying 2-12 rollers, often ball bearings; a curved track or housing (the occlusion bed or stator) that the tube is pressed against; one length of soft tube (the only part the liquid touches); tube clamps or retainers at the inlet and outlet; and a drive (stepper motor, small geared DC motor, hand crank or drill), usually with a motor driver and microcontroller (Wikipedia; Nature Scientific Reports 2020; Printables 1556845). One printable design has the rollers as captive planet gears and prints as a single piece, needing only the tube (Tim's 'Parametric Peristaltic Pump').
- **how_it_works**: The tube lies in a curved channel, and the rollers on the turning rotor press it completely flat (occlusion) at two or more points at once, trapping a pocket of liquid between neighbouring rollers. As the rotor turns, the squashed points roll along the tube and push each pocket towards the outlet, while behind the last roller the springy tube pops back to round and sucks in fresh liquid from the inlet (Wikipedia; Adafruit). Because a squeezed point always blocks the tube, liquid cannot run back or siphon through when the pump stops, so no valves are needed (Wikipedia; Williamson Manufacturing). The amount pumped per turn is roughly fixed, so a stepper motor can turn it a set number of steps or part-turns to deliver a measured dose, and running the motor backwards reverses the flow (Wikipedia; Adafruit).

### Finder attributes

- **job**: 
  - change the kind of motion: turns the turning of a motor shaft into a measured flow of liquid along a tube (Wikipedia; Nature Scientific Reports 2020)
  - seal it, or pass cables or fluid through: moves liquid through a closed, unbroken tube, so the liquid never touches the pump's moving parts and can't leak out round a shaft seal (Wikipedia; Williamson Manufacturing)
  - stop it moving back (one-way): while the rotor is stopped, the squeezed tube acts as a shut valve, preventing backflow and siphoning without separate check valves (Wikipedia; Williamson Manufacturing). It is not truly one-way: reversing the motor reverses the flow (Adafruit)
- **motion**: rotate: the rotor turns continuously, or is stepped through part-turns for small doses (Wikipedia); the liquid moves along the tube
- **degrees_of_freedom**: 1: only the rotor turns relative to the housing; the tube is held still in the housing
- **special_behaviour**: 
  - motion conversion: rotation of the rotor becomes a flow of liquid; a fixed amount is pumped per turn, so counting turns or motor steps measures the dose (Wikipedia; Printables 63352 'Mini peristaltic pump for 28BYJ-48 stepper motor')
  - self-locking: when the motor stops, the rollers keep the tube squeezed shut, so liquid can't flow back or siphon through the pump (Wikipedia; Williamson Manufacturing)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it moves liquid rather than holding parts together
  - friction or clamping (force-fit): the tube is held in place by clamps, retainers or barbed fittings in notches, or simply glued, so the rollers don't drag it through the pump (Nature Scientific Reports 2020; Tim's blog and its comments; Printables 1556845)
- **input_output**: Continuous or stepped rotation -> pulsing liquid flow. Flow rises with rotor speed, tube bore (inside diameter) and pump-head diameter; adding rollers does not add flow (it slightly reduces it) but makes the pulses smaller and more frequent (Wikipedia). Examples: the open-source printed pump in Scientific Reports gave 0.46 mL/min with 0.79 mm bore tubing and 1.62 mL/min with 1 mm bore tubing at about 108 rpm, driven through a printed 4:1 gearbox (Nature Scientific Reports 2020); a Masterflex Easy-Load lab head moves about 0.06-3.8 mL per revolution depending on tube size (Masterflex manual). Pressure: printed hobby pumps are 'not designed for high-pressure applications' (Printables 1556845); a lab roller head is rated 15-40 psig (about 1-2.7 bar) depending on tube size (Masterflex Easy-Load manual); industrial roller pumps reach about 12 bar and shoe-type hose pumps about 16 bar (Wikipedia). Rough efficiency: low, because squashing the tube and the rolling friction use much of the motor's power ('added friction losses', Tim's blog) ⚑ [uncertain: no measured figure found]. Arrangement: the tube enters and leaves at the side of the rotor. Back-drivable: no while the tube is fully squeezed; pressure in the outlet line can't turn the rotor or flow back (Wikipedia). *(⚑ parts need confirming)*
- **power**: powered: needs a motor (stepper, geared DC motor), a drill or a hand crank to turn the rotor (Hackaday 2018; Printables 1108179 'Drill Powered Peristaltic Pump'). When power is lost: the rotor stops and the rollers keep the tube squeezed, so flow stops and the line stays shut (keeps its last state) (Wikipedia)
- **removability**: removable: the pump head bolts onto its motor with a few screws, and the tube is a replaceable wear part that can be swapped in seconds on lab pumps (Printables 1556845; Williamson Manufacturing; Masterflex manual)
- **reuse_cycles**: many times: the pump itself can be taken apart and re-tubed again and again, but the tube is a consumable that wears out and needs replacing periodically (Wikipedia; Williamson Manufacturing)
- **tools_needed**: screwdriver or hex keys for the motor and housing screws; a vice, clamp or arbor press to press ball bearings into the rotor; a soldering iron if the design uses heat-set threaded inserts; scissors or a knife for the tube; optionally glue to stop the tube creeping; plus a motor driver and microcontroller for stepper versions (Printables 1556845, 63352 and 1108179; Nature Scientific Reports 2020)
- **seal**: watertight: the liquid stays inside one continuous tube and the squeezed points seal it off from the outlet; there are no shaft seals to leak (Wikipedia). It holds only modest pressure: 15-40 psig (about 1-2.7 bar) for a lab roller head (Masterflex Easy-Load manual), much less for most printed pumps (Printables 1556845)
- **load**: light: hobby and printed pumps give millilitres per minute up to a few hundred millilitres per minute at low pressure; industrial hose pumps work against up to 16 bar (Wikipedia; Nature Scientific Reports 2020). The rotor needs a lot of turning force (torque) to squash the tube: one maker's own design closed the tube but stalled his stepper motors and needed a drill to turn it (Hackaday.io OSUG log)
- **adjustable**: yes: flow is set by motor speed (stepper rate or PWM) and direction; the tube size can be changed by swapping the tube and, on printed designs, a matching stator or spacer; the squeeze (occlusion) is fixed by the roller-to-track gap or set by spring-loaded rollers (Wikipedia; Adafruit; Nature Scientific Reports 2020; Printables 1556845)
- **play_and_precision**: Dose precision is good but not exact: Wikipedia says the fixed volume per turn lets you 'roughly measure' the amount; in the printed Scientific Reports pump most of the variation between trials came from how tightly the tube was clamped, and once clamped the rate was 'highly uniform'. The delivered amount drifts as the tube ages, so recalibrate or replace the tube regularly (Hackaday 2018 comments). Output pulses at the rotor speed times the number of rollers (Nature Scientific Reports 2020). A print-in-place planetary version had play in its gears that changed the squeeze as it turned, so it sealed at some angles and leaked back at others (Hackaday.io OSUG log)
- **access_needed**: not applicable: it is a self-contained unit; you only need to reach the pump head to thread or swap the tube
- **materials**: Housing and rotor: 3D-printed ABS, PLA, PETG or tough resin (Nature Scientific Reports 2020; Printables 1556845, 1108179); metal or engineering plastic on commercial heads. Rollers: ball bearings (608, MR93ZZ or 3x8x4 mm) or stainless-steel rollers (Printables 1556845, 11803, 63352; Masterflex). Tube (the only wetted part): silicone rubber, PVC, natural rubber, nitrile, EPDM, Hypalon, Viton, polyurethane, Santoprene or pharmaceutical-grade blends such as PharMed (brand). Natural rubber resists fatigue best, EPDM and Hypalon resist chemicals best, silicone suits water-based liquids, and stiff plastics such as PTFE and polyolefins can't be used alone because the tube must spring back to round (Wikipedia). The liquid can be water, slurries, viscous or shear-sensitive liquids, or aggressive chemicals, as long as the tube material suits it (Wikipedia; Williamson Manufacturing)
- **maker_difficulty**: easy to moderate: a printed rotor with pressed-in ball bearings on a stepper motor is a popular, well-documented build, but getting the squeeze right takes trial and error (too tight stalls the motor and wears the tube, too loose lets liquid slip back), and the one-piece print-in-place version needs its tolerances tuned to your printer (Hackaday 2018; Hackaday.io OSUG log; Wikipedia)

### Making it

- **processes**: 
  - 3D print (FDM): housings, rotors and stators in PLA, PETG or ABS, with ball bearings as rollers (Printables 1556845, 63352; Nature Scientific Reports 2020)
  - 3D print (resin): tight-tolerance rotors and cases, e.g. the drill-driven oil pump printed in a tough resin (Printables 1108179)
  - off-the-shelf part: ready-made 12 V and 5-6 V DC peristaltic pumps with silicone tubing (Adafruit), and lab pump heads and drives (Masterflex)
- **print_in_place**: partly: most designs are printed as separate parts and assembled with bearings, screws and a motor (Printables 1556845). One OpenSCAD design based on a planetary gear bearing prints as a single, already-assembled piece with captive rollers and needs only the tube threading through it (Tim's blog; Hackaday 2014), but its gear tolerances must be tuned to your printer (Hackaday.io OSUG log)
- **making_tips_3d_printing**: 1) Let the bearings, not the plastic, touch the tube: press ball bearings onto the rotor as rollers, so the tube is only pressed by smooth bearings and never rubs on printed surfaces (Hackaday 2018; Nature Scientific Reports 2020). Seat the bearings flat in their pockets so they run square. 2) Print strong rotors: one popular NEMA 17 design uses 60% infill for the bearing holder and 15% for the housing at 0.2 mm layers in PLA, PETG or ABS, with no supports in the recommended orientation, and presses five 608 bearings in without glue (Printables 1556845). Small pumps for 3-4 mm tubing need a 0.25 mm nozzle and 0.1-0.15 mm layers; PETG works well with melted-in thread inserts, while PLA melts too easily around them (Printables 63352). 3) Set the squeeze: the gap between roller and track should squash the tube's two walls by about 10-20% beyond touching (occlusion; Wikipedia); a parametric printed pump used a 'squish ratio' of 0.5 with good results and suggests less squeeze if you don't need much pressure, to cut friction (Tim's blog). The tube's wall thickness, not its bore, decides whether it fits a given pump (Wikipedia). 4) Use soft tube only: hard tubing won't work (Printables 1556845); silicone tube of about 50 Shore A worked in the Scientific Reports pump. 5) Stop the tube creeping: the rollers tend to drag the tube slowly through the pump, so clamp it at both ends, lightly glue it, or use barbed unions locked into notches in the housing (Tim's blog and comments; Printables 1556845). 6) For a one-piece planetary pump, adjust the clearance setting (default 0.15 mm) and the allowed overhang (45-60 degrees suits most FDM printers); a thin skin may join the gears on the first layer and can be broken free by turning them (Tim's blog; Appropedia copy of the OpenSCAD file; Hackaday 2014 comments). 7) Don't run it hard: one maker's printed pump heated up from friction and deformed when he tested how far it could squirt (Hackaday.io OSUG log); test at low speed first (Printables 1556845). 8) For bigger flows, a larger pump diameter is kinder to the tube (Tim's blog; Wikipedia).
- **off_the_shelf_parts**: Ready-made pumps: 'peristaltic liquid pump' with silicone tubing (12 V or 5-6 V DC, e.g. Adafruit 1150), 'peristaltic dosing pump'; lab 'pump heads' and 'pump drives' (e.g. Masterflex L/S Easy-Load, brand). Parts for printed pumps: deep-groove ball bearings (608, MR93ZZ, 3x8x4 mm), NEMA 17 or NEMA 14 stepper motor, 28BYJ-48 geared stepper with ULN2003 driver board, stepper drivers (A4988, DRV8825), M3 screws and heat-set threaded inserts, barbed tube connectors. Tubing: 'peristaltic pump tubing' in silicone, PVC, Norprene, PharMed BPT or Tygon (brands), sized by bore and wall thickness (Printables 1556845, 63352, 11803; Adafruit; Masterflex manual; Hackaday 2018 comments; Wikipedia)
- **rules_of_thumb**: 
  - Squeeze (occlusion) is usually 10-20% of twice the tube wall thickness: more for soft tube, less for hard tube. Too much squeeze shortens tube life sharply; too little lets liquid slip back, especially at higher pressure (Wikipedia 'Peristaltic pump', Occlusion)
  - The tube's wall thickness, not its bore, decides whether it fits a pump, so several bores with the same wall can share one pump head (Wikipedia)
  - Flow rises with tube bore, pump-head diameter and speed; more rollers do not add flow, they give smaller, faster pulses but squeeze the tube more often and shorten its life. A longer squeezed length adds pinch points and lets the pump push against more pressure (Wikipedia)
  - The main pulse frequency equals the rotor speed times the number of rollers (Nature Scientific Reports 2020)
  - Pressure limits: tube (roller) pumps up to about 12 bar; reinforced hose pumps with shoes up to about 16 bar (Wikipedia); a typical lab roller head 15-40 psig (about 1-2.7 bar), lower for the larger tube sizes (Masterflex Easy-Load manual)
  - Suction lift: theoretical maximum about 33 ft (10 m) (Wikipedia); commercial pumps typically lift 8-9 m dry (Crest Pumps) or 5 m plus (Williamson Manufacturing); a small hobby DC pump self-primes about half a metre (Adafruit)
  - Chemical check for a tube: soak a 1-2 inch sample in the liquid for 24-48 hours; if its weight changes by more than 10%, don't use that tube material (Wikipedia)
  - For tube life, keep the tube straight where it enters and leaves the pump head, and give it a light tug to pre-stretch it when loading (Masterflex Easy-Load manual)
  - Accurate dosing needs a steady inlet; heavy inlet pulsation squashes the tube oval and reduces flow, so add a pulsation damper or recalibrate (Wikipedia); recalibrate or change the tube as it ages (Hackaday 2018 comments)

### When to use it

- **everyday_examples**: 
  - Hospital machines: medical infusion pumps, kidney dialysis machines and heart-lung machines move blood and drips this way (Wikipedia)
  - Dosing pumps that feed detergent into commercial dishwashers and washing machines, and dosers for hydroponics and aquariums (Wikipedia)
  - Drink and cheese-sauce dispensers, and the 'drink-bot' cocktail robots that makers build (Wikipedia; Adafruit; Hackaday 2014)
  - Your own gut: the same squeezing wave (peristalsis) pushes food along your intestines (Wikipedia; Tim's blog)
- **when_to_use**: Choose a peristaltic pump when the liquid must stay clean or must not touch metal or a motor (food, drinks, plant feed, lab samples, aggressive chemicals), because only the inside of the tube is wetted and the tube can be swapped or flushed (Wikipedia; Williamson Manufacturing). It is good for measured doses: a stepper motor turning a set number of steps gives a repeatable amount, so it suits plant-watering and fertiliser dosers, drink robots and lab liquid handling (Printables 63352; Nature Scientific Reports 2020). It primes itself, can run dry without damage for short periods, needs no valves, stops backflow and siphoning when off, and handles thick, gritty or shear-sensitive liquids that would jam or damage an impeller (Wikipedia; Williamson Manufacturing; Crest Pumps; Tim's blog). It is also reversible, and can recirculate liquid round a closed loop, which a syringe pump can't (Adafruit; Nature Scientific Reports 2020).
- **when_not_to_use**: Avoid it when you need smooth, pulse-free flow (choose a syringe pump or another positive-displacement pump, or add a pulsation damper), high flow at low cost (a centrifugal pump moves much more water per watt), or exact tiny doses over long periods (a syringe pump or piston pump is more precise; Hackaday 2018 comments) (Wikipedia). It is a poor choice for very high pressure or very viscous liquids (Wikipedia), and for machines that sit unused for months, because the tube takes a set where the rollers press it and sticky liquids can glue the tube shut as they dry (Hackaday 2018 comments). Small stepper motors may not have enough turning force to squash the tube; one maker switched back to a syringe design for this reason (Hackaday.io OSUG log). Never use a home-made pump on people (Masterflex: not intended for patient-connected use).
- **environment_limits**: The tube decides most limits. Chemicals: match the tube to the liquid (silicone suits water-based liquids but has limited chemical resistance; EPDM and Hypalon resist chemicals best; fuels need fluoroelastomer or lined tube) (Wikipedia). Ageing: the tube wears with every squeeze and needs periodic replacement; worn tube changes the flow rate (Wikipedia; Hackaday 2018 comments); left stopped for months the tube stays flat where the rollers pressed it, and for stop-start use silicone's low compression set makes it a good choice (Wikipedia; Hackaday 2018 comments). Dry running is fine for short periods, but long dry running heats and cracks the tube (Crest Pumps). Heat: printed PLA or PETG rotors can soften from friction if run hard (Hackaday.io OSUG log). Abrasive particles wear the tube's inside faster (Williamson Manufacturing). Sunlight (UV) ageing of silicone and PVC tube ⚑ [uncertain: not checked in a source]. *(⚑ parts need confirming)*
- **safety_notes**: Pinch and crush point: fingers or loose clothing can be caught between the rollers and the track, so stop and unplug the drive before loading or changing the tube (Masterflex Easy-Load and High-Performance manuals). A worn or chemically attacked tube can split, and a positive-displacement pump keeps pushing against a blocked outlet, so a split tube or a hose blown off its fitting can spray the liquid; use eye protection with chemicals ⚑ [uncertain: inferred from Wikipedia's tube-rupture and tube-life notes, no hobby source states it directly]. Commercial lab pumps say they are not designed for patient-connected or medical use (Masterflex), so never use a DIY pump on people. Tubing sold with cheap pumps may be dirty and not food-rated: sterilise it, and buy food-grade tube for drinks (Adafruit). Keep liquids away from the motor electronics. *(⚑ parts need confirming)*
- **common_failures**: 1) Flow rate drifts as the tube wears and loses springiness: recalibrate, use a flow meter, or change the tube regularly (Hackaday 2018 comments; Wikipedia). 2) Tube stays flat after standing idle for months, and sticky liquids dry and glue it shut: flush the line after use and release or replace the tube (Hackaday 2018 comments). 3) Tube creeps or 'walks' through the pump: clamp, glue or barb-lock it at both ends, or leave extra slack upstream (Tim's blog and comments; Printables 1556845). 4) Motor stalls: too much squeeze or too weak a motor; reduce the squeeze, gear the motor down (the printed Scientific Reports pump uses a 4:1 gearbox) or run slower (Hackaday.io OSUG log; Printables 11803). 5) Too little squeeze: liquid slips back, flow falls and the fast backflow wears the tube (Wikipedia). 6) Printed parts heat up and deform from friction at high speed (Hackaday.io OSUG log). 7) Uneven squeeze from play in printed gears or a wobbly rotor, so the pump leaks back at some rotor angles (Hackaday.io OSUG log). 8) Tube burst or pinholes near the outlet from over-pressure, chemical attack or use beyond its rated life (Wikipedia). 9) Flow varies because the tube was clamped with different tension each time (Nature Scientific Reports 2020).
- **related**: 
  - Syringe pump (syringe driver): a motor-driven screw pushes a syringe plunger; smoother and more precise for small volumes, but limited to the syringe's volume and can't recirculate (Nature Scientific Reports 2020; Hackaday 2018 comments)
  - Diaphragm pump and squeeze bulb: a flexing rubber disc between two check valves; suits air and thin liquids, but needs valves that the peristaltic pump does without
  - Gear pump: two meshing gears carry liquid round; smoother and higher pressure, but the liquid touches the gears and seals
  - Centrifugal pump: a spinning impeller gives lots of flow at low pressure but must be primed and doesn't measure doses
  - Pinch valve (covered in the Iris valve entry): squeezes a soft tube only to shut it off, rather than rolling along it to pump (Wikipedia 'Peristaltic pump' is its contrast)
  - Linear peristaltic pump (finger pump): the same idea with the tube straight and a row of cams or fingers squeezing it in sequence (Wikipedia; Wikimedia Commons animation)
  - Hose pump: the heavy-duty version with sliding shoes, a reinforced hose and a lubricant-filled casing, working against up to 16 bar (Wikipedia)
  - Check valve (one-way valve): needed by most other pumps to stop backflow; the peristaltic pump's squeezed tube does this job itself

### Pictures, videos and models

- **links**: 
  - [Peristaltic pump.gif (Njmcca; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Peristaltic_pump.gif): Animation of a roller rotor squeezing a tube and pushing liquid along it (used on Wikipedia's 'Peristaltic pump' page) *(licence: CC BY-SA 3.0)*
  - [Linear peristaltic pump animation (Richard Schneider; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schlauchpumpe-lineare-Bauart-transparant-indizert-bewegt.gif): Animation of a linear (finger) peristaltic pump, where a row of fingers squeezes a straight tube in sequence *(licence: CC BY-SA 3.0)*
  - [Schlauchpumpe Funktionsprinzip (Fluidity.nonstop; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schlauchpumpe_Funktionsprinzip.gif): Animation of a hose pump that squeezes the hose with sliding shoes instead of rollers *(licence: CC BY-SA 4.0)*
  - [How Peristaltic Metering Pumps Work - Helpful Animation by Albin Pump (Albin Pump, YouTube)](https://www.youtube.com/watch?v=zWozq_wuAx4): Animated explanation of how the rollers squeeze the tube to meter liquid (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Peristaltic pump (Wikipedia)](https://en.wikipedia.org/wiki/Peristaltic_pump): Article with the animation, photos of lab pump heads and a linear-pump diagram, plus sections on occlusion, flow rate, pulsation and tubing *(licence: CC BY-SA 4.0 (text); images per file)*
- **make_it_yourself**: 
  - [Parametric Peristaltic Pump by Drmn4ea (Thingiverse)](https://www.thingiverse.com/thing:454702): One-piece print-in-place pump adapted from emmett's planetary gear bearing, with captive rollers; needs only a length of tube (about 3/16 in OD latex surgical tubing for the default file) and an Allen key or motor to turn it. OpenSCAD source lets you set tube size, squeeze, clearance and overhang *(licence: CC BY-SA 3.0 (stated in the OpenSCAD file header, copied on Appropedia; Thingiverse page showed no licence to the fetch tool))*
  - [3D printed peristaltic pump (Appropedia)](https://www.appropedia.org/3D_printed_peristaltic_pump): Copy of the full OpenSCAD source for the planetary print-in-place pump, with the tube outer diameter, wall thickness, squish ratio, clearance (tol) and overhang parameters explained in comments *(licence: CC BY-SA 3.0 (code header))*
  - [V2 -- Nema 17 Peristaltic Pump / Water Pump / measuring Pump (Maximilian Puschmann, Printables)](https://www.printables.com/model/1556845-v2-nema-17-peristaltic-pump-water-pump-measuring-p (URL from Printables API, page not opened)): Popular fully printable pump for a NEMA 17 stepper with five 608 bearings and 8 mm soft silicone tubing, with print settings and assembly notes *(licence: CC BY-SA)*
  - [Mini peristaltic pump for 28BYJ-48 stepper motor (Daniel, Printables)](https://www.printables.com/model/63352-mini-peristaltic-pump-for-28byj-48-stepper-motor (URL from Printables API, page not opened)): Small dosing pump for 3 or 4 mm silicone tubing driven by the cheap 28BYJ-48 geared stepper; Fusion 360 files included *(licence: GNU GPL v3.0)*
  - [Drill Powered Peristaltic Pump, Gear Oil Transfer Pump (Tate S, Printables)](https://www.printables.com/model/1108179-drill-powered-peristaltic-pump-gear-oil-transfer-p (URL from Printables API, page not opened)): Resin-printed pump turned by a cordless drill, using 608 bearings and 1/4 in ID silicone tubing, for transferring gear oil *(licence: CC BY-NC)*
  - [Open-source, 3D-printed Peristaltic Pumps for Small Volume Point-of-Care Liquid Handling (Scientific Reports, 2020)](https://www.nature.com/articles/s41598-020-58246-6): Open-source lab pump (about $120) with ABS-printed rotor, stator and 4:1 gearbox, three ball-bearing rollers and Arduino control; STL files and bill of materials in the supplementary files *(licence: CC BY 4.0 (article))*
- **diagram_idea**: A round housing with a U-shaped loop of tube pressed against its inner wall and a three-roller rotor in the middle: as the rotor turns, coloured pockets of liquid trapped between the squashed points march from inlet to outlet, with a small inset showing the squeeze gap (occlusion) as two tube walls pressed together.
- **sources**: 
  - https://en.wikipedia.org/wiki/Peristaltic_pump
  - https://hackaday.com/2018/10/27/the-bolt-on-peristaltic-pump/
  - https://hackaday.com/2014/09/16/a-3d-printed-peristaltic-pump/
  - https://tim.cexx.org/?p=1282
  - https://www.appropedia.org/3D_printed_peristaltic_pump
  - https://www.thingiverse.com/thing:454702
  - https://hackaday.io/project/20458-osug-open-source-underwater-glider/log/66453-functional-peristaltic-pump-and-why-im-not-using-it
  - https://www.nature.com/articles/s41598-020-58246-6
  - https://www.wmcpumps.com/blog/peristaltic-pumps-introduction
  - https://www.crestpumps.co.uk/resources/blog/a-guide-to-peristaltic-pumps
  - https://www.verderliquids.com/int/en/pump-technologies/peristaltic-pump/
  - https://www.sterlitech.com/media/wysiwyg/Masterflex-Easy-Load-Pump-Head-Manual.pdf
  - https://lab-eu.com/ws/media-library/b4330258be3e4fc8bc95b4b1d6c7bc32/77252-xx-manual-masterflexr-l-sr-high-performance-pump-heads.pdf
  - https://www.adafruit.com/product/1150
  - https://api.printables.com/graphql/ (models 1556845, 63352, 11803, 1108179)
  - https://commons.wikimedia.org/wiki/File:Peristaltic_pump.gif
  - https://commons.wikimedia.org/wiki/File:Schlauchpumpe-lineare-Bauart-transparant-indizert-bewegt.gif
  - https://commons.wikimedia.org/wiki/File:Schlauchpumpe_Funktionsprinzip.gif
  - https://www.youtube.com/watch?v=zWozq_wuAx4

### Finder tags

- **connects**: tube, rod or extrusion ⚑ *needs confirming (best guess): worked out from its name, but joining parts is not one of its two main jobs*
- **power_source**: electricity, compressed air
- **power_loss**: keeps its last state
- **motion_in**: steps, steady turning
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, press or vice, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, safety_notes

## 304 Venturi vacuum generator (vacuum ejector, aspirator)

*hydraulics, pneumatics & vacuum.* A T-shaped nozzle where a fast jet of compressed air or tap water drags air in through a side port, making suction with no moving parts

*Also covers:* Also covers the airlift pump.

### What it is

- **plain_name**: A T-shaped nozzle with no moving parts: blow compressed air (or run tap water) straight through it and the fast jet drags air in through the side branch, so the side branch sucks. It is a pump made of nothing but a carefully shaped hole
- **term**: Venturi vacuum generator (vacuum ejector, aspirator)
- **aliases**: 
  - vacuum ejector, ejector, air ejector
  - venturi pump, venturi vacuum pump, venturi nozzle
  - vacuum generator (pneumatic), compressed-air vacuum generator
  - water aspirator, filter pump, water-jet pump, tap aspirator (the tap-water version used in labs)
  - eductor, water eductor, jet pump (usually when a liquid drives it or is pumped)
  - injector (the same device used to push a fluid into a pressurised system, e.g. a steam injector)
  - steam ejector, steam jet ejector, evactor (industrial steam-driven version)
  - multistage ejector, eco-nozzle ejector (Schmalz term), COAX (Piab brand)
  - compact ejector (ejector with built-in valves and vacuum switch)
  - inspirator (the venturi that mixes gas and air in grills and Bunsen burners)
  - airlift pump, mammoth pump, gas lift (covered here: bubbles of air lift water up a pipe, another pump with no moving parts)
  - geyser pump (an improved airlift pump)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: powered & active connectors
- **one_liner**: A nozzle fires a fast jet of compressed air or water across a gap inside a T-shaped body; the fast jet has low pressure and carries surrounding air with it, so the side port sucks, giving vacuum for suction cups, fume extraction or lab filtering with no moving parts (Wikipedia 'Vacuum ejector'; Hackaday 2019).
- **complexity**: Single piece or a few parts: a body containing a narrow driving nozzle (motive or Laval nozzle), a mixing chamber with the side suction port, and a narrow throat that widens into a diffuser (receiver nozzle); usually plus a silencer on the exhaust, push-in or threaded fittings, and an on/off valve (Wikipedia 'Vacuum ejector'; Schmalz; Festo VN data sheets). The tap version is one moulded or printed piece with a tap connector and a hose barb (Wikipedia; Printables 253828). The airlift pump is a riser pipe standing in the water, an air line and an air-injection foot fed by an air pump or compressor (Wikipedia 'Airlift pump').
- **how_it_works**: Compressed air or water is forced through a narrow nozzle, so it speeds up and its pressure drops (the Venturi effect, from Bernoulli's principle). The fast jet crosses a small chamber and drags the air around it along (entrainment), so air is sucked in through the side port; the mixture then passes a narrow throat and a slowly widening diffuser, which slows it down until it can escape to the open air (Wikipedia 'Vacuum ejector'; Schmalz). How strong the suction is depends on the jet speed and the shapes of the nozzle, throat and mixing section; with water it can never go below the water's vapour pressure (about 3.2 kPa at 25 C), while an air-driven ejector has no such floor (Wikipedia). In the airlift pump, air bubbled into the bottom of a submerged pipe makes the water inside lighter than the water outside, so the outside water pushes the bubbly mixture up and out of the top (Wikipedia 'Airlift pump').

### Finder attributes

- **job**: 
  - hold or release using power: supplies the suction that holds a part on a suction cup or vacuum gripper, and lets go as soon as the air is switched off or a vent opens (Schmalz; see the Vacuum (suction) gripper entry)
  - seal it, or pass cables or fluid through: moves air, fumes or liquid along a pipe with no moving parts, e.g. pulling corrosive fumes away from a PCB etching tank, sucking a lab flask, or (as an airlift pump) lifting water in an aquarium or pond (Hackaday 2019; Wikipedia 'Vacuum ejector' and 'Airlift pump')
  - change the kind of motion: turns a flow of pressurised air or water into suction (Wikipedia 'Vacuum ejector')
- **motion**: none: nothing in the device moves; only the air or water flows through it
- **degrees_of_freedom**: 0: it is one fixed part with no moving pieces (Wikipedia 'Vacuum ejector')
- **special_behaviour**: 
  - motion conversion: a flow of compressed air or water becomes suction at the side port (Wikipedia; Schmalz)
  - quick-release: suction starts and stops almost instantly with the air supply, and a short blow-off pulse can push the part off the cup; Schmalz notes that venturi vacuum generators suit very high accelerations (Schmalz 'Operating principles of vacuum generation'; Festo VN data sheet lists an 'ejector pulse valve')
  - none of the locking behaviours: it is not self-locking; suction stops when the supply stops, so a held part drops unless a check valve or valve keeps the vacuum sealed in (Schmalz compact ejectors switch the air off once enough vacuum is reached and back on when it falls)
- **holding_principle**: 
  - suction or air pressure: makes the low pressure that holds suction cups and vacuum grippers (Schmalz)
  - powered hold: suction exists only while compressed air or water is flowing through it (Wikipedia 'Vacuum ejector')
- **input_output**: Flow of compressed air (typically 1-8 bar, nominal 6 bar) or tap water -> suction (partial vacuum). Examples: a Festo VN-10 with a 0.95 mm nozzle reaches 93% vacuum at only 3.5 bar in its 'high vacuum' version, 86% at 5.8 bar in a straight inline version, and sucks 21.8-40.5 l/min from open air, with a trade-off between deep vacuum and high suction flow (Festo data sheets 532640, 193554, 532641). Water aspirators stop at the water's vapour pressure, about 3.2 kPa absolute at 25 C (Wikipedia); one printable aspirator's maker estimates 20-30 mmHg (Printables 1556574). A printed compressed-air venturi is claimed to work at 2-6 bar and give 'up to 300mBars of underpressure' (maker's claim, Printables 128131). Rough efficiency: low; it consumes compressed air the whole time it runs, which is why industrial compact ejectors switch the air off once a safe vacuum is reached (Schmalz), and airlift pumps need a lot of compressed air for the water they move (Wikipedia 'Airlift pump'). Arrangement: in line (T shape, driving flow straight through, suction from the side). Back-drivable: not applicable (no moving parts); if the water supply drops, water can be sucked back the wrong way into the vacuum line (LibreTexts).
- **power**: powered: needs a supply of compressed air (from a compressor or air tank) or running water at mains pressure; an airlift pump needs an air pump or blower (Wikipedia 'Vacuum ejector', 'Airlift pump'). When power is lost: suction stops at once and the held part releases, unless a check valve or a closed valve traps the vacuum; with a tap aspirator, a drop in water pressure can suck water back into the vacuum line (LibreTexts; Printables 1556574)
- **removability**: tool-free quick release: industrial ejectors use push-in fittings, and tap aspirators push on to a hose barb and screw on to a tap (Festo VN data sheets: QS-6 push-in connections; Wikipedia; LibreTexts)
- **reuse_cycles**: effectively unlimited: there are no moving or wearing parts, so it can be connected and disconnected as often as needed; only the nozzle and silencer can clog with dirt (Wikipedia 'Vacuum ejector'; Festo asks for filtered, oil-free air)
- **tools_needed**: none for push-in fittings; a spanner and thread-seal tape for threaded ports; for printed ejectors, possibly a drill bit to clear the nozzle, a tap to cut threads, or a soldering iron to melt-screw a fitting in (Printables 1051026 'hot screwed in'; the Vacuum (suction) gripper entry describes drilling and tapping a printed ejector); plus a pressure regulator and valve for the air supply
- **seal**: airtight or pressure: the vacuum side, hoses and cup must be airtight or the suction leaks away; printed bodies must be dense enough not to leak through their layer lines (Printables 1556574: 4-6 walls, 100% infill; Hackaday 2019 comments: printed vacuum fittings 'leak like a sieve' until painted)
- **load**: light: the suction flow is small (tens of litres per minute for a 0.95 mm nozzle; Festo) and the holding force depends on the cup area and vacuum level. The airlift pump lifts water only a small height ('relatively low' head; Wikipedia)
- **adjustable**: yes: supply pressure (set with a regulator) changes the vacuum level and suction flow; nozzle and throat sizes set the trade-off between deep vacuum and high flow (Festo 'high vacuum' and 'high suction volume' versions); several nozzles in a row (multistage) add their suction rates together (Schmalz). Airlift pumps can only be adjusted crudely by the air flow; they behave mostly on/off (Wikipedia 'Airlift pump')
- **play_and_precision**: not applicable: it doesn't locate parts or pass on mechanical motion
- **access_needed**: not applicable: it is a self-contained in-line component connected by hoses
- **materials**: Industrial ejectors: aluminium alloy driving nozzle, POM (acetal) receiving nozzle, reinforced PA or POM housing, NBR seals, nickel-plated brass fittings (Festo VN data sheets). Lab water aspirators: a simple tee fitting that screws onto a tap, with a hose barb on the side (Wikipedia); steam ejectors can be made entirely of PTFE or graphite for very corrosive gases (Wikipedia). Printed: PETG, ASA or ABS for durability; polypropylene for best chemical resistance; PLA only for prototypes or water-only use; resin parts are less porous (Printables 1556574, 253828, 128131). Airlift pumps: plain PVC pipe and an air line (Printables 1793376). Whatever passes through gets mixed into the driving air or water, so that material must suit it too (Hackaday 2019; Wikipedia)
- **maker_difficulty**: easy to moderate: a venturi prints as one part with no assembly, but a small, smooth, well-centred nozzle matters, and shapes designed for water often fail with air (Hackaday 2019); you also need a compressor, or a tap for the water version

### Making it

- **processes**: 
  - 3D print (FDM): one-piece venturi nozzles, ejectors and water aspirators in PETG, ASA/ABS or PP (Printables 128131, 1051026, 253828, 1556574)
  - 3D print (resin): smoother, less porous bodies for water aspirators (Printables 253828)
  - off-the-shelf part: industrial vacuum generators (single-stage, multistage and compact ejectors) and glass, plastic or metal lab water aspirators (Festo; Schmalz; Wikipedia)
  - off-the-shelf parts assembled by hand: an airlift pump from PVC pipe, an air line and an aquarium air pump or compressor (Wikipedia 'Airlift pump'; Printables 1793376)
- **print_in_place**: yes: it has no moving parts, so the whole body with its internal nozzle, throat and side port prints as one working piece without internal supports when printed upright (Printables 1051026, 253828, 1556574); air versions usually also get a push-in fitting screwed or melted into the inlet (Printables 1051026)
- **making_tips_3d_printing**: 1) Print it upright with the jet axis vertical (the large inlet or water inlet towards the bed), so the internal nozzle and throat stay round and need no internal supports (Printables 1556574, 253828, 1051026). 2) Use fine layers: 0.1 mm in PETG for a small M5 compressed-air venturi (Printables 128131), 0.2 mm or less for a tap aspirator, because smooth inner walls cut turbulence (Printables 1556574). 3) Make it airtight: 4-6 perimeters and 100% infill so pressure and vacuum don't leak through the layer lines (Printables 1556574); a resin print is less porous than FDM (Printables 253828); printed vacuum fittings may need painting to seal (Hackaday 2019 comments). 4) Air is not water: many published venturi shapes are designed for water and just blow air out of both ends; a more pronounced nozzle surrounded by a mixing cavity made one maker's air ejector work (Hackaday 2019). Comments on the same article add that the jet must leave a sharp-edged, straight nozzle so it stays narrow (Hackaday 2019 comments). 5) Geometry starting points from one maker's parametric aspirator: throat about 1.2-1.5 times the nozzle diameter (too wide and air leaks back, too narrow and water spits out of the suction port), and a long diffuser tapering at about 5-7 degrees for better vacuum and less noise; use a smaller nozzle (about 1.5 mm) for low water pressure and a larger one (about 2.5 mm) for higher flow (Printables 1556574) ⚑ [uncertain: maker's guidance, not checked against a design standard]. 6) If water creeps into the vacuum side, lengthen the mixing section (Printables 253828 V3). 7) Choose the plastic for what you will suck: PLA only for water and prototypes; PETG, ASA/ABS, or PP/PVDF for chemicals (Printables 1556574, 253828). 8) The printed part sees supply pressure only in the short nozzle section; still keep the supply regulated, and never use a printed part as an air tank or reservoir. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Vacuum generator or vacuum ejector (single-stage, inline or T-shape; 'high vacuum' or 'high suction flow' versions), compact ejector with built-in on/off and blow-off valves and vacuum switch, multistage ejector module; silencer (muffler); push-in fittings (e.g. QS-6, brand) and M5 or G1/8 threaded ports; 2/2 or 3/2 solenoid valve; pressure regulator; vacuum gauge or vacuum switch; vacuum (suction) cups; thick-walled vacuum tubing; laboratory water aspirator ('filter pump') with tap connector and hose barb, vacuum trap flask; for an airlift: aquarium air pump, airline tubing, PVC riser pipe (Festo VN data sheets; Schmalz; Wikipedia; LibreTexts; Printables 1793376)
- **rules_of_thumb**: 
  - A water-driven aspirator can't pull a better vacuum than the water's vapour pressure: about 3.2 kPa absolute (32 mbar) at 25 C, and worse with warmer water (Wikipedia 'Vacuum ejector')
  - Air ejectors reach deep vacuum at modest pressure: Festo VN-10 'high vacuum' type 93% vacuum at 3.5 bar; 'inline high vacuum' type 86% at 5.8 bar; usable range 1-8 bar, nominal 6 bar (Festo data sheets 532640, 193554)
  - Choose vacuum or flow: for the same 0.95 mm nozzle, the high-vacuum type sucks 21.8 l/min from open air and the high-suction-volume type 40.5 l/min (Festo data sheets 532640, 532641); several nozzles in series stages (multistage, eco-nozzle) add their suction rates (Schmalz)
  - Expect noise: about 71-72 dB(A) at 6 bar even with a silencer on a small ejector (Festo data sheets); fit a silencer or pipe the exhaust away from people (HSE HSG39 para 116)
  - Use clean, oil-free air: Festo's VN generators can't run on lubricated air (Festo data sheets)
  - Stages: a single steam-ejector stage is generally not used below about 10 kPa; air ejectors are usually limited to two stages because air can't be condensed between them (Wikipedia 'Vacuum ejector')
  - Airlift pump: inject the air at least as deep below the water surface as the height you want to lift (water table 50 ft down means air injected 100 ft deep); it passes solids up to about 70% of the pipe diameter and only suits low lifts (Wikipedia 'Airlift pump')
  - Water aspirator: put a trap flask between the aspirator and your work, and always open the system to the air before turning the tap off, to stop back-suction (LibreTexts 'Suction Filtration')

### When to use it

- **everyday_examples**: 
  - The tap aspirator ('filter pump') screwed onto a lab or school sink tap to suck liquid through a filter funnel (Wikipedia 'Vacuum ejector'; LibreTexts)
  - Airbrushes, spray guns and perfume atomisers, where the fast air jet sucks liquid up a tube and sprays it (Wikipedia 'Venturi effect' and 'Vacuum ejector')
  - Gas grills, gas stoves and Bunsen burners, which use a venturi (inspirator) to suck in air to mix with the gas (Wikipedia 'Venturi effect')
  - Airlift pumps: aquarium filters driven by bubbles from an air pump, and the coffee percolator, which lifts coffee the same way (Wikipedia 'Airlift pump')
- **when_to_use**: Use a venturi when you already have compressed air (or a tap) and want suction with nothing to wear out, jam or spark: suction-cup grippers on robots and pick-and-place machines, holding parts that must be picked up and dropped quickly, or a cheap vacuum for lab filtering (Schmalz; Wikipedia; LibreTexts). Because nothing moves inside, it can move corrosive fumes, dusty or wet gases and even debris that would damage a fan or pump (Hackaday 2019: chlorine fumes from a PCB etching tank; Wikipedia: eductors that pass debris and are used where flammable vapours make electric pumps risky). It is small, light and starts and stops instantly, so it can sit right next to the suction cup (Schmalz). An airlift pump is a good, gentle, no-moving-parts way to circulate and aerate water in aquariums, ponds and aquaponics, or to lift sandy or muddy water (Wikipedia 'Airlift pump').
- **when_not_to_use**: Avoid it when you have no compressed air: running a compressor just to make vacuum wastes energy, and a small electric diaphragm vacuum pump is the better choice (Wikipedia notes that water aspirators are used less now because small electric vacuum pumps are more effective, cleaner and affordable). Don't use a water aspirator for solvents or hazardous chemicals, because they end up in the drain water, which may break environmental rules, and it wastes a lot of water (Wikipedia; Printables 253828 suggests recirculating water from a bucket with a small pump). It is a poor choice where noise matters or where a hard vacuum is needed (use a mechanical vacuum pump), or for liquids you don't want to turn into mist: an air ejector sucking liquid sprays it (Wikipedia). An airlift pump is unsuitable for lifting water high or controlling flow finely; use a conventional pump (Wikipedia 'Airlift pump').
- **environment_limits**: Air quality: industrial ejectors need clean, filtered, oil-free air (ISO 8573-1 class 7:4:4 for Festo VN) and won't run on lubricated air; dirt can clog the tiny nozzle or the silencer (Festo data sheets). Temperature: Festo VN rated 0-50 C or 0-60 C ambient and media depending on model (Festo data sheets). Water aspirators lose vacuum as the water gets warmer, because the vapour-pressure limit rises (Wikipedia). Chemicals: whatever is sucked in mixes with the driving air or water and touches the body, so choose the body material to suit (PP or PVDF for harsh chemicals; PLA degrades with chemicals and heat) (Printables 1556574, 253828). Freezing water in a tap aspirator or airlift line ⚑ [uncertain: not checked in a source]. *(⚑ parts need confirming)*
- **safety_notes**: Noise: air ejectors are loud (about 71-72 dB(A) for a small one with a silencer; Festo); HSE advises silencers, or piping the exhaust away, and shielding people from exhaust blasts (HSE HSG39 para 116). Compressed air can blow particles into eyes, penetrate skin at high pressure and enter body openings with fatal results, and a burst hose can whip; never point the exhaust or supply at anyone (HSE HSG39 paras 2, 95-96). Back-suction: if the tap pressure drops, water can be sucked into your experiment or the liquid into the water supply, so use a trap flask and vent the system before turning off the water (LibreTexts; Printables 1556574). Fumes and chemicals sucked through end up in the exhaust air or drain water, so vent outdoors and dispose of the water properly (Hackaday 2019; Wikipedia). Air carrying flammable dust or pellets at speed can build up static (Hackaday 2019 comments) ⚑ [uncertain: forum comment only]. Never hold stored pressure in a 3D-printed part. *(⚑ parts need confirming)*
- **common_failures**: 1) No suction at all, air blowing out of both ends: the nozzle shape suits water rather than air, or the nozzle is too big or off-centre; use a design made for air with a pronounced nozzle and mixing cavity (Hackaday 2019). 2) Weak vacuum from leaks: through printed layer lines, threads or loose hoses; print dense (4-6 walls, 100% infill), seal threads, use thick-walled vacuum tubing (Printables 1556574; Hackaday 2019 comments). 3) Water spitting out of the suction port or creeping into the vacuum line: throat too narrow or mixing section too short (Printables 1556574, 253828). 4) Clogged nozzle or silencer from dirty or oily air (Festo asks for clean, unlubricated air). 5) Not enough air: the supply pressure is too low or the supply line too small, so the vacuum never builds (Festo lists the pressure each model needs for maximum vacuum) ⚑ [uncertain: supply-line sizing not checked in a source]. 6) Back-suction when the water is turned off before the system is vented (LibreTexts). 7) Airlift pump stops lifting when the pipe isn't submerged deeply enough for the lift height (Wikipedia 'Airlift pump'). *(⚑ parts need confirming)*
- **related**: 
  - Vacuum (suction) gripper: the suction cup and valves that a venturi ejector usually drives; see that entry for cup sizing and release
  - Bernoulli gripper: also uses a fast air jet, but blows it out across the part to hold it without contact, instead of sucking air out of a sealed cup
  - Diaphragm pump and squeeze bulb (micro vacuum pump): an electric pump with a flexing rubber disc; makes vacuum without a compressed-air supply, at lower noise and air cost but with moving parts
  - Suction cup: the passive version, pressed on by hand with no pump
  - Granular jamming gripper and Vacuum-driven artificial muscle: other devices that are often powered by a venturi's suction
  - Vacuum hold-down table: holds flat work using a vacuum source, which can be a venturi
  - Centrifugal pump and Peristaltic pump: pumps with moving parts for liquids; the airlift pump is the no-moving-parts alternative for low lifts
  - Hydraulic ram pump: another pump with no motor, using water hammer instead of a jet to lift water

### Pictures, videos and models

- **links**: 
  - [Ejector or Injector.svg (Johannes Rössel; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ejector_or_Injector.svg): Cross-section diagram of an ejector: driving nozzle, side suction inlet, mixing section and diffuser (used on Wikipedia's 'Vacuum ejector' page) *(licence: CC BY 3.0)*
  - [Aspirator.jpg (Spatula Tzar; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Aspirator.jpg): Photo of a laboratory water aspirator on a tap *(licence: Public domain)*
  - [Airliftpump1.PNG (Masao Kondo; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Airliftpump1.PNG): Labelled diagram of an airlift pump: air line, injection port, riser tube and air-water mixture *(licence: Public domain)*
  - [Airlift Pump vs Geyser Pump (Gaomingwu; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Airlift_Pump_vs_Geyser_Pump.JPG): Side-by-side comparison of an airlift pump's small bubbles and a geyser pump's large air slugs *(licence: Public domain)*
  - [How VACUUM GENERATOR works? |Vacuum Ejector| (Animation | Sub) (Ms. Pneumatic, YouTube)](https://www.youtube.com/watch?v=l-wZYJXpVFg): Animation of the inside of a pneumatic vacuum generator (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
- **make_it_yourself**: 
  - [VENTURI VACUUM PUMP | Venturi nozzle (MarcelloV, Printables)](https://www.printables.com/model/1051026-venturi-vacuum-pump-venturi-nozzle (URL from Printables API, page not opened)): Compressed-air venturi printed in place upright without supports, with a 1/8 in push-in fitting melted in and an M5 suction port *(licence: CC BY-SA)*
  - [Venturi nozzle / Vacuum generator / Atomizer (Nikoś, Printables)](https://www.printables.com/model/128131-venturi-nozzle-vacuum-generator-atomizer (URL from Printables API, page not opened)): Small PETG venturi for an M5 pneumatic connector; maker says it works at 2-6 bar and gives up to 300 mbar of underpressure; print at 0.1 mm without supports *(licence: CC BY-NC)*
  - [Aspirator (water powered vaccum pump) (Cederb, Printables)](https://www.printables.com/model/253828-aspirator-water-powered-vaccum-pump (URL from Printables API, page not opened)): Support-free tap-water aspirator for FDM or resin, for 8 mm-3/8 in vacuum hose; version 3 lengthens the mixing section to stop water entering the vacuum side *(licence: CC BY-SA)*
  - [Vacuum Aspirator Pump (Jose, Printables)](https://www.printables.com/model/1556574-vacuum-aspirator-pump (URL from Printables API, page not opened)): Parametric Fusion 360 water aspirator (3 mm nozzle, 3/8 in tap thread) with a guide to how nozzle, throat and diffuser sizes change its performance, plus print and safety advice *(licence: CC0 / public domain)*
  - [Large airlift pump (Ruudimental, Printables)](https://www.printables.com/model/1793376-large-airlift-pump (URL from Printables API, page not opened)): Printed airlift ('mammoth') pump head for 40 mm PVC pipe and a 1/4 in BSP air coupling, with internal venturi channels; the maker lifted water and mud from 4 m deep but notes it uses a lot of air *(licence: CC BY-NC-SA)*
- **diagram_idea**: A cut-away T-piece with a thin blue jet of compressed air shooting from a narrow nozzle across a small chamber into a narrow throat, little arrows showing room air being dragged in through the side port and out with the jet, plus a second panel showing bubbles rising in a submerged pipe and lifting water out of the top (airlift pump).
- **sources**: 
  - https://en.wikipedia.org/wiki/Vacuum_ejector
  - https://en.wikipedia.org/wiki/Airlift_pump
  - https://en.wikipedia.org/wiki/Venturi_effect
  - https://en.wikipedia.org/wiki/Injector
  - https://hackaday.com/2019/02/08/a-crash-course-in-3d-printed-venturi-pumps/
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-generators/vacuum-ejectors
  - https://www.schmalz.com/en/vacuum-knowledge/basic-knowledge/operating-principles-of-vacuum-generation/
  - https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_GB/532640.pdf
  - https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_GB/193554.pdf
  - https://www.motionworld.com/assets/Festo-VN-10-L-T3-PQ2-VQ2-RO1-B-Datasheet.pdf
  - https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_Lab_Techniques_(Nichols)/01%3A_General_Techniques/1.05%3A_Filtering_Methods/1.5D%3A_Suction_Filtration
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://api.printables.com/graphql/ (models 1051026, 128131, 253828, 1556574, 1793376)
  - https://commons.wikimedia.org/wiki/File:Ejector_or_Injector.svg
  - https://commons.wikimedia.org/wiki/File:Aspirator.jpg
  - https://commons.wikimedia.org/wiki/File:Airliftpump1.PNG
  - https://commons.wikimedia.org/wiki/File:Airlift_Pump_vs_Geyser_Pump.JPG
  - https://www.youtube.com/watch?v=l-wZYJXpVFg

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air, liquid, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: lets go
- **motion_in**: pressure
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, soldering iron, drill and tap, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: tool-free quick release
- **power**: powered
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
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, making_tips_3d_printing, safety_notes

## 305 Bellows and inflatable actuators (air bag, air spring)

*hydraulics, pneumatics & vacuum.* A folded or balloon-like chamber that gets longer or lifts when pumped full of air (or shorter when the air is sucked out), giving a straight push with no sliding seals; it can be printed in TPU

*Also covers:* Also covers air springs, lifting bags and the everting vine robot. Safety: bursts if over-inflated.

### What it is

- **plain_name**: A sealed, squashable chamber, folded like an accordion or shaped like a cushion or balloon, that grows taller and pushes when you pump air into it, or shrinks when you suck the air out. It gives a straight push with no piston and no sliding seal; flat versions lift cars, and printed ones can be made from flexible TPU filament
- **term**: Bellows actuator and inflatable actuator (air spring, air bag, lifting bag)
- **aliases**: 
  - air spring, air bellows, air bag (the correct term for vehicle suspension 'air bags' is air spring; Wikipedia)
  - convoluted air spring (single, double or triple convolution); rolling-lobe or reversible-sleeve air spring
  - air actuator, bellows actuator, bellows cylinder, pneumatic bellows
  - Airstroke actuator and Airmount isolator (Firestone brands)
  - air suspension bellows; air ride (vehicles)
  - lifting bag, lift bag (diving), air lifting bag, rescue air bag, high-pressure lifting bag or lifting cushion
  - soft bellows actuator, inflatable actuator, soft pneumatic actuator (extending type)
  - vacuum bellows actuator (works by sucking the air out)
  - pouch motor (heat-sealed flat film pouches)
  - Kresling bellows, origami bellows (twisting fold pattern)
  - everting vine robot, soft growing robot, vinebot (covered here: an inside-out tube that grows from its tip)
  - Luftfeder, Rollbalg (German), měch (Czech)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: compliant mechanisms & flexures, powered & active connectors, springs & energy storage
- **one_liner**: A flexible, airtight chamber (folded bellows, cushion or bag) between two end plates that pushes the plates apart when filled with air under pressure, or pulls them together under vacuum, giving a straight, single-acting push with no piston, rod or sliding seals (Firestone Airstroke design guide; Wikipedia 'Air suspension').
- **complexity**: A few parts: a flexible bellows or bladder (rubber with fabric plies, printed TPU, or heat-sealed plastic film); two end closures or bead plates crimped or clamped to it; an air inlet fitting; often an internal rubber bumper; plus outside stops, guides and a return spring or weight; and an air supply with a valve, regulator and relief valve (Firestone guide pp. 5-7, 15-16). Printed versions are one TPU piece with a fitting (Scientific Reports 2024). A vine robot is a long tube of thin plastic film, a sealed base chamber and an air supply, often with a spool to store and reel in the tube (Frontiers 2020).
- **how_it_works**: Air pressure inside the sealed chamber pushes on its end plates; the force is the pressure times the chamber's 'effective area', and because a bellows bulges and unfolds, that area shrinks as it extends, so the push is strongest when it is squashed low and fades as it grows (Firestone guide p. 12). It only pushes: something else (gravity, a spring, a second bellows) must squash it back, and it must be held in line by guides because it 'follows the path of least resistance' (Firestone guide p. 15). Suck the air out instead and the folds collapse, so a printed bellows contracts and can grip (Scientific Reports 2024). An everting vine robot is a tube folded inside itself like an inside-out sock; air pressure turns the tip right-side-out, so new material comes out at the tip and the robot grows while the rest of its body stays still (Robohub/Stanford 2017).

### Finder attributes

- **job**: 
  - change the kind of motion: turns air pressure into a straight push or lift (or, under vacuum, a pull) with no piston, rod or sliding seal (Firestone guide p. 3; Scientific Reports 2024)
  - hold or release using power: holds a load up, or grips, while the air pressure (or vacuum) is kept on, and lets go when it is vented (Firestone guide; Scientific Reports 2024)
  - store energy: as an air spring it is a cushion of trapped air that carries a vehicle or isolates a machine from vibration, with a ride height set by the pressure (Wikipedia 'Air suspension'; Firestone Airmount isolators)
- **motion**: flex: the chamber grows and shrinks along its axis. Firestone rubber actuators stroke up to 355 mm and can also swing through an arc of up to 30 degrees without a clevis; a printed Kresling (origami) bellows contracted 75% of its length under vacuum, twisting as it went (Firestone guide p. 3; Frontiers 2024)
- **degrees_of_freedom**: 1 intended (the end plates move apart and together), but the chamber is soft sideways: it tolerates tilting up to 30 degrees and about 25 mm sideways offset per convolution, and will buckle sideways unless guided (Firestone guide pp. 15-16). A vine robot grows in length and can be steered left or right by inflating its sides unevenly (Robohub/Stanford 2017)
- **special_behaviour**: 
  - motion conversion: air pressure becomes a straight push (or, under vacuum, a pull) (Firestone; Scientific Reports 2024)
  - self-aligning or self-centring (within limits): it strokes through an arc and accepts side loads and misalignment that would bend the rod or wear the seals of an ordinary cylinder (Firestone guide p. 3)
  - tensioning (as an air spring): the pressure sets the load it carries and its springiness, and air springs keep a vehicle level as the load changes (Wikipedia 'Air suspension')
  - not fail-safe on its own: if the air is lost it collapses and the load drops, so Firestone recommends mechanical lock-outs and rescue crews keep cribbing under the load (Firestone guide p. 16; NC OSFM)
- **holding_principle**: 
  - suction or air pressure: the force comes from the air pressure (or vacuum) acting on the chamber's area; the rubber itself carries no load (Firestone guide p. 5)
  - powered hold: it holds only while pressurised; a closed valve can trap the air, but air slowly seeps through rubber (Firestone guide pp. 7, 25)
- **input_output**: Air pressure (or vacuum) -> straight push (or pull). Force = pressure x effective area, and the area falls as the bellows extends: a Firestone #22 at 5 bar pushes 28.75 kN at 110 mm height but only 18.75 kN at 230 mm (Firestone guide p. 12). Range: industrial air actuators 58-950 mm across, up to 450 kN and 355 mm stroke at up to 7 bar (12 bar for high-strength types) (Firestone guide pp. 3, 14); rescue lifting cushions at about 135 psi (about 9 bar) lift up to about 75 tons through about 20 in (NC OSFM); a printed TPU bellows was modelled at -10 to -40 kPa of vacuum and endurance-tested at -15 kPa (Scientific Reports 2024); a linear heat-sealed pouch motor reached 28% stroke and 100 N (Niiyama et al. 2015, MIT DSpace). Rough efficiency: ⚑ [uncertain: no figure found]. Arrangement: in line (pushes along its own axis). Back-drivable: yes, pushing on it squashes the air like a spring; it can't pull unless run under vacuum (Firestone; Scientific Reports 2024). *(⚑ parts need confirming)*
- **power**: powered: needs compressed air (or a vacuum source for vacuum bellows; Firestone air springs can also be filled with water or water-glycol for stiff, accurate positioning) (Firestone guide p. 14; Scientific Reports 2024). When power is lost: if the air vents, it collapses and anything it holds up drops; if a valve traps the air it keeps its last state for a while, but air slowly seeps through rubber (a Firestone #116 loses about 2 bar a year, from 7 to 5 bar) (Firestone guide pp. 16, 25)
- **removability**: removable: industrial units bolt on by their end plates and connect with an air fitting; printed and film actuators push onto a fitting or barb (Firestone guide pp. 6-7; Scientific Reports 2024)
- **reuse_cycles**: many times: it can be fitted and removed freely. Working life varies: rubber air springs come from truck and bus suspensions built for millions of kilometres (Firestone guide p. 3); a printed TPU bellows lasted 129,325 cycles under vacuum but had 'bad durability' under positive pressure (Scientific Reports 2024); thin LDPE vine robots fatigue after a moderate number of eversions (Frontiers 2020)
- **tools_needed**: spanners or a screwdriver for end-plate bolts and fittings; thread-seal tape; an air source with a pressure regulator, gauge and relief valve (tyre-style tank valves and an air chuck can fill sealed air springs; Firestone guide p. 7); for film actuators a heat sealer or iron and tape (Frontiers 2020); for printed ones only the printer and a push-in or barbed fitting
- **seal**: airtight or pressure: the rubber or plastic wall is the seal, and the bead of a rubber bellows seals itself against its end plate, so no O-rings or sealants are needed (Firestone guide p. 10); printed walls must be thick and dense enough to have no pinholes (Scientific Reports 2024; Frontiers 2024)
- **load**: light to heavy, in one direction only (push, or pull under vacuum): printed TPU bellows give gripping forces of a few to tens of newtons ⚑ [uncertain: from paper figures summarised, exact range not checked]; rubber air actuators up to 450 kN (Firestone); rescue lifting cushions up to about 75 tons (NC OSFM). Weak against side loads and tipping: guide it; its lifting capacity falls as it extends (Firestone guide pp. 12, 15; NC OSFM) *(⚑ parts need confirming)*
- **adjustable**: yes: the pressure sets the force, height and springiness; stops fix the ends of the stroke; stacking two actuators adds stroke but not force and the middle plate must be guided (Firestone guide pp. 15-16; Wikipedia 'Air suspension')
- **play_and_precision**: noticeable: air is squashy, so position under changing load is springy unless the chamber is filled with liquid (Firestone guide p. 14); it tolerates misalignment well (25 mm offset per convolution and up to 30 degrees tilt for Firestone convoluted actuators; guide p. 16). Printed TPU actuators don't always return fully to their starting shape (a printed TPU finger kept a 4.76 degree bend at zero pressure; Frontiers 2021)
- **access_needed**: both sides: it sits between two surfaces and pushes them apart, so both end plates must be fixed, and one needs the air line
- **materials**: Rubber-fabric bellows: inner rubber liner, two (or four) plies of fabric-reinforced rubber and an outer rubber cover, in natural rubber, neoprene or epichlorohydrin; metal end closures (Firestone guide pp. 5, 14). Rescue cushions: neoprene reinforced with steel wire or Kevlar (NC OSFM). Vehicle air springs: textile-reinforced rubber (Wikipedia). Printed: flexible TPU such as NinjaFlex (brand) or 95A TPU, at least 1 mm thick (Scientific Reports 2024; Frontiers 2024; Printables 246679). Film and fabric: LDPE, TPU film, TPU-coated or silicone-infused ripstop nylon, latex or silicone for vine robots and pouches (Frontiers 2020; Niiyama et al. 2015). Avoid petroleum oils with natural rubber (Firestone guide p. 14)
- **maker_difficulty**: moderate: a film pouch or vine robot can be heat-sealed or taped in minutes (Frontiers 2020; Niiyama et al. 2015), but printing an airtight TPU bellows needs slow, tuned printing with dry filament, and a dual or independent-extruder printer for the TPU-plus-PLA method (Scientific Reports 2024; Hackaday 2025); heavy-duty units are bought ready-made

### Making it

- **processes**: 
  - 3D print (FDM): one-piece TPU bellows actuators and Kresling bellows, either directly, in vase mode, or with peel-away PLA layers between the folds (Scientific Reports 2024; Frontiers 2024; Hackaday 2025; Printables 246679)
  - off-the-shelf part: rubber air springs and air actuators, vehicle air suspension bags, rescue lifting bags, underwater lift bags (Firestone; Wikipedia; NC OSFM)
  - hand-made from plastic film or coated fabric: heat-sealed or taped tubes and pouches for vine robots and pouch motors (Frontiers 2020; Niiyama et al. 2015)
- **print_in_place**: yes: a TPU bellows prints as one airtight working piece that only needs an air fitting pushed or screwed into its inlet (Scientific Reports 2024; Frontiers 2024); the TPU-plus-PLA method also needs the PLA layers peeled out afterwards (Hackaday 2025)
- **making_tips_3d_printing**: 1) Wall thickness: keep each fold wall thicker than 1 mm to stop air leaking (Scientific Reports 2024); another group found 1 mm the thinnest wall that printed without pinholes more than 75% of the time (Frontiers 2024). 2) Fold angle: keep the fold (corrugation) angle above 35 degrees so the overhangs print (Scientific Reports 2024); vase-mode bellows need fold angles under 45 degrees from vertical (Printables 246679). 3) Settings from the Scientific Reports team (NinjaFlex on a Prusa MK3): print slowly, especially the first layer; use a steel sheet rather than PEI and heat the bed back up to remove the part; drop the nozzle to 220 C for overhangs; turn on ironing to close gaps in the top; adjust the nozzle temperature to cure micro-gaps; keep the filament in a drying box. 4) Vase mode: a single 0.8 mm wall in 95A TPU at 0.1 mm layers with a brim makes a collapsible bellows on an ordinary printer (Printables 246679). 5) TPU plus PLA: printing flat folds with PLA layers between them, then peeling the PLA out, gives a bellows that prints flat, but needs two independent extruders; feeding TPU through a Bambu AMS made the prints brittle (Hackaday 2025; Functional Print Friday video). 6) Prefer vacuum: printed TPU bellows lasted over 120,000 cycles under vacuum but wore out quickly under positive pressure (Scientific Reports 2024), and Kresling bellows printed in TPU hold vacuum well (Frontiers 2024). 7) If you do pressurise, keep it low and regulated (one TPU printed gripper team capped its tests at 150 kPa for safety; Frontiers 2021), add a relief valve, and never use a printed part to store pressure. 8) TPU brands behave differently; test a small piece first (Hackaday 2025).
- **off_the_shelf_parts**: Air springs: single, double and triple convoluted air springs, rolling-lobe (reversible sleeve) air springs, air actuators and air isolators (e.g. Firestone Airstroke and Airmount, brands), bead plates and bead rings, internal rubber bumpers, tank valves (Firestone guide). Vehicle air suspension air springs (Wikipedia). Rescue lifting bags in high-, medium- and low-pressure types, with cribbing (NC OSFM). Underwater lift bags, open (parachute) or closed with an over-pressure valve, and dump valves (Wikipedia 'Lifting bag'). For DIY: flexible TPU filament (NinjaFlex, brand; 95A TPU), LDPE lay-flat tubing or TPU-coated ripstop nylon (vine robots), push-to-connect fittings, small air or vacuum pumps, pressure regulator, pressure relief valve, solenoid valve (Frontiers 2020; Scientific Reports 2024)
- **rules_of_thumb**: 
  - Pressure: about 7 bar maximum for two-ply rubber air springs and 12 bar for high-strength ones, with at least a three-times safety factor between working pressure and burst pressure; burst pressure falls as a convoluted bellows extends (Firestone guide p. 14)
  - Always fit stops both ways: a down-stop at or just above the minimum height so the bellows doesn't bottom out at its pinch point, and an up-stop (chain, cable or metal stop) so it can't over-extend and blow its bead out of the crimp (Firestone guide p. 15)
  - It is single-acting: plan a return force (gravity, a spring or a second bellows), and guide it, because it follows the path of least resistance (Firestone guide p. 15)
  - Misalignment: about 25 mm sideways offset per convolution and up to 30 degrees of tilt; stacked actuators add stroke but not force and need the middle plate guided (Firestone guide pp. 15-16)
  - Force falls as height rises: pressure times effective area, and the area shrinks as it extends (Firestone guide p. 12); a rescue air bag's lifting capacity likewise drops as it lifts higher (NC OSFM)
  - Printed TPU bellows: walls over 1 mm, fold angles over 35 degrees (Scientific Reports 2024); 1 mm is about the thinnest reliable leak-free wall (Frontiers 2024)
  - Rescue air bags: crib the load continuously, never work under a load held only by air bags, never stack more than two bags, keep them off sharp objects and away from heat over 220 F (NC OSFM)
  - Underwater lift bags: each litre of air lifts about 1 kg; choose a bag only slightly bigger than needed to avoid a runaway ascent (Wikipedia 'Lifting bag')
  - Air leaks slowly through rubber: check the pressure of sealed air springs periodically (about 2 bar lost per year in Firestone's example) (Firestone guide p. 25)

### When to use it

- **everyday_examples**: 
  - Air suspension on buses, lorries, trailers and trains: rubber air springs between axle and body, pumped up by a compressor (Wikipedia 'Air suspension')
  - Rescue air bags that firefighters slide under a crashed car and inflate to lift it (NC OSFM; Wikipedia 'Lifting bag')
  - Divers' lift bags that float heavy objects up from the seabed (Wikipedia 'Lifting bag')
  - The folded bellows of a fireplace bellows or an old folding camera: the same accordion shape, used to blow air or keep out light rather than to push (Wikipedia 'Bellows')
- **when_to_use**: Use a bellows or air bag when you want a straight push or lift from compressed air without a piston, rod or sliding seals: it has no breakaway friction, so it responds smoothly, keeps working in dirt and grit that would ruin cylinder seals, needs no lubrication, can push through an arc and tolerates side loads and misalignment, and starts from a very low collapsed height (Firestone guide p. 3). Flat cushions lift very heavy loads through short distances from a thin gap (NC OSFM). As an air spring it gives soft, adjustable suspension or vibration isolation (Wikipedia 'Air suspension'; Firestone). For makers, a printed TPU bellows makes a cheap, safe, soft gripper or pusher, especially when driven by vacuum (Scientific Reports 2024); a vine robot can grow through rubble, under a door gap 10% of its diameter, or route a cable through a ceiling space (Robohub/Stanford 2017).
- **when_not_to_use**: Avoid it when you need a long stroke compared with its size, a pulling force with positive pressure (use a pneumatic artificial muscle, or a cylinder), steady force over the whole stroke, or exact positioning: its force falls as it extends and air is springy (Firestone guide pp. 12, 14); use an air cylinder or a lead screw with a motor instead. Don't rely on it to hold a load up for long or where failure would hurt someone without a mechanical lock or cribbing (Firestone guide p. 16; NC OSFM). Avoid printed bellows for sustained positive pressure (Scientific Reports 2024), and anywhere sharp edges, hot metal or petroleum fluids could reach the rubber (Firestone guide p. 14; NC OSFM).
- **environment_limits**: Temperature: Firestone's natural rubber air springs -53 to 57 C, neoprene -37 to 74 C, epichlorohydrin -17 to 107 C (Firestone guide p. 14); rescue bags must be kept below 220 F (about 104 C) (NC OSFM). Chemicals: petroleum-based oils (most hydraulic oils) are not recommended inside rubber air springs; shield them from hot metal, sand, acids and petroleum fluids; store them dark and dry (Firestone guide p. 14). Air loss over time: air permeates through rubber, about 2 bar a year in one example (Firestone guide p. 25). Printed TPU: humidity causes micro-gaps and leaks, so keep the filament dry (Scientific Reports 2024); TPU parts may slowly take a set and not fully return (Frontiers 2021). Film: LDPE vine robots fatigue with repeated eversion, and TPU-coated fabrics can delaminate at stress points and leak (Frontiers 2020).
- **safety_notes**: Over-inflation bursts it: Firestone warns never to inflate an air spring when it is unrestricted (not held between its mountings) or beyond the recommended pressure, because it 'may burst causing property damage or severe personal injury' (Firestone guide p. 14). HSE warns that vessels containing compressed air 'even at comparatively low pressure, can explode violently once their integrity is lost' (HSE HSG39 para 2), so feed any bellows through a regulator and a pressure relief valve, keep faces and hands clear while testing, and never use a 3D-printed part to store pressure. The load drops if the air is lost: never work under a load held up only by air bags; crib it as it rises, and use mechanical lock-outs on lifts (NC OSFM; Firestone guide p. 16). Never stack more than two rescue bags, and keep bags off sharp objects (NC OSFM). Underwater lift bags can run away to the surface uncontrolled, and divers can be entangled (Wikipedia 'Lifting bag'). Keep fingers out from between the plates, which close hard as it collapses ⚑ [uncertain: general advice, not from a cited source]. Vacuum-driven versions avoid the bursting hazard. *(⚑ parts need confirming)*
- **common_failures**: 1) Bursting from over-pressure or over-extension, or the bead blowing out of its crimp when there is no up-stop (Firestone guide pp. 14-15). 2) Wear from repeatedly bottoming out at the pinch point when there is no down-stop (Firestone guide p. 15). 3) Puncture or abrasion from rubbing on nearby parts or sharp objects: leave clearance round the maximum diameter (Firestone guide p. 16; NC OSFM). 4) Buckling or bowing sideways because it isn't guided (Firestone guide p. 15). 5) Pinhole leaks in printed walls that are too thin or printed with damp filament (Scientific Reports 2024; Frontiers 2024). 6) Printed bellows cracking quickly under positive pressure (Scientific Reports 2024). 7) Slow pressure loss through the rubber (Firestone guide p. 25). 8) Load shifting or toppling during a lift because it was inflated too fast or not cribbed (NC OSFM). 9) Film vine robots fatiguing, or coated fabric delaminating and leaking at stress points (Frontiers 2020).
- **related**: 
  - Bellows boot (gaiter, way cover): the same folded shape used passively as a dust cover, not pumped up
  - Air or hydraulic cylinder: a piston in a tube; longer stroke, steady force and double-acting, but with sliding seals and breakaway friction (Firestone guide p. 3)
  - Pneumatic artificial muscle (McKibben muscle): a braided tube that gets shorter and pulls when pumped up, instead of pushing
  - Soft pneumatic bending actuator: a soft finger that curls when pumped up, using a stiff layer on one side
  - Vacuum-driven artificial muscle: a skeleton in a bag that contracts when the air is sucked out; like a vacuum bellows, it avoids bursting hazards
  - Gas spring: a sealed strut of pressurised gas with a piston and rod; self-contained, so no air supply
  - Syringe hydraulics and hydraulic jacks: lift with liquid pressure and a piston rather than an inflated bag
  - Origami mechanisms: folded structures; the Kresling bellows is an origami pattern used as an actuator
  - Diaphragm pump and squeeze bulb: a bellows or bulb used the other way round, to pump air
  - Heat-sealed seam: how the TPU film, LDPE tube or coated fabric of pouch motors and vine robots is joined airtight with a heat sealer or iron (Frontiers 2020; Niiyama et al. 2015)

### Pictures, videos and models

- **links**: 
  - [Axiální pneumatický měch (Jjvcela; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Axi%C3%A1ln%C3%AD_pneumatick%C3%BD_m%C4%9Bch.jpg): Photo of an axial (convoluted) pneumatic bellows, the industrial air spring or air actuator *(licence: CC BY-SA 3.0)*
  - [Lufe schnitt (Jan Müller; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Lufe_schnitt.png): Cut-away drawing of a rolling-lobe air spring showing the cover plate, rubber bellows, rolling piston and clamping rings *(licence: CC BY-SA 3.0)*
  - [2023-06-04 DLRG Hebesack 01 (Bärbel Miemietz; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:2023-06-04_DLRG_Hebesack_01.jpg): Photo of a rescue organisation's lifting bag on display *(licence: CC BY-SA 4.0)*
  - [Stanford researchers develop vine-like, growing robot (Stanford, YouTube)](https://www.youtube.com/watch?v=oRjFFgAZQnk): Video of the everting vine robot growing from its tip through obstacles (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [3D Printed TPU Bellows with PLA Interface Layers - Prints Flat! (Functional Print Friday, YouTube)](https://www.youtube.com/watch?v=UFrWfnwD3aU): Printing TPU bellows flat with peel-away PLA layers between the folds (title and channel confirmed via YouTube oEmbed; video not watched; summarised by Hackaday 2025) *(licence: link only)*
- **make_it_yourself**: 
  - [Camera Bellows - Collapsible & Customizable - TPU Vase Mode - F3d Files included (Kiwi Tinkerer, Printables)](https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m (URL from Printables API, page not opened)): Parametric Fusion 360 bellows generator that prints a collapsible bellows in vase mode (0.8 mm wall, 95A TPU, 0.1 mm layers); made as a light-tight camera bellows, so it needs end caps and an air fitting to try as an actuator *(licence: CC BY)*
  - [TPU Bellows Test for Multi Tool Printers (Darak, Printables)](https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers (URL from Printables API, page not opened)): Test print of a TPU bellows with PLA interface layers for multi-tool printers, following the Functional Print Friday method; slicer settings in the photos *(licence: CC BY-NC)*
  - [An empirical model of soft bellows actuator (Scientific Reports, 2024)](https://www.nature.com/articles/s41598-024-79084-w): Open-access paper giving the design parameters, PrusaSlicer settings and an empirical force model for a one-piece NinjaFlex bellows actuator, and two- and three-bellows vacuum grippers built from it *(licence: CC BY-NC-ND 4.0 (article))*
  - [Design, Modeling, Control, and Application of Everting Vine Robots (Frontiers in Robotics and AI, 2020)](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.548266/full): Review explaining how to make a vine robot (seal one end of a plastic tube and push that end back inside), which films and fabrics to use, and how to steer and retract it; points to build instructions on the vinerobots.org website (not opened this session) *(licence: CC BY 4.0 (article))*
- **diagram_idea**: Three side-by-side cut-aways: an accordion bellows between two plates, collapsed and then inflated, with arrows showing air pressure pushing the plates apart and a note that the push shrinks as it extends; a flat lifting cushion raising a car wheel off cribbing blocks; and a vine robot as an inside-out sock whose tip turns outwards and grows while the body stays still.
- **sources**: 
  - https://www.firestoneairide.com/content/dam/fsip/pdfs/airstroke/Actuators-and-Isolators-Metric-Design-Guide.pdf
  - https://en.wikipedia.org/wiki/Air_suspension
  - https://en.wikipedia.org/wiki/Lifting_bag
  - https://en.wikipedia.org/wiki/Bellows
  - https://www.ncdoi.com/osfm/rpd/pt/documents/quickdrills/rescue/basic/basic%20rescue%20equipment%20-%20air%20bags.pdf
  - https://www.nature.com/articles/s41598-024-79084-w
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1396082/full
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.799230/full
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.548266/full
  - https://robohub.org/stanford-researchers-develop-a-new-type-of-soft-growing-robot/
  - https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
  - https://dspace.mit.edu/entities/publication/99faf708-0640-43aa-aa39-57472996abfc
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://api.printables.com/graphql/ (models 246679, 1381129)
  - https://commons.wikimedia.org/wiki/File:Axi%C3%A1ln%C3%AD_pneumatick%C3%BD_m%C4%9Bch.jpg
  - https://commons.wikimedia.org/wiki/File:Lufe_schnitt.png
  - https://commons.wikimedia.org/wiki/File:2023-06-04_DLRG_Hebesack_01.jpg
  - https://www.youtube.com/watch?v=oRjFFgAZQnk
  - https://www.youtube.com/watch?v=UFrWfnwD3aU

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air, liquid, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: lets go ⚑ *needs confirming (best guess): versions differ: lets go, keeps its last state*
- **motion_in**: pressure
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something, grip or lift
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** input_output, load, safety_notes

## 306 Air-logic valve (pneumatic logic, soft bistable valve)

*hydraulics, pneumatics & vacuum.* Valves switched by air pressure instead of electricity, joined into simple logic, memories and oscillators so a soft robot can walk or grip with no electronics

*Also covers:* Also covers the shuttle valve.

### What it is

- **plain_name**: Little air-switched valves that act like electronic switches: air pressure in one tube opens or pinches shut the air path through another tube, so several of them joined with tubing can make 'only if both', 'either one' and 'not' decisions, remember an on/off state, or tick on and off by themselves, letting a soft robot walk or grip with no electronics at all
- **term**: Air-logic valve (pneumatic logic element; soft bistable valve; shuttle valve as the OR element)
- **aliases**: 
  - air logic control, pneumatic logic, pneumatic logic gate (AND, OR, NOT) (Wikipedia 'Pneumatics'; Power & Motion)
  - fluidic logic, fluidics (strictly, logic with no moving parts, using jets of air or water; Wikipedia 'Fluidics')
  - soft valve, soft bistable valve, soft kink valve, snap-through membrane valve (Rothemund et al. 2018; Decker et al. 2022)
  - pneumatic Schmitt trigger (a valve with two different switching pressures; Preston et al. 2019)
  - pneumatic transistor, fluidic transistor; microfluidic membrane valve ('Quake valve') (Decker et al. 2022; Hackaday 2025)
  - pneumatic ring oscillator, air oscillator, pneumatic central pattern generator (Drotman et al. 2021; Hackaday 2025)
  - pilot valve, air-piloted valve, pilot-operated valve (Wikipedia 'Pilot valve')
  - shuttle valve = OR element (Wikipedia 'Shuttle valve')
  - two-pressure valve = AND element; YES (active AND) element (ATHS Basic Pneumatics module 7; Power & Motion)
  - NOT element (normally open 3-way valve), FLIP FLOP or MEMORY element, ONE-SHOT (impulse) timer, TIME-ON and TIME-OFF delay (Power & Motion)
  - 1-bit pneumatic memory, set-reset latch, toggle (Conrad et al. 2024; Preston et al. 2019)
  - electronics-free control, electronics-free soft robot (UC San Diego; University of Freiburg)
  - FluidSIM (brand): simulation software used in school pneumatics courses to try logic circuits (ATHS Basic Pneumatics module 7)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: compliant mechanisms & flexures
- **one_liner**: A valve whose on/off state is set by air pressure in a control tube instead of by a button or an electric coil; combined with other such valves through tubing it performs simple logic (AND, OR, NOT), memory and timing, and a loop of them oscillates to drive the legs of an electronics-free soft robot from one steady air supply.
- **complexity**: A few parts or a single piece. Industrial air-logic elements are miniature 3-way and 4-way valves (a body, a spool or diaphragm, a small piston worked by the pilot air) (Power & Motion). A shuttle valve is a tube with three openings and a free ball or 'shuttle' inside (Wikipedia 'Shuttle valve'). A soft bistable valve is a cylinder split by a dome-shaped silicone membrane into two chambers, each with a soft tube inside that the membrane kinks (Rothemund et al. 2018, via TechXplore). A 3D-printed gate is one TPU print with two pressure chambers and a 1 mm printed tube between them (Conrad et al. 2024). A low-cost version uses two drinking straws, an elastic tube, a heat-sealed TPU film piston and an elastic band (Decker et al. 2022). A working circuit adds tubing, an air supply and a pressure regulator.
- **how_it_works**: Air pressure in a control (pilot) line pushes a membrane, piston or ball, which opens or blocks the main air path, exactly as a small current switches a transistor or relay (Wikipedia 'Pilot valve'; Power & Motion). In the soft valve, pressurising the lower chamber makes a dome-shaped membrane snap through like a 'popper' toy; the membrane then kinks the tube on one side and unkinks the tube on the other, like kinking a garden hose (Rothemund et al. 2018, via TechXplore). Because it snaps up at a higher pressure than it snaps back, it has two clean states (hysteresis, the pneumatic version of a Schmitt trigger), and the same valve becomes a NOT, AND or OR gate depending only on which tubes are connected to which pressures (Preston et al. 2019; Conrad et al. 2024). Feeding the output of an inverter, or a ring of inverters, back to its own input makes it switch on and off by itself, giving the rhythmic signal that drives walking legs (Rothemund et al. 2018; Drotman et al. 2021; Wikipedia 'Ring oscillator'). A shuttle valve is the simplest OR element: pressure at either end pushes the ball against the opposite end, so air from either input reaches the middle outlet but cannot flow back to the other input (Wikipedia 'Shuttle valve').

### Finder attributes

- **job**: 
  - hold or release using power: air pressure in a control tube switches the air supply to soft actuators, grippers or cylinders on and off (Rothemund et al. 2018; Power & Motion)
  - seal it, or pass cables or fluid through: it routes air from one or more inputs to an outlet and blocks or vents the others; a shuttle valve passes air from either of two sources without back flow between them (Wikipedia 'Shuttle valve')
  - change the kind of motion: an oscillator circuit turns one steady air supply into a repeating on-off rhythm that drives legs in turn (Drotman et al. 2021; ScienceDaily 2025)
- **motion**: multiple: inside, a membrane snaps between two positions (flex), a soft tube kinks or is pinched (flex), or a ball, spool or piston slides a few millimetres (slide); the outside of the valve does not move
- **degrees_of_freedom**: 1 inside the valve: the switching part has two positions (open/closed); as a connection between parts it has 0, since it only switches air
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): the dome membrane snaps through at one pressure and back at a lower one, so the output jumps cleanly between two states (Preston et al. 2019)
  - one-way (moves freely one way, locks the other): a shuttle valve stops air from one input flowing back into the other input (Wikipedia 'Shuttle valve')
  - motion conversion: a ring of inverting valves turns a constant pressure into oscillating pressure pulses (Drotman et al. 2021; Hackaday 2025)
  - fail-safe or known state on power loss (depends on the element): soft bistable valves and NOT elements return to their resting state when the air is removed, a MEMORY element resets when supply pressure is turned off, but a FLIP FLOP stays in its last position even with no air supply (TechXplore 2018; Power & Motion)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it switches air flow rather than holding parts together
  - suction or air pressure: control pressure holds the membrane, piston or ball in its switched position (Power & Motion; Preston et al. 2019)
  - spring force: the springy dome membrane, or an elastic band in the drinking-straw valve, returns it to rest (Rothemund et al. 2018; Decker et al. 2022)
- **input_output**: Air-pressure signal in -> air-pressure signal out (on/off, digital). Gain: a small control pressure can switch a larger flow or a higher pressure (Decker et al. 2022; Zhai et al. 2023), and the soft silicone gates pass about 2 to 4 L/min (Preston et al. 2019). Speed: printed TPU gates respond in about 100 ms (University of Freiburg); ring oscillators built from complementary ('CMOS-type') soft valves had reached about 0.3 Hz, while designs with a constant bleed (pull-down resistor) reach 10 to 15 Hz (Decker et al. 2022). A steady supply -> rhythmic pulses when wired as an oscillator. Not back-drivable in the logic sense: a shuttle valve's inputs are isolated from each other (Power & Motion), and the output does not switch the input.
- **power**: powered: needs a supply of compressed air or gas (or vacuum for some membrane valves; Hackaday 2025), but no electricity. Soft logic in the research robots ran from one constant pressure source, a tether or a compressed-gas cartridge (UC San Diego 2021 and 2025). On loss of air: soft bistable valves and NOT elements go back to their resting state, a MEMORY element resets, a FLIP FLOP keeps its last state (TechXplore 2018; Power & Motion). Soft CMOS-type gates use no air while sitting still in either state (Preston et al. 2019).
- **removability**: removable: discrete valves are joined with push-on tubing and push-in fittings and a circuit can be rearranged after it is built (Preston et al. 2019; Printables 'livMatS Turtle Walker' uses a 4 mm tube socket); fully printed one-piece circuits, such as the UC San Diego gripper and walkers, are permanent (Zhai et al. 2023; ScienceDaily 2025)
- **reuse_cycles**: many times: drinking-straw valves were tested to 10,000 cycles each before an elastic band failed on one (Decker et al. 2022); printed walkers ran non-stop for three days on a constant air supply (ScienceDaily 2025); industrial air-logic elements need clean air for long life (Power & Motion)
- **tools_needed**: none to connect bought valves (push the tube on or into a push-in fitting). To make them: a 3D printer that can print flexible TPU (Conrad et al. 2024; Zhai et al. 2023), or silicone moulds and casting (Preston et al. 2019), or for the low-cost version drinking straws, elastic tubing, fast-drying glue and a heat sealer for TPU film (Decker et al. 2022); an M5 tap for printed rigid valves with push-in fittings (Printables 245125); a pressure regulator and gauge to set the supply
- **seal**: airtight or pressure: the membrane or tube pinch must hold air in the closed path; printed versions must be printed airtight, which needs tuned TPU settings (Zhai et al. 2023; Recreus interview); bought air-logic elements seal with elastomer seats (Power & Motion)
- **load**: light: it carries air, not mechanical load. Pressures range from about 15 kPa logic levels in silicone gates (Preston et al. 2019) and 45 to 50 kPa before silicone kink valves fail (Decker et al. 2022), up to 80 to over 750 kPa for printed TPU gates depending on the filament (University of Freiburg); industrial pneumatics normally runs at about 550 to 690 kPa (Wikipedia 'Pneumatics'). The fully soft printed walker survived a car driving over it (University of Freiburg).
- **adjustable**: partly: the switching pressure is set by design and material, e.g. a printed bistable valve tuned from 15.3 to 65.2 kPa by changing material stiffness (Wang et al. 2021), or by swapping the elastic band in the drinking-straw valve (Decker et al. 2022); oscillation speed can be changed with the supply pressure (Decker et al. 2022); industrial timers have adjustable orifices (Power & Motion). The logic function changes by re-plumbing the inputs (Preston et al. 2019)
- **play_and_precision**: not applicable (it does not locate parts); its switching points differ on the way up and down by design (hysteresis), which makes the on/off states clean (Preston et al. 2019)
- **access_needed**: end of a tube or shaft: connected where air tubes end, at push-in or barbed ports
- **materials**: Soft valves: silicone rubber (other elastomers also work) (Preston et al. 2019). Printed valves: flexible TPU filament, e.g. Shore 60A to 82A grades (Zenodo data for Conrad et al. 2024; Recreus interview: only a 70A filament gave the needed layer adhesion and airtightness in their tests), or an experimental 80A TPU (Zhai et al. 2023); multi-material printing in Wang et al. 2021. Low-cost valves: polypropylene drinking straws, elastic tubing, TPU film heat-sealed with parchment paper as a release layer (Decker et al. 2022). Printed rigid valves: PLA with silicone-sheet seals and petroleum jelly (Printables 245125). Industrial elements: metal or plastic bodies with elastomer seals (Power & Motion).
- **maker_difficulty**: moderate: bought shuttle valves and air-logic elements just plug together (Power & Motion), and drinking-straw valves take under 12 minutes and under US$0.40 each (Decker et al. 2022); printing airtight TPU gates needs a well-tuned printer and 3 to 7 hours per gate (Kendre et al. 2023; Conrad et al. 2024); cast silicone valves are hard (27 hours by moulding, Kendre et al. 2023)

### Making it

- **processes**: 
  - off-the-shelf part: shuttle valves, two-pressure (AND) valves, NOT, FLIP FLOP, MEMORY and timer elements for industrial air-logic control (Power & Motion; Wikipedia 'Pneumatics')
  - 3D print (FDM): one-piece TPU gates and complete walkers and grippers printed with their valves inside (Conrad et al. 2024; Zhai et al. 2023; ScienceDaily 2025); rigid PLA spool-type valves with fittings (Printables 245125)
  - 3D print (multi-material): bistable conical-shell valves (Wang et al. 2021)
  - moulding and casting: silicone membrane valves (Rothemund et al. 2018; Preston et al. 2019)
  - hand assembly from household parts: drinking straws, elastic tube and heat-sealed TPU film (Decker et al. 2022)
- **print_in_place**: yes: the Freiburg TPU gate prints complete with its hollow chambers and 1 mm internal tube, needs no support material and is ready to use straight off the printer (Conrad et al. 2024); UC San Diego printed a gripper and legged walkers with their valves in one piece that work with no post-assembly (Zhai et al. 2023; ScienceDaily 2025). Rigid spool-type printed valves are assembled with screws, seals and fittings (Printables 245125)
- **making_tips_3d_printing**: 1) Material: use a soft TPU; the Freiburg gates were printed in FilaFlex 60A, 70A and 82A grades (Zenodo), and the researchers said only the 70A grade gave the speed, layer adhesion and airtightness they needed, with membranes as thin as 0.5 mm and nozzles up to 0.8 mm (Recreus interview, a filament vendor's article). 2) Airtightness is the main problem: FFF-printed soft parts 'often ... contain a large number of leaks' (Zhai et al. 2023). Over-extrude: UC San Diego used a 135% flow multiplier (Zenodo 8127332) and the livMatS walker uses 125% (Printables 782835); a maker printing NinjaFlex actuators needed about 140% flow (Printables 11188). 3) Print one continuous path per layer where possible ('like drawing a picture without ever lifting the pencil'), avoid travel moves and retractions, and turn on 'avoid crossing perimeters' (ScienceDaily 2023; Recreus interview; Printables 782835). 4) Example settings that worked: 0.3 mm line width, 0.1 mm layers, 2 wall lines (0.8 mm actual wall), 25 mm/s, 230-235 C, cooling fan off for the first layers then 40% (Zenodo 8127332, 80A TPU); or 0.4 mm nozzle, 0.3 mm extrusion width, 0.1 mm layers, 5 perimeters, 10 top and bottom layers, 95% infill, 220 C, max volumetric flow 0.5 mm3/s, random seam (Printables 782835, TPU A70). 5) Design so internal channels and chambers need no support, as removing support from a sealed chamber is impossible (Conrad et al. 2024; Recreus interview). 6) Expect long prints: about 7 hours per Freiburg gate (Conrad et al. 2024), about 3 hours for a TPU bistable valve (Kendre et al. 2023). 7) Test each valve on its own with a regulator and gauge before building a circuit. 8) Rigid printed spool valves: print PLA at 100% infill, sand or iron the sealing face smooth, tap M5 threads for push-in fittings and seal with silicone sheet and grease (Printables 245125).
- **off_the_shelf_parts**: Shuttle valve (OR valve); two-pressure valve (AND valve, dual-pressure valve); NOT element (normally open 3/2-way air-piloted valve); YES element; FLIP FLOP (double-piloted 5/2-way valve) and MEMORY element; ONE-SHOT (impulse) timer, TIME-ON and TIME-OFF delay valves; air-piloted 3/2 and 5/2 directional valves; push-button and limit valves (3/2 normally closed) (Power & Motion; ATHS Basic Pneumatics module 7). Also push-in fittings (e.g. M5 to 4 mm tube), 4 mm and 6 mm polyurethane air tube, pressure regulator with gauge, flow-control (needle) valve, silicone tubing, flexible TPU filament (Shore 60A-85A)
- **rules_of_thumb**: 
  - One soft bistable valve can be wired as NOT, AND or OR just by changing which tubes go to which pressures; NOT plus AND (or NOT plus OR) is enough to build any logic circuit (Preston et al. 2019)
  - Soft gates have two switching pressures (hysteresis): the output switches when the input rises above one threshold and only switches back below a lower one; Preston et al. used 0 mbar for '0' and 150 mbar (15 kPa) gauge for '1' (Preston et al. 2019)
  - An oscillator is a ring of inverters (NOT gates) with the last output fed back to the first; it needs an odd number of at least three (Wikipedia 'Ring oscillator'). UC San Diego's walker used three inverting valves (Drotman et al. 2021); a printed version used five stages to drive five muscles (Hackaday 2025)
  - Complementary ('CMOS-type') valve pairs use no air while holding a state but had only reached about 0.3 Hz in oscillators; designs with a constant bleed to atmosphere (a 'pull-down resistor', which in a printed circuit is just a narrowed channel) waste air but oscillate at 10 to 15 Hz (Decker et al. 2022; Hackaday 2025)
  - Shuttle valve (OR): if both inputs have pressure, the higher pressure reaches the output. Two-pressure valve (AND): the lower pressure, or the signal that arrives last, reaches the output (ATHS Basic Pneumatics module 7)
  - Soft silicone kink valves reach 45 to 50 kPa before the material fails (Decker et al. 2022); printed TPU gates run on 80 to over 750 kPa depending on the filament (University of Freiburg); always feed them through a regulator set below their rating (Wikipedia 'Pressure regulator')
  - The printed livMatS walker needs about 1.75 bar (175 kPa) at 3.44 L/min through a 4 mm tube (Printables 782835)
  - Industrial air-logic lines longer than about 10 to 15 ft (3 to 4.5 m) cycle noticeably slower than electrical controls, and the air must be clean and dry for reliable switching (Power & Motion)
  - Switching pressure of a printed bistable valve was easier to tune by changing material stiffness than geometry: 15.3 to 65.2 kPa (Wang et al. 2021)
  - Printing a TPU bistable valve took about 3 hours versus 27 hours for replica moulding (Kendre et al. 2023)

### When to use it

- **everyday_examples**: 
  - The two-button safety start on a factory press, where both buttons must be pressed together (an AND function, which a school pneumatics course builds with a two-pressure valve) (ATHS Basic Pneumatics module 7)
  - Pulsing shower heads, hot-tub jets and toy squirt guns, which use no-moving-parts fluidic oscillators, a cousin of air logic (Wikipedia 'Fluidics')
  - A shuttle valve that switches a machine over to a standby air tank when the compressor fails, or works a winch brake (Wikipedia 'Shuttle valve')
  - Research toys and robots: an electronics-free drinks dispenser and a soft walking robot that can be run over by a car (University of Freiburg)
- **when_to_use**: Use air logic when a machine already runs on air and you want it to make simple decisions or keep a rhythm without wires: a soft robot that walks from one air supply (Drotman et al. 2021; ScienceDaily 2025), a soft gripper that closes by itself when it touches an object (Rothemund et al. 2018) or releases when turned (Zhai et al. 2023), a two-hand safety start, or an OR choice between two air sources (Wikipedia 'Shuttle valve'). It suits places where electronics are unwanted or can fail: wet, dusty or explosive areas (no sparks; water splashes don't matter) (Power & Motion), near strong radiation, chemicals or MRI machines (University of Freiburg; UC San Diego 2021), and robots that must survive being squashed (University of Freiburg). It is also a hands-on way to learn digital logic.
- **when_not_to_use**: Not for complex logic, precise timing or counting: electronic controllers replaced air logic in most new machines because they are smaller, cheaper, more precise and more capable (Wikipedia 'Pneumatics'), and printed air logic is bulky, so it suits simple, predictable patterns like a walking gait (Hackaday 2025). Not over long distances, since air signals in long lines are slow (Power & Motion). Not where you have no clean air supply. If you only need to switch air by hand or from a microcontroller, use a switching (directional or solenoid) valve; if air must only flow one way, use a check valve.
- **environment_limits**: Water, dust and sparks: industrial air-logic works in wet and dusty areas and cannot ignite an explosive atmosphere, but needs clean, dry air or valves block and wear (Power & Motion; HSE HSG39: dirty or wet air can block valves). Radiation and chemicals: soft printed gates are proposed for places that would harm electronics (University of Freiburg). Over-pressure: silicone valves fail at about 45 to 50 kPa (Decker et al. 2022). Wear: elastic bands in straw valves failed after about 10,000 cycles (Decker et al. 2022). Temperature limits of printed TPU valves: ⚑ [uncertain] (no source found). *(⚑ parts need confirming)*
- **safety_notes**: 1) Compressed air can injure: never point it at skin or a person, since even 15 psig (about 100 kPa) can cause serious injury (FRC Zero), and at high pressure it can penetrate the skin and blow particles into eyes (HSE HSG39). 2) A burst or disconnected hose can whip (HSE HSG39); clamp tubes and keep pressure at the lowest that works. 3) Feed soft or printed valves through a pressure regulator set below their rating (Wikipedia 'Pressure regulator'; University of Freiburg; Decker et al. 2022); gas tanks and cartridges need a regulator, and any vessel holding compressed air 'can explode violently once their integrity is lost', even at fairly low pressure (HSE HSG39), so never store pressure in a 3D-printed part. 4) Vent the circuit before undoing fittings (HSE HSG39), and remember a FLIP FLOP or latched circuit can keep an actuator in its last state, so a robot may move when air is turned back on (Power & Motion). 5) Don't use a NOT element as a safety limit switch: it can't tell a stalled cylinder from one at the end of its stroke (Power & Motion).
- **common_failures**: 1) Leaks in printed TPU valves: fix by over-extruding, printing continuous paths and avoiding retractions (Zhai et al. 2023; Zenodo 8127332; Recreus interview). 2) Wrong pressure: too low and the membrane never snaps; too high and silicone valves rupture at about 45 to 50 kPa (Decker et al. 2022), so use a regulator and check the switching pressures of each valve. 3) An oscillator that won't start: a ring needs an odd number of at least three inverters (Wikipedia 'Ring oscillator'), and the valves must have enough flow resistance and volume between them to create a delay (Drotman et al. 2021 used a delay element to set the gait). 4) A circuit that starts in the wrong state: memories behave differently when air is removed (FLIP FLOP keeps its state; MEMORY resets) (Power & Motion). 5) Slow or erratic switching from long tubes or dirty, wet air (Power & Motion; HSE HSG39). 6) Worn parts: elastic bands tire after about 10,000 cycles (Decker et al. 2022). 7) Wasted air: bleed (pull-down) designs leak continuously, so a gas cartridge empties faster (Preston et al. 2019; Decker et al. 2022).
- **related**: 
  - Switching valve (directional control or solenoid valve): the same job but switched by hand or by electricity; air-logic valves are switched by air
  - Check valve: also passes air one way only, but reacts to flow direction, not to a separate control signal
  - Tesla valve: a no-moving-parts channel that acts like a leaky fluid 'diode'
  - Fluidic amplifier and fluidic oscillator: logic with no moving parts, where one jet of air or water deflects another (Wikipedia 'Fluidics')
  - Bistable compliant mechanism: the snap-through spring idea used inside the soft valve's membrane
  - Push-push latch and click-pen mechanism: mechanical versions of the 'push once on, push again off' toggle that air logic can also do (Preston et al. 2019)
  - Soft pneumatic bending actuator, pneumatic artificial muscle and bellows actuators: the soft 'muscles' that air-logic circuits switch
  - Pressure regulator and pressure relief valve: needed to give logic circuits a safe, steady supply
  - Microcontroller with solenoid valves: the electronic alternative for complex behaviour
  - Heat-sealed seam: how the TPU-film piston of the drinking-straw soft valve is made, heat-sealed with parchment paper as a release layer (Decker et al. 2022)

### Pictures, videos and models

- **links**: 
  - [Shuttle valve action principle cross section (Wikimedia Commons, user 'Railway')](https://commons.wikimedia.org/wiki/File:Shuttle_valve_action_principle_cross_section.gif): Animated cross-section of a shuttle valve: the ball is pushed to the opposite seat so air from either inlet reaches the outlet (the OR element) *(licence: CC BY-SA 4.0)*
  - [Fluidic AND XOR.svg (Joseph Fyfield; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Fluidic_AND_XOR.svg): Diagram of a no-moving-parts fluidic gate: two input jets give an AND output and an XOR output *(licence: Public domain)*
  - [Electronics free, air-powered robot (JacobsSchoolNews, UC San Diego, YouTube)](https://www.youtube.com/watch?v=X5caSAb4kz0): The four-legged soft robot walking from a constant air supply, controlled by a three-valve pneumatic oscillator *(licence: link only (standard YouTube licence))*
  - [3D-printed pneumatic modules replace electric controls in soft robots (University of Freiburg press release, 2024)](https://kommunikation.uni-freiburg.de/pm-en/press-releases-2024/3d-printed-pneumatic-modules-replace-electric-controls-in-soft-robots): Photos and videos of the 3D-printed TPU logic modules, the walking robot being driven over by a car, and the electronics-free drinks dispenser *(licence: link only (photos credited Lucia Brunold and Falk Tauber))*
  - [I Printed a Microchip That Runs on Air - A Nervous System for Squishy Robots! (soiboi soft, YouTube)](https://www.youtube.com/watch?v=QJdBp5dGrww): A maker printing membrane valves and channel 'resistors' on an FDM printer and building a five-stage pneumatic ring oscillator that makes a soft robot walk *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Desktop fabrication of monolithic soft robotic devices with embedded fluidic control circuits (Zhai et al., UC San Diego; Zenodo dataset)](https://zenodo.org/records/8127332): STL files for a printed normally-open air-switched valve, two soft actuators and an electronics-free autonomous gripper, with the full TPU print settings in the README *(licence: CC0 1.0)*
  - [livMatS Turtle Walker - fully integrated bioinspired soft robot (Falk Tauber, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/782835-livmats-turtle-walker-fully-integrated-bioinspired): One-piece TPU A70 walking robot with built-in pneumatic logic gates from the Freiburg team; walks on 1.75 bar from a 4 mm tube; print settings included *(licence: CC BY-NC-ND)*
  - [Pneumatic-mechanical 4/2-way valve (Vincent Groenhuis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve): Printed PLA air-piloted (or hand-operated) 4/2-way valve with M5 push-in fittings and silicone seals, used as the switching element of a pneumatic Turing machine *(licence: CC BY-NC-SA)*
  - [Programmable soft valves for digital and analog control (Decker et al., PNAS 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9546565/): Open-access paper describing soft valves made from drinking straws, elastic tubing, heat-sealed TPU film and elastic bands, with full fabrication steps in its SI appendix (SI not opened) *(licence: CC BY-NC-ND 4.0)*
- **diagram_idea**: Three panels: (1) a cutaway of the soft valve with its dome membrane snapped down, kinking the lower tube, and snapped up, kinking the upper tube; (2) the same valve wired three ways with coloured tubes to show NOT, AND and OR, each with a tiny truth table; (3) three NOT valves joined in a ring feeding the legs of a little soft robot, with a pressure-time graph showing the on-off pulses travelling round.
- **sources**: 
  - https://en.wikipedia.org/wiki/Shuttle_valve
  - https://en.wikipedia.org/wiki/Pilot_valve
  - https://en.wikipedia.org/wiki/Fluidics
  - https://en.wikipedia.org/wiki/Pneumatics
  - https://en.wikipedia.org/wiki/Ring_oscillator
  - https://en.wikipedia.org/wiki/Pressure_regulator
  - https://techxplore.com/news/2018-12-soft-valves-robots.html
  - https://www.gmwgroup.harvard.edu/publications/soft-bistable-valve-autonomous-control-soft-actuators
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC6475414/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9546565/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML
  - https://arxiv.org/abs/2110.01743
  - https://arxiv.org/abs/2312.01131
  - https://today.ucsd.edu/story/airwalker
  - https://www.sciencedaily.com/releases/2023/07/230727212035.htm
  - https://www.sciencedaily.com/releases/2025/03/250325115131.htm
  - https://kommunikation.uni-freiburg.de/pm-en/press-releases-2024/3d-printed-pneumatic-modules-replace-electric-controls-in-soft-robots
  - https://www.sciencedaily.com/releases/2024/02/240201121800.htm
  - https://zenodo.org/records/10517611
  - https://zenodo.org/records/8127332
  - https://recreus.com/en-en/blogs/sci-articles-flexible-tpu-filaflex/soft-robotics-filaflex70a-pneumatic-logic
  - https://hackaday.com/2025/10/15/printing-an-air-powered-integrated-circuit-for-squishy-robots/
  - https://www.powermotiontech.com/home/article/21122363/basics-of-pneumatic-logic
  - https://www.quia.com/files/quia/users/sfah6922/BasicPneumatics2011.2012/ATM1132_Basic_Pneumatics_module_7_Teacher_version.pdf
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1126/scirobotics.aay2627
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1126/scirobotics.adh4060
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1126/scirobotics.adg3792
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1002/aisy.202400876
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/782835-livmats-turtle-walker-fully-integrated-bioinspired
  - https://www.printables.com/model/245125-pneumatic-mechanical-42-way-valve
  - https://www.printables.com/model/11188-pillow-soft-robotic-actuator
  - https://commons.wikimedia.org/wiki/File:Shuttle_valve_action_principle_cross_section.gif
  - https://commons.wikimedia.org/wiki/File:Fluidic_AND_XOR.svg
  - https://www.youtube.com/watch?v=X5caSAb4kz0
  - https://www.youtube.com/watch?v=QJdBp5dGrww

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, compressed air, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: not applicable ⚑ *needs confirming (best guess): uses power, but `power` does not say what happens when it is lost*
- **motion_in**: pressure
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, drill and tap
- **load_max**: light
- **usual_process**: off-the-shelf part ⚑ *needs confirming (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes*
- **adjustable**: partly
- **removability**: removable
- **power**: powered
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
- **over_centre_use**: flip between positions
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits

## 307 Tesla valve (no-moving-parts one-way channel)

*hydraulics, pneumatics & vacuum.* A channel with looping side pockets that lets liquid or air through easily one way and turns it back on itself the other way; it only slows backflow, so it always leaks a little

*Also covers:* Often mistaken for a true one-way valve: unlike the Check valve, it never fully seals.

### What it is

- **plain_name**: A pipe or channel with a row of looping side pockets and no moving parts: water or air going one way slips straight through, but going the other way it is split into the loops and sent back to crash into itself, so it flows much less easily. It only slows the backflow; it never shuts it off, so it always leaks a little
- **term**: Tesla valve (valvular conduit; fixed-geometry fluidic diode)
- **aliases**: 
  - valvular conduit (Nikola Tesla's own name, US patent 1,329,559, 1920) (Wikipedia 'Tesla valve')
  - fixed-geometry passive check valve, no-moving-parts valve (Wikipedia 'Tesla valve')
  - fluidic diode, leaky diode (Wikipedia 'Fluidics'; Nguyen et al. 2021)
  - Tesla diode, Tesla conduit, Tesla-type microvalve (Nguyen et al. 2021)
  - D-valve (a Tesla-type valve design studied by De Vries et al.; Wikimedia Commons)
  - one-way flow restrictor (Printables 'Nested 3D Tesla Valve')
  - Not the same as: a Tesla 5-way (diverter) valve tool or valve caps for Tesla-brand cars, which share only the name
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: one-way & ratchet, print-in-place & 3D-printing joints
- **one_liner**: A fixed-shape channel whose teardrop-shaped side loops give much more resistance to flow in one direction than the other, so it favours one-way flow with no moving parts, but it is only a 'slightly leaking valve' that slows backflow rather than sealing like a check valve.
- **complexity**: Single piece: one channel with a series of looping segments (Tesla's drawing shows eleven, but any number can be used) (Wikipedia 'Tesla valve'). Often made as a flat channel sandwiched between two lids (laser-cut acrylic in Nguyen et al. 2021), or printed as one closed part or two screwed halves (Printables models).
- **how_it_works**: Flow in the easy (forward) direction runs along a fairly straight path past the loops (Wikipedia 'Tesla valve'). Flow in the hard (reverse) direction is split at each stage: part of it is turned round a loop and sent back across the main stream, where it collides with the oncoming flow and breaks it up (Wikimedia Commons 'Tesla valve principle'; Make:). This only works once the flow is fast enough: at low flow rates both directions resist equally, but above a certain speed the reverse flow turns turbulent and 'plugs' the pipe with vortices (Nguyen et al. 2021; ScienceDaily 2021). Because nothing actually closes, some fluid always gets through backwards; it works best with pulsing or back-and-forth flow, which it turns into a net one-way flow (Wikipedia 'Fluidics'; Nguyen et al. 2021).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): it favours flow in one direction, but only partly; it never fully stops backflow (Wikipedia 'Tesla valve')
  - seal it, or pass cables or fluid through: it passes water or air along a tube or channel (it does not seal)
  - slow it, stop it or keep its speed steady: it slows (does not stop) flow in the reverse direction, acting like a one-sided flow restrictor (Printables 'Nested 3D Tesla Valve'; Nguyen et al. 2021)
- **motion**: none: nothing moves except the fluid
- **degrees_of_freedom**: 0: it is one fixed shape with no moving parts
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other), but leaky: it resists reverse flow more than forward flow, typically about 2 to 4 times in steady-flow tests, and never seals (Wikipedia 'Tesla valve'; Nguyen et al. 2021)
  - motion conversion: with pulsing or back-and-forth flow, a set of Tesla valves turns the oscillation into a net one-way flow, like an AC-to-DC rectifier (Nguyen et al. 2021)
  - none of the mechanical behaviours otherwise: with no moving parts it cannot stick, wear or click (Wikipedia 'Tesla valve')
- **holding_principle**: not a holding joint (it moves or passes on motion): it is a shaped flow path; it holds nothing and passes fluid
- **input_output**: not applicable for motion. For flow: forward flow passes with lower resistance than reverse flow; the ratio of reverse to forward resistance (diodicity) is about 1 at low flow, rising to about 2 once the flow is fast enough (Reynolds number about 300 to 1500 in the NYU tests) (Nguyen et al. 2021). Four Tesla valves in a bridge turn back-and-forth flow from a piston into a one-way flow in a second branch (Nguyen et al. 2021).
- **power**: passive (no power needed): the flow itself does the work; it needs a pump, pressure head or pulsing flow to drive fluid through it
- **removability**: removable: it is fitted in line with hoses or tubes and can be taken out; printed versions may be one closed piece or two halves joined with M2 screws (Printables 518822)
- **reuse_cycles**: effectively unlimited: with no moving parts it is 'much more resistant to wear and fatigue', especially where pressure reverses often, as in a pulsejet (Wikipedia 'Tesla valve')
- **tools_needed**: none to fit (push tubes on or use a Luer syringe connector, as in Printables 781760); a 3D printer or laser cutter to make one; M2 screws and nuts for two-half designs (Printables 518822); hot glue for the school test kit (Printables 1611773)
- **seal**: none: it never closes, so some fluid always leaks back; Tesla's own patent called it 'a slightly leaking valve' (Wikipedia 'Tesla valve'). The part around the channel must itself be watertight or airtight (printed walls can leak, see making tips)
- **load**: light: not a structural part. Printed plastic versions are for low-pressure water and air; it has no pressure rating of its own ⚑ [uncertain] *(⚑ parts need confirming)*
- **adjustable**: no: its behaviour is fixed by the channel shape and the number of loops; more loops give more one-way effect (Printables 1611773; Wikipedia 'Tesla valve')
- **play_and_precision**: not applicable (it doesn't locate parts or pass on motion)
- **access_needed**: end of a tube or shaft: fitted in line where tubes end
- **materials**: Any material that can hold the channel shape: clear acrylic layers laser-cut and bonded (Nguyen et al. 2021), laser-sintered nylon (Make:), FDM-printed plastic such as PLA (Hackaday 2019), transparent filament to see the flow (Printables 781760), silicon or polymer at micro scale for microfluidics (Wikipedia 'Tesla valve'). For hot gases (pulsejets) plastics melt (Hackaday 2019).
- **maker_difficulty**: easy: free models print in one piece or two halves on any printer, and testing needs only a syringe or a tube of water (Printables 158643, 781760, 1611773); the hard part is getting a channel that doesn't leak through the printed walls

### Making it

- **processes**: 
  - 3D print (FDM): one-piece or two-half printed channels (Printables 158643, 518822)
  - 3D print (resin) or SLS: smooth internal channels; a laser-sintered nylon valve is shown by Make: ⚑ [uncertain] (for resin: no source tested a resin print)
  - laser cut: channel cut through acrylic sheet and sandwiched between two plain sheets, then bonded (Nguyen et al. 2021)
  - microfabrication: micro-scale Tesla valves in lab-on-a-chip devices (Wikipedia 'Tesla valve')
  - off-the-shelf part: built into some products, e.g. a phone's loop liquid-cooling system (Wikipedia 'Tesla valve'), but not usually sold as a separate part *(⚑ parts need confirming)*
- **print_in_place**: yes: it is one fixed channel, so it prints complete and working with nothing to assemble (Printables 158643 '3D Tesla Valve'); some designs are printed as two halves and screwed together so the channel can be seen and cleaned (Printables 518822)
- **making_tips_3d_printing**: 1) Orientation: print the channel flat (lying in the XY plane) so the loops are formed by the walls, not by overhangs; a two-half design avoids bridging the channel roof (Printables 518822) ⚑ [uncertain] (orientation advice not tested in a source). 2) Use transparent filament if you want to watch the flow, and print at high resolution so a Luer syringe cone comes out round enough to seal (Printables 781760). 3) Make the walls leak-proof: FFF-printed hollow parts often leak (Zhai et al. 2023); makers printing airtight parts raise the flow rate (over-extrude) and use several perimeters (Printables 11188; Zenodo 8127332), or you can seal the outside. 4) Keep the channel reasonably large (the NYU test channel was about 9 mm wide, 19 mm deep and 30 cm long) and push the fluid hard: the valve only starts to work above a certain flow speed (Nguyen et al. 2021). 5) Print several versions with 1, 3 and 5 loops and time how fast water drains through each way: more loops give a stronger one-way effect (Printables 1611773). 6) For hot gases, such as a pulsejet, ordinary PLA melts; a maker used plaster cast around a dissolvable PVA print instead (Hackaday 2019). 7) Test it as a flow restrictor, not as a seal: block the outlet with a finger, then compare how long a fixed amount of water takes to pass each way (Printables 1611773). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Usually none: it is a shape you make. To connect a printed valve: barbed hose connectors, Luer-lock syringe fittings (Printables 781760), clear acrylic tube and plastic hose for a drain test rig (Printables 1611773). If backflow must stop completely, buy a check valve (non-return valve) instead
- **rules_of_thumb**: 
  - Diodicity (Di) = reverse flow resistance / forward flow resistance; Di > 1 means it favours one direction (Wikipedia 'Tesla valve')
  - Real valves in steady flow reach a diodicity of only about 2 to 4 (Wikipedia 'Tesla valve'); NYU measured Di about 2 for Reynolds numbers 300 to 1500 and said Tesla's claimed ratio of 200 'seems well beyond reach' (Nguyen et al. 2021)
  - It does nothing at slow flow: Di stays close to 1 up to a Reynolds number of about 100 and switches on between about 100 and 300 (Nguyen et al. 2021); slow drips or slow syringe pushes go through almost equally well both ways (ScienceDaily 2021)
  - Pulsing or back-and-forth flow improves it, as Tesla claimed (Nguyen et al. 2021; Wikipedia 'Tesla valve')
  - More stages, more effect: a computer simulation found reverse resistance about 15 times forward with two segments and about 40 times with four (Wikipedia 'Tesla valve', simulation, higher than real tests); a school kit shows the effect growing with 1, 3 and 5 windings (Printables 1611773)
  - To pump, put four in a bridge (like an electronic full-wave rectifier) and drive one branch back and forth; with a low-resistance outlet the best possible pumping effectiveness is (Di - 1)/(Di + 1), only about one third for Di = 2 (Nguyen et al. 2021)
  - If backflow must stop completely (keeping air in a ball, protecting a pump or drinking water), use a check valve, not a Tesla valve (Wikipedia 'Tesla valve'; Wikipedia 'Backflow prevention device')

### When to use it

- **everyday_examples**: 
  - Loop liquid cooling in some Xiaomi (brand) phones, which uses a Tesla valve to keep the coolant flowing one way (Wikipedia 'Tesla valve')
  - Valveless pulsejet engines in hobby and model builds, which breathe in and blow out through one opening (Wikipedia 'Tesla valve'; Hackaday 2019)
  - Printed science toys and school kits where you push water through with a syringe and compare the two directions (Printables 781760, 1611773)
  - Nature's cousin: the spiral intestines of sharks and rays, which favour one-way flow with no flaps (University of Washington 2024)
- **when_to_use**: Use a Tesla valve where flow pulses or reverses quickly and a moving flap or ball would wear out, flutter or stick: valveless pulsejets, pumping fluids with vibration, oscillating heat pipes and phone cooling loops (Wikipedia 'Tesla valve'; Nguyen et al. 2021). It is handy where you want to bias flow without anything that can jam, in microfluidic chips that can't contain moving parts, and as a mixer, since the reverse flow becomes turbulent at unusually low speeds (ScienceDaily 2021). It is also a great printable demonstration of fluid behaviour.
- **when_not_to_use**: Don't use it where backflow must be stopped: it always leaks (Wikipedia 'Tesla valve'). Use a check valve (flap, ball, reed or duckbill) to keep air in an inflatable, stop an aquarium siphoning back, keep a pump primed or hold pressure in an actuator, and an approved backflow preventer for drinking water (Wikipedia 'Backflow prevention device'). It also does little for slow, steady flows or thick liquids (Nguyen et al. 2021), and its forward path still adds some resistance, so it is a poor choice where every bit of flow matters.
- **environment_limits**: No moving parts, so no wear or fatigue from frequent pressure reversals (Wikipedia 'Tesla valve'). Performance depends on flow speed and viscosity: slow flows and thick liquids behave like low Reynolds number, where it hardly works (Nguyen et al. 2021 used water-glycerol mixtures to reach low Reynolds numbers). Heat: printed plastic valves melt near hot gases such as pulsejet exhaust (Hackaday 2019). Water, chemicals and sunlight limits are those of the material it is made from ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: None known for the valve itself, as long as nobody relies on it to stop backflow: it always leaks, so never use it to protect drinking water or anything safety-critical (Wikipedia 'Tesla valve'; Wikipedia 'Backflow prevention device'). Demonstrations with fire (burning propane, as in NightHawkInLight's video) and printed pulsejets involve flames, heat and loud noise, and plastic parts can melt (Hackaday 2019); leave those to experienced makers. Never hold stored pressure in a 3D-printed part.
- **common_failures**: 1) Expecting it to seal like a check valve and finding water or air leaking back: it is a 'slightly leaking valve' by design (Wikipedia 'Tesla valve'). 2) Flow too slow to make it work, so both directions look the same (Nguyen et al. 2021). 3) Fitted backwards: the easy direction is the one where flow runs straight along the channel, not into the loops (Wikimedia Commons 'Tesla valve principle'). 4) Leaks through printed layers or the joint between two halves (Zhai et al. 2023; Printables 518822). 5) Too few loops to notice an effect (Printables 1611773). 6) Melted parts in hot-gas uses (Hackaday 2019).
- **related**: 
  - Check valve (flap, ball, reed or duckbill): actually seals against backflow, but has a moving part that can wear or stick
  - Shark-intestine (helical) pipes: 3D-printed pipes with internal spirals; soft printed versions performed at least seven times better than previously measured Tesla valves (University of Washington 2024)
  - Labyrinth seal: another fixed winding path with no moving parts, used to slow leakage past a shaft rather than to favour one direction
  - Fluidic oscillators and amplifiers: other no-moving-parts flow devices from fluidics (Wikipedia 'Fluidics')
  - Air-logic valve: switches air with a moving membrane and can make true on/off decisions
  - Diaphragm pump and peristaltic pump: when you need real one-way pumping rather than a biased channel

### Pictures, videos and models

- **links**: 
  - [Tesla valve principle.svg (CMG Lee; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tesla_valve_principle.svg): Diagram of the blocking direction (part of the flow turned round each loop and colliding with the main stream) and the easy direction *(licence: CC BY-SA 4.0)*
  - [Tesla valve cross-section.png (from Nikola Tesla's US patent 1,329,559; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tesla_valve_cross-section.png): Tesla's original patent drawing of the valvular conduit *(licence: Public domain)*
  - [D-valve (Tesla valve) velocity magnitude (De Vries, Florea, Homburg and Frijns; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:D-valve_(Tesla_valve)_velocity_magnitude_1-s2.0-S0017931016310560-gr3.jpg): Computer-simulated flow speed and streamlines in a Tesla-type valve, forward flow beside reverse flow *(licence: CC BY 4.0)*
  - [Tesla Valve Explained With Fire (NightHawkInLight, YouTube)](https://www.youtube.com/watch?v=tcV1EYSUQME): High-speed video of burning propane showing the flame racing through the easy direction and being turned back in the hard direction *(licence: link only (standard YouTube licence))*
  - [Early turbulence and pulsatile flows enhance diodicity of Tesla's macrofluidic valve (Nguyen, Abouezzi and Ristroph, Nature Communications 2021; open-access copy on PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8128925/): Photos and dye visualisations of a laser-cut acrylic Tesla valve, graphs of diodicity versus flow speed, and a four-valve pump circuit *(licence: CC BY 4.0)*
- **make_it_yourself**: 
  - [3D Tesla Valve (sjogerst, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/158643-3d-tesla-valve): Printable one-piece Tesla valve; the author also made a 'Nested 3D Tesla Valve' (model 158642) with the loops nested inside each other *(licence: CC BY)*
  - [Tesla Valve Experimentation Kit for Schools (TeslaVentile, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1611773-tesla-valve-experimentation-kit-for-schools): Test rig parts and valves with 1, 3 and 5 windings for timing how fast water drains through each way; needs an acrylic tube, hose and a stand *(licence: CC BY-SA)*
  - [Tesla valve bathtub toy (HankoTom, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/781760-tesla-valve-bathtub-toy): Tesla-valve toy with a Luer cone for a syringe, to feel and see which way water flows more easily; print in transparent filament *(licence: CC BY-NC)*
  - [Tesla valve (Philip Everts, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/518822-tesla-valve): Two-half Tesla valve joined with M2 screws and nuts, for water or gas *(licence: CC BY-SA)*
- **diagram_idea**: Two copies of the same looped channel one above the other: in the top one blue arrows run straight through left to right; in the bottom one red arrows enter from the right, split into each loop and swing back into the oncoming stream as swirls, with a small leak arrow still coming out the far end and a dial reading 'about 2x harder, never zero'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tesla_valve
  - https://en.wikipedia.org/wiki/Fluidics
  - https://en.wikipedia.org/wiki/Backflow_prevention_device
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC8128925/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8128925/fullTextXML
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1038/s41467-021-23009-y
  - https://www.sciencedaily.com/releases/2021/05/210517083626.htm
  - https://www.machinedesign.com/mechanical-motion-systems/article/21164409/the-tesla-valve-bringing-back-a-forgotten-invention
  - https://makezine.com/article/digital-fabrication/3d-printing-workshop/the-tesla-valve-one-way-flow-with-no-moving-parts/
  - https://hackaday.com/2019/12/27/3d-printed-pulsejet-uses-tesla-valve/
  - https://washington.edu/news/2024/09/25/tesla-coil-shark-intestines
  - https://www.sciencedaily.com/releases/2023/07/230727212035.htm
  - https://commons.wikimedia.org/wiki/File:Tesla_valve_principle.svg
  - https://commons.wikimedia.org/wiki/File:Tesla_valve_cross-section.png
  - https://commons.wikimedia.org/wiki/File:D-valve_(Tesla_valve)_velocity_magnitude_1-s2.0-S0017931016310560-gr3.jpg
  - https://commons.wikimedia.org/wiki/File:Valvular_conduit_-_Patent_by_Nikola_Tesla_-_February_3rd,_1920.pdf
  - https://www.youtube.com/watch?v=tcV1EYSUQME
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/158643-3d-tesla-valve
  - https://www.printables.com/model/158642-nested-3d-tesla-valve
  - https://www.printables.com/model/1611773-tesla-valve-experimentation-kit-for-schools
  - https://www.printables.com/model/781760-tesla-valve-bathtub-toy
  - https://www.printables.com/model/518822-tesla-valve
  - https://www.printables.com/model/11188-pillow-soft-robotic-actuator
  - https://zenodo.org/records/8127332

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, power tools, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
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
- **one_way_kind**: for air or liquid
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: one way or let off pressure
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, making_tips_3d_printing, processes

## 308 Vacuum-driven artificial muscle (origami vacuum muscle)

*hydraulics, pneumatics & vacuum.* A folded skeleton sealed inside a thin bag; sucking the air out collapses the bag onto the skeleton so it contracts, bends or twists with great force

### What it is

- **plain_name**: A folded or springy inner frame sealed inside a thin airtight bag: when you suck the air out, the outside air squashes the bag onto the frame, and the frame folds up along the path its shape allows, so the whole thing shortens, bends or twists with surprising force, then springs back when air is let in again
- **term**: Vacuum-driven artificial muscle (fluid-driven origami-inspired artificial muscle, FOAM)
- **aliases**: 
  - FOAM, fluid-driven origami-inspired artificial muscle (Li et al. 2017)
  - origami vacuum muscle, origami artificial muscle, origami-inspired artificial muscle (Wyss Institute)
  - vacuum-powered artificial muscle; V-PAM, vacuum-powered pneumatic artificial muscle (Joe et al. 2022, IntechOpen review)
  - negative-pressure actuator, vacuum actuator, vacuum bellows (Joe et al. 2022)
  - skeleton-and-skin actuator ('compressible skeleton, flexible skin and fluid medium') (Li et al. 2017)
  - magic-ball gripper, origami vacuum gripper (MIT News 2019)
  - SOVA and LSOVA, 3D-printable (linear) soft vacuum actuators (Tawk et al. 2018; Joe et al. 2022)
  - LPVAc (low-profile vacuum actuator: a spring inside a polyethylene film pouch) and the related ThinVAc (thin-walled vacuum actuator) (Joe et al. 2022)
  - VAMP, vacuum-actuated muscle-inspired pneumatic structure: a related type made from a buckling rubber honeycomb rather than a skeleton in a bag (ScienceDaily 2016)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: compliant mechanisms & flexures, powered & active connectors
- **one_liner**: An actuator made of a compressible skeleton (a folded plastic sheet, a spring, foam or a printed shape) sealed in a flexible skin; removing the air (or liquid) from inside makes the skin pull tight on the skeleton, which folds along its designed pattern to contract by up to about 90%, bend or twist, lifting up to about 1,000 times its own weight.
- **complexity**: A small assembly that acts as one unit: a skeleton (accordion-folded card or plastic sheet, an origami pattern, a metal coil spring, packing foam or a 3D-printed shape), an airtight skin (a plastic film or coated-fabric bag, or a rubber balloon), a tube or connector, and a vacuum source with a valve to let air back in (Li et al. 2017; Wyss Institute; MIT News 2019). The simplest home version is folded cardstock in a sandwich bag with a drinking straw sealed in with hot glue (softrobotics.io).
- **how_it_works**: At rest, the air pressure inside and outside the bag is equal and the skeleton holds its open shape. When fluid is sucked out, the outside pressure presses the skin inwards into the gaps of the skeleton, and the stretched skin pulls on the skeleton like a tensioned membrane (Li et al. 2017). The skeleton can only collapse in the way its folds or voids allow, so a zigzag folds up straight, an asymmetric pattern bends, and a twisted pattern rotates: 'designing how the skeleton folds defines how the whole structure moves' (Wyss Institute). When air is let back in, the springiness of the skeleton opens it out again (Li et al. 2017).

### Finder attributes

- **job**: 
  - hold or release using power: it pulls or grips while the vacuum is on and lets go when air is let back in (Li et al. 2017; MIT News 2019)
  - change the kind of motion: a change in air pressure becomes a straight pull, a bend or a twist, set by the skeleton's fold pattern (Li et al. 2017)
- **motion**: multiple: contracts in a straight line (by over 90% of its length in the best designs), bends or twists, depending on the skeleton (Li et al. 2017)
- **degrees_of_freedom**: 1 per sealed chamber: each chamber follows the single path its skeleton allows; several chambers or muscles combined give multi-axis motion (Li et al. 2017)
- **special_behaviour**: 
  - motion conversion: suction becomes contraction, bending or twisting, programmed by the fold pattern (Li et al. 2017; Wyss Institute)
  - fail-safe or breakaway (in the sense of failing gently): vacuum muscles have 'a lower risk of rupture, failure, and damage' and don't swell while working (Wyss Institute); the related buckling VAMPs still worked with a 2 mm hole and fail safely (ScienceDaily 2016). Note the flip side: losing vacuum makes it go slack and drop its load
  - none of the locking behaviours: it holds only while suction is applied
- **holding_principle**: 
  - suction or air pressure: the outside air presses the skin onto the skeleton and the skin tension drives the motion (Li et al. 2017; Wikipedia 'Suction cup' for the outside-pressure principle)
  - powered hold: it keeps pulling only while the vacuum is kept
- **input_output**: Negative pressure (vacuum) -> pulling force and contraction, bending or twisting. Contraction up to over 90% of length; actuation stress about 600 kPa (about six times mammalian skeletal muscle); peak power density over 2 kW/kg; efficiency about 23% driven by air and 59% driven by water; open-loop bandwidth about 1.1 Hz with a 0.5 kg load (Li et al. 2017). 3D-printed TPU vacuum actuators reached 5.54 Hz (Tawk et al. 2018). Back-drivable: yes; it only pulls, and when the vacuum is released the skeleton's springiness and any hanging load stretch it back out (Li et al. 2017).
- **power**: powered (needs a vacuum pump or other vacuum source, or a water pump for the liquid-driven version; Li et al. 2017). The home version is worked by sucking air out through a straw (softrobotics.io). If the vacuum is lost or the skin is punctured, it relaxes and releases (its force comes only from the pressure difference; Li et al. 2017)
- **removability**: removable: it connects with a single air tube and is mounted at its two ends; the muscle itself is a sealed unit (permanent) once the skin is closed
- **reuse_cycles**: many times: 3D-printed TPU soft vacuum actuators lasted 123,000 cycles (Tawk et al. 2018); lifetime of film-bag muscles: ⚑ [uncertain] (no cycle test found) *(⚑ parts need confirming)*
- **tools_needed**: Home version: scissors, tape and a hot-glue gun; the bag edges can also be heat-sealed with a heat sealer, soldering iron or the glue gun (softrobotics.io). Lab version: a laser cutter or knife to cut and fold the skeleton sheet, a 3D printer for printed skeletons, and an impulse heat sealer for the film skin (Li et al. 2017)
- **seal**: airtight or pressure: the skin is sealed round the skeleton by heat-pressing, gluing, welding, zippering or sewing (Li et al. 2017), or with tape and a ring of hot glue round the straw in the home version (softrobotics.io)
- **load**: heavy for its weight, but pull only: a 2.6 g muscle lifted 3 kg in 0.2 s at -80 kPa; nylon-skinned zigzag muscles gave a blocked force of about 428 N at -90 kPa; a large nylon-plate muscle lifted a 22 kg car wheel 20 cm (Li et al. 2017); the magic-ball gripper lifts about 100 times its weight, including bottles over 4 lb (1.8 kg) (MIT News 2019). It cannot push, and the home cardstock version lifts under 100 g (softrobotics.io)
- **adjustable**: yes: force and stroke rise with the vacuum level (skin tension is proportional to the pressure difference; Li et al. 2017), so a vacuum regulator or partial vacuum sets how hard it pulls; the motion pattern is fixed by the skeleton
- **play_and_precision**: noticeable: it is soft, and its length depends on the load and vacuum level; it is not a precise positioner (open-loop bandwidth about 1.1 Hz; model errors of about 7% in force and 11% in contraction; Li et al. 2017). The magic-ball gripper copes with objects of many shapes, grasping objects about 70% of its own diameter (MIT News 2019)
- **access_needed**: not applicable (it is mounted by its two ends and needs one air tube)
- **materials**: Skeletons: polyester sheet (laser-cut and folded), PEEK, nylon plates, stainless-steel sheet or compression springs, silicone rubber, packing foam, 3D-printed nylon, TPU or water-soluble PVA, even cardstock, cardboard, paper or aluminium foil (Li et al. 2017; Wyss Institute; softrobotics.io). Skins: PVC film, polyester film, TPU film, TPU-coated nylon fabric, PVA film, rubber balloons, plastic sandwich bags (Li et al. 2017; MIT News 2019; softrobotics.io). Fully printed versions: TPU filament, e.g. NinjaFlex (Joe et al. 2022)
- **maker_difficulty**: easy: a basic muscle takes about 20 minutes from household materials (softrobotics.io), and the lab versions were built in about 10 minutes from materials costing under US$1 (Wyss Institute); a strong, reliable one needs a good airtight seal and a vacuum pump with a release valve

### Making it

- **processes**: 
  - laser cut: thin polyester sheet skeletons, then folded by hand (Li et al. 2017)
  - 3D print (FDM): skeletons in nylon, TPU or PVA (Li et al. 2017), or a complete TPU vacuum actuator printed in one piece (Tawk et al. 2018; Joe et al. 2022)
  - hand folding and heat sealing: origami skeleton in a heat-sealed film bag (Li et al. 2017; softrobotics.io)
  - sheet metal or forming: stainless-steel sheet skeletons (Li et al. 2017)
  - off-the-shelf part: a compression spring used as the skeleton (Li et al. 2017; Joe et al. 2022)
- **print_in_place**: partly: whole bellows-type TPU vacuum actuators print in one piece (Tawk et al. 2018; Joe et al. 2022), but the classic skeleton-in-a-bag muscle needs the skin sealed around the printed skeleton afterwards (Li et al. 2017)
- **making_tips_3d_printing**: 1) Print the skeleton, then bag it: printed nylon and TPU skeletons were used in the original work, and a 3D-printed PVA skeleton in a PVA film skin even dissolves in hot water (about 70 C) within 5 minutes, so avoid PVA unless you want that (Li et al. 2017). 2) Make the skeleton springy at the folds and stiff in the panels: the hinges must be compliant to fold, and the skeleton's own elasticity is what brings it back after each stroke (Li et al. 2017). 3) Don't make the walls too thin: a skeleton with 1 mm walls buckled at -70 kPa and lost 20% of its force and 50% of its stroke compared with a 3 mm one (Li et al. 2017). 4) Leave air channels through the skeleton so the skin can't seal off pockets of air and jam (Li et al. 2017). 5) Use a thin skin that doesn't stretch much: stretching skin wastes stroke and force (Li et al. 2017). 6) For a fully printed TPU vacuum bellows, airtightness depends on the first layer and bed temperature, sensible (not extreme) retraction, extrusion temperature, speed and cooling (Joe et al. 2022); rigid rings inside the bellows stop it collapsing sideways (a printed origami muscle with inner rings contracted 62% with a 3 kgf load; Joe et al. 2022). 7) Round off sharp corners on printed skeletons so they don't puncture a thin film skin ⚑ [uncertain] (common-sense advice, not tested in a source). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Miniature diaphragm vacuum pump or hand vacuum pump; venturi vacuum generator (on compressed air); 3/2-way valve or solenoid valve to vent the muscle; vacuum regulator and gauge; impulse heat sealer; heat-sealable films (PVC, TPU film, polyester) and TPU-coated nylon fabric; compression springs as skeletons; thin polyester (PET) or polypropylene sheet for folded skeletons; silicone or polyurethane air tube and barbed connectors; drinking straws and zip bags for demos (Li et al. 2017; softrobotics.io; Joe et al. 2022)
- **rules_of_thumb**: 
  - The pull comes from skin tension, estimated as T = pressure difference x radius of curvature of the skin x width of the gap (Laplace's law) (Li et al. 2017)
  - The pressure difference can never be more than the outside air pressure (about 100 kPa at sea level), because the force on a sealed area is area times outside pressure at best (Wikipedia 'Suction cup': F = A x P, with P 'typically atmospheric pressure'); the FOAM tests used -70 to -90 kPa (Li et al. 2017)
  - Skeleton shape sets the motion: a symmetrical zigzag gives up to 90% straight contraction, a Miura-ori sheet 92% surface contraction, a waterbomb pattern turns a sphere into a cylinder (91%), and an asymmetric arrangement bends or twists (Li et al. 2017)
  - Strength: about 600 kPa actuation stress, about six times mammalian muscle; a 2.6 g, 10 cm muscle lifted 3 kg within 0.2 s at -80 kPa (Li et al. 2017)
  - Keep skeleton walls thick enough not to buckle: 1 mm walls buckled at -70 kPa, 3 mm did not (Li et al. 2017)
  - Driven by water instead of air, it is far more efficient (about 59% versus 23%) (Li et al. 2017)
  - If you drive it with positive pressure instead, the skin must be fixed to the skeleton at specific points to pull it (Li et al. 2017)
  - Home cardstock-in-a-bag version: about 2 inches (5 cm) of travel and under 100 g of lift; a wider tube makes it move faster (softrobotics.io)
  - 3D-printed TPU soft vacuum actuators: about 16 N output force, 5.54 Hz and 123,000 cycles (Tawk et al. 2018)

### When to use it

- **everyday_examples**: 
  - An accordion-folded strip of card in a sandwich bag that pulls up a small weight when you suck on a straw (softrobotics.io)
  - The origami 'magic ball' gripper that closes around soup cans, wine glasses or a broccoli floret like a Venus flytrap (MIT News 2019)
  - Vacuum-packed foods or space-saver storage bags, where removing the air pulls the bag tight around what is inside ⚑ [uncertain] (everyday analogy, not from a source) *(⚑ parts need confirming)*
- **when_to_use**: Use it when you need a strong, light, cheap pulling or gripping motion and a soft, safe actuator: grippers for fragile or oddly shaped objects (MIT News 2019), robot arms and soft robots, wearable assist devices and exoskeletons, which benefit because vacuum muscles don't swell and have a low risk of rupture (Wyss Institute; Joe et al. 2022), underwater devices driven by the surrounding water (Li et al. 2017), and quick experiments, since one can be made in minutes for under a dollar (Wyss Institute; softrobotics.io).
- **when_not_to_use**: Not when you need to push: it only pulls, so use a bellows or inflatable actuator or an air cylinder. Not when you need more force for a given size than about one atmosphere of pressure difference can give: positive-pressure muscles such as the McKibben muscle run above 100 kPa (Li et al. 2017), and hydraulics go higher. Not for precise positioning (use a servo, stepper or lead screw). Not for holding a load for long without power (use a latch or brake). The magic-ball gripper struggles with flat objects such as a book (MIT News 2019).
- **environment_limits**: Works in air or water, and a water-driven version works underwater (Li et al. 2017). PVA versions dissolve in hot water (about 70 C within 5 minutes; Li et al. 2017). The available pressure difference is limited to the surrounding air pressure (Wikipedia 'Suction cup'). Temperature, sunlight (UV) and long-term creep limits of the film skins and printed skeletons: ⚑ [uncertain] (not found in a source); seams and thin films can leak or puncture over time. *(⚑ parts need confirming)*
- **safety_notes**: 1) Vacuum is one of the safer ways to power a soft actuator: it doesn't expand and has a lower risk of rupture than inflated muscles (Wyss Institute; Li et al. 2017). 2) It is still strong and fast (a 2.6 g muscle lifted 3 kg in 0.2 s; Li et al. 2017), so keep fingers out of closing grippers and folding skeletons. 3) If the vacuum is lost or the skin is punctured, it goes slack and drops anything it is lifting, so don't hold loads over people with it. 4) Heat sealers, soldering irons and hot-glue guns used to seal the bag are hot (softrobotics.io suggests all three). 5) For water-driven versions, keep pumps and wiring away from leaks.
- **common_failures**: 1) Leaks at the seams or around the tube, so it never pulls hard: seal edges fully and put a ring of glue round the tube (softrobotics.io; Li et al. 2017). 2) A punctured or stretched skin: use a tough, non-stretchy film (Li et al. 2017). 3) Skeleton buckles instead of folding, losing force and stroke: thicken walls or panels (Li et al. 2017). 4) Air pockets trapped by the skin so it stops part-way: add channels through the skeleton (Li et al. 2017). 5) It doesn't spring back after the vacuum is released: the skeleton isn't elastic enough (Li et al. 2017). 6) A gripper that can't pick up flat things (MIT News 2019).
- **related**: 
  - Pneumatic artificial muscle (McKibben muscle): shortens when inflated, using a braided sleeve and positive pressure; vacuum muscles are safer but limited to about one atmosphere of pressure difference
  - Soft pneumatic bending actuator: bends when inflated rather than when air is removed
  - Bellows and inflatable actuators: push or lift by inflating; the same bellows can also contract under vacuum
  - Granular jamming gripper: also uses vacuum, but to make a soft bag go stiff, not to move it
  - Vacuum (suction) gripper and suction cup: hold by suction on a surface rather than by moving
  - Origami mechanisms (waterbomb, Kresling, Miura-ori): the fold patterns used as skeletons
  - VAMP (buckling rubber vacuum actuator): a rubber honeycomb that collapses under vacuum, with no separate skeleton (ScienceDaily 2016)
  - Twisted-and-coiled polymer muscle and shape-memory-alloy wire: muscles driven by heat or electricity instead of vacuum
  - Venturi vacuum generator and diaphragm pump: ways to make the vacuum

### Pictures, videos and models

- **links**: 
  - [Origami Inspired Artificial Muscles (Wyss Institute, YouTube)](https://www.youtube.com/watch?v=_tKI8BUHFLo): Video of origami vacuum muscles contracting, twisting, gripping and lifting heavy loads *(licence: link only (standard YouTube licence))*
  - [Artificial muscles give soft robots superpowers (Wyss Institute news, 2017)](https://wyss.harvard.edu/news/artificial-muscles-give-soft-robots-superpowers/): Photos and video of FOAMs made from springs, folded plastic and foam, lifting up to 1,000 times their own weight *(licence: link only)*
  - [Robot hand is soft and strong (MIT News, 2019)](https://news.mit.edu/2019/new-robot-hand-gripper-soft-and-strong-0315): Photos and video of the vacuum-driven origami 'magic ball' gripper closing around many different objects *(licence: link only)*
  - [Fluid-driven origami-inspired artificial muscles (Li, Vogt, Rus and Wood, PNAS 2017; open-access copy on PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5740677/): Figures of the skeleton-skin-fluid principle, zigzag, Miura-ori and waterbomb skeletons, and muscles in many materials lifting loads *(licence: CC BY-NC-ND 4.0)*
  - [A Review on Vacuum-Powered Fluidic Actuators in Soft Robotics (Joe, Bernabei and Beccai, IntechOpen 2022)](https://www.intechopen.com/chapters/81562): Illustrated overview of vacuum actuator types: bellows, origami skeletons, springs in pouches, buckling designs and 3D-printed TPU actuators *(licence: CC BY 3.0 (some figures reproduced with permission from other publishers))*
- **make_it_yourself**: 
  - [Making Origami Soft Robots from Low Cost Household Materials (softrobotics.io, FlowIO Platform by Ali Shtarbanov)](https://www.softrobotics.io/post/making-simple-origami-soft-robots-from-low-cost-household-materials): 20-minute tutorial for a vacuum origami muscle from cardstock, a sandwich bag, a straw, tape and hot glue, with ideas for other fold patterns, multi-chamber muscles and grippers *(licence: CC BY-NC-SA 4.0)*
  - [Fluid-driven origami-inspired artificial muscles (Li et al., PNAS 2017)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5740677/): Open-access paper giving the three-step build (make a skeleton, prepare the skin, seal it) and the materials used for each example muscle *(licence: CC BY-NC-ND 4.0)*
- **diagram_idea**: A side-by-side cutaway of a zigzag-folded skeleton inside a clear bag: on the left at normal air pressure, fully open; on the right with a pump sucking air out, the bag pressed into every fold by arrows labelled 'outside air pressure', the stack shortened to a tenth of its length and lifting a weight, with small insets of a bending and a twisting skeleton.
- **sources**: 
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC5740677/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5740677/fullTextXML
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1073/pnas.1713450114
  - https://wyss.harvard.edu/news/artificial-muscles-give-soft-robots-superpowers/
  - https://wyss.harvard.edu/technology/foams-soft-robotic-artificial-muscles/
  - https://www.youtube.com/watch?v=_tKI8BUHFLo
  - https://news.mit.edu/2019/new-robot-hand-gripper-soft-and-strong-0315
  - https://www.sciencedaily.com/releases/2016/06/160601132314.htm
  - https://www.intechopen.com/chapters/81562
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1089/soro.2018.0021
  - https://www.softrobotics.io/post/making-simple-origami-soft-robots-from-low-cost-household-materials
  - https://en.wikipedia.org/wiki/Suction_cup

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air, liquid, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: not applicable ⚑ *needs confirming (best guess): uses power, but `power` does not say what happens when it is lost*
- **motion_in**: pressure
- **motion_out**: straight push or pull, bending
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, glue gun, power tools, hand tools
- **load_max**: heavy
- **usual_process**: laser cut
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, paper or card, foam, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, everyday_examples, making_tips_3d_printing, reuse_cycles

## 309 Syringe pump (syringe driver)

*hydraulics, pneumatics & vacuum.* A motor turns a screw that pushes a syringe plunger at a slow, exact rate, to dispense or draw small, measured amounts of liquid

*Also covers:* Safety: never use a home-made one on people.

### What it is

- **plain_name**: A motor-driven pusher that presses (or pulls) the plunger of an ordinary syringe at a slow, exact, steady speed, so it squirts out or sucks in small, measured amounts of liquid without anyone touching it
- **term**: Syringe pump (syringe driver)
- **aliases**: 
  - syringe driver (the usual medical name; Wikipedia gives both names)
  - syringe infusion pump; ambulatory syringe driver (portable medical version; DHSC review)
  - laboratory syringe pump; microfluidic syringe pump; precision dispenser or micro-dispenser
  - infuse/withdraw syringe pump (pushes and pulls); dual or multi-syringe pump; push-pull continuous-flow syringe pump (PLOS ONE comparison table)
  - high-pressure syringe pump (stainless-steel syringes; Chemyx)
  - open-source syringe pump (e.g. the Open-Source Syringe Pump Library and the poseidon system, both open hardware projects)
  - syringe extruder or paste extruder (a syringe pump used as a 3D-printer print head for pastes, foods, clay or bio-inks; Allstruder paper)
  - linear actuator (the PLOS ONE authors call their pump 'a relatively high precision linear actuator')
  - Perfusor, Injectomat, Graseby MS16A/MS26 (brands of medical syringe drivers)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: sliding, telescoping & linear motion, motion conversion
- **one_liner**: A stepper motor turns a screw, the screw drives a sliding block, and the block pushes or pulls a syringe plunger a precise distance per step, so a set volume of liquid is delivered or drawn at a set rate (for example millilitres per hour).
- **complexity**: A small assembly that acts as one unit. Parts: a frame or base; a stepper motor; a shaft coupler; a lead screw or threaded rod with its nut (the screw drive); a sliding carriage (pusher block) running on two smooth rods with linear bearings; a cradle and clamp that hold the syringe barrel by its finger flange; a plunger holder on the carriage (needed if it must also pull); end-stop switches for homing; a stepper driver and a controller such as an Arduino or Raspberry Pi; and the syringe, tip fitting and tubing (PLOS ONE open-source pump; poseidon paper; Printables 167075 and 50666).
- **how_it_works**: The controller sends a set number of step pulses to the stepper motor, which turns the lead screw by an exact angle; the nut on the screw drives the carriage along the guide rods, and the carriage pushes the plunger into the barrel (infuse) or, if the plunger is clamped to it, pulls it out (withdraw) (poseidon paper; Printables 50666). The liquid volume moved equals the distance travelled times the inside cross-section of the barrel, so the software needs the syringe's inner diameter to turn a requested flow rate into a step rate (Chemyx syringe library; poseidon paper). Because the screw turns slowly and finely, tiny volumes can be metered, but each motor step gives a tiny pulse in the flow (Li et al., Lab on a Chip 2014), and the soft rubber plunger tip and tubing must be squeezed tight before liquid starts to come out (Medfusion syringe pump performance tips).

### Finder attributes

- **job**: 
  - change the kind of motion: turns the motor's rotation into a slow, exact straight push or pull on the plunger (PLOS ONE; poseidon paper)
  - seal it, or pass cables or fluid through: dispenses or draws up a measured amount of liquid through a sealed syringe and tube (Wikipedia 'Syringe driver')
  - slow it, stop it or keep its speed steady: keeps the liquid flowing at a constant, slow rate set in software, e.g. over hours (Wikipedia 'Syringe driver'; poseidon paper)
- **motion**: slide: the carriage and plunger move in a straight line; the stroke is limited by the syringe length (one full syringe of travel). The input motor rotates
- **degrees_of_freedom**: 1: the carriage can only slide back and forth along the guide rods; the screw sets exactly where it is
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): a lead screw and nut turn motor rotation into straight-line plunger travel (PLOS ONE; poseidon paper)
  - self-locking (holds under load, won't back-drive): fine-pitch lead screws and threaded rods are usually self-locking, so back-pressure in the syringe can't push the carriage backwards (Wikipedia 'Leadscrew': 'Most are self-locking'; vibration can still let a screw creep)
  - torque-limiting (slips or clicks at a set force/torque): the stepper's current limit sets the stall torque, so the motor stalls at a chosen pressure instead of breaking parts; poseidon set it to stall at about 4 MPa in a 1 mL syringe (poseidon paper and README)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it pushes liquid rather than holding parts together
  - shape (form-fit) and friction or clamping (force-fit): the syringe's finger flange sits in a slot and a clamp or press fit holds the barrel; the plunger end sits in a slot on the carriage (poseidon paper: print settings tuned 'to allow for a press fit of the syringe'; Printables 167075 and 50666)
- **input_output**: Continuous rotation of the motor -> slow straight push or pull of the plunger -> liquid flow. Plunger travel per motor turn = the lead of the screw (e.g. 2 mm per turn for an 8 mm screw with 2 mm pitch, Printables 167075); volume per turn = lead x inside area of the barrel. Worked example (calculated): a BD 10 mL plastic syringe has a 14.5 mm inner diameter (Chemyx), about 165 mm2 of area, so a 2 mm lead moves about 0.33 mL per turn and, with a 200-step motor, about 1.65 µL per full step. Efficiency is that of a plain lead screw (roughly 20-80%, see the Lead screw entry); the PLOS ONE authors note lead screws are inefficient. Shaft arrangement: in line (motor, screw and plunger on parallel or the same axis). Back-drivable: no for fine-pitch screws (Wikipedia 'Leadscrew'), so the plunger stays put when the motor stops
- **power**: powered: needs a stepper motor, a driver and a controller, usually 12 V (Hackaday syringe pump rack: 12 V, up to 2 A per motor). When power is lost the carriage simply stops where it is; a fine-pitch screw is not pushed backwards (Wikipedia 'Leadscrew'), but any pressure already built up in the syringe and tubing can still push a little liquid out ⚑ [uncertain: inferred from Medfusion's description of stored pressure after a blockage] *(⚑ parts need confirming)*
- **removability**: removable: the syringe drops into its cradle and is clamped or press-fitted, so syringes of different sizes can be swapped (poseidon paper; Printables 80669 swaps a retainer to change between 1 mL and 3 mL syringes); the pump itself is screwed together
- **reuse_cycles**: many times: syringes are swapped and refilled routinely; disposable plastic syringes are single-use in medicine and their plungers wear or swell, while glass and stainless-steel syringes are reusable (LabX syringe guide; Chemyx)
- **tools_needed**: screwdrivers and hex keys, pliers (a poseidon pump can be assembled in under 15 minutes with only pliers and screwdrivers, poseidon paper); a small screwdriver to set the stepper driver's current limit (poseidon README); a soldering iron or crimp tool for wiring; a scale or measuring cylinder for calibration (PLOS ONE)
- **seal**: watertight or airtight inside the syringe: the rubber or PTFE plunger seal and the tip fitting (often a Luer-lock connection) seal the liquid; seals can be silicone, PTFE or rubber, and a failed seal can leak or let the syringe eject from the back (LabX). The pump mechanism itself is not sealed
- **load**: medium force on a small area. A printed NEMA 17 pump pushed 200 N and a NEMA 11 pump 93 N before stalling or breaking a printed part (PLOS ONE); commercial lab pumps quoted about 178-445 N (PLOS ONE comparison table). Because pressure = force / plunger area, small syringes reach high pressure: poseidon reached about 4 MPa with a 1 mL syringe (poseidon README); calculated, 200 N on a BD 1 mL syringe (4.78 mm bore) would be about 11 MPa but only about 0.36 MPa on a 60 mL syringe (26.72 mm bore). Strong in push along the screw axis; the frame and guide rods must resist bending (poseidon paper)
- **adjustable**: yes: flow rate, volume and direction are set in software; the syringe inner diameter is entered or picked from a built-in syringe list (Chemyx; poseidon paper); calibration factors are set by measuring delivered volume (PLOS ONE); microstepping jumpers change the flow-rate range (poseidon paper); syringe holders can be resized in parametric CAD (Printables 167075)
- **play_and_precision**: Small but real. A plain nut gives noticeable backlash when the direction changes from push to pull (Printables 50666), so push a little first after reversing, or use an anti-backlash nut. Rubber plunger compression and friction ('stiction') and springy tubing delay the start and make it jerky (Medfusion). Each motor step makes a small pulse in flow: about 1-2% in normal use, up to about 9% for a worn pump (Li et al. 2014). Tested accuracy of printed pumps: +/-1% (NEMA 11) and +/-5% (NEMA 17) with a coefficient of variation of about 3% or less (PLOS ONE); a printed five-pump rack measured 0.5 µL accuracy in a 10 mL syringe (Hackaday). Misalignment tolerance is low: guide rods must be parallel or the stepper loses steps near the end of the stroke (Printables 50666), and a weak frame bends (poseidon paper)
- **access_needed**: not applicable: the syringe drops into an open cradle from above and the tubing connects at its tip
- **materials**: Printed parts: PLA (PLOS ONE; poseidon) or PETG (Printables 80669, 167075). Metal parts: steel lead screw or threaded rod (M5 or 8 mm) with a brass or plastic nut, steel smooth rods, ball bearings (Printables 167075, 50666, 80669). Syringes: plastic (polypropylene) are cheap and disposable but flex and can swell with solvents; glass is chemically inert and the best choice for many uses; stainless steel suits high pressure; plungers of plastic, PTFE, ceramic or glass; seals of silicone, PTFE or rubber (LabX; Chemyx)
- **maker_difficulty**: moderate: many open designs exist and 'even first year students' can assemble one (PLOS ONE), but it combines printed parts, a stepper motor, driver electronics, firmware and calibration

### Making it

- **processes**: 
  - 3D print (FDM): frame, motor mount, carriage, syringe cradle and clamps in PLA or PETG (PLOS ONE; poseidon; Printables 167075, 80669)
  - off-the-shelf part: stepper motor, lead screw or threaded rod, smooth rods, bearings, driver board, controller and syringes; also complete commercial lab syringe pumps and OEM pump modules (PLOS ONE; Chemyx)
  - CNC or laser cut: ⚑ [uncertain] plates for frames could be cut instead of printed; no opened source for a specific design *(⚑ parts need confirming)*
- **print_in_place**: no: the printed parts (end blocks, carriage, clamps) are printed separately, usually all on one plate, and assembled with a motor, screw, rods, bearings and bolts (PLOS ONE; Printables 167075, 50666)
- **making_tips_3d_printing**: 1) Make it stiff: the poseidon team found that sliding resistance displaced the guide rods and bent the printed body, and fixed it with a reinforced, thicker base and set screws on the rods (poseidon paper). 2) Expect high forces: a NEMA 17 version pushed 200 N, enough to damage some printed parts (PLOS ONE); use thick walls and solid infill in the load path, and set the driver current so the motor stalls first (poseidon README; about 4 MPa in a 1 mL syringe). 3) Settings that worked: PLA, 0.5 mm nozzle, 0.25 mm layers, 60 mm/s, all parts on one plate (PLOS ONE); PETG at 0.15 mm layers with supports (Printables 80669); 25% gyroid infill in PLA or PETG (Printables 167075). 4) Align the guide rods: if they aren't parallel the stepper can lose steps when the syringe is nearly empty (Printables 50666). 5) Fit the syringe: tune the cradle for a press fit (poseidon paper), or use a parametric OpenSCAD design and enter the barrel diameter, flange size and thickness, plunger-end size and shaft diameter of your syringe (Printables 167075). 6) To pull as well as push, fix the plunger end to the carriage (Printables 50666), and expect some backlash when reversing. 7) Add end-stop switches to home the carriage and detect an empty syringe (Printables 167075, 162989). 8) Keep printed PLA away from heat: it 'gets soft and deforms at temperatures over 60 °C' (Prusa), which matters if you warm the syringe (a heat-pad holder exists for one open design, Printables 142918).
- **off_the_shelf_parts**: Stepper motors: NEMA 17 or NEMA 11 (PLOS ONE), 28BYJ-48 geared stepper with driver board for slow flows (Printables 1738985), or salvaged optical-drive steppers with their lead screw (Printables 162989). Drivers and controllers: A4988 stepper driver (Pololu), Arduino with CNC shield (poseidon), Raspberry Pi (PLOS ONE). Screw drive: 8 mm lead screw (2 mm pitch, or T8 trapezoidal with a brass nut, 'T8-1-D1'), M5 threaded rod, shaft coupler (Printables 167075, 50666, 80669). Guides: 8 mm smooth rods with LM8UU linear bearings, 6 mm or 5 mm rods, 608ZZ bearing to carry the screw end (Printables 50666, 80669, 167075). Microswitch end stops. Syringes: disposable Luer-lock plastic syringes from 1 to 60 mL (Chemyx BD chart), glass gas-tight syringes, stainless-steel high-pressure syringes with swappable tips (Chemyx); blunt-tip Luer-lock dispensing needles and tubing (Printables 167075). Complete pumps: single, dual, infuse/withdraw, push-pull continuous-flow and high-pressure lab syringe pumps (PLOS ONE table; Chemyx)
- **rules_of_thumb**: 
  - Volume per step = inside area of the barrel x carriage travel per step. Calculated example: BD 10 mL syringe, 14.5 mm bore (Chemyx), with a 2 mm-lead screw and a 200-step motor gives about 1.65 µL per full step; a BD 1 mL syringe (4.78 mm bore) gives about 0.18 µL per step. Common BD plastic syringe bores: 1 mL 4.78 mm, 3 mL 8.66 mm, 5 mL 12.07 mm, 10 mL 14.5 mm, 20 mL 19.13 mm, 30 mL 21.69 mm, 60 mL 26.72 mm (Chemyx BD chart). Measure your own syringe if it isn't listed (Chemyx)
  - Use the smallest syringe that holds the volume you need: big syringes at low flow rates make sticking and slack worse (Medfusion tips), and a bigger syringe moves more liquid but lowers precision (PLOS ONE)
  - Don't dispense less than about 10% of a plastic syringe's volume, or less than 1% of a precision micro-syringe's, because plastic barrels flex and plungers are soft (LabX syringe guide)
  - Smaller syringes make higher pressure from the same push (Medfusion tips); set the stepper driver's current so the motor stalls before parts break: poseidon stalls at about 4 MPa with a 1 mL syringe (poseidon paper and README)
  - Flow pulses once per motor step at f = 4Q / (pi x D^2 x s), where Q is flow rate, D the barrel's inner diameter and s the carriage travel per step; typical fluctuation is about 1-2% of the flow (Li et al., Lab on a Chip 2014). Microstepping or a smaller syringe raises the pulse frequency so the flow is smoother
  - Calibrate: push a small set volume twice and measure the second one (the first wets the tip), divide by the commanded volume, and repeat three times (PLOS ONE)
  - Prime before timing: run the pump until liquid comes out of the tube end, so the plunger tip, tubing and fittings are already pressed tight (Medfusion tips)
  - Keep the pump level with the outlet: raising or lowering it changes the pressure by about 25 mmHg per foot (about 3.3 kPa per 30 cm) and causes a surge or a pause, worst with large syringes below about 1 mL/h (Medfusion tips)
  - After a blockage is cleared, pressure stored in the syringe squirts out an unintended extra dose, larger with bigger syringes; good pumps pull back slightly to prevent it (Medfusion tips)
  - Set rates in millilitres per hour, not millimetres of travel: confusing 'mm per hour' and 'mm per 24 hours' medical drivers led to fatal over-infusions (DHSC review of syringe driver safety)
  - Expected cost and performance of a printed pump: under 100 USD in parts versus 260 to over 5000 USD for commercial pumps; up to 2.1 mL/s and 200 N with NEMA 17, 1.4 mL/s and 93 N with NEMA 11 (PLOS ONE)

### When to use it

- **everyday_examples**: 
  - The bedside syringe drivers in hospitals and hospices that slowly give painkillers or anti-sickness drugs over many hours (Wikipedia 'Syringe driver'; DHSC review)
  - Lab syringe pumps that feed droplet-making microfluidic chips at about 1 mL/h (poseidon paper)
  - Syringe 'paste extruders' that turn a 3D printer into a printer for food, ceramics or bio-inks (Allstruder, HardwareX 2026)
  - A home-made doser that adds 0.4 mL of plant fertiliser to a small aquarium each day (Printables 50666)
- **when_to_use**: Use a syringe pump when you need a small, exact volume of liquid or a slow, steady flow that you can set in software: feeding microfluidic chips, adding a reagent drop by drop over hours, dosing a fish tank or plant, dispensing glue, solder paste or food paste, or extruding paste from a 3D printer (Wikipedia 'Syringe driver'; poseidon paper; Allstruder). It can also suck liquid back up (withdraw) if the plunger is clamped to the carriage, works with almost any liquid that the syringe material resists, and the liquid touches only the syringe and tube (LabX; Printables 50666). It also doubles as a precise linear actuator, e.g. for a microscope stage (PLOS ONE).
- **when_not_to_use**: 1) Never use a home-made syringe pump on a person or animal; medical syringe drivers are regulated infusion devices (FDA; DHSC review). 2) Large volumes or non-stop flow: a syringe empties and must be refilled, so use a peristaltic pump, which turns continuously, or a gear pump (Wikipedia 'Syringe driver' lists only small amounts; Peristaltic pump entry). 3) Gas: air compresses, so a syringe pump can't meter gas accurately; any trapped air bubble makes liquid flow springy and laggy (Medfusion tips on compliance and air). 4) When flow must be completely pulse-free, a pressure-driven flow controller gives much smaller fluctuations than a stepper-driven syringe (Li et al. 2014). 5) To move a part by hand-powered liquid, use syringe hydraulics instead. 6) For very high pressures with printed parts, buy a metal high-pressure pump (Chemyx).
- **environment_limits**: Heat: printed PLA frames soften and deform above about 60 °C (Prusa PLA guide); PETG is good to about 80 °C (Prusa PETG guide). Chemicals: plastic syringe barrels can be attacked by organic solvents and acids, and polypropylene can absorb solvents and swell, upsetting accuracy; silicone oil lubricant can contaminate samples (LabX). Temperature and pressure limits of the seals matter (LabX). Mounting height: moving the pump up or down changes delivery (Medfusion). Vibration and stiction: the open-loop stepper can skip steps if friction is high (Printables 50666), and the screw's self-locking can be undone by vibration (Wikipedia 'Leadscrew').
- **safety_notes**: 1) Never use a home-made syringe pump on people or animals. Even certified devices go wrong: in England between 2005 and 2010 there were 175 reported incidents with ambulatory syringe drivers and eight deaths from over-infusion, many caused by rate settings in millimetres of travel (mm per hour versus mm per 24 hours) (DHSC review), and the US FDA received about 56,000 adverse-event reports about infusion pumps from 2005 to 2009, including injuries and deaths (FDA). 2) Blocked lines build pressure: poseidon lists clogged lines creating pressurised liquid, electrical shock and material compatibility as hazards, and limits the motor so it stalls at about 4 MPa (poseidon paper); a failed plunger seal can let liquid squirt or the syringe eject from the back (LabX). Wear eye protection with hazardous liquids. 3) Small syringes reach high pressure from a small push (Medfusion), so use tubing and fittings rated for it. 4) Check that the syringe and printed parts resist the liquid you are pumping (LabX; poseidon paper). 5) Use blunt dispensing tips rather than sharp needles where possible (Printables 167075 uses a blunt-tip Luer-lock needle). 6) Keep fingers clear of the moving carriage ⚑ [uncertain: general pinch-point advice, no specific source]. *(⚑ parts need confirming)*
- **common_failures**: 1) Wrong flow because the syringe inner diameter or the microstepping setting in software doesn't match the hardware (poseidon paper found this in use). 2) Slow or jerky start from plunger-tip compression, friction and slack in tubing; prime first (Medfusion). 3) Missed steps when guide rods aren't parallel or friction is high near the end of the stroke (Printables 50666). 4) Printed frame bending or parts breaking under load (poseidon paper; PLOS ONE); stiffen the body and limit motor current. 5) Backlash when switching from push to pull (Printables 50666). 6) Pulsing flow from the motor steps, worse in worn pumps (Li et al. 2014). 7) A surge after a blockage clears, or flow changes when the pump is moved up or down (Medfusion). 8) Air bubbles in the syringe making the flow springy (Medfusion: in-line air adds compliance). 9) Plastic syringes swelling or being attacked by solvents (LabX). 10) The rate entered in the wrong units (DHSC review).
- **related**: 
  - Syringe hydraulics: two syringes joined by a tube and pushed by hand to move parts; no motor and no metering
  - Lead screw and nut: the screw drive inside a syringe pump; see it for back-driving and backlash details
  - Peristaltic pump: rollers squeeze a tube, so it can run continuously and self-prime, but the flow pulses with each roller and the tube wears
  - Diaphragm pump and squeeze bulb: cheap, pulsing pumps for air and water, not for exact doses
  - Gear pump: continuous flow of oil or water; not suited to tiny measured doses
  - Air or hydraulic cylinder: also a piston in a tube, but driven by fluid pressure to move a load rather than driven by a screw to move fluid
  - Ball screw: a smoother, more efficient screw drive that can be back-driven, used in some high-end pumps and stages
  - Pressure-driven flow controller (not an entry): pushes liquid from a pressurised reservoir and gives smoother flow than a stepper-driven syringe (Li et al. 2014)

### Pictures, videos and models

- **links**: 
  - [Syringe pump.jpg (Nuno Nogueira; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Syringe_pump.jpg): A laboratory syringe pump (World Precision Instruments SP120PZ) with a syringe clamped in place and its pusher block behind the plunger *(licence: CC BY-SA 2.5)*
  - [Syringe drivers.JPG (Stefan Bellini; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Syringe_drivers.JPG): Several medical syringe drivers in use in a coronary care unit *(licence: CC0)*
  - [Open-Source Syringe Pump Library (Wijnen, Hunt, Anzalone and Pearce, PLOS ONE 2014)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0107216): Exploded view of a 3D-printed syringe pump (Figure 3), photos of NEMA 11, NEMA 17 and dual versions, the wiring diagram, and a comparison table with commercial pumps *(licence: CC BY (open-access article))*
  - [Poseidon Build Videos: Syringe Pump (Sina Booeshaghi, YouTube)](https://www.youtube.com/watch?v=7YSiO6usR1M): Step-by-step assembly of the poseidon 3D-printed syringe pump (stepper, lead screw, rods and syringe holder) *(licence: Standard YouTube licence (link only))*
  - [3d printed mini syringe pump with parts from optical drive (Nemo404, YouTube)](https://www.youtube.com/watch?v=YdeZJIZdA_A): A tiny printed syringe pump driven by a salvaged optical-drive stepper and lead screw, pushing a 5 mL syringe *(licence: Standard YouTube licence (link only))*
- **make_it_yourself**: 
  - [Open-Source Syringe Pumps (LIBRE hub, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/688085-open-source-syringe-pumps): Printable lab syringe pumps for microfluidics, mass spectrometry and microscopy, redesigned from Andrey Samokhin's Open-Source Syringe Pump, with documentation and an online CAD model *(licence: CC BY)*
  - [Syringe Pump (slimpickens, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/167075-syringe-pump): Parametric OpenSCAD syringe pump: enter your syringe's barrel and plunger dimensions; NEMA 17, 8 mm x 2 mm-pitch lead screw, 5 mm rods, 608ZZ bearing and end stops *(licence: CC BY)*
  - [Mini syringe pump from optical drive parts (Nemo404, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/162989-mini-syringe-pump-from-optical-drive-parts): Three-part printed frame for a 5 mL syringe driven by a salvaged optical-drive stepper and lead screw; the designer notes it is not medical equipment *(licence: CC BY-NC)*
  - [Syringe Pump (28BYJ-48) (Martin Castro, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1738985-syringe-pump-28byj-48): Low-flow pump (up to about 2 mL per minute) for a 10 mL craft syringe using a cheap 28BYJ-48 geared stepper and an M4 bolt as the screw *(licence: CC BY-SA)*
  - [Syringe pump (TeeVau, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/50666-syringe-pump): Push-and-pull syringe pump with a T8 lead screw and LM8UU bearings, built to dose aquarium fertiliser; the notes describe backlash and rod alignment *(licence: CC BY-NC-SA)*
  - [poseidon open-source syringe pump and microscope system (Pachter Lab)](https://pachterlab.github.io/poseidon/): Documentation, CAD (STL, STEP, Fusion 360), Arduino firmware and Python GUI for up to three or four printed syringe pumps; code repository at github.com/pachterlab/poseidon *(licence: BSD 2-Clause (repository LICENSE))*
- **diagram_idea**: A side view of a syringe lying in a cradle, with a stepper motor at one end turning a lead screw; a carriage riding on two rods pushes the plunger, with arrows showing one motor step -> a tiny carriage move -> a tiny squirt of liquid, and a small inset showing volume = travel x barrel area.
- **sources**: 
  - https://en.wikipedia.org/wiki/Syringe_driver
  - https://en.wikipedia.org/wiki/Leadscrew
  - https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0107216
  - https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0107216&type=manuscript
  - https://www.nature.com/articles/s41598-019-48815-9
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6711986/fullTextXML
  - https://raw.githubusercontent.com/pachterlab/poseidon/release/README.MD
  - https://raw.githubusercontent.com/pachterlab/poseidon/release/LICENSE
  - https://pachterlab.github.io/poseidon/
  - https://sauretlab.me.ucsb.edu/sites/default/files/papers/2014_Li_LabChip.pdf
  - https://chemyx.com/resources/pump-resources/min-and-max-flow-rates/bd-plastic-syringe-minimum-maximum-flow-rates/
  - https://chemyx.com/resources/knowledge-base/general-syringe-pump-info/which-syringe-pump-and-syringe-is-right-for-my-lab/
  - https://www.agilitihealth.com/wp-content/uploads/2023/08/medfusion-3500-syringe-infusion-pump.pdf
  - https://www.labx.com/resources/choosing-the-right-syringe-for-your-pumping-application/4518
  - https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/757999/dhsc-review-of-syringe-driver-safety-actions.pdf
  - https://www.fda.gov/medical-devices/general-hospital-devices-and-supplies/infusion-pumps
  - https://hackaday.com/2015/05/29/pump-up-the-volume-with-the-3d-printed-syringe-pump-rack/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC13594859&format=json&resultType=core
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/688085-open-source-syringe-pumps
  - https://www.printables.com/model/167075-syringe-pump
  - https://www.printables.com/model/162989-mini-syringe-pump-from-optical-drive-parts
  - https://www.printables.com/model/1738985-syringe-pump-28byj-48
  - https://www.printables.com/model/50666-syringe-pump
  - https://www.printables.com/model/80669-open-source-syringe-pump-remix
  - https://www.printables.com/model/142918-heatpad-holder-for-open-source-syringe-pump
  - https://commons.wikimedia.org/wiki/Category:Syringe_drivers
  - https://commons.wikimedia.org/wiki/File:Syringe_pump.jpg
  - https://commons.wikimedia.org/wiki/File:Syringe_drivers.JPG
  - https://www.youtube.com/watch?v=7YSiO6usR1M
  - https://www.youtube.com/watch?v=YdeZJIZdA_A

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, liquid ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…built up in the syringe and tubing can still push a little liquid out [uncertain: inferred from Medfusion's de…"*
- **power_loss**: keeps its last state ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…built up in the syringe and tubing can still push a little liquid out [uncertain: inferred from Medfusion's de…"*
- **motion_in**: steady turning
- **motion_out**: straight push or pull, pressure
- **shaft_layout**: not applicable
- **overload_response**: not applicable ⚑ *needs confirming (best guess): listed as torque-limiting or breakaway, but no overload behaviour matched*
- **clicks**: not applicable
- **tools**: soldering iron, crimper, hand tools
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **straight_drive**: screw
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** power, processes, safety_notes

## 310 Diaphragm pump and squeeze bulb (membrane pump, micro air pump)

*hydraulics, pneumatics & vacuum.* A rubber disc or bulb flexed in and out between two one-way valves, as in aquarium air pumps, the small air and vacuum pumps that feed soft robots, and hand squeeze bulbs

*Also covers:* Also covers piston hand pumps (bike pumps) and bellows pumps

### What it is

- **plain_name**: A pump that works like a heart or a squeezed rubber bulb: a springy rubber disc, bulb or bellows is pushed in and let back out over and over, and two little one-way flaps make the air or water go in one side and out the other. The same idea, with a piston sliding in a tube instead of a flexing disc, is a bike pump
- **term**: Diaphragm pump (membrane pump), with the squeeze-bulb pump, piston hand pump (bike pump) and bellows pump as close relatives
- **aliases**: 
  - membrane pump (Wikipedia)
  - micro diaphragm pump, mini air pump, micro vacuum pump, DC air pump; often sold under model names with a size number such as 370 (e.g. ZR370-02PM, Adafruit; AM370FPW, Wikimedia Commons)
  - booster pump or medical-grade booster pump (the small pumps used in Programmable-Air; Hackaday)
  - aquarium air pump (Wikipedia gives it as the typical small diaphragm compressor; its diaphragm is vibrated magnetically, aquarium-essentials)
  - air-operated double diaphragm pump (AODD), a large industrial version driven by compressed air (Wikipedia)
  - diaphragm compressor (small diaphragm pumps used as air compressors and low-grade vacuum pumps; Wikipedia)
  - squeeze bulb, hand bulb, rubber bulb pump, blower bulb or air blower (lens and keyboard dusters), inflation bulb of a blood-pressure cuff (Wikipedia 'Sphygmomanometer'), primer bulb (boat and engine fuel lines; Wikipedia 'Fuel line'), bulb pump or siphon bulb (Wikipedia 'Hand pump')
  - piston pump, reciprocating pump, hand piston pump, suction (lift) pump, force pump (Wikipedia 'Reciprocating pump', 'Hand pump')
  - bicycle pump: floor pump or track pump, frame pump, mini pump, foot pump, double-action pump (Wikipedia 'Bicycle pump')
  - bellows: hand bellows, accordion bellows, double-acting piston bellows (Wikipedia 'Bellows')
  - foot pump (a diaphragm pump stepped on, e.g. for air beds; Wikipedia 'Air pump')
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: one-way & ratchet, compliant mechanisms & flexures, motion conversion
- **one_liner**: A chamber with one flexible wall (a rubber diaphragm, a squeezable bulb or a folding bellows) or a sliding piston, fitted with an inlet and an outlet one-way valve: making the chamber bigger sucks fluid in through the inlet, making it smaller pushes it out through the outlet, so in-and-out movement becomes one-way flow of air or liquid.
- **complexity**: A few parts, or a small assembly that acts as one unit. Parts: a pump chamber; the moving wall (rubber, thermoplastic or PTFE diaphragm; rubber or TPU bulb; leather or rubber bellows; or a piston with a cup seal); an inlet check valve and an outlet check valve; inlet and outlet ports or hose barbs; and a driver: an electric motor with a crank or wobble plate, a mains electromagnet that vibrates the diaphragm, a hand, a foot or a lever (Wikipedia 'Diaphragm pump', 'Hand pump', 'Bellows', 'Bicycle pump'; Thang, 2700 Animated Mechanical Mechanisms part 4 pp. 100-101). A printed squeeze-bulb duster has four TPU parts: two duckbill valves, the bulb and a nozzle (tuyere, Printables 1133240).
- **how_it_works**: When the diaphragm, bulb or piston moves so the chamber gets bigger, the pressure inside drops, the inlet valve opens and fluid is drawn in; when it moves back and the chamber gets smaller, the pressure rises, the inlet valve is pressed shut and the outlet valve opens to let the fluid out (Wikipedia 'Diaphragm pump': 'A pair of non-return check valves prevent reverse flow'). In a micro air pump a small DC motor drives the diaphragm through a crank, in an aquarium pump a magnetic field makes the diaphragm vibrate 50-60 times a second, and in a squeeze bulb your hand squeezes and the bulb's own springiness refills it (Wikipedia; aquarium-essentials; tuyere, Printables 1133240). A bike pump does the same with a piston: on the up-stroke air comes in through a one-way valve, and on the down-stroke the air is forced through the tyre valve; simple pumps use a cupped piston seal that the air presses against the cylinder wall, so the piston acts as its own valve (Wikipedia 'Bicycle pump').

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: moves air or liquid along a tube, in one direction, through sealed valves (Wikipedia 'Diaphragm pump')
  - hold or release using power: supplies the air pressure or suction that inflates soft actuators and balloons and holds suction cups and vacuum grippers (Programmable-Air; Hackaday)
  - stop it moving back (one-way): its two check valves let fluid go one way only, so a tyre, bag or vacuum line stays pumped when the pumping stops (Wikipedia 'Bicycle pump', 'Check valve')
- **motion**: multiple: the diaphragm, bulb or bellows flexes in and out (flex); in a piston pump the piston slides (slide); motor-driven pumps take in continuous rotation and turn it into this short back-and-forth stroke
- **degrees_of_freedom**: 1: the moving wall or piston only goes in and out along one path; each valve opens and shuts by itself
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the inlet and outlet check valves let fluid through in one direction only (Wikipedia 'Diaphragm pump'; 'Hand pump': check valves 'operating in opposing directions')
  - motion conversion (e.g. rotary to linear): a crank, eccentric or wobble plate turns motor rotation into the diaphragm's in-and-out stroke (Wikipedia 'Diaphragm pump'; Thang part 4 p. 101, wobbling-disk pump)
  - torque-limiting (slips or clicks at a set force/torque), in a loose sense: a pump can only reach its 'stall' pressure, e.g. -55 kPa for a ZR370 micro pump (Adafruit), and an air-driven diaphragm pump simply stops when its outlet is closed and restarts when it is opened, without overheating (Wikipedia)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it moves air or liquid
  - suction or air pressure: the pressure or suction it makes is what holds suction cups and inflates actuators (Programmable-Air)
  - spring force (a spring or springy part presses it in place): a squeeze bulb refills because its walls spring back (tuyere: a light gyroid infill makes the printed bulb springy; a hollow bulb 'doesn't refill with air well'), and the check valves are held shut by springs or their own springiness
- **input_output**: In-and-out (reciprocating) movement from a motor crank, a vibrating electromagnet, a hand or a foot -> pulsing one-way flow of air or liquid. Typical micro air pump: 4.5 V, about 500 mA, 2.5 L/min, stall at -55 kPa (Adafruit ZR370-02PM). Efficiency: Wikipedia says diaphragm pumps 'can be up to 97% efficient', while hand diaphragm pumps are called 'relatively inefficient due to the extra work needed to deform the diaphragm' (Wikipedia 'Hand pump'), so it depends strongly on size and design. Shaft arrangement: motor shaft at right angles to the diaphragm stroke in most micro pumps ⚑ [uncertain: from photos, no opened source states it]. Back-drivable: no; the check valves block reverse flow, and reversing a DC pump's motor does not reverse the airflow (Adafruit) *(⚑ parts need confirming)*
- **power**: powered (electric motor or mains electromagnet) or human-powered (hand, foot or lever); the valves themselves are passive. When power is lost the flow stops and the check valves hold the pressure or vacuum downstream as long as they seal (Wikipedia 'Check valve'); in an aquarium air line, water can siphon back into the pump unless a check valve is fitted or the pump sits above the tank rim (Aquarium Co-op)
- **removability**: removable: tubing pushes onto the inlet and outlet barbs (Adafruit) and pumps are held by clips or screws; tyre pumps push or clamp onto the tyre valve (Wikipedia 'Bicycle pump')
- **reuse_cycles**: effectively unlimited for connecting and disconnecting tubes, but the pump itself wears: Adafruit's ZR370 is specified for 30,000 cycles of 10 seconds on and 5 seconds off, and rubber diaphragms 'will eventually leak and need to be replaced' (Wikipedia 'Hand pump')
- **tools_needed**: none to push tubing on; a soldering iron or connectors to wire the motor, plus a transistor or motor driver rated well above the pump's running current (Programmable-Air README; Adafruit); a soldering iron to weld printed TPU valves into a printed bulb (tuyere, Printables 1133240); spanner and PTFE tape for threaded pneumatic fittings on printed compressors (cndewil, Printables 1175682)
- **seal**: airtight or pressure, within the pump's rating: the diaphragm is a hermetic seal between the drive and the chamber, so the air or liquid needs no lubricant and stays clean (Wikipedia 'Diaphragm pump'); the check valves seal against backflow; in a bike pump the cupped piston seal is pressed against the cylinder by the air (Wikipedia 'Bicycle pump'). Printed pumps often leak (Vaks, Printables 1518068: 'super leaky')
- **load**: light pressure for most maker pumps: micro pumps stall at about -55 kPa vacuum and deliver 1.8-2.5 L/min (Adafruit); Programmable-Air aims at -0.5 to +0.5 atm and 2 L/min, while airbrushes need about 10 L/min, more than such pumps give (Programmable-Air README). Hand piston pumps reach tyre pressures (tyres are marked with ranges such as 90-120 psi; Wikipedia 'Bicycle pump'), and a printed piston compressor reached about 40 psi but 'above 20 psi it's not super happy' (cndewil, Printables 1175682). Industrial hydraulically driven diaphragm pumps reach up to 1,200 bar (Wikipedia). Mechanically it carries no structural load
- **adjustable**: yes: an electric pump's speed and flow can be varied with PWM (Adafruit); an air-driven diaphragm pump's flow is set from zero to maximum with its air-inlet or outlet valve (Wikipedia); hand pumps by how hard and fast you pump. Pressure is limited by the pump's stall pressure, so add a pressure sensor, valves or a relief valve for control (Programmable-Air)
- **play_and_precision**: not applicable: it moves fluid, not parts. The flow comes in pulses, one per stroke, and the amount per stroke changes as valves leak and diaphragms age; for measured doses use a syringe or peristaltic pump
- **access_needed**: end of a tube or shaft: tubing fits over the inlet and outlet barbs (Adafruit ZR370: side inlet 2 mm inner and 4.3 mm outer diameter, end outlet 1 mm inner and 4.3 mm outer diameter, so use tubing of about 3-4 mm inner diameter)
- **materials**: Diaphragms: rubber, thermoplastic or PTFE, chosen to resist the pumped fluid (Wikipedia 'Diaphragm pump'). Traditional bellows: rigid boards with leather sides (Wikipedia 'Bellows'). Bike pump pistons: cupped fibre or plastic (Wikipedia 'Bicycle pump'). Printed versions: TPU 85A-95A for bulbs, bellows and valves, PLA or PETG for rigid ends and frames (Printables 1133240, 999195, 1000990, 225914); a clear acrylic tube with O-rings as the cylinder of a printed piston compressor (cndewil, Printables 1175682)
- **maker_difficulty**: easy to buy and fit: a micro air pump costs about 8 USD and is driven like any small DC motor (Adafruit), and a TPU squeeze bulb with printed valves is a beginner print (tuyere, Clough42). Moderate to hard to print a motor-driven pump or compressor that seals and lasts, because printed valves and seals leak (Vaks, Printables 1518068) and compressed air gets hot (cndewil)

### Making it

- **processes**: 
  - off-the-shelf part: micro diaphragm air and vacuum pumps, aquarium air pumps, small diaphragm water pumps (e.g. in garden watering kits, Wikimedia Commons AM370FPW photo), squeeze bulbs, bike and foot pumps (Adafruit; Wikipedia)
  - 3D print (FDM): one-piece TPU squeeze bulbs, duckbill valves and bellows dusters; PLA or PETG frames, cranks and pistons for printed piston compressors (Printables 1133240, 999195, 225914, 1175682)
  - 3D print (FDM, two materials): TPU bellows printed in alternating layers with PLA that is peeled away afterwards (Hackaday 2025)
  - laser cut: the case plates of a printed piston compressor (cndewil, Printables 1175682)
  - woodwork: traditional hand bellows from wooden boards and leather (Wikipedia 'Bellows')
- **print_in_place**: partly: a TPU squeeze bulb prints in one piece, but either a 6 mm airsoft BB must be dropped in at a print pause to make its check valve (Clough42, Printables 999195), or separately printed one-piece TPU duckbill valves are pushed in and welded with a soldering iron (tuyere, Printables 1133240). Motor-driven pumps are printed as separate parts and assembled with bearings, O-rings and fittings (cndewil, Printables 1175682)
- **making_tips_3d_printing**: 1) Squeeze bulbs: print in soft TPU (85A works well, Clough42); give the bulb a light gyroid infill so it springs back and refills, because a hollow bulb refills poorly (tuyere). 2) Valves: one-piece TPU duckbill valves are the easiest printed check valves; push them into the bulb and weld the seams with a soldering iron, otherwise the inlet valve 'tends to pop off' when squeezed hard; the printed bulb's inlet and outlet come out sealed over and must be cut or melted open (tuyere). For a ball valve, pause at the right layer and drop in a 6 mm airsoft BB (Clough42: at about 7.6 mm height). 3) TPU printing: print slowly, one object at a time to limit stringing, and clean hairs off with a hot-air gun (tuyere); keep the filament dry because it absorbs moisture (Prusa flexible materials guide). Blower bulbs print well with at least two walls at 0.2 mm layers, slowly (MattoDesign, Printables 225914); a 95A TPU hand pump body with PLA ends printed unsupported at 100% infill (CLOWN 3D, Printables 1000990). 4) Bellows: alternate TPU and PLA layers so the TPU folds stay separate, then peel the PLA away; this needs a printer with two independent extruders (Hackaday 2025). 5) Printed piston compressors: give pressure parts 4-6 walls, print hot with thick layers for airtightness, oil the O-rings and cylinder, use PTFE tape on fittings, and expect the air to get hot: run it briefly and let it cool; it reached about 40 psi but struggled above 20 psi (cndewil, Printables 1175682). 6) Expect leaks: a student-designed printed diaphragm pump was 'super leaky' though it still moved 1.35 L/min (Vaks, Printables 1518068). 7) Don't connect a printed pump to a printed tank: never hold stored pressure in a 3D-printed part.
- **off_the_shelf_parts**: Micro diaphragm air and vacuum pumps (DC 3-12 V; e.g. ZR370-02PM 2.5 L/min and ZR320-02PM 1.8 L/min, Adafruit); 'medical booster' mini pumps (Programmable-Air); aquarium air pumps and airline check valves (Aquarium Co-op); silicone air tubing of 3 mm inner diameter, T-connectors and 6 V mini air valves (Adafruit related parts); pressure sensors such as the Omron 2SMPP-03 with an HX711 amplifier (Programmable-Air README); Programmable-Air kit (open hardware); air-operated double diaphragm pumps for slurries (Wikipedia); bike floor pumps with gauges, frame pumps, mini pumps, foot pumps, Presta/Schrader heads and adapters (Wikipedia 'Bicycle pump'); squeeze bulbs with release valves (blood-pressure cuffs; Wikipedia 'Sphygmomanometer'); primer bulbs for fuel lines (Wikipedia 'Fuel line'); hand bellows (Wikipedia 'Bellows')
- **rules_of_thumb**: 
  - A typical 4.5 V micro pump draws about 500 mA, moves 2.5 L/min and stalls at -55 kPa; it is not rated for continuous running (tested for 30,000 cycles of 10 s on, 5 s off), so plan on about a 50% duty cycle (Adafruit ZR370-02PM)
  - One pump only blows at its outlet and sucks at its inlet, and reversing the motor doesn't reverse the flow, so to both inflate and deflate use two pumps or a valve arrangement (Adafruit; Programmable-Air uses one pump for pressure and one for vacuum, Hackaday)
  - Size the switching transistor for the startup and stall current, not the label: a 0.8 A transistor blew up on a pump rated at 350 mA, so Programmable-Air moved to parts rated for at least 2 A (Programmable-Air README)
  - Small soft robots work in roughly -0.5 to +0.5 atm with about 2 L/min, enough to inflate and deflate a 15 cm (6 in) balloon in under 30 seconds; an airbrush needs about 10 L/min, far more than these pumps give (Programmable-Air README)
  - Balloons and thin silicone actuators get harder and then easier to inflate (the pressure rises, then falls), so control them by the amount of air pumped in rather than by pressure alone (Programmable-Air README)
  - Piston pumps: a narrow barrel reaches higher pressure for the same push, a wide barrel moves more air per stroke (Cycling UK forum), because force = pressure x piston area (FIRST Robotics Competition pneumatics manual)
  - A pump that sucks water up (a suction or lift pump) can't raise it more than about 7 m; to go higher, push it from below with a force pump (Wikipedia 'Hand pump')
  - Diaphragm pumps prime themselves, lift well on the suction side and can run dry without damage (Wikipedia 'Diaphragm pump')
  - Aquarium air lines need a check valve unless the pump sits higher than the tank rim; fit it outside the water near the rim with the flapper end towards the pump (Aquarium Co-op)
  - Rest micro pumps on soft foam or sponge to cut vibration noise (Adafruit)
  - Use air-only micro pumps for air only; for liquids use a water pump or a peristaltic pump (Adafruit)

### When to use it

- **everyday_examples**: 
  - The humming aquarium air pump that bubbles air through an airstone (Wikipedia 'Diaphragm pump', 'Air pump')
  - A bike pump, or the foot pump for an air bed (Wikipedia 'Bicycle pump', 'Air pump')
  - The rubber bulb you squeeze to inflate a blood-pressure cuff; automatic cuffs use a tiny electric air pump instead (Wikipedia 'Sphygmomanometer'; Commons photo of a Beurer BC-18 pump unit)
  - Fireplace bellows and the rubber blower bulb used to dust camera lenses (Wikipedia 'Bellows'; MattoDesign, Printables 225914)
- **when_to_use**: Use a diaphragm pump when you need a small, cheap, clean source of air pressure or suction: inflating soft robot fingers, balloons and air bags, powering small suction cups and vacuum pick-up tools, bubbling air into an aquarium, or moving dirty or chemical liquids without them touching the motor (Wikipedia 'Diaphragm pump'; Programmable-Air; Adafruit). It primes itself and doesn't mind running dry (Wikipedia). Choose a squeeze bulb, bellows or hand piston pump when there's no electricity or you want direct control by hand: dusting, priming a fuel line, pumping a tyre or emptying a can (Wikipedia 'Hand pump', 'Fuel line', 'Bicycle pump').
- **when_not_to_use**: 1) Exact doses or very steady flow: the flow pulses and the stroke volume drifts; use a syringe pump or a peristaltic pump. 2) Lots of water at low pressure (fountains, aquariums' water circulation): use a centrifugal pump. 3) High flow of air (airbrushes need about 10 L/min; Programmable-Air README) or high stored pressure: use a proper compressor with a rated air tank. 4) Liquids in an air-only micro pump (Adafruit). 5) Continuous running of an intermittent-duty micro pump (Adafruit). 6) Both blowing and sucking from one pump without valves (Adafruit). 7) Lifting water more than about 7 m by suction (Wikipedia 'Hand pump').
- **environment_limits**: Heat and duty cycle: small motor pumps are rated for intermittent use (Adafruit: about 50%), and compressing air heats it, so printed compressors must be run briefly and allowed to cool (cndewil). Wear: rubber diaphragms eventually leak and need replacing (Wikipedia 'Hand pump'). Chemicals: pick a diaphragm elastomer that suits the fluid; many are available for corrosive liquids (Wikipedia). Printed parts: TPU absorbs moisture (Prusa flexible materials guide); PLA softens above about 60 °C (Prusa PLA guide), which a working printed compressor can approach ⚑ [uncertain: no temperature was measured]. Noise and vibration: pumps vibrate a lot, so mount them on foam (Adafruit). *(⚑ parts need confirming)*
- **safety_notes**: Generally low risk, but: 1) Over-inflation: a pump that keeps going can burst what it fills; car-tyre electric pumps can over-inflate and burst a bike tyre unless stopped in time (Wikipedia 'Bicycle pump'); add a pressure sensor or relief valve to soft actuators. 2) Compressed air: never point it at skin, eyes or anyone; even 15 psig can cause serious injury (FRC Zero), and air jets carry particles into eyes (HSE HSG39). 3) Heat: compressing air heats the pump (cndewil). 4) Aquariums: without a check valve, tank water can siphon back through the air line, damaging the pump, flooding the floor and in extreme cases starting an electrical fire (Aquarium Co-op). 5) Electrics: startup current can destroy an undersized transistor (Programmable-Air README). 6) Don't feed a pump into a home-made tank: never hold stored pressure in a 3D-printed part.
- **common_failures**: 1) Valve fitted backwards, so nothing flows (Aquarium Co-op). 2) Dirt or wear stops a check valve sealing, so the pump loses its prime or the vacuum leaks away (see the Check valve entry). 3) Torn, hardened or worn diaphragm (Wikipedia 'Hand pump'). 4) A printed bulb that doesn't spring back because it is hollow, or an inlet valve that pops off unless welded (tuyere). 5) Leaky printed chambers and seals (Vaks; cndewil). 6) Overheating or early wear from running an intermittent pump continuously (Adafruit). 7) Blown driver transistor from startup current (Programmable-Air README). 8) Water siphoned into an aquarium pump during a power cut (Aquarium Co-op). 9) Weak flow because the tubing is too narrow or kinked ⚑ [uncertain: general advice, no specific source]. *(⚑ parts need confirming)*
- **related**: 
  - Check valve: the one-way valve inside every one of these pumps; two of them plus a flexing chamber make a pump
  - Peristaltic pump: rollers squeeze a tube, no valves; better for measured doses of liquid
  - Syringe pump: a screw-driven piston for exact small volumes; not continuous
  - Venturi vacuum generator: makes suction from compressed air or running water with no moving parts
  - Centrifugal pump: a spinning impeller for lots of water at low pressure; must be primed
  - Gear pump: two meshing gears for oil or water at steady pressure
  - Air tank and hydraulic accumulator: stores what a small pump produces so it can be released in fast bursts
  - Bellows and inflatable actuators: the soft parts these pumps inflate
  - Vacuum (suction) gripper and suction cup: the usual loads for a micro vacuum pump
  - Bellows boot: the same folded shape used only as a passive dust cover

### Pictures, videos and models

- **links**: 
  - [Membraanpomp.svg (Sjoerder; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Membraanpomp.svg): Animation of a diaphragm (membrane) pump: the membrane moves, the inlet and outlet valves open and close in turn, and bubbles show the flow *(licence: CC BY-SA 3.0 / GFDL)*
  - [Diaphragm pump animated.gif (TheresNoTime; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Diaphragm_pump_animated.gif): Animation of the basic working principle of an air-operated double diaphragm pump (the caption used in Wikipedia's 'Diaphragm pump' article) *(licence: CC BY-SA 4.0)*
  - [Diaphragm Type Pump.jpg (Cmehlhop2; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Diaphragm_Type_Pump.jpg): Cross-section drawing of a basic diaphragm (fuel) pump and most of its components *(licence: CC BY-SA 4.0)*
  - [Gardena AquaBloom Set - AIM Technology AM370FPW (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Gardena_AquaBloom_Set_-_AIM_Technology_AM370FPW-7694.jpg): Photo of a small motor-driven diaphragm pump (AIM Technology AM370FPW) taken from a garden watering kit *(licence: CC BY-SA 4.0)*
  - [Hand piston pump 1 (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=5a-UdttYEVs): CAD animation of a hand piston pump cut in half, with spring-loaded ball valves opening and closing as the piston moves *(licence: Standard YouTube licence (link only))*
- **make_it_yourself**: 
  - [TPU Check/One-Way Valves - No Moving Parts! - and a Demonstration Keyboard Duster (Hand Pump) (tuyere, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1133240-tpu-checkone-way-valves-no-moving-parts-and-a-demo): An all-TPU squeeze-bulb air pump with two printed duckbill check valves and a nozzle; also standalone duckbill and cross-slit valves *(licence: CC BY-NC-SA)*
  - [Squeeze Bulb Duster with Gridfinity Tray and One-Way Valve (Clough42, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/999195-squeeze-bulb-duster-with-gridfinity-tray-and-one-w): 85A TPU squeeze bulb whose base has a ball check valve made from a 6 mm airsoft BB dropped in at a print pause *(licence: BSD)*
  - [Air Blower/Bellows Dust-Off (MattoDesign, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/225914-air-blowerbellows-dust-off): Printed TPU blower bulb for dusting lenses, in short and long versions, with or without a refill hole *(licence: CC BY-NC-SA)*
  - [(Mostly) 3D printed Air Compressor / Vacuum Pump (cndewil, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1175682-mostly-3d-printed-air-compressor-vacuum-pump): See-through single-cylinder piston compressor driven by a drill, with an acrylic cylinder, O-ring seals and bought check valves; reaches about 40 psi (use it only to fill rated items, not printed tanks) *(licence: CC BY-NC)*
  - [Programmable-Air (Amitabh Shrivastava, GitHub README)](https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md): Open-hardware Arduino kit with two mini diaphragm pumps (one blowing, one sucking), valves and a pressure sensor for inflatable and vacuum soft robotics; development has moved to the Programmable-Air organisation on GitHub *(licence: MIT (repository LICENSE))*
- **diagram_idea**: A cutaway chamber with a rubber diaphragm on top pushed by a crank, and two flap valves on the side: frame one shows the diaphragm rising, the inlet flap open and air arrows coming in; frame two shows it pressing down, the inlet flap shut and the outlet flap open with arrows going out; small insets show the same cycle as a squeezed bulb and as a bike pump piston.
- **sources**: 
  - https://en.wikipedia.org/wiki/Diaphragm_pump
  - https://en.wikipedia.org/wiki/Air_pump
  - https://en.wikipedia.org/wiki/Bicycle_pump
  - https://en.wikipedia.org/wiki/Bellows
  - https://en.wikipedia.org/wiki/Hand_pump
  - https://en.wikipedia.org/wiki/Reciprocating_pump
  - https://en.wikipedia.org/wiki/Sphygmomanometer
  - https://en.wikipedia.org/wiki/Fuel_line
  - https://cs448m.github.io/lectures/machines/doc/4.pdf
  - https://www.adafruit.com/product/4699
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/LICENSE
  - https://hackaday.com/2018/05/24/programmable-air-makes-robotics-a-breeze/
  - https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
  - https://aquarium-essentials.com/how-a-fish-tank-air-pump-works/
  - https://www.aquariumcoop.com/blogs/faqs/how-to-use-a-check-valve
  - https://forum.cyclinguk.org/viewtopic.php?t=87728
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://help.prusa3d.com/article/flexible-materials_2057
  - https://help.prusa3d.com/article/pla_2062
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1133240-tpu-checkone-way-valves-no-moving-parts-and-a-demo
  - https://www.printables.com/model/999195-squeeze-bulb-duster-with-gridfinity-tray-and-one-w
  - https://www.printables.com/model/225914-air-blowerbellows-dust-off
  - https://www.printables.com/model/1000990-hand-air-pump
  - https://www.printables.com/model/1175682-mostly-3d-printed-air-compressor-vacuum-pump
  - https://www.printables.com/model/1518068-diaphragm-pump-bad
  - https://commons.wikimedia.org/wiki/File:Membraanpomp.svg
  - https://commons.wikimedia.org/wiki/File:Diaphragm_pump_animated.gif
  - https://commons.wikimedia.org/wiki/File:Diaphragm_Type_Pump.jpg
  - https://commons.wikimedia.org/wiki/File:Gardena_AquaBloom_Set_-_AIM_Technology_AM370FPW-7694.jpg
  - https://commons.wikimedia.org/wiki/File:Beurer_BC-18_-_air_pump_unit_with_Mini_Pump_KPM14A-0474.jpg
  - https://commons.wikimedia.org/wiki/Category:Diaphragm_pumps
  - https://www.youtube.com/watch?v=5a-UdttYEVs

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, compressed air, liquid, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: not applicable ⚑ *needs confirming (best guess): `power` mentions losing power, but none of the three outcomes*
- **motion_in**: back-and-forth straight, steady turning
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: slips and keeps going ⚑ *needs confirming (best guess): several overload behaviours named: clicks or pops out and resets, slips and keeps going*
- **clicks**: not applicable
- **tools**: none, soldering iron, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output

## 311 Air tank and hydraulic accumulator (pressure reservoir)

*hydraulics, pneumatics & vacuum.* A container that stores air, or oil pushed by trapped gas, a spring or a weight, under pressure so a small pump can drive short, fast bursts of motion, as in robot air tanks, water rockets and CO2 cartridges

*Also covers:* Safety is the main topic: tanks can burst and hoses whip; never hold stored pressure in a 3D-printed part.

### What it is

- **plain_name**: A strong, sealed bottle that a pump slowly fills with squashed air, so the pressure is stored like charge in a battery and can be let out in a quick, powerful burst when a valve opens. The oil version (hydraulic accumulator) is a cylinder of oil pushed on by trapped gas behind a rubber bag, by a spring or by a heavy weight
- **term**: Air tank (air receiver, compressed-air reservoir) and hydraulic accumulator
- **aliases**: 
  - air receiver (UK HSE term), compressed-air reservoir, air reservoir (truck air brakes; Wikipedia 'Air brake (road vehicle)')
  - pneumatic tank, air storage tank (FIRST Robotics Competition)
  - pressure vessel; gas cylinder or gas bottle (Wikipedia)
  - CO2 cartridge, CO2 charger, CO2 bulb or capsule (8, 12, 16 and 88 g sizes); Powerlet (brand, Crosman) (Wikipedia 'Crosman', 'Bicycle pump')
  - paintball tank, HPA (high-pressure air) tank, scuba cylinder (Wikipedia 'Water rocket', 'Crosman')
  - hydro-pneumatic accumulator or gas-charged accumulator: bladder, diaphragm, piston and metal-bellows accumulators (Wikipedia 'Hydraulic accumulator')
  - spring-loaded accumulator; raised-weight (weight-loaded) accumulator; accumulator tower (Wikipedia)
  - air chamber or air vessel (a pocket of trapped air that smooths pulses and water hammer; Wikipedia 'Hydraulic accumulator', 'Reciprocating pump')
  - pressure tank or pressurizer (well-water systems) and expansion tank or expansion vessel (heating systems) (Wikipedia)
  - water rocket pressure bottle (a PET soft-drink bottle; Wikipedia 'Water rocket')
  - pressurised reservoir of a pump-up water gun, e.g. Super Soaker (brand) (Wikipedia 'Super Soaker')
  - 'capacitor' (makers' nickname for a small reservoir after a valve; Programmable-Air README)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: springs & energy storage, brakes, dampers & speed control
- **one_liner**: A rated container that stores air (or oil pushed by trapped gas, a spring or a weight) under pressure, so a small, slow pump can fill it over time and it can then drive short, fast bursts of motion, smooth out pressure pulses or keep a system pressurised.
- **complexity**: A single strong shell plus a small assembly of fittings that act as one unit. Air tank: the tank, a filling inlet with a check valve, a pressure gauge, a safety (relief) valve, a drain valve for condensed water, a pressure switch on the compressor, a hand vent valve, and a regulator on the outlet (HSE HSG39; FIRST pneumatics manual). Hydraulic accumulator: a steel shell divided by a rubber bladder, a diaphragm, a floating piston or a welded metal bellows, with a gas-charging valve (usually a Schrader valve) on the gas side and an oil port, often with an anti-extrusion plate or spring-loaded poppet (Wikipedia 'Hydraulic accumulator'; Machinery Lubrication). A CO2 cartridge is a single sealed steel capsule pierced by the device that uses it (Wikipedia 'Crosman').
- **how_it_works**: Pumping air into a closed tank squashes it: by Boyle's law, pressure x volume stays constant, so the more air you pack in, the higher the pressure (Wikipedia 'Boyle's law'). A check valve keeps it in, and when a valve opens the air rushes out far faster than the small pump could supply, then the pump slowly refills the tank (FIRST pneumatics manual; Wikipedia 'Hydraulic accumulator'). Oil hardly compresses, so a hydraulic accumulator stores the energy in something springy behind the oil: nitrogen gas in a bladder or behind a piston, a heavy spring, or a raised weight; oil pumped in squeezes the gas, and when the system needs more than the pump gives, the gas pushes the oil back out (Wikipedia 'Hydraulic accumulator'). Gas and spring types lose pressure as they empty, a weight type stays almost constant, and a CO2 cartridge holds liquid CO2 that keeps boiling to hold about 57 bar at 20 °C until the liquid runs out (Wikipedia 'Hydraulic accumulator', 'Carbon dioxide').

### Finder attributes

- **job**: 
  - store energy: holds compressed air or pressurised oil until it is needed (Wikipedia 'Hydraulic accumulator': 'a type of energy storage device'; Wikipedia 'Air pump')
  - hold or release using power: lets a small pump drive short, fast cylinder strokes or soft-actuator moves; a hand vent valve releases all of it (FIRST pneumatics manual)
  - slow it, stop it or keep its speed steady: smooths pump pulses, absorbs water hammer, rides through small leaks and stops a pump switching on and off too often (Wikipedia 'Hydraulic accumulator', 'Pressure tank')
- **motion**: none: the tank doesn't move. Inside an accumulator a rubber bladder or diaphragm flexes, or a piston slides, as oil goes in and out (Wikipedia)
- **degrees_of_freedom**: 0: it is a fixed container; the bladder or piston inside moves with the oil but is not a joint
- **special_behaviour**: 
  - none: the tank by itself only stores pressure
  - fail-safe or breakaway (with its fittings): a safety (relief) valve vents above a set pressure and must be able to discharge more air than the compressor can supply (HSE HSG39); FIRST robots must relieve at 125 psi (FIRST pneumatics manual)
  - quick-release (with its fittings): a hand vent plug or self-venting valve empties all the stored pressure (FIRST pneumatics manual; HSE HSG39)
  - one-way (with its fittings): a check valve between pump and tank keeps the air in when the pump stops (Wikipedia 'Hydraulic accumulator': non-return valve next to the pump)
- **holding_principle**: not a holding joint (it moves or passes on motion): it stores and releases fluid pressure; nothing is held together by it
- **input_output**: Not a motion converter. As a store: slow input (a small pump running for minutes) -> fast output (a short burst of the same air or oil), at the stored pressure. The energy stored grows with pressure x gas volume; safety rules size vessels by this product (HSE HSG39: air receivers above 250 bar-litres need a written scheme of examination), and only the gas volume counts, not any liquid in the vessel (Wikipedia 'Pressure vessel'). Output pressure falls as a gas or spring accumulator empties, stays nearly constant with a raised weight (Wikipedia 'Hydraulic accumulator'), and with a CO2 cartridge stays near the vapour pressure (5.73 MPa at 20 °C, Wikipedia 'Carbon dioxide') until it chills from fast use (Wikipedia 'Crosman'). Back-drivable: not applicable
- **power**: passive (no power needed): it holds pressure with no power at all, which is exactly why it is dangerous; it stays fully pressurised after the compressor or pump is switched off until someone vents it (FIRST pneumatics manual: vent plug 'used to release all stored pressure when operated by hand'; Hydroll; Machinery Lubrication)
- **removability**: removable, but only after venting: tanks connect through threaded or push-to-connect fittings and are bolted or strapped down (FIRST pneumatics manual); disposable CO2 cartridges are pierced once and thrown away (Wikipedia 'Crosman')
- **reuse_cycles**: many times for rated metal tanks: steel cylinders can be used indefinitely if they pass periodic inspection and testing (Wikipedia 'Gas cylinder'), e.g. DOT-3AL and DOT-3AA cylinders are tested every 5 years (Wikipedia 'Hydrostatic test'); PET water-rocket bottles weaken and should be retired after 10-15 launches (NASA Glenn water rocket safety); disposable CO2 cartridges once
- **tools_needed**: spanners and thread sealant (PTFE tape) for threaded fittings; a tube cutter that cuts tubing square for push-to-connect fittings; pressure gauges; soapy water for leak-finding (FIRST: about 4 parts water to 1 part dish soap); for accumulators, a charging rig and a nitrogen bottle (Machinery Lubrication)
- **seal**: airtight or pressure: rated tanks with sealed threaded or push-to-connect fittings; a good target is less than 10 psi pressure loss in about 30 minutes (FIRST pneumatics manual). Accumulators keep gas and oil apart with a bladder, diaphragm, piston seals or welded bellows; oil slowly creeps past piston seals (Machinery Lubrication)
- **load**: heavy pressure in a small package: FIRST robots store up to 120 psi (about 8.3 bar) in tanks rated above 125 psi and use under 60 psi at the cylinders (FIRST pneumatics manual; FRC Zero); CO2 cartridges hold about 57 bar at 20 °C (Wikipedia 'Carbon dioxide'); industrial piston accumulators reach thousands of psi (Wikimedia Commons: an 80-gallon, 6,500 psi piston accumulator); water rockets are pumped to about 50 psi and never above 90 psi (NASA). Mechanically, mount the tank firmly without squeezing it, and shield it from impact (FIRST pneumatics manual)
- **adjustable**: yes: the stored pressure is set by the compressor's pressure switch and relief valve, and the working pressure by a regulator downstream (FIRST pneumatics manual); an accumulator's gas pre-charge is set through its gas valve with a charging rig, e.g. about 80% of the minimum working pressure for a bladder accumulator used as a reserve, or close to the maximum when used to absorb shocks (Machinery Lubrication)
- **play_and_precision**: not applicable
- **access_needed**: end of a tube or shaft: connections are made at the tank's ports or neck; the drain valve, safety valve, gauges and vent must stay easy to reach and see (HSE HSG39; FIRST pneumatics manual)
- **materials**: Tanks and cylinders: steel, aluminium, or composite-wrapped metal or plastic liners (Type 1-5 cylinders; Wikipedia 'Gas cylinder'); some rated robot tanks are plastic (FRC Zero); CO2 cartridges are steel (Wikipedia 'Crosman'). Water rockets: PET soft-drink bottles (Wikipedia 'Water rocket'). Accumulator separators: rubber bladders and diaphragms, pistons, welded metal bellows; gas charge: dry nitrogen only (Wikipedia 'Hydraulic accumulator'; Machinery Lubrication). Not suitable: PVC pipe for compressed air (OSHA) and 3D-printed plastic (CVRA test; Prusa: PLA 'breaks along layers or into shards upon impact')
- **maker_difficulty**: easy to buy and fit a rated tank, cartridge or accumulator and its standard valves (FIRST pneumatics manual); hard and dangerous to make your own: don't build pressure tanks from printed parts or PVC pipe (CVRA test; OSHA)

### Making it

- **processes**: 
  - off-the-shelf part: rated air tanks and receivers, robot air tanks, gas and CO2 cylinders and cartridges, hydraulic accumulators, well pressure tanks and expansion vessels; PET drink bottles for water rockets, used within published limits (FIRST pneumatics manual; Wikipedia; NASA)
  - 3D print (FDM): only for parts that never hold pressure, such as tank mounts, guards and water-rocket nose cones and fins (Printables 811753 and 1393152)
- **print_in_place**: no: never hold stored pressure in a 3D-printed part; print only mounts, shields and other parts that carry no pressure
- **making_tips_3d_printing**: 1) Don't print the tank, its caps or its adapters. A club built a printed PLA air tank for a 4 bar robot: a 65 x 40 x 80 mm version exploded into pieces 'just centimeters' from the maker's face at 5.5 bar, and the version that survived still leaked at the corners (CVRA, reported by Hackaday). Printed PLA 'breaks along layers or into shards upon impact' and softens above about 60 °C (Prusa PLA guide), and FDM prints leak through their layers. 2) Do print the things around a rated tank: clamps and mounts (e.g. Printables 811753 for Clippard (brand) robot tanks), impact guards and labels. Don't over-tighten the clamp or squeeze the tank, and place it where other robots or tools can't hit it (FIRST pneumatics manual). Use PETG for mounts near a warm compressor (Prusa: PETG suits temperatures below about 80 °C). 3) Water rockets: the pressure must be held by a real PET drink bottle, not a print; printed nose cones and fins are fine, ideally in flexible TPU for safety (Marimo Labs, Printables 1393152). 4) Hydrostatic (water-filled) testing is far safer than air testing, because liquid stores little energy, but it is not a licence to use printed vessels (Wikipedia 'Hydrostatic test').
- **off_the_shelf_parts**: Rated air tanks and air receivers (marked with their safe working pressure; HSE HSG39); robot air tanks, e.g. Clippard (brand) tanks for FIRST robots (Printables 811753); compressor with pressure switch; safety (pressure relief) valve; pressure gauges; vent plug or self-venting (3-port) ball valve; check valve; pressure regulator; manual or automatic drain valve; push-to-connect and threaded pneumatic fittings, PTFE tape (FIRST pneumatics manual; HSE HSG39); CO2 cartridges (8, 12, 16 and 88 g) and CO2 inflator heads or regulators (Wikipedia 'Crosman', 'Bicycle pump'); paintball and HPA cylinders; hydraulic accumulators (bladder, diaphragm, piston, metal bellows) with charging rigs (Wikipedia; Machinery Lubrication); well pressure tanks and expansion vessels (Wikipedia); hose restraints (whip checks, 'whiplash arrestors'; Wikipedia 'Hydrostatic test'), air fuses and hose-rupture valves, and self-venting quick couplings (HSE HSG39)
- **rules_of_thumb**: 
  - Use only tanks rated above the highest pressure the pump can make: FIRST robots store at most 120 psi in tanks rated above 125 psi, with a relief valve at 125 psi, a regulator down to 60 psi or less for the actuators, two gauges and a hand vent plug (FIRST pneumatics manual; FRC Zero)
  - A safety valve must be able to let out more air than the compressor can push in, and must open as soon as the safe working pressure is exceeded; the tank also needs a gauge and a drain (HSE HSG39)
  - A tank only helps while its pressure is above the working pressure: once it drops to the pressure the cylinders use, they slow down or stop (FIRST pneumatics manual). By Boyle's law (pressure x volume is constant at constant temperature; Wikipedia), each 1 bar (about 1 atmosphere) the tank drops releases about the tank's own volume of free air; calculated example: a 1 L tank going from 8 bar to 4 bar gauge gives out about 4 L of free air
  - Industrial receivers are usually sized at 6-10 times the compressor's free-air output in litres per second (HSE HSG39); for robots, simulate tank pressure over a match with a calculator such as ReCalc (FIRST pneumatics manual)
  - Leak test: aim for less than 10 psi drop over about 30 minutes; find leaks with about 4:1 water and dish soap (FIRST pneumatics manual)
  - Pre-charge accumulators only with dry nitrogen, never air or oxygen, which can explode on contact with oil under pressure; release all oil pressure before checking the pre-charge (Machinery Lubrication; Wikipedia 'Hydraulic accumulator'; Hydroll)
  - A gas or spring accumulator loses pressure as it empties; a weight-loaded one gives almost constant pressure (Wikipedia 'Hydraulic accumulator')
  - Water rockets: pump to about 50 psi and never above 90 psi; retire bottles after 10-15 launches; keep spectators back about 26 m at 20 psi, 51 m at 40 psi, 77 m at 60 psi and 102 m at 80 psi (NASA Glenn water rocket safety)
  - CO2 is about 57 bar (5.73 MPa) at 20 °C and becomes supercritical above about 31 °C at 73.8 bar, so its pressure climbs steeply when warm; emptying it fast chills it and the pressure drops (Wikipedia 'Carbon dioxide', 'Crosman')
  - High-pressure cylinders need periodic testing, e.g. every 5 years for DOT-3AL and DOT-3AA cylinders (Wikipedia 'Hydrostatic test'); UK air receivers above 250 bar-litres are examined every 24-48 months under a written scheme (HSE HSG39)
  - Quick-connect hoses wider than 10 mm, longer than 10 m or above 7 bar should have self-venting couplings, or air fuses or hose-rupture valves, to stop them whipping when uncoupled (HSE HSG39)

### When to use it

- **everyday_examples**: 
  - The tank on a workshop air compressor (Wikipedia 'Air pump': the compressor's energy 'is stored in a tank')
  - A bike CO2 inflator with a 16 g cartridge (Wikipedia 'Bicycle pump')
  - A pump-up water gun with a pressurised reservoir, such as a Super Soaker (brand), and a water rocket made from a drink bottle (Wikipedia 'Super Soaker', 'Water rocket')
  - The pressure tank of a home well-water pump or the expansion vessel of a central-heating system (Wikipedia 'Pressure tank', 'Expansion tank')
- **when_to_use**: Add an air tank when a small compressor must drive short, fast moves, such as robot cylinders that act in bursts, or when you want to pre-charge air and run pneumatics without a compressor running all the time (FIRST pneumatics manual). Add a small reservoir after a valve to smooth pressure for soft actuators (Programmable-Air README calls it a 'capacitor'). Use a hydraulic accumulator to give a short burst of oil far bigger than the pump could supply, to absorb pump pulses and water hammer, to keep pressure through small leaks, or as an emergency reserve, e.g. to apply a brake when power fails (Wikipedia 'Hydraulic accumulator'; Machinery Lubrication). Use a pressure tank to stop a water pump switching on and off for every small draw (Wikipedia 'Pressure tank'), and a CO2 cartridge for a small, portable, one-off gas supply such as tyre or life-jacket inflation (Wikipedia 'Carbon dioxide', 'Bicycle pump').
- **when_not_to_use**: 1) Never make a tank from 3D-printed parts or PVC pipe; buy a rated one (CVRA; OSHA). 2) Never use stored air to fire projectiles (FRC Zero: 'Never use compressed air to propel a projectile'). 3) If the job is small and slow, such as a hobby soft robot, you may not need stored pressure at all: run the pump directly or use suction, which can never push harder than the atmosphere (about 1 bar) ⚑ [uncertain: design advice, no single source]. 4) Don't feed actuators straight from the tank: use a regulator to get a steady working pressure (FIRST pneumatics manual). 5) Don't charge a hydraulic accumulator with air or oxygen (Machinery Lubrication). 6) A tank is not a safety device: it still needs its own relief valve, gauge and vent (HSE HSG39). *(⚑ parts need confirming)*
- **environment_limits**: Heat: gas pressure rises with temperature, steeply for CO2 (about 57 bar at 20 °C and supercritical above about 31 °C; Wikipedia 'Carbon dioxide'). Cold: fast discharge chills cartridges and lowers their pressure (Wikipedia 'Crosman'), and chilled PVC and ABS become brittle (Wikipedia 'Water rocket'). Water and corrosion: compressed air condenses water, so receivers need draining, and corrosion fatigue weakens them until they can explode (HSE HSG39). Chemicals: polycarbonate filter bowls can be weakened by solvents, alcohols and cleaning fluids, and even minor knocks may make damaged bowls explode (HSE HSG39). Store hoses away from heat sources and direct sunlight (FRC Zero). Fatigue: PET bottles weaken with repeated filling and should be retired after 10-15 launches (NASA). Creep: oil slowly passes accumulator piston seals and the gas pre-charge must be checked (Machinery Lubrication); air dissolves into the water of un-bladdered pressure tanks until they become 'waterlogged' (Wikipedia 'Pressure tank'). CO2 escapes through rubber inner tubes faster than air (Wikipedia 'Bicycle pump'). Printed PLA softens above about 60 °C (Prusa).
- **safety_notes**: This is the main topic for this entry. 1) Bursting: 'vessels containing compressed air, even at comparatively low pressure, can explode violently once their integrity is lost' (HSE HSG39); the main causes are exceeding the safe working pressure and loss of strength from corrosion fatigue (HSE HSG39). FRC Zero lists 'Tank Shattering' as a hazard. 2) Never hold stored pressure in a 3D-printed part: a printed PLA tank exploded at 5.5 bar centimetres from its maker's face, and the maker warns that 2 bar is enough to do nasty damage (CVRA). Never use PVC pipe for compressed air: OSHA's position is that PVC pipe 'shall not be used' for it, after plastic fragments from a ruptured PVC air line cut a worker's hand (OSHA). 3) Whipping hoses: a burst or uncoupled hose can 'whip' and 'snake' dangerously; restrain hoses and use self-venting couplings or air fuses (HSE HSG39); leaks can also push hoses off their fittings (FRC Zero). 4) Air on skin: compressed air can enter body openings with severe, often fatal, injuries and can penetrate skin; never point it at anyone, even at 15 psig (HSE HSG39; FRC Zero). Wear safety glasses (FRC Zero). 5) Stored pressure stays after the compressor stops: always vent the system with the vent valve before touching fittings or cylinders (FIRST pneumatics manual; HSE HSG39 recommends lockable venting valves). 6) Hydraulic accumulators stay charged after the pump is off: release all pressure before working on them (Hydroll; Machinery Lubrication); a jet of hydraulic oil or grease can be injected under the skin, with injuries reported above 100 bar and possibly as low as 7 bar, needing urgent hospital treatment (HSE hydraulic injection injury alert). Pre-charge only with nitrogen, never air or oxygen, which can explode with oil (Machinery Lubrication). 7) Water rockets: pump to about 50 psi and never above 90 psi, retire bottles after 10-15 launches because they 'can weaken and will explode', wear eye protection, keep people well back, never stand over a pressurised rocket, and remember a rocket that didn't launch is still pressurised (NASA). 8) CO2 and gas cylinders: keep them cool, use a regulator, and leave very high-pressure cylinders to trained people (Wikipedia 'Water rocket'; Wikipedia 'Carbon dioxide' for the temperature effect).
- **common_failures**: 1) Leaks at threaded fittings without sealant, at push-to-connect fittings with tubing cut off-square or not pushed fully home, from a missing plug, or from a relieving regulator fitted backwards (FIRST pneumatics manual). 2) Tank too small: the pressure falls below the working pressure part-way through use, so cylinders slow or stop (FIRST pneumatics manual). 3) Relief valve missing, wrongly set or blocked, letting pressure climb past 125 psi on a robot (FIRST pneumatics manual) or past a receiver's safe working pressure (HSE HSG39). 4) Water left in the tank, causing corrosion and blocked valves (HSE HSG39). 5) Accumulator pre-charge lost or set too high, which can cut the bladder; neglecting it 'can destroy an operating accumulator' (Machinery Lubrication; Wikipedia). 6) Pressure tanks becoming 'waterlogged' and short-cycling the pump (Wikipedia 'Pressure tank'). 7) CO2 devices 'freezing up' and losing pressure when used rapidly (Wikipedia 'Crosman'). 8) Plastic bottles and printed parts fatiguing, leaking at corners or bursting (NASA; CVRA). 9) Hoses slipping off fittings or whipping (FRC Zero; HSE HSG39).
- **related**: 
  - Gas spring: a sealed strut whose trapped gas is the spring; the pressure never leaves it
  - Coil spring and other springs & energy storage entries: store energy mechanically, with no gas to escape
  - Air or hydraulic cylinder: what the tank's stored air usually drives
  - Pressure regulator: turns the tank's high, falling pressure into a steady working pressure
  - Pressure relief valve: the spring-loaded valve that stops a tank being over-filled; every tank needs one
  - Check valve: keeps the air in the tank when the pump stops
  - Shut-off valve: the hand valve, ideally self-venting, used to isolate and empty the tank
  - Diaphragm pump and squeeze bulb: the small pumps that fill small reservoirs
  - Quick couplers for tubes and hoses: self-venting versions stop hoses whipping when uncoupled
  - Dampers: an air chamber or accumulator also cushions pressure spikes, much as a damper cushions motion

### Pictures, videos and models

- **links**: 
  - [Hydraulic accumulator.svg (MasterTriangle12; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_accumulator.svg): Cutaway of a bladder-type hydraulic accumulator: oil fills around the rubber bladder, compressing the gas sealed inside the shell *(licence: CC BY-SA 4.0)*
  - [Pressure tanks empty and in use.jpg (PAR; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pressure_tanks_empty_and_in_use.jpg): Diagram of a diaphragm pressure tank empty at its charging pressure and in use with water squeezing the air, labelled with the pressures and volumes *(licence: CC0)*
  - [Water rocket.gif (Anynobody; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Water_rocket.gif): Animated illustration of a water rocket: compressed air in the bottle forces the water out of the nozzle *(licence: CC BY-SA 3.0 / GFDL)*
  - [Bicycle CO2 inflator with threaded 16 g cartridges (JaredMcKenzie; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bicycle_CO%E2%82%82_inflator_with_threaded_16_g_cartridges.jpg): A bike CO2 inflator head on a threaded 16 g cartridge, with three spare cartridges *(licence: CC0)*
  - [Water Rocket Safety (NASA Glenn Research Center)](https://www.grc.nasa.gov/www/k-12/rocket/BottleRocket/safety.htm): Safety rules for pressurised bottle rockets, including the maximum pressure, bottle retirement and a table of safe distances for each pressure *(licence: NASA web page (link))*
- **make_it_yourself**: 
  - [FRC Clippard Air Tank Mount - Single and Dual (DeclanD_, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/811753-frc-clippard-air-tank-mount-single-and-dual): Printed clamps that hold rated Clippard (brand) robot air tanks to 1 x 1 in framing; the printed part carries no pressure *(licence: Public domain)*
  - [Water Rocket Parts for 0.5L Polar Seltzer Bottle (Marimo Labs, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1393152-water-rocket-parts-for-05l-polar-seltzer-bottle): Printed nose cones (in TPU 'for safety and durability') and fins that clip onto a 0.5 L PET bottle; the bottle, not the print, holds the pressure. Pair with a launcher that follows NASA's pressure limits *(licence: CC BY-NC-SA)*
  - [ReCalc pneumatics calculator (FRC & FTC robotics design calculator)](https://www.reca.lc/pneumatics): Web calculator that simulates air-tank pressure over a robot match from tank size, compressor and cylinder use, recommended by the FIRST pneumatics manual *(licence: Free web tool (licence not stated))*
- **diagram_idea**: Three side-by-side cutaways: an air tank being slowly filled by a small pump through a check valve and then emptying in one big puff through an opened valve into a cylinder, with a relief valve and gauge on top; a bladder accumulator with oil squeezing a gas bag; and a weight-loaded accumulator with a heavy block pressing a piston, each with a small gauge showing how the pressure changes as it empties.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hydraulic_accumulator
  - https://en.wikipedia.org/wiki/Pressure_vessel
  - https://en.wikipedia.org/wiki/Hydrostatic_test
  - https://en.wikipedia.org/wiki/Gas_cylinder
  - https://en.wikipedia.org/wiki/Water_rocket
  - https://en.wikipedia.org/wiki/Carbon_dioxide
  - https://en.wikipedia.org/wiki/Crosman
  - https://en.wikipedia.org/wiki/Bicycle_pump
  - https://en.wikipedia.org/wiki/Air_pump
  - https://en.wikipedia.org/wiki/Boyle%27s_law
  - https://en.wikipedia.org/wiki/Pressure_tank
  - https://en.wikipedia.org/wiki/Expansion_tank
  - https://en.wikipedia.org/wiki/Super_Soaker
  - https://en.wikipedia.org/wiki/Air_brake_(road_vehicle)
  - https://en.wikipedia.org/wiki/Reciprocating_pump
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-components/
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.osha.gov/publications/hib19880520
  - https://hackaday.com/2016/06/02/3d-printing-compressed-air-tanks/
  - https://cvra.ch/blog/2016/airtank
  - https://www.machinerylubrication.com/Read/31732/understanding-hydraulic-accumulators
  - https://www.hydroll.com/en/why-must-hydraulic-pressure-be-released-before-checking-accumulator-pre-charge/
  - https://www.grc.nasa.gov/www/k-12/rocket/BottleRocket/safety.htm
  - https://www.nasa.gov/wp-content/uploads/2021/11/sls-activity-four-optimize-a-water-rocket.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md
  - https://www.reca.lc/pneumatics
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/811753-frc-clippard-air-tank-mount-single-and-dual
  - https://www.printables.com/model/1393152-water-rocket-parts-for-05l-polar-seltzer-bottle
  - https://commons.wikimedia.org/wiki/File:Hydraulic_accumulator.svg
  - https://commons.wikimedia.org/wiki/File:Pressure_tanks_empty_and_in_use.jpg
  - https://commons.wikimedia.org/wiki/File:Water_rocket.gif
  - https://commons.wikimedia.org/wiki/File:Bicycle_CO%E2%82%82_inflator_with_threaded_16_g_cartridges.jpg
  - https://commons.wikimedia.org/wiki/File:Kocsis_Tech_80gal_6.5ksi_piston_accumulator.JPG

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** when_not_to_use

## 312 Pressure regulator (pressure-reducing valve)

*hydraulics, pneumatics & vacuum.* A spring-and-diaphragm valve that turns a high supply pressure down to a steady working pressure that you set, and holds it there as air is used

*Also covers:* Often confused with the Pressure relief valve, which only opens in an emergency

### What it is

- **plain_name**: A knob-and-gauge valve that takes the high, falling pressure from a tank, compressor or gas bottle and lets out air (or gas, or water) at a lower, steady pressure that you choose, topping it up by itself as the air is used
- **term**: Pressure regulator (pressure-reducing regulator, pressure-reducing valve, PRV)
- **aliases**: 
  - pressure-reducing valve (PRV) or pressure reducer; Tameson notes that 'reducer' is often used for liquids and 'regulator' for gases, but the naming is not consistent
  - air regulator, air compressor regulator, compressed-air regulator, pneumatic pressure regulator (Tameson)
  - filter-regulator (FR) and filter-regulator-lubricator (FRL) set, when combined with an air filter and an oiler (HSE HSG39 para 109)
  - gas regulator, gas governor (natural-gas industry), propane or LP-gas regulator, cylinder regulator, welding regulator (Wikipedia)
  - water pressure-reducing valve, water pressure regulator, RV (camper) water regulator (Wikipedia; Tameson)
  - single-stage and two-stage (double-stage) regulator; direct-operated (self-operated) and pilot-operated regulator (Wikipedia; Tameson)
  - relieving (self-relieving) and non-relieving regulator (Tameson; FIRST pneumatics manual)
  - diving regulator first stage, which reduces tank pressure to an 'interstage' pressure (Wikipedia 'Diving regulator')
  - 'primary regulator' (FIRST Robotics Competition rules)
  - not to be confused with: pressure relief valve (safety valve), back-pressure regulator (pressure-sustaining valve) or flow control valve
- **family**: hydraulics, pneumatics & vacuum
- **one_liner**: A self-adjusting valve with a spring-loaded diaphragm that lowers a high supply pressure to a steady working pressure you set with a knob, opening a little more as air is used and closing as pressure builds, so tools, cylinders and soft actuators only get the pressure they need.
- **complexity**: A small assembly that acts as one unit: a body with inlet and outlet ports (and usually a gauge port), a small valve (poppet) and its seat, a light poppet spring, a diaphragm or piston that senses the outlet pressure, a large adjusting (loading) spring, and an adjusting knob or screw, often with a lock (Wikipedia; Tameson). Relieving types have a small vent through the middle of the diaphragm to a weep hole (Tameson). A two-stage regulator is two of these in series in one body (Wikipedia).
- **how_it_works**: Three parts do the job: a restricting element (the poppet valve), a loading element (the adjusting spring) and a measuring element (the diaphragm) (Wikipedia). With no pressure, the adjusting spring pushes the diaphragm down and holds the poppet open (it is a normally-open valve), so air flows through; as the outlet pressure builds it pushes up on the diaphragm against the spring and lets the poppet close until the forces balance (Wikipedia; Tameson). When air is used downstream the outlet pressure dips, the spring wins and the poppet opens a little more, so the flow matches the demand while the pressure stays nearly steady (negative feedback; Wikipedia). Turning the knob compresses the spring more, so a higher outlet pressure is needed to balance it (Wikipedia).

### Finder attributes

- **job**: 
  - change speed or turning force: lowering the pressure lowers the push of every air cylinder and soft actuator after it, because cylinder force = piston area x pressure (FIRST pneumatics manual)
  - seal it, or pass cables or fluid through: passes air, gas or water on at a steady, lower pressure (Wikipedia)
  - slow it, stop it or keep its speed steady: a lower pressure also slows cylinders and saves air, though a speed-control valve slows them while keeping full force (FIRST pneumatics manual)
- **motion**: multiple: you turn the knob (rotate) to set it; inside, the diaphragm flexes and the poppet slides a fraction of a millimetre by itself, all the time, to hold the pressure (Wikipedia)
- **degrees_of_freedom**: 1: the diaphragm and poppet move together along one line to open or close the valve; the knob is a setting, not a working motion
- **special_behaviour**: 
  - none: it does none of the listed mechanical tricks. Its own clever trick is self-regulation (negative feedback): the outlet pressure pushing on the diaphragm against the spring you set opens or closes the valve by itself to hold the pressure steady (Wikipedia). Relieving (self-relieving) types also let extra downstream pressure out through a weep hole, for example when you turn the setting down (Tameson), but that is not a substitute for a relief valve
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes fluid on at a set pressure
  - spring force: the adjusting spring sets the pressure, and the outlet pressure acting on the diaphragm balances it (Wikipedia)
- **input_output**: Not a motion converter. As a fluid device: high, varying inlet pressure -> lower, steady outlet pressure set by the knob. It can only lower pressure, never raise it, so the supply must stay above the highest pressure you need (Tameson). Example: FIRST robots store air at about 120 psi (8.3 bar) and regulate it to 60 psi (4.1 bar) or less for the actuators (FIRST pneumatics manual). Flow goes one way, inlet to outlet, but a water pressure-regulating valve does not act as a check valve (Wikipedia).
- **power**: passive (no power needed): the supply pressure and the spring do all the work; if the supply fails, the outlet simply falls to zero. The powered alternative is electronic pressure control, where a microcontroller reads a pressure sensor and pulses switching valves (Programmable-Air README)
- **removability**: removable: screwed into the line with threaded ports and fittings (or push-in fittings) and mounted with a bracket or panel nut; let the pressure out before unscrewing it (FIRST pneumatics manual; Tameson)
- **reuse_cycles**: many times: it can be refitted many times and adjusts itself continuously in use; diaphragms eventually crack after many pressure changes, and small cheap regulators are usually replaced whole rather than repaired (Tameson)
- **tools_needed**: Spanners and thread sealant (if you use PTFE tape, leave the last one or two threads bare so tape can't get inside); hold the regulator in one hand while screwing a fitting in with the other so it isn't strained; the bracket and nut kit for mounting; no tools to adjust: pull the knob out to unlock it, turn it, push it in to lock (Tameson; FIRST pneumatics manual)
- **seal**: airtight or pressure: O-rings, the diaphragm and a soft-sealed poppet seal it (Tameson). A relieving regulator deliberately lets a little air out of its weep hole when the outlet is above the setting (Tameson). A dirty or worn seat lets pressure 'creep' through when no air is being used (Tameson)
- **load**: Pressure capacity rather than structural load: direct-operated regulators work at up to about 35 bar (500 psi) (Tameson); gas-cylinder and scuba regulators take 200 bar or more at the inlet (Wikipedia). Structurally light: support it with its bracket, not by the pipes or tubes (FIRST pneumatics manual; Tameson)
- **adjustable**: yes: turn the knob clockwise to raise and anticlockwise to lower the outlet pressure while watching the outlet gauge; many knobs pull out to unlock and push in to lock (Tameson). Some stages are preset, such as the first stage of a two-stage regulator (Wikipedia). Where over-pressure is risky, HSE recommends tamper-resistant knobs, positive internal stops or locks, or non-adjustable models (HSE HSG39 para 90)
- **play_and_precision**: not applicable for position. Pressure accuracy: the outlet pressure sags as the flow rises ('droop'), worse in an undersized regulator (Tameson); it rises slightly as the supply pressure falls ('supply pressure effect'; Tameson; Wikipedia); friction causes hysteresis and too little damping causes hunting (oscillation) (Wikipedia). Simple direct-operated regulators may only be 10-20% accurate at higher pressures (Tameson); two-stage regulators hold their setting better as a tank empties (Wikipedia). A 3D-printed micro-regulator held set points of 1.1, 5.2 and 10.2 kPa with errors of 1.1-2.2% over 5 days (Nature µPR paper)
- **access_needed**: end of a tube or shaft: fitted in line where the pipe or tube is cut, or straight onto a compressor, tank or gas-bottle outlet; leave room to reach the knob and read the gauge (Tameson; FIRST pneumatics manual)
- **materials**: Bodies: brass (common and economical), plastic (cheap, disposable), aluminium (light) or stainless steel (corrosive, clean or hot uses) (Tameson). Seals and diaphragms: nitrile (NBR) or neoprene for about -40 to 82 °C, EPDM or FKM for higher temperatures (Tameson). Filter-regulator bowls: transparent polycarbonate or polyamide, or metal (HSE HSG39 para 89). Experimental printed regulators: gas-tight SLA resin with a 100 µm Kapton film diaphragm, a Viton O-ring on the poppet and rubber O-rings (Nature µPR paper)
- **maker_difficulty**: easy to buy and fit: screw an off-the-shelf regulator with a gauge after the tank or compressor. Hard to make: it must seal at a tiny seat and diaphragm and its inlet sees the full supply pressure, so home-made printed regulators are only for very low pressures, such as 1-10 kPa from a small battery air pump (Nature µPR paper)

### Making it

- **processes**: 
  - off-the-shelf part: compressed-air, water and gas regulators, miniature and precision regulators, filter-regulators and FRL units (Tameson; HSE HSG39; Wikipedia)
  - 3D print (resin): research micro-regulators for very low pressures (1-10 kPa) printed on an SLA printer (Nature µPR paper)
  - 3D print (FDM): mounts, brackets, knobs and gauge guards for bought regulators (Printables models), not the parts that hold pressure
- **print_in_place**: no: a regulator needs a separate diaphragm, springs, O-rings and a poppet, so printed versions are separate parts assembled with bought pieces (Nature µPR paper; Printables 'Bottle Cap Pressure Regulator')
- **making_tips_3d_printing**: 1) Don't print the pressure-holding parts of a regulator for compressor, tank or gas-bottle pressures. A printed PLA air tank burst 'centimeters' from its maker's face at 5.5 bar, and he warns that 2 bar is enough to do nasty damage (CVRA); even the author of an open-source PETG regulator (printed at 100% infill, max input 150 psi) warns never to stand within 100 ft of it while it is pressurised above 14.7 psi (Matt-Aero DIY-Pressure-Reg). Buy a metal regulator for those. 2) For very low pressures (microfluidics, small soft actuators) a printed regulator can work: the Nature µPR was printed in gas-impermeable SLA resin (Formlabs Dental SG, brand), with a 100 µm Kapton diaphragm, a Viton O-ring on the poppet, printed cantilever springs (0.5 x 0.5 x 5 mm) instead of coil springs, an M2 bolt as the adjusting knob with a 24-position dial, and printed clamps squeezing O-rings to seal the stack; it turned a 41 kPa mini pump into an adjustable 1-10 kPa (Nature µPR paper). 3) The spring sets the range and sensitivity: longer, thinner printed springs make it more sensitive, and a fine thread gives fine adjustment (Nature µPR paper). 4) Resin printing suits the small sliding and sealing surfaces: one printed bottle-cap regulator is described as 'only suited for resin printers' and uses a rubber membrane cut from a bike inner tube and a pen spring (Printables 'Bottle Cap Pressure Regulator'); treat such designs as study models, because the printed cap holds the bottle's stored pressure. 5) The safe, useful prints are mounts and guards for bought regulators: one regulator mount is printed in PETG at 100% infill (Printables 'Air Pressure Regulator Mount'). 6) On the vacuum side, an adjustable printed leak that lets a little air into the line can set the vacuum level; its maker sands the mating faces flat with 400-grit paper on a mirror and greases them to seal (Printables 'Vaccum Pump Pressure Regulator').
- **off_the_shelf_parts**: Compressed-air pressure regulators (relieving or non-relieving) with 1/8 in or 1/4 in ports and a gauge port; miniature, precision and inline regulators; filter-regulators (FR) and filter-regulator-lubricator (FRL) units; pressure gauges (Bourdon gauges) and port plugs; mounting brackets and panel nuts; low-pressure regulators with large diaphragms; vacuum regulators; back-pressure regulators; single- and two-stage gas-cylinder regulators (CO2, oxygen, welding gases) with inlet and outlet gauges; propane and LP-gas regulators; water pressure-reducing valves and screw-on RV hose regulators; robotics-kit 'primary' regulators (FIRST pneumatics manual; Tameson; Wikipedia; HSE HSG39). Pair it with a pressure relief valve downstream (HSE HSG39 para 91).
- **rules_of_thumb**: 
  - Fit a regulator wherever equipment could be damaged by over-pressure, set to a safe constant downstream pressure, with a pressure gauge on its outlet side (HSE HSG39 para 90)
  - A regulator can only lower pressure: the supply must stay above the highest pressure any tool needs (Tameson 'The Basics of Pressure Regulators')
  - Set the outlet no higher than about 90% of the inlet pressure, or fluctuations in the supply can reach and damage downstream parts (Tameson 'Air Pressure Regulator Troubleshooting and Replacement')
  - Robot example: store at up to 120 psi, regulate to 60 psi or less for actuators; solenoid valves need at least 15-30 psi to work, though a second regulator after the valve can get round this (FIRST pneumatics manual)
  - Around 6 bar (87 psi) is the typical maximum operating pressure of many air tools; always check the tool's own minimum and maximum (Tameson 'Adjusting an Air Compressor Pressure Regulator')
  - Cylinder force = piston area x pressure, so the regulator sets the force; an extra regulator before one valve lowers both directions of that actuator, and one after the valve on a single port lowers only that direction (FIRST pneumatics manual)
  - Size it for the flow: a regulator too small for the flow 'droops' (outlet pressure falls as flow rises); use the maker's flow curves (Tameson 'Air Pressure Regulator Troubleshooting and Replacement')
  - From a tank or gas bottle whose pressure falls, use two regulators in series or a two-stage regulator, because a single-stage outlet pressure creeps up as the supply empties ('end-of-tank dump') (Tameson; Wikipedia)
  - Put a filter upstream: small particles stop the seat closing fully and cause 'creep' (Tameson)
  - Creep test: shut off downstream flow, note the outlet pressure and check again after 15 minutes; a rise means the seat is leaking (Tameson 'Air Pressure Regulator Troubleshooting and Replacement')
  - Fit it the right way round (flow arrow; on robot regulators the outlet usually has the larger boss with an arrow) and plug any unused gauge port (FIRST pneumatics manual; Tameson)
  - Soft-robot systems usually work between about -0.5 and +2.5 atm (Programmable-Air README), far below workshop air pressure, so regulate down and add a relief valve

### When to use it

- **everyday_examples**: 
  - The knob and small gauge on a workshop air compressor that you set for a nail gun or tyre inflator (Tameson)
  - The regulator on a barbecue or camping-gas bottle, which delivers about 28 mbar (butane) or 37 mbar (propane) whatever the bottle pressure (Wikipedia)
  - The pressure-reducing valve where the water main enters a house, or the screw-on hose regulator for a camper van (Wikipedia; Tameson)
  - A scuba diver's first stage, and the two-gauge regulator on a welding-gas, oxygen or CO2 bottle (Wikipedia)
- **when_to_use**: Whenever the supply pressure is higher than what the thing you are driving needs or can survive: running air tools, airbrushes and paint guns from a compressor (Tameson); feeding robot cylinders from a high-pressure storage tank (FIRST stores at 120 psi and works at 60 psi); taking gas from a CO2, welding or propane bottle (Wikipedia); protecting soft actuators, balloons and plastic parts from full tank pressure; setting how hard a cylinder pushes or clamps without changing the cylinder (FIRST); giving each machine or actuator its own pressure from a shared line, such as a gentle clamp next to a hard-pushing drill feed (HSE HSG39 para 109; LibreTexts 20.1); and holding a steady pressure as a tank empties (Wikipedia; Tameson).
- **when_not_to_use**: It is not a safety device: if it fails, sticks open or creeps, the full supply pressure reaches everything downstream (Tameson), so also fit a pressure relief valve set below the weakest part (HSE HSG39 paras 91 and 112). To cap the maximum pressure of a pump or tank, use a relief valve; to keep the pressure upstream of a point steady, use a back-pressure regulator (pressure-sustaining valve) (Wikipedia). To set how fast a cylinder moves while keeping its full force, use a speed-control (flow control) valve; lowering the pressure slows it too, but also cuts its force (FIRST pneumatics manual). It can't raise pressure: that needs a pump or booster (Tameson). For pressures that must change quickly under program control, a pressure sensor with switching valves suits better (Programmable-Air README). Don't 3D print one for compressor or bottle pressures (CVRA).
- **environment_limits**: Seals set the temperature range: nitrile (NBR) or neoprene about -40 to 82 °C, EPDM or FKM for hotter use (Tameson). Cold: regulators fed with fast-flowing gas can freeze, a known problem for diving regulators in cold water (Wikipedia 'Diving regulator'). Dirt: small particles stop the seat closing and cause creep, so filter the supply (Tameson). Hard water: mineral deposits can block water regulators; soak the parts in limescale remover (Tameson). Oils: unsuitable lubricating oils and many pressure cycles eventually crack the diaphragm (Tameson). Chemicals: transparent polycarbonate filter-regulator bowls can be weakened by solvents, alcohols, cleaning solutions and synthetic lubricants, and a damaged bowl can explode after a minor knock (HSE HSG39 para 89). Temperature also changes the supply: propane tank pressure swings with temperature, which is why propane always needs a regulator (Wikipedia). Age: water regulators are typically replaced every 10-15 years or as needed (Tameson 'How to Install a Pressure Regulator').
- **safety_notes**: 1) A regulator is not a safety valve: if its seat leaks or it fails, downstream parts can see the full supply pressure (Tameson; Wikipedia 'Diving regulator' describes over-pressurised hoses when a first stage leaks), so fit a pressure relief valve set below the safe pressure of what it feeds (HSE HSG39 paras 91 and 112). 2) Gas-bottle regulators: a single-stage regulator's outlet rises as the bottle empties and can 'dump' the rest of the tank, and two-stage regulators may carry safety valves between stages (Wikipedia). 3) Some regulators should be installed with the glass case of the gauge facing away from the user, because a bad connection can let high pressure blow the case off (Tameson 'How to Install a Pressure Regulator'); shield plastic filter-regulator bowls (HSE HSG39 para 89). 4) Shut off the supply and release the trapped pressure before fitting or removing one, and wear gloves and goggles (Tameson). 5) Lock or tamper-proof the setting where an over-pressure would be dangerous, and check it hasn't been tampered with (HSE HSG39 paras 90 and 165); blow guns should be fed through a pre-set tamper-proof regulator set below the normal 80 psi line pressure (HSE HSG39 para 104). 6) Never point compressed air at anyone: even 15 psig can cause serious injury (FRC Zero). 7) Never hold stored pressure in a 3D-printed part (CVRA).
- **common_failures**: 1) Creep: the outlet pressure slowly rises to the supply pressure because dirt or a worn seat stops the poppet closing; fit a filter upstream and keep debris and sealant out when installing (Tameson). 2) A cracked diaphragm, from unsuitable oils or many pressure cycles, makes it leak constantly from the weep hole or knob and lose control (Tameson). 3) Droop: an undersized regulator lets the pressure sag when a big tool runs (Tameson). 4) Outlet rising as the tank empties (supply pressure effect, 'end-of-tank dump'); readjust, or use a two-stage regulator (Wikipedia; Tameson). 5) Fitted backwards: a relieving regulator installed backwards is a typical cause of large leaks in robot air systems (FIRST pneumatics manual). 6) An unplugged gauge port leaks (FIRST pneumatics manual). 7) Hunting (oscillating pressure) or sticky, stepwise adjustment from too little damping or too much friction (Wikipedia). 8) Wrong type: a back-pressure regulator fitted where a pressure-reducing one is needed, or the other way round (Tameson). 9) Mineral blockage in water regulators (Tameson). 10) Setting changed by someone else (HSE HSG39 para 165).
- **related**: 
  - Pressure relief valve (safety valve): normally closed and opens only when the pressure upstream gets too high, as an emergency vent; a regulator is normally open, works all the time and senses the pressure downstream (LibreTexts 20.1; Wikipedia)
  - Back-pressure regulator (pressure-sustaining valve): the mirror image, which holds the pressure on its inlet side steady by letting fluid through when it rises (Wikipedia)
  - Speed-control valve (flow control, needle valve): slows an actuator by limiting flow but keeps full force, while a regulator limits force (FIRST pneumatics manual)
  - Air tank and hydraulic accumulator: the high-pressure store a regulator usually sits after
  - Switching valve (directional control valve): turns the regulated air on and off to each actuator; a regulator can sit before or after it (FIRST pneumatics manual)
  - Check valve: lets flow one way only; a water pressure-regulating valve does not work as a check valve (Wikipedia)
  - Float valve (ballcock): the same 'measure and correct' idea used to hold a water level instead of a pressure
  - Speed governor: the same negative-feedback idea used to hold a speed steady
  - Syringe hydraulics: shows why pressure sets force (Pascal's principle)

### Pictures, videos and models

- **links**: 
  - [Pressure regulators schematic.png (Peter Southwood; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pressure_regulators_schematic.png): Schematic of a pressure-reducing regulator and a back-pressure regulator, showing the basic principle and the valve in its normal and activated positions *(licence: CC BY-SA 4.0)*
  - [Single-stage-regulator.svg (Mintrick; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Single-stage-regulator.svg): Cutaway of a single-stage pressure regulator, the drawing used in Wikipedia's explanation of the diaphragm, spring and poppet force balance *(licence: CC BY-SA 3.0)*
  - [Depiction of a two-gauge pressure regulator connected to a cylinder (Open Critical Care and World Health Organization; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Depiction_of_a_two-gauge_pressure_regulator_connected_to_a_cylinder.png): A gas cylinder with a regulator showing the two gauges: cylinder (inlet) pressure and delivery (outlet) pressure *(licence: CC BY 4.0)*
  - [A miniaturized 3D printed pressure regulator (µPR) for microfluidic cell culture applications (Scientific Reports, 2022)](https://www.nature.com/articles/s41598-022-15087-9): Cross-section drawings of a 3D-printed regulator (high- and low-pressure chambers, poppet, diaphragm, printed cantilever springs, M2 adjusting bolt) and a four-phase figure of how the force balance regulates the pressure *(licence: CC BY 4.0)*
  - [The Basics of Pressure Regulators (Tameson)](https://tameson.com/pages/pressure-regulator): Labelled schematics of single-stage and two-stage regulators (membrane, inlet, adjusting handle, outlet, poppet valve) and photos of uses *(licence: link only)*
- **make_it_yourself**: 
  - [A miniaturized 3D printed pressure regulator (µPR) for microfluidic cell culture applications (Scientific Reports, 2022)](https://www.nature.com/articles/s41598-022-15087-9): Open-access paper giving the design, materials and assembly steps of a resin-printed regulator that reduces a small battery air pump's 41 kPa to an adjustable 1-10 kPa; a safe, low-pressure regulator to study or copy *(licence: CC BY 4.0)*
  - [Air Pressure Regulator Mount (TBatt, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/739130-air-pressure-regulator-mount): Printed bracket for mounting a bought air regulator that came without one; printed in PETG at 100% fill. The print holds no pressure *(licence: CC BY)*
  - [Vaccum Pump Pressure Regulator (Martin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/543704-vaccum-pump-pressure-regulator): Adjustable printed leak that lets a little air into a vacuum chamber or bag to set the vacuum level, used with a fridge-compressor vacuum pump and a gauge; vacuum only *(licence: CC BY-SA)*
- **diagram_idea**: A cutaway regulator between a full tank on the left and a cylinder on the right: the knob squeezes a big spring onto a diaphragm, which holds a small poppet open; an animation shows the outlet gauge rising until the diaphragm lifts and the poppet closes, then the cylinder using air, the gauge dipping and the poppet opening again, with a small inset contrasting it with a relief valve that stays shut until an emergency.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pressure_regulator
  - https://en.wikipedia.org/wiki/Diving_regulator
  - https://tameson.com/pages/pressure-regulator
  - https://tameson.com/pages/air-pressure-regulator-troubleshooting-replacement
  - https://tameson.com/pages/pressure-regulator-troubleshooting
  - https://tameson.com/pages/air-compressor-pressure-regulator
  - https://tameson.com/pages/pressure-controlling-devices
  - https://tameson.com/pages/pressure-regulator-installation
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/20%3A_Pressure_Reducing_Valves/20.01%3A_The_Function_of_a_Pressure_Reducing_Valve_and_Application
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/20%3A_Pressure_Reducing_Valves/20.02%3A_The_Operation_of_a_Direct-Acting_Pressure_Reducing_Valve_(PRV)_and_Schematic_Symbol
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://www.nature.com/articles/s41598-022-15087-9
  - https://github.com/Matt-Aero/DIY-Pressure-Reg
  - https://cvra.ch/blog/2016/airtank
  - https://raw.githubusercontent.com/tinkrmind/programmable-air/master/README.md
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/739130-air-pressure-regulator-mount
  - https://www.printables.com/model/543704-vaccum-pump-pressure-regulator
  - https://www.printables.com/model/117756-bottle-cap-pressure-regulator
  - https://commons.wikimedia.org/wiki/File:Pressure_regulators_schematic.png
  - https://commons.wikimedia.org/wiki/File:Single-stage-regulator.svg
  - https://commons.wikimedia.org/wiki/File:Depiction_of_a_two-gauge_pressure_regulator_connected_to_a_cylinder.png

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

## 313 Pressure relief valve (safety valve, pop-off valve)

*hydraulics, pneumatics & vacuum.* A spring-held valve that pops open and lets pressure out above a set value, so tanks, pumps and soft actuators can't burst

*Also covers:* Also covers the rupture (burst) disc and vacuum relief valves on dust collectors. Safety: never block or screw down a relief valve.

### What it is

- **plain_name**: A spring-loaded plug on a tank, pump or pipe that stays shut in normal use but is pushed open, often with a loud pop, as soon as the pressure gets too high, letting the extra out so nothing bursts. A one-use burst disc, and a valve that lets air in so suction can't crush a container, do the same job
- **term**: Pressure relief valve (safety valve, PRV, PSV)
- **aliases**: 
  - relief valve (RV): opens gradually in proportion to the over-pressure; the term is used mainly for liquids (Wikipedia; Tameson)
  - safety valve (SV) or pressure safety valve (PSV): pops fully open, used for gas, steam and air; a PSV has a hand lever to open it in an emergency (Wikipedia)
  - safety relief valve (SRV), for gas or liquid (Wikipedia)
  - pop valve, pop-off valve, snap-acting valve (Wikipedia 'Safety valve' and 'Relief valve')
  - pressure release valve (note: FRC Zero uses this name for a robot's hand-operated vent valve, which is different)
  - over-pressure relief valve (Wikipedia 'Diving regulator')
  - pressure limiting valve (Tameson)
  - bypass valve, when it returns a pump's or compressor's flow to the tank or inlet (Wikipedia 'Relief valve')
  - pilot-operated relief valve (POSRV, PORV, POPRV) (Wikipedia)
  - temperature and pressure relief valve (T&P or TPR valve) on water heaters (Wikipedia 'Water heating')
  - thermal relief valve, for liquid-filled vessels that expand when warmed (Wikipedia 'Safety valve')
  - rupture disc, burst disc, bursting disc, burst diaphragm or pressure safety disc; rupture panel, vent panel, explosion vent or blowout panel (Wikipedia 'Rupture disc')
  - vacuum relief valve, vacuum breaker, vacuum pressure safety valve (VPSV), pressure-vacuum relief valve (PVRV) (Wikipedia 'Relief valve'; Wikipedia 'Vacuum breaker')
  - cyclone (dust-collector) bin relief valve (Printables)
  - fusible plug: a low-melting plug that lets pressure out, used as a backup on pressure cookers and boilers (Wikipedia 'Pressure cooker'; Wikipedia 'Boiler explosion')
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: torque limiting & slip
- **one_liner**: A normally-closed, spring-held valve that opens by itself when the pressure passes a set limit and lets fluid out until the pressure falls again, protecting tanks, pumps, pipes and soft actuators from bursting; its one-shot cousin, the rupture disc, bursts instead.
- **complexity**: A few parts: a body with an inlet from the protected system and an outlet to air or back to the tank, a seat (nozzle), a disc, poppet or ball, a spring, and an adjusting screw or cap with a locknut (Tameson; LibreTexts 13.2; FIRST pneumatics manual). Safety valves add a lip around the disc and a nozzle ring, and some have a test lever (Tameson; Wikipedia). A rupture disc is a single thin, usually domed metal membrane in a holder (Wikipedia). A printed dust-bin vacuum relief valve is three printed parts, a neoprene seal disc, an M4 bolt, washers, a small spring and a nut (Printables).
- **how_it_works**: A spring presses the disc, poppet or ball onto its seat, while the system pressure pushes back on it (Tameson; LibreTexts 13.2). Below the set pressure the spring wins and the valve stays shut; when pressure x area beats the spring, the disc lifts and fluid escapes, so the pressure stops rising, and once it has fallen by the 'blowdown' (roughly 2-20% of the set pressure) the valve reseats (Wikipedia 'Relief valve'). A relief valve opens gradually in proportion to the over-pressure; a safety ('pop') valve has a wider lip that the escaping fluid suddenly reaches, so once it cracks open the larger area throws it fully open with a pop and holds it open until the pressure has dropped below where it opened (Wikipedia 'Safety valve'; Tameson). A rupture disc is a membrane that bursts at its rated pressure and does not reseal; a vacuum relief valve works the other way round, letting air in when the inside pressure falls too far below the outside (Wikipedia).

### Finder attributes

- **job**: 
  - slip or let go when overloaded: it gives way at a set pressure, letting fluid out instead of letting the pressure (and the force it makes) keep climbing, like a torque limiter for air or oil
  - seal it, or pass cables or fluid through: stays sealed below its set pressure and vents fluid to air, a drain or back to the tank above it (Wikipedia; LibreTexts 13.3)
- **motion**: slide: the disc, poppet or ball lifts straight off its seat and drops back again; a rupture disc instead bulges and tears (Wikipedia)
- **degrees_of_freedom**: 1: the disc or poppet only moves along the valve's axis, guided by its stem; a rupture disc has none, it simply bursts
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): the fluid version; it holds until the set pressure, then lets go and caps the pressure, as a slip clutch caps torque
  - fail-safe or breakaway: it is opened purely by the pressure, so it still works if the power, pressure switch or controller fails (Tameson 'safety valve'; FRC Zero: if the pressure switch fails 'there should ALWAYS be a mechanical safety valve'); a rupture disc is a sacrificial, one-shot breakaway part (Wikipedia)
  - over-centre (snaps past a point and stays), loosely: a snap-acting safety ('pop') valve jumps to full lift in milliseconds and stays open until the pressure has fallen below its opening point, giving built-in hysteresis (Wikipedia 'Relief valve'; Wikipedia 'Safety valve')
- **holding_principle**: 
  - spring force: a spring holds the disc shut until the set pressure; old valves and pressure-cooker regulators use a weight instead (Wikipedia 'Safety valve'; Wikipedia 'Pressure cooker')
  - not a holding joint (it moves or passes on motion): it controls fluid, not parts
- **input_output**: Not a motion converter. As a fluid device: inlet pressure below the set pressure -> shut, no flow; at or above it -> opens (gradually for a relief valve, fully for a safety valve) and vents until the pressure has fallen by the blowdown, then reseats (Wikipedia; Tameson). In a hydraulic circuit with a fixed-displacement pump, the whole pump flow goes through it whenever a cylinder stalls or reaches the end of its stroke (LibreTexts 13.3).
- **power**: passive (no power needed): opened by the system pressure itself, so it works in a power cut (Tameson 'safety valve'). Pilot-operated and solenoid-switched relief systems exist for industrial use (Tameson)
- **removability**: removable: screwed into a port on the tank, compressor or pump, after letting the pressure out (Tameson). A rupture disc must be replaced once it has burst (Wikipedia). The printed dust-bin valve bolts through a hole in the bucket lid (Printables)
- **reuse_cycles**: effectively unlimited for a relief or safety valve, which reseats after every opening, though Tameson advises replacing one that leaks, corrodes, fails to open at its set pressure or is over 3-5 years old; once for a rupture disc (Wikipedia)
- **tools_needed**: A spanner and thread sealant used sparingly: Tameson warns that even PTFE tape lubricates the thread and can lead to over-tightening, and to leave one or two end threads bare; an Allen key or screwdriver plus a spanner for the locknut, and a calibrated gauge, to adjust an adjustable valve (Tameson; FIRST pneumatics manual). For the printed dust-bin valve: a 32 mm hole saw, a 4 mm drill, M4 bolts and a knife (Printables)
- **seal**: airtight or pressure below the set pressure: the spring presses the disc onto its seat; soft seats (FKM, PTFE, nitrile) seal tighter than metal-to-metal 'hard' seats but stand less heat (Tameson). Older spring valves leaked a 'feather' of steam as the pressure neared their setting (Wikipedia 'Safety valve'). Rupture discs are leak-tight until they burst and are often fitted in front of a relief valve to seal it off from the process (Wikipedia)
- **load**: Pressure rather than structural load: spring safety valves are made for about 1 to 1,400 bar (Tameson); robot air systems relieve at about 125 psi (8.6 bar) (FIRST pneumatics manual); rupture discs range from 3 mm to over 1.2 m across (Wikipedia). It must be able to let out more air than the compressor can push in (HSE HSG39 para 33). Not structural: support it properly and never lift a valve by its lever (Tameson)
- **adjustable**: Sometimes: adjustable valves have a screw or cap with a locknut; turning clockwise compresses the spring and raises the set pressure, anticlockwise lowers it; adjust with no pressure applied, no more than about one turn at a time, then retest (Tameson; FIRST pneumatics manual). Many are factory-set and non-adjustable (Tameson), and tamper-resistant designs go back to Ramsbottom's valve of the 1850s (Wikipedia 'Safety valve'). The printed dust-bin valve is set by tightening a nut on its spring (Printables)
- **play_and_precision**: not applicable for position. Pressure accuracy: set pressures follow codes such as ASME (Wikipedia); the blowdown before it reseats is about 2-20% of the set pressure, and some valves let you adjust it (Wikipedia 'Relief valve'); pressure in the outlet pipe (back pressure) above about 10% of the set pressure can make it chatter (Tameson)
- **access_needed**: end of a tube or shaft: screwed into a port on the tank, compressor outlet, pump outlet or pipe, as close to the pressure source as possible (Tameson; FIRST pneumatics manual); the printed dust-bin valve needs both sides of the bucket lid to bolt it together (Printables)
- **materials**: Bodies: brass for general use, stainless steel for corrosive or hot fluids (Tameson). Seats and seals: FKM (oils, solvents and heat, but not methanol, hot water or steam), PTFE (almost all fluids, but stiff), or metal-to-metal for very high temperatures (Tameson). Rupture discs: carbon steel, stainless steel, Hastelloy, graphite and others (Wikipedia). Printed vacuum relief valves: PLA with 3-5 walls, a 3 mm neoprene seal disc, an M4 x 40 hex bolt, washers, a nut and a small compression spring (Printables 'Pressure Relief Valve for Cyclone Dust Extractor')
- **maker_difficulty**: easy to buy and fit: screw a rated valve into the tank or compressor port. Easy to print one for the vacuum side of a dust-collector bin (Printables). Never home-make one to protect a pressurised tank or line, because if it fails nothing else stops the burst

### Making it

- **processes**: 
  - off-the-shelf part: rated brass or stainless relief and safety valves, factory-set or adjustable, and rupture discs in holders (Tameson; Wikipedia)
  - 3D print (FDM): vacuum relief valves for cyclone dust-collector bins (Printables models)
  - 3D print (resin): a spring relief valve built into a printed hydraulic pump block, in a low-pressure (about 1.3 bar) demonstrator (Hackaday 2024)
- **print_in_place**: no: printed relief valves are separate parts assembled with a bolt, spring, washers and nut (Printables 'Pressure Relief Valve for Cyclone Dust Extractor'); the cyclone separator with a built-in valve also needs an M3 screw, nut and spring (Printables 'Cyclone Vacuum Dust Separator with Built-in Pressure Relief Valve')
- **making_tips_3d_printing**: 1) Only print relief valves for the vacuum side of things (dust-collector bins, vacuum bags) or for demonstrations. A printed part must never be the device protecting a pressurised tank or line, and never hold stored pressure in a printed part: a PLA tank burst at 5.5 bar centimetres from its maker's face (CVRA). 2) Cyclone bin relief valve (Adam Oellermann, Printables): the STLs suit a 32 mm hole saw, and the OpenSCAD file is parametric for other hole sizes and bolts; print as oriented with no supports; infill matters little but use 3-5 walls; PLA works. Glue a 3 mm neoprene disc to the closing plate for a good seal with less whistling; pass an M4 x 40 hex bolt up through it, then washer, spring, washer and nut on the outside; tightening the nut makes it need more suction to open. If the bolt sticks, grind its threads off where it slides through the plastic or paint them smooth with nail varnish. 3) A 'stronger' remix exists if the original breaks (Printables 'Pressure Relief Valve (Stronger)'). 4) Set it by testing: block the vacuum nozzle and adjust the nut so the valve opens before the bucket starts to collapse (Printables). 5) Some printed cyclone separators have the relief valve built into the lid; one prints from five files with no supports (Printables 'Cyclone Vacuum Dust Separator with Built-in Pressure Relief Valve'). 6) In printed hydraulic demonstrators a spring relief valve can be printed into the pump block in resin, but expect low pressures (about 1.3 bar in the Hackaday example, limited by leaky seals).
- **off_the_shelf_parts**: Air-receiver (compressor tank) safety valves, fixed or adjustable; small adjustable pneumatic relief valves with a locknut, as used in robot kits set to 125 psi (FIRST pneumatics manual); brass and stainless pressure relief valves for liquid and gas, with fixed or adjustable set pressure ranges (e.g. 2-8 bar) (Tameson); hydraulic direct-acting and pilot-operated relief valves, internally or externally drained (LibreTexts 13.3); temperature-and-pressure (T&P) relief valves for water heaters, with a discharge pipe (Wikipedia 'Water heating'); pressure-cooker safety valves, gaskets and fusible plugs (Wikipedia 'Pressure cooker'); rupture (burst) discs with holders and burst indicators (Wikipedia); vacuum relief valves and vacuum breakers (Wikipedia); pressure switches for compressor cut-out, as the first line before the relief valve (FIRST pneumatics manual).
- **rules_of_thumb**: 
  - The set pressure must not exceed the maximum allowable working pressure (MAWP) of the weakest part, and the MAWP should be at least 10% above the highest normal operating pressure (Tameson 'Safety Valve and Relief Valve Selection')
  - It must be able to discharge more air than the system can supply, and open as soon as the safe working pressure is exceeded (HSE HSG39 para 33)
  - Robot example: the compressor switches off at about 110-120 psi, the relief valve opens at about 125 psi and must not open before the compressor shuts off; stop everything if the gauge reaches 130 psi (FIRST pneumatics manual)
  - Mount it close to the pressure source (e.g. the air tank); if there is a bend or elbow in between, at least 8-10 pipe diameters away from it; stem vertical, and piping no smaller than its ports (Tameson 'Safety Valves and Pressure Relief Valves Installation')
  - Point the outlet somewhere harmless: high-pressure gas to open air, through pipework that keeps rain out and doesn't endanger people (Wikipedia 'Relief valve'; HSE HSG39 para 91)
  - Test it: ease compressor safety valves by hand every week where the design allows (HSE HSG39 para 152); test relief and safety valves at least once a year (Tameson); after adjusting, retest, moving the screw no more than about one turn at a time (Tameson)
  - Keep back pressure in the outlet pipe below about 10% of the set pressure, or the valve may chatter (Tameson 'Safety Valve and Relief Valve Selection')
  - The blowdown is roughly 2-20% of the set pressure, so leave a gap between the working pressure and the set pressure or the valve won't reseat (Wikipedia 'Relief valve')
  - Hydraulics: a circuit with a fixed-displacement pump needs a relief valve, because when a cylinder stalls or reaches the end of its stroke the oil has nowhere else to go (LibreTexts 13.3)
  - Forward-acting rupture discs are usually run at no more than 80% of their burst pressure; a reverse-buckling disc fitted upside down may burst far above its marked pressure (Wikipedia 'Rupture disc')
  - Liquids hardly compress, so a small thermal relief valve protects a liquid-filled vessel from heat expansion, while gas systems need much larger valves (Wikipedia 'Safety valve')

### When to use it

- **everyday_examples**: 
  - The safety valve on a workshop air-compressor tank (HSE HSG39)
  - The temperature-and-pressure relief valve on top of a hot-water cylinder, with its pipe down to a drain (Wikipedia 'Water heating')
  - The rocking weight and the backup safety valve or rubber plug on a pressure cooker (Wikipedia 'Pressure cooker')
  - A printed pop-off valve in the bucket lid of a cyclone dust collector that stops the bucket being crushed when the hose is blocked (Printables)
- **when_to_use**: On anything that a pump, compressor, heater or gas supply could push past its safe pressure: every compressor tank and air receiver (HSE HSG39); robot air systems, where FIRST requires one connected directly to the compressor with hard fittings (FIRST pneumatics manual); hydraulic circuits with a fixed-displacement pump (LibreTexts 13.3); after a regulator wherever its failure would damage something, and on any component that can't take the full compressor pressure (HSE HSG39 paras 91 and 112); closed hot-water and heating circuits (Wikipedia 'Water heating'); and soft actuators, bellows and inflatables fed by a pump that could over-inflate them. Use a vacuum relief valve where suction could crush a container: a cyclone dust-collector bin, a tank being emptied, or steam coils as they cool (Printables; Wikipedia 'Safety valve'; Wikipedia 'Vacuum breaker'). Use a rupture disc as a cheap, leak-tight, instant one-shot backup, or to seal a relief valve off from a corrosive fluid (Wikipedia).
- **when_not_to_use**: Not for setting a working pressure: that is a pressure regulator's job, and a valve that keeps venting wastes air or oil; Tameson describes safety valves as a last-resort safety measure and regulators as the devices for constant pressure control. Not a substitute for a strong enough vessel: a relief valve won't save a weak, corroded or 3D-printed tank (HSE HSG39; CVRA). To hold a steady upstream pressure during normal running, use a back-pressure regulator (Wikipedia 'Pressure regulator'). To limit a mechanical force, use a torque limiter or slip clutch. Don't rely on a pressure switch or software alone (FRC Zero), and don't fit a home-made or printed relief valve to a pressurised tank.
- **environment_limits**: Rain getting into the outlet can change the opening pressure, so fit discharge pipework that keeps water out (Wikipedia 'Relief valve'). Heat: FKM seats suit oils, solvents and heat but not methanol, hot water or steam; PTFE resists nearly all fluids; metal 'hard' seats suit very high temperatures (Tameson). Fluid viscosity falls as the temperature rises, which changes the capacity needed (Tameson). Corrosion and scale can stick a valve shut, and stuck safety valves were a classic cause of boiler explosions (Wikipedia 'Boiler explosion'). Fatigue: forward-acting rupture discs weaken with pressure cycling and can burst below their marked pressure, and very thin low-pressure discs can get corrosion pinholes (Wikipedia 'Rupture disc'). Age: replace a valve that leaks, corrodes, fails its test or is over 3-5 years old (Tameson). Vibration: early weighted safety valves blew off when locomotives hit bumps, and springs are much less sensitive to shaking (Wikipedia 'Safety valve').
- **safety_notes**: 1) Never block, plug, remove, weight down, tie down or screw down a relief or safety valve, or raise its setting above the rating of the weakest part. Tying down valves for more power caused boiler explosions, which is why tamper-proof designs such as Ramsbottom's were invented (Wikipedia 'Safety valve'); the 1909 Cardiff and 1921 Buxton locomotive boiler failures were caused by misassembled safety valves (Wikipedia 'Boiler explosion'). 2) Point the outlet away from people, and pipe water-heater T&P valves to a drain (HSE HSG39 para 91; Wikipedia 'Water heating'). 3) Opening is sudden and loud: 'many of these valves are fairly loud when they trigger' (FIRST pneumatics manual); wear eye protection and gloves when installing or testing (Tameson). 4) Release all pressure before fitting, removing or adjusting a valve (Tameson). 5) It must out-flow the source: a small valve on a big compressor can't stop the pressure rising (HSE HSG39 para 33). 6) A regulator is no substitute: a leaking regulator can pass the full supply pressure downstream, so a relief valve is still needed (Wikipedia 'Diving regulator'; HSE HSG39 para 91). 7) A rupture disc doesn't reseal, so the system stays open until the disc is replaced, and a reverse-buckling disc fitted upside down may burst far above its marked pressure (Wikipedia). 8) Never hold stored pressure in a 3D-printed part, and use printed relief valves only on the vacuum side (CVRA; Printables). 9) Pressure cookers: food can block the main vent, which is why they have backup valves; never overfill one, keep the vents clean, and remember that a failed cooker ejects scalding steam and water (Wikipedia 'Pressure cooker').
- **common_failures**: 1) Seized or stuck shut by corrosion, scale or dirt, so it doesn't open (Wikipedia 'Boiler explosion'); ease it by hand and test it regularly (HSE HSG39 para 152; Tameson). 2) Set wrongly, or the gauge used to check it is out of calibration: if it doesn't open near the right pressure, swap the valve or the gauge for a spare and retest (FIRST pneumatics manual). 3) Weeps or 'feathers' because the working pressure is too close to the set pressure, or because of dirt on the seat (Wikipedia 'Safety valve'). 4) Chatter (rapid opening and closing) from back pressure in the outlet pipe, which can damage the valve (Tameson). 5) Won't reseat when its outlet is piped and pressure builds up downstream (Wikipedia 'Relief valve'). 6) Too small to keep up with the pump or compressor (HSE HSG39 para 33; Tameson). 7) Misassembled after maintenance so it can't open fully (Wikipedia 'Boiler explosion'; Wikipedia 'Safety valve'). 8) Rupture discs bursting early from fatigue, or late if fitted upside down (Wikipedia). 9) Printed vacuum valves sticking because the bolt threads catch in the plastic: grind the threads or paint them smooth (Printables).
- **related**: 
  - Pressure regulator (pressure-reducing valve): works all the time to hold a lower outlet pressure; it is normally open and senses the pressure downstream, while a relief valve is normally closed and senses the pressure upstream (LibreTexts 20.1; Wikipedia)
  - Back-pressure regulator (pressure-sustaining valve): also opens above a set inlet pressure, but is meant to keep the upstream pressure steady in normal running, not only in emergencies (Wikipedia 'Pressure regulator')
  - Check valve: also spring-loaded, but opens at a small 'cracking pressure' to let flow pass one way in normal use
  - Rupture disc (covered here): a one-shot membrane that is leak-tight and instant but must be replaced after it bursts (Wikipedia)
  - Shear-pin coupling (breakaway link): the mechanical one-shot equivalent of a rupture disc
  - Ball-detent torque limiter and Friction slip clutch: the mechanical equivalents, which let go at a set torque and carry on afterwards
  - Burn-wire and fusible-link release: one-shot heat releases, like the fusible plug used as a backup on boilers and pressure cookers (Wikipedia)
  - Shut-off valve (vent or dump valve): opened by hand to let all the pressure out on purpose; robot rules call this the vent plug (FIRST pneumatics manual)
  - Pressure switch: switches the compressor off at a set pressure; the relief valve is the mechanical backup if it fails (FIRST pneumatics manual; FRC Zero)
  - Air tank and hydraulic accumulator: the thing it most often protects

### Pictures, videos and models

- **links**: 
  - [Relief Valve.png (Mbeychok; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Relief_Valve.png): Schematic cross-section of a conventional spring-loaded pressure relief valve *(licence: CC BY-SA 3.0)*
  - [Proportional-Safety Valve.svg (Peppeg; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Proportional-Safety_Valve.svg): Drawing of a proportional (gradually opening) safety valve (German labels: Proportional-Sicherheitsventil) *(licence: CC BY-SA 3.0)*
  - [Pressure cooker safety valve.svg (Willy, FischX; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pressure_cooker_safety_valve.svg): Diagram of a pressure-cooker safety valve *(licence: CC BY-SA 3.0)*
  - [Rupturedisc burst.JPG (Jens Huckauf; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Rupturedisc_burst.JPG): Photo of a rupture (burst) disc after it has burst *(licence: CC BY-SA 3.0)*
  - [Pressure Safety Valve vs Pressure Relief Valve (Tameson)](https://tameson.com/pages/relief-valve-vs-safety-valve): Photos of both valve types and a lift-versus-pressure graph showing a relief valve opening gradually and a safety valve popping open, with set pressure, blowdown and reseating pressure marked *(licence: link only)*
- **make_it_yourself**: 
  - [Pressure Relief Valve for Cyclone Dust Extractor (Parametric) (Adam Oellermann, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/213603-pressure-relief-valve-for-cyclone-dust-extractor-p): Three-part printed vacuum relief valve for a cyclone dust-collector bucket lid, with an adjustable spring on an M4 bolt and a parametric OpenSCAD file; vacuum only *(licence: CC BY-SA)*
  - [Pressure Relief Valve (Stronger) (Steven Mathiasen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/456366-pressure-relief-valve-stronger): Stronger remix of the cyclone-bin vacuum relief valve above *(licence: CC BY-SA)*
  - [Cyclone Vacuum Dust Separator with Built-in Pressure Relief Valve (pressi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/629084-cyclone-vacuum-dust-separator-with-built-in-pressu): Printed cyclone separator for a shop vacuum with a spring-loaded vacuum relief valve built in that 'prevents your bucket from collapsing under suction' *(licence: CC BY-NC-SA)*
- **diagram_idea**: A tank with a pressure gauge and a spring-loaded valve on top: as the needle climbs to the red line the disc lifts and a puff of air escapes, then the disc drops back as the needle falls (blowdown); beside it, a lift-versus-pressure graph contrasting a relief valve's gradual ramp with a safety valve's sudden pop, and small insets of a burst rupture disc and a dust-bin vacuum valve letting air in.
- **sources**: 
  - https://en.wikipedia.org/wiki/Relief_valve
  - https://en.wikipedia.org/wiki/Safety_valve
  - https://en.wikipedia.org/wiki/Rupture_disc
  - https://en.wikipedia.org/wiki/Boiler_explosion
  - https://en.wikipedia.org/wiki/Pressure_cooker
  - https://en.wikipedia.org/wiki/Water_heating
  - https://en.wikipedia.org/wiki/Vacuum_breaker
  - https://en.wikipedia.org/wiki/Pressure_regulator
  - https://en.wikipedia.org/wiki/Diving_regulator
  - https://tameson.com/pages/pressure-relief-valve
  - https://tameson.com/pages/relief-valve-vs-safety-valve
  - https://tameson.com/pages/safety-valve
  - https://tameson.com/pages/safety-valve-relief-valve-installation
  - https://tameson.com/pages/safety-valve-relief-valve-selection
  - https://tameson.com/pages/pressure-controlling-devices
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/13%3A_Relief_Valves/13.01%3A_Function_and_Application_of_a_Relief_Valve
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/13%3A_Relief_Valves/13.02%3A_Operation_of_a_Direct-Acting_Relief_Valve_and_Its_Schematic_Symbol
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/13%3A_Relief_Valves/13.03%3A_The_Role_of_a_Relief_Valve_in_System_Protection
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/20%3A_Pressure_Reducing_Valves/20.01%3A_The_Function_of_a_Pressure_Reducing_Valve_and_Application
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-control/
  - https://www.frczero.org/pneumatics/pneumatic-components/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://hackaday.com/2024/06/29/building-a-hydraulic-system-with-3d-printed-sla-resin-parts/
  - https://cvra.ch/blog/2016/airtank
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/213603-pressure-relief-valve-for-cyclone-dust-extractor-p
  - https://www.printables.com/model/456366-pressure-relief-valve-stronger
  - https://www.printables.com/model/629084-cyclone-vacuum-dust-separator-with-built-in-pressu
  - https://commons.wikimedia.org/wiki/File:Relief_Valve.png
  - https://commons.wikimedia.org/wiki/File:Proportional-Safety_Valve.svg
  - https://commons.wikimedia.org/wiki/File:Pressure_cooker_safety_valve.svg
  - https://commons.wikimedia.org/wiki/File:Rupturedisc_burst.JPG

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: clicks or pops out and resets
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: one way or let off pressure
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, metal

## 314 Speed-control valve (flow control valve, needle valve)

*hydraulics, pneumatics & vacuum.* An adjustable narrow gap, usually with a one-way bypass, so a cylinder moves slowly one way and freely the other

*Also covers:* Also covers meter-out control and the quick exhaust valve.

### What it is

- **plain_name**: A small screw-adjusted valve, usually screwed straight into an air cylinder's port, that makes the air squeeze through a tiny adjustable gap one way but lets it rush back freely the other way, so you can make the cylinder move slowly and smoothly in one direction and fast in the other
- **term**: Speed-control valve (one-way flow control valve: a needle valve with a bypass check valve)
- **aliases**: 
  - flow control valve, one-way flow control valve, one-way flow regulator (FIRST pneumatics manual; LibreTexts)
  - speed controller, cylinder speed control; elbow, universal and in-line speed controllers with push-in (one-touch) fittings (SMC; Tameson)
  - meter-out and meter-in flow control valve (FIRST pneumatics manual; LibreTexts; Tameson)
  - throttle check valve (German Drosselrückschlagventil; the Wikimedia Commons symbol file calls it a 'retract resistor check valve')
  - needle valve: the adjustable part on its own, which restricts flow both ways (Wikipedia; LibreTexts)
  - bi-directional flow control valve (FIRST pneumatics manual)
  - metering valve with silencer, exhaust flow control (SMC; LibreTexts 15.4)
  - 'sandwich' flow control, fitted between the switching valve and the cylinder (LibreTexts 14.2)
  - pressure-compensated flow control valve (hydraulics; LibreTexts)
  - orifice, fixed orifice or restrictor (LibreTexts 14.2)
  - quick exhaust valve (QEV), quick-exhaust valve; exhaust controller combining a quick exhaust valve with a flow control (Festo datasheet; SMC; The Instrument Guru)
  - roller clamp, tube clamp or aquarium air valve: simple flow restrictors that squeeze a soft tube (Printables)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: brakes, dampers & speed control
- **one_liner**: A needle valve and a one-way check valve in one small body: air or oil going one way must squeeze through a narrow gap that you set with a screw, which slows the cylinder, while flow the other way bypasses the gap, so each stroke's speed can be set separately without reducing the cylinder's force.
- **complexity**: A few parts: a body with two ports (often a threaded port and a push-in tube fitting), a tapered needle on a fine screw with a knob or slotted head and a locknut, and a check valve (a poppet with a small spring) in parallel with the needle (LibreTexts 14.2; Tameson product page). A quick exhaust valve is a separate small body with supply, cylinder and exhaust ports and a flexible wing-shaped seal inside (Festo datasheet; The Instrument Guru).
- **how_it_works**: Turning the needle in narrows the gap (orifice) between its tapered tip and the seat, so less air or oil passes each second; a cylinder can only move as fast as air or oil can get in or out of it, so it slows down (LibreTexts). In the restricted direction the check valve is held shut and all the flow must go through the needle; in the other direction it is pushed open and the flow bypasses the needle almost freely (LibreTexts 14.2; FIRST pneumatics manual). Usually the valve restricts the air leaving the cylinder (meter-out): the trapped air is compressed and acts like a spring against the piston, giving smooth motion whether the load helps or resists; restricting the air going in (meter-in) suits single-acting spring-return cylinders but tends to be jerky on double-acting ones (FIRST pneumatics manual; LibreTexts 15.2-15.3). A quick exhaust valve does the opposite job: when the supply pressure falls it dumps the cylinder's air straight out at the port instead of sending it back through the tubing and the main valve, so the stroke is faster (Festo datasheet; The Instrument Guru).

### Finder attributes

- **job**: 
  - slow it, stop it or keep its speed steady: sets how fast an air or hydraulic cylinder, air motor or soft actuator moves, separately for each direction (FIRST pneumatics manual; LibreTexts)
  - seal it, or pass cables or fluid through: passes air or oil freely one way and through an adjustable gap the other (LibreTexts 14.2)
- **motion**: multiple: the needle screws in and out (turning and sliding together) to set the gap; inside, the check-valve poppet slides open and shut by itself as the flow reverses (LibreTexts)
- **degrees_of_freedom**: 1 for the adjusting needle, whose turning and sliding are linked by its thread, plus 1 for the self-acting check valve, which only moves open or shut
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): here it flows freely one way and is throttled, not locked, the other way, because the built-in check valve lets flow bypass the needle in one direction only (LibreTexts 14.2; FIRST pneumatics manual)
- **holding_principle**: not a holding joint (it moves or passes on motion): it controls flow, not parts
- **input_output**: Not a motion converter. As a fluid device: the flow rate in the restricted direction is set by the needle, and the actuator's speed = flow rate / piston area (a cylinder needing 2 gallons at 1 gallon per minute takes 2 minutes; LibreTexts 6.2); flow the other way is nearly free. Unlike lowering the pressure, it keeps the cylinder's full force (FIRST pneumatics manual). A quick exhaust valve: supply port 1 -> cylinder port 2 while supply pressure is applied; when the pressure at 1 falls, the cylinder exhausts from 2 straight out of 3 (Festo datasheet).
- **power**: passive (no power needed): set by hand and worked by the flow itself
- **removability**: removable: screwed into the cylinder or valve port, or in line, with push-in fittings that take the tube without tools (Tameson product page; SMC); clamp-type tube restrictors fit around the tube (Printables)
- **reuse_cycles**: many times
- **tools_needed**: A spanner for the threaded port; none to push tubes into push-in fittings; fingers or a small screwdriver to set the needle, and a spanner or fingers for its locknut (Tameson product page); tamper-proof versions need a screwdriver (SMC)
- **seal**: airtight or pressure: seals at its threads and push-in fittings. The needle can shut off flow (Wikipedia 'Needle valve'), but it is a metering valve, not a shut-off: forcing it closed deforms the seat (Tameson product page; Wikipedia)
- **load**: Pressure rather than structural load: standard push-in speed controllers about 1-9 bar, low-cracking-pressure versions 0.5-5 bar (Tameson); quick exhaust valves 0.5-10 bar (Festo datasheet); brass needle valves up to about 207 bar and stainless up to about 690 bar (Tameson 'Needle valve'). Not structural
- **adjustable**: yes: turn the needle clockwise to slow (smaller gap) and anticlockwise to speed up; start from fully closed and open gradually so the actuator doesn't jump, then lock it with the locknut (Tameson product page). Many turns from shut to fully open give fine control (Wikipedia 'Needle valve'); low-speed versions have 10 turns, or 20 in the M5 size (SMC)
- **play_and_precision**: not applicable for position. Speed repeatability: the speed changes when the load changes, because the pressure drop across the gap changes, so pressure-compensated flow control valves are used in hydraulics where speed must stay steady (LibreTexts 15.1, 15.3). Meter-in can be jerky, meter-out is smoother (FIRST pneumatics manual). Air cylinders can 'jump' (move quickly part of the way) if the switching valve reverses before the stroke ends (LibreTexts 14.2)
- **access_needed**: end of a tube or shaft: screwed directly into the cylinder port or fitted into the tube; tube-squeezing roller clamps can be fitted around an already-installed tube without reaching its end (Printables 'Roller Clamp')
- **materials**: Bodies: nickel-plated brass, resin (plastic) or stainless steel (Tameson; SMC); quick exhaust valve housings of die-cast zinc or aluminium with nitrile (NBR) seals (Festo datasheet). Seals: NBR, about 0-60 °C in push-in speed controllers (Tameson), PTFE in needle valves for higher temperatures (Tameson 'Needle valve'). Needles and bodies of brass or 316 stainless steel (Tameson 'Needle valve'). Some speed controllers have a resin valve seat, which deforms if the needle is forced (Tameson product page). Printed tube-squeezing valves in PLA or PETG work on silicone or rubber tubing (Printables)
- **maker_difficulty**: easy to buy and fit: screw a push-in speed controller into each cylinder port (FIRST pneumatics manual). Easy to print a tube-squeezing flow restrictor for aquarium air, syringe hydraulics or water (Printables). Hard to print a true needle valve that seals and adjusts finely at workshop air pressure, so buy that

### Making it

- **processes**: 
  - off-the-shelf part: push-in speed controllers, in-line flow controls, needle valves, exhaust flow controls with silencers and quick exhaust valves (Tameson; SMC; Festo datasheet)
  - 3D print (FDM): roller clamps, aquarium air valves and screw-type drip-irrigation flow valves for low-pressure air and water (Printables models)
- **print_in_place**: no: printed flow restrictors are a few parts (body, wheel and pin, or body and screw) assembled around or onto a tube (Printables 'Roller Clamp'; 'Flow control/valve (IV style)'), and a real speed controller also needs a check valve and seals
- **making_tips_3d_printing**: 1) The simplest printable 'needle valve' squeezes a soft tube. A roller clamp for silicone or rubber tubing (suggested in PETG, though other materials work) must suit the tube wall: one design's 12 mm model is for 1.5 mm walls and its 16 mm model for 2.0 mm walls; it can be assembled around an installed tube, the crossbraces and axle may need gluing depending on printer tolerances, and a little petroleum jelly on the axle pegs makes it smoother (Printables 'Roller Clamp'). 2) An IV-style clamp printed in PLA (0.3 mm layers, 30% infill) on 5-6 mm silicone tube adjusts from free flow 'to a veery slow dribble' to a complete stop; print the body upright with the stop-bar up, and fit it with the closed position facing down so gravity can't open it (Printables 'Flow control/valve (IV style)'). 3) An aquarium air valve that tightens onto the hose prints at 0.2 mm layers in the given orientation and comes with a 'wide tolerance' version for tight threads (Printables 'Aquarium fish tank Air Valve'). 4) A screw-type valve for 4 mm drip-irrigation hose prints without supports at 0.16-0.2 mm layers with 3 walls; PLA indoors, PETG outdoors (Printables 'Flow Control Screw Valve'). 5) To make a printed restrictor one-way like a real speed controller, put a check valve (for example a printed TPU duckbill) in parallel with it (LibreTexts 14.2 describes the needle-plus-check arrangement; see Check valve). 6) Keep printed restrictors to low pressures (aquarium pumps, syringes, small soft actuators, drip lines); on workshop air use a bought speed controller, and never put stored pressure into a printed part (CVRA).
- **off_the_shelf_parts**: Speed controllers (one-way flow control valves) with a threaded port and a push-in fitting, in elbow, universal and in-line styles, meter-out or meter-in (Tameson; SMC); low-cracking-pressure versions for 0.5-5 bar (Tameson); low-speed versions with a smaller orifice for very slow motion (SMC); dual meter-in and meter-out controllers (SMC); in-line bi-directional flow controls (FIRST pneumatics manual); needle valves in brass or stainless steel (Tameson 'Needle valve'); exhaust flow controls (metering valves with silencers) screwed into a switching valve's exhaust ports (SMC; LibreTexts 15.4); 'sandwich' flow control plates between valve and cylinder (LibreTexts 14.2); quick exhaust valves with or without a built-in silencer (Festo datasheet; SMC); exhaust controllers combining a quick exhaust valve and a flow control (SMC); speed controllers with a pilot check valve for mid-stroke stops, with a residual-pressure release button, or with a soft-start (safety) function (SMC); pressure-compensated hydraulic flow control valves (LibreTexts 15.3); IV roller clamps and aquarium air-line valves (Printables).
- **rules_of_thumb**: 
  - To slow a cylinder but keep its full force, use flow control valves rather than lowering the pressure; a regulator reduces force and air use as well as speed (FIRST pneumatics manual)
  - Place flow controls downstream of the switching (solenoid) valve; an arrow on the body often marks the restricted direction (FIRST pneumatics manual)
  - Double-acting cylinders: meter-out (restricting the air leaving) is generally recommended, because meter-in may give jerky movement (FIRST pneumatics manual)
  - Single-acting spring-return cylinders: meter-in against the spring, or a bi-directional valve to slow both ways (FIRST pneumatics manual); or a flow control on the exhaust to slow the retraction (LibreTexts 14.2)
  - Meter-in only works where the load resists the movement; where the load pulls the actuator along (lowering a weight), use meter-out, which holds it back with back pressure (LibreTexts 15.2, 15.3)
  - Start adjusting from fully closed and open gradually to avoid a sudden actuator move; don't force the needle (Tameson product page)
  - Standard push-in speed controllers are rated from about 1 bar with a 0.5 bar check-valve cracking pressure; for low-pressure systems use the low-cracking type (0.5-5 bar, 0.2 bar cracking) (Tameson product page)
  - Hydraulic cylinder speed = flow / piston area: a cylinder needing 2 gallons at 1 gallon per minute takes 2 minutes to extend (LibreTexts 6.2)
  - With a fixed-displacement pump, a needle valve can only slow an actuator by sending the extra oil over the relief valve, so the relief valve must be set high enough to open first (LibreTexts 6.2)
  - For steady speed under a changing load in hydraulics, use a pressure-compensated flow control valve (LibreTexts 15.3)
  - A quick exhaust valve only gives its full benefit when connected directly to the cylinder port; models with a silencer reduce the exhaust noise (Festo datasheet)
  - Where an emptied cylinder could shoot out when air returns (after an emergency stop), add a soft-start arrangement that restricts the flow until the pressure has built up (HSE HSG39 para 120)

### When to use it

- **everyday_examples**: 
  - The little screw valve on an aquarium air line that turns the bubbles up or down (Printables 'Aquarium fish tank Air Valve')
  - The roller clamp on a hospital drip (IV) line that sets the drip rate (Printables 'Flow control/valve (IV style)')
  - The idle-fuel needle in a carburettor, which meters a small steady flow (Wikipedia 'Needle valve')
  - The small bleed valve on a heating radiator, which is often a simple needle valve (Wikipedia 'Needle valve')
- **when_to_use**: Whenever an air or oil cylinder moves too fast or slams at the end of its stroke and could damage the mechanism, the cylinder or other parts: robot arms, grippers, lids and doors, pick-and-place and lifting mechanisms (FIRST pneumatics manual). Fit one per direction you want to control, at the cylinder ports: meter-out for most double-acting cylinders and for loads that pull the cylinder along, meter-in for single-acting spring-return cylinders and resisting loads (FIRST; LibreTexts). Use independent speed control when a machine should work slowly and return quickly, as in a press, or to make extend and retract speeds equal despite the rod taking up space on one side (LibreTexts 15.4). Use a needle valve on its own to meter a small, steady flow of gas or liquid (Wikipedia; Tameson). Use a quick exhaust valve when a cylinder must return faster than the main valve and tubing allow (Festo datasheet). For soft actuators and syringe hydraulics, a tube clamp or printed restrictor gives slow, gentle filling.
- **when_not_to_use**: Not for shutting a line off: a needle valve takes many turns, is easily damaged by over-tightening and doesn't show whether it is open (Wikipedia 'Needle valve'; Tameson); use a shut-off (ball) valve. Not for limiting force: a throttled cylinder still pushes with full force once it gets there; use a pressure regulator (FIRST pneumatics manual). Not for exact speed under a changing load: speed varies with load, so use a pressure-compensated valve in hydraulics (LibreTexts 15.3) or a motor and screw with feedback. Not for stopping and holding a cylinder mid-stroke: use a closed-centre switching valve or a speed controller with a pilot check valve (SMC). Not for cushioning only the last part of the stroke: use a cushioned cylinder, a deceleration controller or a damper (HSE HSG39 para 118; SMC). Meter-in is a poor choice where the load could run away (LibreTexts 15.2).
- **environment_limits**: Push-in speed controllers with NBR seals: about 0-60 °C, no freezing (Tameson product page); quick exhaust valves: about -20 to +75 °C (Festo datasheet). Needle-valve seals: NBR about -40 to 120 °C, PTFE about -20 to just over 200 °C (Tameson 'Needle valve'). Dirt: suspended solids can damage the needle and seat (Tameson 'Needle valve'), so filter the air. Water and chemicals: brass is unsuitable for saltwater, distilled water, acids and chlorides (Tameson 'Needle valve'). Load and pressure changes alter the speed you set (LibreTexts 15.1). Temperature changes a liquid's viscosity (Tameson 'Safety Valve and Relief Valve Selection'), so a hydraulic speed setting may drift as the oil warms ⚑ [uncertain: drift inferred, not stated by the source]. *(⚑ parts need confirming)*
- **safety_notes**: 1) A slowed cylinder still has its full force: a slow-closing gripper or clamp can still crush fingers (FIRST pneumatics manual notes flow control keeps maximum force). 2) Start adjusting from fully closed and open gradually, or the actuator can jump (Tameson product page). 3) An emptied (pre-exhausted) cylinder can shoot out when air returns, for example after an emergency stop; meter-in or soft-start valves prevent this sudden extension (HSE HSG39 para 120; SMC). 4) Meter-in control can't hold back a load that pulls the actuator along, so it may run away (LibreTexts 15.2). 5) Quick exhaust valves dump air fast and loud: fit a silencer and keep the exhaust away from faces (The Instrument Guru; Festo datasheet; HSE HSG39 para 116); faster strokes hit the end caps harder, so use cushioned cylinders (HSE HSG39 para 118). 6) Closing a flow control does not empty the line: let trapped pressure out before undoing fittings; some speed controllers have a residual-pressure release button (SMC). 7) Never point compressed air at anyone; even 15 psig can cause serious injury (FRC Zero).
- **common_failures**: 1) Fitted the wrong way round, so it slows the wrong stroke: check the arrow on the body (FIRST pneumatics manual). 2) Jerky, stick-slip motion from meter-in on a double-acting cylinder; change to meter-out (FIRST pneumatics manual). 3) Speed changes as the load changes (LibreTexts 15.1, 15.3). 4) Needle forced shut, deforming a resin seat or damaging a brass spindle, so the setting no longer behaves (Tameson product page; Wikipedia 'Needle valve'). 5) Needle and seat damaged by dirt or suspended solids in the fluid (Tameson 'Needle valve'). 6) 'Jumping' or rapid partial strokes when the valve is switched before the cylinder finishes its stroke (LibreTexts 14.2). 7) No effect at low pressure because the supply is below the valve's minimum pressure or the check valve's cracking pressure (Tameson product page). 8) A quick exhaust valve mounted away from the cylinder gives little speed gain (Festo datasheet). 9) In hydraulics, the needle valve appears to do nothing until pressure reaches the relief valve setting (LibreTexts 6.2). 10) Printed tube clamps drip or bind if the tube wall thickness doesn't match the design (Printables 'Roller Clamp').
- **related**: 
  - Check valve: the one-way part inside a speed controller; on its own it gives no adjustment
  - Pressure regulator: lowers the pressure, so it reduces force as well as speed; use it to limit force (FIRST pneumatics manual)
  - Switching valve (directional control valve): starts, stops and reverses the cylinder; flow controls can be fitted in its exhaust ports (LibreTexts 15.4)
  - Shut-off valve (ball valve): fully open or shut; ball and globe valves can also be used as rough adjustable orifices (LibreTexts 14.2)
  - Dampers (rotary and linear soft-close dampers): sealed units that slow a movement by forcing fluid through a small gap, the same idea built into the moving part
  - Speed governor: holds a turning speed steady automatically, while a flow control sets speed with a fixed restriction
  - Air or hydraulic cylinder: what it controls; cushioned cylinders slow only the end of the stroke (HSE HSG39 para 118)
  - Tesla valve: restricts flow one way with no moving parts, but can't be adjusted
  - Iris valve and pinch valve: squeeze a soft tube or opening to throttle flow, like a roller clamp
  - Syringe pump: sets an exact flow by pushing a plunger with a screw instead of throttling
  - Quick exhaust valve (covered here): speeds a stroke up instead of slowing it

### Pictures, videos and models

- **links**: 
  - [14.2: Flow Control Valves (Jessy Haid, Northeast Wisconsin Technical College; LibreTexts)](https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1:_Fluid_Power_and_Pneumatics_(NWTC)/14:_Flow_Control_Valves/14.02:_Flow_Control_Valves): ISO 1219 schematics of flow control valves (needle valve with bypass check valve) in cylinder circuits, with a plain explanation of orifices and meter-out control *(licence: CC BY 4.0)*
  - [QEV.gif (Masterjoa3000; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:QEV.gif): Animation of how a quick exhaust valve works (file description, in French: 'Fonctionnement d'une Quick Exhaust Valve') *(licence: CC BY-SA 3.0)*
  - [Symbol Retract resistor check valve.svg (MovGP0; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Symbol_Retract_resistor_check_valve.svg): Circuit symbol for a throttle check valve (one-way flow control: an adjustable restriction with a check valve in parallel) *(licence: Public domain)*
  - [Needle valve.jpg (wbaiv; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Needle_valve.jpg): Photo of a needle valve *(licence: CC BY-SA 2.0)*
  - [FIRST Robotics Competition Pneumatics Manual (FIRST, rev. Jan 2023), pp. 16-17 'Tuning actuator speed/force'](https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en): Plain guide to slowing robot air cylinders with regulators and one-way or bi-directional flow controls, with meter-in and meter-out set-ups for single- and double-acting cylinders *(licence: link only)*
- **make_it_yourself**: 
  - [Roller Clamp - One-handed operation and flow control (Dario A. R., Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/898729-roller-clamp-one-handed-operation-and-flow-control): Printed roller clamp that throttles flow in silicone or rubber tubing up to 16 mm, assembled around an installed tube *(licence: CC BY-NC-SA)*
  - [Flow control/valve (fluid and air) (IV style) (chrbau, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/871674-flow-controlvalve-fluid-and-air-iv-style): IV-style roller flow controller for about 5 mm silicone tube, for air or water, adjustable from free flow to a stop; prints in about an hour *(licence: CC BY-NC)*
  - [Aquarium fish tank Air Valve (firstgizmo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1014285-aquarium-fish-tank-air-valve): Screw-down printed valve that squeezes an aquarium air hose to regulate the air flow *(licence: CC BY-NC)*
  - [Flow Control Screw Valve (Klickeazy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1307026-flow-control-screw-valve): Screw-type flow control valve for 4 mm ID drip-irrigation hose, with an Onshape model *(licence: GNU GPL v3.0)*
- **diagram_idea**: A double-acting cylinder with a speed controller screwed into each port: on the extend stroke, green arrows show air entering freely through the open check valve on one side while red arrows show the escaping air squeezed past the needle on the other (meter-out), with a dial showing slower speed as the needle turns in; an inset shows a quick exhaust valve at the port dumping air straight out.
- **sources**: 
  - https://en.wikipedia.org/wiki/Needle_valve
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1:_Fluid_Power_and_Pneumatics_(NWTC)/14:_Flow_Control_Valves/14.02:_Flow_Control_Valves
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1%3A_Fluid_Power_and_Pneumatics_(NWTC)/15%3A_Speed_Control/15.01%3A_Adjusting_Flow_and_Speed
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1%3A_Fluid_Power_and_Pneumatics_(NWTC)/15%3A_Speed_Control/15.02%3A_Meter-In_Flow_Control_Circuits
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1%3A_Fluid_Power_and_Pneumatics_(NWTC)/15%3A_Speed_Control/15.03%3A_Meter-OutFlow_Control_Circuits
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1%3A_Fluid_Power_and_Pneumatics_(NWTC)/15%3A_Speed_Control/15.04%3A_Specialized_Flow_Control_Circuits
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/06%3A_Needle_Valves/6.02%3A_Needle_Valve_Operation
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/15%3A_Flow_Control_Valves/15.02%3A_Operation_of_a_Flow_Control_Valve_and_its_Scematic_Symbol
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_2%3A_Basic_Hydraulics_(NWTC)/15%3A_Flow_Control_Valves/15.03%3A_The_Effect_of_Actuator_Load_Changes_on_Flow_Control_Valve_Operation
  - https://www.firstinspires.org/hubfs/web/program/frc/resources/pneumatics-manual.pdf?hsLang=en
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://tameson.com/pages/needle-valve
  - https://tameson.com/products/r1-4-6mm-meter-out-rotatable-flow-control-valve
  - https://tameson.com/pages/safety-valve-relief-valve-selection
  - https://www.smcusa.com/products/connectors/speed-controllers~22159
  - https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2022/US/SEU_VB_ENUS.PDF
  - https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2025/EN_US/VBQF_ENUS.PDF
  - https://theinstrumentguru.com/quick-exhaust-valve/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://cvra.ch/blog/2016/airtank
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/898729-roller-clamp-one-handed-operation-and-flow-control
  - https://www.printables.com/model/871674-flow-controlvalve-fluid-and-air-iv-style
  - https://www.printables.com/model/1014285-aquarium-fish-tank-air-valve
  - https://www.printables.com/model/1307026-flow-control-screw-valve
  - https://commons.wikimedia.org/wiki/File:QEV.gif
  - https://commons.wikimedia.org/wiki/File:Symbol_Retract_resistor_check_valve.svg
  - https://commons.wikimedia.org/wiki/File:Needle_valve.jpg

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: sewing or leather tools, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
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
- **one_way_kind**: for air or liquid
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: steady speed or level
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits

## 315 Shut-off valve (tap, ball valve, stopcock)

*hydraulics, pneumatics & vacuum.* A hand valve that simply opens or closes a pipe; a ball valve turns a drilled ball a quarter turn, and its handle shows whether it is open

*Also covers:* Also covers gate, globe and plug valves.

### What it is

- **plain_name**: A handle on a pipe or tube that you turn to let water, air or gas through, or to stop it completely. On the most common kind (a ball valve) a short lever turns only a quarter of a turn, and you can see at a glance whether it is on: lever along the pipe means open, lever across the pipe means shut
- **term**: Shut-off valve (isolation valve, stop valve); the main kinds are the ball valve, plug valve (stopcock), gate valve and globe valve
- **aliases**: 
  - tap (UK and most of the Commonwealth), faucet (US), spigot; outdoor versions: sillcock, hose bib, bibcock, wall hydrant (Wikipedia 'Tap (valve)')
  - stopcock (any valve meant to stop the flow completely, e.g. the water stopcock under the kitchen sink; Wikipedia 'Stopcock')
  - stop valve, stop tap, isolating valve or isolation valve, service valve
  - quarter-turn valve (ball, plug and butterfly valves; Wikipedia 'Valve')
  - ball valve (also called a cone valve; Wikipedia); full-bore (full-port), reduced-bore (reduced-port), V-port, vented (self-venting), trunnion and floating ball valves; three-way L-port and T-port ball valves
  - plug valve, plug cock, taper-plug cock (UK), cone valve, gas tap or gas cock (Wikipedia 'Plug valve'; 'Tap (valve)')
  - laboratory stopcock (ground-glass or PTFE plug in a glass body), burette stopcock, three-way stopcock (lab and medical use; Wikipedia 'Stopcock')
  - gate valve, also called a sluice valve; knife gate valve for slurries; rising-stem and non-rising-stem gate valves (Wikipedia 'Gate valve')
  - globe valve, screw-down tap, screw-down stop valve, angle valve, Y-globe valve (Wikipedia 'Globe valve'; Tameson)
  - blast gate (a sliding-gate or ball-type shut-off for workshop dust-extraction pipes; Printables models)
  - not the same as a 'ballcock' (the float valve in a toilet cistern) or a 'ball check valve' (a one-way valve) (Wikipedia 'Ball valve')
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: seals & pass-throughs
- **one_liner**: A hand-operated valve fitted into a pipe or tube that is normally either fully open or fully shut: turning the handle swings a drilled ball or plug a quarter turn, or screws a gate or a rubber-faced plug down onto a seat, so you can turn a water, air, gas or vacuum line on and off or isolate part of a system for repair.
- **complexity**: A small assembly that acts as one unit. Ball valve: body, ball with a hole (bore) through it, two seats (rings, usually PTFE), stem with a seal, and a lever handle (Wikipedia 'Ball valve'; Commons diagram 'Esquema valvula de bola'). Gate valve: handwheel, stem, gasket, bonnet, body, flange and gate (Tameson gate valve guide). Globe valve or screw-down tap: handwheel, threaded stem, bonnet with packing, plug or disc (often with a rubber washer) and a ring-shaped seat (Wikipedia 'Globe valve'; Tameson globe valve guide). Plug valve or stopcock: a tapered plug with a hole through it, the body, and a retainer (a spring, clip, or washer and nut) (Wikipedia 'Plug valve'; 'Stopcock').
- **how_it_works**: A shut-off valve puts a movable blocking part into the flow path. In a ball or plug valve, the handle turns a ball or tapered plug with a hole drilled through it: when the hole lines up with the pipe the fluid flows, and a quarter turn (90 degrees) turns the solid side to face the flow, pressed against soft seats, so the flow stops (Wikipedia 'Ball valve'; 'Plug valve'). In a gate valve, several turns of a handwheel screw a flat or wedge-shaped gate down across the pipe, and in a globe valve (the old-style screw-down tap) they screw a plug or rubber washer down onto a ring-shaped seat (Wikipedia 'Gate valve'; 'Globe valve'; 'Tap (valve)'). Quarter-turn valves are quick, and their handle shows whether they are open; multi-turn valves close slowly, and globe valves also allow fine control of the flow (Tameson).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: lets air, water, gas or vacuum along a pipe when open, and seals the pipe shut when closed, e.g. to isolate a machine or a branch of pipework for repair (Wikipedia 'Stopcock'; HSE HSG39 para 83)
  - slow it, stop it or keep its speed steady: shutting the supply stops whatever the fluid was driving, and a part-open globe valve (or, coarsely, a part-open ball valve) turns the flow down; for fine speed control a needle (speed-control) valve is better (Tameson globe valve and ball valve handle guides)
- **motion**: rotate (ball, plug and butterfly valves: the handle and ball turn a quarter turn, 90 degrees, between open and shut) or rotate+slide (gate and globe valves: the handwheel turns several full turns and a screw thread moves the gate or plug straight up and down) (Wikipedia 'Valve'; Tameson gate valve guide)
- **degrees_of_freedom**: 1: the ball, plug, gate or disc can only move between open and shut, either by turning about the stem (ball and plug valves) or by sliding along it, with the screw thread linking turning to sliding (gate and globe valves)
- **special_behaviour**: 
  - indexing (clicks into set positions), loosely: a quarter-turn valve has end stops at open and shut, 90 degrees apart, and the lever's direction shows the state (along the pipe = open, across = shut) (Wikipedia 'Ball valve'; Tameson). Plug valves often have a stop limiting the handle to a quarter turn, but glass stopcocks don't (Wikipedia 'Plug valve'). Three-way L-port and T-port ball valves have several working positions (Wikipedia 'Ball valve')
  - self-aligning or self-centring: in a floating ball valve the line pressure pushes the ball slightly downstream, squeezing it onto the downstream seat, which tightens the seal (Wikipedia 'Ball valve')
  - fail-safe (vented ball valves and three-port isolating valves only): closing the valve also lets the trapped pressure on the outlet side escape through a small vent, so tools and cylinders downstream are left harmless (Tameson vented ball valves; HSE HSG39 para 85)
- **holding_principle**: 
  - shape (form-fit): the solid side of the ball, plug or gate physically blocks the bore (Wikipedia 'Ball valve'; 'Gate valve')
  - friction or clamping (force-fit): soft seats are squeezed against the ball, a screw thread presses a globe valve's rubber washer onto its seat, and a wedge-shaped gate is forced into its seat (Wikipedia 'Globe valve'; 'Gate valve')
  - suction or air pressure: the line pressure pushes a floating ball onto its downstream seat (Wikipedia 'Ball valve'); a glass laboratory stopcock can even be held in its socket by vacuum (Wikipedia 'Stopcock')
- **input_output**: not applicable (it opens or closes a flow path rather than passing motion on). Inside gate and globe valves a screw thread turns handwheel rotation into a straight up-and-down movement of the gate or plug (Tameson)
- **power**: passive (no power needed): turned by hand with a lever, T or butterfly handle, handwheel, removable key or screwdriver slot (Tameson ball valve handle guide; Wikipedia 'Tap (valve)'). Versions driven by an air, hydraulic or electric actuator also exist (Wikipedia 'Ball valve'); those are covered under the switching valve
- **removability**: removable: threaded, union, push-in, compression, flanged or barbed ends can be undone and the valve taken out (Tameson; GF Piping Systems manual). Solvent-welded plastic valves are permanent unless they have 'true union' nuts that let the valve body come out of the line (GF Piping Systems manual, pp. 35-37)
- **reuse_cycles**: many times: ball valves keep working 'after many cycles' and close securely even after long disuse (Wikipedia 'Ball valve'); globe-valve washers and seats wear and need renewing (Wikipedia 'Tap (valve)'); threaded and union-ended valves can be fitted and removed many times if their seals are renewed
- **tools_needed**: None to operate, apart from valves with a removable 'loose key' (sillcock key) or a screwdriver slot (Wikipedia 'Tap (valve)'; Tameson). To fit: pipe wrenches or spanners plus PTFE tape or pipe sealant for threaded ends (Tameson gate valve guide); nothing for push-in mini ball valves, where you push the tube in (Tameson); solvent cement and hand-tightening only for PVC union valves (GF Piping Systems manual)
- **seal**: airtight or pressure when shut: a ball valve's plastic seats press against the polished ball to give 'an airtight seal' (Wikipedia 'Ball valve'); a globe valve squeezes a rubber washer onto its seat; a plain gate valve 'rarely gives a perfect seal' (Wikipedia 'Tap (valve)'). Soft-seated valves (ball, plug, butterfly, diaphragm) are much less likely to leak when shut, while hard-seated ones (gate, globe) are more durable (Wikipedia 'Valve'). Seals or packing round the stem stop leaks out past the handle (Tameson), and glass stopcocks need grease to be airtight (Wikipedia 'Plug valve')
- **load**: rated by pressure, not by mechanical load: from low-pressure plastic and printed valves up to industrial ball valves for about 1,000 bar (Wikipedia 'Ball valve'). For example, a small push-in ball valve for 6 mm air tubing is rated to 9 bar and to vacuum (-1 bar) (Tameson). It is not a structural part: ball valves must be well supported, because an unsupported body twists when the handle is turned and can crack the joints (GF Piping Systems manual, p. 35)
- **adjustable**: yes, partly: a part-open valve reduces the flow. Globe valves are made for this; ball and gate valves are poor at it, because the flow changes most just before closing, and part-open gates vibrate and wear (Tameson; Wikipedia 'Gate valve'). For a steady low flow, use a needle valve, a globe valve or a V-port ball valve. Many ball-valve handles can be taken off and refitted the other way round (Tameson)
- **play_and_precision**: not applicable (it doesn't locate parts or pass on motion). The flow through a ball valve is not proportional to the handle angle, so small movements near closed change the flow a lot (Tameson ball valve handle guide)
- **access_needed**: end of a tube or shaft: it is fitted in line where a pipe or tube is cut, or screwed onto a tank port, and its handle has to stay reachable and needs room to swing (Tameson: a lever 'requires space to turn'; HSE HSG39 para 168: check that access to stop valves is maintained)
- **materials**: Bodies: brass, bronze, stainless steel, chrome, titanium, PVC, CPVC or PFA-lined metal for ball valves (Wikipedia 'Ball valve'); cast iron, ductile iron, gunmetal and steels for gate valves (Wikipedia 'Gate valve'); brass for most taps (Wikipedia 'Tap (valve)'); glass or PTFE for laboratory stopcocks (Wikipedia 'Stopcock'). Balls are often chrome-plated; seats are virgin or reinforced PTFE, Delrin (acetal), nylon, PEEK, UHMWPE, Viton or metal (Wikipedia 'Ball valve'). A typical small pneumatic ball valve has a PBT plastic body with a nickel-plated brass ball (Tameson). Printed valves: test in PLA, then use a tougher material; one maker printed a replacement valve cap in ABS at 100% infill (Printables models)
- **maker_difficulty**: easy to buy and fit: cheap brass, plastic and push-in mini ball valves screw or push into the line (Tameson). Moderate to print a working one: low-pressure print-in-place water ball valves and ball-type blast gates for dust collection exist, but they only suit low-pressure water, air or dust ducts and need the right clearance and some sealing (Printables models)

### Making it

- **processes**: 
  - off-the-shelf part: brass, stainless, PVC and push-in ball valves, gate and globe valves, gas taps and laboratory stopcocks (Wikipedia; Tameson)
  - 3D print (FDM): low-pressure print-in-place water ball valves, ball-type dust-collection blast gates, and replacement handles for quarter-turn valves (Printables models)
  - 3D print (resin): a 4-way selector valve has been resin-printed in one block together with a gear pump and relief valve for a small water and oil hydraulic demo (Indeterminate Design, via Hackaday)
- **print_in_place**: yes for small low-pressure designs: MarkoJ's 'Simple Water Ball Valve, Hose and Gardena Fittings (print in place)' prints already assembled, with 0.3 mm clearances and no assembly (Printables API). No for larger designs: ball-type blast gates are printed as separate parts (two case halves, ball 'rotator', lever) and joined with screws and nuts, sometimes with a bearing (PeterH1500 and Dreklord, Printables API)
- **making_tips_3d_printing**: 1) Use printed valves only for low-pressure water, air or dust ducts; MarkoJ describes his as an 'emergency low-pressure water ball valve' (Printables). Never use one on mains water, gas, an air tank or anything holding stored pressure. 2) Print-in-place clearance: MarkoJ used 0.3 mm between the ball and its housing, printed it standing on the fitting face with the valve cavity pointing up, with supports touching the build plate only, and tested in PLA before using 'mechanically resistant materials' (Printables). 3) Assembled valves: Dreklord advises no less than 0.5 mm between the ball and the housing (he could already feel friction at 0.5 mm), printing the ball with supports so it comes out round, and sealing the valve into the pipe with silicone; 3 walls with no infill was strong enough for the ball (Printables). 4) Mark which way is open: PeterH1500 added arrows to the ball and lever bearing because users were confused about which way to fit the lever (Printables). 5) Seal joints with O-rings: Gardena-style hose fittings need two O-rings (MarkoJ, Printables). 6) Replacement handles and caps are the most common and safest printed valve part: jcjames_13009 added end stops so a printed toilet-valve knob turns exactly a quarter turn (PLA, 0.20 mm layers, 3 perimeters, 25% gyroid infill, supports under the base), and DocWeebl printed a washing-machine isolation-valve cap at 100% infill in ABS 'so it didn't snap', with a 0.3 mm air gap under a support column, and used it only on the cold-water valve, unsure how PLA would last on hot water (Printables). 7) A hobby servo can turn a printed ball valve to make an automatic blast gate (The Brumberjack, Printables).
- **off_the_shelf_parts**: Lever-handle brass ball valves (full bore or reduced bore; BSP or NPT threads, male or female); mini ball valves with T or butterfly handles; push-in (push-to-connect) mini ball valves for 4-8 mm pneumatic tubing; PVC and CPVC true-union ball valves; three-way L-port and T-port ball valves; vented (self-venting) ball valves; lockable ball valves and valve lockout devices; V-port (characterised) ball valves for flow control; gate valves with rising or non-rising stems; globe valves, angle valves and screw-down stop taps; plug cocks and gas taps; laboratory stopcocks (glass or PTFE) and three-way stopcocks; garden hose shut-off valves and sillcocks; quarter-turn isolation valves for washing machines and toilets; butterfly valves and blast gates; motorised and air-actuated ball valves; spare handles, stem packing and seat kits (Wikipedia 'Ball valve', 'Gate valve', 'Plug valve', 'Stopcock', 'Tap (valve)'; Tameson; HSE HSG39)
- **rules_of_thumb**: 
  - Ball-valve handle along the pipe = open; across the pipe = shut. The shut position may be a quarter turn either way (Wikipedia 'Ball valve'; Tameson ball valve handle guide)
  - Use ball, plug and gate valves fully open or fully shut. To set a flow, use a globe valve, a needle valve or a V-port (characterised) ball valve: part-open gates wear and vibrate, and part-open standard ball valves risk cavitation and erosion (Tameson gate valve guide; Tameson ball valve handle guide; Wikipedia 'Gate valve')
  - Flow resistance when fully open, as an equivalent length of straight pipe in pipe diameters (L/D): about 3 for ball and butterfly valves, 8 for gate valves, 55 for angle globe valves, 150 for Y-globe valves and 340 for standard globe valves (Tameson globe valve guide)
  - A full-bore ball valve's hole is the same size as the pipe; a reduced-bore valve's is about one pipe size smaller, so the fluid speeds up through it (Wikipedia 'Ball valve')
  - Close valves on long liquid lines slowly: GF recommends closure times 'considerably greater than 2L/c' (L = pipe length; c = speed of the pressure wave, taken as 4,720 ft/s), treats about 5 ft/s (1.5 m/s) as a safe water speed in plastic pipe, and says operating pressure plus water-hammer surge should never exceed 150% of the system's pressure rating (GF Piping Systems manual, pp. 9-10). Wikipedia also cites pipe-sizing charts that keep water speed at or below 1.5 m/s to limit water hammer ('Hydraulic shock')
  - PVC pressure ratings fall as it warms: multiply the rating at 73 F (23 C) by 0.75 at 90 F, 0.50 at 110 F and 0.22 at 140 F (60 C), which is the highest temperature PVC is used at; CPVC goes up to 210 F (99 C) (GF Piping Systems manual, pp. 4 and 12)
  - Support ball valves so that turning the handle can't twist the pipe joints. Hand-tighten PVC union nuts (sizes 3/8 to 1 1/2 in need nothing more before a pressure test), go at most 1/8 turn further on larger sizes with a strap wrench, and use no lubricant on the threads and no metal tools (GF Piping Systems manual, pp. 35-37)
  - Threaded valves: wrap PTFE tape the same way as the thread, start the valve by hand to avoid cross-threading, then tighten with a wrench without overtightening; check for leaks by turning the supply on slowly (Tameson gate valve guide)
  - Compressed air: fit stop valves so the whole pipework and each branch can be isolated, make each lockable in the closed position, use three-port or self-venting ball valves so isolating also vents the downstream side, and check every six months that each valve shuts off, opens fully and turns freely (HSE HSG39 paras 83-85 and 168)
  - Operate rarely used gate valves now and then so they don't seize (Tameson gate valve guide); ball valves are known for closing securely even after long disuse (Wikipedia 'Ball valve')
  - Glass stopcocks need stopcock grease to seal and to stop the plug seizing; PTFE plugs are at most lightly oiled (Wikipedia 'Stopcock')
  - Printed ball valves: about 0.3 mm clearance for print-in-place and at least 0.5 mm for assembled designs (MarkoJ and Dreklord, Printables)

### When to use it

- **everyday_examples**: 
  - The stopcock under the kitchen sink or by the water meter that shuts off the water to the house (Wikipedia 'Stopcock')
  - An old-style screw-down bath or basin tap, which is a globe valve with a rubber washer (Wikipedia 'Tap (valve)')
  - The quarter-turn gas tap on a cooker or gas pipe, whose handle lies along the pipe when it is on (Wikipedia 'Tap (valve)'; 'Plug valve')
  - The little quarter-turn isolation valves on the pipes to a washing machine or toilet, and the outdoor garden tap (hose bib) (Wikipedia 'Tap (valve)'; Printables models)
- **when_to_use**: Use a shut-off valve wherever you need to turn a flow on and off by hand, or to isolate part of a system: at the inlet of a machine, pump or soft-robot air supply so you can work on it; on each branch of a workshop air line; on a water line before a filter or pump; and on the drain or outlet of a tank (HSE HSG39 paras 83-88; Wikipedia 'Stopcock'). Pick a ball valve for most jobs: it is quick, shows its state, seals well, has little flow resistance and still shuts after years of disuse (Wikipedia 'Ball valve'; Tameson). Pick a gate valve where the pipe must be completely clear (slurries, thick liquids, large pipes) and slow closing helps prevent water hammer, and a globe valve where you also want to set the flow (Tameson). Three-way L- or T-port ball valves switch a flow between two outlets by hand (Wikipedia 'Ball valve'). In workshop dust extraction, ball-type or sliding blast gates open and shut each machine's duct (Printables models).
- **when_not_to_use**: Don't use a ball or gate valve to set a flow or a cylinder's speed: use a needle (speed-control) valve, a globe valve or a V-port ball valve (Tameson). Don't use one to switch a flow automatically: use a switching (solenoid or directional) valve or an actuated ball valve. To stop backflow automatically, use a check valve; to cap the pressure, use a pressure regulator or relief valve. For soft tubing at low pressure, a pinch clamp or pinch valve that squeezes the tube shut is simpler (Wikipedia 'Pinch valve'). A plain gate valve is a poor choice where a perfect seal matters ('rarely gives a perfect seal', Wikipedia 'Tap (valve)'), and a three-way T-port valve is risky where all ports must be cut off, because the 45-degree 'all shut' position 'leaves no margin for error' (Wikipedia 'Ball valve'). Never use a 3D-printed valve on mains water, gas, compressed-air tanks or any line holding stored pressure.
- **environment_limits**: Freezing: a shut ball valve traps water in the cavity round the ball, which can crack the body when it freezes; insulate it, use heat tape or buy a freeze-tolerant valve with a sacrificial freeze plug (Wikipedia 'Ball valve'). Heat: PVC valves are limited to 60 C (140 F), where their pressure rating falls to 22% of the room-temperature value; CPVC reaches 99 C (210 F) (GF Piping Systems manual); a typical small push-in pneumatic ball valve is rated 0-60 C with no freezing (Tameson). Sunlight: UV slowly degrades the surface of PVC, reducing impact strength but not the pressure rating (GF Piping Systems manual, p. 40). Corrosion and disuse: check valves in corrosive surroundings and operate rarely used gate valves now and then so they don't seize (Tameson). Sediment and residue: dirt collects in the cavity round a part-open ball (Wikipedia 'Ball valve'), and a particle caught between seat and disc makes a shut valve leak (Wikipedia 'Valve'). Wear: rubber washers and seats wear and corrode over time (Wikipedia 'Tap (valve)'). Printed valves: no tested temperature limits found; one maker used his printed ABS valve cap only on cold water (Printables) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Water hammer: a quarter-turn valve can be shut in a fraction of a second, and suddenly stopping a moving column of water sends a pressure surge along the pipe that can burst pipes and fittings; 'water hammers have caused accidents and fatalities' (Wikipedia 'Ball valve'; 'Hydraulic shock'). Close valves on long water pipes slowly. 2) Shutting a valve doesn't remove pressure that is already downstream: before undoing a pipe, cylinder or tool, isolate it and vent it to atmosphere completely (HSE HSG39 para 169), ideally with a vented ball valve or three-port valve (para 85). A cylinder held by two shut valves can still move when one of its pipes is undone, because the trapped air on the other side expands (HSE HSG39 para 139). 3) Levers get knocked: lever-operated stop valves 'can be inadvertently moved to the open position', so during maintenance lock them shut or take the handle off (HSE HSG39 para 87). 4) Mark grouped or hidden valves with what they control (HSE HSG39 para 86). 5) Three-way valves: check which ports connect in each position before relying on one, since a T-port valve has no fully shut position with any margin (Wikipedia 'Ball valve'). 6) Gas: a gas tap is a ball or plug valve (Wikipedia 'Tap (valve)'); leave work on gas pipes to qualified fitters ⚑ [uncertain: local rules not checked]. 7) Never trust a 3D-printed valve to hold pressure, gas or hot water. *(⚑ parts need confirming)*
- **common_failures**: 1) Dripping screw-down tap: the rubber washer and seat of a globe valve wear and corrode until it no longer seals; renew the washer or resurface the seat, or fit a ceramic-disc cartridge (Wikipedia 'Tap (valve)'). 2) Leak round the stem: the stem packing or seal needs renewing (Tameson). 3) Seized valve after years unused, especially gate valves: operate valves now and then; Tameson suggests spraying a lubricant such as WD-40 where the handle meets the valve, waiting 20 minutes, then tapping gently (Tameson). 4) Frost-cracked body from water trapped round the ball (Wikipedia 'Ball valve'). 5) Gate valve that never quite shuts, or vibrates and wears when left part-open (Wikipedia 'Gate valve'; 'Tap (valve)'). 6) Leaks or cracks at plastic union joints from misalignment, dirt on the O-ring, using the nut to pull a gap closed, or an unsupported valve twisting when turned (GF Piping Systems manual). 7) Broken or rusted handle: replace it, or the whole valve if no handle fits (Tameson). 8) Glass stopcock seized solid for lack of grease (Wikipedia 'Stopcock'). 9) Printed valves that bind (too little clearance between ball and housing) or leak at the joints; give at least 0.5 mm clearance and use O-rings or silicone (Dreklord and MarkoJ, Printables).
- **related**: 
  - Check valve (one-way valve): opens and shuts by itself depending on flow direction and can't be turned off by hand; a 'ball check valve' is not a ball valve (Wikipedia 'Ball valve')
  - Switching valve (directional control or solenoid valve): routes or switches flow on command, by electricity, air or a lever, rather than just isolating a line
  - Speed-control valve (needle valve, flow control valve): an adjustable narrow gap for setting a flow or a cylinder's speed, not for full shut-off
  - Iris valve and pinch valve: shut a soft sleeve or tube by twisting or squeezing it, so the fluid touches only the tube (Wikipedia 'Pinch valve')
  - Butterfly valve and blast gate: also quarter-turn, but a disc stays in the flow and causes a pressure drop even when open; cheaper and lighter in big sizes (Wikipedia 'Butterfly valve')
  - Diaphragm valve: a flexible membrane is pressed onto a seat; soft-seated like ball and plug valves (Wikipedia 'Valve')
  - Float valve (ballcock): shuts a water inlet automatically when a tank is full; not the same as a ball valve (Wikipedia 'Ball valve')
  - Pressure regulator and pressure relief valve: control or cap the pressure automatically instead of simply opening or shutting the line
  - Quick couplers for tubes and hoses: some shut themselves off on the supply side when unplugged, and HSE asks for self-venting sockets on larger air hoses (HSE HSG39 para 101)
  - Hose barb, compression fitting and O-ring seal: the fittings and seals used to connect a valve into a line

### Pictures, videos and models

- **links**: 
  - [Ball.PNG (Ruben Castelnuovo; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ball.PNG): Cutaway of a simple manual ball valve with its body, seat/head, ball, lever handle and stem labelled *(licence: CC BY-SA 3.0 (also GFDL 1.2 and CC BY-SA 2.5, 2.0, 1.0))*
  - [Esquema valvula de bola 1-6.svg (Sthidraulica, SVG by Sunspeanzler; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Esquema_valvula_de_bola_1-6.svg): Section through a ball valve: 1 ball, 2 stem, 3 compression seal fitting, 4 lever, 5 dead space, 6 seat *(licence: GFDL 1.2 or CC BY-SA 1.0-4.0 (your choice))*
  - [3-way.svg (Ruben Castelnuovo, SVG by Actam; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:3-way.svg): Schematic of the flow paths of three-way ball valves with T-shaped and L-shaped bores in each handle position *(licence: GFDL 1.2 or CC BY-SA 1.0-4.0 (your choice))*
  - [Gatevalve.ogg (Jihei; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Gatevalve.ogg): 14-second animation of a gate valve's handwheel screwing the gate down across the pipe and back up *(licence: CC BY-SA 3.0)*
  - [Globe valve diagram.svg (Petteri Aimonen; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Globe_valve_diagram.svg): Cross-section of a globe valve with the stem, bonnet, plug and body labelled *(licence: Public domain)*
- **make_it_yourself**: 
  - [Simple Water Ball Valve, Hose and Gardena Fittings (print in place) (MarkoJ, Printables) (URL seen in search results; page details read through the Printables API)](https://www.printables.com/model/294860-simple-water-ball-valve-hose-and-gardena-fittings-): Low-pressure water ball valve that prints already assembled with 0.3 mm clearances, with hose and Gardena-style fittings (the Gardena ones need two O-rings) *(licence: CC BY)*
  - [100mm / 4" Truncated & Full-Size Ball Valve Type Non-Clog Blast Gate for Workshop Dust Extraction Network (PeterH1500, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/137790-100mm-4-truncated-full-size-ball-valve-type-non-cl): Popular printed ball-valve blast gate for 100 mm dust-extraction hose; case halves, ball rotator and lever joined with M4 screws, with arrows showing the open position *(licence: CC BY-NC-SA)*
  - [Parametric Ball valve (Dreklord, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/393151-parametric-ball-valve): Parametric remix of the 100 mm ball-valve blast gate: set the pipe diameter and the ball-to-housing tolerance (at least 0.5 mm advised) *(licence: CC BY-NC)*
  - [Servo Mounted Ball Valve Blast Gate (The Brumberjack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/310335-servo-mounted-ball-valve-blast-gate): The printed ball-valve blast gate driven by a hobby servo, to open and close parts of an air system automatically *(licence: CC Public Domain)*
  - [Replacement handle for WC 1/4 turn water valve (jcjames_13009, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/271584-replacement-handle-for-wc-14-turn-water-valve): Printed replacement knob with built-in end stops so a toilet isolation valve turns exactly a quarter turn; includes the Fusion 360 file *(licence: CC BY-NC-SA)*
- **diagram_idea**: A ball valve drawn twice in cutaway with its lever: open (hole along the pipe, lever along the pipe, blue flow arrows passing through) and shut after a quarter turn (hole across the pipe, lever across, flow stopped at the seat), with small side sketches of a gate valve and a screw-down globe valve for comparison.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ball_valve
  - https://en.wikipedia.org/wiki/Gate_valve
  - https://en.wikipedia.org/wiki/Globe_valve
  - https://en.wikipedia.org/wiki/Plug_valve
  - https://en.wikipedia.org/wiki/Tap_(valve)
  - https://en.wikipedia.org/wiki/Stopcock
  - https://en.wikipedia.org/wiki/Valve
  - https://en.wikipedia.org/wiki/Butterfly_valve
  - https://en.wikipedia.org/wiki/Pinch_valve
  - https://en.wikipedia.org/wiki/Hydraulic_shock
  - https://tameson.com/pages/ball-valve-handle
  - https://tameson.com/pages/gate-valve
  - https://tameson.com/pages/globe-valve
  - https://tameson.com/collections/vented-ball-valves
  - https://tameson.com/products/6mm-6mm-union-elbow-2-way-ball-valve-series-20
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://kebechem.com/fiches_techniques/Fiche_technique_pvc_cpvc.pdf (GF Piping Systems, 'Schedule 80 PVC and CPVC, Schedule 40 PVC Piping Systems Technical Manual', manufacturer manual on a distributor site)
  - https://hackaday.com/2024/06/29/building-a-hydraulic-system-with-3d-printed-sla-resin-parts/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/294860-simple-water-ball-valve-hose-and-gardena-fittings-
  - https://www.printables.com/model/137790-100mm-4-truncated-full-size-ball-valve-type-non-cl
  - https://www.printables.com/model/393151-parametric-ball-valve
  - https://www.printables.com/model/310335-servo-mounted-ball-valve-blast-gate
  - https://www.printables.com/model/271584-replacement-handle-for-wc-14-turn-water-valve
  - https://www.printables.com/model/281610-washing-machine-isolation-valve-tap
  - https://commons.wikimedia.org/wiki/File:Ball.PNG
  - https://commons.wikimedia.org/wiki/File:Esquema_valvula_de_bola_1-6.svg
  - https://commons.wikimedia.org/wiki/File:3-way.svg
  - https://commons.wikimedia.org/wiki/File:Gatevalve.ogg
  - https://commons.wikimedia.org/wiki/File:Globe_valve_diagram.svg
  - https://commons.wikimedia.org/wiki/File:Tap.png

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: clicks
- **tools**: none, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes

## 316 Vacuum hold-down table (vacuum table)

*hydraulics, pneumatics & vacuum.* A flat plate with holes or grooves over a sealed chamber that a vacuum pump empties, so air pressure pins sheets flat for CNC milling, laser cutting or PCB making

### What it is

- **plain_name**: A flat, airtight box whose top is full of small holes or grooves: lay a sheet on top, switch on a vacuum pump or shop vacuum, and the air pressure in the room presses the sheet flat and holds it still while you cut it, with no clamps, screws or tape in the way
- **term**: Vacuum table (vacuum hold-down table, vacuum workholding)
- **aliases**: 
  - vacuum hold-down, vacuum hold-down system, universal vacuum table (Make:; CNC Cookbook)
  - vacuum workholding, vacuum workholding table (Printables 1362329)
  - vacuum bed, CNC vacuum bed (CanCam)
  - vacuum chuck, vacuum fixture, vacuum plate, vacuum tombstone (CNC Cookbook 'Vacuum Chucks, Fixtures and Clamping')
  - vacuum pods or vacuum clamps (moveable pads on a pipe, Mekanika)
  - grid table (holes or criss-cross grooves) and plenum table (Mekanika; CNC Cookbook)
  - plenum (the grooved bottom layer) and bleeder board, spoilboard or spoil board (the porous MDF top layer) (Mekanika; CNC Cookbook; CanCam)
  - vacuum fixture table, PCB vacuum table, sinterplate (sintered porous plate, e.g. LPKF (brand)) (Printables 1513539, 668832; Hackaday 2019 comments)
  - vacuum stencil jig for solder paste (Printables 451126)
  - table a depression (French), vacuumtafel (Dutch) (Printables 370205; Wikimedia Commons file name)
  - Airweights (brand) vacuum workholding system (named in Printables 1362329)
  - magnetic clamping table or magnetic chuck: the steel-only equivalent (Wikipedia 'Vacuum table')
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A perforated or grooved plate over a sealed chamber that a vacuum source keeps below room pressure, so the air above presses any flat sheet laid on it down onto the plate and friction stops it sliding while it is milled, laser-cut, drilled or printed on.
- **complexity**: A small assembly that acts as one unit: a sealed base or plenum with grooves or a hole grid, an optional porous MDF bleeder board on top, a gasket cord or foam strip around the work area, a hose or PVC pipe network with ball valves for zones, a vacuum gauge, an inlet filter, and a vacuum source (shop vacuum, vacuum motor, side-channel blower, rotary-vane pump or compressed-air venturi) (Mekanika; Make:; CNC Cookbook).
- **how_it_works**: The pump pulls air out of the chamber under the plate, so the pressure underneath the workpiece drops below the room's air pressure; the higher pressure on top then pushes the sheet down with a force equal to the pressure difference times the area the vacuum acts on (Wikipedia 'Vacuum table'; Mekanika). That downward push also raises the friction between sheet and table, which is what stops the cutter dragging the part sideways (Wikipedia; Mekanika). Any leak, from a gap at the edge, a porous sheet or a cut that goes right through, lets air in and lowers the hold, so tables use gaskets, zones with valves, or a pump with enough air flow to keep up with the leaks (CNC Cookbook). With a porous MDF bleeder board on top, the vacuum spreads under the whole sheet instead of only under the grooves, giving more hold but more leakage (Mekanika; CNC Cookbook).

### Finder attributes

- **job**: 
  - join and hold: holds a flat sheet or plate still on a machine bed for cutting, engraving, drilling or printing, with nothing on top in the tool's way (Wikipedia; Mekanika)
  - hold or release using power: it holds only while the vacuum source runs, and lets go when the vacuum is switched off or vented (CNC Cookbook 'Vacuum Chucks')
- **motion**: none: it holds the workpiece still against the table
- **degrees_of_freedom**: 0 while the vacuum is on: the sheet is pressed down so it can't lift, and friction (plus optional dowel pins or stops) keeps it from sliding or turning (Mekanika; CNC Cookbook). With the vacuum off the sheet is free to lift off
- **special_behaviour**: 
  - quick-release: switch off or vent the vacuum (a ball valve on the line does it without stopping the pump) and the part lifts straight off; loading needs no tools (CNC Cookbook 'Vacuum Chucks'; Mekanika)
- **holding_principle**: 
  - suction or air pressure: the room's air pressure pushes the sheet onto the low-pressure plate (Wikipedia 'Vacuum table')
  - friction or clamping (force-fit): sideways grip comes only from friction between sheet and table, which the air pressure increases; Mekanika uses a friction coefficient of 0.40 for wood on wood (Mekanika; Wikipedia)
  - powered hold: the hold lasts only while the vacuum source keeps the chamber evacuated (CNC Cookbook)
- **input_output**: not applicable
- **power**: powered: needs a running vacuum source, such as a shop vacuum or vacuum motor, a side-channel (regenerative) blower, a rotary-vane pump or a compressed-air venturi generator (CNC Cookbook; Mekanika; Printables 370205). If power fails the vacuum leaks away and the part is released, or pops off under the cutter (CNC Cookbook). A vacuum tank on the line gives 'a little extra capacity' (CNC Cookbook 'Vacuum Chucks'); a check valve to hold vacuum briefly after a pump stops is common practice ⚑ [uncertain] *(⚑ parts need confirming)*
- **removability**: tool-free quick release for the workpiece (vent the vacuum and lift it off). The table itself is bolted or screwed to the machine bed and can be removed (Printables 1362329 uses M4 threaded inserts in the spoilboard; hackaday.io 166349)
- **reuse_cycles**: effectively unlimited: the table is reused for every job; only the sacrificial bleeder board is resurfaced from time to time and replaced when too thin (CNC Cookbook; Make:)
- **tools_needed**: none to load or unload a part. To build or service one: a CNC router or table saw for the plenum, sealer (polyurethane, epoxy or thinned wood glue) for MDF, gasket cord or foam strip, PVC pipe and glue or push-in fittings, ball valves and a vacuum gauge (Make:; Mekanika; CNC Cookbook)
- **seal**: airtight or pressure (vacuum): a gasket cord or closed-cell foam strip around the work area, sealer on MDF faces and edges, and the workpiece itself acting as the lid; unused holes are covered with paper, card or rubber mats (Mekanika; Make:; CNC Cookbook; Hackaday 2016; hackaday.io 166349)
- **load**: Pull-off force = vacuum x area: at most about 10 N per square cm (14.7 psi) at sea level with a perfect vacuum, so a 10 in x 10 in part could in theory be held with almost 1,500 lb (CNC Cookbook). Real tables reach less: a shop vacuum about 2-2.5 psi, a regenerative blower about 4-5 psi (8-10 inHg), rotary-vane and liquid-ring pumps nearer full vacuum (CNC Cookbook). Mekanika's side-channel blower at 250 mbar under a 50 x 50 cm board gives 625 kg in theory, about 300 kg allowing for 50% effective groove area, and about 120 kg of sideways friction. So it is heavy for large sheets, light for small parts; strongest against straight lifting, weaker sideways (friction only) and weakest against levering or peeling, e.g. tall parts or a cutter grabbing an edge (CNC Cookbook 'Vacuum Chucks')
- **adjustable**: yes: the vacuum area is changed with valved zones, gasket cord pressed into grooves, or paper or plywood blanking sheets, and the vacuum level is watched on a gauge (Mekanika; Make:; CNC Cookbook). A relief valve lets a minimum air flow through a side-channel blower (Mekanika)
- **play_and_precision**: No play while held, and the sheet is pulled flat against the table, which is why it suits thin PCBs and warped sheets (Hackaday 2019; Hackaday 2016). It does not locate the part by itself: for repeatable or two-sided work, add dowel pins in matching holes or work stops (CNC Cookbook; Make:; Hackaday 2019, raised pegs for double-sided PCBs). Flatness of the table limits accuracy, so the bleeder board is resurfaced on the machine (CNC Cookbook; Mekanika). The sheet can still slide if cutting forces beat friction
- **access_needed**: one side only (blind): the part is simply laid on top, leaving the top and edges free for the tool (Wikipedia)
- **materials**: Table: MDF plenum sealed with polyurethane, epoxy or thinned wood glue; HDPE, ABS, PVC, PLA or nylon boards; machined aluminium; 3D-printed PLA or PETG tiles; porous bleeder of 'Ultralite' MDF (about 40% lighter and more porous than normal MDF); laminate (Formica) skin to avoid scratching delicate parts (Make:; Mekanika; CNC Cookbook; Wikipedia; Printables 1513539). Workpieces it holds well: plywood, MDF, hardwood, acrylic, polycarbonate, PVC, aluminium, brass, steel, carbon fibre, glass fibre and dense foam board, i.e. flat, smooth, non-porous sheets (Mekanika). Poor: porous or very rough sheets, foam board and MDF workpieces that leak, warped or irregular shapes, and tiny parts (Mekanika; CNC Cookbook)
- **maker_difficulty**: easy to moderate: a laser-cut or CNC-cut MDF box with slots and a shop vacuum works for laser cutting and light routing (Hackaday 2016; CNC Cookbook), and printable tiles exist (Printables 1362329); a flat, well-sealed, zoned table with a proper pump for metal cutting is moderate to hard (hackaday.io 166349)

### Making it

- **processes**: 
  - CNC: machined MDF, plastic or aluminium plenum with grooves or a hole grid, faced flat on the machine itself (Mekanika; hackaday.io 166349; Hackaday 2024)
  - laser cut: MDF box with a slotted top for a laser cutter (Hackaday 2016)
  - woodwork: MDF base, plenum and bleeder board glued and sealed, PVC plumbing (Make:)
  - 3D print (FDM): modular tiles or small fixture tables for desktop CNCs and PCB milling (Printables 1362329, 1513539)
  - off-the-shelf part: commercial vacuum tables, chucks, pods and pumps (Mekanika; CNC Cookbook)
- **print_in_place**: no: printed tables are flat tiles or plates that are glued together and fitted with a gasket and a hose fitting (Printables 1362329, 1513539)
- **making_tips_3d_printing**: 1) Print walls thick and solid enough to be airtight: one PCB fixture table recommends PLA or PETG, 4-5 perimeters ('important for vacuum sealing'), at least 6 top and bottom layers, 0.2-0.28 mm layers, no supports (Printables 1513539). 2) Seal joints and pores: a modular design glues tiles together with generous thick CA (superglue), which also seals the gaps between them, and glues the threaded air adapter on with visible squeeze-out (Printables 1362329). 3) Add a gasket: foam tape or rubber cord round the perimeter (Printables 1513539), or 1/4 in x 1/8 in closed-cell foam weather strip pressed into a grid of grooves to make temporary zones (Printables 1362329). 4) Use a hose fitting you can thread: 1/4 in NPT quick-connect fittings and 1/4 in hose for a small pump (Printables 1362329), or a 1 in duct for a shop vacuum (Printables 1513539). 5) Add alignment: printed tiles can take 3 mm steel dowels or printed pins for fixture plates (Printables 1362329). 6) Keep it light duty: printed tables are meant for PCB milling, engraving and light cuts, and a crash into a printed table is cheap (Printables 1513539, 1362329). 7) Put a sacrificial spoilboard (MDF, acrylic or FR4) on top if the tool may cut through (Printables 1513539). 8) Printed plastic softens with heat, so keep it away from hot substrates and laser beams ⚑ [uncertain] *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Vacuum sources: shop vacuum or wet-dry vacuum, vacuum motors (as used in central vacuum systems), side-channel (regenerative) blowers, rotary-vane vacuum pumps, liquid-ring pumps, compressed-air venturi vacuum generators (e.g. PIAB (brand); ZU05S type), converted compressors (CNC Cookbook; Mekanika; Printables 370205). Table parts: aluminium vacuum plates and grid tables, vacuum pods, round vacuum chucks, sinterplates, Ultralite MDF bleeder board, neoprene or closed-cell foam gasket cord, rubber hole mats, ball valves or gate valves for zones, vacuum gauges, inlet filters, relief valves, liquid separators or coolant traps, VacuCard (brand) paper backing sheets (Make:; Mekanika; CNC Cookbook; hackaday.io 166349)
- **rules_of_thumb**: 
  - Hold-down force = pressure difference x area that sees the vacuum; with a non-porous plate only the area of the grooves or holes under the part counts, not the whole part (CNC Cookbook; Mekanika)
  - Check sideways grip, not just lift: sideways resistance = friction coefficient x hold-down; for wood on wood use about 0.40, so 6,250 N of hold-down resists about 2,500 N sideways (Mekanika)
  - Use a safety factor: CNC Cookbook's calculator halves the calculated hold-down by default (2x factor), and tall parts with small bases need more margin because the cutter gets leverage (CNC Cookbook 'Vacuum Chucks')
  - Typical vacuum levels: shop vacuum 2-2.5 psi; regenerative blower 4-5 psi (8-10 inHg); rotary-vane and liquid-ring pumps up to nearly full vacuum (CNC Cookbook); a working universal table should read about 15-20 inHg on its gauge when new (Make:)
  - Vacuum level sets how hard a sealed part is held; air flow (CFM) sets how many leaks the pump can keep up with. A leaky 4 x 8 ft MDF table needs 200 CFM or more; one rule of thumb is 25 hp of pump for a 4 x 8 ft table, with 12 hp about the minimum (CNC Cookbook)
  - A side-channel blower's vacuum falls as air flow rises: one 1.5 kW blower gives 285 mbar when sealed but only 150 mbar with 90 m3/h of leakage through MDF, nearly halving the force (Mekanika)
  - Remove the dense skins of MDF bleeder boards so air can pass: fly-cut about 0.050 in (CNC Cookbook) or at least 0.5 mm (CanCam) off both faces, and seal the four edges (CanCam; Make:)
  - Groove-and-cord gaskets: with 1/8 in closed-cell foam cord, mill grooves about 0.08 in deep or less (0.1 in gave poor seals), break the groove edges, and space grooves so stock in whole inches always overlaps a seal (CNC Cookbook 'Vacuum Chucks', quoting a builder)
  - Plumb zones with 2 in PVC and ball valves; avoid sharp bends and use Y fittings rather than tees (Make:); fit an inlet filter, and a relief valve so a side-channel blower always has some air flow (Mekanika)
  - To keep small parts from flying off: leave a thin 'onion skin' at the bottom and cut it last with a light pass, use tabs, and keep nested parts attached as long as possible (CNC Cookbook; Make:)
  - If the table must take liquid coolant, fit a liquid separator or coolant trap before the pump (CNC Cookbook)

### When to use it

- **everyday_examples**: 
  - The MDF 'spoilboard' bed on many CNC routers in maker spaces and sign shops, which is a vacuum table (CanCam; Make:)
  - Vacuum chucks used to hold wooden bowls on a lathe (CNC Cookbook 'Vacuum Chucks')
  - Laser-cutter honeycomb beds with a dust collector or shop vacuum underneath, used to hold paper, fabric and film flat (Avid CNC forum; Hackaday 2016)
  - Solder-paste stencil jigs and PCB milling plates (Printables 451126; Hackaday 2019)
- **when_to_use**: Use a vacuum table when you cut or engrave flat sheets and want the whole top surface and all edges free for the tool: plywood, MDF, plastics, aluminium sheet, composites and foam board on a CNC router (Mekanika), thin copper-clad boards for PCB milling, which it pulls completely flat (Hackaday 2019), and thin, curly or warped material on a laser cutter, such as paper, fabric and film (Hackaday 2016; Avid CNC forum). It saves time on repeated jobs because there is nothing to screw or clamp (Mekanika; Hackaday 2024), avoids wasting stock around clamps and screws (Mekanika), and does not mark the surface, which is why bowl turners use vacuum chucks (CNC Cookbook 'Vacuum Chucks'). Unlike a magnetic chuck it holds non-ferrous materials (Wikipedia).
- **when_not_to_use**: Avoid it for small parts with little area, which have little hold-down and pop off (CNC Cookbook; Mekanika): use double-sided tape, tape and superglue, screws or tabs instead (hackaday.io 166349). Avoid it for porous, rough, warped-in-two-directions or irregular workpieces that leak (Mekanika; CNC Cookbook): use toggle clamps, a vise or screws. Heavy cuts in metal on a light table, and tall parts with a small base, can overcome the hold (CNC Cookbook 'Vacuum Chucks'): use a vise or mechanical clamps. Steel parts can be held more simply with a magnetic chuck (Wikipedia). If you only use the machine occasionally, a full table may not be worth the cost (Mekanika).
- **environment_limits**: Hold depends on air pressure: it is lower at high altitude and changes slightly with the weather (Mekanika). Hot substrates need a table built with high-temperature epoxy (Wikipedia 'Vacuum table'). Liquid coolant must be kept out of the pump with a separator, and an oil-filled pump will inhale coolant that leaks past the seal (CNC Cookbook 'Vacuum Chucks'). Dust and chips spoil the seal and act like ball bearings under the part, and chips can jam a side-channel blower's impeller (CNC Cookbook; Mekanika). Side-channel blowers overheat and can seize if starved of air flow (Mekanika). MDF tables swell and lose flatness when wet ⚑ [uncertain]. On a laser cutter, a wooden table and the strong air flow are a fire risk (Hackaday 2016 comments; Avid CNC forum). *(⚑ parts need confirming)*
- **safety_notes**: 1) Parts that break loose: if cutting forces beat the hold, the part can be lifted, spun by the cutter and thrown; CNC Cookbook describes a plate that broke loose and spun until the E-stop was hit, so use an enclosure and eye protection (CNC Cookbook 'Vacuum Chucks'). 2) Power cut or pump trip releases the part immediately (CNC Cookbook). 3) Noise: vacuum pumps and blowers add a lot of workshop noise (Mekanika); wear hearing protection ⚑ [uncertain]. 4) Oil mist: oil-sealed rotary-vane pumps can discharge oil mist from the exhaust (Wikipedia 'Rotary vane pump'), and one builder's cheap pump 'put out some oily smoke' (CNC Cookbook 'Vacuum Chucks'), so vent or filter the exhaust. 5) Laser cutters: a wooden vacuum box can be cut through and set alight if laser power is too high, and embers can be sucked into the dust bin, so empty the bin first (Hackaday 2016 comments; Avid CNC forum). 6) Vacuum itself is low risk compared with compressed air, with no stored pressure to burst (fluid-power family notes) ⚑ [uncertain] *(⚑ parts need confirming)*
- **common_failures**: 1) Part pops off or slides at the end of a cut, when through-cuts leak the vacuum: cut an onion skin or use tabs, cut small parts first, and use pins or stops against sliding (CNC Cookbook; Make:). 2) Weak hold from leaks at board edges, unused zones, kinked hoses or bad plumbing: seal MDF edges, tape the edges, close unused zones, use cling film to find leaks, and avoid sharp bends and restrictions (CNC Cookbook; Make:). 3) Bleeder board 'not bleeding' because the MDF skins are too dense, or too leaky because it is too porous: surface both faces, or stack two boards or add a 1/4 in ply mask to cut air flow (CNC Cookbook; CanCam). 4) Cutting too deep into the spoilboard so it leaks and wears out: minimise cut-through depth and resurface or replace it when rough; a falling gauge reading is the warning (CNC Cookbook; Make:). 5) Gasket crushed flat so only the grooves pull: keep grooves shallow and cord sized to them (CNC Cookbook 'Vacuum Chucks'). 6) Blower failure from chips or overheating: inlet filter and relief valve (Mekanika). 7) Tiny drilled vacuum holes in aluminium break drill bits: hackaday.io builder broke many 0.2 mm drills before 0.3 mm worked (hackaday.io 166349).
- **related**: 
  - Vacuum (suction) gripper: the same suction idea on small cups that pick parts up and move them, instead of holding a sheet on a fixed table
  - Suction cup: a passive cup that holds by trapped low pressure with no pump; slowly leaks
  - Venturi vacuum generator: a no-moving-parts vacuum source run from compressed air that can power a small vacuum table, at the cost of a lot of air (CNC Cookbook; Hackaday 2019 comments; Printables 370205)
  - Diaphragm pump (micro vacuum pump): a small electric vacuum source for small vacuum fixtures
  - Switchable permanent magnet (magnetic chuck): holds steel parts on a table the same way, by switching a magnet instead of a pump; won't hold aluminium, wood or plastic (Wikipedia 'Vacuum table')
  - Double-sided foam tape: the cheap alternative for small parts, but hard to remove afterwards (hackaday.io 166349)
  - Toggle clamp: a mechanical clamp that holds any material and shape, but gets in the tool's way and marks the work
  - Granular jamming gripper: also uses vacuum, but to harden a bag of grains round an odd shape
  - Locating pins (dowel pins and work stops): added to a vacuum table to line parts up and stop sliding (CNC Cookbook)
  - Air hockey table and air caster: the opposite idea, blowing air through holes to float things instead of sucking them down ⚑ [uncertain] *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Vacuumtafel.jpg (Paul Hermans; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Vacu%C3%BCmtafel.jpg): Photo of a vacuum table (the image used on the Wikipedia 'Vacuum table' article) *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Manual vacuum table valve control.jpg (Jaecnc; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Manual_vacuum_table_valve_control.jpg): Lever valves on an older CNC machine used to switch vacuum on and off for each zone of the table *(licence: CC BY-SA 4.0)*
  - [How to Design a Vacuum Table for Your CNC Machine (Mekanika)](https://www.mekanika.io/en/blog/cnc-milling/how-to-design-a-vacuum-table-for-your-cnc-machine): Infographics of vacuum-table physics and forces, the parts of a system, a grooved plenum with cross-pattern holding squares, a blower performance curve, and the build with PVC zone plumbing *(licence: link only)*
  - [ShopBot Desktop Universal Vacuum Hold-down System (Make:)](https://makezine.com/projects/shopbot-desktop-universal-vacuum-hold-down-system/): Step-by-step photos of a three-layer MDF universal vacuum table (base, grooved plenum, porous bleeder board), sealing, plumbing and use *(licence: link only)*
  - [DIY Vacuum Table Enhances PCB Milling (Hackaday, 2019)](https://hackaday.com/2019/01/28/diy-vacuum-table-enhances-pcb-milling/): Small aluminium vacuum table for 100 x 80 mm PCBs with raised pegs for two-sided boards *(licence: link only)*
- **make_it_yourself**: 
  - [Modular CNC Vacuum Workholding Table (Gobbo Lab, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1362329-modular-cnc-vacuum-workholding-table): Printable tiles glued together with CA into a vacuum table of any size, with a grid for foam gasket zones, a 1/4 in NPT air adapter and dowel holes for fixture plates *(licence: CC BY-NC)*
  - [Vacuum Fixture Table for CNC 3018 (emab, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1513539-vacuum-fixture-table-for-cnc-3018): Printed vacuum fixture for PCBs up to 150 x 200 mm on a 3018 desktop CNC, run from a shop vacuum through a 1 in duct; print settings given *(licence: CC BY-NC-SA)*
  - [Table a depression / Vacuum table (jerrydi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/370205-table-a-depression-vacuum-table): Printed bench vacuum table for holding boards for sanding, screwing or routing, powered by compressed air through a ZU05S venturi vacuum generator *(licence: CC BY-NC)*
  - [Vacuum PCB Solder Stencil Jig (djos_1475, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/451126-vacuum-pcb-solder-stencil-jig): Printed vacuum box that holds a PCB and solder stencil (up to 200 x 200 mm) in place for applying solder paste *(licence: GPL v3)*
- **diagram_idea**: A side cutaway of a sheet lying on a grooved table: small blue arrows show air being sucked down through the grooves to a pump, big grey arrows press down on the top of the sheet labelled 'room air pressure', a dashed gasket line marks the sealed area, and a small sideways cutter arrow is opposed by a 'friction' arrow, with a note 'force = vacuum x area under the part'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Vacuum_table
  - https://en.wikipedia.org/wiki/Rotary_vane_pump
  - https://www.mekanika.io/en/blog/cnc-milling/quick-guide-to-cnc-vacuum-table
  - https://www.mekanika.io/en/blog/cnc-milling/how-to-design-a-vacuum-table-for-your-cnc-machine
  - https://www.cnccookbook.com/router-vacuum-table-cnc-diy/
  - https://www.cnccookbook.com/vacuum-chucks-fixtures-clamping-systems/
  - https://makezine.com/projects/shopbot-desktop-universal-vacuum-hold-down-system/
  - https://www.cancam.ca/learning-centre/spoilboard-surfacing-and-improving-suction-on-a-vacuum-table/
  - https://hackaday.com/2019/01/28/diy-vacuum-table-enhances-pcb-milling/
  - https://hackaday.com/2024/03/31/modular-vacuum-table-custom-fits-the-parts/
  - https://hackaday.com/2016/03/19/diy-vacuum-table-makes-lasering-even-easier/
  - https://hackaday.io/project/166349-diy-vacuum-table-for-cnc-machines
  - https://forum.avidcnc.com/t/vacuum-honeycomb-table-for-laser-cutting/1617
  - https://commons.wikimedia.org/wiki/Category:Vacuum_tables
  - https://commons.wikimedia.org/wiki/File:Vacu%C3%BCmtafel.jpg
  - https://commons.wikimedia.org/wiki/File:Manual_vacuum_table_valve_control.jpg
  - https://commons.wikimedia.org/wiki/File:Automatic_valve_control.jpg
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1362329-modular-cnc-vacuum-workholding-table
  - https://www.printables.com/model/1513539-vacuum-fixture-table-for-cnc-3018
  - https://www.printables.com/model/370205-table-a-depression-vacuum-table
  - https://www.printables.com/model/451126-vacuum-pcb-solder-stencil-jig
  - https://www.printables.com/model/668832-lpkf-vacuum-table-sinterplate-replacement

### Finder tags

- **connects**: wall, rail, desk or grid
- **power_source**: electricity, compressed air, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: lets go ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…ck valve to hold vacuum briefly after a pump stops is common practice [uncertain]…"*
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, power tools, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
- **usual_process**: CNC
- **adjustable**: yes
- **removability**: tool-free quick release
- **power**: powered
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
- **powered_does**: grip or lift
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, paper or card, foam, carbon fibre or composites, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, power, related, safety_notes

## 317 Gear pump (including gerotor)

*hydraulics, pneumatics & vacuum.* Two meshing gears in a close-fitting case carry liquid round from the inlet to the outlet; the standard small hydraulic pump, and many can also run backwards as a motor

*Also covers:* Also covers internal gear, vane, lobe and flexible-impeller pumps.

### What it is

- **plain_name**: Two gears that mesh inside a snug case: turn one and the liquid caught in the gaps between the teeth is carried round the outside from the inlet to the outlet, where the meshing teeth squeeze it out. The same box works backwards as a motor if you push liquid through it
- **term**: Gear pump (external and internal gear pump, including the gerotor)
- **aliases**: 
  - external gear pump, internal gear pump, crescent (internal) gear pump (Wikipedia 'Gear pump'; Castle Pumps)
  - gerotor ('generated rotor'), gerotor pump, trochoid gear pump, trochoid pump (Wikipedia 'Gerotor'; Thang)
  - three-gear pump (Thang 'External gear pump 2')
  - hydraulic gear pump, gear oil pump, engine oil pump (Wikipedia 'Hydraulic pump'; Wikipedia 'Gear pump')
  - gear motor (hydraulic), gerotor motor, Geroller and Nichols motors (Wikipedia 'Hydraulic motor')
  - rotary positive-displacement pump; capsule blower (an early name) (Wikipedia 'Pump'; Wikipedia 'Gear pump' history)
  - related pumps covered here: rotary vane pump, lobe pump or Roots pump (Roots blower), flexible impeller pump or flexible vane pump (Wikipedia 'Rotary vane pump', 'Lobe pump'; Castle Pumps)
  - Jabsco (brand) impeller pump (common name for flexible-impeller pumps; Jabsco datasheet)
  - drill pump, drill gear pump (maker models driven by a cordless drill; Printables 277351, 1534241)
  - Zahnradpumpe (German) (Wikimedia Commons file description)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: gear trains, gearboxes & transmissions
- **one_liner**: A rotary pump in which two meshing gears (side by side, or one inside a ring gear as in the gerotor) trap liquid between their teeth and the close-fitting case and carry it from inlet to outlet, delivering a fixed amount per turn; many can also run backwards as a hydraulic motor.
- **complexity**: A small assembly that acts as one unit: a housing (body) with inlet and outlet ports, a driving gear on a shaft and a driven (idler) gear, end plates or a lid, bearings or bushings, a shaft seal and a body gasket or O-ring (Wikipedia 'Gear pump' exploded view; Printables 277351). An internal gear pump has a small gear inside a ring gear with a fixed crescent between them; a gerotor has an inner rotor with n teeth inside an outer rotor with n + 1 teeth (Wikipedia; Thang).
- **how_it_works**: As the gears turn, their teeth come out of mesh on the inlet side, leaving growing gaps that fill with liquid; the liquid is carried round between the teeth and the case wall (not between the gears) and pushed out on the outlet side, where the teeth mesh again and squeeze the gaps shut (Wikipedia 'Gear pump'; Castle Pumps). The clearances are tiny, around 10 micrometres in metal pumps, so little liquid leaks back, and each turn moves almost the same volume whatever the pressure (positive displacement) (Wikipedia). In a gerotor the inner rotor, with one tooth fewer than the outer rotor, turns off-centre inside it, so the pockets between them grow on the inlet side and shrink on the outlet side (Wikipedia 'Gerotor'). Feed pressurised liquid in instead of turning the shaft, and the same gears are pushed round, so many gear pumps and gerotors also work as hydraulic motors (Wikipedia 'Gear pump'; 'Gerotor'; 'Hydraulic motor'). Related rotary pumps work the same way with other shapes: sliding vanes in an off-centre rotor (vane pump), non-touching lobes kept in step by outside timing gears (lobe pump), or a rubber impeller whose vanes bend in an off-centre case (flexible impeller pump) (Wikipedia 'Rotary vane pump', 'Lobe pump'; Castle Pumps; Thang).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: moves oil, water or other liquids from one place to another, and builds the pressure that drives hydraulic cylinders and motors (Wikipedia 'Gear pump'; 'Hydraulic pump')
  - change the kind of motion: turns shaft rotation into a flow of liquid under pressure, and as a motor turns liquid flow back into rotation (Wikipedia 'Hydraulic pump'; 'Hydraulic motor')
  - change speed or turning force: a pump driving a hydraulic motor through pipes forms a hydraulic transmission, so power can be sent round corners and the motor can turn at a different speed and torque (Wikipedia 'Hydraulic motor')
- **motion**: rotate: the gears turn continuously, at up to about 3,000 rpm for precision external gear pumps (Wikipedia 'Gear pump'); the liquid flows through it
- **degrees_of_freedom**: 1: the meshing gears are locked together, so turning the input shaft by a given angle turns both gears by a fixed amount (Wikipedia 'Gear pump')
- **special_behaviour**: 
  - motion conversion: rotation becomes a steady flow of liquid (a fixed volume per turn), and in reverse flow becomes rotation when used as a motor (Wikipedia 'Gear pump'; 'Hydraulic motor')
  - none of the other behaviours on its own: it does not limit its own pressure, so a separate relief valve is needed (Wikipedia 'Pump')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it moves liquid. A hydraulic motor also cannot hold a hanging load, because internal leakage lets it creep, so winches and cranes need a brake (Wikipedia 'Hydraulic motor')
- **input_output**: Continuous rotation -> flow of liquid under pressure. Flow = displacement per turn x speed (x volumetric efficiency); hydraulic power = flow x pressure, or horsepower = US gal/min x psi / 1714 (Wikipedia 'Gear pump'; 'Hydraulic pump'). Hydraulic gear pumps displace about 1-200 mL per turn and have the lowest volumetric efficiency of the three main pump types, about 90% (Wikipedia 'Hydraulic pump'), though Wikipedia's 'Gear pump' article calls them 'generally very efficient, especially in high-pressure applications'. A three-gear pump gives double the flow of a two-gear pump, like two pumps in parallel (Thang). Shafts: parallel (side by side in an external pump; offset parallel axes in an internal pump or gerotor); the drive is in line with the pump shaft. Back-drivable: yes for many ('some gear pumps are designed to function as either a motor or a pump'; a gerotor 'can also function as ... fluid/hydraulic motor'), but many pumps cannot be back-driven or leak at the shaft seal when their inlet is pressurised (Wikipedia 'Gear pump'; 'Gerotor'; 'Hydraulic motor'). Gerotor motors are low-to-medium speed and medium-to-high torque (Wikipedia 'Hydraulic motor')
- **power**: powered: needs something to turn the shaft, such as an electric motor, an engine, or a cordless drill in maker builds (Printables 277351, 1534241; Wikipedia). When the drive stops, flow stops; the tightly meshing gears block most backflow, but a load pushing liquid back can leak through or turn the pump backwards as a motor (Wikipedia 'Gear pump'; 'Hydraulic motor')
- **removability**: removable: bolted to a motor or bracket, with threaded or hose-barb fittings on the ports; the housing is screwed together so gears, bearings and seals can be replaced (Printables 277351, 1534241; Castle Pumps)
- **reuse_cycles**: effectively unlimited turns in normal use: metal gear pumps wear gradually, slowly losing efficiency, rather than failing suddenly (Wikipedia 'Hydraulic pump'). Printed gears wear faster ⚑ [uncertain]. It can be taken apart and reassembled many times *(⚑ parts need confirming)*
- **tools_needed**: hex keys or screwdrivers for the housing screws, spanners for fittings, thread-seal (PTFE) tape on threaded fittings, and grease or lubricant; printed designs also use M3 or M4 threaded inserts and a soldering iron to fit them, and epoxy for bearings and fittings (Printables 277351, 1534241, 1093259)
- **seal**: watertight to pressure-tight: inside, the tight gear-to-case clearances do the sealing (about 10 micrometres in metal pumps; Wikipedia); outside, a shaft seal and a body gasket or O-ring keep liquid in. Printed pumps use TPU gaskets and shaft seals, plenty of grease, or silicone and acrylic plates (hackaday.io 182068; Printables 277351; Thingiverse 366857)
- **load**: Pressure capacity: precision external gear pumps usually work up to about 210 bar (Wikipedia 'Gear pump'); external gear pumps reach higher pressures than internal ones (Castle Pumps). Flexible impeller pumps are low-pressure; one small Jabsco (brand) model is limited to 20 ft of head (8.7 psi) (Jabsco datasheet). Printed gear pumps are low-pressure and leak at the seals (no figures found) ⚑ [uncertain]. Mechanically the shaft carries twisting load from the drive; bearings take the side load of the pressure on the gears (Castle Pumps: an external gear pump has four bearings, an internal one two) *(⚑ parts need confirming)*
- **adjustable**: Flow is set by drive speed, since a gear pump has a fixed displacement (Wikipedia 'Hydraulic pump'). Maximum pressure is set by a relief valve on the outlet, which is required (Wikipedia 'Pump'). Gear pumps lose efficiency at low speed and work best near their rated speed (Castle Pumps)
- **play_and_precision**: not applicable as a locator. Inside, play matters: larger gear backlash and end clearances let liquid slip back and lower efficiency, though some backlash reduces 'pressure trapping' between teeth (Wikipedia 'Gear pump'). Flow per turn is repeatable enough for metering and batching (Castle Pumps). Misalignment between pump and drive shaft loads the bearings and seal, so use a flexible coupling ⚑ [uncertain] *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: driven from the end of its shaft, with pipes to its inlet and outlet ports
- **materials**: Bodies of aluminium or cast iron for hydraulic gear motors (Wikipedia 'Hydraulic motor'); stainless steel and bronze casings for flexible impeller pumps (Castle Pumps); flexible impellers in natural rubber (water), neoprene, EPDM (food, hot fluids, acids and alkalis) or silicone (very high temperature) (Castle Pumps). Printed pumps: PETG gears (wear and water resistance), PLA or PETG housings, TPU 95A gaskets and seals, ABS or resin lobes, acrylic lids (Printables 277351, 1534241, 1093259; Hackaday 2022 lobe pump; Thingiverse 366857). Gear pumps suit clean, self-lubricating, viscous liquids such as oil, paint and soap; thin liquids slip back and solids wear the gears (Castle Pumps)
- **maker_difficulty**: moderate: prints well and works with water or oil at low pressure, but needs bought bearings, shafts, screws and fittings, careful sealing and some trial and error with clearances; metal hydraulic pumps should be bought (Printables 277351, 1534241; Thingiverse 366857: the designer fought 'innumerable designs for over a year')

### Making it

- **processes**: 
  - 3D print (FDM): the popular drill-driven printed gear pumps, gerotor and lobe pumps (Printables 277351, 1534241, 286142; Thingiverse 366857; Hackaday 2022)
  - 3D print (resin): resin-printed lobes for tighter tolerances (Hackaday 2022); research inkjet printers have printed a working gear pump already filled with fluid (Hackaday 2015)
  - CNC or laser cut: clear acrylic lids and top and bottom plates (Printables 1534241; Thingiverse 366857, 4994196)
  - off-the-shelf part: metal hydraulic gear pumps, gerotor pumps and motors, vane, lobe and flexible impeller pumps (Wikipedia; Castle Pumps)
- **print_in_place**: no: printed pumps are printed as housing, gears and seals and assembled with bearings, shafts, screws and fittings (Printables 277351, 1534241). (MIT's multi-material inkjet printer has printed a gear pump in one go with the liquid inside, but that is not possible on hobby printers; Hackaday 2015)
- **making_tips_3d_printing**: 1) Choose materials by job: PETG for gears (good wear and water resistance), PLA for casing and lid, TPU for gaskets and shaft seals (Printables 277351, 1534241, 1093259); ABS lobes cope with friction heat better, and resin lobes give tighter tolerances (Hackaday 2022). 2) Print gears fine: 0.1-0.15 mm layers for gears, 0.2-0.25 mm for the rest, 4 or more perimeters (Printables 1534241); another designer used 100% infill and 5 perimeters in PETG (Printables 286142). 3) Helical or double-helical (herringbone) gears run quieter and smoother than spur gears (hackaday.io 182068; Printables 1534241 uses 35-degree quadruple helical gears); real pumps use helical teeth for the same reason (Wikipedia 'Hydraulic pump'). 4) Set the gear-to-case gap deliberately: one design uses a 0.2 mm air-gap jig (Printables 1534241). 5) Seal the plastic: thick walls (15 mm housing walls) and a pore-sealing impregnation make the body watertight (Printables 1534241); grease keeps TPU seals supple and is 'the most important part' of keeping a printed pump watertight (hackaday.io 182068). 6) Put flat, smooth plates on the faces: the gerotor Mk 6 'cheated' with acrylic (plexiglass) and silicone for the top and bottom seals and turned the outlets sideways (Thingiverse 366857). 7) Support the shafts: 608 or 605 ball bearings on 8 mm or 5 mm shafts, M3 or M4 threaded inserts and screws for the lid (Printables 277351, 286142, 1534241). 8) Threaded fittings can crack printed walls: screw brass plugs in carefully and stiffen the area with epoxy, with one turn of PTFE tape on the threads (Printables 1534241); or glue hose adapters in with epoxy (Printables 1093259). 9) Expect to prime it: one printed pump 'needs to be primed', while others claim to prime themselves, depending on how tight the clearances are (Printables 277351, 286142, 1534241). 10) Lubricate gears and shafts with silicone spray or grease (Printables 277351, 1534241). 11) Lobe pumps need outside timing gears so the lobes never touch (Hackaday 2022). 12) Keep printed pumps to low pressure and don't use them to pressurise a tank or accumulator ⚑ [uncertain] *(⚑ parts need confirming)*
- **off_the_shelf_parts**: External gear pumps and hydraulic gear motors (single or double direction, aluminium or cast iron bodies, options with relief valve, anti-cavitation valve and speed sensor) (Wikipedia 'Hydraulic motor'); internal (crescent) gear pumps, often with heating jackets (Castle Pumps); gerotor pumps and gerotor motors (Geroller, Nichols types) (Wikipedia); car engine oil pumps (Wikipedia 'Pump'); hydraulic power packs (Wikipedia 'Pump'); rotary vane pumps; rotary lobe pumps; flexible impeller pumps and replacement impellers in neoprene or nitrile (e.g. Jabsco (brand)) (Castle Pumps; Jabsco datasheet). For printed pumps: 608ZZ or 608-2RS ball bearings (8 x 22 x 7 mm), 605ZZ bearings, 8 mm shafts, M3 or M4 threaded inserts, TPU filament, G1/4 or 1/4 BSP brass fittings, Gardena (brand) hose connectors, PTFE tape, relief valve (Printables 277351, 286142, 1534241)
- **rules_of_thumb**: 
  - Flow = volume pumped per turn x speed; power = flow x pressure; horsepower = US gal/min x psi / 1714 (Wikipedia 'Gear pump')
  - Precision external gear pumps are usually limited to about 210 bar and about 3,000 rpm; faster or higher-pressure versions are noisy (Wikipedia 'Gear pump')
  - Metal gear pumps rely on clearances of about 10 micrometres; hydraulic gear pumps displace about 1-200 mL per turn with about 90% volumetric efficiency (Wikipedia 'Gear pump'; 'Hydraulic pump')
  - Always fit a relief or safety valve on the outlet of any positive-displacement pump: against a closed valve it keeps pushing until 'the line bursts, the pump is severely damaged, or both' (Wikipedia 'Pump'); a flexible impeller pump also 'cannot run against a closed outlet' (Jabsco datasheet)
  - A gerotor's inner rotor has one tooth fewer than the outer rotor (n and n + 1, with n at least 2); in Thang's trochoid pump the driving rotor turns 5 times while the driven rotor turns 4 times (Wikipedia 'Gerotor'; Thang)
  - A three-gear pump (one driver between two idlers) doubles the flow of a two-gear pump (Thang)
  - Use gear pumps for clean, viscous, lubricating liquids; keep solids out and don't run them dry (Castle Pumps)
  - Wear test: if a piece of paper slips easily into the gear clearances, suspect wear (Castle Pumps)
  - Flexible impeller pumps self-prime up to about 6 m from dry, but lose about 60% of their pressure at 4,000 cP and are limited to about 300 rpm with such thick liquids (Castle Pumps); one small model handles 7-82 C liquid and up to 8.7 psi (Jabsco datasheet)
  - Lobe pumps need much lower speed with thick liquids; reductions to 25% of rated speed or lower are common (Wikipedia 'Lobe pump')
  - A drill-driven printed helical gear pump can deliver about 2 L/min of water (Printables 1534241)

### When to use it

- **everyday_examples**: 
  - The oil pump in a car or scooter engine, often a gear pump or gerotor (Wikipedia 'Pump'; 'Gerotor'; 'Gear pump' photo of a scooter oil pump)
  - Power steering, automatic transmission and espresso-machine pumps, which are often vane pumps (Wikipedia 'Rotary vane pump')
  - A Roots-type supercharger on a hot-rod engine, which is a lobe pump (Wikipedia 'Lobe pump')
  - Drill-powered transfer pumps made by makers for water or oil (Printables 277351, 1534241)
- **when_to_use**: Use a gear pump when you need a steady, smooth flow that stays the same whatever the pressure, especially of oil or other thick liquids: it is 'one of the most common types of pumps for hydraulic fluid power' and good for high viscosity (Wikipedia 'Gear pump'). It suits small hydraulic systems feeding cylinders and motors (Wikipedia 'Hydraulic pump'), metering and batching because each turn moves a known volume (Castle Pumps), and jobs where the pump sits above the liquid, since a tight gear pump primes itself (Castle Pumps; Wikipedia 'Pump'). Choose a gerotor for a compact pump or a slow, strong hydraulic motor (Wikipedia 'Gerotor'; 'Hydraulic motor'); a lobe pump for liquids with soft solids such as food (Wikipedia 'Lobe pump'); a flexible impeller pump for self-priming transfer of liquids with solids, reversible flow and gentle pumping (Castle Pumps). For makers, a drill-driven printed gear pump is a satisfying, working build for water or oil (Printables 277351, 1534241).
- **when_not_to_use**: Avoid gear pumps for liquids containing grit or solids, which wear the tight clearances (use a peristaltic, diaphragm or flexible impeller pump), and for very thin liquids that slip back past the gears, especially in internal gear pumps (Castle Pumps). Don't run them dry (Castle Pumps), or against a closed outlet without a relief valve (Wikipedia 'Pump'). For large volumes of water at low pressure a centrifugal pump is simpler (Wikipedia 'Pump'). For small exact doses use a syringe pump or peristaltic pump. For air and vacuum use a diaphragm, vane or venturi pump: a printed gerotor is 'no good' as a vacuum pump (Thingiverse 366857). For low-speed, low-flow duty a gear pump loses efficiency (Castle Pumps).
- **environment_limits**: Liquid matters most: gear pumps want clean, lubricating liquids; thin liquids leak back and solids cause rapid wear (Castle Pumps). Running dry overheats the gears so they swell and wear against the case (Castle Pumps); flexible impellers are lubricated only by the liquid and burn if run dry (Jabsco datasheet). Temperature: internal gear pumps handle hot fluids such as thermal oil, with heating jackets (Castle Pumps); one flexible impeller pump is rated 7-82 C (Jabsco datasheet); impeller rubber must match the liquid and temperature (Castle Pumps). Thick liquids need lower speed (Wikipedia 'Lobe pump'; Castle Pumps). Printed housings are porous to water unless sealed (Printables 1534241), and some fluids, e.g. brake fluid, can attack plastics, so test compatibility (Hackaday 2015 comments) ⚑ [uncertain]. PLA housings soften in hot water or oil ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Never run a positive-displacement pump against a closed outlet: pressure rises until a pipe bursts or the pump breaks; fit a relief valve (Wikipedia 'Pump'; Jabsco datasheet). 2) In powered hydraulics, a pinhole leak can inject oil through the skin; serious cases are reported above 100 bar and possibly as low as 7 bar, and it needs immediate hospital treatment (HSE hydraulic injection bulletin). 3) A load held up by a hydraulic motor or pump can creep down when the drive stops, because of internal leakage; use a brake or locking device (Wikipedia 'Hydraulic motor'). 4) Drill-driven pumps can jam and twist the drill; hold it firmly and keep fingers away from the shaft and coupling ⚑ [uncertain]. 5) Don't use a printed pump to pressurise a tank, and keep printed hydraulics at low pressure ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Slow loss of output as gears wear the housing and bushings, rather than sudden seizure (Wikipedia 'Hydraulic pump'); check clearances with the paper test and check bearings (Castle Pumps). 2) Damage from running dry or from solids (Castle Pumps); burnt flexible impellers from dry running (Jabsco datasheet). 3) Burst lines or a stalled motor when the outlet is blocked: fit a relief valve (Wikipedia 'Pump'; Hackaday 2022 comments). 4) Noise and pressure ripple from trapped liquid between meshing teeth; helical teeth and relief clearances reduce it (Wikipedia 'Gear pump'; 'Hydraulic pump'). 5) Printed pumps: leaks at the lid and shaft (use TPU seals and plenty of grease; hackaday.io 182068), leaks out of the back of lobe pumps (Hackaday 2022), porous walls (thick walls and impregnation; Printables 1534241), cracked walls around threaded fittings (epoxy reinforcement; Printables 1534241), failure to prime if clearances are loose (Printables 277351). 6) A brushless drive motor may not start against load; start it unloaded (hackaday.io 182068).
- **related**: 
  - Spur gear pair and gear train: the same meshing gears, used to pass on rotation instead of moving liquid
  - Planetary gear set (ring gear): the internal gear pump and gerotor use a gear running inside a ring gear
  - Peristaltic pump: rollers squeeze a tube, so the liquid never touches moving parts; better for dosing and dirty or delicate liquids, lower pressure
  - Diaphragm pump and squeeze bulb: a flexing membrane between two check valves; handles air and thin liquids but pulses
  - Syringe pump: a screw-driven piston for exact small volumes, not continuous
  - Centrifugal pump: a spinning impeller for lots of water at low pressure; must be primed and can run against a closed valve for short times (Wikipedia 'Pump')
  - Scroll mechanism (scroll compressor): another rotary displacement design, used for air (Thang)
  - Air or hydraulic cylinder and rotary air actuator: what a hydraulic pump usually drives
  - Syringe hydraulics: the hand-powered starting point of hydraulics, with no pump
  - Check valve and relief valve: a relief valve must protect a gear pump's outlet; a gear pump needs no inlet and outlet valves of its own
  - Progressing cavity pump: a long helical rotor in a rubber stator for sludge and solids (Wikipedia 'Pump')

### Pictures, videos and models

- **links**: 
  - [Gear pump animation.gif (Jahobr; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Gear_pump_animation.gif): Animation of liquid being carried round between the teeth and the case in an external gear pump *(licence: CC0 1.0 (public domain dedication))*
  - [Internal gear pump.gif (Staffanlincoln; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Internal_gear_pump.gif): Animation of an internal gear pump: a small gear inside a ring gear with a crescent, liquid flowing left to right *(licence: Public domain)*
  - [Gerotor anm.gif (Ravedave; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Gerotor_anm.gif): Rendered animation of a gerotor's inner and outer rotors turning, the pockets between them growing and shrinking (ports not shown) *(licence: CC BY-SA 3.0, CC BY 2.5 or GFDL 1.2+)*
  - [Flexible impeller pump 1a (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=JtQ-0ZYkH2c): CAD animation of a rubber impeller turning off-centre in its housing, its vanes bending to carry liquid from inlet to outlet (Thang part 4, p. 98) *(licence: link only)*
  - [3D-Printed Lobe Pump Shifts Water Well (Hackaday, 2022)](https://hackaday.com/2022/06/10/3d-printed-lobe-pump-shifts-water-well/): A fully printed lobe pump with figure-eight rotors and outside timing gears, driven by a drill, with ABS and resin rotors *(licence: link only)*
- **make_it_yourself**: 
  - [Drill gear pump (Ralf Horhager, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/277351-drill-gear-pump): Popular drill-driven external gear pump with a Gardena hose connection: PETG gears, PLA case, TPU gaskets, four 608 bearings; needs priming *(licence: CC BY-NC-SA)*
  - [DIY External Gear Drill Pump (The Justifyer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1534241-diy-external-gear-drill-pump): Quiet drill-driven pump with quadruple helical PETG gears, TPU seals and an acrylic lid, about 2 L/min; animated FreeCAD file and detailed print and sealing advice *(licence: CC BY)*
  - [Internal Gear Pump (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1187749-internal-gear-pump): Printable internal gear pump model using two ball bearings and 1/4-20 screws, published alongside a matching external gear pump (model 1187735) *(licence: Public domain)*
  - [Gerotor Pump Mk. 6 (Corona688, Thingiverse)](https://www.thingiverse.com/thing:366857): Printable gerotor pump modelled in OpenSCAD, sealed with plexiglass plates and silicone; pushes liquid well but is poor as a vacuum pump *(licence: CC BY-NC 4.0 (from page metadata))*
  - [OpenSCAD Gerotor (Corona688, Thingiverse)](https://www.thingiverse.com/thing:309163): Parametric OpenSCAD script that generates mathematically modelled gerotor rotor pairs *(licence: CC BY-SA 4.0 (from page metadata))*
- **diagram_idea**: Two meshing gears in a tight case drawn from the front, with blue liquid shown only in the tooth gaps against the case wall travelling round both outer sides from the inlet (left) to the outlet (right), and a small inset of a gerotor (inner rotor with one tooth fewer turning off-centre in an outer ring) with its pockets shaded from small to large.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gear_pump
  - https://en.wikipedia.org/wiki/Gerotor
  - https://en.wikipedia.org/wiki/Hydraulic_pump
  - https://en.wikipedia.org/wiki/Hydraulic_motor
  - https://en.wikipedia.org/wiki/Pump
  - https://en.wikipedia.org/wiki/Rotary_vane_pump
  - https://en.wikipedia.org/wiki/Lobe_pump
  - https://cs448m.github.io/lectures/machines/doc/4.pdf
  - https://www.castlepumps.com/info-hub/gear-pump-guide
  - https://www.castlepumps.com/info-hub/flexible-impeller-pump-guide
  - https://www.pumpagents.com/pdf/JabscoPumps/18660-0121.pdf
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://hackaday.io/project/182068-3d-printable-double-helical-gear-pump-watertight
  - https://hackaday.com/2022/06/10/3d-printed-lobe-pump-shifts-water-well/
  - https://hackaday.com/2015/12/20/3d-printed-hydraulics/
  - https://www.thingiverse.com/thing:366857
  - https://www.thingiverse.com/thing:309163
  - https://www.thingiverse.com/thing:4994196
  - https://commons.wikimedia.org/wiki/File:Gear_pump_animation.gif
  - https://commons.wikimedia.org/wiki/File:Internal_gear_pump.gif
  - https://commons.wikimedia.org/wiki/File:Gerotor_anm.gif
  - https://www.youtube.com/watch?v=JtQ-0ZYkH2c
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/277351-drill-gear-pump
  - https://www.printables.com/model/1534241-diy-external-gear-drill-pump
  - https://www.printables.com/model/286142-gear-pump
  - https://www.printables.com/model/1093259-hydraulic-gear-pump-remix
  - https://www.printables.com/model/1187735-external-gear-pump
  - https://www.printables.com/model/1187749-internal-gear-pump

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, liquid
- **power_loss**: not applicable ⚑ *needs confirming (best guess): uses power, but `power` does not say what happens when it is lost*
- **motion_in**: steady turning
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
- **usual_process**: 3D print (FDM)
- **adjustable**: partly
- **removability**: removable
- **power**: powered
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, making_tips_3d_printing, play_and_precision, reuse_cycles, safety_notes

## 318 Rotary air actuator (vane or rack-and-pinion rotary actuator)

*hydraulics, pneumatics & vacuum.* An air- or oil-powered unit that turns a shaft back and forth through a set angle, with a swinging vane or with pistons driving a rack and pinion

*Also covers:* Also covers printed pneumatic stepper motors.

### What it is

- **plain_name**: A sealed box with an air pipe at each side and a shaft sticking out: let compressed air into one side and the shaft swings round to a stop (often a quarter or half turn); let air into the other side and it swings back. Inside, either a paddle swings round a round chamber, or pistons push toothed bars that turn a gear on the shaft
- **term**: Rotary actuator (pneumatic or hydraulic; vane type or rack-and-pinion type)
- **aliases**: 
  - pneumatic rotary actuator, hydraulic rotary actuator, fluid power rotary actuator (Wikipedia 'Rotary actuator'; Tameson)
  - vane actuator, vane-type rotary actuator, single-vane and double-vane actuator (Tameson; Power & Motion)
  - rack-and-pinion actuator, single-rack and double-rack actuator, limited rotation cylinder (Tameson)
  - quarter-turn actuator, part-turn actuator, valve actuator (Tameson; ISO 5211 as described by Tameson)
  - spring-return (single-acting) and double-acting rotary actuator (Tameson)
  - scotch-yoke actuator (Tameson)
  - spiral-shaft or helical rotary actuator, chain-and-sprocket rotary actuator (Power & Motion)
  - rotary cylinder, swing cylinder, oscillating actuator ⚑ [uncertain]
  - vacuum actuator, vacuum wiper motor (old cars) (Wikipedia 'Rotary actuator')
  - pneumatic stepper motor, MR-safe pneumatic stepper motor (University of Twente; Printables 218779)
  - verin rotatif (French) (Wikimedia Commons file name) *(⚑ parts need confirming)*
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: powered & active connectors, motion conversion
- **one_liner**: A compact unit that turns compressed air or oil pressure into back-and-forth rotation of an output shaft through a set angle, either with a vane swinging in a round chamber or with pistons driving a rack and pinion; it is the turning cousin of the air cylinder and is widely used to open and close quarter-turn valves.
- **complexity**: A small assembly that acts as one unit. Rack-and-pinion type: body, one or two pistons with racks machined into them, a pinion on the output shaft, end caps (holding spring cartridges in spring-return versions), piston seals and guides, shaft bearings, travel-stop adjusting screws, ports and a position indicator (Tameson). Vane type: a round chamber with a fixed stop, a vane on the shaft with seals round its edge, ports and a stroke adjuster (Tameson; Power & Motion). A printed pneumatic stepper motor: housing, two toothed pistons, a gear on a shaft, four silicone seals and tubes (Printables 218779).
- **how_it_works**: In a vane actuator a paddle (vane) fixed to the shaft divides a round chamber in two; air or oil let into one side pushes on the vane and turns the shaft until the vane reaches the stop, and feeding the other side turns it back (Wikipedia 'Rotary actuator'; Tameson). In a rack-and-pinion actuator the air pushes a piston whose rod is a toothed rack, and the rack turns a gear (pinion) on the output shaft; two opposed racks on either side of the pinion double the torque and take up the backlash (Tameson; Power & Motion). A spring-return (single-acting) version uses air to turn one way and springs to turn back, while a double-acting version uses air both ways (Tameson). A pneumatic stepper motor has two or more cylinders whose toothed pistons engage a gear in turn; switching the air in a set sequence moves the gear on by a fixed step each time, like an electric stepper motor (Printables 218779; University of Twente). Scotch-yoke actuators use a pin in a slot instead of a rack and are the heavy-duty valve type (Tameson); spiral-shaft and chain-and-sprocket types also exist (Power & Motion). Old cars used a quarter-turn vane actuator run by engine intake vacuum to drive the windscreen wipers (Wikipedia 'Rotary actuator').

### Finder attributes

- **job**: 
  - change the kind of motion: turns air or oil pressure (a straight push on a piston or vane) into a limited turn of a shaft (Wikipedia 'Rotary actuator'; Tameson)
  - hold or release using power: opens and closes valves, swings clamps, gates and stops in and out of the way (Tameson; Power & Motion)
  - let it move (turn, slide or bend): drives an arm, flap or turnover table back and forth between two end positions (Power & Motion)
  - click into set positions: multi-position rack-and-pinion actuators stop at intermediate positions, and pneumatic stepper motors move in fixed steps (Tameson; Printables 218779)
- **motion**: rotate, back and forth through a set angle: single-vane up to about 280 degrees, double-vane about 90-100 degrees (Tameson; Power & Motion); rack-and-pinion commonly a quarter or half turn, and up to five turns depending on rack length (Tameson; Power & Motion); pneumatic stepper motors rotate without limit in small steps (Printables 218779)
- **degrees_of_freedom**: 1: the output shaft turns about its own axis between two end stops
- **special_behaviour**: 
  - motion conversion: pressure becomes rotation; in the rack-and-pinion type a straight piston stroke becomes a turn (Tameson; Wikipedia 'Rack and pinion')
  - fail-safe or breakaway: a spring-return actuator turns back to its spring position (spring-closed or spring-open) if air or power is lost, which is why it is used on valves that must shut (or open) in a failure (Tameson)
  - indexing: some rack-and-pinion actuators stop at several positions by controlling the pressure at their ports (Tameson); a pneumatic stepper motor moves in fixed steps of 360/(4 x teeth) degrees (Printables 218779)
  - torque-limiting: the torque depends on the supply pressure, so setting the pressure sets the maximum twist it can apply ⚑ [uncertain] *(⚑ parts need confirming)*
- **holding_principle**: 
  - powered hold: it holds its position or torque only while pressure is kept on it through a valve (Tameson)
  - spring force: a spring-return actuator's springs hold it in its rest position without air (Tameson)
- **input_output**: Compressed air (or hydraulic oil, or vacuum) switched by a valve -> back-and-forth rotation through a set angle. Torque: vane types from a fraction of a newton-metre to hundreds; rack-and-pinion from a few N m to thousands; scotch-yoke from thousands to hundreds of thousands (Tameson). Power & Motion gives air rack-and-pinion units up to 200,000 lb-in and hydraulic ones up to 15,000,000 lb-in at up to 3,000 psi. Rack-and-pinion units give a nearly constant torque through the stroke (Tameson), unlike a cylinder pushing a lever, which gives half the torque or less near the ends of a 90-degree swing (Power & Motion). Efficiency: rack-and-pinion has 'fairly high mechanical efficiency' (Tameson) [no figure found]. Shaft arrangement: the output shaft is at right angles to the piston and rack in rack-and-pinion types, and is the vane's own axis in vane types. Back-drivable: a hydraulic actuator with its ports blocked resists, but an overrunning load causes damaging pressure spikes, so cross-port relief valves are fitted (Power & Motion); an air actuator can be forced back if the load torque exceeds the air torque ⚑ [uncertain]. Pneumatic stepper motors: printed designs up to 3.7 N m, 320 steps per second, free of backlash (University of Twente) *(⚑ parts need confirming)*
- **power**: powered: needs compressed air or gas (often 'clean, dry' air from a central compressor), or pressurised oil, switched by a valve (Tameson); old wiper actuators ran on engine vacuum (Wikipedia). When power or pressure is lost: a spring-return actuator returns to its rest position; a double-acting actuator has 'a lack of a defined position' and stays roughly where it is (Tameson). Vacuum wipers slowed to a crawl when the engine's vacuum dropped (Wikipedia 'Rotary actuator')
- **removability**: removable: bolted to the valve or machine through a standard flange and drive (ISO 5211 for valves) and connected with threaded or push-in fittings; a NAMUR (VDI/VDE 3845) face lets a solenoid valve bolt straight on (Tameson)
- **reuse_cycles**: effectively unlimited cycles in normal use, though seals and gears wear and rack-and-pinion units develop backlash as they wear (Tameson). Printed PLA stepper gears 'may wear out and eventually break down after prolonged use' (Printables 218779). It can be unbolted and refitted many times
- **tools_needed**: spanners and hex keys for the mounting bolts and travel-stop screws, a tube cutter and push-in or threaded fittings for the air lines (Tameson). Printed steppers also need a seal cutter, cyanoacrylate glue with activator, clamps and a drill to open up the tube holes (Printables 218779)
- **seal**: airtight or pressure: piston seals or seals round the vane edge, plus shaft seals. Vane actuators need several sliding seals whose joints tend to leak more than piston types (Wikipedia 'Rotary actuator'); rack-and-pinion units with fluid round the pinion need a high-pressure shaft seal (Power & Motion). Printed steppers use laser-cut or hand-cut silicone rubber seals (University of Twente; Printables 218779, 44562)
- **load**: Medium to heavy torque for its size (Tameson); see input_output for ranges. Small printed pneumatic steppers give about 0.25-0.55 N m (Printables 218779). The shaft takes twisting load well, but side and end loads on the shaft must stay within the maker's allowable load or an outside bearing must carry them (SMC selection guide). Stopping a heavy or long swinging load is the hard part: the load's kinetic energy must stay within the actuator's allowance or it is damaged (SMC selection guide)
- **adjustable**: yes: end positions with travel-stop screws or a vane stroke adjuster (Tameson); vane types need external stops or a stroke-limiting package (Power & Motion); adjustable end cushions on rack-and-pinion and spiral types (Power & Motion); speed with meter-out or meter-in flow controls (Power & Motion); torque by changing the supply pressure (Tameson)
- **play_and_precision**: Rack-and-pinion units have gear backlash that grows with wear; double-rack units cancel it and give zero backlash at each end of travel and better stop accuracy (Tameson). End positions against stops are repeatable; stopping exactly in mid-travel with air is difficult because air is springy, so use multi-position units, valves or a servo ⚑ [uncertain]. Printed pneumatic stepper motors are free of backlash (University of Twente). Misalignment between actuator and valve is taken up by the standard ISO 5211 drive interface (Tameson) ⚑ [uncertain] *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: the output shaft or drive socket couples to the end of the valve stem or driven shaft
- **materials**: Commercial bodies are usually aluminium or steel with rubber seals ⚑ [uncertain]. Printed pneumatic steppers: PLA housings, polycarbonate or PETG gears and pistons, silicone rubber seals, nylon screws or clips, so they are completely metal-free (University of Twente; Printables 218779) *(⚑ parts need confirming)*
- **maker_difficulty**: moderate to hard: buy one, since sealing a vane or rack piston against air pressure needs accurate parts. Printed pneumatic stepper motors are possible but fiddly (gluing the covers is 'the most risky part ... you have only one chance', and the tiny T-8 is 'for advanced users only') (Printables 218779, 44562)

### Making it

- **processes**: 
  - off-the-shelf part: vane, rack-and-pinion and scotch-yoke rotary actuators, mostly sold for valve automation (Tameson)
  - 3D print (FDM): pneumatic stepper motors such as the M-45 (Printables 218779)
  - 3D print (resin or other high-resolution printing): miniature steppers such as the T-8 need a high-resolution printer such as a Stratasys Objet (Printables 44562)
  - laser cut: silicone seals and some parts of research pneumatic steppers (University of Twente; Printables 44562)
- **print_in_place**: no: printed pneumatic steppers are printed as housing, pistons and gear, then assembled with cut silicone seals, tubes, glue and screws (Printables 218779)
- **making_tips_3d_printing**: Based on the M-45 and T-8 printed pneumatic stepper motors (Printables 218779, 44562) and the University of Twente paper: 1) Print the housing in PLA at 0.15 mm layers (including the first layer), 100% infill to minimise leaks, and enable ironing on all top surfaces. 2) Print the gear and pistons in polycarbonate or PETG: stronger and lower friction than PLA, so more torque (up to 0.4-0.5 N m). 3) Gear tooth count trades step size against strength: 17 teeth is the practical limit with a 0.4 mm nozzle; 17-tooth PLA gears work up to 2 bar (0.25 N m) but wear; 13-tooth polycarbonate gears handle 0.55 N m at 5 bar. 4) Grind the flat faces of the pistons so they slide without rubbing, and open the axle hole to 4.8-4.9 mm if needed. 5) Cut 1 mm silicone rubber seals (about 12 x 10 mm) with a printed seal cutter and check they are square; fit the larger face towards the air chamber. 6) Use 3 mm OD tubing; drill the holes to 3 mm, slide a tube fixer over them and glue with cyanoacrylate and activator. 7) Before gluing the covers, put petroleum jelly round the seals and pistons, keep glue off the sliding parts, clamp, then run at low pressure first. 8) Miniature versions need very sharp triangular teeth, so print at the highest resolution; rounded teeth may not work (T-8). 9) Drive it with two 5/2-way valves and a microcontroller (an Arduino and the PneumaticStepper library are suggested). 10) Commercial vane and rack actuators are not worth printing; never hold high air pressure in a printed part ⚑ [uncertain] *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Single-vane and double-vane rotary actuators; single-rack and double-rack (rack-and-pinion) actuators, spring-return or double-acting, including multi-position types; scotch-yoke valve actuators (Tameson); spiral-shaft (helical) and chain-and-sprocket rotary actuators (Power & Motion); compact rotary tables and rotary actuators with internal shock absorbers (SMC (brand) series such as CRB, CRQ2, MSQ) (SMC selection guide). Accessories: ISO 5211 mounting kits and drive adaptors, NAMUR (VDI/VDE 3845) solenoid valves, limit-switch boxes and position indicators, external shock absorbers, flow controls, cross-port relief valves for hydraulics (Tameson; Power & Motion; SMC). For printed steppers: 3 mm OD polyurethane tube (e.g. Festo (brand) PUN-H-3X0,5), 5/2-way or 3/2-way solenoid valves, LEGO Technic (brand) axles (Printables 218779)
- **rules_of_thumb**: 
  - Rotation limits: single-vane about 280 degrees, double-vane about 90-100 degrees with roughly double torque (Tameson; Power & Motion); rack-and-pinion up to five turns depending on rack length (Power & Motion)
  - Vane actuators have no effective internal cushioning or rotation limit, so add external stops or a stroke-limiting package (Power & Motion)
  - A cylinder pushing a lever is limited to 90 degrees or less and gives half the torque or less at the start and end of a 90-degree swing; use a rotary actuator for larger angles or accurate stopping (Power & Motion)
  - Force at the end of an arm = output torque / arm length (Power & Motion, clamp-arm example)
  - Size the torque with margins: static load x 1, resistance load (gravity or friction against the turn) x 3 to 5, inertial load x 10, adding them when both apply (SMC selection guide)
  - Check the load's kinetic energy E = 1/2 x I x w^2 against the actuator's allowable energy, and add a shock absorber if it is higher; the moment of inertia grows with the square of the radius, so a long arm with a small mass can still damage the actuator (SMC selection guide)
  - Keep the turning time within the maker's range (stated per 90 degrees); running too slowly causes stick-slip or stalling (SMC selection guide)
  - Choose double-rack units for zero backlash at the ends and higher stop accuracy, and single-rack units for light, compact jobs (Tameson)
  - Spring-return actuators save air and fail to a known position; double-acting ones give better control and faster cycling (Tameson)
  - In hydraulic circuits fit cross-port relief valves set at or above the system relief setting but below the actuator's maximum pressure (Power & Motion)
  - Pneumatic stepper step size = 360 / (4 x gear teeth) degrees for a two-cylinder design (Printables 218779)

### When to use it

- **everyday_examples**: 
  - Grey or blue boxes on top of ball and butterfly valves on factory and water pipes, which open and close them automatically (Wikimedia Commons photo; Tameson)
  - Windscreen wipers on cars up to about 1960, driven by engine vacuum through a quarter-turn vane actuator (Wikipedia 'Rotary actuator')
  - Turnover stations, swinging stops and swing-clear clamps on factory production lines (Power & Motion)
  - Air-powered animatronic figures, which use pneumatic actuators for small movements (Wikipedia 'Animatronics')
- **when_to_use**: Use a rotary air actuator when you already have compressed air and need a strong, quick back-and-forth turn between two set positions: opening and closing quarter-turn ball and butterfly valves, flipping or turning parts over, swinging gates, stops and clamps out of the way, or turning a gripper (Tameson; Power & Motion). It gives a lot of torque for its size, survives hazardous and explosive atmospheres where sparks are a risk, and needs little maintenance (Tameson; Power & Motion). Choose spring-return where a valve or arm must go to a safe position if the air fails (Tameson). Printed pneumatic stepper motors suit places where electric motors and metal are not allowed, such as MRI scanners, high-voltage switchgear or nuclear plants, and are cheap to prototype (University of Twente).
- **when_not_to_use**: For continuous rotation use an air motor, hydraulic motor or electric motor instead (Power & Motion). For precise positions in mid-travel, or in a small project with no compressor, an electric RC servo or stepper motor is simpler (Wikipedia 'Rotary actuator') ⚑ [uncertain]. For a straight push use an air cylinder. For very heavy or fast-swinging loads without cushioning, the stopping energy can damage the actuator, so add shock absorbers or pick a bigger unit (SMC selection guide). Avoid vane types where leaks matter, since their seals leak more than piston types (Wikipedia 'Rotary actuator'). *(⚑ parts need confirming)*
- **environment_limits**: Needs clean, dry compressed air (Tameson). Suited to hazardous and explosive atmospheres when piloted by air rather than electric switches (Tameson; Power & Motion). Plastic pneumatic steppers are metal-free, so they work inside MRI scanners and around high voltages (University of Twente). Reed and proximity position switches may malfunction with high vibration or strong electromagnetic fields (HSE HSG39 para 121, said of cylinders). Vacuum-powered versions lose power when the vacuum falls (Wikipedia 'Rotary actuator'). PLA printed gears wear and break under prolonged use (Printables 218779). Seal life in heat and cold depends on the seal rubber ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Crush and pinch points: arms, flaps and clamps swing suddenly and with force; check for people and objects in the path before turning on the air (FRC Zero). 2) Sudden start: an exhausted double-acting actuator can accelerate violently when air returns; use a soft-start valve (HSE HSG39 para 120). 3) Trapped air: if a pipe to a locked actuator is undone, air on the other side can expand and move it 'which could lead to injury'; vent all pressure before working on it (HSE HSG39 paras 139 and 169). 4) Springs: spring-return units contain preloaded springs; guard against sudden release of trapped springs when dismantling (HSE HSG39 para 169). 5) Shock loads from stopping a heavy swinging load can break the actuator (SMC selection guide; HSE HSG39 para 118 says the same of cylinders). 6) Never point compressed air at skin and wear safety glasses (FRC Zero). 7) Hydraulic versions: overrunning loads cause pressure spikes (fit cross-port relief valves; Power & Motion), and leaks can inject oil through the skin (HSE hydraulic injection bulletin). 8) Never store high pressure in a printed part ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Growing backlash from worn rack and pinion gears, which spoils positioning: use double-rack units (Tameson). 2) Leaks past vane seals, which are more troublesome than piston seals (Wikipedia 'Rotary actuator'). 3) Damage from stopping too much kinetic energy at the end of travel: check the energy and add shock absorbers or cushions (SMC selection guide; Power & Motion). 4) Stick-slip or stalling when set to turn too slowly (SMC selection guide). 5) Bearing and shaft damage from side loads beyond the allowable load: support the load with an outside bearing (SMC selection guide). 6) Undersized torque for valves with friction or gravity loads: apply the 3-5x and 10x margins (SMC selection guide). 7) Printed steppers: air leaks from poorly fitting seals, jammed pistons from glue or rough faces, worn PLA gears (Printables 218779).
- **related**: 
  - Air or hydraulic cylinder: gives a straight push; with a lever it can turn up to about 90 degrees but with uneven torque (Power & Motion)
  - Rack and pinion: the gear mechanism inside the rack-and-pinion actuator, here driven by air pistons
  - Scotch yoke (motion conversion): the pin-and-slot mechanism inside heavy-duty valve actuators (Tameson)
  - Servo horn and spline hub (RC servo): the electric equivalent for small projects, with easy mid-position control
  - Shut-off valve (ball valve, butterfly valve): the quarter-turn valves these actuators most often drive
  - Switching valve (directional control valve, solenoid valve): what switches the air to each side
  - Soft pneumatic bending actuator and pneumatic artificial muscle: soft air-powered movers that bend or pull instead of turning a shaft
  - Bellows and inflatable actuators: rubber or fabric air movers that can also swing a hinge
  - Geneva drive and other indexing mechanisms: give stepped rotation mechanically, as the pneumatic stepper does with air
  - Gear pump (gerotor) run as a hydraulic motor: gives continuous rotation from fluid flow instead of a limited swing

### Pictures, videos and models

- **links**: 
  - [Verin rotatif principe.svg (Cdang; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Verin_rotatif_principe.svg): Diagram of the principle of a rack-and-pinion rotary actuator: a hydraulic cylinder whose rack turns a gear (teeth partly drawn); used on the Wikipedia 'Rotary actuator' article *(licence: GFDL 1.2+ or CC BY-SA 1.0/2.0/2.5/3.0)*
  - [Pneumatic Rack and Pinion Actuators.JPG (Z22; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatic_Rack_and_Pinion_Actuators.JPG): Photo of two pneumatic rack-and-pinion actuators with solenoid valves controlling two valves on a large water pipe *(licence: CC BY-SA 3.0)*
  - [Pneumatic Rotary Actuator - How They Work (Tameson)](https://tameson.com/pages/pneumatic-rotary-actuators): Figures of rack-and-pinion (single and double rack), scotch-yoke and vane actuators, including the inside of a vane actuator's chamber *(licence: link only)*
  - [Book 2, Chapter 19: Rotary actuators (Power & Motion / Hydraulics & Pneumatics)](https://www.powermotiontech.com/technologies/other-technologies/article/21882754/book-2-chapter-19-rotary-actuators): Cutaway drawings of single- and double-vane, rack-and-pinion, spiral-shaft and chain-and-sprocket rotary actuators, plus example machines and circuits *(licence: link only)*
  - [High-Performance Pneumatic Stepper Motors (Vincent Groenhuis, YouTube)](https://www.youtube.com/watch?v=BBG-8ZSOmdY): Video of 3D-printed pneumatic stepper motors running, linked from the T-8 model page *(licence: link only)*
- **make_it_yourself**: 
  - [M-45 multipurpose pneumatic stepper motor (Vincent Groenhuis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/218779-m-45-multipurpose-pneumatic-stepper-motor): Printable two-cylinder pneumatic stepper motor, 45 x 40 x 15 mm, up to about 0.5 N m, with a LEGO Technic-compatible shaft and an optional rack for linear stepping; detailed print, seal and gluing instructions *(licence: CC BY-NC-SA)*
  - [Pneumatic stepper motor: T-8 (Vincent Groenhuis, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/44562-pneumatic-stepper-motor-t-8): Tiny 8 x 8 x 5.5 mm printable pneumatic stepper with 0.2 mm steps, for high-resolution printers and advanced users *(licence: CC BY-NC-SA)*
- **diagram_idea**: Two cutaways side by side: a round chamber with a paddle on the shaft and a fixed stop, air arrows pushing the paddle round through about 270 degrees; and a double-rack unit with two pistons whose toothed rods sit either side of a central gear, air pushing the pistons apart and a curved arrow showing the gear turning a quarter turn, with a spring drawn behind each piston for the spring-return version.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rotary_actuator
  - https://en.wikipedia.org/wiki/Rack_and_pinion
  - https://en.wikipedia.org/wiki/Animatronics
  - https://tameson.com/pages/pneumatic-rotary-actuators
  - https://tameson.com/pages/pneumatic-rotary-rack-and-pinion-actuators
  - https://www.powermotiontech.com/technologies/other-technologies/article/21882754/book-2-chapter-19-rotary-actuators
  - https://www.smcworld.com/catalog/SMC-HP-PDF/ro_actuator_select-en.pdf
  - https://research.utwente.nl/en/publications/rapid-prototyping-high-performance-mr-safe-pneumatic-stepper-moto/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://www.frczero.org/pneumatics/pneumatic-safety/
  - https://commons.wikimedia.org/wiki/File:Verin_rotatif_principe.svg
  - https://commons.wikimedia.org/wiki/File:Pneumatic_Rack_and_Pinion_Actuators.JPG
  - https://commons.wikimedia.org/wiki/Category:Rotary_actuators
  - https://www.youtube.com/watch?v=BBG-8ZSOmdY
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/218779-m-45-multipurpose-pneumatic-stepper-motor
  - https://www.printables.com/model/44562-pneumatic-stepper-motor-t-8

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air, liquid, suction ⚑ *needs confirming (best guess): `power` names several power sources, and not all may apply*
- **power_loss**: not applicable ⚑ *needs confirming (best guess): `power` mentions losing power, but none of the three outcomes*
- **motion_in**: pressure
- **motion_out**: back-and-forth turning
- **shaft_layout**: not applicable
- **overload_response**: not applicable ⚑ *needs confirming (best guess): listed as torque-limiting or breakaway, but no overload behaviour matched*
- **clicks**: clicks
- **tools**: drill and tap, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: move or push something
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, input_output, making_tips_3d_printing, materials, play_and_precision, safety_notes, special_behaviour, when_not_to_use

## 319 Float valve (ballcock)

*hydraulics, pneumatics & vacuum.* A float on a lever that shuts the water inlet as the level rises, keeping a tank topped up without overflowing, as in toilet cisterns and animal drinkers

### What it is

- **plain_name**: A floating ball, cup or bottle on an arm that lets water into a tank and shuts it off by itself when the water rises to the right level, so the tank refills after use but never overflows
- **term**: Float valve (ballcock, float-operated valve)
- **aliases**: 
  - ballcock, ball cock, balltap (Wikipedia)
  - ball valve or ball float valve (UK plumbers' everyday name; not the same thing as a quarter-turn ball valve tap) (diydata; APM)
  - float-operated valve (the British Standard BS 1212 term) (Squote)
  - fill valve, toilet fill valve, inlet valve, flush-tank fill valve (US and toilet terms) (UpCodes; DIY Doctor)
  - Portsmouth valve and Croydon valve (the old piston types, BS 1212 Part 1) (Squote; Wikipedia)
  - diaphragm ballvalve (BS 1212 Parts 2 and 3, brass and plastic bodies) (Squote)
  - equilibrium float valve, compact float valve (BS 1212 Part 4) (Wikipedia; Squote)
  - float cup valve or cup float valve (pioneered by Fluidmaster (brand) in 1957) and internal-float 'quiet fill' valve (Wikipedia; DIY Doctor)
  - Torbeck valve (brand; a compact side- or bottom-entry WC cistern valve) (APM)
  - anti-siphon fill valve (US plumbing-code term) (UpCodes)
  - trough valve, stock-tank float valve, livestock waterer valve (Nelson Manufacturing)
  - auto top-off (ATO) float valve (aquariums) (Thingiverse sbash); hydroponics or Kratky float valve (Hackaday)
  - floatless (pressure-sensing) fill valve and delay fill valve: relatives that do the same job without a lever float (Wikipedia)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: seals & pass-throughs
- **one_liner**: A self-acting tap fitted through the wall of a tank: a float rides on the water and moves a lever, which opens the inlet when the level drops and presses a rubber washer or diaphragm onto the inlet hole when the level reaches a set height, keeping cisterns, troughs and reservoirs topped up with no power and no attention.
- **complexity**: A small assembly that acts as one unit. Lever types: a hollow sealed float (ball, cup or flat shape), a float arm, a pivot, a valve body that screws through the tank wall with a back-nut and washers, a seat (nozzle), and a closing part: a sliding piston with a rubber washer (Portsmouth type) or a plunger pin pressing a rubber diaphragm (diaphragm type) (Wikipedia diagrams; diydata). Equilibrium valves add a pilot hole through the diaphragm and a small pressure-relief hole that the float arm closes with its own washer (Wikimedia Commons diagram descriptions). Cup-float toilet valves have a cup-shaped float that slides up and down the upright valve body (DIY Doctor).
- **how_it_works**: The water pushes the float up with a force equal to the weight of water it pushes aside (Archimedes' principle, Wikipedia), and the float arm acts as a lever that multiplies this force onto the valve. When the level falls, the float drops, the arm swings away and supply pressure pushes the washer or diaphragm off the inlet, so water flows in; as the level rises, the float lifts the arm until it presses the washer or diaphragm back onto the seat and shuts the supply at a preset level (Wikipedia 'Ballcock'). Because the valve closes gradually as the float rises, it is a simple automatic controller (Wikipedia: 'an example of negative feedback and of proportional control'). In an equilibrium valve the float only opens or shuts a tiny relief hole: water pressure behind the diaphragm then does the work of holding the main valve shut or letting it open, so a small float on a short arm can control mains pressure (Wikipedia; Commons diagram descriptions).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: lets water through the tank wall when the level is low and seals the inlet shut when the tank is full (Wikipedia 'Ballcock')
  - slow it, stop it or keep its speed steady (loosely): keeps the water level steady by itself, refilling whatever is drawn off by a flush, by animals drinking, by evaporation or by plants, with no power (Wikipedia; Nelson Manufacturing; Remove and Replace)
- **motion**: multiple: the float and arm swing up and down about a pivot (rotate) through a small angle; inside the body a piston slides (Portsmouth type) or a diaphragm flexes (diaphragm and equilibrium types); in cup-float toilet valves the float slides up and down the valve stem (Wikipedia; diydata; DIY Doctor)
- **degrees_of_freedom**: 1: the float, arm and closing part are linked so they move together as one, driven only by the water level
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): the rise and fall of the water level becomes a swing of the float arm, which a cam or pin turns into a short push on the piston or diaphragm (diydata); the lever also multiplies the float's small lift into a force big enough to close against the supply pressure (Wikipedia)
  - fail-safe or breakaway: it is NOT fail-safe on its own: a punctured float fills with water and sinks, holding the valve open, and a broken or detached arm leaves nothing to close it, so the tank floods unless there is an overflow (warning) pipe (DIY Doctor; Squote: a warning pipe is mandatory)
  - none of the locking behaviours: it does not latch or snap; it opens partly or fully in proportion to how far the level has dropped (Wikipedia: 'proportional control')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it controls the flow of water rather than holding parts together
  - friction or clamping (force-fit): the float's buoyancy, multiplied by the lever, presses a rubber washer or diaphragm hard onto the seat to seal it (Wikipedia diagram captions); the valve body is clamped through the tank wall by a back-nut and rubber washers (APM; DIY Doctor)
  - suction or air pressure (water pressure, in equilibrium valves): supply pressure acting on the larger back face of the diaphragm holds it against the outlet, and the float only has to keep a tiny relief hole shut (Wikimedia Commons equilibrium-valve diagram description)
- **input_output**: Water level (float height) -> valve opening. The float arm is a lever: the closing force on the seat equals the float's buoyancy times the ratio of arm length to the short distance from pivot to valve, which is why piston valves need a big float or a long arm to close against mains pressure (Wikipedia 'Ballcock'). The action is proportional, not snap-action: near the shut-off level the valve is only slightly open, so the last part of filling is slow and can hiss or keep dribbling (US patent 2837111, quoted in Wikipedia 'Ballcock'). Not back-drivable in a useful sense: pushing the arm down by hand opens the valve, lifting it shuts it. Shaft arrangement and efficiency: not applicable.
- **power**: passive (no power needed): the water level moves the float and the supply pressure does the rest, so it keeps working in a power cut (Wikipedia; Hackaday 2022: no pumps or electrical equipment). If the supply pressure is lost it simply stops filling; it does not need resetting
- **removability**: removable: the valve body is held through the tank wall by a back-nut and connected to the supply by a compression or threaded fitting; the float arm clips on or is held by a split pin, and the float screws onto the arm (APM; DIY Doctor)
- **reuse_cycles**: many times: the valve can be unscrewed, repaired with a washer or diaphragm kit and refitted (DIY Doctor; APM). It opens and closes after every flush or drink for years, until the washer or diaphragm wears or scale builds up (APM; Squote)
- **tools_needed**: Adjustable spanner and pump (slip-joint) pliers to hold the body while undoing the back-nut and supply nut, PTFE tape for threads, and a screwdriver or key for the servicing (isolation) valve (APM; DIY Doctor). Adjusting the level needs only your hands (bending a brass arm) or a screwdriver for an adjusting screw (diydata). Printed versions need a hole cut in the tank (FoodRising Thingiverse part: a 15 mm hole) and a tube to the supply (Thingiverse cheungbx)
- **seal**: watertight: a rubber washer (piston type) or rubber diaphragm pressed onto a smooth seat shuts off the supply, and rubber washers either side of the tank wall seal the body (Wikipedia; APM). It is not a backflow seal: protection of drinking water against back-siphoning comes from the outlet discharging above the water with an air gap, or from an approved anti-siphon device; low 'silent fill' tubes that discharged under water are now banned (diydata; APM; UpCodes)
- **load**: Not a structural part. Valves are made in high-, medium- and low-pressure versions with different seat-hole sizes (Squote; diydata); compact WC valves typically cover about 0.05 to 10 bar (APM, vendor guide); old Portsmouth valves suit low-pressure gravity feeds below about 0.5 bar, and on supplies above about 3 bar an equilibrium valve or a pressure-reducing valve is advised (APM). Don't lean on or hang anything from the float arm: bending it changes the water level (diydata)
- **adjustable**: yes: the shut-off level is set by bending the brass float arm (up for more water, down for less), by a hinge in the arm with an adjusting screw and lock nut, by an adjusting screw at the valve end, by sliding the float along the arm, or on cup-float toilet valves by a small plastic screw or by raising or lowering the valve head (diydata; DIY Doctor; APM). Thang's animation shows the same idea: the angle between the float arm and the valve lever sets the highest water level (Thang, part 3, p. 168). The fill rate is set by fitting the high- or low-pressure seat (diydata)
- **play_and_precision**: noticeable: it is a level controller, not a locating joint. Because it closes gradually as the level rises, the final level depends a little on supply pressure and the valve can creep shut slowly, hissing or dribbling before it fully seals (US patent 2837111 via Wikipedia) ⚑ [uncertain: how many millimetres the level varies was not found]. Misalignment: the float must hang freely and not rub on the tank wall or other fittings, or it sticks (DIY Doctor; Squote list sticking and debris as common faults) *(⚑ parts need confirming)*
- **access_needed**: both sides: the valve body goes through a hole in the tank wall (or base, for bottom-entry valves), with the float and back-nut inside or outside depending on design and the supply pipe outside, so you need the lid off and room to reach the supply connection (APM; DIY Doctor)
- **materials**: Bodies: brass (BS 1212 Parts 1 and 2) or plastic (Parts 3 and 4) (Squote; DIY Doctor). Floats: hollow sealed plastic balls or cups (DIY Doctor); a plastic bottle can serve as a home-made float (Thingiverse JMK54). Arms: solid brass rod or plastic (diydata). Seals: rubber washers and rubber or elastomer diaphragms (Wikipedia; APM). Printed: PETG or ASA rather than PLA for parts that live in water (Printables 'Planter Float Valve Reservoir Box'; Thingiverse sbash: 'Don't use PLA'); FoodRising's float valve receiver is printed in Taulman t-glase (brand filament) at 100% infill and its maker says PLA and ABS are too fragile (Thingiverse); a strip of silicone or a rubber ball makes the seal (Hackaday 2022; Thingiverse JMK54)
- **maker_difficulty**: easy to buy and fit: cheap, screws through one hole and is adjusted by hand (DIY Doctor; diydata). Moderate to make: printed float valves work for low-pressure, gravity-fed reservoirs (plants, aquariums, small animal drinkers), but need a smooth seat, a soft seal and a float that stays sealed (Hackaday 2022; Thingiverse designs). Not advisable to print one for mains-pressure drinking water: those valves must meet backflow rules and approvals (UpCodes; APM: WRAS approval in the UK)

### Making it

- **processes**: 
  - off-the-shelf part: toilet fill valves, BS 1212 cistern valves, trough and stock-tank valves, aquarium and hydroponics mini float valves, evaporative-cooler float valves (Squote; Nelson Manufacturing; Remove and Replace; Printables and Thingiverse mounts for bought valves)
  - 3D print (FDM): low-pressure float valves for passive hydroponics, planters and tanks fed by gravity from a reservoir, and brackets, boxes and mounts for bought mini float valves (Hackaday 2022; Thingiverse cheungbx, JMK54, sbash; Printables)
  - plumbing fittings: a bought float valve fitted to a bucket, barrel or trough with a tank connector and back-nut (APM)
- **print_in_place**: no: printed float valves are printed as separate parts (body, lever, float or float holder, retaining nut) and assembled with an added seal such as a silicone strip or rubber ball, and often a rod, bottle or tube (Thingiverse JMK54 and cheungbx; FoodRising part on Thingiverse; Hackaday 2022)
- **making_tips_3d_printing**: 1) Only for low pressure: printed float valves are used on gravity feeds from a reservoir a little above the tank (Hackaday 2022; Thingiverse cheungbx), not on mains pressure, where the float would need far more force to close the seat (Wikipedia 'Ballcock') ⚑ [uncertain: no test of printed valves at mains pressure was found]. 2) Material: use PETG or ASA (or a tough specialist filament such as the t-glase used by FoodRising); makers warn against PLA for parts that sit in water or take load (Thingiverse sbash 'Don't use PLA'; FoodRising: PLA and ABS 'too fragile', printed at 100% infill; Printables 'Planter Float Valve Reservoir Box' recommends PETG or ASA). JMK54's simple design was printed in PLA at 35% infill with no supports but notes ABS would be preferable (Thingiverse). 3) The seal: don't rely on plastic against plastic; press a soft part onto the outlet, e.g. a strip of silicone (Hackaday 2022) or a rubber ball glued to the lever (Thingiverse JMK54). 4) The float: it must stay sealed and light. Billy's design prints a sealed hollow float shaped to fit its housing (Hackaday 2022); JMK54 offers either a glued-on plastic bottle or a 4 mm threaded rod carrying a separate float (Thingiverse). Printed hollow shells can let water seep in through gaps between layers, so use extra perimeters or check by weighing after a soak ⚑ [uncertain: general FDM advice, not from a float-valve source]. 5) Thin printed nozzles are weak: cheungbx suggests replacing the printed inlet pipe with a 4.7 mm outside-diameter plastic tube (Thingiverse). 6) Give the lever room to swing and make the float big enough, or put it on a longer arm, since closing force = buoyancy x lever ratio (Wikipedia; Archimedes' principle). 7) Make the level adjustable (a slot or screw between arm and lever), as on commercial valves (diydata; Thang p. 168). 8) Test over a sink or tray first and keep an overflow route: a sticking printed valve will flood (sbash warns a printed bracket breaking makes 'a big, wet mess'). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: BS 1212 Part 1 (Portsmouth piston) brass float valves; Part 2 brass diaphragm and Part 3 plastic diaphragm float valves; Part 4 compact and equilibrium float valves; high-pressure (HP), medium (MP) and low-pressure (LP) seats or nozzles; diaphragm and washer repair kits; plastic float balls and float arms; tank connectors with back-nuts and washers; servicing (isolation) valves; overflow or warning pipe kits (Squote; APM; diydata; DIY Doctor). US toilet fill valves: float-cup, internal-float 'quiet fill' and anti-siphon fill valves to ASSE 1002 marked with a critical level 'CL' line (Wikipedia; DIY Doctor; UpCodes). Agricultural: trough and stock-tank float valves (Nelson Manufacturing). Small 1/4 in and 1/2 in plastic mini float valves for aquariums, hydroponics, chicken waterers and evaporative (swamp) coolers (Printables mounts and boxes for these; Remove and Replace)
- **rules_of_thumb**: 
  - Match the valve's seat to the supply: the high-pressure seat (smaller hole) for mains-fed tanks and the low-pressure seat for tank-fed (gravity) supplies; an HP seat on a gravity feed fills very slowly, and an LP seat on the mains may not shut off properly and leaks (diydata; Squote)
  - Set the shut-off level at least 25 mm below the overflow (warning) pipe in a cold-water storage cistern, and about 25-50 mm below the overflow in a WC cistern, or to the maker's marked line (APM; Squote says about 25 mm)
  - Every tank with a float valve needs an overflow or warning pipe (Squote: minimum 19 mm or 22 mm depending on tank size) that discharges somewhere an overflow will be noticed (Squote; APM)
  - Drinking-water supplies: the valve must discharge above the water with an air gap (UK Water Fittings Regulations, BS EN 1717 air gaps) (APM); in the US, flush tanks need an anti-siphon fill valve to ASSE 1002 with its critical level mark at least 1 inch (25 mm) above the top of the overflow pipe (International Residential Code P2902.4.1, via UpCodes)
  - On supplies above about 3 bar, use an equilibrium valve or fit a pressure-reducing valve, because ordinary valves must close against the full supply pressure and can hammer (APM)
  - Closing force = float buoyancy (the weight of water the float displaces, Archimedes' principle) multiplied by the lever ratio; piston (Portsmouth) and diaphragm valves therefore need a large float or a long arm, while equilibrium valves manage with a small float on a short arm (Wikipedia 'Ballcock'; Wikipedia 'Archimedes' principle')
  - Fit a servicing (isolation) valve on the supply just before the float valve so it can be repaired without draining everything (APM; DIY Doctor)
  - Threaded plastic bodies: tighten hand-tight then about a quarter turn with a spanner; over-tightening a back-nut can crack a plastic cistern (APM)
  - Use a quiet-fill or slow-closing valve where banging pipes (water hammer) are a problem (Wikipedia 'Hydraulic shock')

### When to use it

- **everyday_examples**: 
  - The float and arm inside a toilet cistern that refill it after every flush (Wikipedia; DIY Doctor)
  - The ball valve in a loft cold-water tank or central-heating header tank (UK homes) (DIY Doctor; APM)
  - Automatic water troughs and drinkers for cattle, horses and chickens (Nelson Manufacturing; APM)
  - The water reservoir in an evaporative (swamp) cooler, topped up as water evaporates (Remove and Replace; Bob Vila)
- **when_to_use**: Use one when a tank, trough or reservoir must stay full while water is drawn from it at unpredictable times, and there is a supply under pressure (mains) or a higher reservoir to feed it: toilet and storage cisterns, animal drinkers, aquarium auto top-off, passive hydroponics and self-watering planters, and evaporative coolers (Wikipedia; Nelson Manufacturing; Hackaday 2022; Remove and Replace). It needs no power, sensors or pump, so it suits off-grid and outdoor setups, and with an equilibrium or diaphragm design it can control mains pressure from a small float (Wikipedia; APM).
- **when_not_to_use**: Don't use one where the fill must stop at an exact time or volume, or where you need an alarm or remote control: use a float switch (an electrical level sensor) with a solenoid valve or pump instead (Wikipedia 'Float switch'). Don't put one at the end of a hydraulic ram pump's delivery pipe: a ram that is blocked pumps up to its maximum pressure, stops and must be restarted by hand, so troughs fed by a ram need a continuous overflow instead (Clemson LGP 1017). Avoid a submerged inlet or home-made valve on a drinking-water connection: use an approved valve with an air gap or anti-siphon device (APM; UpCodes). For draining a tank automatically, use an automatic (bell) siphon or a pump with a float switch; the float valve only fills. Where animals can reach it, protect it or use a design with no exposed float, since a valve under water in a big tank is hard to reach and clean (Nelson Manufacturing).
- **environment_limits**: Hard water: scale builds up on seats and moving parts; old brass Portsmouth valves corrode and seize in hard-water areas, and diaphragm valves are claimed to suffer less (APM; diydata). Cold: tanks and valves in cold lofts can freeze, stopping the supply (APM). Pressure: the valve must suit the supply pressure class (HP, MP or LP), or it leaks or fills slowly (Squote; diydata). Ageing: rubber washers and diaphragms wear, and hollow floats can crack and fill with water (DIY Doctor; APM). Printed plastic: PLA is discouraged for parts in water (Thingiverse sbash; FoodRising) ⚑ [uncertain: no test of how long printed PLA or PETG float valves last in water was found]. Sunlight on outdoor troughs, and warm water in coolers, are likely to age plastic floats faster ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Flooding: if the float punctures or the arm breaks, the valve stays open, so always keep the overflow (warning) pipe clear and discharging where it will be seen (DIY Doctor; Squote). 2) Drinking-water contamination: a valve whose outlet is under the water can siphon tank water back into the mains when supply pressure drops; this is why 'silent fill' tubes are banned and approved valves with air gaps or anti-siphon devices are required (diydata; APM; UpCodes). Non-compliant fittings can be an offence (APM: under the Water Industry Act 1991 in England and Wales). 3) Water hammer: valves that shut quickly against high pressure can make pipes bang and stress fittings; use an equilibrium or quiet-fill valve or reduce the pressure (APM; Wikipedia 'Hydraulic shock'). 4) Turn off the supply (servicing valve or stopcock) before taking a valve apart (APM; DIY Doctor). 5) Printed valves: keep them to low-pressure gravity feeds and test them where a leak can't do damage. Otherwise low risk.
- **common_failures**: 1) Constant trickle from the overflow: worn washer or diaphragm, or the level set too high; replace the washer or diaphragm, or lower the arm (APM; diydata). 2) Won't shut off: the float is punctured and waterlogged, or the arm has come off; replace the float (DIY Doctor; APM). 3) Slow or noisy filling: debris or scale in the seat, or the wrong pressure seat; clean it or fit the right HP or LP seat (APM; diydata). 4) Banging on filling: high supply pressure on a non-equilibrium valve; fit an equilibrium valve or a pressure-reducing valve (APM). 5) Seized or corroded arm on old brass valves in hard-water areas: replace with a modern diaphragm valve (APM). 6) Hissing and slow final closing, because the valve closes gradually as the float rises against supply pressure (US patent 2837111, via Wikipedia). 7) Tank won't refill: the isolation valve is shut, the supply pressure is too low, or a diaphragm has collapsed (APM). 8) Frozen supply in a cold loft (APM). 9) Printed valves: leaks at a rough seat, floats that slowly fill, and weak thin printed nozzles (Thingiverse cheungbx) ⚑ [uncertain: from maker notes, not tests]. *(⚑ parts need confirming)*
- **related**: 
  - Check valve (one-way valve): also self-acting, but it reacts to which way the water flows, not to the water level
  - Float switch: a float that works an electrical switch to run a pump or a solenoid valve; it needs power but can sound alarms and act on several levels (Wikipedia 'Float switch')
  - Shut-off valve (tap, ball valve, stopcock): the hand-operated valve fitted before a float valve so it can be serviced
  - Switching valve (solenoid valve): an electrically operated valve, often paired with a float switch instead of a float valve
  - Pressure regulator (pressure-reducing valve): lowers high mains pressure so a float valve can shut off cleanly and quietly (APM)
  - Automatic siphon (bell siphon): empties a tank automatically, where the float valve fills one
  - Hydraulic ram pump: can lift water to a trough, but must not be shut off by a float valve (Clemson LGP 1017)
  - Floatless and delay fill valves: fill toilet tanks using a pressure-sensing diaphragm instead of a float, or wait until the level is low before refilling (Wikipedia)
  - Balance-beam waterer: a drinking bowl on a counterweighted beam that opens the valve as the bowl gets lighter, a float-free alternative for livestock (Nelson Manufacturing)
  - Bell crank and other levers: the float arm is a simple lever that multiplies the float's force

### Pictures, videos and models

- **links**: 
  - [Portsmouth-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg): Labelled cross-section of a Portsmouth (piston) ballcock: float, float arm, pivot, piston, washer, seat and inlet *(licence: CC BY-SA 4.0)*
  - [Portsmouth-Valve-Open.svg (SouthHamsian; Wikimedia Commons), used with Portsmouth-Valve-Closed.svg](https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg): A whole water tank with a Portsmouth-type ballcock open: the float has dropped with the water level and the arm has pulled the piston and washer away from the inlet *(licence: CC BY-SA 4.0)*
  - [Diaphragm-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg): Cross-section of a diaphragm ballcock: the float arm pushes a plunger pin that presses a flexible diaphragm against the seat *(licence: CC BY-SA 4.0)*
  - [Equilibrium-Valve-Closed-detail.svg (SouthHamsian; Wikimedia Commons), with A_diagram_of_an_open_equilibrium_float_valve.svg](https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg): Equilibrium float valve closed (and, in the companion file, open): the float only seals a small relief hole, and water pressure on the diaphragm's larger face holds the main valve shut *(licence: CC BY-SA 4.0)*
  - [Water tank automatic valve (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=TTad0HzrQt8): CAD animation of a float-operated tank valve cut in half: the float arm closes a cone-shaped valve as the water rises; the arm-to-lever angle sets the highest level (described in Thang's 2700 Animated Mechanical Mechanisms, part 3, p. 168) *(licence: link only (YouTube, all rights reserved))*
- **make_it_yourself**: 
  - [Hydroponics Float Valve Snap-in No screws (cheungbx, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:4574305): Printed float valve for passive hydroponics, fed by gravity from a nutrient tank; keeps the level at no more than about 20 mm; PLA, 40% infill, no supports; the printed inlet pipe can be swapped for a 4.7 mm plastic tube *(licence: ⚑ [uncertain: licence not shown in the page metadata])*
  - [DIY Float Valve For Passive Hydroponics Leverages 3D Printing (Hackaday, 2022)](https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/): Article and video on Billy's printed float valve: a sealed printed float in a housing presses a silicone strip over the outlet when the level is high *(licence: link only)*
  - [Float valve for hose (JMK54, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:1679411): Printed lever float valve that fits through a tank wall, with a glued-on bottle or a rod-mounted float and a rubber ball as the seal; PLA (ABS preferred), 35% infill, no supports *(licence: ⚑ [uncertain: licence not shown in the page metadata])*
  - [Planter Float Valve Reservoir Box (Eric Hennigan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1695086-planter-float-valve-reservoir-box): Parametric slotted box that houses a small bought float valve at the bottom of a planter to make it self-watering; print in PETG or ASA *(licence: CC BY-NC-SA)*
  - [Aquarium Auto Fill Float Ball Valve Bracket (William, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket): Bracket for mounting a small bought float ball valve on an aquarium for automatic top-off *(licence: CC BY)*
  - [Aquarium Trim Float Valve Mount (sbash, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:3353247): Two-part clamp that holds a float valve on an aquarium rim for auto top-off; printed in PETG ('Don't use PLA') *(licence: ⚑ [uncertain: licence not shown in the page metadata])* *(⚑ parts need confirming)*
- **diagram_idea**: A cut-away tank shown twice side by side: on the left the water is low, the float has dropped and the arm has pulled the washer off the inlet so water pours in; on the right the water is at the set line, the float has lifted the arm and the washer is pressed onto the inlet, with a dashed overflow pipe just above the water line and a small lever sketch showing how the long arm multiplies the float's push.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ballcock
  - https://en.wikipedia.org/wiki/Hydraulic_shock
  - https://en.wikipedia.org/wiki/Float_switch
  - https://en.wikipedia.org/wiki/Archimedes%27_principle
  - https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Closed-detail.svg
  - https://commons.wikimedia.org/wiki/File:Portsmouth-Valve-Open.svg
  - https://commons.wikimedia.org/wiki/File:Diaphragm-Valve-Closed-detail.svg
  - https://commons.wikimedia.org/wiki/File:Equilibrium-Valve-Closed-detail.svg
  - https://commons.wikimedia.org/wiki/File:A_diagram_of_an_open_equilibrium_float_valve.svg
  - https://www.diydata.com/plumbing/ball_valves/ball_valves.php
  - https://www.diydoctor.org.uk/projects/fit-float-valve.htm
  - https://apmi.uk/blogs/news/float-valves-portsmouth-diaphragm-and-equilibrium-types-choosing-the-right-valve-for-cisterns
  - https://squote.app/knowledge/plumbing/float-valves
  - https://up.codes/s/fill-valves
  - https://www.nelsonmfg.com/how-automatic-livestock-waterers-work-part-1-refilling-systems/
  - https://removeandreplace.com/2013/03/18/how-does-an-evaporative-cooler-swamp-cooler-work/
  - https://www.bobvila.com/articles/what-is-a-swamp-cooler/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=TTad0HzrQt8
  - https://hackaday.com/2022/02/19/diy-float-valve-for-passive-hydroponics-leverages-3d-printing/
  - https://www.thingiverse.com/thing:4574305
  - https://www.thingiverse.com/thing:1679411
  - https://www.thingiverse.com/thing:3353247
  - https://www.thingiverse.com/thing:696601
  - https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1695086-planter-float-valve-reservoir-box
  - https://www.printables.com/model/474852-aquarium-auto-fill-float-ball-valve-bracket

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."*
- **motion_out**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."*
- **shaft_layout**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Water level (float height) -> valve opening. The float arm is a lever: the closing force o..."*
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
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
- **slows_by**: steady speed or level
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, make_it_yourself, making_tips_3d_printing, play_and_precision

## 320 Hydraulic ram pump (water-hammer pump)

*hydraulics, pneumatics & vacuum.* A pump with no motor: water rushing down a pipe slams a valve shut, and the pressure surge pushes part of the water higher than where it came from

*Also covers:* Safety: water-hammer pressure spikes can burst pipes and fittings

### What it is

- **plain_name**: A water pump with no motor, fuel or electricity: water running down a pipe from a stream or spring keeps slamming a valve shut, and each bang pushes a little of the water up a second pipe to a tank or trough much higher than where the water came from
- **term**: Hydraulic ram pump (hydram)
- **aliases**: 
  - ram pump, hydraulic ram, hydram (Wikipedia; Practical Action)
  - water-hammer pump; water ram
  - Montgolfier's hydraulic ram (507 Mechanical Movements, no. 444)
  - pulsation engine (John Whitehurst's hand-operated forerunner of 1772) (Wikipedia)
  - French 'bélier hydraulique': water hammer is 'coup de bélier', 'blow of the ram' (Wikipedia 'Hydraulic shock'); German 'hydraulischer Widder' or 'Stoßheber' (Wikimedia Commons file description)
  - compound ram and indirect ram (falling dirty water drives the lifting of clean water) (Wikipedia; Warwick DTU TR13)
  - brand names a beginner may meet: Blake's Hydram (brand), Papa Pump and Venturo Pump (brands), Rife (brand), Vulcan and Vacher rams (brands) (Wikipedia; Clemson LGP 1017)
  - part names: waste valve (impulse valve, clack valve), delivery valve (delivery check valve), air chamber (pressure vessel, air vessel), snifter (snifting valve), drive pipe, delivery pipe (Wikipedia; Practical Action)
- **family**: hydraulics, pneumatics & vacuum
- **one_liner**: A cyclic pump powered only by falling water: flow builds up in a long rigid drive pipe until it slams a waste valve shut, and the resulting pressure surge (water hammer) forces a fraction of the water through a one-way valve into an air chamber and up a delivery pipe to a height many times greater than the fall that drives it.
- **complexity**: A small assembly that acts as one unit, with only two moving parts: a long rigid drive pipe from the source, a pump body (often a pipe tee), a weighted or spring-loaded waste valve that opens downwards, a delivery check valve, an air chamber holding a cushion of air (kept topped up by a snifter hole or held in a bicycle inner tube), and a delivery pipe; home-made versions add unions, isolation valves and a pressure gauge (Wikipedia; Practical Action; Clemson LGP 1017)
- **how_it_works**: Water runs down the drive pipe and out of the open waste valve, getting faster and faster until the drag of the flow lifts the valve and slams it shut (Wikipedia; Clemson). The moving column of water can't stop instantly, so the pressure in the pump body jumps (water hammer), opens the delivery valve and pushes a little water into the air chamber, squeezing the air; the squeezed air then keeps pushing water steadily up the delivery pipe after the delivery valve closes (Practical Action). The pressure wave runs back up the drive pipe and returns as a suction pulse that, with the valve's weight or spring, reopens the waste valve, and the cycle repeats about 30-100 times a minute (Wikipedia; Practical Action). Energy is conserved: a lot of water falling a little way lifts a little water a long way, and most of the drive water spills out of the waste valve (Practical Action; Wikipedia).

### Finder attributes

- **job**: 
  - change the kind of motion: turns a large flow of water falling a small height into a small flow pushed to a much greater height (Practical Action: 'uses a larger flow of water falling through a small head to lift a small flow of water through a higher head')
  - seal it, or pass cables or fluid through: pumps water along a pipe to a tank, trough or fountain with no fuel or electricity (Wikipedia; Clemson LGP 1017)
- **motion**: multiple: the waste valve's flap or disc swings or lifts open and slams shut, and the delivery valve opens and closes, roughly 30-100 times a minute (Practical Action) or 40-90 times a minute for home-made pumps (Clemson); nothing turns
- **degrees_of_freedom**: 2: the waste valve and the delivery valve each move only between open and shut, independently of each other, driven entirely by the water
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): converts a steady downhill flow at low pressure into a pulsing, higher-pressure flow, trading quantity for height (Practical Action; Wikipedia)
  - one-way (moves freely one way, locks the other): the delivery check valve lets water into the air chamber and stops it running back, and a second check valve is often fitted in the delivery line so the pipe stays full when the pump stops (Practical Action)
  - none of the locking behaviours otherwise: it keeps cycling by itself only while the drive flow lasts and the delivery pipe is open; if either stops, most pumps stop and must be restarted by hand (Clemson; Wikipedia)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it is a pump. The pump body itself must be firmly bolted to a concrete foundation or heavy rocks because each beat is a shock load (Practical Action; Clemson)
- **input_output**: Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted higher (delivery head or 'lift'). Delivery flow is roughly efficiency x drive flow x fall / lift; Rife's rule D = 0.6 x Q x F/E (Clemson LGP 1017). Lift: up to about 10 ft for every foot of fall, or more (Clemson); AID Foundation pumps lift water up to 220 m (Practical Action). Energy efficiency: typically 60%, up to 80% (Wikipedia); 50-80% (ACF manual); 'more than 50%' under favourable conditions (Practical Action); but only 20-40% of the water entering is delivered (ACF), and home-made pumps deliver about 1 gallon for every 8 passing through (Clemson). Example: with 2 m of fall and 10 m of lift at 70% efficiency, 14% of the drive water is delivered (Wikipedia). Not back-drivable: the delivery check valve stops water running back (Wikipedia). Shaft arrangement: not applicable.
- **power**: passive (no power needed): powered only by the energy of the falling drive water, with no outside source of power (Wikipedia). If the drive flow fails or the delivery is shut, it stops; most home-made pumps will not restart by themselves and the waste valve must be pushed open by hand (Clemson), although some designs and printed versions can be set up to self-start (Printables 289108 description)
- **removability**: removable: unions on the drive and delivery sides let the pump be taken off for maintenance (Clemson); commercial rams are bolted to a concrete base (Practical Action)
- **reuse_cycles**: many times: the pump can be unbolted and refitted; it cycles millions of times, but home-made check valves wear out in about three months to two years depending on sandy water and cycle speed (Clemson), while heavy cast traditional rams have run for 50 years or more (Practical Action)
- **tools_needed**: Pipe wrenches and spanners, PTFE tape, PVC primer and cement (both are needed for airtight glued joints, especially at 2 inches and above), a drill for a snifter hole, and concrete, bolts or galvanised tie-downs to anchor the pump and drive pipe; a carpenter's level and measuring stick to measure the fall (Clemson LGP 1017)
- **seal**: airtight or pressure on the delivery side: the delivery check valve, glued or threaded joints and the air chamber must hold the delivery pressure, and the air chamber must not leak air (Clemson). The waste valve deliberately spills drive water every cycle, so the site needs drainage (Clemson)
- **load**: Not a structural part, but it must withstand repeated pressure shocks. Delivery heights: the ACF 2-inch design is rated to 150 m, the DTU S2 design is recommended not to exceed 100 m (ACF manual), and AID Foundation pumps reach 220 m (Practical Action). Home-made PVC rams need about 10 psi (0.7 bar) of back pressure to keep cycling and use a 100 psi gauge (Clemson). The drive pipe carries severe internal shock loads and, at bends, strong sideways forces that can tear it loose, so it must be rigid, straight and anchored (Practical Action; Clemson)
- **adjustable**: yes: the waste valve's weight, spring tension and opening stroke set when it closes; more weight closes it at a higher water speed, giving a bigger surge, more pressure and more flow, while tilting the valve slightly lowers the pressure (Practical Action; Clemson). A valve on the delivery pipe is closed for starting and can throttle the flow to keep the back pressure up (Clemson). Several pumps can be run in parallel to match the available flow (Practical Action; Warwick DTU TR13)
- **play_and_precision**: not applicable (it doesn't locate parts or pass on mechanical motion)
- **access_needed**: end of a tube or shaft: it is fitted at the lower end of the drive pipe, and you need to reach the waste valve to start and tune it (Clemson)
- **materials**: Traditional rams: cast steel, gunmetal and brass, or heavy castings (Warwick DTU TR13; Practical Action); cheaper welded sheet steel bodies (Practical Action); AID Foundation uses stainless steel for the check-valve plate, waste valve and stopper (Practical Action). Home-made: PVC fittings, a brass swing check valve as the waste valve (a metal flapper is needed for its weight), a PVC or brass spring check valve for delivery, a 4-inch PVC pipe air chamber with a bicycle inner tube inside, and galvanised steel where a snifter hole or extra strength is needed (Clemson). Drive pipe: galvanised steel is best; thick-walled Schedule 80 PVC is a cheaper second choice; flexible hose will not work (Clemson; Practical Action). Printed: PLA bodies with 95A TPU seals and valves (Printables 289108), or resin bodies with Viton rubber balls as check valves (Printables 349980)
- **maker_difficulty**: moderate: a plumbing-fittings version is a classic build costing about $150-200 (Clemson), but the site is the hard part: it needs a reliable flow and a long rigid drive pipe with enough fall (home-made pumps need about 5 ft (1.5 m) of fall; Clemson), plus patient starting and tuning. Printed versions are good working demonstrations at a few feet of head (Printables 289108 and 349980 descriptions)

### Making it

- **processes**: 
  - off-the-shelf part: commercial cast or fabricated rams (Practical Action; Wikipedia)
  - plumbing fittings: PVC or galvanised pipe fittings with brass swing and spring check valves (Clemson LGP 1017; Hackaday 2017)
  - 3D print (FDM): working demonstration pumps with PLA bodies and TPU seals and valves (Printables 289108, also on Thingiverse 5530720)
  - 3D print (resin): suggested by one designer for smoother valve seats (Printables 349980)
  - sheet metal and welding: welded steel bodies, as made in South-East Asia and by AID Foundation (Practical Action)
- **print_in_place**: no: printed rams are several separate parts (body, waste valve, check valve, seals) assembled with bought hardware such as a threaded rod and washers as waste-valve weights, rubber balls or O-rings, and a soda bottle as the air chamber (Printables 289108 and 349980 descriptions)
- **making_tips_3d_printing**: 1) Treat a printed ram as a low-head demonstration: the published printed pumps were tested with about 2 ft and 44 in (about 0.6-1.1 m) of fall (Printables 349980 and 289108 descriptions); don't scale them up to high heads or permanent supply duty, because the pump body takes repeated pressure shocks (Practical Action; Clemson). 2) Sealing faces: hopping3d prints valve and seal parts in 95A TPU, uses a smooth (not textured) build plate for the TPU seals and check-valve body, turns on concentric ironing for all parts, prints at 0.15 mm layers, uses 100% infill for seals and valves and 20% with 3 perimeters for bodies, and dries the TPU first (Printables 289108). 3) Orientation matters for the seats: follow the designer's slicer screenshots; k1n3k prints the main body leaning at 45 degrees and the waste valve upside down, and says FDM seats need smoothing to seal (Printables 349980). 4) Use bought sealing parts where you can: 5/8 in Viton balls as check valves and 3/4 in and 1 in ID O-rings (Printables 349980). 5) Waste-valve weight: hopping3d uses a cut-down #6-32 screw with 1/2 in washers, 7 washers for 44 in of head, and none below about 16 in of head (Printables 289108). 6) The air chamber is a pressure vessel: the printed designs screw on a plastic soda bottle (Printables 289108 and 349980); keep heads low, keep faces away while testing, and never make the air chamber itself from printed plastic, since vessels holding compressed air 'can explode violently once their integrity is lost' (HSE HSG39) ⚑ [uncertain: no pressure rating for soda bottles in this use was found]. 7) The drive pipe is not printed and must be rigid: a garden hose won't work, and testing by pushing a hose into the drive pipe stops the pump from starting; feed the drive pipe from an open bucket at least 5 ft above the ram instead (Clemson). 8) A longer, stiffer drive pipe helps: k1n3k's polyethylene charge pipe worked but he expects PVC to do better (Printables 349980; Clemson explains why: elastic pipe walls soak up the surge). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Commercial hydraulic rams (sized by drive and delivery pipe diameter, e.g. '4 x 2' or '6 x 3') (Practical Action). For home-made rams: brass swing check valve (waste valve, same size as the drive pipe), spring-loaded poppet check valve (delivery valve), pipe tees, unions, full-flow ball or gate valves, a 0-100 psi pressure gauge with a 1/4 in pipe cock, bushings and nipples, a 4-inch PVC pipe and cap for the air chamber, a bicycle or scooter inner tube, galvanised steel or Schedule 80 PVC drive pipe, and a large inlet screen (Clemson LGP 1017; Wikipedia). For printed rams: TPU filament, Viton balls, O-rings, garden-hose fittings, a threaded rod and washers, a soda bottle (Printables 289108 and 349980)
- **rules_of_thumb**: 
  - Drive pipe length: about 3 to 7 times the supply head (fall) (Wikipedia; Practical Action), and at least 100 times its own diameter (Practical Action); Calvert's limits are 150 to 1,000 times the drive pipe diameter, e.g. 12.5-83 ft for a 1-inch pipe (Clemson LGP 1017); Rife's rule is 6 x the fall for 3-15 ft, 4 x for 16-25 ft and 3 x for 26-50 ft (Clemson); the ACF manual keeps the length-to-fall ratio at 7 or less
  - Delivered flow (gallons per minute) = 0.6 x drive flow x fall / lift (Rife Ram formula, quoted in Clemson LGP 1017); e.g. 12 gpm with 6 ft of fall and 20 ft of lift gives 2.16 gpm, and doubling the lift to 40 ft halves it to 1.08 gpm
  - Expect about 10 ft of lift per foot of fall, and about 1 gallon delivered for every 8 gallons passing through a home-made ram (Clemson LGP 1017)
  - Home-made rams need about 5 ft (1.5 m) of fall to run dependably; some commercial rams work with as little as 20 inches (Clemson LGP 1017)
  - The drive pipe must be rigid, of constant diameter and material, as straight as possible, with any bends as gentle curves (no elbows), sloping steadily down to the pump with no humps that trap air; galvanised steel is best, thick-walled PVC second (Wikipedia; Clemson; Practical Action). Clemson quotes an optimum slope of 1 ft of drop per 5 ft of length (Gravi-Chek)
  - Put the drive pipe inlet at least 6 inches below the water surface, behind a large (12 in or more) screen ball, so the pump doesn't suck in air or debris (Clemson LGP 1017)
  - Air chamber volume: about 20 to 50 times the water delivered per cycle (University of Warwick advice, via Clemson LGP 1017); keep it from filling with water by using an inner tube or a small snifter hole (start at about 1/16 in) (Clemson; Wikipedia)
  - The waste valve must be a free-swinging, heavy (metal) swing check valve the same size as the drive pipe; spring-loaded or light PVC check valves close too early and the pump won't start (Clemson LGP 1017)
  - A home-made ram needs about 10 psi of back pressure, i.e. a delivery outlet at least 23 ft above the pump, or a throttling valve (Clemson LGP 1017)
  - Size the delivery pipe for a water speed of no more than about 5 ft/s to avoid water hammer in it (Clemson LGP 1017); the delivery pipe is often about half the drive pipe size (Wikipedia), though Clemson says size it by flow and friction instead
  - To start: close the delivery valve, open the supply, then push the waste valve open by hand repeatedly (often 20-30 times) until it keeps cycling, then slowly open the delivery valve (Clemson LGP 1017; Wikipedia)

### When to use it

- **everyday_examples**: 
  - The banging pipes heard when a washing machine, dishwasher or toilet valve suddenly shuts off is the same water-hammer effect a ram pump uses on purpose (Wikipedia 'Hydraulic shock')
  - Farm and village water supplies: three rams in East Dundry near Bristol made a noisy 'thump' every minute or so day and night until mains water arrived around 1958 (Wikipedia)
  - Garden fountains: a Blake's Hydram drives a fountain at the Centre for Alternative Technology in Wales (Wikimedia Commons photo caption)
  - Livestock troughs on hill pasture far from electricity (Clemson LGP 1017)
- **when_to_use**: Use one where there is a steady stream or spring with a drop of at least a few feet below it, and you need a modest, continuous supply of water higher up, far from electricity: livestock troughs, small village or house supplies, garden ponds, fountains and irrigation tanks (Wikipedia; Clemson; Practical Action). It runs 24 hours a day with no fuel and very little maintenance, so even a small flow adds up: a 3/4-inch ram at 0.1 gpm gives about 144 gallons a day, enough for four or five cattle (Clemson). It is also a superb teaching model of momentum, water hammer and energy conservation, and a working printed version can be built (Printables 289108).
- **when_not_to_use**: Don't use one without a flowing source and enough fall: it wastes most of its drive water and can drain a pond if the inflow can't keep up (Clemson). Don't use one where the demand is intermittent and you want to shut the outlet: a blocked ram stops and must be restarted by hand, so a float valve can't be used at the trough (Clemson). For lifting water from a still well, tank or pond with no fall, use a hand pump, solar pump or electric centrifugal or diaphragm pump instead (Clemson mentions solar pumps and nose and sling pumps). For high flows at low lift, a ram is expensive for what it delivers; hydrams are best for small flows to high heads (Practical Action). Avoid it where the water carries lots of sand or debris unless it is screened, as the valves wear quickly (Clemson).
- **environment_limits**: Freezing: frost can damage the ram; insulate the pump and pipes, watch for ice at the waste-valve outlet, and check that a snifter hole hasn't frozen shut (Wikipedia; Clemson). Floods: the waste valve stops working if it is submerged (most designs), and pumps in stream beds need anchoring and shielding from debris in storms (Practical Action; Clemson). Air loss: the air in the chamber gradually dissolves into the water unless an inner tube, diaphragm or snifter keeps it topped up (Wikipedia; Practical Action). Dirty water: sand and silt wear the valves (Clemson), and twigs can jam the waste valve open (Clemson). Corrosion: thin welded-steel rams last about a decade, heavy cast ones 50 years or more (Practical Action). Elastic drive pipes such as PVC absorb some of the surge and lower performance (Clemson).
- **safety_notes**: 1) Water hammer is the working principle, and its pressure spikes can burst pipes and fittings: water hammer 'can cause pipelines to break', and water hammers 'have caused accidents and fatalities' (Wikipedia 'Hydraulic shock'). If the air chamber fills completely with water, 'the hydram body, the drive pipe or the air chamber itself can be fractured' (Practical Action); a waterlogged home-made ram gives much harsher shocks and then fatigue failure (Clemson). Keep air in the chamber (inner tube or snifter) and check it. 2) Don't over-tune: adding weight to the waste valve raises the pressure, and Clemson warns it is possible to raise it until the shock wave 'may cause actual damage to the piping or the pump'. Use pressure-rated pipe and fit a pressure gauge (Clemson). 3) The air chamber is a pressure vessel: vessels containing compressed air, 'even at comparatively low pressure, can explode violently once their integrity is lost' (HSE HSG39). Never make it, or a high-head pump body, from 3D-printed plastic; keep printed rams as low-head demonstrations. 4) Anchor everything: each beat is a shock load and bends in the drive pipe create strong fluctuating sideways forces that can make it 'break loose' (Practical Action); bolt the pump to concrete or heavy rocks (Clemson). 5) Trapped pressure: with the delivery valve shut the ram pumps up to its maximum pressure and stops (Clemson), so the delivery side can stay pressurised; close the supply and open a valve to let the pressure off before undoing fittings ⚑ [uncertain: advice inferred from Clemson and HSE HSG39]. 6) Starting it means pushing the waste valve down by hand while it slams shut; use a rod on larger pumps (Clemson) and keep fingers out of the closing gap ⚑ [uncertain: pinch risk inferred]. 7) Stream sites: take care around flowing water and in floods, and treat stream water before drinking it (Warwick DTU TR13 notes water often needs cleaning for domestic use). *(⚑ parts need confirming)*
- **common_failures**: 1) Won't start: the waste valve is too small, spring-loaded or too light (a PVC check valve), the fall is too small, air hasn't been purged (push the valve 20-50 times), or a flexible hose was used as the drive pipe (Clemson). 2) Pumps a few cycles and stops: the drive pipe is too long or too short, or the delivery valve wasn't closed during start-up (Clemson); cycling also stops from poor waste-valve adjustment or too little source flow (Wikipedia). 3) Pulses very hard then stops: no inner tube or a leaking air chamber, so it has become waterlogged (Clemson; Practical Action). 4) Delivers too little: waste valve badly adjusted, too little air in the chamber, or asking for more lift than the pump can give (Wikipedia). 5) Air in the drive pipe: the source level is less than a few inches above the drive-pipe inlet, or there are humps in the pipe (Wikipedia; Clemson). 6) Debris jamming the valves, or a twig holding the waste valve open: fit a large inlet screen (Clemson; Wikipedia). 7) Worn valves after months of sandy water (Clemson). 8) Frost damage, and flood or storm damage (Wikipedia; Clemson). 9) Snifter hole wrongly sized: if the ram becomes waterlogged the hole needs to be slightly larger, and finding the right size is trial and error; a cotter pin in the hole limits the water and pressure lost through it (Clemson). Inner tubes and bladders used instead can fatigue and slowly lose air through their walls (Warwick DTU TR13). 10) Testing with a garden hose pushed into the drive pipe, which stops the waste valve opening (Clemson).
- **related**: 
  - Check valve (one-way valve): a ram pump is two self-acting valves (a waste valve and a delivery check valve) plus an air chamber
  - Air tank and hydraulic accumulator: the ram's air chamber is a small air-cushion accumulator that smooths the delivery and absorbs shocks (Wikipedia; Practical Action)
  - Diaphragm pump, gear pump, centrifugal pump: powered pumps for when there is no falling water to drive a ram
  - Float valve (ballcock): keeps a trough topped up from a pressurised supply, but must not be used on a ram's delivery line (Clemson)
  - Automatic siphon (bell siphon): another no-power water device, which empties a tank instead of lifting water
  - Tesla valve and other no-moving-parts devices: some rams, such as Priestly's 1890 ram, worked with no moving parts (Wikipedia)
  - Pulser pump: a relative that combines a trompe with an airlift pump (Wikipedia 'Hydraulic ram', see also)
  - Boost converter: listed by Wikipedia as the electronic analogue of the hydraulic ram (the current in a coil plays the part of the moving water) (Wikipedia 'Hydraulic ram', see also)
  - Syringe hydraulics: the other basic way of trading distance for force with water, using a small and a large piston

### Pictures, videos and models

- **links**: 
  - [Hydraulic_Ram.gif (originally by Gutza, with later corrections; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_Ram.gif): Animated cutaway of a ram pump cycling: drive pipe, waste valve, delivery check valve, pressure vessel and delivery pipe *(licence: CC BY-SA 3.0 or GFDL)*
  - [Homemade Hydraulic Ram Pump for Livestock Water (W. Bryan Smith, Clemson Extension, LGP 1017; PDF copy hosted by SuSanA)](https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf): Step-by-step illustrated cycle (figures 2-6), photos of a working 3/4-inch PVC ram, a typical installation, and labelled schematics of two home-made designs *(licence: link only (Clemson University publication))*
  - [Hydraulic_ram_Kajny.webm (Popik; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_ram_Kajny.webm): Video of a working hydraulic ram in Kajny, Poland *(licence: CC BY-SA 4.0)*
  - [Ram_Pump_(Vogn_2011)_ubt.ogv (Tomasz Sienicki; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ram_Pump_(Vogn_2011)_ubt.ogv): Video of a ram pump running in Vogn, northern Denmark *(licence: CC BY 3.0 or GFDL)*
  - [507 Mechanical Movements, no. 444: Montgolfier's hydraulic ram](https://507movements.com/mm_444.html): Animated and original 1868 drawing of Montgolfier's ram with its two valves and globe-shaped air chamber throwing a jet of water *(licence: book public domain; website animation link only)*
- **make_it_yourself**: 
  - [Hydraulic Ram Water Pump - WORKING (hopping3d, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/289108-hydraulic-ram-water-pump-working): Fully printed working ram pump with PLA body, 95A TPU seals and valves, garden-hose threads, an adjustable weighted waste valve and a soda-bottle air chamber; can be set up to self-start *(licence: CC BY)*
  - [Hydraulic Ram Water Pump - WORKING (hopping3d, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:5530720): The same printed ram pump design posted on Thingiverse, with the same print settings and bill of materials *(licence: ⚑ [uncertain: licence not shown in the page metadata])*
  - [Ram Pump (k1n3k, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/349980-ram-pump): Printed ram pump with Viton-ball check valves and a soda-bottle air chamber; with about 2 ft of fall and a 20 ft polyethylene drive pipe it lifted about 20 gallons a day 20 ft uphill; resin printing suggested for the valve seats *(licence: Creative Commons Public Domain)*
  - [Homemade Hydraulic Ram Pump for Livestock Water (Clemson Extension LGP 1017)](https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf): Plans, parts lists, sizing tables, start-up, tuning and troubleshooting for two home-made rams built from PVC fittings and brass check valves (about $150-200) *(licence: link only)*
  - [DIY Ram Pump Obeys The Laws Of Physics (Hackaday, 2017)](https://hackaday.com/2017/06/07/diy-ram-pump-obeys-the-laws-of-physics/): Article and video of a ram built from PVC pipe, brass check valves and a soda-bottle air chamber, with a note that a printed bottle adapter could replace the hacked cap *(licence: link only)*
  - [Ram Water Pump (RamboMaker, Thingiverse) (page is JavaScript-only; description read from the page's metadata)](https://www.thingiverse.com/thing:2762294): Printable demonstration model for learning how the mechanism works; its designer says it has not been tested pumping water *(licence: ⚑ [uncertain: licence not shown in the page metadata])* *(⚑ parts need confirming)*
- **diagram_idea**: A hillside cross-section in three frames: (1) water runs down a long straight drive pipe and gushes out of the open waste valve; (2) the waste valve slams shut, a red pressure wave forms, the delivery valve pops open and water squeezes the air bubble in the chamber; (3) the compressed air pushes water up a thin pipe to a tank high on the hill while the waste valve drops open again, with a label showing 'lots of water falling a little' versus 'a little water rising a lot'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hydraulic_ram
  - https://en.wikipedia.org/wiki/Hydraulic_shock
  - https://commons.wikimedia.org/wiki/File:Hydraulic_Ram.gif
  - https://commons.wikimedia.org/wiki/File:Hydraulic_ram_Kajny.webm
  - https://commons.wikimedia.org/wiki/File:Ram_Pump_(Vogn_2011)_ubt.ogv
  - https://commons.wikimedia.org/wiki/File:DSCN3606-hydraulic-ram.JPG
  - https://sswm.info/sites/default/files/reference_attachments/PRACTICAL%20ACTION%204000%20Hydraulic%20Ram%20Pumps.pdf
  - https://www.susana.org/_resources/documents/default/3-4259-7-1619180800.pdf
  - https://open.clemson.edu/livestock/3/
  - https://warwick.ac.uk/fac/sci/eng/research/grouplist/structural/dtu/pubs/tr/lift/rptr13/tr13.pdf
  - https://bdd.pseau.org/outils/ouvrages/acf_gravity_fed_system_in_rural_areas_6_hydraulic_ram_pump_systems_2009.pdf
  - https://507movements.com/mm_444.html
  - https://hackaday.com/2017/06/07/diy-ram-pump-obeys-the-laws-of-physics/
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/289108-hydraulic-ram-water-pump-working
  - https://www.printables.com/model/349980-ram-pump
  - https://www.thingiverse.com/thing:5530720
  - https://www.thingiverse.com/thing:2762294

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."*
- **motion_out**: straight push or pull ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."*
- **shaft_layout**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Flow of water falling a small height (supply head or 'fall') -> a smaller flow lifted high..."*
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: medium ⚑ *needs confirming (best guess): no light/medium/heavy band in `load`; defaulted to medium*
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** make_it_yourself, making_tips_3d_printing, safety_notes

## 321 Air bearing and air caster (air-cushion bearing)

*hydraulics, pneumatics & vacuum.* A pad that floats on a thin film of air blown out through small holes, so a part slides with almost no friction, as on an air-hockey table

### What it is

- **plain_name**: A flat pad, or a ring-shaped rubber bag, that blows a very thin layer of air out underneath itself, so the pad and whatever sits on it float a hair's breadth above a smooth surface and glide with almost no friction, like the puck on an air-hockey table
- **term**: Air bearing (aerostatic bearing) and air caster (air-cushion load mover)
- **aliases**: 
  - aerostatic bearing, gas bearing, gas-lubricated bearing, externally pressurised air bearing (Wikipedia 'Air bearing'; Slocum)
  - aerodynamic (self-acting) air bearing: a version that makes its own air film from fast motion instead of a compressor (Wikipedia)
  - porous air bearing (porous carbon or graphite face), orifice air bearing (drilled holes or jewel nozzles), flat air pad, air bushing, air spindle (PI Nelson Air; IBS Precision Engineering)
  - air caster, air skate, air pad, air cushion, air film mover; originally called an 'air bearing' (AeroGo white paper; Wikipedia 'Air caster')
  - Aero-Caster and Gapmaster (AeroGo brands), Airfloat (brand) (AeroGo; Wikipedia)
  - air table, air track, air-hockey table (low-pressure versions for pucks and gliders) (Wikipedia 'Air hockey', 'Air track')
  - air-cushion vehicle (hovercraft): the vehicle-sized relative (Science Buddies)
- **family**: hydraulics, pneumatics & vacuum
- **other_families**: sliding, telescoping & linear motion, hinges & pivots
- **one_liner**: A bearing with no contact: compressed air is fed through tiny holes or a porous face into a gap a few thousandths of a millimetre thick (air bearings) or under a flexible ring-shaped bag (air casters), and the pressure of the escaping air carries the load, so parts slide or turn with no stick-slip and no wear, and tonnes can be pushed across a smooth floor by hand.
- **complexity**: A few parts. Air bearing: a pad or bushing whose face is either porous (carbon, graphite, bronze) or fed by small holes with grooves, an internal plenum (air chamber), an air fitting, a very flat or round guide surface (granite, glass, ground or lapped metal), and a preload (weight, vacuum area, magnet or an opposing pad) (Wikipedia; PI Nelson Air; Slocum). Air caster: a ring-shaped (torus) airbag under a load plate, an air supply hose and a control valve (Wikipedia 'Air caster'). Toy versions: an air-hockey puck on a table drilled with tiny holes and fed by a fan, or a CD, bottle cap and balloon (Wikipedia 'Air hockey'; Science Buddies).
- **how_it_works**: Compressed air flows through a restriction (small holes or a porous face) into the narrow gap under the pad and leaks out at the edges; the pressure in the gap pushes the pad up, so the two surfaces never touch (Wikipedia; Slocum). The design is self-regulating: if extra load squeezes the gap, less air can escape (the gap's resistance to flow rises roughly with the cube of the gap), so the pressure under the pad rises and pushes back, which gives the bearing its stiffness (Slocum; IBS). An air caster first inflates its ring-shaped bag until it seals against the floor, then air fills the space inside the ring and lifts the load until it escapes under the bag's lip, riding on a film less than a millimetre thick (Wikipedia 'Air caster'). An air-hockey table is the same idea turned over: the table blows air up through many tiny holes and the puck floats (Wikipedia 'Air hockey'; Slocum).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets a part slide in any direction across a flat surface (flat pads, air casters, air-hockey pucks), along a rail (linear air bearings) or spin (air bushings and spindles) with almost zero friction (Wikipedia; PI Nelson Air)
  - line parts up exactly: in precision machines it guides motion with no play, stick-slip or wear, so positions repeat to a micrometre or two (Wikipedia: chip-making wire bonders need 1-2 um repeatability; PI Nelson Air)
  - hold or release using power (loosely): the load only floats while air is flowing; switch the air off and it settles onto its pads and stays put by friction (IBS Precision Engineering FAQ)
- **motion**: multiple: flat pads and air casters slide in any direction across a plane and can turn on the spot; linear air bearings slide along a rail; air bushings, journal bearings and spindles rotate (Wikipedia; PI Nelson Air). Travel is limited only by the size of the smooth surface, and the lift is tiny (micrometres for precision bearings, under a millimetre for air casters) (IBS; Wikipedia 'Air caster')
- **degrees_of_freedom**: 3 for a single flat pad or air caster on a floor (slide in two directions and turn about a vertical axis), with height held by the air film. A pad supports a force but not a tipping moment, so precision machines use about six sets of opposed pads on a carriage to leave just 1 degree of freedom (straight-line travel), or opposed radial and thrust pads to leave 1 (rotation) (Slocum)
- **special_behaviour**: 
  - self-aligning or self-centring: opposed pads centre a shaft or carriage, because the side whose gap shrinks builds higher pressure and pushes it back (Slocum; PI Nelson Air lists 'Self Centering' and 'Error Averaging'); the air film also averages out small surface errors (IBS)
  - fail-safe or breakaway (loosely): if the air supply fails, the bearing depressurises and the moving part slowly comes to a stop on its pad rather than running on (IBS FAQ); a porous graphite face resists scratching when this happens (IBS). The reverse is the danger: while floating, a load has almost no grip and drifts down any slope (AeroGo)
  - none of the locking behaviours: it does not lock or index; it only removes friction
- **holding_principle**: 
  - suction or air pressure: the pressure of the air film carries the load (load = area x supply pressure x efficiency) (IBS; PI Nelson Air); vacuum-preloaded pads also use suction over part of the face to pull the pad down and stiffen it (PI Nelson Air)
  - magnetic: magnet-preloaded pads are pulled towards an iron guide to keep the gap constant (PI Nelson Air; Wikipedia)
  - friction or clamping (force-fit): with the air off, the pad rests on the surface and friction holds it (IBS FAQ)
  - not a holding joint (it moves or passes on motion): its job is to let parts move, not to hold them together
- **input_output**: Not a motion converter. As a support: compressed air in -> lifting force out. Load capacity is roughly pad area x supply pressure x efficiency, with efficiency about 25-40% (Slocum), 'expect 30%' (PI Nelson Air) or about 50% for porous pads (IBS). Friction: essentially zero static and running friction (PI Nelson Air); an air caster needs only 5-25 lbf to push a 5,000 lb load, about 0.1-0.5% of its weight, against about 300 lbf on wheels (AeroGo). Back-drivable: yes, completely free in every direction it is not constrained. Shaft arrangement: not applicable.
- **power**: powered: needs a continuous supply of compressed air: precision pads typically run at 20-120 psi (PI Nelson Air) or 4-6 bar (IBS), and Slocum notes air bearings are typically kept below 10 atmospheres for safety; air-hockey tables and air tracks use large amounts of low-pressure air from a fan or blower (Wikipedia 'Air hockey'; 'Air track'). When the air is lost, the film collapses and the load settles gently onto the pad and stops (IBS FAQ); it does not stay floating
- **removability**: removable: precision pads bolt on through ball-pin (ball-stud) or stiff joint mounts (Wikipedia); air casters are simply slid under a load, inflated, used and taken out again (AeroGo; Wikipedia)
- **reuse_cycles**: effectively unlimited: there is no contact and so no wear; 'the durability of air bearings is unlimited if they are designed and calculated correctly' (Wikipedia)
- **tools_needed**: To use: an air compressor or blower, a filter and regulator, hoses and push-in fittings (IBS; PI Nelson Air). To mount precision pads: spanners or hex keys (Wikipedia: ball-pin mounts) ⚑ [uncertain]. DIY builds: a hand drill with 3D-printed drilling jigs, epoxy, a sheet of float glass as a flat reference, abrasives for flattening, and plaster of Paris (Hackaday 2024; Hackaday 2019); an M5 tap for a printed vortex pad's air fitting (Printables 1055797) *(⚑ parts need confirming)*
- **seal**: none: air leaks out of the edges all the time by design, so the film is not a seal (Slocum; PI Nelson Air). An air caster's flexible ring makes a near-seal with the floor only so that pressure can build under it (Wikipedia 'Air caster')
- **load**: light to very heavy, but mainly in one direction: a pad pushes; it can't pull or resist sideways shove or tipping unless opposed pads or a preload hold it (Slocum; PI Nelson Air). Precision pads carry about 50 N to 20 kN each (IBS); air casters move loads from 500 lb to over 5,000 tons (AeroGo) and press on the floor at only about 2-50 psi, against over 1,000 psi under rollers and wheels (AeroGo). For the same pad area, oil-fed (hydrostatic) bearings carry about five times more (PI Nelson Air)
- **adjustable**: yes: supply pressure and preload set the gap and stiffness (IBS; PI Nelson Air); ball-pin mounts let a pad tilt to sit flat on its guide (Wikipedia); for air casters, using more casters spreads the load and lowers the floor pressure (AeroGo)
- **play_and_precision**: none: no backlash and no stick-slip, so it repeats very well (linear repeatability about +/-10 microinches, PI Nelson Air; 1-2 um in wire bonders, Wikipedia). But it tolerates almost no misalignment or unevenness: gaps are about 5-50 um (Wikipedia), about 5 um for porous pads (IBS) or about 10 um (PI Nelson Air), so the guide surface must be flat and smooth to a fraction of that, and PI holds parts to +/-0.0001 in for gaps of about 0.0005 in. Air casters are far more forgiving: a film of 0.003-0.005 in (AeroGo) on a smooth, nearly level floor
- **access_needed**: one side only (blind): a flat pad or air caster simply sits on top of the surface it glides on, with the air hose connected to the pad; bearings with opposed pads need both sides of the rail or plate (Slocum; PI Nelson Air)
- **materials**: Pads: porous carbon or graphite, porous bronze or steel, or aluminium or steel with drilled orifices or jewel nozzles (PI Nelson Air; IBS). Guide surfaces: granite, glass and precisely ground metal (Hackaday 2019: granite reference plate; AeroGo: polished plate glass is the reference surface). Air casters: urethane or nylon bags (Airfloat). Floors for air casters: sealed steel-trowelled concrete, epoxy-coated concrete, steel or aluminium plate, varnished hardwood, vinyl, formica (AeroGo); broom-finished or porous floors don't work (Airfloat). DIY: stainless steel discs with a face of JB Weld epoxy cast against float glass and plaster of Paris as the flow restrictor (Hackaday 2024); EDM graphite electrodes in a 3D-printed plenum (Hackaday 2019); printed vortex pads in PLA or polycarbonate (Printables 1055797). Air-hockey pucks: polycarbonate (Wikipedia)
- **maker_difficulty**: easy for a toy (a balloon hovercraft or air-hockey puck: Science Buddies; Printables). Hard for a real precision air bearing: it needs surfaces flat to a few micrometres, clean dry compressed air and careful restrictor design, though makers have done it with float glass, epoxy replication and porous graphite (Hackaday 2024; Hackaday 2019). For moving heavy loads, buy commercial air casters and check the floor first (AeroGo; Airfloat)

### Making it

- **processes**: 
  - off-the-shelf part: porous and orifice air bearing pads, air bushings, air-bearing stages and spindles; air casters and air-caster rigging kits (PI Nelson Air; IBS; AeroGo)
  - 3D print (FDM): plenums (air chambers) and housings for graphite or epoxy pads, drilling and casting jigs, vortex pads, air-hockey pucks and tables, balloon hovercraft toys (Hackaday 2019; Hackaday 2024; Printables)
  - epoxy replication: casting the bearing face against float glass to copy its flatness (Hackaday 2024)
  - lapping or grinding: flattening graphite or metal faces against a reference plate with abrasives (Hackaday 2019; Printables 1055797)
  - CNC and laser drilling: commercial orifice and micro-nozzle pads (Wikipedia: laser-drilled micro-nozzles 0.02-0.06 mm)
- **print_in_place**: partly: toy versions print in one piece and only need a balloon (Printables 386417 and 437647). For working air bearings the printed part is usually a housing, plenum or jig, and the bearing face is a separate graphite insert, epoxy layer or lapped surface (Hackaday 2019; Hackaday 2024); a printed vortex pad works directly but needs its face lapped flat and a tapped air fitting (Printables 1055797)
- **making_tips_3d_printing**: 1) A bare printed face is far too rough and wavy for a precision air bearing, whose gap is only about 5-50 um (Wikipedia; IBS recommends a guide-surface finish of 0.4 um Ra or better). Use the print only as a holder: press a porous graphite slug, flattened on a granite plate, into a printed plenum (Hackaday 2019), or cast an epoxy face against float glass using printed jigs (Hackaday 2024; open-air-bearings repository). 2) If you do use a printed face, lap it flat: the designer of a printed vortex pad says lapping the face on glass with high-grit paper 'really amplifies the air bearing effect' (Printables 1055797). 3) Wall strength: that designer prints PLA with 4 walls or polycarbonate with 3 walls, holes facing down, no supports, and taps the air inlet M5 for push-in fittings; he warns 'this item can obviously explode', so choose material and settings with care and keep the pressure low (Printables 1055797). Never use a printed part to store compressed air (HSE HSG39: vessels of compressed air 'can explode violently once their integrity is lost'). 4) Restrictors: each pad needs a restriction between the air supply and the gap, otherwise the pressure won't rise when the gap closes and the pad has no stiffness (Slocum); DIY builders use plaster of Paris, porous graphite, or small drilled holes (typical orifices 0.004-0.015 in, PI Nelson Air). 5) Keep the volume of grooves and pockets on the face small: large 'dead volumes' cause self-excited vibration (Wikipedia). 6) The open-air-bearings project includes a simple Python simulator that predicts lift versus gap from an image of your groove pattern, to choose a design and preload before building (open-air-bearings README). 7) For toys and demos, print light: the balloon hovercraft prints with 20% infill or less and no supports (Printables 386417); test air-hockey pucks and hovercraft on a smooth table or floor (Science Buddies). 8) Filter the air: oil and water from a workshop compressor clog porous faces (PI Nelson Air; IBS).
- **off_the_shelf_parts**: Porous carbon flat round and rectangular air bearings, air bushings (porous bronze or carbon), orifice and jewel-nozzle air pads, vacuum-preloaded and magnet-preloaded air pads, ball-pin (ball-stud) mounts, air-bearing linear and rotary stages and spindles, granite surface plates and guide rails (PI Nelson Air; IBS; Wikipedia). Air casters, air skates and air-caster rigging kits with a control console, plus low-step 'gap-crossing' casters (AeroGo; Airfloat). Air preparation: filter (ISO 8573 class 3 or better recommended), coalescing oil filter, dryer and regulator, push-in fittings and tubing (IBS). Air-hockey tables, pucks and blowers; school air tracks and gliders (Wikipedia)
- **rules_of_thumb**: 
  - Load capacity is about pad area x supply pressure x efficiency: efficiency about 0.3 (PI Nelson Air: 'Force = 0.3 x Supply Pressure x Area'), 25-40% (Slocum), or about 50% for porous pads (IBS)
  - Gap (fly height): about 5-50 um for air bearings (Wikipedia), about 10 um (PI Nelson Air), about 5 um for porous pads, sized so the maximum load never squeezes it below about 3-5 um (IBS); 20-100 um for conveyor pads (IBS); 0.003-0.005 in for air casters (AeroGo)
  - Air use rises with the cube of the gap: a 5 cm porous pad carrying 34 kg needs 1.57 normal litres per minute at 5 um of lift but 25.18 at 10 um (IBS), so keep gaps small
  - Supply pressure: 20-120 psi for precision pads (PI Nelson Air), 4-6 bar for flat pads and bushings, 2 bar for conveyor pads (IBS); keep air bearings below about 10 atmospheres for safety (Slocum)
  - Air quality: clean, dry, oil-free air filtered to ISO 8573-1 class 3 ideally and class 4 at least (IBS); oil vapour clogs porous faces (PI Nelson Air)
  - Guide surface: smooth to about 0.4 um Ra or better (IBS); a single pad carries force but not moment, so use opposed pads or a preload (weight, vacuum or magnet), and about six pairs of pads to guide a carriage in a straight line (Slocum; PI Nelson Air). Opposed-pad preload doubles stiffness but roughly halves load capacity (PI Nelson Air)
  - Orifice-fed pads use holes about 0.004-0.015 in across (PI Nelson Air); conventional nozzles 0.1-0.5 mm, laser-drilled micro-nozzles 0.02-0.06 mm (Wikipedia)
  - Air-caster floors: smooth and non-porous (machine-trowelled concrete or better), cracks and expansion joints filled or covered, projections flush, and blind holes under about 10% of the caster diameter; slope no more than about 0.2% (1/4 in in 10 ft) for hand-pushed loads or 0.4% (1/2 in in 10 ft) for powered ones; sheet overlays up to 1/32 in thick can bridge poor floors (Airfloat)
  - Never clean a porous air bearing or its guide with the air turned off; clean with 70% isopropyl alcohol on a dry cloth, not ketones (IBS)

### When to use it

- **everyday_examples**: 
  - An air-hockey puck floating on air blown up through tiny holes in the table (Wikipedia 'Air hockey'; Slocum)
  - The air track and gliders used in school physics labs to show motion without friction (Wikipedia 'Air track')
  - A hovercraft, or the CD-and-balloon toy hovercraft made in science classes (Science Buddies)
  - Heavy machines and loads moved across factory floors by a few people on air casters (AeroGo; Wikipedia 'Air caster')
- **when_to_use**: Use an air bearing when you need motion with no friction, no stick-slip, no wear and no oil: precision measuring and positioning stages, optics and wafer handling, fast clean spindles, low-friction test rigs such as satellite attitude simulators, and gravity-offloading rigs for unfolding solar panels (Wikipedia; PI Nelson Air; IBS). Use air casters to move very heavy or delicate loads short distances over a smooth floor by hand, with precise positioning in any direction and low floor pressure (AeroGo). Use air-cushion tables and pucks for games, demonstrations and physics experiments, where a fan supplies low-pressure air (Wikipedia 'Air hockey', 'Air track').
- **when_not_to_use**: Avoid it when there is no steady supply of clean, dry compressed air, or the surfaces are dusty, oily, rough or not flat: the gap is only micrometres, so dirt and unevenness make it touch (Wikipedia; IBS). Avoid it for high loads in a small space or where you need damping: oil-fed hydrostatic bearings carry about five times more and damp better (PI Nelson Air; Slocum). For everyday maker machines, a plain bushing, ball bearing or linear guide is cheaper and needs no compressor (see Linear guides; Plain pivot and rolling bearing). Don't use air casters on sloping, cracked, porous or broom-finished floors without overlays, or where the load can't be restrained (Airfloat; AeroGo); use roller skates, wheels or rollers instead. For high-speed air spindles, buy rather than build: they can whirl unstably unless carefully designed (Wikipedia: 'half-speed whirl').
- **environment_limits**: Dirt and dust: small clearances make gas bearings sensitive to particles in the environment and in the air supply (Wikipedia). Air quality: water, oil, dirt and rust in compressed air shorten life and clog porous faces (IBS; PI Nelson Air). Heat: friction heating is negligible below surface speeds of about 30 m/s (IBS); special versions work above 400 C (Wikipedia). Floors: cracks, expansion joints, porous or textured surfaces let the air escape so casters can't lift (Wikipedia 'Air caster'; Airfloat). Slopes: floating loads drift downhill (AeroGo; Airfloat). Printed parts: plastic plenums soften with heat and creep under steady preload ⚑ [uncertain: general plastics behaviour, not tested for air bearings]. *(⚑ parts need confirming)*
- **safety_notes**: 1) Compressed air: it can enter body openings 'causing severe and often fatal injuries', can penetrate the skin at high pressure, and particles in an air jet can damage the eyes; damaged hoses can rupture and 'whip' and 'snake' dangerously (HSE HSG39). Wear eye protection and never point an air line at anyone. 2) Runaway loads: a load on air casters has almost no friction, so on any slope it moves downhill unless it is secured; AeroGo says 'the load must be secured; or you will have an immediate safety problem moving downhill'. Plan stops and restraints, and push slowly. 3) Crush risk: when the air is switched off the load drops onto its pads, so keep hands and feet out from under it ⚑ [uncertain: inferred from how air casters work]. 4) Bursting printed parts: the designer of a printed air pad warns it 'can obviously explode' (Printables 1055797); keep pressures low, never store compressed air in a printed part, and remember Slocum's note that air bearings are kept below about 10 atmospheres 'for safety reasons'. 5) Cleaning solvents: isopropyl alcohol is flammable ⚑ [uncertain: general chemical hazard]. 6) Toys: Science Buddies advises adult help and care when using super glue to build a CD hovercraft. *(⚑ parts need confirming)*
- **common_failures**: 1) Touching down and scraping: the load is too high, the pressure too low, the gap too small, or there is dirt or a bump on the guide; check the lift-versus-load curve and keep at least 3-5 um of gap (IBS; Wikipedia). 2) Self-excited vibration ('air hammer'): caused by large dead volumes in pockets and grooves, too large a gap or a poorly chosen restrictor; use many small holes or porous faces and shallow pockets (Wikipedia). 3) Half-speed whirl in fast air spindles (Wikipedia). 4) Clogged orifices or porous faces from dirty or oily air; a clogged porous bearing is much harder to clear than a clogged orifice (PI Nelson Air). 5) Tipping or wobbling: a single pad has no tilt stiffness, so it rocks unless preloaded or opposed (Slocum; PI Nelson Air; Wikipedia notes very poor tilt stiffness for single-nozzle pads). 6) Air casters that won't float: floor too rough, porous or cracked, or the air supply too small (Wikipedia 'Air caster'; AeroGo: hairline cracks only matter when the air supply is marginal). 7) Air casters drifting on an uneven floor (Airfloat; AeroGo). 8) Scratched faces from cleaning with the air off (IBS). 9) DIY pads: faces not flat enough; make them against float glass or a granite plate (Hackaday 2024; Hackaday 2019).
- **related**: 
  - Bernoulli gripper (non-contact air gripper): uses the same thin film of escaping air, but to hold a part close to a pad rather than float a load on it
  - Linear guides (bushings, wheels or carriages on rails): the usual contact bearings for straight-line motion; cheaper and need no air, but have friction and wear
  - Plain pivot and rolling bearing: the everyday contact bearings for turning parts
  - Knife-edge and jewel pivots: another way to get very low friction, but only for small rocking or turning motions and light loads
  - Turntable bearing (lazy-Susan bearing): a rolling bearing for heavy turning platforms, where an air bearing would need a flat floor and an air supply
  - Parallel leaf-spring flexure (linear flexure stage): frictionless and play-free like an air bearing, but only for very short travel and with no air needed
  - Hydrostatic (oil-fed) bearing: the same principle with pressurised oil, which carries about five times the load and damps better but needs an oil return (PI Nelson Air; Slocum)
  - Hovercraft and air-cushion vehicles: the same air-cushion idea on a vehicle scale, with a flexible skirt to trap the air (Science Buddies)
  - Vacuum hold-down table: also uses an air supply through a perforated surface, but sucks the work down instead of floating it

### Pictures, videos and models

- **links**: 
  - [Aircaster.gif (Anynobody; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Aircaster.gif): Animation of an air caster: compressed air fills the ring-shaped bag, then the space inside it, and escapes as a thin film that lifts the load *(licence: CC BY-SA 3.0, GFDL or CC BY 2.5 (multi-licensed))*
  - [Nozzle-air_bearing_with_chambers_and_channels.jpg (Aerobearing; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Nozzle-air_bearing_with_chambers_and_channels.jpg): A nozzle-fed (orifice) air bearing with chambers and channels that spread the air across its face, as used in the Wikipedia article *(licence: CC BY-SA 3.0)*
  - [A build guide for DIY Air-Bearing Pads [4K] (Diffraction Limited, YouTube)](https://www.youtube.com/watch?v=XmUgO-BsIdA): Video of making flat air-bearing pads with 3D-printed jigs, steel discs, epoxy cast on float glass and plaster restrictors, and a demo of them floating (described in Hackaday 2024) *(licence: link only (YouTube))*
  - [Used EDM Electrodes Repurposed As Air Bearings For Precision Machine Tools (Hackaday, 2019)](https://hackaday.com/2019/11/18/used-edm-electrodes-repurposed-as-air-bearings-for-precision-machine-tools/): Article and video of porous-graphite air bearing pucks in 3D-printed plenums, plus a rotary air bearing *(licence: link only)*
  - [How Does a Hovercraft Hover? (Science Buddies)](https://www.sciencebuddies.org/stem-activities/hovercraft): Step-by-step photos of a CD, bottle-cap and balloon hovercraft that floats on a thin cushion of air, with an explanation of air-cushion friction *(licence: link only)*
- **make_it_yourself**: 
  - [Open Air Bearings (0x23, GitHub repository github.com/0x23/open-air-bearings; README read via raw.githubusercontent.com because github.com pages block automated access)](https://raw.githubusercontent.com/0x23/open-air-bearings/main/README.md): CAD files for the 3D-printed tools used to build steel-and-epoxy flat air-bearing pads, a DIY glass pad design, and a Python simulator that plots lift versus gap and pressure maps from an image of the groove pattern *(licence: MIT)*
  - [How Does a Hovercraft Hover? (Science Buddies)](https://www.sciencebuddies.org/stem-activities/hovercraft): Classroom activity: build a CD-and-balloon hovercraft and time how long it floats with different amounts of air *(licence: link only)*
  - [Air Bearing Vortex Cup (emb26, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1055797-air-bearing-vortex-cup): Printed compressed-air pad with an M5-tapped inlet for SMC push-in fittings that works as a vortex non-contact gripper or, on a smooth surface, as an air bearing; PLA with 4 walls or PC with 3; lap the face on glass *(licence: CC BY)*
  - [Levitating Air-Hockey disc + Paddles (KIO-Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/437647-levitating-air-hockey-disc-paddles): Balloon-powered printed air-hockey puck that floats on its own air cushion, with paddles; PLA, no supports *(licence: CC BY-NC)*
  - [Hovercraft V2 - balloon powered (uhltimate, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/386417-hovercraft-v2-balloon-powered): Two-part printed balloon hovercraft with a screw-in balloon holder; infill 20% or less, no supports *(licence: CC BY)*
  - [Mini Air Hockey Table (Cocoa Press, designed by Bryan Vines; Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1247872-mini-air-hockey-table): Printable mini air-hockey table kit with brackets for fans and batteries that blow the air cushion *(licence: CC BY-NC)*
- **diagram_idea**: A side-on cut-away of a flat pad over a granite plate, with arrows showing air entering a central hole, spreading through a thin gap (labelled 'thinner than a hair') and escaping at the edges, a pressure 'hill' drawn under the pad, and a second panel showing the gap squeezed by extra weight with the pressure hill growing taller to push back; a small inset shows an air caster's ring-shaped bag lifting a crate.
- **sources**: 
  - https://en.wikipedia.org/wiki/Air_bearing
  - https://en.wikipedia.org/wiki/Air_caster
  - https://en.wikipedia.org/wiki/Air_hockey
  - https://en.wikipedia.org/wiki/Air_track
  - https://commons.wikimedia.org/wiki/File:Aircaster.gif
  - https://commons.wikimedia.org/wiki/File:Nozzle-air_bearing_with_chambers_and_channels.jpg
  - https://pergatory.mit.edu/resources/FUNdaMENTALS.html
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%2010.PDF
  - https://www.nelsonair.com/NA_primer.htm
  - https://www.ibspe.com/air-bearings/faq
  - https://www.ibspe.com/air-bearings/operation-cleaning-and-care
  - https://aerogo.com/wp-content/uploads/2020/03/Aero-Casters-can-work-perfectly-on-imperfect-floors.pdf
  - https://airfloat.com/air-caster-flooring-requirements/
  - https://hackaday.com/2024/10/20/diy-air-bearings-no-machining-required/
  - https://hackaday.com/2019/11/18/used-edm-electrodes-repurposed-as-air-bearings-for-precision-machine-tools/
  - https://raw.githubusercontent.com/0x23/open-air-bearings/main/README.md
  - https://raw.githubusercontent.com/0x23/open-air-bearings/main/LICENSE
  - https://www.youtube.com/watch?v=XmUgO-BsIdA
  - https://www.sciencebuddies.org/stem-activities/hovercraft
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1055797-air-bearing-vortex-cup
  - https://www.printables.com/model/437647-levitating-air-hockey-disc-paddles
  - https://www.printables.com/model/386417-hovercraft-v2-balloon-powered
  - https://www.printables.com/model/1247872-mini-air-hockey-table

### Finder tags

- **connects**: not applicable
- **power_source**: compressed air
- **power_loss**: not applicable ⚑ *needs confirming (best guess): uses power, but `power` does not say what happens when it is lost*
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…unt precision pads: spanners or hex keys (Wikipedia: ball-pin mounts) [uncertain]. DIY builds: a hand drill wi…"*
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **powered_does**: grip or lift
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes, tools_needed

## 322 Centrifugal pump (impeller pump)

*hydraulics, pneumatics & vacuum.* A spinning impeller flings water outwards into a spiral casing, giving lots of flow at low pressure; the usual fountain and aquarium pump, which must be full of water (primed) to start

*Also covers:* Unlike the positive-displacement pumps (gear, diaphragm and peristaltic), it gives flow rather than pressure

### What it is

- **plain_name**: A pump with a little spinning wheel of curved blades inside a snail-shaped case: water comes in at the middle, gets flung outwards by the spinning blades and is squeezed out of a pipe at the side. It moves lots of water but can't push it very high, and it only works when it is already full of water
- **term**: Centrifugal pump (impeller pump; a radial-flow rotodynamic pump)
- **aliases**: 
  - impeller pump
  - rotodynamic pump, dynamic pump or velocity pump (the wider class it belongs to; Wikipedia 'Pump')
  - radial-flow pump (Wikipedia 'Pump')
  - volute pump (when the casing is a spiral volute rather than guide vanes; Wikipedia 'Centrifugal pump')
  - submersible pump, fountain pump, pond pump, aquarium pump (the small sealed pumps that sit under water; Atlantic Water Gardens manual; FAO 2014)
  - magnetic drive pump, mag-drive pump, sealless or canned pump (motor drives the impeller through the sealed case with magnets; Wikipedia 'Centrifugal pump')
  - circulating pump or circulator (pumps hot water round central-heating systems; Wikipedia 'Centrifugal pump' photo caption)
  - multistage centrifugal pump (several impellers in a row for more pressure; Wikipedia)
  - self-priming centrifugal pump (garden pumps with a separating chamber that can clear air from the suction pipe; Wikipedia)
  - mini DC submersible water pump, 3 V water pump (Adafruit), brushless DC water pump (Topsflo)
  - drill pump, drill-powered water pump (printed pumps turned by a cordless drill; Printables)
  - centrifugal fan or blower (the same idea for air, as in a vacuum cleaner; Wikipedia 'Centrifugal fan')
  - Kreiselpumpe (German)
- **family**: hydraulics, pneumatics & vacuum
- **one_liner**: A motor spins a wheel of curved blades (the impeller) inside a spiral casing (the volute); water entering at the centre is whirled outwards, gains speed and pressure, and leaves through the outlet, giving a large, smooth flow at fairly low pressure, as long as the pump is already full of water (Wikipedia 'Centrifugal pump').
- **complexity**: A small assembly that acts as one unit: an impeller (a hub with vanes and a central inlet called the eye), a casing with a spiral volute or a ring of guide vanes (diffuser), a shaft with bearings or bushings, a shaft seal (or a magnetic drive so no shaft passes through the wall), and a motor (Wikipedia 'Centrifugal pump', 'Impeller'). A typical fountain pump has a pre-filter, a threaded inlet cover, a flow adjuster, and an impeller assembly of six small parts: the impeller and magnetic rotor in one piece, a ceramic shaft, rubber bushings and a friction washer, all inside a sealed rotor chamber in the motor body (Atlantic Water Gardens Fountain Series manual). A printed drill pump is a housing, lid, impeller, shaft sleeve, inlet and outlet couplers and TPU gaskets, held together with nine M4 bolts and an M6 bolt as the shaft (Printables 444761).
- **how_it_works**: Water enters along the shaft into the eye at the centre of the spinning impeller, is caught between the vanes and is whirled outwards, so it leaves the rim fast and under some pressure; the widening spiral casing (volute) or diffuser then slows it down, which turns that speed into more pressure before it leaves the outlet at right angles to the shaft (Wikipedia 'Centrifugal pump', 'Pump', 'Volute (pump)'; The Engineering Mindset). As water is thrown out of the eye, the low pressure left behind draws more water in through the inlet (The Engineering Mindset). Because the impeller only 'throws' the water rather than trapping and pushing a fixed amount, the flow falls as the outlet gets higher or more restricted: at the pump's maximum height (shut-off head) the flow drops to nothing and the impeller just churns (Wikipedia 'Pump'; waterfountainonline.com). Air is far lighter than water, so an air-filled impeller can't make enough suction to pull water up; the casing must be filled with water (primed) first, which is why most sit below the water level or under water (Wikipedia 'Centrifugal pump', Priming; Printables 444761).

### Finder attributes

- **job**: 
  - change the kind of motion: turns the spin of a motor or drill into a steady flow of water through a pipe (Wikipedia 'Centrifugal pump')
  - seal it, or pass cables or fluid through: moves water round fountains, ponds, aquariums, aquaponic and hydroponic systems, coolers and drains, with a sealed or magnetically driven motor so the water stays in the pipes (FAO 2014; Wikipedia 'Centrifugal pump', Magnetically coupled pumps)
- **motion**: rotate: the impeller turns continuously in one set direction, from a few hundred to a few thousand turns a minute (a printed pump was tested at 1800 rpm on a drill; Hackaday 2021); the water moves, the casing stays still
- **degrees_of_freedom**: 1: only the impeller and shaft turn relative to the casing
- **special_behaviour**: 
  - motion conversion: the turning impeller becomes a smooth, continuous flow of water, with no pulses and no valves (Wikipedia 'Centrifugal pump', 'Pump')
  - torque-limiting (slips or clicks at a set force/torque): if the outlet is blocked the water simply slips round inside the casing, so pressure tops out at the pump's shut-off head instead of rising until something bursts, as it would with a gear, piston or diaphragm pump; this is safe only for short periods, because the trapped water heats up (Wikipedia 'Pump')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it moves water rather than holding parts together
  - shape (the parts interlock; form-fit): the impeller fits its drive shaft by a spline, key or thread (Wikipedia 'Impeller'), or by a hex recess on a bolt in printed pumps (Printables 201592)
  - magnetic: in magnetic-drive fountain and aquarium pumps the motor turns a magnet rotor through the sealed case (Wikipedia 'Centrifugal pump'; Atlantic Water Gardens manual)
  - friction or clamping (force-fit): casing halves are bolted together over gaskets (Printables 444761; Hackaday 2021)
- **input_output**: Continuous rotation -> continuous, smooth flow of liquid. Flow, pressure and power change with speed: flow rises in step with speed, pressure (head) with the square of speed and power with the cube, so running 20% slower needs only about half the power (affinity laws, Wikipedia 'Affinity laws'; the last figure is our own arithmetic from the cube law). Flow drops as the lift rises: a 33 W fountain pump gives 525 US gal/h (about 2000 L/h) at zero lift, 430 at 2.5 ft, 300 at 5 ft and 75 at 7.5 ft (about 2.3 m) (Atlantic Water Gardens FP500 flow chart). FAO's rough guide is about 40 L of water per hour for every watt for submersible pumps, with 2000 L/h at 1.5 m lift costing 25-50 W (FAO 2014). A printed PLA pump turned by a drill at 1800 rpm gave 13 L/min, or lifted water at most 1.2 m (Hackaday 2021). Efficiency: highest at the middle of a pump's range (best efficiency point) and lower either side, falling over time as wear opens the clearances (Wikipedia 'Pump'); for small hobby pumps no measured figure was found ⚑ [uncertain]. Arrangement: water enters along the shaft and leaves at right angles to it (Wikipedia 'Pump'). Back-drivable: it does not hold back the water; when the pump stops, water can run back through it and siphon away unless a check valve is fitted (Wikipedia 'Centrifugal pump'); the same machine run in reverse, turning water pressure into rotation, is a water turbine (Wikipedia 'Centrifugal pump'). Reversing the motor does not reverse the flow: 'Reversing the polarity does not turn it into a suction device, it will only pump water!' (Adafruit 4547). *(⚑ parts need confirming)*
- **power**: powered: needs a motor (a mains submersible pump, a 3-12 V DC motor or brushless DC pump, a 775-size DC motor, or a cordless drill) (Atlantic Water Gardens manual; Adafruit 4547; The Engineering Mindset DIY pump; Printables 444761). When power is lost the flow stops at once; water can drain back through the pump and siphon out of a tank unless the pipework has a check valve or an anti-siphon hole, and a pump above the water may lose its prime (Wikipedia 'Centrifugal pump'; FAO 2014)
- **removability**: removable: a submersible pump just unplugs from its tube and lifts out; the inlet cover twists off by hand to take out the impeller for cleaning (Atlantic Water Gardens manual). Printed pumps come apart by undoing the casing bolts (Printables 444761)
- **reuse_cycles**: many times: the impeller assembly is meant to be removed and cleaned regularly (Atlantic Water Gardens manual: monthly inspection); the pump itself lasts about 3-5 years for good-quality submersible pumps (FAO 2014)
- **tools_needed**: none to use a submersible pump: push the tube on and drop it in the water (Adafruit 4547; Atlantic Water Gardens manual). For a printed pump: hex keys or spanners for M4 bolts and nuts (nuts are dropped in during a print pause), adhesive for the shaft sleeve, silicone grease for sealing, and a drill or motor to drive it (Printables 444761); a soldering iron and a motor driver or PWM controller for DC pumps (Adafruit 4547; Printables 201592)
- **seal**: watertight: the casing joints are sealed with gaskets or O-rings (printed pumps use TPU gaskets and silicone grease; Printables 444761; Atlantic Water Gardens manual: intake O-ring). Where the shaft passes through the casing it needs a stuffing box, mechanical seal or close-fitting throttle bushing, or a magnetic drive that leaves the case unbroken so it cannot leak along the shaft (Wikipedia 'Centrifugal pump'). A printed pump with no shaft seal 'does leak a bit' (Hackaday 2021). The pressures are low, so it is not a pressure-holding seal
- **load**: light for hobby pumps: lots of flow but low pressure, typically lifting water from about 1 m (printed pump, Hackaday 2021) to a few metres (fountain pump, Atlantic Water Gardens manual). Big industrial multistage pumps reach very high pressures (a boiler feed pump gives 150 L/s at 21 MPa; Wikipedia), but 'other pump types may be more suitable for high pressure applications' (Wikipedia 'Centrifugal pump'). The impeller sees mostly twisting load from the motor; side loads on the shaft rise when the pump runs far from its design flow (Wikipedia 'Volute (pump)')
- **adjustable**: yes: flow can be turned down with a flow adjuster or valve on the outlet (Atlantic Water Gardens manual), by slowing a DC pump with PWM (Adafruit 4547; Printables 201592), or permanently by trimming the impeller diameter (Wikipedia 'Affinity laws'). Changing the impeller shape changes the flow: makers found short and straight-bladed impellers moved more water than tall or curved ones on their motors (Printables 201592)
- **play_and_precision**: Not a metering pump: the amount delivered changes with the lift, pipe size and fittings, so it can't measure doses (Wikipedia 'Pump'; FAO 2014). A close gap between the vanes and the casing stops water slipping back, and efficiency falls as wear opens this gap (Wikipedia 'Impeller'); a print-in-place pump used a 0.4 mm gap (twice the layer height) (Hackaday.io 'Can you print-in-place a water pump'). Running far from the design flow causes uneven side thrust and vibration, shortening bearing and seal life (Wikipedia 'Volute (pump)')
- **access_needed**: not applicable: it is a self-contained unit; a submersible pump only needs reaching for its inlet filter and impeller cover
- **materials**: Fountain and aquarium pumps: plastic body, a magnet rotor with the impeller, a ceramic shaft and rubber bushings (Atlantic Water Gardens manual). Industrial impellers are often cast, sometimes in one piece with the shaft (Wikipedia 'Impeller'). Printed pumps: PLA housings and impeller with TPU gaskets and ball bearings (Hackaday 2021; Printables 444761); one PLA pump worked under a house in dirty water for nearly a year (Printables 201592); PLA and BVOH soluble support for a print-in-place pump (Hackaday.io). A DIY pump used marine plywood, acrylic and stainless threaded rod (The Engineering Mindset DIY pump). Liquids: fountain pumps are for clean water only, not salt water, sewage, oils, food waste, or flammable or corrosive liquids (Atlantic Water Gardens manual); special centrifugal pumps handle sewage, slurries and chemicals, and mag-drive pumps handle acids (Wikipedia). Thick (viscous) liquids lower efficiency (Wikipedia)
- **maker_difficulty**: easy to use a bought one: drop a submersible pump in the water and push a tube on (Adafruit 4547; FAO 2014). Moderate to print your own: the casing has to be watertight, the shaft needs bearings and ideally a seal (printed ones leak a little), and it still has to be primed or sat in the water (Hackaday 2021; Printables 444761, 1383048)

### Making it

- **processes**: 
  - off-the-shelf part: submersible fountain, pond and aquarium pumps, mini 3 V DC pumps and brushless DC pumps are cheap and sealed (Atlantic Water Gardens manual; Adafruit 4547; FAO 2014)
  - 3D print (FDM): drill-driven and motor-driven water pumps in PLA with TPU gaskets (Hackaday 2021; Printables 444761, 1383048, 201592), and a print-in-place pump using soluble support (Hackaday.io)
  - woodwork: a demonstration pump built from marine plywood with an acrylic impeller and window (The Engineering Mindset DIY pump)
  - CNC: industrial impellers are cast and machined ⚑ [uncertain: casting from Wikipedia 'Impeller'; machining not checked] *(⚑ parts need confirming)*
- **print_in_place**: partly: most printed pumps are separate parts bolted together with bearings, gaskets and a bolt for a shaft (Printables 444761; Hackaday 2021). One maker printed impeller and casing as a single piece by printing the gap in BVOH soluble support and dissolving it out in warm water for 3 days, but it still needs a shaft drive (Hackaday.io 'Can you print-in-place a water pump')
- **making_tips_3d_printing**: 1) Make the casing watertight: use at least 3-4 perimeters (5-6 if the shape allows), about 0.15 mm layers, 5-10% more extrusion and a slightly hotter nozzle; leaks often start at seams, uneven walls and poor overlap between infill and perimeters (Prusa Knowledge Base 'Watertight prints'). One popular printed pump uses 0.10 mm layers, 4 perimeters and 15% infill, with the drive shaft at 100% infill (Printables 1383048). 2) Seal the joints with gaskets printed in TPU, or print them in rigid filament to keep the spacing and add silicone sealant, and grease the impeller faces and shaft sleeve with silicone grease (Printables 444761; Hackaday 2021). 3) Embed nuts for the casing bolts by pausing the print at the right layer (Printables 444761: pause at 12.2 mm for nine M4 nuts). 4) Give the shaft proper bearings: ball bearings inside the casing (Hackaday 2021), or brass nuts drilled out to 4 mm as simple bushings (Printables 201592). Keep the motor above the water with a long collar and shaft (Printables 201592). 5) Impeller shape: backward-curved vanes are the most common and efficient design for water (The Engineering Mindset), but makers testing printed pumps found short or straight blades moved more water than tall or curved ones with their motors (Printables 201592), and another designer switched to forward-facing blades expecting more pressure as speed rises (Printables 1383048); try a couple of impellers. 6) For a print-in-place pump, make the gap an exact multiple of your layer height (0.4 mm, twice a 0.2 mm layer) and fill it with a soluble support such as BVOH (Hackaday.io). 7) Mark the turning direction and always spin it that way (Printables 444761). 8) Prime it before starting: submerge the pump or pour water into the inlet first; a printed pump 'cannot create enough suction to pull from a hose' and must be mostly under water (Printables 444761, 1383048). 9) Expect some leaking without a shaft seal, so keep drills and mains electrics clear of drips (Hackaday 2021). 10) Never use a printed pump to hold stored pressure; it is for open, low-pressure water circuits only.
- **off_the_shelf_parts**: Pumps: 'submersible fountain pump', 'pond pump' or 'magnetic drive pump' with flow adjuster and pre-filter (Atlantic Water Gardens manual); 'aquarium pump'; 'submersible 3V DC water pump' (Adafruit 4547); 'brushless DC water pump' (Topsflo); 'circulating pump' for heating loops; 'self-priming garden pump' (Wikipedia). Spares: replacement 'impeller assembly' or 'magnetic rotor', 'ceramic shaft' (Atlantic Water Gardens manual), and printable replacement impellers for washing-machine, dishwasher, pool and aquarium pumps (Printables 310558, 302288, 227655, 715869). For printed pumps: deep-groove ball bearings (e.g. 625), 775 DC motor, rigid shaft couplers, M3-M6 bolts and nuts, TPU filament for gaskets, silicone grease (Printables 1576255, 444761; The Engineering Mindset DIY pump). Around the pump: vinyl or silicone tubing, check valve or foot valve to keep it primed (Wikipedia 'Centrifugal pump'), float switch to switch a sump pump on (Printables 201592; Wikipedia 'Bilge pump'), PWM speed controller for DC pumps (Adafruit 4547), and an RCD or GFCI-protected outlet for mains pumps (FAO 2014; Atlantic Water Gardens manual)
- **rules_of_thumb**: 
  - Pick a pump whose maximum head (lift) is at least 1.5 times the height you need: at the maximum head the flow drops to zero, and the advertised flow is measured at zero height (sunnydazedecor.com and waterfountainonline.com fountain pump guides; both are vendor guides)
  - Affinity laws: flow changes in proportion to speed, head with speed squared and power with speed cubed; flow also rises with the cube of impeller diameter and head with its square (Wikipedia 'Affinity laws'). They are only a rough guide over small changes
  - Rough efficiency of small submersible pumps: about 40 L/h of water per watt; a small aquaponic unit needing 2000 L/h at 1.5 m lift uses a 25-50 W pump (FAO 2014, section 4.2)
  - Plumbing: up to 5% of the flow can be lost at each pipe fitting, and a 30 mm pipe carries about twice the flow of a 20 mm pipe from the same pump, so use few fittings and wide tube (FAO 2014); 'always use the widest diameter tubing that fits your pump's outlet' (waterfountainonline.com)
  - Put the pump below the water it draws from (or under water) so it stays primed; ordinary centrifugal pumps can't pull air out of a suction pipe (Wikipedia 'Centrifugal pump', Priming). Even in theory atmospheric pressure only gives about 10 m of 'push' into a pump inlet, less friction losses and the pump's own suction needs (Wikipedia 'Net positive suction head')
  - Run it near the middle of its range, where efficiency peaks (best efficiency point); very low flow overheats it and very high flow wastes power (Wikipedia 'Pump')
  - Fountain pumps: water no hotter than 35 C (95 F), fully submerged at all times, never in frozen water (Atlantic Water Gardens manual)
  - Print-in-place clearance: make the impeller-to-casing gap an exact multiple of layer height, e.g. 0.4 mm with 0.2 mm layers (Hackaday.io 'Can you print-in-place a water pump')
  - What a printed pump can do: a PLA drill-driven pump at 1800 rpm gave 13 L/min or lifted water at most 1.2 m (Hackaday 2021)

### When to use it

- **everyday_examples**: 
  - Garden fountain, pond and water-feature pumps, and the pumps in aquarium filters (Atlantic Water Gardens manual; Wikipedia 'Centrifugal pump', Magnetically coupled pumps)
  - The circulating pump that pushes hot water round a central-heating system (Wikipedia 'Centrifugal pump')
  - The drain pump in a washing machine or dishwasher, and pool filter pumps, which have small plastic impellers (Printables replacement impellers 310558, 302288, 227655)
  - A vacuum cleaner's fan, or the small blower fan that cools electronics: the same spinning-impeller idea moving air instead of water (Wikipedia 'Centrifugal fan', 'Centrifugal pump')
- **when_to_use**: Choose a centrifugal pump when you want to move a lot of water at low pressure, smoothly and cheaply: fountains, waterfalls, aquarium and pond filters, cooling loops, emptying a flooded sump, and circulating water in aquaponics and hydroponics, where FAO recommends a submersible impeller pump as 'the heart' of the system (FAO 2014; Atlantic Water Gardens manual; Printables 201592). It is simple, has no valves, gives steady (non-pulsing) flow, can be throttled with a valve without damage for short periods, and copes with some dirt in the water (Wikipedia 'Centrifugal pump', 'Pump'). A magnetic-drive version has no shaft seal to leak, which is why fountain and aquarium pumps use it (Wikipedia 'Centrifugal pump').
- **when_not_to_use**: Don't use it when you need pressure rather than flow, a measured dose, or suction from a dry pipe. For high pressure (hydraulics, spraying, lifting water very high) use a positive-displacement pump such as a gear, piston or diaphragm pump, with a relief valve (Wikipedia 'Centrifugal pump', 'Pump'). For measured doses use a peristaltic or syringe pump. If the pump must sit above the water and pull it up a dry hose, use a self-priming pump (diaphragm, peristaltic or a self-priming garden pump) or fit a foot valve and prime it (Wikipedia 'Centrifugal pump', 'Pump'; Printables 1383048). Avoid it for thick liquids (efficiency falls), large solids (clogging), liquids full of air or foam (it loses prime) and anything where running dry is likely (Wikipedia 'Centrifugal pump'; Adafruit 4547). For very low lifts in deep tanks an airlift (air pump bubbling up a pipe) can be more efficient and does not clog (FAO 2014). Never use a fountain pump for fuel, oil, salt water or food (Atlantic Water Gardens manual), or for drinking water (Adafruit 4547).
- **environment_limits**: Water: it must stay full and, for submersible pumps, fully submerged; water cools and lubricates the motor and bearings, so running dry overheats and wrecks it (Adafruit 4547; Topsflo; FAO 2014; Atlantic Water Gardens manual). Heat: fountain pumps are rated for water up to 35 C (95 F) (Atlantic Water Gardens manual); hot water also makes cavitation more likely because it boils at a lower suction pressure (Wikipedia 'Net positive suction head', Example 3). Cold: never leave a pump in frozen water; store it indoors over winter (Atlantic Water Gardens manual). Hard or well water leaves a crusty scale on the magnet rotor that has to be scrubbed off with white vinegar (Atlantic Water Gardens manual). Low flow: running against a closed outlet heats the water inside (Wikipedia 'Pump'). Wear: performance falls over time as the impeller and clearances wear, faster with grit or cavitation (Wikipedia 'Centrifugal pump', 'Pump'); good submersible pumps keep their output 1-2 years and last 3-5 years (FAO 2014). Printed PLA pumps can survive a year in dirty water (Printables 201592), but PLA softening in warm water was not checked ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Electric shock is the main hazard: plug mains pumps into an RCD- or GFCI-protected outlet kept away from water, unplug before putting hands in the water, never lift the pump by its cord, and throw away a pump with a damaged cord (Atlantic Water Gardens manual; FAO 2014). Keep fingers out of the inlet while it runs; switch off and wait for it to stop before clearing a blockage (Atlantic Water Gardens manual). Running dry can overheat a pump and cause electrical leakage (Atlantic Water Gardens manual). Stored pressure is low: unlike a positive-displacement pump it can't build up pressure until a pipe bursts when the outlet is blocked, but it heats the water if left running that way (Wikipedia 'Pump'), and slamming a valve shut on a moving water column can cause water hammer (Wikipedia 'Pump'). When it stops, water can siphon back through it and empty a tank: a small anti-siphon hole in the return pipe stops a fish tank draining in a power cut (FAO 2014, Appendix 8). Printed and drill-driven pumps leak a little (Hackaday 2021), so keep drills, batteries and motor wiring dry; a 12 V motor pump drew up to 18 A (Printables 201592), so use suitably thick wire and a fuse ⚑ [uncertain: fuse advice is general, not from the source]. Don't pump flammable liquids or drinking water with hobby pumps (Atlantic Water Gardens manual; Adafruit 4547). *(⚑ parts need confirming)*
- **common_failures**: 1) Won't pump at all: no prime or an air lock in the impeller chamber; submerge it, fill the inlet, or switch it on and off 2-3 times under water (Atlantic Water Gardens manual; Printables 444761). 2) Placed above the water, it can't pull water up the hose: put it below the water level or use a self-priming pump or foot valve (Printables 1383048; Wikipedia 'Centrifugal pump'). 3) Burned out from running dry: keep the water level up and the reservoir large enough (FAO 2014; Adafruit 4547). 4) Flow falls off: clogged pre-filter or impeller, or scale on the magnet rotor; clean every few weeks (FAO 2014: internal filter every 2-3 weeks; Atlantic Water Gardens manual: monthly). 5) Too little flow at the outlet: the lift is too high for the pump, or the tube is too narrow with too many fittings; choose a pump with 1.5 times the needed head and wide tubing (fountain pump guides; FAO 2014). 6) Noise, vibration and pitting of the impeller from cavitation, when suction pressure is too low (Wikipedia 'Net positive suction head'; The Engineering Mindset DIY pump found air and cavitation at the eye as speed rose). 7) Overheating when run with the outlet shut or nearly shut (Wikipedia 'Pump'). 8) Leaks along the shaft (Wikipedia 'Centrifugal pump'; Hackaday 2021). 9) Spinning the wrong way: always turn it in the direction of the arrow (Printables 444761); swapping a DC pump's wires does not make it suck backwards (Adafruit 4547). 10) Damage from frequent stopping and starting or from debris in the inlet (Atlantic Water Gardens manual). 11) Water draining back and the pump losing prime when switched off: fit a check valve (Wikipedia 'Centrifugal pump').
- **related**: 
  - Gear pump: two meshing gears carry a fixed amount of liquid each turn; gives pressure rather than flow and must have a relief valve (Wikipedia 'Pump')
  - Diaphragm pump and squeeze bulb: a flexing disc between two check valves; self-priming and good for air or small flows, but pulsing and lower flow
  - Peristaltic pump: rollers squeeze a tube; self-priming, measures doses and keeps the liquid clean, but gives far less flow per watt
  - Syringe pump: a screw pushes a plunger for small, exact doses; nothing like the flow of an impeller
  - Flexible-impeller pump: looks similar, with rubber vanes, but it is classed as a positive-displacement pump that moves a set amount each turn (Wikipedia 'Pump'; 'Impeller' shows one from an outboard engine's cooling pump)
  - Regenerative turbine (side-channel) pump: a bladed wheel that builds pressure in many small swirls, reaching 4-20 bar from a small pump but with low efficiency and tight clearances (Wikipedia 'Pump')
  - Axial-flow pump (propeller pump): even more flow at even lower pressure, with water flowing straight along the shaft (Wikipedia 'Pump')
  - Airlift pump: an air pump bubbles water up a pipe; no moving parts in the water and no clogging, but only for small lifts (FAO 2014)
  - Hydraulic ram pump: uses water hammer from a flowing stream to lift part of the water higher, with no motor
  - Magnetic coupling: drives the impeller through the sealed pump case so there is no shaft seal to leak, as in fountain and aquarium pumps (Wikipedia 'Centrifugal pump')
  - Check valve (foot valve): keeps a centrifugal pump full of water (primed) and stops back-siphoning when it stops (Wikipedia 'Centrifugal pump')
  - Centrifugal fan or blower: the same impeller-and-volute idea for air (Wikipedia 'Centrifugal fan')
  - Water turbine: a centrifugal pump run backwards, turning water pressure into rotation (Wikipedia 'Centrifugal pump')

### Pictures, videos and models

- **links**: 
  - [Centrifugal pump.gif (Nguyen thanh chinh; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Centrifugal_pump.gif): Simple animation of a blob of water entering the centre of a rotating impeller and being flung out to the casing *(licence: CC BY-SA 4.0)*
  - [Centrifugal Pump.png (Fantagu; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Centrifugal_Pump.png): Labelled photo of a cutaway centrifugal pump model (from Delmenhorst waterworks) naming its parts; used on Wikipedia's 'Centrifugal pump' page *(licence: Public domain)*
  - [Pump Impellers-1.jpg (Meisam; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pump_Impellers-1.jpg): Photo of four impellers side by side, from an axial-flow propeller through mixed-flow to two centrifugal impellers, showing how blade shape changes with the job *(licence: CC BY-SA 3.0)*
  - [How Centrifugal Pumps Work | 3D Animation (saVRee, YouTube)](https://www.youtube.com/watch?v=WUal9LXc0iM): 3D animated cutaway of a centrifugal pump, its impeller, volute and seals (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [3D Printing A Centrifugal Water Pump (Hackaday, 2021)](https://hackaday.com/2021/05/28/3d-printing-a-centrifugal-water-pump/): Article with photos of a fully printed PLA pump with TPU gaskets, driven by a drill, with its measured flow and head *(licence: link only)*
- **make_it_yourself**: 
  - [Centrifugal impeller style water pump- drill powered (MW-Mechanical, Printables)](https://www.printables.com/model/444761-centrifugal-impeller-style-water-pump-drill-powere (URL from Printables API, page not opened)): Popular drill-driven printed pump about 80 x 80 x 50 mm with TPU gaskets, nine M4 bolts with nuts embedded during a print pause, an M6 bolt as the shaft and couplers for 1/2 in ID tubing; includes priming and assembly notes *(licence: CC BY-NC)*
  - [Dynamic Pump (Centrifugal) (Robert Lang, Printables)](https://www.printables.com/model/1383048-dynamic-pump-centrifugal (URL from Printables API, page not opened)): Printed pump held together with zip ties, with alternative impellers and full print settings; the designer notes it must be mostly submerged because it can't suck from a hose *(licence: CC BY-NC)*
  - [Centrifugal Water Pump (PlasticyBits, Printables)](https://www.printables.com/model/201592-centrifugal-water-pump (URL from Printables API, page not opened)): PLA sump pump driven by a 12 V motor above the water, switched by a float switch, with several impeller versions; used under a house for about a year *(licence: CC BY)*
  - [Parametric Centrifugal Pump/Compressor (Maaz Anis, Printables)](https://www.printables.com/model/1583661-parametric-centrifugal-pumpcompressor (URL from Printables API, page not opened)): Parametric CAD files with an equations file for trying different impeller and volute shapes *(licence: CC BY-NC)*
  - [3D Printed Centrifugal Water Pump (Connor, Hackaday.io)](https://hackaday.io/project/179514-3d-printed-centrifugal-water-pump): Build log of the closed-vane printed pump featured on Hackaday, with a link to its Onshape CAD; no shaft seal in this first version *(licence: not stated)*
  - [Can you Print-in-Place a Water Pump (Ben, Hackaday.io, 2025)](https://hackaday.io/project/204344-can-you-print-in-place-a-water-pump): Experiments printing impeller and casing as one piece with a 0.4 mm gap filled with BVOH soluble support, after testing several vane designs *(licence: not stated)*
  - [DIY Centrifugal Pump - How to make a pump from wood (The Engineering Mindset)](https://theengineeringmindset.com/diy-centrifugal-pump/): Plywood-and-acrylic see-through pump driven by a 775 DC motor, comparing backward-curved, straight and forward-curved blades and showing cavitation at the eye *(licence: link only)*
- **diagram_idea**: A side-by-side cutaway: on the left, a curved-vane impeller inside a snail-shell volute with arrows showing water entering at the centre, being flung outwards and leaving the side outlet; on the right, a simple graph of height lifted against flow, showing the flow falling to zero at the 'maximum head', compared with a nearly flat line for a gear pump.
- **sources**: 
  - https://en.wikipedia.org/wiki/Centrifugal_pump
  - https://en.wikipedia.org/wiki/Pump
  - https://en.wikipedia.org/wiki/Impeller
  - https://en.wikipedia.org/wiki/Volute_(pump)
  - https://en.wikipedia.org/wiki/Affinity_laws
  - https://en.wikipedia.org/wiki/Net_positive_suction_head
  - https://en.wikipedia.org/wiki/Centrifugal_fan
  - https://en.wikipedia.org/wiki/Bilge_pump
  - https://theengineeringmindset.com/how-do-centrifugal-pumps-work/
  - https://theengineeringmindset.com/centrifugal-pump-basics/
  - https://theengineeringmindset.com/diy-centrifugal-pump/
  - https://webbsonline.com/media/ecom/prodpdf/atlantic_mag_drive_fountain_pumps_product_manual.pdf
  - https://www.fao.org/4/i4021e/i4021e.pdf
  - https://www.adafruit.com/product/4547
  - https://www.linkedin.com/pulse/pump-knowledge-why-brushless-dc-water-pumps-can-dry-run-topsflopump
  - https://sunnydazedecor.com/blogs/news/how-to-find-the-perfect-size-pump-for-your-water-fountain
  - https://waterfountainonline.com/blogs/inspiration-guides/fountain-pump-sizing-setup-tuning-guide
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://hackaday.com/2021/05/28/3d-printing-a-centrifugal-water-pump/
  - https://hackaday.io/project/179514-3d-printed-centrifugal-water-pump
  - https://hackaday.io/project/204344-can-you-print-in-place-a-water-pump
  - https://api.printables.com/graphql/ (models 444761, 1383048, 201592, 1583661, 1576255, 310558, 302288, 227655, 715869)
  - https://commons.wikimedia.org/wiki/File:Centrifugal_pump.gif
  - https://commons.wikimedia.org/wiki/File:Centrifugal_Pump.png
  - https://commons.wikimedia.org/wiki/File:Pump_Impellers-1.jpg
  - https://www.youtube.com/watch?v=WUal9LXc0iM

### Finder tags

- **connects**: not applicable
- **power_source**: electricity, liquid
- **power_loss**: lets go
- **motion_in**: steady turning
- **motion_out**: pressure
- **shaft_layout**: not applicable
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: none, soldering iron, drill and tap, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: pump
- **powered_does**: pump or control a flow
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, processes, safety_notes

## 323 Automatic siphon (bell siphon)

*hydraulics, pneumatics & vacuum.* A bell-shaped cap over a standpipe that starts siphoning when the water reaches the top and stops when air gets in, so a grow bed or tank floods and drains by itself with no moving parts

### What it is

- **plain_name**: A pipe with an upside-down cup over it that empties a tank or plant bed all by itself: water slowly fills up until it reaches the top of the pipe, then suddenly the whole lot gushes out down the pipe, and when the water gets down to the bottom of the cup it sucks in air and stops, so the tank fills again. Nothing moves except the water
- **term**: Bell siphon (an automatic intermittent siphon, or autosiphon)
- **aliases**: 
  - bell syphon (British spelling; Printables 507051)
  - autosiphon, auto-siphon (FAO 2014; University of Hawai'i CTAHR BIO-10)
  - automatic siphon, automatic intermittent siphon (Wikipedia 'Siphon')
  - self-starting siphon, self-siphon (Wikipedia 'Siphon')
  - bell siphon valve (Printables 1739027)
  - flood-and-drain or ebb-and-flow drain (the job it does in aquaponics and hydroponics; FAO 2014; Wikipedia 'Aquaponics')
  - bell siphon flushing system (older WC and urinal flushing cisterns; Wikipedia 'Flushing trough')
  - siphon cap (the small cap over a tube in a washing machine's fabric-softener compartment; whitegoodshelp.co.uk)
  - looped siphon (an alternative autosiphon made from a loop of pipe; FAO 2014)
- **family**: hydraulics, pneumatics & vacuum
- **one_liner**: A capped tube (the bell) sits over a standpipe that drains a tank; when the rising water spills into the standpipe it pulls the air out of the bell and starts a siphon that empties the tank much faster than it fills, until air rushes in under the bell's rim and breaks the siphon, so a steady trickle in becomes a regular flood-and-drain cycle with no moving parts or timer (University of Hawai'i CTAHR BIO-10; FAO 2014).
- **complexity**: A few parts: a vertical standpipe through a watertight bulkhead fitting or rubber grommet (e.g. a Uniseal (brand)) in the floor of the tank, which sets the top water level; the bell, a pipe about twice the standpipe's width with an airtight cap on top and notches ('teeth') cut round its bottom edge; an air tube ('snorkel') or a small hole near the bottom of the bell that lets air in to stop the siphon; a drain pipe under the tank with two 90-degree elbows; and usually a slotted media guard round it all to keep gravel out (University of Hawai'i CTAHR BIO-10; FAO 2014).
- **how_it_works**: Water flowing steadily into the bed rises inside and outside the bell (it gets in through the teeth) until it reaches the top of the standpipe and starts to trickle down it (CTAHR BIO-10; FAO 2014). The falling water carries air out of the airtight bell, and the bends in the drain hold the water back so the pipe fills, so suction builds in the bell and pulls water up and over the standpipe at full bore: the siphon has started (FAO 2014; CTAHR BIO-10). The siphon is driven by the drop from the water surface in the bed to the drain outlet below (Wikipedia 'Siphon'), so it drains the bed far faster than the inflow refills it (FAO 2014). When the level falls to the bottom of the bell (the teeth) or the end of the snorkel, air rushes in, the siphon breaks, and the bed starts filling again; the cycle repeats as long as water keeps coming in (CTAHR BIO-10; FAO 2014).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: drains water out through the floor of a tank or grow bed, back to the fish tank or sump (CTAHR BIO-10; FAO 2014)
  - change the kind of motion: turns a steady trickle of water in into regular surges out, flooding and draining a bed every 15-20 minutes or so (Wikipedia 'Siphon': it turns 'a continuous trickling flow ... into a large surge volume'; CTAHR BIO-10)
  - store energy: lets water build up in the bed, then releases it all at once, the same idea as an automatic flushing cistern (Wikipedia 'Siphon', Automatic intermittent siphon)
- **motion**: none: no part moves; only the water level rises and falls, flooding and draining the bed over a cycle of about 15-20 minutes (CTAHR BIO-10) or 1-2 cycles an hour (FAO 2014). The bell simply lifts off the standpipe by hand for cleaning
- **degrees_of_freedom**: 0: the bell sits on the standpipe fitting and does not move while working; it can be lifted straight off for maintenance (CTAHR BIO-10)
- **special_behaviour**: 
  - motion conversion: changes a steady inflow into a regular on-off outflow, with no timer, float or valve (FAO 2014, Glossary 'Autosiphon'; Wikipedia 'Siphon')
  - over-centre (snaps past a point and stays): in water terms it has two states and snaps between them: once the water passes the top of the standpipe the siphon starts and keeps going until the level reaches the teeth, and once broken it stays off until the bed is full again. This switching between a high and a low level is what makes it flood and drain instead of just overflowing (CTAHR BIO-10; FAO 2014)
  - fail-safe or breakaway: the standpipe is also an overflow, so even if the siphon fails to start, the water can't rise above the standpipe top as long as the inflow is less than the pipe can carry (CTAHR BIO-10: 'the standpipe regulates the maximum water level'; FAO 2014)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it controls the flow of water rather than holding parts together
  - suction or air pressure: it works by the airtight bell trapping air and the siphon's suction; any air leak at the cap or snorkel stops it starting (CTAHR BIO-10)
  - friction or clamping (force-fit): the standpipe is pushed through a rubber Uniseal grommet or clamped in a bulkhead fitting in the tank floor (CTAHR BIO-10; FAO 2014); the bell just rests on the fitting under its own weight
- **input_output**: Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for a 1-3 m2 media bed 30 cm deep, an inflow of 200-500 L/h per bed (FAO 2014); set the inflow (usually with a ball valve) so the siphon starts, drains and stops every 15-20 minutes whatever the bed size (CTAHR BIO-10); while siphoning, the outflow is much faster than the inflow (FAO 2014). Not a motion converter in the mechanical sense: efficiency, shaft arrangement and back-driving do not apply; the drain simply pours down into the fish tank below (CTAHR BIO-10).
- **power**: passive (no power needed): the siphon itself uses only gravity and air pressure, but it needs a steady inflow, usually from an electric pump or airlift (FAO 2014). If the inflow stops it simply stops cycling; the bed ends up drained or partly full depending on where in the cycle it stopped ⚑ [uncertain: inferred from how it works; no source describes this] *(⚑ parts need confirming)*
- **removability**: tool-free quick release: the bell lifts straight off the standpipe and back on during normal operation and maintenance, and lifting it is also how you break a siphon that won't stop (CTAHR BIO-10). The bell and standpipe can both be taken out so water runs straight through to the sump, e.g. while leak-testing a new system (FAO 2014, Appendix 8)
- **reuse_cycles**: effectively unlimited: it cycles continuously, and the bell can be lifted off and refitted as often as needed (CTAHR BIO-10)
- **tools_needed**: To build from PVC: a hole saw and drill for the bulkhead hole, a saw and pliers to cut the teeth, PVC primer and cement for the cap, 100% silicone to seal the snorkel, and a cable tie (CTAHR BIO-10); FAO's version also uses an angle grinder for the slots and a wrench for the barrel connector (FAO 2014, Appendix 8). Printed versions need sealant or solvent cement if printed in parts (Printables 507051). Using it: none
- **seal**: airtight or pressure: the cap-to-bell joint and the snorkel entry must be airtight or the suction that starts the siphon never forms (CTAHR BIO-10: primer and glue for the cap, 100% silicone round the snorkel, or a threaded 90-degree hose barb instead). The bulkhead or Uniseal grommet keeps the tank floor watertight (CTAHR BIO-10). It only ever sees a slight suction, not stored pressure
- **load**: light: no mechanical load. Its capacity is a flow: the standpipe must carry more than the inflow. Tested sizes: a 1/2 in standpipe with a 1 in bell for a 1 x 4 x 1 ft bed (about 30 US gal); 1 in with 2 in for 4 x 4 x 1 ft (120 gal); 1 1/2 in with 3 in for 4 x 6 x 1 ft (180 gal); 2 in with 4 in for 4 x 8 x 1 ft (240 gal) (CTAHR BIO-10). The bed itself is very heavy once filled with gravel and water, so the stand must be strong (FAO 2014)
- **adjustable**: yes: the standpipe height sets the top water level; the snorkel length (or air-hole height) sets where the siphon breaks, and trimming it shorter is the usual cure for a siphon that won't stop; the inflow valve sets how often it cycles; and changing the pipe lengths between the drain elbows tunes starting and stopping (CTAHR BIO-10). Some printed bells screw onto their base so the trigger level can be adjusted a little (Printables 1624282)
- **play_and_precision**: not applicable for mechanical play. The top and bottom water levels are fixed by the standpipe and the teeth or snorkel, so each cycle repeats as long as the inflow stays steady, but the cycle is sensitive to inflow: too little and it never triggers, too much and it never breaks (FAO 2014; Go Green Aquaponics). FAO calls bell siphons 'finicky' and says they 'require attention' (FAO 2014). Gravel lodged under the teeth lifts the bell and can stop it working (CTAHR BIO-10)
- **access_needed**: both sides: the bulkhead or grommet and standpipe are fitted through the floor of the bed, and the drain elbows go on underneath; the bell and media guard are then dropped on from above (CTAHR BIO-10; FAO 2014)
- **materials**: Usually schedule 40 PVC pipe and caps, with vinyl tubing or a PVC elbow as the snorkel, 100% silicone sealant, and a Uniseal rubber grommet or barrel connector as the bulkhead (CTAHR BIO-10; FAO 2014). Printed bells, standpipes, flared inlets and media guards are made in plastics that can live under water, e.g. ASA (Printables 1256870, 507051, 1528319, 507046, 1624282). It handles fish water and nutrient solution; the grow medium round it is gravel, cinder rock or expanded clay balls (CTAHR BIO-10)
- **maker_difficulty**: easy to build, moderate to tune: it is a few cuts in PVC pipe or a simple print, but getting it to start and stop reliably takes trial and error with the snorkel length, drain elbows and inflow rate (CTAHR BIO-10, Troubleshooting; FAO 2014: 'finicky'; 'labour-intensive to calibrate')

### Making it

- **processes**: 
  - off-the-shelf part: cut and glued PVC plumbing pipe, caps and elbows (CTAHR BIO-10; FAO 2014), or ready-made bell siphon kits sold for aquaponics (e.g. OFERA, vendor, in 20, 25 and 30 cm heights)
  - 3D print (FDM): printed bells, complete siphon modules, flared standpipe inlets and media guards (Printables 507051, 1624282, 1481841, 1528319, 507046, 1389169)
- **print_in_place**: no: there are no moving parts to print assembled. The bell can be printed as one closed piece (Printables 507051 offers a one-piece file and a two-piece version that must be sealed), but it is used with a separate standpipe, bulkhead and air tube
- **making_tips_3d_printing**: 1) The bell must be airtight, so print it with extra perimeters (Printables 1624282 recommends 'more perimeter for better air tightness'); for watertight and airtight walls use at least 3-4 perimeters, about 0.15 mm layers and 5-10% more extrusion (Prusa Knowledge Base 'Watertight prints'). 2) If the bell is too tall for your printer and printed in two parts, seal the joint with sealant or solvent cement (Printables 507051). 3) Print the cap as part of the bell rather than gluing a cap on, so there is one less joint to leak ⚑ [uncertain: design suggestion, not from a source]; printing it closed end down on the bed avoids bridging over the top ⚑ [uncertain: not from a source]. 4) Add a hole in the top sized for aquarium air-line tubing as the snorkel (Printables 507051), and make sure it ends just above the teeth (CTAHR BIO-10). 5) For threaded printed parts, put a rubber seal under the nut, and add an elbow under the drain to help it start (Printables 1624282). 6) A flared or funnel-shaped top on the standpipe lets more water down at the start and makes triggering more consistent (Printables 1528319; FAO 2014 uses a 25-40 mm reducer on top of the standpipe for the same reason). 7) Use a material that tolerates living under water: one maker printed a washing-machine siphon in ASA (Printables 1256870). 8) Print a perforated media guard to keep clay balls or gravel out; one has worked for over 12 months without maintenance (Printables 507046). 9) Size the printed standpipe so the inlet flow is smaller than what the siphon can carry, 'but not too small' (Printables 1624282). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: PVC pipe (schedule 40) in two sizes for standpipe and bell (e.g. 1/2 in and 1 in up to 2 in and 4 in), a PVC end cap, two 90-degree PVC elbows, a PVC reducer, vinyl tubing or a 90-degree hose barb for the snorkel, 100% silicone sealant, PVC primer and cement, cable ties (CTAHR BIO-10); a bulkhead fitting, barrel connector or Uniseal (brand) grommet with matching hole saw; a larger slotted pipe (e.g. 110 mm) as the media guard (FAO 2014); a ball valve to set the inflow (CTAHR BIO-10); a submersible pump to supply the water (FAO 2014). Ready-made 'bell siphon' kits are sold for aquaponics (OFERA, vendor)
- **rules_of_thumb**: 
  - The bell's diameter should be twice the standpipe's (CTAHR BIO-10); Go Green Aquaponics gives 1.5 to 2 times
  - 'Double-double rule': the gravel guard at least twice the bell's diameter, and the bell twice the standpipe's (CTAHR BIO-10)
  - The top of the standpipe should be level with the bottom of the bell's cap, so enough air is trapped in the bell to start the siphon (CTAHR BIO-10)
  - The snorkel tube should poke about 1/4 in into the cap and end just above the teeth; if it reaches down to the teeth or below, the siphon won't break (CTAHR BIO-10)
  - Put two 90-degree elbows joined by a straight pipe in the drain below the bed (or a reducer at the bottom of the standpipe) to restrict the outflow; this helps both starting and stopping (CTAHR BIO-10)
  - Aim for a flood-and-drain cycle of about 15-20 minutes whatever the bed size, set with a valve on the inflow (CTAHR BIO-10); FAO says systems usually cycle 1-2 times an hour (FAO 2014)
  - Keep the top water level 1-2 in below the surface of the grow medium to stop algae, with a media depth of 8-12 in (CTAHR BIO-10) or about 30 cm (FAO 2014)
  - Worked example for a 1-3 m2 bed with 30 cm of media and 200-500 L/h inflow: standpipe 2.5 cm wide x 22 cm high; bell 7.5 cm x 25 cm with two 1 x 4 cm slots 1.5 cm up from the bottom and a 1 cm air hole 5 cm from the bottom; media guard 11 cm x 32 cm (FAO 2014, section 4.2)
  - The inflow must be strong enough to trigger the siphon but not so strong that it can't stop (FAO 2014)

### When to use it

- **everyday_examples**: 
  - The fabric-softener compartment of a washing-machine drawer: a small cap over a tube that empties the compartment by siphon once rinse water fills it (whitegoodshelp.co.uk; Printables 1256870)
  - Old automatic urinal flushing cisterns that fill from a slow trickle and flush on their own (Wikipedia 'Siphon'); flushing troughs for rows of toilets used a bell siphon system (Wikipedia 'Flushing trough')
  - The Pythagorean cup (Tantalus cup), a trick cup that drains completely through its stem if you fill it past a line (Wikipedia 'Pythagorean cup')
  - Flood-and-drain grow beds in backyard aquaponics and hydroponics (CTAHR BIO-10; FAO 2014)
- **when_to_use**: Use a bell siphon when a container that is filled steadily should regularly fill up and then empty completely, without a timer, float, valve or electronics: the classic case is an aquaponic or hydroponic grow bed, where flooding feeds the roots and draining pulls fresh air into them (FAO 2014; Wikipedia 'Ebb and flow hydroponics'; CTAHR BIO-10). It lets the pump run all the time, which keeps water flowing through the fish tank, while the bed still floods and drains (FAO 2014). It also suits other 'fill slowly, dump all at once' jobs, such as automatically flushing cisterns and emptying siphon rain gauges (Wikipedia 'Siphon'). It has no moving parts to corrode, wear out or jam (Wikipedia 'Siphon'), and it is cheap to make from plumbing pipe or a print (CTAHR BIO-10; Printables).
- **when_not_to_use**: Don't use one if the inflow is very uneven or may stop and start, because it only cycles reliably within a band of inflow rates (FAO 2014; Go Green Aquaponics); use a timer-controlled pump with a plain standpipe overflow instead, which FAO notes needs no calibration but gives less water circulation through the fish tank (FAO 2014). It can't fill anything: to keep a tank topped up use a float valve (ballcock). It can't lift water higher than the water surface it drains from; use a pump (Wikipedia 'Siphon'). Avoid it where the water carries lots of solids or roots that can block the teeth or snorkel, unless you fit a media guard and clean it (CTAHR BIO-10; Wikipedia 'Siphon'). Where the drain must hold a level exactly or shut off on command, use a valve. For a one-off drain, a plain siphon tube or a pump is simpler.
- **environment_limits**: Water quality: debris, biofilm and roots can block the teeth, snorkel or seep holes, so it suits clean water best or needs a media guard and regular checks (Wikipedia 'Siphon'; CTAHR BIO-10; Go Green Aquaponics). Air pockets trapped in some automatic siphons slowly dissolve into the water when there is no inflow, which can trigger it at the wrong time (Wikipedia 'Siphon', Automatic intermittent siphon). Sunlight: keep the water level below the surface of the medium so algae don't grow (CTAHR BIO-10). Frost, UV ageing of printed or PVC parts, and warm water softening printed PLA were not checked in a source ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Low risk in itself: no stored pressure and no moving parts. Related hazards in the system around it: the pump that feeds it needs an RCD-protected outlet kept away from water (FAO 2014); a full grow bed of gravel and water is very heavy, so build a strong stand (FAO 2014); a return pipe that dips into a fish tank can accidentally siphon the tank dry in a power cut unless it has a small anti-siphon hole, which FAO says 'is not optional' (FAO 2014, Appendix 8). Don't start ordinary siphons by sucking on the tube when the liquid is anything but clean water: swallowing or breathing in liquids such as petrol can kill (Wikipedia 'Siphon').
- **common_failures**: 1) Won't start (bed stays full and just overflows down the standpipe): an air leak at the cap or round the snorkel, so reseal it airtight; gravel lodged under the teeth lifting the bell, so seat it firmly and use a media guard; or too little inflow (CTAHR BIO-10; Go Green Aquaponics). 2) Won't stop (water trickles out constantly and the bed never refills): the snorkel is blocked or too long, so clear it or trim it shorter; the drain needs different pipe lengths between its elbows; or the inflow is too high (CTAHR BIO-10). Wikipedia calls this steady dribble, matching the inflow, the most common failure of automatic siphons (Wikipedia 'Siphon'). 3) Breaks too early, before the bed is empty (Go Green Aquaponics). 4) Teeth and snorkel clogged by grow medium, roots or fish waste: fit a gravel guard about twice the bell's width and lift the bell out to clean it (CTAHR BIO-10; Go Green Aquaponics). 5) A U-bend water seal in the outlet gets blown out by a vigorous flush, so the siphon stops cycling (Wikipedia 'Siphon'). 6) Printed bells leaking air through thin walls or a badly sealed joint (Printables 1624282, 507051).
- **related**: 
  - Plain siphon: a bent tube that drains a tank once started by hand; the bell siphon is a siphon that starts and stops itself (Wikipedia 'Siphon')
  - Float valve (ballcock): uses a float and lever to fill a tank to a level and stop; the bell siphon empties instead, with no moving parts
  - Timer-controlled pump with a standpipe: the electronic way to flood and drain a bed; easy to set up but needs a timer and gives less circulation (FAO 2014)
  - Looped siphon: a loop of pipe that does the same flood-and-drain job without a bell (FAO 2014 mentions it as an alternative under research)
  - Pythagorean cup: the same self-starting siphon hidden in a drinking cup, used as a trick (Wikipedia 'Pythagorean cup')
  - Siphonic flushing cistern and flushing trough: a toilet siphon started by a lever-operated plate, with a timing box and vent pipe that let air in to end the flush (Wikipedia 'Flushing trough')
  - Check valve and anti-siphon hole: stop unwanted siphoning back through a pump line (FAO 2014; Wikipedia 'Siphon', back-siphonage)
  - Hydraulic ram pump: another water device with no motor that cycles by itself, but it uses water hammer to lift water higher rather than draining a tank
  - Centrifugal pump (impeller pump): usually supplies the steady inflow that the bell siphon turns into flood-and-drain cycles (FAO 2014)

### Pictures, videos and models

- **links**: 
  - [Construction of Automatic Bell Siphons for Backyard Aquaponic Systems (Fox, Howerton and Tamaru, University of Hawai'i CTAHR, BIO-10, June 2010)](https://www.ctahr.hawaii.edu/oc/freepubs/pdf/BIO-10.pdf): Step-by-step photos of cutting the teeth, fitting the snorkel and drain elbows, a labelled diagram of the bell, standpipe and water levels, and four finished sizes side by side *(licence: link only (university extension publication))*
  - [Small-scale aquaponic food production (FAO Fisheries and Aquaculture Technical Paper 589, 2014)](https://www.fao.org/4/i4021e/i4021e.pdf): Figure 4.58: diagram of a bell siphon, standpipe and media guard in a grow bed; Appendix 8 has step-by-step photos of building one *(licence: link only (FAO copyright))*
  - [Basic 2 inch Bell Siphon for Aquaponics (MicroAquaponics, YouTube)](https://www.youtube.com/watch?v=B9j8-Cf1ZW8): Demonstration of a bell siphon starting and stopping (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Aquaponics Bell Siphons - The Complete Guide (Rob Bob's Aquaponics & Backyard Farm, YouTube)](https://www.youtube.com/watch?v=hpVzsM_7uZo): How bell siphons work, how to build one, variations and troubleshooting (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Pythagorean cup cross-section (Nevit Dilmen; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Physagorian_Pythagoras_Greedy_Tantalus_cup_05.svg): Four-stage cross-section of a Pythagorean cup: empty, filled below the siphon level, overfilled so the hidden siphon starts, and emptying completely; the same self-starting siphon idea as a bell siphon *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
- **make_it_yourself**: 
  - [Bell syphon for aquaponics (RichH, Printables)](https://www.printables.com/model/507051-bell-syphon-for-aquaponics): Printable outer bell with a hole in the top for aquarium air-line tubing as the snorkel; one-piece file plus a two-piece version to seal with solvent cement *(licence: CC BY)*
  - [Aquaponics syphon media guard (RichH, Printables)](https://www.printables.com/model/507046-aquaponics-syphon-media-guard (URL from Printables API, page not opened)): Perforated guard that keeps clay pellets away from the bell, with an extension piece for deeper beds; used for over 12 months without maintenance *(licence: CC BY)*
  - [Bell Siphon for Aquaponic (seNect, Printables)](https://www.printables.com/model/1624282-bell-siphon-for-aquaponic (URL from Printables API, page not opened)): Small screw-together bell siphon in three sizes (13, 17 and 22 mm bore, trigger levels about 37-43 mm), with an adjustable trigger height and notes on seals, perimeters and a starting elbow *(licence: CC BY-NC)*
  - [Bell Siphon Flared Inlet (pik0, Printables)](https://www.printables.com/model/1528319-bell-siphon-flared-inlet (URL from Printables API, page not opened)): Flared top for the standpipe to make the flow into the siphon more consistent *(licence: CC BY)*
  - [Bell Syphon Control Module (Dale Cady, Printables)](https://www.printables.com/model/1481841-bell-syphon-control-module (URL from Printables API, page not opened)): Stand-alone bell siphon module that connects to standard 3/4 in PVC, for a small flood-and-drain system made from drink containers *(licence: CC Public Domain)*
  - [Bell Siphon Module for Modular NFT Hydroponic Gutter Base (Hendrick, Printables)](https://www.printables.com/model/1389169-bell-siphon-module-for-modular-nft-hydroponic-gutt (URL from Printables API, page not opened)): Module with a built-in bell siphon that turns a printed gutter hydroponic system into a flood-and-drain one *(licence: CC BY-NC)*
- **diagram_idea**: A three-frame cross-section of a grow bed with the bell over the standpipe: (1) water rising outside and inside the bell, just reaching the standpipe top; (2) the siphon running, with arrows pulling water in under the teeth and down the standpipe through the two drain elbows; (3) the level at the teeth, air bubbles rushing in under the rim and up the snorkel, and the flow stopping, with a small graph of water level against time showing the sawtooth fill-and-dump cycle.
- **sources**: 
  - https://www.ctahr.hawaii.edu/oc/freepubs/pdf/BIO-10.pdf
  - https://www.fao.org/4/i4021e/i4021e.pdf
  - https://en.wikipedia.org/wiki/Siphon
  - https://en.wikipedia.org/wiki/Aquaponics
  - https://en.wikipedia.org/wiki/Ebb_and_flow_hydroponics
  - https://en.wikipedia.org/wiki/Flushing_trough
  - https://en.wikipedia.org/wiki/Pythagorean_cup
  - https://www.whitegoodshelp.co.uk/fabric-softener-compartment-full-of-water/
  - https://ofera.at/en-us/blogs/ofera-blog/wie-funktioniert-ein-aquaponik-bell-siphon
  - https://gogreenaquaponics.com/blogs/news/how-to-troubleshoot-bell-siphon-problems-in-aquaponics
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://api.printables.com/graphql/ (models 507051, 507046, 1624282, 1528319, 1481841, 1389169, 1739027, 1256870)
  - https://commons.wikimedia.org/wiki/File:Physagorian_Pythagoras_Greedy_Tantalus_cup_05.svg
  - https://www.youtube.com/watch?v=B9j8-Cf1ZW8
  - https://www.youtube.com/watch?v=hpVzsM_7uZo

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."*
- **motion_out**: steps ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."*
- **shaft_layout**: not applicable ⚑ *needs confirming (best guess): could not read both sides of `input_output`: "Steady water inflow -> intermittent surges out (on-off flow). Typical design figures: for ..."*
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, power tools, hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: tool-free quick release
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
- **seal_use**: pump or control a flow
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: switch, set or store
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, power

