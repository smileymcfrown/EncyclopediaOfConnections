#!/usr/bin/env python3
"""Turn research/connection-types/results/*.json into research/connection-types/report.md.

Generated for /research-report (run 2 of the Encyclopedia of Connections). Covers every field
in fields.yaml, in outline order (research priority), with family, special_behaviour and motion
in the table of contents, plus indexes by family and by special behaviour.

Unverified content: since 2026-10-06 (R25) anything marked [uncertain] is shown, with the mark
⚑ ("needs confirming") in front of the marker, so readers can see what still needs checking and
suggest corrections. Each entry also lists its finder tags from research/finder-tags/tags.yaml,
with ⚑ on the values that need confirming. Run with --drop for the older behaviour (a list item
or sentence that contains [uncertain] is left out, and the rest of the field is kept), or with
--strict to drop every field that contains [uncertain] or is listed in the file's `uncertain`
array, as run 1's report did.

Run from anywhere: python3 research/connection-types/generate_report.py [--drop | --strict]
"""
import json
import re
import sys
from collections import OrderedDict
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
RESULTS = HERE / "results"
OUTLINE = HERE / "outline.yaml"
FIELDS = HERE / "fields.yaml"
REPORT = HERE / "report.md"
REPORT_DIR = HERE / "report"  # one page per family (a single file would be too big for GitHub to show)

STRICT = "--strict" in sys.argv
DROP = "--drop" in sys.argv and not STRICT
MARK = not (STRICT or DROP)          # the default since R25
FLAG = "⚑"                           # "needs confirming", as in research/needs-confirming.md
TAGS = HERE.parent / "finder-tags" / "tags.yaml"
TOC_FIELDS = ["family", "special_behaviour", "motion"]
TOC_LABELS = {"family": "Family", "special_behaviour": "Does", "motion": "Motion"}
CATEGORY_TITLES = {
    "identity": "What it is",
    "finder_attributes": "Finder attributes",
    "making": "Making it",
    "guidance": "When to use it",
    "media": "Pictures, videos and models",
}
INTERNAL_KEYS = {"_source_file", "uncertain"}
UNCERTAIN = "[uncertain]"
UNC_RE = re.compile(r"\[uncertain\b", re.I)  # also matches "[uncertain: ...]" and "[Uncertain ...]"
SPECIAL_BEHAVIOURS = [
    "torque-limiting", "self-locking", "hand-release only", "one-way", "indexing", "over-centre",
    "self-aligning or self-centring", "quick-release", "fail-safe or breakaway", "tensioning",
    "motion conversion", "none",
]


def slugify_filename(name):
    # Same rule as /research-deep (ASCII letters, digits and _ only), so names with
    # accents (e.g. "crémone") find their results file.
    return re.sub(r"[^A-Za-z0-9_]", "", name.replace(" ", "_"))


def anchor(text):
    """GitHub-style heading anchor."""
    a = text.strip().lower()
    a = re.sub(r"[^\w\- ]", "", a)
    return a.replace(" ", "-")


def load_fields():
    data = yaml.safe_load(FIELDS.read_text(encoding="utf-8"))
    return OrderedDict((cat, [f["name"] for f in flist]) for cat, flist in data["fields"].items())


def find_field(data, field, category):
    """Top level -> category key -> any nested dict."""
    if field in data:
        return True, data[field]
    sub = data.get(category)
    if isinstance(sub, dict) and field in sub:
        return True, sub[field]
    for v in data.values():
        if isinstance(v, dict) and field in v:
            return True, v[field]
    return False, None


def contains_uncertain(value):
    if isinstance(value, str):
        return bool(UNC_RE.search(value))
    if isinstance(value, list):
        return any(contains_uncertain(v) for v in value)
    if isinstance(value, dict):
        return any(contains_uncertain(v) for v in value.values())
    return False


def is_empty(value):
    return value is None or (isinstance(value, str) and not value.strip()) or value in ([], {})


SENTENCE_SPLIT = re.compile(r"(?<=[.!?;])\s+(?=[A-Z0-9(\"'])")


