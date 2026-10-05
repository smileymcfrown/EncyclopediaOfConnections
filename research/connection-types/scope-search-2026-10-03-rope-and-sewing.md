<!-- Saved into the repository on 2026-10-03 from the search agent's working notes (R22). -->
# Scope search 2026-10-03: Rope, knots, lashings and sewn joints

One of six web searches for R22, the wider scope (see `scope-search-2026-10-03-combined.md` for
the combined list the owner confirmed). The agent's write-up follows unchanged, except this
header. Download folders it mentions were working files and were not kept. Suggestion numbers
below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| N0 | 326 | Basic knots (overhand knot, half hitch, reef knot) |
| N1 | 333 | Sew-on part (sewing holes, loops and slots on a rigid part) |
| N2 | 334 | Stopper knots and cord-end anchors |
| P1 | 335 | Printing onto fabric (fabric embedded in a 3D print) |
| H1 | 376 | Wire-rope terminations (wire-rope clip, thimble, crimped sleeve) |
| N3 | 377 | Load-bearing stitch patterns for straps and webbing (bar tack, box-X stitch) |
| N4 | 378 | Hitches to a post, rail, ring or eye (clove hitch, round turn and two half hitches) |
| N5 | 379 | Tensioning and adjustable hitches (trucker's hitch, taut-line hitch, Prusik) |
| H2 | 380 | Eyelets and grommets (for fabric, leather and sheet) |
| H3 | 381 | Bead-in-groove fabric edge (keder, boltrope, screen spline) |
| N6 | 382 | Fixed loop knots (bowline, figure-eight loop, alpine butterfly) |
| N7 | 383 | Bends for joining two cords (sheet bend, double fisherman's knot, water knot) |
| N9 | 384 | Pole lashings (square, diagonal, shear and tripod lashings) |
| N10 | 385 | Rope-end finishing (whipping, heat-sealing, back splice, aglet) |
| N11 | 386 | Sewn seams and hand stitches (lockstitch, saddle stitch, flat-felled seam) |
| N12 | 387 | Lacing (cord through rows of holes or eyelets) |
| N8 | 388 | Rope splices (eye splice, short splice, braided-rope splice) |
| H4 | 389 | Leather and textile rivets (double-cap, tubular and split rivets) |
| H5 | 390 | Chicago screw (binding screw, sex bolt) |
| A1 | 391 | Iron-on fusible web (heat-activated adhesive web, hem tape) |
| N13 | 392 | Binding knots and seizings (constrictor knot, seizing, cable lacing) |

---

**FINISHED** (2026-10-03, after a re-verification run: every source below was re-opened in this run and its quotes checked against the page text, unless marked otherwise.)

# Rope, knots, lashings and sewn joints: scope search (2026-10-03)

Group: knots and hitches, lashings, splices, rope ends, wire-rope terminations, sewn joints,
lacing, eyelets and grommets, fabric edges in grooves, leather rivets, Chicago screws, iron-on
fusible web.

Checked against all 323 result files in `research/connection-types/results/` (grep for knot,
hitch, lashing, splice, whipping, heat-seal, sew, stitch, bar tack, grommet, eyelet, rivet,
Chicago, sex bolt, wire rope, thimble, ferrule, swage, crimp, fusible, iron-on, lacing,
drawstring, soft shackle, Prusik, bowline, clove, constrictor, seizing, aglet, whoopie, keder,
boltrope, spline, tulle, fabric glue). Earlier rulings: run 1 put "knots and textile joining" out
of scope (gap-search line 248); outline-notes lists Chicago screws, eyelets and grommets, crimped
wire-rope sleeves and iron-on fusible web as near-misses; run 3 question 19 found the gap
"sewing or lacing a part on".

## Summary
- **21 new types:** 14 in a proposed new family (N0-N13: one baseline, six grouped knot and
  hitch entries, pole lashings, rope splices, rope-end finishing, sew-on parts, webbing stitch
  patterns, seams and hand stitches, lacing), 5 in the existing cord family (H1-H5: wire-rope
  terminations, eyelets and grommets, bead-in-groove fabric edges, leather rivets, Chicago
  screw), 1 in print-in-place (P1 printing onto fabric) and 1 in adhesives (A1 iron-on fusible
  web).
- **Knots: grouped by job, not one entry per knot.** Wikipedia (*Knot*, *List of knots*), the
  *Ashley Book of Knots* (entries "categorized by type or function") and Animated Knots (Basic,
  Bends, End Loops, Hitches, Mid Loops, Quick Release, Slide & Grip, Splicing, Stoppers) all sort
  knots by job, and a beginner asks by job ("tie a line to a rail", "join two cords"). Each knot
  is already animated and explained on Animated Knots and Wikipedia, so each grouped entry names
  2-4 recommended knots, says when to choose each, gives the ABOK number as a reference ID (as
  both sites do), and links out for the tying steps. One entry per knot would add 15-30 cards
  whose fields (motion, removability, tools, access) would all be the same.
- **The Ashley Book of Knots**: cite it through Wikipedia (1944, 3,857 numbered entries, about
  7,000 illustrations) and use "ABOK #" numbers as IDs. A scan on archive.org shows up in search
  results, but the book is still in print and the scan's rights are unclear, so don't link it.
  Animated Knots: link only (the animations are its own). ABOK numbers fit the existing `links`
  or `aliases` fields (e.g. "bowline (ABOK #1010)"); no new field is needed.

---

## 1. Family placement

**New family (proposed)**
- key: `knots, lashings & sewn joints`
- label: *Tied, lashed, spliced or sewn with cord or thread*
- holds N0-N13.

**Existing family: keep the key, change the label**
- `cord, strap, webbing & textile hardware`: label *Rope, cord, strap, webbing and textile
  hardware* -> *Hardware for rope, cord, straps, fabric and leather*. Takes H1-H5. Keeping the
  key avoids re-tagging its 15 entries and the `other_families` lists that name it.

**Other existing families**
- `print-in-place & 3D-printing joints`: P1.
- `adhesives & bonding`: A1.

**Why a new family rather than stretching the cord family**
1. **It holds a different way.** Every cord-family entry is a part you buy or print (buckle,
   cleat, cord lock, hook, zipper). Knots, lashings, splices, seams and lacing are made from the
   cord or thread itself and hold by friction, by the knot's shape, or by thread passing through
   the material. Run 2 already uses the holding principle to separate families.
2. **It gives the finder a clean question.** *Hold together -> Strap, cord, rope or fabric*
   (10 entries today, split into "close an opening or attach fabric" and "join strap ends, hook
   on or grip a cord") can first ask *"Fit a part (buckle, cleat, grommet), or tie, lash or sew
   it?"*. Each answer then leads to about 14-20 entries instead of one list of about 34.
3. **Size.** Merged, the cord family would hold 34 entries (15 + 5 + 14), the largest family
   (hydraulics has 27, joinery 24), mixing buckles with sewing stitches. Kept apart: 20 and 14.
4. **The references are organised the same way** (by job), so the new entries map one to one
   onto Animated Knots categories and Wikipedia articles, which keeps link-outs simple.
5. **Shared know-how and safety:** the same tools (fid, awl, needle, pricking iron), failure
   modes (slipping, capsizing, jamming, fraying, chafe) and safety rule (Animated Knots: assume
   new rope gives "no more than 50% of its rated breaking strength" because of knots and kinks,
   and never trust a home-made knot, splice or seam to hold a person).

Hardware that only works with rope or fabric (wire-rope clips, thimbles, sleeves, grommets,
keder rails, leather rivets, Chicago screws) stays with the other hardware in the cord family.

**Boundaries with other agents**
- Shackles, hooks, eye bolts, hog rings, staples, split rings and safety wire (lockwire):
  standard hardware agent (safety wire is already in #260 *Thread-locking hardware*'s results).
  The *soft shackle* (a shackle made of rope) is folded into N8 here.
- Chicago screws and grommets may also come up from the hardware agent: merge into one entry
  each. My suggestion is the cord family (H2, H5).
- Rubber grommets for cables: #134 and #215, and the electrical agent.
- Conductive thread and sewable electronics (Printables has sewable LilyPad covers and coin-cell
  holders): electrical agent.
- The underwriter's knot (a strain-relief knot inside lamp plugs) is a knot doing an electrical
  job: suggested as a note to #134, unless the electrical agent covers it. Cable lacing (in
  N13) is also of interest to the electrical agent.
- Heat-welded, RF-welded and ultrasonic fabric seams and heat-sealed TPU film: heat-joining
  agent (already used in #290 and #305). Keder is often welded to fabric, but H3 is about the
  bead and track, not the weld.

---

## 2. Suggested new types

### Ranked by usefulness to a hobbyist maker

| Rank | ID | Name | Family | Tier |
|---|---|---|---|---|
| 1 | N1 | Sew-on part: sewing holes, loops and slots | knots, lashings & sewn joints | 1 |
| 2 | N2 | Stopper knots and cord-end anchors | knots, lashings & sewn joints | 1 |
| 3 | P1 | Printing onto fabric | print-in-place & 3D-printing joints | 1 |
| 4 | H1 | Wire-rope terminations | cord, strap, webbing & textile hardware | 2 |
| 5 | N3 | Load-bearing stitch patterns for webbing | knots, lashings & sewn joints | 2 |
| 6 | N4 | Hitches to a post, rail, ring or eye | knots, lashings & sewn joints | 2 |
| 7 | N5 | Tensioning and adjustable hitches | knots, lashings & sewn joints | 2 |
| 8 | H2 | Eyelets and grommets | cord, strap, webbing & textile hardware | 2 |
| 9 | H3 | Bead-in-groove fabric edge (keder, boltrope, screen spline) | cord, strap, webbing & textile hardware | 2 |
| 10 | N6 | Fixed loop knots | knots, lashings & sewn joints | 2 |
| 11 | N7 | Bends: joining two cords | knots, lashings & sewn joints | 2 |
| 12 | N9 | Pole lashings | knots, lashings & sewn joints | 2 |
| 13 | N10 | Rope-end finishing | knots, lashings & sewn joints | 2 |
| 14 | N11 | Sewn seams and hand stitches | knots, lashings & sewn joints | 2 |
| 15 | N12 | Lacing | knots, lashings & sewn joints | 2 |
| 16 | N8 | Rope splices | knots, lashings & sewn joints | 2 |
| 17 | H4 | Leather and textile rivets | cord, strap, webbing & textile hardware | 2 |
| 18 | H5 | Chicago screw | cord, strap, webbing & textile hardware | 2 |
| 19 | A1 | Iron-on fusible web | adhesives & bonding | 2 |
| 20 | N13 | Binding knots and seizings | knots, lashings & sewn joints | 2 |
| baseline | N0 | Basic knots (overhand, half hitch, reef knot) | knots, lashings & sewn joints | baseline |

"#" numbers below are outline.yaml item numbers.

### N1. Sew-on part: sewing holes, loops and slots (sewing a rigid part to fabric)
- **Description:** Small holes, loops, slots or a thin flange designed into a rigid part, often
  a 3D print, so it can be stitched to fabric, straps or a costume with needle and thread, like a
  sew-on button or badge.
- **Nearest items and why it's distinct:** #269 *Basic strap and garment closures* (sew-through
  buttons, but the entry is about closing an opening); #157 *Hook-and-loop* and #172 *Press stud*
  (sew-on versions of their own parts). None covers attaching any part to fabric. This was the
  gap in run 3 question 19, where the finder could only offer hook-and-loop and glue.
- **Family:** `knots, lashings & sewn joints` (other: `print-in-place & 3D-printing joints`,
  `cord, strap, webbing & textile hardware`)
- **Tier:** 1
- **What to cover:** the Q19 commenters' options, from "Most janky" to "Least janky": hot glue,
  then "drill, hot needle pierce, or design holes in the edge of the mask and hand sew fabric on
  directly", then adhesive-backed hook-and-loop; others suggested E6000, contact adhesive, spray
  adhesive, diluted PVA, "loops to the model that you can run a needle and thread through", and
  holes at 90 degrees through a thickened edge so the thread turns the corner. Printed examples:
  a mask published "with Sewing Holes" because "the cloth was a pain to position"; sewable labels
  with 2 mm holes 3 mm from the edge; a magnet case "with 4 holes to be easily sewed into fabric"
  for hanging curtains; a sew-on AirTag holder; fursuit ear gauges where a printed "button" is
  sewn on and the rest screws onto it. Cosplay practice: snaps and hooks "are sewn down by hand
  through provided holes"; glue a jewellery bail or jump ring to a resin part, then sew that to
  the fabric; fusible interfacing behind the fabric stops it stretching or fraying. Adafruit's
  printed hat badge has built-in "sew tabs": print in flexible filament (or PLA curved with hot
  water), "drill out the sew holes with a small bit" if the needle won't pass, then sew with a
  needle on each end of the thread. Research: Li and Lee (2022) compared sewing, gluing and
  "physical joining mechanisms" for 3D-printed fabrics and found sewing and adhesives suit
  printed clothing, physical joints suit accessories. Design points still to research: hole size
  for the needle, distance from the edge, chamfered holes so the thread isn't cut, and a printed
  slot for a strap (sewn back on itself, see N3).
- **Safety:** none special (needle and hot-needle burns).
- **Sources (opened):**
  - https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1e63nnr&limit=200 (archive of the r/3Dprinting Q19 thread linked in flowchart-and-format.md 1.7; reddit.com not opened)
  - https://dangerousladies.ca/blogs/tutorials/attaching-resin-3d-prints-cosplay (sewn snaps and hooks, pin backs, bails and jump rings, flexible CA, fusible interfacing)
  - https://learn.adafruit.com/custom-3d-hat-graphics.md?view=all (Adafruit Learn guide with photos of printed sew tabs being stitched on; the Markdown view of the guide was opened)
  - https://www.iastatedigitalpress.com/itaa/article/id/15845/ (Li & Lee, "Exploring Joint Methods of 3D Printed Fabrics Used for Wearable Products", ITAA Proceedings 79(1), 2022; abstract)
  - Printables 980458 "Ghost Red Team 141 Operator Mask (with Sewing Holes)", 804730 "Sewable brand labels - parametric", 1713973 "Case for 10x2mm magnet with sewing holes", 130322 "Air Tag Holder - sew-on", 622457 "Sew on ear plugs/gauges for fursuit heads" (Printables API; pages not opened)

### N2. Stopper knots and cord-end anchors (keeping a cord from pulling through a hole)
- **Description:** Ways to stop the end of a cord, string, elastic or thin cable pulling out
  through a hole in a part: a bulky knot behind the hole or in a pocket, a crimped stop, a clamp
  under a screw head, or a few turns round a post.
- **Nearest items and why it's distinct:** anchoring is mentioned in passing in #278
  *Tendon-driven joint*, #101 *Capstan cable drive* ("anchored to the big drum by knots, ball
  fittings, clamps or holes"), #76 *Multi-stage slide rigging* (clamp under a bolt head), #152
  *Shock-corded pole*, #1 *Ratcheting reel closure* (lace "knotted and mechanically anchored
  inside the spool"), #154 *Guy-line slider* (finish with an overhand stopper), #282 *Elastic
  band springs* ("holes with a knot tied behind them"), #92 and #276. No entry covers the anchor
  itself, which nearly every cord project needs. #134 *Cable gland* is strain relief for
  electric cable.
- **Family:** `knots, lashings & sewn joints` (other: `print-in-place & 3D-printing joints`,
  `cord, strap, webbing & textile hardware`)
- **Tier:** 1
- **What to cover:** overhand vs figure-eight: the overhand "can bind so tightly that it can be
  really difficult to undo"; the figure-eight "doesn't bind" but "can fall undone"; the double
  overhand, stevedore and Ashley stoppers "all make better Stopper knots because they are
  larger"; Animated Knots lists the EStar stopper "For Very Slippery Rope". Design points: a
  counterbore or slot that holds the knot, rounded hole edges, a washer for abrasive cord ("tie
  the string around a washer to distribute the loads across the hole in the pulley instead of
  tying it directly into a hole", gm0), "Clamping a string with a bolt instead of tying it" so
  tension is easy to change (gm0), crimped stop sleeves for wire (H1), printed paracord clamps.
  The underwriter's knot is the electrical version (note to #134).
- **Sources (opened):**
  - https://www.animatedknots.com/stopper-knots and https://www.animatedknots.com/figure-8-knot
  - https://www.animatedknots.com/overhand-knot (ABOK #46, "the simplest of the Single-Strand Stopper Knots")
  - https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/rigging.html
  - Printables 147380 "quick Paracord rope clamp 4mm & thimble" and 147775 "Paracord thimble and rope clamp" (both "Obviously not suitable for safety relevant applications"; Printables API; pages not opened)

### P1. Printing onto fabric (fabric embedded in a 3D print)
- **Description:** Pause the print after the first few layers, stretch a thin open mesh such as
  tulle over it, then print the rest so the plastic flows through the holes and locks the fabric
  in, making flexible scale armour, hinged panels or a print with a fabric skirt.
- **Nearest items and why it's distinct:** #178 *Origami mechanisms* already describes the
  method in detail, but only as the hinge layer for folding origami ("pause, lay fabric or nylon
  mesh flat over the bed and clip it ... so the next layer bonds through the mesh"). #281
  *Multi-material interlock* joins two printed materials. A maker who wants to fix fabric to a
  print (Q19) won't look under origami. **Fallback:** if the owner prefers fewer entries, add
  "printing onto fabric to attach cloth or make scale armour" to #178's notes and cross-link it
  from N1 and #157.
- **Family:** `print-in-place & 3D-printing joints` (other: `knots, lashings & sewn joints`)
- **Tier:** 1
- **What to cover:** pause after layer 1 (Printables 1038289, 359647) or "at Layer 3 or 4 (approx
  0.6mm - 0.8mm)" (Siraya); tape the mesh tight; mesh "Under 0.2mm thickness is ideal" with a
  layer height "higher than the mesh thickness" (Printables 359647); open mesh such as tulle or
  polyester mesh, because if the mesh is too dense the scales peel off; "Leave 2mm-3mm gaps
  between scales" as hinges; Z-hop so the nozzle doesn't drag; TPU forms "a permanent bond that
  won't peel off even after washing" (Siraya, a filament maker's claim). Research: "A critical
  factor is the adhesion between the printed polymer and the textile fabric", and "adding nubs to
  the lower 3D-printed layers stabilizes the inner textile fabric" (Özev and Ehrmann). Makers hold
  the fabric with "Magnets outside the build area" and have used organza as well as tulle (Prusa
  forum).
- **Safety:** "Synthetic fabrics like Nylon have low melting points" (Siraya); watch the first
  layers after resuming so the nozzle doesn't snag the mesh.
- **Sources (opened):**
  - https://siraya.tech/blogs/news/3d-printing-on-fabric (filament maker's guide; check claims)
  - https://cdatp.publia.org/cdatp/article/view/110 (Özev & Ehrmann, "Sandwiching textiles with FDM Printing", *Communications in Development and Assembling of Textile Products* vol. 4 no. 1)
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-how-do-i-print-this-printing-help/printing-over-tulle-fabric
  - Printables 1038289 "Dragon scales ( print on fabric )" (Public Domain) and 359647 "How to print on fabric" (Printables API; pages not opened)

### H1. Wire-rope terminations (wire-rope clip or bulldog grip, thimble, crimped sleeve or ferrule)
- **Description:** Ways to make a loop or an end stop in steel wire rope: bend it round a
  grooved thimble and hold the tail with U-bolt clips, or squeeze a metal sleeve round both parts
  with a crimping tool.
- **Nearest items and why it's distinct:** #150 *Turnbuckle* (swage studs as end fittings); #148
  *Woven grip* (says to use "a swaged or clamped termination" for permanent hanging); #102
  *Bowden cable* (crimp end caps); #278 *Tendon-driven joint* (1/16 in wire rope with barrel
  ferrules and clamps); #101 (crimped stop sleeves); #151 lists "wire rope clips and thimbles".
  No entry covers how to terminate wire rope.
- **Family:** `cord, strap, webbing & textile hardware` (other: `tensioning, reels & take-up`)
- **Tier:** 2 (robotics uses: tendons, pull-pull linkages, capstan drives)
- **What to cover:** clips (Crosby): "Apply first clip one base width from dead end of rope.
  Apply U-Bolt over dead end of wire rope – live end rests in saddle (Never saddle a dead
  horse!)", tighten the nuts evenly with a torque wrench, apply a first load, then re-check
  torque. Efficiency is 80% for clip sizes 1/8 to 7/8 in and 90% from 1 in. Table 1: 1/8 in rope
  needs 2 clips, 3-1/4 in turn-back and 4.5 ft-lb; add a clip when turning round a sheave; "Do not
  use with plastic coated wire rope"; ANSI A17.1 and A10.4 "do not recommend U-Bolt style wire
  rope clip terminations" for elevators, personnel hoists and scaffolds. WorkSafeNB: "up to 85%"
  and "At least three clips ... (especially for overhead lifting)", which conflicts with Crosby's
  two for small ropes: record both. Wikipedia: a thimble preserves "the natural shape of the
  loop" and its use "is industry best practice"; regulators don't recommend clips as permanent
  terminations "unless periodically checked and re-tightened"; efficiencies run from about 70%
  (Flemish eye alone) to 100% (potted ends and swagings, marked "citation needed"); "Swaging
  ropes with fibre cores is not recommended". Crimp sleeves (Nicopress): use the matching tool
  and "the correct number of presses", check each crimp with the gauge supplied with the tool,
  pull enough cable through that "the end will still protrude after crimping", and match sleeve
  metal to cable (plain or zinc-plated copper on galvanised, tin-plated copper or stainless on
  stainless). Aluminium ferrules: made to EN 13411-3, "Perfect for 7x19 Wire Rope", "Not suitable
  for use with 1x19", and not in marine or coastal use with stainless (S3i). Wedge sockets ("The
  efficiency of a properly assembled Wedge Socket is 80%") and zinc-poured spelter sockets are
  industrial: notes only (CERTEX). Printed option: a clamp stopper for 2-2.5 mm wire rope with an
  M4 screw (Printables 1351058).
- **Safety:** yes. Not for lifting people; overhead lifting needs rated terminations, the right
  clip count and torque, and inspection. Cut wire ends are sharp; use thimbles so the eye isn't
  crushed.
- **Sources (opened):**
  - https://www.thecrosbygroup.com/wp-content/uploads/2013/12/56.pdf (Crosby clip warnings and application instructions, with figures)
  - https://en.wikipedia.org/wiki/Wire_rope (terminations section; images Wire_rope_with_thimble_and_ferrule.jpg, Wire_rope_clamps.jpg, Wire_rope_eye_splice.jpg)
  - https://www.nicopress.com/media/documents/Nicopress_Instruction_32_Metric_05-12.pdf (oval and stop sleeves: crimps per sleeve, gauge check, eye and lap splices)
  - https://www.worksafenb.ca/safety-talk/en/15-wire-rope-cable-clips.html
  - https://www.s3i.co.uk/aluminium-ferrule-standard.php; https://certex.com/wp-content/uploads/2024/01/204522-CERTEX_SEC4_WIREROPETERMINATIONS.pdf
  - Printables 1351058 "Drahtseil Klemmstopper / Wire rope clamp stopper" (Printables API; page not opened)

### N3. Load-bearing stitch patterns for straps and webbing (bar tack, box-X, W-W pattern)
- **Description:** Dense stitch patterns used where a strap is sewn back on itself or onto a
  buckle, ring, slot or another strap, such as a bar tack, a box with an X through it, or a
  zigzag pattern, so the load spreads over many stitches.
- **Nearest items and why it's distinct:** #269 mentions bar tacks at buttonhole ends; #157
  gives the box stitch for sewing tape on; #123 says webbing is "usually sewn to the buckle at one
  end"; #124 tacks the tail. No entry covers making the strap joint itself, which every buckle,
  D-ring and strap-through-a-slot attachment depends on.
- **Family:** `knots, lashings & sewn joints` (other: `cord, strap, webbing & textile hardware`)
- **Tier:** 2
- **What to cover:** FAA *Parachute Rigger Handbook* (ch. 2, PDF p. 49): needle size and
  condition, thread size, "The stitch pattern used and length. A W–W pattern is stronger than a
  box X pattern", and "The number of times the webbing is re-sewn" all affect "the ultimate
  strength of the webbing junction". Canopy repairs use a 301 straight stitch at 7-11 stitches
  per inch; braided lines are "finger-trapped" onto connector links and secured with a bar tack.
  Practical Sailor's hand-stitched nylon webbing tests: normal stitching "levels off at about 69
  percent of the webbings rated strength, the same as a basic water knot"; more rows gave 83%; a
  sandwiched webbing insert gave 100%; "Commercial bar tacking is known to be about 90 percent
  efficient"; doubled 40-50 lb polyester whipping twine worked best, and Dyneema twine on nylon
  webbing "cuts through, resulting in a 30 percent loss in strength"; a sidebar is headed
  "Webbing Failure often Begins at the Ends". Home-machine options (Ripstop by the Roll): repeated
  straight stitch ("3-4 passes at a max" because more holes weaken it), a DIY bar tack with a
  zigzag or buttonhole setting, the Z stitch, and the box-X; "test your stitch, pull on it
  aggressively". Bar tack size: 1/16-1/8 in (1.6-3.2 mm) wide and 1/4-3/8 in (6.4-9.5 mm) long
  (Wikipedia). The FAA and Practical Sailor stress different things (pattern vs rows and
  reinforcement): record both.
- **Safety:** never home-sew climbing slings, harnesses, tow or lifting straps. The FAA handbook
  lists, for each parachute repair, which certificated riggers may do it.
- **Sources (opened):**
  - https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/prh_change1.pdf (FAA-H-8083-17 with Change 1; downloaded and text-searched)
  - https://www.practical-sailor.com/sails-rigging-deckgear/is-hand-stitched-nylon-webbing-strong-enough
  - https://ripstopbytheroll.com/blogs/the-grid-online-blog/4-ways-to-secure-a-buckle
  - https://en.wikipedia.org/wiki/Bar_tack (image Bartacks_(cropped).jpg)

### N4. Hitches to a post, rail, ring or eye (clove hitch, round turn and two half hitches, cow hitch)
- **Description:** Knots that tie a line to something solid, such as a post, rail, ring, bolt
  or a hole in a part, and can be tied and undone without tools.
- **Nearest items and why it's distinct:** #156 *Spring-gate hook*, #121 *Cam cleat* and #122
  *Clam cleat* do this job with hardware (both cleat entries compare themselves with a knot);
  this entry is the no-parts way.
- **Family:** `knots, lashings & sewn joints` (other: `cord, strap, webbing & textile hardware`)
- **Tier:** 2
- **What to cover:** clove hitch (ABOK #1245): "it slips and, paradoxically, can also bind",
  and "is not a knot to be used alone"; fine for a temporary hold such as stage scenery. Round
  turn and two half hitches: the round turn "should take the initial strain while you complete
  the knot", and it is one of four knots Animated Knots says "can be tied and untied under load".
  Cow hitch (lark's head, girth hitch): ties a loop or strap to a ring, bar, tag or zip pull, but
  "Can fail unless equal tension is applied to both of the standing parts" (Wikipedia; ABOK
  #1673, #1802). Timber hitch for a pole or log. The half hitch (ABOK #50) as the building block.
  For slippery fishing line or braid on an eye, the Palomar knot "retains almost all of the
  original line strength". Robotics tip (gm0): clamp string under a bolt instead of tying it.
- **Sources (opened):**
  - https://www.animatedknots.com/hitch-knots (category index)
  - https://www.animatedknots.com/clove-hitch-knot-rope-end, https://www.animatedknots.com/round-turn-two-half-hitches-knot, https://www.animatedknots.com/cow-hitch-knot-end-method, https://www.animatedknots.com/timber-hitch-knot, https://www.animatedknots.com/safety
  - https://en.wikipedia.org/wiki/Cow_hitch (images Tête_d'alouette.jpg, Cowhitch_in_loop.png, ZipperCowHitch.jpg)
  - https://en.wikipedia.org/wiki/Palomar_knot

### N5. Tensioning and adjustable hitches (trucker's hitch, taut-line hitch, Prusik)
- **Description:** Knots that let you pull a line tight and hold it, or slide a loop to adjust
  it, with no hardware: the trucker's hitch makes a rope pulley, the taut-line hitch a sliding
  loop for tent lines, and a Prusik grips another rope or a pole.
- **Nearest items and why it's distinct:** #154 *Guy-line slider* (already says to use "the
  taut-line hitch, trucker's hitch or McCarthy hitch" for no hardware), #153 *Ratchet strap*
  (lists the trucker's hitch as the no-hardware alternative), #123 *Cam buckle*, #149 *Rope grab*,
  #206 *Pulley system*. This entry is the knot-only way.
- **Family:** `knots, lashings & sewn joints` (other: `tensioning, reels & take-up`)
- **Tier:** 2
- **What to cover:** trucker's hitch: "a theoretical 3:1 purchase", but "In practice the
  mechanical advantage is much less, may be more like 1.6:1", and the friction "helps hold the
  gain while the end is secured". Taut-line hitch: Animated Knots treats it as "a variation of the
  Rolling Hitch"; with "particularly stiff or slick modern fibers (e.g. polypropylene) these
  hitches can be difficult to make hold at all" (Wikipedia). Rolling hitch: "Some modern ropes are
  very slippery, e.g., Spectra, Dyneema, and Polypropylene. A Rolling Hitch will not hold at all
  in such materials." Slide-and-grip knots in general: "many of these knots (all?) will fail with
  modern slippery ropes". Adjustable grip hitch: for tent ridgelines and guy lines, but "should be
  avoided for critical applications such as climbing since it may slip when shock loaded".
  Prusik: climbing use links out; #149 already records a USFA single-Prusik test. Variants:
  midshipman's hitch, Blake's hitch, Klemheist; the whoopie sling is the spliced version (N8).
- **Safety:** friction hitches in slippery cord can let go suddenly; climbing and arborist uses
  need training and rated gear.
- **Sources (opened):**
  - https://www.animatedknots.com/truckers-hitch-knot
  - https://en.wikipedia.org/wiki/Taut-line_hitch (images Dining_fly_(tent).svg, AdjustableHitchVariations.jpg, TautlineHitch-ABOK-1800.jpg)
  - https://www.animatedknots.com/rolling-hitch-knot, https://www.animatedknots.com/slide-grip-knots, https://www.animatedknots.com/adjustable-grip-hitch-knot, https://www.animatedknots.com/prusik-knot, https://www.animatedknots.com/scouting-knots (taut-line as a rolling-hitch variation)

### H2. Eyelets and grommets (for fabric, leather and sheet)
- **Description:** A metal or plastic ring set into a hole in fabric, leather or thin sheet to
  reinforce it, so a cord, hook, lace or peg can pass through without tearing it.
- **Nearest items and why it's distinct:** #215 *Elastomer isolation mount* (rubber isolator
  grommets for vibration); #134 *Cable gland* (rubber cable grommets); #172 *Press stud* uses an
  eyelet to fix its parts; #269 suggests "a grommet with a washer or reinforcing patch" for
  webbing holes. The textile reinforcing eyelet, set with a punch and die, isn't covered.
- **Family:** `cord, strap, webbing & textile hardware`
- **Tier:** 2
- **What to cover:** "The grommet prevents the cord from tearing through the hole"; "Small
  grommets are also called eyelets, especially when used in clothing or crafting"; in sailing
  they are called cringles. Set with "A simple punch, a metal rod with a convex tip ... struck
  with a hammer", a grommet press "with punch and anvil", or a powered machine (Wikipedia).
  Washer types (Trivantage): plain washers "work best in general or stationary uses"; tooth
  washers "bite down for heavier duty projects"; spur washers have more teeth "for the most
  robust and secure option"; neck washers have "a longer flange" for barrel-to-barrel settings;
  self-piercing grommets "cut through the fabric while simultaneously being set". Sizes run "#00
  to #4": link to catalogues. Printed versions: a screw-assembled tarp grommet (Printables 20004)
  and printed shoe eyelets (213352). The rope grommet (a ring laid up from rope) goes in N8's
  notes.
- **Boundary:** the hardware agent may also suggest grommets; merge.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Grommet (images Eyelet.jpg, Eyelets_For_Curtain.jpg, Grommet.jpg)
  - https://marketcorner.trivantage.com/grommet-guide (opened with WebFetch, since curl was refused; quotes from its summary)
  - Printables 20004 "Screw Assembly Tarp Grommet" and 213352 "Shoe Eyelet" (Printables API; pages not opened)

### H3. Bead-in-groove fabric edge (keder, boltrope, screen spline)
- **Description:** A rope or plastic bead sewn or welded along the edge of fabric, or a rubber
  cord pressed in over a mesh, sits in a C-shaped groove in a frame and holds the whole edge at
  once, as on awnings, tents, sails and window screens.
- **Nearest items and why it's distinct:** #131 *Gasket* covers cord-in-groove seals and #113
  *Aluminium-extrusion connectors* slide parts into T-slots, but nothing holds a fabric or mesh
  edge in a groove; no result file mentions keder, boltrope or screen spline. It's a way to fix
  fabric to a frame without sewing or fastening each point.
- **Family:** `cord, strap, webbing & textile hardware` (other: `clamping, magnetic & friction
  connections`, `sliding, telescoping & linear motion`)
- **Tier:** 2 (printed hooks and clips that lock into keder rails are popular; see below)
- **What to cover:** keder is "a bead or core that attaches to a fabric panel and then slides
  into a corresponding track in a frame", a flexible PVC core wrapped in fabric; tent sizes
  "commonly range from 11 to 13 millimeters"; fixed to the fabric by hot welding, RF welding or
  sewing; "The keder's engagement in the framework seals out the elements"; it replaced "lacing
  adjacent sections with corresponding loops and grommets" (Specialty Fabrics Review). Sailrite
  says to "sew this covered awning rope along the edge of the fabric being used and pull it into
  the groove of the attached track. No crimping tools required", and sells a keder rail strip
  "for fabric-to-fabric applications". A bolt rope is "sewn at the edges of the sail to reinforce them, or to fix the
  sail into a groove in the boom or in the mast" (Wikipedia). Window screens: "The screen is held
  in place with a plastic cord, called a spline, that runs in a channel around the perimeter",
  pressed in with a screen rolling tool, the convex wheel for the mesh and the concave wheel for
  the spline (Bob Vila). Printed accessories: hooks and tarp clips that lock into 7-10 mm keder
  rails on camper awnings, one designed to break "under extreme conditions to avoid damage to the
  awning" (Printables 35274, 560759), and a folding guide for making piping or keder from a
  fabric strip (807285).
- **Safety:** none special.
- **Sources (opened):**
  - https://specialtyfabricsreview.com/2019/03/01/making-it-easy-the-benefits-of-keder/ (trade magazine; photo of a keder cross-section)
  - https://sailrite.com/Keder-Awning-Rope-Tape (product page)
  - https://en.wikipedia.org/wiki/Bolt_rope
  - https://www.bobvila.com/articles/wood-window-frame-screen-replacement (screen-spline steps with photos)
  - Printables 35274 "Hooky - the helpful Snake | multifunctional hook for awning Keder rails", 560759 "Keder Tarp Clip", 807285 "Piping / Keder folding device" (Printables API; pages not opened)

### N6. Fixed loop knots (bowline, figure-eight loop, alpine butterfly)
- **Description:** Knots that make a loop that won't tighten up, at the end of a line or in its
  middle, to drop over a hook or post or to clip into.
- **Nearest items and why it's distinct:** #156 *Spring-gate hook* needs a loop to clip to; N8
  *Rope splices* makes a permanent loop. No entry covers knotted loops.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2
- **What to cover:** bowline (ABOK #1010): "Under load, it does not slip or bind. With no load it
  can be untied easily", but "it cannot be tied, or untied, when there is a load on the standing
  end", and "When a Bowline is unloaded, it can very readily work its way untied", so for safety
  "A Safety Knot is essential" or a Yosemite tie-off. Figure-eight loops for security (several in
  the End Loops category). Alpine butterfly: "useful anytime a secure loop is required in the
  middle of a rope", and a far safer way than the sheepshank to isolate a damaged section.
- **Safety:** for anything that holds a person, use a rated system.
- **Sources (opened):**
  - https://www.animatedknots.com/bowline-knot
  - https://www.animatedknots.com/end-loop-knots and https://www.animatedknots.com/mid-loop-knots
  - https://www.animatedknots.com/alpine-butterfly-loop-knot

### N7. Bends: joining two cords (sheet bend, double fisherman's, water knot)
- **Description:** Knots that join the ends of two ropes, cords or flat tapes, including ones of
  different thickness.
- **Nearest items and why it's distinct:** none in the outline; N8's short splice is the
  permanent version.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2
- **What to cover:** sheet bend (ABOK #1431) "is recommended for joining two ropes of unequal
  size", with the thicker rope forming the bight; the double sheet bend "When the ropes are
  markedly different in size"; tails "on the same side"; "For critical loads the ends must be
  left much longer". Never the reef knot (N0). Double fisherman's (grapevine bend) to close a cord
  into a loop, as for a Prusik loop; water knot for flat webbing, where cyclic loading "can cause
  the outer strap to work loose" (leave long tails); the Zeppelin bend as a non-jamming option
  that "can be untied even after being heavily loaded". Fishing-line bends (blood, Albright) link
  out.
- **Sources (opened):**
  - https://www.animatedknots.com/sheet-bend-knot and https://www.animatedknots.com/bend-knots
  - https://www.animatedknots.com/double-fishermans-bend-knot, https://www.animatedknots.com/water-knot, https://www.animatedknots.com/zeppelin-bend-knot

### N9. Pole lashings (square, diagonal, shear, round and tripod lashings)
- **Description:** Rope wrapped round two or three poles where they cross or touch, then pulled
  tight with turns between the poles (frapping turns), to build frames, tripods and A-frames
  without nails or bolts.
- **Nearest items and why it's distinct:** #298 *Reciprocal frame* lists rope or wire lashing as
  one way to fix its crossings; #220 *Clamp-on tube fittings* and the joinery entries join poles
  with hardware or cut joints. Nothing covers lashing as a joint.
- **Family:** `knots, lashings & sewn joints` (other: `interlocking joints & joinery`)
- **Tier:** 2
- **What to cover:** definition: "an arrangement of rope, wire, or webbing with linking device
  used to secure and fasten two or more items together in a somewhat rigid manner", made of
  "wraps" and "fraps" (Wikipedia). Square lashing (ABOK #2114): "designed to be load bearing and
  can be used to create scaffolding", and works "when the angle between the two poles is as
  little as 45 degrees"; start with a clove hitch, three or four wrapping turns, three or four
  frapping turns, finish with two or three half hitches. Diagonal lashing for bracing, best when
  "the angle between the poles is closer to 45 degrees". Shear lashing for shear legs and
  A-frames. Round lashing joins "two parallel spars together to make a longer one", tightened
  with wedges. Tripod lashing is the one where "it is possible to make it too tight!". Garden
  practice (Fine Gardening): cotton or nylon string for finger-thick bamboo, thin clothesline for
  a bean tepee; "the key to a taut lashing is to make two or three or even four really tight
  turns, known as frapping turns"; a diagonal lashing starts with a timber hitch; the scouting
  *Fieldbook* allows "1 yard of rope for each inch of the combined diameters of the spars". A US
  National Park Service blog shows a bamboo trellis lashed with polypropylene twine for under $3.
  Other maker uses: dowel frames, camp gadgets, lashed joints on printed or PVC tubes (zip ties
  and wire as alternatives).
- **Safety:** lashed structures people climb or stand on need checking under load (scouting
  pioneering practice; no rule source opened).
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Lashing_(ropework) (images Square_Lashing.jpg, Temple_St._bamboo_scaffolding_2.JPG)
  - https://www.finegardening.com/article/learn-lashing-and-make-your-own-garden-trellises (with lashing diagrams)
  - https://www.nps.gov/chat/blogs/building-with-bamboo.htm
  - https://www.animatedknots.com/square-lashing-knot, https://www.animatedknots.com/diagonal-lashing-knot, https://www.animatedknots.com/shear-lashing-knot, https://www.animatedknots.com/round-lashing-knot, https://www.animatedknots.com/tripod-lashing-knot (index: https://www.animatedknots.com/scouting-knots)

### N10. Rope-end finishing (whipping, heat-sealing, back splice, aglets)
- **Description:** Ways to stop a cut rope, cord or webbing end fraying: binding it with twine
  (whipping), melting synthetic fibres, tucking the strands back (back splice), tape, a rubbery
  dip coating, or a cap (aglet).
- **Nearest items and why it's distinct:** only mentioned in passing (#152 *Shock-corded pole*
  heat-seals cord ends; #269: holes in webbing need sealing; #101: "a lighter or glue to seal
  synthetic rope ends"). Every rope and cord project needs it.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2
- **What to cover:** nylon, polyethylene, polyester and polypropylene ends "can be protected
  moderately well by melting them using flame, an electrically heated element, or a soldering
  iron", but merely cutting with a hot element "provides very poor protection", and "nothing
  beats adding a properly applied whipping"; aramid (Kevlar) only chars (Animated Knots). Whipping
  types: common (ABOK #3443, "can be tied with no needle"), sailmaker's, West Country, French,
  Portuguese; alternatives: constrictor knot, tape, fusion, back splice, liquid whipping, aglet
  (Wikipedia). Back splice (ABOK #2813): needs no tools, but is bulky and "usually prevents the
  rope's end from passing though blocks and pulleys". Printed helpers: a paracord melting form
  made because melted ends wouldn't go through holes in printed parts, and printed aglets
  (Printables 926284, 624969).
- **Safety:** burns from flames and hot knives; Budworth calls heat-sealing rope ends "lazy and
  dangerous", after a hardened sealed end sliced a tugboat operator's palm (Wikipedia).
- **Sources (opened):**
  - https://www.animatedknots.com/rope-care-knots, https://www.animatedknots.com/common-whipping-knot, https://www.animatedknots.com/back-splice-knot
  - https://en.wikipedia.org/wiki/Whipping_knot (images Common-whipping.png, FusedRopeEnds.png, Westcountry.jpg)
  - Printables 926284 "Paracord Melting (Whipping) Form" and 624969 "Rope End Caps (Aglets)" (Printables API; pages not opened)

### N11. Sewn seams and hand stitches (lockstitch, saddle stitch, plain and flat-felled seams)
- **Description:** Joining two pieces of fabric or leather with thread passed through both, by
  machine (lockstitch) or by hand (running, back or saddle stitch), along a seam folded or bound
  so the edges don't fray.
- **Nearest items and why it's distinct:** #253 *Folded seam* names "Sewn seams in fabric" only
  as a related textile version; #224 *Contact adhesive*, #228 *Elastomeric glue* and A1 *Fusible
  web* are the no-sew alternatives. No sewing entry exists.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2
- **What to cover:** lockstitch: two threads that "'lock' (entwine) together in the hole in the
  fabric"; the FAA calls it the "301 lockstitch". Chain stitch "is easily unravelled", which is
  why ISO 4915 stitch 101 is still used to close sacks (Wikipedia). Saddle stitch: two threads
  through one line of holes made by an awl, pricking iron or stitching iron; "breaking one side of
  a saddle stitch loosens only one side of the stitch" (Wikipedia); thread "about five times
  longer than the segment"; lock the ends by melting poly thread or with "a drop of glue" for
  linen (Tandy). Seam types: plain, French, flat or abutted, flat-felled; lapped and bound seams;
  finishes such as pinking and zigzag stop fraying (Wikipedia). Seams that leave a tunnel (a
  casing or pole sleeve) carry a drawstring, elastic or rod: notes here. Waterproof seam sealing
  goes in the notes; heat-welded seams belong to heat joining.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Saddle_stitch (images Hand_Stitches_-_Saddle_Stitch_1.png, _2.png)
  - https://en.wikipedia.org/wiki/Seam_(sewing) (images French_seam.png, Flat_felled_seam.jpg, Bound_seam1.png)
  - https://en.wikipedia.org/wiki/Lockstitch and https://en.wikipedia.org/wiki/Chain_stitch
  - https://tandyleather.com/blogs/projects/tandy-skills-saddle-stitching

### N12. Lacing (cord threaded through rows of holes or eyelets)
- **Description:** A cord or leather thong threaded back and forth through rows of holes,
  eyelets or hooks on two edges to pull them together, as on shoes, leather pouches, or a cover
  laced onto a frame; it can be loosened and tightened again.
- **Nearest items and why it's distinct:** #1 *Ratcheting reel closure* is only the dial that
  winds a lace; #126 *Cord lock* holds a cord end; #158 *Zipper* closes an opening another way.
  Generic lacing isn't covered.
- **Family:** `knots, lashings & sewn joints` (other: `cord, strap, webbing & textile hardware`)
- **Tier:** 2
- **What to cover:** criss-cross lacing is "The most common lacing method" and "one of the
  strongest and most efficient"; aglets finish the ends; flat laces "stay tied more securely than
  those with a round cross-section" (Wikipedia *Shoelaces*). Leather edge lacing: holes "close to
  the edge (1/16" to 1/8") and evenly spaced", best made with a thonging chisel; a running stitch
  needs lace about 1.5 times the length to be laced, a loop stitch about 3.5 times
  (e-scoutcraft); double-loop lacing "weaves two loops through each hole, creating a strong,
  slightly raised edge" (Tandy). Tent panels were laced together "with corresponding loops and
  grommets" before keder (H3). Lacing printed panels or armour together through printed holes or
  eyelets (H2). Cable lacing for wire looms is in N13.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Shoelaces
  - https://e-scoutcraft.com/leather/lacing.html (diagrams of running and loop stitches)
  - https://tandyleather.com/blogs/tandy-blog/how-to-double-loop-lace-leather-video

### N8. Rope splices (eye splice, short splice, braided-rope splices)
- **Description:** Joining a rope to itself or to another rope by tucking its strands back in,
  or burying its end inside its hollow core, to make a loop or join that keeps nearly all the
  rope's strength and is slimmer than a knot.
- **Nearest items and why it's distinct:** #148 *Woven self-tightening grip* already lists the
  finger-trap and bury splices in hollow-braid rope as examples of the finger-trap principle. It
  doesn't cover three-strand tuck splices (eye, short, long), the locked Brummel splice, or
  splicing as a way to make loops and joins. Keep #148 as the explanation of why a buried splice
  grips, and cross-link.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2
- **What to cover:** "while a knot typically reduces the strength by 20–40%, a splice is capable
  of attaining a rope's full strength", though it thickens the line (Wikipedia). Types: eye,
  short, long, back, ring, chain and cut splices. Three-strand eye splice (ABOK #2725): in
  slippery synthetics "a minimum of five complete 'tucks' is required", and seven "For mooring,
  towlines, and other long term or critical applications". Short splice: too fat to pass through
  blocks; the long splice passes through but is hard to make well. Brummel splices are finished
  by tapering, burying and stitching the tail. Fold in: the **soft shackle** (a rope loop closed
  by a diamond knot; tests show "breakage typically occurs around 175% of Line Strength"; "less
  likely to cause injury if it strikes a crew member") and the **whoopie sling** (an adjustable
  spliced sling "used in camping to tension a hammock"; also note it in #148). Printable splicing
  fids (3-8 mm, "Ideal for Dyneema") and printed thimbles "for rope splices".
- **Safety:** home-made splices aren't rated; not for climbing or lifting people.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Rope_splicing (images 1871_illustration_rope_splices.png, Kurzspleiss.jpg, Splice_on_snap_shackle.jpg)
  - https://www.animatedknots.com/splicing-knots, https://www.animatedknots.com/eye-splice-knot, https://www.animatedknots.com/short-splice-knot, https://www.animatedknots.com/brummel-eye-splice-knot, https://www.animatedknots.com/soft-shackle, https://www.animatedknots.com/whoopie-sling-knot
  - Printables 999397 "Rope splicing fids" and 934812 "Rope thimbles in 6,8,10 and 12mm" (Printables API; pages not opened)

### H4. Leather and textile rivets (single- and double-cap, tubular, rapid and split rivets)
- **Description:** Small two-part or hollow rivets set through punched holes in leather, webbing
  or fabric with a setter on a hard block, to fix straps, handles and buckles permanently.
- **Nearest items and why it's distinct:** #274 *Blind rivet* (set from one side; mentions
  leather and fabric only in passing); #61 *Heat staking*; #172 *Press stud* (rivet snaps).
  Leather rivets are set from both sides, are sized for soft material and use different tools.
- **Family:** `cord, strap, webbing & textile hardware`
- **Tier:** 2
- **What to cover:** types (Montana Leather): single-cap rivets (trunks, belts, flaps),
  double-cap rivets (backpacks, handles, tote straps), tubular rivets ("heavy-duty applications
  or high-stress areas") and rapid or compression rivets (clothing, luggage, set with a press);
  split rivets (Weaver). Size: leather thickness plus "1/8 inch (3 millimeters) for the post
  length" (Montana Leather). Setting a split rivet: punch a hole, "Place a washer on the rivet
  before setting it to keep it from pulling through the leather", support it on a metal block,
  then peen it with a peening tool and rawhide mallet; a heavy tubular rivet can also be a luggage
  wheel's axle (Weaver).
- **Sources (opened):**
  - https://www.weaverleathersupply.com/blogs/leathercrafting/how-to-set-split-tubular-rivets
  - https://www.montanaleather.com/choosing-the-right-size-rivet-for-your-leather-craft/

### H5. Chicago screw (sex bolt, binding post)
- **Description:** A short screw that threads into a matching hollow post from the other side,
  leaving a flat head on both faces; used like a removable rivet in leather, straps and binders,
  and as the pivot in printed key organisers.
- **Nearest items and why it's distinct:** #269 lists Chicago screws only as a way to fix a
  buckle; #250 *Knock-down connectors* lists sex bolts only as "related"; #274 *Blind rivet* is
  permanent. A beginner choosing between a rivet and a Chicago screw needs this entry.
- **Family:** `cord, strap, webbing & textile hardware` (other: `quick-release & tool-free`)
- **Tier:** 2
- **What to cover:** aliases (Wikipedia): architectural bolts, barrel nuts, binding barrels, book
  screws, Chicago screws, connector bolts, sleeve nuts and more; uses "vary widely from book
  binding to installing bathroom partitions", fitness apparatus, helmets, knives; made in
  aluminium, steel, brass, copper, stainless steel and plastic. Choosing: a post "that is too
  long" leaves the joint loose, so pick one 1-1.5 mm shorter than the total material thickness
  (Pet Hardware blog); "The screw post might look too small, but that is normal" (Weaver).
  Threadlocker makes it permanent but still removable "with sufficient force"; skip it if you'll
  swap buckles (Pet Hardware; Weaver). Printed key organisers use them as the pivot (Printables
  976481).
- **Boundary:** the standard-hardware agent may claim it; make one entry whichever family gets
  it.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Sex_bolt (image Sleeve_nuts.jpg)
  - https://weaverleathersupply.com/blogs/leathercrafting/how-to-install-a-chicago-screw
  - https://blog.pethardware.com/en/how-to-choose-chicago-screws/ (supplier's blog)
  - Printables 976481 "Key Case/Organiser (Chicago screw) v1.0" (Printables API; page not opened)

### A1. Iron-on fusible web (heat-activated adhesive web)
- **Description:** A dry web or film of heat-melting glue, often polyamide, laid between two
  fabrics and pressed with an iron so it melts and bonds them, for no-sew hems, appliqué and
  iron-on patches.
- **Nearest items and why it's distinct:** #141 *Hot-melt adhesive* is the same kind of glue,
  but applied molten from a gun, and its entry doesn't mention webs, films or ironing. #223 *PVA*
  and #228 *Elastomeric solvent glue* are the liquid fabric glues. Beginners search for it by name
  ("iron-on", "hem tape", "fusible web").
- **Family:** `adhesives & bonding` (other: `knots, lashings & sewn joints`)
- **Tier:** 2. **Fallback:** fold into #141's notes if the owner wants fewer adhesive entries.
- **What to cover:** USU Extension's appliqué method: trace on the paper side of the web, fuse it
  to the fabric, cut out, peel the paper, fuse to the project, then "Finish by stitching around
  shape"; it warns that you "can actually over do it on some brands and then they won't stick".
  Wonderweb (brand) is "100% Polyamide", "Fusible / Iron-On (Heat Activated)" and "Fully machine
  washable". Fusible interfacing works the same way to stabilise fabric (N1's cosplay source).
- **Sources (opened):**
  - https://extension.usu.edu/sewing/research/machine-applique-techniques.pdf (Utah State University Extension; text extracted)
  - https://www.williamgee.co.uk/shop/wonderweb/ (retailer page; product claims)

### N13. Binding knots and seizings (constrictor knot, seizing, cable lacing)
- **Description:** Knots and wrappings that squeeze tightly round a bundle, a bag neck, a hose,
  or two ropes side by side to hold them together, like a hose clamp made of string.
- **Nearest items and why it's distinct:** #8 *Linear ratchet* (cable ties) and hose clamps
  (hardware agent) do the job with parts.
- **Family:** `knots, lashings & sewn joints`
- **Tier:** 2 (lowest of the knot groups; could merge into N4 if the owner wants fewer knot
  entries)
- **What to cover:** constrictor: "one of the most effective binding knots", "a harsh knot that
  can be difficult or impossible to untie once tightened"; holds strands while splicing, works
  "as improvised hose clamps or cable ties" (Wikipedia), ties the neck of a sack and can "hold
  items together for gluing" (Animated Knots, ABOK #1188); double constrictor for more grip (ABOK
  #1249, #1250, #1252). Seizing binds "two ropes, two parts of the same rope, or rope and another
  object" semi-permanently, but is "not recommended for heavy loads for critical use"
  (Wikipedia). Cable lacing binds wire bundles with waxed cord or flat lacing tape in "running
  lockstitches" (marline hitching; plain half hitches are "not recommended"), with stand-alone
  spot ties; NASA-STD-8739.4 chapter 9 is one standard; it "does not create obstructions along the
  length of the cable" the way cable ties do (Wikipedia).
- **Medical:** the constrictor's use as a surgical ligature is out of scope; describe the maker
  uses only.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Constrictor_knot
  - https://www.animatedknots.com/constrictor-knot-twisting-method
  - https://en.wikipedia.org/wiki/Seizing
  - https://en.wikipedia.org/wiki/Cable_lacing (images Cable_lacing_close-up_2.jpg, Cable-lacing-nasa-style-spot-ties.jpg, Cable-lacing-lockstitch-marline-hitching-ABOK-3115.jpg)

### N0 (baseline). Basic knots (overhand knot, half hitch and reef knot)
- **Description:** The few knots most people half-know (the overhand, the half hitch, and the
  reef or square knot with its slipped "bow" form for shoelaces), used as the baseline the other
  knot entries are compared with.
- **Nearest items:** none (knots weren't in scope).
- **Family:** `knots, lashings & sewn joints`
- **Tier:** baseline
- **What to cover:** what knots do to rope: "The efficiency of common knots ranges between 40 and
  80% of the rope's original strength" (Wikipedia *Knot*); *Rope splicing* says "a knot typically
  reduces the strength by 20–40%"; Animated Knots says to assume new rope gives "no more than 50%
  of its rated breaking strength" and quotes the Cordage Institute's design factor range "between
  5:1 and 12:1". Record these side by side. Knots fail by slipping and capsizing, and some jam.
  The overhand, half hitch and half knot are the same move used three ways (Animated Knots). The
  reef knot is a binding knot: "It slips, it comes undone, it jams", and Animated Knots quotes
  ABOK p. 258: "There have probably been more lives lost as a result of using a Square Knot as a
  bend (to tie two ropes together) than from the failure of any other half dozen knots combined",
  adding "Never use it for critical loads". Point to N2 and N4-N7 by job.
- **Safety:** knots are not for climbing, lifting or holding people without training and rated
  gear; never stand in a loop of rope that may tighten (Animated Knots *Safety*).
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Knot (images Bowline_(PSF).jpg, AshleyBook.jpg)
  - https://www.animatedknots.com/square-knot, https://www.animatedknots.com/half-hitch-knot, https://www.animatedknots.com/safety
  - https://www.animatedknots.com/ (index by type and activity); https://en.wikipedia.org/wiki/List_of_knots; https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots

---

## 3. Notes additions to existing items

- **#148 Woven self-tightening grip:** add the whoopie sling (adjustable spliced sling that uses
  the finger-trap grip; https://www.animatedknots.com/whoopie-sling-knot) and cross-link to N8
  *Rope splices*. It already covers the finger-trap and bury splices.
- **#126 Cord lock:** also cover the drawstring itself: "A drawstring may be threaded through a
  hem or casing (a continuous tube of material) or laced through holes, which may be lined with
  eyelets" (https://en.wikipedia.org/wiki/Drawstring). Today "drawstring" appears only in its
  child-safety note.
- **#262 Basic latches / #269 Basic strap and garment closures:** #262 already names the sewn
  garment hook and eye as related; add a line to #269 too, and cross-link both to N1.
- **#134 Cable gland and strain relief:** add the underwriter's knot, tied inside a lamp holder
  or plug so that "strain on the line is taken by the knot and does not affect the connections"
  (https://www.animatedknots.com/underwriters-knot). Check with the electrical agent first.
- **#223 PVA wood glue and #228 Elastomeric solvent glue:** fabric glue is already covered (#223
  for fabric onto wood and prints onto fabric; #228 lists "fabric adhesive (solvent-based)" and
  E6000 Fabri-Fuse), so no new entry. Add "fabric glue" and "tacky glue" as aliases of #223, and
  liquid seam sealant (anti-fray) as related; #269 already cites seam sealant on buttonholes.
- **#141 Hot-melt adhesive:** only if A1 isn't added: heat-activated webs and films (fusible
  web, hem tape, iron-on patches, fusible interfacing).
- **#178 Origami mechanisms:** only if P1 isn't added: "printing onto fabric to attach cloth or
  make scale armour".
- **#154, #153, #121, #122, #149, #155:** add the new family to `other_families`, or cross-link
  to N4, N5 and N8 (soft shackle). Each already names a knot as the no-hardware alternative; #155
  lists "Toggle and becket, soft shackle".
- **#121 Cam cleat / #122 Clam cleat:** mention the plain horn cleat and its cleat hitch as the
  basic version (#121 already compares itself with "a knot on a horn cleat").
- **#206 Pulley system:** add low-friction rings (a grooved ring the rope runs through instead
  of a pulley; printable, e.g. Printables 1772939, "for light rigging and organization, not
  life-safety loads"; Printables API, page not opened).
- **#278, #101, #76, #152, #282, #276:** cross-link to N2 and, for steel cable, H1.
- **#1 Ratcheting reel closure:** cross-link to N12.
- **#281 Multi-material interlock:** cross-link to P1.
- **#298 Reciprocal frame:** cross-link to N9.
- **#131 Gasket:** cross-link to H3 (the same groove idea, holding fabric instead of sealing).

---

## 4. Near-misses (rejected)

- **One entry per knot** (bowline, clove hitch, sheet bend and so on separately): grouped by job
  instead; Animated Knots and Wikipedia already cover each knot.
- **Decorative knots, macramé, mats, Turk's heads, Chinese knots:** decorative, not connections
  (the frog closure is already in #269).
- **Necktie knots and shoelace bows:** not maker connections; the bow is the slipped reef knot in
  N0.
- **Climbing anchors, belay and rescue systems** (Munter hitch, anchor builds): life-safety
  systems; out of scope, link out.
- **Surgical knots and sutures** (Animated Knots has a "Surgical" category): medical use is out
  of scope; the constrictor's maker uses stay in N13.
- **Fishing-knot catalogue** (Bimini twist, Albright, blood knot): a catalogue; Palomar is the
  example in N4, the rest link out.
- **Sheepshank:** Animated Knots includes it "very reluctantly – too high a failure rate"; the
  alpine butterfly (N6) does its job.
- **Soft shackle as its own entry:** folded into N8 (metal shackles belong to the hardware agent).
- **Wedge, spelter (poured) and swage sockets; wire-rope splicing (Flemish eye):** industrial
  lifting hardware; notes in H1.
- **Mousing a hook** (Wikipedia's "Mousing" now redirects to *Safety wire*) and **safety wire:**
  hardware agent (thread locking, #260).
- **Rope coiling, flaking, hanks:** storage, not joining.
- **PALS / MOLLE webbing:** already an alias in #43 *Modular grid mounting systems*.
- **Cable ties:** covered by #8.
- **Hog rings, upholstery staples, tack strips, shackles, hooks, eye bolts, split rings:**
  standard hardware (other agent).
- **Conductive thread and sewable e-textile parts:** electrical agent.
- **Heat-welded, RF-welded and ultrasonic fabric seams, heat-sealed TPU film:** heat-joining
  agent (already used in #290 and #305).
- **Spray adhesive** (suggested in Q19): adhesives; check #224 *Contact adhesive*.
- **Printed fly-screen frames that clamp the mesh** under a cover strip or clips (Printables
  977167, 1798928): covered by clamping entries; the spline version is in H3.
- **Weaving, knitting, braiding, crochet, embroidery, quilting:** making processes, not joints
  (braided sleeving as a grip is #148).
- **Casing and pole sleeve as their own entry:** notes in N11 and #126.
- **Seam taping and seam sealing:** notes in N11.
- **Buttons, toggles, frogs, buckles:** #269.
- **Netting knots:** notes in N7 (the sheet bend page covers net making).
- **Sewing-machine, needle, thread and grommet sizes:** catalogue; link out.

---

## Conflicts to record side by side
- Knot strength: 40-80% of rope strength (Wikipedia *Knot*) vs a 20-40% loss (Wikipedia *Rope
  splicing*) vs "no more than 50%" of rated strength for new rope (Animated Knots *Safety*).
- Wire-rope clips: 80% (1/8-7/8 in) and 90% (1 in and up) with 2 clips for small ropes
  (Crosby, CERTEX) vs "up to 85%" and "At least three clips" for overhead lifting (WorkSafeNB).
- Webbing stitching: the FAA says W-W beats box-X; Practical Sailor found rows and a sandwiched
  insert matter most; Ripstop by the Roll ranks the bar tack and box-X as the strongest
  home-machine options.

## Opened but not cited
- https://www.animatedknots.com/taut-line-hitch-knot returned 404 (the taut-line hitch is under
  the rolling hitch); https://www.nicopress.com/media/documents/Inst32.pdf returned 404 (the
  metric version was used); https://hammersmith.com.au/en-nz/blogs/workshed/how-to-use-a-hand-swage-tool
  (only basic steps; earlier claims about tail length and double crimping were not on the page,
  so they were dropped); https://en.wikipedia.org/wiki/Window_screen (no mention of spline).
- Not opened, so not cited: the Ashley Book of Knots scan on archive.org (rights unclear).
