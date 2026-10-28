// Baked-in findings: a flat polymer-clay pendant with the top layer of clay cut away to show the
// gold eye pin baked inside it, its end bent sideways so it cannot pull out, and its loop sticking
// out of the top; beside it, a clay stud earring turned over to show its earring post coming out of
// a second layer of clay pressed over the post's flat pad.
const RX = 11, RY = 15, T = 5;
export default {
  alt: 'Render of baked-in findings: a flat polymer-clay pendant with the top layer of clay cut away to show a gold eye pin baked inside, its end bent sideways so it cannot pull out and its loop sticking out of the top; beside it a clay stud earring lies face down, its post coming out of a second layer of clay pressed over the post\'s flat pad.',
  kind: 'cross-section',
  view: { dir: [0.35, 1.25, 1.0], fill: 1.15, light: [-0.5, 1, 0.6] },
  build(K) {
    const { THREE, group, at, extrude, lathe, wire, mesh, mat } = K;
    const clay = mat.nylon(0x1f6f6a); clay.roughness = 0.55;
    const clayCut = mat.cut(0x17837b);
    const gold = mat.brass(), post = mat.stainless();
    const XC = -1.6;                                        // the cut: the top layer is kept only left of this
    const shapeFrom = (pts) => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
    const al = Math.acos(XC / RX), yc = RY * Math.sin(al);
    const arc = (a0, a1) => Array.from({ length: 81 }, (_, i) => { const a = a0 + ((a1 - a0) * i) / 80; return [RX * Math.cos(a), RY * Math.sin(a)]; });
    const openPts = arc(-al, al);                           // right of the cut: only the bottom layer
    const fullPts = arc(al, Math.PI * 2 - al);              // left of the cut: full thickness
    const half = T / 2;
    const pend = group();
    const bottomHalf = extrude(shapeFrom(openPts), half, clay, { bevel: 0.5 });
    bottomHalf.material = [clayCut, clay];                // caps (the top one is the cut face), sides
    pend.add(at(bottomHalf, [0, 0, half / 2]));
    pend.add(at(extrude(shapeFrom(fullPts), T, clay, { bevel: 0.7 }), [0, 0, T / 2]));
    // the cut face down the side of the kept full-thickness part
    pend.add(at(mesh(new THREE.PlaneGeometry(half - 0.2, 2 * yc - 2.4), clayCut), [XC + 0.03, 0, half + half / 2 - 0.1], [0, 90, 0]));
    // the eye pin: a loop out of the top, a shank down the middle, its end bent sideways
    const zp = half;
    const loop = [];
    const LR = 2.4, LY = RY + 0.6 + LR;
    for (let i = 0; i <= 28; i++) { const a = -Math.PI / 2 - 0.25 + (i / 28) * (Math.PI * 2 - 0.1); loop.push([LR * Math.cos(a), LY + LR * Math.sin(a), zp]); }
    const pin = [[0, -2, zp], [0, 6, zp], [0, RY - 2, zp], [0, RY + 0.4, zp], ...loop];
    pend.add(wire(pin, 0.38, gold));
    pend.add(wire([[0, -2, zp], [0, -4.4, zp], [0.8, -5.2, zp], [3.5, -5.3, zp], [5.6, -5.2, zp]], 0.38, gold));
    const p = at(group(pend), [-6, 0, 0], [-90, 0, 0]);
    // the stud earring, face down: a clay disc with a second layer of clay over the pad, and a post
    const ear = group(
      lathe([[0, 0], [7.4, 0], [8, 0.6], [8, 2.6], [7.4, 3.2], [0, 3.2]], clay),
      lathe([[0, 3.1], [4.6, 3.1], [4.2, 3.7], [3.2, 4.2], [0, 4.4]], clay),
      at(K.cyl(0.4, 11, post), [0, 4.2 + 5.5, 0]),
      at(K.cyl(0.42, 0.25, post), [0, 4.2 + 9.0, 0]));    // a slight groove ring near the tip
    return group(p, at(ear, [24, 0, 4]));
  },
};
