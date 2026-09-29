# snap & clip fits: Snaps or clips together

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 44 Cantilever snap fit

*snap & clip fits.* A flexible arm with a hook on the end bends as parts push together, then springs back to catch a ledge; the most common snap fit (includes U- and L-shaped arms)

### What it is

- **plain_name**: A springy plastic finger with a hook on the end that bends aside as you push two parts together, then clicks back to catch behind a ledge and hold them, like the tab on a battery cover
- **term**: Cantilever snap fit (cantilever snap joint, snap-fit hook)
- **aliases**: 
  - snap-fit hook / snap hook / snap-fitting hook (Covestro term)
  - clip, plastic clip, latch tab, catch
  - snap arm, snap finger, snap lug, cantilever lug (DuPont term)
  - U-shaped snap fit: the arm is folded back on itself for more flex in a small space (Covestro; HP)
  - L-shaped snap fit: a slot at the arm's root makes it longer and more flexible (HP MJF handbook)
  - discontinuous (slotted or segmented) annular snap: a ring split into fingers, designed as cantilevers (Covestro)
  - separable (releasable) snap fit vs inseparable (permanent) snap fit
  - clip-on / clip-off feature, push-fit clip
- **family**: snap & clip fits
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints, locks, latches & catches, quick-release & tool-free
- **one_liner**: A flexible arm made as part of one part, with a hook at its tip that bends aside as the parts are pushed together and springs back behind a ledge (undercut) on the other part, locking them together without screws or glue.
- **complexity**: Single piece on each side: a springy arm (the beam) with a hook at its tip (the overhang, with a sloped lead-in face and a retaining face) moulded or printed on one part, and a ledge, hole or slot (the undercut) on the other; usually paired with rigid locating lugs or pins that line the parts up and carry sideways loads (Covestro Fig. 2; Hubs).
- **how_it_works**: As you push the parts together, the sloped front face of the hook (lead angle) rides over the edge of the other part and bends the arm sideways by the depth of the hook (the undercut). Once the hook passes the edge, the arm springs back straight and the back face of the hook (return angle) catches behind the ledge; after joining, the arm should be back in a stress-free state (Covestro p. 3). How hard it is to push together depends on the arm's stiffness, the hook depth and the lead angle; whether it can be pulled apart again depends on the return angle: a 90° back face 'can never be disassembled' by pulling, while one as sloped as the lead face needs the same force in both directions (HP MJF handbook). U- and L-shaped arms work the same way but fold the arm back or slot it at the root, making it longer and more flexible in a small space (HP MJF handbook).

### Finder attributes

- **job**: 
  - join and hold: the main job; clicks two parts together without screws or glue
  - lock, and release by hand: separable designs open by pressing a tab, pushing the hook through a slot, or pulling hard against a sloped back face (Covestro Figs. 3 and 7)
- **motion**: none: it is a fixed joint once latched; the arm only flexes while snapping together or apart
- **degrees_of_freedom**: 0 once latched: the hook, the ledge and any locating lugs block all movement between the parts; the arm's bending is an internal motion used only during assembly
- **special_behaviour**: 
  - quick-release (tool-free): separable designs with a release tab or a sloped back face come apart by hand (Covestro Fig. 3; HP MJF handbook)
  - hand-release only: designs with a steep back face hold under load and only let go when someone presses the hook clear, e.g. Covestro's traffic-light door, which 'can be opened again by pressing the hook through the slit in the housing'
  - none, for permanent designs that can only be undone by breaking the hook (Wikipedia 'Snap-fit')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the hook sits behind the ledge
  - spring force (a spring or springy part presses it in place): the arm's springiness pushes the hook into place; some designs leave the arm slightly bent to pull the parts tight (DuPont p. 75)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable when designed to separate (sloped back face, release tab or access slot); permanent versions with a hidden 90° hook can only be undone by breaking the hook (Wikipedia 'Snap-fit'; HP MJF handbook)
- **seal**: none: a snap fit holds parts but doesn't seal; add a gasket or O-ring if needed
- **load**: light to medium: strongest against pulling apart in the direction the hook resists (Covestro says its positive snap joint 'can transmit considerable forces'), weaker in side-to-side shear, which locating lugs should carry (Hubs), and weakest if the arm is pried or bent further. Assembly force for fingers is usually kept below about 50-100 N (HP MJF handbook).
- **adjustable**: no: position and holding force are fixed by the arm and hook shape; some designs take up tolerances by leaving the arm slightly bent after assembly (DuPont p. 75)
- **play_and_precision**: small to noticeable: a clearance gap between hook and ledge is needed to cover tolerances (HP MJF handbook), e.g. 0.5 mm for FDM and 0.3 mm for SLA, SLS and MJF prints (Hubs), so parts can rattle unless locating lugs, ribs or a slightly pre-bent arm take up the play; once latched, it returns to the same position each time
- **access_needed**: one side only (blind) to assemble, since you simply push the parts together; to release you need to reach the hook through a slot or a pressing tab, unless the back face is sloped enough to pull apart
- **materials**: Tough, springy plastics that tolerate a lot of bending (a high allowable strain): acetal (POM, Delrin (brand)), nylon (PA, Zytel (brand)), polycarbonate and PC/ABS, ABS, and polyester elastomer (Hytrel (brand)) (Covestro Table 2; DuPont Table 10.06). Glass-filled plastics allow much less bending (about 0.5-2% strain). For 3D printing: nylon (PA12, especially SLS or MJF), ABS, PETG and TPU are recommended, while PLA and standard SLA resins are 'less suitable' because they are brittle (Hubs); tough and durable SLA resins are made for snap fits (Formlabs). Spring steel is used for metal clips.
- **maker_difficulty**: easy to moderate: the hook is just part of the printed shape, but getting the arm length, thickness and hook depth right for your material and printer usually takes one or two test prints

### Making it

- **processes**: 
  - 3D print (FDM): very common; print the arm flat so it bends within the layers
  - 3D print (resin): tough or durable resins only; standard resin is too brittle (Hubs; Formlabs)
  - 3D print (SLS / MJF nylon): the most reliable printed snap fits (Hubs; HP MJF handbook)
  - injection moulding: the classic process, with hooks formed by side cores or slots in the part (DuPont p. 75)
  - sheet metal: spring-steel clips *(unverified parts omitted)*
- **print_in_place**: no: the arm prints as part of one piece and snaps into a separately printed mating part; no extra hardware is needed
- **making_tips_3d_printing**: 1) Orientation first: never build the arm standing up in Z, because layers peel apart when it bends (Hubs; HP; CNC Kitchen measured upright PLA at 31 MPa against 63 MPa flat). Lay the part so the arm bends within the layers; you can choose the direction the hook bends independently of the direction the parts join, to suit the build orientation (Anderson quick guide). 2) Round the root: a fillet of at least half the arm's base thickness (Hubs; HP MJF handbook); Covestro found stress concentration falls steeply up to a root radius of about 0.6 times the thickness. 3) Taper the arm: making it thin down to half its root thickness at the hook spreads the bending evenly and allows more than 60% more deflection than a straight arm (Covestro pp. 8 and 12). 4) Minimums for prints: arm at least 1 mm thick at the root, hook at least 1 mm deep, at least 5 mm wide (Hubs; HP). 5) Size it with the Covestro formula y = 0.67 x strain x length squared / thickness (straight arm) or 1.09 x ... (thickness tapering to half): for example Formlabs' Raspberry Pi case used a 20 mm arm with a 1.2 mm hook, which on a 2 mm thick straight arm works out at about 0.9% strain. Keep printed arms below about one third of the material's elongation at yield (HP). 6) Longer arms and shallower hooks lower both the stress and the push force; the width at the root does not change the strain (Formlabs). 7) Lead-in face about 35-40° from the direction of insertion for easy assembly; back face 90° for permanent, sloped for removable (HP). Remove the sharp edge at the hook tip with a small chamfer (HP). 8) Clearance: 0.5 mm between hook and slot for FDM, 0.3 mm for SLA, SLS and MJF (Hubs). Sloped faces printed in Z show a staircase effect that adds friction and can make the hook bind (Anderson quick guide), so put the sloped faces in the XY plane where possible. 9) Add locating lugs or pins so the hook only holds the parts together and doesn't carry side loads (Hubs; Covestro Fig. 2). 10) Material: PETG, ABS, nylon or TPU for snaps you'll open often; PLA only for stiff, rarely opened or one-time snaps (Hubs). PLA creeps most under constant load, then ABS, then PETG, then nylon (thrinter creep test on printed clips), so design the arm to be relaxed once latched (Covestro p. 3; Hubs). 12) Print a test piece (e.g. kaje's eight-version snap-fit test prints) in your material before committing to a big enclosure. *(unverified parts omitted)*
- **off_the_shelf_parts**: Usually none: the hook is moulded or printed into the part. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Permissible deflection (hook depth) of a rectangular arm: y = 0.67 x strain x L squared / h for a straight arm; y = 1.09 x strain x L squared / h if the thickness tapers to h/2 at the hook; y = 0.86 x strain x L squared / h if the width tapers to a quarter (Covestro Table 1 and p. 16; HP MJF handbook Fig. 13). Strain is a decimal (2% = 0.02), L is the arm length, h the root thickness.
  - Force to bend the arm: P = (b h squared / 6) x (Es x strain / L), with Es the secant modulus; push-in (mating) force W = P x (friction + tan lead angle) / (1 - friction x tan lead angle) (Covestro pp. 12-16). Worked example: a polycarbonate hook 19 mm long, 9.5 mm wide, 2.4 mm deep, 30° lead angle and 3.28 mm root thickness needs 32.5 N to bend and 58.5 N to push on (Covestro p. 16).
  - Allowable short-term strain for a single snap: polycarbonate 4%, PC/ABS 2.5%, PC blends 3.5%, 10-20% glass-filled PC 2.0-2.2%; for frequent separation use about 60% of these (Covestro Table 2, p. 12).
  - DuPont allowable strains for lug-type snaps, used once / used frequently: acetal Delrin 100 8% / 2-4%, Delrin 500 6% / 2-3%, nylon Zytel 101 dry 4% / 2%, at 50% humidity 6% / 3%, glass-filled nylon 0.8-2.0% / 0.5-1.0%, Hytrel 20% / 10% (DuPont 'General Design Principles', Table 10.06, p. 75).
  - During a single brief snap, semi-crystalline plastics may be strained almost to their yield point, amorphous ones to about 70% of yield strain, and glass-filled ones to about half their elongation at break (Covestro p. 11).
  - Root radius: stress concentration drops sharply up to R/h of about 0.6, but never use less than 0.015 in (0.38 mm) (Covestro p. 8); for prints, at least 0.5 x root thickness (Hubs; HP).
  - Printed snap minimums: root thickness 1 mm, hook depth 1 mm, width 5 mm; clearance 0.5 mm (FDM) or 0.3 mm (SLA, SLS, MJF) (Hubs; HP MJF handbook).
  - Lead (assembly) angle 35-40°; a 90° return angle can never be pulled apart; keep finger assembly force under about 50-100 N; allowable strain for printed parts below one third of elongation at yield (HP MJF handbook). Worked example: an MJF PA12 arm 8.5 mm long, 9.5 mm wide and 1.5 mm thick with a 1 mm hook needs 23.5 N and sees 3% strain.
  - Too short an arm breaks: 'Too short a bending length may cause breakage' (DuPont p. 75, Fig. 10.20).
  - The joint should be stress-free after assembly; bend the arm only while assembling, not in service (Covestro p. 3; Hubs).

### When to use it

- **everyday_examples**: 
  - The battery cover on a TV remote or toy, which clicks shut with a springy tab (Wikipedia 'Snap-fit'; HP MJF handbook, for U-shaped arms on battery lids)
  - Plastic housings of chargers, lamps and electronics that click together with no screws, including 3D-printed Raspberry Pi cases (Covestro; Formlabs; Printables 'Malolo's screw-less / snap fit Raspberry Pi case')
  - Plastic buckles on backpacks and bags (Formlabs), which use two cantilever snaps (see the separate side-release buckle entry)
  - Control-panel modules held in their openings by four hooks yet still removable, and traffic-light housings whose parts all snap together (Covestro Figs. 1 and 7)
- **when_to_use**: Use a cantilever snap fit whenever you want two plastic parts to click together quickly without screws, glue or extra parts: lids, covers, battery doors, enclosures, cases, clips and toy kits. It is the most common and most flexible type of snap fit (Wikipedia; HP): it works on any shape, can be made permanent or releasable, needs only a push to assemble, and costs nothing extra in a 3D print. Choose U- or L-shaped arms when there isn't room for a long straight arm or when parts must be pulled apart often (HP).
- **when_not_to_use**: Avoid it when the joint must carry high or continuous loads (use screws into heat-set inserts or a bolted joint), when it must seal (use a gasket, O-ring or annular snap on a round part), when it will be opened hundreds of times in a brittle material such as PLA or standard resin (use screws, magnets or a purpose-made latch), in parts that get hot (PLA in a car), or when the arm would have to stay bent in service, because plastics creep and the grip fades. For round lids and caps an annular snap fit is usually stronger and neater; for frequent quick opening a torsional snap fit, magnet joint or latch may suit better.
- **environment_limits**: A plastic arm left bent creeps and loses its grip, so design it to relax once latched (Covestro p. 3; Hubs); in a creep test on printed clips PLA crept most, then ABS, then PETG, with nylon the least (thrinter). PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen), so a PLA clip in a hot car can let go. Allowable stress falls more with temperature than allowable strain, so designs are based on strain (Covestro p. 9). Nylon's allowable strain depends on moisture: Zytel 101 4% dry but 6% at 50% relative humidity (DuPont Table 10.06). *(unverified parts omitted)*
- **safety_notes**: Generally none known. Permanent hidden snaps make a product hard to open without breaking it, so plan how batteries or electronics inside will be reached. *(unverified parts omitted)*
- **common_failures**: The arm cracks at its root because of a sharp inside corner, an arm that is too short or a hook that is too deep (DuPont Fig. 10.20), a brittle material such as PLA, or printing it standing up so the layers peel (Hubs; CNC Kitchen). The arm takes a permanent set and the joint goes loose, from over-straining or being left bent in service (Covestro; thrinter). The hook rounds off or the parts pop apart because the hook is too shallow or its back face too sloped. It is too hard to push together because the lead angle is too steep or the arm too stiff (aim for 35-40° and under 50-100 N; HP). It won't engage because there is too little clearance for printer tolerances (0.5 mm for FDM; Hubs) or the stair-stepped print surface binds (Anderson quick guide). It rattles because there is too much clearance: add locating lugs or ribs. It breaks when someone pries open a permanent 90° hook.
- **related**: 
  - Annular snap fit: a continuous bead all the way round a round part instead of separate fingers; stronger but needs more force, and suits round parts only
  - Torsional snap fit: the hook sits on a rocker held by a twisting bar; press the other end to release, good for covers opened often
  - Snap pin (split-leg push-in pin, rabbit clip): two cantilever legs on a pin that snaps through a hole
  - Push-in plastic rivet (fir-tree clip, push rivet): many small flexible fins that grip in a hole, for panels and trim
  - Side-release buckle: two cantilever snaps in a housing, released by squeezing both sides
  - DIN-rail clip (top-hat rail snap mount): a spring clip that snaps onto a standard rail
  - Compliant one-piece latch (flexure latch): a flexing latch designed to be opened and closed often
  - Compliant detent (flexure click arm): the same bending arm used to click into positions rather than lock
  - Press fit (interference fit): held by tightness alone, with no hook
  - Heat-set threaded insert and Self-tapping screw into plastic: screwed joints for parts opened often or carrying higher loads
  - Magnet joint (embedded magnets, magnetic catch): tool-free and endlessly reusable, but weaker and easier to knock apart
  - Living hinge: often combined with a cantilever snap to close a hinged lid

### Pictures, videos and models

