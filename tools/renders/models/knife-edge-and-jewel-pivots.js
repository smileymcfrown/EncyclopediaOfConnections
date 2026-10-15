// Knife-edge pivot: a brass balance beam carried on a hardened steel knife edge that runs through
// it, the edge resting in two polished agate V-seats on brass pillars (the classic scale-beam pivot).
export default {
  alt: 'Render of a knife-edge pivot: a brass balance beam with a sharp triangular steel blade through its middle, the blade\'s lower edge resting in shallow V-grooves in two polished stone seats on top of two brass pillars, so the beam can rock almost without friction.',
  view: { dir: [0.45, 0.3, 1.0], fill: 1.35, target: [0, -4, 0] },
  build(K) {
    const { group, at, box, cyl, extrude, mat } = K;
    const brass = mat.brass(), steel = mat.steel(), iron = mat.paint(0x23352b);
    const agate = K.mat.plastic(0x9c7656);
    const zs = [-15, 15];                    // the two seats, front and back
    const parts = [at(box(90, 8, 56, iron, 2), [0, 4, 0])];
    const top = 8 + 30;                      // top of the pillars
    for (const z of zs) {
      parts.push(at(cyl(5, 30, brass), [0, 8 + 15, z]));
      // an agate seat: a block with a wide V-groove along the knife edge
      const v = [[-8, 0], [8, 0], [8, 8], [3.2, 8], [0, 5.6], [-3.2, 8], [-8, 8]];
      parts.push(at(extrude(v, 7, agate, { bevel: 0.4 }), [0, top, z]));
    }
    // the knife edge: a long steel prism, edge down, its tip in the bottom of the V-grooves
    const tip = top + 5.6;
    const knife = at(extrude([[-0.08, 0], [0.08, 0], [4, 11], [-4, 11]], 44, steel, { bevel: 0.05 }), [0, tip, 0]);
    // the beam: a brass bar the knife passes through, with a pointer standing up from its middle
    const beam = at(box(150, 10, 6, brass, 1), [0, tip + 5 + 5, 0]);
    const pointer = at(cyl(1, 34, brass, { r2: 0.4 }), [0, tip + 15 + 17, 0]);
    const ends = [-73, 73].map((x) => at(K.torus(3.2, 0.9, steel), [x, tip + 10, 0], [0, 90, 0]));
    return group(...parts, knife, beam, pointer, ...ends);
  },
};
