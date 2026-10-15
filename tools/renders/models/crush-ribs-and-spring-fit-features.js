// Crush ribs: a 3D-printed plate with two bearing holes, each with four small ribs running down
// the wall; a 608 ball bearing is pressed into one, and a second bearing lies ready by the other.
const R = 11.15;            // hole radius: a little bigger than the 22 mm bearing (a clearance fit)
const RIB = 0.55, W = 0.9; // how far each rib stands proud of the wall, and its half-width

function ribbedHole(cx, cy) {
  const pts = [];
  const n = 720;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    let r = R;
    for (let k = 0; k < 4; k++) {
      let d = Math.abs(a - (Math.PI / 4 + (k * Math.PI) / 2));
      d = Math.min(d, Math.PI * 2 - d) * R;                 // distance along the wall from the rib
      if (d < W) r = Math.min(r, R - RIB * Math.sqrt(1 - (d / W) ** 2));
    }
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}
function bearing(K) {
  const { group, lathe, tube, mat } = K;
  const steel = mat.stainless();
  const outer = lathe([[9.5, -3.5], [10.7, -3.5], [11, -3.2], [11, 3.2], [10.7, 3.5], [9.5, 3.5], [9.5, -3.5]], steel);
  const inner = lathe([[4, -3.2], [4.3, -3.5], [6, -3.5], [6, 3.5], [4.3, 3.5], [4, 3.2], [4, -3.2]], steel);
  const seal = tube(9.6, 5.9, 6.5, mat.rubber(0x202022));
  return group(outer, inner, seal);
}
export default {
  alt: 'Render of crush ribs: a 3D-printed plate with two holes for ball bearings, each hole lined with four narrow ribs running down its wall; a bearing is pressed into one hole and a second bearing lies beside the empty one, ready to push in.',
  view: { dir: [0.15, 1.5, 1.0], fill: 1.08 },
  build(K) {
    const { group, at, extrude, roundRect, mat, THREE } = K;
    const pla = mat.pla(0x2a6b37, 90);
    const shape = new THREE.Shape(roundRect(70, 34, 4).getPoints(8));
    for (const cx of [-17, 17]) shape.holes.push(new THREE.Path(ribbedHole(cx, 0).map(([x, y]) => new THREE.Vector2(x, y))));
    const plate = at(extrude(shape, 8, pla, { bevel: 0.4, curve: 4 }), [0, 4, 0], [-90, 0, 0]);
    const pressed = at(bearing(K), [-17, 4.5, 0]);
    const loose = at(bearing(K), [30, 3.5, 34]);
    return group(plate, pressed, loose);
  },
};
