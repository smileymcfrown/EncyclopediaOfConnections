// Heat staking: a small circuit board held on a 3D-printed base by its plastic posts. Three posts
// have been melted down into domed heads wider than the board's holes; the fourth still sticks up
// through its hole, ready for the soldering iron.
export default {
  alt: 'Render of heat staking: a small green circuit board sits on a blue 3D-printed base, held at three corners by the base\'s own plastic posts melted into domed heads over the board\'s holes; at the fourth corner the post still sticks up straight through the hole, not yet melted.',
  view: { dir: [0.8, 1.0, 1.25], fill: 0.95 },
  build(K) {
    const { group, at, box, cyl, lathe, extrude, roundRect, mat } = K;
    const pla = mat.pla(0x2f6fc4, 70), pcbM = mat.plastic(0x1d6a3c), gold = mat.brass();
    const W = 50, D = 32, BT = 3, SO = 4, PT = 1.6;
    const yPcb = BT + SO;                 // underside of the board
    const corners = [[-W / 2 + 4, -D / 2 + 4], [W / 2 - 4, -D / 2 + 4], [W / 2 - 4, D / 2 - 4], [-W / 2 + 4, D / 2 - 4]];
    const parts = [at(box(W + 14, BT, D + 14, pla, 1.2), [0, BT / 2, 0])];
    // the board, with four holes
    const shape = roundRect(W, D, 1);
    for (const [x, z] of corners) { const h = new K.THREE.Path(); h.absarc(x, -z, 1.6, 0, Math.PI * 2, true); shape.holes.push(h); }
    parts.push(at(extrude(shape, PT, pcbM, { bevel: 0.1 }), [0, yPcb + PT / 2, 0], [-90, 0, 0]));
    // a few parts on the board: a chip, a push button, two small resistors
    parts.push(at(box(10, 1.4, 6, mat.plastic(0x1a1a1a), 0.3), [-6, yPcb + PT + 0.7, -3]));
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) parts.push(at(box(0.5, 0.3, 1.4, mat.stainless(), 0.05), [-9.8 + i * 2.54, yPcb + PT + 0.15, -3 + s * 3.4]));
    parts.push(at(box(6, 3.4, 6, mat.plastic(0x1a1a1a), 0.3), [11, yPcb + PT + 1.7, 3]));
    parts.push(at(cyl(1.7, 1.5, mat.plastic(0x222222)), [11, yPcb + PT + 4.1, 3]));
    for (const dz of [-1.6, 1.6]) parts.push(at(box(2, 0.5, 1.2, mat.plastic(0x222222), 0.1), [8, yPcb + PT + 0.25, -7 + dz]));
    // four bosses with posts; three melted into domed heads
    corners.forEach(([x, z], i) => {
      parts.push(at(cyl(3.2, SO, pla), [x, BT + SO / 2, z]));
      parts.push(at(cyl(2.2, 0.05, gold), [x, yPcb + PT + 0.02, z]));          // copper ring round the hole
      if (i === 3) {
        parts.push(at(cyl(1.4, PT + 3, pla), [x, yPcb + (PT + 3) / 2, z]));
      } else {
        parts.push(at(cyl(1.4, PT, pla), [x, yPcb + PT / 2, z]));
        parts.push(at(lathe([[0, 0], [2.9, 0], [2.85, 0.3], [2.4, 1.0], [1.5, 1.45], [0, 1.6]], pla), [x, yPcb + PT, z]));
      }
    });
    return group(parts);
  },
};
