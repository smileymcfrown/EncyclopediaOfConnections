---
title: Iris mechanism
description: Several thin, curved blades are each pivoted on one ring and steered by a pin in a slot (or a small link or gear)
  on a second ring, so turning one ring swings all the blades inward or outward together and makes a central round opening
  smaller or larger.
num: 90
term: Iris mechanism (iris diaphragm)
plain_name: A ring of thin curved blades that all swing in together when you turn an outer ring, shrinking a round hole in
  the middle evenly from every side, like the pupil of an eye or the aperture inside a camera lens
aliases:
- iris diaphragm
- mechanical iris
- aperture mechanism / adjustable aperture / lens aperture (cameras)
- diaphragm (optics)
- iris box / print-in-place iris box (3D-printing favourite)
- iris door / irising door (science-fiction style door or hatch)
- iris valve / iris diaphragm valve (powder valve that closes by twisting a fabric sleeve)
- zero-aperture iris (one that closes completely)
- Irisblende (German)
family: motion conversion
other_families: []
finder:
  job: [change the kind of motion, let it move, click into set positions]
  motion: multiple
  special_behaviour: [motion conversion, self-aligning or self-centring, indexing]
  holding_principle: [not a holding joint, shape, spring force]
  reuse_cycles: many times
  seal: loose
  access_needed: not applicable
  print_in_place: 'yes'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [back-and-forth turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: clicks
  tools: [hand tools]
  load_max: light
  usual_process: 3D print (FDM)
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, power, materials, environment_limits, safety_notes, make_it_yourself]
diagram_idea: A front view of a six-blade iris with the fixed base ring, the turning actuating ring and its curved slots drawn,
  three blades shaded, and two frames side by side (ring at 0 and at 25 degrees) showing each blade swinging about its pivot
  and the hole shrinking, plus a small inset comparing straight-edged blades (hexagonal hole) with curved blades (round hole).
links:
- url: https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif
  title: Iris Diaphragm.gif (Wikimedia Commons, by Catsquisher)
  shows: Animation of a 9-blade camera-lens iris diaphragm opening and closing
  license: Public domain
- url: https://en.wikipedia.org/wiki/Diaphragm_(optics)
  title: Diaphragm (optics) (Wikipedia)
  shows: What an iris diaphragm is, blade counts and shapes, history (J. H. Brown's improved iris diaphragm by 1867, Waterhouse
    stops), with an iris animation, lens photos and a video of a Hasselblad lens aperture
  license: Text CC BY-SA 4.0; images per file on Commons
- url: https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025
  title: Kurbelschwinge (Irisblende) / crank-rocker (iris diaphragm) (DMG-Lib mechanism description)
  shows: Classification of an iris diaphragm as a planar crank-rocker (four-bar) mechanism, with a principle diagram and a
    photo of a physical model
  license: link only
- url: https://www.youtube.com/watch?v=Q2gan0NM-qo
  title: Iris - Educational Model (osamutake, YouTube; title verified via YouTube oEmbed)
  shows: A printed six-blade iris with pivots on a control ring and pins in cam slots, opening and closing while keeping a
    round hole
  license: link only
- url: https://www.youtube.com/watch?v=oLlPiXsoVfY
  title: Print-In-Place Iris Box (remix) by LoboCNC ... freeing the mechanism (Anna Kastlunger, YouTube; title verified via
    YouTube oEmbed)
  shows: How to cut the tabs and free the moving parts of a print-in-place iris box after printing
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/257845-print-in-place-iris-box-locking
  title: Print-In-Place Iris Box (locking) (LoboCNC, Printables)
  what_it_is: One-piece, support-free print-in-place iris box that stays shut until the outer ring is twisted; print at 0.2
    mm layers with a random seam
  license: CC BY-SA
- url: https://www.printables.com/model/1503716-educational-model-of-iris
  title: Educational Model of Iris (osamutake, Printables)
  what_it_is: Six-blade camera-style iris on an 80 x 80 mm base with pivots, cam slots and retaining rings, designed to show
    how the round opening is kept
  license: CC BY
- url: https://www.printables.com/model/344266-spring-loaded-iris-gift-box
  title: Spring-Loaded Iris Gift Box (Mechatronics, Printables)
  what_it_is: Spring-closed iris gift box in three sizes with a parametric Fusion 360 file and detailed notes on iris types,
    tolerances and mainspring sizing
  license: CC BY
