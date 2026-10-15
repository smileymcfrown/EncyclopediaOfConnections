// Air bearing: a round porous-carbon air bearing pad (50 mm) sitting on a granite surface plate,
// with its air hose and the ball that carries the load in the socket on top; a second pad lies
// upside down beside it to show its dark porous face.
function granite(K) {
  const { THREE } = K;
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#3a3c40'; g.fillRect(0, 0, 512, 512);
  let s = 11;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 9000; i++) {
    const v = r();
    g.fillStyle = v < 0.5 ? '#1c1d20' : v < 0.85 ? '#5a5d63' : '#9a9da3';
    g.globalAlpha = 0.5 + 0.5 * r();
    g.fillRect(r() * 512, r() * 512, 1 + 3 * r(), 1 + 3 * r());
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.55, metalness: 0 });
}

// a round pad, face down at y = 0: aluminium housing with a porous carbon face, a ball socket on top
function pad(K, withBall) {
  const { group, at, lathe, cyl, sphere, hex, mat } = K;
  const al = mat.aluminium(), carbon = mat.rubber(0x2b2b2d);
  carbon.roughness = 0.95;
  const housing = lathe([[0, 3], [25, 3], [25, 2.2], [25, 15.4], [24.4, 16], [9, 16], [8, 17.5], [5.2, 17.5], [5.2, 13.5], [0, 13.5]], al);
  const face = at(cyl(23, 3, carbon), [0, 1.5, 0]);
  const rim = at(lathe([[23, 0], [25, 0], [25, 3], [23, 3], [23, 0]], al), [0, 0, 0]);
  const parts = [housing, face, rim];
  // M5 push-in air fitting on the side
  parts.push(at(group(at(hex(8, 4, mat.brass()), [0, 2, 0]), at(cyl(4.5, 9, mat.plastic(0x2a2a2a)), [0, 8.5, 0]),
    at(cyl(3.2, 1.6, mat.plastic(0x2d6fd6)), [0, 13.6, 0])), [25, 9, 0], [0, 0, -90]));
  if (withBall) parts.push(at(sphere(6.35, mat.chrome()), [0, 18.6, 0]));
  return group(parts);
}

export default {
  alt: 'Render of an air bearing: a round aluminium air pad with a dark porous face sits on a speckled granite surface plate, fed by a blue air hose at its side and carrying its load through a steel ball on top; a second pad lies upside down beside it, showing the porous face the air comes out of.',
  view: { dir: [0.5, 0.85, 1.3], fill: 1.0 },
  build(K) {
    const { group, at, box, wire, mat } = K;
    const slab = at(box(150, 36, 104, granite(K), 1.5), [0, 18, 0]);
    const p1 = at(pad(K, true), [-30, 36.02, -14]);
    const p2 = at(pad(K, false), [36, 36.02 + 17.5, 22], [180, 0, 0]);
    // hose from the fitting, curving down onto the plate and away behind it
    const hose = wire([[9.8, 45, -14], [18, 45, -14], [30, 42, -22], [44, 38.5, -36], [56, 38, -48], [62, 34, -55], [64, 16, -58]], 2, mat.plastic(0x2d6fd6));
    return group(slab, p1, p2, hose);
  },
};
