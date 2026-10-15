// Quarter-turn (Dzus-type) fastener, cut away: a painted body panel lies on a steel frame tube. The button-headed stud passes through a grommet in the panel and a hole
// in the frame; inside the tube a steel wire spring, riveted at both ends, crosses the hole and
// sits in the end of the stud's spiral slot, pulling the panel down tight. The panel and frame are
// cut through the middle of the stud; the stud, spring and a second stud lying in front are whole.
export default {
  alt: 'Render of a quarter-turn (Dzus-type) fastener, cut away: a button-headed stud through a painted panel and a steel frame tube, with a steel wire spring riveted inside the tube sitting in the stud\'s spiral slot; a second stud lies in front showing the spiral slot in its tip.',
  kind: 'cross-section',
  view: { dir: [0.55, 0.5, 1.25], fill: 1.1 },
  build(K) {
    const { group, at, extrude, lathe, box, cyl, wire, torus, sphere, mat } = K;
    const paint = mat.paint(0x2f5d9e), alu = mat.aluminium(), steel = mat.zinc(), spring = mat.steel(), dark = mat.blackOxide();
    // a flat plate (thickness t, top at y) with its front edge at z = 0 cut through a hole of radius rh
    const plate = (x0, x1, depth, t, y, rh, m) => {
      const pts = [[x0, -depth], [x1, -depth], [x1, 0], [rh, 0]];
      for (let a = 0; a >= -180; a -= 10) pts.push([rh * Math.cos((a * Math.PI) / 180), rh * Math.sin((a * Math.PI) / 180)]);
      pts.push([x0, 0]);
      return at(extrude(pts, t, m, { bevel: 0.15, curve: 4 }), [0, y - t / 2, 0], [90, 0, 0]);
    };
    const FY = 25, FT = 1.6, PT = 1.6;       // frame top, its wall thickness, panel thickness
    // the frame: a rectangular steel tube 40 x 25 running away from us, cut open at z = 0
    const DZ = 34, tubeM = mat.paint(0x3a3f46);
    const frame = group(
      plate(-20, 20, DZ, FT, FY, 3.6, tubeM),
      at(box(40, FT, DZ, tubeM, 0.3), [0, FT / 2, -DZ / 2]),
      at(box(FT, FY, DZ, tubeM, 0.3), [-20 + FT / 2, FY / 2, -DZ / 2]),
      at(box(FT, FY, DZ, tubeM, 0.3), [20 - FT / 2, FY / 2, -DZ / 2]),
    );
    const panel = plate(-34, 30, DZ, PT, FY + PT, 5.2, paint);
    // red faces where the panel and tube are cut
    const cutM = mat.cut();
    const face = (x0, x1, y0, y1) => at(box(x1 - x0, y1 - y0, 0.06, cutM, 0.01), [(x0 + x1) / 2, (y0 + y1) / 2, 0.04]);
    const cuts = [
      face(-34, -5.2, FY, FY + PT), face(5.2, 30, FY, FY + PT),
      face(-20, -3.6, FY - FT, FY), face(3.6, 20, FY - FT, FY),
      face(-20, 20, 0, FT), face(-20, -20 + FT, FT, FY - FT), face(20 - FT, 20, FT, FY - FT),
    ];
    // grommet: a short aluminium sleeve with a flange on top of the panel (cut in half)
    const grommet = lathe([[3.1, FY], [5.1, FY], [5.1, FY + PT], [7, FY + PT], [7, FY + PT + 0.6], [3.1, FY + PT + 0.6], [3.1, FY]], alu,
      { cut: 180, cutMat: mat.cut(0xb9bec4) });

    // the stud: an oval button head with a screwdriver slot, a shank with a spiral slot near its tip
    const stud = (withSpring) => {
      const top = FY + PT + 0.6;
      const head = lathe([[0, top], [6.6, top], [6.6, top + 1.2], [5.8, top + 2.6], [3.5, top + 3.4], [0, top + 3.6]], steel);
      const drive = at(box(10, 1.4, 1.4, dark, 0.2), [0, top + 3.1, 0]);
      const tipY = FY - FT - 8;
      const shank = lathe([[0, tipY], [2.2, tipY], [2.8, tipY + 0.6], [2.8, top], [0, top]], steel);
      // spiral slot: a dark groove running from the tip a quarter turn round to a small notch
      const groove = (a0) => {
        const pts = [];
        for (let i = 0; i <= 12; i++) {
          const f = i / 12, a = ((a0 - 90 * f) * Math.PI) / 180, y = tipY + 0.4 + 5.6 * Math.pow(f, 0.8);
          pts.push([2.75 * Math.cos(a), y, 2.75 * Math.sin(a)]);
        }
        const e = pts[pts.length - 1];
        pts.push([e[0], e[1] - 0.8, e[2]]);       // the locking notch dips back down
        return wire(pts, 0.55, dark);
      };
      return group(head, drive, shank, groove(90), groove(270));
    };
    const fitted = stud(true);
    // spring receptacle: a wire crossing under the hole, its ends riveted to the flange
    const SY = FY - FT - 8 + 6 - 0.8;           // at the stud's locking notch
    const springWire = wire([[-12, FY - FT - 1.4, 0], [-11, SY + 1.5, 0], [-8, SY, 0], [0, SY, 0], [8, SY, 0], [11, SY + 1.5, 0], [12, FY - FT - 1.4, 0]], 0.75, spring);
    const rivet = (x) => group(
      at(cyl(1.5, FT + 0.6, steel), [x, FY - FT / 2 - 0.3, 0]),
      at(cyl(2.6, 1.2, steel), [x, FY - FT - 1.0, 0]),
      at(torus(1.9, 0.5, spring), [x, FY - FT - 1.6, 0], [90, 0, 0]),
    );
    // a loose stud lying in front, showing its slot
    const loose = at(stud(false), [10, 6.6, 20], [0, 25, 90]);
    return group(frame, panel, cuts, grommet, fitted, springWire, rivet(-12), rivet(12), loose);
  },
};
