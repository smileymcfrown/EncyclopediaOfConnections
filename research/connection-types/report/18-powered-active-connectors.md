# powered & active connectors: Needs power to hold or to let go

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 103 Holding electromagnet (maglock)

*powered & active connectors.* A coil that holds steel firmly while powered and lets go when the power is cut, as in magnetic door locks and robot tool holders

### What it is

- **plain_name**: A flat electric magnet that grips a steel plate very hard while it is switched on and lets go the moment the power is cut, like the magnetic locks at the top of office and school doors
- **term**: Holding electromagnet (electro holding magnet); on doors: electromagnetic lock (maglock)
- **aliases**: 
  - electromagnetic lock / electromagnet lock
  - maglock / mag lock / magnetic door lock
  - electro holding magnet / electromagnetic holding magnet
  - electromagnet and armature plate (strike plate)
  - round or pot electromagnet module (hobby sizes sold by holding force, e.g. 'P25/20' 5 kg)
  - electromagnetic door holder / fire door holder / door hold-open magnet (a weak version that holds doors open)
  - shear lock (a maglock variant with interlocking plates)
  - lifting electromagnet / crane magnet / scrap magnet (large version)
  - electromagnetic gripper / magnetic end effector (robots)
  - electromagnetic chuck (machine-tool work holding)
