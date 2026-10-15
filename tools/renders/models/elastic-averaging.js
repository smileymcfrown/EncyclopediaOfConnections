// Elastic averaging: a printed base with two square pockets lined with many thin springy fins
// (ribs). A printed block is pressed into the left pocket, every fin bent by a slightly different
// amount; the right pocket is empty so the fins can be seen.
const P = 22, DEPTH = 10, FLOOR = 3, FIN_L = 4, FIN_T = 0.8, FIN_H = 9;
function fins(K, m, cx, bent) {
  const { at, box } = K;
  const out = [];
  // four walls; on each, four fins leaning the same way round the pocket
  const walls = [
    { p: (s) => [s, -P / 2], t: [1, 0], n: [0, 1] },
    { p: (s) => [P / 2, s], t: [0, 1], n: [-1, 0] },
    { p: (s) => [-s, P / 2], t: [-1, 0], n: [0, -1] },
    { p: (s) => [-P / 2, -s], t: [0, -1], n: [1, 0] },
  ];
  let i = 0;
  for (const w of walls) {
    for (const s of [-8, -3, 2, 7]) {
      // free fins lean 45 degrees in; squeezed fins are pushed flatter, each a little differently
      const a = ((bent ? 28 + 5 * Math.sin(i * 2.3) : 45) * Math.PI) / 180; i++;
      const d = [w.t[0] * Math.cos(a) + w.n[0] * Math.sin(a), w.t[1] * Math.cos(a) + w.n[1] * Math.sin(a)];
      const [px, pz] = w.p(s);
      const c = [px + (d[0] * FIN_L) / 2 - w.n[0] * 0.3, pz + (d[1] * FIN_L) / 2 - w.n[1] * 0.3];
      out.push(at(box(FIN_L + 0.6, FIN_H, FIN_T, m, 0.3), [cx + c[0], FLOOR + FIN_H / 2, c[1]], [0, (Math.atan2(-d[1], d[0]) * 180) / Math.PI, 0]));
    }
  }
  return out;
}
export default {
  alt: 'Render of elastic averaging: a 3D-printed base with two square pockets lined with many thin springy fins; a printed block is pressed into one pocket, bending all the fins a little so it sits centred, and the other pocket is empty to show the fins.',
  view: { dir: [0.3, 1.7, 0.9], fill: 0.98 },
  build(K) {
    const { THREE, group, at, box, extrude, roundRect, mat } = K;
    const pla = mat.pla(0x5d646d, 30), blue = mat.pla(0xe8812f, 40);
    const outline = roundRect(70, 36, 3);
    for (const cx of [-17, 17]) {
      const h = new THREE.Path();
      h.moveTo(cx - P / 2, -P / 2); h.lineTo(cx - P / 2, P / 2); h.lineTo(cx + P / 2, P / 2); h.lineTo(cx + P / 2, -P / 2); h.lineTo(cx - P / 2, -P / 2);
      outline.holes.push(h);
    }
    const frame = at(extrude(outline, DEPTH, pla, { bevel: 0.5 }), [0, FLOOR + DEPTH / 2 - 0.3, 0], [-90, 0, 0]);
    const floor = at(box(69.6, FLOOR, 35.6, pla, 0.6), [0, FLOOR / 2, 0]);
    const block = at(box(18, 16, 18, blue, 1.2), [-17, FLOOR + 8, 0]);
    return group(frame, floor, fins(K, pla, -17, true), fins(K, pla, 17, false), block);
  },
};
