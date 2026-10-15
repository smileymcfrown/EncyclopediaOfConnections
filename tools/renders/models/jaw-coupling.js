// Jaw coupling: the small aluminium "spider" coupler used between a stepper motor and a leadscrew,
// pulled apart along its shafts so the three jaws on each hub and the red rubber spider between them
// can be seen.
const RO = 12.5, RS = 6.5, JAW = 8;       // hub radius, spider ring radius, jaw length (mm)

// An annular sector (radius ri..ro, angles a0..a1 in degrees) extruded along +Y from y = 0.
function sector(K, ri, ro, a0, a1, len, m) {
  const { at, group, extrude } = K;
  const n = 16, pts = [];
  for (let i = 0; i <= n; i++) { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; pts.push([ro * Math.cos(a), ro * Math.sin(a)]); }
  for (let i = n; i >= 0; i--) { const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; pts.push([ri * Math.cos(a), ri * Math.sin(a)]); }
  return group(at(extrude(pts, len, m, { bevel: 0.5 }), [0, len / 2, 0], [-90, 0, 0]));
}

// A hub: body from y = 0 to `body`, three jaws from there to body + JAW, a bore and a set screw.
function hub(K, body, bore, rot, m) {
  const { at, group, lathe, cyl, mat } = K;
  const g = group(lathe([[bore, 0], [RO - 0.6, 0], [RO, 0.6], [RO, body], [bore, body], [bore, 0]], m));
  for (let k = 0; k < 3; k++) g.add(sector(K, RS + 0.4, RO, rot + k * 120 - 21, rot + k * 120 + 21, JAW, m).translateY(body));
  g.add(at(cyl(1.5, 2.2, mat.blackOxide(), { seg: 6 }), [0, body / 2, RO - 0.8], [90, 0, 0]));   // set screw (hex socket)
  g.add(at(cyl(1.6, 0.4, mat.blackOxide()), [0, body / 2, RO - 0.15], [90, 0, 0]));
  return g;
}

export default {
  alt: 'Render of a jaw coupling pulled apart along its shafts: two aluminium hubs, one on a plain motor shaft and one on a leadscrew, each with three stubby jaws on its face, and a red rubber star-shaped spider between them whose six legs fill the gaps between the jaws.',
  view: { dir: [0.3, 0.5, 1.2], fill: 1.0 },
  build(K) {
    const { group, at, cyl, threaded, mat } = K;
    const alu = new K.THREE.MeshPhysicalMaterial({ color: 0xa9aeb4, metalness: 1, roughness: 0.48 }), red = mat.rubber(0xc0302a);
    const a = hub(K, 10, 2.5, 0, alu);                               // motor side, 5 mm bore
    const spider = group(at(K.tube(RS + 0.4, 3, JAW, red), [0, JAW / 2, 0]),
      ...Array.from({ length: 6 }, (_, k) => sector(K, RS, RO - 0.3, k * 60 + 30 - 8.5, k * 60 + 30 + 8.5, JAW, red)));
    const b = at(group(hub(K, 10, 4, 60, alu)), [0, 10 + JAW + 6 + JAW + 6 + 10 + JAW, 0], [180, 0, 0]);
    const s = at(spider, [0, 10 + JAW + 6, 0]);
    const motorShaft = at(cyl(2.5, 26, mat.steel()), [0, -5, 0]);
    const lead = at(group(threaded(4, 2, 32, mat.stainless())), [0, 10 + JAW + 6 + JAW + 6 + 10 + JAW - 9, 0]);
    return at(group(a, s, b, motorShaft, lead), [0, 0, 0], [0, 0, -90]);
  },
};
