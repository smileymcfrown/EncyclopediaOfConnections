# The site (P4)

A static site made with Astro and Starlight (P4, accepted 2026-10-06), for GitHub Pages. Its search
uses Pagefind, which is built into Starlight.

```bash
cd site
npm ci              # once
npm run build       # copies the content in (../tools/sync_site.py), then builds dist/
npm run preview     # serves dist/ at http://localhost:4321/EncyclopediaOfConnections/
npm run dev         # live preview while editing
```

Needs Node 22 and Python 3 with `pyyaml`. Run `python3 ../tools/make_entries.py` and
`python3 ../tools/export_finder.py` first whenever the research, tags, glossary or finder questions
change. The CI workflow runs them all (see below).

## What is where

| Path | What it is |
|------|------------|
| `astro.config.mjs` | Site settings. `SITE_BASE` (default `/EncyclopediaOfConnections`) and `SITE_URL` (default `https://smileymcfrown.github.io`) set the address; change both if the site moves to its own domain |
| `src/content/docs/index.mdx`, `finder.mdx`, `help.md` | The hand-written pages: home, the finder, and how to help |
| `src/components/Finder.astro` | The guided finder: plain JavaScript over `public/data/finder-tree.json` and `finder.json`, with questions, examples, ⓘ explanations, Back, *I'm not sure*, a tick-box panel with counts, a "Made of" row of buttons under every shortlist (R37: the `made_of` tag, with counts, and all of the list shown if nothing suits the material), and shortlist cards that show ⚑ when a value that needs confirming put the entry there. The answers and the chosen material are kept in the page address (`#a=3.2.0&m=wood`) |
| `src/content/docs/guides/driving-several-things-from-one.md`, `public/guides/directions.svg` | The hand-written guide page (R36) on driving several outputs from one input or combining inputs, and its direction drawing (made by a small script, checked by rendering) |
| `src/content/docs/entries/`, `families/`, `glossary.md`, `needs-confirming.md`, `src/sidebar.json`, `public/data/` | **Generated** by `../tools/sync_site.py` from `../content/` (ignored by git) |

`sync_site.py` adds the Beta banner to every page. It points glossary links at the site's glossary
page, and adds *Suggest a correction* links that open the correction issue form with the entry
(and the finder value, where there is one) filled in. It also writes one page per family and the
*Needs confirming* list. The sidebar shows the start pages and the 32 families. Entries are reached
from their family page, the finder or search, which keeps every page small.

## Publishing

`.github/workflows/check.yml` runs on every pull request and on pushes to `main`. It runs the
finder test, makes and checks the entry pages, exports the finder data and builds the site.
`.github/workflows/deploy.yml` publishes the site to GitHub Pages on every push to `main`, so a
merged pull request goes live by itself in a few minutes (decision D34 in `PROJECT.md`, replacing
D20's publishing by hand). It can also be started by hand: Actions → Deploy site → **Run workflow**
(not *Re-run*, which publishes that old run's commit again). It needs **Settings → Pages → Source**
set to **GitHub Actions**, which is done.
