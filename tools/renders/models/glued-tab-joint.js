// Glued tab joint: a papercraft cube in thin blue card with its lid still open, showing the glue tabs
// folded in along the top edges and glued behind the corners; beside it a kraft card tube whose end is
// cut into a ring of short tabs (flanges), folded out and glued flat onto a card base.
const S = 40, T = 0.35;      // cube size, card thickness
const TAB = 7;               // tab depth

function cardMat(K, c) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: 0.88, metalness: 0 }); }

// a trapezoid tab, base length w (along X), depth d (along -Y in the outline), 45-degree ends
function tab(K, w, d, m) {
  const c = Math.min(d, w / 4);
  return K.extrude([[-w / 2, 0], [w / 2, 0], [w / 2 - c, -d], [-w / 2 + c, -d]], T, m, { bevel: 0.03 });
}

export default {
  alt: 'Render of glued tab joints in card: a small blue papercraft cube with its lid open shows narrow tabs folded in along the top edges and behind the corners, ready for the lid to be glued down onto them; beside it a brown card tube has its end cut into short tabs that are folded out flat and glued to a card base.',
  view: { dir: [0.55, 0.95, 1.25], fill: 1.12, light: [-0.7, 1, 0.9], exposure: 0.85 },
  build(K) {
    const { group, at, box, tube, extrude, mat } = K;
    const blue = cardMat(K, 0x4f88bd), kraft = cardMat(K, 0x9a6a3c), grey = cardMat(K, 0x8a8681);
    const parts = [];
    // ---- the cube, centred at x = -35
    const cube = [];
    const h = S / 2;
    cube.push(at(box(S, T, S, blue, 0.05), [0, T / 2, 0]));                       // bottom
    cube.push(at(box(S, S, T, blue, 0.05), [0, S / 2, h - T / 2]));               // front
    cube.push(at(box(S, S, T, blue, 0.05), [0, S / 2, -h + T / 2]));              // back
    cube.push(at(box(T, S, S - 2 * T, blue, 0.05), [-h + T / 2, S / 2, 0]));      // left
    cube.push(at(box(T, S, S - 2 * T, blue, 0.05), [h - T / 2, S / 2, 0]));       // right
    // tabs on the top edges of front, left and right walls, folded in flat (horizontal)
    const yTop = S - T / 2;
    const tFront = at(group(at(tab(K, S - 2 * T, TAB, blue), [0, 0, 0], [90, 0, 0])), [0, yTop, h - T]);
    cube.push(tFront);
    // wet glue spread thinly on the tabs (glossy, milky)
    const glue = new K.THREE.MeshPhysicalMaterial({ color: 0xf2f2ee, roughness: 0.15, clearcoat: 1, transparent: true, opacity: 0.55 });
    for (const [x, z, ry] of [[0, h - T - TAB / 2, 0], [-h + T + TAB / 2, 0, 90], [h - T - TAB / 2, 0, 90]])
      cube.push(at(box(S - 2 * TAB - 2, 0.12, TAB - 2.5, glue, 0.05), [x, S + 0.02, z], [0, ry, 0]));
    cube.push(at(group(at(tab(K, S - 2 * T, TAB, blue), [0, 0, 0], [90, 0, 0])), [-h + T, yTop, 0], [0, -90, 0]));
    cube.push(at(group(at(tab(K, S - 2 * T, TAB, blue), [0, 0, 0], [90, 0, 0])), [h - T, yTop, 0], [0, 90, 0]));
    // corner tabs of the front wall, folded back and glued inside the side walls
    for (const sx of [-1, 1]) cube.push(at(box(T, S - 9, 6, blue, 0.05), [sx * (h - 1.5 * T), S / 2 - 1, h - T - 3]));
    // the lid, hinged on the back top edge and swung open
    const lid = group(at(box(S, T, S, blue, 0.05), [0, T / 2, S / 2]));
    cube.push(at(lid, [0, S, -h], [-105, 0, 0]));
    parts.push(at(group(cube), [-36, 0, 6], [0, 18, 0]));

    // ---- the tube on a base, centred at x = +38
    const R = 16, HT = 46, W = 1.1, BT = 1.8;
    const tb = [];
    tb.push(at(box(64, BT, 64, grey, 0.4), [0, BT / 2, 0]));                       // grey board base
    tb.push(at(tube(R, R - W, HT, kraft), [0, BT + 2 + HT / 2, 0]));               // the tube
    // short bend at the foot of the tube, then the flanges flat on the base
    const N = 10;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * 360 + 9;
      const arc = (2 * Math.PI * R) / N - 1.6;
      const f = group(
        at(box(arc, 2.4, W, kraft, 0.2), [0, BT + 1.0, R - W / 2]),                    // the bend
        at(box(arc, W * 0.8, 9, kraft, 0.3), [0, BT + W * 0.4, R + 3.6]),               // flat flange
      );
      tb.push(at(f, [0, 0, 0], [0, a, 0]));
    }
    parts.push(at(group(tb), [40, 0, -4]));
    return group(parts);
  },
};
