# Run 2 review notes (things to fix before entries are published)

Collected from the research agents' hand-back reports during `/research-deep`. None of these
break validation; they are clean-ups for the report step or Phase 1.

**Needs confirming (R25, 2026-10-06):** every point here that is not marked as settled counts as
*needs confirming* (⚑). When the entries become pages (P5), each entry's open points are copied onto
its page with the ⚑ mark, so readers can help settle them. When a point is settled, say how in its
bullet, beginning that part with **settled:** (or **correction:** for a fix); `tools/make_entries.py`
then leaves it off the entry's page. The full list of what needs confirming is in
`research/needs-confirming.md`.

## Sources and links
- **Books read from unofficial PDF copies** (listed in `sources`, not in `links`): *Machinery's
  Handbook* 27th ed. from theswissbay.ch (*Ratchet and pawl*, *Linear ratchet*, pp. 2088–2089)
  and Sclater's *Mechanisms and Mechanical Devices Sourcebook* 4th ed. from rexresearch1.com
  (*Over-centre linkage*, *Toggle clamp*, *Draw latch*, pp. 106–107 and 230–233). When
  publishing, cite the books by edition and page and drop these URLs (run 1's rule: don't link
  unauthorised copies). From batch 3 on, `research_rules` tells agents not to use such copies.
- **Thang's mechanism index PDFs** are cited from copies on a Stanford course site
  (`cs448m.github.io/lectures/machines/doc/*.pdf`). Thang gives them away free, but when
  publishing prefer his own download link (run 1: DT Online's index page and the MediaFire
  zip) or the individual YouTube videos.
- **Paper read from a course-site copy**: Pratt & Williamson, *Series Elastic Actuators* (IROS
  1995) was read from fab.cba.mit.edu (*Series-elastic coupling*). Cite it by DOI
  10.1109/IROS.1995.525827 when publishing.
- **Parker O-Ring Handbook (ORD 5700A)** was read from a University of Arizona course-site copy
  (*O-ring seal*). It is a free manufacturer handbook, but cite it by name and edition (or
  parker.com) when publishing.
- **Printables models cited through the API**: printables.com model pages return 403 to the
  agents, so they read models through `https://api.printables.com/graphql/`. Where no page URL
  was confirmed, `make_it_yourself` entries point at the API URL with the model ID in the title
  (*Friction slip clutch*, *Shear-pin coupling*, *Torque-limiting gear*). Replace each with the
  model's page URL (`printables.com/model/<id>-<slug>`) after opening it in a browser.
- **Printables page URLs built from API data**: some agents (e.g. batch 2, *Eccentric cam
  lever*, *Bistable compliant mechanism*, *Push-push latch*) wrote model page URLs as
  `printables.com/model/<id>-<slug>` from the ID and slug the API returned, without opening the
  page (it returns 403). Others used only URLs seen in search results. Before publishing, open
  every `printables.com/model/` link in a browser and fix any that don't resolve.
- **YouTube videos** were confirmed by title and channel through YouTube's oEmbed service, not watched.
- **Firgelli (firgelliauto.com)** is a vendor explainer blog; agents labelled any number taken
  from it as secondary. Check those numbers before they go into `rules_of_thumb`.
- **Manufacturer data sheets read from distributor sites** (e.g. Titebond polyurethane TDS on
  ardec.ca, DOWSIL 732 on krayden.com, Dow Corning sealant manual on fleetwoodusa.net, Loctite
  guides on ellsworth.com, Blum spec sheet on cabinotch.us, 3M Command sheet on rs-online.com).
  They are the maker's own documents; when publishing, cite them by maker and document name.
- **Early drafts in git history**: the commit script commits any file that validates, so a few
  entries were first committed while their agent was still refining them (e.g. *Rotary latch*,
  *Tamper-evident bridge*, *Dampers*). The latest commit of each file is the final version.

## Content corrections found by the agents
- *Constant-force spring*: tape measures, dog leads, seat belts and badge reels use spiral **power**
  springs (Lee Spring), not constant-force springs. Outline description corrected 2026-09-27;
  the *Linear ratchet* description was corrected at the same time.
- *Planetary gear set*: HowToMechatronics states "20 N at 10 cm = 200 Nm"; it is 2 N·m
  (200 N·cm). The entry uses the corrected value.
- **WebFetch summaries can invent numbers** (found in batch 6: the summary of the Roozing cycloidal
  paper gave a wrong ratio and made-up figures; the agent used the PDF text instead). From batch 7
  on, `research_rules` requires checking numbers against raw page text. Before publishing,
  spot-check the `rules_of_thumb` numbers in batches 1-6 (items 1-108) against their sources.
- *Compound planetary gearbox*: output direction conflict: the COMPAct formula says the output
  turns the same way as the motor when the output ring has more teeth; the CoolEpicyclicGearing
  README says the opposite. Flagged in `input_output`.
- Conflicting figures recorded side by side (check which to lead with): cycloidal efficiency
  (Wikipedia 93% vs KHK 98%), helix angle ranges (RoyMech 6-20°, others 15-45°), helical
  efficiency (KHK 98-99.5% vs 90-99.5%), Oldham misalignment angle (0.5° vs 3-5°).
- *Series-elastic coupling*: the OpenSEA paper's spring table doesn't add up (0.015 N·m/° ×
  ±20° = 0.3 N·m, not the ±3 N·m it states). The entry quotes ±3 N·m in `load` only; check it.
- *Ball-detent torque limiter* quotes Firgelli's detent formula (release force = spring force
  × tan(α/2 + φ)). The *Ball detent* entry found this conflicts with S&W Manufacturing's formula
  (side force = end force / tan(half the countersink angle)), which matches the physics. Re-check
  and replace with the S&W form.
- *Linear ratchet*: tie-down ratchet straps wind webbing on a spool with a rotary ratchet,
  so they are not linear ratchets; most quick-grip bar clamps have no teeth and use a tilting
  binding plate (see *Binding-plate lock*). The entry explains this; the outline description
  should be updated to match.
- *Friction slip clutch*: a motorcycle "slipper clutch" is a back-torque limiter, not the same
  as the RC-car slipper clutch. The entry says so.
- *Wrap-spring clutch*: the roller-blind chain clutch is really a two-way anti-back-drive
  clutch; linked from *Bidirectional anti-back-drive clutch*.
- *Self-tapping screw into plastic*: `off_the_shelf_parts` is in the entry's `uncertain` list but
  has no `[uncertain]` marker, so the default report shows it in full (only `--strict` drops it).
  Check its brand and standard names (EJOT DELTA PT, Plastite, Taptite, DIN 7981) before publishing.
- *Anti-twister mechanism*: `materials` is in the entry's `uncertain` list but has no `[uncertain]`
  marker, so the default report shows it in full. Check its materials list before publishing.
- *Scotch yoke* and *Slider-crank*: their `uncertain` lists missed some marked fields; fixed on
  2026-09-29 (lists only; no text changed).
- More conflicts recorded side by side in tier 2 entries (pick one to lead with when publishing):
  spline tooth strength (RoyMech: involute stronger; McMaster: straight-sided carries more
  torque); lantern gear "must be driven, not drive" (Wikipedia vs a forum "likely a myth");
  minimum sheet-metal tab width (Fictiv 1-1.5 × thickness vs Protolabs 2 × or 3.2 mm);
  plumbing olive tightening (½, 1 or 1-1¼ turns); liquid hide glue shelf life (24 months vs
  "suspect after six months"); freezing PVA (ruins it vs freeze-thaw stable); fresh silicone on
  cured silicone (Dow: sticks; Sashco: nothing sticks).
- Source errors spotted by agents (the entries use the corrected value or quote both):
  Böllhoff's metric rivet-nut torque table is headed "N" but the values are N·m; Henkel gives two
  different torque figures for Loctite 243 on M10; the Loctite plastics guide's "0.30 in
  (0.76 mm)" cure depth is probably a typo; the DAP contact-cement sheet gives both "up to
  20 minutes" and "60-70 minutes" drying; Premium Ropes' 670 kg Line-Lok breaking strength looks
  like a data error (left out); the Smartlet blog credits spring-bar patent US 2,308,505 to the
  wrong inventor (Google Patents: Geoffrion, 1941).
