// Lid and flap stays: a small wooden chest with its lid propped open by a brass folding lid stay
// on the inside of one side wall; the stay's two arms are locked straight at the elbow, one foot
// screwed to the wall and the other to the underside of the lid.
export default {
  alt: 'Render of a folding lid stay: a small wooden chest with its lid open, held up by a brass stay inside the right-hand wall, its two flat arms locked straight at a riveted elbow, one end screwed to the wall and the other to the underside of the lid.',
  view: { dir: [-1.0, 0.8, 0.75], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, extrude, roundRect, mat } = K;
    const wood = mat.wood('#a8743f', '#7a4f26'), lidWood = mat.wood('#a26e3a', '#744a22'), brass = mat.brass();
    const W = 180, D = 110, Hh = 85, t = 10, parts = [];
    // box: bottom, front, back, sides
    parts.push(at(box(W, t, D, wood, 1), [0, t / 2, 0]));
    parts.push(at(box(W, Hh, t, wood, 1), [0, Hh / 2, D / 2 - t / 2]));
    parts.push(at(box(W, Hh, t, wood, 1), [0, Hh / 2, -D / 2 + t / 2]));
    for (const s of [-1, 1]) parts.push(at(box(t, Hh, D - 2 * t, wood, 0.6), [s * (W / 2 - t / 2), Hh / 2, 0]));
    // lid, hinged along the back top edge, open 100 degrees
    const th = 100, hy = Hh, hz = -D / 2;
    const lid = at(box(W + 4, t, D + 4, lidWood, 1), [0, t / 2, (D + 4) / 2 - 2]);
    const lidG = group(lid);
    lidG.position.set(0, hy, hz);
    lidG.rotation.x = (-th * Math.PI) / 180;
    parts.push(lidG);
    // back hinges (brass, two leaves)
    for (const x of [-55, 55]) {
      parts.push(at(cyl(2.4, 30, brass), [x, hy, hz - 1.5], [0, 0, 90]));
    }
    // the stay: lower foot on the inner face of the right wall, upper foot on the lid underside
    const rad = (d) => (d * Math.PI) / 180;
    const u = [Math.sin(rad(th)), Math.cos(rad(th))];        // along the open lid (y, z)
    const nrm = [-Math.cos(rad(th)), Math.sin(rad(th))];      // lid underside normal, facing forward
    const U = [hy + 62 * u[0] + 3 * nrm[0], hz + 62 * u[1] + 3 * nrm[1]]; // just off the lid underside
    const L = [46, -12];
    const E = [(U[0] + L[0]) / 2 + 1.2, (U[1] + L[1]) / 2 + 0.6]; // elbow, just past straight
    const xw = W / 2 - t;                                        // inner face of the right wall
    const arm = (x, p, q) => {
      const dy = q[0] - p[0], dz = q[1] - p[1], len = Math.hypot(dy, dz) + 9;
      const g = group(at(extrude(roundRect(len, 9, 4.4), 1.6, brass, { bevel: 0.3 }), [0, 0, 0], [0, 90, 0]));
      g.rotation.x = Math.atan2(dy, -dz);
      return at(group(g), [x, (p[0] + q[0]) / 2, (p[1] + q[1]) / 2]);
    };
    parts.push(arm(xw - 3.0, L, E), arm(xw - 4.6, E, U));
    for (const [x, P] of [[xw - 3.8, E], [xw - 2.6, L], [xw - 5.2, U]]) parts.push(at(cyl(2.2, 4.6, brass), [x, P[0], P[1]], [0, 0, 90]));
    // feet: a small plate with two screws on the wall, and one on the lid underside
    parts.push(at(box(1.6, 22, 10, brass, 0.4), [xw - 0.8, L[0], L[1]]));
    for (const dy of [-7, 7]) parts.push(at(cyl(1.9, 0.8, mat.zinc()), [xw - 1.8, L[0] + dy, L[1]], [0, 0, 90]));
    const footU = group(at(box(10, 1.6, 22, brass, 0.4), [0, 0, 0]));
    footU.position.set(xw - 6, hy + 62 * u[0] + 0.8 * nrm[0], hz + 62 * u[1] + 0.8 * nrm[1]);
    footU.rotation.x = (-th * Math.PI) / 180;
    parts.push(footU);
    return group(...parts);
  },
};
