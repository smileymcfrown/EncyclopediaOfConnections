# Expand one family (repeat as needed)

## For you (not part of the prompt)

Use this after reviewing run 2 whenever one family (e.g. snap & clip fits) looks thin.

**Steps**
1. Copy the box under "The prompt" below into a text editor.
2. Replace the three `<…>` placeholders: the family name, any specific types you want added
   (or delete that line), and any extra fields you want (or delete that line).
3. Start a new Claude Code session on this repo, paste the edited text as your first
   message, and send it.

**What to expect:** it proposes new types for that family and **asks you to confirm** them
before saving. Then it researches only the new ones and refreshes the report.

## The prompt

```text
/research-add-items

Before starting, read PROJECT.md (especially Scope) and the existing results in
research/connection-types/results/ for the <FAMILY NAME, e.g. snap & clip fits> family.

Add items to the research/connection-types/ outline. Use a web search to find types and
variants in this family that are still missing, especially unusual or clever ones a
3D-printing or robotics hobbyist would find useful. Check the prior-art collections in
research/prior-art/ first. Stay within the Scope in PROJECT.md (types, not standard
hardware catalogues).
Specific types I want added: <LIST, or delete this line>
Show me the proposed additions before saving.

<OPTIONAL: Then run /research-add-fields to add these fields: LIST. Or delete this line.>

Then run /research-deep (it skips items that are already done), and afterwards
/research-report to refresh the report.

Rules: plain English first with the proper term in brackets, only URLs that were actually
opened, pages with pictures preferred, [uncertain] for anything unverified.
Update PROJECT.md, then commit and push.
```
