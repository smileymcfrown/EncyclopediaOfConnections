// Magnetic-assisted buckle (Fidlock-style slider buckle) shown open: the socket half lies face up,
// showing its pocket with the sealed magnet and the ledge the hook catches on; the plug half lies
// face down beside it, showing its hook tongue and the steel disc the magnet pulls on. Each half
// has its strap.
function plate(K, w, d, r, h, m, holes = []) {
  const { at, extrude, roundRect, THREE } = K;
  const s = roundRect(w, d, r);
  for (const [x, y, hw, hd, hr] of holes) {
    const p = roundRect(hw, hd, hr);
    const pts = p.getPoints(8).map((v) => new THREE.Vector2(v.x + x, v.y + y));
    s.holes.push(new THREE.Path(pts));
  }
  return at(extrude(s, h, m, { bevel: Math.min(0.8, h / 4) }), [0, h / 2, 0], [-90, 0, 0]);
}

export default {
  alt: 'Render of a magnetic buckle, open: the dark plastic socket half lies face up with its strap, showing a pocket with a round magnet and a small ledge; beside it the plug half lies face down with its strap, showing the hook tongue and the steel disc that the magnet pulls into the pocket.',
  view: { dir: [0.25, 1.1, 0.95], fill: 1.02 },
  build(K) {
    const { group, at, box, cyl, mat } = K;
    const body = mat.plastic(0x2b2c30), web = mat.fabric('#2f4f7a');
    // socket half: a base, a rim round a pocket open toward the plug, a strap slot at the far end
    const sock = group(
      plate(K, 40, 32, 9, 3.5, body, [[-15, 0, 4, 24, 1.5]]),
      at(plate(K, 40, 32, 9, 4.5, body, [[-15, 0, 4, 24, 1.5], [5, 0, 30, 22, 5]]), [0, 3.5, 0]),
      at(cyl(6.5, 0.6, mat.magnet()), [4, 3.5, 0]),
      at(box(3, 2.2, 14, body, 0.5), [15.5, 4.6, 0]),          // the ledge the hook catches
    );
    // plug half, face down (underside up): a thinner plate, its hook tongue and a steel disc
    const plug = group(
      plate(K, 38, 30, 9, 4.5, body, [[15, 0, 4, 22, 1.5]]),
      at(box(16, 3.2, 12, body, 0.8), [-7, 4.5 + 1.6, 0]),
      at(box(5, 2, 12, body, 0.5), [-13, 4.5 + 4.2, 0]),       // the hook lip
      at(cyl(6, 0.8, mat.zinc()), [6, 4.5 + 0.4, 0]),
    );
    // straps: webbing looped through each strap slot, running away from the buckle
    const strapA = group(at(box(60, 1.4, 22, web, 0.4), [-15 - 30, 0.7, 0]), at(box(4, 9.5, 22, web, 0.6), [-15, 4.6, 0]));
    const strapB = group(at(box(60, 1.4, 20, web, 0.4), [15 + 30, 0.7, 0]), at(box(4, 5.6, 20, web, 0.6), [15, 2.6, 0]));
    return group(at(group(sock, strapA), [-24, 0, -6]), at(group(plug, strapB), [36, 0, 18], [0, -12, 0]));
  },
};
