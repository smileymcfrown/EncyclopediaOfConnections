---
title: Pneumatic artificial muscle
description: 'A soft rubber tube (bladder) inside a woven sleeve (braid), sealed and clamped at both ends: when air is pumped
  in, the tube swells, the criss-crossed braid fibres scissor outwards and the whole thing shortens, pulling a load like a
  biological muscle; when the air is let out it relaxes.'
num: 288
term: Pneumatic artificial muscle (PAM), McKibben type (braided pneumatic actuator)
plain_name: 'A rubber tube inside a stretchy woven sleeve (the same kind of criss-cross mesh used to bundle cables): pump
  air in and the tube swells, the sleeve gets fatter and shorter, and its two ends pull together hard, like a muscle. Let
  the air out and it relaxes and can be stretched back'
aliases:
- McKibben muscle, McKibben artificial muscle
- air muscle
- pneumatic muscle, pneumatic muscle actuator (PMA)
- braided pneumatic actuator (BPA)
- fluidic artificial muscle; hydraulic artificial muscle (when filled with water or oil instead of air)
- contractile pneumatic actuator; 'extensible McKibben' (a version with a steeper braid that gets longer instead of shorter)
- Fluidic Muscle (Festo brand; product range DMSP)
- Air Muscle (Shadow Robot Company brand)
- Rubbertuator (Bridgestone brand, 1980s)
- Pneumuscle (Koganei brand) and S-muscle (brand of thin muscles)
- 'makkiben-gata jinko kinniku (Japanese: McKibben-type artificial muscle)'
family: hydraulics, pneumatics & vacuum
other_families: [powered & active connectors]
finder:
  job: [hold or release using power, change the kind of motion, tighten and hold tension]
  motion: flex
  special_behaviour: [motion conversion, tensioning]
  holding_principle: [powered hold, suction or air pressure, friction or clamping]
  reuse_cycles: many times
  seal: airtight or pressure
  access_needed: both sides
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM), laser cut, 3D print (resin)]
  connects: [not applicable]
  power_source: [electricity, compressed air, liquid]
  power_loss: lets go
  motion_in: [pressure]
  motion_out: [straight push or pull]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [crimper, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: powered
needs_confirming:
  power_source:
    kind: best guess
    reason: '`power` names several power sources, and not all may apply'
  power_loss:
    kind: best guess
    reason: 'versions differ: lets go, keeps its last state'
confirmed: []
open_points:
- kind: sources
  note: '**Read from copies or through APIs** (cite the original when publishing): Festo DMSP muscle datasheet from a distributor
    copy (motionworld.com) and the Shadow Robot air-muscle page from an archive copy on lars.mec.ua.pt (*Pneumatic artificial
    muscle*); Haines et al. 2014 (*Science*) abstract through a Semantic Scholar API URL (cite DOI 10.1126/science.1246906;
    *Twisted-and-coiled polymer muscle*); the OpenFlexure paper through the Europe PMC REST API (cite DOI 10.1364/boe.385729;
    *Elastic band springs*). PMC pages showed bot checks to `curl`, so several papers were read through NCBI E-utilities or
    Europe PMC. Paywalled papers in *Air-logic valve* and *Vacuum-driven artificial muscle* (Science Robotics, Tawk 2018,
    Zhai 2025) were read as abstracts through Semantic Scholar API URLs.'
- kind: content
  note: '*Pneumatic artificial muscle*: invention date (Wikipedia 1957; Wikibooks: Gaylord''s 1957 patent; Bennington et al.
    2023: 1930s-40s, made popular by McKibben in the 1950s); maximum contraction (Festo 25%, Shadow 35-37%, Osaka group 30%
    in its README but about 25% in its HardwareX test); twisting (Shadow: tolerated; Festo: forbidden, about 1° misalignment).'
uncertain_fields: [power, making_tips_3d_printing, environment_limits]
diagram_idea: Two side-by-side cutaways of the same muscle, relaxed and inflated, with the braid drawn as a diamond lattice
  whose fibre angle widens towards about 55 degrees as the rubber tube swells, so the muscle gets fatter and shorter and lifts
  a weight; a small inset shows a Chinese finger trap doing the same thing in reverse.
