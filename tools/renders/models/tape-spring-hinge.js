// Tape-spring hinge: two 3D-printed blocks joined by a short piece of steel tape-measure blade,
// clamped to each block under a metal plate. The hinge is folded to a right angle: the tape keeps
// its curved cross-section in the straight parts and has gone flat across in the tight kink.
const R = 11, W = 19, SAG = 2.4, L1 = 26, L3 = 26, Y0 = 12;

function tapeGeometry(K) {
  const { THREE } = K;
  const arcL = (Math.PI / 2) * R, total = L1 + arcL + L3;
  const ns = 160, nw = 16;
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const pathAt = (s) => {               // centreline point, direction and left normal (XY plane)
    if (s <= L1) return { p: [s - L1, Y0 + 0.1], n: [0, 1] };
    if (s <= L1 + arcL) {
      const a = (s - L1) / R;           // turning left round the centre (0, Y0 + 0.1 + R)
      return { p: [R * Math.sin(a), Y0 + 0.1 + R - R * Math.cos(a)], n: [-Math.sin(a), Math.cos(a)] };
    }
    return { p: [R, Y0 + 0.1 + R + (s - L1 - arcL)], n: [-1, 0] };
  };
  const pos = [], idx = [];
  for (let i = 0; i <= ns; i++) {
    const s = (total * i) / ns, { p, n } = pathAt(s);
    // curved across in the straight parts, flat across in the kink
    const k = 1 - smooth(L1 - 7, L1 + 1, s) + smooth(L1 + arcL - 1, L1 + arcL + 7, s);
    for (let j = 0; j <= nw; j++) {
      const w = -W / 2 + (W * j) / nw, d = SAG * k * Math.pow((2 * w) / W, 2);
      pos.push(p[0] + n[0] * d, p[1] + n[1] * d, w);
    }
  }
  for (let i = 0; i < ns; i++) for (let j = 0; j < nw; j++) {
    const a = i * (nw + 1) + j, b = a + nw + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

export default {
  alt: 'Render of a tape-spring hinge: a short strip of yellow steel tape-measure blade joins two grey 3D-printed blocks, clamped to each under a metal plate with two screws; the hinge is folded to a right angle, the tape curved across its width in the straight parts and bent into a flat kink at the fold.',
  view: { dir: [-0.75, 0.75, 1.2], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, mesh, mat, THREE } = K;
    const grey = mat.pla(0x5b6068, 60), plateM = mat.aluminium(), screwM = mat.blackOxide();
    const tapeM = mat.paint(0xe8ac00);
    tapeM.side = THREE.DoubleSide;
    const tape = mesh(tapeGeometry(K), tapeM);
    const blockA = at(box(44, Y0, 30, grey, 1), [-23, Y0 / 2, 0]);
    const blockB = at(box(12, 56, 30, grey, 1), [R + 0.1 + 6, 28, 0]);
    // clamp plates with two screws each
    const plateA = at(box(12, 2.5, 28, plateM, 0.5), [-L1 + 8, Y0 + 0.1 + SAG + 1.25, 0]);
    const plateB = at(box(2.5, 12, 28, plateM, 0.5), [R - SAG - 1.25, Y0 + R + L3 - 8, 0]);
    const screws = [];
    for (const z of [-9, 9]) {
      screws.push(at(cyl(2.7, 1.6, screwM), [-L1 + 8, Y0 + 0.1 + SAG + 2.5 + 0.8, z]));
      screws.push(at(cyl(2.7, 1.6, screwM), [R - SAG - 2.5 - 0.8, Y0 + R + L3 - 8, z], [0, 0, 90]));
    }
    return group(blockA, blockB, tape, plateA, plateB, screws);
  },
};
