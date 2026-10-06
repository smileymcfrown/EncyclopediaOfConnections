---
title: Eccentric cam lever
description: A hand lever whose pivot is set off-centre in a round or spiral cam, so swinging the lever wedges the cam against
  a surface and squeezes parts together with many times the force of your hand, and the cam's gentle slope (or a small over-centre
  step) keeps it shut until you flip it back.
num: 22
term: Eccentric cam lever (cam clamp, quick-release skewer)
plain_name: 'A lever with a lopsided round end: flip it one way and the off-centre bulge presses the parts together hard and
  stays shut; flip it back and they come free, like the lever on a bike wheel or seat post'
aliases:
- cam lever
- cam clamp
- eccentric clamp
- eccentric lever
- clamping lever with eccentric cam (industrial standard-part name, e.g. GN 927)
- cam-action clamp
- quick-release lever or QR lever
- quick-release skewer (bicycle wheels)
- quick-release seatpost clamp (bicycle seat posts and stems)
- lever lock or flick lock (trekking poles, tripod legs)
- cam lock lever (not the furniture 'cam lock' fitting, which is a different part)
- internal-cam and external-cam skewer
- spiral cam clamp (a variant with a spiral rather than circular cam)
- Exzenterspanner or Schnellspanner (German names)
family: over-centre, toggle & cam clamps
other_families:
- quick-release & tool-free
- clamping, magnetic & friction connections
- self-locking & anti-back-drive
finder:
  job: [join and hold, 'lock, and release by hand']
  motion: rotate
  special_behaviour: [self-locking, over-centre, quick-release, hand-release only]
  holding_principle: [friction or clamping, shape]
  reuse_cycles: many times
  seal: none
  access_needed: both sides
  print_in_place: partly
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, woodwork]
  connects: [something to grip]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [straight push or pull]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: tool-free quick release
  power: passive
needs_confirming:
  motion_in:
    kind: source uncertain
    reason: '`input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli
      [uncertain])…"'
  motion_out:
    kind: source uncertain
    reason: '`input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli
      [uncertain])…"'
  shaft_layout:
    kind: source uncertain
    reason: '`input_output` is marked [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli
      [uncertain])…"'
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…ud or to adjust the tension screw on some other pole and tripod
      locks [uncertain]…"'
confirmed: []
open_points: []
uncertain_fields: [input_output, load, tools_needed, processes, making_tips_3d_printing, environment_limits, safety_notes,
  common_failures, make_it_yourself]
diagram_idea: 'Side view of a lever with an off-centre round cam pressing on a washer over two plates: three frames show the
  gap closing as the lever swings, a small graph of cam height against lever angle rising steeply then flattening (with a
  tiny dip past the peak for the over-centre version), and an inset wedge showing that the slope at the closed position is
  shallower than the friction angle.'
links:
- url: https://commons.wikimedia.org/wiki/File:Quick_release_scewer.JPG
  title: Quick release scewer.JPG (Wikimedia Commons)
  shows: Photo of a bicycle quick-release skewer with its cam lever, rod and nut
  license: CC BY-SA 3.0 or GFDL 1.2+ (AndrewDressel)
- url: https://www.sheldonbrown.com/skewers.html
  title: Bicycle Quick-Release Mechanisms (Sheldon Brown)
  shows: Photos of open, adjusted and closed quick releases, internal versus external cams, lawyer-lip dropouts and a hazard
    diagram of the external-cam washer
  license: link only
- url: https://www.youtube.com/watch?v=vaeRNEE9wmU
  title: Clamping lever with eccentrical cam GN 927 (JW Winco, YouTube)
  shows: Manufacturer video of an industrial eccentric cam clamping lever (title and channel confirmed via YouTube oEmbed;
    content not viewed)
  license: link only
- url: https://www.youtube.com/watch?v=fkTCNT-1sJ8
  title: THIS Print Will Keep Your Bag of Chips Closed (Chip Clip!) (3D Printing Nerd, YouTube)
  shows: Review of Andrei's print-in-place cam bag clip, a 3D-printed eccentric cam lever (title and channel confirmed via
    YouTube oEmbed; linked from the model page)
  license: link only
