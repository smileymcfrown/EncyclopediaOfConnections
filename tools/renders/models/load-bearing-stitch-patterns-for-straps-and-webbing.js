// Load-bearing stitch patterns: a 25 mm nylon webbing strap passed round the straight bar of a
// steel D-ring, folded back on itself and sewn down with a box-X stitch block; a second strap
// beside it is sewn with three zigzag bar tacks.
const W = 25, TH = 1.6;                          // webbing width and thickness (mm)

// side profile (x along the strap, y up) of a strap folded round a bar: lower layer, the fold,
// the upper layer sloping down to lie flat on the lower one, ending at x = tail
function foldProfile(len, tail, rBar, yBar) {
  const ri = rBar + 0.15, ro = ri + TH, out = [];
  out.push([len, 0], [8, 0]);
  for (let a = -90; a >= -270; a -= 10) {        // outer face round the bar
    const t = (a * Math.PI) / 180; out.push([ro * Math.cos(t), yBar + ro * Math.sin(t)]);
  }
  out.push([8, 2 * TH + 0.4], [16, 2 * TH], [tail, 2 * TH], [tail, TH], [16, TH]);
  out.push([8, TH + 0.4]);
  for (let a = -270; a <= -90; a += 10) {        // inner face round the bar
    const t = (a * Math.PI) / 180; out.push([ri * Math.cos(t), yBar + ri * Math.sin(t)]);
  }
  out.push([8, TH], [len, TH]);
  return out;
}
export default {
  alt: 'Render of two nylon webbing straps sewn round steel D-rings: each strap passes round the ring, folds back on itself and is sewn down, one with a box-X stitch (a rectangle with an X through it) and the other with three zigzag bar tacks.',
  view: { dir: [0.35, 1.25, 0.9], fill: 1.08 },
  build(K) {
    const { group, at, extrude, wire, mesh, mat, THREE } = K;
    // ribbed webbing: fine ribs across the strap, a twill-like texture along it
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'); g.fillStyle = '#25324a'; g.fillRect(0, 0, 64, 64);
    g.fillStyle = 'rgba(255,255,255,0.10)'; for (let i = 0; i < 64; i += 8) g.fillRect(i, 0, 3, 64);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let i = 0; i < 64; i += 8) g.fillRect(i + 5, 0, 1, 64);
    g.fillStyle = 'rgba(0,0,0,0.12)'; for (let j = 0; j < 64; j += 4) g.fillRect(0, j, 64, 1);
    const map = new THREE.CanvasTexture(c); map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.set(0.13, 0.13);
    map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
    const web = new THREE.MeshPhysicalMaterial({ map, roughness: 0.75, sheen: 0.6, sheenColor: new THREE.Color('#5a6f96') });
    const thread = mat.nylon(0xd9d4c4), steel = mat.zinc();

    const rBar = 2.2, yBar = TH + rBar + 0.15;
    // a strap: the side profile extruded across its width (z), with the fold round x = 0
    const strap = (len, tail) => extrude(foldProfile(len, tail, rBar, yBar), W, web, { bevel: 0.25, curve: 4 });

    // a D-ring: straight bar along z at x = 0, curved part out towards -x; tilted so its far end
    // rests on the table
    const dRing = () => {
      const pts = [];
      const hw = W / 2 + 1.5;
      for (let z = -hw; z <= hw; z += hw / 4) pts.push([0, 0, z]);
      for (let a = 90; a <= 270; a += 15) {
        const t = (a * Math.PI) / 180; pts.push([-8 + hw * Math.cos(t), 0, -hw * Math.sin(t)]);
      }
      const ring = wire(pts, rBar, steel, true);
      const tilt = (Math.atan((yBar - rBar) / (8 + hw)) * 180) / Math.PI;
      return at(group(ring), [0, yBar, 0], [0, 0, tilt]);
    };

    // stitches: short dashes of thread lying on the top layer
    const ys = 2 * TH + 0.05;
    const stitchLine = (a, b, len = 2.8, rr = 0.5) => {
      const out = [], A = new THREE.Vector3(a[0], ys, a[1]), B = new THREE.Vector3(b[0], ys, b[1]);
      const d = B.clone().sub(A), L = d.length(), n = Math.max(1, Math.round(L / len));
      for (let i = 0; i < n; i++) {
        const p = A.clone().addScaledVector(d, (i + 0.12) / n), q = A.clone().addScaledVector(d, (i + 0.88) / n);
        out.push(wire([[p.x, ys - 0.25, p.z], [(p.x + q.x) / 2, ys, (p.z + q.z) / 2], [q.x, ys - 0.25, q.z]], rr, thread));
      }
      return out;
    };
    const boxX = (x0, x1, z0, z1) => [
      stitchLine([x0, z0], [x1, z0]), stitchLine([x1, z0], [x1, z1]), stitchLine([x1, z1], [x0, z1]), stitchLine([x0, z1], [x0, z0]),
      stitchLine([x0, z0], [x1, z1]), stitchLine([x0, z1], [x1, z0]),
    ].flat();
    const barTack = (x, z0, z1) => {
      // a dense zigzag across the strap, 2.5 mm wide
      const pts = [];
      for (let i = 0, z = z0; z <= z1; i++, z += 0.45) pts.push([x + (i % 2 ? 1.3 : -1.3), ys, z]);
      return wire(pts, 0.28, thread);
    };

    const tail = 46, len = 85, m = 0.12 * W;
    const s1 = group(at(strap(len, tail), [0, 0, 0]), dRing(),
      boxX(14, tail - 5, -W / 2 + m, W / 2 - m));
    const s2 = group(at(strap(len, tail), [0, 0, 0]), dRing(),
      [barTack(16, -W / 2 + 2.5, W / 2 - 2.5), barTack(28, -W / 2 + 2.5, W / 2 - 2.5), barTack(40, -W / 2 + 2.5, W / 2 - 2.5)]);
    return group(at(s1, [0, 0, -22]), at(s2, [14, 0, 24], [0, -6, 0]));
  },
};
