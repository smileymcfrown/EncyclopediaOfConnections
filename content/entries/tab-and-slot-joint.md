---
title: Tab-and-slot joint
description: Tabs sticking out of the edge of one flat part pass into slots cut in another, so the parts find their exact
  position by themselves and stay put while they are glued, welded, bolted, keyed or simply press-fitted.
num: 239
term: Tab-and-slot joint (self-fixturing or self-locating sheet joint)
plain_name: Tongues cut on the edge of one flat piece that push through matching rectangular holes in another flat piece,
  so the pieces line themselves up and hold each other in place, like a laser-cut box or a flat-pack metal kit
aliases:
- tab and slot, slot and tab, tab-and-slot construction (SendCutSend; Fictiv; Mentored Engineer)
- self-fixturing joint, self-locating joint (Fictiv; Engineers Rule 'Self-Locating and Self-Fixturing Designs')
- finger holes (Boxes.py's name for the row of slots that the fingers of another panel plug into, making a T connection) (Boxes.py
  documentation)
- 'through tenon and mortise, the woodworking equivalent; the keyed version is a tusk tenon (SendCutSend: ''known in woodworking
  as a tusk tenon'')'
- key-and-tab joint, wedged tab, hook and slot (locked variants) (SendCutSend 'How to Join Laser Cut Parts Without Fasteners')
- slot-together, interlocking or press-fit laser-cut joint, friction-fit joint (Ponoko)
- Tab and Slot feature (the SOLIDWORKS sheet-metal command added in 2018) (Engineers Rule; Mentored Engineer)
family: interlocking joints & joinery
other_families: [locating & alignment, snap & clip fits]
finder:
  job: [join and hold, line parts up exactly, glue or bond]
  motion: none
  special_behaviour: [self-aligning or self-centring, quick-release]
  holding_principle: [shape, friction or clamping, material bond]
  reuse_cycles: many times
  seal: none
  access_needed: both sides
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [CNC, 3D print (FDM), laser cut, sheet metal, woodwork]
  connects: [boards or sheet]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, welding or brazing torch, hand tools]
  load_max: heavy
  usual_process: laser cut
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [reuse_cycles, adjustable, making_tips_3d_printing, everyday_examples, environment_limits, safety_notes,
  make_it_yourself]
diagram_idea: 'An exploded view of two plywood panels meeting in a T, one with three rectangular tabs on its edge and the
  other with three matching slots, then the assembled joint, with callouts for clearance per side, tab length equal to sheet
  thickness, rounded or dog-bone slot corners, and small insets showing the ways to lock it: glue, a key through the tab,
  a bent-over tab and a plug weld.'
links:
- url: https://commons.wikimedia.org/wiki/File:ADBO_-_Project_Box_for_Arduino_(laser_cut).jpg
  title: ADBO - Project Box for Arduino (laser cut).jpg (Wikimedia Commons, by oomlout)
  shows: Photo of a clear laser-cut acrylic box whose side walls have tabs passing through slots in the top and bottom plates,
    clamped by long corner bolts
  license: CC BY-SA 2.0
- url: https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/
  title: How to Join Laser Cut Parts Without Fasteners (SendCutSend)
  shows: Illustrated guide to plain tabs and slots, slot corner shapes (radius and dog-bone), bent tabs, hooks and key-and-tab
    (tusk tenon) joints
  license: link only
- url: https://www.youtube.com/watch?v=53Q4ct6bQeY
  title: Designing for Tab and Slots with SendCutSend - Best Practices (YouTube, SendCutSend)
  shows: Video on designing tab-and-slot laser-cut parts (title and channel checked via YouTube oEmbed; not watched)
  license: link only (standard YouTube licence)
- url: https://www.youtube.com/watch?v=DHcrX_ZnByA
  title: Top Tips for Tab and Slot Design for Sheet Metal Part Assembly - Cutting Corners Episode 3 (YouTube, SendCutSend)
  shows: Video with tab-and-slot tips and a real steel build where slotted gussets hold themselves in place for welding (title
    and channel checked via YouTube oEmbed; not watched)
  license: link only (standard YouTube licence)
