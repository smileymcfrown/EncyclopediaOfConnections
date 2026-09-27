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

*Not researched yet.*

## 237 Gas spring (incl. lockable gas spring)

*springs & energy storage.* A sealed cylinder of pressurised gas whose rod pushes out with a steady force, holding up lids and hatches; lockable types hold at any length

*Not researched yet.*

## 238 Spiral power spring (clock spring)

*springs & energy storage.* A flat strip coiled into a spiral that stores energy when wound and releases it as it unwinds, as in clockwork and retracting cords

*Not researched yet.*

## 268 Coil spring (compression, extension, torsion)

*springs & energy storage.* Wire wound into a coil that pushes, pulls or twists back; the baseline spring

*Not researched yet.*

