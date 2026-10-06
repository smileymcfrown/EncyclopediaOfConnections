# The Encyclopaedia of Connections (working title) — Project Plan & Status

> This is the single source of truth for what the project is, what has been asked for,
> what has been decided, and where things currently stand.
> **Every working session should read this first and update it before finishing.**

**Last updated:** 2026-10-03
**Current phase:** Phase 0 — Research (runs 1, 2 and 3 done. Run 2 has 409 entries in 31 families after the wider scope (R22). On 2026-10-06 (R23) the R22 notes were added to the already-researched entries, and run 3's finder was re-tested on all 409. The owner's review of run 2's data and run 3's proposals is still open)
**Next action:** Merge this branch into `main`. Then the owner reviews `research/flowchart-and-format.md` section 4 (proposals P1-P9) and the run 2 data (`research/connection-types/report.md`, `review-notes.md`, including the update-pass section). Once those are agreed, Phase 1 starts by turning the finder fields into fixed choices (P3), then converting the JSON into one Markdown file per entry (P5)

---

## 1. Vision

A reference for makers (3D printing, robotics, CNC, general tinkering) who aren't
professional engineers and so don't know the terms they'd need to search for. It covers
**all the ways to connect things together**, and the ways to make things turn, slide,
flex, lock or adjust.

Examples: clips, snap fits, links, joints, hinges, pins, press fits, dovetails, bayonet
mounts, living hinges, compliant mechanisms, bearings, couplings, threads and so on.

The main feature is a **guided flow chart**. The user answers plain-language questions
and ends up with a shortlist of options, each with its proper name so they can learn more.

- Does the connection move? If so, how: rotate, slide, flex, or several of these?
- Does it need to seal? Tight, loose, watertight, dustproof?
- Removable or permanent? How often will it be taken apart? Does it need tools?
- How much load? Does it need to be adjustable?
- How will it be made? 3D printed, machined, or bought off the shelf?

