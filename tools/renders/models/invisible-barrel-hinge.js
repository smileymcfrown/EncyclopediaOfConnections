// Invisible barrel hinge: two wooden boards joined edge to edge by a pair of 14 mm brass barrel
// hinges, opened to 90 degrees so the brass links show in the corner; each barrel is sunk in a hole
// drilled into a board edge. A spare hinge lies on the bottom board, straight (closed), showing its
// two barrels and the links between them.
export default {
  alt: 'Render of invisible barrel hinges: two wooden boards opened to a right angle, joined at their edges by two small brass hinges whose cylinders are sunk in holes drilled into the board edges, with only the folded brass links showing in the corner; a spare hinge, two brass cylinders joined end to end by short links, lies on the bottom board.',
  view: { dir: [0.75, 0.95, 0.75], fill: 1.12 },
  build(K) {
    const { group, at, box, cyl, extrude, roundRect, mat } = K;
    const brass = mat.brass(), wood = mat.wood('#b98b58', '#8a5f34'), dark = mat.blackOxide();
    const R = 7, BL = 20, T = 18, parts = [];
    // bottom board, its edge face at z = 0; top board standing up, its lower edge at y = T + 1
    parts.push(at(box(150, T, 60, wood, 1), [0, T / 2, -30]));
    parts.push(at(box(150, 60, T, mat.wood('#b4844f', '#85592f'), 1), [0, T + 1 + 30, T / 2]));
    // a straight link plate from p to q in the y-z plane (thickness along x)
    const link = (x, p, q, w = 5.5, t = 1.4) => {
      const dy = q[0] - p[0], dz = q[1] - p[1], len = Math.hypot(dy, dz) + w;
      const plate = extrude(roundRect(len, w, w / 2 - 0.1), t, brass, { bevel: 0.25 });
      // the plate lies in its x-y plane: stand it in the y-z plane (long side along -z), then tip it to p->q
      const g = group(at(plate, [0, 0, 0], [0, 90, 0]));
      g.rotation.x = Math.atan2(dy, -dz);
      return at(group(g), [x, (p[0] + q[0]) / 2, (p[1] + q[1]) / 2]);
    };
    const pin = (x, y, z) => at(cyl(1.1, 8.4, mat.steel()), [x, y, z], [0, 0, 90]);
    for (const x of [-48, 48]) {
      // barrel in the bottom board (axis z, flush with the edge) and in the top board (axis y)
      parts.push(at(cyl(R, BL, brass), [x, T / 2, -BL / 2 + 0.2], [90, 0, 0]));
      parts.push(at(box(8.2, 11, 0.3, dark, 0.05), [x, T / 2, 0.36]));
      parts.push(at(cyl(R, BL, brass), [x, T + 1 + BL / 2 - 0.2, T / 2]));
      parts.push(at(box(8.2, 0.3, 11, dark, 0.05), [x, T + 0.64, T / 2]));
      // links folded into the corner between the two barrel ends
      const A = [T / 2, -3], B = [T + 4, T / 2], M = [T / 2 + 5.5, T / 2 - 4.5];
      parts.push(link(x - 2.6, A, M), link(x + 2.6, A, M), link(x, M, B));
      parts.push(link(x - 2.6, [T / 2 + 3, -3], [T + 4, T / 2 - 4]), link(x + 2.6, [T / 2 + 3, -3], [T + 4, T / 2 - 4]));
      parts.push(pin(x, M[0], M[1]));
    }
    // stand the pair like a tent on the table, the hinged corner on top
    const tent = group(...parts);
    tent.rotation.x = (-135 * Math.PI) / 180;
    // a spare hinge lying beside, straight (closed): two barrels end to end with links between
    const spare = group(
      at(cyl(R, BL, brass), [-(BL / 2 + 2.2), 0, 0], [0, 0, 90]),
      at(cyl(R, BL, brass), [BL / 2 + 2.2, 0, 0], [0, 0, 90]),
      at(box(5.2, 5.5, 1.4, brass, 0.3), [0, 0, -2.6]), at(box(5.2, 5.5, 1.4, brass, 0.3), [0, 0, 0]), at(box(5.2, 5.5, 1.4, brass, 0.3), [0, 0, 2.6]),
    );
    return group(tent, at(spare, [30, -49, 62], [0, -20, 0]));
  },
};
