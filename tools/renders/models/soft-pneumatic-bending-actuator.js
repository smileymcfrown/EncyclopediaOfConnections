// Soft pneumatic bending actuator: a cast silicone PneuNet finger lying on its side, pumped up so
// that its row of air chambers has swollen and pushed apart, curling the finger round towards its
// flat, stretch-resistant base layer. Its root is clamped in a printed mount with an air tube.
const N = 9, PITCH = 10.5, WALL = 2.2, H0 = 4.5, H1 = 17, W = 16, TAIL = 6, R = 26;
const LEN = TAIL + N * PITCH + 2;

// side outline (s along the finger, h up from the base), densely spaced so it can be bent
function outline() {
  const pts = [];
  for (let s = 0; s <= LEN; s += 1) pts.push([s, 0]);                // base (stays the same length)
  pts.push([LEN, 2.5], [LEN, H0]);
  for (let k = N - 1; k >= 0; k--) {                                  // chambers, from the tip back
    const s0 = TAIL + k * PITCH, s1 = s0 + PITCH - WALL;
    pts.push([s1, H0 + 0.6]);
    for (let i = 0; i <= 16; i++) {                                   // swollen, rounded chamber top
      const a = (i / 16) * Math.PI, sm = (s0 + s1) / 2, hw = (s1 - s0) / 2;
      pts.push([sm + hw * Math.cos(a) * 1.08, H1 - 4 + 4 * Math.pow(Math.sin(a), 0.6)]);
    }
    pts.push([s0, H0 + 0.6]);
  }
  pts.push([TAIL - 2, H0], [0, H0], [0, 2.5]);
  return pts;
}
// bend: the base line h = 0 keeps its length and wraps round a circle of radius R below it
function bend(s, h) {
  if (s <= TAIL) return [s, h];
  const a = (s - TAIL) / R;
  return [TAIL + (R + h) * Math.sin(a), -R + (R + h) * Math.cos(a)];
}
export default {
  alt: 'Render of a soft pneumatic bending actuator: a pale blue cast-silicone finger lying on its side, its row of swollen air chambers pushed apart so the finger curls round towards its flat base layer, with its root held in a grey printed mount fed by a blue air tube.',
  view: { dir: [0.2, 1.4, 0.75], fill: 1.0, light: [-0.4, 1, 0.5] },
  build(K) {
    const { group, at, extrude, box, wire, mat } = K;
    const sil = mat.silicone(0x9fd3df);
    sil.transmission = 0.15; sil.roughness = 0.5;
    const g = extrude(outline(), W, sil, { bevel: 1.2, curve: 12 });
    // the extrusion is (s, h) in X, Y; bend it, then lay it on its side
    const p = g.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) { const [x, y] = bend(p.getX(i), p.getY(i)); p.setXY(i, x, y); }
    g.geometry.computeVertexNormals();
    const finger = at(group(g), [0, W / 2, 0], [90, 0, 0]);
    // printed mount clamping the root, and the air tube
    const mount = at(box(16, W + 8, 26, mat.pla(0x55595f, 40), 1.5), [-5, (W + 8) / 2, 8.5]);
    const tube = wire([[-12, W / 2, 8], [-24, W / 2, 8], [-38, W / 2, 2], [-52, W / 2, -10], [-60, W / 2, -26]], 2.0, mat.plastic(0x2f6fc9));
    return group(finger, mount, tube);
  },
};
