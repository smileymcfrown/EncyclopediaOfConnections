// Indexing plunger: a threaded plunger with a black knob screwed into a fixed blue bracket, its
// steel pin pushed down by the spring inside into one hole of a sliding bar with a row of holes.
// Everything is cut in half down the middle to show the spring, the pin's collar and the pin
// sitting in the hole.
function bodyProfile() {
  const out = [[4.1, 14], [7.6, 14]];
  for (let y = 14.5; y < 33; y += 1.5) out.push([7.5, y], [8.1, y + 0.75]);
  out.push([8.0, 33.5], [7.0, 36], [3.1, 36], [3.1, 33], [6.3, 33], [6.3, 16], [4.1, 16]);
  return out;
}
// top-view outline (x, z) of the back half (z < 0) of a rectangle, cut along z = 0 through holes
function halfPlate(x0, x1, depth, holes) {
  const pts = [[x0, -depth], [x1, -depth], [x1, 0]];
  for (const h of [...holes].sort((a, b) => b.x - a.x)) {
    for (let i = 0; i <= 16; i++) { const a = (i / 16) * Math.PI; pts.push([h.x + h.r * Math.cos(a), -h.r * Math.sin(a)]); }
  }
  pts.push([x0, 0]);
  return pts;
}
// the cut faces (at z = 0) of a part y0..y1 thick, between holes
function cutFaces(K, x0, x1, y0, y1, holes, m, z = 0.5) {
  const { box, at } = K;
  const edges = [x0, ...[...holes].sort((a, b) => a.x - b.x).flatMap((h) => [h.x - h.r, h.x + h.r]), x1];
  const out = [];
  for (let i = 0; i < edges.length; i += 2) {
    const w = edges[i + 1] - edges[i];
    out.push(at(box(w, y1 - y0, 0.05, m, 0.01), [(edges[i] + edges[i + 1]) / 2, (y0 + y1) / 2, z]));
  }
  return out;
}
export default {
  alt: 'Render of an indexing plunger screwed into a blue fixed bracket, cut in half to show the spring inside pushing its steel pin down into one of a row of holes in a sliding aluminium bar, with a black pull knob on top.',
  kind: 'cross-section',
  view: { dir: [0.55, 0.85, 1.4], fill: 1.15, light: [-0.3, 1, 0.9] },
  build(K) {
    const { group, at, extrude, lathe, wire, mat } = K;
    const half = { cut: 180 };
    const parts = [];
    // sliding bar: 120 x 30 x 8 with 8.2 mm holes every 22 mm
    const barHoles = [-44, -22, 0, 22, 44].map((x) => ({ x, r: 4.1 }));
    parts.push(at(extrude(halfPlate(-60, 60, 15, barHoles), 8, mat.aluminium(), { bevel: 0.3, curve: 24 }), [0, 4, 0], [90, 0, 0]));
    parts.push(...cutFaces(K, -60, 60, 0.3, 7.7, barHoles, mat.cut(0x9da3aa), 0.36));
    // fixed bracket: an 8 mm plate over the bar on a back leg, with a threaded hole for the plunger
    const blue = mat.paint(0x2d5d9a), blueCut = mat.cut(0x1d3f6b);
    parts.push(at(extrude(halfPlate(-20, 20, 30, [{ x: 0, r: 8 }]), 8, blue, { bevel: 0.4, curve: 24 }), [0, 18, 0], [90, 0, 0]));
    parts.push(...cutFaces(K, -20, 20, 14.4, 21.6, [{ x: 0, r: 8 }], blueCut, 0.46));
    parts.push(at(extrude([[-20, -30], [20, -30], [20, -22], [-20, -22]], 14, blue, { bevel: 0.4 }), [0, 7, 0], [90, 0, 0]));
    // plunger body (blackened steel, threaded), pin with collar, spring, knob
    parts.push(lathe(bodyProfile(), mat.blackOxide(), { ...half, cutMat: mat.cut(0x8d939b) }));
    parts.push(lathe([[0, 0.6], [3.6, 0.6], [4, 1.1], [4, 17], [6, 17], [6, 19], [3, 19], [3, 38.5], [0, 38.5]], mat.stainless(), { ...half, cutMat: mat.cut(0xd5d8dc) }));
    const turns = 7, len = 13.6, R = 4.6;   // spring: only the back half of each turn
    for (let t = 0; t < turns; t++) {
      const pts = [];
      for (let i = 0; i <= 24; i++) { const a = Math.PI + (i / 24) * Math.PI; pts.push([R * Math.cos(a), 19.3 + ((t + a / (2 * Math.PI)) * len) / turns, R * Math.sin(a)]); }
      parts.push(wire(pts, 0.6, mat.steel()));
    }
    parts.push(lathe([[0, 38], [9, 38], [12.5, 40.5], [13.5, 44.5], [12, 50], [7, 52.6], [0, 53]], mat.plastic(0x1e1f22), { ...half, cutMat: mat.cut(0x4a4c51) }));
    return group(parts);
  },
};
