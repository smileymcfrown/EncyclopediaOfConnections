// Quick-release hook: a stainless steel pelican hook hanging from its eye, holding a ring. The hinged
// tongue curls round under the ring and its tip rests against the body, where a sliding link (the
// bail) holds it shut; knock the link off the tip and the tongue swings open under the load.
export default {
  alt: 'Render of a stainless steel pelican hook hanging from its eye: a curved hinged tongue loops round under a steel ring and its tip is held against the body by a sliding link, which is knocked off to let the tongue swing open and release the ring.',
  view: { dir: [0.5, 0.2, 1.2], fill: 1.0, ground: false, light: [-0.5, 0.9, 0.9] },
  build(K) {
    const { group, at, box, cyl, wire, torus, tube, mat } = K;
    const ss = mat.stainless();
    // built with the body along +x (eye at x = 0), the hook in the XY plane, then hung with x downward
    const eye = at(tube(7.5, 4, 5, ss), [0, 0, 0], [90, 0, 0]);
    const bar = at(box(56, 7, 5, ss, 1.2), [34, 0, 0]);
    const boss = at(cyl(5.5, 5.6, ss), [62, 0, 0], [90, 0, 0]);
    const pin = at(cyl(2.4, 8.4, mat.chrome()), [62, 0, 0], [90, 0, 0]);
    const tongue = wire([[62, 0, 0], [69, 5, 0], [72, 14, 0], [67, 22, 0], [56, 25, 0], [46, 21, 0], [41, 13.5, 0], [38.5, 7.6, 0], [37.2, 6.4, 0]], 3, ss);
    const tipCap = at(K.sphere(3, ss), [37.2, 6.4, 0]);
    // the bail: an oval link round the body and the tongue's tip
    const bail = [];
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2, cy = 2.4, ry = 9.4, rz = 5.2;
      bail.push([40.5, cy + ry * Math.cos(a), rz * Math.sin(a)]);
    }
    const link = wire(bail, 1.6, ss, true);
    // the ring the hook is holding, through the loop of the tongue
    const ring = at(torus(9, 2.2, ss), [74, 14, 0], [90, 0, 0]);
    return at(group(eye, bar, boss, pin, tongue, tipCap, link, ring), [0, 0, 0], [0, 0, -90]);
  },
};
