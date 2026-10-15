// Wedge dowel: a wooden side panel standing on edge, with two keyhole-shaped slots milled in its
// face (a wide round entry, then a slot that narrows), and a shelf lying beside it with two ribbed
// dowels already fixed in its edge, lined up with the round entries, ready to push in and slide.
const T = 16, SIDE_L = 90, SIDE_H = 60, YC = T / 2, DEPTH = 10;
const DOWELS = [30, -10];            // z of each dowel (and of each slot's round entry)
function keyhole(ze) {
  // in the side panel's face (z, y): entry circle r 6.2 at (ze, YC), slot running 20 mm towards -z
  const RE = 6.2, pts = [], a0 = Math.atan2(4.2, -Math.sqrt(RE * RE - 4.2 * 4.2));
  for (let i = 0; i <= 36; i++) { const a = a0 - ((2 * a0) * i) / 36; pts.push([ze + RE * Math.cos(a), YC + RE * Math.sin(a)]); }
  pts.push([ze - 20, YC - 3.8]);
  for (let i = 1; i < 12; i++) { const a = -Math.PI / 2 - (Math.PI * i) / 12; pts.push([ze - 20 + 3.8 * Math.cos(a), YC + 3.8 * Math.sin(a)]); }
  pts.push([ze - 20, YC + 3.8]);
  return pts.map(([z, y]) => [-z, y]);                   // shape u = -z (see the rotation below)
}
function uvScale(m, s) { const uv = m.geometry.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * s, uv.getY(i) * s); return m; }
export default {
  alt: 'Render of wedge dowels: a wooden side panel standing on edge with two keyhole-shaped slots in its face, and a shelf lying beside it with two ribbed dowels sticking out of its edge, lined up with the round ends of the slots, ready to be pushed in and slid along until they wedge tight.',
  view: { dir: [-0.55, 0.9, 1.3], fill: 0.95 },
  build(K) {
    const { group, at, box, extrude, lathe, mat } = K;
    const wood = mat.wood('#cfa36d', '#a47643');
    // side panel: a front layer with the slots, and a solid back layer
    const face = [[-SIDE_L / 2, 0], [SIDE_L / 2, 0], [SIDE_L / 2, SIDE_H], [-SIDE_L / 2, SIDE_H]];
    const front = uvScale(extrude(face, DEPTH, wood, { bevel: 0, holes: DOWELS.map(keyhole) }), 1 / 90);
    const side = group(
      at(front, [DEPTH / 2, 0, 0], [0, 90, 0]),
      at(box(T - DEPTH, SIDE_H, SIDE_L, wood, 0.3), [DEPTH + (T - DEPTH) / 2, SIDE_H / 2, 0]),
    );
    // shelf lying flat, its edge 32 mm from the side panel, dowels pointing at the slots
    const shelf = at(box(85, T, 72, wood, 0.6), [-32 - 42.5, T / 2, 10]);
    const prof = [[0, -8], [3.6, -8]];
    for (let x = -8; x < 9; x += 1.4) prof.push([4.05, x + 0.25], [3.6, x + 1.2]);
    prof.push([3.4, 10.4], [2.8, 11], [0, 11]);
    const dowels = DOWELS.map((z) => at(lathe(prof, mat.wood('#e3c79a', '#c9a874')), [-32, YC, z], [0, 0, -90]));
    return group(side, shelf, dowels);
  },
};
