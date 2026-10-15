// Ortho-planar spring: a flat, 3D-printed one-piece spring lying on the bench: an outer ring with
// three screw holes, a round centre platform, and three thin curved legs joining them. Pushing the
// platform makes all three legs bend alike, so it rises straight up without turning.
function strip(pts, t) {
  const L = [], R = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    L.push([pts[i][0] - (dy / l) * t / 2, pts[i][1] + (dx / l) * t / 2]);
    R.push([pts[i][0] + (dy / l) * t / 2, pts[i][1] - (dx / l) * t / 2]);
  }
  return [...L, ...R.reverse()];
}
const RO = 32, RI = 26.5, RP = 10, T = 2; // ring outside and inside radius, platform radius, thickness
export default {
  alt: 'Render of a 3D-printed ortho-planar spring: one flat plastic piece with an outer ring, a round centre platform and three thin curved legs joining them, lying on a bench.',
  view: { dir: [0.3, 1.0, 0.8], fill: 1.0, light: [-0.5, 1, 0.3] },
  build(K) {
    const { group, at, extrude, circle, mat } = K;
    const m = mat.pla(0xd9661f, 40);
    const parts = [];
    const holes = [{ x: 0, y: 0, r: RI }];
    for (let k = 0; k < 3; k++) { const a = (k * 2 * Math.PI) / 3 + 0.5; holes.push({ x: 29.2 * Math.cos(a), y: 29.2 * Math.sin(a), r: 1.7 }); }
    parts.push(extrude(circle(RO, 160), T, m, { bevel: 0.3, holes, curve: 64 }));
    parts.push(extrude(circle(RP, 80), T, m, { bevel: 0.3, holes: [{ x: 0, y: 0, r: 1.7 }], curve: 32 }));
    for (let k = 0; k < 3; k++) {
      const a0 = (k * 2 * Math.PI) / 3;
      const pts = [];
      for (let i = 0; i <= 60; i++) {
        const t = i / 60, a = a0 + t * (150 * Math.PI) / 180, r = RP - 0.8 + (RI - RP + 1.6) * t;
        pts.push([r * Math.cos(a), r * Math.sin(a)]);
      }
      parts.push(extrude(strip(pts, 2.2), T - 0.1, m, { bevel: 0.25 }));
    }
    return at(group(parts), [0, T / 2, 0], [-90, 0, 0]);
  },
};
