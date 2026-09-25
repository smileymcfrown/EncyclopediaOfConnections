# Encyclopedia of Connections — Project Plan & Status

> This is the single source of truth for what the project is, what has been asked for,
> what has been decided, and where things currently stand.
> **Every working session should read this first and update it before finishing.**

**Last updated:** 2026-09-25
**Current phase:** Phase 0 — Research (run 1 done; run 2 next)
**Next action:** Owner reviews `research/prior-art/summary.md` (especially the type list in section 2 and the two suggested extra families), then run `research/prompts/02-connection-types.md`, starting from that list

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
- **adhesive types**, by material and use (e.g. cyanoacrylate/superglue vs PVA wood glue vs
  two-part epoxy vs contact adhesive vs solvent cement). Types only, not brand lists

**Out of scope (for now):** catalogues of standard hardware (manufacturers' ranges of
screws, bolts, nuts, rivets, etc.), since other resources already cover them, and whole
machines (e.g. a complete robot arm). Components like gearboxes and powered latches are in. Each family may have one generic "baseline" entry (e.g. "ordinary screw joint") so
the flow chart has something to compare against. Standard hardware might be added later.

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
4. *(Later / lower priority)* CNC, laser cutting, woodworking joinery, sheet metal.

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

---

## 3. Decisions

| Date | Decision | Why |
|------|----------|-----|
| 2026-09-25 | The status doc lives in the repo (`PROJECT.md`) | Future Claude sessions can read and update it automatically |
| 2026-09-25 | Research runs in stages: prior art → connection types → flow chart & format, then expand families as needed | One giant run would be shallow on every category and hard to review. Prior art comes first so the catalogue builds on existing collections (R9) |
| 2026-09-25 | Scope is unusual/clever *types* that act as one unit. Standard hardware catalogues and whole machines are out, with at most one baseline entry per family | Owner clarification (R10) |
| 2026-09-25 | Powered/active connectors and gear trains/gearboxes/transmissions are in scope (as types). Added a `power` finder field (passive / powered) | Owner clarification (R11) |
| 2026-09-25 | Adhesive *types* are in scope, compared by material and use. Brand lists are out | Owner clarification (R12) |
| 2026-09-25 | Added a `special_behaviour` finder field (torque-limiting, self-locking, hand-release only, one-way, indexing, over-centre, …) and a `complexity` field | These behaviours are central to the scope and are what makers would search for |
| 2026-09-25 | Research recommends the final format (static site vs markdown, etc.) | Owner has no preference yet. A free static host is the working assumption |
| 2026-09-25 | Priority order for making methods: 3D printing, then robotics/mechanisms, then everyday hardware | Owner preference |
| 2026-09-25 | ~~The `dev-tools@jezweb-skills` plugin is used for research~~ Superseded below. The plugin stays enabled for its other tools | |
| 2026-09-25 | Research uses **Weizhena/Deep-Research-skills**, copied into `.claude/skills/` with local path fixes (see `.claude/skills/research/VENDORED.md`) | It researches a list of items against a fixed set of fields and writes one validated JSON file per item. That's the shape of an encyclopedia and the data the finder will filter. `dev-tools:deep-research` is aimed at software product discovery |
| 2026-09-25 | Starting fields are defined in `research/fields/*.fields.yaml`. The finder attributes (`motion`, `removability`, `reuse_cycles`, `tools_needed`, `seal`, `load`, `adjustable`, `processes`) use fixed answer options | These become the flow-chart filters |
| 2026-09-25 | A SessionStart hook in `.claude/settings.json` installs `pyyaml` | The research validator needs it |

---

## 4. Roadmap

