// Glue stick and starch paste: a sheet of white card with a blue paper panel already stuck down on
// one half and fresh glue rubbed on the other half; an open twist-up glue stick and its cap lie in
// front, and behind stand a small jar of white starch paste and a flat brush.
function matte(K, c, rough = 0.9) { return new K.THREE.MeshPhysicalMaterial({ color: c, roughness: rough, metalness: 0 }); }

// streaky wet-glue film: a canvas of soft strokes used as the alpha of a glossy layer
function glueFilm(K) {
  const { THREE } = K;
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 256, 256);
  let s = 3;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 14; i++) {
    const y = 18 + i * 16 + r() * 6;
    g.strokeStyle = `rgba(255,255,255,${0.45 + 0.4 * r()})`;
    g.lineWidth = 16 + r() * 8; g.lineCap = 'round';
    g.beginPath(); g.moveTo(14 + r() * 10, y); g.lineTo(240 - r() * 12, y + (r() - 0.5) * 6); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  return new THREE.MeshPhysicalMaterial({ color: 0x9a72d6, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08,
    transparent: true, alphaMap: t, opacity: 0.8, depthWrite: false });
}

export default {
  alt: 'Render of a glue stick and starch paste: a blue paper panel is stuck down on one half of a white card sheet and the other half is shiny with freshly rubbed-on purple glue that dries clear; an open twist-up glue stick and its cap lie in front, and a small glass pot of white starch paste with a flat brush standing in it is behind.',
  view: { dir: [0.35, 0.8, 1.2], fill: 1.18, light: [-0.6, 1, 0.6], exposure: 0.82 },
  build(K) {
    const { group, at, box, cyl, lathe, mat, THREE } = K;
    const parts = [];
    const white = matte(K, 0xe6cb86), blue = matte(K, 0x4f86c2);
    // the base sheet and the panel stuck down on its left half
    parts.push(at(box(140, 0.4, 100, white, 0.1), [0, 0.2, 0]));
    parts.push(at(box(62, 0.15, 88, blue, 0.05), [-34, 0.48, 0]));
    // freshly rubbed glue on the right half
    const film = at(new THREE.Mesh(new THREE.PlaneGeometry(58, 82), glueFilm(K)), [34, 0.43, 0], [-90, 0, 0]);
    parts.push(film);

    // the glue stick, lying on its side, cap off
    const tubeM = mat.plastic(0xf4f4f2), capM = mat.plastic(0xe0b021);
    const glueM = new THREE.MeshPhysicalMaterial({ color: 0x9b6fd0, roughness: 0.35, metalness: 0 });
    const stick = group(
      at(lathe([[0, 0], [9.6, 0], [9.6, 9], [9.1, 9.6], [9.1, 82], [8.6, 82.6], [7.6, 82.6], [7.6, 70], [0, 70]], tubeM), [0, 0, 0]),
      at(cyl(9.8, 8.4, capM), [0, 4.4, 0]),                                // twist dial
      at(lathe([[0, 82], [7.5, 82], [7.5, 92], [6.5, 93.2], [3, 93.8], [0, 93.9]], glueM), [0, 0, 0]),
    );
    for (let i = 0; i < 24; i++) stick.add(at(box(0.9, 7.4, 0.9, capM, 0.2), [9.8 * Math.cos((i / 24) * Math.PI * 2), 4.4, 9.8 * Math.sin((i / 24) * Math.PI * 2)]));
    parts.push(at(stick, [-22, 9.8, 82], [0, 0, -90]));
    parts.push(at(lathe([[0, 0], [10.2, 0], [10.2, 27], [9.4, 27], [9.4, 1.2], [0, 1.2]], capM), [80, 10.2, 50], [90, 0, -60]));

    // the pot of paste, behind, with the brush standing in it
    const jarM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.06, metalness: 0, transmission: 0.9, thickness: 2.5, ior: 1.5 });
    const pasteM = new THREE.MeshPhysicalMaterial({ color: 0xf1ede2, roughness: 0.45, metalness: 0, clearcoat: 0.3 });
    const jar = group(
      lathe([[0, 0], [25, 0], [26, 2], [26, 28], [25, 30], [21.5, 30], [21.5, 33.5], [20.5, 34], [20.5, 30], [24, 28], [24, 2.5], [0, 2.5]], jarM),
      lathe([[0, 2.5], [23.9, 2.5], [23.9, 21], [21, 22.6], [12, 23.2], [5, 21.6], [0, 22]], pasteM),
    );
    for (const [x, z, r] of [[8, -6, 4], [-4, 10, 3.2], [12, 9, 2.6], [-10, -8, 3.6]]) jar.add(at(K.sphere(r, pasteM), [x, 22.2, z], [0, 0, 0]));
    const brush = group(
      at(lathe([[0, 0], [2.6, 0], [3.4, 40], [3.0, 70], [2.2, 92], [0, 93]], mat.wood('#b98a55', '#8a5f34')), [0, 0, 0]),
      at(box(4, 16, 13, mat.aluminium(), 0.8), [0, -6, 0]),
      at(box(3.4, 16, 12.4, matte(K, 0x8b6a45, 0.85), 0.6), [0, -20, 0]),
    );
    jar.add(at(brush, [-2, 32, 0], [0, 0, -42]));
    parts.push(at(jar, [-46, 0, -82], [0, 30, 0]));
    return group(parts);
  },
};
