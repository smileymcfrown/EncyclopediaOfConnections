---
title: Tripod and stand screw mount
description: A single standard threaded socket or stud, nearly always 1/4-20 or 3/8-16 UNC, that lets any camera, light, phone
  holder or home-made part be screwed by hand onto any tripod, stand or rig, with locating pins, a lip, a rubber pad or a
  lock ring added because one screw on its own lets the part twist.
num: 393
term: 'Tripod and stand screw mount: a tripod socket or stud in a standard camera thread (1/4-20 UNC or 3/8-16 UNC to ISO
  1222 / DIN 4503), with anti-twist features, plus light-stand spigots and microphone-stand threads'
plain_name: The small threaded hole (or threaded stud) found under every camera and on top of every tripod, so anything with
  the same standard thread can be screwed onto a tripod, ball head, light stand, microphone stand or camera rig, with pins,
  a rubber pad or a locking ring to stop it twisting round
aliases:
- tripod socket, tripod mount, tripod thread, tripod screw hole, camera thread, camera screw (Wikipedia 'Tripod (photography)';
  Sony and Ricoh camera manuals)
- 1/4-20 UNC (1/4 inch, 20 threads per inch) and 3/8-16 UNC camera threads, to ISO 1222:2010 'Photography - Tripod connections'
  and DIN 4503 (Wikipedia 'Tripod (photography)'; gewinde-normen.de)
- older 1/4 in and 3/8 in BSW (Whitworth) tripod threads, close enough to UNC to fit each other (Wikipedia 'Tripod (photography)')
- head mount (1/4-20 stud on a tripod head) and base mount (3/8-16 stud joining the head to the legs) (Wikipedia 'Tripod head')
- tripod screw, D-ring screw (a camera screw with a fold-up ring to turn it by hand) (Wikimedia Commons 'Screw Head - Tripod
  screw-01.jpg')
- reducer bushing, thread adapter, 3/8-16 to 1/4-20 adapter, 'removable 1/4-20 UNC adapter' (Wikipedia 'Tripod (photography)';
  Printables 85177)
- 'ARRI-style locating pins, anti-twist pins, ARRI locating holes: two 3 mm pins 60 mm apart beside a 3/8-16 screw, or 10.4
  mm apart beside a 1/4-20 screw (Ulanzi, a manufacturer''s guide)'
- light-stand spigot, stud, baby pin, 5/8 in (16 mm) stud, spigot adapter; receiver (the socket on a stand) (Kupo; Wikipedia
  'C-stand')
- 'microphone-stand thread: 5/8-27 UNS (most common), 1/2-12 BSW (older German and European stands), 3/8-16 BSW (outside the
  US) (Wikipedia ''Microphone stand'')'
- heat-set insert 1/4-20, camera-thread insert (Prusa; CNC Kitchen)
family: quick-release & tool-free
other_families:
- clamping, magnetic & friction connections
- locating & alignment
finder:
  job: [join and hold, 'lock, and release by hand', line parts up exactly]
  motion: none
  special_behaviour: []
  holding_principle: [friction or clamping, shape]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: partly
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin), woodwork]
  connects: ['wall, rail, desk or grid']
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, soldering iron, drill and tap, power tools, hand tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points:
- kind: content
  note: '*Tripod and stand screw mount*: ARRI anti-twist pin geometry (3 mm pins 60 mm apart; mini version 10.4 mm) comes
    only from a manufacturer''s blog (Ulanzi); only the geometry was used. Maximum screw length differs (Sony: under 5.5 mm;
    Ricoh: 6.7 mm socket depth), both recorded. ISO 1222 itself could not be opened (iso.org 403); thread sizes are linked
    to gewinde-normen.de tables, not copied.'
uncertain_fields: [load, adjustable, making_tips_3d_printing, environment_limits, safety_notes]
diagram_idea: 'A cut-away of a printed block with a brass 1/4-20 insert, a tripod head''s stud screwing into it, and arrows
  showing the strong direction (pull along the screw) and the weak one (twisting round it), beside three small fixes: a rubber
  pad, a lip against the device, and two locating pins either side of the screw.'
