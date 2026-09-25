# Research prompt template: one category (focused run)

**How to run:** after run 01 is done and reviewed, copy the block below the line, fill in
the `<…>` placeholders (take the category and scope from section E of
`research/01-landscape-and-taxonomy.md`), start a new session, type
`/dev-tools:deep-research focused`, and paste it in. Save the filled-in copy as
`research/prompts/NN-<category-slug>.md` so there's a record of what was asked.

---

Depth: **focused**. Research one category for the **Encyclopedia of Connections**, a
beginner-friendly reference of ways to connect, move and adjust parts, for hobbyist
makers (3D printing first, then robotics/mechanisms, then off-the-shelf hardware) who
don't know engineering terms.

Read `PROJECT.md`, `research/01-landscape-and-taxonomy.md` and
`research/taxonomy-draft.yaml` first. Skip the skill's local-exploration, competitor-pricing
and platform-capability steps. They don't apply here.

**Category:** <e.g. Snap fits & clips>
**Scope:** <one-line scope from run 01, section E>

## Deliverables
1. **Full list of types in this category.** Go beyond the entries already in
   `taxonomy-draft.yaml`, adding missing types and variants. For each one, fill in every field
   used in the taxonomy (`plain_name`, `term`, `aliases`, `family`, `one_liner`, `motion`,
   `removability`, `seal`, `load`, `adjustable`, `processes`, `links`), plus:
   - `how_it_works`: 2–4 plain sentences
   - `when_to_use` / `when_not_to_use`
   - `making_tips`: practical notes per making method, especially 3D printing
     (orientation, tolerances/clearances, material, layer direction, typical failures)
   - `rules_of_thumb`: key dimensions or ratios from reputable design guides, with the source cited
   - `related`: similar or alternative entries, and how they differ
   - `links`: 2–5 verified URLs with **images, diagrams, animations or video**, each with
     a one-line note on what it shows and its license
   - `diagram_idea`: one sentence describing the simple diagram/animation that would best
     explain it (for Phase 4)
2. **Flow-chart impact:** any new questions or answer options this category needs, and
   where they fit in the finder.
3. **Beginner "what's this called?" examples** from forums that lead to this category.

## Rules
Plain English first, proper term in brackets. Visit every link. Don't invent URLs, and mark
anything uncertain `unverified`. Prefer illustrated, beginner-friendly sources and note
their licenses.

## Output
- `research/NN-<category-slug>.md`: the brief
- Update `research/taxonomy-draft.yaml` with the new and expanded entries for this category
- Update `PROJECT.md` (research-runs table, roadmap, next action, session log), then commit and push
