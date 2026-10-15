// Snap pin: a 3D-printed split pin holding two round printed parts together, both parts cut away
// to show the pin's two springy legs pushed through the hole and their barbs caught behind the
// shoulder of a wider pocket in the lower part; a second pin lies beside them.
const RS = 2.5, SLOT = 0.6;                 // shank radius, half the slot width

// one leg: half of a turned barbed shank, on the +x side of the slot (side = 1) or the -x side
function leg(K, m, side) {
  const prof = [[0, 0], [1.3, 0], [3.3, 2.7], [3.3, 2.85], [RS, 3.0], [RS, 9], [0, 9]];
  return K.at(K.lathe(prof, m, { cut: 180, start: side > 0 ? -90 : 90, cutMat: m }), [side * SLOT, 0, 0]);
}
function pin(K, m) {
  const { group, at, lathe } = K;
  return group(leg(K, m, 1), leg(K, m, -1),
    lathe([[0, 9], [RS, 9], [RS, 11], [4.5, 11], [4.5, 12.2], [4.0, 12.6], [0, 12.6]], m));
}
export default {
  alt: 'Render of a snap pin: two round 3D-printed parts held together by a split plastic pin, both parts cut away to show the pin\'s two legs passing through the hole with their barbs sprung out behind a shoulder inside the lower part; a second pin lies beside them.',
  kind: 'cross-section',
  view: { dir: [0.6, 0.65, 1.5], fill: 0.95 },
  build(K) {
    const { group, at, lathe, mat } = K;
    const orange = mat.pla(0xe0701c, 80), grey = mat.pla(0x5c626b, 80), blue = mat.pla(0x2b5f8c, 80);
    // lower part: 10 mm thick, a 5.2 mm hole for 4 mm, then a wider pocket the barbs spring out into
    const lower = lathe([[0, 0], [14, 0], [14, 10], [2.6, 10], [2.6, 6], [3.7, 6], [3.7, 2], [0, 2], [0, 0]], grey,
      { cut: 90, cutMat: mat.pla(0x464b52, 80) });
    const upper = lathe([[2.6, 10], [14, 10], [14, 14], [2.6, 14], [2.6, 10]], blue, { cut: 90, cutMat: mat.pla(0x214c72, 80) });
    const fitted = at(pin(K, orange), [0, 3, 0], [0, 22, 0]);          // barbs caught under the shoulder at y = 6
    const loose = at(pin(K, orange), [27, 4.5, 6], [-23, 0, 90]);
    return group(lower, upper, fitted, loose);
  },
};
