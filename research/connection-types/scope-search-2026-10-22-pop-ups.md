<!-- Saved into the repository on 2026-10-22 from the search agent's working notes (R36, R37). -->
# Scope search 2026-10-22: pop-ups

One of seven web searches for Phase 5 (see `scope-search-2026-10-22-combined.md` for the combined
list and Claude's decisions). The agent's write-up follows unchanged, except this header. Folders
it mentions (`working-notes.md`, `pages/`, `dl/`) were working files and were not kept. Suggestion
numbers below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 419 | Parallel-fold pop-up (box fold, step fold, floating layer, parallelogram pop-up) |
| 6 | 419 | Parallel-fold pop-up (box fold, step fold, floating layer, parallelogram pop-up) |
| 2 | 420 | V-fold pop-up (angle fold, mouth fold) |
| 3 | 421 | Pull-tab and slider mechanism (pull-strip, sliding motion, moving arm, transformation) |
| 4 | 422 | Volvelle (paper wheel, wheel chart, rotating disc) |
| 5 | 423 | Spring-powered paper pop-up (rubber-band snap-up cube, paper spring, jumping card) |

---

# Gap search: paper pop-up mechanisms (paper engineering), folder `popup`

Date: 2026-10-22. Working notes (written as I went): `working-notes.md` in this folder.
Raw downloads: `dl/` (untrusted; text extracted with `txt.py` and pypdf).

## 1. Summary

- **6 new entries suggested** (ordered by usefulness): parallel-fold pop-up, V-fold pop-up,
  pull-tab and slider mechanisms, volvelle (paper wheel), spring-powered paper pop-ups,
  concertina structures (tunnel book, carousel book).
- **13 existing entries to tag** "paper & card" for the Made-of filter (origami mechanisms,
  four-bar linkage, cam and follower, slider-crank, Geneva drive, rack and pinion, spur gears, worm,
  bevel gears, ratchet and pawl, elastic band springs, eyelets and grommets, conductive tape).
  Paper automata get **no new entry**: they are made of mechanisms that already have entries (cam,
  crank, gears, linkages), so tag those instead.
- **Merged rather than given their own entries:** lift-the-flap (goes into the paper-joints agent's
  score-and-fold hinge, or into the pull-tab entry if that hinge entry is not made), mouth pop-up
  (V-fold), floating layer (parallel fold), lattice pop-up (parallel fold, flagged), rotating disc
  and dissolving wheel (volvelle), transformations, Venetian-blind slats and spider-web pop-ups
  (pull-tab), and kirigami or origamic architecture cards (parallel fold, plus a note in #178).
- **Family: a new family is proposed for the 6 pop-up entries only**:
  `pop-up & movable paper mechanisms`, label "Pops up, slides or turns when a card or page is
  opened or pulled". Reasons:
  1. The six share one setting (a folded base card or page) and mostly one power source (opening the
     page). A maker looks them up as "pop-up mechanisms", and teaching books group them the same
     way: Hiner's ten basic mechanisms, Birmingham's 18 underlying shapes, Warwick's "pop-ups vs
     mechanisms".
  2. Spread across existing families they would get lost. The parallel fold would sit beside
     engine linkages in motion conversion, and the volvelle beside ball bearings in hinges & pivots.
  3. The key names a job ("pops up when opened"), not a material, so it fits the job-based families.
  4. The ordinary paper and cardboard joints (glued tabs, scored folds, split pins, cardboard rivets,
     tuck flaps, bookbinding) should **not** get a material family. They fit existing families
     (adhesives & bonding, hinges & pivots, everyday fasteners & fixings, interlocking joints &
     joinery, knots, lashings & sewn joints) and are found through the "Made of: paper & card"
     filter (D45).

  If the owner prefers a single "paper, card & pop-up mechanisms" family, these six are its core
  and the joints agent's entries could join it. I recommend against that: it breaks the
  job-based scheme for the plain joints.

  Fallback families if no new family is made are given in the table (column "fallback").

## 2. Suggested new entries

| # | outline name | family key (fallback) | one-line description | sources opened | why distinct from nearest existing |
|---|---|---|---|---|---|
| 1 | Parallel-fold pop-up (box fold, step fold, floating layer, parallelogram pop-up) | pop-up & movable paper mechanisms (motion conversion) | Two cuts or a glued strip across the centre fold make a step, box or stage that stands up as the card opens and folds flat as it shuts, as in most pop-up greeting cards | Wikipedia Pop-up book; robertsabuda.com Single Sheet Layer; Make: Pop-Up Monster; Warwick WMG lessons 2 and 3; Georgia Tech RCW Museum 'Physics of Paper Engineering'; Instructables 'Instructables Pop-Up Card'; Chibitronics floating plane and slot-and-joint; Center for Book Arts record of Hiner; Wikipedia Origamic architecture | #87 Four-bar linkage covers the parallelogram in bars and pins, not cut-and-folded card powered by opening a page. #178 Origami mechanisms covers uncut fold patterns (Miura, Kresling) and has no V or parallel pop-ups. The balance rule (length plus gap equal on both sides of the fold) is specific to pop-ups |
| 2 | V-fold pop-up (angle fold, mouth fold) | pop-up & movable paper mechanisms (motion conversion) | A piece glued or cut across the centre fold at an angle, so its folds meet at one point on the spine; opening the card swings it up and forward, as in pop-up mouths, wings and trees | Make: Pop-Up Monster; robertsabuda.com Single Sheet Mouth; Warwick lesson 2 (mouth fold, angle fold); Georgia Tech RCW Museum; Instructables Pop-Up Card; Li et al. 'V-style pop-ups' project page | Moves differently from the parallel fold: its creases meet at a point on the spine rather than running parallel to it, so it rises at an angle and its own rule (balanced angles) applies. A paper spherical linkage, which no existing entry covers |
| 3 | Pull-tab and slider mechanism (pull-strip, sliding motion, moving arm, transformation) | pop-up & movable paper mechanisms (motion conversion) | A paper strip or tab, pulled by hand or by the page opening, slides in a slot or channel to move a picture, swing an arm, lift a flap or change one scene into another | Warwick lesson 3 (pull slider); Cut Out + Keep 'Automatic Pull Strip' (official extract from Birmingham); popuplady.com glossary (pull-tabs, metamorphosis, spider web); Wikipedia Pop-up book (transformations); Center for Book Arts record of Hiner; Reddit r/cardmaking thread | The paper version of a slide, a lever and a push-pull rod. #88 Rack and pinion, #86 Slider-crank and #199 Bell crank are rigid parts. Pop-up strips can only pull, slide in glued channels, and are often driven by the page opening (the automatic pull-strip) |
| 4 | Volvelle (paper wheel, wheel chart, rotating disc) | pop-up & movable paper mechanisms (hinges & pivots) | Paper discs stacked on one centre pivot (a string, split pin, paper rivet or grommet) so turning one lines up windows and pointers with another, as in wheel charts, code wheels and pop-up books | Wikipedia Volvelle; Wikipedia Pop-up book (Astronomicum Caesareum "revolving on grommets"); Museum Wales 'Volvelles: early paper calculators'; popuplady.com glossary (volvelle, wheel); Warwick lesson 3 (rotary); Newberry Library workshop page; Marsh's Library 'Make your own volvelle'; Smithsonian Libraries 2010 press release | #264 Plain pivot and #69 Turntable bearing are rigid bearings. A volvelle is a named type with its own uses (calculators, dials, the dissolving wheel) and its own pivots (paper rivet tabs, string, split pin) |
| 5 | Spring-powered paper pop-up (rubber-band snap-up cube, paper spring, jumping card) | pop-up & movable paper mechanisms (springs & energy storage) | A folded card box held flat around a stretched rubber band, or a folded paper spring, that leaps into shape when released or pulled out of an envelope | rubberband.com (Alliance Rubber) 'DIY Pop-Up Cube Using Rubber Bands'; Rob Ives 'Locking snap up cube'; Instructables 'Self Pop-up Cubic Card' and 'Pop Up Box'; Twin Cities Frugal Mom 'Valentine bunny pop-up box'; robertsabuda.com how-to-books page (Irvine's book covers "rubber band mechanisms" and "coils") | Unlike entries 1 to 4, the power is stored energy, not the page opening. #282 Elastic band springs covers bands as springs in general, not self-erecting folded boxes. **Alternative if a slimmer list is wanted:** make it a notes addition to #282 and put the paper spring under the parallel fold |
| 6 | Concertina pop-up structure (tunnel book, carousel book, peepshow) | pop-up & movable paper mechanisms (compliant mechanisms & flexures) | Two accordion-folded side strips hold a row of cut-out picture layers apart, so the scene opens out into depth and folds flat again; opened right round, the layers form a star-shaped carousel | Wikipedia Pop-up book (tunnel books); robertsabuda.com NYC Tunnel Book; Univ. of Utah Marriott Library Tunnel Book lesson plan; Univ. of Utah Online Archive of Bookbinding (carousel book); popuplady.com glossary (peep show, carousel, fanfolded pop-up); Smithsonian 2010 release (peep shows, accordion books) | #290 Bellows boot is a sealing cover, and #178 Origami has no layered-scene structure. The joining job is distinct: concertinas act as folding spacers that hold panels apart and collapse flat. Lowest priority: closest to a book structure |

### Outline-ready blocks

```yaml
  - name: Parallel-fold pop-up (box fold, step fold, floating layer, parallelogram pop-up)
    category: pop-up & movable paper mechanisms
    description: Two cuts across the centre fold of a card, or a strip glued across it, make a step, box or stage that stands up as the card opens and folds flat as it shuts; its sides stay parallel to the fold, like a paper parallelogram linkage
    notes: "Also covers single-sheet cut-and-fold layer pop-ups and 90-degree kirigami ('origamic architecture') cards, glued-on boxes, tents and arches, multiple layers, floating layers (a flat plane on three parallel supports, straight or diagonal), slot-and-joint arms on a parallelogram, and lattice pop-ups (needs confirming). Explains the balance rule (the piece's length plus its distance from the fold must match on both sides, or the card won't close) and 90-degree versus 180-degree pop-ups. Safety: craft knives; let glue set before opening. Also list motion conversion and compliant mechanisms & flexures in other_families"
  - name: V-fold pop-up (angle fold, mouth fold)
    category: pop-up & movable paper mechanisms
    description: A piece cut or glued across the centre fold at an angle, so that its folds meet at one point on the spine; opening the card swings it up and forward, as in pop-up mouths, wings, trees and the classic pop-up monster card
    notes: "Also covers the single-sheet mouth (beak) pop-up, symmetric and lopsided (asymmetric) V-folds, V-folds stacked on V-folds, the 45-degree fold, and why a narrow V stands taller. Explains the rule that all creases meet at one point on the spine and the angles must balance left and right, or the card won't close flat. Safety: craft knives. Also list motion conversion and compliant mechanisms & flexures in other_families"
  - name: Pull-tab and slider mechanism (pull-strip, sliding motion, moving arm, transformation)
    category: pop-up & movable paper mechanisms
    description: A paper strip or tab, pulled by hand or by the page as it opens, slides in a slot or a glued channel to move a picture across the page, swing an arm on a pivot, lift a flap or change one scene into another
    notes: "Also covers the slot slider with folded tabs, guide strips that make a channel, lever arms on paper rivets, the automatic pull-strip that works when the page opens, flaps raised or flipped by a pull-strip, transformations (Venetian-blind slats that slide over each other), the pull-down and the spider-web spiral lifted by a ribbon. Tips for smooth sliding: spacer frames, vellum or foam tape. Safety: craft knives; strips tear at glued ends if the glue has not set. Also list motion conversion and sliding, telescoping & linear motion in other_families"
  - name: Volvelle (paper wheel, wheel chart, rotating disc)
    category: pop-up & movable paper mechanisms
    description: Paper discs stacked on one centre pivot so that turning one lines up windows, pointers and pictures on another, as in wheel charts, code and calculator wheels, old astronomy books and pop-up books
    notes: "Also covers pivots made of string, a split-pin paper fastener, a paper rivet (split tabs through a hole), or a grommet or eyelet; wheels hidden between two pages and seen through die-cut windows; dials turned from the page edge; and the dissolving wheel (metamorphosis), where two slotted discs slide over and under each other to change a picture. Safety: sharp split-pin legs and small parts for young children (needs confirming). Also list hinges & pivots and indexing & detents in other_families"
  - name: Spring-powered paper pop-up (rubber-band snap-up cube, paper spring, jumping card)
    category: pop-up & movable paper mechanisms
    description: A folded card box held flat with a stretched rubber band inside, or a springy folded paper strip, that jumps into shape when it is let go or slid out of a card or envelope
    notes: "Also covers sizing the band (its flat length a little longer than one side of the cube), tab locks that hold the cube flat until dropped, the folded two-strip paper spring that bounces a figure out of a box, and pop-up cubes in cards. Safety: a strong band can flick the cube or the band at faces (needs confirming); rubber bands perish over time. Also list springs & energy storage in other_families"
  - name: Concertina pop-up structure (tunnel book, carousel book, peepshow)
    category: pop-up & movable paper mechanisms
    description: Two accordion-folded side strips hold a row of cut-out picture layers apart, so the scene opens out into depth when pulled open and folds flat again; opened right round, the layers form a star-shaped carousel
    notes: "Also covers peepshow books viewed through a hole in the cover, carousel (star) books tied open with ribbon, fanfolded pop-ups, and accordion books. Use text-weight paper for the concertinas and card for the panels. Safety: craft knives. Also list compliant mechanisms & flexures and hinges & pivots in other_families"
```

### Supporting detail per entry (for the deep-research step)

**1 Parallel-fold pop-up**
- Wikipedia 'Pop-up book' captions its diagram "the basic principle of a pop-up book: the
  parallelogram". The same article says Thomas Malton's 1775 *Treatise on Perspective* pop-ups
  "are activated by pulling string and form geometric shapes".
- Sabuda's single-sheet layer: two equal parallel cuts from the fold, fold the strip back, then
  "push the cut strip through to the other side of the card".
- Georgia Tech (Robert C. Williams Museum of Papermaking): "the length of the element on Side A plus
  the distance of the element from the gutter on that same side must be equal to the length of the
  element on Side B plus the distance ... on the same side. This is true even if the element is
  asymmetric." It also says "Parallel folds produce a wide range of shapes: boxes, tents, cylinders,
  cones, pyramids, boats, and arcs".
- Instructables Pop-Up Card: "a1+b1=a2+b2", and "The 'energy' which opens the shapes comes from the
  folds."
- Floating plane (Chibitronics): a flat plane on "three parallel supports", which "may be folded
  parallel to the crease of a Base Card, or diagonally". Warwick lesson 2 builds a "double box" from
  folded card strips as the "floating plane" support, with this tip: "to give the illusion of floating,
  the boxes need to be fully covered".
- Hiner's ten mechanisms include "multiple layers, floating layers ... magic box ... pull-up planes"
  (Center for Book Arts record).
- Origamic architecture (Wikipedia) has a 90-degree style "similar to most pop-up books", a
  180-degree style and a 360-degree style, and is usually cut from a single sheet.
- Lattice pop-ups (criss-cross slotted strips): no source found. Keep it ⚑ in notes, or drop it.

**2 V-fold pop-up**
- Make: Pop-Up Monster (Sabuda studio): "This is called a V-fold, because the folds are at an angle
  from the middle fold of the card."
- Georgia Tech: "Angle folds, also known as v-folds, may be right, acute, or obtuse angles. It is
  also possible to create asymmetric angles. The v-fold is created when the three creases of the
  pop-up element converge at the same point on the spine or gutter of the base ... The angle of the
  pop-up element must be greater than or equal to the angle on the base in order for the pop up to
  'pop.'"
- Li, Ju, Gu and Hu, 'A Geometric Study of V-style Pop-ups' (SIGGRAPH 2011), defines a pop-uppable
  design: it "can be closed flat while maintaining the rigidity of the patches", needs no extra
  force, has no collisions, and stays within the page border. This is a good plain-English success
  test.
- Warwick lesson 2 shows the mouth fold and angle fold with a creasing tip: "Fold both ways and
  crease to break the fibres up".

**3 Pull-tab and slider**
- Warwick lesson 3 separates pop-ups from mechanisms: "Where Pop-ups do exactly that, as the book
  opens, mechanisms don't, they can be a slide, a rotation or a flap of paper." The pull slider
  uses a slot about 5 mm wide and strips 2 cm wide. The image goes on folded tabs through the slot,
  the pull tab is glued to the tabs, and strips glued over it make a channel, "ensuring that you
  don't stick them to the 'pull tab'".
- Birmingham's automatic pull-strip (official extract on Cut Out + Keep): a strip across the spine
  is driven by the page opening. "To make the flap flip right over make length E = length F. To
  make the flap stand vertical make E = 2 x F." Also: "Before gluing, try pulling tab D, to make
  sure that the strip can slide freely", and "Allow the glue to set before opening as tab D takes
  a lot of stress".
- popuplady.com glossary: "PULL-TABS (or TAB MECHANICAL) - Paper (or ribbon or string) extensions
  ... which when pulled, pushed, or slid cause an illustration to move, lift up, or pop-up." The
  glossary also defines metamorphosis type 2 as slats like Venetian blinds, and the spider web as a
  spiral pulled up by a ribbon.
- Thames & Hudson's *Paper Engineering for Designers* product page lists "8 tab mechanisms - 6
  pivot mechanisms - 3 wheels - 1 dissolving window", which supports grouping tabs and pivots
  together.
- Reddit r/cardmaking tips for smooth sliding: a frame of 65 lb card or vellum between layers, and
  foam tape or a proper "channel" so pieces don't wobble.

**4 Volvelle**
- Wikipedia: "A volvelle or wheel chart is a type of slide chart, a paper construction with
  rotating parts." It cites 20th-century wheel charts used for "inventory control to color
  calibration".
- Museum Wales: circles "fastened together in the centre with string so that they could spin ...
  You can use a split pin to secure the circles instead of string!"
- popuplady.com: volvelles are "secured by a central string or rivet". A WHEEL is "secured between
  two adjoining pages by a paper disc or metal grommet", and the dissolving wheel is metamorphosis
  type 1.
- Warwick lesson 3's rotary wheel uses split paper tabs pushed through a hole about 1 cm wide and
  glued to the picture: a paper rivet with no metal. It notes a variation where the wheel hides
  inside the card and is seen through windows.

**5 Spring-powered**
- Alliance Rubber: "The flat length of the rubber band you choose will need to be slightly bigger
  than the measurement of one side of your cube." Their #16 band suits a cube about 1.75 in on
  each side.
- Rob Ives: "Once set, drop the cube, tab side down, onto a flat surface and the cube will spring
  up!" This version uses 280 micron card. Instructables 'Self Pop-up Cubic Card': the cube "pops
  when is pulled out from a book or any other flat hard envelopes".
- Paper spring (Twin Cities Frugal Mom): "Glue 2 strips together, overlapping the ends to form a
  right angle ... Continue folding the lower strip over the top one".

**6 Concertina structure**
- Utah lesson plan: "two concertinas support a series of layered, flat panels"; use text-weight
  paper for the concertinas and cover-weight paper for the panels.
- Wikipedia: tunnel books (peepshow books) "consist of a set of pages bound with two folded
  concertina strips on each side and viewed through a hole in the cover".
- Utah Online Archive of Bookbinding: a carousel book is made of "layered accordions, often designed
  to open in a circle format for display. In this position the book may look like a star from
  above."

## 3. Existing entries to tag "paper & card" (Made-of filter)

| # | name | evidence |
|---|---|---|
| 178 | Origami mechanisms | Its JSON lists "hand folding: paper, card or plastic film for trying a pattern" and gives "pop-up models" in when_to_use |
| 87 | Four-bar linkage (incl. parallelogram) | Wikipedia 'Pop-up book': "the basic principle of a pop-up book: the parallelogram" |
| 84 | Cam and follower | Its JSON lists "Maker cams: card and wood for automata (Rob Ives)". Make: Maker Camp 'Paper craft automata' builds a paper cam with a paper-clip crank |
| 86 | Slider-crank | Its JSON lists "push-rods in automata". Rob Ives' 'Mechanism' page lists a paper "crank slider mechanism" model |
| 35 | Geneva drive | Rob Ives 'Mechanism' page: paper model of "The Geneva mechanism" |
| 88 | Rack and pinion | Rob Ives 'Mechanism' page: "The rack and pinion is used to convert between rotary ..." (paper model) |
| 267 | Spur gear pair and gear train | Rob Ives 'Mechanism' page: "Gears are used to change speed in rotational movement" (paper model) |
| 16 | Worm drive | Rob Ives 'Mechanism' page: "A worm is used to reduce speed" (paper model) |
| 98 | Bevel gears | Rob Ives 'Mechanism' page: "The bevel gear is used to change the axis of ..." (paper model) |
| 7 | Ratchet and pawl | Rob Ives 'Mechanism' page: "The ratchet can be used to move a toothed ..." (paper model) |
| 282 | Elastic band and elastic cord springs | Rubber bands power snap-up card cubes (Alliance Rubber DIY pop-up cube; Instructables 'Pop Up Box') |
| 380 | Eyelets and grommets | Its JSON lists "card and paper for crafts". Wikipedia 'Pop-up book': Astronomicum Caesareum "nested circular pieces revolving on grommets" |
| 360 | Conductive tape | Its JSON: "choose conductive fabric tape where the circuit is folded again and again (cards that open, accordion books)". Chibitronics light-up pop-up tutorials |

The paper-joints agent will probably tag tab-and-slot (#239: its JSON lists "cardboard") and
cross-halving (#242: "cardboard and card"). Pop-ups also use both: Warwick's flap option 2 slots a
folded piece through a slot, and Chibitronics' slot-and-joint arm slots through a parallelogram.

## 4. Notes additions to existing entries

- **#178 Origami mechanisms:** add a "not to be confused with" line. Pop-ups are cut and glued from
  stiff card and are powered by opening a page; origami folds an uncut sheet. Point to the new
  parallel-fold and V-fold entries. Kirigami pop-up cards (origamic architecture) belong with the
  parallel fold. Sources: Wikipedia 'Origamic architecture'; the Tsinghua V-pop-up page quotes
  older Wikipedia text: "origami in its simplest form doesn't use scissors or glue ... pop-ups rely
  on glue, scissors and stiff card".
- **#87 Four-bar linkage:** add the parallel-fold pop-up card as an everyday example of a
  parallelogram linkage made of paper, citing Wikipedia 'Pop-up book'.
- **#282 Elastic band springs:** add the snap-up pop-up cube as an everyday example. If entry 5 is
  not made, put the whole of entry 5 here.
- **Paper-joints agent's "Score-and-fold hinge" (proposed elsewhere):** add lift-the-flap.
  Warwick lesson 3 gives three ways to make one: a door cut on three sides, a folded piece glued on,
  or a folded piece slotted through. Also add harlequinade or turn-up flaps and the gatefold
  (popuplady glossary).

## 5. Rejected or merged candidates

| candidate | outcome | why |
|---|---|---|
| Lift-the-flap hinge | merged into the score-and-fold hinge (paper-joints agent), with pull-driven flaps in entry 3 | A flap is a scored or glued paper hinge. Popuplady: "a single piece of paper attached to the base page at a single point" |
| Floating layer and lattice | merged into entry 1 | Floating planes sit on parallel supports (Chibitronics). Lattice: no source found ⚑ |
| Mouth (open-and-close) pop-up | merged into entry 2 | It is a V-fold variant (Warwick: "V-Fold: Variations – Mouth Fold") |
| Rotating or spinning mechanisms | merged into entry 4 (and pivot arms into entry 3) | Hiner's "rotating disc" and "pivoting motion" are a wheel and a lever on a paper pivot |
| Dissolving scenes and transformations | split between entries 4 (dissolving wheel) and 3 (Venetian-blind slats) | popuplady's two meanings of "metamorphosis" |
| Carousel book | merged into entry 6 | Same concertina principle as the tunnel book (Utah OAB) |
| Scissor or accordion (concertina) fold | concertina in entry 6; paper lazy-tongs rejected | No source found for a paper scissor pop-up as a type. #89 Scissor linkage covers lazy tongs |
| Pop-up spring or coil | merged into entry 5 | Folded paper spring (Twin Cities Frugal Mom). Irvine's book covers "coils" (Sabuda book list) |
| Rubber-band pop-ups and jumping cards | entry 5 | |
| Paper automata | rejected as an entry; tag existing instead | Whole toys built from cams, cranks, gears and linkages that already have entries (Rob Ives 'Mechanism' page) |
| Kirigami and origamic architecture | merged into entry 1, with a note in #178 | These are cut-and-fold single-sheet parallel and V pop-ups. Kirigami itself is an art form |
| Audio and light-up mechanisms | rejected | Electronics added to cards. Light-up uses conductive tape (#360) and paper circuits, outside pop-up mechanics |
| Pop-outs, gatefolds, harlequinades | notes only | Folding page formats, not mechanisms |

## 6. Safety points and figures that disagree

- **Card weight.** Make: and Sabuda use "110 lb card stock". Chibitronics says "110 pound is ideal,
  but 65 pound will work". Rob Ives used "280 micron" card. Instructables Pop-Up Card used 160 g
  card for the final model. Utah uses text-weight paper for concertinas and cardstock for panels.
  No metric conversion was found in a source, so convert carefully or quote as given ⚑.
- **V-fold angle.** Georgia Tech says right, acute and obtuse V-folds all work, and that the pop-up
  piece's angle must be at least the base angle. A search result claimed that a V wider than 90
  degrees leaves the paper "under constant stress", but it came from a scraped page that was not
  opened. Not used ⚑.
- **Opening angle (90 vs 180 degrees).** Georgia Tech: "the parallelogram lies flat at 180° and
  only comes into dimension when held at less than 180° while the symmetric and asymmetric folds
  require the page be open to 180°". Warwick says the glued tent "will stand up when the card is
  open at 180°". Sabuda's single-sheet pop-ups are viewed with the card opened "like a tent" (about
  90 degrees). Origamic architecture has 90, 180 and 360 degree styles. These do not conflict: each
  design is made for one viewing angle, and the entry should say so. The Georgia Tech wording is
  hard to follow, so check it against Birmingham or Hiner in deep research ⚑.
- **Volvelle pivot.** Sources give different pivots: string (Museum Wales), a split pin (Museum
  Wales), a rivet (popuplady), a paper disc or metal grommet (popuplady, 'wheel'), and split paper
  tabs through a 1 cm hole (Warwick). All are valid. Present them as options.
- **Pull-strip geometry.** The flap flips right over at E = F and stands upright at E = 2 x F
  (Birmingham extract). Only one source gives this.
- **Rubber band size.** The band's flat length should be "slightly bigger" than one cube side
  (Alliance Rubber). No other source gave a figure.
- **Safety.**
  1. Craft knives: Utah lists an X-Acto knife, and Chibitronics uses a craft knife. No source
     gave a safety rule, so this is general guidance.
  2. Let glue set before opening a pull-strip page (Birmingham).
  3. Make: Maker Camp: "Your safety is your own responsibility ... adult supervision".
  4. Unsourced ⚑: snap-up cubes and rubber bands can flick at faces; split-pin legs are sharp and
     small parts can be swallowed by young children.

## 7. Every URL opened

| URL | what it showed |
|---|---|
| https://en.wikipedia.org/wiki/Pop-up_book (curl HTML and WebFetch) | Mechanism list (animated, transformations, tunnel books, volvelles, harlequinades, flaps, pull-tabs); parallelogram diagram caption; Astronomicum Caesareum on grommets. 'Movable book' redirects here |
| https://en.wikipedia.org/wiki/Volvelle (WebFetch) | Definition as wheel chart / slide chart; 20th-century uses |
| https://en.wikipedia.org/wiki/Movable_book (WebFetch) | Same content as Pop-up book (redirect) |
| https://en.wikipedia.org/wiki/Origamic_architecture | Chatani; 90, 180 and 360 degree styles; single sheet versus pop-ups |
| https://en.wikipedia.org/wiki/Kirigami | Stub: cut and folded paper, typically no glue |
| https://en.wikipedia.org/wiki/Paper_engineering | About paper manufacture (pulp), NOT pop-ups. Do not cite for pop-ups |
| https://en.wikipedia.org/wiki/Paper_model | Opened (200), not used |
| (Wikipedia API extracts and the 'Harlequinade (book)' page were rate-limited (429) and not read; Tunnel_book, Carousel_book, Flap_book and Lift-the-flap_book returned 404) | |
| https://makezine.com/projects/pop-up-monster | Sabuda-studio V-fold plus layer folds on one sheet; 110 lb card stock |
| https://www.robertsabuda.com/ | Index of free templates (single-sheet layer, monster, mouth; tunnel book) |
| https://www.robertsabuda.com/8203single-sheet-layer.html | Step-by-step single-sheet parallel (layer) fold |
| https://www.robertsabuda.com/single-sheet-mouth.html | Step-by-step mouth pop-up (V-fold variant) |
| https://www.robertsabuda.com/single-sheet-pop-ups.html | Index page only |
| https://www.robertsabuda.com/nyc-tunnel-book-advanced.html | Tunnel book build with accordion side pieces and glue tabs |
| https://www.robertsabuda.com/faq.html | FAQ (design and production); not quoted |
| https://www.robertsabuda.com/how-to-books.html | Annotated list of how-to books with the mechanisms each covers (Hiner, Irvine incl. rubber band mechanisms and coils, Birmingham, Carter, Chatani) |
| https://www.robertsabuda.com/drawmaton.html | Wooden drawing automaton kit; not relevant |
| https://marshlibrary.ie/v-fold-pop-up-instructions/ | Children's V-fold guide (instructions in an embedded file, not read) |
| https://marshlibrary.ie/make-your-own-volvelle/ | Apian volvelle copy to make (slides not read) |
| https://warwick.ac.uk/fac/sci/wmg/about/outreach/resources/paperengineering/paper_engineering_pop-up_book_l2.pdf | Mouth fold, angle fold, double box ("floating plane"), tent; creasing tip |
| https://warwick.ac.uk/fac/sci/wmg/about/outreach/resources/paperengineering/paper_engineering_pop-up_book_l3.pdf | Pop-ups vs mechanisms; lift-up flaps (3 options), pull slider (5 mm slot), rotary wheel on paper tabs |
| https://www.cutoutandkeep.net/projects/automatic-pull-strip | Birmingham extract: automatic pull-strip, flap E = F / E = 2F rules |
| https://www.cutoutandkeep.net/books/pop-up-design-and-paper-mechanics | Book page: "18 underlying shapes" |
| https://amgueddfa.cymru/blog/2044// | Museum Wales: volvelles fastened with string; split pin alternative |
| https://www.newberry.org/calendar/make-your-own-volvelles-workshop | Volvelles as ancestors of pop-ups; three types of increasing complexity |
| https://oab.lib.utah.edu/artist_book_term/carousel-book/ (from ?p=585) | Carousel book definition (star shape) |
| https://oab.lib.utah.edu/artist_book_term/movable-book/ (from ?p=803) | Movable book definition |
| https://popuplady.com/about-pop-ups/glossary-of-pop-up-terms/ (from ?p=95) | Glossary: carousel, fanfold, flaps, harlequinade, lift-the-flap, metamorphosis (2 kinds), pull-tabs, spider web, tunnel book, volvelle, wheel |
| https://library.si.edu/sites/default/files/pdf/general_pages/2010Paper_Engineering_release__10.203.pdf | Smithsonian Libraries 'Paper Engineering: Fold, Pull, Pop and Turn' press release |
| https://blog.library.si.edu/blog/tag/robert-sabuda and https://blog.library.si.edu/blog/2010/07/13/the-fascinating-art-of-paper-engineering-movables | 403 / service error, not read |
| https://cg.cs.tsinghua.edu.cn/people/~xianying/Papers/V-Popup/index.html | Li et al. SIGGRAPH 2011 V-style pop-ups: pop-uppability conditions |
| https://chibitronics.com/2024/09/19/popuptober-light-up-floating-plane-pop-up-mechanism-featuring-chibitronics/ | Floating plane on three parallel supports; card weights; Birmingham pp. 60-63 |
| https://chibitronics.com/2024/09/29/popuptober-light-up-slot-joint-mechanism-featuring-chibitronics/ | Slot-and-joint arm on a parallelogram |
| https://chibitronics.com/tag/popuptober/ | List of PopUpTober tutorials (V-fold, parallelogram, 45-degree folds, slide switch) |
| https://www.tarquingroup.com/products/paper-engineering | Hiner book: ten working mechanisms with "technical considerations" |
| https://collections.centerforbookarts.org/Detail/objects/1928 | Hiner's ten mechanisms named |
| https://www.thamesandhudson.com/products/paper-engineering-for-designers | Contents: 8 tab, 6 pivot, 3 wheel mechanisms, 1 dissolving window |
| https://paper.gatech.edu/kinetic-joy/physics-paper-engineering | V-fold and parallel-fold balance rules |
| https://www.instructables.com/Instructables-Pop-Up-Card/ | V-fold angle equilibrium; parallel fold a1+b1=a2+b2 (step text from page JSON) |
| https://www.rubberband.com/blog/diy-pop-up-cube-using-rubber-bands/ | Rubber-band pop-up cube; band sizing |
| https://www.instructables.com/Self-Pop-up-Cubic-Card/ | Rubber-band cube that pops when pulled from a book (step JSON) |
| https://www.instructables.com/Pop-Up-Box/ | Rubber-band pop-up box (step JSON) |
| https://www.robives.com/blog/locking-snap-up-cube-to-download-and-make/ (from ?p=1188) | Snap-up cube with lock tab; 280 micron card |
| https://www.robives.com/mechanism/ | Paper models of cam, worm, Geneva, gears, bevel, ratchet, rack and pinion, linkages, levers, crank slider |
| https://www.robives.com/essentialmech/ | Collections shop page; not used |
| https://makercamp.make.co/project/paper-craft-automata/ | Paper automaton with paper-clip crank and cam; safety disclaimer |
| https://cloud.wikis.utexas.edu/wiki/spaces/RMD/pages/51066927/1.+Introduction+Impatience | Page loaded empty (JS); not used |
| https://lib.utah.edu/collections/book-arts/community/Tunnel%20Book%20LP.pdf | Tunnel book lesson plan (concertinas plus panels) |
| https://twincitiesfrugalmom.com/2021/01/valentine-bunny-pop-up-box-paper-craft/ | Folded two-strip paper spring in a pop-up box |
| https://nmwa.org/wp-content/uploads/2021/01/Book-Instructions_all.pdf | Book-structure handouts (rubber-band journal); not used |
| https://blogs.brighton.ac.uk/viscommtech/bookarts/worksheets-for-bookbinders/simple-pop-ups/ | Points to Duncan Birmingham's Pop-Up Channel on YouTube |
| https://www.reddit.com/r/cardmaking/comments/1vhkqv7/tricks_to_make_paper_articulateslide_apart_more/ (read via https://arctic-shift.photon-reddit.com/api/comments/search?link_id=1vhkqv7&limit=50) | Smoother sliding: spacer frame, vellum, foam tape channel |
| https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=cardmaking&query=pull%20tab&limit=10 | Thread titles only |
| https://www.splitcoaststampers.com/resources/tutorials/pulltabslidercard | 403, not read |
| https://openlab.bmcc.cuny.edu/makerspace/popups/ | Connection reset, not read |
| https://spec.lib.miamioh.edu/home/pop-up-and-movable-books/ | TLS failure, not read |
| https://specialcollections-blog.lib.cam.ac.uk/?p=16378 | Connection reset, not read |
