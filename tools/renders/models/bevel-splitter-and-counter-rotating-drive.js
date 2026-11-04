// Bevel splitter: a brass bevel pinion on a vertical input shaft meshes with two larger steel
// bevel gears that face each other on one horizontal line (20 and 30 teeth), so the two output
// shafts turn in opposite directions at two-thirds of the input speed. Each gear is a solid blank
// with a hub held on its shaft by a set screw. The shafts run in printed bearing blocks on a base
// plate; a bridge carries the input shaft.

// A bevel gear: the planar tooth outline wrapped onto a pitch cone. Apex at the origin, axis +Y,
// the gear body lying at +Y. teeth, module, pitch angle (deg), face width, phase (deg), hub length.
function bevelGear(K, teeth, m, pitchDeg, F, phaseDeg, mat, hubLen = 10) {
  const { THREE, extrude, mesh } = K;
  const d = (pitchDeg * Math.PI) / 180, rp = (teeth * m) / 2, Ro = rp / Math.sin(d);
  const pts = [], ph = (phaseDeg * Math.PI) / 180;
  const rf = rp - 1.1 * m, ra = rp + 0.9 * m;
  // tooth centred at 0.25 of each pitch, gap centred at 0.75 (fractions of the angular pitch)
  const prof = [[-0.29, rf], [-0.25, rp - 0.5 * m], [-0.23, rp], [-0.18, rp + 0.55 * m], [-0.12, ra], [0.12, ra], [0.18, rp + 0.55 * m], [0.23, rp], [0.25, rp - 0.5 * m], [0.29, rf]];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2 + ph, t = (Math.PI * 2) / teeth;
    for (const [f, r] of prof) pts.push([r * Math.cos(a + (0.25 + f) * t), r * Math.sin(a + (0.25 + f) * t)]);
    // the root between teeth, subdivided so the cone wrapping stays smooth
    for (const f of [0.65, 0.75, 0.85]) pts.push([rf * Math.cos(a + f * t), rf * Math.sin(a + f * t)]);
  }
  const ring = rf - 2.2 * m;
  const g = extrude(pts, F, mat, { bevel: 0.15 * m, holes: [{ x: 0, y: 0, r: ring }], curve: 48 }).geometry;
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const th = Math.atan2(y, x), dr = Math.hypot(x, y) - rp;
    const s = Ro - (F / 2 - z);                         // z = +F/2 is the outer (back) end
    const k = s / Ro;
    const rad = s * Math.sin(d) + k * dr * Math.cos(d), ax = s * Math.cos(d) - k * dr * Math.sin(d);
    p.setXYZ(i, rad * Math.cos(th), ax, -rad * Math.sin(th));   // -sin keeps the faces outward
  }
  g.computeVertexNormals();
  const o = mesh(g, mat);
  // the solid blank under the teeth: the toe face, the root cone, a short rim behind the heel, a
  // back cone down to the hub, and the hub itself
  const root = (sv) => { const k = sv / Ro; return [sv * Math.sin(d) - k * 1.1 * m * Math.cos(d), sv * Math.cos(d) + k * 1.1 * m * Math.sin(d)]; };
  const [rt, at0] = root(Ro - F), [rh, ah] = root(Ro);
  const backAx = Ro * Math.cos(d), rim = ah + 0.25 * F;
  const hubR = Math.max(8, rp * 0.36), hubEnd = rim + (rh - hubR) * 0.3 + hubLen;
  const body = K.lathe([[0.01, at0], [rt + 0.05, at0], [rh + 0.05, ah], [rh + 0.05, rim], [hubR, rim + (rh - hubR) * 0.3],
    [hubR, hubEnd], [0.01, hubEnd], [0.01, at0]], mat);
  // set screw in the hub
  const ss = K.at(K.cyl(1.6, 2, K.mat.blackOxide(), { seg: 6 }), [0, hubEnd - hubLen / 2, hubR + 0.4], [90, 0, 0]);
  return { mesh: K.group(o, body, ss), rp, Ro, d, backAx, backRad: Ro * Math.sin(d), F, hubEnd };
}

export default {
  alt: 'Render of a bevel splitter: a brass bevel gear on an upright input shaft meshes with two larger solid steel bevel gears facing each other on one horizontal line, each fixed by its hub to its own output shaft in printed bearing blocks, so the two outputs turn in opposite directions.',
  view: { dir: [0.3, 0.42, 1.2], fill: 1.2, target: [0, 4, 0], light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, box, cyl, extrude, mat } = K;
    const parts = [];
    const frame = mat.pla(0x3a78c2, 100), steel = new K.THREE.MeshPhysicalMaterial({ color: 0xa9adb3, metalness: 1, roughness: 0.42 }), brass = mat.brass(), shaftM = mat.stainless();
    const m = 2.5, F = 15;
    const H = 62;                                        // height of the common apex (meshing point)
    // input pinion: 20 teeth, pitch angle 33.69 deg, axis vertical, body above the apex
    const pin = bevelGear(K, 20, m, 33.69, F, -0.25 * (360 / 20), brass, 9);
    const pinG = group(pin.mesh, at(cyl(3.5, 70, shaftM), [0, pin.hubEnd + 30, 0]));
    parts.push(at(pinG, [0, H, 0]));
    // output gears: 30 teeth, pitch angle 56.31 deg, axes along +x and -x
    const gearSide = (sx) => {
      // contact (towards +y world) sits at local angle 180 deg for the +x gear, 0 deg for the -x gear
      const contact = sx > 0 ? 180 : 0, phase = contact - 0.75 * (360 / 30);
      const g = bevelGear(K, 30, m, 56.31, F, phase, steel, 12);
      const shaft = at(cyl(3.5, 100, shaftM), [0, g.backAx + 48, 0]);
      return at(group(g.mesh, shaft), [0, H, 0], [0, 0, sx > 0 ? -90 : 90]);
    };
    parts.push(gearSide(1), gearSide(-1));
    // base plate, bearing blocks for the outputs, a bridge for the input
    parts.push(at(box(250, 6, 120, frame, 1.5), [0, 3, 0]));
    const block = (x) => at(extrude([[-12, 0], [12, 0], [12, H - 6], [0, H + 14], [-12, H - 6]], 14, frame, { holes: [{ x: 0, y: H, r: 3.7 }], bevel: 0.8 }), [x, 0, 0], [0, 90, 0]);
    parts.push(block(60), block(-60), block(102), block(-102));
    for (const x of [60, -60, 102, -102]) parts.push(at(cyl(6.5, 15, mat.steel()), [x, H, 0], [0, 0, 90]));
    // bridge over the pinion: two posts at the back and front and a top beam with a bearing
    const top = H + pin.hubEnd + 10;
    parts.push(at(box(16, top + 1, 12, frame, 1.2), [0, (top + 1) / 2 + 3, -54]));
    parts.push(at(box(20, 10, 74, frame, 1.2), [0, top + 2, -23]));
    parts.push(at(cyl(6.5, 11, mat.steel()), [0, top + 2, 0]));
    // shaft-end collars so the outputs read as shafts to be used
    parts.push(at(cyl(7, 8, mat.aluminium()), [118, H, 0], [0, 0, 90]));
    parts.push(at(cyl(7, 8, mat.aluminium()), [-118, H, 0], [0, 0, 90]));
    parts.push(at(cyl(7, 8, mat.aluminium()), [0, H + pin.hubEnd + 62, 0]));
    return group(parts);
  },
};
