// Compression limiter: a 3D-printed bracket bolted to a painted steel plate, with a quarter cut
// away to show the brass tube (compression limiter) pressed into the bolt hole, a hair shorter than the
// plastic, so the bolt's washer lands on the tube; a second tube stands beside it.
const deg = (d) => (d * Math.PI) / 180;
// plan outline of a block (half-sizes hx, hz) with the front-right quarter removed and a round hole
// of radius r at the centre (points from angle 0 clockwise round to angle 90)
function quarterOutline(hx, hz, r) {
  const hole = Array.from({ length: 29 }, (_, i) => { const a = deg(360 - (270 * i) / 28); return [r * Math.cos(a), r * Math.sin(a)]; });
  return [[0, hz], [-hx, hz], [-hx, -hz], [hx, -hz], [hx, 0], ...hole];
}
// a cut-away block between heights y0 and y1, with its two cut faces in cutM
function cutBlock(K, hx, hz, y0, y1, r, m, cutM) {
  const { THREE, group, at, extrude, mesh } = K;
  const body = at(extrude(quarterOutline(hx, hz, r), y1 - y0, m, { bevel: 0 }), [0, (y0 + y1) / 2, 0], [90, 0, 0]);
  const face = (w) => mesh(new THREE.ShapeGeometry(new THREE.Shape([[r, y0], [w, y0], [w, y1], [r, y1]].map(([x, y]) => new THREE.Vector2(x, y)))), cutM);
  return group(body, at(face(hz), [0.02, 0, 0], [0, -90, 0]), at(face(hx), [0, 0, 0.02]));
}
export default {
  alt: 'Render of a compression limiter: a 3D-printed bracket bolted to a painted steel plate, cut away to show a brass tube pressed into the bolt hole, a hair shorter than the plastic, so the bolt\'s washer rests on the tube instead of crushing the plastic; a second tube stands beside it.',
  kind: 'cross-section',
  view: { dir: [0.6, 0.95, 1.2], fill: 1.08, light: [0.3, 1, 0.8] },
  build(K) {
    const { group, at, lathe, hex, cyl, mat } = K;
    const PT = 3, BH = 12, TUBE = 11.8, RO = 5, RI = 2.7, BOLT = 2.5;
    const pla = mat.pla(0x3d7cc9, 6), plaCut = mat.cut(0x2c5f9e);
    const alu = mat.paint(0x4a4f57), aluCut = mat.cut(0x3a3e45);
    const parts = [
      cutBlock(K, 22, 18, 0, PT, BOLT, alu, aluCut),                       // the steel plate (tapped)
      cutBlock(K, 13, 13, PT, PT + BH, RO, pla, plaCut),                     // the printed bracket's foot
    ];
    // the tube, cut open with the rest
    const steelCut = mat.cut(0x8d9299), brassCut = mat.cut(0xb98f3a);
    parts.push(at(lathe([[RI, 0], [RO, 0], [RO, TUBE], [RI, TUBE], [RI, 0]], mat.brass(), { cut: 90, start: 45, cutMat: brassCut }), [0, PT, 0]));
    // the washer resting on the tube, and the bolt (whole)
    const yW = PT + TUBE;
    parts.push(at(lathe([[BOLT + 0.2, 0], [6.2, 0], [6.2, 1.0], [BOLT + 0.2, 1.0], [BOLT + 0.2, 0]], mat.zinc(), { cut: 90, start: 45, cutMat: steelCut }), [0, yW, 0]));
    parts.push(at(cyl(BOLT - 0.05, PT + TUBE + 1.0 - 0.05, mat.zinc()), [0, (PT + TUBE + 1.0 + 0.05) / 2, 0]));
    parts.push(at(group(hex(8, 3.6, mat.zinc())), [0, yW + 1.0 + 1.8, 0], [0, 15, 0]));
    // a spare tube standing beside
    parts.push(at(lathe([[RI, 0], [RO, 0], [RO, TUBE], [RI, TUBE], [RI, 0]], mat.brass()), [-12, 0, 25], [0, 0, 0]));
    return group(parts);
  },
};
