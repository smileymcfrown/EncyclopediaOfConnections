// Snap-lock sheet joint: a laser-cut 3 mm acrylic bridge, two blue side walls and a white top.
// Each wall has a tab cut beside a thin springy finger; the tab and finger pass up through a slot in
// the top, and the barb on the finger's tip has sprung back over the top face, locking it on.
const T = 3, WH = 24, WL = 34, LD = 32, ZW = 13;

function wall(K, m) {
  const { extrude, THREE } = K;
  const arc = [];                                        // round end of the relief cut
  for (let i = 0; i <= 6; i++) { const a = Math.PI + (i / 6) * Math.PI; arc.push([1.5 + 0.5 * Math.cos(a), WH - 10 + 0.5 * Math.sin(a)]); }
  const pts = [[-WL / 2, 0], [WL / 2, 0], [WL / 2, WH], [4, WH], [4, WH + T], [5.6, WH + T], [4, WH + T + 3], [2, WH + T + 3],
    ...arc.reverse(), [1, WH + T + 1], [-6, WH + T + 1], [-6, WH], [-WL / 2, WH]];
  return extrude(pts, T, m, { bevel: 0.15 });
}

export default {
  alt: 'Render of a snap-lock sheet joint: a small laser-cut acrylic bridge, two blue side walls holding a white top; on each wall a tab and a thin springy finger poke up through a slot in the top, and the little barb on the finger hooks over the top face so it cannot lift off.',
  view: { dir: [0.9, 0.85, 1.2], fill: 1.0 },
  build(K) {
    const { group, at, extrude, roundRect, THREE, mat } = K;
    const blue = mat.plastic(0x2c6db8), white = mat.plastic(0xe6e7e8);
    const top = roundRect(WL + 6, LD, 2);
    for (const z of [-ZW, ZW]) {
      top.holes.push(new THREE.Path([[-6.1, z - 1.6], [4.2, z - 1.6], [4.2, z + 1.6], [-6.1, z + 1.6]].map(([x, y]) => new THREE.Vector2(x, y))));
    }
    return group(
      at(wall(K, blue), [0, 0, -ZW]),
      at(wall(K, blue), [0, 0, ZW]),
      at(extrude(top, T, white, { bevel: 0.15 }), [0, WH + T / 2, 0], [-90, 0, 0]),
    );
  },
};
