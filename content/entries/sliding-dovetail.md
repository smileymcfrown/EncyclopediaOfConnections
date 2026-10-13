---
title: Sliding dovetail
description: A flared tongue on one part slides into a matching flared groove in the other, locking the parts so they can't
  be pulled apart sideways while still letting them slide along the groove, as used to hold shelves in bookcases or slide-on
  mounts together.
num: 246
term: Sliding dovetail (dovetail housing joint)
plain_name: A long tongue with sloping sides that slides into a matching groove with sloping sides, so the two parts can only
  slide apart lengthwise and can't be pulled straight apart
aliases:
- dovetail housing, dovetail housing joint, housed dovetail (UK and school woodwork terms; DT Online 'Housing Joint'; Sawmill
  Creek)
- dovetail dado, dovetail groove, dovetail slot and tail
- French dovetail (a stopped sliding dovetail used in drawer construction; Wikipedia 'Dovetail joint')
- stopped sliding dovetail, blind sliding dovetail (the groove stops short of the front edge so the joint is hidden)
- tapered sliding dovetail (the tongue and groove get narrower towards the back so the joint only tightens at the end; Fine
  Woodworking; Rockler)
- half dovetail housing, single-sided sliding dovetail (only one side of the groove is angled; DT Online)
- sliding dovetail batten (a batten slid into a dovetail groove under a tabletop to keep it flat)
- dovetail rail, dovetail slide, dovetail mount (maker and 3D-printing names for the same shape used as a slide-on mount;
  Wikipedia 'Dovetail joint'; Printables)
family: interlocking joints & joinery
other_families: ['sliding, telescoping & linear motion', quick-release & tool-free]
finder:
  job: [join and hold, let it move, line parts up exactly]
  motion: slide
  special_behaviour: [self-aligning or self-centring, quick-release]
  holding_principle: [shape, material bond, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin), woodwork]
  connects: [boards or sheet]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [press or vice, power tools, hand tools]
  load_max: heavy
  usual_process: woodwork
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  reuse_cycles:
    kind: source uncertain
    reason: '`reuse_cycles` is marked [uncertain] here: "…printed parts) though printed or wooden rails slowly wear and loosen
      [uncertain];…"'
confirmed: []
open_points: []
uncertain_fields: [reuse_cycles, processes, environment_limits, off_the_shelf_parts]
diagram_idea: A cut-away end view of a shelf's flared tongue sitting in a flared groove in a bookcase side, with a red arrow
  pulling the shelf straight out (blocked, marked with a cross) and a green arrow along the groove (the only way it can slide),
  plus a small inset of a tapered version getting tight only at the end of its travel.
links:
- url: https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif
  title: Joinery-slidingdovetail.gif (Wikimedia Commons, by SilentC)
  shows: Animated diagram of a sliding dovetail tongue sliding into its groove
  license: CC BY-SA 3.0 or GFDL 1.2 or later (dual licensed)
- url: https://www.rockler.com/learn/how-to-cut-a-sliding-dovetail-video-by-cfc
  title: How to Cut A Sliding Dovetail (Rockler, video by Tim Rousseau, Center for Furniture Craftsmanship)
  shows: Video of cutting a sliding dovetail with a plunge router and a router table, plus the rule of thumb on when to taper
  license: link only
- url: https://www.finewoodworking.com/2015/05/12/tapered-sliding-dovetails-are-easier-than-you-think
  title: Tapered Sliding Dovetails Are Easier than You Think (Fine Woodworking, Timothy Rousseau)
  shows: Photos of tapered sliding dovetails joining case sides to a top and a mid-span shelf
  license: link only
- url: https://www.popularwoodworking.com/techniques/how-to-make-a-sliding-dovetail/
  title: How to make a Sliding Dovetail (Popular Woodworking)
  shows: Step-by-step photos and drawings of cutting the groove and tongue on a table saw and router table
  license: link only
- url: https://www.thingiverse.com/thing:5540647
  title: Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)
  shows: Photos of a printed sliding dovetail demonstration piece made with the Round Anything OpenSCAD library
  license: CC BY 4.0
make_it_yourself:
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  title: 'BOSL2 joiners.scad: dovetail() (OpenSCAD library)'
  what_it_is: Parametric male and female dovetails, straight or tapered, with slope or angle, chamfer or rounding, an entry
    slot and a $slop fit setting; works for sliding dovetails of any length
  license: BSD 2-Clause