- Naming clashes flagged in entries: a car's "clockspring" is a spiral cable, not a power spring;
  McMaster's "locking gas springs" latch only at full extension; PC water-cooling "compression
  fittings" have no ferrule; "magnetic brake" can mean an eddy-current brake or a friction
  track brake; RC-car "CVDs" are not true constant-velocity joints.
- Tier 3 baselines: split spring lock washers don't lock (NASA RP-1228 "useless for locking";
  Bolt Science: they flatten at 10-20% of preload), and toothed washers on aluminium are
  disputed (Wikipedia/Carroll Smith vs NASA). Retaining-ring reuse conflicts (Wikipedia "one
  time use only" vs Smalley "can often be reused"). Minimum pinion teeth: 17 (no undercut at
  20°), 14 in practice, 13 for printed gears. Hand-tightening torque for thumbscrews and knobs
  comes only from a retailer blog and is marked [uncertain]. Machine Design's bent-tab
  thickness "0.12 and 0.8 in" is probably a typo for 0.012-0.080 in.
- *Silicone and MS-polymer sealants*: the EU classification of MEKO (given off by oxime-cure
  silicones) as a carcinogen came only from search summaries and is marked [uncertain].

## Environment notes
- Each research agent has its own 200-search WebSearch limit. Agents with 3 items often reach
  it near the end and finish with WebFetch; this is expected and doesn't need a setting change.
- Blocked or unreadable for agents: Printables and MakerWorld pages, Thingiverse (JavaScript),
  Cults3D, MyMiniFactory, BYU CMR site, ResearchGate, ScienceDirect, ASME, Eng-Tips, github.com
  HTML pages (raw files work), some forums.

## New family: hydraulics, pneumatics & vacuum (added 2026-09-30)
- **Safety box for the family page** (suggested by the search agent; add when publishing): stored
  air can burst tanks and whip hoses; never point compressed air at skin (FRC Zero: "even air at a
  pressure of 15 psig can cause serious injury"); hydraulic leaks can inject oil (HSE); trapped air
  can move a stopped cylinder (HSE HSG39); valves that shut fast cause water hammer; vacuum is the
  safest option. Never hold stored pressure in a 3D-printed part.
- **`job` field:** none of the fixed jobs says "move or hold using air or liquid pressure, or
  suction". The owner chose not to add one for now (existing jobs fit and older entries stay
  consistent); revisit in run 3 when the flow-chart questions are written.
- **Thang PDFs** for this family were read from the Stanford course-site copies again; prefer his
  own download link when publishing.

## Wider scope, five new families (added 2026-10-03, R22, items 324-409)
- **Notes additions to researched entries:** about 70, listed in section 7 of
  `scope-search-2026-10-03-combined.md`. Applied on 2026-10-06 (R23), together with the
  research agents' cross-links: see `update-pass-2026-10-06.md` and the update-pass section
  below.
- **`job` field:** kept at 15 options. Electrical entries use the existing ones (usually join
  and hold); the finder adds a first-question answer, "Connect wires or power", routed by family.
  Re-test run 3's finder tree (`research/finder-test/tree.py`) once the new entries exist.
- **Safety boxes for the new family pages** (add when publishing): electrical, no mains
  instructions and follow local law; welding, brazing and soldering, burns, fire, fumes and arc
  light; knots and sewn joints, never trust a home-made knot, splice or seam to hold a person.
- **Conflicting figures the searches found** (record side by side in the entries): knot
  strength (40-80% of rope strength, a 20-40% loss, or "no more than 50%" of rated strength);
  wire-rope clip counts and efficiency (Crosby against WorkSafeNB); webbing stitch patterns
  (FAA, Practical Sailor and Ripstop by the Roll differ).
- **Blocked sites during the heat and pipe search:** All3DP, copper.org, Polymaker, hackster.io, Instructables
  step text and DOAJ; nothing recorded depends on them.

## Items 324-409 (researched 2026-10-05)
Collected from the agents' hand-back reports for the items added with the wider scope (R22).

### Sources and links
- **Read from copies** (cite the original when publishing): Lincoln Electric's welding safety
  pages from a REDI-MIG 455 manual hosted by Linde (static.prd.echannel.linde.com), because
  Lincoln's own site was blocked (*Welded metal joint*).
