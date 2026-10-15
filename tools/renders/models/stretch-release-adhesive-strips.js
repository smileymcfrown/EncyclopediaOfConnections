// Stretch-release adhesive strips: a white plastic hook stuck to a painted wall by a foam adhesive
// strip; the strip's plain pull tab hangs out below the hook's back plate, ready to be pulled
// slowly straight down along the wall. A spare strip, still on its liners, lies on the floor.
export default {
  alt: 'Render of a stretch-release adhesive strip holding a plastic hook on a painted wall: the white foam strip is sandwiched between the wall and the hook\'s back plate, with its pull tab hanging out below; a spare strip lies on the floor in front.',
  view: { dir: [0.75, 0.32, 1.0], fill: 1.0, target: [0, 6, 0] },
  build(K) {
    const { group, at, box, extrude, roundRect, wire, mat, THREE } = K;
    const wallM = mat.paint(0xcdd5c6); wallM.clearcoat = 0; wallM.roughness = 0.85;
    const hookM = mat.plastic(0xf7f7f5), foam = mat.nylon(0xeee9da), tabM = mat.nylon(0xe5dfcc);
    const linerM = mat.plastic(0xc8483a);

    const wall = at(box(90, 120, 12, wallM, 0.6), [0, 60, -6]);
    const yc = 78;                                           // hook plate centre height
    // the strip: 16 wide, 1.2 thick foam; its stuck part behind the plate and a tab hanging below
    const FS = 1.2;
    const strip = at(box(15, 44, FS, foam, 0.3), [0, yc, FS / 2]);
    const tab = wire([[0, yc - 22, FS / 2], [0, yc - 30, FS / 2 + 0.3], [0, yc - 38, FS / 2 + 1.2]], 0.1, tabM);
    const tabFlat = at(box(15, 16, 0.9, tabM, 0.3), [0, yc - 22 - 8, FS / 2 + 0.6], [-4, 0, 0]);
    // the hook: rounded back plate and a curved arm
    const plate = at(extrude(roundRect(22, 46, 5), 3.2, hookM, { bevel: 0.6 }), [0, yc + 3, FS + 1.6]);
    const arm = group(
      wire([[0, yc - 6, FS + 3], [0, yc - 10, 9], [0, yc - 8, 16], [0, yc - 1, 19], [0, yc + 5, 18.5]], 2.6, hookM),
    );
    // a spare strip lying on the floor in front: foam with red-printed liners on both faces, tab white
    const spare = group(
      at(box(15, FS, 40, foam, 0.3), [0, FS / 2 + 0.25, 0]),
      at(box(15.6, 0.25, 41, linerM, 0.1), [0, FS + 0.38, 0.5]),
      at(box(15.6, 0.25, 41, linerM, 0.1), [0, 0.12, 0.5]),
      at(box(15, 0.9, 14, tabM, 0.3), [0, 0.45 + 0.25, 27]),
    );
    void THREE; void tab;
    return group(wall, strip, tabFlat, plate, arm, at(spare, [26, 0, 32], [0, -70, 0]));
  },
};
