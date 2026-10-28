// V-groove fold in foam board: one piece folded up into a corner, the two 45-degree cut faces of the
// groove glued together and the uncut bottom paper wrapping the outside corner; in front of it a
// flat piece with its V-groove cut, not yet folded. The cut ends show the foam core between its
// two paper skins.
const T = 5;            // board thickness (mm)
const P = 0.45;         // paper skin thickness
const W = 34;           // width of the pieces (along z)

export default {
  alt: 'Render of a V-groove fold in foam board: a strip of board folded up into a neat right-angled corner, the two sloping cut faces of the groove glued together inside it and the uncut paper skin wrapping round the outside corner; in front lies a flat piece with a V-shaped groove cut almost through it, ready to fold.',
  view: { dir: [0.4, 0.5, 1.0], fill: 1.2, target: [0, -2, 0], exposure: 0.72, light: [-0.6, 1, 0.7], background: 0xd9dde2 },
  build(K) {
    const { THREE, group, at, extrude } = K;
    const skin = new THREE.MeshPhysicalMaterial({ color: 0xfbf9f3, roughness: 0.85, metalness: 0 });
    // foam core: faintly grey-blue and grainy, so the cut faces read against the smooth paper
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); g.fillStyle = '#cdd6e0'; g.fillRect(0, 0, 256, 256);
    let sd = 3; const rnd = () => ((sd = (sd * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 4200; i++) { g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.7)' : 'rgba(120,135,160,0.45)'; g.beginPath(); g.arc(rnd() * 256, rnd() * 256, 0.8 + 1.6 * rnd(), 0, 7); g.fill(); }
    const tex = new THREE.CanvasTexture(c); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1 / 14, 1 / 14); tex.colorSpace = THREE.SRGBColorSpace;
    const foam = new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: tex, roughness: 0.98, metalness: 0 });
    const glue = new THREE.MeshPhysicalMaterial({ color: 0xd9c48a, roughness: 0.35, metalness: 0, clearcoat: 0.6 });
    const ex = (pts, m) => extrude(pts, W, m, { bevel: 0 });

    // the folded piece, seen from its cut end: base along +x, side standing up at x = 0
    const L = 56, H = 40, r = P;
    const outer = [[L, 0], [r, 0]];
    for (let k = 1; k < 8; k++) { const a = -Math.PI / 2 - (Math.PI / 2) * (k / 8); outer.push([r + r * Math.cos(a), r + r * Math.sin(a)]); }
    outer.push([0, r], [0, H], [P, H], [P, P], [L, P]);
    const baseFoam = [[P, P], [L, P], [L, T - P], [T - P, T - P]];
    const gl = 0.22;                                                 // glue line, measured across the mitre
    const sideFoam = [[P, P + gl * 1.41], [T - P, T - P + gl * 1.41], [T - P, H], [P, H]];
    const glueLine = [[P, P], [T - P, T - P], [T - P, T - P + gl * 1.41], [P, P + gl * 1.41]];
    const innerBase = [[T - P, T - P], [L, T - P], [L, T], [T - P, T]];
    const innerSide = [[T - P, T], [T, T], [T, H], [T - P, H]];
    const folded = group(ex(outer, skin), ex(baseFoam, foam), ex(sideFoam, foam), ex(glueLine, glue), ex(innerBase, skin), ex(innerSide, skin));

    // the flat piece with a 90-degree V-groove cut down to (not through) the bottom paper
    const F = 34, v = T - 2 * P;                                       // half-width of the groove at the top
    const fl = group(
      ex([[-F, 0], [F, 0], [F, P], [-F, P]], skin),
      ex([[-F, P], [-P * 0.4, P], [-v, T - P], [-F, T - P]], foam),
      ex([[F, P], [F, T - P], [v, T - P], [P * 0.4, P]], foam),
      ex([[-F, T - P], [-v, T - P], [-v - P, T], [-F, T]], skin),
      ex([[v, T - P], [F, T - P], [F, T], [v + P, T]], skin),
    );
    return group(at(folded, [-34, 0, -24], [0, 0, 0]), at(fl, [22, 0, 30], [0, -6, 0]));
  },
};
