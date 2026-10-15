// Telescoping tube twist lock (internal expander, as in trekking poles): an aluminium inner tube
// sliding in a wider anodised outer tube, both cut away to show the plastic plug in the inner
// tube's end, the threaded rod, and the split expander that a cone on the rod has swelled out
// against the outer tube's wall.
const steps = (pts) => pts;   // profiles are [radius, position along the tube]

export default {
  alt: 'Render of a twist-lock pole joint, cut away: a thin aluminium tube slides inside a wider blue tube; on its end a plastic plug carries a threaded rod with a cone that has been screwed into a red split expander sleeve, swelling it out to press on the inside of the outer tube.',
  kind: 'cross-section',
  view: { dir: [0.35, 0.9, 1.2], fill: 1.0 },
  build(K) {
    const { group, at, lathe, threaded, mat } = K;
    const alu = mat.aluminium(), blue = mat.anodised(0x23498a);
    const red = mat.plastic(0xc8372a), black = mat.plastic(0x232325);
    const cut = (m) => ({ cut: 90, cutMat: m });
    const outer = lathe(steps([[8.3, 0], [9, 0], [9, 100], [8.3, 100], [8.3, 0]]), blue, cut(mat.anodised(0x23498a)));
    const collar = lathe([[8.1, -6], [10.2, -6], [10.6, -4], [10.6, 10], [9, 12], [9, 0], [8.1, 0], [8.1, -6]], black, cut(mat.plastic(0x232325)));
    const inner = lathe([[7.3, -45], [8, -45], [8, 55], [7.3, 55], [7.3, -45]], alu, cut(mat.aluminium()));
    // plug pressed into the inner tube's end, with a flange
    const plug = lathe([[0, 44], [7.3, 44], [7.3, 55], [7.9, 55], [7.9, 58], [3.2, 58], [3.2, 50], [0, 50], [0, 44]], black, cut(mat.plastic(0x232325)));
    // the split expander: its outside tapers out to touch the outer tube's wall, its bore is a cone
    const exp = lathe([[3.2, 59], [7.7, 59], [8.28, 76], [5.9, 76], [3.4, 63], [3.2, 63], [3.2, 59]], red, cut(mat.plastic(0xc8372a)));
    // the cone (a nut on the threaded rod), drawn into the expander
    const cone = lathe([[2.4, 63.6], [3.3, 63.6], [5.8, 76], [5.8, 79], [4.2, 82], [2.4, 82], [2.4, 63.6]], black, cut(mat.plastic(0x232325)));
    const rod = at(threaded(2.4, 1, 33, mat.steel()), [0, 52, 0]);
    const all = group(outer, collar, inner, plug, exp, cone, rod);
    // lay it along X with the cut-away quarter facing up and towards the camera
    return group(at(all, [0, 0, 0], [-45, 0, -90]));
  },
};
