// Anti-twister mechanism: a printed demonstrator. A fixed drum base (the 2:1 gearing is inside it),
// a steel shaft up the middle carrying a spinning platform on top, and a carrier arm on a collar
// part-way up whose upright guide holds the cable's loop. The cable leaves the base beside the
// shaft, loops out through the guide and comes back in under the middle of the platform.
export default {
  alt: 'Render of an anti-twister demonstrator: a cable leaves a round fixed base beside a central shaft, loops out and up through a guide on a carrier arm half-way up, and comes back in under the middle of a spinning platform on top, so the platform can turn for ever without the cable twisting.',
  view: { dir: [1.0, 0.45, 1.25], fill: 0.9, target: [0, 2, 0] },
  build(K) {
    const { group, at, cyl, tube, box, wire, lathe, mat } = K;
    const grey = mat.pla(0x5d636b, 40), orange = mat.pla(0xe4782d, 40), blue = mat.pla(0x3f7fc4, 40);
    const steel = mat.stainless(), cable = mat.rubber(0x2a2a2c);

    // fixed base: a drum with a chamfered top edge
    const base = lathe([[0, 0], [46, 0], [46, 26], [43, 29], [0, 29]], grey);
    const shaft = at(cyl(4, 104, steel), [0, 29 + 52, 0]);
    const bearingCap = at(cyl(9, 4, grey), [0, 31, 0]);

    // carrier: collar round the shaft, an arm out to +x, an upright guide tube at its tip
    const R = 58;
    const collar = at(tube(10, 4.2, 14, orange), [0, 62, 0]);
    const arm = at(box(R - 6, 6, 10, orange, 1.5), [(R - 6) / 2 + 6, 62, 0]);
    const guidePost = at(box(10, 62, 10, orange, 2), [R + 4, 67, 0]);
    const eyeLow = at(K.torus(6, 2, orange), [R - 2, 42, 0], [90, 0, 0]);
    const eyeHigh = at(K.torus(6, 2, orange), [R - 2, 92, 0], [90, 0, 0]);
    // counterweight on the far side so it spins true
    const counter = at(box(22, 8, 14, orange, 2), [-18, 62, 0]);

    // spinning platform with a small board on it
    const plat = at(cyl(42, 6, blue), [0, 136, 0]);
    const hub = at(cyl(9, 8, blue), [0, 129, 0]);
    const board = at(box(34, 1.6, 24, mat.plastic(0x1f6b3a), 0.4), [0, 139.8, 0]);
    const chip = at(box(10, 2, 10, mat.plastic(0x222222), 0.3), [4, 141.6, 2]);

    // the cable: out of the base beside the shaft, out and up through the guide eyes, back in
    // under the platform; clamps at each end
    const pts = [
      [12, 29, 0], [14, 34, 0], [24, 38, 0], [44, 40, 0], [R - 2, 42, 0], [R - 2, 60, 0],
      [R - 2, 80, 0], [R - 2, 92, 0], [44, 101, 0], [26, 112, 0], [15, 124, 0], [13, 133, 0],
    ];
    const c = wire(pts, 2.4, cable);
    const clampLow = at(box(10, 5, 10, grey, 1.5), [12, 31.5, 0]);
    const clampHigh = at(box(10, 5, 10, blue, 1.5), [13, 130.5, 0]);

    return group(base, shaft, bearingCap, collar, arm, guidePost, eyeLow, eyeHigh, counter,
      plat, hub, board, chip, c, clampLow, clampHigh);
  },
};
