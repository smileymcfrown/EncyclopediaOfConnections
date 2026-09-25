# Run 1: existing reference resources

**How to run:** start a Claude Code session on this repo and paste the block below the line.
Answer the skill's questions as they come up. The suggested answers are in the block.

---

Read `PROJECT.md` first, then run:

/research Reference resources for mechanical connections and mechanisms for hobbyist makers

Context for building the outline:
- Project: the **Encyclopedia of Connections**, a free, beginner-friendly reference of every way
  to connect two parts, and to make them turn, slide, flex, lock or adjust. It's for hobbyist makers
  (3D printing first, then robotics/mechanisms, then off-the-shelf hardware, with CNC/woodwork
  later) who **don't know the engineering terms**, so they can't search for them.
- **Items** = existing resources that already explain connections or mechanisms and that
  the encyclopedia might link to or learn from. Aim for **20–30 items**. Include at least:
  *507 Mechanical Movements*, Nguyen Duc Thang's mechanism animations, BYU Compliant
  Mechanisms Research, *Mechanisms and Mechanical Devices Sourcebook*, McMaster-Carr (as a
  vocabulary source), plastics makers' snap-fit design guides (e.g. Covestro/Bayer, BASF),
  3D-printing and machining service design guides (e.g. Prusa, Formlabs, Protolabs, Xometry,
  Hubs), Wikipedia's mechanism/fastener/joint category pages, Printables/Thingiverse/Hackaday
  collections, and any existing "mechanism finder" or selection-chart tools. Find more.
- When asked for a time range: **unlimited** (old references like *507 Mechanical Movements* are valuable).
- When asked for an existing field definition file: **yes, `research/fields/resources.fields.yaml`**.
  Merge any extra fields you suggest into it, and keep all of its existing fields.
- Save the outline to `research/resources/` (topic_slug = `resources`).
- Execution config: batch_size **5**, items_per_agent **2**.
- Web-search agents should load the `maker-mechanical.md` and `general-web.md` modules.
- Only record URLs that were actually opened. Mark anything unverified as `[uncertain]`.

After I confirm the outline, continue with `/research-deep`, then `/research-report`, putting
**beginner_friendliness**, **has_images** and **has_animations** in the report's table of contents.

When done, update `PROJECT.md` (research-runs table, roadmap ticks, current phase, next action,
session log), then commit and push.
