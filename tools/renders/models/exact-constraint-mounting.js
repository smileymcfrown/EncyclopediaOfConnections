// Exact-constraint (3-2-1) mounting: a 3D-printed fixture plate with three domed rest buttons underneath the
// part, two steel locating pins along its long side and one at its end, and a spring plunger in a
// block pushing the part diagonally into all of them. The aluminium block sits on the three
// buttons, clear of the plate, touching the three pins.
export default {
  alt: 'Render of an exact-constraint (3-2-1) fixture on a 3D-printed plate: an aluminium block sits on three domed steel rest buttons, clear of the plate, with two steel pins touching its long side and one its end, while a spring plunger in a corner block pushes it into all six points.',
  view: { dir: [-0.6, 0.4, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, lathe, sphere, threaded, hex, mat } = K;
    const plateM = mat.pla(0x2c62a8, 1.5), steel = mat.steel(), alu = mat.aluminium(), black = mat.blackOxide();
    const T = 10;                                           // plate thickness
    const plate = at(box(150, T, 112, plateM, 1.2), [0, T / 2, 10]);

    // the part: an aluminium block 90 x 18 x 50, resting on three buttons (6 mm tall domes)
    const bh = 6, PW = 90, PD = 50, PH = 18;
    const px = -10, pz = 0;                                  // part centre (x, z)
    const part = at(box(PW, PH, PD, alu, 1), [px, T + bh + PH / 2, pz]);
    const button = (x, z) => at(lathe([[0, 0], [5, 0], [5, 3.2], [4.4, 4.6], [3, 5.5], [0, bh]], steel), [x, T, z]);
    const buttons = [button(px - 32, pz - 15), button(px - 32, pz + 15), button(px + 34, pz)];

    // locating pins, 8 mm diameter, standing up from the plate and touching the part
    const PL = 34;
    const pin = (x, z) => group(at(cyl(4, PL, steel), [x, T + PL / 2, z]), at(cyl(4, 0.8, steel, { r2: 3.3 }), [x, T + PL + 0.4, z]));
    const zBack = pz - PD / 2 - 4, xEnd = px - PW / 2 - 4;
    const pins = [pin(px - 28, zBack), pin(px + 28, zBack), pin(xEnd, pz - 8)];

    // the push: a block at the opposite corner with a spring plunger aimed into the part's corner
    const cx = px + PW / 2 + 25, cz = pz + PD / 2 + 25;            // block centre
    const ox = px + PW / 2 + 17.7, oz = pz + PD / 2 + 17.7;          // plunger body starts here, 25 mm from the corner
    const block = at(box(22, 22, 22, plateM, 1.2), [cx, T + 11, cz]);
    const ang = -45;                                        // aim back towards the far corner
    const plunger = at(group(
      at(threaded(4, 1, 20, black), [0, 0, 0], [0, 0, 90]),             // body along -x from the block
      at(hex(10, 4, black, 0), [-7, 0, 0], [0, 0, 90]),                 // lock nut
      at(cyl(2, 3, steel), [-21.5, 0, 0], [0, 0, 90]),                  // nose
      at(sphere(2, steel), [-23, 0, 0]),
    ), [ox, T + bh + PH / 2, oz], [0, ang, 0]);
    return group(plate, part, buttons, pins, block, plunger);
  },
};