- url: https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades
  title: Iris mechanism based on 3 blades (Dynamite, Printables)
  what_it_is: Easy-to-print three-blade iris that opens and closes smoothly in a circle; plates, shutters and shutter pins
    assembled by hand
  license: CC BY-NC-SA
- url: https://makezine.com/projects/mechanical-iris/
  title: Make an Awesome Mechanical Iris (Chris Schaie, Make:)
  what_it_is: Step-by-step build of a 5-leaf, linkage-driven iris in sheet brass or plywood, cut on a CNC router or laser
    cutter, with downloadable DXF and CRV files
  license: not stated [uncertain]
- url: https://makerdesignlab.com/experiments/mechanical-iris-prototype/
  title: Making a Mechanical Iris - Laser Cut Wood (Maker Design Lab)
  what_it_is: Laser-cut plywood iris with press-fitted bamboo-skewer or plywood pins; templates in PDF, SVG and DXF
  license: not stated [uncertain]
sources:
- https://en.wikipedia.org/wiki/Diaphragm_(optics)
- https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif
- https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025
- https://kapycad.com/en/academy/machines/iris-aperture-diaphragm
- https://makezine.com/projects/mechanical-iris/
- https://makerdesignlab.com/experiments/mechanical-iris-prototype/
- https://hackaday.com/tag/mechanical-iris/
- https://hackaday.com/2014/03/24/mechanical-iris-will-make-you-want-a-laser-cutter-even-more/
- https://hackaday.com/2017/07/15/irising-chicken-coop-door/
- https://iris-calculator.com/how-does-joseph-spaghetti-iris-work/
- https://hapman.com/technical-brief-how-does-an-iris-valve-work/
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://www.printables.com/model/257845-print-in-place-iris-box-locking
- https://www.printables.com/model/132293-print-in-place-iris-box-remix
- https://www.printables.com/model/1503716-educational-model-of-iris
- https://www.printables.com/model/344266-spring-loaded-iris-gift-box
- https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades
- https://www.printables.com/model/278726-mechanical-iris-mechanism-with-5-blades
- https://www.youtube.com/watch?v=Q2gan0NM-qo
- https://www.youtube.com/watch?v=oLlPiXsoVfY
- https://www.youtube.com/watch?v=3_1MpSFiJ7A
- https://api.printables.com/graphql/
research: research/connection-types/results/Iris_mechanism.json
---

Several thin, curved blades are each pivoted on one ring and steered by a pin in a slot (or a small link or gear) on a second ring, so turning one ring swings all the blades inward or outward together and makes a central round opening smaller or larger.

**In plain words:** A ring of thin curved blades that all swing in together when you turn an outer ring, shrinking a round hole in the middle evenly from every side, like the pupil of an eye or the aperture inside a camera lens. **Proper term:** Iris mechanism (iris diaphragm).

**Also called:** iris diaphragm; mechanical iris; aperture mechanism / adjustable aperture / lens aperture (cameras); diaphragm (optics); iris box / print-in-place iris box (3D-printing favourite); iris door / irising door (science-fiction style door or hatch); iris valve / iris diaphragm valve (powder valve that closes by twisting a fabric sleeve); zero-aperture iris (one that closes completely); Irisblende (German).

## How it works

