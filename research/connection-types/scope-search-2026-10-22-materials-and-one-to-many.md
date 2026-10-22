# Materials and one-to-many: findings and plan (R36, R37; 2026-10-22)

This note records what the owner asked for, what was found, what was decided and what is still
to do. It is the brief for the next stage (prompt: `research/prompts/04-materials-and-one-to-many.md`).
Nothing in it has been researched yet: the type lists below are **draft starting points** for the
gap search, written from general knowledge, not checked against sources.

## 1. The owner's requests (verbatim)

- **R36:** "What about connecting one thing to many? Such as when you want to turn one shaft and have
  that turn two shafts in the same direction or opposite directions etc. I assume this will expand
  the encyclopaedia dramatically."
- **R37:** "What about other materials and connections?" Then: "Paper and cardboard, Foam, Clay and
  Polymer clay, carbon fibre and composites, and glass and mirror are the ones that are most relevant
  to makers in that order. Ceramic, stone, concete, etc. are more DIY than maker, so leave those out
  for now but make a note of them and what you've found. Do the gap search, research run, and finder.
  Do as much as possible without my input. Ask any questions or make any suggestions now."
- **Answers to Claude's three questions (2026-10-22):**
  - Extras in this stage: **one-to-many drives**, **paper pop-up mechanisms** and **many-to-one
    (combining inputs)**: all three.
  - How the finder uses material: **a "Made of" filter on every shortlist** (not a new tree question).
  - Size: **distinct types only** (one entry per joint type a maker would look up by name; variants
    inside the entry, as now).

## 2. What was found

### 2.1 One-to-many is mostly arrangement, not new kinds of connection

The parts already have entries: spur gear pair and gear train (incl. idler), belt drives (incl.
serpentine, open and crossed belts), chain and sprocket drive, bevel gears, planetary gear set,
differential, magnetic gear, flexible drive shaft. Their texts already state the direction rules:

| Arrangement | Outputs turn |
|---|---|
| Two gears meshing directly | opposite ways; each extra gear in the line flips it again |
| An idler gear in between | same way as the input |
| A gear running inside a ring gear | same way |
| An open belt or chain round several pulleys | all the same way |
| A crossed (figure-8) belt | opposite way |
| One bevel gear between two facing bevels | the two outputs turn opposite ways on one axis (counter-rotating) |
| A differential | outputs share one input but can turn at different speeds |
| A planetary set | one sun drives several planets at once |

What is missing: a way to find these by the question "one input, several outputs?", a guide page
that puts the rules in one place, and a few arrangements that have no entry of their own.

### 2.2 Material coverage of the 409 entries

Method: the number of research results (`results/*.json`) that mention the material three or more
times. A rough measure of how often a material is discussed, not of entries made for it.

| Material | Entries mentioning it 3+ times | State |
|---|---|---|
| 3D-printed plastic (PLA, PETG, TPU) | 356 | strong |
| Wood | 154 | strong |
| Rubber and silicone | 119 | strong |
| Fabric, textile, webbing | 70 | strong |
| Paper and cardboard | 50 | mentioned in passing; no entry of its own |
| Glass | 39 | mostly glue mentions; no entry of its own |
| Acrylic | 33 | fair (laser-cut joints) |
| Stone, concrete, brick | 27 | mostly wall anchors |
| Carbon fibre and composites | 25 | thin |
| Leather | 22 | fair (rivets, sewing, grommets) |
| Sheet metal | 19 (by this narrow regex; many more joints exist) | fair |
| Foam (EVA, XPS) | 17 | thin |
| Bone, horn, shell | 14 | incidental |
| Ceramic and tile | 13 | thin |
| Clay and polymer clay | 2 | almost none |

No entry name contains glass, mirror, paper, cardboard, foam (except double-sided foam *tape*),
clay, ceramic, concrete, masonry or carbon.

## 3. Decisions (owner, 2026-10-22; recorded in PROJECT.md as D44-D46)

