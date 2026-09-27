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

*Not researched yet.*

## 173 Spring-steel push-on fasteners (push nut, speed nut, U-nut)

*snap & clip fits.* Stamped spring-steel clips whose prongs bite onto a plain shaft or screw when pushed on, fast to fit and resistant to shaking loose

*Not researched yet.*

## 259 Retaining ring (circlip, E-clip)

*snap & clip fits.* A springy metal ring that snaps into a groove on a shaft or in a hole to stop parts sliding off

*Not researched yet.*

