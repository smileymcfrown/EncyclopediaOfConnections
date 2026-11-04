# Run 4: materials and one-to-many (R36, R37)

## For you (not part of the prompt)

**Use this** to start Phase 5 after a `/clear` (or in a new session on this repo). The plan, the
owner's answers and everything found so far are in
`research/connection-types/scope-search-2026-10-22-materials-and-one-to-many.md`.

**Steps**
1. Run `/clear` (or start a new Claude Code session on this repo).
2. Copy everything inside the box below, paste it as your first message and send it.

**What to expect:** a long, mostly unattended stage. It researches roughly 40-50 new entries,
adds a "Made of" filter and a one-to-many question to the finder, adds pictures, and ends with one
pull request for you to review. It only stops to ask if something needs your decision.

## The prompt

```text
Continue Phase 5 of the Encyclopaedia of Connections (R36, R37): materials and one-to-many.

Read first, in this order:
1. CLAUDE.md and PROJECT.md (Vision and Scope, Requests R36-R37, Decisions D44-D46, Roadmap
   Phase 5, the latest session-log rows).
2. research/connection-types/scope-search-2026-10-22-materials-and-one-to-many.md: the owner's
   requests verbatim, their answers, what was found, the draft type lists and the plan (section 6).
   The draft lists are starting points from general knowledge, not checked against sources.
3. research/prompts/README.md, research/prompts/02-connection-types.md (incl. "Continuing run 2")
   and .claude/skills/research/VENDORED.md for how research runs work here.

The owner said: do the gap search, research run and finder; do as much as possible without their
input; ask only when a decision is genuinely theirs. Owner's choices: materials in this order:
paper and cardboard, foam, clay and polymer clay, carbon fibre and composites, glass and mirror;
plus one-to-many drives, many-to-one (combining inputs) and paper pop-up mechanisms; the finder
gets a "Made of" filter on every shortlist (not a tree question); distinct types only. Ceramic and
tile, stone, concrete and brick are parked (do not research them).

Work through the plan in section 6 of the scope-search note:
1. Gap search: per material and extra, find the joint types makers use, with sources you open
   yourself; check overlap with the 409 entries (tag existing ones rather than duplicating);
   write the trimmed list as a table in a research/connection-types/scope-search-2026-10-22-*.md
   file (suggestion, sources, new entry or tag existing, family); add the new items to
   research/connection-types/outline.yaml from number 410 (/research-add-items). Use existing
   families where they fit; a new family only if several entries need it, and then update every
   place families are listed.
2. Research run: /research-deep on the new items only (same fields.yaml and research_rules;
   start agents from the pages in the scope-search table). Validate each JSON with
   .claude/skills/research/validate_json.py; commit and push as you go.
3. Pipeline (CLAUDE.md): normalise, research/finder-tags/propose.py, set the 41 hand-set finder
   fields (set_by: hand, R33) for every new entry where they apply, finder test
   (research/finder-test/tree.py: every path 3-10 entries, none unreached, every answer with an
   example), tools/make_entries.py, tools/check_entries.py, tools/export_finder.py, glossary.
4. Finder (D45): a new finder-tag field for the material filter, set for all entries (old and
   new), proposed from the research text and checked by helper agents as in R33 (⚑ where
   unsure); export it in finder.json; a "Made of" row of buttons under each shortlist in
   site/src/components/Finder.astro (with counts and a show-all fallback); a tree answer under
   "Change a movement" for one input driving several outputs and for combining inputs, with a
   direction question; examples for every new answer; the guide page "Driving several things
   from one" on the site.
5. Pictures for the new entries as in R32, R34 and R35: the Find pictures workflow (normal, then
   --wide), helpers choose from contact sheets, Fetch pictures, drawn diagrams and animations,
   renders (tools/renders/) for any still without a photo, listed in the render register.
6. Docs (PROJECT.md: tick Phase 5, requests, decisions, session log; needs-confirming.md;
   READMEs), then one PR for the stage; subscribe to it and drive it to green.

Practical notes from earlier sessions:
- Develop on the branch named in the session's git instructions; if its PR was merged, restart it
  from main. Create the PR only at the end of the stage. Commit messages end with the
  attribution lines the session gives; no model names in commits or PRs.
- Wikimedia blocks this machine: picture search and copying run on GitHub's machines through
  commit-message tags "[find pictures]", "[find photos]" (wide search) and "[fetch pictures]".
  Download workflow artifacts with the GitHub MCP actions_get (download_workflow_run_artifact),
  then curl the URL it returns.
- Openverse runs without an API key (getting one registers an email address; the owner has not
  agreed to that).
- The stop hook asks for a commit and push whenever the working tree is dirty. Have helper agents
  write work in progress in the scratchpad and copy finished files into the repository, or the
  hook fires on every turn while they work.
- Renders: cd tools/renders && npm install; node render.mjs <page> --preview DIR --dry to try a
  model; README there has the kit. Check every picture by eye before it goes on a page.
- Never invent URLs; plain English first with the proper term in brackets; [uncertain] and ⚑ for
  anything not confirmed.
```
