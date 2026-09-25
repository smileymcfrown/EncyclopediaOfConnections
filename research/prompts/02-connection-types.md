# Run 2: connection types (the core catalogue)

**How to run:** start a Claude Code session on this repo and paste the block below the line.
Answer the skill's questions as they come up. The suggested answers are in the block.

---

Read `PROJECT.md` first (and `research/resources/report.md` if it exists; prefer those
resources for links), then run:

/research Ways to connect, join, move and adjust parts, for hobbyist makers

Context for building the outline:
- Project: the **Encyclopedia of Connections**, a free, beginner-friendly reference of every way
  to connect two parts, and to make them turn, slide, flex, lock or adjust. It's for hobbyist makers
  who **don't know the engineering terms**. A guided flow chart will later filter these entries
  by questions like: does it move? how? removable or permanent? sealed? load? adjustable?
- **Items** = individual connection types. Aim for **150+ items** for broad coverage. Give
  each item a `category` (its family) and a one-line `description`. Families to start from
  (improve them if research suggests a better grouping):
  snap & clip fits · threaded (screws, bolts, inserts, threads in plastic) ·
  press / interference fits · bonded / welded / fused · hinges & pivots ·
  sliders & linear guides · rotary (bearings, bushings, shafts, couplings) ·
  flexures & compliant mechanisms · linkages · locks, latches & detents ·
  quick-release / tool-free · adjustable & tensioning · seals & gaskets ·
  cable, tube & wire connections · 3D-printing-specific (print-in-place, heat-set inserts,
  captive nuts, printed dovetails, pins/keys, etc.) · woodwork/CNC joinery (a short list
  only, since this is lower priority).
- **Order the items list by priority**: 3D-printing-relevant items first, then robotics and
  mechanisms, then everyday hardware, then woodwork/CNC. That way the first batches of
  `/research-deep` cover what matters most.
- Include variants when a beginner would need to tell them apart (e.g. cantilever vs
  annular vs torsional snap fit; living hinge vs pin hinge vs print-in-place hinge).
- When asked for a time range: **unlimited**.
- When asked for an existing field definition file: **yes, `research/fields/connection-types.fields.yaml`**.
  Merge any extra fields you suggest into it, and keep all of its existing fields and their
  allowed values (the flow chart will filter on them).
- Save the outline to `research/connection-types/` (topic_slug = `connection-types`).
- Execution config: batch_size **6**, items_per_agent **3**.
- Web-search agents should load the `maker-mechanical.md` module (plus `general-web.md` if useful).
- Writing style: **plain English first, proper term in brackets**. Only record URLs that were
  actually opened, and prefer pages with images, diagrams, animations or video. Mark anything
  unverified as `[uncertain]`.

After I confirm the outline, continue with `/research-deep`. I may stop after a few batches
to review. When all items are done (or when I ask), run `/research-report` with **family**,
**motion** and **removability** in the table of contents.

When done, update `PROJECT.md` (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push. Commit after each batch as well, so progress isn't lost
if the session ends.
