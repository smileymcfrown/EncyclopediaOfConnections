// Torque-limiting gear with flexing spring arms: a one-piece printed gear whose rim is joined to
// the middle only by three thin curved arms; their tips press on a steel shaft, gripping it by
// spring force so the gear drives it but slips round it if the shaft jams.
export default {
  alt: 'Render of a torque-limiting gear: a one-piece 3D-printed gear lying flat with an open middle, where three thin curved spring arms reach in from the rim and press their tips against a steel shaft, gripping it by springiness alone.',
  view: { dir: [0.35, 1.0, 0.75], fill: 1.05 },
  build(K) {
    const { group, at, gear, extrude, cyl, mat } = K;
    const pla = mat.pla(0x7a4bb0, 30), T = 7, parts = [];
    const ring = gear(36, 1.5, T, pla, { bore: 20 });
    parts.push(at(ring, [0, T / 2, 0], [-90, 0, 0]));
    // three spiral arms: centre line from r = 21 (inside the rim) to the tip next to the shaft
    const rs = 4, w = 2.3;
    for (let k = 0; k < 3; k++) {
      const p0 = (k * 2 * Math.PI) / 3, n = 40, cl = [];
      for (let i = 0; i <= n; i++) {
        const u = i / n, r = 21 - (21 - (rs + 1.6)) * u, a = p0 + (150 * Math.PI / 180) * u;
        cl.push([r * Math.cos(a), r * Math.sin(a)]);
      }
      const L = [], Rr = [];
      for (let i = 0; i <= n; i++) {
        const [x0, y0] = cl[Math.max(0, i - 1)], [x1, y1] = cl[Math.min(n, i + 1)];
        const dx = x1 - x0, dy = y1 - y0, l = Math.hypot(dx, dy), nx = -dy / l, ny = dx / l;
        const ww = w * (1 + 0.35 * (1 - i / n));                 // a little thicker at the root
        L.push([cl[i][0] + (nx * ww) / 2, cl[i][1] + (ny * ww) / 2]);
        Rr.push([cl[i][0] - (nx * ww) / 2, cl[i][1] - (ny * ww) / 2]);
      }
      // a round pad at the tip
      const [tx, ty] = cl[n], pad = [];
      for (let j = 0; j < 16; j++) { const a = (j / 16) * 2 * Math.PI; pad.push([tx + 1.7 * Math.cos(a), ty + 1.7 * Math.sin(a)]); }
      parts.push(at(extrude([...L, ...Rr.reverse()], T, pla, { bevel: 0.25 }), [0, T / 2, 0], [-90, 0, 0]));
      parts.push(at(extrude(pad, T, pla, { bevel: 0.25 }), [0, T / 2, 0], [-90, 0, 0]));
    }
    // the steel shaft through the middle
    parts.push(at(cyl(rs, 26, mat.stainless()), [0, 13, 0]));
    return group(...parts);
  },
};
