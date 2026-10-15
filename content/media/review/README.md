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
