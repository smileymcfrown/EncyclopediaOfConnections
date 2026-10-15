// Mid-print embedding: a 3D-printed block with a quarter cut away to show an M5 hex nut sealed in
// a hex pocket inside it (printed over after a pause), with a bolt hole left above the nut; a
// second nut lies beside the block.
const S = 11, H = 18, AF = 8.3, R = AF / Math.sqrt(3), P0 = 5, P1 = 9.2, BOLT = 2.75;
// the plan outline of one layer: a square with the front-right quarter removed and, round the
// centre, the hole for that layer (points from angle 0 clockwise round to angle 90)
function layerOutline(hole) {
  return [[0, S], [-S, S], [-S, -S], [S, -S], [S, 0], ...hole];
}
const hexHole = [[R, 0], ...[300, 240, 180, 120].map((a) => [R * Math.cos((a * Math.PI) / 180), R * Math.sin((a * Math.PI) / 180)]), [0, AF / 2]];
const roundHole = Array.from({ length: 28 }, (_, i) => { const a = ((360 - (270 * i) / 27) * Math.PI) / 180; return [BOLT * Math.cos(a), BOLT * Math.sin(a)]; });
export default {
  alt: 'Render of mid-print embedding: a 3D-printed block with a corner cut away to show a steel hex nut sealed in a hex-shaped pocket inside the plastic, with a bolt hole above it; a second nut lies beside the block.',
  kind: 'cross-section',
  view: { dir: [1.0, 0.75, 1.25], fill: 0.95, light: [0.4, 1, 0.9] },
  build(K) {
    const { THREE, group, at, extrude, hex, mesh, mat } = K;
    const pla = mat.pla(0x4c9a5a, 5), cut = mat.cut(0x37784a);
    const layer = (y0, y1, hole) => at(extrude(layerOutline(hole), y1 - y0, pla, { bevel: 0 }), [0, (y0 + y1) / 2, 0], [90, 0, 0]);
    const parts = [
      layer(0, P0, [[0.001, 0], [0, 0.001]]),
      layer(P0, P1, hexHole),
      layer(P1, H, roundHole),
    ];
    // the cut faces, in a darker green, just in front of the two cut planes
    const face = (pocket) => mesh(new THREE.ShapeGeometry(new THREE.Shape([[0, 0], [S, 0], [S, H], [BOLT, H], [BOLT, P1], [pocket, P1], [pocket, P0], [0, P0]].map(([x, y]) => new THREE.Vector2(x, y)))), cut);
    parts.push(at(face(AF / 2), [0.1, 0, 0], [0, -90, 0]));
    parts.push(at(face(R), [0, 0, 0.1]));
    // the nut in its pocket, cut open like the block, and a loose one
    const rn = 8 / Math.sqrt(3), nutHole = Array.from({ length: 20 }, (_, i) => { const a = ((360 - (270 * i) / 19) * Math.PI) / 180; return [2.5 * Math.cos(a), 2.5 * Math.sin(a)]; });
    const nutOutline = [[0, 4], ...[120, 180, 240, 300, 360].map((a) => [rn * Math.cos((a * Math.PI) / 180), rn * Math.sin((a * Math.PI) / 180)]), ...nutHole];
    parts.push(at(extrude(nutOutline, 4, mat.zinc(), { bevel: 0.25 }), [0, P0 + 2.05, 0], [90, 0, 0]));
    parts.push(at(hex(8, 4, mat.zinc(), 2.5), [21, 2, 10], [0, 20, 0]));
    return group(parts);
  },
};
