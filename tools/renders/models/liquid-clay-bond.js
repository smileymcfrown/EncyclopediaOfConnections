// Liquid-clay bond: a polymer clay mushroom whose cap is joined to its stem with a thin layer of
// liquid polymer clay, a quarter cut away to show the layer and the little bead squeezed out round
// the joint; beside it a second stem with a wet coat of liquid clay brushed on its top, and the
// brush.
export default {
  alt: 'Render of a liquid-clay bond in polymer clay: a small clay mushroom with a quarter cut away shows a thin, glossy layer of liquid clay between its red cap and cream stem, with a little bead squeezed out round the joint; beside it a second stem has a wet coat of liquid clay brushed on top, ready for its cap, and the brush lies in front.',
  kind: 'cross-section',
  note: 'weak: the liquid-clay layer shows only as a thin pale band under the cap, even drawn thicker than real',
  view: { dir: [0.4, 0.38, 1.0], fill: 1.12, exposure: 0.85, light: [-0.5, 1, 0.6], target: [-4, 2, 0] },
  build(K) {
    const { THREE, group, at, lathe, mat } = K;
    const phys = (o) => new THREE.MeshPhysicalMaterial({ metalness: 0, ...o });
    const clay = (c) => phys({ color: c, roughness: 0.62, sheen: 0.2, sheenColor: new THREE.Color(0xffffff) });
    const cream = clay(0xdcc394), creamCut = clay(0xc4a874), red = clay(0xc23b2a), redCut = clay(0xa22f22), white = clay(0xf6f3ea);
    const liquid = phys({ color: 0xfbfaf6, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.05, transmission: 0.35, thickness: 0.6 });
    const smooth = (pts, n = 90) => new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y))).getPoints(n).map((v) => [Math.max(v.x, 0), v.y]);
    const q = { cut: 90 };

    const stemProf = [[0, 0], [7.5, 0], [7.8, 0.8], [6.6, 4], [5.6, 12], [5.2, 20], [5.0, 22], [0, 22], [0, 0]];
    const layerY = 22, LT = 1.5;                                     // the liquid clay layer
    const capY = layerY + LT;
    const capProf = [[0, capY], [5.4, capY], ...smooth([[10, capY + 0.7], [15, capY + 1.9], [16.6, capY + 3.6], [16, capY + 6.5], [13.4, capY + 10], [8.5, capY + 13], [0, capY + 14.2]], 60)];
    capProf.push([0, capY]);
    const bead = [];
    for (let k = 0; k < 24; k++) { const t = (k / 24) * Math.PI * 2; bead.push([5.4 + 0.75 * Math.cos(t), layerY + LT / 2 + 0.6 * Math.sin(t)]); }

    const mushroom = group(
      lathe(stemProf, cream, { ...q, cutMat: creamCut }),
      lathe([[0, layerY], [5.3, layerY], [5.3, layerY + LT], [0, layerY + LT], [0, layerY]], liquid, { ...q, cutMat: liquid }),
      lathe(bead, liquid, { ...q, cutMat: liquid }),
      lathe(capProf, red, { ...q, cutMat: redCut }),
    );
    // white dots on the cap, kept off the cut-away quarter (which faces +z)
    const dots = [[80, 0.55], [140, 0.75], [200, 0.5], [255, 0.8], [300, 0.55], [120, 0.25], [230, 0.3], [180, 0.85], [100, 0.85]];
    for (const [phi, f] of dots) {
      const r = 15.5 * f, a = (phi * Math.PI) / 180;
      // height of the cap surface at radius r (from the profile)
      let y = capY + 14.2;
      for (let i = 2; i < capProf.length - 1; i++) if (capProf[i][0] >= r) y = capProf[i][1];
      const d = K.sphere(1.6 + 0.6 * (1 - f), white);
      d.scale.set(1, 0.35, 1);
      const n = new THREE.Vector3(r * Math.sin(a), 0, r * Math.cos(a));
      d.position.set(n.x, y - 0.1, n.z);
      d.lookAt(n.clone().multiplyScalar(1.6).setY(y + 14));
      d.rotateX(Math.PI / 2);
      mushroom.add(d);
    }

    // a second stem, its top brushed with a wet coat of liquid clay
    const stem2 = group(
      lathe(stemProf, cream),
      lathe(smooth([[0, layerY + 0.9], [3, layerY + 0.75], [5.0, layerY + 0.35], [5.25, layerY]], 30).concat([[0, layerY]]), liquid),
    );
    // the brush: wooden handle, metal ferrule, bristles with a drop of liquid clay
    const brush = group(
      at(lathe(smooth([[0, 0], [1.8, 0.4], [2.6, 20], [3.0, 42], [2.7, 54], [0, 55]], 50), K.mat.wood('#b98a55', '#8a5f33')), [0, 0, 0]),
      at(K.cyl(2.5, 11, mat.aluminium(), { r2: 2.2 }), [0, 60, 0]),
      at(lathe(smooth([[2.15, 0], [2.3, 4], [1.5, 9], [0, 11.5]], 30).concat([[0, 0]]), phys({ color: 0x8a6a45, roughness: 0.8 })), [0, 65.4, 0]),
      at(K.sphere(1.4, liquid), [0, 75.8, 0.2]),
    );
    brush.scale.setScalar(0.8);
    return group(at(mushroom, [0, 0, 0], [0, 32, 0]), at(stem2, [32, 0, -16]), at(brush, [-26, 2.4, 44], [0, 10, -84]));
  },
};
