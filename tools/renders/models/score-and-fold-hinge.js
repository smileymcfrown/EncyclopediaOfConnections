// Score-and-fold hinge: on a green cutting mat, a white card has just been scored along a steel
// ruler with a bone folder (the pressed V-groove); beside it a piece of orange card folded on its
// score into a tent, with the pressed line on the outside of the fold, along the ridge.
const T = 0.6;   // card thickness

function matte(K, c, rough = 0.88) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: rough, metalness: 0 }); }

// the centreline of a bent sheet: start [x, y], start angle (deg), then {go: length} or
// {bend: degrees (+ = left turn), r: radius}
function path(x, y, a, steps) {
  const pts = [[x, y]];
  let ang = (a * Math.PI) / 180;
  for (const s of steps) {
    if (s.go) { x += s.go * Math.cos(ang); y += s.go * Math.sin(ang); pts.push([x, y]); continue; }
    const sgn = Math.sign(s.bend), n = 16;
    const cx = x - sgn * s.r * Math.sin(ang), cy = y + sgn * s.r * Math.cos(ang);
    for (let i = 1; i <= n; i++) {
      const t = ang + (((s.bend * Math.PI) / 180) * i) / n;
      pts.push([cx + sgn * s.r * Math.sin(t), cy - sgn * s.r * Math.cos(t)]);
    }
    ang += (s.bend * Math.PI) / 180; x = pts.at(-1)[0]; y = pts.at(-1)[1];
  }
  return pts;
}
function thicken(pts, t) {
  const l = [], r = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, pts.length - 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], n = Math.hypot(dx, dy);
    l.push([p[0] - (dy / n) * t / 2, p[1] + (dx / n) * t / 2]); r.push([p[0] + (dy / n) * t / 2, p[1] - (dx / n) * t / 2]);
  });
  return [...l, ...r.reverse()];
}

export default {
  alt: 'Render of a score-and-fold hinge: on a green cutting mat, a white card has a pressed V-groove scored along a steel ruler, with the bone folder that made it lying in front; beside it a piece of orange card folded on its score stands as a crisp tent, with the pressed line on the outside of the fold along its ridge.',
  note: 'weak: at page size the score shows only as a thin grey line (on the white card and along the ridge of the orange tent); the light-and-shadow V of a real pressed groove is too small to show at this scale',
  view: { dir: [0.3, 0.52, 1.3], fill: 1.4, target: [-4, -6, 6], light: [-0.35, 0.75, 1], exposure: 0.9 },
  build(K) {
    const { group, at, box, extrude, mat } = K;
    const parts = [];
    const MT = 2.5;                                                     // cutting mat thickness
    parts.push(at(box(150, MT, 112, matte(K, 0x2f6b55, 0.8), 0.8), [0, MT / 2, 0]));
    // the scored white card: cross-section with a pressed V-groove, extruded along X; the bottom of
    // the groove is in shade
    const g = 1.3, sec = [[-26, 0], [26, 0], [26, T], [g, T], [0.35, T - 0.45], [-0.35, T - 0.45], [-g, T], [-26, T]];
    const GZ = 6;
    parts.push(at(extrude(sec, 96, matte(K, 0xf3f1ea), { bevel: 0 }), [-28, MT, GZ], [0, 90, 0]));
    parts.push(at(box(96, 0.04, 1.1, matte(K, 0x77716a), 0.01), [-28, MT + T - 0.42, GZ]));
    // the steel ruler a little behind the groove, and the bone folder lying in front
    parts.push(at(box(100, 0.9, 20, mat.stainless(), 0.3), [-28, MT + T + 0.45, GZ - 10 - 7]));
    const fo = [], L = 100, Wd = 7;
    for (let i = 0; i <= 16; i++) { const a = -Math.PI / 2 + (i / 16) * Math.PI; fo.push([L - Wd + Wd * Math.cos(a), Wd * Math.sin(a)]); }
    fo.push([16, Wd]);
    for (let i = 1; i < 12; i++) { const a = Math.PI / 2 + (i / 12) * Math.PI; fo.push([16 + 16 * Math.cos(a), Wd * Math.sin(a)]); }
    fo.push([16, -Wd]);
    const folder = extrude(fo, 3.4, matte(K, 0xdccca4, 0.45), { bevel: 1.2 });
    parts.push(at(folder, [-66, MT + 1.7, 44], [-90, 0, -8]));

    // the orange card folded on its score into a tent, the scored side outside: the pressed line
    // shows along the ridge
    const orange = matte(K, 0xd8732f);
    const fold = path(-25.5, T, 45, [{ go: 36 }, { bend: -90, r: 0.9 }, { go: 36 }]);
    const top = fold[9];                               // middle of the bend
    const tent = group(
      extrude(thicken(fold, T), 54, orange, { bevel: 0 }),
      at(box(1.5, 0.12, 54, matte(K, 0x6e3210), 0.02), [top[0], top[1] + T / 2 - 0.03, 0]),
    );
    parts.push(at(tent, [48, MT, -4], [0, 35, 0]));
    return group(parts);
  },
};
