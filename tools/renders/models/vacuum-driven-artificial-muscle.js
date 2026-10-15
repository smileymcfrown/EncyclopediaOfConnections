// Vacuum-driven artificial muscle, the kitchen-table version: a strip of card folded into a zigzag
// (the skeleton) sealed inside a clear plastic bag, with a drinking straw glued into one end with hot
// glue. Sucking on the straw lets the air pressure outside squash the bag and fold the card up short.
const N = 9, P = 11, AMP = 16, CW = 40, CT = 0.5;

export default {
  alt: 'Render of a vacuum-driven artificial muscle: a strip of card folded into a zigzag lies sealed inside a clear plastic bag, with a drinking straw glued into one end of the bag with hot glue so the air can be sucked out.',
  view: { dir: [0.5, 0.9, 1.25], fill: 1.0 },
  build(K) {
    const { group, at, box, cyl, sphere, mat, THREE } = K;
    const card = mat.nylon(0xd7e4f0);
    const parts = [];
    // the zigzag skeleton: N folds of pitch P, standing AMP tall, folds running across the bag
    const half = P / 2, len = Math.hypot(half, AMP), ang = (Math.atan2(AMP, half) * 180) / Math.PI;
    const x0 = (-N * P) / 2;
    for (let i = 0; i < N * 2; i++) {
      const up = i % 2 === 0, xc = x0 + i * half + half / 2;
      parts.push(at(box(len, CT, CW, card, 0.1), [xc, CT + AMP / 2, 0], [0, 0, up ? ang : -ang]));
    }
    // the clear bag round it, with a flattened seal at the far end
    const film = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.22, roughness: 0.12,
      metalness: 0, clearcoat: 1, clearcoatRoughness: 0.1, depthWrite: false, side: THREE.DoubleSide });
    const bagL = N * P + 10;
    const bag = at(box(bagL, AMP + 4, CW + 10, film, 9), [0, (AMP + 4) / 2, 0]);
    bag.castShadow = false;
    const seal = at(box(8, 1.2, CW + 10, film, 0.5), [-bagL / 2 - 2, 0.6, 0]);
    seal.castShadow = false;
    parts.push(bag, seal);
    // drinking straw into the near end, sealed with a blob of hot glue
    const strawM = mat.plastic(0xf4f4f4);
    parts.push(at(cyl(3, 70, strawM), [bagL / 2 + 25, 9, 0], [0, 0, 90]));
    const glue = at(sphere(7, mat.silicone(0xf3f1e8)), [bagL / 2 - 1, 9, 0]);
    glue.scale.set(0.8, 0.9, 1.2);
    parts.push(glue);
    return group(parts);
  },
};