def prune(value):
    """Remove unverified parts. Returns (pruned_value, dropped_anything)."""
    if isinstance(value, str):
        if not UNC_RE.search(value):
            return value, False
        kept = [s for s in SENTENCE_SPLIT.split(value) if not UNC_RE.search(s)]
        return " ".join(kept).strip(), True
    if isinstance(value, list):
        out, dropped = [], False
        for v in value:
            if contains_uncertain(v):
                dropped = True
                continue
            out.append(v)
        return out, dropped
    if isinstance(value, dict):
        if contains_uncertain(value):
            return None, True
        return value, False
    return value, False


def mark_value(value):
    """Put the needs-confirming mark in front of every [uncertain] marker."""
    if isinstance(value, str):
        return UNC_RE.sub(lambda m: f"{FLAG} " + m.group(0), value)
    if isinstance(value, list):
        return [mark_value(v) for v in value]
    if isinstance(value, dict):
        return {k: mark_value(v) for k, v in value.items()}
    return value


def md_text(text):
    return str(text).replace("\n", " ").strip()


def fmt_link(d):
    url = d.get("url")
    title = md_text(d.get("title") or url or "")
    rest = [md_text(d[k]) for k in ("shows", "what_it_is") if d.get(k)]
    lic = d.get("license")
    line = f"[{title}]({url})" if url else title
    if rest:
        line += ": " + "; ".join(rest)
    if lic:
        line += f" *(licence: {md_text(lic)})*"
    return line


def fmt_value(value, indent=0):
    """Markdown for a value; may be multi-line (sub-bullets)."""
    pad = "  " * (indent + 1)
    if isinstance(value, dict):
        if "url" in value:
            return fmt_link(value)
        return "".join(f"\n{pad}- *{k}*: {fmt_value(v, indent + 1)}" for k, v in value.items())
    if isinstance(value, list):
        if value and all(isinstance(v, dict) and "url" in v for v in value):
            return "".join(f"\n{pad}- {fmt_link(v)}" for v in value)
        if all(isinstance(v, dict) for v in value):
            return "".join(
                f"\n{pad}- " + " | ".join(f"{k}: {md_text(v)}" for k, v in d.items()) for d in value
            )
        items = [md_text(v) if not isinstance(v, (list, dict)) else fmt_value(v, indent + 1) for v in value]
        if len(items) <= 6 and sum(len(i) for i in items) < 200:
            return ", ".join(items)
        return "".join(f"\n{pad}- {i}" for i in items)
    return md_text(value)


def lead(text, limit=40):
    """The option name at the start of a value like 'rotate, up to 180°: ...'."""
    t = re.sub(r"\[uncertain[^\]]*\]", "", md_text(text), flags=re.I).strip()
    t = re.split(r" \(|: | - | – |; |\. ", t, maxsplit=1)[0].strip(" ,")
    return t if len(t) <= limit else t[: limit - 3].rstrip() + "..."


def behaviours(value):
    """Canonical special_behaviour options found in the value."""
    vals = value if isinstance(value, list) else [value]
    found = []
    for v in vals:
        low = md_text(v).lower()
        for sb in SPECIAL_BEHAVIOURS:
            head = sb.split(" or ")[0]
            if low.startswith(head) or low.startswith(sb):
                if sb not in found:
                    found.append(sb)
    return found


def toc_value(field, value):
    if field == "special_behaviour":
        return ", ".join(behaviours(value)) or lead(value if isinstance(value, str) else value[0])
    if field == "motion":
        return lead(value if isinstance(value, str) else ", ".join(map(str, value)), 30)
    return md_text(value)


