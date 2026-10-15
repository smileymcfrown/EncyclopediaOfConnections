// Face ratchet: two printed discs with sloped saw teeth on their facing sides, on a steel shaft,
// pressed together by a coil spring held by a washer and nut. The sliding disc is shown lifted part
// way up the ramps, as it is just before it clicks into the next gap.
const T = 5, H = 3, RI = 4.2, RO = 16, N = 18;   // body thickness, tooth height, bore, outside, teeth

// A disc along +Y from y = 0, with N saw teeth on its top face (ramps rise with the angle).
function sawDisc(K, m) {
  const { THREE, mesh } = K;
  const pos = [];
  const v3 = (r, a, y) => new THREE.Vector3(r * Math.cos(a), y, r * Math.sin(a));
  const tri = (a, b, c, hint) => {
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
    if (n.dot(hint) < 0) [b, c] = [c, b];
    pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  };
  const quad = (a, b, c, d, hint) => { tri(a, b, c, hint); tri(a, c, d, hint); };
  const S = 8, p = (Math.PI * 2) / N;
  for (let k = 0; k < N; k++) {
    for (let j = 0; j < S; j++) {
      const a0 = k * p + (p * j) / S, a1 = k * p + (p * (j + 1)) / S;
      const y0 = T + (H * j) / S, y1 = T + (H * (j + 1)) / S;
      const out0 = new THREE.Vector3(Math.cos(a0), 0, Math.sin(a0));
      quad(v3(RI, a0, y0), v3(RO, a0, y0), v3(RO, a1, y1), v3(RI, a1, y1), new THREE.Vector3(0, 1, 0)); // ramp
      quad(v3(RO, a0, 0), v3(RO, a1, 0), v3(RO, a1, y1), v3(RO, a0, y0), out0);                          // outside
      quad(v3(RI, a0, 0), v3(RI, a1, 0), v3(RI, a1, y1), v3(RI, a0, y0), out0.clone().negate());         // bore
      quad(v3(RI, a0, 0), v3(RO, a0, 0), v3(RO, a1, 0), v3(RI, a1, 0), new THREE.Vector3(0, -1, 0));    // back
    }
    const a = (k + 1) * p;                                                                              // steep face
    quad(v3(RI, a, T), v3(RO, a, T), v3(RO, a, T + H), v3(RI, a, T + H), new THREE.Vector3(-Math.sin(a), 0, Math.cos(a)));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  return mesh(geo, m);
}

export default {
  alt: 'Render of a face ratchet: two 3D-printed discs on a steel shaft with sloped saw teeth on their facing sides, the orange disc pushed against the grey one by a coil spring held by a washer and nut, and lifted part way up the tooth ramps as it is about to click into the next gap.',
  view: { dir: [0.55, 0.55, 1.25], fill: 0.95 },
  build(K) {
    const { group, at, cyl, tube, hex, spring, mat } = K;
    const lift = 1.6;                                    // how far the sliding disc has ridden up the ramps
    const a = sawDisc(K, mat.pla(0x6b7178, 50));
    const bTop = 2 * T + H + lift;
    const b = at(group(sawDisc(K, mat.pla(0xe0762b, 50))), [0, bTop, 0], [180, 0, 0]);
    const shaft = at(cyl(4, 54, mat.steel()), [0, 15, 0]);
    const spr = at(spring(8.5, 0.9, 5, 18, mat.stainless()), [0, bTop, 0]);
    const washer = at(tube(10, 4.2, 1.6, mat.zinc()), [0, bTop + 18.8, 0]);
    const nut = at(hex(13, 6.5, mat.zinc(), 4.2), [0, bTop + 19.6 + 3.25, 0]);
    return at(group(a, b, shaft, spr, washer, nut), [0, 0, 0], [0, 0, -90]);
  },
};
