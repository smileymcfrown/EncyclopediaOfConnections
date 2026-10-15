// Tolerance ring: a 16 mm steel shaft standing in an anodised aluminium hub, with the thin wavy
// spring-steel ring half pushed into the gap between them, so its waves show above the hub.
// band(): a thin steel strip with a row of waves, curled into a ring (axis Y), between angles a0
// and a1 (degrees, measured like K.lathe: x = r sin, z = r cos), so it can be cut open or left
// with its gap.
function band(K, { R, t = 0.3, W = 10, n = 18, h, a0, a1 }) {
  const { THREE } = K;
  const NT = 540, NY = 28, pos = [], idx = [];
  const wave = (a) => { const f = (((a * n) / (Math.PI * 2)) % 1 + 1) % 1; return f < 0.62 ? 0.5 * (1 - Math.cos((f / 0.62) * Math.PI * 2)) : 0; };
  const env = (y) => { const u = Math.abs(y) / (W / 2); return u < 0.6 ? 1 : u > 0.74 ? 0 : 0.5 * (1 + Math.cos(((u - 0.6) / 0.14) * Math.PI)); };
  const A0 = (a0 * Math.PI) / 180, A1 = (a1 * Math.PI) / 180;
  for (const side of [1, -1]) for (let j = 0; j <= NY; j++) for (let i = 0; i <= NT; i++) {
    const a = A0 + ((A1 - A0) * i) / NT, y = -W / 2 + (W * j) / NY, r = R + h * wave(a) * env(y) + (side * t) / 2;
    pos.push(r * Math.sin(a), y, r * Math.cos(a));
  }
  const v = (side, i, j) => (side ? (NY + 1) * (NT + 1) : 0) + j * (NT + 1) + i;
  const quad = (a, b, c, d) => idx.push(a, b, c, a, c, d);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NT; i++) {
    quad(v(0, i, j), v(0, i, j + 1), v(0, i + 1, j + 1), v(0, i + 1, j));    // outside
    quad(v(1, i, j), v(1, i + 1, j), v(1, i + 1, j + 1), v(1, i, j + 1));    // inside
  }
  for (let i = 0; i < NT; i++) {                                              // the two edges
    quad(v(0, i, 0), v(0, i + 1, 0), v(1, i + 1, 0), v(1, i, 0));
    quad(v(0, i, NY), v(1, i, NY), v(1, i + 1, NY), v(0, i + 1, NY));
  }
  for (let j = 0; j < NY; j++) {                                              // the two ends
    quad(v(0, 0, j), v(1, 0, j), v(1, 0, j + 1), v(0, 0, j + 1));
    quad(v(0, NT, j), v(0, NT, j + 1), v(1, NT, j + 1), v(1, NT, j));
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = K.mat.stainless(); m.side = THREE.DoubleSide;
  return K.mesh(g, m);
}
export default {
  alt: 'Render of a tolerance ring: a thin band of spring steel with a row of bumps, curled round a steel shaft and half pushed into the gap between the shaft and the bore of an aluminium hub, so its bumps show above the hub; the ring has a small split.',
  view: { dir: [0.7, 0.95, 1.3], fill: 0.95 },
  build(K) {
    const { group, at, lathe, mat } = K;
    const RS = 8, T = 0.3, R0 = RS + T / 2, H = 0.7, BORE = R0 + T / 2 + H;
    const hub = lathe([[BORE + 0.6, 14], [BORE, 13.4], [BORE, 0.6], [BORE + 0.6, 0], [17.4, 0], [18, 0.6], [18, 13.4], [17.4, 14], [BORE + 0.6, 14]], mat.anodised(0x2f5d9a));
    const shaft = lathe([[0, 0], [7.6, 0], [8, 0.4], [8, 39.6], [7.6, 40], [0, 40]], mat.steel());
    const ring = at(band(K, { R: R0, t: T, h: H, a0: 8, a1: 352 }), [0, 14, 0], [0, 120, 0]);
    return group(hub, shaft, ring);
  },
};
