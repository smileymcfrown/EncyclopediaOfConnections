// Glass and mirror edge clips and clamps: a piece of painted wall with a small mirror held by four
// white plastic offset clips (two carrying it at the bottom, two over the top edge), and below it a
// glass shelf gripped by two chrome clamps lined with black rubber pads. Nothing is drilled through
// the glass.
export default {
  alt: 'Render of glass and mirror edge clips and clamps: on a piece of painted wall, a mirror is held by four small white plastic clips that overlap its edges, two carrying it at the bottom and two over the top, and below it a glass shelf is gripped by two chrome clamps lined with black rubber pads, with no holes in the glass.',
  view: { dir: [0.8, 0.12, 1.2], fill: 1.05, light: [-0.45, 1, 1.0] },
  build(K) {
    const { group, at, box, cyl, extrude, mat, THREE } = K;
    const parts = [];
    const wallM = mat.paint(0xe4ddd0), clipM = mat.plastic(0xf6f5f1), screwM = mat.zinc();
    const edgeM = new THREE.MeshPhysicalMaterial({ color: 0x9fc7b4, metalness: 0, roughness: 0.15, transmission: 0.3, thickness: 3 });
    const glassM = new THREE.MeshPhysicalMaterial({ color: 0xeef7f2, metalness: 0, roughness: 0.04, transmission: 0.92, thickness: 6, ior: 1.5 });
    const noShadow = (o) => { o.traverse((c) => { c.castShadow = false; }); return o; };
    // the wall: a thick painted panel, front face at z = 0
    const WW = 250, WH = 250;
    parts.push(at(box(WW, WH, 16, wallM, 1), [0, WH / 2, -8]));
    // the mirror: glass edge (greenish) with a silvered face, standing 3 mm off the wall
    const MW = 150, MH = 100, MT = 4, my = 172, mz = 3 + MT / 2;
    parts.push(at(box(MW, MH, MT, edgeM, 0.6), [0, my, mz]));
    parts.push(at(box(MW - 1.4, MH - 1.4, 0.2, mat.chrome(), 0.05), [0, my, mz + MT / 2 + 0.02]));
    // offset mirror clips: a spacer boss on the wall, a round lip over the mirror face, a screw
    const clip = (x, y, s) => {
      const g = [];
      g.push(at(cyl(6, 3 + MT, clipM), [x, y, (3 + MT) / 2], [90, 0, 0]));
      g.push(at(cyl(11, 2.4, clipM), [x, y, 3 + MT + 1.2], [90, 0, 0]));
      g.push(at(cyl(4.2, 1.2, screwM, { r2: 3.6 }), [x, y, 3 + MT + 3], [90, 0, 0]));
      g.push(at(box(5, 0.9, 0.5, mat.blackOxide(), 0.1), [x, y, 3 + MT + 3.6]));
      g.push(at(box(0.9, 5, 0.5, mat.blackOxide(), 0.1), [x, y, 3 + MT + 3.6]));
      return g;
    };
    for (const x of [-48, 48]) {
      parts.push(...clip(x, my - MH / 2 - 4, -1));
      parts.push(...clip(x, my + MH / 2 + 4, 1));
    }
    // the glass shelf and its two clamps
    const sy = 62, ST = 6, SW = 200, SD = 82;
    parts.push(noShadow(at(box(SW, ST, SD, glassM, 0.8), [0, sy, SD / 2 + 0.5])));
    // polished front edge of the shelf, seen edge-on: greenish
    parts.push(noShadow(at(box(SW - 1.2, ST - 0.8, 0.4, edgeM, 0.1), [0, sy, SD + 0.5])));
    parts.push(noShadow(at(box(0.4, ST - 0.8, SD - 1.2, edgeM, 0.1), [SW / 2, sy, SD / 2 + 0.5])));
    parts.push(noShadow(at(box(0.4, ST - 0.8, SD - 1.2, edgeM, 0.1), [-SW / 2, sy, SD / 2 + 0.5])));
    // clamp: side outline (z out from the wall, y up) with a slot for the glass, extruded across x
    const prof = [[0, -17], [8, -17], [46, -9], [48, -7.5], [48, -4.2], [12, -4.2], [12, 4.2], [48, 4.2], [48, 7.5], [46, 9], [8, 17], [0, 17]];
    for (const x of [-62, 62]) {
      parts.push(at(extrude(prof, 34, mat.chrome(), { bevel: 1.2 }), [x, sy, 0], [0, -90, 0]));
      // back plate on the wall
      parts.push(at(box(40, 46, 3, mat.chrome(), 1.2), [x, sy, 1.5]));
      // rubber pads lining the jaws, showing as black lines above and below the glass
      for (const s of [-1, 1]) parts.push(at(box(33, 1.2, 37.6, mat.rubber(), 0.3), [x, sy + s * (ST / 2 + 0.6), 30.9]));
      // the clamping grub screw under the jaw
      parts.push(at(cyl(2.6, 1.2, mat.blackOxide()), [x, sy - 12.6, 30], [-12, 0, 0]));
    }
    return group(parts);
  },
};