links:
- url: https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg
  title: Screw Head - Tripod screw-01.jpg (Wikimedia Commons, by Andrew Pertsev)
  shows: Photo of a tripod screw with a fold-up D-ring for turning it by hand
  license: CC0
- url: https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg
  title: Tripod screw to light stand spigot; August 2020.jpg (Wikimedia Commons, by MIKI Yoshihito via Flickr)
  shows: Photo of an adapter between a tripod screw and a light-stand spigot
  license: CC BY 2.0
- url: https://en.wikipedia.org/wiki/Tripod_head
  title: Tripod head (Wikipedia)
  shows: Photos and description of head and base mounts, Arca-type plates with anti-rotation lips, ball heads and pan-tilt
    heads
  license: CC BY-SA 4.0 (text); images per file
- url: https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide
  title: 'ARRI Standard Pins: Navigating Professional Mounting Holes (Ulanzi, manufacturer''s guide)'
  shows: Explains and illustrates anti-twist locating pins beside 3/8-16 and 1/4-20 screws, with pin and hole sizes
  license: link only
- url: https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts
  title: Tips and tricks for heat-set inserts (CNC Kitchen)
  shows: Photos and video of fitting heat-set inserts in prints, including advice for large 1/4-20 camera-thread inserts
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/85177-tripod-adapter-14-20-to-38-thread
  title: Tripod adapter 1/4-20 to 3/8" thread (zx82net, Printables) (URL from Printables API, page not opened)
  what_it_is: Printable reducer bushings in three styles (coin-slot flange, hex flange, embedded with screwdriver slot) and
    two thread tolerances, also usable to add a clean 1/4-20 thread to another print
  license: Creative Commons Attribution-NonCommercial
- url: https://www.printables.com/model/152911-camera-tripod-screw-14-20-unc
  title: Camera (tripod) screw 1/4"-20 UNC (sbuerger, Printables) (URL from Printables API, page not opened)
  what_it_is: A printable classic tripod screw (STL and STEP) with printing advice and a clear warning to use it only for
    light or fixed cameras
  license: Creative Commons Attribution-NonCommercial-ShareAlike
- url: https://www.printables.com/model/481288-gopro-action-camera-mount-to-14-20-inch-tripod-scr
  title: GoPro Action Camera Mount to 1/4 20 inch Tripod screw (Alekkson, Printables) (URL from Printables API, page not opened)
  what_it_is: A printed adapter from a 1/4-20 tripod screw to a prong-type action-camera mount, with a pocket for an M5 nut
  license: Creative Commons Attribution
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
  title: BOSL2 screws.scad (OpenSCAD library)
  what_it_is: Parametric ISO and UTS screws, nuts and screw holes; UTS sizes are given as e.g. '1/4-20,1', so 1/4-20 and 3/8-16
    sockets, studs and nut traps can be modelled with chosen tolerance classes
  license: BSD 2-Clause
sources:
- https://en.wikipedia.org/wiki/Tripod_(photography)
- https://en.wikipedia.org/wiki/Tripod_head
- https://en.wikipedia.org/wiki/C-stand
- https://en.wikipedia.org/wiki/Microphone_stand
- https://en.wikipedia.org/wiki/Jam_nut
- https://www.gewinde-normen.de/en/camera-mount.html
- https://www.gewinde-normen.de/en/unified-coarse-thread.html
- https://threadingtoolsguide.com/en/blog/tripod-thread-din-4503-1-iso-1222/
- https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide
- https://kupogrip.com/kupo-universal-5-8in-16mm-stud-3-8in-16-male-and-1-4in-20-male-threads
- https://helpguide.sony.net/ilc/2230/v1/en/contents/TP1000669451.html
- https://support.ricoh360.com/faq/x-specification-002
- https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
- https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts
- https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
- https://www.prusa3d.com/product/heat-set-inserts-1-4-20-pcs/
- https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
- http://thrinter.com/creep-abs-pla-petg-alloy-910/
- https://help.prusa3d.com/article/pla_2062
- https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg
- https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://api.printables.com/graphql/
research: research/connection-types/results/Tripod_and_stand_screw_mount_tripod_socket_camera_thread.json
---

