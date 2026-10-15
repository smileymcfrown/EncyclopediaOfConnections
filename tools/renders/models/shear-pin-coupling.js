// Shear-pin coupling: a steel gear with a hub on a shaft, joined by one brass cross pin. A quarter of
// the hub and shaft is cut away above the pin to show it passing through both, with narrowed necks
// where the hub meets the shaft (where it snaps if the gear jams). A spare pin lies in front.
const SR = 6, HR = 11, H0 = 4, H1 = 22;     // shaft radius, hub radius, hub from y = H0 to H1 (mm)

function pinProfile(len, r, neckAt, neck) {
  const h = len / 2;
  return [[0, -h], [r - 0.3, -h], [r, -h + 0.3], [r, -neckAt - 0.9], [neck, -neckAt], [r, -neckAt + 0.9],
    [r, neckAt - 0.9], [neck, neckAt], [r, neckAt + 0.9], [r, h - 0.3], [r - 0.3, h], [0, h]];
}

export default {
  alt: 'Render of a shear-pin coupling: a steel gear and its hub on a shaft, with a quarter of the hub and shaft cut away to show the brass cross pin that joins them, narrowed where the hub meets the shaft so that it snaps there if the gear jams; a spare pin lies in front.',
  kind: 'cross-section',
  view: { dir: [0.55, 0.85, 1.2], fill: 0.95 },
  build(K) {
    const { group, at, cyl, lathe, gear, mat } = K;
    const steel = mat.steel(), dark = mat.castIron(), brass = mat.brass();
    const cutSteel = mat.cut(0xc4c8cd), cutDark = mat.cut(0x7d8288);
    // everything along local Y (the shaft axis), the cut-away wedge centred on local +X
    const shaft = group(
      at(cyl(SR, 44, steel), [0, H0 - 22, 0]),
      lathe([[0, H0], [SR, H0], [SR, H1], [0, H1], [0, H0]], steel, { cut: 90, start: 90, cutMat: cutSteel }),
      at(cyl(SR, 18, steel), [0, H1 + 9, 0]),
    );
    const g = at(group(gear(24, 2, 8, dark, { bore: SR })), [0, 0, 0], [90, 0, 0]);
    const hub = lathe([[SR, H0], [HR, H0], [HR, H1 - 0.8], [HR - 0.8, H1], [SR, H1], [SR, H0]], dark, { cut: 90, start: 90, cutMat: cutDark });
    const pin = at(lathe(pinProfile(2 * HR + 2, 2.5, SR, 1.7), brass), [0, (H0 + H1) / 2, 0], [0, 0, 90]);
    const assembly = at(group(shaft, g, hub, pin), [0, 0, 0], [0, 0, 90]);   // local +X (the cut) faces up
    const spare = at(lathe(pinProfile(2 * HR + 2, 2.5, SR, 1.7), brass), [-12, -26 + 2.5, 38], [0, 0, 90]);
    return group(assembly, spare);
  },
};
