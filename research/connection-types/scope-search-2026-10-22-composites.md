<!-- Saved into the repository on 2026-10-22 from the search agent's working notes (R36, R37). -->
# Scope search 2026-10-22: composites

One of seven web searches for Phase 5 (see `scope-search-2026-10-22-combined.md` for the combined
list and Claude's decisions). The agent's write-up follows unchanged, except this header. Folders
it mentions (`working-notes.md`, `pages/`, `dl/`) were working files and were not kept. Suggestion
numbers below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 433 | Bonded tube joint (lugged, sleeved or fibre-wrapped tube joint; carbon tube connector, bonded end fitting) |
| 2 | 434 | Fillet-and-tape joint (stitch-and-glue seam, glass-tape tabbing, tack-and-tape) |
| 3 | 435 | Potted insert (sandwich-panel insert, hard point, overdrill-fill-redrill) |
| 4 | 436 | Bonding fastener (glue-on stud, bonded-base stud or nut, perforated-base fastener) |
| 5 | 437 | Push-fit rod and spar fittings (kite fittings: tee and cross connectors, ferrules, nocks, end caps) |
| 6 | 438 | Compression limiter (crush tube, bolt sleeve, compression sleeve) |

---

# Gap search: carbon fibre and composites (folder `composites`)

Working notes, written as I go. Final sections at the end.

## Overlap check (repository, read only)
- Glued joint design (#270) already explains lap, double-lap, strap and scarf joints, including
  "a scarf or finger joint to lengthen wood, plywood or composite", and "sockets or sleeves for rods".
- Two-part epoxy (#138) covers the glue itself ("for metal, wood, most plastics and composites").
- Internal tube anchors (#221) covers expansion plugs for carbon steerers ("Never use a barbed star
  nut in carbon fibre ... (use an expansion plug)").
- Clamp-on tube fittings (#220) and Clamp-on accessory mount (#394) cover clamping round tube.
- Shock-corded sectional pole (#152) covers ferrule/spigot sockets with cord; mentions fibreglass
  poles breaking at the end of a ferrule.
- Strut hub (#341) covers multi-strut nodes (domes).
- No entry for: potted inserts in sandwich panels, stitch-and-glue, glass-tape tabbing / laminated
  overlap joints, bonded tube connectors / lugs, bolting into thin composite plate.

## Candidate notes

### C1 Potted insert / hard point in sandwich panels
- Abbott Aerospace AA-SB-001 12.2.6 (opened): "The most common means of mechanical attachment in
  sandwich panels is potted inserts. The potting procedure involves drilling through one or both
  face sheets, excavating the local core material, inserting the 'insert' and then injecting potting
  compound that sets it in place." Also: the foot of the attached bracket should be at least as wide
  as the potting; a small chamfer on a flush insert flange in thin CFRP skin lets it undercut the skin.
- Cruising World "bedding hardware" (opened, https://www.cruisingworld.com/?p=40890): cored-deck
  "reefing and backfilling": redrill outer skin about half again as large (1/4 in -> 3/8 in), reef
  out core about 1/2 in round the hole, tape underside, fill with epoxy thickened "to the consistency
  of mayonnaise" (West System 406 or 404 filler), redrill; "the epoxy ring prevents the fastener from
  crushing the core. A 1/4-inch fastener can exert more than 500 pounds of pressure on the core".
- The Yacht Rigger (opened): oversize hole e.g. 5/8 or 3/4 in for a 5/16 in bolt, through both skins,
  "to fully encapsulate it in epoxy, isolating the surrounding core from future water intrusion".
- Practical Sailor "Bulletproof Sailboat Deck Hardware" (opened): "Installing new hardware on a cored
  deck means sealing the core around every penetration ... Balsa will rot ... foam core to mush";
  "The typical solution is to drill an oversized hole, fill the cavity with epoxy, and redrill"; plug
  "can become brittle and crack over time. Unless the plug is fully supported by a backing plate, it
  can be pushed out". Table: West System 105/205 7,800 psi; G-Flex 3,440 psi, tougher, damp surfaces.
- Decision: one entry covering factory potted inserts (honeycomb, aerospace/solar-car/RC) and the
  boat "overdrill, fill and redrill" hard point. Distinct from heat-set / press-fit / rivet-nut inserts.

### C2 Bonded tube connector (lug, sleeve, ferrule, end fitting)
- Clearwater Composites "How to bond carbon fiber tubes" (opened): bond gap ~0.005-0.010 in per side
  for most 2-part epoxies; bond length "For ferrule tubing ... minimum bond length of 2-3x the inside
  diameter. For tubes <1" diameter, we recommend a 3" bond length as a default"; abrade with 120 grit;
  solvent wipe; fixture; galvanic corrosion of aluminium against carbon (anodise, epoxy layer, or glass
  layer as isolator). DP-420 ~2,200 psi shear on aluminium/steel.
- UWRT (Waterloo robotics) wiki "Connecting CF Tubes" (opened): repeats Clearwater; notes rivets
  instead of threaded fasteners; drilling advice.
- DragonPlate "How to connect carbon fiber tubes" (opened): drilling and pinning/bolting "is not a
  recommended method as it compromises the tube wall"; bonded anodised aluminium modular connectors
  (sand inside of tube, clean, epoxy, insert); threaded end adapters bonded in for quick-release truss
  sections; plate gussets riveted plus bonded for square tube.
- Printables 157670 "Carbon fiber tube corner connector/bracket" (URL from Printables API, page not
  opened: https://www.printables.com/model/157670-carbon-fiber-tube-corner-connectorbracket): printed
  socket for 16 mm carbon tube, ID 16.1 mm, socket length 30 mm.

### C3 Compression limiter (crush tube, bolt sleeve, bonded bushing)
- SPIROL Compression Limiter Design Guide UK PDF (opened): "Compression Limiters are designed to
  protect the plastic components of an assembly from the compressive loads generated by the tightening
  of bolts"; "should be slightly shorter than the thickness of the plastic host"; head of bolt/washer
  "should always seat against both the plastic host and the Compression Limiter under load. This will
  prevent deterioration ... due to plastic creep."
- Bulten compression limiters PDF (opened): "minimum plastic thickness, equals the maximum compression
  limiter length"; boss wall at least 50% of bolt diameter (3.0 mm for M6).
- Cruising World (above): the epoxy ring of a filled hole "prevents the fastener from crushing the
  core".
- No maker forum evidence found for carbon plate specifically (Arctic Shift r/functionalprint search
  "compression limiter" returned no posts). Keep as a cross-material entry (prints, composites,
  sandwich panels, rubber-mounted parts), ranked lower.
- r/CarbonFiber "Bushing For Carbon Fibre???" (https://www.reddit.com/r/CarbonFiber/comments/sgx6d8/
  read via https://arctic-shift.photon-reddit.com/api/posts/ids?ids=sgx6d8 and
  .../api/comments/search?link_id=sgx6d8): replies: isolate metal from carbon with a glass layer or
  TefGel against galvanic corrosion; Delrin, UHMWPE, oil-filled bronze bushings for a carbon pivot.
  Useful for notes (plain bearing in carbon), not a new type.

### C4 Stitch-and-glue
- Wikipedia "Stitch and glue" (API text read): plywood panels "temporarily stitched together,
  typically with wire or zip-ties, and glued together permanently with epoxy resin"; also called
  "tack and tape" or "stitch and tape"; copper wire can be left in, steel fencing wire removed;
  variant: tack with dabs of thickened epoxy, remove wires, then fillet full length; bulkheads fused in
  with the same glass tape and epoxy joints. Strength claim "8-10 times the strength of fastenings and
  timber framing" (unsourced on Wikipedia: mark needs confirming).
- CLC Boats "Fillets" (opened): fillet coves out the inside corner; plastic spreader with 1 in radius
  for main seams, 1/2 in for bulkheads; thicken with wood flour to "peanut butter consistency"; apply
  glass tape "right onto the wet fillets".
- Duckworks "Quick and dirty stitch and glue" (opened): drill stitch holes, wire or wire ties; wet the
  joint, smear thickened epoxy, lay glass tape, soak; "tack fillets" to hold seats; flip and tape the
  outside seams.

### C5 Push-fit rod and spar fittings (kite fittings)
- kiteplans.org Eddy Variant (opened): 6 mm carbon spine, 4 mm and 2 mm spreaders; "Eddy connectors
  (2): 6mm; ferrule (1): 6mm for spine (optional)"; to fit 4 mm rod into 6 mm connector "slide a short
  length of 6mm spar over the end ... and glue it in place (this also acts as a reinforcement)"; split
  the spine at a ferrule "as far down the spine as possible, to lower the center of gravity".
- kiteplans.org Gargoyle (opened): split caps, "arrow nocks 2mm (4): clip connections", end caps,
  optional ferrule.
- kiteplans.org BDub FAQ (opened): metal (brass) ferrules on leading edges, placed just below the lower
  spreader connector; ferrule weight matters for balance.
- Printables 824733 "Box kite connectors" and 488247 "Stunt Kite Connector and end cap" (URLs from
  Printables API, pages not opened): printed T and cross connectors for 9 mm and 3 mm rods.
- Shock-corded pole (#152) already covers ferrule sockets in poles; kite fittings add tee/cross
  connectors, nocks and end caps for solid rods, no cord.

### C6 Fillet-and-tape joint: tabbing and laminate repair evidence
- Epoxyworks "Common errors in fiberglass laminate repair" (opened): scarf "at a minimum ratio of 12:1
  and that the patch thickness matches the original laminate"; "This ratio applies to both skins when
  repairing a cored laminate"; "Smooth the transitions with thickened epoxy to make a fillet on inside
  corners. Also, when tabbing stringers and frames into place, taper the layers".
- West System "Determining laminate thickness" (opened): same 12:1 minimum scarf, patch thickness
  matches original.
- boatdesign.net thread "Proper way to tab bulkheads on a fiberglass boat" (opened,
  https://www.boatdesign.net/goto/post?id=549947): production boats tab bulkheads with one layer of
  roving; precut triangular foam fillets under bulkhead edges to avoid hard spots; "Directional fabrics
  are much better suited to tabbing"; a repair "filleted to about 1/2 inch half round, then 2 layers of
  10oz glass cloth"; leave a small gap and seal with fillet. Forum opinion, not a standard.
- Decision: merge stitch-and-glue, tabbing and taped butt seams into ONE entry (the joint is the
  same: a cove of thickened epoxy plus resin-wet glass tape across the seam; stitches are only
  temporary clamps). Scarf repair of laminate goes as a notes addition to Glued joint design (#270).

### C7 Bonding fastener (glue-on stud, perforated-base stud)
- Easy Composites bigHead threaded stud page (opened): "bonding fasteners are the recommended method of
  fixing to composite materials such as GRP/fibreglass, carbon fibre ... composite laminates are
  weakened by drilling, are unsuitable for threading or tapping and are vulnerable to point-loading";
  embed in laminate or surface-bond; bond to reverse of laminate with stud passing through for maximum
  strength; "perforated 'head' allows adhesive or resin to flow through the holes"; 316 stainless,
  M5-M10, 20 mm base.
- Practical Sailor "Glue-on fasteners" (opened): "for all but the most extreme loads there is a simple
  solution: glue-on studs"; Weld Mount system (special adhesive, gun, pricey); Sea-Lect studs with
  thickened epoxy "to a mayonnaise consistency", press until it comes through the holes; on vertical
  faces tape or laminate a 4 in square of glass over; DIY: threaded rod epoxied into G10 scraps.
- Bossard bigHead page (opened): embedding and surface bonding fasteners.
- No overlap in the 409 (grep for glue-on stud, bonding fastener, bighead, weld mount: none).

### Tag evidence
- Speed Addict Fearless Edition assembly manual (FPV/multirotor frame, opened PDF): 1.5 mm and 3 mm CF
  plates; aluminium M3 standoffs; "The rest of the screws are threaded to nylock nuts"; Loctite.

### More evidence (bonded tube joints)
- Wikipedia "Bicycle frame" (API text read): "Some carbon fiber frames use cylindrical tubes that are
  joined with adhesives and lugs, in a method somewhat analogous to a lugged steel frame"; cracking "can
  result from a collision, but also from over tightening"; fatigue "often limited to interlaminar
  cracks or cracks in adhesive at joints"; repairs "should be done only by professional firms".
- road.cc Condor Leggero (opened): tube-to-tube: "precisely mitred tubes bonded together. Strips of
  carbon are strategically wrapped around the tube junctions", jig, oven cure.
- road.cc Calfee bamboo (opened): "The joints are wrapped in hemp fibre"; comment: hemp lugs made by
  fibre-winding, hemp saturated with epoxy.
- Singletracks Robot Bike Co. (opened): 3D-printed (selective laser melting) titanium lugs, carbon tubes.
- 3D Printing Industry colorFabb (opened): "Nine 3D printed lugs to connect standard tubing in carbon,
  titanium, aluminum or bamboo" printed in XT-CF20 carbon-filled filament.
- RhinoFabLab VRZ 1 (opened): "3d printed stainless steel lugs glued together with carbon fiber tubes";
  frame 1100 g.
- Practical Sailor deck hardware (re-read): "Some people have become sensitized to epoxy"; "in warm
  temperatures, fast-cure will exotherm, creating bubbles and a poor seal".

---------------------------------------------------------------------------------------------------

# FINAL WRITE-UP

## 1. Summary

- **6 new entries** suggested (ordered by usefulness to a hobbyist): bonded tube joint (lugs,
  sleeves, wrapped joints); fillet-and-tape joint (stitch-and-glue, tabbing); potted insert / hard
  point for sandwich panels; bonding fastener (glue-on stud); push-fit rod and spar fittings (kite
  fittings); compression limiter (crush tube).
- **19 existing entries to tag** "carbon fibre and composites" in the Made of filter (17 clear, 2 niche).
- **5 notes additions** (Glued joint design, Ordinary screw joint, Internal tube anchors,
  Shock-corded sectional pole, Two-part epoxy).
- **No new family.** All six fit existing keys (adhesives & bonding; everyday fasteners & fixings;
  quick-release & tool-free).
- Merged on purpose (D46): stitch-and-glue, glass-tape tabbing and taped butt seams are one joint type
  (a cove of thickened epoxy plus resin-wet glass tape across the seam; the wire stitches are only
  temporary clamps). Lugged, sleeved, internal-joiner, bonded-end-fitting and fibre-wrapped tube joints
  are one type (a bonded overlap round or inside a tube end).

## 2. Suggested new entries

| # | Outline name | Family key | One-line description | Sources opened | Why distinct |
|---|---|---|---|---|---|
| 1 | Bonded tube joint (lugged, sleeved or fibre-wrapped tube joint; carbon tube connector, bonded end fitting) | adhesives & bonding | Tube ends are glued into, or over, a socket, sleeve or lug, or wrapped with resin-soaked fibre, so tubes join with no holes drilled, as in carbon bike frames, drone booms, camera rigs and bamboo bikes | clearwatercomposites.com (bond carbon tubes); uwaterloo.atlassian.net (Connecting CF Tubes); dragonplate.com (How to connect carbon fiber tubes); en.wikipedia.org Bicycle frame; road.cc Condor Leggero; road.cc Calfee bamboo; singletracks.com Robot Bike Co.; 3dprintingindustry.com colorFabb lugs; rhinofablab.com VRZ 1 | #270 Glued joint design explains joint shapes in general but not tube sockets, bond gap, bond length, galvanic isolation or wrapped lugs; #220 Clamp-on tube fittings rely on set screws, which crush carbon; #221 Internal tube anchors hold by friction or barbs, not glue; #341 Strut hub is about multi-strut domes |
| 2 | Fillet-and-tape joint (stitch-and-glue seam, glass-tape tabbing, tack-and-tape) | adhesives & bonding | Two panels are held edge to edge (often with wire stitches or cable ties), a cove of thickened epoxy is run into the corner and resin-wet glass tape is laid over it, joining plywood boats, kayaks, bulkheads and fibreglass parts with no frames or screws | en.wikipedia.org Stitch and glue; clcboats.com Fillets; duckworksmagazine.com quick stitch and glue; epoxyworks.com common errors in laminate repair; boatdesign.net tab bulkheads thread | No entry covers laminating across a seam. #270 covers glued overlaps of solid parts, #271 Butt and lap wood joints covers screws and glue, not glass tape and fillets |
| 3 | Potted insert (sandwich-panel insert, hard point, overdrill-fill-redrill) | everyday fasteners & fixings | A hole in a honeycomb, foam or balsa-cored panel is opened up, the soft core round it is dug out and filled with epoxy around a threaded insert or bolt, so a screw can grip and the core isn't crushed or soaked, as on boat decks, solar-car and RC panels | abbottaerospace.com AA-SB-001 12.2.6; cruisingworld.com bedding hardware; theyachtrigger.com drilling cored decks; practical-sailor.com deck hardware | #56 Heat-set, #179 Press-fit and #332 Screw-in inserts all need solid material to grip; #222 Rivet nuts squash thin sheet; none deals with a hollow or soft core between two thin skins |
| 4 | Bonding fastener (glue-on stud, bonded-base stud or nut, perforated-base fastener) | everyday fasteners & fixings | A stud, nut or threaded collar on a wide perforated base plate that is glued onto a surface or laminated into it, giving a thread to bolt onto with no hole through the part, as on fibreglass boats, carbon panels and camper walls | easycomposites.co.uk bigHead threaded stud; practical-sailor.com Glue-on fasteners; bossard.com bigHead | No overlap in the 409 (searched "glue-on stud", "bonding fastener", "bighead", "weld mount", "click bond": no hits). Differs from inserts (no hole) and from double-sided tape (#142) (rigid, structural, threaded) |
| 5 | Push-fit rod and spar fittings (kite fittings: tee and cross connectors, ferrules, nocks, end caps) | quick-release & tool-free | Small moulded, metal or printed sockets that solid carbon or fibreglass rods push into by friction, to join rods at an angle, join two lengths end to end, or end a rod with a slot for a line, as on kites, model frames and lightweight stands | kiteplans.org Eddy Variant; kiteplans.org Gargoyle; kiteplans.org BDub FAQ; Printables 824733 and 488247 (API) | #152 Shock-corded pole covers in-line ferrule sockets held by elastic cord; #220 Clamp-on tube fittings lock with set screws; #341 Strut hub is for dome nodes. Kite fittings are push-fit, angle-joining and line-holding parts for small solid rods |
| 6 | Compression limiter (crush tube, bolt sleeve, compression sleeve) | everyday fasteners & fixings | A short metal tube fitted in a bolt hole through plastic, a print, a composite plate or a cored panel so the bolt clamps on the tube, not the soft material, and the joint stays tight instead of crushing or creeping loose | uk.spirol.com Compression Limiter Design Guide (PDF); bulten.com compression limiters (PDF); cruisingworld.com bedding hardware | Only a passing mention in the #131 Gasket entry ("compression limiter (a metal sleeve that stops the gasket being over-squeezed under a screw; Stockwell)"). #327 Shims/spacers set a gap; this protects a soft clamped material from bolt load |

Outline-ready blocks (house style of the last items in outline.yaml):

```yaml
  - name: Bonded tube joint (lugged, sleeved or fibre-wrapped tube joint; carbon tube connector, bonded end fitting)
    category: adhesives & bonding
    description: Tube ends are glued into or over a socket, sleeve or lug, or wrapped with resin-soaked fibre, so tubes join without drilling holes, as in carbon bike frames, drone booms, camera rigs and bamboo bikes
    notes: "Also covers bond gap and bond length, sanding and cleaning, internal joiners (ferrule tubing), bonded threaded end plugs and quick-release end fittings, printed and metal lugs, tube-to-tube wrapped joints and hemp-wrapped bamboo joints. Safety: carbon touching bare aluminium corrodes it (isolate with anodising, glue or a glass layer); carbon dust; epoxy skin allergy; never ride a home-made frame without testing. Also list interlocking joints & joinery and print-in-place & 3D-printing joints in other_families"
  - name: Fillet-and-tape joint (stitch-and-glue seam, glass-tape tabbing, tack-and-tape)
    category: adhesives & bonding
    description: Two panels are held edge to edge, often with wire stitches or cable ties, then a cove of thickened epoxy is run into the corner and resin-wet glass tape is laid over it, joining plywood boats, kayaks, bulkheads and fibreglass parts without frames or screws
    notes: "Also covers stitching with copper wire or cable ties, tack fillets, fillet tools and fillers, taping both sides, tabbing bulkheads and stringers into fibreglass hulls, foam fillets against hard spots, taped butt joints in plywood, and wrapping printed or foam parts into a composite shell. Safety: epoxy skin allergy, sanding dust from glass and cured epoxy, heat from large batches. Also list interlocking joints & joinery in other_families"
  - name: Potted insert (sandwich-panel insert, hard point, overdrill-fill-redrill)
    category: everyday fasteners & fixings
    description: The hole in a honeycomb, foam or balsa-cored panel is opened up, the soft core round it is dug out and filled with epoxy round a threaded insert or bolt, so a screw can grip and the core isn't crushed or soaked, as on boat decks, solar-car floors and RC panels
    notes: "Also covers factory flanged inserts, through-thickness and blind potting, the boat 'overdrill, fill and redrill' method, solid hard points laid in during building, and sizing the bracket foot at least as wide as the potting. Safety: water in a cored deck rots balsa; epoxy skin allergy; fast epoxy can overheat in a large fill. Also list adhesives & bonding and seals & pass-throughs in other_families"
  - name: Bonding fastener (glue-on stud, bonded-base stud or nut, perforated-base fastener)
    category: everyday fasteners & fixings
    description: A stud, nut or threaded collar on a wide perforated base plate that is glued onto a surface or laminated into it, giving a thread to bolt onto without a hole through the part, as on fibreglass boats, carbon panels and camper walls
    notes: "Also covers surface bonding versus embedding in the lay-up, bonding to the back face so the stud passes through, home-made versions (threaded rod in a glued block of G10), choice of adhesive (epoxy, methacrylate) and holding it still while it cures. Safety: only as strong as the surface it is glued to; don't hang people or overhead loads on it without the maker's ratings. Also list adhesives & bonding in other_families"
  - name: Push-fit rod and spar fittings (kite fittings: tee and cross connectors, ferrules, nocks, end caps)
    category: quick-release & tool-free
    description: Small moulded, metal or printed sockets that solid carbon or fibreglass rods push into and are held by friction, to join rods at an angle, join two lengths end to end, or finish a rod with a slot for a line, as on kites, model frames and light stands
    notes: "Also covers Eddy and dihedral connectors, vinyl-tube connectors, brass and aluminium ferrules (with a centre stop), arrow nocks and split caps, sleeving a thin rod up to fit a bigger fitting, and printed connectors. Safety: carbon splinters from broken rods; carbon rods conduct electricity, so keep kites away from power lines. Also list clamping, magnetic & friction connections and cord, strap, webbing & textile hardware in other_families"
  - name: Compression limiter (crush tube, bolt sleeve, compression sleeve)
    category: everyday fasteners & fixings
    description: A short metal tube fitted in a bolt hole through plastic, a print, a composite plate or a cored panel, so the bolt clamps on the tube instead of the soft material and the joint stays tight instead of crushing or creeping loose
    notes: "Also covers sizing the tube a little shorter than the part, split-seam, moulded-in and pressed-in types, home-made tube or brass-tube versions in prints, epoxy rings in cored panels and wide washers. Safety: a crushed or crept joint loosens without warning, so check bolts on anything that carries people. Also list adjusters, levellers & spacers and print-in-place & 3D-printing joints in other_families"
```

Notes on each (for the research run):
1. Figures to use: bond gap about 0.005-0.010 in (0.13-0.25 mm) per side for most two-part epoxies;
   bond length 2-3x the inside diameter for ferrule tubing, 3 in default for tubes under 1 in
   (Clearwater). DragonPlate: drilling and pinning "compromises the tube wall"; their bonded
   connectors are sanded, cleaned, epoxied in. Printed lug example: Printables 157670, 16.1 mm socket,
   30 mm long for 16 mm tube (URL from Printables API, page not opened).
2. CLC: fillet thickened with wood flour to "peanut butter consistency", 1 in radius tool for seams,
   1/2 in for bulkheads, tape onto the wet fillet. Wikipedia: copper wire may be left in; steel wire
   removed; or tack with epoxy dabs, pull the wires, then fillet the whole length.
3. Abbott: core excavated, potting injected, "locking the insert ... in all six degrees of freedom";
   bracket foot at least as wide as the potting. Cruising World: a 1/4 in fastener "can exert more
   than 500 pounds of pressure on the core".
4. Easy Composites: laminates "are weakened by drilling, are unsuitable for threading or tapping and are
   vulnerable to point-loading". Practical Sailor: removal of an epoxied stud "will tear out a chunk of
   the bulkhead".
5. Kite plans: to fit a 4 mm rod in a 6 mm connector, glue a short 6 mm sleeve over its end; put a
   spine ferrule low down to keep the balance point low; metal ferrules add weight in the right place.
6. SPIROL: limiter "slightly shorter than the thickness of the plastic host"; bolt head should "seat
   against both the plastic host and the Compression Limiter". Bulten: boss wall at least 50% of bolt
   diameter (3.0 mm for M6).

## 3. Existing entries to tag "carbon fibre and composites"

| Item | Name | Evidence |
|---|---|---|
| 138 | Two-part epoxy | results JSON: "the usual choice for ... repairing wood and boats, bonding carbon or glass fibre, filling and fairing" |
| 270 | Glued joint design | results JSON: "Metals and composites: joggle, tapered, double-lap, strap and scarf joints (3M; Loctite manual)"; "a scarf or finger joint to lengthen wood, plywood or composite" |
| 226 | Structural acrylic and LSE adhesives | results JSON lists "fibreglass" among bonded materials; Easy Composites recommends a methacrylate (VM100) for surface-bonding fasteners to laminates |
| 232 | Epoxy putty | results JSON: bonds "... fibreglass, PVC and most rigid and semi-flexible plastics" |
| 225 | Polyurethane glue | results JSON: "fibreglass, rigid PVC, and many other plastics and composites" |
| 221 | Internal tube anchors | results JSON: expansion plugs "suited to carbon, plastic and thin tubes because nothing bites"; "Never use a barbed star nut in carbon fibre" |
| 220 | Clamp-on tube fittings | DragonPlate and UWRT list slip-on/clamp-on framing fittings as "noninvasive" ways to join carbon tubes (UWRT wiki links McMaster clamp-on fittings) |
| 394 | Clamp-on accessory mount | results JSON: "Over-tightening can crack or crush handlebars, especially carbon"; "onto carbon parts without a torque figure (Surly)" |
| 70 | Telescoping tube twist lock | results JSON: "round aluminium or carbon fibre telescoping tube sets" |
| 71 | Telescoping tube lever lock | results JSON: "Cracked collar or crushed tube from overtightening, especially on carbon fibre" |
| 72 | Spring button lock | results JSON: "stainless button clips for composite tubes sized by tube ID (Rock West Composites (brand))" |
| 152 | Shock-corded sectional pole | results JSON: tube sections "(aluminium, fibreglass or carbon fibre)"; kite plans use the same ferrules on carbon spines |
| 222 | Blind threaded fixings | results JSON: rivet nuts "install in steel, aluminium, plastics, composites and fibreglass" |
| 274 | Blind rivet | results JSON: "fibreglass (GFRP), laminates and rubber (POP 'Peel' rivet"; DragonPlate gusset kits are riveted plus bonded |
| 257 | Ordinary screw joint | results JSON: "They can clamp almost any rigid material: ... acrylic and composites"; FPV frame manual: 1.5 mm and 3 mm CF plates held by M3 screws and nylock nuts |
| 260 | Thread-locking hardware | FPV frame manual (Speed Addict): "The rest of the screws are threaded to nylock nuts"; Loctite included |
| 327 | Shims, spacers and standoffs | FPV frame manual: carbon plates separated by "Standoff (Black aluminum M3 thread x 10mm long)" |
| 39 | Quarter-turn fastener (Dzus-type) | results JSON: "fibreglass panels wear thin under the heads; a nylon washer under the head helps" |
| 177 | Tape-spring hinge | results JSON: "Fibre composites (glass, Kevlar, carbon) for space hinges and booms" |

(19 rows; 17 strong, 2 weaker: #39 and #177 are composite-relevant but niche for hobbyists.)
Cross-group: aluminium composite panel (Dibond-type sandwich sheet) is folded by V-grooving the back
skin; the foam group is proposing a "V-groove fold" entry, which should also be tagged for composites
if accepted (no source opened by me for ACM; needs confirming).

## 4. Notes additions for existing entries

- **#270 Glued joint design**: add laminate scarf repair: "It is critical that the scarf angle is at a
  minimum ratio of 12:1 and that the patch thickness matches the original laminate ... This ratio
  applies to both skins when repairing a cored laminate"; round the repair outline, no sharp corners
  (Epoxyworks common errors; West System determining laminate thickness). Also plywood butt blocks
  (a glued plywood strap over a butt seam) as used in stitch-and-glue panels (Duckworks: "Buttblocks on
  the bottom and fiberglass on top").
- **#257 Ordinary screw joint**: drilling carbon plate: back it with wood or rigid foam, mask the hole,
  high speed and slow feed, sharp HSS lasts only "5-10 holes", carbide for more; carbon dust is an
  irritant (Elevated Materials). Point to the new Compression limiter and Potted insert entries.
- **#221 Internal tube anchors**: add bonded threaded end adapters (glued into carbon tube ends for
  quick-release truss sections; DragonPlate) and point to the new Bonded tube joint entry.
- **#152 Shock-corded sectional pole**: add that kite spars use the same ferrules without a cord
  (aluminium ferrule with a centre stop; place it low on the spine for balance; kiteplans.org) and point
  to the new Push-fit rod and spar fittings entry.
- **#138 Two-part epoxy**: add filler consistencies by job: "peanut butter" with wood flour for fillets
  (CLC), "mayonnaise" with 404/406 filler for filling holes (Cruising World); slow epoxy for big fills
  because fast epoxy "will exotherm, creating bubbles" (Practical Sailor).

## 5. Rejected or merged candidates

| Candidate | Outcome | Why |
|---|---|---|
| Stitch-and-glue (as its own entry) | merged into #2 Fillet-and-tape joint | Same joint as tabbing; the stitches are only temporary clamps (Wikipedia: "simple methods of clamping the hull parts together before they are permanently ... fused by epoxy and fiberglass tape joints") |
| Glass-tape tabbing; epoxy fillet joints | merged into #2 | Same type |
| Scarf and overlap laminate joints (wet lay-up, co-cured, secondary bonding) | notes to #270, in-line taped seams in #2 | #270 already holds scarf and lap joint design; a laminate repair is the same shape with cloth instead of glue |
| Bonded bushings and load-spreading washers for bolting composites | split: new #6 Compression limiter; notes to #257 | Aerospace bonded bushings in composite lugs are too niche (sources are patents); plain bearings in carbon go under Linear guides/bushings; washers are already in #257 |
| Clamp-on tube fittings for carbon tubes | tag #220 and #394 | Already covered; add the carbon crush warning that #394 already has |
| Carbon rod joints in kites (ferrules, kite fittings) | new #5; ferrule part tagged in #152 | Fittings at angles, nocks and end caps aren't covered; in-line ferrules are |
| Threaded inserts bonded into carbon tube ends (end plugs) | merged into #1, note to #221 | A bonded end fitting is the same bonded socket joint |
| Press-fit or glued 3D-printed connectors for carbon tube frames | merged into #1 (glued) and #5 (push-fit) | A material/printing variant, not a separate type |
| Tube-to-tube wrapped carbon joints; hemp-wrapped bamboo joints | merged into #1 | A lug made in place; same overlap principle |
| Moulded-in (co-cured) inserts | merged into #3 and #4 | Embedding a bonding fastener or laying in a hard point |
| Drilling and cutting carbon | rejected (process) | Making process, not a joint; drilling tips go in notes for #257 |
| Aluminium composite panel V-groove fold | deferred to foam group's V-groove fold candidate | Same technique across foam board, EVA and ACM |
| Galvanic isolation (glass layer, TefGel) | safety note in #1 | Not a joint type |

## 6. Safety points and figures that disagree

- **How much to oversize a hole in a cored deck**: Cruising World: redrill "about half again as large"
  (1/4 in -> 3/8 in) through the top skin only, then reef out core about 1/2 in round it. The Yacht
  Rigger: 5/8 or 3/4 in for a 5/16 in bolt (2-2.4x) through both skins. Practical Sailor: the plug "can
  become brittle and crack over time" unless backed by a backing plate. State as a range and say both
  aims (seal the core, stop crushing).
- **Bond (overlap) length for tube joints**: Clearwater: 2-3x inside diameter, default 3 in for tubes
  under 1 in. Printed connector (Printables 157670): 30 mm socket on 16 mm tube (under 2x). Tent-pole
  ferrule in #152: about 4-5 tube diameters each side. Treat 2-3x as a minimum for loaded joints.
- **Strength of stitch-and-glue**: Wikipedia says "something close to 8-10 times the strength of
  fastenings and timber framing", with no source: mark ⚑ needs confirming.
- **Epoxy strength figures differ by product**: Practical Sailor table: West System 105/205 7,800 psi,
  G-Flex 3,440 psi (tougher, damp surfaces), generic paste epoxy 1,500-2,500 psi; Clearwater: DP-420
  about 2,200 psi shear on aluminium/steel. Different tests (tensile vs lap shear): don't compare
  directly.
- **Filler consistency**: CLC "peanut butter" for fillets; Cruising World and Practical Sailor
  "mayonnaise" for filling holes and gluing studs (thicker on vertical faces). Not a conflict: different
  jobs.
- **Safety**: epoxy sensitisation, "from skin irritation to full-on shock" (Practical Sailor); fast
  epoxy exotherm in big fills (Practical Sailor); carbon dust is an irritant, wear mask, gloves, eye
  protection (Elevated Materials); carbon against bare aluminium causes galvanic corrosion (Clearwater);
  home-made bike frames: Wikipedia says carbon frame repairs "should be done only by professional
  firms", cracking also comes from over-tightening clamps; sealing the core matters ("Balsa will rot",
  Practical Sailor).
- **Bushing for carbon pivots (forum)**: r/CarbonFiber replies differ (Delrin, UHMWPE, oil-filled
  bronze, titanium); all agree to isolate metal from carbon. Forum opinion only.

## 7. Every URL opened

- https://uwaterloo.atlassian.net/wiki/spaces/UWRT/pages/33964069714/Connecting+CF+Tubes : university robotics wiki; bond gap, bond length, galvanic corrosion, drilling (copied from Clearwater).
- https://cloud.wikis.utexas.edu/wiki/spaces/LHRSOLAR/pages/391975211 : solar-car "Inserts" wiki; only partly loaded (potting purpose, insert test plan); not cited.
- https://www.dopag.com/applications/composite-processing/insert-potting/ : 403, not read.
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8071265/ : browser check page, not read.
- https://www.r-g.de/en/technicians-blog/bonding-carbon-fibre-semi-finished-products.html : opened (R&G bonding blog); not used in the write-up.
- https://www.abbottaerospace.com/aa-sb-001/12-joints/12-2-mechanically-fastened-joints/12-2-6-potted-inserts-in-cored-laminates/ : potted inserts in sandwich panels, method and design rules, figures from ECSS/ESA.
- https://www.clearwatercomposites.com/resources/how-to-guides/bond-carbon-fiber-tubes/ : how to bond carbon tubes; bond gap, length, prep, galvanic corrosion.
- https://dragonplate.com/how-to-connect-carbon-fiber-tubes : bonded modular connectors, threaded quick-release ends, riveted plus bonded gussets; don't drill and pin.
- https://www.rockwestcomposites.com/shop/connector-accessories/carbonnect/carbonnect-system-components : shop page, only navigation text read; not cited.
- https://exelcomposites.com/guide-to-composites/fabrication-methods/gluing-of-carbon-fiber-composite-to-aluminum/ : 404.
- https://clcboats.com/blogs/boatbuilding-tips/fillets : how to make epoxy fillets for stitch-and-glue; tools, filler, tape onto wet fillet.
- https://duckworksmagazine.com/05/articles/s-and-g/index.htm : photo step-by-step stitch-and-glue skiff; stitching, filleting, taping, tack fillets.
- https://www.practical-sailor.com/boat-maintenance/a-solid-connection : sealing cored decks; overdrill-fill-redrill drawbacks; epoxy comparison table; sensitisation and exotherm.
- https://theyachtrigger.com/blogs/the-on-deck-channel/how-to-drill-through-fiberglass-decks-without-damaging-the-core : oversize hole through both skins, fill with thickened epoxy, redrill.
- https://www.cruisingworld.com/?p=40890 : reefing and backfilling cored decks; sizes; 500 lb on the core from a 1/4 in fastener.
- https://uk.spirol.com/assets/files/cmpl-compression-limiter-design-guide-uk.pdf : compression limiter function and design rules.
- https://www.bulten.com/media/luvfra41/compression-limiters-bulten.pdf : compression limiter hole design, length, boss wall.
- https://www.spirol.com/product/compression-limiters/ : 403, not read.
- https://elevatedmaterials.com/drilling-carbon-fiber : drilling carbon fibre, bits, backing, dust safety.
- https://forums.paddling.com/t/drilling-carbon-fiber/60936 : opened; forum thread on drilling carbon; not used.
- https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=functionalprint&query=compression%20limiter&limit=10 : no posts.
- https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=CarbonFiber&query=bushing&limit=10 : found the bushing thread.
- https://arctic-shift.photon-reddit.com/api/posts/ids?ids=sgx6d8 and https://arctic-shift.photon-reddit.com/api/comments/search?link_id=sgx6d8&limit=30 : r/CarbonFiber "Bushing For Carbon Fibre???" (https://www.reddit.com/r/CarbonFiber/comments/sgx6d8/bushing_for_carbon_fibre/), bushings and galvanic isolation in carbon.
- https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=fpv&query=carbon%20washers&limit=8 : three unrelated frame posts; not used.
- https://cdn.shopify.com/s/files/1/0623/9157/files/SPEED_ADDICT_FEARLESS_EDITION_-_ASSEMBLY_MANUAL.pdf : multirotor frame manual; CF plates, M3 standoffs, nylock nuts, Loctite.
- https://en.wikipedia.org/wiki/Stitch_and_glue (read via the MediaWiki API) : method, history, variants, strength claim.
- https://en.wikipedia.org/wiki/Ferrule (read via the API) : list of ferrule uses including "A joint between sections of a segmented fishing rod".
- https://en.wikipedia.org/wiki/Bicycle_frame (read via the API) : carbon frames joined "with adhesives and lugs"; monocoque; repair warnings.
- https://www.kiteplans.org/planos/eddyvar/plan3.html : kite plan; Eddy connectors, ferrule, sleeving 4 mm rod up to 6 mm.
- https://www.kiteplans.org/planos/bdub/bdubfaq.htm : brass ferrules on leading edges, placement and weight.
- https://www.kiteplans.org/planos/gargoyle/plan2.html : split caps, arrow nocks, end caps, optional ferrule.
- https://kitelife.com/forum/topic/9316-spars-and-parts : 500 error, not read.
- https://patents.google.com/patent/US5492288 : 503, not read.
- https://api.printables.com/graphql/ : searches "kite connector", "carbon tube connector"; model details for 824733, 488247, 157670 (model pages not opened).
- https://www.westsystem.com/determining-laminate-thickness/ : 12:1 minimum scarf, patch matches original thickness.
- https://www.epoxyworks.com/common-errors-in-fiberglass-laminate-repair/ : 12:1 scarf for both skins of cored laminate; fillets on inside corners; taper tabbing layers.
- https://www.boatdesign.net/goto/post?id=549947 : forum thread on tabbing bulkheads; roving vs cloth layers, foam fillets, directional fabrics.
- https://www.clcboats.com/forum/clcforum/thread/32550.html : 403, not read.
- https://www.easycomposites.co.uk/bighead-threaded-stud-fastener : bonding fasteners for composites; why, embed vs surface bond, sizes.
- https://www.practical-sailor.com/issues/37_79/features/Glue-on-Fasteners_12235-1.html : glue-on studs for boats; Weld Mount, Sea-Lect, DIY G10 blocks; method.
- https://www.bossard.com/ch-de/produktloesungen/produktanwendungen/bighead : bigHead embedding and surface-bonding fasteners overview.
- https://road.cc/content/news/96466-video-making-condor-leggero-carbon-frame : tube-to-tube carbon frame, wrapped junctions.
- https://road.cc/content/news/10980-just-calfee-bamboo-road-bike : bamboo frame with hemp-wrapped joints.
- https://www.singletracks.com/mtb-gear/robot-bike-co-3d-prints-custom-titanium-and-carbon-fiber-bike-frames : printed titanium lugs bonded to carbon tubes.
- https://3dprintingindustry.com/?p=51938 : nine printed carbon-filled lugs for a track bike.
- https://rhinofablab.com/video/vrz-1-a-tack-bike-frame-with-3d-printed-lugs : printed stainless lugs glued to carbon tubes.
- https://www.instructables.com/Bamboo-and-Hemp-Road-Bike/ : blocked (tiny response), not read.
