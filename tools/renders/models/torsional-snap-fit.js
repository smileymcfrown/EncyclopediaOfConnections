// Torsional snap fit: a 3D-printed box with its lid shut. On the box's side, a stiff rocker arm is
// held part-way down by a thin bar that runs between two lugs printed on the box (the bar twists
// instead of the arm bending). The hook at the top of the arm sits over the lid's edge; pressing
// the ridged pad at the bottom tips the arm and lifts the hook clear.
export default {
  alt: 'Render of a torsional snap fit on a 3D-printed box: a rocker arm on the side of the box is held on a thin bar between two lugs, with its hook over the edge of the lid and a ridged press pad below the bar that tips the hook clear when pressed.',
  view: { dir: [1.15, 0.45, 1.0], fill: 0.95, target: [6, 0, 0] },
  build(K) {
    const { group, at, box, cyl, extrude, mat } = K;
    const boxM = mat.pla(0xe4782d, 1.2), lidM = mat.pla(0x4a5058, 1.2), armM = mat.pla(0xe4782d, 1.2);
    const W = 60, H = 36, Dz = 44, LT = 5;
    const body = at(box(W, H, Dz, boxM, 2.5), [0, H / 2, 0]);
    const lid = at(box(W, LT, Dz, lidM, 1.5), [0, H + LT / 2 + 0.2, 0]);

    // the rocker arm, drawn in the XY plane (side profile) and extruded 10 mm wide in z
    const xo = W / 2;                         // box side face
    const yb = 24;                            // pivot height
    const arm = [
      [xo + 4.5, 9], [xo + 8, 9], [xo + 8.6, 18],             // press pad, thicker at the bottom
      [xo + 7.4, 18.8], [xo + 7.4, H + LT + 3.4],              // arm outer face up to the hook
      [xo + 5.6, H + LT + 4.6], [xo - 5.5, H + LT + 1.2],      // sloped top of the hook
      [xo - 5.5, H + LT + 0.4], [xo + 4.4, H + LT + 0.4],      // hook's underside, resting on the lid
      [xo + 4.4, 18.8], [xo + 4.5, 9],
    ];
    const rocker = extrude(arm, 10, armM, { bevel: 0.4 });
    // ridges on the press pad
    const ridges = [11, 13.5, 16].map((y) => at(box(1, 0.8, 9, armM, 0.3), [xo + 8.5, y, 0]));
    // the torsion bar: a thin rod along z between two lugs on the box, joined to the arm by a web
    const lug = (z) => at(box(5.5, 9, 4, boxM, 0.8), [xo + 2.6, yb, z]);
    const bar = at(cyl(1.1, 26, armM), [xo + 3.4, yb, 0], [90, 0, 0]);
    const web = at(box(1.6, 4, 10, armM, 0.3), [xo + 3.9, yb, 0]);
    return group(body, lid, rocker, ridges, lug(-11), lug(11), bar, web);
  },
};
