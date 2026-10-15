// Twisted-string actuator: a small gearmotor on a printed bracket with a hub on its shaft; two
// braided strings tied to the hub run to a printed carriage on two guide rods. The motor has
// twisted the strings round each other, which shortens them and pulls the carriage towards it.
const AY = 22, X0 = -37, X1 = 41, TURNS = 16; // axis height; hub face and carriage face (x); twists shown
function twisted(K, k, m) {
  const pts = [];
  const n = TURNS * 20;
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = X0 + (X1 - X0) * t;
    const e = Math.min(t / 0.06, (1 - t) / 0.06, 1); // fan out to the tie holes at each end
    const r = 0.8 + (3.2 - 0.8) * (1 - e) ** 2;
    const a = 2 * Math.PI * TURNS * t + k * Math.PI;
    pts.push([x, AY + r * Math.sin(a), r * Math.cos(a)]);
  }
  return K.wire(pts, 0.75, m);
}
export default {
  alt: 'Render of a twisted-string actuator: a small gearmotor on a printed bracket turns a hub tied to two orange braided strings; the strings are twisted tightly round each other and pull a printed carriage along two steel guide rods towards the motor.',
  view: { dir: [0.3, 1.0, 0.9], fill: 1.3, target: [4, 0, 0] },
  build(K) {
    const { group, at, box, cyl, mat } = K;
    const pla = mat.pla(0x2f6fb0, 60), steel = mat.steel(), black = mat.plastic(0x1c1c1e);
    const parts = [];
    parts.push(at(box(200, 5, 56, mat.aluminium(), 1), [0, 2.5, 0]));
    // gearmotor (can, gearbox, end cap with terminals) screwed to the back of the bracket
    parts.push(at(cyl(12.5, 40, mat.zinc()), [-100, AY, 0], [0, 0, 90]));
    parts.push(at(cyl(12.5, 22, steel), [-69, AY, 0], [0, 0, 90]));
    parts.push(at(cyl(11.5, 4, black), [-122, AY, 0], [0, 0, 90]));
    for (const z of [-5, 5]) parts.push(at(box(3, 4, 0.6, mat.brass(), 0.1), [-125, AY + 3, z]));
    // printed bracket: upright plate on a foot
    parts.push(at(box(5, 40, 46, pla, 1), [-55.5, 5 + 20, 0]));
    parts.push(at(box(30, 5, 46, pla, 1), [-70, 7.5, 0]));
    // shaft and hub with the two strings tied to it
    parts.push(at(cyl(2, 10, steel), [-48, AY, 0], [0, 0, 90]));
    parts.push(at(cyl(7, 8, mat.aluminium()), [-41, AY, 0], [0, 0, 90]));
    const string = mat.nylon(0xe07a24);
    parts.push(twisted(K, 0, string), twisted(K, 1, string));
    // two guide rods from the bracket to an end post, and the carriage riding on them
    for (const z of [-15, 15]) parts.push(at(cyl(3, 148, steel), [-53 + 74, AY, z], [0, 0, 90]));
    parts.push(at(box(8, 40, 46, pla, 1), [96 + 4, 5 + 20, 0]));
    parts.push(at(box(16, 26, 44, pla, 1.5), [X1 + 8, AY, 0]));
    return group(parts);
  },
};
