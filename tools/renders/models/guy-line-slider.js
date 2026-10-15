// Guy-line slider (three-hole runner): an anodised aluminium runner on a taut tent guy line. The
// line comes down from the tent (top left), goes down through one end hole, runs to a steel peg,
// round it and back, then is woven down through the far hole and up through the middle hole and
// ends in a stopper knot.
const SLOPE = 24;                       // the line's angle below horizontal (degrees)
const Y0 = 36;                          // height of the runner's centre above the ground
const CR = 1.25;                        // cord radius (2.5 mm guy line)
const s = Math.sin((SLOPE * Math.PI) / 180), c = Math.cos((SLOPE * Math.PI) / 180);
// runner frame (x along the line towards the peg, y out of the runner's face) -> world
const W = (x, y, z) => [x * c + y * s, Y0 - x * s + y * c, z];

export default {
  note: 'weak: the way the line threads through the three holes is a guess',
  alt: 'Render of a three-hole guy-line runner on a taut tent line: the cord comes down from the tent, weaves through the holes of a small green aluminium plate, loops round a steel tent peg and comes back to end in a stopper knot, so sliding the plate along the line tightens it.',
  view: { dir: [0.15, 1.0, 1.1], fill: 1.05, light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, extrude, roundRect, wire, sphere, cyl, mat, THREE } = K;
    const cordMat = mat.rubber(0xd2481a);
    // the runner: 40 x 12 x 3 mm with three 4.4 mm holes
    const plateShape = roundRect(40, 12, 5.5);
    for (const x of [-12, 0, 12]) { const h = new THREE.Path(); h.absarc(x, 0, 2.2, 0, Math.PI * 2, true); plateShape.holes.push(h); }
    const plate = at(group(at(extrude(plateShape, 3, mat.anodised(0x3f8a3a), { bevel: 0.5, curve: 24 }), [0, 0, 0], [-90, 0, 0])),
      W(0, 0, 0), [0, 0, -SLOPE]);
    // the peg: a round steel pin pushed into the ground, leaning away from the tent, with a hooked top
    const px = W(68, 0, 0)[0] + 6, lean = 14;
    const pd = [Math.sin((lean * Math.PI) / 180), Math.cos((lean * Math.PI) / 180)];
    const P = (h) => [px + pd[0] * h, pd[1] * h];
    const peg = wire([[...P(0), 0], [...P(24), 0], [...P(34), 0], [P(36)[0] + 3, P(36)[1] + 2, 0], [P(34)[0] + 6.5, P(34)[1] + 1, 0], [P(31)[0] + 6.5, P(31)[1], 0]], 2, mat.zinc());

    // the cord: tent -> down through hole 1 -> under the runner -> round the peg -> back ->
    // down through hole 3 -> up through hole 2 -> stopper knot
    const lp = P(7);                                     // where the cord goes round the peg
    const R = 2 + CR;
    const path = [
      W(-48, 3.0, 0), W(-30, 3.0, 0), W(-17, 2.9, 0), W(-12.6, 1.6, 0), W(-12, 0, 0), W(-11.2, -1.8, -0.5), W(-6, -2.9, -3.2),
      W(14, -2.9, -3.6), W(30, -3.5, -3.8),
      [lp[0] - R * 1.6, lp[1] + 0.6, -R * 1.1], [lp[0], lp[1], -R], [lp[0] + R, lp[1], 0], [lp[0], lp[1], R], [lp[0] - R * 1.6, lp[1] + 0.6, R * 1.1],
      W(32, 3.2, 3), W(19, 2.9, 0.6), W(13.4, 1.6, 0), W(12, 0, 0), W(10.6, -1.8, 0), W(6, -2.9, 0.6),
      W(1.6, -1.6, 0), W(0, 0, 0), W(-1.4, 1.8, 0), W(-4, 3.0, 0), W(-5.5, 3.4, 0),
    ];
    const cord = wire(path, CR, cordMat);
    const knot = group(at(sphere(2.3, cordMat), W(-6.4, 3.7, 0)), at(sphere(1.9, cordMat), W(-7.8, 3.6, 0.9)), at(sphere(1.8, cordMat), W(-7.2, 3.8, -1.1)));
    return group(plate, peg, cord, knot);
  },
};
