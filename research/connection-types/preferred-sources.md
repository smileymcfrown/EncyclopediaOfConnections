# Preferred sources for run 2 (connection types)

Research agents: **check these first** when filling `links`, `make_it_yourself`,
`rules_of_thumb` and `sources`. They are the collections run 1 found most useful
(`research/prior-art/summary.md`, full detail in `research/prior-art/report.md`). The URLs
below were opened in run 1. For a single entry you still have to find and **open** the
specific page yourself. Never build a URL from a pattern without opening it.

Licence key: **reuse** = content may be copied with credit (Wikipedia/Commons CC BY-SA,
public-domain books, MIT/BSD code). **link** = link and cite facts in our own words only.

## Everything (check for every entry)
| Source | What it gives an entry | Start here | Licence |
|--------|------------------------|------------|---------|
| Wikipedia | Proper term, definition, "read more" link | `https://en.wikipedia.org/wiki/<Article>` (e.g. Torque_limiter, Sprag_clutch, Geneva_drive); category tree from https://en.wikipedia.org/wiki/Category:Mechanisms_(engineering) | reuse (CC BY-SA 4.0) |
| Wikimedia Commons | Free animations and diagrams | https://commons.wikimedia.org/wiki/Category:Animations_of_mechanisms_(engineering) and per-type categories (e.g. https://commons.wikimedia.org/wiki/Category:Geneva_drives) | reuse (per-file licence; record it) |
| Nguyen Duc Thang (YouTube `thang010146`) | Clear CAD animations; one video per mechanism (quote the video title) | https://www.youtube.com/@thang010146; index at https://wiki.dtonline.org/index.php/2100_Animated_Mechanical_Mechanisms | link only |
| DMG-Lib | Permanent per-mechanism links with animations and videos (`handler?mcdsc=<id>`) | https://www.dmg-lib.org/dmglib/main/portal.jsp?context_setLangCode=en | link only |
| 507movements.com (Brown, *507 Mechanical Movements*, 1868) | Numbered, animated historic movements (e.g. https://507movements.com/mm_245.html bayonet joint) | https://507movements.com/ | book public domain; website animations link only |
| Hiscox, *1800 Mechanical Movements* | Numbered public-domain drawings | https://archive.org/details/mechanicalmoveme00hiscrich | public domain |
| Model repositories | "Print one to try" models, tolerance tests, maker vocabulary | https://www.thingiverse.com/tag/print_in_place, https://www.thingiverse.com/tag/compliant_mechanism, Printables (web pages may be bot-blocked; its public API is https://api.printables.com/graphql/), https://grabcad.com/library | per model |
| Hackaday | "See it built" articles | https://hackaday.com/tag/compliant-mechanism/, https://hackaday.com/tag/print-in-place/ | link |
| McMaster-Carr | Trade names and variants of off-the-shelf parts | `https://www.mcmaster.com/products/<family>/` (e.g. https://www.mcmaster.com/products/torque-limiters/) | link |
| HUANGYAN920/Mechanical | 257 interactive parametric mechanism animations | https://huangyan920.github.io/Mechanical/ (code https://github.com/HUANGYAN920/Mechanical) | reuse (MIT) |
| Wolfram Demonstrations | Interactive models | https://demonstrations.wolfram.com/topic/machines | snapshots MIT; demos CC BY-NC-SA |
| MechSimulator | Interactive simulators per mechanism | https://mechsimulator.com/mechanisms/ | link |
| Mecapedia (Spanish) | Short encyclopedia entries | https://www.mecapedia.uji.es/ | link |
| RoyMech | Comparison tables for couplings, clutches, ratchets, indexing, adhesives | https://roymech.org/Useful_Tables/index.html (e.g. https://roymech.org/Useful_Tables/Drive/Clutches.html) | link |
| DT Online / NotesandSketches | School-level plain explanations | https://wiki.dtonline.org/index.php/Category:Mechanisms, https://www.notesandsketches.co.uk/Mechanisms_module.html | DT Online CC BY-NC-SA (link) |

## By family
**Torque limiting, one-way, self-locking, indexing, latches (the "clever behaviour" families)**
- Thang's chapters on safety clutches, overrunning clutches, latches, locking and indexing (see above)
- DMG-Lib, e.g. https://www.dmg-lib.org/dmglib/handler?mcdsc=3847025 (safety friction clutch)
- RoyMech ratchets https://roymech.org/Useful_Tables/Cams_Springs/Ratchets.html and indexing https://roymech.org/Useful_Tables/Cams_Springs/Indexing.html
- Reuleaux on Wikisource (click-gear, locks as ratchet trains): https://en.wikisource.org/wiki/Page:The_Kinematics_of_Machinery.djvu/478
- Rob Ives and NotesandSketches for beginner ratchets: https://www.robives.com/mechanism/ratchet/, https://www.notesandsketches.co.uk/Ratchet.html
- IFToMM terminology (official definitions, e.g. PAWL [CLICK, DETENT]): https://iftomm-terminology.antonkb.nl/2057/01.html#1.1.49
- Mecapedia on self-locking: https://www.mecapedia.uji.es/pages/irreversibilidad.html
- Hackaday printable one-way driver: https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/

**Snap fits, print-in-place and 3D-printing joints**
- Hubs (Protolabs Network): https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/, https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/, https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/, https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
- Formlabs: https://formlabs.com/blog/designing-3d-printed-snap-fit-enclosures/, https://formlabs.com/blog/how-to-3d-print-interlocking-joints/, https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
- Protolabs: https://www.protolabs.com/resources/design-tips/how-to-design-3d-printed-hinges/, https://www.protolabs.com/resources/blog/threading-and-inserts-for-3d-printing/
- Prusa: https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135, https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490
- Plastics makers' snap-fit guides (cite page numbers): Covestro https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf; DuPont Module I https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf (ch. 10 snap and press fits; also plastic ratchets and torque-limiting gears)
- BOSL2 (snap pins, rabbit clips, hinges, dovetails, gears): https://github.com/BelfrySCAD/BOSL2/wiki, e.g. https://github.com/BelfrySCAD/BOSL2/wiki/joiners.scad and https://github.com/BelfrySCAD/BOSL2/wiki/hinges.scad (github.com pages may be blocked; raw sources are on raw.githubusercontent.com)
- HPI (SpringFit, kerf-canceling, metamaterial door latch): https://hpi.de/baudisch/projects/springfit.html, https://hpi.de/baudisch/projects/metamaterial-mechanisms.html, https://hpi.de/baudisch/projects/kerf-canceling-mechanisms.html
- Hackaday geared hinge: https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/

**Compliant mechanisms and flexures**
- BYU CMR: https://www.compliantmechanisms.byu.edu/, https://compliantmechanisms.byu.edu/about-compliant-mechanisms (models on Thingiverse, e.g. https://www.thingiverse.com/thing:3007265 compliant overrunning clutch)
- FACT (freedom and constraint topologies): https://en.wikipedia.org/wiki/Freedom_and_constraint_topologies and the CC BY-SA chart https://commons.wikimedia.org/wiki/File:Freedom_and_constraint_topologies_(FACT)_library_poster.pdf
- Slocum's *FUNdaMENTALs of Design* (free chapters): https://pergatory.mit.edu/resources/FUNdaMENTALS.html
- *Handbook of Compliant Mechanisms* (cite only): https://www.wiley.com/en-us/Handbook+of+Compliant+Mechanisms-p-9781119953456

**Couplings, clutches, motion conversion, linkages**
- RoyMech (couplings and clutches tables), Slocum Topic 5 (clutches, couplings, interference fits): https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
- Game Manual 0 (robotics): https://gm0.org/en/latest/docs/common-mechanisms/linkages.html, https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html; FRCDesign https://frcdesign.org/mechanism-examples/
- Mecapedia (e.g. Scotch yoke https://www.mecapedia.uji.es/pages/mecanismo_de_yugo_escoces.html)
- Colorado State video demos: https://video-demos.colostate.edu/mechanics/mechanisms/
- Mechanism apps: PMKS+ https://pmksplus.com/, MotionGen https://motiongen.io/, Linkage https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
- Mechanical Design 101 (linkage animations): https://mechanicaldesign101.com/category/linkage-animation/

**Gears and transmissions**
- KHK Gear Technical Reference: https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html, https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html, https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
- Gear Generator (shareable designs): https://geargenerator.com/
- bd_warehouse gears and chains: https://bd-warehouse.readthedocs.io/en/latest/gear.html, https://cq-warehouse.readthedocs.io/en/latest/chain.html
- igus 3D-printed gears: https://www.igus.com/custom-parts-services/3d-printing/3d-printed-gear
- Sariel (LEGO Technic mechanisms): https://sariel.pl/guide2/

**Powered and active connectors**
- Hackaday (electro-permanent magnets, solenoids, nitinol), Slocum, *Making Things Move* companion page https://dustynrobots.com/making-things-move/
- McMaster-Carr families (solenoids, electromagnets, electromagnetic brakes)

**Adhesives**
- thisTOthat (material pair selector and glue-type pages): https://www.thistothat.com/, e.g. https://www.thistothat.com/glue/cyan.shtml
- Prusa's gluing guide: https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/ and material pages (e.g. https://help.prusa3d.com/article/asa_1809)
- CNC Kitchen glue tests: https://www.cnckitchen.com/blog/can-acetone-glue-layers-of-3d-prints-together
- Wikipedia: https://en.wikipedia.org/wiki/Adhesive, https://en.wikipedia.org/wiki/List_of_glues
- ASC adhesive technologies: https://adhesives.org/adhesives-sealants/adhesives-sealants-overview/adhesive-technologies/
- Manufacturer guides (cite page numbers): Henkel LOCTITE plastics guide https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf; 3M selection guide https://multimedia.3m.com/mws/media/328280O/product-selection-guide.pdf; Permabond https://permabond.com/adhesive-selection-5-steps-to-choosing-the-best-adhesive-for-your-situation/
- Woodworking glues: https://www.woodcraft.com/blogs/sanding-finishing/complete-guide-to-woodworking-glues, https://www.rockler.com/learn/understanding-wood-glue

**Joinery (wood, knock-down, CNC, laser-cut, sheet metal)**
- Wikipedia joinery articles: https://en.wikipedia.org/wiki/Joinery and https://en.wikipedia.org/wiki/Category:Joinery (reuse)
- Fine Woodworking https://www.finewoodworking.com/project-guides/joinery; WOOD Magazine (may need a Wayback copy)
- Knock-down: Lamello https://lamello.com/products/p-system; IKEA wedge dowel https://ikeamuseum.com/en/explore/the-story-of-ikea/the-wedge-dowel/; Wikipedia https://en.wikipedia.org/wiki/Furniture_screw; DT Online https://wiki.dtonline.org/index.php/Knock_Down_Fittings,_Brackets_and_Plates
- CNC: Opendesk https://opendesk.cc/blog/digitally-remastered-joinery; WikiHouse https://www.wikihouse.cc/engineering/bow-ties; Gros's *50 Digital Wood Joints* https://winterdienst.info/50-digital-wood-joints-by-jochen-gros/; dogbones http://fablab.ruc.dk/more-elegant-cnc-dogbones/
- Laser cut: Boxes.py https://boxes.hackerspace-bamberg.de/ (e.g. https://boxes.hackerspace-bamberg.de/AllEdges?language=en); MakerCase https://www.makercase.com/; Obrary living hinges https://obrary.com/products/living-hinge-patterns (CC BY-SA); Ponoko https://www.ponoko.com/blog/how-to-make/how-to-design-a-living-hinge/ and https://www.ponoko.com/blog/how-to-make/how-to-make-glue-less-interlocking-parts/; Joinery tool https://clementzheng.github.io/joinery/
- Sheet metal: SendCutSend https://sendcutsend.com/blog/how-to-join-laser-cut-parts-without-fasteners/ and https://sendcutsend.com/blog/designing-sheet-metal-parts-with-tab-and-slots/; Protolabs https://www.protolabs.com/services/sheet-metal-fabrication/design-guidelines/; PEM handbook https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/self-clinching-fastener-handbook.pdf; TOX clinching https://assets.tox.com/f/176476/x/dd4b9050dd/tox_clinching-technology_80_en.pdf; Wikipedia https://en.wikipedia.org/wiki/Clinching

**Locating and alignment, springs**
- Slocum (kinematic couplings, elastic averaging, springs), Blanding's *Exact Constraint* (cite; review at https://hackaday.com/2019/09/11/books-you-should-read-exact-constraint-machine-design-using-kinematic-principles/)
- BYU (ortho-planar springs, constant-force mechanisms)

## Known blocked sites (from run 1)
Zhihu, CSDN, the Wayback Machine (sometimes), Printables and MakerWorld web pages, Xometry,
sdp-si.com, parts of Cornell's Digital Collections, nostarch.com, AccessEngineering, Häfele,
github.com HTML pages (use raw.githubusercontent.com for READMEs). If a page can't be opened,
don't cite it; mark any fact that depends on it `[uncertain]`.
