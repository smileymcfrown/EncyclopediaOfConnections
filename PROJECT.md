# Encyclopedia of Connections — Project Plan & Status

> This is the single source of truth for what the project is, what has been asked for,
> what has been decided, and where things currently stand.
> **Every working session should read this first and update it before finishing.**

**Last updated:** 2026-09-25
**Current phase:** Phase 0 — Research (not started)
**Next action:** Run `research/prompts/01-resources.md` and/or `research/prompts/02-connection-types.md` (see `research/prompts/README.md`)

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

### Audience
- The project owner, plus other hobbyist makers.
- Assume no engineering vocabulary. Lead with plain English and give the proper term
  (and its aliases) next to it.

### Priorities (by making method)
1. **3D printing** (FDM/resin): snap fits, print-in-place, heat-set inserts, compliant mechanisms, etc.
2. **Robotics & mechanisms**: bearings, shafts, gears, linkages, motor couplings, etc.
3. **Everyday hardware**: off-the-shelf fasteners, clips, hinges, adhesives, etc.
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

---

## 3. Decisions

| Date | Decision | Why |
|------|----------|-----|
| 2026-09-25 | The status doc lives in the repo (`PROJECT.md`) | Future Claude sessions can read and update it automatically |
| 2026-09-25 | Research runs in stages: resources → connection types → flow chart & format, then expand families as needed | One giant run would be shallow on every category and hard to review |
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
- [ ] **Run 1:** existing reference resources → `research/resources/`
- [ ] **Run 2:** connection types (150+, ordered by priority) → `research/connection-types/`
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
| 1 | `research/prompts/01-resources.md` | `/research` → `/research-deep` → `/research-report` | `research/resources/` | Not started |
| 2 | `research/prompts/02-connection-types.md` | `/research` → `/research-deep` → `/research-report` | `research/connection-types/` | Not started |
| 3 | `research/prompts/03-flowchart-and-format.md` | normal session | `research/flowchart-and-format.md` | Not started (needs run 2) |

---

## 6. Open questions
- Should CNC / laser / woodworking joinery be in scope from day one, or added later?
- Project name / domain for the published site?
- License for the project's own content (e.g. CC BY-SA)?

---

## 7. Session log

| Date | Summary |
|------|---------|
| 2026-09-25 | Project set up. Added this plan, the research prompts, `CLAUDE.md`, and plugin settings |
| 2026-09-25 | Switched research to Weizhena/Deep-Research-skills (copied into `.claude/`, paths patched, maker search module added). Added the field definitions in `research/fields/` and rewrote the prompts as runs 1–3 plus expand-a-family. skills.sh itself is blocked by this environment's network policy, so it was searched via web search and GitHub |
