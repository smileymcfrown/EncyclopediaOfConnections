// Servo or motorised latch: a printed box with its front wall cut away. Inside, a blue micro servo
// on a stand turns its white horn, which pushes a steel bolt (via a wire pushrod) through two guide
// blocks and through a screw eye hanging from the closed lid, locking it; a small controller board
// and the servo cable sit on the floor.
export default {
  alt: 'Render of a servo latch: a printed box with its front cut away shows a small blue hobby servo whose white arm pushes a steel bolt, through a wire link, along two guide blocks and through a screw eye hanging from the closed lid, so the lid is locked; a small controller board lies on the floor of the box.',
  kind: 'cross-section',
  view: { dir: [0.35, 0.55, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, torus, extrude, roundRect, wire, mat } = K;
    const shell = mat.pla(0xe7e3d8, 60), cut = mat.pla(0xc9c3b4, 60), blue = mat.plastic(0x2f6fc0), white = mat.nylon(0xf5f3ee), parts = [];
    const W = 130, D = 70, H = 62, t = 4;
    // box: floor, back, two sides (front removed), and the lid on top
    parts.push(at(box(W, t, D, shell, 0.6), [0, t / 2, 0]));
    parts.push(at(box(W, H, t, shell, 0.6), [0, H / 2, -D / 2 + t / 2]));
    for (const s of [-1, 1]) parts.push(at(box(t, H, D, shell, 0.6), [s * (W / 2 - t / 2), H / 2, 0]));
    parts.push(at(box(W + 2, t, D + 2, mat.pla(0xd9673a, 60), 0.6), [0, H + t / 2 + 0.3, 0]));
    // cut faces along the missing front (a thin strip of the cut colour on the floor and side edges)
    parts.push(at(box(W, t, 0.2, cut, 0), [0, t / 2, D / 2 + 0.05]));
    for (const s of [-1, 1]) parts.push(at(box(t, H, 0.2, cut, 0), [s * (W / 2 - t / 2), H / 2, D / 2 + 0.05]));
    // micro servo on a printed stand
    const sx = -45, sz = -14, sy = t + 14;
    parts.push(at(box(30, 14, 16, shell, 0.8), [sx, t + 7, sz]));
    parts.push(at(box(22.5, 22.7, 12, blue, 0.6), [sx, sy + 11.35, sz]));
    parts.push(at(box(32, 2.5, 12, blue, 0.4), [sx, sy + 16, sz]));
    parts.push(at(cyl(6, 4, blue), [sx + 5.5, sy + 24.7, sz]));
    parts.push(at(cyl(2.4, 3, white), [sx + 5.5, sy + 28, sz]));
    // the horn: points towards the bolt
    const shaft = [sx + 5.5, sz], ang = (25 * Math.PI) / 180, hl = 14;
    const tip = [shaft[0] + hl * Math.cos(ang), shaft[1] - hl * Math.sin(ang)];
    const horn = extrude(roundRect(hl + 6, 5.5, 2.7), 1.6, white, { bevel: 0.3 });
    const hornG = group(at(horn, [hl / 2, 0, 0], [0, 0, 0]));
    parts.push(at(group(at(hornG, [0, 0, 0], [90, 0, 0])), [shaft[0], sy + 29.6, shaft[1]], [0, (25), 0]));
    // the bolt: a steel rod sliding in two printed guide blocks fixed to the back wall
    const by = 46, bz = -22;
    parts.push(at(cyl(2.5, 70, mat.zinc()), [21, by, bz], [0, 0, 90]));
    for (const gx of [0, 34]) {
      // local x -> world -z under the turn, so x = 9 reaches back to the wall
      parts.push(at(extrude([[-6, -6], [9.2, -6], [9.2, 8], [-6, 8]], 9, shell, { holes: [{ x: 0, y: 0, r: 2.8 }], bevel: 0.6 }), [gx, by, bz], [0, 90, 0]));
    }
    // pushrod from the horn tip to the end of the bolt (Z-bends at both ends)
    const rodY = sy + 30.6, bEnd = [-14, bz];
    parts.push(wire([[tip[0], rodY - 3, tip[1]], [tip[0], rodY, tip[1]], [tip[0] + 2, rodY + 0.6, tip[1] - 0.6],
      [bEnd[0] - 4, by - 0.5, bEnd[1] + 0.5], [bEnd[0] + 1, by, bEnd[1]], [bEnd[0] + 1, by - 3, bEnd[1]]], 0.6, mat.steel()));
    // screw eye hanging from the lid, with the bolt through it
    const ex = 52;
    parts.push(at(cyl(1.4, 10, mat.zinc()), [ex, H - 5, bz]));
    parts.push(at(torus(4.4, 1.1, mat.zinc()), [ex, by, bz], [0, 90, 0]));
    // controller board and the servo cable
    parts.push(at(box(18, 1.6, 44, mat.plastic(0x1f5b9a), 0.3), [10, t + 0.8, 18], [0, 90, 0]));
    parts.push(at(box(12, 2.2, 7, mat.plastic(0x1a1a1a), 0.3), [12, t + 2.7, 18]));
    for (const [i, c] of [[0, 0x6b3a1e], [1, 0xc0392b], [2, 0xe67e22]]) {
      parts.push(wire([[sx - 11, sy + 8, sz + 2 + i * 1.1 - 1], [sx - 18, sy, sz + 8 + i], [sx - 14, t + 1.5, 14 + i], [sx + 10, t + 1.5, 20 + i * 0.9], [-9, t + 2.2, 18 + i * 0.9]], 0.55, mat.plastic(c)));
    }
    return group(...parts);
  },
};
