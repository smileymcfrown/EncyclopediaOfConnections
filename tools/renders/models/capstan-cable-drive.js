// Capstan cable drive: a 3D-printed drive of the kind makers build for robot joints. A small
// aluminium drum on a stepper motor's shaft has a rope wound four turns round it; both rope ends
// run along the rim of a large printed drum sector and are clamped at its two ends (about 8.5:1).
const R = 72, rc = 8.5;            // cable-centre radius on the big drum and on the small drum
const H1 = 50.4, H2 = 57.6, N = 4; // cable heights where it meets the small drum, and turns round it
const d2r = Math.PI / 180;

function cablePath() {
  const drum = (t, h) => [R * Math.cos(t * d2r), h, R * Math.sin(t * d2r)];
  const pts = [];
  for (let t = 124; t <= 180; t += 2) pts.push(drum(t, H1));
  const cx = -(R + rc);
  for (let f = -8; f >= -360 * N; f -= 8) {
    const h = H1 + ((H2 - H1) * -f) / (360 * N);
    pts.push([cx + rc * Math.cos(f * d2r), h, rc * Math.sin(f * d2r)]);
  }
  for (let t = 182; t <= 236; t += 2) pts.push(drum(t, H2));
  return pts;
}
export default {
  alt: 'Render of a 3D-printed capstan cable drive: a thin rope wound four times round a small aluminium drum on a stepper motor runs along the rim of a large blue printed drum sector, with both rope ends clamped at the ends of the sector.',
  view: { dir: [-1.0, 0.62, 0.95], fill: 1.15, light: [-0.4, 1, 0.8], target: [0, 8, 0] },
  build(K) {
    const { group, at, extrude, cyl, box, lathe, wire, hex, mat } = K;
    const blue = mat.pla(0x2360b0, 120), grey = mat.pla(0x55595f, 300), rope = mat.nylon(0xd8452f);
    const parts = [];
    // stepper motor (NEMA 17): black body with aluminium end caps, shaft up
    const mx = -(R + rc);
    parts.push(at(box(42, 8, 42, mat.aluminium(), 2), [mx, 9, 0]));
    parts.push(at(box(41, 26, 41, mat.blackOxide(), 1), [mx, 26, 0]));
    parts.push(at(box(42, 7, 42, mat.aluminium(), 2), [mx, 42.5, 0]));
    parts.push(at(cyl(11, 2, mat.aluminium()), [mx, 47, 0]));
    parts.push(at(cyl(2.5, 20, mat.steel()), [mx, 55, 0]));
    // the small drum (capstan) on the motor shaft
    parts.push(at(lathe([[2.5, 0], [rc + 2, 0], [rc + 2, 2], [rc - 0.5, 2.6], [rc - 0.5, 9.4], [rc + 2, 10], [rc + 2, 12], [2.5, 12], [2.5, 0]], mat.aluminium()), [mx, 48, 0]));
    // the big drum sector, pivoting on a printed post at the origin
    parts.push(at(cyl(13, 43, grey), [0, 26.5, 0]));
    parts.push(at(cyl(4, 22, mat.steel()), [0, 56, 0]));
    const out = [];
    const hub = 16, rim = R - 0.5;
    for (let t = 120; t <= 240; t += 3) out.push([rim * Math.cos(t * d2r), rim * Math.sin(t * d2r)]);
    for (let t = 240; t <= 480; t += 10) out.push([hub * Math.cos(t * d2r), hub * Math.sin(t * d2r)]);
    const holes = [150, 180, 210].map((t) => ({ x: 44 * Math.cos(t * d2r), y: 44 * Math.sin(t * d2r), r: 11 }));
    holes.push({ x: 0, y: 0, r: 4 });
    parts.push(at(extrude(out, 12, blue, { bevel: 0.6, holes, curve: 32 }), [0, 54, 0], [90, 0, 0]));
    // rope, and a clamp screw at each end of the sector
    parts.push(wire(cablePath(), 0.7, rope));
    for (const [t, h] of [[124, H1], [236, H2]]) {
      const x = (R - 6) * Math.cos(t * d2r), z = (R - 6) * Math.sin(t * d2r);
      parts.push(at(group(hex(5.5, 2.6, mat.zinc())), [x, 61.3, z]));
      parts.push(wire([[R * Math.cos(t * d2r), h, R * Math.sin(t * d2r)], [(R - 3) * Math.cos((t + (t < 180 ? -2 : 2)) * d2r), 60.2, (R - 3) * Math.sin((t + (t < 180 ? -2 : 2)) * d2r)], [x, 60.4, z]], 0.7, rope));
    }
    return group(parts);
  },
};
