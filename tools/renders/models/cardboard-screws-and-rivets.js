// Cardboard screws and rivets: two pieces of corrugated cardboard overlapped and joined by a blue
// plastic cardboard screw and a white snap-together box rivet; a loose screw and the two identical
// halves of a rivet lie in front, and the cut edges show the fluted middle layer.
const LT = 0.35, FH = 3.4, PITCH = 7.2, FT = 0.22;   // liner, flute height, flute pitch, fluting paper
const BT = FH + 2 * LT;                               // board thickness

function cardMat(K, c) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: 0.9, metalness: 0 }); }

// a corrugated board W (x) by D (z), flutes running along Z, bottom face at y = 0
function board(K, W, D, liner, flute) {
  const { group, at, box, extrude } = K;
  const n = Math.round(W / PITCH);
  const top = [], bot = [];
  for (let i = 0; i <= n * 16; i++) {
    const x = -W / 2 + (i / (n * 16)) * W;
    const y = LT + FH / 2 + (FH / 2 - FT / 2) * Math.sin((i / 16) * Math.PI * 2);
    top.push([x, y + FT / 2]); bot.push([x, y - FT / 2]);
  }
  const wave = extrude([...top, ...bot.reverse()], D - 0.2, flute, { bevel: 0 });
  return group(
    at(box(W, LT, D, liner, 0.1), [0, LT / 2, 0]),
    at(box(W, LT, D, liner, 0.1), [0, BT - LT / 2, 0]),
    wave,
  );
}

// the plastic cardboard screw: round flange, hex grip, coarse thread and a point; axis Y, flange
// underside at y = 0, thread going down
function screw(K, m) {
  const { group, at, cyl, hex, threaded } = K;
  return group(
    at(cyl(9.5, 1.6, m, { r2: 9 }), [0, 0.8, 0]),
    at(group(hex(12, 5.5, m)), [0, 1.6 + 2.75, 0]),
    at(cyl(2.6, 0.6, m), [0, 7.4, 0]),
    at(threaded(4.6, 3.6, 13, m), [0, 0, 0], [180, 0, 0]),
    at(cyl(3.2, 5, m, { r2: 0.6 }), [0, -13 - 2.5, 0], [180, 0, 0]),
  );
}

// one half of a box rivet: a round head with two ridged prongs; head underside at y = 0, prongs down
function rivetHalf(K, m) {
  const { group, at, cyl, box } = K;
  const g = group(at(cyl(11, 1.8, m, { r2: 10.3 }), [0, 0.9, 0]));
  for (const sx of [-1, 1]) {
    g.add(at(box(1.8, 11, 5, m, 0.4), [sx * 2.2, -5.5, 0]));
    for (let y = -2; y > -11; y -= 1.6) g.add(at(box(0.7, 0.7, 5, m, 0.2), [sx * 3.2, y, 0], [0, 0, 45]));
  }
  return g;
}

export default {
  alt: 'Render of cardboard screws and rivets: two overlapping pieces of corrugated cardboard are held together by a chunky blue plastic screw and the round head of a white snap-together box rivet; in front lie a loose screw with its coarse thread and the two identical halves of a rivet with their ridged prongs.',
  view: { dir: [0.35, 0.62, 1.3], fill: 1.22, light: [-0.4, 1, 0.9], exposure: 0.9 },
  build(K) {
    const { group, at, mat } = K;
    const liner = cardMat(K, 0x9c6d3f), flute = cardMat(K, 0xb88d57);
    const blue = mat.plastic(0x2468b8), white = mat.nylon(0xf1efe8);
    const parts = [];
    parts.push(at(board(K, 80, 56, liner, flute), [-24, 0, 0]));
    parts.push(at(board(K, 80, 56, liner, flute), [24, BT, -3]));
    // a screw and a rivet through the overlap
    parts.push(at(screw(K, blue), [0, 2 * BT, -15], [0, 20, 0]));
    parts.push(at(rivetHalf(K, white), [0, 2 * BT, 12], [0, 10, 0]));
    // loose parts in front: a screw, and a rivet half lying prongs-up
    // the loose screw lies on the bench resting on its flange rim and its point
    const tilt = (Math.atan2(9.5, 18) * 180) / Math.PI;
    const lying = at(screw(K, blue), [0, 0, 0], [0, 0, 90 - tilt]);
    lying.updateMatrixWorld(true);
    lying.position.y -= new K.THREE.Box3().setFromObject(lying).min.y;
    parts.push(at(group(lying), [-30, 0, 62], [0, 25, 0]));
    parts.push(at(rivetHalf(K, white), [22, 1.8, 52], [180, 30, 0]));
    return group(parts);
  },
};
