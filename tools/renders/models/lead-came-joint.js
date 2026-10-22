// Lead came joint: a small leaded-glass panel lying flat. Nine pieces of coloured and clear glass
// sit in the channels of dull grey H-section lead came, with U-section came round the border; the
// came is soldered only where strips meet (bright flattened blobs), and dark cement shows along the
// edges of the came leaves. A short offcut of H came lies in front, showing its H-shaped end.
export default {
  alt: 'Render of a lead came joint: a small leaded-glass panel of nine coloured and clear glass pieces held in grey H-shaped lead strips, with bright solder blobs only where the strips meet and dark cement along their edges; a short offcut of lead came lies in front, showing its H-shaped end.',
  view: { dir: [0.42, 0.62, 1.0], fill: 1.2, light: [-0.5, 1, 0.4] },
  build(K) {
    const { group, at, box, sphere, extrude, mat, THREE } = K;
    const parts = [];
    const lead = new THREE.MeshPhysicalMaterial({ color: 0x55595e, metalness: 0.5, roughness: 0.6 });
    const solder = new THREE.MeshPhysicalMaterial({ color: 0xb8bcc1, metalness: 1, roughness: 0.42 });
    const cement = new THREE.MeshPhysicalMaterial({ color: 0x1c1c1c, metalness: 0, roughness: 0.9 });
    // cathedral glass: a gently rippled surface (a bump map of soft random blobs)
    const cv = document.createElement('canvas'); cv.width = cv.height = 256;
    const g2 = cv.getContext('2d'); g2.fillStyle = '#808080'; g2.fillRect(0, 0, 256, 256);
    let sd = 11; const rnd = () => ((sd = (sd * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 260; i++) {
      const x = rnd() * 256, y = rnd() * 256, r = 6 + rnd() * 18, v = rnd() > 0.5 ? 255 : 0;
      const gr = g2.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${v},${v},${v},0.25)`); gr.addColorStop(1, `rgba(${v},${v},${v},0)`);
      g2.fillStyle = gr; g2.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
    const ripple = new THREE.CanvasTexture(cv); ripple.wrapS = ripple.wrapT = THREE.RepeatWrapping;
    const glass = (c, tr = 0.85) => new THREE.MeshPhysicalMaterial({ color: c, metalness: 0, roughness: 0.12, transmission: tr, thickness: 3, ior: 1.5, bumpMap: ripple, bumpScale: 1.5 });
    const G = 3, L = 0.9, LW = 7, HW = 1.4;              // glass thickness, leaf thickness, leaf width, heart width
    const yG = L + G / 2, yTop = L + G + L / 2, yBot = L / 2;
    const XS = [-72, -30, 30, 72], ZS = [-52, -22, 22, 52];   // came centre lines (outer two are the border)
    // came along a line: 'x' runs along x at z = c, 'z' runs along z at x = c, from a to b
    const run = (axis, c, a, b, m, w, h, y) => {
      const len = b - a, mid = (a + b) / 2;
      return axis === 'x' ? at(box(len, h, w, m, Math.min(0.4, h / 2.2)), [mid, y, c]) : at(box(w, h, len, m, Math.min(0.4, h / 2.2)), [c, y, mid]);
    };
    const hCame = (axis, c, a, b) => {
      parts.push(run(axis, c, a, b, lead, LW, L, yTop), run(axis, c, a, b, lead, LW, L, yBot), run(axis, c, a, b, lead, HW, G, yG));
      for (const s of [-1, 1]) parts.push(run(axis, c + s * (LW / 2 + 0.3), a + 4, b - 4, cement, 0.7, 0.18, L + G + 0.09));
    };
    // border U came: an outer web and leaves reaching inwards, as a square frame
    const ext = 75;
    for (const [axis, c, s] of [['z', -ext, 1], ['z', ext, -1], ['x', -55, 1], ['x', 55, -1]]) {
      const a = axis === 'z' ? -55 : -ext, b = -a;
      parts.push(run(axis, c + (s * HW) / 2, a, b, lead, HW, G + 2 * L, (G + 2 * L) / 2));
      for (const y of [yTop, yBot]) parts.push(run(axis, c + s * (LW / 2 - 0.5), a + (axis === 'x' ? 0 : 0), b, lead, LW - 1, L, y));
      parts.push(run(axis, c + s * (LW - 0.4), a + 6, b - 6, cement, 0.7, 0.18, L + G + 0.09));
    }
    // inner H came: two along z, two along x, butting into the border
    for (const x of [-30, 30]) hCame('z', x, -55 + 1.4, 55 - 1.4);
    for (const z of [-22, 22]) hCame('x', z, -ext + 1.4, ext - 1.4);
    // the glass pieces in the channels
    const col = [[0xe9a540, 0xdce9de, 0xe9a540], [0xc8e0d0, 0x2f62b8, 0xc8e0d0], [0xe9a540, 0xdce9de, 0xe9a540]];
    const xe = [-ext + HW, -30, 30, ext - HW], ze = [-55 + HW, -22, 22, 55 - HW];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const x0 = xe[i] + HW / 2 + 0.1, x1 = xe[i + 1] - HW / 2 - 0.1, z0 = ze[j] + HW / 2 + 0.1, z1 = ze[j + 1] - HW / 2 - 0.1;
      const c = col[j][i], tr = c === 0x2f62b8 ? 0.7 : 0.85;
      const pane = at(box(x1 - x0, G, z1 - z0, glass(c, tr), 0.3), [(x0 + x1) / 2, yG, (z0 + z1) / 2]);
      pane.castShadow = false;
      parts.push(pane);
    }
    // solder blobs: at every crossing, and where each inner came meets the border
    const blob = (x, z, r = 6.2) => at(sphere(r, solder), [x, L + G + L - 0.1, z]);
    const flat = (o) => { o.scale.set(1, 0.1, 1); return o; };
    for (const x of [-30, 30]) for (const z of [-22, 22]) parts.push(flat(blob(x, z)));
    for (const x of [-30, 30]) for (const z of [-52.5, 52.5]) parts.push(flat(blob(x, z, 5.4)));
    for (const z of [-22, 22]) for (const x of [-72.5, 72.5]) parts.push(flat(blob(x, z, 5.4)));
    // an offcut of H came in front, its end towards the viewer
    const H = [[-LW / 2, 0], [LW / 2, 0], [LW / 2, L], [HW / 2, L], [HW / 2, L + G], [LW / 2, L + G], [LW / 2, G + 2 * L],
      [-LW / 2, G + 2 * L], [-LW / 2, L + G], [-HW / 2, L + G], [-HW / 2, L], [-LW / 2, L]];
    parts.push(at(extrude(H, 36, lead, { bevel: 0.15 }), [62, 0, 74], [0, 62, 0]));
    return group(parts);
  },
};
