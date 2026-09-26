# Run 1: prior art (existing encyclopedias, wikis, databases & repos)

## For you (not part of the prompt)

**Do this run first.** There are already sites, wikis, digital libraries and repos that
catalogue mechanisms and connections. Finding them first means run 2 can build on their
lists and classifications, link to them, and focus on the gaps.

**Steps**
1. Start a new Claude Code session on this repo (on `main`, once the PR is merged).
2. Copy **everything inside the box** under "The prompt" below.
3. Paste it as your first message and send it.

**What to expect**
- It builds a draft list of collections to research (the "items") and the details to record
  for each (the "fields"), then **asks you to confirm or edit them**. This is your main chance
  to steer. Add any sites or repos you already know about.
- It will ask a few setup questions (time range, field file, batch size). The answers are
  already in the prompt, so just confirm.
- It then researches the items in batches and **asks before each batch**.
- Finished results end up in `research/prior-art/`: one JSON file per collection, a
  `report.md`, and a `summary.md` that run 2 builds on.

## The prompt

```text
/research Existing encyclopedias, wikis, databases and repositories of mechanical connections and mechanisms

Before building the outline, read PROJECT.md in the repo root, especially the Scope section.

Context for building the outline:
- Project: the Encyclopedia of Connections, a free, beginner-friendly reference of the
  TYPES of connections and mechanisms, from simple clever joints up to semi-complex
  mechanisms that act as one unit. It focuses on unusual and clever ones, not standard
  hardware: torque limiters, ratcheting dial/reel closures (a knob that tightens straps,
  locks, and only releases when turned by hand), self-locking and one-way mechanisms,
  over-centre latches, compliant mechanisms, indexing detents, gear trains and gearboxes,
  powered connectors (electromagnets, solenoid latches, motorised locks), and so on.
  It's for hobbyist makers (3D printing first, then robotics/mechanisms) who don't know
  the engineering terms.
- Items = existing collections that catalogue or classify many connection or mechanism
  types. Aim for 30-50 items, in this priority order:
  1. Encyclopedias, wikis and digital libraries of mechanisms and connections, e.g. the
     Digital Mechanism and Gear Library (DMG-Lib), Cornell's KMODDL (the Reuleaux kinematic
     models), 507 Mechanical Movements, Nguyen Duc Thang's mechanism animation collection,
     BYU Compliant Mechanisms Research, Wikipedia/Wikimedia category trees, and any maker or
     engineering wikis. Find more.
  2. Open repositories and datasets: GitHub "awesome" lists, CAD/OpenSCAD libraries of
     parametric joints, snap fits, hinges and mechanisms (e.g. BOSL2), and mechanism or joint
     datasets from research papers.
  3. Books and classification systems: e.g. Mechanisms and Mechanical Devices Sourcebook,
     Artobolevsky's Mechanisms in Modern Engineering Design, Reuleaux's classification,
     joint-classification schemes such as Japanese joinery and digital joinery catalogues.
  4. Design guides and illustrated collections that cover many types (plastics makers'
     snap-fit guides, 3D-printing service design guides, Printables/Thingiverse/Hackaday
     collections of print-in-place and compliant mechanisms).
  5. Tools: any existing "mechanism finder", selection chart or decision tree.
  Deprioritise catalogues of standard hardware (screw/bolt/nut ranges). They're out of scope.

Answers to your setup questions:
- Time range: unlimited (old references are valuable).
- Existing field definition file: yes, research/fields/prior-art.fields.yaml. Merge any
  extra fields you suggest into it, and keep all of its existing fields.
- Save the outline to research/prior-art/ (topic_slug = prior-art).
- Execution config: batch_size 5, items_per_agent 2.

Research rules:
- Web-search agents should load the maker-mechanical.md module, plus academic-papers.md
  for digital libraries and research datasets.
- Only record URLs that were actually opened. Mark anything unverified as [uncertain].

After I confirm the outline, continue with /research-deep, then /research-report, putting
resource_type, scope_match and reusable_data in the report's table of contents.

Finally, write research/prior-art/summary.md covering:
- the 5-10 collections most worth building on, and why
- a merged list of every connection/mechanism type name found across these collections
  that fits the Scope in PROJECT.md, de-duplicated and grouped. Run 2 will use this as its
  starting item list
- the classification schemes they use, and which ideas suit a beginner flow chart
- licensing: what can be linked, and what (if anything) can be reused

When done, update PROJECT.md (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push.
```
