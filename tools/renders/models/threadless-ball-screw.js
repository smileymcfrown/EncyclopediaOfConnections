// Threadless ball screw (rolling-ring drive), RepRap style: a smooth 8 mm steel rod turned by a
// stepper motor through a coupler, and a 3D-printed nut of two plates holding three 608 ball
// bearings on bolts round the rod, each pressed on the rod and tilted a few degrees so it rolls
// round it in a spiral and walks the nut along.
const AX = 21, RB = 11, RROD = 4, TILT = (7 * Math.PI) / 180, NX = 14; // axis height, bearing and rod radii, tilt, nut position
const ANG = [90, 210, 330].map((d) => (d * Math.PI) / 180);             // bearing positions round the rod

function hull(pts) {   // convex hull (monotone chain) of [x, y] points, counter-clockwise
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
export default {
  alt: 'Render of a threadless ball screw: a smooth steel rod turned by a stepper motor passes through a 3D-printed nut whose two orange plates hold three ball bearings on bolts, pressed against the rod and tilted slightly so they roll round it in a spiral and drive the nut along.',
  view: { dir: [0.4, 0.6, 1.3], fill: 1.2, light: [-0.3, 1, 0.8] },
  build(K) {
    const { group, at, cyl, box, lathe, extrude, hex, mat, THREE } = K;
    const parts = [];
    // smooth rod, coupler, motor, end block
    parts.push(at(cyl(RROD, 104, mat.chrome()), [8, AX, 0], [0, 0, 90]));
    parts.push(at(cyl(9.5, 25, mat.aluminium()), [-54, AX, 0], [0, 0, 90]));
    parts.push(at(box(8, 42, 42, mat.aluminium(), 2), [-72, AX, 0]));
    parts.push(at(box(26, 41, 41, mat.blackOxide(), 1), [-89, AX, 0]));
    parts.push(at(box(7, 42, 42, mat.aluminium(), 2), [-105.5, AX, 0]));
    parts.push(at(cyl(11, 2, mat.aluminium()), [-67, AX, 0], [0, 0, 90]));
    parts.push(at(box(14, AX + 12, 32, mat.pla(0x55595f, 50), 1.5), [61, (AX + 12) / 2, 0]));
    // the nut: two printed plates joined by three bolts, each carrying a tilted 608 bearing
    const orange = mat.pla(0xd9601a, 30);
    const bolts = ANG.map((a) => [-15 * Math.cos(a), 15 * Math.sin(a)]);       // plate (shape) coords: (-z, y)
    const outline = hull(bolts.flatMap(([x, y]) => Array.from({ length: 24 }, (_, i) => [x + 8 * Math.cos((i / 24) * 2 * Math.PI), y + 8 * Math.sin((i / 24) * 2 * Math.PI)])));
    for (const dx of [-8.2, 8.2]) {
      parts.push(at(extrude(outline, 5, orange, { bevel: 0.8, holes: [{ x: 0, y: 0, r: 6.5 }], curve: 24 }), [NX + dx, AX, 0], [0, 90, 0]));
    }
    const bearing = group(
      lathe([[9.4, -3.5], [RB, -3.5], [RB, 3.5], [9.4, 3.5], [9.4, -3.5]], mat.steel()),
      lathe([[4, -3.5], [5.8, -3.5], [5.8, 3.5], [4, 3.5], [4, -3.5]], mat.steel()),
      lathe([[5.8, -3.2], [9.4, -3.2], [9.4, 3.2], [5.8, 3.2], [5.8, -3.2]], mat.rubber(0x1b1b1d)),
    );
    for (const a of ANG) {
      const u = new THREE.Vector3(0, Math.sin(a), Math.cos(a));              // from the rod out to the bearing
      const dir = new THREE.Vector3(Math.cos(TILT), Math.sin(TILT) * u.z, -Math.sin(TILT) * u.y);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      const centre = new THREE.Vector3(NX, AX, 0).addScaledVector(u, RROD + RB);
      const b = bearing.clone(); b.position.copy(centre); b.quaternion.copy(q); parts.push(b);
      const bolt = group(at(cyl(3.9, 27, mat.zinc()), [0, 0, 0]), at(hex(13, 5.3, mat.zinc()), [0, 13.4, 0]), at(hex(13, 6.5, mat.zinc(), 4), [0, -13.9, 0]));
      bolt.position.copy(centre); bolt.quaternion.copy(q); parts.push(bolt);
    }
    return group(parts);
  },
};
