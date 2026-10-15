// Stretch-release adhesive strips: a white plastic hook stuck to a painted wall by a foam adhesive
// strip; the strip's plain pull tab hangs out below the hook's back plate, ready to be pulled
// slowly straight down along the wall.
export default {
  alt: 'Render of a stretch-release adhesive strip holding a plastic hook on a painted wall: the white foam strip is sandwiched between the wall and the hook\'s back plate, with its plain pull tab hanging out below, ready to be pulled straight down along the wall.',
  view: { dir: [1.1, 0.3, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, box, extrude, roundRect, wire, mat } = K;
    const wallM = mat.paint(0x8ea596); wallM.clearcoat = 0; wallM.roughness = 0.85;
    const hookM = mat.plastic(0xf7f7f5), foam = mat.nylon(0xeee9da), tabM = mat.nylon(0xe5dfcc);

    const wall = at(box(56, 86, 10, wallM, 0.6), [0, 43, -5]);
    const yc = 52;                                           // hook plate centre height
    // the strip: 16 wide, 1.2 thick foam; its stuck part behind the plate and a tab hanging below
    const FS = 1.2;
    const strip = at(box(15, 44, FS, foam, 0.3), [0, yc, FS / 2]);
    const tabFlat = at(box(15, 16, 0.9, tabM, 0.3), [0, yc - 22 - 8, FS / 2 + 0.6], [-4, 0, 0]);
    // the hook: rounded back plate and a curved arm
    const plate = at(extrude(roundRect(22, 46, 5), 3.2, hookM, { bevel: 0.6 }), [0, yc + 3, FS + 1.6]);
    const arm = group(
      wire([[0, yc - 6, FS + 3], [0, yc - 10, 9], [0, yc - 8, 16], [0, yc - 1, 19], [0, yc + 5, 18.5]], 2.6, hookM),
    );
    return group(wall, strip, tabFlat, plate, arm);
  },
};
