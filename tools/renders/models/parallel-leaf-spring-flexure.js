// Parallel leaf-spring flexure: a one-piece 3D-printed flexure stage, a base block and a platform
// joined by two thin equal blades. The platform has been pushed a few millimetres sideways, so the
// blades bend into matching S shapes and the platform stays level.
const T = 1.4, L = 40, D = 4, X0 = 25, BH = 10, PH = 8, W = 22;
const f = (u) => 3 * u * u - 2 * u * u * u;          // the S shape of a blade held square at both ends

function edge(x0, from, to) {                        // points up (or down) one edge of a blade
  const n = 24, pts = [];
  for (let i = 0; i <= n; i++) {
    const u = from + ((to - from) * i) / n;
    pts.push([x0 + D * f(u), BH + L * u]);
  }
  return pts;
}

export default {
  alt: 'Render of a parallel leaf-spring flexure: a one-piece green 3D-printed part, a base block and a platform joined by two thin upright blades; the platform has been pushed a little to one side, the blades bend into matching S shapes and the platform stays level.',
  view: { dir: [0.55, 0.45, 1.3], fill: 0.95 },
  build(K) {
    const { group, at, extrude, THREE, mat } = K;
    const outer = [[-35, 0], [35, 0], [35, BH], ...edge(X0 + T / 2, 0, 1),
      [30 + D, BH + L], [30 + D, BH + L + PH], [-30 + D, BH + L + PH], [-30 + D, BH + L],
      ...edge(-X0 - T / 2, 1, 0), [-35, BH]];
    const inner = [...edge(-X0 + T / 2, 0, 1), ...edge(X0 - T / 2, 1, 0)];
    const shape = new THREE.Shape(outer.map(([x, y]) => new THREE.Vector2(x, y)));
    shape.holes.push(new THREE.Path(inner.map(([x, y]) => new THREE.Vector2(x, y))));
    for (const [x, y] of [[-30, BH / 2], [30, BH / 2], [D, BH + L + PH / 2]]) {
      const h = new THREE.Path(); h.absarc(x, y, 1.7, 0, Math.PI * 2, true); shape.holes.push(h);
    }
    const m = mat.pla(0x1d7f45, 90);
    const part = extrude(shape, W, m, { bevel: 0, curve: 24 });
    const uv = part.geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 30, uv.getY(i) / 30);
    return group(part);
  },
};
