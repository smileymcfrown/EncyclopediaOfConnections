# interlocking joints & joinery: Joints for wood, sheet and panels

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 239 Tab-and-slot joint (self-fixturing sheet joint)

*interlocking joints & joinery.* Tabs on one flat part fit through slots in another so the parts hold each other in place, for laser-cut, CNC and sheet-metal assemblies

### What it is

- **plain_name**: Tongues cut on the edge of one flat piece that push through matching rectangular holes in another flat piece, so the pieces line themselves up and hold each other in place, like a laser-cut box or a flat-pack metal kit
- **term**: Tab-and-slot joint (self-fixturing or self-locating sheet joint)
- **aliases**: 
  - tab and slot, slot and tab, tab-and-slot construction (SendCutSend; Fictiv; Mentored Engineer)
  - self-fixturing joint, self-locating joint (Fictiv; Engineers Rule 'Self-Locating and Self-Fixturing Designs')
  - finger holes (Boxes.py's name for the row of slots that the fingers of another panel plug into, making a T connection) (Boxes.py documentation)
  - through tenon and mortise, the woodworking equivalent; the keyed version is a tusk tenon (SendCutSend: 'known in woodworking as a tusk tenon')
  - key-and-tab joint, wedged tab, hook and slot (locked variants) (SendCutSend 'How to Join Laser Cut Parts Without Fasteners')
  - slot-together, interlocking or press-fit laser-cut joint, friction-fit joint (Ponoko)
  - Tab and Slot feature (the SOLIDWORKS sheet-metal command added in 2018) (Engineers Rule; Mentored Engineer)
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment, snap & clip fits
- **one_liner**: Tabs sticking out of the edge of one flat part pass into slots cut in another, so the parts find their exact position by themselves and stay put while they are glued, welded, bolted, keyed or simply press-fitted.
- **complexity**: A few features rather than parts: one or more tabs (tongues) on the edge of one sheet and matching slots (rectangular holes, or notches at an edge) in the other. Optional extras: a key or wedge through a hole in the tab, a bent-over tab end, hooks, small bumps (nodes) or crush ribs for grip, dog-bone or rounded slot corners, and glue, plug welds or bolts to fix it (SendCutSend; Ponoko; Mentored Engineer).
- **how_it_works**: The tab fits the slot with a small clearance, so the two parts can only meet in one place and at one angle: the tab is trapped sideways and endways by the slot's walls, and the tab's shoulder rests on the slot plate, which stops it going in too far (SendCutSend; Fictiv). That leaves only one way out, straight back the way it came in; this is closed by friction (a press fit), glue, a weld, a bent-over tab, a hook, a key or wedge through the tab, a bolt, or simply by the other panels of a box trapping each other (SendCutSend; Boxes.py). Because the cutting machine places tabs and slots accurately, the parts line up without measuring or clamps, and making tabs different sizes means a part only fits one way round (mistake-proofing, poka-yoke) (SendCutSend).

### Finder attributes

- **job**: 
  - join and hold: joins flat parts at right angles (T joints and corners) or in line
  - line parts up exactly: the tabs locate the parts without measuring, clamps or welding jigs (self-fixturing) (SendCutSend; Fictiv)
  - glue or bond: often the positioning step before gluing, welding or bolting (SendCutSend)
- **motion**: none: once assembled the parts don't move. The tab only slides straight in and out of its slot during assembly.
- **degrees_of_freedom**: 0 when locked (glued, welded, keyed, bent over or trapped by the other parts). A plain tab in a slip-fit slot leaves 1: the tab can slide back out the way it went in, held only by friction or by the rest of the assembly (SendCutSend).
- **special_behaviour**: 
  - self-aligning or self-centring: the tabs put the parts in exactly the right place and square, with no jig; slot clearance of a few tenths of a millimetre keeps weld gaps consistent (Fictiv: 'within ±0.2 mm')
  - quick-release: only in the keyed (tusk tenon) or hooked versions, where pulling the key or unhooking lets the parts come apart (SendCutSend)
  - none of the other listed behaviours; a further trick is mistake-proofing: tabs and slots of different sizes so each part fits only one way (SendCutSend)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the slot walls trap the tab sideways and the tab shoulder stops it going in too far
  - friction or clamping (force-fit): press-fit tabs, bumps (nodes) and crush ribs hold it in against pulling out (Ponoko; UPenn MEAM.Design)
  - material bond (glue, solvent or melting): glue, solvent cement or plug welds make it permanent (SendCutSend; Mentored Engineer)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable when slip-fitted and held by a key, wedge, hook or bolts (SendCutSend: 'this joint is great if your design needs to be frequently disassembled'); semi-permanent when press-fitted or with bent tabs; permanent once glued or welded.
- **reuse_cycles**: many times for slip fits locked by keys, hooks or bolts (SendCutSend); a few times for press fits in wood or MDF, which squash the fibres and loosen ⚑ [uncertain]; once for glued, welded or bent-over tabs. *(⚑ parts need confirming)*
- **tools_needed**: none for slip fits; a rubber mallet for hard press fits (Ponoko); pliers to bend over tabs (SendCutSend); glue, or a welder for tack and plug welds; bolts and nuts or a key/wedge for keyed versions.
- **seal**: none: the clearance leaves small gaps unless filled with glue, sealant or weld.
- **load**: Light to heavy depending on material and how it is locked. Strong against sliding and twisting in the plane of the joint because the tab bears on the slot walls; weak against pulling straight out unless glued, welded, keyed or trapped. Slots and their square corners are stress raisers that can crack under high stress or vibration; round the corners and run slots along the direction of load (SendCutSend; Mentored Engineer). A welded steel tab-and-slot structure is heavy-duty; a press-fitted plywood or acrylic box is light-duty.
- **adjustable**: no: positions are fixed by where the slots are cut. Lengthening a slot allows some sliding adjustment, at the cost of accuracy ⚑ [uncertain]. *(⚑ parts need confirming)*
- **play_and_precision**: Small, set by the clearance: typically 0.05-0.2 mm per side for laser-cut metal (Fictiv) or about 0.005 inch (0.13 mm) per side as a starting point (SendCutSend), and zero or negative (interference) for press fits (UPenn MEAM.Design). Parts return to the same position every time. Misalignment tolerance is limited to the clearance, but chamfered or rounded tab tips help guide tabs into slots (SendCutSend; Engineers Rule). Rounded slot corners give strength but a sloppier fit; dog-bone corners give accuracy (SendCutSend; Mentored Engineer).
- **access_needed**: both sides: you push the tab through from one side and need the far side to bend, key, hook or weld the tab. A flush press-fit or glued tab (tab length equal to sheet thickness) or a blind slot that doesn't go right through can be assembled from one side (SendCutSend; Engineers Rule).
- **materials**: Sheet steel, stainless steel, aluminium, brass and copper (laser, waterjet or plasma cut) (SendCutSend; Protolabs); plywood, MDF, acrylic and Delrin (laser cut) (Ponoko); plywood and MDF on CNC routers (with dog-bones) (SendCutSend); cardboard; and 3D-printed plates. Wood suits press fits with nodes; brittle acrylic needs rounded corners and a looser, glued fit (Ponoko; Boxes.py). Plain tabs are poor in thin, flexible sheet (SendCutSend: standard tabs are ideal for sheet metal 0.080 inch (2 mm) or thicker; use bent tabs below that).
- **maker_difficulty**: easy: with access to a laser cutter, CNC router or online cutting service it comes free with the cut; the only skill is getting the clearance right, which takes a quick test cut (UPenn MEAM.Design; Printables slot and tab clearance test).

### Making it

- **processes**: 
  - laser cut: wood, MDF, acrylic, Delrin, card and sheet metal (the most common way)
  - sheet metal: laser, waterjet or plasma cut tabs and slots, often tack or plug welded (self-fixturing weldments)
  - CNC: router-cut plywood and MDF, with dog-bone corner reliefs
  - woodwork: by hand as a through mortise and tenon (the traditional version)
  - 3D print (FDM): printed plates and parts that key together, e.g. to join large prints split into pieces
- **print_in_place**: no: tab-and-slot parts are made separately and pushed together (that is the point of the joint).
- **making_tips_3d_printing**: 1) Leave more clearance than for laser cutting: Hubs gives about 0.5 mm as the tolerance for FDM interlocking joints (0.2 mm for SLA and SLS). Print a test piece first. 2) Orient tabs so the layers run along the tab and across its root, not in thin stacked slices that snap off at a layer line where the tab joins the part ⚑ [uncertain]. 3) Chamfer or round the tab tips and slot entries so parts guide themselves in (Engineers Rule; SendCutSend). 4) The first layer often spreads ('elephant's foot'), narrowing slots that touch the bed; add a small chamfer at the bottom edge ⚑ [uncertain]. 5) Slots printed lying flat have a sagging 'roof' of bridged plastic; print slots standing up or make them slightly taller ⚑ [uncertain]. 6) For a snug fit that tolerates printer error, add small crush ribs or bumps in the slot rather than making the whole slot tight (Ponoko nodes; see crush ribs). 7) Lock the tab with glue, a screw or a snap hook, because friction alone relaxes over time in printed plastic ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Usually none: the joint is cut into the parts. Helpers: square nuts and machine screws for a T-slot (captive nut) version; keys, wedges or pins for keyed tabs; wood glue, acrylic solvent cement or epoxy; 'self-fixturing weld kits' or 'weld-it-yourself kits' of tabbed steel parts (SendCutSend); CAD tools such as the SOLIDWORKS 'Tab and Slot' sheet-metal feature (Engineers Rule) and box generators such as Boxes.py and MakerCase (Ponoko).
- **rules_of_thumb**: 
  - Tab length equals the thickness of the slotted sheet so it sits flush; for a slip fit make the slot 0.010 inch (0.25 mm) wider and 0.010 inch thicker than the tab; round or dog-bone the slot corners; use bent tabs instead of plain tabs in sheet thinner than 0.080 inch (2 mm) (SendCutSend 'How to Join Laser Cut Parts Without Fasteners').
  - Slot width = tab width + 2 x cut tolerance; slot height = tab thickness + its positive thickness tolerance + 2 x cut tolerance; powder coat adds 0.002-0.005 inch per surface, so allow for it; for plug welding the tab should be 0.5-0.75 of the mating part's depth (SendCutSend 'Designing Sheet Metal Parts With Tab and Slots').
  - Clearance per side: 0.003 inch for 0.060 inch sheet, 0.005 inch for 0.125 inch, 0.010-0.020 inch for 0.250 inch and thicker; 0.005 inch per side is a good starting point; CNC-routed slots need dog-bone reliefs (a 1/8 inch end mill leaves a 0.063 inch corner radius) (SendCutSend 'Mastering Tab and Slot Design').
  - Tab width 1.0-1.5 x sheet thickness (1.2-1.8 x for press fits), tab length 1.0-1.2 x thickness, slot clearance 0.1-0.2 mm per side (0.05-0.1 mm for an accurate laser-cut friction fit; 0.1-0.15 mm per side for welded joints), tabs spaced 3-6 x thickness apart, at least 2 x thickness from the sheet edge and at least 1.5 x thickness from a bend tangent line (Fictiv 'Tabs and Slots for Sheet Metal Part Design'). Note: Protolabs' minimum for any tab feature on a sheet-metal outline is larger: at least 2 x thickness or 3.2 mm wide and no longer than 5 x its width (Protolabs sheet-metal design guidelines).
  - Laser kerf is nominally about 0.007 inch; for a press fit, tab = slot + 2 x kerf + 2 x overlap, with an overlap of about 0.001-0.002 inch for stiff acrylic and 0.002-0.004 inch for MDF; always measure your sheet and test-cut (UPenn MEAM.Design 'Laser Cutting - Notes on Press Fits').
  - In Boxes.py the 'burn' setting is half the laser cut width; bigger values give a tighter fit; wood can be cut oversized to press-fit without glue, brittle acrylic undersized to leave room for glue; adjust in steps of about 0.01 mm (Boxes.py user manual).
  - Run slots parallel to the direction of stress; in one FEA example turning the slot across the load doubled the peak stress (about 5 ksi to over 10 ksi); give slot corners a radius of at least 1/8 of the slot width and lengthen the slot by twice that radius so the tab still seats; a full-radius slot is strongest but least accurate, a dog-bone slot most accurate but with the biggest stress concentration (Mentored Engineer 'Proper Tab and Slot Design').

### When to use it

- **everyday_examples**: 
  - Laser-cut acrylic or plywood project boxes, where the side walls' tabs poke through slots in the top and bottom (Wikimedia Commons 'ADBO - Project Box for Arduino (laser cut)')
  - Flat-pack sheet-metal kits and brackets that slot together before welding, such as weld-it-yourself kits (SendCutSend) and a slot-together steel desk (Mentored Engineer)
  - A laser-cut kitchen utensil holder and structural steel frames with interlocking tabs (Engineers Rule)
  - Cardboard boxes and packaging whose flaps tuck into slots ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use tab-and-slot joints whenever flat parts are cut by laser, waterjet, plasma or CNC router and must meet at an angle: boxes, enclosures, brackets, frames, shelves, gussets and furniture. They make parts find their own position so you don't need to measure, clamp or build a jig; welders use them to hold parts square while tacking, especially non-magnetic metals (SendCutSend; Fictiv). Different-sized tabs stop parts being fitted the wrong way round (SendCutSend). For hobby boxes they can be press-fitted without glue in wood, or keyed or bolted when the item must come apart (Ponoko; SendCutSend).
- **when_not_to_use**: Avoid plain tabs in thin, flexible sheet, which flexes too much to hold (use bent tabs, hooks or a snap-lock sheet joint instead) (SendCutSend). Don't rely on a friction fit where tolerances are tight or the part will be moved a lot; Ponoko recommends bolts (a T-slot joint) or clips instead. Don't put slots in highly stressed areas or across the direction of load (Mentored Engineer); for critical structures add bolts or rivets or machine from solid (SendCutSend). If the joint must seal, fill it with glue or sealant or use a gasketed joint. For corner joints along whole edges a finger (box) joint is usually neater; for two parts crossing in the middle use a cross-halving slot joint.
- **environment_limits**: Wood and MDF swell and shrink with humidity, so press fits can loosen or bind, and MDF swells badly when wet ⚑ [uncertain]. Acrylic is brittle and can crack from sharp slot corners under stress (Ponoko). Vibration and repeated loads make square slot corners crack (SendCutSend). In welded steel, heat distorts thin parts and weld shrinkage pulls the joint, which tab spacing and clearance must allow for (Fictiv). Powder coating adds thickness that can make tabs too tight (SendCutSend). Printed plastic press fits relax and loosen over time ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Laser-cut and plasma-cut metal edges and burrs are sharp; round the outsides of hooks and tabs to avoid cuts (SendCutSend). Hammering tight tabs into brittle acrylic can crack or shatter it; wear eye protection ⚑ [uncertain]. Welding tab-and-slot parts brings the usual welding hazards (burns, arc light, fumes) ⚑ [uncertain]. Laser cutting some plastics, especially PVC, gives off harmful fumes; use only laser-safe materials ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Too tight: acrylic cracks, plywood splits or parts won't seat, often because kerf, sheet thickness variation or powder coat were not allowed for (UPenn MEAM.Design; Ponoko; SendCutSend). Too loose: wobbly joints that fall apart; fix with glue, nodes, crush ribs or a key (Ponoko; SendCutSend). Tabs not seating on CNC-routed parts because the round cutter leaves rounded inside corners; add dog-bones (SendCutSend). Cracks starting at square slot corners under stress or vibration; round the corners (SendCutSend; Mentored Engineer). Radii on tab and slot hitting each other so parts don't sit flat, then being hammered in and damaged (Mentored Engineer). Weld-root fatigue cracks where a tab sticks through for a fillet weld; use a short tab with a plug weld instead (Mentored Engineer). Tabs placed across bend lines distorting during bending (Fictiv).
- **related**: 
  - Finger joint (box joint): rows of interlocking fingers along two edges at a corner, instead of tabs through slots in the middle of a panel
  - T-slot joint (captive nut and bolt joint): a tab-and-slot joint clamped with a bolt and a square nut held in a T-shaped cut-out, so it can be taken apart
  - Snap-lock sheet joint (barbed or spring finger): tabs with barbs or springy fingers that click into slots and stay without glue
  - Bent or twisted tab through a slot (lanced tab): the tab is bent over or twisted after going through, locking it permanently
  - Cross-halving slot joint (egg-crate joint): both parts are slotted halfway so they slide together into a cross
  - Mortise and tenon (incl. tusk tenon): the woodworking version; a tusk tenon is a tab locked by a removable wedge or key
  - Crush ribs and spring-fit features: small ribs or nodes that make a press fit forgiving
  - Locating pins and hole-and-slot: locate parts precisely with pins instead of tabs
  - Clinching and blind rivets: other ways to join sheet metal without welding

### Pictures, videos and models

- **links**: 
  - [ADBO - Project Box for Arduino (laser cut).jpg (Wikimedia Commons, by oomlout)](https://commons.wikimedia.org/wiki/File:ADBO_-_Project_Box_for_Arduino_(laser_cut).jpg): Photo of a clear laser-cut acrylic box whose side walls have tabs passing through slots in the top and bottom plates, clamped by long corner bolts *(licence: CC BY-SA 2.0)*
  - [How to Join Laser Cut Parts Without Fasteners (SendCutSend)](https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/): Illustrated guide to plain tabs and slots, slot corner shapes (radius and dog-bone), bent tabs, hooks and key-and-tab (tusk tenon) joints *(licence: link only)*
  - [Designing for Tab and Slots with SendCutSend - Best Practices (YouTube, SendCutSend)](https://www.youtube.com/watch?v=53Q4ct6bQeY): Video on designing tab-and-slot laser-cut parts (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Top Tips for Tab and Slot Design for Sheet Metal Part Assembly - Cutting Corners Episode 3 (YouTube, SendCutSend)](https://www.youtube.com/watch?v=DHcrX_ZnByA): Video with tab-and-slot tips and a real steel build where slotted gussets hold themselves in place for welding (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Proper Tab and Slot Design and How to Avoid Serious Issues (Mentored Engineer)](https://mentoredengineer.com/warning-on-self-fixturing-parts/): FEA stress plots comparing slot directions and slot corner shapes (square, radiused, full-radius, dog-bone) and improved tab shapes for welding *(licence: link only)*
- **make_it_yourself**: 
  - [Boxes.py online generator (edge types and settings page)](https://boxes.hackerspace-bamberg.de/AllEdges?language=en): Free parametric generator for laser-cut boxes and parts; its finger joints and 'finger holes' make tab-and-slot T connections, with 'burn' (kerf) and 'play' settings to tune the fit *(licence: GPL-3.0 (Boxes.py code, per its LICENSE.txt))*
  - [Laser Cutter Slot and Tab Clearance Test (3mm materials) (Embrace Making, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/266576-laser-cutter-slot-and-tab-clearance-test-3mm-mater): DXF/SVG test cut with a 15 x 3 mm tab and slots changing in 0.1 mm steps in both X and Y, to find the clearance your laser and material need. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Joinery (Clement Zheng, 2016)](https://clementzheng.github.io/joinery/): Free browser tool that loads an SVG outline and adds joint profiles (male/female tabs and slots) along chosen edges for laser cutting, then exports the SVG *(licence: ⚑ [uncertain] (not stated on the tool page))* *(⚑ parts need confirming)*
- **diagram_idea**: An exploded view of two plywood panels meeting in a T, one with three rectangular tabs on its edge and the other with three matching slots, then the assembled joint, with callouts for clearance per side, tab length equal to sheet thickness, rounded or dog-bone slot corners, and small insets showing the ways to lock it: glue, a key through the tab, a bent-over tab and a plug weld.
- **sources**: 
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

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, welding or brazing torch, hand tools
- **load_max**: heavy
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, reuse_cycles, safety_notes

## 240 T-slot joint (captive nut and bolt joint)

*interlocking joints & joinery.* A T-shaped cut-out in the edge of a sheet holds a square nut so a bolt through the other part can clamp them together; common in laser-cut boxes

### What it is

- **plain_name**: A T-shaped cut-out in the edge of one flat panel that holds an ordinary nut, so a screw pushed through a hole in the other panel runs along the stem of the T into the nut and pulls the two panels tight together at a right angle, like the joints on laser-cut plywood 3D printers and acrylic project boxes
- **term**: T-slot joint (captive-nut edge joint, bolted tab-and-slot joint)
- **aliases**: 
  - T-slot or T-slot joint (Ponoko; Adafruit 'T-slots have become iconic of laser-cut design'; Onshape FeatureScript 'T-Slot Joints for Laser Cut Parts')
  - T-nut or t-nut joint (term popularised at MIT by Charles Guan; MIT Fab 'Captive T-nuts for rapid assembly'). Not the same as a pronged tee nut hammered into wood or a T-slot nut for machine tables and aluminium extrusion
  - crossed-T nut, slotted-insert nut, captive slot nut, slotted nut, jokingly 'Jesus nut' (names collected by Charles Guan, 'How to Build Your Everything Really Really Fast')
  - captive nut joint or captive nuts (Fabworks; lasercut.scad 'captive_nuts'; What Make Art)
  - captive-screw mortise and tenon, captive-screw connection (CMU 16-223 'Flat-Pack Joinery')
  - bolted mortice-and-tenon joint, captive T-slotted nut and bolt (DefProc)
  - T-bolt joint, T-bolt box, interlocking T-bolt construction (Pololu forum; oomlout)
  - tab and slot with T-nut (Simon Arthur, waterjet blog)
  - bed bolt (the name Boxes.py uses for its screw-and-nut slots; the traditional furniture bed bolt joint, a long bolt through a bed post into a nut housed in the rail, is the woodworking ancestor)
  - captive square nut CNC panel joint (Make: magazine)
- **family**: interlocking joints & joinery
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A T-shaped slot cut into the edge of a sheet traps a nut so that a screw through the neighbouring sheet can clamp the two sheets together at a corner, giving a strong joint that can be taken apart and reassembled many times.
- **complexity**: A few parts: panel A with a T-shaped cut-out in its edge (a narrow stem as wide as the screw, plus a crossbar pocket as wide as the nut), panel B with a round clearance hole for the screw (and usually slots for the tabs of panel A), one machine screw, one square or hex nut, and optional washers. It is almost always combined with tabs and slots (finger or mortise-and-tenon joints) that locate the panels.
- **how_it_works**: The crossbar of the T is a pocket cut right through panel A, just big enough for a nut standing on edge, so once the nut drops in it cannot turn or slide along the screw. The screw goes through a hole in panel B, runs along the stem of the T and threads into the nut; as it is tightened the nut is pulled against the far wall of its pocket and the two panels are clamped together, a bit like a tapped hole in the edge of the sheet (Charles Guan; MIT Fab). The tabs and slots next to it stop the panels sliding or twisting, while the screw stops them pulling apart, so the pair of features makes a rigid corner that still unscrews (CMU 16-223; Cal Miller). Because the screw does the clamping, the joint also pulls tight even if the sheet is a little thinner or thicker than expected (CMU 16-223; Ponoko).

### Finder attributes

- **job**: 
  - join and hold: clamps two flat panels together, usually at a right angle, so boxes, frames and robot chassis can be bolted up and taken apart
  - line parts up exactly: the tabs and slots that usually surround it locate the panels, and the screw pulls them home (Adafruit; Cal Miller)
- **motion**: none
- **degrees_of_freedom**: 0: once the screw is tight and the tabs are in their slots the panels cannot move. The screw alone does not stop panel A turning about the screw's axis, which is why tabs or a second screw are added (CMU 16-223).
- **special_behaviour**: 
  - none: it is a plain bolted joint. Its useful trick is that the nut is held in the sheet itself, so no spanner is needed and the screw can be driven from outside a box (What Make Art: the slot 'holds a hex nut so it cannot spin, acting like a wrench as the bolt is tightened')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the nut is trapped in its pocket so it cannot turn or pull out, and the tabs interlock with slots
  - friction or clamping (force-fit): the screw and nut clamp the two panels together
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: unscrew the screw and the panels come apart; the nut can be tipped out of its pocket. CMU 16-223: it 'can also be easily disassembled and re-assembled, and the fasteners re-used many times'.
- **reuse_cycles**: many times: the screw runs in the steel nut's thread, not in the sheet material, so nothing wears much (CMU 16-223; Cal Miller: nuts and bolts 'allow disassembly of structures'). The pocket in soft wood or MDF can be crushed if the screw is overtightened, and a nut that spins will round out the pocket.
- **tools_needed**: screwdriver or hex key for the screw; no spanner on the nut. Helpful: a strip of tape across the outside of the panel to stop nuts falling out while you start the screw (MakerBot wiki; Pololu; Ultimaker Original assembly manual), pliers or a light hammer to push in tight nuts (Cal Miller), a file or sandpaper for slots that are slightly too tight (MakerBot wiki).
- **seal**: none
- **load**: medium: strong enough for laser-cut plywood 3D-printer frames and plywood competition-robot drivetrains (Ultimaker Original manual; Cal Miller). Strong in pull along the screw when the nut sits between finger joints, because pulling pushes the fingers harder into their slots and the limit becomes the screw's pull-out strength (Charles Guan). Weak against twisting about the screw axis unless tabs are added (CMU 16-223). The two thin strips of sheet beside the nut can burst if the nut is used on its own without tabs around it (Charles Guan), and a nut can be pulled sideways out of an open slot unless there are nuts on both faces of a seam (Cal Miller).
- **adjustable**: no: it is a fixed joint. A long stem (screw clearance past the nut) lets you use screws of slightly different lengths (Charles Guan; Simon Arthur).
- **play_and_precision**: small: the position is set by the tabs and slots, not the screw; the screw's clearance hole and the nut pocket are deliberately a little loose. Because the screw clamps the joint, it tolerates quite large variation in sheet thickness (CMU 16-223: 'a wide tolerance for variations in material thickness'). Tolerates little misalignment between the hole and the slot; Ultimaker and MakerBot instructions tighten all screws loosely first and fully afterwards so parts can settle (Ultimaker Original manual; MakerBot wiki).
- **access_needed**: both sides: you need the screw head on the outside face of panel B and the nut pocket, which is cut right through panel A. On a box both are usually reachable from the outside, which is why the nut pockets show on the outer faces (Adafruit suggests putting them on the back or bottom).
- **materials**: Plywood (3 to 12 mm), MDF, acrylic and other laser-cuttable plastics, and waterjet- or laser-cut aluminium and steel plate (MIT Fab: 1/4 in aluminium; Fabworks: sheet metal at least 1/8 in thick; Simon Arthur: waterjet). Hardware is standard steel machine screws with square or hex nuts; square nuts are easier to fit (Cal Miller). Not suitable for sheet thinner than the nut is thick.
- **maker_difficulty**: easy: it is just a T-shaped cut-out and a hole drawn in the cutting file plus a screw and nut you already have; the only fiddly part is sizing the nut pocket for your cutter's kerf and your nuts

### Making it

- **processes**: 
  - laser cut: the classic way, in plywood, MDF or acrylic (Adafruit; Ponoko; CMU 16-223)
  - CNC: router or mill; the square nut pocket can be replaced by a round-ended pocket that a 6.35 mm (1/4 in) or smaller end mill can cut, at the cost of more space (CMU 16-223)
  - sheet metal: waterjet- or laser-cut aluminium and steel plate at least 1/8 in thick (Fabworks; MIT Fab; Simon Arthur)
  - 3D print (FDM): possible for printed plates, but printed parts more often use a nut trap pocket instead (see 'Captive nut pocket (nut trap)')
  - off-the-shelf part: the machine screw, nut and washers
- **print_in_place**: no: it is two separate panels plus a screw and nut that are assembled afterwards.
- **making_tips_3d_printing**: The T-slot is mainly a laser-cut and CNC joint; in 3D printing the same job is usually done with a hex pocket (nut trap) or a heat-set insert. If you do print flat panels with T-slots: 1) print the panel lying flat so the T is cut through the layers and its walls are made of solid perimeters. 2) Size the nut pocket from your actual nuts (metric M3 hex nut 5.5 mm across the flats, 6.4 mm across the corners, 2.4 mm thick; M4 7 x 8.1 x 3.2 mm; Wikipedia 'Nut (hardware)'), starting with about 0.2 mm extra overall (0.1 mm each side) as Hubs suggests for embedded nuts, and print a test strip. 3) Keep the pocket narrower than the nut's corner-to-corner size so the nut cannot spin (Pololu). 4) Keep at least one screw diameter of solid material around the pocket and between its far wall and the panel edge (Hubs: wall around a thread at least equal to the fastener diameter; Charles Guan: at least one screw diameter from the slot bottom to the edge). 5) Extend the screw stem past the nut so a slightly long screw does not bottom out (Charles Guan). 6) Printed plastic creeps and can crack at sharp inside corners, so round the pocket corners and do not overtighten ⚑ [uncertain for printed T-slots specifically]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Machine screws (socket-head cap, pan-head or flat-head/countersunk), square nuts or hex nuts, flat washers, rubber washers, nylon-insert lock nuts or medium-strength thread-locker for vibration. Common sizes used by makers: M3 x 16 mm screws with M3 hex nuts (MakerBot Thing-O-Matic, Ultimaker Original), #4-40 x 1/2 in screws with #4-40 nuts (Adafruit), 8-32 x 5/8 in pan-head screws with 8-32 square nuts for 1/4 in plywood (Cal Miller), M6 or 1/4-20 screws for 6 mm plywood (CMU 16-223). Search terms: 'square nut', 'machine screw nut', 'socket head cap screw'.
- **rules_of_thumb**: 
  - Nut pocket width (along the panel edge): wider than the nut across its flats but not wider than across its corners, so the nut cannot turn with the screw (Pololu forum, Arthur, 2014).
  - Five critical dimensions: fastening length = nominal screw length measured from the outer face of the mating panel; nut slot thickness just over the nut's thickness (0.095 in for a 0.0938 in thick #4-40 nut); screw clearance width (0.120 in for #4); nut width across the flats (0.25 in for #4-40), or across the corners if the nut must sit flush with a thin sheet; screw clearance beyond the nut longer than your sloppiest screw, up to about 0.03 in extra (Charles Guan, 'How to Build Your Everything Really Really Fast', step 4).
  - Keep the bottom of the slot at least one screw diameter from the panel edge when the panel is well braced by other panels; where the nut can bear on the slot walls, round the slot ends ('camel humps') leaving at least half a material thickness between the slot corner and the nearest edge (Charles Guan).
  - Use nuts in more than one plane at each corner (screws starting from both panels) so the box cannot 'open like a book' (Charles Guan; MIT Fab 'Captive T-nuts').
  - Pair each T-slot with tabs: CMU uses two press-fit tenons with a 2 degree taper beside each captive screw in 6 mm plywood, with slots drawn 6.2 mm wide (they cut about 6.4 mm with a 0.2 mm kerf) (CMU 16-223 'Flat-Pack Joinery', 2021).
  - Screw lengths for M6 captive-screw joints with washers: 3 mm stock M6 x 20, 6 mm stock M6 x 25, 9 mm M6 x 25, 12 mm M6 x 30 (CMU 16-223).
  - Hardware sizing examples: 8-32 square nuts with 8-32 x 5/8 in screws for 0.25 in plywood, smaller hardware for thinner wood (Cal Miller); #4-40 x 1/2 in screws as a single standard size for acrylic kits (Adafruit); M3 x 16 mm for plywood 3D-printer frames (MakerBot wiki; Ultimaker Original manual).
  - In the lasercut.scad OpenSCAD library the screw diameter and the nut thickness must both be smaller than the sheet thickness, and the screw thread length less than five sheet thicknesses (bmsleight/lasercut, captiveNutBoltHole()).
  - Sheet metal: use material at least 1/8 in thick, add about 0.01 in clearance for 1/4 in material and 0.005 in for 1/8 in material (the same article's summary says 0.0075 in, so test), and add box joints for strength (Fabworks, 2024).
  - In acrylic, round the inside corners of the cut-outs so over-tightening does not crack the sheet; Ponoko suggests radii of 0.5 mm or more for slot ends in acrylic (Ponoko, Dan Emery, 2010).
  - Laser kerf is about 0.006 to 0.007 in (0.15 to 0.18 mm) on typical machines; Pololu offsets lines by about 0.004 in, and Charles Guan recommends cutting a 'kerf gauge' of test slots for your machine and material (Pololu; Cal Miller; Charles Guan step 6).
  - Boxes.py's default bed-bolt (T-slot) settings for M3: 3 mm screw, 5.5 mm nut width, 2 mm nut height, 20 mm slot length with the nut 15 mm in (florianfesti/boxes, boxes/__init__.py).

### When to use it

- **everyday_examples**: 
  - Early hobby 3D printers with laser-cut plywood frames, such as the MakerBot Cupcake CNC and Thing-O-Matic (M3 screws and nuts in T-slots; MakerBot wiki, Ponoko comments) and the Ultimaker Original (37 M3 x 16 mm screws and nuts hold its plywood 'cube' frame; Ultimaker Original assembly manual)
  - Laser-cut acrylic kit enclosures for electronics, e.g. Adafruit's Internet of Things Printer case ('T-slots on the back. Nuts on the bottom.') and its paper-lantern-style light cubes (Adafruit 'Laser-Cut Enclosure Design')
  - Laser-cut plywood robot chassis and drivetrains, e.g. FIRST Robotics Competition robots (Cal Miller, 'How to Make Stuff with Laser-cut Plywood')
  - Flat-pack plywood furniture and project boxes bolted together at the corners (XY Kao; CMU 16-223)
- **when_to_use**: Use a T-slot when you want a strong right-angle joint between flat sheets that can be taken apart and put back together, for example an electronics enclosure you will need to open, a robot frame you will modify, or a kit that customers assemble without glue (Adafruit prefers 'nuts and screws, tabs and slots' to glue or friction fits for kits because sheet thickness varies). It suits laser-cut plywood, MDF and acrylic, waterjet-cut metal, and any sheet at least as thick as the nut. It is a good choice when the sheet thickness is uncertain, because the screw pulls the joint tight anyway (CMU 16-223; Ponoko).
- **when_not_to_use**: Avoid it in sheet thinner than the nut (about 3 mm for M3; Fabworks says at least 1/8 in for metal); use bent tabs, a snap-lock sheet joint or glue instead. Avoid it where looks matter and the nut pockets would be on show (Adafruit calls nuts and T-slots 'much more unsightly'; hide them at the back or bottom, or use a snap-lock sheet joint). For high-volume sheet-metal products, press-in (self-clinching) nuts or bent flanges are quicker to assemble (Fabworks). For thick solid wood or furniture panels use knock-down fittings such as a cross dowel (barrel nut) or cam lock. For a threaded hole in the face of a printed part use a nut trap or heat-set insert. If the joint must never be opened, glue or a tab-and-slot press fit is simpler.
- **environment_limits**: The steel hardware is unaffected by normal conditions, but the sheet around it is not: MDF can swell or break when wet and warp in humid air if unsealed (Wikipedia 'Medium-density fibreboard'), and wood can shrink so screws slacken over time ⚑ [uncertain]. Vibration loosens the screws: MakerBot advises checking them occasionally, Cal Miller recommends medium-strength thread-locker for nuts on vibrating assemblies, and Ponoko suggests rubber washers to keep tension. Take care with liquid thread-locker near acrylic: laser-cut acrylic edges can craze when exposed to solvents, even glass cleaner (Wikipedia 'Poly(methyl methacrylate)'); whether a given thread-locker does this is ⚑ [uncertain]. Acrylic softens around 85 to 165 C depending on grade (glass transition about 105 C; Wikipedia PMMA). *(⚑ parts need confirming)*
- **safety_notes**: None known for the joint itself. Waterjet- and laser-cut metal edges can be sharp ⚑ [uncertain]; small loose nuts are a swallowing hazard for young children ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Nut falls out, or drops inside a box while you start the screw: put tape across the outside of the pocket (MakerBot wiki; Pololu; Ultimaker manual), make the pocket narrower than the nut's corner-to-corner size (Pololu), or add a dot of glue if the slot is too wide (MakerBot wiki). 2) Nut will not go in: M3 nuts vary; rotate the nut a sixth of a turn, insert it from the other face, or file the slot (MakerBot wiki); adjust the drawing for your kerf (Pololu; Charles Guan). 3) Nut spins: pocket too wide. 4) Screw bottoms out on a flat-bottomed slot, so the joint feels tight but is not clamped, or a short screw engages too few threads: use a fully crossed T with extra clearance beyond the nut (Charles Guan). 5) Material next to the nut cracks or bursts: sharp inside corners are stress raisers, the nut is too close to the edge, or the screw was overtightened; round the corners, keep at least one screw diameter to the edge and do not overtighten (Charles Guan; Ponoko; Cal Miller). 6) Panel rotates about the screw or the structure bows or 'opens like a book': add tabs and put nuts in more than one plane (CMU 16-223; Charles Guan). 7) Screws loosen with vibration: thread-locker, lock nuts or rubber washers (Cal Miller; Ponoko; SendCutSend). 8) Tabs will not go into a part already bolted on two sides: loosen the other screws first (MakerBot wiki).
- **related**: 
  - Tab-and-slot joint (self-fixturing sheet joint): the tabs alone; locates the panels and is usually glued or press-fitted, while the T-slot adds a screw to clamp them
  - Finger joint (box joint): interlocking edge fingers; often combined with T-slots, which stop the fingers sliding apart (Cal Miller)
  - Captive nut pocket (nut trap): the 3D-printing cousin, a hex pocket in a printed part rather than a T in the edge of a sheet
  - Snap-lock sheet joint (barbed or spring finger): holds sheets with springy barbed tabs instead of hardware; no screws to count, but weaker and less forgiving of material changes
  - Knock-down cam-lock and cross-dowel connectors: the furniture version; a cross dowel (barrel nut) sits in a drilled hole in thick wood instead of a nut in a cut slot (Wikipedia 'Barrel nut')
  - Aluminium-extrusion connectors (T-slot nuts and brackets): shares the 'T-slot' name but the nut slides in a T-shaped groove along a metal profile
  - Mortise and tenon (incl. wedged, drawbored and tusk tenons): the traditional woodworking joint; the CMU and DefProc names ('captive-screw mortise and tenon', 'bolted mortice-and-tenon') describe a T-slot as a bolted version of it; the furniture bed bolt joint is its direct ancestor (Fine Woodworking 'The Bed Bolt Joint')
  - Heat-set threaded insert and blind threaded fixings (rivet nut): give a threaded hole without needing a pocket that cuts through the panel
  - Ordinary screw joint (bolt and nut, machine screw): the basic joint that a T-slot rearranges so the nut is held by the sheet

### Pictures, videos and models

- **links**: 
  - [Flat-Pack Joinery (CMU 16-223 Creative Kinetic Systems, Garth Zeglin, 2021)](https://courses.ideate.cmu.edu/16-223/f2021/text/reference/joinery.html): Drawings and section views of a laser-cut captive-screw joint with two tapered tenons in 6 mm plywood, a CNC-routed version with a round-ended nut pocket, dimensioned M6 and 1/4-20 slots, and screw-length tables *(licence: CC BY 4.0)*
  - [What's this kind of joint called? (Make:, Sean Michael Ragan, 2011)](https://makezine.com/2011/10/06/clever-captive-square-nut-cnc-panel-joint/): Exploded and assembled drawings of two panels joined with tabs, a screw and a square nut captured in the arms of a T-shaped slot *(licence: link only)*
  - [Captive T-nuts for rapid assembly (MIT Fab, Daniel Fourie, 2010)](https://fab.cba.mit.edu/content/tools/omax_waterjet/tnuts.html): Photo of a waterjet-cut aluminium corner held with a T-nut and a dimensioned drawing for a 4-40 screw and square nut in 1/4 in aluminium *(licence: link only)*
  - [Construction technique: Tab and Slot with T-nut (Simon Arthur's blog, 2014)](https://planiverse.wordpress.com/2014/04/07/construction-technique-tab-and-slot-with-t-nut/): CAD drawing and photos of waterjet-cut parts and a clear acrylic box joined with tabs and T-nuts, including the stronger version with the slots surrounded by solid material *(licence: link only)*
  - [The Factory | Captive Nuts In Laser Cut Designs (YouTube, Core Electronics)](https://www.youtube.com/watch?v=T51lx0ChgdU): Video on designing captive nut slots in laser-cut parts; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [New FeatureScript: T-Slot Joints for Laser Cut Parts (Onshape forum, Arul Suresh, 2016)](https://forum.onshape.com/discussion/4343/new-featurescript-t-slot-joints-for-laser-cut-parts): Announcement and link to a free Onshape FeatureScript that adds T-slot joints to laser-cut panels: pick a panel edge and a screw type, set screw length and spacing; it assumes standard square nuts in sizes sold by McMaster-Carr *(licence: not stated on the forum page ⚑ [uncertain])*
  - [lasercut.scad: captive_nuts and captive_nut_holes (OpenSCAD library by bmsleight)](https://raw.githubusercontent.com/bmsleight/lasercut/master/lasercut.scad): OpenSCAD module that builds laser-cut panels in 3D and exports flat cutting files; the captive_nuts option cuts the T-shaped screw-and-nut slot and matching tabs, captive_nut_holes cuts the holes in the mating panel (README example 'Captive Nuts - Great for holding laser-cut sheets together') *(licence: BSD 2-Clause)*
  - [Boxes.py bedBoltHole() (Python box generator library by Florian Festi)](https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/__init__.py): The Boxes.py library can put 'bed bolt' screw-and-nut T-slots into finger joints (default M3 settings in the source); the README notes this is not yet offered in the ready-made online generators, so it needs a little Python *(licence: GPL-3.0 or later)*
  - [Fusion 360 Tutorial: Captive Nut Joint for Laser Cutting (YouTube, What Make Art)](https://www.youtube.com/watch?v=57OT_SIW96U): Video tutorial on modelling a captive-nut joint for laser cutting in Fusion 360; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))* *(⚑ parts need confirming)*
- **diagram_idea**: Two panels shown pulled apart at a right angle: the vertical panel has two tabs on its edge with a T-shaped cut-out between them and a square nut hovering over the crossbar of the T; the horizontal panel has two matching slots and a hole; a screw is drawn going down through the hole, along the stem of the T and into the nut, then a second frame shows them assembled with arrows for 'nut cannot turn' and 'screw pulls panels together'.
- **sources**: 
  - https://courses.ideate.cmu.edu/16-223/f2021/text/reference/joinery.html
  - https://makezine.com/2011/10/06/clever-captive-square-nut-cnc-panel-joint/
  - https://fab.cba.mit.edu/content/tools/omax_waterjet/tnuts.html
  - https://www.fabworks.com/blog/captive-nut-guide
  - https://forum.onshape.com/discussion/4343/new-featurescript-t-slot-joints-for-laser-cut-parts
  - https://www.cs.cmu.edu/afs/cs/academic/class/99353-f16/day3/kerf.pdf
  - https://www.ponoko.com/blog/how-to-make/how-to-make-snug-joints-in-acrylic/
  - https://www.ponoko.com/blog/how-to-make/how-to-make-laser-cut-interlocking-acrylic-designs/
  - https://planiverse.wordpress.com/2014/04/07/construction-technique-tab-and-slot-with-t-nut/
  - https://xy-kao.com/laser-cut-project-boxes/
  - https://forum.pololu.com/t/t-bolt-boxes/7577
  - https://sendcutsend.com/blog/methods-for-joining-laser-cut-parts/
  - https://www.instructables.com/How-to-Build-your-Everything-Really-Really-Fast/
  - https://www.instructables.com/json-api/showInstructableModel?urlString=How-to-Build-your-Everything-Really-Really-Fast
  - https://www.etotheipiplusone.net/?p=2531
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/lasercut.scad
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/README.md
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/LICENSE
  - https://raw.githubusercontent.com/florianfesti/boxes/master/README.rst
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/__init__.py
  - https://cdn-learn.adafruit.com/downloads/pdf/laser-cut-enclosure-design.pdf
  - https://www.chiefdelphi.com/uploads/default/original/3X/2/f/2f98a7b7288e0c0859acb8aff886f55d432404b9.pdf
  - http://makerbot.wikidot.com/about-nuts-and-bolts
  - https://www.treatstock.com/static/uploads/printers/Ultimaker_Original_assembly_manual_v1.1.pdf
  - https://www.finewoodworking.com/2010/07/26/the-bed-bolt-joint
  - http://www.deferredprocrastination.co.uk/blog/2013/laser-cut-elastic-clipped-comb-joints/
  - https://whatmakeart.com/digital-fabrication/laser-cutting/laser-cut-joints/
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://en.wikipedia.org/wiki/Barrel_nut
  - https://en.wikipedia.org/wiki/Medium-density_fibreboard
  - https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.youtube.com/watch?v=T51lx0ChgdU
  - https://www.youtube.com/watch?v=57OT_SIW96U

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: medium
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, make_it_yourself, making_tips_3d_printing, safety_notes

## 241 Snap-lock sheet joint (barbed or spring finger)

*interlocking joints & joinery.* Sheet tabs with barbs or springy fingers that click into slots and stay put with no glue or screws

### What it is

- **plain_name**: Flat tabs cut with a little hook (barb) or a thin springy finger beside them, so when you push the tab through a slot in the other sheet it bends aside and then clicks back, holding the sheets together with no screws or glue, like an all-acrylic Raspberry Pi case that clips together
- **term**: Snap-fit tab joint for sheet material (integral cantilever clip; barbed tab)
- **aliases**: 
  - laser-cut clip or laser-cut elastic clip (DefProc, 'Laser-Cut Elastic-Clips')
  - snap joint or snap-lock assembly (What Make Art; YouTube 'laser-cut snap-lock assembly')
  - dragon claws (Adafruit's name for the flexing acrylic clips on its Pi Box case)
  - clip tab and clip hole (lasercut.scad OpenSCAD library, clips / clip_holes)
  - tab insert and interlocking joint profiles (Joinery tool by Clement Zheng, for barbed tabs in paper, film, felt and leather)
  - cantilever-based joints and mounts (springFit, Hasso Plattner Institute)
  - spring clip key joint (What Make Art: a key that is squeezed to fit and springs back)
  - barbed tab, locking tab, tab lock or lock tab (cardboard packaging, e.g. 'tab lock tuck top' boxes)
  - button-punch snap lock or snaplock seam (sheet-metal air-duct seam where punched bumps snap into a folded pocket; Mestek; Sheet Metal Connectors)
  - cantilever snap fit (the general engineering term for the moulded or printed version)
- **family**: interlocking joints & joinery
- **other_families**: snap & clip fits, compliant mechanisms & flexures
- **one_liner**: Tabs cut into a flat sheet carry a small barb or a springy finger that bends as the tab goes through a slot and then springs back to catch, so flat parts click together and stay together without fasteners or glue.
- **complexity**: Single piece per part: each sheet has the springy tab or finger (with its hook or barb and the relief cut that frees it) and the mating sheet has a plain slot; there are no extra parts. Optional: a stop that limits how far the finger can bend, and 'grip' marks or a button to press when releasing it (DefProc; Adafruit).
- **how_it_works**: Cutting a long, thin strip into the sheet leaves a finger that can bend sideways like a diving board (a cantilever spring). As the tab is pushed through the slot, the sloped front of the barb pushes the finger aside; once the barb has passed through the other sheet the finger springs back and the barb's flat back hooks behind the far face (What Make Art; DefProc). Pulling back only presses the barb harder against the sheet, so the joint stays shut until someone squeezes the finger to unhook it, or the pull is large enough to bend the finger out of the way (DefProc calls this the pull-through force). The finger must only ever bend within the springy (elastic) range of the material, which is why it is long, thin and often tapered, and why a stop can limit how far it bends (DefProc). A variant (springFit) puts a springy finger beside a plain tab or slot so it presses the parts together and soaks up differences in laser kerf.

### Finder attributes

- **job**: 
  - join and hold: clips flat parts (boxes, cases, cardboard models, duct seams) together without screws or glue
  - lock, and release by hand: a clip you can reach can be squeezed open to take the parts apart again (DefProc Clip-R-Pi 'quick and easy to disassemble / reassemble')
- **motion**: none: the joined parts do not move; only the springy finger flexes briefly while assembling or releasing
- **degrees_of_freedom**: 0 once clicked in: the tab and slot stop sliding and twisting and the barb stops pulling out. Under a large pull the finger can bend and let go (DefProc pull-through force).
- **special_behaviour**: 
  - hand-release only: it holds against a pull because the barb hooks behind the sheet, but lets go when a person presses the finger aside (DefProc; What Make Art). Barbs that cannot be reached from outside are effectively permanent
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the barb hooks behind the far face of the slotted sheet
  - spring force (a spring or springy part presses it in place): the springy finger pushes the barb back into place and, in springFit-style joints, presses the parts together
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: most clips can be released by squeezing the finger by hand or with a small screwdriver (DefProc Clip-R-Pi is designed to be taken apart and reassembled); barbs hidden inside a closed box are effectively permanent, and in card or felt the barbs deform after release.
- **reuse_cycles**: many times in acrylic when the clip is designed to stay well below the material's yield stress (DefProc sized its acrylic clip at about one-eighth of the yield stress, and every Clip-R-Pi case was assembled and taken apart before packing); only a few times in card, MDF or plywood, where the barbs tear or crush ⚑ [uncertain]. The springFit authors note that long-term repeated assembly was not tested. *(⚑ parts need confirming)*
- **tools_needed**: none to assemble: push the tab through by hand. A small flat screwdriver or fingernail helps release clips; a rubber mallet is not needed and can crack acrylic ⚑ [uncertain]. *(⚑ parts need confirming)*
- **seal**: none: the laser-cut and cardboard versions leave gaps. The sheet-metal duct version (button-punch snap lock) is rated for low-pressure air ducts up to about plus or minus 4 in water gauge (about 1 kPa), with screws added at the duct ends at that pressure (Sheet Metal Connectors 'Snaplock'); extra sealant is often used ⚑ [uncertain]. *(⚑ parts need confirming)*
- **load**: light: DefProc's example clip in 3 mm acrylic needs about 2.5 N to press and about 31 N pulling before it unclips; springFit's plywood and acrylic springs pushed with about 5 N. Strongest in the direction the barb hooks and in shear when combined with tabs; weak against pulling in the opposite direction to the hook (SendCutSend 'Hooks: weak against loads opposite of hooking direction') and against prying the finger open. springFit joints 'come apart more easily than their press fit counterparts'.
- **adjustable**: no
- **play_and_precision**: small: the tabs and slots locate the parts, and a spring finger takes up small differences in cut size, so the fit stays snug even when a different laser removes more or less material (springFit tested kerfs of 0.12 and 0.20 mm; its springs allowed at least 1 mm of deflection). Repeatable position; tolerates little misalignment while the barb is being pushed through ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: one side only (blind): the barb is pushed through and catches on the far side with no tool behind (the Joinery tool notes tab inserts 'can be entirely assembled from one side'). Releasing it needs access to the finger, which is often on the far side.
- **materials**: Works best in springy sheet that bends a long way before breaking: acrylic (PMMA) 3 mm (DefProc; Adafruit), thin plastic films and paper-like sheets such as mylar drafting film, Yupo synthetic paper and polyethylene sheet, plus felt and leather (Joinery), and cardboard and card stock for tab-lock boxes. MDF works but the small barb head can snap off; plywood is poor because the barb head tears between the layers (DefProc), although springFit's side springs worked in both plywood and acrylic. Sheet-metal versions use galvanised steel duct sheet (button-punch snap lock, 20 to 28 gauge; Mestek) and spring steel ⚑ [uncertain]. Also 3D-printed flat plates in ABS, PETG or nylon (Hubs recommends ABS, nylon and TPU for FDM snap fits). *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: nothing to buy and it cuts in one pass, but the finger length, thickness and barb size need test cuts for each material and laser; What Make Art notes snap joints 'usually require a bit of trial and error'

### Making it

- **processes**: 
  - laser cut: the main maker method, in acrylic, card, film, felt or leather (DefProc; Adafruit; Joinery)
  - 3D print (FDM): flat printed plates with barbed tabs, printed lying down
  - 3D print (resin): possible, but standard resins are brittle for repeated snapping (Hubs)
  - sheet metal: roll-formed or punched duct seams (button-punch snap lock) and spring-steel tabs ⚑ [uncertain for spring-steel tabs]
  - CNC: rarely, because the cutter's radius limits the fine relief cuts and barbs ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the two sheets are made separately and clicked together afterwards (each part is one piece with no added hardware).
- **making_tips_3d_printing**: 1) Print the plates lying flat so the finger bends within the layers; do not let snap fingers stand upright in Z, where layer lines make them weak (Hubs 'avoid snap-fit cantilevers built vertically in the Z direction'). 2) Use tougher materials: Hubs recommends ABS, nylon and TPU for FDM snap fits; SLA resins are relatively brittle. PETG is a common maker choice ⚑ [uncertain]. 3) Clearance around tabs and barbs: Hubs suggests 0.5 mm for FDM snap fits and 0.3 mm for SLA, SLS and MJF. 4) Taper the finger from a thicker root to a thinner tip, round the root with a fillet at least half the finger's thickness, and keep the finger at least 5 mm wide (Hubs). 5) Design it so the finger is only bent while clicking in, not while assembled: plastics creep under constant load and the clip will slowly lose grip (Hubs). 6) Print a few versions with slightly different barb sizes and finger lengths and test them before printing the real parts. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: None are needed; the clips are cut into the parts. Related hardware if you would rather buy a clip: spring-steel push-on fasteners (push nut, speed nut), plastic push rivets and fir-tree clips, and snap pins. For sheet-metal ductwork, button-punch snap-lock seams are made on roll-forming machines (Lockformer is a brand; Mestek).
- **rules_of_thumb**: 
  - Worked example in 3 mm acrylic: tapered finger 4 mm deep at the root and 2 mm at the tip, 25 mm long, with a 2 mm barb/deflection: about 2.46 N to press, 7.68 MPa peak stress (well below acrylic's roughly 60 MPa yield) and about 31 N pull-through force (DefProc, 'So What's a Practical Laser-Cut Clip Size?', 2013).
  - Extend the relief cut about 5 mm past the root of the finger so the end of the cut is not at the point of highest stress, where acrylic clips otherwise snap (DefProc, 2013).
  - Taper the finger: a thicker root keeps bending stress low and a thinner tip keeps the pressing force low; clips in acrylic need to be long and thin (DefProc 'Laser-Cut Elastic-Clipped Comb-Joints'; Hubs).
  - Material choice: the DefProc clip works in acrylic and MDF (but the MDF head breaks before the pull-through force is reached) and not in plywood, where the head shears between layers (DefProc, 2013). The lasercut.scad clip is about 11 sheet thicknesses long and is described as 'good for acrylic, mdf but maybe not plywood' (bmsleight/lasercut README).
  - Spring stiffness rises with the cube of thickness and falls with the cube of length: doubling the finger's thickness or halving its length makes it 8 times stiffer; a longer, thicker finger can have the same stiffness but tolerate more size variation (springFit, UIST 2019).
  - springFit springs that worked in both plywood and acrylic were at least 3 mm thick at the base, allowed at least 1 mm of deflection and pushed with about 5 N; curved plywood springs were about half as stiff as straight ones (springFit, UIST 2019).
  - Hooks through slots: the notch in the hook equals the sheet thickness, and the slot must be long enough for the whole hook to pass (SendCutSend 'How to Join Laser Cut Parts Without Fasteners').
  - Barbed tabs in thin film or paper: the Joinery tool's 'grip' is the interference between the insert and its slot; its tab-insert default is 0.7 mm grip for 1 mm sheet, and a bigger grip holds tighter but is harder to assemble (Joinery Instructable and joints.js).
  - FDM snap fits: 0.5 mm clearance, root fillet at least 0.5 times the base thickness, width at least 5 mm (Hubs 'How do you design snap-fit joints for 3D printing?').
  - Sheet-metal duct snap lock: punched buttons about every 2 in (50 mm) on the male edge snapping into a hemmed pocket; used for duct seams up to about plus or minus 4 in water gauge (Sheet Metal Connectors 'Snaplock'); strength and leakage tested comparable to the hammered Pittsburgh lock (Mestek).

### When to use it

- **everyday_examples**: 
  - All-acrylic laser-cut Raspberry Pi cases that clip together with no screws, such as Adafruit's Pi Box with its 'Dragon Claws' and DefProc's Clip-R-Pi (Adafruit 'Laser-Cut Enclosure Design'; DefProc)
  - Cardboard mailer boxes with a locking tab that tucks into a slot so no tape is needed (e.g. 'tab lock tuck top' boxes; PakFactory)
  - Rectangular metal air-conditioning ducts whose corner seams snap together (button-punch snap lock; Mestek; Sheet Metal Connectors)
  - Laser-cut paper, film and felt models and bags joined with barbed tabs (Joinery examples) ⚑ [uncertain as an everyday object] *(⚑ parts need confirming)*
- **when_to_use**: Use it when you want flat parts to click together with nothing extra to buy, count or lose: kits and cases that should assemble in seconds by hand (Adafruit designed the Pi Box so the kit is just six acrylic pieces in a bag), boxes you want to open again, and models in card, film or felt. It is also useful when you will share a laser-cut design, because a springy finger copes with other people's lasers cutting slightly wider or narrower than yours, where a tight press fit would be too tight or fall out (springFit). It can be assembled from one side only.
- **when_not_to_use**: Avoid it for heavy or structural loads, for parts that are pulled hard in the direction opposite to the hook (SendCutSend), and for brittle or layered sheet: plywood barbs tear and MDF barb heads snap (DefProc); use a T-slot joint (screw and captive nut), a tab-and-slot joint with glue, or a key or wedge through the tab instead. Avoid it where the finger would stay bent all the time (plastics creep; Hubs) and where you cannot spare the space for a long finger (springFit notes that the extra cuts need room and can weaken the part). For thin sheet metal that you do not need to reopen, bent or twisted tabs are simpler. For watertight joints use a seal.
- **environment_limits**: Acrylic softens above its glass transition (about 105 C for plain PMMA, 85 to 165 C for commercial grades; Wikipedia PMMA) and laser-cut acrylic edges are stressed and can craze (crack finely) when they meet solvents, even glass cleaner (Wikipedia PMMA), so do not clean clip-together acrylic cases with solvent cleaners. Plastic fingers left bent slowly relax (creep) and lose grip (Hubs). MDF can swell or break when wet and warp in humid air (Wikipedia MDF). Cold makes acrylic more brittle, so clips are more likely to snap in the cold ⚑ [uncertain]. Vibration resistance is not documented ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Acrylic clips that are over-bent can snap suddenly and leave sharp edges ⚑ [uncertain]. Sheet-metal hooks and tabs have sharp edges; SendCutSend advises rounding the outside of hooks 'to avoid sharp edges that could lead to accidental injuries'. Otherwise none known. *(⚑ parts need confirming)*
- **common_failures**: 1) Finger snaps at its root when first pressed: the end of the relief cut is a stress raiser at the point of highest stress; extend the cut about 5 mm further (DefProc) and taper the finger. 2) Barb head shears off: plywood tears between layers, MDF heads break (DefProc); use acrylic or a springier material. 3) Clip too stiff to press, or the part cracks while assembling: finger too short or thick; lengthen or thin it (springFit: halving the length makes it 8 times stiffer). 4) Joint falls apart or rattles: barb too small, finger too weak, or the laser cut wider than expected; springFit notes spring joints come apart more easily than hammered press fits. 5) Springs placed in load-bearing areas make the model more prone to breaking (springFit). 6) 3D-printed fingers standing upright snap along the layers (Hubs). 7) Clip loosens over time because the finger stays bent and creeps (Hubs). 8) Card and film barbs crumple or tear if the grip (interference) is too large (Joinery).
- **related**: 
  - Cantilever snap fit: the same springy-finger-and-hook idea in a moulded or 3D-printed part rather than cut from flat sheet
  - Tab-and-slot joint (self-fixturing sheet joint): plain tabs without barbs; they locate the parts but need glue, a press fit or fasteners to stop them pulling out
  - T-slot joint (captive nut and bolt joint): holds sheets with a screw and nut instead; stronger and fully removable, but needs hardware
  - Bent or twisted tab through a slot (lanced tab): the tab is bent or twisted over after going through, for thin metal; stronger but meant to stay put (SendCutSend 'Bent Tabs')
  - Folded seam (hem, lock seam, Pittsburgh lock): the hammered sheet-metal seam that the button-punch snap lock replaces without the hammer-over step (Mestek)
  - Crush ribs and spring-fit features (compliant press fit): springy ribs or fingers that press parts snugly but have no hook, so they rely on friction
  - Mortise and tenon (incl. wedged, drawbored and tusk tenons): a key or wedge through the protruding tab locks it instead of a barb; SendCutSend notes a flexible key can itself be designed to snap in
  - Spring-steel push-on fasteners (push nut, speed nut, U-nut): a separate springy metal clip that does the same job on studs and panels

### Pictures, videos and models

- **links**: 
  - [So What's a Practical Laser-Cut Clip Size? (Deferred Procrastination, Patrick Fenner, 2013)](http://marksabino.com/defproc/blog/2013/so-whats-a-practical-laser-cut-clip-size/): Diagrams of a tapered laser-cut acrylic clip with its dimensions, the clip-together box and Clip-R-Pi case, and the extended relief cut that moves the stress point *(licence: link only)*
  - [Laser-Cut Elastic-Clipped Comb-Joints (DefProc)](http://www.deferredprocrastination.co.uk/blog/2013/laser-cut-elastic-clipped-comb-joints/): How a springy clip is cut into acrylic to lock a finger (comb) joint, with the bending equations for straight and tapered clips *(licence: link only)*
  - [springFit: Joints and Mounts that Fabricate on Any Laser-Cutter (Hasso Plattner Institute, UIST 2019)](https://hpi.de/baudisch/projects/springfit.html): Figures of cantilever-spring versions of finger joints, cross (notch) joints and T-joints in plywood and acrylic, how they assemble, and why they tolerate kerf changes; links the paper PDF and demo video *(licence: link only)*
  - [laser-cut snap-lock assembly (YouTube, Amy Makes Stuff)](https://www.youtube.com/watch?v=vDdfib7CqlI): Video of a laser-cut snap-lock assembly clicking together; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Laser-Cut Enclosure Design (Adafruit Learning System, Phillip Burgess)](https://cdn-learn.adafruit.com/downloads/pdf/laser-cut-enclosure-design.pdf): Guide with photos including the case study of the all-acrylic Pi Box held together by flexing 'Dragon Claws' with no hardware *(licence: link only)*
- **make_it_yourself**: 
  - [lasercut.scad: clips and clip_holes (OpenSCAD library by bmsleight)](https://raw.githubusercontent.com/bmsleight/lasercut/master/lasercut.scad): OpenSCAD module for laser-cut parts; the clips option cuts a long springy clip tab (about 11 sheet thicknesses) and clip_holes cuts the matching slot, loosely based on DefProc's clip *(licence: BSD 2-Clause)*
  - [Joinery: parametric joint generator for laser-cut assemblies (Clement Zheng)](https://clementzheng.github.io/joinery/): Free web tool that adds joints to the edges of an SVG cutting pattern, including barbed 'tab insert' and 'interlocking' profiles for paper, film, felt and leather, with adjustable grip and tolerance (instructions in the Instructable 'Joinery: Joints for Laser Cut Assemblies', CC BY-NC-SA 4.0) *(licence: MIT (source code))*
  - [Laser-Cut Elastic-Clips by DefProc (Thingiverse)](https://www.thingiverse.com/thing:53032): Downloadable clip profile and a demonstration box in three configurations for 3 mm acrylic, from the DefProc blog posts; page title confirmed, details not readable by automated access *(licence: not visible ⚑ [uncertain])* *(⚑ parts need confirming)*
- **diagram_idea**: Side-by-side frames of a flat tab with a long thin finger cut beside it and a small barb at its tip: frame 1 the tab approaching a slot, frame 2 the finger bent sideways as the barb squeezes through (arrow showing the bend), frame 3 the finger sprung back with the barb's flat back hooked behind the far face of the other sheet, with a highlighted 'extend the cut here' mark at the finger's root.
- **sources**: 
  - http://marksabino.com/defproc/blog/2013/so-whats-a-practical-laser-cut-clip-size/
  - http://www.deferredprocrastination.co.uk/blog/2013/laser-cut-elastic-clipped-comb-joints/
  - https://www.defproc.co.uk/projects/clip-r-pi/
  - https://hackaday.com/2013/02/27/acrylic-enclosures-use-integrated-clips-to-do-away-with-fasteners/
  - https://hpi.de/baudisch/projects/springfit.html
  - https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/projects/springFit/Roumen-Shigeyama-springfit-joints-and-mounts-that-fabricate-on-any-laser-cutter-UIST2019
  - https://www.youtube.com/watch?v=NO_UBPPEX1c
  - https://www.youtube.com/watch?v=vDdfib7CqlI
  - https://cdn-learn.adafruit.com/downloads/pdf/laser-cut-enclosure-design.pdf
  - https://whatmakeart.com/digital-fabrication/laser-cutting/laser-cut-joints/
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/lasercut.scad
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/README.md
  - https://raw.githubusercontent.com/bmsleight/lasercut/master/LICENSE
  - https://clementzheng.github.io/joinery/
  - https://raw.githubusercontent.com/clementzheng/joinery/master/js/joints.js
  - https://raw.githubusercontent.com/clementzheng/joinery/master/LICENSE.md
  - https://www.instructables.com/Joinery-Joints-for-Laser-Cut-Assemblies/
  - https://www.instructables.com/json-api/showInstructableModel?urlString=Joinery-Joints-for-Laser-Cut-Assemblies
  - https://www.thingiverse.com/thing:53032
  - https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/
  - https://blog.mestekmachinery.com/news-and-updates/the-methods-of-making-duct-locks
  - https://www.smcduct.com/definitions/snaplock/
  - https://pakfactory.com/tab-lock-tuck-top-boxes.html
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://en.wikipedia.org/wiki/Snap-fit
  - https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)
  - https://en.wikipedia.org/wiki/Medium-density_fibreboard

### Finder tags

- **connects**: boards or sheet, hoses or pipes
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…ps release clips; a rubber mallet is not needed and can crack acrylic [uncertain].…"*
- **load_max**: light
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, materials, play_and_precision, processes, reuse_cycles, safety_notes, seal, tools_needed

## 242 Cross-halving slot joint (egg-crate joint)

*interlocking joints & joinery.* Two flat parts each slotted halfway so they slide together into a cross, used for grids, dividers and slot-together furniture

### What it is

- **plain_name**: Two flat pieces that each have a slot cut halfway across, one from the top edge and one from the bottom edge, so they slide into each other and cross like a plus sign; repeat it and you get the grid of dividers in a drawer organiser or the cross-shaped stand of a flat-pack cardboard or plywood model
- **term**: Cross-halving joint (halved joint, egg-crate joint)
- **aliases**: 
  - halved joint or halving joint (Wikipedia 'Halved joint': joined on edge; a halving lap on the flat is the related half-lap joint)
  - cross halving joint (WoodWorkers Guild of America)
  - egg-crate joint or egg-crate joinery (Popular Woodworking; the grid it makes is an 'egg crate')
  - half-lap joint (Popular Woodworking 'Egg Crate Shelves' uses this name; strictly a half lap is cut on the flat face)
  - edge half lap joint (What Make Art)
  - edge cross lap, cross-halved or cross lap joint (Cassell's Carpentry and Joinery, 1907, for the flat version)
  - notch joint or cross joint (springFit, Hasso Plattner Institute)
  - slot joint, slotting joint, slot-together (Ponoko; Printables model names)
  - interlocked slices, waffle or egg-crate structure (Autodesk Slicer for Fusion 360 'Interlocked Slices')
  - planar sections joined by slits (FlatFitFab / flatfab)
  - bottle dividers or divider grid (Popular Woodworking; Boxes.py TrayInsert)
- **family**: interlocking joints & joinery
- **one_liner**: Two flat parts each get a slot as wide as the other part is thick and half as deep as the part is tall, so they slot together into a flush cross that needs no glue or fasteners.
- **complexity**: A few parts: two (or more) flat parts, each with one straight slot per crossing; nothing else. Glue is optional.
- **how_it_works**: Each part is cut with a slot as wide as the other part is thick, reaching halfway through its height: one part is slotted down from its top edge and the other up from its bottom edge (Wikipedia 'Halved joint'; Boxes.py TrayInsert cuts slots half the wall height). When they are pushed together the solid half of each part fills the other's slot, so both parts end up flush at the top and bottom and locked at a fixed angle. The slot walls grip the faces of the other part, and the parts can only come apart by sliding straight back out along the slot, which is resisted by friction and by any other crossings in a grid (Popular Woodworking 'Egg Crate Shelves'). In a grid, every divider crosses several others, so the whole egg crate braces itself even though each single joint is weak against twisting (Wikipedia).

### Finder attributes

- **job**: join and hold: joins flat parts where they cross, to make grids, dividers, stands and slot-together furniture and models without fasteners
- **motion**: none
- **degrees_of_freedom**: 1 in principle: the parts can slide apart along the direction of the slots, held back only by friction (or by glue, gravity or other crossings); 0 once glued or held in a frame.
- **special_behaviour**: 
  - self-aligning or self-centring: the slots guide the parts into one position, at the planned angle with top and bottom edges flush, so a whole grid squares itself as it is pushed together (flaring the slot mouths helps them find each other; Slicer for Fusion 360 'Notch Factor and Notch Angle')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): each part sits in the other's slot, which stops sliding and turning in the plane of the parts
  - friction or clamping (force-fit): a snug slot grips the other part's faces and stops it sliding back out (Ponoko nodes; FlatFitFab 'friction fit together along slits')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: dry-fitted joints pull apart by sliding the parts back along the slots, which is why slot-together furniture and models pack flat (flatfab); glued joints are permanent.
- **reuse_cycles**: many times for acrylic, metal or well-fitted printed parts; plywood, MDF and card slots gradually crush and loosen with repeated assembly ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: none to assemble: push together with firm hand pressure (Popular Woodworking); a rubber mallet for deliberately tight fits (Ponoko). To make the slots: laser cutter, CNC router, or saw and chisel, table saw with dado or a router in the woodshop (Wikipedia 'Halved joint').
- **seal**: none
- **load**: light to medium: Popular Woodworking calls a set of egg-crate joints 'a very strong and stable structure', but a single halved joint 'is relatively weak and prone to splitting' because it has no shoulders to stop twisting (Wikipedia, citing Rogowski). Strong when the load pushes the parts further into their slots (e.g. a shelf resting on a notched upright) and in the plane of the grid; weak when pulled apart along the slot direction (friction only) and against twisting. Each part is cut halfway through at the joint, so it is weaker in bending there; FlatFitFab found planar parts 'tend to fracture local to slits'.
- **adjustable**: no
- **play_and_precision**: small to noticeable, depending on the slot width against the real sheet thickness: sheet sold as 1/4 in acrylic is often 6 mm and acrylic is commonly made to a thickness tolerance of plus or minus 0.02 in (McMaster-Carr figures quoted by Charles Guan), so slots drawn to the nominal size can be loose or too tight. The joint locates the parts repeatably once the fit is right; bumps (nodes) or springy fingers beside the slot remove the play (Ponoko; springFit).
- **access_needed**: not applicable: nothing is fastened from behind; you just need room to slide one part onto the other along the direction of the slots.
- **materials**: Plywood, MDF, solid wood, acrylic and other sheet plastics, cardboard and card, sheet metal, and 3D-printed plates. Cardboard tolerates slightly narrow slots that squeeze, while plywood needs slightly wide ones because its thickness varies (Slicer for Fusion 360 help); acrylic needs rounded slot corners because it cracks at sharp ones (Ponoko); flatfab lists paper, plastic, wood, steel and even stone.
- **maker_difficulty**: easy: two straight slots per crossing, cut on a laser, CNC, saw or even with scissors for card; the only skill is matching the slot width to the real sheet thickness

### Making it

- **processes**: 
  - laser cut: the most common maker method; the laser can cut almost square inside corners (What Make Art; Ponoko)
  - CNC: router or waterjet; inside corners need dogbone or T-bone reliefs because the cutter leaves rounded corners (Fablab RUC)
  - woodwork: hand saw and chisel, table saw with a dado set or repeated blade passes, router or spindle moulder (Wikipedia 'Halved joint'; Popular Woodworking)
  - 3D print (FDM): flat printed plates slotted together, printed lying flat (Printables examples)
  - sheet metal: laser- or waterjet-cut plates slotted together ⚑ [uncertain]
  - off-the-shelf part: none needed *(⚑ parts need confirming)*
- **print_in_place**: no: the parts are printed flat as separate pieces and slid together afterwards.
- **making_tips_3d_printing**: 1) Print each part lying flat on the bed: the slots are then cut through the layers, the parts are strongest in their own plane and no supports are needed (edditive 'Slot Together Model Aircraft Stand'; Printables 'Flat-Pack Fir' prints flat). 2) Slot clearance: Hubs suggests 0.5 mm for interlocking FDM parts (0.2 mm for SLA and SLS); a maker who started at 0.5 mm found it loose and went down to 0.3 mm (Printables 'Weight Rack (Slot-Together Design, No Hardware)', read via the Printables API). Print a test pair first, because printers differ. 3) The same maker removed chamfers from the slot edges because they made the parts come loose more easily; a small flare only at the slot mouth (Slicer for Fusion 360's notch flaring) helps find the slot without loosening the fit ⚑ [uncertain for printed parts]. 4) Measure the printed plate's real thickness and make the slot match it; elephant's foot on the first layers can make the bottom of a plate thicker and jam the slot ⚑ [uncertain]. 5) Leave plenty of solid material beyond the end of each slot, since parts tend to break at the slot (FlatFitFab). 6) If the fit is tight, trim with a file or knife rather than forcing it (edditive). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: None needed. Optional: wood glue for permanent joints. Parametric generators and apps (Boxes.py TrayInsert, flatfab, Slicer for Fusion 360) produce the cutting files.
- **rules_of_thumb**: 
  - Slot depth: half the height of each part, one slot from the top edge and one from the bottom (Wikipedia 'Halved joint': 'most commonly ... half the width of the members'; Boxes.py TrayInsert cuts slots 0.5 x wall height).
  - Slot width equals the real thickness of the mating sheet; decrease it slightly so card squeezes, increase it slightly for plywood whose thickness varies (Autodesk Slicer for Fusion 360 help, 'Slot Offset').
  - Example laser allowance: for 6 mm plywood CMU draws slots 6.2 mm wide, which cut about 6.4 mm wide with a 0.2 mm kerf, to allow for thickness variation (CMU 16-223 'Flat-Pack Joinery').
  - Flare the mouths of the slots (Slicer for Fusion 360 uses a notch angle of 45 degrees) so large grids do not rack and jam during assembly (Slicer for Fusion 360 help).
  - Acrylic: never leave sharp inside corners at the bottom of a slot; a radius of 0.5 mm or more greatly reduces cracking, and friction bumps (nodes) should be under 0.15 mm per side (Ponoko, 2010 and 2016).
  - In a cross (slotting) joint the gripping faces are the sheet's surfaces, whose spacing varies with sheet thickness, so fits are less predictable than tab joints where both gripping edges are laser-cut (Ponoko).
  - CNC routing: a round cutter leaves inside corners with a radius of half its diameter (3 mm for a 6 mm mill), so add dogbones; with a 3 mm mill, stopping about 0.3 mm short of the corner gives almost invisible dogbones (Fablab RUC 'More elegant CNC dogbones', 2017).
  - Wood: leave at least 2 in (about 50 mm) of board beyond any joint so the end does not split, and keep joints less than 24 in (about 600 mm) apart to ease assembly and prevent sagging; the parts should go together with firm hand pressure (Popular Woodworking 'Egg Crate Shelves').
  - Measure your sheet: '1/4 in' acrylic is often 6 mm (0.236 in) and common laser-cuttable acrylic is made to a thickness tolerance of plus or minus 0.02 in (McMaster-Carr figures); cut a kerf gauge of test slots for your machine and material (Charles Guan, 'How to Build Your Everything Really Really Fast', step 6).
  - FDM slot clearance about 0.5 mm as a start (Hubs, interlocking joints), tightened to about 0.3 mm in one maker's slot-together print (Printables Weight Rack).
  - A springy finger cut beside the slot (springFit 'cross joint') keeps the joint tight across kerfs of 0.12 to 0.20 mm; do not put it right at the edge of the part, which weakens it against twisting (springFit, UIST 2019).
  - Slits concentrate stress; FlatFitFab estimates stress at a slit with a concentration factor 'rarely above five' (FlatFitFab, UIST 2014).

### When to use it

- **everyday_examples**: 
  - Divider grids in drawers, trays and storage boxes (Wikipedia 'Halved joint': partitions in trays and drawers; Boxes.py TrayInsert)
  - Bottle dividers in a wine cabinet or cellarette (Popular Woodworking, Glen Huey) and cardboard dividers in wine and bottle shipping boxes ⚑ [uncertain]
  - Flat-pack slot-together decorations and stands, such as a two-piece Christmas tree that slides together into a cross (Printables 'Flat-Pack Fir')
  - Egg-crate bookshelves and cubby shelves (Popular Woodworking 'Egg Crate Shelves') *(⚑ parts need confirming)*
- **when_to_use**: Use it whenever two flat parts cross each other: grids and dividers, the ribs of a sliced 'waffle' sculpture or model, slot-together stands, and flat-pack furniture or displays that should pack flat and assemble without tools. It needs only one straight cut per part, so it is quick on a laser, CNC or table saw, uses little material compared with stacked slices (Slicer for Fusion 360 help), and is forgiving for beginners: Popular Woodworking says the joints 'don't have to fit perfectly to work effectively'.
- **when_not_to_use**: Avoid it where the parts will be pulled apart along the slot direction or twisted with nothing else to hold them, since a lone halved joint has no shoulders and is weak and prone to splitting (Wikipedia); add glue, a frame, or use a tab-and-slot, mortise-and-tenon or a bolted T-slot joint. Avoid deep slots near the end of a board (it splits; Popular Woodworking) and in narrow parts that are loaded in bending, because the slot halves the part's strength at the joint (FlatFitFab). For joining two boards on their flat faces (frames), use a half-lap joint instead. If you want it to click and stay without glue, add springy fingers (springFit) or friction bumps (Ponoko).
- **environment_limits**: Friction-fit wooden joints change with humidity: MDF can swell and break when wet and warp in humid air if unsealed (Wikipedia 'Medium-density fibreboard'), and solid wood swells and shrinks with moisture so a snug joint can become tight or loose ⚑ [uncertain]. Acrylic softens above about 105 C (85 to 165 C for commercial grades) and laser-cut acrylic edges can craze when exposed to solvents, even glass cleaner (Wikipedia 'Poly(methyl methacrylate)'). Printed plastic friction fits may relax (creep) and loosen over time ⚑ [uncertain]. Vibration can walk a loose dry-fit joint apart ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: None known for the joint itself. Cutting deep slots uses table saws, routers or lasers, each with its own hazards; forcing a too-tight acrylic or wooden joint can split or snap a part and leave sharp edges (Popular Woodworking notes wood 'might split and break at the notch') ⚑ [uncertain for sharp edges]. *(⚑ parts need confirming)*
- **common_failures**: 1) Too tight, so the part splits at the notch when forced: trim the slot with a rasp or file and push by hand; a split can be glued (Popular Woodworking). 2) Acrylic cracks at the sharp inside corners of the slot: round the corners (Ponoko). 3) Too loose, so the grid wobbles or falls apart: slots drawn to the nominal thickness while the real sheet is thinner, or the laser kerf widened them (Charles Guan; springFit); add nodes or springs, or glue. 4) The end of a board beyond the joint splits off: leave at least 2 in (Popular Woodworking). 5) CNC-cut slots will not let the other part seat fully because of rounded inside corners: add dogbones (Fablab RUC). 6) Large grids rack and twist so the parts will not go together: flare the slot mouths (Slicer for Fusion 360 help). 7) Parts break at the slits under load (FlatFitFab) or twist because there are no shoulders (Wikipedia). 8) Design errors: a notch blocked by another part or a slice left unconnected, so the model cannot be assembled (Slicer for Fusion 360 help); slots cut in the wrong place, avoided by marking matching parts clamped together (Popular Woodworking).
- **related**: 
  - Butt and lap wood joints (screwed, pocket-hole, half-lap): the half-lap and cross-lap are the same idea cut on the flat face of two boards instead of on edge (Wikipedia 'Lap joint')
  - Tab-and-slot joint (self-fixturing sheet joint): a tab on the edge of one sheet goes into a slot in the face of the other, usually at a corner, rather than two slots crossing
  - Finger joint (box joint): interlocking fingers along two edges at a corner; used for box walls where the cross-halving is used for inner dividers (Boxes.py)
  - Snap-lock sheet joint (barbed or spring finger): adding a springy finger beside the slot turns a cross-halving into a joint that clicks tight (springFit 'cross joint')
  - Crush ribs and spring-fit features (compliant press fit): small bumps or springy features that make any slot grip tighter (Ponoko nodes)
  - Mortise and tenon (incl. wedged, drawbored and tusk tenons): stronger against pulling apart and twisting because the tenon has shoulders and can be wedged or pinned
  - T-slot joint (captive nut and bolt joint): when the crossing parts must be clamped rather than just friction-fitted
  - Bridle joint: a woodworking relative listed alongside the halved joint, where one member's slot wraps around the other (Wikipedia 'Halved joint' see also)

### Pictures, videos and models

- **links**: 
  - [Joinery-SimpleHalved.svg (Wikimedia Commons, by Crati, used in Wikipedia 'Halved joint')](https://commons.wikimedia.org/wiki/File:Joinery-SimpleHalved.svg): Clear drawing of two members, each slotted halfway on opposite edges, slipping together into a simple halved (egg-crate) joint *(licence: CC BY-SA 3.0)*
  - [Cross-halved (or Cross Lap) Joint (Wikimedia Commons, from Cassell's Carpentry and Joinery, 1907)](https://commons.wikimedia.org/wiki/File:Cassells_Carpentry.181_Cross-halved_(or_Cross_Lap)_Joint.png): Historic engraving of a cross-halved joint, the flat-face version of the same halving idea *(licence: Public domain)*
  - [Egg Crate Shelves (Popular Woodworking, Robert W. Lang)](https://www.popularwoodworking.com/projects/egg_crate_shelves/): Photos of a beginner-built shelf unit held together only by egg-crate notches, with layout and cutting tips *(licence: link only)*
  - [springFit: Joints and Mounts that Fabricate on Any Laser-Cutter (Hasso Plattner Institute, UIST 2019)](https://hpi.de/baudisch/projects/springfit.html): Figures of laser-cut notch (cross) joints with a springy finger beside the slot, alongside finger joints and T-joints, and how they assemble *(licence: link only)*
  - [Halved joint (Wikipedia)](https://en.wikipedia.org/wiki/Halved_joint): Short article with the halved-joint drawing, typical uses (partitions in trays and drawers, torsion boxes) and ways to cut it, including by laser cutter *(licence: CC BY-SA 4.0 (text))*
- **make_it_yourself**: 
  - [Boxes.py TrayInsert generator (online, Florian Festi and contributors)](https://boxes.hackerspace-bamberg.de/TrayInsert?language=en): Free online generator for an egg-crate divider insert: enter the cell sizes, height, sheet thickness and burn (kerf) correction and it outputs SVG, DXF or PDF cutting files with half-height cross slots *(licence: GPL-3.0 or later (software))*
  - [flatfab (FlatFitFab) fabrication design software (James McCrae, Nobuyuki Umetani, Karan Singh)](https://www.dgp.toronto.edu/~mccrae/projects/flatfitfab/): Free desktop app for Windows, Mac and Linux for sketching 3D objects out of slotted flat sections that friction-fit together, with a stress check, exported as 2D cutting plans (source on GitHub JamesMcCrae/flatfab) *(licence: GPL-3.0)*
  - [Slicer for Fusion 360 (Tampa Hackerspace wiki page)](https://wiki.tampahackerspace.com/Software:_Slicer_for_Fusion_360): Notes and download pointer for Autodesk's free Slicer for Fusion 360, whose 'Interlocked Slices' mode turns a 3D model into a waffle of cross-slotted slices; Autodesk no longer maintains it but still offers the final release *(licence: freeware (Autodesk), no longer supported)*
  - [Flat-Pack Fir - A Slot-together Christmas Tree Decoration (Matt Haigh, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1495489-flat-pack-fir-a-slot-together-christmas-tree-decor): Two flat printed tree halves that slide together into a cross and press into a base; prints flat without supports; a quick way to try the joint. Read through the Printables public API. *(licence: Standard Digital File License)*
- **diagram_idea**: Two rectangular boards drawn apart, one with a slot cut down from its top edge to the middle and the other with a slot cut up from its bottom edge to the middle, arrows showing one lowered onto the other; beside it the assembled plus-shaped cross with flush top and bottom, and a small top view of a 3 by 3 egg-crate grid made from the same joint.
- **sources**: 
  - https://en.wikipedia.org/wiki/Halved_joint
  - https://en.wikipedia.org/wiki/Lap_joint
  - https://commons.wikimedia.org/wiki/File:Joinery-SimpleHalved.svg
  - https://commons.wikimedia.org/wiki/File:Cassells_Carpentry.181_Cross-halved_(or_Cross_Lap)_Joint.png
  - https://www.popularwoodworking.com/projects/egg_crate_shelves/
  - https://www.popularwoodworking.com/editors-blog/a-simple-jig-for-bottle-dividers-or-egg-crate-joints/
  - https://www.wwgoa.com/video/cross-halving-joint-narrow-stock-017309
  - https://whatmakeart.com/digital-fabrication/laser-cutting/laser-cut-joints/
  - https://www.ponoko.com/blog/how-to-make/how-to-make-glue-less-interlocking-parts/
  - https://www.ponoko.com/blog/how-to-make/how-to-make-snug-joints-in-acrylic/
  - https://www.ponoko.com/blog/how-to-make/how-to-make-laser-cut-interlocking-acrylic-designs/
  - https://courses.ideate.cmu.edu/16-223/f2021/text/reference/joinery.html
  - https://www.instructables.com/How-to-Build-your-Everything-Really-Really-Fast/
  - https://www.instructables.com/json-api/showInstructableModel?urlString=How-to-Build-your-Everything-Really-Really-Fast
  - http://fablab.ruc.dk/more-elegant-cnc-dogbones/
  - https://hpi.de/baudisch/projects/springfit.html
  - https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/projects/springFit/Roumen-Shigeyama-springfit-joints-and-mounts-that-fabricate-on-any-laser-cutter-UIST2019
  - https://www.dgp.toronto.edu/~mccrae/projects/flatfitfab/paper/flatfitfab_2014_07_17.pdf
  - https://www.dgp.toronto.edu/~mccrae/projects/flatfitfab/
  - https://raw.githubusercontent.com/JamesMcCrae/flatfab/master/LICENSE.md
  - https://boxes.hackerspace-bamberg.de/TrayInsert?language=en
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/generators/trayinsert.py
  - https://raw.githubusercontent.com/florianfesti/boxes/master/LICENSE.txt
  - https://archive.org/stream/slicer-for-fusion-360/Slicer%20for%20Fusion%20360%20Help_djvu.txt
  - https://wiki.tampahackerspace.com/Software:_Slicer_for_Fusion_360
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://edditiveblog.wordpress.com/2020/01/24/3d-printed-model-aircraft-stand/
  - https://api.printables.com/graphql/
  - https://en.wikipedia.org/wiki/Medium-density_fibreboard
  - https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, power tools, hand tools
- **load_max**: medium
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, everyday_examples, making_tips_3d_printing, processes, reuse_cycles, safety_notes

## 243 Finger joint (box joint)

*interlocking joints & joinery.* Interlocking rectangular fingers along two edges that join at a corner, as in laser-cut boxes and wooden drawers

### What it is

- **plain_name**: Two boards or flat sheets whose edges are cut into matching square teeth that slot into each other at a corner, like the fingers of two hands laced together
- **term**: Finger joint (box joint)
- **aliases**: 
  - box joint (the usual name for the corner version; Wikipedia 'Box joint')
  - finger joint, comb joint (Wikipedia 'Finger joint', which notes the two names are 'regularly confused')
  - box comb (Wikimedia Commons 'Boxjoint.png' description)
  - finger-joint edge and finger holes (Boxes.py terms: fingers at corners, and matching slots for T-shaped connections)
  - pinned box joint (a box joint with a dowel pin driven through the fingers; Fine Woodworking)
  - laser-cut box, finger-jointed box, 'toothed' or 'tabbed' corners (maker wording) ⚑ [uncertain]
  - Fingerzinken (German; Commons 'Fingerzinken.jpg', 'Holzzinken.jpg')
  - not the same as finger-jointed lumber: tapered 'scarfed' finger joints (German 'Keilzinken') glued end to end to make long boards from short ones (Wikipedia 'Finger joint'; Commons 'Keilzinkenprofile.jpg')
  - generators and jigs a beginner may search for: Boxes.py (free software), MakerCase (web tool), 'box joint jig', 'box joint sled', 'box joint blade set' *(⚑ parts need confirming)*
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment
- **one_liner**: A corner joint where the edges of two boards or sheets are cut into alternating square fingers and gaps that mesh together, usually glued, giving a strong, square corner with lots of gluing surface that is easy to make on a table saw, router, laser cutter or CNC router.
- **complexity**: A few parts: two boards or panels, each with a row of square fingers and gaps cut along one edge (the gaps on one match the fingers on the other), plus glue in most cases. Optional extras: a dowel pin through the fingers (pinned box joint; Fine Woodworking), bolts and captive nuts through the fingers ('bed bolts' in Boxes.py), or springy, barbed or snap-shaped fingers for glue-free laser-cut boxes (Boxes.py finger styles 'springs', 'barbs' and 'snap').
- **how_it_works**: Each edge is cut into a row of square fingers, and the two boards use the same pattern shifted by one finger, so the fingers of one fill the gaps of the other when they meet at a right angle (Wikipedia 'Box joint'). The fingers stop the boards sliding sideways or twisting, which holds the corner square and places the parts relative to each other (Speetzen and Kobbelt 2024), and the many finger sides give a large area of side-grain (long-grain) gluing surface, which is what makes the glued joint strong (Fine Woodworking; Wikipedia). Without glue the joint can still come apart by pulling the boards straight back the way they went in, because the fingers have straight sides and no flare to lock them, unlike a dovetail (Wikipedia 'Box joint'); glue, a tight press fit, pins or the other walls of the box stop that. For laser-cut and CNC boxes the same pattern is drawn as a flat outline whose finger size scales with the sheet thickness, and the outline is offset to make up for the material the laser burns away (kerf compensation) (Boxes.py manual).

### Finder attributes

- **job**: 
  - join and hold: joins two boards or panels at a corner (or a T-junction), usually permanently with glue
  - line parts up exactly: the fingers position the panels and pull the corner square as it goes together; box joints 'provide guidance for the part placement relative to each other, rigidity in one direction, as well as an overlapping surface area to aid in the application of adhesives' (Speetzen and Kobbelt 2024)
- **motion**: none: a fixed, rigid corner once assembled
- **degrees_of_freedom**: 0 once glued, or once all the walls of a closed box hold each other in place. A single dry (unglued) joint has 1: it can only slide apart straight back along the direction it was pushed together.
- **special_behaviour**: 
  - self-aligning or self-centring: the fingers locate the two panels and square up the corner as they are pushed together (Speetzen and Kobbelt 2024)
  - none of the other listed behaviours: it is a fixed joint
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the fingers block sideways sliding and twisting, but not pulling straight apart in the direction of assembly
  - material bond (glue, solvent or melting): in woodworking the glue on the long-grain faces of the fingers does most of the holding; in tests the joints 'failed mostly along the glue line' (woodgears.ca)
  - friction or clamping (force-fit): unglued laser-cut boxes can be press-fitted; tuning Boxes.py's 'burn' value 'allows fine tuning the gaps between joins up to the point where plywood can be press fitted even without any glue' (Boxes.py README)
  - spring force (a springy part presses it in place): optional springy or barbed finger shapes in Boxes.py for glue-free boxes, and cantilever-spring finger joints that fit across different laser cutters (HPI springFit)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: when glued, which is the usual case; the wood tends to fail before or at the glue line and the corner cannot be taken apart without damage (woodgears.ca). A dry laser-cut press fit or a bolted version is semi-permanent to removable, but a very tight plywood press fit 'goes together once and destroys itself when taken apart' (Craftgineer).
- **reuse_cycles**: once when glued; a few times as a dry press fit in plywood or MDF (fibres crush and fingers can split; Craftgineer); many times for bolted laser-cut boxes or springy-finger styles ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: Woodwork: a table saw with a dado stack or a box-joint blade set plus a box-joint jig or sled (Fine Woodworking), or a router table and jig, a bandsaw (woodgears.ca), or a tenon saw and chisel (Wikipedia); clamps and wood glue. Laser or CNC: a laser cutter or CNC router, a generator such as Boxes.py, and glue or a rubber mallet to assemble; a file or dogbone corners for CNC-cut inside corners (Fablab RUC). 3D printing: a printer, and glue or screws.
- **seal**: dust-resistant: a tight, fully glued corner keeps dust out, but nothing in the joint makes it watertight, and an unglued laser-cut joint has kerf gaps, so treat a dry one as 'none' ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: medium to heavy for its size: strong against racking (the corner folding out of square), against bending, and against pulling in both directions ('the box joint is strong in both directions, whereas the dovetails are useful only for pulling from one piece, but not the other'; woodgears.ca). In corner-bending tests on boards 10 cm wide and 2.7 cm thick, loaded 8 cm from the inside corner, some joints needed over 540 lb (about 245 kg) to break, and finer box joints cut on an accurate jig took about 1.4 times the force of dovetails or coarse box joints of the same width (woodgears.ca). Weakest against pulling straight apart in the assembly direction, which relies on glue or friction alone. Laser-cut boxes in 3 mm plywood or acrylic are light-duty ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: no: once cut, the fit is fixed. The fit is tuned before cutting: the 'burn' and 'play' settings in Boxes.py, the pin position on a table-saw jig, or the dado width (Boxes.py manual; Fine Woodworking).
- **play_and_precision**: None to small when well made and glued. The fit depends entirely on cutting accuracy: an uncompensated laser-cut joint 'ends up loose by roughly twice your kerf' (Craftgineer), Boxes.py suggests changing its burn value in steps of 0.01 or even 0.005 mm, and for plywood 'even a 100th of a millimeter makes a notable difference in how stiff the fit is', so measure each sheet's real thickness (Boxes.py manual). CNC-routed inside corners are rounded to the cutter's radius and stop the fingers seating unless dogbones are added or the corners are filed square (Fablab RUC). It tolerates no misalignment: the angle is set by the cut, usually 90°, though Boxes.py and the Joinery tool also make other angles.
- **access_needed**: both sides: you push the two panels together and clamp across the corner, so both parts must be reachable; not suited to blind fitting
- **materials**: Solid wood, plywood, MDF and bamboo (Wikipedia; Boxes.py; Speetzen and Kobbelt 2024 used MDF), acrylic sheet (usually glued; Boxes.py says brittle acrylic should be cut undersized 'to leave a gap for the glue'), 'thicker sheet materials like acrylic and bass wood' (Joinery help), and 3D-printed plastics, where Hubs prefers ABS over PLA for interlocking joints because it is more ductile. Wood glue (PVA or aliphatic resin) for wood; see the adhesives entries for other pairs.
- **maker_difficulty**: easy: with a laser cutter and a free generator (Boxes.py) or a simple table-saw sled, a box joint is 'very easy to cut' once set up (Fine Woodworking); the main skill is tuning the fit with a test piece. Moderate by hand with saw and chisel, and hard to do without a jig because the spacing errors add up.

### Making it

- **processes**: 
  - laser cut: the classic laser-cut box corner; in Boxes.py 'Finger Joints are the work horse of the library' (Boxes.py README)
  - CNC: routed plywood or MDF, with dogbone or T-bone relief at inside corners (Fablab RUC)
  - woodwork: table saw with a dado stack or box-joint blades and a jig or sled (Fine Woodworking), router table jig, bandsaw (woodgears.ca), or tenon saw and chisel by hand (Wikipedia 'Box joint')
  - 3D print (FDM): flat-printed panels joined with finger joints, or a large model split with a finger-shaped cut (Hubs lists finger joints among interlocking joints; BOSL2 partition() 'finger' cut path)
  - 3D print (resin): possible with tighter clearances (Hubs: 0.2 mm for SLA) ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the two panels are printed separately (usually flat on the bed) and pushed together; if a box fits on the bed it would normally be printed in one piece instead ⚑ [uncertain] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Ask whether you need the joint at all: a printer can make a box corner in one piece. Finger joints earn their place when a box is bigger than the bed, when you want to print the walls flat for a smooth surface and no supports, or to mix colours or materials; Hubs lists reduced part count, avoiding overhangs and supports, and multi-colour assemblies as reasons for interlocking joints. 2) Print each panel flat so the fingers lie in the plane of the layers; 'like wood, FFF prints are stronger in one direction than another' (Prusa), and fingers printed standing upright can snap off along a layer line ⚑ [uncertain]. 3) Clearance: Hubs gives 0.5 mm for FDM interlocking joints (0.2 mm SLA and SLS, 0.1 mm material jetting); Prusa says its printers are accurate to at least 0.2 mm and suggests at least 0.3 mm for parts that move. For a glued finger joint start near the smaller end and print a two-finger test corner before the full box. 4) The squashed first layer (elephant's foot) makes the bottom of each finger wider and stops the joint closing; turn on elephant's foot compensation or chamfer the bottom edges (Prusa mentions both 'Elephant foot compensation' and that 'using a chamfer on the edges of two parts that slot together can save you a lot of effort when assembling'). 5) Round or chamfer finger edges: 'adding a small radius to part edges assists joint assembly and reduces stress concentrations' (Hubs). 6) Material: Hubs prefers ABS to PLA for interlocking joints because it is more ductile; PETG is a similar tough choice ⚑ [uncertain]. Glue printed panels with an adhesive suited to the plastic, and keep glued faces clean and lightly sanded (Prusa's advice for split models). 7) To split a large model with an interlocking seam, BOSL2's partition() has a 'finger' cut path ('a modified square halfwave with walls at a 20° angle'), and its $slop setting adds clearance. 8) For stiffer printed joints, S-curved fingers (Tom Conte's 'Interlocking/anti-flex finger joint generator' on Printables) resist flexing better than plain square ones, according to the designer. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: None are needed for the joint itself. Useful bought items: box-joint blade sets (a pair of blades that cut flat-bottomed kerfs in two fixed widths), a dado blade stack, or a flat-top rip blade (Fine Woodworking); commercial box-joint jigs for the table saw or router table; wood glue (PVA or aliphatic resin such as 'yellow glue'; Rockler); laser-grade 3 mm birch plywood or cast acrylic sheet. For knock-down laser-cut boxes: M3 machine screws with square or hex nuts held in T-slots (see 'T-slot joint (captive nut and bolt joint)') ⚑ [uncertain for sizes]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Boxes.py defaults (a well-tested starting point for laser-cut boxes): finger width 2 × material thickness, gap ('space') 2 × thickness, 2 gaps' worth of plain edge at each end ('surroundingspaces' 2.0), and finger holes for T-joints 1 × thickness wide; 'play' adds extra clearance and 'extra_length' makes fingers longer so burn marks can be sanded off (Boxes.py edges.py, FingerJointSettings).
  - Laser-cut finger width: 'somewhere around two to three times the material thickness is a convenient starting range'; narrower fingers get fragile and wider ones lose definition (Craftgineer blog).
  - Kerf compensation: Boxes.py's 'burn' is 'basically the radius of the laser - or half the width of the laser cut' (default 0.1 mm). 'Bigger burn values make a tighter fit'; adjust in steps of 0.01 or 0.005 mm; to find it, cut a rectangle, measure how much undersized it is and use about half the difference, or cut the BurnTest sample (Boxes.py manual).
  - An uncompensated laser-cut joint is loose by about twice the kerf, because slots grow and fingers shrink by one kerf each (Craftgineer). Typical kerf is about 0.1-0.2 mm on a mid-range diode laser and 0.2-0.4 mm on a CO2 laser (Bonny Creations blog), but measure your own machine and material.
  - Measure every sheet: for plywood 'even a 100th of a millimeter makes a notable difference in how stiff the fit is'. Spongy materials like plywood can be cut oversize and press-fitted without glue; brittle acrylic should be cut undersize to leave a gap for glue (Boxes.py manual).
  - Aim for a fit 'you can push together by hand or seat with a light mallet tap'; a joint that is too tight is worse than one slightly loose, because wood does not compress and glue needs somewhere to go; sand charred laser-cut faces before gluing (Craftgineer).
  - Press-fit finger joints tuned on one laser often fail on another (too tight on a smaller kerf, loose on a wider kerf, cracked in brittle material); cantilever-spring finger joints keep working across kerf and material changes (HPI springFit, Roumen et al., UIST 2019).
  - CNC: inside corners can't be sharper than the cutter: 'if you are e.g. using a 6mm mill ... all the inside corners ... will instead have an inside diameter of 3 mm'; add dogbones or T-bones, file the corners square, or use soft sheet such as OSB. Fablab RUC uses a 3 mm cutter for stock up to 12 mm thick and a 5 mm cutter up to 24 mm, and stops the dogbone 0.2-0.3 mm short of the corner so it is almost invisible and the joint grips by friction (Fablab RUC).
  - Table saw: the finger width equals the blade or dado width; a dedicated sled with two runners is more stable than a jig on the miter gauge; flat-topped rip or box-joint blades leave cleaner, flat-bottomed cuts than combination blades; cut test fingers on two scrap boards to dial in the spacing (Fine Woodworking, Doug Stowe, #267, 2018).
  - Stack the two halves plus a scrap backer board and cut them together to save time and stop tear-out on the exit side (woodgears.ca).
  - Strength: a glued box joint matched or beat a dovetail of the same width in woodgears.ca's tests, and finer fingers cut on an accurate jig were about 1.4 times as strong as coarse ones, with the wood next to the joint failing first (woodgears.ca, 'Dovetail vs. box joint strength').
  - 3D printing clearances for interlocking joints: FDM 0.5 mm, SLA 0.2 mm, SLS 0.2 mm, material jetting 0.1 mm (Hubs); Prusa printers are accurate to at least 0.2 mm, and moving fits start at 0.3 mm (Prusa knowledge base).

### When to use it

- **everyday_examples**: 
  - Laser-cut plywood or acrylic project boxes and electronics enclosures with toothed corners (Boxes.py; Commons photo 'Living hinge (wood).jpg')
  - Wooden drawers, crates, lids and small boxes (Wikipedia 'Box joint'), such as the wooden case of a WWII Enigma cipher machine (Commons photo, public domain)
  - Pine chests and storage boxes with a row of square fingers showing at each corner (Commons 'Finger joint 20180321.jpg')
  - Arts-and-Crafts style furniture with scaled-up finger joints, as in some Greene and Greene pieces (Fine Woodworking)
- **when_to_use**: Use a finger joint to join two flat parts at a corner when you want a strong, square, glued corner that is quick to make in quantity. It is the default joint for laser-cut boxes and enclosures, because a free generator can draw the whole box from its size and sheet thickness, and the fingers line the parts up for you (Boxes.py; Speetzen and Kobbelt 2024). In woodworking it gives 'a gluing surface equal to dovetails but they are much easier to produce' with a table-saw jig (Fine Woodworking video, Gary Rogowski), and once a jig is set up you can cut a stack of parts at once (woodgears.ca). Choose it for boxes, drawers, crates, trays, speaker or electronics cases, and any corner that will be loaded in several directions, because it is strong both ways rather than in one direction like a dovetail (woodgears.ca). It also works for hexagonal and other angled boxes (Wikipedia) and for T-shaped joints using finger holes (Boxes.py).
- **when_not_to_use**: Don't rely on it to resist being pulled straight apart without glue: a dry box joint slides apart the way it went in, so use a dovetail joint (which locks in one direction), add pins, or bolt it with captive nuts (T-slot joint). It is 'not, in general, for joining thin panels to structural members' (Wikipedia 'Box joint'); use a groove, rabbet or screws instead. If you don't want end grain and fingers showing on the outside, use a half-blind dovetail, a mitre joint, or a rabbet. If the box must come apart often, use T-slot bolts, knock-down cam-lock connectors, or hinges rather than a tight press fit that wears out. For curved walls use kerf bending, and for a 3D-printed box that fits on the bed, print it in one piece. If your design will be cut on other people's laser cutters, press-fit fingers may not fit; springy-finger designs (HPI springFit; Boxes.py 'springs' style) tolerate differences in kerf. For lengthening a board end to end, the separate tapered finger joint used in finger-jointed lumber is the right choice (Wikipedia 'Finger joint').
- **environment_limits**: The joint itself is only as durable as the material and glue. Wood and plywood swell and shrink with humidity, so a dry laser-cut press fit may loosen or tighten with the seasons ⚑ [uncertain]. White PVA glue 'creeps the most' under long-term load and is vulnerable to heat and moisture; standard PVA 'will not stand up well to moisture', aliphatic 'Titebond II' (brand) tolerates occasional wetting and 'Titebond III' (brand) is waterproof, while epoxy and polyurethane glues are waterproof (Woodcraft glue guide; Rockler glue guide). MDF swells badly if it gets wet ⚑ [uncertain]. 3D-printed PLA panels soften in hot places such as a car in summer; use PETG, ASA or PC for outdoor or hot uses (Prusa suggests PC, ASA or PETG for outdoor or mechanically loaded parts). *(⚑ parts need confirming)*
- **safety_notes**: Table saw with a dado stack: the normal blade guard often can't be used for dadoing, so use a proper jig or sled, keep hands out of the line of cut, and use push sticks; kickback and blade contact cause serious hand injuries (OSHA table saw eTool, which includes a finger-amputation case involving a dado on a table saw). Laser cutter: fires are a real risk with wood and card, so 'never leave an operating laser cutter unattended', use air assist and keep the cutter clean, and never cut PVC or vinyl, which gives off hydrogen chloride gas (MIT EHS). Wood dust and burnt-wood smoke irritate the lungs; use dust and fume extraction ⚑ [uncertain]. Tapping tight fingers together with a mallet can split them and leave sharp splinters. *(⚑ parts need confirming)*
- **common_failures**: 1) Too tight: the joint won't seat, fingers crack, or glue is scraped off during assembly, especially in brittle acrylic or when a design meets a laser with smaller kerf (Craftgineer; HPI springFit). Fix: reduce Boxes.py's burn value or add play, and always cut a test corner first (Boxes.py BurnTest). 2) Too loose: gaps and a weak joint when kerf isn't compensated or the sheet is thinner than its nominal size (Craftgineer; Boxes.py manual). Fix: measure the real sheet thickness and increase burn. 3) Weak glue joint on charred laser-cut faces; sand them first (Craftgineer). 4) CNC-cut fingers won't go in because the inside corners are rounded; add dogbones or file them square (Fablab RUC). 5) Spacing errors add up along a long edge on a table-saw jig so the last fingers don't line up; test on scrap and use an accurate jig (Fine Woodworking; woodgears.ca). 6) Tear-out on the back face where the blade exits; use a backer board (woodgears.ca). 7) Fingers printed upright snapping along layer lines, and elephant's foot stopping printed joints closing (Prusa) ⚑ [uncertain for the first]. 8) Box not square because it was glued up on an uneven surface or clamped unevenly ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Dovetail joint (through and half-blind): flared tails lock against pulling in one direction and look traditional, but take more skill; box joints are equally strong when glued (woodgears.ca)
  - Tab-and-slot joint: tabs pass through slots in the middle of another sheet rather than meshing along two edges; common for laser-cut and sheet-metal assemblies
  - T-slot joint (captive nut and bolt joint): adds a bolt and a trapped nut so a laser-cut box can be taken apart; often combined with finger joints
  - Snap-lock sheet joint (barbed or spring finger): fingers with barbs or springs that click in and hold with no glue (Boxes.py 'barbs', 'springs' and 'snap' styles)
  - Cross-halving slot joint (egg-crate joint): two slotted sheets slid together into a cross, for grids and dividers
  - Kerf bending (laser-cut living hinge): cuts that let a wall bend round a curve; kerf-bent box walls often end in finger joints
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): ways to join 3D-printed pieces, including finger-shaped cuts
  - Butterfly key (bow-tie key): a separate bow-tie insert that locks two parts edge to edge
  - Knock-down cam-lock and cross-dowel connectors: fittings for furniture that must come apart
  - Finger-jointed lumber (tapered finger joint): the end-to-end cousin used to lengthen boards, not to make corners (Wikipedia 'Finger joint')

### Pictures, videos and models

- **links**: 
  - [Finger joint 20180321.jpg (Wikimedia Commons, by Santeri Viinamäki)](https://commons.wikimedia.org/wiki/File:Finger_joint_20180321.jpg): Close-up photo of a pine box corner with a long row of square fingers, showing the alternating end grain and side grain *(licence: CC BY-SA 4.0)*
  - [Boxjoint.png (Wikimedia Commons, drawn by Luigi Zanasi, 2005)](https://commons.wikimedia.org/wiki/File:Boxjoint.png): Simple drawing of a box joint (box comb) as used in woodworking; used on the Wikipedia 'Box joint' article *(licence: CC BY-SA 2.0 Canada)*
  - [Living hinge (wood).jpg (Wikimedia Commons, by Autopilot)](https://commons.wikimedia.org/wiki/File:Living_hinge_(wood).jpg): A laser-cut plywood box whose corners use finger joints and whose curved wall is a kerf-cut living hinge *(licence: CC BY-SA 3.0)*
  - [Dovetail vs. box joint strength (Matthias Wandel, woodgears.ca)](https://woodgears.ca/dovetail/strength.html): Photos of bandsaw-cut and jig-cut box joints and dovetails, the test rig, the results table and how each joint broke *(licence: link only)*
  - [Dovetail joint vs box joint strength test (YouTube, Matthias Wandel)](https://www.youtube.com/watch?v=cRPgCMmbeyQ): Video of glued box joints and dovetails being broken on a home-made test rig *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Boxes.py ClosedBox generator (online)](https://boxes.hackerspace-bamberg.de/ClosedBox?language=en): Free web generator for a fully closed finger-jointed box: enter inside sizes, sheet thickness and burn (kerf) correction, choose finger size and style (rectangular, springs, barbs, snap), and download SVG, DXF, PDF or LightBurn files for laser cutting *(licence: GPL v3+ (Boxes.py is free software))*
  - [Boxes.py BurnTest generator (online)](https://boxes.hackerspace-bamberg.de/BurnTest?language=en): Cuts pairs of finger-jointed test pieces, each testing several burn values, so you can find the kerf setting that gives your preferred fit before cutting a whole box *(licence: GPL v3+)*
  - [Joinery: parametric joint generation for laser-cut assemblies (Clement Zheng; help at https://clementzheng.github.io/joinery/help/help.html)](https://clementzheng.github.io/joinery/): Web tool that loads your own SVG parts, lets you pick pairs of edges, and adds 'Finger Joint (90deg)' or angled finger joints with adjustable finger width, corner radius and tolerance (negative tolerance gives a forced press fit) *(licence: free web tool; licence not stated on the pages opened ⚑ [uncertain])*
  - [BOSL2 partitions.scad: partition() with the 'finger' cut path (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/partitions.scad): OpenSCAD modules that cut a model into two interlocking pieces for printing, with 'finger', dovetail, jigsaw and other cut paths and a $slop clearance setting *(licence: BSD 2-Clause)*
  - [Finger or Box Joint Parametric Jig Parts (paha, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1412515-finger-or-box-joint-parametric-jig-parts): Three printed parts (pin, push plate and first-cut spacer) that turn a table-saw crosscut sled into a box-joint jig; FreeCAD file resizes them to your measured dado slot width. Read through the Printables public API. *(licence: CC BY-SA)*
  - [Customizable Finger Joints Template (Michael Heeg, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1467670-customizable-finger-joints-template): A printable template for cutting finger joints by hand with a flush-cut saw, fully adjustable in FreeCAD (finger width, number of fingers, stop size). Read through the Printables public API. *(licence: CC BY-NC)*
  - [Interlocking/anti-flex finger joint generator - scalable/parametric (Tom Conte, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1775292-interlockinganti-flex-finger-joint-generator-scala): A scalable finger shape with S-curved sides to duplicate and mirror into stiffer finger joints for 3D-printed parts; example included. Read through the Printables public API. *(licence: CC BY)* *(⚑ parts need confirming)*
- **diagram_idea**: An exploded 3D view of two boards with alternating square fingers sliding together at a right angle, with arrows showing that sideways sliding is blocked but pulling straight back is not, the long-grain glue faces shaded, and a small inset showing how laser kerf makes fingers narrower and slots wider.
- **sources**: 
  - https://en.wikipedia.org/wiki/Finger_joint
  - https://en.wikipedia.org/wiki/Box_joint
  - https://commons.wikimedia.org/wiki/File:Finger_joint_20180321.jpg
  - https://commons.wikimedia.org/wiki/File:Boxjoint.png
  - https://commons.wikimedia.org/wiki/File:Box_joint_on_Enigma_machine.png
  - https://commons.wikimedia.org/wiki/File:Living_hinge_(wood).jpg
  - https://commons.wikimedia.org/wiki/File:Keilzinkenprofile.jpg
  - https://commons.wikimedia.org/wiki/File:Fingerzinken.jpg
  - https://commons.wikimedia.org/wiki/File:Holzzinken.jpg
  - https://woodgears.ca/dovetail/dovetail_vs_boxjoint.html
  - https://woodgears.ca/dovetail/strength.html
  - https://www.youtube.com/watch?v=cRPgCMmbeyQ
  - https://florianfesti.github.io/boxes/html/usermanual.html
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/edges.py
  - https://raw.githubusercontent.com/florianfesti/boxes/master/README.rst
  - https://boxes.hackerspace-bamberg.de/ClosedBox?language=en
  - https://boxes.hackerspace-bamberg.de/BurnTest?language=en
  - https://craftgineer.com/blog/laser-cut-finger-joint-boxes
  - https://www.bonnycreations.com/blog/how-to-make-a-laser-cut-box
  - https://hpi.de/baudisch/projects/springfit.html
  - http://fablab.ruc.dk/more-elegant-cnc-dogbones/
  - https://www.finewoodworking.com/2018/02/07/build-simple-box-joint-sled
  - https://www.finewoodworking.com/project-guides/joinery/tablesaw-box-joint-jig
  - https://clementzheng.github.io/joinery/
  - https://clementzheng.github.io/joinery/help/help.html
  - https://www.graphics.rwth-aachen.de/media/papers/359/Freeform_Shape_Fabrication_by_Kerfing_Stiff_Materials.pdf
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/partitions.scad
  - https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://www.osha.gov/etools/machine-guarding/saws/table
  - https://ehs.mit.edu/workplace-safety-program/laser-cutter-safety/
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
- **tools**: press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, common_failures, environment_limits, load, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, print_in_place, processes, reuse_cycles, safety_notes, seal

## 244 Kerf bending (laser-cut living hinge)

*interlocking joints & joinery.* A pattern of cuts that lets stiff sheet like plywood or acrylic bend around curves or fold like a hinge

### What it is

- **plain_name**: Rows of cuts or slots in a stiff flat sheet, like plywood, MDF or acrylic, so it can bend around a curve or flex like a hinge without breaking
- **term**: Kerf bending (kerfing; laser-cut living hinge or lattice hinge)
- **aliases**: 
  - kerfing, kerf cutting, relief cutting (Speetzen and Kobbelt 2024; woodworking use)
  - kerf cut, bending cut, 'cutting technique for bending applications' (Trotec)
  - laser-cut living hinge, wood living hinge ('a variant on the kerf bend can be used to create living hinges in laser cut wood'; Wikipedia 'Living hinge')
  - lattice hinge, Snijlab-style living hinge, 'sninge', laser cut hinge (Deferred Procrastination)
  - flex cut, flex edge, 'Boxes with flex' (Boxes.py terms)
  - kerf bend (MatterHackers; Hackaday)
  - kerfed lining or 'kerfing' (the slotted strips glued inside acoustic guitars where the top and back meet the sides; The Art of Lutherie)
  - kerfed panels, bendable MDF or plywood (pre-kerfed sheet sold for curved panels and columns; Rockler), e.g. Neatform (brand)
  - bidirectional kerf patterns such as interlocking spirals, honeycombs and auxetic-looking lattices (Speetzen and Kobbelt 2024; Trotec)
- **family**: interlocking joints & joinery
- **other_families**: compliant mechanisms & flexures, hinges & pivots
- **one_liner**: Cutting many closely spaced slots, or a lattice of short cuts, into a stiff sheet so the thin strips left between them can bend or twist, letting the sheet curve around a form or flex like a hinge while staying in one piece.
- **complexity**: Single piece: a pattern of cuts in one sheet. In woodworking, a row of saw kerfs cut across the back of a board nearly all the way through, leaving a thin uncut skin (Rockler; WWGOA). In laser cutting, staggered rows of through-cuts that leave short solid bridges ('junctions') joined by thin twisting strips ('spring connections') (Deferred Procrastination). A form, glue, filler or the rest of the box holds the bent shape.
- **how_it_works**: Woodworking version: cutting slots (kerfs) across the back of a board 'nearly all the way through the material' makes it act like a much thinner board, so it bends easily, and the kerfs pinch closed on the inside of the curve (Woodworker's Journal; Rockler; WWGOA). Laser-cut version: staggered rows of cuts turn the sheet into a chain of short bars joined at their ends; when the sheet bends, each thin bar twists a little (torsion), 'similar to how a chain, which has solid links, bends by rotating around the pivots that join each link', so a large bend is shared among many small twists and the sheet springs back if each twist stays within the material's elastic limit (Deferred Procrastination; Speetzen and Kobbelt 2024). More, longer and closer cuts make the sheet bend more easily and to a tighter curve; fewer cuts leave it stiffer and more likely to crack, while too many make it flimsy (Trotec; Speetzen and Kobbelt 2024). Most patterns bend in one direction only, but some (honeycombs, spirals, triangles) bend in several directions (Trotec; Speetzen and Kobbelt 2024).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets a stiff sheet bend, either once into a fixed curve (a rounded box wall, a curved cabinet panel) or again and again as a flexible hinge (a notebook cover)
  - join and hold: one kerfed panel can wrap round several corners, so a box needs fewer separate pieces and joints, e.g. a plywood Arduino box 'made from only 3 pieces' (Deferred Procrastination)
- **motion**: flex: bends about a line parallel to the cuts; laser-cut lattice hinges in 3 mm acrylic were bent to 90° in tests (Deferred Procrastination), and kerf-cut plywood walls wrap round the half-round ends of boxes (Commons 'Living hinge (wood).jpg') ⚑ [uncertain for the largest safe angles] *(⚑ parts need confirming)*
- **degrees_of_freedom**: 1 intended: bending across the cuts. Lattice patterns also stretch and squash in the plane of the sheet, at right angles to the cuts (Deferred Procrastination), and some patterns bend in more than one direction (Trotec 'honeycombed cut line': 'flexibility in all directions'). 0 once the bent sheet is glued to a frame or its kerfs are filled.
- **special_behaviour**: 
  - none: it simply bends. A laser lattice hinge that is not glued springs back toward flat, as long as the twisting stress in each strip stays below the material's yield stress (Deferred Procrastination)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): the cut pattern only makes the sheet bendable; the bent shape is held by the parts it is fixed to
  - material bond (glue, solvent or melting): kerf-bent panels are glued to a form, frame or box ends, or the kerfs are filled with thick epoxy, filler or wood strips to make the curve rigid (WWGOA; Rockler)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: the cuts are part of the sheet and cannot be undone; a laser-cut living hinge can be unfolded and refolded, and a bent panel can be unscrewed from its frame, but the pattern itself is not a joint that comes apart
- **reuse_cycles**: Not taken apart at all. Used as a moving hinge it can flex many times if each strip's twist stays below the yield stress, which gives 'much better fatigue properties' (Deferred Procrastination); acrylic lattices are 'best for rigid bends ... where the bending radius is very rarely changed' because 'with a continuous load ... the webs can easily break' (Trotec). No measured cycle counts were found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: To make: a laser cutter or CNC router for lattice patterns; for saw kerfs a table saw, radial-arm saw, track saw, circular saw with a guide, or even a handsaw (Rockler; WWGOA; Woodworker's Journal). To finish: a bending form, clamps or tape, and glue or thick epoxy to fix the curve (WWGOA). To use: none.
- **seal**: none: laser cuts go right through, and saw kerfs leave open slots on the back, so it leaks air, water and light unless the kerfs are filled or the panel is backed
- **load**: light: kerf bending 'is not very strong' (Rockler), and a cut lattice is much floppier than the solid sheet, stretching and squashing along the sheet (Deferred Procrastination); for a very soft hinge its designer 'added support by gluing a thinner material across the inside of the hinge to prevent expansion' (Deferred Procrastination). Once glued to a frame or with its kerfs filled with epoxy, a kerfed plywood panel is rigid enough for cabinet arches and stair risers (WWGOA; Rockler).
- **adjustable**: no: stiffness and the tightest radius are set by the cut pattern, spacing, cut depth and sheet thickness; change them by cutting a new pattern
- **play_and_precision**: No play, since it is one piece, but the curve is only as accurate as the form it is bent over. Few, widely spaced cuts give a faceted curve with flat spots, so 'keep the kerfs close together and regularly spaced' (Rockler); spacing within 1/32-1/16 in (about 0.8-1.6 mm) of the target is consistent enough (WWGOA). As a hinge its pivot line is not well defined, and it stretches and squashes under load (Deferred Procrastination). Laser-scanned kerfed MDF objects matched their target shapes 'very well locally', but small errors built up during assembly and caused 'slight global deformations' (Speetzen and Kobbelt 2024); the accuracy of kerf-bent MDF arcs was studied by Lorenzoni and Silva (2022, cited there) ⚑ [uncertain for typical values]. *(⚑ parts need confirming)*
- **access_needed**: not applicable
- **materials**: Plywood ('very suitable for the use of bending applications'; Trotec), MDF (no grain to line up; Trotec; Speetzen and Kobbelt 2024), solid wood up to about 5 mm cut along the grain (Trotec), acrylic, which is brittle and needs wider-spaced cuts and gentle, rarely changed bends (Trotec; Deferred Procrastination), and walnut plywood or aromatic cedar for kerf-bent project boxes (Hackaday 2012). Other sheet materials such as bamboo or thick card may work but were not covered by the sources ⚑ [uncertain]. Saw-kerf bending works on plywood and solid boards of many thicknesses (Rockler). In 3D printing, tough, stretchy plastics such as PETG, nylon or polypropylene suit flexing patterns better than PLA or ABS, which 'fail to make the grade' for living hinges (MatterHackers). *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: cutting a pattern is easy with a laser cutter and a generator, but getting a curve that bends far enough without cracking or going floppy takes test swatches (Ponoko; Obrary); saw kerfing is simple but the cut depth must be controlled to a fraction of a millimetre (WWGOA)

### Making it

- **processes**: 
  - laser cut: the most common maker method, for plywood, MDF and acrylic (Ponoko; Trotec; Boxes.py 'Boxes with flex')
  - CNC: kerfed panels for furniture and architecture (Speetzen and Kobbelt 2024 review) ⚑ [uncertain for CNC router specifics]
  - woodwork: parallel saw kerfs across the back of a board with a table saw, radial-arm saw, track saw or handsaw (Rockler; WWGOA; Woodworker's Journal)
  - 3D print (FDM): the voids are designed into a flat print ('in 3D printing the voids can simply be designed into the part'; Hackaday 2023; MatterHackers)
  - off-the-shelf part: pre-kerfed bendable MDF or plywood sheet (Rockler) *(⚑ parts need confirming)*
- **print_in_place**: yes: the pattern is just holes in a flat printed sheet, so it bends straight off the bed with no assembly (Hackaday 2023). But a printer can usually print the curve directly, so the pattern is mainly worth it for parts that must flex, or that are printed flat and wrapped round something ⚑ [uncertain]. *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) First ask whether you need it: a 3D printer can print a curved wall directly. Kerf or lattice patterns in prints are useful for parts that must flex, for wrap-around sleeves, and for decorative 'patterned radii' (MatterHackers; Hackaday 2023). 2) Print the sheet flat on the bed with the cuts modelled as slots; it needs no supports. 3) Material matters most: PLA and ABS have low elongation and crack in hinges; polypropylene, PETG and nylon are tougher (MatterHackers shows PLA and polypropylene hinges side by side and prints its FFF hinge example in nylon). 4) FFF can't print the very thin webs used in moulding: 'since average FFF layer heights range from 200 - 250 microns, hinge thicknesses of 250 - 380 microns used in injection molding solutions most likely will not work' (MatterHackers), so make the bending strips several layers thick and several extrusion widths wide and accept a stiffer hinge. 5) Share the bend among many strips: like laser lattice hinges, more, longer links each twist less, and keeping link length under about 4 × thickness stops the edges splaying and breaking (Deferred Procrastination, tested in acrylic and MDF) ⚑ [uncertain for printed plastics]. 6) Round the ends of slots to avoid sharp stress-raising corners ⚑ [uncertain]. 7) Test a small swatch through the full bend before printing the whole part, as the laser-cutting guides recommend (Ponoko; Obrary). 8) Don't leave a printed plastic lattice bent under load for long; plastics creep (Deferred Procrastination's elastic model assumes 'no plastic creep for polymers') ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Pre-kerfed bendable panels, e.g. 1/4 in 'Neatform' (brand) bendy MDF, and 'various pre-kerfed materials' in 4 × 8 ft sheets from large lumber suppliers (Rockler); kerfed guitar linings for instrument making (The Art of Lutherie); laser-grade 3 mm birch plywood (used by the Printables phone-stand and dice-tower designs); thick, non-running epoxy or wood filler to lock a bent panel (WWGOA); a thin veneer, fabric or film glued across the inside to stiffen a soft hinge (Deferred Procrastination) ⚑ [uncertain for fabric and film]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Laser, straight parallel lines: 'the further apart that each cutting line is, the greater the bending radius will be'; 'a distance up to 0.5 mm between the lines can be processed'. Small waves suit material up to 3 mm; large honeycombs let wood up to about 5 mm flex; the triangular pattern suits up to about 3 mm and 'becomes inflexible and rigid after 5 mm or more' (Trotec, tested on acrylic and wood 3-5 mm).
  - Laser, acrylic: use at least a 2 in focal-length lens so cuts don't melt back together, cut lines about 1-1.5 mm apart, and increase the spacing if they still fuse, although wider spacing makes it stiffer (Trotec).
  - Grain: in solid wood up to about 5 mm, cut the pattern in the direction of the grain 'to avoid a loss in flexibility or material damage'; MDF has no grain to line up (Trotec).
  - Lattice-hinge sizing (twisting strips of square section): minimum number of links in series n ≥ 0.676 × Θ × G × t / (τ_yield × l), where Θ is the total bend in radians, G the shear modulus, t the sheet thickness, τ_yield the shear yield stress and l the connected length. For 3 mm acrylic (G = 2 GPa, τ_yield = 60 MPa) bent 90°: l = 5 mm needs 22 links, 10 mm 11, 20 mm 6 and 30 mm 4; the author also plots 60% of yield for repeated bending (Deferred Procrastination, 'Laser-cut Lattice Living Hinges', 2011).
  - Keep each spring connection shorter than about 4 × sheet thickness (l ≤ 4t): longer ones let the hinge edges splay and several acrylic samples broke; clearance between links k = −t + 2√(t²/2) × cos(π/4 − Θ/n), and if k is less than the laser kerf a single cut line is enough; total hinge width W = t·n + k(n+1) (Deferred Procrastination, 'Lattice Hinge Test Results', 2011).
  - Alternating parallel cuts make a strip into 'a series of concatenated beams, the twist of which creates the curvature'. For MDF, research used τ_yield = 18 MPa and G = 1.6 GPa (from Chen et al., Acta Mechanica 2020) and designed with G/τ_yield = 100 as a safety margin; cuts closer than about 0.9 mm were flagged because the laser could burn the material away; 'too many cuts may result in a very unstable result, while the opposite can lead to the material breaking', and cutting more than 25% fewer cuts than their calculated number 'often leads to material failure' (Speetzen and Kobbelt 2024, 3 mm MDF, Epilog Helix laser).
  - Boxes.py flex-cut defaults: cut lines 0.5 × thickness apart ('distance'), bridges 1 × thickness long ('connection'), cut length 5 × thickness ('width'), and a 'stretch' hint of 1.05 for 'how much the flex part should be shortened' (Boxes.py edges.py, FlexSettings).
  - Saw kerfs: cut deep enough to leave 1/32-1/64 in (about 0.8-0.4 mm) of material; go closer to 1/64 in for tighter bends. One kerf every 3/8 in (about 9.5 mm) worked for an arch in 3/4 in plywood. Kerfs on the outside (convex) face of the curve can be farther apart than kerfs on the inside (concave) face. Support the workpiece along its whole length while cutting, and give the bending form ribs every 4-6 in for 3/4 in plywood (WWGOA, 'How to Bend Plywood the Easy Way', 2023).
  - 'A tighter bend radius requires narrower spacing between the kerfs, while a larger radius can get away with wider kerf spacing' (Woodworker's Journal, 2024); 'keep the kerfs close together and regularly spaced so that the bend is smooth and regular with no flat spots', and practise on scrap first (Rockler).
  - A traditional shop estimate for kerf spacing: cut a kerf, clamp one end of the board to a flat table and lift the other end until the kerf closes; the rise measured at the radius distance gives the spacing between kerfs (Fine Homebuilding forum tip, 2002) ⚑ [uncertain]. *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Laser-cut plywood boxes, phone stands and dice towers with rounded, bendy walls (Commons 'Living hinge (wood).jpg'; Printables models)
  - Flexible plywood notebook or tablet covers that fold at a laser-cut lattice, like Snijlab's (Deferred Procrastination)
  - Curved cabinet panels, arched built-ins and the rounded 'bullnose' bottom step of a staircase (Rockler; WWGOA)
  - Kerfed linings inside acoustic guitars, which bend to follow the curved sides and give a glue surface for the top and back (The Art of Lutherie)
- **when_to_use**: Use kerf bending when you need a curve or a fold in a stiff sheet material and don't want to steam-bend, laminate or join many small flat pieces. It suits rounded corners on laser-cut boxes and enclosures (a single wall can wrap round the ends, as in Boxes.py's FlexBox), flat-pack items that are cut flat and bent on assembly, light-duty hinges with large radii such as notebook covers (Wikipedia 'Living hinge'; Deferred Procrastination), curved furniture and cabinet panels, and freeform shapes built from MDF or plywood (Speetzen and Kobbelt 2024). It works with the tools most makers already have: a laser cutter, or any saw with a controllable depth of cut (Rockler), and it is 'especially useful for bending plywood' (Rockler).
- **when_not_to_use**: Avoid it where the part must carry real load before it is glued or backed, since it 'is not very strong' (Rockler); use steam bending or bent lamination for strong curved parts, or thicker solid material. Avoid it where the part must be sealed against water, dust or light (fill the kerfs or use a solid curved part). For a hinge that opens and closes thousands of times, a pin hinge, piano hinge or a moulded polypropylene living hinge lasts longer, especially compared with brittle acrylic lattices (Trotec). For a small, precise pivot, use a flexure hinge or a lamina emergent torsional (LET) joint. If you can 3D print the part, print the curve directly unless you need it to flex. Don't use it in solid wood thicker than about 5 mm with laser cuts, or across the grain (Trotec).
- **environment_limits**: Plywood, MDF and solid wood swell and shrink with humidity, and the thin bridges and skins left by kerfing are easily damaged by moisture ⚑ [uncertain]. Glue choice decides outdoor use: standard PVA 'will not stand up well to moisture', 'Titebond III' (brand) is waterproof and cured epoxy is waterproof (Rockler). Acrylic lattices are brittle and fail under continuous load (Trotec), and the heat of laser cutting may change acrylic's properties (Deferred Procrastination suggests this as one reason test hinges broke early). Plastic lattices creep if held bent under load (Deferred Procrastination's elastic model assumes no creep) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Laser cutting kerf patterns means very long cut paths packed close together in flammable plywood or card, so watch the job: 'never leave an operating laser cutter unattended', use air assist, vacuum out debris, keep a fire extinguisher nearby, and never cut PVC or vinyl, which gives off hydrogen chloride gas (MIT EHS). Saw kerfing needs many repeated cuts; follow table-saw guarding and push-stick practice (OSHA table saw eTool), and support the work, because a heavily kerfed panel becomes 'very flimsy and will be prone to breaking' (WWGOA). Bent acrylic can snap suddenly and leave sharp edges ⚑ [uncertain]. A bent sheet stores spring energy and can spring back when released ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Cracks while bending, because the links are too short, too few or too thick, the bend is too tight for the pattern, the cuts run across the grain, or the material is brittle acrylic (Deferred Procrastination; Trotec). Fix: longer or more links, a wider hinge area, cut along the grain, or a tougher material. 2) Links splay outward and break at the edges when the spring connections are longer than about four times the sheet thickness (Deferred Procrastination). 3) Faceted curve with flat spots, from kerfs spaced too far apart or unevenly (Rockler). 4) Floppy, unstable panel from too many cuts (Speetzen and Kobbelt 2024). 5) Cutting through the skin of a saw-kerfed board, often because bowed plywood makes the cut depth vary on a table saw; a track saw keeps a constant depth (WWGOA). 6) Acrylic cuts melting back together; use a longer focal-length lens or wider spacing (Trotec). 7) Bridges burned away when cut lines are too close together for the laser (Speetzen and Kobbelt 2024). 8) The panel snaps while being cut or moved because it isn't supported along its length (WWGOA). 9) The curve springs open or creeps back because it wasn't glued or fixed firmly to its form or frame ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Living hinge: a thin flexible web in plastic that bends instead of a cut pattern; lasts longest in polypropylene; kerf bending is 'the laser-cutting cousin'
  - Lamina emergent torsional joint (LET joint): a small set of slots that makes a precise fold line in stiff sheet using the same twisting strips as a lattice hinge
  - Flexure hinge (notch, leaf-spring and cross-axis pivots): bending flexures with a better-defined pivot but smaller angles
  - Finger joint (box joint): often used at the edges of kerf-bent box walls to join them to the flat sides
  - Mechanical metamaterial mechanism (shear-cell hinge arrays): cell patterns that combine many small hinges into a mechanism
  - Steam bending and bent lamination: the traditional ways to make strong curved wood parts without cuts (Rockler's 'Bending Wood' series, parts II and III) ⚑ [uncertain]
  - Piano hinge (continuous hinge): a pin hinge for doors and lids that open often and carry load
  - Tape-spring hinge (measuring-tape fold): a curved strip that folds and snaps straight again *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Living hinge (wood).jpg (Wikimedia Commons, by Autopilot)](https://commons.wikimedia.org/wiki/File:Living_hinge_(wood).jpg): A laser-cut plywood box whose rounded wall is a kerf-cut living hinge, with finger joints at the edges; used on the Wikipedia 'Living hinge' article *(licence: CC BY-SA 3.0)*
  - [Kerf Cut: Cutting technique for bending applications (Trotec Laser help centre)](https://www.troteclaser.com/en-us/helpcenter/materials/application-techniques/bending-technique): Photos of eight kerf patterns (straight lines, small waves, large honeycombs, wavy lines, honeycombed lines, wide and narrow waves, triangles), each flat and bent in wood, with material advice *(licence: link only)*
  - [Laser-cut Lattice Living Hinges (Patrick Fenner, Deferred Procrastination, 2011)](http://marksabino.com/defproc/blog/2011/laser-cut-lattice-living-hinges/): Diagrams of a lattice hinge's junctions and twisting spring connections in tension, compression and bending, a photo of Snijlab's plywood hinge, and the sizing formulas *(licence: link only (© Deferred Procrastination))*
  - [Living Hinges Minimum Bend Radius with Swatches for Laser Cutting Bent Plywood (YouTube, What Make Art)](https://www.youtube.com/watch?v=QvcpBnxsQws): Video of laser-cut plywood living-hinge swatches being bent to find the smallest radius each pattern can take (from the title) ⚑ [uncertain] *(licence: link only (standard YouTube licence))*
  - [Kerf-Bending with a Track Saw (A.J. Hamler, Woodworker's Journal, 2024)](https://www.woodworkersjournal.com/kerf-bending-with-a-track-saw/): Step-by-step photos of cutting evenly spaced kerfs in plywood with a track saw and a simple sliding jig, and the finished panel bending smoothly *(licence: link only)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Boxes.py FlexBox generator: 'Box with living hinge and round corners' (online)](https://boxes.hackerspace-bamberg.de/FlexBox?language=en): Free web generator that draws a laser-cut box whose walls wrap round rounded corners using flex cuts, with adjustable cut spacing, bridge width and cut length, plus finger joints to the lid and base *(licence: GPL v3+ (Boxes.py is free software))*
  - [Living Hinge Swatches (Obrary)](https://obrary.com/products/living-hinge-patterns): Free downloadable laser-cutting files: one set of swatches compares different hinge patterns, and another shows the straight pattern at several spacings so you can pick the flexibility you need *(licence: CC BY-SA 4.0)*
  - [Trotec kerf cut graphic templates (download link on the bending-technique page)](https://www.troteclaser.com/en-us/helpcenter/materials/application-techniques/bending-technique): A ZIP of the eight kerf-cut pattern templates shown on the page, for testing in wood or acrylic *(licence: free download; licence not stated ⚑ [uncertain])*
  - [Lattice Hinge Test Results (Deferred Procrastination, 2011)](http://marksabino.com/defproc/blog/2011/lattice-hinge-test-results/): Test results and design formulas for lattice hinges; the linked earlier post offers a ZIP of the cutting diagram for the 3 mm acrylic and MDF test specimens *(licence: link only; licence of the files not stated ⚑ [uncertain])*
  - [Laser cut living hinge phone stand (Wyn, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/358542-laser-cut-living-hinge-phone-stand): Laser-cut phone stand in 3 mm birch plywood that folds at living hinges; the designer warns 'there's a limit to how far the hinges will bend'. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Laser cut Flat-Pack Living Hinge Dice Tower (EcoDad, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/756965-laser-cut-flat-pack-living-hinge-dice-tower): Flat-pack dice tower that rolls up into a 100 mm cylinder using living hinges, sized for 1/8 in (3 mm) birch plywood; about 8 minutes of cutting on an Epilog laser. Read through the Printables public API. *(licence: CC BY-NC-SA)* *(⚑ parts need confirming)*
- **diagram_idea**: Side-by-side views of a flat sheet with staggered rows of cuts and the same sheet bent into a curve, with a zoomed inset showing each thin strip twisting slightly like a chain link, and a second panel showing saw kerfs on the back of a board closing up as it bends.
- **sources**: 
  - https://en.wikipedia.org/wiki/Living_hinge
  - https://commons.wikimedia.org/wiki/File:Living_hinge_(wood).jpg
  - https://www.troteclaser.com/en-us/helpcenter/materials/application-techniques/bending-technique
  - https://www.ponoko.com/blog/how-to-make/how-to-design-a-living-hinge/
  - http://marksabino.com/defproc/blog/2011/laser-cut-lattice-living-hinges/
  - http://marksabino.com/defproc/blog/2011/lattice-hinge-test-results/
  - https://www.graphics.rwth-aachen.de/media/papers/359/Freeform_Shape_Fabrication_by_Kerfing_Stiff_Materials.pdf
  - https://florianfesti.github.io/boxes/html/usermanual.html
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/edges.py
  - https://raw.githubusercontent.com/florianfesti/boxes/master/README.rst
  - https://boxes.hackerspace-bamberg.de/FlexBox?language=en
  - https://obrary.com/products/living-hinge-patterns
  - https://www.rockler.com/learn/bending-wood-part-i
  - https://www.woodworkersjournal.com/kerf-bending-with-a-track-saw/
  - https://www.wwgoa.com/post/how-to-bend-plywood-the-easy-way
  - https://www.finehomebuilding.com/forum/kerf-bending-lumber
  - https://hackaday.com/2012/06/12/bending-laser-cut-wood-without-steam-or-forms/
  - https://hackaday.com/2023/05/01/hinges-live-inside-3d-prints/
  - https://www.matterhackers.com/news/living-hinge:--design-guidelines-and-material-selection
  - https://theartoflutherie.com/guitar-kerfing-vs-solid-linings/
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://ehs.mit.edu/workplace-safety-program/laser-cutter-safety/
  - https://www.osha.gov/etools/machine-guarding/saws/table
  - https://www.youtube.com/watch?v=QvcpBnxsQws
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: boards or sheet, lid, door or cover
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, power tools, hand tools
- **load_max**: light
- **usual_process**: laser cut
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, links, make_it_yourself, making_tips_3d_printing, materials, motion, off_the_shelf_parts, play_and_precision, print_in_place, processes, related, reuse_cycles, rules_of_thumb, safety_notes

## 245 Dovetail joint (through and half-blind)

*interlocking joints & joinery.* Flared tails and pins that interlock so the joint can't be pulled apart in one direction; the classic drawer corner

### What it is

- **plain_name**: A corner joint where fan-shaped 'tails' on one board lock between wedge-shaped 'pins' on the other, so the boards can't be pulled apart in one direction even without glue; the classic joint at the front corners of a good wooden drawer
- **term**: Dovetail joint (through dovetail and half-blind dovetail)
- **aliases**: 
  - dovetail; swallowtail, culvertail or fantail joint (European names; Wikipedia)
  - through dovetail, also called plain dovetail: end grain of both boards shows (Wikipedia)
  - half-blind dovetail, also called lapped dovetail: the tails are hidden from the front by a thin lap (Wikipedia lists 'lapped' dovetails; Fine Woodworking)
  - English dovetail (a dovetail used in drawer construction; Wikipedia)
  - machine dovetails, router-cut or jig dovetails (WWGOA; German 'Maschinenzinken', Commons)
  - Schwalbenschwanzverbindung, Zinken, offene Zinken (German for dovetail, dovetailing and through dovetails; Commons file descriptions)
  - parts: tails, pins, half pins, sockets, lap, tail board, pin board (WWGOA; Fine Woodworking)
  - related variants with their own names: secret mitred (full-blind) dovetail, secret double-lapped dovetail, and the sliding dovetail ('French dovetail' when stopped in drawer work) (Wikipedia; sliding dovetail has its own entry)
  - router jig and bit names a beginner may meet: Leigh jig (brand), Woodhaven jig (brand), 7° and 14° dovetail bits (Fine Woodworking; WWGOA; Popular Woodworking)
- **family**: interlocking joints & joinery
- **one_liner**: A wooden corner joint whose flared tails and matching wedge-shaped pins interlock so the joint can only slide together one way, which lets it resist being pulled apart in the other direction; through dovetails show on both faces, half-blind ones are hidden from the front.
- **complexity**: A few parts: two boards, a tail board (e.g. a drawer side) with flared tails cut in its end, and a pin board (e.g. a drawer front) with pins and the sockets between them, usually with a half pin at each edge; plus glue. In a half-blind dovetail the pin board keeps a thin 'lap' of wood over the ends of the tails (WWGOA; Fine Woodworking).
- **how_it_works**: The tails are wider at their ends than at their roots, like a dove's spread tail, and the pins between them are cut to the matching wedge shape, so once assembled the tails can't be pulled out along the tail board's length: the wedge shapes jam against each other (Wikipedia). The joint goes together, and can come apart, only by sliding the tail board one way, at right angles to its face; in a drawer that is sideways, not the direction you pull, so the joint 'will not allow the drawer front to be pulled away from the sides' (WWGOA). In a through dovetail the ends of both boards show on the outside; in a half-blind dovetail the sockets stop short of the front face, leaving a thin lap that hides the tails, and the joint can only go together from inside the drawer (Wikipedia; Fine Woodworking). Glue on the long-grain faces carries much of the load, and the shape keeps the joint together even without it: 'once glued, a wooden dovetail joint requires no mechanical fasteners' (Wikipedia), and a well-fitted one 'locks together even without glue' (woodgears.ca).

### Finder attributes

- **job**: join and hold: a strong, permanent corner for boxes, drawers, chests and cabinet carcasses, which resists being pulled apart in the direction the drawer front or box side is loaded
- **motion**: none: a fixed corner
- **degrees_of_freedom**: 0 once glued. A dry joint has 1: it can only slide apart at right angles to the tail board's face, the way it was assembled; a half-blind joint can only move towards the inside of the box.
- **special_behaviour**: 
  - none of the listed behaviours: it is a fixed joint. Its clever part is that the shape alone resists pulling in one direction, so it 'locks together even without glue' (woodgears.ca) and is 'difficult to pull ... apart and virtually impossible when glue is added' (Wikipedia)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the flared tails lock against pulling along the tail board, in one direction only
  - material bond (glue, solvent or melting): wood glue on the long-grain faces; in woodgears.ca's tests the dovetails 'failed along the glue line' for the most part, or the wood of the pins sheared off
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: when glued, the usual case. A dry-fitted dovetail can be tapped apart during fitting, and an unglued one still holds together by shape, so it counts as semi-permanent while dry.
- **reuse_cycles**: once when glued; a few times while dry-fitting, though every fit crushes the wood fibres a little and loosens a hand-fitted joint ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: By hand: a dovetail saw, bench chisels, a mallet, a marking gauge, a marking knife, a square, and a sliding bevel or dovetail marker set to the chosen slope (Woodcraft, excerpt from Gary Rogowski; Fine Woodworking). By machine: a router with a dovetail bit and a dovetail jig, some with a bearing-guided bit or a template guide bushing (WWGOA; woodgears.ca), or a bandsaw with jigs (woodgears.ca); a CNC router needs special setups ⚑ [uncertain]. Glue and clamps. *(⚑ parts need confirming)*
- **seal**: dust-resistant: a tight, glued corner keeps dust out, but nothing in the joint makes it watertight ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: medium to heavy: very strong against pulling a drawer front off its sides, the direction the tails lock. But 'the dovetails are useful only for pulling from one piece, but not the other', and in woodgears.ca's tests glued box joints of the same width were as strong or stronger; the weak spot is the narrow root of each tail ('the tails have an inherent weak spot at their narrow base'), or the pins shearing off (woodgears.ca). In corner-bending tests on boards 10 cm wide and 2.7 cm thick, loaded 8 cm from the corner, dovetails averaged 162 lb on the scale (about 490 lb, or 220 kg, at the joint, since the rig multiplied the reading by three), about two-thirds of the best box joints (woodgears.ca).
- **adjustable**: no: once cut and glued it cannot be adjusted. While fitting, hand-cut joints are pared until they fit, and router-cut ones are tuned by changing the bit depth (WWGOA).
- **play_and_precision**: None when well cut and glued. By hand, the fit is made 'one tail at a time', looking for 'the shiny spots that indicate where a joint is rubbing' and paring them (Woodcraft, Rogowski). With a router jig, a loose joint means raise the bit and a tight joint means lower it, adjusted with test cuts (WWGOA). The joint sets the corner square; it tolerates no misalignment.
- **access_needed**: both sides: both boards must be reachable to tap the joint together and clamp it; a half-blind dovetail can only be assembled from the inside of the box
- **materials**: Mainly wood, both softwood and hardwood; drawer sides are often made from closed-grain woods such as white birch, which tear out less when routed (WWGOA). Traditional slopes are 1:6 for softwoods and 1:8 for hardwoods (Wikipedia). Dovetail shapes are also used in metal (machine-tool slides, jet-engine turbine blade roots), masonry (lighthouses) and 3D printing (Wikipedia), though these are mostly sliding dovetails. Laser-cut dovetails have been made in 6 mm bamboo laminate with chisel finishing (Hackaday.io). 3D-printed dovetails work in PLA, PETG or ABS (BOSL2; Hubs prefers ABS over PLA for interlocking joints).
- **maker_difficulty**: hard by hand: 'a difficult joint to make manually, requiring skilled workmanship' (Wikipedia); moderate with a router jig, which is 'fairly easy if you know the tricks' (WWGOA); hard on a laser cutter or 3-axis CNC because the pins need faces angled out of the sheet's plane (Hackaday.io)

### Making it

- **processes**: 
  - woodwork: hand-cut with saw and chisel, or machine-cut with a router and dovetail jig, or on a bandsaw (Fine Woodworking; WWGOA; woodgears.ca)
  - CNC: 'dovetail joint made by a shaping machine', with rounded socket ends left by the round cutter (Commons 'Joinery-throughdovetail cnc.svg') ⚑ [uncertain for hobby CNC routers]
  - laser cut: only with extra chisel work after cutting (Hackaday.io 'Laser-cut Dovetail Enclosures'), or as flat dovetails that join sheets edge to edge in the same plane (Boxes.py dovetail edge)
  - 3D print (FDM): printed as separate parts; parametric dovetails in BOSL2 and printable teaching models (Printables)
  - 3D print (resin): possible for small parts with tighter clearances (Hubs: 0.2 mm for SLA) ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the tail and pin parts are printed separately and slid or tapped together
- **making_tips_3d_printing**: 1) For a printed box, a one-piece print or a sliding dovetail is usually more practical; corner dovetails are mainly printed as teaching models, puzzle boxes ('impossible dovetail' boxes on Printables) or to join panels too big for the bed ⚑ [uncertain]. 2) Print each part flat so the tails and pins lie in the plane of the layers: 'like wood, FFF prints are stronger in one direction than another' (Prusa), and the narrow root of a tail is the weak spot even in wood (woodgears.ca), so a tail printed standing up could snap along a layer line there ⚑ [uncertain]. 3) Clearance: Hubs gives 0.5 mm for FDM interlocking joints (0.2 mm for SLA and SLS); Prusa printers are accurate to at least 0.2 mm; in BOSL2's dovetail() the $slop setting widens and deepens the socket to leave a gap on 'each of the three sides'. 4) Slope: BOSL2 defaults to 1:6 and notes 'standard woodworking slopes are 4, 6, or 8'; steeper tails lock better but have thinner roots. 5) Chamfer or round the edges so parts slide together, and use elephant's foot compensation so the first layer doesn't widen the tails (Prusa; Hubs). 6) Print a small test piece first to find the clearance for your printer (e.g. 'Test piece for dovetail joint' on Printables). 7) Hubs prefers ABS over PLA for interlocking joints because it is more ductile; PETG is a common tough alternative ⚑ [uncertain]. 8) If gluing, remember glue needs a thin, even gap; a joint printed very tight may scrape glue off as it goes together (general joinery advice from Craftgineer for laser-cut joints) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Dovetail router bits in several angles, such as 7°, 9° and 14°; jigs typically 'suggest ... we use a 14º-dovetail router bit to make the tails and a straight bit to cut the pins' (Popular Woodworking), and some jigs come with a bearing-guided bit so no template bushing is needed (WWGOA); router template guide bushings (woodgears.ca); dovetail jigs for half-blind and through dovetails, e.g. Leigh (brand) and Woodhaven (brand) (Fine Woodworking; WWGOA); dovetail saws, chisels and dovetail markers or gauges for 1:6 and 1:8 slopes (printable versions on Printables); wood glue.
- **rules_of_thumb**: 
  - Slope: typically 1:6 for softwoods and 1:8 for hardwoods, with 1:7 as a compromise, but 'a different slope does not affect the strength of the joint in different types of wood' (Wikipedia). 1:6 is about 9.5° and 1:8 about 7.1° (arctangent of 1/6 and 1/8). Forest Products Laboratory tests on angles from 7.5° to 17.5° 'showed no difference in joint strength', and antique furniture ranges from 7° to 14° (1:4), so choose by eye (Woodcraft, Chris Hedges).
  - Router jigs 'suggest ... a 14° dovetail router bit' for the tails and a straight bit for the pins; one experienced maker uses 12° for everything and has seen no failures (Popular Woodworking, Glen D. Huey, 2008).
  - Half-blind lap: for a 3/4 in (19 mm) drawer front, make the tails about 5/8 in (16 mm) long, leaving a 1/8 in (3 mm) lap; thicker looks clunky and thinner risks chiselling through; keep the same 5-to-1 ratio for other thicknesses (Christian Becksvoort, Fine Woodworking #250, 2015).
  - Alternative hand-cut layout: gauge the lap at about three-quarters of the drawer front's thickness, set the slope between 1:5 and 1:8, and make tails two to three times the size of the pins, keeping pins wide enough to chop out easily (Gary Rogowski, 'The Complete Illustrated Guide to Joinery', 2002, excerpted by Woodcraft).
  - Cut the tails first and use them as a template to mark the pins (Fine Woodworking, Becksvoort; Woodcraft, Rogowski).
  - Set the baseline on the pin board so the pins come out very slightly longer than the side is thick, then plane or sand them flush after assembly (Becksvoort, Fine Woodworking); Rogowski gauges 'just less than the thickness of the drawer side' on the inside face of the front, so check which result you want.
  - Router jig half-blinds are cut in one pass with both boards clamped in the jig; loose joint, raise the bit; tight joint, lower the bit. Make drawer heights a multiple of the jig's tail spacing (7/8 in on centre for the author's jig) so there is a half pin at the top and bottom (WWGOA, Bruce Kieffer, 2010).
  - Strength: a box joint with the same contact area would probably lose to a dovetail, but box joints are easier to make with more fingers going right through, and in two sets of tests glued box joints matched or beat dovetails; the dovetail's weak spot is the narrow base of each tail (woodgears.ca).
  - 3D printing: BOSL2 dovetail() defaults to slope 6 (1:6); its $slop value increases the socket width by twice $slop and its depth by $slop (BOSL2 joiners.scad). Hubs gives 0.5 mm clearance for FDM interlocking joints.
  - Laser cutting: the tails can be cut as V-shaped openings, but 'the pins require surfaces angled outside the plane of the laser'; cut the pins as rectangular tabs as wide as the widest part of the tail opening, notched at the base to the narrowest width, with etched guide lines, then split off the waste triangles with a chisel; this works best in thick material with a grain, such as 6 mm bamboo (Hackaday.io, Mark Wilson, 2020).

### When to use it

- **everyday_examples**: 
  - The front corners of good-quality wooden drawers, where half-blind dovetails join the sides to the front (Wikipedia; WWGOA)
  - Wooden tool chests, blanket chests and jewellery boxes with through dovetails showing at the corners (Wikipedia; Commons 'My first handcut dovetails!.jpg')
  - Log houses and barns with dovetail-notched log corners (Wikipedia 'Dovetail joint' mentions log buildings; Commons category 'Dovetail joints' has many photos), and dovetailed cast-iron parts of the Iron Bridge in Shropshire (Commons files 'Ironbridge2.jpg' and 'Details of the Iron Bridge' in that category) ⚑ [uncertain]
  - Its sliding cousin on gun-sight rails, machine-tool slides and 3D-printed parts that are split to fit the printer (Wikipedia) *(⚑ parts need confirming)*
- **when_to_use**: Use a dovetail when a corner will be pulled hard in one direction, as a drawer front is every time the drawer is opened, and you want the joint to hold by its shape as well as by glue (Wikipedia; WWGOA). Choose a half-blind dovetail when the front must look plain, as on a drawer front, and a through dovetail for boxes, chests and carcasses where showing the joint is part of the look; dovetails 'have become a signature of craftsmanship and are generally considered a feature' (Wikipedia). With a router jig it is quick enough for batches of drawers (WWGOA). It is also a good hand-tool skill project, and a printed dovetail marker helps with layout.
- **when_not_to_use**: Skip it when strength is the only goal: with modern wood glues a box joint is as strong or stronger and much quicker to cut, and 'the main reason to use dovetail joints nowadays is for their looks' (woodgears.ca). Nailed or screwed rabbet joints are enough for many shop drawers (woodgears.ca). Avoid corner dovetails on a laser cutter or 3-axis CNC unless you are ready for extra hand work, because the pins need angled faces (Hackaday.io); use a finger joint, tab-and-slot or T-slot joint instead. If the parts must come apart again, use knock-down fittings, a T-slot bolt joint or a sliding dovetail without glue. For joining a shelf into the middle of a side panel, or for a slide that must move, use a sliding dovetail. For a fully hidden corner, use a secret mitred dovetail or a mitre with splines ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: A dovetail's shape keeps holding even if the glue weakens, but the glue still decides long-term strength outdoors: standard PVA 'will not stand up well to moisture', 'Titebond III' (brand) is waterproof, and epoxy and polyurethane glues are waterproof (Rockler). White PVA glue creeps most under long-term load (Woodcraft glue guide). Wood shrinks and swells with humidity; in a box corner the grain of both boards usually runs the same way round the box, so they move together ⚑ [uncertain]. Softwood fibres crush more easily, which is one reason softer woods were given steeper tails (Wikipedia; Woodcraft) ⚑ [uncertain]. 3D-printed PLA dovetails soften in heat; use PETG, ASA or PC for hot or outdoor parts (Prusa). *(⚑ parts need confirming)*
- **safety_notes**: Sharp chisels and saws cause most hand-tool injuries; keep both hands behind the cutting edge and clamp the work ⚑ [uncertain]. Router jigs: the dovetail bit can't be lifted out of the cut mid-pass without damaging the work, so keep the router base flat on the jig and switch off before lifting ⚑ [uncertain]. Table-saw or bandsaw methods need normal guarding and push sticks (OSHA table saw eTool). Wood dust irritates the lungs; use extraction ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Gaps at the baseline or between tails and pins from sawing off the line or chopping past the gauge line; saw on the waste side, and for half-blinds don't make the lap thinner than about 1/8 in on a 3/4 in front or you may chisel through (Fine Woodworking). 2) Split boards from forcing a tight joint together; fit one tail at a time and pare the shiny rubbing spots (Woodcraft, Rogowski). 3) Weak, narrow tails or thin pins that shear off under load (woodgears.ca). 4) Router-jig joints too loose or too tight until the bit depth is tuned with test cuts; tear-out in open-grained woods (WWGOA). 5) Drawer parts sized so there is no half pin at the top or bottom, which looks wrong and leaves a weak partial tail (WWGOA). 6) Printed tails snapping at their narrow roots, or printed joints that won't close because of elephant's foot (Prusa) ⚑ [uncertain]. 7) Assembling a half-blind drawer from the wrong side, or gluing it up out of square ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Finger joint (box joint): straight fingers instead of flared ones; as strong or stronger when glued and much easier to cut, but it doesn't lock by shape (woodgears.ca)
  - Sliding dovetail: a flared tongue that slides along a matching groove, for shelves, drawer bottoms and slides; it locks against pull-out but still slides lengthwise
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): printed dovetails used to join sections of a model that is too big for the printer
  - Butterfly key (bow-tie key): a separate double-dovetail insert that locks two boards across a joint or crack
  - Mortise and tenon: the main alternative for frames (legs and rails) rather than box corners
  - Japanese interlocking joints (splices and three-way corners): other joints that lock by shape alone, often with wedges or pegs
  - Tab-and-slot joint and T-slot joint: flat-sheet alternatives that a laser cutter can make directly
  - Knock-down cam-lock and cross-dowel connectors: for furniture that must come apart

### Pictures, videos and models

- **links**: 
  - [Joinery-throughdovetail.svg (Wikimedia Commons, by SilentC; SVG by Duncan Tate)](https://commons.wikimedia.org/wiki/File:Joinery-throughdovetail.svg): Exploded 3D drawing of a through dovetail, with tails on one board and pins on the other; used on the Wikipedia 'Dovetail joint' article *(licence: CC BY-SA 3.0)*
  - [Joinery-halfblinddovetail.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Joinery-halfblinddovetail.gif): Exploded 3D drawing of a half-blind dovetail, showing how the sockets stop short of the front face to hide the tails *(licence: CC BY-SA 3.0)*
  - [Joinery-throughdovetail cnc.svg (Wikimedia Commons, derived from SilentC and Duncan Tate by Westbahnhof)](https://commons.wikimedia.org/wiki/File:Joinery-throughdovetail_cnc.svg): Drawing of a machine-made ('shaping machine') dovetail with rounded socket ends as left by a round cutter, for comparison with the hand-cut shape *(licence: CC BY-SA 3.0)*
  - [EB1911 Joinery - Fig. 3. Dovetails (Wikimedia Commons, from the 1911 Encyclopaedia Britannica)](https://commons.wikimedia.org/wiki/File:EB1911_Joinery_-_Fig._3.%E2%80%94Dovetails.jpg): Historic line drawing of dovetail joints from the 'Joinery' article of the 1911 Encyclopaedia Britannica *(licence: Public domain)*
  - [How to Layout Dovetails with Equal Pins (YouTube, Paul Sellers)](https://www.youtube.com/watch?v=tZfZ9qNKkks): Video demonstration of laying out a set of dovetails with equal-sized pins by hand *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [1:8, 1:6 and Dual Dovetail Markers (Handy Handcrafts, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/945051-18-16-and-dual-dovetail-markers): Printable layout markers for 1:6 and 1:8 dovetails, plus a dual marker; STEP files included; print text-side down in PLA. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Parametric Dovetail Markers (scruss, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/247243-parametric-dovetail-markers): A full set of 25 × 50 mm dovetail markers from an OpenSCAD model, made for a hand-tool woodshop; print label side down. Read through the Printables public API. *(licence: CC BY-SA)*
  - [dovetail joint - rybinový spoj (STSUL.CZ, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/406934-dovetail-joint-rybinovy-spoj): A printable school teaching model of a carpentry dovetail joint that stands on its own when assembled; print in two colours. Read through the Printables public API; exact dovetail type not confirmed ⚑ [uncertain]. *(licence: CC BY)*
  - [Test piece for dovetail joint (MrSpaceman, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/984253-test-piece-for-dovetail-joint): A small FreeCAD test piece for finding how much gap a printed dovetail needs on your printer. Read through the Printables public API. *(licence: CC BY-SA)*
  - [BOSL2 joiners.scad: dovetail() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): Parametric male and female dovetails with adjustable width, height, slope (default 1:6), taper, chamfer or rounding, and a $slop clearance for printing *(licence: BSD 2-Clause)*
  - [Laser-cut Dovetail Enclosures (Mark Wilson, Hackaday.io, 2020)](https://hackaday.io/project/170065-laser-cut-dovetail-enclosures): A method with photos for making real corner dovetails on a laser cutter: V-shaped tail openings plus notched pin tabs with etched guide lines that are finished with a chisel *(licence: link only)* *(⚑ parts need confirming)*
- **diagram_idea**: An exploded view of a drawer corner showing the side's flared tails and the front's wedge-shaped pins, with a green arrow for the one direction the joint slides together, a red crossed-out arrow for the pull direction it resists, and a small side-by-side of through versus half-blind showing the lap that hides the tails.
- **sources**: 
  - https://en.wikipedia.org/wiki/Dovetail_joint
  - https://commons.wikimedia.org/wiki/File:Joinery-throughdovetail.svg
  - https://commons.wikimedia.org/wiki/File:Joinery-halfblinddovetail.gif
  - https://commons.wikimedia.org/wiki/File:Joinery-throughdovetail_cnc.svg
  - https://commons.wikimedia.org/wiki/File:EB1911_Joinery_-_Fig._3.%E2%80%94Dovetails.jpg
  - https://commons.wikimedia.org/wiki/File:My_first_handcut_dovetails!.jpg
  - https://commons.wikimedia.org/wiki/File:Maschinenzinken1.jpg
  - https://commons.wikimedia.org/wiki/File:Offenezinken1.jpg
  - https://woodgears.ca/dovetail/dovetail_vs_boxjoint.html
  - https://woodgears.ca/dovetail/strength.html
  - https://www.finewoodworking.com/project-guides/joinery/half-blind-dovetails-cut-by-hand
  - https://www.woodcraft.com/blogs/cabinetry-furniture-making/making-hand-cut-half-blind-dovetails
  - https://www.woodcraft.com/blogs/magazine/expert-answers-proper-angles-for-dovetails
  - https://www.popularwoodworking.com/article/my-take-on-dovetail-angles/
  - https://www.wwgoa.com/post/routed-half-blind-dovetail-drawers-part-1
  - https://hackaday.io/project/170065-laser-cut-dovetail-enclosures
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/edges.py
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://craftgineer.com/blog/laser-cut-finger-joint-boxes
  - https://www.rockler.com/learn/understanding-wood-glue
  - https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues
  - https://www.osha.gov/etools/machine-guarding/saws/table
  - https://www.youtube.com/watch?v=tZfZ9qNKkks
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
- **tools**: none, press or vice, power tools, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…a bandsaw with jigs (woodgears.ca); a CNC router needs special setups [uncertain]. Glue and clamps.…"*
- **load_max**: heavy
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, processes, reuse_cycles, safety_notes, seal, tools_needed, when_not_to_use

## 246 Sliding dovetail

*interlocking joints & joinery.* A flared tongue that slides along a matching flared groove, locking against pull-out while still sliding lengthwise

### What it is

- **plain_name**: A long tongue with sloping sides that slides into a matching groove with sloping sides, so the two parts can only slide apart lengthwise and can't be pulled straight apart
- **term**: Sliding dovetail (dovetail housing joint)
- **aliases**: 
  - dovetail housing, dovetail housing joint, housed dovetail (UK and school woodwork terms; DT Online 'Housing Joint'; Sawmill Creek)
  - dovetail dado, dovetail groove, dovetail slot and tail
  - French dovetail (a stopped sliding dovetail used in drawer construction; Wikipedia 'Dovetail joint')
  - stopped sliding dovetail, blind sliding dovetail (the groove stops short of the front edge so the joint is hidden)
  - tapered sliding dovetail (the tongue and groove get narrower towards the back so the joint only tightens at the end; Fine Woodworking; Rockler)
  - half dovetail housing, single-sided sliding dovetail (only one side of the groove is angled; DT Online)
  - sliding dovetail batten (a batten slid into a dovetail groove under a tabletop to keep it flat)
  - dovetail rail, dovetail slide, dovetail mount (maker and 3D-printing names for the same shape used as a slide-on mount; Wikipedia 'Dovetail joint'; Printables)
- **family**: interlocking joints & joinery
- **other_families**: sliding, telescoping & linear motion, quick-release & tool-free
- **one_liner**: A flared tongue on one part slides into a matching flared groove in the other, locking the parts so they can't be pulled apart sideways while still letting them slide along the groove, as used to hold shelves in bookcases or slide-on mounts together.
- **complexity**: Single feature pair on two parts: a groove with angled walls (the socket or housing) cut into one part, and a matching angled tongue (the tail) on the end or face of the other; optionally glue, a stop at the end of the groove, or a screw or pin to stop it sliding out (Rockler 'Making Sliding Dovetail Joints'; Wikipedia 'Dovetail joint').
- **how_it_works**: The groove is wider at the bottom than at the top, and the tongue is shaped to match, so once the tongue is in the groove it is trapped and can't be lifted or pulled straight out; the wood (or plastic) would have to crush or break first (Rockler 'Making Sliding Dovetail Joints'). The only way in or out is to slide the tongue along the groove from one open end, so the joint holds against pulling apart in every direction except that one (BOSL2 joiners.scad; DT Online 'Housing Joint' notes that angled housing edges stop sideways forces pulling a shelf out). Glue, a taper that wedges tight at the end of the slide, or a stop keeps it from sliding out lengthwise; left unglued, it lets a tabletop or panel expand and shrink while staying flat (Rockler; Fine Woodworking 'Tapered Sliding Dovetails Are Easier than You Think').

### Finder attributes

- **job**: 
  - join and hold: fixes shelves, partitions, tops and drawer fronts to case sides so they can't pull out (Wikipedia 'Dovetail joint'; Rockler)
  - let it move (turn, slide or bend): left unglued it acts as a slide, e.g. drawer runners, extension-table slides, slide-on mounts, or a batten that lets a tabletop swell and shrink (Rockler)
  - line parts up exactly: the interlocking shape pulls slightly bowed panels into line and keeps shelves square (Rockler)
- **motion**: slide: along the groove only, in one straight line; this sliding is used for assembly, for slide-on mounts and runners, or to let wood move; once glued, pinned or wedged by a taper it becomes a fixed joint (none)
- **degrees_of_freedom**: 1 while unglued: the tongue can only slide along the groove; all other movements are blocked by the angled walls (BOSL2 joiners.scad: the dovetail slides together along one axis). 0 once glued, stopped at the end, or wedged tight by a tapered tongue.
- **special_behaviour**: 
  - self-aligning or self-centring: the angled walls pull the two parts into line as they slide together; a tapered sliding dovetail slides freely until the last moment and then wedges tight, and tight sliding dovetails can pull slightly bowed panels straight (BOSL2 dovetail(); Fine Woodworking; Rockler)
  - quick-release: when left dry, slide-on versions (3D-printed mounts, sight rails, removable fence holders) can be slid off and back on without tools (Printables 'Sliding Dovetail' by Rentsch, read via API; Wikipedia 'Dovetail joint' on dovetail sight rails)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the flared tongue is trapped by the undercut groove (Rockler)
  - material bond (glue, solvent or melting): woodworking versions are often glued, but only near the front on wide solid-wood parts so the rest can move (Rockler)
  - friction or clamping (force-fit): a tapered tongue wedges tight at the end of its travel and a tight fit holds by friction (Fine Woodworking; BOSL2 dovetail())
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable when dry (slides back out along the groove, e.g. unglued battens, slide-on mounts and 3D-printed modular drawers); permanent when glued along its length, as in many shelf and case joints (Rockler; Printables 'Modular Workbench Drawers – Dovetail Sliding System', read via API)
- **reuse_cycles**: many times when left dry (slide-on mounts, modular printed parts) though printed or wooden rails slowly wear and loosen ⚑ [uncertain]; once when glued *(⚑ parts need confirming)*
- **tools_needed**: Woodwork: a router with a dovetail bit (in a router table or with a guide or jig), a straight bit to clear most of the waste first, clamps, a mallet and glue (Fine Woodworking 'How to Cut Sliding Dovetail Joints'); or hand tools: saw, chisel and a guide block cut to the dovetail angle (DT Online 'Housing Joint'). 3D printing and CNC: CAD with a dovetail feature (e.g. BOSL2 dovetail()) or a CNC router with a dovetail cutter; none to assemble, just slide together.
- **seal**: none: it is not designed to seal
- **load**: Medium to heavy for its size: very strong against pulling the tongue straight out of the groove (tension) and against sideways shear, because the wood must crush or break before the parts separate (Rockler). Weak along the sliding direction unless glued, stopped or tapered. Wider tongues resist racking (twisting a shelf out of square) better (Brian Holcombe, Sawmill Creek 'Dimensioning sliding dovetails'). A deep groove weakens the grooved part itself, so keep it shallow (see rules_of_thumb).
- **adjustable**: no, apart from position along the slide when left unglued; a tapered sliding dovetail is set by how far it is driven in
- **play_and_precision**: none to small: a well-fitted tongue slides in 'with just a little hand pressure' (WWGOA) and a tapered one has no play once home (Fine Woodworking). Printed versions have a small designed gap, e.g. 0.15 mm (Printables 'Python - Dovetail Test Pieces', read via API) to about 0.3 mm (Thingiverse 'Sliding Dove Tail Storage Box'). The smaller the dovetail angle, the more precise the fit must be (Popular Woodworking 'How to make a Sliding Dovetail'). Tolerates little misalignment: a long straight joint can jam part-way if the fit or glue swells it (Fine Woodworking).
- **access_needed**: one side only (blind): the parts slide together from one open end of the groove, so you need clear space along the slide line about as long as the joint, but no access to the back (BOSL2 dovetail() 'entry_slot_length').
- **materials**: Solid wood is the classic material (hardwoods and softwoods; slope 1:6 for softwoods and 1:8 for hardwoods is traditional; Wikipedia 'Dovetail joint'). Also 3D-printed plastics (PLA and PETG in maker designs; Printables 'Modular Workbench Drawers'), resin (Formlabs says dovetails suit SLA parts with sharp edges), and metal (machine-tool dovetail slides, jet-engine blade roots and dovetail sight rails on airguns; Wikipedia 'Dovetail joint'). Not suited to thin sheet (laser or flat CNC cutting can't make the angled walls without a dovetail cutter).
- **maker_difficulty**: moderate in wood: needs a router with a dovetail bit and careful trial-and-error fitting to get a tongue that slides in by hand (WWGOA; Fine Woodworking). Easy in 3D printing: a CAD dovetail feature or library (BOSL2) and a small test print to tune the gap.

### Making it

- **processes**: 
  - woodwork: the main use; router table or hand-held router with a dovetail bit, or hand tools (saw, chisel, guide block) (Fine Woodworking; DT Online)
  - CNC: a CNC router can cut the groove with a dovetail cutter; dovetail cutters can't plunge, so waste is cleared first with a straight bit (Fine Woodworking describes the same order on a router table; CNC-specific practice ⚑ [uncertain])
  - 3D print (FDM): slide-together rails, lids, modular drawers and mounts (Printables; Thingiverse)
  - 3D print (resin): dovetails suit SLA's sharp edges and smooth surfaces (Formlabs)
  - off-the-shelf part: dovetail router bits (typically 7 to 14 degrees; Popular Woodworking) and ready-made dovetail rails and slides *(⚑ parts need confirming)*
- **print_in_place**: no: the tongue and groove are printed as separate parts and slid together; printed in place they would fuse unless given a large gap, which would make the joint loose (Hubs clearance guidance)
- **making_tips_3d_printing**: 1) Clearance: design a small gap on each of the three contact faces. Proven FDM designs use 0.15 mm (Printables 'Python - Dovetail Test Pieces': parts should 'slide together with little effort', not with a mallet) to about 0.3 mm (Thingiverse 'Sliding Dove Tail Storage Box'); Hubs suggests 0.5 mm for FDM interlocking parts in general, 0.2 mm for SLA and SLS; Formlabs recommends at least 0.4 mm for SLA assemblies. Print a small test piece first. 2) Calibrate flow: over-extrusion is the usual reason printed dovetails won't slide together (Printables 'Python - Dovetail Test Pieces'). 3) Orientation: print long rails lying flat with the dovetail pointing up or with the slide axis vertical, so the angled flanks are gentle overhangs; a tongue lying on its side makes the upper flank a steep overhang. Prusa says overhangs of 45-60 degrees (from vertical) print cleanly without support; a modular drawer design prints its 'dovetail rails printed horizontally' with no supports (Printables 'Modular Workbench Drawers', read via API). 4) Chamfer or round the corners of the tongue and groove so they start easily and don't catch on elephant's foot (BOSL2 dovetail() chamfer and radius options; Hubs: a small radius on edges helps assembly and reduces stress). 5) For long joints, taper the tongue and groove slightly so the joint slides freely and only wedges tight when fully home (BOSL2 dovetail() taper option; Printables 'Bucket Handle Replacement With Tapered Sliding Dovetail Joint'). 6) Leave room at one end for the tongue to enter (BOSL2 'entry_slot_length'), or add a small snap nub to stop it sliding out (Printables 'Sliding Dovetail Cable Label' latches with small nubs). 7) Material: PLA or PETG are used in published designs; layer bonds are the weak direction (PLA layer adhesion about 55% of flat strength in CNC Kitchen's test), so keep the pulling load along the layers where possible.
- **off_the_shelf_parts**: Dovetail router bits (sold by angle, e.g. 7, 8, 9, 10 or 14 degrees, and width, e.g. 1/2 in.; Popular Woodworking; WWGOA) with a matching straight bit for waste removal (Fine Woodworking); sliding dovetail jigs and router templates, including ones whose guides can be set to a taper ⚑ [uncertain]. For metal and mounts: 'dovetail slides' and 'dovetail rails' (e.g. 11 mm airgun/rimfire sight rails; Wikipedia 'Dovetail joint'). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Dovetail slope: typically 1:6 for softwoods and 1:8 for hardwoods, with 1:7 as a compromise (Wikipedia 'Dovetail joint'); BOSL2 dovetail() defaults to 1:6 and lists 1:4, 1:6 and 1:8 as standard (BOSL2 joiners.scad).
  - Router dovetail bits range from 7 to 14 degrees; 14 degrees, 1/2 in. wide is the standard half-blind dovetail jig bit; the smaller the angle, the more precise the fit must be (Popular Woodworking 'How to make a Sliding Dovetail').
  - Groove depth: set the bit height to about 1/3 of the thickness of the grooved board (WWGOA 'Making Sliding Dovetails'); for tabletops keep it to 1/3 at most, because a deeper trench removes too much strength (Brian Holcombe, Sawmill Creek 'Dimensioning sliding dovetails').
  - Length: a straight (untapered) sliding dovetail is a very strong joint under about 6 in. long; for longer joints switch to a tapered one (Rockler 'How to Cut a Sliding Dovetail', Center for Furniture Craftsmanship). Timothy Rousseau uses tapered sliding dovetails on solid-wood cases deeper than 10-12 in. (Fine Woodworking 2015).
  - Glue: on wide solid-wood parts glue only the front end, which directs the panel's seasonal movement to the back; battens under tabletops go in unglued (Rockler 'Making Sliding Dovetail Joints').
  - Fit: take light cuts from both sides until the boards just fit together by hand (Fine Woodworking 2009); on a router table cutting both sides, moving the fence 1/32 in. changes the fit by 1/16 in. (WWGOA).
  - 3D-printed clearance: 0.15 mm per face slides together with little effort on a well-calibrated printer (Printables 'Python - Dovetail Test Pieces'); about 0.3 mm is a safe general value (Thingiverse 'Sliding Dove Tail Storage Box'); Prusa printers are accurate to about 0.2 mm and moving fits should start at 0.3 mm or more (Prusa knowledge base 'Modeling with 3D printing in mind').

### When to use it

- **everyday_examples**: 
  - Shelves slid into the sides of solid-wood bookcases and cabinets (Wikipedia 'Dovetail joint'; Rockler)
  - Drawers whose front overlaps the sides, with the sides slid into dovetail grooves in the front (WWGOA)
  - Iron sights and telescopic sights slid onto the dovetail rail of an air rifle (commonly 11 mm or 3/8 in.) (Wikipedia 'Dovetail joint')
  - 3D-printed stackable storage drawers and slide-on organiser mounts that slide together (Printables 'Modular Workbench Drawers – Dovetail Sliding System')
- **when_to_use**: Use a sliding dovetail when one part meets another in the middle of a board rather than at its end, and must not pull away: shelves, partitions and tops in solid-wood cases, drawer fronts, table aprons, and battens that keep a tabletop or lid flat while letting it move with the seasons (Wikipedia 'Dovetail joint'; Rockler). It is handy for assembly because the parts stay linked without clamps (Rockler). In 3D printing and CAD it is a simple way to make slide-on mounts, lids, modular boxes and rails that come apart again, or to join large prints (Printables; BOSL2).
- **when_not_to_use**: Avoid it when you can't get clear space to slide the parts in from one end; use a dowel, biscuit or screwed joint instead. For long joints in wood, don't use a straight sliding dovetail: it can swell with glue and jam part-way; use a tapered sliding dovetail (Fine Woodworking; Rockler). For a precise, adjustable machine slide use a dovetail slide with a gib strip, which can be tightened to remove play. For a thin panel, a deep groove weakens it too much; use a shallow dado (housing) with screws or a tongue-and-groove instead (Sawmill Creek). If parts must separate and rejoin quickly under load, a quick-release clamp plate is easier than a sliding fit.
- **environment_limits**: Wood swells and shrinks with humidity, mostly across the grain and very little along it (0.1-0.2% along the grain from green to ovendry; USDA Wood Handbook ch. 4), so a joint glued along its full length across a wide board can crack the board; glue only the front (Rockler). Glue makes the joint swell during assembly and can jam it (Fine Woodworking). Unglued tapered battens can work loose on surfaces that vibrate when humidity swings a lot (Stanley Covington, Sawmill Creek). Printed PLA softens at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen), so printed slides can deform in a hot car; printed plastic under constant load may also creep and loosen ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Router safety: a dovetail bit can't plunge, so clear most of the waste first with a straight bit (Fine Woodworking); on a router table, setting the fence so the bit cuts on the wrong side can 'jerk your workpiece forward' (Popular Woodworking). Tapping a tight joint apart with a hammer can split the parts (Fine Woodworking). Otherwise none known.
- **common_failures**: Jamming part-way during glue-up because glue swells the wood, especially on wide parts; prevent it with a tapered joint or a dry run (Fine Woodworking). Too loose a fit, which weakens the joint and looks sloppy (Fine Woodworking). Tear-out along the edge of the groove from the router; score the shoulder line first (Popular Woodworking). A groove cut too deep, which weakens or splits the grooved board (Sawmill Creek). Cracked panels from gluing the full length across the grain (Rockler). In 3D prints: over-extrusion or elephant's foot making the parts too tight to slide, fixed by calibrating flow, chamfering edges or sanding (Printables 'Python - Dovetail Test Pieces'); a printed fit that is too loose slides past its intended stop (Printables 'Bucket Handle Replacement With Tapered Sliding Dovetail Joint').
- **related**: 
  - Dovetail joint (through and half-blind): the corner version with many pins and tails, locking in one direction at the end of boards
  - Tongue-and-groove joint and dado (housing) joint: a square tongue in a square groove; slides the same way but doesn't resist pulling apart
  - Dovetail slide with gib strip (dovetail ways): the machine-tool version, with an adjustable strip to remove play for precise sliding
  - Quick-release plate (camera plate, dovetail clamp): a dovetail plate gripped by a clamping jaw instead of slid in
  - Split-part joints for large prints: sliding dovetails are one way to join printed pieces
  - Butterfly key (bow-tie key): a separate double-dovetail key set into both parts instead of a tongue on one part
  - Mortise and tenon: a tongue in a hole, used where the joint is at the end of a rail
  - T-slot and aluminium extrusion T-nuts: another slide-in shape that is trapped in an undercut groove

### Pictures, videos and models

- **links**: 
  - [Joinery-slidingdovetail.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif): Animated diagram of a sliding dovetail tongue sliding into its groove *(licence: CC BY-SA 3.0 or GFDL 1.2 or later (dual licensed))*
  - [How to Cut A Sliding Dovetail (Rockler, video by Tim Rousseau, Center for Furniture Craftsmanship)](https://www.rockler.com/learn/how-to-cut-a-sliding-dovetail-video-by-cfc): Video of cutting a sliding dovetail with a plunge router and a router table, plus the rule of thumb on when to taper *(licence: link only)*
  - [Tapered Sliding Dovetails Are Easier than You Think (Fine Woodworking, Timothy Rousseau)](https://www.finewoodworking.com/2015/05/12/tapered-sliding-dovetails-are-easier-than-you-think): Photos of tapered sliding dovetails joining case sides to a top and a mid-span shelf *(licence: link only)*
  - [How to make a Sliding Dovetail (Popular Woodworking)](https://www.popularwoodworking.com/techniques/how-to-make-a-sliding-dovetail/): Step-by-step photos and drawings of cutting the groove and tongue on a table saw and router table *(licence: link only)*
  - [Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)](https://www.thingiverse.com/thing:5540647): Photos of a printed sliding dovetail demonstration piece made with the Round Anything OpenSCAD library *(licence: CC BY 4.0)*
- **make_it_yourself**: 
  - [BOSL2 joiners.scad: dovetail() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): Parametric male and female dovetails, straight or tapered, with slope or angle, chamfer or rounding, an entry slot and a $slop fit setting; works for sliding dovetails of any length *(licence: BSD 2-Clause)*
  - [Sliding Dovetail Demo (Customizable-ish) by DaveX (Thingiverse)](https://www.thingiverse.com/thing:5540647): Printable sliding dovetail demo with its OpenSCAD source, to try the fit and feel *(licence: CC BY 4.0)*
  - [Sliding Dove Tail Storage Box (Easy To Print) by akshay_d21 (Thingiverse)](https://www.thingiverse.com/thing:2524639): Small card box whose lid slides on dovetails, designed with about 0.3 mm tolerance *(licence: CC BY-NC-SA 4.0)*
  - [Python - Dovetail Test Pieces by humebeam (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1134808-python-dovetail-test-pieces): About 6 g of dovetail test pieces with 0.15 mm clearance to check flow and fit before printing a large dovetailed assembly *(licence: CC BY-NC)*
  - [Modular Workbench Drawers – Dovetail Sliding System by Vinors3DLab (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1678921-modular-workbench-drawers-dovetail-sliding-system): Stackable printed drawers that join on all sides with dovetail rails, printed without supports in PLA or PETG *(licence: CC BY-NC-SA)*
  - [5 Gallon Bucket Handle Replacement With Tapered Sliding Dovetail Joint by Jay Vee (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1749755-5-gallon-bucket-handle-replacement-with-tapered-sl): A two-part printed handle joined with a tapered sliding dovetail, remixed because the original fit was too loose *(licence: CC BY-NC-SA)*
  - [Sliding Dovetail by Rentsch (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1760779-sliding-dovetail): Screw-on printed sliding dovetail mount so a holder can be slid off and on again *(licence: Creative Commons Public Domain (as listed by Printables))*
- **diagram_idea**: A cut-away end view of a shelf's flared tongue sitting in a flared groove in a bookcase side, with a red arrow pulling the shelf straight out (blocked, marked with a cross) and a green arrow along the groove (the only way it can slide), plus a small inset of a tapered version getting tight only at the end of its travel.
- **sources**: 
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

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, off_the_shelf_parts, processes, reuse_cycles

## 247 Mortise and tenon (incl. wedged, drawbored and tusk tenons)

*interlocking joints & joinery.* A tongue (tenon) on one part fits a hole (mortise) in the other; wedges, offset pegs or a removable tusk wedge lock it

### What it is

- **plain_name**: A tongue on the end of one piece that fits snugly into a matching hole in the other piece, then is locked in with glue, a wooden peg, wedges or a removable wedge
- **term**: Mortise and tenon joint (including wedged, drawbored and tusk tenons)
- **aliases**: 
  - mortice and tenon (British spelling; Wikipedia 'Mortise and tenon')
  - M&T (woodworkers' shorthand)
  - through tenon, stub tenon, blind tenon, haunched tenon (Wikipedia)
  - pegged tenon, pinned tenon, treenail (trenail, trunnel) joint (Wikipedia)
  - drawbored mortise and tenon, drawbore, draw-bore (Popular Woodworking 'Drawboring Resurrected')
  - wedged tenon, wedged through tenon, fox-wedged (foxtail wedged) tenon (Popular Woodworking; Wikimedia Commons 'MortiseFoxTail.svg')
  - wedged half-dovetail mortise (Wikipedia)
  - tusk tenon, tusked tenon, keyed tenon, keyed through tenon, loose-wedge mortise and tenon (Woodsmith; Wood and Shop, Will Myers)
  - loose tenon, floating tenon, slip tenon; Domino (brand) for Festool's loose-tenon joiner (Wikipedia 'Domino joiner')
  - hammer joint (a laser-cut fox-wedge tenon with a built-in wedge; Lasersheets)
- **family**: interlocking joints & joinery
- **one_liner**: A tongue (tenon) cut on the end of one part is pushed into a matching hole (mortise) in the other part and locked in place, giving a strong, square joint for frames, chairs, tables and timber buildings.
- **complexity**: A few parts: the tenon (a tongue with shoulders, cut on the end of a rail), the mortise (a hole or slot in the other part, either through or blind), and a lock: glue; a wooden peg (pin) through both; one or two wedges driven into saw cuts in the tenon end; or, for a tusk tenon, a separate tapered wedge (tusk or key) through a slot in the protruding tenon (Wikipedia 'Mortise and tenon'; Popular Woodworking; Woodsmith).
- **how_it_works**: The tenon fits closely inside the mortise, so the joint can't slide sideways or twist, and the shoulders around the tenon bear on the face of the other part to keep the joint square and stiff against bending (Wikipedia 'Mortise and tenon'). On its own the tenon could pull straight out, so it is locked: glue bonds the tenon cheeks to the mortise walls; a drawbored peg goes through holes that are slightly offset, so driving the peg bends it and pulls the shoulders tight (Popular Woodworking 'Drawboring Resurrected'); wedges driven into saw cuts in a through tenon spread its end into a fan or dovetail shape inside a flared mortise so it can't pull back out (Popular Woodworking 'Wedged Mortise and Tenon'); and in a tusk tenon a tapered wedge driven through a slot in the protruding tenon bears on the outside face and pulls the shoulders tight, yet can be tapped out to take the furniture apart (Woodsmith).

### Finder attributes

- **job**: 
  - join and hold: joins rails to legs and stiles in chairs, tables, doors and timber frames (Wikipedia)
  - line parts up exactly: the shoulders seat against the other part and keep frames square (Wikipedia)
  - lock, and release by hand: a tusk tenon's wedge is tapped out with a mallet to take a trestle table or workbench apart, then driven back to lock it (Woodsmith)
  - tighten and hold tension: a drawbored peg or a tusk wedge pulls the shoulders tight and keeps the tenon in tension as the wood shrinks (Popular Woodworking; Woodsmith)
- **motion**: none: it is a rigid joint once locked
- **degrees_of_freedom**: 0 once glued, pegged or wedged. Before locking, the tenon can only slide straight in and out of the mortise (1 degree of freedom); the close fit and shoulders block every other movement.
- **special_behaviour**: 
  - tensioning (takes up slack and holds): the offset holes of a drawbore make the peg pull the joint tight and keep it tight during shrinkage; a tusk wedge pulls the shoulders against the post (Popular Woodworking 'Drawboring Resurrected'; Woodsmith)
  - self-locking (holds under load, won't back-drive): a shallow wedge (about 5 degrees on a tusk tenon) stays put under load; Woodsmith notes a vertical wedge is less likely to work loose. That this is friction self-locking is inferred, not stated by the source ⚑ [uncertain] *(⚑ parts need confirming)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): a flared wedged tenon or a peg or tusk wedge through the tenon mechanically stops it pulling out (Popular Woodworking; Woodsmith)
  - material bond (glue, solvent or melting): most furniture tenons are glued (Wikipedia; woodgears.ca tests)
  - friction or clamping (force-fit): a tight friction fit, and wedges or drawbore pegs that press the parts together (Wikipedia: 'glued or friction-fitted'; Popular Woodworking)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent for glued, wedged-through and glued drawbored tenons; removable for tusk (loose-wedge) tenons, where you tap out the wedge and pull the joint apart (Woodsmith), and for unglued pegged tenons whose peg can be driven out ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: once for glued and wedged tenons; many times for tusk tenons: Will Myers' Moravian workbench has been 'assembled and taken apart scores of times' over four years (Wood and Shop)
- **tools_needed**: Hand tools: mortise gauge, chisels (including a mortise chisel), backsaw, brace and bit or drill, mallet (Popular Woodworking 'The Indispensable Mortise & Tenon'); for drawboring, drawbore pins (tapered steel pins, which can be made from a machinist's alignment or drift pin) and riven oak pegs (Popular Woodworking 'Drawboring Resurrected'). Machine methods: hollow-chisel mortiser, plunge router with a template, slot mortiser, or a loose-tenon joiner such as the Domino (brand) (Wikipedia 'Domino joiner'; Popular Woodworking 'Wedged Mortise and Tenon'). Laser cutter or CNC router for sheet versions (Lasersheets). Glue and clamps for glued joints.
- **seal**: none: not designed to seal (ancient ship planks used pegged tenons, but the seal came from the planking fit, not the joint itself) ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: Heavy for its size: the strongest of the common furniture joints in bending. In Matthias Wandel's tests (spruce rail on a post, load 20 cm from the joint) glued mortise and tenons broke at an average of 172 lb (about 780 N), about 25% more than a three-dowel joint (135 lb), and in maple at 270-300 lb; screwed joints bent open long before failing (woodgears.ca 'Wood joint strength testing'). In a later test mortise and tenons were about twice as strong as pocket-hole joints (woodgears.ca). Strong in shear and bending; pull-out strength comes from the glue, peg or wedges, and a flared wedged through tenon is described as mechanically the strongest version because it spreads into a dovetail shape (Rockler / Center for Furniture Craftsmanship 'How to Make Kerfs and Wedges for Through Tenons'). Weak points: short grain beyond a peg or wedge slot in the tenon, which can split out (Woodsmith), and a post split along its grain if wedges are driven the wrong way (Woodcraft).
- **adjustable**: no for glued joints; a tusk tenon's wedge can be driven further to re-tighten a loose joint, though over-driving has split many tenons (Will Myers, Wood and Shop)
- **play_and_precision**: none once locked: the shoulders fix the angle and the lock removes play. Drawboring tolerates a loose-fitting tenon because the peg pulls it tight; only the shoulder fit needs care (Popular Woodworking 'Drawboring Resurrected'). In glued joints, the fit 'to the last few thousandth of an inch' made no detectable difference to strength as long as glue covered everything (woodgears.ca). 3D-printed versions need a designed gap, e.g. 0.5 mm for FDM (Hubs).
- **access_needed**: both sides for through, wedged and tusk tenons (the tenon end and wedges show on the far side and are driven from there); one side only (blind) for glued stub or loose tenons, which are assembled by pushing the parts together (Wikipedia; Woodsmith)
- **materials**: Mainly solid wood, hardwoods and softwoods; pegs traditionally from dry, straight-grained white oak (Popular Woodworking 'Drawboring Resurrected'); wedges from straight-grained wood, often a contrasting species (Popular Woodworking 'Wedged Mortise and Tenon'). Also stone (Stonehenge's sarsens) and metal by blacksmiths (Wikipedia). Sheet versions in birch plywood and MDF of 6 mm or more; very soft woods like poplar or balsa may break, and bamboo splits along its grain (Lasersheets 'Hammer Joint'). 3D-printed in PLA (Printables 'Tenon Wedge Hammer Joint Test') or other plastics; Hubs prefers ABS to PLA for FDM interlocking joints because it is more ductile.
- **maker_difficulty**: moderate: hand-cut joints need accurate marking and chiselling (Wikipedia calls the joint difficult to make because of the precise measuring and cutting), but drawboring and wedging forgive a less-than-perfect tenon fit (Popular Woodworking), and machines, loose-tenon joiners, laser-cut hammer joints and 3D-printed versions make it easy.

### Making it

- **processes**: 
  - woodwork: the main method, by hand or with a mortiser, router or loose-tenon joiner (Wikipedia; Popular Woodworking)
  - laser cut: tab-like through tenons in sheet, e.g. the one-piece 'hammer joint' with a built-in wedge, for 3-12 mm sheet (Lasersheets; Hackaday)
  - CNC: routed mortises have rounded ends, so either round the tenon or square the mortise ends with a chisel (Popular Woodworking 'Wedged Mortise and Tenon' squares routed mortises with a chisel)
  - 3D print (FDM): printed tenon and wedge test joints and teaching models (Printables); round tenons suffer from layer stepping on FDM (Formlabs)
  - 3D print (resin): possible with the resin clearance guidance (Formlabs), ⚑ [uncertain] for load-bearing use
  - off-the-shelf part: ready-made loose tenons (e.g. Domino (brand) tenons), dowels as pegs, drawbore pins *(⚑ parts need confirming)*
- **print_in_place**: no: the tenon, the mortised part and any wedge or peg are printed separately and assembled
- **making_tips_3d_printing**: 1) Clearance: leave a gap around the tenon: Hubs suggests 0.5 mm for FDM interlocking joints (0.2 mm SLA and SLS); Prusa printers are accurate to about 0.2 mm and moving fits start at 0.3 mm; Formlabs suggests 0.2 mm for small and up to 0.4 mm for large resin or SLS assemblies. 2) Orientation: FDM parts are weakest between layers (PLA layer adhesion was only about 55% of flat strength in CNC Kitchen's test; Prusa: 'like wood, FFF prints are stronger in one direction'), so print the tenon lying down so its layers run along its length; a tenon printed standing upright tends to snap off at a layer line at the shoulder. 3) Prefer rectangular tenons: round tenons print with visible steps on FDM and need post-processing (Formlabs). 4) Round the edges and fillet the inside corner at the shoulder to ease assembly and reduce stress concentration (Hubs). 5) Wedged versions: add a slot in the tenon for a wedge, as in the laser 'hammer joint' copied in PLA (Printables 'Tenon Wedge Hammer Joint Test': tap the wedge flush with a soft hammer; 2 perimeters, 15% gyroid infill); PLA is brittle, so a tougher plastic such as PETG may survive wedging better ⚑ [uncertain]. 6) For wood-to-print joints, remember wood swells with humidity while plastic doesn't, so leave room or use a printed wedge that can be re-driven ⚑ [uncertain]. 7) Printed PLA softens at about 60 °C (CNC Kitchen), so keep load-bearing printed tenons out of hot places. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Loose (floating) tenons, e.g. Domino (brand) tenons with an oval cross-section, from 4 x 20 mm up to 14 x 140 mm, for Festool's loose-tenon joiner (Wikipedia 'Domino joiner'); wooden dowels or oak pegs for pinned tenons; drawbore pins (sold by antique tool dealers or made from a machinist's 'drift pin', 'alignment pin' or 'line-up tool'; Popular Woodworking); mortise chisels and hollow-chisel mortiser bits; 'wedge' blanks cut from straight-grained hardwood.
- **rules_of_thumb**: 
  - Tenon thickness: about one-third of the rail thickness; a haunch is one-third of the tenon length long and one-sixth of the tenon width deep (Wikipedia 'Mortise and tenon').
  - Drawbore offset: 1/16 in. almost always works; 3/32 in. is better for furniture; up to almost 1/8 in. for big joints in tough woods like ash or elm; bigger offsets risk breaking the tenon or peg, especially in fragile woods like cherry (Christopher Schwarz, Popular Woodworking 'Drawboring Resurrected').
  - Drawbore peg: 1/4 in. hole for cabinet work, 3/8 in. for workbenches, doors and windows; place the hole 3/8 in. from the mortise opening in furniture (1/2 in. in larger work); whittle the last 1/2 in. of the peg to a 1/8 in. tip; use dry, straight-grained white oak, as wet pegs shrink and let the joint loosen (Popular Woodworking 'Drawboring Resurrected').
  - Wedged through tenon: a 3-degree taper on the mortise ends and wedges works well (can go up to 8 degrees; wider tapers are stronger); taper about three-quarters of the mortise depth; 1/4 in. strain-relief holes centred 1/4 in. from the tenon edge leave 1/8 in. strips that bend without splitting; wedges about 1 in. longer than the tenon (Popular Woodworking 'Wedged Mortise and Tenon').
  - Wedge direction: orient the wedge slot perpendicular to the grain of the piece with the mortise, never parallel, or it will split; drill a 3/16 in. hole where the slot ends, 1/8-1/4 in. from the shoulder, and make round through-tenons 1/8-1/4 in. longer than the seat is thick (Ken Burton, Woodcraft 'Avoiding Splits with Wedged Tenons').
  - Tusk tenon: bevel the outer faces of the wedge and wedge mortise at about 5 degrees; let the inside face of the wedge mortise extend slightly into the main mortise so the wedge pulls the shoulders tight; leave at least 1/2 in. of solid wood beyond the wedge mortise; a dovetailed-and-wedged tenon needs a steeper 10-12 degree wedge; forked-wedge notches at least 1/8 in. deep (Woodsmith). A properly designed tusk tenon leaves a slight gap just behind the wedge (Woodworker's Journal 'Tusk Tenons').
  - Tusk tenon example that has lasted: wedge 3/8 in. thick, tapered about 1 in. in 12, with about 4 in. of wood beyond the wedge, in a workbench taken apart scores of times (Will Myers, Wood and Shop).
  - Strength: glued mortise and tenons averaged 172 lb (spruce) and 270-300 lb (maple) with the load 20 cm from the joint, about 25% stronger than three dowels; orient tenons to cross as many growth rings as possible, since a tenon with rings parallel to it split the post early (Matthias Wandel, woodgears.ca).
  - Wedged joints have no universal angles or lengths; test on templates with your own wood (Fine Woodworking 'Designing the Wedged Mortise and Tenon').

### When to use it

- **everyday_examples**: 
  - Chair and stool legs joined to their rails, the kind of joint that 'gets stressed a lot' (Matthias Wandel, woodgears.ca)
  - Timber-framed barns and houses held together with wooden pegs through pegged tenons (Wikipedia 'Mortise and tenon')
  - Trestle tables and workbenches that come apart by knocking out tusk-tenon wedges (Woodsmith)
  - Stools and chairs whose round leg tenons go right through the seat and are split and wedged from above, as in Windsor chairs (Woodcraft; Popular Woodworking 'The Indispensable Mortise & Tenon')
- **when_to_use**: Use it when a rail meets a post or stile at an angle, usually 90 degrees, and the joint must be strong and stiff for years: chairs, tables, frames, doors and timber buildings (Wikipedia; woodgears.ca). Choose a drawbored tenon when you can't clamp the work or want a joint that stays tight even if the glue fails (Popular Woodworking). Choose a wedged through tenon for a strong, decorative joint that can't pull out, such as chair seats and legs (Popular Woodworking; Woodcraft). Choose a tusk tenon when large furniture like a trestle table, workbench or bed must be taken apart for moving (Woodsmith). A laser-cut hammer joint gives fast, glue-free joints in plywood (Lasersheets).
- **when_not_to_use**: For quick or light jobs, dowels, biscuits or pocket screws are faster, though weaker (woodgears.ca). For flat-pack furniture that is often assembled, knock-down cam-lock or cross-dowel fittings are quicker than wedges. For joining boards edge to edge or at corners of boxes, use edge glue, finger or dovetail joints instead. For very soft woods like balsa or poplar, a wedged laser joint may break (Lasersheets). For 3D prints carrying heavy load across the layer lines, a bolted joint with heat-set inserts is more reliable ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Wood shrinks and swells with humidity, mostly across the grain and only 0.1-0.2% along it (USDA Wood Handbook ch. 4), so joints can open a gap at the shoulder as wood dries; a drawbore peg keeps the tenon pulled tight during almost any shrinkage, but wet pegs shrink and loosen (Popular Woodworking 'Drawboring Resurrected'). Tusk wedges work loose over time and need re-driving (Will Myers, Wood and Shop). Outdoor joints need a waterproof glue or a mechanical lock such as pegs or wedges ⚑ [uncertain]. 3D-printed PLA tenons soften at about 60 °C and PETG at about 80 °C (CNC Kitchen). *(⚑ parts need confirming)*
- **safety_notes**: Sharp chisels and mallet work: keep hands behind the cutting edge ⚑ [uncertain]. Cutting small wedges on a table saw needs the blade guard removed, so take great care (Popular Woodworking 'Wedged Mortise and Tenon'). Driving wedges or pegs can split parts suddenly; use a wooden mallet, which is less likely to split wedges than a metal hammer (Woodcraft). Otherwise none known. *(⚑ parts need confirming)*
- **common_failures**: Glue failure over time, which lets an ordinary tenon loosen; drawboring or wedging prevents this (Popular Woodworking). Splitting the mortised piece by driving wedges parallel to its grain; turn the slot 90 degrees (Woodcraft). Tenon end blowing out behind a tusk wedge when there is too little wood beyond the wedge or the wedge is over-driven; leave at least 1/2 in. (Woodsmith; Wood and Shop). Tenon or peg breaking during drawboring when the offset is too big, especially in cherry (Popular Woodworking). Post shearing along its growth rings when the tenon runs parallel to them (woodgears.ca). Wedges that bottom out before they spread the tenon; test-fit and size them (Popular Woodworking). In laser-cut sheet, a wider kerf at the bottom of thick sheet can let the wedge shift sideways (Lasersheets). In 3D prints, tenons snap at a layer line if printed upright (see making tips).
- **related**: 
  - Bridle joint (open mortise): the mortise is an open-ended slot, easier to cut but less enclosed (Wikipedia)
  - Dowel and biscuit joints: round pins or oval wafers in holes, quicker but weaker than a tenon (woodgears.ca)
  - Loose (floating) tenon, e.g. Domino (brand): a separate tenon glued into mortises in both parts (Wikipedia 'Domino joiner')
  - Tab-and-slot joint: the sheet-material version of a through tenon, for laser and CNC cutting
  - Japanese interlocking joints: complex tenons and splices locked by shape, wedges and pegs
  - Knock-down cam-lock and cross-dowel connectors: hardware alternatives to the tusk tenon for furniture that comes apart
  - Wedge dowel (click-in grooved dowel): a modern tool-free knock-down alternative
  - Sliding dovetail and dovetail joint: other shape-locked wood joints that resist pulling apart
  - Clevis joint (fork and pin): a tongue in a fork held by a pin, like a pegged open mortise but made to pivot

### Pictures, videos and models

- **links**: 
  - [Mortise and tenon joint.svg (Wikimedia Commons, by GreyCat)](https://commons.wikimedia.org/wiki/File:Mortise_and_tenon_joint.svg): Exploded diagram of a basic mortise and tenon joint *(licence: CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 or GFDL 1.2 or later (multi-licensed))*
  - [PinnedTenon.svg (Wikimedia Commons, by Dave.Dunford)](https://commons.wikimedia.org/wiki/File:PinnedTenon.svg): Diagram of a pinned (pegged) tenon *(licence: Public domain)*
  - [MortiseFoxTail.svg (Wikimedia Commons, by Dave.Dunford)](https://commons.wikimedia.org/wiki/File:MortiseFoxTail.svg): Diagram of a foxtail (fox-wedged) tenon, where hidden wedges spread the tenon inside a blind mortise *(licence: CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 or GFDL 1.2 or later (multi-licensed))*
  - [Tusk Tenon & Loose-Wedge Mortise and Tenon Joints (Woodsmith)](https://www.woodsmith.com/article/loose-wedge-mortise-tenon-joints-basic-tusk-tenon/): Illustrations of basic, double-wedge and forked-wedge tusk tenons and a dovetailed-and-wedged tenon *(licence: link only)*
  - [How to Make a Drawbore Mortise & Tenon Joint (The Wood Whisperer, YouTube)](https://www.youtube.com/watch?v=rhc12thf2fc): Video of drilling offset holes and driving a peg to pull a drawbored joint tight (title checked via YouTube oEmbed; embedded on thewoodwhisperer.com) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Hammer Joint: Laser No-Screw-No-Glue Wood Connection (Lasersheets, Jiskar Schmitz)](https://lasersheets.eu/blogs/news/hammer-joint): Free drawings of a laser-cut wedged tenon with a built-in wedge for 3, 4, 5, 6, 9, 10 and 12 mm sheet, a 6 mm STEP file, a parametric Onshape model and a side-table design *(licence: The Hammer Joint 'may be used without restrictions' (stated on the page))*
  - [Tenon Wedge Hammer Joint Test by kaje (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/673039-tenon-wedge-hammer-joint-test): A 3D-printed PLA copy of the laser hammer joint, to test a wedged tenon; tap the wedge flush with a soft hammer *(licence: CC BY)*
  - [tenon and mortise with half groove - čep a dlab s drážkou by STSUL.CZ (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/406957-tenon-and-mortise-with-half-groove-cep-a-dlab-s-dr): A printable teaching model of a mortise and tenon with a groove, from a Czech carpentry school; stands up on its own when assembled *(licence: CC BY)*
- **diagram_idea**: Four small cut-away views of the same leg and rail: (1) plain glued tenon, (2) drawbore with the peg hole in the tenon shifted towards the shoulder and an arrow showing the peg pulling the rail in, (3) through tenon with two wedges spreading it into a flared mortise, (4) tusk tenon sticking out through the leg with a tapered wedge through it and a hammer tapping it out to take it apart.
- **sources**: 
  - https://en.wikipedia.org/wiki/Mortise_and_tenon
  - https://en.wikipedia.org/wiki/Domino_joiner
  - https://commons.wikimedia.org/wiki/File:Mortise_and_tenon_joint.svg
  - https://commons.wikimedia.org/wiki/File:PinnedTenon.svg
  - https://commons.wikimedia.org/wiki/File:MortiseFoxTail.svg
  - https://www.popularwoodworking.com/techniques/drawboring-resurrected/
  - https://www.popularwoodworking.com/projects/wedged-mortise-and-tenon/
  - https://www.popularwoodworking.com/techniques/the-indispensable-mortise-tenon/
  - https://www.woodsmith.com/article/loose-wedge-mortise-tenon-joints-basic-tusk-tenon/
  - https://woodandshop.com/will-myers-tusk-tenonshow-strong-are-they/
  - https://www.woodworkersjournal.com/hand-tool-techniques-tusk-tenons/
  - https://www.woodcraft.com/blogs/shop-knowledge-guides/expert-answers-avoiding-splits-with-wedged-tenons
  - https://www.finewoodworking.com/project-guides/joinery/designing-the-wedged-mortise-and-tenon
  - https://woodgears.ca/joint_strength/
  - https://woodgears.ca/joint_strength/pockethole.html
  - https://thewoodwhisperer.com/videos/drawbored-mortise-tenon/
  - https://www.youtube.com/watch?v=rhc12thf2fc
  - https://www.rockler.com/learn/how-to-make-kerfs-and-wedges-for-through-tenons-video-by-cfc
  - https://hackaday.com/2023/12/04/this-laser-cut-one-piece-wedge-tenon-locks-wood-joints-tight/
  - https://lasersheets.eu/blogs/news/hammer-joint
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf
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
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, processes, removability, safety_notes, seal, special_behaviour, when_not_to_use

## 248 Butterfly key (bow-tie key)

*interlocking joints & joinery.* A bow-tie-shaped insert set into both parts across a joint or crack so they can't pull apart; also used as a CNC sheet connector

### What it is

- **plain_name**: A small bow-tie-shaped piece set into a matching hole that straddles a crack or seam, so the two sides can't pull apart
- **term**: Butterfly key (butterfly joint, bow-tie key)
- **aliases**: 
  - butterfly joint, bow tie, bowtie inlay (Wikipedia 'Butterfly joint'; Rockler)
  - dovetail key, double dovetail key (Wikipedia 'Butterfly joint')
  - Dutchman joint (Wikipedia; note that 'Dutchman' more often means a patch that replaces damaged wood)
  - Nakashima joint, after the woodworker George Nakashima (Wikipedia; Popular Woodworking)
  - bow-tie connector, butterfly connector, butterfly wedge lock (maker and CNC names; WikiHouse; Printables 'Gridfinity Refined')
  - butterfly key inlay, slab key
- **family**: interlocking joints & joinery
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: A bow-tie-shaped key, wide at both ends and narrow in the middle, is fitted into a matching pocket that spans a joint or crack, so its wide ends lock into both sides and stop them pulling apart; used to stop cracks in wooden slabs and to join CNC-cut or 3D-printed panels.
- **complexity**: A few parts: the two parts being joined (or the two sides of a crack), a bow-tie-shaped pocket cut half into each, and the key itself (wood, plywood, OSB or printed plastic), usually glued in woodworking and tapped in dry with a mallet in CNC building systems (Wikipedia 'Butterfly joint'; WikiHouse assembly guide).
- **how_it_works**: The key is two dovetails joined at their narrow ends. When it sits in its pocket across the seam, each wide 'wing' is trapped in one part, so pulling the parts apart would mean crushing the pocket walls or snapping the key's narrow neck (Wikipedia 'Butterfly joint'; WikiHouse bow-tie tests). In wood the key's grain runs from end to end, across the crack, because wood hardly changes length along its grain; a key cut the other way would move with the slab and not hold the crack (Katz-Moses Tools). In CNC plywood building systems the keys are tapped into matching holes on both faces of neighbouring blocks and carry both pulling and sliding (shear) loads between them (WikiHouse).

### Finder attributes

- **job**: join and hold: joins panels or blocks edge to edge, and holds a crack or glue joint closed (Wikipedia; WikiHouse)
- **motion**: none: it is a rigid joint
- **degrees_of_freedom**: 0 when seated and glued. A dry key stops the parts pulling apart or sliding past each other within the panel's plane; only lifting the key out of its pocket (perpendicular to the face) is not blocked by shape, so it relies on glue or a tight fit for that ⚑ [uncertain]. *(⚑ parts need confirming)*
- **special_behaviour**: none: it is a static joint with no clever behaviour
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the wide wings are trapped in pockets on each side of the seam (Wikipedia)
  - material bond (glue, solvent or melting): woodworking keys are glued into the pocket (Rockler; Popular Woodworking)
  - friction or clamping (force-fit): CNC and printed keys are a tight tap-in or press fit, used dry (WikiHouse assembly guide; Printables 'Gridfinity Refined')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent when glued (woodworking inlays); removable when fitted dry, e.g. 3D-printed baseplate connectors that can be pushed back out ⚑ [uncertain]; semi-permanent for WikiHouse bow-ties malleted flush into building blocks ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: once when glued; a few to many times for dry printed or plywood keys, which slowly loosen as the pocket walls crush ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: Woodwork: a bandsaw, table saw, router table or hand saw to make the key; a marking knife, a router with a straight or spiral bit (often with a template and guide bushing), chisels to square the corners, glue, a mallet, and a plane or sander to level it (Rockler; Katz-Moses; Popular Woodworking). CNC: the CNC router cuts keys and pockets; a rubber mallet taps them in (WikiHouse). 3D printing: none to assemble, just press in.
- **seal**: none: it holds parts together but doesn't seal the gap; cracks are often filled separately (Popular Woodworking prefers not to fill with epoxy)
- **load**: Medium: strong against the parts pulling apart across the seam (tension) and sliding along it (shear) in the panel's plane; weak against lifting or bending out of the plane, which only glue or a tight fit resists ⚑ [uncertain]. WikiHouse tests on 18 mm Metsä plywood: one bow tie in tension failed at 7.4-9.0 kN (about 750-920 kgf) by crushing and shearing at the contact faces; three bow ties together took 19.2-24.1 kN; in shear, the plywood bow ties took 10.8-13.5 kN per shear plane (four bow ties, two per face, joined three mock columns, so about two per shear plane ⚑ [uncertain]) and OSB ones 16.6 kN, failing at the narrow neck (Granello, WikiHouse 'Bow ties subjected to tensile forces' and 'Bow ties subjected to shear forces'). A thin surface key only holds the top of a thick slab, so through-cracks need keys on both faces (Popular Woodworking). *(⚑ parts need confirming)*
- **adjustable**: no
- **play_and_precision**: small: gaps between key and pocket allow a little slip; WikiHouse measured a slip stiffness of about 1.4-1.7 kN/mm for one 18 mm plywood bow tie in tension and a design value of 1.5 kN/mm (WikiHouse 'Bow ties'). Glued wooden inlays have no play. Printed keys are tuned by scaling: e.g. scale the pocket to 100.5% for a looser fit (Printables 'Bowtie (connector)'), or print keys at 101-104% and pick the ones that fit (Printables 'Harbor Freight Workbench Grid for Gridfinity Refined').
- **access_needed**: one side only (blind): a key is set into one face; for a crack that goes right through, or for structural panels, add keys on both faces (Popular Woodworking; WikiHouse fits bow-ties on inner and outer panels)
- **materials**: Wood keys, usually a hard, contrasting species such as walnut or ebony, or the same species as the slab; a harder key than the slab so the slab gives way when it is driven in (Wikipedia; Popular Woodworking; Timber Biscuit Woodworks). Plywood (e.g. 18 mm birch) and OSB for CNC building connectors (WikiHouse). 3D-printed PLA or PLA+ for printed baseplate connectors (Printables 'Gridfinity Refined'). Joins wood, plywood, OSB and printed plastic; for metal or glass, use other fixings.
- **maker_difficulty**: moderate for a neat wooden inlay: the pocket must match the key exactly or gaps show (Popular Woodworking). Easy with a router template, a CNC or a 3D printer, which cut matching keys and pockets automatically.

### Making it

- **processes**: 
  - woodwork: keys cut by bandsaw, table saw, router table or hand saw; pockets routed and chiselled (Katz-Moses)
  - CNC: cuts keys and pockets together, e.g. in WikiHouse plywood building blocks and in slab furniture (WikiHouse; Katz-Moses)
  - 3D print (FDM): press-fit bow-tie connectors for joining printed baseplates and panels (Printables); also printed router templates for cutting inlays (Printables)
  - laser cut: keys and pockets in thin sheet ⚑ [uncertain]
  - off-the-shelf part: acrylic butterfly router templates and inlay kits (Rockler) *(⚑ parts need confirming)*
- **print_in_place**: no: the key is printed separately and pressed into pockets in the printed parts
- **making_tips_3d_printing**: 1) Fit: printed keys need tuning. Print the key and use the same shape as a negative in the slicer, scaling the negative to about 100.5% for a looser fit (Printables 'Bowtie (connector)'); or print several keys at 101%, 103% and 104% and use the one that snaps in (Printables 'Harbor Freight Workbench Grid for Gridfinity Refined'); Gridfinity Refined's author suggests printing a few test keys and scaling them if they don't fit. 2) Orientation: print keys flat on the bed so their layers run along the key; layer bonds are much weaker (PLA about 55% of flat strength in CNC Kitchen's test), and the narrow neck is the likely place for a printed key to break ⚑ [uncertain]. 3) Round the sharp corners of the wings slightly (a remix added fillets for easier assembly; Printables 'Bowtie Connector Remix') and chamfer the bottom edges so it starts into the pocket (Katz-Moses, for wood). 4) Formlabs rates separate 'key joints' as not ideal for 3D printing, because every extra part adds tolerance variation, so test-print one joint first. 5) Material: PLA and PLA+ are tuned in Gridfinity Refined for 0.4 or 0.6 mm nozzles; printed PLA softens at about 60 °C (CNC Kitchen). 6) Router templates for wooden bow-ties can also be printed (Printables 'Butterfly or Bowtie Router Inlay Template'). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Acrylic 'butterfly key' or 'bowtie inlay' router templates used with a plunge router, a 'template guide' (guide bushing) and a 1/8 in. straight or spiral bit (Rockler); 'inlay kits' with a removable bushing so the same template cuts both the pocket and the key (Rockler). Pre-made keys are also sold ⚑ [uncertain]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Key thickness: at least 1/4 in. for strength, 3/8 in. for big splits in big slabs; dovetail angles of 8-10 degrees; side bevels of about 1 degree (0.5 degrees in very hard wood, up to 2 degrees in soft pine or fir); set the router about 1/16 in. shallower than the key is thick; choose a key harder than the slab; add a second key on the back if the split goes right through (Asa Christiana, Popular Woodworking 'Butterfly Keys Made Easy').
  - Key thickness about 1/4 to 1/3 of the slab thickness; cut the key with long grain running end to end; make the pocket walls 90 degrees or slightly undercut (Katz-Moses Tools 'Butterfly Keys').
  - For purely decorative inlays a pocket 1/8-1/4 in. deep is enough (Rockler 'Making Butterfly Inlay Keys').
  - Grain of the key runs across the key's length and at right angles to the grain of the slab (Timber Biscuit Woodworks).
  - Glue goes in the pocket, not on the key; drive the key evenly (Popular Woodworking), with a scrap block over it to spread the blows (Katz-Moses).
  - WikiHouse design values for its standard 18 mm plywood bow tie: shear area 1008 mm², shear stiffness 3 kN/mm, tensile area 1008 mm², contact area at failure about 767 mm², tensile stiffness 1.5 kN/mm (WikiHouse 'Bow ties' engineering guide).
  - An Eurocode 5 based model overestimated bow-tie tensile capacity by about 30%, because the panel around the key deforms and reduces the contact area (Granello, WikiHouse 'Bow ties subjected to tensile forces', 2023).
  - A connection with three bow ties was on average 23% stiffer and 61% stronger in tension than WikiHouse's earlier pegs-and-combs connection (WikiHouse Weeknotes #29, 2022).

### When to use it

- **everyday_examples**: 
  - Live-edge wooden slab tables with contrasting bow-ties across their cracks, made popular by George Nakashima (Popular Woodworking; Wikipedia)
  - 3D-printed Gridfinity storage baseplates joined with small printed butterfly keys (Printables 'Gridfinity Refined')
  - WikiHouse CNC-cut plywood house blocks joined on site with bow-ties tapped in with a rubber mallet (WikiHouse assembly guide)
  - Reinforced cracks and glue joints in doors, picture frames and drawers (Wikipedia 'Butterfly joint')
- **when_to_use**: Use a butterfly key to stop a crack or check in a wide board or slab from opening further, to strengthen a glue joint between boards while showing it off as a feature, or to hide a defect as a decorative inlay (Rockler; Katz-Moses; Wikipedia). In CNC and 3D-printed work, use bow-tie keys to join flat panels, blocks or baseplates edge to edge without screws, since they resist both pulling apart and sliding (WikiHouse; Printables).
- **when_not_to_use**: Not for a crack that is still moving because the wood is wet: dry the wood first ⚑ [uncertain]. Not for joints that must come apart often: use screws, cam locks or a sliding dovetail. Not where the joint bends out of its plane: a surface key only holds one face, so use a spline, a bolted plate or keys on both faces (Popular Woodworking). For filling a missing chunk, use a Dutchman patch instead. For thin printed parts, formed interlocking edges (a dovetail or puzzle cut) avoid a separate part (Formlabs; Boxes.py dovetail edges). *(⚑ parts need confirming)*
- **environment_limits**: Wood moves much more across the grain than along it (0.1-0.2% along the grain from green to ovendry; USDA Wood Handbook ch. 4); the key's long grain holds the crack, but the slab keeps moving around it. Epoxy fillers in the same crack can pop out as the wood moves (Popular Woodworking). Plywood and OSB keys in buildings must stay dry and protected like the blocks themselves ⚑ [uncertain]. Printed PLA keys soften at about 60 °C (CNC Kitchen). *(⚑ parts need confirming)*
- **safety_notes**: Cutting small keys is risky: the table-saw method is 'expert-level (a.k.a. dangerous)' (Katz-Moses); use a bandsaw or router table with push blocks for small parts ⚑ [uncertain]. Router and chisel work need firm clamping. On building sites, bow-ties on roofs and upper walls need proper working-at-height safety (WikiHouse assembly guide). *(⚑ parts need confirming)*
- **common_failures**: Visible gaps around the key from a poorly matched pocket; trace the key with a knife and cut the key first (Katz-Moses; Popular Woodworking). A key cut with short grain that snaps when hammered in and doesn't hold the crack (Katz-Moses). Pocket walls not square, so the key won't sit flat on the bottom (Katz-Moses). Key splintering or cracking when driven into hard wood; ease the bevel and drive through a flat block (Popular Woodworking). Sanding a key flush can round it over and leave a dip around it (Katz-Moses). In CNC plywood, failure by crushing and shearing where the wings bear on the pocket, or by the neck breaking in shear (WikiHouse tests). Printed keys too tight or too loose; tune by scaling (Printables).
- **related**: 
  - Sliding dovetail: a single flared tongue slid into a groove, instead of a separate key dropped in from the face
  - Dovetail joint: the same flared shape cut into the ends of two boards
  - Split-part joints for large prints (dovetail keys, puzzle joints): interlocking shapes cut into the faces of printed pieces
  - Dovetail and finger edges in Boxes.py: in-plane dovetail edges that join laser-cut sheets edge to edge without a separate key (Boxes.py edges.py)
  - Dutchman patch: an inlaid piece that replaces damaged wood rather than locking a crack
  - Tab-and-slot joint: sheet parts held by tabs through slots, for joints at an angle rather than edge to edge
  - Dowel and biscuit joints: hidden alignment pieces in edge joints, with no visible key
  - Mortise and tenon with a separate loose tenon: another separate insert joining two parts

### Pictures, videos and models

- **links**: 
  - [Butterfly-joint.JPG (Wikimedia Commons, by Dominik Matus)](https://commons.wikimedia.org/wiki/File:Butterfly-joint.JPG): Photo of a butterfly (dovetail key) joint in wood *(licence: CC BY-SA 4.0)*
  - [Butterfly Keys Made Easy (Popular Woodworking, Asa Christiana)](https://www.popularwoodworking.com/techniques/butterfly-keys-made-easy/): Step-by-step photos of making templates, cutting keys, routing and chiselling the pocket and driving keys into a slab *(licence: link only)*
  - [Making Butterfly Inlay Keys with Your Router (Rockler)](https://www.rockler.com/learn/making-butterfly-inlay-keys): Photos of cutting a butterfly pocket and matching key with an acrylic template, guide bushing and 1/8 in. bit *(licence: link only)*
  - [Butterfly Keys, Dutchman, Dovetail Bow Tie - Two Minute (ish) Tuesday (Jonathan Katz-Moses, YouTube)](https://www.youtube.com/watch?v=0aLWpQce3wE): Short video on making and inlaying butterfly keys (title checked via YouTube oEmbed; embedded on kmtools.com) *(licence: link only (standard YouTube licence))*
  - [WikiHouse assembly guide (WikiHouse / Open Systems Lab)](https://www.wikihouse.cc/assembly/wikihouse-assembly): Assembly of CNC-cut plywood floor, wall and roof blocks joined with bow-ties tapped in with a rubber mallet *(licence: Most WikiHouse files and information are under a Creative Commons ShareAlike licence (stated on wikihouse.cc))*
- **make_it_yourself**: 
  - [Bowtie (connector) by Simone Rodino (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1434242-bowtie-connector): A small printable bow-tie key; use the same model as a negative modifier in the slicer to cut the pocket, scaled to 100.5% for a looser fit *(licence: BSD License)*
  - [Gridfinity Refined by grizzie17 (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/413761-gridfinity-refined): Popular storage-grid system whose baseplates are joined by a simple printed 'butterfly wedge lock' *(licence: CC BY-SA)*
  - [Butterfly joint joinery by EDGeProjects (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/511300-butterfly-joint-joinery): A bow-tie key model to add to your own designs; the author notes larger prints need less scaling down for a tight fit *(licence: CC BY-NC-SA)*
  - [Butterfly or Bowtie Router Inlay Template V2 by JeepingJohnny (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/413683-butterfly-or-bowtie-router-inlay-template-v2): Printable router templates in three sizes, with inverse cut-outs, for cutting wooden bow-tie keys and pockets *(licence: CC BY-NC-SA)*
  - [Bow ties (WikiHouse Skylark guide for structural engineers)](https://www.wikihouse.cc/engineering/bow-ties): Design values and a capacity spreadsheet for WikiHouse's CNC-cut plywood bow-tie connectors, with links to the test reports *(licence: Most WikiHouse files and information are under a Creative Commons ShareAlike licence (stated on the page))*
- **diagram_idea**: Top view of a slab with a crack running along it, and a bow-tie key set across the crack with its grain drawn at right angles to the slab's grain; arrows pulling the two halves apart are stopped by the wide wings, plus a side view showing the key sitting in a shallow pocket and a second key underneath for a through-crack.
- **sources**: 
  - https://en.wikipedia.org/wiki/Butterfly_joint
  - https://commons.wikimedia.org/wiki/File:Butterfly-joint.JPG
  - https://www.rockler.com/learn/making-butterfly-inlay-keys
  - https://kmtools.com/blogs/news/butterfly-keys
  - https://www.youtube.com/watch?v=0aLWpQce3wE
  - https://www.popularwoodworking.com/techniques/butterfly-keys-made-easy/
  - https://timberbiscuitwoodworks.com/blog/butterfly-keys-in-woodworking
  - https://www.wikihouse.cc/engineering/bow-ties
  - https://www.wikihouse.cc/research/bow-ties-subjected-to-shear-forces
  - https://cdn.prod.website-files.com/612569c3243035968aaf61f1/63a2dc3660d037d8a52a08de_Bow_ties__shear__compressed.pdf
  - https://www.wikihouse.cc/research/bow-ties-subjected-to-tensile-forces
  - https://cdn.prod.website-files.com/612569c3243035968aaf61f1/63bd2013af679dce085ee4fd_Bow_ties__tension__compressed.pdf
  - https://www.wikihouse.cc/assembly/wikihouse-assembly
  - https://wikihouse.substack.com/p/weeknotes-29
  - https://api.printables.com/graphql/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/edges.py
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, power tools, hand tools
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** degrees_of_freedom, environment_limits, load, making_tips_3d_printing, off_the_shelf_parts, processes, removability, reuse_cycles, safety_notes, when_not_to_use

## 249 Japanese interlocking joints (splices and three-way corners)

*interlocking joints & joinery.* Traditional wood joints like the gooseneck splice and the three-way corner that lock together by shape alone, often with wedges or pegs

### What it is

- **plain_name**: Wooden beams cut into matching hooks, steps and tongues that slide or drop together like a 3D puzzle and lock by their shape alone, then get tightened with a wooden wedge or peg: no nails, screws or glue
- **term**: Japanese interlocking wood joints: splice joints (tsugite), e.g. the gooseneck joint (kama-tsugi) and the wedged scarf joint (kanawa-tsugi), and multi-member corner joints (shiguchi), e.g. the three-way post joint (sanbou-zashi, often written sampo-zashi) and the three-way pinned corner mitre (kane-tsugi)
- **aliases**: 
  - tsugite (end-to-end or splice joints) and shiguchi (angle or corner joints), the two basic families of Japanese joinery (JAANUS dictionary)
  - kama-tsugi, gooseneck joint, gooseneck tenon and mortise joint (JAANUS; Big Sand Woodworking)
  - koshikake kama-tsugi, lapped gooseneck joint, half-lap gooseneck tenon joint, also shikimen kama-tsugi (JAANUS; Wikimedia Commons file 'Lapped gooseneck joint')
  - kanawa-tsugi (金輪継ぎ), wedged scarf joint; in full 'an oblique, housed (dadoed), rabbeted, T-shaped, half-blind, tenoned scarf joint' (JAANUS)
  - okkake daisen-tsugi, oblique housed and rabbeted scarf joint locked with two pins; okkake-tsugi when no pins are used (JAANUS)
  - sanbou-zashi / sampo-zashi / sanpo-zashi, three-way joint where beams enter a post from three sides; shihou-zashi is the four-sided version (JAANUS; YouTube video titles 'Sampo zashi')
  - kane-tsugi, 'right-angle corner' joint, three-way pinned corner mitre, a mitre and pinned bridle joint combined (Fine Woodworking; Instructables)
  - Kawai tsugite, '3-way joint', a modern puzzle-like splice that goes together in three directions (Core77; woodgears.ca)
  - ne-tsugi ('splicing the roots'), repairing a rotted post base by splicing in new wood, often with kanawa-tsugi (Big Sand Woodworking)
  - Japanese joinery, traditional timber joints, integral wood joints (MiGumi paper), nail-free joinery
  - scarf joint, splice joint, keyed-hook scarf: the Western equivalents (Wikipedia 'Scarf joint')
- **family**: interlocking joints & joinery
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Traditional Japanese carpentry joints in which two or three timbers are cut into interlocking shapes (hooks, dovetails, stepped seats and small tenons) that fit together only along one path and are then locked with a driven wedge or peg, joining beams end to end or at a corner without metal fasteners or glue.
- **complexity**: A few parts: two timbers for a splice or three for a three-way corner, each cut with interlocking features (gooseneck or dovetail head and neck, sloping faces, stepped seat, stub tenons, mortises), plus usually one or two loose hardwood locking pieces: a tapered wedge (kusabi), a pair of long keys (shachi-sen) or a square draw pin (komisen) (JAANUS entries kanawatsugi, sen, kusabi; Big Sand Woodworking).
- **how_it_works**: Each timber is cut so that a shaped tongue on one fits a matching pocket in the other: a hooked gooseneck or dovetail head stops the pieces pulling apart, a stepped seat (koshikake) carries the weight, and small stub tenons stop twisting and sideways slipping (JAANUS koshikake kamatsugi; Big Sand Woodworking). Because of this shape the pieces can only be assembled along one path, for example dropped in from above for a gooseneck or slid lengthwise for kanawa-tsugi, and a wedge or offset draw pin driven into a gap between them closes that last path and pulls the shoulders tight (JAANUS kanawatsugi; Big Sand: 'impressive how tight these joints become with a few taps of the wedge'). In a three-way post joint (sanbou-zashi) beams are let into three sides of one post and their tenons cross and interlock inside it (JAANUS shihouzashi), while the furniture-scale kane-tsugi corner is a mitre and a pinned bridle joint fused together, locked by one pin (Fine Woodworking).

### Finder attributes

- **job**: 
  - join and hold: lengthens beams end to end (splices) or joins two or three members at a corner, with no nails, screws or glue
  - line parts up exactly: the shoulders, sloping faces and stub tenons put the pieces in one exact position and in line (Big Sand Woodworking)
  - lock, and release by hand: wedged or pinned versions can be knocked apart again by driving the wedge or pin back out with a mallet, which is how damaged post bases are cut out and spliced (ne-tsugi) (Big Sand Woodworking)
- **motion**: none: once wedged or pinned nothing moves. The pieces only slide along a single assembly path while being put together.
- **degrees_of_freedom**: 0 when wedged or pinned. Without the wedge or pin most of these joints leave 1: the pieces can slide back out the way they went in (lengthwise for kanawa-tsugi, which 'must be inserted in a lengthwise direction'; upwards for a gooseneck that is dropped into its mortise) (JAANUS). The Kawai tsugite puzzle joint is unusual in having three possible assembly directions: 'They can be slid together in three different orientations' (woodgears.ca).
- **special_behaviour**: 
  - self-aligning or self-centring: the stepped seats, sloping faces and stub tenons force the two pieces into line, and driving the wedge pulls the shoulders closed until 'the shoulder joints almost become invisible' (Big Sand Woodworking)
  - none of the other listed behaviours. The key trick is a wedge (kusabi) or offset draw pin (komisen) that turns a loose puzzle fit into a tight, pre-loaded joint (JAANUS sen and kusabi entries)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): hooked gooseneck and dovetail heads, stub tenons and stepped seats trap the pieces so they can only come apart along one path (JAANUS; Big Sand Woodworking)
  - friction or clamping (force-fit): the driven wedge or draw pin presses the mating faces hard together, and the large contact area and snug fit are held by friction (ArchDaily on The Joinery animations; Big Sand Woodworking)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: as long as no glue is used, knocking out the wedge or pin lets the pieces slide apart without damage; this is why kanawa-tsugi is used to splice new wood into rotted temple and house posts (ne-tsugi) and why teaching models are taken apart and put back together repeatedly (Big Sand Woodworking). Semi-permanent if the pegs are glued or the wood has swollen tight ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: many times for dry-fitted models and furniture (Big Sand ran repeated assembly and disassembly cycles on its models to ease the fit); full-size building joints are normally assembled once and opened only for repairs. Wedges and pins may crush and need replacing after repeated hard driving ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: To make by hand: Japanese pull saws (ryoba, dozuki), chisels (nomi), planes (kanna), marking gauge (kebiki), ink line (sumitsubo) and square (sashigane) (Wikipedia 'Japanese carpentry'). With machines: table saw, router and jigs, bandsaw and drill press, then chisel clean-up (Big Sand Woodworking), a pantorouter (woodgears.ca) or a 3-axis CNC mill (Tsugite). To assemble: a mallet or hammer (genno) to drive wedges and pins; nothing for 3D-printed puzzle versions.
- **seal**: none: the joint is not meant to keep out water or air.
- **load**: Heavy at building scale: splices are used for ground sills (dodai), wall plates, door-track beams and eave purlins (JAANUS kanawatsugi). Strong in compression and bearing; kanawa-tsugi also resists pulling apart, bending and twisting thanks to its T-shaped stub tenons and wedge (JAANUS; Big Sand), and the half-blind tenon in lapped goosenecks 'prevents damage from twisting forces' (JAANUS). Weak points: the reduced neck (a gooseneck is only half the timber height; Big Sand), so splices are best placed directly over a support; a splice in an overhanging part 'results in a certain weakness' (JAANUS tsugite). Posts with beams let into three or four sides are hollowed out and 'structurally, the pillar is weak' (JAANUS shihouzashi). Joints whose thin parts run across the grain break easily: Wandel's Kawai tsugite 'breaks very easily' because 'Wood is strongest along the grain, and this joint doesn't take advantage of that' (woodgears.ca).
- **adjustable**: Only by the wedge: tapping the wedge or draw pin further in tightens the joint; the position of the parts is fixed by the cuts. Re-driving wedges after the wood dries and shrinks is possible in principle ⚑ [uncertain]. *(⚑ parts need confirming)*
- **play_and_precision**: None once wedged: the wedge takes up all clearance. Returns to the same position each time because the shoulders and tenons locate it. Very little tolerance for cutting errors: fitting is done by trial, rubbing ink (sumi) on one half to show where the other binds, and removing too much gives a 'sloppy fit' (Big Sand Woodworking). Designers leave deliberate small gaps where contact isn't needed, e.g. stub tenons cut slightly shorter than their recesses so the main shoulders close (Big Sand). Leaving no slack at all means extra chisel work to get the parts to slide (woodgears.ca).
- **access_needed**: both sides: the wedge or pin is driven in from one face and is usually knocked out from the other, and there must be room to slide or lift one timber along its assembly path; kanawa-tsugi 'cannot be slipped together from the side' and must go in lengthwise (JAANUS). Where access is limited, variants that slip in from the side (okkake daisen-tsugi) are used (JAANUS) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **materials**: Solid, straight-grained wood. Traditional timbers include sugi (Japanese cedar), hinoki (Japanese cypress), akamatsu (red pine) and keyaki (zelkova) (Wikipedia 'Japanese carpentry'); pins and keys are hardwood, 'usually oak or zelkova' (JAANUS sen). Big Sand's models use cherry halves with oak wedges. Also made as 3D-printed plastic puzzle joints (Printables, Thingiverse). Poor in plywood, MDF or particleboard, which have no strong long grain for thin hooks and tenons ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: hard by hand: needs sharp saws and chisels, accurate layout and a lot of test fitting (Big Sand found the gooseneck recess particularly tricky to fit because it has so many contact areas); the simpler kane-tsugi corner is described as 'within the capability of a modest woodworker with sharp tools' (Instructables). Moderate with a router jig, pantorouter or CNC; easy as a 3D-printed puzzle model.

### Making it

- **processes**: 
  - woodwork: traditional hand-tool joinery (pull saws, chisels, planes), or power tools with jigs (router, table saw, bandsaw, drill press) followed by chisel clean-up
  - CNC: 3-axis milling of joints designed for round cutters (Tsugite system; MiGumi method)
  - 3D print (FDM): puzzle and demonstration versions (kanawa-tsugi, Kawai tsugite) and joints for joining printed parts
- **print_in_place**: no: the pieces are printed separately and slid together; several designs are made of identical pieces, e.g. print the kanawa-tsugi half twice, or four or eight identical Kawai tsugite blocks (Printables; Thingiverse).
- **making_tips_3d_printing**: 1) Leave clearance: Hubs gives 0.5 mm as the tolerance for interlocking joints in FDM (0.2 mm for SLA and SLS). The customizable Kawai tsugite model deliberately adds 'some play for a smooth assembly' (Thingiverse, aeropic), while Wandel's wooden version with no slack needed chiselling before it would slide (woodgears.ca). Print a small test pair first. 2) Treat layer lines like wood grain: thin hooks, necks and stub tenons are weakest where they cross layers, so lay the joint so these features run along the print bed ⚑ [uncertain]. Wandel's joint failed first at its thin tip, which crossed the grain (woodgears.ca). 3) Many designs need no supports: the Kawai tsugite puzzle box prints with 20% infill, no supports and no adhesion aid (Printables, Chickenface22). 4) Add a small radius to edges to help assembly and reduce stress concentrations (Hubs). 5) Choose a tougher plastic: Hubs prefers ABS to PLA for FDM joints because it is more ductile, and PETG is a common alternative ⚑ [uncertain]. 6) If you add a wedge, print it lying flat so its taper runs along the layers, and expect it to relax over time in plastic ⚑ [uncertain]. 7) The ideamanhandle Kawai tsugite notes that the joint is impractical in wood because of grain and effort but 'fun and useful' in 3D printing (Thingiverse). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Usually none: the joint is cut into the timber, and wedges (kusabi), keys (shachi-sen) and square draw pins (komisen) are shop-made from hardwood (JAANUS). Useful tools to search for: Japanese pull saws (ryoba, dozuki, kataba), Japanese chisels (nomi), genno hammer, marking gauge (kebiki), sumitsubo ink line, sashigane square (Wikipedia 'Japanese carpentry'). Software: Tsugite, a free research prototype for designing voxel-based wood joints and exporting 3-axis CNC milling paths (free for personal and non-commercial research use).
- **rules_of_thumb**: 
  - In a lapped gooseneck (koshikake kama-tsugi) or lapped dovetail splice, the mortise occupies about half the thickness of the timber and the other half forms the seat that the second timber rests on (JAANUS 'koshikake kamatsugi', 'koshikake aritsugi').
  - The gooseneck head and neck are only half the overall stock height (Big Sand Woodworking 'Kama-tsugi / Gooseneck Joint').
  - Put a splice directly over a support such as a post (shintsugi); a splice in a part that overhangs its support (mochidashitsugi) is weaker (JAANUS 'tsugite').
  - Cut stub tenons slightly shorter than the depth of their recesses so they don't bottom out and leave gaps at the main shoulders; 'The more solid the contact between the main shoulders of these joints the stronger they will be' (Big Sand Woodworking 'Kanawa-tsugi Joinery Models Part 2').
  - Kanawa-tsugi wedges taper along their length and are trapezoid-shaped in cross-section to match the sloping faces of the joint (Big Sand Woodworking 'Kanawa-tsugi Joinery Models Part 2').
  - Plain scarf-joint tapers are generally cut between 1:8 and 1:10; interlocking scarves (hooked, keyed, nibbed) 'still depend on mechanical fastening to keep the joint closed', which is the job of the Japanese wedge or pin (Wikipedia 'Scarf joint').
  - FDM interlocking joints need about 0.5 mm tolerance (0.2 mm for SLA and SLS) (Hubs 'How to design interlocking joints').
  - When CNC milling, the round cutter leaves rounded inside corners that create gaps or overlaps and can block assembly, so joints must be redesigned for the cutter radius rather than copied directly (MiGumi, arXiv 2510.13168; Tsugite uses 'corner rounding' path planning).

### When to use it

- **everyday_examples**: 
  - Temple, shrine and old house posts with a new piece of wood spliced into the rotted base (ne-tsugi), e.g. at the Edo-Tokyo Open Air Museum (Big Sand Woodworking)
  - Ground sills and roof purlins of traditional Japanese timber buildings (JAANUS)
  - Wooden 'impossible joint' puzzles and viral joinery videos such as the Kawai tsugite three-way joint (Core77; woodgears.ca)
  - Picture frames and table corners made with the kane-tsugi three-way pinned mitre (Fine Woodworking; Instructables)
- **when_to_use**: Use these joints when you want solid-wood parts joined with no visible metal, glue or screws, when a joint must be taken apart later for repair, moving or replacing a damaged section (ne-tsugi splices exist for exactly this reason; Big Sand), or when a beam must be made longer than the available timber. Splices suit beams that rest on supports, such as sills and plates (JAANUS). Three-way corners suit frames where a post meets two rails. For makers they are also great as puzzles, teaching models and showpieces, and as printed demonstration pieces or joints between large printed parts.
- **when_not_to_use**: Avoid them when you need a quick or cheap joint: they take hours to fit by hand. Don't use across-grain puzzle joints like the Kawai tsugite where strength matters; Wandel found it 'breaks very easily' (woodgears.ca). Avoid splicing where the joint overhangs its support (JAANUS). Don't use them in plywood, MDF or particleboard; use biscuits, dowels, knock-down fittings or a mortise and tenon instead. For structural building work, have the design checked by an engineer ⚑ [uncertain]. If you only need a strong corner in furniture, a glued mortise and tenon or dovetail is simpler; for joining large 3D prints, simpler dovetail keys or alignment pins are easier. *(⚑ parts need confirming)*
- **environment_limits**: Wood swells and shrinks with moisture, so these tight-fitting joints can bind when damp or loosen when dry; even the moisture in a water-based dye raised the grain enough to tighten Big Sand's model joints, fixed by waxing and working the joints (Big Sand Woodworking). Wet wood rots, especially at post bases on the ground, which is why ne-tsugi repairs are needed (Big Sand). Printed plastic versions creep under constant load and soften with heat (PLA especially) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Splicing a load-bearing post means temporarily supporting the building: Big Sand's crew uses 'a series of temporary beams, posts, and jacks to lift the structure around the post' before cutting out the rotten part. Sharp chisels and saws cause most hand-tool injuries; keep both hands behind the edge ⚑ [uncertain]. Driven wedges can split thin parts if forced ⚑ [uncertain]. Small printed puzzle pieces are a choking hazard for young children ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Sloppy fit from paring away too much, or binding in hard-to-see places; use sumi ink or pencil to find contact points and trim a little at a time (Big Sand). Tear-out on the tiny sloped shoulders of the gooseneck rebate (Big Sand, reader comment). Stub tenons bottoming out before the shoulders close; cut them a little short (Big Sand). Joints tightening after finishing because moisture raised the grain; use alcohol-based dyes or leave a little extra clearance (Big Sand). No slack in the design, so the joint won't slide (woodgears.ca). Thin cross-grain tips breaking off, after which 'the rest of the joint doesn't hold together very well' (woodgears.ca). In CNC work, rounded inside corners making parts clash; design for the cutter radius (MiGumi; Tsugite). Posts weakened by too many beams let into them (JAANUS shihouzashi).
- **related**: 
  - Mortise and tenon (incl. wedged, drawbored and tusk tenons): the basic tongue-in-hole joint these combine; a tusk tenon is locked by a removable wedge in the same way
  - Dovetail joint and sliding dovetail: flared shapes that resist pulling apart; Japanese splices often use dovetail (ari) heads instead of goosenecks
  - Butterfly key (bow-tie key): a separate bow-tie insert across a joint, instead of shaping the timbers themselves
  - Self-locking wedge (wedge clamp, taper key): the wedge principle on its own, used to lock these joints
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): the 3D-printing equivalents for joining printed pieces
  - Plain scarf joint and keyed-hook scarf ('trait de jupiter'): Western splices that usually rely on bolts, plates or glue to stay closed (Wikipedia 'Scarf joint')
  - Knock-down cam-lock and cross-dowel connectors: undoable joints using metal hardware instead of shaped wood

### Pictures, videos and models

- **links**: 
  - [Kanawa-tsugi (金輪継ぎ), Wikimedia Commons, by Abasaa (2017)](https://commons.wikimedia.org/wiki/File:Kanawa-tsugi.JPG): Photo of a kanawa-tsugi wedged scarf joint in wood *(licence: Public domain (released by the author))*
  - [Lapped gooseneck joint (腰掛け鎌継ぎ), Wikimedia Commons, by うぃき野郎 (2026)](https://commons.wikimedia.org/wiki/File:Lapped_gooseneck_joint.png): Diagram of the lapped gooseneck splice (koshikake kama-tsugi), showing how the hooked head drops into its matching mortise *(licence: CC BY 4.0)*
  - [These Mesmerizing GIFs Illustrate the Art of Traditional Japanese Wood Joinery (ArchDaily)](https://www.archdaily.com/796918/these-mesmerizing-gifs-illustrate-the-art-of-traditional-japanese-wood-joinery): Animated GIFs from The Joinery (@TheJoinery_jp), made in Fusion 360, showing many Japanese splice and corner joints sliding together *(licence: link only)*
  - [Recreating the clever 3-way joint (Kawai Tsugite), Matthias Wandel, woodgears.ca](https://woodgears.ca/puzzles/3way_joint.html): Step-by-step photos of working out, pantorouting and assembling the three-way Kawai tsugite joint, plus a strength test *(licence: link only)*
  - [Sampo zashi (YouTube, Elliot Treacy)](https://www.youtube.com/watch?v=XC5Q41YFXxo): Video of a sampo-zashi three-way joint (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Japanese Joinery - Kanawa Tsugi (Migueppc, Printables)](https://www.printables.com/model/723480-japanese-joinery-kanawa-tsugi): 3D-printable kanawa-tsugi splice; both halves are the same, so you print model 'A' twice. Details read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Kawai Tsugite Joint Puzzle (Chickenface22, Printables)](https://www.printables.com/model/526975-kawai-tsugite-joint-puzzle): Puzzle box built from four identical Kawai tsugite joints; 20% infill, no supports. Details read through the Printables public API. *(licence: CC0 (public domain))*
  - [Kawai Tsugite customizable puzzle (aeropic, Thingiverse)](https://www.thingiverse.com/thing:2821085): OpenSCAD model (usable in the Thingiverse Customizer) that cuts a pyramid corner and removes three prismatic bits, 'as a good Japanese woodworker would do', with adjustable play; print 2, 4 or 8 identical pieces *(licence: CC BY-NC 4.0)*
  - [3-WAY Joint (Kawai Tsugite) (ideamanhandle, Thingiverse)](https://www.thingiverse.com/thing:1085447): Printable three-way Kawai tsugite joint *(licence: CC BY-SA 4.0)*
  - [Tsugite: Interactive Design and Fabrication of Wood Joints (Larsson et al., UIST 2020)](https://github.com/marialarsson/tsugite): Python research software for designing wood joints on a voxel grid, with live checks for slidability, fabricability and grain direction, that exports 3-axis CNC milling paths *(licence: Free for personal use and non-commercial research; commercial use by agreement (per README; repository also contains a GNU FDL 1.3 licence file))*
- **diagram_idea**: A three-step exploded animation of a kanawa-tsugi splice: two identical beam ends with sloping faces and T-shaped stub tenons slide together lengthwise, then a tapered wedge is tapped into the central gap and arrows show the shoulders being pulled tight, with a small inset of a three-way post where beams enter from three sides.
- **sources**: 
  - https://www.aisf.or.jp/~jaanus/deta/k/kamatsugi.htm
  - https://www.aisf.or.jp/~jaanus/deta/k/kanawatsugi.htm
  - https://www.aisf.or.jp/~jaanus/deta/k/koshikakekamatsugi.htm
  - https://www.aisf.or.jp/~jaanus/deta/k/koshikakearitsugi.htm
  - https://www.aisf.or.jp/~jaanus/deta/o/okkakedaisentsugi.htm
  - https://www.aisf.or.jp/~jaanus/deta/s/shiguchi.htm
  - https://www.aisf.or.jp/~jaanus/deta/t/tsugite.htm
  - https://www.aisf.or.jp/~jaanus/deta/s/sen.htm
  - https://www.aisf.or.jp/~jaanus/deta/k/kusabi.htm
  - https://www.aisf.or.jp/~jaanus/deta/s/shihouzashi.htm
  - https://www.aisf.or.jp/~jaanus/deta/a/arikake.htm
  - https://www.bigsandwoodworking.com/kama-tsugi-gooseneck-joint/
  - https://www.bigsandwoodworking.com/kanawa-tsugi-joinery-models-part-1/
  - https://www.bigsandwoodworking.com/kanawa-tsugi-joinery-models-part-2/
  - https://www.bigsandwoodworking.com/%E6%A0%B9%E7%B6%99%E3%81%8E-ne-tsugi/
  - https://woodgears.ca/puzzles/3way_joint.html
  - https://www.core77.com/posts/41624/Japanese-Woodworking-Madness-A-Three-Way-Wood-Joint
  - https://www.finewoodworking.com/2008/09/01/pinned-miter-combines-strength-and-beauty
  - https://www.instructables.com/Kane-Tsugi-Joint-Three-Way-Pinned-Corner-Mitre/
  - https://www.archdaily.com/796918/these-mesmerizing-gifs-illustrate-the-art-of-traditional-japanese-wood-joinery
  - https://en.wikipedia.org/wiki/Japanese_carpentry
  - https://en.wikipedia.org/wiki/Scarf_joint
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.ma-la.com/tsugite.html
  - https://raw.githubusercontent.com/marialarsson/tsugite/master/README.md
  - https://arxiv.org/abs/2510.13168
  - https://commons.wikimedia.org/wiki/File:Kanawa-tsugi.JPG
  - https://commons.wikimedia.org/wiki/File:Lapped_gooseneck_joint.png
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:2821085
  - https://www.thingiverse.com/thing:1085447
  - https://www.youtube.com/watch?v=XC5Q41YFXxo
  - https://www.youtube.com/watch?v=qUhpfSVS-LU

### Finder tags

- **connects**: boards or sheet, lid, door or cover
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, power tools, hand tools
- **load_max**: heavy
- **usual_process**: woodwork
- **adjustable**: partly
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** access_needed, adjustable, environment_limits, making_tips_3d_printing, materials, removability, reuse_cycles, safety_notes, when_not_to_use

## 250 Knock-down cam-lock and cross-dowel connectors

*interlocking joints & joinery.* Flat-pack fittings where a turning cam grabs a bolt head, or a barrel nut takes a bolt through the other panel, so furniture can be taken apart

*Also covers:* Also covers how Confirmat screws compare with cams.

### What it is

- **plain_name**: Hidden metal fittings for flat-pack furniture: a round disc you turn with a screwdriver hooks the head of a bolt and pulls two boards tight, or a long bolt through one part screws into a small metal barrel hidden in the other; both come undone again when you turn them back
- **term**: Knock-down (KD) furniture connectors: the eccentric cam connector (cam lock, cam-and-dowel fitting) and the cross dowel with connector bolt (barrel nut)
- **aliases**: 
  - cam lock, cam fastener, cam nut, cam post or cam dowel (the bolt part) (Wikipedia 'Butt joint', section 'Cam fasteners')
  - cam and dowel fitting (DT Online)
  - eccentric cam connecting fitting, eccentric connector (Hettich)
  - connecting bolt, dowel pin, tie bolt (the bolt part) (Furnica)
  - Minifix (Häfele brand name, used loosely in the trade for any cam lock connector) (Furnica)
  - Rastex (Hettich brand of eccentric cam connector) (Hettich)
  - cross dowel, barrel nut, steel cross dowel, dowel nut (Wikipedia 'Barrel nut')
  - Quermutter or Quermutterbolzen (German for cross dowel / barrel nut) (Wikimedia Commons; Printables)
  - furniture connector bolt, joint connector bolt (JCB), used with a cross dowel or joint connector nut (DT Online; Rockler)
  - knock-down fitting, KD fitting, flat-pack or ready-to-assemble (RTA) fittings (DT Online; Wikipedia)
  - Not to be confused with a camlock hose coupling, a climbing camlock or a cam lock latch for cabinet doors (Wikipedia 'Camlock' disambiguation)
- **family**: interlocking joints & joinery
- **other_families**: over-centre, toggle & cam clamps, clamping, magnetic & friction connections
- **one_liner**: Two-part metal fittings that pull a panel edge tight against another panel or rail and hold it there: in a cam lock a turning cam grabs a bolt head, and in a cross dowel a bolt screws into a threaded barrel set across it, so furniture can be put together and taken apart with just a screwdriver or Allen key.
- **complexity**: A few parts. Cam lock: a round cam housing (usually 15 mm across, die-cast zinc) and a connecting bolt with a shaped head, normally used alongside two or more wooden dowels for alignment (Hettich; Furnica). Cross dowel: a furniture connector bolt (often with a hex socket head) and a slotted steel barrel nut with a threaded hole through its side (Wikipedia 'Barrel nut'; Rockler).
- **how_it_works**: Cam lock: the bolt is screwed into the face of one panel so its head sticks out; the other panel has an 8 mm hole in its edge that runs into a 15 mm round pocket holding the cam. Push the panels together so the bolt head enters the cam, then turn the cam about half a turn: its spiral inner groove (eccentric, like a snail-shaped ramp) catches the bolt head and draws it inward, pulling the panels tight (Wikipedia; Furnica). Cross dowel: a bolt passes through one part into a hole in the end of the other; a second hole drilled across that path holds the barrel nut, which is turned with a screwdriver in its slot until its threaded hole lines up, then the bolt is tightened into it, clamping the parts together (Wikipedia 'Barrel nut'). In both, the clamping pull holds the joint and wooden dowels or tenons take the sideways (shear) load (Furnica).

### Finder attributes

- **job**: 
  - join and hold: joins panel edges to faces (carcase corners, shelves, drawer boxes) or rails to posts (bed frames, table aprons)
  - lock, and release by hand: a half-turn back on the cam, or unscrewing the bolt, undoes the joint without damage (Furnica)
  - tighten and hold tension: the cam ramp or bolt thread pulls the parts hard together and keeps them clamped
  - line parts up exactly: 'They self-align when tightened' (Wikipedia); Hettich's cam pulls the bolt into a centred position
- **motion**: none: once tightened the parts don't move. Inside the fitting the cam rotates about 180-210 degrees while being tightened (Furnica).
- **degrees_of_freedom**: 0 when tightened. Before tightening, the bolt can slide in and out of its edge hole (1 degree of freedom along the bolt).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): the cam's spiral track draws the bolt head in and holds the pull; Hettich's Rastex cam 'allows furniture side panels to be pulled into place from space up to 4 mm from the panel end'
  - self-aligning or self-centring: the fittings self-align when tightened (Wikipedia 'Butt joint'), and indentations in the cam pull the bolt to the centre (Hettich)
  - motion conversion (rotary to linear): turning the cam converts a twist of the screwdriver into a straight pull on the bolt
  - quick-release: only with a tool; a half-turn anticlockwise releases the cam (Furnica)
- **holding_principle**: 
  - friction or clamping (force-fit): bolt tension clamps the panel edge against the other part
  - shape (the parts interlock; form-fit): the cam's groove hooks behind the bolt head, the barrel nut's thread traps the bolt, and wooden dowels take shear and keep the panels aligned (Wikipedia; Furnica)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: designed 'for repeated assembly and disassembly' (Wikipedia 'Butt joint'); turning the cam back or unscrewing the bolt releases the joint without damaging the panels (Furnica).
- **reuse_cycles**: many times in solid wood with cross dowels and metal threads; a few to many times in particleboard or MDF, where the screw thread of the cam bolt and the board around the fittings wear and crumble with each cycle ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: To assemble or take apart: one driver, usually a hex (Allen) key or screwdriver (Wikipedia); Hettich cams take a flat-blade screwdriver, PZ3 Pozidriv or a 4 mm Allen key. To install: drill with depth stop, 15 mm Forstner bit, 8 mm and 5 mm bits and a drilling jig for cams (Furnica); 9/32 inch and 25/64 inch bits and a cross-dowel jig for inch-size cross dowels (Rockler). A drill press helps keep holes square (House of Hacks).
- **seal**: none
- **load**: Medium. In tests on 18 mm particleboard L-shaped corners, standard eccentric cam joints with beech dowels carried average bending moments of about 14-19 N·m, and a version with a metal-capped bolt reached 31 N·m in the tension test and 47 N·m in the compression test; failure came from the chipboard surface cracking or the bolt head crushing into the board, not the metal parts breaking (Janíková et al. 2025, Materials 18(9):2114). Strong in straight pull; the cam itself 'cannot withstand shear loads', so dowels are always added (Furnica). Weak against racking of tall cabinets unless a back panel is fitted ⚑ [uncertain]. Cross dowels in solid wood carry heavier loads, e.g. bed rails ⚑ [uncertain]. Makers of Confirmat screws say cams are weaker than Confirmat screws, though better than drywall screws: Wikipedia reports the claim and flags it '[independent source needed]', and its source, Fine Homebuilding (2008), quotes a product manager at Häfele, a Confirmat maker, saying Confirmats are 'less expensive, less complicated and stronger' than cam-and-bolt connectors. No independent test was found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: Slightly: a loose cam can be turned tighter, and the Hettich cam can close a gap of up to 4 mm (Hettich). Positions are fixed by the drilled holes.
- **play_and_precision**: No play once tight. Accuracy depends entirely on drilling: 'An offset of just one millimetre inevitably leads to uneven joints or cracking in the panel material' (Furnica); Hettich's drilling drawings allow +0.5/-0.3 mm on the 24 or 34 mm hole distance. The dowels do the precise locating; the cam only pulls (Furnica). Cross dowels tolerate a little error because the barrel can be rotated to meet the bolt (Wikipedia 'Barrel nut').
- **access_needed**: one side only (blind) for a cam lock: all holes are on the inside face and in the edges, leaving nothing visible outside (Furnica), but you must reach the inside face to turn the cam. Both sides for a cross dowel: the bolt head is on the outside of one part and the barrel is put in from the inside or underside of the other.
- **materials**: Panels of particleboard (chipboard), MDF, melamine-faced board and plywood, usually 16-19 mm thick (Furnica; DT Online); solid wood for cross-dowel frames and bed rails (Rockler). Cam housings are die-cast zinc, with plastic versions for light loads (Hettich; Furnica); bolts and cross dowels are steel. Bolts have a direct wood thread (about 5 mm) or an M6 metric thread into an insert nut (Furnica). 3D-printed PETG replacement cams and cross dowels exist for repairs (Printables).
- **maker_difficulty**: moderate: the fittings are cheap and easy to buy, but every hole must be drilled square and in the right place to within about a millimetre, so a drilling jig or drill press and depth stops are needed (Furnica; House of Hacks). Assembly itself is easy.

### Making it

- **processes**: 
  - off-the-shelf part: cam housings, connecting bolts, cross dowels and connector bolts
  - woodwork: drilling the holes with Forstner and twist bits, a jig or a drill press
  - CNC: drilling patterns on a CNC router or boring machine (standard in industry, often on the System 32 grid)
  - 3D print (FDM): replacement cams and cross dowels, and drilling jigs and templates
- **print_in_place**: no: the cam and bolt, or barrel and bolt, are separate parts fitted into drilled holes.
- **making_tips_3d_printing**: 1) Printed cams and cross dowels work as replacements but are weaker than metal: 'It's not going to lock as well as metal parts do' (Printables, parametric cross dowel). 2) Use PETG or another tough plastic rather than PLA: one designer warns that 'PLA tends to creap [creep] under load over time' (Printables, Cam Lock Connector), and another suggests 'something less brittle than PLA' (Printables, parametric cross dowel). 3) Print with 100% infill and as many perimeters (walls) as possible, since these are fully loaded parts (Printables). 4) Print a cross dowel lying down in the file's orientation, not upright; upright looks nicer but is weaker (Printables, parametric cross dowel). 5) Clean up or cut threads with a tap after printing (Printables, parametric cross dowel). 6) A replacement cam printed at 0.1 mm layers needed a small support under its base only, because without it the part rocked during printing (Printables, Replacement Furniture Cam Lock). 7) For printed projects that need to come apart, a better route is often a metal barrel nut or heat-set insert in a printed hole, with the bolt through the other part ⚑ [uncertain]. 8) Print drilling templates to place cam and bolt holes accurately (Printables Rastex 15 template; cam-lock drilling jig). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Cam connectors: 'eccentric cam connector', 'cam lock connector' or 'Minifix' type, 15 mm housing standard with 12 mm for thin parts and 25 mm heavy-duty versions (Furnica; Hettich Rastex 15/25), with or without a rim, plus plastic cover caps. Connecting bolts ('cam dowels'): 24, 28 or 34 mm drilling distance, Euro wood thread (5 mm pilot) or M6 thread with insert nut, single or double-ended for centre panels (Furnica). Cross dowels ('barrel nuts'), e.g. M6 x 10 mm (Wikipedia) or inch sizes with 1/4 inch bolts ⚑ [uncertain], and furniture connector bolts from 2 to 4-3/4 inch long (Rockler). Helpers: fluted wooden dowels (8 mm) or quick-install steel dowels (Hettich Rapid S, Twister), insert nuts, drilling jigs (Rockler Cross Dowel Drilling Jig; cam-lock drilling templates). Related off-the-shelf fasteners: confirmat screws, sex bolts, T-nuts, hanger bolts (Wikipedia 'Furniture screw'). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Cam lock (metric): 15 mm Forstner hole for the cam, centred 24 mm or 34 mm from the panel edge to suit the bolt length; about 12.5 mm deep in a 16 mm panel and 14.5 mm in a 19 mm panel; 8 mm edge hole at mid-thickness running into the cam hole; 5 mm pilot about 11-13 mm deep for a Euro-thread bolt in the other panel; front edge to hole centre normally 37 mm on the System 32 grid (Furnica 'Fitting Cam Lock Connectors').
  - Hettich's Rastex 15 drilling drawings show the same 15 mm and 8 mm holes, the edge hole at half the panel thickness, 24 or 34 mm from the edge with a tolerance of +0.5/-0.3 mm, and a depth dimension of 12.7 mm for 16 mm shelves, 13.4 mm for 18 mm and 13.7 mm for 19 mm panels (Hettich 'Connecting technology for conventional applications' 2016, p. 10).
  - Always combine cams with wooden dowels (usually 8 mm): the dowels take shear and alignment, the cam only pulls (Furnica).
  - Turn the cam roughly 180-210 degrees clockwise to lock and back half a turn to release; screw the bolt in until its collar sits flush, because a bolt left too high or too deep won't engage properly (Furnica).
  - Inch version: 5/8 inch Forstner for the cam, centred 1-5/16 inch from the edge; 5/16 inch edge hole; 3/16 inch pilot for the post. 'If it's too far from the edge, the cam won't engage and if it's too close to the edge the cam won't tighten against the wood' (House of Hacks).
  - Cross dowels in 3/4 inch stock: 9/32 inch hole for the connector bolt and 25/64 inch hole for the cross dowel, bolts 2 to 4-3/4 inch long (Rockler Cross Dowel Drilling Jig).
  - In 18 mm particleboard corner tests, a cam with a metal-capped bolt gave 147% higher bending moment capacity under compression than a standard cam with a Euro-screw bolt (Janíková et al. 2025).

### When to use it

- **everyday_examples**: 
  - Flat-pack bookcases, wardrobes and kitchen cabinets, where a round metal disc with a screwdriver slot sits near each shelf end (DT Online; Wikipedia)
  - Bed frames and bunk beds, where long bolts through the posts screw into barrel nuts in the side rails (Printables parametric cross dowel for a bunk bed; Rockler)
  - Desks and TV units made of melamine-faced chipboard that can be flattened again for moving (Furnica)
  - Detachable table legs and knock-down workbenches built with bolts and cross dowels ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use cam locks for boxes and cabinets made of sheet materials such as particleboard, MDF or plywood that must ship flat or be taken apart for moving; they are hidden, fast to assemble with one driver, and need no glue (Wikipedia; Furnica). Use cross dowels where you need a strong, removable joint in solid wood or thick panels, such as bed rails, table aprons, workbenches and frames (Rockler). Both are good for hobbyists because they 'are easier and require less skill to install than some of the other more traditional techniques' (Wikipedia).
- **when_not_to_use**: Avoid cams where the joint takes large sideways (shear) or twisting loads without dowels or a back panel; the cam alone only pulls (Furnica). Don't use them in thin boards (below about 12 mm) or close to an edge where the board can split ⚑ [uncertain]. For permanent furniture that will never be moved, glued dowels, biscuits or a mortise and tenon are stronger and cheaper. Where you can't drill accurately, use a bracket, confirmat screw or pocket screw instead. For tool-free assembly consider a wedge dowel or lever-cam panel connector; for sheet parts cut on a laser or CNC, a T-slot joint (captive nut) does the same job with a standard nut. Wikipedia notes that cam-and-bolt connectors can be swapped out but 'are more complex and expensive' than Confirmat screws, which compress their own thread in particleboard and can be removed and refitted 'dozens of times' (Wikipedia 'Confirmat screw'); Fine Homebuilding quotes a maker saying a Confirmat still holds after 30 or 40 cycles in MDF or particleboard (Fine Homebuilding 2008). *(⚑ parts need confirming)*
- **environment_limits**: Particleboard and MDF lose strength and swell when damp, so the thread grip of cam bolts and the edges around the holes weaken in bathrooms or damp rooms ⚑ [uncertain]. Joint strength depends on the board's internal bond strength: tests show failures by the board's surface layer cracking rather than the fittings breaking (Janíková et al. 2025). Cams can work loose with repeated racking or vibration; some cams have ratchet-like latching steps and serrated outsides 'to prevent the eccentric cam from working loose' (Hettich Rastex 25). Printed plastic cams creep under constant load, especially in PLA (Printables). *(⚑ parts need confirming)*
- **safety_notes**: Tall flat-pack furniture held with knock-down fittings should be anchored to the wall so it can't tip over and injure someone (Wikipedia 'Furniture screw', citing IKEA's 'Secure it!'). Drilling the cam hole too deep can break through the finished outer face (Furnica). Check and re-tighten cams on beds, bunk beds and other load-bearing furniture, since a loose joint can let it collapse ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Stripped or broken cam housing, often because the bolt wasn't screwed deep enough so the cam only grips the tip of its head (Furnica). Panels not flush because the edge hole wasn't square or the 24/34 mm distance was missed by a few millimetres (Furnica). Forstner bit breaking through the decorative face for lack of a depth stop (Furnica). Under load, the particleboard surface cracks around the bolt, the bolt head crushes into the board, or an insert nut pulls out (Janíková et al. 2025). Cam too far from the edge so it can't engage, or too close so it can't tighten (House of Hacks). Cross-dowel bolt missing the barrel's thread; rotate the barrel with a screwdriver in its slot until the bolt lines up (Wikipedia 'Barrel nut'). Chipboard threads wearing out after several moves ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Lever-cam panel connector (self-clamping click connector): a hidden fitting in a milled slot that is locked by a key or clicks shut, needing only a small access hole
  - Wedge dowel (click-in grooved dowel): a ribbed dowel that slides into a groove and wedges tight with no tools and no metal
  - T-slot joint (captive nut and bolt joint): the laser-cut sheet version, where a square nut sits in a T-shaped slot like a flat cross dowel
  - Captive nut pocket (nut trap) and heat-set or press-fit threaded inserts: ways to put a nut into a 3D print or wood so a bolt can be removed later
  - Cam latch (quarter-turn cam lock): a cabinet door lock with a rotating tongue, not a panel connector, despite the similar name
  - Eccentric cam lever (quick-release skewer): a lever-operated cam clamp that needs no tool
  - Mortise and tenon with tusk wedge: the traditional wooden knock-down joint
  - Aluminium-extrusion connectors (T-slot nuts and brackets): the equivalent knock-down system for metal frames
  - Wood screw: covers the Confirmat screw, a fat, blunt cabinet screw driven into a stepped hole that joins board edges to faces with no separate nut or cam

### Pictures, videos and models

- **links**: 
  - [Cam connector (cam screw and cam nut), Wikimedia Commons, by Swpb](https://commons.wikimedia.org/wiki/File:Cam_connector_cropped.png): Photo of a furniture cam lock housing next to its connecting bolt *(licence: CC BY-SA 4.0)*
  - [Cam lock patent 1, Wikimedia Commons (patent drawing by Peter Busse, 1978)](https://commons.wikimedia.org/wiki/File:Cam_lock_patent_1.png): Patent diagram of a cam fastening system showing the cam, bolt and how the cam draws the bolt head in *(licence: Public domain)*
  - [Cross dowel cutaway, Wikimedia Commons, by Wizard191](https://commons.wikimedia.org/wiki/File:Cross_dowel_cutaway.png): Cutaway drawing of a connector bolt passing through one part and into a cross dowel set across the other *(licence: CC BY-SA 3.0)*
  - [Montage Quermutterbolzen (fitted cross dowel), Wikimedia Commons, by Drucker03](https://commons.wikimedia.org/wiki/File:Montage_Quermutterbolzen.png): Schematic of a fitted cross dowel and bolt joining two wooden parts *(licence: CC BY-SA 4.0)*
  - [How to Install Cross Dowels and Bolts | New Woodworking Jig! (YouTube, Rockler Woodworking and Hardware)](https://www.youtube.com/watch?v=v9G_0caGrxI): Video on drilling and fitting cross dowels and connector bolts with a jig (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Rastex 15 template (Philipp Reichart, Printables)](https://www.printables.com/model/439535-rastex-15-template): Printable drilling template for both holes of a 15 mm eccentric cam connector with 34 mm bolts in 19 mm boards (15 mm Forstner about 14 mm deep, 8 mm edge hole, 5 mm bolt hole). Details read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Drilling jig for cam lock connectors (k4mk4l, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1848618-drilling-jig-for-cam-lock-connectors): Parametric FreeCAD jig with an edge stop: 15 mm cam hole 34 mm from the edge, 8 mm dowel holes 32 mm apart, using a pipe reducer and 608 bearing races as drill bushings *(licence: CC BY-NC-SA)*
  - [Parametric Cross Dowell Barrel Nut for furniture (Rusty Phillips, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/638080-parametric-cross-dowell-barrel-nut-for-furniture): Parametric Fusion 360 cross dowel (default 5/8-18 thread, 1/2 inch barrel), printed in PETG at 100% infill and tapped, made to replace missing bunk-bed parts *(licence: CC0 (public domain))*
  - [Cam Lock Connector (firstgizmo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/956800-cam-lock-connector): Printable replacement for common furniture cam locks; print at 0.2 mm layers with many perimeters, in PETG rather than PLA *(licence: CC BY-NC)*
- **diagram_idea**: A cutaway of a shelf meeting a cabinet side: on the left a cam lock, with the bolt screwed into the side panel, its head sitting in the round cam in the shelf, and the cam shown before and after a half turn with an arrow showing the head being pulled in; on the right a cross dowel, with a long bolt through a bed post screwing into a barrel nut sitting in a cross hole in the rail; wooden dowels drawn beside each to show they carry the sideways load.
- **sources**: 
  - https://en.wikipedia.org/wiki/Furniture_screw
  - https://en.wikipedia.org/wiki/Barrel_nut
  - https://en.wikipedia.org/wiki/Cam_fastener
  - https://en.wikipedia.org/wiki/Cam_lock
  - https://wiki.dtonline.org/index.php/Knock_Down_Fittings,_Brackets_and_Plates
  - https://furnica.co.uk/blogs/guides/fit-cam-lock-connectors-minifix-guide
  - https://furnica.co.uk/blogs/guides/cam-lock-connector-design-function-explained
  - https://furnica.com/blogs/guides/cam-lock-connectors-connecting-bolts-carcass-construction
  - https://web.hettich.com/fileadmin/media/Connecting_technology_2016_16359_HUS.pdf
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12072453/fullTextXML
  - https://www.house-of-hacks.com/2014/05/how-to-drill-holes-for-cam-lock.html
  - https://www.rockler.com/rockler-cross-dowel-drilling-jig
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Cam_connector_cropped.png
  - https://commons.wikimedia.org/wiki/File:Cam_lock_patent_1.png
  - https://commons.wikimedia.org/wiki/File:Cross_dowel_cutaway.png
  - https://commons.wikimedia.org/wiki/File:Montage_Quermutterbolzen.png
  - https://www.youtube.com/watch?v=v9G_0caGrxI
  - https://en.wikipedia.org/wiki/Confirmat_screw
  - https://www.finehomebuilding.com/2008/06/27/whats-the-difference-cabinet-assembly-screws

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, power tools, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: partly
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, load, making_tips_3d_printing, off_the_shelf_parts, reuse_cycles, safety_notes, when_not_to_use

## 251 Wedge dowel (click-in grooved dowel)

*interlocking joints & joinery.* A ribbed dowel that clicks into a groove and wedges the panels tightly together, with no screws or tools

### What it is

- **plain_name**: A small ribbed peg, like a screw with no point, that comes already fixed in one board: you push it into a slot in the other board and slide or twist the board along until it wedges tight and clicks into place, with no screws, glue or tools
- **term**: Wedge dowel (grooved dowel sliding in a tapered slot with inclined grooves; patented as a 'furniture joint')
- **aliases**: 
  - wedge dowel (IKEA's name for it) (IKEA Museum; IKEA Facts sheet; Design Museum)
  - furniture joint with male and female parts having co-operating inclined grooves (US patent 9,447,804 B2, Inter IKEA Systems)
  - wedge-dowel legs: the V-shaped grooved leg tops of the LISABO table (Consumer Reports)
  - click-together, snap-together or tool-free furniture joint (press descriptions; Design Museum: 'It clicks into pre-drilled holes')
  - ribbed dowel, grooved dowel, click-in dowel (plain descriptions)
  - Not the same as a 'wedged dowel', a round dowel split by a wedge driven into a saw cut to lock it in a hole (traditional woodworking)
- **family**: interlocking joints & joinery
- **other_families**: quick-release & tool-free, snap & clip fits
- **one_liner**: A factory-fitted dowel with rings of grooves on one furniture part slides along a milled slot with slightly sloping grooves in the other part, so the sloping grooves wedge the parts together and lock them tight without screws, glue or tools, and the joint can be slid apart again.
- **complexity**: A few parts: a male part (a grooved dowel or pin, made of wood or plastic, fixed into one panel by glue, pressing or an expanding peg, or milled into the part itself) and a female part (a milled slot or tapered groove with inclined grooves in the other panel). Some table versions add a small plastic locking piece tightened with an Allen key (US 9,447,804 B2; IKEA Facts; Consumer Reports).
- **how_it_works**: The dowel has grooves all round like a screw thread, but straight; the slot in the other part has matching grooves that slope very slightly along its length, and the slot narrows from a wide entry opening to its inner end (US 9,447,804 B2). You push the dowel into the wide end, then slide the panel (or twist a table leg) so the dowel travels along the slot; the sloping grooves act like a wedge and 'the first furniture part ... is drawn or pulled against the second furniture part during the sliding movement' (US 9,447,804 B2). The grooves of the softer part are slightly squashed as it slides, which locks the parts, and a distinct end position tells the user it is home, the 'click' (US 9,447,804 B2). Sliding it back the other way releases it.

### Finder attributes

- **job**: 
  - join and hold: joins shelves, sides, drawers and table legs to tops with no visible fittings (IKEA Museum; IKEA Facts)
  - tighten and hold tension: the sloping grooves pull the two parts hard together as the dowel slides (US 9,447,804 B2)
  - line parts up exactly: because the dowel is fixed to one part, assembly is 'pretty fail-proof', and the end position puts the parts where they should be (IKEA Museum; US 9,447,804 B2)
  - lock, and release by hand: a stated aim is that the parts can be separated after assembly 'without harming the furniture parts' (US 9,447,804 B2)
- **motion**: none once assembled. During assembly the dowel slides a short way along its slot, or rotates for round and curved versions (US 9,447,804 B2).
- **degrees_of_freedom**: 0 when locked. During assembly 1: sliding along the slot (or turning, in the round version where 'the male part is then rotated in the female part until it reaches an end position') (US 9,447,804 B2).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): grooves inclined at about 2 degrees draw the parts together and squeeze out any gap as the dowel slides home (US 9,447,804 B2)
  - self-aligning or self-centring: the dowel is already fixed in one panel and the slot guides it to a set end position where the parts abut in the desired position (US 9,447,804 B2; IKEA Museum)
  - quick-release: in the sense of tool-free assembly and disassembly; no screws or tools are needed (IKEA Facts), although the LISABO table adds a small plastic lock tightened with an Allen key (Consumer Reports)
  - a 'click' or distinct end position confirms that the joint is fully home (US 9,447,804 B2; Design Museum)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the rings of grooves on the dowel sit in the grooves of the slot, so the joint can't be pulled straight apart
  - friction or clamping (force-fit): the sloping grooves wedge the parts together and compress the softer grooves, locking the joint (US 9,447,804 B2)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for most versions: slide or twist the part back towards the wide end of the slot to separate it without damage (US 9,447,804 B2; IKEA Facts: 'making screws and tools unnecessary'). The LISABO table's extra plastic locking piece needs an Allen key (Consumer Reports).
- **reuse_cycles**: many times, as designed (Consumer Reports: the legs are 'less likely to get wobbly if you need to disassemble the table and reassemble'); but the joint relies on slightly crushing the softer grooves, so grip may fall after many cycles, especially in fibreboard ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: none to assemble or take apart (IKEA Facts; Design Museum); an Allen key for the small plastic lock on LISABO tables (Consumer Reports). To make: precise CNC milling; IKEA had to develop a new machine because standard machines lacked the precision (IKEA Museum).
- **seal**: none
- **load**: Medium: furniture loads such as cabinets, shelving units, chests of drawers and tables (IKEA Facts). Strong against pulling apart (the grooves interlock) and against sideways shear (the dowel bears in the slot). Consumer Reports judged a wedge-dowel LISABO table sturdy in an informal check. A woodworker on Sawmill Creek (forum opinion) considers it weaker than a traditional tapered tenon, since the strength depends on the base of the dowel pair and the contact area of the grooves ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: no: the end position is fixed by the milled slot.
- **play_and_precision**: None when fully home: the wedge action pulls the parts together and closes any gap (US 9,447,804 B2). It needs very tight manufacturing: IKEA had to 'adapt the production to tolerance levels that were around 2.5 times lower than previously' and added optical monitoring (IKEA Facts). The entry opening is made 'somewhat larger than the outer dimension of the male part' to make insertion easy (US 9,447,804 B2). Returns to the same position every time.
- **access_needed**: one side only (blind): the dowel and slot are hidden inside the joint and nothing is reached from the back; you only need room to slide or twist one part by the length of the slot (US 9,447,804 B2).
- **materials**: Dowels of wood or plastic (IKEA Museum; IKEA Facts). Used in machine-made furniture panels and solid wood, e.g. the LISABO table with an ash-veneer top and solid birch legs (IKEA Museum). The patent requires the grooved material of the slot to be 'softer than the material of the grooves ... of the male part' so it can compress (US 9,447,804 B2). In 2017 IKEA said the dowels only worked with its wooden furniture and it was looking for materials that cope with humidity (Digital Trends, citing Fast Company).
- **maker_difficulty**: hard: the slot has grooves sloping by only a couple of degrees and the fit is tuned to fractions of a millimetre; IKEA needed a purpose-built, extra-precise machine and much tighter tolerances (IKEA Museum; IKEA Facts). A hobbyist could try it with a CNC router or a 3D printer, but no maker design guides were found ⚑ [uncertain]. *(⚑ parts need confirming)*

### Making it

- **processes**: 
  - CNC: milling the grooved slots and turning or milling the grooved dowels (the patent names 'milling and/or turning')
  - off-the-shelf part: only as pre-installed parts in flat-pack furniture and as furniture spare parts ⚑ [uncertain]
  - 3D print (FDM): replacement dowels and experimental printed versions *(⚑ parts need confirming)*
- **print_in_place**: no: the dowel and the slotted part are separate parts slid together.
- **making_tips_3d_printing**: Experimental; no tested maker guide was found. Ideas from the patent: 1) Make the slot's grooves slope about 2 degrees along the slot (0.5-5 degrees works; too little leaves a gap, too much makes it hard to slide), and make the slot longer if you want a smaller angle (US 9,447,804 B2). 2) Give the groove sides about 90 degrees between them (US 9,447,804 B2). 3) Make the slot's grooves in a softer material than the dowel's, e.g. a printed PLA or PETG dowel into wood, or a stiff printed dowel into a softer printed part ⚑ [uncertain]. 4) Make the entry end of the slot a little wider than the dowel and taper it towards the end position (US 9,447,804 B2). Printing advice: FDM interlocking joints normally need about 0.5 mm clearance (Hubs), which is coarse compared with the tiny wedge action here, so print test pieces with small changes in groove size ⚑ [uncertain]. A dowel printed standing up has its rings made of stacked layers, which may shear off along layer lines when pulled; printing it lying down, or with a flat side, may be stronger ⚑ [uncertain]. Plastics creep, so the wedge grip in a printed joint may slowly relax (a Printables designer notes PLA creeps under load) ⚑ [uncertain]. A replacement IKEA HAUGA wedge dowel exists on Printables for when one is missing. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: No generic catalogue part: wedge dowels come pre-installed in flat-pack furniture, and missing ones are replaced as furniture spare parts or printed (Printables 'Ikea Hauga Wedge Dowel') ⚑ [uncertain]. Commercial click-together alternatives for makers are slot-in connectors such as the Lamello P-System (brand): Divario P-18, 'a detachable connector for slide-in insertion', Clamex P (lever-locked, detachable) and Tenso P (self-clamping, for gluing), which need a P-System groove cut with a special biscuit joiner or CNC (Lamello). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Slope the grooves of the slot by up to 5 degrees, preferably 0.5-5 degrees and ideally about 2 degrees; too small leaves a gap between the parts, too large makes sliding hard; the longer the slide, the smaller the angle can be (US 9,447,804 B2, col. 3).
  - Make the sides of each groove meet at about 90 degrees so the pressure is spread well (US 9,447,804 B2, col. 3).
  - The grooves that get compressed (normally the slot's) must be softer than the dowel's grooves (US 9,447,804 B2, col. 3).
  - Leave the slot's entry opening without grooves and slightly larger than the dowel, and taper the slot so its grooves at the inner end are slightly narrower than the dowel's, giving a distinct end position (US 9,447,804 B2, cols. 4-5).
  - Manufacturing tolerances had to be about 2.5 times tighter than for IKEA's earlier furniture (IKEA Facts 'Wedge dowel', 2015).
  - Assembly time falls by 50-80% compared with screwed fittings (IKEA Facts; Design Museum); in a Consumer Reports test a wedge-dowel LISABO table took one tester under 5 minutes (about 2 minutes longer for the other) against 42-62 minutes for a table using 84 pieces of hardware.

### When to use it

- **everyday_examples**: 
  - IKEA LISABO tables, whose legs have grooved V-shaped tops that slide into cut-outs under the table top (Consumer Reports; IKEA Museum)
  - IKEA REGISSÖR storage, TROMVIK chests of drawers, VALJE cubes and TINGBY tables, the earlier wedge-dowel furniture (IKEA Museum; IKEA Facts)
  - Newer flat-pack cabinets (e.g. HAUGA) whose panels arrive with small ribbed pegs already fitted (Printables replacement part)
- **when_to_use**: Use a wedge dowel when parts must go together fast, with no tools and no visible fittings, and come apart again for moving: flat-pack cabinets, shelving units, drawers and table legs (IKEA Museum; IKEA Facts). It suits mass production on precise CNC machines, where the extra machining cost is repaid by quick, fool-proof assembly because the dowel is already fixed in place (IKEA Museum).
- **when_not_to_use**: Avoid it for one-off hobby builds without a precise CNC machine; the fit depends on tiny groove angles and tight tolerances (IKEA Facts). Avoid it where parts are loaded very heavily or the wood will see big humidity swings; IKEA itself was looking for materials to cope with humidity (Digital Trends). For hand-made furniture use a knock-down cam lock or cross dowel, a tusk tenon or a sliding dovetail instead; for a tool-free, releasable joint without a CNC, commercial slide-in connectors (Lamello P-System) or a hanging French cleat are easier.
- **environment_limits**: Wood expands and shrinks with moisture, which changes the wedge fit; IKEA noted the problem of humidity in markets like India and China and that at the time the dowels only worked with its wooden furniture (Digital Trends, citing Fast Company). Particleboard and fibreboard grooves may crush permanently if overloaded or wet ⚑ [uncertain]. Printed plastic versions creep under constant load ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: None known specific to the joint. As with all flat-pack furniture, tall units should be anchored to the wall so they can't tip over (Wikipedia 'Furniture screw', citing IKEA's 'Secure it!'). A small loose dowel is a swallowing hazard for young children ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: A missing or loose pre-fitted dowel, since the kit may not include spares (Printables 'Ikea Hauga Wedge Dowel'). A gap left between the panels because the groove slope is too small, or a joint too hard to slide home because it is too big (US 9,447,804 B2). Joint loosening if the softer grooves are crushed too much, the wood dries out, or it is assembled and taken apart many times ⚑ [uncertain]. Pulling the panel off at an angle instead of sliding it back may break the grooves ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Knock-down cam-lock and cross-dowel connectors: removable metal fittings that need a screwdriver or Allen key
  - Lever-cam panel connector (self-clamping click connector): a hidden fitting in a milled slot, locked by a key or clicking shut by itself
  - Sliding dovetail: a flared tongue sliding in a matching groove; the wedge dowel adds sloping grooves so it tightens as it slides
  - Mortise and tenon (incl. wedged, drawbored and tusk tenons): the traditional wedge-locked joint
  - Self-locking wedge (wedge clamp, taper key): the wedge principle on its own
  - Hang-on mounts (keyhole slot, French cleat): other slide-to-lock mounts with no tools
  - Crush ribs and spring-fit features: ribs that deform slightly to give a tight press fit, like the compressed grooves here
  - Plain dowel joint and 'wedged dowel' (a dowel spread by a driven wedge): glued, permanent relatives with similar names

### Pictures, videos and models

- **links**: 
  - [The Wedge Dowel (IKEA Museum)](https://ikeamuseum.com/en/explore/the-story-of-ikea/the-wedge-dowel/): Story of the wedge dowel with photos of its inventors, prototypes and the LISABO table *(licence: link only)*
  - [US 9,447,804 B2 'Furniture joint' (Inter IKEA Systems B.V., 2016), USPTO PDF](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9447804): Patent drawings of grooved dowels and tapered slots with inclined grooves, and how shelves and table legs slide or twist into place *(licence: US patent documents are generally free of copyright restrictions ⚑ [uncertain])*
  - [Does IKEA's Lisabo Table Really Cut Down on Assembly Time? (Consumer Reports)](https://www.consumerreports.org/furniture/does-ikeas-lisabo-table-really-cut-down-on-assembly-time): Assembly-time test with photos of the LISABO table's grooved wedge-dowel leg tops *(licence: link only)*
  - [Wedge Dowel (Design Museum, London)](https://designmuseum.org/exhibitions/california-designing-freedom/product-z/wedge-dowel): Museum object page with a picture and short description of the wedge dowel *(licence: link only)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Ikea Hauga Wedge Dowel (Michael Malenfant, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1724919-ikea-hauga-wedge-dowel): Printable replacement for a missing pre-installed wedge dowel in an IKEA HAUGA cabinet *(licence: CC BY-NC)*
- **diagram_idea**: A three-frame cutaway: a shelf end with a ribbed dowel sticking out, a side panel with a keyhole-shaped slot that narrows from a wide entry and has grooves sloping slightly; frame 1 the dowel drops into the wide end, frame 2 the shelf slides along and arrows show the sloping grooves pulling the panels together, frame 3 the joint is closed with a 'click', with a zoomed inset of the 2-degree groove slope.
- **sources**: 
  - https://ikeamuseum.com/en/explore/the-story-of-ikea/the-wedge-dowel/
  - https://preview.thenewsmarket.com/Previews/IKEA/DocumentAssets/436946.pdf
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9447804
  - https://designmuseum.org/exhibitions/california-designing-freedom/product-z/wedge-dowel
  - https://www.consumerreports.org/furniture/does-ikeas-lisabo-table-really-cut-down-on-assembly-time
  - https://www.digitaltrends.com/home/ikea-debuts-new-wedge-dowel/
  - https://sawmillcreek.org/threads/ikea-wedge-dowel-joint.293809/
  - https://lamello.com/products/p-system
  - https://en.wikipedia.org/wiki/Furniture_screw
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
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
- **tools**: none, power tools, hand tools
- **load_max**: medium
- **usual_process**: CNC
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, links, load, maker_difficulty, making_tips_3d_printing, off_the_shelf_parts, processes, reuse_cycles, safety_notes

## 252 Lever-cam panel connector (self-clamping click connector)

*interlocking joints & joinery.* A hidden fitting set into a slot that is locked with a turn of a key or clicks shut by itself, pulling panels together; releasable

### What it is

- **plain_name**: A hidden two-part plastic fitting, set into matching slots in the edges of two wooden boards, that locks the boards tightly together when you turn a small Allen key through a tiny hole (or that snaps and pulls itself shut as the boards are pushed together), so furniture can be put together without screws showing and, for the key-operated kind, taken apart again
- **term**: Lever-cam panel connector (detachable lever connector); the spring kind is a self-clamping connector
- **aliases**: 
  - Clamex P, Clamex P-14, Clamex P-10 (Lamello, brand): the lever-operated, detachable version (Lamello)
  - Tenso P-14, Tenso P-10 (Lamello, brand): the self-clamping spring version, used with glue as a built-in clamp (Lamello)
  - Divario P-18 (Lamello, brand): a self-clamping slide-in version for shelves and dividers (Lamello)
  - Clamex S-20, Clamex S-18 (Lamello, brand): lever connectors screwed into an ordinary 4 mm biscuit slot (Lamello catalogue)
  - P-System connector, P-System groove, profile-groove connector (Lamello's name for the undercut slot these clip into) (Lamello)
  - cam-lock biscuit, snap-in biscuit (Woodshop News, 'Hidden Fasteners', 2021)
  - detachable furniture connector, knock-down fitting, invisible or concealed furniture connector, hidden connector (Lamello; Woodshop News)
  - similar hidden click or key connectors from other makers: Knapp Quick-Set (brand, self-tightening locking dowel), OVVO (brand, push-in connectors with releasable options), Häfele Ixconnect SC 8/60 (brand, tightened with an Allen key), Lockdowel (brand, one-piece barbed click connector) (Woodshop News 2020 and 2021)
- **family**: interlocking joints & joinery
- **other_families**: quick-release & tool-free, over-centre, toggle & cam clamps, locating & alignment
- **one_liner**: A pair of biscuit-shaped fittings pushed into matching undercut slots in two panels; a cam lever turned with an Allen key through a 6 mm hole (or built-in springs) hooks the halves together and pulls the joint tight, invisibly and at almost any angle.
- **complexity**: A small assembly that acts as one unit, in two halves: a fibreglass-reinforced plastic body in each panel, one with a zinc die-cast lever (lever type) or with steel tension springs (self-clamping type), plus positioning pins that line the halves up. Needs a special undercut groove in each panel and, for the lever type, a 6 mm access hole; optional plastic cover caps hide the hole (Lamello P-System brochure and catalogue).
- **how_it_works**: Each half is pushed by hand into a slot whose inside is undercut (cut wider at the bottom), so ribs on the fitting hook into it and it cannot be pulled straight out; it has to be rotated back out along the curve of the slot (Lamello 'form-locking P-System groove'; Woodshop News 2021). In the lever type (Clamex P) you bring the panels together and turn an Allen key through a small 6 mm hole: this swings a metal lever out of one half into a pocket in the other, and its cam-shaped edge draws the two halves, and so the panels, tightly together; turning it back releases the joint (Fine Woodworking 2011; Lamello). In the self-clamping type (Tenso P) springs in one half snap over the other half as the panels are pushed together and keep pulling the joint closed while glue sets, so no clamps are needed (Lamello Tenso P-14). Positioning pins stop the panels twisting or sliding out of flush (Lamello).

### Finder attributes

- **job**: 
  - join and hold: joins wooden or board panels at butt, corner, mitre and T joints, from 22.5 to 180 degrees (Lamello)
  - lock, and release by hand: the lever type can be opened and closed again and again with an Allen key (Lamello Clamex P)
  - tighten and hold tension: the cam lever or springs pull the joint closed with a clamping force (about 80 kg for Clamex P, about 15 kg for Tenso P, per Lamello)
  - line parts up exactly: positioning pins give flush, untwisted panels (Lamello)
  - glue or bond: the self-clamping type is a built-in clamp for glued joints, especially awkward mitres (Lamello Tenso P)
- **motion**: none: once closed the panels do not move. The lever turns inside the fitting only while you lock or unlock it.
- **degrees_of_freedom**: 0 when locked. Before the lever is turned the halves can still slide about 1 mm along or across each other (the installation tolerance), which lets you push the panels flush before tightening (Lamello Clamex P-14 technical data).
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): the Clamex lever stays locked until someone turns it back with the key (Lamello: 'Open the connection time and time again with the rotating lever')
  - tensioning (takes up slack and holds): the cam lever or the springs pull the joint closed rather than just holding it, like a built-in clamp (Lamello)
  - self-aligning or self-centring: positioning pins and a sideways (lateral) tolerance bring both panels flush and stop them twisting (Lamello P-System: 'Perfect, flush alignment of both workpieces'; 'The positioning pins prevent twisting')
  - The self-clamping Tenso and slide-in Divario versions simply snap or wedge shut as the parts go together, with no lever to turn (Lamello)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the fittings are hooked into undercut slots, and the lever hooks the two halves together (Lamello 'form-locking anchorage')
  - friction or clamping (force-fit): the cam lever draws the halves tight, pressing the panel faces together (Fine Woodworking 2011; Lamello)
  - spring force (a spring or springy part presses it in place): in Tenso P, tension springs pull the joint shut (Lamello Tenso P-14)
  - material bond (glue, solvent or melting): Tenso P is always used with glue; the connector is only the clamp (Tenso P-14 operating instructions)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable for the lever type (Clamex P and Clamex S): turn the key back and the panels come apart; the fittings can also be taken out of their slots by hand, rotating them out (Lamello; Woodshop News 2021). Permanent for the self-clamping Tenso type, because it is glued (Lamello). The slide-in Divario P-18 is sold as a 'detachable' connector (Lamello).
- **reuse_cycles**: many times for the lever type (Lamello: 'time and time again'; a US retailer calls it a 'practically wear-free knock-down fitting' (CSAW)); once for the glued self-clamping type.
- **tools_needed**: To make the slots: Lamello's Zeta P2 biscuit joiner or a CNC router with the P-System disc cutter (100.4 mm across, 7 mm thick); the Clamex S version needs only an ordinary biscuit joiner cutting a 4 mm slot, plus two 3 x 12 mm screws per half. For the lever type: a 6 mm drill and drill jig for the access hole, and an Allen (hex) key to lock and unlock. Fittings are pressed in by hand or with an installation tool. The self-clamping type needs only glue and hand pressure (Lamello catalogue; Fine Woodworking 2011).
- **seal**: none
- **load**: Medium. Lamello's figures per connector for Clamex P-14: pull-apart (tensile) strength about 1070 N in particle board, 1210 N in MDF and 1870 N in solid beech; shear strength 490 N, 600 N and 2940 N; clamping force about 80 kg (170 lb). An older Lamello data sheet gives lower pull-apart values of about 800-1000 N. The smaller Clamex P-10 manages about 540-900 N in tension. The spring-clamping Tenso P-14 pulls with 150 N and holds with 250 N until the glue sets; the final strength then depends on the glue. Strongest in shear along the joint in hardwood; weakest pulled straight apart in particle board (Lamello product pages and operating instructions).
- **adjustable**: no: position is set by where the slots are cut, and the clamping force is set by the lever. Before locking, the halves can be shifted by about 1 mm to get the panels flush (Lamello).
- **play_and_precision**: No play once locked. Installation tolerance about plus or minus 1 mm along and across the slot for Clamex P-14 (plus or minus 0.5 mm for Clamex P-10), so small slot position errors don't matter. The CNC and Flexus versions have 0 mm lengthwise tolerance for exact positioning. Positioning pins make the faces flush and return the parts to the same place each time they are reassembled (Lamello technical data).
- **access_needed**: one side only (blind): the lever type needs a small 6 mm hole drilled into the face of one panel to reach the lever, which can be hidden by a cover cap; the self-clamping and slide-in types need no access hole at all and are fully hidden once assembled (Lamello).
- **materials**: Connector bodies are fibreglass-reinforced plastic; the Clamex lever is zinc die-cast (Lamello brochure). Joins particle board, MDF, plywood, softwood and hardwood; Clamex S also joins HPL (laminate) worktops. Panel thickness roughly 12 mm and up: Clamex P-14 butt joints from 15 mm and mitres from 18 mm, Clamex P-10 butt joints from 12 mm and mitres from 15 mm (Lamello). Not made for plastic, metal or 3D-printed panels ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: the connectors just push in and lock with a key, but the undercut slot needs Lamello's Zeta P2 (about US$1,400 in 2011, with connectors about US$170 for 80 pairs, which Fine Woodworking called 'severely offset by the cost') or a CNC router with the special cutter; the Clamex S version works with any ordinary biscuit joiner (Fine Woodworking 2011; Lamello catalogue).

### Making it

- **processes**: 
  - woodwork: slots cut with a biscuit joiner (Zeta P2 for P-System; any biscuit joiner for Clamex S), 6 mm access hole drilled with a jig
  - CNC: P-System grooves cut with a 100.4 x 7 mm disc cutter on an angle head or a special shaft cutter (Lamello)
  - off-the-shelf part: the connectors themselves are always bought
- **print_in_place**: no: the connector is a bought metal-and-plastic fitting, and the slot is cut into wood panels.
- **making_tips_3d_printing**: Not applicable for the connector itself: it is a bought fitting for wood and board panels. Makers do 3D-print helpers for it: drill jigs for the 6 mm access hole of Clamex S (one uses an M4 heat-set nut and a 6 mm inside / 10 mm outside tube melted into the print; Printables 'Clamex-S Bohrschablone') and a pusher for seating P-System connectors, printed in PETG with 5-6 perimeters and 50% infill (Printables 'Lamello P-System dowel pusher'). For joining 3D-printed panels, use a cam latch, a snap fit or a bolt in a captive nut instead ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Lever type: Lamello Clamex P-14, Clamex P-10, Clamex P-14/10 Medius (centre panels), Clamex P-14/10 Flexus (springy positioning pins), Clamex P-14 CNC, Clamex S-20 and S-18 (screw-in, for 4 mm biscuit slots); cover caps (45 and 90 degree), Clamex P drill jig with 6 mm drill, installation tool, Allen key. Self-clamping type: Tenso P-14 and P-10 (with optional preload clip), Divario P-18 slide-in connector; Bisco P plastic alignment biscuit for dry test fits. Groove tools: Lamello Zeta P2 (mains or cordless) or P-System CNC disc cutter 100.4 x 7 mm (Lamello catalogue). Other brands with hidden click or key connectors: Knapp Quick-Set, OVVO, Häfele Ixconnect SC 8/60, Lockdowel (Woodshop News). Search terms: 'detachable furniture connector', 'P-System connector', 'invisible panel connector'.
- **rules_of_thumb**: 
  - Minimum panel thickness for Clamex P-14: 15 mm for butt joints and 18 mm for mitres, 12 mm for edge cuts, 29 mm for centre-panel (T) joints; minimum panel width 75 mm; Clamex P-10 allows butt joints from 12 mm and mitres from 15 mm (Lamello Clamex P-14 and P-10 product pages).
  - Access hole 6 mm across; P-System groove cut with a 100.4 mm diameter, 7 mm thick cutter, 14 mm deep for P-14 connectors and 10 mm deep for P-10 connectors (Lamello Clamex P-14 operating instructions; Lamello catalogue depth table).
  - Installation tolerance: plus or minus 1 mm lengthwise and across for Clamex P-14 and Tenso P-14, plus or minus 0.5 mm for Clamex P-10 (Lamello technical data).
  - Tenso P-14 must always be used with glue; extra glue in the fitting raises its tensile strength by 30%; it pulls with 150 N and holds with 250 N (Tenso P-14 operating instructions).
  - Clamex S-20 fits a symmetric 4 mm biscuit slot cut by any biscuit joiner, is fixed with 3 x 12 mm screws, and has clamping force up to about 490-680 N depending on the board (Lamello catalogue, Clamex S-20).
  - Lamello's strength values are empirical load limits from tests to DIN 68501:2016-11 and are not guaranteed in use; check your own material and assembly (Lamello catalogue, 'Technical notes').
  - Connector spacing up to about 300 mm apart, and at least about 37 mm from the panel end ⚑ [uncertain] (read from dimension labels in the Lamello P-System connector overview drawings, not from a stated rule). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - High-end flat-pack or shipped furniture where a small round cap (about 6 mm) on an inside face hides the key hole of a lever connector (Lamello cover caps) ⚑ [uncertain]
  - Mitred shelves, wine racks and bookshelves joined at unusual angles (Lamello applications)
  - Built-in wardrobes under sloping roofs and tall kitchen cupboards assembled on site (Lamello applications)
  - Shelves slid into an already built bookcase and clamped tight by hidden slide-in connectors (Lamello Divario P-18) *(⚑ parts need confirming)*
- **when_to_use**: Choose it when wooden or board furniture must look seamless with no screws showing, be joined at awkward angles such as mitres (22.5 to 180 degrees) and, for the lever type, be taken apart again for moving or shipping and put back together many times (Lamello). It is good for large pieces that are made in the workshop and assembled on site, for joining wide panels invisibly, and as a built-in clamp for mitres and odd angles that are hard to clamp with ordinary clamps (Lamello; Sawmill Creek users). The self-clamping type lets you glue up a piece one joint at a time without waiting for glue to dry (Lamello Tenso P-14).
- **when_not_to_use**: Avoid it if you don't have the special slotting tool and only need a few joints: the cost of the Zeta P2 and connectors is high for hobbyists (Fine Woodworking 2011); a screw-in Clamex S in an ordinary biscuit slot, a knock-down cam-lock and cross-dowel fitting, or a plain screw is cheaper. Don't use it in panels thinner than about 12-15 mm, in plastic, metal or 3D-printed parts, or outdoors (Lamello: indoor use only). For heavy structural loads, choose bolted joints or traditional joinery; for joints that never need to come apart, glue with biscuits, dowels or the self-clamping type is enough. If you want tool-free assembly, look at wedge dowels or snap-in connectors instead.
- **environment_limits**: Made for indoor use in a normal room climate; Lamello warns that 'corrosion can occur in humid, corrosive environments or outdoor applications' (Lamello catalogue, 'Technical notes'). Holding strength depends heavily on the board: about 1070 N in particle board against 1870 N in beech for Clamex P-14 (Lamello), and particle board and MDF weaken if they get damp ⚑ [uncertain]. The glued self-clamping type is only as heat- and water-resistant as the glue used. *(⚑ parts need confirming)*
- **safety_notes**: The Zeta P2 and other biscuit joiners use a spinning cutter about 100 mm across; use the usual power-tool precautions and keep hands clear ⚑ [uncertain]. The self-clamping versions snap shut with springs, so keep fingers out of the joint as the panels close ⚑ [uncertain]. Otherwise none known. *(⚑ parts need confirming)*
- **common_failures**: Slot too shallow or cut at the wrong depth setting, so the halves don't meet and the lever can't reach its pocket; Lamello uses different depth settings for P-14 and P-10 and says to use sharp cutters (Lamello operating instructions). Panels too thin for the connector, so the slot or access hole breaks through: follow the minimum thicknesses (Lamello). Pulling-out in particle board under heavy load, because the board is much weaker than hardwood (Lamello strength table). Self-clamping Tenso joints made without glue come apart, because the springs are only meant to clamp while glue sets (Tenso P-14 operating instructions). Misaligned slots on long panels: use the positioning pins and the connectors' 1 mm tolerance, or the Flexus version with springy pins when parts must slide into place (Lamello). Access hole in the wrong place so the key can't reach the lever: use the drill jig ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Knock-down cam-lock and cross-dowel connectors: a turning cam grabs a bolt head, or a barrel nut takes a bolt; cheap and common in flat-pack furniture, but the fittings are bigger and more visible
  - Wedge dowel (click-in grooved dowel): a ribbed dowel that clicks into a groove with no tools; releasable only by sliding the panels apart
  - Cam latch (quarter-turn cam lock): a cam turned by a key or handle that hooks behind a panel, used for doors and access panels rather than hidden panel joints
  - Biscuits, dowels and Domino tenons (plain loose tenons): line up and strengthen glued joints but don't lock or pull the joint closed
  - Sliding dovetail: slides panels together along a groove; Divario P-18 does the same job with hidden fittings
  - Snap-lock sheet joint (barbed or spring finger): the same click-shut idea cut into sheet material itself
  - Hang-on mounts (keyhole slot, French cleat): hang panels and cabinets on a hidden hook but don't pull them tight
  - Over-centre toggle clamp: another lever that pulls parts together, but visible and on the outside

### Pictures, videos and models

- **links**: 
  - [Clamex offen.jpg (Wikimedia Commons, by Böhringer Friedrich, 2008)](https://commons.wikimedia.org/wiki/File:Clamex_offen.jpg): See-through 3D drawing of a lever connector's two biscuit-shaped halves apart, with the green lever folded down inside one half and its hex socket visible *(licence: CC BY-SA 2.5)*
  - [Clamex geschlossen.jpg (Wikimedia Commons, by Böhringer Friedrich, 2008)](https://commons.wikimedia.org/wiki/File:Clamex_geschlossen.jpg): The same connector closed: the halves together and the green lever swung up into the other half, locking the joint *(licence: CC BY-SA 2.5)*
  - [Lamello Clamex P14 - Detachable furniture connector (YouTube, Lamello)](https://www.youtube.com/watch?v=ikeXJdXLth8): Manufacturer video of cutting the slot, inserting the connectors and locking them with the lever (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Tenso P-14 - Self-clamping connector as gluing aid for all angles (YouTube, Lamello International)](https://www.youtube.com/watch?v=_ShyDBsx8WA): Manufacturer video of the spring-type self-clamping connector used to glue mitres without clamps (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [The Lamello P-System (Lamello)](https://lamello.com/products/p-system): Product photos and videos of the lever (Clamex P), self-clamping (Tenso P) and slide-in (Divario P-18) connectors, the undercut groove and the four-step assembly *(licence: link only)*
- **make_it_yourself**: 
  - [Clamex P-14 connector pair, STEP CAD file (Lamello)](https://lamello.com/fileadmin/products/Clamex_P-14_connector_pair.stp): Free manufacturer 3D CAD model of the connector pair to place in your own furniture design; matching machining drawings (DWG, DXF, STEP) are linked from the Clamex P-14 product page *(licence: ⚑ [uncertain] (free download; no licence stated))*
  - [P-System Configurator (Lamello)](https://lamello.com/solutions/lamello-expertise/p-system-configurator): Online tool to choose the right P-System connector and its position for a given joint angle and panel *(licence: link only)*
  - [Clamex-S Bohrschablone (drill jig) (Cyber Man, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/512908-clamex-s-bohrschablone): 3D-printable drill jig for the 6 mm access hole of Clamex S lever connectors, with an M4 heat-set nut and a short 6/10 mm tube melted in as a drill bush. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Lamello P-System dowel pusher (woelpi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1030604-lamello-p-system-dowel-pusher): 3D-printable PETG tool that helps push P-System connectors into their grooves. Read through the Printables public API. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))* *(⚑ parts need confirming)*
- **diagram_idea**: A cut-away of two panels meeting at a mitre, first apart with the two biscuit-shaped halves sitting in their undercut slots and the lever folded down, then together with an Allen key through the small hole swinging the lever up into the other half, with arrows showing the cam pulling the panels together, and a small inset of the spring-type version snapping shut.
- **sources**: 
  - https://lamello.com/products/p-system
  - https://lamello.com/products/p-system/clamex-p-14
  - https://lamello.com/products/p-system/clamex-p-10
  - https://lamello.com/products/p-system/tenso-p-14
  - https://lamello.com/products/p-system/divario-p-18
  - https://lamello.com/fileadmin/products/Operating_instructions_Clamex_P14.pdf
  - https://lamello.com/fileadmin/products/Operating_instructions_Tenso_P-14.pdf
  - https://lamello.com/fileadmin/products/Operating_instructions_Divario_P-18.pdf
  - https://lamello.com/fileadmin/Downloads/Katalog/PDF/Catalogue_EN.pdf
  - https://lamello.com/fileadmin/Downloads/Broschueren/P-System/PDF/P-System_Broschuere_EN.pdf
  - https://www.messe.de/apollo/ligna_2021/obs/Binary/A1113169/Lamello%20P-System%20Connector%20Overview_EN.pdf
  - https://www.messe.de/apollo/ligna_2021/obs/Binary/A1113169/Lamello_Tenso_P_EN.pdf
  - https://lamello.com/fileadmin/products/Clamex_P-14_connector_pair.stp
  - https://lamello.com/solutions/lamello-expertise/p-system-configurator
  - https://www.finewoodworking.com/2011/04/21/lamellos-zeta-is-a-knockout-tool-for-knock-down-furniture
  - https://www.woodshopnews.com/features/hidden-fasteners
  - https://www.woodshopnews.com/features/making-a-quicker-connection
  - https://sawmillcreek.org/threads/aftermarket-domino-similar-to-a-lamello-tenso.310865/
  - https://www.csaw.com/lamello/clamex-p-14/
  - https://commons.wikimedia.org/wiki/File:Clamex_offen.jpg
  - https://commons.wikimedia.org/wiki/File:Clamex_geschlossen.jpg
  - https://www.youtube.com/watch?v=ikeXJdXLth8
  - https://www.youtube.com/watch?v=_ShyDBsx8WA
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
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, materials, rules_of_thumb, safety_notes

## 253 Folded seam (hem, lock seam, Pittsburgh lock)

*interlocking joints & joinery.* Sheet-metal edges folded over each other and pressed flat so they lock together without welding or fasteners

### What it is

- **plain_name**: The edges of two thin metal sheets are each folded into a narrow hook, hooked into each other and hammered flat, so they lock together with no screws, rivets, glue or welding, like the side seam of a food tin or the corner of a heating duct; a single edge folded back flat on itself is a hem
- **term**: Folded seam (lock seam, grooved seam, Pittsburgh lock seam); a single folded-back edge is a hem
- **aliases**: 
  - lock seam, locked seam, folded seam, seaming (Wikipedia 'Hemming and seaming'; Thatcher, 'Making Tin Can Toys', 1919)
  - grooved seam, outside and inside grooved seam, grooved seam joint (US Navy Hull Maintenance Technician manual; DT Online)
  - Pittsburgh lock, Pittsburgh seam, Pittsburgh lock seam (a corner seam for rectangular ducts) (US Navy manual; MEP Academy)
  - snap lock, button punch snap lock (a quick duct seam snapped together and dimpled) (MEP Academy; SMACNA type L-2 as cited in UPenn and Dartmouth duct standards)
  - standing seam, single-lock and double-lock standing seam, cross welt (roofing and duct stiffening) (elZinc; DT Online; MEP Academy)
  - double seam (the seam that joins a can's lid to its body) (Wikipedia 'Double seam')
  - cap strip seam, drive slip, locked corner seam (US Navy Steelworker manual; DT Online)
  - hem: closed (crushed) hem, open hem, teardrop hem, rolled hem, single-hem and double-hem edge (Approved Sheet Metal; US Navy manual)
  - hem flange, hemming (joining a car door's outer skin over its inner panel) (Wikipedia 'Automotive hemming')
  - Falz, Falzverbindung, Stehfalz, Doppelfalz (German) (German Wikipedia 'Falz (Verbindungstechnik)')
- **family**: interlocking joints & joinery
- **other_families**: seals & pass-throughs
- **one_liner**: Sheet-metal edges are bent into hooks or pockets, slid or hooked together and pressed flat so the folds trap each other, making a permanent, often near-airtight joint along a whole edge without heat or fasteners.
- **complexity**: Single piece per sheet: the joint is folded from the sheets themselves, with no extra parts. Optional extras: a separate folded strip (cap strip or drive slip) that hooks two edges together, sealant or adhesive laid in the fold, and prick-punch dimples or button punches that stop the seam sliding (US Navy manuals; DT Online; MEP Academy).
- **how_it_works**: Each sheet edge is folded into a narrow hook; the two hooks are slid or dropped into each other and hammered or rolled flat, often with a grooving tool, so neither can straighten and unhook (grooved seam) (DT Online; US Navy manual). In a Pittsburgh lock one edge is folded into a pocket with a projecting lip, the other gets a plain right-angle flange that is pushed into the pocket, and the lip is then hammered or rolled over the flange to lock it (US Navy manual; MEP Academy). A can's double seam rolls the lid's curled edge around the body's flange so five layers interlock (Wikipedia 'Double seam'), and a hem folds a single edge back on itself to stiffen it and hide the sharp edge, or wraps it over a second panel as on a car door (Wikipedia 'Hemming and seaming'; 'Automotive hemming'). How tight and strong the seam is depends on how hard the folds are pressed together (German Wikipedia 'Falz (Verbindungstechnik)').

### Finder attributes

- **job**: 
  - join and hold: joins sheet-metal edges along their whole length, flat, at corners or into cylinders (US Navy manual; DT Online)
  - seal it, or pass cables or fluid through: folded seams are fairly airtight and can be sealed with sealant or sealing compound, as on food cans, ducts and roofs (Wikipedia 'Double seam'; German Wikipedia 'Falz (Verbindungstechnik)'; elZinc)
  - store energy: not applicable; a hem's extra job is to stiffen an edge and remove its sharp burr (Wikipedia 'Hemming and seaming')
- **motion**: none: the sheets are locked together. A lightly pressed seam can let the sheets creep along its length as they expand and shrink with heat (German Wikipedia 'Falz (Verbindungstechnik)').
- **degrees_of_freedom**: 0 for a hard-pressed seam. A lightly pressed seam effectively leaves about 1: slight sliding along the seam, which roofers rely on for heat expansion (German Wikipedia 'Falz (Verbindungstechnik)').
- **special_behaviour**: 
  - none: it simply holds. Its useful extras are sealing (the folds squeeze together and can hold a sealant) and stiffening (a hem or standing seam makes a floppy sheet edge or wide duct side stiffer) (Wikipedia 'Hemming and seaming'; MEP Academy)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the hooked folds trap each other (German Wikipedia: sheets are joined 'formschlüssig', by form-fit)
  - friction or clamping (force-fit): hammering or rolling the seam flat presses the layers hard together; tightness and strength depend on this pressure (German Wikipedia 'Falz (Verbindungstechnik)')
  - material bond (glue, solvent or melting): optional sealant, sealing compound or hem-flange adhesive in the fold, used on ducts, cans and car doors (UPenn duct standard; Wikipedia 'Double seam'; Atlas Copco)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent for can double seams and hem flanges; semi-permanent (can be undone but may damage parts) for grooved and Pittsburgh seams, which can be pried or bent open but leave distorted folds ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: once: the folds work-harden and distort when opened, so a seam is normally re-made from new sheet rather than re-closed ⚑ [uncertain]. *(⚑ parts need confirming)*
- **tools_needed**: By hand: a bench vice with hardwood or steel bars, a bench folder or sheet-metal brake, hand seamer (flat-jawed seaming pliers), boxwood or rawhide mallet, hammer, hand groover (grooving iron) and a stake, mandrel or bench block to hammer on (DT Online; Wikipedia 'Hand seamer'; US Navy Steelworker manual). In industry: press brake with a flattening die, lock-forming (roll-forming) machines, Pittsburgh seam closers, can seamers and roof seamers (Wikipedia 'Hemming and seaming'; MEP Academy; Wikipedia 'Double seam').
- **seal**: dust-resistant for a plain duct or grooved seam: fairly airtight but leaks some air unless sealed, so duct standards call for sealant in seams (German Wikipedia; UPenn duct standard). Watertight for a double-lock standing-seam roof: 'weather-tight down to 7º of pitch, 3º if seams are sealed' (elZinc). Airtight or pressure for a can double seam, which needs a sealing compound to fill the tiny voids (Wikipedia 'Double seam'). Kitchen exhaust ducts get sealing tape in the fold to be grease-tight (German Wikipedia).
- **load**: Light to medium, limited by the thin sheet it is made from. Resists pulling the sheets apart across the seam and sliding along it when hard-pressed; weakest against prying the folded lip open (peel) ⚑ [uncertain]. Folding adds stiffness: a double-hem edge is used 'where additional strength is needed' (US Navy manual), standing seams stiffen wide duct sides (MEP Academy), and car hem flanges are glued for extra stiffness and crash strength (Atlas Copco). *(⚑ parts need confirming)*
- **adjustable**: no: once folded and closed it cannot be adjusted.
- **play_and_precision**: No play in a well-closed seam. Folds must be laid out accurately: the Pittsburgh flange is made 1/16 inch narrower than the pocket depth 'to ensure a good tight fit' (US Navy manual). A lightly closed seam lets sheets slide along it (German Wikipedia). Not a locating joint otherwise.
- **access_needed**: both sides for most seams: one side rests on a stake, mandrel or bench block while the other is hammered or grooved (DT Online). A Pittsburgh lock, once the flange is in the pocket, is closed from the outside only by hammering the lip against the duct wall or with a hand-held seam closer (MEP Academy; lockforming.com).
- **materials**: Thin, ductile sheet metal: galvanised steel (ducts), tinplate (cans and toys), aluminium, copper, zinc and lead (roofing), stainless steel (German Wikipedia; elZinc; Thatcher 1919). Closed hems suit sheet about 0.040-0.125 inch (1-3.2 mm) thick; thicker sheet tends to crack, and aluminium should get teardrop hems instead of closed ones (Approved Sheet Metal). Duct lock-forming machines typically handle galvanised sheet 0.5-1.5 mm, at most 2.0 mm (lockforming.com, a machine seller) ⚑ [uncertain]. The same idea works for folded paper and card, but not for rigid plastics or 3D prints ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: needs only hand tools (vice, mallet, brake or hand seamer), and school pupils and hospital patients learned it on tin cans (Thatcher 1919), but getting neat, tight folds needs careful layout of allowances and some practice; thicker or harder sheet needs a proper brake or press.

### Making it

- **processes**: 
  - sheet metal: folded by hand in a vice, bench folder, brake or hand seamer and closed with a mallet and hand groover; in industry on a press brake, lock former or seaming machine
  - off-the-shelf part: ready-made ducts, cans and roofing panels come with their seams formed
- **print_in_place**: no: it is folded from sheet metal; 3D-printed plastic cannot be folded and hammered flat like this.
- **making_tips_3d_printing**: Not applicable to the seam itself. You can 3D-print tools for folding thin sheet: for example a PETG bending tool that clamps in a vice, printed with 12 perimeters and 80% infill and tested on 1 mm aluminium and 0.8 mm steel (Printables 'Metal Bending Tool for Sheet Metal'), or a printed sheet-metal brake built around steel offcuts (Printables 'Serious Metal Sheet Brake'). For joining 3D-printed panels edge to edge, use a sliding dovetail, a snap fit or tab-and-slot instead.
- **off_the_shelf_parts**: Tools: hand seamer (3 inch or 6 inch jaws, straight or angled), bench folder or box-and-pan brake, hand groover (grooving iron, sized by groove width, e.g. No. 0 to No. 8), soft-faced (boxwood, rawhide or plastic) mallet, stakes and bench block; in trade shops a lock former (Pittsburgh machine), snap-lock roll former, Pittsburgh seam closer, roof seamer and can seamer (Wikipedia 'Hand seamer'; DT Online; MEP Academy). Consumables: duct sealant (mastic) or sealing tape, can sealing compound, hem-flange adhesive (UPenn duct standard; Wikipedia 'Double seam'; Atlas Copco). Related duct parts: cap strips, drive slips and S-cleats (US Navy Steelworker manual). Search terms: 'hand seamer', 'sheet metal brake', 'hand groover', 'Pittsburgh lock former', 'standing seam seamer'.
- **rules_of_thumb**: 
  - Hem: inside diameter at least equal to the sheet thickness; hem return length 6 times the sheet thickness (Protolabs sheet-metal design guidelines).
  - Closed hems work best in sheet 0.040-0.125 inch thick; the flat length must be at least 4 times the thickness so it doesn't break; closed hems are formed by bending to about 145 degrees then flattening; avoid closed hems on aluminium and use a teardrop hem (Approved Sheet Metal, 'What Type of Sheet Metal Hem Does Your Part Need?').
  - Allowances: a single hem needs extra sheet equal to its width; a double hem twice its width; a wired edge 2.5 times the wire diameter; a grooved seam 3 times the seam width W, half added to each edge (US Navy Hull Maintenance Technician manual, ch. 12, pp. 12-8 to 12-10). DT Online adds that up to 4 times the sheet thickness more may be needed for thicker sheet.
  - Pittsburgh lock: the pocket edge needs W + W + 3/16 inch (W = pocket depth; 3/16 inch forms the locking lip), so a 1/4-inch Pittsburgh lock needs 11/16 inch; make the inserted flange 1/16 inch narrower than W for a tight fit (US Navy Hull Maintenance Technician manual, ch. 12, p. 12-10).
  - Use a hand groover about 1/16 inch wider than the seam, and prick-punch the seam about 1/2 inch in from each end so it can't slide (US Navy Steelworker Vol. 2, 'Joints').
  - Closing a hem flat needs much more force than leaving it open: for 1.0 mm steel about 15 tonnes per metre of length for an open hem against 40 for a closed hem, and 30 against 80 for 2.0 mm (Wikipedia 'Hemming and seaming', from Benson, 'Press Brake Technology', 1997, p. 138). Close long seams a little at a time by hand.
  - A double-lock standing-seam roof uses 70 mm of sheet per joint and stays weather-tight down to 7 degrees of pitch (3 degrees if the seams are sealed); trays longer than 1.5 m need sliding clips for heat expansion (elZinc double lock standing seam).

### When to use it

- **everyday_examples**: 
  - The side seam and the rolled-on lids of food tins: 'most of them have locked seams at the side' (Thatcher 1919; Wikipedia 'Double seam')
  - Rectangular heating and air-conditioning ducts, whose corners are Pittsburgh locks or snap locks (MEP Academy)
  - Standing-seam metal roofs in zinc, copper, steel or aluminium (elZinc; German Wikipedia)
  - Car doors, bonnets and boot lids, where the outer skin is hemmed over the inner panel (Wikipedia 'Automotive hemming'); also the folded or wired edges on metal bins, funnels and trays that stop them cutting you (US Navy manual)
- **when_to_use**: Use a folded seam to join thin sheet metal along a long edge when you want no screws, rivets, solder or welding: boxes, trays, cylinders, ducts, flashing and roofing, and tin-can projects (DT Online; Thatcher 1919). It needs only hand tools, keeps the metal's coating (no heat to burn off galvanising), survives heat that would melt a soldered joint (Thatcher: a locked seam won't 'melt apart' in a candle socket or a pot that boils dry), and can be made fairly airtight or watertight with sealant (German Wikipedia; elZinc). A hem on its own is the standard way to stiffen an edge and hide a sharp burr (Wikipedia 'Hemming and seaming').
- **when_not_to_use**: Avoid it for thick sheet (roughly over 3 mm), which cracks when folded flat and needs a press; weld, bolt or rivet instead (Approved Sheet Metal). Avoid closed hems in aluminium and other crack-prone metals and use a teardrop hem (Approved Sheet Metal). Don't use it where the parts must come apart again; use screws, rivet nuts or a removable tab joint. For plastics, wood or 3D prints use other joints. For truly airtight or pressure-tight joints, add sealant or solder, or weld; some duct standards ban snap-lock and grooved seams and require Pittsburgh locks with sealant (UPenn and Dartmouth duct standards). For joining two flat sheets at a point rather than along an edge, clinching or rivets are quicker.
- **environment_limits**: No solder or glue to melt, so seams stand heat well (Thatcher 1919). Folds can trap water and dirt: car hem flanges must be filled with adhesive or they corrode, because the closed hem cannot be properly cleaned and coated (Atlas Copco hem-flange bonding). A lightly pressed seam lets the sheets move with temperature changes, which roofs use on purpose, while long roof trays need sliding clips to avoid buckling (German Wikipedia; elZinc). Roof seams keep water out only above a minimum pitch: 7 degrees for double-lock standing seams, 3 degrees if sealed, and 25 degrees for single-lock cross welts (elZinc). Snap-lock duct seams can slowly work open under vibration if the locking dimples are skipped (Taokron, a machine seller) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Cut sheet-metal edges and burrs are razor-sharp; hems exist partly to 'eliminate a raw edge that could cut someone' (US Navy manual), so wear gloves until edges are folded. Keep fingers out of a brake or folder when it closes ⚑ [uncertain]. Hammering sheet metal is loud; wear ear and eye protection ⚑ [uncertain]. A damaged double seam on a food can can let contamination in, so don't use dented or badly seamed cans (Wikipedia 'Double seam'). *(⚑ parts need confirming)*
- **common_failures**: Cracking along the fold when a closed hem is made in thick sheet or aluminium; use an open or teardrop hem and follow the thickness limits (Approved Sheet Metal). Hem return or flat too short, so it breaks or won't form; keep it at least 4-6 times the thickness (Approved Sheet Metal; Protolabs). Wrong allowances, so the flange won't go into the pocket or rattles in it; lay out with the Navy allowances and make the flange 1/16 inch narrower than the pocket (US Navy manual). Seam not hammered tight, so it leaks or slides; go over it with a hand groover and prick-punch the ends (US Navy Steelworker manual). Leaks in ducts and roofs where no sealant was used, or on roofs laid below the minimum pitch (UPenn duct standard; elZinc). Corrosion inside hems that trap moisture (Atlas Copco). Can double-seam defects such as droops and 'vees' where the seaming rolls are badly set up (Wikipedia 'Double seam').
- **related**: 
  - Bent or twisted tab through a slot (lanced tab): locks sheets at separate points with small tabs instead of along a whole folded edge
  - Clinching (press joining without rivets): a punch and die press two sheets into a locking button at single spots
  - Blind rivets and lap seams: overlapping sheets riveted or soldered together; the Navy manual's alternative to folded seams (US Navy manual)
  - Tab-and-slot joint (self-fixturing sheet joint): tabs locate sheets at an angle, then are glued, welded or bent
  - Snap-lock sheet joint (barbed or spring finger): sheet tabs that click into slots
  - Welding and soldering: stronger and fully sealed, but need heat, which burns off coatings and can distort thin sheet
  - Crimped or swaged joints: pressing a tube or ferrule to grip another part, the round-section cousin of the folded seam ⚑ [uncertain]
  - Sewn seams in fabric: the textile version of joining two edges by folding and locking them together *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Umschlagbiegen-Animation-2D.gif (Wikimedia Commons, by Borowski, 2006)](https://commons.wikimedia.org/wiki/File:Umschlagbiegen-Animation-2D.gif): Animation of a press brake bending a sheet edge over and then flattening it into a hem *(licence: Public domain)*
  - [Pittsburgh Schnappfalz.jpg (Wikimedia Commons, by Willy Stahl, RAS Reinhardt Maschinenbau, 2010)](https://commons.wikimedia.org/wiki/File:Pittsburgh_Schnappfalz.jpg): Drawing of a Pittsburgh lock and a snap-lock seam as used on ducts *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Can solderless seam cutaway.jpg (Wikimedia Commons, 1909 Heinz exhibition material, scanned by Seattle Public Library)](https://commons.wikimedia.org/wiki/File:Can_solderless_seam_cutaway.jpg): Cut-away drawing of the folded 'solderless' seam joining a can's end to its body (a double seam) *(licence: Public domain)*
  - [Grooved Seam Joint (DT Online)](https://wiki.dtonline.org/index.php/Grooved_Seam_Joint): Illustrations of making a grooved seam by hand with a grooving iron on a stake, plus cap-strip, locked-corner and standing seams *(licence: CC BY-NC-SA (DT Online site licence))*
  - [Hand Formed Pittsburgh Lock (YouTube, Sheet Metal with T)](https://www.youtube.com/watch?v=OHbKJgdsjJ8): Video of forming a Pittsburgh lock seam by hand (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Making Tin Can Toys, by Edward Thatcher (1919), Project Gutenberg](https://www.gutenberg.org/files/56939/56939-h/56939-h.htm): Free illustrated beginner's book; its tray candlestick chapter shows folding two flaps and locking them into a locked seam around a 3/4-inch bar held in a vice, and it explains hemming edges so they don't cut *(licence: Public domain (Project Gutenberg))*
  - [Metal Bending Tool for Sheet Metal (Antigreen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/35548-metal-bending-tool-for-sheet-metal): 3D-printed PETG bending jaws that clip to a vice with magnets, for folding thin aluminium and steel edges; includes FreeCAD source to adapt to your vice. Read through the Printables public API. *(licence: Public domain (CC0 as listed on Printables))*
  - [Serious Metal Sheet Brake (JMAW, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/559777-serious-metal-sheet-brake): Plans and printed parts for a home-made sheet-metal brake (folder) built with steel offcuts, for making straight folds up to 90 degrees. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: A four-step side view of two sheet edges: each bent into a small hook, the hooks slid together, then hammered flat with a grooving iron into a locked seam, with a second row showing a Pittsburgh lock (pocket plus flange, then the lip folded over) and a small inset of a closed, open and teardrop hem.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hemming_and_seaming
  - https://en.wikipedia.org/wiki/Double_seam
  - https://en.wikipedia.org/wiki/Automotive_hemming
  - https://en.wikipedia.org/wiki/Hand_seamer
  - https://de.wikipedia.org/wiki/Falz_(Verbindungstechnik)
  - https://de.wikipedia.org/wiki/B%C3%B6rdeln
  - https://www.protolabs.com/services/sheet-metal-fabrication/design-guidelines/
  - https://www.approvedsheetmetal.com/blog/what-type-of-hem-does-your-custom-sheet-metal-part-need
  - https://enginemechanics.tpub.com/14119/Figure-12-22-Layout-Of-A-Square-Or-Rectangular-Elbow-367.html
  - https://enginemechanics.tpub.com/14119/Figure-12-24-Double-Hem-Edge-368.html
  - https://enginemechanics.tpub.com/14119/Figure-12-30-Layout-Of-Pittsburgh-Lock-Seam-369.html
  - https://constructionmanuals.tpub.com/14251/css/Joints-65.htm
  - https://wiki.dtonline.org/index.php/Grooved_Seam_Joint
  - https://wiki.dtonline.org/index.php/Grooving_Iron
  - https://mepacademy.com/sheet-metal-seams/
  - https://facilities.upenn.edu/sites/default/files/pdfs/233100_-_ductwork_-_mechanical_design_guide_0.pdf
  - https://www.dartmouth.edu/fom/docs/2023_construction_guidelines/23_31_13_ductwork.pdf
  - https://taokron.com/insights/pittsburgh-lock-vs-snaplock
  - https://www.lockforming.com/pittsburgh-lock-seam_sp
  - https://elzinc.es/us/installer/installation-systems/roofing/double-lock-standing-seam/
  - https://www.atlascopco.com/en-us/itba/expert-hub/articles/hem-flange-bonding
  - https://www.gutenberg.org/files/56939/56939-h/56939-h.htm
  - https://commons.wikimedia.org/wiki/File:Umschlagbiegen-Animation-2D.gif
  - https://commons.wikimedia.org/wiki/File:Hem_sheetmetal.png
  - https://commons.wikimedia.org/wiki/File:Pittsburgh_Schnappfalz.jpg
  - https://commons.wikimedia.org/wiki/File:Schnappfalz_Detail.jpg
  - https://commons.wikimedia.org/wiki/File:Can_solderless_seam_cutaway.jpg
  - https://www.youtube.com/watch?v=OHbKJgdsjJ8
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
- **tools**: none, press or vice, hand tools
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, load, materials, related, removability, reuse_cycles, safety_notes

## 254 Bent or twisted tab through a slot (lanced tab)

*interlocking joints & joinery.* A tab on one sheet-metal part goes through a slot in the other and is bent over or twisted to lock them together

### What it is

- **plain_name**: A little metal tongue on one piece of sheet metal is pushed through a slot in another piece, then folded flat or twisted with pliers so it can't slide back out, like the tabs holding a tin toy or a metal model kit together
- **term**: Bent-tab or twist-tab joint (tab-and-slot joint locked by folding or twisting the tab; with a lanced tab when the tab is cut and raised from the middle of the sheet)
- **aliases**: 
  - bent tab, folded tab, fold-over tab (SendCutSend 'How to Join Laser Cut Parts Without Fasteners')
  - twist tab, twisted tab, twist-lock tab, twist-prong mounting (twist-lock can capacitors) (Nuts & Volts; Metal Earth instructions)
  - tab staking, center tab staking (Kawamura, Trans. JSME C, 1988)
  - lanced tab, lance-and-form tab (a tab cut on three sides and bent up out of the sheet by a punch) (Wikipedia 'Blanking and piercing'; Wilson Tool)
  - slot and tab construction, tab-and-slot assembly (tinplate toys and toy trains) (Wikipedia 'Tin toy'; Trains.com)
  - tabs and holes, twist and fold tabs (metal model kits such as Metal Earth (brand))
  - 'claw' fold: several tabs folded towards each other (Metal Model Mania)
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment
- **one_liner**: A tab on one sheet-metal part passes through a slot in the other and is then folded over or twisted about a quarter turn, so the parts line themselves up and are locked together with no screws, rivets, glue or heat.
- **complexity**: A few features rather than parts: a long tab (tongue) on the edge of one sheet, or a tab cut and raised from the middle of the sheet (lanced tab), plus a matching slot in the other sheet. Optional extras: small holes or cuts across the bend line to make folding easier (SendCutSend), and a solder joint on one tab when it must also carry an electrical earth (Nuts & Volts).
- **how_it_works**: The tab is a snug fit in the slot, so pushing it through lines the two parts up (as in any tab-and-slot joint). The part of the tab that sticks out on the far side is then folded flat against the sheet or twisted about 90 degrees, which makes it too wide or the wrong shape to come back through the slot, so the parts are locked (SendCutSend; Metal Earth). Twisting also draws the two parts tightly together, making a firm joint (Metal Model Mania). The joint stays shut because ductile metal stays where it is bent instead of springing back (Machine Design).

### Finder attributes

- **job**: 
  - join and hold: joins thin sheet-metal parts at right angles, face to face, or in a stack (SendCutSend)
  - line parts up exactly: the tab and slot place the parts before the tab is locked (SendCutSend)
  - tighten and hold tension: twisting the tab pulls the parts together (Metal Model Mania); long bent tabs can clamp a thicker part such as acrylic against metal (SendCutSend)
- **motion**: none: once the tab is folded or twisted the parts don't move.
- **degrees_of_freedom**: 0: the slot stops sideways and twisting movement and the bent or twisted tab stops the tab pulling back out.
- **special_behaviour**: 
  - self-aligning or self-centring: the tab only fits one slot in one position, so parts go together without measuring or jigs (SendCutSend)
  - tensioning (takes up slack and holds): only for the twisted version, where the twist draws the two parts together into 'the tightest, strongest joint possible' (Metal Model Mania)
  - none of the other listed behaviours
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the folded or twisted tab can no longer pass back through the slot
  - friction or clamping (force-fit): a twisted or tightly folded tab also clamps the sheets together (Metal Model Mania; SendCutSend)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): tabs can be straightened and pulled out, but they are fragile and may break (Trains.com restoration guide: 'They break off easily, but most will withstand one disassembly without serious damage'). SendCutSend calls the bent-tab joint 'permanent or semi-permanent'.
- **reuse_cycles**: once to a few times: Metal Earth warns that folding a piece back and forth along a fold line more than 2 times will weaken or break it; a toy-train restorer says most tabs survive one disassembly (Metal Earth help page; Trains.com).
- **tools_needed**: Fingers for thin aluminium; flat-nose or needle-nose pliers or strong tweezers to fold and twist tabs (SendCutSend; Metal Earth; Metal Model Mania); a small screwdriver or blade to push a tab flat (Metal Model Mania). Factories use punch-press lance-and-form tools to make lanced tabs (Wilson Tool) and machines to twist them ⚑ [uncertain]. *(⚑ parts need confirming)*
- **seal**: none: the slot and tab leave small gaps.
- **load**: Light to medium. Stronger when pulled at right angles to the folded tabs; weaker when pushed along the direction the tab is folded, where the tab can bend back and slip out of the slot. Angled tabs folded in opposite directions, more tabs, or tabs folded towards each other (the 'claw') make it stronger (SendCutSend; Metal Model Mania). Tests on lap joints with a centre tab showed that the fold direction decides how it breaks: a tab folded against the load unbends at its root, while one folded with the load bends the thin strip of sheet beside the slot; wider tabs or more tabs raise the strength (Kawamura 1988). Machine Design calls folded tabs 'moderately strong' joints.
- **adjustable**: no: position is fixed by the slot. A twisted tab can be twisted a little further to tighten a loose joint, at the risk of breaking it ⚑ [uncertain]. *(⚑ parts need confirming)*
- **play_and_precision**: Small play before locking, set by the slot clearance; a twisted tab pulls the parts tight and removes most of it (Metal Model Mania). A folded tab can leave slight play ⚑ [uncertain]. Location is as repeatable as the laser-cut or stamped slot. Almost no tolerance for misalignment, since the tab must enter the slot. *(⚑ parts need confirming)*
- **access_needed**: both sides: you push the tab in from one side and must reach the far side to fold or twist it.
- **materials**: Thin, ductile sheet metal: soft (mild) steel, aluminium, copper and brass (Machine Design); SendCutSend lists thin 2024 and 5052 aluminium as easiest to bend, plus cold-rolled steel, stainless steel, brass and copper. Also tinplate (tin toys) and etched steel sheet (metal model kits). The metal must stay bent rather than spring back (Machine Design). Card and paper use the same idea with folded tabs ⚑ [uncertain]. Not suited to brittle materials (acrylic, cast metal, most printed plastics) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: if you can get thin sheet metal laser-cut (or cut it with snips), the joint needs only pliers; the main skill is bending each tab once, cleanly, without working it back and forth (SendCutSend; Metal Earth).

### Making it

- **processes**: 
  - sheet metal: laser-cut or stamped thin sheet, tabs folded or twisted by hand after cutting (SendCutSend: this bending is done after delivery, not with standard CNC press-brake tooling)
  - laser cut: thin aluminium, steel, brass and copper sheet from online cutting services (SendCutSend)
  - off-the-shelf part: metal model kits and some electronic parts (twist-lock can capacitors) come with the tabs ready to twist (Metal Earth; Nuts & Volts)
- **print_in_place**: no: the tab must be bent or twisted after assembly, and the joint is made in sheet metal, not printed.
- **making_tips_3d_printing**: Not applicable for the joint itself: it relies on metal that bends once and stays bent (Machine Design), whereas printed plastic tabs tend to spring back or crack along layer lines when bent ⚑ [uncertain]. In a printed part use a snap fit, heat staking (a melted plastic rivet) or a screw instead ⚑ [uncertain]. A 3D printer can still help: a fully printed bending tool for fine sheet metal, intended for building metal model kits, is on Thingiverse and Printables (blecheimer, CC BY-NC-SA 4.0; printed at 0.2 mm layers, three walls, 20% infill). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Usually none: the tabs and slots are cut into the parts. Helpers: flat-nose and needle-nose pliers and tweezers (Metal Earth help page; Metal Model Mania), and special tab-twisting tools sold for metal model kits ⚑ [uncertain]; laser-cut thin aluminium or steel from services such as SendCutSend; phenolic mounting wafers (mounting plates) for twist-lock (twist-prong) can capacitors (RF Parts listing; Nuts & Volts). Industrial versions are made with punch-press 'lance and form' tools (Wilson Tool). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Plain tab-and-slot joints suit sheet 0.080 in (2 mm) or thicker; in thinner sheet use bent tabs instead. Make the tab long enough to fold over after it leaves the slot; small holes at the two ends of the tab's bend line, or small cuts across it, make folding easier, but removing too much can make the tab break (SendCutSend 'How to Join Laser Cut Parts Without Fasteners').
  - Bent tabs are stronger across the fold than along it; set tabs at an angle and fold them in opposite directions for more strength; two tabs can share one slot if folded in opposite directions (SendCutSend).
  - Twist a tab 90 degrees where the tab is hidden, fold it 90 degrees where it shows; don't fold a piece back and forth along one fold line more than 2 times or it will weaken or break (Metal Earth instructions and help page).
  - Don't fold neighbouring tabs the same way: fold them towards each other (the 'claw'); twist rather than fold whenever possible, and always twist the same way (e.g. clockwise) so you know which way to untwist (Metal Model Mania 'How to Bend Metal Earth Tabs').
  - Bend lines should run at right angles to the rolling direction of the sheet, or at least 45 degrees from it; keep the stamping burr on the inside of the bend; make the final bend in the same direction as the first bend. The page gives the tab thickness range as '0.12 and 0.8 in.', which looks like a typo for about 0.012-0.080 in ⚑ [uncertain] (Machine Design 'Methods for Fastening Sheet Metal Without Fasteners', 2015).
  - When reassembling old tinplate, bend tabs only as far as needed and stress them a different way than before: re-fold tabs that were twisted, and twist tabs that were folded; don't bend them a full 90 degrees or the opposite way (Trains.com 'Do it yourself locomotive restoration', Ray L. Plummer).
  - Formed (bent) tabs on sheet-metal parts should be longer than 4 x the sheet thickness for easy forming; any sheet-metal tab should be at least 2 x thickness or 3.175 mm wide and no longer than 5 x its width (Protolabs 'How to Design Sheet Metal Notches, Tabs, and Slots').
  - Punch-press 90-degree lance-and-form tabs: height at least 1.5 x sheet thickness; width 1.5 x thickness in mild steel and aluminium, 2 x in stainless; narrower than 0.070 in (1.78 mm) may tear (Wilson Tool 'Design Basics of Lance & Forms').
  - In lap joints held by a centre tab, wider tabs or more tabs spread the load and raise joint strength; if the tab is folded in the same direction as the load, the strip of sheet beside the slot (the 'bridge') needs to be wider than the tab (Kawamura, Trans. JSME C 54(506), 1988). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Old tin toys and tinplate toy trains, whose printed metal parts are held together by small tabs pushed through slots and folded or twisted (Wikipedia 'Tin toy'; Trains.com)
  - Metal model kits such as Metal Earth (brand), built entirely with tabs that are twisted or folded with pliers (Metal Earth help page)
  - Twist-lock ('twist-prong') can capacitors in old valve radios and guitar amplifiers, whose tabs go through slots in a mounting wafer and are twisted or folded (Nuts & Volts)
  - Sheet-metal brackets and covers inside computers and appliances ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use it to join thin sheet metal (below about 2 mm) cheaply and quickly with no screws, rivets, welding or glue: small enclosures, brackets, stacks of plates, metal models and toys (SendCutSend; Machine Design). It suits parts that are laser-cut or stamped, since the tabs and slots come free with the cut and also line the parts up. Long tabs can clamp a thicker non-metal part, such as an acrylic window, to a metal frame (SendCutSend). It is good for parts that will be assembled once and rarely or never taken apart.
- **when_not_to_use**: Avoid it when the parts must be taken apart often (use screws, a T-slot joint, hooks or a key-and-tab joint instead) (SendCutSend; Metal Earth), for thick or springy sheet that won't stay bent (use a plain tab and slot with welding, rivets or bolts) (SendCutSend; Machine Design), for high or vibrating loads, especially pushing along the fold direction (use rivets, clinching, welding or bolts) (SendCutSend), and when the joint must seal. It doesn't work in brittle materials such as acrylic or most 3D prints; use a snap fit, heat staking or a screw there ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: All-metal joints cope with heat, cold and sunlight. Repeated bending work-hardens the tab and makes it brittle, so tabs that have been bent back and forth crack easily (Metal Earth; Trains.com). Vibration or repeated loads along the fold direction can bend a tab back until it slips out (SendCutSend). Bending can crack paint, printing or plating on the tab and let rust start there ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Cut sheet-metal edges, burrs and tab tips can be sharp; round the outsides of tabs and hooks where possible and take care when handling (SendCutSend recommends rounding hooks to avoid sharp edges). Snapped-off tab ends are small sharp pieces ⚑ [uncertain]. Metal model kits have small sharp parts, so keep them away from small children ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: Tab snaps at its root because it was bent too far, bent back and forth, or cut too narrow; bend once and gently, and leave spare tabs for later repairs (Metal Earth; Trains.com). Joint pulls apart when load acts along the fold direction and bends the tab back; fold tabs in opposite directions or towards each other, or twist instead (SendCutSend; Metal Model Mania). Tab tears out or the strip of sheet next to the slot bends when the tab is too narrow or the slot too close to the edge (Kawamura 1988). Tab springs back and the joint is loose when the metal is too hard or thick (Machine Design). A twisted tab is hard to undo if you assembled the wrong piece, so check before twisting (Metal Model Mania).
- **related**: 
  - Tab-and-slot joint (self-fixturing sheet joint): the same tab and slot without bending, held by friction, glue, welding or the rest of the box
  - Hooks and key-and-tab joints: tabs that hook or are wedged through a slot, so they can come apart without bending anything (SendCutSend)
  - Clinching (press joining without rivets): a press forms the two sheets into an interlocking button, with no tab needed
  - Blind rivets and pop rivets: stronger and more reliable sheet-metal joints, but need a hole, a rivet and a rivet gun
  - Spring-steel push-on fasteners (speed nuts, U-nuts): clip-on metal parts for joining sheet with a screw
  - Split pin (cotter pin) and paper fastener (brad): a separate part whose legs are pushed through a hole and bent back, the same locking idea
  - Heat staking (melted plastic rivet): the plastic-part equivalent, where a post through a hole is melted over instead of bent
  - Ordinary screw joint (bolt and nut): the baseline, easy to undo and reuse many times
  - Spot weld: joins overlapping sheet metal at small points with electrode pressure and a short burst of current instead of a bent tab; a low-cost spot welder is also used to repair broken tin-toy tabs (Robothut video in links)

### Pictures, videos and models

- **links**: 
  - [How to Join Laser Cut Parts Without Fasteners (SendCutSend)](https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/): Illustrations of bent tabs before and after folding, angled tabs folded in opposite directions, tabs clamping a stack or an acrylic panel, and a perforated tab that is easier to bend *(licence: link only)*
  - [How to Bend Metal Earth Tabs So Your Models are Extra Strong (Metal Model Mania, Phil Morgan, 2019)](https://www.metalmodelmania.com/2019/01/10/bend-metal-earth-tabs/): Close-up photos of twisted tabs and of folded tabs arranged in the 'claw' pattern, with tool advice *(licence: link only)*
  - [Metal Earth help and tips (Metal Earth (brand))](https://www.metalearth.com/help): Explains the instruction symbols for tabs to fold 90 degrees or twist 90 degrees, and the pliers used *(licence: link only)*
  - [Metal Earth - Starter Tips and Tricks (YouTube, animateorange)](https://www.youtube.com/watch?v=NFyqSEom-MQ): Video of building a tab-and-slot metal model kit (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Repair broken metal tabs on your vintage tin toys with a low-cost spot welder! No Glue, no solder. (YouTube, Robothut)](https://www.youtube.com/watch?v=C0-GQxCs6Is): Video about repairing the fragile tabs that hold vintage tin toys together (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Fully Printed Bending Tool For Fine Sheet Metals (e.g. Etched Parts) (blecheimer, Thingiverse)](https://www.thingiverse.com/thing:4601820): A printable, all-plastic bending tool for small thin sheet-metal parts; the designer says it can be used for building metal model kits *(licence: CC BY-NC-SA 4.0 (stated in the Printables copy of the model))*
  - [Fully Printed Bending Tool For Fine Sheet Metals (e.g. Etched Parts) (blecheimer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236096-fully-printed-bending-tool-for-fine-sheet-metals-e): Same model on Printables, read through the Printables public API: printed at 0.2 mm layers, three walls, 20% cuboid infill; candle wax on the thread helps *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- **diagram_idea**: Three side-by-side views of one tab going through a slot: (1) tab pushed through, (2) tab folded flat against the far side, (3) tab twisted a quarter turn, with arrows showing the strong direction (across the fold) and weak direction (along the fold), plus a small inset of the 'claw' pattern of tabs folded towards each other.
- **sources**: 
  - https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/
  - https://www.machinedesign.com/mechanical-motion-systems/media-gallery/21831054/methods-for-fastening-sheet-metal-without-fasteners
  - https://www.jstage.jst.go.jp/article/kikaic1979/54/506/54_506_2358/_article
  - https://www.protolabs.com/resources/blog/designing-sheet-metal-notches-and-tabs/
  - https://wilsontool.com/en-us/resources/design-basics-of-lance-forms
  - https://en.wikipedia.org/wiki/Blanking_and_piercing
  - https://en.wikipedia.org/wiki/Tin_toy
  - https://www.trains.com/ctt/how-to/restoration-repair/do-it-yourself-locomotive-restoration/
  - https://www.metalearth.com/help
  - https://www.metalmodelmania.com/2019/01/10/bend-metal-earth-tabs/
  - https://www.nutsvolts.com/magazine/article/finding-the-outside-foil-lead
  - https://www.rfparts.com/capacitors/capacitors-electrolytic/capacitors-twistmount.html
  - https://www.thingiverse.com/thing:4601820
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=NFyqSEom-MQ
  - https://www.youtube.com/watch?v=C0-GQxCs6Is

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…rm tools to make lanced tabs (Wilson Tool) and machines to twist them [uncertain].…"*
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: semi-permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, environment_limits, everyday_examples, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, rules_of_thumb, safety_notes, tools_needed, when_not_to_use

## 255 Clinching (press joining without rivets)

*interlocking joints & joinery.* A punch and die press two metal sheets into a button shape that locks them together, with no rivet, screw or heat

### What it is

- **plain_name**: Two or more metal sheets squashed together by a special punch and die so that they form a little locked 'button', like a press stud made out of the sheets themselves: no rivet, screw, glue or heat
- **term**: Clinching (clinch joining, press joining)
- **aliases**: 
  - clinch joining; press joining; press-joining; sealed clinch joint (Wikipedia 'Clinching')
  - mechanical clinching; clinch joint; clinch point; clinch button (He 2017 review; European Aluminium Association (EAA) Joining Manual ch. 8)
  - round clinching / clinching without local incision (the usual closed round button) and rectangular or lanced clinching / clinching with local incision (sheets cut along two sides) (EAA Joining Manual 8.1.2.1-8.1.2.2)
  - flat clinching / flat point (button pressed flat afterwards); twin point (two buttons side by side); hit clinching (many small hits) (TOX brochure; EAA; Assembly Magazine 2016)
  - 'riveting without rivets' (TOX brochure title); 'toxing' / 'Toxen' after the TOX company (brand) (TOX brochure; German Wikipedia)
  - German: Durchsetzfuegen, Clinchen, Druckfuegen (German Wikipedia 'Durchsetzfügen')
  - Trade names (brands): TOX Clinching / TOX Round-Joint (TOX Pressotechnik); Tog-L-Loc, V-Loc and Lance-N-Loc (BTM); RIVCLINCH (Böllhoff) (EAA Joining Manual; Böllhoff)
  - In metal-stud wall framing the hand tool that locks a steel stud to its track is sold as a 'stud crimper' or 'punch lock' (Malco); it makes a similar lanced, fastener-free joint ⚑ [uncertain: sellers call it a crimp, not a clinch] *(⚑ parts need confirming)*
- **family**: interlocking joints & joinery
- **one_liner**: A way of permanently joining overlapping metal sheets by pressing them with a punch into a shaped die, so the metal flows sideways into a button-shaped interlock that holds the sheets together without any extra part.
- **complexity**: Single piece: the joint is made only from the sheets themselves (EAA Joining Manual 8.1.2). The tool is a small matched set: a punch, a die (solid with a ring-shaped groove, or split into sliding segments held by a spring) with an anvil in its bottom, often a stripper/blank holder, all driven by a hand, pneumatic, hydraulic or electric press (Wikipedia 'Clinching'; EAA 8.1.2.2; Assembly Magazine 2002).
- **how_it_works**: The overlapping sheets are clamped between a punch and a die. The punch pushes both sheets down into the die like a small deep-drawn cup; when the bottom sheet hits the anvil, the squeezed metal can only flow sideways, into a groove in a solid die or by pushing movable die segments outward (TOX brochure p.2; EAA 8.1.2.2). The top sheet spreads out inside the bottom sheet, forming an undercut (a mushroom-shaped lock), so the sheets can't be pulled apart without tearing the 'neck' of the button or popping the button out (He 2017). The lanced (rectangular) version first cuts both sheets along two sides and then squeezes the strip between the cuts into a lock (EAA 8.1.2.1; Assembly Magazine 2016).

### Finder attributes

- **job**: 
  - join and hold: a permanent join for overlapping sheet metal, used instead of spot welds or rivets (Wikipedia 'Clinching'; EAA 8.1.2)
  - seal it, or pass cables or fluid through: a round, uncut clinch point is gas-tight, which is why it is used on gas meters (German Wikipedia; EAA 8.1.2.2); it can also be combined with adhesive or sealant between the sheets (EAA 8.1.2)
- **motion**: none: the sheets are locked together
- **degrees_of_freedom**: 0 once two or more points are made. A single round point stops the sheets sliding apart but can let them twist about the point, which is why a 'twin point' (two buttons side by side) is offered for 'protection against rotation' (EAA 8.1.2.2 c; TOX brochure p.9).
- **special_behaviour**: 
  - none of the listed behaviours: it is a plain permanent joint
  - Its own tricks: no consumables, no heat, sparks or fumes, and it does not burn off zinc or paint, so pre-painted and galvanised sheet can be joined (Wikipedia 'Clinching'; Assembly Magazine 2002); joint quality can be checked without breaking it by measuring the leftover bottom thickness or the button diameter (TOX brochure p.7; EAA 8.1.2.4)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the top sheet is spread into an undercut inside the bottom sheet, like a press stud (TOX brochure p.2; He 2017)
  - friction or clamping (force-fit): the EAA calls it 'an interlocking friction joint' and German Wikipedia says the button holds the sheets by both form-fit and force-fit (EAA 8.1.2; German Wikipedia)
- **input_output**: not applicable
- **power**: passive (no power needed once made). Making the joint needs a press: hand-operated, pneumatic, hydraulic or electric (Assembly Magazine 2016).
- **removability**: permanent: the only way apart is to tear or drill out the button, which damages the sheets ⚑ [uncertain: no source describes removal]. *(⚑ parts need confirming)*
- **reuse_cycles**: once
- **tools_needed**: A press with a matched punch and die for the sheet thicknesses: hand-held clinching pliers or tongs (pneumatic, hydraulic or battery powered), table or floor C-frame machines, or tooling fitted into an existing press (Assembly Magazine 2002 and 2016; EAA 8.1.2). Forces are about 5 to 50 kN depending on material and thickness (Wikipedia 'Clinching'), up to 350 kN for large machines (Assembly Magazine 2016). Examples: a pneumatic hand tool with 25 kN joining force for up to 2.5 mm mild steel (Böllhoff RIVCLINCH 0201 IP); TOX's battery hand tool gives 10-50 kN and about 400 points per charge (TOX brochure p.13). No holes need to be drilled first (Wikipedia 'Clinching'). For metal-stud framing, a hand 'stud crimper' with 7:1 compound levers does light-gauge steel (Malco PL1R).
- **seal**: airtight or pressure (round, uncut points only): the closed round button is described as gas-tight (EAA 8.1.2.2; German Wikipedia, gas meters). Lanced (rectangular) points are cut on two sides and are not gas-tight (German Wikipedia). Sealant or adhesive can be put between the sheets and clinched through (EAA 8.1.2).
- **load**: light to medium per point; strongest in shear (sliding the sheets past each other), weaker in peel and in pulling straight apart (cross-tension). Example figures for one 4.6 mm punch point: two 0.56 mm galvanised mild-steel sheets about 70 lb (0.31 kN) peel and 285 lb (1.27 kN) pull; two 2 mm sheets about 300 lb (1.33 kN) peel and 1,000 lb (4.45 kN) pull (Norlok data quoted in Assembly Magazine 2016). A single clinch in two 20-gauge sheets holds 'roughly 430 lbs' in shear (Press Lock Technologies in ACHR News). Compared with a spot weld, sources disagree: 'about 50%' (ACHR News), 'up to 70 % of a weld point' (TOX brochure p.6), '2/3 to 1.5 times' (German Wikipedia), or higher static and fatigue strength than common spot welds (EAA 8.1.2). Clinches are weaker than self-pierce rivets, especially in cross-tension, so they are used in areas that don't take crash loads (EAA 8.1.2). Fatigue strength is good because there is no notch or heat-affected zone (TOX brochure p.6; Wikipedia 'Clinching').
- **adjustable**: no: once pressed, the join is fixed.
- **play_and_precision**: No play once formed. Position depends on where the tool is placed; 'Alignment of the tools is very critical' and poor fit-up is a major cause of bad joints (Assembly Magazine 2002; EAA 8.1.2.3). The punch and die must be the same nominal size and line up exactly (Assembly Magazine 2016). A single round point may let the parts rotate, so use two points or a twin point (EAA 8.1.2.2 c).
- **access_needed**: both sides: the punch works from one side and the die from the other ('access to both sides of the joint is essential', He 2017; EAA 8.1.2.3). 'Die-driven' systems move the die side instead of the punch for awkward parts, but still need both sides (TOX brochure p.11).
- **materials**: Joins ductile sheet metals: low-carbon and micro-alloyed steel, zinc-coated, organic-coated and pre-painted steel, stainless steel, ductile aluminium alloys, copper and brass, magnesium (Böllhoff; Wikipedia 'Clinching'; Assembly Magazine 2016), and dissimilar pairs such as aluminium to steel (EAA 8.1.2; Assembly Magazine 2002). With special or heated tooling, also some polymers, fibre-reinforced plastics, wood-metal composites and cardboard (Wikipedia 'Clinching'). Poor for brittle or low-ductility materials: conventional clinching of steel is limited to tensile strength below about 800 N/mm² and elongation above 14% (He 2017), or roughly 10-20% elongation depending on the source (Assembly Magazine 2002 and 2016). Adhesive, sealant, fabric or a sound-damping layer can be clinched between the sheets (EAA 8.1.2; Assembly Magazine 2016).
- **maker_difficulty**: hard: you need a matched punch and die and a press giving several tonnes (5-50 kN), so it is an industrial process; hobbyists can buy a hand stud crimper for thin galvanised steel studs (Malco PL1R, 22 gauge / 0.86 mm) or have parts made by a shop ⚑ [uncertain: no source on hobby access or tool prices]. *(⚑ parts need confirming)*

### Making it

- **processes**: 
  - sheet metal: the main use, joining overlapping flanges, lap joints, corners and tube-to-sheet joints (Assembly Magazine 2016)
  - off-the-shelf tooling: punch-and-die sets, hand tongs and presses are bought from clinching suppliers (TOX brochure; Böllhoff)
  - tube and extrusion: aluminium extrusions and round tube to flat sheet can be clinched (Assembly Magazine 2016)
- **print_in_place**: no: clinching is a sheet-metal forming process, not something that can be printed.
- **making_tips_3d_printing**: not applicable: the joint is formed in ductile sheet metal by hardened tool-steel punches and dies under 5-50 kN (Wikipedia 'Clinching'). 3D-printed PLA+ dies have been used to stamp logos into 1-2 mm sheet with a hydraulic press, but 'began to wear out after about a dozen tries' (Hackaday 2025), so a printed clinching die is unlikely to be practical ⚑ [uncertain: no one has reported trying it]. Printed parts can be joined to clinched sheet-metal parts with screws, rivet nuts or self-clinching nuts instead. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for: 'clinching tool', 'clinching pliers' or 'clinching tongs' (hand-held C-frame, pneumatic, hydraulic, pneumohydraulic or battery), 'clinching press' or 'clinching machine', 'clinching punch and die' (round or rectangular; solid or split/segmented 'moveable' dies), 'multi-point clinching tool', 'flat clinching' die, 'clinch cycle monitor' or force-displacement monitoring (EAA 8.1.2; Böllhoff RIVCLINCH range; TOX brochure; Assembly Magazine 2016). For metal-stud framing: 'stud crimper', 'metal stud crimper' or 'punch lock' hand tool (Malco; Gypsum Tools).
- **rules_of_thumb**: 
  - Edge distance: keep the centre of the joint at least 1.5 x the punch diameter from the outer edge of the flange, or the button may burst out of the edge or distort the part (EAA Joining Manual 8.1.2.3; Assembly Magazine 2002).
  - Spacing: space points at least 2 to 3 x the button diameter apart, and never clinch in or right next to an earlier point (EAA 8.1.2.3; Assembly Magazine 2002).
  - Overlap: ideally about 10 mm of overlap in the joining area (Assembly Magazine 2016).
  - Thickness: single sheets about 0.1 to 3 mm and stacks of 2 to 4 sheets 0.2 to 13 mm, working best with a total stack of 1 to 4 mm (Assembly Magazine 2016); TOX and the EAA quote 0.1 mm per sheet up to 12 mm total (TOX brochure p.4; EAA 8.1.2). Point diameters range from about 2 to 26 mm (TOX brochure p.4).
  - Joining direction for unequal sheets: 'thick sheet into thin sheet' (thicker sheet on the punch side), with the thicker sheet no more than twice the thinner; put the harder sheet on the punch side, or the punch may go straight through a soft top sheet (EAA 8.1.2.3; Assembly Magazine 2002).
  - Ductility: good clinches if elongation to fracture A80 >= 12% and yield ratio Rp0.2/Rm <= 0.7; limited between 8 and 12% (EAA 8.1.2.3). TOX engineers quoted 'at least 10 percent' (Assembly Magazine 2016) and 'greater than 20 percent' for trouble-free work (Assembly Magazine 2002).
  - Quality check: the leftover bottom thickness of the button (TOX 'control dimension X') and the button diameter are measured to check each joint without destroying it (TOX brochure pp.2, 7; EAA 8.1.2.4). One study recommended a bottom thickness of 25% of the total sheet thickness (He 2017).
  - Joint strength depends on material, sheet thickness, button size (as large as possible) and surface condition; a dry, grease-free surface gives a stronger joint, but a little lubrication improves tool life (EAA 8.1.2.3).
  - Tool life: punches and dies typically last more than 250,000 joints (Assembly Magazine 2016); 'hundreds of thousands of cycles' (Wikipedia 'Clinching'; EAA 8.1.2).

### When to use it

- **everyday_examples**: 
  - Washing machines, fridges and other white goods made from pre-painted sheet steel (Assembly Magazine 2016; German Wikipedia, with Commons photo of a washing-machine clinching station)
  - Car bonnets (hoods) and boot lids in aluminium, where spot welding is difficult (Wikipedia 'Clinching'; Assembly Magazine 2016)
  - Heating and ventilation ductwork and HVAC cabinets (ACHR News; Assembly Magazine 2016), and the back panel and drive bays of a computer case (German Wikipedia)
  - Steel studs locked into their track in metal-stud partition walls with a hand crimper instead of screws (Malco; Gypsum Tools) ⚑ [uncertain: a lanced crimp, similar to but not called clinching by the sellers] *(⚑ parts need confirming)*
- **when_to_use**: Use clinching when you need many fast, permanent joins in overlapping sheet metal and want no loose parts to buy or feed: appliance cases, ducts, enclosures, brackets and car body panels (Assembly Magazine 2002). It is a good replacement for spot welding when the sheets are pre-painted, galvanised or aluminium, because it does not damage coatings, needs no electricity, cooling water or fume extraction, and joins different metals or different thicknesses (Wikipedia 'Clinching'; Assembly Magazine 2002). It also suits joints that must stay gas-tight or electrically conductive (EAA; TOX 'eClinching' p.7), and can hold glued sheets together while the adhesive cures ('clinch-bonding', German Wikipedia).
- **when_not_to_use**: Don't use it when you can reach only one side (use a blind rivet or rivet nut), for brittle or very hard metals such as cast material or ultra-high-strength steel (He 2017; EAA), for thick plate beyond the tooling range (He 2017), or where the joint must take high peel or crash loads (use self-pierce rivets, bolts or welding) (EAA 8.1.2). If the parts must come apart again, use screws or bolts. Without access to a clinching press, a hobbyist is usually better off with blind (pop) rivets, a folded seam or tab-and-slot joints.
- **environment_limits**: Because no heat is used, zinc and paint coatings stay intact, so corrosion protection is kept; TOX shows clinches in coated steel tested through 1,000-hour salt-spray and climate tests (TOX brochure p.6; EAA 8.1.2). Clinched joints are 'less affected by environmental agents and effect of aging' than adhesive joints (Wikipedia 'Clinching'). Fatigue and vibration resistance are good (TOX p.6; BTM's V-Loc described as 'vibration-resistant and leak-proof', Assembly Magazine 2016). Joining dissimilar metals (e.g. aluminium to steel) can bring galvanic corrosion where water collects ⚑ [uncertain: general corrosion advice, no clinching source]. Metals only: no creep or heat limit worth worrying about at everyday temperatures, unless an adhesive or polymer layer is clinched in ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Clinching presses and hand tongs apply several tonnes at the punch: keep fingers out of the jaws (TOX hand tongs are offered with one- or two-hand controls, Assembly Magazine 2016). The process makes no sparks, fumes or flash (Wikipedia 'Clinching'; Böllhoff). Round points have no burrs or sharp edges (EAA 8.1.2.2), but lanced points and cut sheet edges can be sharp ⚑ [uncertain: general advice]. Hand stud crimpers can pinch fingers between the handles ⚑ [uncertain: general advice]. *(⚑ parts need confirming)*
- **common_failures**: 1) Neck fracture (the thin wall of the button tears) or button separation (the button pops out) when the neck is too thin or the undercut too small; tooling and bottom thickness are tuned to balance the two (He 2017). 2) Cracks or a missing interlock when the material is not ductile enough or the two sheets differ greatly in ductility (He 2017); test first and use special or heated tooling (EAA). 3) Button bursting out of the flange edge or distorting the part when too close to the edge; keep 1.5 x punch diameter (EAA 8.1.2.3). 4) Thinned, ugly or weak joints and fast tool wear when clinching on or next to an earlier point (EAA 8.1.2.3). 5) Oily aluminium in a closed solid die can form a trapped 'hydrostatic cushion' that can break the die; use moveable-segment dies with oily sheets or adhesive (EAA 8.1.2.2). 6) Poor fit-up or misaligned punch and die give inconsistent joints (Assembly Magazine 2002). 7) Punch going straight through when the softer sheet is on the punch side (EAA 8.1.2.3). 8) Parts twisting about a single point: use two points or a twin point (EAA).
- **related**: 
  - Blind rivet (pop rivet): also joins sheets permanently, needs access to one side only and a cheap hand tool, but adds a part and a hole
  - Spot weld: the industrial joint clinching often replaces; spot welds need electricity and cooling water and burn coatings, which clinching doesn't (EAA 8.1.2; Wikipedia 'Clinching'; Assembly Magazine 2002)
  - Self-pierce riveting (not a separate entry): another industrial alternative; self-pierce rivets are stronger than clinches in cross-tension (EAA 8.1.2)
  - Clinch riveting (not a separate entry): a variant that adds a solid rivet into the clinch for more strength (EAA Joining Manual 8.2.2.5)
  - Self-clinching fastener (press-in nut or stud): uses the same cold flow of sheet metal, but to lock a nut or stud into one sheet rather than join two sheets
  - Folded seam (hem, lock seam, Pittsburgh lock): joins sheet edges by folding them together, needs no press but only works along edges
  - Bent or twisted tab through a slot (lanced tab) and Tab-and-slot joint: fastener-free sheet joints that a maker can do with pliers
  - Ordinary screw joint (bolt and nut): removable alternative when parts must come apart

### Pictures, videos and models

- **links**: 
  - [TOX Pressotechnik Clinching.gif (CRT4TopSpot, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:TOX_Pressotechnik_Clinching.gif): Animation of a round clinch point forming in a solid die: punch pushes two sheets into the die and the metal spreads into a button *(licence: CC BY-SA 4.0)*
  - [Clinching Phases (Francesco Lambiase, Wikimedia Commons, 2015)](https://commons.wikimedia.org/wiki/File:G5151Clinching_Phases_from_Lambiase_%22Clinch_joining_of_heat-treatable_aluminum_AA6082-T6_alloy_under_warm_conditions%22.png): Cross-section diagram of the stages of forming a clinch joint *(licence: CC BY-SA 4.0)*
  - [Clinching dies (Francesco Lambiase, Wikimedia Commons, 2015)](https://commons.wikimedia.org/wiki/File:Clinching_Dies_from_Lambiase_-_%22Mechanical_behaviour_of_polymer-metal_hybrid_joints_produced_by_clinching_with_different_types_of_dies%22.png): The different die types: fixed grooved, split (movable segments), flat and rectangular *(licence: CC BY-SA 4.0)*
  - [Durchsetzfügen Clinchen Handgerät (Michael KR, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Durchsetzfuegen_Clinchen_Handgeraet_0076.jpg): Photo of a hand-held clinching tool with a clinched workpiece *(licence: CC BY-SA 4.0)*
  - [(English) Clinching technology: Joining sheet metal without welding nor fasteners - RIVCLINCH (Böllhoff Group, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=P1iMcCI70R0): Manufacturer video of clinching sheet metal with hand and machine tools *(licence: link only (YouTube, all rights reserved))*
- **make_it_yourself**: 
  - [Punch Lock, Metal Stud Crimper - PL1R (Malco Tools)](https://www.malcotools.com/product/punch-lock-metal-stud-crimper/): A hand tool (brand: Malco) that makes a rectangular fastener-free crimp through a steel stud and its track, up to 22 gauge (0.86 mm) galvanised steel; the easiest way for a hobbyist to try a lanced, clinch-style joint ⚑ [uncertain: sold as a crimp, not a clinch] *(licence: not applicable (commercial product page))*
  - [Using the Wallboard Tools Stud Crimpers (wallboardtools, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=sMMJCkvOEXY): Video showing a hand stud crimper joining metal studs to track *(licence: link only (YouTube))* *(⚑ parts need confirming)*
- **diagram_idea**: A four-step cross-section of two overlapping sheets between a round punch and a grooved die: (1) sheets clamped, (2) punch pushes both into the die, (3) the bottom hits the anvil and the metal squeezes sideways into the groove, (4) the finished button with the top sheet's mushroom-shaped undercut locked inside the bottom sheet, labelled 'neck', 'undercut' and 'bottom thickness'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Clinching
  - https://de.wikipedia.org/wiki/Durchsetzf%C3%BCgen
  - https://assets.tox.com/f/176476/x/dd4b9050dd/tox_clinching-technology_80_en.pdf
  - https://european-aluminium.eu/wp-content/uploads/2022/11/8-mechanical-joining_2015.pdf
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5468947/fullTextXML (He, X. (2017) 'Clinching for sheet materials', Science and Technology of Advanced Materials 18(1):381-405, doi:10.1080/14686996.2017.1320930, CC BY 4.0)
  - https://www.assemblymag.com/articles/83301-in-a-clinch
  - https://www.assemblymag.com/articles/93388-clinching-for-sheet-metal-assembly
  - https://www.achrnews.com/articles/164712-a-guide-to-sheet-metal-clinching-for-hvac-contractors
  - https://www.boellhoff.com/us-en/products/assembly-technology/rivclinch-metal-joining-without-fasteners/
  - https://clinchsystems.com/what-is-clinching/
  - https://www.malcotools.com/product/punch-lock-metal-stud-crimper/
  - https://www.gypsumtools.com/blog/how-to-install-gypwall-partition-crimping-vs-screwing/
  - https://hackaday.com/2025/01/09/sheet-metal-forming-with-3d-printed-dies/
  - https://commons.wikimedia.org/wiki/File:TOX_Pressotechnik_Clinching.gif
  - https://commons.wikimedia.org/wiki/File:Durchsetzfuegen_Clinchen_Handgeraet_0076.jpg
  - https://commons.wikimedia.org/wiki/File:Sondermontageanlage_zur_Waschmaschinenproduktion_30007.jpg
  - https://www.youtube.com/watch?v=P1iMcCI70R0
  - https://www.youtube.com/watch?v=sMMJCkvOEXY

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: crimper, drill and tap, press or vice, hand tools
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent ⚑ *needs confirming (source uncertain): `removability` is marked [uncertain] here: "…ay apart is to tear or drill out the button, which damages the sheets [uncertain: no source describes removal]…"*
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, everyday_examples, make_it_yourself, maker_difficulty, making_tips_3d_printing, removability, safety_notes

## 256 Self-clinching fastener (press-in nut or stud)

*interlocking joints & joinery.* A nut, stud or standoff pressed into a hole in thin sheet metal so the metal flows into its grooves and holds it for good

### What it is

- **plain_name**: A special hard metal nut, threaded post or spacer that you squeeze into a plain round hole in thin sheet metal; the soft sheet metal gets pushed into a groove on it, so it stays there for good and gives you a strong screw thread without welding or a loose nut
- **term**: Self-clinching fastener (self-clinching nut, stud or standoff)
- **aliases**: 
  - self-clinching nut; swage nut (Wikipedia 'Swage nut'; Wikipedia 'Nut (hardware)')
  - PEM nut, PEM stud, PEM standoff, 'PEM hardware' (PEM is a brand and registered trademark of PennEngineering, often used as a generic name) (PEM handbook p.2; SendCutSend)
  - press nut; press-in nut; press fit nut; press fit standoff; self-clinching stud (SendCutSend hardware guidelines)
  - insert hardware; hardware inserts; self-clinching hardware (SendCutSend)
  - flush nut, flush stud, floating nut, blind (closed-end) standoff, concealed-head stud, self-clinching pin, right-angle fastener, sheet-joining fastener, cable-tie mount (variants listed in the PEM handbook p.7)
  - clinch nut: an older idea with a tube that passes through the part and is riveted over on the far side; the swage nut descends from it (Wikipedia 'Swage nut'). History: PennEngineering's founder K.A. Swanstrom started making self-clinching fasteners in 1942 (PEM handbook p.3); Wikipedia credits a 1958 US patent application by Albert Spokes for the swage nut
  - Specification: National Aerospace Standard NASM45938 (replacing MIL-N-45938) 'Nut, Plain, Clinch (self-clinching, round)' (Wikipedia 'Swage nut'; PEM CL data sheet)
- **family**: interlocking joints & joinery
- **other_families**: clamping, magnetic & friction connections, locating & alignment
- **one_liner**: A threaded nut, stud or standoff that is pressed into a plain hole in thin sheet metal so the sheet cold-flows into a groove around it, making it a permanent, non-spinning part of the panel that you can then screw into from the other side.
- **complexity**: Single piece: a hard metal part (hardened steel, stainless steel, aluminium or phosphor bronze; PEM handbook p.8) with a head or shoulder, a serrated clinching ring, knurl, ribs or hex head to stop it turning, an undercut or back-tapered shank for the sheet to flow into, and a thread (internal on nuts and standoffs, external on studs) (PEM handbook p.6). It is used with your own screw or nut.
- **how_it_works**: You put the fastener's shank into a hole of exactly the specified size and squeeze it in with a press between two parallel flat faces (a punch and an anvil). The hard clinching ring or knurl pushes the softer sheet metal around the hole so it 'cold flows' into the undercut or back-taper on the shank, locking the fastener in so it can't push out, while the serrations or hex bite into the sheet so it can't spin (PEM handbook pp.4, 15; Wikipedia 'Swage nut'). The fastener itself does not change shape: there is no flaring, crimping or riveting (PEM handbook p.15), and the back of the sheet stays flush (PEM handbook p.3).

### Finder attributes

- **job**: 
  - join and hold: gives thin sheet metal a strong, permanent, reusable screw thread (nut, stud or standoff) where the sheet is too thin to tap or the back can't be reached later (PEM handbook p.4; SendCutSend)
  - line parts up exactly: standoffs hold a circuit board or panel at a set distance, studs hang and locate a part before it is fastened, and self-clinching pins locate parts (PEM handbook p.7; SendCutSend)
- **motion**: none: once installed it can neither turn nor slide
- **degrees_of_freedom**: 0: the clinched metal stops it pushing out and the serrations stop it rotating (PEM handbook p.6). Floating-nut versions let the threaded part move slightly sideways to find a misaligned screw (PEM handbook p.7).
- **special_behaviour**: 
  - none for a plain nut, stud or standoff: it is simply a permanent thread in the sheet
  - self-aligning or self-centring (floating nuts only): a floating threaded element 'compensates for mating hole misalignment' (PEM handbook p.7)
  - Its own tricks: it stays captive in the panel, so there are no loose nuts or washers in final assembly (PEM handbook p.4); locking versions with a nylon element or a modified thread resist vibration loosening (PEM handbook p.7; PEM CL data sheet p.6)
- **holding_principle**: shape (the parts interlock; form-fit): the sheet cold-flows into the undercut, and the serrated ring, knurl, ribs or hex head are embedded in the sheet so it can't rotate (PEM handbook pp.4, 6)
- **input_output**: not applicable
- **power**: passive (no power needed); a hand arbor press or a powered press is used only to install it
- **removability**: permanent for the fastener: it 'become[s] a permanent part of the panel' (PEM handbook p.4). The screw or nut used with it is removable, so the joint it makes is fully removable.
- **reuse_cycles**: once for the fastener itself; the metal thread it provides can be screwed in and out many times, which is why it is chosen where a component 'must be readily replaced' (PEM handbook p.4)
- **tools_needed**: A drill, punch or laser cutter for the hole, held to the catalogue size (+0.08 mm / -0) and not deburred or chamfered (PEM handbook p.9); a parallel-acting press with a flat punch and a matching anvil: 'any parallel acting press' works (PEM handbook pp.3, 9), e.g. a hobby arbor press (Hobby-Machinist forum). Never a hammer: a blow does not let the metal flow into the undercut (PEM handbook p.9). Wikipedia notes they can also be pulled in by tightening a screw through the hole, and PEM says some 1/4 in / M6 and larger nuts can be drawn in from one side with an impact-torque wrench (Wikipedia 'Swage nut'; PEM handbook p.15). Then a screwdriver or spanner for the mating screw or nut.
- **seal**: none for ordinary through-threaded nuts. Blind (closed-end) types keep dirt out of the threads and stop over-long screws reaching inside (PEM handbook p.7); special 'ingress protection' studs make a watertight seal meeting IPX7 and IPX9K (PEM handbook p.7).
- **load**: medium for thin sheet, with very different strength in different directions. It is strongest when the screw goes in from the side opposite the head, so the load pulls the fastener into the sheet; pushout (the other way) is only about 5-10% of the installation force (PEM handbook pp.5, 9; SendCutSend). Example PEM figures for S-type nuts (-1 shank length): M3 in cold-rolled steel: installation 11.2-15.6 kN, pushout 550 N, torque-out 1.7 N·m; M3 in 5052-H34 aluminium: pushout 400 N, torque-out 1.13 N·m; M5 in steel: pushout 800 N, torque-out 4.5 N·m; M6 in steel: pushout 1,760 N, torque-out 17 N·m (PEM handbook p.5 table). For most good nuts 'the screw will fail before the nut rotates in the material' (PEM handbook p.15). Standoffs are weak against impacts pushing them back into the panel (SendCutSend).
- **adjustable**: no: position is fixed by the hole. Floating nuts allow a little sideways float to line up with a mating hole (PEM handbook p.7).
- **play_and_precision**: No play once installed; the thread sits exactly where the hole was punched, drilled or laser-cut, and standoffs are 'inherently square' to the panel and all the same length (SendCutSend). Flush studs and standoffs may stand up to 0.015 in (0.38 mm) proud depending on material (SendCutSend hardware guidelines). Tight manufacturing tolerances matter: a 0.05 mm variation on a critical dimension 'can make a 20% difference' in performance (PEM handbook p.8).
- **access_needed**: both sides: the press needs a punch on one side and an anvil on the other (PEM handbook pp.4, 13); only some M6 and larger nuts can be drawn in from one side with an impact wrench (PEM handbook p.15). For one-side access use a blind rivet nut instead (PEM handbook p.13).
- **materials**: Fasteners are made of hardened carbon steel, 300- and 400-series or precipitation-hardened (A286) stainless steel, aluminium and phosphor bronze (PEM handbook pp.8, 12). The sheet must be ductile and softer than the fastener, generally by about 20 points on the Rockwell B scale (PEM handbook p.4): e.g. aluminium fasteners only into sheet below HRB 50, unhardened steel below HRB 60, 300-series stainless below HRB 70, hardened steel below HRB 80, hardened stainless up to HRB 88 (PEM handbook p.6). Suits 5052 and 6061 aluminium, cold-rolled mild steel, galvanised steel and (with special fasteners) 304/316 stainless (PEM handbook p.6; SendCutSend installs into 5052, 6061 and 7075 aluminium, mild and G90 steel, 304 and 316 stainless, but not 2024 aluminium). Not for brittle or hard materials, PCBs, plastics or castings: PEM offers broaching and flare-mount fasteners for those (PEM handbook p.13).
- **maker_difficulty**: moderate: the fasteners are cheap and install with a hand arbor press, but the hole must be the exact catalogue size, the sheet thick and soft enough, and both sides reachable (PEM handbook pp.4, 9; Hobby-Machinist forum). The easiest route for a hobbyist is to order laser-cut sheet parts with the hardware already pressed in (SendCutSend adds it for 1-2 days' extra lead time).

### Making it

- **processes**: 
  - sheet metal: the natural home; the fastener goes into punched, drilled or laser-cut holes in aluminium, steel or stainless sheet from about 0.64-1 mm thick (PEM handbook p.15; PEM CL data sheet)
  - laser cut: online sheet-metal services resize the holes and press the hardware in for you (SendCutSend hardware guidelines); note that laser cutting can locally harden a hole in stainless steel (PEM handbook p.9)
  - CNC: drilled or punched holes in machined or sheet parts
  - off-the-shelf part: always bought, never made
- **print_in_place**: no: it is a hardened metal part pressed into ductile sheet metal; it can't be printed and is not designed to be pressed into printed plastic.
- **making_tips_3d_printing**: not applicable: self-clinching needs a ductile metal sheet that cold-flows around the fastener (PEM handbook p.4). For plastics, PCBs and castings PEM itself points to other fasteners (broaching and flare-mount types) (PEM handbook p.13). In 3D prints use a heat-set insert, press-fit or expanding insert, or a captive nut pocket instead (see those entries). If a printed part must attach to sheet metal, put self-clinching studs or nuts in the metal part and screw the print on with washers.
- **off_the_shelf_parts**: Search supplier catalogues for 'self-clinching nut' (types S, SS, CLS, CLSS for steel/aluminium, CLA aluminium, SP for stainless sheet, SMPS/SMPP for thin sheet and close to edges, locking PL/RT/SL types), 'self-clinching stud' (FH flush-head, concealed-head), 'self-clinching standoff' (thru-threaded SO or blind BSO), 'flush nut', 'floating nut', 'self-clinching pin' (PEM CL data sheet; PEM handbook pp.7, 14; letter codes are PEM part names, brand). Also sold as 'press nut', 'press-fit nut', 'press-in standoff' or 'PEM nut' (SendCutSend). Tools: 'arbor press', 'hydraulic insertion press', flat punch and matching anvil for each size (PEM handbook p.9). CAD models are in the SolidWorks Toolbox and the PEM catalogue (SendCutSend).
- **rules_of_thumb**: 
  - Hole size is critical: punch or drill to the catalogue size, +0.08 mm / -0 (+0.003 in), e.g. 4.22 mm for an M3 S/CLS nut and 6.35 mm for an M5 (PEM CL data sheet p.CL-5; PEM handbook p.9). Do not chamfer (max 0.127 mm break) or deburr: that removes the metal needed for the clinch (PEM handbook p.9).
  - Minimum sheet thickness depends on the part and shank length: 'generally .030 in / 0.76 mm or .040 in / 1 mm', some types down to 0.2 mm (PEM handbook pp.3, 15); e.g. 0.8 mm for an M3 S nut with shank code 0 and 0.64 mm for the thin-sheet SMPS nut (PEM CL data sheet pp.CL-5, CL-9). Use the longest shank that suits your sheet (PEM CL data sheet).
  - Edge distance: respect the minimum hole-centre-to-edge distance, e.g. 4.8 mm for M3, 7.1 mm for M5 and 8.6 mm for M6 S nuts (PEM CL data sheet p.CL-5); too close and the edge bulges or blows out. The value applies to one edge only; near two edges the panel distorts unless supported (PEM handbook p.12).
  - Spacing between two fasteners: at least the centre-to-edge distance plus half the diameter of the second hole (PEM handbook p.12). Worked example: a 1/4-20 nut in 0.063 in 5052 aluminium needs 0.340 in to an edge, 0.512 in between centres and 0.425 in to a bend line (SendCutSend).
  - Hardness: the sheet must be about 20 Rockwell B points softer than the fastener; use A286 or 400-series stainless fasteners in stainless sheet, never 300-series into stainless (PEM handbook pp.4, 9, 12).
  - Pushout resistance is only about 5-10% of the installation force, so always screw in from the side opposite the head so the load pulls the fastener into the sheet (PEM handbook pp.5, 9; SendCutSend).
  - Install into the punch side of a punched hole; for sheet 2.29 mm (0.09 in) or thicker this matters because the die side of a punched hole is larger (PEM handbook pp.9-10).
  - Order of work: bend first, then install (or punch the hole after bending); install after plating or anodising, but before paint or powder coat (PEM handbook pp.9-10, 12).
  - Stop squeezing when the head or shoulder sits flat on the sheet and the clinching ring is fully embedded all round; over-squeezing crushes the head, distorts the thread and buckles the sheet (PEM handbook p.9).

### When to use it

- **everyday_examples**: 
  - The threaded posts that hold a circuit board off the inside of a metal electronics enclosure (SendCutSend)
  - Threaded points on electrical sub-panels and bolted-on access panels where you can't reach behind to hold a nut (SendCutSend)
  - The thin sheet-metal chassis of computer, telecom and medical equipment (PEM handbook p.3)
- **when_to_use**: Use a self-clinching fastener when you design a sheet-metal part (bought laser-cut or made at home) that needs strong threads in metal too thin to tap, typically 0.8-3 mm, and you can press it in from both sides before assembly. It is ideal when nobody will be able to reach behind the panel later, when you want no loose nuts, washers or lock washers in the final assembly, and when a component has to be removed and refitted many times (PEM handbook p.4; SendCutSend). Studs make hanging a heavy part easier during assembly, and standoffs give neat, square spacing for circuit boards (SendCutSend). They are an alternative to welded nuts that avoids heat, distortion and damaged coatings, and each one goes in with the same force every time (SendCutSend).
- **when_not_to_use**: Don't use it if you can reach only one side (use a blind rivet nut), in hard or brittle material, PCBs, plastics or castings (use broaching or flare-mount fasteners, or heat-set inserts in prints) (PEM handbook p.13), or in sheet thinner than the fastener's minimum (PEM handbook p.15). If the sheet is thick enough to tap (roughly one bolt diameter in steel or two in aluminium), a tapped hole may be simpler (SendCutSend). If you have no press, a rivet nut and hand setter or an ordinary bolt and nut may be easier (Hobby-Machinist forum). Don't use standoffs where impacts will push them back into the panel; use a stud and nut there (SendCutSend).
- **environment_limits**: Metal throughout, so heat, cold, UV and water are not a problem in normal use ⚑ [uncertain: no temperature limit given for plain nuts; nylon-element locking types are likely more limited]. Choose the fastener material and finish for corrosion: zinc-plated steel, passivated stainless or aluminium (PEM CL data sheet p.CL-9). Don't install steel or stainless fasteners in aluminium before anodising, don't install after painting or powder coating, and beware hard-anodising or nitriding, which harden the panel (PEM handbook pp.9, 12). SendCutSend says its zinc-chromate-treated hardware resists corrosion and lets steel fasteners be used in aluminium parts without galvanic worries, while a machinist on Hobby-Machinist warns that steel against aluminium can build white oxide that seizes the screw ⚑ [uncertain: conflicting, depends on finish and environment]. For vibration, use a locking version (nylon element or modified thread) (PEM handbook p.7; PEM CL data sheet p.CL-6). *(⚑ parts need confirming)*
- **safety_notes**: Installation needs several tonnes of force (e.g. 11-16 kN for an M3 nut in steel, PEM handbook p.5), so keep fingers away from the press punch and anvil ⚑ [uncertain: general press safety advice]. PEM notes the installation 'generates no excess noise or pollution' and needs no special ventilation or safety procedures (PEM handbook p.9). Sheet-metal edges and fresh holes are sharp ⚑ [uncertain: general advice]. *(⚑ parts need confirming)*
- **common_failures**: 1) Falls out or has poor holding power: not enough force, sheet too hard for the fastener, countersunk, deburred or oversized hole, or a hole locally hardened by punching stainless or laser cutting; seat it fully, use the right fastener material and hole size (PEM handbook p.10). 2) Not square: punch and anvil not parallel or panel tilted during pressing (PEM handbook p.10). 3) Loose near a bend: the sheet was bent after installing, or the hole was punched before bending and went oval (PEM handbook p.10). 4) Tight threads and buckled sheet: over-squeezed (PEM handbook p.11). 5) Cracked or tight threads: shank too long for the sheet (PEM handbook p.11). 6) Edge of panel bulges: too close to the edge or over-squeezed (PEM handbook p.11). 7) Head of a flush stud or standoff 'cups': punch too small, soft or not flat (PEM handbook p.11). 8) Pushed out in service: the screw was put in from the head side so the load pushes the fastener out of the sheet (PEM handbook p.9; SendCutSend). 9) Tried with a hammer: the metal doesn't flow and the fastener doesn't lock (PEM handbook p.9).
- **related**: 
  - Blind threaded fixings (rivet nut, well nut): also add a thread to thin sheet, but install from one side with a hand setter; bulge behind the sheet instead of sitting flush
  - Clinching (press joining without rivets): uses the same cold flow of sheet metal, but to join two sheets directly with no fastener
  - Heat-set threaded insert: the equivalent for 3D-printed plastic, melted in with a soldering iron
  - Press-fit and expanding inserts (tap-in insert): knurled inserts pressed into plastic or wood; they grip by friction rather than by metal flowing into an undercut
  - Spring-steel push-on fasteners (push nut, speed nut, U-nut): clip onto sheet metal with no press, but hold far less
  - Captive nut pocket (nut trap): the 3D-printing way to hold a nut captive
  - Ordinary screw joint (bolt and nut): what the self-clinching nut or stud is used to make; a loose nut is simpler if both sides stay reachable

### Pictures, videos and models

- **links**: 
  - [17-SwageNuts.JPG (Douglas W. Jones, Wikimedia Commons, 2014)](https://commons.wikimedia.org/wiki/File:17-SwageNuts.JPG): Photo of two self-clinching (swage) nuts for 8-32 screws; the narrow undercut just above the serrated clinching ring is visible *(licence: CC0)*
  - [The Self Clinching Fastener Handbook (PennEngineering)](https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/self-clinching-fastener-handbook.pdf): Cut-away drawings of a clinched nut, stud and standoff (p.6), the 3-step installation (p.9) and diagrams of edge-distance and spacing problems (p.12) *(licence: link only (manufacturer document))*
  - [How to Properly Install Self-Clinching Fasteners (PennEngineering, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=flqGnjwf7BI): Manufacturer video on installing into the punch side of the panel *(licence: link only (YouTube))*
  - [Basics of How a Clinch Fastener Works (Hess Industries Ltd., YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=JCB8fTl-A7U): Animated demonstration of the sheet metal flowing into the fastener's undercut *(licence: link only (YouTube))*
  - [Proto Tech Tip - Self-Clinching Fasteners (Protocase Inc, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=UfnTRo0zyO0): Sheet-metal enclosure maker's short explainer on self-clinching nuts, studs and standoffs *(licence: link only (YouTube))*
- **make_it_yourself**: 
  - [How to Prep Your File for Hardware Insertion (SendCutSend)](https://sendcutsend.com/guidelines/hardware/): Online laser-cutting service guidelines for ordering sheet-metal parts with PEM nuts, studs and standoffs pressed in; explains hole sizing, edge, bend and spacing limits and load direction, so a hobbyist can try the fasteners without owning a press *(licence: not applicable (commercial service page))*
  - [PEM nuts, or something like that for sheet metal (The Hobby-Machinist forum, 2022)](https://www.hobby-machinist.com/threads/pem-nuts-or-something-like-that-for-sheet-metal.102334/): A hobbyist planning to set a self-clinching nut in a 1.2 mm aluminium project box with an arbor press, with replies comparing rivet nuts and hank bushes *(licence: link only (forum post))*
- **diagram_idea**: A three-step cross-section: (1) the nut's shank sitting in a plain round hole in a thin sheet on a flat anvil, (2) a flat punch squeezing it down so the serrated ring pushes the sheet metal into the groove (arrows showing the metal flowing), (3) the finished nut flush on one side with a screw coming in from the other side and an arrow showing the load pulling the nut into the sheet.
- **sources**: 
  - https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/self-clinching-fastener-handbook.pdf
  - https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/cldata.pdf
  - https://www.pemnet.com/products/engineering-guides/self-clinching-fastener-installation-dos-and-donts/
  - https://en.wikipedia.org/wiki/Swage_nut
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://sendcutsend.com/blog/pem-hardware-inserts-in-sheet-metal/
  - https://sendcutsend.com/blog/hardware-insertion-best-practices/
  - https://sendcutsend.com/guidelines/hardware/
  - https://www.hobby-machinist.com/threads/pem-nuts-or-something-like-that-for-sheet-metal.102334/
  - https://commons.wikimedia.org/wiki/File:17-SwageNuts.JPG
  - https://www.youtube.com/watch?v=flqGnjwf7BI
  - https://www.youtube.com/watch?v=JCB8fTl-A7U
  - https://www.youtube.com/watch?v=UfnTRo0zyO0

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: sheet metal
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes

## 271 Butt and lap wood joints (screwed, pocket-hole, half-lap)

*interlocking joints & joinery.* Simple wood joints where parts meet end to face or overlap, held by screws, glue or angled pocket screws; the joinery baseline

*Also covers:* Also covers toe-nailing and clinched nails.

### What it is

- **plain_name**: Two pieces of wood simply pushed together, end against face or edge (butted), or laid over each other with half the thickness cut from each (lapped), and held with screws, nails, glue, or screws driven at an angle from a hidden pocket
- **term**: Butt joint and lap joint (including the screwed butt joint, the pocket-hole joint and the half-lap joint)
- **aliases**: 
  - butt joint; T-butt, end-to-end butt, edge-to-edge butt and mitre butt (Wikipedia 'Butt joint')
  - rubbed joint or glue joint (an edge-to-edge butt joint that is only glued, used to widen boards; DT Online 'Butt Joint', 'Widening Joint')
  - nailed butt joint; skew-nailing or 'dovetailed' nails (nails driven at opposing angles; Wikipedia 'Butt joint'; DT Online)
  - screwed butt joint; counterbored and plugged screw joint (Wikipedia 'Butt joint')
  - slot-screwed joint (DT Online 'Widening Joint')
  - Confirmat screw joint (a thick-shanked cabinet screw for particleboard butt joints; Wikipedia 'Butt joint')
  - pocket-hole joinery, pocket-screw joinery, pocket screw, screw pocket (Wikipedia 'Pocket-hole joinery'; DT Online)
  - Kreg joint, Kreg jig (brand; Kreg Tool Company makes the best-known pocket-hole jigs and screws)
  - lap joint, overlap joint, full lap, half lap, halving joint (Wikipedia 'Lap joint'; DT Online 'Halving Joint')
  - end lap, corner lap, pull lap, half-lap splice, cross lap, tee lap, middle lap, dovetail lap, mitred half lap (Wikipedia 'Lap joint')
  - T-lap, scarf lap (Family Handyman 'Half Lap Joints')
  - toe-nailing, toenailing or slant nailing: nails driven at a slant through the end or edge of one piece into the other (USDA Wood Handbook ch. 8)
- **family**: interlocking joints & joinery
- **other_families**: adhesives & bonding
- **one_liner**: The simplest wood joints: one piece meets another end-on (butt joint) or overlaps it (lap joint), and screws, nails, angled pocket screws or glue hold them together; the baseline every other wood joint is compared with.
- **complexity**: A few parts: two pieces of wood, plus the fasteners: glue; nails; wood screws (often counterbored and plugged, or with a washer); or pocket screws (self-tapping screws with a flat washer head) driven through an angled pocket drilled with a jig and a stepped drill bit (Wikipedia 'Butt joint', 'Pocket-hole joinery'; Kreg 'How pocket holes work'). A half lap needs no extra parts beyond glue, but is often also screwed or dowelled (Wikipedia 'Lap joint').
- **how_it_works**: In a butt joint the parts only touch, so nothing about their shape stops them pulling apart or folding over; glue alone holds poorly because an end-grain face soaks up glue and bonds weakly (USDA Wood Handbook ch. 10), so screws, nails or pocket screws clamp the parts together and carry the load (Wikipedia 'Butt joint'). A pocket-hole joint drills a hole at about 15 degrees into the back of one part; the self-tapping screw runs out through its edge into the face or edge of the other part and its flat head pulls the joint tight like a built-in clamp (Kreg; Wikipedia 'Pocket-hole joinery'). In a half lap, half the thickness is cut away from each part so they overlap flush; the two wide cheeks give a large long-grain-to-long-grain glue area and the shoulders resist racking (diagonal distortion) (Wikipedia 'Lap joint').

### Finder attributes

- **job**: 
  - join and hold: joins frames, boxes, carcases (cabinet boxes), shelves and building frames (Wikipedia 'Butt joint', 'Lap joint')
  - glue or bond: half laps and edge-to-edge butt joints rely mainly on glue on long-grain faces (Wikipedia 'Lap joint'; DT Online 'Widening Joint')
- **motion**: none: a rigid joint once screwed, nailed or glued
- **degrees_of_freedom**: 0 once fastened or glued. Before fastening, a plain butt joint has nothing holding it in place at all; a half lap's shoulders stop sliding in one direction and the overlap stops it folding, but it can still lift straight off.
- **special_behaviour**: 
  - none: it has no clever behaviour. Its main quirk is that screwed and pocket-screw joints bend and open up gradually before they break, instead of snapping like glued joints, which makes them tough but not stiff (Matthias Wandel, woodgears.ca 'Wood joint strength testing')
- **holding_principle**: 
  - friction or clamping (force-fit): screws, nails and pocket screws clamp the parts together; screw heads pulling into the wood are usually what gives way (woodgears.ca)
  - material bond (glue, solvent or melting): glue on the long-grain cheeks of a half lap or on edge-to-edge butt joints (Wikipedia 'Lap joint'; USDA Wood Handbook ch. 10)
  - shape (the parts interlock; form-fit): only partly, in the half lap, where the shoulders resist racking; a dovetail lap also resists pulling out (Wikipedia 'Lap joint')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable for screwed and unglued pocket-hole joints (unscrew them); permanent once glued. Wikipedia notes that a broken pocket-hole joint 'likely can't be repaired' (Wikipedia 'Pocket-hole joinery', citing Popular Woodworking).
- **reuse_cycles**: a few times for screws in solid wood: re-driving a screw into the same hole loses some grip, and a stripped end-grain hole can be repaired by filling it with glue before re-inserting the screw, which then still unscrews (woodgears.ca); the number of cycles is ⚑ [uncertain]; self-tapping screws in 3D prints are a 'one-off method' not suited to repeated disassembly (Hubs); once for glued butt and lap joints *(⚑ parts need confirming)*
- **tools_needed**: Saw to cut ends square (crosscut saw, circular saw with a straightedge, table saw, mitre saw or backsaw; Wikipedia 'Butt joint'); drill/driver, pilot drill, countersink or counterbore and plug cutter for screwed joints (Wikipedia); pocket-hole jig, stepped pocket-hole drill bit and a long square-drive bit for pocket screws (Kreg; Wikipedia 'Pocket-hole joinery'); marking gauge, marking knife, tenon saw and chisel, or a table saw with a dado stack or a router, for half laps (DT Online 'Halving Joint'; Family Handyman); wood glue and clamps for glued joints (pocket screws act as their own clamps; Wikipedia).
- **seal**: none: not designed to seal
- **load**: Light to medium. Glued end-grain butt joints are the weakest: 'practically impossible' to make strong enough for ordinary service, reaching only about 25% of the wood's tensile strength even with special techniques (USDA Wood Handbook ch. 10); unglued rail-to-post butt joints broke at 35-50 lb with the load 15 cm out (woodgears.ca pocket-hole retest). Pocket-hole rail-to-post joints averaged 99 lb (unglued) and 111 lb (glued) versus 153 lb for two dowels and 202-236 lb for mortise and tenons, and began to open a visible gap at about 50 lb (woodgears.ca 'Testing pocket holes'). Screws into end grain with washers under the heads reached 210 lb (spruce) and 300 lb (maple) at 20 cm, but bent open long before (woodgears.ca). A glued half lap, with its long-grain cheeks, is among the strongest joints in shear, beating even the mortise and tenon in WOOD Magazine's 'Wood Joint Torture Test' (Wikipedia 'Lap joint'). Weak directions: butt joints in bending and pull-apart; half laps in twisting unless reinforced with dowels or fasteners (Wikipedia 'Lap joint').
- **adjustable**: no, but exposed screws can be re-tightened if the joint opens; Wandel advises not covering pocket holes or screw heads for this reason (woodgears.ca)
- **play_and_precision**: small play once tight. Accuracy depends on cutting the ends square: 'it is important that the cuts are precise and square to prevent gaps' (Wikipedia 'Pocket-hole joinery'). Screwed and pocket-screw joints flex several degrees under heavy load before failing (woodgears.ca). A half lap locates the parts flush and square by its shoulders (Wikipedia 'Lap joint'). A pocket-hole joint needs only one hole drilled, so there is no need to line up holes in two parts as with dowels (Wikipedia 'Pocket-hole joinery').
- **access_needed**: one side only (blind) for pocket-hole joints, drilled and driven from the hidden back face of one part (Wikipedia 'Butt joint'); one side only for screwed or nailed butt joints, driven through the outer face of one part into the other (Wikipedia); both sides for glued half laps and edge joints, which need clamping across the joint
- **materials**: Solid softwood and hardwood, plywood, MDF, particleboard and melamine board. Kreg recommends coarse-thread pocket screws for softwoods and sheet goods (pine, cedar, fir, spruce, poplar, plywood, particleboard, MDF, melamine) and fine-thread screws for hardwoods (oak, maple, cherry, birch, ash, walnut), because coarse threads can split dense wood (Kreg Screw Guide). Pocket holes need boards at least about 10-15 mm thick (Wikipedia 'Pocket-hole joinery'); Kreg's chart starts at 1/2 in. Particleboard edges hold ordinary screws poorly, so Confirmat screws are used (Wikipedia 'Butt joint'). Lap joints also join plastic and metal (Wikipedia 'Lap joint'), and printed plastic parts can be butted or lapped and screwed or glued (Prusa knowledge base; Hubs).
- **maker_difficulty**: easy: the simplest joints to make with basic tools; a pocket-hole jig makes the angled holes almost foolproof (Kreg; Wikipedia), and a half lap is 'a terrific skill for beginning woodworkers to master' (Family Handyman)

### Making it

- **processes**: 
  - woodwork: the main method, by hand or with a mitre saw, table saw, router and pocket-hole jig (Wikipedia 'Butt joint', 'Lap joint', 'Pocket-hole joinery')
  - CNC: routers can cut square-ended parts and half-lap pockets; inside corners of pockets are rounded by the cutter, so square them with a chisel or add relief cuts ⚑ [uncertain]
  - laser cut: butt joints glued along the edge in acrylic or thin plywood; the laser-cut version of a cross lap is the cross-halving slot joint (see related)
  - 3D print (FDM): printed parts are often butted and screwed or glued; split large prints are glued with pegs for alignment (Prusa knowledge base 'Modeling with 3D printing in mind')
  - off-the-shelf part: wood screws, pocket screws (zinc, Blue-Kote (brand) or stainless for outdoors), pocket-hole plugs, corrugated fasteners, Confirmat screws (Kreg; DT Online; Wikipedia) *(⚑ parts need confirming)*
- **print_in_place**: no: the two parts are printed separately and then screwed or glued together
- **making_tips_3d_printing**: 1) Butt joints between printed parts: a plain glued butt joint only bonds the small contact face, so enlarge the contact area or use a lap. Prusa advises smooth, grease-free, lightly sanded faces and says a good glue seam can be 'stronger than the rest of the material', but suggests modelling in pegs 'for alignment and strength' (Prusa knowledge base). 2) Screwing printed parts together: the wall around a screw hole should be at least as thick as the screw diameter (e.g. 5 mm around an M5), or the part can bulge, delaminate or crack; self-tapping screws straight into plastic are a one-off fixing, so use heat-set inserts or captive nuts for parts you will take apart (Hubs 'How to assemble 3D printed parts with threaded fasteners'). Drilling the pilot hole to size after printing gives a more accurate hole than a printed one (Hubs). 3) Half laps in prints: print each half lying flat so the glue cheek is a flat top or bottom surface and the layers run along the part; layer bonds are the weak direction (PLA layer adhesion was about 55% of flat strength and PETG about 46% in CNC Kitchen's test; Prusa: 'Like wood, FFF prints are stronger in one direction than another'). 4) Fit: leave about 0.5 mm clearance in an FDM lap or slot that must slide together (Hubs), or at least 0.3 mm for moving fits and about 0.2 mm printer accuracy (Prusa); glued laps can be closer. 5) Printed jigs: a printed pocket-hole jig works with the standard pocket-hole bit and screws; print the face you drill through on the bed, add extra perimeters, and consider a metal sleeve (copper tube) in the guide hole for durability (Printables 'Pocket hole jig' by Henry; 'FDM-Optimized Pocket Hole Jig'). 6) Heat: PLA gives at about 60 °C and PETG at about 80 °C, so screwed PLA parts can creep loose in a hot car (CNC Kitchen).
- **off_the_shelf_parts**: Pocket-hole screws (square-drive, washer or pan head, self-tapping point, unthreaded upper shank; coarse or fine thread; zinc for indoors, Blue-Kote (brand) coating for damp areas, stainless for wet outdoor use) and pocket-hole jigs and stepped drill bits (Kreg Screw Guide; Kreg 'How pocket holes work'); wood screws, counterbore bits and plug cutters (Wikipedia 'Butt joint'); screw cover caps for manufactured board (Wikipedia); Confirmat screws for particleboard (Wikipedia); corrugated fasteners (DT Online); flat washers under screw heads (woodgears.ca); nail plates and ties for reinforcing butt joints in construction (Wikipedia 'Butt joint': 'ties and plates'); dado blade sets for cutting half laps (Family Handyman).
- **rules_of_thumb**: 
  - Cutting a butt-jointed box to size: one member is shorter than the finished size by the thickness of the adjacent member; e.g. a 600 x 600 mm box in 19 mm board has two sides at 600 mm and two at 600 - 19 - 19 = 562 mm (Wikipedia 'Butt joint').
  - Screws into end grain: use long screws, 'usually 3 times the thickness of the member' (Wikipedia 'Butt joint', unreferenced section); DT Online suggests screws twice the usual length and a thinner gauge for end grain, and angled ('dovetailed') nails for extra grip (DT Online 'Butt Joint').
  - End-grain holding: screws in end grain hold erratically but, if splitting is avoided, average about 75% of their side-grain withdrawal load; lead (pilot) holes of about 70% of the thread root diameter suit softwoods and about 90% hardwoods (USDA Wood Handbook 2021, ch. 8 'Fastenings').
  - Glue alone on end grain: end-grain butt joints reach only about 25% of the wood's tensile strength; end-to-edge (T) joints need interlocking shapes such as dowels, tenons or rabbets to carry appreciable load (USDA Wood Handbook ch. 10).
  - Pocket holes: drilled at 'usually 15 degrees' (Wikipedia) and stopped about 1/4 in. from the edge (Wikipedia 'Butt joint'); screw into the face or edge of the mating board rather than its end grain (Wikipedia 'Pocket-hole joinery').
  - Pocket-screw length by actual board thickness (Kreg chart): 1/2 in. -> 1 in. (3/4 in. with the Micro-Pocket guide); 5/8 in. -> 1 in.; 3/4 in. -> 1-1/4 in.; 7/8-1-1/8 in. -> 1-1/2 in.; 1-1/4-1-3/8 in. -> 2 in.; 1-1/2 in. -> 2-1/2 in. Measure the actual thickness, not the nominal lumber size (Kreg Screw Guide).
  - Pocket-screw thread: coarse for softwoods, plywood, MDF and particleboard; fine for hardwoods, because coarse threads tear dense wood and split it (Kreg Screw Guide).
  - Pocket-hole strength: about half a mortise and tenon and two-thirds of a two-dowel joint; joints start to open at about half their breaking load, and glue made no difference to the ultimate strength because the glue cracks before the screws reach full load; how deep the screws go into the second piece matters most (Matthias Wandel, woodgears.ca 'Testing pocket holes').
  - Screwed joints: screw heads pulling into the wood, not the threads stripping, usually limit strength; flat-headed screws or washers help, and countersunk heads are worst. Avoid screw joints where furniture strength is critical, but they suit sawhorses, crates and scaffolding (woodgears.ca 'Wood joint strength testing').
  - Half lap: remove half the thickness from each member (mark with a marking gauge) so the faces finish flush (Wikipedia 'Lap joint'; DT Online 'Halving Joint'); set the dado or blade height to exactly half the stock thickness using a test piece (Family Handyman).
  - Half-lap variants: the mitred half lap is the weakest because of its reduced glue area; a dovetail lap resists withdrawal where tension could pull the joint apart (Wikipedia 'Lap joint'). A well-made lap, scarf or finger joint in end grain can reach up to 90% of the tensile strength of clear wood (USDA Wood Handbook ch. 10).
  - Toe-nailing (slant nailing): toe-nailed joints are strongest when you use the largest nail that won't split the wood badly, start it about one-third of the nail's length from the end of the attached piece, drive it at about 30° to that piece, and bury the full shank without bruising the wood with hammer blows; lead holes of about 90% of the nail's shank diameter add a little holding power and reduce splitting (USDA FPL Wood Handbook, FPL-GTR-282, ch. 8, p. 8-5).
  - Clinching (bending the point of a nail over where it comes through): in dry or green wood a clinched smooth-shank nail resists pulling out 45% to 170% better than an unclinched one when pulled soon after driving, and nails clinched across the grain hold about 20% more than ones clinched along it; clinching is mostly used for boxes and crates (USDA FPL Wood Handbook, FPL-GTR-282, ch. 8, pp. 8-5 to 8-6).

### When to use it

- **everyday_examples**: 
  - Nailed butt joints in house wall framing and basic crates (Wikipedia 'Butt joint': platform framing)
  - Kitchen cabinets and flat-pack carcases held with screws into the board edges (Wikipedia 'Butt joint': 'Modular kitchens make regular use of this fixing method')
  - Picture frames with mitred half-lap corners, and Lincoln Logs-style log cabins with lap joints (Family Handyman)
  - Workshop shelves, benches and pallet-wood projects built with pocket screws (woodgears.ca; Kreg)
- **when_to_use**: Use a screwed or nailed butt joint for quick, cheap, rough or temporary work: building framing, workshop fixtures, crates, sawhorses and simple boxes (Wikipedia 'Butt joint'; woodgears.ca). Use pocket screws for face frames, cabinet carcases, table aprons and anything where you want fast assembly with no clamps and hidden screws, and where only one side can be reached (Wikipedia 'Pocket-hole joinery'). Use a glued half lap for strong, flat frames and grids (cabinet frames, door frames, stretchers), where its large long-grain glue area gives excellent shear strength (Wikipedia 'Lap joint'; Sawmill Creek summary of WOOD Magazine's torture test). Butt and lap joints are also the natural way to fasten 3D-printed or laser-cut parts together with screws or glue. Toe-nailing (slant nailing through the end or edge of one piece into the other) is a common way of joining wood framing; it 'requires greater skill in assembly than does ordinary end nailing but provides joints of greater strength and stability' (USDA Wood Handbook ch. 8).
- **when_not_to_use**: Don't rely on screwed or pocket-screw butt joints for chairs or other furniture whose joints take repeated bending: they open up before they break (woodgears.ca); use mortise and tenon or dowel joints instead. Don't use a glued-only end-grain butt joint for anything load-bearing (USDA Wood Handbook ch. 10); reinforce it with dowels, biscuits, a spline or screws, or switch to a lap, finger or scarf joint. Avoid pocket holes in stock thinner than about 1/2 in. (Wikipedia; Kreg) and where both faces are visible (Wikipedia). For boxes and drawers seen from outside, finger or dovetail joints look better and hold better. For flat-pack furniture that must come apart often, use knock-down cam-lock or cross-dowel fittings rather than screws into particleboard edges.
- **environment_limits**: Wood swells and shrinks with humidity, mostly across the grain (about twice as much tangentially as radially) and only 0.1-0.2% along it (USDA Wood Handbook ch. 4), so an end-to-edge (T) joint builds up large internal stresses as moisture changes and should be protected from changes in moisture content (USDA Wood Handbook ch. 10). Glue plus pocket screws helps stop gaps opening as the wood moves (Wikipedia 'Pocket-hole joinery'). Outdoors, use coated (Blue-Kote (brand)) or stainless pocket screws; zinc screws are for indoor use (Kreg Screw Guide), and a waterproof glue ⚑ [uncertain]. Screwed PLA prints soften at about 60 °C and PETG at about 80 °C (CNC Kitchen). *(⚑ parts need confirming)*
- **safety_notes**: Table saws (used for cutting ends square and for dado-cut half laps) can kick work back and cause amputations: use the guard, a push stick for small pieces, and keep hands out of the line of cut (OSHA table saw eTool). A pocket-hole bit or screw can split thin or hard stock suddenly; clamp the jig and work firmly ⚑ [uncertain]. Screw points left poking through the far face are a scratch hazard; Wandel's deeper-drilled pocket screws came out the other side (woodgears.ca). Otherwise none known. *(⚑ parts need confirming)*
- **common_failures**: Glue-only end-grain butt joints letting go (USDA Wood Handbook ch. 10); add fasteners or change the joint. Screw heads pulling into the wood so the joint slowly opens (woodgears.ca); use flat-headed screws or washers, leave heads uncovered so they can be re-tightened. Pocket screws pulling out of the second piece when they are too short or the jig is set too shallow (woodgears.ca); follow the thickness chart (Kreg). Hardwood splitting around pocket holes or from coarse-thread screws (woodgears.ca maple test; Kreg); use fine-thread screws and pilot holes. Wood splitting near the ends when nailing or screwing without lead holes (USDA Wood Handbook ch. 8). Screws stripping in particleboard when over-tightened (USDA Wood Handbook ch. 8); use Confirmat screws or inserts. Gaps from ends cut out of square (Wikipedia 'Pocket-hole joinery'). Half laps twisting apart when not glued or pinned; reinforce with dowels or fasteners (Wikipedia 'Lap joint'). In 3D prints, thin walls around screws bulging or cracking (Hubs), and laps printed standing up splitting along layer lines (Prusa; CNC Kitchen).
- **related**: 
  - Dowel and biscuit joints: wooden pins or wafers added to a butt joint to align it and add glue area; dowel joints tested about 1.5 times as strong as pocket holes (woodgears.ca)
  - Mortise and tenon: turns an end-grain butt joint into a long-grain glue joint; about twice as strong as pocket holes in Wandel's tests
  - Cross-halving slot joint (egg-crate joint): the laser-cut and sheet-material version of the cross lap
  - Finger joint (box joint) and dovetail joint: interlocking corner joints with much more glue area than a butt joint
  - Tongue-and-groove joint: an edge-to-edge butt joint with a ridge and groove added for alignment
  - Knock-down cam-lock and cross-dowel connectors: hardware for butt joints in flat-pack furniture that can be taken apart
  - Glued joint design (butt, lap and scarf joints; peel vs shear): why lap and scarf joints glue far better than butt joints
  - Heat-set threaded insert and captive nut pocket: better ways to screw 3D-printed parts together than self-tapping screws
  - Wood screw: the usual fastener for screwed butt and lap joints, with advice on pilot and clearance holes
  - Nails, brads and tacks: the quick fastener for nailed butt joints, including toe-nailing and clinching
  - Metal brackets and plates: angle brackets, mending plates and joist hangers that reinforce a butt joint or carry its load

### Pictures, videos and models

- **links**: 
  - [Woodworking lap joints.svg (Wikimedia Commons, by Fred the Oyster)](https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg): Drawing of four lap joints, left to right: half lap, mitred half lap, cross lap and dovetail lap (used on Wikipedia 'Lap joint') *(licence: CC BY-SA 4.0)*
  - [Woodworking-joint-butt-pockethole.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-pockethole.gif): Drawing of a butt joint held by pocket-hole screws driven at an angle from the back face *(licence: CC BY-SA 3.0)*
  - [Pocket-hole joint being assembled.gif (Wikimedia Commons, uploaded by Derekbalsley)](https://commons.wikimedia.org/wiki/File:Pocket-hole_joint_being_assembled.gif): Animation of a pocket screw being driven through the angled pocket to pull two boards together (used on Wikipedia 'Pocket-hole joinery') *(licence: Marked public domain on Commons, but the file page says Kreg Tool Company is the author of the original image, so the licence claim is ⚑ [uncertain])*
  - [Butt joint.png (Wikimedia Commons, by Jim Thomas / Jomegat)](https://commons.wikimedia.org/wiki/File:Butt_joint.png): Simple drawing of a plain butt joint (used on Wikipedia 'Butt joint') *(licence: CC BY-SA 3.0)*
  - [Pocket holes vs. mortise and tenon joints (YouTube, MatthiasWandel)](https://www.youtube.com/watch?v=apsH8eBfjVA): Video of pocket-hole, dowel and mortise-and-tenon joints being broken on a home-made test rig with a bathroom scale (title checked via YouTube oEmbed; embedded on woodgears.ca) *(licence: link only (standard YouTube licence))* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Pocket hole jig by Henry (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/96193-pocket-hole-jig): A printable pocket-hole jig that uses the standard Kreg (brand) stepped bit and screws; print in PC, PETG or PLA with extra perimeters. Read through the Printables public API. *(licence: CC Public Domain)*
  - [FDM-Optimized Pocket Hole Jig by CATIAV5FTW (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/645779-fdm-optimized-pocket-hole-jig): A pocket-hole jig designed to print without supports, with the drilling face on the bed; copper tube can be added in the angled holes for durability. Read through the Printables public API. *(licence: CC BY)*
  - [rohové přeplátování na kolmo - výuková pomůcka (corner half-lap teaching model) by STSUL.CZ (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/155831-rohove-preplatovani-na-kolmo-vyukova-pomucka): A printable corner half-lap joint made by a carpentry student at a Czech vocational school, for teaching technical drawing; print the two halves in different colours. Read through the Printables public API. *(licence: CC BY)*
- **diagram_idea**: Three side-by-side cut-away views of the same rail meeting a post: (1) a plain butt joint with a long screw into the end grain and its head pulling into the wood, (2) a pocket-hole joint with the angled pocket, flat screw head on the ledge and the screw running into the post's face grain, (3) a half lap with the two long-grain cheeks shaded as glue area and arrows showing the shoulders resisting racking.
- **sources**: 
  - https://en.wikipedia.org/wiki/Butt_joint
  - https://en.wikipedia.org/wiki/Lap_joint
  - https://en.wikipedia.org/wiki/Pocket-hole_joinery
  - https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-pockethole.gif
  - https://commons.wikimedia.org/wiki/File:Pocket-hole_joint_being_assembled.gif
  - https://commons.wikimedia.org/wiki/File:Butt_joint.png
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-lap.svg
  - https://woodgears.ca/joint_strength/
  - https://woodgears.ca/joint_strength/pockethole.html
  - https://woodgears.ca/joint_strength/shelf_brackets.html
  - https://www.youtube.com/watch?v=apsH8eBfjVA
  - https://learn.kregtool.com/learn/how-to-select-right-pocket-hole-screw/
  - https://learn.kregtool.com/wp-content/uploads/2020/07/Kreg-Screw-Chart-SSC-2021-Correct-Screw-Copy.jpg
  - https://learn.kregtool.com/learn/how-pocket-hole-joints-work/
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_10.pdf
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_04.pdf
  - https://research.fs.usda.gov/treesearch/62253
  - https://research.fs.usda.gov/download/treesearch/62253.pdf
  - https://wiki.dtonline.org/index.php/Butt_Joint
  - https://wiki.dtonline.org/index.php/Halving_Joint
  - https://wiki.dtonline.org/index.php/Widening_Joint
  - https://www.familyhandyman.com/article/half-lap-joint/
  - https://sawmillcreek.org/threads/wood-mag-joint-torture-test.69259/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.osha.gov/etools/machine-guarding/saws/table
  - https://api.printables.com/graphql/
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_08_fpl_gtr282.pdf

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, links, processes, reuse_cycles, safety_notes

## 272 Dowel and biscuit joints

*interlocking joints & joinery.* Round wooden pins or flat oval wafers glued into matching holes or slots in both parts to align and strengthen a joint

### What it is

- **plain_name**: Short round wooden pegs, or flat oval wooden wafers, glued half into one part and half into the other so the two parts line up and hold together
- **term**: Dowel joint and biscuit joint (dowel-reinforced and biscuit-reinforced butt joints)
- **aliases**: 
  - dowel joint, dowelled (doweled) joint, dowel-reinforced butt joint (Wikipedia 'Butt joint')
  - dowel pin, dowel rod, fluted dowel, grooved dowel, pre-compressed dowel (Wikipedia 'Dowel'; Bailey Line Road; woodgears.ca)
  - Miller dowel (brand; a stepped dowel driven in from the outside face; Wikipedia 'Butt joint')
  - Dowelmax (brand; a dowelling jig; Bailey Line Road)
  - biscuit joint, biscuit-reinforced butt joint (Wikipedia 'Butt joint'; DT Online 'Biscuit Joint')
  - plate joint, plate joinery; biscuit joiner, biscuit jointer, plate joiner (Wikipedia 'Biscuit joiner')
  - Lamello (brand; the original biscuit system, invented by Hermann Steiner in 1956; often used as a generic name in Europe) (Wikipedia 'Biscuit joiner')
  - jointing biscuit, wood biscuit, wafer; Flachdübel, Lamellendübel (German names listed on the Printables model 'Flachdübel / biscuit joints')
  - biscuit sizes No. 0, No. 10, No. 20, FF (face frame), H9, and detail biscuits R1-R3 (Wikipedia 'Biscuit joiner')
  - dowel centres (dowel centers), dowelling jig (doweling jig) (Wikipedia 'Butt joint'; DT Online 'Dowel Joint')
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment
- **one_liner**: Matching holes or slots are cut in both parts, and a glued wooden pin (dowel) or a flat oval wafer (biscuit) bridges the joint, lining the parts up and adding glue area to what would otherwise be a weak butt joint.
- **complexity**: A few parts: the two pieces of wood; one or more dowels (short round pins, usually fluted hardwood) in matching drilled holes, or one or more biscuits (thin oval wafers of compressed beech) in matching crescent-shaped slots; and glue (Wikipedia 'Butt joint', 'Biscuit joiner'; Lamello).
- **how_it_works**: Each dowel or biscuit sits half in one part and half in the other, so the parts can't slide sideways across the joint and their faces are held flush (Wikipedia 'Butt joint'). Glue on the pin or wafer bonds its long grain to the walls of the holes, turning a weak end-grain butt joint into one with interlocking long-grain glue surfaces (USDA Wood Handbook ch. 10 lists dowels among the 'strong connections' for end-to-edge joints). Fluted dowels and biscuits are made slightly compressed, so the water in the glue swells them tight in their holes (Wikipedia 'Biscuit joiner'; Bailey Line Road). Biscuit slots are cut a little longer than the biscuit, so the parts can still slide along the joint to line up before the glue sets, while dowel holes must be drilled accurately in both parts (Wikipedia 'Biscuit joiner', 'Butt joint').

### Finder attributes

- **job**: 
  - join and hold: reinforces butt joints in frames (face frames, door frames, table legs to aprons, chair legs), cabinet carcases and panels (Wikipedia 'Butt joint')
  - line parts up exactly: keeps faces flush during panel and carcase glue-ups; biscuits are mainly used for this (Wikipedia 'Biscuit joiner'; Rockler 'Doweling vs. Biscuit Joints'; The Wood Whisperer)
  - glue or bond: the pins and wafers work only when glued, and add long-grain glue area to the joint (Wikipedia; USDA Wood Handbook ch. 10)
- **motion**: none: a rigid joint once glued
- **degrees_of_freedom**: 0 once glued. Before the glue sets, a dowelled joint can only be pushed together or pulled apart along the dowels (1 degree of freedom); a biscuit joint can also slide a little along the slot, because the slot is longer than the biscuit (Wikipedia 'Biscuit joiner').
- **special_behaviour**: 
  - self-aligning or self-centring: the pins or wafers line the faces up flush as the joint is clamped, 'a quick means of getting a perfectly flush joint' (Wikipedia 'Biscuit joiner'); dowels are also used 'to assist with alignment during glue up' (Wikipedia 'Butt joint')
- **holding_principle**: 
  - material bond (glue, solvent or melting): the glue on the dowel or biscuit does most of the holding (The Wood Whisperer; Wikipedia)
  - shape (the parts interlock; form-fit): the pins bridge the joint and resist shear (sliding) even if the glue deteriorates: 'The dowels offer some holding strength even after the glue has deteriorated' (Wikipedia 'Butt joint')
  - friction or clamping (force-fit): compressed dowels and biscuits swell with the glue's moisture into a tight fit (Wikipedia 'Biscuit joiner'; Bailey Line Road)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: glued dowels and biscuits can't be taken apart without breaking or cutting the joint; unglued dowels used as locating pins in flat-pack furniture can be pulled out (semi-permanent) ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: once for glued joints; a few times for unglued locating dowels in flat-pack furniture ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: Dowels: drill with brad-point or twist bits and a depth stop, plus a dowelling jig or a drill press; dowel centres (or small nails with the heads snipped off) to transfer hole positions; marking gauge and try square; glue and clamps (sash cramps) (Wikipedia 'Butt joint'; DT Online 'Dowel Joint', 'Widening Joint'; Bailey Line Road). Biscuits: a biscuit (plate) joiner with a 100 mm (4 in.) blade cutting a 4 mm slot, or a router with a slot-cutter bit; biscuits; glue and clamps (Wikipedia 'Biscuit joiner'; DT Online 'Biscuit Joint').
- **seal**: none: not designed to seal
- **load**: Medium for dowels, light to medium for biscuits. In Matthias Wandel's rail-to-post tests (load 20 cm from the joint), three 3/8 in. dowels broke at 120-145 lb in spruce (average 135 lb, about 80% of a mortise and tenon) and 230-245 lb in maple; failures were the dowels pulling out of the cross-grain post (woodgears.ca 'Wood joint strength testing'). In a later test, two dowels averaged 153 lb against 99 lb for pocket holes (1.5 times as strong) and 202-236 lb for mortise and tenons (woodgears.ca 'Testing pocket holes'); a four-dowel joint and a 1/4 in. mortise and tenon in 3/4 in. red oak came out statistically level (woodgears.ca 'Dowel vs. mortise and tenon revisited'). Biscuits add pull-apart strength to butt and mitre joints but dowels are stronger, especially in shear, which WOOD Magazine's 2006 'Wood Joint Torture Test' also found (Rockler). A No. 20 biscuit reaches less than 1/2 in. into each part, so biscuits add little strength to end-grain joints (The Wood Whisperer). Strong in shear across the joint; weakest in pull-out and bending, where short or few pins can pull out of cross grain.
- **adjustable**: no once glued; biscuit joints can be slid sideways a little to line up before the glue sets (Wikipedia 'Biscuit joiner')
- **play_and_precision**: Dowels: no play when drilled well, but 'accuracy is paramount' because both holes must line up (Wikipedia 'Butt joint'); holes that are not parallel split the wood under clamping, and oversized holes give a weak joint with poor alignment (Bailey Line Road). Biscuits: forgiving along the slot, which is longer than the biscuit, and the slot width is not critical, but the slot must be the same distance from the reference face in both parts (Wikipedia 'Butt joint', 'Biscuit joiner'). Some woodworkers find the slot clearance means biscuit alignment 'is not guaranteed' (forum opinion quoted by Rockler).
- **access_needed**: one side only (blind): the holes or slots are cut into the mating faces before assembly and are hidden inside the finished joint, so nothing is reached from the far side (Wikipedia 'Biscuit joiner'); a Miller dowel (brand) is the exception, drilled and driven from the outside face after gluing (Wikipedia 'Butt joint')
- **materials**: Dowels: usually hardwood dowel pins (ready-made fluted pins are 'precisely sized, truly round and made of strong wood'; cheap dowel rod is often undersized and out of round) (Bailey Line Road); also plastic and metal dowels (Wikipedia 'Dowel'). Biscuits: compressed beech (Lamello; Wikipedia) or particle board; plastic and metal specialty biscuits exist (Wikipedia 'Biscuit joiner'). Joins solid wood, plywood, particleboard and MDF; biscuits were invented for chipboard and are 'predominantly used in joining sheet goods' (Wikipedia 'Biscuit joiner'; DT Online). Lamello says biscuits weaken panels less than dowels. Printed plastic biscuits and dowels are possible (Printables models), but glue that swells wood won't swell plastic.
- **maker_difficulty**: moderate for dowels: holes must be positioned and drilled accurately, which a dowelling jig makes much easier (Wikipedia; Bailey Line Road); easy for biscuits once you have a biscuit joiner, because 'a quick pencil stroke' is all the marking needed (Wikipedia 'Biscuit joiner'; DT Online)

### Making it

- **processes**: 
  - woodwork: the main method, with a drill and dowelling jig or drill press for dowels, and a biscuit joiner or router slot cutter for biscuits (Wikipedia; DT Online)
  - off-the-shelf part: ready-made fluted dowel pins, Miller dowels (brand), wooden biscuits in standard sizes, dowel centres and dowelling jigs (Wikipedia; Bailey Line Road; Lamello)
  - 3D print (FDM): printed dowel pins and alignment pegs for joining split prints, e.g. PrusaSlicer's cut tool 'Dowel' connector, which cuts holes in both halves and makes a separate pin to print (Prusa knowledge base 'Cut tool'); printed biscuits and printed dowelling and biscuit-slot jigs (Printables)
  - CNC: CNC routers and boring machines can drill dowel holes in exact positions in both parts ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the pins or wafers are separate parts pushed into holes or slots in both halves
- **making_tips_3d_printing**: 1) Split prints: PrusaSlicer's cut tool offers 'Dowel' connectors, which subtract a pin-shaped hole from both halves and generate an extra object to print as the pin; 'Plug' connectors instead add the pin to one half (Prusa knowledge base 'Cut tool'). Prusa also suggests modelling in pegs 'for alignment and strength' when gluing split parts (Prusa knowledge base 'Modeling with 3D printing in mind'). 2) Clearance: for FDM allow about 0.5 mm total clearance for an easy slip fit (Hubs), or start at 0.3 mm (Prusa); for a glued pin you can go tighter, and drilling or reaming the printed hole to size after printing gives a more accurate diameter (Hubs). 3) Print orientation of the pin: a pin printed standing up breaks easily along a layer line under sideways (shear) load, because layer bonds are the weak direction (CNC Kitchen: PLA layer adhesion about 55% of flat strength). Print pins lying down, or print each pin as two D-shaped halves lying flat and glue or press them together, as in the Printables 'Ikea Dowel Pin collection' (which also used 6 walls, 6 top and bottom layers and 50% gyroid infill). 4) Round holes in the vertical direction print as polygons; check your CAD model has enough facets (Prusa). 5) Let air and glue escape: add a flat or a groove along a printed pin, just as wooden dowels need one to avoid hydraulic pressure splitting the part (Wikipedia 'Dowel'; DT Online). 6) Printed biscuits: the Printables 'Flachdübel / biscuit joints' model prints No. 0, 10 and 20 biscuits 4 mm thick for standard slots; plastic won't swell with water-based wood glue, so their hold depends on the glue gripping the plastic ⚑ [uncertain]. 7) Printed jigs: printable dowelling jigs use skateboard (608, 22 x 8 x 7 mm) ball bearings as hard drill guides (Printables 'Dowel Jig' by Michael; 'Dowel Jig 8mm'). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Fluted (grooved) hardwood dowel pins in standard diameters such as 1/4, 5/16, 3/8 and 1/2 in. or 6, 8 and 10 mm (Bailey Line Road; woodgears.ca used 3/8 x 2 in. pre-compressed fluted pins; printable jigs on Printables are made for 8 mm); dowel rod (Wikipedia 'Dowel'); Miller dowels (brand) with stepped drill bits (Wikipedia 'Butt joint'); dowel centres (Bailey Line Road; DT Online); self-centring dowelling jigs (Rockler; Bailey Line Road). Biscuits: Lamello (brand) Original wood biscuits No. 0 (47 x 15 x 4 mm), No. 10 (53 x 19 x 4 mm) and No. 20 (56 x 23 x 4 mm), Porter-Cable FF face-frame biscuits (30 x 13 mm), detail biscuits R1-R3, plus specialty metal knock-down connectors and hinges cut with the same machine (Wikipedia 'Biscuit joiner'; Lamello); biscuit joiners (plate joiners) from Lamello, Porter-Cable, DeWalt and Makita (Wikipedia); router slot-cutter bits (Wikipedia 'Butt joint').
- **rules_of_thumb**: 
  - Dowel diameter: about one-third to one-half of the stock thickness, with a dowel about twice the stock thickness long; e.g. 5/16 or 3/8 in. x 1-1/4 to 1-1/2 in. dowels for 3/4 in. door frames, 1/4 in. dowels for 1/2 in. parts, 1/2 in. dowels for 1-1/2 in. stock (Steve Maxwell, Bailey Line Road). DT Online gives about one-third of the thickness and a length of about six times the diameter, half in each part (DT Online 'Dowel Joint').
  - Let air and glue escape: a dowel in a blind hole needs a flat or groove along its side, or 'hammering the dowel home or clamping the joint can split the wood' (Wikipedia 'Dowel'); taper the dowel ends (DT Online).
  - Dry-fit every dowel joint fully clamped before gluing to catch holes drilled too shallow, then assemble quickly because the dowels swell as soon as the glue touches them (Bailey Line Road).
  - Troubleshooting dowels: joint won't close = holes too shallow or at mismatched angles; wood splits when clamped = holes not parallel; weak, misaligned joint = holes too large; dowels won't enter = pins swollen with moisture (dry them in an oven at 325 °F for 30 minutes) (Bailey Line Road).
  - Dowel strength: three 3/8 in. dowels reached about 80% of a comparable mortise and tenon; the tapered dowel ends add little glue area, and dowels pull out of the cross-grain part first, so a thicker post and longer dowels help (woodgears.ca). Wandel expects four dowels to be nearly as strong as a mortise and tenon (woodgears.ca 'Testing pocket holes').
  - Biscuit sizes (length x width x thickness): No. 0 47 x 15 x 4 mm, No. 10 53 x 19 x 4 mm, No. 20 56 x 23 x 4 mm; the standard cutter is 4 mm (5/32 in.) wide on a nominal 100 mm (4 in.) blade (Wikipedia 'Biscuit joiner'). Lamello biscuits fit a 4 mm groove snugly enough not to fall out when the part is turned over (Lamello).
  - Biscuit layout: mark both parts with one pencil line across the joint, and always cut the slots with the machine registered on the same face so the boards come out flush; more than one biscuit side by side can be used in thick parts (Wikipedia 'Biscuit joiner', 'Butt joint').
  - Biscuit strength: use biscuits mainly for alignment and to add pull-apart strength to butt and mitre joints; for joints needing shear strength, such as chairs, use dowels (Rockler) or a mortise and tenon, since a No. 20 biscuit penetrates less than 1/2 in. and its grain runs at 45 degrees (The Wood Whisperer). Lamello says the diagonal grain gives high break resistance.
  - Wait before flattening a biscuit glue-up: the biscuit swells the wood above it, and sanding before the moisture leaves can leave shallow dips over each biscuit later; The Wood Whisperer waits at least 24 hours (The Wood Whisperer 'Biscuit Depression?').
  - End-to-edge glue joints need interlocking pins or tenons to carry real load; dowels are one of the USDA's examples of a strong connection (USDA Wood Handbook ch. 10).

### When to use it

- **everyday_examples**: 
  - Flat-pack furniture held together with small wooden dowels (e.g. the IKEA dowel pins reproduced in the Printables 'Ikea Dowel Pin collection')
  - Chairs, cabinets, panels and tabletops joined with dowels, and the creaking chair or wobbly bookcase whose dowels have loosened (Wikipedia 'Butt joint')
  - Kitchen cabinet face frames attached to cabinet boxes with biscuits (Wikipedia 'Butt joint')
  - Wide tabletops glued up from several boards with biscuits keeping the surfaces flush (Rockler; The Wood Whisperer)
- **when_to_use**: Use dowels to strengthen butt joints in frames and carcases (face frames, door frames, legs to aprons, chair legs, shelves) when you don't want to cut mortises and tenons; they are hidden, need only a drill and jig, and in tests are nearly as strong as a mortise and tenon (Wikipedia 'Butt joint'; woodgears.ca; Bailey Line Road). Use biscuits for fast, forgiving alignment in panel glue-ups, carcases of plywood, MDF or particleboard, mitred frames and face frames, where alignment matters more than strength (Wikipedia 'Biscuit joiner'; Rockler). Use printed dowels or pins to align and strengthen split 3D prints (Prusa).
- **when_not_to_use**: Don't rely on biscuits alone for joints that carry heavy loads or end grain, such as chair or table frames; use dowels, a mortise and tenon or a loose tenon instead (The Wood Whisperer; Rockler). Avoid dowels in high-quality furniture meant to last generations, because dowels can shrink, go oval and loosen, letting joints flex and creak (Wikipedia 'Butt joint'). For furniture that must come apart, use knock-down cam-lock or cross-dowel connectors or a wedge dowel instead of glued pins. For edge-gluing boards, glue alone is already stronger than the wood, so dowels or biscuits are only for alignment (Rockler; The Wood Whisperer). In thin material, where a slot or hole would break through the face, use a plain glued edge or a spline ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Wood swells and shrinks with humidity, much more across the grain than along it (USDA Wood Handbook ch. 4); a dowel crosses the grain of the other part, so over time it can shrink, turn oval and work loose (Wikipedia 'Butt joint'), and end-to-edge joints should be protected from moisture changes (USDA Wood Handbook ch. 10). Dowel pins stored in damp air swell and won't fit (Bailey Line Road). Outdoors, the joint is only as good as its glue; use a waterproof glue ⚑ [uncertain]. Printed plastic pins: PLA softens at about 60 °C and PETG at about 80 °C (CNC Kitchen). *(⚑ parts need confirming)*
- **safety_notes**: A biscuit joiner is a small spring-loaded circular saw: keep hands clear of the blade opening and let the blade stop before lifting the machine (Wikipedia 'Biscuit joiner' describes the spring-loaded blade) ⚑ [uncertain]; the Printables router biscuit template also says to let the bit stop before lifting the router. Drilling dowel holes can grab small parts; clamp the work ⚑ [uncertain]. Otherwise none known. *(⚑ parts need confirming)*
- **common_failures**: Misaligned or non-parallel dowel holes, so the joint won't close or the wood splits when clamped (Bailey Line Road); use a dowelling jig or drill press. Wood splitting from trapped air and glue in blind holes (Wikipedia 'Dowel'); use fluted or grooved dowels. Holes too shallow, so the joint won't close (Bailey Line Road); dry-fit first. Dowels loosening over the years as they shrink and go oval (Wikipedia 'Butt joint'). Dowels pulling out of the cross-grain part under bending load (woodgears.ca); use longer or more dowels. Biscuits used as the only strength in end-grain joints (The Wood Whisperer). Shallow dips appearing over biscuits in a tabletop that was sanded too soon after glue-up (The Wood Whisperer 'Biscuit Depression?'). Faces not flush because slots were cut from different reference faces (Wikipedia 'Biscuit joiner'). Fluted dowels swelling before the joint is closed when assembly is slow; the joint must slide together quickly once glued (Bailey Line Road). Biscuits start loose and only tighten as they swell, so the joint must stay clamped longer (DT Online 'Biscuit Joint').
- **related**: 
  - Butt and lap wood joints: the plain joint that dowels and biscuits reinforce
  - Mortise and tenon, including loose (floating) tenons such as the Domino (brand): a longer, flat-sided version of the same idea, generally stronger than dowels (woodgears.ca)
  - Wedge dowel (click-in grooved dowel): a tool-free knock-down dowel for furniture that comes apart
  - Knock-down cam-lock and cross-dowel connectors: metal fittings that act like removable dowels in flat-pack furniture
  - Tongue-and-groove joint, including the loose tongue (spline): a continuous version of a biscuit along the whole edge
  - Locating pins and hole-and-slot: the precision-engineering use of pins to position parts exactly
  - Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): the 3D-printing cousin of dowelling

### Pictures, videos and models

- **links**: 
  - [Woodworking-joint-butt-dowel.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-dowel.gif): Drawing of a butt joint reinforced with dowels in matching holes (used on Wikipedia 'Butt joint') *(licence: CC BY-SA 3.0)*
  - [Woodworking-joint-butt-biscuit.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-biscuit.gif): Drawing of a butt joint reinforced with an oval biscuit in matching slots *(licence: CC BY-SA 3.0)*
  - [Biscuit-joint.jpg (Wikimedia Commons, by Billbeee)](https://commons.wikimedia.org/wiki/File:Biscuit-joint.jpg): Photo of 16 mm MDF edges with a No. 0 biscuit, set up for a right-angle joint (used on Wikipedia 'Biscuit joiner') *(licence: CC BY 2.5)*
  - [Рифление на шкантах.JPG (fluting on wooden dowels; Wikimedia Commons, by Андрей Перцев 1967)](https://commons.wikimedia.org/wiki/File:%D0%A0%D0%B8%D1%84%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%88%D0%BA%D0%B0%D0%BD%D1%82%D0%B0%D1%85.JPG): Photo of fluted wooden dowel pins (used on Wikipedia 'Dowel') *(licence: CC BY-SA 3.0)*
  - [How Strong Are DOWELS vs DOMINOS vs BISCUITS? Strength Test (YouTube, Rag 'n' Bone Brown)](https://www.youtube.com/watch?v=DTv8JG5eDFk): Video strength test comparing glued dowel, loose-tenon and biscuit joints (title checked via YouTube oEmbed; results not checked) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cut tool (Prusa Knowledge Base, PrusaSlicer)](https://help.prusa3d.com/article/cut-tool_1779): Slicer feature that cuts a model into printable pieces and adds 'Dowel' connectors (holes in both halves plus a separate printable pin), 'Plug' or 'Snap' connectors, or a dovetail *(licence: free software (PrusaSlicer is AGPL-3.0 ⚑ [uncertain]); help page link only)*
  - [Dowel Jig by Michael (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/123782-dowel-jig): A simple printable dowelling jig that centres the drill using two skateboard bearings (22 x 8 x 7 mm) as guides; chamfered to print without supports; remix of a Thingiverse design. Read through the Printables public API. *(licence: CC BY)*
  - [Ikea Dowel Pin collection by WillyWanker (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/578658-ikea-dowel-pin-collection): Printable replacement dowel pins in IKEA part-number sizes, smooth and rippled, with tips on printing them strong (6 walls, 50% gyroid, or as two flat D-shaped halves). Read through the Printables public API. *(licence: CC BY-NC)*
  - [Poor man's biscuit joiner / biscuit joint cutter by imototakashi (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/321230-poor-mans-biscuit-joiner-biscuit-joint-cutter): A printed router template and spacers for cutting No. 10 biscuit slots with a slot-cutter router bit, including a 45-degree frame for mitres. Read through the Printables public API. *(licence: CC BY-SA)*
  - [Flachdübel / biscuit joints by yahbluez (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1293403-flachdubel-biscuit-joints): Printable plastic biscuits in No. 0, 10 and 20 sizes, 4 mm thick, with hexagon-textured faces for more glue area. Read through the Printables public API. *(licence: CC BY-NC-ND)* *(⚑ parts need confirming)*
- **diagram_idea**: Two exploded views of the same corner: on the left, two boards with a row of matching drilled holes and fluted dowels between them, with a small arrow showing air and glue escaping along a flute; on the right, two boards with crescent-shaped slots and an oval biscuit, with a double-headed arrow showing the biscuit can slide along its longer slot for alignment before the glue swells it tight.
- **sources**: 
  - https://en.wikipedia.org/wiki/Butt_joint
  - https://en.wikipedia.org/wiki/Dowel
  - https://en.wikipedia.org/wiki/Biscuit_joiner
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-dowel.gif
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-butt-biscuit.gif
  - https://commons.wikimedia.org/wiki/File:Biscuit-joint.jpg
  - https://commons.wikimedia.org/wiki/File:Lamello-top.jpg
  - https://commons.wikimedia.org/wiki/File:%D0%A0%D0%B8%D1%84%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%88%D0%BA%D0%B0%D0%BD%D1%82%D0%B0%D1%85.JPG
  - https://woodgears.ca/joint_strength/
  - https://woodgears.ca/joint_strength/pockethole.html
  - https://woodgears.ca/joint_strength/dowel.html
  - https://baileylineroad.com/dowel-joinery-basics/
  - https://www.rockler.com/learn/doweling-vs-biscuit-joints
  - https://thewoodwhisperer.com/articles/are-biscuits-strong-enough/
  - https://thewoodwhisperer.com/articles/biscuit-depression/
  - https://lamello.com/products/lamello-system/wooden-biscuit
  - https://wiki.dtonline.org/index.php/Dowel_Joint
  - https://wiki.dtonline.org/index.php/Biscuit_Joint
  - https://wiki.dtonline.org/index.php/Widening_Joint
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_10.pdf
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_04.pdf
  - https://help.prusa3d.com/article/cut-tool_1779
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=DTv8JG5eDFk
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
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, make_it_yourself, making_tips_3d_printing, processes, removability, reuse_cycles, safety_notes, when_not_to_use

## 273 Tongue-and-groove joint (incl. sliding-lid grooves)

*interlocking joints & joinery.* A ridge on one edge fitting a groove in the other, joining boards edge to edge or letting a lid slide into a box

### What it is

- **plain_name**: A thin ridge along the edge of one board that slots into a matching channel along the edge of the next, so boards lock flush side by side; the same channel idea lets a flat lid slide in and out of a box
- **term**: Tongue-and-groove joint (including grooves for sliding lids and captured panels)
- **aliases**: 
  - tongue and groove, T&G, tongued and grooved boards (Wikipedia 'Tongue and groove'; DT Online 'Widening Joint')
  - matched boarding, matchboard, V-groove (chamfered) or beaded tongue and groove (DT Online; Woodcraft; Wikipedia)
  - slip tongue, loose tongue, tongue in groove, spline, key (a separate strip in two grooves; Wikipedia; DT Online)
  - end-matched boards (tongued and grooved on the ends as well; Wikipedia)
  - click flooring, locking tongue and groove (Wikipedia 'Wood flooring')
  - groove, plough (plow) groove, through groove, stopped groove; a dado is the same cut across the grain (Wikipedia 'Groove (joinery)')
  - sliding lid, slide-top box, sliding-lid box (Fine Woodworking; Boxes.py 'SlidingLidBox')
  - floating panel in a groove (frame and panel, rail and stile) (Wikipedia 'Frame and panel')
  - Nut und Feder (German), pióro i wpust (Polish) (Wikimedia Commons file names)
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment, sliding, telescoping & linear motion
- **one_liner**: A tongue on one edge fits a groove in the other, joining boards edge to edge into one flat surface that stays flush, or, with a groove on each side of a box, holding a lid that slides in and out.
- **complexity**: Single feature on each part, or a few parts: one board with a groove along one edge (or two adjacent edges) and a tongue on the opposite edge, repeated board after board; or two grooved edges with a separate loose tongue (spline) between them; or a box whose sides are grooved to hold a sliding lid and a captured bottom (Wikipedia 'Tongue and groove'; Fine Woodworking 'Make a Sleek Box with a Sliding Lid').
- **how_it_works**: The tongue fits snugly in the groove, so neighbouring boards can't move up or down relative to each other and their faces stay flush, but they can still slide along the joint (Wikipedia 'Tongue and groove'; Popular Woodworking). The tongue is made a little shorter than the groove is deep, so the board shoulders close tight while leaving room for glue or wood movement (Wikipedia; Woodworker's Journal). Boards are usually not glued: they are nailed or fixed down, and each board can shrink and swell a little without splitting, with the tongue hiding the gap (Wikipedia). A sliding lid is the same idea turned around: the lid's thin edges act as tongues running in grooves cut along the inside of the box sides, so the lid is held in every direction except along the grooves, and slides out of the open end (Fine Woodworking; Boxes.py).

### Finder attributes

- **job**: 
  - join and hold: joins boards edge to edge into floors, walls, ceilings, cabinet backs and wider panels (Wikipedia 'Tongue and groove'; Woodcraft)
  - line parts up exactly: keeps the faces of boards flush during glue-ups and installation (USDA Wood Handbook ch. 10; Popular Woodworking)
  - let it move (turn, slide or bend): a sliding lid slides along its grooves; a panel captured in a groove floats so it can shrink and swell (Fine Woodworking; Wikipedia 'Frame and panel')
- **motion**: slide: a sliding lid moves along its grooves over the length of the box; none once boards are glued, nailed or fixed down
- **degrees_of_freedom**: 1 before fixing: the parts can only slide along the joint (and pull apart sideways in the board's plane until pushed home); a sliding lid keeps this 1 degree of freedom in use. 0 once glued or nailed.
- **special_behaviour**: 
  - self-aligning or self-centring: the tongue registers the faces flush, so boards 'can't creep out of alignment' as clamps are tightened (Popular Woodworking); the USDA notes shaped edge joints let parts be 'quickly aligned in clamps or presses' (USDA Wood Handbook ch. 10)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the tongue in the groove stops the boards moving out of line, and a sliding lid is held in its grooves by shape alone (Wikipedia; Fine Woodworking)
  - material bond (glue, solvent or melting): when edge-glued into a panel, or when floating floors are glued tongue to groove with PVA (Wikipedia 'Wood flooring')
  - friction or clamping (force-fit): nails or screws into the framing below hold floorboards and cladding, and a snug tongue fit adds friction (Wikipedia 'Wood flooring'; Popular Woodworking)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for a sliding lid, which just slides out; removable for 'click' floors, where no adhesive makes board replacement easier (Wikipedia 'Wood flooring'); semi-permanent for nailed boards ⚑ [uncertain]; permanent when glued *(⚑ parts need confirming)*
- **reuse_cycles**: effectively unlimited for a sliding lid, until the grooves wear or the wood warps ⚑ [uncertain]; many times for unglued click or floating floors ⚑ [uncertain]; once for glued joints *(⚑ parts need confirming)*
- **tools_needed**: Router table with a matched pair of tongue-and-groove bits, a reconfigurable single bit, a slot cutter, or a straight bit plus a rabbeting bit; featherboard and push sticks (Woodcraft; Woodworker's Journal); or a table saw with a dado cutter (Popular Woodworking); or hand planes: a plough plane for the groove and a tongue plane, a pair of match planes or a combination plane (Wikipedia 'Tongue and groove'; DT Online); or a spindle moulder (shaper) (Wikipedia). For sliding lids: a router table with a small straight bit (1/8 in. in Fine Woodworking's box) or a table saw to cut the grooves, and a hand plane to fit the lid (Fine Woodworking; Blue Spruce Toolworks). Glue and clamps for glued panels; nails for floors, possibly with a flooring nailer ⚑ [uncertain]. *(⚑ parts need confirming)*
- **seal**: loose: the tongue closes and hides the gap between boards as they shrink (Wikipedia), which is why tongue-and-groove boards were used for sheathing and concrete formwork, but the joint is not watertight or airtight ⚑ [uncertain]; a sliding lid is not sealed *(⚑ parts need confirming)*
- **load**: Light to medium. The tongue mainly aligns; a glued tongue-and-groove edge joint is no stronger than a plain glued edge joint, which can already be almost as strong as the wood itself (USDA Wood Handbook ch. 10). Strong against boards moving up and down relative to each other (shear across the faces); weak in pulling apart sideways unless glued or nailed; the thin tongue can snap at its shoulder if it is long or loaded, and a tight tongue can split the groove walls (Popular Woodworking). Several tongue-and-groove joints can be stacked one above another in thick material (Wikipedia). A sliding lid carries only light loads.
- **adjustable**: no, but a sliding lid's fit can be eased by planing or sanding its edges (Blue Spruce Toolworks), and panels left floating in grooves adjust themselves to seasonal movement (Wikipedia 'Frame and panel')
- **play_and_precision**: small: aim for a 'firm press fit' that does not rattle (Popular Woodworking) or parts that 'slide together with a bit of friction' without force (Woodworker's Journal). Shaped edges can't be machined perfectly, so part of the glue area may not touch (USDA Wood Handbook ch. 10). A V-groove (chamfered) edge hides any slight misalignment of the faces (Woodcraft). A sliding lid needs deliberate clearance to slide: Boxes.py makes the lid gap 10% of the material thickness larger and the lid slightly narrower (Boxes.py 'SlidingLidBox').
- **access_needed**: not applicable: the boards are pushed together edge to edge from the side, and a sliding lid goes in from one open end of the box; nothing is reached from behind
- **materials**: Mostly wood: solid softwood and hardwood boards (floorboards, parquet, panelling, cladding), plywood (subfloor sheets are often supplied tongued and grooved), and MDF (Wikipedia 'Tongue and groove', 'Wood flooring'). Plywood flooring may use separate plastic tongues (Wikipedia). Quarter-sawn or rift-sawn wood is preferred for floorboards because it wears better (DT Online) and for sliding lids because it stays flat (Fine Woodworking). Loose tongues are plywood or solid wood with the grain running diagonally or across the tongue (DT Online). 3D-printed boxes and lids in PLA or PETG (Printables), and laser-cut plywood or acrylic sliding-lid boxes, which use glued-on rails instead of routed grooves (Boxes.py).
- **maker_difficulty**: moderate for wood: easy with a matched router-bit set in a router table, but needs a careful setup, a centred groove and consistent stock thickness (Woodcraft; Popular Woodworking); easy for 3D-printed sliding-lid boxes from a parametric model (Printables)

### Making it

- **processes**: 
  - woodwork: router table, table saw with dado cutter, hand planes or spindle moulder (Wikipedia; Woodcraft; Popular Woodworking)
  - CNC: a CNC router can cut grooves and tongues with slot-cutting or T&G bits, as a router table does ⚑ [uncertain]
  - 3D print (FDM): sliding-lid boxes are among the most common printable containers, including support-free and dovetailed-lid designs (Printables)
  - 3D print (resin): possible, with the finer resin clearances (about 0.2 mm; Hubs), untested here for sliding lids ⚑ [uncertain]
  - laser cut: Boxes.py's SlidingLidBox makes a finger-jointed box where the lid runs between glued-in upper and lower rails (Boxes.py)
  - off-the-shelf part: ready-made tongue-and-groove flooring, panelling, cladding and T&G plywood sheets (Wikipedia; DT Online) *(⚑ parts need confirming)*
- **print_in_place**: no: the box and lid (or the two tongue-and-groove parts) are printed separately and slid together; e.g. one printable dovetailed sliding-lid box is printed with the box upright and the lid upside down (Printables 'Fully Parametric Dovetail Sliding Lid Box')
- **making_tips_3d_printing**: 1) Avoid supports in the lid grooves: a groove cut sideways into an upright wall has a flat overhanging roof. Prusa says overhangs of 45-60 degrees print cleanly and short bridges print without support (Prusa knowledge base), so give the groove a 45-degree sloping top, or shape the lid edge and groove as a dovetail; several printable boxes are sold as support-free for this reason (Printables 'Sliding Lid Box, Customizable and Support-Free'; 'Fully Parametric Dovetail Sliding Lid Box', printed box upright and lid upside down with no supports or brim). 2) Clearance: one maker found a 0.1 mm clearance on a Snapmaker 2.0 kept the lid 'tight enough to not fall out but easy to pull out' (Printables 'Parametric Sliding Lid Box' by KarnEdge); Prusa suggests at least 0.3 mm for moving parts and says its printers are accurate to about 0.2 mm; Hubs suggests 0.5 mm for FDM interlocking parts. Printers differ, so print a short test section of groove and lid first. 3) Elephant's foot: a lid printed flat can have a slightly flared first layer that jams in the groove; PrusaSlicer's 'Elephant foot compensation' can improve this (Prusa knowledge base), or chamfer the lid's bottom edges. 4) Chamfer the leading edges of tongues and lids so they start into the groove easily (Prusa: a chamfer on the edges of parts that slot together 'can save you a lot of effort'; Hubs: a small radius eases assembly and reduces stress concentration). 5) Tongue-and-groove joints between printed panels: keep the tongue's root from being a single layer line, because layers bond at only about 55% (PLA) or 46% (PETG) of flat strength (CNC Kitchen); a tongue about one-third of the wall thickness follows the woodworking rule (Popular Woodworking), though whether it suits plastic is ⚑ [uncertain]. 6) Large flat lids can warp; the wood-box advice to keep the lid flat so it never binds applies equally to prints (Fine Woodworking), though this is untested for plastic ⚑ [uncertain]. 7) PLA softens at about 60 °C, so a PLA box left in a hot car may distort and jam (CNC Kitchen). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Tongue-and-groove router bits: matched 2-bit sets, reversible single bits, 'convertible' bits with adjustable cutter spacing, and V-groove (bevelled) sets (Woodcraft); slot-cutter bits with interchangeable bearings (Woodworker's Journal); dado cutter sets for the table saw (Popular Woodworking); ready-made tongue-and-groove floorboards (solid floors are mostly 0.75 in. thick), engineered and 'click' floors, T&G plywood subfloor sheets, matchboard panelling and shiplap cladding (Wikipedia 'Wood flooring', 'Tongue and groove'; DT Online); plastic loose tongues for grooved plywood flooring (Wikipedia); Spaceballs (brand) small rubber balls, or cork, that centre a floating panel in its groove (Wikipedia 'Frame and panel'); plough, tongue and match planes (Wikipedia; Wikimedia Commons 'Tongue and Groove Wood Plane').
- **rules_of_thumb**: 
  - Proportions: a square tongue about one-third of the stock thickness, centred on the edge; for 3/4 in. stock, a 1/4 in. thick by 1/4 in. long tongue. A longer (e.g. 1/2 in.) tongue is prone to break at the shoulder, and a deep groove's walls may crack (Bill Hylton, Popular Woodworking). Woodcraft and DT Online also give one-third.
  - Depth by purpose: 1/4-3/8 in. groove depth for joints assembled without glue; a 1/8 in. groove is enough for a glued joint, and a 1/8 in. tongue is enough just to register faces in a panel glue-up (Popular Woodworking). The USDA agrees a shallow tongue and groove aligns as well as a deep one and wastes less wood (USDA Wood Handbook ch. 10).
  - Make the groove about 1/32 in. deeper than the tongue is long, so glue has room and the shoulders close (Woodworker's Journal); Wikipedia: the tongue 'projects a little less than the depth of the groove'.
  - Fit: a firm press fit; if you have to knock the pieces together and struggle to pull them apart it is too tight, and a tongue 'a hair too fat' can split the groove walls over time; it should not rattle either (Popular Woodworking).
  - Cut the groove first and fit the tongue to it; centre the groove by making two passes, flipping the board end for end (Woodworker's Journal; Popular Woodworking). Make all cuts with the show face against the router table for consistency (Woodcraft).
  - Strength: a glued tongue-and-groove edge is no stronger than a plain glued edge, because the shaped faces can't be machined precisely enough; its value is fast alignment (USDA Wood Handbook ch. 10).
  - Don't glue solid-wood tongue-and-groove boards or panels across their width: shrinkage would pull the tongue off (Wikipedia 'Tongue and groove'). Let panels float, cut about 1/4 in. short of the bottom of the groove; a wide solid panel can change width by as much as half an inch (Wikipedia 'Frame and panel').
  - Wood movement: wood shrinks most along the growth rings (tangentially), about half as much across them (radially) and only 0.1-0.2% along the grain (USDA Wood Handbook ch. 4), so boards and lids change width, not length.
  - Sliding lid in sheet material (Boxes.py defaults): lid gap = (1 + 0.1) x material thickness; lid made narrower by 0.05 x thickness on each side 'to prevent the lid from jamming'; rails 1.5 x thickness wide (wider rails are more stable but make the opening smaller) (Boxes.py 'SlidingLidBox').
  - Sliding lid in wood: use quarter-sawn or rift-sawn stock and mill it to thickness in stages ('double and even triple-milling') so the lid stays flat and slides without binding (Michael Cullen, Fine Woodworking #255).
  - Loose tongues: grooves about one-third of the thickness (e.g. the nearest standard plywood thickness); if the tongue is solid wood, run its grain diagonally or across its width for strength (DT Online 'Widening Joint').
  - Stopped grooves (grooves that stop short of the ends) should be cut with a router or spindle moulder, not a table saw (DT Online, citing HSE WIS16).

### When to use it

- **everyday_examples**: 
  - Wooden floorboards and parquet blocks, which lock together edge to edge (Wikipedia 'Tongue and groove', 'Wood flooring')
  - Tongue-and-groove wall panelling, V-groove wainscot and the back panels of bookcases (Woodworker's Journal; DT Online 'Matched Boarding')
  - A wooden pencil box with a sliding top (Fine Woodworking: the author's childhood pencil box inspired his design)
  - Printed or wooden boxes for board-game pieces with a slide-out lid (Printables 'Parametric Sliding Lid Box')
- **when_to_use**: Use tongue and groove to join many boards edge to edge into a flat surface that must stay flush but still move with the seasons: floors, wall and ceiling panelling, cladding, cabinet backs and web frames (Wikipedia; Woodcraft). Use it in edge glue-ups when you want the boards to line up by themselves as you clamp (Popular Woodworking; USDA). Use a groove to capture a floating panel or a drawer or box bottom (Wikipedia 'Frame and panel', 'Groove (joinery)'). Use grooves and a sliding lid for simple boxes that open without hinges or latches, such as pencil boxes and game-piece boxes, in wood, 3D prints or laser-cut sheet (Fine Woodworking; Printables; Boxes.py). Use a loose tongue (spline) when both edges are grooved, e.g. in plywood (Wikipedia; DT Online).
- **when_not_to_use**: Don't add a tongue and groove for strength in an edge glue-up; a well-glued plain edge is as strong (USDA Wood Handbook ch. 10), so use dowels or biscuits only if you need alignment. Don't use it for end-grain or corner joints that carry load; use a mortise and tenon, finger or dovetail joint (The Wood Whisperer calls tongue and groove the mortise and tenon's 'little brother'). Avoid gluing wide solid-wood tongue-and-groove panels into frames or across their width; let them float (Wikipedia). For exterior cladding of sheds, shiplap is commonly used instead (DT Online). For a lid that must seal out water or dust, use a gasketed or snap-fit lid; for a lid opened often with one hand, a hinge is easier ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Wood swells and shrinks across the grain with humidity (tangential shrinkage is about twice radial; USDA Wood Handbook ch. 4), so glued solid boards can split or pull their tongues off (Wikipedia), and a sliding lid made too snug can bind in damp weather; leave clearance and use quarter-sawn wood for lids (Fine Woodworking). Floating floors need an expansion gap at the room edges (Wikipedia 'Wood flooring'). A 3D-printed PLA box softens at about 60 °C and PETG at about 80 °C (CNC Kitchen).
- **safety_notes**: Tongue-and-groove router bits are large and heavy: use a powerful, variable-speed router in a router table with a split fence, a featherboard, push sticks or a push block, and dust collection, because they throw a lot of chips (Woodcraft). Table-saw grooving with a dado cutter carries kickback and blade-contact risk: use guards and push sticks (OSHA table saw eTool), and don't cut stopped grooves on a table saw (DT Online, citing HSE WIS16). Small box parts need extra care near cutters (Fine Woodworking). Otherwise none known.
- **common_failures**: Tongue breaking off at its shoulder when it is too long or thin (Popular Woodworking). Groove walls cracking because the groove is too deep or the tongue too fat (Popular Woodworking). Joint not closing because the tongue bottoms out; make the groove 1/32 in. deeper (Woodworker's Journal). Faces not flush because the groove is off-centre (fix with two flipped passes; Woodworker's Journal) or because stock thickness varies between separate router cuts (Woodcraft recommends single-pass matched bits). Glued solid boards shrinking and pulling the tongue off, or a glued-in panel cracking or distorting the frame (Wikipedia 'Tongue and groove', 'Frame and panel'). Sliding lids binding after the lid twists or cups, or when the fit is too tight; use flat quarter-sawn stock and plane the edges to fit (Fine Woodworking; Blue Spruce Toolworks). In 3D prints: supports stuck in grooves, flared first layers jamming the lid, or lids too loose; design support-free grooves and print a fit test (Prusa; Printables).
- **related**: 
  - Sliding dovetail: a groove with angled sides that also stops the parts pulling apart
  - Dovetail slide with gib strip: the machine-tool version of a sliding tongue in a groove, with adjustment for wear
  - Dowel and biscuit joints: short pins or wafers that align edges; a loose tongue is like a continuous biscuit
  - Butt and lap wood joints: the plain edge joint that tongue and groove improves on; shiplap is a lapped cladding cousin
  - Mortise and tenon: a much deeper, stronger tongue for rails meeting posts (The Wood Whisperer)
  - Finger joint (box joint): how the corners of sliding-lid boxes are often joined (Boxes.py; Popular Woodworking's Japanese sliding-lid box)
  - Snap-lock sheet joint and cantilever snap fit: locking versions, like 'click' floors whose tongues snap into modified grooves (Wikipedia 'Wood flooring')
  - Oldham coupling: uses tongue-and-groove slots at right angles to join slightly misaligned shafts
  - Drawer slide (telescopic ball-bearing slide): the hardware alternative for sliding parts

### Pictures, videos and models

- **links**: 
  - [Pióro i wpust (ubt).jpg (Wikimedia Commons, by tsca)](https://commons.wikimedia.org/wiki/File:Pi%C3%B3ro_i_wpust_(ubt).jpg): A tongue-and-groove joint with the tongue (B) and groove (A) labelled *(licence: CC0)*
  - [Nut-Feder.jpg (Wikimedia Commons, by S.Wetzel)](https://commons.wikimedia.org/wiki/File:Nut-Feder.jpg): A tongue-and-groove (Nut-Feder) connection from woodworking *(licence: CC BY-SA 4.0)*
  - [Dusheme.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Dusheme.jpg): Solid parquet boards with tongues on one side and grooves on the other, and end-matched tongues and grooves on the ends (used on Wikipedia 'Tongue and groove') *(licence: CC BY-SA 3.0)*
  - [Master Tongue & Groove Joints — Traditional to Modern Methods (YouTube, WOOD magazine)](https://www.youtube.com/watch?v=7NulJL7R4Ok): Video of cutting tongue-and-groove joints by several methods (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [The Woodwright's Shop, Sliding Lid Boxes (PBS, Season 36, Episode 2)](https://www.pbs.org/video/woodwrights-shop-sliding-lid-boxes/): Roy Underhill showing how to make easy wooden gift boxes with sliding lids *(licence: link only)*
- **make_it_yourself**: 
  - [Boxes.py SlidingLidBox generator (online)](https://boxes.hackerspace-bamberg.de/SlidingLidBox?language=en): Free web generator for a laser-cut finger-jointed box with rails that hold a sliding lid; set inside sizes, material thickness, burn (kerf) correction, rail width, lid margins and an optional grip hole, then download SVG, DXF, PDF and other formats *(licence: GPL v3+ (Boxes.py is free software))*
  - [Parametric Sliding Lid Box by KarnEdge (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/263548-parametric-sliding-lid-box): A simple printable sliding-lid box with a Fusion 360 file whose height, width, length, wall thickness and clearance can be changed; 0.1 mm clearance worked on the author's printer. Read through the Printables public API. *(licence: CC BY)*
  - [Sliding Lid Box, Customizable and Support-Free by pvillano (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/179677-sliding-lid-box-customizable-and-support-free): An OpenSCAD-customisable sliding-lid box (inside width, height, depth, thickness) designed to print without supports. Read through the Printables public API. *(licence: CC BY)*
  - [Parametric sliding lid box by Billiam (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/425966-parametric-sliding-lid-box): A sliding-lid box with a downloadable in-browser configurator (sizes, wall thickness, corner radius, lid text) that exports STL or STEP; prints at 0.3 mm layers with no supports. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Fully Parametric Dovetail Sliding Lid Box by Cybxr (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1312583-fully-parametric-dovetail-sliding-lid-box): A Fusion 360 parametric box whose lid slides in dovetail-shaped grooves, with an adjustable dovetail clearance; printed box upright and lid upside down, no supports. Read through the Printables public API. *(licence: CC BY-NC-SA)*
- **diagram_idea**: Two panels: (1) an end view of three boards with tongues in grooves, showing the small gap left at the bottom of each groove and a dotted outline of a board shrinking while its tongue stays in the groove; (2) a cut-away box with grooves along the inside of both long sides and a lid sliding out of the open end, with arrows showing it is held up, down and sideways but free to slide.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tongue_and_groove
  - https://en.wikipedia.org/wiki/Frame_and_panel
  - https://en.wikipedia.org/wiki/Groove_(joinery)
  - https://en.wikipedia.org/wiki/Wood_flooring
  - https://commons.wikimedia.org/wiki/File:Pi%C3%B3ro_i_wpust_(ubt).jpg
  - https://commons.wikimedia.org/wiki/File:Nut-Feder.jpg
  - https://commons.wikimedia.org/wiki/File:Dusheme.jpg
  - https://commons.wikimedia.org/wiki/File:Veer_en_groef.jpg
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-groove.gif
  - https://commons.wikimedia.org/wiki/File:Tongue_and_Groove_Wood_Plane.jpg
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_10.pdf
  - https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr190/chapter_04.pdf
  - https://www.popularwoodworking.com/techniques/tongue-groove-joinery/
  - https://www.woodworkersjournal.com/three-tongue-groove-routing-options/
  - https://www.woodcraft.com/blogs/cabinetry-furniture-making/tongue-and-groove
  - https://wiki.dtonline.org/index.php/Widening_Joint
  - https://thewoodwhisperer.com/articles/are-biscuits-strong-enough/
  - https://www.finewoodworking.com/project-guides/boxes/sleek-box-with-a-sliding-lid
  - https://bluesprucetoolworks.com/blogs/projects/sliding-lid-box-for-fun-and-practice
  - https://www.popularwoodworking.com/projects/japanese_sliding-lid_box/
  - https://www.pbs.org/video/woodwrights-shop-sliding-lid-boxes/
  - https://boxes.hackerspace-bamberg.de/SlidingLidBox?language=en
  - https://raw.githubusercontent.com/florianfesti/boxes/master/boxes/generators/slidinglidbox.py
  - https://raw.githubusercontent.com/florianfesti/boxes/master/README.rst
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.osha.gov/etools/machine-guarding/saws/table
  - https://www.youtube.com/watch?v=7NulJL7R4Ok
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: boards or sheet, lid, door or cover
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, power tools, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…s for glued panels; nails for floors, possibly with a flooring nailer [uncertain].…"*
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** making_tips_3d_printing, processes, removability, reuse_cycles, seal, tools_needed, when_not_to_use

## 274 Blind rivet (pop rivet)

*interlocking joints & joinery.* A hollow rivet set from one side with a hand tool that pulls a mandrel to swell the far end; the sheet-metal baseline

### What it is

- **plain_name**: A little metal tube with a nail through it that you push into a drilled hole and squeeze with a hand tool from the front; the far end swells into a lump behind the sheets, the nail snaps off, and the sheets stay clamped for good, even though you never reached the back
- **term**: Blind rivet (break-mandrel or break-stem blind rivet)
- **aliases**: 
  - pop rivet; POP rivet ('POP' is the brand name of the original maker, now owned by Stanley Engineered Fastening, so 'POP' is a brand) (Wikipedia 'Rivet')
  - break-stem rivet; break mandrel blind rivet; 'open end blind rivet with break pull mandrel and protruding head' (the formal name in ISO 15977; 'Break Stem Open' in the POP catalogue)
  - popnagel (Dutch), Blindniet (German), nit zrywalny (Polish): names used on Wikimedia Commons 'Category:Blind rivets'
  - closed-end rivet; sealed or sealing blind rivet (McMaster-Carr 'Sealing Blind Rivets'; POP 'Closed End')
  - multi-grip rivet; wide-grip-range rivet (POP 'MGR'; McMaster-Carr 'Wide-Thickness-Range')
  - peel rivet; tri-fold rivet (TriFold); T-rivet; Oscar rivet (split-body rivets that open into petals or legs) (Wikipedia 'Rivet'; POP catalogue); 'Tri-Grip' and 'T-Lok' are trade names used in Hanson Rivet's guide
  - large-flange rivet; countersunk rivet; flush-setting rivet; grooved rivet (for wood); structural blind rivet (internally or externally locked mandrel) (POP catalogue; Wikipedia 'Rivet')
  - drive rivet (hammer-driven blind rivet) and friction-lock rivet, e.g. the 'Cherry' friction-lock rivet used on aircraft (Cherry is a brand) (Wikipedia 'Rivet'; FAA AC 43.13-1B)
  - Olympic rivet: a shaved-flush version used to repair Airstream trailers (Wikipedia 'Rivet')
  - beginner search terms: rivet gun rivets, hand riveter rivets, one-sided rivet, rivet for sheet metal
- **family**: interlocking joints & joinery
- **other_families**: clamping, magnetic & friction connections, hinges & pivots, everyday fasteners & fixings
- **one_liner**: A hollow rivet with a pulling pin (mandrel) through it that you fit from one side: a hand tool pulls the pin until the far end of the rivet swells into a second head behind the parts and the pin snaps off, clamping sheets or panels together permanently.
- **complexity**: A few parts sold as one unit: a hollow rivet body (a short tube with a head, or flange, at one end) and a nail-like pin (mandrel) running through it, with a weakened neck just under the mandrel's head that is meant to break (Wikipedia 'Rivet'; Commons 'Blind rivet notches'). You also need a setting tool (hand riveter or rivet gun) with a nosepiece to suit the rivet size (POP catalogue p.80). Peel, tri-fold and Oscar types have a body slit into petals or legs; closed-end types have the far end of the body sealed round the mandrel head (Wikipedia 'Rivet'; POP catalogue p.8).
- **how_it_works**: You drill a hole through all the parts, put the mandrel into the tool's nose and push the rivet body into the hole until its head sits against the front sheet (POP catalogue p.7; Hanson D13). Squeezing the tool grips the mandrel and pulls its ball-shaped head back into the tube: this swells the tube to fill the hole and bulges the far end into a second head (blind head) wider than the hole, squeezing the sheets together between the two heads (Wikipedia 'Rivet'; Assembly Magazine). When the pull reaches a set force, the mandrel snaps at its weakened neck, so every rivet is set with about the same clamping force; the loose stem is thrown away (POP catalogue p.14; Assembly Magazine: blind rivets 'cannot be under-torqued, over-torqued or set loose'). In an ordinary open-end rivet the mandrel head may stay inside the rivet or fall out later; in a closed-end or structural rivet it is locked in (Wikipedia 'Rivet').

### Finder attributes

- **job**: 
  - join and hold: permanently fastens sheet metal, plastic panels, plywood, fibreglass, fabric or leather to each other or to tube and box section, from one side only (Wikipedia 'Rivet'; TWI)
  - seal it, or pass cables or fluid through: only the closed-end (sealed) type, which is made for 'water/pressure tight' joints (POP catalogue p.8); ordinary open-end rivets leave a small hole through the middle
- **motion**: none: once set, the parts are clamped and cannot move. Exception: a rivet can be set with a small gap under its head so a part can turn on it as a simple pivot, using a 'pivot style' nosepiece on the tool (Hanson D13 'Pivot Fastening').
- **degrees_of_freedom**: 0 for a normal joint: the sheets are clamped between the two heads and the swollen body fills the hole. 1 (turning about the rivet) if it is deliberately set as a loose pivot with a gap under the head (Hanson D13).
- **special_behaviour**: 
  - none of the listed behaviours in use: it is a plain permanent fastener
  - Its own tricks: it is fitted and set entirely from one side (blind), and the mandrel's built-in weak neck snaps at a set pulling force, so the tool can't over- or under-tighten it; the clamping force is built into the rivet, a bit like a one-shot force limiter that only works while fitting (Assembly Magazine; POP catalogue p.14; ISO 15977 gives a maximum 'mandrel break load' for each size)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the factory head in front and the swollen blind head behind trap the sheets between them, and the swollen body fills the hole so the sheets can't slide (Wikipedia 'Rivet'; Assembly Magazine)
  - friction or clamping (force-fit): setting the rivet clamps the sheets together with a force set by the mandrel's break load, so friction between the sheets also carries load (POP catalogue p.14; Wikipedia 'Rivet')
- **input_output**: not applicable
- **power**: passive (no power needed). Pneumatic, pneumatic-hydraulic and battery rivet tools exist only to fit rivets faster; the set rivet needs no power (POP catalogue pp.72-81).
- **removability**: permanent: it can only be removed by drilling off the head and punching out the rest, which usually leaves the hole slightly enlarged if done carelessly; TWI lists 'difficult to remove once placed' as a disadvantage (TWI; This Old House 'How to Remove Rivets').
- **reuse_cycles**: once: each rivet is used one time and destroyed when removed; the drilled hole can take a new rivet of the same size if it wasn't enlarged, or of the next size up (This Old House; ISO 15977 hole sizes).
- **tools_needed**: To fit: a drill and bit of the right clearance size (e.g. 3.3-3.4 mm for a 3.2 mm rivet, ISO 15977), a deburring tool because the hole 'should be burr free' (POP catalogue p.15), and a riveting tool with the right nosepiece. A hand plier riveter sets about 2.4-4.8 mm rivets; lazy-tong and long-handled lever riveters reach 6.4 mm and make steel and stainless rivets easier (POP catalogue p.80, POPSet PS15, PS25, PS40 capacity charts). Pneumatic or battery tools suit large numbers (POP catalogue pp.72-79). Temporary sheet fasteners (Cleco-type pins) or clamps help hold parts in line while drilling. Drive rivets need only a hammer (Wikipedia 'Rivet'). To remove: a centre punch, a drill bit the same size as the rivet, and a pin punch or pliers (This Old House).
- **seal**: none for an ordinary open-end rivet: there is a hole through its middle, and the FAA says blind rivets 'shall not be used in fluid-tight areas' on aircraft (FAA AC 43.13-1B par. 4-57f). watertight for closed-end (sealed) rivets, 'ideal for applications that need to be water/pressure tight' (POP catalogue p.8), and for sealing blind rivets with a plastic seal under the head (McMaster-Carr). On gutters, This Old House seals the rivets from the inside with siliconized caulk to make the joint watertight.
- **load**: Light to medium per rivet, strongest in shear (sheets trying to slide past each other) and weaker in pull-apart (tension), and weakest when a thin or soft sheet can tear out or pull over the blind head. Typical rated loads for POP open-end rivets: 3.2 mm aluminium (AlMg 3.5) with steel mandrel about 800 N shear and 1,200 N tension; 4.0 mm about 1,330 N and 1,910 N; 4.8 mm about 2,020 N and 2,800 N; 3.2 mm all-steel about 1,150 N and 1,550 N (POP catalogue pp.22, 46). A POP 'HS' 6.4 mm rivet has 'the strength of an M6 Bolt' (POP catalogue p.9). ISO 15977 minimums for aluminium/steel rivets: 3.2 mm class L 500 N shear, 700 N tension; 4.8 mm class L 1,200 N shear, 1,700 N tension. These are the rivet's own strengths; the joint may be weaker if the sheet is thin or soft (Wikipedia 'Rivet': the tests 'determine the strength of the rivet, and not the strength of the assembly'). The FAA notes blind rivets typically lock less well than driven solid rivets (FAA AC 43.13-1B).
- **adjustable**: no: position and clamping force are fixed when the mandrel snaps; to change anything you drill it out and fit a new rivet (This Old House).
- **play_and_precision**: No play when the hole is the right size, because the body swells to fill the hole (Wikipedia 'Rivet'); multi-grip rivets give 'rattle free' joints 'even in irregular holes' (POP catalogue p.8). Position is only as accurate as the drilled holes. It tolerates small misalignment: ISO 15977 allows the front (access-side) part to have a larger hole to help line parts up, at some loss of strength, and peel rivets work in oversized or elongated holes (ISO 15977 clause 3.3; Assembly Magazine). Too big a hole lets the rivet swell between the sheets, bulging or separating them (Assembly Magazine). Each rivet length only works over a set range of total thickness (grip range) (POP catalogue p.15).
- **access_needed**: one side only (blind): the rivet is inserted and set from the front (Wikipedia 'Rivet'). You still need room behind for the rivet's tail and blind head (backside clearance, Assembly Magazine) and room in front for the tool's nose; in deep channels use a long nosepiece or rivet from the other side (Hanson D13).
- **materials**: Rivet bodies: aluminium alloys (AlMg 2.5, 3.5 and 5 percent magnesium, and soft 99.5 percent aluminium for 'extremely soft and/or brittle materials'), steel, stainless steel, nickel-copper alloy (Monel), and copper; mandrels usually steel, stainless or aluminium (POP catalogue p.10; Wikipedia 'Rivet'). Plastic (nylon-type) blind rivets also exist but 'tend to dry out and get brittle' (McMaster-Carr 'Plastic Blind Rivets'; Assembly Magazine). Joins sheet metal (steel, aluminium), plastics, wood and leather (TWI), fabric (e.g. costume parts, Printables 'Spikes - four millimeter pop rivet attachment'), cardboard with a washer (Printables '1/8 in pop rivet washer'), fibreglass (GFRP), laminates and rubber (POP 'Peel' rivet, p.8). Match the rivet to the parts: 'the rivet selected should have the same physical and mechanical properties as the components to be joined' (POP catalogue p.10). For soft, brittle or 3D-printed plastics choose soft-set aluminium, large-flange, peel or tri-fold types (Hanson D13; POP catalogue).
- **maker_difficulty**: easy: a hand riveter and a drill are cheap and quick to learn; the main skills are drilling the right hole size, deburring it and choosing the rivet length (grip range) to suit the total thickness (POP catalogue p.15; Design World).

### Making it

- **processes**: 
  - off-the-shelf part: rivets are bought, not made
  - sheet metal: the classic use, e.g. aluminium or steel enclosures, ducting, gutters and downspouts (This Old House), truck bodies (Wikipedia 'Rivet') and homebuilt aircraft (Wikipedia 'Rivet', Zenith Aircraft)
  - woodwork and CNC-cut sheet: plywood road cases are almost always blind-riveted (Wikipedia 'Rivet'); grooved rivets suit wood and blind holes (POP catalogue p.9)
  - laser cut: acrylic and other cut plastic sheet can be riveted, but drill slowly and don't use a tight hole or the brittle sheet splits (DIY Doctor, Perspex); use large-flange or peel rivets (Hanson D13)
  - 3D print (FDM): possible for fixing a printed part to sheet or tube, with care (see making tips); makers report cracking in PLA (V1 Engineering forum)
  - textiles and leather: joins leather (TWI) and fabric, e.g. costume parts (Printables 'Spikes - four millimeter pop rivet attachment')
- **print_in_place**: no: metal blind rivets can't be printed; they are fitted to printed parts afterwards through a drilled or printed hole.
- **making_tips_3d_printing**: 1) When to use it: a blind rivet is good for fixing a printed part to sheet metal, tube or a boat or kayak hull that you can't reach behind (e.g. a PETG T-slot bracket fixed to a sit-on kayak with 3/16 in x 1 in marine pop rivets, Printables 'Kayak T-slot mounting'). For printed-to-printed joints, heat staking, filament rivets, screws or heat-set inserts are usually kinder to the plastic. 2) Expect high clamping force: the tool pulls until the mandrel snaps, and ISO 15977 allows mandrel break loads up to 3,500 N for a 3.2 mm aluminium rivet and 5,000 N for 4 mm, so you can't set it gently. Makers on the V1 Engineering forum warn that pop rivets 'need quite a bit of force to get it to expand and they tend to crack the parent material', and one who used them in PLA said the negatives 'are true'; it only worked where a surrounding tube held the cracked PLA together. 3) Spread the load: put the rivet's factory head on the plastic side and let the blind head form against the metal; a large-flange head has twice the bearing area of a dome head (Assembly Magazine). If the blind head must form against the plastic, fit a backup washer behind it (Hanson D13 'Hard to Soft Materials' diagram; Albany County Fasteners video 'How To Install Backup Rivet Washers VS Large Flange Rivets'); you can print wide washers too (Printables '1/8" pop rivet washer', PLA, for soft material). 4) Choose a rivet made for soft materials: soft-set aluminium, large-flange, tri-fold or peel rivets (Hanson D13 'Riveting Plastic Material'; POP 'Peel' and 'LSR' rivets for 'vulnerable, friable' materials), and prefer aluminium over steel or stainless in plastic ⚑ [uncertain: inferred from their lower setting loads, not tested in prints]. 5) Make the plastic round the hole solid (100 percent infill or extra perimeters) so the clamp squeezes solid plastic, not infill, and keep holes at least 2 rivet diameters from edges (Hanson D13) ⚑ [uncertain: solid-infill advice is general printing practice]. 6) Hole size: aim for the rivet's clearance size (3.3-3.4 mm for 3.2 mm, 4.1-4.2 mm for 4 mm, 4.9-5.0 mm for 4.8 mm, ISO 15977). Printed holes usually come out undersize, so print slightly small and drill to size; a tight hole in brittle plastic splits as the body swells (DIY Doctor) ⚑ [uncertain: undersize printed holes is general FDM experience]. 7) Grip range: add the printed wall to the sheet thickness and pick a rivet whose grip range covers the total, ideally mid-range (POP catalogue p.15; Design World). 8) Material: PETG for outdoor parts (the kayak bracket designer chose it for UV resistance); PLA may creep under the constant clamp so the joint can loosen over time ⚑ [uncertain: forum users report pop rivets loosening, but no creep test of riveted prints was found]. 9) Removal: drilling out a rivet in plastic often makes it spin and melt the hole (V1 Engineering forum); centre-punch the mandrel, use a sharp bit the same size as the rivet at low speed (This Old House), or design the part so it can be sacrificed. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Search for 'blind rivet', 'pop rivet' or 'open end blind rivet' by diameter and grip range, e.g. 3.2 mm (1/8 in), 4.0 mm (5/32 in), 4.8 mm (3/16 in) (Wikipedia 'Rivet'); ISO 15977 (aluminium body, steel mandrel) is the international standard for the common type. Body material: aluminium, steel (zinc-plated), 18-8 or 316 stainless, copper, nickel-copper (Monel). Head styles: dome (button) head, large-flange (large-diameter) head, countersunk (flush-mount) (POP catalogue p.12; McMaster-Carr). Special types: closed-end or sealing blind rivets; multi-grip (wide-thickness-range) rivets; peel, tri-fold or 'blind rivets for soft materials' (four legs or bulb shape, for plastic and fibreglass); grooved 'blind rivets for wood'; structural blind rivets; flush-both-sides and domed-both-sides rivets; miniature rivets for electronics; plastic blind rivets; colour-painted rivets (McMaster-Carr 'Blind Rivets' categories; POP catalogue pp.8-9). Accessories: 'rivet backup washers' (steel or aluminium, e.g. 1/8 in or 3/16 in ID) for soft or thin material; 'hand riveter' or 'rivet gun' (plier type, lazy-tong, lever), pneumatic or battery riveters; spare nosepieces and jaws; 'rivet hole locators' and rivet spacing fans for marking out; 'Cleco' temporary sheet fasteners for holding parts while drilling (McMaster-Carr related categories; POP catalogue pp.72-81).
- **rules_of_thumb**: 
  - Drill a clearance hole about 0.1-0.2 mm bigger than the rivet: 3.3-3.4 mm for 3.2 mm, 4.1-4.2 mm for 4 mm, 4.9-5.0 mm for 4.8 mm (ISO 15977 Table 2; the POP catalogue gives the same, e.g. p.22). Wikipedia puts it as a hole 'ideally 4-6 thousandths of an inch larger'. Not following the table 'may result in assembly difficulties and/or reduction in the shear and tensile loads' (ISO 15977).
  - Deburr the hole: POP says the hole 'should be burr free' (POP catalogue p.15); burrs are a listed cause of pull-through (Design World).
  - Choose the rivet length by grip range, the total thickness of everything being joined, not by the rivet's length; e.g. a 3.2 mm POP aluminium rivet with a 6.0 mm body grips 1.6-3.2 mm, and an 8.0 mm body grips 3.2-4.8 mm (POP catalogue p.22). Below the minimum grip you get a 'high mandrel break' (stub sticking out); above the maximum the mandrel head can pull through (Design World).
  - Edge distance: keep the rivet centre at least 2 rivet diameters from the edge 'to avoid material fracture' (Hanson D13; FAA AC 43.13-1B par. 4-57c(1) for single rows).
  - Spacing (pitch): at least 3 rivet diameters centre to centre for a single row (FAA AC 43.13-1B par. 4-57c(1)).
  - The rivet's own strength goes up quickly with size: ISO 15977 minimums for aluminium/steel class L are 500 N shear and 700 N tension at 3.2 mm, 850 N and 1,200 N at 4 mm, and 1,200 N and 1,700 N at 4.8 mm (ISO 15977 Table 3). Steel rivets are stronger than aluminium, e.g. POP 3.2 mm steel 1,150 N shear versus 800 N for aluminium (POP catalogue pp.22, 46).
  - The setting pull is big: maximum mandrel break loads are 3,500 N (3.2 mm), 5,000 N (4 mm) and 6,500 N (4.8 mm) for aluminium/steel rivets (ISO 15977 Table 3), so soft or brittle parts need a large flange, a washer or a peel-type rivet.
  - For soft to hard joints, put the rivet's head (ideally a large flange) on the soft side, or add a washer under the blind head on the soft side (Hanson D13 diagram). A dome head is about twice the body diameter; a large flange has twice the bearing area of a dome head (Assembly Magazine).
  - Match metals to avoid corrosion: an aluminium rivet in copper is 'Not Recommended' and aluminium rivets touching steel or stainless corrode faster; stainless rivets are unaffected in the chart (POP catalogue p.14 metal contact chart). Generally 'the rivet selected should have the same physical and mechanical properties as the components to be joined' (POP catalogue p.10).
  - Avoid riveting across an unsupported gap or hollow section: it can collapse, dimple or buckle; rivet where the parts are backed up (Hanson D13 'Gap Fastening').
  - Don't use ordinary blind rivets for critical, highly stressed or fluid-tight joints; the FAA bars them from aircraft control surfaces, hinges, wing and landing-gear fittings and fluid-tight areas (FAA AC 43.13-1B par. 4-57f).

### When to use it

- **everyday_examples**: 
  - Aluminium rain gutters: end caps, joins and downspout outlets fixed with pop rivets (This Old House 'How to Install Rain Gutters')
  - Plywood flight cases and road cases for music and stage gear, which are 'almost universally' blind-riveted (Wikipedia 'Rivet')
  - Number plates: the Commons photo 'Blind rivets before and after strain' shows the type used to fix French number plates (Wikimedia Commons)
  - Truck bodies, aluminium trailers and caravans such as Airstreams (structural and Olympic blind rivets, Wikipedia 'Rivet')
- **when_to_use**: Use a blind rivet when you need a quick, cheap, permanent joint in thin material and can only reach one side: sheet-metal boxes and brackets, ducting and gutters, fixing panels to box-section tube, plywood cases, kit aircraft and trailers, or a printed or plastic part to a metal sheet (Wikipedia 'Rivet'; This Old House; TWI). It is quick to fit, usually lighter than a bolt and nut (TWI: 'dependent on rivet material'), and can't be over- or under-tightened (Assembly Magazine). Choose closed-end rivets for wet places, multi-grip rivets when thicknesses vary, peel, tri-fold or large-flange rivets for plastics, fibreglass and wood, and structural rivets for vibration and higher loads (POP catalogue pp.8-9; Wikipedia 'Rivet').
- **when_not_to_use**: If the parts must come apart again, use a screw and nut, a rivet nut (blind threaded fixing) or a quarter-turn fastener instead, since a blind rivet has to be drilled out (TWI). If you can reach both sides and need the strongest joint, a solid rivet or bolt holds better; the FAA says blind rivets are 'usually not used when driven rivets can be installed' (FAA AC 43.13-1B). Don't use ordinary open-end rivets where the joint must be watertight or pressure-tight (use closed-end rivets plus sealant) or in heavily stressed or safety-critical places (FAA AC 43.13-1B). In soft or brittle plastic, including PLA prints, a standard rivet can crack the part: use heat staking, a heat-set insert and screw, or a push-in plastic rivet, or at least a large-flange or peel rivet with a washer (V1 Engineering forum; Hanson D13). For high-volume sheet-metal parts with a press, clinching joins sheets without any extra part.
- **environment_limits**: Heat: rivets lose strength as they warm; from the POP catalogue's curves, a common AlMg 3.5 aluminium rivet keeps roughly 90 percent of its rated strength at 100 °C and about two thirds at 200 °C, soft 99.5 percent aluminium falls to about half by about 165 °C, while steel keeps about 70 percent at 400 °C (POP catalogue p.11) ⚑ [uncertain: values read by eye from graphs]. Nickel-copper (Monel) rivets are 'suitable for extremely hostile and high temperature environments' (POP catalogue p.10). Water and corrosion: open-end rivets let water through the middle; closed-end types are sealed (POP catalogue p.8); mixing metals causes galvanic corrosion 'where two dissimilar metals are in contact in the presence of an electrolyte', e.g. aluminium rivets in copper are not recommended (POP catalogue p.14); for salt water McMaster-Carr offers 316 stainless rivets. Vibration: the leftover mandrel head in a standard open rivet 'could shake loose', which doesn't reduce strength but can rattle; closed-end rivets avoid this (Assembly Magazine); friction-lock aircraft rivets are 'very sensitive to vibrations' (FAA AC 43.13-1B), whereas locked-mandrel structural rivets are made for vibration (Wikipedia 'Rivet'). Plastic rivets can dry out and get brittle (Assembly Magazine). In 3D-printed or soft plastic parts the clamp may relax as the plastic creeps, loosening the joint ⚑ [uncertain: no test found; forum users report pop rivets loosening over time (V1 Engineering forum)]. *(⚑ parts need confirming)*
- **safety_notes**: Wear safety glasses when setting rivets: 'Safety glasses should be worn at all times' (Howmet Marson V-4 riveting tool sheet), and Harbor Freight's riveter manual says to wear safety goggles and heavy work gloves. The snapped mandrels can be ejected from the back of the tool (the V-4 has a 'Safety Cap ... to catch ejected mandrels'), and drilling rivets out throws metal shavings (This Old House). Hand riveters' 'scissor-like action may cause pinch injury', and loose rivets and snapped mandrels are small pieces that are a choking hazard for children, so collect and bin them (Harbor Freight manual). A 'high mandrel break' leaves 'a portion that sticks out of the rivet' (Design World), which can be sharp ⚑ [uncertain], and TWI lists rivets 'Protruding from the sheet metal surface, potentially creating a hazard' as a disadvantage. Because you can't see behind the panel, check for wires, pipes or fuel lines before drilling ⚑ [uncertain: general advice]. Don't rely on ordinary blind rivets in safety-critical or heavily loaded joints (FAA AC 43.13-1B). *(⚑ parts need confirming)*
- **common_failures**: 1) High mandrel break (stub left sticking out): material too thin or soft, total thickness below the rivet's minimum grip, wrong-size or badly drilled hole, or tool not held square; check grip range and hole size (Design World). 2) Pull-through (the mandrel head pops out, leaving a weak rivet): rivet too short for the thickness, hole oversize, not round or burred, or a gap between the sheets; use the right grip range and a deburred clearance hole (Design World; Assembly Magazine). 3) Sheets bulge apart or the joint is loose: hole too big, so the rivet swells between the sheets instead of behind them (Assembly Magazine), or the parts weren't clamped together while setting. 4) Cracked or split parts: brittle plastic or acrylic, a tight hole, or rivets too close to the edge; drill the correct size, keep at least 2 diameters from edges, use peel, soft-set or large-flange rivets or a washer (DIY Doctor; Hanson D13; V1 Engineering forum). 5) Crushed or dimpled hollow sections: riveting across an unsupported gap (Hanson D13). 6) Rattling rivet: the loose mandrel head in an open-end rivet shakes loose under vibration; use closed-end or locked-mandrel rivets (Assembly Magazine). 7) Corrosion round the rivet: dissimilar metals, e.g. aluminium rivets in copper or steel; match materials or use stainless rivets (POP catalogue p.14). 8) Mandrel won't break: tool too weak for the rivet (e.g. a small plier tool on large steel rivets) or worn jaws; use a lever or lazy-tong tool for big rivets (POP catalogue p.80) ⚑ [uncertain: tool-capacity cause inferred from the capacity charts]. 9) Removal goes wrong: the rivet spins while drilling and the hole grows or, in plastic, melts; centre-punch, use a bit the same size as the rivet at low speed, then punch out the rest (This Old House; V1 Engineering forum). *(⚑ parts need confirming)*
- **related**: 
  - Blind threaded fixings (rivet nut, well nut): set the same way from one side, but leave a screw thread so parts can be unscrewed later
  - Clinching (press joining without rivets): joins sheets permanently with no extra part, but needs a punch and die press and access to both sides
  - Self-clinching fastener (press-in nut or stud): a permanent nut or stud pressed into sheet metal; needs a press and both sides
  - Temporary sheet fastener (Cleco-type spring pin): holds sheets in line through the rivet holes while drilling, then is swapped for rivets
  - Push-in plastic rivet (fir-tree clip, push rivet): a plastic pin pushed in by hand with no tool; weaker, often removable, used for car trim
  - Heat staking (melted plastic rivet): a plastic post on a 3D print melted over into a rivet head; better for printed-to-printed joints
  - Ordinary screw joint (bolt and nut, machine screw): removable and stronger, but needs access to both sides
  - Self-tapping screw into plastic (thread-forming screw): also fitted from one side and removable, but can loosen or strip in thin sheet
  - Folded seam (hem, lock seam, Pittsburgh lock) and Tab-and-slot joint: fastener-free sheet-metal joints along edges
  - Spring-steel push-on fasteners (push nut, speed nut, U-nut): clip-on nuts for thin panels, removable
  - Solid rivet and semi-tubular rivet (not separate entries): hammered or squeezed with access to both sides; solid rivets are stronger and used where they can be reached (Wikipedia 'Rivet'; FAA AC 43.13-1B)
  - Leather and textile rivets: double-cap, tubular and split rivets set through leather, webbing and fabric with access to both sides; metal-sheet rivets stay in this entry

### Pictures, videos and models

- **links**: 
  - [Popnagel.gif (Heedless, Wikimedia Commons, 2016)](https://commons.wikimedia.org/wiki/File:Popnagel.gif): Animation of a pop rivet being set: the mandrel is pulled and the rivet's far end swells behind the sheets (used in Wikipedia 'Rivet'; the mandrel's weakened neck is not shown) *(licence: CC BY-SA 4.0)*
  - [Blind rivets before and after strain.jpg (Cjp24, Wikimedia Commons, 2017)](https://commons.wikimedia.org/wiki/File:Blind_rivets_before_and_after_strain.jpg): Photo of a blind rivet before use and after being pulled with a riveting plier, just before the mandrel breaks; the type used to fix French number plates *(licence: CC BY-SA 4.0)*
  - [Pop rivet gun.jpeg (Kcida10, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pop_rivet_gun.jpeg): A hand pop-rivet gun with a rivet loaded in its nose *(licence: CC0 (public domain dedication))*
  - [Blind Rivets: How they work! / Design Guidelines, page D13 (Hanson Rivet & Supply Co.)](https://www.hansonrivet.com/wp-content/uploads/pdf/D13-BLIND-DESIGN-GUIDELINES.pdf): Three-step cross-section of a blind rivet being set, plus diagrams of good and bad practice: edge distance (2D), plastic materials (soft-set, large flange, tri-grip), hard-to-soft joints with a washer, gap fastening, pivot fastening and channels *(licence: link only (all rights reserved))*
  - [What is a Pop Rivet? | Design Squad (Design Squad, YouTube)](https://www.youtube.com/watch?v=9aoXmzdSf_I): Short animation showing how a pop rivet clamps two pieces of material together (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [1/8" pop rivet washer (Dennis Judd, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/443823-18-pop-rivet-washer): A printed PLA backup washer about the size of a nickel for 1/8 in steel pop rivets, to spread the pressure in soft material such as cardboard sign boards. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Kayak T-slot mounting (Evan 'Taco' Bell, Printables)](https://www.printables.com/model/1153765-kayak-t-slot-mounting): A PETG T-slot accessory bracket riveted to the side of a sit-on kayak with 3/16 x 1 in marine pop rivets; an example of fixing a print to a hull you can't reach behind. Details read through the Printables public API; the URL appeared in search results. *(licence: CC0 / public domain (Creative Commons Public Domain))*
  - [Pop rivet cable ties (Punkgeek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/13876-pop-rivet-cable-ties): Printed cable-tie mounts designed to be fixed with a 1/8 in pop rivet, used in a Sonex homebuilt aircraft (the designer says 'Assume they can fail'). Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Filament Pop Rivets 6mm dia. x 3mm length (Make it Reality, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/919864-filament-pop-rivets-6mm-dia-x-3mm-length): An all-printed rivet (PETG) that pops into a 6 mm or 1/4 in hole and is locked by pushing a short piece of 1.75 mm filament into it, a printable cousin of the pop rivet; comes in horizontal and vertical print orientations to test strength. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A three-step cross-section through two sheets: (1) rivet pushed into the hole with the tool's jaws gripping the mandrel, (2) the mandrel's ball head pulled back so the tube swells and folds into a second head behind the sheets, (3) the mandrel snapped at its neck, with arrows showing the clamping force; beside it, small insets of a peel rivet's petals and a washer under the blind head for soft material, and the 2D edge-distance rule.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rivet
  - https://commons.wikimedia.org/wiki/Category:Blind_rivets
  - https://commons.wikimedia.org/wiki/File:Popnagel.gif
  - https://commons.wikimedia.org/wiki/File:Blind_rivets_before_and_after_strain.jpg
  - https://commons.wikimedia.org/wiki/File:Pop_rivet_gun.jpeg
  - https://commons.wikimedia.org/wiki/File:Blindnieten.JPG
  - https://commons.wikimedia.org/wiki/File:Blind_rivet_notches.jpg
  - https://commons.wikimedia.org/wiki/File:1990s_standard_open_end_blind_rivets_showing_different_angles.jpg
  - https://commons.wikimedia.org/wiki/File:OscarRivet.jpg
  - https://www.carona-reuter.com/downloads/2011/emhart_tucker/POP_GB.pdf
  - https://cdn.standards.iteh.ai/samples/29619/49f14fd35d504f5eb7f34d3fa5cff250/ISO-15977-2002.pdf
  - https://www.hansonrivet.com/rivets/blind-rivet-design-guide/
  - https://www.hansonrivet.com/wp-content/uploads/pdf/D13-BLIND-DESIGN-GUIDELINES.pdf
  - https://data.ntsb.gov/Docket/Document/docBLOB?ID=40266557&FileExtension=.PDF&FileName=Excerpt+from+Advisory+Circular+%28AC%29+43.13-1B+Change+1+dated+September+27%2C+2001.-Master.PDF
  - https://www.assemblymag.com/articles/84047-assembly-handbook-blind-riveting
  - https://www.designworldonline.com/what-are-the-typical-riveting-faults-and-how-can-they-be-avoided/
  - https://www.twi-global.com/technical-knowledge/faqs/pop-rivet
  - https://americas.bossard.com/products/sd62bs-by-pop.html
  - https://www.mcmaster.com/products/blind-rivets/
  - https://www.thisoldhouse.com/tools/22219098/how-to-remove-rivets
  - https://www.thisoldhouse.com/gutters/how-to-install-rain-gutters
  - https://www.diydoctor.org.uk/projects/Poprivets.htm
  - https://forum.v1e.com/t/pop-rivets/39578
  - https://manuals.harborfreight.com/manuals/94000-94999/94100-792363941006.pdf
  - https://www.hfsindustrial.com/us/pub/media/resources/images/image/h/o/howmet-v-4-instruction-sheet.pdf
  - https://www.youtube.com/watch?v=9aoXmzdSf_I
  - https://www.youtube.com/watch?v=_nbMCYGIxq8
  - https://www.youtube.com/watch?v=WlZwaN68HJE
  - https://api.printables.com/graphql/ (models 443823, 1153765, 13876, 919864, 547516)

### Finder tags

- **connects**: boards or sheet
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, making_tips_3d_printing, safety_notes

## 298 Reciprocal frame (self-supporting stick bridge)

*interlocking joints & joinery.* Short sticks or beams laid so each one rests on the next in a closed ring, holding each other up with no joints or fixings, as in the stick 'Leonardo bridge'

### What it is

- **plain_name**: Sticks or beams laid in a ring so that each one rests on the next and holds up the one before. Together they prop each other up with no post in the middle and, in the simplest version, no glue, nails or string, like the woven popsicle-stick 'Leonardo bridge'
- **term**: Reciprocal frame (self-supporting structure of mutually supporting beams)
- **aliases**: 
  - reciprocal frame, RF, reciprocal frame structure, reciprocal framework, reciprocal roof (Wikipedia 'Reciprocal frame'; STRUCTURE magazine)
  - Mandala roof (Wikipedia 'Reciprocal frame')
  - nexorade (term used by Baverel; STRUCTURE magazine)
  - Hebelstabwerk (German; title of Thönnissen's book cited by STRUCTURE magazine)
  - Leonardo bridge, da Vinci bridge, Leonardo da Vinci's self-supporting bridge, da Vinci popsicle-stick bridge (Wikipedia 'Da Vinci's self supporting bridge'; Science City)
  - Da Vinci dome, a dome of sticks in reciprocal units (Song et al., 'Reciprocal Frame Structures Made Easy', 2013)
  - the three-knife puzzle: three knives that hold each other up in the air, first published in 1624 (ProofWiki, citing van Etten)
  - not to be confused with the Leonardo Bridge Project's 'da Vinci Bridge' in Ås, Norway, a laminated-timber arch based on Leonardo's Golden Horn design (Wikipedia 'Leonardo bridge')
- **family**: interlocking joints & joinery
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A reciprocal frame is a closed ring of three or more sticks or beams in which each one rests on the next and carries the one before. Together they span a roof or a gap with no central support, held by their own weight and friction, or by simple ties.
- **complexity**: A few parts, up to a large assembly: at least three similar straight members (sticks, poles or beams) laid in a closed ring, called an RF unit; big roofs, domes and bridges repeat the unit as a grid (Wikipedia; STRUCTURE magazine; Song et al. 2013). Optional extras: notches, ties (rope or wire), nails or bolts at the crossings, a wall or ring beam for the outer ends, and a temporary central prop while building (Wikipedia; The Year of Mud).
- **how_it_works**: Each member is supported at its outer end (on the ground, a wall or a riverbank), and its inner end rests on the middle of the next member, while the member before rests on it in turn. So every member both supports, and is supported by, its neighbours, and none is more important than the others (STRUCTURE magazine; Wikipedia). A load anywhere is shared round the whole ring to the outer supports, mainly through bending and shear in the members (STRUCTURE). In the stick 'Leonardo bridge' the sticks are woven over and under each other, and their own weight and any load press the crossings together, so friction holds them with 'no nails, dowels, or ropes' (Wikipedia 'Da Vinci's self supporting bridge'); STRUCTURE notes that Leonardo's timbers had no cuts or notches. Because the ring is closed, removing one member usually makes the whole frame collapse (STRUCTURE; Wikipedia).

### Finder attributes

- **job**: 
  - join and hold: joins short members into a roof, floor, bridge or dome that spans further than any single member could (STRUCTURE magazine; Wikipedia)
  - lock, and release by hand: a friction-only stick bridge is assembled without tools and comes apart when one piece is lifted out (Wikipedia 'Da Vinci's self supporting bridge')
- **motion**: none: a static structure that only works while every member stays in place
- **degrees_of_freedom**: 0 when assembled and loaded: each member is trapped between the member it rests on, the member resting on it and its outer support. A lightly loaded stick bridge is only held by friction, so a knock or a sideways push can free the members (Science City).
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): in the Leonardo stick bridge, extra weight presses the crossings together harder, so 'the more weight on the bridge, the stronger it becomes' (Open Culture; Wikipedia: held together by compressive forces from its own weight and friction)
  - quick-release: Leonardo's bridge was meant to be set up in minutes and 'collapsed by removing any single piece' (Wikipedia 'Da Vinci's self supporting bridge', citing Geddes 2016)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the over-and-under weave traps each stick, and in timber roofs notches stop members sliding off each other (Wikipedia; STRUCTURE magazine; The Year of Mud)
  - friction or clamping (force-fit): self-weight and load press the crossings together; friction-only bridges have no other fixing, and roofs add wire or rope lashings, nails or bolts at the crossings (Wikipedia; The Year of Mud; Milkwood)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for friction-only stick bridges and models, which come apart when a piece is lifted out (Wikipedia). Removable for lashed or bolted timber roofs, but only with the frame propped first, because taking out one member can drop the rest (STRUCTURE magazine) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: effectively unlimited for loose sticks and printed or wooden model kits; a few times for lashed or bolted timber frames; once where members are notched to fit and nailed ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: None for a friction stick bridge or model: 'no tools are needed for assembly' (Wikipedia 'Da Vinci's self supporting bridge'). For a roof: a saw, a chisel or axe for notches, heavy-gauge wire or rope for lashing, a drill and long spike nails or bolts for secondary rafters, and a braced temporary central prop called a 'charlie stick' (The Year of Mud; Milkwood).
- **seal**: none
- **load**: Light for stick and printed models, up to heavy for timber roofs and footbridges. Strong under downward loads spread over the frame. Weak against sideways pushes, which can topple a stick bridge (Science City: 'lateral force (from the sides) may cause it to topple'), and against vibration near its natural frequency, which makes a friction bridge shake itself apart (Wikipedia, citing Bucolo et al. 2020). The members work mainly in bending and shear, so a reciprocal frame deflects more than a conventional structure of similar span (STRUCTURE magazine). A simple closed ring 'is only as strong as the weakest element' (Wikipedia). A model of 77 wooden sticks 3 mm thick could carry a book (Song et al. 2013).
- **adjustable**: Only while building: the rise of the frame, the size of the central opening and the span are set by member length, number of members, where each member rests on the next (engagement length) and how high the first member is propped (STRUCTURE magazine; Song et al. 2013; The Year of Mud). Once the ring is closed it can't be adjusted without propping it and taking it apart.
- **play_and_precision**: not applicable for locating parts. When building, small errors add up round the ring: the last member has to go on top of the one before and under the first, which can be a very tight squeeze, and uneven spacing gives a lopsided central opening (The Year of Mud). Precisely cut notches give firmer contact at the crossings (STRUCTURE magazine).
- **access_needed**: not applicable: members are laid on top of each other from above; full-size roofs are built from the wall top or a ladder round a temporary central prop
- **materials**: Mostly timber: roundwood poles, sawn beams or glulam (STRUCTURE magazine; Wikipedia). Steel has also been used, e.g. tubular steel in the Rokko-Shidare observatory, and in principle concrete (STRUCTURE). For models: jumbo popsicle sticks (Science City), 3 mm wooden sticks (Song et al. 2013), or 3D-printed PLA beams (Printables 'Exercise model for reciprocal frameworks'). Any stiff, straight member with enough friction where members cross will work ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy for stick or printed models: you only need identical sticks, a flat stable surface and patience (Science City). Moderate to hard full size: shaping the overall form needs geometry or parametric tools, building needs a braced temporary prop, and the outward push on the walls must be resisted (STRUCTURE magazine; The Year of Mud; Wikipedia).

### Making it

- **processes**: 
  - woodwork: roundwood poles or sawn timber for roofs and footbridges; craft sticks, pencils or dowels for models (Wikipedia; The Year of Mud; Science City)
  - 3D print (FDM): identical printed sticks or beams for Leonardo bridges and reciprocal grids (Printables models 685468, 844202, 485402, 906462)
  - CNC: precise notches cut with 3D cutting tools for good contact in timber reciprocal roofs (STRUCTURE magazine)
  - laser cut: flat notched sticks for models ⚑ [uncertain]
  - off-the-shelf part: craft (popsicle) sticks, dowels, poles *(⚑ parts need confirming)*
- **print_in_place**: no: each member is printed separately and the ring is assembled by hand. The printable models are printed flat without supports (Printables 'Exercise model for reciprocal frameworks').
- **making_tips_3d_printing**: 1) Print the sticks flat with no supports. One educational reciprocal-grid model used PLA, 0.3 mm layers and 15% infill; its gaps are small enough to bridge, and flipping the beams helps if bed adhesion is poor, because the end gaps start as small islands (Printables 'Exercise model for reciprocal frameworks', CC BY-NC). 2) Print plenty of identical pieces: Felix van der Spek's Leonardo bridge needs part 1 ten times and part 2 five times, and can be scaled to any size (Printables 'Leonardo da Vinci's bridge'). 3) Proportions: for the Leonardo bridge, a height-to-length ratio of about 0.30 was the best compromise between efficiency and ease of crossing (Lamberti et al. 2024, Ciência e Natura). 4) Shallow notches or saddles where members cross keep smooth printed sticks from sliding, but notches weaken a member, so keep them shallow (STRUCTURE magazine discusses notches in timber) ⚑ [uncertain]. 5) Build round a temporary prop, such as a cup or block holding the first stick at the right height, then slide the last stick over the previous one and under the first, as full-size builders do (Wikipedia; The Year of Mud). 6) Choose clockwise or anticlockwise and keep to it; the exercise model shows both, plus a checkerboard mix of the two (Printables 906462). 7) For a model that stays assembled on display, PLA beams under constant load may sag over time; a permanent model can be glued ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: For models: jumbo craft (popsicle) sticks, pencils, straws, dowels or skewers (Science City). Full size: roundwood poles, sawn timber or glulam beams (Wikipedia; STRUCTURE magazine), heavy-gauge wire, rope or sisal lashing, long spike nails or bolts for the crossings, and a forked pole as the temporary prop (The Year of Mud; Milkwood). Ready-made 'da Vinci bridge' STEM kits are sold ⚑ [uncertain]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - At least three members are needed to close the basic ring, the RF unit (Wikipedia; STRUCTURE magazine; Song et al. 2013).
  - Leonardo bridge: for 4-7 m wooden bridges, a height-to-length ratio of about 0.30 was the best compromise; taller is more efficient but harder to walk over (Lamberti et al. 2024, Ciência e Natura).
  - Roofs work best at low pitch, where little outward thrust reaches the ring beam and most of the load goes straight down (Wikipedia).
  - Engagement length (how far along each member the next one rests) controls the balance of shear and bending and, with member length, the rise of the frame. Eccentricity (the vertical offset between member centrelines at a crossing) also matters: the smaller it is, the more the frame behaves like an ordinary beam grid (STRUCTURE magazine).
  - Each connection joins only two members. Notches give good contact but reduce section strength, so check shear there (STRUCTURE magazine).
  - Build round a temporary central support holding the first member; the last member goes on top of the previous one and under the first; tie the crossings, then remove the support (Wikipedia). Leave the prop a little long, because the roof may settle when it comes out (The Year of Mud).
  - Add redundancy, such as doubled rafters, several interconnected units or stiffer joints, so that one failed member doesn't bring down the whole frame (STRUCTURE magazine; Wikipedia gallery).

### When to use it

- **everyday_examples**: 
  - The woven popsicle-stick 'Leonardo da Vinci bridge' built in school STEM sessions and at science centres (Science City; Wikipedia)
  - The old table puzzle of making three knives hold each other up between glasses, first published in 1624 (ProofWiki, citing van Etten's Récréations Mathématiques)
  - Turf-roofed roundhouses whose roof poles spiral round a central opening, such as That Roundhouse in Pembrokeshire, Wales (Wikipedia 'That Roundhouse'; Wikipedia 'Reciprocal frame' gallery)
  - Self-supporting timber footbridges built to Leonardo's design, e.g. in Karby, Denmark, and in Freiburg, Germany (Wikimedia Commons)
- **when_to_use**: Use it when you want to span a space with members shorter than the span: a roof over a round building, a garden pavilion or a small footbridge (STRUCTURE magazine; Wikipedia). It is a good choice when you have only short or reclaimed timber, since current research uses short re-used timbers (STRUCTURE). Use it when you want something that goes up quickly with simple two-member connections; a complex frame was put up in Copenhagen in 15 minutes by hand (STRUCTURE). It also suits a temporary or demonstration structure that assembles and comes apart without tools or fixings, as in Leonardo's military bridge, STEM lessons and printed models (Wikipedia; Science City). It is also chosen for its striking spiral look (STRUCTURE).
- **when_not_to_use**: Don't rely on a friction-only frame where it can be knocked, pushed sideways or shaken. It topples under side loads and can come apart under vibration (Science City; Wikipedia), so tie or bolt the crossings, or choose a truss, an arch or a conventional beam-and-post structure. Avoid a single closed ring where failure of one member would be dangerous, because the whole frame collapses; add redundancy or use a structure with alternative load paths (STRUCTURE magazine; Wikipedia). Avoid it where deflection must be small, because reciprocal frames deform more than similar-span conventional structures (STRUCTURE). For joining just two or three members at one point, use a cross-halving or Japanese interlocking joint instead.
- **environment_limits**: Vibration: a friction-held Leonardo bridge 'tends to disassemble when subjected to frequencies close to its resonant frequency' (Wikipedia, citing Bucolo et al. 2020). Wind and sideways knocks can topple light stick structures (Science City). Long-term load: timber creep must be allowed for, and deformations are larger than in conventional frames because there are many timber connections (STRUCTURE magazine). Wet, icy or very smooth surfaces should reduce friction at the crossings and at the feet ⚑ [uncertain]; STRUCTURE notes that ordinary friction on a paved street was enough to stabilise one frame. Outdoor timber and lashings need the usual protection from rot ⚑ [uncertain]. Printed PLA models soften in hot sun and can creep under constant load ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Collapse is the main hazard: in a simple closed ring all members depend on each other, so removing or breaking one usually brings the whole frame down (STRUCTURE magazine; Wikipedia). Never stand on or under a friction-only frame, and treat full-size Leonardo bridges and roofs as engineered structures needing proper design (STRUCTURE: robustness and progressive collapse are 'essential issues'). Roof building involves heavy poles (roughly 5 in diameter in The Year of Mud's roof) lifted overhead: brace the temporary prop and have someone watch it while the first rafters go up (The Year of Mud). Reciprocal roofs push outwards on their walls, especially at steeper pitches, so walls need a ring beam or buttressing (Wikipedia; a reader comment on The Year of Mud). Small models are low risk, though sticks spring apart when the frame collapses.
- **common_failures**: The whole frame collapses when one member is removed, slips or breaks; add ties, notches or redundant members (STRUCTURE magazine; Wikipedia). It topples or shakes apart from a sideways knock or vibration; move the bridge as little as possible once built, and tie the crossings for anything permanent (Science City; Wikipedia). The last member won't fit because of accumulated error; lever it into place with extra hands (The Year of Mud). The central opening is lopsided because spacing at the wall was uneven; use a guide disc for the opening and space the rafters evenly (The Year of Mud). Walls get pushed out by the roof's outward thrust; keep the pitch low and resist the thrust with a ring beam (Wikipedia; The Year of Mud reader comment). There is excessive sag over time from timber creep and soft connections (STRUCTURE). Notches cut too deep weaken members in shear (STRUCTURE). Members slide off each other in 'all-down' or mixed arrangements, which are used to follow a curved surface; these are not self-supporting and the rods must be tied (Song et al. 2013).
- **related**: 
  - Cross-halving slot joint (egg-crate joint): two members interlock at a single notched crossing; a reciprocal frame shares load round a ring of many members resting on each other
  - Japanese interlocking joints: lock two or three members at one node with complex cut shapes; reciprocal frame crossings are simple two-member contacts
  - Zollinger frame (lamella roof): short timbers joined at their mid-points in one plane to form diamonds; STRUCTURE magazine calls it a type of reciprocal frame with a more direct, compression-dominated load path
  - Arch, as in the 'da Vinci Bridge' in Ås, Norway: carries load in compression along a curve and needs strong abutments, whereas reciprocal frame members work mainly in bending
  - Tab-and-slot joint and finger joint: ways to make a printed or laser-cut stick model permanent instead of friction-held
  - Tensegrity: also self-supporting, but its struts don't touch each other and are held in place only by tensioned cords or chains, whereas reciprocal frame members rest on each other
  - Pole lashings: square, diagonal or shear lashings that tie the crossings of a pole reciprocal frame so they can't slip apart

### Pictures, videos and models

- **links**: 
  - [Three stick reciprocal frame.JPG (Wikimedia Commons, by PeterEastern, 2009)](https://commons.wikimedia.org/wiki/File:Three_stick_reciprocal_frame.JPG): Photo of the simplest reciprocal frame: three sticks, each resting on the next in a closed triangle *(licence: CC BY-SA 3.0)*
  - [Longer reciprocal frame bridge.JPG (Wikimedia Commons, by PeterEastern, 2009)](https://commons.wikimedia.org/wiki/File:Longer_reciprocal_frame_bridge.JPG): Photo of a longer stick bridge built from repeated reciprocal units *(licence: CC BY-SA 3.0)*
  - [Leonardo da Vinci bridge Karby.jpg (Wikimedia Commons, by Cntrading, built by Martin Benthin, 2011)](https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_bridge_Karby.jpg): Full-size self-supporting timber bridge built to Leonardo's design in Karby, Denmark *(licence: Free Art License (FAL))*
  - [Pont autoportant de Vinci.png (Wikimedia Commons, Leonardo da Vinci, Codex Atlanticus)](https://commons.wikimedia.org/wiki/File:Pont_autoportant_de_Vinci.png): Leonardo's own sketch of the self-supporting bridge from the Codex Atlanticus *(licence: Public domain)*
  - [The MAGIC behind Da Vinci's Self Supporting Bridge! (YouTube, Sabin Civil Engineering)](https://www.youtube.com/watch?v=5l4I-caLoxY): Animated explanation of how the woven bridge locks itself under load (title and channel checked via YouTube oEmbed; summarised by Open Culture) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Exercise model for reciprocal frameworks (alecs.form, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/906462-exercise-model-for-reciprocal-frameworks): Identical printable beams for building clockwise, anticlockwise and mixed reciprocal grids, with supports that lift the grid to show it carrying load; PLA, no supports. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Leonardo da Vinci's bridge (Felix van der Spek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/685468-leonardo-da-vincis-bridge): Printable stick set for the self-supporting bridge (part 1 x10, part 2 x5) with a storage box; scale to any size. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Leonardo da Vinci's self-supporting bridge (Gordyt47, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/844202-leonardo-da-vincis-self-supporting-bridge): Printable self-supporting bridge model, printed in PLA at 0.2 mm with 15% infill and no supports. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Sticks to build Da Vinci's bridge (Kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/485402-sticks-to-build-da-vincis-bridge): Simple printable sticks for building Leonardo's bridge or other self-supporting shapes. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Da Vinci Popsicle Stick Bridge (Science City at Union Station, Kansas City)](https://sciencecity.unionstation.org/2020/04/06/da-vinci-popsicle-stick-bridge/): Science-centre activity: weave jumbo popsicle sticks into a self-supporting bridge with no fasteners or glue *(licence: link only)*
- **diagram_idea**: Top view of three sticks forming a pinwheel triangle, each stick's inner end resting on the middle of the next, with arrows showing a weight at the centre being passed round the ring to the three outer supports; beside it, a side view of the woven Leonardo stick bridge with its over-and-under crossings highlighted.
- **sources**: 
  - https://en.wikipedia.org/wiki/Reciprocal_frame
  - https://en.wikipedia.org/wiki/Da_Vinci's_self_supporting_bridge
  - https://en.wikipedia.org/wiki/Leonardo_bridge
  - https://en.wikipedia.org/wiki/That_Roundhouse
  - https://www.structuremag.org/article/reciprocal-frame-structures/
  - http://www.cse.cuhk.edu.hk/~cwfu/papers/recipframe/download/paper.lowres.pdf
  - https://periodicos.ufsm.br/cienciaenatura/article/view/86798
  - https://www.openculture.com/2024/12/the-ingenious-engineering-of-leonardo-da-vincis-self-supporting-bridge-explained.html
  - https://sciencecity.unionstation.org/2020/04/06/da-vinci-popsicle-stick-bridge/
  - https://theyearofmud.com/2008/11/26/how-to-build-a-reciprocal-roof-frame/
  - https://www.milkwood.net/2013/07/15/roundhouse-build-making-a-reciprocal-roof/
  - https://proofwiki.org/wiki/Arrange_3_Knives_to_Rest_on_Tips_of_Handles
  - https://commons.wikimedia.org/wiki/File:Three_stick_reciprocal_frame.JPG
  - https://commons.wikimedia.org/wiki/File:Longer_reciprocal_frame_bridge.JPG
  - https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_bridge_Karby.jpg
  - https://commons.wikimedia.org/wiki/File:Pont_autoportant_de_Vinci.png
  - https://commons.wikimedia.org/wiki/File:Da_vinci_bridge.jpg
  - https://www.youtube.com/watch?v=5l4I-caLoxY
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
- **tools**: none, drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: woodwork
- **adjustable**: partly
- **removability**: tool-free quick release
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, materials, off_the_shelf_parts, processes, removability, reuse_cycles

## 299 Housing and rebate joints (dado, rabbet)

*interlocking joints & joinery.* A groove cut across a board (housing or dado) or a step cut along its edge (rebate or rabbet) that another board fits into, as in bookshelves and cabinet backs

### What it is

- **plain_name**: A shallow channel cut across one board (a housing or dado), or a step cut along its edge or end (a rebate or rabbet), that the end or edge of another board drops into. Shelves sit on the ledge, and back panels and glass sit flush in the recess
- **term**: Housing (dado) and rebate (rabbet) joints
- **aliases**: 
  - housing, housing joint, trench (UK and Europe); dado, dado joint (US and Canada) (Wikipedia 'Dado (joinery)'; DT Online 'Housing Joint')
  - through housing or through dado (open at both ends); stopped housing, stopped dado or blind dado (hidden at the front) (Wikipedia; DT Online)
  - dovetail housing, dovetailed dado; the same as a sliding dovetail (DT Online)
  - half dado, rabbet-and-dado joint, dado-and-rabbet (Wikipedia 'Dado (joinery)'; Rockler 'Making Rabbet Joints')
  - rebate (UK), rabbet (US), rebate joint, rabbet joint, rebated butt joint, corner lap joint, shouldered corner (Wikipedia 'Rabbet'; DT Online 'Corner Lap Joint'; Rockler)
  - single rabbet, double rabbet, mitred rabbet, dovetail rabbet (Rockler)
  - shiplap: overlapping rabbets on neighbouring boards (Wikipedia 'Rabbet'; Rockler)
  - glazing rebate, the step in a window frame or glazing bar that takes the glass and putty (Wikipedia 'Rabbet')
  - groove: the same three-sided channel cut along the grain instead of across it (Wikipedia 'Dado (joinery)')
- **family**: interlocking joints & joinery
- **other_families**: locating & alignment
- **one_liner**: A housing (dado) is a three-sided channel cut across a board, and a rebate (rabbet) is a two-sided step along an edge or end. Another board's end or edge sits in it, which lines the parts up and gives a ledge to carry load; glue, nails or screws usually stop it pulling out.
- **complexity**: A single feature cut into one part, or into both parts in a rabbet-and-dado joint. The mating board is usually left square-ended or given its own rabbet, and the joint is normally glued and/or nailed, screwed or pinned (Rockler 'Making Rabbet Joints'; Wikipedia 'Rabbet').
- **how_it_works**: The floor and walls of a housing, or the shoulder of a rebate, give the mating board a ledge to bear on and sides that stop it sliding out of line, so a shelf's weight is carried by the ledge rather than by glue or screws alone; the housing also stops the shelf cupping (Rockler 'Using Your Router to Cut Dado Joints'). Neither shape stops the boards pulling apart: 'Only glue or fasteners can do that', and because most of the glue faces are end grain, the glue is weak (Rockler). A rebate hides the end grain of the mating board, gives a positive stop during assembly, and offers more glue and nailing surface than a plain butt joint (Rockler 'Making Rabbet Joints'; DT Online 'Corner Lap Joint'). Cutting the housing's sides at a dovetail angle stops the shelf pulling out sideways (DT Online).

### Finder attributes

- **job**: 
  - join and hold: fixes shelves and partitions into cabinets and bookcases, joins case tops, bottoms and drawer fronts, and holds back panels, glass and pictures (Wikipedia; DT Online; Rockler)
  - line parts up exactly: the channel or step locates the parts during glue-up so they can't slide out of position (Rockler 'Making Rabbet Joints')
- **motion**: none: a fixed joint once glued or fastened (the board only slides into the channel during assembly)
- **degrees_of_freedom**: 1 before fixing: a shelf in a through housing can still slide along the channel and lift out, and a back panel can lift out of its rebate. 0 once glued, nailed or screwed (Rockler).
- **special_behaviour**: 
  - self-aligning or self-centring: the channel or step positions the parts during assembly; Rockler calls the rabbet-and-dado 'a good rack-resistant joint that assembles easily because both boards are positively located'
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the ledge carries the load and the walls stop sideways slip; a dovetail housing also locks against pulling out (Rockler; DT Online)
  - material bond (glue, solvent or melting): usually glued, but most faces are end grain, which glues poorly (Rockler)
  - friction or clamping (force-fit): brads, finish nails or screws through the joint, plus a snug fit (Rockler; Wikipedia 'Rabbet': 'Nails and screws can be added to help increase the overall strength')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent when glued. Semi-permanent when only nailed or pinned, since pulling nails can damage the parts. Removable when a back panel or shelf sits in its rebate or housing held only by screws ⚑ [uncertain]. *(⚑ parts need confirming)*
- **reuse_cycles**: once when glued; a few times when only screwed ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: Power: a router with a straight or rabbeting bit plus a guide fence or shop-made T-square (Rockler); a table saw with a dado set (stacked or wobble type) or several ordinary passes (Wikipedia 'Dado set'; Wikipedia 'Rabbet'); a router table with a straight or slot-cutting bit (Fine Woodworking, Latta); a spindle moulder, or a jointer with a rabbeting ledge (Wikipedia 'Rabbet'). By hand: marking knife, try square, marking gauge, tenon saw, chisel and mallet, plus a router plane, rebate plane or shoulder plane (DT Online; Wikipedia 'Rabbet'). For assembly: glue, clamps, and brads, nails or screws.
- **seal**: none: the joint itself doesn't seal. In a window, the glazing rebate holds the glass and the putty does the sealing (Wikipedia 'Rabbet').
- **load**: Medium. Strong when carrying downward shelf loads, which bear on the ledge, and good against sliding (shear). A housed fixed shelf is stiffer than a loose shelf because the case sides hold it at a rigid right angle, and fastening the shelf to the case back adds more stiffness (Popular Woodworking, Tom Caspar). Weak in tension (pull-out) unless it is well glued, dovetailed or fastened (Rockler; DT Online). Wikipedia notes that rabbet joints 'are easy to construct, but are not as strong as some other joints'. A rabbet-and-dado joint resists racking well (Rockler).
- **adjustable**: no once glued; the fit is adjusted while cutting, by making two passes, adding shims or using undersized bits (Rockler 'Getting Dadoes and Plywood Thickness to Match')
- **play_and_precision**: small to none if cut correctly: 'a snug fit of mate to dado is essential for a strong joint', and 'Glue won't compensate for a rough, ill-sized dado' (Rockler). Sheet goods are the usual trap: '3/4 in' plywood often measures close to 1/32 in thin, and thickness may vary by up to 3/64 in, so a cut at the nominal size can be sloppy (Rockler). A rabbet-and-dado joint copes with uneven plywood, because the rabbet can be cut to fit a standard dado (Rockler).
- **access_needed**: not applicable: the board is pushed into the channel or onto the step during assembly, and nothing needs to be reached from behind
- **materials**: Usually wood: solid timber, plywood, MDF and particleboard (Wikipedia: 'machinable material, usually wood'; Rockler). Plywood is about half as stiff as average hardwood and particleboard or MDF about a quarter, which affects shelf spans (Popular Woodworking). The same shapes appear in 3D-printed and CNC-cut boxes, e.g. a box generator that makes rabbet-jointed boxes for both 3D printers and CNC machines (Printables 'Slide Top Rabbet Box').
- **maker_difficulty**: easy to moderate: a rabbet is 'one of the first joinery cuts that new woodworkers try' (Rockler), and dados are straightforward with a router and a straight guide fence (Rockler). Hand-cut housings need careful marking, sawing and paring (DT Online), and stopped housings need an extra notch in the shelf (DT Online).

### Making it

- **processes**: 
  - woodwork: router with a fence, router table, table saw with a dado set, or hand saw, chisel and router or rebate plane (Rockler; Wikipedia; DT Online)
  - CNC: a CNC router can pocket housings and rebates in sheet material; inside corners come out rounded to half the cutter diameter, so square the ends of stopped housings with a file or chisel, or add dogbones (Fablab RUC)
  - 3D print (FDM): printed boxes and enclosures with rabbeted edges and slots that locate panels; also printed jigs for cutting dados (Printables 185416 and 284328)
  - laser cut: a laser cuts right through sheet, so through-slots (tab-and-slot joints) usually take the place of blind housings ⚑ [uncertain]
  - off-the-shelf part: ready-made picture-frame and glazing mouldings come with the rebate already cut ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the parts are made separately and then pushed or glued together (e.g. the printable rabbet box is assembled and glued; Printables 'Slide Top Rabbet Box')
- **making_tips_3d_printing**: 1) Use printed slots and rebates to hold flat panels (plywood, acrylic, MDF) in printed corner pieces, frames and enclosures: the panel edge sits in the channel and is located on three sides. 2) Size the channel from the measured panel thickness, not the nominal one: '3/4 in' plywood is often about 1/32 in thin (Rockler). Then add clearance; Hubs gives a typical interlocking-joint tolerance of 0.5 mm for FDM and 0.2 mm for SLA and SLS. Print a short test piece first ⚑ [uncertain]. 3) For a sliding lid in a rebate, the 'Slide Top Rabbet Box' generator widens the receiving slot rather than thinning the lid: its default is 4% of the material thickness, e.g. 0.32 mm for 8 mm walls (Printables 185416, CC BY). 4) Add a small radius or chamfer to entry edges; Hubs notes that 'adding a small radius to part edges assists joint assembly and reduces stress concentrations'. 5) Orient the print so the channel opens upward or along the build plate, so its roof doesn't need supports ⚑ [uncertain]. 6) Printed shop aids help with wooden dados and rabbets: a table-saw dado-width jig (Printables 'Dado Jig', CC BY), height gauges for dado stacks and router bits (Printables 85931, which notes that elephant's foot on the first layer throws off the depth), and a printable rebate plane that holds a 3/4 in chisel, printed in PETG with 40% gyroid infill and 5 perimeters because PETG wore better than PLA (Printables 1802612). 7) Printed parts are weak at end-grain-like layer boundaries in the same way wood is at end grain, so don't rely on a glued printed housing alone to resist pull-out; add a screw or a dovetail shape ⚑ [uncertain]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Router bits: straight bits with short flutes (dados seldom exceed 1/2 in deep) and plunge-cutting ends for stopped dados; 'undersized' plywood bits of 23/32 in, 15/32 in (or 31/64 in) and 15/64 in for nominal 3/4, 1/2 and 1/4 in plywood; bearing-guided rabbeting bit sets with interchangeable bearings; dovetail bits for dovetail housings (Rockler). Table-saw dado sets: a stacked dado set (two outer blades, chippers and shims) or a wobble dado; micro-adjustable sets such as Freud Dial-A-Width (brand) (Wikipedia 'Dado set'; Rockler). Hand tools: router plane, rebate (rabbet) plane, shoulder plane (Wikipedia 'Rabbet'; DT Online). Safety: featherboards ('combs') and push pads for table-saw dadoing and rabbeting (OSHA 1910.213; Fine Woodworking).
- **rules_of_thumb**: 
  - Housing width = the thickness of the shelf or partition it takes (DT Online), cut to the board's actual thickness (Rockler).
  - Housing depth: no more than one-third of the timber thickness (DT Online). A dado needn't be deep: 1/8 in is enough in solid wood and 1/4 in in plywood, MDF or particleboard; 1/4 in is 'about as deep as a dado ever needs to be' (Rockler).
  - Rebate (single rabbet joint): width = the thickness of the mating board, for a flush fit; depth = one-half to two-thirds of its width; the deeper it is, the less end grain shows (Rockler 'Making Rabbet Joints').
  - Rabbet-and-dado: the dado can be a single saw kerf, 'no deeper than one-third the board's thickness', with the mating rabbet cut to fit (Rockler).
  - Plywood thickness: nominal 3/4 in is often close to 1/32 in under, and tolerance is up to 3/64 in; use undersized bits (23/32 in, 15/32 in) or a two-pass cut (Rockler).
  - Router: remove no more than about 1/4 in per pass, and feed so the bit pulls the router against the fence (left to right when pushing along a fence) (Rockler).
  - Shelf loads: books can weigh up to 50 lb per running foot, and a wide hardwood shelf 3/4 in thick carrying a heavy load should be no longer than about 36 in. Plywood is about half as stiff as average hardwood and particleboard or MDF about a quarter (Popular Woodworking, Tom Caspar).
  - End grain glues poorly, so rabbeted case corners that involve end grain are usually nailed or screwed as well (Rockler).

### When to use it

- **everyday_examples**: 
  - Fixed shelves in a bookcase or kitchen cabinet sitting in housings (dados) cut across the sides (Wikipedia 'Dado (joinery)'; DT Online)
  - The thin back panel of a wardrobe, bookcase or cabinet set into rebates along the back edges (Wikipedia 'Rabbet'; Fine Woodworking)
  - A picture frame, whose rebate holds the glass, picture and backing (Wikipedia 'Rabbet')
  - Window frames and glazing bars with a rebate for the glass and putty, and shiplap cladding (Wikipedia 'Rabbet'; Rockler)
- **when_to_use**: Use a housing (dado) to fix shelves, dividers and partitions in bookcases, cabinets and boxes: it carries the shelf on a ledge, keeps it straight and lines the parts up during glue-up (DT Online; Rockler). A fixed, housed shelf is also stiffer than a loose one (Popular Woodworking). Use a stopped housing when the front edge must look clean (DT Online). Use a rebate (rabbet) to let in a back panel, glass or a box bottom or top, to join case corners and drawer fronts simply, or to hide end grain and plywood edges (Wikipedia 'Rabbet'; Rockler; DT Online). Use rabbet-and-dado in plywood casework, where it assembles easily, resists racking and copes with uneven sheet thickness (Rockler).
- **when_not_to_use**: Don't rely on a plain housing or rebate where the joint is pulled apart (in tension), for example a shelf that the sides could spread away from, or a drawer front that gets yanked. Use a dovetail housing or sliding dovetail, a dovetail, or a mortise and tenon, or add screws (Rockler; DT Online; Popular Woodworking). For adjustable shelves use shelf pins or supports instead of fixed housings. For flat-pack furniture that must come apart, use knock-down fittings such as cam locks and cross dowels. For joining boards edge to edge into a wide panel, use tongue and groove, dowels or biscuits. For laser-cut sheet, use tab-and-slot through-slots. Where a hidden, very strong corner is wanted, a dovetail or finger joint holds better than a nailed rebate (Wikipedia 'Rabbet': 'not as strong as some other joints').
- **environment_limits**: These are wood joints, so the limits are those of the timber and glue. Under constant load, wooden shelves keep sagging 'a little more each year', because wood creeps (Popular Woodworking). Changes in humidity make wood and plywood swell and shrink, which changes the fit of a dado (Rockler). MDF and particleboard can swell and lose strength if they get wet, and PVA glue joints are for indoor use unless a water-resistant glue is used ⚑ [uncertain]. 3D-printed versions follow the limits of the plastic, e.g. PLA softening in heat ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Cutting housings and rebates on a table saw is a non-through cut, so the standard blade guard can't be used; OSHA requires 'combs (featherboards) or suitable jigs' for dadoing and rabbeting (OSHA 1910.213). Fine Woodworking warns never to cut a rabbet 'with the stock between the dado stack and the fence': if the board pulls away from the fence, the dado head can throw it violently (Steve Latta, Fine Woodworking #301). Use a push pad and keep downward pressure on the work (Fine Woodworking). With a hand-held router, wear hearing and eye protection, and don't drag the router back along the cut with the bit spinning, because it can snag (Rockler). In schools, routers may only be used by trained, supervised students (DT Online). When paring, hold the chisel with one hand on the handle and one on the blade, with the knuckles of the blade hand pressed against the work for control (DT Online).
- **common_failures**: Sloppy fit because nominal plywood is thinner than its label; measure it, and use undersized bits or two passes (Rockler). A rough, uneven-bottomed or badly sized housing, which glue won't rescue (Rockler). A housing cut too deep, which weakens the side; keep it to no more than one-third of the thickness (DT Online). Shelves pulling out or the case racking, because the joint doesn't resist tension and end-grain glue is weak; add screws, a dovetail shape, or a back panel fixed to the shelves (Rockler; Popular Woodworking). A router that wanders off line or a gouged shoulder, from feeding in the wrong direction or holding the router by hand on small parts (Rockler; Fine Woodworking). Chipped edges on long-grain rebates (Rockler). Uneven rabbet depth from inconsistent downward pressure (Fine Woodworking). Wood splitting out at the far side of a hand-cut housing; chisel the waste from both sides towards the middle (DT Online). A shelf that won't seat in a CNC-cut stopped housing because the housing's inside corners are rounded to the cutter radius; square them with a file or chisel, or add dogbones (Fablab RUC).
- **related**: 
  - Sliding dovetail: a housing with angled sides (dovetail housing) that also resists pulling apart
  - Tongue-and-groove joint: a groove cut along the grain for joining boards edge to edge or holding sliding lids, where a housing is cut across the grain
  - Butt and lap wood joints: the plain butt joint that a rebate improves on; a half-lap is made from two rebates nested together (Rockler)
  - Finger joint (box joint) and dovetail joint: stronger interlocking corners than a nailed rebate
  - Mortise and tenon: a stronger joint for rails meeting posts
  - Dowel and biscuit joints: alternative ways to fix shelves without cutting a full-width housing
  - Knock-down cam-lock and cross-dowel connectors: for flat-pack shelves that must come apart
  - Tab-and-slot joint: the sheet-material (laser-cut) version, with through-slots instead of blind housings

### Pictures, videos and models

- **links**: 
  - [Woodworking-joint-dado.svg (Wikimedia Commons, by SilentC, vectorised by Zerodamage, 2012)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-dado.svg): Drawing of a through dado (left) and a stopped dado (right) *(licence: CC BY-SA 3.0)*
  - [Woodworking-joint-rebate.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-rebate.gif): Drawing of a rebate (rabbet) cut along the edge of a board *(licence: CC BY-SA 3.0 / GFDL)*
  - [Dadosets.jpg (Wikimedia Commons, by Luigi Zanasi)](https://commons.wikimedia.org/wiki/File:Dadosets.jpg): A stacked dado set taken apart (outer blades and chippers), mounted in a table saw, and a wobble dado *(licence: CC BY-SA 2.0 Canada)*
  - [How to make a Housing Dado Joint - The Three Joints (YouTube, Paul Sellers)](https://www.youtube.com/watch?v=n3e6Ba6IfhM): Hand-tool demonstration of marking, sawing and chiselling a housing dado (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [How To Make Rabbets, Dadoes, and Grooves (YouTube, WOOD magazine)](https://www.youtube.com/watch?v=jcDizu5P3Ck): Power-tool demonstration of cutting rabbets, dados and grooves with different bits and blades (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Slide Top Rabbet Box (Customizer for 3D Printers and CNC) (Openscaddad, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/185416-slide-top-rabbet-box-customizer-for-3d-printers-an): Parametric box generator whose walls join with rabbet joints for precise alignment during glue-up, with a sliding lid; a tolerance slider sets the lid slot clearance as a percentage of wall thickness. For 3D printers and CNC. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Dado Jig (Ben Crawford, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/284328-dado-jig): Printable table-saw jig that transfers the thickness of the shelf material to the fence setting, so a dado can be cut in two passes to an exact fit. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Rabbet / Rebate Plane (PositiveVorticity, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1802612-rabbet-rebate-plane): Printable hand plane for cutting rebates, using a 3/4 in chisel as the blade held by a wedge, with a fence; printed in PETG. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Saw Blade, Dado, and Router Bit Height Gauges (CheeseMcGee, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/85931-saw-blade-dado-and-router-bit-height-gauges): Printable step gauges in 1/8 in steps for setting dado-stack and router-bit cutting depth. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- **diagram_idea**: Cutaway of a bookcase corner: on the left, a shelf end sitting in a three-sided housing cut one-third of the way into the side; on the right, the case side's back edge with a two-sided rebate holding the thin back panel flush. Arrows show the shelf's weight bearing on the housing floor and a 'pull-out' arrow labelled 'needs glue or screws'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Dado_(joinery)
  - https://en.wikipedia.org/wiki/Rabbet
  - https://en.wikipedia.org/wiki/Dado_set
  - https://wiki.dtonline.org/index.php/Housing_Joint
  - https://wiki.dtonline.org/index.php/Corner_Lap_Joint
  - https://www.rockler.com/learn/making-rabbet-joints
  - https://www.rockler.com/learn/using-router-to-cut-dado-joints
  - https://www.rockler.com/learn/getting-dadoes-and-plywood-thickness-to-match
  - https://www.finewoodworking.com/2022/12/13/cutting-rabbets-two-ways
  - https://www.popularwoodworking.com/techniques/aw-extra-3614-stronger-shelves/
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.213
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - http://fablab.ruc.dk/more-elegant-cnc-dogbones/
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-dado.svg
  - https://commons.wikimedia.org/wiki/File:Woodworking-joint-rebate.gif
  - https://commons.wikimedia.org/wiki/File:Dadosets.jpg
  - https://www.youtube.com/watch?v=n3e6Ba6IfhM
  - https://www.youtube.com/watch?v=jcDizu5P3Ck
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
- **tools**: press or vice, power tools, hand tools
- **load_max**: medium
- **usual_process**: woodwork
- **adjustable**: no
- **removability**: permanent
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, making_tips_3d_printing, processes, removability, reuse_cycles

## 345 Tensegrity (floating struts held by cords)

*interlocking joints & joinery.* A structure in which rigid struts don't touch each other and are held in place only by tensioned cords or chains, used for floating tables, shelves and sculptures

*Also covers:* Also covers the three-strut prism and print-in-place tensegrity models with built-in tensioners. Its nearest relative is Reciprocal frame. Safety: it collapses suddenly if a cord breaks, so keep loads light.

### What it is

- **plain_name**: A 'floating' table, shelf or sculpture whose stiff sticks or blocks never touch each other: they hang in the air, held in place only by tight strings, wires or chains pulling on them from several directions
- **term**: Tensegrity (tensional integrity; floating compression)
- **aliases**: 
  - tensional integrity, floating compression (Wikipedia 'Tensegrity'); 'floating compression' was sculptor Kenneth Snelson's preferred name (Wikipedia 'Kenneth Snelson')
  - tensegrity table, floating table, floating tensegrity table, tensegrity stand (maker and kit names; the-diy-life; COMSOL blog; Printables)
  - three-strut tensegrity prism, T3-prism, Triplex, 3-way prism, simplex (the simplest strut tensegrity; Wikipedia 'Tensegrity')
  - tensegrity icosahedron, 6-strut (6-bar) tensegrity, built on Jessen's icosahedron (Wikipedia 'Tensegrity')
  - X-module, X-piece (Snelson's 1948 form; Wikipedia 'Tensegrity')
  - print-in-place tensegrity, string tensegrity (printed models whose 'strings' are single lines of filament or printed chains; 3DWithUs; Printables)
  - magnetic tensegrity table (the central tie is replaced by two attracting magnets with a gap; the-diy-life; Skulls in the Stars)
  - biotensegrity (the idea applied to bodies and cells; Wikipedia 'Tensegrity')
- **family**: interlocking joints & joinery
- **other_families**: tensioning, reels & take-up, print-in-place & 3D-printing joints
- **one_liner**: A structure in which rigid struts (or two rigid halves) never touch each other and are held in a fixed shape only by tensioned cords, cables or chains, giving the 'floating' look of tensegrity tables, shelves and sculptures.
- **complexity**: A small assembly that acts as one unit. Table type: a base with an upward hooked arm, a top with a downward hooked arm, one short central tie between the two arms, and three or four outer ties from the base edge to the top edge (the-diy-life; COMSOL blog). Strut type: three or more straight struts (dowels, tubes, printed rods) and at least three cords at every strut end, e.g. 3 struts and 9 cords for the T3-prism (Wikipedia 'Tensegrity'). Plus anchors for the cord ends (holes with knots or glue, screw-in hooks, threaded or ball-ended cable fittings, printed chain links) and usually a tensioner (turnbuckle, threaded adjuster screw, or a printed screw knob) (Hackaday.io 'Stable Cable Table'; GadgetBuilder; Printables 243319).
- **how_it_works**: Every stiff part is pushed on (compression) and every cord is pulled tight (tension), and the stiff parts don't touch: the tight cords alone fix where each part sits (Wikipedia 'Tensegrity'). In a floating table the top half literally hangs from the bottom half by the short central tie between two overlapping arms; the outer ties stop it tipping, because tipping would lift one edge and the taut tie on that edge can't stretch to let it (Skulls in the Stars; the-diy-life). In a strut tensegrity each strut end is pulled by at least three cords in different directions, like a mast held by guy ropes, and the struts push outward while the cords pull inward, so the whole thing is pre-stressed and stiff (Wikipedia 'Tensegrity'). It only works while every cord stays taut: a slack or broken cord lets the structure fold up (Skulls in the Stars).

### Finder attributes

- **job**: 
  - join and hold: holds struts or two rigid halves in a fixed shape without them touching, as a floating table, shelf, stand or sculpture
  - tighten and hold tension: the cords must be pre-tensioned (with turnbuckles, threaded adjusters, printed tensioner knobs or careful cord lengths) and stay tight for the structure to stand
- **motion**: none: once tensioned it is meant to stay still, but it is springy and can wobble, bounce and twist slightly (a built steel table shows twisting oscillations that last up to several minutes; Hackaday.io 'Stable Cable Table'). Robot versions move on purpose by changing cable lengths (Wikipedia 'Tensegrity', NASA SUPERball).
- **degrees_of_freedom**: 0 when every cord is taut: the cords pin each part in place. Some forms keep a tiny built-in give: the tensegrity icosahedron is 'stable ... albeit with infinitesimal mobility', so stretching a cord a little moves the struts a lot (Wikipedia 'Tensegrity'). If a cord goes slack, parts gain freedom and the structure falls (Skulls in the Stars).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): the cords are pre-tensioned and the design usually includes a way to tighten them, e.g. turnbuckles, threaded cable ends, adjuster screws or the built-in screw knobs of the popular print-in-place table, turned with pliers (Hackaday.io 'Stable Cable Table'; GadgetBuilder; Printables 243319)
  - self-aligning or self-centring: outer cables angled a few degrees from vertical push the top back to the centre after a nudge, 'both in response to a disturbance and at rest' (Hackaday.io 'Stable Cable Table')
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the stretched cords act as stiff springs that pull every strut into place; the structure is only as stiff as the cord pre-tension allows (Wikipedia 'Tensegrity': prestressed tension members)
  - shape (the parts interlock; form-fit): cord ends are anchored by shape, e.g. knots behind holes, chain links, ball or threaded cable ends in holes, screw-in hooks (the-diy-life; Hackaday.io 'Stable Cable Table'; Hometalk); some models glue line ends instead (material bond), and the magnetic version replaces the central tie with two attracting magnets (the-diy-life)
- **input_output**: not applicable
- **power**: passive (no power needed). Tensegrity robots such as NASA's SUPERball are the powered exception: motors change cable lengths to move them (Wikipedia 'Tensegrity'); if power is lost they keep their last shape ⚑ [uncertain]. *(⚑ parts need confirming)*
- **removability**: removable: cords tied, hooked or screwed in can be undone and the parts separated (the-diy-life suggests using only a little glue at first 'so that you can undo a joint'); glued fishing-line versions are semi-permanent, and print-in-place models are permanent (the strings are printed into the parts).
- **reuse_cycles**: many times for kits with knots, hooks, chain or threaded cable ends (they can be re-tied or re-hung and re-tensioned); once for print-in-place models and glued lines. A remix of the popular print-in-place table splits it into separate chains held by self-tapping screws so failed chains can be replaced (Printables 402957).
- **tools_needed**: Small models: scissors, a fine drill (1 mm for fishing line), super glue or wood glue, a ruler, and optionally a laser cutter (the-diy-life); rubber-band dowel models need no tools (ASEE paper). Print-in-place: pliers to turn the tensioner knobs (Printables 243319). Furniture size: drill, screw-in hooks or tapped holes (Hometalk), spanner or screwdriver for turnbuckles and threaded cable ends; a welded steel version also needed a bandsaw, MIG welder and grinder (aesdes.org; Hackaday.io 'Stable Cable Table').
- **seal**: none: it is an open frame.
- **load**: Light. Strong in a straight downward load near the centre, which the central tie carries almost alone: in COMSOL's model the outer strings carried zero force under a central vertical load of up to 500 N (COMSOL blog). Weak against loads near an edge, sideways pushes and twisting: an edge load must be held by the single opposite outer cable while the central tie carries about double, like a lever (Hackaday.io 'Stable Cable Table'). A laser-cut MDF desk model with fishing line held just under 200 g before its outer lines flexed (the-diy-life); a 300 mm wooden table hung on 2 mm steel wire rope was said to hold 5 kg, untested beyond that (Hometalk); a magnetic-gap version 'can't really hold much weight' (the-diy-life). A welded steel table with 1/16 in stainless aircraft cable (480 lb mean break) was designed for at least 50 lb added load; its theoretical 956 lb (centre) and 478 lb (edge) limits would be 'a lot less' in practice because of fittings, stretch and pre-load (Hackaday.io 'Stable Cable Table'). Any single cord breaking brings the whole thing down (the-diy-life).
- **adjustable**: yes: cord lengths and tension are set after assembly by turnbuckles, threaded cable ends or adjuster screws (GadgetBuilder; Hackaday.io 'Stable Cable Table'), by the built-in screw tensioner of print-in-place models (Printables 243319), or by re-tying or re-gluing lines until the top is level (the-diy-life; OH WOW! Children's Museum). One student design runs all outer lines as one cable over pulleys so they equalise (aesdes.org 'Adjustable Tensegrity Table').
- **play_and_precision**: noticeable: it springs and wobbles under a touch; a flicked desk table 'shivers' for up to 45 seconds (GadgetBuilder), and a steel coffee-table base twisted back and forth for minutes until a small oil slosh damper was added (Hackaday.io 'Stable Cable Table'). The top's height and level depend on cord lengths, so cords that stretch lower it (aesdes.org: 'the cables stretched more than I expected'). Unequal outer lines tilt the top (the-diy-life).
- **access_needed**: both sides: you need to reach both the top and the base (or both ends of each strut) to fix and tension the cords; the Hackaday.io build needed an assistant to hold the top while hanging it.
- **materials**: Struts and halves: wooden dowels or sticks, MDF, plywood or acrylic (laser cut), steel or aluminium tube, printed PLA or PETG (the-diy-life; ASEE paper; aesdes.org; Printables). Tension members: clear nylon fishing line (doesn't fray and is stiff enough to thread), sewing thread, rubber bands, chain, music wire, or stainless steel aircraft cable, chosen in a steel build for 'enormous tensile strength and low elasticity' (the-diy-life; OH WOW!; GadgetBuilder; Hackaday.io 'Stable Cable Table'). Printed tension members: single extruded lines of filament or printed chains (3DWithUs; Printables 243319). Stretchy members (rubber bands, elastic cord) make a forgiving, wobbly model; low-stretch cable or chain makes a stiff one.
- **maker_difficulty**: easy: a three-stick rubber-band prism or a desk table from two printed or laser-cut halves and fishing line is a school-level build (ASEE paper: grades 5-8; spectrUM), and print-in-place models need no assembly. Getting all lines the same length so the top sits level 'takes a bit of patience' (the-diy-life), and furniture sizes become a moderate to hard woodwork or welding project (Hackaday.io 'Stable Cable Table').

### Making it

- **processes**: 
  - 3D print (FDM): the two halves of a table with holes or slots for string, or fully print-in-place models with printed chains or single-line filament strings (Printables 243319, 72508, 18031; 3DWithUs)
  - laser cut: flat MDF, plywood or acrylic parts slotted and glued together (the-diy-life; OH WOW! kit)
  - woodwork: dowel struts, or timber table halves hung on chain or wire rope from screw-in hooks (ASEE paper; the-diy-life community build; Hometalk)
  - sheet metal: welded steel tube or plate halves with steel cable for furniture (aesdes.org; Hackaday.io 'Stable Cable Table')
  - off-the-shelf part: fishing line, chain, stainless wire rope with threaded or ball end fittings, turnbuckles, screw-in hooks, rubber bands, magnets
- **print_in_place**: yes: popular models print fully assembled, either with printed chains as the tension members and a built-in screw tensioner (Printables 243319, printed with built-in supports; tension by turning the small knobs in the centre with pliers) or with 'strings' that are single extruded lines of filament (3DWithUs; Printables 72508, 1051893).
- **making_tips_3d_printing**: 1) Two-part tables: print the top and base halves and add string afterwards; slots that hide the knots let the parts sit flat, and making the centre string slightly short pulls the outer strings tight (Printables 18031). 2) Single-line 'string' tensegrities: model each string one layer high and one nozzle-width wide, print at a larger layer height (about 0.3 mm) because thinner layers give thinner strings that break, orient the strings along X/Y, tick 'detect thin walls' or 'print thin lines' in the slicer, and leave a one-layer gap round each string so it prints as one unbroken extrusion; check the preview shows unbroken strands with no empty layers (3DWithUs; Printables 72508). 3) Make the base at least as wide and deep as the top so it doesn't tip, and don't make anchor points thin or narrow, because they carry the string tension (3DWithUs). 4) Printed-chain table: print with the built-in supports (easy to remove); it printed fine at 0.25 mm layers in PLA (Printables 243319); a failed print-in-place can waste around 400 g of filament, so a remix prints the chains separately and screws them in (Printables 402957). For separate printed chains, use 0.2 mm layers, and when mirroring a half remember its thread becomes left-handed (Printables 1295813). 5) Remove string models from the bed by bending at right angles to the strings, or the lower strings take all the strain and break (Printables 1051893). 6) Keep printed strings out of the sun or a hot car: thin strands 'are very susceptible to stretching when they get warm' (Printables 1051893).
- **off_the_shelf_parts**: Clear nylon monofilament (fishing line), braided cord, rubber bands and elastic cord; light chain (a community build on the-diy-life hung a wooden table on chains); vinyl-coated steel wire rope (2 mm in one wooden table) hung on screw-in round hooks (Hometalk 'How to Make Floating Tensegrity Table'); stainless steel wire rope (aircraft cable, e.g. 1/16 in 7x7) with swaged threaded-stud or ball-end fittings and weld nuts (Hackaday.io 'Stable Cable Table'); turnbuckles and threaded tension adjusters (aesdes.org; GadgetBuilder); neodymium disc magnets for the magnetic version (the-diy-life); wooden dowels (ASEE paper). Search terms: 'turnbuckle', 'wire rope threaded stud fitting', 'swaged ball end cable', 'wire rope clip' or 'ferrule and stop', 'eye screw', 'nylon monofilament'.
- **rules_of_thumb**: 
  - Each strut end needs at least three cords, and the angle between any two cords at that end must be less than 180 degrees for the end's position to be fixed; extra cords add redundancy (Snelson's Needle Tower uses five per node) (Wikipedia 'Tensegrity').
  - Three-strut prism (T3-prism): 3 struts and 9 cords, six forming the top and bottom triangles and three joining each strut top to its neighbour's bottom; in the stable shape the top triangle is turned 5π/6 (150 degrees) relative to the bottom triangle (Wikipedia 'Tensegrity', citing Burkhardt's 'A Practical Guide to Tensegrity Design').
  - Floating table: the central tie carries the weight; the outer ties only keep the top level and carry almost no force while the load is central (COMSOL blog: zero force in the outer strings for central loads up to 500 N; the-diy-life). Angle the outer cables a few degrees from vertical (about 2 degrees in one build) so the top self-centres (Hackaday.io 'Stable Cable Table').
  - Worst case is a load at the very edge: the single opposite outer cable then carries about the same force as the load and the central tie about twice the load divided by 2cos(α); design every tie for this, not for the central load (Hackaday.io 'Stable Cable Table', equations 3-5).
  - Desk-size starting dimensions (3 mm MDF, fishing line, 1 mm holes): a 50-60 mm gap between the two centre arms and outer lines of about 130 mm; set the outer lines so the centre tie has 'a little bit of tension' and the top stays parallel to the base (the-diy-life). A kit version keeps no more than 2 in between base and top so the middle thread is tensioned (OH WOW! Children's Museum).
  - Dowel models: 1/8 in dowels 4-6 in long with size #32 rubber bands; finish with two bands at each end of every dowel (ASEE paper, May 2016).
  - Print-in-place strings: one layer high (about 0.3 mm layer height), one nozzle-width wide, thin-wall detection on, with a one-layer clearance gap round each string (3DWithUs; Printables 72508).

### When to use it

- **everyday_examples**: 
  - 'Floating' tensegrity desk tables and phone stands, sold as kits and widely 3D printed (the-diy-life; Printables 243319, about 37,700 downloads)
  - A bicycle wheel: the hub hangs in the middle of the rim from spokes pulling in all directions (spectrUM 'Tensegrity Table' sheet; COMSOL blog)
  - Tensegrity sculptures such as Kenneth Snelson's Needle Tower, and Brisbane's Kurilpa Bridge, called the world's largest tensegrity bridge (Wikipedia 'Tensegrity'; COMSOL blog)
  - LEGO tensegrity tables built from chains and bricks (JK Brickworks design, ToyPro article)
- **when_to_use**: Use it for display pieces where the 'impossible' floating look is the point: desk toys, plant stands, small side tables, shelves and sculptures carrying light loads, and science demonstrations of tension and compression (ASEE paper; the-diy-life; COMSOL blog). It is very light for its stiffness, because only thin cords carry the pulling loads and the stiff parts work only in compression (Wikipedia 'Tensegrity'; Ben Kahla et al. 2020: 'high strength-to-mass ratio'). Strut tensegrities also suit springy, impact-absorbing frames, such as experimental rolling robots and landers (Wikipedia 'Tensegrity', NASA SUPERball), and teaching models made from dowels and rubber bands.
- **when_not_to_use**: Don't use it for anything a person sits, stands or leans on, for heavy or off-centre loads, or where a sudden collapse would hurt someone or break what is on it: one broken or slack cord drops the whole structure (the-diy-life; Skulls in the Stars). Use an ordinary framed table, bracket shelf or a Strut hub (space-frame) structure instead. Avoid it where things on top must stay still, because it wobbles and keeps oscillating; one maker concluded the style suits benches and chairs better than tables 'where you will be placing food and drinks which could potentially spill' (aesdes.org). If you want a self-supporting stick structure without cords, use a Reciprocal frame. To tension a single line, use a Turnbuckle or Guy-line runner rather than a whole tensegrity.
- **environment_limits**: Heat and sun: thin printed filament strings stretch when warm, so don't leave printed models in the sun (Printables 1051893); PLA parts in general soften in hot cars ⚑ [uncertain]. Creep and stretch: cords and cables stretch under constant tension, lowering and tilting the top over time (aesdes.org: 'the cables stretched more than I expected'); rubber bands and elastic cord lose tension as they age ⚑ [uncertain]. Vibration: tensegrities have 'low structural damping which make them sensitive to vibrations' (Ben Kahla et al. 2020), so they keep wobbling after a knock (GadgetBuilder; Hackaday.io). Outdoors: use stainless or coated steel cable and UV-resistant cord; a steel build used stainless aircraft cable (Hackaday.io 'Stable Cable Table'). *(⚑ parts need confirming)*
- **safety_notes**: Sudden collapse: 'If any of these four lines are cut, the table will collapse under its own weight' (the-diy-life), and slack in a side wire makes it fall (Skulls in the Stars); a study simulating sudden cable rupture in a tensegrity footbridge observed 'nonlinear dynamic instabilities caused by cable slackening' in all its simulations (Ben Kahla et al. 2020, Latin American Journal of Solids and Structures). So keep loads light and central, never sit or stand on a hobby tensegrity, keep glass tops and heavy items off small models, and check cords and fittings for fraying, stretch and loosening. Stored tension: bigger dowel models build up a lot of tension and compression while assembling, 'so be careful' (ASEE paper); a snapping wire or cable can whip, so wear eye protection while tensioning ⚑ [uncertain]. Magnetic-gap versions use small strong magnets, which are a swallowing hazard for children (see Magnetic joint). Pinch points between the arms when the top drops. *(⚑ parts need confirming)*
- **common_failures**: Top tilted or wobbly: the outer lines are not equal or not tight; re-tie or adjust until the top is parallel and the centre tie is tight (the-diy-life; OH WOW!). Collapse: a slack, cut or slipped line (Skulls in the Stars), or a magnetic gap pulled apart by too much weight (the-diy-life); reset and re-tension. Outer lines flexing and the top sagging under load: the table is overloaded; a desk MDF model managed just under 200 g (the-diy-life). Height dropping over time: cords or cables stretch; use low-stretch cable or chain and leave adjustment room in the tensioners (aesdes.org; Hackaday.io). Long-lasting twisting oscillation: add damping, angle the side cables, or raise tension (Hackaday.io: tension reduced but did not stop the oscillation; a small oil slosh damper helped). Arms bending: in a table the hooked arms carry bending as well as compression ('this design isn't true tensegrity ... the arms have torque applied'; GadgetBuilder), so make them deep and stiff, with load along their strong axis (Hackaday.io). Printed failures: thin anchor points snap (3DWithUs); strings print broken or not at all when the slicer drops thin walls (3DWithUs); strings snap when the model is peeled off the bed the wrong way (Printables 1051893); a failed print-in-place thread can sometimes be drilled out (Printables 402957).
- **related**: 
  - Reciprocal frame (self-supporting stick bridge): also self-supporting with no separate joints, but its sticks rest on and press against each other, with no cords at all; the nearest relative
  - Strut hub (geodesic dome hub and space-frame node): struts meet and are bolted at hubs, so stiff parts touch and carry both push and pull; much stronger and safer for real loads
  - Turnbuckle: the threaded tensioner often used inside a tensegrity to set one cord's length and tension
  - Guy-line runner (line tensioner): adjusts a single guy rope; a tensegrity is in effect struts guyed to each other
  - Elastomer tension spring (elastic band, shock cord): stretchy members used in teaching models; makes a forgiving but wobbly tensegrity
  - Stopper knot and cord-end anchor: how the cord ends are usually fixed into holes in the struts or table halves
  - Magnetic joint: the magnetic-gap tensegrity table replaces the central tie with two attracting magnets, holding far less
  - Tensile structure and cable-stayed or cable-net roofs: cables carry most loads but are anchored to masts and the ground, rather than the struts floating (Wikipedia 'Tensegrity', see also)

### Pictures, videos and models

- **links**: 
  - [Tensegrity simple 3.gif (Wikimedia Commons, by Cmglee)](https://commons.wikimedia.org/wiki/File:Tensegrity_simple_3.gif): Spinning animation of the simplest tensegrity, the three-strut T3-prism: three green struts that don't touch, each end held by three red cables *(licence: CC BY-SA 3.0)*
  - [Icosahedral tensegrity structure.png (Wikimedia Commons, by QuarterNotes)](https://commons.wikimedia.org/wiki/File:Icosahedral_tensegrity_structure.png): Photo of a home-made six-strut tensegrity icosahedron made from boba straws threaded with embroidery string *(licence: CC BY-SA 4.0)*
  - [Make Your Own Desktop Tensegrity Tables (The DIY Life, Michael Klements, 2020)](https://the-diy-life.com/make-your-own-desktop-tensegrity-tables/): Step-by-step photos and video of laser-cut MDF tables held by fishing line, plus a magnetic-gap version and a community chain-and-timber build *(licence: link only (licence not stated on the page))*
  - [Modeling Tensegrity with a Floating Table (COMSOL Blog, 2024)](https://www.comsol.com/blogs/modeling-tensegrity-with-a-floating-table): Force diagrams and simulation plots of a floating table under a central load and a twisting load, showing which wires carry force *(licence: link only)*
  - [Tensegrity Models - Designs for 3D Printing and Slicer Settings (3DWithUs, Natalie Cheesmond / 3DPrintBunny)](https://3dwithus.com/tensegrity-models-designs-for-3d-printing-and-slicer-settings): Images of part shapes, minimum string placement, and slicer screenshots for printing single-line filament strings in place *(licence: link only)*
- **make_it_yourself**: 
  - [Print In Place Tensegrity (rcmz, Printables) (URL seen in search results; details from Printables API)](https://www.printables.com/model/243319-print-in-place-tensegrity): Print-in-place tensegrity table using printed chains as the tension members, with a built-in screw tensioner turned with pliers; print with the built-in supports *(licence: Creative Commons Attribution-NonCommercial)*
  - [Hexagon tensegrity table print-in-place (3DPrintBunny, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/72508-hexagon-tensegrity-table-print-in-place): Small supportless table held up by single lines of filament; 0.3 mm layers and 'detect thin walls' needed *(licence: Standard Digital File License)*
  - [Tensegrity (HoldenArt, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/18031-tensegrity): Two printed halves with slots for strings that hide the knots; you add your own string, which makes it easy to try different lengths *(licence: Creative Commons Attribution)*
  - [Risk Free Tensegrity (environmental friendly) (Tritschi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/402957-risk-free-tensegrity-environmental-friendly): Remix of the print-in-place table split into separate halves and chains held by self-tapping screws, so a failed chain can be reprinted or swapped for metal chain *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Print-in-place Tensegrity Cube (SmoothDragon, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1051893-print-in-place-tensegrity-cube): Cube-shaped string tensegrity whose filament strings print in place; the designer says it holds a soda can *(licence: Creative Commons Attribution)*
  - [Building Tensegrity Structures to Explore Interactions Between Tension and Compression (V. May, ASEE 2016)](https://peer.asee.org/26416.pdf): Free illustrated step-by-step instructions for 3-dowel and 6-dowel tensegrity models made from dowels and rubber bands *(licence: link only (ASEE copyright))*
- **diagram_idea**: Side view of a floating table with the central tie drawn as a thick red line carrying the weight and the outer ties as thin red lines, beside a three-strut prism with green struts and red cords, plus a third frame showing the table folding up when one outer cord is cut.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tensegrity
  - https://en.wikipedia.org/wiki/Kenneth_Snelson
  - https://en.wikipedia.org/wiki/Reciprocal_frame
  - https://commons.wikimedia.org/wiki/File:Tensegrity_simple_3.gif
  - https://commons.wikimedia.org/wiki/File:Tensegrity_simple_4.gif
  - https://commons.wikimedia.org/wiki/File:Icosahedral_tensegrity_structure.png
  - https://commons.wikimedia.org/wiki/File:Tensegrity_Dome.jpg
  - https://the-diy-life.com/make-your-own-desktop-tensegrity-tables/
  - https://www.hometalk.com/diy/build/furniture/how-to-make-floating-tensegrity-table-44300780
  - https://skullsinthestars.com/2024/03/01/physics-demonstrations-tensegrity-table/
  - https://www.comsol.com/blogs/modeling-tensegrity-with-a-floating-table
  - https://3dwithus.com/tensegrity-models-designs-for-3d-printing-and-slicer-settings
  - https://ohwowkids.org/pages/tensegrity-table
  - https://peer.asee.org/26416.pdf
  - https://cdn.hackaday.io/files/1931058261804320/stable%20cable%20table%20contest%20submission.pdf
  - https://www.aesdes.org/2021/04/29/floating-coffee-table-final-report/
  - https://www.aesdes.org/2023/04/05/adjustable-tensegrity-table/
  - https://gadgetbuilder.com/TensegrityTable.html
  - https://lajss.org/index.php/LAJSS/article/download/5907/2856/19112
  - https://umt.edu/spectrum/education/resources/resources-images/tensegrity-table-heman-final.pdf
  - https://www.toypro.com/en/news/463/can-you-build-a-lego-r-tensegrity-examples-building-instructions
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: strap, cord or fabric
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: not applicable
- **motion_out**: not applicable
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: welding or brazing torch, drill and tap, power tools, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, power, safety_notes

