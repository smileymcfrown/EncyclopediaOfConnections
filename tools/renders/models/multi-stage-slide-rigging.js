// Multi-stage slide rigging (continuous rigging): a three-stage robot lift. The fixed base slide
// and two moving stages sit side by side, each raised further than the one behind it. One string
// runs from a motor-driven spool up over a pulley at the top of the base, down under a pulley at
// the bottom of stage 1, up over a pulley at the top of stage 1 and down to an anchor at the
// bottom of stage 2, so winding the spool pushes the whole stack out like a telescope.
export default {
  alt: 'Render of a three-stage linear slide lift with continuous rigging: a single string runs from a motor-driven spool up over a pulley on the fixed base slide, down under a pulley on the first moving stage, up over its top pulley and down to an anchor on the second stage, which stands highest.',
  view: { dir: [1.0, 0.32, 0.75], fill: 0.95 },
  build(K) {
    const { group, at, box, cyl, tube, wire, torus, mat } = K;
    const alu = mat.aluminium(), dark = mat.blackOxide(), plateM = mat.pla(0x3a3f46, 1.2);
    const pulleyM = mat.nylon(0xf0ede4), stringM = mat.plastic(0xf2c230), steel = mat.steel();
    const T = 6, W = 24, D = 8, L = 240, E = 130, xs = W / 2 + 4;   // xs: the plane the string runs in
    const r = 5;                                                      // pulley radius to the string

    const plate = at(box(150, T, 110, plateM, 2), [30, T / 2, 0]);
    const stage = (k) => {
      const y0 = T + k * E, z = k * 10;
      return group(
        at(box(W, L, D, alu, 1), [0, y0 + L / 2, z]),
        at(box(0.4, L - 6, 3, dark, 0.1), [W / 2, y0 + L / 2, z]),          // slot line on the side face
        at(box(0.4, L - 6, 3, dark, 0.1), [-W / 2, y0 + L / 2, z]),
      );
    };
    const stages = [stage(0), stage(1), stage(2)];
    // a foot block holding the base slide upright on the plate
    const foot = at(box(40, 16, 30, plateM, 2), [0, T + 8, -14]);

    // a pulley on an axle sticking out from the side of a stage
    const pulley = (y, z, zStage) => group(
      at(cyl(r - 0.6, 3, pulleyM), [xs, y, z], [0, 0, 90]),
      at(cyl(r + 1.4, 0.8, pulleyM), [xs - 1.9, y, z], [0, 0, 90]),
      at(cyl(r + 1.4, 0.8, pulleyM), [xs + 1.9, y, z], [0, 0, 90]),
      at(cyl(1.4, xs + 3 - W / 2, steel), [(W / 2 + xs + 3) / 2, y, z], [0, 0, 90]),
      // a small bracket from the stage to the axle when the pulley sits beside another stage
      Math.abs(z - zStage) > 3 ? at(box(3, 8, Math.abs(z - zStage) + 4, alu, 0.8), [W / 2 + 1.5, y, (z + zStage) / 2]) : null,
    );
    const yP0 = T + L - 8;                 // top of base
    const yB1 = T + E + 8;                 // bottom of stage 1
    const yT1 = T + E + L - 8;             // top of stage 1
    const yA2 = T + 2 * E + 10;            // anchor on stage 2
    const pulleys = [pulley(yP0, 0, 0), pulley(yB1, 10, 10), pulley(yT1, 20, 10)];
    const anchor = group(at(box(4, 8, 6, dark, 1), [xs, yA2, 25]), at(box(W / 2 + 6 - W / 2, 8, 6, dark, 1), [W / 2 + 3, yA2, 22]));

    // spool on a motor beside the base, below the base pulley
    const Rs = 8, yS = T + 34, zS = -5 - Rs;
    const spool = group(
      at(cyl(Rs - 0.8, 6, mat.anodised(0xc0392b)), [xs, yS, zS], [0, 0, 90]),
      at(cyl(Rs + 3, 1.2, mat.anodised(0xc0392b)), [xs - 3.5, yS, zS], [0, 0, 90]),
      at(cyl(Rs + 3, 1.2, mat.anodised(0xc0392b)), [xs + 3.5, yS, zS], [0, 0, 90]),
      [-1.8, -0.6, 0.6, 1.8].map((dx) => at(torus(Rs - 0.2, 0.6, stringM), [xs + dx, yS, zS], [0, 90, 0])),
    );
    const motor = group(
      at(box(26, 26, 26, mat.anodised(0x8a6d1f), 2), [xs + 20, yS, zS]),            // gearbox
      at(cyl(14, 48, dark), [xs + 57, yS, zS], [0, 0, 90]),                          // motor can
      at(box(10, yS - T, 26, plateM, 1), [xs + 20, T + (yS - T) / 2 - 13, zS]),      // mount
    );

    // the string
    const pts = [[xs, yS, zS + Rs], [xs, yS + 40, zS + Rs], [xs, yP0 - 30, -r]];
    const arc = (yc, zc, a0, a1) => { for (let i = 0; i <= 10; i++) { const a = ((a0 + ((a1 - a0) * i) / 10) * Math.PI) / 180; pts.push([xs, yc + r * Math.sin(a), zc + r * Math.cos(a)]); } };
    arc(yP0, 0, 180, 0);
    pts.push([xs, yP0 - 30, r], [xs, yB1 + 30, r]);
    arc(yB1, 10, 180, 360);
    pts.push([xs, yB1 + 30, 15], [xs, yT1 - 30, 15]);
    arc(yT1, 20, 180, 0);
    pts.push([xs, yT1 - 30, 25], [xs, yA2 + 4, 25]);
    const string = wire(pts, 0.6, stringM);

    return group(plate, foot, stages, pulleys, anchor, spool, motor, string);
  },
};
