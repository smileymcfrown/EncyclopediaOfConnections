// Push-push latch: a cabinet push-to-open latch with the top of its housing cut away. Inside, a
// black slider carries a heart-shaped track on its top face; a springy steel wire fixed to the
// housing reaches into the track and sits in the notch of the heart (latched); a coil spring behind
// the slider pushes it outwards, and its plunger with a rubber tip pokes out of the front.
function heart(s, cx, cy, k = 1, c = [0, -3]) {
  const pts = [];
  for (let i = 0; i < 120; i++) {
    const t = (i / 120) * Math.PI * 2;
    let x = 16 * Math.sin(t) ** 3, y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    x = c[0] + k * (x - c[0]); y = c[1] + k * (y - c[1]);
    pts.push([cx + s * x, cy + s * y]);
  }
  return pts;
}
export default {
  alt: 'Render of a push-push latch with its housing cut open: inside the white plastic body a black slider carries a heart-shaped track, a thin steel wire reaches into the track and rests in the notch at the top of the heart, a coil spring behind the slider pushes it outwards, and the plunger with a rubber tip sticks out of the front.',
  kind: 'cross-section',
  view: { dir: [0.6, 1.4, 0.8], fill: 1.1 },
  build(K) {
    const { group, at, box, cyl, extrude, spring, wire, mat } = K;
    const white = mat.plastic(0xdcdad4), cutC = mat.cut(0xcfcac0), black = mat.plastic(0x4a4d53), parts = [];
    const HW = 24, HL = 50, HH = 10, wall = 2, floor = 2;
    // housing: floor, side walls, back wall and front wall (with a hole for the plunger), cut at the top
    parts.push(at(box(HW, floor, HL, white, 0.4), [0, floor / 2, 0]));
    for (const s of [-1, 1]) {
      parts.push(at(box(wall, HH - floor, HL, white, 0.2), [s * (HW / 2 - wall / 2), floor + (HH - floor) / 2, 0]));
      parts.push(at(box(wall, 0.05, HL, cutC, 0), [s * (HW / 2 - wall / 2), HH + 0.02, 0]));
    }
    parts.push(at(box(HW - 2 * wall, HH - floor, wall, white, 0.2), [0, floor + (HH - floor) / 2, -HL / 2 + wall / 2]));
    parts.push(at(box(HW - 2 * wall, 0.05, wall, cutC, 0), [0, HH + 0.02, -HL / 2 + wall / 2]));
    const front = extrude([[-HW / 2 + wall, 0], [HW / 2 - wall, 0], [HW / 2 - wall, HH - floor], [-HW / 2 + wall, HH - floor]], wall, white,
      { holes: [{ x: 0, y: 3.4, r: 3.3 }], bevel: 0.2 });
    parts.push(at(front, [0, floor, HL / 2 - wall / 2]));
    // mounting ears with screw holes
    for (const z of [-HL / 2 + 6, HL / 2 - 6]) for (const s of [-1, 1]) {
      parts.push(at(extrude([[0, -4], [6, -4], [6, 4], [0, 4]], 1.6, white, { holes: [{ x: 3, y: 0, r: 1.6 }], bevel: 0.3 }), [s * (HW / 2), 0.8, z], [90, s < 0 ? 180 : 0, 0]));
    }
    // slider: black block with the heart-shaped track on top
    const SW = 17, SL = 24, SH = 5, sz = -2;
    parts.push(at(box(SW, SH - 1.4, SL, black, 0.3), [0, floor + (SH - 1.4) / 2, sz]));
    const sc = 0.46, hcy = -1.0;
    const top = extrude([[-SW / 2, -SL / 2], [SW / 2, -SL / 2], [SW / 2, SL / 2], [-SW / 2, SL / 2]], 1.4, black,
      { holes: [heart(sc, 0, hcy)], bevel: 0.15, curve: 24 });
    parts.push(at(top, [0, floor + SH - 0.7, sz], [90, 0, 0]));
    const island = extrude(heart(sc, 0, hcy, 0.55), 1.4, black, { bevel: 0.15 });
    parts.push(at(island, [0, floor + SH - 0.7, sz], [90, 0, 0]));
    // plunger out through the front wall, rubber tip
    parts.push(at(cyl(3, 18, black), [0, floor + 3.4, sz + SL / 2 + 9], [90, 0, 0]));
    parts.push(at(cyl(4, 4, mat.rubber(0x2a2a2a), { r2: 3.6 }), [0, floor + 3.4, sz + SL / 2 + 19], [90, 0, 0]));
    // return spring between the back wall and the slider
    const back = -HL / 2 + wall, sb = sz - SL / 2;
    parts.push(at(spring(2.6, 0.35, 8, sb - back, mat.steel()), [0, floor + 3, back], [90, 0, 0]));
    // follower wire: anchored in a post on the housing floor at the back corner, runs forward over the
    // slider and drops into the track at the notch of the heart (latched)
    const notchZ = sz + hcy + 3.2 * sc;                     // in the track just past the notch of the heart's island
    const yTop = floor + SH + 1.2;
    parts.push(at(cyl(1.6, HH - floor, white), [-7.5, floor + (HH - floor) / 2, back + 3]));
    parts.push(wire([[-7.5, yTop + 1, back + 3], [-7, yTop + 1.2, back + 9], [-3.5, yTop + 1.2, notchZ - 7], [-0.6, yTop + 0.6, notchZ - 2], [0, yTop - 0.4, notchZ - 0.4], [0, floor + SH - 0.9, notchZ]], 0.45, mat.stainless()));
    return group(...parts);
  },
};
