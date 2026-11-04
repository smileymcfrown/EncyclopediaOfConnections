// Slot-in model hinge: the back edge of a balsa model wing and its aileron, joined by flat CA hinges
// pushed half into a slit in each and glued; the aileron is swung down so the hinges bend in the
// gap between the bevelled edges. The near end is cut through one hinge to show it buried in the
// two slits; a spare hinge lies in front.
const Z0 = -75, Z1 = 40;                       // span of the piece (mm); the near end cuts a hinge
const HINGES = [[-60, -40], [-20, 0], [30, 40]];
const DOWN = 12;                               // aileron swung down (degrees)

export default {
  alt: 'Render of slot-in model hinges: the back edge of a balsa model plane wing and its aileron joined by thin white flat hinges pushed half into a slit in each part and glued, with the aileron swung down so the hinges bend in the gap between the bevelled edges; the cut end shows one hinge buried in both slits, and a spare hinge lies in front.',
  kind: 'cross-section',
  note: 'weak: at page size the hinges show only as small white tabs in the gap; the slits they sit in are hard to see',
  view: { dir: [0.6, 0.7, 1.0], fill: 1.1, exposure: 0.78, light: [-0.4, 1, 0.6], target: [0, -3, 8] },
  build(K) {
    const { THREE, group, at, extrude } = K;
    const tex = (grain, base) => {
      const c = document.createElement('canvas'); c.width = c.height = 512;
      const g = c.getContext('2d'); g.fillStyle = base; g.fillRect(0, 0, 512, 512);
      let sd = 11; const rnd = () => ((sd = (sd * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < 90; i++) {
        g.strokeStyle = grain; g.globalAlpha = 0.12 + 0.3 * rnd(); g.lineWidth = 1 + 2.5 * rnd();
        const x0 = rnd() * 512; g.beginPath();
        for (let y = 0; y <= 512; y += 16) g.lineTo(x0 + 6 * Math.sin(y / 90 + i) + 2 * rnd(), y);
        g.stroke();
      }
      const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };
    const balsa = new THREE.MeshPhysicalMaterial({ map: tex('#a9844c', '#dcc08c'), roughness: 0.85, metalness: 0 });
    const endGrain = new THREE.MeshPhysicalMaterial({ map: tex('#9a7642', '#ccb07e'), roughness: 0.92, metalness: 0 });
    const hingeMat = new THREE.MeshPhysicalMaterial({ color: 0xf5f3ec, roughness: 0.8, metalness: 0 });
    const L = Z1 - Z0;
    // an extruded balsa part: profile in x-y, along z; texture scaled so the grain runs along the span
    const part = (pts, z0, z1) => {
      const m = extrude(pts, z1 - z0, [endGrain, balsa], { bevel: 0 });
      const uv = m.geometry.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 90, uv.getY(i) / 90);
      return at(group(m), [0, 0, (z0 + z1) / 2]);
    };
    // the fixed part: the back of the wing, tapering to a square back edge
    const wing = part([[-62, -5.2], [-1.4, -3.2], [-1.4, 3.2], [-62, 5.2]], Z0, Z1);
    // the aileron: bevelled front edge (so it can swing) tapering to a thin trailing edge
    const ail = part([[1.4, 0], [4.6, -3.2], [46, -0.5], [46.4, 0], [46, 0.5], [4.6, 3.2]], Z0, Z1);
    // the hinges: one leaf in each slit, bending at the hinge line
    const leaf = (x0, x1, z0, z1) => at(K.box(x1 - x0, 0.3, z1 - z0, hingeMat, 0.05), [(x0 + x1) / 2, 0, (z0 + z1) / 2]);
    const fixedLeaves = HINGES.map(([a, b]) => leaf(-12.5, 0.05, a, b));
    const movingLeaves = HINGES.map(([a, b]) => leaf(-0.05, 12.5, a, b));
    const swing = group(ail, movingLeaves);
    swing.rotation.z = (-DOWN * Math.PI) / 180;
    // a spare hinge on the bench
    // the whole piece tipped a little so it rests on the wing's back edge and the aileron tip
    const piece = at(group(wing, fixedLeaves, swing), [0, 0, 0], [0, 0, 2.4]);
    piece.updateMatrixWorld(true);
    const floor = new THREE.Box3().setFromObject(piece).min.y;
    const spare = at(K.box(25, 0.3, 20, hingeMat, 0.05), [12, floor + 0.15, 64], [0, 18, 0]);
    return group(piece, spare);
  },
};
