// Rotary latch, latched: a zinc-plated housing plate with a slot, the claw (rotor) turned round the
// striker bolt and the pawl resting against it, both on rivet pivots. The cover plate is left off to
// show the inside. The striker bolt comes from a painted bracket behind (the "frame").
const C = [-8, 24], RC = 13;                 // claw pivot and radius
const S = [0, 30.5], W = 4.3;                // striker centre (latched, at the slot bottom) and the claw mouth half-width
const TH = (-12 * Math.PI) / 180;            // direction the claw mouth opens (to the right)
function clawOutline() {
  const d = [Math.cos(TH), Math.sin(TH)], n = [-d[1], d[0]];
  const hit = (s) => {                       // where the mouth edge (offset s along n) meets the claw rim
    const p = [S[0] + n[0] * s - C[0], S[1] + n[1] * s - C[1]];
    const b = p[0] * d[0] + p[1] * d[1], c = p[0] * p[0] + p[1] * p[1] - RC * RC;
    const t = -b + Math.sqrt(b * b - c);
    return [C[0] + p[0] + d[0] * t, C[1] + p[1] + d[1] * t];
  };
  const up = hit(W), lo = hit(-W);
  let a0 = Math.atan2(up[1] - C[1], up[0] - C[0]), a1 = Math.atan2(lo[1] - C[1], lo[0] - C[0]);
  while (a1 < a0) a1 += Math.PI * 2;
  const pts = [], NA = -Math.PI * 0.36, NB = NA + 0.32;       // the catch notch for the pawl, low on the rim
  for (let i = 0; i <= 120; i++) {
    const a = a0 + ((a1 - a0) * i) / 120, w = Math.atan2(Math.sin(a), Math.cos(a));
    const r = w > NA && w < NB ? RC - 2.2 : RC;
    pts.push([C[0] + r * Math.cos(a), C[1] + r * Math.sin(a)]);
  }
  for (let i = 0; i <= 16; i++) {           // inner end of the mouth, round the striker
    const a = TH - Math.PI / 2 - (Math.PI * i) / 16;
    pts.push([S[0] + W * Math.cos(a), S[1] + W * Math.sin(a)]);
  }
  return pts;
}
function plateOutline() {
  const pts = [[-23, 0], [23, 0], [23, 50], [4.5, 50], [4.5, 30.5]];
  for (let i = 1; i < 16; i++) { const a = -(Math.PI * i) / 16; pts.push([4.5 * Math.cos(a), 30.5 + 4.5 * Math.sin(a)]); }
  return [...pts, [-4.5, 30.5], [-4.5, 50], [-23, 50]];
}
export default {
  alt: 'Render of a rotary latch with its cover plate left off: on a metal housing plate with a slot, a dark steel claw has turned round a striker pin to trap it at the bottom of the slot, and a pawl rests in a notch on the claw to stop it turning back; the striker pin stands out from a bracket behind.',
  kind: 'cross-section',
  view: { dir: [0.3, 0.4, 1.2], fill: 0.95, light: [-0.3, 1, 0.9] },
  build(K) {
    const { group, at, cyl, extrude, hex, box, mat } = K;
    const plate = at(extrude(plateOutline(), 1.5, mat.zinc(), { bevel: 0.2, holes: [{ x: -18, y: 5, r: 2.2 }, { x: 18, y: 5, r: 2.2 }, { x: -18, y: 45, r: 2.2 }, { x: 18, y: 45, r: 2.2 }] }), [0, 0, -0.75]);
    const claw = at(extrude(clawOutline(), 4, mat.blackOxide(), { bevel: 0.3 }), [0, 0, 2.3]);
    // pawl: a flat bar from its pivot (lower right) up to the catch notch on the claw
    const ta = -Math.PI * 0.36 + 0.16, tip = [C[0] + (RC - 2.0) * Math.cos(ta), C[1] + (RC - 2.0) * Math.sin(ta)];
    const pv = [12, 12], len = Math.hypot(tip[0] - pv[0], tip[1] - pv[1]), ang = Math.atan2(tip[1] - pv[1], tip[0] - pv[0]);
    const pawlShape = new K.THREE.Shape();
    pawlShape.absarc(0, 0, 3.5, Math.PI / 2, (Math.PI * 3) / 2, false); pawlShape.lineTo(len, -2.2); pawlShape.lineTo(len, 2.2); pawlShape.lineTo(0, 3.5);
    const pawl = at(extrude(pawlShape, 4, mat.castIron(), { bevel: 0.3 }), [pv[0], pv[1], 2.3], [0, 0, (ang * 180) / Math.PI]);
    const rivets = [C, pv].map(([x, y]) => group(at(cyl(2, 6, mat.steel()), [x, y, 2], [90, 0, 0]), at(cyl(3, 1, mat.steel()), [x, y, 4.9], [90, 0, 0])));
    // the striker pin, standing out from a bracket behind the latch
    const striker = group(
      at(cyl(4.1, 12.8, mat.stainless()), [S[0], S[1], -0.4], [90, 0, 0]),
      at(cyl(4.1, 0.8, mat.stainless(), { r2: 3.4 }), [S[0], S[1], 6.4], [90, 0, 0]),
    );
    const bracket = at(box(28, 34, 3, mat.paint(0x4a5a6e), 0.8), [0, 44, -7.5]);
    return group(plate, claw, pawl, rivets, striker, bracket);
  },
};
