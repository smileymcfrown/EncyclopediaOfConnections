// Magnetic detent: a 3D-printed base with eight small disc magnets pressed into pockets round a
// centre peg, and its knob lying upside down beside it, showing the matching eight magnets in its
// underside.
const RM = 3, HM = 3, RP = 3.15, RING = 19, N = 8;   // magnet radius and thickness, pocket radius, ring radius, count

function withPockets(K, outline, m, depth, hole) {
  const { extrude, THREE } = K;
  const s = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(x, y)));
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const p = new THREE.Path(); p.absarc(RING * Math.cos(a), RING * Math.sin(a), RP, 0, Math.PI * 2, true); s.holes.push(p);
  }
  if (hole) { const p = new THREE.Path(); p.absarc(0, 0, hole, 0, Math.PI * 2, true); s.holes.push(p); }
  return extrude(s, depth, m, { bevel: 0.05, curve: 24 });
}
function magnets(K, y) {
  const { cyl, at, mat, group } = K;
  const mm = mat.magnet();
  return group(Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2;
    return at(cyl(RM, HM, mm), [RING * Math.cos(a), y - HM / 2 + 0.02, -RING * Math.sin(a)]);
  }));
}
export default {
  alt: 'Render of a magnetic detent: a 3D-printed base with eight small disc magnets set flush in a ring round a centre peg, and its ridged knob lying upside down beside it with eight matching magnets in its underside, which line up with the base magnets when the knob sits on the peg.',
  view: { dir: [0.15, 1.0, 1.0], fill: 0.95 },
  build(K) {
    const { group, at, cyl, extrude, circle, mat } = K;
    const grey = mat.pla(0x2e3136, 80), orange = mat.pla(0xb8460f, 80);
    // base: a solid disc, a 3 mm top layer with the magnet pockets, and the centre peg
    const base = group(
      at(cyl(29, 7, grey), [0, 3.5, 0]),
      at(withPockets(K, circle(29, 96), grey, 3), [0, 8.5, 0], [-90, 0, 0]),
      at(cyl(3.9, 9, grey), [0, 14.5, 0]),
      magnets(K, 10),
    );
    // knob: ridged rim, solid body, a 3 mm layer with pockets and a centre hole for the peg; lying upside down
    const ridged = Array.from({ length: 240 }, (_, i) => {
      const a = (i / 240) * Math.PI * 2, r = 28 + 0.9 * Math.max(0, Math.cos(a * 24)) ** 0.5;
      return [r * Math.cos(a), r * Math.sin(a)];
    });
    const knob = group(
      at(withPockets(K, ridged, orange, 3, 4.1), [0, 1.5, 0], [-90, 0, 0]),
      at(extrude(ridged, 7.4, orange, { bevel: 0.05, holes: [{ x: 0, y: 0, r: 4.1 }], curve: 24 }), [0, 6.5, 0], [-90, 0, 0]),
      at(extrude(ridged, 6.4, orange, { bevel: 0.05, curve: 24 }), [0, 12.8, 0], [-90, 0, 0]),
      magnets(K, 3),
    );
    // turn the knob over so its magnets face up, and set it beside the base
    return group(base, at(knob, [66, 16, 0], [180, 0, 0]));
  },
};
