# Drawn renders (R35)

Realistic 3D renders of entries, made for the encyclopaedia as **stand-ins for real photos** on the
pages where no copyable photo of the item could be found (R32, R34). Each page that uses one says so
under the picture (*Render … not a photo*, ⚑ needs confirming), and
`content/media/render/README.md` lists them all, so they can be checked and swapped for real photos
later.

Each render is a small three.js model (`models/<page>.js`) built from the kit in `kit.js`, lit
and photographed by `stage.html` (soft studio light, pale backdrop, soft shadow) in headless
Chromium.

```bash
cd tools/renders
npm install                       # three and playwright-core (Chromium comes with Playwright)
node render.mjs                   # every model -> content/media/render/<page>.webp + renders.json
node render.mjs some-page --preview /tmp/prev --dry   # try one out: writes only /tmp/prev/some-page.png
```

Then add `render` to the page's list in `content/media/pictures.yaml` (normally second, after the
animation or diagram) and run `python3 tools/make_entries.py`.

## Writing a model

```js
// models/heat-set-threaded-insert.js
export default {
  alt: 'Render of …: one plain sentence saying what it shows, for people who cannot see it.',
  kind: 'cross-section',          // or leave out: a plain render
  note: 'weak: …',                // optional: shown in the register (content/media/render/README.md)
  view: { dir: [0.75, 0.6, 1.5], fill: 0.92 },   // optional camera: direction to the camera, how much of the frame to fill
  build(K) {                      // K is kit.js; return a THREE.Object3D; millimetres, Y up
    const { group, at, lathe, mat } = K;
    …
  },
};
```

`view` also takes `fov` (default 28), `light` (direction of the key light), `target` (offset of the
point looked at), `ground: false` (no floor and shadow, for things that hang), `background`,
`exposure`.

The kit (`kit.js`):

| | |
|---|---|
| `mat.*` | `steel`, `zinc` (zinc-plated), `stainless`, `chrome`, `aluminium`, `anodised(c)`, `brass`, `copper`, `blackOxide`, `castIron`, `paint(c)`, `rubber(c)`, `silicone(c)`, `plastic(c)`, `nylon(c)`, `pla(c, layers)` (3D print, with layer lines), `wood(c, grain)`, `fabric(c)`, `glass`, `magnet`, `cut(c)` (the colour of cut faces) |
| shapes | `box(w, h, d, m, r)`, `cyl(r, h, m, {r2})`, `sphere`, `torus(R, r, m, arc)`, `tube(ro, ri, h, m)`, `lathe([[r, y], …], m, {cut})` (a turned part; `cut: 90` cuts a quarter away and fills the cut faces), `extrude(outline, depth, m, {holes})` (flat parts; `circle`, `roundRect` make outlines), `gear(teeth, module, width, m, {bore, hub})`, `spring(R, wire, turns, length, m)`, `threaded(r, pitch, length, m)`, `hex(af, h, m, hole)`, `wire(points, r, m)` (bent rods, cords, cables) |
| placing | `at(obj, [x, y, z], [rx, ry, rz] in degrees)`, `group(...)`, `mesh(geometry, material)`; `THREE` for anything else. `at` sets the rotation, so wrap a part that comes pre-rotated (such as `hex`) first: `at(group(hex(…)), pos)` |

## What makes a good stand-in

- **It must be recognisably the item** a maker would buy, print or make, at believable proportions,
  in believable materials (zinc-plated steel screws, brass inserts, PLA prints in a plain colour).
- **Show the connection working**: the parts joined, or just about to join, often with one part
  lying beside the assembly; a cut-away (`kind: 'cross-section'`) when the inside is what matters.
- No text, labels, arrows or people: it stands in for a photo. The diagram on the page explains.
- Check the picture, change the model or the view, render again, until it reads at a glance.
