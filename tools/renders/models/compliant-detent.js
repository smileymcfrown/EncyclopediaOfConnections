// Compliant detent: a printed clicky knob. A notched wheel (with a grip knob on top) turns on a post
// in a printed base; a thin springy arm printed as part of the base rests its rounded tip in one of
// the notches, so the knob clicks from notch to notch.
const N = 12, RW = 20, DEPTH = 2.4;
function wheelOutline() {
  const pts = [];
  const n = N * 24;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    // a rounded V notch centred on each multiple of the pitch, starting at +90 degrees (towards the arm)
    let f = ((a - Math.PI / 2) / ((Math.PI * 2) / N)) % 1; if (f < 0) f += 1;
    const d = Math.min(f, 1 - f) / 0.17;                    // 0 at the notch centre
    const r = d < 1 ? RW - DEPTH * Math.pow(Math.cos((d * Math.PI) / 2), 1.3) : RW;
    pts.push([r * Math.cos(a), r * Math.sin(a)]);
  }
  return pts;
}
export default {
  alt: 'Render of a 3D-printed compliant detent: a notched wheel with a grip knob turns on a printed base, and a thin springy arm printed as part of the base rests its rounded tip in one of the notches, so the knob clicks from position to position.',
  view: { dir: [0.15, 1.15, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, extrude, cyl, box, circle, mat } = K;
    const baseM = mat.pla(0x4a5058, 1.2), knobM = mat.pla(0xe4782d, 1.2), knobTop = mat.pla(0xe4782d, 8);
    // flat parts are drawn in the XY plane and turned to lie flat: shape y becomes world z
    const flat = (o, y) => at(o, [0, y, 0], [90, 0, 0]);

    const T = 3;                                             // base plate thickness
    const plate = at(K.box(66, T, 58, baseM, 3), [0, T / 2, 4]);
    // the spring arm: an anchor block on the left, a thin beam along x, a round nub at its tip
    const zArm = RW + 2.3 + 0.7;                             // beam centre line (world z)
    const anchor = at(box(8, 7, 9, baseM, 1), [-27, T + 3.5, zArm + 1.5]);
    const beam = at(box(27, 6, 1.4, baseM, 0.3), [-10, T + 3.5, zArm]);
    const nub = at(cyl(2.2, 6, baseM), [0, T + 3.5, RW - DEPTH + 2.2 - 0.1]);
    // join the nub to the beam
    const neck = at(box(3.2, 6, 2.6, baseM, 0.4), [0, T + 3.5, zArm - 1.4]);

    // the wheel (6 mm thick) and a knurled grip knob above it, on a centre post
    const wheel = flat(extrude(wheelOutline(), 6, knobM, { bevel: 0.5 }), T + 0.6 + 3);
    const post = at(cyl(4, 8, baseM), [0, T + 4, 0]);
    const grip = [];
    const kR = 9;
    const knob = at(cyl(kR, 12, knobM, { seg: 96 }), [0, T + 6.6 + 6, 0]);
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      grip.push(at(box(1.8, 11, 1.8, knobM, 0.6), [kR * Math.cos(a), T + 6.6 + 6, kR * Math.sin(a)], [0, -(a * 180) / Math.PI, 0]));
    }
    // a pointer ridge on top of the knob
    const pointer = at(box(2.4, 1.6, 10, knobTop, 0.6), [0, T + 6.6 + 12.8, 6]);
    // a few dots round the base marking the click positions
    const marks = [];
    for (let i = 0; i < N; i++) {
      const a = Math.PI / 2 + (i / N) * Math.PI * 2;
      if (27 * Math.sin(a) > 14 && 27 * Math.cos(a) < 6) continue;     // keep clear of the arm
      marks.push(at(cyl(0.9, 0.6, mat.pla(0xe8e8e8, 4)), [27 * Math.cos(a), T + 0.3, 27 * Math.sin(a)]));
    }
    return group(plate, anchor, beam, neck, nub, wheel, post, knob, grip, pointer, marks);
  },
};
