// Push-fit rod and spar fittings: the middle of a kite frame lying on the bench. A moulded cross
// connector holds the carbon spine in its lower socket and the two spar halves in its upper one
// (the right half pulled out a little, ready to push home); lower down, the spine is joined by an
// aluminium ferrule glued on one piece, with the other piece just pulled out of it. The ends carry
// a slotted nock (for the bridle or bungee) and plain end caps.
export default {
  alt: 'Render of push-fit kite fittings: carbon rods pushed into a red moulded cross connector, one spar half pulled out a little from its socket; lower down the spine is joined by an aluminium ferrule glued onto one rod with the other rod partly pulled out, and the rod ends carry a slotted nock and end caps.',
  view: { dir: [0.55, 1.0, 1.25], fill: 1.12, light: [-0.5, 1, 0.4] },
  build(K) {
    const { THREE, group, at, box, cyl, lathe, extrude, mat } = K;
    const rod = new THREE.MeshPhysicalMaterial({ color: 0x1d1e21, metalness: 0.15, roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.2 });
    const red = mat.nylon(0x9e1f17), alu = mat.aluminium();
    const RR = 3, RO = 4.6, RI = 3.05, Y0 = RO, Y1 = RO + 8.6;
    const parts = [];
    // a rod along Z (spine) or X (spar), centred on [x, y, z], length L
    const rodZ = (z0, z1, y = Y0) => at(cyl(RR, z1 - z0, rod, { seg: 32 }), [0, y, (z0 + z1) / 2], [90, 0, 0]);
    const rodX = (x0, x1, y) => at(cyl(RR, x1 - x0, rod, { seg: 32 }), [(x0 + x1) / 2, y, 0], [0, 0, 90]);
    // the cross connector: a lower socket along Z (spine), an upper socket along X (spar), a web
    const sock = (L) => lathe([[RI, -L / 2], [RO - 0.4, -L / 2], [RO, -L / 2 + 0.4], [RO, L / 2 - 0.4], [RO - 0.4, L / 2], [RI, L / 2], [RI, -L / 2]], red);
    parts.push(at(sock(20), [0, Y0, 0], [90, 0, 0]));
    parts.push(at(sock(30), [0, Y1, 0], [0, 0, 90]));
    parts.push(at(box(7, Y1 - Y0, 9, red, 1.2), [0, (Y0 + Y1) / 2, 0]));
    // spine: upper piece from the cross connector down to the ferrule, lower piece below it
    const ZT = 28, ZF = -44, FL = 26, PULL = 6, ZB = -84;
    parts.push(rodZ(ZF, ZT));
    parts.push(at(lathe([[RI, -FL / 2], [3.75, -FL / 2], [3.75, FL / 2], [RI, FL / 2], [RI, -FL / 2]], alu), [0, Y0, ZF], [90, 0, 0]));   // the ferrule, half on the upper piece
    parts.push(rodZ(ZB, ZF - FL / 2 - PULL));                            // the lower piece, pulled out a little
    // end cap on the top of the spine
    const cap = (L) => lathe([[0, 0], [3.9, 0], [4.2, 0.5], [4.2, L - 1], [3.6, L], [0, L]], red);
    parts.push(at(cap(9), [0, Y0, ZT - 6], [90, 0, 0]));
    // spar halves: left pushed fully home, right pulled out a little
    const XS = 46;
    parts.push(rodX(-XS, -1, Y1));
    parts.push(rodX(21, XS + 8, Y1));
    // a slotted nock on the right spar end, an end cap on the left
    const nock = group(at(lathe([[RI, 0], [4.2, 0], [4.2, 9], [0, 9], [0, 0]], red), [0, 0, 0]));
    for (const s of [-1, 1]) {
      const half = [];
      for (let i = 0; i <= 32; i++) { const a = -Math.PI / 2 + (Math.PI * i) / 32; half.push([Math.max(4.2 * Math.cos(a), 1.5), 4.2 * Math.sin(a)]); }
      const prong = extrude(half, 8, red, { bevel: 0.35 });
      prong.rotation.set(Math.PI / 2, 0, 0);
      const p = group(prong); p.rotation.y = (s > 0 ? 0 : Math.PI) + Math.PI / 2; p.position.y = 9 + 4;
      nock.add(p);
    }
    parts.push(at(nock, [XS + 2, Y1, 0], [0, 0, -90]));
    parts.push(at(cap(9), [-XS + 6, Y1, 0], [0, 0, 90]));
    // the lower end of the spine: another cap
    parts.push(at(cap(9), [0, Y0, ZB + 6], [-90, 0, 0]));
    return group(parts);
  },
};
