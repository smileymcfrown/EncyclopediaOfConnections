# Expand one family (repeat as needed)

**How to run:** after reviewing run 2, fill in the `<…>` placeholders, start a Claude Code
session on this repo and paste the block below the line.

---

Read `PROJECT.md` and the existing results in `research/connection-types/results/` for the
**<family name, e.g. snap & clip fits>** family.

Run `/research-add-items` on the `research/connection-types/` outline. Use a web search
to find **types and variants in this family that are still missing**, especially unusual or clever ones a
3D-printing or robotics hobbyist would find useful. Check the prior-art collections in
`research/prior-art/` first. Stay within the **Scope** in `PROJECT.md` (types, not standard hardware catalogues). <Optional: specific items I want added>.
Show me the proposed additions before saving.

<Optional: run `/research-add-fields` to add these fields: …>

Then run `/research-deep`. It skips items that are already done. Afterwards run
`/research-report` to refresh the report.

Same rules as before: plain English first with the proper term in brackets, only URLs
that were actually opened, pages with pictures preferred, `[uncertain]` for anything unverified.
Update `PROJECT.md`, then commit and push.
