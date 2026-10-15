// Kinematic coupling (Maxwell type, the maker version): a bottom aluminium plate with three
// V-grooves pointing to the centre, each made from two steel dowel pins, and a magnet in the middle
// for the hold-down; the top plate lies upside down beside it, showing the three steel balls that
// drop into the grooves and the steel disc the magnet pulls on.
const R = 23, PIN_R = 2.5, PIN_L = 20, GAP = 4.2, BALL_R = 6, T = 8;
const ANG = [90, 210, 330];

export default {
  alt: 'Render of a kinematic coupling: a round black aluminium plate with three V-grooves pointing to its centre, each made of two steel pins, and a magnet in the middle; beside it the matching blue top plate lies upside down, showing the three steel balls that drop into the grooves.',
  view: { dir: [0.3, 0.85, 1.0], fill: 1.12 },
  build(K) {
    const { group, at, cyl, sphere, mat } = K;
    const base = group(at(cyl(38, T, mat.anodised(0x2a2b2e)), [0, T / 2, 0]));
    for (const a of ANG) {
      const r = (a * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
      for (const side of [-1, 1]) {
        const x = R * c + side * GAP * s, z = -R * s + side * GAP * c;
        base.add(at(cyl(PIN_R, PIN_L, mat.steel()), [x, T + 0.3, z], [0, a, 90]));
      }
    }
    base.add(at(cyl(7, 0.6, mat.magnet()), [0, T, 0]));
    // top plate, upside down: balls half sunk into its face
    const top = group(at(cyl(38, T, mat.anodised(0x2f5fa8)), [0, T / 2, 0]));
    for (const a of ANG) {
      const r = (a * Math.PI) / 180;
      top.add(at(sphere(BALL_R, mat.chrome()), [R * Math.cos(r), T + 0.5, -R * Math.sin(r)]));
    }
    top.add(at(cyl(7, 0.6, mat.steel()), [0, T, 0]));
    return group(at(base, [-44, 0, 0]), at(top, [44, 0, 6], [0, 25, 0]));
  },
};