A single standard threaded socket or stud, nearly always 1/4-20 or 3/8-16 UNC, that lets any camera, light, phone holder or home-made part be screwed by hand onto any tripod, stand or rig, with locating pins, a lip, a rubber pad or a lock ring added because one screw on its own lets the part twist.

**In plain words:** The small threaded hole (or threaded stud) found under every camera and on top of every tripod, so anything with the same standard thread can be screwed onto a tripod, ball head, light stand, microphone stand or camera rig, with pins, a rubber pad or a locking ring to stop it twisting round. **Proper term:** Tripod and stand screw mount: a tripod socket or stud in a standard camera thread (1/4-20 UNC or 3/8-16 UNC to ISO 1222 / DIN 4503), with anti-twist features, plus light-stand spigots and microphone-stand threads.

**Also called:** tripod socket, tripod mount, tripod thread, tripod screw hole, camera thread, camera screw (Wikipedia 'Tripod (photography)'; Sony and Ricoh camera manuals); 1/4-20 UNC (1/4 inch, 20 threads per inch) and 3/8-16 UNC camera threads, to ISO 1222:2010 'Photography - Tripod connections' and DIN 4503 (Wikipedia 'Tripod (photography)'; gewinde-normen.de); older 1/4 in and 3/8 in BSW (Whitworth) tripod threads, close enough to UNC to fit each other (Wikipedia 'Tripod (photography)'); head mount (1/4-20 stud on a tripod head) and base mount (3/8-16 stud joining the head to the legs) (Wikipedia 'Tripod head'); tripod screw, D-ring screw (a camera screw with a fold-up ring to turn it by hand) (Wikimedia Commons 'Screw Head - Tripod screw-01.jpg'); reducer bushing, thread adapter, 3/8-16 to 1/4-20 adapter, 'removable 1/4-20 UNC adapter' (Wikipedia 'Tripod (photography)'; Printables 85177); ARRI-style locating pins, anti-twist pins, ARRI locating holes: two 3 mm pins 60 mm apart beside a 3/8-16 screw, or 10.4 mm apart beside a 1/4-20 screw (Ulanzi, a manufacturer's guide); light-stand spigot, stud, baby pin, 5/8 in (16 mm) stud, spigot adapter; receiver (the socket on a stand) (Kupo; Wikipedia 'C-stand'); microphone-stand thread: 5/8-27 UNS (most common), 1/2-12 BSW (older German and European stands), 3/8-16 BSW (outside the US) (Wikipedia 'Microphone stand'); heat-set insert 1/4-20, camera-thread insert (Prusa; CNC Kitchen).

## How it works

The thread does the holding: screwing the stud into the socket pulls the two faces together, and that clamping force plus the friction of the faces holds the device in place (Wikipedia 'Tripod head'). Because both sides use the same standard thread, any device fits any support (ISO 1222 via Wikipedia 'Tripod (photography)'). A single screw only clamps; it 'offers little resistance against the torsional forces' that try to turn the device round the screw (Ulanzi), so mounts add a rubber or cork pad to increase friction (Wikipedia 'Tripod head'), a lip or flange that bears against the camera body, a second screw, or locating pins that drop into holes beside the screw (Wikipedia 'Tripod head'; Ulanzi). Light stands use a plain round stud (spigot) that drops into a socket (receiver) on the stand, and spigot adapters carry camera threads on their ends (Kupo).

## Parts

A few parts: a female threaded socket (in the device, or a metal insert or nut in a printed part) and a male stud or thumbscrew (on the tripod head or plate), often with a rubber or cork pad, one or two locating pins, or a lock ring; adapters add a reducer bushing or a spigot.

## Everyday examples

- A camera or phone holder screwed onto a tripod (Wikipedia 'Tripod (photography)')
- A light or flash on a light stand, sitting on the stand's 5/8 in stud (Kupo; Wikipedia 'C-stand')
- A microphone clip screwed onto a microphone stand's 5/8-27 thread (Wikipedia 'Microphone stand')
- An action-camera prong mount, webcam or printer camera adapted to a 1/4-20 tripod screw (Printables 481288; Printables 152911)

## When to use it

Use it whenever a home-made device should fit the huge range of photo and video supports: put a 1/4-20 socket under a printed phone holder, sensor box, webcam, lamp, microscope adapter, binocular holder or robot camera so it can go on any tripod, ball head, clamp or magic arm, and a 3/8-16 socket for heavier items or where a tripod head bolts on (Wikipedia 'Tripod (photography)'; 'Tripod head'). Use spigot adapters to put camera-thread items on light stands, and 5/8-27 adapters for microphone stands (Kupo; Wikipedia 'Microphone stand'). Add locating pins or a lip when the item must always face the same way or carries leverage, such as a monitor or handle on a rig (Ulanzi).

## When not to use it

Not on its own when the item must come off and go back in seconds, or always line up exactly: add a quick-release plate (Arca-type dovetail) on top of the screw (Quick-release plate entry). Not for heavy or valuable gear held by a plastic thread: use a metal insert or nut, or a metal screw; a printed screw 'can not replace a metal screw' (Printables 152911). Not where the item must not twist under leverage and you can't add pins or a lip: use two screws or a clamp. Not for gripping a bar, pole or desk edge: use a clamp-on accessory mount. For action cameras the prong (clevis) mount is the native interface, and for cinema rigs the ARRI rosette (a Hirth joint); adapters exist between them and 1/4-20.

## Details

- **What it does (jobs):**
  - join and hold: screws a camera, light, phone, sensor or printed part onto a tripod, stand, ball head or rig
  - lock, and release by hand: done up and undone with fingers, a fold-out ring, a knob or a coin, with no tools
  - line parts up exactly: locating pins or a lip fix which way the device faces and stop it twisting (Ulanzi; Wikipedia 'Tripod head')
- **Movement:** none once tightened; the device turns on the thread only while being screwed on or off.
- **Directions it can move (degrees of freedom):** 0 when tight. With a single screw and no pins, the device can still twist about the screw if it isn't tight enough, which is the main weakness; locating pins remove that last freedom (Ulanzi; Wikipedia 'Tripod head').
- **Special behaviour:**
  - none: it is a plain hand-tightened screw joint (tool-free, but not instant like a quick-release plate). Its value is the standard: one thread size fits thousands of tripods, heads, stands and accessories (Wikipedia 'Tripod (photography)')
- **How it holds:**
  - friction or clamping (force-fit): the screw clamps the faces together, and a rubber or cork pad adds friction 'to prevent the head from unscrewing during use' (Wikipedia 'Tripod head')
  - shape (the parts interlock; form-fit): the thread flanks interlock, and locating pins, a lip or a spigot in its receiver stop sideways movement and twisting (Ulanzi; Kupo)
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** Light to medium. Along the screw (pull) a metal thread is strong, and even M3 screws in printed PETG took 86-166 kg to pull out in CNC Kitchen's tests, so pull-out is rarely what fails. The weak directions are twisting about the screw, where a single screw 'offers little resistance' (Ulanzi) and the device can rotate and work loose (Wikipedia 'Tripod head'), and the thread in plastic itself: in the same tests a screw driven straight into printed PETG stripped at only 1 Nm of tightening torque, against 3 Nm for a heat-set insert (CNC Kitchen 'Helicoils, threaded inserts and embedded nuts'). A long lens or heavy rig levering on one small screw adds bending load, which is why lens plates use two screws (Wikipedia 'Tripod head'). No load rating is given by ISO 1222 in the sources opened ⚑ [uncertain].
- **Play and precision:** A tight screw joint has no play, but it only returns to the same orientation if pins, a lip or a flat face locate it. Ulanzi's test for pinned mounts: 'If there is play before the screw is tightened, the system is relying on friction rather than geometry'. Mixed brands of 'ARRI-compatible' parts can wobble or fail to seat because of tolerance stack-up (Ulanzi). UNC and older BSW threads differ in flank angle (60° versus 55°) but fit each other well enough for tripods (Wikipedia 'Tripod (photography)'; threadingtoolsguide.com).
- **Taking it apart:** removable: unscrews by hand with no tools; for faster swaps a quick-release plate is usually added on top of this screw (Wikipedia 'Tripod head').
- **How often it can be reused:** many times with metal threads on both sides (brass insert, nut or metal socket). Threads cut or printed straight into plastic last only a few cycles: 'After disassembling and reassembling it a few times ... they won't hold anymore' (Prusa, heat-set insert page).
- **Sealing:** none
- **Adjustable:** yes, partly: with a single screw the device can be set facing any direction before tightening; locating pins fix one orientation instead. A lock ring tightened down against the device, working like a jam nut, holds it at the chosen angle (principle: Wikipedia 'Jam nut'); no camera maker's page on lock rings was opened ⚑ [uncertain].
- **Access needed:** one side only (blind): the socket is a blind threaded hole in the device, and the stud screws in from outside, so nothing has to be reached behind it.
- **Materials:** Sockets and studs are metal: brass heat-set inserts (Prusa; CNC Kitchen), brass spigot adapters (Kupo), aluminium plates with stainless-steel locating pins (Ulanzi). The thread can be put into PLA, PETG, ASA, nylon or resin prints by an insert or captive nut; into wood with a screw-in threaded insert; or tapped into aluminium. Plastic screws and plastic threads are only for light, low-value items: a printed 1/4-20 screw's designer warns that 'A plastic screw can not replace a metal screw', not even in an emergency (Printables 152911). PLA creeps under a constant load and has 'Low UV and temperature resistance' (Thrinter creep test; Prusa), so it is a poor choice for a mount that stays clamped in a hot car or the sun.
- **Heat, cold, water and wear:** Printed mounts: PLA creeps under constant load, so a clamped PLA mount slowly loosens (Thrinter), and it has 'Low UV and temperature resistance' (Prusa), so avoid it in hot cars or sunlight; PETG or ASA hold up better. Vibration and twisting loosen a single screw: add a pad, pins or a lock ring (Wikipedia 'Tripod head'; 'Jam nut'). Metal parts: brass and aluminium threads are unaffected by normal heat, cold and water, though long outdoor use was not covered by any source opened ⚑ [uncertain]. Cold: Ulanzi suggests fitting aluminium plates indoors in extreme cold to limit heat loss from the camera battery.

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: tripod screws, reducer bushings, spigot adapters, threaded inserts and nuts
  - 3D print (FDM): the mount body, with a heat-set insert, captive nut or (for light items) a printed thread
  - 3D print (resin): printed threads or glued-in inserts (Formlabs)
  - CNC: tapped 1/4-20 or 3/8-16 holes in aluminium plates and blocks
  - woodwork: a screw-in threaded insert or tapped hole in a wooden base
- **Printing it in one piece (print in place):** partly: the body and even a coarse printed thread can come off the printer ready to use, but for anything heavy or valuable it needs an added metal insert or nut, and the screw itself is a separate part.
- **Tools:** none to use (thumbscrew, knob or fold-out D-ring); a coin or flat screwdriver for slotted reducer bushings (Printables 85177); a soldering iron with an insert tip to fit a heat-set insert in a print (CNC Kitchen); a 1/4-20 or 3/8-16 tap to cut a thread in wood, aluminium or a printed hole (taps sold for DIN 4503-1 / ISO 1222, threadingtoolsguide.com).
- **Difficulty:** easy to moderate: designing a part with a 1/4-20 socket is easy if you melt in a brass insert or trap a nut; printing the thread itself works only for light items, and the hard part is stopping the part twisting, which needs pins, a lip or a pad.

### 3D printing tips

1) Put metal in the thread: melt in a 1/4-20 heat-set insert or trap a 1/4-20 nut (see Heat-set threaded insert and Captive nut pocket). Large inserts such as the 1/4 in camera thread 'carry a lot of thermal mass', so use a thick soldering tip, a slightly higher temperature and as much contact with the brass as possible (CNC Kitchen 'Tips and tricks for heat-set inserts'). 2) If you print the thread, 1/4-20 is about the smallest that works: Formlabs says to stick to 'at least 1/4-20 (imperial) or M6' and to use thread profiles designed for plastics (Formlabs). One adapter designer prints threads vertical, without supports, solid, at 0.15 mm layers or less, and offers looser and tighter (1A and 2A class) versions to try; slicer XY or horizontal-size compensation fixes a thread that is too tight (Printables 85177). 3) Leave enough plastic round the thread: at least the screw's diameter in wall thickness, i.e. about 6.4 mm round a 1/4-20 hole (Hubs rule of thumb: wall = fastener diameter). 4) Stop it twisting: add a rubber or cork pad, or a lip that bears against the camera body (Wikipedia 'Tripod head'), or holes for locating pins; for a 3/8-16 mount the pins are 3 mm, 60 mm apart, and for 1/4-20 'mini' mounts 10.4 mm apart (Ulanzi). Size pin holes slightly over 3 mm (Ulanzi models 3.05-3.10 mm holes for 2.98-3.00 mm pins in aluminium) and test-fit, since printed holes come out small; these figures are for metal, not prints ⚑ [uncertain]. 5) Mind the screw length: some cameras say to use a tripod screw shorter than 5.5 mm or damage may occur (Sony), while another's socket is 6.7 mm deep (Ricoh), so a printed adapter mustn't let a long screw bottom out in the camera. 6) Orientation: print so the layers don't run across the line of pull from the socket to where the part is held, or the part can split along its layers ⚑ [uncertain]. 7) Choose PETG, ASA or nylon over PLA for mounts that stay loaded, because PLA creeps (Thrinter) and softens in heat (Prusa).

