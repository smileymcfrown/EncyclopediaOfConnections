// Split-part joints for large prints: a big round printed piece (like a statue base or a large
// pot), too tall for the printer, cut in two. The lower piece stands with two round pegs on its
// flat cut face; the domed upper piece rests upside down beside it, showing the two matching holes
// in its cut face, ready to be turned over and pushed on.
export default {
  alt: 'Render of split-part joints for a large print: a big round printed shape cut in two, the lower piece with two round pegs standing up from its flat cut face and the domed upper piece resting upside down beside it, showing the two matching holes the pegs fit into.',
  view: { dir: [0.3, 0.95, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, lathe, extrude, circle, mat } = K;
    const c = 0x2f7391, pla = mat.pla(c, 140), plaUp = mat.pla(c, 90), pegM = mat.pla(c, 12);
    const Rc = 50, cutY = 72, pegs = [[-26, 0], [26, 0]];
    // lower piece: a bulging round body, flat cut face on top
    const lowProf = [[0, 0], [42, 0], [46, 2], [52, 14], [55, 32], [54, 50], [51, 64], [Rc, cutY], [0, cutY]];
    const lower = lathe(lowProf, pla);
    const pegG = pegs.map(([x, z]) => at(lathe([[0, 0], [4, 0], [4, 7.2], [3.3, 8.2], [0, 8.2]], pegM), [x, cutY, z]));
    // upper piece (built the right way up, then turned over): a short straight band holding the
    // blind holes, then a dome
    const band = at(extrude(circle(Rc, 128), 9, plaUp, { holes: pegs.map(([x, z]) => ({ x, y: z, r: 4.3 })), bevel: 0, curve: 24 }), [0, 4.5, 0], [90, 0, 0]);
    const domeProf = [[Rc + 0.05, 0], [Rc + 0.05, 9], [49.5, 18], [46, 30], [39, 42], [28, 52], [14, 58], [0, 60]];
    const dome = lathe(domeProf, plaUp);          // the outside skin, band included, in one piece
    const upper = group(band, dome);
    upper.rotation.x = Math.PI;                       // upside down: cut face up
    const upperG = at(group(upper), [Rc * 2 + 22, 60, 14], [0, -15, 0]);
    return group(lower, ...pegG, upperG);
  },
};
