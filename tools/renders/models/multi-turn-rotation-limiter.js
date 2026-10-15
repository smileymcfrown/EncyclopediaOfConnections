// Multi-turn rotation limiter, travelling-nut type: a threaded shaft turned by a knob, carried in two
// end plates on a base. A brass nut on the thread is kept from spinning by a guide rod through its
// top, so each turn walks it along the thread until it meets one of the two stop collars.
const AY = 24;            // height of the shaft axis
const GY = 40;            // height of the guide rod

export default {
  alt: 'Render of a travelling-nut turn limiter: a threaded steel shaft with a knob on one end runs between two aluminium end plates; a brass nut on the thread is kept from spinning by a steel guide rod through its top, and two black stop collars on the shaft mark where the nut stops at each end.',
  view: { dir: [0.45, 0.6, 1.25], fill: 0.95 },
  build(K) {
    const { group, at, box, cyl, tube, threaded, lathe, mat } = K;
    const alu = new K.THREE.MeshPhysicalMaterial({ color: 0xb4b9bf, metalness: 1, roughness: 0.5 });
    const alongX = (o, x) => at(group(o), [x, AY, 0], [0, 0, -90]);   // an object built along +Y, turned to run along +X from x
    const base = at(box(110, 6, 44, alu, 1), [0, 3, 0]);
    const ends = [-42, 42].map((x) => at(box(7, 46, 44, alu, 1), [x, 6 + 23, 0]));
    const shaft = group(
      alongX(threaded(4, 1.25, 72, mat.steel()), -36),
      alongX(at(cyl(3.6, 104, mat.steel()), [0, 52, 0]), -52),
    );
    const knob = alongX(lathe([[0, 0], [13, 0], [14, 1.2], [14, 12.8], [13, 14], [3.6, 14], [0, 14]], mat.plastic(0x222428)), -68);
    const guide = at(cyl(2.5, 84, mat.stainless()), [0, GY, 0], [0, 0, 90]);
    const nut = at(box(12, 26, 16, mat.brass(), 1.2), [6, 33, 0]);
    const collar = (x) => group(alongX(tube(8.5, 4, 8, mat.blackOxide()), x), at(cyl(1.8, 1, mat.steel(), { seg: 6 }), [x, AY + 8.6, 0]));
    // the collar's tube is centred on its length, so shift by half
    const collars = [collar(-28 + 4), collar(30 + 4)];
    return group(base, ...ends, shaft, knob, guide, nut, ...collars);
  },
};
