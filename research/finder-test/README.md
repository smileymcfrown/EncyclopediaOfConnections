# Finder test

Scripts that test the draft finder (flow chart) from `research/flowchart-and-format.md`
against the run 2 data in `research/connection-types/results/`. Run them again whenever the
data or the questions change.

```bash
cd research/finder-test
python3 normalise.py   # reads the JSON files (409 on 2026-10-06), writes entries.json (not committed)
python3 tree.py        # lists every answer path with its shortlist size; -v also lists the entries
python3 gen_docs.py .  # rewrites mermaid.md (the charts) and paths.md (every path and its entries)
```

| File | What it does |
|------|--------------|
| `normalise.py` | Turns the free-text finder fields (motion, removability, seal, load, …) into fixed answer options, using the first option each entry names |
| `tags.py` | Draft tags the data doesn't have yet, worked out from entry names and families: what the parts are (`connects`), what powers it, input → output motion, shaft layout. **Rough, rule-based; to be replaced by real fields in Phase 1** |
| `tree.py` | The draft question tree. Each answer is a rule over the fields and tags. Prints `OK` (3-10 entries), `BIG` (over 10) or `SML` (under 3) for every path, and any entry no path reaches |
| `gen_docs.py` | Writes `mermaid.md` and `paths.md` from `tree.py`, so the charts always match the tested tree |
| `paths.md`, `mermaid.md` | Generated output (2026-10-03: 115 paths for 323 entries; 2026-10-06: 140 paths for 409 entries, all 3-10 entries, no entry unreached) |

Needs Python 3 and `pyyaml` (installed by the SessionStart hook).
