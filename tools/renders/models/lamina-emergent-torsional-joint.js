// Lamina emergent torsional (LET) joint: a laser-cut 3 mm plywood sheet whose right-hand panel is
// folded up 60 degrees. The slots leave four long torsion bars: the two on the left run from a tab
// on the fixed panel out to end pieces at the top and bottom edges, the two on the right run back
// from the end pieces to a tab on the folding panel. Each bar is twisted by half the fold.
const T = 3, THETA = (60 * Math.PI) / 180;
const H = 40, E = 4, TAB = 4;          // half-length of the joint, end-piece depth, tab half-length
const SC = 1, BAR = 4, SL = 2;         // central slot half-width, bar width, outer slot width
const xb0 = SC, xb1 = SC + BAR, xe = SC + BAR + SL, W = 34; // bar edges, panel edge, panel width

const AXIS = -xb1;
const ramp = (z) => Math.min(1, Math.max(0, (Math.abs(z) - TAB) / (H - E - TAB)));
// how far each point of the flat sheet turns about the joint axis (the Z axis)
function phi(x, z, part) {
  if (part === 'A') return 0;
  if (part === 'B') return THETA;
  if (part === 'end') return THETA / 2;
  if (part === 'barL') return (THETA / 2) * ramp(z);
  return THETA - (THETA / 2) * ramp(z);   // barR
}
export default {
  alt: 'Render of a lamina emergent torsional joint in laser-cut plywood: one sheet with long slots cut along the fold line, its right panel folded up at an angle while the thin strips left between the slots twist to let it bend.',
  view: { dir: [-0.5, 0.95, 1.25], fill: 0.95, light: [-0.6, 1, 0.5] },
  build(K) {
    const { group, mesh, mat, THREE } = K;
    const face = mat.wood('#c9a06c', '#9c7346'), edge = mat.paint(0x6b4528);
    edge.clearcoat = 0; edge.roughness = 0.85;
    const mats = [edge, edge, face, face, edge, edge];
    const piece = (x0, x1, z0, z1, part) => {
      const nx = Math.max(1, Math.ceil((x1 - x0) / 2)), nz = Math.max(1, Math.ceil((z1 - z0) / 1));
      const g = new THREE.BoxGeometry(x1 - x0, T, z1 - z0, nx, 1, nz);
      g.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
      const p = g.attributes.position, uv = g.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = phi(x, z, part);
        uv.setXY(i, (x + 60) / 130, (z + 60) / 130);
        const dx = x - AXIS;   // turn about an axis along Z at the outer edge of the left bars
        p.setXYZ(i, AXIS + dx * Math.cos(a) - y * Math.sin(a), dx * Math.sin(a) + y * Math.cos(a), z);
      }
      g.computeVertexNormals();
      return mesh(g, mats);
    };
    const parts = [
      piece(-xe - W, -xe, -H, H, 'A'),
      piece(-xe - 0.01, -xb1 + 0.01, -TAB, TAB, 'A'),           // tab joining the fixed panel to the left bars
      piece(-xb1, -xb0, -H + E, H - E, 'barL'),
      piece(-xb1, xb1, H - E, H, 'end'),
      piece(-xb1, xb1, -H, -H + E, 'end'),
      piece(xb0, xb1, -H + E, H - E, 'barR'),
      piece(xb1 - 0.01, xe + 0.01, -TAB, TAB, 'B'),             // tab joining the right bars to the folding panel
      piece(xe, xe + W, -H, H, 'B'),
    ];
    return group(parts);
  },
};
