# Research prompts

Research uses the **deep-research skills** copied into this repo from
[Weizhena/Deep-Research-skills](https://github.com/Weizhena/Deep-Research-skills) (see
`.claude/skills/research/VENDORED.md`). They're part of the repo, so any Claude Code session on
this repo has them. Nothing needs installing.

## How the skills work

| Command | What it does |
|---------|--------------|
| `/research <topic>` | Drafts a list of **items** to research and the **fields** to fill in for each. You confirm or edit both. Saves `research/<topic_slug>/outline.yaml` + `fields.yaml` |
| `/research-add-items` | Adds more items to an existing outline |
| `/research-add-fields` | Adds more fields to an existing outline |
| `/research-deep` | Sends out web-search agents in batches. Each writes one JSON file per item to `research/<topic_slug>/results/`, checked against the fields. It asks before each batch, and if it's interrupted, running it again skips finished items |
| `/research-report` | Turns all the JSON files into `research/<topic_slug>/report.md` |

## Run order

| # | Prompt | Skill(s) | Produces |
|---|--------|----------|----------|
| 1 | `01-prior-art.md` | `/research` → `/research-deep` → `/research-report` | Existing encyclopedias, wikis, digital libraries, repos and books that already catalogue mechanisms and connections, plus a merged list of type names to build on |
| 2 | `02-connection-types.md` | `/research` → `/research-deep` → `/research-report` | One JSON file per connection type: the encyclopedia's core data |
| 3 | `03-flowchart-and-format.md` | none (normal session) | Flow-chart questions, draft Mermaid chart, glossary, format/tech recommendation |
| any | `expand-a-family.md` | `/research-add-items` → `/research-deep` | Fills in gaps in one family after reviewing run 2 |

**Do run 1 first.** Run 2 starts from the type names and sources that run 1 finds. Run 3 needs run 2.

**Tip:** `/research-deep` launches one agent for every few items, so a run of 150+ items
is large. The outline is ordered by priority (unusual, 3D-printable and robotics types first), so you can stop after a few
batches, review, and carry on later. It skips anything already done.
