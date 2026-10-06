# over-centre, toggle & cam clamps: Snaps past a dead point and stays

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 19 Over-centre linkage (toggle linkage)

*over-centre, toggle & cam clamps.* Two links that push past a straight line and lock there, so a load pushes the joint harder into its locked position instead of opening it

### What it is

- **plain_name**: Two hinged bars that you push just past a straight line so they rest against a stop; a load pushing on them then only locks them tighter, and you unlock them by pulling the middle hinge back
- **term**: Over-centre linkage (toggle linkage, toggle joint, knee lever)
- **aliases**: 
  - over-center linkage (US spelling)
  - toggle linkage
  - toggle mechanism
  - toggle joint / toggle-joint (the name used in 507 Mechanical Movements)
  - knee lever / knee joint
  - Kniehebel (German)
  - over-centre lock / over-center lock
  - over-centre mechanism
  - over-centring (the act of pushing a linkage past its centre point)
  - dead point / dead centre (the straight-line position itself)
  - over-centre folding brace (folding table legs)
  - over-center locked strut (aircraft landing gear down-lock)
- **family**: over-centre, toggle & cam clamps
- **other_families**: self-locking & anti-back-drive, motion conversion, locks, latches & catches
- **one_liner**: Two links joined by a middle hinge (the knee) are pushed just past their straight-line position and rest against a stop, so a load that tries to fold them only presses the knee harder into the stop, giving a lock that needs no spring or catch plus a very large force boost near the straight position.
- **complexity**: A few parts: two rigid links (bars), three pin joints (one at each outer end and the knee in the middle), a fixed stop that the knee or handle rests against just past straight, and usually a handle that moves the knee. Real devices add a frame, a screw or threaded link to adjust the length, and often a release lever or a spring.
- **how_it_works**: When two hinged links are almost in a straight line, a small sideways push on the middle hinge makes a very large push along the links (toggle action); at 1 degree from straight the output force is about 29 times the input (Britannica). If you push the knee through the straight line (the dead point) and let it rest a few degrees beyond it against a stop, a load from the output side now tries to fold the knee further the same way, into the stop, instead of back the way it came, so it stays locked with no hand force (Sclater; Hackaday on locking pliers). Because the parts are squeezed slightly as they pass straight and then relax a little, opening it means pushing the knee back through that tight point, which a small, deliberate push on the knee or handle does easily (Wikipedia 'Locking pliers'; Sclater).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a position or a squeezing force until someone pushes the knee back past straight
  - join and hold: keeps a folding brace, strut, lid or clamp arm firmly in its open or closed position
  - change speed or turning force: multiplies force enormously at the very end of the stroke, as in toggle presses, stone crushers, riveters and clamps
- **motion**: rotate: the links swing on their pins through a limited arc and stop a few degrees past straight against a stop; the output end usually moves a short distance in a straight line (slider-crank form) or swings a lever
- **degrees_of_freedom**: 1 while it moves: a single input angle sets the position of the whole linkage (it is a four-bar or slider-crank chain). Effectively 0 once locked, because the load can only push it harder against its stop
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): the knee is pushed through the straight line and held on the far side by a stop
  - self-locking (holds under load, won't back-drive): a load from the output side drives the knee into the stop, so the load cannot open it (Hackaday on locking pliers; Sclater p.106, Fig. 5)
  - hand-release only (locks under load, releases when a person operates it): opening needs a push or pull on the knee or handle, back through the tight straight position
  - quick-release: one flick of the handle unlocks it
  - motion conversion (force multiplication): near straight, a large, easy input movement becomes a tiny, very forceful output movement (Britannica; Sclater p.106)
- **holding_principle**: 
  - shape (form-fit): the lock is geometric; the knee sits on the wrong side of the straight line and bears against a stop
  - spring force (a spring or springy part presses it in place): the clamping force it holds comes from the parts, a pad, a gasket or the workpiece being squeezed or stretched slightly (elastic preload) as the knee passes straight
- **input_output**: Input: a swing of the handle or a sideways push on the knee -> output: a short push or pull along the links, or a small swing of an output lever. For a symmetrical toggle pushed at the knee, output force = input force / (2 x tan of each link's angle from straight) (formula from the Firgelli blog, consistent with Britannica's 'about 29 times at 1 degree'): roughly 5.7:1 at 5 degrees and 28:1 at 1 degree, rising towards infinity at straight, although friction and flexing keep real forces much lower (Sclater p.106). Shaft arrangement: not applicable (links and pins working in one plane). Back-drivable: yes before it reaches centre; no once it is past centre and resting on its stop. *(unverified parts omitted)*
- **power**: passive (no power needed). Powered versions exist, where an air cylinder, hydraulic ram or motor moves the knee (pneumatic toggle clamps, aircraft landing gear); because the lock is geometric, DESTACO states its pneumatic toggle clamps stay mechanically locked even with total loss of air pressure, so it keeps its last state
- **removability**: tool-free quick release: the lock opens by hand with a flick of the handle; the linkage itself is pinned or bolted together and can be taken apart with tools
- **reuse_cycles**: effectively unlimited: locking and unlocking does not wear it out quickly; the limit is wear of the pins and holes, and creep or wear in plastic parts
- **tools_needed**: None to operate. To build or fit: a drill, pins or shoulder bolts with lock nuts, and spanners or hex keys; often a screw or shim to set how far past centre it goes
- **seal**: none: it is a locking linkage. It only helps to seal when it squeezes a lid onto a gasket (see Draw latch)
- **load**: Medium to very heavy depending on size: the load runs straight along the links as a pure push or pull, which is their strong direction, and machines such as stone crushers and toggle presses use it for very large forces (Sclater p.106). Weak points: the pins (in shear), the stop (it takes the locking force) and any sideways or twisting load that bends the links; *(unverified parts omitted)*
- **adjustable**: Usually yes: a screw or threaded link changes the effective length, which sets the clamping force and how far past centre it locks (the adjusting screw of locking pliers, Wikipedia; the spindle of a toggle clamp; the threaded hook of a draw latch). Setting it too tight can stop it passing centre or leave it sitting exactly on centre, unlocked (US patent 4,925,221)
- **play_and_precision**: Small play, set by the pin clearances; the locked position is very repeatable because it always ends against the same stop. Near straight the output hardly moves, so small errors in link length change the clamping force a lot; *(unverified parts omitted)*
- **access_needed**: not applicable: it is a mechanism built into a device; you only need to reach the handle or knee that operates it
- **materials**: Steel links with hardened steel pins for tools, clamps and presses; stainless steel for wet places; for makers: aluminium, hardwood with metal-rod pivots, laser-cut acrylic or plywood plates (Teaching Tech's launcher), and 3D prints (PETG, PLA, nylon) with bolts or steel rod as pins
- **maker_difficulty**: easy to moderate: two bars and three pins are easy to make, but placing the stop correctly (a few degrees past straight) and giving it enough springiness to hold a clamping force takes some trial and error

### Making it

- **processes**: 
  - 3D print (FDM): demonstration linkages, latches and light clamps, with bolts or steel rod as pins
  - laser cut: flat links from acrylic, plywood or sheet (Teaching Tech's over-centre launcher uses laser-cut 3 mm plates)
  - woodwork: hardwood links with metal-rod pivots
  - CNC and sheet metal: machined or stamped steel links for strong versions
  - off-the-shelf part: toggle clamps, draw latches and locking pliers are ready-made over-centre linkages
- **print_in_place**: yes, for small demos and latches: ConceivablyEngineering's 'Sturdy print-in-place draw latch' prints already assembled as a working over-centre linkage with 0.2-0.3 mm gaps. Load-bearing linkages are normally printed as separate parts and joined with metal pins or bolts (e.g. Mick Stuart's 'Over Centre Latch' uses an M5 bolt).
- **making_tips_3d_printing**: 1) Design the stop first. Decide the locked position a little past straight and give the knee or handle a solid surface to rest on. Sclater's sourcebook says that for positive locking the closed position should be 'slightly beyond the toggle position', and German Wikipedia notes the locking effect needs a mechanical stop. 2) Build in a little springiness. The lock only holds a force if something is squeezed or stretched as the knee passes straight: a TPU pad (PA1_MAKER prints the clamp pad in TPU), a slightly flexible hook or loop, or a gasket. With nothing springy it either won't pass centre or holds with no force. 3) Use metal pins. M3-M5 bolts with nyloc nuts, or steel rod (Glenn Brockett's over-centre latch uses 2.2 mm welding rod and says filament pins 'may work, not advised'); printed pins wear quickly and add play, which reduces how far past centre it sits. 4) Clearances: about 0.2-0.3 mm for print-in-place joints; slight under-extrusion on the first layer helps the joints come free (ConceivablyEngineering). 5) Orientation: the links carry push and pull along their length, so print them lying flat with the layers running along the link, and orient pin bosses so the lever's shear force doesn't split layers (PA1_MAKER). Glenn Brockett warns 'You MUST have good layer adhesion or it will break'. 6) Strength: thick walls matter more than infill (1.2 mm shells, ConceivablyEngineering; 5-7 walls, PA1_MAKER; at least 3 perimeters and over 30% infill for latches, zx82net). Size parts for the multiplied force at the knee, not your hand force: Mick Stuart notes his printed latch was easy to test to destruction because 'it has a fair bit of leverage'. 7) Material: use PETG (or better) for anything warm, outdoors or under constant load; PLA softens and deforms above about 60 °C and PETG is good to about 80 °C (Prusa), and printed PLA latches can creep and loosen over time (zx82net). 8) Tune by test: make sure the moving pivot really passes the line between the other two, or it won't snap closed (TECbot); scaling a printed latch by just 2% in X and Y noticeably changes its tightness (zx82net). *(unverified parts omitted)*
- **off_the_shelf_parts**: Ready-made over-centre devices: toggle clamps (hold-down, push-pull, latch-action and squeeze-action), draw latches (toggle latches) with keepers, locking pliers (Vise-Grip (brand), Mole grips (brand)), and folding table leg braces. Pivot hardware for home-made linkages: shoulder bolts, clevis pins, dowel pins, nyloc (nylon-insert lock) nuts and washers.
- **rules_of_thumb**: 
  - Force multiplication of a symmetrical toggle pushed at the knee: F_out = F_in / (2 tan θ), where θ is each link's angle from straight; about 29 times at 1 degree (Britannica 'Toggle mechanism'; formula as given by the Firgelli blog).
  - Maximum clamping force is reached when the three pivot points are in a straight line (DESTACO).
  - Friction keeps real forces far below the theoretical infinity at the straight position, though they are still high (Sclater, Mechanisms and Mechanical Devices Sourcebook, 4th ed., p.106).
  - For positive locking, the closed position should be slightly beyond the toggle (straight) position; a small unlatching force then opens it (Sclater, 4th ed., p.106, Fig. 5). The locking effect needs a mechanical stop (German Wikipedia 'Kniehebel').
  - If a latch is adjusted too tight it can finish exactly on centre, looking closed but unlocked; too loose leaves a gap that lets vibration work on it (US patent 4,925,221, toggle latch with automatic safety catch).
  - Locking pliers pass through their tightest point and then relax slightly, so to open them they have to be squeezed tighter first (Wikipedia 'Locking pliers').
  - IFToMM calls the straight-line position a 'dead point': a configuration in which the input cannot move the mechanism without help from the motion of another link (IFToMM terminology 2.2.57). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Locking pliers (Vise-Grip (brand), Mole grips (brand)): squeeze the handles until they snap and they stay clamped on their own
  - Folding table leg braces: the middle hinge of the brace sits slightly past straight to hold the leg out (EP 1044630)
  - Swing-top bottles and Kilner-style jars: the wire bail snaps over to hold the lid down on its rubber seal
  - Aircraft landing gear: an over-centre locked strut stops the gear folding up under landing loads (AOPA)
- **when_to_use**: Use an over-centre linkage when something must lock firmly in one position and still open quickly by hand, with no key, spring catch or screw: folding legs, braces and stands that must not collapse, lids and doors that must be pulled tight, clamps that hold work, and robot mechanisms that should hold a position without motor power (Game Manual 0 notes over-centring makes a linkage harder to back-drive). It is also the classic way to get a very large force over the last millimetre of a stroke from a small hand or motor force: presses, crimpers, punches and crushers.
- **when_not_to_use**: Avoid it when you need to hold at many different positions (it locks only at its end point): use a ratchet, a friction hinge or a screw instead. Avoid it when the load can come from the opposite direction or when vibration is severe and safety matters, unless you add a secondary catch or pin (aircraft door toggle latches and folding-table braces add safety catches; US 4,925,221, EP 1044630). Where you need a long, even squeezing force, or the part thickness varies a lot, a screw clamp is easier to set. For a snap that holds in two positions with no stop, a bistable spring (compliant) mechanism may be simpler.
- **environment_limits**: Metal linkages are limited mainly by corrosion and pin wear: use stainless steel in wet places. Plastic and printed ones lose holding force over time as the squeezed parts creep and relax: printed PLA latches can loosen (zx82net), and PLA softens above about 60 °C and PETG above about 80 °C (Prusa; CNC Kitchen saw PLA start to give at 60 °C, PETG at 80 °C and ASA at 110 °C). Vibration can bump a handle that sits only just past centre back over (Roche; US 4,925,221).
- **safety_notes**: Pinch and crush points: the force near straight is huge (about 29 times the input at 1 degree, Britannica), so keep fingers out of the links and the jaws (Roche cites pinch points as a common hazard). Don't rely on a printed or unsecured over-centre lock to hold people or heavy loads (folding tables and aircraft gear add safety catches). If the stop breaks or wears away, the linkage can fold the other way and collapse. *(unverified parts omitted)*
- **common_failures**: 1) Not far enough past centre: it sits on or very near centre and shakes or springs open; move the stop or adjust the length so it clearly snaps over (US 4,925,221). 2) Too tight: it cannot be pushed past centre, or forcing it bends links or cracks printed parts; back off the adjustment (Roche). 3) Worn or sloppy pins: clearance reduces the preload and how far past centre it sits; use metal pins and replace worn ones (Firgelli lists knee-pin wear first). 4) Creep: plastic parts and pads relax under constant squeeze and the lock goes slack (zx82net); use PETG or nylon, or a metal spring element. 5) Missing or weak stop: the knee over-travels and the load folds it; make the stop solid. 6) Printed parts snapping along layers under the multiplied force; print for strength and orient layers along the links.
- **related**: 
  - Toggle clamp: a ready-made over-centre linkage that presses work down or pushes it sideways
  - Draw latch (over-centre latch): the same linkage used to pull a lid or door shut via a loop and keeper
  - Eccentric cam lever (cam clamp, quick-release skewer): locks by turning an off-centre cam just past its high point instead of straightening two links; cheaper but with a less consistent clamping point (DESTACO)
  - Bistable compliant mechanism: a springy one-piece part that snaps between two stable positions without pins or a stop
  - Spring toggle (snap-action switch): an over-centre spring that flips a lever quickly to either end, as in light switches (Sclater p.107; Thang 'Spring toggle mechanism 5')
  - Ratchet and pawl: holds at many positions in one direction instead of at one locked end point
  - Worm drive or lead screw: also resists being driven back, but by friction in a screw thread rather than by geometry

