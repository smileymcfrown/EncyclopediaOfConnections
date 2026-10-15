// Wrap-spring clutch: an input hub (driven by a brass gear) and an output hub of the same size end
// to end on one axis, with a tight steel coil spring wrapped over both. A quarter is cut away to
// show the two hubs meeting under the spring, each on its own shaft.
export default {
  alt: 'Render of a wrap-spring clutch with a quarter cut away: two steel hubs of the same size set end to end on separate shafts, the lower one driven by a brass gear, with a tight coil spring wrapped over both so that turning the input the winding way grips the output and turning it back lets it slip.',
  kind: 'cross-section',
  view: { dir: [0.55, 0.5, 1.0], fill: 1.0 },
  build(K) {
    const { group, at, gear, cyl, wire, lathe, mat } = K;
    const parts = [];
    const gw = 6, hubR = 9, hubL = 20, gap = 0.8, bore = 3;
    // input: brass gear lying on the table, its shaft running up into the input hub
    parts.push(at(gear(32, 1.25, gw, mat.brass(), { bore }), [0, gw / 2, 0], [-90, 0, 0]));
    const y1 = gw, y2 = y1 + hubL + gap;
    parts.push(lathe([[bore, y1], [hubR, y1], [hubR, y1 + hubL - 0.3], [hubR - 0.3, y1 + hubL], [bore, y1 + hubL], [bore, y1]],
      mat.blackOxide(), { cut: 90, cutMat: mat.castIron() }));
    parts.push(at(cyl(bore, y1 + hubL - 1.5, mat.stainless()), [0, (y1 + hubL - 1.5) / 2, 0]));
    // output hub above it, same diameter, on the output shaft
    parts.push(lathe([[bore, y2], [hubR - 0.3, y2], [hubR, y2 + 0.3], [hubR, y2 + hubL], [6, y2 + hubL], [6, y2 + hubL + 4], [bore, y2 + hubL + 4], [bore, y2]],
      mat.steel(), { cut: 90, cutMat: mat.aluminium() }));
    parts.push(at(cyl(bore, 40, mat.stainless()), [0, y2 + 1.5 + 20, 0]));
    // the spring: tight turns of wire over both hubs, the quarter facing the camera left out
    const wr = 0.8, R = hubR + wr, ys = y1 + 4, ye = y2 + hubL - 4, turns = Math.floor((ye - ys) / (2 * wr + 0.08));
    const pitch = (ye - ys) / turns;
    for (let k = 0; k < turns; k++) {
      const pts = [];
      for (let d = 135; d <= 405; d += 9) {
        const a = (d * Math.PI) / 180, y = ys + pitch * (k + (d - 135) / 360);
        pts.push([R * Math.cos(a), y, R * Math.sin(a)]);
      }
      parts.push(wire(pts, wr, mat.chrome()));
    }
    return group(...parts);
  },
};
