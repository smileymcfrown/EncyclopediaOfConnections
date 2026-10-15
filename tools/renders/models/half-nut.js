// Half nut: a lead screw held in two end blocks, with the two bronze nut halves pulled apart on
// their guide rods, so the half-threads inside them are clear of the screw and the nut could slide
// along it; pushing them together again drops their threads back into the screw's groove.
const AX = 26, OPEN = 5, LEN = 30, P = 3; // screw axis height, how far each half has moved out, nut length, pitch
function halfNut(K, m, up) {
  const { group, at, lathe, box } = K;
  // ring with internal thread ridges (radius, position along the axis), half of it cut away
  const prof = [[6.3, -LEN / 2], [12, -LEN / 2], [12, LEN / 2], [6.3, LEN / 2]];
  for (let y = LEN / 2; y > -LEN / 2 + 0.01; y -= P) prof.push([6.3, y - 0.5], [5.0, y - 1.1], [5.0, y - 1.9], [6.3, y - 2.5]);
  prof.push([6.3, -LEN / 2]);
  const ring = lathe(prof, m, { cut: 180, start: up ? -90 : 90, cutMat: m });
  const flange = at(box(5, LEN - 2, 52, m, 0.8), [up ? 2.5 : -2.5, 0, 0]);
  return group(at(group(ring, flange), [0, 0, 0], [0, 0, 90])); // axis along X; `up` half on top
}
export default {
  alt: 'Render of a half nut opened on a lead screw: a steel threaded rod runs between two end blocks, and the two bronze halves of the nut have slid apart on their guide rods so their half-threads no longer touch the screw.',
  view: { dir: [0.45, 0.2, 1], fill: 1.25, target: [-4, 0, 0] },
  build(K) {
    const { group, at, box, cyl, threaded, mat } = K;
    const steel = mat.steel(), bronze = mat.brass(), alu = mat.aluminium();
    const parts = [];
    parts.push(at(box(130, 6, 64, alu, 1), [0, 3, 0]));
    // lead screw between two end blocks, with a small handwheel
    parts.push(at(threaded(6, P, 116, steel), [-58, AX, 0], [0, 0, -90]));
    for (const x of [-52, 52]) parts.push(at(box(12, AX + 10, 30, alu, 1.2), [x, 6 + (AX + 4) / 2, 0]));
    parts.push(at(cyl(4.9, 14, steel), [63, AX, 0], [0, 0, 90]));
    parts.push(at(cyl(16, 6, mat.blackOxide()), [69, AX, 0], [0, 0, 90]));
    parts.push(at(cyl(3, 12, mat.plastic(0x1d1d1f)), [78, AX + 10, 0], [0, 0, 90]));
    // the two nut halves, opened apart on two upright guide rods
    parts.push(at(halfNut(K, bronze, true), [0, AX + OPEN, 0]));
    parts.push(at(halfNut(K, bronze, false), [0, AX - OPEN, 0]));
    for (const z of [-20, 20]) parts.push(at(cyl(2.5, 48, steel), [0, 6 + 24, z]));
    return group(parts);
  },
};
