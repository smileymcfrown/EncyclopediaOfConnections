# Research prompts

Research uses the **deep-research skills** copied into this repo from
[Weizhena/Deep-Research-skills](https://github.com/Weizhena/Deep-Research-skills) (see
`.claude/skills/research/VENDORED.md`). They're part of the repo, so any Claude Code session on
this repo has them. Nothing needs installing.

## How to use these files

Each prompt file has two parts:
- **"For you"**: when to run it, the steps, and what to expect. Don't paste this part.
- **"The prompt"**: the text inside the box. Copy all of it and paste it as the first
  message of a new Claude Code session on this repo.

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
| 4 | `04-materials-and-one-to-many.md` | gap search, `/research-add-items` → `/research-deep`, then pipeline, finder and pictures | New entries for paper, foam, clay, composites and glass, one-to-many and many-to-one drives and paper pop-ups (items from 410); the finder's "Made of" filter (R36, R37). Done 2026-10-22: items 410-452 |
| any | `expand-a-family.md` | `/research-add-items` → `/research-deep` | Fills in gaps in one family after reviewing run 2 |

**Do run 1 first.** Run 2 starts from the type names and sources that run 1 finds. Run 3 needs run 2.

**Tip:** `/research-deep` launches one agent for every few items, so a run of 150+ items
is large. The outline is ordered by priority (unusual, 3D-printable and robotics types first), so you can stop after a few
batches, review, and carry on later. It skips anything already done.

**Items added later:** after `/research-add-items`, use the "Continuing run 2" prompt at the
end of `02-connection-types.md` to research just the new items.
