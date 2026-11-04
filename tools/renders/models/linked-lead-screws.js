// Linked lead screws: a small printer-style Z stage. Two upright lead screws stand in bearing
// blocks on a base plate, each with the same aluminium toothed pulley at its foot; one closed black
// timing belt loops round both screw pulleys and the pulley of a stepper motor between them, so the
// screws must turn together. An aluminium bed rides on a brass nut on each screw, and a top bar
// carries the upper bearings.
export default {
  alt: 'Render of linked lead screws: two upright lead screws each carry a brass nut under an aluminium bed, and at their feet the same toothed pulley on each screw is wrapped by one closed black timing belt that also runs round the pulley of a single stepper motor, so both screws turn together.',
  view: { dir: [0.5, 0.8, 1.2], fill: 1.05, light: [-0.5, 1, 0.6] },
  build(K) {
    const { group, at, box, cyl, tube, gear, threaded, mesh, mat, THREE } = K;
    const parts = [];
    const frame = mat.pla(0xe4782d, 120), ply = mat.wood('#d8bd94', '#b08d5e'), alu = mat.aluminium(), belt = mat.rubber(0x1e1e20);
    const S = 62, Hs = 170, lift = 52, base = lift + 8;  // screws at x = +-S; screw length; plate top
    const motor = [0, 52];                        // motor (x, z), in front of the screws
    const rp = 6.4, by = base + 14;                // pulley pitch radius (20 teeth GT2), belt height
    // base plate on four feet, the motor hanging underneath it
    parts.push(at(box(2 * S + 70, 8, 120, ply, 1.5), [0, lift + 4, 25]));
    for (const x of [-S - 22, S + 22]) for (const z of [-25, 75]) parts.push(at(box(22, lift, 22, frame, 2), [x, lift / 2, z]));
    // screws, bearing blocks, pulleys
    for (const x of [-S, S]) {
      parts.push(at(box(30, 8, 30, frame, 1.5), [x, base + 4, 0]));
      parts.push(at(tube(11, 4, 7, mat.steel()), [x, base + 4.5, 0]));
      parts.push(at(threaded(4, 2, Hs - 30, mat.stainless()), [x, by + 8, 0]));
      parts.push(at(cyl(4, 22, mat.stainless()), [x, base + 18, 0]));
    }
    // top bar with upper bearings, on two posts at the back
    const top = base + Hs;
    parts.push(at(box(2 * S + 64, 20, 20, alu, 1.5), [0, top, -18]));
    for (const x of [-S - 22, S + 22]) parts.push(at(box(20, Hs - 10, 20, alu, 1.5), [x, base + (Hs - 10) / 2, -18]));
    for (const x of [-S, S]) {
      parts.push(at(box(26, 12, 28, frame, 1.5), [x, top, -2]));
      parts.push(at(cyl(4, 6, mat.stainless()), [x, top - 9, 0]));
    }
    // the bed on two brass nuts
    const bedY = base + 118;
    parts.push(at(box(2 * S + 50, 5, 100, alu, 1.5), [0, bedY + 2.5, 66]));
    parts.push(at(box(2 * S + 44, 1, 94, mat.paint(0x2b2b2e), 0.4), [0, bedY + 5.5, 66]));
    for (const x of [-S, S]) {
      parts.push(at(box(30, 10, 60, frame, 1.5), [x, bedY - 5, 22]));
      parts.push(at(cyl(11, 3.5, mat.brass()), [x, bedY + 1.75, 0]));
      parts.push(at(cyl(5.5, 16, mat.brass()), [x, bedY - 6, 0]));
      for (const a of [45, 135, 225, 315]) {
        const r = (a * Math.PI) / 180;
        parts.push(at(cyl(1.6, 1.2, mat.zinc()), [x + 8 * Math.cos(r), bedY + 4, 8 * Math.sin(r)]));
      }
    }
    // stepper motor (NEMA 17) hanging under the plate, its shaft up through it
    const [mx, mz] = motor;
    parts.push(at(box(42, 7, 42, alu, 2), [mx, lift - 3.5, mz]));
    parts.push(at(box(41, 26, 41, mat.blackOxide(), 1), [mx, lift - 20, mz]));
    parts.push(at(box(42, 7, 42, alu, 2), [mx, lift - 36.5, mz]));
    parts.push(at(cyl(4, 12, mat.steel()), [mx, base + 4, mz]));
    // the three pulleys, all 20 teeth
    for (const [x, z] of [[-S, 0], [S, 0], [mx, mz]]) {
      parts.push(at(group(gear(20, 0.64, 7, alu, { bore: 2.5 })), [x, by, z], [90, 0, 0]));
      for (const dy of [-4.3, 4.3]) parts.push(at(cyl(rp + 1.6, 1, alu), [x, by + dy, z]));
      parts.push(at(cyl(5.5, 7, alu), [x, by + 8, z]));
    }
    // the belt: a closed loop round the three pulleys (all the same size), a flat band 6 mm tall
    const centres = [[-S, 0], [S, 0], [mx, mz]];
    const R = rp + 0.7, bw = 6, bt = 1.3, n = centres.length;
    const cx = centres.reduce((s, c) => s + c[0], 0) / n, cz = centres.reduce((s, c) => s + c[1], 0) / n;
    const normals = [];                                // outward normal of the run from centre i to i+1
    for (let i = 0; i < n; i++) {
      const [x0, z0] = centres[i], [x1, z1] = centres[(i + 1) % n];
      const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
      let nx = -dz / L, nz = dx / L;
      if (nx * ((x0 + x1) / 2 - cx) + nz * ((z0 + z1) / 2 - cz) < 0) { nx = -nx; nz = -nz; }
      normals.push([nx, nz]);
      const seg = box(L, bw, bt, belt, 0.4);
      seg.position.set((x0 + x1) / 2 + nx * R, by, (z0 + z1) / 2 + nz * R);
      seg.rotation.y = -Math.atan2(dz, dx);
      parts.push(seg);
    }
    for (let i = 0; i < n; i++) {
      const nin = normals[(i - 1 + n) % n], nout = normals[i];
      let a0 = Math.atan2(nin[0], nin[1]), span = Math.atan2(nout[0], nout[1]) - a0;
      while (span > Math.PI) span -= 2 * Math.PI;
      while (span < -Math.PI) span += 2 * Math.PI;
      if (span < 0) { a0 += span; span = -span; }
      const ring = [[R - bt / 2, -bw / 2], [R + bt / 2, -bw / 2], [R + bt / 2, bw / 2], [R - bt / 2, bw / 2], [R - bt / 2, -bw / 2]];
      const geo = new THREE.LatheGeometry(ring.map(([r, y]) => new THREE.Vector2(r, y)), 32, a0, span);
      parts.push(at(mesh(geo, belt), [centres[i][0], by, centres[i][1]]));
    }
    return group(parts);
  },
};
