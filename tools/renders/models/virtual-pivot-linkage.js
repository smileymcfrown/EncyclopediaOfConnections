// Virtual-pivot linkage: a four-bar linkage of 3D-printed links on an aluminium base bar, the two
// side links angled towards each other so the T-shaped coupler swings about an empty point out
// beyond its stem (where the lines through the side links cross). Shown part-way through a swing.
const A = [-30, 0], B = [30, 0];               // fixed pivots on the base bar (plan: x, z)
const L = Math.hypot(15, 50), CD = 30;         // side link length, coupler pivot spacing
const SWING = 9;                                // degrees the left link is turned from the middle position

function solve() {
  const a0 = Math.atan2(-50, 15) + (SWING * Math.PI) / 180;
  const C = [A[0] + L * Math.cos(a0), A[1] + L * Math.sin(a0)];
  // D: distance L from B and CD from C (the solution on the far side)
  const dx = B[0] - C[0], dz = B[1] - C[1], d = Math.hypot(dx, dz);
  const a = (CD * CD - L * L + d * d) / (2 * d), h = Math.sqrt(Math.max(CD * CD - a * a, 0));
  const mx = C[0] + (a * dx) / d, mz = C[1] + (a * dz) / d;
  const D = [mx + (h * dz) / d, mz - (h * dx) / d];
  return { C, D };
}
// a flat bar (stadium outline) from p to q in plan, width w, thickness t, with pin holes at both ends
function link(K, p, q, w, t, m, y, holes = true) {
  const { extrude, at } = K;
  const len = Math.hypot(q[0] - p[0], q[1] - p[1]), ang = Math.atan2(q[1] - p[1], q[0] - p[0]);
  const out = [];
  for (let i = 0; i <= 16; i++) { const a = Math.PI / 2 + (i / 16) * Math.PI; out.push([(w / 2) * Math.cos(a), (w / 2) * Math.sin(a)]); }
  for (let i = 0; i <= 16; i++) { const a = -Math.PI / 2 + (i / 16) * Math.PI; out.push([len + (w / 2) * Math.cos(a), (w / 2) * Math.sin(a)]); }
  const bar = extrude(out, t, m, { bevel: 0.4, holes: holes ? [{ x: 0, y: 0, r: 1.6 }, { x: len, y: 0, r: 1.6 }] : [] });
  // lay flat: outline x along the bar, outline y across it; then turn to the bar's direction
  return at(K.group(at(bar, [0, 0, 0], [90, 0, 0])), [p[0], y, p[1]], [0, (-ang * 180) / Math.PI, 0]);
}
function screw(K, x, z, y, len) {
  const { group, at, cyl, mat } = K;
  const m = mat.blackOxide();
  return group(at(cyl(2.75, 3, m), [x, y + 1.5, z]), at(cyl(1.5, len, m), [x, y - len / 2, z]));
}
export default {
  alt: 'Render of a virtual-pivot linkage: on an aluminium base bar, two 3D-printed side links angled towards each other carry a T-shaped printed coupler, joined by small screws at four pivots, so the coupler turns about an empty point beyond the end of its stem where the lines through the two side links would cross.',
  view: { dir: [0.25, 1.5, 1.0], fill: 1.02 },
  build(K) {
    const { group, at, box, mat } = K;
    const { C, D } = solve();
    const orange = mat.pla(0xb8460f, 40), blue = mat.pla(0x1d4f80, 40);
    const base = at(box(96, 10, 22, mat.anodised(0x9aa0a8), 1.5), [0, 5, 0]);
    const y1 = 10 + 2.5, y2 = y1 + 5;              // link layer and coupler layer (centres)
    const links = [link(K, A, C, 10, 5, orange, y1), link(K, B, D, 10, 5, orange, y1)];
    // the coupler: a bar from C to D and a stem from its middle, pointing away from the base
    const M = [(C[0] + D[0]) / 2, (C[1] + D[1]) / 2];
    const nx = -(D[1] - C[1]) / CD, nz = (D[0] - C[0]) / CD;      // unit normal to CD
    const s = nz < 0 ? 1 : -1;                                      // the side away from the base
    const tip = [M[0] + s * nx * 34, M[1] + s * nz * 34];
    const coupler = [link(K, C, D, 12, 5, blue, y2), link(K, M, tip, 10, 4.6, blue, y2 - 0.1, false)];
    const screws = [screw(K, A[0], A[1], y1 + 2.5, 12), screw(K, B[0], B[1], y1 + 2.5, 12),
      screw(K, C[0], C[1], y2 + 2.5, 10), screw(K, D[0], D[1], y2 + 2.5, 10)];
    return group(base, ...links, ...coupler, ...screws);
  },
};
