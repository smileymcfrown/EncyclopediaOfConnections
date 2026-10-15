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

### ⚑ Still needs a real photo (94 pages)

No copyable photo that really shows the item was found for these, in R32 or R34. Since R35 each shows a
render as a stand-in (listed in `../render/README.md`). A photo of your own (CC BY or CC BY-SA, on
Wikimedia Commons) would still help:

air-bearing-and-air-caster, air-logic-valve, aluminium-extrusion-connectors, annular-snap-fit, anti-backlash-gear, anti-twister-mechanism, bent-or-twisted-tab-through-a-slot, bidirectional-anti-back-drive-clutch, binding-plate-lock, bistable-compliant-mechanism, capstan-cable-drive, clamp-on-accessory-mount-for-bars-poles-and-edges, click-pen-mechanism, compliant-detent, compliant-gripper-and-force-amplifier, compliant-one-piece-latch, cross-halving-slot-joint, crush-ribs-and-spring-fit-features, detent-hinge, elastic-averaging, electro-permanent-magnet, exact-constraint-mounting, face-ratchet, fin-ray-gripper, flexible-beam-coupling, folded-seam, four-bar-linkage, friction-welded-plastic, gearless-right-angle-drive, granular-jamming-gripper, guy-line-slider, half-nut, heat-set-threaded-insert, heat-staking, housing-and-rebate-joints, indexing-plunger, intermittent-gear, invisible-barrel-hinge, iris-valve, jaw-coupling, keyless-locking-bush, kinematic-coupling, knife-edge-and-jewel-pivots, lamina-emergent-torsional-joint, lever-cam-panel-connector, lid-and-flap-stays, load-bearing-stitch-patterns-for-straps-and-webbing, locating-pins-and-hole-and-slot, magnet-joint, magnetic-assisted-buckle, magnetic-detent, mechanical-metamaterial-mechanism, mid-print-embedding, multi-material-interlock, multi-stage-slide-rigging, multi-turn-rotation-limiter, ortho-planar-spring, parallel-leaf-spring-flexure, pneumatic-artificial-muscle, printing-onto-fabric, push-on-edge-trim, push-push-latch, quarter-turn-fastener, quick-release-hooks, quick-release-pin, ratchet-tooth-torque-limiter, rigid-chain-actuator, rolling-contact-joint, rotary-latch, servo-or-motorised-latch, shape-memory-alloy-wire-latch, shear-pin-coupling, shock-corded-sectional-pole, snap-lock-sheet-joint, snap-pin, soft-pneumatic-bending-actuator, speed-control-valve, split-part-joints-for-large-prints, stretch-release-adhesive-strips, structural-acrylic-and-low-surface-energy-plastic-adhesives, t-slot-joint, tape-spring-hinge, telescoping-tube-twist-lock, threadless-ball-screw, tolerance-ring, torque-limiting-gear-with-flexing-spring-arms, torsional-snap-fit, twisted-and-coiled-polymer-muscle, twisted-string-actuator, vacuum-driven-artificial-muscle, virtual-pivot-linkage, wave-and-disc-springs, wedge-dowel, wrap-spring-clutch
