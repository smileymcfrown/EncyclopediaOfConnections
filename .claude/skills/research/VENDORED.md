# Vendored: Deep-Research-skills

The `research`, `research-add-items`, `research-add-fields`, `research-deep` and
`research-report` skills, plus `.claude/agents/web-search-agent.md` and the modules in
`web-search-modules/`, are copied from
[Weizhena/Deep-Research-skills](https://github.com/Weizhena/Deep-Research-skills)
at commit `6ce38f60e3f8b22502c29873f96503a4e0c5addb` (English version, `skills/research-en`).
MIT license, see `LICENSE-deep-research-skills`.

They live in the repo rather than `~/.claude`, so every Claude Code session on this repo
(including short-lived cloud sessions) has them.

## Local changes
- **Paths:** outlines are stored in `research/<topic_slug>/` (not `./<topic_slug>/`), and results in
  `research/<topic_slug>/results/`. The "find the outline" steps look in `research/*/` and ask which
  one to use if there are several.
- **Validator path:** `research-deep` calls
  `python3 "$(git rev-parse --show-toplevel)/.claude/skills/research/validate_json.py"`
  instead of `~/.claude/skills/research/validate_json.py`.
- **Validator:** `validate_json.py` also accepts JSON nested under the category names used in
  this project's `fields.yaml` files (upstream only recognised its own fixed category names).
- **Search modules:** moved from `.claude/agents/web-search-modules/` to
  `.claude/skills/research/web-search-modules/`, so Claude Code doesn't mistake them for agents.
  The agent's instructions point to the new location.
- **New module:** `web-search-modules/maker-mechanical.md` covers design guides, supplier
  catalogues and maker communities for mechanical-connection research, and is wired into the
  agent's module list.

To update from upstream, re-copy the files and re-apply the changes above.
