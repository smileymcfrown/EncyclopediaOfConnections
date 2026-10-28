# Picture review (R30)

The owner found that some entry pictures don't explain the entry: *exact constraint mounting*
showed a diagram of the six degrees of freedom, which is a related idea, not the mounting. So
every copied Commons picture (361) was looked at next to its entry's name and summary, in contact
sheets of 12, and given one verdict:

- **keep**: it shows what the thing is, or what it does, or how it works, clearly enough at page size;
- **swap**: a better Commons file with a copyable licence (public domain, CC0, CC BY, CC BY-SA) was
  found, and is named;
- **drawn**: no better copyable file was found, so a diagram was drawn for the encyclopaedia
  (`../drawn/<page>.svg`), in the same house style as the R29 diagrams.

The pictures that were wrong outright (a different item) were all swapped or drawn, for example
*iris valve* (the photo was a pinch-valve sleeve) and *heat-set threaded insert* (a slotted
press-in insert).

`batch-01.yaml` … `batch-06.yaml` hold every verdict with its reason (`page: {verdict, use, alt,
reason, unsure}`). The swaps and drawn verdicts were copied into `choices.yaml`, which R32
replaced with `../pictures.yaml` (several pictures per page). To change a page's pictures, edit
`pictures.yaml`, not these files.

Totals: 257 keep, 26 swap, 78 drawn.

## ⚑ Still worth a better picture

Kept because nothing better was found (Wikimedia's search was rate-limiting this machine for much
of the review), but a person could improve them:

- **ladder-lock-buckle**: the photo is a tri-glide (the non-locking slider the entry also covers),
  not a ladder lock. Needs a ladder-lock photo, or a drawing with the strap path checked.
- **invisible-barrel-hinge**: the animation shows the mechanism, but small, in a big grey frame,
  with German labels.
- **sear-and-trigger**: numbered labels only; a drawn sear could be clearer.
- **slip-ring-and-rotary-union**: letter labels A-D with no key on the picture.
- **soldered-wire-joint**: shows the twist (Western Union splice) but not the solder.
- **shackle-and-quick-link**: the new picture shows a quick link only; a D-shackle photo would suit too.
- **hirth-joint** (the teeth are small in the crankset photo) and **hook-and-loop-fastener** (a
  micrograph of hooks caught in loops exists, `File:Micrograph of hook and loop fastener,(Velcro
  like).jpg`, CC BY-SA 3.0, but is only about 384 px wide).

Files marked "Copyrighted free use" on Commons (e.g. `File:Hirth Verzahnungsringe.JPG`) were not
used, as that is not one of the licences the project accepts (D29).

## R32: animations first, then real photos

The owner asked for an animation on every entry that moves, animated versions of the drawn
diagrams, and real photos, preferring cross-sections, then photos that show how it works, then a
clear product photo. `tools/find_pictures.py` (the *Find pictures* workflow) searched Commons and
Openverse for every entry; helpers chose from contact sheets of the candidates. `r32-*.yaml` hold
each page's choice with notes: `pictures` (merged into `../pictures.yaml`), `needs_animation` (an
animated drawing was then made for each of these that moves) and `needs_photo`.

### R34: a wider search for the pages with no photo

The owner asked for photos for the 116 pages still without one. `tools/find_pictures.py --wide` (the
*Find pictures* workflow, started by "[find photos]" in a commit message) searched further for real
photos only: each entry's other names (aliases), the Commons categories matching its name, its
Wikidata item (picture, Commons category, and the pictures in its English and German Wikipedia
articles), and Openverse for its proper term and first other names. That gave 2,541 candidates;
candidates already turned down in R32 were left out of the contact sheets. Six helpers chose from the
sheets with a written brief (photos only, strict about it being this item); Claude then checked every
pick by eye and removed five (bonded washers shown as disc springs, a strut-channel nut shown as an
extrusion nut, a plain render of a snap fit, a milling vice shown as exact-constraint mounting, a
bent bolt shown as a shear-pin coupling). `r34-*.yaml` hold each page's choice and notes.

