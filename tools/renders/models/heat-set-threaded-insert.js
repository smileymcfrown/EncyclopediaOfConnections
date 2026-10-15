// Heat-set threaded insert: a printed boss cut open to show a brass insert melted into it, with a
// second insert lying beside it.
function insertProfile(cut) {
  // closed outline (radius, height) of an M4-style insert, 5.7 mm long: knurled bands outside,
  // a thread inside
  const out = [[2.55, 0]];
  for (let y = 0.2; y < 5.4; y += 1.3) out.push([2.55, y], [3.05, y + 0.3], [3.05, y + 0.8], [2.55, y + 1.1]);
  out.push([2.9, 5.5], [2.9, 5.7]);
  const inner = [];
  for (let y = 5.7; y > 0.2; y -= 0.7) inner.push([1.7, y], [2.05, y - 0.35]);
  return [...out, ...inner, [1.7, 0], [2.55, 0]];
}
export default {
  alt: 'Render of a heat-set threaded insert: a printed plastic boss cut in half shows a knurled brass insert with an inner thread melted into it, its ridges locked into the plastic; a second insert lies beside it.',
  kind: 'cross-section',
  view: { dir: [0.75, 0.6, 1.5], fill: 0.92 },
  build(K) {
    const { group, at, lathe, mat } = K;
    const pla = mat.pla(0xe4782d, 80), brass = mat.brass();
    const boss = lathe([[1.7, 0], [9, 0], [9, 12], [3.0, 12], [3.0, 6.3], [1.7, 6.3], [1.7, 0]], pla, { cut: 90, cutMat: mat.pla(0xc9611d, 80) });
    const set = at(lathe(insertProfile(), brass, { cut: 90, cutMat: mat.brass() }), [0, 6.3, 0]);
    const loose = at(lathe(insertProfile(), brass), [21, 3.05, -2], [0, 30, 90]);
    return group(boss, set, loose);
  },
};
