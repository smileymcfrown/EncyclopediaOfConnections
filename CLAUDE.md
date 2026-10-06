# CLAUDE.md

Encyclopedia of Connections: a beginner-friendly reference covering every way to connect,
move and adjust parts, for hobbyist makers. It includes a guided flow chart for finding options.

- **Read `PROJECT.md` first.** It holds the vision, requests log, decisions, roadmap and
  current status.
- **Update `PROJECT.md` before finishing any session:** log new requests, record decisions,
  tick roadmap items, and update "Current phase", "Next action" and the session log.
- Research prompts are in `research/prompts/` (start with its README), and research outputs go in `research/`.
- Research uses the copied-in deep-research skills (`/research`, `/research-deep`,
  `/research-add-items`, `/research-add-fields`, `/research-report`). See
  `.claude/skills/research/VENDORED.md`. Field definitions are in `research/fields/`.
- The entry pages (`content/entries/`), glossary page and finder data (`content/finder/`) are
  generated: change the research JSON, `research/finder-tags/tags.yaml`, `content/glossary.yaml` or
  `research/finder-test/`, then run `python3 tools/make_entries.py`, `python3 tools/check_entries.py`
  and `python3 tools/export_finder.py`. The site is in `site/` (`npm run build`); see `site/README.md`.
- Anything not yet confirmed stays visible and is marked ⚑ "needs confirming" (`research/needs-confirming.md`).
- Writing style for all content: plain English first, with the proper engineering term in
  brackets. Cite sources, and never invent URLs.
