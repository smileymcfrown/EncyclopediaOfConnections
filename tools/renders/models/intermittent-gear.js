// Intermittent gear: a printed driver with only three teeth and a smooth locking rim, beside a
// printed output gear whose rim has four curved notches. They sit on steel pins in a printed base
// plate, in the "held still" position: the driver's smooth rim sits in one of the output gear's
// notches, and the driver's teeth are coming round to turn it on a quarter turn.
const M = 2, Z = 16, RP = (Z * M) / 2, RA = RP + M, RF = RP - 1.25 * M, C = 2 * RP, T = 5, RL = RP + 1.6;   // RL: locking rim
// radius of a plain gear tooth profile at angle a (radians), teeth starting at angle a0
function gearR(a, a0 = 0) {
  const t = (Math.PI * 2) / Z;
  let f = (((a - a0) % t) + t) % t / t;
  const tab = [[0, RF], [0.08, RF], [0.18, RP], [0.27, RA], [0.48, RA], [0.57, RP], [0.67, RF], [1, RF]];
  for (let i = 1; i < tab.length; i++) if (f <= tab[i][0]) {
    const [f0, r0] = tab[i - 1], [f1, r1] = tab[i];
    return r0 + ((f - f0) / (f1 - f0)) * (r1 - r0);
  }
  return RF;
}
const N = 720;
function driverOutline() {
  // three teeth centred on 150 degrees; the rest of the rim is the smooth locking arc at the pitch
  // radius, with a little relief cut each side of the teeth
  const pts = [], c = (150 * Math.PI) / 180, half = (1.5 * 2 * Math.PI) / Z;
  const a0 = c - half - 0.12 * ((2 * Math.PI) / Z) + (2 * Math.PI) / Z * 0.0;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    let d = Math.abs(((a - c + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    let r = RL - 0.2;
    if (d < half) r = gearR(a, a0);
    else if (d < half + 0.14) r = RF + 0.3;                    // relief beside the teeth
    pts.push([r * Math.cos(a), r * Math.sin(a)]);
  }
  return pts;
}
function outputOutline() {
  // a 16-tooth gear with four scallops, each a curve of the driver's rim (centre distance C)
  const pts = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    let r = gearR(a, Math.PI - 0.375 * ((Math.PI * 2) / Z));         // a tooth centred on each notch
    for (let k = 0; k < 4; k++) {
      const b = Math.PI + (k * Math.PI) / 2, x = r * Math.cos(a) - C * Math.cos(b), y = r * Math.sin(a) - C * Math.sin(b);
      if (Math.hypot(x, y) < RL) {
        // move the point out along the ray until it lies on the scallop circle
        const ca = Math.cos(a - b);
        r = Math.min(RA, C * ca - Math.sqrt(Math.max(0, RL ** 2 - (C * Math.sin(a - b)) ** 2)));
        r = Math.max(r, RF);
      }
    }
    pts.push([r * Math.cos(a), r * Math.sin(a)]);
  }
  return pts;
}
export default {
  alt: 'Render of an intermittent gear pair: a 3D-printed driving gear with only three teeth and a smooth rim, and an output gear with four curved notches in its rim, on steel pins in a printed base; the driver\'s smooth rim sits in one notch, holding the output gear still until the teeth come round.',
  view: { dir: [0.25, 2.0, 0.9], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, extrude, mat } = K;
    const base = at(box(84, 4, 46, mat.pla(0x5d646d, 10), 1.5), [0, 2, 0]);
    const y = 4 + 1 + T / 2;
    const driver = at(extrude(driverOutline(), T, mat.pla(0xe8812f, 20), { holes: [{ x: 0, y: 0, r: 2.6 }], bevel: 0.4 }), [-RP, y, 0], [-90, 0, 0]);
    const output = at(extrude(outputOutline(), T, mat.pla(0x3a7bc8, 20), { holes: [{ x: 0, y: 0, r: 2.6 }], bevel: 0.4 }), [RP, y, 0], [-90, 0, 0]);
    const parts = [base, driver, output];
    for (const x of [-RP, RP]) {
      parts.push(at(cyl(2.5, 12, mat.steel()), [x, 4 + 6, 0]));
      parts.push(at(cyl(4.5, 1, mat.pla(0x5d646d, 4)), [x, 4.5, 0]));        // spacer washer
    }
    // a crank pin on the driver, to show it is the one that is turned
    parts.push(at(cyl(2, 8, mat.pla(0xe8812f, 10)), [-RP - 9 * Math.cos(Math.PI / 3), y + 6, 9 * Math.sin(Math.PI / 3)]));
    return group(parts);
  },
};
