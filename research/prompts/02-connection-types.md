# Run 2: connection & mechanism types (the core catalogue)

**How to run:** after run 1 (prior art) is done, start a Claude Code session on this repo
and paste the block below the line. Answer the skill's questions as they come up. The
suggested answers are in the block.

---

Read `PROJECT.md` first, especially **Scope**. Then read `research/prior-art/summary.md` and
`research/prior-art/report.md`. The merged list of type names in the summary is the
**starting item list**, and the collections found there are the preferred sources for links.
Then run:

/research Types of unusual and clever connections and mechanisms for hobbyist makers

Context for building the outline:
- Project: the **Encyclopedia of Connections**, a free, beginner-friendly reference of the
  **types** of connections and mechanisms, from simple clever joints up to semi-complex
  mechanisms, as long as each one works as **one unit or connector** (even if it's made of
  several parts). It's for hobbyist makers (3D printing first, then robotics/mechanisms) who
  don't know the engineering terms. A guided flow chart will later filter entries using the
  finder fields.
- **Focus on the unusual and clever.** The kinds of thing wanted:
  - a knob that tightens two straps together, locks, and only releases when turned by hand
    (ratcheting dial / reel closure)
  - things that tighten or drive to a set torque, then slip or click (torque limiter, slip
    clutch, torque-limiting cap)
  - things that hold under load but release easily by hand (self-locking, cam cleats,
    over-centre latches)
  - one-way mechanisms (ratchet and pawl, sprag clutch, wrap-spring clutch)
  - indexing detents, bayonet and twist-lock mounts, compliant mechanisms, print-in-place
    joints, and motion converters (e.g. Geneva drive, scotch yoke, cam and follower)
  - gear trains, gearboxes and similar transmissions, as types (planetary, worm,
    strain-wave/harmonic, cycloidal, rack and pinion, belt/chain drives, differentials)
  - powered / active connectors (electromagnets, electro-permanent magnets, solenoid
    latches, motorised locks, shape-memory-alloy latches)
  - adhesive types, by material and use (e.g. cyanoacrylate vs PVA vs two-part epoxy vs
    contact adhesive vs hot melt vs solvent cement). Types only, not brand lists
- **Out of scope:** catalogues of standard hardware (screw/bolt/nut/rivet ranges,
  manufacturer part lists) and whole machines (e.g. a complete robot arm). Gearboxes and
  powered latches count as components, so they're in. At most, include **one generic baseline entry
  per family** (e.g. "ordinary screw joint") so the flow chart has something to compare against.
- **Items** = individual *types* (not products or brands). Aim for **150+ items**. Give each
  a `category` (its family) and a one-line `description`. Families to start from (improve
  them using the classification schemes found in run 1):
  torque limiting & slip · one-way & ratchet · self-locking & anti-back-drive ·
  tensioning, reels & take-up · over-centre, toggle & cam clamps · locks, latches & catches ·
  indexing & detents · quick-release & tool-free (bayonet, twist-lock, quarter-turn, push-button) ·
  snap & clip fits · compliant mechanisms & flexures · print-in-place & 3D-printing-specific joints ·
  hinges & pivots (unusual variants) · sliding & telescoping locks · clutches & couplings ·
  motion conversion (cams, Geneva, scotch yoke, linkages) · gear trains, gearboxes &
  transmissions · powered & active connectors · magnetic & friction connections ·
  adhesives & bonding (types by material and use) ·
  cord, strap & webbing hardware (cam buckles, ladder locks, cord locks) ·
  interlocking joints (dovetail, puzzle, and a short list of woodwork/CNC joinery).
- **Order the items list by priority**: unusual types that can be 3D printed or are useful in
  robotics come first, then other unusual types, then the generic baseline entries. That way the
  first batches of `/research-deep` cover what matters most.
- Include variants when a beginner would need to tell them apart (e.g. cantilever vs
  annular vs torsional snap fit; ratchet and pawl vs sprag vs wrap-spring one-way clutch).
- When asked for a time range: **unlimited**.
- When asked for an existing field definition file: **yes, `research/fields/connection-types.fields.yaml`**.
  Merge any extra fields you suggest into it, and keep all of its existing fields and their
  allowed values (the flow chart will filter on them, especially `special_behaviour`).
- Save the outline to `research/connection-types/` (topic_slug = `connection-types`).
- Execution config: batch_size **6**, items_per_agent **3**.
- Web-search agents should load the `maker-mechanical.md` module (plus `general-web.md` if useful).
- Writing style: **plain English first, proper term in brackets**. Only record URLs that were
  actually opened, and prefer pages with images, diagrams, animations or video, especially the
  prior-art collections from run 1. Mark anything unverified as `[uncertain]`.

After I confirm the outline, continue with `/research-deep`. I may stop after a few batches
to review. When all items are done (or when I ask), run `/research-report` with **family**,
**special_behaviour** and **motion** in the table of contents.

When done, update `PROJECT.md` (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push. Commit after each batch as well, so progress isn't lost
if the session ends.