Each blade pivots on a pin fixed to one ring, and a second pin near its outer edge runs in a slot in the other ring; turning one ring against the other makes each slot act like a cam that swings its blade about its pivot, so all the blades move together and their inner edges slide over one another towards the centre (osamutake; Kapy CAD). Each blade typically swings about 20-40 degrees from open to closed (Kapy CAD). The blade edges are curved so the opening stays close to a circle; straight-edged blades give a polygon, and more blades give a rounder hole (Wikipedia). Other versions drive each blade with a small link (Make:), gear teeth (Dynamite's 5-blade model), or slide the leaves in curved tracks on a dome, as in print-in-place iris boxes.

## Parts

A small assembly that acts as one unit: a fixed base ring or housing, several thin curved blades (leaves; 5-10 in most camera lenses, 2-20 in all, per Wikipedia), each with a pivot pin and a second pin or link, an actuating ring that turns (by a lever, knob, gear or motor), and a cover ring, retaining rings or clips that keep the blades flat.

## Everyday examples

- A camera lens aperture: the blades you can see closing down when you look into a lens (Wikipedia)
- A spaghetti portion measure whose blades close round a bundle of pasta (Joseph Joseph (brand), described by iris-calculator)
- Print-in-place iris boxes and iris gift boxes, a favourite 3D-printing show piece
- Microscope and telescope diaphragms that set how much light passes through (Wikipedia)

## When to use it

Use it when you want a round opening that shrinks evenly from all sides with a single control: controlling light (cameras, microscopes, telescopes), gently controlling the flow of powders and granules (iris valves), measuring round bundles, and eye-catching lids, hatches, doors, boxes and props where the motion itself is the point. It works best for low-force jobs.

## When not to use it

Avoid it when you need a strong clamp, a real seal, or a simple, compact lid: iris mechanisms are space-inefficient, close with little force, are hard to seal and are often needlessly complicated (Mechatronics); a hinged or sliding lid, a screw cap, a sliding shutter or an ordinary valve is simpler. For heavy, abrasive or high-volume flow, or where it must close through a standing column of material, pick another valve type (Hapman). For gripping round objects hard, a self-centring chuck or collet is better.

## Details

- **What it does (jobs):**
  - change the kind of motion: turning a ring becomes an opening that shrinks or grows evenly from all sides
  - let it move (turn, slide or bend): it opens and closes a round hole, lid or door by any amount, to control light, flow or access
  - click into set positions (some designs): notched stops hold set opening sizes, e.g. the portion sizes on a spaghetti measure (iris-calculator)
- **Movement:** multiple: the actuating ring rotates (a powder iris valve's handle swings through 180 degrees, Hapman), each blade swings about its own pivot by roughly 20-40 degrees (Kapy CAD), and the edge of the opening moves straight in towards the centre
- **Directions it can move (degrees of freedom):** 1: every blade is tied to the one actuating ring, so the ring's angle sets the size of the whole opening
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): the ring's rotation becomes an inward, radial closing of the opening
  - self-aligning or self-centring: the blades close evenly from all sides towards the same centre, so the opening stays centred as it shrinks
  - indexing (clicks into set positions), some designs only: notched stops hold set opening sizes, like the portion marks on a spaghetti measure (iris-calculator)
  - none of the holding behaviours in simple designs: pushing on the blades can open it again; LoboCNC added a lock to his iris box because the original opened when the leaves were pushed
- **How it holds:**
  - not a holding joint (it moves or passes on motion): a basic iris only passes the ring's motion to the blades
  - shape (the parts interlock; form-fit), in locking designs: LoboCNC's locking iris box stays shut until the outer ring is twisted
  - spring force, in spring-loaded designs: a printed mainspring snaps the leaves of Mechatronics' iris gift box shut
- **Input and output:** Ring rotation -> radial closing or opening of a round hole (each blade swings roughly 20-40 degrees, Kapy CAD); the relation between ring angle and hole size is set by where the pivots and slots are placed and is generally not a straight line ⚑ [uncertain]. Efficiency: low to moderate, because the blades slide on each other and on the rings; iris mechanisms 'easily bind in the presence of too much friction' (Mechatronics). Shaft arrangement: in line: the ring turns about the same axis as the opening. Back-drivable: yes in simple designs (pushing the blades apart turns the ring back, as in LoboCNC's first iris box), unless a lock, detent, spring or self-locking drive such as a worm holds it.
- **Power:** passive (no power needed): usually turned by hand with a lever, ring or knob, or snapped shut by a spring; can be motor-driven, e.g. the Arduino-controlled irising chicken-coop door that uses limit switches to stop the motor (Hackaday). ⚑ [uncertain] A motor-driven iris keeps its last opening after a power cut only if the drive holds it (friction, a worm gear or a brake)
- **Load:** light: the blades are thin and the closing force is low; Mechatronics notes iris mechanisms are generally kept to low-force jobs such as camera apertures, and that thin printed pivot pins tend to snap. Weakest against anything pushing on the blades from the front or back (out of their plane); iris valves cannot close through a standing column of material or handle heavy abrasive material (Hapman).
- **Play and precision:** Small to noticeable: each blade has play at its pivot and at its pin in the slot, and the blade stack needs just enough vertical room to slide (Kapy CAD suggests 0.25-0.40 mm for printed PLA or PETG). Too little clearance and friction makes it bind (Mechatronics; Kapy CAD). It tolerates little misalignment: the rings must stay concentric, and a wobbly outer ring caused jams in LoboCNC's first iris box until he redesigned it.
- **Taking it apart:** removable: rings and blades are held by screws, retaining rings or snap-together covers and can be taken apart; print-in-place iris boxes are single prints and are not meant to come apart (LoboCNC is unsure a replacement leaf can even be fitted)
- **How often it can be reused:** many times for screwed or clipped designs; print-in-place iris boxes are never taken apart
- **Sealing:** loose: the overlapping blades cover the hole but leave gaps round the blade stack and rings; an iris is 'difficult to seal in any way' (Mechatronics). Industrial iris valves use a twisting fabric or rubber sleeve instead of blades, with two fabric layers for dusty fine powders (Hapman)
- **Adjustable:** yes: the opening can be set to any size between fully open and its smallest (or to set sizes with detents); the range itself is fixed by the blade and slot geometry
- **Access needed:** not applicable: it is a self-contained ring unit fitted into a hole in a panel, door, lid or lens
- **Materials:** Hand-built: sheet brass, 1/8 in plywood or acrylic blades with Delrin (acetal) washers (Make:), laser-cut plywood with bamboo-skewer pins (Maker Design Lab). 3D printed: PLA or PETG (osamutake recommends well-dried PETG for accuracy). Kitchen tools: injection-moulded polypropylene (the spaghetti measure, iris-calculator). Iris valve sleeves: nylon, Terylene (polyester), PTFE, urethane, nitrile (Buna-N) or natural rubber (Hapman). ⚑ [uncertain] Camera and laboratory irises use very thin metal blades, such as steel, in a metal housing.
- **Heat, cold, water and wear:** Printed PLA softens above about 60 C and degrades in UV light, so keep printed irises out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Print PETG from dry filament for accurate fits (osamutake). Friction is the enemy: anything that adds friction makes the blades bind (Mechatronics). ⚑ [uncertain] Dust, grit, swelling of wooden parts in damp air, or slight warping of the thin blades can jam the blade stack.

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): blades printed flat and snapped or pinned onto printed rings; print-in-place iris boxes
  - laser cut: plywood or acrylic blades and rings (Maker Design Lab; NTT's two-layer iris featured on Hackaday)
  - CNC: routed plywood or cut sheet-brass leaves (Make:)
  - off-the-shelf part: ready-made iris diaphragms (used in cameras, microscopes and telescopes, per Wikipedia) and industrial iris valves (Hapman)
- **Printing it in one piece (print in place):** yes: LoboCNC's Print-In-Place Iris Box prints as one piece without supports (cut away the small tabs, then pry and twist the moving parts free); most other printed irises are printed as separate blades and rings and snapped or pinned together
- **Tools:** A screwdriver for screwed designs (Make:'s iris uses machine screws with Delrin washers between layers); none for snap-together printed kits; a hobby knife and a small screwdriver to cut away tabs and free a print-in-place iris box (LoboCNC); fine sandpaper or a small round file to ease tight printed fits (osamutake; Mechatronics)
- **Difficulty:** moderate: the blade edge curve and the positions of the pivots and slots must be right and the fits are tight, so start from a proven model or template; printed kits and laser-cut templates are easy to copy, but print-in-place iris boxes need a clean, well-tuned printer to break free

### 3D printing tips

1) Print blades flat, with the layers in the blade's plane, never on edge, for stiffness and smoother sliding faces (Kapy CAD warns upright blades delaminate). 2) Layer height: at most 0.2 mm for print-in-place iris boxes so the internal gaps come out (LoboCNC; Mechatronics); osamutake uses 0.08-0.1 mm for smoother surfaces on his assembled model. 3) Clearances: osamutake designs 0.15 mm radial clearance on shafts; Kapy CAD suggests 0.20-0.30 mm per side for pins in holes and in slots and 0.25-0.40 mm of vertical play in the blade stack for PLA/PETG; LoboCNC enlarged the clearances of emmett's original iris box to make it easier to print. 4) Seams: choose random seam placement, because a seam lined up along an edge leaves ridges that fuse moving parts together or make rotation rough (LoboCNC; osamutake). 5) Material: well-dried PETG gives better dimensional accuracy (osamutake); PLA works but softens above about 60 C (Prusa). 6) Clean up: sand strings off shafts and file out holes narrowed by elephant's foot (osamutake); sand the bottoms of the leaves and the top of the lower ring if it binds (Mechatronics); ironing the top faces or a dry lubricant such as graphite or PTFE reduces friction (Kapy CAD). 7) Use metal pins or screws for blade pivots if it will be used a lot, because thin printed pins snap and wear (Mechatronics; Kapy CAD). 8) Freeing a print-in-place box: cut the tabs under the leaves, work a small screwdriver round the gap above the base ring to free the rotating dome, and slip a thin blade into the gaps between leaves if needed (LoboCNC; Anna Kastlunger's video). 9) Build and test step by step: check the blades swing freely on their pivots before closing the cover (osamutake; Kapy CAD suggests testing the geometry as a static model first).

