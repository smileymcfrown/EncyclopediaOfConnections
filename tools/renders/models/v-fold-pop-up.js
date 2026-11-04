// V-fold pop-up: a white pop-up card opened out wide inside a green cover, with a red card piece
// folded down its middle and glued to the two pages along lines that slant away from the centre fold.
// All three creases meet at one point on the centre fold, so as the card opens the piece's middle
// crease rises up and towards the viewer.
const PW = 70, PD = 110;              // page width (each side of the spine) and length along the spine
const T = 0.35, CT = 0.9;              // card and cover thickness
const TAU = 20, THETA = 32, BETA = 52; // page tilt, glue-line angle from the spine, piece half-angle (deg)
const P0 = -34;                        // where the creases meet on the spine (z)

function cardMat(K, c) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: 0.88, metalness: 0, side: K.THREE.DoubleSide }); }
const rad = (d) => (d * Math.PI) / 180;

export default {
  alt: 'Render of a V-fold pop-up: a white card opened out wide inside a green cover has a red card piece folded down its middle and glued to both pages at a slant, so that its middle crease stands up and leans towards the viewer, with all three creases meeting at one point on the centre fold.',
  view: { dir: [1.2, 0.8, 0.8], fill: 1.18, light: [-0.9, 1.4, 0.5], exposure: 1.05, envIntensity: 0.4 },
  build(K) {
    const { group, at, box, extrude, THREE } = K;
    const white = cardMat(K, 0xf1eee6), green = cardMat(K, 0x3a7d5c), red = cardMat(K, 0xc9433a);
    const parts = [];
    // pages and cover, each side tilted up by TAU about the spine (the Z axis)
    for (const s of [-1, 1]) {
      parts.push(at(group(at(box(PW, T, PD, white, 0.05), [s * PW / 2, -T / 2, 0])), [0, 0, 0], [0, 0, s * TAU]));
      parts.push(at(group(at(box(PW + 4, CT, PD + 6, green, 0.2), [s * (PW + 4) / 2, -T - CT / 2, 0])), [0, 0, 0], [0, 0, s * TAU]));
    }
    // the V piece: solve for the middle crease d = (0, sin f, cos f) with d . g = cos(BETA)
    const st = Math.sin(rad(THETA)), ct = Math.cos(rad(THETA)), su = Math.sin(rad(TAU)), cu = Math.cos(rad(TAU));
    const A = ct, B = st * su, R = Math.hypot(A, B);
    const f = Math.atan2(B, A) + Math.acos(Math.cos(rad(BETA)) / R);
    const d = new THREE.Vector3(0, Math.sin(f), Math.cos(f));
    const L = 58;                                    // length of the middle crease
    for (const s of [-1, 1]) {
      const g = new THREE.Vector3(s * st * cu, st * su, ct);
      const e2 = g.clone().sub(d.clone().multiplyScalar(g.dot(d))).normalize();
      const n = new THREE.Vector3().crossVectors(d, e2);
      // half outline in (along crease, across towards the glue line); the glue line is at angle BETA
      const cb = Math.cos(rad(BETA)), sb = Math.sin(rad(BETA)), Lg = 44;
      const outline = [[0, 0], [Lg * cb, Lg * sb], [L, 0]];
      const half = extrude(outline, T, red, { bevel: 0 });
      half.geometry.translate(0, 0, s * T / 2);
      half.geometry.applyMatrix4(new THREE.Matrix4().makeBasis(d, e2, n));
      parts.push(at(half, [0, 0.05, P0]));
      // glue tab: a strip on the page along the glue line, on the side away from the piece
      const out = new THREE.Vector3(s * ct * cu, ct * su, -st);  // in the page, at right angles to g
      const tab = extrude([[1, 0], [Lg - 3, 0], [Lg - 6, 6], [4, 6]], T, red, { bevel: 0 });
      tab.geometry.applyMatrix4(new THREE.Matrix4().makeBasis(g, out, new THREE.Vector3().crossVectors(g, out)));
      parts.push(at(tab, [0, T / 2 + 0.02, P0]));
    }
    return group(parts);
  },
};
