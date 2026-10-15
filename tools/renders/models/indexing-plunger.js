// Indexing plunger: a threaded plunger with a black knob screwed into a fixed bridge plate, its
// steel pin pushed down by the spring inside into one hole of a sliding bar with a row of holes.
// A quarter is cut away (plunger, plate and bar) to show the spring, the pin's collar and the pin
// sitting in the hole.
const d2r = Math.PI / 180;
const arcPts = (r, a0, a1, step = 6) => {
  const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / step)), pts = [];
  for (let i = 0; i <= n; i++) { const a = (a0 + ((a1 - a0) * i) / n) * d2r; pts.push([r * Math.cos(a), r * Math.sin(a)]); }
  return pts;
};
function bodyProfile() {
  const out = [[4.1, 14], [7.6, 14]];
  for (let y = 14.5; y < 33; y += 1.5) out.push([7.5, y], [8.1, y + 0.75]);
  out.push([8.0, 33.5], [7.0, 36], [3.1, 36], [3.1, 33], [6.3, 33], [6.3, 16], [4.1, 16]);
  return out;
}
export default {
  alt: 'Render of an indexing plunger screwed into a blue fixed plate, cut away to show the spring inside pushing its steel pin down into one of a row of holes in a sliding steel bar, with a black pull knob on top.',
  kind: 'cross-section',
  view: { dir: [1.0, 0.75, 1.35], fill: 1.0, light: [0.3, 1, 0.8] },
  build(K) {
    const { group, at, extrude, lathe, spring, mat } = K;
    const q = { cut: 90, start: 45 };
    const parts = [];
    // sliding bar: 150 x 40 x 10 with 8.2 mm holes every 25 mm; quarter cut round the pin's hole
    const barHoles = [-50, -25, 25, 50].map((x) => ({ x, y: 0, r: 4.1 }));
    const barOut = [[-75, -20], [75, -20], [75, 20], [14, 20], [14, 0], [4.1, 0], ...arcPts(4.1, 0, -270, 8).slice(1), [0, 20], [-75, 20]];
    parts.push(at(extrude(barOut, 10, mat.steel(), { bevel: 0.4, holes: barHoles, curve: 24 }), [0, 5, 0], [90, 0, 0]));
    // fixed bridge plate (8 mm) over the bar, on two legs; threaded hole for the plunger
    const blue = mat.paint(0x2d5d9a);
    const plateOut = [[-26, -36], [26, -36], [26, 0], [8, 0], ...arcPts(8, 0, -270, 8).slice(1), [0, 36], [-26, 36]];
    parts.push(at(extrude(plateOut, 8, blue, { bevel: 0.5, curve: 24 }), [0, 18, 0], [90, 0, 0]));
    parts.push(at(extrude([[-26, -36], [26, -36], [26, -28], [-26, -28]], 14, blue, { bevel: 0.5 }), [0, 7, 0], [90, 0, 0]));
    parts.push(at(extrude([[-26, 28], [0, 28], [0, 36], [-26, 36]], 14, blue, { bevel: 0.5 }), [0, 7, 0], [90, 0, 0]));
    // plunger body (zinc-plated, threaded), pin with collar, spring, knob
    parts.push(lathe(bodyProfile(), mat.zinc(), { ...q, cutMat: mat.cut(0xc3c9d0) }));
    parts.push(lathe([[0, 2], [3.6, 2], [4, 2.5], [4, 17], [6, 17], [6, 19], [3, 19], [3, 38.5], [0, 38.5]], mat.steel(), { ...q, cutMat: mat.cut(0x868c94) }));
    parts.push(at(spring(4.6, 0.6, 7, 13.6, mat.steel()), [0, 19.3, 0]));
    parts.push(lathe([[0, 38], [9, 38], [12.5, 40.5], [13.5, 44.5], [12, 50], [7, 52.6], [0, 53]], mat.plastic(0x1e1f22), { ...q, cutMat: mat.cut(0x4a4c51) }));
    return group(parts);
  },
};
