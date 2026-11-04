// Parallel-fold pop-up: a pale yellow pop-up card opened to a right angle inside a blue cover card. Three
// strips, each made by two parallel cuts from the centre fold, are pushed through and creased so they
// stand out as steps (boxes); the holes they leave show the cover behind. Every crease runs parallel
// to the centre fold.
const PW = 140, PD = 96;      // page width (x) and depth
const T = 0.35, CT = 0.9;     // card and cover thickness
const STEPS = [[-46, -18, 22], [-10, 24, 36], [32, 52, 14]];   // [x from, x to, depth]

function cardMat(K, c) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: 0.88, metalness: 0 }); }

// a page outline with a notch for each step, cut in from the fold edge (y = 0)
function page() {
  const pts = [[-PW / 2, 0]];
  for (const [x0, x1, a] of STEPS) pts.push([x0, 0], [x0, a], [x1, a], [x1, 0]);
  pts.push([PW / 2, 0], [PW / 2, PD], [-PW / 2, PD]);
  return pts;
}

export default {
  alt: 'Render of a parallel-fold pop-up: a pale yellow card opened to a right angle inside a blue cover has three strips cut from its centre fold and pushed through, so they stand out as box-shaped steps of different sizes, with the holes they came from showing the cover behind.',
  view: { dir: [0.55, 0.55, 1.2], fill: 1.08, light: [-1, 1.4, 0.45], exposure: 1.1, envIntensity: 0.3, target: [0, -4, 0] },
  build(K) {
    const { group, at, box, extrude } = K;
    const cream = cardMat(K, 0xeccf86), blue = cardMat(K, 0x2d6e93);
    const parts = [];
    // the cover: base page on the ground, back page standing up
    parts.push(at(box(PW + 8, CT, PD + 4, blue, 0.2), [0, -CT / 2, (PD + 4) / 2 - CT]));
    parts.push(at(box(PW + 8, PD + 4, CT, blue, 0.2), [0, (PD + 4) / 2 - CT, -CT / 2]));
    // the pop-up card's two pages, each with the notches the steps came out of
    parts.push(at(extrude(page(), T, cream, { bevel: 0.03 }), [0, 0, T / 2]));                // back page
    parts.push(at(extrude(page(), T, cream, { bevel: 0.03 }), [0, T / 2, 0], [90, 0, 0]));    // base page
    // the steps: a top panel and a front panel, creased where they meet the pages and each other
    for (const [x0, x1, a] of STEPS) {
      const w = x1 - x0, xc = (x0 + x1) / 2;
      parts.push(at(box(w, T, a, cream, 0.03), [xc, a - T / 2, a / 2]));
      parts.push(at(box(w, a, T, cream, 0.03), [xc, a / 2, a - T / 2]));
    }
    return group(parts);
  },
};
