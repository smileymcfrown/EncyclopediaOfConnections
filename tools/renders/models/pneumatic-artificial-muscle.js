// Pneumatic artificial muscle (McKibben type), inflated: an amber latex tube inside a black woven
// sleeve, the sleeve's criss-cross strands opened out as the tube swells; crimped aluminium
// ferrules at both ends, an eye plug at one end and a barbed air fitting with its tube at the other.
const LEN = 120, R0 = 7, BULGE = 4.2;     // length between the ferrules, end radius, extra radius when inflated
const N = 16, K_TWIST = 0.11;              // strands each way, twist (radians per mm)

const radius = (y) => { const u = (y - LEN / 2) / (LEN / 2); return R0 + BULGE * (1 - u ** 4); };

// one strand of the braid: a helix over the swollen surface, weaving over and under (cos(N*phi))
function strand(K, phi0, dir, m) {
  const { THREE, mesh } = K;
  const pts = [];
  for (let y = -4; y <= LEN + 4; y += 0.6) {
    const yy = Math.min(Math.max(y, 0), LEN);
    const phi = phi0 + dir * K_TWIST * y;
    const r = radius(yy) + 0.5 + dir * 0.32 * Math.cos(N * phi);
    pts.push(new THREE.Vector3(r * Math.sin(phi), y, r * Math.cos(phi)));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  return mesh(new THREE.TubeGeometry(curve, 260, 0.42, 6), m);
}
export default {
  alt: 'Render of a pneumatic artificial muscle lying on the bench, inflated: an amber rubber tube swollen inside a black criss-cross woven sleeve, clamped at both ends in crimped aluminium ferrules, with a mounting eye at one end and a barbed air fitting and blue air tube at the other.',
  view: { dir: [0.15, 0.8, 1.2], fill: 1.25 },
  build(K) {
    const { group, at, lathe, torus, wire, mat } = K;
    const braidMat = mat.rubber(0x1b1c1f); braidMat.roughness = 0.5;
    const alu = mat.aluminium();
    const prof = [];
    for (let y = -6; y <= LEN + 6; y += 1) prof.push([Math.max(radius(Math.min(Math.max(y, 0), LEN)) - 0.1, 0.1), y]);
    const bladder = lathe(prof, mat.rubber(0xb9792e));
    const braid = [];
    for (let i = 0; i < N; i++) {
      for (let f = -1; f <= 1; f++) {
        const p = (i / N) * Math.PI * 2 + f * 0.075;
        braid.push(strand(K, p, 1, braidMat), strand(K, p + Math.PI / N, -1, braidMat));
      }
    }
    // crimped ferrules over the braid ends
    const ferrule = (y0) => lathe([[R0 + 0.4, y0 - 5], [R0 + 2.6, y0 - 5], [R0 + 2.9, y0 - 4.4], [R0 + 2.9, y0 + 4.4], [R0 + 2.6, y0 + 5],
      [R0 + 0.4, y0 + 5]], alu);
    const ferrules = [ferrule(-3), ferrule(LEN + 3)];
    // eye plug at the bottom end, barbed fitting at the top end
    const plug = lathe([[0, -8], [R0 + 1.5, -8], [R0 + 1.5, -10], [5, -12], [3.5, -14], [3.5, -16], [0, -16]], alu);
    const eye = at(torus(6, 2.2, alu), [0, -22.5, 0], [0, 90, 0]);
    const barb = lathe([[0, LEN + 8], [R0 + 1.5, LEN + 8], [R0 + 1.5, LEN + 11], [3.4, LEN + 12], [3.4, LEN + 15], [2.6, LEN + 15],
      [3.1, LEN + 21], [2.4, LEN + 21], [2.4, LEN + 23], [0, LEN + 23]], mat.brass());
    const tube = wire([[0, LEN + 15, 0], [0, LEN + 26, 0], [3, LEN + 36, 0], [6.5, LEN + 46, 2], [7.6, LEN + 62, 5]], 3, mat.plastic(0x2f6fd0));
    const muscle = group(bladder, ...braid, ...ferrules, plug, eye, barb, tube);
    // lie it along X on the bench
    return group(at(muscle, [0, 0, 0], [0, 0, -90]));
  },
};