### Scope
**In scope: the *types* of unusual and clever connections and mechanisms.** These range from simple
clever joints up to semi-complex mechanisms, as long as each one works as **one unit or
connector** (even if it's made of several smaller parts). Examples of what's wanted:
- a knob that tightens two straps together, locks, and only releases when turned by hand
  (ratcheting dial / reel closure)
- things that tighten or drive to a set torque, then slip or click (torque limiters, slip clutches)
- things that hold under load but release by hand (self-locking, cam cleats, over-centre latches)
- one-way mechanisms, indexing detents, bayonet/twist-lock mounts, compliant mechanisms,
  print-in-place joints, motion converters (Geneva drive, scotch yoke, cams)
- **gear trains, gearboxes and similar transmissions**, as types (e.g. planetary, worm,
  strain-wave/harmonic, cycloidal, belt and chain drives, differentials)
- **powered / active connectors** (e.g. electromagnets and electro-permanent magnets,
  solenoid latches, motorised locks, shape-memory-alloy actuators used as latches)
- **hydraulics, pneumatics & vacuum**: parts that move, hold or let go using air or liquid
  pressure, or suction (e.g. syringe hydraulics, air cylinders, valves, small pumps, soft
  pneumatic actuators, venturi vacuum generators), as types. Whole machines such as
  compressors stay out
- **added 2026-10-03 (R22):** electrical connections (wire joints, terminals, connectors); standard
  hardware *as types* (hose clamps, wall anchors, nails, pins and the like: one entry per type, not
  catalogues); joining by heat (soldering, brazing, welding, welding prints together) as joint
  types; rope, knots and sewn joints; mounting standards (tripod threads, camera and screen mounts);
  pipe and plumbing joints; moving and adjusting basics (wheels, castors, levelling feet, shims,
  adjusters); and ideas from the medical field that makers can reuse
- **adhesive types**, by material and use (e.g. cyanoacrylate/superglue vs PVA wood glue vs
  two-part epoxy vs contact adhesive vs solvent cement). Types only, not brand lists

**Out of scope (rewritten 2026-10-03, R22):** the test is that connection *types* are in, from any trade;
what stays out is
- catalogues of sizes and part numbers (manufacturers' ranges of screws, bolts, nuts and so on): link to them instead
- whole machines and systems: robots, printer layouts, vehicles, compressors, wiring diagrams and circuit design
- making processes that don't join anything (casting, moulding, machining technique)
- projectile launchers
- medical use: ideas from any field, medicine included, are in scope as connection types, described for non-medical maker use. Out of scope is guidance on using them on or in people for medical purposes. Where a maker version could be mistaken for a medical one, the entry carries a safety note

Components like gearboxes and powered latches are in. Each family has at least one generic "baseline" entry
(e.g. "ordinary screw joint") so the flow chart has something to compare against.

**Build on what exists.** There are existing encyclopedias, wikis, digital libraries and repos
that catalogue mechanisms. Find them first, link to them, reuse their classifications where
it helps, and fill in the gaps for beginners.

### Audience
- The project owner, plus other hobbyist makers.
- Assume no engineering vocabulary. Lead with plain English and give the proper term
  (and its aliases) next to it.

### Priorities (by making method)
1. **3D printing** (FDM/resin): snap fits, print-in-place, heat-set inserts, compliant mechanisms, etc.
2. **Robotics & mechanisms**: bearings, shafts, gears, linkages, motor couplings, etc.
3. **Everyday hardware**: clever off-the-shelf connectors (e.g. cam buckles, cord locks, quick-release pins), not standard fastener catalogues
4. CNC, laser cutting, woodworking joinery and sheet metal. In scope from day one, but the lowest priority (R15).

---

## 2. Requests log

Everything the owner has asked for, in order. Don't delete entries. Mark them done or changed instead.

| # | Date | Request | Status |
|---|------|---------|--------|
| R1 | 2026-09-25 | Build an encyclopedia of ways to connect / move / adjust things, aimed at non-engineer makers | Ongoing |
| R2 | 2026-09-25 | Guide users through a flow chart to find their options (moves or not, seal tight/loose, removable/permanent, …) | Planned (Phase 2) |
| R3 | 2026-09-25 | To start with, entries link to outside resources with images/info | Planned (Phase 1) |
| R4 | 2026-09-25 | Later: simple diagrams and animations for entries | Planned (Phase 4) |
| R5 | 2026-09-25 | Keep a document that records requests, plans, progress and current status | Done: this file |
| R6 | 2026-09-25 | Write a prompt for `/dev-tools:deep-research` to do the research | Replaced by R8 |
| R7 | 2026-09-25 | Look for a better research plugin/skill (skills.sh) | Done: chose Weizhena/Deep-Research-skills |
| R8 | 2026-09-25 | Switch to Weizhena/Deep-Research-skills and rewrite the prompts for it | Done: `.claude/skills/`, `research/prompts/` |
| R9 | 2026-09-25 | **Priority:** find existing research, encyclopedias, wikis and repos first | Done: run 1 is now `01-prior-art.md`, and run 2 builds on its results |
| R11 | 2026-09-25 | **Scope:** include powered connectors, and gear trains, gearboxes and similar transmissions | Done: Scope, prompts and fields updated (`power` field) |
| R10 | 2026-09-25 | **Scope:** focus on unusual/clever connection and mechanism *types* (e.g. torque limiting, hand-release-only locking), from simple connections to semi-complex mechanisms that act as one unit. Not standard hardware catalogues | Done: Scope section added. Prompts and fields updated (`special_behaviour`, `complexity`) |
| R12 | 2026-09-25 | **Scope:** include adhesives, as types for different materials and uses (cyanoacrylate vs PVA vs two-part epoxy vs contact adhesive …), not an exhaustive list of brands | Done: Scope, run 1 outline (4 adhesive items), run 2 prompt and prior-art fields updated |
| R13 | 2026-09-26 | Add the two extra families suggested by run 1: locating & alignment, and springs / energy storage | Done: run 2 prompt family list updated |
| R14 | 2026-09-26 | License the project's own content as CC BY-SA, as run 1 suggested | Decided (recorded below). Add a LICENSE file when content is published |
| R15 | 2026-09-26 | **Scope:** CNC, laser-cut, woodworking and sheet-metal joinery are in scope from day one (they were never out, just lowest priority) | Done: Priorities and run 2 prompt updated; run 1 topped up with 6 joinery items and `summary.md` section 2.20 rewritten |
| R16 | 2026-09-26 | Working title is *The Encyclopaedia of Connections*; no final name or domain yet | Recorded |
| R17 | 2026-09-26 | Run 2 (connection types): build the outline, then `/research-deep` with a commit and push after each batch, then `/research-report` with family, special_behaviour and motion in the contents; update PROJECT.md at the end | Done 2026-09-29: 274 of 274 items researched and validated; report generated |
| R18 | 2026-09-26 | Keep all 274 items and all 41 fields; leave borderline types (electrical joints, plastic welding) out for now | Done: recorded in `research/connection-types/outline-notes.md` |
| R20 | 2026-09-30 | Add a new family for fluid power, after being asked whether hydraulic and pneumatic circuits should now be in scope: key *hydraulics, pneumatics & vacuum*; add all 24 types a web search found; move the unresearched air items (283, 288, 289) into it and tag related researched entries; keep the `job` options as they are | Done 2026-10-02: outline updated to 323 items and 26 families; all researched |
| R19 | 2026-09-29 | `/research-add-items` on run 2: add the three items the agents suggested (iris valve, twisted-and-coiled polymer muscle, Bernoulli gripper) and search the web for more. Owner then chose all 22 types the search found and three notes additions, but no *Motion conversion* baseline | Done 2026-10-02: outline updated to 299 items (275-299 new); all researched |
| R21 | 2026-10-03 | Run 3 (`research/prompts/03-flowchart-and-format.md`): finder questions tested against the data (every path 3-10 entries, no dead ends), Mermaid flow chart, 10-20 real forum questions checked against it, existing selection tools, a 50+ term glossary, and a format and tech recommendation; then update PROJECT.md, commit and push | Done 2026-10-03: `research/flowchart-and-format.md`, test scripts in `research/finder-test/`. Proposals P1-P9 wait for the owner |
| R22 | 2026-10-03 | Widen the scope after asking what connections are still missing (electrical wire joints, jubilee clips): add every group of near-scope types from the rundown (electrical connections; standard hardware as types; heat and fusion joining; rope, knots and sewn joints; mounting standards; pipe and plumbing joints; moving and adjusting basics; earlier near-misses) plus medical-field ideas a maker can repurpose; keep out what was suggested to keep the project focused; reword the medical rule | Done 2026-10-03: scope and medical rule recorded; six web searches, one per group; the owner confirmed all 86 types (items 324-409), five new families (31 in all), a finder answer for electrical entries instead of a new `job` option, and no new field. Outline, research rules, prompt and notes updated. All 86 researched on 2026-10-05 and the report regenerated (409 items, 31 family pages). The update pass for existing entries is next |
| R23 | 2026-10-06 | After merging PR #9: start the R22 update pass (apply the notes additions and the agents' cross-links to the already-researched entries, then re-test run 3's finder with the five new families). Keep the three extra `other_families` the agents added (*Castor*, *Multi-point bolt*, *Threaded rod*), and allow 'Electrical: not a conductor' as the rating lead-in for entries tagged electrical that carry no current | Done 2026-10-06: six update agents re-opened the sources and updated 96 researched entries (56 with new sourced content, each with an "Also covers" outline note; 39 cross-links only; one already covered). The finder was re-tested on all 409 entries: 140 paths, all 3-10 entries, every entry reachable (`research/flowchart-and-format.md` 1.4). The report was regenerated |

---

## 3. Decisions

| Date | Decision | Why |
|------|----------|-----|
| 2026-09-25 | The status doc lives in the repo (`PROJECT.md`) | Future Claude sessions can read and update it automatically |
| 2026-09-25 | Research runs in stages: prior art → connection types → flow chart & format, then expand families as needed | One giant run would be shallow on every category and hard to review. Prior art comes first so the catalogue builds on existing collections (R9) |
| 2026-09-25 | Scope is unusual/clever *types* that act as one unit. Standard hardware catalogues and whole machines are out, with at most one baseline entry per family. *Widened 2026-10-03 (R22): standard hardware types are now in; catalogues and whole machines stay out* | Owner clarification (R10) |
| 2026-09-25 | Powered/active connectors and gear trains/gearboxes/transmissions are in scope (as types). Added a `power` finder field (passive / powered) | Owner clarification (R11) |
| 2026-09-25 | Adhesive *types* are in scope, compared by material and use. Brand lists are out | Owner clarification (R12) |
| 2026-09-26 | Families now include **locating & alignment** (kinematic couplings, elastic averaging, locators) and **springs / energy storage** | Suggested by run 1 (`research/prior-art/summary.md` 2.22-2.23), approved by owner (R13) |
| 2026-09-26 | The project's own content will be licensed **CC BY-SA** (version to confirm when publishing; 4.0 matches Wikipedia) | Lets entries reuse Wikipedia text, most Wikimedia Commons media and WikiHouse material with credit. Non-commercial sources (gm0, DT Online, Gros, Wolfram demos) are linked, not copied (R14) |
| 2026-09-26 | Joinery for CNC, laser cutting, woodwork and sheet metal is a full family from day one, still ranked last by making method | Owner clarification (R15). Run 1 covered Japanese and digital (CNC) wood joints, laser-cut joint research and Boxes.py, but not Western woodworking joint references or sheet-metal and laser-cut design guides; a small top-up of run 1 can fill that |
| 2026-09-26 | Working title: *The Encyclopaedia of Connections* (British spelling). Repo, file names and other docs keep "Encyclopedia" for now | Owner (R16). Final name and domain still open |
| 2026-09-26 | Run 2 outline: 274 types in 3 priority tiers (tier 1 = unusual and 3D-printable or robotics, 142 items; tier 2 = other unusual, joinery last; tier 3 = one baseline per family) | Owner confirmed (R18). Research order = priority, so stopping early still covers what matters most |
| 2026-09-26 | Families are now 25: added **seals & pass-throughs** and **brakes, dampers & speed control**; renamed sliding (…& linear motion), magnetic (clamping, magnetic & friction), cord (…webbing & textile hardware), springs (& energy storage) | The `seal` finder field had no entries that seal; brakes and dampers had no home (web-search pass). Owner confirmed |
| 2026-09-26 | 14 new fields (41 in all), merged into `research/fields/connection-types.fields.yaml`; existing fields and allowed values unchanged. New finder fields: `job`, `holding_principle`, `input_output`, `play_and_precision`, `access_needed`, `print_in_place`, `materials`, `maker_difficulty` | `job` and `holding_principle` come from run 1's best classification ideas (by job; form-fit / force-fit / material bond) and answer the flow chart's first questions. Owner confirmed |
| 2026-09-26 | Research rules live in `fields.yaml` (`research_rules`): no unofficial copies of in-copyright books; Printables links not opened must say so; vendor-blog numbers need a second source | Problems found in agents' reports during batches 1-2 (see `research/connection-types/review-notes.md`) |
| 2026-09-29 | Items added after run 2's first pass are appended as 275-299 (tier 1 types first, then tier 2, joinery last) instead of being slotted into the tiers | Keeps existing item numbers, report anchors and result file names unchanged |
| 2026-09-29 | ~~Single fluid-power components (check valve, soft pneumatic actuator, pneumatic muscle, iris valve) are in scope; hydraulic and pneumatic *circuits* stay out~~ Superseded 2026-09-30 by the new family below | The second half was an assumption, not the owner's answer |
| 2026-09-30 | Families are now 26: added **hydraulics, pneumatics & vacuum** (*Moves, holds or lets go using air or liquid pressure, or suction*), placed last so the existing report pages keep their numbers. Items 283, 288 and 289 moved into it; 12 researched entries list it in `other_families`. The fixed `job` options stay as they are for now | Owner (R20). Suction is in the name because beginners don't think of suction as pneumatics; changing `job` would make the 275 finished entries inconsistent, so it is left for run 3 to revisit |
| 2026-10-03 | **Scope test:** connection *types* are in scope whatever the trade they come from, including standard hardware, electrical connections, heat joining, knots and sewing. Out: size and part-number catalogues, whole machines and systems, making processes that don't join, projectile launchers, and medical use | Owner (R22). Run 3's forum check and the owner's own examples (wire joints, jubilee clips, sewing a part on) showed the old exclusions left out connections makers ask about |
| 2026-10-03 | **Medical rule:** ideas from any field, medicine included, are in scope as connection types, described for non-medical maker use. Out of scope is guidance on using them on or in people for medical purposes. Where a maker version could be mistaken for a medical one, the entry carries a safety note | Owner (R22): don't lose medical ideas that makers can repurpose (Luer locks, syringe pumps, prosthetic linkages are already in) |
| 2026-10-03 | Families are now 31: added **electrical connections** (*Joins wires, or connects them to boards, batteries and devices*), **everyday fasteners & fixings** (*Screws, nails, pins, wall plugs and other hardware-shop fixings*), **knots, lashings & sewn joints** (*Tied, lashed, spliced or sewn with cord or thread*), **adjusters, levellers & spacers** (*Sets, fine-tunes or levels a position, height or gap, then holds it*) and **welding, brazing & soldering** (*Joins by melting: welds, brazes, solders and heat seals*), placed last so existing report pages keep their numbers. The cord family keeps its key; its label is now *Hardware for rope, cord, straps, fabric and leather*. Item 129 *Eccentric adjuster* moved into the adjusters family; 22 researched entries list a new family in `other_families` | Owner (R22), on the scope searches' advice: each new family shares one job and its own choice questions, and spreading these types over existing families would bury them (e.g. nails beside magnets). Pipe joints stay in *seals & pass-throughs* and mounting standards in existing families, because new families there would mean moving researched entries for few new ones |
| 2026-10-03 | Items 324-409 are numbered in research priority (the five baselines, then tier 1, then tier 2), like the earlier additions | `/research-deep` works top to bottom, so the most useful entries are done first if a run is cut short |
| 2026-10-03 | The 15 fixed `job` options stay. Electrical entries use existing options, and the finder gets a new first-question answer, "Connect wires or power", routed by family. No `electrical_rating` or `fits_standard` field: ratings go in `load` with a fixed lead-in, standards in aliases and text | Owner (R22). A new option or field would change what all the finished entries were written against (the validator needs every field in every file) |
| 2026-10-03 | The R22 notes additions to already-researched entries (about 70) are applied in an update pass after items 324-409 are researched, not added to the outline now | The report shows outline notes as "Also covers"; adding them first would claim content the entries don't have yet |
| 2026-10-06 | Keep the extra `other_families` the research agents added on 2026-10-05: *Castor* (brakes, dampers & speed control), *Multi-point bolt* (motion conversion; over-centre, toggle & cam clamps), *Threaded rod and studs* (adjusters, levellers & spacers) | Owner (R23). Each fits: locking castors brake, an espagnolette turns a handle into sliding rods, and threaded rod is often an adjustable spacer |
| 2026-10-06 | An entry tagged with the electrical family that holds or routes wires but carries no current (e.g. *Binding knots and seizings*, for cable lacing) starts its `load` with 'Electrical: not a conductor' | Owner (R23). Keeps cable lacing findable under electrical without a misleading current band; added to the research rule in `fields.yaml` |
| 2026-09-29 | How `/research-deep` runs are driven: validate each agent's JSON files and commit and push them as soon as the agent finishes; after a usage-limit cut-off, keep files that validate and whose `uncertain` list matches their `[uncertain]` markers, and relaunch only unfinished items; collect agents' warnings in `review-notes.md` | The usage limit cut run 2 off six times; this lost no finished work. Written into the "Continuing run 2" prompt |
| 2026-09-26 | The run 2 report drops unverified *sentences or list items* (marked `[uncertain]`), not whole fields; `--strict` gives run 1's behaviour | About 7 of 41 fields per entry carry a marker, often on one claim only; dropping whole fields would lose about a sixth of the content |
| 2026-09-25 | Added a `special_behaviour` finder field (torque-limiting, self-locking, hand-release only, one-way, indexing, over-centre, …) and a `complexity` field | These behaviours are central to the scope and are what makers would search for |
| 2026-09-25 | Research recommends the final format (static site vs markdown, etc.) | Owner has no preference yet. A free static host is the working assumption |
| 2026-09-25 | Priority order for making methods: 3D printing, then robotics/mechanisms, then everyday hardware | Owner preference |
| 2026-09-25 | ~~The `dev-tools@jezweb-skills` plugin is used for research~~ Superseded below. The plugin stays enabled for its other tools | |
| 2026-09-25 | Research uses **Weizhena/Deep-Research-skills**, copied into `.claude/skills/` with local path fixes (see `.claude/skills/research/VENDORED.md`) | It researches a list of items against a fixed set of fields and writes one validated JSON file per item. That's the shape of an encyclopedia and the data the finder will filter. `dev-tools:deep-research` is aimed at software product discovery |
| 2026-09-25 | Starting fields are defined in `research/fields/*.fields.yaml`. The finder attributes (`motion`, `removability`, `reuse_cycles`, `tools_needed`, `seal`, `load`, `adjustable`, `processes`) use fixed answer options | These become the flow-chart filters |
| 2026-09-25 | A SessionStart hook in `.claude/settings.json` installs `pyyaml` | The research validator needs it |
| 2026-10-03 | The finder is tested by scripts in `research/finder-test/` (`normalise.py`, `tags.py`, `tree.py`, `gen_docs.py`); the flow charts and the list of every path are generated from the tested tree. Re-run them whenever the data or the questions change | Keeps the charts and the "3-10 entries, no dead ends" check true as entries are added |
| 2026-10-03 | Reddit is read through the public Arctic Shift archive API, citing both the reddit.com link and the archive address actually read | reddit.com returns 403 in cloud sessions. The owner set up a self-hosted Redlib front end, but it is reachable only on the owner's private network (tailnet), not from cloud sessions |
| 2026-10-03 | **Proposed, awaiting owner (P1):** finder asks the job first (9 plain answers), then 1-3 branch questions, then a shortlist with a tick-box panel showing counts and greying out empty options; "I'm not sure", Back and a search box throughout | Tested on all 323 entries: 115 paths, all 3-10 entries, none unreachable; 25 real forum questions: 17 reach a good answer, 7 partly, 1 out of scope (`research/flowchart-and-format.md` 1.2-1.7) |
| 2026-10-03 | **Proposed (P2):** keep the 15 fixed `job` options; question 1 groups them into 9 answers | Answers the point left open on 2026-09-30: all 27 fluid-power entries are reachable without a new option |
| 2026-10-03 | **Proposed (P3):** Phase 1 starts by making every finder field a fixed choice, and adding `connects`, `power_source`, `power_loss`, `motion_in`/`motion_out`/`shaft_layout`, `overload_response`, `clicks`, glue traits and materials, and `usual_process` | 83 of the finder's 153 answers currently rely on draft tags worked out from entry names; `load`, `tools_needed` and others are free text; `processes` lists every possible method, so it can't narrow anything |
| 2026-10-03 | **Proposed (P4-P6):** site built with Astro + Starlight + Pagefind on GitHub Pages; one Markdown file per entry (front matter for finder and media, prose under fixed headings) made from the JSON by a script, JSON kept as the research record; finder is a plain-JavaScript page over generated `finder.json` and `finder-tree.json`, with the path test in CI | Astro reads one file per entry and checks it against a schema; Material for MkDocs is in maintenance mode; Netlify's free plan is too tight; Markdown entries also read well on GitHub (`research/flowchart-and-format.md` section 3) |
| 2026-10-03 | **Proposed (P7-P9):** copy (not hotlink) public-domain, CC0, CC BY and CC BY-SA images with title, author, source and licence; CC BY-ND only unchanged; NonCommercial and all-rights-reserved material linked only. Diagrams as SVG per entry (CSS/SMIL animation), Mermaid, OpenSCAD, video loops instead of GIFs; link out to linkage simulators. Publish the 107-term glossary with first-use links | CC FAQ: NC works can't go into a collection licensed for commercial reuse; Commons advises against hotlinking; a GIF is several times larger than the same WebM/MP4 |

---

## 4. Roadmap

### Phase 0 — Research
- [x] Choose the research tool and set it up (Weizhena/Deep-Research-skills, copied into the repo)
- [x] **Run 1: prior art.** Existing encyclopedias, wikis, digital libraries, repos and books → `research/prior-art/`, including `summary.md` with a merged list of type names (54 collections done 2026-09-25; 6 joinery items added 2026-09-26)
- [x] **Run 2:** connection & mechanism types (150+, unusual first, starting from run 1's list) → `research/connection-types/` (409 types in 31 families, 41 fields each; first 274 done 2026-09-29, then 275-323 on 2026-10-02 and 324-409 on 2026-10-05)
  - [x] Research the items added on 2026-09-29 and 2026-09-30 (items 275-323, R19 and R20) and regenerate the report (done 2026-10-02)
  - [x] Widen the scope (R22): six web searches; 86 types and five new families added to the outline as items 324-409 (done 2026-10-03)
  - [x] Research items 324-409 and regenerate the report (31 family pages) (done 2026-10-05)
  - [x] Update pass: apply the R22 notes additions and the agents' cross-links to the researched entries (96 entries; `update-pass-2026-10-06.md`) (done 2026-10-06)
  - [x] Re-test run 3's finder tree (`research/finder-test/`) with the new families: 140 paths, all 3-10 entries, none unreached (done 2026-10-06)
- [ ] Review run 2 with the owner. Confirm the families and fields
- [x] **Run 3:** flow-chart questions, glossary, format/tech recommendation → `research/flowchart-and-format.md` (done 2026-10-03; test scripts in `research/finder-test/`)
- [ ] Owner reviews run 3's proposals P1-P9 (`research/flowchart-and-format.md` section 4)
- [ ] Expand families where there are gaps (`research/prompts/expand-a-family.md`)

### Phase 1 — Content skeleton
- [ ] Settle the entry format (fields every entry has). Proposed: one Markdown file per entry with front matter (P5)
- [ ] Make every finder field a fixed choice and add the new finder fields (P3); a script proposes values, then check them family by family
- [ ] Write the JSON → Markdown conversion script (drops `[uncertain]` sentences from the page, keeps them in the JSON)
- [ ] Create entries from the taxonomy, each with plain name, proper term, aliases, short description, attributes, and links to outside resources with images
- [ ] Glossary page (107 terms) with first-use links from entries (P9)

### Phase 2 — Flow chart / finder
- [ ] Turn the flow-chart questions into a working guided finder (static and free to host). Proposed: plain JavaScript over `finder.json` and `finder-tree.json` (P6)
- [ ] Every answer path ends on a shortlist of entries (tested in the draft: 115 paths, all 3-10; keep the test in CI)

### Phase 3 — Publish
- [ ] Host the site (e.g. GitHub Pages) and add a contribution guide. Proposed: Astro + Starlight + Pagefind on GitHub Pages (P4)
- [ ] Add a LICENSE file (CC BY-SA for content; a code licence still to choose)

### Phase 4 — Diagrams & animations
- [ ] Simple diagrams (SVG) for each entry, starting from each entry's `diagram_idea` (P8)
- [ ] Animations for moving connections (hinges, linkages, compliant mechanisms, …): CSS/SMIL on SVG, or OpenSCAD frames as WebM/MP4

---

## 5. Research runs

| Run | Prompt | Skill | Output | Status |
|-----|--------|-------|--------|--------|
| 1 | `research/prompts/01-prior-art.md` | `/research` → `/research-deep` → `/research-report` | `research/prior-art/` (`outline.yaml`, `fields.yaml`, 54 `results/*.json`, `report.md`, `summary.md`) | Done 2026-09-25; joinery top-up 2026-09-26. 60 of 60 items researched and validated (34 fields each) |
| 2 | `research/prompts/02-connection-types.md` | `/research` → `/research-deep` → `/research-report` | `research/connection-types/` (`outline.yaml`, `fields.yaml`, `outline-notes.md`, `preferred-sources.md`, `review-notes.md`, `results/*.json`, `generate_report.py`) | **Done again 2026-10-05: 409 of 409 items researched and validated in 31 families.** The 86 items added with the wider scope on 2026-10-03 (R22, items 324-409, five new families, `scope-search-2026-10-03-*.md`) were researched on 2026-10-05 (about 23 sources each; on average 4.7 of 41 fields carry an `[uncertain]` marker); the usage limit stopped the run once and it resumed after the reset. Report: 31 family pages. Earlier: Done 2026-10-02. **323 of 323 items researched and validated** in 26 families (41 fields each; about 24 sources per entry): 274 by 2026-09-29, then 25 added on 2026-09-29 (items 275-299, `gap-search-2026-09-29.md`) and the new *hydraulics, pneumatics & vacuum* family on 2026-09-30 (items 300-323, `fluid-power-search-2026-09-29.md`), researched 2026-09-29 to 2026-10-02. Report: `research/connection-types/report.md` (index; contents show family, special behaviour and motion) + `report/` (26 family pages). Unverified sentences (marked `[uncertain]`, on average 6 of 41 fields per entry) are left out of the report but kept in the JSON. Fixes needed before publishing are in `review-notes.md`. The usage limit cut agents off six times by 2026-09-29, and on 2026-10-02 the owner paused the run before the limit and it resumed after the reset; each time, files the agents had already written were checked and only unfinished items were relaunched |
| 3 | `research/prompts/03-flowchart-and-format.md` | normal session (3 web-research agents: forum questions, selection tools, site tech) | `research/flowchart-and-format.md`, `research/finder-test/` (scripts, `paths.md`, `mermaid.md`) | Done 2026-10-03. Finder tested on all 323 entries: 115 answer paths, all ending on 3-10 entries (5.9 on average), none unreachable; 25 real forum questions checked against it (17 good, 7 partly, 1 out of scope). 107-term glossary. Recommends Astro + Starlight + Pagefind on GitHub Pages. Proposals P1-P9 wait for the owner. Re-tested 2026-10-06 with all 409 entries: a tenth first answer for electrical connections and a few new questions give 140 paths, all 3-10 entries, every entry reachable; the 11 charts were regenerated and render |

---

## 6. Open questions
- Domain for the published site? (Working title: *The Encyclopaedia of Connections*; no final name or domain yet)
- Run 3's proposals P1-P9 (`research/flowchart-and-format.md` section 4): agree, change or reject each
- Licence for the site's code (scripts, finder, layouts)? CC BY-SA covers content only; MIT is the usual choice for code
- Who checks the new finder tags (about 10 values for each of 409 entries)? A script can propose them; each family needs a review

---

## 7. Session log

| Date | Summary |
|------|---------|
| 2026-09-25 | Project set up. Added this plan, the research prompts, `CLAUDE.md`, and plugin settings |
| 2026-09-25 | Switched research to Weizhena/Deep-Research-skills (copied into `.claude/`, paths patched, maker search module added). Added the field definitions in `research/fields/` and rewrote the prompts as runs 1–3 plus expand-a-family. skills.sh itself is blocked by this environment's network policy, so it was searched via web search and GitHub |
| 2026-09-25 | Owner set priority (prior art first) and scope (unusual/clever types that act as one unit, not standard hardware). Run 1 became `01-prior-art.md`. Run 2 and the field lists were refocused, adding `special_behaviour` and `complexity` |
| 2026-09-25 | Owner confirmed powered connectors and gear trains/gearboxes are in scope. Updated Scope, prompts 01/02, and fields (`power`) |
| 2026-09-25 | Split each research prompt file into a "For you" section (steps, what to expect) and a copy-able prompt box, at the owner's request. The prompt now starts with the skill command |
| 2026-09-25 | Ran run 1 (prior art). Outline of 54 collections with 34 fields (15 new fields merged into `research/fields/prior-art.fields.yaml`); owner added adhesive types to scope (R12). 27 research agents wrote and validated 54 JSON files; `report.md` generated (TOC shows resource_type, scope_match, reusable_data). `summary.md` covers the top 10 collections, a merged type list in 21 families plus 2 suggested ones, classification schemes and flow-chart ideas, and licensing. Environment note: network access had to be widened for the agents; github.com pages stay blocked (READMEs read via raw.githubusercontent.com), and some sites (Zhihu, Wayback Machine, Printables web, Xometry) could not be opened, so those facts are marked `[uncertain]` |
| 2026-09-26 | Owner approved the two extra families (R13) and chose CC BY-SA for the project's content (R14). Updated decisions, run 2 prompt family list, summary.md and next action |
| 2026-09-26 | Owner put CNC / laser / woodwork / sheet-metal joinery in scope from day one (R15) and set the working title (R16). Updated Priorities, open questions, decisions and the run 2 prompt |
| 2026-09-26 | Topped up run 1 with 6 joinery items (woodworking books and web guides, knock-down connectors, sheet-metal, laser-cut and CNC guides) via `/research-add-items` and 3 agents; all 60 results validate. Rebuilt `report.md`; `summary.md` now has a full joinery family (2.20: woodwork, knock-down, CNC, laser-cut and sheet-metal joints), extra joinery sources, schemes and licences, and the remaining joinery gaps |
| 2026-09-26 | Merged the two prompt-layout commits left on `claude/confident-bardeen-mru9m6` (resolved conflicts in PROJECT.md and the run 2 prompt, keeping the new layout and this session's scope changes). Opened PR #2 to bring everything into `main`; run 2 should start in a new session from `main` after it merges |
| 2026-09-26 | Started run 2 on `claude/nice-knuth-wo4ou5`. `/research` built the outline from run 1's type list plus one web-search pass (98 pages; added seals, brakes, linkage ends, tube and extrusion fixings and more): 274 types, 25 families, 41 fields; owner confirmed. `/research-deep` batches 1-3 done (54 items, all validated, pushed after each batch); batch 4 was cut off by the usage limit and relaunched. Agents' problems are collected in `review-notes.md`; research rules tightened after batch 2. Report generator written |
| 2026-09-27 | Run 2: tier 1 complete (items 1-142, plus 143-144). Interim report generated and split into an index plus 25 family pages (a single file would be over 3 MB). Outline descriptions of *Constant-force spring* and *Linear ratchet* corrected after the agents found errors. More research rules: each agent keeps its files in its own scratchpad subfolder |
| 2026-09-27 | Run 2 continued: batches 4-6 done (108 of 274 items; tier 1 is items 1-142). The usage limit stopped the agents twice; each time the cut-off batch was relaunched (no partial files). New research rules: no personal details in requests (an agent had put part of the owner's email username in a User-Agent header; nothing was stored), and check every number against the raw page text (a WebFetch summary had invented figures) |
| 2026-09-27 | Run 2 continued to 202 of 274 (tier 2: tube and panel fixings, dampers, brakes, gears and linkages). The commit script now commits every valid file after each agent finishes, so progress survives a cut-off; some files were first committed as drafts and updated later |
| 2026-09-29 | Run 2 finished: all 274 items researched and validated (the last 72 after two more usage-limit cut-offs; files written before each cut-off were checked and kept). Fixed two entries whose `uncertain` lists missed marked fields. `/research-report` regenerated the report (index + 25 family pages; contents show family, special behaviour and motion). `review-notes.md` now also lists tier 2 and 3 findings: conflicting figures, errors in sources, naming clashes and manufacturer data sheets read from distributor sites. Removed two stray error-page files from the repo root and opened PR #3; the owner merged it into `main` the same day |
| 2026-09-29 | `/research-add-items` on run 2 (R19): added the three items the agents had suggested, then one web-search agent looked for gaps (Wikipedia mechanism categories, Thang's index PDFs, *507 Mechanical Movements*; each candidate checked against all 274 result files). Owner chose all 22 of its suggestions plus three notes additions (pinch valve, festoon cable system, twistlock) and no *Motion conversion* baseline. Outline now 299 items; the search results and rejected near-misses are saved in `research/connection-types/gap-search-2026-09-29.md` |
| 2026-09-29 | Owner merged PR #4 (PROJECT.md fix and the 25 new outline items). Saved the prompt for researching items 275-299 as "Continuing run 2" in `research/prompts/02-connection-types.md`, recorded how `/research-deep` runs are driven (Decisions), and added a review note on *Self-tapping screw into plastic*. The helper scripts used to drive agents in this session lived only in the session's scratchpad and aren't needed: the prompt describes the steps |
| 2026-09-29 | Corrected 2026-10-03: this session opened PR #5 (the saved prompt and notes) at 10:20 UTC, but an interrupted turn hid that from it, so it later opened PR #6 for the follow-up. Separately, the owner started a new session with the "Continuing run 2" prompt (10:22-10:39 UTC). That session added a research rule to `fields.yaml` pointing agents for items 275-299 to `gap-search-2026-09-29.md`, started agents for items 275-292, and stopped after one entry, *Iris valve* (item 275). This session checked that file (validates, 41 fields, 29 sources, `uncertain` list matches its markers) and committed it |
| 2026-09-30 | Checked with the owner that every question asked in this session had a recorded answer. The only open point was run 1's rule that hydraulic and pneumatic circuits are out of scope (my earlier decision entry had assumed it still held). Owner chose a new family (R20): a web-search agent found 24 types for it (Wikipedia fluid-power categories, Thang's hydraulic, pneumatic and pump sections, maker sources, HSE safety guides), all added as items 300-323; 283, 288 and 289 moved in; 12 researched entries tagged. Search results and near-misses saved in `research/connection-types/fluid-power-search-2026-09-29.md`; research rule, preferred-sources pointer, review notes (family safety box, `job` field) and the "Continuing run 2" prompt updated |
| 2026-10-02 | Run 2 finished. A separate session the owner started with the "Continuing run 2" prompt (09:04-10:40 UTC) and researched items 276-311 and 315, then paused at the owner's request before the usage limit. This session was scheduled (at the owner's request) to resume at 8:45pm the owner's time (UTC+7, 13:45 UTC) after the reset; it checked item 315 (complete, kept) and researched the last 11 items (312-314, 316-323). All 323 entries validate, every `[uncertain]` field is listed in its `uncertain` array, and families match the outline. `/research-report` regenerated the report (323 items, 26 family pages; the new family's page is the largest at about 760 KB). Review notes added for items 316-323 and the *Anti-twister* entry |
| 2026-10-03 | Owner saw several days missing from this session's chat; they reappeared after the next message, so it was a display problem in the app, not lost work. While checking the session records, found that the work of 29 Sept (10:22-10:39 UTC) and 2 Oct (09:04-10:40 UTC) ran in separate sessions the owner started with the "Continuing run 2" prompt, and corrected the two session-log entries above that called those sessions copies of this one |
| 2026-10-03 | Run 3 (R21) in this session. Normalised the finder fields of all 323 entries and tested question trees against them with scripts (`research/finder-test/`): the first draft (job, then one question) had 66 paths, 32 of them over 10 entries; the final tree has 115 paths, all ending on 3-10 entries (5.9 on average), every entry reachable. Three web-research agents collected 25 real forum questions (Reddit read through the Arctic Shift archive, since reddit.com is blocked and the owner's tailnet-only Redlib can't be reached from cloud sessions), 20 selection tools, and current facts on site generators, hosting, finder libraries, diagram tools and image licensing. The forum check led to five tree fixes; final result 17 good, 7 partly, 1 out of scope, plus a list of gap types. Wrote `research/flowchart-and-format.md` (finder design and test, 9 generated Mermaid charts checked by rendering, forum check, tools to borrow from, 107-term glossary, format and tech recommendation, proposals P1-P9). Pushed a draft first while the forum agent was still running, then the finished version |
| 2026-10-03 | R22 in this session. The owner asked how far the scope could go (electrical wire joints and jubilee clips were missing), then about medical ideas; the scope test and a reworded medical rule were recorded, with two research rules. Six web-search agents, one per near-scope group, checked candidates against all 323 result files; the usage limit stopped all six once, and after the reset they were relaunched with a rule to save their findings as they went. One combined list went to the owner, who confirmed all of it: 86 types (items 324-409), five new families, a finder answer for electrical entries, no new `job` option or field. Outline (409 items, 31 families), five more research rules, the "Continuing run 2" prompt, outline notes, preferred sources and review notes updated; item 129 moved and 22 researched entries tagged; the six search write-ups and the combined list saved as `research/connection-types/scope-search-2026-10-03-*.md`. The 323 existing result files still validate. Opened PR #8 (run 3 and R22) into `main` at the owner's request |
| 2026-10-05 | Run 2 continued for items 324-409 (R22). After the owner cleared the chat, the "Continuing run 2" prompt in this session researched items 324-368 and 372-377 in three batches, committing each agent's files as it finished, until the usage limit stopped it at 08:52 UTC. After the reset (12:00 UTC) the session picked up the run: item 369, written seconds before the cut-off, validated and was kept; the other 34 items (370-371, 378-409) were researched by 12 more agents, starting new ones as slots freed. Every agent's flags went into `review-notes.md` (conflicting figures recorded side by side, sources read from copies, blocked sites, three `other_families` choices for the owner, one unconfirmed quote in the rope scope-search file, and a lead-in convention for non-conducting entries tagged electrical). All 409 entries validate, families match the outline and every `[uncertain]` field is listed. The report generator's file-name rule kept accented letters, so item 400 (*crémone*) didn't find its file; it now uses the same rule as `/research-deep`. Report regenerated: 409 items, 31 family pages (largest about 760 KB). Opened PR #9 into `main` |
| 2026-10-06 | Owner merged PR #9; the branch was moved up to `main`. R23 in this session. The owner chose the update pass, kept the agents' three extra `other_families`, and allowed 'Electrical: not a conductor' as a rating lead-in (now in the research rule). The plan `update-pass-2026-10-06.md` listed 96 researched entries in six groups, with the notes from the six R22 scope searches and the cross-links the research agents had suggested. Six update agents re-opened each source before adding it: 56 entries gained sourced content, 39 got cross-links only, and one was already covered. Drafts were pushed while the agents worked. Each group's outline notes and review notes were added as it finished, including a few corrections (barrel-plug keying, the solvent-welding claim, a stale tensegrity clause, link labels put inside a URL, an unconfirmed Animated Knots quote in the rope scope-search file). Links were trimmed back to five where two entries gained a sixth. Meanwhile the finder was re-tested on all 409 entries: the old tree left 11 paths too big and 2 entries unreached. After a tenth first answer (*Connect wires or power*) and new questions for welding, knots, mounts, adjusting and pipes, it has 140 paths, all 3-10 entries, every entry reachable. `flowchart-and-format.md` sections 1.2, 1.4 and 1.6 were updated and all 11 charts render. All 409 entries validate. Report regenerated. Opened PR #10 into `main` |
