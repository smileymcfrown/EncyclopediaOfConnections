// Vacuum-driven artificial muscle, the kitchen-table version: a strip of orange card folded into a zigzag
// (the skeleton) sealed inside a clear plastic bag, with a blue drinking straw glued into one end with hot
// glue. Sucking on the straw lets the air pressure outside squash the bag and fold the card up short.
const N = 9, P = 11, AMP = 16, CW = 40, CT = 0.5;

export default {
  alt: 'Render of a vacuum-driven artificial muscle: a strip of orange card folded into a zigzag lies sealed inside a clear plastic bag, with a blue drinking straw glued into one end of the bag with hot glue so the air can be sucked out.',
  view: { dir: [0.35, 0.7, 1.3], fill: 1.12 },
  build(K) {
    const { group, at, box, cyl, lathe, mat, THREE } = K;
    const card = mat.nylon(0xd9661a);
    const parts = [];
    // the zigzag skeleton: N folds of pitch P, standing AMP tall, folds running across the bag
    const half = P / 2, len = Math.hypot(half, AMP), ang = (Math.atan2(AMP, half) * 180) / Math.PI;
    const x0 = (-N * P) / 2;
    for (let i = 0; i < N * 2; i++) {
      const up = i % 2 === 0, xc = x0 + i * half + half / 2;
      parts.push(at(box(len, CT, CW, card, 0.1), [xc, CT + AMP / 2, 0], [0, 0, up ? ang : -ang]));
    }
    // the clear bag round it
    const film = new THREE.MeshPhysicalMaterial({ color: 0xdfe8ef, transparent: true, opacity: 0.3, roughness: 0.12,
      metalness: 0, clearcoat: 1, clearcoatRoughness: 0.1, depthWrite: false, side: THREE.DoubleSide });
    const bagL = N * P + 10;
    const bag = at(box(bagL, AMP + 4, CW + 10, film, 9), [0, (AMP + 4) / 2, 0]);
    bag.castShadow = false;
    parts.push(bag);
    // drinking straw into the near end, sealed with a blob of hot glue
    const strawM = mat.plastic(0x3d8fd1);
    parts.push(at(cyl(3, 70, strawM), [bagL / 2 + 25, 9, 0], [0, 0, 90]));
    const glueM = mat.plastic(0xeee6c8);
    glueM.transparent = true; glueM.opacity = 0.85;
    parts.push(at(lathe([[2.9, -7], [4.5, -5.5], [6.5, -2], [7, 0.5], [5.5, 4], [3.6, 7], [2.9, 8]], glueM), [bagL / 2 - 2, 9, 0], [0, 0, -90]));
    return group(parts);
  },
};
