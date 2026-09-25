#!/usr/bin/env python3
"""Turn research/prior-art/results/*.json into research/prior-art/report.md.

Generated for /research-report. Covers every field in fields.yaml, skips values marked
[uncertain] (or listed in a file's `uncertain` array), and puts resource_type, scope_match
and reusable_data in the table of contents.

Run from anywhere: python3 research/prior-art/generate_report.py
"""
import json
import re
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent
RESULTS = HERE / "results"
OUTLINE = HERE / "outline.yaml"
FIELDS = HERE / "fields.yaml"
REPORT = HERE / "report.md"

TOC_FIELDS = ["resource_type", "scope_match", "reusable_data"]
TOC_LABELS = {"resource_type": "Type", "scope_match": "Scope match", "reusable_data": "Reusable data"}

# fields.yaml category -> JSON keys it may appear under
CATEGORY_MAPPING = {
    "basics": ["basics", "Basics", "basic_info", "Basic Info"],
    "coverage": ["coverage", "Coverage"],
    "usefulness": ["usefulness", "Usefulness"],
}
CATEGORY_TITLES = {"basics": "Basics", "coverage": "Coverage", "usefulness": "Usefulness"}
INTERNAL_KEYS = {"_source_file", "uncertain"}
UNCERTAIN = "[uncertain]"


def slugify_filename(name):
    return re.sub(r"[^\w]", "", name.replace(" ", "_"))


def anchor(text):
    """GitHub-style heading anchor."""
    a = text.strip().lower()
    a = re.sub(r"[^\w\- ]", "", a)
    return a.replace(" ", "-")


def load_fields():
    data = yaml.safe_load(FIELDS.read_text(encoding="utf-8"))
    return {cat: [f["name"] for f in flist] for cat, flist in data["fields"].items()}


def find_field(data, field, category):
    """Top level -> category mapping key -> any nested dict."""
    if field in data:
        return True, data[field]
    for key in CATEGORY_MAPPING.get(category, [category]):
        sub = data.get(key)
        if isinstance(sub, dict) and field in sub:
            return True, sub[field]
    for v in data.values():
        if isinstance(v, dict) and field in v:
            return True, v[field]
    return False, None


def contains_uncertain(value):
    if isinstance(value, str):
        return UNCERTAIN in value
    if isinstance(value, list):
        return any(contains_uncertain(v) for v in value)
    if isinstance(value, dict):
        return any(contains_uncertain(v) for v in value.values())
    return False


def is_empty(value):
    return value is None or (isinstance(value, str) and not value.strip()) or value in ([], {})


def md_escape(text):
    return str(text).replace("\n", " ").strip()


def fmt_value(value, indent=0):
    """Return markdown for a value; may be multi-line (sub-bullets)."""
    pad = "  " * (indent + 1)
    if isinstance(value, dict):
        lines = []
        for k, v in value.items():
            lines.append(f"\n{pad}- *{k}*: {fmt_value(v, indent + 1)}")
        return "".join(lines)
    if isinstance(value, list):
        if all(isinstance(v, dict) for v in value):
            return "".join(
                f"\n{pad}- " + " | ".join(f"{k}: {md_escape(v)}" for k, v in d.items()) for d in value
            )
        items = [md_escape(v) if not isinstance(v, (list, dict)) else fmt_value(v, indent + 1) for v in value]
        if len(items) <= 6 and sum(len(i) for i in items) < 200:
            return ", ".join(items)
        return "".join(f"\n{pad}- {i}" for i in items)
    return md_escape(value)


def short(field, value):
    """Short form of a value for the table of contents."""
    if not isinstance(value, str):
        value = ", ".join(map(str, value)) if isinstance(value, list) else str(value)
    v = value.strip()
    if field == "scope_match":
        m = re.match(r"\s*(high|medium|low)(\s*(to|-|/)\s*(high|medium|low))?", v, re.I)
        if m:
            return m.group(0).strip().lower()
    cut = re.split(r" \(|: |; |\. |, ", v, maxsplit=1)[0]
    return cut if len(cut) <= 70 else cut[:67].rstrip() + "..."


