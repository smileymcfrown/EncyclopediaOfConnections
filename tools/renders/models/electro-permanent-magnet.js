// Electro-permanent magnet: a small drone-gripper style EPM module (circuit board on top, magnet
// block underneath) holding onto a steel plate. The block: two iron pole pieces, and between them a
// nickel-plated neodymium bar and an alnico bar wound with a copper coil.
export default {
  alt: 'Render of an electro-permanent magnet gripper: a small square circuit board with a capacitor and chips sits on a magnet block made of two iron pole pieces with a shiny neodymium bar and a copper-wound alnico bar between them, and the block is holding a steel plate.',
  view: { dir: [0.9, 0.45, 1.25], fill: 1.05, target: [0, 1, 0] },
  build(K) {
    const { group, at, box, cyl, spring, mat } = K;
    const iron = mat.castIron(), parts = [];
    // the steel plate being held
    parts.push(at(box(56, 2, 46, mat.paint(0x6f7378), 0.4), [0, 1, 0]));
    const y0 = 2;
    // pole pieces
    for (const x of [-12.5, 12.5]) parts.push(at(box(7, 9, 32, mat.steel(), 0.6), [x, y0 + 4.5, 0]));
    // neodymium bar (nickel-plated) and alnico bar with its coil, between the poles
    parts.push(at(box(18, 5, 6, mat.magnet(), 0.3), [0, y0 + 4.5, -7]));
    parts.push(at(cyl(2.4, 18, mat.paint(0x8a8d8f)), [0, y0 + 4.5, 7], [0, 0, 90]));
    const coil = spring(3.2, 0.28, 26, 15, mat.copper());
    parts.push(at(coil, [-7.5, y0 + 4.5, 7], [0, 0, -90]));
    parts.push(at(spring(3.75, 0.28, 24, 14, mat.copper()), [-7, y0 + 4.5, 7], [0, 0, -90]));
    // coil leads up to the board
    parts.push(at(cyl(0.3, 4, mat.copper()), [-6.6, y0 + 9.5, 10.6]));
    parts.push(at(cyl(0.3, 4, mat.copper()), [6.4, y0 + 9.5, 10.6]));
    // circuit board on standoffs
    const by = y0 + 11.6;
    for (const [x, z] of [[-12.5, -12], [12.5, -12], [-12.5, 12], [12.5, 12]]) parts.push(at(cyl(1.6, 1.9, mat.brass()), [x, y0 + 9.9, z]));
    parts.push(at(box(40, 1.6, 40, mat.plastic(0x1f4f2b), 0.3), [0, by, 0]));
    const top = by + 0.8;
    // components: storage capacitor, chips, switch transistors, connector
    parts.push(at(cyl(4, 9, mat.plastic(0x1d2a5a)), [-9, top + 4.5, -8]));
    parts.push(at(cyl(4.02, 0.6, mat.aluminium()), [-9, top + 9.1, -8]));
    parts.push(at(box(7, 1.2, 7, mat.plastic(0x1a1a1a), 0.2), [7, top + 0.6, -7]));
    for (const [x, z] of [[4, 6], [10, 6], [4, 12], [10, 12]]) parts.push(at(box(3, 1, 3, mat.plastic(0x222222), 0.15), [x, top + 0.5, z]));
    parts.push(at(box(8, 5, 3.2, mat.plastic(0xe9e6dd), 0.3), [-10, top + 2.5, 14]));
    for (const x of [-12.5, -10, -7.5]) parts.push(at(box(0.6, 3, 0.6, mat.brass(), 0.05), [x, top + 6, 14]));
    for (const [x, z] of [[14, -14], [-2, 0], [14, 0]]) parts.push(at(box(2, 0.6, 1.2, mat.plastic(0x7a5a3a), 0.1), [x, top + 0.3, z]));
    // a mounting hole ring at each corner (bright pads)
    for (const [x, z] of [[-17, -17], [17, -17], [-17, 17], [17, 17]]) parts.push(at(cyl(2.2, 0.2, mat.brass()), [x, top + 0.05, z]));
    return group(...parts);
  },
};
