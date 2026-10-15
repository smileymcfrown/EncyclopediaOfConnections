# Entry pages

`entries/` holds one Markdown page per connection type: 409 pages, one for each item in
`research/connection-types/outline.yaml`. This is P5 (accepted 2026-10-06). Each page has
front matter (a YAML block at the top) with everything the finder, the layout and the links
need, then the text under fixed headings. The site (P4: Astro + Starlight) will read these
pages. GitHub already shows them as readable pages.

**The pages are generated.** `tools/make_entries.py` writes them from:
- the research results (`research/connection-types/results/*.json`, the research record);
- the finder tags (`research/finder-tags/tags.yaml`);
- the open points in `research/connection-types/review-notes.md`.

Change those sources, not the pages, then run:

```bash
python3 tools/make_entries.py    # rewrites content/entries/*.md
python3 tools/check_entries.py   # checks every page; exits with an error if anything is wrong
```

Needs Python 3 and `pyyaml`. *Decision for review (2026-10-06, made by Claude while the owner
was away):* the pages stay generated until the site exists. After that, the project can switch
to editing pages directly and retire the JSON as a source. See "Decisions to review" in
`PROJECT.md`.

## Glossary (P9)

`glossary.yaml` is the glossary's source: 107 terms, each with other names, a one-sentence
definition and a group. `tools/make_entries.py` writes `glossary.md` from it and links the first
use of each term on every entry page. It doesn't link inside headings, links, code or bold labels,
or in the link, needs-confirming and source sections. Each page lists the terms it links under
`glossary` in its front matter. Terms that are also everyday words (play, lead, module, wear,
yield, pressure, efficiency) have `link: false`, so they are not linked automatically. *Decision
for review (D13-D15 in `PROJECT.md`):* the links are written as `../glossary.md#term`, so they
work on GitHub; the site build will rewrite them to the site's addresses.

## Needs confirming (⚑)

Nothing unconfirmed is hidden. It is kept and marked ⚑, as everywhere else in the project
(`research/needs-confirming.md`):
- sentences the research agents marked `[uncertain]` show ⚑ in front of the marker;
- finder values that need confirming are listed under `needs_confirming` in the front matter, with
  the kind (*best guess* or *source uncertain*) and the reason;
- the entry's open points from the research notes are listed under `open_points`;
- every page ends with a **Needs confirming** section listing all of these. Notes about how a source
  was read or should be cited (kind `sources`) stay in the front matter only, as they are
  maintainers' work rather than a question about the content.

## File names

Each file is named from the entry's name without its bracketed extra names, in lower case with
hyphens, e.g. `sprag-clutch.md` and `nails-brads-and-tacks.md`. Accents are dropped
(`multi-point-bolt.md`). The file name is the page's address on the site, so it should not change
once the site is live. The outline number (`num`) is the research order and is not part of the
address.

## Front matter

| Key | What it holds |
|-----|---------------|
| `title` | The entry's name without its bracketed extra names |
| `description` | The one-line summary (`one_liner`); the site uses it for search results and link previews |
| `num` | Outline number (research order) |
| `term`, `plain_name`, `aliases` | The proper term, the plain-English name, and other names |
| `family`, `other_families` | Family keys from the outline |
| `finder` | Fixed choices only. The run 2 fields as the finder test normalises them (`job`, `motion`, `special_behaviour`, `holding_principle`, `reuse_cycles`, `seal`, `access_needed`, `print_in_place`, `maker_difficulty`, `processes`), then the P3 finder tags (options in `research/finder-tags/fields.yaml`) |
| `needs_confirming` | Finder values nobody has confirmed that are a best guess or come from text marked [uncertain]: `{field: {kind, reason}}` |
| `confirmed` | Finder tags a person has checked (from `tags.yaml`) |
| `open_points` | Points from `review-notes.md` about this entry: `{kind: content, sources or scope, note}` |
| `uncertain_fields` | The research fields with at least one [uncertain] marker |
| `glossary` | The glossary terms linked on the page (anchors in `glossary.md`) |
| `diagram_idea` | The brief for the entry's diagram (Phase 4); not shown on the page |
| `links`, `make_it_yourself` | Pictures, videos and models, and things to make, as `{url, title, shows or what_it_is, license}` |
| `sources` | Every source the research opened |
| `research` | The JSON file the page was made from |
| `image` | The picture at the top: `file` (in `media/`), `alt`, and for a copied picture its `title`, `author`, `license`, `license_url` and `source`; `drawn: true` for a drawn diagram |

## Pictures (R29, R30, R32)

Each page starts with a few pictures, listed in order in `media/pictures.yaml`:

1. **The first, big one.** For an entry that moves, an animation of the movement: a Wikimedia
   Commons animation (copied as animated WebP) or the diagram drawn for the encyclopaedia, animated
   (`media/drawn/anim/<page>.svg`, SMIL animation in the SVG). For an entry that doesn't move, the
   clearest picture of what it is.
2. **Up to two real photos**, best first: a cross-section or cut-away, then one that shows how it
   works (in use, opened, mid-movement), then a clear photo of the part, product or 3D print.

`tools/fetch_images.py` copies the Commons and Openverse (CC-licensed Flickr and similar) pictures
after checking each file's licence (public domain, CC0, CC BY or CC BY-SA), saves web-sized WebP
copies in `media/` and records the credits in `media/media.yaml`; each picture shows its credit.
It runs on GitHub's machines (*Fetch pictures* workflow), because Wikimedia limits shared cloud
addresses. Every animation also has a still copy (`<file>.still.webp`, or the still diagram
`media/drawn/<page>.svg`), which people whose device asks for reduced motion see instead, and
which the finder cards use. Drawn diagrams are marked ⚑ *needs confirming*, as a drawing can
simplify or get details wrong. The front matter's `pictures` lists them; `image` is the first.

Finding pictures: `tools/find_pictures.py` (the *Find pictures* workflow) searches Commons and
Openverse for each entry and leaves the candidates and thumbnails as a download from the
workflow run. The choices made from them, with reasons, are in `media/review/`.

## Headings

Each page starts with the one-line summary, the plain name and proper term, and other names.
The text then follows under these headings, skipping any with nothing to say:
- How it works
- Parts
- Everyday examples
- When to use it
- When not to use it
- Details: the free-text finder fields in full, such as load, play and precision, and heat, cold and water
- Making it: ways to make it, print in place, tools, difficulty, 3D printing tips, buying one
- Rules of thumb
- Common failures
- Safety
- Related
- Make it yourself
- Pictures, videos and models
- Needs confirming
- Sources
