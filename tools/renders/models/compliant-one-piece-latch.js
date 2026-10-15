// Compliant one-piece latch: a 3D-printed box whose lid has a springy latch printed as part of it.
// The thin beam hangs down the front of the box, its hook is clicked in under a ridge on the box
// wall, and the tab at the bottom is what you lift to bend the beam and let go. Seen from the front
// corner so the side of the latch shows the hook's profile.
const W = 54, H = 32, D = 38, LID = 4.5;
export default {
  alt: 'Render of a 3D-printed box with a one-piece springy latch: a thin plastic beam printed as part of the lid hangs down the front, its hook clicked in under a small ridge on the box wall, with a tab at the bottom to lift and open it.',
  view: { dir: [1.15, 0.4, 1.0], fov: 18, fill: 1.08, target: [4, 0, 0] },
  build(K) {
    const { group, at, box, extrude, mat } = K;
    const boxM = mat.pla(0x5d6670, 120), lidM = mat.pla(0xe0762c, 120);
    const f = D / 2; // front face of the box (z)
    const body = at(box(W, H, D, boxM, 2), [0, H / 2, 0]);
    const lid = at(box(W, LID, D, lidM, 1.6), [0, H + LID / 2 + 0.3, 0]);
    // the keeper: a ridge on the front wall with a sloped top and a square underside
    const keeper = at(extrude([[f - 0.5, H - 8], [f + 2.4, H - 8], [f + 2.4, H - 6], [f - 0.5, H - 4]], 18, boxM, { bevel: 0.3 }), [0, 0, 0], [0, -90, 0]);
    // the latch, one piece with the lid: root block, thin beam, hook and tab (profile z, y)
    const y0 = H + 0.3;
    const prof = [
      [f - 1, y0], [f + 3, y0], [f + 3, H - 8], [f + 0.3, H - 8], [f + 0.3, H - 9.4], [f + 3, H - 13],
      [f + 3, H - 17], [f + 3.8, H - 18.6], [f + 10.5, H - 21], [f + 11.1, H - 19.4], [f + 4.8, H - 17.2],
      [f + 4.8, y0 + LID - 1.5], [f + 3.5, y0 + LID], [f - 1, y0 + LID],
    ];
    const latch = at(extrude(prof, 14, lidM, { bevel: 0.3 }), [0, 0, 0], [0, -90, 0]);
    return group(body, lid, keeper, latch);
  },
};