- **family**: powered & active connectors
- **other_families**: clamping, magnetic & friction connections, locks, latches & catches
- **one_liner**: An electromagnet (a coil of wire around an iron core) that clamps onto a flat steel plate with great force while current flows and releases it as soon as the current stops, used to lock doors, hold fire doors open, and let robots and cranes pick up and drop steel parts.
- **complexity**: A few parts: the electromagnet (a copper coil wound in a soft-steel pot core or a stack of E-shaped steel plates, sealed with non-magnetic potting resin and machined flat), a flat soft-steel armature plate (strike plate) or the steel object itself, mounting brackets and screws (a door maglock's plate hangs on one centre bolt with a rubber washer between steel washers so it can tilt), and the electrics: a DC power supply, a switch, relay or transistor, and a diode across the coil. Door versions often add a bond sensor (checks the plate is fully held), a door sensor, a status LED, a relock timer and an exit button.
- **how_it_works**: Current flowing through the coil turns the iron core into a strong magnet, and the magnetic field pulls the steel plate flat against the magnet's face (magnetic attraction across the pole faces). The pull is greatest when the plate touches the whole face with no gap; it falls off very fast with even a thin gap of paint, rust, dirt or plastic, and it is much weaker against sliding the plate sideways (shear) than against pulling it straight off. When the current is switched off the field collapses and the plate comes free; a small leftover (residual) magnetism is dealt with by a spring-loaded ejector pin, a rubber washer, a coating or a special release circuit. There are no moving parts inside.

### Finder attributes

- **job**: hold or release using power: holds only while powered and lets go when switched off, join and hold: clamps a door, a held-open fire door, a robot's steel part or a crane's load firmly in place
- **motion**: none: nothing moves inside; the armature plate on a door can tilt slightly on its centre bolt so it sits flat against the magnet
- **degrees_of_freedom**: 0 while powered and clamped: the plate is held flat against the magnet (very strong against pulling straight off, much weaker against sliding). When the power is off the two parts are simply separate (6, completely free).
- **special_behaviour**: 
  - quick-release: lets go within a fraction of a second when the power is cut, from a switch, keypad, card reader, fire-alarm panel or microcontroller
  - fail-safe or breakaway: it fails safe, i.e. unlocks whenever power is lost, which is why maglocks are used on exit doors and why fire-door holders let doors close in a power cut; a fire-door holder is also weak enough for anyone to pull the door off it by hand
  - self-aligning or self-centring: a door maglock's armature plate pivots on its centre bolt and rubber washer so it settles flat on the magnet face (the magnet does not locate parts precisely)
- **holding_principle**: magnetic + powered hold: the magnetic pull exists only while current flows through the coil
- **input_output**: not applicable
- **power**: powered: needs a steady DC current the whole time it holds, e.g. about 0.5 A at 12 V or 0.25 A at 24 V (about 5-6 W) for a 600 lb door maglock, and about 0.3 A at 5 V for a 5 kg hobby module. If power is lost it releases (fail-safe). To stay locked through a power cut it needs a battery or UPS backup. (A 'holding magnet with electrical release', which holds with a permanent magnet and lets go while a reverse current flows, behaves the opposite way; see related types.)
- **removability**: tool-free quick release: switching off the power releases it instantly; the magnet and plate themselves are screwed or bolted in place and removed with a screwdriver
- **reuse_cycles**: effectively unlimited: nothing wears except the contact faces, which must be kept clean and undamaged (BEA's 600 lb maglock is listed at UL 294 Endurance Level IV)
- **tools_needed**: To fit: drill and screwdriver (plus the maker's mounting template and thread-locking compound for door maglocks), wire strippers or a soldering iron, a regulated DC power supply, and a relay or logic-level MOSFET board with a flyback diode if a microcontroller switches it. To open once installed: nothing, just cut the power.
- **seal**: none: it holds but does not seal the joint (door maglocks are potted in resin, and weatherproof versions exist for gates)
- **load**: light to heavy depending on size: hobby modules are rated 2.5-25 kg (about 25-250 N), industrial electro holding magnets about 150-2,100 N, and door maglocks about 275-2,000 lbf (1.2-8.9 kN). Very strong in a straight pull off the face; much weaker against sliding (shear), peeling up one edge or sudden jerks. The rating assumes thick, clean, flat soft steel in full contact, and a hobby electromagnet realistically lifts only about 1/5 to 1/10 of its rated holding force.
- **adjustable**: The position is mostly fixed when fitting (door armature plates self-adjust on their rubber washer; slotted brackets allow fine tuning). The holding force rises and falls with the current, so electromagnets allow adjustable force levels and some grippers regulate current to suit the load. Door maglock controllers often have adjustable relock timers (e.g. 1-90 s on BEA units).
- **play_and_precision**: Not a precise locator: the plate can land anywhere on the face as long as it covers it, and it holds wherever it lands. No play once clamped. It tolerates small misalignment only if the plate can tilt to sit flat (door plates pivot on their centre bolt); any gap or tilt that stops full face contact cuts the holding force sharply.
- **access_needed**: one side only (blind): both the magnet and the plate go on the inside (secure) face and can be surface-mounted; door armature plates are often through-bolted, which does need both sides of the door
- **materials**: Magnet: enamelled copper wire coil on a soft iron or mild-steel core (often laminated E-shaped plates), sealed in non-ferrous potting resin and plated against corrosion. Armature or target: soft magnetic (low-carbon) steel, about 1/8 in (3 mm) thick or more and at least as large as the magnet face. It only grips iron and steel: aluminium, brass, wood and plastic are not attracted, and 300-series (austenitic) stainless steel is nearly non-magnetic. Brackets can be steel, aluminium, wood or 3D-printed plastic (PETG, ASA or nylon rather than PLA, because the coil gets warm).
- **maker_difficulty**: easy: buy a ready-made maglock or hobby electromagnet module, screw it on, and switch it with a relay or MOSFET plus a diode; winding your own coil is possible but bought units are stronger for their size

### Making it

- **processes**: 
  - off-the-shelf part: door maglocks, electro holding magnets, hobby electromagnet modules, electromagnetic door holders
  - 3D print (FDM): brackets, housings with cooling slots, coil bobbins, robot gripper shells, and pockets that hold a steel armature plate flush with the surface
  - woodwork: fitting maglocks to cabinet doors, secret bookcase doors and escape-room props
  - sheet metal: steel armature plates and L, Z or U mounting brackets
- **print_in_place**: no: the electromagnet and steel plate are bought parts; printed brackets, housings and bobbins are separate parts that the magnet is screwed or glued into
- **making_tips_3d_printing**: Keep plastic out of the magnetic path: leave the magnet's pole face and the steel plate bare and flush, because even a thin layer of paint, plastic or a printed skin acts as an air gap and cuts the pull sharply (Magnet-Schultz; Radial Magnets quotes a 30-50% drop at about 1 mm). Let the armature plate float: mount it on a single centre screw with a rubber washer between steel washers and don't over-tighten, so it can tilt and sit flat on the magnet (BEA maglock guide); a printed pocket that holds a steel plate should let it sit proud of the plastic. Use soft (mild) steel at least about 3 mm (1/8 in) thick and as large as the magnet face for the plate (Magnet-Schultz). Heat: the coil warms up whenever it is on. In a published 3D-printed robot gripper run at 24 V and 1 A, the winding reached about 72 °C after 20 minutes and about 114 °C after 2 hours, while the printed shell reached 45 °C; the authors printed the shell in Onyx (nylon with carbon fibre, 145 °C heat-softening point) and cut radial and axial slots in it for cooling (Ruo et al. 2025). PLA softens above about 60 °C, PETG is suitable below about 80 °C and ASA up to about 93 °C (Prusa), so print housings that touch the coil in PETG, ASA or nylon, add vents, or leave room for a small fan (Printables 857827 has 20 x 20 mm fan cut-outs). Strength: a printed bracket has to carry the whole holding force. Hobby 2.5-25 kg modules are fine in printed mounts with thick walls, screws into heat-set inserts and generous washers; a 600 lb (2.7 kN) door maglock needs its metal bracket or through-bolts, and printed parts are best used only as spacers or covers (Printables 175082 is a PETG/PLA mounting for a 180 kg gate magnet printed at 40% infill). Coil bobbins can be printed and wound by hand for your own electromagnet (Printables 257865), though a bought pot-core module is far stronger for its size. The two half-shells of the published gripper were designed to print flat-side-down on the bed with no supports (Ruo et al. 2025). *(unverified parts omitted)*
- **off_the_shelf_parts**: Electromagnetic lock / maglock (surface-mount, 12/24 VDC, sold by holding force such as 60 kg, 180 kg, 280 kg / 600 lb and 1,200 lb; options with bond sensor, door status sensor, LED and relock timer) with its armature plate and L, Z or U brackets (U brackets for frameless glass doors); shear lock; electromagnetic door holder (fire door holder, 12/24 VDC or 24 VAC/120 VAC) with swivel armature; electro holding magnet (round pot type, e.g. 150-2,100 N ranges) with matching armature plates; hobby electromagnet modules (5 V round 'P20/15', 'P25/20', 'P30/22', 'P40/20' sizes rated 2.5-25 kg); holding magnet with electrical release (permanent magnet, reverse-polarity release); regulated, power-limited DC power supply; relay module or logic-level N-channel MOSFET; flyback diode such as 1N4007; request-to-exit button or sensor for doors.
- **rules_of_thumb**: 
  - A hobby electromagnet's 'holding force' is not what it can lift: divide the holding force by 5-10 for a rough lifting capacity, e.g. a 5 kg module lifts about 1 kg; it depends on flatness, contact area and the steel (Adafruit, https://www.adafruit.com/product/3873).
  - Rated forces are measured pulling the plate straight off along the centre axis with the whole face in flush contact; shear (sliding) holding force is much lower, partial air gaps and dirt 'significantly decrease' hold force, and loads should be applied gradually because a sudden jerk can separate them (Magnet-Schultz of America, https://magnet-schultzamerica.com/resources/blog/holding-electromagnet-usage-and-mounting-guide/). A magnet vendor's guide puts shear resistance at typically 15-25% of rated pull and pull at 30-50% less with about 1 mm of paint or plastic gap (Radial Magnets, https://radialmagnet.com/magnets-for-holding-and-latching/).
  - Armature plates should be soft magnetic steel; 1/8 in (about 3 mm) is the standard thickness, and thinner plates carry less magnetic flux and hold less (Magnet-Schultz of America, https://magnet-schultzamerica.com/resources/blog/holding-electromagnet-usage-and-mounting-guide/).
  - Upper limit: an iron core saturates at about 1.6-2 tesla, which gives a maximum magnetic pressure of about 1,000 kPa (145 psi) from F = B²A/2μ0, i.e. at most roughly 100 N per square centimetre of fully contacting pole face; real magnets hold less (Wikipedia, https://en.wikipedia.org/wiki/Electromagnet).
  - Door maglock sizes: micro 275 lbf, mini 650 lbf, midi 800 lbf, standard 1,200 lbf, shear lock 2,000 lbf; they draw about 5-6 W, e.g. 0.5 A at 12 VDC or 0.25 A at 24 VDC (Wikipedia, https://en.wikipedia.org/wiki/Electromagnetic_lock; BEA 600 lb guide, https://us.beasensors.com/files/downloads/products/ul-listed-maglocks/user-guides/en/75.5366.10.EN-MAGLOCKS-600lb-20230828.pdf). Under UL 294 testing, BEA's '600 lb' model is rated at 500 lb static strength and 33 ft-lb dynamic strength (same BEA guide).
  - Every switched coil needs a flyback (freewheeling) diode across it: when it is switched off the stored magnetic energy produces a large voltage spike that arcs across switch contacts or damages transistors (Wikipedia, https://en.wikipedia.org/wiki/Electromagnet; Adafruit requires a 'driver with kick-back protection', https://www.adafruit.com/product/3873).
  - Switch the DC side: if the power switch is not wired between the DC supply and the magnet (e.g. mains is switched instead), the magnet takes longer to let go, which looks like residual magnetism (BEA, https://us.beasensors.com/files/downloads/products/ul-listed-maglocks/user-guides/en/75.5366.10.EN-MAGLOCKS-600lb-20230828.pdf).
  - Coil temperature: catalogue 'hot' ratings assume the coil runs about 60 °C above ambient (about 80 °C at 20 °C ambient) (Geeplus, https://www.geeplus.com/electromagnets-general-technical-information/); copper's resistance rises about 0.4% per °C, so a hot coil draws less current and pulls a little less (Binder, https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids; observed in Ruo et al. 2025, https://iris.unimo.it/retrieve/9e272f86-73a2-4b1f-b8c7-359f661f1ca2/1-s2.0-S0957415825000832-main.pdf).

### When to use it

- **everyday_examples**: 
  - the magnetic locks along the top of office, school and apartment entrance doors that open with a card, keypad or exit button
  - fire-door holders on corridor walls that keep heavy doors open and let them swing shut when the fire alarm sounds
  - the big round magnet on a scrapyard crane that picks up scrap steel and drops it when switched off
  - escape-room doors and secret bookcase doors that pop open when a puzzle is solved
- **when_to_use**: When you want something held firmly and released instantly by an electric signal, and it is fine (or even required) for it to let go if the power fails: doors controlled by a keypad or card reader, escape-room props and secret doors, fire-door hold-opens, robot grippers and tool holders that pick up and drop steel parts, and quick-change fixtures for steel tooling. It is simple, silent, has no moving parts to wear or jam, tolerates a bit of door misalignment when the plate can pivot, and is easy to drive from an Arduino through a relay or MOSFET.
- **when_not_to_use**: Not when a power cut must not release it (lifting over people, a safe, anything that must stay locked in an outage): use an electro-permanent magnet, a fail-secure solenoid latch or electric strike, or a servo latch. Not for battery projects that must hold for hours (it draws current the whole time): use an electro-permanent magnet or a mechanical latch. Not for non-steel parts (aluminium, plastic, most stainless steel): add a steel plate or use a vacuum gripper. Not where the load slides sideways, peels or jerks: use a bolt-type latch or add a shelf, pins or a lip to take the shear. Not for real security on doors that can be pried at the gap, and not on exit doors without code-compliant release hardware.
- **environment_limits**: Heat: the coil warms whenever it is on (hot ratings assume about 60 °C above ambient, Geeplus) and a hotter coil pulls a little less; printed housings near it should be PETG, ASA or nylon rather than PLA (PLA softens above about 60 °C, Prusa). BEA's standard 600 lb maglock is rated for 0-49 °C (32-120 °F), 0-85% humidity, indoor and dry only; weatherproof versions exist for gates. Rust, dirt, paint or ice on the faces acts like an air gap and weakens it, so the faces are plated and should be kept clean (Locksmith Ledger; Magnet-Schultz). Vibration and sudden jerks can pop the plate off even below the rated force (Magnet-Schultz). Residual magnetism can build up over time in older designs so the door drags when unpowered (Locksmith Ledger). *(unverified parts omitted)*
- **safety_notes**: Doors that people walk through: a maglock must release for exit; the Life Safety and building codes (NFPA 101, IBC, IFC) require extra hardware such as exit buttons or motion sensors and release on fire alarm, and electric locking must never stop panic hardware or an emergency exit from working (Schlage; BEA). Escape-room builders use fail-safe maglocks plus a kill switch so nobody can be trapped (Hackaday). Because it fails open, a power cut unlocks it: for security add battery or UPS backup (one Hackaday home build used a UPS giving 6+ hours). Anything held by an electromagnet drops instantly if the power fails, so never lift over people or hold an overhead load with one (Walmag). Switching off the coil makes a high-voltage spike: always fit a diode. Coils get hot. Use a regulated, power-limited supply and have mains wiring done properly (BEA). *(unverified parts omitted)*
- **common_failures**: (1) Weak hold or the door can be pulled open: paint, rust, dirt, a printed skin or a warped plate leaves a gap; the plate is too thin or too small; the plate is bolted rigidly so it can't sit flat (BEA: don't over-tighten, the rubber washer lets it self-align); or the load is sliding rather than pulling straight off. Fix: clean, flat, thick soft steel in full contact, let the plate pivot, and take sideways loads with a stop. (2) Door sticks after the power goes off: residual magnetism; newer maglocks have a release circuit, and holding magnets can have a spring-loaded ejector pin (Locksmith Ledger; Geeplus). Also switch the DC side of the supply, not the mains side (BEA). (3) Microcontroller pin, transistor or relay contacts die: no flyback diode across the coil. (4) Printed housing sags, discolours or melts: coil heat; use PETG, ASA or nylon, add vents, and check the coil temperature after an hour. (5) Drops its load when the power flickers or a wire comes loose: this is how it is designed; use an electro-permanent magnet or a mechanical latch where that matters. (6) Supply too weak: the magnet is underpowered and holds less; size the supply for the rated current.
- **related**: 
  - Electro-permanent magnet: also switched electrically, but uses only a short pulse to switch and then holds with no power; keeps holding if the power fails
  - Switchable permanent magnet (rotary magnetic base): turned on and off by hand with a knob, no electricity at all
  - Magnet joint (embedded permanent magnets, magnetic catch): always on; pulled apart by hand
  - Holding magnet with electrical release (permanent electro holding magnet): a permanent magnet holds with no power and a reverse current cancels it to let go, so it stays locked in a power cut
  - Solenoid latch and electric strike: a steel bolt blocks the door instead of magnetic pull; can be fail-secure, is not weakened by small gaps, but needs good alignment
  - Electromagnetic brake and electromagnetic clutch: the same coil-and-armature-plate idea used to stop or drive a shaft
  - Vacuum (suction) gripper: the robot alternative for picking up non-steel objects
  - Servo or motorised latch: holds its position with no power and uses power only to move

### Pictures, videos and models

- **links**: 
  - [Magnetic Lock.jpg (Wikimedia Commons, Mooinglemur, 2008)](https://commons.wikimedia.org/wiki/File:Magnetic_Lock.jpg): Close-up photo of an electronically controlled door maglock: the long magnet body and its steel armature plate *(licence: Public domain)*
  - [Wooden fire door magnet.JPG (Wikimedia Commons, BrokenSphere, 2008)](https://commons.wikimedia.org/wiki/File:Wooden_fire_door_magnet.JPG): An electromagnetic fire-door holder on a wall holding a wooden fire door open; it releases when the fire alarm cuts the power *(licence: CC BY-SA 3.0 (also CC BY-SA 1.0/2.0/2.5 and GFDL 1.2+))*
  - [Tuerhaftmagnet-ankerplatte.jpg (Wikimedia Commons, Lars Karlsson, 2006)](https://commons.wikimedia.org/wiki/File:Tuerhaftmagnet-ankerplatte.jpg): Close-up of an electromagnetic door holder and its swivelling armature plate, which tilts to sit flat on the magnet *(licence: Public domain)*
  - [MAGLOCKS 600LB User's Guide (BEA, 2023, PDF)](https://us.beasensors.com/files/downloads/products/ul-listed-maglocks/user-guides/en/75.5366.10.EN-MAGLOCKS-600lb-20230828.pdf): Installation drawings of a door maglock: magnet on the frame, armature plate on the door, and the centre bolt with rubber and steel washers that lets the plate pivot; wiring diagrams *(licence: link only (manufacturer document))*
  - [Understanding MAGLOCKS (Playful Technology, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=7N87X-6VG84): Video about electromagnetic locks for escape-room builders *(licence: link only)*
- **make_it_yourself**: 
  - [A low-cost 3D printed electromagnetic gripper for robotic arms (Ruo et al., University of Modena and Reggio Emilia, Zenodo)](https://zenodo.org/records/11103762): Open-source robot-arm electromagnetic gripper: STEP and STL files of the printed shell, a building and setup guide, a cost analysis and test videos (300 g and 1,500 g samples) *(licence: CC BY 4.0)*
  - [Attaching the electromagnet (180kg) to the gate by Marián (Printables 175082; URL from Printables API, page not opened; details read via the Printables public API)](https://www.printables.com/model/175082-attaching-the-electromagnet-180kg-to-the-gate): Printed mounting parts for a 180 kg electromagnetic lock on a gate (PETG/PLA, 40% infill, no supports) *(licence: CC BY-SA)*
  - [Electromagnet Mounting bracket for mounting to 8020 railing by BillyBobPrintin (Printables 857827; URL from Printables API, page not opened; details read via the Printables public API)](https://www.printables.com/model/857827-electromagnet-mounting-bracket-for-mounting-to-802): Bracket that holds electromagnet coils on T-slot aluminium extrusion, with vents, a 20 x 20 mm fan cut-out and pockets for M2 heat-set inserts *(licence: CC BY-SA)*
  - [Electromagnet - lets create your own electromagnet by GymRBK (Printables 257865; URL from Printables API, page not opened; details read via the Printables public API)](https://www.printables.com/model/257865-electromagnet-lets-create-your-own-electromagnet): Printable coil frames (bobbins) for winding your own electromagnet, from a school project *(licence: CC BY-NC-SA)*
  - [Arduino - Electromagnetic Lock (ArduinoGetStarted tutorial)](https://arduinogetstarted.com/tutorials/arduino-electromagnetic-lock): Wiring diagram and example code for switching a 12 V maglock from an Arduino through a relay *(licence: link only)*
- **diagram_idea**: Side view of a door and its frame in two panels: 'power on', with field-line loops running from a coil-wrapped magnet on the frame through a steel plate on the door, and 'power off', with the plate swinging away; a small inset shows how a thin layer of paint or plastic between plate and magnet makes the grip much weaker, and an arrow shows it is strong pulling straight off but weak sliding sideways.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electromagnetic_lock
  - https://en.wikipedia.org/wiki/Electromagnet
  - https://en.wikipedia.org/wiki/Electromagnetic_door_holder
  - https://commercial.schlage.com/en/resources/training-education/schlage-101/electromagnetic-locks.html
  - https://www.locksmithledger.com/electronics-access-control/article/10856574/guide-to-electromagnetic-locks
  - https://us.beasensors.com/files/downloads/products/ul-listed-maglocks/user-guides/en/75.5366.10.EN-MAGLOCKS-600lb-20230828.pdf
  - https://magnet-schultzamerica.com/resources/blog/holding-electromagnet-usage-and-mounting-guide/
  - https://www.geeplus.com/electromagnets-general-technical-information/
  - https://www.tds-pp.com/en/product/electromagnets/
  - https://radialmagnet.com/magnets-for-holding-and-latching/
  - https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids
  - https://www.walmagmagnetics.com/blog/differences-between-permanent-magnets-electropermanent-magnets-and-electromagnets
  - https://www.adafruit.com/product/3873
  - https://arduinogetstarted.com/tutorials/arduino-electromagnetic-lock
  - https://iris.unimo.it/retrieve/9e272f86-73a2-4b1f-b8c7-359f661f1ca2/1-s2.0-S0957415825000832-main.pdf
  - https://zenodo.org/records/11103762
  - https://hackaday.com/2022/08/03/a-classic-tv-trope-for-an-escape-room/
  - https://hackaday.com/tag/magnetic-lock/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/asa_1809
  - https://commons.wikimedia.org/wiki/File:Magnetic_Lock.jpg
  - https://commons.wikimedia.org/wiki/Category:Magnetic_locks
  - https://commons.wikimedia.org/wiki/File:Wooden_fire_door_magnet.JPG
  - https://commons.wikimedia.org/wiki/File:Tuerhaftmagnet-ankerplatte.jpg
  - https://www.youtube.com/watch?v=7N87X-6VG84 (verified via YouTube oEmbed)
  - https://www.printables.com/model/175082-attaching-the-electromagnet-180kg-to-the-gate (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/857827-electromagnet-mounting-bracket-for-mounting-to-802 (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/257865-electromagnet-lets-create-your-own-electromagnet (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, safety_notes

## 104 Electro-permanent magnet

*powered & active connectors.* A magnet that is switched on or off by a short electric pulse and then holds (or stays released) with no power at all

### What it is

- **plain_name**: A magnet you switch on or off with a quick zap of electricity; after the zap it keeps holding (or stays off) with no power at all
- **term**: Electropermanent magnet (EPM)
- **aliases**: 
  - electro-permanent magnet / EP magnet
  - EPM gripper / electropermanent magnetic gripper / magnetic payload gripper (drones)
  - programmable magnet / switchable electropermanent magnet
  - electro-permanent lifting magnet (cranes)
  - electro-permanent magnetic chuck / electro-permanent work holding (machine tools)
  - electro-permanent magnetic end-of-arm tooling (EOAT) / magnetic quick changer (robots)
  - FluxGrip (brand, Zubax Robotics)
  - OpenGrab EPM (brand, NicaDrone and Zubax; discontinued)
  - ferreed (1960s telephone switch built on the same idea)
- **family**: powered & active connectors
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A solid-state magnet made of two kinds of permanent magnet and a coil: a short pulse of current flips one of the magnets so the pair either adds up (on, gripping steel strongly) or cancels out (off), and it stays in that state with no power until the next pulse.
- **complexity**: A small assembly that acts as one unit: a strong 'hard' permanent magnet (neodymium, NdFeB) and a switchable 'semi-hard' magnet (usually alnico) side by side, soft-iron pole pieces capping both ends, a copper coil wound around the alnico, and a driver circuit (energy-storage capacitor, H-bridge switches and a controller) that fires the pulses. Plus a steel target plate on the object being held.
- **how_it_works**: The neodymium magnet always points the same way and is too 'hard' to be changed. The alnico magnet can be re-magnetised in either direction by a very short, strong current pulse through the coil wound around it. When both magnets point the same way, their field flows out through the iron pole pieces and grips a steel plate like a strong permanent magnet (on). A pulse the other way flips only the alnico, so the field just loops round inside the device and almost none reaches the outside (off). No current is needed to stay on or off: energy is used only for the moment of switching.

### Finder attributes

- **job**: hold or release using power: power is needed only to switch between holding and releasing, not to keep holding, join and hold: clamps a steel part, tool, payload or workpiece firmly in place
- **motion**: none: nothing moves inside (entirely solid-state); only the direction of magnetisation inside the alnico changes
- **degrees_of_freedom**: 0 while switched on and in contact with the steel (very strong against pulling straight off, weaker against sliding); when switched off the parts are simply separate (6, completely free).
- **special_behaviour**: quick-release: a pulse releases the load on command, e.g. a drone dropping a package or a robot putting down a steel part; it then stays released with no power until the next 'on' pulse
- **holding_principle**: magnetic: permanent-magnet pull that is switched electrically (not a powered hold, because no power is used while holding)
- **input_output**: not applicable
- **power**: powered, but only to switch: e.g. the Zubax FluxGrip FG40 uses about 4 J per switch at a constant 1 A from a 4-30 V supply (idle 50 mW), and the 12 mm MIT 'Pebbles' EPMs used 5 mJ pulses. If power is lost it keeps its last state: a holding EPM keeps holding and a released one stays released. So a power cut will not drop the load, but you also cannot release it without power.
- **removability**: tool-free quick release: switched off with a pulse, then the part simply lifts away; the EPM unit itself is screwed or bolted in place
- **reuse_cycles**: Zubax gives the FG40's magnetisation cycle limit only on request and quotes a 50,000 h service life] *(unverified parts omitted)*
- **tools_needed**: To fit: screwdriver or bolts and a way to attach a steel target plate to the payload (screws or glue). To wire: soldering iron or crimp tool, and a control signal (RC-servo PWM, CAN/DroneCAN or a logic input on commercial units). For a home-made EPM: coil-winding set-up, a pulse circuit (capacitor bank and H-bridge) and an oscilloscope or current probe to check the pulse.
- **seal**: none: it holds but does not seal the joint (the Zubax FG40 unit itself is sealed to IP69)
- **load**: light to medium in small sizes, heavy in industrial lifters: a 72 g Zubax FG40 holds up to 250 N (25 kgf) on a 4 mm polished iron sheet; the OpenGrab EPM v3 (under 4 x 4 x 2 cm) held 200 N, about 15 kg of cargo; a tiny EPM in Knaian's MIT thesis held 4.4 N, over 2,000 times its own weight; industrial electro-permanent lifting magnets lift heavy steel plates and blocks. Strongest pulling straight off, weaker against sliding, and only with flat, clean, thick enough steel in full contact.
- **adjustable**: Yes, partly: the holding force can be set anywhere between off and full by the length of the switching pulse (in Knaian's tests the force rose steadily with pulse length up to about 100 µs, then levelled off at 4.4 N). Mounting position is fixed.
- **play_and_precision**: Not a precise locator: it holds the steel wherever it touches the pole faces. No play once on. Needs full, flat contact; if the steel is pulled away and allowed to snap back, the hold is weaker until the magnet is pulsed on again.
- **access_needed**: one side only (blind): it grips a steel surface from one side
- **materials**: Inside: NdFeB (neodymium-iron-boron) as the fixed hard magnet, AlNiCo (e.g. Alnico 5) as the switchable semi-hard magnet, iron or a high-permeability alloy such as Hiperco for the pole pieces, and copper magnet wire; housed in polymer composite or metal. Target: iron or low-carbon steel only; Zubax recommends a material with high permeability (relative permeability above 1,000) and high saturation (above 2 T) and rates the FG40 on 4 mm polished iron, while OpenGrab shipped a thin steel target square to stick onto non-steel payloads.
- **maker_difficulty**: hard to build, easy to buy: making one needs alnico and neodymium magnets, iron pole pieces, a hand-wound coil and a pulse circuit that delivers a strong, very short current pulse (5 A for 100 µs in Knaian's 12 mm cubes, up to kiloamp pulses in large research devices) from a charged capacitor; ready-made EPM grippers such as the Zubax FluxGrip just plug in but are relatively expensive

### Making it

- **processes**: 
  - off-the-shelf part: EPM grippers for drones and robots, electro-permanent lifting magnets, electro-permanent magnetic chucks and quick changers
  - 3D print (FDM): mounting brackets, drone payload hooks and boxes carrying a steel target plate, coil holders or bobbins for home-made EPMs
  - sheet metal: steel target plates and iron pole pieces
- **print_in_place**: no: the EPM is a bought or hand-assembled unit (magnets, pole pieces and coil); printed mounts and payload parts are separate
- **making_tips_3d_printing**: You can't print the magnet itself, but printing is very handy around it. Target plates: glue or screw a flat steel or iron plate into the printed payload so it sits proud of (or flush with) the plastic and touches the whole pole face; a printed skin over the steel acts as an air gap. Zubax rates its FG40 on 4 mm polished iron and recommends direct contact across the entire area; OpenGrab supplied a thin steel square to stick on payloads, which works but holds less than thick iron. Keep the payload from peeling or sliding: add a printed lip, cone or pins around the magnet so sideways loads are taken by the plastic and the magnet only has to resist a straight pull. Mount the EPM rigidly with screws into heat-set inserts. On drones, keep the EPM at least about 10 cm from the compass, or test the compass readings if it has to be closer (ArduPilot). Heat is rarely a problem because it draws almost nothing while holding, but the FG40's own internal temperature limit is +73 °C, so don't enclose it next to hot motors or batteries in sun; PETG or ASA mounts are safer than PLA outdoors (Prusa: PLA softens above about 60 °C, PETG suits parts below about 80 °C, ASA up to about 93 °C and resists UV). Home-made EPMs: research builds have used custom 3D-printed holders to hold bundles of alnico rods while the coil was wound around them (a 40-turn coil round 200 Alnico-5 rods, pulsed at about 1 kA for about 50 µs, in an open-access medical-research paper), and Knaian's thesis gives materials, methods and design formulas for small EPMs made from cylindrical NdFeB and alnico rods with iron end caps. Check magnet polarity before gluing, because the hard magnet must line up with the pole pieces. Design any printed jig so the strong neodymium magnet can't snap onto steel tools and trap fingers.
- **off_the_shelf_parts**: Electropermanent magnet gripper for drones and robots (Zubax FluxGrip FG40 family: FG401M, FG401MA with RC-PWM/analogue control, FG402M with redundant CAN; OpenGrab EPM v3, discontinued); electro-permanent lifting magnet (with controller and battery-free holding); electro-permanent magnetic chuck (compensated or non-compensated) for grinding and milling; electro-permanent magnetic end-of-arm tooling / quick-change plates for robots; for home builds: Alnico 5 rods, NdFeB rod or block magnets, soft-iron or low-carbon steel pole pieces, enamelled magnet wire, high-current H-bridge MOSFETs and low-ESR capacitors; steel target plates.
- **rules_of_thumb**: 
  - Energy break-even: an EPM needs about 10 times more power than an equivalent electromagnet during its short switching pulse, but uses less energy overall whenever the hold lasts longer than a break-even time of about 10 ms at centimetre scale (about 100 µs at millimetre scale); in the 12 mm Pebbles that meant switching less often than every 2 ms (Knaian thesis, pp. 21-22 and 92-93, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
  - Switching energy grows with the magnet's volume while holding force grows with its face area, so scaling an EPM down keeps it efficient (Knaian thesis, p. 22, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
  - Holding force rises in proportion to the switching pulse length and then saturates (4.4 N at about 100 µs for the thesis device), so a shorter pulse gives a partial hold (Knaian thesis, p. 103, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
  - Pulling the steel away and letting it come back weakens an EPM: after being pulled 0.75 mm away and returned, the test device held only about half its original force, so re-pulse it 'on' while the steel is in contact (Knaian thesis, pp. 102-103, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf; Zubax: 'only able to retain full magnetization as long as it is held in contact with the payload', https://fluxgrip.zubax.com/chapters/functional.html).
  - Force versus distance: in contact an EPM holds as hard as a rare-earth magnet, but its pull drops off faster with distance, like a magnet made of the semi-hard material (Knaian thesis, p. 22, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
  - Pulse example for small EPMs: 20 V supply, 100 µs square pulse, about 5 A peak, 5 mJ per switch, supplied from a 100 µF tantalum capacitor (Knaian thesis, p. 110, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
  - Commercial example: Zubax FG40, 72 g, 4 x 4 x 2 cm, 25 kgf on 4 mm polished iron, 4 J per (de)magnetisation at a constant 1 A, 50 mW idle, 4-30 V DC, IP69 (https://fluxgrip.zubax.com/chapters/hardware/fg40.html). Holding force follows F = B²A/(2μ0) and falls quickly as the air gap grows (https://fluxgrip.zubax.com/chapters/functional.html).
  - Only the alnico switches because its coercivity (resistance to being re-magnetised) is about 50 kA/m against about 1,120 kA/m for NdFeB (Wikipedia, https://en.wikipedia.org/wiki/Electropermanent_magnet).
  - On drones, magnetic interference from an EPM is minimal at 10 cm; test the compass if it is mounted closer (ArduPilot, https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html).

### When to use it

- **everyday_examples**: 
  - big crane magnets in steel mills and warehouses that lift steel plates and keep holding them even if the power fails (electro-permanent lifting magnets)
  - the magnetic table on a grinding or milling machine that clamps a steel workpiece at the push of a button (electro-permanent chuck)
  - delivery and rescue drones that drop a package by releasing a magnet
  - the free-spinning scroll wheel on some computer mice (Logitech's MagSpeed wheel uses one, according to Wikipedia)
- **when_to_use**: When you need a strong magnetic grip that can be switched electrically but must keep holding for a long time with no power, or must not let go if the power fails: drone payload release, robot grippers and quick tool changers, battery-powered props or modular robots that snap together, work holding and lifting. It has no moving parts to wear, jam, vibrate loose or ice up, uses no power while holding (great for batteries), and does not heat up while holding.
- **when_not_to_use**: Not when the part must be released if power fails (e.g. an exit door): use a holding electromagnet (maglock). Not for non-steel objects: fit a steel plate or use a vacuum gripper. Not when the object may be knocked away and come back without a re-pulse (it loses part of its hold). Not for cheap, simple projects where a hobby electromagnet, servo latch or solenoid latch will do, since EPMs are expensive to buy and hard to make. Not where sideways or peeling loads are large: add a mechanical lip or a latch. For hand-operated holding with no electronics at all, use a switchable permanent magnet (rotary magnetic base).
- **environment_limits**: Very tolerant of vibration, dust and water when sealed (the FG40 is IP69, works from -40 °C, and is described as resistant to seawater, salts, acids, vibration and extreme temperatures), with an internal limit of +73 °C set by its polymer composite. Neodymium magnets lose some strength when warm and lose it permanently above their maximum operating temperature (K&J: 150 °C for N42SH grade; a small N42 magnet at 100 °C dropped about 32%). The hold does not creep or fade with time because nothing is powered or sprung, but it is partly lost if the steel is pulled away and let back. A strong brownout can stop it switching (the FG40 detects deep brownouts and latches a fault). Its field can disturb a nearby compass (keep about 10 cm away).
- **safety_notes**: A power cut does not release the load: this is safer for lifting, but it also means you cannot drop the load or free something trapped without power, so plan an emergency way to power the release. Switching circuits store energy in charged capacitors and fire high-current pulses: OpenGrab's documentation warns to avoid contact with its high-voltage parts ('If you do not cycle the EPM you cannot get zapped') and Zubax warns not to disassemble the FG40 because of the risk of electric shock. Never release a load above people. Strong neodymium magnets inside home-made EPMs can pinch fingers badly, shatter if they slam together, affect pacemakers and implanted devices, and are dangerous if swallowed (K&J Magnetics; US CPSC).
- **common_failures**: (1) Weak or no grip: the steel is thin, painted, rough, curved or only partly touching, or it is not steel at all; use a flat iron or mild-steel plate (4 mm on the FG40 rating) in full contact. (2) Grip fades after a bump: the payload was pulled away and returned, partly demagnetising the alnico; pulse it on again once in contact. (3) It won't switch: supply voltage too low or sagging (OpenGrab flags an error below 4.5 V; the FG40 latches a fault on deep brownout), or the pulse is too short to fully flip the alnico. (4) Part stays stuck when switched off: some residual force remains, especially with stronger 'compensated' industrial EPMs, which need a demagnetising cycle before the workpiece comes away (Walmag). (5) Drone compass errors: mounted too close to the compass. (6) Home-made unit loses strength: neodymium magnet overheated or the magnets assembled with the wrong polarity.
- **related**: 
  - Holding electromagnet (maglock): also electric, but needs current all the time it holds and lets go if the power fails
  - Switchable permanent magnet (rotary magnetic base): the hand-operated cousin; a knob turns one magnet against another instead of an electric pulse flipping it
  - Magnet joint (embedded permanent magnets): always on, pulled apart by hand
  - Holding magnet with electrical release: a permanent magnet that holds with no power and lets go only while a reverse current flows through its coil
  - Servo or motorised latch: also holds with no power and needs power only to change state, but has moving parts and works on any material
  - Latching (bistable) solenoid: also keeps its last position with no power, using a permanent magnet and a reverse pulse, but moves a bolt instead of gripping steel
  - Vacuum (suction) gripper: grips non-steel objects but needs continuous vacuum

### Pictures, videos and models

- **links**: 
  - [Electropermanent magnet switching simulation.gif (Wikimedia Commons, Magneticswizard)](https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif): Animated simulation of an EPM switching ON and OFF by reversing the AlNiCo magnetisation, showing the flux lines and holding force on a steel workpiece *(licence: CC BY 4.0)*
  - [Electropermanent magnet (Wikipedia)](https://en.wikipedia.org/wiki/Electropermanent_magnet): Explanation with diagrams of the on and off states, magnetic-circuit simulations and air-gap animation; lists uses (drone grippers, Project Ara, programmable matter) *(licence: text CC BY-SA 4.0; images per file)*
  - [Electropermanent Magnets: Programmable Magnets with Zero Static Power Consumption Enable Smallest Modular Robots Yet (Hizook)](https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/): Photos and cross-sections of MIT's tiny EPMs and 12 mm 'Pebbles' robots, B-H curves, a historic ferreed switch and an industrial work-holding chuck *(licence: link only)*
  - [EEVblog 1656 - MAILBAG: ElectroPermanent Magnet, DIN PSU's, Sponge, Beelink EQ14 N150 PC (EEVblog, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=FqN77SZF5zU): Dave Jones testing a Zubax FluxGrip EPM; the EPM segment starts at about 7:30 (per Hackaday) *(licence: link only)*
  - [Electro-permanent Magnets For Quadcopters (Hackaday, 2013)](https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/): The open-hardware OpenGrab EPM used to let quadcopters pick up and drop steel payloads, with photos and links *(licence: link only)*
- **make_it_yourself**: 
  - [OpenGrab EPM v3 (Zubax/NicaDrone, GitHub; README read via raw.githubusercontent.com)](https://github.com/Zubax/opengrab_epm_v3): Open-hardware electropermanent magnet gripper: hardware design files, firmware and flashing instructions (product discontinued; the design remains a reference) *(licence: hardware CC BY-SA 4.0; firmware GPL v3)*
  - [Electro Permanent Magnet Gripper (OpenGrab EPM v3) (ArduPilot Copter documentation)](https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html): How to wire and control an EPM gripper from a drone flight controller (PWM, DroneCAN, mission commands) and where to mount it *(licence: link only)*
  - [FluxGrip reference manual (Zubax Robotics)](https://fluxgrip.zubax.com/): Integration manual for a ready-made EPM gripper: how it works, holding-force physics, electrical interface and fault handling *(licence: link only)* *(unverified parts omitted)*
- **diagram_idea**: Two side-by-side cutaways of a short neodymium bar and an alnico bar between two iron end caps, with a coil round the alnico and a steel plate below: 'ON', with both magnet arrows pointing the same way and field lines passing out through the plate, and 'OFF', with the alnico arrow reversed and the field lines looping round inside; a small lightning bolt on the coil marks the brief switching pulse, and a battery icon crossed out shows that no power is needed in either state.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electropermanent_magnet
  - https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/
  - https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf
  - https://dspace.mit.edu/handle/1721.1/60151
  - https://fluxgrip.zubax.com/chapters/functional.html
  - https://fluxgrip.zubax.com/chapters/hardware/fg40.html
  - https://fluxgrip.zubax.com/
  - https://zubax.com/blog/zubax-robotics-releases-fluxgrip-fg40-an-electropermanent-magnet-for-payload-attachment-in-drones-that-will-obsolete-existing-electromechanical-alternatives/2296
  - https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html
  - https://raw.githubusercontent.com/Zubax/opengrab_epm_v3/master/README.md
  - https://github.com/Zubax/opengrab_epm_v3 (appeared in search results; README read via raw.githubusercontent.com)
  - https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/
  - https://hackaday.com/2026/04/01/watch-an-electro-permanent-magnet-in-action/
  - https://hackaday.com/tag/epm/
  - https://www.walmagmagnetics.com/blog/differences-between-permanent-magnets-electropermanent-magnets-and-electromagnets
  - https://www.hvrmagnet.com/blog/why-doesnt-the-electro-permanent-lifting-magnet-force-disappear-after-power-failure/
  - https://www.hvrmagnet.com/blog/electro-permanent-magnetic-eoat-with-quick-change-system/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9317373/
  - https://www.kjmagnetics.com/neodymium-magnet-safety.asp
  - https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
  - https://www.cpsc.gov/content/cpsc-warns-high-powered-magnets-and-children-make-a-deadly-mix
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/asa_1809
  - https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif
  - https://www.youtube.com/watch?v=FqN77SZF5zU (verified via YouTube oEmbed)

### Other info

- **Fields with unverified parts:** make_it_yourself, reuse_cycles

## 105 Solenoid latch (solenoid lock, electric strike)

*powered & active connectors.* An electric coil pulls a spring-loaded bolt or catch back when powered, used to unlock doors, boxes and release mechanisms

### What it is

- **plain_name**: An electric catch: a spring pushes a bolt out to keep a door, lid or drawer shut, and when power goes to the coil it pulls the bolt back so it can open
- **term**: Solenoid latch (solenoid lock); on building doors: electric strike
- **aliases**: 
  - solenoid lock / lock-style solenoid
  - electric cabinet lock / solenoid cabinet lock / 12 V solenoid door lock
  - electronic latch / electric latch release
  - electric strike / door strike / door release / buzzer door release (German 'Türöffner', Polish 'elektrozaczep')
  - electric bolt lock / electromagnetic bolt
  - push-pull solenoid or pull-type solenoid used as a latch (e.g. the JF-0530B hobby solenoid)
  - cabinet spring lock / locker lock (parcel-locker style)
  - latching (bistable) solenoid
  - cash drawer solenoid
  - fail-secure lock / fail-safe lock (names for its power-loss behaviour)
- **family**: powered & active connectors
- **other_families**: locks, latches & catches
- **one_liner**: A spring-loaded bolt or catch that an electromagnet coil (solenoid) pulls back when it is powered, so a door, box, drawer or release mechanism opens on an electric signal and locks itself again when closed.
- **complexity**: A few parts: a copper coil around a steel plunger (the sliding bolt or 'slug', often with a slanted end), a return spring, a steel frame or case with a mounting bracket, and a catch or strike on the other part. An electric strike is a small assembly that acts as one unit: a box set into the door frame with a hinged jaw (keeper), a spring, and a solenoid that locks or frees the keeper. Plus the electrics: a DC supply and a switch, relay or transistor with a diode across the coil.
- **how_it_works**: A spring pushes the steel bolt (plunger) out so it sticks into a catch and holds the door, lid or drawer shut. When current flows through the coil, it becomes an electromagnet and pulls the plunger into the coil, drawing the bolt back so the door can open; when the current stops, the spring pushes the bolt out again. Many bolts have a slanted face, so closing the door pushes the bolt back by itself and it snaps into the catch (it locks itself). An electric strike works the other way round: the door keeps its ordinary latch, and the solenoid in the frame frees or blocks a hinged jaw (keeper), so when unlocked the latch can push the jaw aside and the door opens.

### Finder attributes

- **job**: 
  - hold or release using power: most versions stay locked with no power and unlock while powered (fail-secure); others lock only while powered (fail-safe)
  - join and hold: the bolt keeps a door, lid, drawer or mechanism shut
- **motion**: slide: the bolt or plunger moves in and out, about 10 mm in hobby lock-style and push-pull solenoids; in an electric strike the keeper (jaw) also swings aside
- **degrees_of_freedom**: 0 between door and frame while locked (the bolt blocks the door); the plunger itself has 1 (it slides in the coil); once unlocked the door has its own 1 (hinge or slide).
- **special_behaviour**: 
  - quick-release: opens instantly on an electric signal from a keypad, card reader, intercom button, cash register or microcontroller; some strikes and locker locks stay unlocked after a short pulse until the door is actually opened (hold-open), then relock
  - one-way (moves freely one way, locks the other): a slanted bolt or a strike's ramped keeper lets a closing door push past and latch itself, but blocks it from opening
  - fail-safe or breakaway: sold as fail-secure (stays locked if the power fails) or fail-safe (unlocks if the power fails); many electric strikes can be switched between the two in the field
- **holding_principle**: shape (the bolt blocks the door or lid; form-fit), pushed into place by spring force (the return spring); in fail-safe versions a powered hold (the coil holds the bolt out only while powered); latching (bistable) solenoids hold their position with a small permanent magnet
- **input_output**: not applicable
- **power**: powered: fail-secure types (most hobby lock-style solenoids, cabinet and locker locks, cash drawers and many electric strikes) stay locked when power is lost and need power only to open, e.g. about 0.65 A at 12 V for 1-10 s (Adafruit 1512) or a 100-300 ms pulse (parcel-locker spring lock); fail-safe types lock only while powered and unlock if the power fails; latching (bistable) solenoids keep their last position with no power and switch back with a reverse pulse.
- **removability**: tool-free quick release: opens on an electric signal; the lock body itself is screwed in place
- **tools_needed**: To fit: drill and screwdriver (a chisel or router to recess a door electric strike into the frame); wire strippers or soldering iron; a DC power supply that can deliver the inrush current; a relay, solid-state relay or logic-level MOSFET with a diode for microcontroller control. To open: only the electric signal (plus a key or manual override if one was designed in).
- **seal**: none
- **load**: light to heavy: small cabinet solenoids have bolts about 10 mm square meant for light duty with little side force; door electric strikes are heavy duty, with static strengths of about 1,500-3,250 lb and dynamic strengths around 70 ft-lb. The steel bolt is strong in shear when blocking the door, but the solenoid itself only pulls a few newtons (e.g. 5 N at the end of its 10 mm stroke for a JF-0530B), so it cannot pull the bolt back if the door is pressing on it (preload).
- **adjustable**: A little: lock-style solenoids let you rotate the slanted slug to face any of four directions to suit the door (Adafruit 1512, ProtoSupplies); electric strikes have horizontal adjustment or swappable jaw inserts to match the latch position and relieve preload; controller software sets how long it stays unlocked. The force cannot be adjusted.
- **play_and_precision**: Needs a small gap and good alignment between bolt and catch: too tight and door pressure pinches the bolt so it cannot retract (preload), too loose and the door rattles or the bolt misses. Basic electric strikes release under only about 3-5 lb of preload, premium ones up to 25 lb. It does not locate parts precisely.
- **access_needed**: one side only (blind): fitted inside the box, cabinet or door (the secure side); a door electric strike goes into the door frame where the ordinary strike plate was
- **materials**: Copper coil, soft-steel plunger and frame (the magnetic path), steel return spring; lock bodies in stainless or plated steel; electric strike faceplates in stainless steel or brass. *(unverified parts omitted)*
- **maker_difficulty**: easy: buy a 12 V lock-style solenoid or a small push-pull solenoid, mount it with a printed or bent-metal bracket, and drive it with a relay or MOSFET plus a diode; the fiddly part is lining up the bolt and the catch

### Making it

- **processes**: 
  - off-the-shelf part: lock-style solenoids, cabinet and locker locks, push-pull solenoids, electric strikes, electric bolt locks
  - 3D print (FDM): mounting brackets, catches, keepers, strike plates and enclosures
  - woodwork: fitting into cabinets, boxes, drawers, doors and escape-room props
  - sheet metal: steel catches, strike plates and brackets
- **print_in_place**: no: the solenoid is a bought part; printed brackets, catches and housings are separate parts
- **making_tips_3d_printing**: Print the bracket and the catch, not the solenoid. Mount the solenoid with its own screw holes (e.g. two M3 holes on a JF-0530B) into heat-set inserts or through-bolts; DigiKey's printed briefcase mount was simply epoxied in place, though screws also work (Printables 1081150). Match the catch to the bolt: with a slanted slug, make the catch ramp face the same way so the closing lid pushes the slug in, and make the hole in the catch shallower than the solenoid's stroke (about 10 mm on common 12 V lock and push-pull solenoids) so the bolt fully clears it when pulled in. Leave clearance round the bolt so it is never pinched: if a spring, seal or tightly packed lid presses on the bolt, the few newtons of pull from a small solenoid cannot drag it free (the same 'preload' problem that electric strikes are rated for, Locksmith Ledger); test release with the lid under its real pressure. The pull is strongest near the end of the stroke and weakest at the start (Tinytronics JF-0530B; Binder), so avoid designs where the bolt must start moving against a load. Heat: the coil gets hot if left on (the Adafruit 1512 is meant for 1-10 s activations), so keep PLA away from the coil body or print the bracket in PETG or ASA (Prusa: PLA softens above about 60 °C, PETG suits below about 80 °C, ASA up to about 93 °C). For a fail-secure box, design in a hidden manual release (a pull cord, a pin hole or an external power jack) so a flat battery doesn't lock the contents in for good (DigiKey safe build). A Thingiverse design flips the idea for fail-safe use: a spring pushes the rod to open the lock when power is lost (Thingiverse 6071727). *(unverified parts omitted)*
- **off_the_shelf_parts**: Lock-style solenoid 12 VDC with slanted slug and bracket (e.g. Adafruit 1512; small version Adafruit 5065); solenoid electric door/cabinet lock 12 V (about 0.9 A, 10 mm stroke); open-frame push-pull solenoid JF-0530B (12 V, 5 N, 10 mm) and JF-0630B; cabinet spring lock / locker lock (pulsed release, stays open until the door is reclosed); electric strike (fail-safe/fail-secure, 12/24 VDC or 12-24 VAC, cylindrical, mortise, deadbolt and rim-panic types, preload-rated and hold-open versions); electric bolt lock; latching (bistable) solenoid; rotary solenoid; cash drawer solenoid (12 or 24 V drawer-kick); tubular push/pull solenoids (e.g. Ledex); relay module, solid-state relay (e.g. Panasonic AQY212GH) or logic-level MOSFET; flyback diode (e.g. 1N4007); door position sensor (reed or Hall effect).
- **rules_of_thumb**: 
  - Duty cycle = on time / (on time + off time), e.g. 2 minutes on in a 5-minute cycle is 40%; ratings assume a set ambient temperature (Binder uses +35 °C), and at 60 °C ambient a 25% rating drops to about 16.75% (multiply by 0.67) (Binder, https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids).
  - Hobby lock solenoids are for short bursts only: Adafruit's 12 V lock-style solenoid is designed for 1-10 second activations (https://www.adafruit.com/product/1512); a 12 V 0.9 A solenoid door lock allows about 20 s maximum unlatched (https://protosupplies.com/product/solenoid-electric-door-lock-12v-0-9a/); a parcel-locker spring lock wants about a 100 ms pulse and at most 300 ms and will overheat and fail if powered continuously (https://learn.escaperoomtechs.com/cabinet-mag-lock/); cash drawers open on pulses under about 100 ms at about 1 A (https://www.posatmparts.com/guides/cash-drawer-wiring-connection-guide).
  - Pull force is highest at the end of the stroke (plunger nearly in) and lowest at the start: a JF-0530B gives its 5 N maximum in the end position over a 10 mm stroke (https://www.tinytronics.nl/en/mechanics-and-actuators/solenoids/solenoids/solenoid-push-pull-12v-300ma-jf-0530b); rising (ascending) force-stroke curves suit working against a spring (Binder, https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids).
  - Size the supply for the inrush current: about 500-650 mA flows into a 12 V lock-style solenoid, so a 9 V battery won't work (Adafruit, https://www.adafruit.com/product/1512).
  - Fit a diode across the coil to absorb the voltage spike when the field collapses (ProtoSupplies, https://protosupplies.com/product/solenoid-electric-door-lock-12v-0-9a/; Adafruit recommends power transistors and protective diodes, https://www.adafruit.com/product/1512).
  - Door preload: standard electric strikes release under about 3-5 lb of door pressure, preload-rated ones up to 25 lb, and real doors typically see up to 15-20 lb from HVAC stack pressure, weatherstripping, swelling or misalignment (Locksmith Ledger, https://www.locksmithledger.com/electronics-access-control/strikes-electro-magnetic/article/21288458/preload-electric-strikes-under-pressure).
  - Copper coil resistance rises about 0.4% per °C, so a hot coil draws less current and pulls less; coil insulation classes set the maximum coil temperature, e.g. class B 130 °C, F 155 °C, H 180 °C (Binder, https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids).

### When to use it

- **everyday_examples**: 
  - the buzzing door release on an apartment building's entrance, opened from the intercom (an AC-powered electric strike)
  - office doors that unlock with a card reader or keypad and relock when they close
  - parcel lockers whose doors pop open when you type in a code
  - a shop cash drawer that springs open when a receipt prints
- **when_to_use**: When something must stay locked without using power and open only on an electric signal: keypad, RFID or app-controlled boxes, cabinets, lockers and escape-room props; adding remote entry to a door that keeps its normal handle and key (electric strike); triggering a release mechanism such as a drop, a spring-loaded lid or a trap door. Good when the bolt must resist a strong pull (a steel bolt is not weakened by paint or small gaps as a magnet is) and when a power cut must not open it (fail-secure).
- **when_not_to_use**: Not where the bolt is pressed hard sideways when it needs to release (a stuffed box lid, a swollen door): use a preload-rated strike, a servo or motorised latch, or a lever that takes the load off the bolt. Not for staying unlocked for long periods, because the coil overheats: use a latching solenoid, a servo latch or a hold-open strike. Not as a fail-secure lock on an escape route or on anything a person or child could be shut inside: use a fail-safe lock or a maglock with code-compliant release. Not where it must be silent (it clacks, and AC strikes buzz): a servo latch or a shape-memory-wire latch is quieter. For small battery projects, its 0.3-1 A pull-in current is heavy: consider a latching solenoid, servo or shape-memory wire.
- **environment_limits**: Coil heat is the main limit: power it only briefly (see rules of thumb), a hot coil pulls less, and high ambient temperature lowers the allowed duty cycle (Binder: a 25% rating becomes about 16.75% at 60 °C). Printed PLA brackets near the coil soften above about 60 °C (Prusa). On building doors, heat (exterior doors can reach 190 °F), humidity, HVAC stack pressure and thick weatherstripping cause preload that stops the strike releasing (Locksmith Ledger). *(unverified parts omitted)*
- **safety_notes**: A fail-secure lock stays locked in a power cut: a DigiKey electronic-safe build notes that if power dies 'the case will stay locked indefinitely', so design in a key, a hidden manual release or an external power connection, and never put a fail-secure lock on anything a person, child or pet could be shut inside. Door locks on exit routes must still let people out: fire and life-safety codes apply to electric strikes, especially with panic hardware and on fire-rated or stairwell doors, so consult the fire marshal before fitting one (Wikipedia; Locksmith Ledger). The coil gets hot if left powered. Switching off the coil makes a voltage spike, so always fit a diode. *(unverified parts omitted)*
- **common_failures**: (1) Burned-out or overheated coil from leaving the power on: limit the on-time in code or hardware to the maker's rating (e.g. 1-10 s for Adafruit's lock-style solenoid) and use a latching solenoid if it must stay open. (2) Won't unlock: bolt pinched by door or lid pressure (preload), misaligned catch, or a weak supply that can't provide the inrush current (e.g. a 9 V battery). (3) Doesn't latch when closed: the slanted face points the wrong way (rotate the slug) or the catch is misaligned or too deep for the stroke. (4) Microcontroller, transistor or relay damaged: no diode across the coil. (5) Locked out after a power failure or flat battery: fail-secure by design; add an override. (6) Door strike buzzes or releases unreliably: AC supply (AC strikes buzz by design), low voltage, or preload. *(unverified parts omitted)*
- **related**: 
  - Holding electromagnet (maglock): no moving bolt; holds by magnetic pull, is silent and self-aligning, but releases whenever the power fails and needs a flat steel plate
  - Servo or motorised latch: holds any position with no power and can drive either way; slower and quieter, and copes better with preload
  - Shape-memory-alloy wire latch (nitinol): silent, tiny and light, but low force and slow
  - Electro-permanent magnet: switched by pulses and holds with no power, no moving parts, but needs a steel target
  - Burn-wire and fusible-link release: a one-shot electric release for things that only need to let go once
  - Push-push latch and spring latches: the same spring bolt and catch, released by hand
  - Sear and trigger (trip release): a solenoid is often used to trip a sear that releases a much bigger stored force than the solenoid could hold
  - Electromagnetic brake (power-off, spring-applied): the same coil-against-spring idea applied to a turning shaft

### Pictures, videos and models

- **links**: 
  - [SolenoidLock.jpg (Wikimedia Commons, Cavernia, 2011)](https://commons.wikimedia.org/wiki/File:SolenoidLock.jpg): Photo of a solenoid door lock case (Abloy EL 582 type) *(licence: CC BY-SA 3.0 (also GFDL 1.2+))*
  - [Electric strike.jpg (Wikimedia Commons, Andriusval, 2008)](https://commons.wikimedia.org/wiki/File:Electric_strike.jpg): Photo of an electric strike, the frame-side part with the hinged keeper that the door latch passes when unlocked *(licence: Public domain)*
  - [Tueröffner.jpg (Wikimedia Commons, Reinraum, 2011)](https://commons.wikimedia.org/wiki/File:Tuer%C3%B6ffner.jpg): Close-up of a German door opener (electric strike) showing the latch-operated locking pin that keeps it unlocked after the buzzer until the door is opened (hold-open) *(licence: CC0)*
  - [HES 4500 Electric Strike | Fail Secure to Fail Safe Operation (HES Innovations, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=FmyVdOUEVxQ): Manufacturer video on switching an electric strike between fail-secure and fail-safe operation *(licence: link only)*
  - [Lock-style Solenoid - 12VDC (Adafruit product 1512)](https://www.adafruit.com/product/1512): Photos of a hobby lock-style solenoid with its slanted slug and mounting bracket, with specifications *(licence: link only)*
- **make_it_yourself**: 
  - [Solenoid mount for locking briefcase by DigiKey (Printables 1081150; URL from Printables API, page not opened; details read via the Printables public API)](https://www.printables.com/model/1081150-solenoid-mount-for-locking-briefcase): Printed mount that holds a lock-style solenoid inside a briefcase for DigiKey's 'Pi Safe' electronic safe project *(licence: CC BY)*
  - [DIY Electronic Safe Using Raspberry Pi 3 A+ (DigiKey Maker.io)](https://www.digikey.com/en/maker/projects/diy-electronic-safe-using-raspberry-pi-3-a/0f113b4cfa784b678dafcb766be01032): Build guide for a case locked by a 12 V lock-style solenoid switched by a solid-state relay from a Raspberry Pi, opened with a hidden Hall-effect sensor *(licence: link only)*
  - [Arduino Solenoid Door Lock using RFID (Hackaday.io)](https://hackaday.io/project/172207-arduino-solenoid-door-lock-using-rfid): Project using a 12 V solenoid lock, relay module, RFID reader and Hall-effect door sensor with an Arduino Uno *(licence: not stated on the page)* *(unverified parts omitted)*
- **diagram_idea**: Three-panel cutaway of a box lid and a lock-style solenoid (coil, plunger, spring, slanted bolt): 1) power off, the spring pushes the bolt into the lid's catch; 2) power on, the coil pulls the bolt in and the lid lifts; 3) closing, the lid's catch slides down the slanted bolt, pushing it in until it snaps back and locks, with a small note showing fail-secure (locked with no power) versus fail-safe (open with no power).
- **sources**: 
  - https://en.wikipedia.org/wiki/Electric_strike
  - https://en.wikipedia.org/wiki/Solenoid_(engineering)
  - https://www.adafruit.com/product/1512
  - https://protosupplies.com/product/solenoid-electric-door-lock-12v-0-9a/
  - https://learn.escaperoomtechs.com/cabinet-mag-lock/
  - https://www.tinytronics.nl/en/mechanics-and-actuators/solenoids/solenoids/solenoid-push-pull-12v-300ma-jf-0530b
  - https://www.binder-magnetic.com/en/content/31-technical-explanations-for-solenoids
  - https://www.locksmithledger.com/electronics-access-control/strikes-electro-magnetic/article/21288458/preload-electric-strikes-under-pressure
  - https://www.locksmithledger.com/electronics-access-control/strikes-electro-magnetic/article/21164931/the-buzz-about-electric-strikes
  - https://www.posatmparts.com/guides/cash-drawer-wiring-connection-guide
  - https://www.digikey.com/en/maker/projects/diy-electronic-safe-using-raspberry-pi-3-a/0f113b4cfa784b678dafcb766be01032
  - https://hackaday.io/project/172207-arduino-solenoid-door-lock-using-rfid
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/asa_1809
  - https://commons.wikimedia.org/wiki/File:SolenoidLock.jpg
  - https://commons.wikimedia.org/wiki/File:Electric_strike.jpg
  - https://commons.wikimedia.org/wiki/File:Tuer%C3%B6ffner.jpg
  - https://commons.wikimedia.org/wiki/File:Elektrozaczep.jpg
  - https://commons.wikimedia.org/wiki/Category:Electric_locks
  - https://www.youtube.com/watch?v=FmyVdOUEVxQ (verified via YouTube oEmbed)
  - https://www.printables.com/model/1081150-solenoid-mount-for-locking-briefcase (read via https://api.printables.com/graphql/)
  - https://www.thingiverse.com/thing:6071727 (search result snippet only)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, make_it_yourself, making_tips_3d_printing, materials, reuse_cycles, safety_notes

## 106 Servo or motorised latch

*powered & active connectors.* A small motor or hobby servo turns a cam, hook or bolt to lock or release, holding its position when power is off

### What it is

- **plain_name**: A small motor or hobby servo hidden inside a box, door or drone that slides a bolt or swings a hook to lock it, and stays locked after it is switched off
- **term**: Motorised latch (servo latch, motor-driven lock actuator)
- **aliases**: 
  - servo latch / servo lock / servo-operated lock (maker term)
  - motorised lock / motor lock / motor-driven bolt (electronic safe locks and commercial door locks)
  - electronic deadbolt / smart lock (a motor turns the deadbolt's thumb-turn)
  - door lock actuator / power door lock (cars)
  - motor-operated lock (European door hardware, Wikipedia 'Electronic lock')
  - reverse geocache latch / puzzle box latch (GPS puzzle boxes)
  - payload release / drop mechanism / servo release (drones and RC planes)
  - servo-actuated hook (drone payload hooks)
- **family**: powered & active connectors
- **other_families**: locks, latches & catches, self-locking & anti-back-drive
- **one_liner**: A small electric motor, usually a hobby servo, turns a cam, arm or hook that pushes a bolt into a catch (keeper) or pulls it out, so a microcontroller can lock or unlock something, and because the load pushes across the bolt rather than along it, the lock stays shut with no power.
- **complexity**: A small assembly: (1) the actuator, a hobby servo (motor, gearbox and position sensor in one case) or a small gear motor, sometimes with a worm gearbox; (2) a servo horn, cam or arm on its output shaft; (3) the moving locking part: a sliding bolt, pin, dowel or chopstick, a pivoting hook or lever, or a notched disc; (4) a keeper (strike) on the other part, such as an eyelet screw, slot or bar; (5) often a return spring that holds a spring-latched version shut; (6) a controller (microcontroller, keypad, GPS or radio receiver), a battery and often a power switch; (7) optionally limit switches and a hidden emergency override. Example part list from a printed latch: MG90 or SG90 servo, 38 mm x M3 screw and nut as the pivot, a small spring, printed cam, latch lever and servo mount (Printables 134411).
- **how_it_works**: The motor, geared down inside the servo, turns its output shaft to one of two set angles, 'locked' and 'open'. An arm or cam on the shaft slides a bolt through a keeper on the lid or door (as in the reverse geocache box, where a servo pushes a chopstick through eyelet screws; Arduiniana), or swings a hook or lever in or out of a slot. A hobby servo finds its angle by itself: a potentiometer on the output shaft reports its position and the servo drives the motor until it matches the width of the control pulse, 1 to 2 ms repeated 50 times a second (Wikipedia, Servo (radio control)). Once in place the power can be cut: the parts are shaped so that pulling on the lid pushes across the bolt (shear) into the frame and does not try to turn the motor, so the lock holds indefinitely with no power (Make:, Keyless Lock Box). In spring-latched versions a spring holds the catch shut and the servo only pushes it open, then moves clear (Printables 134411; Hackaday.io Lock Box).

### Finder attributes

- **job**: hold or release using power: a signal from a microcontroller, keypad, GPS, radio or app locks or unlocks it, join and hold: keeps a lid, door, drawer or payload shut or attached until told to let go
- **motion**: multiple: the servo output rotates (a typical hobby servo covers about 90° to 180°, Wikipedia, Servo (radio control)); an arm or cam turns this into a sliding bolt (slide) or a swinging hook or lever (rotate)
- **degrees_of_freedom**: 1: the bolt slides along one path, or the hook swings about one pivot, driven by the motor. When locked, the lid or door has 0 freedom in the directions the bolt blocks.
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): only if the parts are arranged so the load presses across the bolt, or the drive has a worm gear or a cam past its dead point; a plain hobby servo can be turned back by hand when unpowered ('I don't think you're going to find a servo that you can't force to backtrack when you disconnect the power', Pololu forum, 2007). Arranged this way it keeps its last state when power is lost: a locked box stays locked (fail-secure) and an open one stays open
  - motion conversion (e.g. rotary to linear): the servo's rotation becomes a sliding bolt through an arm, cam or rack
  - quick-release: unlocks in a fraction of a second on command (an SG90 micro servo turns 60° in 0.12 s at 4.8 V, TowerPro)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): a bolt, pin or hook sits in a keeper
  - friction or clamping (force-fit): friction in the servo's gear train, or a self-locking worm gear, stops the load turning the motor back (Pololu forum; Wikipedia, Worm drive)
  - spring force (a spring or springy part presses it in place): in spring-latched designs a small spring holds the catch shut and the servo only opens it (Printables 134411; Hackaday.io Lock Box)
- **input_output**: Not a transmission, but inside it: motor rotation -> geared-down output rotation (a hobby servo, about 90-180°) -> bolt slide or hook swing through an arm, cam or rack. Back-drivable: yes for an unpowered hobby servo (Pololu forum, 2007); no for a worm gearbox with a small lead angle (Wikipedia, Worm drive). Design the latch so the load cannot push the bolt back along its travel, and the back-driving question no longer matters.
- **power**: powered (needs electricity to lock and to unlock, but not to stay in either state). If power is lost it keeps its last state: the Keyless Lock Box 'can sit in a locked state for indefinite periods without any power' (Make:). Spring-latched versions stay locked. A servo that must be held by its motor (because the load pushes on it) holds only while powered and receiving pulses. Plan an emergency way in: the reverse geocache box opens after a two-minute delay when external power is plugged into a hidden jack (Arduiniana), and the Keyless Lock Box unlocks briefly if a sensor is held while power is reconnected (Make:).
- **removability**: tool-free quick release: it opens and relocks on an electrical command; the mechanism itself is screwed or glued inside (semi-permanent), as in the Make: and Hackaday.io builds where the servo is glued in
- **tools_needed**: screwdriver (servo, keeper and horn screws); glue in some builds; soldering iron or crimp tools and a computer to program the microcontroller
- **seal**: none: the latch does not seal; add a gasket to the lid if needed. *(unverified parts omitted)*
- **load**: Light to medium, set by the bolt, keeper and their mountings rather than the servo, provided the load pushes across the bolt. Strong in shear across the bolt or hook; weak if the load pushes along the bolt's travel or twists the servo horn, because a 9 g micro servo gives only about 1.8 kg·cm (0.18 N·m) stall torque (TowerPro SG90). Drone release designs let 'the printed parts hold the weight of the object taking strain off of the servo motor axle' (Printables 117198). A printed or hobby latch keeps honest people out; it is not a security lock.
- **adjustable**: yes, in software: the 'open' and 'closed' servo angles are set in the code and found by experiment (Tinkernut; Arduiniana), so the throw can be tuned without re-making parts; mechanically by moving the keeper or bending the linkage
- **play_and_precision**: small to noticeable: a hobby servo returns to the same commanded angle each time (SG90 dead band 1 µs, TowerPro), but its plastic gears have some play. The bolt needs generous clearance in its keeper: in one printed lock box 'the slightest bit of misalignment in the two latches also caused a lot of friction on the pin', and flexing parts jammed the lid (rubenwardy, 2023).
- **access_needed**: one side only (blind): the whole latch sits inside the box or door and is worked remotely, so no keyhole shows outside. You still need a way in to change batteries or repair it, so plan an external power jack or override (Arduiniana; Make:).
- **materials**: Servo: plastic case with plastic gears (the SG90 has a 'POM gear set', TowerPro) or metal gears (e.g. MG90-type servos). Printed cams, levers and mounts in PLA or PETG; bolts from steel rod, screws, dowels or even a chopstick; keepers from eyelet screws or bent metal (Arduiniana). The boxes are wood, acrylic or plastic. It is a mechanism, not a way of joining materials; it suits anything a keeper can be screwed or glued to.
- **maker_difficulty**: easy: a servo, a printed cam and a microcontroller make a working latch in an afternoon; the parts that need care are keeping the load off the servo, avoiding twitches at power-up and providing a way in if the battery dies

### Making it

- **processes**: 
  - off-the-shelf part: hobby servo or small gear motor (the actuator is always bought), or a ready-made car door lock actuator
  - 3D print (FDM): cams, latch levers, bolts, keepers and servo mounts (Printables 134411, 24182, 117198)
  - woodwork: puzzle boxes and cabinets with a screwed-in keeper (Arduiniana; Make:) *(unverified parts omitted)*
- **print_in_place**: no: the servo, pivot screw and spring are separate parts, and the printed cam, lever and mount are printed as separate pieces and assembled (the servo mount is printed separately 'which makes it stronger and easier to print' and glued on, Printables 134411)
- **making_tips_3d_printing**: Load path: shape the latch so the lid's pull goes across the bolt into the printed frame, not into the servo shaft; the camera-drop design does this so the printed parts carry the weight (Printables 117198). Spring-latched layout: in the Geocache Box Servo Latch a small spring holds a see-saw latch lever shut and the servo cam only pushes it open; 'with the servo in the latched position, the cam is not touching the latch lever', so the servo carries no load while locked (Printables 134411). Infill: print the cam and latch lever at 75% infill or more and other parts at 30-45% (Printables 134411); another servo lock was printed at 80% infill without supports (Printables 24182). Servo attachment: the Geocache latch cam fits the servo's 20-spline, 5 mm output shaft and is held with the normal horn screw (Printables 134411); screwing a printed arm to the supplied plastic horn is a common alternative. Clearance: leave generous clearance for the bolt, since slight misalignment made a printed pin bind (rubenwardy, 2023). Travel: set the open and closed angles in code so the servo stops short of any hard stop; driving a servo beyond its limits 'can cause damage, such as stripped gears' (SparkFun), and a servo pushing against a stop keeps drawing current. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'micro servo' (SG90, 9 g, plastic gears), 'metal gear micro servo' (MG90S), 'standard servo'; 'worm gear motor' or 'micro gear motor with worm gearbox' (self-locking drive); 'car door lock actuator' (12 V motor-driven push-pull actuator); 'servo horn'; 'eyelet screw', 'barrel bolt', 'hasp' (keepers and bolts); 'compression spring' or 'extension spring' (spring-latched versions); 'Pololu power switch' or a 'logic-level MOSFET' to cut power between uses (Arduiniana); 'microswitch' or 'limit switch' to sense lid closed or bolt thrown; 'smart lock' (ready-made motorised deadbolt).
- **rules_of_thumb**: 
  - Keep the load off the servo: 'The printed parts hold the weight of the object taking strain off of the servo motor axle' (Printables 117198, servo quick release for dropping a camera).
  - Don't count on an unpowered hobby servo to hold against a load; 'I don't think you're going to find a servo that you can't force to backtrack when you disconnect the power'. If it must hold, use a worm drive: 'No way to back-drive it, so once it's there it can power down' (Pololu forum, 2007). Whether a worm drive is self-locking 'depends on the lead angle, the pressure angle, and the coefficient of friction', and a multi-start worm may not be (Wikipedia, Worm drive).
  - Hobby servo control: pulses of 1.0 to 2.0 ms, 1.5 ms is centre, repeated at 50 Hz (Wikipedia, Servo (radio control); SparkFun Hobby Servo Tutorial).
  - Current: 'A small servo with nothing attached to the shaft might draw 10 mA, while a large one turning a heavy lever might draw an Ampere or more'; give each servo its own heavy supply wires ('star power'); an under-powered servo 'hunts' and can reset the processor (SparkFun Hobby Servo Tutorial).
  - A 9 g micro servo (TowerPro SG90) gives about 1.8 kg·cm stall torque at 4.8 V, moves 60° in 0.12 s, and is rated for 0-55 °C (TowerPro). At the end of a 20 mm arm that is only about 0.9 kg of push, so let the bolt, not the servo, take the load (arithmetic from the TowerPro figure).
  - Battery life: cut the power completely between uses; the reverse geocache box uses a Pololu power switch that draws 0.01 µA when off and runs for only 2-3 minutes per session (Arduiniana).
  - Always build in a way in: an external power jack that opens the box after a delay (Arduiniana), or an override held down while power is reconnected (Make:, Keyless Lock Box).
  - Servos can twitch when power is first applied, and some jump by as much as 30° (Arduino Forum, 'Servo twitch on startup'); fixes include writing the position before calling attach(), powering the servo only after the controller has started (a P-channel MOSFET), or a 10 kΩ pull-up on the signal line (Arduino Forum threads 141489 and 187028). Arrange the latch so a twitch cannot throw the bolt open.

### When to use it

- **everyday_examples**: 
  - Car power door locks, where a small motor inside each door moves the lock (Wikipedia, Power door locks; a dissected door lock actuator is shown by Samarins)
  - Smart locks and electronic deadbolts that turn the existing thumb-turn with a battery motor, and motor-operated door locks (Wikipedia, Electronic lock)
  - Electronic safe locks, where 'a solenoid or motor retracts' the bolt (Locksmith Ledger, 2015)
  - GPS 'reverse geocache' puzzle boxes and quiz lock boxes (Arduiniana; Hackaday, 2015)
- **when_to_use**: Use it when something should lock or unlock on an electrical signal and then stay that way without draining a battery: puzzle and treasure boxes, keypad or RFID lock boxes, cabinets and pet feeders, drone and model-aircraft payload drops and parachute releases, escape-room props and automated doors or hatches. It is cheap (a micro servo costs a few dollars), easy to control from Arduino-type boards, and gives a long, adjustable throw compared with a solenoid.
- **when_not_to_use**: Do not use it where the lock must open if the power fails (fire exits, anything a person or animal could be trapped in); use a fail-safe device such as an electromagnet lock or an electric strike set to open without power (Wikipedia, Electric strike). Do not use a hobby servo as real security; it can be forced, and an unpowered servo can be back-driven. For a very small, silent release use a shape-memory-alloy wire latch; for a fast, simple push-pull catch use a solenoid latch; for loads that push hard along the bolt use a worm-gear actuator or an over-centre latch. *(unverified parts omitted)*
- **environment_limits**: Hobby micro servos are rated for about 0-55 °C (TowerPro SG90). PLA parts soften above about 60 °C (Prusa Knowledge Base), so a PLA latch in a hot car can deform. Weak batteries make servos hunt or fail to move (SparkFun). Moisture can stop door lock actuators working (a built-in switch failing from water intrusion, Samarins). *(unverified parts omitted)*
- **safety_notes**: It fails locked: if the battery dies or the electronics fail, the lid stays shut, so always provide an emergency way in (Arduiniana; Make:) and never use it on anything a person or animal could be shut inside. Servo arms and bolts can pinch fingers. It is not a security device. *(unverified parts omitted)*
- **common_failures**: Servo stalls or strips its gears because the bolt binds or the servo is driven against a stop: add clearance, set angles short of the stops (SparkFun) and use metal-gear servos. Lock jams from misalignment or flexing printed parts (rubenwardy, 2023): print stiffer parts and loosen the fit. Servo turns too far and breaks the lock; cheap servos can misbehave (rubenwardy, 2023; the Hackaday.io lock box servos worked only as 'either at 0 degrees, or 180 degrees'). Twitch at power-up throws the bolt (Arduino Forum): write the position before attach() and power the servo after the controller starts. Battery runs flat and you are locked out: cut power between uses (Arduiniana) and add an external power jack. Load pushes the servo back when unpowered: redesign so the load acts across the bolt or use a worm drive (Pololu forum). Glue seeps into switches or mechanisms during assembly (Hackaday, 2015).
- **related**: 
  - Solenoid latch: an electric coil pulls a spring-loaded bolt straight back; faster and simpler, but short stroke and usually needs power while held open
  - Shape-memory-alloy wire latch: a heated nitinol wire pulls a catch silently; tiny and light, but very short stroke and slow to reset
  - Electromagnet lock (maglock): holds only while powered and opens when power fails (fail-safe)
  - Electro-permanent magnet: switched on or off by a pulse and holds with no power, like a servo latch, but grips steel instead of throwing a bolt
  - Worm drive: a self-locking gear stage that lets a motorised latch hold against a load with no power
  - Sear and trigger: a servo can trip a sear to release a large stored force with a small movement
  - Draw latch (over-centre latch): the hand-operated latch a servo can be made to throw past its dead point
  - Servo horn and spline hub: how the arm or cam is fixed to the servo's output shaft

### Pictures, videos and models

- **links**: 
  - [Exploded Servo.jpg (Wikimedia Commons), photo by oomlout](https://commons.wikimedia.org/wiki/File:Exploded_Servo.jpg): A hobby servo taken apart, showing the motor, gear train, potentiometer and circuit board that let it turn to a set angle *(licence: CC BY-SA 2.0)*
  - [The Reverse Geocache Puzzle (Mikal Hart, Arduiniana)](http://arduiniana.org/projects/the-reverse-geo-cache-puzzle/): Photos and description of a GPS puzzle box whose servo pushes a chopstick through eyelet screws to lock the lid, with its power switch and hidden back-door power jack *(licence: link only)*
  - [Keyless Lock Box (Make:)](https://makezine.com/projects/keyless-lock-box/): Step-by-step build of a box locked by a screw on a servo horn that engages a metal arm in the lid, with photos; stays locked indefinitely without power *(licence: link only)*
  - [3D printed Servo Latch Lock (Priyank Chouksey)](https://www.youtube.com/watch?v=jWasOv3UZrg): Video of a printed latch driven by a 9 g servo locking and unlocking (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Servo Actuated 3D Printed Lock (Daniel Frank)](https://www.youtube.com/watch?v=ICEQjHHbD6w): Video of a university-course printed lock mechanism driven by a servo (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
- **make_it_yourself**: 
  - [Servo Latch - Geocache Box Servo Latch, by Plexi](https://www.printables.com/model/134411-servo-latch-geocache-box-servo-latch): A printable spring-held see-saw latch lever opened by a cam on an MG90 or SG90 servo; needs a 38 mm x M3 screw and nut and a small spring; cam and latch at 75%+ infill (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Servo operated lock, by Tonitwn (URL from Printables API, page not opened)](https://www.printables.com/model/24182-servo-operated-lock): A printable servo lock for treasure chests, controlled by a BBC micro:bit that asks for a code; printed at 80% infill without supports (read through the Printables API) *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Servo Quick Release for Dropping Camera, by FTWMaker (URL from Printables API, page not opened)](https://www.printables.com/model/117198-servo-quick-release-for-dropping-camera): A servo drop mechanism for drones or planes in which the printed parts carry the load so the servo only releases it; hinges made from paper clips or staples (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Drone Payload Release Mechanism - Servo Actuated Hook System, by phytoplankton (URL from Printables API, page not opened)](https://www.printables.com/model/1770073-drone-payload-release-mechanism-servo-actuated-hoo): A servo-driven hook that locks a payload and drops it on command (read through the Printables API) *(licence: Creative Commons Public Domain)*
- **diagram_idea**: Two-frame side view of a box lid: frame 1 (locked) shows a servo arm pushing a bolt through an eyelet on the lid, with an arrow showing the lid's upward pull pressing across the bolt into the box wall and a crossed-out power plug labelled 'no power needed'; frame 2 (open) shows the servo turned back and the bolt withdrawn so the lid lifts.
- **sources**: 
  - http://arduiniana.org/projects/the-reverse-geo-cache-puzzle/
  - https://makezine.com/projects/keyless-lock-box/
  - https://www.tinkernut.com/how-to-make-a-reverse-geocaching-puzzle-box/
  - https://en.wikipedia.org/wiki/Servo_(radio_control)
  - https://learn.sparkfun.com/tutorials/hobby-servo-tutorial/all
  - https://forum.pololu.com/t/worm-gearbox-for-hobby-servo/356
  - https://towerpro.com.tw/product/sg90-analog/
  - https://en.wikipedia.org/wiki/Worm_drive
  - https://en.wikipedia.org/wiki/Electronic_lock
  - https://en.wikipedia.org/wiki/Electric_strike
  - https://en.wikipedia.org/wiki/Power_door_locks
  - https://www.samarins.com/glossary/door_lock_actuator.html
  - https://www.locksmithledger.com/safes/article/12050394/safe-locks
  - https://www.commandaccess.com/blog/motorized-vs-solenoid-locks-choosing-the-right/
  - https://hackaday.io/project/8122-lock-box/log/26843-the-locking-mechanism
  - https://hackaday.com/2015/11/09/trivia-lock-box-spices-up-wedding-reception/
  - https://hackaday.com/tag/lock-box/
  - https://hackaday.com/2020/03/30/printed-door-handle-turns-key-with-a-servo/
  - https://blog.rubenwardy.com/2023/03/16/lockbox/
  - https://forum.arduino.cc/t/servo-twitch-on-startup/141489
  - https://forum.arduino.cc/t/easiest-way-to-avoid-servo-twitch-on-power-up/187028
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:Exploded_Servo.jpg
  - https://www.youtube.com/watch?v=jWasOv3UZrg (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=ICEQjHHbD6w (verified via YouTube oEmbed)
  - https://www.printables.com/model/134411-servo-latch-geocache-box-servo-latch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/24182-servo-operated-lock (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/117198-servo-quick-release-for-dropping-camera (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1770073-drone-payload-release-mechanism-servo-actuated-hoo (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, processes, reuse_cycles, safety_notes, seal, when_not_to_use

## 107 Shape-memory-alloy wire latch (nitinol muscle wire)

*powered & active connectors.* A thin nickel-titanium wire that shortens when heated by an electric current, pulling a catch to release a latch silently

### What it is

- **plain_name**: A hair-thin metal wire that shrinks a little when electricity warms it, tugging a spring-held catch open silently, with no motor or coil
- **term**: Shape-memory-alloy (SMA) wire latch release (nitinol actuator wire latch)
- **aliases**: 
  - muscle wire / 'muscle wire latch'
  - nitinol wire / NiTi wire / nickel-titanium actuator wire
  - memory metal / memory wire / smart metal (Wikipedia, Shape-memory alloy)
  - SMA actuator / SMA latch release / SMA trigger release
  - Flexinol (brand, Dynalloy); BioMetal (brand); Muscle Wires (brand)
  - SMA pin puller (spacecraft release devices)
  - ThinLock (brand, Miga Motor Company SMA latch release)
  - 'Titanmuscle' latch (unbranded ready-made muscle-wire latches sold online, Printables 1740874)
- **family**: powered & active connectors
- **other_families**: locks, latches & catches
- **one_liner**: A spring holds a small catch shut, and a thin nickel-titanium wire hooked to the catch shortens by a few percent when an electric current heats it, pulling the catch free so the lid, door or pin is released without a sound.
- **complexity**: A few parts: (1) the SMA wire, often 0.1-0.25 mm thick, with a crimp at each end that is both the mechanical anchor and the electrical contact; (2) the catch (a latch, pawl, slider, ball-detent release or pin) that the wire pulls; (3) a return spring (bias spring) that keeps the catch engaged and stretches the wire back out as it cools; (4) the frame with anchor posts, a guide and an end stop; (5) the driver: a battery or supply, a switch such as a MOSFET, and a timer that limits how long current flows. Ready-made modules combine the wire, spring and driver circuit (Miga S125: 3-wire interface, 'Power, Ground, and Enable', nitinolactuators.com).
- **how_it_works**: Nitinol, an alloy of roughly equal parts nickel and titanium, has two crystal forms. Below its transformation temperature it is soft and a small load can stretch it about 4-5%; heated above that temperature it changes back and shortens by the same 4-5%, pulling with a stress of at least 172 MPa (Dynalloy, Flexinol technical data). Passing a current through the wire heats it by its own electrical resistance, so it shortens in about a second, silently. In a latch the wire only moves the catch: a spring keeps the catch engaged, the wire pulls it clear, and the lid's own spring, gravity or the user then opens it. When the current stops the wire cools (about 2 s for a 0.15 mm wire in still air), the bias spring stretches it back to length and the catch re-engages ready for next time. NASA's SMA pin puller works the same way: the SMA 'serves as a trigger to release potential energy stored in the driver spring' (NASA Tech Briefs, LEW-16511).

### Finder attributes

- **job**: hold or release using power: an electrical pulse releases the catch, join and hold: the spring-held catch keeps a lid, tablet, panel or payload in place until released
- **motion**: slide: the wire pulls in a straight line by about 3-5% of its length (about 3-4 mm from 100 mm of wire with an ordinary bias spring, Dynalloy); a lever usually turns this into a small rotation of the catch, and a 6:1 lever gives about 30% of the wire length in movement at one sixth of the force (Dynalloy stroke table)
- **degrees_of_freedom**: 1: the catch slides or swings along one path, pulled by the wire one way and pushed back by the spring the other way
- **special_behaviour**: 
  - quick-release: the catch lets go about a second after current is applied (Dynalloy sizes its current table for a 1 second contraction)
  - self-locking (holds under load, won't back-drive): with no power the spring-held catch carries the load; the wire only triggers the release
  - motion conversion (e.g. rotary to linear): electrical heating is converted directly into a straight pull with no motor or gears; the movement is 'silent, smooth, and powerful' (Dynalloy)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): a catch, pawl or ball detent sits in a notch
  - spring force (a spring or springy part presses it in place): a bias spring keeps the catch engaged and re-stretches the cooled wire
- **input_output**: Not a transmission. As an actuator: electric current (heat) -> straight pull of about 3-4% of the wire length with a normal bias spring, about 4% with a hanging weight, and up to about 7% with a leaf spring whose force falls as the wire shortens (Dynalloy). Pull force at the recommended 172 MPa: about 80 g for 0.076 mm wire, 330 g for 0.15 mm and 930 g for 0.25 mm (Dynalloy). Energy efficiency is 'relatively low' compared with conventional actuators (Wikipedia, Shape-memory alloy). Back-drivable: yes when cool (the bias spring stretches it, which is how it resets); forcing it backwards while it is hot and pulling can overstress and damage the wire (Dynalloy).
- **power**: powered (needs a pulse of current to release; no power to stay locked). Typical drive: about 410 mA for 1 s for 0.15 mm Flexinol, about 320 mA for 0.13 mm (Dynalloy). If power is lost it stays latched, because the spring holds the catch (Surface Book: 'held in place by a spring, with the mechanism being unlocked by a piece of muscle wire', Hackaday, 2015). If the latch must stay open, the wire must be kept hot, which Dynalloy suggests doing with a larger heating current followed by a smaller holding current.
- **removability**: tool-free quick release: it opens on an electrical pulse and relatches by itself; the wire is crimped in and can be replaced
- **reuse_cycles**: many times: 'repeatable motion from the wire for tens of millions of cycles is reasonable' at suitable stress and temperature, but at higher stresses or strains 'good motion may be obtained for only hundreds or a few thousands of cycles' (Dynalloy)
- **tools_needed**: crimping tool and crimps (not solder or glue), hard wire cutters for stainless-steel wire (Flexinol 'will damage' copper-wire cutters, Dynalloy), screwdriver; soldering iron for the driver circuit
- **seal**: none: the mechanism is open; the wire itself resists corrosion (Dynalloy)
- **load**: The wire's pull is light, from grams to about 2 kg for 0.25-0.38 mm wire (Dynalloy table), but the latch can hold light to medium loads because the load goes into the catch and frame, not the wire. Keep the catch's friction under load well below the wire's pull, or it will not release; ready-made SMA latch modules range from about 0.25 lb to 125 lb of force (nitinolactuators.com), and the Miga S125 module pulls up to 2.0 lb over 3.2 mm (Miga).
- **adjustable**: yes, a little: stroke and force depend on the wire length, diameter, bias spring and lever ratio, and screw anchor posts let you take up slack; the heating current and pulse length are set in software or by the driver circuit
- **play_and_precision**: Not a locating joint. The wire's length depends on its temperature, so its position is not precise unless temperature is controlled with feedback (Dynalloy). Give the catch a clear margin of overlap and the wire spare stroke, because the stroke can shrink slightly with use (Dynalloy; functional fatigue, Wikipedia, Shape-memory alloy).
- **access_needed**: one side only (blind): the latch hides completely inside and is triggered electrically; no hole or keyhole is needed. Plan a way in if the battery or wire fails.
- **materials**: Nickel-titanium alloy wire (about 50-51 atomic % nickel, Wikipedia, Nickel titanium), with brass or copper crimps. Parts touching the wire must handle more than 100 °C and must not conduct electricity; Dynalloy suggests silicone rubber, Kapton, ceramics and glass. Catches and frames can be metal or plastic, but PLA softens above about 60 °C (Prusa Knowledge Base), so keep printed parts from touching the hot wire. It is a release mechanism, not a way of joining materials.
- **maker_difficulty**: moderate: the parts are cheap and simple, but crimping hair-thin wire, sizing the current so the wire is not burned out, and getting enough movement from a 3-5% contraction take care and testing

### Making it

- **processes**: 
  - off-the-shelf part: SMA actuator wire, or a ready-made SMA latch or actuator module
  - 3D print (FDM): frame, catch, lever and anchor posts (e.g. a printed mount for ready-made muscle-wire latches, Printables 1740874) *(unverified parts omitted)*
- **making_tips_3d_printing**: Layout: run the wire straight between two anchor posts and pull the catch through a lever, because the wire only shortens by 3-5% of its length; a 6:1 lever gives about 30% stroke at one sixth of the force (Dynalloy). Anchors: crimp the wire; 'the wires expand inside the crimps and hold more firmly', while glue or solder 'tends to work itself loose' (Dynalloy); screw-and-nut anchors let you adjust slack (Hobbizine). Bias spring: choose a spring that stretches the cooled wire with about 70 MPa (for 0.15 mm wire, about 128 g, Dynalloy), and no more than the wire can pull when hot. Overstress: add an end stop (strain relief) so the catch cannot be pulled further than the wire's safe stroke, and make sure the catch cannot jam while the wire is pulling ('if the device gets stuck and cannot move or is forced backwards while operating' the wire can be damaged, Dynalloy). Catch: make the catch faces smooth and lightly engaged so the wire's small force can slide it out under load; test release with the full load on the latch. Wiring: do not run release currents through a breadboard; at 700 mA contact resistance stopped a muscle-wire release from working (Arduino Forum). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'nitinol actuator wire', 'muscle wire', 'shape memory alloy wire' or 'Flexinol' (LT 70 °C or HT 90 °C start temperature; 0.1-0.25 mm suits hobby latches); 'crimp terminal', 'ring crimp', brass tube, or 'N-scale rail joiners' (suggested by Roger Gilbertson, author of the Muscle Wires Project Book, via Hobbizine); 'logic-level N-channel MOSFET' (e.g. DMN2056U, fully on at 2.5 V gate, Arduino Forum) or a 'ULN2003' driver for thin wires (Hobbizine); 'LiPo cell'; 'compression spring' or 'extension spring' (bias spring); ready-made 'SMA actuator' or 'SMA latch release' modules (Miga S125, 3.2 mm stroke, up to 2.0 lb, 3-12 V, Miga; 'Titanmuscle' latch, Printables 1740874).
- **rules_of_thumb**: 
  - Stroke: use no more than 4-5% cyclic strain; the natural limit is about 8% and going beyond it causes non-reversible deformation (Dynalloy, Section 5). Expect about 3% with a normal bias spring, 4% with a dead weight and 7% with a leaf spring (Dynalloy stroke table).
  - Force: the listed pull forces use 172 MPa, 'for many applications the maximum safe stress'; for best repeat cycling stay at or below 138 MPa (Dynalloy). Start the bias (cooling deformation) force at about 70 MPa (Dynalloy).
  - Cycle life: below 103 MPa, permanent stretch stays under 0.5% 'even after hundreds of thousands of cycles'; at 138 MPa perhaps 1% after 100,000 cycles (Dynalloy). Damaging fatigue usually shows up as elongation or reduced stroke 'within the first few hundred strokes', so do life tests (Dynalloy).
  - Current for a 1 s pull (Dynalloy): 0.076 mm wire 150 mA, 0.10 mm 200 mA, 0.13 mm 320 mA, 0.15 mm 410 mA, 0.20 mm 660 mA, 0.25 mm 1050 mA. Wires 0.15 mm or thinner can usually be left on at that current without overheating; thicker wires cannot.
  - Voltage from Ohm's law: 0.15 mm wire has about 55 ohm per metre (Dynalloy), so 100 mm of it (5.5 ohm) needs about 2.3 V for 410 mA (arithmetic from the Dynalloy table). Too short a wire on the same voltage burns it out: 2 inches of 0.005 in wire on 3 V would draw 1.58 A 'and likely destroy the Flexinol' (Hobbizine).
  - Overheating check: if the wire does not start to relax 'promptly, when the power is cut, then the wire has been needlessly overheated' (Dynalloy, Section 3).
  - Reset time is cooling time: about 0.8 s for 0.076 mm, 2.0 s for 0.15 mm and 5.4 s for 0.25 mm LT wire in still air (Dynalloy); thinner wire, higher-temperature wire, or forced air (about 4 times faster) cools faster (Dynalloy cooling table).
  - Attach by crimping, not solder or glue (Dynalloy, Section 4; Hobbizine).
  - Size for margin: 'The best rule of thumb is to use enough Flexinol actuator wire to be sure one is well within the parameters in which it can work' (Dynalloy); use several thin wires in parallel for more force with fast cooling (Dynalloy).

### When to use it

- **everyday_examples**: 
  - The Microsoft Surface Book laptop, whose detachable screen is held by a spring-loaded lock that a loop of nitinol wire pulls open (Hackaday, 2015)
  - The 2014 Chevrolet Corvette, which used SMA actuators instead of heavier motors for its hatch vent (Wikipedia, Shape-memory alloy)
  - Smartphone cameras, where SMA wire actuators drive image stabilisation and autofocus (Wikipedia, Shape-memory alloy; Nickel titanium), the same actuator used as a mover rather than a latch *(unverified parts omitted)*
- **when_to_use**: Use it when you need a tiny, light, silent electric release in a tight space: hidden latches in puzzle boxes and gadgets, releasing a tablet or panel, drone and model payload drops, trigger releases for spring-loaded mechanisms, and battery-powered devices that release only occasionally. Dynalloy lists mechanical latches, spring-loaded releases, electronic locks, remote latches and door openers among its applications, and spacecraft use SMA pin pullers as a resettable replacement for explosive releases (NASA Tech Briefs).
- **when_not_to_use**: Avoid it when you need fast repeated cycling (each reset waits for the wire to cool), a long stroke without levers, a large pulling force, precise positioning, or low power use; use a servo or motorised latch for long throws, a solenoid latch for fast simple push-pull, or an electro-permanent magnet for no-bolt holding. Avoid it in hot places near the wire's transformation temperature. For a one-off release that never needs resetting, a burn-wire release is simpler. Never let the wire carry the latch's load itself.
- **environment_limits**: Standard Flexinol starts to transform at about 70 °C ('LT') or 90 °C ('HT') (Dynalloy); nitinol can be made to transform anywhere from about -20 to +110 °C (Wikipedia, Nickel titanium), so check the wire's rating against the hottest place the latch will be. Cooling, and therefore relatching, is slower in warm, still air and faster with airflow or heat sinks (Dynalloy). The wire resists corrosion (Dynalloy). Over many cycles SMA can lose some of its movement ('functional fatigue', Wikipedia, Shape-memory alloy). Printed PLA parts near the wire soften above about 60 °C (Prusa Knowledge Base).
- **safety_notes**: It fails locked: if power fails the latch stays shut, so never use it on anything a person or animal could be trapped in, and provide a way in. Hard wire ends are sharp and springy. *(unverified parts omitted)*
- **common_failures**: Wire overheated and permanently stretched, so it no longer pulls far enough: reduce current or pulse time and check that it relaxes as soon as power is cut (Dynalloy). Wire overstressed by a jammed or forced catch: add an end stop and strain relief (Dynalloy). Wire slips out of solder or glue joints: crimp it (Dynalloy; Hobbizine). Not enough stroke to clear the catch: use longer wire or a lever, and allow for small stroke loss over time (Dynalloy). Catch friction under load is more than the wire can pull: reduce catch overlap and friction, or use thicker or parallel wires. Slow or no reset: bias spring too weak, or the wire cannot cool. Release fails from voltage drop in breadboard contacts at high current (Arduino Forum). Wire gradually loses its memory over many heating cycles (Hackaday comments on the Surface Book latch; Wikipedia, functional fatigue).
- **related**: 
  - Solenoid latch: an electric coil pulls a bolt; faster and simpler to drive, but bigger, heavier and noisier for the same work (Dynalloy claims SMA wire is far smaller than solenoids for the same work)
  - Servo or motorised latch: long, adjustable throw and holds either state without power, but bulkier and audible
  - Thermal actuators (bimetal strip, wax motor): also move by heat, but are usually heated by their surroundings and move more slowly
  - Burn-wire and fusible-link release: a one-shot electrical release that must be rebuilt after each use, whereas an SMA latch resets itself
  - Electro-permanent magnet: holds steel with no power and releases on a pulse, with no moving catch
  - Sear and trigger: an SMA wire can serve as the trigger that trips a sear holding a large stored force
  - Ball-lock pin and pin puller: spacecraft SMA pin pullers release a spring-driven pin by freeing ball detents (NASA Tech Briefs)

### Pictures, videos and models

- **links**: 
  - [Shape Memory Alloy Latch-And-Release Mechanism Demonstration (Science In Society)](https://www.youtube.com/watch?v=xAyZ7eHKWlA): A demonstration of an SMA wire latch holding and then releasing (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Miga ThinLock Shape Memory Alloy Release Mechanism (Miga Motor Company)](https://www.youtube.com/watch?v=M-rr9LGpCuw): A commercial thin SMA-wire latch release opening a catch (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Nitinol Wire/Shape Memory Alloy - How to Use it (RimstarOrg)](https://www.youtube.com/watch?v=4Yi4epJ83EE): Hands-on demonstration of heating nitinol wire with a flame and with electric current (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Microsoft Surface Book Teardown Reveals Muscle Wire Mechanism (Hackaday, Richard Baguley, 2015)](https://hackaday.com/2015/11/04/microsoft-surface-book-teardown-reveals-muscle-wire-mechanism/): Teardown photos of a real product's spring-held lock released by a loop of nitinol wire *(licence: link only)*
  - [Nitinol draht.jpg (Wikimedia Commons), photo by Petermaerki](https://commons.wikimedia.org/wiki/File:Nitinol_draht.jpg): Photo of nitinol wires *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - ['Titanmuscle' Titanium Muscle Wire Latch Mount, by dvd604 (URL from Printables API, page not opened)](https://www.printables.com/model/1740874-titanmuscle-titanium-muscle-wire-latch-mount): A simple two-piece printed mount for the cheap ready-made muscle-wire latches sold online as 'Titanmuscle' latches (read through the Printables API) *(licence: Creative Commons Attribution-ShareAlike (CC BY-SA))*
  - [Robot Design - Flexinol and other Nitinol Muscle Wires (Hobbizine)](http://robotics.hobbizine.com/flexinol.html): A hobbyist how-to on crimping, powering, biasing and levering muscle wire, with Dynalloy's current table and worked Ohm's-law examples *(licence: link only)*
- **diagram_idea**: Two-frame side view of a lid catch: frame 1 shows a spring pushing a hooked catch into a notch on the lid, with a straight thin wire running from a fixed post to the catch's lever and a battery with an open switch; frame 2 shows the switch closed, the wire glowing warm and slightly shorter (labelled '-4%'), the lever swung so the hook clears the notch, and the lid popping up.
- **sources**: 
  - https://dynalloy.com/wp-content/uploads/2025/03/TCF1140.pdf
  - http://robotics.hobbizine.com/flexinol.html
  - https://en.wikipedia.org/wiki/Shape-memory_alloy
  - https://en.wikipedia.org/wiki/Nickel_titanium
  - https://hackaday.com/2015/11/04/microsoft-surface-book-teardown-reveals-muscle-wire-mechanism/
  - https://hackaday.com/tag/muscle-wire/
  - https://nitinolactuators.com/latch-release
  - https://www.techbriefs.com/component/content/article/28406-lew-16511
  - https://www.migarobotics.com/product-page/miga-s125-008-sma-actuator
  - https://forum.arduino.cc/t/recommend-mosfet-for-muscle-wire/627291
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:Nitinol_draht.jpg
  - https://www.youtube.com/watch?v=xAyZ7eHKWlA (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=M-rr9LGpCuw (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=4Yi4epJ83EE (verified via YouTube oEmbed)
  - https://www.printables.com/model/1740874-titanmuscle-titanium-muscle-wire-latch-mount (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** everyday_examples, making_tips_3d_printing, print_in_place, processes, safety_notes

## 108 Electromagnetic brake (power-off, spring-applied)

*powered & active connectors.* Springs clamp a brake on a motor shaft whenever power is off and a coil pulls it free when powered, so robot joints hold if power fails

### What it is

- **plain_name**: A brake fitted to a motor that springs shut by itself whenever the power goes off, and is pulled open by an electromagnet while the machine is running, so an arm or lift cannot drop
- **term**: Spring-applied electromagnetic brake (power-off brake, electromagnetically released spring-set brake)
- **aliases**: 
  - power-off brake / fail-safe brake
  - spring-set brake / spring-applied brake / spring-actuated brake
  - holding brake / servo motor brake / motor brake
  - safety brake (mayr term for its spring-applied brakes)
  - non-excited brake / de-energised brake (catalogue terms, e.g. OYOSTEPPER 'Non-excited brake')
  - electromagnetically released brake
  - stepper motor with brake / brake motor
  - solenoid brake (Wikipedia; older name for a spring-engaged, solenoid-released brake)
  - Z brake / Z-motor brake (3D-printer community)
  - ROBA-stop (brand, mayr); variants: permanent-magnet brake, tooth brake
- **family**: powered & active connectors
- **other_families**: brakes, dampers & speed control, self-locking & anti-back-drive
- **one_liner**: Springs press a friction disc on the motor shaft between two plates so the shaft cannot turn, and while the machine runs an electric coil pulls the plate back against the springs, so the brake lets go only when powered and grabs automatically whenever power is cut.
- **complexity**: A small assembly that acts as one unit: a coil housing (field or stator) with the electromagnet coil, an armature plate, several compression springs, a friction disc (rotor) with lining, a splined or toothed hub fixed to the shaft, a mounting or friction plate, air-gap adjustment tubes and assembly bolts, and on some models a hand-release lever and a torque adjuster nut (INTORQ BFK458 parts list); plus a DC supply or rectifier and a switch.
- **how_it_works**: With no power, the compression springs push the armature plate against the friction disc and trap it against the mounting plate; the disc is keyed to the shaft through a splined hub, so the shaft is held (Wikipedia, Electromagnetic brake; INTORQ BFK458). Applying DC voltage to the coil makes a magnetic field that pulls the armature across a small air gap (0.2-0.5 mm on INTORQ BFK458 brakes), squeezing the springs and freeing the disc, so the shaft can turn. Cut the power, deliberately or by accident, and the springs clamp again within tens of milliseconds, holding the load. A permanent-magnet version uses magnets instead of springs, and its coil releases the brake by cancelling the magnets' field (Wikipedia; Motion Control Tips); tooth brakes lock with teeth instead of friction (SEPAC).

### Finder attributes

- **job**: 
  - hold or release using power: holds the shaft whenever power is off, releases only while powered
  - slow it, stop it or keep its speed steady: holds a stopped axis still and can make occasional emergency stops
- **motion**: rotate: it controls a rotating shaft, which turns freely when the brake is powered and is held when it is not; inside, the armature plate slides only a fraction of a millimetre (0.2-0.5 mm air gap, INTORQ BFK458)
- **degrees_of_freedom**: 1 when released (the shaft turns about its axis); 0 when engaged
- **special_behaviour**: 
  - fail-safe or breakaway: it engages automatically when power is lost or switched off; 'power off brakes stop or hold a load when electrical power is either accidentally lost or intentionally disconnected' (Ogura, electric-brake.com)
  - self-locking (holds under load, won't back-drive): holds a vertical axis or robot joint against gravity with no power, up to its rated torque (Teknic)
  - torque-limiting (slips or clicks at a set force/torque): above its holding torque it slips; Universal Robots joint brakes include a friction clutch so a jammed arm can be pushed round by hand in an emergency (Universal Robots manual)
- **holding_principle**: 
  - friction or clamping (force-fit): the friction disc is clamped between the armature and the mounting plate
  - spring force (a spring or springy part presses it in place): compression springs supply the clamping force
  - magnetic: permanent-magnet versions hold by magnets instead of springs (Wikipedia)
  - shape (the parts interlock; form-fit): tooth brakes and solenoid pin arrestors lock with teeth or a pin (SEPAC; Kendrion)
- **input_output**: Not a transmission; it holds or releases a shaft. Catalogues give the static (holding) torque; the dynamic torque while slipping at speed can be lower (Ogura, electric-brake.com). Back-drivable: no while engaged, up to its rated torque; above it the disc slips. *(unverified parts omitted)*
- **power**: powered (needs electricity to release, typically 24 V DC; a NEMA 17 add-on brake uses 24 V and 5 W, OYOSTEPPER). When power is lost it locks (engages), which is the point of it. Power can be reduced after the armature has pulled in (Motion Control Tips), e.g. 'brief overexcitation and then... reduced holding voltage' (Kendrion). Permanent-magnet versions also engage when power is off, but if they fail they tend to 'fail open', whereas spring-set brakes 'always fail safely closed' (Thomson, Tech Briefs, 2016).
- **removability**: removable: bolted to the motor end or a flange and fixed to the shaft through its hub; its own braking action is automatic, and some models have a hand-release lever (INTORQ; SEPAC)
- **reuse_cycles**: many times: it engages every time the machine stops or loses power; as a holding brake engaged at standstill it wears very little, but every stop from speed wears the lining (Advanced Motion Controls; INTORQ)
- **tools_needed**: hex keys, spanners and a torque wrench to mount it; a feeler gauge to check the air gap (INTORQ BFK458); for wiring, a DC supply, relay or transistor and a suppression diode or varistor
- **seal**: none: open brakes must be kept clean ('Keep rubbing surfaces free from grease, oil or any other contaminating material', INTORQ BFK458); many servo motors house the brake internally behind an IP65 enclosure (Advanced Motion Controls)
- **load**: Light to heavy depending on size, and only in twist (torque) about the shaft: about 0.24 N·m for a NEMA 17 stepper brake (OYOSTEPPER), 0.22-16 N·m for servo-motor brakes (Kendrion Servo Line), and up to 600 N·m holding torque for a large industrial brake (INTORQ BFK458-25). It is not meant to carry side loads.
- **adjustable**: sometimes: industrial brakes let you reset the air gap as the lining wears (INTORQ: turning the adjustment tubes 1/6 turn changes the gap by about 0.15 mm) and 'E' models have a torque adjuster nut that lowers torque in steps; small motor brakes are usually fixed
- **play_and_precision**: small: spring-set brakes have a little backlash from the rotor-to-hub fit and armature clearance (Thomson, Tech Briefs, 2016; 'some backlash', Motion Control Tips); toothed hubs keep it minimal (Kendrion Servo Line); permanent-magnet brakes have near-zero backlash (Thomson). It tolerates no misalignment: the disc must slide freely on its hub and the mounting face must be square to the shaft (INTORQ).
- **access_needed**: end of a tube or shaft: it fits over a motor's rear shaft (B-face) or front end (A-face) (Kendrion), or on a shaft between motor and gearbox; add-on brakes pass a shaft through (Teknic NEMA 23 and 34 brakes)
- **materials**: Steel coil housing and armature plate (they must be magnetic), a copper coil, a friction lining on the rotor, a steel or cast-iron mating surface (INTORQ asks for steel or cast iron), steel springs. It is a bought component, not something to print, and it connects to a steel shaft.
- **maker_difficulty**: moderate: buy one; fitting a ready-made stepper motor with brake is easy, but powering the 24 V coil through a relay or transistor with the right suppression, and releasing it before the motor moves and engaging it only after the motor stops, takes care; making your own is hard

### Making it

- **processes**: 
  - off-the-shelf part: always bought, either built into a motor ('stepper motor with brake', 'servo motor with brake') or as an add-on brake
  - 3D print (FDM): brackets, spacers and adapter plates to mount a brake or brake motor
  - CNC: metal mounting flanges and adapter plates that must be square to the shaft (INTORQ)
- **print_in_place**: no: the brake is a bought electromagnetic assembly; only its mounts can be printed
- **making_tips_3d_printing**: The brake itself cannot usefully be 3D printed; print only mounts and adapters. Keep the mounting face flat and square to the shaft; INTORQ asks for a steel or cast-iron mating face square to the shaft, so where the rotor rubs against a surface use the brake's own friction plate or flange rather than a printed face. Keep grease and oil off the friction surfaces during assembly (INTORQ). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'stepper motor with brake' or 'NEMA 17 stepper motor with electromagnetic brake' (e.g. 'DC electromagnetic brake for NEMA 17' (0.24 N·m, 24 V, 5 W, OYOSTEPPER); 'NEMA 23 brake' / 'NEMA 34 brake' (Teknic); 'servo motor with holding brake'; 'spring applied brake', 'power-off brake', 'fail-safe brake', 'holding brake', 'permanent magnet brake', 'tooth brake'; 'hand release' lever kit; 'brake rectifier' (AC supplies); 'flyback diode', 'Zener diode' or 'varistor' (coil suppression); 'relay' or 'logic-level MOSFET'; 'solenoid arrestor' or 'pin brake' (a pin that drops into a gear, Kendrion); 'gear motor with brake'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Holding brake, not a stopping brake: 'Only engage brakes when the motor is at a standstill to minimize dynamic wear'; servo brakes 'are not typically designed for frequent stops or repeated emergency stops', so use brakes designed for dynamic stopping where needed (Advanced Motion Controls).
  - Control order: release the brake when the motor driver is enabled and engage it when the driver is disabled (Duet3D firmware does this automatically with M569.7; Duet 3 Expansion 1HCL documentation).
  - Switching speed: switch the coil on the DC side for fast engagement; switching on the AC side of a rectifier lengthens engagement times by 3-6 times, and 'With falling loads such as hoists, lifts and cranes, it is ESSENTIAL to switch the brake coil on the d.c. side' (INTORQ BFK458 instructions; Transdrive, Industrial Brakes Guide, quotes 3-4 times).
  - Suppression: a plain flyback diode across the coil keeps current flowing as the field collapses, which 'delays the response' of the brake; a Zener 'shortens the decay time' (Warner Electric, Machine Design, 2012). Some controllers include a fast brake circuit that dumps the coil's energy for quick engagement (Duet 3 Expansion 1HCL).
  - Engagement times are tens to hundreds of milliseconds: about 20 ms for a Warner ERS-42 (Machine Design, 2012); 28 ms (size 06) to 230 ms (size 25) for INTORQ BFK458 with DC switching at the rated air gap.
  - Air gap: rated air gap 0.2 mm (small sizes) to 0.5 mm (large) on INTORQ BFK458; as the lining wears the gap grows, and if it grows too large the coil can no longer pull the armature in, so the brake will not release (INTORQ troubleshooting; Thomson: 'air-gap-related failure for them results in the inability to release the brake').
  - Supply voltage within -10% to +5% of the rated coil voltage (INTORQ BFK458); Kendrion Servo Line brakes are rated DC 24 V +/-10%. Spring-set brakes are more forgiving of voltage than permanent-magnet brakes, which release only over a narrow window of about 10% of the applied voltage (Thomson, Tech Briefs, 2016).
  - Power saving: 'the amount of power supplied to the brake can be reduced once the armature plate is engaged' (Motion Control Tips, 2021); some controllers run a 24 V brake from a 48 V supply by PWM (Duet 3 Expansion 1HCL).
  - Burnishing: some new brakes deliver only about 60% of rated torque until the friction faces are run in (Ogura, about its power-on brakes); spring-set brakes 'need little if any additional burnishing' (Thomson, Tech Briefs, 2016).

### When to use it

- **everyday_examples**: 
  - Lifts (elevators): the machine brake 'is actuated by spring force and held open electrically; a power failure will cause the brake to engage and prevent the elevator from falling' (Wikipedia, Elevator)
  - Power wheelchairs and mobility scooters: 'When power is removed, the brake engages and locks the drivetrain', and a freewheel lever releases it by hand for pushing (Mobility Scooters Direct; Quantum Rehab)
  - Robot arms and cobots, whose joints hold their pose when switched off (Universal Robots manual; mayr ROBA servostop Cobot)
  - Vertical axes on CNC machines and 3D printers, which 'will fall due to gravity if bus power is removed' without a brake (Teknic)
- **when_to_use**: Use it when a motor-driven axis must hold its position if power is switched off or fails: robot arm shoulders and elbows, lifting and Z axes on 3D printers and CNC machines, hoists, winches, lifts, turntables that must not drift, and vehicles that must not roll when parked. Choose it when the motor or gearbox can be back-driven (steppers, BLDC motors, efficient gearboxes) and a dropping load could cause damage or injury.
- **when_not_to_use**: Not for repeated stopping from speed: use the motor's own braking or a brake rated for dynamic stopping (Advanced Motion Controls). Where there is no electricity at all, use a mechanical brake, ratchet or lock. *(unverified parts omitted)*
- **environment_limits**: INTORQ rates its BFK458 brakes for -20 to +40 °C ambient, warns that with high humidity and low temperature the armature and rotor can freeze together, and says no explosive or aggressive atmospheres; the brake surface can reach 130 °C when stopping loads (INTORQ). Kendrion Servo Line brakes are rated -15 to +120 °C. Oil or grease on the friction faces reduces holding (INTORQ). Permanent-magnet brakes need controlled temperatures and are 'highly sensitive to oxidation', and idle periods can reduce their torque (Thomson, Tech Briefs, 2016). Linings wear with every stop from speed, so the air gap grows over time (INTORQ).
- **safety_notes**: A holding brake is not a guarantee: do not stand under a load held only by a brake. Releasing the brake by hand (hand-release lever, wheelchair freewheel lever) lets the load move: release only on level ground or with the load supported (Quantum Rehab: disengaging on an incline can let the chair roll). Universal Robots warns that its joint brakes are 'not designed for manual release' and that doing so 'may result in injuries personnel or damage to equipment'. Coil switching produces voltage spikes that need a suppressor (INTORQ). Brakes on mains-powered motors carry hazardous voltages; work with power off (INTORQ). *(unverified parts omitted)*
- **common_failures**: Brake will not release: air gap too large from wear, supply voltage too low, wrong or failed rectifier, broken wiring, or coil failure (INTORQ troubleshooting); check voltage and reset the gap. Brake drags or overheats: air gap too small or hand release set wrong (INTORQ). Holding torque drops: oil or grease on the lining (INTORQ), glazing from being used to stop a moving shaft (Advanced Motion Controls), lining worn below minimum thickness (INTORQ), or, for permanent-magnet brakes, oxidation after idle periods (Thomson). Slow engagement and a dropping axis: coil switched on the AC side, or only a plain diode used as suppression (INTORQ; Machine Design). Brake released while the motor is unpowered because of wrong control order: make sure firmware engages it whenever the driver is off (Duet3D).
- **related**: 
  - Electromagnetic clutch (power-on): the same coil and armature idea, but powering it connects a drive instead of releasing a brake
  - Friction brake (band, drum or disc brake): a hand- or pedal-applied friction brake with no fail-safe spring
  - Permanent-magnet power-off brake: magnets instead of springs; zero backlash and compact, but narrow voltage window and fails open (Thomson)
  - Tooth brake and solenoid pin arrestor: spring-applied brakes that lock with teeth or a pin dropping into a gear, positive but only at set positions (SEPAC; Kendrion)
  - Worm drive and self-locking lead screw: hold a load without power by friction in the gearing, with no brake needed
  - Bidirectional anti-back-drive clutch: a purely mechanical way to stop the load driving the motor
  - Eddy-current brake: slows a moving shaft without contact but cannot hold it still *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [O-2 electromagnetic-power-off-brake1.gif (Wikimedia Commons), by Oguraclutch](https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif): Animated diagram of an electromagnetic power-off brake, used in Wikipedia's 'Electromagnetic brake' article *(licence: Public domain (released by the copyright holder))*
  - [Spring Applied Brakes - How they work (oguraindustrial)](https://www.youtube.com/watch?v=jiJW1bAHvqA): Animation of the springs, armature and friction disc engaging and releasing (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Kendrion Tutorial - What is a spring applied brake? (KendrionVideo)](https://www.youtube.com/watch?v=qtQoADEeI6Q): Manufacturer tutorial explaining the spring-applied brake principle (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Servo Motor Brake - Spring-set type (KEB America)](https://www.youtube.com/watch?v=GMhGR4yeT_0): A spring-set holding brake of the kind fitted to servo motors (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Electromagnetic brake (Wikipedia)](https://en.wikipedia.org/wiki/Electromagnetic_brake): Article covering power-off spring-applied and permanent-magnet brakes, with diagrams *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [Duet 3 Expansion 1HCL documentation (Duet3D)](https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL): Wiring and firmware notes for driving a 24 V motor brake from a 3D-printer or CNC controller: a dedicated brake output with fast release, PWM voltage control and the M569.7 command that releases the brake when the motor is enabled *(licence: documentation; link only)*
  - [Z-brake board model, by plainman98 (URL from Printables API, page not opened)](https://www.printables.com/model/1219484-z-brake-board-model): Outline model for mounting a home-made circuit that slows a falling 3D-printer bed after power loss, an electronic alternative to a spring-applied brake (read through the Printables API) *(licence: Creative Commons Public Domain)*
- **diagram_idea**: Two-frame cutaway of a brake on a motor shaft: frame 1 (power off) shows springs pushing the armature plate against the friction disc, which is squeezed against the mounting plate, with a padlock icon on the shaft and a hanging load that stays put; frame 2 (power on) shows the coil glowing and pulling the armature back across a labelled 0.2 mm gap, springs compressed and the disc spinning free.
- **sources**: 
  - https://en.wikipedia.org/wiki/Electromagnetic_brake
  - https://en.wikipedia.org/wiki/Solenoid_brake
  - https://en.wikipedia.org/wiki/Elevator
  - https://www.motioncontroltips.com/what-are-electromagnetic-power-off-brakes-and-where-are-they-used/
  - https://www.techbriefs.com/component/content/article/25417-an-inside-look-at-electromechanical-power-off-braking-options
  - https://www.electric-brake.com/
  - https://www.mayr.com/en/products/more-products/product-glossary/brakes/spring-applied-brakes
  - https://www.kendrion.com/en/products-services/industrial-brakes/spring-applied-brakes/servo-line
  - https://kendrion.com/en/products/solenoids-actuators/locking-solenoids-door-lock-systems/electromechanic-pin-brake
  - https://sepac.com/electromagnetic-brakes/spring-applied-brakes/
  - https://www.kebamerica.com/blog/spring-set-brakes-how-it-works/
  - https://teknic.com/products/spring-applied-power-off-brakes/
  - https://www.oyostepper.com/goods-392-DC-Electromagnetic-Brake-24V-025Nm-354ozin-for-Nema-17-Stepper-Motor.html
  - https://docs.rs-online.com/af5b/0900766b804c5ed7.pdf
  - https://www.industrialbrakesguide.com/brake-switching
  - https://www.machinedesign.com/news/article/21829695/suppression-circuits-for-clutches-and-brakes
  - https://www.a-m-c.com/mechanical-servo-motors-failures-and-faults/
  - https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL
  - https://www.universal-robots.com/manuals/EN/HTML/SW5_20/Content/prod-serv-man/E-series/serv-man-title-no-drive-pwr.htm
  - https://www.mobilityscootersdirect.com/blog/diy/how-to-test-a-mobility-scooter-or-power-wheelchair-brake-system-with-a-multimeter/
  - https://www.quantumrehab.com/resources/consumer-article-can-you-push-an-electric-wheelchair.asp
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif
  - https://www.youtube.com/watch?v=jiJW1bAHvqA (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=qtQoADEeI6Q (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=GMhGR4yeT_0 (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=-39GtYVHS6M (verified via YouTube oEmbed; 'STOP THE DROP! - Project R3D Zmotor Brake Board')
  - https://www.printables.com/model/1219484-z-brake-board-model (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** input_output, making_tips_3d_printing, off_the_shelf_parts, related, safety_notes, when_not_to_use

## 109 Vacuum (suction) gripper

*powered & active connectors.* A soft cup connected to a vacuum pump or generator that grips smooth objects by suction and lets go when the vacuum is released

### What it is

- **plain_name**: A soft rubber cup on the end of a hose that sucks onto a smooth object so a robot or tool can lift it, and drops it again as soon as air is let back into the cup
- **term**: Vacuum gripper (suction-cup end effector)
- **aliases**: 
  - suction gripper or suction-cup gripper
  - vacuum cup, suction cup, suction pad or vacuum pad (the rubber part)
  - vacuum end effector or vacuum end-of-arm tooling (EOAT)
  - venturi vacuum gripper or compressed-air vacuum gripper (vacuum ejector, vacuum generator)
  - vacuum pen, vacuum pick-up tool or vacuum tweezers (hand-held version for small electronic parts)
  - pick-and-place nozzle (in electronics assembly machines)
  - vacuum lifter (for glass panes and sheets)
  - area gripper (a large vacuum gripper with many suction openings)
  - astrictive gripper (the formal category of grippers that hold with an attracting force such as suction)
- **family**: powered & active connectors
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A flexible cup connected to a vacuum pump or an air-powered vacuum generator that holds smooth objects by pumping the air out from under it, and lets go when a valve lets air back in.
- **complexity**: A small assembly that acts as one unit: the suction cup (a rubber part plus a connection nipple), a vacuum source (an electric vacuum pump, or a compressed-air venturi ejector), a valve that switches the vacuum on and off and lets air back in (venting) or blows a short puff (blow-off), hoses and fittings, a dust filter, and often a vacuum switch or pressure sensor that checks a part is really held (Schmalz knowledge base; OpenPnP wiki).
- **how_it_works**: The cup is pressed onto a smooth, airtight surface and the vacuum source pumps the air out from inside it. The cup does not really 'suck': the surrounding air pressure pushes the cup and the object together, and the holding force equals the pressure difference times the area inside the cup's seal (F = Δp × A) (Schmalz 'Vacuum suction cups'; Wikipedia 'Suction cup'). A vacuum ejector makes vacuum from compressed air: the air rushes through a narrow venturi nozzle and drags air in through a side port connected to the cup (Schmalz 'Vacuum ejectors'). To let go, a valve opens the cup to the air or blows a short puff through it; simply switching off a small pump can leave a part stuck for up to about a second (Riemersma, Printables vacuum pen; Automatic Addison).

### Finder attributes

- **job**: 
  - hold or release using power: it holds only while vacuum is applied and lets go when the vacuum is vented or blown off
  - join and hold: temporarily picks up, carries and places objects, e.g. on a robot arm, a CNC machine or a pick-and-place machine
  - lock, and release by hand: hand-held vacuum pens and lifters let go when you uncover a small air hole or press a valve (Riemersma, Printables)
- **motion**: none: the object is held still against the cup. Bellows-shaped cups squash slightly as the air is pumped out, which gives a small lifting movement while picking up (Schmalz 'Suction cup shapes'; Schmalz 'Technical data': suction cup stroke)
- **degrees_of_freedom**: 0 while holding: the object is locked to the cup. Before the vacuum builds up, the soft lip lets the cup tilt a little to sit flat, and bellows cups also make up for differences in height (Schmalz 'Suction cup shapes')
- **special_behaviour**: 
  - quick-release: lets go almost at once when a valve vents the cup or blows air through it; a small leak hole or a blow-off pulse is used because residual vacuum can otherwise hold a small part for up to about a second after the pump stops (Riemersma, Printables vacuum pen; LoboCNC, Printables ejector)
- **holding_principle**: 
  - suction or air pressure: outside air pressure pushes the cup onto the object (F = Δp × A) (Schmalz)
  - friction or clamping (force-fit): loads along the surface are carried only by friction between the cup lip and the object, so a cup on a vertical face needs to be bigger; friction coefficient about 0.5 on dry wood, metal, glass or stone, 0.2 to 0.3 wet, 0.1 to 0.3 oily (Schmalz 'Theoretical holding force')
  - powered hold: a pump or compressed air must keep the vacuum up, or a non-return valve must seal it in (Schmalz 'Valve technology')
- **input_output**: not applicable
- **power**: powered: needs an electric vacuum pump, or compressed air driving a venturi ejector; electric pumps are used when there is no compressed air or very high suction flow is needed (Schmalz 'Vacuum generators'); a hand pump or syringe works for small tools. If power or air is lost the vacuum leaks away and the object is released (it drops), faster on leaky or porous surfaces; a non-return (check) valve can seal the vacuum in and prevent leakage during a power failure (Schmalz 'Valve technology')
- **removability**: tool-free quick release: the object is let go by venting the vacuum; the cup itself pushes or screws onto its fitting and is changed by hand or with a spanner
- **reuse_cycles**: effectively unlimited pick-and-release cycles, because nothing locks or deforms permanently; the rubber cup is a wear part that ages from ozone, UV light, heat, oxygen and moisture and wears by abrasion, and is replaced when it stops sealing (Schmalz 'Storage and cleaning of suction cups'; Schmalz material overview)
- **tools_needed**: none to operate; spanner, push-in fittings and a tube cutter or scissors to assemble; soldering iron or crimp connectors to wire a hobby pump and valve (Automatic Addison)
- **seal**: airtight or pressure: the cup's soft lip must seal against the object, and every hose, fitting and printed part must be airtight; porous objects such as cardboard, unvarnished wood, fabric, styrofoam and concrete leak and need a strong vacuum flow to make up for it (Vention; Schmalz)
- **load**: light to heavy, set by cup area and vacuum level: an ideal cup 40 mm across at full vacuum would hold about 130 N (Wikipedia 'Suction cup'), but real cups hold less, e.g. a 3D-printed soft cup 20 mm across held over 7.4 N at 55 kPa (Koivikko et al. 2021). Always add a safety factor of at least 2 (Schmalz 'Design of the suction cup') *(unverified parts omitted)*
- **adjustable**: yes: holding force rises with the vacuum level (chosen by the pump or ejector, or set with a regulator) and with cup size and number of cups; some ejectors switch vacuum generation off once a safe vacuum is reached and back on when it falls below a set minimum, which saves compressed air (Schmalz 'Vacuum ejectors')
- **play_and_precision**: Play: none while the vacuum is on, although the rubber lip is springy. Flat cups are stiff, so they give good positioning accuracy and resist high sideways (shear) forces; bellows cups give up some precision to cope with uneven, curved or height-varying parts (Schmalz 'Suction cup shapes'). Misalignment: it can land anywhere on a flat face, but the face must be flatter and larger than the cup's lip; each cup has a minimum workpiece radius of curvature it can grip (Schmalz 'Technical data of suction cups')
- **access_needed**: one side only (blind): it grips from a single face, so it can lift sheets, panes, boxes and circuit-board parts whose back or edges can't be reached
- **materials**: Cups: nitrile rubber (NBR; general use, excellent oil resistance, about -10 to +70 °C long-term), silicone (about -30 to +180 °C long-term but only fair oil and abrasion resistance), polyurethane (excellent abrasion resistance, about -30 to +100 °C), natural rubber (about -25 to +80 °C, poor oil and ozone resistance) and others (Schmalz material overview). Bodies and manifolds: aluminium or plastic; hobby ejectors, manifolds and vacuum pens print in PLA, PETG or ABS, and cups can be printed in TPU 85A to 98A (Printables: LoboCNC, Riemersma, Fredslund). Grips smooth, non-porous objects well: glass, steel, aluminium, hard plastic, varnished wood (Vention). Poor on porous, rough or ribbed surfaces; even some 3D-printed surfaces are too rough to seal (Brown et al. 2010)
- **maker_difficulty**: moderate: cups, mini pumps, valves and tubing are cheap and easy to buy and the mount prints easily, but making every joint airtight, sizing the cup with a safety factor, and adding a vent or blow-off valve so parts release cleanly takes some care (Automatic Addison; Riemersma, Printables; Schmalz)

### Making it

- **processes**: 
  - off-the-shelf part: suction cups, vacuum pumps, venturi ejectors, valves, filters and fittings are bought (Schmalz; Automatic Addison)
  - 3D print (FDM): brackets, cup mounts, manifolds, vacuum pens, small venturi ejectors and even TPU cups (Printables: LoboCNC, FabianVeile, Riemersma, Fredslund) *(unverified parts omitted)*
- **print_in_place**: partly: gripper bodies, manifolds and one-piece venturi ejectors print as single parts (FabianVeile's 6 g venturi gripper prints in one piece with supports; LoboCNC's ejector needs its nozzle drilled clean and its ports tapped), but the rubber cup, tubing, fittings and vacuum source are added
- **making_tips_3d_printing**: 1) Make printed air paths airtight: plain FDM walls leak between layers, so for manifolds, adapters and ejector bodies use at least 3-4 perimeters (5-6 for awkward shapes), print 5-10 °C hotter than the preset, raise the extrusion multiplier by 5-10 % (or widen lines from 0.4 to 0.44 mm), keep layers around 0.15-0.2 mm and never more than 60-65 % of the nozzle width, and raise XY overlap from 10 % to 25-35 % if the bottom still leaks (Prusa Knowledge Base 'Watertight prints'). 2) Printed venturi ejectors: LoboCNC's ejector prints in PLA (ABS or PETG should also work) with 0.35 mm line width and 0.2 mm layers; afterwards clear the internal nozzle hole with a 0.047 in (1.2 mm) drill bit and tap the ports for 10-32 pneumatic fittings; at 50 psi input it gives about 5 psi of vacuum and weighs under 5 g (Printables). FabianVeile's one-piece venturi gripper prints in PLA at 0.12 mm layers with 20 % gyroid infill, 1 mm inner walls and tree supports; one user lifted 11.4 g with it at 6 bar (Printables). 3) Printed cups: TPU from 85A to 98A works; print the cup on a smooth plate (or smooth tape) so the sealing face is smooth, print a little hot so the TPU flows, and expect it to hold strongly for a short time but slowly leak, because the filament is not soft enough to seal completely (Fredslund, 'Suction Cup 2.0'). For a reliable seal, buy moulded rubber cups and print only the mount. 4) Seal threaded fittings with PTFE (Teflon) tape, as in the Team Automata jamming gripper (Hackaday.io). 5) Keep the hose between valve and cup short and the cup volume small: the inner volume has to be evacuated before the part is held, so it sets the gripping time (Schmalz 'Technical data'); putting a small ejector right at the gripper gives nearly instant pick-up and release (LoboCNC, Printables). 6) Add a small adjustable leak or a blow-off valve so parts drop cleanly (Riemersma, Printables vacuum pen).
- **off_the_shelf_parts**: Vacuum cups (suction cups, vacuum pads): flat round, flat oval and bellows types, in NBR, silicone, polyurethane and other rubbers, each with a connection nipple (Schmalz). Vacuum generators: vacuum ejectors (venturi; basic ejectors, compact ejectors with built-in suction and blow-off valves, filter and vacuum switch, and multi-nozzle ejector modules), electric vacuum pumps (dry-running, oil-lubricated or water-ring) and vacuum blowers (Schmalz 'Vacuum generators'). Hobby parts: micro air (vacuum) pump (3.7-6 V, under 0.4 A), 3-6 V solenoid valve, silicone tubing 2 mm inside diameter, and 'robot suction cup vacuum pump kits' for servo arms (Automatic Addison). Valves: solenoid valves for vacuum and compressed air, non-return (check) valves, manual 2/2- or 3/2-way valves (Schmalz 'Valve technology'). Also vacuum filters, vacuum distributors (manifolds), push-in fittings and hoses, vacuum switches and pressure sensors for part detection (Schmalz; OpenPnP wiki), and hand-held vacuum pens for SMD parts.
- **rules_of_thumb**: 
  - Holding force = pressure difference × effective area inside the seal (F = Δp × A), with no safety factor and only for a static load; an ideal 40 mm cup at full vacuum gives about 130 N, real cups less (Schmalz 'Vacuum suction cups'; Wikipedia 'Suction cup')
  - Cup diameter for a horizontal pick-up: d = 1.12 × √(m × S / (P × n)), with d in cm, m the part mass in kg, P the vacuum in bar, n the number of cups and S the safety factor; for a vertical pick-up also divide by the friction coefficient µ inside the root. Worked example: a 50 kg sheet, 0.4 bar vacuum, 4 cups, S = 2 needs d = 8.85 cm lying flat and 12.5 cm on a vertical face with µ = 0.5 (Schmalz 'Design of the suction cup')
  - Safety factor: Schmalz recommends at least 2; German accident-prevention rules (UVV) require 1.5; use 2.5 or more when the part is swung round (Schmalz 'Design of the suction cup'). Minimum 1.5 for smooth, dense parts and 2 or more for rough, porous, oily or uneven parts (Schmalz 'Theoretical holding force of a suction cup')
  - Include acceleration (and emergency stops) in the load: needed force = m × (g + a) × S for a straight lift, m × (g + a/µ) × S when a flat-lying part is moved sideways, and (m/µ) × (g + a) × S when the cup holds a vertical face (Schmalz 'Theoretical holding force of a suction cup')
  - Friction between cup and object for sideways loads: about 0.5 on dry wood, metal, glass or stone, 0.6 on rough surfaces, 0.2-0.3 wet, 0.1-0.3 oily; measure it on the real part (Schmalz 'Theoretical holding force of a suction cup')
  - Flat cups for flat or slightly curved parts and fast cycles (low inner volume, high shear force); bellows cups for curved, uneven, fragile or varying-height parts (Schmalz 'Suction cup shapes')
  - Typical suction flow needed on smooth airtight parts: cups up to 60 mm about 0.5 m³/h (8.3 L/min); up to 120 mm about 1.0 m³/h (16.6 L/min); up to 215 mm about 2.0 m³/h; run suction trials on porous parts (Schmalz 'Design of the suction cup')
  - Porous objects (cardboard, unvarnished wood, fabric, styrofoam, concrete) need a strong, continuous vacuum flow to make up for air leaking through them; non-porous ones (glass, steel, aluminium, hard plastic, varnished wood) seal and need less flow (Vention)
  - Store spare cups cool (0-15 °C, never above 25 °C), dark, dry and without squashing them; clean with soapy warm water and never with solvents (Schmalz 'Storage and cleaning of suction cups', based on DIN 7716)

### When to use it

- **everyday_examples**: 
  - Factory robots stacking boxes, sheet metal or furniture panels with suction cups; vacuum cups and electromagnets dominate car-making and sheet-metal handling (Wikipedia 'Robot end effector'; Wikimedia Commons palletising photo)
  - Vacuum pens and pick-and-place machines that place tiny electronic parts on circuit boards (Riemersma, Printables; OpenPnP wiki)
  - Suction lifters used to carry panes of glass and raised floor tiles (Wikipedia 'Suction cup')
  - Desktop hobby robot arms with a suction cup and a small air pump (Automatic Addison)
- **when_to_use**: Use it when a robot, CNC machine or hand tool must pick up flat or gently curved, smooth, airtight things such as sheets, panes, boxes, bags, lids, circuit boards and small electronic parts (Vention; Wikipedia 'Robot end effector'); when you can only reach one face of the object; when the grip must be gentle and leave no marks, with no fingers to fit around the part; and in pick-and-place jobs where parts must be picked and released quickly (Schmalz 'Suction cup shapes'; OpenPnP wiki).
- **when_not_to_use**: Avoid it for porous, rough, ribbed, dusty or very small objects that a cup can't seal on; use a granular jamming gripper, fin-ray fingers or mechanical jaws instead. Porous cardboard or fabric needs a high-flow pump rather than a small hobby pump (Vention). Don't rely on it where the load must stay held if power or air fails: it drops the part unless a non-return valve holds the vacuum (Schmalz), so use mechanical jaws or a self-locking gripper instead. For steel parts, a holding electromagnet or switchable magnet is an alternative that doesn't care about porosity (Wikipedia 'Robot end effector').
- **environment_limits**: The cup material sets the temperature range: nitrile rubber about -10 to +70 °C long-term, silicone about -30 to +180 °C, natural rubber about -25 to +80 °C, polyurethane about -30 to +100 °C (Schmalz material overview). Ozone, UV light, heat, oxygen, moisture and mechanical stress shorten cup life (Schmalz 'Storage and cleaning of suction cups'). Wet or oily surfaces cut sideways grip (friction coefficient 0.2-0.3 wet, 0.1-0.3 oily) (Schmalz). Dust gets sucked into the system, so fit a vacuum filter to protect the pump (Schmalz 'Filters and connectors'). Because the force comes from the outside air pressure (Wikipedia 'Suction cup'), the most a cup can hold falls at high altitude; vacuum generator ratings assume 1,013 mbar at sea level and 20 °C (Schmalz 'Vacuum generators').
- **safety_notes**: A vacuum gripper drops its load as soon as the vacuum is lost (power cut, air hose off, a leak or a torn cup), so never carry loads over people and always use a safety factor of at least 2 (Schmalz). Fast moves and emergency stops add large sideways forces that can fling a part off, so include them in the sizing (Schmalz 'Theoretical holding force'). Keep fingers clear of the cup and robot as it presses down. *(unverified parts omitted)*
- **common_failures**: Leaks: porous, rough, curved or dirty surfaces, a torn, hardened or dirty cup, loose fittings or leaky printed parts stop the vacuum building; choose a suitable cup shape and material, clean the cup, and test on the real part (Schmalz; Vention; Prusa 'Watertight prints'). Part slides or flies off during fast moves: cup too small or too little friction; size it with the load-case formulas and a safety factor (Schmalz). Part stays stuck after release: residual vacuum can hold small parts for up to about a second after the pump stops; add an adjustable air leak, a vent valve or a blow-off pulse (Riemersma, Printables vacuum pen), and use a vacuum sensor to check the part has really gone (OpenPnP wiki). Slow gripping: long hoses and large cups mean more air to pump out; mount the vacuum generator close to the cup (Schmalz 'Technical data'; LoboCNC, Printables). Printed TPU cups slowly lose vacuum (Fredslund, Printables). Dust or grit reaches the pump: fit a filter (Schmalz). *(unverified parts omitted)*
- **related**: 
  - Suction cup (passive): pressed on by hand and held by the trapped low pressure, with no pump; it slowly leaks and needs a lever or peel tab to release
  - Granular jamming gripper: a bag of grains that moulds around odd shapes and grips by friction, suction and interlocking once the air is pumped out; handles irregular objects a cup can't seal on
  - Bernoulli (non-contact) gripper: blows air across the part so it is held close without touching; used for silicon wafers, solar cells, textiles and leather (Wikipedia 'Robot end effector')
  - Electroadhesive and other astrictive grippers: also hold by an attracting force on the surface, but electrically instead of with air (Wikipedia 'Robot end effector')
  - Holding electromagnet and switchable permanent magnet: grip steel parts magnetically, regardless of porosity
  - Fin-ray gripper and compliant gripper fingers: grip by squeezing, so they work on porous, rough or oddly shaped objects
  - Vacuum clamping (vacuum workholding): the same principle used to hold workpieces on a machine table (Schmalz lists vacuum clamping technology as a product area)

### Pictures, videos and models

- **links**: 
  - [Suction cup pressure from collisions (Becarlson, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Suction_cup_pressure_from_collisions.svg): Diagram showing that the outside air pressure (gas particles colliding with the cup) is what holds a suction cup on *(licence: CC BY-SA 3.0)*
  - [Palettieranlage für Möbelteile (palletising system for furniture parts) (De Man Automation + Service, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Palettieranlage_f%C3%BCr_M%C3%B6belteile_der_de_Man_Automation_%2B_Service_GmbH.jpg): Photo of an industrial robot palletising furniture parts, filed in Commons' 'Vacuum grippers' category *(licence: CC BY-SA 4.0)*
  - [Vacuum Ejectors (Schmalz knowledge base)](https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-generators/vacuum-ejectors): Labelled explanation of how a venturi ejector turns compressed air into vacuum (air inlet, nozzle, silencer, vacuum port) *(licence: link only)*
  - [Suction Cup Shapes (Schmalz knowledge base)](https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/suction-cup-shapes): Flat and bellows suction cups compared, with their typical uses *(licence: link only)*
  - [Robotic Arm With Vacuum Suction Cup for Pick and Place (Automatic Addison, YouTube)](https://www.youtube.com/watch?v=8L8AaNoFm9Q): Video of a hobby servo robot arm picking and placing objects with a suction cup, micro pump and solenoid valve (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
- **make_it_yourself**: 
  - [Miniature Vacuum Ejector (Air Powered Vacuum Pump) (LoboCNC, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/132338-miniature-vacuum-ejector-air-powered-vacuum-pump): Printable 5 g venturi vacuum generator for a robot vacuum cup; 50 psi air in gives about 5 psi vacuum; needs drilling and 10-32 tapping *(licence: CC BY-SA)*
  - [Compressed Air Vaccum Gripper (Prototype) (FabianVeile, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/223266-compressed-air-vaccum-gripper-prototype): One-piece printed venturi vacuum gripper with a robot-arm bracket; a user lifted 11.4 g at 6 bar *(licence: CC BY-NC-ND)*
  - [Vacuum Pen for Manual SMD Assembly (Thiadmer Riemersma, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30983-vacuum-pen-for-manual-smd-assembly): Parametric OpenSCAD vacuum pen for an external pump, with an adjustable air-leak slot so parts release quickly when the pump stops *(licence: CC BY-SA)*
  - [Suction Cup 2.0 - 100% Printed (Fredslund, Printables) (URL seen in search results; read via Printables API)](https://www.printables.com/model/73849-suction-cup-20-100-printed): Fully printed lever suction cup with a TPU cup and PETG body; a quick way to test how well a printed cup seals *(licence: CC BY-SA)* *(unverified parts omitted)*
- **diagram_idea**: Side-view cutaway of a cup on a flat object with arrows showing outside air pushing down and a hose pulling air out, next to a small venturi ejector showing compressed air rushing past a side port, and a second frame where a valve opens to let air back in and the object drops.
- **sources**: 
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/design-of-the-suction-cup
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/system-design-calculation-example/theoretical-holding-force-of-a-suction-cup
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/suction-cup-shapes
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/suction-cup-materials
  - https://media.schmalz.com/MAM_Library/Dokumente/Auswahlhilfen/VA/272fbdc64cc1_Document_Selection_Guidelines_Material_Suction_Cup_EN_2025.pdf
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/storage-and-cleaning-of-suction-cups
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-suction-cups/technical-data-of-suction-cups
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-generators
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/vacuum-generators/vacuum-ejectors
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/valve-technology
  - https://www.schmalz.com/en/support/know-how/vacuum-knowledge/the-vacuum-system-and-its-components/filters-and-connectors
  - https://en.wikipedia.org/wiki/Suction_cup
  - https://en.wikipedia.org/wiki/Robot_end_effector
  - https://vention.io/blogs/getting-started-with-vacuum-grippers-431
  - https://automaticaddison.com/robotic-arm-with-vacuum-suction-cup-for-pick-and-place/
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1002/aisy.202100034?fields=title,abstract,authors,year,venue,openAccessPdf,externalIds
  - https://api.crossref.org/works/10.1002/aisy.202100034
  - https://arxiv.org/pdf/1009.4444
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://raw.githubusercontent.com/wiki/openpnp/openpnp/Setup-and-Calibration_Vacuum-Setup.md
  - https://raw.githubusercontent.com/wiki/openpnp/openpnp/Setup-and-Calibration_Vacuum-Sensing.md
  - https://hackaday.io/project/158551/instructions
  - https://commons.wikimedia.org/wiki/Category:Vacuum_grippers
  - https://commons.wikimedia.org/wiki/File:Suction_cup_pressure_from_collisions.svg
  - https://commons.wikimedia.org/wiki/File:Palettieranlage_f%C3%BCr_M%C3%B6belteile_der_de_Man_Automation_%2B_Service_GmbH.jpg
  - https://www.youtube.com/watch?v=8L8AaNoFm9Q
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, load, make_it_yourself, processes, safety_notes

## 110 Granular jamming gripper (coffee-balloon gripper)

*powered & active connectors.* A soft bag of coffee grounds or grains that moulds around an object, then goes rigid and grips it when the air is sucked out

### What it is

- **plain_name**: A balloon full of ground coffee that you press onto an object so it squishes around it, then suck the air out so it goes rock-hard and grabs the object; let the air back in and it lets go
- **term**: Granular jamming gripper (universal jamming gripper)
- **aliases**: 
  - coffee-balloon gripper or coffee gripper
  - universal gripper or universal robotic gripper
  - jamming gripper or vacuum jamming gripper
  - bean-bag gripper or bag gripper
  - positive-pressure jamming gripper (a version that also blows air in to reset and release)
  - granular gripper or granular-jamming soft gripper
  - VERSABALL (Empire Robotics, brand)
- **family**: powered & active connectors
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A soft rubber bag filled with grains such as ground coffee that flows around an object when pressed onto it, then locks rigid and grips it when a pump sucks the air out, and softens and lets go when air is let back in.
- **complexity**: A small assembly that acts as one unit: a stretchy airtight bag (often a latex party balloon), loose grains inside it (ground coffee is the usual choice), a filter so grains aren't sucked out, a rigid base or funnel with a hose connection, and a vacuum source (pump, venturi or even a large syringe) with a valve; better versions add a rigid collar round the bag and a compressed-air port to reset it (Brown et al. 2010; Amend et al. 2012: 12 components including five screws).
- **how_it_works**: Loose grains in a bag behave almost like a liquid, so when the soft bag is pressed onto an object it flows around it and takes its shape. When the air is pumped out, the outside air pressure squeezes the bag and the grains lock against each other (a 'jamming transition'), so the bag goes solid; a volume change of under 0.5 % is enough (Brown et al. 2010). The hardened bag then holds the object in three ways: friction from the bag pinching around it, suction where the rubber seals onto a smooth surface, and interlocking where it has wrapped around bumps or more than half-way round the object (Brown et al. 2010). Letting air back in unjams the grains so the bag softens and lets go, and a short puff of compressed air resets it faster, or even shoots the object away (Amend et al. 2012; Make:).

### Finder attributes

- **job**: 
  - hold or release using power: it holds only while the bag is under vacuum and lets go when air is let back in (Brown et al. 2010)
  - join and hold: picks up, carries and places objects of almost any shape, including several at once without changing their spacing (Brown et al. 2010; Amend et al. 2012)
- **motion**: flex: the soft bag squashes and flows around the object before it is jammed; once the vacuum is on there is no motion (Brown et al. 2010)
- **degrees_of_freedom**: 0 while jammed: the object is held rigidly. Before jamming, the researchers describe the bag as like a robot hand with an unlimited number of joints, which are set passively by touching the object and all locked by a single active part, the pump (Brown et al. 2010)
- **special_behaviour**: 
  - self-aligning or self-centring (shape-adapting): the bag moulds itself to the object without sensors or planning, and still grips objects up to about 30 mm off-centre for a 25 mm radius hemisphere (Amend et al. 2012)
  - quick-release: letting air back in softens the bag and drops the object; a 0.1 s puff of compressed air resets the bag and can throw small objects about 0.6 m (Amend et al. 2012; Make:)
- **holding_principle**: 
  - jamming (grains lock up under load): pumping the air out lets outside air pressure squeeze the grains until they can't slide (Brown et al. 2010)
  - friction or clamping (force-fit): the slightly shrinking bag pinches the object like an O-ring (Brown et al. 2010)
  - suction or air pressure: where the rubber seals on a smooth surface, a vacuum forms as the object is pulled, giving about 10 times the holding force of a non-sealing object (Brown et al. 2010)
  - shape (the parts interlock; form-fit): when the bag wraps more than half-way round an object or around its bumps (Brown et al. 2010)
  - powered hold: the vacuum must be kept on (Brown et al. 2010)
- **input_output**: not applicable
- **power**: powered: needs a vacuum pump, a venturi aspirator on compressed air, or a hand-worked syringe (Brown et al. 2010; Schertz); a positive-pressure version also needs compressed air to reset (Amend et al. 2012). If the vacuum is lost the grains unjam, the bag softens and the object is released (Brown et al. 2010)
- **removability**: tool-free quick release: the object drops as soon as air is let back into the bag (Brown et al. 2010; Make:)
- **reuse_cycles**: many times: in several hundred research tests the latex bag never failed and showed no visible wear, though the researchers name the durability of a single latex skin as a concern (Amend et al. 2012)
- **tools_needed**: none to operate; to build: scissors or a knife, a funnel, duct tape and a hose (Make:), or a 3D printer, screws, PTFE tape and silicone sealant for a printed housing (Hackaday.io, Team Automata)
- **seal**: airtight or pressure: the bag and its connections must be airtight so the vacuum holds; the balloon is pinched between a printed base and collar, or taped and sealed (Amend et al. 2012; Hackaday.io, Team Automata; Make:)
- **load**: light to medium: holding forces are many times the weight of hand-sized objects (Brown et al. 2010); holding force grows roughly with vacuum level and with gripper size squared, and objects that seal against the bag are held about 10 times harder (Brown et al. 2010). A commercial version (VERSABALL, brand) was rated for objects up to 9 kg (New Atlas). Resists sideways forces and twisting as well as pull, mainly by friction (Brown et al. 2010). Weak on thin flat objects, very soft objects and objects too large for the bag to wrap round (Brown et al. 2010; Amend et al. 2012)
- **adjustable**: yes: grip strength rises with the vacuum level, because the jammed grains get stiffer (Brown et al. 2010); the amount of fill, the grain type and the bag material also change how well it conforms and holds (Brown et al. 2010; Howard et al. 2021)
- **play_and_precision**: Play: once jammed, the object is held firmly, but position is set by where the bag happened to mould. In tests on a robot arm, a positive-pressure jamming gripper placed an 18 mm radius hemisphere within about 1 mm on average (±1.00 mm, 95 % confidence) and turned it by about 7.5° on average (Amend et al. 2012). Misalignment: very tolerant, gripping hemispheres up to about 30 mm off-centre (Amend et al. 2012); it doesn't need to be positioned precisely (Brown et al. 2010)
- **access_needed**: one side only (blind): it is pressed onto the object from one side, but the bag must reach far enough round the sides (a contact angle of more than about 45°) to get a grip (Brown et al. 2010)
- **materials**: Bag: a thin latex party balloon (0.3-0.33 mm thick in the research grippers) or silicone skins (Brown et al. 2010; Amend et al. 2012; Machines 2024 study). Grains: ground coffee (light and jams well; the usual choice), glass beads 0.1-1 mm, rice, couscous, ground-up tyres, BBs (small shooting pellets), and custom 3D-printed grains; sand jams better but is too heavy (Cornell Chronicle; Brown et al. 2010; Howard et al. 2021; Hackaday). Housing, base and collar: 3D-printed plastic or a cut-down kitchen funnel (Amend et al. 2012; Make:). Grips rigid objects of almost any shape: springs, raw eggs, coins, batteries, pens, LEDs, foam ear plugs (Brown et al. 2010; Amend et al. 2012; Schertz)
- **maker_difficulty**: easy: a balloon, ground coffee, a funnel, cloth or a coffee filter and a syringe or reversible air pump make a working gripper in 1-3 hours (Make: rates it 'Easy'; Schertz spent about $12); a robot-ready version with a printed housing, pump and valve is moderate (Hackaday.io, Team Automata)

### Making it

- **processes**: 
  - off-the-shelf part: balloon, ground coffee, funnel, filter cloth, syringe, air pump and valves (Make:; Schertz); commercial grippers were also sold (VERSABALL, brand) (New Atlas)
  - 3D print (FDM): base, collar, housing and tubing adapter (Amend et al. 2012; Hackaday.io, Team Automata)
  - 3D print (resin): custom-shaped grains printed on a PolyJet printer in research (Howard et al. 2021)
- **print_in_place**: partly: the rigid base, collar or housing prints in one piece, but the balloon, grains, filter, tubing and vacuum source are added (Amend et al. 2012; Hackaday.io, Team Automata)
- **making_tips_3d_printing**: 1) Housing: print a base and a separate collar that pinch the balloon's rim between them to make an airtight seal; the collar also guides the bag round the sides of objects, which increases grip (Amend et al. 2012). Make the housing airtight: use at least 3-4 perimeters, a slightly higher temperature and 5-10 % more flow (Prusa 'Watertight prints'). 2) Seal the hose nozzle: wrap it in PTFE (Teflon) tape, clamp it, and seal round it with silicone caulk before fitting it (Hackaday.io, Team Automata). 3) Filter: put a coffee filter, breathable cloth or a 1/4 in barbed inline filter between the grains and the hose so grains aren't sucked into the pump; a breathable filter lets air move quickly (Make:; Schertz; Hackaday.io, Team Automata; Amend et al. 2012). 4) Filling: stretch the balloon over a short tube, spoon in a tablespoon of coffee, blow into the tube (or use compressed air) so the coffee drops into the balloon, pinch and let the air out slowly, and repeat (Make:; Hackaday.io, Team Automata). Fill it almost completely but don't stretch it, so the grains stay loose; the research gripper used 350 cm³ of coffee in a bag about 43 mm in radius (Amend et al. 2012; Brown et al. 2010). 5) Grains: small grains mould to fine detail better, but very fine powders stick, flow poorly and take longer to pump out; coffee is a good light compromise (Brown et al. 2010; Cornell Chronicle). 6) Mounting: printed housings can include a T-slot mount for aluminium extrusion (Hackaday.io, Team Automata).
- **off_the_shelf_parts**: Latex balloons (about 12 in party balloons), ground coffee, coffee filter or thin breathable cloth, 3 in kitchen funnel, 100 mL syringe (Make:; Schertz); 1/4 in barbed inline air filter, 1/4 in and 3/32 in tubing, 12 V air pump with a servo-switched direction control valve (Hackaday.io, Team Automata); reversible air pump (Make:); solenoid valves and a venturi aspirator on compressed air, or a laboratory vacuum pump (Brown et al. 2010; Amend et al. 2012). Commercial grippers: VERSABALL (Empire Robotics, brand) (New Atlas).
- **rules_of_thumb**: 
  - Fill the bag almost completely but without stretching it, so the grains stay loose and the bag is soft when not under vacuum; e.g. 350 cm³ of ground coffee in a 0.33 mm latex bag about 43 mm in radius (Amend et al., IEEE Transactions on Robotics 2012; Brown et al., PNAS 2010)
  - A vacuum of about 75-85 kPa below atmospheric works well: Brown et al. used about 75 kPa (roughly a quarter of an atmosphere left in the bag, 'easily reachable with a small vacuum pump'); Amend et al. counted the grip complete at -85 kPa, reached in 1.1 s. Holding force is roughly proportional to the vacuum level (Brown et al. 2010; Amend et al. 2012)
  - The bag must reach round the object: gripping starts only when the bag touches the object at more than about 45° (contact angle above π/4, set by rubber's friction coefficient of about 1), and holding force rises sharply above that; wrapping past half-way (90°) adds interlocking (Brown et al. 2010)
  - Size limit: without a positive-pressure reset, success falls off sharply once the object's radius reaches about 65 % of the gripper's radius (Amend et al. 2012); hemispheres larger than about half the gripper and thin disks lying flat couldn't be picked up (Brown et al. 2010)
  - Smooth, airtight object surfaces are held about 10 times harder than porous or powdered ones, because the rubber seals and adds suction (Brown et al. 2010, Fig. 2)
  - Reset between grips: without kneading the bag back to an even shape or blowing air in, the grip on the next object gets worse quickly; a 0.1 s burst of compressed air resets it and improved reliability by up to 85 % and position-error tolerance by up to 25 % (Amend et al. 2012)
  - Grain choice: finer grains conform better, but very fine powders stick and flow poorly, and pumping time rises because air flow through the grains scales with grain diameter squared (Brown et al. 2010); coffee is light but jams well, while sand jams better but is too heavy (Cornell Chronicle 2010). Grain shape and size strongly affect grip and there is no single best shape (Howard et al. 2021)

### When to use it

- **everyday_examples**: 
  - A vacuum-packed brick of coffee, which is rock-hard until the pack is opened and then pours like a liquid (Cornell Chronicle; Make:)
  - A bean bag, which moulds to whatever presses on it (the gripper is often called a 'bean bag' gripper) (Hackaday)
  - Factory robot grippers sold as VERSABALL (brand) (New Atlas)
- **when_to_use**: Use it when a robot must pick up many different, unfamiliar or oddly shaped rigid objects without sensors, grasp planning or precise positioning; for fragile things such as raw eggs; to pick up several objects at once while keeping their spacing; or when you want a cheap, soft, easily built gripper for a hobby robot arm (Brown et al. 2010; Amend et al. 2012). Its sealed construction also suits wet or messy work and is easy to clean (Amend et al. 2012).
- **when_not_to_use**: Avoid it for thin flat objects lying flat, very soft objects such as cotton balls, and objects too big for the bag to wrap round (Brown et al. 2010); for small or thin parts such as screws, nuts or micro SD cards, which a simple gripper may fail to grip (Schertz); and for heavier smooth objects with no edges to grip (Hackaday, James Bruton's build). Use a vacuum gripper for flat smooth parts, mechanical jaws for precise placement or heavy loads, and fin-ray fingers when you need a soft grip without a pump. It is also slower than a suction cup, taking about a second to jam (Amend et al. 2012).
- **environment_limits**: Jamming itself doesn't depend on temperature, so the bag material sets the limits (Amend et al. 2012): a natural-rubber (latex) bag is rated roughly -25 to +80 °C long-term and has poor ozone and oil resistance, while silicone rubber manages roughly -30 to +180 °C (Schmalz material overview, for rubber suction cups). The airtight bag suits wet or dirty environments (Amend et al. 2012). *(unverified parts omitted)*
- **safety_notes**: Latex balloons can trigger allergic reactions in people with latex allergy (Wikipedia 'Latex allergy'); use a silicone skin instead. A positive-pressure blast can shoot objects across the room (Make:), about 0.6 m in tests (Amend et al. 2012), so aim it safely. Treat compressed-air lines with care. Otherwise it is gentle: its soft state between grips may make it safer near people than hard grippers (Amend et al. 2012).
- **common_failures**: Grains sucked into the pump: fit a filter at the bag outlet (Make:; Amend et al. 2012). Leaks at the balloon neck or hose: pinch the balloon between a base and collar, or seal with tape, PTFE tape and silicone (Amend et al. 2012; Hackaday.io, Team Automata; Schertz). Weak grip after a few picks: the bag isn't reset, so knead it or blow air in between grips (Amend et al. 2012). Weak grip because the bag was not pressed far enough round the object: press harder or partly inflate the bag first so the grains flow (Make:; Amend et al. 2012). Small, thin or smooth heavy objects slip out (Schertz; Hackaday). Bag overfilled and stretched, so it can't mould round objects (Brown et al. 2010). Punctured or worn latex skin (Amend et al. *(unverified parts omitted)*
- **related**: 
  - Vacuum (suction) gripper: a rubber cup that holds smooth, flat objects by suction; faster, but needs a surface it can seal on
  - Fin-ray gripper: soft printed fingers that curl round objects without any pump
  - Pin-array (bed-of-nails) gripper: many sliding pins that passively conform to an object's shape (Amend et al. 2012)
  - Underactuated finger grippers: jointed fingers driven by few motors that also wrap round objects (Amend et al. 2012)
  - Suction cup (passive): holds smooth surfaces without power but can't grip odd shapes
  - Posable segmented arm (gooseneck): also stays in any shape, but by friction in its joints rather than by vacuum jamming

### Pictures, videos and models

- **links**: 
  - [Robotic grippers based on granular jamming (CornellCCSL, YouTube)](https://www.youtube.com/watch?v=ZKOI_lVDPpw): Video introducing the coffee-balloon gripper picking up a range of objects (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Universal Gripper: Grabbing, Drawing, & Pouring (The University of Chicago, YouTube)](https://www.youtube.com/watch?v=0d4f8fEysf8): Video of the jamming gripper holding a pen to draw and pouring water from a glass (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Universal Robot Gripper (Jason Poel Smith, Make:)](https://makezine.com/projects/universal-robot-gripper/): Step-by-step photos of building a balloon, coffee and funnel gripper and using it *(licence: link only (not shown))*
  - [Universal Robotic Gripper based on the Jamming of Granular Material (Brown et al., arXiv version of the PNAS 2010 paper)](https://arxiv.org/pdf/1009.4444): Photos of the gripper on a robot arm, a schematic of the gripping sequence, and graphs of holding force against contact angle and vacuum *(licence: link only (arXiv))*
  - [Modular Universal Jamming Gripper (Arizona Makers Collective, Hackaday.io)](https://hackaday.io/project/158551-modular-universal-jamming-gripper): Photo gallery, parts list and build logs of a 3D-printed jamming gripper with a pump-and-valve control box *(licence: link only)*
- **diagram_idea**: Three side-view frames: a soft coffee-filled balloon above a toy; the balloon pressed down and flowing round the toy; then the air pumped out with arrows squeezing the bag, grains drawn packed tight, and the toy lifted, plus a fourth frame with air blowing back in and the toy dropping.
- **sources**: 
  - https://arxiv.org/pdf/1009.4444
  - https://jfi.uchicago.edu/~jaeger/group/Soft_Robotics/Details/Entries/2012/2/18_Universal_Jamming_Gripper_-_Gen_II.html
  - https://jfi.uchicago.edu/~jaeger/group/JaegerGroupPapers/granular/TRO2171093.pdf
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1109/TRO.2011.2171093?fields=title,abstract,authors,year,venue,openAccessPdf
  - https://www.creativemachineslab.com/jamming-gripper.html
  - https://news.cornell.edu/stories/2010/10/researchers-develop-universal-robotic-gripper
  - https://makezine.com/projects/universal-robot-gripper/
  - https://hackaday.com/2012/06/15/jamming-gripper-thats-super-easy-to-build/
  - https://hackaday.com/2021/05/04/robotic-gripper-from-a-squishy-ball/
  - https://hackaday.io/project/158551-modular-universal-jamming-gripper
  - https://hackaday.io/project/158551/instructions
  - https://raw.githubusercontent.com/Team-Automata/Modular-Universal-Jamming-Gripper/master/README.md
  - https://joshschertz.com/2017/09/01/Jamming-Gripper/
  - https://newatlas.com/versaball-robotic-gripper/30442/
  - https://arxiv.org/pdf/2104.04171
  - https://api.crossref.org/works?query.bibliographic=Universal+Jamming+Gripper+Experimental+Analysis+on+Envelope+and+Granular+Materials&rows=2
  - https://en.wikipedia.org/wiki/Jamming_(physics)
  - https://en.wikipedia.org/wiki/Latex_allergy
  - https://media.schmalz.com/MAM_Library/Dokumente/Auswahlhilfen/VA/272fbdc64cc1_Document_Selection_Guidelines_Material_Suction_Cup_EN_2025.pdf
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://www.youtube.com/watch?v=ZKOI_lVDPpw
  - https://www.youtube.com/watch?v=0d4f8fEysf8

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, make_it_yourself

## 207 Electromagnetic clutch

*powered & active connectors.* A coil that pulls two plates together to connect a drive when powered and lets them separate when switched off

*Not researched yet.*

## 208 Thermal actuators (bimetal strip, wax motor)

*powered & active connectors.* Parts that move when heated, a strip of two bonded metals that bends or a capsule of wax that expands, used to trip or open a latch

*Not researched yet.*

## 209 Burn-wire and fusible-link release (one-shot thermal release)

*powered & active connectors.* A cord or low-melting link that holds something until an electric current or heat melts or cuts it, as in satellite and balloon releases

*Not researched yet.*

