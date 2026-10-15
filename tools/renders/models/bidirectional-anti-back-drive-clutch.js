// Bidirectional anti-back-drive clutch: a roller unit with its input part taken out and set beside it,
// so you look into the fixed ring and see the square output hub with two rollers and a small spring on
// each flat; the input disc's four pins slide into the corner gaps between the rollers.
const RING_R = 23, BORE = 18, DEPTH = 14, ROLLER = 2.5, FLAT = 11;
export default {
  alt: 'Render of a two-way anti-back-drive roller clutch with its input part taken out: inside the fixed ring a square output hub has two steel rollers and a small spring on each flat, and beside it lies the input disc with four pins that slide into the gaps between the rollers, and its own shaft.',
  view: { dir: [0.1, 0.35, 1.0], fill: 1.25, light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, extrude, cyl, spring, circle, box, mat } = K;
    const housing = mat.paint(0x56606b), hubM = mat.castIron(), roll = mat.chrome(), inM = mat.steel(), spr = mat.stainless();
    const parts = [];
    // fixed ring with a closed back and a foot to stand on (axis along Z, front face at z = 0)
    parts.push(at(extrude(circle(RING_R, 96), DEPTH, housing, { holes: [{ x: 0, y: 0, r: BORE }], bevel: 0.6 }), [0, 0, -DEPTH / 2]));
    parts.push(at(extrude(circle(RING_R, 96), 3, housing, { holes: [{ x: 0, y: 0, r: 5.4 }], bevel: 0.5 }), [0, 0, -DEPTH - 1.5]));
    parts.push(at(box(50, 6, DEPTH + 3, housing, 1), [0, -RING_R + 1, -(DEPTH + 3) / 2]));
    parts.push(at(box(30, 8, DEPTH + 3, housing, 0.5), [0, -RING_R + 6, -(DEPTH + 3) / 2]));
    // output hub: a square with cut corners, and its shaft out of the back
    const c = 20;
    const oct = [[FLAT, c - FLAT], [c - FLAT, FLAT], [-(c - FLAT), FLAT], [-FLAT, c - FLAT], [-FLAT, -(c - FLAT)], [-(c - FLAT), -FLAT], [c - FLAT, -FLAT], [FLAT, -(c - FLAT)]];
    parts.push(at(extrude(oct, DEPTH - 1.5, hubM, { bevel: 0.4, holes: [] }), [0, 0, -(DEPTH - 1.5) / 2 - 0.5]));
    parts.push(at(cyl(5, 18, hubM), [0, 0, -DEPTH - 8], [90, 0, 0]));
    // two rollers per flat, touching flat and ring, with a spring pushing them apart into the wedges
    const xr = Math.sqrt((BORE - ROLLER) ** 2 - (FLAT + ROLLER) ** 2) - 0.05;
    for (let k = 0; k < 4; k++) {
      const a = (k * Math.PI) / 2;
      const rot = (x, y) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
      for (const s of [-1, 1]) {
        const [x, y] = rot(FLAT + ROLLER, s * xr);
        parts.push(at(cyl(ROLLER, DEPTH - 2.5, roll), [x, y, -(DEPTH - 2.5) / 2 - 0.6], [90, 0, 0]));
      }
      const [sx, sy] = rot(FLAT + ROLLER, -(xr - ROLLER));
      const sp = spring(1.3, 0.25, 6, 2 * (xr - ROLLER), spr);
      parts.push(at(group(sp), [sx, sy, -DEPTH / 2], [0, 0, (a * 180) / Math.PI]));
    }
    // input part, set down in front of the unit on the rim of its disc: the four pins (which slide
    // into the corner gaps between the rollers) point at the hub, its shaft points away
    const pinR = 16;
    const input = [at(extrude(circle(17, 96), 3, inM, { bevel: 0.5 }), [0, 0, 1.5])];
    for (let k = 0; k < 4; k++) {
      const a = Math.PI / 4 + (k * Math.PI) / 2;
      input.push(at(cyl(1.5, 12, inM), [pinR * Math.cos(a), pinR * Math.sin(a), -6], [90, 0, 0]));
    }
    input.push(at(cyl(5, 16, inM), [0, 0, 3 + 8], [90, 0, 0]));
    parts.push(at(group(input), [50, 17 - RING_R - 2, 16], [0, 60, 0]));
    return group(parts);
  },
};
