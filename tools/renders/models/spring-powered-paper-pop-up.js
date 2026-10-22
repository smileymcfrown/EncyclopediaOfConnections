// Spring-powered paper pop-up: a snap-up card cube standing open, with a rubber band hooked round
// two opposite corners inside it; a second cube pressed flat beside it, its band stretched between
// the two folded ends; and a two-strip folded paper spring with a card star on top.
const T = 0.5;          // card thickness (mm)
const S = 50;           // cube side

// a rubber band hooked round two opposite corners of a box of side s, at height h
function bandLoop(s, h, off = 4.5) {
  const a = s / 2, i = a - 0.9, o = a + 0.9;
  return [
    [-i, h, -a + off], [-o, h, -a + off], [-o, h, -o], [-a + off, h, -o], [-a + off, h, -i],
    [i, h, a - off], [o, h, a - off], [o, h, o], [a - off, h, o], [a - off, h, i],
  ];
}

export default {
  alt: 'Render of spring-powered paper pop-ups: a yellow card cube stands open with a rubber band stretched across its inside between two opposite corners; beside it a second cube is pressed flat, its band stretched between the folded ends, ready to snap it back into a cube; behind them a paper spring of two folded strips holds up a card star.',
  view: { dir: [0.5, 0.7, 1.0], fill: 1.12, exposure: 0.68, light: [-0.5, 1, 0.55] },
  build(K) {
    const { THREE, group, at, extrude, box, wire } = K;
    const paper = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.88, metalness: 0 });
    const yellow = paper(0xe9ae2c), blue = paper(0x3f86cc), red = paper(0xd9483b), white = paper(0xf3eee2);
    const rubber = new THREE.MeshPhysicalMaterial({ color: 0xc08a4a, roughness: 0.7, metalness: 0 });
    const panel = (w, h, m) => box(w, h, T, m, 0.2);

    // the open cube: four card walls and the band
    const walls = group(
      at(panel(S, S, yellow), [0, S / 2, -S / 2]), at(panel(S, S, yellow), [0, S / 2, S / 2]),
      at(panel(S, S, yellow), [-S / 2, S / 2, 0], [0, 90, 0]), at(panel(S, S, yellow), [S / 2, S / 2, 0], [0, 90, 0]),
    );
    const band = wire(bandLoop(S, S - 5).map(([x, y, z]) => [x, y, z]), 0.65, rubber, true);
    const cube = group(walls, band);

    // the flattened cube: two layers, each two panels long, folded round at both ends
    const G = 1.6;                                                   // gap between the layers (the band is inside)
    const flatLayer = (y) => group(at(box(S - 0.2, T, S, yellow, 0.15), [-S / 2, y, 0]), at(box(S - 0.2, T, S, yellow, 0.15), [S / 2, y, 0]));
    const rIn = G / 2 + 0.02, rOut = rIn + T;
    const halfRing = [];
    for (let k = 0; k <= 16; k++) { const a = -Math.PI / 2 + (Math.PI * k) / 16; halfRing.push([rOut * Math.cos(a), rOut * Math.sin(a)]); }
    for (let k = 16; k >= 0; k--) { const a = -Math.PI / 2 + (Math.PI * k) / 16; halfRing.push([rIn * Math.cos(a), rIn * Math.sin(a)]); }
    const yMid = T / 2 + G / 2 + T / 2;
    const ends = [1, -1].map((sx) => at(extrude(halfRing, S, yellow, { bevel: 0 }), [sx * S, yMid, 0], [0, sx > 0 ? 0 : 180, 0]));
    const flatBand = wire([[-S - 1.6, yMid, 17], [S + 1.6, yMid, 17], [S + 1.6, yMid, 21], [-S - 1.6, yMid, 21]], 0.6, rubber, true);
    const flat = at(group(flatLayer(T / 2), flatLayer(T + G + T / 2), ends, flatBand), [-22, 0, 72], [0, 8, 0]);

    // the paper spring: two strips folded over each other in turn, a card star on top, on a card base
    const w = 24, g = 4.2, N = 12;
    const spring = group();
    const ring = (r0) => {
      const pts = [];
      for (let k = 0; k <= 16; k++) { const a = -Math.PI / 2 + (Math.PI * k) / 16; pts.push([(r0 + T / 2) * Math.cos(a), (r0 + T / 2) * Math.sin(a)]); }
      for (let k = 16; k >= 0; k--) { const a = -Math.PI / 2 + (Math.PI * k) / 16; pts.push([(r0 - T / 2) * Math.cos(a), (r0 - T / 2) * Math.sin(a)]); }
      return pts;
    };
    for (let i = 0; i < N; i++) {
      const m = i % 2 ? blue : yellow, y = T + i * g + T / 2;
      spring.add(at(box(w, T, w, m, 0.15), [0, y, 0], [0, i % 2 ? 90 : 0, 0]));
      if (i + 2 < N) {
        const side = (Math.floor(i / 2) % 2 ? -1 : 1);
        const fold = at(extrude(ring(g), w, m, { bevel: 0 }), [0, 0, 0], [0, side > 0 ? 0 : 180, 0]);
        const holder = group(at(group(fold), [w / 2, y + g, 0]));
        holder.rotation.y = i % 2 ? Math.PI / 2 : 0;
        spring.add(holder);
      }
    }
    const star = [];
    for (let k = 0; k < 10; k++) { const a = Math.PI / 2 + (k * Math.PI) / 5, r = k % 2 ? 5.5 : 12; star.push([r * Math.cos(a), r * Math.sin(a)]); }
    const topY = T + (N - 1) * g + T;
    spring.add(at(extrude(star, T * 1.2, red, { bevel: 0.05 }), [0, topY + 11.5, 0], [0, -20, 0]));
    spring.add(at(box(44, T, 44, white, 0.2), [0, T / 2, 0]));
    const springAt = at(spring, [66, 0, -6], [0, 30, 0]);

    return group(at(cube, [0, 0, 0], [0, 15, 0]), flat, springAt);
  },
};
