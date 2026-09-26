# Run 2: connection & mechanism types (the core catalogue)

## For you (not part of the prompt)

**Do this after run 1**, because it starts from the list of type names in
`research/prior-art/summary.md`.

**Steps**
1. Start a new Claude Code session on this repo.
2. Copy **everything inside the box** under "The prompt" below.
3. Paste it as your first message and send it.

**What to expect**
- It builds a draft list of 150+ connection and mechanism types (the "items") and the
  details to record for each (the "fields"), then **asks you to confirm or edit them**. Check
  the list carefully. Add types you know about and remove anything out of scope.
- It will ask a few setup questions. The answers are already in the prompt, so just confirm.
- It then researches the types in batches of about 18 and **asks before each batch**. This is a
  big run (about 50 agents in total). The most important types come first, so you can **stop
  after a few batches**, look at the results in `research/connection-types/results/`, and
  carry on later in a new session by typing `/research-deep` (it skips finished items).

## The prompt

```text
/research Types of unusual and clever connections and mechanisms for hobbyist makers

Before building the outline:
- Read PROJECT.md in the repo root, especially the Scope section.
- Read research/prior-art/summary.md and research/prior-art/report.md. The merged list of
  type names in the summary is the starting item list, and the collections found there are
  the preferred sources for links.

Context for building the outline:
- Project: the Encyclopedia of Connections, a free, beginner-friendly reference of the
  TYPES of connections and mechanisms, from simple clever joints up to semi-complex
  mechanisms, as long as each one works as one unit or connector (even if it's made of
  several parts). It's for hobbyist makers (3D printing first, then robotics/mechanisms) who
  don't know the engineering terms. A guided flow chart will later filter entries using the
  finder fields.
- Focus on the unusual and clever. The kinds of thing wanted:
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
  - joinery for CNC, laser-cut sheet, woodwork and sheet metal (in scope from day one, but
    lowest priority by making method)
- Out of scope: catalogues of standard hardware (screw/bolt/nut/rivet ranges, manufacturer
  part lists) and whole machines (e.g. a complete robot arm). Gearboxes and powered latches
  count as components, so they're in. At most, include one generic baseline entry per
  family (e.g. "ordinary screw joint") so the flow chart has something to compare against.
- Items = individual types (not products or brands). Aim for 150+ items. Give each a
  category (its family) and a one-line description. Families to start from (improve them
  using the classification schemes found in run 1):
  torque limiting & slip / one-way & ratchet / self-locking & anti-back-drive /
  tensioning, reels & take-up / over-centre, toggle & cam clamps / locks, latches & catches /
  indexing & detents / quick-release & tool-free (bayonet, twist-lock, quarter-turn,
  push-button) / snap & clip fits / compliant mechanisms & flexures /
  print-in-place & 3D-printing-specific joints / hinges & pivots (unusual variants) /
  sliding & telescoping locks / clutches & couplings / motion conversion (cams, Geneva,
  scotch yoke, linkages) / gear trains, gearboxes & transmissions /
  powered & active connectors / magnetic & friction connections /
  adhesives & bonding (types by material and use) /
  cord, strap & webbing hardware (cam buckles, ladder locks, cord locks) /
  interlocking joints & joinery (dovetail, puzzle, finger, mortise and tenon, Japanese
  joints, knock-down connectors, and joints for CNC, laser-cut sheet and sheet metal:
  tab-and-slot, kerf bending, lanced and folded tabs) /
  locating & alignment (kinematic couplings, elastic averaging, locators) /
  springs & energy storage (constant-force, wave, ortho-planar, gas springs).
  Run 1's research/prior-art/summary.md section 2 already groups the type names it found
  into these families (plus notes on gaps): start from it.
- Order the items list by priority: unusual types that can be 3D printed or are useful in
  robotics come first, then other unusual types, then the generic baseline entries. That way
  the first batches of /research-deep cover what matters most.
- Include variants when a beginner would need to tell them apart (e.g. cantilever vs
  annular vs torsional snap fit; ratchet and pawl vs sprag vs wrap-spring one-way clutch).

Answers to your setup questions:
- Time range: unlimited.
- Existing field definition file: yes, research/fields/connection-types.fields.yaml. Merge
  any extra fields you suggest into it, and keep all of its existing fields and their
  allowed values (the flow chart will filter on them, especially special_behaviour and power).
- Save the outline to research/connection-types/ (topic_slug = connection-types).
- Execution config: batch_size 6, items_per_agent 3.

Research rules:
- Web-search agents should load the maker-mechanical.md module (plus general-web.md if useful).
- Writing style: plain English first, proper term in brackets.
- Only record URLs that were actually opened. Prefer pages with images, diagrams, animations
  or video, especially the prior-art collections from run 1. Mark anything unverified as
  [uncertain].

After I confirm the outline, continue with /research-deep. Commit and push after each batch
so progress isn't lost if the session ends. I may stop after a few batches to review. When
all items are done (or when I ask), run /research-report with family, special_behaviour and
motion in the table of contents.

When done, update PROJECT.md (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push.
```
