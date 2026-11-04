// Pull-tab slider: the right-hand page of an open card book has a long slot; a card boat on the
// front rides on a green pull strip that slides in a channel behind the page, and the strip's tab
// sticks out of the page edge, pulled part way out.
const T = 0.45;                 // card thickness (mm)
const PW = 150, PD = 110;       // page width (x) and depth (z)
const SLOT = { x0: -58, x1: 34, z: 34, w: 5 };

export default {
  alt: 'Render of a pull-tab slider in a card book: on the right-hand page a cut-out card boat sits over a long slot, fixed to a green card strip that slides in a channel behind the page, and the strip\'s rounded tab sticks out of the edge of the page, pulled part way out.',
  view: { dir: [0.55, 0.8, 1.0], fill: 1.75, exposure: 0.72, light: [-0.4, 1, 0.6], target: [68, 0, 8] },
  build(K) {
    const { THREE, group, at, extrude, roundRect, box } = K;
    const paper = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.9, metalness: 0 });
    // a flat card piece: outline in page coordinates [u, v] (v runs away from the viewer), lying at height y
    const flat = (outline, m, y, opts = {}) => at(extrude(outline, opts.t || T, m, { bevel: 0.04, ...opts }), [0, y + (opts.t || T) / 2, 0], [-90, 0, 0]);
    const cream = paper(0xecd9a8), back = paper(0xdcc796), green = paper(0x4fa868);
    const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];

    // the right-hand page: backing sheet, pull strip and two guide strips, then the page with its slot
    const backing = flat(rect(-PW / 2, -PD / 2, PW / 2, PD / 2), back, 0);
    const sz = -SLOT.z;                                              // slot centre in page coordinates
    const strip = at(extrude(roundRect(160, 13, 6), T, green, { bevel: 0.04 }), [17, 2 * T + T / 2, SLOT.z], [-90, 0, 0]);
    const guides = [44, 60].map((u) => flat(rect(u - 4, sz - 12, u + 4, sz + 12), back, T));
    const slot = rect(SLOT.x0, sz - SLOT.w / 2, SLOT.x1, sz + SLOT.w / 2).reverse();
    const page = flat(rect(-PW / 2, -PD / 2, PW / 2, PD / 2), cream, 3 * T, { holes: [slot] });

    // the picture: a card boat whose stand sits over the slot (its tabs go through to the strip)
    const top = 4 * T + 0.02, bx = -18;
    const red = paper(0xc4442a), white = paper(0xfaf8f2), blue = paper(0x6fa6d8), brown = paper(0x8a5a35);
    const stand = flat(rect(bx - 5, sz - 3.5, bx + 5, sz + 6), brown, top);
    const hull = flat([[bx - 16, sz + 6], [bx + 16, sz + 6], [bx + 22, sz + 17], [bx - 22, sz + 17]], red, top);
    const sail1 = flat([[bx - 2, sz + 19], [bx - 2, sz + 52], [bx - 18, sz + 19]], white, top);
    const sail2 = flat([[bx + 2, sz + 19], [bx + 2, sz + 48], [bx + 15, sz + 19]], blue, top);
    const right = at(group(backing, strip, guides, page, stand, hull, sail1, sail2), [PW / 2 + 1, 2.2, 0]);

    // the book: a plain left-hand page and the cloth-covered boards underneath
    const left = at(group(flat(rect(-PW / 2, -PD / 2, PW / 2, PD / 2), cream, 0, { t: 4 * T })), [-PW / 2 - 1, 2.2, 0]);
    const boardMat = paper(0x2d4a73);
    const boards = [-1, 1].map((s) => at(box(PW + 6, 2.2, PD + 8, boardMat, 0.6), [s * (PW / 2 + 3), 1.1, 0]));
    return group(boards, left, right);
  },
};
