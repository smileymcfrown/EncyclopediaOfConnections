// Bent or twisted tab through a slot: a sheet-metal upright whose three tabs come up through slots
// in a painted tinplate top sheet; one tab just pushed through, one twisted a quarter turn, one
// folded flat.
const T = 0.8;            // sheet thickness (mm)
const TW = 7;             // tab width
const H = 16;             // height of the upright panel
const XS = [-15, 0, 15];  // tab positions: straight, twisted, folded

// A flat strip TW wide and T thick, rising from y = 0 to h, twisted a quarter turn over its lower part.
function twistedTab(K, h, m) {
  const { THREE, mesh } = K;
  const geo = new THREE.BoxGeometry(TW, h, T, 6, 40, 1);
  geo.translate(0, h / 2, 0);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    let s = Math.min(Math.max((y - 0.2) / 4.2, 0), 1);
    s = s * s * (3 - 2 * s);                        // ease in and out of the twist
    const a = (Math.PI / 2) * s;
    p.setXYZ(i, x * Math.cos(a) - z * Math.sin(a), y, x * Math.sin(a) + z * Math.cos(a));
  }
  geo.computeVertexNormals();
  return mesh(geo, m);
}

// The bent-over end of a tab: up out of the slot, round a tight bend, and flat along the top sheet.
function foldedTab(K, m, y0, len) {
  const { at, extrude } = K;
  const pts = [[-T / 2, y0 - 0.2], [T / 2, y0 - 0.2], [T / 2, y0], [T / 2 + len, y0], [T / 2 + len, y0 + T]];
  for (let i = 0; i <= 8; i++) {
    const a = (Math.PI / 2) * (1 + i / 8);
    pts.push([T / 2 + T * Math.cos(a), y0 + T * Math.sin(a)]);
  }
  return K.group(at(extrude(pts, TW, m, { bevel: 0.08 }), [0, 0, 0], [0, 90, 0]));
}

export default {
  alt: 'Render of a bent-tab and twist-tab joint: a steel sheet stands on edge under a blue painted metal sheet, and three tabs on its top edge come up through slots in the blue sheet; the first is just pushed through, the second is twisted a quarter turn and the third is folded flat, so neither of those two can pull back out.',
  view: { dir: [0.85, 0.75, 1.1], fill: 1.1, target: [0, 2, 0], light: [-0.5, 1, 0.7] },
  build(K) {
    const { group, at, extrude, mat } = K;
    const steel = mat.zinc(), tin = mat.paint(0x2f62a8);
    const top = H + T;                               // top face of the top sheet
    // the upright panel, with the tab stubs that pass through the slots
    const out = [[-25, 0], [25, 0], [25, H]];
    for (const x of [...XS].reverse()) {
      const h = x === XS[0] ? top + 8 : top;        // the straight tab is cut full length
      out.push([x + TW / 2, H], [x + TW / 2, h], [x - TW / 2, h], [x - TW / 2, H]);
    }
    out.push([-25, H]);
    const panel = extrude(out, T, steel, { bevel: 0.1 });
    // the top sheet with three slots
    const slots = XS.map((x) => [[x - TW / 2 - 0.4, -0.7], [x + TW / 2 + 0.4, -0.7], [x + TW / 2 + 0.4, 0.7], [x - TW / 2 - 0.4, 0.7]].reverse());
    const sheet = at(extrude([[-29, -13], [29, -13], [29, 13], [-29, 13]], T, tin, { bevel: 0.12, holes: slots }), [0, H + T / 2, 0], [-90, 0, 0]);
    const twist = at(twistedTab(K, 7.5, steel), [XS[1], top - 0.05, 0]);
    const fold = at(foldedTab(K, steel, top, 7.5), [XS[2], 0, 0]);
    return group(panel, sheet, twist, fold);
  },
};
