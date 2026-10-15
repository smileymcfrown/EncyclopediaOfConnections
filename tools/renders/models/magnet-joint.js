// Magnet joint: a 3D-printed box with its lid turned over beside it. Round disc magnets are pressed
// into pockets in the four corners of the box rim and of the lid, facing each other (opposite poles
// out), so the lid pulls itself down onto the box and lines itself up; a shallow lip on the lid
// takes sideways knocks.
const S = 62, H = 34, WALL = 3, LIDT = 4, MR = 3, MH = 3, POST = 9; // box size, height, wall, lid, magnet radius and height
function magnets(K, y, inset) {
  const { at, cyl, mat } = K;
  const out = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) out.push(at(cyl(MR, MH, mat.magnet()), [sx * (S / 2 - inset), y, sz * (S / 2 - inset)]));
  return out;
}
export default {
  alt: 'Render of a magnetic joint on a 3D-printed box: small round magnets are set flush into the four corners of the box rim, and the lid, turned over beside it, has matching magnets in its corners that pull it shut and line it up.',
  view: { dir: [0.25, 1.0, 1.05], fill: 1.08 },
  build(K) {
    const { group, at, box, mat } = K;
    const pla = mat.pla(0x27806f, 100);
    const parts = [];
    // box: floor, four walls and a thick post in each corner for the magnet pocket
    parts.push(at(box(S, 3, S, pla, 1), [0, 1.5, 0]));
    for (const s of [-1, 1]) {
      parts.push(at(box(S, H, WALL, pla, 1), [0, H / 2, s * (S / 2 - WALL / 2)]));
      parts.push(at(box(WALL, H, S, pla, 1), [s * (S / 2 - WALL / 2), H / 2, 0]));
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) parts.push(at(box(POST, H, POST, pla, 1), [sx * (S / 2 - POST / 2), H / 2, sz * (S / 2 - POST / 2)]));
    parts.push(...magnets(K, H - MH / 2 + 0.05, POST / 2));
    // lid, turned over beside the box: plate, a lip that drops inside the walls, magnets in the corners
    const lid = [at(box(S, LIDT, S, pla, 1.2), [0, LIDT / 2, 0])];
    // the lip runs inside the walls, between the corner posts
    const li = S - 2 * WALL - 0.6, run = S - 2 * POST - 2;
    for (const s of [-1, 1]) {
      lid.push(at(box(run, 3, 2, pla, 0.6), [0, LIDT + 1.5, s * (li / 2 - 1)]));
      lid.push(at(box(2, 3, run, pla, 0.6), [s * (li / 2 - 1), LIDT + 1.5, 0]));
    }
    lid.push(...magnets(K, LIDT - MH / 2 + 0.05, POST / 2));
    parts.push(at(group(lid), [S + 22, 0, 8], [0, -14, 0]));
    return group(parts);
  },
};