- url: https://www.thingiverse.com/thing:5540647
  title: Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)
  what_it_is: Printable sliding dovetail demo with its OpenSCAD source, to try the fit and feel
  license: CC BY 4.0
- url: https://www.thingiverse.com/thing:2524639
  title: Sliding Dove Tail Storage Box (Easy To Print) by akshay_d21 (Thingiverse)
  what_it_is: Small card box whose lid slides on dovetails, designed with about 0.3 mm tolerance
  license: CC BY-NC-SA 4.0
- url: https://www.printables.com/model/1134808-python-dovetail-test-pieces
  title: Python - Dovetail Test Pieces by humebeam (Printables) (URL from Printables API, page not opened)
  what_it_is: About 6 g of dovetail test pieces with 0.15 mm clearance to check flow and fit before printing a large dovetailed
    assembly
  license: CC BY-NC
- url: https://www.printables.com/model/1678921-modular-workbench-drawers-dovetail-sliding-system
  title: Modular Workbench Drawers – Dovetail Sliding System by Vinors3DLab (Printables) (URL from Printables API, page not
    opened)
  what_it_is: Stackable printed drawers that join on all sides with dovetail rails, printed without supports in PLA or PETG
  license: CC BY-NC-SA
- url: https://www.printables.com/model/1749755-5-gallon-bucket-handle-replacement-with-tapered-sl
  title: 5 Gallon Bucket Handle Replacement With Tapered Sliding Dovetail Joint by Jay Vee (Printables) (URL from Printables
    API, page not opened)
  what_it_is: A two-part printed handle joined with a tapered sliding dovetail, remixed because the original fit was too loose
  license: CC BY-NC-SA
- url: https://www.printables.com/model/1760779-sliding-dovetail
  title: Sliding Dovetail by Rentsch (Printables) (URL from Printables API, page not opened)
  what_it_is: Screw-on printed sliding dovetail mount so a holder can be slid off and on again
  license: Creative Commons Public Domain (as listed by Printables)
sources:
- https://en.wikipedia.org/wiki/Dovetail_joint
- https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif
- https://www.rockler.com/learn/making-sliding-dovetail-joints
- https://www.rockler.com/learn/how-to-cut-a-sliding-dovetail-video-by-cfc
- https://www.finewoodworking.com/2015/05/12/tapered-sliding-dovetails-are-easier-than-you-think
- https://www.finewoodworking.com/2009/01/25/how-to-cut-sliding-dovetail-joints
- https://www.popularwoodworking.com/techniques/how-to-make-a-sliding-dovetail/
- https://www.wwgoa.com/post/making-sliding-dovetails/
- https://sawmillcreek.org/threads/dimensioning-sliding-dovetails.253026/
- https://sawmillcreek.org/threads/tapered-sliding-dovetail-battens.233973/
- https://wiki.dtonline.org/index.php/Housing_Joint
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
- https://www.thingiverse.com/thing:5540647
- https://www.thingiverse.com/thing:2524639
- https://api.printables.com/graphql/
- https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
- https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf
research: research/connection-types/results/Sliding_dovetail.json
image: null
glossary: [misalignment, clearance, form-fit--force-fit--material-bond, taper, chamfer--fillet, undercut, creep, elephants-foot,
  overhang--bridging, peel-vs-shear]
---

A flared tongue on one part slides into a matching flared groove in the other, locking the parts so they can't be pulled apart sideways while still letting them slide along the groove, as used to hold shelves in bookcases or slide-on mounts together.

**In plain words:** A long tongue with sloping sides that slides into a matching groove with sloping sides, so the two parts can only slide apart lengthwise and can't be pulled straight apart. **Proper term:** Sliding dovetail (dovetail housing joint).

