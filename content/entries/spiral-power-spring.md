---
title: Spiral power spring
description: A flat strip of spring steel coiled into a spiral between a centre shaft and an outer case, which stores energy
  as it is wound tighter and gives it back as turning force as it unwinds, powering clockwork and pulling cords, tapes and
  belts back into reels.
num: 238
term: Spiral power spring (power spring, clock spring, mainspring)
plain_name: 'A long ribbon of springy steel rolled up like a snail shell, usually inside a round case: wind it up and it stores
  energy, then it turns things as it unwinds, like the spring in a wind-up toy or the one that pulls a tape measure back in'
aliases:
- 'power spring, clock spring (John Evans'' Sons: ''Power springs (also referred to as clock springs)'')'
- mainspring (the spiral spring that powers clockwork watches, clocks and wind-up toys) (Wikipedia 'Mainspring')
- spiral torsion spring (Lesjöfors says there is 'no real difference' from a clock spring; John Evans' Sons uses the name
  for open-wound springs that turn less than one revolution)
- flat spiral spring, spiral spring (Tokai Spring; RoyMech)
- 'rotor spring (McMaster-Carr catalogue name: ''Wind to store power, then release to create rotary motion'')'
- spring motor, wind-up motor, clockwork motor (a power spring with a ratchet and gears) (Printables 'Duplo wind-up motor';
  Wikipedia 'Mainspring')
- pre-stressed power spring, Conpower (brand, Vulcan Spring)
- 'retractor spring, tape-measure spring, reel spring (products built around it) (Vulcan Spring: seat belts, dog leashes,
  badge reels; Lee Spring: seat belt webbing, tape measures, dog leads, seat recliners, window regulators)'
- 'hairspring or balance spring: a tiny open-wound spiral used for timekeeping, not for storing power (Wikipedia ''Spring
  (device)'')'
- Not to be confused with a car's 'clockspring', a spiral flat cable in the steering wheel that carries electrical signals
  (Wikipedia 'Clockspring')
family: springs & energy storage
other_families: ['tensioning, reels & take-up']
finder:
  job: [store energy, tighten and hold tension]
  motion: rotate
  special_behaviour: [tensioning]
  holding_principle: [spring force, not a holding joint]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: partly
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning, straight push or pull]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, hand tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: partly
  removability: removable
  power: passive
needs_confirming:
  motion_in:
    kind: best guess
    reason: both sides turn, but no shaft layout named
  motion_out:
    kind: best guess
    reason: both sides turn, but no shaft layout named
  shaft_layout:
    kind: best guess
    reason: both sides turn, but no shaft layout named
confirmed: []
open_points: []
uncertain_fields: [adjustable, processes, making_tips_3d_printing, rules_of_thumb, environment_limits, safety_notes, related]
diagram_idea: 'Two round cases side by side: on the left a loosely coiled steel strip with its inner end hooked to a centre
  shaft and outer end to the case, on the right the same strip wound tight around the shaft with a curved arrow showing the
  turning force, plus a ratchet wheel and click beside the shaft and a small graph of torque rising as the number of turns
  increases.'
links:
- url: https://commons.wikimedia.org/wiki/File:Alarm_clock_mainspring.JPG
  title: Alarm clock mainspring.JPG (Wikimedia Commons, by Chetvorno)
  shows: Photo of an open (not cased) mainspring in a 1950s alarm clock, with its outer end hooked to a post and the winding
    arbor at the centre
  license: CC0 (public domain dedication)
- url: https://commons.wikimedia.org/wiki/File:Going_barrel.png
  title: Going barrel.png (Wikimedia Commons, drawing by Frederick J. Britten)
  shows: Cross-section drawing of a watch going barrel with the mainspring fully wound around the arbor inside its toothed
    case
  license: Public domain
- url: https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg
  title: Free mainspring torque curve.svg (Wikimedia Commons, by Chetvorno)
  shows: Graph of a mainspring's torque falling in a straight line as it unwinds
  license: Public domain
- url: https://commons.wikimedia.org/wiki/File:Watch_mainsprings.png
  title: Watch mainsprings.png (Wikimedia Commons, Elgin National Watch Co., about 1910)
  shows: 'Photos of the three relaxed mainspring shapes: plain spiral, semi-reverse and reverse'
  license: Public domain
