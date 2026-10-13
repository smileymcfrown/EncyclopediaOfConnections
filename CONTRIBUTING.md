# Contributing

The Encyclopaedia of Connections is a Beta and is meant to grow with its readers' help. You
don't need to be an engineer: if you've made, fixed or used something, you know things we don't.

## The quick way: open an issue

Use one of the forms on the [Issues](../../issues/new/choose) page:

- **Suggest a correction.** Something on an entry or in the finder is wrong, or you can confirm
  something marked **⚑ needs confirming**.
- **A connection or mechanism is missing.** Describe what it does, even if you don't know its name.
- **Something isn't working.** A broken link, a page that looks wrong, or the finder giving an
  odd answer.

A maintainer will make the change and credit the issue.

## What ⚑ means

⚑ marks something nobody has confirmed yet. It may be a fact the research could not check
against a source, a finder value that is a best guess, an open question from the research notes,
or one of the finder's examples. It is the best current answer, not a known error. Telling us
"this is right, here's how I know" is as useful as a correction. The full list, and how each kind is
recorded, is in [`research/needs-confirming.md`](research/needs-confirming.md).

## Changing files yourself

Most pages are **generated**, so edit the source and re-run the scripts:

| To change… | Edit | Then run |
|---|---|---|
| An entry's text, links or sources | its JSON file in `research/connection-types/results/` (the `research` key in the entry page's front matter names it) | `python3 tools/make_entries.py`, `python3 tools/check_entries.py` |
| A finder value (tag) | `research/finder-tags/tags.yaml`, and add the field to the entry's `confirmed` list | `python3 research/finder-tags/propose.py`, then the two `tools/` scripts |
| A finder question, answer or example | `research/finder-test/tree.py` or `examples.yaml` | the finder test (`research/finder-test/README.md`) |
| An open point from the research | `research/connection-types/review-notes.md` | `python3 tools/make_entries.py` |
| An entry's picture | a better Commons file: put it first among the entry's `links` (JSON), or replace the drawn diagram in `content/media/drawn/<page>.svg` | the *Fetch pictures* workflow, then `python3 tools/make_entries.py` |

If you remove an `[uncertain]` marker from a JSON file, also remove the field from that file's
`uncertain` list when no other marker is left in it. Then check the file:
`python3 .claude/skills/research/validate_json.py -f research/connection-types/fields.yaml -j <file>`.

## House style

- **Plain English first**, with the proper engineering term in brackets, e.g. "a one-way ring
  (sprag clutch)".
- **Cite sources.** Name where each fact comes from, and add the page you opened to `sources`.
  **Never invent a web address.** If you can't confirm something, mark it `[uncertain]` rather
  than leaving it out.
- **Pictures and videos:** link to them. Copy one into the project only if its licence allows it
  (public domain, CC0, CC BY or CC BY-SA), with its title, author, source and licence.
  Non-commercial and all-rights-reserved material is linked only.
- **Safety:** never give mains-wiring steps. Say what a part is not allowed for, and that mains
  work must follow local law.

## Licences

By contributing, you agree that your content is published under
[CC BY-SA 4.0](LICENSE-CONTENT) and your code under the [MIT licence](LICENSE). See the
[README](README.md#licences).
