// Panel standoffs: a glass panel held clear of a painted wall by four stainless standoffs. Each
// barrel is screwed to the wall and sets the gap; the panel's drilled hole sits over the cap's
// threaded stud and the cap screws into the barrel, pinching the glass between clear washers. One
// cap is drawn just pulled out, showing its stud.
export default {
  alt: 'Render of panel standoffs: a glass panel held about an inch clear of a painted wall by four stainless steel standoffs, the glass pinched between each barrel and its domed cap; one cap is pulled out to show the threaded stud that passes through the drilled hole in the glass.',
  view: { dir: [0.95, 0.4, 1.2], fill: 1.2, target: [12, 0, 0], ground: false, light: [-0.7, 0.9, 0.8] },
  build(K) {
    const { THREE, group, at, box, lathe, extrude, roundRect, threaded, mat } = K;
    const WT = 14, GAP = 25, GT = 6, WS = 1.2, PW = 230, PH = 150, IN = 26, R = 9.5;
    const wall = mat.paint(0x667780); wall.clearcoat = 0; wall.roughness = 0.9; wall.metalness = 0;
    const parts = [at(box(340, 220, WT, wall, 0.5), [0, 0, -WT / 2])];
    // the glass, with four drilled holes
    const shape = roundRect(PW, PH, 2);
    const holes = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sy]) => [sx * (PW / 2 - IN), sy * (PH / 2 - IN)]);
    for (const [x, y] of holes) { const h = new THREE.Path(); h.absarc(x, y, 5, 0, Math.PI * 2, true); shape.holes.push(h); }
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xf2fbf8, metalness: 0, roughness: 0.04, transmission: 0.9, thickness: GT, ior: 1.5,
      attenuationColor: new THREE.Color(0x7fc9b0), attenuationDistance: 25, specularIntensity: 1 });
    const zg = GAP + WS + GT / 2;
    parts.push(at(extrude(shape, GT, glass, { bevel: 0.6 }), [0, 0, zg]));
    const steel = mat.stainless(), vinyl = mat.silicone(0xeef2f2);
    // barrel profile (axis Y, from the wall outwards), cap profile (a short collar and a dome)
    const barrel = [[0, 0], [R, 0], [R, GAP - 0.5], [R - 0.5, GAP], [0, GAP]];
    const cap = [[0, 0], [R - 0.4, 0], [R, 0.4], [R, 4], [R - 0.6, 6.5], [R - 2.2, 8.6], [R - 5, 9.8], [0, 10.2]];
    holes.forEach(([x, y], i) => {
      const s = group(lathe(barrel, steel));
      s.add(at(lathe([[4.5, 0], [R, 0], [R, WS], [4.5, WS], [4.5, 0]], vinyl), [0, GAP, 0]));
      const out = i === 2 ? 22 : 0;                                         // the top right cap pulled out
      if (!out) s.add(at(lathe([[4.5, 0], [R, 0], [R, WS], [4.5, WS], [4.5, 0]], vinyl), [0, GAP + WS + GT, 0]));
      const c = group(lathe(cap, steel), at(threaded(4, 1, 13, steel), [0, -12.5, 0]));
      s.add(at(c, [0, GAP + WS + GT + WS + out, 0]));
      if (out) s.add(at(lathe([[4.5, 0], [R, 0], [R, WS], [4.5, WS], [4.5, 0]], vinyl), [0, GAP + WS + GT + out * 0.45, 0]));
      parts.push(at(s, [x, y, 0], [90, 0, 0]));
    });
    return group(parts);
  },
};
