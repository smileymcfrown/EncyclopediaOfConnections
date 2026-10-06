# springs & energy storage: Stores energy

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 117 Constant-force spring (spring-return reel)

*springs & energy storage.* A tightly curled steel strip that pulls with nearly the same force however far it is unrolled, used in sash-window counterbalances, motor brush holders and cable or hose retractors (tape measures and badge reels mostly use spiral power springs instead)

### What it is

- **plain_name**: A tightly rolled-up ribbon of springy steel that tries to curl back up: pull the free end out and it pulls back with almost the same force whether you've pulled out a little or a lot
- **term**: Constant-force spring (constant-force extension spring)
- **aliases**: 
  - constant force spring, constant-force extension spring (Lee Spring; Wikipedia)
  - Neg'ator (brand, AMETEK Hunter Spring) and negator spring (Hunter Spring; the name is often used for the type)
  - Conforce (brand, Vulcan Spring)
  - constant-force strip spring, clip-on constant-force strip spring, constant-force retractor (McMaster-Carr catalogue names)
  - prestressed flat strip spring, rolled ribbon spring (Lee Spring; Wikipedia)
  - counterbalance spring, e.g. 'counterbalance springs for window sashes' (Engineers Edge; Lee Spring)
  - constant-torque spring, spring motor, A-motor and B-motor (the two-drum version that gives a steady turning force) (Hayamizu Hatsujo; Hunter Spring)
  - spring-return reel, retractor, cable or hose retractor (products built around it; many tape measures, badge reels and dog leads use a spiral 'power spring' instead, see related)
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up
- **one_liner**: A coil of pre-curled steel strip that, once pulled out a short way, pulls back with an almost constant force over a very long distance, used to counterbalance, retract and keep things under steady tension.
- **complexity**: Single piece (the rolled steel strip, usually with a hole or shaped tab at the free end), normally used as a small assembly: the coil sits on a free-turning drum or spool, or in a pocket (cavity), and its free end is screwed or riveted to the moving part. Retractors add a housing, storage drum and cable; constant-torque 'spring motors' add a second (output) drum (Vulcan Spring; John Evans' Sons; Hunter Spring).
- **how_it_works**: The strip is made and heat-set so that its natural shape is a tight roll. When you pull the end, the strip leaves the roll and is bent straight; it stores energy because it keeps trying to return to its natural curl (Hunter Spring). All the bending happens in the short curved stretch between the roll and the straight part, and that stretch looks the same whether 10 cm or 1 m has been pulled out, so the force stays almost the same (Wikipedia 'Constant-force spring'). The full force is reached after pulling out about 1.25 times the coil's diameter; after that it stays roughly constant, and the force is set by the strip's thickness and width and the coil diameter (Lee Spring; Hunter Spring). If the outer end is wound onto a second drum instead of pulled straight, the same effect gives a nearly constant turning force (a constant-torque spring motor) (Lee Spring; Hayamizu Hatsujo).

### Finder attributes

- **job**: store energy: holds energy to lift, return or counterbalance a load, tighten and hold tension: keeps a cable, hose, belt or moving carriage under steady pull and takes up slack
- **motion**: slide (the free end pulls straight out and back) with rotate (the coil or drum turns as it unrolls); very long travel is possible, with working deflections of up to 50 times the drum diameter (Hunter Spring).
- **degrees_of_freedom**: 1: the free end moves in and out along the strip's length (the drum turns with it). Sideways and twisting movement is not controlled, so long extensions need guiding (Lee Spring).
- **special_behaviour**: 
  - tensioning (takes up slack and holds): pulls a cable, hose or carriage back with a steady force wherever it is (Lee Spring: cable retractors and hose retrievers)
  - none of the other listed behaviours; its own trick is a nearly constant force over a long stroke instead of a force that rises as it stretches, which is what makes it a good counterbalance (Wikipedia 'Constant-force spring')
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the strip's pull holds or returns the load
  - not a holding joint (it moves or passes on motion): it provides force; the end is fixed with a screw or rivet and the coil simply wraps a drum without being fastened to it (Vulcan Spring)
- **input_output**: Linear pull-out <-> rotation of the coil or drum. Extension type: nearly constant force over the stroke after the first 1.25 x coil diameter (Lee Spring), with a standard force tolerance of +/-10 percent (Vulcan Spring). Constant-torque motor type: an A-motor turns the output drum the same way as the storage drum, a B-motor the opposite way, giving nearly constant torque over many turns (Hayamizu Hatsujo). Back-drivable: yes, always: it is a spring, so it pulls back whenever the load lets go. Efficiency is reduced by friction, most in cavity mounts (John Evans' Sons) and least on a free-turning spool (Vulcan Spring).
- **power**: passive (no power needed)
- **removability**: removable: the coil just wraps tightly on its spool and is not fastened to it (Vulcan Spring); the free end is screwed, riveted or clipped on and can be undone. Take care, because it is under tension.
- **reuse_cycles**: many times: a constant-force spring has a predictable, rated fatigue life of about 2,500 to over a million extend-and-retract cycles depending on stress and size (Hunter Spring); common stock designs are 4,000-25,000 cycles (Vulcan Spring); Lee Spring stocks 2,500, 4,000, 13,000 and 25,000-cycle ranges.
- **tools_needed**: screwdriver or rivet tool to attach the free end, and something to make or buy a drum or spool; work gloves, because the strip edges are sharp and the spring snaps back (Chief Delphi forum). Otherwise no special tools; do not cut, drill or otherwise modify the spring (MIT 2.007 kit notes).
- **seal**: none
- **load**: Light to medium per spring: for example, a 0.475 x 0.009 inch strip with a 0.75 inch coil pulls about 2.6 lbf (11.6 N) (MIT 2.007 kit), and Vulcan's example spring J12G21 about 3.42 lb. More force comes from mounting springs back-to-back, in tandem, or laminated (wound together), with total force equal to the sum of the springs, e.g. 9 laminated springs give 9 times the force (Vulcan Spring). It only pulls along the strip; it cannot push, and it is weak and unstable against sideways and twisting loads, so guide it (Lee Spring). Don't use the spring as the end stop (Vulcan Spring).
- **adjustable**: no for a given spring: its force is fixed by strip thickness, width and coil diameter (Lee Spring). Change the force by swapping springs or adding more springs in parallel (Vulcan Spring), or change the lever or pulley ratio it acts through.
- **play_and_precision**: not applicable (it doesn't locate parts). Its force is only accurate to about +/-10 percent, and the coil's inside and outside diameters also vary by +/-10 percent (Vulcan Spring); force builds up over the first 1.25 coil diameters of travel (Lee Spring).
- **access_needed**: not applicable: fitted during assembly, with access to the drum end and the load end
- **materials**: Usually high-yield Type 301 stainless steel strip (Lee Spring; Vulcan Spring; Hunter Spring; McMaster-Carr), which resists corrosion; also high-carbon steel, Inconel and Elgiloy for special cases (Vulcan Spring; Hunter Spring). Drums and spools can be HDPE, PVC pipe or 3D-printed plastic running on bearings (Chief Delphi forum). *(unverified parts omitted)*
- **maker_difficulty**: easy to use, hard to make: buy the steel spring and 3D print the drum, housing and guides. *(unverified parts omitted)*

### Making it

- **processes**: 
  - off-the-shelf part: the spring itself (constant-force strip springs, constant-force retractors, spring-motor assemblies)
  - 3D print (FDM): drums, flanged spools, cavity housings, strip guides and mounts; a 3D-printable compliant 'constant-force mechanism' can stand in for light loads (Printables, BYU CMR)
  - CNC: turned or milled drums and brackets *(unverified parts omitted)*
- **print_in_place**: no: the steel spring is bought and slid onto a printed drum. (A compliant constant-force mechanism can be printed, but the BYU CMR demonstrator prints as four identical parts that snap together.)
- **making_tips_3d_printing**: 1) Size the drum right: Lee Spring says a drum should be 10-20 percent larger than the spring's natural inside diameter, and Vulcan Spring says a spool 15-20 percent larger than the nominal inside diameter, because the inside diameter itself varies by +/-10 percent; the spring should grip the spool tightly. Alternatively run it loosely on a freely rotating mandrel about 10 percent smaller than its inside diameter (MIT 2.007 kit notes) or on an undersized pin (Vulcan Spring). 2) Let the drum spin freely, ideally on pressed-in ball bearings: a free-turning spool gives 'smooth, repeatable operation due to the reduction of friction', while a spring rubbing in a pocket (cavity mount) is easier to assemble but has the most friction (Vulcan Spring; John Evans' Sons; Chief Delphi forum: 'Blue drum and white flanges where all 3d printed, the drum had some bearings pressed into it'). 3) Let a metal bolt or shaft carry the load and use the printed spool only to guide the coil; one FRC mentor 'wouldn't trust a printed part to carry the load itself' (Chief Delphi forum). Support the spring on both sides. 4) Give the strip room: it doesn't leave the coil at a tangent, so allow at least 0.8 x inside diameter between the drum centre and the strip's straight path (Vulcan Spring). 5) Add flanges or guides to keep long extensions from twisting or kinking on the way back (Lee Spring). 6) Never make the strip bend backwards: any idler pulley must be larger than the natural coil diameter and must not bend the strip against its curl (Lee Spring; MIT 2.007: back-bending 'will drastically limit its life'). Vulcan suggests reversing long, heavy springs before winding them onto a spool, taking care not to back-bend them; AMETEK's video shows a way to fit a spring to a drum without reversing it. 7) Keep at least 1.5 turns on the drum at full extension, and add a hard end stop on the moving part rather than letting the spring act as the stop (Vulcan Spring). 10) For very light loads you can print a spring-free alternative: BYU CMR's 'Constant-Force Mechanism' uses a bending plastic beam riding on a cam to give nearly constant force (Printables). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'constant-force springs' or 'constant force extension springs' (Lee Spring, Vulcan Spring 'Conforce', AMETEK Hunter Spring 'Neg'ator'); 'constant-force strip springs', 'clip-on constant-force strip springs' and 'constant-force retractors' (McMaster-Carr); 'constant torque springs' or 'spring motors' (A-type and B-type; Neg'ator spring motor assemblies with storage and output drums) (Hunter Spring; Hayamizu Hatsujo); 'spool' or 'drum' plus ball bearings for mounting; 'power springs' (spiral) for tape-measure-style reels (Lee Spring).
- **rules_of_thumb**: 
  - Full rated force is reached after pulling out 1.25 times the coil diameter; after that the force stays nearly constant (Lee Spring 'Learn About Constant Force Springs'; Hunter Spring 'What is a Negator Constant Force Spring').
  - Drum diameter 10-20 percent larger than the spring's natural inside diameter; keep 1.5 wraps on the drum at full extension; guide long extensions; idler pulleys larger than the natural diameter and never back-bending the strip (Lee Spring).
  - Spool 15-20 percent larger than the nominal inside diameter (because of the +/-10 percent tolerance on the inside diameter); spring length = (inside diameter x 3.14159 x 1.5) + maximum extension; leave at least 0.8 x inside diameter of clearance from the drum centre to the strip; force tolerance +/-10 percent (Vulcan Spring '8 Steps to a Constant Force Spring Design' and 'Constant Force Spring Mounting Methods'). Note: MIT's 2.007 kit notes instead suggest a free-turning mandrel about 10 percent smaller than the inside diameter, a looser mounting that Vulcan also allows ('an undersized bushing or pin').
  - Rated life ranges from 2,500 to over a million cycles; working deflections up to 50 times the drum diameter (Hunter Spring); common life ratings are 4,000-25,000 cycles, and a cycle means one extension and retraction of any given part of the strip (Vulcan Spring).
  - Several springs can share a load: total force is the sum of the springs; back-to-back mounting is the most stable for long extensions; laminated (interwound) springs suit short extensions only because they bind if pulled too far (Vulcan Spring 'Creating more force'; John Evans' Sons 'Mounting Methods').
  - Highly stressed constant-torque springs lost 7-10 percent of their end torque after thermal cycling that only reached about 37 °C, because of stress relaxation (R. W. Postma, 'Torque Loss and Stress Relaxation in Constant Torque Springs', 38th Aerospace Mechanisms Symposium, 2006). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Sliding sash windows held up by counterbalance springs in the frame (Engineers Edge)
  - The carbon brushes pressed against the spinning part of an electric motor (Engineers Edge: brush springs for motors)
  - Retracting cable and hose reels, and the cord or head return in some hair dryers, tools and gym machines (Lee Spring)
  - Retractable tape measures, badge reels and dog leads work the same way but usually use a spiral 'power spring' wound inside the reel instead (Lee Spring; Printables 'Badge Reel Spring Quick Release')
- **when_to_use**: Use a constant-force spring when you need a steady pull over a long distance in a small space: counterbalancing a sliding door, lid, monitor, window or robot elevator so it stays where you leave it; pulling back a cable, hose or lead; keeping a belt, tape or carriage under even tension; or pressing something (like motor brushes) with the same force as it wears (Lee Spring; Engineers Edge). Robotics teams use them so the lifting force on an elevator is constant (Chief Delphi forum). Its predictable life makes it good for products that cycle a known number of times (Vulcan Spring).
- **when_not_to_use**: Don't use one when you need a push (use a compression or gas spring), a force that grows with travel (use a coil extension spring), or very high forces in a small space (use a gas spring or a counterweight). For tape-measure-style reels that wind many turns, a spiral power spring is the usual choice (Lee Spring). Avoid it where the strip can't be guided or would be bent backwards over a small pulley (Lee Spring), where it would see high temperatures or corrosive chemicals for long periods (Vulcan Spring), or where the required number of cycles is far above the spring's rating. For a printed, metal-free alternative at light loads, try a compliant constant-force mechanism (BYU CMR).
- **environment_limits**: Type 301 stainless resists corrosion in normal indoor and outdoor use (McMaster-Carr), but 'corrosive atmospheres or extreme temperatures will affect a spring's life and material selection' (Vulcan Spring). Highly stressed springs slowly lose force through stress relaxation, which is sped up by heat and temperature cycling: aerospace hinge springs lost 7-10 percent of torque after cycles peaking at only about 37 °C (Postma 2006). Printed plastic drums and housings soften with heat (PLA about 60 °C, PETG about 80 °C, ASA about 110 °C in CNC Kitchen's test). Choosing a spring rated for too few cycles leads to premature failure (Vulcan Spring).
- **safety_notes**: Stored energy and sharp edges: a released or broken constant-force spring snaps back very fast. An FRC mentor warned that 'if it came loose, it would coil up very fast and hard, and could seriously injure anyone', and teams report 'nasty' cuts to fingers and hands; they require work gloves for anyone handling them and keep bystanders back (Chief Delphi forum). Never let go of an extended spring, keep 1.5 turns on the drum so it can't pull off, support it on both sides, and don't use it as an end stop (Vulcan Spring; Chief Delphi forum). *(unverified parts omitted)*
- **common_failures**: Back-bending the strip over a small pulley or while fitting it, which 'will drastically limit its life and reduce its coil effectiveness' (MIT 2.007 kit notes; Lee Spring). Twisting or kinking on the way back at long extensions because the strip isn't guided (Lee Spring). Pulling off the drum or losing grip because fewer than 1.5 wraps remain (Vulcan Spring). Too much friction in a cavity mount or a fixed post, which reduces the useful force and shortens life (John Evans' Sons; MIT 2.007 kit notes). Laminated springs binding on long strokes and tandem springs rubbing together (Vulcan Spring). Premature failure because the spring's rated cycle life was underestimated (Vulcan Spring). Slow loss of force through stress relaxation, especially when warm (Postma 2006). Printed drums or supports breaking or creeping under the load; let a metal bolt carry it (Chief Delphi forum). A modified (cut or drilled) spring failing early (MIT 2.007 kit notes).
- **related**: 
  - Spiral power spring (clock spring): a flat spiral wound inside a reel that stores turning energy; force rises as it is wound; used in tape measures, badge reels, dog leads and seat belts
  - Coil spring (extension): force rises steadily with stretch (Hooke's law), unlike the nearly flat force of a constant-force spring
  - Spring balancer (gravity compensation): holds a tool or arm weightless, often using a spring with a cam or cone-shaped drum to even out the force
  - Constant-torque spring motor (A-motor, B-motor): the same strip wound between two drums to give a steady turning force
  - Gas spring: a sealed gas cylinder that pushes with a fairly steady force and adds damping
  - Ratcheting reel closure (dial lacing system) and other reels & take-up mechanisms: wind up cord or strap, but lock rather than pull back continuously
  - Compliant constant-force mechanism: a printed bending beam plus cam or linkage shaped to give nearly constant force (BYU CMR)
  - Counterweight: gives a truly constant force but is heavy and bulky

### Pictures, videos and models

- **links**: 
  - [Constant force spring.svg (Wikimedia Commons, by Cmglee)](https://commons.wikimedia.org/wiki/File:Constant_force_spring.svg): Graphs of load against extension for constant-force springs compared with ideal (Hooke's law) springs *(licence: CC BY-SA 4.0 or GFDL 1.2+ (dual licensed))*
  - [Conforce Constant Force Spring Extension (YouTube, Vulcan Spring)](https://www.youtube.com/watch?v=uYQcxv_KuMQ): Video of a constant-force spring on a spool being pulled out and retracting (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [Constant Force Spring – How to Add the Spring to Your Application Without Reversing It (YouTube, AMETEKSTC)](https://www.youtube.com/watch?v=65KoSqo3F_0): Video showing how to fit a Neg'ator constant-force spring onto a drum without bending it backwards (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [2.007 Kit Part: Constant Force Springs (MIT, Prof. Alex Slocum's course site)](https://pergatory.mit.edu/2.007/kit/springs/kp_cnstspring.html): Photo and diagrams of kit constant-force springs with mounting tips (mandrel, back-to-back mounting) and a warning against back-bending *(licence: link only)*
  - [Constant Force Springs - Learn About (Lee Spring)](https://www.leespring.com/learn-about-constant-force-springs): Illustrated explanation of constant-force springs with mounting rules and typical applications *(licence: link only)*
- **make_it_yourself**: 
  - [Constant-Force Mechanism (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/583491-constant-force-mechanism): A 3D-printable compliant mechanism that gives nearly constant force over part of its travel using a bending beam riding on a cam (crank-slider with nested cams); print one part four times and snap together, no metal spring needed. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Constant-Force Mechanism for FDM (Gamma4D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/488316-constant-force-mechanism-for-fdm): A redesign of the compliant constant-force mechanism made easier to print on FDM printers, with 'strongspring' and thin versions for weaker materials; printed in PLA without supports. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Badge Reel Spring Quick Release (micahcerrone, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/529771-badge-reel-spring-quick-release): Reuses the flat coiled spring from an old badge reel, wound into a printed housing, to make a spring-return quick-release pin; shows how a salvaged reel spring can be mounted. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Force Spring Spool Holder (Chief Delphi forum thread, 2020)](https://www.chiefdelphi.com/t/force-spring-spool-holder/382729): Robotics teams' advice and photos on 3D-printed and PVC spools with bearings for constant-force springs, spool sizing and safe handling *(licence: link only)*
- **diagram_idea**: A side view of a coiled steel strip on a free-turning drum with its end pulled out to the right at three different distances, each with the same-length force arrow, next to a small graph comparing its flat force line with the rising line of an ordinary coil spring, and a callout showing that all the bending happens in the short curved section where the strip leaves the coil.
- **sources**: 
  - https://en.wikipedia.org/wiki/Constant-force_spring
  - https://en.wikipedia.org/wiki/Spring_(device)
  - https://www.leespring.com/learn-about-constant-force-springs
  - https://www.vulcanspring.com/8-steps-to-a-constant-force-spring-design/
  - https://www.vulcanspring.com/constant-force-spring-life-cycles/
  - https://www.vulcanspring.com/spring-mounting-methods-for-constant-force-springs/
  - https://www.vulcanspring.com/creating-more-force-with-a-constant-force-spring/
  - https://springcompany.com/blog/mounting-methods-constant-force-springs/
  - https://www.hunterspringandreel.com/support/faq/springs-what-is-a-negator-constant-force-spring
  - https://www.hayamizu-hatsujo.co.jp/english/technology/formula/
  - https://www.engineersedge.com/spring_material/constant-force-spring.htm
  - https://pergatory.mit.edu/2.007/kit/springs/kp_cnstspring.html
  - https://www.mcmaster.com/products/constant-force-springs/
  - https://esmats.eu/amspapers/pastpapers/pdfs/2006/postma.pdf
  - https://www.chiefdelphi.com/t/force-spring-spool-holder/382729
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Constant_force_spring.svg
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=uYQcxv_KuMQ
  - https://www.youtube.com/watch?v=65KoSqo3F_0

### Other info

- **Fields with unverified parts:** maker_difficulty, making_tips_3d_printing, materials, processes, rules_of_thumb, safety_notes

## 118 Ortho-planar spring

*springs & energy storage.* A flat, one-piece spring cut or printed from sheet whose centre moves in and out of the plane; easy to 3D print or laser cut

### What it is

- **plain_name**: A flat, one-piece spring cut or printed from a sheet: a middle disc joined to an outer ring by thin springy legs, so the middle can be pushed in or pulled out of the sheet and springs back, moving straight up and down without twisting
- **term**: Ortho-planar spring (compliant ortho-planar linear-motion spring)
- **aliases**: 
  - orthoplanar spring (one-word spelling used in recent papers, e.g. Sutton et al. 2024)
  - compliant ortho-planar spring, COPS (BYU thesis and paper abbreviation)
  - ortho-planar linear-motion spring (Parise, Howell and Magleby 2001)
  - planar spring or flat spring (loose general terms; a planar spring whose centre twists as it moves is a spiral or volute spring, not a true ortho-planar spring)
  - named leg layouts from the BYU patent: radial-leg, side-leg (lateral), Bi, Tri and Pent designs
  - Euler-spiral orthoplanar spring (a variant whose legs lie completely flat under load; Sutton et al. 2024)
  - ortho-planar spiral spring (Riskable's OpenSCAD generator; spiral legs, 'without (much) rotation') *(unverified parts omitted)*
- **family**: springs & energy storage
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints, sliding, telescoping & linear motion
- **one_liner**: A flat, single-piece spring whose centre platform, held by several thin symmetric legs, moves straight in and out of the sheet it was cut from without rotating, giving a compact push-back spring that can be laser cut, stamped or 3D printed.
- **complexity**: Single piece: an outer base ring (frame), a centre platform and two to five thin flexible legs joining them (the patent describes two- to five-leg designs), all cut, stamped, moulded or printed from one flat sheet (BYU CMR; US patent 6,983,924). In use it is clamped at its rim, e.g. between two housing parts or with screws through the ring; two can be stacked for extra stiffness or stability.
- **how_it_works**: The centre platform is joined to the outer ring by several identical springy legs arranged evenly around it. When you push the platform out of the sheet, every leg bends a little, and the legs together push back like a coil spring. Because the legs are symmetric, their sideways pulls cancel and only the up-and-down force is left, so the platform stays parallel to the base and does not twist as it moves (in the patent's words, the non-axial forces sum to zero and the platform keeps its orientation). This is the difference from older flat spiral (volute) springs and 'spider' springs, which need the centre to rotate a little to move (US patent 6,983,924). Each leg tends to twist about its own length; with an even number of legs, opposite legs share the same twisting tendency, so odd numbers of legs are more stable, and five legs spaced 72 degrees apart (the 'Pent' design) were the most stable (US patent 6,983,924), and the force usually rises faster than in proportion as it is pushed further, because the legs start to stretch as well as bend (the 2018 gate-valve study found stiffness increased with deflection).

### Finder attributes

- **job**: 
  - store energy: it is a spring that pushes the platform back to its rest position
  - let it move (turn, slide or bend): it guides a short straight in-and-out movement of the platform without rubbing parts
  - line parts up exactly: the platform returns to the same place and stays parallel to the base, which is why it is used in sensors and valves
- **motion**: flex: the centre moves in a straight line in and out of the plane, over a short stroke (e.g. an 8 mm stroke for a pair of 48.7 mm spiral ortho-planar springs studied for energy harvesting; OpenAlex abstract, 2015); the patent's platform can even be pushed down level with the base, inside its thickness (US patent 6,983,924, claims 3-4)
- **degrees_of_freedom**: 1 intended: in-and-out movement along the axis. In practice a single spring also tilts fairly easily (a 2014 compliance study found the ortho-planar spring 'also demonstrates large bending compliance'), so it behaves as 1 stiff-ish translation plus 2 soft tilts; two springs spaced apart on one shaft block the tilting, as in a needle-insertion force sensor that uses two planar springs in parallel (OpenAlex abstracts).
- **special_behaviour**: 
  - self-aligning or self-centring: the legs always pull the platform back to its flat rest position and keep it parallel to the base, without twisting (BYU CMR; US patent 6,983,924)
  - none of the locking, one-way or clicking behaviours on its own; a buckled or prestressed pair can be made bistable or nearly zero-stiffness, but that is a special design (OpenAlex abstracts: 2015 zero-stiffness pair; 2026 bistable harvester)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the bent legs push the platform back
  - not a holding joint (it moves or passes on motion): its job is to be a guided spring, not to fasten parts together
- **input_output**: not applicable (it is a spring, not a transmission). Force rises with how far the platform is pushed; many designs stiffen as they deflect (2018 gate-valve study). Back-drivable: yes, it simply springs back.
- **power**: passive (no power needed)
- **removability**: removable: the spring itself is one piece and is usually clamped at its rim or screwed through holes in its outer ring, so it can be taken out and swapped (e.g. an energy harvester designed around replaceable ortho-planar springs, 2024 abstract). If printed as part of a larger part it is permanent.
- **reuse_cycles**: many times for taking apart and refitting. *(unverified parts omitted)*
- **seal**: none: the gaps between the legs are open. It can act as the spring of a valve, but a separate polished seat does the sealing (the 2018 gate-valve prototype needed a thoroughly polished surface to stop leaks)
- **load**: Strongest and most predictable when pushed straight along its axis; soft against tilting (large bending compliance, 2014 study) and weak against sideways shear on the platform. Spinning springs (e.g. in a belt CVT) suffer stress stiffening and sideways buckling of the legs (BYU thesis 2005). *(unverified parts omitted)*
- **adjustable**: No, not after it is made: stiffness is set by the leg thickness, width, length, number of legs and material. *(unverified parts omitted)*
- **play_and_precision**: none: no sliding parts, so no play, backlash or stiction, and the platform stays parallel as it moves (BYU CMR). It returns to the same rest position unless overloaded or, in plastic, left pushed in long enough to creep (DuPont design guide p. 36; Akaki Kuumeri). A single spring tolerates tilt poorly, i.e. it lets the platform tilt under off-centre loads (2014 study); use two spaced springs for a better straight-line guide.
- **access_needed**: not applicable: it is a part that is clamped into a housing during assembly
- **materials**: Prototypes have been made in stainless steel, aluminium, polypropylene and polycrystalline silicon (US patent 6,983,924); silicon micro-springs are etched for MEMS devices (2026 micro-Stirling paper). Printed versions use PLA (BYU demonstrator; a 2024 PLA energy harvester), PETG, nylon or PCTPE (Riskable). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: it prints or laser-cuts in one piece with no assembly, and free generators and models exist, but thin legs need a good printer and plastic versions fatigue and creep, so getting a long-lasting spring takes test prints

### Making it

- **processes**: 
  - 3D print (FDM): the BYU and community models print flat in one piece (BYU CMR; Printables models)
  - laser cut: from plastic or thin metal sheet; the patent's valve spring was laser cut from 0.01 in (0.25 mm) stainless steel (US patent 6,983,924)
  - CNC: milling, CNC router, water-jet cutting and wire EDM all work because it is flat (BYU CMR, Printables 'Other Materials'; US patent 6,983,924)
  - sheet metal: stamping from spring or stainless sheet (US patent 6,983,924)
  - injection moulding and micro-injection moulding for plastic springs (US patent 6,983,924; 2015 paper 'Microinjection moulding of miniaturised polymeric ortho-planar springs', title via OpenAlex); surface micromachining of polycrystalline silicon for microscopic MEMS springs (US patent 6,983,924) *(unverified parts omitted)*
- **print_in_place**: yes: it prints as one flat, working spring with no assembly. Jens Willmer's model includes one version that needs supports and one that prints without (Printables).
- **making_tips_3d_printing**: 1) Print it flat on the bed, which is its natural orientation: the legs then bend out of plane with the strain running along each printed layer, not pulling layers apart (Hubs advises against flexing arms that are built up vertically in Z). 2) Make the print lines run lengthwise along each leg; Akaki Kuumeri's advice for flexures printed lying flat is to make sure the print lines are longitudinal, so check the slicer preview and consider legs that are only perimeters (no infill). 3) Check every leg layer by layer in the slicer before printing, because it is easy to design legs that are too thin for your nozzle (Riskable). 4) Material: PLA works for demonstrators (BYU; Jens Willmer printed his in PLA at 0.2 mm layers, 10% infill); PETG is springier but a PETG spiral version lasted only about 200 cycles, so use nylon or PCTPE for longer life (Riskable). 5) Don't scale the BYU design below about 20% in PLA (BYU CMR). 6) Fillet where the legs meet the ring and platform, keep the print seam off the legs, and avoid sharp corners; these are the usual flexure cracking points (Akaki Kuumeri; DuPont design guide p. 36). 7) Don't store it pushed in or preloaded for long: printed plastic creeps and relaxes, so the rest position moves and the force drops (DuPont p. 36; Akaki Kuumeri). 8) Add a hard stop in the housing so the platform can't be pushed past the legs' safe bend (Akaki Kuumeri's end-stop advice for flexures). 9) PLA softens at about 60 °C and PETG at about 80 °C (CNC Kitchen), so keep printed springs away from heat.
- **off_the_shelf_parts**: Parametric source: Riskable's OpenSCAD module ortho_planar_spiral_spring() on Printables. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Use an odd number of legs: the patent reports that springs with an odd number of legs are more stable than similar even-leg designs, and its five-leg 'Pent' design was the most stable (US patent 6,983,924, Google Patents).
  - The BYU printable design can be scaled down to about 20% in PLA before it stops working (BYU CMR, Printables model 596315).
  - Printed PETG spiral ortho-planar springs last about 200 cycles; for longer life use nylon or PCTPE (Riskable, Printables model 24158).
  - Expect a stiffening spring: a topology-optimised valve spring's stiffness increased as deflection increased (Design of Ortho-Planar Spring for a Normally-Closed Gate Valve, 2018; abstract via OpenAlex).
  - A single spring is soft against tilting ('large bending compliance'), so pair two springs spaced along the axis if the platform must not tip (Six Dimensional Compliance Analysis of Ortho-Planar Springs, 2014; abstract via OpenAlex).
  - Two prestressed spiral ortho-planar springs (48.7 mm diameter) cut the force needed by 74.7% over an 8 mm stroke, i.e. nearly zero stiffness (Ortho-Planar Springs: Design of a zero stiffness mechanism, 2015; abstract via OpenAlex).
  - Adding a constrained viscoelastic damping layer raised damping to nearly 2.5 times the plain spring's without much change in its spring constant (Viscoelastic Damping of Ortho-Planar Springs, 2008; abstract via OpenAlex).
  - Plastic springs are for intermittent action; springs under constant load or deflection should be metal because plastics creep and relax (DuPont 'General Design Principles for Engineering Polymers', p. 36).

### When to use it

- **everyday_examples**: 
  - Rarely seen openly in household objects; most beginners meet it as a 3D-printed demonstrator or fidget from BYU's compliant mechanisms group (BYU CMR)
  - The spring inside some valves: the BYU patent's example, a laser-cut stainless spring in a pneumatic valve controller, was used successfully in an industrial valve, and a 2018 study built a normally-closed gate valve around one (US patent 6,983,924; OpenAlex abstract)
  - Push-buttons and keys: BYU lists keyboards and electrical contacts as uses, and makers print them into arcade buttons (BYU CMR; Printables 'Arcade Button with Orthoplanar Spring Concept')
  - Vibration energy harvesters and force sensors in research devices (OpenAlex abstracts 2014-2026)
- **when_to_use**: Use it when you need a short, straight push-back movement in very little height: a spring under a button or key, a valve that must lift straight off its seat, a sensor or probe that must move without twisting or rubbing, or a suspension for a small vibrating mass. It is a good choice when a coil spring would be too tall, would need a guide rod, or would rotate its end against the part it touches, and when you want to make the spring yourself on a printer or laser cutter with no assembly. Its lack of sliding parts also means no wear dust and no noise from rubbing (BYU CMR).
- **when_not_to_use**: Avoid it for long strokes (use a coil spring), for large or constant loads in printed plastic (it creeps and relaxes; use a steel spring or a metal ortho-planar spring), where the platform must not tilt under off-centre loads (use two spaced springs, a parallel leaf-spring flexure stage or a guided coil spring), and for parts that spin fast (legs buckle sideways; BYU thesis 2005). If you only need a simple push-back arm, a printed leaf spring is easier to design and tune.
- **environment_limits**: Printed plastic: PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen); plastic springs creep and lose force if held deflected (DuPont p. 36; Akaki Kuumeri); PETG versions fatigue after roughly 200 cycles (Riskable). Spinning applications cause stress stiffening and leg buckling (BYU thesis 2005). *(unverified parts omitted)*
- **safety_notes**: Generally low risk: it stores little energy. Keep fingers out of any powered mechanism it is part of. *(unverified parts omitted)*
- **common_failures**: Legs crack or snap at their roots after many cycles or one overload; add end stops, fillets and use a tougher material (Riskable; Akaki Kuumeri). The rest position sinks and the force drops after being held pushed in (creep and stress relaxation in plastic; DuPont p. 36). Legs printed too thin, or with infill lines running across them, break early or come out stiff; check the slicer preview (Riskable; Akaki Kuumeri). The platform tilts or wobbles under off-centre loads because a single spring is soft in tilt (2014 study); use two springs. Even-leg designs are less stable than odd-leg ones (US patent 6,983,924). In spinning uses the legs buckle sideways (BYU thesis 2005).
- **related**: 
  - Printed leaf spring (flat cantilever spring): a single springy strip that bends; simpler, but its tip moves in an arc rather than straight
  - Parallel leaf-spring flexure (linear flexure stage): springy blades arranged as a parallelogram to guide a straight sideways motion with more resistance to tilt
  - Volute (conical) spring and spider (geophone) spring: older flat or flattenable springs whose centre must twist as it moves, causing rubbing, wear and extra clearance, which the ortho-planar spring avoids (US patent 6,983,924)
  - Belleville (disc) spring: a dished washer that flattens under load; very stiff and compact, but its edges must slide (US patent 6,983,924)
  - Wave springs: compact axial springs made of wavy steel rings, stronger but not flat-cut and not printable in the same way
  - Bistable compliant mechanism: a prestressed or buckled planar spring can snap between two positions instead of returning to one
  - Flexure hinge: the same bend-instead-of-slide idea used for rotation instead of in-and-out motion *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [3D Printed Ortho-Planar Spring (YouTube, BYU Compliant Mechanisms Research Group)](https://www.youtube.com/watch?v=8-0Hgvv6fAk): A printed ortho-planar spring being pushed in and out, showing the platform moving straight without rotating; also embedded on BYU's page https://compliantmechanisms.byu.edu/3d-printed-ortho-planar-spring *(licence: link only (standard YouTube licence))*
  - [Ortho-Planar Spring (BYU CMR, Printables)](https://www.printables.com/model/596315-ortho-planar-spring): Animated GIFs of the spring from the top and side, photos of scaled prints and of milled, routed and water-jet versions, and a picture of other ortho-planar designs (content read through the Printables public API) *(licence: CC BY-NC (model page licence; noncommercial use; commercial use needs a licence from BYU))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Ortho-Planar Spring (BYU CMR, Printables)](https://www.printables.com/model/596315-ortho-planar-spring): BYU's printable ortho-planar spring demonstrator; prints in one piece; notes that it can be scaled down to about 20% in PLA and can also be milled, CNC-routed or water-jet cut. Includes references to Parise et al. 2001 and the aging study. *(licence: CC BY-NC)*
  - [Ortho-Planar Spring (Jens Willmer, Printables)](https://www.printables.com/model/37093-ortho-planar-spring): Two printable versions (one needs supports, one prints without), printed in PLA at 0.2 mm layers and 10% infill on a Prusa i3 MK3; the page links an Onshape source file for editing *(licence: CC BY)*
  - [Parametric Ortho-Planar Spiral Spring Generator (Riskable, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/24158-parametric-ortho-planar-spiral-spring-generator): OpenSCAD library with an ortho_planar_spiral_spring() module that generates a flat spiral ortho-planar spring of any size; notes PETG lasts about 200 cycles and nylon or PCTPE last longer *(licence: CC BY-NC)*
  - [Arcade Button with Orthoplanar Spring Concept (Prof.Enginerd, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/825713-arcade-button-with-orthoplanar-spring-concept): A 30 mm arcade button that adds a printed ortho-planar spring on top of a standard mechanical keyswitch; needs supports *(licence: CC0)*
- **diagram_idea**: A top view of a disc with three curved legs linking a centre platform to an outer ring, beside a side view showing the platform lifted straight up with all legs bent equally, an arrow showing straight-line motion and a crossed-out twisting arrow to show it does not rotate.
- **sources**: 
  - https://compliantmechanisms.byu.edu/3d-printed-ortho-planar-spring
  - https://compliantmechanisms.byu.edu/maker-resources
  - https://www.printables.com/model/596315-ortho-planar-spring
  - https://www.printables.com/model/37093-ortho-planar-spring
  - https://api.printables.com/graphql/
  - https://patents.google.com/patent/US6983924B2/en
  - https://www.freepatentsonline.com/6983924.html
  - https://api.openalex.org/works?filter=title.search:ortho-planar%20spring&per-page=40
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.3390/machines12040273?fields=title,abstract,year,venue,openAccessPdf
  - https://www.youtube.com/watch?v=8-0Hgvv6fAk
  - https://vimeo.com/337982520
  - https://s3files.core77.com/images/c77_webinar_series/Akaki-Kuumeri-3D-printed-flexures.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament

### Other info

- **Fields with unverified parts:** adjustable, aliases, environment_limits, links, load, materials, off_the_shelf_parts, processes, related, reuse_cycles, safety_notes, tools_needed

## 119 Spring balancer (gravity compensation)

*springs & energy storage.* Springs arranged so they cancel the weight of an arm at any angle, making it feel weightless, as in an anglepoise lamp or a robot arm

*Also covers:* Also covers counterweights as the simplest alternative

### What it is

- **plain_name**: Springs (or a counterweight) set up so a hinged arm feels weightless: you can move it with a fingertip and it stays wherever you leave it, like a desk lamp that holds any pose
- **term**: Spring balancer (spring gravity equilibrator, static balancing or gravity compensation); the simplest alternative is a counterweight (counterbalance)
- **aliases**: 
  - gravity equilibrator, spring equilibrator (French and Widden 2000; Takahashi et al. 2019)
  - spring-and-lever balancing mechanism (French and Widden 2000)
  - static balancing, statically balanced mechanism, energy-free system (Herder, TU Delft thesis 2001)
  - gravity compensation or passive gravity compensation (robotics)
  - counterbalance, counterbalance spring, counterbalancing mechanism (garage doors, arms)
  - balanced-arm lamp or floating arm lamp (Wikipedia 'Balanced-arm lamp')
  - Anglepoise mechanism (Anglepoise (brand); Luxo L-1 (brand) and IKEA Tertial (brand) are similar lamps)
  - elastic equipoising mechanism (George Carwardine's 1932 patent title)
  - zero-free-length or zero-length spring balancer (the ideal spring for exact balance)
  - counterweight or counterpoise (the weight-based version)
  - tool balancer or spring balancer (industrial ceiling-hung spring reel that 'makes tools weightless'; a different device with the same job)
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up
- **one_liner**: An arrangement of springs, or a counterweight, that cancels the weight of a pivoting arm or door at every angle, so it can be moved with almost no effort and stays put wherever it is released.
- **complexity**: A small assembly that acts as one unit. Spring version: the arm, its pivot, one extension spring per balanced joint, a fixed anchor point directly above (or below) the pivot, and often a cable and pulley or a parallelogram linkage to carry the 'vertical' reference to the next joint (French and Widden 2000; Wikipedia 'Balanced-arm lamp'). Counterweight version: the arm extended past the pivot and a weight on the far end, sometimes with a chain or parallelogram to keep it parallel (Wikipedia 'Balanced-arm lamp').
- **how_it_works**: The weight of the load makes a turning effect (moment) about the pivot that grows and shrinks with the arm's angle. A spring stretched from a point on the arm to a fixed point directly above the pivot makes a turning effect that changes with angle in exactly the same way, provided the spring's pull is proportional to its whole length (a zero-free-length spring); with the right stiffness the two cancel at every angle, so the arm is in balance everywhere (French and Widden 2000). A counterweight does the same job more simply: weight times distance on one side equals load times distance on the other (Wikipedia 'Balanced-arm lamp': m1 x d1 = m2 x d2). In two-arm lamps such as the Anglepoise, a parallelogram linkage carries a vertical reference out to the elbow so each arm is balanced separately by its own spring, and all the springs can sit near the base (French and Widden 2000; Wikipedia 'Anglepoise lamp'). Ordinary springs are not zero-length, so designers use springs wound with built-in tension, or run a cable from the arm over a pulley at the anchor point to the spring (Wikipedia 'Spring (device)'; Takahashi et al. 2019); a little joint friction hides the small errors that remain (French and Widden 2000).

### Finder attributes

- **job**: 
  - store energy: the spring stores the energy you would otherwise spend lifting the load and gives it back when you lower it, so the total stays constant
  - let it move (turn, slide or bend): the arm swings freely and stays in any position without clamping
- **degrees_of_freedom**: 1 per balanced joint: a single arm needs one spring; an Anglepoise-type lamp balances 2 arm joints with 2 springs (plus unbalanced base turning and shade tilting) (French and Widden 2000). A counterweight-only arm is also 1 per joint.
- **special_behaviour**: 
  - none of the listed behaviours exactly: its trick is neutral balance (zero stiffness), meaning the load has no preferred position and stays wherever it is left; it does not lock, and a push moves it
  - quick-release is not a feature; it is not a latch. Holding in position relies on balance plus a little joint friction (French and Widden 2000)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the springs cancel the weight
  - friction or clamping (force-fit): joint friction holds the arm against small balance errors and leftover spring non-linearity (French and Widden 2000, on Carwardine's patent 433 617)
  - not a holding joint (it moves or passes on motion) for the counterweight version, which is held by gravity on a second weight rather than any of the listed principles
- **input_output**: not applicable (not a transmission). It passes no motion on; it only removes the weight you feel. The arm is fully back-drivable: you move it by hand with little force.
- **power**: passive (no power needed). Robots can instead compensate gravity actively with motor torque; passive springs reduce the motor torque needed (Takahashi et al. 2019).
- **removability**: removable: springs hook onto posts or eyes and counterweights bolt on, so the balancer can be taken apart and adjusted
- **reuse_cycles**: many times for taking apart. Spring life is set by fatigue: garage-door torsion springs are typically rated 10,000-15,000 opening cycles, with 30,000-cycle springs available (Wikipedia 'Garage door')
- **seal**: none
- **load**: light to heavy: from a desk-lamp head to a garage door of 400 lb (180 kg) or more balanced by torsion or extension springs (Wikipedia 'Garage door'); small tool balancers carry tools up to 5 lb (2.3 kg) (Hubbell Gleason BD series spec sheet). The balance only works for the design load in a vertical plane; springs that leave the vertical plane add side loads (French and Widden 2000).
- **adjustable**: yes: move the fixed spring anchor, change the spring pretension or add or remove counterweight to suit a new load (a change in load needs re-tuning). Tool balancers have a tension knob and push-button release (Hubbell Gleason spec sheet). *(unverified parts omitted)*
- **play_and_precision**: not applicable to locating, but balance accuracy matters: exact balance needs a spring of zero free length, the load's centre of mass on the line through the pivot and the spring's arm attachment, and a load whose centre of mass does not move; cheap lamp copies lose balance when the shade is turned, while the original Anglepoise mounts the shade in trunnions at its centre of gravity (French and Widden 2000). *(unverified parts omitted)*
- **access_needed**: not applicable
- **materials**: Springs: steel extension (tension) or compression coil springs, torsion springs for doors; close-coiled springs wound with built-in tension approximate zero free length (French and Widden 2000; Wikipedia 'Spring (device)'). Arms: steel or aluminium rods and sheet, wood, or 3D-printed PLA or PETG links with ball bearings and steel shafts (Takahashi et al. 2019 printed PLA links; a printable Anglepoise 1209 remake uses PETG parts with 10 mm aluminium rods, Printables). Counterweights: steel, lead or concrete (Wikipedia 'Counterweight'). Printed plastic springs are unsuitable because a balancer loads its spring all the time (DuPont design guide p. 36).
- **maker_difficulty**: moderate: the arm and brackets are easy to print or cut, and a counterweight is easy, but a spring balancer needs a little geometry to pick the spring stiffness and anchor points, bought steel springs, low-friction pivots and some tuning

### Making it

- **processes**: 
  - 3D print (FDM): arms, brackets, spring anchors and pulleys (Takahashi et al. 2019; Printables Anglepoise 1209 remake)
  - off-the-shelf part: extension springs, torsion springs, constant-force springs, gas springs, tool balancers, counterweights, pulleys and cable *(unverified parts omitted)*
- **print_in_place**: no: it needs metal springs, pins or shafts and usually bearings, and is assembled from printed parts
- **making_tips_3d_printing**: 1) Print the arms and brackets, but buy the springs: a balancer keeps its spring loaded all the time, and plastic springs under constant load creep and relax (DuPont p. 36); in a test of printed coil springs held stretched for 8 hours, every filament took a set, PETG the least at about 5-10% (Razzer09, Printables 'Spring Material Test'). 2) Put a real pin or steel shaft with ball bearings in each pivot; Takahashi et al. printed PLA links but used industrial ball bearings and steel shafts to cut friction. 3) Get an effectively zero-free-length spring by running a cord from the arm over a small pulley at the fixed anchor point (directly above the pivot) down to an ordinary extension spring (Takahashi et al. 2019 used pulleys and cables this way), or join a pre-tensioned spring to an inelastic cord of the right length (Wikipedia 'Spring (device)'). 4) Make the anchor point adjustable (a slot or a row of holes) so you can tune the balance after assembly. 5) Line up the pivot, the spring's attachment on the arm and the centre of mass of arm plus load in one straight line (French and Widden 2000). 6) Beef up spring anchors and sockets with extra perimeters and solid infill; a printed lamp stand used 4 perimeters so the bolt threads could bite (3DP Ant, Printables). A printable Anglepoise remake used 0.2 mm layers, 25% infill, PETG, 10 mm aluminium rods and 12 mm x 1 mm springs about 85 mm long (Lowres, Printables). 7) PLA softens at about 60 °C (CNC Kitchen), so don't use PLA spring anchors near a hot lamp; PETG (about 80 °C) or ASA (about 110 °C) are safer.
- **off_the_shelf_parts**: Hubbell Gleason Series BD for tools up to 5 lb), 'safety cable' for extension springs, 'pulley', 'wire rope', 'ball bearing', lamp spare springs (e.g. the IKEA Tertial (brand) lamp springs reused in the Tertiarm robot arm), and 'counterweight'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Exact spring balance of a single arm: use a spring of zero free length with stiffness k = m g r / (b c), where m g is the load's weight, r the pivot-to-load distance, b the pivot-to-spring-attachment distance on the arm and c the distance from the pivot straight up to the fixed spring anchor; the spring tension must be proportional to its whole length (French and Widden, Proc. IMechE Part C 214, 2000, eqs 1 and 7).
  - The same condition written for the 'basic gravity equilibrator': m g r2 = r1 k1 a1, and numerically the only possible initial spring length is zero (Takahashi et al., 'Computational Design of Statically Balanced Planar Spring Mechanisms', IEEE RA-L 2019, eq. 1).
  - Two-arm lamps: carry the vertical reference to the elbow with a parallelogram; then each spring is chosen separately, k1 = m g r1 / (b1 c1) and k2 = m g r2 / (b2 c2) (French and Widden 2000, eq. 14).
  - Include the arms' own weight by using the combined centre of mass G in place of the load point, keeping the spring attachment, pivot and G in a straight line; if a centre of mass is off that line, balance is exact at only one position (French and Widden 2000, section 4).
  - Counterweight balance: m1 x d1 = m2 x d2 (lamp-head weight times its distance from the pivot equals counterweight times its distance) (Wikipedia 'Balanced-arm lamp'). A lift counterweight is typically the car's weight plus 40-50% of its rated load (Wikipedia 'Counterweight').
  - Counterweights are simpler but add inertia, which makes the arm sluggish and less able to resist outside forces; springs are light and low-inertia (Takahashi et al. 2019; French and Widden 2000).
  - Get an effectively zero free length with cables and pulleys (Takahashi et al. 2019) or with a pre-tensioned (negative-length) spring plus an inelastic link of the right length (Wikipedia 'Spring (device)').
  - Friction cannot be eliminated, and it lets the arm stay put despite small errors such as spring non-linearity (Carwardine's patent, summarised by French and Widden 2000); Takahashi et al. (2019) suggest that allowing some friction could widen the range of positions where the arm stays balanced.

### When to use it

- **everyday_examples**: 
  - An Anglepoise-style desk lamp (balanced-arm lamp), which stays in any pose without clamping (Wikipedia 'Anglepoise lamp')
  - A garage door that feels light to lift because torsion or extension springs balance its weight (Wikipedia 'Garage door')
  - Sash windows and lifts (elevators), balanced by counterweights (Wikipedia 'Balanced-arm lamp'; Wikipedia 'Counterweight')
  - Monitor arms, microphone booms and copy holders that use the same balanced-arm principle (Wikipedia 'Balanced-arm lamp'), and ceiling tool balancers that make power tools feel weightless on assembly lines (Hubbell Gleason spec sheet)
- **when_to_use**: Use it when something heavy on a pivot or slide must be positioned often by hand and stay where it is put: lamp and camera arms, monitor and microphone booms, lids, hatches and doors, tool arms, and robot arms where you want smaller, cheaper motors (Takahashi et al. 2019). A spring balancer is best when the load is fixed and the arm must stay light and quick to move; a counterweight is best when it must be simple, cheap and exactly right, and extra mass and a heavy base are acceptable (Wikipedia 'Balanced-arm lamp').
- **when_not_to_use**: Avoid it when the load changes a lot (a balancer is tuned to one weight; use an adjustable balancer, a friction or clamping joint, or motors), when the arm must move fast or resist bumps and you were going to use a counterweight (it adds inertia; use springs), when a simple hold-in-place joint would do (use a friction hinge or a lockable joint), and when you would have to make the springs from printed plastic (they creep; buy steel springs). For straight lifting of a hanging tool, a bought tool balancer or a constant-force spring is simpler than a linkage.
- **environment_limits**: Steel springs fatigue after a rated number of cycles and corrode faster in humid or coastal air (Wikipedia 'Garage door': 10,000-15,000 cycle springs, shorter life near the coast). Printed plastic parts that carry spring tension creep and soften with heat: PLA from about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen), which matters next to a hot lamp. Springs can resonate and hum (Wikipedia 'Balanced-arm lamp'). Adding weight to a spring-balanced door (glass, insulation, paint) shortens spring life (Wikipedia 'Garage door'). Counterweights are unaffected by heat and fatigue but need a heavy base (Wikipedia 'Balanced-arm lamp').
- **safety_notes**: Stored spring energy: balance springs are always under tension, and large ones (garage-door torsion springs) have injured and killed people during adjustment; they need training and proper tools (Wikipedia 'Garage door'). Run a safety cable through extension springs so a broken spring can't fly (Wikipedia 'Garage door'). Hang tool balancers with a secondary safety cable or chain (Hubbell Gleason spec sheet). Counterweights can fall, pinch fingers, or tip over a stand that is too light (Wikipedia 'Balanced-arm lamp'). A garage door with a broken spring can fall with great force (Wikipedia 'Garage door'). *(unverified parts omitted)*
- **common_failures**: The arm droops or springs up in part of its range because the spring isn't effectively zero-length or the anchor isn't exactly above the pivot; fix the geometry or use the pulley trick (French and Widden 2000; Takahashi et al. 2019). Balance lost after changing the load, e.g. a heavier lamp head or camera (re-tune the spring or counterweight). The shade or tool drifts when turned because its centre of mass moves (French and Widden 2000). Springs lose tension, fatigue or snap with age and corrosion (Wikipedia 'Garage door'). Too much joint friction makes it stiff to move (Takahashi et al. 2019 used ball bearings to keep friction low), while almost no friction lets small balance errors show as drift (French and Widden 2000). Counterweighted stands tip over (Wikipedia 'Balanced-arm lamp'). *(unverified parts omitted)*
- **related**: 
  - Counterweight (counterbalance): the simplest balancer, exact and cheap, but heavy and high in inertia (covered in this entry)
  - Constant-force spring: a curled steel strip that pulls with nearly constant force; balances a straight up-and-down load such as a sash or tool reel without any linkage (French and Widden 2000 call these 'negator' springs)
  - Friction hinge (torque hinge): holds an arm in place by friction instead of cancelling its weight; simpler, but you feel the full weight when moving it
  - Four-bar and parallelogram linkages: carry the vertical reference in two-arm balancers
  - Tool balancer (spring reel): a bought ceiling-hung reel that balances a hanging tool
  - Motorised gravity compensation: motors add the balancing torque in software; handles any load but needs power *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Angle Poise Lamp Diagram 2 (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Angle_Poise_Lamp_Diagram_2.png): Diagram of an Anglepoise-style lamp with one parallelogram and two extension springs near the base (used in Wikipedia 'Balanced-arm lamp') *(licence: Public domain)*
  - [Pantographic parallel arms balance a light-weight lamp and counter-weight (Wikimedia Commons animation)](https://commons.wikimedia.org/wiki/File:Pantographic_parallel_arms_balance_a_light-weight-lamp_and_counter-weight.gif): Animated counterweight-balanced parallelogram lamp arm moving through its range *(licence: Public domain)*
  - [Anglepoise 1227 (Wikimedia Commons photo)](https://commons.wikimedia.org/wiki/File:Anglepoise_1227.jpg): Photo of the 1935 Anglepoise model 1227 lamp with its springs at the base *(licence: CC BY 2.0)*
  - [Static balancing mechanism using gears and spring (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=WnDc7tv79HM): CAD animation of an arm kept in balance by a spring through a gear arrangement *(licence: link only (standard YouTube licence))*
  - [Computational Design of Statically Balanced Planar Spring Mechanisms (YouTube, Takuto Takahashi)](https://www.youtube.com/watch?v=oBnVt-Si2o0): Video for the 2019 IEEE RA-L paper: statically balanced spring linkages and 3D-printed prototypes that stay put in any pose *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Anglepoise 1209 Balanced Lamp (Lowres, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/78909-anglepoise-1209-balanced-lamp): Printable remake of a 1940s spring-balanced lamp: PETG parts, 10 mm aluminium rods (originals about 460 mm), 3 mm threaded rod and nuts, and 12 mm x 1 mm springs about 85 mm long; printed without supports at 0.2 mm layers and 25% infill *(licence: CC BY-NC-SA)* *(unverified parts omitted)*
- **diagram_idea**: Side view of a single arm pivoting on a post, with a load at its tip and a spring running from a point on the arm to an anchor directly above the pivot, shown at three angles with the spring stretched different amounts, plus a small inset of the counterweight version (weight x distance = load x distance) as the simplest alternative.
- **sources**: 
  - https://en.wikipedia.org/wiki/Balanced-arm_lamp
  - https://en.wikipedia.org/wiki/Anglepoise_lamp
  - https://en.wikipedia.org/wiki/Counterweight
  - https://en.wikipedia.org/wiki/Spring_(device)
  - https://en.wikipedia.org/wiki/Garage_door
  - https://eprints.lancs.ac.uk/id/eprint/20295/1/20295.pdf
  - https://crl.ethz.ch/papers/zeroStiffness.pdf
  - https://repository.tudelft.nl/record/uuid:8c4240fb-0315-462a-8b3b-efbd0f0e68b6
  - https://www.ergonomicpartners.com/pdf/hubbell-gleason-spring-balancer-specs.pdf
  - https://hackaday.io/project/19235-tertiarm-3d-printed-robot-arm
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/534644-spring-material-test
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Angle_Poise_Lamp_Diagram_2.png
  - https://commons.wikimedia.org/wiki/File:Pantographic_parallel_arms_balance_a_light-weight-lamp_and_counter-weight.gif
  - https://commons.wikimedia.org/wiki/File:Anglepoise_1227.jpg
  - https://www.youtube.com/watch?v=WnDc7tv79HM
  - https://www.youtube.com/watch?v=oBnVt-Si2o0

### Other info

- **Fields with unverified parts:** adjustable, common_failures, make_it_yourself, motion, off_the_shelf_parts, play_and_precision, processes, related, safety_notes, tools_needed

## 120 Printed leaf spring (flat cantilever spring)

*springs & energy storage.* A springy strip or arm of plastic or metal that bends to push back; the most practical kind of spring to 3D print

### What it is

- **plain_name**: A springy strip or arm, often printed right onto a part, that bends when pushed and pushes back when let go, like the plastic tongue that springs a button back out
- **term**: Leaf spring (flat spring); a cantilever spring when it is fixed at one end only
- **aliases**: 
  - flat spring (Wikipedia 'Flat spring' redirects to 'Leaf spring')
  - cantilever spring: 'a flat spring fixed only at one end like a cantilever' (Wikipedia 'Spring (device)')
  - integral spring, molded-in spring or cantilever spring in plastics design guides (DuPont 'General Design Principles', ch. 6)
  - flexure or flexure primitive (compliant-mechanism term for a thin bending wall; Akaki Kuumeri)
  - vehicle types: laminated or carriage spring, semi-elliptic, elliptic, three-quarter and quarter-elliptic, transverse, parabolic and mono-leaf springs (Wikipedia 'Leaf spring')
  - constant-strength or tapered leaf (a leaf shaped so the stress is even along it; DuPont Fig. 6.01; Wikimedia Commons 'lame d'égale résistance') *(unverified parts omitted)*
- **family**: springs & energy storage
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints
- **one_liner**: A strip of springy plastic or metal, fixed at one end or at both ends, that bends under a push and springs back, storing energy; it is the easiest spring to design into a 3D-printed part.
- **complexity**: Single piece when the strip is printed or moulded as part of the object (an integral spring; DuPont ch. 6). A few parts when a metal strip is screwed or clamped in place, or for vehicle springs made of a stack of leaves held by a centre bolt and clips, with eyes or shackles at the ends (Wikipedia 'Leaf spring').
- **how_it_works**: When a strip fixed at one end is pushed at its free end, it bends, and the material's elasticity pushes back with a force roughly proportional to how far it is bent (Hooke's law; Wikipedia 'Spring (device)'). Its stiffness is W/y = 3EI/L cubed, where L is the free length, E the material's stiffness and I = b h cubed / 12 for a strip of width b and thickness h (DuPont p. 36; Wikipedia 'Deflection (engineering)' and 'List of second moments of area'). So thickness matters most: doubling the thickness makes it 8 times stiffer, and doubling the length makes it 8 times softer. The bending stress is highest at the fixed end (the root), which is why good springs are tapered so the stress is spread evenly along the strip, and why the root needs a rounded corner (DuPont p. 36; Covestro snap-fit guide p. 8).

### Finder attributes

- **job**: 
  - store energy: it pushes back and can return a button, lever, latch or pawl to its rest position
  - let it move (turn, slide or bend): its tip moves by bending, with no pins
  - click into set positions / stop it moving back (one-way): it is the spring inside many printed detents, ratchet pawls and snap latches (DuPont p. 47: moulded-in springs acting on a ratchet wheel)
- **motion**: flex: the tip moves along a shallow arc; a working deflection of about a quarter of the free length appears in DuPont's worked example (y/L = 0.25 for a 50.8 mm Delrin spring), and Akaki Kuumeri's printed flexure primitive moves 5 mm at the end of a 40 mm wall
- **degrees_of_freedom**: 1 intended: bending in its thin direction. *(unverified parts omitted)*
- **special_behaviour**: 
  - self-aligning or self-centring: it always returns to its rest shape when released (unless overloaded or crept)
  - none of the other listed behaviours on its own; it supplies the spring force for parts that do index, lock or ratchet (detent arms, pawls, snap-fit hooks)
- **holding_principle**: spring force (a spring or springy part presses it in place)
- **input_output**: not applicable (it is a spring, not a transmission). Force is roughly proportional to deflection for small bends; beam springs can become non-linear at larger bends (Wikipedia 'Spring (device)'). Back-drivable: yes.
- **power**: passive (no power needed)
- **removability**: permanent when printed or moulded as part of the object; removable when a metal or separately printed strip is screwed, clamped or slotted in
- **reuse_cycles**: many times for clamped strips; the real limit is flexing life. Plastic springs work for intermittent action but lose force if kept loaded (DuPont p. *(unverified parts omitted)*
- **seal**: none
- **load**: light (DuPont's worked example, a moulded Delrin arm of 0.88 N/mm bent 12.7 mm, pushes back with about 11 N) to heavy (steel vehicle leaf springs that carry and locate a truck axle; Wikipedia 'Leaf spring'). Strong when bent in its wide direction or pulled along its length; weak against twisting (Akaki Kuumeri); a printed arm built up vertically in Z is weak because layers can split (Hubs).
- **adjustable**: Printed-in springs: no, stiffness is fixed by length, width, thickness and material. Clamped strips: yes, sliding the clamp to change the free length changes the stiffness strongly (stiffness is inversely proportional to length cubed; DuPont p. BYU's 'FlexLinks: Cantilever Beam Adjust' is an adjustable-length version (Printables). *(unverified parts omitted)*
- **play_and_precision**: none: one piece, no sliding, so no play. It returns to the same rest position unless it has been overloaded (yielded) or, in plastic, held bent long enough to creep; printed clips held open for 24 hours never fully returned to shape (Thrinter creep test), and Akaki Kuumeri warns a flexure left bent for a day won't return to centre. Its tip moves in an arc, not a straight line. Stacked metal leaves rub on each other, giving friction and stiction (Wikipedia 'Leaf spring').
- **access_needed**: not applicable
- **materials**: Metal: spring steel is the usual material (about 1% carbon, alloys such as 55Si7 and 50Cr4V2 for vehicle springs; Wikipedia 'Leaf spring'); phosphor bronze and titanium where corrosion matters and beryllium copper for springs that carry current (Wikipedia 'Spring (device)'); composite (glass-fibre) leaves in some cars (Wikipedia 'Leaf spring'). Wood (yew bows; Wikipedia 'Spring (device)'). Moulded plastics: acetal (Delrin) and Hytrel are the best unreinforced spring plastics (DuPont p. 36). 3D printing: tough, ductile PETG, ABS and nylon are preferred to brittle PLA and standard resins for flexing arms (Hubs); PLA is the stiffest common filament (bending modulus 3300 MPa, versus ASA 2300 and PETG 1900 MPa; CNC Kitchen) but brittle and prone to creep; PLA+ worked best in Akaki Kuumeri's informal flexure tests. Polypropylene sheet gives the best cut compliant parts (BYU FlexLinks).
- **maker_difficulty**: easy: it is just a thin arm drawn into the part and prints in place with no assembly; the hard part is making it last, because plastic creeps, yields and fatigues, so expect a few test prints

### Making it

- **processes**: 
  - 3D print (FDM): the most common maker method; the spring prints as part of the object
  - 3D print (resin): possible, but standard resins are brittle for repeated flexing; choose a tough or durable resin (Hubs)
  - 3D print (SLS/MJF nylon): good fatigue performance for flexing arms (Hubs)
  - laser cut: flat springs cut from plastic sheet; BYU FlexLinks can also be milled, water-jet cut or CNC-routed, best from polypropylene sheet
  - CNC: milled plastic or metal springs
  - sheet metal: spring-steel, stainless or phosphor-bronze strip cut and bent, or hardened after forming (Wikipedia 'Spring (device)')
  - off-the-shelf part: flat springs, spring-steel strip and vehicle leaf springs
- **print_in_place**: yes: an integral spring prints already attached to the part and working, with no assembly (e.g. the printed springs in the_ress's filament cutter, which need only an added blade; Printables via Hackaday)
- **making_tips_3d_printing**: 1) Orientation: make the bending strain run along the printed lines, never across layer joins. Either print the arm lying flat so it bends up and down, with the print lines running lengthwise along it, or print it as a thin standing wall that bends sideways about a vertical axis (Akaki Kuumeri: 'always printed vertically', and 'if you must print flexures laying flat, make sure the print lines are longitudinal'). Avoid arms built upward in Z that bend about a horizontal axis: layer bonding is weaker and they snap (Hubs; CNC Kitchen measured layer adhesion at about 55% of flat strength for PLA and 46% for PETG). 2) Size: start from Akaki Kuumeri's flexure primitive, a wall 0.75 mm thick (exactly two lines from a 0.4 mm nozzle), at least 10 mm wide so it doesn't twist, at least 40 mm long, bent about 5 mm at the tip; thicker than three lines behaves less predictably. Hubs suggests a minimum width of 5 mm for snap-fit arms. 3) Round the root: a fillet of at least 0.5 x the arm's root thickness (Hubs); stress concentration keeps falling up to a radius of about 0.6 x thickness (Covestro p. 8). 4) Taper it: thinning the arm towards the tip spreads the strain; halving the thickness at the tip lets it bend more than 60% further than a straight arm (Covestro p. 12), and a constant-strength shape gives the same stiffness at two-thirds of the stress (DuPont p. 36). 5) Design it to rest unloaded and be bent only briefly: plastic springs under constant load creep and relax (DuPont p. 36-37); Akaki Kuumeri: 'Never leave under tension'. 6) Add end stops so it can't be bent past its safe range (Akaki Kuumeri). 7) Materials: PETG, nylon or ABS for durability (Hubs); PLA makes 'a very poor spring material' for sustained springing (Hackaday on neotoy's compliant toggle) but is stiff and fine for light, occasional use. 8) Keep the print seam off the spring and use fillets plus seam placement (Akaki Kuumeri). 9) Print a thickness test first, e.g. XNDR's leaf-spring thickness test at 0.15 and 0.20 mm layers (Printables). 10) Keep printed springs cool: PLA gives way at about 60 °C and PETG at about 80 °C (CNC Kitchen).
- **off_the_shelf_parts**: If a printed spring must hold a constant load, buy a metal spring instead (Razzer09's recommendation after testing printed springs; DuPont p. 36). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Stiffness of a strip fixed at one end and pushed at the tip: W/y = 3EI/L cubed with I = b h cubed / 12, so stiffness grows with width, with thickness cubed and falls with length cubed (DuPont 'General Design Principles', p. 36; Wikipedia 'Deflection (engineering)'; Wikipedia 'List of second moments of area').
  - Worked example: a Delrin acetal spring 50.8 mm long needing 0.88 N/mm at 12.7 mm deflection works with b = 6.35 mm and h = 3.1 mm (about 46 MPa stress), or b = 12.7 mm and h = 2.4 mm (about 42 MPa); for fast repeated use (e.g. 60 times a minute) lower the stress by bending it less, making it longer relative to its thickness, or softer (DuPont p. 37).
  - A constant-strength (tapered) spring gives the same spring rate at two-thirds of the stress and a quarter less weight than a straight strip (DuPont p. 36, Fig. 6.01, spring C).
  - Tapering a cantilever arm's thickness to half at the tip increases the allowable deflection by more than 60% compared with a straight arm (Covestro 'Snap-Fit Joints for Plastics', p. 12).
  - Root radius: at least 0.5 x root thickness for printed arms (Hubs); stress concentration drops little beyond a radius of 0.6 x thickness, and never go below 0.015 in (0.38 mm) (Covestro p. 8).
  - Printed flexure starting point: 0.75 mm thick (two 0.4 mm lines), at least 10 mm wide, at least 40 mm long, 5 mm tip movement; use end stops; never leave it under tension (Akaki Kuumeri, '3D Printed Flexures' slides).
  - Use plastic springs only for intermittent action; any spring under constant load or deflection, or required to store energy, should be metal (DuPont p. 36-37). Moulded-in plastic ratchet springs work if not held loaded for long periods (DuPont p. 47).
  - Printed springs take a set: test coil springs held 30% stretched for 8 hours at 25-30 °C all deformed permanently, PLA worst and PETG best at about 5-10% (Razzer09, Printables 'Spring Material Test').

### When to use it

- **everyday_examples**: 
  - The limbs of a bow: each limb is a cantilever spring (Wikipedia 'Spring (device)')
  - The leaf springs under trucks, vans and railway carriages (Wikipedia 'Leaf spring')
  - Springy metal battery contacts and electrical switch contacts (Wikipedia 'Spring (device)')
  - Tweezers, and the flexing plastic arm of a clip that clicks shut (Wikipedia 'Spring (device)'; Hubs snap-fit guide)
- **when_to_use**: Use a leaf spring whenever a printed or moulded part needs a light return force: pushing a button or trigger back out, holding a latch or pawl against a ratchet, making a detent click, pressing a part against a stop, or as a small catapult or toy spring. It prints in place with no extra parts, costs nothing, has no play and can be tuned just by changing its length or thickness. Metal leaf springs suit heavier jobs where a flat shape fits better than a coil, such as vehicle suspensions that must also locate the axle (Wikipedia 'Leaf spring').
- **when_not_to_use**: Avoid a printed leaf spring when it must hold a force all the time (a door closer, a clamp, a balance spring or a battery contact that stays pressed): plastic creeps and relaxes, so use a steel spring instead (DuPont p. 36; Razzer09). Avoid it for long travel in little space (use a coil spring or a spiral power spring), for straight-line motion (use an ortho-planar spring or a parallel leaf-spring flexure), where it will get hot (PLA softens at about 60 °C; CNC Kitchen), and for very high cycle counts in PLA (use nylon, acetal or metal).
- **environment_limits**: Printed plastic: PLA gives way at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen); all printed plastics creep and take a set under constant load, PLA most (Thrinter creep test; Razzer09 test). DuPont notes that temperature and chemicals change a plastic spring's properties and that repeated stress must stay below the material's fatigue limit (p. 36). Metal: spring steel fatigues if over-stressed and rusts unless protected; stacked leaves also suffer from friction between leaves (Wikipedia 'Leaf spring'). *(unverified parts omitted)*
- **safety_notes**: PLA is brittle (Hubs). *(unverified parts omitted)*
- **common_failures**: Takes a permanent set or loses force after being held bent (creep and stress relaxation; DuPont p. 36; Thrinter; Akaki Kuumeri): design it to rest unloaded. Cracks or snaps at the root (sharp corner, too thick, bent too far): add a fillet, taper it and add end stops (Hubs; Covestro; Akaki Kuumeri). Splits along layer lines when the arm was printed upright in Z (Hubs). Twists or bends sideways because it is too narrow (Akaki Kuumeri). Weak or stiff patches from the print seam or stray infill on a thin arm (Akaki Kuumeri). Fatigue after many cycles, especially in PLA (Hubs). Softens and droops in a hot car or next to a heat source (CNC Kitchen).
- **related**: 
  - Coil spring (helical compression, extension or torsion spring): the baseline; longer travel in less space and better for constant loads, but must be bought or wound
  - Ortho-planar spring: several flat legs arranged around a platform so it moves straight in and out without tilting or twisting
  - Flexure hinge: a very short, thin bending section used as a pivot rather than as a spring
  - Parallel leaf-spring flexure (linear flexure stage): two or more leaf springs as a parallelogram, giving straight-line motion; also used as printed springs (the_ress's filament cutter)
  - Cantilever snap fit: the same bending arm with a hook on the end, used to clip parts together
  - Compliant detent (flexure click arm) and compliant ratchet: leaf springs used to make clicks and one-way motion
  - Living hinge: a thin web that folds through a large angle; it is a hinge, not a spring
  - Spiral power spring and constant-force spring: flat strips coiled up to store more energy or give a steady pull
  - Battery holder and battery contacts: springy metal leaf (and coil) contacts that press on a cell's ends; buy metal ones, because a printed plastic spring that stays pressed relaxes
  - Pogo pin: a spring-loaded contact pin, where a tiny coil spring in a tube pushes a contact out; flat leaf-spring contact fingers do the same job where there is no room for a pin

### Pictures, videos and models

- **links**: 
  - [Leaf spring shapes (Wikimedia Commons, from 'The Book of the Motor Car', 1912)](https://commons.wikimedia.org/wiki/File:Leaf_spring_shapes.jpg): Drawings of the classic car leaf-spring shapes: elliptic, semi-elliptic, three-quarter and quarter-elliptic *(licence: Public domain)*
  - [Lame d'égale résistance à épaisseur constante (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Lame_d%27%C3%A9gale_r%C3%A9sistance_%C3%A0_%C3%A9paisseur_constante.png): A triangular leaf of constant thickness shaped for equal bending strength along its length (the tapered, constant-strength spring idea) *(licence: GFDL, or CC BY-SA 3.0 / 2.5)*
  - [Leaf spring (Wikipedia)](https://en.wikipedia.org/wiki/Leaf_spring): Diagrams and photos of multi-leaf, parabolic and transverse leaf springs and how they mount with eyes and shackles *(licence: CC BY-SA 4.0 text; images per file)*
  - [Learn 15 Print-in-Place Mechanisms in 15 Minutes (YouTube, Slant 3D)](https://www.youtube.com/watch?v=AAKsl8zW-Ds): Kinds of springs and flexures that can be printed reliably and their common pitfalls, followed by print-in-place hinges and how they fail (as summarised by Hackaday, 11 May 2025) *(licence: link only (standard YouTube licence))*
  - [3D printing reliable springs (YouTube, neotoy)](https://www.youtube.com/watch?v=hHZo82-PtT8): A fully printed compliant mechanism (a cord-lock toggle with a printed spiral spring) in PETG, and why PLA is a poor spring material *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Material thickness leaf spring test 0.15 & 0.20mm (XNDR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/364270-material-thickness-leaf-spring-test-015-020mm): Test print to find which leaf-spring thickness suits your filament and printer before designing thin springs into a part; print at 0.15 and 0.20 mm layer heights *(licence: CC BY-NC-SA)*
  - [Flexlinks: Cantilever Beam (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/569139-flexlinks-cantilever-beam): LEGO-compatible cantilever-beam building block for prototyping compliant mechanisms; can be printed, milled, water-jet or CNC-router cut, best from 1/4 in polypropylene sheet (an adjustable-length 'Cantilever Beam Adjust' version also exists) *(licence: CC BY-NC)*
  - [Filament cutter with printed spring (the_ress, Printables) (URL from Printables API and linked from Hackaday, page not opened)](https://www.printables.com/model/137522-filament-cutter-with-printed-spring): Almost fully printed filament cutter whose two printed springs are compliant parallel-arm leaf springs; PETG, 0.2 mm layers, 15% infill, no supports; needs only an 18 mm blade *(licence: CC0)*
  - [Flat modular spring (Adam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/685021-flat-modular-spring): Flat printed spring that compresses up to 10 mm without damage; several can be stacked with M3 screws for more force; PLA, 0.2 mm layers, 2 perimeters, no supports *(licence: CC0)*
- **diagram_idea**: A side view of a strip clamped at its left end with a finger pushing its right tip down, showing the curved bent shape, a push-back arrow, the root highlighted as the highest-stress point with a rounded fillet, and small labels 'twice as thick = 8x stiffer' and 'twice as long = 8x softer'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Leaf_spring
  - https://en.wikipedia.org/wiki/Spring_(device)
  - https://en.wikipedia.org/wiki/Deflection_(engineering)
  - https://en.wikipedia.org/wiki/List_of_second_moments_of_area
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://s3files.core77.com/images/c77_webinar_series/Akaki-Kuumeri-3D-printed-flexures.pdf
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/534644-spring-material-test
  - https://compliantmechanisms.byu.edu/maker-resources
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://hackaday.com/2022/09/23/filament-cutter-uses-unusual-but-effective-3d-printed-spring-design/
  - https://hackaday.com/2025/05/11/learn-15-print-in-place-mechanisms-in-15-minutes/
  - https://commons.wikimedia.org/wiki/File:Leaf_spring_shapes.jpg
  - https://commons.wikimedia.org/wiki/File:Lame_d%27%C3%A9gale_r%C3%A9sistance_%C3%A0_%C3%A9paisseur_constante.png
  - https://www.youtube.com/watch?v=AAKsl8zW-Ds
  - https://www.youtube.com/watch?v=hHZo82-PtT8

### Other info

- **Fields with unverified parts:** adjustable, aliases, degrees_of_freedom, environment_limits, off_the_shelf_parts, reuse_cycles, safety_notes, tools_needed

## 236 Wave and disc springs (compact axial springs)

*springs & energy storage.* Wavy flat rings or dished washers that give a strong spring force in a very short height, used to preload bearings and take up play

### What it is

- **plain_name**: Springy washers (a flat ring bent into gentle waves, or a washer pressed into a shallow cone) that push back hard when squashed while taking up almost no height; used to press bearings, clutch plates and bolted joints together and take out rattle
- **term**: Wave springs and disc springs (Belleville washers): compact axial springs
- **aliases**: 
  - disc spring, Belleville spring, Belleville washer, coned-disc spring, conical spring washer, cupped spring washer (Wikipedia)
  - Tellerfeder (German); DIN EN 16983 (formerly DIN 2093) disc springs, Series A, B and C
  - conical spring washer for bolted joints, DIN 6796 (German: Spannscheibe)
  - wave washer (single-turn wave washer); curved disc spring or curved spring washer (bent one way only, four contact points)
  - wave spring, coiled wave spring, flat-wire wave spring, edge-wound wave spring, multi-turn wave spring, nested wave spring, single-turn gap or overlap wave spring, linear wave spring
  - bearing preload spring, preload washer, slotted disc spring
  - drag spring washer (fishing reels)
  - Crest-to-Crest and Spirawave (brands, Smalley); scrowave spring (trade term listed by Wikipedia)
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up, clamping, magnetic & friction connections
- **one_liner**: Washer-shaped springs, either wavy flat rings (wave springs) or shallow cones (disc or Belleville springs), that give a strong, steady push along a shaft or bolt in a very short height, used to preload bearings, keep bolted joints tight and take up play.
- **complexity**: Single piece (one wave washer or one disc spring), or a small stack of identical pieces arranged by the user; a multi-turn wave spring is one continuous coil of wavy flat wire. It needs something to guide it (a shaft or rod through the middle, or a bore around it) and something to hold it at its working height (a shoulder, nut, circlip or the parts it presses on).
- **how_it_works**: A disc spring is a washer shaped like a very shallow cone: pressing it towards flat bends the whole ring, which takes a large force over a small movement, so it stores a lot of energy in very little height. How its force rises depends on the cone height compared with the thickness: shallow cones behave almost like an ordinary spring, taller ones level off so the force stays almost constant over part of the travel (handy for taking up wear), and very tall ones can snap through. A wave spring is a flat ring, or a coil of flat wire, formed with waves; squashing it flattens the waves, which bend like small beams between the high and low points, and a multi-turn wave spring does the job of a stack of wave washers in one piece. Stacking disc springs the same way up (in parallel) multiplies the force; stacking them alternately (in series) multiplies the travel.

### Finder attributes

- **job**: store energy: a stiff, compact push along an axis, tighten and hold tension: keeps a bearing, bolted joint, clutch or drag stack pressed together and takes up play, wear, settling and heat growth
- **motion**: flex: squashes along its axis (compression only); travel is small (a single disc should move no more than 75% of its cone height), and longer travel comes from stacking discs in series or using a multi-turn wave spring
- **degrees_of_freedom**: 1: it compresses and springs back along the shaft or bolt axis; the shaft or bore keeps it centred, and it is not meant to take sideways loads
- **special_behaviour**: 
  - tensioning (takes up slack and holds): keeps a nearly steady push on a bearing or bolted joint while parts wear, settle or grow with heat; spring preload 'remains practically constant' despite thermal elongation (SKF material in Design World), and busbar Belleville washers accommodate thermal cycling (EC&M)
  - over-centre (only in tall, thin disc springs): with a cone height more than about 1.5 to 2 times the thickness the disc can push through or invert when taken towards flat, so it must be supported (SPIROL); this is normally a failure to design out, not a feature
  - none of the other listed behaviours; discs stacked the same way up also rub on each other, which damps vibration (hysteresis) (SPIROL; Wikipedia)
- **holding_principle**: spring force (it pushes on the parts it sits between; it does not hold anything by itself)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: it slips over a shaft or drops into a bore and comes out when the assembly is taken apart; it is usually trapped by a circlip, nut, shoulder or the parts it presses on
- **reuse_cycles**: many times, if it has not been flattened too far, cracked or taken a set: steel disc springs sized with enough preload and limited travel are rated for millions of load cycles (SPIROL fatigue charts run to 2 million cycles), but a Belleville washer on an electrical joint gives less clamping force if it is backed off and flattened a second time (EC&M), and fishing-reel drag washers can eventually stay flat and need replacing (Mike's Reel Repair)
- **tools_needed**: none to fit a loose wave or disc spring; circlip pliers or a spanner for whatever retains it; a torque wrench for Belleville washers on bolted joints (tighten until the washer just goes flat, as specified by the maker, EC&M); a vice, press or long bolt to compress a stack safely during assembly
- **seal**: none
- **load**: Disc springs: heavy for their size, supporting very large loads in a small space (Wikipedia; SPIROL 'high load capacity with small deflection'). Wave springs: light to medium; a wave washer gives less force than a Belleville washer of the same size (Wikipedia 'Washer'), while multi-turn, nested and round-wire wave springs carry more. Axial compression only: they cannot pull or twist, and sideways loads push them off-centre.
- **adjustable**: Yes, by the way they are fitted: add or remove discs, change the parallel/series arrangement (e.g. eight identical discs stacked 2-3-1-2 give 3/7 of one disc's rate, 4-4 gives twice it; Wikipedia), add shims, or tighten a nut or knob to squash the spring further (e.g. a fishing-reel drag). A given spring's force at a given height is fixed.
- **play_and_precision**: Removes play rather than locating: a spring-preloaded bearing has its axial and radial play taken out, and the wave spring helps keep the shaft centred (Smalley). It tolerates end float, tolerance stack-up and heat growth. Force is predictable only up to about 75% of a disc's cone height (SPIROL); wave springs are specified as a load at a working height (Smalley). Both types change diameter as they are squashed, so they need a guiding shaft or bore with clearance, and misaligned stacks load unevenly (SPIROL).
- **access_needed**: end of a tube or shaft: slid over the end of a shaft or bolt, or dropped into the open end of a bore
- **materials**: Disc springs: spring steels C67S (carbon) and 51CrV4 (alloy) with a zinc-phosphate-and-oil finish, 301 stainless for corrosion resistance, precipitation-hardening stainless for corrosion plus fatigue (SPIROL); Lee Spring's standard Bellevilles are 300-series stainless. Wave springs: carbon steel (standard), stainless steel, beryllium copper, Inconel and Elgiloy (Wikipedia 'Wave spring'). Plastic (e.g. PETG) printed wave springs for light, short-term use. They press on any material, but on soft materials (aluminium, plastic, wood) put a hardened or flat washer under them so the edge does not dig in (SPIROL; EC&M).
- **maker_difficulty**: easy to fit: standard steel wave washers, wave springs and DIN disc springs are cheap and easy to buy; hard to make yourself in metal (needs spring steel and heat treatment); printed plastic wave springs are easy to print but weak and lose force over time

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice (DIN disc springs, conical spring washers, wave washers, single- and multi-turn wave springs, bearing preload springs)
  - 3D print (FDM): plastic wave springs from parametric models or special g-code, for light, low-cycle jobs
  - CNC: machining the bore, shaft or pocket that guides the spring and sets its working height
- **print_in_place**: yes, but only for plastic wave springs: a printed wave spring comes off the printer as one working piece with no supports (e.g. the OpenSCAD wave spring generator, printed in PETG); steel wave and disc springs are bought, and plastic versions creep
- **making_tips_3d_printing**: For anything that must keep its force for weeks or months, design the printed parts around a bought steel wave washer or disc spring: plastics creep and relax under constant load (Thrinter's creep test), and PLA in particular 'makes for a very poor spring material' (Hackaday, 2026). Design a proper spring pocket: set the gap so the spring sits at its intended working height, never flat; for a disc spring stay at or below 75% of its cone height (SPIROL). Guide the spring on a printed shaft or in a printed bore, and leave radial clearance because both types change diameter as they compress (SPIROL; Smalley 'wave springs expand during compression'). To preload a pair of ball bearings in a printed housing, put the wave spring against the outer ring of one bearing and give that bearing's outer ring a sliding fit so it can move along its seat (SKF material in Design World). Where a steel spring presses on plastic, add a flat or hardened washer so it does not dig in (SPIROL). If you do print a wave spring: the OpenSCAD 'Parametric Wave Spring' prints in PETG without supports, and its author warns not to add solid flat rings on the top and bottom, because the spring expands outwards as it compresses and solid rings stop it working; leave room around it for that growth. A 'midair' g-code method prints rectangular wave springs by bridging slowly so the plastic cools in the air (Printables 'Midair Rectangular Wave Spring'). Keep printed springs away from heat (PLA starts to give at about 60 °C and PETG at about 80 °C, CNC Kitchen). A steel Belleville washer under a screw that clamps a printed part may keep some clamping force as the plastic creeps; *(unverified parts omitted)*
- **off_the_shelf_parts**: Disc springs to DIN EN 16983 (formerly DIN 2093) in Series A, B and C, Groups 1-3; conical spring washers to DIN 6796 for bolted joints; stainless Belleville disc washers; slotted disc springs; bearing preload springs (e.g. disc-type 'K' series, Schnorr; single-turn wave 'SSB' series, Smalley; brands); wave washers; curved disc springs (curved washers); single-turn gap and overlap wave springs; multi-turn wave springs with plain or shim ends; nested wave springs; round-wire and linear wave springs; pre-assembled disc spring stacks; hardened guide rods or sleeves and hardened thrust washers; retaining rings (circlips) to hold them.
- **rules_of_thumb**: 
  - DIN EN 16983 disc spring series by approximate ratios: Series A outside diameter/thickness about 18 and cone height/thickness about 0.4 (almost straight-line force); Series B about 28 and 0.75; Series C about 40 and 1.3 (SPIROL, 'Standard product range', https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf).
  - Do not deflect a disc spring more than 75% of its cone height: beyond that the force rises sharply and no longer follows the calculation; choose a disc that gives the maximum force needed below 75% deflection (SPIROL, 'Deflection and load characteristics' and 'Design guidelines', https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf).
  - Cone height/thickness up to 1.5: safe to take flat; about 1.5: nearly flat force curve over a long range, good for wear compensation; above 1.5: the force falls off and the disc can push through, so support it fully; above 2: it may invert (SPIROL, https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf).
  - Stacking: in parallel the force multiplies by the number of discs at the same deflection; in series the deflection multiplies at the same force; keep stacks no taller than three times the outside diameter or ten discs, and no more than four discs in parallel; allow 2-3% friction per sliding surface (SPIROL, https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf; Wikipedia, https://en.wikipedia.org/wiki/Belleville_washer; Lee Spring, https://www.leespring.com/learn-about-belleville-washers).
  - For repeated loading, keep a minimum preload of about 15-20% of the disc's maximum rating at all times (otherwise it tends to crack at the top inner edge), prefer larger, lighter discs (Series B or C) over small heavy ones, pick the largest outside diameter that fits, and use an outside/inside diameter ratio of 1.7-2.2 (SPIROL, 'Fatigue life' and 'Design guidelines', https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf).
  - Temperature: standard disc spring steels begin to creep (take a set) above about 100 °C and are no longer viable at 150-200 °C; stainless grades work to about 300 °C (SPIROL, https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf); Lee Spring rates its 300-series stainless Bellevilles to 260 °C (https://www.leespring.com/learn-about-belleville-washers).
  - A wave spring gives the same force and deflection as a coil spring in up to 50% less height; it is for compression only and is not the right choice for long travel with high load, such as a pogo stick (Smalley, https://www.smalley.com/blog/wave-spring-vs-coil-spring).
  - Spring preload for a pair of deep-groove ball bearings: F = k x d, with F in kN and d the bore diameter in mm; k = 0.005-0.01 for small electric motors, k = 0.02 if the preload mainly protects stationary bearings from vibration (SKF material quoted in Design World, https://www.designworldonline.com/what-are-the-best-methods-for-preload-in-a-bearing-system/). Worked example (own calculation): an 8 mm bore bearing gives 0.04-0.08 kN, i.e. about 40-80 N.
  - Spring preload is not suitable where high stiffness is needed, where the axial load changes direction, or where large unpredictable peak loads occur; use solid preload with shims, nuts or matched bearings instead (SKF material quoted in Design World, https://www.designworldonline.com/what-are-the-best-methods-for-preload-in-a-bearing-system/).
  - Belleville washers on bolts are for maintaining a uniform bolt tension, not for locking; unless serrated they have no significant locking capability (NASA RP-1228 Fastener Design Manual, 1990, PDF p. 13, https://ntrs.nasa.gov/api/citations/19900009424/downloads/19900009424.pdf). DIN 6796 conical spring washers are matched to property class 8.8-10.9 bolts; ordinary DIN 2093 disc springs are much softer and unsuitable for that job (German Wikipedia 'Spannscheibe', https://de.wikipedia.org/wiki/Spannscheibe).
  - On electrical busbar joints, mount the Belleville washer so its cup points toward the connection (away from the bolt head or nut), never let it overhang the connection pad, and tighten until it just goes flat (EC&M, https://www.ecmweb.com/content/article/20890080/how-to-use-belleville-washers-correctly).
  - Guide stacks on a rod through the middle (preferred) or in a sleeve, case-hardened to about 58 HRC and ground; lubricate parallel stacks (e.g. molybdenum disulfide); avoid electroplated finishes on hard discs because of hydrogen embrittlement (SPIROL, https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf).

### When to use it

- **everyday_examples**: 
  - the drag knob on a fishing reel, where a pair of dished 'drag spring washers' lets the drag be set gradually instead of jumping from loose to locked (Mike's Reel Repair)
  - heavy electrical busbar and cable connections, which use Belleville washers under the nuts to stay tight as the joint heats and cools (EC&M)
  - a thin wavy washer behind a ball bearing in a small electric motor, which takes out play, vibration and noise (SKF material in Design World on small electric motors; Smalley on noise)
- **when_to_use**: When you need a strong, steady push in very little height: preloading ball bearings so they do not rattle or hum; taking up end float on a shaft or wheel; keeping a bolted joint tight when parts settle, creep or expand (aluminium, busbars, dissimilar metals); setting the squeeze on friction stacks such as clutches and fishing-reel drags; and adding a little cushioning or damping (parallel disc stacks). Choose disc springs for high force with small travel, and wave springs for lighter, more even force with a little more travel, especially around bearings and shafts where the space is thin and ring-shaped.
- **when_not_to_use**: Not for long travel (use a coil spring) or for pulling and twisting (use extension or torsion springs; wave springs work in compression only, Smalley). Not as a lock washer to stop nuts shaking loose under side-to-side vibration: they keep tension but do not lock (NASA; German Wikipedia 'Spannscheibe'); use a nylon-insert nut, thread-locking adhesive or a wedge-locking washer. Not for bearings that need high stiffness or see reversing axial loads (use solid preload with shims or locknuts, SKF material in Design World). Not in printed plastic where the force must last: buy a steel spring.
- **environment_limits**: Heat: standard disc spring steels start to take a set above about 100 °C and lose their strength at 150-200 °C; stainless grades go to about 260-300 °C (SPIROL; Lee Spring); Inconel wave springs suit high temperatures (Wikipedia 'Wave spring'). Printed plastic springs soften far lower (PLA about 60 °C, PETG about 80 °C, CNC Kitchen) and creep under steady load. Water and chemicals: the standard zinc-phosphate-and-oil finish only protects against humidity and occasional moisture; use stainless, beryllium copper or Elgiloy in wet or marine places (SPIROL; Wikipedia). Avoid electroplated hard springs: hydrogen can make them brittle so they shatter under impact or vibration (EC&M; SPIROL). Springs lose force over time if over-stressed; as long as the permissible stress is not exceeded, disc springs show no impermissible relaxation (Wikipedia, citing the Schnorr handbook).
- **safety_notes**: Stored energy: a compressed disc stack can push very hard, so release it gradually (back off the nut, or use a press or long threaded rod) rather than prising it apart. Tall, thin discs can snap through suddenly. Small wavy washers and the circlips that hold them can spring out when removed; wear eye protection. Hard electroplated washers can break into pieces from hydrogen embrittlement (EC&M). On electrical busbar joints, isolate the supply before work and check each washer is flat and not cracked before switching back on (EC&M).
- **common_failures**: (1) Squashed too far or overloaded: taken past about 75% of its cone height, or flat, the disc takes a permanent set and loses force; fishing-reel drag washers can end up flat and 'mushy' and need replacing (SPIROL; Mike's Reel Repair). (2) Fitted upside down or in the wrong order: a busbar Belleville with its cup the wrong way adds little clamping force, and stack ends should rest on the discs' outer edges (EC&M; SPIROL). (3) Wrong size: a washer overhanging the connection pad gives much less clamping force, and a big flat washer under it just bends (EC&M). (4) Fatigue cracks at the inner edge in repeated loading when no minimum preload is kept; keep 15-20% preload and limit travel (SPIROL). (5) Binding: wave washers pushed too far into their cavity can bind and give unpredictable load (Smalley), and springs rub on the shaft or bore if no room is left for their change in diameter. (6) Long stacks deflect unevenly because of friction; keep stacks short, guided and lubricated (SPIROL). (7) Discs digging into soft seats; add hardened washers (SPIROL). (8) Corrosion or hydrogen embrittlement from the wrong finish. (9) Plastic springs creeping and losing their push.
- **related**: 
  - Coil spring (compression, extension, torsion): the baseline spring; much longer travel, but can need up to about twice the height of a wave spring for the same force and deflection (Smalley)
  - Ortho-planar spring: a flat, one-piece spring cut or printed from sheet whose centre moves out of the plane; the easiest compact axial spring to 3D print or laser cut
  - Printed leaf spring (flat cantilever spring): a springy printed strip; easy to make but plastic creeps
  - Split (helical) spring lock washer: a cheap spring washer often used to 'lock' nuts, though NASA calls it useless for locking; Belleville washers keep bolt tension better
  - Torque limiters and friction clutches: set their slipping force with a spring; fishing-reel drags use a pair of Belleville washers for exactly this (Mike's Reel Repair)
  - Crush ribs and spring-fit features (compliant press fit): printed features that take up play by bending once, rather than by a separate spring
  - Constant-force spring and gas spring: other ways of giving a nearly steady force, over much longer travel
  - Ball detent (spring plunger): a coil-spring-loaded ball that clicks into positions; uses a spring's push for indexing instead of preload

### Pictures, videos and models

- **links**: 
  - [Washerstack.png (Wikimedia Commons, SammusWikiDude)](https://commons.wikimedia.org/wiki/File:Washerstack.png): Belleville spring stacking configurations: single, parallel, series and series-parallel *(licence: CC0)*
  - [Disc spring load-deflection characteristic curve.svg (Wikimedia Commons, Yapparina)](https://commons.wikimedia.org/wiki/File:Disc_spring_load-deflection_characteristic_curve.svg): Force against deflection curves for disc springs with different cone-height to thickness ratios, calculated with the Almen-Laszlo formula *(licence: CC0)*
  - [Single turn wave spring.png (Wikimedia Commons, Slashme)](https://commons.wikimedia.org/wiki/File:Single_turn_wave_spring.png): Rendered 3D model of a single-turn wave spring with a gap; companion files show multi-turn and nested wave springs *(licence: CC BY-SA 4.0)*
  - [Crest-to-Crest Wave Springs (Smalley, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=-VdQ8pqu7Zs): Manufacturer's video of multi-turn wave springs compressing, compared with round-wire coil springs *(licence: link only)*
  - [Belleville Disc Spring Stacking Demo (BelleFlexTech, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=QhODuFC3BFc): Demonstration of stacking Belleville disc springs in series and parallel *(licence: link only)*
- **make_it_yourself**: 
  - [Parametric Wave Spring by PrintyMcPrintFace (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1510812-parametric-wave-spring): OpenSCAD wave spring generator (wire width and height, diameter, wave count, layers, wave height); the included STL printed on a Prusa MK4 in PETG without supports *(licence: CC BY-NC-SA)*
  - [Stacked wave spring by aiber (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/241564-stacked-wave-spring): Parametric SolidWorks model of a stacked (multi-layer) wave spring with configurable diameters, section height, overlap and number of waves *(licence: CC BY-NC)*
  - [Stacked Wave Disc Plastic Springs by Mechanical Stuff (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/352444-stacked-wave-disc-plastic-springs): Printable plastic wave disc springs with several rows of waves for higher loads *(licence: CC BY-NC)*
  - [Wave Spring Fusion 360 Parametric Model by Maker (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1588728-wave-spring-fusion-360-parametric-model): Fusion 360 wave spring model driven by user parameters *(licence: Public Domain)*
  - [Midair Rectangular Wave Spring (g-code hack) by Makefast Workshop (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1069910-midair-rectangular-wave-spring-g-code-hack): Open-source g-code generator that prints rectangular wave springs partly in mid-air (tested in PETG on Prusa MK3/MK3S printers) *(licence: Public Domain)*
- **diagram_idea**: Side-by-side cutaways at the same scale: a coil spring, a multi-turn wave spring and a stack of disc springs all giving the same push, showing how much shorter the wave spring and disc stack are; below, a disc spring pair drawn 'in series' ( )( ) and 'in parallel' (( ) with arrows showing 'more travel' and 'more force', and a wave washer squeezed between a bearing's outer ring and a housing shoulder.
- **sources**: 
  - https://en.wikipedia.org/wiki/Belleville_washer (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Wave_spring (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Washer_(hardware) (read as raw wikitext)
  - https://de.wikipedia.org/wiki/Spannscheibe (read as raw wikitext)
  - https://www.spirol.com/assets/files/dsc-disc-spring-design-guide-us.pdf (SPIROL, 'Disc Springs' design guide, US edition)
  - https://www.smalley.com/blog/wave-spring-vs-coil-spring
  - https://www.smalley.com/blog/how-and-why-you-should-use-wave-spring-bearing-preload
  - https://www.smalley.com/wave-springs/bearing-preload
  - https://www.smalley.com/spring-design
  - https://www.rotorclip.com/post/key-design-differences-between-wave-springs-and-coil-springs/
  - https://www.designworldonline.com/what-are-the-best-methods-for-preload-in-a-bearing-system/ (Design World, 'What are the best methods for preload in a bearing system?', M. Santora, 12 Dec 2019, reproducing SKF material)
  - https://www.schnorr-group.com/en/products/disc-springs/bearing-preload-springs/
  - https://www.schnorr-group.com/en/expertise-technologies/disc-springs
  - https://www.leespring.com/learn-about-belleville-washers
  - https://ntrs.nasa.gov/api/citations/19900009424/downloads/19900009424.pdf (Barrett, R. T., NASA Reference Publication 1228, 'Fastener Design Manual', 1990)
  - https://www.ecmweb.com/content/article/20890080/how-to-use-belleville-washers-correctly
  - https://www.mikesreelrepair.com/10ew3-drag-spring-washer-8l-bnt1613-tgt0358/
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Washerstack.png
  - https://commons.wikimedia.org/wiki/File:Disc_spring_load-deflection_characteristic_curve.svg
  - https://commons.wikimedia.org/wiki/File:Single_turn_wave_spring.png
  - https://commons.wikimedia.org/wiki/File:Nested_Wave_Spring.png
  - https://commons.wikimedia.org/wiki/File:Multi-turn_wave_spring_with_shim_ends.png
  - https://commons.wikimedia.org/wiki/File:Belleville_washer_stack_illustration.png
  - https://www.youtube.com/watch?v=-VdQ8pqu7Zs (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=QhODuFC3BFc (verified via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables models 1510812, 241564, 352444, 1588728 and 1069910 read via the public API)

### Other info

- **Fields with unverified parts:** making_tips_3d_printing

## 237 Gas spring (incl. lockable gas spring)

*springs & energy storage.* A sealed cylinder of pressurised gas whose rod pushes out with a steady force, holding up lids and hatches; lockable types hold at any length

### What it is

- **plain_name**: A sealed metal tube with a shiny rod sticking out that always tries to push itself longer, so it holds a lid or hatch up for you and lowers it gently; a 'lockable' one can be stopped and held at any length by pressing a small button or lever
- **term**: Gas spring (gas strut); lockable gas spring (locking gas spring)
- **aliases**: 
  - gas strut, gas damper (Wikipedia 'Gas spring')
  - industrial gas spring, push-type gas spring (ACE catalogue)
  - traction gas spring, pull-type gas spring, pulling gas spring (versions that pull instead of push) (ACE catalogue; McMaster-Carr)
  - adjustable-force gas spring (has a bleed valve so the force can be lowered once) (McMaster-Carr; ACE)
  - locking gas spring, lockable gas spring, remote-release gas spring, adjustment element (Stabilus; Suspa; McMaster-Carr; Bansbach)
  - elastic-locking (spring-locking) and rigid-locking gas springs (Suspa; Stabilus; Bansbach)
  - office chair gas lift, gas cylinder, chair gas spring (a lockable gas spring used as a seat-height column) (Wikimedia Commons 'Chair gaslift.jpg'; Stabilus)
  - BLOC-O-LIFT, KOMBI-LIFT, STAB-O-MAT (brands, Stabilus); easylift (brand, Bansbach) - lockable gas spring product ranges
  - nitrogen gas spring (die springs used in press tools; heavy-duty industrial relative) (Wikipedia 'Gas spring') *(unverified parts omitted)*
- **family**: springs & energy storage
- **other_families**: brakes, dampers & speed control, self-locking & anti-back-drive, sliding, telescoping & linear motion, hydraulics, pneumatics & vacuum
- **one_liner**: A sealed cylinder of pressurised nitrogen and a little oil whose rod pushes out with a fairly steady force and a controlled speed, used to lift and hold lids, hatches and seats; a lockable version has a valve that freezes the rod at any length until you press a release pin.
- **complexity**: A small sealed assembly that acts as one unit (it cannot be opened): steel pressure tube, piston rod, piston with a tiny hole (orifice) or valve, rod seal and guide bushing, nitrogen gas, a little oil, and threaded ends that take swap-on end fittings (ball sockets, eyes, clevises) plus ball studs or brackets on the frame and lid (Wikipedia 'Gas spring'; ACE catalogue). A lockable gas spring adds a valve in the piston, a release pin sticking out of the rod end, and a release head, lever or Bowden cable to press it (Suspa; Stabilus).
- **how_it_works**: The tube is filled with nitrogen at high pressure; the gas presses on both sides of the piston, but the rod takes up area on one side, so there is more force pushing the rod out than in, and the push equals the gas pressure times the rod's cross-section area (F = p x A) (ACE catalogue; explainthatstuff). Pushing the rod in makes the rod take up more room inside, so the gas is squeezed a bit more and the force rises by roughly 20-60 percent over the stroke (called progression) (ACE catalogue). Gas has to squeeze through a small hole in the piston, and oil at the rod end cushions the last few millimetres, so the rod moves at a controlled speed and stops gently (end-position damping) when mounted rod-down (ACE catalogue). In a lockable gas spring, a valve in the piston separates the two chambers: press the release pin and the valve opens so the rod can move (with the gas helping to carry the load); let go and the valve shuts, trapping gas (elastic locking, slightly springy) or oil (rigid locking) so the rod holds its position (Stabilus BLOC-O-LIFT; Suspa).

### Finder attributes

- **job**: 
  - store energy: the compressed gas stores energy that lifts or counterbalances a lid, hatch, seat or arm
  - slow it, stop it or keep its speed steady: the piston orifice and oil give a controlled opening speed and a soft stop at the end (ACE catalogue)
  - lock, and release by hand: a lockable gas spring holds at any length until someone presses the release pin, lever or Bowden cable (Suspa; Stabilus)
  - let it move (turn, slide or bend): the rod slides in and out, and the end fittings let it swing as the lid pivots
- **motion**: slide: the rod telescopes in and out of the tube (stroke typically about 10 mm up to several hundred mm; Bansbach lists 10-800 mm for lockable types), while pivoting end fittings let the whole strut swing as the lid turns on its hinge.
- **degrees_of_freedom**: 1 that matters: the rod sliding in and out along the tube's axis (it can also spin about its own axis, which does nothing useful). Mounted between two ball joints or pivots it acts as a push-rod that can also swing, so it must not be asked to resist sideways or bending loads (ACE catalogue). A locked lockable gas spring has 0 (rigid type) or a little springy give (elastic type).
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): a lockable gas spring holds its position until the release pin is pressed, directly, by a lever or via a Bowden cable; the Stabilus standard slide valve needs 2.5 mm of pin travel and a poppet valve only 1 mm (Stabilus BLOC-O-LIFT)
  - self-locking (holds under load, won't back-drive): a locked rigid-locking gas spring traps oil so it will not move when pushed or pulled; an elastic-locking one traps gas so it holds but gives slightly and rebounds, which is wanted in chair backrests (Suspa; Stabilus). Some 'locking gas springs' instead latch automatically when fully extended so a lid can't close until released (McMaster-Carr)
  - over-centre (snaps past a point and stays): not built in, but if the moving mount is placed so the strut's line passes the hinge when the lid is shut, the strut pulls the lid closed instead of popping it open (Camloc 'Gas strut mounting positions')
  - none of the other listed behaviours; its own trick is a nearly steady push over a long stroke, with built-in speed control and a soft end stop (ACE catalogue)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the gas pushes the rod out and holds the lid or hatch up
  - suction or air pressure: the force comes from compressed nitrogen; in a lockable type a closed valve traps gas or oil so the rod cannot move (Suspa; Stabilus)
- **input_output**: Not a transmission, so mostly not applicable. For reference: it turns stored gas pressure into a straight push along the rod (F = p x A), which the mounting geometry turns into a turning force (moment) about the lid hinge. Push force rises from fully extended to fully compressed by the 'progression', about 20 to 95 percent depending on the model and stroke (ACE catalogue). Friction in the seals means the force when being pushed in is higher than when extending (ACE catalogue). Back-drivable: yes for a standard gas spring (you can push it in by hand); no for a locked rigid-locking type; slightly (springy) for a locked elastic type (Suspa).
- **power**: passive (no power needed). A lockable gas spring is released by hand through a pin, lever or Bowden cable, so losing electrical power does not matter; hydraulic remote-release systems also exist (Bansbach).
- **removability**: removable: the end fittings clip or screw onto ball studs or bolt through eyes, so the strut can be swapped (ACE says fit it fully extended and support the lid while doing so). The strut itself is a sealed, permanent unit that must never be opened (ACE catalogue).
- **reuse_cycles**: many times: fitting and removing the strut can be repeated freely; the strut's own life is set by its seals. ACE gas springs are generally tested to 70,000 strokes (about 2-10 km of rod travel), and some applications reach 500,000 strokes or more (ACE catalogue).
- **tools_needed**: A lockable gas spring also needs its release head, lever or Bowden cable (Stabilus; Bansbach). A strap can help compress stiff struts during fitting (Printables 'Ratchet Strap Gas Strut Compression Aid'). *(unverified parts omitted)*
- **seal**: none as a connection (it doesn't seal anything else). Inside, it is an airtight pressure vessel sealed by the rod seal and guide; up to 300 bar internal pressure (ACE catalogue).
- **load**: Light to heavy: stock industrial gas springs range from about 10 N to 13,000 N of push, in body diameters from 8 mm to 70 mm (ACE catalogue); lockable types about 50-2,600 N (Bansbach) or 200-1,000 N (Suspa). Strong only along its own axis in push (or pull, for traction types); it must not take tilting, side or bending loads, which bend the rod and wear the seals (ACE catalogue). Long, thin, high-force struts are the least stable; ACE advises avoiding 'small diameter + long stroke + high force'.
- **adjustable**: Partly. Force is fixed for a plain gas spring, but valve types let you bleed gas out to lower the force permanently (McMaster-Carr 'Adjustable-Force Gas Springs'; ACE 'The valve allows the force to be adjusted'); if too much is released it must be replaced (Wikipedia). The lifting feel can be tuned by moving the mounting points (Camloc; Engineer Live). A lockable gas spring can be set and locked at any length along its stroke (Bansbach).
- **play_and_precision**: It does not locate parts precisely: installation length tolerance is about +/-2 mm and force tolerance +/-7 percent (ACE catalogue). Pivoting end fittings tolerate the angle changes of a swinging lid, but it must not be loaded sideways (ACE). A locked elastic lockable spring gives slightly and rebounds; a rigid one does not (Stabilus; Suspa). *(unverified parts omitted)*
- **access_needed**: not applicable: it is fitted between two mounting points (one on the frame, one on the lid or moving part) and you need to reach both ends; nothing has to be reached from behind unless the brackets are through-bolted.
- **materials**: Steel pressure tube (usually painted or black coated), hardened chrome or stainless steel piston rod (ACE uses 303 stainless rods), nitrogen gas and oil inside; stainless steel versions (V4A/316) for boats and food machinery (ACE; Bansbach). End fittings are steel or plastic; brackets can be steel, aluminium or strong 3D-printed plastic. It suits wood, metal and plastic lids as long as the brackets are firmly anchored.
- **maker_difficulty**: easy to fit, not something to make: buy the strut (it is a high-pressure vessel) and screw on bought or printed brackets. The hard part is choosing the force and mounting points, which a free online calculator can do (Gasspringsshop calculator).

### Making it

- **processes**: 
  - off-the-shelf part: the gas spring itself, end fittings, ball studs and mounting brackets
  - 3D print (FDM): mounting brackets, stand-offs and adapters (e.g. printer-enclosure lid struts on Printables)
  - sheet metal: bent steel brackets
  - CNC: machined brackets and ball studs *(unverified parts omitted)*
- **print_in_place**: no: the gas spring must be bought; only its brackets and adapters are printed, as separate parts.
- **making_tips_3d_printing**: 1) Print only the brackets, never anything that holds pressure. 2) Use a tough, heat-resistant plastic: one enclosure-lid design says 'Print with PETG, 3 walls and 20% infill. PLA will soften in the enclosure' (Printables 'Gas Struts for Prusa XL Enclosure Lid'); another maker found the original light mounts bent under a heavy lid and redesigned them for ABS, ASA, PC-CF or PA-CF at 25 percent infill or more (Printables 'Gas struts Mount/Stabilizer'). 3) Let metal carry the load where you can: screw a steel ball stud into a heat-set insert or through a nut, and bolt the bracket to the frame with several screws, rather than relying on printed threads (the Mount/Stabilizer design uses M6 heat inserts, drop-in nuts and nyloc nuts). 5) Remember the bracket feels the full strut force (often 100-400 N) and the lid hinge feels more; a small move of the mount point changes the forces a lot, so test with the lid supported (Engineer Live; ACE). 6) Choose the strut force by test or calculation: in one enclosure design 30-40 N struts worked and 20 N was not strong enough (Printables Prusa XL lid). 7) Keep the strut rod-down when the lid is closed and leave about 10 mm of unused stroke so it doesn't bottom out (Camloc). 8) Never paint, sand or scratch the rod near printed parts (ACE). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'gas spring', 'gas strut', 'lift support', 'add-a-fitting gas spring' (threaded ends for swap-on fittings), 'pulling gas spring' or 'traction gas spring', 'adjustable-force gas spring' (bleed valve), 'high-temperature gas spring', 'corrosion-resistant' or 'stainless steel gas spring', 'locking gas spring' and 'remote-release gas spring' (McMaster-Carr catalogue names); 'lockable gas spring' with 'elastic' or 'rigid' locking, 'release head', 'release lever', 'Bowden cable release' (Stabilus BLOC-O-LIFT, Suspa, Bansbach easylift - brands); end fittings: 'ball socket', 'angle ball joint', 'swivel eye', 'eyelet', 'clevis', 'ball stud' (commonly a 10 mm ball with an M6 thread on small struts: Thingiverse 'Gas Strut End, Ball joint Cup 10mm, M6x1'); 'gas spring mounting bracket'. Related: 'gas-spring-style mechanical springs' (no seals to leak) (McMaster-Carr).
- **rules_of_thumb**: 
  - Push force F = p x A (gas pressure times rod area); force tolerance +/-7 percent; force rises about 3.4 percent for every 10 °C warmer (nominal force F1 is quoted at 20 °C); standard seals work from -20 °C to +80 °C, special seals from -45 °C to 200 °C (ACE Industrial Gas Springs catalogue, p. 2 and 5).
  - Force 'progression' (rise from extended to compressed) is roughly 20-60 percent for most push types and up to 95 percent for some; installation length tolerance +/-2 mm; don't combine small diameter, long stroke and high force (ACE catalogue, p. 2 and 5).
  - Mount rod-down (rod pointing down when the lid is closed) so the oil lubricates the main seal and damps the end of the stroke; Camloc prefers the 'push up' layout, where the moving mount is closer to the hinge than the fixed mount (Camloc 'Gas strut positioning'; ACE catalogue).
  - Start with the moving mount about 1/3 of the lid length from the hinge; the crossover point (where the strut takes over lifting) is often 10-30° from fully closed; allow about 10 mm of unused stroke so it doesn't bottom out before the lid shuts; an over-centre mount position stops the lid springing open (Camloc 'Gas strut mounting positions').
  - Force needed per strut: F1 = mass of lid x g x distance from hinge to centre of gravity / (distance from hinge to strut line x number of struts); aim for hand forces of 60 N or less to open and close (Camloc Motion Control in Engineer Live 'How to specify gas struts accurately').
  - Life: generally tested to 70,000 strokes, equal to about 2-10 km of rod travel; 500,000 strokes or more in some applications (ACE catalogue, p. 2).
  - Rigid-locking (oil-filled) lockable springs must be mounted roughly vertical: rod down to lock against extension, rod up to lock against compression; the standard slide-valve release needs 2.5 mm of pin travel, a poppet valve 1 mm (Stabilus BLOC-O-LIFT page).

### When to use it

- **everyday_examples**: 
  - The struts that hold up a hatchback's tailgate or a car bonnet (Wikipedia 'Gas spring'; Wikimedia Commons 'Heckklappendämpfer.JPG')
  - An office chair's height column (gas lift), which is a lockable gas spring released by the lever under the seat (Wikimedia Commons 'Chair gaslift.jpg'; Stabilus)
  - Lift-up lids on toolboxes, storage chests, fold-away beds and machine guards (ACE application list)
  - Hospital beds and height-adjustable tables that lock at any height (Stabilus; Lesjöfors)
- **when_to_use**: Use a gas spring to lift, hold open or counterbalance a hinged lid, hatch, door, seat, screen or arm so it feels light and doesn't slam, especially where a coil spring would be too long or its force would change too much over the travel (ACE; explainthatstuff). The built-in damping gives a smooth opening speed and soft stop (ACE). Use a lockable gas spring when something must be adjusted and then stay put at any position, such as seat and backrest height, table height, bed sections, or a work surface angle (Stabilus; Suspa; Lesjöfors). Choose rigid locking where no movement is allowed when locked (operating tables, wheelchair recline) and elastic locking where a little give feels comfortable (chair backrests) (Stabilus; Lesjöfors). Popular with makers for 3D-printer enclosure lids (Printables).
- **when_not_to_use**: Avoid it where it would be loaded sideways or used as a structural brace, because side loads bend the rod and ruin the seal (ACE); for very cold places where the force drops, or near heat above its seal rating (ACE). For small, light lids a friction or torque hinge, a lid stay or a self-closing hinge is simpler. For a steady pull over a long distance in a small space use a constant-force spring; for a holding brake with no pressure vessel use a friction hinge or ratchet stay; if it must last millions of cycles or never leak, consider a gas-spring-style mechanical spring (McMaster-Carr 'no seals to fail or gas to leak'). A counterweight gives truly constant force but is heavy. *(unverified parts omitted)*
- **environment_limits**: Temperature changes the force: about 3.4 percent per 10 °C, so a lid that stays up in summer may sag in winter; standard seals -20 °C to +80 °C, special seals -45 °C to 200 °C; never put it over heat or in fire (ACE catalogue). High-temperature types rated to 392 °F (200 °C) exist (McMaster-Carr). Use stainless versions in damp, salty or food environments (ACE; Bansbach). Keep dirt, paint and scratches off the rod because rod damage destroys the seal and lets gas out (ACE). After long storage it may stick at first (breakaway 'stiction') but should not have lost pressure (ACE). With use, seals wear and gas slowly escapes, so force drops and lids begin to sag (Wikipedia lists leakage, failing to hold the load and sagging as signs of failure). Printed brackets in warm enclosures should not be PLA (Printables Prusa XL lid).
- **safety_notes**: It is a pressure vessel: internal pressure can be up to 300 bar (4,350 psi); do not open, cut, crush, puncture, heat or modify it (ACE; Camloc). To scrap one, it must first be depressurised by slowly drilling a 2-3 mm hole 15-20 mm from the closed end while wearing safety glasses, ear plugs and protective clothing, because oil and metal fragments can spray out; never cut or put it in a lathe before depressurising (Camloc disposal advice). A strut can push a lid or door open hard and fast, so support the lid while fitting or removing struts and fit them fully extended (ACE). Wikipedia reports a cheaply made office-chair gas spring exploding and ejecting its rod; buy from reputable makers. *(unverified parts omitted)*
- **common_failures**: Losing gas through worn or damaged seals, so the lid sags or won't stay open; caused by scratched, dirty or painted rods, side loads and mounting rod-up so the seal runs dry (ACE; Camloc). Bent rod from side or tilting loads; use ball joints or pivoting end fittings so it only sees straight push (ACE). Wrong force: too strong and the lid won't stay shut or flies open, too weak and it drops; use the moment calculation or a calculator and an over-centre closed position (Camloc; Engineer Live; Gasspringsshop). Bottoming out before the lid is closed, fixed by leaving about 10 mm of spare stroke (Camloc). Weak in the cold (ACE). Stiff first movement after storage (ACE). Printed or light brackets bending or cracking under the strut force; one maker's original mounts 'bent' and a strut 'ripped' (Printables 'Gas struts Mount/Stabilizer'). Lockable types: elastic ones creep or bounce under heavy external loads, so use rigid locking where no movement is allowed (Stabilus; Lesjöfors).
- **related**: 
  - Coil spring (compression): cheap and simple, but its force rises steeply as it is squashed and it has no built-in damping
  - Constant-force spring: a coiled steel strip that pulls with nearly the same force over a long distance; pulls instead of pushes and has no damping
  - Dampers (rotary and linear soft-close dampers): control speed like a gas spring but give no lifting force of their own
  - Friction hinge (torque hinge) and lid stays: hold a lid at any angle by friction instead of pushing it up
  - Spring balancer (gravity compensation): springs arranged to cancel a weight at every angle, as in an anglepoise lamp
  - Over-centre linkage (toggle): a mounting geometry that can make a gas-sprung lid pull itself shut
  - Spring button lock and indexing plunger: lock a telescoping tube at set holes instead of at any length like a lockable gas spring
  - Counterweight: gives a truly constant force with no seals, but is heavy and bulky

### Pictures, videos and models

- **links**: 
  - [Gas-spring simplified numbered 120.png (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Gas-spring_simplified_numbered_120.png): Simplified cutaway of a gas spring with numbered parts: piston rod, head cap, guide bushing, seal, cylinder, piston and flow-restriction orifice (used in Wikipedia's 'Gas spring' article) *(licence: CC BY-SA 2.5)*
  - [Chair gas spring disassembled.jpg (Wikimedia Commons, by ASDFS)](https://commons.wikimedia.org/wiki/File:Chair_gas_spring_disassembled.jpg): Photo of an office-chair gas spring (a lockable gas spring) taken apart, showing its tubes and internal parts *(licence: CC BY-SA 4.0)*
  - [How do gas springs work? (Explain that Stuff)](https://www.explainthatstuff.com/gassprings.html): Plain-English explanation with an animation of the piston moving, a force diagram, a gas-and-oil cutaway and a seal diagram *(licence: link only)*
  - [busting open a gas spring and how they work. (YouTube, daveknowshow)](https://www.youtube.com/watch?v=zNp5qmd650M): Video of a gas spring being opened up and its parts explained (title and channel checked via YouTube oEmbed; not watched). Do not try this yourself: the spring must be depressurised first *(licence: link only (standard YouTube licence))*
  - [Locking Gas Springs (YouTube, Easylift GasSprings)](https://www.youtube.com/watch?v=HojDjwwRZ04): Video of locking gas springs and the assembly of a Bowden-wire release system (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Gas spring calculator (Gasspringsshop)](https://www.gasspringsshop.com/gas-spring-calculator/): Free online calculator: enter the lid size, weight, angles, pivot position, temperature and hand force, and it suggests gas springs, mounting points, force graphs and a 3D simulation *(licence: link only (free web tool from a gas-spring seller))*
  - [Gas Struts for Prusa XL Enclosure Lid (krayft, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1042648-gas-struts-for-prusa-xl-enclosure-lid): Printed brackets for adding two 30-40 N gas struts to a 3D-printer enclosure lid, with two opening heights; printed in PETG. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Gas struts Mount/Stabilizer (RohDruck, Printables)](https://www.printables.com/model/254676-gas-struts-mountstabilizer): Stronger printed gas-strut mounts for an enclosure lid, redesigned after the original light mounts bent; uses M6 heat inserts, drop-in nuts and struts with M6 threads. Appeared in web search results; details read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))* *(unverified parts omitted)*
- **diagram_idea**: A side view of a lid on a hinge with a gas strut drawn as a cutaway tube (gas shown as dots, a small oil pool at the rod end, a tiny hole in the piston), arrows showing the gas pushing on the larger inner face of the piston, the moving mount about a third of the way along the lid, and an inset showing a lockable version's valve open (rod moves) and closed (rod held).
- **sources**: 
  - https://en.wikipedia.org/wiki/Gas_spring
  - https://www.ace-ace.com/media/acedownloads/ACE_Catalog_GasSprings_US_2012.pdf
  - https://camloc.com/us/help-centre/installing-gas-struts/understanding-gas-strut-mounting-points/
  - https://camloc.com/us/help-centre/installing-gas-struts/gas-strut-positioning/
  - https://camloc.com/us/help-centre/which-standards-apply-to-gas-struts/gas-strut-disposal-advice/
  - https://www.engineerlive.com/content/how-mount-gas-springs-effectively
  - https://www.explainthatstuff.com/gassprings.html
  - https://www.lesjofors.com/en/technology/insights/gas-spring-locking-mechanism/
  - https://www.suspa.com/us/products/lockable-gas-springs/
  - https://www.stabilus.com/products/lockable-gas-springs/bloc-o-lift-and-kombi-lift
  - https://group.stabilus.com/technologies-and-innovations/mechanical-solutions/locking-gas-springs
  - https://www.bansbach.com/en/products/gas-springs/lockable-gas-springs/
  - https://www.mcmaster.com/products/gas-springs/
  - https://www.gasspringsshop.com/gas-spring-calculator/
  - https://commons.wikimedia.org/wiki/File:Gas-spring_simplified_numbered_120.png
  - https://commons.wikimedia.org/wiki/File:Chair_gas_spring_disassembled.jpg
  - https://commons.wikimedia.org/wiki/File:Chair_gaslift.jpg
  - https://commons.wikimedia.org/wiki/File:Heckklappend%C3%A4mpfer.JPG
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:2381580
  - https://www.youtube.com/watch?v=zNp5qmd650M
  - https://www.youtube.com/watch?v=HojDjwwRZ04

### Other info

- **Fields with unverified parts:** aliases, make_it_yourself, making_tips_3d_printing, play_and_precision, processes, safety_notes, tools_needed, when_not_to_use

## 238 Spiral power spring (clock spring)

*springs & energy storage.* A flat strip coiled into a spiral that stores energy when wound and releases it as it unwinds, as in clockwork and retracting cords

### What it is

- **plain_name**: A long ribbon of springy steel rolled up like a snail shell, usually inside a round case: wind it up and it stores energy, then it turns things as it unwinds, like the spring in a wind-up toy or the one that pulls a tape measure back in
- **term**: Spiral power spring (power spring, clock spring, mainspring)
- **aliases**: 
  - power spring, clock spring (John Evans' Sons: 'Power springs (also referred to as clock springs)')
  - mainspring (the spiral spring that powers clockwork watches, clocks and wind-up toys) (Wikipedia 'Mainspring')
  - spiral torsion spring (Lesjöfors says there is 'no real difference' from a clock spring; John Evans' Sons uses the name for open-wound springs that turn less than one revolution)
  - flat spiral spring, spiral spring (Tokai Spring; RoyMech)
  - rotor spring (McMaster-Carr catalogue name: 'Wind to store power, then release to create rotary motion')
  - spring motor, wind-up motor, clockwork motor (a power spring with a ratchet and gears) (Printables 'Duplo wind-up motor'; Wikipedia 'Mainspring')
  - pre-stressed power spring, Conpower (brand, Vulcan Spring)
  - retractor spring, tape-measure spring, reel spring (products built around it) (Vulcan Spring: seat belts, dog leashes, badge reels; Lee Spring: seat belt webbing, tape measures, dog leads, seat recliners, window regulators)
  - hairspring or balance spring: a tiny open-wound spiral used for timekeeping, not for storing power (Wikipedia 'Spring (device)')
  - Not to be confused with a car's 'clockspring', a spiral flat cable in the steering wheel that carries electrical signals (Wikipedia 'Clockspring')
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up
- **one_liner**: A flat strip of spring steel coiled into a spiral between a centre shaft and an outer case, which stores energy as it is wound tighter and gives it back as turning force as it unwinds, powering clockwork and pulling cords, tapes and belts back into reels.
- **complexity**: A few parts working as one unit: the spiral steel strip, a centre shaft (arbor) with a hook or slot for the inner end, and an outer case (barrel, housing or retaining ring) or post for the outer end (John Evans' Sons; Wikipedia 'Mainspring'). Clockwork adds a ratchet wheel and pawl (called the 'click') to stop it unwinding while you wind, a winding key or knob, and a gear train; reels add a drum and cord, tape or belt (Wikipedia 'Mainspring').
- **how_it_works**: The strip's inner end is hooked to the centre shaft and its outer end to the case or a fixed post. Turning the shaft wraps the strip tighter around it, bending every coil more, and the bent steel pushes back as a turning force (torque) that grows the more it is wound (John Evans' Sons; Wikipedia 'Mainspring'). Let go and it turns the shaft or the case back, driving a gear train or pulling a cord onto a reel; in a watch's 'going barrel' the spring winds by the shaft and drives through gear teeth on the case, and a ratchet 'click' stops the shaft slipping back (Wikipedia 'Mainspring'). Tightly wound 'power springs' in a case can turn many times (about 15-25 turns, more when pre-stressed), while open-wound 'spiral torsion springs' with gaps between coils turn less than one revolution and spring back to centre (Vulcan Spring; John Evans' Sons).

### Finder attributes

- **job**: 
  - store energy: wound up by hand, by a pulled cord or by a motor, it gives the energy back as turning force (clockwork, wind-up toys, timers)
  - tighten and hold tension: in retracting reels it keeps a cord, tape, lead, hose or seat belt pulled back and takes up slack (Vulcan Spring; John Evans' Sons)
- **motion**: rotate: many turns for a cased power spring (Vulcan: up to about 20-25 turns; John Evans' Sons: pre-stressing raises useful turns from about 15 to up to 35); less than one turn (360°, 270° preferred maximum) for an open-wound spiral torsion spring (John Evans' Sons). With a drum and cord it gives a straight-line pull.
- **degrees_of_freedom**: 1: the centre shaft turns relative to the case. The spring itself does not guide anything, so the shaft needs its own bearings or bushings and the spring should be kept flat in its case.
- **special_behaviour**: 
  - tensioning (takes up slack and holds): in retracting reels it pulls the cord, tape or belt back in and keeps it taut (Vulcan Spring: seat belts, dog leashes, badge reels, canister vacuum cleaners)
  - none of the other listed behaviours on its own: the one-way hold while winding comes from a separate ratchet and click (pawl), and the steady running speed of a clock comes from an escapement, not the spring (Wikipedia 'Mainspring')
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the wound strip provides the turning force
  - not a holding joint (it moves or passes on motion): it is an energy store; its ends are simply hooked, pinned or clamped to the shaft and case (John Evans' Sons: 'hubs or collets, tabs and keyways, hooks and pin, hook and slot')
- **input_output**: Winding rotation in -> torque out (or a straight pull, via a drum and cord). Torque rises as it is wound; for a free (open) spring it falls roughly in a straight line to zero as it unwinds (Wikipedia 'Mainspring', torque-curve figure), while cased power springs have a non-linear curve because the amount of active strip changes and the coils rub (John Evans' Sons). Friction means it takes more torque to wind than it gives back (hysteresis) (Vulcan Spring). Designers usually leave the first and last 20 percent of the turns unused because torque rises steeply there (Vulcan Spring). Arrangements such as a pre-coiled spring in a going barrel, a fusee (cone pulley) or stopwork give a flatter torque (Wikipedia 'Mainspring'). Back-drivable: yes, it always drives back unless a ratchet and click hold it.
- **power**: passive (no power needed); it is wound by hand, by pulling the cord or tape out, or occasionally by a motor.
- **removability**: removable: the ends are hooked, pinned or slotted so the spring can be replaced (Wikipedia: watch mainsprings attach by 'small hooks or tabs' through square holes 'so it can be easily replaced'), but only with care and the right tools because of the stored energy.
- **reuse_cycles**: many times: a cycle is one full wind and unwind; power springs 'rarely have life cycles exceeding 200,000 winds and will likely be under 100,000 if space and torque are optimized' (Vulcan Spring); spiral torsion springs range from several thousand to over a million cycles depending on material and use (John Evans' Sons).
- **tools_needed**: None to use a spring already in its case. Fitting a loose spring needs a mainspring winder or a retaining ring to wind it into its case, a let-down key to release a wound clock spring safely, pliers, gloves and eye protection (Wikipedia 'Mainspring': 'mainspring winder', 'mainspring clamps'; YouTube 'Clock Mainspring - How to let down the power... Safely!').
- **seal**: none
- **load**: Light to medium turning force: stock and custom spiral springs range from about 0.02 to 700 in-lb (about 0.002-79 N·m) of torque (Lesjöfors). It only gives torque about the shaft; bearings must carry any side loads. The more energy stored, the more violent a failure (Wikipedia 'Mainspring' hazards).
- **adjustable**: Partly: the starting tension (preload) can be set by winding extra turns before fixing the ratchet or anchoring the case, but the torque curve is fixed by the strip's width, thickness and length; change it with a different spring or with gearing (Vulcan Spring; *(unverified parts omitted)*
- **play_and_precision**: not applicable (it does not locate parts). Its torque changes as it winds and unwinds, and friction between coils adds hysteresis (John Evans' Sons; Vulcan Spring).
- **access_needed**: end of a tube or shaft: the inner end must be hooked to the centre shaft and the outer end to the case, usually during assembly of the housing; winding is done from the shaft end by a key or knob.
- **materials**: Spring steel strip: 1074 and 1095 high-carbon steel, 301 and 302 stainless steel, and Inconel (Lesjöfors); strip from about 0.002 inch (0.05 mm) to 0.080 inch (2 mm) thick (John Evans' Sons). Modern watch mainsprings use stainless 'white metal' alloys (iron, nickel, chromium with cobalt, molybdenum or beryllium) that resist setting and breaking (Wikipedia 'Mainspring'). Printed plastic spiral springs work in PETG, nylon or PLA for light toys, but plastics lose force when left wound (Printables 'Spring Material Test'; Hackaday).
- **maker_difficulty**: moderate: easy to use a bought or salvaged steel spring in a printed case and add a ratchet, but hard to make a good steel one at home; a printed plastic spiral is easy to make but weak and loses force if left wound (Printables 'Duplo wind-up motor'; Printables 'Spring Material Test').

### Making it

- **processes**: 
  - off-the-shelf part: power springs, spiral torsion springs, clock mainsprings and ready-made spring motors or retracting reels
  - 3D print (FDM): cases, arbors, drums, ratchets and gears; also whole plastic spiral springs for light wind-up toys and return springs
  - CNC: steel arbors and cases *(unverified parts omitted)*
- **print_in_place**: partly: a plastic spiral spring can be printed as one piece with its hub and outer arm (e.g. 'Triple Spiral Compliant Torsion Spring', about 120° of travel), but a usable wind-up motor also needs a ratchet, case and gears assembled around it, and a steel spring is always a bought part.
- **making_tips_3d_printing**: 1) Plastic spirals: PETG is the usual choice; 'PLA makes for a very poor spring material' (Hackaday), although a Duplo wind-up motor worked in PLA with 3 perimeters for the spring and a 4:1 gear reduction to tame its torque (Printables 'Duplo wind-up motor'). 2) Expect creep: in one test, printed springs held stretched for 8 hours at 25-30 °C all deformed, PETG least (about 5-10 percent), and PLA worst; the tester concluded no filament he tried works as a spring under constant load (Printables 'Spring Material Test'). So don't store a printed spring wound, and use steel for anything that must hold tension. 4) For a printed mainspring, one clock maker printed it with 3 walls and 20 percent infill in PETG and greased the axles (Printables 'Fully 3D Printed Mechanical Clock'). 5) For a steel spring in a printed case: size the case so the spring strip fills only about 40-50 percent of the free space, or turns are lost (Vulcan Spring), and make the arbor 15-25 times the strip thickness in diameter (John Evans' Sons). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'power spring', 'clock spring', 'spiral torsion spring', 'flat spiral spring' (John Evans' Sons, Lesjöfors, Vulcan Spring, Tokai Spring); 'rotor springs' (McMaster-Carr catalogue name for wind-up spiral springs); 'Conpower' (brand, Vulcan Spring) pre-stressed power springs; 'clock mainspring' and 'mainspring winder' (clock parts suppliers); 'spring motor', 'wind-up motor' or 'clockwork motor' (toy movements); 'retractable reel', 'badge reel', 'cord reel' or 'tape measure spring' to salvage; 'constant torque spring' or 'spring motor A-type / B-type' when a flatter torque is needed (see constant-force spring).
- **rules_of_thumb**: 
  - The spring strip should fill only about 40-50 percent of the free space in its case; power springs give at most about 20-25 turns (pre-stressed Conpower springs more); keep the first 20 percent and last 20 percent of available turns unused because torque rises steeply there; life rarely exceeds 200,000 winds and is often under 100,000 (Vulcan Spring 'Custom Spring Design for Power vs. Conpower Requirements').
  - Total turns are greatest when the strip's side area (thickness x length) equals half the area inside the case minus the shaft's area (Hayamizu Hatsujo 'About Design', contact-type spiral spring); in their worked example, a stress range of about 600 MPa is a guideline for 100,000 uses, and a spring with a pinned (not clamped) outer end deflects about 25 percent more and has twice the bending stress for the same torque.
  - Strip length should be less than 15,000 times its thickness; arbor diameter 15-25 times the thickness to limit coil friction and stress; pre-stressing can raise useful turns from about 15 to up to 35 (John Evans' Sons 'Power Springs').
  - Open-wound spiral torsion springs suit high torque over less than 360° of rotation, with 270° the preferred maximum; when over-wound the coils 'close out' and rub, making torque rise sharply (John Evans' Sons 'Spring Types and Their Applications'; 'Spiral Torsion Springs').
  - A watch mainspring is a strip about 20-30 cm long and 0.05-0.2 mm thick; a typical going barrel turns once every 8 hours, so a 40-hour spring needs about 5 turns (Wikipedia 'Mainspring'). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Wind-up clocks, mechanical watches, music boxes, kitchen timers and wind-up toys (Wikipedia 'Mainspring')
  - A retractable tape measure pulling its blade back in (Lee Spring: 'Power springs are used for retracting applications such as seat belt webbing, tape measures and dog leads, seat recliner, window regulator mechanisms'; Wikipedia 'Tape measure': spring-return tape measures)
  - Seat belts, retractable dog leads, badge reels and the cord reel in a canister vacuum cleaner (Vulcan Spring)
- **when_to_use**: Use a spiral power spring when you need to store turning energy compactly and release it over many turns without electricity, such as a wind-up motor for a toy or kinetic sculpture, a timer, or a music box (Wikipedia 'Mainspring'). It is the usual choice for self-retracting reels that wind a cord, tape, hose, lead or belt back in (Vulcan Spring; John Evans' Sons), and for counterbalancing rotating parts such as covers, hatches or arms (John Evans' Sons). Use an open-wound spiral torsion spring for strong 'return to centre' action over less than a turn, such as a joystick or a spring-return knob (John Evans' Sons).
- **when_not_to_use**: Don't use it when you need an even force over a long straight pull (use a constant-force spring) or even torque over many turns (use a constant-torque spring motor or add a fusee or stopwork) (Wikipedia 'Mainspring'). For a strong push on a lid use a gas spring; for a small spring-back over part of a turn a wire torsion spring is cheaper. For large amounts of energy or long running times, a falling weight or a battery and motor is safer and more even. Avoid plastic spiral springs anywhere they must stay wound under load, because printed plastic creeps (Printables 'Spring Material Test'). Avoid very high cycle counts (beyond roughly 100,000-200,000 winds) without a proper spring design (Vulcan Spring).
- **environment_limits**: Carbon steel springs rust and need oil or grease; stainless and special alloys resist corrosion and heat better; high or low temperatures change elasticity, torque and fatigue life, and lubrication reduces wear (John Evans' Sons 'Spiral Torsion Springs'; Lesjöfors). Before modern alloys, a fully wound watch spring could break loose when cold made it contract, and changes in the weather brought 'a rash of watches with broken mainsprings' (Wikipedia 'Mainspring'). Springs slowly lose force by permanently bending ('set' or 'tired' springs) (Wikipedia 'Mainspring'). *(unverified parts omitted)*
- **safety_notes**: A wound spiral spring stores a lot of energy and can release suddenly, 'causing potentially serious injury'; even a 'let down' spring and a going barrel keep dangerous tension, so clockmakers let springs down slowly with a key while holding back the click, and use mainspring winders and clamps to fit and remove them (Wikipedia 'Mainspring'). A broken spring can spin the barrel backwards hard enough to wreck gears (Wikipedia 'Mainspring': motor or safety barrel). *(unverified parts omitted)*
- **common_failures**: Fatigue cracks and breaks, most often at the inner end where it hooks to the shaft and bending stress is highest, or at the end of winding when the coils are tight (Wikipedia 'Mainspring'). The spring taking a permanent 'set' and losing torque (Wikipedia 'Mainspring'). Over-winding so the drive is too strong ('knocking'), prevented by stopwork or a click with a little recoil (Wikipedia 'Mainspring'). Too much spring for the case, or the wrong arbor size, cutting the number of turns and torque (Vulcan Spring). Friction between coils (hysteresis), reduced by lubrication and a larger arbor (John Evans' Sons). Anchor hooks tearing out of printed parts, and printed plastic springs creeping so they no longer retract fully (Printables 'Spring Material Test').
- **related**: 
  - Constant-force spring: a pre-curled strip that pulls in a straight line with nearly the same force; the constant-torque 'spring motor' version gives even turning force, unlike a power spring whose torque rises as it winds
  - Coil spring (torsion): a wire coil that twists back over part of a turn; cheaper and simpler for small angles
  - Hairspring (balance spring): a very fine open spiral that sets the timing of a watch's balance wheel rather than powering it
  - Ratchet and pawl: the 'click' that holds a wound mainspring while it is being wound
  - Escapement (anchor or verge): lets a clock's spring unwind a little at a time at a steady rate
  - Spring balancer (gravity compensation): uses springs, sometimes spiral ones, to cancel a weight at every angle
  - Tape-spring hinge: a curved steel tape that flips and holds, a different use of flat spring strip *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Alarm clock mainspring.JPG (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Alarm_clock_mainspring.JPG): Photo of an open (not cased) mainspring in a 1950s alarm clock, with its outer end hooked to a post and the winding arbor at the centre *(licence: CC0 (public domain dedication))*
  - [Going barrel.png (Wikimedia Commons, drawing by Frederick J. Britten)](https://commons.wikimedia.org/wiki/File:Going_barrel.png): Cross-section drawing of a watch going barrel with the mainspring fully wound around the arbor inside its toothed case *(licence: Public domain)*
  - [Free mainspring torque curve.svg (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg): Graph of a mainspring's torque falling in a straight line as it unwinds *(licence: Public domain)*
  - [Watch mainsprings.png (Wikimedia Commons, Elgin National Watch Co., about 1910)](https://commons.wikimedia.org/wiki/File:Watch_mainsprings.png): Photos of the three relaxed mainspring shapes: plain spiral, semi-reverse and reverse *(licence: Public domain)*
  - [Spring Driven Mechanical Clocks: The Mainspring Explained (YouTube, Scottie's Clock World)](https://www.youtube.com/watch?v=CHKZcGKcE24): Video explaining how a clock mainspring works and how its dimensions relate to its power (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Duplo wind-up motor (gertvv, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/291477-duplo-wind-up-motor): A printed wind-up spring motor with a printed spiral spring, ratchet pawl and 4:1 gear reduction, sized like Duplo bricks; printed in PLA with 3 perimeters for the spring. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Spiral Torsion Spring Optimizer v4 (zbuser, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/485731-spiral-torsion-spring-optimizer-v4): A Python optimizer plus parametric FreeCAD model that sizes and generates a printable spiral torsion spring. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Triple Spiral Compliant Torsion Spring (Panegyr, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1291166-triple-spiral-compliant-torsion-spring): A one-piece printed spiral return spring with about 120° of travel and a 1/4 inch square centre hole; FreeCAD file included. Read through the Printables public API. *(licence: Creative Commons Public Domain (as listed by Printables))*
  - [Fully 3D Printed Mechanical Clock (iceman2511, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/588221-fully-3d-printed-mechanical-clock): A pendulum clock printed in PETG, driven by a printed mainspring and ratchet; the maker notes it runs only about 5 minutes because of friction, which shows the limits of plastic springs. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: Two round cases side by side: on the left a loosely coiled steel strip with its inner end hooked to a centre shaft and outer end to the case, on the right the same strip wound tight around the shaft with a curved arrow showing the turning force, plus a ratchet wheel and click beside the shaft and a small graph of torque rising as the number of turns increases.
- **sources**: 
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

### Other info

- **Fields with unverified parts:** adjustable, environment_limits, making_tips_3d_printing, processes, related, rules_of_thumb, safety_notes

## 268 Coil spring (compression, extension, torsion)

*springs & energy storage.* Wire wound into a coil that pushes, pulls or twists back; the baseline spring

*Also covers:* Also covers the repelling-magnet (magnetic) spring as an alternative.

### What it is

- **plain_name**: A springy wire wound into a spiral (like a small, stiff Slinky) that pushes back when you squash it, pulls back when you stretch it, or twists back when you turn its arms; the ordinary spring inside pens, clothes pegs, mousetraps and garage doors
- **term**: Helical coil spring: compression spring, extension (tension) spring and helical torsion spring
- **aliases**: 
  - coil spring, helical spring (Wikipedia 'Coil spring' and 'Spring (device)')
  - compression spring, push spring; open-coil helical spring (Lee Spring)
  - extension spring, tension spring, pull spring; close-wound spring with hooks or loops (Wikipedia; Lee Spring)
  - torsion spring, helical torsion spring; double torsion spring (one left-hand and one right-hand coil joined in the middle) (Wikipedia 'Torsion spring'; Lee Spring)
  - shapes: conical spring, hourglass (concave) spring, barrel (convex) spring, volute spring (Lee Spring; Wikipedia)
  - arc spring, bow spring; garter spring (an arc spring bent into a full circle) (Wikipedia 'Spring (device)')
  - drawbar spring (an extension-style spring that is actually squashed by loops passing through its middle) (Lee Spring)
  - continuous-length extension spring (cut to length) (Lee Spring)
  - pen spring, ballpoint pen spring (Wikimedia Commons category 'Ballpen springs')
  - music wire spring, piano wire spring (named after the usual spring steel wire)
  - Schraubenfeder (German, from the German Wikipedia link on 'Coil spring')
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up
- **one_liner**: A length of springy wire wound into a helix that stores energy when it is squashed (compression spring), stretched (extension spring) or twisted by its arms (torsion spring), and gives it back as a push, a pull or a turning force roughly in proportion to how far it was moved.
- **complexity**: Single piece: one wound wire. A compression spring has plain, ground or closed ends that sit flat; an extension spring has close-wound coils with a hook or loop at each end; a torsion spring has a close-wound body with two straight or bent arms (legs). In use it needs the parts it works against: a seat, pocket, guide rod or hole for a compression spring, two anchor points (posts, holes or pins) for an extension spring, and a supporting rod (mandrel) plus two stops or slots for the legs of a torsion spring.
- **how_it_works**: Squashing or stretching a coil spring does not bend the wire much; it twists the wire along its length, so the steel acts like a long torsion bar wound into a small space, and the force rises steadily with the movement (Hooke's law) (Wikipedia 'Coil spring'). A torsion spring works the other way round: turning its arms bends the wire, winding the coils tighter so the coil diameter shrinks and the body gets longer (Wikipedia 'Torsion spring'; Lee Spring). An extension spring is wound with its coils pressed together (initial tension), so it does not stretch at all until you pull harder than that built-in force (RoyMech; MW Components). How stiff a spring is depends mostly on the wire thickness, the coil diameter and the number of working coils: thicker wire makes it much stiffer, while a wider coil or more coils make it softer (Engineers Edge).

### Finder attributes

- **job**: 
  - store energy: pushes back (compression), pulls back (extension) or twists back (torsion) and returns parts to a rest position, e.g. the return spring in a button, latch, lever or hinge
  - tighten and hold tension: an extension or compression spring keeps a belt, cable, lid or clamp pressed or pulled with a steady force and takes up slack or wear
- **motion**: flex: a compression spring shortens along its axis until the coils touch (solid height); an extension spring lengthens along its axis; a torsion spring's arms rotate about the coil axis through part of a turn (stock torsion springs are sold with the arms at free angles from 90° to 360° apart, Lee Spring)
- **degrees_of_freedom**: 1 in intended use: along the axis for compression and extension springs, rotation about the axis for torsion springs. An unguided compression spring can also bend sideways (buckle) and an extension spring can swing on its hooks, which is why compression springs are often put over a rod or in a hole (Lee Spring)
- **special_behaviour**: 
  - tensioning (takes up slack and holds): an extension or compression spring keeps a belt, cable, latch or lid under a steady force as parts move or wear
  - none of the other listed behaviours by itself: a coil spring is the 'engine' inside many clever mechanisms (click pens, ratchet pawls, detents, over-centre toggles, torque limiters, spring-applied brakes) but on its own it only pushes, pulls or twists back
  - extension springs have a built-in threshold (initial tension): nothing moves until the pull exceeds it, which helps hold things firmly shut (RoyMech; MW Components)
- **holding_principle**: spring force (it presses, pulls or twists the parts it sits between; it does not hold anything by itself unless something else, such as a latch or pawl, uses its force)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: a compression spring drops into a pocket or over a rod; an extension spring hooks onto posts or holes; a torsion spring slides over a rod with its legs in slots. It is usually trapped by the parts around it
- **reuse_cycles**: effectively unlimited, as long as it is not over-stressed: a correctly sized steel spring does not wear out from being fitted and removed. Its working life is limited by fatigue from loading cycles, e.g. Century Spring's stock extension springs list a suggested maximum stretch for an average life of around 50,000 cycles (MW Components), and garage door torsion springs are typically rated for 10,000-30,000 open-and-close cycles (Wikipedia 'Garage door')
- **tools_needed**: usually none; long-nose or looping pliers to stretch an extension spring onto its hooks (Lee Spring notes looping pliers for forming ends on cut-to-length springs), a spring hook or puller for strong extension springs, and a vice or clamp to squash a strong compression spring during assembly. Wire cutters or a cutting disc, a mandrel and a winding jig if you wind your own springs
- **seal**: none
- **load**: Light to heavy, depending on size: from tiny pen springs to car suspension and garage door springs that balance a door of 400 lb (about 180 kg) or more (Wikipedia 'Garage door'). Each type works in one direction only: compression springs take a push along the axis, extension springs a pull along the axis, torsion springs a twist that winds the coils tighter. They are weak sideways: a long compression spring buckles, extension spring hooks bend and break first, and a torsion spring loaded the wrong way (unwinding) is over-stressed (Lee Spring; MW Components)
- **adjustable**: Yes, by the way it is fitted: pre-compress a compression spring with a screw, nut or shims; move an extension spring's anchor point or add a tensioning screw; set a torsion spring's starting angle (preload). On the spring itself only by cutting coils off a compression spring (makes it stiffer and shorter) or cutting a continuous-length extension spring to size (Lee Spring). The rate (stiffness) of a given spring is fixed
- **play_and_precision**: not applicable as a locating part: it does not locate anything precisely, it only applies force. Force is predictable only between its free length and solid height; stock spring rates are typically held to about ±10% and extension spring initial tension is only a reference value (MW Components). Compression springs grow in diameter as they are squashed and torsion springs shrink in diameter and grow in length as they wind up, so both need clearance (Lee Spring). Standard squareness of a compression spring's ends is 3° (Lee Spring white paper)
- **access_needed**: not applicable: it sits between the parts it acts on and is fitted as they are assembled (a compression spring usually goes over the end of a rod or into a blind hole)
- **materials**: Usually spring steel wire: music wire (ASTM A228, high-carbon, the most common for small springs), oil-tempered and hard-drawn carbon steel, chrome-silicon and chrome-vanadium alloy steels for shock loads, stainless steel 302/304, 316 (marine) and 17-7 for corrosion and heat, and phosphor bronze or beryllium copper where the spring must carry electric current or be non-magnetic (Lee Spring 'Spring Material Options'; Wikipedia 'Spring (device)'). Plastic coil springs can be 3D printed from PETG or similar, but PLA makes a very poor spring (Hackaday, 2026) and all plastics lose force over time. Steel springs work against any material, but press on soft materials (plastic, wood) through a flat seat or washer so they do not dig in.
- **maker_difficulty**: easy: stock steel springs and assortment kits are cheap and easy to fit into printed or wooden parts. Moderate: winding your own from music wire on a printed jig works for small springs (Spring Factory, torsion spring winders). Printing a plastic coil spring is easy, but it will be weak and will creep

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice (stock compression, extension and torsion springs, assortment kits, cut-to-length extension spring)
  - 3D print (FDM): the housings, pockets, guide pins, posts and leg slots that hold a bought spring; plastic coil springs for light, occasional use (PETG, not PLA)
  - hand-wound from spring wire on a mandrel or printed winding jig (e.g. Spring Factory, torsion spring winders)
  - woodwork, laser cut and CNC: spring seats, anchor holes and pivot posts in wood, acrylic or metal parts
- **print_in_place**: partly: a printed part can be designed around a pocket that a bought steel spring drops into (or is inserted during a pause), but the steel spring itself is never printed; plastic coil springs print as one piece (e.g. PETG coil springs on Printables) but are weak and creep, so they are not a substitute for steel
- **making_tips_3d_printing**: Buy the spring and print the parts around it: plastic 'always permanently deforms under tension' over time and PLA makes a very poor spring material, while a steel spring costs pennies (Hackaday, 2026, article and comments). Design rules for the printed parts: (1) Compression springs: put the spring in a hole or over a guide pin; make the hole larger than the spring's outside diameter plus its tolerance and the growth in diameter as it is squashed, and the pin smaller than the inside diameter but not so small that it no longer stops buckling (Lee Spring). Always use a guide if the free length is more than about 4 times the mean coil diameter (Compression Spring Store). Add a hard stop so the spring never reaches solid height (all coils touching) in use (Lee Spring white paper). Buy springs with closed or closed-and-ground ends for a flat, square seat; plain ends are not recommended for heavily loaded or precise jobs (RoyMech). (2) Extension springs: anchor the hooks on round posts or pins with smooth, rounded edges, and keep the pull in line with the spring's axis; the hook is where an over-stressed extension spring breaks first (MW Components). (3) Torsion springs: support the coil on a rod about 90% of the spring's inside diameter at full wind-up, not much smaller (Lee Spring), give the legs slots or stops, load it so it winds tighter, and leave room for the body to get longer as it winds (Lee Spring). A steel pin or screw makes a better arbor than a thin printed peg. (4) If you must print a coil spring: PETG with 100% infill worked for a 20 cm PETG coil spring on Printables; printing the spring with support along its whole length helped one designer print PETG springs consistently (Printables 'Parametric Supported Spring', 0.4 mm nozzle, 0.15 mm layers, 3 perimeters); a special g-code method can print springs in mid-air, but they are 'functional, albeit not very strong' (Hackaday, 2018). Plastic springs are best where they rest unloaded and are only occasionally compressed (Hackaday 2026 comment). (5) To make your own steel springs, print a winding jig: the Spring Factory uses a threaded mandrel for even coil spacing and takes piano wire of about 0.8-1.2 mm (Hackaday, 2022); torsion-spring winders use a drill-bit shank as the mandrel. Springs spring open after winding, so the finished coil is larger than the mandrel (Printables 'Extension spring jig' and 'Torsion Spring Winding Jig', which points to a spring mandrel calculator). *(unverified parts omitted)*
- **off_the_shelf_parts**: Stock compression springs (music wire, stainless steel 302/304, chrome silicon; plain, ground, closed or closed-and-ground ends; conical, hourglass and barrel shapes); stock extension springs with machine hooks, crossover-centre loops, full loops, extended or reduced eyes and threaded-insert ends; continuous-length extension spring (cut to length and form your own loops); drawbar springs; stock torsion springs with straight legs at 90°, 120°, 180°, 210°, 270°, 300° or 360° free leg angles, left-hand or right-hand wind, and double torsion springs; micro springs for small devices (all from Lee Spring's catalogue pages); spring assortment kits (compression, extension and torsion; Lee Spring 'Spring Kits', generic mixed kits); spring wire (music wire ASTM A228, stainless 302/304, 316, 17-7 PH) for winding your own; guide rods, shoulder bolts and dowel pins as spring guides and anchors.
- **rules_of_thumb**: 
  - Spring rate (stiffness) of a compression or extension spring: k = G d^4 / (8 n D^3), with G the shear modulus of the wire, d the wire diameter, n the number of active coils and D the mean coil diameter (outside diameter minus wire diameter) (Engineers Edge, https://www.engineersedge.com/spring_comp_calc_k.htm). So doubling the wire thickness makes the spring 16 times stiffer, while doubling the coil diameter makes it 8 times softer. Worked example (own calculation, using G = 11.5 x 10^6 psi, about 79 GPa, for music wire from Lee Spring, https://www.leespring.com/spring-materials): 1 mm wire, 9 mm mean diameter, 10 active coils gives about 1.4 N per mm.
  - Keep the spring index C (mean coil diameter / wire diameter) between about 3 and 12 for most helical springs (RoyMech, https://roymech.org/Useful_Tables/Springs/Springs_helical.html); very tight coils are hard to wind and highly stressed, and very open ones are floppy. The Lee Spring white paper also says to check the index and that the pitch must not exceed the outside diameter (https://www.leespring.com/sites/default/files/pdf/Lee%20Spring%20-%20WhitePaper%20-%20Spring%20Design%20General%20Consideration_US.pdf).
  - A compression spring whose free length is more than about 4 times its mean coil diameter is likely to buckle; fix it with a larger diameter, shorter length, more coils, or by running it over a rod or in a hole (Compression Spring Store, https://www.compressionspring.com/slenderness-ratio-making-your-spring-buckle.html).
  - Make a guide hole larger than the spring's outside diameter, allowing for tolerance and for the diameter growing as it is compressed; make a guide rod smaller than the inside diameter but not so small that it stops preventing buckling (Lee Spring, https://www.leespring.com/learn-about-compression-springs and white paper https://www.leespring.com/sites/default/files/pdf/Lee%20Spring%20-%20WhitePaper%20-%20Spring%20Design%20General%20Consideration_US.pdf).
  - Every working height must be above solid height (all coils touching); allow 5% on the nominal solid height. Total coils = active coils for open ends, +1 for open-and-ground ends, +2 for closed or closed-and-ground ends (Lee Spring white paper, https://www.leespring.com/sites/default/files/pdf/Lee%20Spring%20-%20WhitePaper%20-%20Spring%20Design%20General%20Consideration_US.pdf; RoyMech end-design table).
  - Stress: for general-purpose springs a maximum of about 40% of the wire's tensile strength may be used (RoyMech). If the stress at a working height is above 40% of tensile strength the spring will take a permanent set unless it is pre-set; above 60% it must be redesigned (Lee Spring white paper).
  - Torsion springs: always load them in the direction that makes the coil diameter smaller (winds them tighter); the residual stresses from forming help in that direction and hurt in the other. Support them on a rod about 90% of the inside diameter at full deflection, not much smaller, and allow for the body getting longer as it winds up. Specify the direction of wind (Lee Spring, https://www.leespring.com/learn-about-torsion-springs). If the loaded inside diameter shrinks onto the shaft, the spring will fail (RoyMech, https://roymech.org/Useful_Tables/Springs/Springs_Torsion.html).
  - Extension springs: the force at any stretch = initial tension + rate x stretch; the initial tension must be overcome before the spring starts to stretch. Stresses are highest where the last coil turns into the hook, so an over-stressed extension spring fails at the hook first; the suggested body stress is 30-45% of the wire's minimum tensile strength (MW Components / Century Spring, https://www.mwcomponents.com/how-to-select-an-extension-spring).
  - Springs in parallel add their stiffnesses; springs in series add their softness (compliance), so two identical springs end to end are half as stiff (Wikipedia 'Spring (device)', https://en.wikipedia.org/wiki/Spring_(device)).
  - Maximum operating temperatures for common spring wires: music wire and carbon steels about 250 °F (121 °C); oil-tempered chrome silicon 475 °F (246 °C); stainless 302/304 and 316 about 550 °F (288 °C); 17-7 PH stainless 650 °F (343 °C); phosphor bronze 200 °F (93 °C) (Lee Spring, https://www.leespring.com/spring-materials).
  - Extension springs that balance heavy things (e.g. garage doors) should always have a safety cable running through the middle, tied to solid points at both ends, so a broken spring cannot fly (Wikipedia 'Garage door', https://en.wikipedia.org/wiki/Garage_door).
  - Repelling magnets as a spring (magnetic spring): the force 'doesn't increase in a straight line like the spring'; it stays very weak for most of the travel and then rises very quickly. In K&J's scale pogo-stick test two repelling ring magnets stored less than 0.32 J (2.8 in-lb) when fully compressed, against about 1.65 J (14.6 in-lb) for the coil spring; adding more magnets raised the force but the stack's thickness cut the travel (K&J Magnetics, https://www.kjmagnetics.com/blog/magnetic-springs).

### When to use it

- **everyday_examples**: 
  - the compression spring inside a click ballpoint pen (Wikimedia Commons has a whole category of 'Ballpen springs')
  - the torsion spring in a wooden clothes peg and in a classic snap mousetrap (Wikipedia 'Torsion spring')
  - the extension springs around the edge of a trampoline and on the side of an up-and-over garage door (Lee Spring; Wikipedia 'Garage door')
  - the coiled battery contact spring in a TV remote or torch (Wikipedia 'Spring (device)')
- **when_to_use**: Whenever something needs to spring back by itself: return buttons, triggers, levers, latches and lids to their rest position; keep a belt, cable or clamp under steady tension; press a detent ball, pawl or friction pad into place; balance a hinged part; or cushion a bump. Choose a compression spring for a push (it is also safest, because when it breaks the pieces are still trapped between the parts), an extension spring for a pull between two points (it needs no guide and its initial tension holds things firmly shut), and a torsion spring to turn something back about a hinge pin, such as a spring-loaded lid, door or clip. For a maker, a bought steel spring is almost always better than a printed or improvised one.
- **when_not_to_use**: Not where there is very little height: use wave springs or disc (Belleville) springs, which give the same force in much less space. Not for long travel with nearly constant force: use a constant-force spring or a gas spring. Not for long-lasting force made from printed plastic: plastic creeps and relaxes, so use a steel spring or at least PETG and accept a short life; for a printed one-piece spring a flat leaf spring or ortho-planar spring prints better than a coil. Not for twisting a torsion spring the 'opening' way: turn it round or use a spring wound the other hand. Not as a shock absorber on its own: a spring stores and returns energy and will bounce, so add a damper. Not for precise positioning: a spring only gives force, so use a stop, detent or locating feature to set the position. Not where the push has to work across a gap or through a wall with no contact: repelling magnets can act as a spring (a magnetic spring) and work across an air gap, though they cost more than coil springs and their force stays weak until they are close together, then rises very steeply (K&J Magnetics 'Magnetic springs'); see Magnetic detent.
- **environment_limits**: Heat: music wire and carbon-steel springs are rated to about 121 °C (250 °F), stainless 302/304 and 316 to about 288 °C, 17-7 PH stainless to about 343 °C and phosphor bronze to about 93 °C (Lee Spring); above these they take a set and lose force. Water and corrosion: bare music wire rusts (it is sold uncoated, or zinc or cadmium plated; Lee Spring), so use stainless steel outdoors and 316 in salt water (Lee Spring notes it resists chloride attack); humid coastal air noticeably shortens garage door spring life (Wikipedia 'Garage door'). Fatigue: springs that cycle a lot must be stressed less; stock extension spring maximum loads are set for about 50,000 cycles (MW Components). Over-stress: a spring squashed or stretched too far takes a permanent set (gets shorter or longer) and loses force (Lee Spring). Printed plastic springs creep under steady load and lose most of their springiness over months (Hackaday, 2026, reader comments), and soften at much lower temperatures than steel.
- **safety_notes**: Stored energy: large springs, especially garage door torsion springs, are extremely dangerous; many people have been injured or killed adjusting them, and a broken spring or failed part can fly off or let a heavy door fall (Wikipedia 'Garage door'); leave these to trained people. Extension springs on doors and heavy balances need a safety cable through the middle (Wikipedia). Winding or cutting spring wire: the wire whips or stabs when tension is released and cut ends are sharp; wear eye protection and cut-resistant gloves (warnings on the Printables 'Extension spring jig' and 'Metal Torsion Spring Maker' pages). Small compression springs can shoot out when a part is taken apart; point it away from your face. Pinch points between coils of extension springs and between a torsion spring's legs.
- **common_failures**: (1) Buckling: a long, thin compression spring bows sideways and can pop out; guide it on a rod or in a hole, or use a shorter, fatter spring (Compression Spring Store; Lee Spring). (2) Binding: the spring rubs or jams because its diameter grows (compression) or shrinks (torsion) under load; leave clearance (Lee Spring; RoyMech). (3) Bottoming out (going solid) and taking a set: squashed until all coils touch, it gets permanently shorter and weaker; add a hard stop or pick a spring with more travel (Lee Spring white paper). (4) Broken hooks on extension springs: the hook is the most stressed point; keep the pull in line and choose a spring with a lower stress or a better end (MW Components). (5) Torsion spring loaded the wrong way (unwinding), or a mandrel that is too big: over-stress and early breakage; check the direction of wind and size the rod to about 90% of the loaded inside diameter (Lee Spring). (6) Fatigue cracks after many cycles, and corrosion; use stainless or coated springs and keep stresses low. (7) Plastic springs slowly losing their push (creep); replace with steel.
- **related**: 
  - Wave and disc springs (compact axial springs): give the same push as a coil spring in much less height, but with shorter travel
  - Constant-force spring (spring-return reel): a rolled steel strip that pulls with almost the same force over a long distance, unlike a coil spring whose force rises as it stretches
  - Spiral power spring (clock spring): a flat strip wound in a flat spiral that gives a fairly steady turning force over large angles or several whole turns (Wikipedia 'Torsion spring'); a helical torsion spring is for smaller angles
  - Gas spring: a sealed cylinder of compressed gas that pushes over long travel with nearly steady force and some built-in damping
  - Printed leaf spring (flat cantilever spring) and ortho-planar spring: springs that are easy to 3D print or laser cut in one piece, instead of a wound wire
  - Ball detent (spring plunger) and self-closing (spring) hinges: ready-made parts that use a coil spring inside for clicking or closing
  - Wrap-spring clutch: uses a close-wound coil spring gripping a shaft as a one-way clutch rather than as an energy store
  - Spring balancer (gravity compensation): arranges coil springs so they cancel the weight of an arm or lid at every angle
  - Shock-corded sectional pole and elastic cord: rubber is a softer, cheaper tension spring that also damps, but it ages and creeps faster than steel
  - Magnetic detent: magnet click stops; repelling magnets can also be used as a spring (magnetic spring), which works across an air gap but whose force rises steeply only at the end of travel (K&J Magnetics)
  - Battery holder and battery contacts: a coil (often conical) spring presses on one end of a cell as its contact
  - Pogo pin: a spring-loaded contact pin, where a tiny compression spring inside a tube pushes a contact pin out against a pad

### Pictures, videos and models

- **links**: 
  - [Helical compression spring parameters.svg (Wikimedia Commons, Yapparina)](https://commons.wikimedia.org/wiki/File:Helical_compression_spring_parameters.svg): Labelled diagram of a helical compression spring and its main dimensions and symbols *(licence: CC0 1.0 (public domain dedication))*
  - [Solid height of helical compression spring.svg (Wikimedia Commons, Yapparina)](https://commons.wikimedia.org/wiki/File:Solid_height_of_helical_compression_spring.svg): Diagram of a compression spring squashed until its coils touch (solid height) *(licence: CC0 1.0 (public domain dedication))*
  - [Ressort de traction.svg (Wikimedia Commons, M00tty)](https://commons.wikimedia.org/wiki/File:Ressort_de_traction.svg): Drawing of a helical extension (tension) spring with its end loops *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licensed))*
  - [Long arm helical torsion spring.svg (Wikimedia Commons, Yapparina)](https://commons.wikimedia.org/wiki/File:Long_arm_helical_torsion_spring.svg): Diagram of a helical torsion spring with long straight arms (legs) *(licence: CC0 1.0 (public domain dedication))*
  - [Compare the Parts: Compression Spring v. Extension Spring v. Torsion Spring (Radwell International, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=GuV63yW01TY): Video comparing the three coil spring types and what each is used for *(licence: link only)*
- **make_it_yourself**: 
  - [Spring Factory 1.2 by vbaillet (Thingiverse)](https://www.thingiverse.com/thing:5171637): Two-part printed jig with a threaded mandrel for hand-winding evenly spaced steel compression springs of about 9 mm diameter from 0.8-1.2 mm piano wire (featured on Hackaday, 2022) *(licence: CC BY-NC 4.0)*
  - [Spring Factory (Parametric) by jshessen (Printables)](https://www.printables.com/model/138561-spring-factory-parametric): OpenSCAD remix of the Spring Factory in which the dimensions can be changed for other spring and wire sizes (uses the BOSL library) *(licence: CC BY-NC)*
  - [Metal Torsion Spring Maker by adjective (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1004393-metal-torsion-spring-maker): Printed handle with steel pins for bending your own steel torsion springs from 0.8-1.6 mm stainless spring wire; includes safety warnings *(licence: CC BY)*
  - [Extension spring jig by Kabacis (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/468530-extension-spring-jig): Jig for winding small close-wound extension springs (tested with 0.8 mm wire and about 3 mm inside diameter before springback) *(licence: CC BY)*
  - [3D Printed Coil Spring (PETG) by Ruda (Printables)](https://www.printables.com/model/625029-3d-printed-coil-spring-petg): A fully printed 20 cm long, 2 cm diameter coil spring printed in PETG at 100% infill, to feel how a plastic coil spring behaves *(licence: CC BY-SA)*
  - [Parametric Supported Spring by random.ae (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/831166-parametric-supported-spring): OpenSCAD coil spring with built-in support along its length, designed to print consistently in PETG *(licence: CC BY-NC-SA)*
- **diagram_idea**: Three springs side by side with arrows: a compression spring being pushed shorter between two plates (with a guide rod and a note 'never let the coils touch'), an extension spring being pulled longer between two hooks (with the hook highlighted as the weak point), and a torsion spring on a rod whose arm is turned so the coils wind tighter (with a green arrow for the right way and a red arrow for the wrong way).
- **sources**: 
  - https://en.wikipedia.org/wiki/Coil_spring (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Spring_(device) (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Torsion_spring (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Garage_door (read as raw wikitext)
  - https://www.leespring.com/sites/default/files/pdf/Lee%20Spring%20-%20WhitePaper%20-%20Spring%20Design%20General%20Consideration_US.pdf (Lee Spring white paper 'Compression Spring Design and General Considerations')
  - https://www.leespring.com/learn-about-compression-springs
  - https://www.leespring.com/learn-about-extension-springs
  - https://www.leespring.com/learn-about-torsion-springs
  - https://www.leespring.com/spring-materials
  - https://roymech.org/Useful_Tables/Springs/Springs_helical.html
  - https://roymech.org/Useful_Tables/Springs/Springs_Torsion.html
  - https://www.engineersedge.com/spring_comp_calc_k.htm
  - https://www.compressionspring.com/slenderness-ratio-making-your-spring-buckle.html
  - https://www.mwcomponents.com/how-to-select-an-extension-spring (MW Components / Century Spring, 'How to Select an Extension Spring')
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://hackaday.com/2018/11/14/3d-print-springs-with-hacked-gcode/
  - https://hackaday.com/2022/01/28/3d-printed-jig-makes-custom-springs-a-snap/
  - https://www.thingiverse.com/thing:5171637
  - https://commons.wikimedia.org/wiki/File:Helical_compression_spring_parameters.svg
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://commons.wikimedia.org/wiki/File:Solid_height_of_helical_compression_spring.svg
  - https://commons.wikimedia.org/wiki/File:Ressort_de_traction.svg
  - https://commons.wikimedia.org/wiki/File:Long_arm_helical_torsion_spring.svg
  - https://commons.wikimedia.org/wiki/Category:Coil_springs
  - https://www.youtube.com/watch?v=GuV63yW01TY (verified via YouTube oEmbed)
  - https://api.printables.com/graphql/ (Printables models 625029, 138561, 1004393, 468530, 110017 and 831166 read via the public API)
  - https://www.kjmagnetics.com/blog/magnetic-springs

### Other info

- **Fields with unverified parts:** making_tips_3d_printing

## 282 Elastic band and elastic cord springs (elastomer springs)

*springs & energy storage.* Rubber bands, elastic cord or rubber tubing used as stretchy springs, for example to pull a printed finger straight again; they stretch much further than steel springs but creep and perish

### What it is

- **plain_name**: A stretchy loop or cord of rubber (a rubber band, hair tie, O-ring, bungee cord or piece of rubber tubing) used instead of a metal spring to pull a part back into place, for example to pull a printed finger straight again after a string has bent it
- **term**: Elastomer tension spring: elastic band, elastic (shock) cord or rubber tubing used as an extension spring
- **aliases**: 
  - rubber band, elastic band (Wikipedia 'Rubber band')
  - elastic cord, shock cord, bungee cord (also spelled bungie or bungy); octopus strap or occy strap in Australia (Wikipedia 'Bungee cord')
  - rubber tubing bands: latex tubing, surgical tubing, slingshot or catapult bands, speargun bands (Wikipedia 'Slingshot', 'Speargun')
  - O-ring used as an elastic band (the OpenFlexure microscope calls its Viton O-rings 'elastic bands')
  - orthodontic elastics, intermaxillary elastics (small medical-grade latex bands; Wikipedia 'Elastics (orthodontics)')
  - ranger bands, snoopy loops (loops cut from car, motorcycle or bicycle inner tubes; Wikipedia 'Rubber band')
  - rubber motor (a twisted rubber band that powers a model aircraft propeller; Wikipedia 'Rubber band')
  - elastomer spring, rubber spring
  - hair tie, ponytail elastic; stretch cord, beading elastic
  - Viton (brand) O-ring, i.e. a fluoroelastomer (FKM) O-ring used as a band (Wikipedia 'Ozone cracking'; OpenFlexure)
- **family**: springs & energy storage
- **other_families**: tensioning, reels & take-up, cord, strap, webbing & textile hardware
- **one_liner**: A rubber band, elastic cord or length of rubber tubing stretched between two anchor points so that it pulls them together: a cheap, very stretchy pull spring that you can cut, tie or swap by hand, but whose pull fades over time and which perishes in heat, sunlight and ozone.
- **complexity**: Single piece: a closed loop (rubber band, O-ring, hair tie) or a length of cord or tubing. To work it needs two anchor points on the parts: hooks, posts with a lip, notches, grooves, or holes with a knot tied behind them, and sometimes smooth tunnels or guides to route it (e-NABLE printed hands run elastic cord through tunnels from each fingertip into the palm; e-NABLE Phoenix v2). Shock cord is itself a small assembly: many rubber strands inside a woven cotton or polypropylene cover (Wikipedia 'Bungee cord'), sometimes with end hooks, cord locks or crimped fittings.
- **how_it_works**: Rubber is a tangle of long, cross-linked chain molecules. Stretching it pulls the chains straighter; they 'want' to return to their tangled shape, so the band pulls back on whatever it is hooked to (an entropy effect, which is also why a stretched band warms up when stretched and contracts when heated; Wikipedia 'Rubber band', 'Gough-Joule effect'). Rubber can be stretched to several times its own length (Wikipedia 'Rubber elasticity' says up to about 10 times) and still return almost to its old length, which is far more stretch than a steel spring allows. The pull does not rise in a straight line with the stretch (it does not follow Hooke's law), and the band pulls less on the way back than on the way out (hysteresis), so a little energy is lost as heat each time (Vernier; Penn State interactive). A loop hooked over two posts works as two strands side by side, and several bands side by side add their pulls, which is how makers tune the force: 'need more tension? use more/thicker rubber bands' (Makers Making Change, Printables).

### Finder attributes

- **job**: 
  - store energy: stretch it and it pulls back, returning a part to its rest position, e.g. the elastic cords that straighten the fingers of printed prosthetic hands after the cable that bends them is released (Frontiers in Robotics and AI, 2021), or launching something (rubber-band catapults and cars)
  - tighten and hold tension: keeps a nut pulled against a screw so a mechanism has no wobble (OpenFlexure microscope), holds a printed clamp shut (rubber band spring clamp), or keeps a cord taut
  - join and hold: bundles things together (Wikipedia 'Rubber band') or holds a chain of parts together under tension, e.g. ball-jointed dolls strung with thick elastic (Wikipedia 'Ball-jointed doll')
- **motion**: flex: it stretches along its own length. In practice it is used at about 2-3 times its relaxed length: orthodontic elastics are rated at 3 times their diameter (Clin Exp Dent Res 2025), and shock cord stretches about 120% +/- 15%, i.e. to about 2.2 times its length (Knot & Rope Supply). Rubber can be stretched much further, up to about 10 times in principle (Wikipedia 'Rubber elasticity'); a band in a Penn State demonstration was slowly stretched to almost 5 times. It can also wrap round pins and pulleys, and be twisted (rubber motor)
- **degrees_of_freedom**: 1 in intended use: it only pulls along the straight line between its two anchors. Because it is floppy it does not hold anything in place sideways and it cannot push; it bends freely round pins, pulleys and tunnels
- **special_behaviour**: 
  - tensioning (takes up slack and holds): keeps a fairly steady pull on a part as it moves or wears; in the OpenFlexure microscope the band 'tightens up the mechanism' so it moves smoothly and is less wobbly (OpenFlexure actuator assembly guide)
  - none of the other listed behaviours on its own: it is the cheap 'engine' inside many printed latches, clamps, toys and prosthetic fingers
  - built-in damping: because it loses some energy on every stretch (hysteresis), it bounces less than a steel spring (Vernier; Penn State interactive)
- **holding_principle**: spring force (the stretched band pulls the parts together); when it is wrapped round things to bundle or grip them, also friction or clamping (the band squeezes and its rubbery surface grips)
- **input_output**: not applicable: it is a spring, not a transmission (a twisted rubber 'motor' does store turning energy and give it back to a propeller in rubber-powered model aircraft and boats; Wikipedia 'Rubber band')
- **power**: passive (no power needed)
- **removability**: tool-free quick release: a band slips off its hooks or posts by hand, and a tied cord is undone or cut. Exception: a band or O-ring embedded in a print during a pause cannot be replaced when it fails (comment on Hackaday, 2023), so that design is effectively permanent
- **reuse_cycles**: many times for fitting and removing, but the band itself is a wear part with a limited life: the OpenFlexure team found ordinary rubber bands 'perished after weeks to months (regardless of use)', while Viton O-rings let the microscope run about 30,000 cycles of stage motion over several months without failure (Collins et al., Biomedical Optics Express 2020). Plan for it to be replaced
- **tools_needed**: Usually none. Long-nose pliers or a small hook help stretch a small band onto a post (Joystick Fidget instructions, Printables); a printed insertion tool for bands hidden inside a part (OpenFlexure 'elastic band tool'); scissors for cord and tubing; a secure knot for cord, e.g. the improved clinch knot used on printed hands (Frontiers in Robotics and AI, 2021)
- **seal**: none
- **load**: Light to medium, and only in pull. Orthodontic elastics are rated from 2 oz (about 0.56 N) to 8 oz (about 2.2 N) (Wikipedia 'Elastics (orthodontics)'); a printed-hand finger model assumed an elastic cord of about 1,000 N/m with forces under 25 N (Frontiers in Robotics and AI, 2021); 1/8 in (3 mm) shock cord has a breaking strength of about 100 lb (about 445 N), and safe working loads for rope are usually 1/10 to 1/4 of the breaking strength (Knot & Rope Supply). It cannot push and does nothing in shear or twist; it is weakest at knots (which can reduce rope strength by up to 50%; Knot & Rope Supply), at nicks and where it bends over a sharp edge
- **adjustable**: Yes: add or remove bands, use a thicker or shorter band, move an anchor post, or re-tie a cord shorter or at a different tie-off point (the e-NABLE Raptor Reloaded hand offers two tie-off options for its elastics). The stiffness of one given band cannot be changed
- **play_and_precision**: not applicable as a locating part: it only supplies a pull. It is, however, a good way to remove play: the OpenFlexure microscope uses its bands to pull a nut down onto a screw so the mechanism is tight and smooth. Its force is not precise: it depends on how far and how often it has been stretched (hysteresis; the first stretches soften rubber, the Mullins effect, Wikipedia), on temperature, and on time (latex orthodontic elastics held at 3 times their diameter at 37 degC lost 16% of their force in 2 h and 31% in 48 h; Clin Exp Dent Res 2025). It tolerates large misalignment because it is floppy
- **access_needed**: not applicable for most uses: it is fitted while the parts are assembled. You need to reach both anchor points, or route the cord through a tunnel and tie it off at an end you can reach (e-NABLE hands tie their finger elastics off in the palm)
- **materials**: Natural rubber (latex) for most rubber bands, chosen for its 'superior elasticity' (Wikipedia 'Rubber band'); synthetic elastomers for larger or tougher bands: EPDM (outstanding resistance to ozone and sunlight, -50 to +150 degC), silicone (-100 to +315 degC, but poor tear and abrasion resistance), neoprene and nitrile (Pooley 'Common Properties of Rubber Elastomers'); fluoroelastomer (FKM, Viton (brand)) O-rings resist ozone and are used by OpenFlexure, which warns they must be Viton, not nitrile (OpenFlexure troubleshooting). Shock cord: rubber strands in a woven cotton, polypropylene or polyester cover (Wikipedia 'Bungee cord'). Printed TPU bands are a light-duty option (one OpenFlexure contributor reports a printed TPU band 'working great' so far). The anchors can be any printed plastic, wood or metal; keep natural rubber away from oils, fuels and solvents (poor resistance; Pooley)
- **maker_difficulty**: easy: buy bands or cord, add hooks, posts or tunnels to the printed part, and stretch it on by hand. The real design work is making the anchors smooth and secure and making the band easy to replace

### Making it

- **processes**: 
  - off-the-shelf part: rubber bands, O-rings, shock cord and latex tubing are the usual choice
  - 3D print (FDM): the parts with the hooks, posts, grooves and cord tunnels; printed TPU bands for light duty
  - 3D print (resin): the same anchor features, with smooth surfaces that are kind to bands
  - woodwork, laser cut, CNC: notches, pegs and holes to hook bands on or tie cord to
- **print_in_place**: partly: the printed parts with their hooks, posts and tunnels can print in one go, but the band or cord is always a separate bought part added afterwards. A band can be dropped in during a print pause (Hackaday, 2023), but then it cannot be replaced when it perishes
- **making_tips_3d_printing**: 1) Buy the stretchy part, print the anchors. A printed plastic spring slowly loses its force: 'plastic always permanently deforms under tension' and PLA makes a very poor spring (Hackaday, 2026, article and comments), whereas a rubber band costs almost nothing and is easy to replace. 2) Hooks and posts: give each post a lip, groove or mushroom head so the band cannot slide off, and round every edge the band touches; rubber cracks first where it is strained most, e.g. at sharp corners (Wikipedia 'Ozone cracking'). 3) Tunnels for cord: make them wide and smooth with gentle bends; the e-NABLE Phoenix v2 remix widened all its cable tunnels and added tunnels so an elastic cord runs 'all the way from the fingertip up into the palm', tied to a bar at the thumb base (e-NABLE Phoenix v2 page). 4) Design for replacement: make bands reachable, or add a printed insertion tool and internal hooks the band clicks onto, as the OpenFlexure microscope does (its band 'should click twice - once for each side'). 5) Preload it: choose a band that is already stretched when the part is at rest, so it still pulls at the end of travel; size the working stretch to the band (orthodontic elastics are rated at 3 times their diameter; shock cord stretches about 120% at most; Knot & Rope Supply). 6) Tune the force with several bands side by side rather than one tight band; it also gives a spare if one breaks (Rubber Band Spring Clamp and Rubber Band Clamp models on Printables: 'add as many rubber bands as you like to get the desired clamping force'). 7) Heat: don't embed bands where hot plastic or a hot environment will cook them; natural rubber's useful range ends at about +82 degC (Pooley), and a Hackaday commenter worried about heat from the nozzle when embedding bands. 8) For cord, use a secure knot such as the improved clinch knot (Frontiers in Robotics and AI, 2021). 9) Common printed-part failures: post snaps at a layer line, band cut by a sharp printed edge, cord jams in a rough or too-narrow tunnel. *(unverified parts omitted)*
- **off_the_shelf_parts**: Rubber bands, sized by number in the US (e.g. #33 = 3-1/2 x 1/8 in, #64 = 3-1/2 x 1/4 in, both 1/32 in thick; Wikipedia 'Rubber band'); weather-resistant rubber bands, extra-long rubber bands and rubber banding (McMaster-Carr 'Rubber Bands'); O-rings in FKM/Viton (brand), EPDM, silicone or nitrile, e.g. 30 mm x 2 mm Viton O-rings (OpenFlexure parts list, Collins et al. 2020); elastic cord, also sold as shock cord or bungee cord, in 1/8 in (3 mm), 1/4 in and larger sizes (Knot & Rope Supply; 3 mm polypropylene shock cord on a printed hand in Frontiers 2021); bungee cords with hooks (McMaster-Carr); latex tubing (surgical tubing, slingshot bands); orthodontic elastics in light to extra-heavy force ratings (Wikipedia 'Elastics (orthodontics)'); hair ties; cord locks and hooks for elastic cord ends
- **rules_of_thumb**: 
  - Stretch range: elastic (shock) cord stretches about 120% +/- 15%, so 6 in becomes about 13.2 in (Knot & Rope Supply, https://www.knotandrope.com/products/1-8-shock-cord-1000-spool); orthodontic latex elastics are rated at 3 times their own diameter (https://pmc.ncbi.nlm.nih.gov/articles/PMC11783226/). Design so the band works inside this range, with some stretch already on at rest.
  - Expect the pull to fade: latex elastics held at 3 times their diameter at 37 degC lost 16% of their force after 2 h, 23% after 8 h, 28% after 24 h and 31% after 48 h in the lab (more in the mouth), with most of the loss in the first 2 h (Clin Exp Dent Res 2025, https://pmc.ncbi.nlm.nih.gov/articles/PMC11783226/). So size a band for the force you need after it has settled, not when new.
  - Force is not proportional to stretch: an idealised rubber band follows F = K (L/L0 - (L0/L)^2), rising steeply at first, and the unloading curve lies below the loading curve (Penn State interactive, https://phys23p.sl.psu.edu/~mrg3/interactives/EJSS_mrg/ejss_model_Bungee_Hysteresis_Thermal_V2/ElasticHysteresisIntroduction.html; Vernier, https://www.vernier.com/vernier-ideas/elastic-hysteresis-of-a-rubber-band/).
  - Rope-style safety margin for cord: working loads are usually 1/10 to 1/4 of the average breaking strength, and knots can reduce strength by up to 50% (Knot & Rope Supply, https://www.knotandrope.com/products/1-8-shock-cord-1000-spool).
  - Lifetime: ordinary rubber bands perished in weeks to months whether used or not; Viton O-rings (30 mm inside diameter, 2 mm thick, about 75 Shore A, able to stretch at least 150%) lasted about 30,000 cycles over several months (Collins et al. 2020, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7249832/fullTextXML; OpenFlexure troubleshooting, https://build.openflexure.org/openflexure-microscope/master/troubleshooting.html).
  - Temperature ranges by rubber type: natural rubber about -55 to +82 degC, EPDM -50 to +150 degC, nitrile and neoprene -40 to +135 degC, silicone -100 to +315 degC (Pooley, https://www.pooleyinc.com/wp-content/uploads/Common-Properties-of-Rubber-Elastomers.pdf).

### When to use it

- **everyday_examples**: 
  - a rubber band round a bundle of letters or a rolled-up newspaper (Wikipedia 'Rubber band')
  - bungee cords with hooks holding luggage on a roof rack (Wikipedia 'Bungee cord')
  - a slingshot (catapult) powered by latex tubing or flat bands (Wikipedia 'Slingshot')
  - the elastic in braces on teeth (orthodontic elastics), and the thick elastic that holds ball-jointed dolls together (Wikipedia)
- **when_to_use**: When you need a pull spring that is cheap, quick to try and easy to change: returning a printed finger, lever, latch or trigger to its rest position; holding a printed clamp or lid shut; keeping a nut or slider pressed against a screw to take out wobble; powering toys, catapults and rubber-band cars; or holding a string of parts together (dolls, tent-pole style sections). It is especially good when the part must stretch a long way compared with its size, when you want to tune the force by simply adding bands, when some damping is welcome, or when a soft, quiet pull is safer than a stiff steel spring.
- **when_not_to_use**: Not where the force must stay the same for months or years, or where failure matters: rubber loses force and perishes, so use a steel extension spring (see Coil spring) or a constant-force spring. Not in heat, strong sunlight, ozone (near electric motors) or oil: use a steel spring, or at least an EPDM, silicone or Viton band. Not where it must push: use a compression spring. Not for precise or repeatable force (e.g. a measuring device): rubber drifts with time and temperature. Not where a snapping band could hit someone's face or eyes. Not hidden inside a part where it can't be replaced.
- **environment_limits**: Heat: natural rubber's useful range is about -55 to +82 degC (Pooley); the e-NABLE Phoenix v2 remix replaced 'all the rubber bands' because they do not survive tropical heat. Sunlight, oxygen and ozone: natural rubber is 'damaged by aging, sunlight, oil and perspiration' (Wikipedia 'Natural rubber'); tiny traces of ozone crack natural, nitrile and styrene-butadiene rubbers, and cracks form in stretched parts at right angles to the stretch (Wikipedia 'Ozone cracking'); EPDM, fluoroelastomers (Viton), neoprene, silicone and polyurethanes resist ozone. Store spares cool, dark and away from motors and other ozone sources (APG: never above 120 degF, about 49 degC). Time: even indoors, rubber bands perished in weeks to months (Collins et al. 2020), and held stretched they lose force over hours (stress relaxation; Clin Exp Dent Res 2025) and slowly get longer under a steady load (creep; Wikipedia 'Stress relaxation'). Cold: below its glass transition rubber goes stiff and stops springing back, as with the Challenger O-rings (Wikipedia 'Natural rubber'). Warmth: a stretched band pulls harder when heated (Gough-Joule effect). Water: natural rubber absorbs water and its elasticity deteriorates (Wikipedia 'Elastics (orthodontics)').
- **safety_notes**: Snap-back: a band or bungee cord that slips or breaks can lash back and cause serious eye or face injuries (Wikipedia 'Bungee cord'); in slingshots a band that fails at the fork end flies back at the user's face (Wikipedia 'Slingshot'). Stretch bands away from your face, wear safety glasses for strong bands and tubing, and replace cracked bands. Latex allergy: some people react seriously to natural rubber latex; latex-free bands made from synthetic rubber exist (Wikipedia 'Natural rubber', 'Rubber band'). Tight bands round fingers or limbs cut off blood flow (this is how elastration rings work; Wikipedia 'Rubber band'). Catapults and band-powered launchers store a lot of energy: never aim them at people or animals.
- **common_failures**: 1) Perishing: the band goes sticky, hard or cracked and then snaps, usually sooner in heat, sunlight or near motors; replace on a schedule or switch to EPDM, silicone or Viton (Collins et al. 2020; Wikipedia 'Ozone cracking'). 2) Losing force (stress relaxation and creep): a finger or latch no longer fully returns; use a band with more stretch on at rest, add a second band, or re-tie the cord tighter (Clin Exp Dent Res 2025). 3) Cut or nicked by sharp printed edges or rough layer lines, then tearing: round and smooth every contact point (silicone in particular has poor tear resistance; Pooley). 4) Slipping off a post or hook: add a lip, groove or keeper. 5) Breaking at a knot: knots can halve the strength of rope (Knot & Rope Supply); use a proper knot and leave a tail. 6) Sticking in tunnels: friction stops the part returning fully; widen and smooth the tunnel (e-NABLE Phoenix v2 widened its tunnels). 7) Wrong material: nitrile O-rings crack in ozone and failed in OpenFlexure, which requires Viton (OpenFlexure troubleshooting). 8) Band embedded in the print cannot be replaced, so the whole part is scrap when it fails (Hackaday comment).
- **related**: 
  - Coil spring (extension spring): steel, steady and predictable force for many years, but much less stretch and needs hooks; the long-life choice
  - Constant-force spring: pulls almost the same force over a long distance, where a rubber band's force changes a lot with stretch
  - Printed leaf spring and other printed compliant springs: printed in one piece with the part, but plastic creeps and loses force (PLA especially)
  - Shock-corded sectional pole: uses elastic cord only to pull tube sections home
  - Spiral power spring (clock spring): a flat steel spiral that stores turning energy, where a rubber motor stores it by twisting
  - Elastomer isolation mount (rubber bobbin, grommet): rubber used squashed or sheared to soak up vibration rather than stretched as a spring
  - Series-elastic coupling: puts a deliberate spring (sometimes elastic) between a motor and its load to measure and soften force
  - Pneumatic artificial muscle (McKibben muscle): a rubber tube inside a braid that pulls when pumped up with air
  - Stopper knots and cord-end anchors: a knot behind a hole or a printed cord-end anchor to tie off elastic cord, as at the palm end of printed hands

### Pictures, videos and models

- **links**: 
  - [RubberBand.jpg (Hao-Nhien Q. Vu, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:RubberBand.jpg): Diagram of how a rubber band is measured: flat length, cut width and wall thickness *(licence: Public domain)*
  - [Ozone cracks in tube1.jpg (Peterlewis, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ozone_cracks_in_tube1.jpg): Photo of ozone cracking in natural rubber tubing: the typical way rubber perishes, with cracks across the direction of strain *(licence: Public domain)*
  - [Bungee Cord PICT6882a.jpg (Jmb, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bungee_Cord_PICT6882a.jpg): Photo of small bungee cords with metal hooks (elastic cord in a woven cover) *(licence: CC BY 2.5)*
  - [Modeling Rubber Band Cords Beyond Hooke's Law (Penn State interactive)](https://phys23p.sl.psu.edu/~mrg3/interactives/EJSS_mrg/ejss_model_Bungee_Hysteresis_Thermal_V2/ElasticHysteresisIntroduction.html): Measured force-stretch graphs of a rubber band stretched to almost 5 times its length and released, showing the curved, looping (hysteresis) behaviour *(licence: link only)*
  - [OpenFlexure Microscope: Actuator assembly](http://rwb27.github.io/openflexure_microscope/docs/1_actuator_assembly.html): Step-by-step photos of fitting Viton O-ring 'elastic bands' into a printed mechanism with a printed insertion tool, so they pull a nut down onto a screw *(licence: link only (licence not checked))*
- **make_it_yourself**: 
  - [Rubber Band Spring Clamp (LoboCNC, Printables)](https://www.printables.com/model/617245-rubber-band-spring-clamp): Spring clamp printed flat in two halves held together by rubber bands; add bands to get the clamping force you want; scales from 50% to 100% *(licence: CC BY-SA)*
  - [Rubber Band Clamp (Makers Making Change, Printables)](https://www.printables.com/model/476915-rubber-band-clamp): Simple printed clamp tensioned by rubber bands ('need more tension? use more/thicker rubber bands!'), needs 3 bolts and nuts *(licence: CC BY-SA)*
  - [Spring latch sliding door bolt lock: rubber band, metal spring, 3D printed spring (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236902-spring-latch-sliding-door-bolt-lock-rubber-band-me): The same sliding bolt in three versions so you can compare a rubber band, a metal spring and a printed spring; the designer notes rubber bands work smoothly but 'get brittle and need to be replaced' *(licence: CC BY-NC-SA)*
  - [Joystick Fidget (Using Rubber Band Spring) (Eric Woo-Shem, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1347249-joystick-fidget-using-rubber-band-spring): Self-centring joystick sprung by two small orthodontic-size rubber bands crossed over hooks *(licence: CC BY)*
  - [Rubber Band Catapult (Vojtech Ruzicka, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/145372-rubber-band-catapult): Small printed catapult powered by one rubber band, to feel how much energy a band stores (wear glasses; never aim at people) *(licence: CC BY-NC)*
  - [The Raptor Reloaded (e-NABLE)](https://enablingthefuture.org/upper-limb-prosthetics/raptor-reloaded/): Open-source printed prosthetic hand whose fingers are bent by non-stretchy cords and pulled straight again by elastic cords; links to files and assembly instructions *(licence: not stated on the page (e-NABLE acceptance terms apply))*
- **diagram_idea**: A printed finger with two strings: a non-stretchy cord on the palm side that bends it when pulled, and a rubber band on the back side (shown relaxed and stretched) that pulls it straight again, with a small force-versus-stretch graph showing the curved loading line, the lower unloading line, and a dashed line showing the pull fading after a day.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rubber_band (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Bungee_cord (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Natural_rubber (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Ozone_cracking (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Rubber_elasticity (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Mullins_effect (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Stress_relaxation (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Gough%E2%80%93Joule_effect (read as raw wikitext)
  - https://en.wikipedia.org/wiki/EPDM_rubber (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Elastics_(orthodontics) (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Slingshot (read as raw wikitext)
  - https://en.wikipedia.org/wiki/Speargun (read as raw wikitext; latex tubing bands about one third of the barrel length)
  - https://en.wikipedia.org/wiki/Ball-jointed_doll (read as raw wikitext)
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.594196/full (Cabibihan et al., 'Suitability of the Openly Accessible 3D Printed Prosthetic Hands for War-Wounded Children', Frontiers in Robotics and AI, 2021)
  - https://enablingthefuture.org/phoenix-hand/ (e-NABLE Phoenix v2: rubber bands replaced for tropical heat; elastic cord tunnels)
  - https://enablingthefuture.org/upper-limb-prosthetics/raptor-reloaded/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11783226/ ('Force Degradation of Intermaxillary Latex Elastics: Comparative In Vitro and In Vivo Study', Clinical and Experimental Dental Research 2025, CC BY 4.0; full text also read via NCBI E-utilities)
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7249832/fullTextXML (Collins et al., 'Robotic microscopy for everyone: the OpenFlexure microscope', Biomedical Optics Express 2020, CC BY 4.0, PMC7249832)
  - https://build.openflexure.org/openflexure-microscope/master/troubleshooting.html
  - http://rwb27.github.io/openflexure_microscope/docs/1_actuator_assembly.html
  - https://gitlab.com/openflexure/openflexure-microscope/-/merge_requests/159 (printed TPU tension band; anecdotal report)
  - https://www.knotandrope.com/products/1-8-shock-cord-1000-spool (Knot & Rope Supply shock cord specifications and rope strength notes)
  - https://www.pooleyinc.com/wp-content/uploads/Common-Properties-of-Rubber-Elastomers.pdf (Pooley Inc., 'Common Properties of Rubber Elastomers')
  - https://knowledge.callapg.com/blog/how-long-do-elastomers-last (APG, 'The Shelf Life of Elastomers')
  - https://phys23p.sl.psu.edu/~mrg3/interactives/EJSS_mrg/ejss_model_Bungee_Hysteresis_Thermal_V2/ElasticHysteresisIntroduction.html
  - https://www.vernier.com/vernier-ideas/elastic-hysteresis-of-a-rubber-band/
  - https://hackaday.com/2023/02/26/rubber-bands-and-o-rings-give-3d-prints-some-stretch/ (article and comments)
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/ (article and comments)
  - https://www.mcmaster.com/products/rubber-bands/ (product family names only)
  - https://api.printables.com/graphql/ (Printables API: models 617245, 476915, 236902, 1347249, 145372)
  - https://commons.wikimedia.org/wiki/File:RubberBand.jpg
  - https://commons.wikimedia.org/wiki/File:Ozone_cracks_in_tube1.jpg
  - https://commons.wikimedia.org/wiki/File:Bungee_Cord_PICT6882a.jpg

### Other info

- **Fields with unverified parts:** making_tips_3d_printing

## 293 Variable-radius pulley (fusee, compound-bow cam)

*springs & energy storage.* A pulley or cam whose radius changes as it turns, evening out a spring's pull (a clock's fusee) or easing the pull at full draw (a compound bow's let-off)

### What it is

- **plain_name**: A pulley that isn't round, or is cone-shaped with a spiral groove, so the cord winds on at a changing distance from the centre; that changes the leverage as it turns, evening out a spring's pull or making a heavy pull go light near the end
- **term**: Variable-radius pulley (non-circular or spiral pulley), including the fusee and the compound-bow cam
- **aliases**: 
  - fusee, fusee and chain, fusee cone (Wikipedia, Fusee (horology); 507 Mechanical Movements no. 46)
  - going fusee (with maintaining power), drunken fusee (winds either way) (Wikipedia, Fusee)
  - spiral pulley, conical spiral pulley (patent US7677540)
  - non-circular pulley, noncircular pulley, differential noncircular pulleys (Fedorov and Birglen 2018; Ludovico et al. 2021)
  - tapered drum, conical drum (tapered-drum tool balancer; Hubbell Gleason (brand) spec sheet)
  - cam, cam wheel, eccentric, bow eccentrics; single cam, hybrid cam, dual cam, binary cam (Wikipedia, Compound bow)
  - let-off cam (Wikipedia, Compound bow)
  - logarithmic-spiral cam, Nautilus cam (exercise machines; Wikipedia, BowFlex, Inc.)
  - stackfreed (an older friction cam compensator; Wikipedia, Fusee)
- **family**: springs & energy storage
- **other_families**: gear trains, gearboxes & transmissions, motion conversion, tensioning, reels & take-up
- **one_liner**: A variable-radius pulley changes the leverage between a cord and a shaft as it turns, so a spring whose force changes can give a steady turning force (a clock's fusee, a tool balancer's tapered drum) or a force that follows a chosen curve (a compound bow's let-off, a gym machine's cam, a robot arm's gravity balancer).
- **complexity**: A few parts: the shaped pulley (a cone with a spiral groove, or a flat cam-shaped wheel with a groove), a cord, cable or chain, the spring it works against (a mainspring in a barrel, bow limbs, a coil spring), a shaft and bearings. Clock fusees add a ratchet and click inside the fusee, a winding stop and often maintaining power (Wikipedia, Fusee). Compound bows add a second cam or an idler wheel, buss cables and adjustable draw stops (Wikipedia, Compound bow).
- **how_it_works**: Turning force (torque) equals the cord's pull times the radius at the point where the cord leaves the pulley. In a fusee the strong pull of a fully wound mainspring acts on the narrow top of the cone, and as the spring weakens the chain comes off ever wider grooves, so the bigger radius makes up for the weaker pull and the clock gets a nearly constant driving force (Wikipedia, Fusee; 507 Mechanical Movements no. 46). A compound bow's cam does the opposite: the archer starts on the 'short' side of the cam at a mechanical disadvantage, then the cam rolls over so that near full draw the archer has the advantage and holds only a fraction of the peak force, the 'let-off' (Wikipedia, Compound bow). In general the pulley's outline can be calculated to turn a spring's straight-line force into almost any torque curve, as long as the outline stays convex so the cord can wrap it (Ludovico et al. 2021).

### Finder attributes

- **job**: 
  - store energy: shapes how a spring's stored energy is given out or taken in (steady in a fusee, peaking early in a compound bow) (Wikipedia, Fusee; Compound bow)
  - change speed or turning force: changes the leverage between cord and shaft continuously as it turns
  - change the kind of motion: turns a cord's straight pull into rotation of a shaft, with a ratio that changes along the stroke
- **degrees_of_freedom**: 1: the pulley turns on its shaft and the cord's position is tied to that angle
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): converts a cord pull into a shaft rotation with a ratio that changes on purpose along the stroke
  - one-way (moves freely one way, locks the other): a clock fusee has a ratchet between the fusee and its gear so winding doesn't drive the clock backwards (Wikipedia, Fusee); this is an add-on, not part of the pulley itself
  - tensioning (takes up slack and holds): a tapered-drum tool balancer keeps the tool hanging at the height it is left, taking up cable as it rises (Hubbell Gleason spec sheet)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes force from a spring to a shaft
  - shape (the parts interlock; form-fit): the cord or chain runs in a groove and its end is hooked or anchored to the pulley (Wikipedia, Fusee: round grooves for cords, rectangular for chains)
- **input_output**: Input: cord, cable or chain pull (straight line) <-> output: shaft torque (rotation); the ratio at any moment is the radius where the cord leaves the pulley, and it changes with angle. Fusee: converts the mainspring's falling pull into an almost constant torque (Wikipedia, Fusee; US7677540: 'converting the linearly increasing torque from a power spring into a constant torque'). Compound bow: peak weight early in the draw, then let-off, 'commonly between 65% and 80% of the peak weight', some over 90% (Wikipedia, Compound bow). Efficiency: friction losses are noticeable; a 3D-printed noncircular-pulley balancer with an idler pulley showed hysteresis of 17% of its torque range (Fedorov and Birglen 2018). Shaft arrangement: cord tangent to the pulley; in a fusee the barrel and fusee shafts are parallel. Back-drivable: yes, the spring always pulls back unless a ratchet or the user holds it.
- **power**: passive (no power needed): it only reshapes the force from a spring or the user; a passive gravity-compensating pulley lets a robot arm hold its position with no power, avoiding collapse if the motors fail (Ludovico et al. 2021)
- **removability**: removable: the cord or chain unhooks and the pulley comes off its shaft, but only after the spring is let down; compound bows need a bow press to take tension off the cables for string changes and adjustments (Wikipedia, Compound bow)
- **reuse_cycles**: many times
- **tools_needed**: 'everyday tools' to adjust a tool balancer's spring from outside the housing (Hubbell Gleason spec sheet). *(unverified parts omitted)*
- **seal**: none
- **load**: light to medium: clock fusees carry small chain forces; compound bows handle draw weights of about 40 to 80 lb (18 to 36 kg) for adults (Wikipedia, Compound bow); tool balancers hold hand tools over a work area (Hubbell Gleason). The cord or chain is the weak point: a broken fusee chain whips about inside the clock (Wikipedia, Fusee). Strong only in cord tension; it can't push.
- **adjustable**: Partly: the profile is fixed once made, so a fusee had to be readjusted when its mainspring was replaced (Wikipedia, Fusee); tool balancers have adjustable spring tension (Hubbell Gleason); compound bows have adjustable draw stops, and draw length and let-off can be changed, usually with a bow press (Wikipedia, Compound bow).
- **play_and_precision**: Small play, but the output only matches the target curve if the cord follows the designed path: a cord that isn't tangent to the groove (fleet angle) rubs and wears (US7677540), planar profile calculations drift from a real 3D spiral at large angles (Fedorov and Birglen 2018), and friction adds hysteresis (17% in a printed prototype; others reported 8.6% and 10% errors) (Fedorov and Birglen 2018).
- **access_needed**: not applicable: it is built into a mechanism (on a shaft end or between two shafts) rather than fitted from one side
- **materials**: Clock fusees: brass and steel with a gut cord, wire or fine steel chain, chains being used from about 1650 because they lasted longer (Wikipedia, Fusee). Tool balancers: die-cast aluminium housing and steel wire rope (Hubbell Gleason). Maker builds: 3D-printed ABS pulleys with polyethylene-fibre (Spectra) cable, chosen for strength and very low stretch, and laser-cut acrylic frames (Fedorov and Birglen 2018). *(unverified parts omitted)*
- **maker_difficulty**: moderate: printing the pulley is easy, but the profile must be calculated for your spring and load and the cord kept in its groove; 'Spiral pulleys and fusees are poorly understood and difficult to design' (US7677540)

### Making it

- **processes**: 3D print (FDM): noncircular and spiral pulleys and cams (ABS in Fedorov and Birglen 2018); toy compound-bow cams (Printables 264536; Thingiverse 2764962) *(unverified parts omitted)*
- **print_in_place**: no: the pulley is printed on its own and then fitted with a shaft or bearing, a cord or cable, and a spring
- **making_tips_3d_printing**: 1) Work out the profile first: the radius where the cord leaves the pulley times the cord's pull gives the torque, so for a steady torque from a spring whose force falls, the radius must grow in proportion (Wikipedia, Fusee; derived). Published methods: a closed-form solution and a convex-optimisation method (Ludovico et al. 2021) and a graphical method with antagonistic pulleys (Fedorov and Birglen 2018). 2) Keep the outline convex with no sharp points, or the cord can't wrap it (Ludovico et al. 2021). 3) A single pulley wound one way can only give a force that keeps rising or keeps falling; for a torque that changes direction, use two pulleys working against each other (Fedorov and Birglen 2018). 4) Angle the groove flanges towards where the cord leaves (towards the idler), not square to the axle, because sudden movements can throw the cable out of the groove (Fedorov and Birglen 2018). 6) Lay a multi-turn profile out as a spiral groove, as a fusee does, and keep the fleet angle small so the cord doesn't rub the groove walls (US7677540). 7) ABS worked for the pulleys in Fedorov and Birglen's prototypes; PLA gives at about 60 degrees C and PETG at about 80 degrees C (CNC Kitchen). 8) Anchor the cord end through a hole or knot in the pulley, and add a ratchet if the spring must not run the output backwards while you wind it (Wikipedia, Fusee). *(unverified parts omitted)*
- **off_the_shelf_parts**: Related constant-torque parts: 'constant torque spring motor'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Torque = cord pull x radius at the take-off point; a fully wound mainspring pulls on the smallest radius of the fusee and the run-down spring on the largest (Wikipedia, Fusee; 507 Mechanical Movements no. 46).
  - The ideal fusee is not a simple cone but closer to a hyperboloid (Wikipedia, Fusee).
  - Groove shape: circular cross-section for cords, rectangular for chains (Wikipedia, Fusee).
  - The pulley outline must stay convex, its radius must not run off to infinity, and it must have no points where the rope can't wrap (Ludovico et al. 2021).
  - One pulley winding one way gives only a strictly increasing or decreasing function; two antagonistic pulleys give a two-way torque (Fedorov and Birglen 2018).
  - Expect friction hysteresis: 17% of the compensated torque range in a 3D-printed ABS balancer with one idler pulley (Fedorov and Birglen 2018).
  - Cables rub and wear on the groove sides when they aren't tangent to the groove (the fleet angle) (US7677540).
  - Compound bows: let-off commonly 65-80% of peak weight (older bows about 50%, some over 90%); arrows should weigh at least 5 grains per pound of draw weight (IBO) to avoid damage like a dry fire (Wikipedia, Compound bow).

### When to use it

- **everyday_examples**: 
  - Antique spring-driven clocks, English pocket watches and marine chronometers with a fusee and chain (Wikipedia, Fusee)
  - Compound bows, whose cams make the full-draw hold much lighter than the peak pull (Wikipedia, Compound bow)
  - Tool balancers hanging above assembly lines, whose tapered drum keeps a tool floating at the height you leave it (Hubbell Gleason spec sheet)
  - Nautilus-style gym machines with a spiral cam that varies the resistance through the movement (Wikipedia, BowFlex, Inc.; Arthur Jones)
- **when_to_use**: Use a variable-radius pulley when a spring's force changes but you need a steady force or torque, or when you want the force to follow a particular curve: a spring-driven clock or toy motor that should run evenly (fusee), a counterbalance that holds a lamp, camera arm, robot joint or tool weightless over its whole range (tapered drum, noncircular pulley; Hubbell Gleason; Ludovico et al. 2021), a bow, catapult or exercise device that should be heavy early and light to hold (compound-bow cam; Nautilus cam), or a cable robot that must follow a set path from one motor (Fedorov and Birglen 2018).
- **when_not_to_use**: If a nearly constant force is all you need, a constant-force spring or constant-torque spring motor is simpler, though such springs 'store less energy per pound and ... have a shorter life' (US7677540); clockmakers likewise replaced the fusee with a going barrel that uses only the flat part of a long mainspring's curve (Wikipedia, Fusee). If you need to change the force curve often, use a motor with control instead, since the profile is fixed (Fedorov and Birglen 2018). If the force must push as well as pull, a cord can't do it; use non-circular gears or a cam and follower. For compact or very low-friction designs, the extra bulk and friction may outweigh the benefit (Wikipedia, Fusee: bulky; Fedorov and Birglen: friction).
- **environment_limits**: Cords stretch and creep, and gut cords were replaced by chains around 1650 because chains lasted longer (Wikipedia, Fusee). Compound bows are less sensitive to temperature and humidity than traditional bows (Wikipedia, Compound bow). Printed pulleys: PLA gives at about 60 degrees C and PETG at about 80 degrees C (CNC Kitchen). *(unverified parts omitted)*
- **safety_notes**: Stored spring energy: if a fusee chain breaks, 'the force of the mainspring sent the end whipping about the inside of the clock' (Wikipedia, Fusee); let a spring down before taking the cord off. Compound bows store a lot of energy: dry firing (releasing without an arrow) can damage or destroy the bow and injure the archer or bystanders, and arrows lighter than about 5 grains per pound of draw weight risk the same (Wikipedia, Compound bow; Dry fire); string and cable work needs a bow press (Wikipedia, Compound bow). Tool balancers should hang with a safety chain, and good ones have a catch that 'prevents free-spooling if springs fail' (Hubbell Gleason spec sheet). *(unverified parts omitted)*
- **common_failures**: 1) Cord rubbing on the groove walls and wearing because of a large fleet angle (US7677540). 2) Cord or cable jumping out of the groove on a sudden movement; angle the flanges towards the cord's exit (Fedorov and Birglen 2018). 3) A bowstring derailing from the cams when the archer twists (torques) it, more likely when drawing with fingers instead of a release aid (Wikipedia, Compound bow). 4) Fusee chain breaking (Wikipedia, Fusee). 5) Profile no longer matching after a spring is replaced or has weakened (Wikipedia, Fusee). 6) Larger-than-expected friction and hysteresis, especially with extra idler pulleys (Fedorov and Birglen 2018). 7) Calculated profiles that are not convex or have points the cord can't wrap (Ludovico et al. 2021).
- **related**: 
  - Spiral power spring (clock spring): the spring a fusee was invented to even out
  - Constant-force spring (spring-return reel): gives a nearly flat force on its own, with no shaped pulley, but stores less energy per pound (US7677540)
  - Spring balancer (gravity compensation): holds a weight steady; tapered-drum balancers use a variable-radius drum inside (Hubbell Gleason)
  - Non-circular gears: change the ratio along the turn with teeth instead of a cord, so they can push both ways
  - Cam and follower: a shaped wheel that moves a follower by contact, rather than winding a cord
  - Capstan and windlass, and pulley system (block and tackle): fixed-ratio cord drives
  - Escapement: the timekeeping part whose accuracy the fusee protected
  - Stackfreed: an older, high-friction cam compensator replaced by the fusee (Wikipedia, Fusee)

### Pictures, videos and models

- **links**: 
  - [File:Fusee.png (Wikimedia Commons; woodcut by Dionysius Lardner)](https://commons.wikimedia.org/wiki/File:Fusee.png): Fusee and mainspring barrel in the wound and run-down states, with chain, fusee, winding arbor and output gear labelled *(licence: public domain)*
  - [File:Compound Cams Auszug Weg&Hebel.jpg (Wikimedia Commons, StromBer)](https://commons.wikimedia.org/wiki/File:Compound_Cams_Auszug_Weg%26Hebel.jpg): A compound-bow cam wheel at work, with coloured ropes showing how the lever arms change during the draw *(licence: CC BY-SA 3.0 / GFDL 1.2+)*
  - [File:Compound bow chart.svg (Wikimedia Commons, MiklyxoMaklai)](https://commons.wikimedia.org/wiki/File:Compound_bow_chart.svg): Draw-force curve of a compound bow: force against draw length, peaking early and dropping at full draw (let-off) *(licence: CC BY-SA 4.0)*
  - [507 Mechanical Movements no. 46: Fusee chain and spring-box (Brown, 1868; animated)](https://507movements.com/mm_046.html): Animated fusee and spring barrel: 'The chain is on the small diameter of the fusee when the watch is wound up' *(licence: book public domain; website animation link only)*
  - [Full Rotation Static Balancer Using Differential Noncircular Pulleys (YouTube, PolyLabrobot; title confirmed through YouTube oEmbed, video not watched; cited in Fedorov and Birglen 2018)](https://www.youtube.com/watch?v=yUw34IeZnIM): A 3D-printed noncircular-pulley mechanism balancing a pendulum over a full turn *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cam for Compound Bow (Patrick Boschian, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/264536-cam-for-compound-bow): A simple printable cam for a toy compound bow, designed from photos of real cams *(licence: CC BY)*
  - [Differential Noncircular Pulleys for Cable Robots and Static Balancing (Fedorov and Birglen, Journal of Mechanisms and Robotics 2018; accepted version from PolyPublie)](https://pdfs.semanticscholar.org/3abb/deb9722c008e6c5747bfcfe42150f1dfd99c.pdf): Open-access paper with a graphical method for designing noncircular pulleys and two built prototypes (3D-printed ABS pulleys, Spectra cable, laser-cut acrylic) *(licence: CC BY (accepted version))* *(unverified parts omitted)*
- **diagram_idea**: Two frames side by side of a mainspring barrel joined by a chain to a cone-shaped fusee: wound up, a thick force arrow on the chain meets the fusee's narrow end with a short lever arm; run down, a thin force arrow meets the wide end with a long lever arm, and the same-size torque arrow on the fusee in both frames shows the force evening out.
- **sources**: 
  - https://en.wikipedia.org/wiki/Fusee_(horology)
  - https://en.wikipedia.org/wiki/Compound_bow
  - https://en.wikipedia.org/wiki/Dry_fire
  - https://en.wikipedia.org/wiki/Arthur_Jones_(inventor)
  - https://en.wikipedia.org/wiki/BowFlex,_Inc.
  - https://507movements.com/mm_046.html
  - https://patents.google.com/patent/US7677540B1/en
  - https://elib.dlr.de/141572/1/2021_RAL_Design%20of%20Non-Circular%20Pullyes.pdf
  - https://pdfs.semanticscholar.org/3abb/deb9722c008e6c5747bfcfe42150f1dfd99c.pdf
  - https://www.ergonomicpartners.com/pdf/hubbell-gleason-spring-balancer-specs.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Fusee.png
  - https://commons.wikimedia.org/wiki/File:Compound_Cams_Auszug_Weg%26Hebel.jpg
  - https://commons.wikimedia.org/wiki/File:Compound_bow_chart.svg
  - https://commons.wikimedia.org/wiki/File:Free_mainspring_torque_curve.svg
  - https://commons.wikimedia.org/wiki/Category:Compound_bows
  - https://www.youtube.com/watch?v=yUw34IeZnIM
  - https://www.thingiverse.com/thing:2764962
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, make_it_yourself, making_tips_3d_printing, materials, motion, off_the_shelf_parts, processes, safety_notes, tools_needed

## 401 Flywheel (inertia wheel, friction motor)

*springs & energy storage.* A heavy spinning wheel that stores energy as spin, smoothing out jerky turning (carrying a crank past its dead points) and keeping a toy or machine going after the push stops

*Also covers:* Also covers putting the mass near the rim and friction-motor toy cars. Flywheel dart blasters are out of scope. Safety: an over-sped flywheel can burst, so never over-speed printed ones and guard motor-driven ones.

### What it is

- **plain_name**: A heavy wheel that, once spun, wants to keep spinning: it soaks up bursts of turning effort and hands them back, so a hand crank, foot pedal or one-cylinder engine keeps turning smoothly past its stuck points, and a toy car keeps rolling after you stop pushing
- **term**: Flywheel (inertia wheel); in toys, the friction motor
- **aliases**: 
  - inertia wheel; rimmed flywheel (a heavy rim joined to a hub by spokes) and solid-disc flywheel (Wikipedia 'Flywheel')
  - friction motor: a large flywheel geared to the drive wheels of toy cars, trucks and trains, wound up by pushing the toy along (Wikipedia 'Friction motor')
  - kick wheel: the heavy foot-spun flywheel under a potter's wheel; 'fast wheel', the ancient potter's wheel that 'operated on the flywheel principle' (Explain that Stuff; Wikipedia 'Potter's wheel')
  - weighted flywheel of an indoor 'spinning' exercise bike (Wikipedia 'Stationary bicycle')
  - dual-mass flywheel (car engines; Wikipedia 'Flywheel', see also)
  - flywheel energy storage (FES), 'flywheel battery' (Wikipedia 'Flywheel energy storage')
  - reaction wheel, control moment gyroscope: a flywheel used to hold or change the direction something points rather than to store energy (Wikipedia 'Flywheel energy storage')
  - gyroscope rotor, heavy-rim rotor (desk gyroscopes; Printables 1800233); fidget spinner (weighted lobes on a ball bearing; Wikipedia 'Fidget spinner')
  - spoked flywheel, handwheel (machine-guarding wording; OSHA)
- **family**: springs & energy storage
- **other_families**: brakes, dampers & speed control
- **one_liner**: A flywheel is a heavy wheel on a shaft that stores energy as spin, so it evens out jerky turning, carries a crank past the points where it can't be pushed round, and keeps a machine or toy going for a while after the push stops.
- **complexity**: Single piece or a few parts: the wheel (a solid disc, or a heavy rim joined to a hub by spokes or a web), its shaft or axle, and bearings (Wikipedia 'Flywheel'). A friction motor adds a gear train to the drive wheels and sometimes a one-way clutch (Wikipedia 'Friction motor'). Printed flywheels usually add metal weights in the rim, such as coins, nuts or large washers (Printables 973796, 187860).
- **how_it_works**: A spinning wheel stores energy of movement (kinetic energy) equal to half its moment of inertia times its speed squared (½Iω²), and it resists being sped up or slowed down (Wikipedia 'Flywheel'). When the drive pushes harder than the load needs, the wheel speeds up slightly and soaks up the extra; when the push fades, as at a crank's dead centre where pushing straight along the rod gives no turning force, it slows slightly and gives the energy back, so the shaft keeps turning (Wikipedia 'Flywheel'; 'Dead centre (engineering)'). Mass near the rim counts most: a thin ring has about twice the inertia of a solid disc of the same mass and radius (mr² against ½mr²; Wikipedia 'Flywheel'), and spinning twice as fast stores four times the energy, while a rim twice as heavy only stores twice as much (Explain that Stuff). In a friction-motor toy, pushing the car spins a large flywheel through gears so it turns much faster than the wheels; let go and the flywheel drives the car (Wikipedia 'Friction motor').

### Finder attributes

- **job**: 
  - store energy: holds the energy of a push, pedal stroke or power stroke as spin and gives it back later, or releases it in a short burst faster than the source could (power hammers, riveting machines; Wikipedia 'Flywheel')
  - slow it, stop it or keep its speed steady: evens out speed, smoothing 'sufficiently small deviations' like a low-pass filter on speed (Wikipedia 'Flywheel')
- **motion**: rotate: continuous rotation about its own axis, any number of turns
- **degrees_of_freedom**: 1: the wheel only turns on its shaft; its bearings block every other movement. A desk gyroscope adds gimbal pivots so the spinning wheel's axis can also tilt (Printables 1800233).
- **special_behaviour**: 
  - none of the listed behaviours: its trick, storing energy as spin and evening out speed, is not on this list. A spinning flywheel also acts as a gyroscope and resists being tilted, which lets a coin-flywheel toy car 'do tricks and drive on 2 wheels' (Printables 973796; Wikipedia 'Flywheel energy storage')
  - one-way (moves freely one way, locks the other): only in some friction motors, where a one-way clutch in the gears stops the toy being wound backwards (Wikipedia 'Friction motor'); a pedal potter's wheel uses an overrunning clutch so the wheel can coast (Thang, 'Pottery wheel 2')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it stores and smooths rotation. The wheel itself is fixed to its shaft by a key, set screw, clamp or press fit (see Shaft-to-hub joints), or by crush ribs on a printed axle (Printables 1800233)
- **input_output**: Rotation -> the same rotation, smoothed: on its own shaft the ratio is 1:1 and in line. In a friction motor a gear train with 'very low gear ratio' steps the speed up so the flywheel revolves 'much faster than the wheels', and the flywheel's axis lies across the toy's direction of travel (Wikipedia 'Friction motor'); the one in the Commons photo uses three gears (Wikimedia Commons 'Friction motor.jpg'). Back-drivable: yes, by design: the load drives the flywheel while you push, and the flywheel drives the load when you let go. Losses: bearing friction and air drag make it run down; energy-storage flywheels on mechanical bearings 'can lose 20% to 50% of their energy in two hours' (Wikipedia 'Flywheel energy storage'), and a fidget spinner's speed falls away exponentially (Wikipedia 'Fidget spinner'). *(unverified parts omitted)*
- **power**: passive (no power needed) for hand-, foot- and push-driven flywheels; a motor-driven flywheel needs power to spin up. When the power is cut it keeps its last state, carrying on spinning until friction stops it, which is the point of a flywheel but also means it is still dangerous after switch-off.
- **removability**: removable: the wheel comes off its shaft by undoing its key, set screw or clamp; printed toys snap together and apart without glue or screws (Printables 973796)
- **reuse_cycles**: effectively unlimited: it is a moving part rather than a joint and is spun up and down endlessly; the bearings wear and need replacing (large energy-storage flywheels have their bearings replaced every five to ten years; Wikipedia 'Flywheel energy storage')
- **tools_needed**: To fit a metal flywheel: a spanner or Allen key for its hub fixing (set screw, key or clamp). Printed toys: none, they snap together, plus light general-purpose oil for the pivots and matched coins for the rim (Printables 973796). Turning a large stopped engine off dead centre may need a lever or 'turning bar' (Wikipedia 'Dead centre (engineering)').
- **seal**: none: it is not a sealing part
- **load**: Light (toys, models, fidget spinners) to heavy (engine and press flywheels). The important load is the outward pull that spinning puts on the rim (hoop stress), which rises with the square of speed (ρr²ω²; Wikipedia 'Flywheel'), so twice the speed means four times the stress; when it passes the material's tensile strength 'the flywheel will break apart' (Wikipedia 'Flywheel'). It also loads its shaft and bearings with its weight, with shaking from any imbalance, and with a strong twist (torque) whenever it is suddenly started or stopped.
- **adjustable**: Yes, before use: add or remove rim weights to change its inertia, e.g. coin holders for 14-20 mm coins (Printables 973796) or large flat washers instead of nuts (Printables 187860). While running its inertia is fixed, apart from rare variable-inertia designs whose weights fold in and out (Explain that Stuff, describing a 1959 patent by Bertram Schmidt).
- **play_and_precision**: Not used for locating, but it must run true and balanced: an unbalanced flywheel shakes its bearings, and in large rotors the imbalance after a piece breaks off 'may lead to rapid bearing failure from vibration' (Wikipedia 'Flywheel energy storage'). Make every weight pocket carry the same mass (Printables 973796). A loose fit on the shaft lets it wobble or slip; a printed rotor can be gripped by crush ribs and tested first with a fit coupon (Printables 1800233).
- **access_needed**: end of a tube or shaft: it slides onto the end of its shaft and is fixed there
- **materials**: Steel and cast iron (old steam engines), cast or nodular iron, steel or aluminium (car engines), lead (small toy flywheels), and carbon-fibre composites for very fast energy-storage rotors (Wikipedia 'Flywheel'); some kick wheels are concrete (Explain that Stuff). Printed flywheels: a PLA, PETG or PCTG hub and rim carrying coins, steel nuts or washers (Printables 973796, 187860), or a PLA rotor printed at 50% infill or more (Printables 1800233).
- **maker_difficulty**: easy for a hand-spun, string-pulled or push-along toy: print a hub with pockets for coins or washers (Printables 973796, 187860). Moderate to hard for anything motor-driven or large: it needs balancing, a secure hub fixing, good bearings and a guard (OSHA 1910.219).

### Making it

- **processes**: 
  - 3D print (FDM): hubs and rims with pockets for metal weights, toy cars and desk gyroscopes (Printables 973796, 187860, 1800233)
  - off-the-shelf part: cast-iron or steel flywheels and handwheels, ball bearings, and washers, coins, nuts or steel balls used as rim weights (Printables 187860) *(unverified parts omitted)*
- **print_in_place**: partly: printed flywheel toys are separate parts that snap together without glue or screws but need added coins and rubber-band or TPU tyres (Printables 973796); the rotor is one printed part, with metal mass added (Printables 187860) or printed solid enough to be heavy (Printables 1800233).
- **making_tips_3d_printing**: 1) Put the mass at the rim: plastic is light, so give the rim pockets or a channel for coins, steel nuts, washers or steel balls; a ring of mass has about twice the inertia of the same mass spread as a disc (Wikipedia 'Flywheel'). One remix swapped a few nuts for large flat washers (2 in outside, 1/2 in hole) (Printables 187860); the coin car takes 14-20 mm coins (Printables 973796). 2) Balance it: every pocket must carry the same mass; the coin-car designer says to make all four groups of coins weigh the same and warns that US pennies from before 1982 are heavier (Printables 973796). 4) No weights? Print the rotor dense: 'rotor in PLA at 50 percent infill or more - the flywheel wants mass, a hollow rotor spins down at once' (Printables 1800233). 5) Orientation: print the disc flat on the bed so the outward pull runs along the layers rather than trying to split them; CNC Kitchen measured layer bonds at only 55% (PLA) and 46% (PETG) of the in-layer strength. 6) Hub fit: a press fit on crush ribs with a cam-in ramp works; print a short fit coupon first and adjust the rib diameter if the rotor is too tight or slips (Printables 1800233). 7) Bearings: one designer prints the flywheel bearings in vase mode with two 0.2 mm base layers in a higher-melting plastic (PCTG rather than PLA), uses dry filament for smooth pivots and oils every spinning part (Printables 973796). 8) Gears for a friction motor: fine teeth on the bed get spoiled by elephant's foot, so turn on elephant-foot compensation; a coarser, deeper tooth works better (Printables 187860). 9) Speed: keep printed flywheels to hand, string or push speeds; never spin one up with a drill, rotary tool or fast motor (see safety_notes). 10) Heat: PLA gives at about 60 °C and PETG at 80 °C (CNC Kitchen), so keep printed rotors away from engines and heaters. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'flywheel' (cast iron or steel, with a bore and keyway or set screw, for engines, models and machines); 'handwheel' (a spoked or disc wheel with a handle that also acts as a flywheel); 'friction motor' for toys (Wikipedia 'Friction motor'); 'shaft collar' and 'set screw hub' to fix it; 'flat washer' or 'fender washer', coins and steel balls as rim weights (Printables 187860, 973796); *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Stored energy is ½Iω²; a solid disc has I = ½mr², a thin rim about mr², so the same mass at the rim stores up to twice as much (Wikipedia 'Flywheel').
  - Twice the rim mass stores twice the energy at the same speed; twice the speed stores four times the energy (Explain that Stuff).
  - Rim stress (hoop stress) is about ρr²ω², density x radius² x speed², so stress also goes with the square of speed and the material's strength-to-density ratio sets the limit; a typical flywheel has a shape factor of 0.3 (Wikipedia 'Flywheel').
  - Sizing for smooth running: inertia J = U / (ω_avg² x Cs), where U is the energy swing per cycle and Cs = (ω_max - ω_min) / ω_avg; suggested Cs: very uniform <= 0.003, moderately uniform 0.003-0.012, some variation acceptable 0.012-0.05, moderate variation 0.05-0.2, large variation acceptable >= 0.2 (Engineers Edge).
  - Ordinary steel flywheels on conventional bearings are limited to a few thousand rpm; carbon-fibre rotors on magnetic bearings reach up to 60,000 rpm (Wikipedia 'Flywheel').
  - Guarding (US workplace rule): a flywheel with any part 7 ft (2.1 m) or less above the floor must be enclosed in sheet, perforated or expanded metal or woven wire, or fenced with guard rails 15-20 in (380-510 mm) from the rim (OSHA 1910.219(b)(1)).
  - Printed rotors without metal weights: 50% infill or more (Printables 1800233).
  - Friction motors gear the flywheel up so it spins much faster than the wheels (Wikipedia 'Friction motor').

### When to use it

- **everyday_examples**: 
  - A friction-powered toy car or truck: push it along a few times and it races off by itself (Wikipedia 'Friction motor')
  - A potter's kick wheel, or a fidget spinner with weights in its arms (Wikipedia 'Potter's wheel', 'Fidget spinner')
  - The heavy front wheel of an indoor spinning bike (Wikipedia 'Stationary bicycle')
  - The big wheel on the crankshaft of a car engine, a tractor or a treadle sewing machine (Wikipedia 'Flywheel', 'Treadle')
- **when_to_use**: Use a flywheel when the push comes in pulses but you want smooth turning: a single-piston model engine, a Stirling engine, a hand crank or a foot treadle driving a crank, where the flywheel carries the crank past its dead centres (Wikipedia 'Dead centre (engineering)'; Thang, 'Pottery wheel 1', 'Hand powered machine'); a mechanism that turns stop-start motion into continuous rotation (Thang, 'Mechanism for converting interrupted rotation to continuous rotation 1'); a turntable or wheel that should keep going while your hands are busy (potter's wheel; Wikipedia 'Potter's wheel'); a toy that should keep rolling after a push (friction motor); or a small source that must deliver a short, strong burst, as in power hammers (Wikipedia 'Flywheel'). It also makes spinning toys and desk gyroscopes resist tilting (Printables 1800233).
- **when_not_to_use**: Not when the machine must stop or reverse quickly: the stored spin fights you, so use a light rotor and a brake. Not for storing energy for long: a flywheel runs down (energy-storage flywheels on ordinary bearings can lose 20-50% in two hours; Wikipedia 'Flywheel energy storage'), so use a wound spring (spiral power spring, as in pull-back cars), a raised weight or a battery. Not in something you carry and turn, or in a light vehicle, without thinking about the gyroscopic effect, which resists changes of direction (Wikipedia 'Flywheel energy storage'; Explain that Stuff). Never as a high-speed energy store at home or in printed plastic: the burst risk rises with the square of speed (Wikipedia 'Flywheel'). To limit speed rather than smooth it, use a speed governor; to soak up vibration at one frequency, use a tuned mass damper.
- **environment_limits**: Heat: printed rotors soften, PLA at about 60 °C and PETG at about 80 °C (CNC Kitchen), so keep them away from engines and hot sun. Flywheels themselves are 'not as adversely affected by temperature changes' as batteries (Wikipedia 'Flywheel energy storage'). Dust, dry or cold bearings and air drag make it run down sooner; low-friction bearings let large flywheels keep their energy for days (Explain that Stuff). *(unverified parts omitted)*
- **safety_notes**: Bursting: rotation energy can be stored 'until the rotor shatters', when the hoop stress exceeds the material's tensile strength (Wikipedia 'Flywheel'), and high-performance flywheels 'can explode, injuring bystanders with high-speed fragments' (Wikipedia 'Flywheel energy storage'). Because stress grows with the square of speed, never over-speed a printed flywheel: spin it by hand, string or push, never with a drill, rotary tool or fast motor. Guard any motor-driven flywheel with an enclosure strong enough to catch fragments and hold the wheel if its shaft or mounting fails; big systems use strong containment or are buried (Wikipedia 'Flywheel energy storage'; OSHA 1910.219(b)(1)(vi)). Entanglement: 'even smooth, slowly rotating shafts can grip hair and clothing', and spoked flywheels form nip points with fixed parts (OSHA Machine Guarding eTool), so tie back hair and keep sleeves clear. It keeps turning after the power is cut, so wait for it to stop. Turning a stopped engine off dead centre by hand must be done 'with care to avoid the operator becoming entangled in the machinery' (Wikipedia 'Dead centre (engineering)'). *(unverified parts omitted)*
- **common_failures**: 1) Too little inertia: mass close to the hub, or a hollow printed rotor, 'spins down at once' (Printables 1800233); move the mass to the rim (Wikipedia 'Flywheel'). 2) Imbalance: unequal weights make it shake and wear its bearings (Printables 973796; Wikipedia 'Flywheel energy storage'); weigh the weights. 3) Slipping or wobbling on the shaft: the press fit is too loose; adjust the crush ribs or add a drop of CA glue on one rib (Printables 1800233). 4) Friction and binding: printed bearings bind when the car body is squeezed unless a roof braces it, and damp filament makes rough pivots (Printables 973796); oil every spinning part. 5) Fine gear teeth in a printed friction motor jam or strip (Printables 187860). 6) Bursting from over-speed, or fatigue cracks in metal rotors (Wikipedia 'Flywheel', 'Flywheel energy storage'). 7) A single-cylinder engine that stops on dead centre won't restart until the flywheel is turned off it by hand (Wikipedia 'Dead centre (engineering)').
- **related**: 
  - Spiral power spring (clock spring): stores energy in a wound spring, as in pull-back toy cars; unlike a friction motor it can't be 'pumped up' by pushing repeatedly (Wikipedia 'Friction motor')
  - Speed governor (fly fan, centrifugal governor): limits speed with air drag or weights rather than storing energy
  - Tuned mass damper: a mass on a spring tuned to absorb vibration at one frequency
  - Slider-crank and Scotch yoke: crank mechanisms that need a flywheel to carry them past their dead centres
  - Roller clutch (one-way bearing): lets a flywheel freewheel ahead of its drive, as in some friction motors and pedal potter's wheels
  - Friction brake and Eddy-current brake: stop a flywheel or load it, as on exercise bikes (resistance by magnets, fans or friction; Wikipedia 'Stationary bicycle')
  - Centrifugal clutch and Friction clutch: engine flywheels usually carry the clutch
  - Shaft-to-hub joints (key, set screw, D-flat, clamp hub): how the flywheel is fixed to its shaft
  - Plain pivot and rolling bearing: what it spins on; bearing friction decides how long it keeps going
  - Coil spring, Gas spring and Constant-force spring: other ways to store energy, which hold it until released instead of running down

### Pictures, videos and models

- **links**: 
  - [File:Spoked flywheel animation.gif (Wikimedia Commons, from OSHA's machine-guarding eTool)](https://commons.wikimedia.org/wiki/File:Spoked_flywheel_animation.gif): Animation of a spinning spoked flywheel: heavy rim, spokes and hub *(licence: Public domain (US Government, OSHA))*
  - [File:Friction motor.jpg (Wikimedia Commons, used on Wikipedia 'Friction motor')](https://commons.wikimedia.org/wiki/File:Friction_motor.jpg): Inside a toy car's friction motor: the drive wheels connect through three gears to a flywheel that keeps the car moving after release *(licence: CC BY-SA 4.0 (MattGiuca))*
  - [File:Leonardo-Flywheel.ogv (Wikimedia Commons, video used on Wikipedia 'Flywheel')](https://commons.wikimedia.org/wiki/File:Leonardo-Flywheel.ogv): Video of a flywheel with spherical weights on its arms, built from Leonardo da Vinci's drawings (Berlin exhibition, 2005) *(licence: Public domain (Erik Möller))*
  - [File:Landini VL30(Italien)2.JPG (Wikimedia Commons, used on Wikipedia 'Flywheel')](https://commons.wikimedia.org/wiki/File:Landini_VL30(Italien)2.JPG): An old single-cylinder Landini tractor with its large flywheel clearly visible on the side *(licence: Public domain (Späth Chr.))*
  - [Pottery wheel 1 (Nguyen Duc Thang, thang010146, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=P-xT0xrK6AE): CAD animation of a foot-pedalled potter's wheel kept turning by flywheel inertia, with the dead point overcome by hand at the start (Thang, 2700 Animated Mechanical Mechanisms part 2, p. 158) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Coin Flywheel Toy Car (Keenan Finucan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/973796-coin-flywheel-toy-car): A snap-together toy car with a coin-weighted flywheel (14-20 mm coins), no glue or screws; gyroscopic effect lets it drive on two wheels *(licence: CC BY)*
  - [Flywheel vehicle "remix of #3566283" (robothut, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/187860-flywheel-vehicle-remix-of-3566283): A geared flywheel-powered car that uses large flat washers as flywheel mass; all parts print without supports *(licence: CC BY)*
  - [Desk Gyroscope - two-axis gimbal flywheel (Miloslav Brožek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1800233-desk-gyroscope-two-axis-gimbal-flywheel-a-toy-not): A heavy-rim printed flywheel in a two-axis gimbal, string-pulled, no hardware; parametric .scad with all clearances named *(licence: CC BY)*
- **diagram_idea**: Side-by-side: a solid disc and a rim-heavy wheel of the same mass with arrows showing the rim one spins longer; below, a crank and connecting rod at dead centre with the flywheel's arrow carrying it past, and a graph of shaft speed wobbling widely without the flywheel and only slightly with it.
- **sources**: 
  - https://en.wikipedia.org/wiki/Flywheel
  - https://en.wikipedia.org/wiki/Friction_motor
  - https://en.wikipedia.org/wiki/Flywheel_energy_storage
  - https://en.wikipedia.org/wiki/Dead_centre_(engineering)
  - https://en.wikipedia.org/wiki/Fidget_spinner
  - https://en.wikipedia.org/wiki/Potter%27s_wheel
  - https://en.wikipedia.org/wiki/Treadle
  - https://en.wikipedia.org/wiki/Stationary_bicycle
  - https://www.explainthatstuff.com/flywheels.html
  - https://www.engineersedge.com/mechanics_machines/flywheel_mass_size_design_13981.htm
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.219
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://cs448m.github.io/lectures/machines/doc/2.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Spoked_flywheel_animation.gif
  - https://commons.wikimedia.org/wiki/File:Friction_motor.jpg
  - https://commons.wikimedia.org/wiki/File:Leonardo-Flywheel.ogv
  - https://commons.wikimedia.org/wiki/File:Landini_VL30(Italien)2.JPG
  - https://www.youtube.com/watch?v=P-xT0xrK6AE
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, making_tips_3d_printing, off_the_shelf_parts, processes, safety_notes

