// T-slot joint: two laser-cut 6 mm plywood panels joined at a corner. The front panel's tabs poke up
// through slots in the top panel; on its face you can see the two T-shaped cut-outs, each with a
// square M3 nut trapped in the crossbar. The left joint is screwed up; the right one has its nut in
// place and its screw lying on top, ready to go in.
const T = 6, W = 90, H = 44, D = 50;
const SX = 24, STEM = 1.6, POCK = [34, 36.5], PW = 2.85, SLOT_END = 30;
const TABS = [[33, 43], [-5, 5], [-43, -33]]; // T-slot geometry (mm)
function panelA() {
  const top = [];
  const tab = (a, b) => top.push([b, H], [b, H + T], [a, H + T], [a, H]);
  const tslot = (x) => top.push([x + STEM, H], [x + STEM, POCK[1]], [x + PW, POCK[1]], [x + PW, POCK[0]], [x + STEM, POCK[0]],
    [x + STEM, SLOT_END], [x - STEM, SLOT_END], [x - STEM, POCK[0]], [x - PW, POCK[0]], [x - PW, POCK[1]], [x - STEM, POCK[1]], [x - STEM, H]);
  tab(...TABS[0]); tslot(SX); tab(...TABS[1]); tslot(-SX); tab(...TABS[2]);
  return [[-W / 2, 0], [W / 2, 0], [W / 2, H], ...top, [-W / 2, H]];
}
export default {
  alt: 'Render of a T-slot joint in laser-cut plywood: a top panel rests on a front panel whose tabs poke through it, and two T-shaped cut-outs in the front panel each hold a square nut; one screw is done up through the top into its nut, and the other lies beside its hole, ready to go in.',
  view: { dir: [0.5, 0.6, 1.2], fill: 1.1 },
  build(K) {
    const { group, at, extrude, box, cyl, threaded, hex, mat } = K;
    const ply = mat.wood('#c99d68', '#93683c'), ply2 = mat.wood('#c4975f', '#8d6337');
    for (const m of [ply, ply2]) m.map.repeat.set(1 / 90, 1 / 90); // extruded parts have UVs in mm
    const steel = mat.blackOxide(), zinc = mat.zinc();
    const parts = [];
    const zA = D / 2 - T / 2;
    // front panel A and a plain back panel, standing; top panel B across them
    parts.push(at(extrude(panelA(), T, ply, { bevel: 0.2 }), [0, 0, zA]));
    parts.push(at(extrude(panelA(), T, ply2, { bevel: 0.2 }), [0, 0, -zA]));
    const holes = [];
    for (const z of [zA, -zA]) {
      for (const [a, b] of TABS) holes.push([[a - 0.1, -z - T / 2 - 0.1], [b + 0.1, -z - T / 2 - 0.1], [b + 0.1, -z + T / 2 + 0.1], [a - 0.1, -z + T / 2 + 0.1]]);
      for (const x of [SX, -SX]) holes.push({ x, y: -z, r: 1.7 });
    }
    parts.push(at(extrude([[-W / 2, -D / 2], [W / 2, -D / 2], [W / 2, D / 2], [-W / 2, D / 2]], T, ply2, { bevel: 0.2, holes }), [0, H + T / 2, 0], [-90, 0, 0]));
    // square nuts in both front pockets (and the back ones)
    for (const z of [zA, -zA]) for (const x of [SX, -SX]) parts.push(at(box(5.5, 1.8, 5.5, zinc, 0.3), [x, (POCK[0] + POCK[1]) / 2, z]));
    // left joint: socket-head M3 x 20 screw done up
    const screw = (x, z) => group(at(threaded(1.5, 0.5, 20, steel), [x, H + T - 20, z]), at(cyl(2.75, 3, steel), [x, H + T + 1.5, z]),
      at(hex(2.5, 1.2, mat.rubber(0x0c0c0d)), [x, H + T + 2.7, z]));
    parts.push(screw(-SX, zA), screw(-SX, -zA), screw(SX, -zA));
    // right joint: its screw lying on the top panel, beside the hole
    const loose = group(at(threaded(1.5, 0.5, 20, steel), [0, 0, 0]), at(cyl(2.75, 3, steel), [0, 21.5, 0]));
    parts.push(at(loose, [SX + 16, H + T + 2.75, 6], [0, 25, 90]));
    return group(parts);
  },
};