Result: 33 photos on 22 pages (for example *universal joint*, *friction clutch*, *planetary gear
set* (a cut-away), *syringe hydraulics* (a cut brake cylinder), *geneva drive*, *clip-on concealed
hinge*). Most candidates for the rest matched only the name: towns, birds, ships, steaks.

### R37: pictures for the 43 new pages (Phase 5)

Each new page has a drawn diagram (animated for the 19 that move), checked frame by frame. *Find pictures*
ran with `--only` the 43 pages, then `--wide` for the pages still without a photo. Helpers chose from contact
sheets with the same brief as R32 and R34 (strict: it must show this item); Claude checked every pick by eye.
`r37-normal.yaml`: 25 photos on 16 pages. `r37-wide.yaml`: 645 new candidates for 23 pages (three pages got
none), nearly all name matches (railway signal boxes, crowd crushes, the village of Pin); 5 photos on 4 pages
kept, 4 picks turned down (two stand-up valentines and a pull-tab card whose folds or slider cannot be seen, a
box showing staples rather than a crease). Those four pages lost the render they had been given (D43). The 23
new pages still without a photo show a render.

### R39: Printables photos beside the renders

The owner agreed to photos from 3D-model sites under CC0, CC BY or CC BY-SA, credited to the uploader, with
checks, and to keep the renders. `tools/find_printables.py` took the Printables models linked in each render
page's research (Thingiverse and MakerWorld refuse scripted requests), re-checked each licence through the
Printables API and made contact sheets of 540 photos for 80 pages. Four helpers chose with a strict brief (real
photos only; no CAD renders, tools for making the joint, or text images); Claude checked every pick by eye and
turned 11 of 88 down. Result: 77 photos on 49 pages, shown after the render (`r39-printables.yaml`). Tools for
making a joint (a bone folder, a pin vise, a tolerance gauge) were the commonest wrong candidate.

### ⚑ Still needs a real photo (68 pages)

No copyable photo that really shows the item was found for these, in R32, R34, R37 or R39. Since R35 each shows a
render as a stand-in (listed in `../render/README.md`). A photo of your own (CC BY or CC BY-SA, on
Wikimedia Commons) would still help:

air-logic-valve, aluminium-extrusion-connectors, anti-backlash-gear, baked-in-findings, bent-or-twisted-tab-through-a-slot, bidirectional-anti-back-drive-clutch, binding-plate-lock, bonding-fastener, compression-limiter, cross-halving-slot-joint, crush-ribs-and-spring-fit-features, electro-permanent-magnet, exact-constraint-mounting, face-ratchet, folded-seam, friction-welded-plastic, gearless-right-angle-drive, glued-tab-joint, granular-jamming-gripper, heat-set-threaded-insert, housing-and-rebate-joints, indexing-plunger, jaw-coupling, keyless-locking-bush, kinematic-coupling, knife-edge-and-jewel-pivots, lead-came-joint, lever-cam-panel-connector, lid-and-flap-stays, linked-lead-screws, liquid-clay-bond, load-bearing-stitch-patterns-for-straps-and-webbing, locating-pins-and-hole-and-slot, magnet-joint, multi-material-interlock, multi-turn-rotation-limiter, panel-standoff, parallel-fold-pop-up, parallel-leaf-spring-flexure, pinned-glue-joint, pneumatic-artificial-muscle, potted-insert, pull-tab-and-slider-mechanism, quick-release-pin, rotary-latch, several-motors-driving-one-load, shear-pin-coupling, shock-corded-sectional-pole, snap-lock-sheet-joint, snap-pin, soft-pneumatic-bending-actuator, speed-control-valve, split-part-joints-for-large-prints, spring-powered-paper-pop-up, structural-acrylic-and-low-surface-energy-plastic-adhesives, t-slot-joint, tape-spring-hinge, threadless-ball-screw, tolerance-ring, torque-limiting-gear-with-flexing-spring-arms, torsional-snap-fit, twisted-and-coiled-polymer-muscle, twisted-string-actuator, v-fold-pop-up, v-groove-fold, vacuum-driven-artificial-muscle, wedge-dowel, wrap-spring-clutch