**Also called:** dovetail housing, dovetail housing joint, housed dovetail (UK and school woodwork terms; DT Online 'Housing Joint'; Sawmill Creek); dovetail dado, dovetail groove, dovetail slot and tail; French dovetail (a stopped sliding dovetail used in drawer construction; Wikipedia 'Dovetail joint'); stopped sliding dovetail, blind sliding dovetail (the groove stops short of the front edge so the joint is hidden); tapered sliding dovetail (the tongue and groove get narrower towards the back so the joint only tightens at the end; Fine Woodworking; Rockler); half dovetail housing, single-sided sliding dovetail (only one side of the groove is angled; DT Online); sliding dovetail batten (a batten slid into a dovetail groove under a tabletop to keep it flat); dovetail rail, dovetail slide, dovetail mount (maker and 3D-printing names for the same shape used as a slide-on mount; Wikipedia 'Dovetail joint'; Printables).

## How it works

The groove is wider at the bottom than at the top, and the tongue is shaped to match, so once the tongue is in the groove it is trapped and can't be lifted or pulled straight out; the wood (or plastic) would have to crush or break first (Rockler 'Making Sliding Dovetail Joints'). The only way in or out is to slide the tongue along the groove from one open end, so the joint holds against pulling apart in every direction except that one (BOSL2 joiners.scad; DT Online 'Housing Joint' notes that angled housing edges stop sideways forces pulling a shelf out). Glue, a [taper](../glossary.md#taper) that wedges tight at the end of the slide, or a stop keeps it from sliding out lengthwise; left unglued, it lets a tabletop or panel expand and shrink while staying flat (Rockler; Fine Woodworking 'Tapered Sliding Dovetails Are Easier than You Think').

## Parts

Single feature pair on two parts: a groove with angled walls (the socket or housing) cut into one part, and a matching angled tongue (the tail) on the end or face of the other; optionally glue, a stop at the end of the groove, or a screw or pin to stop it sliding out (Rockler 'Making Sliding Dovetail Joints'; Wikipedia 'Dovetail joint').

## Everyday examples

- Shelves slid into the sides of solid-wood bookcases and cabinets (Wikipedia 'Dovetail joint'; Rockler)
- Drawers whose front overlaps the sides, with the sides slid into dovetail grooves in the front (WWGOA)
- Iron sights and telescopic sights slid onto the dovetail rail of an air rifle (commonly 11 mm or 3/8 in.) (Wikipedia 'Dovetail joint')
- 3D-printed stackable storage drawers and slide-on organiser mounts that slide together (Printables 'Modular Workbench Drawers – Dovetail Sliding System')

## When to use it

Use a sliding dovetail when one part meets another in the middle of a board rather than at its end, and must not pull away: shelves, partitions and tops in solid-wood cases, drawer fronts, table aprons, and battens that keep a tabletop or lid flat while letting it move with the seasons (Wikipedia 'Dovetail joint'; Rockler). It is handy for assembly because the parts stay linked without clamps (Rockler). In 3D printing and CAD it is a simple way to make slide-on mounts, lids, modular boxes and rails that come apart again, or to join large prints (Printables; BOSL2).

## When not to use it

Avoid it when you can't get clear space to slide the parts in from one end; use a dowel, biscuit or screwed joint instead. For long joints in wood, don't use a straight sliding dovetail: it can swell with glue and jam part-way; use a tapered sliding dovetail (Fine Woodworking; Rockler). For a precise, adjustable machine slide use a dovetail slide with a gib strip, which can be tightened to remove play. For a thin panel, a deep groove weakens it too much; use a shallow dado (housing) with screws or a tongue-and-groove instead (Sawmill Creek). If parts must separate and rejoin quickly under load, a quick-release clamp plate is easier than a sliding fit.

## Details

- **What it does (jobs):**
  - join and hold: fixes shelves, partitions, tops and drawer fronts to case sides so they can't pull out (Wikipedia 'Dovetail joint'; Rockler)
  - let it move (turn, slide or bend): left unglued it acts as a slide, e.g. drawer runners, extension-table slides, slide-on mounts, or a batten that lets a tabletop swell and shrink (Rockler)
  - line parts up exactly: the interlocking shape pulls slightly bowed panels into line and keeps shelves square (Rockler)