### Phase 0 — Research
- [x] Choose the research tool and set it up (Weizhena/Deep-Research-skills, copied into the repo)
- [x] **Run 1: prior art.** Existing encyclopedias, wikis, digital libraries, repos and books → `research/prior-art/`, including `summary.md` with a merged list of type names (54 collections; done 2026-09-25)
- [ ] **Run 2:** connection & mechanism types (150+, unusual first, starting from run 1's list) → `research/connection-types/`
- [ ] Review run 2 with the owner. Confirm the families and fields
- [ ] **Run 3:** flow-chart questions, glossary, format/tech recommendation → `research/flowchart-and-format.md`
- [ ] Expand families where there are gaps (`research/prompts/expand-a-family.md`)

### Phase 1 — Content skeleton
- [ ] Settle the entry format (fields every entry has)
- [ ] Create entries from the taxonomy, each with plain name, proper term, aliases, short description, attributes, and links to outside resources with images

### Phase 2 — Flow chart / finder
- [ ] Turn the flow-chart questions into a working guided finder (static and free to host)
- [ ] Every answer path ends on a shortlist of entries

### Phase 3 — Publish
- [ ] Host the site (e.g. GitHub Pages) and add a contribution guide

### Phase 4 — Diagrams & animations
- [ ] Simple diagrams (SVG) for each entry
- [ ] Animations for moving connections (hinges, linkages, compliant mechanisms, …)

---

## 5. Research runs

| Run | Prompt | Skill | Output | Status |
|-----|--------|-------|--------|--------|
| 1 | `research/prompts/01-prior-art.md` | `/research` → `/research-deep` → `/research-report` | `research/prior-art/` (`outline.yaml`, `fields.yaml`, 54 `results/*.json`, `report.md`, `summary.md`) | Done 2026-09-25. 54 of 54 items researched and validated (34 fields each) |
| 2 | `research/prompts/02-connection-types.md` | `/research` → `/research-deep` → `/research-report` | `research/connection-types/` | Not started. Ready: start from `research/prior-art/summary.md` section 2 |
| 3 | `research/prompts/03-flowchart-and-format.md` | normal session | `research/flowchart-and-format.md` | Not started (needs run 2) |

---

## 6. Open questions
- Should CNC / laser / woodworking joinery be in scope from day one, or added later? (For now: a short list of interlocking joints only)
- Project name / domain for the published site?
- License for the project's own content (e.g. CC BY-SA)? Run 1 found that the main reusable sources (Wikipedia, most of Wikimedia Commons, WikiHouse) are CC BY-SA, so CC BY-SA is the simplest fit. See `research/prior-art/summary.md` section 4
- Add the two families run 1 suggested (locating & alignment; springs / energy storage), or fold them into others?

---

## 7. Session log

| Date | Summary |
|------|---------|
| 2026-09-25 | Project set up. Added this plan, the research prompts, `CLAUDE.md`, and plugin settings |
| 2026-09-25 | Switched research to Weizhena/Deep-Research-skills (copied into `.claude/`, paths patched, maker search module added). Added the field definitions in `research/fields/` and rewrote the prompts as runs 1–3 plus expand-a-family. skills.sh itself is blocked by this environment's network policy, so it was searched via web search and GitHub |
| 2026-09-25 | Owner set priority (prior art first) and scope (unusual/clever types that act as one unit, not standard hardware). Run 1 became `01-prior-art.md`. Run 2 and the field lists were refocused, adding `special_behaviour` and `complexity` |
| 2026-09-25 | Owner confirmed powered connectors and gear trains/gearboxes are in scope. Updated Scope, prompts 01/02, and fields (`power`) |
| 2026-09-25 | Ran run 1 (prior art). Outline of 54 collections with 34 fields (15 new fields merged into `research/fields/prior-art.fields.yaml`); owner added adhesive types to scope (R12). 27 research agents wrote and validated 54 JSON files; `report.md` generated (TOC shows resource_type, scope_match, reusable_data). `summary.md` covers the top 10 collections, a merged type list in 21 families plus 2 suggested ones, classification schemes and flow-chart ideas, and licensing. Environment note: network access had to be widened for the agents; github.com pages stay blocked (READMEs read via raw.githubusercontent.com), and some sites (Zhihu, Wayback Machine, Printables web, Xometry) could not be opened, so those facts are marked `[uncertain]` |
