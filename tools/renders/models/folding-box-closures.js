// Folding box closures: a printed card carton (tuck-end box), green outside and plain white inside,
// with its top open: the two dust flaps folded in, and the closure panel swung up with its rounded
// tuck flap ready to slide down inside the front wall.
const W = 50, D = 30, H = 72, T = 0.45;
const TUCK = 13;

function cardMat(K, c) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: 0.62, metalness: 0, clearcoat: 0.15, clearcoatRoughness: 0.6 }); }

// a flat panel w x h, thickness T along Z, outside face +Z
function panel(K, w, h, out, inn) {
  const p = K.box(w, h, T, out, 0.08);
  p.material = [inn, inn, inn, inn, out, inn];
  return p;
}
// a flap outline (base along X at y = 0, depth along +Y), extruded T thick
function flap(K, pts, m) { return K.extrude(pts, T, m, { bevel: 0.05 }); }

function tongue(w, d) {
  const pts = [[-w / 2, 0], [w / 2, 0], [w / 2, d - 5]];
  for (let i = 0; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); pts.push([w / 2 - 5 + 5 * Math.cos(a), d - 5 + 5 * Math.sin(a)]); }
  for (let i = 0; i <= 8; i++) { const a = Math.PI / 2 + (i / 8) * (Math.PI / 2); pts.push([-w / 2 + 5 + 5 * Math.cos(a), d - 5 + 5 * Math.sin(a)]); }
  return pts;
}

// the carton: open = angle of the top closure panel (0 = closed)
function carton(K, out, inn, open) {
  const { group, at } = K;
  const g = group(
    at(panel(K, W, H, out, inn), [0, H / 2, D / 2 - T / 2]),
    at(panel(K, W, H, out, inn), [0, H / 2, -D / 2 + T / 2], [0, 180, 0]),
    at(panel(K, D - 2 * T, H, out, inn), [-W / 2 + T / 2, H / 2, 0], [0, -90, 0]),
    at(panel(K, D - 2 * T, H, out, inn), [W / 2 - T / 2, H / 2, 0], [0, 90, 0]),
    at(panel(K, W - 2 * T, D - 2 * T, out, inn), [0, T / 2, 0], [90, 0, 0]),
  );
  // dust flaps on the side walls, folded in (angled ends)
  const a = D / 2 - T - 0.5, dd = 15;
  const dust = [[-a, 0], [a, 0], [a - 2, 6], [a - 9, dd], [-a + 3, dd], [-a, 4]];
  if (open) {
    g.add(at(group(at(flap(K, dust, inn), [0, 0, 0], [81, 0, 0])), [-W / 2 + T, H - T / 2 - 0.2, 0], [0, 90, 0]));
    g.add(at(group(at(flap(K, dust, inn), [0, 0, 0], [81, 0, 0])), [W / 2 - T, H - T / 2 - 0.2, 0], [0, -90, 0]));
  }
  // closure panel on the back wall's top edge, with the tuck flap on its far edge
  const lid = K.box(W, T, D, out, 0.08);
  lid.material = [inn, inn, out, inn, inn, inn];
  const tuck = at(group(at(flap(K, tongue(W - 3, TUCK), inn), [0, 0, 0], [90, 0, 0])), [0, 0, D - 1.5 * T], [open ? 40 : 90, 0, 0]);
  g.add(at(group(at(lid, [0, T / 2, D / 2]), tuck), [0, H, -D / 2], [-open, 0, 0]));
  return g;
}

export default {
  alt: 'Render of folding box closures: a green printed card carton stands with its top open, the two small dust flaps folded in and the closure panel swung up, with the rounded tuck flap on its edge ready to slide down inside the front wall.',
  view: { dir: [0.7, 0.9, 1.35], fill: 0.98, light: [-0.6, 1, 0.55], exposure: 0.9 },
  build(K) {
    const { group, at } = K;
    const out = cardMat(K, 0x2c7653), inn = cardMat(K, 0xdcd8cf);
    return group(at(carton(K, out, inn, 112), [0, 0, 0], [0, -14, 0]));
  },
};
