// Shock-corded sectional pole: a close look at one joint of an aluminium tent pole lying on the
// ground, just pulled apart. The left section has a ferrule (a short sleeve) glued over its end as a
// socket; the right section's plain end has slid 25 mm out of it, and the black elastic cord that
// runs through all the sections is visible stretched across the gap, ready to snap them together.
const R = 4.25, RI = 3.55, L = 320, GAP = 25; // tube radius, bore, section length, gap at the joint
export default {
  alt: 'Render of a shock-corded tent pole joint pulled apart: two aluminium pole sections lie end to end, the left one with a silver sleeve (ferrule) on its end, and the black elastic cord running inside them shows in the gap, ready to pull the right-hand tube back into the sleeve.',
  view: { dir: [0.45, 0.8, 1.0], fill: 4.6, target: [2, 0, 0], light: [-0.2, 0.8, -0.7] },
  build(K) {
    const { group, at, tube, wire, mat } = K;
    const pole = mat.anodised(0x58707f), ferrule = mat.steel();
    const parts = [];
    // left section, ending at x = 0, with the ferrule half over it
    parts.push(at(tube(R, RI, L, pole), [-L / 2, R, 0], [0, 0, 90]));
    parts.push(at(tube(R + 0.75, R + 0.05, 42, ferrule), [0, R, 0], [0, 0, 90]));
    // right section, its plain end pulled out of the ferrule
    const x0 = 21 + GAP;
    parts.push(at(tube(R, RI, L, pole), [x0 + L / 2, R, 0], [0, 0, 90]));
    // the elastic cord, running down the middle of both tubes and across the gap
    parts.push(wire([[-60, R, 0], [0, R - 0.2, 0], [x0 / 2, R - 0.5, 0], [x0, R - 0.2, 0], [x0 + 60, R, 0]], 1.5, mat.fabric('#1b1b1d')));
    return group(parts);
  },
};