- **Movement:** slide: along the groove only, in one straight line; this sliding is used for assembly, for slide-on mounts and runners, or to let wood move; once glued, pinned or wedged by a taper it becomes a fixed joint (none)
- **Directions it can move (degrees of freedom):** 1 while unglued: the tongue can only slide along the groove; all other movements are blocked by the angled walls (BOSL2 joiners.scad: the dovetail slides together along one axis). 0 once glued, stopped at the end, or wedged tight by a tapered tongue.
- **Special behaviour:**
  - self-aligning or self-centring: the angled walls pull the two parts into line as they slide together; a tapered sliding dovetail slides freely until the last moment and then wedges tight, and tight sliding dovetails can pull slightly bowed panels straight (BOSL2 dovetail(); Fine Woodworking; Rockler)
  - quick-release: when left dry, slide-on versions (3D-printed mounts, sight rails, removable fence holders) can be slid off and back on without tools (Printables 'Sliding Dovetail' by Rentsch, read via API; Wikipedia 'Dovetail joint' on dovetail sight rails)
- **How it holds:**
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): the flared tongue is trapped by the [undercut](../glossary.md#undercut) groove (Rockler)
  - material bond (glue, solvent or melting): woodworking versions are often glued, but only near the front on wide solid-wood parts so the rest can move (Rockler)
  - friction or clamping (force-fit): a tapered tongue wedges tight at the end of its travel and a tight fit holds by friction (Fine Woodworking; BOSL2 dovetail())
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** Medium to heavy for its size: very strong against pulling the tongue straight out of the groove (tension) and against sideways [shear](../glossary.md#peel-vs-shear), because the wood must crush or break before the parts separate (Rockler). Weak along the sliding direction unless glued, stopped or tapered. Wider tongues resist racking (twisting a shelf out of square) better (Brian Holcombe, Sawmill Creek 'Dimensioning sliding dovetails'). A deep groove weakens the grooved part itself, so keep it shallow (see rules_of_thumb).
- **Play and precision:** none to small: a well-fitted tongue slides in 'with just a little hand pressure' (WWGOA) and a tapered one has no play once home (Fine Woodworking). Printed versions have a small designed gap, e.g. 0.15 mm (Printables 'Python - Dovetail Test Pieces', read via API) to about 0.3 mm (Thingiverse 'Sliding Dove Tail Storage Box'). The smaller the dovetail angle, the more precise the fit must be (Popular Woodworking 'How to make a Sliding Dovetail'). Tolerates little [misalignment](../glossary.md#misalignment): a long straight joint can jam part-way if the fit or glue swells it (Fine Woodworking).
- **Taking it apart:** removable when dry (slides back out along the groove, e.g. unglued battens, slide-on mounts and 3D-printed modular drawers); permanent when glued along its length, as in many shelf and case joints (Rockler; Printables 'Modular Workbench Drawers – Dovetail Sliding System', read via API)
- **How often it can be reused:** many times when left dry (slide-on mounts, modular printed parts) though printed or wooden rails slowly wear and loosen ⚑ [uncertain]; once when glued
- **Sealing:** none: it is not designed to seal
- **Adjustable:** no, apart from position along the slide when left unglued; a tapered sliding dovetail is set by how far it is driven in
- **Access needed:** one side only (blind): the parts slide together from one open end of the groove, so you need clear space along the slide line about as long as the joint, but no access to the back (BOSL2 dovetail() 'entry_slot_length').
- **Materials:** Solid wood is the classic material (hardwoods and softwoods; slope 1:6 for softwoods and 1:8 for hardwoods is traditional; Wikipedia 'Dovetail joint'). Also 3D-printed plastics (PLA and PETG in maker designs; Printables 'Modular Workbench Drawers'), resin (Formlabs says dovetails suit SLA parts with sharp edges), and metal (machine-tool dovetail slides, jet-engine blade roots and dovetail sight rails on airguns; Wikipedia 'Dovetail joint'). Not suited to thin sheet (laser or flat CNC cutting can't make the angled walls without a dovetail cutter).
- **Heat, cold, water and wear:** Wood swells and shrinks with humidity, mostly across the grain and very little along it (0.1-0.2% along the grain from green to ovendry; USDA Wood Handbook ch. 4), so a joint glued along its full length across a wide board can crack the board; glue only the front (Rockler). Glue makes the joint swell during assembly and can jam it (Fine Woodworking). Unglued tapered battens can work loose on surfaces that vibrate when humidity swings a lot (Stanley Covington, Sawmill Creek). Printed PLA softens at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen), so printed slides can deform in a hot car; printed plastic under constant load may also [creep](../glossary.md#creep) and loosen ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - woodwork: the main use; router table or hand-held router with a dovetail bit, or hand tools (saw, chisel, guide block) (Fine Woodworking; DT Online)
  - CNC: a CNC router can cut the groove with a dovetail cutter; dovetail cutters can't plunge, so waste is cleared first with a straight bit (Fine Woodworking describes the same order on a router table; CNC-specific practice ⚑ [uncertain])
  - 3D print (FDM): slide-together rails, lids, modular drawers and mounts (Printables; Thingiverse)
  - 3D print (resin): dovetails suit SLA's sharp edges and smooth surfaces (Formlabs)
  - off-the-shelf part: dovetail router bits (typically 7 to 14 degrees; Popular Woodworking) and ready-made dovetail rails and slides
- **Printing it in one piece (print in place):** no: the tongue and groove are printed as separate parts and slid together; printed in place they would fuse unless given a large gap, which would make the joint loose (Hubs [clearance](../glossary.md#clearance) guidance)
- **Tools:** Woodwork: a router with a dovetail bit (in a router table or with a guide or jig), a straight bit to clear most of the waste first, clamps, a mallet and glue (Fine Woodworking 'How to Cut Sliding Dovetail Joints'); or hand tools: saw, chisel and a guide block cut to the dovetail angle (DT Online 'Housing Joint'). 3D printing and CNC: CAD with a dovetail feature (e.g. BOSL2 dovetail()) or a CNC router with a dovetail cutter; none to assemble, just slide together.
- **Difficulty:** moderate in wood: needs a router with a dovetail bit and careful trial-and-error fitting to get a tongue that slides in by hand (WWGOA; Fine Woodworking). Easy in 3D printing: a CAD dovetail feature or library (BOSL2) and a small test print to tune the gap.

### 3D printing tips

1) Clearance: design a small gap on each of the three contact faces. Proven FDM designs use 0.15 mm (Printables 'Python - Dovetail Test Pieces': parts should 'slide together with little effort', not with a mallet) to about 0.3 mm (Thingiverse 'Sliding Dove Tail Storage Box'); Hubs suggests 0.5 mm for FDM interlocking parts in general, 0.2 mm for SLA and SLS; Formlabs recommends at least 0.4 mm for SLA assemblies. Print a small test piece first. 2) Calibrate flow: over-extrusion is the usual reason printed dovetails won't slide together (Printables 'Python - Dovetail Test Pieces'). 3) Orientation: print long rails lying flat with the dovetail pointing up or with the slide axis vertical, so the angled flanks are gentle [overhangs](../glossary.md#overhang--bridging); a tongue lying on its side makes the upper flank a steep overhang. Prusa says overhangs of 45-60 degrees (from vertical) print cleanly without support; a modular drawer design prints its 'dovetail rails printed horizontally' with no supports (Printables 'Modular Workbench Drawers', read via API). 4) [Chamfer](../glossary.md#chamfer--fillet) or round the corners of the tongue and groove so they start easily and don't catch on [elephant's foot](../glossary.md#elephants-foot) (BOSL2 dovetail() chamfer and radius options; Hubs: a small radius on edges helps assembly and reduces stress). 5) For long joints, taper the tongue and groove slightly so the joint slides freely and only wedges tight when fully home (BOSL2 dovetail() taper option; Printables 'Bucket Handle Replacement With Tapered Sliding Dovetail Joint'). 6) Leave room at one end for the tongue to enter (BOSL2 'entry_slot_length'), or add a small snap nub to stop it sliding out (Printables 'Sliding Dovetail Cable Label' latches with small nubs). 7) Material: PLA or PETG are used in published designs; layer bonds are the weak direction (PLA layer adhesion about 55% of flat strength in CNC Kitchen's test), so keep the pulling load along the layers where possible.

### Buying one (off-the-shelf parts)

Dovetail router bits (sold by angle, e.g. 7, 8, 9, 10 or 14 degrees, and width, e.g. 1/2 in.; Popular Woodworking; WWGOA) with a matching straight bit for waste removal (Fine Woodworking); sliding dovetail jigs and router templates, including ones whose guides can be set to a taper ⚑ [uncertain]. For metal and mounts: 'dovetail slides' and 'dovetail rails' (e.g. 11 mm airgun/rimfire sight rails; Wikipedia 'Dovetail joint').

## Rules of thumb

- Dovetail slope: typically 1:6 for softwoods and 1:8 for hardwoods, with 1:7 as a compromise (Wikipedia 'Dovetail joint'); BOSL2 dovetail() defaults to 1:6 and lists 1:4, 1:6 and 1:8 as standard (BOSL2 joiners.scad).
- Router dovetail bits range from 7 to 14 degrees; 14 degrees, 1/2 in. wide is the standard half-blind dovetail jig bit; the smaller the angle, the more precise the fit must be (Popular Woodworking 'How to make a Sliding Dovetail').
- Groove depth: set the bit height to about 1/3 of the thickness of the grooved board (WWGOA 'Making Sliding Dovetails'); for tabletops keep it to 1/3 at most, because a deeper trench removes too much strength (Brian Holcombe, Sawmill Creek 'Dimensioning sliding dovetails').
- Length: a straight (untapered) sliding dovetail is a very strong joint under about 6 in. long; for longer joints switch to a tapered one (Rockler 'How to Cut a Sliding Dovetail', Center for Furniture Craftsmanship). Timothy Rousseau uses tapered sliding dovetails on solid-wood cases deeper than 10-12 in. (Fine Woodworking 2015).
- Glue: on wide solid-wood parts glue only the front end, which directs the panel's seasonal movement to the back; battens under tabletops go in unglued (Rockler 'Making Sliding Dovetail Joints').
- Fit: take light cuts from both sides until the boards just fit together by hand (Fine Woodworking 2009); on a router table cutting both sides, moving the fence 1/32 in. changes the fit by 1/16 in. (WWGOA).
- 3D-printed clearance: 0.15 mm per face slides together with little effort on a well-calibrated printer (Printables 'Python - Dovetail Test Pieces'); about 0.3 mm is a safe general value (Thingiverse 'Sliding Dove Tail Storage Box'); Prusa printers are accurate to about 0.2 mm and moving fits should start at 0.3 mm or more (Prusa knowledge base 'Modeling with 3D printing in mind').

## Common failures

Jamming part-way during glue-up because glue swells the wood, especially on wide parts; prevent it with a tapered joint or a dry run (Fine Woodworking). Too loose a fit, which weakens the joint and looks sloppy (Fine Woodworking). Tear-out along the edge of the groove from the router; score the shoulder line first (Popular Woodworking). A groove cut too deep, which weakens or splits the grooved board (Sawmill Creek). Cracked panels from gluing the full length across the grain (Rockler). In 3D prints: over-extrusion or elephant's foot making the parts too tight to slide, fixed by calibrating flow, chamfering edges or sanding (Printables 'Python - Dovetail Test Pieces'); a printed fit that is too loose slides past its intended stop (Printables 'Bucket Handle Replacement With Tapered Sliding Dovetail Joint').

## Safety

Router safety: a dovetail bit can't plunge, so clear most of the waste first with a straight bit (Fine Woodworking); on a router table, setting the fence so the bit cuts on the wrong side can 'jerk your workpiece forward' (Popular Woodworking). Tapping a tight joint apart with a hammer can split the parts (Fine Woodworking). Otherwise none known.

## Related

- Dovetail joint (through and half-blind): the corner version with many pins and tails, locking in one direction at the end of boards
- Tongue-and-groove joint and dado (housing) joint: a square tongue in a square groove; slides the same way but doesn't resist pulling apart
- Dovetail slide with gib strip (dovetail ways): the machine-tool version, with an adjustable strip to remove play for precise sliding
- Quick-release plate (camera plate, dovetail clamp): a dovetail plate gripped by a clamping jaw instead of slid in
- Split-part joints for large prints: sliding dovetails are one way to join printed pieces
- Butterfly key (bow-tie key): a separate double-dovetail key set into both parts instead of a tongue on one part
- Mortise and tenon: a tongue in a hole, used where the joint is at the end of a rail
- T-slot and aluminium extrusion T-nuts: another slide-in shape that is trapped in an undercut groove

## Make it yourself

- [BOSL2 joiners.scad: dovetail() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): Parametric male and female dovetails, straight or tapered, with slope or angle, chamfer or rounding, an entry slot and a $slop fit setting; works for sliding dovetails of any length *(licence: BSD 2-Clause)*
- [Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)](https://www.thingiverse.com/thing:5540647): Printable sliding dovetail demo with its OpenSCAD source, to try the fit and feel *(licence: CC BY 4.0)*
- [Sliding Dove Tail Storage Box (Easy To Print) by akshay_d21 (Thingiverse)](https://www.thingiverse.com/thing:2524639): Small card box whose lid slides on dovetails, designed with about 0.3 mm tolerance *(licence: CC BY-NC-SA 4.0)*
- [Python - Dovetail Test Pieces by humebeam (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1134808-python-dovetail-test-pieces): About 6 g of dovetail test pieces with 0.15 mm clearance to check flow and fit before printing a large dovetailed assembly *(licence: CC BY-NC)*
- [Modular Workbench Drawers – Dovetail Sliding System by Vinors3DLab (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1678921-modular-workbench-drawers-dovetail-sliding-system): Stackable printed drawers that join on all sides with dovetail rails, printed without supports in PLA or PETG *(licence: CC BY-NC-SA)*
- [5 Gallon Bucket Handle Replacement With Tapered Sliding Dovetail Joint by Jay Vee (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1749755-5-gallon-bucket-handle-replacement-with-tapered-sl): A two-part printed handle joined with a tapered sliding dovetail, remixed because the original fit was too loose *(licence: CC BY-NC-SA)*
- [Sliding Dovetail by Rentsch (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1760779-sliding-dovetail): Screw-on printed sliding dovetail mount so a holder can be slid off and on again *(licence: Creative Commons Public Domain (as listed by Printables))*

## Pictures, videos and models

- [Joinery-slidingdovetail.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif): Animated diagram of a sliding dovetail tongue sliding into its groove *(licence: CC BY-SA 3.0 or GFDL 1.2 or later (dual licensed))*
- [How to Cut A Sliding Dovetail (Rockler, video by Tim Rousseau, Center for Furniture Craftsmanship)](https://www.rockler.com/learn/how-to-cut-a-sliding-dovetail-video-by-cfc): Video of cutting a sliding dovetail with a plunge router and a router table, plus the rule of thumb on when to taper *(licence: link only)*
- [Tapered Sliding Dovetails Are Easier than You Think (Fine Woodworking, Timothy Rousseau)](https://www.finewoodworking.com/2015/05/12/tapered-sliding-dovetails-are-easier-than-you-think): Photos of tapered sliding dovetails joining case sides to a top and a mid-span shelf *(licence: link only)*
- [How to make a Sliding Dovetail (Popular Woodworking)](https://www.popularwoodworking.com/techniques/how-to-make-a-sliding-dovetail/): Step-by-step photos and drawings of cutting the groove and tongue on a table saw and router table *(licence: link only)*
- [Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)](https://www.thingiverse.com/thing:5540647): Photos of a printed sliding dovetail demonstration piece made with the Round Anything OpenSCAD library *(licence: CC BY 4.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 4 sentences on this page marked [uncertain].
- ⚑ Finder value `reuse_cycles` = many times (source uncertain): `reuse_cycles` is marked ⚑ [uncertain] here: "…printed parts) though printed or wooden rails slowly wear and loosen ⚑ [uncertain];…"

## Sources

- <https://en.wikipedia.org/wiki/Dovetail_joint>
- <https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif>
- <https://www.rockler.com/learn/making-sliding-dovetail-joints>
- <https://www.rockler.com/learn/how-to-cut-a-sliding-dovetail-video-by-cfc>
- <https://www.finewoodworking.com/2015/05/12/tapered-sliding-dovetails-are-easier-than-you-think>
- <https://www.finewoodworking.com/2009/01/25/how-to-cut-sliding-dovetail-joints>
- <https://www.popularwoodworking.com/techniques/how-to-make-a-sliding-dovetail/>
- <https://www.wwgoa.com/post/making-sliding-dovetails/>
- <https://sawmillcreek.org/threads/dimensioning-sliding-dovetails.253026/>
- <https://sawmillcreek.org/threads/tapered-sliding-dovetail-battens.233973/>
- <https://wiki.dtonline.org/index.php/Housing_Joint>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad>
- <https://www.thingiverse.com/thing:5540647>
- <https://www.thingiverse.com/thing:2524639>
- <https://api.printables.com/graphql/>
- <https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/>
- <https://formlabs.com/blog/how-to-3d-print-interlocking-joints/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf>