def main():
    fields = load_fields()
    all_field_names = {f for flist in fields.values() for f in flist}
    outline = yaml.safe_load(OUTLINE.read_text(encoding="utf-8"))
    items = outline["items"]

    records = []
    seen_files = set()
    for item in items:
        path = RESULTS / f"{slugify_filename(item['name'])}.json"
        data = json.loads(path.read_text(encoding="utf-8")) if path.exists() else None
        seen_files.add(path.name)
        records.append((item, data))
    # Any result file not matched to an outline item still gets reported.
    for path in sorted(RESULTS.glob("*.json")):
        if path.name not in seen_files:
            data = json.loads(path.read_text(encoding="utf-8"))
            records.append(({"name": path.stem.replace("_", " "), "category": "Other"}, data))

    out = []
    out.append(f"# Research report: {outline['topic']}\n")
    done = sum(1 for _, d in records if d is not None)
    out.append(
        f"Run 1 (prior art) of the Encyclopedia of Connections. {done} of {len(records)} items researched. "
        "Generated by `generate_report.py` from `results/*.json`. Values the research agents marked "
        "`[uncertain]` are left out here but kept in the JSON files; in the contents, \"(?)\" marks a "
        "short value that is partly unverified. See `summary.md` for the conclusions.\n"
    )
    out.append("## Contents\n")
    for i, (item, data) in enumerate(records, 1):
        line = f"{i}. [{item['name']}](#{anchor(str(i) + ' ' + item['name'])})"
        if data is None:
            out.append(line + " - *not researched yet*")
            continue
        uncertain = set(data.get("uncertain") or [])
        parts = []
        for f in TOC_FIELDS:
            cat = next(c for c, fl in fields.items() if f in fl)
            found, val = find_field(data, f, cat)
            if not found or is_empty(val):
                continue
            if f in uncertain or contains_uncertain(val):
                # Show the short form, flagged, so the requested TOC columns aren't blank.
                text = short(f, json.dumps(val) if not isinstance(val, (str, list)) else val)
                text = text.replace(UNCERTAIN, "").strip()
                if text:
                    parts.append(f"{TOC_LABELS[f]}: {text} (?)")
            else:
                parts.append(f"{TOC_LABELS[f]}: {short(f, val)}")
        out.append(line + (" - " + " | ".join(parts) if parts else ""))
    out.append("")

    for i, (item, data) in enumerate(records, 1):
        out.append(f"## {i} {item['name']}\n")
        if item.get("description"):
            out.append(f"*{item.get('category', '')}.* {item['description']}\n")
        if data is None:
            out.append("*Not researched yet.*\n")
            continue
        uncertain = set(data.get("uncertain") or [])
        for cat, flist in fields.items():
            lines = []
            for f in flist:
                found, val = find_field(data, f, cat)
                if not found or f in uncertain or contains_uncertain(val) or is_empty(val):
                    continue
                lines.append(f"- **{f}**: {fmt_value(val)}")
            if lines:
                out.append(f"### {CATEGORY_TITLES.get(cat, cat)}\n")
                out.extend(lines)
                out.append("")
        # Extra fields not defined in fields.yaml
        extras = []
        cat_keys = {k for keys in CATEGORY_MAPPING.values() for k in keys}
        for k, v in data.items():
            if k in INTERNAL_KEYS or k in all_field_names:
                continue
            if k in cat_keys and isinstance(v, dict):
                for kk, vv in v.items():
                    if kk not in all_field_names and kk not in INTERNAL_KEYS and not is_empty(vv):
                        extras.append((kk, vv))
                continue
            if not is_empty(v):
                extras.append((k, v))
        if extras or uncertain:
            out.append("### Other Info\n")
            for k, v in extras:
                out.append(f"- **{k}**: {fmt_value(v)}")
            if uncertain:
                out.append("- **uncertain** (fields left out above):")
                for u in sorted(uncertain):
                    out.append(f"  - {u}")
            out.append("")

    REPORT.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Wrote {REPORT} ({done}/{len(records)} items)")


if __name__ == "__main__":
    main()
