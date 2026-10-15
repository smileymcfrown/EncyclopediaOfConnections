// Air-logic valve, shown as its simplest element, the shuttle valve (the OR element): a brass body
// cut in half along its length shows the steel ball that air from either inlet pushes against the
// opposite seat, so air always reaches the outlet on top. Push-in fittings and air tubes attached.
const R = 8;           // body radius
const Y = R;           // height of the body's axis above the bench

function bodyQuarter(K, prof, start, m, cm) {
  return K.lathe(prof, m, { cut: 270, start, cutMat: cm });
}
// a push-in fitting along its own axis (local y, from 0 outwards), cut in half like the body;
// `deep` lengthens its base, for the outlet fitting that sits down in a counterbore
function fitting(K, deep = 0) {
  const { group, lathe, mat } = K;
  const d = deep;
  const prof = d ? [[2.2, 0], [6.2, 0], [6.2, 6 + d], [5.3, 7 + d], [5.3, 11 + d], [3.1, 11 + d], [3.1, d], [2.2, d], [2.2, 0]]
    : [[3.1, 0], [6.2, 0], [6.2, 6], [5.3, 7], [5.3, 11], [3.1, 11], [3.1, 0]];
  const body = lathe(prof, mat.plastic(0x1f1f21), { cut: 180, cutMat: mat.plastic(0x1f1f21) });
  const ring = lathe([[3.1, 11 + d], [5.0, 11 + d], [5.0, 13.5 + d], [4.6, 14 + d], [3.1, 14 + d], [3.1, 11 + d]], mat.plastic(0x2a62c4),
    { cut: 180, cutMat: mat.plastic(0x2a62c4) });
  return group(body, ring);
}
export default {
  alt: 'Render of a shuttle valve, the simplest air-logic element, cut in half: inside a brass body a steel ball sits against one inlet seat, so air from the other inlet passes round it to the outlet on top; push-in fittings with blue and black air tubes are attached.',
  kind: 'cross-section',
  view: { dir: [0.3, 0.85, 1.3], fill: 1.25, target: [0, 0, 10] },
  build(K) {
    const { group, at, sphere, wire, mat } = K;
    const brass = mat.brass(), bc = mat.brass();
    // body profiles (radius, position along the axis): inlet ports at both ends, cone seats, a central chamber
    const full = [[2.5, -20], [R, -20], [R, 20], [2.5, 20], [2.5, 14], [4.2, 12], [4.2, -12], [2.5, -14], [2.5, -20]];
    const left = [[2.5, -20], [R, -20], [R, -6.3], [4.2, -6.3], [4.2, -12], [2.5, -14], [2.5, -20]];
    const right = left.map(([r, y]) => [r, -y]).reverse();
    // the back half of the body, in two quarters: the lower one whole, the upper one with the counterbored outlet port
    const body = group(
      bodyQuarter(K, full, -45, brass, bc),
      bodyQuarter(K, left, 45, brass, bc),
      bodyQuarter(K, right, 45, brass, bc),
    );
    const parts = [at(body, [0, Y, 0], [0, 0, -90])];
    parts.push(at(sphere(3.6, mat.chrome()), [-11.4, Y, 0]));
    // fittings: both ends, and the outlet on top
    parts.push(at(fitting(K), [20, Y, 0], [0, 0, -90]), at(fitting(K), [-20, Y, 0], [0, 0, 90]), at(fitting(K, 4), [0, Y + 4.2, 0]));
    // tubes, 6 mm, running out of the fittings and down onto the bench
    const blue = mat.plastic(0x2f6fd0), black = mat.plastic(0x1c1c1e), r = 3;
    parts.push(wire([[30, Y, 0], [44, Y, 0], [56, Y - 2, -10], [62, r, -34], [64, r, -60]], r, blue));
    parts.push(wire([[-30, Y, 0], [-44, Y, 0], [-56, Y - 2, -10], [-62, r, -34], [-64, r, -60]], r, black));
    parts.push(wire([[0, Y + 16, 0], [0, Y + 28, 0], [0, Y + 33, -10], [0, Y + 18, -34], [0, r, -62]], r, mat.plastic(0xd8a21c)));
    return group(parts);
  },
};