### Buying one (off-the-shelf parts)

Search catalogues for: '1/4-20 tripod screw' or 'camera screw' (with D-ring, knob or coin slot), '3/8-16 to 1/4-20 reducer bushing' (thread adapter), '1/4-20 heat-set insert' and '3/8-16 threaded insert', '1/4-20 hex nut', '5/8 in baby pin' or 'spigot adapter' with 1/4-20 and 3/8-16 male threads (Kupo), '1/4-20 to 5/8-27 microphone thread adapter' (Wikipedia 'Microphone stand' notes such adapters), 'ARRI locating pin' screws and plates, 'cold shoe to 1/4-20 adapter', 'GoPro-style prong to 1/4-20 adapter', and 'lock ring' or 'thumb-wheel lock nut'. Thread size tables: gewinde-normen.de 'Camera mount threads' and 'UNC thread'.

## Rules of thumb

- Thread choice: ISO 1222:2010 calls for 1/4-20 UNC or 3/8-16 UNC; most consumer cameras use 1/4-20, and larger professional cameras and lenses may use 3/8-16 with a removable 1/4-20 adapter (Wikipedia 'Tripod (photography)'). Tripod heads usually sit on the legs with a 3/8-16 screw, or 1/4-20 for small heads and monopods (Wikipedia 'Tripod head'). For thread dimensions, link to a table such as gewinde-normen.de 'Camera mount threads' rather than copying it.
- Screw length, side by side: Sony tells users of one camera to use 'a tripod with a screw less than 5.5 mm (7/32 inches) long' or 'damage to the camera may occur' (Sony help guide); Ricoh gives its socket as UNC 1/4-20 'with a depth of 6.7 mm' and warns not to over-tighten (Ricoh THETA X FAQ).
- Stop the twist: cork or rubber on the base face, an anti-rotation lip or flange against the body, and two screws on long lens feet (Wikipedia 'Tripod head'); a small pin in front of the screw on camcorder tripods (Wikipedia 'Tripod (photography)'); or ARRI-style locating pins, 3 mm pins 60 mm apart beside a 3/8-16 screw and pins 10.4 mm apart beside a 1/4-20 screw (Ulanzi).
- Put a metal thread in plastic: in CNC Kitchen's M3 tests in PETG, screws straight into the plastic stripped at 1 Nm, nuts at 2 Nm and heat-set inserts lasted to 3 Nm, while pull-out was 118 kg (direct), 119 kg (insert), 86 kg (side-pocket nut) and 166 kg (nut in a pocket underneath) (CNC Kitchen); heat-set inserts 'stay the king for connections you open over and over' (CNC Kitchen).
- Printed threads only at 1/4-20 or M6 and larger (Formlabs), and avoid FDM-printed threads below M5 (Hubs).
- Minimum wall thickness round a threaded hole equals the fastener diameter (Hubs), about 6.4 mm for 1/4-20 and 9.5 mm for 3/8-16.
- Light-stand spigot: a round 5/8 in (16 mm) 'baby' stud 'will fit into any 5/8" (16mm) receiver', and spigot adapters carry a 1/4-20 male thread on one end and 3/8-16 on the other (Kupo). Microphone stands most often use 5/8-27 (Wikipedia 'Microphone stand').
- On stands, set a clamp so the weight of the gear tightens the knob clockwise ('righty tighty'), or the weight will slowly loosen it and drop the gear, and weigh the base down with shot bags or sandbags (Wikipedia 'C-stand').