- **D44, scope priority:** add joint types for five maker materials, in this order: paper and
  cardboard; foam; clay and polymer clay; carbon fibre and composites; glass and mirror. Also add
  one-to-many drives, many-to-one (combining inputs) and paper pop-up mechanisms. **Parked** (DIY
  rather than maker; noted below, not researched): ceramic and tile; stone, concrete and brick.
- **D45, finder:** material is a **"Made of" filter on every shortlist**, not a new tree question:
  a row of buttons that hides entries that don't suit the chosen material. Needs a new finder-tag
  field on every entry (old and new). One-to-many and many-to-one get a tree question (they are a
  job, not a material).
- **D46, size:** distinct types only, as for the first 409.

## 4. Draft type lists (to check and trim in the gap search)

Several existing entries already suit these materials (glues, tab-and-slot, cross-halving slot
joint, contact adhesive, hot glue if present, origami mechanisms, living hinges, standoffs, suction
cup, clamp-on tube fittings): **tag them** for the material filter rather than duplicating them.

### Paper and cardboard (priority 1)
- Glued tab or flap joint (paper models; glue stick, PVA, double-sided tape)
- Scored fold hinge (score and crease)
- Split-pin paper fastener (brass "brad", a pivot for paper; not the nail called a brad)
- Cardboard screws, pins and rivets (Makedo-style systems, plastic cardboard rivets)
- Tuck flaps and locking tabs (box closures, crash-lock bottom)
- Bookbinding stitches (pamphlet, kettle, Coptic) and Japanese stab binding
- Slotted cardboard construction (tag the existing slot joints; maybe one entry for corrugated
  card specifically)

### Paper pop-up mechanisms (extra, owner's yes)
- V-fold pop-up; parallel-fold (box or step) pop-up; pull tab and slider; volvelle (rotating
  disc); floating layer and lattice; lift-the-flap hinge. Check overlap with the existing
  origami-mechanisms entry.

### Foam (priority 2: EVA cosplay foam, XPS and EPS, foam board, EPP and Depron for RC planes)
- Contact-cement seam for EVA (tag the existing contact adhesive; perhaps a seam entry)
- Bevel-cut and V-groove seams and folds in EVA foam
- Foam-safe glues (foam-safe CA, hot glue, UHU Por and similar, by foam type)
- Foam-board joints (rabbet joint removing foam but keeping the paper skin; hot glue)
- Pins and skewers in foam (toothpick or bamboo dowels)
- Magnets and hardware set in foam (cosplay armour attachments)
- Tape or fabric hinges in foam (RC control surfaces)

### Clay and polymer clay (priority 3)
- Score and slip (joining raw clay, incl. air-dry clay)
- Wire and foil armatures
- Liquid clay bonding and bake-in-stages joins (polymer clay)
- Baked-in findings and hardware (eye pins, bails, magnets)
- Pinning baked parts (wire pins and glue)

### Carbon fibre and composites (priority 4)
- Bonded lug or sleeve joints for tubes (carbon frames; printed or aluminium lugs)
- Potted inserts for sandwich and honeycomb panels
- Bonded bushings and load-spreading washers for bolting composites
- Stitch-and-glue (wire stitches plus epoxy fillet and glass tape; boat and kayak building)
- Scarf and overlap laminate joints (wet lay-up, co-cured)
- Tag existing: clamp-on tube fittings, standoffs, epoxy

### Glass and mirror (priority 5)
- Mirror clips and glass retainer clips
- Glass clamps and shelf brackets (clamp with rubber pads)
- Stand-off panel mounts (sign standoffs, for glass and acrylic)
- Glass door hinges (clamp-on cabinet glass hinges)
- UV-curing glass adhesive
- Picture-frame glazing points and turn buttons
- Stained-glass joints: copper foil (Tiffany) and lead came, soldered
- Glass fusing and tack fusing (joining glass by heat in a kiln)
- Tag existing: suction cup, silicone sealant and adhesive (aquarium seams)

