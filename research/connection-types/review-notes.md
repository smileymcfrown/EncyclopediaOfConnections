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

## Extra items suggested by agents (added 2026-09-29 as items 275-277)
- **Iris valve (twisted fabric-sleeve valve)**: currently a variant inside *Iris mechanism*,
  but it works differently (a sleeve twisted shut, no blades).
- **Twisted-and-coiled polymer muscles** (heat-driven fishing-line actuators): listed under
  *Twisted-string actuator* → `related`; could be its own powered-connector item.
- **Bernoulli (non-contact) gripper**: listed under *Vacuum (suction) gripper* → `related`; a distinct powered gripper type.
