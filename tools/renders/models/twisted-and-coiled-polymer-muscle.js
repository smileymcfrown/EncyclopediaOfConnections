// Twisted-and-coiled polymer muscle: a length of nylon fishing line over-twisted into a tight coil,
// with a thin heater wire wound along it, hanging from a small test stand by a crimped end and
// holding up a brass weight; thin red and black leads carry the heating current to its two ends.
export default {
  alt: 'Render of a twisted-and-coiled polymer muscle on a small test stand: a nylon fishing line twisted into a tight coil like a phone cord, with a thin heater wire wound along it, hangs from the stand’s arm by a crimped end and holds up a brass weight; red and black leads carry current to its ends to heat it.',
  view: { dir: [0.5, 0.25, 1.2], fill: 1.08, target: [4, 6, 0] },
  build(K) {
    const { group, at, box, cyl, spring, torus, wire, mat } = K;
    const alu = new K.THREE.MeshPhysicalMaterial({ color: 0xb8bcc2, metalness: 1, roughness: 0.5 });
    const X = 20;                                        // where the muscle hangs
    const base = at(box(76, 6, 50, mat.wood('#b98a5a', '#8a6038'), 1), [-2, 3, 0]);
    const post = at(box(10, 120, 10, alu, 1), [-28, 66, 0]);
    const arm = at(box(62, 10, 10, alu, 1), [-2, 121, 0]);
    const screw = at(cyl(2.2, 3, mat.zinc()), [X, 127.5, 0]);
    // the muscle: 1 mm line coiled tightly (50 turns in 50 mm), heater wire wound along it
    const coil = at(spring(1.15, 0.5, 48, 50, mat.plastic(0xc9b98a)), [X, 61, 0]);
    const core = at(cyl(0.7, 50, mat.plastic(0xb8a874)), [X, 86, 0]);
    const heater = at(spring(1.75, 0.13, 9, 50, mat.stainless()), [X, 61, 0]);
    const crimpTop = at(cyl(1.9, 6, mat.brass()), [X, 113, 0]);
    const crimpBottom = at(cyl(1.9, 6, mat.brass()), [X, 58.5, 0]);
    const hook = wire([[X, 55.5, 0], [X, 52, 0], [X + 2.4, 49.5, 0], [X, 47, 0], [X - 2.4, 49.5, 0], [X - 1.4, 51.2, 0]], 0.6, mat.steel());
    const eye = at(torus(2.6, 0.8, mat.brass()), [X, 46.5, 0], [0, 90, 0]);
    const weight = at(cyl(9, 20, mat.brass()), [X, 34, 0]);
    // leads: red to the top end, black (with slack, as the end moves) to the bottom end
    const red = wire([[X, 114, 0], [X - 4, 114.5, 5.4], [-10, 115, 5.6], [-22, 114, 5.6], [-22.5, 90, 5.6], [-22.5, 7, 5.6]], 0.55, mat.plastic(0xc62e2a));
    const black = wire([[X, 59.5, 0], [X - 3, 60, 3.5], [6, 52, 12], [-10, 50, 9], [-22, 40, 5.8], [-22.5, 20, 5.8], [-22.5, 7, 5.8]], 0.55, mat.plastic(0x202124));
    return group(base, post, arm, screw, coil, core, heater, crimpTop, crimpBottom, hook, eye, weight, red, black);
  },
};
