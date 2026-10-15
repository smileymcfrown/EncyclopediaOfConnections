// Ratchet-tooth torque limiter: a 3D-printed torque-limiting knob taken apart. On the left the
// driven part, a ring of lopsided face teeth (gentle slope one way, steep face the other) round a
// threaded stud; on the right the knob shell lies upside down, showing the matching ring of teeth
// inside it; in front, the spring that presses the two sets of teeth together.
const NT = 12, TH = 2.6;

// a ring of sawtooth face teeth from y = 0: a gentle ramp up, then a sheer drop (flat-shaded)
function teeth(K, ri, ro, m, dir = 1) {
  const { THREE, mesh } = K;
  const ts = [], per = 14, eps = 0.002;
  for (let k = 0; k < NT; k++) {
    const a0 = (k / NT) * Math.PI * 2, a1 = ((k + 1) / NT) * Math.PI * 2;
    for (let i = 0; i < per; i++) ts.push([a0 + ((a1 - eps - a0) * i) / (per - 1), (TH * i) / (per - 1)]);
  }
  ts.push([Math.PI * 2, 0]);
  const pos = [];
  const P3 = (r, t, y) => [r * Math.cos(dir * t), y, -r * Math.sin(dir * t)];
  const quad = (a, b, c, d) => pos.push(...a, ...b, ...c, ...a, ...c, ...d);
  for (let i = 0; i < ts.length - 1; i++) {
    const [t0, h0] = ts[i], [t1, h1] = ts[i + 1];
    quad(P3(ro, t0, 0), P3(ro, t1, 0), P3(ro, t1, 1 + h1), P3(ro, t0, 1 + h0));          // outside
    quad(P3(ri, t1, 0), P3(ri, t0, 0), P3(ri, t0, 1 + h0), P3(ri, t1, 1 + h1));          // inside
    quad(P3(ro, t0, 1 + h0), P3(ro, t1, 1 + h1), P3(ri, t1, 1 + h1), P3(ri, t0, 1 + h0)); // tooth face
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  const o = mesh(g, m);
  m.side = THREE.DoubleSide;
  return o;
}
// a scalloped (fluted) grip outline
function fluted(r, n, depth) {
  const pts = [];
  for (let i = 0; i < n * 8; i++) {
    const a = (i / (n * 8)) * Math.PI * 2;
    pts.push([(r - depth * Math.pow(Math.sin((a * n) / 2), 8)) * Math.cos(a), (r - depth * Math.pow(Math.sin((a * n) / 2), 8)) * Math.sin(a)]);
  }
  return pts;
}

export default {
  alt: 'Render of a ratchet-tooth torque limiter: a 3D-printed torque-limiting knob taken apart, with an orange driven part carrying a ring of lopsided sawtooth teeth round a threaded stud, the grey knob shell lying upside down beside it with the matching teeth inside, and the coil spring that presses them together.',
  view: { dir: [0.3, 1.0, 1.05], fill: 1.05 },
  build(K) {
    const { group, at, cyl, extrude, threaded, spring, mat } = K;
    const orange = mat.pla(0xe0762a, 60), grey = mat.pla(0x4a4d55, 60);
    // driven part
    const driven = group(
      at(cyl(16, 4, orange), [0, 2, 0]),
      at(teeth(K, 6.5, 16, mat.pla(0xe0762a, 60)), [0, 3, 0]),
      at(cyl(6.5, 6.6, orange), [0, 3.3, 0]),
      at(threaded(3, 1, 26, mat.zinc()), [0, 4, 0]),
    );
    // knob shell, upside down: a closed fluted cup with teeth on its floor, pointing the other way
    const knob = group(
      at(extrude(fluted(22, 12, 1.8), 4, grey, { bevel: 0.8 }), [0, 2, 0], [90, 0, 0]),
      at(extrude(fluted(22, 12, 1.8), 12, grey, { bevel: 0.8, holes: [{ x: 0, y: 0, r: 17 }] }), [0, 4 + 6 - 0.8, 0], [90, 0, 0]),
      at(teeth(K, 7, 16.8, mat.pla(0x4a4d55, 60), -1), [0, 3, 0]),
    );
    const spr = at(spring(7, 1.0, 5, 18, mat.steel()), [8, 8, 32], [0, 0, -90]);
    return group(at(driven, [-30, 0, 0]), at(knob, [30, 0, 0]), spr);
  },
};
