// Locating pins with hole-and-slot location: an aluminium base with two hardened steel dowel pins,
// and the blue anodised plate that goes on it lying beside, showing its snug round hole and the slot
// that points at that hole. Two bolt holes in the plate line up with tapped holes in the base.
const PX = 22;             // the pins are at x = -PX and x = +PX
const PR = 3;              // 6 mm dowel pins

function plateShape(K, w, d, holes) {
  const { THREE, roundRect } = K;
  const s = roundRect(w, d, 2);
  for (const h of holes) s.holes.push(h);
  return s;
}
const circ = (K, x, y, r) => { const p = new K.THREE.Path(); p.absarc(x, y, r, 0, Math.PI * 2, true); return p; };
function slot(K, x, y, len, r) {             // a slot along x, centred at (x, y)
  const p = new K.THREE.Path();
  p.absarc(x + len / 2, y, r, -Math.PI / 2, Math.PI / 2, false);
  p.absarc(x - len / 2, y, r, Math.PI / 2, (3 * Math.PI) / 2, false);
  return p;
}

export default {
  alt: 'Render of hole-and-slot location: an aluminium base with two steel dowel pins standing up from its top, and beside it the blue plate that fits on it, with a snug round hole for one pin and a slot pointing towards that hole for the other, plus two bolt holes.',
  view: { dir: [0.35, 1.05, 1.0], fill: 0.95 },
  build(K) {
    const { group, at, extrude, lathe, mat } = K;
    const alu = new K.THREE.MeshPhysicalMaterial({ color: 0xb9bdc2, metalness: 1, roughness: 0.5 });
    const dark = mat.blackOxide();
    // base: 70 x 16 x 36 mm with two tapped holes (shown as dark holes)
    const base = at(group(at(extrude(plateShape(K, 70, 36, [circ(K, 0, 10, 2.1), circ(K, 0, -10, 2.1)]), 16, alu, { bevel: 0.6 }), [0, 0, 0], [-90, 0, 0])), [0, 8, 0]);
    const tapped = [10, -10].map((z) => at(K.cyl(2.15, 15.8, dark), [0, 8, z]));
    // dowel pins: 6 mm, standing 9 mm proud, chamfered tops
    const pin = () => lathe([[0, -4], [PR, -4], [PR, 8.2], [PR - 0.7, 9], [0, 9]], mat.steel());
    const pins = [-PX, PX].map((x) => at(pin(), [x, 16, 0]));
    // the plate that fits on it: 70 x 6 x 36, round hole at -PX, slot at +PX pointing at the hole
    const holes = [circ(K, -PX, 0, PR + 0.05), slot(K, PX, 0, 5, PR + 0.05), circ(K, 0, 10, 2.75), circ(K, 0, -10, 2.75)];
    const plate = at(group(at(extrude(plateShape(K, 70, 36, holes), 6, mat.anodised(0x2f5f9e), { bevel: 0.4, curve: 32 }), [0, 0, 0], [-90, 0, 0])),
      [8, 3, 52], [0, -8, 0]);
    return group(base, ...tapped, ...pins, plate);
  },
};
