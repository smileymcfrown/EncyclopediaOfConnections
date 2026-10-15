// Cross-halving slot joint: two laser-cut 3 mm plywood pieces slotted together into a flush cross
// (one slotted from the top, one from the bottom), with a third piece lying flat beside them to
// show its slot.
const T = 3, H = 40, L = 110, SLOT = 3.1;

function plywood(K) {
  const face = K.mat.wood('#dcc095', '#b8935e');
  const edge = K.mat.wood('#6b4a2c', '#4a321d');   // laser-burnt cut edge
  return [face, edge];
}
// a piece L x H, slot of width SLOT and depth H/2 at x = 0, from the top (fromTop) or the bottom
function piece(K, fromTop, [face, edge]) {
  const { extrude } = K;
  const s = SLOT / 2, d = H / 2;
  const pts = fromTop
    ? [[-L / 2, 0], [L / 2, 0], [L / 2, H], [s, H], [s, H - d], [-s, H - d], [-s, H], [-L / 2, H]]
    : [[-L / 2, 0], [-s, 0], [-s, d], [s, d], [s, 0], [L / 2, 0], [L / 2, H], [-L / 2, H]];
  const m = extrude(pts, T, face, { bevel: 0 });
  // scale the texture to the piece and give the cut edges their burnt colour
  const uv = m.geometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 140, uv.getY(i) / 140);
  m.material = [face, edge];
  return m;
}

export default {
  alt: 'Render of a cross-halving slot joint: two laser-cut plywood strips, one slotted halfway down from the top and one halfway up from the bottom, pushed into each other to stand as a flush cross; a third strip lies flat beside them showing its slot.',
  view: { dir: [0.9, 0.75, 1.2], fill: 0.95 },
  build(K) {
    const { group, at } = K;
    const ply = plywood(K);
    const a = piece(K, true, ply);
    const b = at(piece(K, false, ply), [0, 0, 0], [0, 90, 0]);
    const loose = at(piece(K, true, ply), [30, T / 2, 80], [-90, 0, 15]);
    return group(a, b, loose);
  },
};
