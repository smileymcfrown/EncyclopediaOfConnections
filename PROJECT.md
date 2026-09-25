# Encyclopedia of Connections — Project Plan & Status

> This is the single source of truth for what the project is, what has been asked for,
> what has been decided, and where things currently stand.
> **Every working session should read this first and update it before finishing.**

**Last updated:** 2026-09-25
**Current phase:** Phase 0 — Research (not started)
**Next action:** Run research prompt 01 (`research/prompts/01-landscape-and-taxonomy.md`) with `/dev-tools:deep-research`

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
| R6 | 2026-09-25 | Write a prompt for `/dev-tools:deep-research` to do the research | Done: `research/prompts/` |

---

## 3. Decisions

| Date | Decision | Why |
|------|----------|-----|
| 2026-09-25 | The status doc lives in the repo (`PROJECT.md`) | Future Claude sessions can read and update it automatically |
| 2026-09-25 | Research runs in stages: one wide landscape/taxonomy run, then focused runs per category | One giant run would be shallow on every category and hard to review |
| 2026-09-25 | Research recommends the final format (static site vs markdown, etc.) | Owner has no preference yet. A free static host is the working assumption |
| 2026-09-25 | Priority order for making methods: 3D printing, then robotics/mechanisms, then everyday hardware | Owner preference |
| 2026-09-25 | The `dev-tools@jezweb-skills` plugin is enabled in `.claude/settings.json` | So every cloud session has `/dev-tools:deep-research` available |

---

## 4. Roadmap

### Phase 0 — Research
- [ ] **Run 01 (wide):** existing resources, full taxonomy of connection types, the questions for the flow chart, format/tech recommendation → `research/01-landscape-and-taxonomy.md` + `research/taxonomy-draft.yaml`
- [ ] Review run 01 with the owner. Confirm the category list and flow-chart questions
- [ ] **Runs 02+ (focused), one per category**, using `research/prompts/category-template.md`. Order is set by run 01 and the priorities above

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

| Run | Prompt | Depth | Output | Status |
|-----|--------|-------|--------|--------|
| 01 | `research/prompts/01-landscape-and-taxonomy.md` | wide | `research/01-landscape-and-taxonomy.md`, `research/taxonomy-draft.yaml` | Not started |

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
