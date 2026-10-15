// Soft pneumatic bending actuator: a cast silicone PneuNet finger lying on its side, pumped up so
// that its row of air chambers has swollen and pushed apart, curling the finger round towards its
// flat, stretch-resistant base layer. Its root is clamped in a printed mount with an air tube.
const N = 9, PITCH = 10.5, WALL = 2.2, H0 = 4.5, H1 = 17, W = 16, TAIL = 6, R = 40;
const LEN = TAIL + N * PITCH + 2;

// side outline (s, h) of one chamber: walls up from the base layer, a swollen rounded top
function chamber(s0, s1) {
  const pts = [[s0, H0 - 0.5], [s1, H0 - 0.5]];
  for (let i = 0; i <= 20; i++) {
    const a = (i / 20) * Math.PI, sm = (s0 + s1) / 2, hw = (s1 - s0) / 2;
    pts.push([sm + hw * Math.cos(a) * 1.08, H1 - 4 + 4 * Math.pow(Math.sin(a), 0.6)]);
  }
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
  view: { dir: [0.3, 1.2, 0.95], fill: 1.12, light: [-0.4, 1, 0.5] },
  build(K) {
    const { group, at, extrude, box, wire, mesh, mat, THREE } = K;
    const sil = mat.silicone(0x3f9fb8);
    sil.transmission = 0.08; sil.roughness = 0.5;
    const bendMesh = (m) => {
      const p = m.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) { const [x, y] = bend(p.getX(i), p.getY(i)); p.setXY(i, x, y); }
      m.geometry.computeVertexNormals();
      return m;
    };
    // the flat base layer (with the stretch-resistant sheet inside), finely divided so it can bend
    const baseGeo = new THREE.BoxGeometry(LEN, H0, W, LEN * 2, 2, 2);
    baseGeo.translate(LEN / 2, H0 / 2, 0);
    const g = group(bendMesh(mesh(baseGeo, sil)));
    for (let k = 0; k < N; k++) {
      const s0 = TAIL + k * PITCH;
      g.add(bendMesh(extrude(chamber(s0, s0 + PITCH - WALL), W, sil, { bevel: 1.2, curve: 12 })));
    }
    const finger = at(group(g), [0, W / 2, 0], [90, 0, 0]);
    // printed mount clamping the root, and the air tube
    const mount = at(box(16, W + 8, 26, mat.pla(0x55595f, 40), 1.5), [-5, (W + 8) / 2, 8.5]);
    const tube = wire([[-12, W / 2, 8], [-24, W / 2, 8], [-38, W / 2, 2], [-52, W / 2, -10], [-60, W / 2, -26]], 2.0, mat.plastic(0x2f6fc9));
    return group(finger, mount, tube);
  },
};