## Common failures

The device twists round the screw and works loose: add a rubber or cork pad, a lip, a second screw or locating pins (Wikipedia 'Tripod head'; Ulanzi). The thread strips in a print, or wears out after a few fittings: use a heat-set insert or captive nut (CNC Kitchen; Prusa). A printed thread is too tight or too loose: print the thread vertical at fine layers and use the tolerance version or XY compensation that fits (Printables 85177). A heat-set 1/4-20 insert goes in crooked or won't melt in: use a thick tip, a little more heat and a straight push (CNC Kitchen). A printed mount cracks along its layers or creeps loose over time: thicker walls (Hubs), a better plastic (Thrinter; Prusa) and metal threads. Pins that won't seat or wobble between brands of 'ARRI' parts (Ulanzi). A screw too long for the camera's socket (Sony). A stand clamp set the wrong way round slowly loosening under the load (Wikipedia 'C-stand').

## Safety

Falling gear: a camera, light or monitor falls if the thread strips in plastic, catches only a few turns, or unscrews by twisting; use a metal insert or nut, screw it fully home, and check it by pulling and twisting before letting go (Ulanzi's 'Tug Test'). A printed screw is only for light cameras, mounts meant to break away (e.g. on drones or RC models), or cameras that won't be moved after mounting (Printables 152911). Too long a screw can damage the camera (Sony); don't over-tighten (Ricoh). Stands: set clamps so the load tightens them and weigh the base with sandbags, or the stand can tip or drop its load (Wikipedia 'C-stand'). Never mount anything over people's heads on a printed mount without a separate safety cable ⚑ [uncertain].

## Related

- Quick-release plate (camera plate, dovetail clamp): an Arca-type plate is fixed to the camera with this screw and then slides into a clamp for fast swaps
- Heat-set threaded insert: the usual way to get a strong metal 1/4-20 thread into a print
- Captive nut pocket (nut trap): a cheaper metal thread, a trapped 1/4-20 nut
- Printed screw thread: printing the 1/4-20 thread itself, for light items only
- Screw-in threaded insert (wire thread insert, self-tapping insert): for wood and for repairing stripped sockets
- Clevis joint (fork-and-pin joint, prong mount): the GoPro-style prong mount, often adapted to 1/4-20
- Hirth joint (face-spline coupling): the ARRI rosette used on cinema rigs to stop rotation with teeth
- Ball-and-socket joint (lockable ball head): the tripod ball head that sits on a 3/8-16 stud and carries a 1/4-20 screw
- Clamp-on accessory mount for bars, poles and edges: for fixing to things with no threaded hole
- Locating pins and hole-and-slot: the general way to stop a part turning or shifting, as ARRI pins do
- Thread-locking hardware (nylon-insert nut, lock washer, split pin) and Jam nuts: other ways to stop a screw working loose
- Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip): the thumbscrew on a tripod head is one of these