### Buying one (off-the-shelf parts)

Iris diaphragms (optical irises, lever-operated, including zero-aperture types) for microscopes, telescopes and lab optics; iris valves (iris diaphragm valves) for powders and granules, e.g. Hapman (brand); for building your own: shoulder screws or dowel pins as blade pivots, Delrin (acetal) washers between layers (Make:), retaining rings (osamutake), thin sheet brass or shim stock for blades, a small pinion or crank gear to turn the ring (Make:'s design uses a crank gear with a drawer-pull handle), and a small gear motor with limit switches for motorised versions (Hackaday chicken-coop door).

## Rules of thumb

- Most camera lenses use 5-10 blades (2-20 exist); curved blades give a rounder opening than straight ones (Wikipedia 'Diaphragm (optics)').
- Each blade swings about 20-40 degrees from open to closed; common layouts are 6 blades 60 degrees apart or 8 blades 45 degrees apart (Kapy CAD).
- Printed PLA/PETG clearances: 0.20-0.30 mm per side for pins in holes and slots, 0.25-0.40 mm vertical play for the blade stack, blade-to-blade faces just touching (Kapy CAD); osamutake's working model uses 0.15 mm radial clearance on its shafts.
- Print-in-place iris boxes: 0.2 mm layers maximum and a random seam (LoboCNC; Mechatronics).
- Choose the type for the space you have (Mechatronics): overlapping thin camera-style leaves keep a round opening but stack up in height, so they must be thin; sliding-triangle irises keep a polygon opening but need an outer size about twice the opening; dome-leaf iris boxes are the most compact but the opening does not stay round.
- Spring-driven irises: a spiral mainspring's force per degree of turn is inversely proportional to its diameter, so larger boxes need thicker springs (Mechatronics).
- Iris valves: a 180-degree handle turn twists the sleeve completely shut; they suit gravity-fed powders, granules and pellets but not high-volume continuous flow or heavy abrasive material (Hapman).

## Common failures

1) Binding from friction or too-tight fits: sand, lubricate with a dry lubricant, increase the clearance, or use metal pins and bearings (Mechatronics; osamutake; Kapy CAD). 2) Blades that collide or don't close fully because the edge curve or the pivot and slot positions are wrong: copy a proven design and test the geometry static first (Kapy CAD). 3) Seam blobs fusing a print-in-place iris solid: use a random seam (LoboCNC). 4) A wobbly outer ring jamming the leaves (LoboCNC's first version). 5) Thin printed pivot pins snapping, and broken leaves being hard to replace in a one-piece box (Mechatronics; LoboCNC). 6) Opening when the blades are pushed: add a lock or detent (LoboCNC). 7) Users twisting the wrong part and jamming the leaves (Mechatronics). 8) Blades printed on edge delaminating (Kapy CAD).