- **links**: 
  - [Cantilever Snap-fit.gif (Wikimedia Commons; drawing by Ootsuka02, animation by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Cantilever_Snap-fit.gif): Animation of a cantilever arm being pushed into another part, bending as it slides across it, then springing back into the depression *(licence: CC BY-SA 3.0)*
  - [Snapfit principle.svg (Wikimedia Commons; Yves Mulleneers, modified by CQui)](https://commons.wikimedia.org/wiki/File:Snapfit_principle.svg): Cross-section diagram of a snap-fit hook with its length, spacing and entry angle labelled *(licence: GFDL 1.2 or later / CC BY-SA 1.0, 2.0, 2.5 and 3.0 (dual licensed))*
  - [Snapfit principe reversibilite.svg (Wikimedia Commons; CQui after Yves Mulleneers)](https://commons.wikimedia.org/wiki/File:Snapfit_principe_reversibilite.svg): Cross-section diagrams of snap-fit reversibility options: how the hook shape makes a joint releasable or permanent *(licence: GFDL 1.2 or later / CC BY-SA 1.0-3.0 (dual licensed))*
  - [Snap-Fit Joints for Plastics - A Design Guide (Covestro, 2015)](https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf): Polarised-light photo comparing a straight and a tapered snap arm, drawings of cantilever, U-shaped, torsion and annular snaps, product examples (control panel, housing, traffic light) and design charts *(licence: link only (manufacturer design guide))*
  - [Cantilever Snap-Fits : Design, Key Features, Limits and Tips (YouTube, Xometry EMEA & APAC)](https://www.youtube.com/watch?v=9wTnYj_vOvY): Video explaining cantilever snap-fit design, features and limits *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Snap-Fit Joint Test Prints - Eight Versions (kaje, Printables)](https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions): Eight printable snap-fit test pieces based on the Bayer/Covestro guide: width-tapered and thickness-tapered cantilevers, cantilever plus rigid lugs, two separable designs opened by squeezing buttons or pushing lugs, segmented and continuous annular snaps, and a torsion snap; details read through the Printables public API *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Snap Fit Test / Press Fit Test (Wilko, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/9185-snap-fit-test-press-fit-test): A test print for finding the clearance your printer, material and settings need for snap and press fits *(licence: CC BY (Printables listing))*
  - [Parametric Hinged Storage Box with Snap-Fit Lid (Customizable SCAD) (Luca Koch, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1517296-parametric-hinged-storage-box-with-snap-fit-lid-cu): OpenSCAD (BOSL2) box with a hinged lid and snap closure; dimensions, wall thickness and tolerances are adjustable; PETG recommended for flexible snaps *(licence: CC BY (Printables listing))*
  - [BOSL2 joiners.scad: half_joiner(), joiner() and rabbit_clip() (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): OpenSCAD modules for snap-together joiners for separately printed parts, and a rabbit-eared clip with two flexible ears that snaps into a slot, optionally with locking flanges *(licence: BSD 2-Clause)*
  - [Snap-fit joint calculators (Designerdata)](https://designerdata.nl/calculators/snap-fit-joints): Online calculators for straight and tapered snap-fitting hooks (rectangle, trapezoid, ring segment, any cross-section): deflection force, mating force and maximum strain, or the thickness needed *(licence: link only (free online tool))*
  - [Snap-Fit Calculator (Fictiv)](https://www.fictiv.com/tools/snap-fit-calculator): Online calculator giving root strain, safety factor and a pass/fail verdict for cantilever (and annular) snap fits, with material presets *(licence: link only (free online tool))*
  - [Plastic Snap Fit Straight Beam Dynamic Strain Equation Calculator (Engineers Edge)](https://www.engineersedge.com/snap_fit_straight.htm): Calculates the strain in a straight snap-fit finger from its deflection, root thickness and length (a tapered-arm version is also offered) *(licence: link only (free online tool))*
- **diagram_idea**: A three-frame side view: frame 1 the hook's sloped lead face touches the ledge; frame 2 the arm bends aside by the undercut depth y (label arm length L, root thickness h, root fillet, lead angle); frame 3 the arm springs back straight and the hook's back face sits behind the ledge, with small insets showing a 90° back face marked 'permanent' and a sloped one marked 'pulls apart', plus U- and L-shaped arm outlines.
- **sources**: 
  - https://en.wikipedia.org/wiki/Snap-fit
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://endeavor3d.com/wp-content/uploads/2024/12/Snap-Fits-Design-for-HP-MJF-Union-Joints-Design.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://formlabs.com/blog/designing-3d-printed-snap-fit-enclosures/
  - https://aarontyleranderson.com/wp-content/uploads/2022/02/SnapFit_Quick_Guide.pdf
  - https://www.machinedesign.com/fastening-joining/article/21834620/fundamentals-of-annular-snap-fit-joints
  - https://hackaday.com/2022/03/14/3d-printing-snap-fit-joints/
  - https://www.youtube.com/watch?v=9wTnYj_vOvY
  - https://commons.wikimedia.org/wiki/Category:Snap-fit
  - https://commons.wikimedia.org/wiki/File:Cantilever_Snap-fit.gif
  - https://commons.wikimedia.org/wiki/File:Snapfit_principle.svg
  - https://commons.wikimedia.org/wiki/File:Snapfit_principe_reversibilite.svg
  - https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions
  - https://designerdata.nl/calculators/snap-fit-joints
  - https://designerdata.nl/calculators/snap-fit-joints/snap-fitting-hook-straight-ring-segment
  - https://www.fictiv.com/tools/snap-fit-calculator
  - https://www.engineersedge.com/snap_fit_straight.htm

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, off_the_shelf_parts, processes, reuse_cycles, safety_notes, tools_needed

## 45 Annular snap fit

*snap & clip fits.* A round bead or groove all the way around a part snaps over a matching lip, like a pen cap or a bottle lid clicking on

### What it is

- **plain_name**: A raised ring around one round part that pops over a matching lip or into a groove in the other, so they click together, like a pen cap or a push-on bottle cap
- **term**: Annular snap fit (annular snap joint, ASJ)
- **aliases**: 
  - ring snap, ring snap fit
  - cylindrical snap fit (DuPont term)
  - undercut snap fit (DuPont heading 'Undercut Snap-Fits')
  - bead-and-groove snap, boss-and-groove snap (maker terms, e.g. Hackaday)
  - snap cap, snap-on cap, snap-on lid, push-on or press-on lid (packaging terms; a snap cap is 'held in place by a bead ... rather than a thread', SKS Bottle)
  - continuous annular snap (a full unbroken ring) vs discontinuous, slotted or segmented annular snap (a ring cut into fingers, designed as cantilevers; Covestro)
  - circular snap fit (Adafruit tutorial title)
  - ball-and-socket snap, spherical snap (the same idea on a ball; Wikipedia lists ball-and-socket joints as annular snap fits)
- **family**: snap & clip fits
- **other_families**: hinges & pivots, seals & pass-throughs, print-in-place & 3D-printing joints
- **one_liner**: A raised ring (bead) around one round part and a matching groove or lip on the other: pushing them together stretches the outer part or squeezes the inner one all the way round until the bead drops into the groove and the parts click together.
- **complexity**: Two parts and nothing else: a plug or shaft with a bead or ridge all the way round (or a groove), and a tube, cap or hub with the matching groove or lip. One of them must be thin and springy enough to stretch or squeeze; the plug is best made stiffer than the hub around it (Machine Design).
- **how_it_works**: The bead on the plug is slightly bigger than the hole it has to pass (the difference is the undercut), so as you push, its sloped front face (lead angle) stretches the outer part outwards and/or squeezes the inner part, spreading the strain evenly around the whole circle (hoop strain) (Covestro; Hubs; Machine Design). When the bead reaches the groove, both parts spring back to their relaxed size and the joint locks, ideally with no stress left in it. The slope of the back of the bead (return angle) decides how it comes apart: about 30° pulls off easily, about 45° takes a firm pull, and 90° is permanent (Machine Design; DuPont). Because the joint is round, the parts can usually still turn on each other unless something keys them, which is how a snapped-on wheel spins on its axle or a pulley turns on its shaft (DuPont Fig. 10.15).

### Finder attributes

- **job**: 
  - join and hold: the main job, for caps, lids and round housings
  - let it move (turn, slide or bend): parts snapped together this way can still spin about their shared axis, e.g. a toothed pulley snapped onto a shaft (DuPont Fig. 10.15) or a toy wheel on an axle
  - seal it, or pass cables or fluid through: a continuous ring 'offers a semi-hermetic seal' (Covestro Fig. 6)
- **motion**: none or rotate: fixed if the parts are keyed or tight, otherwise free to turn about their shared axis with no limit (as with a snapped-on wheel or cap)
- **degrees_of_freedom**: 0 or 1: the bead blocks sliding along the axis and the round fit blocks sideways movement; turning about the axis stays free unless the parts are keyed, tight, or held by friction
- **special_behaviour**: 
  - quick-release (tool-free): pull-off designs with a shallow back face (about 30°), such as pen caps, come off by hand (Machine Design)
  - none, for permanent designs with a 90° back face (Machine Design; DuPont) *(unverified parts omitted)*
- **holding_principle**: shape (the parts interlock; form-fit): the bead sits in the groove, spring force (a spring or springy part presses it in place): the stretched ring springs back into the groove *(unverified parts omitted)*
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: pull-off designs with about a 30-45° back face come apart by hand; permanent versions with a 90° back face need a hub that is open at the far end and can only be broken apart (Machine Design; DuPont p. 73)
- **reuse_cycles**: many times for pull-off designs such as pen caps, although 'repeated use can cause permanent strain and loosening' (Wikipedia 'Snap-fit'); once for 90° permanent designs
- **seal**: dust-resistant: a continuous (unslotted) ring closes the joint all the way round; *(unverified parts omitted)*
- **load**: medium: annular snaps 'are generally stronger, but need greater assembly force than their cantilevered counterparts' (Machine Design; DuPont p. 72), and 'quite small undercuts give joints of considerable strength' (Covestro p. 6). Strongest against pulling apart along the axis, especially with a steep back face or a groove placed well away from the tube's end (Covestro p. 22); weak against twisting (the parts just turn) and against being tipped or pried from one side, which is also how they are opened. Slotting the ring for easier assembly lowers the holding force (DuPont p. 73).
- **adjustable**: no: the fit is fixed by the bead and groove sizes; the parts can still be turned to any angle unless keyed
- **play_and_precision**: small: the round bead centres the parts well; there is some end play if the groove is longer than the bead, and a continuous ring fits tighter than a slotted one. It tolerates little misalignment when pushed straight on, so parts are usually tipped in on one side first and then pressed home (Covestro p. 23). *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the parts slide together along their shared axis; a permanent 90° design needs the hub open at the other end (DuPont p. 73)
- **materials**: The part that stretches needs a tough, springy plastic with 'good recovery characteristics' (DuPont p. Amorphous plastics such as PC, PS, PC/ABS and ABS can be strained to about 70% of their yield strain in one brief snap (Machine Design). *(unverified parts omitted)*
- **maker_difficulty**: moderate: the shapes are simple, but the interference is only a few tenths of a millimetre, so printer accuracy, roundness and material choice matter; plan on a test print or two

### Making it

- **processes**: 
  - 3D print (FDM): print round parts standing on their end so the ring is made of continuous perimeter loops
  - 3D print (resin): tough or durable resins only (Formlabs)
  - injection moulding: the standard process for pen caps and snap caps; the undercut is pushed off a core as the part is ejected, which needs a material with good recovery (DuPont p. 72), and inseparable designs need a split mould (Covestro p. 20)
  - off-the-shelf part: snap caps and snap-on closures for bottles and tubes *(unverified parts omitted)*
- **print_in_place**: no: the two parts are printed separately and pressed together
- **making_tips_3d_printing**: 2) Give the bead and groove sloped faces no steeper than about 45° so they print without supports (Prusa: overhangs of 45-60° print cleanly), which also gives a removable joint (a 45° return angle is typical for joints that come apart; Machine Design; DuPont). Use a lead-in bevel of about 30° on the plug (DuPont). 3) Size the undercut from the strain the material can take: undercut (difference in diameter) = allowable strain x diameter (Covestro p. 20). 4) Keep the flexing wall thin and even: for FDM, an outer flexing wall no thicker than about 1.9 mm and about 0.35 mm design clearance (Anderson quick guide); DuPont stresses uniform wall thickness with no stress risers. 5) Make the stretching part from the tougher material (PETG, nylon, TPU) and the plug stiff (Machine Design). 6) Watch the first layer: a cap printed mouth-down has a squashed, slightly wider first layer (elephant foot) that can spoil the fit; use about 0.2 mm elephant-foot compensation or a small chamfer on the rim (Prusa). 7) A continuous snap is hard to push on straight: tip one side in first and then press the rest (Covestro p. 23); kaje's continuous annular test print joins 'quite strongly' when pressed together all around the circumference, and he printed the annular pieces with 3 perimeters and no infill. 8) If it is too stiff or cracks, cut slots to make a segmented snap: slots allow much deeper undercuts at the cost of holding force (DuPont p. 73), and the fingers are then designed as cantilevers (Covestro p. 5). 9) Put the groove near the open end of the tube for easier assembly: a groove further in than about 1.8 x the square root of (diameter x wall thickness) takes up to about 3 times the force (Covestro p. 22). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Permissible undercut (difference in diameter) = maximum allowable strain x diameter at the joint; if both parts are about equally flexible, each takes half, so the undercut can be about twice as big (Covestro p. 20).
  - Hoop strain = (plug diameter - hub bore) / hub bore; amorphous plastics (PC, PS, PC/ABS, ABS) can be strained up to 70% of their yield strain in a single brief snap, and reinforced plastics to about 50% of their strain at break (Machine Design; Covestro p. 11).
  - Lead angle generally under 30°; return angle about 30° separates easily, 45° is typical for joints that come apart, 90° is permanent (Machine Design). DuPont: a 45° return bevel suits most uses, a 90° return needs the hub open at the far end, and a 30° lead-in bevel helps entry (DuPont p. 73).
  - A groove at least 1.8 x the square root of (joint diameter x wall thickness) from the end of the tube counts as 'remote' and needs up to about 3 times the push-on force of one near the end (Covestro p. 22).
  - The simple hoop-stress approach works best when the wall is thinner than 0.1 x the diameter (Machine Design).
  - Circular is ideal: 'Rectangular shaped snap-fits do not work satisfactorily'; keep wall thickness uniform and keep weld lines, gates and voids away from the snap, where they cause cracks during assembly (DuPont p. 73).
  - Slots allow much deeper undercuts but reduce holding force; for high holding force, 6 or 8 segments with 90° undercuts can be used (DuPont pp. 73-74).
  - Big continuous snaps need a lot of force: Covestro's 200 mm polycarbonate lamp cover with a 1 mm deflection per part needs about 1,346 N if pressed straight on, much less when tipped in by hand (Covestro p. 23).
  - FDM starting values: about 0.35 mm clearance and a flexing outer wall no thicker than about 1.9 mm (Anderson, 'Snap Fit Design' quick guide).
  - Caps on pens for children must either be too big to swallow (at least 5 mm of the cap must not pass a 16 mm ring gauge) or let at least 8 litres of air per minute through at a pressure drop of no more than 1.33 kPa; a single hole of about 3.4 mm² usually does this (ISO 11540:2021, 4.2-4.3). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - A ballpoint pen cap that clicks onto the pen (Machine Design; Hubs; Wikipedia 'Snap-fit')
  - Push-on bottle caps and snap caps held by a bead on the bottle neck rather than a thread (Hubs; SKS Bottle; Wikipedia)
  - A child-resistant pill bottle cap that pops off only when arrows line up with notches in the snap ridge (Machine Design, Tylenol (brand) example)
  - Round lamp covers and light housings (Covestro); ball-and-socket toy joints (Wikipedia 'Snap-fit')
- **when_to_use**: Use it for round parts that should click together without screws: caps, lids, round enclosures and covers, end caps, knobs, and wheels or pulleys that should snap onto a shaft and still spin. It gives a stronger, stiffer and more compact joint than a few cantilever hooks (Machine Design: 'ASJs are often good choices for compact, stiff joints'), spreads the strain evenly around the circle, needs no extra parts, and a continuous ring keeps out dust and splashes. It suits 3D printing well when the parts are printed standing on their ends.
- **when_not_to_use**: Avoid it on square or irregular shapes (DuPont: rectangular versions 'do not work satisfactorily'; use cantilever snaps instead), when assembly force must be low on a large diameter (a big continuous ring needs a lot of force; slot it or use cantilevers), in brittle materials such as PLA, standard resin or glass-filled plastics (use a screw thread), for pressure-tight or dependable waterproof seals (add an O-ring or use a threaded cap with a gasket), and where the parts must not turn (add a key or flat, or use a bayonet mount or thread). For caps that must resist children, use a push-and-turn child-resistant cap; for lids opened many times a day, a screw cap wears better.
- **environment_limits**: Keep the joint stress-free once assembled: a ring left stretched creeps and loosens, and 'repeated use can cause permanent strain and loosening' (Wikipedia 'Snap-fit'; Covestro p. 20). Printed PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen), so a printed cap in a hot car may loosen or deform. *(unverified parts omitted)*
- **safety_notes**: Small caps and snap-on parts can be swallowed or inhaled by children: pen caps for children are designed to ISO 11540, either too large to swallow or vented so air can pass through them (ISO 11540:2021). *(unverified parts omitted)*
- **common_failures**: Too tight to assemble, or the outer part splits while stretching: the undercut is too big for the material's allowable strain, the wall is too thick, or there is a weak spot such as a weld line, void or printed layer seam (DuPont p. 73; Covestro). Loose or pops off: the undercut is too small, the back face is too shallow, or the ring has taken a set from repeated use (Wikipedia). Won't seat evenly because the part printed oval or has a seam bump; tip one side in first (Covestro p. 23). Leaks because the ring is slotted, broken or not round. Permanent 90° designs break when someone tries to open them. Fixes: size the undercut with undercut = strain x diameter, use a 30-45° back face for removable parts, keep walls thin and even, and add slots if it is too stiff.
- **related**: 
  - Cantilever snap fit: separate flexible fingers instead of a full ring; lower assembly force and works on any shape, but weaker and doesn't seal
  - Torsional snap fit: a rocking hook on a twisting bar, easy to release again and again
  - Press fit (interference fit): held by tightness alone, with no groove to click into
  - Crush ribs and spring-fit features (compliant press fit): small ribs that squash to grip, rather than a ring that stretches and springs back
  - Printed screw thread: a threaded cap is easier to make tight and to seal, but slower to open
  - Bayonet mount (push-and-twist lock): pins in L-shaped slots hold the parts without stretching a whole ring
  - Push-and-turn child-resistant cap: adds a lock so children can't simply pull or twist the cap off
  - O-ring seal: add one when the joint must really seal
  - Retaining ring (circlip, E-clip): a separate springy metal ring in a shaft groove, when the plastic part can't provide the bead
  - Ball-and-socket joint (lockable ball head) and Posable segmented arm: the spherical version of the same snap
  - Tamper-evident breakaway bridge: thin bridges often added to snap caps to show they've been opened
  - Press stud (snap fastener, popper): a tiny round snap on clothes and bags
  - Open C-shaped clip that snaps sideways over a rod or pipe: a part-ring version whose easy-on, hard-off behaviour was explained by Yoshida and Wada ('Mechanics of a snap-fit', Physical Review Letters, 2020)

### Pictures, videos and models

- **links**: 
  - [Snap-Fit Joints for Plastics - A Design Guide (Covestro, 2015), section D 'Annular Snap Joints', pp. 20-23](https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf): Drawings of separable and inseparable annular snap joints with the lead and return angles, a continuous annular snap on a lamp housing, the stress spread along the tube during joining, and design charts *(licence: link only (manufacturer design guide))*
  - [Snap-fits: Design for HP MJF: Union joints design (HP MJF Handbook, 2019), Figs. 7-8](https://endeavor3d.com/wp-content/uploads/2024/12/Snap-Fits-Design-for-HP-MJF-Union-Joints-Design.pdf): Renderings of an annular snap fit and its assembly, alongside cantilever, L-shaped, U-shaped and torsional snap fits *(licence: link only (HP document hosted by a reseller))*
  - [Annular Snap-Fits : Design, Key Features, Limits and Tips (YouTube, Xometry EMEA & APAC)](https://www.youtube.com/watch?v=UBC7qvdUpFA): Video on annular snap-fit design, features, challenges and typical uses *(licence: link only (standard YouTube licence))*
  - [Fusion 360 Tutorial – Circular SnapFit Cases! (YouTube, Adafruit Industries)](https://www.youtube.com/watch?v=iF_P5ie_b8o): Modelling a round 3D-printed case whose lid snaps on with a ring-shaped snap *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Snap-Fit Joint Test Prints - Eight Versions (kaje, Printables)](https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions): Printable test pieces including a segmented annular snap and a continuous annular snap ('deceptively simple ... joined quite strongly'), plus cantilever and torsion versions; details read through the Printables public API *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Parametric Snap-on Lid (Chris, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/12804-parametric-snap-on-lid): An OpenSCAD push-fit lid, inspired by a cleaning-powder cap, that you size by measuring your container's diameter *(licence: CC BY (Printables listing))*
  - [Snap Ball Socket Joint Link - Gooseneck Articulated Arm (nickcin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/393094-snap-ball-socket-joint-link-gooseneck-articulated-): Small ball-and-socket links (about 16 mm tall) that snap together into a flexible arm: the spherical form of an annular snap; printed in PETG *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Snap-Fit Calculator (Fictiv)](https://www.fictiv.com/tools/snap-fit-calculator): Online calculator with an annular mode ('snap-on caps, lids, collars, and cylindrical assemblies') that estimates hoop strain, insertion force and a pass/fail verdict from dimensions and material presets *(licence: link only (free online tool))* *(unverified parts omitted)*
- **diagram_idea**: A cut-away side view of a cap on a tube in three frames: the cap's sloped lead face meets the bead; the cap's rim stretches outwards (arrows round the circle labelled 'hoop strain', undercut y and diameter d marked); the bead drops into the groove and the cap relaxes, with small insets of back-face angles of 30° ('pulls off'), 45° ('firm pull') and 90° ('permanent').
- **sources**: 
  - https://en.wikipedia.org/wiki/Snap-fit
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.machinedesign.com/fastening-joining/article/21834620/fundamentals-of-annular-snap-fit-joints
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://formlabs.com/blog/designing-3d-printed-snap-fit-enclosures/
  - https://endeavor3d.com/wp-content/uploads/2024/12/Snap-Fits-Design-for-HP-MJF-Union-Joints-Design.pdf
  - https://aarontyleranderson.com/wp-content/uploads/2022/02/SnapFit_Quick_Guide.pdf
  - https://www.sks-bottle.com/Selecting_Cap.html
  - https://cdn.standards.iteh.ai/samples/81889/9c3d070a4cea43d5af38070f80582924/ISO-11540-2021.pdf
  - https://arxiv.org/abs/2003.13566
  - https://hackaday.com/2022/03/14/3d-printing-snap-fit-joints/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/elephant-foot-compensation_114487
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=UBC7qvdUpFA
  - https://www.youtube.com/watch?v=iF_P5ie_b8o
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions
  - https://www.fictiv.com/tools/snap-fit-calculator

### Other info

- **Fields with unverified parts:** environment_limits, holding_principle, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, rules_of_thumb, safety_notes, seal, special_behaviour, tools_needed

## 46 Torsional snap fit

*snap & clip fits.* A catch on a twisting bar; press one end and the other end lifts to release, so it can be opened again and again

### What it is

- **plain_name**: A springy catch on a tiny see-saw: the hooked arm sits on a thin bar that twists instead of bending, so the catch clicks shut by itself, and pressing the far end of the arm tips the hook up and lets go
- **term**: Torsional snap fit (torsion snap joint)
- **aliases**: 
  - torsion snap joint (name used in the Bayer/Covestro snap-fit design guide)
  - torsion snap-fit / torsion snap
  - snap-fitting rocker arm / rocker-arm snap (Covestro's description of the arm)
  - see-saw latch or see-saw snap (vendor guides, e.g. RapidDirect: 'a seesaw mechanism occurs when the hook's beam extends beyond the torsion bar axis')
  - torsion-bar latch
  - torsionally-biased latch (patent wording, US 5,924,749)
  - Beware: some supplier blogs use 'torsional snap fit' for twist-to-lock (rotate-to-engage) snaps, and a Yazaki patent titled 'Torsional snap-fit latch' (US 5,628,533) twists the latch head about its own axis as it is pushed in. These are relatives, not the see-saw catch described here *(unverified parts omitted)*
- **family**: snap & clip fits
- **other_families**: locks, latches & catches, compliant mechanisms & flexures, quick-release & tool-free
- **one_liner**: A snap catch whose hooked arm is carried on a short bar that twists like a tiny spring (torsion bar), so the hook clicks behind a lip when the lid closes and swings clear when you press the other end of the arm.
- **complexity**: Single piece: the catch is moulded or printed as part of one housing half, plus the lip it catches on. In plain words: a hooked arm (rocker arm or lever) with a sloped front on the hook; one or two thin bars (torsion bars) that hold the arm in the middle like the axle of a see-saw and twist when it tips; posts that join each end of the bar to the housing; a press pad or tab on the other end of the arm; and, on the mating part, a lip, ledge or slot (the keeper) for the hook to drop behind.
- **how_it_works**: The arm is held part-way along its length by a short, thin bar fixed to the part at both ends, like a see-saw on a springy axle. When the lid closes, its edge pushes on the sloped face of the hook, the arm tips, and the bar twists (the plastic is loaded in shear instead of being bent, as in a cantilever snap); once the hook passes the lip, the twisted bar springs back and the hook drops behind it. To open, you press the pad on the other side of the pivot, which tips the arm the other way and lifts the hook clear, so the cover opens 'under a force P' (Covestro, pp. 6 and 18-19). Because the twisting bar is the spring, the arm itself can be stiff, and a longer bar can twist further without being overstressed (Covestro, p. 18). A patented phone battery cover works the same way: a long beam twists about its axis when the cover goes in and lets go when a thumb tab is pressed (US 5,924,749).

### Finder attributes

- **job**: join and hold: keeps a lid, cover, battery door or housing half shut, lock, and release by hand: press the pad to open; it latches again by itself when pushed shut
- **motion**: flex: the arm tips through a few degrees as the bar twists, and the largest safe twist angle is set by how much shear strain the plastic can take (Covestro, p. 18). The latched parts themselves do not move
- **degrees_of_freedom**: 1 inside the catch (the arm rocks about the bar's axis); 0 between the two latched parts once it is shut
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): pulling on the lid pushes against the back of the hook and doesn't open it; pressing the pad on the far side of the pivot does
  - quick-release: one press opens it, and it snaps shut again by itself when the lid is pushed closed *(unverified parts omitted)*
- **holding_principle**: shape (the parts interlock; form-fit): the hook sits behind the lip, spring force (a spring or springy part presses it in place): the twisted bar pushes the hook back into place
- **input_output**: not applicable: it is a holding joint, not a motion converter
- **power**: passive (no power needed)
- **removability**: tool-free quick release
- **reuse_cycles**: many times: it is meant for covers that are opened again and again (Covestro, p. 6; Wikipedia, Snap-fit), as long as the bar's twist stays within the frequent-use strain limit (about 60% of the one-time value, Covestro Table 2). *(unverified parts omitted)*
- **tools_needed**: none: the pad is pressed with a finger
- **seal**: none: the catch leaves a gap; it can hold a lid against a gasket, but plastic springs that are kept loaded creep and relax, so it won't keep a seal squeezed for long (DuPont, p. 36)
- **load**: Light to medium. Strongest against a pull straight away from the hook; weak against knocks on the release pad, prying, and anything that twists the bar further. The thin bar and the arm's 'backbone' are the weak points: a printed test arm snapped in half until it was made thicker (Printables 151102). Xometry Pro rates the load capacity 'low to moderate'.
- **adjustable**: no: once made, the holding force is fixed by the bar's length and thickness and the hook's depth. When designing, make the bar's cross-section easy to change, because that is how you tune its stiffness (Printables 151102)
- **play_and_precision**: Small to noticeable: the parts need clearance to close (about 0.5 mm for FDM snap fits, 0.3 mm for SLA, SLS and MJF; Hubs), so a latched lid can rattle slightly. The sloped front of the hook tolerates a little misalignment when closing.
- **access_needed**: one side only (blind): the press pad is on the outside of the housing; leave room for a finger and for the arm to swing
- **materials**: Moulded: tough, springy thermoplastics. Covestro's example is an instrument housing in polycarbonate (Makrolon), with the bar and arm moulded with the lower housing in one shot (Covestro, p. 6); Xometry Pro suggests nylon or polycarbonate for fatigue resistance. 3D printed: PETG, ABS or nylon (SLS PA12 is best for snap fits; PLA and standard resins are brittle; Hubs). One maker's proof-of-concept torsion snap was printed in PLA and needed careful tuning (Printables 151102).
- **maker_difficulty**: moderate to hard: it prints as part of the box, but getting the bar's stiffness right takes trial and error (the maker of a test set calls it 'the most complicated version'), and a printed bar can take a permanent twist (Printables 151102). A plain cantilever catch is easier.

### Making it

- **processes**: 
  - injection moulding: the usual method; the bar and arm are moulded with one housing half in a single shot (Covestro, p. 6)
  - 3D print (FDM): possible, with tuning (Printables 151102)
  - 3D print (SLS or MJF nylon): the best printed material for snap fits in general (Hubs) *(unverified parts omitted)*
- **print_in_place**: yes: the arm and torsion bar print already working as part of one housing half, while the part it catches on is printed separately (as in the top and bottom pieces of Printables 151102)
- **making_tips_3d_printing**: Orientation: keep the torsion bar lying in the plane of the print bed (its length along X or Y), never standing up in Z, so the layer joints don't run across the bar where the twist is carried; Bar shape: a rectangular cross-section worked better than a round one, a fairly long bar twists without taking a permanent set, and you should make the bar's dimensions easy to edit because they set the stiffness (kaje, Printables 151102). Keep the twist small: Covestro's formula (see rules of thumb) shows the safe twist angle grows with bar length and falls with bar thickness. Arm: give the lever a thick 'backbone' so it doesn't snap, and angle the lever end slightly away from the neighbouring wall so it has room to swing (Printables 151102). Add fillets where the bar meets its posts (Hubs recommends a fillet at least half the thickness at snap-arm roots). Cooling: let the print cool completely before you work the catch, or the bar will take a permanent twist and stop springing (Printables 151102). Clearance: start around 0.5 mm between the hook, arm and surrounding walls for FDM (Hubs). Material: PETG, ABS or nylon for repeated use; PLA is fine for a first test (kaje printed PLA with 2 perimeters and 0% infill) but is brittle and creeps. Rest state: design the bar so it is untwisted when the catch is shut, because plastic springs held under load relax (DuPont, p. 36). Typical failures: bar takes a set and the hook no longer catches (cool fully, use a longer bar, lower the twist, switch to PETG or nylon); arm snaps (thicken it); hook or arm fused to the wall (more clearance, check elephant's foot). *(unverified parts omitted)*
- **off_the_shelf_parts**: Usually none: the catch is part of the moulded or printed part. Ready-made alternatives to search for: 'rocker latch', 'push button latch', 'plastic snap latch', 'cabinet catch'. For a longer-lived spring, a separate arm on a metal pin with a 'torsion spring' does the same job with more parts.
- **rules_of_thumb**: 
  - Twist angle and hook travel: sin(phi) = y1/l1 = y2/l2, where y is the deflection at a point on the arm and l is its distance from the bar (Covestro, Snap-Fit Joints for Plastics, p. 18).
  - Largest safe twist for a round bar: phi_max (degrees) = (180/pi) x gamma_max x l / r, where l is the bar length and r its radius, so a longer, thinner bar can twist further (Covestro, p. 18).
  - Allowable shear strain: gamma_max is about (1 + nu) x epsilon_max, which is about 1.35 x epsilon_max for plastics (Poisson's ratio nu about 0.35), where epsilon_max is the material's permissible (bending) strain (Covestro, p. 18). Covestro's one-time strain limits include 4% for Makrolon PC and 2.5% for Bayblend PC/ABS; for frequent opening use about 60% of these (Covestro Table 2, p. 12).
  - Worked example (our calculation from Covestro's formulas, not from the guide): PC for frequent use, epsilon = 0.6 x 4% = 2.4%, so gamma is about 3.2%; a round bar 2 mm in diameter and 10 mm long then twists safely up to about 57.3 x 0.0324 x 10 / 1, roughly 18.6 degrees.
  - Force to tip the arm: P1 x l1 = P2 x l2 = gamma x G x Ip / r, doubled when the arm sits between two bars; Ip = pi x r^4 / 2 for a solid round bar, and the shear modulus G = Es / (2(1 + nu)) from the secant modulus Es (Covestro, p. 19).
  - For non-round bars, the angle of twist is theta = T x l / (K x G), with torsional constants K for common sections in DuPont Table 4.02 (DuPont, General Design Principles for Engineering Polymers, Module I, p. 15).
  - Snap features should return to a stress-free state after latching (Covestro, p. 3); plastic springs suit intermittent action, and constantly loaded springs should be spring steel (DuPont, p. 36).
  - 3D-printed snap fits: about 0.5 mm clearance for FDM (0.3 mm for SLA, SLS, MJF), root fillets at least 0.5 x thickness, minimum 5 mm width, avoid building the flexing part in Z, use tough materials such as SLS nylon, ABS, PETG (Hubs, How to design snap-fit joints for 3D printing).
  - Printed torsion bars: rectangular profile better than round; relatively long bar; let the print cool fully before flexing (kaje, Printables 151102).

### When to use it

- **everyday_examples**: 
  - Instrument and equipment housings whose cover opens when you press one end of a rocker catch that is moulded into the case (Covestro Fig. 5, a polycarbonate instrument housing)
  - Mobile-phone battery covers held by a twisting-beam latch and released with a thumb tab (Ericsson patent US 5,924,749) *(unverified parts omitted)*
- **when_to_use**: Use it for lids, battery doors, access covers and housing halves that people open often by pressing a button or tab, when you want the whole catch moulded or printed into one part with no metal spring. It suits places where the release has to be pressed from a different spot than the hook (the see-saw lets you press on one side and lift the hook on the other), where a low, flush catch is wanted, and where you want the spring spread along a bar instead of concentrated at the root of a bending arm.
- **when_not_to_use**: Avoid it for heavy loads, for closures that must not open if knocked or dropped, and for child-resistant or security closures: use a draw (over-centre) latch, a metal spring latch or a lock. For a quick printed project, a plain cantilever snap or a compliant latch with a press tab is easier to get right. Avoid it where the catch must keep a lid pressed hard against a seal, because a plastic bar held twisted creeps; use screws or a draw latch. In PLA, or in hot places, expect the bar to lose spring; use PETG, ABS or nylon, or a separate arm with a metal torsion spring.
- **environment_limits**: Plastic springs under constant load or deflection creep and relax, and temperature and chemicals change their spring properties (DuPont, p. 36), so the bar should rest untwisted when shut. Nylon's allowable strain changes with moisture (Zytel 101: 4% dry, 6% at 50% relative humidity for one-time assembly; DuPont Table 10.06, p. 75). *(unverified parts omitted)*
- **safety_notes**: Low hazard. A cracked or relaxed catch can let a lid fall open, so don't rely on one to hold anything heavy overhead or anything that must stay shut for safety. Small printed parts are a choking hazard for young children.
- **common_failures**: The bar takes a permanent twist and the hook no longer catches (creep, or flexing a print before it has cooled): keep the twist within the frequent-use strain, make the bar longer, rest it untwisted, and use PETG, ABS or nylon. The bar or arm cracks after repeated use (fatigue, which Xometry Pro names as the main weakness of torsional snaps): add fillets, lower the twist angle, choose a tougher plastic. The arm snaps in half: give it a thicker backbone (Printables 151102). It won't open or opens too easily: change the hook depth, the back-face angle or the bar stiffness. The lever rubs on the housing: angle it away from the wall and add clearance. The hook fuses to the wall in printing: more clearance.
- **related**: 
  - Cantilever snap fit: the hook is on a bending arm instead of a twisting bar; simpler, the most common snap, but the strain is concentrated at the arm's root
  - Compliant latch (flexure latch): a one-piece bending-beam latch with a press or lift tab; the easier printed alternative
  - Annular snap fit: a bead all round a round part; not normally opened by pressing a button
  - Twist-to-lock (rotational) snap or bayonet: sometimes also called 'torsional' in supplier guides, but you turn the whole part to engage it
  - Draw latch (over-centre latch): pulls a lid tight and is stronger and better for seals, but has several parts
  - Spring-loaded rocker latch: the same see-saw arm, but pivoting on a pin with a separate metal spring; stronger and longer-lived
  - Torsion bar (in suspensions and hinges): the same twisting-spring idea used to carry larger loads

### Pictures, videos and models

- **links**: 
  - [Snap-Fit Joints for Plastics: A Design Guide (Covestro, formerly Bayer)](https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf): Fig. 5 (p. 6): drawing of a torsion snap joint on a polycarbonate instrument housing, with the torsion bar labelled and the opening force P; Fig. 21 (p. 18): coloured diagram of a snap-fitting arm on a torsion bar with the deflections and twist angle marked; p. 19: photo of a moulded snap-fitting rocker arm *(licence: link only (manufacturer's design guide))*
  - [Snap-fit Joints for Plastics: Types, Design, Selection (Xometry Pro)](https://xometry.pro/en/articles/snap-fit-joints-for-plastics/): Article with an illustration of a torsional snap fit alongside the other snap-fit types, plus a comparison of load capacity and reusability *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Snap-Fit Joint Test Prints - Eight Versions, by kaje](https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions): Eight printable snap-fit test pieces based on the Bayer/Covestro guide, including a working torsion snap (Fig. 5 in the guide) with the maker's notes on bar shape, length and cooling; OnShape CAD linked from the page (read through the Printables API) *(licence: Creative Commons Public Domain (CC0))*
- **diagram_idea**: A side view and a top view of a box edge with a see-saw arm on a thin bar: frame 1, the lid pushes the sloped hook and the bar twists (curved arrow on the bar); frame 2, the hook drops behind the lid's lip; frame 3, a finger presses the pad on the far side of the bar and the hook tips up clear, with the bar highlighted as the spring.
- **sources**: 
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://en.wikipedia.org/wiki/Snap-fit
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://xometry.pro/en/articles/snap-fit-joints-for-plastics/
  - https://www.rapiddirect.com/blog/snap-fit-design/
  - https://www.clarwe.com/blog/guide-to-snap-fit-joints-types-design-and-manufacturing.html
  - https://firstmold.com/tips/snap-fits/
  - https://www.fictiv.com/articles/how-to-design-snap-fit-components
  - https://patents.google.com/patent/US5924749A/en
  - https://patents.google.com/patent/US5628533A/en
  - https://www.youtube.com/watch?v=SlUFQMtsoaM (title verified via YouTube oEmbed)
  - https://www.printables.com/model/151102-snap-fit-joint-test-prints-eight-versions (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, everyday_examples, links, making_tips_3d_printing, processes, reuse_cycles, special_behaviour

## 47 Snap pin (split-leg push-in pin, rabbit clip)

*snap & clip fits.* A pin with split, springy legs and a barb that squeezes through a hole and springs open to hold two parts together

### What it is

- **plain_name**: A small plastic peg with a slit up its end: the two halves squeeze together as you push it through a hole, then spring apart so a little lip on each half catches on the far side and holds the parts together
- **term**: Snap pin (split-leg snap-fit pin)
- **aliases**: 
  - snap pin / snap-fit pin / snap-fit peg
  - split-leg push-in pin / split pin connector (not the same as a metal split cotter pin)
  - pin connector / parametric snap pins (3D-printing names, e.g. Emmett Lalishe's 'Parametric Snap Pins' on Thingiverse, which BOSL2's snap_pin() is based on)
  - rabbit clip (BOSL2 name for the flat, rectangular version with two flexible 'ears')
  - slotted snap-fit (DuPont) / discontinuous annular snap joint (Covestro)
  - pin-pivot (a snap pin used as a hinge pin; Maker Club)
  - snap rivet / push-in fastener / arrow clip (commercial nylon versions; some snap rivets are two-piece)
  - HEYClip (brand; Heyco's slotted-leg nylon push-in fasteners)
- **family**: snap & clip fits
- **other_families**: print-in-place & 3D-printing joints, hinges & pivots
- **one_liner**: A separate peg whose split, springy legs squeeze through a hole and spring open behind it, so barbs on the legs hold two parts together, either fixed or as a pivot.
- **complexity**: Single piece (the pin), used with holes or sockets in the two parts. In plain words: a head or collar (or a second set of legs, on double-ended pins); a round or flat-sided shank split by a slot into two springy legs (tines); a barb, lip or nub near each leg tip with a sloped front and a steeper back; often a pointed tip. The parts have a hole, or a socket with a wider pocket or shoulder inside, for the barbs to catch behind.
- **how_it_works**: As you push the pointed tip into the hole, the sloped barbs ride on the hole's edge and squeeze the two legs towards each other across the slot, each leg bending like a small cantilever. When the barbs pass the far edge of the hole (or reach a wider pocket inside a socket), the legs spring apart and the barbs' back faces catch, so the pin can't pull back out. Covestro notes that slitting a round snap joint makes the load mainly bending, so each leg is designed as a cantilever snap arm (Covestro, p. 5), and DuPont notes that slots allow much deeper undercuts at the cost of holding force (DuPont, pp. 73-74). Double-ended printed pins have legs at both ends and snap into a socket in each part; a small 'preload' makes the pin slightly short so it pulls the two parts tight, and a flat-walled socket stops it turning while a round one lets it spin as a pivot (BOSL2 joiners.scad). The flat 'rabbit clip' works the same way but is a curved strip that can be made very thin (BOSL2).

### Finder attributes

- **job**: join and hold: pins two printed or panel parts together, let it move (turn, slide or bend): in a round socket or hole it becomes a hinge or pivot pin (BOSL2 fixed=false; Maker Club pin-pivots)
- **motion**: none in a flat-walled (fixed) socket; rotate, a full 360 degrees, when used as a pivot in a round socket; the legs themselves flex only while the pin is pushed in or out
- **degrees_of_freedom**: 0 in a fixed socket; 1 (turning about the pin) when used as a pivot; plus a little end float if the pin is longer than the parts it joins
- **special_behaviour**: 
  - self-aligning or self-centring: the pointed tip and sloped barbs guide the pin into the hole and squeeze the legs as it goes in (kaje, Printables 262409)
  - tensioning (takes up slack and holds): with a preload the pin is slightly short, so the springy legs pull the two parts together (BOSL2 snap_pin preload)
  - none otherwise: it simply holds
- **holding_principle**: shape (the parts interlock; form-fit): the barbs catch behind the edge of the hole, spring force (a spring or springy part presses it in place): the springy legs push the barbs outward
- **input_output**: not applicable: it holds or pivots but doesn't pass on motion
- **power**: passive (no power needed)
- **removability**: removable: squeeze the legs together from the far side and push the pin back out, or pry under the head (a small flat screwdriver behind the cap is used for Printables 585701). With square (90 degree) barb backs or BOSL2's locking flanges it becomes semi-permanent (can be undone but may damage parts): BOSL2 says lock=true makes the clip 'very hard or impossible to remove', and DuPont says a 90 degree return angle makes a snap fit permanent
- **tools_needed**: none to fit (finger pressure; a vice or clamp helps with stiff pins); to remove, fingers or small pliers to squeeze the legs from the far side, or a small flat screwdriver under the head
- **seal**: none
- **load**: Light. Strong sideways (shear), because the shank fills the hole; much weaker when the parts are pulled apart along the pin, because only the barbs and bending legs resist, and slots trade holding force for easier fitting (DuPont, pp. 73-74). A Maker Club pivot pin could be unclipped with 'a bit of push on the tip'. Printed legs are weakest if their layers run across the bending direction.
- **adjustable**: no: tightness is set by the design. BOSL2 says to make pins tighter increase `preload` and/or decrease `clearance`
- **play_and_precision**: Small: BOSL2's default clearance is 0.2 mm; kaje used a hole 2% bigger than the peg (10.2 mm for 10 mm); a Maker Club pivot pin used a 0.5 mm gap all round so it turns freely. Pins locate parts reasonably well but not precisely; use dowels for exact alignment. *(unverified parts omitted)*
- **access_needed**: both sides: a through-pin is pushed in from one side, but removing it needs the far side to squeeze the legs. Double-ended pins in blind sockets are fitted between the parts and end up hidden, with no access needed after assembly (but no easy removal either)
- **materials**: 3D printed: PETG, ABS or nylon are best for snap fits, while PLA and standard resins are brittle (Hubs); PLA works for test pieces (kaje, Printables 262409) and occasional use. Commercial: nylon 6/6 (Heyco HEYClip, rated 0 to 85 degrees C). Joins printed parts to each other, and thin sheets of metal, plastic, composite or wood (Heyco).
- **maker_difficulty**: easy to moderate: pins print in minutes and parametric libraries such as BOSL2 generate matching pins and sockets, but the fit depends on your printer and filament, so print a test pair first

### Making it

- **processes**: 
  - 3D print (FDM): the usual maker method; pins are printed separately, lying on a flat side
  - 3D print (SLS or MJF nylon): the most durable printed snap-fit material (Hubs)
  - injection moulding: commercial nylon push-in fasteners and snap rivets
  - off-the-shelf part: nylon slotted-leg push-in fasteners (Heyco) *(unverified parts omitted)*
- **print_in_place**: no: the pin is printed as its own part, lying flat, and pushed in afterwards; the holes or sockets are printed into each part (BOSL2 snap_pin and snap_pin_socket)
- **making_tips_3d_printing**: Orientation: print the pin lying on its side, not standing up, so the layers run along the legs and the bending never pulls layers apart. That is why printable snap pins have two flat sides: BOSL2's pins 'have flat sides so they can be printed', and Maker Club flattened the whole bottom of the pin for bed adhesion and the top of the legs to simplify printing (Hubs gives the same rule for snap arms: avoid building them in Z). Sockets: print them with the pin axis vertical; BOSL2's socket can include two thin fins as supports when printed tip-up, and has flat walls (fixed=true) so the pin can't turn, or a round shape (fixed=false) for a pivot. Shape: make the tip pointed so it guides the pin in and pre-squeezes the legs, and consider splitting the peg in only one place with barbs on just two small sections for a stronger peg (kaje, Printables 262409). Clearance: start from BOSL2's 0.2 mm, or a hole about 2% bigger than the pin (kaje), and 0.5 mm radial gap for a pin that must turn freely (Maker Club); tighten by adding preload or reducing clearance (BOSL2). Barbs: a 30 degree lead-in eases entry; a 45 degree back face lets the pin be removed, 90 degrees makes it permanent (DuPont, p. 73). Keep the leg strain within the frequent-use limit if you will take it apart often (DuPont Table 10.06). Material: PETG, ABS or nylon for repeated use; PLA for one-off tests. Typical failures: legs snap at the root on the first insertion (print on the side, add a fillet, make the slot and barbs shallower, use PETG or nylon); pin too loose or falls out (add preload, reduce clearance, deepen the barbs); pin won't go in (more clearance, check elephant's foot at the socket mouth); pin works loose as a pivot (use a head on both ends or a locking clip).
- **off_the_shelf_parts**: Nylon push-in fasteners with slotted legs (search 'HEYClip' (brand), 'push-in fastener', 'nylon snap rivet', 'arrow clip', 'snap-in circuit board support'); two-piece 'snap rivet' (halves snap together). Related metal parts with different names: 'split pin' or 'cotter pin' (legs bent open by hand), 'hitch pin' and 'R-clip', 'spring pin' (roll pin, held by friction), 'quick-release pin' (ball-lock pin).
- **rules_of_thumb**: 
  - BOSL2 standard snap pin sizes (length / diameter / snap (barb height) / leg thickness): standard or large 10.8 / 7 / 0.5 / 1.8 mm; medium 8 / 4.6 / 0.45 / 1.4 mm; small 6 / 3.2 / 0.4 / 1.0 mm; tiny 4 / 2.5 / 0.25 / 0.8 mm; default clearance 0.2 mm and preload 0.1-0.2 mm (BOSL2 joiners.scad, snap_pin()).
  - Rabbit clip: make the socket about 0.4 mm deeper than the clip; defaults are 0.1 mm 'compression' (ears made over-wide so the clip is snug) and 0.1 mm clearance (BOSL2 joiners.scad, rabbit_clip()).
  - A slotted round snap joint is dimensioned as a set of cantilever arms (Covestro, Snap-Fit Joints for Plastics, p. 5); for frequent separation use about 60% of the one-time strain limit, e.g. 4% for polycarbonate one-time (Covestro Table 2, p. 12).
  - Slots allow much deeper undercuts, usually at the sacrifice of retaining force; a 45 degree return bevel suits most separable joints, a 90 degree return makes a permanent joint (the hole must then be open at the far end), and a 30 degree lead-in bevel eases entry (DuPont, General Design Principles, Module I, pp. 73-74).
  - Allowable strain for snap legs, used once / used frequently: acetal Delrin 100 8% / 2-4%; nylon Zytel 101 dry 4% / 2%, at 50% RH 6% / 3% (DuPont Table 10.06, p. 75).
  - Printed snap-fit peg that worked: 10 mm peg in a 10.2 mm hole (1.02 x for clearance), 0.8 mm thick retainers, a single split forming a 60 degree gap, 4 mm long point (kaje, Printables 262409).
  - Printed pivot pin: pin radius 1.5 mm in a 2 mm radius hole (0.5 mm gap all round), split gap about 1.2 mm at its widest narrowing to zero, head radius 2.4 mm versus 2.2 mm at the barbs (Maker Club, 2015).
  - 3D-printed snap features: 0.5 mm clearance for FDM (0.3 mm for SLA, SLS and MJF), minimum 5 mm width for snap arms, root fillet at least 0.5 x thickness, don't build flexing arms in Z (Hubs).
  - Commercial nylon 6/6 slotted-leg push-in fasteners cover panels up to 6.4 mm (0.25 in) thick and mounting holes of 0.089 to 0.260 in (about 2.3 to 6.6 mm), rated 0 to 85 degrees C (Heyco HEYClip).

### When to use it

- **everyday_examples**: 
  - White nylon push-in clips and snap-in supports that hold circuit boards and thin panels in electronics (Heyco HEYClip push-in fasteners)
  - Printed pins that join modular storage baseplates, e.g. snap-lock pins for Gridfinity baseplates (Printables 585701)
  - Snap-together toys and printed articulated models whose limbs pivot on split pins (Maker Club pin-pivots) *(unverified parts omitted)*
- **when_to_use**: Use it to join separately printed parts (a big model split to fit the printer, a box and its hinge, modular tiles) without glue or screws, when you might want to take them apart again, or to make a quick hinge pin that snaps in and turns. Commercial nylon versions suit fixing thin panels, boards and covers into punched or drilled holes by hand in seconds. Good for light loads, low cost and fast assembly.
- **when_not_to_use**: Avoid it for heavy loads or strong pulling along the pin, for parts that must be very precisely aligned, and for joints that must be taken apart many times a day: use screws with heat-set inserts, dowel pins with screws, a quick-release (ball-lock) pin, or a clevis pin with a split pin or R-clip. Avoid snap pins where you can't reach the far side to squeeze the legs if you will need to remove them. For panels and car trim where the back isn't reachable, use a push-in plastic rivet (fir-tree clip or push-type retainer). For a permanent join of printed parts, heat staking, glue or a pressed-in pin may be simpler.
- **environment_limits**: Nylon push-in fasteners are rated for about 0 to 85 degrees C (Heyco HEYClip). Nylon absorbs moisture, which changes its size and springiness (DuPont Table 10.06 gives different strain limits dry and at 50% relative humidity). Plastic parts held under constant load creep and relax (DuPont, p. 36), so a preloaded pin slowly loses its grip. Heyco describes its nylon fasteners as vibration-, abrasion- and corrosion-resistant. *(unverified parts omitted)*
- **safety_notes**: Small pins are a choking hazard: Maker Club warns its pins are a swallowing hazard for children under three. Otherwise low hazard.
- **common_failures**: Legs crack or snap off at the root, often on the first insertion (layers across the legs, too much squeeze, brittle PLA): print pins on their flat side, use PETG, ABS or nylon, make the barb or undercut smaller, and add a fillet. Pin is loose or falls out (too much clearance, barbs too shallow, legs relaxed over time): add preload, reduce clearance, deepen the barbs or use a fixed socket. Pin pops out when pushed on the tip, especially pivot pins (Maker Club): put the pin where the tip can't be pushed, or use a head on both ends. Pin won't go in: too little clearance or elephant's foot at the hole mouth; chamfer the hole.
- **related**: 
  - Cantilever snap fit: the same bending hook, but moulded onto one of the parts instead of on a separate pin
  - Annular snap fit: a continuous bead all round, with no slots; stronger but needs much smaller undercuts
  - Push-in plastic rivet (fir-tree clip, push rivet): pushes into a blind hole from one side and grips with ribs or legs spread by a centre pin; used for car trim
  - Split pin (cotter pin): a metal pin whose legs you bend open by hand after fitting; for locking bolts and clevis pins
  - Hitch pin and R-clip: a plain pin held in by a springy wire clip; quick to remove by hand
  - Quick-release pin (ball-lock pin): a metal pin with spring-loaded balls and a release button; strong and made for frequent removal
  - Heat staking: a plastic post melted over into a rivet head; permanent
  - Dowel pin (press-fit pin): a plain pin held by friction, for accurate alignment
  - Filament rivet: a piece of 3D-printer filament with its ends melted into heads, used as a printed pivot (Hackaday)

### Pictures, videos and models

- **links**: 
  - [BOSL2 wiki: joiners.scad (snap_pin, snap_pin_socket, rabbit_clip)](https://github.com/BelfrySCAD/BOSL2/wiki/joiners.scad): Rendered images of snap pins upright and laid flat for printing, sockets with and without fins (one cut open to show the inside), and rabbit clips and sockets including locking and double versions *(licence: BOSL2 code and documentation BSD 2-clause; the pin design is based on Emmett Lalishe's Thingiverse pins under CC BY-SA (per the BOSL2 source))*
  - [Maker Club: pin-pivots to improve snap-together 3D printed parts (2015)](http://www.mkrclub.com/2015/04/pin-pivots-to-improve-snap-together-3d.html): Blog post with pictures of a split snap pin used as a pivot, including the flattened print-ready shape and its dimensions *(licence: link only)*
  - [DuPont, General Design Principles for Engineering Polymers (Module I)](https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf): Fig. 10.13 (p. 74): a slotted snap-fit; Fig. 10.12 and Table 10.05 (p. 73): cylindrical snap-fit terms and lead and return angles *(licence: link only (manufacturer's design guide))*
  - [HEYClip Nylon Push-In Fasteners (Heyco)](https://www.heyco.com/products/heyware/circuit-board-supports/heyclip-nylon-push-in-fasteners/): Product page with pictures of one-piece nylon push-in fasteners whose slotted legs compress through a hole and spring back *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [BOSL2 OpenSCAD library: snap_pin(), snap_pin_socket() and rabbit_clip()](https://github.com/BelfrySCAD/BOSL2/wiki/joiners.scad): Parametric OpenSCAD modules that generate matching snap pins, sockets and flat rabbit clips in preset sizes, with clearance, preload, locking and fixed or rotating sockets (source read at https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad) *(licence: BSD 2-clause (BOSL2); snap pin geometry based on CC BY-SA Thingiverse designs)*
  - [Snap Fit Peg Concept - Proof of Concept Test Model, by kaje (URL from Printables API, page not opened)](https://www.printables.com/model/262409-snap-fit-peg-concept-proof-of-concept-test-model): A test print of a single-split, pointed snap-fit peg with the maker's dimensions and OnShape/STEP files (read through the Printables API) *(licence: Creative Commons Public Domain (CC0))*
  - [Snap-lock Pin for Gridfinity Screw Together Baseplate, by Gad_Gad (URL from Printables API, page not opened)](https://www.printables.com/model/585701-snap-lock-pin-for-gridfinity-screw-together-basepl): Printable snap-lock pins that join two Gridfinity baseplates through their holes and can be popped out with a small flathead (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Quick snap pin connectors, by Stillpointx (URL from Printables API, page not opened)](https://www.printables.com/model/232869-quick-snap-pin-connectors): Snap pin connectors to add to your own models so printed parts snap together (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA))*
- **diagram_idea**: Three cut-away frames of a pin going through two plates: (1) the pointed tip enters and the sloped barbs squeeze the two legs together across the slot; (2) the barbs clear the far face and the legs spring apart; (3) a pull arrow on the plates meets the barbs' back faces, with a side note showing the pin lying on its flat side on a print bed.
- **sources**: 
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://github.com/BelfrySCAD/BOSL2/wiki/joiners.scad
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - http://www.mkrclub.com/2015/04/pin-pivots-to-improve-snap-together-3d.html
  - https://www.heyco.com/products/heyware/circuit-board-supports/heyclip-nylon-push-in-fasteners/
  - https://www.assemblymag.com/articles/85900-fastening-christmas-trees-ain-t-just-for-december
  - https://en.wikipedia.org/wiki/Split_pin
  - https://brickset.com/article/65112/a-look-at-this-year-s-new-technic-pins
  - https://hackaday.com/tag/rivet/
  - https://www.youtube.com/watch?v=wXB3VfBBcdU (title verified via YouTube oEmbed)
  - https://www.printables.com/model/262409-snap-fit-peg-concept-proof-of-concept-test-model (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/585701-snap-lock-pin-for-gridfinity-screw-together-basepl (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/232869-quick-snap-pin-connectors (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, links, play_and_precision, processes, reuse_cycles

## 48 Push-in plastic rivet (fir-tree clip, push rivet)

*snap & clip fits.* A ribbed or expanding plastic pin that pushes into a hole and grips, as used for car trim and panels

### What it is

- **plain_name**: A plastic pin you push into a hole with your thumb and it grips: either its stem is covered in springy fins like a little pine tree that fold back going in and catch, or it has split legs that a centre pin spreads apart. The black clips that hold car door panels, bumpers and wheel-arch liners
- **term**: Push-in plastic rivet (push rivet; ribbed-shank 'fir-tree' clip)
- **aliases**: 
  - push rivet / push-in rivet / plastic rivet / nylon rivet
  - push-type retainer / push retainer / push pin clip / push clip (automotive two-piece type with a centre pin)
  - trim clip / panel clip / body clip / retainer clip / retaining clip
  - Christmas tree clip / fir tree clip / pine tree clip / Xmas tree clip (one-piece ribbed type; WCL writes 'Christmas Tree(R) Clips', so the name may be a registered trademark)
  - barbed rivet (Accu) / fin clip (ASSEMBLY magazine) / ribbed-shank push-in rivet (McMaster-Carr)
  - drive rivet / drive-pin rivet (two-piece: a pin driven into a slotted body spreads it)
  - snap rivet (two-piece: the halves lock with an annular snap) and ratchet rivet (two-piece with serrated teeth; McMaster's 'two-piece push-in rivets with adjustable shank')
  - pop pin, push-to-lock clip (automotive slang, per Pliersman)
- **family**: snap & clip fits
- **other_families**: interlocking joints & joinery, clamping, magnetic & friction connections
- **one_liner**: A plastic pin that you push into a plain hole from one side, where springy fins or spreading legs grip behind or inside the hole, so panels and trim can be fixed in seconds without screws, nuts or tools.
- **complexity**: Single piece (ribbed fir-tree clip) or a few parts (two-piece push-type retainer, drive rivet, snap or ratchet rivet). In plain words: a head (flat, domed or countersunk, sometimes with a foam or rubber skirt); a stem (shank) covered in angled fins, or split into legs; on two-piece types, a centre pin that is pushed down into the split stem, or a washer or cap that snaps onto the stem from the back. The parts being joined only need a hole.
- **how_it_works**: Fir-tree clips: the stem carries rows of angled fins pointing back towards the head. Pushing the clip into the hole folds the fins in; once they pass through (or inside a blind hole) they spring back out, and because they slope the 'wrong' way for coming out they resist being pulled back (ASSEMBLY; McMaster-Carr: angled ribs 'slide in easily and prevent pull out'). Because several rows of fins are spaced along the stem, one clip grips a range of panel thicknesses, and in soft materials it can grip a blind hole (WCL). Push-type retainers: the body has split legs; you push it into the hole, then push the centre pin flush (or pre-assemble it to the first click and push the whole clip in), which wedges the legs apart behind the panel (Printables 24596; Pliersman: 'the pin insert goes inside the rivet and expands the stem'); levering the pin back out lets the legs relax so the rivet can be pried out (Pliersman). Drive rivets work the same way but the pin is driven with a hammer, and snap or ratchet rivets are two halves pushed together from both sides of the panel (ASSEMBLY; McMaster-Carr).

### Finder attributes

- **job**: join and hold: fixes panels, trim, liners, covers, upholstery and cable clips to a panel or frame through a plain hole
- **motion**: none
- **degrees_of_freedom**: 0: once fitted the parts are held, though a slightly loose fit lets them shift a little
- **special_behaviour**: none: it simply holds. Two-piece push-type retainers can be released by lifting the centre pin (usually with a forked tool), after which the body lifts out whole (Pliersman)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): fins or spread legs catch behind the far side of the hole
  - friction or clamping (force-fit): in blind holes and soft materials the fins grip the hole wall instead of catching behind it (WCL)
  - spring force (a spring or springy part presses it in place): the springy fins or legs press outward against the hole
- **input_output**: not applicable: it is a holding joint
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): they are pulled or pried out with a forked tool, but fins get chewed and centre pins snap; McMaster says the one-piece ribbed type is popped out with a tool, and the two-piece washer type is removed by prying apart or cutting. Drive rivets whose pin breaks the bottom of the body, and ratchet rivets, are effectively permanent (ASSEMBLY)
- **reuse_cycles**: a few times: 'You can pull them out and reuse them two or three times. After that, the fins get boogered up, and they don't retain as well' (ASSEMBLY, 2008); a printed replacement's designer rates his push rivets 'single or maybe two-use', like the official ones (Printables 24596)
- **tools_needed**: None to fit: push with your thumb (McMaster-Carr); drive rivets have their pin tapped in with a hammer (ASSEMBLY). To remove: trim-clip pliers or a forked pry tool (McMaster lists prying tools with flat forked jaws, gripping tools and 30 and 80 degree bent-nose versions for awkward spots). A flat screwdriver works but presses on one point of the pin head and tends to break it (Pliersman)
- **load**: Light. Holds panels and trim against pulling off, vibration and sideways shifting (shear is carried by the stem in the hole). Pull-out force examples: about 31 lb (about 140 N) for a fastener in 0.197 in (5 mm) holes in HDPE panels 0.08-0.402 in thick, and about 175 lb (about 780 N) for larger fasteners in particle board (ASSEMBLY). Not for structural joints.
- **adjustable**: no, but it adapts: the finned stem grips a range of panel thicknesses (WCL lists grip ranges from 0.035-0.070 in up to 1.520-2.290 in, depending on size), and two-piece ratchet rivets fit different stack thicknesses, with excess shank clipped off (McMaster-Carr; ASSEMBLY)
- **play_and_precision**: Noticeable: the fins tolerate a range of hole sizes and thicknesses, so they don't locate parts precisely and the panel may shift slightly in its hole. Use a separate locating pin if parts must line up exactly.
- **access_needed**: one side only (blind) for one-piece fir-tree clips and two-piece push-type retainers; both sides for two-piece snap or ratchet rivets that use a washer or cap on the back (McMaster: the washer type needs access to both surfaces)
- **materials**: Usually nylon 6 or nylon 6/6; also polyethylene, polypropylene, thermoplastic elastomer (TPE) and acetal copolymer (ASSEMBLY). They join sheets of metal, plastic, composite, rubber, wood, foam, fibre board, upholstery and particle board (ASSEMBLY; Accu). Printed replacements: PETG, ABS, ASA or nylon (nylon preferred; Printables 24596 and 1209513), or TPU for flexible fir-tree trim clips (Printables 1243486).
- **maker_difficulty**: easy: buy an assortment and push them in; printing replacements is moderate, because the small springy legs need tough filament, fine layers and the right print orientation

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice; assortments of automotive sizes are cheap
  - injection moulding: how commercial rivets are made (usually nylon)
  - 3D print (FDM): replacements and custom sizes (many models on Printables), in PETG, ABS, ASA, nylon or TPU *(unverified parts omitted)*
- **print_in_place**: no: one-piece clips print as a single solid part, and two-piece push rivets are printed as a body and a separate pin, then assembled (Printables 1511900 and 24596)
- **making_tips_3d_printing**: Measure first: the hole diameter, the total thickness of the panels (the grip range) and the head size you need; copy the original part's numbers if you are replacing a car clip (e.g. Printables 1511900 is based on the dimensions of a Honda 6 mm clip). Orientation: print a two-piece rivet body standing on its head with the legs pointing up, and print the pin lying on its flat side so its layers run along its length (Printables 1511900); many designers give the pin flat sides for this. Design: splitting the stem in only one place makes a stronger stem, a slightly pre-spread stem stays in the hole even before the pin goes in, and a positive catch keeps the pin from backing out (Printables 1511900). Some printed ribbed rivets have a centre hole for a steel split pin or a stainless screw to stiffen them (Printables 1209513). Settings: 100% infill, fine layers (0.1-0.12 mm) and at least 3 perimeters (Printables 1511900, 1209513, 24596). Material: PETG, ABS, ASA or nylon; nylon is closest to the original clips (Printables 24596). Don't use PLA under a car or near engines: road heat can deform it; choose PETG or anything that handles more than about 69 degrees C (Printables 1810800). Fir-tree clips with thin fins work well in TPU, printed slowly (20-30 mm/s) with 3 walls and no supports; hard filaments make the fins too rigid (Printables 1243486). If slotted legs are too stiff in nylon, use the version without slots (Printables 24596). Typical failures: legs snap off in the hole (print orientation, too brittle a material, too small a hole), fins too stiff to enter or too soft to hold (change material or fin thickness), the pin head breaks when removing (use a forked tool, not a screwdriver).
- **off_the_shelf_parts**: Search: 'push rivet', 'push-type retainer', 'trim clip assortment', 'panel clip', 'Christmas tree clip' or 'fir tree clip', 'ribbed shank push-in rivet', 'drive rivet', 'snap rivet', 'two-piece push-in rivet with washer', 'nylon rivet'. Removal tools: 'trim clip pliers', 'push pin remover', 'panel clip pliers', 'trim removal tool'. Related hardware: 'well nut' and 'rivet nut' (for screws into blind holes), 'blind rivet' (metal pop rivet).
- **rules_of_thumb**: 
  - Hole size: 'A hole size anywhere from 1/8 to 3/4 inch is good', with 1/4 to 3/8 inch the optimum; undersized holes stop the fastener working and oversized ones 'defeat the purpose' (ASSEMBLY, 'Fastening: Christmas Trees Ain't Just for December', 2008).
  - Reuse: about two or three removals before the fins stop retaining well (ASSEMBLY, 2008).
  - Pull-out force examples: about 31 lb from 0.197 in holes in HDPE panels (0.08-0.402 in thick); about 175 lb for larger fasteners in particle board (ASSEMBLY, 2008).
  - Nylon ribbed-shank push-in rivets: temperature range -40 to 145 degrees F (-40 to 63 degrees C); nylon absorbs moisture from the air, which changes its dimensions; catalogue ranges cover material 0.03 to 2 in thick and holes 0.125 to 0.394 in (McMaster-Carr, Christmas tree clips).
  - Nylon 6/6 slotted-leg push-in fasteners are rated 0 to 85 degrees C (32 to 185 degrees F) and cover panels up to 0.25 in (6.4 mm) (Heyco HEYClip).
  - Match the fastener to both the hole diameter and the total panel thickness (grip range); ribbed clips are made in grip ranges from about 0.035-0.070 in to 1.520-2.290 in and hole sizes 0.120-0.315 in (WCL Christmas Tree clips).
  - Printed 6 mm push rivet that works: 6 mm hole, 14.1 mm head, one split in the stem, pin printed on its side, PETG at 0.12 mm layers and 100% infill (Printables 1511900).
  - Printed automotive push pin: 8 mm hole, 5 mm grip, 20 mm flange, PETG or nylon, 0.20 mm layers, 3 perimeters, 100% infill (Printables 24596).

### When to use it

- **everyday_examples**: 
  - Car interiors and bodywork: door panels, upholstery, radiator shrouds, wheel-arch liners and under-engine covers (ASSEMBLY; Printables 1810800 replaces a Toyota underbody rivet)
  - Appliances and electronics: back panels, heat-sink mounting and cable routing (ASSEMBLY)
  - The black plastic rivet holding the gear cover plate inside a Yamaha K-340 cassette deck (Wikimedia Commons photo)
  - The two-part plastic push rivets supplied to blank off spare holes in the Original Prusa enclosure (Printables 341553)
- **when_to_use**: Use it to fix thin panels, trim, liners, covers, foam, fabric or cable clips to sheet metal, plastic or wood through a plain drilled or punched hole, especially when you can only reach one side, want no visible screws or nuts, and want fitting to take seconds with no tools. It is also the easy way to replace missing car clips, to close spare holes, and to hold parts that you may need to remove occasionally.
- **when_not_to_use**: Avoid it for structural or heavy loads, for parts that must be exactly positioned, for joints that are taken apart often (they wear out after two or three removals), and for sealed or waterproof joints. Use screws with well nuts or rivet nuts for blind holes that need frequent removal, metal blind (pop) rivets for permanent strong sheet joints, quarter-turn fasteners for service panels opened often, or a split snap pin or cantilever snap for printed parts you design yourself. Avoid PLA printed versions anywhere hot, such as under a car.
- **environment_limits**: Nylon push-in rivets are rated about -40 to 63 degrees C (McMaster-Carr) or 0 to 85 degrees C for Heyco's nylon 6/6 clips; nylon absorbs moisture, which changes its size (McMaster-Carr) and its springiness (DuPont Table 10.06 gives different strain limits dry and at 50% relative humidity). Plastic springs under constant load creep and relax (DuPont, p. 36), so clips slowly lose grip on a panel they are squeezing. Printed PLA deforms from road heat under a car; use PETG or a filament rated above about 69 degrees C (Printables 1810800). *(unverified parts omitted)*
- **safety_notes**: Low hazard. Clips and centre pins are small enough to be a choking hazard for young children. *(unverified parts omitted)*
- **common_failures**: The centre pin head snaps off when you try to lift it with a screwdriver (Pliersman): use trim-clip pliers or a forked tool that lifts evenly around the head. Fins get chewed and the clip no longer holds after two or three removals (ASSEMBLY): replace it. Wrong size: an undersized hole won't let it enter, and an oversized hole or too-thin panel means the fins don't bite (ASSEMBLY); match hole size and grip range. Old or cold nylon clips crack: replace with new ones. Printed clips deform in heat (PLA) or snap at the legs (wrong orientation or brittle filament). *(unverified parts omitted)*
- **related**: 
  - Snap pin (split-leg push-in pin): the same squeeze-through-a-hole idea as a separate peg for joining printed parts; usually fitted through a hole with a far side you can reach
  - Cantilever snap fit: the hook is moulded onto one of the parts instead of on a separate fastener
  - Blind rivet (pop rivet): a metal rivet set from one side with a tool that pulls a mandrel; permanent and much stronger
  - Blind threaded fixings (rivet nut, well nut): give a screw thread in a blind hole, for parts that are removed often
  - Quarter-turn fastener: a stud that locks a panel with a quarter turn; made for panels opened again and again
  - Heat staking: a plastic post melted into a rivet head; permanent
  - Cable tie mounts and edge clips: similar push-in stems used to route cables

### Pictures, videos and models

- **links**: 
  - [Plastic bodywork rivet pulling pliers (Wikimedia Commons, photo by Andy Dingley)](https://commons.wikimedia.org/wiki/File:Plastic_bodywork_rivet_pulling_pliers.jpg): Photo of the hand tool made for releasing and removing the plastic rivets used on car bodywork *(licence: CC BY-SA 4.0)*
  - [Yamaha K-340 transport, side view, plastic rivet (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Yamaha_K-340_transport_-_side_view_-_plastic_rivet.jpg): Photo of a reusable black plastic rivet holding a gear cover plate inside a cassette deck *(licence: CC0 1.0 (public domain dedication))*
  - [Christmas Tree Clips (McMaster-Carr)](https://www.mcmaster.com/products/christmas-tree-clips/): Catalogue drawings and specifications of ribbed-shank push-in rivets, two-piece adjustable push-in rivets with washers, and rivet removal tools *(licence: link only)*
  - [Fastening: Christmas Trees Ain't Just for December (John Sprovieri, ASSEMBLY magazine, 2008)](https://www.assemblymag.com/articles/85900-fastening-christmas-trees-ain-t-just-for-december): Trade-magazine article describing Christmas tree (fin) clips, arrow clips, snap rivets, ratchet rivets and drive-pin rivets, with hole sizes, pull-out forces and reuse *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [6mm Push Rivet / Panel Clip, by avionix (URL from Printables API, page not opened)](https://www.printables.com/model/1511900-6mm-push-rivet-panel-clip): A printable two-piece push rivet for 6 mm holes with a single-split stem, side-printed pin and positive pin retention; scalable (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Push-In Rivets with Ribbed Shank, by Michael Hathaway (URL from Printables API, page not opened)](https://www.printables.com/model/1209513-push-in-rivets-with-ribbed-shank): Printable ribbed-shank (fir-tree) push-in rivets with STEP file, plus versions with a centre hole for a steel split pin or screw (read through the Printables API) *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Parametric plastic rivet family, by LuluX (URL from Printables API, page not opened)](https://www.printables.com/model/210655-parametric-plastic-rivet-family): Three parametric Fusion 360 plastic rivet designs (male and female parts) for joining sheets of plastic, plywood, metal or fabric; PETG preferred (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA))*
  - [Automotive Trim Clip Assortment (TPU Only), by Matt Richardson (URL from Printables API, page not opened)](https://www.printables.com/model/1243486-automotive-trim-clip-assortment-tpu-only): Fir-tree style trim clips in 3 stem widths and 6 head sizes, designed to be printed in flexible TPU (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial (CC BY-NC))*
  - [Push Pin Clip / Push Rivet / Retaining Clip (Nissan, Infiniti), by Scottmi (URL from Printables API, page not opened)](https://www.printables.com/model/24596-push-pin-clip-push-rivet-retaining-clip-nissan-inf): A printable two-piece automotive push-type retainer for 8 mm holes, with notes on materials and fitting (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
- **diagram_idea**: Two cut-away side views through a panel and a backing sheet: left, a fir-tree clip whose angled fins fold in as it is pushed through and spring out behind the sheet; right, a push-type retainer before and after the centre pin is pushed flush, showing the pin wedging the split legs apart behind the panel.
- **sources**: 
  - https://www.assemblymag.com/articles/85900-fastening-christmas-trees-ain-t-just-for-december
  - https://www.mcmaster.com/products/christmas-tree-clips/
  - https://www.wclco.com/plastic-components/panel-fasteners/panel-fasteners-ribbed-shank/christmas-tree-clips-single-head/
  - https://accu-components.com/us/shop/precision-components/rivets/plastic-rivets/barbed-rivets
  - https://www.heyco.com/products/heyware/circuit-board-supports/heyclip-nylon-push-in-fasteners/
  - https://pliersman.com/automotive-push-pin-pliers/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://en.wikipedia.org/wiki/Rivet
  - https://commons.wikimedia.org/wiki/File:Plastic_bodywork_rivet_pulling_pliers.jpg
  - https://commons.wikimedia.org/wiki/File:Yamaha_K-340_transport_-_side_view_-_plastic_rivet.jpg
  - https://www.youtube.com/watch?v=pQbeatWr4SQ (title verified via YouTube oEmbed)
  - https://www.printables.com/model/1511900-6mm-push-rivet-panel-clip (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1209513-push-in-rivets-with-ribbed-shank (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/210655-parametric-plastic-rivet-family (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1243486-automotive-trim-clip-assortment-tpu-only (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/24596-push-pin-clip-push-rivet-retaining-clip-nissan-inf (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1810800-car-plastic-underbelly-rivet (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/341553-original-prusa-enclosure-push-rivet (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, links, processes, safety_notes, seal

## 172 Press stud (snap fastener, popper)

*snap & clip fits.* A small metal or plastic stud that snaps into a socket with a springy ring, as on clothing and bags

### What it is

- **plain_name**: A little round metal or plastic button in two halves that you press together until it clicks, and pull apart to open, like the poppers on a baby's bodysuit or a denim jacket
- **term**: Snap fastener (press stud)
- **aliases**: 
  - press stud, popper, snap, snap button, press button, press fastener, dome fastener (Wikipedia 'Snap fastener')
  - tich, tich button (British/regional; Wikipedia)
  - Druckknopf (German)
  - ring snap, utility snap, line snap, ring-spring snap (heavier snaps whose socket holds a split ring spring; KAMsnaps; YKK)
  - spring snap, S-spring snap, parallel-spring snap (socket holds two wires kept in place by a small spring; Kat Makes; Rome Fastener)
  - open-ring snap, prong snap, pronged snap, gripper snap (the cap has pointed prongs that push through the fabric; KAMsnaps; Kat Makes)
  - sew-on snap (flat snaps stitched on by hand; Kat Makes)
  - plastic resin snap, KAM snap (KAM is a brand; KAMsnaps)
  - screw stud, cloth-to-surface snap (a stud that screws into a boat deck or wall so fabric can snap onto it; canvas-boat-cover-and-repair-advisor.com)
  - DOT Durable, Baby Durable, Line 20 / Line 24 (brand and product-line names from Scovill / DOT, often used as generic sizes)
  - Lift-the-DOT and Pull-the-DOT (brands): directional locking snaps that only open when lifted or pulled at the marked side (Wikipedia)
- **family**: snap & clip fits
- **other_families**: cord, strap, webbing & textile hardware, quick-release & tool-free
- **one_liner**: A two-part fastener in which a stud with a small knob is pressed into a socket that has a springy ring or wire inside, which grips a groove on the stud and holds the two halves together until they are pulled apart by hand.
- **complexity**: A few parts: one closure usually has four pieces, a socket and a stud (the working halves) each fixed to the material by an eyelet (post) or a decorative cap (Rome Fastener; Wikipedia gallery 'Rivet snap parts'); the socket contains the spring (a round split-ring spring, a parallel 'S' spring of two wires, or a segmented spring; Rome Fastener). Sew-on snaps are just two flat halves with holes for thread; pronged snaps use a pronged cap or ring instead of an eyelet.
- **how_it_works**: One half carries a stud with a rounded head and a narrow neck (groove) under it; the other half is a socket with a springy ring or pair of wires just inside its opening (Rome Fastener: 'the spring in the socket grips a groove in the stud to hold both sides together'). Pressing the halves together pushes the spring aside as the head passes, then the spring closes back into the groove, giving the click; a firm pull spreads the spring again and the halves separate (Wikipedia: a lip fits into a groove, 'holding them fast until a certain amount of force is applied'). Ring-spring sockets give a stiff, strong hold for heavy fabric and leather, while spring (S-wire) sockets 'gently hang on to the stud' for a softer action (Kat Makes; KAMsnaps). Directional versions such as Lift-the-DOT lock on three sides and only release when the marked side is lifted (Wikipedia).

### Finder attributes

- **job**: 
  - join and hold: holds two layers of fabric, leather, canvas or thin sheet together
  - lock, and release by hand: opened with a pull, no tools; directional types (Lift-the-DOT, Pull-the-DOT) only open when lifted or pulled at the marked side (Wikipedia; Components Direct)
- **motion**: none: it is a closed fastener, though a round stud in a round socket usually lets the two halves swivel around the stud's axis
- **degrees_of_freedom**: 0 for most uses (it just holds the two layers together); in practice the snapped halves can usually spin around the stud (1 rotation), because both the stud and the socket are round
- **special_behaviour**: 
  - quick-release: pulls apart by hand in a moment, which is why it was used on military and paratroop equipment, holsters and children's clothing (Wikipedia)
  - hand-release only: directional Lift-the-DOT and Pull-the-DOT snaps lock on three sides and only open when lifted or pulled at the marked side (Wikipedia; canvas-boat-cover-and-repair-advisor.com) *(unverified parts omitted)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the head of the stud sits behind the ring or wires in the socket
  - spring force (a spring or springy part presses it in place): the split ring or S-wire spring in the socket presses into the stud's groove (Rome Fastener)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the two halves snap apart by hand as often as you like; the halves themselves are set permanently into the material by riveting (rolling or crushing the post), prongs or stitching, so removing a set snap usually destroys it (Rome Fastener; Wikipedia)
- **reuse_cycles**: effectively unlimited opening and closing for the life of the garment or cover (DOT says Durable fasteners give 'a firm grip that will remain secure through years of use'; Scovill); fitting to the material is once only
- **tools_needed**: To fit: a setting tool (a punch-like 'setter' and a shaped anvil) plus a hammer or mallet for rivet-style snaps (Wikipedia; Kat Makes), or snap pliers or a bench/hand press (Wikipedia; Scovill); plastic KAM snaps need special pliers or a snap press (Kat Makes); sew-on snaps need only a needle and thread; a hole punch or cutter for heavy canvas unless the snap is self-piercing (DOT Durable is self-piercing; Components Direct). To open: none.
- **seal**: none: it only holds layers together; water and dust can pass around it
- **load**: Heavier ring-spring and 'Durable' snaps hold much more than spring or pronged snaps (KAMsnaps; Scovill). No reliable holding-force figures were found; the pull needed to unsnap, both straight out and sideways, is measured with ASTM D4846 'Standard Test Method for Resistance to Unsnapping of Snap Fasteners' (ASTM store page), but results depend on brand, size and fabric. *(unverified parts omitted)*
- **access_needed**: both sides to fit a rivet-style or pronged snap, because the setter and anvil must be on opposite sides of the material; one side only for a screw stud screwed into a hard surface (canvas-boat-cover-and-repair-advisor.com); one side only to open or close
- **materials**: Usually brass (often nickel-plated), steel, stainless steel (316 stainless for marine and corrosive use; Components Direct), brass/stainless and brass/plastic combinations, or all plastic (Scovill DOT Durable page; KAMsnaps). Suits fabric, leather, canvas, vinyl and webbing; open-ring (pronged) snaps suit thin and stretchy fabrics but not 'tough, thick or dense material' (KAMsnaps). Screw studs let fabric snap onto fibreglass, wood or metal. 3D-printed snaps work in PLA or PETG (Printables models).
- **maker_difficulty**: easy: buy a kit with the setting tool and hammer them on, after a test on scrap; printed snaps are also easy but weaker

### Making it

- **processes**: 
  - off-the-shelf part: the normal choice; metal or plastic snaps set with a hand tool, pliers or press
  - sewing and leatherwork: sew-on snaps, or rivet-style snaps set through fabric or leather
  - 3D print (FDM): printed sew-on or snap-together poppers in PLA or PETG (Printables models)
  - woodwork / boat work: screw studs screwed into hard surfaces
- **print_in_place**: no: the stud and socket halves are printed as separate parts, then sewn, glued or screwed on and snapped together
- **making_tips_3d_printing**: 2) Print both halves flat on the bed with no supports; makers report good results at 0.15 mm layers, in PETG with a 0.6 mm nozzle (volly's 'very flat snap fastener' for a wallet, used for two months) or in PLA with 5% infill (nortmann_c's 'Snap Button'), and in PLA without brim for a strap extender (Vik's parametric 10 mm popper extension). 3) Expect the first press to need 'quite some force' (nortmann_c), then the fit eases. 4) Use PETG or another tough material for snaps opened often; *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'snap fastener', 'press stud', 'popper', 'snap button'; by type 'ring socket snap', 'S-spring snap' / 'spring snap', 'open-ring snap' / 'prong snap' / 'gripper snap', 'sew-on snap', 'plastic resin snap' / 'KAM snap', 'magnetic snap'; marine 'screw stud' and 'DOT Durable' / 'Baby Durable' / 'Line 20' / 'Line 24' snaps (brand names used as sizes); directional 'Lift-the-DOT' and 'Pull-the-DOT' (brands). Parts to match: cap (button), socket, stud and eyelet (post) of the same size series. Tools: 'snap setter and anvil', 'snap setting pliers', 'snap hand press' / 'foot press' with dies for the size.
- **rules_of_thumb**: 
  - Sizes are given in lignes (lines): 1 ligne = 0.635 mm, so line 14 is about 9 mm, line 16 about 10 mm, line 20 about 12-12.7 mm and line 24 about 15 mm (Ata Buttons size chart; KAMsnaps).
  - Use line 20 for general use and line 24 for thicker material and heavy-duty use; open-ring (pronged) snaps are for thin material and are 'not suited for tough, thick or dense material' (KAMsnaps).
  - All four parts (cap, socket, stud, post) must come from the same size series: 'Mixing sizes will cause snap failure' (Ata Buttons size chart).
  - Choose the eyelet or post length to suit the total material thickness; makers sell 'a range of post lengths to accommodate a variety of material thicknesses' (Rome Fastener; Scovill DOT Durable page).
  - Stiff ring (utility) snaps on delicate fabric can tear it: 'if you pull on the fabric to un-snap the snap, the fabric will rip before the snap comes apart' - use spring or plastic snaps, or add interfacing, on thin fabrics (Kat Makes).
  - Add a layer of interfacing behind pronged snaps on delicate fabrics (Kat Makes).
  - A properly set snap should not spin: 'a snug crimp puts less strain on the snap and the material' (canvas-boat-cover-and-repair-advisor.com).

### When to use it

- **everyday_examples**: 
  - Poppers on baby bodysuits and children's clothes (Wikipedia; CPSC recall notices)
  - Pearl snaps on Western shirts and snaps on denim jackets and anoraks (Wikipedia; Kat Makes)
  - Boat covers, bimini tops and tonneau covers snapped onto screw studs (canvas-boat-cover-and-repair-advisor.com)
  - The 10 mm stud on an antistatic wrist strap, and snap closures on wallets, bags and holsters (Wikipedia gallery; Printables wallet repair)
- **when_to_use**: Use press studs when fabric, leather, canvas or thin flexible sheet has to close and open quickly, by hand, many times: clothing, baby clothes, bags, wallets, holsters, covers, straps and pouches. They are fast to open, don't snag (Wikipedia), look neat, and a kit makes them easy for a beginner to fit. Use screw studs to snap fabric onto a boat, wall or other hard surface, and directional Lift-the-DOT or Pull-the-DOT snaps where covers must not pop open in the wind (Wikipedia).
- **when_not_to_use**: Avoid them for joining rigid parts that carry real loads (use screws, a snap fit designed into the parts, or a latch), for anything that must seal (use a zip with a flap, a roll-top or a gasket), where the fastener will be peeled or tugged often in normal use (it will pop open; use a buckle, hook or zip), and on very thin or delicate fabric with stiff ring snaps (the fabric can tear first; use spring snaps, plastic snaps or sew-on snaps; Kat Makes). For adjustable closures use hook-and-loop fastener or a ladder-lock buckle; for one-handed, blind closing a magnetic snap may be easier.
- **environment_limits**: Salt water corrodes plated steel and can dull brass: stainless steel 'holds its finish better and is stronger than the brass crimp' (canvas-boat-cover-and-repair-advisor.com), and 316 stainless snaps are made for harsh, corrosive environments (Components Direct). Directional Pull-the-DOT and Lift-the-DOT snaps need lubricating as they age, the latter about twice a year (canvas-boat-cover-and-repair-advisor.com). *(unverified parts omitted)*
- **safety_notes**: Snaps that come off baby clothes are a choking hazard, and broken ones can expose small sharp prongs: the US CPSC has recalled infant bodysuits because 'the snaps ... can detach and also expose small sharp prongs, posing choking and laceration hazards to young children' (CPSC recall, 5 May 2022). Set snaps firmly, test them, and check baby clothes for loose snaps. Keep fingers clear of the setter when hammering.
- **common_failures**: The snap pulls out of the fabric or tears it (thin fabric, no interfacing, too stiff a ring snap, or a post too short for the thickness; Kat Makes; Rome Fastener). The snap spins or wobbles because the crimp is loose (canvas-boat-cover-and-repair-advisor.com). It won't close, or pops open, because parts from different size series were mixed (Ata Buttons) or the socket was crushed while setting (spring snaps need a special tool 'to avoid crushing'; Kat Makes). Marine snaps seize or corrode (lubricate and use stainless; canvas-boat-cover-and-repair-advisor.com). People tug on a directional Pull-the-DOT snap from the wrong side and tear the canvas, and the tiny spring in a Lift-the-DOT socket can get sprung so it no longer fits over the stud (canvas-boat-cover-and-repair-advisor.com). On baby clothes, snaps detach (CPSC). *(unverified parts omitted)*
- **related**: 
  - Hook-and-loop fastener: grips over an area and is adjustable, but is noisy, collects lint and grips less positively
  - Basic strap and garment closures (prong buckle, button, toggle and loop): cheaper and sewn, but slower to open and close
  - Magnet joint (embedded magnets, magnetic catch) and magnetic snaps: close blind and one-handed, but hold less against a direct pull
  - Annular snap fit: the same bead-and-groove idea moulded or printed into rigid round plastic parts
  - Cantilever snap fit: a springy hook for joining rigid plastic parts
  - Side-release buckle: stronger and quick-release for straps and webbing
  - Spring-gate hook (carabiner, snap hook, lobster clasp): for loops and rings rather than flat layers
  - Ball detent (spring plunger): a spring-loaded ball in a groove, the same 'spring into a groove' principle used to click parts into positions
  - Spring-steel push-on fasteners (push nut, speed nut, U-nut): the ball-stud speed clip is a sheet-metal cousin that snaps panels onto a ball stud

### Pictures, videos and models

- **links**: 
  - [Rivet snap parts.jpg (Wikimedia Commons, Nate Wessel)](https://commons.wikimedia.org/wiki/File:Rivet_snap_parts.jpg): Photo of the four parts of a rivet snap fastener: eyelet, socket, cap and stud *(licence: CC BY-SA 4.0)*
  - [Druckknopf.jpg (Wikimedia Commons, Grkauls)](https://commons.wikimedia.org/wiki/File:Druckknopf.jpg): Photo of the two halves of a riveted leather snap fastener, showing the stud and the grooved socket *(licence: Public domain (released by the author))*
  - [S spring snap.jpg (Wikimedia Commons, Ploytubtum)](https://commons.wikimedia.org/wiki/File:S_spring_snap.jpg): Photo of an S-spring (spring socket) snap fastener *(licence: CC BY-SA 4.0)*
  - [Sewing snap rivet tools.jpg (Wikimedia Commons, Nate Wessel)](https://commons.wikimedia.org/wiki/File:Sewing_snap_rivet_tools.jpg): Photo of the hand setting tools used to attach rivet snaps to fabric or leather *(licence: CC BY-SA 4.0)*
  - [Snap Fastener Installation Tool Demo (YouTube, Sailrite)](https://www.youtube.com/watch?v=OlRwHwo6eW8): Video demonstrating how to set snap fastener parts with a hand setter and anvil *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [very flat snap fastener - i.e. for wallets or fabric (volly, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/49554-very-flat-snap-fastener-ie-for-wallets-or-fabric): A printable, very flat sew-on press stud made to repair a wallet; printed in PETG at 0.15 mm layers with a 0.6 mm nozzle; the maker used it for two months *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Snap Button (nortmann_c, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/120769-snap-button): A printable sew-on snap button for clothes that works like a metal one; prints in PLA at 0.15 mm layers without supports; needs a firm first press *(licence: CC BY-NC-SA)*
  - [Variable Snap Button Fastener (Deus_Sen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1392813-variable-snap-button-fastener): A printed snap fastener whose pin has several notches so it can hold materials of different thicknesses; short-pin and long-pin versions; printed in PETG *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Popper (Snap Fastener) Extension, 10mm Parametric (Vik, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/958317-popper-snap-fastener-extension-10mm-parametric): A printed strip with a 10 mm male snap on one end and a female on the other to lengthen a bag strap; parametric OpenSCAD file; prints in PLA without support *(licence: GNU GPL v3.0)*
  - [marine snap fastener (SmilingImpact, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/226469-marine-snap-fastener): A 3D-printable snap fastener half designed to connect to real-world marine snap fasteners *(licence: CC BY)*
- **diagram_idea**: A cut-away side view in three frames: the stud's round head approaching the socket, the split ring (or two S-spring wires) pushed outwards as the head passes, and the ring springing back into the groove under the head, with a small inset showing the four parts (cap, socket, stud, eyelet) clamped on either side of two fabric layers.
- **sources**: 
  - https://en.wikipedia.org/wiki/Snap_fastener
  - https://www.romefast.com/Snap-Fastener-Components.asp
  - https://kamsnaps.com/pages/choosing-the-right-metal-snaps
  - https://www.katmakes.com/blog/2018/6/28/the-home-sewists-guide-to-baby-snaps
  - https://www.scovill.com/products/industrial/sporting-goods-industrial/dot-durable/
  - https://info.components-direct.com/choosing-the-correct-dot-fastener
  - https://www.atabuttons.com/snap-button-size-chart
  - https://www.canvas-boat-cover-and-repair-advisor.com/boat-cover-snaps.html
  - https://store.astm.org/d4846-96r21.html
  - https://www.cpsc.gov/Recalls/2022/Winter-Water-Factory-Recalls-Infant-French-Terry-Jumpsuits-Rompers-Snap-Suits-Baby-Dresses-and-Bibs-Due-to-Choking-and-Laceration-Hazards
  - https://commons.wikimedia.org/wiki/Category:Snap_fasteners
  - https://commons.wikimedia.org/wiki/File:Rivet_snap_parts.jpg
  - https://commons.wikimedia.org/wiki/File:Druckknopf.jpg
  - https://commons.wikimedia.org/wiki/File:S_spring_snap.jpg
  - https://commons.wikimedia.org/wiki/File:Sewing_snap_rivet_tools.jpg
  - https://www.youtube.com/watch?v=OlRwHwo6eW8
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** adjustable, common_failures, environment_limits, load, making_tips_3d_printing, play_and_precision, special_behaviour

## 173 Spring-steel push-on fasteners (push nut, speed nut, U-nut)

*snap & clip fits.* Stamped spring-steel clips whose prongs bite onto a plain shaft or screw when pushed on, fast to fit and resistant to shaking loose

### What it is

- **plain_name**: A thin springy steel washer or clip with little teeth that you just push onto a plain rod or a screw; the teeth slide on easily but dig in if anything tries to pull it off or shake it loose, like the cap that keeps a wheel on a toy or lawnmower axle
- **term**: Spring-steel push-on fastener (push nut, speed nut, U-nut)
- **aliases**: 
  - push nut, pushnut, push-on nut, push-on fix, push-on retainer, push-on fixing washer, shaft retaining washer, speed washer (Woodstock Industrial; Fastenright; Jet Press)
  - Starlock washer (registered brand; the catalogue used here is B&F Fasteners' with Titgemeyer (GTO) part numbers; not to be confused with Bosch's 'Starlock' multi-tool blade mount)
  - cap push nut, capped pushnut, dome cap, axle cap, top-hat pushnut, spiderfix (Starlock catalogue; Jet Press)
  - push-on retaining ring, self-locking retaining ring, toothed push-on ring, grooveless retainer ring (Rotor Clip TX/TY/TI rings; Tinnerman 'Grooveless Retainer Rings'; Wikipedia 'Retaining ring')
  - speed nut, sheet metal nut, spring nut, flat-type speed nut, Tinnerman nut (Tinnerman is a brand; Wikipedia 'Speed nut')
  - Palnut push-on (brand, ARaymond/Tinnerman)
  - U-nut, U-clip, spire clip, chimney U-nut; J-nut; clip-on nut (Wikipedia 'Clip-on nut')
  - tubular speed clip, stud receiver, ball-stud speed clip (Tinnerman catalogue)
- **family**: snap & clip fits
- **other_families**: clamping, magnetic & friction connections, one-way & ratchet
- **one_liner**: Stamped, heat-treated spring-steel clips whose angled teeth or prongs slide over a plain shaft, stud or screw thread when pushed on and then bite into it, holding parts on without cutting a thread or groove and resisting vibration.
- **complexity**: Single piece: one stamped and heat-treated spring-steel part (sometimes with a pressed-on dome cap of stainless steel, plated steel or nylon; Starlock catalogue). Types: round push nuts with a ring of teeth for plain shafts; toothed push-on retaining rings; flat speed nuts with two prongs that act as one screw thread; U- and J-shaped clip-on nuts that clip over a panel edge; tubular clips that snap into a hole and take a plain stud (Wikipedia 'Speed nut' and 'Clip-on nut'; Tinnerman catalogue).
- **how_it_works**: The teeth or prongs are bent slightly away from the direction of pushing, and the hole they leave is a little smaller than the shaft, so pushing the clip on bends the teeth outwards and lets it slide; a pull the other way makes the tooth tips dig into the shaft like a barb, so the clip grips harder the more you pull (Woodstock Industrial: the 'sprung teeth deflect as it is pressed onto a plain shaft and bite against the surface, resisting withdrawal'). A speed nut's two prongs act as a single thread on a screw: as the screw tightens, the arched base flattens and forces the prongs inward against the root of the thread, which locks it against vibration (Wikipedia 'Speed nut'; Tinnerman catalogue p. 5, which calls this a double 'inward thread lock plus an arched spring lock'). U- and J-nuts clip over the edge of a panel and hold themselves in place so a screw can be driven from the front without reaching behind (Tinnerman catalogue pp. 10-11).

### Finder attributes

- **job**: 
  - join and hold: keeps a wheel, knob, panel, trim or emblem on a plain shaft or stud, or acts as a nut for a screw
  - stop it moving back (one-way): push nuts slide on in one direction and resist coming off
- **motion**: none: it fixes a part in place (a wheel held on an axle by a push nut still turns, but the push nut itself does not move)
- **degrees_of_freedom**: 0: once pushed or screwed home it blocks movement along the shaft or screw; a round push nut does not stop a part turning on a round shaft
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): push nuts and push-on rings slide on and bite when pulled back (Woodstock Industrial; Rotor Clip)
  - self-locking (holds under load, won't back-drive): speed nuts resist loosening under vibration through the prong 'thread lock' and the arched 'spring lock' (Tinnerman catalogue p. 5; Wikipedia 'Speed nut')
  - self-aligning or self-centring: U- and J-type speed nuts 'offer floating alignment' so they tolerate small hole misalignment (Tinnerman catalogue p. 10)
- **holding_principle**: 
  - friction or clamping (force-fit): the spring teeth grip the shaft, and a speed nut clamps the panel under screw tension
  - shape (the parts interlock; form-fit): tooth tips bite into the shaft surface, and speed-nut prongs engage the screw thread
  - spring force (a spring or springy part presses it in place): the heat-treated spring steel keeps the teeth pressed on and the speed nut's arch loaded (Tinnerman catalogue p. 5)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: push nuts and push-on rings: permanent to semi-permanent: 'once fixed in position, the Starlock push on fastener is so secure that it cannot be removed without destruction' (Starlock catalogue p. 3), and Rotor Clip says removal may deform the ring or shaft so replacement is recommended; speed nuts and U-/J-nuts: removable, unscrewed like a normal nut (Tinnerman catalogue)
- **reuse_cycles**: once for push nuts and push-on rings (Starlock catalogue; Rotor Clip; McMaster-Carr: 'For one-time use only' for push-on retaining rings); many times for speed nuts and U-nuts, which the maker describes as 'ideal for service locations, reused indefinitely' (Tinnerman catalogue p. 5)
- **tools_needed**: Push nuts: none, fingers or a light tap; a simple tube or a hand tool with a magnetic ferrule sized to the shaft seats them squarely (Starlock catalogue p. 26; Speed nuts, U- and J-nuts: a screwdriver; the U- or J-nut is pushed on by hand, and finger pressure stops a flat speed nut turning while the screw is driven (Tinnerman catalogue pp. 8-11). *(unverified parts omitted)*
- **seal**: none: they hold parts on but do not seal; capped push nuts only cover the shaft end for looks
- **load**: light to medium. Push nuts hold against pulling off along the shaft: B&F Starlock rates spring-steel push nuts at about 196 N pull-off on a 3 mm shaft, 392 N on 5 mm, 981 N on 10 mm and 3434-3777 N on 20-25 mm, measured on mild-steel shafts (Starlock catalogue p. 6). Push-on rings suit 'low thrust loads' only (Rotor Clip). Speed nuts are 'light-to-medium duty, built for fast captive retention ... rather than high clamp load' (Eugene Fastener); Tinnerman lists average tensile limits of about 250 lb (1.1 kN) for a #8-32 machine screw and 600 lb (2.7 kN) for a #8 sheet-metal screw (Tinnerman catalogue p. 5). Weak against twisting on round shafts (the push nut can spin) and against prying.
- **adjustable**: Push nuts: no, the position is set by how far it is pushed and it cannot be backed off; speed nuts: yes, by turning the screw, and a 'Prevailing Torque Fit' version is recommended 'when the fastener is used as an adjustment nut' (Tinnerman catalogue p. 5)
- **play_and_precision**: U- and J-nuts deliberately float in the panel to absorb hole misalignment (Tinnerman catalogue p. 10). Speed nuts clamp firmly once tightened. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft for push nuts and push-on rings (pushed over the shaft end); one side only (blind) for U- and J-nuts and tubular clips once clipped in place: 'Access to opposite side is unnecessary' (Tinnerman catalogue p. 11) and tubular clips suit 'attachments where only one side of an assembly is accessible' (p. 23); both sides for loose flat speed nuts, which you hold behind the panel while driving the screw
- **materials**: Made from heat-treated high-carbon spring steel with a phosphate, oil, zinc or varnish finish, or stainless steel for corrosion resistance; some in beryllium copper or phosphor bronze (Tinnerman catalogue; Starlock catalogue; Rotor Clip). Push nuts suit plain shafts of steel, non-ferrous metals and plastic (Starlock catalogue p. 4); push-on rings should go on 'unhardened shafts softer than the ring' (McMaster-Carr). Tinnerman's push-ons 'make a positive bite on metal, plastic or wood' (catalogue p. 21). Speed nuts suit sheet-metal (self-tapping) screws and machine screws in sheet metal, plastic or wood panels.
- **maker_difficulty**: easy: buy the right size and push or screw it on; the main catch is matching the shaft diameter closely (within about ±0.05 mm for small Starlock sizes) or the panel thickness range of a U-nut

### Making it

- **processes**: 
  - off-the-shelf part: the normal choice; the clips are stamped from spring-steel strip (sheet metal) by fastener makers
  - 3D print (FDM): print the shaft, stud, boss or panel that the clip fits onto; the clip itself is best bought, although printed plastic replacements of trim push nuts exist
  - sheet metal: speed nuts and U-/J-nuts on sheet panels *(unverified parts omitted)*
- **print_in_place**: no: it is a separate metal part pushed or screwed onto the printed or wooden part
- **making_tips_3d_printing**: 1) Use a metal pin, rod or screw where you can: push-nut pull-off ratings are measured on mild-steel shafts (Starlock catalogue p. 6), and a plastic shaft will give less grip, though Starlock says push nuts can retain plastic shafts (p. 2) Printed shafts must be very close to size: Starlock's metric push nuts assume a shaft within ±0.05 mm up to 16 mm diameter and ±0.1 mm above (p. 6); 4) Seat the push nut squarely with a tube or socket over the shaft, not by hitting its teeth, so it doesn't tilt and bite crooked (Starlock catalogue p. 5) For panels, a flat speed nut on a sheet-metal (self-tapping) screw can replace a heat-set insert in a thin printed flange; U- and J-nuts only fit panels within their stated thickness range, e.g. 0.041-0.051 in for one #6-32 J-nut (Tinnerman catalogue p. 10), so print the flange to that thickness. 6) Don't overtighten a speed nut on plastic: extra torque beyond the recommended value flattens the spring and 'could result in loss of spring tension resiliency' (Tinnerman catalogue p. 5), and it also crushes the print. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search catalogues (McMaster-Carr, Misumi, fastener wholesalers) for: 'push nut' / 'pushnut' (round, capped, dome cap, hex, 'top hat'), 'push-on retaining ring', 'self-locking retaining ring', 'toothed external push-on ring' (Rotor Clip TX, TY; internal TI), 'grooveless retainer ring', 'Starlock washer' (brand), 'axle cap', 'Palnut push-on' (brand); 'speed nut' / 'flat speed nut' / 'Tinnerman nut' (brand), 'spring nut', 'U-nut', 'J-nut', 'spire clip', 'clip-on nut', 'tubular speed clip', 'ball-stud speed clip'. Push nuts are sized by shaft diameter (about 1.5-30 mm or 1/16-1 1/8 in; Starlock catalogue; Fastenright); round push nuts with flexible teeth also press onto threaded rod 'of any pitch' as a light-duty nut or a jam nut (McMaster-Carr); speed nuts by screw size and type (machine screw such as 8-32, or sheet-metal screw such as #8 'A' or 'B'); U- and J-nuts also by panel thickness range. Installation tools: 'push nut installation tool' with a magnetic ferrule sized to the shaft (Starlock catalogue p. 26; McMaster-Carr).
- **rules_of_thumb**: 
  - Push nuts: shaft tolerance ±0.05 mm up to 16 mm diameter and ±0.1 mm above; the hole in a metric Starlock is a little smaller than the shaft, e.g. 2.58-2.81 mm for a 3 mm shaft and 9.49-9.74 mm for a 10 mm shaft (B&F Starlock catalogue p. 6).
  - Typical spring-steel push-nut forces, push-on / pull-off: 3 mm shaft 108 N / 196 N; 5 mm 118 N / 392 N; 8 mm 216 N / 785 N; 10 mm 284 N / 981 N; 12 mm 441 N / 2453 N; 25 mm 559 N / 3777 N. Pull-off figures are 'for guidance only' and based on EN3B bright drawn mild-steel shafts; stainless versions hold somewhat less, e.g. 294 N on 5 mm and 784 N on 10 mm (B&F Starlock catalogue pp. 6 and 10).
  - Push-on rings are for low thrust loads and unhardened shafts softer than the ring, and are one-time use (Rotor Clip; McMaster-Carr).
  - Speed nuts: use 1.5 threads of machine screw beyond the prongs, and 2-3 threads of a tapered sheet-metal screw, 'to assure proper grip on the full root diameter' (Tinnerman catalogue p. 5).
  - Speed nut average installation torque / tensile limit: #6-32 5 in-lb / 150 lb; #8-32 7 in-lb / 250 lb; #10-24 12 in-lb / 350 lb; 1/4-20 30 in-lb / 600 lb; #8 A or B sheet-metal screw 17 in-lb / 600 lb (about 0.8 N·m / 1.1 kN for #8-32). Torque beyond these values 'is excessive and could result in loss of spring tension resiliency' (Tinnerman catalogue p. 5).
  - Use the recommended minimum clearance holes (e.g. 0.187 in / 4.75 mm for #8 screws) because 'Tinnerman fasteners will withstand greater tensile loads if the screw holes provide minimum clearance'; a thicker speed nut is stronger (Tinnerman catalogue p. 5).
  - Grooveless retainer rings need 'as little as .032 in' (0.8 mm) of shaft sticking out for full anchor and fit round shapes from 0.046 in to 2.00 in (Tinnerman catalogue p. 22).

### When to use it

- **everyday_examples**: 
  - The domed caps that keep wheels on lawnmowers, prams, trolleys and toys (Starlock catalogue p. 4)
  - Clips holding car trim, badges and emblems (Eugene Fastener; Rotor Clip)
  - U-nuts and speed nuts on appliance, electronics and car body panels (Eugene Fastener; Tinnerman catalogue)
  - Push-on rings in cordless drills and on steering wheels, and on window-blind shafts (Rotor Clip)
- **when_to_use**: Use a push nut when you need to keep a wheel, lever, knob, spacer or panel on the end of a plain rod or stud quickly and cheaply, without cutting a thread or a groove, and you won't need to take it apart (toys, carts, furniture, appliances, printed projects with metal pins). Use a speed nut, U-nut or J-nut when you want a nut that won't shake loose, fits sheet metal or thin panels, can be fitted from one side, and costs less than a nut, lock washer and plain washer (Tinnerman catalogue; Wikipedia 'Speed nut').
- **when_not_to_use**: Avoid push nuts where the part must come off for service (use an E-clip or circlip in a groove, a split pin or a nut), on hardened shafts (the teeth can't bite), on loose or undersized shafts, or where there are strong end loads (use a retaining ring in a groove or a shaft collar). Avoid speed nuts for structural or high-clamp joints: 'For load-rated joints use a standard hex or lock nut' (Eugene Fastener). In soft or thick printed parts where you need many reassemblies, a heat-set insert or captive nut is usually better.
- **environment_limits**: Plain or varnished spring steel rusts: Starlock's standard varnish 'will not protect against corrosion but is adequate ... in most dry environments' (Starlock catalogue p. 3); use zinc-coated or stainless versions outdoors. Electroplating high-carbon spring steel can cause hydrogen embrittlement (brittle cracking), so makers use mechanical zinc or zinc-flake coatings instead (Starlock catalogue p. 3; Tinnerman catalogue p. 6). Speed nuts resist vibration (Tinnerman catalogue p. 5). *(unverified parts omitted)*
- **common_failures**: Push nut won't hold: shaft undersized or outside the ±0.05 mm tolerance (Starlock catalogue), shaft too hard for the teeth to bite (McMaster-Carr; Push nut won't come off: by design; cut or pry it off and fit a new one (Starlock; Rotor Clip). Removed push nut re-used and slips: they are single-use (Woodstock Industrial). Speed nut strips or loosens: overtightened past the recommended torque so the spring arch is flattened (Tinnerman catalogue p. 5), wrong screw type, or too few threads through the prongs. U- or J-nut falls off or won't fit: panel thickness outside its range, or a J-nut with a short leg unclipping (Wikipedia 'Clip-on nut': the J-nut 'is free to unclip'). Rust on plain-finish parts outdoors. *(unverified parts omitted)*
- **related**: 
  - Retaining ring (circlip, E-clip): sits in a machined groove, so it holds far more end load and can be removed with pliers
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin): stronger threaded locking for load-bearing joints
  - Self-tapping screw into plastic (thread-forming screw): cuts its own thread in the part instead of using a sheet-metal nut
  - Heat-set threaded insert and Captive nut pocket (nut trap): give a full metal thread in 3D prints for repeated reassembly
  - Blind threaded fixings (rivet nut, well nut): a strong permanent thread in sheet from one side
  - Self-clinching fastener (press-in nut or stud): pressed permanently into sheet metal
  - Push-in plastic rivet (fir-tree clip, push rivet): all-plastic push-in fasteners for trim and panels
  - Internal tube anchors (star nut, expansion plug): a spring-steel star nut uses the same biting-flange idea inside a tube
  - Snap-lock sheet joint (barbed or spring finger): barbs formed in the sheet itself
  - Press fit (interference fit) and Tolerance ring: hold by tightness alone without teeth
  - Press stud (snap fastener, popper): a textile snap; the ball-stud speed clip is its sheet-metal cousin

### Pictures, videos and models

- **links**: 
  - [Two spire clips.jpg (Wikimedia Commons, Lithopsian)](https://commons.wikimedia.org/wiki/File:Two_spire_clips.jpg): Photo of an M6 spire clip (chimney U-nut) for a bolt and a #8 U-clip (speed-nut style) for a self-tapping screw *(licence: CC BY-SA 4.0)*
  - [Tinnerman Parts Catalog (Eaton-era Tinnerman catalogue '383', distributor copy)](https://w5rkl.com/wp-content/uploads/2015/02/Tinnermann-Catelog.pdf): Drawings and 'how to apply' illustrations of flat, twin, J-, U-, push-on, tubular, ball-stud and grooveless-ring spring-steel fasteners, with torque and tensile tables *(licence: link only (manufacturer trade catalogue))*
  - [Push on fasteners: Starlock catalogue (B&F Fasteners, distributed by VIBA)](https://www.viba.nl/media/files//dw-resources/103682%2020456starlocks_-_metric.pdf): Drawings of uncapped, dome-capped, deep-capped and special Starlock push nuts, installation tools, and size and push-on/pull-off force tables *(licence: link only (manufacturer catalogue; reprinting not permitted))*
  - [The Ultimate Retaining Ring Guide (Rotor Clip)](https://www.rotorclip.com/wp-content/uploads/2023/03/UltimateRetainingRingGuide.pdf): Photos and drawings of self-locking and push-on retaining rings (TX, TY, TI, SHF), including a TX ring installed on the end of a metal shaft (pp. 31-33) *(licence: link only (manufacturer guide))*
  - [How To Install Palnut® Push Ons (YouTube, Advance Components)](https://www.youtube.com/watch?v=H52nOSSsEWs): Video showing push-on spring-steel fasteners being installed over plain studs *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Dodge (RAM 2nd gen, others) windshield trim push nut (Maker_of_Toys, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/462378-dodge-ram-2nd-gen-others-windshield-trim-push-nut): A printed plastic replacement for a vehicle trim push nut that goes over a finned (not threaded) stud; shows the limits of printing this kind of part, since the original is a bought fastener *(licence: CC BY-NC-SA)*
- **diagram_idea**: Two side-by-side cut-aways: left, a round push nut with angled teeth sliding onto a rod (arrow 'pushes on easily') and then biting in when pulled back (arrow 'pull-off blocked'); right, a flat speed nut whose arched base flattens as the screw tightens, squeezing its two prongs into the thread root, with a small inset of a U-nut clipped over a panel edge.
- **sources**: 
  - https://en.wikipedia.org/wiki/Speed_nut
  - https://en.wikipedia.org/wiki/Clip-on_nut
  - https://en.wikipedia.org/wiki/Retaining_ring
  - https://w5rkl.com/wp-content/uploads/2015/02/Tinnermann-Catelog.pdf
  - https://www.viba.nl/media/files//dw-resources/103682%2020456starlocks_-_metric.pdf
  - https://www.rotorclip.com/post/product_type/self-locking-and-push-on-retaining-rings/
  - https://www.rotorclip.com/block-collections/self-locking-and-push-on-retaining-rings-block-collection/
  - https://www.rotorclip.com/wp-content/uploads/2023/03/UltimateRetainingRingGuide.pdf
  - https://www.mcmaster.com/products/metric-push-nuts/
  - https://www.mcmaster.com/products/push-nuts/
  - https://www.eugenefast.com/category/products/nuts/speed-nuts/1501
  - https://www.woodstockindustrial.com/starlock.html
  - https://www.fastenright.com/general-fixings/starlock-washers/wsr21
  - https://www.jetpress.com/component-and-fastener-products/fasteners-and-components/threaded-fasteners-and-push-on-fasteners/pushnuts-push-on-fixes
  - https://www.advancecomponents.com/fasteners/palnut-push-ons/
  - https://commons.wikimedia.org/wiki/File:Two_spire_clips.jpg
  - https://www.youtube.com/watch?v=H52nOSSsEWs
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, making_tips_3d_printing, play_and_precision, processes, safety_notes, tools_needed

## 259 Retaining ring (circlip, E-clip)

*snap & clip fits.* A springy metal ring that snaps into a groove on a shaft or in a hole to stop parts sliding off

### What it is

- **plain_name**: A springy steel ring with a gap, or a flat E-shaped clip, that snaps into a groove cut round a rod or inside a hole. The part that sticks out of the groove makes a little step that stops a wheel, bearing, gear or pin sliding off
- **term**: Retaining ring (circlip)
- **aliases**: 
  - circlip (from 'circle' + 'clip'), C-clip, snap ring, 'Jesus clip' (slang) (Wikipedia 'Circlip')
  - external circlip or shaft ring (DIN 471) and internal circlip or bore/housing ring (DIN 472); inch series to ASME B18.27; British BS 3673-4 (Wikipedia 'Retaining ring'; RoyMech circlip index)
  - Seeger ring or Seeger circlip: today's lug-type ring comes from a 1928 Seeger-Orbis patent (Seeger is a brand, often used as a generic name in Europe) (Wikipedia 'Retaining ring')
  - E-clip, E-ring, E-type circlip, retaining washer for shafts (DIN 6799; German 'Sicherungsscheibe'); Benzing ring or Benzing washer (after its inventor Hugo Benzing; brand) (Wikipedia 'Circlip' and 'Retaining ring'; Wikimedia Commons 'ARFISA 02 lock washer.svg')
  - Other shapes a beginner may meet: crescent ring or C-ring, poodle ring or Klip (wide 'ears'), bowed E-ring, bevelled ring, inverted ring, reinforced or heavy-duty ring, interlocking two-piece ring, side-mount ring (Rotor Clip Ultimate Retaining Ring Guide; Wikipedia 'Retaining ring'; McMaster-Carr)
  - spiral retaining ring or coiled ring, e.g. Spirolox (brand, Smalley) (Wikipedia 'Retaining ring'; Smalley blog)
  - push-on retaining ring, toothed push-on ring, self-locking ring, grip ring: types that need no groove (Rotor Clip white paper; McMaster-Carr)
  - Truarc or Waldes Truarc (brand; old US trade name for retaining rings, still used for part numbers) (Rotor Clip part search; Wikimedia Commons 'Internal Snap Ring.jpg')
- **family**: snap & clip fits
- **other_families**: hinges & pivots, clamping, magnetic & friction connections
- **one_liner**: A springy steel ring or clip that snaps into a groove on a shaft or inside a hole, so that the part left sticking out forms a removable shoulder that stops wheels, bearings, gears or pins sliding along or falling out.
- **complexity**: Single piece: one spring-steel ring. Main shapes: a tapered-section circlip with two lugs with holes for pliers; an E-shaped clip with three prongs that pushes on from the side; a coiled spiral ring with no lugs; and a toothed push-on ring for shafts with no groove (Rotor Clip Ultimate Retaining Ring Guide; Wikipedia 'Retaining ring'). It needs a groove of the right size cut in the shaft or bore (except the push-on and self-locking types), and usually a pair of circlip pliers or an E-clip applicator to fit it.
- **how_it_works**: The ring is made a little smaller than the groove (for a shaft) or a little larger (for a bore), so you have to spring it open or squeeze it to fit it, and it then snaps back and grips the groove (Wikipedia 'Circlip': sized for an interference fit and 'elastically deformed' to install or remove). The part of the ring that sticks out of the groove acts as a shoulder: anything pushed along the shaft hits the ring, and the ring passes that push into the side wall of the groove (Rotor Clip Ultimate Retaining Ring Guide). The shaft or the retained part can still turn, because the ring only stops movement along the axis (Wikipedia 'Circlip'). A tapered-section circlip gets wider away from the gap, so it stays round and touches the groove nearly all the way round; an E-clip is pushed on from the side and touches the bottom of the groove with its three prongs (Smalley tapered-section blog; Rotor Clip guide p.19).

### Finder attributes

- **job**: 
  - join and hold: stops a part sliding along or off a shaft, or out of a hole, e.g. keeps a wheel on an axle, a bearing in its housing or a pin in a hinge; it can replace a nut on a threaded end, or a cotter pin and washer (Rotor Clip FAQ; Wikipedia 'Circlip')
  - let it move (turn, slide or bend): the retained wheel, gear or lever can usually still turn on the shaft; the ring only blocks sliding along it (Wikipedia 'Circlip')
  - tighten and hold tension (bowed and bevelled rings only): they press the parts together to take up end play (the small amount the parts can slide along the shaft) (Rotor Clip white paper)
  - stop it moving back (one-way) (toothed push-on rings only): they slide onto a plain shaft one way, and their prongs dig in if pushed back (Rotor Clip white paper)
- **motion**: none along the shaft: it blocks sliding. When it keeps a wheel, pulley or lever on an axle, the joint as a whole is 'rotate' (unlimited turning), because the ring does not stop rotation (Wikipedia 'Circlip').
- **degrees_of_freedom**: Usually 1 (turning about the shaft is left free) when a ring on each side, or a ring plus a fixed shoulder, traps the part. One ring blocks sliding in one direction only, so a second ring, a step in the shaft or a spacer is needed to stop the other direction. A little end play remains unless a bowed or bevelled ring is used (Rotor Clip white paper).
- **special_behaviour**: 
  - none for a plain circlip or E-clip: it is simply a removable shoulder
  - tensioning (bowed rings): a curved ring is flattened as it goes in and then presses on the part like a spring, taking up end play and reducing rattle and vibration (Rotor Clip white paper p.3; Wikipedia 'Retaining ring')
  - self-locking (bevelled rings): a ring with a 15° bevelled edge wedges between the sloped groove wall and the part, so it 'cannot back out, even under load' and leaves no play (Rotor Clip white paper p.4)
  - one-way (toothed push-on and self-locking rings): the prongs dig lightly into a plain shaft, so the ring 'can be moved, therefore, in one direction only' and most must be destroyed to remove them (Rotor Clip white paper p.4)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the ring sits in a groove and blocks the part mechanically; the load goes through the ring into the groove wall (Rotor Clip Ultimate Retaining Ring Guide)
  - spring force (a spring or springy part presses it in place): the ring's own springiness keeps it seated in the groove; a reinforced E-ring 'grips the groove bottom with 3-5 times the radial force' of a plain E-ring (Rotor Clip white paper p.3)
  - friction or clamping (force-fit) (push-on and self-locking rings only): with no groove, the ring holds by its prongs biting into, or gripping, a plain shaft (Rotor Clip white paper p.4; Rotor Clip guide p.30)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: circlips with lug holes come off with circlip pliers, E-clips with a screwdriver or applicator, and spiral rings with a flat blade in the removal notch (Wikipedia 'Retaining ring'; Smalley blog). Some types are semi-permanent: lugless tamper-proof rings and most push-on and self-locking rings 'are permanent once installed and can not be easily removed' (Rotor Clip guide pp.16, 30).
- **reuse_cycles**: a few times. Sources differ: Wikipedia calls retaining rings 'for one time use only', while Smalley says spiral rings 'can often be reused' depending on how hard they were stretched, if inspected first and replaced when bent, and that small rings with no removal notch are destroyed on removal (Wikipedia 'Retaining ring'; Smalley 'Ask the Expert' blog). An over-stretched ring stays open and no longer grips the groove (Rotor Clip FAQ).
- **tools_needed**: Circlip pliers (also called snap-ring or retaining-ring pliers) whose tips fit the lug holes: external pliers open the ring, internal pliers close it; Smalley recommends pliers to DIN 5254 (external) and DIN 5256 (internal) with a stop screw so you can't over-stretch the ring (Smalley tapered-section blog; Wikipedia 'Circlip'). E-clips have no holes and are pushed on with an applicator, or with ordinary pliers in the field, and levered off with a flat screwdriver (Rotor Clip guide p.26; Wikipedia 'Circlip'). Spiral rings go in by hand and come out with a screwdriver (Smalley blog). Push-on rings are pushed on with a simple tube (Rotor Clip guide p.35). Wear safety glasses (Rotor Clip FAQ). Cutting the groove needs a lathe with a grooving tool, unless you buy grooved shafting.
- **seal**: none: there is a gap in the ring and it is not meant to seal.
- **load**: Medium to heavy along the shaft (thrust); it carries no sideways or twisting load, which the shaft and bore take. Example metric external circlips (DIN 471, first-estimate figures, RoyMech): 10 mm shaft: ring 4.0 kN, groove 1.0 kN; 20 mm shaft: ring 17.1 kN, groove 5.0 kN. The groove figures assume a groove material yield strength of 200 N/mm² and a sharp-cornered retained part, with no safety factor. Large rings take far more: Rotor Clip makes rings for thrust loads 'well in excess of 260,000 lbs' (Rotor Clip FAQ). E-clips and other side-fitted rings wrap less of the groove and 'accommodate less force' than lug-type circlips (Rotor Clip guide p.17). The capacity drops sharply if the retained part has a chamfer or rounded corner where it touches the ring (Rotor Clip white paper p.2).
- **adjustable**: no for standard rings: the groove fixes the position (gm0: unlike shaft collars, retaining rings 'cannot be moved along the shaft'). Bowed rings take up small variations in part length on their own; a 'grip ring' can be moved along a plain shaft with pliers and re-used (Rotor Clip white paper). Thin shim washers can take up end play.
- **play_and_precision**: Small but noticeable end play with a standard ring: the groove is slightly wider than the ring (e.g. DIN 471 for a 10 mm shaft: 1.00 mm ring in a groove at least 1.10 mm wide; RoyMech), and the retained parts' tolerances add up. Bowed rings take up the play with spring force, and bevelled rings take it up rigidly (Rotor Clip white paper). The ring locates only along the shaft, so it does nothing for sideways or angular alignment. The groove walls should be square to the axis and the depth kept to specification (Rotor Clip white paper).
- **access_needed**: end of a tube or shaft for lug-type circlips and spiral rings, which slide over the end of the shaft or into the mouth of the bore. E-clips and other side-mount rings go on from the side, so they only need side access to the groove: McMaster lists side-mount rings for 'when you can't access the ends of a shaft' (McMaster-Carr retaining rings). Leave room for the pliers.
- **materials**: Usually carbon spring steel (SAE 1060-1090), with stainless steel (e.g. PH 15-7Mo, 17-7, 302, 420) and beryllium copper for corrosion, heat or non-magnetic, electrically conductive uses (Rotor Clip guide p.37; Smalley standard materials). Finishes include oil, phosphate, zinc plating with chromate, and passivation (Wikipedia 'Retaining ring'). The grooved shaft or housing is normally metal (steel, stainless, aluminium, brass). A groove in a plastic or 3D-printed part holds much less, because the groove's capacity is proportional to the groove material's yield strength (Rotor Clip load formula; RoyMech notes), so use it only for light loads. Push-on and grip rings need soft, unhardened shafts (Rotor Clip white paper; Rotor Clip guide p.34). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: easy when you buy grooved shafts or pins and an assortment of circlips with a pair of pliers (gm0: robotics teams buy goBILDA shafting with an E-clip already fitted); moderate when you have to cut your own groove, which needs a lathe and the groove diameter and width from the ring's standard (Rotor Clip white paper; RoyMech).

### Making it

- **processes**: 
  - off-the-shelf part: the rings are always bought (stamped from strip or coiled from flat wire) (Rotor Clip)
  - CNC: the groove is cut on a lathe (or CNC lathe) with a grooving or parting tool; bores need an internal grooving tool
  - 3D print (FDM): a groove can be printed into a shaft, pin or bore for a metal E-clip or circlip in a lightly loaded part, and simple circlips and E-clips can be printed in plastic (Printables DIN 471 and DIN 6799 models; plusAlpha Designs video)
- **print_in_place**: no: the ring is a separate part. A metal ring is fitted into a printed groove after printing, and printed clips are printed flat on their own and snapped on afterwards.
- **making_tips_3d_printing**: 1) Two approaches: fit a real steel circlip or E-clip into a groove designed into the print (best), or print the clip itself for light, low-value jobs. Printables has ready-made printable DIN 471 (shaft) and DIN 472 (bore) circlip sets and a parametric Fusion 360 DIN 6799 E-clip whose inner and outer diameters, width and thickness you set yourself (Printables models by JBoe and St. Luck). 2) Size the groove from the standard's table, not by guesswork: e.g. for a 10 mm shaft (DIN 471) the groove is 9.6 mm in diameter and at least 1.10 mm wide for a 1.00 mm ring (RoyMech). Then add your printer's clearance: an Original Prusa is 'accurate to at least 0.2 mm' and Prusa suggests starting at 0.3 mm for parts that must move (Prusa knowledge base). 3) Keep the groove at least three groove-depths from the end of the shaft or bore (Rotor Clip edge-margin rule; 4) Orientation: 'like wood, FFF prints are stronger in one direction than another' (Prusa). A shaft printed standing up has its groove wall held only by layer bonding, so an axial load tries to split the layers there. 6) Printed clips: JBoe recommends PLA, PETG or ABS/ASA, 0.1-0.2 mm layers, 100% infill, 3 perimeters, no supports (Printables DIN 471 model). Print them flat so that the ring bends within its layers. Plastic is far less springy than spring steel, so a printed clip grips its groove weakly and PLA ones may crack when spread open; 7) Under a constant push, a plastic groove wall slowly creeps and the ring can walk out; for real loads use a metal shaft with a machined groove, or pick a joint designed for plastic, such as an annular snap fit or a snap pin (see Related). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search catalogues for: 'external circlip DIN 471' or 'external retaining ring' (shafts); 'internal circlip DIN 472' or 'internal retaining ring' (bores); 'E-clip DIN 6799', 'E-ring' or 'retaining washer'; 'spiral retaining ring' (Spirolox, brand); 'push-on retaining ring', 'self-locking retaining ring' or 'grip ring' (no groove needed); 'bowed E-ring' and 'bevelled retaining ring' (take up end play); 'crescent ring', 'poodle ring', 'interlocking ring' and 'high-load' or 'reinforced' rings (e.g. Rotor Clip SHR) (Rotor Clip guide; McMaster-Carr; Wikipedia 'Retaining ring'). Inch sizes follow ASME B18.27 and often use Truarc-style part numbers (Wikipedia; Rotor Clip). Cheap metric circlip and E-clip assortment boxes are sold by general hardware suppliers. Tools: 'internal circlip pliers', 'external circlip pliers', 'convertible circlip pliers' (DIN 5254 / DIN 5256 types with a stop screw, Smalley), 'E-clip applicator' and dispenser (Rotor Clip). For chamfered parts, a 'support washer DIN 988' behind the ring restores its grip (Smalley external circlip installation guide). Ready-grooved shafting and pins are sold for robotics (e.g. goBILDA REX shafting with E-clip, brand, via gm0).
- **rules_of_thumb**: 
  - Edge margin: put the groove at least 3 × the groove depth from the end of the shaft or bore; then the groove will take the ring's full rated load (Rotor Clip 'Ultimate Retaining Ring Guide', p.63: 'When y/d > 3, the groove will withstand the maximum thrust load'). RoyMech's DIN 471 table uses the same ratio (e.g. 10 mm shaft: groove depth t = 0.2 mm, minimum edge distance n = 0.6 mm).
  - Groove size examples, DIN 471 external circlips (RoyMech): 3 mm shaft: ring 0.40 mm thick, groove Ø2.8 mm × 0.50 mm wide; 8 mm shaft: ring 0.80 mm, groove Ø7.6 mm × 0.90 mm; 10 mm shaft: ring 1.00 mm, groove Ø9.6 mm (-0.11 mm) × 1.10 mm; 20 mm shaft: ring 1.20 mm, groove Ø19.0 mm × 1.30 mm. So the groove is about 0.1 mm wider than the ring thickness.
  - The groove is usually the weak link: for a 10 mm DIN 471 ring RoyMech gives 1.0 kN for the groove against 4.0 kN for the ring, and for 20 mm, 5.0 kN against 17.1 kN, assuming a groove material yield strength of 200 N/mm², sharp corners and no safety factor (RoyMech notes). Rotor Clip's groove formula is proportional to the groove material's yield strength (Pg = Gf·Ds·d·π·σy / (K1·Fs)), so a softer groove material holds proportionally less (Rotor Clip guide p.63).
  - Give the ring a sharp-cornered part to push against: a chamfer or radius on the retained part levers the ring out of its groove and 'compromise[s] thrust capacity'. Use a reinforced ring or a DIN 988 support washer in that case (Rotor Clip white paper pp.1-2; Smalley external circlip installation guide).
  - Don't over-stretch external rings: Rotor Clip suggests setting the pliers' stop by opening the ring over a pin gauge 1% larger than the shaft diameter, wearing safety goggles (Rotor Clip FAQ).
  - Choose side-fitted E-clips for light thrust loads and big shoulders, and lug-type circlips for high thrust. If an E-clip flies off at speed or in vibration, the reinforced E-ring fits the same groove (Rotor Clip guide pp.17, 20; Rotor Clip FAQ). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - The ring that holds the single sprocket on a bicycle's rear hub (Wikipedia 'Circlip' diagram)
  - The clips that stop the rotating cutters of a paper shredder walking off their shaft (Rotor Clip guide p.18)
  - The E-clip on the end of a robot-kit or toy axle, or on the shaft of a window blind (gm0; Rotor Clip guide p.31) *(unverified parts omitted)*
- **when_to_use**: Use a retaining ring when you need a cheap, compact, removable 'step' on a round shaft or in a round hole: to stop a wheel, pulley, gear or lever sliding off an axle, to hold a bearing in its housing, or to stop a hinge or clevis pin falling out. It takes up far less room than a nut on a threaded end or a pinned collar, needs only a simple groove, and 'will not require periodic re-torquing as a nut and bolt might' (Rotor Clip FAQ). E-clips suit small shafts where you can reach the groove from the side, lug-type circlips suit heavier thrust loads, and spiral rings suit places where lugs would get in the way or you want 360° contact (Rotor Clip guide; Smalley blog). Use bowed rings when parts must be held without rattle (Rotor Clip white paper).
- **when_not_to_use**: Don't use one when the part must be set at any position along the shaft: use a shaft collar with a set screw or clamp instead (gm0). Avoid it when you can't cut an accurate groove (e.g. a hardened shaft or thin tube): use a push-on ring on soft shafts, or a collar (Rotor Clip white paper). Don't rely on a plastic groove for real loads: in 3D prints an annular snap fit, a snap pin or a screw with a washer into a heat-set insert is often easier. Don't use it when the parts must be clamped tight with no play: use a nut, or a bowed or bevelled ring (Rotor Clip white paper). Don't use it where the joint must come apart often without tools: use a hitch pin and R-clip or a quick-release pin. For very high speed or heavy vibration, plain E-clips can come off; use reinforced E-rings, interlocking rings or lug-type circlips (Rotor Clip FAQ; Rotor Clip guide p.23).
- **environment_limits**: Plain carbon spring steel rusts: Smalley says it 'is suited for use in a protected environment, as it corrodes if not oiled and sealed from the elements'; use zinc-plated or stainless rings outdoors and beryllium copper in sea water (Smalley standard materials; Rotor Clip guide p.37). Heat: stainless 17-7 keeps its spring properties up to 650 °F (about 340 °C) (Smalley), and Rotor Clip's PH 15-7Mo stainless has the 'highest temperature limit of standard materials (900° F)' (about 480 °C) (Rotor Clip guide p.37). In practice the plastic or aluminium part will fail long before the ring does. Vibration and high speed can shake plain E-clips out of their grooves (Rotor Clip FAQ). *(unverified parts omitted)*
- **safety_notes**: The ring stores spring energy while you spread or squeeze it and can fly off the pliers at high speed; Smalley calls this 'a safety hazard' and Rotor Clip says to use 'safety goggles' (Smalley blog; Rotor Clip FAQ). Stamped rings have sharp, burred edges (Wikipedia 'Circlip'). If a ring holding a wheel, pedal or brake part comes out in use, the part can fall off, so check that it is fully seated in the groove. *(unverified parts omitted)*
- **common_failures**: 1) Ring pops out under load: rings 'most often fail due to deflection', especially when the retained part has a chamfer or rounded edge that levers the ring out of the groove (Rotor Clip white paper). Use a sharp-cornered part, a support washer or a reinforced ring. 2) Groove lip shears off or the groove wall squashes: the groove is too close to the end, or the groove material is too soft (Rotor Clip edge-margin rule; RoyMech). 3) Ring loose in its groove after fitting: it was over-stretched or over-squeezed during fitting and has taken a permanent set (Smalley external circlip installation guide; Rotor Clip FAQ). Use pliers with a stop and fit a new ring. 4) Stamped ring fitted the wrong way round, so its square edge rides up the groove edge and springs out (Wikipedia 'Circlip'). 5) E-clip comes off at speed or in vibration (Rotor Clip FAQ). 6) Wrong groove size: too shallow a groove leaves too little grip; too wide a groove gives play (Rotor Clip white paper; RoyMech). 7) Rusted rings snap or seize (Smalley). 8) The ring flies off and is lost while being fitted (Smalley blog).
- **related**: 
  - Annular snap fit: a ring-shaped bump and groove moulded or printed into the parts themselves, with no separate clip; better for plastic-only parts
  - Snap pin (split-leg push-in pin, rabbit clip): a printed or plastic pin with springy barbed legs that clips into a hole; the 3D-printing way to retain a pivot
  - Spring-steel push-on fasteners (push nut, speed nut): push-on rings are the same idea; they grip a plain shaft with no groove but are hard to remove
  - Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub): a set-screw or clamp shaft collar can be placed anywhere along the shaft, but can slip
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin): a split pin through a cross-hole in a shaft or clevis pin does the same job without a groove
  - Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip): an R-clip in a cross-hole is the tool-free way to keep a pin in
  - Quick-release pin (ball-lock pin): a pin held by spring balls that comes out by pressing a button
  - Wave and disc springs (compact axial springs): often used under a retaining ring to preload a bearing, as bowed rings do
  - Ordinary screw joint (bolt and nut, machine screw): a nut on a threaded shaft end also retains parts, but is bulkier and can loosen

### Pictures, videos and models

- **links**: 
  - [Sicherungsring auf Welle mit Wellennut.png (HobbyAstronaut, Wikimedia Commons, 2023)](https://commons.wikimedia.org/wiki/File:Sicherungsring_auf_Welle_mit_Wellennut.png): Simple drawing of a circlip on a shaft next to the shaft's groove: what a retaining ring and its groove look like *(licence: CC0 1.0 (public domain dedication))*
  - [Axial Rings.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Axial_Rings.jpg): A collection of the most common axially fitted retaining rings (internal and external circlips with lug holes, inverted, bowed and other types) *(licence: Public domain (marked on Commons as ineligible for copyright))*
  - [Internal Snap Ring.jpg (AZTommy, Wikimedia Commons, 2017)](https://commons.wikimedia.org/wiki/File:Internal_Snap_Ring.jpg): Cross-section diagram of how to orient a stamped internal snap ring in its groove (rounded and sharp edges) *(licence: CC BY-SA 4.0)*
  - [Snapring or circlip extraction from bicycle hub.svg (Seans Potato Business, Wikimedia Commons, 2007)](https://commons.wikimedia.org/wiki/File:Snapring_or_circlip_extraction_from_bicycle_hub.svg): Diagram of levering a circlip off a bicycle rear hub, where it holds a single sprocket, with a flat screwdriver *(licence: GFDL 1.2 or CC BY-SA 4.0/3.0/2.5/2.0/1.0 (multi-licensed))*
  - [Snap Ring, Circlip, C-Clip, Retaining Ring Pliers - The Basics (KC Tool, YouTube; title confirmed via oEmbed, not watched)](https://m.youtube.com/watch?v=yeIKHEYoSfA): Video introduction to internal and external retaining rings and the pliers used to fit and remove them *(licence: link only (YouTube))*
- **make_it_yourself**: 
  - [Circlip DIN 471 - various sizes (JBoe, Printables; URL from search results, page not opened; details read through the Printables API)](https://www.printables.com/model/1209954-circlip-din-471-various-sizes): Printable external circlips to DIN 471 for 3-70 mm shafts, with suggested print settings (PLA/PETG/ABS/ASA, 100% infill, no supports); the same author has DIN 472 internal and Seeger AK/JK sets *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Parametric Circlip / Retaining Clip DIN 6799 (St. Luck, Printables; URL from search results, page not opened; details read through the Printables API)](https://www.printables.com/model/1096141-parametric-circlip-retaining-clip-din-6799): Parametric Fusion 360 model of a DIN 6799 E-clip: change the inner and outer diameters, width and thickness to suit your shaft; STL examples of common sizes included *(licence: CC BY (Creative Commons Attribution))*
  - [3D Print Design Concept: Snap Ring & Bore (Fusion 360) (plusAlpha Designs, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=sv_xUyv75G4): Video on designing a snap-ring groove in a bore for a 3D-printed part in Fusion 360 *(licence: link only (YouTube))* *(unverified parts omitted)*
- **diagram_idea**: A side view of a shaft passing through a wheel: a groove cut round the shaft, a circlip springing open over the shaft end and snapping into the groove, and an arrow showing the wheel's push going through the ring into the groove wall, with a small inset of an E-clip being pushed into the groove from the side.
- **sources**: 
  - https://en.wikipedia.org/wiki/Circlip
  - https://en.wikipedia.org/wiki/Retaining_ring
  - https://www.rotorclip.com/wp-content/uploads/2023/03/UltimateRetainingRingGuide.pdf
  - https://www.rotorclip.com/wp-content/uploads/2023/03/whitepaper_ring_selection_rotor_clip.pdf
  - https://www.rotorclip.com/retaining-rings/retaining-rings-faqs/
  - https://www.rotorclip.com/post/radial-retaining-rings-e-clips-c-clips-and-more/
  - https://www.smalley.com/sites/default/files/pdf/2021_Circlip_Installation_External_Final.pdf
  - https://www.smalley.com/blog/tapered-section-retaining-ring-circlip-what-it-advantages-and-installationremoval
  - https://www.smalley.com/blog/smalley-spirolox-retaining-ring-vs-stamped-circlip
  - https://www.smalley.com/blog/ask-expert-part-number-issues-and-spirolox-retaining-ring-reusability-0
  - https://www.smalley.com/blog/ask-expert-installing-retaining-rings-and-laminar-seal-ring-application
  - https://www.smalley.com/materials/standard
  - https://roymech.org/Useful_Tables/Circlips/Circlips_External.html
  - https://roymech.org/Useful_Tables/Circlips/index.html
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html
  - https://www.mcmaster.com/products/retaining-rings/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://commons.wikimedia.org/wiki/Category:Circlips
  - https://commons.wikimedia.org/wiki/File:Sicherungsring_auf_Welle_mit_Wellennut.png
  - https://commons.wikimedia.org/wiki/File:Axial_Rings.jpg
  - https://commons.wikimedia.org/wiki/File:Internal_Snap_Ring.jpg
  - https://commons.wikimedia.org/wiki/File:Snapring_or_circlip_extraction_from_bicycle_hub.svg
  - https://commons.wikimedia.org/wiki/File:ARFISA_02_lock_washer.svg
  - https://api.printables.com/graphql/ (models 1209954 and 1096141)
  - https://www.youtube.com/oembed (titles of yeIKHEYoSfA and sv_xUyv75G4)

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, materials, rules_of_thumb, safety_notes