- *Pogo pin*: the Harwin leaf-spring contact figures (10,000 cycles) were checked only through a WebFetch quote of the page, not the raw page text.
- *Soldered wire joint*: the NASA-STD-8739.4A PDF is a US government publication (generally public domain in the US); its licence is marked [uncertain] in `links`. *Basic knots*: Ian's Shoelace Site shows curl a captcha, so it was read through WebFetch and used for one qualitative point only.
- Licences not stated: Adafruit Learning System guides, the Yale OpenHand T42 fabrication PDF (marked [uncertain]). gm0 is CC BY-NC 2.0 (link, don't copy). (An agent reported that the Hackaday heat-staking article has no 'fumes' quote. That is right, but *Heat staking* takes its 'nasty fumes' quote from Jeff Epler's blog post, emergent.unpythonic.net/01612362040, which does contain it: checked 2026-10-05, nothing to fix.)
- *Expanding internal grip*: schunk.com failed TLS with curl, so it was read through WebFetch; gripper figures come from SCHUNK's CGP data sheet PDF. YouTube videos in batch 1 entries were checked by title and channel through oEmbed only.
- *Cable through a hinge*: using the BOSL2 `knuckle_hinge` module with an enlarged pin hole for a metal tube is the agent's own suggestion, and the entry says so; no printable hinge with cable routing was found.
- Data sheets read from distributor copies (cite by maker and document when publishing): Pomona 3750 and a Mueller clip sheet (rs-online.com), Mueller sheets (farnell.com, rapidonline.com, testequity.com), Cal Test *Banana Plugs 101* and Ideal Wing-Nut instructions (testequity.com), Kitronik thread (wiltronics.com.au), Ontario ESA aluminium wiring flash (powercheck.ca).
- TE solder-sleeve documents read from distributor copies: RPIP-824-00 (electrokit.com), the Raychem catalogue (docs.rs-online.com), RPIP-688-00 (static.chipdip.ru).
- Read only through WebFetch (numbers rest on its verbatim quotes, not raw text): TE's heat-shrink sizing page (403 to curl), AutomationDirect's adhesive-lined page (redirect loop), the Automation World and PHPI tool pages. The AMASS XT60 data sheet was read from a copy on a CMU course site (mrsdprojects.ri.cmu.edu).
- Read through WebFetch with a verbatim-quote prompt because curl was blocked: cpsc.gov (its 16 CFR 1263 FAQ wording also matched the search snippet) and ripstopbytheroll.com (Cloudflare).
- Manufacturer documents hosted by sellers: Péguet quick-link instructions (safetyliftingear.com), Petzl maillon notice (a Shopify CDN), DIN 580 eye-bolt instructions (berger-tools.co.uk); Crosby shackle tables from a CUNY course handout.
- *Flat flexible cable*: Hirose FH12 data sheet from a distributor copy (datasheet.trustcompo.com); Molex Premo-Flex data sheet from a user-uploaded copy on cdn.hackaday.io; Raspberry Pi camera docs read through WebFetch (curl blocked by Cloudflare); iFixit's licence couldn't be loaded, so it is 'link only'. *Conductive tape*: guitar-shielding facts come from a vendor page (guitaranatomy.com) because StewMac and Madinter were blocked.
- Manufacturer documents hosted elsewhere: a worm-gear clamp install guide (Home Depot), a Freightliner service bulletin (NHTSA).
- McMaster-Carr blocks downloads; *Push-on edge trim* takes only category names from a WebFetch summary, and its source line says so.
- *Nails, brads and tacks*: the USDA *Wood Handbook* (2021) chapter 8 is cited from https://research.fs.usda.gov/download/treesearch/62253.pdf because the usual fpl.fs.usda.gov PDF returned 502.
- Read from copies hosted elsewhere (cite the maker's document when publishing): the Gates PowerGrip GT2 manual (static.chipdip.ru; gates.com blocked), Garmin mount instructions (adorama.com), a Honda chain-adjustment page (bike-parts.fr), a Xiaomi scooter manual (wheelyshop.se). CPSC recall pages were read through WebFetch with exact quotes and no numbers taken (*Clamp-on accessory mount*).
- *Spot weld*: Miller's hobby spot-welder manual (OM-716) was read from a copy hosted by George Fox University's makerspace.

### Conflicting figures and content points
- *Battery holder and battery contacts*: the "up to about 3 A" rating in `load` comes from forum
  users (budgetlightforum), not from tests or a data sheet; check it against a holder maker's data sheet.
- *Pogo pin*: the current rating of small hobby pogo pins is unverified (marked [uncertain]); Mill-Max's figures (6.5-9 A for ordinary pins, 13 A for the largest) are from data sheets.
- *Screw-in threaded insert*: helical insert lengths (1d, 1.5d, 2d) are left out because Böllhoff's HELICOIL PDFs were blocked. CNC Kitchen found a helical insert in PETG held no better than a plain screw (120 kg against 118 kg); worth a note in the published entry.
- *Soldered wire joint*: are soldered splices allowed in mains wiring? Wikipedia (*Rat-tail splice*) says most or all North American codes forbid tape-only and soldered splices at 110 V and above; OSHA 1910.303(c)(3)(i) allows them if the wires are first joined securely without solder. Both are in `safety_notes` with 'check your local code'.
- *Soldered wire joint*: tinning wire ends for screw terminals. SparkFun suggests it; Wikipedia (*Screw terminal*) warns that solder creeps under pressure and the joint works loose. The entry follows Wikipedia and points to ferrules.
- *Basic knots*: knot strength recorded side by side (Wikipedia *Knot* 40-80% kept; *Rope splicing* a 20-40% loss; Animated Knots 'no more than 50%'; Petrulis & Petrulyte 2012: square knot 37-49% in flax yarn, 43-47% in cited rope tests; Wikipedia's overhand infobox 50%, unsourced). The reef knot has two ABOK numbers (#1204 and #1402); both are in `aliases`.
- *Wood screw*: two worked examples are labelled 'calculated here' (about 2.8 kN pull-out for a #8 screw; about 9 N·m stripping torque in chipboard). `scope-search-2026-10-03-hardware.md` says the USDA *Wood Handbook* covers wood-to-steel self-drilling screws; it mentions them but gives no figures, so none were added.
- *Printing onto fabric*: when to pause for the mesh (after layer 1, layer 2, 3 layers, layers 3-4 or about 2 mm) and whether to stretch the mesh tight (most sources) or clip it flat (the method in *Origami mechanisms*) differ between sources; all are recorded. Siraya Tech's claim that the bond survives washing is a filament maker's own claim. No source measured the fabric-to-plastic bond, a sewn-on part or a knot pulled through a printed hole.
- *Stopper knots and cord-end anchors*: knot strength recorded side by side (Animated Knots 'at most 50%'; Yachting Monthly 2015 tests at Marlow Ropes, an overhand knot cut Dyneema and polyester braid to 35%). The figure-eight has three ABOK numbers in Wikipedia (#570, #420, #520).
- *Expanding internal grip*: Birla Precision gives the sleeve expansion range as '0.8 mm (0.32")'; the inch figure looks like a misprint for 0.032 in, and the entry says so. Some safety points (parts thrown from a spinning mandrel) are reasoning without a source and marked [uncertain].
- *Printed chainmail*: Space.com says JPL's 2017 'space fabric' prototype was printed in plastic; JPL's own release describes metal. The entry follows JPL. Choking risk from broken tiles is unsourced ([uncertain]).
- *Strut hub*: where to drill flattened conduit struts differs (Domerama 3/4 in from the end, Mike Tyka about 1-1/4 in); both recorded. Building or playground rules for climbable domes are unsourced ([uncertain]).
- *Ball caster*: maximum spacing of ball transfer units under a table differs (Ganter: smallest edge length divided by 2.5; HPC: shortest dimension divided by 3.5); both recorded.
- *Locking adjustment screws*: the 3doptix catalogue page gives the Thorlabs KM100's 1/4-80 screw as '80 µm per revolution', which looks wrong (one turn of a 1/4-80 thread is about 0.32 mm); the figure was not used.
- *Twist-on wire connector*: Wikipedia says these are 'not certified in most European countries', citing forum pages; an IEC standard for them exists (IEC 60998-2-4: 0.5-16 mm² copper, up to 1000 V AC). The entry gives both and says rules differ by country. The 'up to about 30 A' lead-in in `load` is [uncertain], because the connector is rated by wire size, not current.
- *Conductive thread*: resistance per length recorded side by side (Adafruit stainless 16 and 10 Ω/ft; SparkFun 28 Ω/ft; Kitronik silver-plated 40-160 Ω/m, over 280 Ω after washing; Madeira HC12 under 100 Ω/m). No ABOK number was found for the quilter's knot. Where LilyPad began differs (Wikipedia: MIT Media Lab; SparkFun: Leah Buechley's PhD at CU Boulder); left out.
- *Binding post and banana plug*: Wikipedia's claim that EU amplifiers ship with plastic plugs in their banana sockets is 'citation needed' there, so it is marked [uncertain].
- *Crimp terminals*: the wire-size colour code differs (Wikipedia *Crimp* and the Grote catalogue: red 22-18 AWG; Wikipedia *FASTON*: red 22-16 AWG; Wikipedia *Electrical connector* gives the metric DIN 46245 code with yellow as 'over 4 to 6 mm²', which looks garbled). Toothed washers under earth terminals: a Hammond ground kit uses an internal lock washer, but GM TechLink says never to use star washers on vehicle grounds. Both sides are recorded.
- *Tensegrity*: one maker (GadgetBuilder) says the popular floating table 'isn't true tensegrity' because its arms bend; the entry says so. *Wire-to-board plug connectors*: no mating-cycle figure for small crimp housings could be opened (`reuse_cycles` is [uncertain]).
- *Friction-welded plastic*: `scope-search-2026-10-03-heat-and-pipe.md` said friction-stir welds of PLA prints reached 106-124% of the base print's strength (Koçar et al., Polymers 2024). That compares the weld with a 20%-infill print; the best weld (17.83 MPa) is about a third of a solid PLA+ print (42-53 MPa). Both figures are in the entry, and the search file now carries a correction. Hackaday 2018's cut-through test showed the PLA glue-gun 'weld' fuses only on the surface; the entry uses it to explain cold welds.
- *Melted plastic weld*: 'keep a separate iron tip for plastic' is from makers on Hackaday; the reason (residue spoils an electronics tip) is [uncertain], no maker statement found. *Heat-sealed seam*: 'weaker in peel than in shear' is [uncertain] (the patent PDF stating it had no extractable text).
- *Solder sleeve*: sellers' operating ratings for Sn42Bi58 sleeves disagree (Markertek 125 °C, Quick Cable 110 °C); both recorded. TE's CWT series uses a cadmium-bearing solder (Sn50Pb32Cd18), worth a safety line when publishing. Reports of sleeves that looked good but had not bonded (an iATN teardown, a Hobby-Machinist thread) are labelled as forum and technician reports. No one publishes a current rating for the sleeve itself; its 'up to about 30 A' band, like that of *Standard plug-and-socket connector*, is the agent's judgement, explained in the text.
- *Insulation-displacement connector*: Wikipedia shows certified 230 V Australian outlets with IDC terminals, against the outline's 'signal only'; the entry keeps 'up to about 3 A, extra-low voltage only' and names the certified mains exception in `safety_notes`. Punch-down tools: Wikipedia says a screwdriver springs the blades apart; a DigiKey forum post says one 'can work in a pinch'. *Standard plug-and-socket connector* also lists seals & pass-throughs in `other_families` (sealed panel connectors pass through walls); the outline asked only for quick-release & tool-free.
- *Crimped butt splice*: over-crimping (SparkFun: 'almost impossible to over crimp'; Wikipedia: the squeeze must be 'not too light, nor too strong'), both recorded; whether to add solder over a crimp (Hackaday commenters disagree); twisting wires before crimping (Gardner Bender: join them first; NASA: insert them parallel, not twisted), only NASA's rule is in the entry. No data found on aluminium-rated butt splices or splices with a different wire size at each end.
- *Spring-clamp wire connector*: no pull-out figure and no rated number of lever open/close cycles could be found ([uncertain]).
- *Wire-end ferrule*: two colour codes recorded side by side from Weidmüller's sheet (DIN: 0.5 mm² white, 0.75 grey, 1.0 red, 1.5 black; Weidmüller's own: 0.5 orange, 0.75 white, 1.0 yellow, 1.5 red; only 2.5 mm² blue and 4 mm² grey agree). Hackaday's claim that CE-marked equipment must use ferrules was not checked against the standards ([uncertain]).
- *High-current battery plug*: current ratings differ (AMASS via Holybro: XT60 30 A continuous, 60 A burst; Oscar Liang 2014: XT60 60 A, bullets 2 mm 20 A to 8 mm 200 A; Horizon Hobby: EC3 60 A continuous; Wikipedia: Deans 40 A (70 A pulse), Tamiya rated 20 A, about 15 A in use). Recorded side by side; design to the lower figure.
- *Wire-rope terminations*: clip count and spacing recorded side by side (Crosby sheet 56: 2 clips up to 7/16 in rope, 80%/90% efficiency; WorkSafeNB: 'at least three clips', 'up to 85%', though its own reprinted table lists 2; OSHA 1926.251 Table H-2 from 1/2 in rope: 3 drop-forged or 4 other clips, about 6 rope diameters apart; Wikipedia its own range). No efficiency for small crimped sleeves and no reuse limit for clips were found ([uncertain]).
- *Load-bearing stitch patterns*: test results recorded side by side (FAA *Parachute Rigger Handbook* p. 2-25: W-W stronger than box-X; Fire Engineering 1984: double W slightly stronger, box-X adequate and better for sideways loads; Sailrite 2019: 'no clear winning stitch pattern'; Practical Sailor: hand stitching levels off at 69%, more rows 83%, sandwiched insert 100%, commercial bar tacks about 90%). Stitches per inch also differ (4-7 Fire Engineering, 8-12 Sailrite, 7-11 FAA). Sailrite shows sewn loops for towing and lifting dinghies despite its own disclaimer.
- *Tamper-resistant fasteners*: Wikipedia *Torx* says a small flat screwdriver can turn a pin-in Torx between its lobes; *List of screw drives* says the pin prevents this. Both recorded. No source compares a security screw's strength with a plain screw's ([uncertain]).
- *Eye bolts, screw eyes and hooks*: angled-pull ratings differ (Crosby: 30% of the rating at 45°; DIN 580 instructions from Otto Ganter: M12 3,400 N in line, 2,400 N in a two-leg lift up to 45°, 1,700 N sideways up to 45°); same thread, different ratings (Crosby M12 1,000 kg, DIN 580 M12 about 340 kg); thread depth (DIN 580: 1.5× diameter in steel, 2× aluminium, 2.5× weak light metals; Crosby drawings at least 2×). All recorded side by side.
- *Shackle and quick link*: Crosby's side-load table (70% at 45°, 50% at 90°) comes from 2013 catalogue pages in a CUNY handout; the 2023 sheet points to a Table 1 not in that PDF. Soft shackle test page (Balance Community 2014): heading 136% of line strength, table 139.63%. *Staples*: the per-leg pull-out example is the agent's own calculation ([uncertain]); the Wood Handbook says its nail equations are used for staples but not checked by tests.
- *Flat flexible cable*: Molex flex life differs between its test table (2.5 million / 100,000 / 10,000 cycles by cable thickness) and its feature list (900,000 vs 6,000); both recorded. Hirose FH12 current: the data sheet read says 0.4 A per contact; a Mouser search summary said 0.5 A; only 0.4 A is cited. *Conductive tape*: no maker publishes a current rating, so its 'up to about 3 A' lead-in is [uncertain]; copper tape's 0.08 Ω/m is labelled calculated.
- *Wire wrap*: recorded side by side: turns (standards 7 plus ½ or ¾ insulated for 30 AWG; Hackaday writers 3-6); strip force (MIL-STD-1130C 2.0 lb, about 8.9 N; ECSS-Q-ST-70-30C 20 N); re-using unwrapped wire (MIL forbids; Nuts and Volts re-uses it); adding solder (SparkFun and Nuts and Volts suggest it; ECSS forbids it). One Kynar wire data sheet says both '300 V' and 'no voltage rated'.
- *Hose clamp*: Wikipedia says T-bolt clamps suit high-pressure turbo hoses; AMS Performance says they distort thin aluminium pipe, where a worm clamp is better. *Drive-in fixing pins*: pin diameter (SPIROL at most 1/3 of the shaft; Bharatskills about 1/6); punches (Wikipedia: never a standard punch on a roll pin; SPIROL: ball-end punches suit slotted, not coiled pins); printed holes (Creative3DP undersize, Forerunner 3D 'a bit big'); lead-ins (Forerunner chamfers, SPIROL no countersinks). Drift bolts are not covered (the Wood Handbook PDF didn't load).
- **Cross-links for the update pass** (agents' suggestions): *Hose barb* → *Hose clamp*; *Shaft-to-hub joints*, *Locating pins* and *Press fit* → *Drive-in fixing pins* (*Locating pins* already names a 'Taper pin and spring pin' entry in `related`); *Wire-to-board plug connectors* ↔ *Wire wrap* (both use 0.64 mm square pins); *Levelling foot*, *Slotted adjustment with a jacking screw* and *Castor* ↔ *Locking adjustment screws* and *Ball caster*; *Blind threaded fixings* (item 222) names 'Hollow-wall anchors (molly bolt, toggle bolt)' in `related`, now *Hollow-wall anchors* (367); *Cable gland* → grommet edging in *Push-on edge trim* (368).
- *Hollow-wall anchors*: makers' recommended loads (fischer, safety factor included: in 12.5 mm board about 0.08 kN self-drilling, 0.15-0.18 kN spring toggle, 0.20 kN molly) sit beside breaking loads (TOGGLER, which says use a quarter); Wikipedia's *Drywall anchor* load table cites no test source ([uncertain]). Where a gravity toggle belongs differs (Ramset: walls; Indexfix: ceilings). *Wall plug*: 'Rawlbolt was a sleeve anchor' is [uncertain]; plug colour codes vary by brand.
- *Push-on edge trim*: mitring corners with tin snips (PAR Group: yes; Trim-Lok: 'not possible'), both recorded. No pull-off force or refit count found ([uncertain]); no openly licensed edge-trim images on Commons.
- *Metal brackets and plates* (369): written seconds before the usage limit stopped its agent on 2026-10-05, so there is no hand-back report and nothing was flagged; the file validates and was kept. It has 11 fields marked [uncertain], more than most entries, so check it first when reviewing.
- *Fixed loop knots*: Šimon et al. 2020 (*Acta Physica Polonica A*) give the force that opens a bowline when its loop is pulled apart from inside as about 1.95 kN, against about 10.8 kN for the left-hand bowline. *Bends*: tail lengths recorded side by side (water knot at least 7.5 cm; flat overhand bend 18-24 in on Animated Knots against at least 200 mm on Wikipedia; an 800-cycle tail-creep test). Strength figures across the knot entries come from Šimon et al. 2020, CMC Rescue (McKently, ITRS 2014) and CMC's 2023 follow-up, which advises planning on 50% of rope strength.
- *Pole lashings*: no laboratory strength data for rope lashings was found, so `load` is [uncertain]; wrap and frapping-turn counts differ between sources and are recorded side by side. Some facts in the knot and lashing entries come from designers' notes on Printables models (PLA going brittle outdoors, bamboo shrinking, how much cord a printed netting needle holds) and are labelled as such. Wikipedia's claim that polypropylene is damaged by UV has no citation there, so the entries say only that some synthetics are damaged more easily by UV.
- *Rope-end finishing*: recorded side by side: the common whipping's ABOK number (#3443 Animated Knots, #3442 Wikipedia); whipping width (about one rope diameter, Ashley via Wikipedia and Animated Knots, against 1.5 diameters, Wikipedia *Common whipping* and premiumropes); melt or whip synthetic rope (Wikipedia *Common whipping* says fuse; Animated Knots and Budworth say a whipping is better). One liquid whipping product carries a California Prop 65 warning.
- *Sewn seams*: the FAA *Parachute Rigger Handbook* gives 5-cord nylon thread as 40 lb in its table (p. 3-14) and 45 lb in its text (p. 5-19); French seam allowances differ between Wikipedia and Ripstop by the Roll; sources differ on sealing a seam inside or outside (Extremtextil, Six Moon Designs, Gear Aid). Tandy writes a thread-end trim of '1/8" (1 mm)', though 1/8 in is about 3 mm. *Lacing*: double-loop lace length (about 7 or 7-8 times the edge) both come from one leatherworker.net forum thread; 8 of its 41 fields are marked [uncertain].
- *Iron-on fusible web*: no published strength figures for hobby webs were found (`load` is [uncertain]); activation temperatures (about 77-166 °C) and wash and dry-clean resistance come from Bostik's web-adhesive brochure, and washing figures from four sources are recorded side by side. A WebFetch summary misquoted the Dangerous Ladies cosplay page; the agent checked the raw page and used the real wording.
- *Binding knots and seizings*: the constrictor's ABOK number differs (#1249 Wikipedia, #1188 on p. 216 per Animated Knots), both recorded; cable-lacing tie spacing differs between NASA-STD-8739.4A Table 9-1, the 1962 US Navy lacing manual and AeroElectric, recorded side by side; twine-size and turn rules for seizings come from ropeworks.biz, a hobbyist site, and are labelled so. **Convention to decide:** the entry is tagged with the electrical family but carries no current, so its `load` starts 'Electrical: not a conductor'; none of the fixed electrical lead-ins fits such entries.
- *Tripod and stand screw mount*: ARRI anti-twist pin geometry (3 mm pins 60 mm apart; mini version 10.4 mm) comes only from a manufacturer's blog (Ulanzi); only the geometry was used. Maximum screw length differs (Sony: under 5.5 mm; Ricoh: 6.7 mm socket depth), both recorded. ISO 1222 itself could not be opened (iso.org 403); thread sizes are linked to gewinde-normen.de tables, not copied.
- *Tensioning and adjustable hitches*: recorded side by side: trucker's hitch gain (3:1 in theory, about 1.6:1 in practice, 2:1 when lifting a hanging weight); Prusik slip and break loads (5.3-9.5 kN quoted in the literature against measured averages of 14.1-14.8 kN on new rope and 10.9-11.2 kN on old rope, McCullar's USFA study); Practical Sailor 2009 (the rolling hitch slipped on every material but one, the icicle hitch held on all).
- *Eyelets and grommets*: naming differs (Wikipedia: a small grommet is an eyelet; some leather and sewing suppliers: an eyelet is one piece, a grommet two pieces with a washer), and the same trade number means different holes (a #1 takes a 9/32 in hole plain and 3/8 in rolled-rim per Trivantage; Sailrite's #1 spur die set has a 5/16 in cutter); the Trivantage guide was read only through WebFetch, asked twice with matching answers. No pull-out figures for grommets or keder edges were found (`load` is [uncertain] in both). *Bead-in-groove fabric edge*: Phifer's spline figures come from its selection card PDF (a zoro.com copy).
- *Rope splices*: recorded side by side: tuck counts (Toss via Wikipedia 3 natural / 5 synthetic; Animated Knots at least 5 in slippery synthetics, 7 for critical uses; Samson 5; OSHA 29 CFR 1910.184(h)(3), the legal minimum for US lifting slings: eye splice 3 in manila and 4 in synthetic, short splice 6 and 8); bury length (Animated Knots 72 rope diameters for HMPE, about half for polyester; DSM via Wikipedia 60x, 100x for uncoated Dyneema); strength ('full strength', '25-40% decay' against '5%', 90-100%). Best test source: Milne & McLaren, *Sports Engineering* 9(1) 2006 (2-tuck eye splices slipped at 73%; 4-tuck splices in 6 and 12 mm rope reached only 63% and 83%; short-overlap braid-on-braid splices slipped at 15-24%). The Diamond 2007 Strathclyde report could not be opened, so its figures are cited only through Wikipedia.
- *Leather and textile rivets*: how much post should stick out differs (Tandy 1/16-1/8 in; Buckleguy 2-3 mm; Montana Leather leather thickness plus 3 mm; a forum leatherworker 1/16 in), all recorded; no strength tests found (`load` [uncertain]). *Chicago screw*: post length (Wikipedia: shorter than the material; Pet Hardware blog: 1-1.5 mm shorter, with a worked example); the alias 'binding post' clashes with the electrical binding post, and the entry says so; the Loctite manual rates ABS, ASA, PC, acrylic, PS and PVC 'often not suitable', so the entry keeps threadlocker off printed parts.
- *Nails, brads and tacks*: nail-gun injuries differ (OSHA: about 37,000 emergency-room visits a year; Wikipedia quoting the CDC: about 42,000), both recorded; the worked load example is the agent's own calculation from the *Wood Handbook* equations and is marked [uncertain]. *Threaded rod and studs*: 15 of 41 fields are marked [uncertain] (the M8 example load is calculated; the 'studding' alias, the stud-wear argument and rod being weak in bending have no opened source; the AISC article and forum pages were blocked), so check it first. The agent also added the adjusters family to `other_families`.
- *Hitches*: strength recorded side by side (Animated Knots: assume at most 50%; the IGKT Solent chart from Day's book: about 60-70%, a 'very rough guide'; SAIL Magazine 2008 pull tests: clove hitch with two half hitches lost 35-61%, round turn and two half hitches rolled open at a 36-68% loss; Palomar 'almost all', Wikipedia). Timber-hitch turns differ (Ashley: three; later sources: five or more in synthetic rope). **Correction made 2026-10-06:** `scope-search-2026-10-03-rope-and-sewing.md` (N4) said Animated Knots lists the round turn and two half hitches among knots that 'can be tied and untied under load'. Neither the research agent nor a re-check of the round-turn page (through WebFetch; curl gets 403) found that wording. The page says the round turn 'should take the initial strain while you complete the knot'. The scope-search file now carries a correction, and the entry leaves the claim out.
- *Ultrasonic weld*: horn amplitude differs (Herrmann 5-50 µm; DuPont 50-150 µm), both recorded; energy-director height from three sources (Dukane 0.25-0.75 mm; Branson 0.25-0.5 mm; DuPont 0.4 mm for 1.5-3 mm walls). Cheap 28 or 35 kHz handheld welders were seen only in search results (listings returned 403), so `off_the_shelf_parts` is [uncertain]; no peel-strength figures found. The DuPont design guide was read from a distributor copy (distrupol.com).
- *Levelling foot*: load ratings differ widely between makers (Superior Glide 80 kg per M8 furniture foot; Keystone 75-250 kg per M10 tilting foot; Ganter calls its static load 'a guide value' needing a safety factor), and tilt ranges differ (about 20° Carr Lane and Keystone; 9° Superior Glide), all recorded. *Spring clip clamp*: clamping force from Bessey's PDF (up to 100, 120 and 150 N for 25, 50 and 75 mm openings); safety advice that heat lamps hang from a chain, not a clip (NDSU Extension; Dorset & Wiltshire Fire and Rescue).
- *In-line swivel*: fishing-swivel strengths from Talk Sea Fishing and British Sea Fishing recorded side by side; Crosby G-402 swivels 'are not intended to rotate under load' (quoted by a retailer, Defender) and its 5/8 in figures (5,200 lb working load, 26,000 lb break) come from a seller (Fastenersplus); the hardware-store swivel data sheet read (Koelner T-OOK) gives no load rating. The alias 'box swivel' has no opened source ([uncertain]); the Seabreeze article the scope search used returned 403, so fishing guides were used instead.
- *Clamp-on accessory mount*: printed bike-mount figures (PETG over PLA, bore 0.3 mm over the bar) are one filament maker's blog advice (QIDI) and are cited as such; clamp torques differ by maker (Garmin 0.8 N·m maximum; Surly the stated torque or 5 N·m, whichever is less). *Castor*: the agent added brakes, dampers & speed control to `other_families` for locking castors (the outline asked only for sliding); keep or drop when reviewing. HSE INDG478 rates 3-5° slopes 'reasonable' and over 5° steep for pushing carts.
- *Parallel pipe thread with a sealing washer*: Prusa found '3D-printed gaskets don't work', while a popular Printables TPU hose washer reports success; the entry advises a moulded rubber washer. The threadlib OpenSCAD library's thread range and BSD-3 licence come from a WebFetch summary (GitHub was blocked).
- *Soldered metal joint*: the US lead-solder ban for drinking water is dated 1974 by Wikipedia and to the 1986 amendment by the Copper Development Association, both recorded; the trade name 'killed spirits' has no opened source ([uncertain]). copper.org, blocked during the scope search, opened this time (*Copper Tube Handbook*, 2026 PDF). *Brazed joint*: the joint gap differs at the wide end (Wikipedia 0.03-0.08 mm; Lucas-Milhaupt 0.001-0.005 in), both recorded; no real printable brazing models exist, so `make_it_yourself` has only a rod-case divider and a torch stand.
- *Spot weld*: galvanised steel advice differs (Miller: don't weld it unless the coating is removed and you wear an air-supplied respirator; TWI: general ventilation is usually enough), both recorded; the 'up to about 30 A per strip' rating and 'use pure nickel, not nickel-plated steel' (one Hackaday reader) are [uncertain]; 7 fields are marked. *Heat-fused plastic pipe*: recorded side by side: insertion depth for 20 and 25 mm pipe (NIBCO 9/16 and 5/8 in, about 14 and 16 mm; a Printables gauge 15 and 18 mm), butt-fusion cooling (PPI TR-33 30-90 s per inch of diameter; ASTM F2620 11 min per inch of wall), and socket-fusion sizes (Wikipedia typically 40-125 mm; PP-R tables start at 20 mm).
- *Flare fitting*: some SAE 45° and JIC/AN 37° sizes share threads, so threads that screw together don't prove the parts match (the entry warns). Copper-nickel brake pipe being easier to flare rests on shop and forum claims ([uncertain]). **Cross-link for the update pass:** *Compression fitting* (210) could cite the DVSA MOT manual rule that ferrule-type compression joints aren't suitable for brake-pipe repairs.
- *Tapered pipe thread*: recorded side by side: where tape starts (Swagelok: at the first thread, never overhanging; Boshart: the first wrap covers the thread end; LOCTITE: leave the first thread free); wraps (Swagelok 2-3, Boshart 3-5); tightness (Swagelok: no standard torque or turns; Boshart: 1.5-3 turns past hand-tight for metal up to 1 in, hand-tight plus 1-2 for PVC); PTFE tape on PVC (Boshart: no; Wikipedia *Pipe dope*: tape or an ASTM F2331 compound); tape plus paste (Wikipedia: can overload threads; Boshart: recommends it); PTFE breakdown (288 °C in *Thread seal tape*, 300-450 °C in *Polymer fume fever*). 7 fields are marked [uncertain].
- *Multi-point bolt*: the agent added motion conversion and over-centre, toggle & cam clamps to `other_families` (the over-centre one rests on Wikipedia's 'zero-torque' lock-rod cams); keep or drop when reviewing. Google Patents and Justia were blocked, so container lock rods rest on Wikipedia *Lockrod*; the Chubb safe-boltwork patent GB2094390A was read through WebFetch. *Flywheel*: 6 fields are marked [uncertain].

### Blocked or unreadable (nothing cited from them)
Essentra, Keystone (keyelco.com), CPSC, the AWS forum, an Analog Devices app note. Wikimedia
returned 429 (rate limit) for part of the run; agents retried. McMaster-Carr, Böllhoff's HELICOIL PDFs, Bossard's Ensat page, Stanley's Heli-Coil page, NAPA. McMaster-Carr (JavaScript only), McFeely's (Cloudflare), a Family Handyman article (404). The IGKT knot-strength chart (connection reset). GRIP GmbH bladder-gripper pages (automate.org 403, qviro 404). Thorlabs, Newport, Misumi, the Bambu Lab wiki (402), Core Electronics, the RobotShop community, upload.wikimedia.org and the Wikipedia API (429, rate limit). Fluke test-lead PDF (403), Monoprice speaker-wire instructions (403), DIY StackExchange (403), the Kitronik product page (403), Ideal UnderGround product pages (404, 403), Mouser data sheets (bot page). Burkhardt's *Practical Guide to Tensegrity Design* (angelfire.com, blocked by the proxy), Matt Millman's crimp-connector guide (503), powerandcables.com (403), TE's PIDG guide (403). Thingiverse (429), All3DP's PLA-welding article, the DroneBot wiki, a Hakko PDF, the CR4 forum (403 or reset), a PMC page (captcha; read through Europe PMC instead). 3m.com (503), specialized.net (403), the RS T-tap page (403), a components.ru PDF (502), the DigiKey 3M IDC primer (403), the cablejoints blog (404). Phoenix Contact pages (403), a page on EN 60204-1 (403). Thingiverse model pages (JavaScript only). Woodworking Network, Pro Tool Reviews, Masterclass, Ballard Designs, Home Depot, a Peak District fencing PDF. StewMac and Madinter (403). Jameco, Jonard, the NASA workmanship site, MakerWorld, ISO.org. Ian's Shoelace Site (fieggen.com, captcha), sectionhiker.com (403), MakerWorld and 3dgo.app (403). Bürstner's awning-rail page (403), an Oklahoma State page (bot check). Pet Hardware product pages (403), McMaster-Carr binding barrels and Bolt Depot sex bolts, Sailrite's double-cap tool page (no text), Animated Knots' long-splice page (404), the Diamond 2007 Strathclyde report (reset or 429, Wayback too). Solvay and Eastman PDFs, MDPI JMMP, Fraunhofer, PlasticsToday, an electronics-lab forum, eBay, an Emerson brochure. Seabreeze's swivel article (403), Essentra's levelling-feet guides, an Elesa data-sheet mirror (reiman.pt), Maytag, Petzl retailer pages (mec.ca, oliunid); cpsc.gov again (anchorit.gov used instead). copper.org again for one agent (401, 403, 404), counterman.com, dixonvalve, toolsource, lasertools/toolconnection, zbotic, an older PIPA issue (404). Google Patents and Justia (container-door patents).

## Update pass on researched entries (R23, 2026-10-06)
Collected from the update agents' hand-back reports. Plan and per-entry list: `update-pass-2026-10-06.md`.

### Sources and links
- *Capstan and windlass* (151) and *Lantern gear* (204) already have the maximum five `links`, so the Commons Spanish windlass photo (CC BY-SA 3.0) and the *507 Mechanical Movements* pages are only in `sources`; swap one in when publishing if preferred.
- *Basic latches* (262) and *Basic strap and garment closures* (269) already have five `links`; the Commons hook-and-eye photo (CC BY-SA 3.0 / GFDL 1.2) is a candidate to swap in.
- *Hose barb* (133), *Quick couplers* (166) and *Compression fitting* (210) already have five `links`; Commons candidates to swap in: Copper-press-fitting.JPG (CC BY-SA 3.0), Pressfittings_2.jpg (public domain), Cam_and_groove_brass.jpg and Camlock_type_A.JPG (CC BY-SA 3.0).
- Three entries from earlier runs have six `links`, one over the field's 2-5: *Lid and flap stays*, *Drawer slide*, *Cam and follower*. In the update pass, *Aluminium-extrusion connectors* (113) and *Spring-steel push-on fasteners* (173) gained a Commons photo of their new variant (strut-channel spring nut, CC BY-SA 4.0; cage nut, CC BY-SA 3.0); one weaker link in each was moved to `sources` only, to stay at five.
- Google Patents returned 503 to downloads, so US7843297B2 (programmable magnets) and US4460805 (membrane grommets) were read through WebFetch (quotes matched across two calls) and are labelled so in `sources`. All 12 group 1 entries already had five `links`; candidates to swap in: the EP-Face paper (104), Commons Stiftwanne2x13v2.jpg (a keyed box header, CC BY-SA 3.0 or GFDL; 116), Reell's hollow-shaft hinge page (64).

### Conflicting figures and content points
- *Ball-and-socket joint* (65): the pyramid alignment adaptor's tilt differs by size: ±5° for Blatchford's child-size mini adaptor (938373) and ±7° for its full-size one (938050), both recorded. Its exact geometry ('an inverted four-sided pyramid' pressed by four set screws) is only in patents that couldn't be read, so the entry says 'a pyramid-shaped boss in a socket with four set screws'.
- *Belt tensioner* (128): the mounting scope search also suggested tagging it with the adjusters family; the plan didn't, so it is left for the owner.
- *Vacuum gripper* (109) and *Bernoulli gripper* (277): electroadhesion figures recorded side by side (Hackaday 2019: a sheet of paper held with 5 mN of shear at 3 kV; the open-source board's README, 100 × 100 mm at 1.4 kV: 9 N uncoated, 4 N with a PlastiDip coat, 2.5 N with Kapton). Not in the files: the README's 90 mN/cm² is far below Wikipedia's claimed 0.5-1.5 N/cm²; check before publishing.
- *Dampers* (214): the maker uses of crush absorbers (drone and robot bumpers, egg-drop padding) are written as advice with no source found; check them. *Tendon-driven joint* (278): a cable-closed grip figure measured on people was left out on purpose. *Reciprocal frame* (298): **correction:** its *Tensegrity* related item said tensegrity was out of scope; that clause was removed now that *Tensegrity* is item 345. *Spline shaft* (190) was stored with a 1-space indent; it is now 2-space, so its diff is large, but only `everyday_examples` and `sources` changed.
- *Woven self-tightening grip* (148): whoopie-sling bury lengths (Animated Knots: about 40× the rope diameter, 75× for Dyneema-type fibres, or 25× and 50× for polyester and nylon) sit beside the entry's long bury splice (about 72× for HMPE), labelled as a different splice. *Pulley system* (206): low-friction ring efficiency (Practical Sailor: 80-83% with Dyneema, 50-60% with polyester double braid, against 95-97% for ball-bearing blocks) recorded beside Petzl (50-98%) and CMC (about 50% for a carabiner).
- *PVA wood glue* (223): Aleene's says fabric glues are acrylic-based, not PVA, so 'fabric glue' is an alias with that caveat. *Linear ratchet* (8): Wikipedia marks the 2% carbon-black figure for UV-resistant ties 'citation needed' (now noted); the haemostat-style printed clamps are worded neutrally because the Printables descriptions don't say they ratchet. Wikipedia *Cable tie*'s opening names a brand that looks like vandalism; not used. *Shock-corded sectional pole* (152) and *Ratchet tie-down strap* (153) link to *Wire-rope terminations* as weak fits, with reasons that say when they apply.
- **Corrections:** *Capstan cable drive* (101), *Shock-corded sectional pole* (152) and *Ratchet tie-down strap* (153) had '(URL from Printables API, page not opened)' inside a link's `url`; it is now in the link's `title`. In *Guy-line slider* (154) and *Spring-gate hook* (156), two related items that each named part of one new entry were merged under its name, keeping all their text.
- *Solvent welding* (139): **correction:** its related line called hot-gas welding 'the only welding route for polyethylene and polypropylene'; now that heat-fused pipe has an entry, the line keeps that for PE and PP parts and adds the pipe route. *Quick couplers* (166): the RCT thumb-latch rating (-40 to +80 °C, 6.9 bar per line) is for one twin-tube product and is labelled so; the CPC alias comes from a vendor page (Fresh Water Systems), not Colder Products' own site. *Gasket* (131): EPDM-backed roofing washers left out (not on the Wikipedia page).
- *Heat-set threaded insert* (56): soldering-iron temperature differs (SPIROL: 343-399 °C as 'a good operating temperature', though SPIROL's own rule of heat-deflection temperature + 65 °C gives far less; CNC Kitchen: 225-265 °C), recorded side by side. *Press-fit and expanding inserts* (179): expansion inserts perform 'least of all' (SPIROL) against a 'very good hold' (Formlabs); boss size 1.5-2× the knurl diameter (SPIROL's 3D-print paper) against 2-3× the insert diameter (SPIROL's moulded-plastics guide). SPIROL's resin press-in figures (7 N·m, 40 N) were left out as inconsistent.
- *Knock-down connectors* (250): the claim that cams are weaker than Confirmat screws comes only from a Confirmat maker (Häfele, quoted by Fine Homebuilding) and is marked [uncertain]. *Shaft-to-hub joints* (266): forum replies disagree on whether welding current harms a motor; brazing a hub on has no opened source, so it is only a cross-link. *Butt and lap wood joints* (271): the *Wood Handbook*'s 250-460% clinching gain for green wood that dries was left out ('does not justify the use of green lumber'). The 'rack nut' alias for the cage nut (173) has no source and was left out.
- **Correction:** *Keying* (116): the plan's 'polarised barrel plugs' doesn't hold, because barrel plugs are round and have no orientation key; the entry gives size keying (EIAJ RC-5320A: 'A larger plug will not go into a smaller jack') and look-alike barrel plugs as a keying failure. *Magnet joint* (111): Wikipedia's *Programmable magnet* article is flagged as reading like a press release, so 'stronger shear resistance' is given as the makers' claim. *Friction hinge* (64): Reell's largest hinge is 11.3 N·m in the existing text and 'up to 11.5 N-m' on its hollow-shaft page; both recorded.
- **For a later pass:** *Slip ring and rotary union* (135) and *Genderless connector* (286) are tagged with the electrical family, but their `load` doesn't start with the fixed electrical lead-in. *Anti-twister mechanism* (291) still lists `materials` in `uncertain` without a marker (noted earlier). The underwriter's knot in *Cable gland and strain relief* (134) is described without tying steps, under the mains rule.

### Blocked or unreadable (nothing cited from them)
- Google Patents (503) and Justia (403) for prosthetic pyramid-adaptor patents; USPTO PDFs of the same patents downloaded but are scanned images with no text.
- hackster.io (Cloudflare 403 to curl and WebFetch; replaced by the designer's GitHub README, Hackaday 2019 and NC State's release), the Wayback availability API (429).
- hammockgear.com (403), prym.com (404), wawak.com (403; a retailer page was used for Fray Check), the Commons API (429 at times; licences read from file pages).
- Essentra's entry-grommets page and Justia (403).

## Extra items suggested by agents (added 2026-09-29 as items 275-277)
- **Iris valve (twisted fabric-sleeve valve)**: currently a variant inside *Iris mechanism*,
  but it works differently (a sleeve twisted shut, no blades).
- **Twisted-and-coiled polymer muscles** (heat-driven fishing-line actuators): listed under
  *Twisted-string actuator* → `related`; could be its own powered-connector item.
- **Bernoulli (non-contact) gripper**: listed under *Vacuum (suction) gripper* → `related`; a distinct powered gripper type.

## Items 276-323 (researched 2026-10-02)
Collected from the agents' hand-back reports for the items added on 2026-09-29 and 2026-09-30.
Agents write unverified claims as `[uncertain: reason]`; the report generator drops those
sentences the same way as plain `[uncertain]`.

### Sources and links
- **Read from copies or through APIs** (cite the original when publishing): Festo DMSP
  muscle datasheet from a distributor copy (motionworld.com) and the Shadow Robot air-muscle
  page from an archive copy on lars.mec.ua.pt (*Pneumatic artificial muscle*); Haines et al.
  2014 (*Science*) abstract through a Semantic Scholar API URL (cite DOI 10.1126/science.1246906;
  *Twisted-and-coiled polymer muscle*); the OpenFlexure paper through the Europe PMC REST API
  (cite DOI 10.1364/boe.385729; *Elastic band springs*). PMC pages showed bot checks to `curl`,
  so several papers were read through NCBI E-utilities or Europe PMC. Paywalled papers in
  *Air-logic valve* and *Vacuum-driven artificial muscle* (Science Robotics, Tawk 2018, Zhai
  2025) were read as abstracts through Semantic Scholar API URLs.
- **Manufacturer documents from distributor sites**: Parker *Radial Shaft Seals* catalogue
  (ashtonseals.co.uk) and SKF seal overview (allsealsinc.com) in *Radial lip seal*; Perstorp
  Capa data sheets and MSDS (Adafruit's CDN, rapstrap.com) in *Hand-mouldable thermoplastic*.
  The Recreus "interview" in *Air-logic valve* is a filament seller's article (labelled).
- **Unopened Printables URLs in `sources`**: *Knife-edge and jewel pivots* lists two model URLs
  from the API (`1465894-balance-scale`, `1029836-educational-balance-scale`) without the
  "page not opened" label, which is only on its `make_it_yourself` titles.
- **Left out on purpose**: *Air tank and hydraulic accumulator* leaves out Printables 498472
  (printed PET-bottle tank adapters, listed in `fluid-power-search-2026-09-29.md`) and printed
  water-rocket launchers, because their printed parts hold stored pressure.
- **Printables links from the API** (labelled "page not opened" where no search result showed
  the URL): *Variable-radius pulley* (264536), *Tendon-driven joint* (two models),
  *Genderless connector* (220355, 129989, 1811372, 1816212), *Anti-twister* (1128267, also in
  search results).
- **Licences not shown**: Thingiverse 2764962 (*Variable-radius pulley*), DIYwalkers pages
  (*Walking linkage*), the Mechamagnets repo has no licence file (*Magnetic detent*). The GitHub
  API isn't enabled, so repo licences weren't checked.
- **Vendor or retailer numbers** to check against a second source: Storz "99% of leaks are
  gasket problems" (ca-fire.com) and Dual Lock's 1,000 cycles (a retailer guide) in
  *Genderless connector*. The *Hobson's joint* Cal-Van catalogue line was decoded from a PDF
  with a scrambled font.
- **No printable model found**: *Multi-turn rotation limiter*, *Weight-activated gripping tongs*
  (printed tongs found are hand-squeezed), fusee (*Variable-radius pulley*). Their
  `make_it_yourself` lists are empty or carry only related models.

### Conflicting figures and content points
- *Pneumatic artificial muscle*: invention date (Wikipedia 1957; Wikibooks: Gaylord's 1957
  patent; Bennington et al. 2023: 1930s-40s, made popular by McKibben in the 1950s); maximum
  contraction (Festo 25%, Shadow 35-37%, Osaka group 30% in its README but about 25% in its
  HardwareX test); twisting (Shadow: tolerated; Festo: forbidden, about 1° misalignment).
- *Multi-turn rotation limiter*: what clock stop work is for. Wikipedia says it keeps the
  mainspring in the flat middle of its torque curve; Vintage Watch Straps calls that a myth
  (it stops over-winding). The entry gives only the over-winding reason; decide whether to
  mention both.
- *Multi-material interlock*: which plastics bond (Bambu: TPU and PETG bond easily, TPU and PLA
  poorly; UltiMaker: CPE and TPU incompatible). UltiMaker's "only limited by the weakest
  material" overstates it: Kuipers et al. give an upper bound of 1/(1/σA + 1/σB).
- *Bernoulli gripper*: porous sheets (EE3D: grips them where vacuum fails; SMC: lift may fail
  if holes add up to more than about 1% of the pad area). Both are given.
- *Twisted-and-coiled polymer muscle*: fluorocarbon line (WriterOfMinds: not known to work; a
  Hackaday commenter: coils better); marked [uncertain].
- *Hobson's joint*: efficiency (Hackaday "pretty efficient" vs friction and wear warnings);
  no reliable figure, marked [uncertain].
- *Scroll mechanism*: Wikipedia's ±0.125 mm three-jaw runout is itself "citation needed"; the
  entry leads with Sherline's 0.003 in. The Setrite manual's speed column has no unit, so its
  numbers were left out.
- *Weight-activated gripping tongs*: "a grip ratio of 2 needs a friction coefficient above
  0.25" is the agent's own calculation from Bushman's equations, labelled [derived]; check it.
- *Bellows boot*: `other_families` lists compliant mechanisms & flexures (the agent's choice,
  not asked for in the outline notes). Likewise *Bellows and inflatable actuators* adds springs
  & energy storage.
- *Air tank and hydraulic accumulator*: Hackaday's 2016 article on printed air tanks says PVC
  pipe is safe for compressed air; OSHA's bulletin says never use it. The entry follows OSHA.
- *Hand-mouldable thermoplastic*: moulding it on the body (Preproom: never in schools; Easy
  Composites sells it for that, with cling film over the skin). Both are in `safety_notes`.
- *Vacuum-driven artificial muscle*: two `safety_notes` points (keep fingers clear; it drops
  its load if the vacuum is lost) are the agent's reasoning from the mechanism, not from a
  source, and are not marked. The entry has only 12 sources.
- *Venturi vacuum generator*: throat and diffuser proportions come from one maker's model
  description and are marked [uncertain]; a "300 mbar" figure is labelled as a maker's claim.
- *Knife-edge and jewel pivots*: Rice Lake spells a pivot material "stellate"; probably
  Stellite, marked [uncertain].
- *Syringe hydraulics*: one `safety_notes` point ("use syringes without needles; keep water
  away from electronics") is the agent's own advice, labelled as such. *Air or hydraulic
  cylinder* left out Thingiverse 1337213 (licence unreadable).
- Numbers the agents worked out themselves are labelled "calculated" in *Syringe pump* and
  *Air tank and hydraulic accumulator* (µL per motor step, syringe pressures, a Boyle's-law
  example).

- Items 316-323 (researched after the pause): printed gear pumps disagree on priming (Printables 277351 "needs to be primed"; 286142 and 1534241 say
  they prime themselves); gear-pump efficiency (Wikipedia *Gear pump* "generally very efficient"
  vs *Hydraulic pump* lowest volumetric efficiency, about 90%); air-caster air-film thickness
  (AeroGo 0.003-0.005 in, Wikipedia "less than a millimeter", Airfloat "approximately a
  millimeter"); BS 1212 Part 2 float valve (DIY Doctor: plastic Part 1 valve; Squote, APM and the
  BSI listing: brass diaphragm valve). CNC Cookbook's claim that sliding a part on a vacuum table
  takes at least twice the lifting force contradicts Mekanika's friction figure and was left out.
- *Anti-twister mechanism* lists `materials` as unverified without a marker (see above).
- *Float valve* and *Air bearing* cite some Thingiverse models whose licences weren't shown
  (marked [uncertain]). A Commons page for a ram-pump video shows the uploader's email address;
  the entry credits the name only.

### Blocked or unreadable (nothing cited from them)
strandbeest.com (JavaScript only; Jansen's numbers were checked from the Commons SVG and an
arXiv paper instead), Instructables (JavaScript), Taylor & Francis, MDPI, Semantic Scholar web
pages, softroboticstoolkit.com, bioRxiv (429), lucy.vub.ac.be, AccessEngineering (Sclater's
"Seven Ways to Limit Shaft Rotation"), hackster.io, cpsc.gov, Fabbaloo, patents.justia.com,
Toolmonger, Quora, Hacker News, eng-tips, cults3d, MakerWorld, the Wayback Machine, the
InstaMorph site (404), Frugal Fun, technologystudent.com, Appropedia's syringe-pump page
(Cloudflare), Watson-Marlow (wmfts.com), control.com, automate.org, Festo's main catalogue PDF,
vinerobots.org, publisher pages at science.org, Wiley and Nature (a PMC copy was used where one
exists), and an NTU study of a printed tuned mass damper. Google
Patents blocks `curl`, so agents checked patent quotes through WebFetch. The RoboMech 2025 TPU
article listed in `gap-search-2026-09-29.md` was behind a Springer bot check; Stano et al. 2020
was used instead.
