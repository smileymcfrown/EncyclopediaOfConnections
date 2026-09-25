# Research prompt 01: landscape, taxonomy & flow chart

**How to run:** start a new Claude Code session on this repo, type `/dev-tools:deep-research wide`,
then paste everything below the line as the message.

---

Depth: **wide**. This isn't a software product in the usual sense. It's a **reference
encyclopedia of mechanical connections**. Follow the deep-research workflow, but adapt it
as described below. Where a step in the skill doesn't apply, skip it and say that you did.

## What we're building (one sentence)
A free, beginner-friendly encyclopedia of **every way to connect two parts together**, and
every way to make them turn, slide, flex, lock or adjust. A guided flow chart
leads people to the right options.

## Why / who it's for
Hobbyist makers who do 3D printing, robotics and general tinkering but **aren't
professional engineers**. Their main problem is **not knowing what things are called**. They
can describe what they need ("I want the lid to click shut but come off again") but don't
know terms like *cantilever snap fit*, *bayonet mount*, *living hinge* or *compliant
mechanism*, so they can't search for them. The encyclopedia should translate plain-language
needs into proper terms, then point to good resources that have pictures.

Priority by making method (use this to order everything):
1. **3D printing** (FDM and resin)
2. **Robotics & mechanisms**
3. **Everyday / off-the-shelf hardware**
4. CNC, laser cutting, woodworking joinery, sheet metal: note them, but they're lower priority

## Read first
Read `PROJECT.md` in the repo root. It holds the vision, decisions and roadmap.

## How to adapt the skill's steps
- **Step 2 (Local exploration):** the repo is almost empty and there are no related local
  projects or Basalt Cortex. Skip this beyond reading `PROJECT.md`.
- **Steps 3 and 5 (Web research / Competitors):** here the "competitors" are **existing
  reference resources for mechanical connections and mechanisms**. Examples to check
  (and find more): *507 Mechanical Movements*, Nguyen Duc Thang's mechanism
  animations, BYU Compliant Mechanisms Research, the *Mechanisms and Mechanical
  Devices Sourcebook*, the McMaster-Carr catalogue (a great source of vocabulary),
  snap-fit design guides from plastics makers (e.g. Covestro/Bayer, BASF), fastener and joint
  selection guides, Wikipedia category pages, Printables/Thingiverse/Hackaday collections,
  CAD-vendor and 3D-printing-service design guides (e.g. Prusa, Formlabs, Protolabs,
  Xometry, Hubs), and any existing "mechanism finder" or decision-tree tools. For each one,
  record what it covers, how it's organised, how beginner-friendly it is, whether it has images or
  animations, its license, and **what gap it leaves** for our audience. Skip pricing.
- **Step 4 (Ecosystem/community):** mine r/functionalprint, r/3Dprinting, r/3DPrintingDesign,
  r/robotics, r/AskEngineers, r/MechanicalEngineering, r/Fusion360, Hackaday and similar
  places for **"what is this called?" / "how do I attach X to Y?" questions**. These are
  direct evidence of the terminology gap and should shape the flow-chart questions.
  Collect real example questions.
- **Step 6 (Libraries):** only as it applies to presenting the content (see D below).
- **Step 7 (Platform):** only consider **free static hosting** (GitHub Pages, Cloudflare Pages
  free tier, etc.). No backend is needed at first.
- **Steps 8 and 9 (Future/Technical):** keep these short and focused on part D.

## Deliverables

### A. Resource landscape
A table of the 15–30 best existing resources, sorted by usefulness to our audience,
with URL, coverage, organisation style, images/animations (yes/no), license, and gaps.
Mark which ones are good to **link to from individual entries**.

### B. Taxonomy of connection types (the core of this run)
Aim for **broad coverage: 150+ entries**. Depth per entry comes in later runs.
Group entries into families: fixed/rigid joints, removable fasteners, snap and clip fits,
interference/press fits, threaded, bonded/welded/fused, hinges and pivots, sliders and linear
guides, rotary (bearings, bushings, shafts, couplings), flexures and compliant mechanisms,
linkages, locking/latching/detents, quick-release/tool-free, adjustable/tensioning, sealing
and gaskets, cable/tube/wire connections, and 3D-printing-specific ones
(print-in-place, heat-set inserts, captive nuts, multi-part dovetails, etc.).
Improve these families if the research suggests a better grouping.

For each entry capture:
- `plain_name`: how a beginner would describe it
- `term`: the proper name, plus `aliases` (including regional/industry synonyms)
- `family`
- `one_liner`: plain-English description
- `motion`: none / rotate / slide / rotate+slide / flex / multiple (with degrees of freedom if known)
- `removability`: permanent / semi-permanent / removable / tool-free quick release
- `seal`: none / loose / dust / water / air/pressure
- `load`: light / medium / heavy (a rough guide)
- `adjustable`: yes/no
- `processes`: which making methods suit it (3D print FDM, resin, CNC, laser, woodwork, off-the-shelf)
- `links`: 1–3 good URLs **that show images, diagrams or animations**, preferring resources from part A

### C. Flow-chart / finder design
- The **discriminating questions** (moves? what kind of motion? how often taken apart?
  tools allowed? seal? load? adjustable? size/precision? making method? …), written in
  **plain language**, with the answer options for each.
- A recommended **question order**, and how each answer narrows the taxonomy (map
  answers to the attributes in B). Say where a strict decision tree works and where a
  faceted filter ("tick what applies") works better.
- A draft flow chart as a **Mermaid diagram** covering at least the top 3–4 levels.
- A **glossary** of 50+ beginner terms (DOF, interference, tolerance, clearance, preload,
  compliance, detent, kinematic coupling, …) with one-sentence plain definitions.
- Prior art: existing selection charts or decision tools, and what to borrow from them.

### D. Format & tech recommendation (keep this short)
Recommend how to present this: a static site generator (e.g. Astro, Eleventy, MkDocs,
Docusaurus, Hugo) or plain Markdown on GitHub. Cover the data model (one file per entry with
front-matter attributes that the finder filters on), how to build the finder, and options
for the later **diagrams and animations** (SVG, Mermaid, OpenSCAD renders, three.js,
linkage simulators, Lottie, GIF/WebM). Also cover **image licensing**: when to link and
when it's OK to embed. Recommend one stack and say why.

### E. Plan for follow-up runs
An ordered list of focused research runs (one per family or sub-family) following the
priorities above, each with a one-line scope, so they can be run with
`research/prompts/category-template.md`.

## Research rules
- **Plain English first, proper term in brackets**, every time.
- **Cite everything.** Every entry link must be real and reachable. Visit it, don't guess
  URLs. If something is uncertain, mark it `unverified` rather than inventing it.
- Prefer sources with **images, diagrams or animations**, and note their license.
- Favour sources that stay useful for beginners (design guides, illustrated references,
  videos) over dense standards documents. Still list important standards by name.

## Output
Instead of `.jez/artifacts/`, save to the repo:
1. `research/01-landscape-and-taxonomy.md`: the research brief (sections A–E plus
   Sources). Keep the skill's brief headings where they fit, and replace the
   software-product headings (pricing, app reviews, platform capabilities) with A–E.
2. `research/taxonomy-draft.yaml`: part B as machine-readable YAML using the field
   names above, so it can seed the site's content.

Then **update `PROJECT.md`**: tick the Phase 0 run-01 item, update the research-runs table,
"Current phase", "Next action", open questions and the session log. Commit and push.
