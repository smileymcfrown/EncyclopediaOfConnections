// Pinned glue joint: a grey plastic model figure on a round base, cut in half to show its arm held
// on by a short brass pin that sits half in a drilled hole in the shoulder and half in the arm,
// each hole a little bigger than the pin and filled with glue; a spare arm with its pin glued in
// and sticking out lies in front.
const SH = 31;          // shoulder height above the base top
const DROP = 20;        // the arm hangs this many degrees below level
const X0 = 10.9;        // where the arm meets the body

// the arm, along +y from its joint face: upper arm, elbow, forearm and a round hand
const armProfile = [[0, 0], [4.6, 0], [4.4, 9], [4.0, 15], [3.7, 22], [3.4, 25.5], [4.4, 27.5], [4.8, 30], [4.2, 32.5], [2.6, 34], [0, 34.4]];
// the body, turned: hips, waist, chest, shoulders, neck and head
const bodyProfile = [[0, 0], [9.5, 0], [10.2, 5], [8.6, 15], [10.6, 24], [10.8, 30], [9.6, 35], [4.2, 37.5], [3.8, 40], [6.4, 43],
  [7.4, 48], [6.6, 53], [4.2, 56.5], [0, 57.6]];

export default {
  alt: 'Render of a pinned glue joint: a grey plastic model figure cut in half shows a short brass pin set half into a drilled hole in its shoulder and half into a hole in its arm, both holes filled with glue around the pin; in front lies a spare arm with its pin already glued in and sticking out.',
  kind: 'cross-section',
  view: { dir: [0.8, 0.45, 1.0], fill: 1.05, exposure: 0.85, light: [-0.5, 1, 0.8], target: [0, 2, 0] },
  build(K) {
    const { THREE, group, at, lathe, mat } = K;
    const phys = (o) => new THREE.MeshPhysicalMaterial({ metalness: 0, ...o });
    const grey = phys({ color: 0x9aa0a7, roughness: 0.6 }), greyCut = phys({ color: 0x40454b, roughness: 0.9 });
    const black = phys({ color: 0x232427, roughness: 0.55 }), blackCut = phys({ color: 0x3a3c40, roughness: 0.7 });
    const glue = phys({ color: 0xe9d79c, roughness: 0.18, clearcoat: 0.8 });
    const halve = { cut: 180 };
    // smooth a turned profile (keeping its two ends on the axis)
    const smooth = (pts, n = 140) => new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(n).map((v) => [Math.max(v.x, 0), v.y]);
    const ARM = smooth(armProfile), BODY = smooth(bodyProfile);

    const base = lathe([[0, 0], [16, 0], [16, 0.6], [14.6, 3.6], [0, 3.6], [0, 0]], black, { ...halve, cutMat: blackCut });
    const body = at(lathe([...BODY, [0, 0]], grey, { ...halve, cutMat: greyCut }), [0, 3.6, 0]);
    // the arm and its pin lie along +x (a turned part along y, turned on its side)
    const side = (o, x, z = 0) => at(group(o), [x, 3.6 + SH, z], [0, 0, -90 - DROP]);
    const arm = side(lathe([...ARM, [0, 0]], grey, { ...halve, cutMat: greyCut }), X0, 0.01);
    const PIN = 0.8, HOLE = 1.25, IN = 7;                            // 1.6 mm brass rod in 2.5 mm holes, 7 mm each way
    const glueFill = side(lathe([[0, -IN - 0.6], [HOLE, -IN - 0.6], [HOLE, IN + 0.6], [0, IN + 0.6], [0, -IN - 0.6]], glue, { ...halve, cutMat: glue }), X0, 0.03);
    const pin = side(lathe([[0, -IN + 0.1], [PIN - 0.1, -IN], [PIN, -IN + 0.1], [PIN, IN - 0.1], [PIN - 0.1, IN], [0, IN + 0.1], [0, -IN + 0.1]], mat.brass(), { ...halve, cutMat: mat.brass() }), X0, 0.06);

    // a spare arm lying in front, its pin glued in and sticking out
    const spare = at(group(
      lathe(ARM, grey),
      at(lathe([[0, -IN], [PIN, -IN], [PIN, IN - 0.2], [PIN - 0.2, IN], [0, IN]], mat.brass()), [0, -IN + 0.2, 0], [0, 0, 180]),
    ), [-6, 4.6, 26], [0, -25, -90]);
    return group(base, body, arm, glueFill, pin, spare);
  },
};
