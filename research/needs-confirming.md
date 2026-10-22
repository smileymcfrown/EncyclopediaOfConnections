# Needs confirming

This page lists everything in the project that nobody has confirmed yet. It says where each kind
of item is recorded and how it is marked, so it can be revisited later. The site will highlight
the same items so that readers can suggest corrections as they use it, like a wiki
(owner's request, 2026-10-06, R25). The site launches as a **Beta** for the same reason.

## The mark

**⚑ = needs confirming.** The same mark is used everywhere:

- in the generated pages in this repository: the entry pages (`content/entries/`), the research
  report, the finder tag pages and the finder paths;
- on the site: next to the value or sentence, with a short explanation of why it is marked and a
  **Suggest a correction** link. The link opens the issue form `.github/ISSUE_TEMPLATE/correction.yml`
  with the entry and the field already filled in, e.g.
  `…/issues/new?template=correction.yml&entry=sprag-clutch&what=clicks` (GitHub fills a form's
  fields from the address).

Marked items stay on the site rather than being hidden. A marked value is the project's best
current answer, not a known error.

## What needs confirming (2026-10-22)

| What | How many | Where it is recorded | Where it is marked |
|---|---|---|---|
| **Finder tags the script was unsure of** (*best guess*: it used a default, worked the value out from the entry's name, or the text named more than one answer) | 305 values | `research/finder-tags/tags.yaml`: the entry's `needs_confirming`, kind `best guess`, with the reason | The entry page (front matter `needs_confirming`, and its *Needs confirming* section); `research/finder-tags/by-family/`; the research report's *Finder tags* lists; `research/finder-test/paths.md` when the value puts an entry on a finder path |
| **Finder tags read from research text marked [uncertain]** (*source uncertain*) | 127 values | The same, kind `source uncertain`, quoting the uncertain text | The same |
| Together, the finder tags that need confirming | 432 values in 261 of the 452 entries (2026-10-22, with the 13 hand-set values below) (most in adhesives: 46; hydraulics, pneumatics & vacuum: 46; electrical: 29) | | |
| **Other finder values read from text marked [uncertain]** (the run 2 fields the finder uses, such as `job`, `motion` and `seal`, normalised to fixed choices) | 20 values | Worked out by `tools/make_entries.py` when it makes the pages | The entry page (front matter `needs_confirming`, kind `source uncertain`, and its *Needs confirming* section) |
| **Facts in the research results marked [uncertain]** (a claim the research agent could not confirm from a source it opened) | 3,522 markers in 2,707 fields, in 442 of the 452 entries | `research/connection-types/results/*.json`: `[uncertain]` in the text, and the field named in the entry's `uncertain` list | The entry pages (`content/entries/`) and the research report (`research/connection-types/report/`) show each one with ⚑ in front of its marker; each entry page's *Needs confirming* section counts them |
| **Open points from the research agents** (figures that disagree, sources read from copies, blocked sites, naming clashes) | 218 points about 186 entries (notes recording a correction already made are left out) | `research/connection-types/review-notes.md` | The entry page: front matter `open_points`; the content points are also listed in its *Needs confirming* section. Notes on how a source was read or should be cited stay in the front matter, as work for maintainers |
| **The finder's answer examples and explanations** (drafted by Claude, accepted by the owner as working text without a line-by-line review) | 230 examples, 26 explanations | `research/finder-test/examples.yaml` (header note) | `research/finder-test/answers.md` (header note); on the site, a *Suggest a correction* link by each example |
| **The finder's hand-set answers (R33, R37).** Carried over from the old rules on entry names (R33), or set by hand for the 43 new entries and the *Made of* filter (R37), then checked against the entry text by helper agents; the values they could not settle keep ⚑ | 13 values in 13 entries: 6 *Made of* (`made_of`) and 7 finder answers (from 738 checked in `research/finder-tags/review-r33.yaml` and 492 records in `review-r37.yaml`) | `research/finder-tags/tags.yaml` (`needs_confirming`, kind `best guess`) | As for the other finder tags; `research/finder-test/paths.md` when the value puts an entry on a path |
| **Renders standing in for photos (R35).** 3D models made for the encyclopaedia for the pages with no copyable real photo of the item; a model can simplify or get details wrong, and a real photo should replace each one | 94 pages (5 marked weak) | `content/media/render/README.md` (generated list), models in `tools/renders/models/` | The entry page: the caption under the render (*Render … not a photo*, ⚑) |

The other finder tags are not marked: the script was sure of them, and their source text is not
marked [uncertain]. Nobody has confirmed them one by one either. An entry's `confirmed` list in
`tags.yaml` records which values a person has checked. So far there are none.

## How to confirm or correct something

- **A finder tag.** Edit the value in `research/finder-tags/tags.yaml` (the options are in
  `fields.yaml`), and add the field name to the entry's `confirmed` list (or `all` for the whole
  entry). Then run `python3 propose.py` there. It keeps confirmed values as they are, drops their ⚑, and
  rebuilds the pages. Then run the finder test (`research/finder-test/README.md`) and
  `python3 tools/make_entries.py`.
- **A fact marked [uncertain].** Open a source that confirms or corrects it. Add the source to
  the entry's `sources`, fix the text, and remove the marker. If no other marker is left in that
  field, also remove the field from the entry's `uncertain` list. Then check the file with
  `python3 .claude/skills/research/validate_json.py -f research/connection-types/fields.yaml -j <file>`
  and regenerate the report (`python3 research/connection-types/generate_report.py`) and the entry
  pages (`python3 tools/make_entries.py`).
- **An open point in `review-notes.md`.** Settle it in the entry, and say how in the note, beginning
  that part with **settled:** (or **correction:** for a fix), so that the page-maker leaves it off the
  page. Then run `python3 tools/make_entries.py`.
- **An answer example.** Edit `research/finder-test/examples.yaml`, then run `gen_docs.py`.

On the Beta site, readers do not need to do any of this. They use the *Suggest a correction*
link (or any form on the Issues page, see `CONTRIBUTING.md`), and a maintainer makes the change.

## On the site (plan)

- ⚑ beside every marked value or sentence on an entry page, with its reason and the
  *Suggest a correction* link (Phase 3, with the Beta label and the issue forms).
- On a finder shortlist, ⚑ on an entry's card when a marked tag is what put it there.
- A *Needs confirming* page made from the same data, listing every marked item by family, so
  that contributors can pick one to check.
