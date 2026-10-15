// Rigid chain actuator, in its everyday form, a window chain actuator: a slim aluminium housing
// with a stainless steel chain pushed out of the middle of its long side, the links locked into a
// straight, stiff bar that holds itself out in the air, ending in a bracket for the window.
const P = 10;          // chain pitch
const H = 34, D = 30;  // housing height and depth

export default {
  alt: 'Render of a rigid chain actuator of the kind that opens windows: a slim aluminium box with a stainless steel chain sticking straight out of the middle of its side, its links locked into a stiff straight bar held out in the air, ending in a mounting bracket; a power cable leaves one end.',
  view: { dir: [1.0, 0.62, 0.62], fill: 1.22, target: [14, 0, -12] },
  build(K) {
    const { group, at, box, cyl, wire, mat, extrude } = K;
    const alu = mat.anodised(0xaab0b6), black = mat.plastic(0x1e1e20), ss = mat.steel(), zinc = mat.zinc();
    const L = 200, yc = H / 2;
    const parts = [
      at(box(L, H, D, alu, 4), [0, yc, 0]),
      at(box(8, H + 1, D + 1, black, 3), [-L / 2 - 3, yc, 0]),
      at(box(8, H + 1, D + 1, black, 3), [L / 2 + 3, yc, 0]),
      // the plastic nose the chain comes out of
      at(box(26, 26, 6, black, 2), [0, yc, D / 2 + 2]),
    ];
    // the chain: pins along the bottom edge, plates above them whose ends butt together so it can't sag
    const n = 14, z0 = D / 2 + 3, py = yc - 6;
    for (let i = 0; i <= n; i++) {
      const z = z0 + i * P;
      parts.push(at(cyl(2.0, 16.6, ss), [0, py, z], [0, 0, 90]));
      if (i === n) break;
      const outer = i % 2 === 0, x = outer ? 6.6 : 4.9;
      for (const s of [-1, 1]) parts.push(at(box(1.8, 16, P - 0.25, ss, 0.6), [s * x, py + 5.6, z + P / 2]));
    }
    // end bracket on the last pin
    const zEnd = z0 + n * P;
    parts.push(at(box(18, 20, 12, zinc, 2), [0, yc, zEnd + 5]));
    parts.push(at(extrude([[-22, -3], [22, -3], [22, 3], [-22, 3]], 3, zinc, { holes: [{ x: -15, y: 0, r: 2.2 }, { x: 15, y: 0, r: 2.2 }] }), [0, yc, zEnd + 12.5]));
    // power cable
    parts.push(wire([[-L / 2 - 7, yc - 6, 0], [-L / 2 - 16, yc - 8, 0], [-L / 2 - 22, 2.6, 4], [-L / 2 - 34, 2.6, 10]], 2.6, mat.rubber(0xd9d9db)));
    return group(parts);
  },
};
