# Finder tags (P3)

Phase 1 starts by giving every entry a set of fixed-choice tags (proposal P3, accepted 2026-10-06).
The finder filters on these tags, so the review session can check them in one place.
This folder holds the tag list, a script that proposes a value for every entry, and one review page per family.

Most finder fields in the research results are free text. For example, `load` might read "Heavy for
steel versions; light for printed ones (…)", and `tools_needed` is a sentence. The draft finder in
`../finder-test/` gets around this with rough tags worked out from entry names (`tags.py`). These tags
replace those name rules once the owner has checked them.

```bash
cd research/finder-tags
python3 propose.py            # writes tags.yaml and review/*.md
python3 propose.py --stats    # also prints how many entries got each value
```

Needs Python 3 and `pyyaml` (installed by the SessionStart hook). It reads
`../connection-types/outline.yaml` and `../connection-types/results/*.json`.

| File | What it is |
|------|------------|
| `fields.yaml` | The 18 tag fields: for each, one value or a list (`kind`), what it means, and its fixed options (written as the finder will show them) |
| `propose.py` | Proposes a value for every field of every entry, and notes each value it is unsure of |
| `tags.yaml` | The proposals: one record per entry with `status` (`proposed` or `checked`), `tags`, and `check` (the values to look at, with the reason) |
| `review/` | One page per family: a table of every entry's tags, then the reasons. Start at `review/README.md` |

## The review session

1. Open a family page in `review/`. In the table, **bold** marks a value the script was unsure of: it used a default, it guessed from the entry's name, or the text named more than one answer. *Italics* mark a value read from text that the research run marked `[uncertain]`. That value is probably right, but the fact behind it is not confirmed.
2. Correct the values in `tags.yaml`. Options are in `fields.yaml`. The script rejects any value that isn't one of them.
3. When an entry is done, delete its `check` notes and set `status: checked`.
4. Re-run `propose.py`. It keeps checked entries exactly as they are, re-proposes the rest, and rebuilds the review pages.

It is quickest to start with the bold values. On 2026-10-06 there were 225 of them across 174 entries, plus 304 values in italics.
The families with the most bold values are hydraulics, pneumatics & vacuum (36), electrical connections (25), cord, strap, webbing & textile hardware (18), and powered & active connectors (15).

## How each value is proposed

| Field | Where it comes from |
|-------|---------------------|
| `power`, `removability`, `adjustable` | The first option the free-text field names |
| `load_max` | The heaviest of light / medium / heavy in the first clause of `load`; medium if none is named (flagged). Electrical entries whose `load` names no mechanical band get light (flagged) |
| `tools` | Tool words in `tools_needed`, grouped (screwdriver, spanner, pliers… → hand tools; needle, awl, eyelet setter… → sewing or leather tools); "none" when the text starts with it |
| `usual_process` | The first method in `processes`. Knots and sewn joints are made by hand or sewn. Glues are off-the-shelf. Flagged where the first method is off-the-shelf but `print_in_place` is yes |
| `connects` | The entry's name and family (the same rules as `../finder-test/tags.py`, plus wires and hoses). "Any solid parts" when it joins things but no kind of part is named |
| `power_source`, `power_loss` | Words in `power` (electric, pneumatic, vacuum…; fail-secure, fail-safe, keeps its position…). Only for types that use power |
| `motion_in`, `motion_out`, `shaft_layout` | The two sides of `input_output` ("X -> Y", or "Input: … Output: …"). Shaft layout only when both sides turn |
| `overload_response` | The `torque-limiting` and overload-related `fail-safe or breakaway` notes in `special_behaviour`, and the entry's name |
| `clicks` | Click or silent words in the `one-way` and `indexing` notes and in `how_it_works` (not for valves and pumps, where "one-way" means the flow) |
| `glue_traits` | The glue lists in `../finder-test/tree.py` (owner-reviewed in run 3), plus "fast" from the text and "can be undone" from `removability` |
| `bonds_well`, `bonds_poorly` | Material names in `materials`, split at the first "poor", "does not", "avoid" and similar words |
| `electrical_band` | The fixed lead-in at the start of `load` ("Electrical: up to about 3 A", …) |

## For the owner to decide in the review

- **A new overload option.** Five entries let go without damage when pulled too hard and are pushed back together by hand: the magnet joint, hook-and-loop, quick couplers (breakaway types), the magnetic connector and the plain plug and socket. None of the finder's three overload answers fits them, since "click or pop out, then reset by itself" and "break or let go once (replace it after)" both describe something else. `fields.yaml` adds "comes apart without damage, refit by hand" for them. If you keep it, the finder needs a fourth answer to the question "What should happen when it is overloaded?". If not, pick the closest of the three.
- **`tools`** is a rough grouping. It lists every tool an entry mentions, including tools needed only for some versions, so most entries list several. The finder may only need "no tools" and "hand tools only" as filters.
- **`usual_process`** is only as good as the order of each entry's `processes` list. 120 entries come out as 3D print (FDM) and 243 as off-the-shelf.
