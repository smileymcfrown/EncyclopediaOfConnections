// Binding-plate lock, as at the back of a caulking gun: a smooth steel rod runs through a bent
// sheet-steel bracket; a coil spring round the rod pushes a steel plate with a slightly oversized
// hole, and a lip on the bracket holds the plate's lower end back, so the plate sits tipped a few
// degrees and its hole edges bite on the rod.
const ROD_R = 4, ROD_Y = 24, TILT = 10, PLATE_X = 26;

export default {
  alt: 'Render of a binding-plate lock like the one at the back of a caulking gun: a smooth steel rod passes through a steel bracket and then through a flat steel plate with a slightly oversized hole; a coil spring round the rod pushes the plate so it leans a few degrees and grips the rod.',
  view: { dir: [0.45, 0.4, 1.3], fill: 1.05 },
  build(K) {
    const { group, at, box, cyl, extrude, spring, mat } = K;
    const steel = mat.paint(0x2f4a7a), rodM = mat.chrome(), plateM = mat.zinc();
    // bracket: a base strip with an upright wall (with a hole for the rod) and a small lip
    const wall = at(extrude([[-16, 0], [16, 0], [16, 40], [-16, 40]], 2.5, steel, { holes: [{ x: 0, y: ROD_Y, r: ROD_R + 0.8 }] }), [0, 0, 0], [0, 90, 0]);
    const base = at(box(62, 2.5, 32, steel, 0.6), [PLATE_X - 22, 1.25, 0]);
    // the plate pivots about the rod; its lower edge sits this far toward the wall
    const plateLen = 20;          // from rod centre down to the plate's lower edge
    const lowX = PLATE_X - plateLen * Math.sin((TILT * Math.PI) / 180);
    const lip = at(box(2.5, 7, 32, steel, 0.6), [lowX + 1.25 + 1.4, 2.5 + 3.5, 0]);
    // the plate: 2.5 mm steel, hole a little bigger than the rod, a thumb tab at the top
    const outline = [[-12, -plateLen], [12, -plateLen], [12, 14], [7, 30], [-7, 30], [-12, 14]];
    const plate = at(group(at(extrude(outline, 2.5, plateM, { holes: [{ x: 0, y: 0, r: ROD_R + 0.25 }] }), [0, 0, 0], [0, 90, 0])), [PLATE_X, ROD_Y, 0], [0, 0, -TILT]);
    // rod
    const rod = at(cyl(ROD_R, 110, rodM), [12, ROD_Y, 0], [0, 0, 90]);
    // spring round the rod, between the wall and the plate
    const spr = at(spring(6.2, 0.8, 6, PLATE_X - 4.5, mat.blackOxide()), [1.5, ROD_Y, 0], [0, 0, -90]);
    return group(wall, base, lip, plate, rod, spr);
  },
};