- url: https://www.youtube.com/watch?v=CHKZcGKcE24
  title: 'Spring Driven Mechanical Clocks: The Mainspring Explained (YouTube, Scottie''s Clock World)'
  shows: Video explaining how a clock mainspring works and how its dimensions relate to its power (title and channel checked
    via YouTube oEmbed; not watched)
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/291477-duplo-wind-up-motor
  title: Duplo wind-up motor (gertvv, Printables) (URL from Printables API, page not opened)
  what_it_is: A printed wind-up spring motor with a printed spiral spring, ratchet pawl and 4:1 gear reduction, sized like
    Duplo bricks; printed in PLA with 3 perimeters for the spring. Read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://www.printables.com/model/485731-spiral-torsion-spring-optimizer-v4
  title: Spiral Torsion Spring Optimizer v4 (zbuser, Printables) (URL from Printables API, page not opened)
  what_it_is: A Python optimizer plus parametric FreeCAD model that sizes and generates a printable spiral torsion spring.
    Read through the Printables public API.
  license: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike)
- url: https://www.printables.com/model/1291166-triple-spiral-compliant-torsion-spring
  title: Triple Spiral Compliant Torsion Spring (Panegyr, Printables) (URL from Printables API, page not opened)
  what_it_is: A one-piece printed spiral return spring with about 120° of travel and a 1/4 inch square centre hole; FreeCAD
    file included. Read through the Printables public API.
  license: Creative Commons Public Domain (as listed by Printables)
- url: https://www.printables.com/model/588221-fully-3d-printed-mechanical-clock
  title: Fully 3D Printed Mechanical Clock (iceman2511, Printables) (URL from Printables API, page not opened)
  what_it_is: A pendulum clock printed in PETG, driven by a printed mainspring and ratchet; the maker notes it runs only about
    5 minutes because of friction, which shows the limits of plastic springs. Read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
sources:
- https://en.wikipedia.org/wiki/Mainspring
- https://en.wikipedia.org/wiki/Spring_(device)
- https://en.wikipedia.org/wiki/Clockspring
- https://en.wikipedia.org/wiki/Tape_measure
- https://www.leespring.com/learn-about-constant-force-springs
- https://springcompany.com/products/power-springs/
- https://springcompany.com/products/spiral-torsion-springs/
- https://springcompany.com/blog/types-of-springs-and-applications/
- https://www.vulcanspring.com/power-spring-vs-conpower-spring-design-requirements-and-calculations/
- https://www.lesjofors.com/en/products/flat-springs/spiral-torsion-springs/
- https://www.hayamizu-hatsujo.co.jp/english/technology/formula/
- https://www.tokaibane.com/en/spring-design/flat-spiral-springs-calculation-examples
- https://roymech.org/Useful_Tables/Springs/Springs_Spiral.html
- https://www.mcmaster.com/products/spiral-torsion-springs/
- https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
- https://api.printables.com/graphql/
- https://commons.wikimedia.org/wiki/File:Alarm_clock_mainspring.JPG
- https://commons.wikimedia.org/wiki/File:Going_barrel.png
- https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg
- https://commons.wikimedia.org/wiki/File:Watch_mainsprings.png
- https://www.youtube.com/watch?v=CHKZcGKcE24
- https://www.youtube.com/watch?v=VfqbIIk6YKs
research: research/connection-types/results/Spiral_power_spring_clock_spring.json
image: null
glossary: [ratchet, pawl, torque, preload, torsion, hysteresis, collet, creep, fatigue, lubrication, perimeters, infill, peel-vs-shear,
  regulator]
---

A flat strip of spring steel coiled into a spiral between a centre shaft and an outer case, which stores energy as it is wound tighter and gives it back as turning force as it unwinds, powering clockwork and pulling cords, tapes and belts back into reels.

**In plain words:** A long ribbon of springy steel rolled up like a snail shell, usually inside a round case: wind it up and it stores energy, then it turns things as it unwinds, like the spring in a wind-up toy or the one that pulls a tape measure back in. **Proper term:** Spiral power spring (power spring, clock spring, mainspring).

