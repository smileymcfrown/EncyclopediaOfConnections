// Keyless locking bush: a V-belt pulley clamped on a plain 20 mm shaft by a flanged keyless bush,
// with a quarter cut away. The cut shows the bush's two tapered rings: tightening the ring of cap
// screws pulls the outer sleeve along the taper, so it swells into the pulley bore while the inner
// ring squeezes the shaft. No key, no keyway.
const B0 = 0, B1 = 24; // pulley hub length, measured from where it sits on the shaft (SH)
export default {
  alt: 'Render of a keyless locking bush, cut open by a quarter: a V-belt pulley sits on a plain steel shaft, held only by a dark steel bush in its bore; the cut shows the bush\'s two tapered rings wedged between shaft and pulley, with a ring of cap screws on its front flange.',
  kind: 'cross-section',
  view: { dir: [0.9, 0.55, 1.4], fill: 0.95 },
  build(K) {
    const { group, at, lathe, cyl, hex, mat } = K;
    const SH = 28; // pulley sits this far up the shaft
    const shaft = lathe([[0, 0], [10, 0], [10, SH + 46], [0, SH + 46]], mat.steel(), { cut: 90, cutMat: mat.cut(0x9fa4aa) });
    const pulley = at(lathe([[23.5, B0], [44, B0], [44, 3], [37, 9.5], [37, 14.5], [44, 21], [44, B1], [23.5, B1], [23.5, B0]],
      mat.castIron(), { cut: 90, cutMat: mat.cut(0x6f7378) }), [0, SH, 0]);
    const dark = mat.blackOxide();
    // inner ring: grips the shaft, tapered outside (thicker towards the front), with the screw flange
    const inner = at(lathe([[10.05, 1], [12.4, 1], [14.6, 22.6], [14.6, 24.2], [23.4, 24.2], [23.4, 31], [10.05, 31], [10.05, 1]],
      dark, { cut: 90, cutMat: mat.cut(0xc2412f) }), [0, SH, 0]);
    // outer sleeve: tapered inside, plain outside, presses into the pulley bore
    const outer = at(lathe([[12.5, 1], [23.45, 1], [23.45, 22.4], [14.65, 22.4], [12.5, 1]],
      dark, { cut: 90, cutMat: mat.cut(0xe08a3c) }), [0, SH, 0]);
    // cap screws round the flange (the two in the cut-away quarter are left out)
    const screws = [];
    for (const phi of [90, 150, 210, 270]) {
      const a = (phi * Math.PI) / 180, x = 18.8 * Math.sin(a), z = 18.8 * Math.cos(a);
      screws.push(at(cyl(4.5, 5.5, dark), [x, SH + 31 + 2.75, z]));
      screws.push(at(hex(4, 2.2, mat.rubber(0x0c0c0d)), [x, SH + 31 + 4.6, z]));
    }
    return group(shaft, pulley, inner, outer, screws);
  },
};
