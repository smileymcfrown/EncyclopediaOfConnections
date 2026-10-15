// Click-pen mechanism: a retractable ballpoint with its tip out, its clear lower barrel showing the
// refill and return spring, and its coloured upper barrel cut open to show the push button's saw
// teeth, the toothed rotator sitting on the refill, and the ribs inside the tube that catch it.
// teeth round a ring (a crown): n saw teeth, ring radii rIn..rOut, height h, pointing +y (or -y)
function crown(K, rIn, rOut, n, h, y, m, down = false, skip = null) {
  const { group, at, extrude } = K;
  const g = group();
  const rm = (rIn + rOut) / 2, w = (2 * Math.PI * rm) / n;
  for (let i = 0; i < n; i++) {
    const th = (i / n) * 360;
    if (skip && skip(th)) continue;
    const tri = down ? [[-w / 2, 0], [w / 2, 0], [w / 2, -h]] : [[-w / 2, 0], [w / 2, 0], [w / 2, h]];
    const t = extrude(tri, rOut - rIn, m, { bevel: 0.05 });
    const a = (th * Math.PI) / 180;
    g.add(at(t, [rm * Math.sin(a), y, rm * Math.cos(a)], [0, th, 0]));
  }
  return g;
}
export default {
  alt: 'Render of a click-pen mechanism: a retractable ballpoint pen with its tip out, the clear lower barrel showing the ink refill and the return spring, and the blue upper barrel cut open to show the push button with saw teeth on its end, the white toothed rotator sitting on top of the refill, and the ribs inside the tube that catch the rotator.',
  kind: 'cross-section',
  view: { dir: [0.45, 0.8, 0.9], fill: 2.6, target: [44, 0, 0] },
  build(K) {
    const { group, at, lathe, tube, cyl, sphere, box, spring, wire, mat, THREE } = K;
    const cut = 90;
    const blue = mat.plastic(0x2c5aa8), blueCut = mat.cut(0x1f4180), white = mat.nylon(0xf4f2ec);
    const clear = new THREE.MeshPhysicalMaterial({ color: 0xeef4ff, metalness: 0, roughness: 0.08, transmission: 0.9, thickness: 1.2, ior: 1.45, transparent: true, opacity: 0.55 });
    const parts = [];
    // lower barrel: clear tapered nose and tube
    parts.push(lathe([[1.9, 0], [2.3, 0], [4.6, 12], [5, 14], [5, 80], [4.1, 80], [4.1, 14], [3.8, 12], [1.9, 1], [1.9, 0]], clear));
    // the refill: brass tip and ball, white ink tube with blue ink inside
    parts.push(at(lathe([[0, -4], [0.45, -4], [1.4, 1], [1.4, 4], [0, 4]], mat.brass()), [0, 0, 0]));
    parts.push(at(sphere(0.4, mat.chrome()), [0, -4.1, 0]));
    parts.push(at(tube(1.55, 1.1, 108, clear), [0, 58, 0]));
    parts.push(at(cyl(1.08, 90, mat.plastic(0x1b2f8a)), [0, 50, 0]));
    // the return spring round the refill, near the nose
    parts.push(at(spring(2.6, 0.28, 14, 18, mat.stainless()), [0, 12.5, 0]));
    parts.push(at(tube(2.4, 1.56, 1.2, white), [0, 31, 0]));     // collar on the refill the spring pushes on
    // upper barrel: coloured, cut open, with ribs inside (alternate long and short)
    parts.push(lathe([[4.1, 80], [5, 80], [5, 128], [4.4, 129], [3.9, 129], [3.9, 82], [4.1, 82], [4.1, 80]], blue, { cut, cutMat: blueCut }));
    for (let i = 0; i < 8; i++) {
      const th = 22.5 + i * 45;
      if (th > 315 || th < 45) continue;                          // ribs in the cut-away quarter are gone
      const long = i % 2 === 0, len = long ? 24 : 17;
      const a = (th * Math.PI) / 180, r = 3.45;
      parts.push(at(box(0.9, len, 1.3, blue, 0.15), [r * Math.sin(a), 128 - len / 2, r * Math.cos(a)], [0, th, 0]));
    }
    // the rotator: white cylinder on top of the refill, lugs that ride the ribs, saw teeth on top
    parts.push(at(cyl(2.9, 7, white), [0, 115.5, 0]));
    for (let i = 0; i < 4; i++) {
      const th = i * 90 + 45, a = (th * Math.PI) / 180;
      parts.push(at(box(1.4, 3, 1.2, white, 0.2), [3.15 * Math.sin(a), 117.5, 3.15 * Math.cos(a)], [0, th, 0]));
    }
    parts.push(crown(K, 1.2, 2.9, 8, 1.6, 119, white));
    // the push button: blue plunger with matching saw teeth on its lower end, poking out of the top
    parts.push(crown(K, 1.6, 3.2, 8, 1.6, 122.2, blue, true));
    parts.push(lathe([[0, 122.2], [3.2, 122.2], [3.2, 129.5], [3.5, 130], [3.5, 141], [2.6, 143], [0, 143.3]], blue));
    // pocket clip on the side away from the cut
    parts.push(wire([[0, 124, -5.2], [0, 126, -5.6], [0, 122, -6.4], [0, 98, -6.2], [0, 94, -5.4]], 0.55, mat.chrome()));
    const pen = group(...parts);
    // lay the pen down along x (tip at the left), turned on its axis so the cut faces up and forward
    pen.rotation.y = (-50 * Math.PI) / 180;
    const laid = group(pen);
    laid.rotation.z = -Math.PI / 2;
    return group(laid);
  },
};
