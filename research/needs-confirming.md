# Needs confirming

This page lists everything in the project that nobody has confirmed yet. It says where each kind
of item is recorded and how it is marked, so it can be revisited later. The site will highlight
the same items so that readers can suggest corrections as they use it, like a wiki
(owner's request, 2026-10-06, R25). The site launches as a **Beta** for the same reason.

## The mark

**⚑ = needs confirming.** The same mark is used everywhere:

- in the generated pages in this repository (the research report, the finder tag pages, the finder paths);
- on the site: next to the value or sentence, with a short explanation of why it is marked and a
  **Suggest a correction** link (a GitHub issue form that already names the entry and the field).

Marked items stay on the site rather than being hidden. A marked value is the project's best
current answer, not a known error.

## What needs confirming (2026-10-06)

| What | How many | Where it is recorded | Where it is marked |
|---|---|---|---|
| **Finder tags the script was unsure of** (*best guess*: it used a default, worked the value out from the entry's name, or the text named more than one answer) | 253 values | `research/finder-tags/tags.yaml`: the entry's `needs_confirming`, kind `best guess`, with the reason | `research/finder-tags/by-family/`; the research report's *Finder tags* lists; `research/finder-test/paths.md` when the value puts an entry on a finder path |
| **Finder tags read from research text marked [uncertain]** (*source uncertain*) | 112 values | The same, kind `source uncertain`, quoting the uncertain text | The same |
| Together, the finder tags that need confirming | 365 values in 226 of the 409 entries (most in hydraulics, pneumatics & vacuum: 46; adhesives: 29; electrical: 27) | | |
| **Facts in the research results marked [uncertain]** (a claim the research agent could not confirm from a source it opened) | 3,137 markers in 2,398 fields, in 399 of the 409 entries | `research/connection-types/results/*.json`: `[uncertain]` in the text, and the field named in the entry's `uncertain` list | The research report (`research/connection-types/report/`) shows each one with ⚑ in front of its marker. Entry pages will too (P5) |
| **Open points from the research agents** (figures that disagree, sources read from copies, blocked sites, naming clashes) | about 170 notes | `research/connection-types/review-notes.md` | Copied onto each entry's page with ⚑ when the pages are made (P5) |
| **The finder's answer examples and explanations** (drafted by Claude, accepted by the owner as working text without a line-by-line review) | 201 examples, 23 explanations | `research/finder-test/examples.yaml` (header note) | `research/finder-test/answers.md` (header note); on the site, a *Suggest a correction* link by each example |
| **The finder's rough rules.** Most finder answers still pick entries with rules worked out from entry names (`tags.py`), not with the finder tags | most of the 201 answers | `research/finder-test/tags.py`, `tree.py` | `research/finder-test/paths.md` (header note). They are replaced by the finder tags when the finder is built (Phase 2) |

The other finder tags are not marked: the script was sure of them, and their source text is not
marked [uncertain]. Nobody has confirmed them one by one either. An entry's `confirmed` list in
`tags.yaml` records which values a person has checked. So far there are none.

## How to confirm or correct something

- **A finder tag.** Edit the value in `research/finder-tags/tags.yaml` (the options are in
  `fields.yaml`), and add the field name to the entry's `confirmed` list (or `all` for the whole
  entry). Then run `python3 propose.py` there. It keeps confirmed values as they are, drops their ⚑, and
  rebuilds the pages. Then run the finder test (`research/finder-test/README.md`).
- **A fact marked [uncertain].** Open a source that confirms or corrects it. Add the source to
  the entry's `sources`, fix the text, and remove the marker. If no other marker is left in that
  field, also remove the field from the entry's `uncertain` list. Then check the file with
  `python3 .claude/skills/research/validate_json.py -f research/connection-types/fields.yaml -j <file>`
  and regenerate the report (`python3 research/connection-types/generate_report.py`).
- **An open point in `review-notes.md`.** Settle it in the entry, and say how in the note.
- **An answer example.** Edit `research/finder-test/examples.yaml`, then run `gen_docs.py`.

On the Beta site, readers do not need to do any of this. They use the *Suggest a correction*
link, and a maintainer makes the change.

## On the site (plan)

- ⚑ beside every marked value or sentence on an entry page, with its reason and the
  *Suggest a correction* link (Phase 3, with the Beta label and the issue forms).
- On a finder shortlist, ⚑ on an entry's card when a marked tag is what put it there.
- A *Needs confirming* page made from the same data, listing every marked item by family, so
  that contributors can pick one to check.
