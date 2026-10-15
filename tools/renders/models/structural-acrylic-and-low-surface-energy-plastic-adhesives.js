// Structural acrylic for low-surface-energy plastics: a lap joint between a white polyethylene strip
// and a blue polypropylene strip, bonded with a thin layer of pale two-part acrylic glue that has
// squeezed out a little at the edges of the overlap, with the glue's twin cartridge and static mixing
// nozzle lying behind.
const T = 3, Wd = 25, L = 80, LAP = 22, G = 0.7;     // strip thickness, width, length, overlap, glue line

export default {
  alt: 'Render of a glued lap joint between two slippery plastic strips, a white polyethylene one and a blue polypropylene one, held by a thin pale layer of two-part structural acrylic glue that has squeezed out a little at the edges of the overlap; behind them lies the glue’s twin cartridge with its long mixing nozzle.',
  view: { dir: [0.35, 0.7, 1.15], fill: 0.98 },
  build(K) {
    const { group, at, box, cyl, lathe, mat } = K;
    const pe = mat.plastic(0xeeede6), pp = mat.plastic(0x2f6fb8);
    const glue = K.mat.plastic(0xe6d58a);
    const x0 = -(L - LAP / 2);                           // lower strip from x0 to LAP/2
    const lower = at(box(L, T, Wd, pe, 0.5), [x0 + L / 2, T / 2, 0]);
    const layer = at(box(LAP, G, Wd, glue, 0.2), [0, T + G / 2, 0]);
    const upper = at(box(L, T, Wd, pp, 0.5), [-LAP / 2 + L / 2, T + G + T / 2, 0]);
    // squeeze-out: small beads along the two ends of the overlap and its two long sides
    const bead = (x, y, r) => at(cyl(r, Wd - 1, glue, { seg: 24 }), [x, y, 0], [90, 0, 0]);
    const beads = [bead(-LAP / 2 - 0.2, T + G + 0.2, 1.1), bead(LAP / 2 + 0.2, T + 0.2, 1.1)];
    for (const z of [-Wd / 2, Wd / 2]) beads.push(at(cyl(0.9, LAP - 2, glue, { seg: 24 }), [0, T + G / 2, z], [0, 0, 90]));
    // the twin cartridge (10:1), outlet and mixing nozzle, lying behind along x
    const cartMat = new K.THREE.MeshPhysicalMaterial({ color: 0xe9e4d6, roughness: 0.35, transmission: 0.35, thickness: 3 });
    const big = at(cyl(15, 105, cartMat), [-20, 15, -48], [0, 0, 90]);
    const small = at(cyl(5.5, 105, cartMat), [-20, 5.5, -48 + 20.5], [0, 0, 90]);
    const fill = at(cyl(14, 96, mat.plastic(0xf2f0ea)), [-24, 15, -48], [0, 0, 90]);
    const plungers = [at(cyl(14.2, 6, mat.plastic(0x3a3c40)), [-70, 15, -48], [0, 0, 90]), at(cyl(5.2, 6, mat.plastic(0x3a3c40)), [-70, 5.5, -27.5], [0, 0, 90])];
    const outlet = at(group(lathe([[0, 0], [15, 0], [15, 2], [8, 9], [5, 14], [0, 14]], cartMat)), [32.5, 15, -48], [0, 0, -90]);
    const nozzle = at(group(lathe([[0, 0], [5.5, 0], [5.5, 8], [4.2, 10], [2.6, 85], [1.4, 88], [0, 88]], new K.THREE.MeshPhysicalMaterial({ color: 0xeef2f4, roughness: 0.25, transmission: 0.7, thickness: 1.5 }))), [46, 15, -48], [0, 0, -90]);
    const mixer = at(group(K.spring(1.8, 0.6, 14, 70, mat.plastic(0x9fa6ad))), [58, 15, -48], [0, 0, -90]);
    return group(lower, layer, upper, ...beads, big, small, fill, ...plungers, outlet, nozzle, mixer);
  },
};
