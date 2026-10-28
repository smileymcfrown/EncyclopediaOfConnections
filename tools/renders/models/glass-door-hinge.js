// Glass door hinge (pivot type): a small wooden display cabinet with a glass door standing part
// open. Two chrome clamps grip the top and bottom corners of the glass on the hinge side; a pin on
// each clamp turns in the cabinet top and base, so the door swings about its corner. A small white
// magnetic catch sits on the base where the far corner of the door closes, with a chrome strike
// plate clamped on the glass.
export default {
  alt: 'Render of a glass door hinge: a small wooden cabinet with a glass door standing part open, the door held only by two chrome clamps gripping its top and bottom corners, each turning on a pin in the cabinet top and base, with a small magnetic catch on the base for the other corner.',
  view: { dir: [-0.85, 0.4, 1.25], fill: 1.12, light: [0.4, 1, 0.9] },
  build(K) {
    const { group, at, box, cyl, mat, THREE } = K;
    const parts = [];
    const wood = mat.wood('#c79b68', '#8f6438'), back = mat.wood('#b98c5c', '#80562f');
    const glassM = new THREE.MeshPhysicalMaterial({ color: 0xf0f8f4, metalness: 0, roughness: 0.03, transmission: 0.93, thickness: 4, ior: 1.5 });
    const edgeM = new THREE.MeshPhysicalMaterial({ color: 0x8fbfa9, metalness: 0, roughness: 0.15, transmission: 0.25, thickness: 3 });
    const chrome = mat.chrome(), pad = mat.plastic(0x2a2a2a);
    const noShadow = (o) => { o.traverse((c) => { c.castShadow = false; }); return o; };
    // cabinet: base, top, two sides and a back; open front at z = D
    const W = 300, H = 250, D = 170, T = 18;
    parts.push(at(box(W, T, D, wood, 1.5), [0, T / 2, D / 2]));
    parts.push(at(box(W, T, D, wood, 1.5), [0, H - T / 2, D / 2]));
    for (const s of [-1, 1]) parts.push(at(box(T, H - 2 * T, D, wood, 1), [s * (W / 2 - T / 2), H / 2, D / 2]));
    parts.push(at(box(W - 2 * T, H - 2 * T, 6, back, 0.5), [0, H / 2, 3]));
    parts.push(at(box(W - 2 * T - 2, 8, D - 20, mat.wood('#c79b68', '#8f6438'), 1), [0, H / 2, D / 2 + 2]));
    // door: glass sheet in front of the cabinet, pivoting on a vertical axis near the left corner
    const GT = 5, GW = W - 2 * T - 10;
    const px = -W / 2 + T + 14, pz = D - 10;                 // pivot axis (pins in top and base)
    const door = new THREE.Group();
    // door local: pivot at origin, glass running +x from just left of the pivot; the glass stops
    // 7 mm short of the top and base so the clamps clear them
    const gx0 = -10, gy0 = T + 7, gh = H - 2 * T - 14;
    door.add(noShadow(at(box(GW, gh, GT, glassM, 0.6), [gx0 + GW / 2, gy0 + gh / 2, 0])));
    // polished edges (seen as green lines)
    door.add(noShadow(at(box(0.4, gh - 1, GT - 0.6, edgeM, 0.1), [gx0 + GW, gy0 + gh / 2, 0])));
    door.add(noShadow(at(box(GW - 1, 0.4, GT - 0.6, edgeM, 0.1), [gx0 + GW / 2, gy0 + gh, 0])));
    door.add(noShadow(at(box(GW - 1, 0.4, GT - 0.6, edgeM, 0.1), [gx0 + GW / 2, gy0, 0])));
    // corner clamps: chrome jaws over both faces of the glass, black pads, a pin into the cabinet
    const clamp = (up) => {
      const sgn = up ? 1 : -1, edge = up ? gy0 + gh : gy0;    // the glass edge it grips
      const g = [], cx = gx0 + 20;
      for (const s of [-1, 1]) g.push(at(box(44, 20, 4, chrome, 1.2), [cx, edge - sgn * 9, s * (GT / 2 + 1 + 2)]));
      g.push(at(box(44, 4, GT + 10, chrome, 1.2), [cx, edge + sgn * 2, 0]));
      for (const s of [-1, 1]) g.push(at(box(43, 19, 1, pad, 0.3), [cx, edge - sgn * 9, s * (GT / 2 + 0.5)]));
      g.push(at(cyl(3.6, 1.4, chrome, { r2: 3.0 }), [cx + 10, edge - sgn * 10, GT / 2 + 5.7], [90, 0, 0]));
      g.push(at(cyl(1.3, 0.4, mat.blackOxide(), { seg: 6 }), [cx + 10, edge - sgn * 10, GT / 2 + 6.3], [90, 0, 0]));
      // the pin: from the clamp into the cabinet top or base, with a nylon washer
      const py = up ? H - T : T, c0 = edge + sgn * 4;
      g.push(at(cyl(4, Math.abs(py - c0) + 6, mat.stainless()), [0, (py + c0) / 2 + sgn * 3, 0]));
      g.push(at(cyl(6.5, 1.5, mat.nylon()), [0, py - sgn * 0.75, 0]));
      return g;
    };
    door.add(...clamp(false), ...clamp(true));
    // strike plate clamped on the far bottom corner of the glass
    door.add(at(box(26, 14, GT + 4, chrome, 1), [gx0 + GW - 16, gy0 + 7, 0]));
    door.position.set(px, 0, pz);
    door.rotation.y = (-55 * Math.PI) / 180;
    parts.push(door);
    // the cabinet-side bearings: brass bushes in the base and top under the pins
    parts.push(at(cyl(5.5, 0.6, mat.brass()), [px, T + 0.3, pz]));
    parts.push(at(cyl(5.5, 0.6, mat.brass()), [px, H - T - 0.3, pz]));
    // magnetic catch on the base, where the far corner closes
    const cx = px + gx0 + GW - 16;
    parts.push(at(box(24, 7, 14, mat.plastic(0xf4f2ee), 2), [cx, T + 3.5, pz - 12]));
    parts.push(at(box(18, 4, 1, mat.magnet(), 0.3), [cx, T + 4, pz - 4.6]));
    return group(parts);
  },
};