## Safety

The closing blades form a scissor-like pinch and shear point; hand and spring-driven toy irises have little force (Mechatronics says a finger in his spring-loaded box barely feels it), but a motor-driven iris door can trap fingers or animals, so use a weak, slow drive with limit switches (as on Hackaday's chicken-coop door). ⚑ [uncertain] Thin metal blades can have sharp edges, and freeing a print-in-place box with a hobby knife calls for cutting away from your fingers.

## Related

- Leaf shutter: similar thin blades in a camera, but opened and closed quickly to time an exposure; osamutake's leaf-shutter model drives them with a four-bar linkage instead of a cam groove
- Iris valve: a twisting fabric or rubber sleeve instead of rigid blades, used to control powder flow (Hapman)
- Four-bar (crank-rocker) linkage: DMG-Lib files an iris diaphragm under crank-rocker mechanisms, the building block behind linkage-driven irises
- Waterhouse stops: fixed-size holes swapped in and out of a lens, the older alternative to an adjustable iris (Wikipedia)
- Sliding shutter or gate valve: a single plate slid across an opening; simpler and can seal, but closes from one side
- Self-centring (three-jaw) chuck and collet: also close evenly towards the centre, but grip with great force
- Scissor (Hoberman) expanding rings: rings of scissor pairs that grow and shrink evenly

## Make it yourself

- [Print-In-Place Iris Box (locking) (LoboCNC, Printables)](https://www.printables.com/model/257845-print-in-place-iris-box-locking): One-piece, support-free print-in-place iris box that stays shut until the outer ring is twisted; print at 0.2 mm layers with a random seam *(licence: CC BY-SA)*
- [Educational Model of Iris (osamutake, Printables)](https://www.printables.com/model/1503716-educational-model-of-iris): Six-blade camera-style iris on an 80 x 80 mm base with pivots, cam slots and retaining rings, designed to show how the round opening is kept *(licence: CC BY)*
- [Spring-Loaded Iris Gift Box (Mechatronics, Printables)](https://www.printables.com/model/344266-spring-loaded-iris-gift-box): Spring-closed iris gift box in three sizes with a parametric Fusion 360 file and detailed notes on iris types, tolerances and mainspring sizing *(licence: CC BY)*
- [Iris mechanism based on 3 blades (Dynamite, Printables)](https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades): Easy-to-print three-blade iris that opens and closes smoothly in a circle; plates, shutters and shutter pins assembled by hand *(licence: CC BY-NC-SA)*
- [Make an Awesome Mechanical Iris (Chris Schaie, Make:)](https://makezine.com/projects/mechanical-iris/): Step-by-step build of a 5-leaf, linkage-driven iris in sheet brass or plywood, cut on a CNC router or laser cutter, with downloadable DXF and CRV files *(licence: not stated ⚑ [uncertain])*
- [Making a Mechanical Iris - Laser Cut Wood (Maker Design Lab)](https://makerdesignlab.com/experiments/mechanical-iris-prototype/): Laser-cut plywood iris with press-fitted bamboo-skewer or plywood pins; templates in PDF, SVG and DXF *(licence: not stated ⚑ [uncertain])*

## Pictures, videos and models

- [Iris Diaphragm.gif (Wikimedia Commons, by Catsquisher)](https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif): Animation of a 9-blade camera-lens iris diaphragm opening and closing *(licence: Public domain)*
- [Diaphragm (optics) (Wikipedia)](https://en.wikipedia.org/wiki/Diaphragm_(optics)): What an iris diaphragm is, blade counts and shapes, history (J. H. Brown's improved iris diaphragm by 1867, Waterhouse stops), with an iris animation, lens photos and a video of a Hasselblad lens aperture *(licence: Text CC BY-SA 4.0; images per file on Commons)*
- [Kurbelschwinge (Irisblende) / crank-rocker (iris diaphragm) (DMG-Lib mechanism description)](https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025): Classification of an iris diaphragm as a planar crank-rocker (four-bar) mechanism, with a principle diagram and a photo of a physical model *(licence: link only)*
- [Iris - Educational Model (osamutake, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=Q2gan0NM-qo): A printed six-blade iris with pivots on a control ring and pins in cam slots, opening and closing while keeping a round hole *(licence: link only)*
- [Print-In-Place Iris Box (remix) by LoboCNC ... freeing the mechanism (Anna Kastlunger, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=oLlPiXsoVfY): How to cut the tabs and free the moving parts of a print-in-place iris box after printing *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 7 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Diaphragm_(optics)>
- <https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif>
- <https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025>
- <https://kapycad.com/en/academy/machines/iris-aperture-diaphragm>
- <https://makezine.com/projects/mechanical-iris/>
- <https://makerdesignlab.com/experiments/mechanical-iris-prototype/>
- <https://hackaday.com/tag/mechanical-iris/>
- <https://hackaday.com/2014/03/24/mechanical-iris-will-make-you-want-a-laser-cutter-even-more/>
- <https://hackaday.com/2017/07/15/irising-chicken-coop-door/>
- <https://iris-calculator.com/how-does-joseph-spaghetti-iris-work/>
- <https://hapman.com/technical-brief-how-does-an-iris-valve-work/>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://www.printables.com/model/257845-print-in-place-iris-box-locking>
- <https://www.printables.com/model/132293-print-in-place-iris-box-remix>
- <https://www.printables.com/model/1503716-educational-model-of-iris>
- <https://www.printables.com/model/344266-spring-loaded-iris-gift-box>
- <https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades>
- <https://www.printables.com/model/278726-mechanical-iris-mechanism-with-5-blades>
- <https://www.youtube.com/watch?v=Q2gan0NM-qo>
- <https://www.youtube.com/watch?v=oLlPiXsoVfY>
- <https://www.youtube.com/watch?v=3_1MpSFiJ7A>
- <https://api.printables.com/graphql/>
