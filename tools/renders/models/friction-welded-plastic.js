// Friction-welded plastic: two 3D-printed plates butted edge to edge, with a melted bead of
// filament friction-welded part of the way along the seam (the rest still open), and a short stub
// of the filament used, its end melted, lying beside them.
export default {
  alt: 'Render of a friction-welded plastic joint: two 3D-printed plates laid edge to edge with a rough melted bead of filament fused along most of the seam, the last part of the seam still open, and a short stub of filament with a melted end lying beside them.',
  view: { dir: [0.75, 0.9, 1.2], fill: 0.95 },
  build(K) {
    const { group, at, box, sphere, cyl, mat } = K;
    const plate = mat.pla(0x3a7bc8, 12), melt = mat.plastic(0x2f69ad);
    const plates = [-1, 1].map((s) => at(box(44, 3, 40, plate, 0.4), [s * 22.25, 1.5, 0]));
    // the bead: overlapping flattened blobs of melted filament, slightly uneven, along the seam
    const bead = [];
    let seed = 3;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let z = -19; z <= 8; z += 0.7) {
      const b = sphere(1, melt, 24);
      b.scale.set(2.3 + 0.6 * r(), 0.9 + 0.25 * r(), 1.3 + 0.4 * r());
      bead.push(at(b, [(r() - 0.5) * 0.7, 3.1, z], [0, r() * 60 - 30, 0]));
    }
    const end = sphere(1, melt, 24); end.scale.set(3.2, 1.5, 2.6);
    bead.push(at(end, [0.2, 3.2, 8.8]));
    // a stub of 1.75 mm filament, its end mushroomed by the weld
    const stub = group(at(cyl(0.875, 26, melt), [0, 13, 0]), at(sphere(1.4, melt, 24), [0, 0.3, 0]));
    stub.children[1].scale.set(1, 0.6, 1);
    const stubAt = at(stub, [26, 0.9, 30], [0, 0, 90]);
    stubAt.rotation.order = 'YXZ'; stubAt.rotation.y = -0.5;
    return group(plates, bead, stubAt);
  },
};