- url: https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/cam-clamps
  title: 'Different Types of Cam Clamps: The Comprehensive Guide (Carr Lane)'
  shows: Illustrated guide to eccentric versus spiral cams and cam-action strap, edge, up-thrust and hold-down clamps
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/27216-bag-clip-print-in-place-cam
  title: Bag Clip (PRINT IN PLACE CAM) (Andrei, Printables)
  what_it_is: Print-in-place clip whose cam gives mechanical advantage and locks, with a documented cam profile (10-degree
    self-locking slope) and clearance versions of 0.1 to 0.3 mm. Details read through the Printables public API because the
    web page blocks automated access
  license: GPL 3.0
- url: https://www.printables.com/model/1539611-cam-lever-quick-release-clamp
  title: Cam lever - quick release clamp (mikan, Printables)
  what_it_is: Printable cam lever that works with an M3 or M4 bolt and nut (thread longer than 20 mm recommended). Read through
    the Printables public API
  license: CC0 (public domain)
- url: https://www.printables.com/model/1676459-cnc-side-clamp-eccentric-strong-hold-and-low-profi
  title: CNC Side Clamp Eccentric - Strong Hold and Low profile (Wood Burning Studio, Printables)
  what_it_is: Low-profile eccentric side clamp for CNC routing, with print settings (PETG, 6 walls, printed on its side) and
    an M6 bolt and washer. Read through the Printables public API
  license: CC BY-NC
