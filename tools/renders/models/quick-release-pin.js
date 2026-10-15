// Quick-release pin (ball-lock pin): a stainless push-button pin through a clevis, holding a link
// arm between the two lugs of a bracket. Its handle and button are on the near lug; past the far lug
// its two small locking balls stand proud of the shank, so it cannot slide out until the button is
// pressed. A split ring for a lanyard hangs from the handle.
const AY = 30; // height of the pin's axis
export default {
  alt: 'Render of a quick-release pin holding a clevis together: a stainless pin with a push-button handle passes through two bracket lugs and the link arm between them, and two small steel balls stick out near its tip past the far lug to lock it in place; a split ring hangs from the handle.',
  view: { dir: [0.35, 0.5, 1.0], fill: 1.15 },
  build(K) {
    const { group, at, box, cyl, lathe, sphere, torus, mat } = K;
    const ss = mat.stainless(), alu = mat.paint(0x3b4047), arm = mat.anodised(0x2b4c7e);
    const parts = [];
    // bracket: base plate and two lugs, with the link arm between them
    parts.push(at(box(64, 6, 40, alu, 1), [0, 3, 0]));
    for (const x of [-17, 17]) parts.push(at(box(6, 44, 30, alu, 1), [x, 6 + 22, 0]));
    parts.push(at(box(24, 14, 56, arm, 2), [0, AY, -21]));
    parts.push(at(cyl(7, 24, arm), [0, AY, 0], [0, 0, 90]));
    // the pin along X: shank, chamfered tip, two locking balls
    const pin = [];
    pin.push(lathe([[0, -22], [4, -22], [4, 26.5], [3.2, 28], [0, 28]], ss));
    for (const s of [-1, 1]) pin.push(at(sphere(2.1, mat.steel()), [s * 3.0, 24, 0]));
    // handle with grip grooves, a push button on its end and a cross hole for the ring
    const prof = [[0, -43.5], [3.2, -43.5], [3.6, -43], [3.6, -40], [7.5, -40]];
    for (const y of [-37, -33]) prof.push([7.5, y], [6.9, y + 0.5], [6.9, y + 1.3], [7.5, y + 1.8]);
    prof.push([7.5, -23.5], [6.5, -22], [0, -22]);
    pin.push(lathe(prof, ss));
    pin.push(at(torus(9, 0.9, ss), [8.5, -34, 0], [0, 0, 0]));
    // lie the pin along X, handle on the left (−X)
    parts.push(at(group(pin), [0, AY, 0], [0, 0, -90]));
    return group(parts);
  },
};
