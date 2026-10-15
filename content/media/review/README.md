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

### ⚑ Still needs a real photo (116 pages)

No copyable photo that really shows the item was found for these. A photo of your own (CC BY or
CC BY-SA, on Wikimedia Commons) would help:

air-bearing-and-air-caster, air-logic-valve, aluminium-extrusion-connectors, annular-snap-fit, anti-backlash-gear, anti-twister-mechanism, bent-or-twisted-tab-through-a-slot, bidirectional-anti-back-drive-clutch, binding-plate-lock, bistable-compliant-mechanism, capstan-cable-drive, captive-nut-pocket, clamp-on-accessory-mount-for-bars-poles-and-edges, clevis-joint, click-pen-mechanism, clip-on-concealed-hinge, compliant-detent, compliant-gripper-and-force-amplifier, compliant-one-piece-latch, cross-halving-slot-joint, crush-ribs-and-spring-fit-features, detent-hinge, elastic-averaging, elastic-band-and-elastic-cord-springs, electro-permanent-magnet, exact-constraint-mounting, face-ratchet, fin-ray-gripper, flexible-beam-coupling, float-valve, folded-seam, four-bar-linkage, friction-clutch, friction-welded-plastic, gearless-right-angle-drive, geneva-drive, granular-jamming-gripper, guy-line-slider, half-nut, heat-set-threaded-insert, heat-staking, housing-and-rebate-joints, indexing-plunger, intermittent-gear, invisible-barrel-hinge, iris-valve, jaw-coupling, keyless-locking-bush, kinematic-coupling, knife-edge-and-jewel-pivots, labyrinth-seal, ladder-lock-buckle, lamina-emergent-torsional-joint, lever-cam-panel-connector, lid-and-flap-stays, load-bearing-stitch-patterns-for-straps-and-webbing, locating-pins-and-hole-and-slot, magnet-joint, magnetic-assisted-buckle, magnetic-coupling-and-magnetic-gear, magnetic-detent, mechanical-metamaterial-mechanism, mid-print-embedding, multi-material-interlock, multi-stage-slide-rigging, multi-turn-rotation-limiter, ortho-planar-spring, parallel-leaf-spring-flexure, planetary-gear-set, pneumatic-artificial-muscle, printing-onto-fabric, push-in-plastic-rivet, push-on-edge-trim, push-push-latch, quarter-turn-fastener, quick-release-hooks, quick-release-pin, ratchet-tooth-torque-limiter, rigid-chain-actuator, rolling-contact-joint, rotary-latch, self-tapping-screw-into-plastic, servo-or-motorised-latch, shape-memory-alloy-wire-latch, shear-pin-coupling, shock-corded-sectional-pole, shut-off-valve, snap-lock-sheet-joint, snap-pin, soft-pneumatic-bending-actuator, speed-control-valve, split-part-joints-for-large-prints, spring-button-lock, spur-gear-pair-and-gear-train, straight-line-linkages, stretch-release-adhesive-strips, structural-acrylic-and-low-surface-energy-plastic-adhesives, swashplate-and-wobble-plate, switchable-permanent-magnet, syringe-hydraulics, t-slot-joint, tape-spring-hinge, telescoping-tube-twist-lock, threadless-ball-screw, toggle-clamp, tolerance-ring, torque-limiting-gear-with-flexing-spring-arms, torsional-snap-fit, twisted-and-coiled-polymer-muscle, twisted-string-actuator, universal-joint, vacuum-driven-artificial-muscle, virtual-pivot-linkage, wave-and-disc-springs, wedge-dowel, wrap-spring-clutch
