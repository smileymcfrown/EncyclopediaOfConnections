// Push-on edge trim: black U-shaped PVC trim pushed onto the top edge of a 2 mm aluminium sheet.
// The trim's cut end shows its profile: the metal clip moulded inside and the angled gripping
// tongues pressing on both faces of the sheet. The far end of the sheet edge is still bare.
// Profile (x = depth from the back of the U, y = across the sheet), extruded along the edge.
const OUTER = [[13, -2.6], [2.5, -2.6], [2.5, 2.6], [13, 2.6], [13, 4.6], [12.6, 5], [2.4, 5], [0, 3], [0, -3], [2.4, -5], [12.6, -5], [13, -4.6]];
const CLIP = [[11.4, 3.85], [1.5, 3.85], [1.5, -3.85], [11.4, -3.85], [11.4, -3.35], [2.0, -3.35], [2.0, 3.35], [11.4, 3.35]];
const tongue = (x, s) => [[x, s * 2.6], [x - 1.7, s * 1.0], [x - 2.3, s * 1.0], [x - 0.7, s * 2.6]].map(([a, b]) => [a, b]);
export default {
  alt: 'Render of push-on edge trim: a black U-shaped rubbery strip pushed onto the edge of an aluminium sheet, its cut end showing the metal clip moulded inside and the angled tongues gripping both faces of the sheet; the far end of the sheet edge is still bare.',
  view: { dir: [1.5, 0.6, 0.55], fill: 1.0 },
  build(K) {
    const { group, at, box, extrude, mat } = K;
    const pvc = mat.rubber(0x202022), LEN = 52;
    const profile = group(
      extrude(OUTER, LEN, pvc, { bevel: 0 }),
      extrude(CLIP, LEN + 0.1, mat.chrome(), { bevel: 0 }),         // its ends just show on the cut ends
      [6.5, 9.5, 12.5].flatMap((x) => [1, -1].map((s) => extrude(s > 0 ? tongue(x, s) : tongue(x, s).reverse(), LEN, mat.rubber(0x2c2c2f), { bevel: 0 }))),
    );
    // profile x -> down into the sheet, profile y -> across it, extrusion -> along the edge (x)
    const trim = group(at(profile, [0, 0, 0], [0, 90, 0]));
    trim.rotation.x = -Math.PI / 2;
    const H = 22, L = 70;
    trim.position.set(L / 2 - LEN / 2, H + 2.5, 0);            // flush with the sheet's near end; the far end is bare
    const sheet = at(box(L, H, 2, mat.aluminium(), 0.3), [0, H / 2, 0]);
    return group(sheet, trim);
  },
};
