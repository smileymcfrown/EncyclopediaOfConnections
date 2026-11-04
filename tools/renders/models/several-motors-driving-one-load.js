// Several motors driving one load: two identical stepper motors bolted behind an upright clear
// acrylic plate, one each side, each turn a small steel 12-tooth pinion that meshes with one large printed
// 48-tooth gear in the middle; the big gear turns a winch drum wound with cord, so both motors'
// turning forces add on the one load.
export default {
  alt: 'Render of several motors driving one load: two identical stepper motors bolted behind an upright clear acrylic plate each turn a small steel pinion, and both pinions mesh with one large printed gear between them that turns a winch drum wound with cord.',
  view: { dir: [0.62, 0.34, 1.15], fill: 1.15, light: [-0.4, 1, 0.9] },
  build(K) {
    const { group, at, box, cyl, gear, torus, wire, lathe, mat } = K;
    const parts = [];
    const alu = mat.aluminium(), pla = mat.pla(0x2f6fc0, 80), drumM = mat.pla(0xe4782d, 80);
    const m = 1.5, C = (12 + 48) * m / 2, H = 80;       // module, centre distance (45), shaft height
    // upright plate on a base, with two gussets behind
    // the plate is clear laser-cut acrylic, so the motors show through it
    const acrylic = new K.THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0, transmission: 1, thickness: 0.5, ior: 1.49, specularIntensity: 0.6 });
    const edge = new K.THREE.MeshPhysicalMaterial({ color: 0xc4dce6, metalness: 0, roughness: 0.2, transmission: 0.4, thickness: 2 });
    const plate = at(box(210, 130, 5, acrylic, 1), [0, 65 + 5, 0]); plate.castShadow = false;
    parts.push(plate, at(box(210.4, 0.6, 4, edge, 0.2), [0, 135, 0]));
    for (const sx of [-1, 1]) parts.push(at(box(0.6, 129, 4, edge, 0.2), [sx * 105.1, 70, 0]));
    parts.push(at(box(230, 5, 110, alu, 1), [0, 2.5, -30]));
    for (const x of [-100, 100]) parts.push(at(K.extrude([[0, 0], [60, 0], [0, 60]], 4, alu, { bevel: 0.6 }), [x, 5, -2.5], [0, 90, 0]));
    // the motors (NEMA 17), behind the plate with their shafts forward through it
    for (const sx of [-1, 1]) {
      const x = sx * C;
      parts.push(at(box(42, 42, 7, alu, 2), [x, H, -2.5 - 3.5]));
      parts.push(at(box(41, 41, 26, mat.blackOxide(), 1), [x, H, -2.5 - 7 - 13]));
      parts.push(at(box(42, 42, 7, alu, 2), [x, H, -2.5 - 33 - 3.5]));
      // screws holding the motor, on the front of the plate
      for (const [dx, dy] of [[-15.5, -15.5], [15.5, -15.5], [-15.5, 15.5], [15.5, 15.5]]) {
        parts.push(at(cyl(2.8, 3, mat.blackOxide()), [x + dx, H + dy, 4], [90, 0, 0]));
        parts.push(at(cyl(1.2, 0.6, mat.steel(), { seg: 6 }), [x + dx, H + dy, 5.6], [90, 0, 0]));
      }
      // cable from the back of the motor down to the base
      const cz = -2.5 - 40 - 1;
      parts.push(wire([[x + sx * 8, H - 14, cz], [x + sx * 10, H - 30, cz - 10], [x + sx * 4, 20, cz - 22], [x - sx * 10, 6.5, cz - 34]], 2.2, mat.rubber(0x202022)));
      // the steel pinion (12 teeth) on the motor shaft, one tooth pointing at the big gear
      parts.push(at(cyl(2.5, 26, mat.steel()), [x, H, 10], [90, 0, 0]));
      parts.push(at(group(gear(12, m, 10, mat.steel(), { bore: 2.5 })), [x, H, 12], [0, 0, -0.375 * 30]));
      parts.push(at(cyl(6, 6, mat.steel()), [x, H, 20], [90, 0, 0]));
    }
    // the big printed gear (48 teeth) in the middle, with spoke windows; gaps face both pinions
    const big = gear(48, m, 10, pla, { bore: 4 });
    parts.push(at(group(big), [0, H, 12], [0, 0, -0.875 * 7.5]));
    parts.push(at(cyl(8, 14, pla), [0, H, 20], [90, 0, 0]));
    // output shaft in a bearing in the plate, and the winch drum on it with cord wound on
    parts.push(at(cyl(4, 62, mat.stainless()), [0, H, 25], [90, 0, 0]));
    parts.push(at(cyl(11, 7, mat.steel()), [0, H, -6], [90, 0, 0]));
    const drum = lathe([[4, 0], [16, 0], [16, 2.5], [10, 4], [10, 20], [16, 21.5], [16, 24], [4, 24], [4, 0]], drumM);
    parts.push(at(drum, [0, H, 27], [90, 0, 0]));
    for (let i = 0; i < 7; i++) parts.push(at(torus(11.1, 1.1, mat.nylon(0xe9e4d4)), [0, H, 31.5 + i * 2.2]));
    // the cord leaves the drum and runs down to the load
    parts.push(wire([[11.1, H, 44.7], [11.5, H - 20, 44.7], [11.7, 40, 44.7], [11.7, 26, 44.7]], 1.1, mat.nylon(0xe9e4d4)));
    parts.push(at(cyl(14, 14, mat.castIron()), [11.7, 13, 44.7]));
    parts.push(at(torus(4, 1.2, mat.zinc()), [11.7, 23.5, 44.7]));
    return group(parts);
  },
};
