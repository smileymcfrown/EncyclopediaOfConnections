// Four-bar linkage: a crank-rocker made the way a maker would, from 3D-printed flat links joined by
// M3 screws, on a plywood base that acts as the fixed fourth bar between two brass pivot posts.
const A = [0, 0], D = [80, 0];              // fixed pivots on the base (x, z)
const crank = 26, coupler = 84, rocker = 58;
const d2r = Math.PI / 180;

function solve(angle) {
  const B = [A[0] + crank * Math.cos(angle * d2r), A[1] - crank * Math.sin(angle * d2r)];
  // C: where the circle round B (coupler) meets the circle round D (rocker), on the far side
  const dx = D[0] - B[0], dz = D[1] - B[1], d = Math.hypot(dx, dz);
  const a = (coupler ** 2 - rocker ** 2 + d * d) / (2 * d), h = Math.sqrt(coupler ** 2 - a * a);
  const mx = B[0] + (a * dx) / d, mz = B[1] + (a * dz) / d;
  const C = [mx + (h * dz) / d, mz - (h * dx) / d];
  return { B, C };
}
export default {
  alt: 'Render of a four-bar linkage made from 3D-printed flat links: a short orange crank and a longer green rocker pivot on brass posts on a plywood base, joined across the top by a long blue coupler, with black screws as the four pivots.',
  view: { dir: [0.3, 0.85, 1.0], fill: 1.1, light: [-0.5, 1, 0.7] },
  build(K) {
    const { group, at, extrude, lathe, box, hex, mat } = K;
    const parts = [];
    const w = 12, t = 3;
    const link = (p, q, y, m) => {
      const L = Math.hypot(q[0] - p[0], q[1] - p[1]), phi = Math.atan2(q[1] - p[1], q[0] - p[0]);
      const out = [];
      for (let i = 0; i <= 24; i++) { const a = -Math.PI / 2 + (i / 24) * Math.PI; out.push([L + (w / 2) * Math.cos(a), (w / 2) * Math.sin(a)]); }
      for (let i = 0; i <= 24; i++) { const a = Math.PI / 2 + (i / 24) * Math.PI; out.push([(w / 2) * Math.cos(a), (w / 2) * Math.sin(a)]); }
      const bar = at(extrude(out, t, m, { bevel: 0.4, holes: [{ x: 0, y: 0, r: 1.7 }, { x: L, y: 0, r: 1.7 }], curve: 24 }), [0, 0, 0], [-90, 0, 0]);
      return at(group(bar), [p[0], y + t / 2, p[1]], [0, (-phi * 180) / Math.PI, 0]);
    };
    const screw = (p, y) => group(
      at(lathe([[0, 0], [2.85, 0], [2.85, 0.4], [2.5, 1.1], [1.8, 1.55], [1.3, 1.65], [1.3, 0.7], [0, 0.7]], mat.blackOxide()), [p[0], y, p[1]]),
    );
    const { B, C } = solve(62);
    // plywood base, with the two brass pivot posts
    parts.push(at(box(130, 9, 90, mat.wood('#c79a64', '#9a6f3e'), 1.2), [44, -4.5, -26]));
    for (const p of [A, D]) parts.push(at(hex(5.5, 6, mat.brass(), 1.6), [p[0], 3, p[1]]));
    // links: crank and rocker on the lower layer, coupler on top
    parts.push(link(A, B, 6, mat.pla(0xd9601a, 30)));
    parts.push(link(D, C, 6, mat.pla(0x2e8040, 30)));
    parts.push(link(B, C, 9, mat.pla(0x1f4f9a, 30)));
    // pivot screws
    parts.push(screw(A, 9), screw(D, 9), screw(B, 12), screw(C, 12));
    return group(parts);
  },
};
