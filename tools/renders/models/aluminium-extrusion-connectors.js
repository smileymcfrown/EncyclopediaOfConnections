// Aluminium-extrusion connectors: a frame corner of two 2020 bars (20 x 20 mm, a T-slot on each
// face) joined by a cast corner bracket screwed into T-nuts in the slots; a loose slide-in T-nut
// and its button-head screw lie by the open end of the bar, ready to slide into the slot.

// The 2020 profile outline (mm, centred): a T-slot (6.2 mm opening, lips 1.8 mm thick, wider
// channel behind) cut into each of the four faces.
function profile() {
  const side = [ // one face, at y = +10, from left to right: [u, v]
    [-3.1, 10], [-3.1, 8.2], [-5.6, 8.2], [-5.6, 7.1], [-2.9, 4.2], [2.9, 4.2], [5.6, 7.1], [5.6, 8.2], [3.1, 8.2], [3.1, 10],
  ];
  const pts = [];
  for (let k = 0; k < 4; k++) {
    const a = (-k * Math.PI) / 2, c = Math.cos(a), s = Math.sin(a);
    const rot = ([u, v]) => [u * c + v * s, -u * s + v * c];
    pts.push(rot([-9.4, 10]), ...side.map(rot), rot([9.4, 10]), rot([10, 9.4]));
  }
  return pts;
}
function bar(K, len, m) {
  const { extrude } = K;
  return extrude(profile(), len, m, { bevel: 0.25, holes: [{ x: 0, y: 0, r: 2.1 }], curve: 24 });
}
// M5 button-head screw, head on top at y = 0, shank downwards
function buttonScrew(K, shank, m) {
  const { group, at, lathe, cyl } = K;
  const head = lathe([[0, 0], [4.75, 0], [4.75, 0.5], [4.4, 1.4], [3.6, 2.2], [2.5, 2.6], [1.6, 2.7], [1.6, 1.0], [0, 1.0]], m);
  return group(head, shank ? at(cyl(2.4, shank, m), [0, -shank / 2, 0]) : null);
}
// slide-in T-nut (10 x 10 mm footprint, 6 mm neck, M5 hole), neck up, sitting on y = 0
function tNut(K, m) {
  const { group, at, extrude } = K;
  const sq = (w, l) => [[-w / 2, -l / 2], [w / 2, -l / 2], [w / 2, l / 2], [-w / 2, l / 2]];
  const base = at(extrude(sq(10.4, 10), 3.2, m, { bevel: 0.3, holes: [{ x: 0, y: 0, r: 2.5 }] }), [0, 1.6, 0], [90, 0, 0]);
  const neck = at(extrude(sq(5.8, 10), 1.9, m, { bevel: 0.2, holes: [{ x: 0, y: 0, r: 2.5 }] }), [0, 4.1, 0], [90, 0, 0]);
  return group(base, neck);
}
export default {
  alt: 'Render of two silver 20 mm aluminium frame bars joined at a right angle by a cast corner bracket with black screws into the T-shaped grooves, with a loose slide-in T-nut and screw lying by the open end of the lower bar, whose T-slots show end-on.',
  view: { dir: [1.35, 0.8, 1.0], fill: 1.12, light: [0.5, 1, 0.9] },
  build(K) {
    const { group, at, extrude, mat } = K;
    const alu = mat.anodised(0xa7adb4), dark = mat.blackOxide(), zinc = mat.zinc();
    const castAlu = mat.paint(0xb9bdc2);
    const lower = at(bar(K, 90, alu), [-10, 10, 0], [0, 90, 0]);             // along X, x -55..55
    const upper = at(bar(K, 55, alu), [-45, 47.5, 0], [90, 0, 0]);           // stands on it at the left end
    // corner bracket in the inside corner: x -35.. -15 on the lower bar's top, y 20..40 up the upper bar
    const L = [[0, 0], [20, 0], [20, 3.2], [3.2, 3.2], [3.2, 20], [0, 20]];
    const tri = [[0, 0], [20, 0], [0, 20]];
    const bracket = group(
      at(extrude(L, 18, castAlu, { bevel: 0.4 }), [0, 0, 0]),
      at(extrude(tri, 2.2, castAlu, { bevel: 0.3 }), [0, 0, 7.9]),
      at(extrude(tri, 2.2, castAlu, { bevel: 0.3 }), [0, 0, -7.9]),
    );
    const placed = at(bracket, [-35, 20, 0]);
    const s1 = at(buttonScrew(K, 0, dark), [-23, 23.2, 0]);
    const s2 = at(buttonScrew(K, 0, dark), [-31.8, 31, 0], [0, 0, -90]);
    // loose slide-in T-nut and screw by the open end, lined up with the front slot
    const nut = at(tNut(K, zinc), [50, 0, 3], [0, 90, 0]);
    const screw = at(buttonScrew(K, 10, dark), [44, 4.75, 22], [90, 0, 25]);
    return group(lower, upper, placed, s1, s2, nut, screw);
  },
};