- url: https://hackaday.io/project/152898-universal-quick-release-bar-clamps
  title: Universal Quick-Release Bar Clamps (Hackaday.io)
  what_it_is: Parametric OpenSCAD/Customizer cam-lock clamps that slide onto T-slot aluminium extrusion ('lift to lock, push
    to release'), with files on Thingiverse
  license: not stated on the Hackaday.io page [uncertain]
sources:
- https://en.wikipedia.org/wiki/Quick_release_skewer
- https://www.sheldonbrown.com/skewers.html
- https://commons.wikimedia.org/wiki/File:Quick_release_scewer.JPG
- https://www.ganternorm.com/fileadmin/user_upload/downloads/technischer%20anhang/technical_information/spannkraefte.pdf
- https://www.jwwinco.com/en-us/products/2.3-Tensioning-with-eccentric-cams-and-wedge-clamps/Clamping-levers-with-eccentrical-cam
- https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/cam-clamps
- https://www.firgelliauto.com/blogs/mechanisms/cam-clamp
- https://www.firgelliauto.com/blogs/mechanisms/quick-release-skewer
- https://www.bikeradar.com/features/angryasian-death-to-crappy-quick-release-skewers
- https://brainybiker.com/archives/21848
- https://en.wikipedia.org/wiki/Cam_(mechanism)
- https://cascadedesigns.com/blogs/msr-gear-guides/tech-talk-why-msr-poles-dynalock-technology-is-so-simple
- https://hackaday.io/project/152898-universal-quick-release-bar-clamps
- https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
- https://www.printables.com/model/27216-bag-clip-print-in-place-cam
- https://www.printables.com/model/1539611-cam-lever-quick-release-clamp
- https://www.printables.com/model/1676459-cnc-side-clamp-eccentric-strong-hold-and-low-profi
- https://api.printables.com/graphql/
- https://www.youtube.com/watch?v=vaeRNEE9wmU
- https://www.youtube.com/watch?v=fkTCNT-1sJ8
research: research/connection-types/results/Eccentric_cam_lever_cam_clamp_quickrelease_skewer.json
---

A hand lever whose pivot is set off-centre in a round or spiral cam, so swinging the lever wedges the cam against a surface and squeezes parts together with many times the force of your hand, and the cam's gentle slope (or a small over-centre step) keeps it shut until you flip it back.

**In plain words:** A lever with a lopsided round end: flip it one way and the off-centre bulge presses the parts together hard and stays shut; flip it back and they come free, like the lever on a bike wheel or seat post. **Proper term:** Eccentric cam lever (cam clamp, quick-release skewer).

**Also called:** cam lever; cam clamp; eccentric clamp; eccentric lever; clamping lever with eccentric cam (industrial standard-part name, e.g. GN 927); cam-action clamp; quick-release lever or QR lever; quick-release skewer (bicycle wheels); quick-release seatpost clamp (bicycle seat posts and stems); lever lock or flick lock (trekking poles, tripod legs); cam lock lever (not the furniture 'cam lock' fitting, which is a different part); internal-cam and external-cam skewer; spiral cam clamp (a variant with a spiral rather than circular cam); Exzenterspanner or Schnellspanner (German names).

## How it works

The lever turns a cam whose pivot is off-centre (eccentric), so as the lever swings, the distance from the pivot to the pressing face grows, like pushing a slowly thickening wedge into a gap (Firgelli, Cam clamp; Ganter). A long lever and a small cam rise turn a modest hand push into a large clamping force, roughly 17 to 25 times the hand force on standard industrial cam levers (Ganter table). It stays closed because the cam slope at the closed position is shallower than the friction angle, so friction stops it sliding back (self-locking), and many levers, such as bike skewers, go slightly past the highest point of the cam ('over the top') so that vibration pushes them further closed rather than open (Sheldon Brown). The threaded rod and adjusting nut set the starting gap, and so how hard it clamps.

## Parts

A few parts: lever with the cam shape (or a cam body with a lever), a pivot pin or axle, a bearing surface or washer the cam presses on, and usually a threaded rod or stud with an adjusting nut that sets how tight it closes. A bike quick-release skewer is: lever and cam, cam body, skewer rod, two conical springs and an adjusting nut (Sheldon Brown).

## Everyday examples

- Quick-release skewers on bicycle wheels (Wikipedia, Sheldon Brown)
- Quick-release seat post and stem clamps on bicycles (Sheldon Brown)
- Lever locks on adjustable trekking poles and tripod legs (MSR)
- Sash window locks, where a cam pulls the window shut and locks itself (Wikipedia, Cam (mechanism))

## When to use it

Use a cam lever when something must be clamped firmly but released and re-clamped often and fast, with no tools and even with cold or gloved hands: wheels and seat posts, adjustable poles and tripod legs, fences and stops on woodworking jigs, work-holding in drill jigs and assembly fixtures, and brackets that slide on aluminium extrusion. It is also a neat way for makers to add a strong, adjustable clamp using one bolt and a printed lever.

## When not to use it

Avoid it where there is strong vibration or shock (use a screw clamp, a toggle clamp or a positive lock), because eccentric cams can shake loose and have only one true locking point (Carr Lane). Avoid it where a sideways or twisting load tries to drag the clamped parts, such as disc-brake wheels, where a through-axle is safer (Wikipedia, Sheldon Brown). Don't use it where the clamp must hold a precise position against large loads on its own; add a pin or shoulder to locate the parts. If you need even more holding force or a firm over-centre lock with a visible open/closed state, use a toggle clamp or draw latch; for a permanent joint, use a bolt or glue.

## Details

- **What it does (jobs):**
  - join and hold: clamps a wheel in a frame, a seat post in a tube, a part in a jig or a bracket on a rail
  - lock, and release by hand: flips shut to hold and flips open to release, without tools
- **Movement:** rotate: the lever swings through part of a turn (about 90 to 180 degrees) to produce a short straight pull or push of about a millimetre or two; industrial spiral cams lock anywhere within a 180-degree throw (Carr Lane)
- **Directions it can move (degrees of freedom):** 1 while operating: the lever turns about its pivot. Once closed, the clamped parts have 0, because friction holds them together
- **Special behaviour:**
  - self-locking (holds under load, won't back-drive): a shallow cam slope, smaller than the friction angle, stops the clamping force from pushing the lever open (Firgelli; Ganter: self-locking 'as soon as the dead centre is exceeded')
  - over-centre (snaps past a point and stays): bike skewer cams go 'over the top' so the clamp loosens very slightly as the lever reaches the end, and vibration then tends to hold it closed (Sheldon Brown)
  - quick-release: one flick of the lever opens or closes it with no tools, which is why Tullio Campagnolo invented it for racing wheels in 1927 (Wikipedia, Quick release skewer)
  - hand-release only (locks under load, releases when a person operates it): the clamped load cannot open it; only moving the lever does
- **How it holds:**
  - friction or clamping (force-fit): the parts are held by being squeezed together; the cam itself is held shut by friction on its shallow slope
  - shape (the parts interlock; form-fit): only for over-centre cams, where the lever must climb back over a small bump in the cam profile to open
- **Input and output:** Lever rotation (about a quarter to half turn) -> short straight clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli ⚑ [uncertain]). Force gain about 17 to 25 times: e.g. 75 N at the end of a 44 mm lever gives 1,250 to 1,750 N, and 350 N on a 101 mm lever gives 6,100 to 8,000 N (Ganter). In-line arrangement: the lever usually pulls on a rod or stud through its own pivot. Back-drivable: no when correctly designed (self-locking or over-centre), but eccentric cams can shake loose under strong vibration (Carr Lane).
- **Power:** passive (no power needed)
- **Load:** medium to heavy for its size: industrial cam levers give about 1.25 to 8 kN of clamping force (Ganter GN 927 table); bike skewers are quoted at about 550 kgf (external cam) to 550 to 800 kgf (internal cam) by Brainy Biker, but only 1,000 to 2,500 N by Firgelli, so real values vary a lot ⚑ [uncertain]. Strong in straight pull along the rod; the joint it makes resists sliding (shear) only by friction, so a sideways or twisting load, such as disc-brake forces on a wheel, can make it slip or loosen (Wikipedia, Sheldon Brown)
- **Play and precision:** Play: none once clamped (held by friction). Repeatability: the clamp force repeats as long as the adjusting nut is not moved; position repeats only as well as whatever locating features the clamped parts have. Misalignment: tolerates small errors because it just squeezes, but the cam must bear squarely on its washer; on external-cam skewers a curved plastic washer can turn 90 degrees so the cam presses on the wrong face and the clamp goes dangerously loose (Sheldon Brown)
- **Taking it apart:** tool-free quick release: flipping the lever releases the clamp by hand; setting the tightness once needs only finger-turning of the adjusting nut or knob
- **How often it can be reused:** many times: made to be opened and closed daily (bike wheels, jigs, poles); cams and washers slowly wear, and printed plastic cams creep
- **Sealing:** none: it only clamps; internal-cam skewers enclose the cam, which keeps dirt out of the mechanism but seals nothing (Sheldon Brown)
- **Adjustable:** yes: the adjusting nut or threaded stud sets the starting gap and so the clamping force (Sheldon Brown); industrial levers offer an adjustable bearing plate (JW Winco); some trekking-pole lever locks have a tension dial for adjusting on the go (MSR)
- **Access needed:** both sides for through-rod types (lever on one end, nut on the other, as on bike skewers); one side only (blind) when the lever's stud screws into a tapped hole
- **Materials:** Steel cam in a metal body (internal-cam skewers), aluminium levers and cams (external-cam skewers) with plastic, rubber or brass washers (Sheldon Brown, Brainy Biker); industrial levers in plastic, polyamide (PA), steel, zinc die-cast or stainless steel (JW Winco); aluminium lever and stainless steel cam on trekking-pole locks (MSR); hardwood (e.g. maple) for woodworking cam clamps, often with cork, urethane or knurled pads for grip (Firgelli). Printed versions in PLA or PETG around a steel bolt (Printables)
- **Heat, cold, water and wear:** Grip depends on friction, so oil, grease, paint or anodising on the clamped faces lowers the holding force (Firgelli ⚑ [uncertain]; BikeRadar suggests testing a skewer with a drop of oil on the cam to reveal poor designs). Vibration can loosen eccentric and spiral cams (Carr Lane). Temperature swings make pole materials swell or shrink slightly, which can make cam-locked pole sections slip (MSR). Printed plastic cams and levers creep under constant load and lose clamping force over time (Hackaday). No temperature ratings for the standard metal levers were found in the sources opened ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part (clamping levers with eccentric cam, cam handles, bike quick-release skewers)
  - 3D print (FDM): cam levers and clips around a metal bolt or pin; print-in-place bag clips
  - woodwork: traditional hardwood cam clamps and jig hold-downs
  - CNC: machined metal cams and levers for heavier clamping
  - laser cut: flat cam levers from plywood or acrylic ⚑ [uncertain]
- **Printing it in one piece (print in place):** partly: most printed cam levers need an added bolt or pin as the pivot and a nut or threaded stud to pull on (e.g. mikan's cam lever needs an M3 or M4 bolt); small light-duty designs such as Andrei's bag clip print fully assembled as three hinged parts (Printables)
- **Tools:** none to operate; fingers to set the adjusting nut on skewers (Sheldon Brown) or a tension dial on some pole locks (MSR); a hex key or screwdriver to fit an industrial lever on its stud or to adjust the tension screw on some other pole and tripod locks ⚑ [uncertain]
- **Difficulty:** easy to moderate: a printed cam lever around a bolt or a store-bought cam lever is easy to fit, but getting a cam that clamps hard, stays shut and doesn't creep open needs a shallow cam slope, a metal pivot and a tough plastic

### 3D printing tips

Make the cam slope at the closed position shallower than the slip (friction) angle of your plastic: Andrei's print-in-place bag clip uses a quick-closing first quarter turn, then a quarter turn with a 10-degree slope, measured to be below the slip angle for PLA, which gives the most force and cannot back-drive, and ends with a short constant-radius section that gives a satisfying lock (Printables 27216). His clip has 0.1 mm clearance on the printed shaft (with 0.15, 0.20 and 0.30 mm versions for looser printers) and 0.15 mm layers because the vertical gaps are exactly three layers; other layer heights change the gaps. Use a steel bolt or pin as the pivot and a washer under the cam, as in the CNC side clamp, which uses an M6 bolt and a 6 x 25 mm washer, PETG, 6 walls, 25 percent gyroid infill, and is printed on its side for strength, not flat (Printables 1676459). Walls matter more than infill for printed clamps (3 shells recommended, Hackaday.io bar clamps). Print the lever so its layers run along its length ⚑ [uncertain]. Expect printed cams to lose some clamp force over time, because plastic under constant load creeps and PLA makes a poor spring (Hackaday, 'The Challenges Of 3D Printing Reliable Springs'); PETG or nylon are safer for anything left clamped for weeks ⚑ [uncertain].

### Buying one (off-the-shelf parts)

Search: 'clamping lever with eccentric cam' (e.g. GN 927 series, lever lengths 44 to 101 mm, threads M3 to M12 or 8-32 to 3/8-16, tapped or threaded-stud versions, with or without adjustable bearing plate; JW Winco/Ganter), 'cam handle' or 'cam lever' (Carr Lane), 'cam edge clamp', 'cam action strap clamp', 'spiral cam clamp', 'quick release skewer' (internal cam or external cam; front and rear lengths), 'quick release seatpost clamp', 'lever lock' or 'flick lock' spare parts for trekking poles and tripods.

## Rules of thumb

- Self-locking needs the cam rise angle to be no bigger than the friction angle, phi = atan(mu); for steel on dry hardwood (mu about 0.3) keep the profile within about 17 degrees of the tangent at the lock point (Firgelli, Cam clamp)
- A 10-degree cam slope was measured to be below the slip angle for printed PLA on PLA and does not back-drive (Andrei, Bag Clip (PRINT IN PLACE CAM), Printables)
- Standard eccentric clamping levers: 44 mm lever and 75 N hand force give 1,250 to 1,750 N; 63 mm and 125 N give 2,250 to 3,100 N; 82 mm and 200 N give 3,700 to 5,000 N; 101 mm and 350 N give 6,100 to 8,000 N, i.e. a force gain of about 17 to 25 times (Ganter, 'Clamping and manual forces in clamping levers with eccentrical cam')
- Friction coefficients to assume: plastic on plastic about 0.25, steel on steel about 0.2 (0.1 lubricated), plastic on steel about 0.15; use safety factors of 1.2 to 1.5 for steady loads, 1.8 to 2.4 for pulsating and 3 to 4 for alternating loads (Ganter)
- Clamping force is roughly hand force x lever length / [cam lever arm x (wedge term + friction at the cam) + pivot radius x friction at the pivot], so friction at the pivot and cam eats a large share of the force (Ganter worked example: 350 N x 76 mm gives about 7,000 N)
- A circular eccentric has only one true locking point; a spiral (involute) cam locks anywhere over its throw, but both can loosen under heavy vibration, so use them for drill jigs, light-to-medium milling, inspection and assembly fixtures where vibration is small (Carr Lane)
- Bike skewer setup: turn the adjusting nut until the gap closes with the lever sticking out at about 70 degrees, then press the lever home; it should take enough force to leave an imprint on your palm (Sheldon Brown; Wikipedia)
- Internal (enclosed) cams clamp harder than external cams, especially cheap external cams with a compressible plastic washer (Sheldon Brown, BikeRadar, Brainy Biker)

## Common failures

Not actually clamped: the lever is closed without enough resistance, or used like a wing nut (Sheldon Brown); fix by tightening the adjusting nut until closing leaves a mark on your palm. Adjusting nut too tight, so the lever can't close fully and sits short of its locking point (Sheldon Brown). Loss of force from worn or dirty cams and missing or worn washers, and from compressible plastic washers on cheap external cams (Firgelli ⚑ [uncertain]; Brainy Biker). Slipping when contact pads glaze or pivot holes wear oval, and crushed cam lobes in softwood clamps (Firgelli). Shaking loose under vibration (Carr Lane). On printed levers: creep that slowly reduces clamp force, and levers snapping along layer lines ⚑ [uncertain].

## Safety

A bike quick release that is left open, or closed like a wing nut without real clamping force, can let the wheel fall out; forks have 'lawyer lips' (raised tabs) as a backup, and disc-brake forces tend to push the axle out of the dropouts (Wikipedia, Sheldon Brown). On external-cam skewers the curved plastic washer can rotate so the cam presses on its flat and the clamp goes loose enough for the wheel to fall out (Sheldon Brown). Quick-release wheels are easy to steal (Wikipedia). The lever snaps shut with force, so keep fingers out from between lever and frame ⚑ [uncertain].

## Related

- Toggle clamp and over-centre linkage: use links that go past a straight line instead of a cam; usually give more holding force and a more definite locked position
- Draw latch: an over-centre lever that pulls two parts together through a hook, for lids and cases
- Eccentric adjuster (eccentric nut or bushing): uses the same off-centre idea to make small position adjustments, not to clamp and release quickly
- Spiral cam clamp: a cam with a spiral (involute) face that can lock anywhere in its throw rather than at one point (Carr Lane)
- Wing nut or thumb screw: tool-free too, but slower; holds by screw friction and is less sensitive to how it is set
- Bicycle through-axle: a threaded axle that replaced skewers on many disc-brake bikes because it is not pushed out by braking forces (Wikipedia)
- Cam buckle and cam cleat: use a toothed cam to grip a strap or rope rather than to clamp two rigid parts
- Furniture cam lock (cam fitting): a different part with a similar name, a rotating disc that pulls a bolt to join flat-pack panels
- Clamp-on accessory mount for bars, poles and edges: a clamp that grips an existing bar, pole or desk edge to carry an accessory; a cam lever is often what closes it without tools

## Make it yourself

- [Bag Clip (PRINT IN PLACE CAM) (Andrei, Printables)](https://www.printables.com/model/27216-bag-clip-print-in-place-cam): Print-in-place clip whose cam gives mechanical advantage and locks, with a documented cam profile (10-degree self-locking slope) and clearance versions of 0.1 to 0.3 mm. Details read through the Printables public API because the web page blocks automated access *(licence: GPL 3.0)*
- [Cam lever - quick release clamp (mikan, Printables)](https://www.printables.com/model/1539611-cam-lever-quick-release-clamp): Printable cam lever that works with an M3 or M4 bolt and nut (thread longer than 20 mm recommended). Read through the Printables public API *(licence: CC0 (public domain))*
- [CNC Side Clamp Eccentric - Strong Hold and Low profile (Wood Burning Studio, Printables)](https://www.printables.com/model/1676459-cnc-side-clamp-eccentric-strong-hold-and-low-profi): Low-profile eccentric side clamp for CNC routing, with print settings (PETG, 6 walls, printed on its side) and an M6 bolt and washer. Read through the Printables public API *(licence: CC BY-NC)*
- [Universal Quick-Release Bar Clamps (Hackaday.io)](https://hackaday.io/project/152898-universal-quick-release-bar-clamps): Parametric OpenSCAD/Customizer cam-lock clamps that slide onto T-slot aluminium extrusion ('lift to lock, push to release'), with files on Thingiverse *(licence: not stated on the Hackaday.io page ⚑ [uncertain])*

## Pictures, videos and models

- [Quick release scewer.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Quick_release_scewer.JPG): Photo of a bicycle quick-release skewer with its cam lever, rod and nut *(licence: CC BY-SA 3.0 or GFDL 1.2+ (AndrewDressel))*
- [Bicycle Quick-Release Mechanisms (Sheldon Brown)](https://www.sheldonbrown.com/skewers.html): Photos of open, adjusted and closed quick releases, internal versus external cams, lawyer-lip dropouts and a hazard diagram of the external-cam washer *(licence: link only)*
- [Clamping lever with eccentrical cam GN 927 (JW Winco, YouTube)](https://www.youtube.com/watch?v=vaeRNEE9wmU): Manufacturer video of an industrial eccentric cam clamping lever (title and channel confirmed via YouTube oEmbed; content not viewed) *(licence: link only)*
- [THIS Print Will Keep Your Bag of Chips Closed (Chip Clip!) (3D Printing Nerd, YouTube)](https://www.youtube.com/watch?v=fkTCNT-1sJ8): Review of Andrei's print-in-place cam bag clip, a 3D-printed eccentric cam lever (title and channel confirmed via YouTube oEmbed; linked from the model page) *(licence: link only)*
- [Different Types of Cam Clamps: The Comprehensive Guide (Carr Lane)](https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/cam-clamps): Illustrated guide to eccentric versus spiral cams and cam-action strap, edge, up-thrust and hold-down clamps *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 12 sentences on this page marked [uncertain].
- ⚑ Finder value `motion_in` = steady turning (source uncertain): `input_output` is marked ⚑ [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli ⚑ [uncertain])…"
- ⚑ Finder value `motion_out` = straight push or pull (source uncertain): `input_output` is marked ⚑ [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli ⚑ [uncertain])…"
- ⚑ Finder value `shaft_layout` = not applicable (source uncertain): `input_output` is marked ⚑ [uncertain] here: "…clamping stroke (a skewer pulls its rod about 0.8 to 1.2 mm, Firgelli ⚑ [uncertain])…"
- ⚑ Finder value `tools` = none, hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…ud or to adjust the tension screw on some other pole and tripod locks ⚑ [uncertain]…"

## Sources

- <https://en.wikipedia.org/wiki/Quick_release_skewer>
- <https://www.sheldonbrown.com/skewers.html>
- <https://commons.wikimedia.org/wiki/File:Quick_release_scewer.JPG>
- <https://www.ganternorm.com/fileadmin/user_upload/downloads/technischer%20anhang/technical_information/spannkraefte.pdf>
- <https://www.jwwinco.com/en-us/products/2.3-Tensioning-with-eccentric-cams-and-wedge-clamps/Clamping-levers-with-eccentrical-cam>
- <https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/cam-clamps>
- <https://www.firgelliauto.com/blogs/mechanisms/cam-clamp>
- <https://www.firgelliauto.com/blogs/mechanisms/quick-release-skewer>
- <https://www.bikeradar.com/features/angryasian-death-to-crappy-quick-release-skewers>
- <https://brainybiker.com/archives/21848>
- <https://en.wikipedia.org/wiki/Cam_(mechanism)>
- <https://cascadedesigns.com/blogs/msr-gear-guides/tech-talk-why-msr-poles-dynalock-technology-is-so-simple>
- <https://hackaday.io/project/152898-universal-quick-release-bar-clamps>
- <https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/>
- <https://www.printables.com/model/27216-bag-clip-print-in-place-cam>
- <https://www.printables.com/model/1539611-cam-lever-quick-release-clamp>
- <https://www.printables.com/model/1676459-cnc-side-clamp-eccentric-strong-hold-and-low-profi>
- <https://api.printables.com/graphql/>
- <https://www.youtube.com/watch?v=vaeRNEE9wmU>
- <https://www.youtube.com/watch?v=fkTCNT-1sJ8>
