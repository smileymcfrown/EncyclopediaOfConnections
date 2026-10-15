// Flexible beam coupling: a 20 mm aluminium beam coupling (5 mm to 8 mm bores, a spiral slot cut
// through its middle, two grub screws per end) joining a NEMA 17 stepper motor shaft to a T8
// leadscrew, as on the Z axis of a desktop 3D printer.
const L = 25, RO = 10, Y0 = 6.5, P = 3, S = 0.9, N = 3, Y1 = Y0 + P * (N + 1);

// a ring segment swept round the axis between two heights that depend on the angle (a helical strip)
function strip(K, ri, ro, t0, t1, lower, upper, m) {
  const { THREE, mesh } = K;
  const segs = Math.ceil(((t1 - t0) / (Math.PI * 2)) * 120);
  const pos = [], idx = [];
  const face = (corner) => {               // corner(t, a) -> [x, y, z]; a: 0..1 across the face
    const base = pos.length / 3;
    for (let i = 0; i <= segs; i++) {
      const t = t0 + ((t1 - t0) * i) / segs;
      for (const a of [0, 1]) pos.push(...corner(t, a));
    }
    for (let i = 0; i < segs; i++) {
      const v = base + i * 2;
      idx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
    }
  };
  const lo = (t) => lower(t), hi = (t) => Math.max(lower(t), upper(t));
  const P3 = (r, t, y) => [r * Math.cos(t), y, -r * Math.sin(t)];
  face((t, a) => P3(ro, t, a ? hi(t) : lo(t)));            // outside
  face((t, a) => P3(ri, t, a ? lo(t) : hi(t)));            // inside
  face((t, a) => P3(a ? ri : ro, t, hi(t)));              // upper edge
  face((t, a) => P3(a ? ro : ri, t, lo(t)));              // lower edge
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return mesh(g, m);
}

function grub(K, at3, rotY) {            // a black grub screw sitting in a tapped hole
  const { group, at, cyl, hex, mat } = K;
  const dark = mat.rubber(0x111111);
  return at(group(at(cyl(2.05, 0.6, mat.blackOxide()), [0, 0, 0]), at(hex(2, 0.4, dark), [0, 0.25, 0])), at3, [0, rotY, -90]);
}

function coupling(K) {
  const { group, at, lathe, mat } = K;
  const al = mat.aluminium();
  al.color.setHex(0xb5b9be); al.roughness = 0.3;
  const tw = (t) => (P * t) / (Math.PI * 2);
  const parts = [
    lathe([[2.5, 0], [RO - 0.5, 0], [RO, 0.5], [RO, Y0], [4, Y0], [4, 3], [2.5, 3], [2.5, 0]], al),
    lathe([[4, Y1], [RO, Y1], [RO, L - 0.5], [RO - 0.5, L], [4, L], [4, Y1]], al),
    strip(K, 4, RO, 0, Math.PI * 2, () => Y0, (t) => Y0 + tw(t) - S, al),
    strip(K, 4, RO, 0, Math.PI * 2 * N, (t) => Y0 + tw(t), (t) => Y0 + tw(t) + P - S, al),
    strip(K, 4, RO, Math.PI * 2 * (N - 1), Math.PI * 2 * N, (t) => Y0 + tw(t) + P, () => Y1, al),
  ];
  // two grub screws per end, 90 degrees apart, facing the camera side
  for (const y of [3.5, L - 3.5]) for (const a of [-160, -70]) {
    const r = (a * Math.PI) / 180;
    parts.push(grub(K, [RO * Math.cos(r), y, -RO * Math.sin(r)], a));
  }
  return group(parts);
}

function stepper(K) {
  const { group, at, extrude, cyl, box, mat } = K;
  const w = 42.3 / 2, c = 4;
  const oct = [[-w + c, -w], [w - c, -w], [w, -w + c], [w, w - c], [w - c, w], [-w + c, w], [-w, w - c], [-w, -w + c]];
  const black = mat.anodised(0x1e1e20), silver = mat.aluminium();
  // body along Y (front face at y = 40), as a stack: back cap, laminations, front cap
  const slab = (h, m, y, inset = 0) => at(extrude(oct.map(([x, z]) => [x * (1 - inset), z * (1 - inset)]), h, m, { bevel: 0.5 }), [0, y + h / 2, 0], [90, 0, 0]);
  const parts = [slab(9, black, 0), slab(22, silver, 9, 0.006), slab(9, black, 31)];
  parts.push(at(cyl(11, 2, silver), [0, 41, 0]));                     // centring boss
  const shaft = at(cyl(2.5, 24, mat.stainless()), [0, 52, 0]);
  parts.push(shaft);
  for (const [x, z] of [[-15.5, -15.5], [15.5, -15.5], [15.5, 15.5], [-15.5, 15.5]]) parts.push(at(cyl(1.5, 0.3, mat.rubber(0x0a0a0a)), [x, 40.05, z]));
  parts.push(at(box(16, 7, 6, mat.plastic(0xf2f0ea), 0.6), [0, 4.5, w + 2.5]));   // cable connector
  return group(parts);
}

export default {
  alt: 'Render of a flexible beam coupling: a short aluminium tube with a spiral slot cut through its middle and small grub screws at each end joins the shaft of a black stepper motor to a threaded leadscrew, as on a 3D printer.',
  view: { dir: [0.4, 0.5, 1.3], fill: 1.12, target: [-6, 0, 0] },
  build(K) {
    const { group, at, threaded, mat } = K;
    // build standing up (motor shaft along +Y), then lay it on its side, shaft along +X
    const motor = stepper(K);
    const cp = at(coupling(K), [0, 42 + 24 - 12, 0]);
    const screw = at(threaded(4, 2, 40, mat.stainless()), [0, 42 + 24 - 12 + 12.5, 0]);
    return at(group(motor, cp, screw), [0, 0, 0], [0, 0, -90]);
  },
};
