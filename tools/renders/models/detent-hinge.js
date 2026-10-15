// Detent hinge: a black plastic click-stop hinge held open at 90 degrees, cut in half across its
// knuckle. The cut shows the notched disc on the moving leaf, and a spring in the fixed body
// pushing a steel ball into the notch for 90 degrees; other notches give 0 and 120 degrees.
const AX = 14;                         // height of the hinge axis (mm); the axis runs along X
const d2r = Math.PI / 180;

const arc = (cz, cy, r, a0, a1, step = 6) => {
  const pts = [], n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / step));
  for (let i = 0; i <= n; i++) { const a = (a0 + ((a1 - a0) * i) / n) * d2r; pts.push([cz + r * Math.cos(a), cy + r * Math.sin(a)]); }
  return pts;
};
// the notched disc, in world angles with the moving leaf pointing up: notches for 0, 90 and 120 degrees
function disc() {
  const notches = [-180, -90, -60], w = 12;
  const pts = [];
  for (let a = 0; a < 360; a += 2) {
    let r = 7;
    for (const n of notches) {
      let d = Math.abs((((a - n) % 360) + 540) % 360 - 180);
      if (d < w) r = Math.min(r, 7.3 - 1.5 * Math.sqrt(1 - (d / w) ** 2) - 0.0);
    }
    pts.push([r * Math.cos(a * d2r), AX + r * Math.sin(a * d2r)]);
  }
  return pts;
}
export default {
  alt: 'Render of a black plastic detent hinge held open at a right angle, cut in half across its knuckle to show a spring in the fixed leaf pushing a steel ball into one of three notches in the moving leaf\'s round knuckle.',
  kind: 'cross-section',
  view: { dir: [1.35, 0.55, 0.75], fill: 0.94, light: [0.7, 1, 0.6] },
  build(K) {
    const { group, at, extrude, mesh, THREE, sphere, spring, cyl, mat } = K;
    const black = mat.plastic(0x26272b), cutBlack = mat.cut(0x5c6066), cutMove = mat.cut(0x9a9fa6), steel = mat.steel(), cutSteel = mat.cut(0xb9bdc3);
    const parts = [];
    // a part with profile `outline` (in z, y) running along X from x0 to x1; cut face at x1 = 0
    const piece = (outline, x0, x1, m, cm, holes = []) => {
      const g = group(at(extrude(outline, x1 - x0, m, { bevel: 0.25, holes, curve: 24 }), [(x0 + x1) / 2, 0, 0], [0, -90, 0]));
      if (x1 === 0 && cm) {
        const sh = new THREE.Shape(outline.map(([a, b]) => new THREE.Vector2(a, b)));
        for (const h of holes) { const p = new THREE.Path(); p.absarc(h.x, h.y, h.r, 0, Math.PI * 2, true); sh.holes.push(p); }
        g.add(at(mesh(new THREE.ShapeGeometry(sh, 24), cm), [0.03, 0, 0], [0, -90, 0]));
      }
      return g;
    };
    const pin = [{ x: 0, y: AX, r: 2 }];
    // fixed leaf: plate lying on the ground, body under the knuckle
    parts.push(piece([[-36, 0], [-7, 0], [-7, 4], [-36, 4]], -22, 0, black, cutBlack));
    const outer = [[-8, 0], [8, 0], [8, AX], ...arc(0, AX, 8, 0, 180, 6).slice(1, -1), [-8, AX]];
    parts.push(piece(outer, -22, -8.3, black, null, pin));
    const zb = 1.6, yb = AX - Math.sqrt(7.25 ** 2 - zb ** 2);
    const cradle = [[-8, 0], [8, 0], [8, AX], [7.25, AX], ...arc(0, AX, 7.25, 0, -90 + 12.7, 4).slice(1), [zb, yb], [zb, 1.2], [-zb, 1.2], [-zb, yb],
      ...arc(0, AX, 7.25, -90 - 12.7, -180, 4).slice(0, -1), [-7.25, AX], [-8, AX]];
    parts.push(piece(cradle, -8.3, 0, black, cutBlack));
    // moving leaf, standing up at 90 degrees: notched disc, neck and plate
    parts.push(piece(disc(), -8, 0, black, cutMove, pin));
    parts.push(piece([[-2, AX + 5], [2, AX + 5], [2, AX + 10], [-2, AX + 10]], -8, 0, black, cutMove));
    parts.push(piece([[-2, AX + 9.5], [2, AX + 9.5], [2, AX + 40], [-2, AX + 40]], -22, 0, black, cutMove));
    // hinge pin, ball and spring
    parts.push(piece(arc(0, AX, 2, 0, 360, 10).slice(0, -1), -22, 0, steel, cutSteel));
    parts.push(at(sphere(1.5, mat.chrome()), [0, AX - 7.3, 0]));
    parts.push(at(spring(1.15, 0.28, 5, AX - 7.3 - 1.5 - 1.2, steel), [0, 1.2, 0]));
    // countersunk screws in both leaves
    for (const x of [-11]) {
      parts.push(at(cyl(2.9, 0.6, mat.zinc(), { r2: 2.9 }), [x, 4.1, -24]));
      parts.push(at(cyl(2.9, 0.6, mat.zinc()), [x, AX + 28, 2.1], [90, 0, 0]));
    }
    return group(parts);
  },
};