- url: https://mentoredengineer.com/warning-on-self-fixturing-parts/
  title: Proper Tab and Slot Design and How to Avoid Serious Issues (Mentored Engineer)
  shows: FEA stress plots comparing slot directions and slot corner shapes (square, radiused, full-radius, dog-bone) and improved
    tab shapes for welding
  license: link only
make_it_yourself:
- url: https://boxes.hackerspace-bamberg.de/AllEdges?language=en
  title: Boxes.py online generator (edge types and settings page)
  what_it_is: Free parametric generator for laser-cut boxes and parts; its finger joints and 'finger holes' make tab-and-slot
    T connections, with 'burn' (kerf) and 'play' settings to tune the fit
  license: GPL-3.0 (Boxes.py code, per its LICENSE.txt)
- url: https://www.printables.com/model/266576-laser-cutter-slot-and-tab-clearance-test-3mm-mater
  title: Laser Cutter Slot and Tab Clearance Test (3mm materials) (Embrace Making, Printables) (URL from Printables API, page
    not opened)
  what_it_is: DXF/SVG test cut with a 15 x 3 mm tab and slots changing in 0.1 mm steps in both X and Y, to find the clearance
    your laser and material need. Read through the Printables public API.
  license: CC BY-NC (Creative Commons Attribution-NonCommercial)
- url: https://clementzheng.github.io/joinery/
  title: Joinery (Clement Zheng, 2016)
  what_it_is: Free browser tool that loads an SVG outline and adds joint profiles (male/female tabs and slots) along chosen
    edges for laser cutting, then exports the SVG
  license: '[uncertain] (not stated on the tool page)'
sources:
- https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/
- https://sendcutsend.com/blog/designing-sheet-metal-parts-with-tab-and-slots/
- https://sendcutsend.com/blog/mastering-tab-and-slot-design-for-efficient-metal-fabrication/
- https://www.fictiv.com/articles/sheet-metal-tabs-and-slots-assembly
- https://mentoredengineer.com/warning-on-self-fixturing-parts/
- https://www.engineersrule.com/can-create-self-locating-self-fixturing-designs-using-solidworks-2018/
- https://www.protolabs.com/services/sheet-metal-fabrication/design-guidelines/
- https://medesign.seas.upenn.edu/index.php/Guides/LaserCuttingFits
- https://help.ponoko.com/en/articles/4527166-interlocking-3d-laser-cut-designs
- https://www.ponoko.com/blog/how-to-make/how-to-make-glue-less-interlocking-parts/
- https://florianfesti.github.io/boxes/html/usermanual.html
- https://florianfesti.github.io/boxes/html/api_edges.html
- https://florianfesti.github.io/boxes/html/api_burn.html
- https://boxes.hackerspace-bamberg.de/AllEdges?language=en
- https://raw.githubusercontent.com/florianfesti/boxes/master/LICENSE.txt
- https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
- https://clementzheng.github.io/joinery/
- https://commons.wikimedia.org/wiki/File:ADBO_-_Project_Box_for_Arduino_(laser_cut).jpg
- https://api.printables.com/graphql/
- https://www.youtube.com/watch?v=53Q4ct6bQeY
- https://www.youtube.com/watch?v=DHcrX_ZnByA
research: research/connection-types/results/Tabandslot_joint_selffixturing_sheet_joint.json
---

Tabs sticking out of the edge of one flat part pass into slots cut in another, so the parts find their exact position by themselves and stay put while they are glued, welded, bolted, keyed or simply press-fitted.

**In plain words:** Tongues cut on the edge of one flat piece that push through matching rectangular holes in another flat piece, so the pieces line themselves up and hold each other in place, like a laser-cut box or a flat-pack metal kit. **Proper term:** Tab-and-slot joint (self-fixturing or self-locating sheet joint).