### Pictures, videos and models

- **links**: 
  - [Kniehebel.jpg (Wikimedia Commons, photo by Kolossos)](https://commons.wikimedia.org/wiki/File:Kniehebel.jpg): Demonstration model at TU Chemnitz of a knee lever (toggle linkage) used to make large forces in a high-speed stamping press *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licence))*
  - [Locking pliers.jpg (Wikimedia Commons, photo by Duk)](https://commons.wikimedia.org/wiki/File:Locking_pliers.jpg): Photo of locking pliers, the best-known everyday over-centre linkage *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licence))*
  - [Toggle linkage 1a (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=1MmgKShth7w): CAD animation of a stone crusher with two toggle linkages in series giving a very large crushing force *(licence: link only (standard YouTube licence))*
  - [Snap motion 5 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=p4kDKY3UNFI): CAD animation of an over-centre lock: turning the latching lever one way cocks and locks a slide, turning it back releases it *(licence: link only (standard YouTube licence))*
  - [Over centre mechanisms will make your designs more effective - Guide with examples (Teaching Tech, YouTube)](https://www.youtube.com/watch?v=NVtsrisYtUE): Real-world examples and four 3D-printed over-centre designs (basic, closing latch, cam latch, CO2 canister launcher) with a summary of their key characteristics *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [C02 dragster / F1 in Shools launcher (TeachingTech, Printables)](https://www.printables.com/model/451928-c02-dragster-f1-in-shools-launcher): An over-centre trigger mechanism plus the other over-centre examples from the Teaching Tech video; laser-cut 3 mm plates and 3D-printed parts, with Onshape CAD source *(licence: CC BY-NC-SA)*
  - [Over Centre Latch (Mick Stuart, Printables)](https://www.printables.com/model/1325355-over-centre-latch): A simple printed over-centre latch on an M5 bolt; the designer suggests experimenting with different axle placements *(licence: CC BY)*
  - [Locking Pliers (Thorgraum, Printables)](https://www.printables.com/model/416707-locking-pliers): Printable self-locking pliers (an over-centre toggle) with a bolt pivot; later versions ease the release of fully closed pliers *(licence: CC BY-NC)*
  - [Sturdy print-in-place draw latch (ConceivablyEngineering, Printables)](https://www.printables.com/model/130254-sturdy-print-in-place-draw-latch): An over-centre latch that prints already assembled, with no supports and 0.2-0.3 mm gaps *(licence: CC BY-SA)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entries 'TOGGLE-PRESS' no. 158 and 'TOGGLE-CLAMP' no. 36)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animations of a toggle press and a toggle clamp that lock past the dead point; adjustable link lengths and pivot positions *(licence: MIT)*
- **diagram_idea**: Three side-by-side frames of two links and a knee: bent (unlocked), exactly straight (dead point, tightest squeeze) and a few degrees past straight resting on a stop, with arrows showing the load pushing the knee into the stop, plus a small graph of force multiplication rising steeply as the angle to straight shrinks.
- **sources**: 
  - https://www.britannica.com/technology/toggle-mechanism
  - https://de.wikipedia.org/wiki/Kniehebel
  - https://en.wikipedia.org/wiki/Locking_pliers
  - https://en.wikipedia.org/wiki/Flip-top
  - https://rexresearch1.com/Books/SclaterMechanismsMechanicalDevicesSourcebook.pdf
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://iftomm-terminology.antonkb.nl/2057/02.html
  - https://507movements.com/mm_140.html
  - https://507movements.com/mm_164.html
  - https://507movements.com/mm_385.html
  - https://hackaday.com/2017/03/29/marvelous-mechanisms-the-ubiquitous-four-bar-linkage/
  - https://gm0.org/en/latest/docs/common-mechanisms/linkages.html
  - https://www.aopa.org/news-and-media/all-news/2018/june/flight-training-magazine/how-it-works-gear-extension
  - https://patents.google.com/patent/EP1044630A1/en
  - https://patents.google.com/patent/US4925221A/en
  - https://www.destaco.com/resources/how-to-buy-guides/how-to-calculate-exerting-force-clamping-force--holding-capacity
  - https://www.destaco.com/resources/blogs-and-insights/what-to-know-about-manual-quick-action-toggle-clamps
  - https://www.destaco.com/clamping/Pneumatic/Pneumatic-Toggle-Clamp.html
  - https://www.mjvail.com/destaco/intropage3.html
  - https://mechanical-engineering.com/toggle-clamps-mechanics/
  - https://www.firgelliauto.com/blogs/mechanisms/toggle-mechanism
  - https://www.firgelliauto.com/blogs/mechanisms/toggle-latch
  - https://rochehardware.com/how-to-use-toggle-clamps/
  - https://www.rowse.co.uk/blog/post/how-to-choose-holding-toggle-clamps
  - https://www.woodsmith.com/article/build-your-own-toggle-clamp/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Kniehebel.jpg
  - https://commons.wikimedia.org/wiki/File:Locking_pliers.jpg
  - https://commons.wikimedia.org/wiki/Category:Knee_levers
  - https://www.youtube.com/watch?v=1MmgKShth7w
  - https://www.youtube.com/watch?v=p4kDKY3UNFI
  - https://www.youtube.com/watch?v=vYSJn0U0kXI
  - https://www.youtube.com/watch?v=NVtsrisYtUE
  - https://www.printables.com/model/451928-c02-dragster-f1-in-shools-launcher
  - https://www.printables.com/model/1325355-over-centre-latch
  - https://www.printables.com/model/416707-locking-pliers
  - https://www.printables.com/model/130254-sturdy-print-in-place-draw-latch
  - https://www.printables.com/model/476807-playing-card-sturdy-box-with-over-center-latch
  - https://www.printables.com/model/462782-toggle-clamp
  - https://www.printables.com/model/1548353-over-center-toggle-latch
  - https://www.printables.com/model/49414-zx82net-customizable-rugged-waterproof-box
  - https://api.printables.com/graphql/
  - https://huangyan920.github.io/Mechanical/

### Other info

- **Fields with unverified parts:** input_output, load, making_tips_3d_printing, play_and_precision, rules_of_thumb, safety_notes

## 20 Toggle clamp

*over-centre, toggle & cam clamps.* A lever clamp that snaps past centre to hold work down firmly and releases with a flick; horizontal, vertical, push-pull and squeeze styles

### What it is

- **plain_name**: A lever clamp you screw to a bench or jig: push the handle over and it snaps down to press a part firmly in place and stays locked; flick the handle back and it lets go
- **term**: Toggle clamp (toggle lever clamp, quick-action toggle clamp)
- **aliases**: 
  - toggle lever clamp
  - quick-action toggle clamp
  - quick-release clamp (Halder's name for them)
  - hold-down clamp / hold-down toggle clamp
  - vertical-handle and horizontal-handle hold-down clamps (vertical and horizontal toggle clamps)
  - push-pull toggle clamp / straight-line action clamp / plunger clamp / push rod clamp
  - latch-action clamp / latch clamp / hook-type toggle clamp / U-bolt latch clamp
  - squeeze-action clamp / gripper clamp / toggle pliers
  - pneumatic (air-powered) toggle clamp
  - auto-adjusting (self-adjusting) hold-down clamp
  - DESTACO / De-Sta-Co clamp (brand)
  - Kniehebelspanner (German)
- **family**: over-centre, toggle & cam clamps
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A lever-and-link clamp that swings its arm or plunger onto the work, multiplies the hand force as its links straighten, and locks just past the straight position (over centre) so it holds the part firmly without any hand pressure until you pull the handle back.
- **complexity**: A small assembly that acts as one unit: a base (flat or flanged, with mounting holes), a handle, one or two short links, a clamping arm (solid, or slotted so the spindle can move along it) or a sliding plunger, pivot pins or rivets, and a spindle (a threaded bolt with a rubber or hard tip, locked by nuts) that touches the work. Latch versions replace the arm and spindle with a U-bolt or hook and a separate latch plate.
- **how_it_works**: The handle, a short link, the clamping arm and the base form a four-bar linkage (toggle action). Moving the handle first swings the arm quickly onto the work, then the linkage straightens and the force multiplies (DESTACO quotes 2:1 to 10:1 across its manual clamps). Just before the handle reaches its stop, the middle pivot crosses the line joining the other two (over centre), so the push of the work against the spindle now holds the handle shut instead of opening it, and the clamp stays locked with no hand force (Carr Lane; DESTACO). Pulling the handle back past centre releases it. Horizontal, vertical, push-pull, latch and squeeze styles all use this same linkage, arranged differently.

### Finder attributes

- **job**: 
  - join and hold: holds work down on a jig, fixture or bench for drilling, routing, sawing, gluing or welding
  - lock, and release by hand: locks with a push on the handle and releases with a pull, with no tools
  - tighten and hold tension: latch-action versions pull lids, covers and doors shut and keep them squeezed
- **motion**: multiple: the handle and clamping arm rotate through a limited arc on pivot pins (hold-down, latch and squeeze styles), while push-pull styles slide a plunger in a straight line
- **degrees_of_freedom**: 1 while moving: the handle angle sets the position of every part; effectively 0 once locked over centre, because the work can only push it harder against its stop
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): the linkage passes its straight-line point and locks against a fixed stop (M.J. Vail / DESTACO)
  - self-locking (holds under load, won't back-drive): force from the work goes along the aligned links into the base, so it cannot push the handle open (mechanical-engineering.com; Carr Lane)
  - hand-release only (locks under load, releases when a person operates it): only pulling the handle back past centre opens it
  - quick-release: clamps and unclamps with a single one-handed movement of the handle
  - motion conversion (force multiplication): a long, light handle movement becomes a short, strong clamping movement, 2:1 to 10:1 (DESTACO)
  - fail-safe or breakaway: pneumatic toggle clamps stay mechanically locked even with total loss of air pressure (DESTACO)
- **holding_principle**: 
  - friction or clamping (force-fit): it holds the work by pressing it against the base or fixture
  - shape (form-fit): the lock inside the clamp is geometric, with the linkage resting past centre against a stop
- **input_output**: Handle swing -> swing of the clamping arm (hold-down, squeeze and latch styles) or straight stroke of the plunger (push-pull style). Force ratio (mechanical advantage) 2:1 to 10:1 across DESTACO's manual range; on one example arm, 10:1 at the clamping point nearest the base and 5.3:1 further out (DESTACO). Efficiency: not usually quoted. Back-drivable: no once locked over centre; the work cannot push it open.
- **power**: passive (no power needed) for manual clamps. Powered versions: pneumatic (air-powered) toggle clamps for production work, and air-powered push clamps (McMaster-Carr). DESTACO states its pneumatic toggle clamps stay mechanically locked even with total loss of air pressure, so they keep their last state
- **removability**: tool-free quick release for the work being clamped; the clamp itself is screwed or bolted to the jig or bench and is removable with tools
- **reuse_cycles**: effectively unlimited: clamping and unclamping is its normal use; the mounting can also be moved many times
- **tools_needed**: None to use. To fit and adjust: a drill, screws or through-bolts with washers and lock nuts (Roche), and a spanner for the spindle lock nuts; Popular Woodworking suggests swapping one hex nut for a wing nut so the spindle can be adjusted by hand
- **seal**: none: it only presses parts; latch-action versions can hold a lid down on a gasket, and the gasket does the sealing
- **load**: Light to heavy depending on size and style. Typical maximum holding capacities: horizontal up to about 1,300 lbf (5.8 kN), vertical up to about 5,060 lbf (22.5 kN), push-pull 100-16,000 lbf (0.4-71 kN), latch up to 7,500 lbf (33 kN), squeeze 100-1,200 lbf (0.4-5.3 kN) (Rowse); Halder's range is 0.25-8 kN. Strongest in the clamping direction; holding capacity is rated with the spindle nearest the handle or base and falls as the spindle moves out along the arm (DESTACO; Carr Lane). *(unverified parts omitted)*
- **adjustable**: Yes: the threaded spindle screws up and down (or in and out) to set the clamping height and force, and on open (slotted) arms it can be moved along the arm; latch types have threaded U-bolts or hooks; auto-adjusting models adapt to different thicknesses by themselves (McMaster-Carr); spring-action spindles allow more variation (Carr Lane)
- **play_and_precision**: Small play; it closes to the same point every time, a 'more consistent clamping point' than a cam-action clamp (DESTACO). The rubber tip and slight flexing let it accept slightly different part thicknesses without readjustment (Carr Lane). It is not a locating device on its own: push the part against fixed stops or pins and let the clamp hold it there (Roche)
- **access_needed**: one side only (blind) when screwed down from the top into a jig or bench; through-bolts (recommended by Roche for vibration) need both sides
- **materials**: Mostly zinc-plated steel; also stainless steel (for corrosion, washdown and higher temperatures), aluminium and lightweight composite, with plastic or rubber handle grips and rubber-cushioned or bare hex-head spindles (DESTACO; Carr Lane; JW Winco; McMaster-Carr). Makers print them in PETG or PLA with steel bolts as pins, or build them from hardwood with aluminium-rod pivots (Woodsmith)
- **maker_difficulty**: easy to fit, moderate to make: commercial ones are cheap and just screw down; printed or wooden versions work for light jigs but need metal pins, strong prints and a correctly placed stop

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice; cheap and widely available
  - 3D print (FDM): several mostly or fully printed designs for light jigs and 3D-printer or drill-press hold-downs
  - woodwork: shop-made hardwood clamps with metal-rod pivots (Woodsmith) *(unverified parts omitted)*
- **print_in_place**: no: the printed designs found are printed as separate parts and assembled with bolts (DrTomFlint, PA1_MAKER, Tom), with printed pins and a few drops of glue (Cristian), or assembled with no fasteners or glue (Macshay)
- **making_tips_3d_printing**: 1) Pins: use steel bolts through the pivots (M3-M6 in the designs found, with lock nuts), not printed pins, for anything that takes real force; DrTomFlint's clamp uses two M3x20, two M3x40 and one M4x12 screw, Tom's PETG 'Kniehebelspanner' uses M5 bolts with lock nuts. Fully printed designs (Cristian's vertical-lever clamp, printed pins glued in; Macshay's no-fastener clamp) suit light duty. 2) Walls over infill: PA1_MAKER recommends at least 5 walls (7 used) with 25% infill; DrTomFlint uses 3 perimeters for the base, link and handle and 5 perimeters for the arm to reduce flex; Tom printed 15 outer lines in PETG for stiffness. 3) Orientation: lay parts out so the lever's shear forces run along the layers, and raise the nozzle temperature a little on the shaft parts for better layer bonding (PA1_MAKER). Print threaded parts with fine layers (0.15 mm, DrTomFlint) so the threads are clean. 4) Threads and nuts: use a real bolt as the spindle and embed a nut by pausing the print (Tom pauses to insert an M6 nut); threaded blocks and arms may need supports. 5) Pad: print the clamping pad in TPU so it grips and adds a little springiness, which the over-centre lock needs to hold a force (PA1_MAKER). 6) Set the stop and spindle so the pad touches the work slightly before the handle goes over centre; the handle should snap down with firm hand pressure (Roche). 7) Material: PETG or tougher for workshop use; PLA softens above about 60 °C (Prusa) and can creep under a constant clamping load (zx82net observed printed PLA latches loosening). 8) Mount it on a stiff base with all mounting holes used (DESTACO), or on a T-slot adapter (DrTomFlint's design fastens to aluminium T-slot extrusion).
- **off_the_shelf_parts**: Hold-down toggle clamps (vertical-handle and horizontal-handle; low-profile, compact, heavy-duty and auto-adjusting versions), push-pull (straight-line) toggle clamps with plungers and optional locking handles, latch-style toggle clamps with a U-bolt or hook and a latch plate (including right-angle versions for lids), squeeze-action clamps (toggle pliers), pneumatic (air-powered) toggle clamps and power clamps, and clamp spindles (hex-head, rubber-cushioned or spring-action) with lock nuts (McMaster-Carr; Carr Lane; Halder; JW Winco).
- **rules_of_thumb**: 
  - Holding capacity is the maximum force the locked clamp can resist without permanent deformation; it is rated with the spindle as close as possible to the handle or base and gets smaller towards the end of the arm (Carr Lane; DESTACO).
  - The clamping force you actually apply is normally less than the holding capacity (Carr Lane; DESTACO); roughly half the stated holding capacity can be applied by hand with medium effort (Carr Lane).
  - Mechanical advantage of manual toggle clamps ranges from 2:1 to 10:1; to rate a different clamping point, work out the moment (force x distance) and divide by the new distance (DESTACO).
  - Uncushioned hex-head spindles give the greatest clamping force; cushioned tips give less (Carr Lane).
  - Set the spindle height so the handle snaps into the locked position with firm hand pressure; if you have to muscle it, back the spindle off (Roche).
  - Bolt clamps to a rigid base so the force goes into the work, not into flexing the jig; use through-bolts with washers and lock nuts against vibration (Roche); use all the mounting holes provided (DESTACO).
  - Typical maximum holding capacity by style: horizontal up to 1,300 lbf, vertical up to 5,060 lbf, push-pull 100-16,000 lbf, latch up to 7,500 lbf, squeeze 100-1,200 lbf (Rowse).
  - Maximum clamping force occurs when the three pivot points are in a straight line; the right amount of over-centre travel is 'a carefully calculated and controlled dimension' (DESTACO, via M.J. Vail).

### When to use it

- **everyday_examples**: 
  - Woodworking jigs: router-table, tenoning and taper jigs where toggle clamps hold the workpiece down and keep fingers away from the blade (Rockler)
  - Welding, drilling and assembly fixtures in factories (Carr Lane; DESTACO)
  - Drill-press and T-slot table hold-downs (DrTomFlint's printed clamp was made for a small drill press)
  - Latch-style versions on old-fashioned Kilner jars and swing-top bottles (Rowse)
- **when_to_use**: Use a toggle clamp when you clamp the same kind of part again and again and want it fast, one-handed and repeatable: jigs for routing, sawing, drilling, gluing and welding, test and assembly fixtures, and holding panels or lids shut (latch style). Pick a horizontal-handle clamp where height above the work is limited, a vertical-handle clamp for more holding force, a push-pull clamp to push a part sideways against a stop, a latch clamp to pull two parts together, and a squeeze clamp to grip parts between jaws (Rowse; Carr Lane).
- **when_not_to_use**: Avoid it when part thickness varies a lot from one clamping to the next, since each change needs the spindle readjusted: use a screw clamp, F-clamp or an auto-adjusting clamp instead. Avoid it when you need very high, finely set clamping force or heavy machining of steel; Carr Lane notes toggle clamps suit wood, plastics, carbon fibre and non-ferrous metals because their clamping force is limited, so use screw clamps, strap clamps or a vice. Don't use it where there is no room for the handle to swing, or where it can be bumped open without a locking handle. It is not a locating device: pair it with stops or pins.
- **environment_limits**: Zinc-plated steel rusts outdoors or in washdown areas; stainless versions resist corrosion and suit elevated temperatures (JW Winco; Carr Lane). Printed clamps: PLA softens and deforms above about 60 °C and PETG is fine below about 80 °C (Prusa); plastic parts and pads creep under a clamp that stays closed for a long time, so the grip loosens. In high-vibration or high-cycle work, check that the handle cannot be bumped free (Roche) and consider positive-locking handles (Carr Lane). *(unverified parts omitted)*
- **safety_notes**: Pinch points: keep fingers out of the linkage and from under the spindle while closing it (Roche, citing OSHA machine-guarding guidance on pinch points). DESTACO fits red handle grips and a patented safety feature to prevent accidental injury to the operator when opening the clamp, so treat opening as a hazard too. Do not exceed the stated holding capacity, which already includes a safety factor (DESTACO). Check that the clamp handle, arm and screws are clear of saw blades and cutters before starting a machine (Roche). Printed clamps can snap suddenly under the multiplied force.
- **common_failures**: 1) Spindle set too high or too low: too high and the handle won't go over centre (forcing it bends parts or wears the clamp); too low and the part is not held. Set it so the pad touches just before over centre (Roche). 2) Workpiece slips: the clamp pushes the part away from its stops; align the clamp so it pushes the part into its supports (Roche). 3) Mounting screws loosen or the jig flexes: use through-bolts, lock nuts and a stiff base (Roche). 4) Overloading: exceeding holding capacity, or clamping far out on the arm where capacity is lower, bends the arm or links (DESTACO; Carr Lane). 5) Worn pins and linkages reduce the lock; inspect, clean, lubricate and replace worn parts (Roche). 6) Printed clamps: layers split along the arm or pins shear; print with more walls and use steel bolts.
- **related**: 
  - Over-centre linkage (toggle linkage): the general principle inside every toggle clamp
  - Draw latch (over-centre latch): the same linkage made into a lid or door fastener; a latch-action toggle clamp is a heavy-duty draw latch
  - Eccentric cam lever (cam clamp): clamps by flipping an off-centre cam; quicker to make, but its clamping point is less consistent than toggle action (DESTACO)
  - Locking pliers: a hand-held squeeze-action toggle clamp with a screw to set the jaw opening
  - Screw clamp (F-clamp, C-clamp): slower, but adapts to any thickness and gives more adjustable force *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Toggle-clamp manual horizontal 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_horizontal_3D_animated.gif): Animated 3D drawing of a manual horizontal toggle clamp opening and closing *(licence: CC BY-SA 2.5)*
  - [Toggle-clamp manual vertical 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_vertical_3D_animated.gif): Animated 3D drawing of the principle of a manual vertical toggle clamp *(licence: CC BY-SA 2.5)*
  - [Toggle-clamp manual push-pull 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_push-pull_3D_animated.gif): Animated 3D drawing of a manual push-pull toggle clamp moving between closed and open *(licence: CC BY-SA 2.5)*
  - [Toggle clamp 2b (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=lrL2_5tj1IE): CAD animation of a toggle clamp built as a four-bar linkage, with the connecting rod and lever coming into toggle *(licence: link only (standard YouTube licence))*
  - [Toggle Clamps: Different Types and Where They Are Used (OneMonroe, YouTube)](https://www.youtube.com/watch?v=HmAuAiFl2hM): Video overview of the main toggle clamp types and their uses *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Toggle Clamp (DrTomFlint, Printables)](https://www.printables.com/model/828667-toggle-clamp): Printed hold-down toggle clamp for aluminium T-slot extrusion, made for a small drill press; adjustable screw section; OpenSCAD source included; needs M3 and M4 screws *(licence: CC BY)*
  - [Vertical Lever - Toggle Clamp (Cristian, Printables)](https://www.printables.com/model/273002-vertical-lever-toggle-clamp): Fully printable vertical toggle clamp including printed pins and nuts; assembled with a few drops of glue *(licence: CC0 (public domain))*
  - [Toggle Clamp (Kniehebelspanner) (Tom, Printables)](https://www.printables.com/model/1115293-toggle-clamp-kniehebelspanner): Sturdy PETG bench toggle clamp for a 20 mm bench hole; M5, M6 and M8 bolts, and an M6 nut inserted during a print pause *(licence: CC0 (public domain))*
  - [TOGGLE CLAMP (PA1_MAKER, Printables)](https://www.printables.com/model/462782-toggle-clamp): Strong printed work-surface toggle clamp with a TPU pad and M5 bolts as pivots; parts pre-oriented for strength *(licence: CC BY-NC-ND)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entry 'TOGGLE-CLAMP', no. 36)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animation of a toggle clamp whose handle drives the link past the dead point to self-lock; adjustable link length and pivot position *(licence: MIT)*
  - [Build Your Own Toggle Clamp (Woodsmith)](https://www.woodsmith.com/article/build-your-own-toggle-clamp/): Woodworking project for a shop-made toggle clamp from hardwood parts with aluminium-rod pivots and an adjustable bolt 'finger' *(licence: link only)*
- **diagram_idea**: A side view of a vertical hold-down clamp in three steps (open, pad touching the work, handle locked just past centre) with the three pivot points highlighted and a dashed line showing the middle pivot crossing the line between the other two, plus small icons of the horizontal, push-pull, latch and squeeze styles.
- **sources**: 
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/how-do-toggle-clamps-work
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/how-do-toggle-clamps-work/holding-capacity-clamping-force
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/how-do-toggle-clamps-work/toggle-clamp-applications-guide
  - https://www.destaco.com/resources/how-to-buy-guides/how-to-calculate-exerting-force-clamping-force--holding-capacity
  - https://www.destaco.com/resources/blogs-and-insights/what-to-know-about-manual-quick-action-toggle-clamps
  - https://www.destaco.com/resources/blogs-and-insights/how-to-select-the-right-destaco-manual-clamp
  - https://www.destaco.com/clamping/Pneumatic/Pneumatic-Toggle-Clamp.html
  - https://www.mjvail.com/destaco/intropage3.html
  - https://www.jwwinco.com/en-us/products/2.4-Tensioning-with-clamping-mechanisms/Toggle-clamps
  - https://www.halderusa.com/PM/Standard-Parts/Clamping-Elements/Toggle-Clamps
  - https://www.mcmaster.com/products/toggle-clamps/
  - https://www.rowse.co.uk/blog/post/how-to-choose-holding-toggle-clamps
  - https://rochehardware.com/how-to-use-toggle-clamps/
  - https://mechanical-engineering.com/toggle-clamps-mechanics/
  - https://www.rockler.com/learn/five-uses-for-toggle-clamps
  - https://www.popularwoodworking.com/tricks/fast-toggle-clamp-adjustment/
  - https://www.woodsmith.com/article/build-your-own-toggle-clamp/
  - https://en.wikipedia.org/wiki/Clamp_(tool)
  - https://en.wikipedia.org/wiki/Locking_pliers
  - https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_horizontal_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_vertical_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_push-pull_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Toggle-clamp_manual_push-pull_opened_3D.png
  - https://commons.wikimedia.org/wiki/Category:Drawings_of_toggle_lever_clamps
  - https://www.youtube.com/watch?v=lrL2_5tj1IE
  - https://www.youtube.com/watch?v=HmAuAiFl2hM
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.printables.com/model/828667-toggle-clamp
  - https://www.printables.com/model/273002-vertical-lever-toggle-clamp
  - https://www.printables.com/model/1115293-toggle-clamp-kniehebelspanner
  - https://www.printables.com/model/462782-toggle-clamp
  - https://www.printables.com/model/1483751-3d-printed-toggle-clamp/related
  - https://www.printables.com/model/49414-zx82net-customizable-rugged-waterproof-box
  - https://api.printables.com/graphql/
  - https://huangyan920.github.io/Mechanical/

### Other info

- **Fields with unverified parts:** environment_limits, load, processes, related

## 21 Draw latch (over-centre latch)

*over-centre, toggle & cam clamps.* A lever on one part hooks a catch on the other and pulls them tightly together as it snaps shut, as on toolboxes and cases

### What it is

- **plain_name**: The lever catch on toolboxes and cases: hook the loop over a catch on the lid, press the lever down and it pulls the lid tight shut with a snap, and it stays shut until you lift the lever
- **term**: Draw latch (over-centre latch, toggle latch)
- **aliases**: 
  - toggle latch
  - over-centre latch / over-center latch
  - over-centre fastener
  - draw catch / toggle catch
  - spring claw latch
  - tension latch / pull latch
  - case latch / toolbox latch / box latch
  - latch clamp / latch-action (hook-type) toggle clamp (heavier versions)
  - adjustable draw latch (with a threaded hook or rod)
  - flexible draw latch / rubber T-handle latch
  - wire bail closure (Kilner-type jars and swing-top bottles)
  - Bügelverschluss (German; also used for swing-top closures)
- **family**: over-centre, toggle & cam clamps
- **other_families**: locks, latches & catches, quick-release & tool-free
- **one_liner**: A two-part latch in which a lever on one part carries a loop or hook that catches a keeper on the other part; closing the lever swings the loop's pivot past the line between the lever pivot and the keeper (over centre), pulling the parts tightly together and locking them there until the lever is lifted.
- **complexity**: A few parts: a base plate fixed to one part, a lever (handle) pivoted on the base, a loop, hook or wire bail pivoted part-way along the lever, and a keeper (catch plate or strike) fixed to the other part. Many add a threaded hook or rod for adjustment, a spring, a padlock hole or a secondary safety catch. Flexible versions are just a stretchy rubber T-handle and a keeper.
- **how_it_works**: The loop hangs from a pivot on the lever that is offset from the lever's own pivot. Hook the loop over the keeper and push the lever down: the loop's pivot swings towards, then just past, the straight line joining the lever pivot and the keeper (over centre), pulling the two parts together and stretching the loop and any gasket slightly. Once past centre, the pull between the parts tries to close the lever further, against its stop, so the latch cannot open by itself; lifting the lever back past centre releases it (Wikipedia 'Latch'; US patent 4,925,221; RS). Flexible (rubber) draw latches have no lever: the stretch of an EPDM rubber strap hooked over the keeper provides the pull (Boat Outfitters; HTF Hardware).

### Finder attributes

- **job**: 
  - join and hold: holds a lid, door, hatch or panel shut
  - lock, and release by hand: opens and closes with one flick of the lever; many take a padlock or have a secondary lock
  - tighten and hold tension: draws the two parts together and keeps them squeezed, removing rattle
  - seal it, or pass cables or fluid through: only indirectly, by squeezing a lid onto a gasket or O-ring, which does the actual sealing (Southco)
- **degrees_of_freedom**: 1 while closing: the lever angle sets the position of the loop and the gap between the parts; effectively 0 once closed and locked over centre
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): the loop's pivot passes the line between the lever pivot and the keeper and the latch snaps shut (RS: once past the cam point it 'will snap soundly into place and remain securely closed')
  - self-locking (holds under load, won't back-drive): pulling the parts apart pushes the lever harder into its closed position
  - hand-release only (locks under load, releases when a person operates it): only lifting the lever opens it
  - quick-release: opens and closes by hand with no tools
  - tensioning (takes up slack and holds): draws the parts together and holds a preload, which compresses gaskets and stops rattles (Southco)
- **holding_principle**: 
  - shape (form-fit): the loop or hook physically hooks over the keeper
  - friction or clamping (force-fit): the over-centre lever holds the two parts pressed together with a preload
  - spring force (a spring or springy part presses it in place): flexible latches hold by the stretch of rubber, and the steel loops of rigid latches stretch very slightly
- **input_output**: not applicable: it is a fastening latch, not a drive. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: tool-free quick release: it opens and closes by hand; the latch body and keeper are screwed, bolted or riveted on and can be removed with tools
- **tools_needed**: None to open or close. To fit: a drill and a screwdriver (screws or bolts) or a rivet tool; a spanner to set a threaded hook; optionally a padlock
- **seal**: none by itself. It is used to make a seal watertight or dust-resistant by pressing a lid onto a gasket or O-ring (Southco: draw latches give 'mechanical advantage to compress gaskets and ensure sealing'). Maker example: a printed rugged box with a TPU seal and tight printed latches survived 10 minutes under 10 cm of water with no leak (zx82net)
- **load**: Light to heavy in tension (pulling the two parts together). For example, Southco's A1 adjustable draw latches are rated up to 1,550 N (350 lb), 3,110 N (700 lb) and 4,450 N (1,000 lb) for small, medium and large sizes; RS groups latches into light, medium and heavy duty. The keeper and its screws must be as strong as the latch (RS) *(unverified parts omitted)*
- **adjustable**: Yes on adjustable models: a threaded hook or rod changes the reach and the clamping force (Southco A1: grip range up to 144 mm and span adjustment up to 33 mm). Fixed models are adjusted by moving or shimming the keeper. Printed latches can be tuned by scaling the latch by about 2% in X and Y (zx82net)
- **play_and_precision**: No play once closed, because it is preloaded. It tolerates small misalignment, but the keeper position matters: set too far away, the lever can't pass centre; set too close, it closes loosely, and an over-adjusted latch can even end up exactly on centre, looking closed but unlocked (US patent 4,925,221). Rubber latches tolerate misalignment best (Boat Outfitters). Wikipedia notes a draw latch does not need to be fully closed to hold the two halves together
- **access_needed**: one side only (blind): both parts are fixed with screws or rivets from the outside and it is operated from outside; through-bolts need both sides
- **materials**: Stainless steel (corrosion-resistant, marine and industrial), zinc-plated steel or die-cast zinc (low cost), brass or chrome-plated brass (appearance, light to medium duty), acetal (RS); plastic bodies in polypropylene, nylon or glass-filled nylon, and rubber (Southco); EPDM rubber for flexible latches (HTF Hardware). Printed latches in PETG (preferred outdoors) or PLA, with steel screws or rod as pins
- **maker_difficulty**: easy: cheap to buy and screw on; printable versions, even print-in-place ones, work well for light boxes and cases

### Making it

- **processes**: off-the-shelf part: the usual choice; many sizes and materials, 3D print (FDM): print-in-place latches, or separate printed parts pinned with M3-M5 screws or steel rod *(unverified parts omitted)*
- **print_in_place**: yes: ConceivablyEngineering's 'Sturdy print-in-place draw latch' prints already assembled with no supports and 0.2-0.3 mm gaps. Stronger printed latches are printed as separate parts joined with bolts or steel rod (TECbot, Glenn Brockett, the parametric Rugged Storage Box).
- **making_tips_3d_printing**: 1) Geometry: the loop's pivot must swing past the line from the lever pivot to the keeper, or the latch won't snap closed; mount the hook or keeper so this happens (TECbot: 'make sure the hook is mounted low enough that the loop passes the center pivot'). Add a stop on the lever so it can't over-travel. 2) Print-in-place: 0.2-0.3 mm gaps between moving parts, slight under-extrusion especially on the first layer so the joints free up, thick shells (1.2 mm) with infill of secondary importance; the latch can be fixed with up to four M3 screws or glued (ConceivablyEngineering). 3) Pins: bolts (M5 main pivot in TECbot's latch, with the nut pressed flush using a soldering iron) or steel rod (Glenn Brockett uses 2.2 mm welding rod; filament 'may work, not advised'). The Rugged Storage Box fixes each latch with two M3x40 screws that act as pins. 4) Strength and layers: 'You MUST have good layer adhesion or it will break' (Glenn Brockett). zx82net recommends at least 3 perimeters and over 30% infill for latches and hinges. 5) Material: PETG for outdoor or long-term use; zx82net found PLA latches work at first but can creep over time, loosening the latch and the seal; PLA softens above about 60 °C (Prusa). 6) Tuning: print two sizes and pick the tightness you like; scaling the latch by 2% in X and Y makes a significant difference (zx82net). Tight tolerances may need a little trimming (Glenn Brockett). 7) Sealing: for a watertight box, add a flexible seal (TPU gasket or a 1.75 mm TPU filament in a groove) for the latch to squeeze (zx82net; Rugged Storage Box). 8) Keep printed latches for boxes and light panels; they are 'not sturdy compared to non-printed, non-plastic latches' (ConceivablyEngineering).
- **off_the_shelf_parts**: Draw latches / toggle latches in fixed-grip, adjustable (threaded hook or U-bolt) and locking (padlockable or key-locking) versions, with matching keepers (catch plates or strikes); concealed and rotary draw latches; flexible rubber T-handle draw latches with keepers; latch-action toggle clamps (hook or U-bolt with latch plate) for heavy lids and doors; latches with a secondary safety catch; wire bail closures for jars (Southco; RS; Carr Lane; Boat Outfitters).
- **rules_of_thumb**: 
  - Choose a latch whose ultimate tensile strength (UTS) is roughly double the force it will see, and make sure the keeper (catch or strike plate) is rated as strongly as the latch (RS).
  - Longer handles need less force to close against the same over-centre resistance (RS).
  - The loop must pass the centre pivot for the over-centre action to work (TECbot, Printables 'Over-Center Toggle Latch').
  - Adjust carefully: under-adjustment leaves a gap that lets vibration and airflow work on the panel; over-adjustment can reduce the over-centre movement or leave the latch looking closed while sitting on centre, unlocked, which is why the aircraft toggle latch in US patent 4,925,221 adds an automatic safety catch.
  - Printed draw latches: 0.2-0.3 mm print-in-place gaps and 1.2 mm shells (ConceivablyEngineering); scaling by 2% changes tightness noticeably (zx82net). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Toolboxes, chests and crates (Wikipedia 'Latch')
  - Flight cases, instrument cases and aluminium transport cases (Wikimedia Commons photo of case latches)
  - The latch that tightens the ring of a springform cake pan (Wikipedia 'Latch')
  - The wire clip on Kilner-type jars and swing-top bottles (Rowse; Wikipedia 'Flip-top')
- **when_to_use**: Use a draw latch when a lid, door or panel must be pulled tightly closed and opened quickly by hand: cases and toolboxes, access panels and machine covers, boxes with a gasket that must be squeezed to keep water or dust out, and anything that rattles. It suits places where the catch is on a separate part from the latch, and where some misalignment must be pulled in. Choose a rubber (flexible) latch for quiet, corrosion-free, forgiving closure on coolers and lockers, and an adjustable or locking steel latch for higher loads or security (Boat Outfitters; Southco; RS).
- **when_not_to_use**: Avoid it where the latch must be flush or hidden (use a concealed latch, quarter-turn fastener or magnetic catch), where the part is opened constantly with no need for pull-down force (a simple snap fit, magnetic catch or ball catch is enough), where real security is needed (add a padlock or use a cam lock), and where the latch sticks out and could be knocked open or catch on things. Don't use it as the only closure for something under internal pressure or that must never open in service without a secondary safety catch (US 4,925,221).
- **environment_limits**: Zinc-plated steel and zinc die-castings corrode outdoors; stainless steel suits marine and washdown use (RS; Boat Outfitters). Printed latches: PLA softens above about 60 °C and PETG is fine below about 80 °C (Prusa), and PLA latches can creep and loosen over time (zx82net). The over-centre lock resists vibration, but a latch set only just past centre can shake open, so vibration-critical uses add a secondary safety catch (US 4,925,221). *(unverified parts omitted)*
- **safety_notes**: A latch that looks closed may be sitting on centre and unlocked if it is badly adjusted (US 4,925,221). Don't rely on a printed latch where failure could hurt someone. *(unverified parts omitted)*
- **common_failures**: 1) Won't close, or needs two hands: the keeper is too far away or the gasket too thick; move or shim the keeper, or use an adjustable latch. 2) Closes loosely or rattles: the keeper is too close or has moved (loose screws), or the loop has stretched; re-set the keeper, tighten screws, use an adjustable hook. 3) Pops open under vibration or knocks: it is only just past centre, or on centre; adjust so it clearly snaps over, and add a secondary catch if needed (US 4,925,221). 4) Keeper or its screws pull out before the latch fails: rate and fix the keeper as strongly as the latch (RS). 5) Printed latches break at the layer lines or creep loose; improve layer adhesion, use PETG and metal pins (Glenn Brockett; zx82net). *(unverified parts omitted)*
- **related**: 
  - Over-centre linkage (toggle linkage): the principle a draw latch is built on
  - Toggle clamp (latch-action type): a heavy-duty draw latch, usually with a threaded U-bolt, for doors and lids and for fixtures
  - Eccentric cam lever: a cam that is flipped past its high point instead of a linkage; also used on some case latches
  - Cam lock (quarter-turn latch): turns a cam behind the frame with a key or knob; flush and more secure, but draws the parts together less
  - Snap fit (cantilever clip): a springy printed clip; simpler and cheaper, but gives little or no pull-down force
  - Magnetic catch or ball catch: holds a door lightly closed with no lever and no clamping force
  - Hasp and staple: a hinged strap that goes over a staple for a padlock; secures but does not pull the parts together

### Pictures, videos and models

- **links**: 
  - [Latch clamp animation.webm (Wikimedia Commons, by Slashme, made in Blender)](https://commons.wikimedia.org/wiki/File:Latch_clamp_animation.webm): 3D animation of an adjustable latch clamp: first adjusting the reach of the hook, then hooking and pulling in the catch *(licence: CC BY-SA 4.0)*
  - [BuegelVS-Kniehebel2.JPG (Wikimedia Commons, photo by StromBer)](https://commons.wikimedia.org/wiki/File:BuegelVS-Kniehebel2.JPG): Photo of over-centre (knee-lever) box fasteners on an aluminium transport case *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licence))*
  - [LatchExample1.JPG (Wikimedia Commons, photo by Lmartin iii)](https://commons.wikimedia.org/wiki/File:LatchExample1.JPG): Close photo of a lever latch on a DeWalt toolbox (DeWalt (brand)) *(licence: CC BY-SA 3.0)*
  - [SpringformPanSpring.jpg (Wikimedia Commons, photo by RibbonsOfIndecision)](https://commons.wikimedia.org/wiki/File:SpringformPanSpring.jpg): Close-up of the over-centre latch that tightens the side ring of a springform pan *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licence))*
  - [Latch (Wikipedia)](https://en.wikipedia.org/wiki/Latch_(hardware)): Short definitions of the draw latch and toggle latch among other latch types, with photos *(licence: CC BY-SA 4.0 (text); images per file)*
- **make_it_yourself**: 
  - [Sturdy print-in-place draw latch (ConceivablyEngineering, Printables)](https://www.printables.com/model/130254-sturdy-print-in-place-draw-latch): A compact draw latch that prints already assembled with no supports; 0.2-0.3 mm tolerances; fixes with up to four M3 screws; FreeCAD design *(licence: CC BY-SA)*
  - [Rugged Storage Box, Parametric and Customizable (bulbasaur0, Printables)](https://printables.com/model/637028-rugged-storage-box-parametric-and-customizable): OpenSCAD model and library for printed rugged boxes with a choice of clip or draw latch, optional lip seal; latches pinned with M3 screws; all parts print without supports *(licence: CC BY-SA)*
  - [Over-Center Toggle Latch (TECbot, Printables)](https://www.printables.com/model/1548353-over-center-toggle-latch): A printed over-centre latch for holding a door closed, with an M5 main pivot and M3 screws; notes on positioning the hook so the loop passes centre *(licence: CC BY-NC-SA)*
  - [Playing card sturdy box with over center latch (Glenn Brockett, Printables)](https://www.printables.com/model/476807-playing-card-sturdy-box-with-over-center-latch): A small printed box with an over-centre latch pinned with 2.2 mm welding rod and a TPU seal channel *(licence: CC BY-NC-SA)*
  - [zx82net Customizable Rugged Waterproof Box (zx82net, Printables)](https://www.printables.com/model/49414-zx82net-customizable-rugged-waterproof-box): Printed rugged box with a two-part cam-action latch, springy hinges and a TPU seal; tested watertight under 10 cm of water; Fusion 360 files included *(licence: CC BY-NC-SA)*
- **diagram_idea**: A side-view animation of a lid, box, lever, loop and keeper: the loop hooks the keeper, the lever swings down, a dashed line from lever pivot to keeper shows the loop pivot crossing it, the lid pulls down onto a gasket, and an arrow shows the lid's upward pull pressing the lever further shut.
- **sources**: 
  - https://en.wikipedia.org/wiki/Latch_(hardware)
  - https://en.wikipedia.org/wiki/Flip-top
  - https://uk.rs-online.com/web/content/discovery/ideas-and-advice/toggle-latches-guide
  - https://southco.com/en_us_int/latches/draw-latches
  - https://southco.com/en_any_int/latches/draw-latches/adjustable-grip-draw-latches/a1-adjustable-series-draw-latches
  - https://www.boatoutfitters.com/hardware/latches/draw-latches
  - https://www.htfhardware.com/t-handle-latch-5587.html
  - https://www.tai-sam.com/msg/msg79.htm
  - https://www.huidinghardware.com/info-detail/toggle-latch-vs-draw-latch-whats-the-difference
  - https://www.firgelliauto.com/blogs/mechanisms/draw-latch
  - https://www.firgelliauto.com/blogs/mechanisms/toggle-latch
  - https://patents.google.com/patent/US4925221A/en
  - https://www.rowse.co.uk/blog/post/how-to-choose-holding-toggle-clamps
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/how-do-toggle-clamps-work/toggle-clamp-applications-guide
  - https://www.mcmaster.com/products/toggle-clamps/
  - https://commons.wikimedia.org/wiki/File:Latch_clamp_animation.webm
  - https://commons.wikimedia.org/wiki/File:BuegelVS-Kniehebel2.JPG
  - https://commons.wikimedia.org/wiki/File:LatchExample1.JPG
  - https://commons.wikimedia.org/wiki/File:SpringformPanSpring.jpg
  - https://commons.wikimedia.org/wiki/Category:Case_lid_latches
  - https://commons.wikimedia.org/wiki/Category:Swing-top_closures
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.printables.com/model/130254-sturdy-print-in-place-draw-latch
  - https://printables.com/model/637028-rugged-storage-box-parametric-and-customizable
  - https://www.printables.com/model/1548353-over-center-toggle-latch
  - https://www.printables.com/model/476807-playing-card-sturdy-box-with-over-center-latch
  - https://www.printables.com/model/49414-zx82net-customizable-rugged-waterproof-box
  - https://www.printables.com/model/1274025-print-in-place-draw-latch
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, load, motion, processes, reuse_cycles, rules_of_thumb, safety_notes

## 22 Eccentric cam lever (cam clamp, quick-release skewer)

*over-centre, toggle & cam clamps.* A lever with an off-centre cam that squeezes or clamps when flipped over and releases when flipped back, as on bike wheel skewers and seat posts

### What it is

- **plain_name**: A lever with a lopsided round end: flip it one way and the off-centre bulge presses the parts together hard and stays shut; flip it back and they come free, like the lever on a bike wheel or seat post
- **term**: Eccentric cam lever (cam clamp, quick-release skewer)
- **aliases**: 
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
- **family**: over-centre, toggle & cam clamps
- **other_families**: quick-release & tool-free, clamping, magnetic & friction connections, self-locking & anti-back-drive
- **one_liner**: A hand lever whose pivot is set off-centre in a round or spiral cam, so swinging the lever wedges the cam against a surface and squeezes parts together with many times the force of your hand, and the cam's gentle slope (or a small over-centre step) keeps it shut until you flip it back.
- **complexity**: A few parts: lever with the cam shape (or a cam body with a lever), a pivot pin or axle, a bearing surface or washer the cam presses on, and usually a threaded rod or stud with an adjusting nut that sets how tight it closes. A bike quick-release skewer is: lever and cam, cam body, skewer rod, two conical springs and an adjusting nut (Sheldon Brown).
- **how_it_works**: The lever turns a cam whose pivot is off-centre (eccentric), so as the lever swings, the distance from the pivot to the pressing face grows, like pushing a slowly thickening wedge into a gap (Firgelli, Cam clamp; Ganter). A long lever and a small cam rise turn a modest hand push into a large clamping force, roughly 17 to 25 times the hand force on standard industrial cam levers (Ganter table). It stays closed because the cam slope at the closed position is shallower than the friction angle, so friction stops it sliding back (self-locking), and many levers, such as bike skewers, go slightly past the highest point of the cam ('over the top') so that vibration pushes them further closed rather than open (Sheldon Brown). The threaded rod and adjusting nut set the starting gap, and so how hard it clamps.

### Finder attributes

- **job**: join and hold: clamps a wheel in a frame, a seat post in a tube, a part in a jig or a bracket on a rail, lock, and release by hand: flips shut to hold and flips open to release, without tools
- **motion**: rotate: the lever swings through part of a turn (about 90 to 180 degrees) to produce a short straight pull or push of about a millimetre or two; industrial spiral cams lock anywhere within a 180-degree throw (Carr Lane)
- **degrees_of_freedom**: 1 while operating: the lever turns about its pivot. Once closed, the clamped parts have 0, because friction holds them together
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a shallow cam slope, smaller than the friction angle, stops the clamping force from pushing the lever open (Firgelli; Ganter: self-locking 'as soon as the dead centre is exceeded')
  - over-centre (snaps past a point and stays): bike skewer cams go 'over the top' so the clamp loosens very slightly as the lever reaches the end, and vibration then tends to hold it closed (Sheldon Brown)
  - quick-release: one flick of the lever opens or closes it with no tools, which is why Tullio Campagnolo invented it for racing wheels in 1927 (Wikipedia, Quick release skewer)
  - hand-release only (locks under load, releases when a person operates it): the clamped load cannot open it; only moving the lever does
- **holding_principle**: 
  - friction or clamping (force-fit): the parts are held by being squeezed together; the cam itself is held shut by friction on its shallow slope
  - shape (the parts interlock; form-fit): only for over-centre cams, where the lever must climb back over a small bump in the cam profile to open
- **input_output**: Force gain about 17 to 25 times: e.g. 75 N at the end of a 44 mm lever gives 1,250 to 1,750 N, and 350 N on a 101 mm lever gives 6,100 to 8,000 N (Ganter). In-line arrangement: the lever usually pulls on a rod or stud through its own pivot. Back-drivable: no when correctly designed (self-locking or over-centre), but eccentric cams can shake loose under strong vibration (Carr Lane). *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: tool-free quick release: flipping the lever releases the clamp by hand; setting the tightness once needs only finger-turning of the adjusting nut or knob
- **reuse_cycles**: many times: made to be opened and closed daily (bike wheels, jigs, poles); cams and washers slowly wear, and printed plastic cams creep
- **seal**: none: it only clamps; internal-cam skewers enclose the cam, which keeps dirt out of the mechanism but seals nothing (Sheldon Brown)
- **load**: Strong in straight pull along the rod; the joint it makes resists sliding (shear) only by friction, so a sideways or twisting load, such as disc-brake forces on a wheel, can make it slip or loosen (Wikipedia, Sheldon Brown) *(unverified parts omitted)*
- **adjustable**: yes: the adjusting nut or threaded stud sets the starting gap and so the clamping force (Sheldon Brown); industrial levers offer an adjustable bearing plate (JW Winco); some trekking-pole lever locks have a tension dial for adjusting on the go (MSR)
- **play_and_precision**: Play: none once clamped (held by friction). Repeatability: the clamp force repeats as long as the adjusting nut is not moved; position repeats only as well as whatever locating features the clamped parts have. Misalignment: tolerates small errors because it just squeezes, but the cam must bear squarely on its washer; on external-cam skewers a curved plastic washer can turn 90 degrees so the cam presses on the wrong face and the clamp goes dangerously loose (Sheldon Brown)
- **access_needed**: both sides for through-rod types (lever on one end, nut on the other, as on bike skewers); one side only (blind) when the lever's stud screws into a tapped hole
- **materials**: Steel cam in a metal body (internal-cam skewers), aluminium levers and cams (external-cam skewers) with plastic, rubber or brass washers (Sheldon Brown, Brainy Biker); industrial levers in plastic, polyamide (PA), steel, zinc die-cast or stainless steel (JW Winco); aluminium lever and stainless steel cam on trekking-pole locks (MSR); hardwood (e.g. maple) for woodworking cam clamps, often with cork, urethane or knurled pads for grip (Firgelli). Printed versions in PLA or PETG around a steel bolt (Printables)
- **maker_difficulty**: easy to moderate: a printed cam lever around a bolt or a store-bought cam lever is easy to fit, but getting a cam that clamps hard, stays shut and doesn't creep open needs a shallow cam slope, a metal pivot and a tough plastic

### Making it

- **processes**: 
  - off-the-shelf part (clamping levers with eccentric cam, cam handles, bike quick-release skewers)
  - 3D print (FDM): cam levers and clips around a metal bolt or pin; print-in-place bag clips
  - woodwork: traditional hardwood cam clamps and jig hold-downs
  - CNC: machined metal cams and levers for heavier clamping *(unverified parts omitted)*
- **print_in_place**: partly: most printed cam levers need an added bolt or pin as the pivot and a nut or threaded stud to pull on (e.g. mikan's cam lever needs an M3 or M4 bolt); small light-duty designs such as Andrei's bag clip print fully assembled as three hinged parts (Printables)
- **making_tips_3d_printing**: Make the cam slope at the closed position shallower than the slip (friction) angle of your plastic: Andrei's print-in-place bag clip uses a quick-closing first quarter turn, then a quarter turn with a 10-degree slope, measured to be below the slip angle for PLA, which gives the most force and cannot back-drive, and ends with a short constant-radius section that gives a satisfying lock (Printables 27216). His clip has 0.1 mm clearance on the printed shaft (with 0.15, 0.20 and 0.30 mm versions for looser printers) and 0.15 mm layers because the vertical gaps are exactly three layers; other layer heights change the gaps. Use a steel bolt or pin as the pivot and a washer under the cam, as in the CNC side clamp, which uses an M6 bolt and a 6 x 25 mm washer, PETG, 6 walls, 25 percent gyroid infill, and is printed on its side for strength, not flat (Printables 1676459). Walls matter more than infill for printed clamps (3 shells recommended, Hackaday.io bar clamps). Expect printed cams to lose some clamp force over time, because plastic under constant load creeps and PLA makes a poor spring (Hackaday, 'The Challenges Of 3D Printing Reliable Springs'); *(unverified parts omitted)*
- **off_the_shelf_parts**: Search: 'clamping lever with eccentric cam' (e.g. GN 927 series, lever lengths 44 to 101 mm, threads M3 to M12 or 8-32 to 3/8-16, tapped or threaded-stud versions, with or without adjustable bearing plate; JW Winco/Ganter), 'cam handle' or 'cam lever' (Carr Lane), 'cam edge clamp', 'cam action strap clamp', 'spiral cam clamp', 'quick release skewer' (internal cam or external cam; front and rear lengths), 'quick release seatpost clamp', 'lever lock' or 'flick lock' spare parts for trekking poles and tripods.
- **rules_of_thumb**: 
  - Self-locking needs the cam rise angle to be no bigger than the friction angle, phi = atan(mu); for steel on dry hardwood (mu about 0.3) keep the profile within about 17 degrees of the tangent at the lock point (Firgelli, Cam clamp)
  - A 10-degree cam slope was measured to be below the slip angle for printed PLA on PLA and does not back-drive (Andrei, Bag Clip (PRINT IN PLACE CAM), Printables)
  - Standard eccentric clamping levers: 44 mm lever and 75 N hand force give 1,250 to 1,750 N; 63 mm and 125 N give 2,250 to 3,100 N; 82 mm and 200 N give 3,700 to 5,000 N; 101 mm and 350 N give 6,100 to 8,000 N, i.e. a force gain of about 17 to 25 times (Ganter, 'Clamping and manual forces in clamping levers with eccentrical cam')
  - Friction coefficients to assume: plastic on plastic about 0.25, steel on steel about 0.2 (0.1 lubricated), plastic on steel about 0.15; use safety factors of 1.2 to 1.5 for steady loads, 1.8 to 2.4 for pulsating and 3 to 4 for alternating loads (Ganter)
  - Clamping force is roughly hand force x lever length / [cam lever arm x (wedge term + friction at the cam) + pivot radius x friction at the pivot], so friction at the pivot and cam eats a large share of the force (Ganter worked example: 350 N x 76 mm gives about 7,000 N)
  - A circular eccentric has only one true locking point; a spiral (involute) cam locks anywhere over its throw, but both can loosen under heavy vibration, so use them for drill jigs, light-to-medium milling, inspection and assembly fixtures where vibration is small (Carr Lane)
  - Bike skewer setup: turn the adjusting nut until the gap closes with the lever sticking out at about 70 degrees, then press the lever home; it should take enough force to leave an imprint on your palm (Sheldon Brown; Wikipedia)
  - Internal (enclosed) cams clamp harder than external cams, especially cheap external cams with a compressible plastic washer (Sheldon Brown, BikeRadar, Brainy Biker)

### When to use it

- **everyday_examples**: 
  - Quick-release skewers on bicycle wheels (Wikipedia, Sheldon Brown)
  - Quick-release seat post and stem clamps on bicycles (Sheldon Brown)
  - Lever locks on adjustable trekking poles and tripod legs (MSR)
  - Sash window locks, where a cam pulls the window shut and locks itself (Wikipedia, Cam (mechanism))
- **when_to_use**: Use a cam lever when something must be clamped firmly but released and re-clamped often and fast, with no tools and even with cold or gloved hands: wheels and seat posts, adjustable poles and tripod legs, fences and stops on woodworking jigs, work-holding in drill jigs and assembly fixtures, and brackets that slide on aluminium extrusion. It is also a neat way for makers to add a strong, adjustable clamp using one bolt and a printed lever.
- **when_not_to_use**: Avoid it where there is strong vibration or shock (use a screw clamp, a toggle clamp or a positive lock), because eccentric cams can shake loose and have only one true locking point (Carr Lane). Avoid it where a sideways or twisting load tries to drag the clamped parts, such as disc-brake wheels, where a through-axle is safer (Wikipedia, Sheldon Brown). Don't use it where the clamp must hold a precise position against large loads on its own; add a pin or shoulder to locate the parts. If you need even more holding force or a firm over-centre lock with a visible open/closed state, use a toggle clamp or draw latch; for a permanent joint, use a bolt or glue.
- **environment_limits**: BikeRadar suggests testing a skewer with a drop of oil on the cam to reveal poor designs). Vibration can loosen eccentric and spiral cams (Carr Lane). Temperature swings make pole materials swell or shrink slightly, which can make cam-locked pole sections slip (MSR). Printed plastic cams and levers creep under constant load and lose clamping force over time (Hackaday). *(unverified parts omitted)*
- **safety_notes**: A bike quick release that is left open, or closed like a wing nut without real clamping force, can let the wheel fall out; forks have 'lawyer lips' (raised tabs) as a backup, and disc-brake forces tend to push the axle out of the dropouts (Wikipedia, Sheldon Brown). On external-cam skewers the curved plastic washer can rotate so the cam presses on its flat and the clamp goes loose enough for the wheel to fall out (Sheldon Brown). Quick-release wheels are easy to steal (Wikipedia). *(unverified parts omitted)*
- **common_failures**: Not actually clamped: the lever is closed without enough resistance, or used like a wing nut (Sheldon Brown); fix by tightening the adjusting nut until closing leaves a mark on your palm. Adjusting nut too tight, so the lever can't close fully and sits short of its locking point (Sheldon Brown). Brainy Biker). Slipping when contact pads glaze or pivot holes wear oval, and crushed cam lobes in softwood clamps (Firgelli). Shaking loose under vibration (Carr Lane). *(unverified parts omitted)*
- **related**: 
  - Toggle clamp and over-centre linkage: use links that go past a straight line instead of a cam; usually give more holding force and a more definite locked position
  - Draw latch: an over-centre lever that pulls two parts together through a hook, for lids and cases
  - Eccentric adjuster (eccentric nut or bushing): uses the same off-centre idea to make small position adjustments, not to clamp and release quickly
  - Spiral cam clamp: a cam with a spiral (involute) face that can lock anywhere in its throw rather than at one point (Carr Lane)
  - Wing nut or thumb screw: tool-free too, but slower; holds by screw friction and is less sensitive to how it is set
  - Bicycle through-axle: a threaded axle that replaced skewers on many disc-brake bikes because it is not pushed out by braking forces (Wikipedia)
  - Cam buckle and cam cleat: use a toothed cam to grip a strap or rope rather than to clamp two rigid parts
  - Furniture cam lock (cam fitting): a different part with a similar name, a rotating disc that pulls a bolt to join flat-pack panels
  - Clamp-on accessory mount for bars, poles and edges: a clamp that grips an existing bar, pole or desk edge to carry an accessory; a cam lever is often what closes it without tools

### Pictures, videos and models

- **links**: 
  - [Quick release scewer.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Quick_release_scewer.JPG): Photo of a bicycle quick-release skewer with its cam lever, rod and nut *(licence: CC BY-SA 3.0 or GFDL 1.2+ (AndrewDressel))*
  - [Bicycle Quick-Release Mechanisms (Sheldon Brown)](https://www.sheldonbrown.com/skewers.html): Photos of open, adjusted and closed quick releases, internal versus external cams, lawyer-lip dropouts and a hazard diagram of the external-cam washer *(licence: link only)*
  - [Clamping lever with eccentrical cam GN 927 (JW Winco, YouTube)](https://www.youtube.com/watch?v=vaeRNEE9wmU): Manufacturer video of an industrial eccentric cam clamping lever (title and channel confirmed via YouTube oEmbed; content not viewed) *(licence: link only)*
  - [THIS Print Will Keep Your Bag of Chips Closed (Chip Clip!) (3D Printing Nerd, YouTube)](https://www.youtube.com/watch?v=fkTCNT-1sJ8): Review of Andrei's print-in-place cam bag clip, a 3D-printed eccentric cam lever (title and channel confirmed via YouTube oEmbed; linked from the model page) *(licence: link only)*
  - [Different Types of Cam Clamps: The Comprehensive Guide (Carr Lane)](https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/cam-clamps): Illustrated guide to eccentric versus spiral cams and cam-action strap, edge, up-thrust and hold-down clamps *(licence: link only)*
- **make_it_yourself**: 
  - [Bag Clip (PRINT IN PLACE CAM) (Andrei, Printables)](https://www.printables.com/model/27216-bag-clip-print-in-place-cam): Print-in-place clip whose cam gives mechanical advantage and locks, with a documented cam profile (10-degree self-locking slope) and clearance versions of 0.1 to 0.3 mm. Details read through the Printables public API because the web page blocks automated access *(licence: GPL 3.0)*
  - [Cam lever - quick release clamp (mikan, Printables)](https://www.printables.com/model/1539611-cam-lever-quick-release-clamp): Printable cam lever that works with an M3 or M4 bolt and nut (thread longer than 20 mm recommended). Read through the Printables public API *(licence: CC0 (public domain))*
  - [CNC Side Clamp Eccentric - Strong Hold and Low profile (Wood Burning Studio, Printables)](https://www.printables.com/model/1676459-cnc-side-clamp-eccentric-strong-hold-and-low-profi): Low-profile eccentric side clamp for CNC routing, with print settings (PETG, 6 walls, printed on its side) and an M6 bolt and washer. Read through the Printables public API *(licence: CC BY-NC)* *(unverified parts omitted)*
- **diagram_idea**: Side view of a lever with an off-centre round cam pressing on a washer over two plates: three frames show the gap closing as the lever swings, a small graph of cam height against lever angle rising steeply then flattening (with a tiny dip past the peak for the over-centre version), and an inset wedge showing that the slope at the closed position is shallower than the friction angle.
- **sources**: 
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

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, load, make_it_yourself, making_tips_3d_printing, processes, safety_notes, tools_needed

