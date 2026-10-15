// Anti-backlash gear: a steel gear split into two thin halves on one hub, the top (free) half
// turned a little against the bottom (fixed) half by two small coil springs in curved windows, so
// their teeth sit side by side out of step; an ordinary gear meshes beside it.
function gearPts(teeth, module) {
  const rp = (teeth * module) / 2, ra = rp + module, rf = rp - 1.25 * module, pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2, t = (Math.PI * 2) / teeth;
    for (const [f, r] of [[0, rf], [0.12, rf], [0.2, rp * 0.995], [0.3, ra], [0.45, ra], [0.55, rp * 0.995], [0.63, rf]]) {
      pts.push([r * Math.cos(a + f * t), r * Math.sin(a + f * t)]);
    }
  }
  return pts;
}
// a curved window (radius r1..r2, from angle a0 to a1, degrees) with round ends
function window(r1, r2, a0, a1) {
  const rad = (d) => (d * Math.PI) / 180, rm = (r1 + r2) / 2, w = (r2 - r1) / 2, pts = [];
  for (let i = 0; i <= 16; i++) { const a = rad(a0 + ((a1 - a0) * i) / 16); pts.push([r2 * Math.cos(a), r2 * Math.sin(a)]); }
  for (let i = 1; i < 8; i++) { const a = rad(a1) + (Math.PI * i) / 8; pts.push([rm * Math.cos(rad(a1)) + w * Math.cos(a), rm * Math.sin(rad(a1)) + w * Math.sin(a)]); }
  for (let i = 16; i >= 0; i--) { const a = rad(a0 + ((a1 - a0) * i) / 16); pts.push([r1 * Math.cos(a), r1 * Math.sin(a)]); }
  for (let i = 1; i < 8; i++) { const a = rad(a0) + Math.PI + (Math.PI * i) / 8; pts.push([rm * Math.cos(rad(a0)) + w * Math.cos(a), rm * Math.sin(rad(a0)) + w * Math.sin(a)]); }
  return pts;
}
export default {
  alt: 'Render of an anti-backlash gear: a steel gear made of two thin halves stacked on one hub, the top half turned slightly against the bottom one by two small coil springs sitting in curved windows, so their teeth sit side by side out of step and pinch the teeth of a plain brass gear meshing beside it.',
  view: { dir: [0.25, 0.62, 1], fill: 1.0 },
  build(K) {
    const { group, at, extrude, tube, cyl, spring, torus, mat, THREE } = K;
    const steel = mat.steel(), dark = mat.blackOxide(), sp = mat.stainless();
    const m = 1, T = 40, rp = 20;
    const gapTo0 = -((0.375 + 0.5) * 360) / T;          // turn so a tooth gap faces +x
    const fixed = at(extrude(gearPts(T, m), 4, steel, { holes: [{ x: 0, y: 0, r: 2.5 }] }), [0, 2, 0], [-90, 0, gapTo0]);
    const hub = at(tube(8, 2.5, 7, steel), [0, 7.5, 0]);
    const wins = [window(10.8, 15.2, 20, 70), window(10.8, 15.2, 200, 250)];
    const free = at(extrude(gearPts(T, m), 4, steel, { holes: [{ x: 0, y: 0, r: 8.05 }, ...wins] }), [0, 6.7, 0], [-90, 0, gapTo0 + 3]);
    const clip = at(torus(8.6, 0.45, dark, 320), [0, 9.3, 0], [90, 0, 0]);
    const shaft = at(cyl(2.5, 14, sp), [0, 7, 0]);
    const parts = [fixed, hub, free, clip, shaft];
    // springs: in each window a pin from the fixed half at one end and a coil spring pushing on it
    for (const base of [20, 200]) {
      const a = gapTo0 + 3 + base;                         // world angle of the window start (free half)
      const rad = (d) => (d * Math.PI) / 180;
      const P = (deg, r = 13) => [r * Math.cos(rad(deg)), -r * Math.sin(rad(deg))]; // local (x, y) -> world (x, z)
      const [px, pz] = P(a + 5);
      parts.push(at(cyl(1.1, 6, steel), [px, 6.8, pz]));
      const [s0x, s0z] = P(a + 11), [s1x, s1z] = P(a + 47);
      const len = Math.hypot(s1x - s0x, s1z - s0z);
      const s = spring(1.55, 0.32, 9, len, sp);
      const dir = new THREE.Vector3(s1x - s0x, 0, s1z - s0z).normalize();
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      s.position.set(s0x, 6.7, s0z);
      parts.push(s);
    }
    // the ordinary gear meshing with both halves
    const mate = at(extrude(gearPts(20, m), 8.7, mat.brass(), { holes: [{ x: 0, y: 0, r: 2.5 }] }), [30, 4.35, 0], [-90, 0, 180 - 0.375 * 18]);
    const mhub = at(tube(5.5, 2.5, 3, mat.brass()), [30, 9.6, 0]);
    const mshaft = at(cyl(2.5, 14, sp), [30, 7, 0]);
    return group(...parts, mate, mhub, mshaft);
  },
};
