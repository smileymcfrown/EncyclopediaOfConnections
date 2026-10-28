// Potted insert: a piece of cored panel (two thin fibreglass skins with an end-grain balsa core)
// with a quarter cut away to show a threaded metal insert set in a plug of epoxy that fills a
// hole dug out of the core and is glued to both skins; a bolt lies beside it, ready to screw in.
const deg = (d) => (d * Math.PI) / 180;
// plan outline of a block (half-sizes hx, hz) with the front-right quarter removed and a round hole
// of radius r at the centre (points from angle 0 clockwise round to angle 90)
function quarterOutline(hx, hz, r) {
  const hole = Array.from({ length: 41 }, (_, i) => { const a = deg(360 - (270 * i) / 40); return [r * Math.cos(a), r * Math.sin(a)]; });
  return [[0, hz], [-hx, hz], [-hx, -hz], [hx, -hz], [hx, 0], ...hole];
}
// a cut-away slab between heights y0 and y1, with its two cut faces in cutM
function cutBlock(K, hx, hz, y0, y1, r, m, cutM) {
  const { THREE, group, at, extrude, mesh } = K;
  const body = at(extrude(quarterOutline(hx, hz, r), y1 - y0, m, { bevel: 0 }), [0, (y0 + y1) / 2, 0], [90, 0, 0]);
  const face = (w) => mesh(new THREE.ShapeGeometry(new THREE.Shape([[r, y0], [w, y0], [w, y1], [r, y1]].map(([x, y]) => new THREE.Vector2(x, y)))), cutM);
  return group(body, at(face(hz), [0.02, 0, 0], [0, -90, 0]), at(face(hx), [0, 0, 0.02]));
}
export default {
  alt: 'Render of a potted insert: a piece of sandwich panel, two thin fibreglass skins over a balsa core, cut away to show a threaded metal insert set in a plug of hard epoxy that replaces the core round the hole and is glued to both skins; a bolt lies beside it.',
  kind: 'cross-section',
  view: { dir: [0.6, 0.95, 1.2], fill: 1.12, light: [0.3, 1, 0.8] },
  build(K) {
    const { THREE, group, at, lathe, hex, threaded, mat } = K;
    const S = 20, T = 1.8, C = 15, PLUG = 11, F = 7, B = 4.6;
    const y1 = T, y2 = T + C, y3 = T + C + T;
    const gel = mat.plastic(0xe9eae6), gelCut = mat.cut(0xd2d4cf);
    const glass = mat.plastic(0xc9d4bf), glassCut = mat.cut(0xb5c0a9);
    // end-grain balsa: grain running up through the core
    const balsa = mat.wood('#c9a36b', '#94703f'), balsaCut = mat.wood('#c09a62', '#8c683a');
    balsaCut.side = THREE.DoubleSide; balsaCut.map = balsaCut.map.clone(); balsaCut.map.repeat.set(1 / 30, 1 / 30); balsaCut.map.needsUpdate = true;
    const epoxy = mat.plastic(0xf0ede4), epoxyCut = mat.cut(0xe6e2d6);   // epoxy thickened with silica
    const steel = mat.stainless(), steelCut = mat.cut(0x9a9ea3);
    const parts = [
      cutBlock(K, S, S, 0, y1, 0.001, glass, glassCut),
      cutBlock(K, S, S, y1, y2, PLUG, balsa, balsaCut),
      cutBlock(K, S, S, y2, y3, F, gel, gelCut),
    ];
    // the epoxy plug: fills the dug-out core round and under the insert
    parts.push(lathe([[0, y1], [PLUG, y1], [PLUG, y2], [B, y2], [B, y1 + 2.2], [F, y1 + 2.2], [F, y1 + 1.0], [0, y1 + 1.0], [0, y1]],
      epoxy, { cut: 90, start: 45, cutMat: epoxyCut }));
    // the insert: a bottom flange, a body, a top flange flush with the skin, an M6 thread inside
    const ins = [[0, y1 + 1.0], [F, y1 + 1.0], [F, y1 + 2.2], [B, y1 + 2.2], [B, y2], [F, y2], [F, y3]];
    for (let y = y3; y > y1 + 4.5; y -= 1.0) ins.push([2.55, y], [3.0, y - 0.5]);
    ins.push([0, y1 + 4.0], [0, y1 + 1.0]);
    parts.push(lathe(ins, steel, { cut: 90, start: 45, cutMat: steelCut }));
    // an M6 hex bolt lying beside
    const bolt = group(at(group(hex(10, 4, mat.zinc())), [0, 2, 0]), at(threaded(3, 1, 16, mat.zinc()), [0, 4, 0]));
    parts.push(at(bolt, [-S - 12, 5, 4], [0, 75, 90]));
    return group(parts);
  },
};