def main():
    fields = load_fields()
    all_field_names = {f for flist in fields.values() for f in flist}
    outline = yaml.safe_load(OUTLINE.read_text(encoding="utf-8"))
    items = outline["items"]
    family_labels = OrderedDict((f["key"], f["label"]) for f in outline.get("families", []))

    records, seen = [], set()
    for item in items:
        path = RESULTS / f"{slugify_filename(item['name'])}.json"
        data = json.loads(path.read_text(encoding="utf-8")) if path.exists() else None
        seen.add(path.name)
        records.append((item, data))
    for path in sorted(RESULTS.glob("*.json")):
        if path.name not in seen:
            records.append(({"name": path.stem.replace("_", " "), "category": "Other"},
                            json.loads(path.read_text(encoding="utf-8"))))

    done = sum(1 for _, d in records if d is not None)
    tags = {t["num"]: t for t in yaml.safe_load(TAGS.read_text(encoding="utf-8"))} if TAGS.exists() else {}
    heading = {i: f"{i} {item['name']}" for i, (item, _) in enumerate(records, 1)}
    fam_order = list(family_labels) + sorted({it.get("category", "Other") for it, _ in records} - set(family_labels))
    fam_file = {f: f"{n:02d}-{re.sub(r'[^a-z0-9]+', '-', f.lower()).strip('-')}.md" for n, f in enumerate(fam_order, 1)}
    item_file = {i: fam_file[item.get("category", "Other")] for i, (item, _) in enumerate(records, 1)}
    link = {i: f"[{item['name']}](report/{item_file[i]}#{anchor(heading[i])})" for i, (item, _) in enumerate(records, 1)}

    out = [f"# Research report: {outline['topic']}\n"]
    out.append(
        f"Run 2 (connection types) of the Encyclopedia of Connections. **{done} of {len(records)} "
        "items researched.** Items are in research-priority order (tier 1: unusual types that can "
        "be 3D printed or suit robotics; tier 2: other unusual types, joinery last; tier 3: "
        "baselines; items 275-299 were added later, tier 1 types first; items 300-323 are the "
        "hydraulics, pneumatics & vacuum family, its baselines first; items 324-409 came with the "
        "wider scope of 2026-10-03 and five new families (electrical connections; everyday "
        "fasteners & fixings; knots, lashings & sewn joints; adjusters, levellers & spacers; "
        "welding, brazing & soldering), their baselines first). Generated by "
        "`generate_report.py` from `results/*.json`; field definitions "
        "are in `fields.yaml`. This page is the index; the full entries are on one page per family "
        "in `report/`.\n"
    )
    if STRICT:
        out.append("Fields the research agents marked `[uncertain]` are left out here (they stay in the JSON files).\n")
    elif MARK:
        out.append(
            f"**{FLAG} = needs confirming.** Anything the research agents could not confirm is shown "
            f"with {FLAG} in front of its `[uncertain]` marker, and the field is flagged "
            f"*({FLAG} parts need confirming)*. Each entry also lists its finder tags "
            f"(`research/finder-tags/tags.yaml`), with {FLAG} on the values that need confirming. "
            "Corrections are welcome: see `research/needs-confirming.md`. Open points found by "
            "the research agents are in `review-notes.md`.\n"
        )
    else:
        out.append(
            "Unverified content is left out: any sentence or list item the research agents marked "
            "`[uncertain]` is dropped, and the field is flagged *(unverified parts omitted)*. The "
            "full text, including unverified parts, stays in the JSON files. Known issues to fix "
            "before publishing are in `review-notes.md`.\n"
        )

    # ---- contents
    out.append("## Contents\n")
    for i, (item, data) in enumerate(records, 1):
        line = f"{i}. {link[i]}"
        if data is None:
            out.append(line + " - *not researched yet*")
            continue
        parts = []
        for f in TOC_FIELDS:
            cat = next(c for c, fl in fields.items() if f in fl)
            found, val = find_field(data, f, cat)
            if not found or is_empty(val):
                continue
            text = toc_value(f, val)
            flag = (f" {FLAG}" if MARK else " (?)") if contains_uncertain(val) else ""
            parts.append(f"{TOC_LABELS[f]}: {text}{flag}")
        out.append(line + (" - " + " | ".join(parts) if parts else ""))
    out.append("")

    out.append("### By family\n")
    by_family = OrderedDict((k, []) for k in family_labels)
    for i, (item, data) in enumerate(records, 1):
        by_family.setdefault(item.get("category", "Other"), []).append(i)
    for fam, idx in by_family.items():
        if not idx:
            continue
        label = family_labels.get(fam)
        out.append(f"- **[{fam}](report/{fam_file[fam]})**" + (f" ({label})" if label else "") + ": " +
                   ", ".join(link[i] + ("" if records[i - 1][1] else " *(to do)*") for i in idx))
    out.append("")

    out.append("### By special behaviour\n")
    by_sb = OrderedDict((sb, []) for sb in SPECIAL_BEHAVIOURS if sb != "none")
    for i, (item, data) in enumerate(records, 1):
        if not data:
            continue
        found, val = find_field(data, "special_behaviour", "finder_attributes")
        for sb in behaviours(val) if found else []:
            if sb in by_sb:
                by_sb[sb].append(i)
    for sb, idx in by_sb.items():
        if idx:
            out.append(f"- **{sb}**: " + ", ".join(link[i] for i in idx))
    out.append("")

    REPORT.write_text("\n".join(out) + "\n", encoding="utf-8")

    # ---- entries, one page per family
    REPORT_DIR.mkdir(exist_ok=True)
    for old in REPORT_DIR.glob("*.md"):
        old.unlink()
    pages = OrderedDict((f, []) for f in fam_order)
    for i, (item, data) in enumerate(records, 1):
        out = pages[item.get("category", "Other")]
        out.append(f"## {heading[i]}\n")
        desc = item.get("description")
        out.append(f"*{item.get('category', '')}.* {desc or ''}\n")
        # Notes may also tell the research agents which other families to list; that hint is
        # for the agents, not for readers, so it is left out here.
        notes = re.sub(r"\s*Also list [^.]*? in other_families\.?", "", item.get("notes") or "").strip()
        if notes:
            out.append(f"*Also covers:* {notes}\n")
        if data is None:
            out.append("*Not researched yet.*\n")
            continue
        uncertain = set(data.get("uncertain") or [])
        for cat, flist in fields.items():
            lines = []
            for f in flist:
                found, val = find_field(data, f, cat)
                if not found or is_empty(val):
                    continue
                if STRICT:
                    if f in uncertain or contains_uncertain(val):
                        continue
                    note = ""
                elif MARK:
                    note = f" *({FLAG} parts need confirming)*" if contains_uncertain(val) else ""
                    val = mark_value(val)
                else:
                    val, dropped = prune(val)
                    if is_empty(val):
                        continue
                    note = " *(unverified parts omitted)*" if dropped else ""
                lines.append(f"- **{f}**: {fmt_value(val)}{note}")
            if lines:
                out.append(f"### {CATEGORY_TITLES.get(cat, cat)}\n")
                out.extend(lines)
                out.append("")
        tg = tags.get(i)
        if tg and tg["name"] == item["name"]:
            nc = tg.get("needs_confirming") or {}
            out.append("### Finder tags\n")
            for k, v in tg["tags"].items():
                shown = ", ".join(v) if isinstance(v, list) else v
                why = f" {FLAG} *needs confirming ({nc[k]['kind']}): {md_text(nc[k]['reason'])}*" if k in nc else ""
                out.append(f"- **{k}**: {shown}{why}")
            out.append("")
        extras = []
        for k, v in data.items():
            if k in INTERNAL_KEYS or k in all_field_names:
                continue
            if k in fields and isinstance(v, dict):
                extras += [(kk, vv) for kk, vv in v.items()
                           if kk not in all_field_names and kk not in INTERNAL_KEYS and not is_empty(vv)]
                continue
            if not is_empty(v):
                extras.append((k, v))
        if extras or uncertain:
            out.append("### Other info\n")
            for k, v in extras:
                v = mark_value(v) if MARK else (prune(v)[0] if DROP else v)
                if not is_empty(v):
                    out.append(f"- **{k}**: {fmt_value(v)}")
            if uncertain:
                out.append((f"- {FLAG} **Fields with parts that need confirming:** " if MARK else "- **Fields with unverified parts:** ")
                           + ", ".join(sorted(uncertain)))
            out.append("")

    for fam, body in pages.items():
        if not body:
            continue
        label = family_labels.get(fam, "")
        head = [f"# {fam}" + (f": {label}" if label else "") + "\n",
                "[Back to the index](../report.md). Entries are numbered as in the index "
                "(research-priority order). " + (f"{FLAG} marks what needs confirming; corrections are welcome "
                "(`research/needs-confirming.md`).\n" if MARK else "Unverified parts are left out; see the index page.\n")]
        (REPORT_DIR / fam_file[fam]).write_text("\n".join(head + body) + "\n", encoding="utf-8")
    print(f"Wrote {REPORT} and {len([b for b in pages.values() if b])} family pages in {REPORT_DIR} ({done}/{len(records)} items)")


if __name__ == "__main__":
    main()
