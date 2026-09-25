# Run 3: flow chart, glossary & format

**How to run:** after run 2 has produced `research/connection-types/results/`, start a
Claude Code session on this repo and paste the block below the line. This is a normal
session. No research skill is needed, because the work is mostly putting together data that
already exists, plus some targeted web searches.

---

Read `PROJECT.md`, `research/connection-types/report.md` (or the JSON files in
`research/connection-types/results/`) and `research/prior-art/summary.md` + `report.md`.
Then produce the following and save it to `research/flowchart-and-format.md`.

## 1. Flow-chart / finder design
- The **questions** that best tell connection types apart, written in **plain language** with
  answer options for each. Start from the finder fields in the data (`special_behaviour`, `power`, `motion`,
  `removability`, `reuse_cycles`, `tools_needed`, `seal`, `load`, `adjustable`,
  `processes`), and add any others the data shows are needed.
- A recommended **question order**, and how each answer narrows the entries. Test it
  against the actual data: every path should end on a useful shortlist of about 3–10 entries, with no
  dead ends. List any entries no path reaches, and any paths that end with too many results.
- Say where a strict decision tree works and where a "tick what applies" filter works better.
- A draft flow chart as a **Mermaid diagram**, at least the top 3–4 levels.
- Search maker forums (r/functionalprint, r/3Dprinting, r/robotics, r/AskEngineers,
  Hackaday) for real **"what is this called?" / "how do I attach X to Y?"** questions. Collect
  10–20 of them with links, and check the flow chart would lead each person to a good answer.
- Look at existing selection charts or decision tools (fastener selectors, joint selectors,
  mechanism finders) and note what to borrow.

## 2. Glossary
50+ beginner terms (degrees of freedom, tolerance, clearance, interference, preload,
compliance, detent, backlash, kinematic coupling, …), each with a one-sentence plain definition.
Take them from the terms that actually appear in the data.

## 3. Format & tech recommendation (short)
How should the encyclopedia be built and hosted **for free**? Compare a static site generator
(e.g. Astro, Eleventy, MkDocs, Docusaurus, Hugo) with plain Markdown on GitHub, and cover:
- a data model (one file per entry, with front-matter attributes the finder filters on;
  can the JSON results convert directly?)
- how to build the interactive finder
- options for the later **diagrams and animations** (SVG, Mermaid, OpenSCAD renders,
  three.js, linkage simulators, Lottie, GIF/WebM)
- **image licensing**: when to link, and when it's OK to embed
Recommend one stack and explain why.

## Finish
Update `PROJECT.md`: record decisions made or proposed, update the roadmap, current phase,
next action, open questions and session log. Then commit and push.