**Also called:** power spring, clock spring (John Evans' Sons: 'Power springs (also referred to as clock springs)'); mainspring (the spiral spring that powers clockwork watches, clocks and wind-up toys) (Wikipedia 'Mainspring'); spiral [torsion](../glossary.md#torsion) spring (Lesjöfors says there is 'no real difference' from a clock spring; John Evans' Sons uses the name for open-wound springs that turn less than one revolution); flat spiral spring, spiral spring (Tokai Spring; RoyMech); rotor spring (McMaster-Carr catalogue name: 'Wind to store power, then release to create rotary motion'); spring motor, wind-up motor, clockwork motor (a power spring with a [ratchet](../glossary.md#ratchet) and gears) (Printables 'Duplo wind-up motor'; Wikipedia 'Mainspring'); pre-stressed power spring, Conpower (brand, Vulcan Spring); retractor spring, tape-measure spring, reel spring (products built around it) (Vulcan Spring: seat belts, dog leashes, badge reels; Lee Spring: seat belt webbing, tape measures, dog leads, seat recliners, window [regulators](../glossary.md#regulator)); hairspring or balance spring: a tiny open-wound spiral used for timekeeping, not for storing power (Wikipedia 'Spring (device)'); Not to be confused with a car's 'clockspring', a spiral flat cable in the steering wheel that carries electrical signals (Wikipedia 'Clockspring').

## How it works

The strip's inner end is hooked to the centre shaft and its outer end to the case or a fixed post. Turning the shaft wraps the strip tighter around it, bending every coil more, and the bent steel pushes back as a turning force ([torque](../glossary.md#torque)) that grows the more it is wound (John Evans' Sons; Wikipedia 'Mainspring'). Let go and it turns the shaft or the case back, driving a gear train or pulling a cord onto a reel; in a watch's 'going barrel' the spring winds by the shaft and drives through gear teeth on the case, and a ratchet 'click' stops the shaft slipping back (Wikipedia 'Mainspring'). Tightly wound 'power springs' in a case can turn many times (about 15-25 turns, more when pre-stressed), while open-wound 'spiral torsion springs' with gaps between coils turn less than one revolution and spring back to centre (Vulcan Spring; John Evans' Sons).

## Parts

