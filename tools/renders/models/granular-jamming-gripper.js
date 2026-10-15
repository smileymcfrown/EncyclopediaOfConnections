// Granular jamming gripper: a latex balloon full of ground coffee under a printed funnel, hanging
// from a small aluminium-extrusion stand. The air has been pumped out, so the bag has set hard
// round a ball it was pressed onto and holds it just above the base. A hose runs from the funnel
// along the arm and down to a small vacuum pump on the base.
const extrusionStrips = (K, len, axis) => {
  // dark slot lines on the four faces of a 20 x 20 aluminium extrusion along `axis` ('x' or 'y')
  const { at, box, mat } = K;
  const dark = mat.blackOxide();
  const out = [];
  for (const [a, b] of [[10.02, 0], [-10.02, 0], [0, 10.02], [0, -10.02]]) {
    const w = a ? [0.4, 6] : [6, 0.4];
    if (axis === 'y') out.push(at(box(w[0], len - 1, w[1], dark, 0.1), [a, 0, b]));
    else out.push(at(box(len - 1, w[0], w[1], dark, 0.1), [0, a, b], [0, 0, 0]));
  }
  return out;
};
export default {
  alt: 'Render of a granular jamming gripper: a latex balloon full of ground coffee, under a printed funnel on a small stand, has set hard round a ball and holds it just above the base, with a hose running to a small vacuum pump.',
  view: { dir: [0.75, 0.42, 1.2], fill: 0.98 },
  build(K) {
    const { group, at, box, cyl, lathe, sphere, torus, wire, mat, THREE } = K;
    const alu = mat.aluminium(), grey = mat.pla(0x5d636b, 30), plateM = mat.pla(0x3a3f46, 1.2);
    // the balloon: dark coffee showing through latex, with a grainy bump
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); g.fillStyle = '#808080'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) {
      const v = 60 + Math.floor(Math.random() * 150);
      g.fillStyle = `rgb(${v},${v},${v})`; g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2.2, 0, 7); g.fill();
    }
    const bump = new THREE.CanvasTexture(c); bump.wrapS = bump.wrapT = THREE.RepeatWrapping; bump.repeat.set(10, 4);
    const latex = new THREE.MeshPhysicalMaterial({ color: 0x4a3122, roughness: 0.42, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.35, bumpMap: bump, bumpScale: 1.2 });

    const T = 6;
    const plate = at(box(170, T, 120, plateM, 2), [-30, T / 2, 0]);
    // the stand: an upright 20 x 20 extrusion at the back left and an arm reaching over the plate
    const H = 162, ax = -82;
    const post = group(at(box(20, H, 20, alu, 0.8), [0, 0, 0]), extrusionStrips(K, H, 'y'));
    const arm = group(at(box(100, 20, 20, alu, 0.8), [0, 0, 0]), extrusionStrips(K, 100, 'x'));
    const stand = group(at(post, [ax, T + H / 2, 0]), at(arm, [ax + 50 - 10 + 10, T + H + 10, 0]),
      at(box(26, 26, 6, grey, 1), [ax, T + H + 10, 13]));          // corner bracket

    // the ball held by the gripper, its bottom 22 mm above the plate
    const rb = 15, yb = T + 22 + rb;
    const ball = at(sphere(rb, mat.plastic(0xd8392b)), [0, yb, 0]);

    // the bag: down from the funnel, bulging out, then pulled in under the ball
    const top = yb + 64;
    const prof = [[21, top], [30, top - 6], [38, top - 18], [41, top - 32], [40, top - 44], [35, top - 54], [27, top - 60], [21, top - 63.5]];
    for (let d = -18; d <= 90; d += 6) {
      const a = (d * Math.PI) / 180;
      prof.push([(rb + 0.6) * Math.cos(a), yb + (rb + 0.6) * Math.sin(a)]);
    }
    const bag = lathe(prof, latex, { seg: 128 });
    // lumpy, set-hard surface: small radial dents
    const geo = bag.children[0].geometry, pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i), r = Math.hypot(x, z);
      if (r < rb + 2 || y > top - 2) continue;
      const a = Math.atan2(z, x);
      const k = 1 + 0.018 * Math.sin(a * 9 + y * 0.31) * Math.sin(y * 0.45 + a * 3) + 0.01 * Math.sin(a * 17 - y * 0.6);
      pos.setX(i, x * k); pos.setZ(i, z * k);
    }
    geo.computeVertexNormals();

    // printed funnel, a band round the balloon neck, the neck tube through the arm, hose barb
    const funnel = lathe([[19, top - 1], [24, top - 1], [26, top + 6], [16, top + 14], [8, top + 18], [0, top + 18]], grey);
    const band = at(torus(23.3, 1.4, mat.rubber(0x161616)), [0, top + 2.5, 0], [90, 0, 0]);
    const neck = at(cyl(7, H + T + 22 - (top + 18), grey), [0, (top + 18 + T + H + 22) / 2, 0]);
    const barb = at(cyl(3, 8, grey, { r2: 2.2 }), [0, T + H + 26, 0]);
    // the hose: from the barb, back along the top of the arm, down the front of the post to a pump
    const hoseM = mat.silicone(0xcfd6dc);
    const yt = T + H + 23.5;
    const hose = wire([
      [0, T + H + 27, 0], [-2, yt + 6, 0], [-14, yt, 0], [-50, yt, 0], [ax + 4, yt, 0], [ax + 4, yt - 2, 14],
      [ax + 2, T + H - 10, 14], [ax + 2, T + 60, 14], [ax + 6, T + 30, 18], [ax + 22, T + 16, 30], [ax + 32, T + 14, 34],
    ], 3.2, hoseM);
    const pump = group(
      at(box(36, 24, 28, mat.plastic(0x1c1c1e), 3), [ax + 52, T + 12, 34]),
      at(cyl(3, 7, grey), [ax + 32, T + 14, 34], [0, 0, 90]),
    );
    return group(plate, stand, ball, bag, funnel, band, neck, barb, hose, pump);
  },
};