**Also called:** tab and slot, slot and tab, tab-and-slot construction (SendCutSend; Fictiv; Mentored Engineer); self-fixturing joint, self-locating joint (Fictiv; Engineers Rule 'Self-Locating and Self-Fixturing Designs'); finger holes (Boxes.py's name for the row of slots that the fingers of another panel plug into, making a T connection) (Boxes.py documentation); through tenon and mortise, the woodworking equivalent; the keyed version is a tusk tenon (SendCutSend: 'known in woodworking as a tusk tenon'); key-and-tab joint, wedged tab, hook and slot (locked variants) (SendCutSend 'How to Join Laser Cut Parts Without Fasteners'); slot-together, interlocking or press-fit laser-cut joint, friction-fit joint (Ponoko); Tab and Slot feature (the SOLIDWORKS sheet-metal command added in 2018) (Engineers Rule; Mentored Engineer).

## How it works

The tab fits the slot with a small clearance, so the two parts can only meet in one place and at one angle: the tab is trapped sideways and endways by the slot's walls, and the tab's shoulder rests on the slot plate, which stops it going in too far (SendCutSend; Fictiv). That leaves only one way out, straight back the way it came in; this is closed by friction (a press fit), glue, a weld, a bent-over tab, a hook, a key or wedge through the tab, a bolt, or simply by the other panels of a box trapping each other (SendCutSend; Boxes.py). Because the cutting machine places tabs and slots accurately, the parts line up without measuring or clamps, and making tabs different sizes means a part only fits one way round (mistake-proofing, poka-yoke) (SendCutSend).

## Parts

A few features rather than parts: one or more tabs (tongues) on the edge of one sheet and matching slots (rectangular holes, or notches at an edge) in the other. Optional extras: a key or wedge through a hole in the tab, a bent-over tab end, hooks, small bumps (nodes) or crush ribs for grip, dog-bone or rounded slot corners, and glue, plug welds or bolts to fix it (SendCutSend; Ponoko; Mentored Engineer).

## Everyday examples

- Laser-cut acrylic or plywood project boxes, where the side walls' tabs poke through slots in the top and bottom (Wikimedia Commons 'ADBO - Project Box for Arduino (laser cut)')
- Flat-pack sheet-metal kits and brackets that slot together before welding, such as weld-it-yourself kits (SendCutSend) and a slot-together steel desk (Mentored Engineer)
- A laser-cut kitchen utensil holder and structural steel frames with interlocking tabs (Engineers Rule)
- Cardboard boxes and packaging whose flaps tuck into slots ⚑ [uncertain]

## When to use it

Use tab-and-slot joints whenever flat parts are cut by laser, waterjet, plasma or CNC router and must meet at an angle: boxes, enclosures, brackets, frames, shelves, gussets and furniture. They make parts find their own position so you don't need to measure, clamp or build a jig; welders use them to hold parts square while tacking, especially non-magnetic metals (SendCutSend; Fictiv). Different-sized tabs stop parts being fitted the wrong way round (SendCutSend). For hobby boxes they can be press-fitted without glue in wood, or keyed or bolted when the item must come apart (Ponoko; SendCutSend).

## When not to use it

Avoid plain tabs in thin, flexible sheet, which flexes too much to hold (use bent tabs, hooks or a snap-lock sheet joint instead) (SendCutSend). Don't rely on a friction fit where tolerances are tight or the part will be moved a lot; Ponoko recommends bolts (a T-slot joint) or clips instead. Don't put slots in highly stressed areas or across the direction of load (Mentored Engineer); for critical structures add bolts or rivets or machine from solid (SendCutSend). If the joint must seal, fill it with glue or sealant or use a gasketed joint. For corner joints along whole edges a finger (box) joint is usually neater; for two parts crossing in the middle use a cross-halving slot joint.

## Details

- **What it does (jobs):**
  - join and hold: joins flat parts at right angles (T joints and corners) or in line
  - line parts up exactly: the tabs locate the parts without measuring, clamps or welding jigs (self-fixturing) (SendCutSend; Fictiv)
  - glue or bond: often the positioning step before gluing, welding or bolting (SendCutSend)
- **Movement:** none: once assembled the parts don't move. The tab only slides straight in and out of its slot during assembly.
- **Directions it can move (degrees of freedom):** 0 when locked (glued, welded, keyed, bent over or trapped by the other parts). A plain tab in a slip-fit slot leaves 1: the tab can slide back out the way it went in, held only by friction or by the rest of the assembly (SendCutSend).
- **Special behaviour:**
  - self-aligning or self-centring: the tabs put the parts in exactly the right place and square, with no jig; slot clearance of a few tenths of a millimetre keeps weld gaps consistent (Fictiv: 'within ±0.2 mm')
  - quick-release: only in the keyed (tusk tenon) or hooked versions, where pulling the key or unhooking lets the parts come apart (SendCutSend)
  - none of the other listed behaviours; a further trick is mistake-proofing: tabs and slots of different sizes so each part fits only one way (SendCutSend)
- **How it holds:**
  - shape (the parts interlock; form-fit): the slot walls trap the tab sideways and the tab shoulder stops it going in too far
  - friction or clamping (force-fit): press-fit tabs, bumps (nodes) and crush ribs hold it in against pulling out (Ponoko; UPenn MEAM.Design)
  - material bond (glue, solvent or melting): glue, solvent cement or plug welds make it permanent (SendCutSend; Mentored Engineer)
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** Light to heavy depending on material and how it is locked. Strong against sliding and twisting in the plane of the joint because the tab bears on the slot walls; weak against pulling straight out unless glued, welded, keyed or trapped. Slots and their square corners are stress raisers that can crack under high stress or vibration; round the corners and run slots along the direction of load (SendCutSend; Mentored Engineer). A welded steel tab-and-slot structure is heavy-duty; a press-fitted plywood or acrylic box is light-duty.
- **Play and precision:** Small, set by the clearance: typically 0.05-0.2 mm per side for laser-cut metal (Fictiv) or about 0.005 inch (0.13 mm) per side as a starting point (SendCutSend), and zero or negative (interference) for press fits (UPenn MEAM.Design). Parts return to the same position every time. Misalignment tolerance is limited to the clearance, but chamfered or rounded tab tips help guide tabs into slots (SendCutSend; Engineers Rule). Rounded slot corners give strength but a sloppier fit; dog-bone corners give accuracy (SendCutSend; Mentored Engineer).
- **Taking it apart:** removable when slip-fitted and held by a key, wedge, hook or bolts (SendCutSend: 'this joint is great if your design needs to be frequently disassembled'); semi-permanent when press-fitted or with bent tabs; permanent once glued or welded.
- **How often it can be reused:** many times for slip fits locked by keys, hooks or bolts (SendCutSend); a few times for press fits in wood or MDF, which squash the fibres and loosen ⚑ [uncertain]; once for glued, welded or bent-over tabs.
- **Sealing:** none: the clearance leaves small gaps unless filled with glue, sealant or weld.
- **Adjustable:** no: positions are fixed by where the slots are cut. Lengthening a slot allows some sliding adjustment, at the cost of accuracy ⚑ [uncertain].
- **Access needed:** both sides: you push the tab through from one side and need the far side to bend, key, hook or weld the tab. A flush press-fit or glued tab (tab length equal to sheet thickness) or a blind slot that doesn't go right through can be assembled from one side (SendCutSend; Engineers Rule).
- **Materials:** Sheet steel, stainless steel, aluminium, brass and copper (laser, waterjet or plasma cut) (SendCutSend; Protolabs); plywood, MDF, acrylic and Delrin (laser cut) (Ponoko); plywood and MDF on CNC routers (with dog-bones) (SendCutSend); cardboard; and 3D-printed plates. Wood suits press fits with nodes; brittle acrylic needs rounded corners and a looser, glued fit (Ponoko; Boxes.py). Plain tabs are poor in thin, flexible sheet (SendCutSend: standard tabs are ideal for sheet metal 0.080 inch (2 mm) or thicker; use bent tabs below that).
- **Heat, cold, water and wear:** Wood and MDF swell and shrink with humidity, so press fits can loosen or bind, and MDF swells badly when wet ⚑ [uncertain]. Acrylic is brittle and can crack from sharp slot corners under stress (Ponoko). Vibration and repeated loads make square slot corners crack (SendCutSend). In welded steel, heat distorts thin parts and weld shrinkage pulls the joint, which tab spacing and clearance must allow for (Fictiv). Powder coating adds thickness that can make tabs too tight (SendCutSend). Printed plastic press fits relax and loosen over time ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - laser cut: wood, MDF, acrylic, Delrin, card and sheet metal (the most common way)
  - sheet metal: laser, waterjet or plasma cut tabs and slots, often tack or plug welded (self-fixturing weldments)
  - CNC: router-cut plywood and MDF, with dog-bone corner reliefs
  - woodwork: by hand as a through mortise and tenon (the traditional version)
  - 3D print (FDM): printed plates and parts that key together, e.g. to join large prints split into pieces
- **Printing it in one piece (print in place):** no: tab-and-slot parts are made separately and pushed together (that is the point of the joint).
- **Tools:** none for slip fits; a rubber mallet for hard press fits (Ponoko); pliers to bend over tabs (SendCutSend); glue, or a welder for tack and plug welds; bolts and nuts or a key/wedge for keyed versions.
- **Difficulty:** easy: with access to a laser cutter, CNC router or online cutting service it comes free with the cut; the only skill is getting the clearance right, which takes a quick test cut (UPenn MEAM.Design; Printables slot and tab clearance test).

### 3D printing tips

1) Leave more clearance than for laser cutting: Hubs gives about 0.5 mm as the tolerance for FDM interlocking joints (0.2 mm for SLA and SLS). Print a test piece first. 2) Orient tabs so the layers run along the tab and across its root, not in thin stacked slices that snap off at a layer line where the tab joins the part ⚑ [uncertain]. 3) Chamfer or round the tab tips and slot entries so parts guide themselves in (Engineers Rule; SendCutSend). 4) The first layer often spreads ('elephant's foot'), narrowing slots that touch the bed; add a small chamfer at the bottom edge ⚑ [uncertain]. 5) Slots printed lying flat have a sagging 'roof' of bridged plastic; print slots standing up or make them slightly taller ⚑ [uncertain]. 6) For a snug fit that tolerates printer error, add small crush ribs or bumps in the slot rather than making the whole slot tight (Ponoko nodes; see crush ribs). 7) Lock the tab with glue, a screw or a snap hook, because friction alone relaxes over time in printed plastic ⚑ [uncertain].

### Buying one (off-the-shelf parts)

Usually none: the joint is cut into the parts. Helpers: square nuts and machine screws for a T-slot (captive nut) version; keys, wedges or pins for keyed tabs; wood glue, acrylic solvent cement or epoxy; 'self-fixturing weld kits' or 'weld-it-yourself kits' of tabbed steel parts (SendCutSend); CAD tools such as the SOLIDWORKS 'Tab and Slot' sheet-metal feature (Engineers Rule) and box generators such as Boxes.py and MakerCase (Ponoko).

## Rules of thumb

- Tab length equals the thickness of the slotted sheet so it sits flush; for a slip fit make the slot 0.010 inch (0.25 mm) wider and 0.010 inch thicker than the tab; round or dog-bone the slot corners; use bent tabs instead of plain tabs in sheet thinner than 0.080 inch (2 mm) (SendCutSend 'How to Join Laser Cut Parts Without Fasteners').
- Slot width = tab width + 2 x cut tolerance; slot height = tab thickness + its positive thickness tolerance + 2 x cut tolerance; powder coat adds 0.002-0.005 inch per surface, so allow for it; for plug welding the tab should be 0.5-0.75 of the mating part's depth (SendCutSend 'Designing Sheet Metal Parts With Tab and Slots').
- Clearance per side: 0.003 inch for 0.060 inch sheet, 0.005 inch for 0.125 inch, 0.010-0.020 inch for 0.250 inch and thicker; 0.005 inch per side is a good starting point; CNC-routed slots need dog-bone reliefs (a 1/8 inch end mill leaves a 0.063 inch corner radius) (SendCutSend 'Mastering Tab and Slot Design').
- Tab width 1.0-1.5 x sheet thickness (1.2-1.8 x for press fits), tab length 1.0-1.2 x thickness, slot clearance 0.1-0.2 mm per side (0.05-0.1 mm for an accurate laser-cut friction fit; 0.1-0.15 mm per side for welded joints), tabs spaced 3-6 x thickness apart, at least 2 x thickness from the sheet edge and at least 1.5 x thickness from a bend tangent line (Fictiv 'Tabs and Slots for Sheet Metal Part Design'). Note: Protolabs' minimum for any tab feature on a sheet-metal outline is larger: at least 2 x thickness or 3.2 mm wide and no longer than 5 x its width (Protolabs sheet-metal design guidelines).
- Laser kerf is nominally about 0.007 inch; for a press fit, tab = slot + 2 x kerf + 2 x overlap, with an overlap of about 0.001-0.002 inch for stiff acrylic and 0.002-0.004 inch for MDF; always measure your sheet and test-cut (UPenn MEAM.Design 'Laser Cutting - Notes on Press Fits').
- In Boxes.py the 'burn' setting is half the laser cut width; bigger values give a tighter fit; wood can be cut oversized to press-fit without glue, brittle acrylic undersized to leave room for glue; adjust in steps of about 0.01 mm (Boxes.py user manual).
- Run slots parallel to the direction of stress; in one FEA example turning the slot across the load doubled the peak stress (about 5 ksi to over 10 ksi); give slot corners a radius of at least 1/8 of the slot width and lengthen the slot by twice that radius so the tab still seats; a full-radius slot is strongest but least accurate, a dog-bone slot most accurate but with the biggest stress concentration (Mentored Engineer 'Proper Tab and Slot Design').

## Common failures

Too tight: acrylic cracks, plywood splits or parts won't seat, often because kerf, sheet thickness variation or powder coat were not allowed for (UPenn MEAM.Design; Ponoko; SendCutSend). Too loose: wobbly joints that fall apart; fix with glue, nodes, crush ribs or a key (Ponoko; SendCutSend). Tabs not seating on CNC-routed parts because the round cutter leaves rounded inside corners; add dog-bones (SendCutSend). Cracks starting at square slot corners under stress or vibration; round the corners (SendCutSend; Mentored Engineer). Radii on tab and slot hitting each other so parts don't sit flat, then being hammered in and damaged (Mentored Engineer). Weld-root fatigue cracks where a tab sticks through for a fillet weld; use a short tab with a plug weld instead (Mentored Engineer). Tabs placed across bend lines distorting during bending (Fictiv).

## Safety

Laser-cut and plasma-cut metal edges and burrs are sharp; round the outsides of hooks and tabs to avoid cuts (SendCutSend). Hammering tight tabs into brittle acrylic can crack or shatter it; wear eye protection ⚑ [uncertain]. Welding tab-and-slot parts brings the usual welding hazards (burns, arc light, fumes) ⚑ [uncertain]. Laser cutting some plastics, especially PVC, gives off harmful fumes; use only laser-safe materials ⚑ [uncertain].

## Related

- Finger joint (box joint): rows of interlocking fingers along two edges at a corner, instead of tabs through slots in the middle of a panel
- T-slot joint (captive nut and bolt joint): a tab-and-slot joint clamped with a bolt and a square nut held in a T-shaped cut-out, so it can be taken apart
- Snap-lock sheet joint (barbed or spring finger): tabs with barbs or springy fingers that click into slots and stay without glue
- Bent or twisted tab through a slot (lanced tab): the tab is bent over or twisted after going through, locking it permanently
- Cross-halving slot joint (egg-crate joint): both parts are slotted halfway so they slide together into a cross
- Mortise and tenon (incl. tusk tenon): the woodworking version; a tusk tenon is a tab locked by a removable wedge or key
- Crush ribs and spring-fit features: small ribs or nodes that make a press fit forgiving
- Locating pins and hole-and-slot: locate parts precisely with pins instead of tabs
- Clinching and blind rivets: other ways to join sheet metal without welding

## Make it yourself

- [Boxes.py online generator (edge types and settings page)](https://boxes.hackerspace-bamberg.de/AllEdges?language=en): Free parametric generator for laser-cut boxes and parts; its finger joints and 'finger holes' make tab-and-slot T connections, with 'burn' (kerf) and 'play' settings to tune the fit *(licence: GPL-3.0 (Boxes.py code, per its LICENSE.txt))*
- [Laser Cutter Slot and Tab Clearance Test (3mm materials) (Embrace Making, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/266576-laser-cutter-slot-and-tab-clearance-test-3mm-mater): DXF/SVG test cut with a 15 x 3 mm tab and slots changing in 0.1 mm steps in both X and Y, to find the clearance your laser and material need. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- [Joinery (Clement Zheng, 2016)](https://clementzheng.github.io/joinery/): Free browser tool that loads an SVG outline and adds joint profiles (male/female tabs and slots) along chosen edges for laser cutting, then exports the SVG *(licence: ⚑ [uncertain] (not stated on the tool page))*

## Pictures, videos and models

- [ADBO - Project Box for Arduino (laser cut).jpg (Wikimedia Commons, by oomlout)](https://commons.wikimedia.org/wiki/File:ADBO_-_Project_Box_for_Arduino_(laser_cut).jpg): Photo of a clear laser-cut acrylic box whose side walls have tabs passing through slots in the top and bottom plates, clamped by long corner bolts *(licence: CC BY-SA 2.0)*
- [How to Join Laser Cut Parts Without Fasteners (SendCutSend)](https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/): Illustrated guide to plain tabs and slots, slot corner shapes (radius and dog-bone), bent tabs, hooks and key-and-tab (tusk tenon) joints *(licence: link only)*
- [Designing for Tab and Slots with SendCutSend - Best Practices (YouTube, SendCutSend)](https://www.youtube.com/watch?v=53Q4ct6bQeY): Video on designing tab-and-slot laser-cut parts (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- [Top Tips for Tab and Slot Design for Sheet Metal Part Assembly - Cutting Corners Episode 3 (YouTube, SendCutSend)](https://www.youtube.com/watch?v=DHcrX_ZnByA): Video with tab-and-slot tips and a real steel build where slotted gussets hold themselves in place for welding (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- [Proper Tab and Slot Design and How to Avoid Serious Issues (Mentored Engineer)](https://mentoredengineer.com/warning-on-self-fixturing-parts/): FEA stress plots comparing slot directions and slot corner shapes (square, radiused, full-radius, dog-bone) and improved tab shapes for welding *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 13 sentences on this page marked [uncertain].

## Sources

- <https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/>
- <https://sendcutsend.com/blog/designing-sheet-metal-parts-with-tab-and-slots/>
- <https://sendcutsend.com/blog/mastering-tab-and-slot-design-for-efficient-metal-fabrication/>
- <https://www.fictiv.com/articles/sheet-metal-tabs-and-slots-assembly>
- <https://mentoredengineer.com/warning-on-self-fixturing-parts/>
- <https://www.engineersrule.com/can-create-self-locating-self-fixturing-designs-using-solidworks-2018/>
- <https://www.protolabs.com/services/sheet-metal-fabrication/design-guidelines/>
- <https://medesign.seas.upenn.edu/index.php/Guides/LaserCuttingFits>
- <https://help.ponoko.com/en/articles/4527166-interlocking-3d-laser-cut-designs>
- <https://www.ponoko.com/blog/how-to-make/how-to-make-glue-less-interlocking-parts/>
- <https://florianfesti.github.io/boxes/html/usermanual.html>
- <https://florianfesti.github.io/boxes/html/api_edges.html>
- <https://florianfesti.github.io/boxes/html/api_burn.html>
- <https://boxes.hackerspace-bamberg.de/AllEdges?language=en>
- <https://raw.githubusercontent.com/florianfesti/boxes/master/LICENSE.txt>
- <https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/>
- <https://clementzheng.github.io/joinery/>
- <https://commons.wikimedia.org/wiki/File:ADBO_-_Project_Box_for_Arduino_(laser_cut).jpg>
- <https://api.printables.com/graphql/>
- <https://www.youtube.com/watch?v=53Q4ct6bQeY>
- <https://www.youtube.com/watch?v=DHcrX_ZnByA>
