# Finder test

Scripts that test the draft finder (flow chart) from `research/flowchart-and-format.md`
against the run 2 data in `research/connection-types/results/`. Run them again whenever the
data or the questions change.

```bash
cd research/finder-test
python3 normalise.py   # reads the JSON files (452 on 2026-10-22), writes entries.json (not committed)
python3 tree.py        # lists every answer path (reads ../finder-tags/tags.yaml too) with its shortlist size; -v also lists the entries
python3 gen_docs.py .  # rewrites mermaid.md (the charts), paths.md (every path and its entries) and answers.md (answers with examples)
```

| File | What it does |
|------|--------------|
| `normalise.py` | Turns the free-text finder fields (motion, removability, seal, load, …) into fixed answer options, using the first option each entry names |
| `tree.py` | The draft question tree. Each answer is a rule over the normalised fields (job, family, motion, …) and the finder tags in `../finder-tags/tags.yaml` (`TG`); since R33 (2026-10-15) no answer looks at entry names. Prints `OK` (3-10 entries), `BIG` (over 10) or `SML` (under 3) for every path, and any entry no path reaches. With `-v`, ⚑ marks an entry that is on a path because of a tag value that needs confirming. To move an entry to a different answer, change its tag in `tags.yaml`, not the tree |
| `examples.yaml` | A real-world example for every answer, plus a one-line explanation where the wording could mislead (owner's request, 2026-10-06). `tree.py` reports any answer without one. Drafted by Claude and accepted as working text without a line-by-line review, so they count as *needs confirming* (`../needs-confirming.md`) |
| `gen_docs.py` | Writes `mermaid.md`, `paths.md` and `answers.md` (every question with its answers, examples and explanations) from `tree.py` and `examples.yaml`, so they always match the tested tree |
| `paths.md`, `mermaid.md` | Generated output (2026-10-03: 115 paths for 323 entries; 2026-10-06: 140 paths for 409 entries, then 141 with the fourth overload answer (R25); 2026-10-15: 147 paths with every answer on finder tags (R33); 2026-10-22: 161 paths for 452 entries (R36, R37); all 3-10 entries, no entry unreached). `paths.md` marks with ⚑ the entries that are on a path because of a tag value that needs confirming, and gives the reasons |

Needs Python 3 and `pyyaml` (installed by the SessionStart hook).
