// Mechanical metamaterial mechanism: a one-piece flexible 3D print made of a grid of 10 mm square
// cells, fixed at its left end to a grey mounting block. The braced cells (with a diagonal) stay
// rigid; the middle column has no braces, so its cells have leaned over into parallelograms and the
// braced block on the right has dropped down, swinging like the end of a linkage.
const CELL = 10, ROWS = 5, COLS = 5, SHEAR_COL = 2, DROP = 5.5, DEPTH = 18, Y0 = 9;

const node = (i, j) => [i * CELL, Y0 + j * CELL - (i > SHEAR_COL ? DROP : 0)];
export default {
  alt: 'Render of a mechanical metamaterial mechanism: a one-piece flexible 3D print made of a grid of square cells, fixed at the left to a grey block; its braced cells stay square while an unbraced middle column leans over into parallelograms, so the braced block on the right has dropped down.',
  view: { dir: [0.45, 0.35, 1.3], fill: 1.0, light: [-0.4, 1, 0.9] },
  build(K) {
    const { group, at, box, cyl, mat } = K;
    const tpu = mat.pla(0xc9441f, 40), parts = [];
    const wall = (p, q, t = 1.3) => {
      const L = Math.hypot(q[0] - p[0], q[1] - p[1]), a = (Math.atan2(q[1] - p[1], q[0] - p[0]) * 180) / Math.PI;
      return at(box(L, t, DEPTH, tpu, 0.3), [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, 0], [0, 0, a]);
    };
    for (let i = 0; i <= COLS; i++) {
      for (let j = 0; j <= ROWS; j++) {
        const n = node(i, j);
        parts.push(at(cyl(1.0, DEPTH, tpu, { seg: 20 }), [n[0], n[1], 0], [90, 0, 0]));
        if (j < ROWS) parts.push(wall(n, node(i, j + 1)));
        if (i < COLS) {
          parts.push(wall(n, node(i + 1, j)));
          if (j < ROWS && i !== SHEAR_COL) parts.push(wall(node(i, j + 1), node(i + 1, j), 1.1)); // brace
        }
      }
    }
    // the grey mounting block the left end is printed onto
    parts.push(at(box(10, ROWS * CELL + Y0 + 6, DEPTH + 10, mat.pla(0x5d6167, 160), 1), [-5.6, (ROWS * CELL + Y0 + 6) / 2, 0]));
    return group(parts);
  },
};
