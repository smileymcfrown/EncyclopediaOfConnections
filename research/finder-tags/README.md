# Finder tags (P3)

Phase 1 starts by giving every entry a set of fixed-choice tags (proposal P3, accepted 2026-10-06).
The finder filters on these tags, so this folder keeps them in one place. It holds the tag list,
a script that proposes a value for every entry, and one page per family.

**Status (2026-10-06, R25):** the owner accepted the script's values as the **working values**.
The finder and the site use them. Values that nobody has confirmed, and that the script was unsure of
or read from text marked [uncertain], are listed as **needs confirming** (⚑). They are marked
wherever they appear, so that they can be revisited and so that readers of the Beta site can
suggest corrections. See `research/needs-confirming.md` for every kind of unconfirmed item in
the project.

Most finder fields in the research results are free text. For example, `load` might read "Heavy
for steel versions; light for printed ones (…)", and `tools_needed` is a sentence. The draft
finder in `../finder-test/` worked around this with rough tags made from entry names (`tags.py`).
The overload question now uses these tags. The other questions move over when the finder is built
(Phase 2).

```bash
cd research/finder-tags
python3 propose.py            # writes tags.yaml and by-family/*.md
python3 propose.py --stats    # also prints how many entries got each value
```

Needs Python 3 and `pyyaml` (installed by the SessionStart hook). It reads
`../connection-types/outline.yaml` and `../connection-types/results/*.json`. After changing
tags, also re-run the finder test (`../finder-test/README.md`) and the report
(`../connection-types/generate_report.py`), which both show them.

| File | What it is |
|------|------------|
| `fields.yaml` | The 18 tag fields: for each, one value or a list (`kind`), what it means, and its fixed options (written as the finder will show them) |
| `propose.py` | Proposes a value for every field of every entry, and records each value that needs confirming, with the reason |
| `tags.yaml` | One record per entry: `tags`, `needs_confirming` (field → kind and reason) and `confirmed` (fields a person has checked) |
| `by-family/` | One page per family: a table of every entry's tags with ⚑ on the values that need confirming, then the reasons. Start at `by-family/README.md` |

## Needs confirming

A value needs confirming for one of two reasons (the `kind` in `tags.yaml`):

- **best guess**: the script used a default, worked the value out from the entry's name, or the
  text named more than one answer. On 2026-10-06 there were 253 of these.
- **source uncertain**: the value comes from part of the research text that the research run marked
  `[uncertain]`. The reason quotes that text. There were 112 of these.

Together that is 365 values in 226 of the 409 entries. Most are in hydraulics, pneumatics & vacuum
(46), adhesives & bonding (29) and electrical connections (27). The other values are not marked:
the script was sure of them and their text is not uncertain. Nobody has confirmed them one by one
yet either.

## Confirming or correcting a value

1. Edit the value in `tags.yaml`. The options are in `fields.yaml`, and the script stops with an
   error if a value isn't one of them.
2. Add the field name to the entry's `confirmed` list, e.g. `confirmed: [clicks]`, or
   `confirmed: [all]` once every value of the entry has been checked.
3. Re-run `propose.py`. It keeps confirmed values exactly as they are and drops their ⚑. It
   re-proposes everything else, so a value changed without being added to `confirmed` is
   overwritten.

On the Beta site, readers suggest corrections with the link next to each ⚑. A maintainer then
makes the change here.

## How each value is proposed

| Field | Where it comes from |
|-------|---------------------|
| `power`, `removability`, `adjustable` | The first option the free-text field names |
| `load_max` | The heaviest of light / medium / heavy in the first clause of `load`. If none is named, it is set to medium as a best guess. Electrical entries whose `load` names no mechanical band get light |
| `tools` | Tool words in `tools_needed`, grouped (screwdriver, spanner, pliers… → hand tools; needle, awl, eyelet setter… → sewing or leather tools); "none" when the text starts with it |
| `usual_process` | The first method in `processes`. Knots and sewn joints are made by hand or sewn. Glues are off-the-shelf. A best guess where the first method is off-the-shelf but `print_in_place` is yes |
| `connects` | The entry's name and family (the same rules as `../finder-test/tags.py`, plus wires and hoses). "Any solid parts" when it joins things but no kind of part is named |
| `power_source`, `power_loss` | Words in `power` (electric, pneumatic, vacuum…; fail-secure, fail-safe, keeps its position…). Only for types that use power |
| `motion_in`, `motion_out`, `shaft_layout` | The two sides of `input_output` ("X -> Y", or "Input: … Output: …"). Shaft layout only when both sides turn |
| `overload_response` | The `torque-limiting` and overload-related `fail-safe or breakaway` notes in `special_behaviour`, and the entry's name |
| `clicks` | Click or silent words in the `one-way` and `indexing` notes and in `how_it_works` (not for valves and pumps, where "one-way" means the flow) |
| `glue_traits` | The glue lists in `../finder-test/tree.py` (owner-reviewed in run 3), plus "fast" from the text and "can be undone" from `removability` |
| `bonds_well`, `bonds_poorly` | Material names in `materials`, split at the first "poor", "does not", "avoid" and similar words |
| `electrical_band` | The fixed lead-in at the start of `load` ("Electrical: up to about 3 A", …) |

## Notes

- **Overload, fourth option (kept by the owner, R25):** "comes apart without damage, refit by hand". It covers the
  magnet joint, hook-and-loop, quick couplers (breakaway types), the magnetic connector and the plain plug
  and socket. It is the finder's fourth answer to *What should happen when it is overloaded?*
- **`tools`** is a rough grouping. It lists every tool an entry mentions, including tools needed
  only for some versions, so most entries list several. The finder may only need "no tools" and
  "hand tools only" as filters.
- **`usual_process`** is only as good as the order of each entry's `processes` list. 120 entries
  come out as 3D print (FDM) and 243 as off-the-shelf.
