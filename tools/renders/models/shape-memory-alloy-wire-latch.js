// Shape-memory-alloy (nitinol) wire latch: a printed test rig. A lid hinged on a post at the left
// is held shut by a catch lever at the right whose nib sits in a notch in the lid's lip; a small
// compression spring pushes the catch into the notch. A thin nitinol wire runs from a crimp on the
// post to a crimp on the catch: when current warms it, it shortens and pulls the catch out of the
// notch. Two leads run from the crimps to a connector on the base.
export default {
  alt: 'Render of a shape-memory-alloy wire latch: a 3D-printed lid hinged on a post is held shut by a catch lever whose nib sits in a notch in the lid\'s lip, pushed in by a small spring, with a thin nitinol wire running from the post to the catch, ready to pull it free when current warms it.',
  view: { dir: [0.25, 0.42, 1.2], fill: 0.95 },
  build(K) {
    const { group, at, box, cyl, extrude, spring, wire, mat, THREE } = K;
    const grey = mat.pla(0x5d636b, 1.2), lidM = mat.pla(0xe4782d, 1.2), catchM = mat.pla(0x3f7fc4, 1.2);
    const steel = mat.stainless(), brass = mat.brass();
    const nitinol = new THREE.MeshPhysicalMaterial({ color: 0x9a9ca0, metalness: 1, roughness: 0.4 });
    const D = 12;                                            // part thickness (z), front face at z = 6
    const base = at(box(124, 6, 34, grey, 1.5), [-6, 3, 0]);
    const post = at(box(8, 58, D, grey, 1), [-52, 6 + 29, 0]);

    // lid: a bar along the top with a lip hanging down at the right; a notch in the lip's inner face
    const lidPts = [[-58, 64], [40, 64], [40, 38], [34, 38], [34, 44], [36.2, 44], [36.2, 48.5], [34, 48.5], [34, 58], [-58, 58]];
    const lid = extrude(lidPts, D, lidM, { bevel: 0.4 });
    const hinge = at(cyl(1.6, D + 4, steel), [-52, 61, 0], [90, 0, 0]);

    // catch lever: pivots at the bottom, a nib at the top pointing into the notch
    const catchPts = [[26, 9], [32, 9], [32, 44.6], [35.6, 44.6], [35.6, 47.8], [32, 49.5], [26, 49.5]];
    const catchArm = extrude(catchPts, D - 2, catchM, { bevel: 0.4 });
    const pivotBoss = at(box(12, 10, D + 6, grey, 1), [29, 6 + 5, 0]);
    const pivot = at(cyl(1.5, D + 8, steel), [29, 13, 0], [90, 0, 0]);
    // spring block and the spring pushing the catch to the right
    const block = at(box(8, 26, D, grey, 1), [4, 6 + 13, 0]);
    const spr = at(spring(3.2, 0.45, 7, 18, steel), [8, 24, 0], [0, 0, -90]);

    // nitinol wire with a brass crimp and a screw at each end, on the front faces
    const zf = D / 2 + 1.2, yw = 40;
    const crimp = (x) => group(at(cyl(1.1, 5, brass), [x, yw, zf], [0, 0, 90]), at(cyl(1.6, 1.4, steel), [x + (x < 0 ? -3.5 : 3.5), yw, zf - 0.4], [90, 0, 0]));
    const smaWire = wire([[-49, yw, zf], [-20, yw, zf], [10, yw, zf], [27.5, yw, zf]], 0.32, nitinol);
    // leads to a connector on the base
    const red = mat.plastic(0xc0392b), black = mat.plastic(0x1c1c1e);
    const leadA = wire([[-51.5, yw, zf], [-46, yw - 4, zf + 1], [-45, 20, zf + 1.5], [-42, 8, 10], [-30, 6.8, 13]], 0.7, red);
    const leadB = wire([[30.5, yw, zf], [33, yw - 6, zf + 1], [33.5, 24, zf + 2], [30, 9, 12], [10, 6.8, 13], [-22, 6.8, 13]], 0.7, black);
    const connector = at(box(10, 5, 6, mat.nylon(0xf2eee4), 0.8), [-26, 8.5, 13]);
    return group(base, post, lid, hinge, catchArm, pivotBoss, pivot, block, spr, crimp(-48.5), crimp(28), smaWire, leadA, leadB, connector);
  },
};
