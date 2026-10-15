// Folded (lock) seam: two strips of thin galvanised sheet, each edge folded into a hook, hooked
// into each other and hammered flat; seen from the cut end so the four interlocking layers show.
const T = 0.6, G = 0.12, S = T + G;   // sheet thickness, gap between layers, layer spacing
const HOOK = 7;                         // width of the seam

// the centreline of a bent sheet: start [x, y], start angle (deg), then steps of
// {go: length} or {bend: degrees (+ = left turn), r: radius}
function path(x, y, a, steps) {
  const pts = [[x, y]];
  let ang = (a * Math.PI) / 180;
  for (const s of steps) {
    if (s.go) {
      x += s.go * Math.cos(ang); y += s.go * Math.sin(ang); pts.push([x, y]);
    } else {
      const sgn = Math.sign(s.bend), n = 16;
      const cx = x - sgn * s.r * Math.sin(ang), cy = y + sgn * s.r * Math.cos(ang);
      for (let i = 1; i <= n; i++) {
        const t = ang + (((s.bend * Math.PI) / 180) * i) / n;
        pts.push([cx + sgn * s.r * Math.sin(t), cy - sgn * s.r * Math.cos(t)]);
      }
      ang += (s.bend * Math.PI) / 180; x = pts.at(-1)[0]; y = pts.at(-1)[1];
    }
  }
  return pts;
}
// a closed outline of a sheet of thickness T following a centreline
function sheet(pts) {
  const left = [], right = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, pts.length - 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
    const nx = -dy / l, ny = dx / l;
    left.push([p[0] + (nx * T) / 2, p[1] + (ny * T) / 2]);
    right.push([p[0] - (nx * T) / 2, p[1] - (ny * T) / 2]);
  });
  return [...left, ...right.reverse()];
}
export default {
  alt: 'Render of a folded seam: two strips of thin galvanised steel sheet joined edge to edge, each edge folded into a hook, the hooks interlocked and hammered flat; the cut end shows the four layers trapping each other.',
  view: { dir: [0.55, 0.45, 1.0], fill: 1.0, target: [0, 0, 0] },
  build(K) {
    const { group, at, extrude, mat } = K;
    const zinc = mat.zinc();
    const W = 30, LEN = 46;
    // sheet 1: comes in from the left on top, folds down and back under itself
    const s1 = path(-W, 3 * S, 0, [{ go: W }, { bend: -180, r: S }, { go: HOOK - 0.8 }]);
    // sheet 2: comes in from the right underneath, folds up and back inside sheet 1's hook
    const s2 = path(W, 0, 180, [{ go: W + HOOK }, { bend: -180, r: S }, { go: HOOK - 0.8 }]);
    const a = extrude(sheet(s1), LEN, zinc, { bevel: 0.05 });
    const b = extrude(sheet(s2), LEN, zinc, { bevel: 0.05 });
    return group(a, b);
  },
};