## Make it yourself

- [Tripod adapter 1/4-20 to 3/8" thread (zx82net, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/85177-tripod-adapter-14-20-to-38-thread): Printable reducer bushings in three styles (coin-slot flange, hex flange, embedded with screwdriver slot) and two thread tolerances, also usable to add a clean 1/4-20 thread to another print *(licence: Creative Commons Attribution-NonCommercial)*
- [Camera (tripod) screw 1/4"-20 UNC (sbuerger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/152911-camera-tripod-screw-14-20-unc): A printable classic tripod screw (STL and STEP) with printing advice and a clear warning to use it only for light or fixed cameras *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- [GoPro Action Camera Mount to 1/4 20 inch Tripod screw (Alekkson, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/481288-gopro-action-camera-mount-to-14-20-inch-tripod-scr): A printed adapter from a 1/4-20 tripod screw to a prong-type action-camera mount, with a pocket for an M5 nut *(licence: Creative Commons Attribution)*
- [BOSL2 screws.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad): Parametric ISO and UTS screws, nuts and screw holes; UTS sizes are given as e.g. '1/4-20,1', so 1/4-20 and 3/8-16 sockets, studs and nut traps can be modelled with chosen tolerance classes *(licence: BSD 2-Clause)*

## Pictures, videos and models

- [Screw Head - Tripod screw-01.jpg (Wikimedia Commons, by Andrew Pertsev)](https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg): Photo of a tripod screw with a fold-up D-ring for turning it by hand *(licence: CC0)*
- [Tripod screw to light stand spigot; August 2020.jpg (Wikimedia Commons, by MIKI Yoshihito via Flickr)](https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg): Photo of an adapter between a tripod screw and a light-stand spigot *(licence: CC BY 2.0)*
- [Tripod head (Wikipedia)](https://en.wikipedia.org/wiki/Tripod_head): Photos and description of head and base mounts, Arca-type plates with anti-rotation lips, ball heads and pan-tilt heads *(licence: CC BY-SA 4.0 (text); images per file)*
- [ARRI Standard Pins: Navigating Professional Mounting Holes (Ulanzi, manufacturer's guide)](https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide): Explains and illustrates anti-twist locating pins beside 3/8-16 and 1/4-20 screws, with pin and hole sizes *(licence: link only)*
- [Tips and tricks for heat-set inserts (CNC Kitchen)](https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts): Photos and video of fitting heat-set inserts in prints, including advice for large 1/4-20 camera-thread inserts *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 6 sentences on this page marked [uncertain].
- ⚑ Research note: *Tripod and stand screw mount*: ARRI anti-twist pin geometry (3 mm pins 60 mm apart; mini version 10.4 mm) comes only from a manufacturer's blog (Ulanzi); only the geometry was used. Maximum screw length differs (Sony: under 5.5 mm; Ricoh: 6.7 mm socket depth), both recorded. ISO 1222 itself could not be opened (iso.org 403); thread sizes are linked to gewinde-normen.de tables, not copied.

## Sources

- <https://en.wikipedia.org/wiki/Tripod_(photography)>
- <https://en.wikipedia.org/wiki/Tripod_head>
- <https://en.wikipedia.org/wiki/C-stand>
- <https://en.wikipedia.org/wiki/Microphone_stand>
- <https://en.wikipedia.org/wiki/Jam_nut>
- <https://www.gewinde-normen.de/en/camera-mount.html>
- <https://www.gewinde-normen.de/en/unified-coarse-thread.html>
- <https://threadingtoolsguide.com/en/blog/tripod-thread-din-4503-1-iso-1222/>
- <https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide>
- <https://kupogrip.com/kupo-universal-5-8in-16mm-stud-3-8in-16-male-and-1-4in-20-male-threads>
- <https://helpguide.sony.net/ilc/2230/v1/en/contents/TP1000669451.html>
- <https://support.ricoh360.com/faq/x-specification-002>
- <https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/>
- <https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts>
- <https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment>
- <https://www.prusa3d.com/product/heat-set-inserts-1-4-20-pcs/>
- <https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/>
- <http://thrinter.com/creep-abs-pla-petg-alloy-910/>
- <https://help.prusa3d.com/article/pla_2062>
- <https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg>
- <https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://api.printables.com/graphql/>
