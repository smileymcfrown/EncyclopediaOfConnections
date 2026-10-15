// Rolling-contact joint: two 3D-printed blocks with rounded ends, tied by crossed nylon straps,
// rolled 70 degrees. The middle strap runs over the top of the fixed block and under the moving one;
// the two outer straps run the other way, so the blocks can only roll on each other.
const r = 10, L = 32, WID = 26, t = 0.6;       // end radius, block length, width, strap thickness
const ro = r + t / 2, BETA = (35 * Math.PI) / 180; // strap radius; the moving block turns 2 x BETA
const CB = [2 * ro * Math.cos(BETA), 2 * ro * Math.sin(BETA)];

const arc = (c, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + ((a1 - a0) * i) / n; return [c[0] + ro * Math.cos(a), c[1] + ro * Math.sin(a)]; });
const along = (p, d, len, n = 4) => Array.from({ length: n + 1 }, (_, i) => [p[0] + (d[0] * len * i) / n, p[1] + (d[1] * len * i) / n]);
function strapPaths() {
  const d = [Math.cos(2 * BETA), Math.sin(2 * BETA)], P = Math.PI;
  const overA = [...along([-L + 6, ro], [1, 0], L - 6).slice(0, -1), ...arc([0, 0], P / 2, BETA).slice(0, -1), ...arc(CB, BETA + P, 2 * BETA + 1.5 * P)];
  const endB1 = overA[overA.length - 1];
  const underA = [...along([-L + 6, -ro], [1, 0], L - 6).slice(0, -1), ...arc([0, 0], -P / 2, BETA).slice(0, -1), ...arc(CB, BETA + P, 2 * BETA + P / 2)];
  const endB2 = underA[underA.length - 1];
  return [[...overA, ...along(endB1, d, L - 6).slice(1)], [...underA, ...along(endB2, d, L - 6).slice(1)]];
}
export default {
  alt: 'Render of a rolling-contact joint: two 3D-printed blocks with rounded ends, one lying flat and one rolled up at an angle, held together only by crossed black nylon straps screwed to their faces, the middle strap passing one way between the blocks and the two outer straps the other way.',
  view: { dir: [0.5, 0.6, 1.3], fill: 1.0, light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, extrude, mesh, lathe, mat, THREE } = K;
    const parts = [];
    const bv = 0.8, rr = r - bv;   // the bevel grows the outline by bv, so draw it bv smaller
    const endShape = (sign) => {   // block outline in (x, y): body on one side, a semicircle on the other
      const pts = [];
      for (let i = 0; i <= 32; i++) { const a = -Math.PI / 2 + (i / 32) * Math.PI; pts.push([sign * rr * Math.cos(a), rr * Math.sin(a)]); }
      pts.push([-sign * (L - bv), rr], [-sign * (L - bv), -rr]);
      return sign > 0 ? pts : pts.reverse();
    };
    parts.push(extrude(endShape(1), WID, mat.pla(0x6c7178, 60), { bevel: bv, curve: 32 }));
    parts.push(at(extrude(endShape(-1), WID, mat.pla(0xd2621e, 60), { bevel: bv, curve: 32 }), [CB[0], CB[1], 0], [0, 0, 2 * BETA * 180 / Math.PI]));
    // straps: thin ribbons along each path, the middle one over A, the outer two under A
    const webbing = new THREE.MeshPhysicalMaterial({ color: 0x1c1d21, roughness: 0.85, side: THREE.DoubleSide });
    const ribbon = (pts, z0, z1) => {
      const pos = [], idx = [];
      pts.forEach(([x, y], i) => { pos.push(x, y, z0, x, y, z1); if (i) idx.push(2 * i - 2, 2 * i - 1, 2 * i, 2 * i - 1, 2 * i + 1, 2 * i); });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
      return mesh(g, webbing);
    };
    const [p1, p2] = strapPaths();
    parts.push(ribbon(p1, -4.5, 4.5), ribbon(p2, -12, -7.5), ribbon(p2, 7.5, 12));
    // a pan-head screw holding each strap end
    const screw = (p, n, z) => {
      const head = lathe([[0, 0], [2.6, 0], [2.6, 0.6], [2.2, 1.5], [0, 1.7]], mat.zinc());
      const g = group(head);
      g.position.set(p[0] + n[0] * 0.3, p[1] + n[1] * 0.3, z);
      g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(n[0], n[1], 0));
      return g;
    };
    const nB = [-Math.sin(2 * BETA), Math.cos(2 * BETA)];
    const s1 = p1[1], e1 = p1[p1.length - 2], e2 = p2[p2.length - 2];
    parts.push(screw(s1, [0, 1], 0), screw(e1, [-nB[0], -nB[1]], 0));
    for (const z of [-9.75, 9.75]) parts.push(screw(e2, nB, z));   // (the outer straps are screwed under the fixed block, out of sight)
    return group(parts);
  },
};
