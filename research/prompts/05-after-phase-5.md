# Prompt: pick up after Phase 5 (written 2026-11-02)

Paste this into a fresh Claude Code session on this repository (branch: the one the session gives you;
if PR 18 is not merged yet, work on `claude/nice-knuth-wo4ou5`).

---

Read `CLAUDE.md`, then `PROJECT.md` (the header's *Current phase* and *Next action*, and the last rows of
the session log), then `sessions/2026-10-22_to_2026-11-02.md` (what the last session did, what is open,
and the problems it met).

1. **Check PR 18** (<https://github.com/smileymcfrown/EncyclopediaOfConnections/pull/18>): merged or open,
   CI on its head, review comments. If the owner left comments, deal with them first. If it is merged,
   start new work from the latest `main`, and check the live site after the *Deploy site* workflow.
2. **Then carry on with the next steps** in `sessions/2026-10-22_to_2026-11-02.md` ("Next steps for
   Claude"), in that order, unless the owner asks for something else:
   - the finder-tag values that still rest on text marked [uncertain]
     (`research/finder-tags/confirm-2026-11-02.md`, "Still unconfirmed"; brief:
     `research/finder-tags/confirm-brief.md`);
   - the open points added on 2026-10-28 and 2026-11-02 in `research/connection-types/review-notes.md`;
   - the 7 weak renders.
   Ask the owner before anything that is theirs to decide (new picture sources, scope, licences).
3. Work as before: plain English first with the proper term in brackets; cite only sources you opened;
   mark anything unconfirmed [uncertain] / ⚑; regenerate with `python3 tools/make_entries.py`,
   `python3 tools/check_entries.py`, `python3 tools/export_finder.py` (and the finder test and
   `propose.py` when tags or research text change); commit and push as you go.
4. Before finishing, update `PROJECT.md` (requests, decisions, *Current phase*, *Next action*, session log).

Practical notes: the cloud container can be reset while idle, so keep nothing important only in the
scratchpad; after a reset, use a Python venv for Pillow and run `npm ci` in `site/` before building.
Wikimedia blocks the cloud machine (use the *Find pictures* and *Fetch pictures* workflows); Printables
works through `tools/find_printables.py`; Thingiverse and MakerWorld refuse requests.