links:
- url: https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif
  title: Sam animation-real-muscle.gif (Rocketmagnet, Shadow Robot Company; Wikimedia Commons)
  shows: Animation of a Shadow Air Muscle shortening and fattening as it is inflated (used on Wikipedia's 'Pneumatic artificial
    muscles' page)
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg
  title: Pneumatic muscles.jpg (from Actuators 11(10):288; Wikimedia Commons)
  shows: Comparison picture of different types of pneumatic artificial muscles
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG
  title: Pneumatischer Muskel Aufbau (Red-Cali; Wikimedia Commons)
  shows: How a pneumatic muscle is built (mechanical set-up); a companion file 'Pneumatischer Muskel Dehnung' shows it stretched
    by a weight or by pressure
  license: GFDL
- url: https://www.youtube.com/watch?v=qQCDsxbvZqI
  title: Recipe for McKibben-type artificial muscle (Osaka University) (Yoichi Masuda, YouTube)
  shows: Video of making a McKibben muscle with printed plugs and crimped fittings (title and channel confirmed via YouTube
    oEmbed; video not watched)
  license: link only
- url: https://www.youtube.com/watch?v=oBkdKeTJ5NY
  title: McKibben Artificial Muscle - opensoftmachines (Open Soft Machines, YouTube)
  shows: Video of a mini McKibben muscle contracting when inflated with a syringe (title and channel confirmed via YouTube
    oEmbed; video not watched)
  license: link only
make_it_yourself:
- url: https://ishikawa-lab.sakura.ne.jp/mckibben_eng
  title: Recipe for McKibben-Type Pneumatic Muscle (Ishikawa lab, Osaka University)
  what_it_is: Step-by-step recipe, parts list, videos and printable ABS plug and holder files for a 9 mm crimped muscle that
    runs at up to 1 MPa and can be made in 1-3 minutes once practised
  license: the page says the methods may be used without permission or credit; licence of the files not stated
- url: https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md
  title: Art_muscles README (Yoichi Masuda, GitHub)
  what_it_is: 'Parts lists (in Japanese) and STL files for 9, 7 and 5 mm McKibben muscles: ABS air stopper, resin couplers
    and caps, and a muscle holder'
  license: no licence file found in the repository
- url: https://opensoftmachines.com/2018/04/mini-mckibben/
  title: Mini McKibben Pneumatic Artificial Muscle (Open Soft Machines)
  what_it_is: 60-minute recipe using latex tubing, polyester sleeving, barbed fittings and cable ties, inflated with a syringe
  license: not stated
- url: https://opensoftmachines.com/2018/09/mini-extensible-mckibben/
  title: Mini 'Extensible' McKibben Pneumatic Artificial Muscle (Open Soft Machines)
  what_it_is: The same parts, but the sleeve is pushed up short on a rod and baked at 120 C for 20 minutes so the finished
    muscle gets longer instead of shorter
  license: not stated
- url: https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/
  title: Making a Simple Air Muscle (William Gurstelle, Make:)
  what_it_is: History of McKibben's invention plus a hardware-store build with silicone tubing, polyester sleeve, hose clamps,
    a nylon bolt and a 3-way valve
  license: link only
- url: https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en
  title: Build, Test, and Model a McKibben Air Muscle (NFPA classroom activity, PDF)
  what_it_is: Classroom build with 3/8 in silicone tubing, polyester sleeving, brass fittings and a hose clamp, plus load
    tests at about 20 psi to compare with a computer model
  license: link only
sources:
- https://en.wikipedia.org/wiki/Pneumatic_artificial_muscles
- https://en.wikibooks.org/wiki/Robotics/Components/Actuation_Devices/Air_muscle
- https://www.motionworld.com/assets/festo-dmsp-fluidic-muscle-datasheet.pdf
- http://lars.mec.ua.pt/public/LAR%20Projects/RobotActuation/2002_MarcoMelo_VascoQuinteiro/Projecto/Artigos_net/net/air%20muscles/Shadow%20Robot%20Company%20Air%20Muscles.htm
- https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/
- https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en
- https://opensoftmachines.com/2018/04/mini-mckibben/
- https://opensoftmachines.com/2018/09/mini-extensible-mckibben/
- https://ishikawa-lab.sakura.ne.jp/mckibben_eng
- https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md
- https://bdml.stanford.edu/twiki/pub/HSR/HumanSafeRobot/ChouHannaford96.pdf
- https://arxiv.org/pdf/2301.04684
- https://api.crossref.org/works/10.1089/3dp.2018.0103
- https://www.hse.gov.uk/pubns/priced/hsg39.pdf
- https://rubber-group.com/molded-rubber-bellows/
- https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif
- https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg
- https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG
- https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Dehnung.JPG
- https://www.youtube.com/watch?v=qQCDsxbvZqI
- https://www.youtube.com/watch?v=eiulN90-6HE
- https://www.youtube.com/watch?v=oBkdKeTJ5NY
- https://www.youtube.com/watch?v=iZ5Mo0pjALI
research: research/connection-types/results/Pneumatic_artificial_muscle_McKibben_muscle.json
glossary: [misalignment, self-locking, stroke, lever-arm, linkage, actuator, solenoid, fail-safe--fail-secure, stiffness,
  hysteresis, form-fit--force-fit--material-bond, creep, fatigue, layer-lines, infill, regulator]
---

A soft rubber tube (bladder) inside a woven sleeve (braid), sealed and clamped at both ends: when air is pumped in, the tube swells, the criss-crossed braid fibres scissor outwards and the whole thing shortens, pulling a load like a biological muscle; when the air is let out it relaxes.

**In plain words:** A rubber tube inside a stretchy woven sleeve (the same kind of criss-cross mesh used to bundle cables): pump air in and the tube swells, the sleeve gets fatter and shorter, and its two ends pull together hard, like a muscle. Let the air out and it relaxes and can be stretched back. **Proper term:** Pneumatic artificial muscle (PAM), McKibben type (braided pneumatic [actuator](../glossary.md#actuator)).

**Also called:** McKibben muscle, McKibben artificial muscle; air muscle; pneumatic muscle, pneumatic muscle actuator (PMA); braided pneumatic actuator (BPA); fluidic artificial muscle; hydraulic artificial muscle (when filled with water or oil instead of air); contractile pneumatic actuator; 'extensible McKibben' (a version with a steeper braid that gets longer instead of shorter); Fluidic Muscle (Festo brand; product range DMSP); Air Muscle (Shadow Robot Company brand); Rubbertuator (Bridgestone brand, 1980s); Pneumuscle (Koganei brand) and S-muscle (brand of thin muscles); makkiben-gata jinko kinniku (Japanese: McKibben-type artificial muscle).

## How it works

The braid's fibres don't stretch and are wound in criss-crossing spirals, like a Chinese finger trap. When air pressure swells the rubber tube, the braid can only get wider by turning its fibres closer to crossways, and that pulls its two ends together, so the muscle shortens even while pulling a load (NFPA activity; Shadow). The pull is strongest at the very start of the [stroke](../glossary.md#stroke) and falls to zero at full contraction, and at a fixed length it rises in step with the pressure, so the pressure sets how far it pulls (Festo; Shadow; Wikibooks). A braid wound at less than about 54.7 degrees to the tube's axis (the 'critical locking angle') makes it contract; a steeper braid makes a muscle that gets longer instead (Wikipedia; Open Soft Machines). It can only pull, so it works against a spring, a weight or a second, opposing muscle (Wikibooks; Shadow).

## Parts

A few parts: an inner rubber tube (silicone, latex or natural rubber bladder); an outer expandable braided sleeve; two end fittings (a plug at one end and a barbed air connector at the other); clamps that grip sleeve and tube onto the fittings (hose clamps, crimped ear clamps, cable ties or wrapped wire); mounting eyes, bolts or hooks; and an air line with a valve (Make:; Open Soft Machines; Ishikawa lab). Commercial muscles have the reinforcing fibres built into the rubber sheath and crimped aluminium end flanges (Festo DMSP).

## Everyday examples

- A Chinese finger trap: the same criss-cross weave, which gets narrower when pulled long and fatter when pushed short (Shadow compares its braid to one)
- The stretchy woven sleeve used to bundle computer or car cables: the same expandable braided sleeving is the outer layer of a home-made muscle (Make:; Open Soft Machines)
- Robot hands and arms driven by air muscles, such as the Shadow Dexterous Hand and Festo's 'Airic' arm (Wikipedia; Make:)
- McKibben's original 1950s splint, which let his polio-paralysed daughter close her fingers by shrugging a shoulder to work a gas valve (Make:). Dates differ between sources: Wikipedia says he invented it in 1957; Wikibooks says it was patented in 1957 by Gaylord and used by McKibben; Bennington et al. (2023) say such muscles first appeared in the 1930s-1940s and McKibben popularised them in the 1950s

## When to use it

Use it when you need a strong, light, straight pull over a short distance with no sliding parts: robot joints that should feel soft and muscle-like, wearable assist devices, grippers and clamps, or shaking and vibrating loads (Festo quotes up to 150 Hz for strokes under 1 mm; Wikibooks). It suits work around people because it gives way when pushed (compliant) and its force fades to nothing at the end of its stroke, so it can't overrun (Wikipedia; Shadow). It is sealed and has no piston to jam, so it works in dirty places (Festo), and a cheap version can be built from hardware-store parts (Make:). Two opposed muscles can set both the position and the [stiffness](../glossary.md#stiffness) of a joint (Wikibooks).

## When not to use it

Avoid it when you need a long stroke (more than about a quarter to a third of its length), a pushing force, precise positioning or steady force over the whole stroke: use an air cylinder, a lead screw with a motor or an electric linear actuator instead (Festo; Wikibooks). Don't use it where there's no compressed-air supply, or where a noisy compressor is unwelcome; for small pulls, electric options such as shape-memory-alloy wire or a twisted-string actuator may suit better. Avoid places where it would be twisted, kinked, side-loaded or rubbed by sharp edges that could cut the bladder (Festo; Wikipedia).

## Details

- **What it does (jobs):**
  - hold or release using power: pulls and holds a load while it is pressurised, and lets go (lengthens) when the air is let out (Festo; Shadow)
  - change the kind of motion: turns air pressure into a straight, muscle-like pull with no piston or sliding seals (Festo; Make:)
  - tighten and hold tension: used as an adjustable 'air spring' that keeps threads, films or rollers at a set tension, adjusted by changing the pressure (Festo)
- **Movement:** flex: the braided tube shortens and fattens along its own axis. Festo allows at most 25% contraction of the nominal length (20% for its smallest size); looser hobby and Shadow braids reach about 30-40% (Festo; Shadow; Ishikawa lab GitHub README)
- **Directions it can move (degrees of freedom):** 1: only the distance between the two ends changes (it pulls along a straight line). The muscle is soft sideways but is not meant to take side loads: Festo asks for an external guide if lateral forces occur
- **Special behaviour:**
  - motion conversion: swelling caused by air pressure becomes a straight pull along the axis (Festo; NFPA activity)
  - tensioning: behaves like an 'air spring' whose force and stiffness are set by the pressure (Festo); two muscles pulling against each other at a joint can make it stiff or soft without moving it (co-contraction, Wikibooks)
  - [fail-safe](../glossary.md#fail-safe--fail-secure) (only partly): its force falls to zero at full contraction, so it can't drive a lever past its set angle (Shadow; Wikibooks); but it is not [self-locking](../glossary.md#self-locking), so if the air is let out or leaks away it relaxes and a hanging load drops (Festo's lifting-aid example lowers loads by exhausting the muscle)
  - self-aligning (disputed): Shadow says its muscles work when twisted or bent round a corner and need no precise aligning, while Festo forbids kinking, compressing and twisting its muscles and allows only about 1 degree of angle error between the mounts
- **How it holds:**
  - powered hold: it pulls only while there is air pressure inside; a closed valve can trap the air so it keeps pulling (Festo: it 'can be disconnected from the compressed air supply, but it will continue to perform its function')
  - suction or air pressure: the pulling force comes from air pressure pushing on the inside of the bladder (Chou and Hannaford 1996)
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the ends are held by hose clamps, crimped ferrules, cable ties or wire squeezed over barbed plugs (Make:; Open Soft Machines; Ishikawa lab)
- **Input and output:** Compressed air pressure -> straight pull (linear contraction). Typical pressures: 0-5 bar for Shadow muscles, never above 6 bar; 0-6 bar for most Festo sizes (0-8 bar for size 10). At a fixed length the pull rises roughly in proportion to pressure; it is highest at the start of the stroke and falls to zero at full contraction (Shadow; Festo). Stroke: up to 25% of length (Festo), about 30-37% for loose braids (Shadow tables; 35% for Chou and Hannaford's nylon-braid muscle). Rough efficiency: Chou and Hannaford put the theoretical best for one muscle at about 0.32-0.49 and estimated about 0.20-0.39 per cycle at 5 bar, before compressor and valve losses, which make a whole air system much less efficient. Arrangement: in line (pulls along its own axis). Back-drivable: yes, an outside pull stretches it like a spring; it can never push (Festo; Wikibooks).
- **Power:** powered: needs compressed air (or water or oil in hydraulic versions), usually switched by electric valves fed from a compressor (Wikipedia). When power is lost: if the valve vents the muscle, it relaxes and lengthens, so a load it was holding up drops (Festo lifting-aid example); if the valve shuts and traps the air, it keeps its last state (Festo) until leaks let it relax ⚑ [uncertain: no source gives leak-down rates]
- **Load:** medium to heavy pull for its size and weight, but in one direction only (pull). Festo muscles give up to 140 N (5 mm bore), 630 N (10 mm), 1,500 N (20 mm) and 6,000 N (40 mm) at full pressure; a 30 mm Shadow muscle lifts more than 70 kg at 4 bar; Osaka's 9 mm hand-made muscle has a recommended load of 400 N and breaks at 600-800 N (Festo; Shadow; Ishikawa lab). It can't push, must not be twisted or kinked, and needs a guide if there are side loads (Festo)
- **Play and precision:** noticeable: rubbing between the bladder and braid, and between the braid's threads, causes [hysteresis](../glossary.md#hysteresis) (Chou and Hannaford suggest allowing about 2.5 N of friction force either way for their muscle), and squashy compressed air makes it springy, so positioning by pressure alone is approximate. [Misalignment](../glossary.md#misalignment): Festo allows about 1 degree of angle and 0.5% parallel offset between the mounts and forbids twisting, while Shadow says its muscles tolerate twisting and bending (conflicting vendor advice)
- **Taking it apart:** removable: the muscle hooks, bolts or screws to the machine by its end fittings and can be swapped out (Wikipedia: muscles connect directly to the structure, which makes a defective one easy to replace; Ishikawa lab: 'easy to attach and detach'); the crimped or clamped joints inside the muscle itself are semi-permanent
- **How often it can be reused:** many times for fitting and removing. Working life is the real limit: traditional muscles last about 10,000 cycles, and Festo's fluidic muscle (fibres built into the rubber) about 10 million (Wikibooks); Osaka's open-recipe muscle survived 10,000 cycles carrying about 20 kg (Ishikawa lab, summarising Naniwa et al., HardwareX 2026)
- **Sealing:** airtight or pressure: the rubber tube holds the air and the clamped or crimped end fittings seal its ends; the braid itself is open mesh. Commercial muscles are 'hermetically sealed' (Festo)
- **Adjustable:** yes: the pull and the stroke are set by the air pressure (with a [regulator](../glossary.md#regulator) or proportional valve), and in-between positions can be held by controlling the pressure (Festo; Shadow). A slight pre-stretch (Festo: 0.5% of length) gives the best force; joint stiffness can be tuned by pressurising two opposed muscles together (Festo; Wikibooks)
- **Access needed:** both sides: both ends must be anchored, one to the frame and one to the part it pulls, and one end also takes the air line
- **Materials:** Bladder: soft silicone rubber tubing, super-soft latex tubing or natural rubber (Make:; Open Soft Machines; Ishikawa lab; Bennington et al. 2023 used latex balloons). Braid: expandable polyester (PET) cable sleeving, nylon, fibreglass, or aramid fibres embedded in the rubber (Chou and Hannaford compared nylon, fibreglass and Bridgestone braids; Festo uses aramid). End fittings: brass or plastic barbed fittings and plugs, nylon bolts, anodised aluminium flanges (Festo), or 3D-printed ABS or resin plugs (Ishikawa lab). Clamps: steel hose clamps, two-ear clamps, cable ties, wire, or Kevlar thread with cyanoacrylate glue (Bennington et al. 2023)
- **Heat, cold, water and wear:** Heat and cold: Festo's muscle is rated for -5 to +60 C ambient, Shadow's for 0-50 C (Festo; Shadow). Air quality: Shadow asks for clean, oil-free air; Festo allows oiled air, but once used it must always be oiled (Shadow; Festo). Corrosion: Festo rates its muscle corrosion class CRC 2, for indoor places where condensation can occur (Festo). Chemicals and sunlight: silicone rubber isn't recommended with oils or petrol (Rubber Group), and latex and natural rubber tubing age in sunlight and ozone ⚑ [uncertain: not checked in a muscle source]. Wear: a damaged braid whose fibres spread apart lets the bladder bulge through and burst (Wikipedia). [Creep](../glossary.md#creep): printed ABS plugs and brackets under a constant pull may creep over time ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: industrial fluidic muscles (e.g. Festo DMSP, brand) and robot air muscles (e.g. Shadow, brand)
  - hand assembly from off-the-shelf parts: silicone or latex tubing, expandable braided sleeving, barbed fittings and clamps (Make:; NFPA activity; Open Soft Machines)
  - 3D print (FDM): end plugs ('air stoppers') in ABS, mounting brackets and [lever arms](../glossary.md#lever-arm) (Ishikawa lab)
  - 3D print (resin): small threaded couplers and caps for thin 5-7 mm muscles, and strong muscle holders, e.g. in a tough resin (Ishikawa lab and its GitHub README)
  - laser cut: simple muscle holders cut from polypropylene sheet and fitted with grommets (Ishikawa lab)
- **Printing it in one piece (print in place):** no: the rubber bladder and the woven sleeve are bought parts, assembled by hand. Researchers have 3D printed the braid itself, but that muscle only shortened by up to 6.7% at 0.66 bar water pressure (Sangian et al. 2019), far less than one with a woven sleeve
- **Tools:** scissors; a lighter to melt the cut ends of the sleeve so they don't fray; a screwdriver for hose clamps, or a crimping tool for two-ear clamps; cable ties or wire; PTFE tape for threaded fittings; plus an air source (a syringe or bike pump for tests, a compressor or tank for real use) and ideally a pressure regulator and gauge (Make:; NFPA activity; Open Soft Machines; Ishikawa lab)
- **Difficulty:** easy to moderate: a simple muscle is made from hardware-store tubing, cable sleeving and hose clamps in about an hour (Make:; Open Soft Machines), but sealing the ends well enough for higher pressures takes care (cable ties only hold at fairly low pressure, Ishikawa lab), and you need a safe, regulated air supply

### 3D printing tips

1) Print the end plugs, not the muscle: Osaka's open recipe prints ABS 'air stoppers' at 100% [infill](../glossary.md#infill) on an ordinary FDM printer, coats each plug generously with ABS cement and rolls it inside the silicone tube so the cement fills the [layer lines](../glossary.md#layer-lines), then leaves it about an hour to dry, because unfilled or wet layer lines leak (Ishikawa lab). 2) For thin 5-7 mm muscles the couplers and caps were printed on a resin printer; re-cut the modelled M3 or M5 threads with a tap afterwards, and clear the air hole with a 1 mm drill if it closed up during printing (Ishikawa lab GitHub README). 3) Make the pull go through the braid, not the rubber: crimp metal fittings onto the sleeve, melt and curl the sleeve end with a lighter so it hooks behind the crimp, and run instant glue between fitting and sleeve if it still slips; this prevents the two main failures, plugs blowing out and the sleeve sliding off its fitting (Ishikawa lab). 4) Brackets that carry the full pull must be strong: Osaka suggests tough resin or carbon-fibre filament, or folded polypropylene sheet with grommets if you can't print strong parts (Ishikawa lab). 5) Melt the cut ends of polyester sleeving so they don't fray (NFPA activity; Ishikawa lab). 6) A printed plug is part of a pressurised assembly: keep pressures modest, test with safety glasses on and the muscle pointing away from people, and never use a printed part as an air tank or reservoir ⚑ [uncertain: general safety advice, not from a muscle source]. 7) Printing the braid itself is possible but gives a weak muscle (6.7% stroke, Sangian et al. 2019), so buy expandable sleeving instead.

### Buying one (off-the-shelf parts)

Expandable braided sleeving (polyester or PET 'expandable sleeving' for cable bundling, e.g. McMaster-Carr 9284K2 or 9284K4; 'hard-to-fray braided tube'); super-soft latex rubber tubing or silicone rubber tubing; barbed tube fittings, barbed plugs and barbed reducers; push-to-connect (one-touch) straight fittings, e.g. SMC KQ2H (brand); quick-connect air couplings; worm-drive hose clamps, two-ear clamps and a pincer crimping tool; cable ties; nylon bolts or eye bolts; polyurethane air tubing (4 mm or 1/8 in); a 3-way valve or 3/2 [solenoid](../glossary.md#solenoid) valve; an air compressor, pressure regulator and gauge; ready-made muscles such as Festo Fluidic Muscle DMSP, Shadow Air Muscle, Koganei Pneumuscle and S-muscle (brands) (Make:; Open Soft Machines; NFPA activity; Ishikawa lab; Festo)

## Rules of thumb

- Braid angle sets the direction: a braid at less than about 54.7 degrees to the axis makes the muscle contract when pressurised; above 54.7 degrees it extends (Wikipedia)
- Stroke is limited: Festo allows at most 25% contraction (20% for its 5 mm size) and says the most effective range is below 9%; looser braids give about 30-37% (Shadow tables; 35% for Chou and Hannaford's nylon-braid muscle; Osaka's 9 mm muscle about 30% in its GitHub README and about 25% in the later HardwareX test), while Osaka's thin 7 mm and 5 mm muscles give only about 15% and 10% (Festo; Shadow; Ishikawa lab)
- Force is greatest when the muscle starts fully stretched and falls to zero at full contraction; a muscle that starts slack loses much of its force (Shadow; Festo; Wikibooks)
- Pressure limits for Shadow muscles: normally 0-5 bar, never above 6 bar, and not above 3 bar when unloaded, or its life is shortened and it may burst (Shadow). Festo rates 0-6 bar (0-8 bar for size 10) and recommends running at about 2 bar below the maximum (Festo)
- Pre-tension slightly: Festo's ideal starting point is stretched by 0.5% of nominal length, which prevents kinking and compression; avoid fully emptying it and keep a residual pressure of up to 0.5 bar (Festo)
- Pull-only actuator: use it against a return spring or weight, or as an opposed pair at a joint (Shadow; Wikibooks)
- Expect hysteresis from friction: Chou and Hannaford suggest adding about 2.5 N of friction force (positive when lengthening, negative when shortening) to their muscle's model, and suggest lubricant to reduce it (Chou and Hannaford 1996)
- [Fatigue](../glossary.md#fatigue) life: about 10,000 cycles for traditional muscles versus about 10 million for Festo's fibre-in-rubber design (Wikibooks); Osaka's hand-made 9 mm muscle passed 10,000 cycles at about 20 kg (Ishikawa lab)
- Cable ties only seal at relatively low pressures; crimped ferrules or wrapped wire are needed for higher pressures (Ishikawa lab, whose crimped muscle runs at up to 1 MPa)
- If the air is trapped (valve closed) and the outside force changes, the pressure inside can rise a lot, so stay well within the maximum pressure (Festo)

## Common failures

1) Bladder bursts where the braid is damaged or its fibres have spread apart, leaving a gap for the rubber to bulge through (Wikipedia); don't run a damaged muscle. 2) End plug pushed out, or braid sliding off the end fitting: the two main ways home-made muscles fail. Crimp the fittings onto the braid so the pull goes through the braid, melt the sleeve end so it hooks behind the crimp, and add glue if needed (Ishikawa lab). 3) Leaks at clamps (cable ties only work at low pressure) or through layer lines in printed plugs: use crimps or wire, and print plugs at 100% infill and seal them with ABS cement (Ishikawa lab). 4) Tube split by over-inflation, especially with no load attached (Shadow; Make:). 5) Fatigue cracks next to the rigid end fittings, where stress concentrates (Wikipedia); short life of about 10,000 cycles for traditional designs (Wikibooks). 6) Kinking, twisting or buckling when the muscle is left slack: keep a small pre-stretch and residual pressure (Festo). 7) Weak pull, because the muscle started slack (Shadow) or was asked to contract further than its maximum (Festo). 8) Jerky or imprecise positioning from braid friction and hysteresis (Chou and Hannaford 1996). 9) Cut sleeve ends fraying and unravelling: melt them (NFPA activity).

## Safety

Stored air pressure is the main hazard. Over-inflation shortens a muscle's life and can make it burst: Shadow says never exceed 6 bar and never inflate an unloaded muscle above 3 bar (Shadow); Make: warns that too much pressure may split the tube and says to wear safety glasses whenever working with compressed air. Home-made muscles mostly fail by the end plug blowing out or the sleeve sliding off its fitting (Ishikawa lab), so keep faces clear of the ends while testing. Compressed air can penetrate skin and blow particles into eyes, and a burst or loose hose can 'whip' and 'snake' (HSE HSG39). The muscle can pull hard and fast (Festo lists 'high acceleration of a load'), so keep fingers out of the [linkage](../glossary.md#linkage) it drives. If the air is lost the muscle relaxes and anything it was lifting falls; if the air is trapped it stays tense, so prop the load and vent the line before working on it (Festo; HSE HSG39 recommends vent valves that can be locked). Never hold stored pressure in a 3D-printed part.

## Related

- Air or hydraulic cylinder: a piston in a tube that can push and pull over a long stroke with steadier force, but it is heavier, has sliding seals and suffers from stiction, which makes fine position control hard (Wikibooks)
- Bellows and inflatable actuators: a folded or balloon-like chamber that gets longer (pushes) when pumped up, with no braid
- Soft pneumatic bending actuator: a soft finger that curls when pumped up, using stiff and stretchy layers instead of a braid
- Vacuum-driven artificial muscle: a folded skeleton sealed in a bag that contracts when air is sucked out, using suction instead of positive pressure
- Woven self-tightening grip (finger-trap grip): the same kind of braid used passively, tightening on a rope or cable when pulled
- Shape-memory-alloy wire (nitinol muscle wire): an electric 'muscle' wire that shortens when heated by a current; small stroke, no air supply
- Twisted-string actuator and twisted-and-coiled polymer muscle: pulling actuators driven by a motor or by heat instead of air
- Extensible McKibben: the same parts with the sleeve pre-shortened (baked on a rod) so the braid angle is steep and the muscle gets longer when pumped up (Open Soft Machines)

## Make it yourself

- [Recipe for McKibben-Type Pneumatic Muscle (Ishikawa lab, Osaka University)](https://ishikawa-lab.sakura.ne.jp/mckibben_eng): Step-by-step recipe, parts list, videos and printable ABS plug and holder files for a 9 mm crimped muscle that runs at up to 1 MPa and can be made in 1-3 minutes once practised *(licence: the page says the methods may be used without permission or credit; licence of the files not stated)*
- [Art_muscles README (Yoichi Masuda, GitHub)](https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md): Parts lists (in Japanese) and STL files for 9, 7 and 5 mm McKibben muscles: ABS air stopper, resin couplers and caps, and a muscle holder *(licence: no licence file found in the repository)*
- [Mini McKibben Pneumatic Artificial Muscle (Open Soft Machines)](https://opensoftmachines.com/2018/04/mini-mckibben/): 60-minute recipe using latex tubing, polyester sleeving, barbed fittings and cable ties, inflated with a syringe *(licence: not stated)*
- [Mini 'Extensible' McKibben Pneumatic Artificial Muscle (Open Soft Machines)](https://opensoftmachines.com/2018/09/mini-extensible-mckibben/): The same parts, but the sleeve is pushed up short on a rod and baked at 120 C for 20 minutes so the finished muscle gets longer instead of shorter *(licence: not stated)*
- [Making a Simple Air Muscle (William Gurstelle, Make:)](https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/): History of McKibben's invention plus a hardware-store build with silicone tubing, polyester sleeve, hose clamps, a nylon bolt and a 3-way valve *(licence: link only)*
- [Build, Test, and Model a McKibben Air Muscle (NFPA classroom activity, PDF)](https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en): Classroom build with 3/8 in silicone tubing, polyester sleeving, brass fittings and a hose clamp, plus load tests at about 20 psi to compare with a computer model *(licence: link only)*

## Pictures, videos and models

- [Sam animation-real-muscle.gif (Rocketmagnet, Shadow Robot Company; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif): Animation of a Shadow Air Muscle shortening and fattening as it is inflated (used on Wikipedia's 'Pneumatic artificial muscles' page) *(licence: CC BY-SA 3.0)*
- [Pneumatic muscles.jpg (from Actuators 11(10):288; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg): Comparison picture of different types of pneumatic artificial muscles *(licence: CC BY-SA 4.0)*
- [Pneumatischer Muskel Aufbau (Red-Cali; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG): How a pneumatic muscle is built (mechanical set-up); a companion file 'Pneumatischer Muskel Dehnung' shows it stretched by a weight or by pressure *(licence: GFDL)*
- [Recipe for McKibben-type artificial muscle (Osaka University) (Yoichi Masuda, YouTube)](https://www.youtube.com/watch?v=qQCDsxbvZqI): Video of making a McKibben muscle with printed plugs and crimped fittings (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
- [McKibben Artificial Muscle - opensoftmachines (Open Soft Machines, YouTube)](https://www.youtube.com/watch?v=oBkdKeTJ5NY): Video of a mini McKibben muscle contracting when inflated with a syringe (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 4 sentences on this page marked [uncertain].
- ⚑ Finder value `power_source` = electricity, compressed air, liquid (best guess): `power` names several power sources, and not all may apply
- ⚑ Finder value `power_loss` = lets go (best guess): versions differ: lets go, keeps its last state
- ⚑ Research note: *Pneumatic artificial muscle*: invention date (Wikipedia 1957; Wikibooks: Gaylord's 1957 patent; Bennington et al. 2023: 1930s-40s, made popular by McKibben in the 1950s); maximum contraction (Festo 25%, Shadow 35-37%, Osaka group 30% in its README but about 25% in its HardwareX test); twisting (Shadow: tolerated; Festo: forbidden, about 1° misalignment).

## Sources

- <https://en.wikipedia.org/wiki/Pneumatic_artificial_muscles>
- <https://en.wikibooks.org/wiki/Robotics/Components/Actuation_Devices/Air_muscle>
- <https://www.motionworld.com/assets/festo-dmsp-fluidic-muscle-datasheet.pdf>
- <http://lars.mec.ua.pt/public/LAR%20Projects/RobotActuation/2002_MarcoMelo_VascoQuinteiro/Projecto/Artigos_net/net/air%20muscles/Shadow%20Robot%20Company%20Air%20Muscles.htm>
- <https://makezine.com/projects/make-40/joseph-mckibben-and-the-air-muscle/>
- <https://www.nfpa.com/hubfs/curriculum%20tree/Build-a-McKibben-Air-Muscle.pdf?hsLang=en>
- <https://opensoftmachines.com/2018/04/mini-mckibben/>
- <https://opensoftmachines.com/2018/09/mini-extensible-mckibben/>
- <https://ishikawa-lab.sakura.ne.jp/mckibben_eng>
- <https://raw.githubusercontent.com/Yoichi-Masuda/Art_muscles/master/README.md>
- <https://bdml.stanford.edu/twiki/pub/HSR/HumanSafeRobot/ChouHannaford96.pdf>
- <https://arxiv.org/pdf/2301.04684>
- <https://api.crossref.org/works/10.1089/3dp.2018.0103>
- <https://www.hse.gov.uk/pubns/priced/hsg39.pdf>
- <https://rubber-group.com/molded-rubber-bellows/>
- <https://commons.wikimedia.org/wiki/File:Sam_animation-real-muscle.gif>
- <https://commons.wikimedia.org/wiki/File:Pneumatic_muscles.jpg>
- <https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Aufbau.JPG>
- <https://commons.wikimedia.org/wiki/File:Pneumatischer_Muskel_Dehnung.JPG>
- <https://www.youtube.com/watch?v=qQCDsxbvZqI>
- <https://www.youtube.com/watch?v=eiulN90-6HE>
- <https://www.youtube.com/watch?v=oBkdKeTJ5NY>
- <https://www.youtube.com/watch?v=iZ5Mo0pjALI>
