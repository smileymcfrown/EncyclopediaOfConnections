# Run 2 review notes (things to fix before entries are published)

Collected from the research agents' hand-back reports during `/research-deep`. None of these
break validation; they are clean-ups for the report step or Phase 1.

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
  `scope-search-2026-10-03-combined.md` with the sourced text in each group's file. They are not
  in the outline or the result files yet; apply them in an update pass after items 324-409 are
  researched.
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

### Blocked or unreadable (nothing cited from them)
Essentra, Keystone (keyelco.com), CPSC, the AWS forum, an Analog Devices app note. Wikimedia
returned 429 (rate limit) for part of the run; agents retried. McMaster-Carr, Böllhoff's HELICOIL PDFs, Bossard's Ensat page, Stanley's Heli-Coil page, NAPA. McMaster-Carr (JavaScript only), McFeely's (Cloudflare), a Family Handyman article (404). The IGKT knot-strength chart (connection reset). GRIP GmbH bladder-gripper pages (automate.org 403, qviro 404). Thorlabs, Newport, Misumi, the Bambu Lab wiki (402), Core Electronics, the RobotShop community, upload.wikimedia.org and the Wikipedia API (429, rate limit). Fluke test-lead PDF (403), Monoprice speaker-wire instructions (403), DIY StackExchange (403), the Kitronik product page (403), Ideal UnderGround product pages (404, 403), Mouser data sheets (bot page). Burkhardt's *Practical Guide to Tensegrity Design* (angelfire.com, blocked by the proxy), Matt Millman's crimp-connector guide (503), powerandcables.com (403), TE's PIDG guide (403). Thingiverse (429), All3DP's PLA-welding article, the DroneBot wiki, a Hakko PDF, the CR4 forum (403 or reset), a PMC page (captcha; read through Europe PMC instead). 3m.com (503), specialized.net (403), the RS T-tap page (403), a components.ru PDF (502), the DigiKey 3M IDC primer (403), the cablejoints blog (404). Phoenix Contact pages (403), a page on EN 60204-1 (403).

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
