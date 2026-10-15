// Friction-welded plastic: two 3D-printed plates butted edge to edge, with a melted bead of
// filament friction-welded part of the way along the seam (the rest still open), and a short stub
// of the filament used, its end melted, lying beside them.
export default {
  alt: 'Render of a friction-welded plastic joint: two 3D-printed plates laid edge to edge with a rough melted bead of filament fused along most of the seam, the last part of the seam still open, and a short stub of filament with a worn, melted end lying beside them.',
  view: { dir: [0.9, 1.0, 1.15], fill: 1.0 },
  build(K) {
    const { group, at, box, sphere, cyl, wire, mat } = K;
    const plate = mat.pla(0x3a7bc8, 12), melt = mat.plastic(0x2a5f9e);
    const plates = [-1, 1].map((s) => at(box(28, 3, 40, plate, 0.4), [s * 14.2, 1.5, 0]));
    let seed = 5;
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    // the bead: a flattened, wobbly ridge of melted filament with ripples, along the seam
    const pts = [];
    for (let z = -20; z <= 7; z += 1.5) pts.push([(r() - 0.5) * 0.8, 3.0, z]);
    const ridge = wire(pts, 1.5, melt); ridge.scale.set(1, 0.55, 1); ridge.position.y = 1.35;
    const bead = [ridge];
    for (let z = -19.5; z <= 7; z += 0.75) {
      const b = sphere(1, melt, 24);
      b.scale.set(2.0 + 0.6 * r(), 0.6 + 0.2 * r(), 1.0 + 0.3 * r());
      bead.push(at(b, [(r() - 0.5) * 0.8, 3.15, z], [0, r() * 30 - 15, 0]));
    }
    const end = sphere(1, melt, 24); end.scale.set(2.8, 1.2, 2.4);
    bead.push(at(end, [0.2, 3.2, 8]));
    // a stub of 1.75 mm filament, its end mushroomed by the weld, lying on the bench
    const stub = group(at(cyl(0.875, 24, melt), [0, 0.875, 12], [90, 0, 0]), at(sphere(1.05, melt, 24), [0, 0.95, 0]));
    stub.children[1].scale.set(1, 0.9, 0.8);
    return group(plates, bead, at(stub, [36, 0, 4], [0, -20, 0]));
  },
};
