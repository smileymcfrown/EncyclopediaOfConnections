// Lever-cam panel connector (Clamex P-14 type): two wooden panels joined edge to edge, with the top
// half of the wood cut away round the joint to show the two lens-shaped plastic halves sitting in
// their curved slots, and the zinc lever swung across the joint, hooking the halves together.
// Slot: cut by a 100.4 mm disc, 14 mm deep, 7 mm thick, centred in a 19 mm panel.
const T = 19, MID = T / 2, SLOT_LO = MID - 3.5, R = 50.2, DEPTH = 14, L = 124, W = 52;
const RC = R - DEPTH, HALF = Math.sqrt(R * R - RC * RC);   // cutter centre offset, half chord
const WIN_X = 46, WIN_Y = 26;                             // cut-away window, either side of the joint
function arc(inset = 0) {
  // the slot curve in panel A (y < 0), from (+HALF, 0) round to (-HALF, 0)
  const pts = [], a0 = Math.atan2(-RC, HALF), a1 = Math.atan2(-RC, -HALF);
  for (let i = 0; i <= 40; i++) { const a = a0 + ((a1 - a0) * i) / 40; pts.push([(R - inset) * Math.cos(a), RC + (R - inset) * Math.sin(a)]); }
  return pts;
}
function uvScale(m, s) { const uv = m.geometry.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * s, uv.getY(i) * s); return m; }
export default {
  alt: 'Render of a lever-cam panel connector: two wooden panels joined edge to edge, cut away round the joint to show the two lens-shaped plastic connector halves set in curved slots in each edge, and the metal lever swung across the joint, hooking them together.',
  kind: 'cross-section',
  view: { dir: [0.35, 1.5, 1.0], fill: 0.98, target: [0, -3, 0] },
  build(K) {
    const { group, at, box, extrude, hex, mat } = K;
    const wood = mat.wood('#c79d6b', '#9c7042'), cutWood = mat.wood('#a97c4b', '#8a5f33'), body = mat.plastic(0x3a3d42), zinc = mat.zinc();
    const parts = [];
    for (const s of [1, -1]) {                 // s = 1: panel A (front); s = -1: panel B (behind)
      const g = group();
      const flip = (pts) => pts.map(([x, y]) => [x, s * y]);
      // bottom layer, solid
      g.add(at(box(L, SLOT_LO, W, wood, 0.6), [0, SLOT_LO / 2, s * W / 2]));
      // middle layer, with the curved slot
      const mid = flip([[-L / 2, -W], [L / 2, -W], [L / 2, 0], ...arc(), [-L / 2, 0]]);
      g.add(uvScale(at(extrude(s > 0 ? mid : mid.reverse(), MID - SLOT_LO, [cutWood, wood], { bevel: 0 }), [0, (SLOT_LO + MID) / 2, 0], [-90, 0, 0]), 1 / 120));
      // top layer, with the cut-away window
      const top = flip([[-L / 2, -W], [L / 2, -W], [L / 2, 0], [WIN_X, 0], [WIN_X, -WIN_Y], [-WIN_X, -WIN_Y], [-WIN_X, 0], [-L / 2, 0]]);
      g.add(uvScale(at(extrude(s > 0 ? top : top.reverse(), T - MID, wood, { bevel: 0 }), [0, (MID + T) / 2, 0], [-90, 0, 0]), 1 / 120));
      // connector half: the slot shape, lower half only (the top half is cut away with the wood)
      const lens = flip([...arc(0.2), [HALF - 0.4, -0.15]]);
      g.add(at(extrude(s > 0 ? lens : lens.reverse(), MID - SLOT_LO, body, { bevel: 0.3 }), [0, (SLOT_LO + MID) / 2, 0], [-90, 0, 0]));
      parts.push(at(g, [0, 0, s * 0.3]));                    // a hairline gap shows the joint
    }
    // positioning pins across the joint, either side of the lever
    for (const x of [-21, 21]) parts.push(at(K.cyl(1.6, 9, mat.plastic(0x6c7077)), [x, MID - 1.2, 0], [90, 0, 0]));
    // the lever: pivots in half A, its hooked end swung across the joint into half B
    const lever = [[-6, -11], [6, -11], [6, 3], [9, 5.5], [9, 9.5], [-5, 9.5], [-6, 8]].map(([x, y]) => [x, -y]);
    parts.push(at(extrude(lever.reverse(), 3, zinc, { bevel: 0.4 }), [4, MID - 1.3, 0], [-90, 0, 0]));
    parts.push(at(hex(3, 0.6, mat.rubber(0x111111)), [4, MID + 0.05, 5.5]));     // hex socket for the Allen key
    return group(parts);
  },
};
