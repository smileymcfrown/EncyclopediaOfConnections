// Fin-ray gripper: two printed TPU fin-ray fingers on a simple gripper body, closed on a ball. Each
// finger's inner wall wraps round the ball, its back wall bows in after it, and the cross ribs
// between them pass the push across, so the tip curls over the top of the ball.
function strip(K, pts, t) {
  // outline of a thick polyline (width t) through pts [[x, y], ...]
  const L = [], R = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    const nx = -dy / l, ny = dx / l;
    L.push([pts[i][0] + (nx * t) / 2, pts[i][1] + (ny * t) / 2]);
    R.push([pts[i][0] - (nx * t) / 2, pts[i][1] - (ny * t) / 2]);
  }
  return [...L, ...R.reverse()];
}
function curve(K, pts, n) {
  const c = new K.THREE.SplineCurve(pts.map(([x, y]) => new K.THREE.Vector2(x, y)));
  return c.getSpacedPoints(n).map((v) => [v.x, v.y]);
}
const BALL = 22, BY = 52, FW = 20; // ball radius and centre height above the finger roots; finger width
function finger(K, m) {
  const { group, extrude } = K;
  const rc = BALL + 1;
  const pol = (deg) => [rc * Math.cos((deg * Math.PI) / 180), BY + rc * Math.sin((deg * Math.PI) / 180)];
  const inner = curve(K, [[14, 0], [15, 14], [16.4, 28], pol(-40), pol(-20), pol(0), pol(20), pol(40), pol(52)], 60);
  const tip = inner[inner.length - 1];
  const outer = curve(K, [[44, 0], [43.5, 18], [41, 34], [36, 48], [29.5, 60], [21, 69.5], [tip[0] + 0.6, tip[1] + 1.2]], 60);
  const parts = [extrude(strip(K, inner, 1.8), FW, m, { bevel: 0.4 }), extrude(strip(K, outer, 1.8), FW, m, { bevel: 0.4 })];
  for (const f of [0.14, 0.29, 0.44, 0.58, 0.72]) {
    const a = inner[Math.round(f * 60)], b = outer[Math.round((f - 0.04) * 60)];
    parts.push(extrude(strip(K, [a, b], 1.3), FW - 1, m, { bevel: 0.3 }));
  }
  // the stiff foot that the walls grow out of
  parts.push(extrude([[12.5, -6], [46, -6], [46, 1], [12.5, 1]], FW, m, { bevel: 0.4 }));
  return group(parts);
}
export default {
  alt: 'Render of a fin-ray gripper holding a ball: two soft, printed, triangular fingers with a ladder of cross ribs inside stand on a gripper body, and each has curled its tip in around the ball instead of bending away from it.',
  view: { dir: [0.45, 0.35, 1.2], fill: 0.98 },
  build(K) {
    const { group, at, box, sphere, mat } = K;
    const tpu = mat.pla(0x2b77c9, 90), body = mat.pla(0x2e3134, 60);
    const f1 = at(finger(K, tpu), [0, 0, 0]);
    const f2 = at(finger(K, tpu), [0, 0, 0], [0, 180, 0]);
    const ball = at(sphere(BALL, mat.plastic(0xd2452c)), [0, BY, 0]);
    // gripper body: a base block with two jaw blocks the fingers are screwed to
    const base = at(box(120, 12, 34, body, 2), [0, -18, 0]);
    const jaws = [-1, 1].map((s) => at(box(38, 8, 28, body, 1.5), [s * 29, -10, 0]));
    const screws = [];
    for (const s of [-1, 1]) for (const dx of [-8, 8]) screws.push(at(K.cyl(2.6, 1.6, mat.blackOxide()), [s * 29 + dx, -10, 14.6], [90, 0, 0]));
    return group(f1, f2, ball, base, jaws, screws);
  },
};
