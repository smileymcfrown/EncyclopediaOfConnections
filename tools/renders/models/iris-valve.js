// Iris valve: a fabric sleeve clamped between a fixed top ring (held up on three posts from a base
// ring) and a bottom ring with a lever that turns. The bottom ring has been turned most of the
// way, so the sleeve is twisted into a narrow waist that has nearly closed.
const R = 46;                                  // sleeve radius (on the spigots)
const Y0 = 20, Y1 = 84;                        // the twisted part runs from Y0 to Y1
const PHI = (150 * Math.PI) / 180;             // how far the bottom ring has been turned


function sleeveGeometry(THREE) {
  const NU = 160, rows = [];
  // bottom cuff on the spigot, the twisted part, top cuff
  rows.push([Y0 - 13, 0]); rows.push([Y0, 0]);
  for (let i = 1; i < 60; i++) rows.push([Y0 + ((Y1 - Y0) * i) / 60, i / 60]);
  rows.push([Y1, 1]); rows.push([Y1 + 13, 1]);
  const pos = [], uv = [], idx = [];
  rows.forEach(([y, v], j) => {
    for (let i = 0; i <= NU; i++) {
      const t = (i / NU) * Math.PI * 2;
      const b = [R * Math.cos(t + PHI), R * Math.sin(t + PHI)], a = [R * Math.cos(t), R * Math.sin(t)];
      const x = b[0] + (a[0] - b[0]) * v, z = b[1] + (a[1] - b[1]) * v;
      pos.push(x, y, z); uv.push(i / NU, y / 110);
    }
  });
  for (let j = 0; j < rows.length - 1; j++) {
    for (let i = 0; i < NU; i++) {
      const a = j * (NU + 1) + i, b = a + NU + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
export default {
  alt: 'Render of an iris valve: a fabric sleeve held between a fixed top ring on three posts and a bottom ring with a lever; the bottom ring has been turned, twisting the sleeve into a narrow hourglass waist that has nearly closed.',
  view: { dir: [0.5, 0.7, 1.0], fill: 0.95 },
  build(K) {
    const { group, at, mesh, tube, cyl, mat, THREE } = K;
    // canvas cloth: a fine weave with a few darker seams running up the sleeve (they show the twist)
    const c = document.createElement('canvas'); c.width = 1024; c.height = 256;
    const g = c.getContext('2d'); g.fillStyle = '#e6dcc4'; g.fillRect(0, 0, 1024, 256);
    g.globalAlpha = 0.18; g.fillStyle = '#6b5a3a';
    for (let i = 0; i < 1024; i += 3) g.fillRect(i, 0, 1, 256);
    for (let j = 0; j < 256; j += 3) g.fillRect(0, j, 1024, 1);
    g.globalAlpha = 0.8; g.fillStyle = '#9c8458';
    for (let k = 0; k < 12; k++) g.fillRect(Math.round(k * 1024 / 12) + 40, 0, 6, 256);
    const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
    const fabric = new THREE.MeshPhysicalMaterial({ map, roughness: 0.95, sheen: 0.5, sheenColor: new THREE.Color('#e6dcc4'), side: THREE.DoubleSide });
    const sleeve = mesh(sleeveGeometry(THREE), fabric);

    const ringTop = mat.pla(0x5d636b, 20), ringBot = mat.pla(0xe4782d, 20), steel = mat.stainless();
    // bottom (turning) ring: flange plus spigot the sleeve is clamped onto; a lever with a knob
    const botFlange = at(tube(R + 16, R - 3, 7, ringBot), [0, 3.5, 0]);
    const botSpigot = at(tube(R - 0.2, R - 3, 14, ringBot), [0, 7 + 6.5, 0]);
    const lever = at(group(at(K.box(46, 7, 12, ringBot, 2), [R + 16 + 20, 3.5, 0]),
      at(cyl(6, 18, mat.plastic(0x1c1c1e)), [R + 16 + 38, 7 + 9, 0])), [0, 0, 0], [0, -20, 0]);
    // fixed frame: a base ring under the turning ring and three posts up to the top ring
    const frame = [at(tube(R + 24, R + 10, 4, ringTop), [0, -2, 0])];
    for (const d of [110, 230, 330]) {
      const a = (d * Math.PI) / 180;
      frame.push(at(cyl(4, Y1 + 13 + 7 + 4, ringTop), [(R + 20) * Math.cos(a), (Y1 + 13 + 7 - 4) / 2, (R + 20) * Math.sin(a)]));
    }
    // top (fixed) ring
    const topFlange = at(tube(R + 25, R - 3, 6, ringTop), [0, Y1 + 13 + 3, 0]);
    const topSpigot = at(tube(R - 0.2, R - 3, 14, ringTop), [0, Y1 + 6.5, 0]);
    // clamp bands round the sleeve cuffs
    const band1 = at(tube(R + 1.6, R + 0.3, 6, steel), [0, Y0 - 5.5, 0]);
    const band2 = at(tube(R + 1.6, R + 0.3, 6, steel), [0, Y1 + 5.5, 0]);
    // screw blocks on the bands
    const lug1 = at(K.box(6, 6, 7, steel, 1), [0, Y0 - 5.5, R + 3]);
    const lug2 = at(K.box(6, 6, 7, steel, 1), [0, Y1 + 5.5, R + 3]);

    return group(sleeve, frame, botFlange, botSpigot, lever, topFlange, topSpigot, band1, band2, lug1, lug2);
  },
};
