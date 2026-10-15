// Gearless right-angle drive (Hobson's joint): a 3D-printed desk demonstrator. Two printed drums on
// shafts at a right angle, each with a ring of six holes, joined by six steel rods bent to 90 degrees;
// each rod has one leg in a hole of each drum. The shafts run in two printed bearing blocks on an
// L-shaped base.
export default {
  alt: 'Render of a gearless right-angle drive (Hobson\'s joint): two printed drums on shafts set at a right angle, linked by a ring of six L-shaped steel rods whose legs slide in holes in the faces of both drums, with the shafts held in printed bearing blocks on an L-shaped base.',
  view: { dir: [-0.55, 0.95, -1.15], fill: 1.1, light: [-0.3, 1, -0.6] },
  build(K) {
    const { group, at, extrude, circle, cyl, box, wire, mat } = K;
    const r = 12, a = 23, L = 30, Lleg = 39, rodR = 2, H = 34, rd = 21;
    const drumA = mat.pla(0xe4782d, 60), drumB = mat.pla(0x3a78c2, 60), frame = mat.pla(0x3a3d42, 70), rod = mat.steel();
    const parts = [];
    const holes = Array.from({ length: 6 }, (_, k) => ({ x: r * Math.cos((k * Math.PI) / 3), y: r * Math.sin((k * Math.PI) / 3), r: rodR + 0.35 }));
    // drum A: axis along x (local z of the extrusion -> world x)
    const dA = extrude(circle(rd, 72), L, drumA, { holes: [...holes, { x: 0, y: 0, r: 2.6 }], bevel: 1 });
    // map local (hx, hy) of drum A to world: local x -> world z, local y -> world y
    parts.push(at(dA, [a + L / 2, H, 0], [0, 90, 0]));
    // drum B: axis along z; local (hx, hy) -> world (x, y): pick rotation so local y -> world y, local x -> world x
    const dB = extrude(circle(rd, 72), L, drumB, { holes: [...holes, { x: 0, y: 0, r: 2.6 }], bevel: 1 });
    parts.push(at(dB, [0, H, a + L / 2], [0, 0, 0]));
    // rods: for phase t the bend sits at (r sin t, r cos t, r sin t) about the corner;
    // drum A hole at (y, z) = (r cos t, r sin t) and drum B hole at (x, y) = (r sin t, r cos t)
    // drum A's local x maps to world -z under a +90 deg turn about y, so its holes sit at z = -hx;
    // choose phases so the holes match: drum A local (hx, hy) = (-r sin t, r cos t)
    for (let k = 0; k < 6; k++) {
      const t = (k * Math.PI) / 3 + Math.PI / 6;
      const s = r * Math.sin(t), c = r * Math.cos(t);
      const R = 3;                                         // bend radius
      const pts = [[s + Lleg, c, s], [s + R + 2, c, s], [s + R, c, s]];
      for (let i = 1; i < 6; i++) { const q = (i / 6) * (Math.PI / 2); pts.push([s + R - R * Math.sin(q), c, s + R - R * Math.cos(q)]); }
      pts.push([s, c, s + R], [s, c, s + R + 2], [s, c, s + Lleg]);
      parts.push(at(wire(pts.map(([x, y, z]) => [x, y + H, z]), rodR, rod), [0, 0, 0]));
    }
    // shafts
    parts.push(at(cyl(2.5, 62, mat.stainless()), [a + 31, H, 0], [0, 0, 90]));
    parts.push(at(cyl(2.5, 62, mat.stainless()), [0, H, a + 31], [90, 0, 0]));
    // bearing blocks and L-shaped base
    const bx = a + L + 9;
    parts.push(at(extrude([[-9, 0], [9, 0], [9, H - 2], [0, H + 9], [-9, H - 2]], 8, frame, { holes: [{ x: 0, y: H, r: 2.7 }], bevel: 0.8 }), [bx, 0, 0], [0, 90, 0]));
    parts.push(at(extrude([[-9, 0], [9, 0], [9, H - 2], [0, H + 9], [-9, H - 2]], 8, frame, { holes: [{ x: 0, y: H, r: 2.7 }], bevel: 0.8 }), [0, 0, bx], [0, 0, 0]));
    parts.push(at(box(bx + 16, 4, 22, frame, 1), [(bx + 16) / 2 - 11, 1, 0]));
    parts.push(at(box(22, 4, bx - 11, frame, 1), [0, 1, (bx - 11) / 2 + 11]));
    // shaft-end knobs so it can be turned by hand
    parts.push(at(cyl(7, 8, drumA), [a + 62, H, 0], [0, 0, 90]));
    parts.push(at(cyl(7, 8, drumB), [0, H, a + 62], [90, 0, 0]));
    return group(...parts);
  },
};
