// Score-and-slip join: a leather-hard clay mug with two criss-cross scored patches on its side where
// the handle will go, the upper one already brushed with slip; the pulled clay handle lies beside
// it, its two ends scored too.
const R = 38, HGT = 92, WALL = 5;        // mug outer radius, height, wall thickness (mm)
const SPOTS = [74, 26];                   // heights of the two joins on the mug wall

// a soft-edged patch of criss-cross scratches on a clay colour; `lines` sets how strongly the
// scratches show (slip over them fills them in). Also used as a bump map (with base white).
function hatch(THREE, base, lines = 0.75, n = 9) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  let sd = 5; const rnd = () => ((sd = (sd * 16807) % 2147483647) / 2147483647);
  // an irregular blob, soft at its edge
  g.save(); g.beginPath();
  for (let k = 0; k <= 40; k++) {
    const a = (k / 40) * Math.PI * 2, r = 108 + 14 * Math.sin(3 * a + 1) + 8 * rnd();
    g[k ? 'lineTo' : 'moveTo'](128 + r * Math.cos(a) * 0.92, 128 + r * Math.sin(a));
  }
  g.closePath(); g.clip();
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = `rgba(60,44,30,${lines})`; g.lineCap = 'round';
  for (const dir of [1, -1]) {
    for (let i = -n; i <= 2 * n; i++) {
      const x = (i * 256) / n + 10 * rnd();
      g.lineWidth = 2.5 + 2.5 * rnd();
      g.beginPath(); g.moveTo(x, 0); g.lineTo(x + dir * 256 * 0.8, 256); g.stroke();
    }
  }
  g.restore();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export default {
  alt: 'Render of a score-and-slip join: a leather-hard clay mug has two patches of criss-cross scratches on its side where the handle will go, the upper one brushed with creamy slip; the curved clay handle lies beside it with its two ends scratched the same way, ready to be pressed on and blended in.',
  view: { dir: [0.8, 0.5, 1.0], fill: 1.05, exposure: 0.85, light: [-0.3, 1, 0.8], target: [4, -6, 0] },
  build(K) {
    const { THREE, group, at, lathe, extrude, mesh } = K;
    const CLAY = '#a89276';
    const clay = new THREE.MeshPhysicalMaterial({ color: 0xa89276, roughness: 0.85, metalness: 0 });
    const scored = () => {
      const t = hatch(THREE, CLAY, 0.6), b = hatch(THREE, '#ffffff', 1);
      b.colorSpace = THREE.NoColorSpace;
      return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: b, bumpScale: -2.5, roughness: 0.9, metalness: 0, transparent: true, polygonOffset: true, polygonOffsetFactor: -2 });
    };
    const slipped = () => {
      const t = hatch(THREE, '#d9cbb3', 0.18), b = hatch(THREE, '#ffffff', 0.5);
      b.colorSpace = THREE.NoColorSpace;
      return new THREE.MeshPhysicalMaterial({ map: t, bumpMap: b, bumpScale: -1.2, roughness: 0.3, clearcoat: 0.6, metalness: 0, transparent: true, polygonOffset: true, polygonOffsetFactor: -2 });
    };

    // the mug: a turned, slightly bellied cup with a rolled rim and a foot
    const prof = [[0, 0], [R - 3, 0], [R - 1.5, 1.2], [R - 1, 4], [R + 0.6, 30], [R + 0.6, 60], [R, HGT - 3], [R - 0.6, HGT - 0.4], [R - WALL / 2, HGT],
      [R - WALL - 0.4, HGT - 0.6], [R - WALL - 0.6, HGT - 4], [R - WALL, 60], [R - WALL, 30], [R - WALL - 1, 12], [R - WALL - 4, 8], [0, 8]];
    const mug = lathe(prof, clay, { seg: 128 });
    // the scored patches on the wall (the upper one brushed with slip)
    const FACE = (38 * Math.PI) / 180;                               // the joins face this way (round from +z)
    const patch = (y, m, h = 16, w = 0.42) => mesh(new THREE.CylinderGeometry(R + 0.65, R + 0.65, h, 24, 1, true, FACE - w / 2, w), m);
    const patches = [at(patch(SPOTS[0], slipped()), [0, SPOTS[0], 0]), at(patch(SPOTS[1], scored()), [0, SPOTS[1], 0])];

    // the pulled handle: a C-shaped strap, its centreline from one join round to the other
    const span = SPOTS[0] - SPOTS[1], rr = span / 2, TH = 8, WID = 14, BEV = 3.2;
    const cl = [[0, span], [10, span]];
    for (let k = 1; k <= 24; k++) { const a = Math.PI / 2 - (Math.PI * k) / 24; cl.push([10 + rr * 0.95 * Math.cos(a), rr + rr * Math.sin(a)]); }
    cl.push([0, 0]);
    const left = [], right = [];
    cl.forEach((p, i) => {
      const a = cl[Math.max(i - 1, 0)], b = cl[Math.min(i + 1, cl.length - 1)];
      const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy), nx = -dy / l, ny = dx / l;
      const t = TH / 2 * (i === 0 || i === cl.length - 1 ? 1.25 : 1);             // ends flare a little where they join
      left.push([p[0] + nx * t, p[1] + ny * t]); right.push([p[0] - nx * t, p[1] - ny * t]);
    });
    const strap = extrude([...left, ...right.reverse()], WID, clay, { bevel: BEV, curve: 24 });
    // scored ends
    const endPatch = (y) => at(mesh(new THREE.PlaneGeometry(WID - 1, TH * 2.2), scored()), [-BEV - 0.05, y, 0], [0, -90, 0]);
    const handle = group(strap, endPatch(span), endPatch(0));
    // lay it on the bench beside the mug, ends towards the camera
    const lying = at(group(handle), [88, WID / 2 + BEV, 26], [-90, 0, 120]);
    return group(mug, patches, lying);
  },
};
