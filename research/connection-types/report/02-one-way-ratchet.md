# one-way & ratchet: Moves one way only

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 7 Ratchet and pawl (incl. reversible ratchet)

*one-way & ratchet.* A toothed wheel and a hinged catch (pawl) that lets the wheel turn one way with a click and stops it turning back; a switchable pawl reverses the direction

### What it is

- **plain_name**: A wheel with saw-like teeth and a hinged catch that clicks over the teeth when the wheel turns one way and jams against them when it tries to turn back, so the wheel only turns one way; flip or switch the catch and it works the other way round
- **term**: Ratchet and pawl (ratchet wheel and pawl, ratchet gearing); called a reversible (reversing) ratchet when the pawl can be switched to lock the other direction
- **aliases**: 
  - ratchet
  - ratchet wheel and pawl / pawl and ratchet
  - ratchet gear / ratchet gearing (Machinery's Handbook)
  - click and ratchet wheel ('click' is an old word for the pawl; Durley: 'a ratchet or click (sometimes called a pawl)')
  - detent (Machinery's Handbook: 'a pawl or detent')
  - running ratchet (turns one way only) vs stationary or locking ratchet (pawl stops both directions), Reuleaux's terms used by Durley
  - reversible ratchet / reversing ratchet / bi-directional ratchet
  - double-pawl or dual-pawl ratchet; fine-tooth ratchet (socket wrenches)
  - ratchet feed (a pawl on a rocking lever that steps the wheel round)
  - pawl freewheel (the usual bicycle freewheel: spring-loaded pawls in a toothed drum)
  - Sperrklinke (German for the pawl, from the Wikimedia Commons file 'Sperrklinke Schema.svg')
  - cliquet (French, from the Commons file 'Roue libre cliquet.svg')
  - 棘轮机构 (Chinese, ratchet mechanism; 双向棘轮 = reversible ratchet, from the HUANGYAN920 mechanism library)
- **family**: one-way & ratchet
- **other_families**: indexing & detents, motion conversion, self-locking & anti-back-drive, tensioning, reels & take-up
- **one_liner**: A toothed wheel with a spring-held catch (pawl) that lets the wheel turn freely one way with a click and locks it against turning back, used to hold winches and reels, to step a wheel round one tooth at a time, and, with a switchable pawl, in reversible tools such as socket wrenches.
- **complexity**: A few parts: a ratchet wheel (a disc with lopsided, saw-like teeth), a pawl (a pivoting catch), a pivot pin or screw, something to keep the pawl pressed in (a small spring, the pawl's own weight, or a pawl that is itself springy) and a frame. A reversible ratchet adds either a double-ended pawl or two pawls plus a selector switch or lever. A ratchet that drives (a ratchet feed) adds a rocking lever carrying the driving pawl, with a second, fixed pawl to hold the wheel while the lever swings back.
- **how_it_works**: The teeth are lopsided: one side of each tooth is a gentle slope and the other is steep. Turned the free way, the pawl slides up each gentle slope and a spring snaps it down behind the tooth, which makes the click; turned the other way, the pawl tip meets a steep face and jams, so the wheel stops (Wikipedia 'Ratchet (device)'). The steep face is angled so that the load pulls the pawl deeper into the tooth rather than pushing it out (Machinery's Handbook), and something must always press the pawl in: a spring, the pawl's weight, or a springy pawl (Durley). A reversible ratchet uses teeth that can be caught from either side and a pawl you can flip, turn half a turn, or swap for a second pawl facing the other way, which is what the little lever on a socket wrench does (Machinery's Handbook; Wikipedia 'Socket wrench').

### Finder attributes

- **job**: 
  - stop it moving back (one-way): the main job, e.g. holding a winch drum or hoist so the load can't run back
  - click into set positions: the wheel can only stop at a tooth, so it moves and holds in steps of one tooth
  - change the kind of motion: a pawl on a rocking lever turns back-and-forth movement into one-way, step-by-step rotation (ratchet feed, ratchet wrench)
  - tighten and hold tension: wind a reel, strap or cable tighter and it stays tight
  - lock, and release by hand: lifting the pawl by hand frees the wheel to run back
- **motion**: rotate: unlimited turning in the free direction; in the locked direction it can only creep back up to one tooth spacing before it catches. A reversible ratchet lets you choose which direction is free.
- **degrees_of_freedom**: 1: the wheel can only turn about its own axle, and the pawl limits that turning to one direction (the pawl's own small swing is an internal motion, not a way for the parts to move apart)
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the defining behaviour; the wheel turns one way with a click and jams against the pawl the other way
  - indexing (clicks into set positions): it holds only at tooth positions, so it moves in steps; a pawl on a rocking lever can step a wheel round a set number of teeth each stroke (Machinery's Handbook, ratchet feed)
  - hand-release only (locks under load, releases when a person operates it): lifting the pawl lets the wheel run back, as on a winch or reel release
  - tensioning (takes up slack and holds): winding a drum or reel and letting the pawl hold each gain
  - motion conversion (e.g. rotary to linear): a rocking lever with a pawl gives one-way, intermittent rotation
  - reversible: in a reversible ratchet a selector (flip-over pawl, turned plunger pawl, or a switch that lifts one of two pawls) swaps the free and locked directions
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pawl tip butts against the steep tooth face
  - spring force (a spring or springy part presses it in place): a spring, gravity or a springy pawl keeps the pawl in the teeth; the mechanism must be 'force-closed' in this way (Durley)
- **input_output**: Used as a stop: rotation one way passes freely, rotation the other way is blocked; it is not back-drivable in the locked direction (the only way back is to lift the pawl). Used as a drive (ratchet feed or ratchet wrench): back-and-forth swinging of a lever -> one-way, stepped rotation of the wheel; each stroke advances a whole number of teeth, so the smallest step is 360 degrees divided by the number of teeth, and two pawls of different length offset by half a tooth halve that step (Machinery's Handbook). Shafts: the lever or frame and the wheel share one axle (in line). *(unverified parts omitted)*
- **power**: passive (no power needed). If a motor drives through a ratchet and stops, the pawl keeps holding the load.
- **removability**: removable: the wheel is keyed, pinned or clamped to its shaft and the pawl sits on a pin or screw, so it can be taken apart and refitted (NotesandSketches describes the wheel keyed to the shaft)
- **reuse_cycles**: effectively unlimited: it is built to click thousands of times; the limit is wear of the tooth faces, pawl tip and pivot, not taking it apart
- **tools_needed**: Usually a screwdriver or hex key for the pawl pivot screw and frame, and sometimes circlip pliers for retaining clips; print-in-place printed ratchets need none, only a firm first twist to break the parts free
- **seal**: none: the teeth and pawl are open to dirt. *(unverified parts omitted)*
- **load**: Light to heavy depending on size and material: steel ratchet wheels are sized with a formula used for crane ratchets (Machinery's Handbook), while a well-designed PLA print has reached about 30 N·m in a ratcheting wrench (Hackaday on Gladius's design). It is strong against turning in the locked direction, where the tooth is loaded in bending and shear and the pawl mostly in compression; the pawl pivot pin carries almost the whole reaction force (Firgelli, vendor explainer). The free direction carries no load. Weak points are the pawl pivot, tooth tips and, in prints, layer lines.
- **adjustable**: No fine adjustment: it can only hold at tooth positions. Finer steps come from more teeth, or from two or more pawls of different lengths offset by a fraction of a tooth (Machinery's Handbook); 'dual-pawl' socket wrenches click twice per tooth (Wikipedia 'Socket wrench').
- **play_and_precision**: noticeable: it can slip back by up to one tooth spacing before the pawl catches (this backward slip is called backlash; Wikipedia 'Ratchet (device)'). Once caught it returns to the same tooth very repeatably; spring-blade indexing ratchets can position to about a tenth of a degree (RoyMech). *(unverified parts omitted)*
- **access_needed**: not applicable: it is built into a mechanism (a winch, reel, tool head or gearbox) rather than joining two panels
- **materials**: Hardened steel wheels and pawls for hoists, winches and hand tools (pawl tips are hardened; Firgelli, vendor explainer); brass and steel in clocks; moulded acetal (POM, 'Delrin' (brand)) and nylon for plastic ratchets, often with moulded-in springs (DuPont design guide); 3D prints in PLA for demos and PETG, ASA or nylon for use; springs in spring steel, because plastic springs that stay loaded relax (DuPont).
- **maker_difficulty**: easy to moderate: easy to print a working demo (a wheel, a pawl, an M3 screw and a small spring); moderate to make one that carries real torque, because the tooth angle, pawl position, spring and print orientation all have to be right

### Making it

- **processes**: 
  - 3D print (FDM): demos, fidget toys and light-to-medium duty tools, including print-in-place and reversible designs
  - CNC: steel ratchet wheels are milled with an angled cutter or hobbed with a special hob (Machinery's Handbook)
  - off-the-shelf part: ratchet wheels, pawls, pawl springs, and complete ratchet winches, hoists and wrenches *(unverified parts omitted)*
- **print_in_place**: yes (with springy printed pawls) / partly (classic pivoting pawl): print-in-place ratchets exist, e.g. joeDAcoolGUY's bi-directional ratchet screwdriver and a print-in-place 1/4-inch bit ratchet on Printables, which use springy printed parts and about 0.3 mm gaps. The classic layout with a pivoting pawl prints as separate parts and needs an added pivot screw and a metal spring (e.g. the 'Ratchet and Pawl Demo' needs an M3 screw and an extension spring).
- **making_tips_3d_printing**: 1) Get the tooth and pawl geometry right first: make the locking face of each tooth steep (nearly pointing at the wheel centre) and place the pawl pivot so that a line drawn at right angles to the locking face passes between the wheel centre and the pawl pivot; then the load pulls the pawl in instead of throwing it out (Machinery's Handbook; for a pawl that pulls rather than pushes, the line must pass outside the pivot). A vendor explainer suggests a locking face of about 80-90 degrees to the tangent, with 85 degrees as a safe default (Firgelli). 2) Print the wheel and pawl lying flat (axle vertical), so the teeth and the pawl are loaded along the layers, not across them; prints are stronger in one direction, like wood (Prusa), and springy arms should not be built standing up in Z (Hubs). 3) For strength, use many perimeters or solid parts: a PLA ratcheting wrench reached about 30 N·m by slicing parts to be almost entirely perimeters (Hackaday on Gladius's design); Owenberry's 1/4-inch drive ratchet was printed in PETG at 100% infill. 4) Tooth size matters more than tooth count: in joeDAcoolGUY's tests the real failure mode was tooth flex and too little engagement length, and a 6 mm thick pawl on a 22 mm ratchet ring worked. 5) Clearances: start at 0.3 mm for parts that must move (Prusa); joeDAcoolGUY used 0.3 mm for free-moving parts and 0.15 mm where he wanted controlled friction. Watch for elephant's foot on small parts, which can jam the mechanism (Martin Rigatoni's reversible screwdriver notes, via the Printables API). 6) Springs: use a small metal spring (an extension spring, or half a pen spring as in Owenberry's design) to hold the pawl in; printed springs that stay loaded relax over time (DuPont), and one maker withdrew a printed ratchet screwdriver because it 'suffers from creep so doesn't last' (Printables API, model 82837). Springy printed pawls are fine for occasional light use, in PETG or nylon rather than PLA. 7) Use a metal screw or pin as the pawl pivot and don't clamp it tight; the 'Ratchet and Pawl Demo' says to leave the M3 screw slightly loose so the pawl can swing. 8) Reversible ratchets: the selector has to be guided or pushed from both sides, otherwise friction jams it once everything is enclosed (joeDAcoolGUY). 9) Print-in-place parts may need a firm first twist to break them free, and a little lubricant (silicone spray or light oil) makes the click smoother. 10) Material: PLA starts to soften at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen), so don't leave a PLA ratchet in a hot car.
- **off_the_shelf_parts**: Search terms: 'ratchet wheel' or 'ratchet gear', 'pawl', 'ratchet and pawl set', 'pawl spring' (usually a small torsion or extension spring), 'shoulder screw' or 'dowel pin' for the pivot, 'retaining ring' or 'E-clip'. Complete products that contain one: 'ratchet wrench' or 'socket wrench' (reversible, with 'fine-tooth' and 'dual-pawl' versions), 'ratcheting screwdriver', 'hand winch' with ratchet, 'ratchet lever hoist' (come-along), fishing-reel anti-reverse, and pawl-type bicycle freewheels. Silent, pawl-free alternatives are sold as 'one-way clutch', 'sprag clutch' or 'one-way needle bearing'.
- **rules_of_thumb**: 
  - Pawl position: the locking face should be placed so that a line at right angles to it passes between the wheel centre and the pawl pivot when the pawl pushes the wheel (or the wheel pushes the pawl); when the pawl pulls, that line should fall outside the pawl pivot. Then the pawl stays engaged under load (Machinery's Handbook, 27th ed., 'Shape of Ratchet Wheel Teeth', p. 2089).
  - Tooth pitch for a steel ratchet holding a hanging load: P = sqrt(F·M / (L·S·N)), where P = circular pitch at the tips, M = turning moment, L = face width (wheel thickness), N = number of teeth, S = safe stress (steel: 2500 psi / 17 MPa with shock, 4000 psi / 28 MPa without), F = 50 for 12 teeth or fewer, 35 for 12-20 teeth, 20 for over 20 teeth; used for crane ratchets (Machinery's Handbook p. 2089; also on Engineers Edge citing the 29th edition).
  - Finer steps without weaker teeth: use several pawls whose lengths differ by a fraction of the tooth pitch; two pawls differing by half a pitch halve the step (Machinery's Handbook p. 2089). Rob Ives also notes two pawls reduce the stop-start motion.
  - Resolution and backlash: the wheel can only hold every 360°/N (N = number of teeth), so it may slip back up to one tooth before catching (Wikipedia 'Ratchet (device)'); dual-pawl socket wrenches click twice per tooth (Wikipedia 'Socket wrench').
  - The pawl must always be pressed into the teeth ('force-closed'): by a spring, by its own weight, or by making the pawl itself a spring; and its shape must be such that the tooth pressure does not throw it out of gear (Durley, Kinematics of Machines, ch. IX, p. 230).
  - At light loads a driven ratchet wheel can jump ahead past the intended tooth; add a brake or detent, or watch the load (RoyMech 'Ratchets').
  - Plastic ratchets with moulded-in springs work well 'providing the springs are not held in the loaded position for a long period of time'; springs under constant load or deflection should be spring steel (DuPont 'General Design Principles for Engineering Polymers', pp. 36 and 47).
  - Moving printed parts need at least about 0.3 mm clearance as a starting point (Prusa knowledge base).
  - For springy (flexure) pawls: don't build them standing up in Z, and add a fillet at the root of at least half the arm thickness (Hubs snap-fit guide).
  - Vendor guidance (not a standard): make the locking face 80-90 degrees to the tangent, 85 degrees by default, and keep the pawl pivot pin snug, because pivot wear shifts the engagement angle (Firgelli 'Pawl' explainer).

### When to use it

- **everyday_examples**: 
  - A socket wrench (ratchet spanner): the small lever on the head switches which way it clicks (reversible ratchet)
  - A ratcheting screwdriver or a ratcheting bit driver
  - A hand winch, boat trailer winch or come-along (ratchet lever hoist) that holds the load while you rest
  - A bicycle freewheel (most use spring-loaded pawls in a toothed ring) and the anti-reverse click in fishing reels and yacht winches
- **when_to_use**: Use a ratchet and pawl when something should turn one way but never slip back: winding a winch, reel or spool, holding a lifted load while you reposition your hand, or tightening something step by step. It is also the simplest way to turn a back-and-forth lever into one-way stepped rotation (a ratchet wrench, a ratchet feed or a counter), and it gives an audible, felt click at each tooth. Choose the reversible version when you need to tighten and loosen with the same tool, as on socket wrenches and screwdrivers. It is cheap, easy to understand, easy to print, and you can release it on purpose by lifting the pawl.
- **when_not_to_use**: Avoid it when you need to hold at any angle with no slip-back (it only holds at tooth positions): use a friction brake, a sprag clutch or a roller clutch (one-way bearing), which lock almost instantly with no backlash, or a worm drive. Avoid it where the clicking noise, wear or bounce at high speed are a problem (a vendor explainer puts the practical limit for ordinary spring-loaded pawls at a few hundred rpm, Firgelli): use a sprag or roller clutch. For a linear strip use a linear ratchet, and for a one-piece printed part with no pins or springs use a compliant (flexure-pawl) ratchet. Don't rely on a home-made ratchet to hold people or heavy loads overhead; use rated hardware.
- **environment_limits**: Printed plastics soften with heat: PLA starts to give at about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen), so a PLA ratchet in a hot car may deform. Plastic springs and springy pawls lose force if they stay loaded (stress relaxation, DuPont), and PLA creeps most under constant load (thrinter creep test), so a printed pawl held flexed may stop snapping in fully. Vibration or very light loads can make a driven wheel jump ahead (RoyMech). *(unverified parts omitted)*
- **safety_notes**: The pawl and teeth form a pinch point for fingers. Pawl springs can fly out when a mechanism is opened. A worn or badly shaped ratchet can skip under load, so home-made or printed ratchets must never be used for lifting people or holding loads overhead. *(unverified parts omitted)*
- **common_failures**: 1) The pawl skips or is pushed out under load, because the locking face or pivot position is wrong (the load pushes the pawl out instead of pulling it in) or the pivot is worn: follow the Machinery's Handbook rule and keep the pivot snug. 2) The pawl doesn't drop in (it floats over the teeth) because the spring is too weak or has relaxed, the pawl is sticky, or dirt and grease are in the way: use a metal spring and keep it clean. 3) Tooth tips round over, chip or snap, or, in prints, shear off along layer lines: make teeth larger rather than more numerous (joeDAcoolGUY), print flat with many perimeters. 4) The wheel overshoots at light load (RoyMech): add a detent or light brake. 5) Too much slip-back (backlash) for the job: use finer teeth or several offset pawls, or a sprag or roller clutch. 7) Print-in-place parts are fused: increase clearance (about 0.3 mm) and check elephant's foot. *(unverified parts omitted)*
- **related**: 
  - Linear ratchet (cable-tie ratchet): the same idea on a straight toothed strip, so it slides one way instead of turning
  - Face ratchet (star ratchet): the teeth are on the faces of two spring-pressed discs, so every tooth engages at once instead of one pawl
  - Compliant ratchet (flexure pawl): the pawl is a springy printed arm, so there are no pins or separate springs
  - Sprag clutch and roller clutch (one-way bearing): one-way locking by wedging, silent and with almost no backlash, but no audible click and no step positions
  - Wrap-spring clutch: a coiled spring grips a shaft one way; smooth, silent, one-way
  - Ratchet-tooth torque limiter: similar sloped spring-loaded teeth, but shaped so they slip when the torque gets too high
  - Ball detent / indexing detent: clicks into positions and holds both ways, but can be pushed through with enough force
  - Escapement: a ratchet-like wheel released one tooth at a time to control speed (clocks)
  - Worm drive: holds a load at any position (self-locking), not just at teeth, but is slow and inefficient
  - Geneva drive: another way to get step-by-step rotation, with smooth locked dwell between steps

### Pictures, videos and models

- **links**: 
  - [Ratchet Gear and Pawl.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Ratchet_Gear_and_Pawl.gif): Animation of a ratchet wheel (green) and pawl (pink): the wheel turns one way while the pawl clicks over the teeth and blocks it the other way *(licence: CC BY-SA 4.0)*
  - [Ratchet Drawing Animation.gif (Wikimedia Commons, drawing by Dr. Schorsch, animated by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Ratchet_Drawing_Animation.gif): Labelled animated drawing of a ratchet: 1) gear, 2) pawl, 3) base *(licence: CC BY-SA 3.0)*
  - [Reversible ratchet mechanism (YouTube, MechMotions)](https://www.youtube.com/watch?v=nZH5rEpd2_4): Animation of a reversible ratchet in which the pawl is switched to change the locked direction *(licence: link only (standard YouTube licence))*
  - [MECH ENGINE mechanism library (HUANGYAN920) - search 'RATCHET', 'REVERSIBLE-RATCHET', 'DOUBLE-RATCHET' or 'INTERNAL-RATCHET'](https://huangyan920.github.io/Mechanical/): Interactive, adjustable simulations of a ratchet, a reversible ratchet, a double-pawl ratchet and an internal ratchet (labels in Chinese with English names) *(licence: MIT (code on GitHub))*
  - [Ratchet and pawl (NotesandSketches)](https://www.notesandsketches.co.uk/Ratchet.html): School-level diagrams of a ratchet wheel keyed to a shaft, showing the permitted rotation and how the pawl stops reverse rotation *(licence: link only (no licence stated))*
- **make_it_yourself**: 
  - [Ratchet and Pawl Demo (PatricktheBiosteamist, Printables)](https://www.printables.com/model/478921-ratchet-and-pawl-demo): Educational ratchet wheel and pivoting pawl; prints without supports and needs an M3 screw (14-18 mm) as the pivot and an extension spring. Details read through the Printables public API because the web page blocks automated access. *(licence: CC BY-NC-SA)*
  - [Print in place Bi-Directional Ratchet Screwdriver (joeDAcoolGUY, Printables)](https://www.printables.com/model/1656899-print-in-place-bi-directional-ratchet-screwdriver): Fully print-in-place reversible (left/right/lock) ratchet handle for 1/4-inch hex bits, about 0.3 mm clearances, 0.2 mm layers; the designer's blog (https://dev.joesturge.com/p/3d-print-in-place-a-design-journey/) explains the design lessons *(licence: CC BY)*
  - [1/4" Drive Ratchet (Owenberry, Printables)](https://www.printables.com/model/618449-14-drive-ratchet): Working reversible 1/4-inch drive ratchet wrench printed in PETG at 100% infill, with a direction toggle, two M3 screws and nuts, and two small springs (a pen spring cut in half) *(licence: CC BY-NC)*
  - [Print in Place 1/4" Bit Ratchet (Drunken_Makerer, Printables)](https://www.printables.com/model/481178-print-in-place-14-bit-ratchet): Keychain print-in-place bit ratchet in PLA+ with 60-degree internal overhangs and no supports; you change direction by moving the bit to the other side *(licence: CC BY-NC)*
  - [3D Printed Ratchet & Pawl | How to Design One Yourself (YouTube, CAD with Jordan)](https://www.youtube.com/watch?v=xHbz4figcLM): Video tutorial on designing a printable ratchet and pawl in CAD *(licence: link only (standard YouTube licence))*
  - [HUANGYAN920 MECH ENGINE (RATCHET / REVERSIBLE-RATCHET entries)](https://huangyan920.github.io/Mechanical/): Browser simulator where you can change the tooth count and geometry of a ratchet and a reversible ratchet and watch them run *(licence: MIT)*
- **diagram_idea**: Two-frame animation of a ratchet wheel and spring-loaded pawl: turned clockwise the pawl rides up each gentle slope and clicks down; turned back it jams on a steep face, with a dashed line showing the force at right angles to the tooth face passing between the wheel centre and the pawl pivot; a third frame flips a double-ended pawl to show the reversible version.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ratchet_(device)
  - https://en.wikipedia.org/wiki/Socket_wrench
  - https://en.wikipedia.org/wiki/Freewheel
  - https://commons.wikimedia.org/wiki/Category:Ratchets
  - https://commons.wikimedia.org/wiki/File:Ratchet_Gear_and_Pawl.gif
  - https://commons.wikimedia.org/wiki/File:Ratchet_Drawing_Animation.gif
  - https://theswissbay.ch/pdf/Books/Survival/Workshop/Machining%20and%20Machinery/Machinery's%20Handbook%20(27.8)/26663_yl.pdf
  - https://www.engineersedge.com/calculators/ratchet_type_gear_design_15333.htm
  - https://ecommons.cornell.edu/server/api/core/bitstreams/809167fc-7cef-4c99-a0a1-60a708dede4f/content
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://roymech.org/Useful_Tables/Cams_Springs/Ratchets.html
  - https://www.robives.com/mechanism/ratchet/
  - https://www.notesandsketches.co.uk/Ratchet.html
  - https://wiki.dtonline.org/index.php/Ratchet
  - https://www.firgelliauto.com/blogs/mechanisms/pawl
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://www.youtube.com/watch?v=nZH5rEpd2_4
  - https://www.youtube.com/watch?v=xHbz4figcLM
  - https://www.printables.com/model/478921-ratchet-and-pawl-demo
  - https://www.printables.com/model/1656899-print-in-place-bi-directional-ratchet-screwdriver
  - https://www.printables.com/model/618449-14-drive-ratchet
  - https://www.printables.com/model/481178-print-in-place-14-bit-ratchet
  - https://api.printables.com/graphql/
  - https://dev.joesturge.com/p/3d-print-in-place-a-design-journey/
  - https://hackaday.com/2022/10/15/a-3d-printed-ratchet-that-can-really-take-the-torque/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, play_and_precision, processes, safety_notes, seal

## 8 Linear ratchet (cable-tie ratchet)

*one-way & ratchet.* A toothed strip and a catch that let it slide one way only, as in a cable tie or the ladder strap on a snowboard binding (ratchet tie-down straps use a rotary ratchet, and most quick-grip clamps use a binding plate instead)

*Also covers:* Also covers cable ties as a fastener (tie mounts, coated stainless ties, a tie behind a hose barb) and the handle ratchet of locking forceps, as printed hobby clamps (never for use on people).

### What it is

- **plain_name**: A strip or bar with saw-like teeth and a springy catch that lets it slide through one way with a zipping or clicking sound but stops it sliding back, like a cable tie
- **term**: Linear ratchet (ratchet rack and pawl, toothed rack with pawl)
- **aliases**: 
  - rack and pawl / ratchet rack and pawl
  - ratchet bar / ratchet rack
  - linear ratchet mechanism
  - cable tie ratchet / zip tie / tie wrap / wire tie / hose tie / Ty-Rap (brand, the original cable tie) (Wikipedia 'Cable tie')
  - ladder strap and ratchet buckle (snowboard bindings, ski boots)
  - ratchet buckle
  - running ratchet acting on a rack (Durley)
  - ratchet jack / lifting jack pawls (Machinery's Handbook, Fig. i)
  - handle ratchet of locking forceps (haemostat or hemostat, artery forceps): a few interlocking teeth on each handle (Wikipedia 'Hemostat'); printed haemostat-style locking forceps and locking pliers are used as small hand clamps (Printables) *(unverified parts omitted)*
- **family**: one-way & ratchet
- **other_families**: tensioning, reels & take-up, cord, strap, webbing & textile hardware, sliding, telescoping & linear motion
- **one_liner**: A toothed strip or bar and a catch (pawl) that let it slide one way only, locking at each tooth, as in a cable tie, a snowboard-binding ladder strap or a ratchet jack.
- **complexity**: From a single piece to a few parts. A cable tie is one moulded piece: a flexible toothed tape and a head with a moulded-in pawl (Wikipedia 'Cable tie'). A rigid linear ratchet is a few parts: a toothed bar (rack), a pawl, a pivot and a spring, inside a guide that stops the bar wandering sideways. A ratchet buckle adds a lever that pushes the strap along and a release catch; a ratchet jack uses two pawls, one on the operating lever to lift and one fixed to hold (Machinery's Handbook).
- **how_it_works**: The strip's teeth are lopsided, with a gentle slope on one side and a steep face on the other. Pushed or pulled the free way, the springy pawl rides up each slope and snaps behind the next tooth; pulled the other way, the pawl catches a steep face and locks (Wikipedia 'Ratchet (device)'). In a cable tie the pawl sits inside the head, so once the tip has passed the pawl the tape can't be pulled back 'unless a large amount of force is applied' (Wikipedia 'Cable tie'). To tighten repeatedly, a second pawl on a lever can push the strip on one tooth per stroke while the fixed pawl holds it, as in a lifting jack or a snowboard ratchet buckle (Machinery's Handbook; Burton patent US7086122). The same teeth can sit on a pair of scissor-style handles: locking forceps (a haemostat) have 'a series of interlocking teeth, a few on each handle', so the handles click shut one tooth at a time and the tooth you stop at sets the clamping force; locked, the tips press together with about 40 N (9 lbf) (Wikipedia 'Hemostat').

### Finder attributes

- **job**: 
  - stop it moving back (one-way): the strip can go in but not come back out
  - tighten and hold tension: pull the tail of a cable tie or pump a buckle lever and it stays as tight as you left it
  - join and hold: a cable tie bundles or fixes cables and parts together
  - click into set positions: it holds at one-tooth steps along its length
  - lock, and release by hand: releasable ties, ski and snowboard buckles and ratchet clamps have a lever or tab that lifts the pawl
- **motion**: slide: straight-line travel one way over the length of the toothed strip, in steps of one tooth; curved versions (e.g. the swinging toothed arm of handcuffs) follow an arc
- **degrees_of_freedom**: 1: the strip can only slide along its own length, and the pawl limits that sliding to one direction
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the defining behaviour
  - tensioning (takes up slack and holds): each tooth gained is kept
  - indexing (clicks into set positions): it can only hold at tooth positions
  - hand-release only (locks under load, releases when a person operates it): releasable ties, buckles and ratchet clamps lift the pawl with a tab or lever
  - quick-release: ski-boot and snowboard ratchet buckles let go of the ladder strap with one release lever (Burton patent US7086122)
  - none for standard cable ties once tightened: they are meant to be cut off, not released
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pawl hooks behind a tooth
  - spring force (a spring or springy part presses it in place): the pawl is springy or spring-loaded so it always drops into the next tooth
- **input_output**: Mostly not applicable: as a fastener it just holds. When driven (ratchet jack, ratchet buckle, ratchet feed), back-and-forth lever strokes -> step-by-step one-way linear motion, one or more teeth per stroke, with a second pawl holding during the return stroke (Machinery's Handbook, Fig. i; Burton patent US7086122). It cannot be back-driven: pulling the strip backwards only jams the pawl harder, until the pawl is lifted.
- **power**: passive (no power needed)
- **removability**: Standard cable tie: permanent in practice (cut it off; it can be opened by pushing a small flat object between the pawl and the teeth, but that damages it; Wikipedia 'Cable tie'). Releasable cable ties, ratchet clamps and ski or snowboard buckles: tool-free quick release. Rigid racks and pawls: removable.
- **reuse_cycles**: Standard cable tie: once. Buckles, jacks and rigid ratchet bars: many times, limited by tooth wear. *(unverified parts omitted)*
- **tools_needed**: None to fit a cable tie; side cutters or flush cutters to remove it. A cable tie tensioning tool (tie gun) pulls to a set tension and cuts the tail off flush so no sharp edge is left (Wikipedia 'Cable tie'). Rigid versions need a screwdriver or hex key for the pawl pivot.
- **seal**: none
- **load**: Light to medium for plastic versions and heavy for steel jacks. *(unverified parts omitted)*
- **adjustable**: yes, in steps of one tooth: you can always tighten further; loosening needs the pawl to be released (or a new tie)
- **play_and_precision**: noticeable: it can slide back up to one tooth spacing before locking (Wikipedia 'Ratchet (device)'). Two pawls offset by half a tooth halve the step (Machinery's Handbook). *(unverified parts omitted)*
- **access_needed**: both sides: a cable tie or strap has to pass right round the object, though you tighten and cut it from one side; a rigid rack-and-pawl is built into a mechanism
- **materials**: Cable ties: usually nylon 6,6; outdoor ties are UV-stabilised black nylon with carbon black (at least 2%, Wikipedia; available only in black, Nelco); heat-stabilised nylon, polypropylene, Tefzel and PEEK for heat or chemicals; blue ties with a metal additive for metal detectors; stainless steel ties for heat and corrosion (Wikipedia 'Cable tie'; Nelco). Jacks and industrial racks: steel. 3D prints: PLA+ works for light-duty printed cable ties, PETG or nylon for heavier use (Printables 'Zip/Cable Tie'). Coated stainless steel ties are made to prevent galvanic attack where they touch a different metal, such as zinc-coated cable tray (Wikipedia 'Cable tie'). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: a printed zip tie or a rack and pawl is easy to make, but printed straps are weaker and creep more than moulded nylon ties, so for real use it is easier to buy cable ties

### Making it

- **processes**: off-the-shelf part: cable ties, releasable ties, cable tie mounts, ratchet buckles with ladder straps, 3D print (FDM): printable zip ties, ratchet clamps and print-in-place ratcheting capos *(unverified parts omitted)*
- **print_in_place**: yes: a printable cable tie comes off the bed as one working piece (Printables 'Zip/Cable Tie', 7.2 inches long, about 10 minutes to print), and a ratcheting guitar capo prints in place without supports (Mikolas Zuza's remix of LoboCNC's design, via the Printables API). Designs with a pivoting pawl and a metal spring are 'partly'. Handle-ratchet clamps print in place too: a self-locking compliant forceps prints as one piece with a support tab to snap off (Printables 'Print in Place Self-Locking Compliant Foreceps', via the Printables API).
- **making_tips_3d_printing**: 1) Print strips and pawls lying flat, so the strap is made of long continuous lines along its length and the springy pawl bends within the layers, not across them; prints are stronger in one direction (Prusa) and springy arms should not be built standing up in Z (Hubs). 3) Make the part that carries the pawl stiff: in the ratcheting capo remix, the original ratchet arm bent under load so the ratchet did not engage at all in the first half of its travel, which the remix fixed (Printables API, model 63610). 4) Material: PLA+ is fine for a light-duty printed cable tie; use PETG or a more flexible material such as nylon for heavier use (Printables 'Zip/Cable Tie'). A tie that holds tension all the time will creep, and PLA creeps the most (thrinter creep test), so re-tighten or use PETG or nylon. 7) Add a pull-tab to the pawl if you want to release and reuse it. 9) Printed locking forceps with flexing (compliant) joints: one single-piece design works better in PETG than PLA, prints flat side down with no supports, and survived 'over 150' open-and-close cycles; keep the layer seams off its four flexing joints, and treat it as a consumable because the joints eventually fail (Printables 'Hobby Locking Forceps - Single Piece with Compliant Joints', via the Printables API). *(unverified parts omitted)*
- **off_the_shelf_parts**: The common truck 'ratchet strap' is a different device: a lever ratchet that winds webbing onto a spool, covered by the rotary ratchet entry. Cable tie mounts come adhesive-backed or screw-down, or you can print one and glue it on (Printables 'Cable tie mount', via the Printables API); 'releasable' ties have a tab that lifts the pawl (Wikipedia 'Cable tie'). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - A linear ratchet that lifts step by step needs two pawls: one on the operating lever does the lifting, and a second, fixed pawl holds the load while the lever is returned (Machinery's Handbook, 27th ed., p. 2089, Fig. i, lifting jack).
  - Several pawls offset by a fraction of the tooth pitch give finer steps from strong, coarse teeth; two pawls differing by half a pitch halve the step (Machinery's Handbook p. 2089).
  - The strip can slip back by up to one tooth before it locks (Wikipedia 'Ratchet (device)').
  - For outdoor use choose UV-stabilised black nylon with at least 2% carbon black (Wikipedia 'Cable tie').
  - Nylon 6/6 cable ties: -40 °F to 185 °F (-40 °C to 85 °C) continuous; heat-stabilised nylon 6/6 to 220 °F (about 104 °C); PEEK -76 °F to 500 °F (Nelco material specifications).
  - Cut the tail flush with the head (a tensioning tool does this) so no sharp edge is left (Wikipedia 'Cable tie').
  - Many one-handed bar clamps don't use teeth at all: their drive lever and brake are plates with inclined holes that grip the top and bottom edges of a smooth bar and can occasionally slip; US patent 6585243 adds teeth for a positive (ratchet) grip (Google Patents US6585243B1).
  - Printed moving parts need about 0.3 mm clearance as a starting point (Prusa knowledge base); don't build springy arms standing up in Z (Hubs).
  - As a hose retainer on a barbed fitting, fit the cable tie closely behind the barb; cable ties and ear clamps are the common retention devices that improve the joint's pull-off strength and pressure resistance (Qosina, barbed connector guide).
  - Wikipedia's figure of at least 2% carbon black for UV-resistant nylon ties is marked 'citation needed' on that page, so check the maker's datasheet for outdoor ties (Wikipedia 'Cable tie').

### When to use it

- **everyday_examples**: 
  - A cable tie (zip tie) holding cables together
  - The toothed ladder strap and ratchet buckle on snowboard bindings and some ski boots
  - Handcuffs, whose swinging toothed arm ratchets tighter and can't be opened back (a curved linear ratchet) *(unverified parts omitted)*
- **when_to_use**: Use a linear ratchet when something must be pulled or pushed tighter in one direction and must not slip back: bundling cables, strapping a part to a frame, closing a clamp or a strap round an object of unknown size, or lifting something in steps with a lever (a ratchet jack). Cable ties are the quickest, cheapest way to hold things together in prototypes and robots. Toothed-bar ratchets also appear in linear clamps and quick-release vices (DT Online), although many quick-grip style bar clamps grip a smooth bar with tilting plates instead (see binding-plate lock). Choose releasable ties, ratchet buckles or clamps with a release tab when you need to undo and redo it. A cable tie pulled tight just behind a hose barb is a cheap, common way to stop a soft tube pulling off (Qosina lists cable ties and Oetiker (brand) ear clamps as the common retention devices); for higher pressure, or a clamp you can undo, use a hose clamp. A haemostat-style locking clamp makes a handy one-handed hobby clamp for holding small parts: one printable version clamps anything from a sheet of paper up to about 8 mm (Printables 'Wide Range Hemostat locking plier', via the Printables API).
- **when_not_to_use**: Avoid it when you need smooth, stepless adjustment (use a binding-plate lock, a cam buckle or a screw clamp), when you need to loosen as often as you tighten (use a buckle, hook-and-loop or a screw), when the load must be released gently under tension (use a screw or a winch with a brake), or for permanent structural joints (use screws or bolts). Don't use cable ties to hold heavy loads overhead, anything hot above their rating, or anything that moves and chafes the tie. For a rotating shaft use a rotary ratchet and pawl or a one-way clutch.
- **environment_limits**: Standard nylon 6/6 ties are rated about -40 °C to 85 °C continuous, heat-stabilised nylon to about 104 °C (Nelco). Sunlight degrades natural (white) nylon ties; use UV-stabilised black ones outdoors (Wikipedia; Nelco). Stainless steel ties are for high heat and corrosive places (Wikipedia). Printed PLA ties soften from about 60 °C (CNC Kitchen) and creep under constant tension (thrinter creep test), so they loosen over time. *(unverified parts omitted)*
- **safety_notes**: Cut tails leave sharp edges that can cut hands and cables; cut flush or use a tensioning tool (Wikipedia 'Cable tie'). Locking forceps (haemostats) are surgical instruments; printed or hobby versions are only for holding parts and must never be used on people or animals. *(unverified parts omitted)*
- **common_failures**: 2) The tie snaps or the head cracks, often from overloading, sunlight (UV) or heat: use UV-black or heat-stabilised ties, or stainless ties. 3) Printed ties and clamps loosen over time from creep, especially in PLA: print in PETG or nylon and re-tighten. 4) The pawl doesn't engage because the part holding it bends (as in the original ratcheting capo, via the Printables API): stiffen that part. 5) Too coarse steps for a snug fit: use finer teeth or two offset pawls (Machinery's Handbook). *(unverified parts omitted)*
- **related**: 
  - Ratchet and pawl (rotary): the same mechanism on a toothed wheel, for winches, reels and wrenches
  - Ratchet tie-down strap (ratchet buckle for webbing): despite the name it winds the strap onto a spool with a rotary ratchet, not a toothed strip
  - Binding-plate lock (tilting friction plate): grips a smooth bar anywhere, with no teeth, as in most quick-grip bar clamps and many caulking guns; stepless but can slip
  - Compliant ratchet (flexure pawl): one-piece printed ratchets whose pawl is a springy arm, which is how a cable tie head works
  - Cam buckle and cam cleat: grip a strap or rope anywhere by a toothed or smooth cam, stepless
  - Ladder-lock buckle and guy-line slider: hold straps and cords by friction, easy to adjust both ways
  - Hook-and-loop strap (Velcro (brand)): reusable, adjustable anywhere, much weaker
  - Hose clamp: the band clamp that holds a hose on a barb; a worm-drive clamp tightens smoothly with a screw and can be loosened, where a cable tie is a one-use, light-duty stand-in
  - Rope grab (ascender): a toothed cam that slides up a rope one way and grips the other

### Pictures, videos and models

- **links**: 
  - [Ratchet Rack and Pawl.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Ratchet_Rack_and_Pawl.gif): Animation of a toothed rack (green) moving one way while a pawl (pink) clicks over the teeth and blocks it moving back *(licence: CC BY-SA 4.0)*
  - [ZipTieCrossSection.JPG (Wikimedia Commons, by Mushrooshi)](https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG): Photo of a cable tie cut in half, showing the pawl in the head gripping the teeth of the tape *(licence: Public domain)*
  - [Linear ratchet mechanism (YouTube, thang010146 / Nguyen Duc Thang)](https://www.youtube.com/watch?v=TjOnY8tI9z8): CAD animation of a slider held at different heights by a spring-loaded pawl on a toothed runway *(licence: link only (standard YouTube licence))*
  - [Cable tie (Wikipedia)](https://en.wikipedia.org/wiki/Cable_tie): Photos and explanation of cable tie types, materials, tools and history *(licence: text CC BY-SA 4.0; images per file)*
  - [US7086122B2 Ratchet-type buckle and snowboard binding (Google Patents)](https://patents.google.com/patent/US7086122): Patent drawings of a ladder strap with saw-tooth teeth, the driving lever, the holding pawl and the release *(licence: link only)*
- **make_it_yourself**: 
  - [Zip/Cable Tie (Uglylittlebush, Printables)](https://www.printables.com/model/209087-zipcable-tie): A 7.2-inch printable cable tie that still zips like a real one; uses about 0.32 m of filament and about 10 minutes to print; PLA+ for light duty, PETG or nylon for heavier use. Details read through the Printables public API because the web page blocks automated access. *(licence: CC Public Domain)*
  - [Hobby Locking Forceps - Single Piece with Compliant Joints (Rustomac, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/475661-hobby-locking-forceps-single-piece-with-compliant-): One-piece printed locking forceps with flexing (compliant) joints; prints flat with no supports in under 20 minutes and under 10 g; PETG works better than PLA; keep layer seams off the four flexing joints. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Print in Place Self-Locking Compliant Foreceps (PolyVF, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1405899-print-in-place-self-locking-compliant-foreceps): Large print-in-place locking forceps inspired by haemostats, with custom supports; snap off the support tab and work the hinge before use. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Wide Range Hemostat locking plier (John Chiesa, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/920228-wide-range-hemostat-locking-plier): Printed haemostat-style locking clamp that holds from one sheet of paper up to about 8 mm (0-5/16 in), pivoting on a 3 mm screw. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Cable tie mount (SammysHP, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/227957-cable-tie-mount): A small printed cable tie mount: glue it onto a part and pull cable ties through it. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: Cut-away side view of a cable tie head: the tape slides in to the right as the springy pawl rides up each gentle slope and clicks down, then an arrow pulling the tape back shows the pawl tip jammed against a steep tooth face; a second panel shows a ratchet jack with a lifting pawl on the lever and a holding pawl on the frame.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ratchet_(device)
  - https://en.wikipedia.org/wiki/Cable_tie
  - https://en.wikipedia.org/wiki/Handcuffs
  - https://commons.wikimedia.org/wiki/File:Ratchet_Rack_and_Pawl.gif
  - https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG
  - https://theswissbay.ch/pdf/Books/Survival/Workshop/Machining%20and%20Machinery/Machinery's%20Handbook%20(27.8)/26663_yl.pdf
  - https://ecommons.cornell.edu/server/api/core/bitstreams/809167fc-7cef-4c99-a0a1-60a708dede4f/content
  - https://www.nelcoproducts.com/cable-ties-materials-specifications/
  - https://patents.google.com/patent/US7086122
  - https://patents.google.com/patent/US6585243B1/en
  - https://wiki.dtonline.org/index.php/Ratchet
  - https://www.youtube.com/watch?v=TjOnY8tI9z8
  - https://www.printables.com/model/209087-zipcable-tie
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://en.wikipedia.org/wiki/Hemostat
  - https://www.qosina.com/blog/how-to-select-the-correct-barbed-connector-for-your-single-use-system
  - https://api.printables.com/graphql/ (models 475661, 1405899, 920228 and 227957, read 2026-10-06)

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, load, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, reuse_cycles, safety_notes

## 9 Face ratchet (star ratchet, face-engagement ratchet)

*one-way & ratchet.* Two discs with sloped teeth on their faces, pressed together by a spring, that drive one way and ride over each other the other way (bicycle hubs, printed ratcheting joints)

### What it is

- **plain_name**: Two discs with sloping saw-like teeth on their flat faces, pushed together by a spring: turned one way the teeth lock and the discs turn together; turned the other way the teeth ride up their slopes, push the discs apart and click over each other
- **term**: Face ratchet (axial ratchet, sawtooth face clutch, one-way jaw clutch)
- **aliases**: 
  - star ratchet (DT Swiss (brand) name for its bicycle-hub ratchet rings; now used loosely for any hub of this type)
  - Ratchet System / Ratchet EXP / Ratchet DEG (DT Swiss (brand) hub systems)
  - face-engagement ratchet
  - ratchet rings / toothed ratchet discs
  - sawtooth ratchet one-way clutch (Chinese patent CN203743242U)
  - running face ratchet / ratchet one-way clutch (face type) (Stackpole patent US6907971B2)
  - sawtooth jaw clutch or one-way dog clutch; Durley calls a jaw clutch with sloped jaws 'really a running-ratchet gear'
  - the simplest freewheel: 'two saw-toothed, spring-loaded discs pressing against each other axially' (Wikipedia 'Freewheel')
- **family**: one-way & ratchet
- **other_families**: clutches & couplings, torque limiting & slip
- **one_liner**: Two coaxial discs with sloped teeth on their facing sides, pressed together by a spring, that lock and drive together in one direction and ride up and click over each other in the other, as in star-ratchet bicycle hubs and printed one-way knobs and joints.
- **complexity**: A few parts acting as one unit: two toothed discs or rings, at least one of which can slide along the shaft but not turn on it (it sits on splines, a key or a hex); a spring that pushes them together (a coil, conical or wave spring, or a disc spring); and a nut, circlip or housing that holds the stack together. A DT Swiss hub has two ratchet rings, two springs, a spacer, a threaded ring nut and the freewheel body (DT Swiss manual; freewheel.co.uk).
- **how_it_works**: Each disc carries a ring of lopsided teeth on its face: a gentle ramp and a steep locking face. Turned the drive way, the steep faces butt together and the discs turn as one; turned the other way, the ramps slide over each other, pushing the sliding disc back against its spring until the tips pass, then the spring snaps it back into the next gap with a click (Wikipedia 'Freewheel'; Stackpole patent US6907971B2). Because the teeth run all the way round the face, all of them engage at once and share the load, unlike a single pawl (DT Swiss). The number of teeth sets how far it turns before it catches: engagement angle = 360° divided by the number of teeth, e.g. 18 teeth = 20°, 36 = 10°, 54 = 6.67°, 72 = 5°, 90 = 4° (DT Swiss).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): it drives or holds one way only
  - let it move (turn, slide or bend): the driven part can keep turning (coasting or overrunning) when the drive stops, as in a bicycle freewheel
  - slip or let go when overloaded: only in the variant whose locking faces are sloped instead of steep, which then slips at a set torque (see ratchet-tooth torque limiter)
- **motion**: rotate: unlimited rotation, locked together one way and free the other; the sprung disc also moves a little along the axis (about one tooth height) each time a tooth passes
- **degrees_of_freedom**: 1: relative rotation about the shared axis, allowed in one direction only; the sprung disc's small in-and-out movement along the axis is an internal motion that lets the teeth pass
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the defining behaviour
  - torque-limiting (slips or clicks at a set force/torque): not in a true face ratchet, but if the locking faces are made sloping the same parts become a clicking torque limiter whose slip torque is set by the spring and slope *(unverified parts omitted)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the steep locking faces butt together
  - spring force (a spring or springy part presses it in place): the spring keeps the teeth pressed into mesh; if it is missing or too weak the ratchet slips (DT Swiss manual)
- **input_output**: Rotation -> rotation at the same speed (1:1) in the drive direction; in the other direction the output overruns (freewheels) or the input can turn back without moving the output. Shafts in line (coaxial). Engagement angle (the free play before it catches) = 360°/number of teeth (DT Swiss). Not back-drivable in the locked direction. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: DT Swiss freehub bodies come off by hand and the ratchet rings and springs slide out for cleaning (freewheel.co.uk; DT Swiss manual); printed versions are held by a screw, nut or snap ring
- **reuse_cycles**: many times: it can be taken apart and reassembled for cleaning and greasing; the limit is tooth wear
- **tools_needed**: Often none to open (DT Swiss hubs: pull off the end cap and freehub body by hand); a special tool and a lot of force can be needed to undo the threaded ring nut in hub shells (singletrackworld forum); grease; for printed versions a screwdriver or hex key
- **seal**: none: the ratchet itself doesn't seal; hubs add seals and grease around it
- **load**: Medium to heavy for its size, because all the teeth share the load at once, creating far fewer point loads than pawls (DT Swiss) and giving a large contact area (Trifox). *(unverified parts omitted)*
- **adjustable**: Not in position. The freewheeling drag and noise can be tuned with the amount of grease (less grease is louder but wears more; DT Swiss manual) and the spring strength; the engagement angle is set by the number of teeth.
- **play_and_precision**: small to noticeable: it can turn back up to one tooth (engagement angle 360°/N, e.g. 10° for 36 teeth, 4° for 90 teeth; DT Swiss) before it catches. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the discs and spring are stacked onto the shaft from one end (e.g. the freehub body slides onto the hub axle)
- **materials**: 3D prints in PETG, nylon or PLA; the spring should be steel, because plastic springs under constant load relax (DuPont). *(unverified parts omitted)*
- **maker_difficulty**: moderate: the CAD is simple, but you need a metal spring, a disc that slides along a keyed or hex shaft without jamming, and face teeth that print cleanly and don't shear off along layers

### Making it

- **processes**: off-the-shelf part: bicycle hub ratchet rings and springs (spare kits), and face-type one-way clutches, 3D print (FDM): knobs, joints and demo one-way clutches with a metal spring *(unverified parts omitted)*
- **print_in_place**: partly / no: usually printed as two discs and assembled with a metal spring and a screw or nut. *(unverified parts omitted)*
- **making_tips_3d_printing**: 3) Overhangs up to about 45-60° print cleanly (Prusa), so teeth pointing up need no supports; if the teeth must face down onto the bed, one Hirth-joint library author suggests cutting off half of each tooth so no support is needed and it still meshes with full teeth (mechadense scad-lib-hirthjoints README). 4) The sliding disc needs a keyed, splined or hex bore with clearance so it can move along the shaft; start with about 0.3 mm (Prusa) and make sure it can't tilt and jam. 5) Use a metal spring (compression, wave or disc spring) to press the discs together, not a printed one: plastic springs under constant load relax (DuPont), and PLA creeps most (thrinter creep test). 7) Grease lightly: too much or the wrong grease stops the rings from engaging and they slip (DT Swiss manual). 8) Check that both toothed faces point at each other when assembling; one ring mounted upside down means no engagement (DT Swiss manual; freewheel.co.uk). 9) PLA softens from about 60 °C (CNC Kitchen); prefer PETG or nylon for anything used outdoors or in a warm place. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'ratchet kit' or 'star ratchet' spares for bicycle hubs (e.g. DT Swiss (brand) 36T, 54T), 'freehub body', 'compression spring', 'wave spring', 'disc spring' or 'Belleville washer', 'hex shaft' or 'splined shaft', 'thrust washer', 'circlip' or 'retaining ring', 'ratchet one-way clutch'. For a symmetric (both-ways) version look for 'Hirth coupling' or 'Hirth joint' (e.g. camera and lighting 'rosette' mounts).
- **rules_of_thumb**: 
  - Engagement angle = 360° / number of teeth: 18 teeth = 20°, 36 = 10°, 54 = 6.67°, 72 = 5°, 90 = 4° (DT Swiss 'Ratchet technologies overview').
  - All teeth engage at the same time, so the load is shared and point loads are far lower than with pawls (DT Swiss).
  - Grease only a thin, even layer; too much or the wrong grease can stop the ratchets working and let them slip while pedalling; less grease gives a louder freewheel but more wear (DT Swiss Ratchet Hubs technical manual v2022.09, pp. 19-23).
  - The simplest freewheel is two saw-toothed, spring-loaded discs pressing axially together (Wikipedia 'Freewheel').
  - A jaw clutch with sloped jaws, one half sliding on a feather key, transmits motion in one sense only and 'is therefore really a running-ratchet gear' (Durley, Kinematics of Machines, ch. IX, pp. 235-236).
  - Example proportions from a production sawtooth face clutch: 12-16 teeth, kept engaged by a compression spring; the patent claims over 30,000 cycles of life compared with under 20,000 for the roller type it replaced (Chinese patent CN203743242U).
  - Springs that stay compressed should be steel, not plastic (DuPont 'General Design Principles for Engineering Polymers', p. 36).
  - Printed sliding parts need about 0.3 mm clearance as a starting point (Prusa knowledge base).

### When to use it

- **everyday_examples**: 
  - Bicycle rear hubs of the 'star ratchet' type (e.g. DT Swiss (brand) hubs), which click as you coast
  - Sawtooth one-way clutches in small-engine starters (Chinese patent CN203743242U)
  - Related everyday cousins: clicking fuel caps (sloped teeth that slip, a torque limiter) and push-and-turn child-resistant caps *(unverified parts omitted)*
- **when_to_use**: Use a face ratchet when you want a one-way drive or freewheel that is compact along a shaft, strong for its size because every tooth shares the load, and easy to strip and clean, such as a hub, a winding knob, a one-way crank or a printed joint that should ratchet one way. It suits 3D printing because the teeth are on a flat face and it needs only two printed discs and a spring. With symmetric teeth instead of sawtooth teeth the same layout becomes an indexing joint that locks both ways.
- **when_not_to_use**: If you want it to hold in both directions and be adjusted by hand, use a Hirth joint or a ball detent. If you want it to slip at a set torque, use a ratchet-tooth or ball-detent torque limiter. *(unverified parts omitted)*
- **environment_limits**: Printed PLA discs soften from about 60 °C (CNC Kitchen). Plastic springs relax under constant load (DuPont), so use a steel spring. *(unverified parts omitted)*
- **safety_notes**: On a bicycle, a freewheel that slips because of wrong lubrication can cause a fall; DT Swiss marks this as a risk of injury. The spring is compressed, so parts can jump out when the stack is opened. Fingers can be pinched between the toothed faces when turning it by hand.
- **common_failures**: From the DT Swiss manual: the freewheel does not engage or slips because one or both ratchet rings are fitted upside down, there is too much or the wrong grease, the rings are worn, or a spring was left out. *(unverified parts omitted)*
- **related**: 
  - Ratchet and pawl: one pawl catches a toothed wheel; simpler and needs no axial spring travel, but carries the load on one tooth
  - Linear ratchet: the same one-way idea on a straight toothed strip
  - Hirth joint: symmetric teeth on the faces of two discs, self-centring and locking both ways with no backlash once an axial load (such as a clamping bolt) holds the halves together (Wikipedia 'Hirth joint')
  - Ratchet-tooth torque limiter: similar sprung face teeth but with sloping locking faces, so it slips when the torque is too high
  - Dog clutch (jaw clutch): square jaws on two discs slid together to engage drive in both directions
  - Push-and-turn child-resistant cap: ratchet-like teeth on the cap that only drive when pressed together
  - Sprag clutch and roller clutch (one-way bearing): silent one-way locking by wedging, with almost no backlash
  - Ball-detent torque limiter: balls in dimples instead of teeth, slipping at a set torque
  - Compliant ratchet (flexure pawl): one-piece printed ratchet with springy arms instead of a separate spring

### Pictures, videos and models

- **links**: 
  - [Ratchet Technologies Overview (DT Swiss)](https://www.dtswiss.com/en/wheels/wheels-technology/ratchet-technologies-overview): Diagrams of star-ratchet hub systems with two toothed rings and springs, and a table of tooth counts and engagement angles *(licence: link only)*
  - [DT SWISS Star Ratchet Explained ! & HOW TO Service freehub (YouTube, Alex - Cycle Fixation)](https://www.youtube.com/watch?v=-qO2c1GzQMU): Video of the two toothed ratchet rings and springs inside a hub, how they engage, and how to clean and grease them *(licence: link only (standard YouTube licence))*
  - [US6907971B2 One-way clutch (Stackpole, Google Patents)](https://patents.google.com/patent/US6907971B2/en): Patent drawings of a spring-loaded face ratchet one-way clutch with inclined faces and axial locking faces *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [scad-lib-hirthjoints (mechadense, OpenSCAD library README)](https://raw.githubusercontent.com/mechadense/scad-lib-hirthjoints/master/README.md): OpenSCAD library that generates correct face-toothed (Hirth) joints, flat or conical, with tooth count, radius and slant as parameters; a starting point for printed face teeth, though its teeth are symmetric, not sawtooth *(licence: LGPL-3.0)* *(unverified parts omitted)*
- **diagram_idea**: Side view of two discs with sawtooth faces on a shaft with a spring behind the right-hand disc: first the discs lock and turn together; then, turned the other way, the ramps push the right disc back against the spring (shown compressing) until the tips pass and it snaps into the next gap, with an angle arc labelled '360° / number of teeth'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Freewheel
  - https://en.wikipedia.org/wiki/Hirth_joint
  - https://www.dtswiss.com/en/wheels/wheels-technology/ratchet-technologies-overview
  - https://archive.org/details/dt-swiss-ratchet-hub-manual-v17-08-and-v22-09
  - https://archive.org/download/dt-swiss-ratchet-hub-manual-v17-08-and-v22-09/MAN_WXD10000000896S_WEB_EN_001_djvu.txt
  - https://www.freewheel.co.uk/blog/post/how-to-service-dt-swiss-star-ratchet-hubs
  - https://www.trifoxbike.com/inside-the-click-a-guide-to-ratchet-pawl-and-star-ratchet-hub-mechanisms
  - https://singletrackworld.com/forum/bike-forum/dt-swiss-effing-star-ratchet/
  - https://patents.google.com/patent/US6907971B2/en
  - https://patents.google.com/patent/CN203743242U/en
  - https://ecommons.cornell.edu/server/api/core/bitstreams/809167fc-7cef-4c99-a0a1-60a708dede4f/content
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.youtube.com/watch?v=-qO2c1GzQMU
  - https://www.printables.com/model/432501-print-in-place-palm-ratchet-65mm-axis
  - https://api.printables.com/graphql/
  - https://raw.githubusercontent.com/mechadense/scad-lib-hirthjoints/master/README.md
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, input_output, links, load, make_it_yourself, making_tips_3d_printing, materials, play_and_precision, print_in_place, processes, special_behaviour, when_not_to_use

## 10 Sprag clutch

*one-way & ratchet.* A ring of tilted wedges (sprags) between two rings that jam instantly when turned one way and slide freely the other way, with no clicking

### What it is

- **plain_name**: A silent one-way ring: a row of small tilted blocks packed between an inner ring and an outer ring, which let the rings slide past each other one way and jam them together instantly the other way
- **term**: Sprag clutch (sprag-type one-way clutch; a kind of freewheel or overrunning clutch)
- **aliases**: 
  - sprag freewheel
  - sprag one-way clutch
  - cam clutch (the name Tsubaki uses for its sprag clutches, whose wedge blocks it calls cams)
  - one-way clutch
  - overrunning clutch
  - freewheel clutch
  - backstop or holdback (when one ring is bolted to the frame so a shaft can't run backwards)
  - indexing clutch (when it is rocked back and forth to step a shaft forward)
  - one-way-locking ball bearing (catalogue name for a ball bearing with sprags inside)
  - one-way bearing (loose everyday name, also used for roller clutches)
  - mechanical diode (informal)
- **family**: one-way & ratchet
- **other_families**: clutches & couplings, self-locking & anti-back-drive, motion conversion
- **one_liner**: A ring of tilted steel wedge-blocks (sprags) between two smooth rings that lets one ring spin freely past the other in one direction but wedges them together instantly and silently in the other, with no teeth and no clicking.
- **complexity**: A small assembly that acts as one unit. Parts: inner ring (inner race), outer ring (outer race), a full ring of shaped steel wedge-blocks (sprags), a spring that keeps every sprag lightly touching both rings (energising spring, e.g. a coil or ribbon spring), and a cage that keeps the sprags evenly spaced (retainer). Packaged units also have support bearings, seals and a keyway or flange.
- **how_it_works**: Each sprag is a small steel block shaped like a lopsided figure-eight, so it is longer measured corner to corner in one direction than in the other (Renold: dimension AA is greater than BB). A light spring tips every sprag so it always touches both rings. When the rings turn one way relative to each other, friction tips the sprags flatter and they slide (overrun or freewheel). When the rings try to turn the other way, friction stands the sprags up, and because they are too long to stand upright in the gap they wedge (jam) the rings together within a fraction of a turn. Because the grip is pure friction on smooth rings, it can lock at any angle (infinite engagement points) instead of waiting for the next tooth as a ratchet does.

### Finder attributes

- **job**: 
  - stop it moving back (one-way): used as a backstop so a conveyor, lift or pump shaft can't run backwards
  - let it move (turn, slide or bend): the driven part can coast or run faster than the drive (overrunning), e.g. a helicopter rotor after engine failure
  - change the kind of motion: rocked back and forth by a crank, it steps a shaft forward in one direction (indexing)
- **motion**: rotate: continuous rotation; the two rings turn freely relative to each other in one direction and lock in the other
- **degrees_of_freedom**: 1: the rings can only turn relative to each other about their shared axis, and only in the free direction; in the locking direction they act as one piece (0 relative freedom)
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the core behaviour; locks at any angle with no clicking
  - self-locking (holds under load, won't back-drive): with the outer ring fixed to the frame it holds a load against running backwards (backstop or holdback), e.g. inclined conveyors and bucket elevators
  - motion conversion (e.g. rotary to linear): driven back and forth by a crank or lever, it turns the rocking into step-by-step one-way rotation (indexing), with steps of any size because there are no teeth
- **holding_principle**: 
  - friction or clamping (force-fit): the sprags wedge between smooth rings and hold by friction, not by teeth
  - not a holding joint (it moves or passes on motion): it passes on or blocks turning force between a shaft and a hub
- **input_output**: Rotation -> rotation at 1:1 in the drive direction; in the other direction the output simply freewheels (overruns). Efficiency: no slip and no lost motion when locked (Renold), with a small drag from the springs while overrunning. Shaft arrangement: in line (the inner and outer rings share one axis). Back-drivable: in the free direction the output can always run ahead of the input; if the output tries to turn backwards relative to the input the clutch locks, so it drives the input backwards too, or, when the outer ring is fixed to the frame, it is not back-drivable at all (backstop). When rocked by a crank it converts oscillation -> intermittent one-way rotation (indexing).
- **power**: passive (no power needed): the springs and friction do all the work
- **removability**: removable: a packaged unit is held on the shaft by a key, set screws or a clamp and can be pulled off; Renold says the clutch itself must not be taken apart or repaired in the field
- **reuse_cycles**: many times: the whole unit can be fitted and removed from a shaft many times, but it should not be opened up
- **tools_needed**: Hex keys or spanners for set screws, clamp collars or flange bolts; a parallel key for keyed bores; a press or bearing puller for tight fits; a torque arm and stop for backstops
- **seal**: none: the clutch doesn't seal anything; packaged units have oil seals or labyrinth plates only to keep their own oil or grease in and dirt out (Renold)
- **load**: heavy for its size: sprag clutches carry more torque for their size than other freewheel types because the ring is packed full of sprags (Renold, Tsubaki). Strong in twist (torque) in the locking direction only; carries no torque in the free direction. Weak against misalignment and radial load unless it has its own bearings; it must not be used as a flexible coupling (Renold)
- **adjustable**: no: nothing to adjust. The locking direction is fixed; some symmetrical units can be turned round to reverse it, while non-symmetrical ones must be ordered as left-hand or right-hand (Renold)
- **play_and_precision**: Play: none. Renold says there is no mechanical lost motion or backlash, but the parts flex slightly under load (torque wind-up) by about 2 to 6 degrees at full rated torque, less at lower torque. A bicycle-hub review estimates under one degree before the sprags are fully loaded. Repeatability: indexing can be done in steps of any size, limited only by the rest of the mechanism (Renold). Misalignment: very little tolerated; the two rings must stay concentric (e.g. within 0.05 mm total indicator reading for Renold's direct-mount type), and separately supported shafts need a flexible coupling as well
- **access_needed**: end of a tube or shaft: the clutch slides onto the end of a shaft and into or onto a housing, gear or pulley
- **materials**: Hardened alloy-steel sprags and hardened, precision-ground steel rings (Tsubaki, Renold); plastic cages; bronze sleeves or rolling bearings in packaged units. A direct-mount type that uses your shaft as the inner ring needs a case-hardened, ground steel shaft (Renold). It suits steel shafts and steel or cast-iron housings; plastic, aluminium or printed parts can only be used around a complete bought unit, not as the running surfaces
- **maker_difficulty**: hard to make, easy to buy: the sprags and rings need hardened steel ground to fine tolerances, so buy a complete unit (for example a one-way-locking ball bearing with internal sprags) and design your printed or machined parts around it

### Making it

- **processes**: 
  - off-the-shelf part (the normal choice: packaged sprag clutches, sprag inserts and one-way-locking ball bearings)
  - 3D print (FDM): housings, gears and pulleys that hold a bought unit, or demonstration models
  - CNC: turned shafts, housings and keyways that locate a bought unit
- **print_in_place**: no: the only printable 'sprag clutch' model found (Prism08 on Printables) is printed as five separate parts and assembled with tweezers, and it locks against teeth rather than by friction alone; real sprag clutches need hardened steel parts
- **making_tips_3d_printing**: A true friction sprag clutch can't really be printed: manufacturers use hardened, precision-ground steel rings and sprags (Tsubaki, Renold), and plastic would dent and slip. What makers do instead: (1) Buy a complete sprag unit such as a one-way-locking ball bearing (McMaster sells these with internal sprags) and print the housing, gear or pulley around it. Don't press anything hard onto the outer ring: Renold designs its clutches so that parts locating on the outer ring have a clearance fit (at least 0.025 mm), with torque carried by keys, bolts or a flange rather than a tight fit. Make the housing stiff and keep the shaft and housing concentric, because the sprags only share the load evenly when the rings are concentric (Tsubaki). If the housing is on a separate shaft, add a flexible coupling rather than letting the clutch take misalignment (Renold). (2) For a printed demonstration, Prism08's 'Sprag clutch for RC models' uses three tilting 'sprag poles' between a pentagonal centre and a toothed outer ring; flip the centre and poles over to reverse the direction. Because it catches on teeth, grease can be added without stopping it locking. Its parts are tiny, so print slowly with fine layers and assemble with tweezers. For friction-only printed one-way clutches, see the roller clutch entry, which is much easier to print.
- **off_the_shelf_parts**: Search catalogue names: 'sprag clutch', 'sprag freewheel', 'cam clutch', 'one-way clutch, sprag engagement' (keyed hub or flush hub for press-fitting; McMaster), 'one-way-locking ball bearing' (a ball bearing with internal sprags; McMaster), 'sprag clutch insert' or 'direct-mount sprag clutch' (uses your hardened shaft as the inner ring; Renold DM series), 'backstop' or 'holdback' with torque arm (Renold, Tsubaki), 'overrunning clutch coupling' and 'one-way-locking sprocket'. Packaged units come oil-filled, grease-filled or sealed and greased for life.
- **rules_of_thumb**: 
  - There is no mechanical backlash, but expect 2 to 6 degrees of elastic wind-up between the rings at full rated torque, less at lower torque (Renold sprag clutch catalogue, 'Backlash' note)
  - Never use a sprag clutch as a flexible coupling; between separately supported shafts, add a flexible coupling as well (Renold catalogue, Selection of Sprag Clutches; Tsubaki Cam Clutch catalogue gives the same warning)
  - Never use lubricants with EP (extreme-pressure) additives: they keep an oil film under pressure that stops the sprags gripping, so the clutch slips (Renold Installation and Lubrication; GMN lubrication guide; Tsubaki catalogue)
  - Oil-lubricated clutches: fill completely for indexing, half-fill for overrunning or backstopping (Renold). GMN suggests an oil bath covering one third of the sprag height, or filling 30 to 60 percent of the free space with grease (GMN lubrication guide)
  - Overrunning speed is the difference between the ring speeds if both turn the same way, and the sum if they turn opposite ways; check it against the catalogue limit (Renold catalogue)
  - Size by torque: selection torque = actual torque x service factor from the maker's table (higher for shock loads and engine drives) (Renold selection procedure)
  - Direct-mount type (your shaft is the inner ring): case-hardened to HV 650-750 at the surface, hardened depth 1.27-1.52 mm after grinding, ground to 13-20 microinch CLA, shaft and housing concentric within 0.05 mm total indicator reading (Renold DM series)
  - Use parallel keys with clearance at the top, never taper keys; Renold recommends a hardened key of HRC 25-40 and shaft tolerance h6 for most clutches (Renold Installation and Lubrication)
  - Keep the rings concentric so every sprag takes an equal share of the load at the moment of engagement (Tsubaki Cam Clutch catalogue, Cam Clutch Basics)

### When to use it

- **everyday_examples**: 
  - Helicopters: the rotor can keep spinning faster than a failed engine so the pilot can glide down (autorotation) (Wikipedia)
  - Motorcycle electric starters and many automatic car gearboxes (Wikipedia)
  - Silent mountain-bike rear hubs that engage instantly with no clicking (e.g. Onyx hubs) (Bikepacking.com review)
  - Gearless 'silent ratchet' wrenches, and backstops on inclined conveyors and bucket elevators (Wikipedia, Renold)
- **when_to_use**: Use a sprag clutch when you need a one-way drive or anti-reverse lock that grips instantly at any angle, makes no noise, and carries a lot of torque in a small space: backstops on hoists, conveyors and pumps; letting a second motor or a hand crank drive a machine without being dragged round by the main motor (overrunning); starter drives; and fine, stepless indexing from a rocking crank. It is also the best choice when a ratchet's steps would be too coarse or its clicking too loud. For hobby projects, buy a ready-made unit (such as a one-way-locking ball bearing) when a printed roller clutch is too weak.
- **when_not_to_use**: Don't use it where the torque swings back and forth around zero many times a second (engine vibration without a flexible coupling), where the shafts are out of line (it must not act as a flexible coupling), or where it is the only thing keeping people safe (add a positive lock or brake). Don't try to make the sprags yourself: for printed one-way drives use a roller clutch, a ratchet and pawl, or a compliant (flexure) ratchet instead. If you need to be able to switch the drive on and off, use a dog clutch or a wrap-spring clutch; if you want it to slip at a set overload, use a slip clutch or torque limiter. For very cheap, light-duty jobs a drawn-cup roller clutch (one-way needle bearing) is smaller and cheaper.
- **environment_limits**: Heat and cold: limited mainly by the lubricant; Renold lists oils and greases for about -7 to 65 C or -40 to 65 C, and GMN lists greases rated from -30 to 130 C and -40 to 180 C. Lubricant: EP additives cause slipping; too thick or too much lubricant can stop the sprags engaging, too little causes wear (GMN). Dirt and water: need a clean, sealed environment because the sprags depend on a thin oil film (GMN). Vibration: normal machine vibration is fine, but strong torsional vibration, typically from a petrol or diesel engine without a torsionally flexible coupling, can make it malfunction (Renold); strong vibration can overcome the springs and break sprag tips (GMN). Over time the sliding surfaces wear while overrunning, which is why some designs lift the sprags clear at high speed ('lift-off' or non-contact designs, Tsubaki).
- **safety_notes**: A backstop that slips or rolls over lets a loaded conveyor, hoist or lift run backwards; Renold warns that a clutch used as the sole failsafe device can fail through misuse or lack of lubrication, so add a separate brake or positive lock where people could be hurt. Large units hold a lot of stored energy on inclined conveyors; the torque arm must be free to move slightly between its stops (Renold). Rotating shafts and exposed outer rings are pinch and entanglement points. Don't open or repair a sprag clutch in the field (Renold).
- **common_failures**: Wear and flat spots on the sprags from too little or too thin lubricant, which lets metal touch metal while overrunning (fix: correct oil or grease, clean environment) (GMN). Overload 'rollover': too much torque flips sprags past their working angle and destroys the clutch, often with twisted cages; prevent by sizing with a service factor, or choose non-rollover sprags (GMN, Tsubaki, Renold's anti-rollover sprags). 'Popping': sprags that engage late then spring forward, often caused by lubricants with EP additives or wrong race hardness (GMN). Slipping from EP-additive oil (Renold, GMN). Broken sprag tips from heavy vibration (GMN). Uneven loading and early failure when shaft and housing are not concentric (Tsubaki, Renold). A damaged cage is usually a sign of one of these problems, not the cause (GMN).
- **related**: 
  - Roller clutch (one-way bearing): rollers on ramps do the wedging instead of sprags; cheaper, easier to 3D print and very common as small drawn-cup needle clutches, but carries less torque for its size (Renold, Tsubaki)
  - Ratchet and pawl: locks on teeth, so it clicks and can only lock at the next tooth, but it is positive (can't slip) and easy to print
  - Face ratchet (star ratchet): sloped teeth on two facing discs; clicks, used in bicycle hubs that sprag hubs compete with
  - Wrap-spring clutch: a coil spring grips a hub instead; can also be switched on and off and used for single-revolution indexing
  - Compliant ratchet and overrunning clutch (flexure pawl): printable one-piece alternative with springy pawls
  - Bidirectional anti-back-drive clutch: lets the motor drive either way but stops the load driving the motor, which a single sprag clutch can't do
  - Friction slip clutch and torque limiters: slip at a set torque in both directions rather than locking in one

### Pictures, videos and models

- **links**: 
  - [Sprag clutch.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Sprag_clutch.png): Diagram of a sprag clutch in drive and in freewheel, showing the sprags jammed and free; used on the English Wikipedia article *(licence: CC BY-SA 4.0 (Mikepj1967))*
  - [Sprag one-way bearing labeled.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Sprag_one-way_bearing_labeled.png): Labelled picture of a one-way bearing with sprags and bearing rollers sharing one race *(licence: Public domain (NASA Goddard Space Flight Center))*
  - [Sprag overrunning clutch 1 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=0gwzmLh03Bw): CAD animation of a sprag overrunning clutch driving and overrunning (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
  - [Sprag clutch Operation (DrivelineMaster, YouTube)](https://www.youtube.com/watch?v=CFKsOhuGhno): Educational video on how an overrunning sprag one-way clutch operates *(licence: link only)*
  - [Sprag clutch (Wikipedia)](https://en.wikipedia.org/wiki/Sprag_clutch): Short article with the jam/slide diagram and a list of uses (helicopters, starters, gearboxes, conveyors, bicycle hubs, wrenches) *(licence: CC BY-SA 4.0 (text))*
- **make_it_yourself**: 
  - [Sprag clutch for RC models (Prism08, Printables)](https://www.printables.com/model/626159-sprag-clutch-for-rc-models): Small printable 'sprag-style' one-way clutch for an RC car gearbox: sprag centre, three sprag poles, toothed ring and snap-on cover, driven by a pentagonal shaft; flip parts to reverse direction. Locks against teeth, so it tolerates grease. Details read through the Printables public API because the web page blocks automated access *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: A cut-away ring showing three enlarged figure-eight sprags between two rings, drawn twice side by side: on the left the inner ring turns the free way and the sprags lean over and slide (green arrow), on the right it turns the other way and the sprags stand up and wedge, with the longer corner-to-corner length (AA) marked against the gap.
- **sources**: 
  - https://en.wikipedia.org/wiki/Sprag_clutch
  - https://en.wikipedia.org/wiki/Freewheel
  - https://roymech.org/Useful_Tables/Drive/Clutches.html
  - https://commons.wikimedia.org/wiki/Category:Clutches
  - https://commons.wikimedia.org/wiki/File:Sprag_clutch.png
  - https://commons.wikimedia.org/wiki/File:Sprag_one-way_bearing_labeled.png
  - https://www.renold.com/upload/renoldswitzerland/sprag_clutch_m.pdf
  - https://www.renold.com/company/latest-news/couplings/sprag-clutch-animation-news
  - https://www.gmnbt.com/resources/guides/sprag-clutch/how-sprag-clutches-work/
  - https://www.gmnbt.com/resources/guides/sprag-clutch/failure-mechanisms-guide/
  - https://www.gmnbt.com/resources/guides/sprag-clutch/lubricating-sprag-clutch-best-practices/
  - https://www.ustsubaki.com/resources/knowledge-center/guide-to-indexing-overrunning-and-backstop-clutches/
  - https://www.ustsubaki.com/wp-content/uploads/L14016-Tsubaki-Cam-Clutch-Catalog-2019.pdf
  - https://tsubaki.eu/products/mechanical-components/cam-clutches-freewheels/
  - https://www.mcmaster.com/products/one-way-clutches/
  - https://bikepacking.com/gear/onyx-hubs-review/
  - https://hackaday.com/2018/03/13/3d-printed-transmission-invented-again-this-time-continuously-variable/
  - https://hackaday.com/2024/12/14/behold-a-geared-continuously-variable-transmission/
  - https://hackaday.com/2010/02/03/the-mechanical-diode/
  - https://www.printables.com/model/626159-sprag-clutch-for-rc-models
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=0gwzmLh03Bw
  - https://www.youtube.com/watch?v=CFKsOhuGhno

## 11 Roller clutch (one-way bearing)

*one-way & ratchet.* Rollers sit in ramped pockets and wedge tight when the shaft turns one way, but roll free the other way; sold as a ready-made one-way needle bearing

*Also covers:* Also covers the motion rectifier (two one-way clutches that turn back-and-forth motion into one-way rotation)

### What it is

- **plain_name**: A one-way bearing: a ring with little rollers sitting in sloped pockets, so a shaft spins freely one way but the rollers wedge and grip the shaft the other way
- **term**: Roller clutch (roller-ramp one-way clutch); the ready-made small version is the drawn cup roller clutch or one-way needle bearing
- **aliases**: 
  - one-way bearing
  - one-way needle bearing
  - one-way needle roller clutch
  - drawn cup roller clutch (catalogue name; HF series without bearings, HFL series with built-in needle bearings)
  - one-way locking needle-roller bearing (McMaster catalogue name)
  - roller-ramp clutch
  - roller freewheel
  - overrunning clutch
  - freewheel clutch
  - clutch bearing
  - anti-reverse bearing (fishing reels)
  - motion rectifier, mechanical rectifier or mechanical diode (two one-way clutches that turn back-and-forth motion into one-way rotation)
- **family**: one-way & ratchet
- **other_families**: clutches & couplings, self-locking & anti-back-drive, motion conversion
- **one_liner**: Rollers sit in pockets with a sloping floor (ramps) between a shaft and an outer ring; turn one way and they roll into the wide end and spin free, turn the other way and they jam into the narrow end and lock the shaft to the ring.
- **complexity**: A small assembly that acts as one unit. Parts of the common drawn-cup type: a thin pressed-steel outer ring (drawn cup) with ramps inside, needle rollers, a plastic cage, and a small spring for each roller; the shaft itself is the inner running surface. The HFL type adds needle bearings at each end. Printed versions: outer ring, a hub with ramped pockets, and rollers (printed, or steel pins), sometimes with springs. The motion rectifier variant is a small assembly of two one-way clutches plus gears (e.g. three bevel gears) and a rack and pinion or crank.
- **how_it_works**: The pocket for each roller is shaped like a wedge: one end is deeper than the roller, the other end is shallower. A light spring pushes each roller towards the shallow end so it always touches both the shaft and the ring. When the shaft turns the free way relative to the ring, friction rolls the rollers towards the deep end and they spin freely (overrun). When it turns the other way, friction drags the rollers into the shallow end, where they wedge between the ramp and the shaft and lock them together by friction; this works because the wedge angle is shallow enough that friction beats it (self-locking). A motion rectifier puts two of these clutches, facing opposite ways, on a back-and-forth shaft so that one drives on each stroke, turning both strokes into one-way rotation of the output, like an electrical full-wave rectifier.

### Finder attributes

- **job**: 
  - stop it moving back (one-way): e.g. the anti-reverse in a fishing reel, or a spool that can wind in but not unwind
  - let it move (turn, slide or bend): lets a driven part coast or run faster than its drive (overrunning), e.g. a starter motor or e-bike drive
  - change the kind of motion: two clutches as a motion rectifier turn back-and-forth rocking into continuous one-way rotation; one clutch driven by a crank gives step-by-step feeding (indexing)
- **motion**: rotate: continuous rotation, free in one direction relative to the ring and locked in the other; the HFL type also works as a plain needle bearing
- **degrees_of_freedom**: 1: the shaft can only turn relative to the ring about their common axis, and only in the free direction; in the locking direction the relative freedom is 0
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): locks at any angle with only a small take-up angle, and runs almost silently
  - self-locking (holds under load, won't back-drive): with the ring fixed, it holds a load from turning back, e.g. a fishing reel rotor or a spool
  - motion conversion (e.g. rotary to linear): as a motion rectifier, two clutches turn oscillating motion (from a rack, lever or wave) into steady one-way rotation; a single clutch rocked by a crank gives indexing
- **holding_principle**: 
  - friction or clamping (force-fit): the rollers wedge between a ramp and a smooth shaft and hold by friction
  - not a holding joint (it moves or passes on motion): it passes on or blocks turning force between shaft and housing
- **input_output**: Rotation -> rotation at 1:1 in the drive direction; freewheel (overrun) in the other. Efficiency: close to lossless when locked, with a small spring drag when overrunning. Shaft arrangement: in line (shaft inside ring). Back-drivable: the output can always run ahead in the free direction; turning it backwards relative to the input locks it, so with the ring fixed it is not back-drivable (anti-reverse). Motion rectifier: oscillating rotation or reciprocating linear motion -> continuous one-way rotation; Li et al.'s shock-absorber harvester (two roller clutches and three bevel gears) reached over 60 percent mechanical efficiency, compared with 30-45 percent for their conventional design. Take-up (delay) angle: small and growing with load; *(unverified parts omitted)*
- **power**: passive (no power needed): springs and friction do the work
- **removability**: semi-permanent (can be undone but may damage parts): drawn-cup clutches are press-fitted into the housing and can be pressed out, but the thin cup deforms easily; larger roller clutches with keyed hubs are removable
- **reuse_cycles**: a few times: a press-fitted drawn cup can be removed and refitted only a few times before the fit or cup is damaged; the shaft slides in and out freely (turn it the free way while inserting, NTN)
- **tools_needed**: An arbor press or vice with a stepped pressing mandrel for drawn cups (NTN says never hammer the cup); hex keys for set-screw or keyed units; none for printed print-in-place versions (a hex key helps break a new print free)
- **seal**: none: open drawn cups have no seals; they are pre-greased and rely on the surrounding parts to keep dirt out
- **load**: light to medium: NTN drawn-cup clutches carry about 1.76 N·m on a 6 mm shaft (HF0612), 5.3 N·m on 10 mm (HF1012), 28.5 N·m on 20 mm (HF2016) and 121 N·m on 35 mm (HF3520); industrial roller clutches go much higher. Strong in twist in the locking direction only. The HF type carries no radial load and must have a bearing on each side; the HFL type has built-in needle bearings for radial load (NTN). Printed plastic versions carry only small torques
- **adjustable**: no: nothing to adjust. To reverse the locking direction, press a drawn cup in the other way round (the free direction is marked on the ring face, NTN) or flip the hub of a printed version
- **play_and_precision**: Play: small. Rollers are individually sprung so they always touch the shaft, which gives high indexing accuracy (Engineer Live), but there is a small take-up angle between input and output (NTN's 'delay angle', which rises with load and stays stable for over a million cycles; Repeatability: good for indexing. Misalignment: very little tolerated; NTN specifies shaft tolerance h5 (h6), shaft roundness IT3 and support bearings on both sides to keep it concentric *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the clutch is pressed into a bore and the shaft is pushed through it
- **materials**: Bought units: pressed alloy-steel cup, hardened steel needle rollers, glass-fibre-reinforced polyamide cage, steel springs. The shaft must be hardened steel (HRC 58-64, NTN) because the rollers run directly on it. Housings: steel, cast iron or aluminium alloy; for plastic housings use the knurled-outer-ring version (suffix R) (Engineer Live). Printed versions: PLA or PETG, with printed rollers or steel pins as rollers
- **maker_difficulty**: easy to moderate: a bought one-way needle bearing just presses into a housing, but it needs a hardened, accurate shaft and a stiff housing; print-in-place plastic versions are easy to print but weak

### Making it

- **processes**: 
  - off-the-shelf part (drawn cup roller clutches, one-way needle bearings, keyed roller clutches)
  - 3D print (FDM): print-in-place demonstration clutches and light-duty clutches, plus housings, gears and pulleys for bought units
  - 3D print (resin): fine print-in-place clutches (not tested in this research)
  - CNC: hardened shafts and precise housing bores for bought units
- **print_in_place**: yes: several Printables designs print already assembled with the rollers inside (e.g. Jori's 32 mm model, Radim Mach's parametric bearing, Wakkie's bearing), though they are weak and may need breaking free; others are 'partly', adding pen springs (tylermor) or metal cylinders as rollers (ukman's one-way screwdriver)
- **making_tips_3d_printing**: Two routes. (1) Print the whole clutch. Print-in-place designs put the hub, rollers and outer ring on the build plate together with the rotation axis vertical, so every roller and ramp is drawn round in the XY plane. Jori's 32 mm, 6 mm-tall model printed at 0.16 mm layers with no supports in under 30 minutes, but needed breaking free after printing (a hex key in the centre hole helps). Plastic grip is weak: tylermor found PLA works but 'max gripping torque is still kind of low', and used pen springs to press shoes against the rollers. For more grip, use steel rollers (dowel pins) in printed pockets, as in ukman's one-way screwdriver (Hackaday says it suits light assembly work, not high torque). Keep grease out of friction clutches, or use very little: NTN warns that too much grease stops even a steel clutch gripping properly. (2) Buy a drawn-cup clutch and print around it. Press it into the housing with a flat-ended tool on the marked face, never hammer it (NTN). Use the knurled 'R' version in plastic housings (Engineer Live). Use a hardened, ground steel shaft (e.g. a hardened dowel pin or linear rod), not a printed or soft shaft, and support it with a bearing on each side or use the HFL type. weav's printed spool gear with an HF0306 on a stock 3 mm rod has run for over six months in a low-torque filament box, but he notes the rod's hardness and roundness are unknown. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search: 'drawn cup roller clutch', 'one-way needle bearing', 'HF' series (e.g. HF0612 = 6 mm shaft, 12 mm wide; HF0306 = 3 mm shaft), 'HFL' series (with built-in bearings), 'HF...R' (knurled outer ring for plastic housings), 'one-way locking needle-roller bearing' and 'one-way clutch, roller engagement' (knurled or keyed hub) (McMaster), 'one-way-locking sprocket', 'freewheel', 'overrunning clutch'. Pair HF clutches with matching 'HK' drawn cup needle roller bearings as support bearings (NTN lists matching HK sizes). Shafts: hardened ground dowel pins or linear shafts. For a motion rectifier: two one-way bearings plus a gear pair or three bevel gears.
- **rules_of_thumb**: 
  - Shaft (the rollers run on it): hardened to HRC 58-64 with at least 0.4 mm hardened depth, roughness 0.2 micrometre Ra, roundness IT3 (IT4) (NTN one-way clutch catalogue, Table 3)
  - Fits: shaft h5 (h6); housing N6 (N7) in iron or steel, R6 (R7) in light alloy; no snap ring needed, the press fit holds it (NTN, Table 1)
  - Housing wall at least 0.75 x (D - Fw) for iron-based housings and 1.5 x (D - Fw) for light alloy, where D is the clutch outer diameter and Fw the roller circle diameter (NTN, Table 2)
  - HF clutches only clutch: put a radial bearing at each end, or use HFL with built-in needle bearings (NTN)
  - Rated torque examples: HF0612 1.76 N·m, HF1012 5.30 N·m, HF2016 28.5 N·m, HF3520 121 N·m (NTN dimension table)
  - Operating temperature: -10 to 70 C with grease, -10 to 120 C with oil (NTN)
  - Use the knurled-outer-ring version (suffix R) in plastic housings (Engineer Live, One-way roller clutches)
  - Locking only happens if friction beats the wedge: the friction coefficient must be greater than the tangent of the self-locking (wedge) angle, so ramps are shallow (Tianyu Gao, 'Quick info - One-Way Bearing', LinkedIn)
  - Motion rectifier: two one-way roller clutches driving opposite bevel gears into one output gear gave over 60 percent mechanical efficiency at higher frequencies in a shock-absorber energy harvester (Li, Zuo, Kuang and Luhrs, Smart Materials and Structures, 2013)

### When to use it

- **everyday_examples**: 
  - The instant anti-reverse in a spinning fishing reel, which stops the handle turning backwards (Shimano patent EP2399455B1)
  - E-bike drives and motorcycle electric starters (Engineer Live)
  - Early bicycle freewheels: a roller freewheel was patented in the UK in 1881 (Wikipedia, Freewheel)
  - 3D printer filament spool drives and rewinders that must wind one way only (weav's Qidibox gear, Printables)
- **when_to_use**: Use a roller clutch when you want a small, cheap, quiet one-way drive or anti-reverse that locks at any angle without clicking: spools that must only wind in, hand cranks that shouldn't be dragged back, push-and-return tools (one-way screwdrivers), paper and filament feeds, and robot or RC drives that must coast. A bought drawn-cup one-way needle bearing is the easiest way to add a strong one-way action to a 3D-printed design. Use two back to back as a motion rectifier to harvest energy from back-and-forth motion (waves, shock absorbers, a pull cord or a lever) or to make a push-pull crank turn a wheel one way.
- **when_not_to_use**: Avoid it for very high torque in a small space (a sprag clutch carries more), for tiny back-and-forth oscillations under load (NTN warns fine oscillation and high oscillation cycles shorten life), on soft, printed or worn shafts (it will slip or wear the shaft), and where slipping could hurt someone without a separate positive lock (NTN). If you need a positive lock that can't slip, use a ratchet and pawl. If you need to switch the drive on and off, use a wrap-spring or dog clutch. If you need the output to stay still when the load pushes back in either direction, use a bidirectional anti-back-drive clutch or a worm drive. For a no-extra-parts printed one-way action, a compliant (flexure) ratchet is often more reliable than printed rollers.
- **environment_limits**: Temperature: NTN drawn-cup clutches -10 to 70 C with grease and -10 to 120 C with oil. Lubricant: too much grease interferes with clutching (NTN). Vibration and speed: NTN says lock failure can happen with fast idling speeds, frequent idling and vibration. Wear: a soft shaft shortens life (NTN). Printed plastic versions: plastic rollers and ramps wear and lose grip over time, and PLA softens in heat such as a hot car.
- **safety_notes**: A roller clutch holds by friction, so it can slip without warning; NTN says that where slipping could seriously harm people or equipment, a separate positive safety device must be fitted. Don't hammer drawn cups in (they deform). Rotating shafts and gears in a motion rectifier are pinch points. Otherwise none known.
- **common_failures**: Slipping because the shaft is too soft, worn, polished or oily; fix with a hardened ground shaft and correct (not excessive) lubrication (NTN). Short life from high torque, heavy radial load, fine oscillation or a low-hardness shaft (NTN). Lock failure under vibration or high idling speed (NTN). A thin or loose housing lets the drawn cup deform or turn; follow NTN's wall-thickness and fit tables. Rollers that slip instead of biting into the ramp are a known problem even in fishing reels (Shimano patent). Printed versions: not enough grip in PLA, rollers stuck after printing, wear of printed rollers and ramps, and too much clearance so rollers never reach the wedge; use springs to push the rollers into contact.
- **related**: 
  - Sprag clutch: tilted blocks instead of rollers; more torque for its size, but must be bought, can't really be printed
  - Ratchet and pawl: locks positively on teeth with a click, can't slip but has backlash up to one tooth
  - Face ratchet (star ratchet): toothed discs pressed together, used in bicycle hubs; clicks
  - Wrap-spring clutch: a coil spring grips a hub; can also be switched on and off
  - Compliant ratchet and overrunning clutch (flexure pawl): one-piece printable one-way clutch with springy arms
  - Binding-plate lock: the same wedge-by-friction idea for sliding along a bar instead of turning
  - Bidirectional anti-back-drive clutch: often built from rollers too, but lets the input drive either way while blocking the load
  - Needle roller bearing (HK drawn cup): same size and look as an HF clutch but turns freely both ways

### Pictures, videos and models

- **links**: 
  - [Freewheel en.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Freewheel_en.svg): Labelled diagram of a roller freewheel showing which way is free and which way is engaged, with rollers in ramped pockets *(licence: Public domain (Borb, derived from Technoargia's Roue libre2.svg))*
  - [Roue libre verrouillage deverrouillage.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg): Diagram of a roller freewheel locking and unlocking, drawn both from the ground and from the sprocket's point of view *(licence: Public domain (Cdang))*
  - [Roller overrunning clutch 1 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=H4SiM5Dcblg): CAD animation of a roller overrunning clutch, with arrows showing which part drives (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
  - [Can you 3D Print a One Way Bearing? Roller Clutch Design (Maker's Muse, YouTube)](https://www.youtube.com/watch?v=UIhCPl8eb7s): Designing and testing a print-in-place 3D-printed roller clutch (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
  - [Mechanical Rectifier (Rectilinear, Demonstrator Version) (Sea Power Ltd, YouTube)](https://www.youtube.com/watch?v=oQ34BJk4HGs): Hand-held motion rectifier demonstrator turning up-and-down motion into one-way rotation (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
- **make_it_yourself**: 
  - [Functional one way clutch model (Jori, Printables)](https://www.printables.com/model/110339-functional-one-way-clutch-model): Print-in-place roller clutch, about 32 mm across and 6 mm high, printed in under 30 minutes with no supports; inspired by Maker's Muse, with an Onshape source. Details read through the Printables public API because the web page blocks automated access *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Parametric one way clutch bearing (Radim Mach, Printables)](https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing): Parametric print-in-place roller clutch with a hex bore, supplied as a Fusion 360 file and STL. Details read through the Printables public API *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [one way clutch (tylermor, Printables)](https://www.printables.com/model/129974-one-way-clutch): Multi-part printable roller overrunning clutch (body, spider, rollers, roller shoes, hub) that uses pen springs to press the shoes onto the rollers; the designer notes PLA grip torque is low. Details read through the Printables public API *(licence: CC BY (Creative Commons Attribution))*
  - [Qidibox Spool Driven Gear using HF0306 One-way Bearing (weav, Printables)](https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea): Example of pressing bought HF0306 one-way needle bearings into a printed gear on a 3 mm rod; reported working for over six months. Details read through the Printables public API *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Printable One-Way Driver Skips Ratchet For A Clutch (Hackaday)](https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/): Article on ukman's 3D-printed one-way screwdriver, where metal cylinders wedge in printed pockets; links to the Instructables build 'Ratchet Screwdriver Without Ratchet With Overrunning Clutch' (https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/, page title confirmed, content needs JavaScript) *(licence: link only (article); Instructables licence not seen)*
- **diagram_idea**: A cross-section of an outer ring with four ramped pockets around a shaft, each holding a roller pushed by a small spring: one panel shows the shaft turning the free way with the rollers resting in the deep ends, the next shows it turning the other way with the rollers jammed in the shallow ends; a third panel shows the motion rectifier, a rocking rack driving two opposite-facing clutches that both turn one output gear the same way.
- **sources**: 
  - https://en.wikipedia.org/wiki/Freewheel
  - https://en.wikipedia.org/wiki/Sprag_clutch
  - https://commons.wikimedia.org/wiki/Category:Roller_clutches
  - https://commons.wikimedia.org/wiki/Category:Self-locking_couplings
  - https://commons.wikimedia.org/wiki/File:Freewheel_en.svg
  - https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg
  - https://commons.wikimedia.org/wiki/File:Freewheel.jpg
  - https://www.ntnglobal.com/en/products/catalog/pdf/2300E_17.pdf
  - https://www.engineerlive.com/content/one-way-roller-clutches
  - https://www.mcmaster.com/products/one-way-clutches/
  - https://www.ustsubaki.com/wp-content/uploads/L14016-Tsubaki-Cam-Clutch-Catalog-2019.pdf
  - https://www.ustsubaki.com/resources/knowledge-center/guide-to-indexing-overrunning-and-backstop-clutches/
  - https://www.linkedin.com/pulse/quick-info-one-way-bearing-tianyu-gao
  - https://patents.google.com/patent/EP2399455B1/en
  - https://iopscience.iop.org/article/10.1088/0964-1726/22/2/025008
  - https://hackaday.com/2010/02/03/the-mechanical-diode/
  - https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
  - https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/
  - https://www.printables.com/model/110339-functional-one-way-clutch-model
  - https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing
  - https://www.printables.com/model/129974-one-way-clutch
  - https://www.printables.com/model/443599-one-way-bearingclutch-bearing
  - https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=H4SiM5Dcblg
  - https://www.youtube.com/watch?v=UIhCPl8eb7s
  - https://www.youtube.com/watch?v=oQ34BJk4HGs

### Other info

- **Fields with unverified parts:** input_output, making_tips_3d_printing, play_and_precision

## 12 Wrap-spring clutch (spring clutch)

*one-way & ratchet.* A coiled spring wrapped around a shaft that grips tighter when turned one way and loosens the other way; also used as an on/off clutch

### What it is

- **plain_name**: A tight coil spring slipped over the ends of two shafts: turn one way and the coil winds tighter and grips both shafts together, turn the other way and it loosens and slips
- **term**: Wrap-spring clutch (spring clutch)
- **aliases**: 
  - spring clutch
  - wrap spring clutch
  - spring wrap clutch
  - coil spring clutch
  - helical spring clutch
  - spring freewheel
  - single-revolution clutch or one-turn clutch (a switchable version that drives one turn at a time)
  - start-stop clutch or start/coast clutch (switchable versions)
  - wrap spring clutch-brake (with a second spring that brakes the output)
  - wrap spring brake
  - electric or electromagnetic wrap spring clutch (solenoid- or coil-operated)
  - roller blind clutch or chain clutch (everyday use)
  - Schlingfederkupplung (German name)
- **family**: one-way & ratchet
- **other_families**: clutches & couplings, self-locking & anti-back-drive, indexing & detents, brakes, dampers & speed control, torque limiting & slip, powered & active connectors
- **one_liner**: A coiled spring wrapped round two hubs end to end that winds down and grips them when the input turns one way, and loosens and slips when it turns the other way; with a collar holding one end of the spring it becomes an on/off clutch that can drive exactly one turn at a time.
- **complexity**: A few parts. Basic one-way version: input hub, output hub of the same diameter placed end to end, and a helical spring (often square-section wire) spanning both, usually with one end fixed to one hub. On/off versions add a control collar that holds the spring's end tab (tang), stop lugs on the collar and a trip lever or solenoid. Clutch-brake packages add a brake spring, an anti-back spring and an anti-overrun spring.
- **how_it_works**: The spring's inside diameter is made slightly smaller than the hubs, so it already grips them lightly (interference fit). When the input hub turns in the direction that winds the coil tighter, friction drags the coil down onto both hubs, and because each turn adds to the grip of the turn before (the capstan effect, as with a rope wrapped round a post), the torque it can carry grows exponentially with the number of turns and the friction. Turning the other way, or the output running ahead, tends to unwind the coil, so it opens slightly and slips with only a light drag. In a switchable version one end of the spring is held by a collar: while the collar turns freely the spring grips and drives; when a lever or solenoid stops the collar, the spring is unwound, the drive disconnects and the output stops in the same place every turn.

### Finder attributes

- **job**: 
  - stop it moving back (one-way): the basic overrunning spring clutch drives one way and slips on reversal
  - let it move (turn, slide or bend): lets the output coast or run faster than the input (overrunning)
  - lock, and release by hand: in a chain-operated roller blind the spring locks against the blind's weight and is released when you pull the chain
  - click into set positions: single-revolution clutches stop the output at 1 to 24 set positions per turn
  - hold or release using power: electric versions engage or release with a coil or solenoid
  - slow it, stop it or keep its speed steady: wrap-spring brakes and clutch-brakes stop and hold the output
  - slip or let go when overloaded: wrap-spring slip devices give a steady slipping torque for overload protection
- **motion**: rotate: continuous rotation; basic versions drive one way and slip the other; switchable versions can drive single turns or part turns
- **degrees_of_freedom**: 1: the output can only turn relative to the input about their shared axis, and only in the free direction (or only while the clutch is switched off); when gripping they act as one piece
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): standard units drive in one direction only and let the load overrun
  - self-locking (holds under load, won't back-drive): anti-back springs and roller-blind clutches stop the load turning the mechanism backwards
  - hand-release only (locks under load, releases when a person operates it): the roller-blind chain clutch holds the blind at any height until you pull the chain, which pushes the spring's tang to release it
  - indexing (clicks into set positions): a single-revolution clutch stops the output at the same angle every turn (1 to 24 stops per turn, adjustable on some models)
  - torque-limiting (slips or clicks at a set force/torque): wrap-spring slip devices slip at a steady torque to protect a system
- **holding_principle**: 
  - friction or clamping (force-fit): the spring grips the hubs by friction, multiplied by the capstan effect
  - spring force (a spring or springy part presses it in place): the spring's slightly undersized coil gives the initial grip that starts the wrap-down
  - not a holding joint (it moves or passes on motion): it passes on or disconnects turning force between two shafts
- **input_output**: Rotation -> rotation at 1:1 when engaged, with no slip once wrapped down; overrun or disconnect otherwise. Switchable single-revolution and clutch-brake units turn continuous rotation -> start-stop rotation, one turn (or 1/2, 1/4 ... turn) per trip, stopping within about +/-0.5 degrees for clutch-brakes or +/-20 degrees for simple single-revolution clutches (Machine Design). Speed up to about 1,800 rpm and torque up to about 5,000 lb-in (565 N·m) for industrial units (Machine Design). Shaft arrangement: in line (two hubs end to end on one axis). Back-drivable: the output can overrun in the free direction; units with an anti-back spring, and roller-blind clutches, can't be driven backwards from the output; in single-revolution clutches the braking (stop) torque is only about a tenth of the driving torque (Machine Design, Inertia Dynamics).
- **power**: passive (no power needed) for overrunning and lever-tripped versions. Powered versions use a solenoid or electromagnet coil: Reell's electric wrap-spring clutch disengages when current is removed, and in solenoid clutch-brake packages the actuator returns to its rest position when not energised, so the clutch spring releases and the brake spring stops and holds the output
- **removability**: removable: packaged units slide onto a shaft and are held by keys or set screws; the stationary part is held by a loose anti-rotation pin
- **reuse_cycles**: many times: the unit can be fitted and removed repeatedly; the spring itself wears out after millions of engagements (8 to 10 million cycles for standard clutch-brakes, Machine Design)
- **tools_needed**: Hex keys for set screws or bolts; a loose-fitting pin or slot for the anti-rotation tab; pliers to squeeze the clip when taking apart a roller-blind clutch
- **seal**: none: it doesn't seal anything; packaged units are closed only to keep dirt off the spring and hubs
- **load**: medium: small units handle about 25 lb-in (about 2.8 N·m) on a 1/4 inch bore at up to 1,800 rpm (Inertia Dynamics SC-2, Warner CB-2) and industrial units up to about 5,000 lb-in (565 N·m) (Machine Design). More torque than a friction clutch of the same size (Inertia Dynamics, Reell). Strong in twist in the driving direction; weak as a brake in single-revolution units (about 10 percent of rated torque); must not take side or radial loads through its mounting (Inertia Dynamics)
- **adjustable**: partly: the driving direction is set by which way the spring is wound (clockwise or counter-clockwise units); on switchable units the number of stops per turn is set by the collar (1 to 24), and on some models the stop angle can be adjusted after fitting, e.g. by moving a splined cam or clamp collar (Inertia Dynamics DCB, Helander)
- **play_and_precision**: Play: none once engaged (no slip). Repeatability: clutch-brakes stop within +/-0.5 degrees without the error building up from turn to turn; simple single-revolution clutches about +/-20 degrees (Machine Design). Timing is nearly constant and independent of the load's inertia within the rated torque (Machine Design). Misalignment: the two hubs must be coaxial because one spring spans both; mount the stationary plate with a loose pin so it adds no side load (Inertia Dynamics)
- **access_needed**: end of a tube or shaft: the hubs fit on shaft ends, one from each side, with the spring bridging them
- **materials**: Spring steel spring, usually square-section wire (Wikipedia, Clutch). Hubs of oil-impregnated sintered iron, with hardened steel wear rings where the spring crosses between hubs on longer-life units; control collars of glass-reinforced nylon with metal inserts; actuators of acetal (Inertia Dynamics). Roller-blind clutches use plastic hubs, which can be replaced with PETG, ASA or ABS prints (Johegy, Printables)
- **maker_difficulty**: moderate: easy to buy as a unit or salvage from a chain-operated roller blind; making one needs a steel spring with a slightly undersized coil and two hard, smooth hubs of exactly the same diameter, and printed hubs wear

### Making it

- **processes**: 
  - off-the-shelf part (wrap spring clutches, clutch-brakes, roller-blind clutch units)
  - 3D print (FDM): light-duty hubs, collars and housings used with a steel spring
  - CNC: turned steel or brass hubs of matched diameter for a stronger home-made clutch
  - woodwork: not suitable for the hubs
- **print_in_place**: no: the spring has to be steel (printed plastic springs creep and lose their grip), so at best the hubs are printed separately and a metal spring is fitted over them
- **making_tips_3d_printing**: Use a steel spring: plastic springs slowly deform under constant load (creep), and PLA in particular makes a poor spring (Hackaday, 'The Challenges Of 3D Printing Reliable Springs'). Printed hubs work for light duty: Johegy's replacement hub for a chain-operated roller blind clutch is printed in PETG or ASA/ABS with default settings and no supports, in the orientation of the supplied STL, and reuses the original springs; the original plastic hub had worn grooves where the springs rub, so expect printed hubs to wear too and use a tough, wear-resistant filament. Make the input and output hubs exactly the same diameter and keep them on one axis, because one spring spans both (Machine Design). Size the spring's inside diameter slightly smaller than the hubs so it grips lightly before any load (Machine Design). Keep the running surface either consistently dry or consistently lubricated, because the grip depends exponentially on friction (capstan equation), so a change in oiliness changes the torque a lot. For a quick test mechanism, salvage the clutch from a cheap chain-operated roller blind. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search: 'wrap spring clutch', 'spring clutch' (overrunning, start/coast, single revolution), 'wrap spring clutch-brake', 'electric wrap spring clutch', 'wrap spring brake', 'single revolution clutch', 'spring clutch with stop collar' (1, 2 or 4 stops), 'roller blind clutch' or 'chain clutch' (spares for chain-operated roller blinds). Units come in clockwise or counter-clockwise versions, with hub or shaft input, in bores from 1/4 inch upwards; electric versions come for 24 V DC or 115 V AC (Inertia Dynamics, Warner Electric).
- **rules_of_thumb**: 
  - The spring's inside diameter is slightly smaller than the hub diameter, giving an interference fit that starts the wrap-down (Machine Design, 'Getting up to speed with wrap-spring clutch/brakes')
  - Holding torque grows exponentially with wrap angle and friction: T_load = T_hold x e^(mu x phi); e.g. two wraps at mu = 0.5 multiply the holding force about 535 times, independent of hub radius (Wikipedia, Capstan equation; Wikipedia, Clutch notes wrap-spring torque follows the capstan equation)
  - Industrial units run to about 1,800 rpm and 5,000 lb-in; standard clutch-brakes last about 8 to 10 million cycles, extended-life versions 3 to 5 times longer (Machine Design)
  - Small size example: 1/4 inch bore, 25 lb-in (about 2.8 N·m) static torque, 1,800 rpm maximum (Inertia Dynamics SC-2 and DCB-2 data; Warner Electric CB-2)
  - Single-revolution clutches brake with only about 10 percent of their rated torque and stop within about +/-20 degrees; full clutch-brakes stop within +/-0.5 degrees, non-cumulative (Machine Design; Inertia Dynamics SC series)
  - Clutch-brakes need enough load inertia to fully engage the brake spring and release the clutch spring; check both minimum and maximum inertia (Machine Design)
  - Hold the stationary plate with a loose-fitting pin that allows no side or radial load, or the unit's bearings get preloaded (Inertia Dynamics DCB installation note)
  - Typical engagement about 3 ms and stop about 1.5 ms, nearly constant regardless of load inertia within rated torque (Machine Design)

### When to use it

- **everyday_examples**: 
  - Chain-operated roller blinds: the clutch in the end bracket holds the blind at any height and releases when you pull the chain (Louver Lite patent US10309152B2; Johegy, Printables)
  - Paper and form feeds in office machines and printers, and slip clutches in printers and tape recorders (patent US3987880A; German Wikipedia, Schlingfederkupplung)
  - Old teleprinters: Frederick G. Creed's single-turn wrap spring clutch of 1928 (Wikipedia, Clutch)
  - Packaging machines, printing presses, tape dispensers and staplers that start and stop once per cycle (Machine Design; Warner Electric)
- **when_to_use**: Use a wrap-spring clutch when you need a compact one-way drive with a lot of torque for its size and no slip once engaged, or when you need to start and stop a continuously running shaft exactly one turn (or part turn) at a time with an accurate stop position: paper feeds, cut-off knives, dispensers, stitchers and indexing tables. It is also a simple, low-power way to make a hand-operated mechanism that holds its position against a load but moves when you operate it, as in a roller-blind chain drive. Electric versions need little power and switch in milliseconds (Reell).
- **when_not_to_use**: Avoid it when you need a soft, gradual start or adjustable slip (use a friction clutch), when the drive must reverse under power (standard units drive one way only), above about 1,800 rpm, or for large shock and radial loads. Single-revolution clutches brake weakly, so use a full clutch-brake or a separate brake for high-inertia loads. For a one-way clutch with no drag or wear while overrunning at high speed, use a sprag clutch; for a fully printable one-way part, use a ratchet and pawl, a printed roller clutch or a compliant ratchet; for a simple positive on/off drive, use a dog clutch.
- **environment_limits**: Grip depends on friction between spring and hub, and holding torque rises exponentially with the friction coefficient (capstan equation), so oil, grease, dust or wear on the hubs change how much it can carry; industrial units rely on oil-impregnated hubs to lubricate the spring (Inertia Dynamics) and some are sold as needing no lubrication or maintenance for life (Warner Electric). Printed plastic hubs wear where the spring rubs (Johegy) and plastic parts creep under steady load (Hackaday). *(unverified parts omitted)*
- **safety_notes**: Engagement takes only a few milliseconds, so a machine driven through a single-revolution clutch starts suddenly: keep fingers clear of anything it drives (pinch points). A worn roller-blind clutch can let a heavy blind drop by itself (Johegy). In solenoid clutch-brakes, losing power stops the output and the brake spring holds it (Inertia Dynamics DCB). *(unverified parts omitted)*
- **common_failures**: Hub wear where the spring rubs, until the spring can no longer grip and the load slips or runs back (e.g. a roller blind that glides down by itself; Johegy); longer-life units add hardened wear rings at the spring crossover points (Inertia Dynamics). Springs that don't fully wrap down or release because the load inertia is too low, and excess wear when the maximum load inertia is exceeded (Machine Design). Bearing wear from side loads when the anti-rotation tab is mounted rigidly (Inertia Dynamics). Spring fatigue at the end of its cycle life (Machine Design). Changes in grip from contamination or lubricant, because torque depends exponentially on friction (Wikipedia, Capstan equation).
- **related**: 
  - Sprag clutch: tilted blocks between rings; one-way only, can't be switched on and off, but carries very high torque and can run almost without contact at high speed
  - Roller clutch (one-way bearing): rollers on ramps; small and cheap, needs a hardened shaft, can't be switched
  - Ratchet and pawl: positive locking on teeth with clicks, easy to print
  - Bidirectional anti-back-drive clutch: the roller-blind chain clutch is really this type, built with a wrap spring: input drives either way, the load can't drive back
  - Friction slip clutch: slips smoothly in both directions at a set torque; wrap-spring slip devices do a similar job
  - Dog clutch: positive on/off engagement by interlocking teeth, but only engages at certain angles
  - Band brake and capstan (rope round a post): same exponential-friction physics used for braking or holding
  - Woven self-tightening grip (finger-trap grip): another self-tightening grip that gets tighter the harder it is pulled

### Pictures, videos and models

- **links**: 
  - [Pružinovávolnoběžka.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pružinovávolnoběžka.jpg): Diagram of the principle of a spring freewheel (wrap-spring one-way clutch); used on Czech, German and Croatian Wikipedia *(licence: CC BY-SA 4.0 (Juniperbushman))*
  - [One way clutch 5 (spring) (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=Cshn6B2l2WQ): CAD animation of a spring-type one-way clutch (title and channel confirmed via YouTube oEmbed; content not viewed) *(licence: link only)*
  - [What is a wrap spring clutch or brake? (Design World, YouTube)](https://www.youtube.com/watch?v=92Ti7LBjfYQ): Explainer on wrap spring clutch and brake technology (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
  - [How a Wrap Spring Brake Works (Thomson Industries, YouTube)](https://www.youtube.com/watch?v=AFFHEb4NEY4): Manufacturer video explaining how a wrap spring brake works (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
  - [Getting up to speed with wrap-spring clutch/brakes (Machine Design)](https://www.machinedesign.com/motors-drives/article/21832461/getting-up-to-speed-with-wrap-spring-clutch-brakes): Illustrated article explaining overrunning, single-revolution and clutch-brake wrap spring units, with sizing formulas *(licence: link only)*
- **make_it_yourself**: 
  - [Roller Blind Spring Clutch Part (Johegy, Printables)](https://www.printables.com/model/560497-roller-blind-spring-clutch-part): Printable replacement hub for the wrap-spring clutch of budget chain-operated roller blinds; reuse the original springs, print in PETG or ASA/ABS. Shows that printed hubs work for light loads but wear. Details read through the Printables public API because the web page blocks automated access *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- **diagram_idea**: Two short shafts end to end with a coil spring wrapped over the joint, one end of the spring pinned to the input: an arrow turning the input the winding way shows the coil squeezing down onto both shafts (with a small graph of grip rising steeply with the number of turns), and an arrow the other way shows the coil opening slightly and slipping; a second panel adds a collar holding the spring's tang and a lever that stops the collar to switch the drive off.
- **sources**: 
  - https://www.machinedesign.com/motors-drives/article/21832461/getting-up-to-speed-with-wrap-spring-clutch-brakes
  - https://en.wikipedia.org/wiki/Clutch
  - https://de.wikipedia.org/wiki/Schlingfederkupplung
  - https://en.wikipedia.org/wiki/Capstan_equation
  - https://commons.wikimedia.org/wiki/File:Pružinovávolnoběžka.jpg
  - https://commons.wikimedia.org/wiki/Category:Self-locking_couplings
  - https://reell.com/resources/electric-wrap-spring-technology
  - https://www.tinyclutch.com/spring-clutches.htm
  - https://www.electromate.com/media/assets/catalog-library/pdfs/inertia-dynamics/InertiaDynamics_Wrap_Spring_specsheet.pdf
  - https://warnerelectricparts.com/wrap-spring-clutches-and-clutch-brakes/
  - https://patents.google.com/patent/US10309152B2/en
  - https://patents.google.com/patent/US3987880A/en
  - https://www.printables.com/model/560497-roller-blind-spring-clutch-part
  - https://api.printables.com/graphql/
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.youtube.com/watch?v=Cshn6B2l2WQ
  - https://www.youtube.com/watch?v=92Ti7LBjfYQ
  - https://www.youtube.com/watch?v=AFFHEb4NEY4

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, safety_notes

## 13 Compliant ratchet and overrunning clutch (flexure pawl)

*one-way & ratchet.* One-piece printed ratchets and one-way clutches whose pawls are springy arms, so there are no pins or separate springs

### What it is

- **plain_name**: A one-piece plastic click-wheel whose catches are springy arms: it turns one way with a click and locks the other way, with no pins or separate springs
- **term**: Compliant ratchet (flexure-pawl ratchet); when used as a freewheel, a compliant overrunning clutch
- **aliases**: 
  - flexure pawl
  - compliant pawl
  - flex pawl
  - spring pawl / leaf-spring pawl / flat-spring pawl
  - spring-blade ratchet (RoyMech's name for metal versions whose pawls are flat springs)
  - ratchet with molded-in springs (DuPont's description of injection-moulded plastic versions)
  - compliant over-running ratchet and pawl clutch (BYU Compliant Mechanisms Research)
  - compliant overrunning clutch with centrifugal throw-out (US patent 6,148,979)
  - one-piece ratchet / monolithic ratchet
  - print-in-place ratchet
  - compliant freewheel
- **family**: one-way & ratchet
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints, indexing & detents
- **one_liner**: A ratchet or one-way clutch in which the catch (pawl) and its spring are the same springy arm, moulded or printed in one piece with the hub, so the wheel clicks round one way and locks the other with no pins, springs or assembly.
- **complexity**: A few parts, often just one: (1) a toothed wheel or toothed ring (ratchet wheel); (2) a hub or frame carrying one or more thin springy arms whose tips are the catches (flexure pawls). The hub, arms and catches are a single piece. Print-in-place versions also trap the wheel inside the frame, so the whole thing is one printed part. The BYU compliant overrunning clutch is two parts: a one-piece pawl hub sitting inside a ratchet ring (US 6,148,979).
- **how_it_works**: Each catch sits on the end of a thin arm that bends like a diving board (a cantilever flexure), so the arm is both the hinge and the spring. Turned the free way, the gently sloped backs of the teeth push the catch aside, bending the arm, and it springs back into the next gap with a click. Turned the other way, the steep face of a tooth pushes straight against the catch's tip; the tooth face is shaped so this push drives the catch deeper into the tooth rather than out of it, so the wheel locks. In BYU's patented clutch, stiff support members carry the locking load so the slender spring arms only have to bias the pawls, and at high freewheeling speed the pawls swing outward by centrifugal force (centrifugal throw-out) so they stop rubbing on the teeth (US 6,148,979).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): it turns or slides freely one way and locks the other way
  - click into set positions: every tooth is a click stop
  - tighten and hold tension: winders, knobs and cable ties keep whatever they have pulled in
- **motion**: rotate: unlimited turns in the free direction, locked in the other (linear versions such as a cable tie slide instead)
- **degrees_of_freedom**: 1: the wheel only turns about its axle (or the strip only slides along its length), and under load only in one direction
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the springy catches ride over the sloped backs of the teeth one way and jam against the steep tooth faces the other way
  - indexing (clicks into set positions): it stops and clicks at every tooth, so it holds in steps of one tooth
  - tensioning (takes up slack and holds): in winders and cable ties it keeps the tension you wind or pull in
  - BYU variant only: centrifugal throw-out, meaning the pawls swing clear of the teeth at speed, so the freewheeling clutch runs with less rubbing, noise and wear (US 6,148,979)
- **holding_principle**: shape (the parts interlock; form-fit): the tip of the catch hooks against a tooth face, spring force (a springy part presses it in place): the bent arm keeps the catch pressed into the teeth
- **input_output**: Rotation in the driving direction -> the same rotation at 1:1 (it is a clutch, not a gearbox); in the other direction the wheel freewheels. Shafts in line. Efficient when driving because nothing slides once a catch is engaged; there is a small drag from the arms rubbing over the teeth when freewheeling. Back-drivable: no in the locking direction; free in the other direction. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: two-part designs (pawl hub plus ratchet ring) slide apart; print-in-place versions are captive, so in practice they are permanent unless you cut them
- **reuse_cycles**: many times: there are no fasteners to wear out; the life limit is fatigue of the springy arms, not taking it apart
- **tools_needed**: none: it prints or moulds in one piece; two-part versions push together by hand
- **seal**: none: it is an open mechanism and nothing makes it seal
- **load**: Light to medium. Weak if the catch is loaded sideways or the thin arm has to carry the lock. Plastic versions suit hand-powered and small-motor loads, not lifting people or heavy overhead loads. *(unverified parts omitted)*
- **adjustable**: no: the click force is set by the arm's length and thickness; to change it you reprint or remould with a different arm
- **play_and_precision**: It returns to tooth positions repeatably. It tolerates a little wobble because the arms flex, but the catch tips must stay lined up with the teeth. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the hub or wheel slides onto the end of a shaft; print-in-place demos need no access at all
- **materials**: Moulded versions: polypropylene (named in the BYU patent because it is cheap and easy to mould); acetal (Delrin) gears with molded-in springs acting on a nylon ratchet wheel (DuPont design guide, Fig. 8.01); nylon (cable ties). Metal versions: heat-treated flat spring steel blades (RoyMech). 3D printing: PETG or nylon for the springy arms; PLA 'makes for a very poor spring material' (Hackaday). It is a mechanism, not a joining method, so it does not 'join' materials.
- **maker_difficulty**: moderate: it prints in one piece, but getting the arm stiffness, tip clearance and tooth shape right usually takes a few test prints

### Making it

- **processes**: 
  - 3D print (FDM): the usual maker method; prints in one piece
  - sheet metal: spring-steel blade pawls in metal ratchets (RoyMech, spring blade ratchet)
  - off-the-shelf part: a cable tie is a ready-made linear ratchet with a moulded flexing catch *(unverified parts omitted)*
- **print_in_place**: yes: the wheel, the springy catches and the frame can print already assembled and working, provided there is clearance between the moving parts (Prusa suggests at least 0.3 mm as a starting point)
- **making_tips_3d_printing**: Orientation: print it lying flat so the arms bend sideways in the plane of the bed. Each arm is then built from continuous extrusion lines running along its length, and bending does not try to peel layers apart (Hubs' living-hinge rule: orient so the hinge's width, not its length, is built up layer by layer). Arm size: make each arm at least two perimeters wide (about 0.9 mm with a 0.4 mm nozzle; one perimeter, about 0.45 mm, is the absolute minimum, Prusa). For a given bend, stress rises with thickness and falls with length (standard cantilever formula, quoted in the print-bench design brief), so prefer longer, thinner arms to short, thick ones. Tapering the arm toward its tip (a constant-strength beam) gives the same stiffness at about two-thirds of the stress (DuPont, p. 36). Add a generous fillet where the arm joins the hub, because sharp corners start fatigue cracks (DuPont, p. 36). Clearance: leave at least 0.3 mm between wheel and frame and around the catch tips (Prusa), and check the first layer, since a squashed first layer (elephant's foot) is a common reason print-in-place parts fuse. Material: PETG or nylon for the arms; avoid PLA for anything that must click many times (Hackaday). Rest state: design so the catches sit in the tooth gaps with little or no bend when stopped; plastic springs held bent for long periods creep and lose force (DuPont, pp. 36-37 and 47). Tooth shape: make the locking face of each tooth point straight at the centre (radial) or slightly undercut, so the load pulls the catch in, and make the back of the tooth a shallow slope so the catch rides over it (one hobby brief used a radial locking flank and about a 60° drive flank). Use two or more catches spread round the wheel to share and balance the load. Typical print failures: an arm snapping at its root (add a fillet, taper it, use PETG or nylon, reduce how far it bends), arms taking a set so the clicks get weak (reduce preload), catches skipping under load (steeper locking face, stiffer arms, more catches) and fused parts (more clearance).
- **off_the_shelf_parts**: Few ready-made compliant ratchets are sold as parts. Useful search terms: 'cable tie' and 'releasable cable tie' (linear version with a moulded flexing pawl); 'flat spring', 'leaf spring' or 'spring steel shim' (to make a metal spring-blade pawl); 'ratchet wheel' (plastic or steel, to pair with a printed flexure pawl); 'one-way bearing' or 'one-way needle roller clutch' (a silent ready-made alternative). BYU's compliant overrunning clutch is shared as a free printable model (Thingiverse thing:3007265).
- **rules_of_thumb**: 
  - Plastic springs suit intermittent action, not constant load: 'Springs under constant load or deflection should be designed in spring steel' because of creep and stress relaxation (DuPont, General Design Principles, Module I, p. 36).
  - Ratchets with molded-in acetal springs 'function properly, providing the springs are not held in the loaded position for a long period of time' (DuPont, Module I, p. 47).
  - A tapered (constant-strength) spring arm reaches the same stiffness at two-thirds of the stress of a straight arm and with a quarter less material (DuPont, Module I, p. 36, Fig. 6.01).
  - Avoid sharp corners at the arm root; use generous fillets (DuPont, Module I, p. 36).
  - Start with at least 0.3 mm clearance between printed moving parts; the minimum printable wall is one extrusion width, about 0.45 mm for a 0.4 mm nozzle (Prusa Knowledge Base, Modeling with 3D printing in mind).
  - FDM living hinges: 0.4-0.6 mm thick with at least two layers, oriented so the hinge width is built up layer by layer; a nylon FDM example lasted only about 25 full folds, so a printed ratchet arm should bend far less than a folding hinge (Hubs, How to design living hinges for 3D printing).
  - Any ratchet can slip back by up to one tooth pitch before it catches (Wikipedia, Ratchet (device)).
  - Metal spring-blade ratchets, with proper heat treatment, give long life under light loading and can index to about one-tenth of a degree (RoyMech, Ratchets). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - A cable tie: the small tongue inside the head is a springy catch moulded in one piece with the head, clicking over the teeth on the strap (Wikipedia, Cable tie; Wikimedia Commons cutaway photo)
  - Timers and clockwork that wind springs and drive timing cams with flat-spring pawls (RoyMech, spring blade ratchet)
  - Plastic gear-and-ratchet parts in small machines, with the pawl springs moulded into the gear (DuPont design example, Fig. 8.01)
- **when_to_use**: When you want a one-way or click-stop action in a printed or moulded part without buying springs and pins: winders and take-up spools, anti-reverse on a hand crank, one-way knobs, simple freewheels in toys and light hand tools, and teaching models. It is a good choice when the part should be cheap, one piece, and assemble in seconds (or not at all), when loads are light, and when the catch spends most of its time resting in a tooth gap rather than held bent.
- **when_not_to_use**: Avoid it for heavy or safety-critical holding (hoists, anything above people): use a steel ratchet and pawl with a metal spring, or a worm drive. Avoid it where a catch must stay bent for long periods, because plastic springs creep and lose force (DuPont): use a metal spring. Avoid it when clicking or the one-tooth backlash matters: use a roller clutch or sprag clutch (silent, no tooth steps) or a wrap-spring clutch. Avoid PLA arms for high cycle counts: use PETG, nylon or a metal spring blade. Avoid fast freewheeling unless the design allows for it (the BYU centrifugal throw-out is one answer).
- **environment_limits**: All plastic springs creep and relax if held bent, and temperature and chemicals change their spring properties (DuPont, Module I, p. 36); PLA is a very poor spring material (Hackaday, 2026). Nylon parts used outdoors need UV stabilising; outdoor cable ties use nylon with at least 2% carbon black (Wikipedia, Cable tie). Vibration is usually fine because a catch sits in a tooth gap, but a weak arm can let the catch bounce out. *(unverified parts omitted)*
- **safety_notes**: Low hazard in small demos. Do not use a printed flexure ratchet as the only thing holding a raised load or a tension that could whip back, because the arms can fail suddenly from fatigue. Small printed parts are a choking hazard for young children.
- **common_failures**: Arm cracks at its root after many clicks (fatigue, the main weakness of all flexing mechanisms because stress concentrates where they bend; Wikipedia, Compliant mechanism): add a fillet, taper the arm, use PETG or nylon, and reduce how far it bends. Arm takes a permanent bend so clicks become weak or it skips (creep): don't leave catches preloaded; use a tougher material or a metal spring. Catches skip or pop out under load: make the locking tooth face radial or undercut so the load pulls the catch in, add more catches, stiffen the arms. Print-in-place parts fused together: increase clearance to 0.3 mm or more and fix the first layer. Teeth or catch tips wear round: larger teeth or a harder material. Loud clicking or drag when freewheeling: lighter arms, fewer catches, or a centrifugal throw-out design (BYU).
- **related**: 
  - Ratchet and pawl: the classic version with a pinned pawl and a separate spring; stronger and serviceable, but more parts
  - Face ratchet: teeth on the faces of two discs pressed together by a spring; often used as a printed ratcheting joint
  - Linear ratchet (cable-tie ratchet): the straight-line version; a cable tie is a linear flexure-pawl ratchet
  - Roller clutch (one-way bearing) and sprag clutch: silent one-way clutches with no tooth steps, but need hardened parts
  - Wrap-spring clutch: a coil spring grips a shaft one way; smooth and silent
  - Torque-limiting gear with flexing spring arms (compliant slip hub): same one-piece springy-arm idea, but made to slip when overloaded instead of locking
  - Detent: a springy catch that holds set positions but can be pushed past in both directions

### Pictures, videos and models

- **links**: 
  - [File:ZipTieCrossSection.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG): Cutaway photo of a cable tie head showing the moulded springy catch (flexure pawl) against the strap's teeth *(licence: Public domain (released by the author, Mushrooshi))*
  - [Ratchet mechanism for anti-reverse 1 (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=rKYTr9NjgOA): CAD animation of a ratchet wheel that turns only one way because a flat spring acts as the pawl (description from Thang's catalogue, Part 2, p. 31) *(licence: link only)*
  - [US6148979A: Compliant overrunning clutch with centrifugal throw-out (Roach and Howell, BYU)](https://patents.google.com/patent/US6148979A/en): Patent drawings of the one-piece pawl hub with slender biasing arms and support members inside a ratchet ring *(licence: patent document; link only)* *(unverified parts omitted)*
- **diagram_idea**: Top view of a toothed ring with two springy arms inside: in frame 1 (free direction) a sloped tooth back lifts a catch and its arm bends, with a 'click' label; in frame 2 (locking direction) the steep tooth face pushes straight into the catch tip, the arm stays straight, and a force arrow runs along the arm into the hub.
- **sources**: 
  - https://patents.google.com/patent/US6148979A/en
  - https://www.youtube.com/watch?v=KbHqf4kF5Wk
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=KbHqf4kF5Wk&format=json
  - https://www.thingiverse.com/thing:3007265
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://roymech.org/Useful_Tables/Cams_Springs/Ratchets.html
  - https://en.wikipedia.org/wiki/Ratchet_(device)
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://en.wikipedia.org/wiki/Cable_tie
  - https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://cs448m.github.io/lectures/machines/doc/2.pdf
  - https://www.youtube.com/watch?v=rKYTr9NjgOA
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=rKYTr9NjgOA&format=json
  - https://github.com/shaiss/print-bench/issues/668

### Other info

- **Fields with unverified parts:** environment_limits, input_output, links, load, make_it_yourself, play_and_precision, processes, rules_of_thumb

## 14 Binding-plate lock (tilting friction plate)

*one-way & ratchet.* A plate with a hole slides along a bar, then tilts and bites when pushed the other way, as in caulking guns and quick-grip bar clamps

### What it is

- **plain_name**: A plate with a hole that slides along a rod or bar one way, but tips slightly and bites into it when pushed back, like the plates inside a caulking gun or a one-handed bar clamp
- **term**: Binding-plate lock (tilting friction plate; canted-plate linear clutch)
- **aliases**: 
  - tilting friction plate
  - canted plate / canting plate
  - jam plate
  - friction plate or lock plate (caulking guns)
  - drive plate or gripping plate (the plate the trigger tips to push the rod)
  - release plate or holding plate (the plate that stops the rod sliding back)
  - clutch plates (pipe clamps and bar clamps)
  - driving lever and braking lever (patent terms in one-handed bar clamps)
  - feeding plate and holding plate (patent terms in caulking guns)
  - binding washer
  - smooth-rod or friction-drive caulking gun mechanism
  - Quick-Grip (brand) one-handed bar clamp mechanism
  - sticky drawer effect (the same jamming, used on purpose)
- **family**: one-way & ratchet
- **other_families**: self-locking & anti-back-drive, clamping, magnetic & friction connections, sliding, telescoping & linear motion
- **one_liner**: A flat plate with a slightly oversized hole that slides freely along a rod while it sits square, but tips a few degrees and wedges the edges of its hole against the rod when pushed the other way, giving a stepless one-way lock that you release by pushing the plate square again.
- **complexity**: A few parts: a smooth rod or flat bar; one or more steel plates with a hole a little bigger than the rod; a small spring that keeps the plate tipped; a housing or edge the plate leans on; and a release lever or thumb plate that pushes it square. Drive versions (caulking gun, one-handed bar clamp) add a second plate that a trigger tips and pushes forward.
- **how_it_works**: When the plate sits square to the rod, the hole is a loose fit and the rod slides through. A spring tips the plate slightly, so opposite edges of the hole touch opposite sides of the rod. If the rod is pushed the locking way, friction at those two edges tries to tip the plate further, which squeezes the edges harder, so the grip grows with the load, just as a cocked drawer sticks harder the more you push it. Pushed the other way, the rod drags the plate back toward square and it slides. Whether it locks depends on friction against proportions: a tipped part binds when the friction coefficient is at least its engagement length divided by its width (Kalsi Seals Handbook, ch. D21), so a thin plate on a thick rod binds easily. In caulking guns and one-handed clamps the trigger tips a second plate so it grabs the rod and pushes it forward a little on each squeeze, while the holding plate stops it sliding back (US 2,530,359; US 4,081,112; US 4,926,722).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): the rod or bar slides one way and is held against pushing back
  - lock, and release by hand: press the release plate and it goes square and lets go
  - tighten and hold tension: clamps and caulking guns use it to push and keep pushing
  - change the kind of motion: in trigger tools, squeezing the handle becomes a step-by-step straight push along the rod
- **motion**: slide: straight along the rod or bar; free and stepless (no notches) one way, locked the other way until released
- **degrees_of_freedom**: 1: the plate and rod move only along the rod's length (the rod could also turn in the hole, but that is not used); under load the lock removes that freedom in one direction
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the tipped plate slides one way and bites the other
  - self-locking (holds under load, won't back-drive): the harder the load pushes, the harder the plate's edges bite
  - hand-release only (locks under load, releases when a person operates it): pressing the release plate square frees the rod, as with a caulking gun's thumb plate or a bar clamp's release lever
  - quick-release: one press and the rod or jaw slides freely for fast repositioning
  - tensioning (takes up slack and holds): it pushes clamp jaws or a caulk plunger and keeps the pressure on
  - stepless holding: unlike a toothed ratchet it can hold at any point along the rod
- **holding_principle**: 
  - friction or clamping (force-fit): the edges of the hole grip the rod by friction, wedged tighter by the load
  - spring force (a springy part presses it in place): a small spring keeps the plate tipped so it is ready to bite
- **input_output**: Holding version: not a motion converter; it simply stops the rod moving back (back-drivable: no, unless the rod is oily, the plate edges are worn, or the plate is held square). Drive version (caulking gun, one-handed bar clamp): repeated trigger squeezes (back-and-forth swing) -> a step-by-step straight push of the rod. Smooth-rod caulking guns with a friction plate give a thrust ratio of about 10:1 or more; older notched ratchet-rod guns about 5:1 (Sashco). The rod runs along the gun or clamp, parallel to the push. Back-drivable: no while the holding plate is engaged.
- **power**: passive (no power needed)
- **removability**: tool-free quick release: press the release plate or lever and the rod slides out
- **seal**: none: nothing makes it seal
- **load**: Medium to heavy along the rod in the locking direction when hard steel plates bite a steel rod, bar or pipe (bar clamps, pipe clamps, caulking guns); zero in the free direction by design. Weak against twisting and sideways loads on the plate. The holding force depends on the rod surface: slick galvanized pipe, oily or glue-covered bars and worn plate edges slip (Sawmill Creek forum threads).
- **adjustable**: yes: stepless, so it holds at any point along the rod; the hold position is set simply by where you stop
- **play_and_precision**: This, plus the rod's springiness, is why caulk keeps oozing after you let go; drip-free guns deliberately let the rod retract a few millimetres when you press the release (Caulk Manufacturing). It tolerates a loose, rough fit: the hole only has to be loose enough for the plate to tip. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the plate is threaded onto the rod or bar from one end
- **materials**: Plates: hard steel, stamped from sheet, with a sharp sheared edge on one side of the hole that should face the direction it must bite (pipe-clamp and bar-clamp clutch plates, Sawmill Creek). Rods and bars: steel; black iron pipe grips better than galvanized pipe (Sawmill Creek). Housings and triggers: steel, cast metal or plastic. *(unverified parts omitted)*
- **maker_difficulty**: moderate: the idea is simple and works with a drilled steel plate or washer, a spring and a steel rod, but the biting parts should be metal, because a printed plastic plate or rod will wear and slip

### Making it

- **processes**: 
  - off-the-shelf part: salvage plates from caulking guns, pipe clamps or bar clamps, or buy replacement clutch plates
  - sheet metal: drill or punch a hole in steel plate, or use a steel washer
  - CNC or laser cut: steel plates with an accurate hole
  - 3D print (FDM): the housing, trigger, release lever and spring seats, not the biting plate
  - woodwork: frames and jaws for home-made clamps
- **print_in_place**: no: the biting plate and the rod should be steel and a spring is needed; only the housing and levers are printed
- **making_tips_3d_printing**: Print the frame, trigger and release lever, but keep the biting plate and the rod metal (a steel washer or cut steel plate on a ground steel rod or flat bar). Put the sharp, sheared edge of the hole on the side that should bite (Sawmill Creek). Add a small compression spring to hold the plate tipped and a lever or button that pushes it square to release. Print the housing so the plate's reaction force presses into solid walls rather than pulling layers apart (FFF prints are stronger in one direction than another, Prusa), with thick walls or solid infill around the edge the plate leans on. Keep grease and oil off the rod: lubricant lowers friction and can stop it locking (Kalsi says to design with the lubricant that will be present). *(unverified parts omitted)*
- **off_the_shelf_parts**: Smooth-rod (friction-drive) caulking gun; one-handed trigger bar clamp, e.g. Quick-Grip (brand); pipe-clamp fixtures for black iron pipe (they hold with clutch plates); replacement 'clutch plates' for pipe and bar clamps; steel flat washers and fender washers; small compression springs; ground steel rod ('drill rod') or cold-rolled steel flat bar.
- **rules_of_thumb**: 
  - Binding threshold: a tipped part binds if the friction coefficient is equal to or greater than engagement length divided by engagement width, e.g. 0.8 in / 4.0 in = 0.2 (Kalsi Seals Handbook, ch. D21 'Sticky drawer effect'). A binding plate is deliberately made far thinner than this ratio needs, so it always locks.
  - The opposite rule for parts that must slide: keep length/diameter above 1, with 1.6:1 'very good' and 3:1 'awesome'; below 1, slides jam (Slocum, FUNdaMENTALS of Design, Topic 3, p. 3-8). A binding plate deliberately breaks this rule.
  - Plate square to the bar = slides; plate held at an angle that is 'transverse but not perpendicular' to the bar = binds (Sorensen and Gatzemeyer, US 4,926,722, quick-action bar clamp).
  - Caulking gun grips 'cramp the plunger shaft ... when canted relative to it, and ... release it when perpendicular to it' (Chang, US 4,081,112).
  - Fit clutch plates so the sharp edge of the hole bites into the pipe; reversing or re-sharpening worn plates can restore grip (Sawmill Creek forum threads).
  - Use black iron pipe rather than galvanized for pipe clamps; the galvanized coating is slick and slips (Sawmill Creek forum).
  - Caulking guns: smooth rod with friction plate about 10:1 thrust ratio or more; notched ratchet rod about 5:1 (Sashco).

### When to use it

- **everyday_examples**: 
  - Caulking gun: the trigger plate grabs and pushes the rod, and the thumb-release plate at the back stops it sliding back
  - One-handed trigger bar clamp: squeeze to walk the jaw along the bar; a braking plate holds it until you press the release lever
  - Pipe clamp: a stack of clutch plates on the sliding tail stop grips the pipe
  - Sliding-jaw F-style bar clamp: the jaw itself cocks slightly on the bar and holds by friction at the edges of its bar hole (Firgelli mechanism page)
  - Hunter's climbing tree stand, which uses the sticky drawer effect on purpose to lock onto the tree (Kalsi, ch. D21, footnote)
- **when_to_use**: When a rod, bar or pipe must hold at any point (not just at notches) against a push in one direction and release instantly by hand: clamps, pushers and feeders, adjustable stops and props, telescoping supports under light to medium loads, and simple trigger-driven straight-line drives. It works with cheap, rough parts; a steel washer on a steel rod will do.
- **when_not_to_use**: Avoid it when the rod is plastic, oily, or slick-coated, because it slips: use a toothed linear ratchet instead. Avoid it for loads that must never drop, such as anything over people, unless it is a rated product: friction locks slip when surfaces are contaminated or edges wear, so use a positive lock (pin, toothed ratchet or screw). Avoid it where you need to hold both directions: use a clamp collar or set screw. Avoid it where you need exact, repeatable positions: use indexing holes or a detent.
- **environment_limits**: Anything that lowers friction can stop it locking: oil, grease, glue or sealant on the rod (Kalsi: the threshold must be checked with the lubricant present; Caulk Manufacturing on sealant residue on caulk-gun rods). New galvanized coatings are slick and slip until scored (Sawmill Creek). Rust and dirt change the grip and can stop it releasing smoothly. *(unverified parts omitted)*
- **safety_notes**: Pinch points between clamp jaws and at the trigger. A clamp or caulk gun stores force, so releasing it under load can make the jaw or rod jump. If the plate slips (oily rod, worn edges) the load moves suddenly; never rely on a home-made friction lock to hold a person or a heavy load overhead. Stamped plates can have sharp edges when you take a tool apart.
- **common_failures**: Slipping: plate edges worn round, plates fitted backwards, weak spring, slick or galvanized bar, oily or glue-covered rod; fixes are to reverse, file or replace the plates so a sharp edge faces the load, fit a stronger spring, roughen or clean the bar, or switch to black pipe (Sawmill Creek). Rod won't retract or release smoothly: sealant or glue residue on the rod, or a burred rod (Caulk Manufacturing). Never locks: plate too thick for the rod or hole too tight to tip, so engagement length divided by width is higher than the friction coefficient (Kalsi). Rod marking: the biting edge scores the rod, so don't use it on finished surfaces.
- **related**: 
  - Linear ratchet (cable-tie ratchet): holds in fixed tooth steps with a positive, non-slipping lock instead of friction
  - Cam cleat and rope cam: a toothed or smooth cam wedges a rope instead of a plate wedging a rod
  - Wrap-spring clutch: the turning version of a self-tightening friction grip
  - Roller clutch and sprag clutch: turning one-way locks that wedge rollers or sprags instead of tipping a plate
  - Shaft collar or set screw: holds a rod in both directions but must be loosened with a tool to move
  - Screw clamp: slower, but holds in both directions and can be set to a known force
  - Collet or split-cone lock (telescoping poles): clamps all round by screwing a nut, holds both ways

### Pictures, videos and models

- **links**: 
  - [US4926722A: Quick-action bar clamp (Sorensen and Gatzemeyer, 1990)](https://patents.google.com/patent/US4926722A/en): Patent drawings of a one-handed bar clamp with a trigger-tipped driving lever and a canted, spring-loaded braking lever on the slide bar *(licence: patent document; link only)*
  - [US2530359A: Operating mechanism for plungers of caulking guns (Peterson, 1950)](https://patents.google.com/patent/US2530359A/en): Drawings of a caulking gun's feeding plates and spring-loaded holding plate that bind on the plunger rod, with the finger release *(licence: patent document; link only)*
  - [Kalsi Seals Handbook, Chapter D21: Sticky drawer effect](https://www.kalsi.com/handbook/D21_Sticky_drawer_effect.pdf): Diagrams of engagement length versus width and of tipped parts binding at opposite corners (Figs. 1 and 3) *(licence: © Kalsi Engineering; link only)*
  - [Slocum, FUNdaMENTALS of Design, Topic 3 (p. 3-8, Saint-Venant's principle: bearings)](http://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%203.PDF): Sketches of slides that are stable, marginally stable, or jam, depending on their length-to-width ratio *(licence: © Alexander Slocum, free to read; link only)* *(unverified parts omitted)*
- **diagram_idea**: Side view of a rod through a plate with an exaggerated oversized hole: on the left the plate is square and slides (green arrow); on the right it is tipped a few degrees, with two red contact dots on opposite edges of the hole, a curved arrow showing the load tipping it harder, a small spring holding it tipped, and a thumb pressing a release lever to square it.
- **sources**: 
  - https://patents.google.com/patent/US4926722A/en
  - https://patents.google.com/patent/US2530359A/en
  - https://patents.google.com/patent/US4081112A/en
  - https://www.kalsi.com/handbook/D21_Sticky_drawer_effect.pdf
  - http://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%203.PDF
  - https://sawmillcreek.org/archive/index.php/t-91141.html
  - https://sawmillcreek.org/archive/index.php/t-286520.html
  - https://www.sashco.com/3-key-features-of-the-best-caulking-gun/
  - https://caulkmfg.com/articles/drip-free-caulk-gun-manual-causes-fixes
  - https://www.firgelliauto.com/blogs/mechanisms/bar-clamp
  - https://en.wikipedia.org/wiki/Clamp_(tool)
  - https://en.wikipedia.org/wiki/Caulking_gun
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.youtube.com/watch?v=SSKu5k4xVPI
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=SSKu5k4xVPI&format=json

### Other info

- **Fields with unverified parts:** environment_limits, links, making_tips_3d_printing, materials, play_and_precision, reuse_cycles, tools_needed