### One-to-many drives (owner's yes)
- Line shaft or jackshaft (one shaft with several pulleys taking power off)
- Several lead screws kept in step by one belt or chain (3D-printer Z axes)
- Multi-spindle gear head (one central gear driving a ring of gears; gang drive)
- Counter-rotating coaxial drive (bevel gear trio; coaxial rotors)
- Transfer case or power-split gearbox
- Hydraulic or pneumatic manifold (one pump or syringe, several cylinders)
- Cable splitter (one lever pulling several cables)
- Whiffletree or equaliser bar (one pull shared between several lines; also many-to-one)

### Many-to-one (owner's yes)
- Summing linkage (mechanical adder; differential lever)
- Several motors driving one gear or shaft (dual-motor drive, load sharing)
- The differential used to add two inputs (tag or cross-link the existing entry)
- Whiffletree (above) as the summing case

### Guide page (not an entry)
"Driving several things from one": the direction table above with simple drawings; keeping
outputs in step (belts, chains and gears stay in step; friction drives slip); pointers to the
entries. Linked from the finder answer and the families.

## 5. Parked: DIY materials (not researched; owner, 2026-10-22)

Found in the coverage check; to revisit if the owner widens the scope again.

- **Ceramic and tile** (13 entries mention it): tile adhesive and grout joints; tile spacers and
  levelling clips; tile trims and edging; repairing ceramics (epoxy, pinning, kintsugi-style
  repair); drilling and fixing into tile.
- **Stone, concrete and brick** (27 entries mention them, mostly wall anchors; existing entries:
  wall plug, hollow-wall anchors, eye bolts and screw eyes): masonry screws (Tapcon type); chemical
  (resin) anchors; sleeve and wedge anchors; rebar tie wire; mortar joints; wall ties; dowelling
  and pinning stone; dry-stone joints.

## 6. Plan (the order to work in)

1. **Gap search** (scope search like R22's): for each material and extra, find the joint types
   makers use, with sources (forums, Instructables, maker guides, Wikipedia, manufacturer guides);
   check overlap with the 409; write the trimmed list into a
   `scope-search-2026-10-22-*.md` table (suggestion, sources, new entry or tag existing) and add the
   new items to `outline.yaml` (numbers from 410). Families: use existing ones where they fit; add
   a family only if several entries need one (e.g. "paper and card joints"), and update the family
   list wherever families are listed (fields.yaml, make_entries, finder, site sidebar).
2. **Research run** with `/research-deep` on the new items (same `fields.yaml` and rules), validate
   each JSON, commit as you go.
3. **Pipeline:** normalise, `propose.py` (new entries get "not applicable" for the 41 hand-set
   finder fields: **set each new entry's hand fields** where they apply, or the finder will not
   reach them), finder test until every path has 3-10 entries and nothing is unreached,
   `make_entries.py`, `check_entries.py`, `export_finder.py`, glossary for new terms.
4. **Finder:**
   - a new finder-tag field for the material filter (e.g. `suits_material`, list: paper and card,
     foam, clay, carbon fibre and composites, glass and mirror, wood, metal, plastic and 3D prints,
     fabric and leather; plus "any" for glues, tapes and similar), set for **all** entries (old and
     new), proposed from the research text and checked by helper agents like R33, ⚑ where unsure;
   - `export_finder.py` puts it in `finder.json`; `Finder.astro` shows a "Made of" row of buttons
     under the shortlist that filters it (with a count, and a "no match: show all" fallback);
   - a tree answer under *Change a movement* for one input driving several outputs, and for
     combining inputs, with a question on direction (same, opposite, counter-rotating on one axis,
     different speeds), all paths 3-10, examples for every new answer;
   - the guide page in the site.
5. **Pictures:** the *Find pictures* workflow for the new entries, then `--wide` for those without a
   photo; helpers choose from contact sheets; *Fetch pictures*; drawn diagrams and animations as
   in R29/R32; renders (R35) for those still without a photo; every new entry needs at least one
   picture (`check_entries.py` fails otherwise).
6. **Docs and PR:** PROJECT.md (requests, decisions, roadmap, session log), needs-confirming.md,
   READMEs; one PR for the stage; subscribe and drive it to green.
