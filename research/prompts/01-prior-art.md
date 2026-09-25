# Run 1: prior art (existing encyclopedias, wikis, databases & repos). Do this first.

**How to run:** start a Claude Code session on this repo and paste the block below the line.
Answer the skill's questions as they come up. The suggested answers are in the block.

**Why first:** there are already sites, wikis, digital libraries and repos that catalogue
mechanisms and connections. Finding them first means run 2 can build on their lists and
classifications, link to them, and focus on the gaps, instead of starting from nothing.

---

Read `PROJECT.md` first (especially **Scope**), then run:

/research Existing encyclopedias, wikis, databases and repositories of mechanical connections and mechanisms

Context for building the outline:
- Project: the **Encyclopedia of Connections**, a free, beginner-friendly reference of the
  **types** of connections and mechanisms, from simple clever joints up to semi-complex
  mechanisms that act as one unit. It focuses on **unusual and clever ones**, not standard
  hardware: things like torque limiters, ratcheting dial/reel closures (a knob that tightens
  straps, locks, and only releases when turned by hand), self-locking and one-way mechanisms,
  over-centre latches, compliant mechanisms, indexing detents, gear trains and gearboxes,
  and powered connectors (electromagnets, solenoid latches, motorised locks), and so on. It's for hobbyist makers
  (3D printing first, then robotics/mechanisms) who don't know the engineering terms.
- **Items** = existing collections that catalogue or classify many connection or mechanism
  types. Aim for **30–50 items**, in this priority order:
  1. **Encyclopedias, wikis and digital libraries of mechanisms and connections**, e.g. the
     Digital Mechanism and Gear Library (DMG-Lib), Cornell's KMODDL (the Reuleaux kinematic
     models), *507 Mechanical Movements*, Nguyen Duc Thang's mechanism animation collection,
     BYU Compliant Mechanisms Research, Wikipedia/Wikimedia category trees, and any maker or
     engineering wikis. Find more.
  2. **Open repositories and datasets**: GitHub "awesome" lists, CAD/OpenSCAD libraries of
     parametric joints, snap fits, hinges and mechanisms (e.g. BOSL2), and mechanism or joint
     datasets from research papers.
  3. **Books and classification systems**: e.g. *Mechanisms and Mechanical Devices
     Sourcebook*, Artobolevsky's *Mechanisms in Modern Engineering Design*, Reuleaux's
     classification, joint-classification schemes such as the Japanese joinery and digital
     joinery catalogues.
  4. **Design guides and illustrated collections** that cover many types (plastics makers'
     snap-fit guides, 3D-printing service design guides, Printables/Thingiverse/Hackaday
     collections of print-in-place and compliant mechanisms).
  5. **Tools**: any existing "mechanism finder", selection chart or decision tree.
  Deprioritise catalogues of standard hardware (screw/bolt/nut ranges). They're out of scope.
- When asked for a time range: **unlimited** (old references are valuable).
- When asked for an existing field definition file: **yes, `research/fields/prior-art.fields.yaml`**.
  Merge any extra fields you suggest into it, and keep all of its existing fields.
- Save the outline to `research/prior-art/` (topic_slug = `prior-art`).
- Execution config: batch_size **5**, items_per_agent **2**.
- Web-search agents should load the `maker-mechanical.md` module, plus `academic-papers.md`
  for digital libraries and research datasets.
- Only record URLs that were actually opened. Mark anything unverified as `[uncertain]`.

After I confirm the outline, continue with `/research-deep`, then `/research-report`, putting
**resource_type**, **scope_match** and **reusable_data** in the report's table of contents.

Finally, write `research/prior-art/summary.md` covering:
- the 5–10 collections most worth building on, and why
- a merged list of **every connection/mechanism type name found across these collections**
  that fits the Scope in `PROJECT.md`, de-duplicated and grouped. Run 2 will use this as its
  starting item list
- the classification schemes they use, and which ideas suit a beginner flow chart
- licensing: what can be linked, and what (if anything) can be reused

When done, update `PROJECT.md` (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push.
