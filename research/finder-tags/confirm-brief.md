# Brief: confirm research text marked [uncertain] (for research agents)

Repository: /home/user/EncyclopediaOfConnections. Read `CLAUDE.md` and the section "How to confirm or
correct something" in `research/needs-confirming.md`. Your group is a section of
`research/finder-tags/confirm-2026-11-02.md`. Do not commit or push. Edit only the results JSON files
your group names (`research/connection-types/results/<file>.json`).

For each line in your group, the quoted text is the [uncertain] part a finder tag was read from. Find
that sentence in the entry's JSON and:

1. Search the web for a reliable source (a maker's data sheet or manual, a standard, an established
   reference or how-to site; a forum only if nothing better exists) and **open it** (WebFetch, or curl
   through the proxy if WebFetch is blocked). Never cite a URL you did not open; never invent one.
2. If the source confirms the claim: remove the `[uncertain ...]` marker, cite the source in the text
   the way the entry already cites others (short name in brackets), and add the URL to `media.sources`.
   If no other [uncertain] is left in that field, remove the field name from the entry's `uncertain` list.
3. If the source says something different: correct the text from the source (same steps), and report it.
4. If you find nothing reliable in reasonable time: leave it exactly as it is.

Keep the entry's style: plain English first, the proper term in brackets, short. Change only what the
claim needs. Keep the JSON structure and formatting (2-space indent, UTF-8, the file's own trailing
newline). Validate each file you edit:

    python3 .claude/skills/research/validate_json.py -f research/connection-types/fields.yaml -j research/connection-types/results/<file>.json

Report at the end, one line per item: entry number, field, confirmed / corrected / unconfirmed, the URL(s)
opened, and the change made. List any source that was blocked.