A few parts working as one unit: the spiral steel strip, a centre shaft (arbor) with a hook or slot for the inner end, and an outer case (barrel, housing or retaining ring) or post for the outer end (John Evans' Sons; Wikipedia 'Mainspring'). Clockwork adds a ratchet wheel and [pawl](../glossary.md#pawl) (called the 'click') to stop it unwinding while you wind, a winding key or knob, and a gear train; reels add a drum and cord, tape or belt (Wikipedia 'Mainspring').

## Everyday examples

- Wind-up clocks, mechanical watches, music boxes, kitchen timers and wind-up toys (Wikipedia 'Mainspring')
- A retractable tape measure pulling its blade back in (Lee Spring: 'Power springs are used for retracting applications such as seat belt webbing, tape measures and dog leads, seat recliner, window regulator mechanisms'; Wikipedia 'Tape measure': spring-return tape measures)
- Seat belts, retractable dog leads, badge reels and the cord reel in a canister vacuum cleaner (Vulcan Spring)

## When to use it

Use a spiral power spring when you need to store turning energy compactly and release it over many turns without electricity, such as a wind-up motor for a toy or kinetic sculpture, a timer, or a music box (Wikipedia 'Mainspring'). It is the usual choice for self-retracting reels that wind a cord, tape, hose, lead or belt back in (Vulcan Spring; John Evans' Sons), and for counterbalancing rotating parts such as covers, hatches or arms (John Evans' Sons). Use an open-wound spiral torsion spring for strong 'return to centre' action over less than a turn, such as a joystick or a spring-return knob (John Evans' Sons).

## When not to use it

Don't use it when you need an even force over a long straight pull (use a constant-force spring) or even torque over many turns (use a constant-torque spring motor or add a fusee or stopwork) (Wikipedia 'Mainspring'). For a strong push on a lid use a gas spring; for a small spring-back over part of a turn a wire torsion spring is cheaper. For large amounts of energy or long running times, a falling weight or a battery and motor is safer and more even. Avoid plastic spiral springs anywhere they must stay wound under load, because printed plastic [creeps](../glossary.md#creep) (Printables 'Spring Material Test'). Avoid very high cycle counts (beyond roughly 100,000-200,000 winds) without a proper spring design (Vulcan Spring).

## Details

- **What it does (jobs):**
  - store energy: wound up by hand, by a pulled cord or by a motor, it gives the energy back as turning force (clockwork, wind-up toys, timers)
  - tighten and hold tension: in retracting reels it keeps a cord, tape, lead, hose or seat belt pulled back and takes up slack (Vulcan Spring; John Evans' Sons)
- **Movement:** rotate: many turns for a cased power spring (Vulcan: up to about 20-25 turns; John Evans' Sons: pre-stressing raises useful turns from about 15 to up to 35); less than one turn (360°, 270° preferred maximum) for an open-wound spiral torsion spring (John Evans' Sons). With a drum and cord it gives a straight-line pull.
- **Directions it can move (degrees of freedom):** 1: the centre shaft turns relative to the case. The spring itself does not guide anything, so the shaft needs its own bearings or bushings and the spring should be kept flat in its case.
- **Special behaviour:**
  - tensioning (takes up slack and holds): in retracting reels it pulls the cord, tape or belt back in and keeps it taut (Vulcan Spring: seat belts, dog leashes, badge reels, canister vacuum cleaners)
  - none of the other listed behaviours on its own: the one-way hold while winding comes from a separate ratchet and click (pawl), and the steady running speed of a clock comes from an escapement, not the spring (Wikipedia 'Mainspring')
- **How it holds:**
  - spring force (a spring or springy part presses it in place): the wound strip provides the turning force
  - not a holding joint (it moves or passes on motion): it is an energy store; its ends are simply hooked, pinned or clamped to the shaft and case (John Evans' Sons: 'hubs or [collets](../glossary.md#collet), tabs and keyways, hooks and pin, hook and slot')
- **Input and output:** Winding rotation in -> torque out (or a straight pull, via a drum and cord). Torque rises as it is wound; for a free (open) spring it falls roughly in a straight line to zero as it unwinds (Wikipedia 'Mainspring', torque-curve figure), while cased power springs have a non-linear curve because the amount of active strip changes and the coils rub (John Evans' Sons). Friction means it takes more torque to wind than it gives back ([hysteresis](../glossary.md#hysteresis)) (Vulcan Spring). Designers usually leave the first and last 20 percent of the turns unused because torque rises steeply there (Vulcan Spring). Arrangements such as a pre-coiled spring in a going barrel, a fusee (cone pulley) or stopwork give a flatter torque (Wikipedia 'Mainspring'). Back-drivable: yes, it always drives back unless a ratchet and click hold it.
- **Power:** passive (no power needed); it is wound by hand, by pulling the cord or tape out, or occasionally by a motor.
- **Load:** Light to medium turning force: stock and custom spiral springs range from about 0.02 to 700 in-lb (about 0.002-79 N·m) of torque (Lesjöfors). It only gives torque about the shaft; bearings must carry any side loads. The more energy stored, the more violent a failure (Wikipedia 'Mainspring' hazards).
- **Play and precision:** not applicable (it does not locate parts). Its torque changes as it winds and unwinds, and friction between coils adds hysteresis (John Evans' Sons; Vulcan Spring).
- **Taking it apart:** removable: the ends are hooked, pinned or slotted so the spring can be replaced (Wikipedia: watch mainsprings attach by 'small hooks or tabs' through square holes 'so it can be easily replaced'), but only with care and the right tools because of the stored energy.
- **How often it can be reused:** many times: a cycle is one full wind and unwind; power springs 'rarely have life cycles exceeding 200,000 winds and will likely be under 100,000 if space and torque are optimized' (Vulcan Spring); spiral torsion springs range from several thousand to over a million cycles depending on material and use (John Evans' Sons).
- **Sealing:** none
- **Adjustable:** Partly: the starting tension ([preload](../glossary.md#preload)) can be set by winding extra turns before fixing the ratchet or anchoring the case, but the torque curve is fixed by the strip's width, thickness and length; change it with a different spring or with gearing (Vulcan Spring; Hayamizu Hatsujo) ⚑ [uncertain].
- **Access needed:** end of a tube or shaft: the inner end must be hooked to the centre shaft and the outer end to the case, usually during assembly of the housing; winding is done from the shaft end by a key or knob.
- **Materials:** Spring steel strip: 1074 and 1095 high-carbon steel, 301 and 302 stainless steel, and Inconel (Lesjöfors); strip from about 0.002 inch (0.05 mm) to 0.080 inch (2 mm) thick (John Evans' Sons). Modern watch mainsprings use stainless 'white metal' alloys (iron, nickel, chromium with cobalt, molybdenum or beryllium) that resist setting and breaking (Wikipedia 'Mainspring'). Printed plastic spiral springs work in PETG, nylon or PLA for light toys, but plastics lose force when left wound (Printables 'Spring Material Test'; Hackaday).
- **Heat, cold, water and wear:** Carbon steel springs rust and need oil or grease; stainless and special alloys resist corrosion and heat better; high or low temperatures change elasticity, torque and [fatigue](../glossary.md#fatigue) life, and [lubrication](../glossary.md#lubrication) reduces wear (John Evans' Sons 'Spiral Torsion Springs'; Lesjöfors). Before modern alloys, a fully wound watch spring could break loose when cold made it contract, and changes in the weather brought 'a rash of watches with broken mainsprings' (Wikipedia 'Mainspring'). Springs slowly lose force by permanently bending ('set' or 'tired' springs) (Wikipedia 'Mainspring'). Printed plastic springs creep and relax within hours under load (Printables 'Spring Material Test') and soften with heat ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: power springs, spiral torsion springs, clock mainsprings and ready-made spring motors or retracting reels
  - 3D print (FDM): cases, arbors, drums, ratchets and gears; also whole plastic spiral springs for light wind-up toys and return springs
  - 3D print (resin): small cases and gears ⚑ [uncertain]
  - CNC: steel arbors and cases
  - laser cut: flat plastic or wooden spiral return springs and cases ⚑ [uncertain]
- **Printing it in one piece (print in place):** partly: a plastic spiral spring can be printed as one piece with its hub and outer arm (e.g. 'Triple Spiral Compliant Torsion Spring', about 120° of travel), but a usable wind-up motor also needs a ratchet, case and gears assembled around it, and a steel spring is always a bought part.
- **Tools:** None to use a spring already in its case. Fitting a loose spring needs a mainspring winder or a retaining ring to wind it into its case, a let-down key to release a wound clock spring safely, pliers, gloves and eye protection (Wikipedia 'Mainspring': 'mainspring winder', 'mainspring clamps'; YouTube 'Clock Mainspring - How to let down the power... Safely!').
- **Difficulty:** moderate: easy to use a bought or salvaged steel spring in a printed case and add a ratchet, but hard to make a good steel one at home; a printed plastic spiral is easy to make but weak and loses force if left wound (Printables 'Duplo wind-up motor'; Printables 'Spring Material Test').

### 3D printing tips

1) Plastic spirals: PETG is the usual choice; 'PLA makes for a very poor spring material' (Hackaday), although a Duplo wind-up motor worked in PLA with 3 [perimeters](../glossary.md#perimeters) for the spring and a 4:1 gear reduction to tame its torque (Printables 'Duplo wind-up motor'). 2) Expect creep: in one test, printed springs held stretched for 8 hours at 25-30 °C all deformed, PETG least (about 5-10 percent), and PLA worst; the tester concluded no filament he tried works as a spring under constant load (Printables 'Spring Material Test'). So don't store a printed spring wound, and use steel for anything that must hold tension. 3) Print the spiral lying flat so each coil is built from continuous perimeters along its length, and keep a clear gap between coils so they don't fuse or rub ⚑ [uncertain]; a spiral torsion spring optimizer and parametric FreeCAD model exist for sizing (Printables 'Spiral Torsion Spring Optimizer v4'). 4) For a printed mainspring, one clock maker printed it with 3 walls and 20 percent [infill](../glossary.md#infill) in PETG and greased the axles (Printables 'Fully 3D Printed Mechanical Clock'). 5) For a steel spring in a printed case: size the case so the spring strip fills only about 40-50 percent of the free space, or turns are lost (Vulcan Spring), and make the arbor 15-25 times the strip thickness in diameter (John Evans' Sons). 6) Use a steel pin or shaft for the arbor and anchor hooks where you can; printed hooks can [shear](../glossary.md#peel-vs-shear) under the concentrated load at the spring ends ⚑ [uncertain]. 7) Add a ratchet and click (pawl) so it can be wound without slipping back (Wikipedia 'Mainspring'), and make the case strong enough to contain the spring if it breaks ⚑ [uncertain].

### Buying one (off-the-shelf parts)

Search for: 'power spring', 'clock spring', 'spiral torsion spring', 'flat spiral spring' (John Evans' Sons, Lesjöfors, Vulcan Spring, Tokai Spring); 'rotor springs' (McMaster-Carr catalogue name for wind-up spiral springs); 'Conpower' (brand, Vulcan Spring) pre-stressed power springs; 'clock mainspring' and 'mainspring winder' (clock parts suppliers); 'spring motor', 'wind-up motor' or 'clockwork motor' (toy movements); 'retractable reel', 'badge reel', 'cord reel' or 'tape measure spring' to salvage; 'constant torque spring' or 'spring motor A-type / B-type' when a flatter torque is needed (see constant-force spring).

## Rules of thumb

- The spring strip should fill only about 40-50 percent of the free space in its case; power springs give at most about 20-25 turns (pre-stressed Conpower springs more); keep the first 20 percent and last 20 percent of available turns unused because torque rises steeply there; life rarely exceeds 200,000 winds and is often under 100,000 (Vulcan Spring 'Custom Spring Design for Power vs. Conpower Requirements').
- Total turns are greatest when the strip's side area (thickness x length) equals half the area inside the case minus the shaft's area (Hayamizu Hatsujo 'About Design', contact-type spiral spring); in their worked example, a stress range of about 600 MPa is a guideline for 100,000 uses, and a spring with a pinned (not clamped) outer end deflects about 25 percent more and has twice the bending stress for the same torque.
- Strip length should be less than 15,000 times its thickness; arbor diameter 15-25 times the thickness to limit coil friction and stress; pre-stressing can raise useful turns from about 15 to up to 35 (John Evans' Sons 'Power Springs').
- Open-wound spiral torsion springs suit high torque over less than 360° of rotation, with 270° the preferred maximum; when over-wound the coils 'close out' and rub, making torque rise sharply (John Evans' Sons 'Spring Types and Their Applications'; 'Spiral Torsion Springs').
- For an open (non-contact) spiral, torque is roughly proportional to wind angle, strip width and the cube of thickness, and inversely to length: M ≈ E b t^3 θ / (12 L) (standard flat-spiral formula as given on spring-design pages such as Tokai Spring and RoyMech, where the formulas appear as images) ⚑ [uncertain].
- A watch mainspring is a strip about 20-30 cm long and 0.05-0.2 mm thick; a typical going barrel turns once every 8 hours, so a 40-hour spring needs about 5 turns (Wikipedia 'Mainspring').

## Common failures

Fatigue cracks and breaks, most often at the inner end where it hooks to the shaft and bending stress is highest, or at the end of winding when the coils are tight (Wikipedia 'Mainspring'). The spring taking a permanent 'set' and losing torque (Wikipedia 'Mainspring'). Over-winding so the drive is too strong ('knocking'), prevented by stopwork or a click with a little recoil (Wikipedia 'Mainspring'). Too much spring for the case, or the wrong arbor size, cutting the number of turns and torque (Vulcan Spring). Friction between coils (hysteresis), reduced by lubrication and a larger arbor (John Evans' Sons). Anchor hooks tearing out of printed parts, and printed plastic springs creeping so they no longer retract fully (Printables 'Spring Material Test').

## Safety

A wound spiral spring stores a lot of energy and can release suddenly, 'causing potentially serious injury'; even a 'let down' spring and a going barrel keep dangerous tension, so clockmakers let springs down slowly with a key while holding back the click, and use mainspring winders and clamps to fit and remove them (Wikipedia 'Mainspring'). Wear eye protection and gloves; the steel strip has sharp edges ⚑ [uncertain]. Don't pry open tape measures, badge reels or cord reels without expecting the spring to leap out ⚑ [uncertain]. A broken spring can spin the barrel backwards hard enough to wreck gears (Wikipedia 'Mainspring': motor or safety barrel).

## Related

- Constant-force spring: a pre-curled strip that pulls in a straight line with nearly the same force; the constant-torque 'spring motor' version gives even turning force, unlike a power spring whose torque rises as it winds
- Coil spring (torsion): a wire coil that twists back over part of a turn; cheaper and simpler for small angles
- Hairspring (balance spring): a very fine open spiral that sets the timing of a watch's balance wheel rather than powering it
- Ratchet and pawl: the 'click' that holds a wound mainspring while it is being wound
- Escapement (anchor or verge): lets a clock's spring unwind a little at a time at a steady rate
- Spring balancer (gravity compensation): uses springs, sometimes spiral ones, to cancel a weight at every angle
- Tape-spring hinge: a curved steel tape that flips and holds, a different use of flat spring strip
- Twisted rubber band motor: a cheaper wind-up energy store for light models, with much less even torque ⚑ [uncertain]

## Make it yourself

- [Duplo wind-up motor (gertvv, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/291477-duplo-wind-up-motor): A printed wind-up spring motor with a printed spiral spring, ratchet pawl and 4:1 gear reduction, sized like Duplo bricks; printed in PLA with 3 perimeters for the spring. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [Spiral Torsion Spring Optimizer v4 (zbuser, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/485731-spiral-torsion-spring-optimizer-v4): A Python optimizer plus parametric FreeCAD model that sizes and generates a printable spiral torsion spring. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- [Triple Spiral Compliant Torsion Spring (Panegyr, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1291166-triple-spiral-compliant-torsion-spring): A one-piece printed spiral return spring with about 120° of travel and a 1/4 inch square centre hole; FreeCAD file included. Read through the Printables public API. *(licence: Creative Commons Public Domain (as listed by Printables))*
- [Fully 3D Printed Mechanical Clock (iceman2511, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/588221-fully-3d-printed-mechanical-clock): A pendulum clock printed in PETG, driven by a printed mainspring and ratchet; the maker notes it runs only about 5 minutes because of friction, which shows the limits of plastic springs. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*

## Pictures, videos and models

- [Alarm clock mainspring.JPG (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Alarm_clock_mainspring.JPG): Photo of an open (not cased) mainspring in a 1950s alarm clock, with its outer end hooked to a post and the winding arbor at the centre *(licence: CC0 (public domain dedication))*
- [Going barrel.png (Wikimedia Commons, drawing by Frederick J. Britten)](https://commons.wikimedia.org/wiki/File:Going_barrel.png): Cross-section drawing of a watch going barrel with the mainspring fully wound around the arbor inside its toothed case *(licence: Public domain)*
- [Free mainspring torque curve.svg (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg): Graph of a mainspring's torque falling in a straight line as it unwinds *(licence: Public domain)*
- [Watch mainsprings.png (Wikimedia Commons, Elgin National Watch Co., about 1910)](https://commons.wikimedia.org/wiki/File:Watch_mainsprings.png): Photos of the three relaxed mainspring shapes: plain spiral, semi-reverse and reverse *(licence: Public domain)*
- [Spring Driven Mechanical Clocks: The Mainspring Explained (YouTube, Scottie's Clock World)](https://www.youtube.com/watch?v=CHKZcGKcE24): Video explaining how a clock mainspring works and how its dimensions relate to its power (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 11 sentences on this page marked [uncertain].
- ⚑ Finder value `motion_in` = steady turning (best guess): both sides turn, but no shaft layout named
- ⚑ Finder value `motion_out` = steady turning, straight push or pull (best guess): both sides turn, but no shaft layout named
- ⚑ Finder value `shaft_layout` = not applicable (best guess): both sides turn, but no shaft layout named

## Sources

- <https://en.wikipedia.org/wiki/Mainspring>
- <https://en.wikipedia.org/wiki/Spring_(device)>
- <https://en.wikipedia.org/wiki/Clockspring>
- <https://en.wikipedia.org/wiki/Tape_measure>
- <https://www.leespring.com/learn-about-constant-force-springs>
- <https://springcompany.com/products/power-springs/>
- <https://springcompany.com/products/spiral-torsion-springs/>
- <https://springcompany.com/blog/types-of-springs-and-applications/>
- <https://www.vulcanspring.com/power-spring-vs-conpower-spring-design-requirements-and-calculations/>
- <https://www.lesjofors.com/en/products/flat-springs/spiral-torsion-springs/>
- <https://www.hayamizu-hatsujo.co.jp/english/technology/formula/>
- <https://www.tokaibane.com/en/spring-design/flat-spiral-springs-calculation-examples>
- <https://roymech.org/Useful_Tables/Springs/Springs_Spiral.html>
- <https://www.mcmaster.com/products/spiral-torsion-springs/>
- <https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/>
- <https://api.printables.com/graphql/>
- <https://commons.wikimedia.org/wiki/File:Alarm_clock_mainspring.JPG>
- <https://commons.wikimedia.org/wiki/File:Going_barrel.png>
- <https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg>
- <https://commons.wikimedia.org/wiki/File:Watch_mainsprings.png>
- <https://www.youtube.com/watch?v=CHKZcGKcE24>
- <https://www.youtube.com/watch?v=VfqbIIk6YKs>
