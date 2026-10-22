// Wire and foil armature: a small four-legged clay figure half made. A skeleton of twisted
// aluminium armature wire runs through the legs, back, neck and tail, its legs pushed into holes in
// a wooden base; crumpled foil, held with masking tape, bulks out the body and head; the back half
// already has its thin, even layer of clay pressed on (its front edge left open), the front half
// still shows the foil and bare wire.
function hash(x, y, z) {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return s - Math.floor(s);
}
export default {
  alt: 'Render of a wire and foil armature: a small four-legged figure being sculpted on a wooden base, with a skeleton of twisted aluminium wire running down its legs into holes in the base and along its neck and tail, crumpled foil taped round the wire to bulk out the body and head, and the back half already covered in a thin layer of clay.',
  view: { dir: [0.95, 0.42, 1.25], fill: 1.15, light: [0.5, 1, 0.35] },
  build(K) {
    const { THREE, group, at, box, wire, mesh, mat } = K;
    const alu = mat.aluminium(); alu.roughness = 0.5;
    // a pair of wires twisted round each other along a path
    const twisted = (pts, r = 0.75, pitch = 7) => {
      const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, 'centripetal');
      const L = curve.getLength(), n = Math.ceil(L / 0.6), fr = curve.computeFrenetFrames(n, false);
      return group([0, Math.PI].map((ph) => {
        const out = [];
        for (let i = 0; i <= n; i++) {
          const t = i / n, p = curve.getPointAt(t), a = (t * L * Math.PI * 2) / pitch + ph;
          out.push(p.clone().addScaledVector(fr.normals[i], r * Math.cos(a)).addScaledVector(fr.binormals[i], r * Math.sin(a)));
        }
        return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(out), n * 2, r, 8), alu);
      }));
    };
    // crumpled foil: a lumpy, faceted ellipsoid
    const foilM = new THREE.MeshPhysicalMaterial({ color: 0xd9dce0, metalness: 1, roughness: 0.28, flatShading: true });
    const foil = (rx, ry, rz, seed = 0) => {
      const g = new THREE.SphereGeometry(1, Math.round(rx * 2.4), Math.round(Math.max(ry, rz) * 2.4)), p = g.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        const X = v.x * rx, Y = v.y * ry, Z = v.z * rz;
        const k = 1 + 0.05 * (hash(Math.round(X * 4) + seed, Math.round(Y * 4), Math.round(Z * 4)) - 0.5) * 2
                    + 0.04 * Math.sin(X * 0.7 + seed) * Math.sin(Y * 0.9) * Math.sin(Z * 0.8 + 1);
        p.setXYZ(i, X * k, Y * k, Z * k);
      }
      g.computeVertexNormals();
      return mesh(g, foilM);
    };
    const tapeM = new THREE.MeshPhysicalMaterial({ color: 0xe6d6ac, roughness: 0.85, side: THREE.DoubleSide });
    // a band of tape round the foil body at x, following its section (radii ry, rz)
    const tape = (x, ry, rz, w = 7) => { const t = mesh(new THREE.CylinderGeometry(1, 1, w, 48, 1, true), tapeM); t.scale.set(ry, 1, rz); return at(group(t), [x, 0, 0], [0, 0, 90]); };
    const clay = mat.nylon(0xa8714d); clay.roughness = 0.7;
    const clayIn = mat.nylon(0x8a5a3c); clayIn.side = THREE.BackSide;

    const BH = 16, BX = 0, Y = 58;                        // base height; body centre height
    const parts = [at(box(160, BH, 56, mat.wood('#9c6f45', '#6a4526'), 1.2), [BX, BH / 2, 0])];
    // the skeleton: two leg loops and a spine from tail to snout
    const legs = (x, splay = 0) => twisted([[x + splay, BH - 10, -11], [x + splay, BH, -11], [x + splay * 0.4, 32, -10.5], [x, Y - 4, -9], [x, Y + 1, -3], [x, Y + 1, 3], [x, Y - 4, 9], [x + splay * 0.4, 32, 10.5], [x + splay, BH, 11], [x + splay, BH - 10, 11]]);
    parts.push(legs(34, 2), legs(-32, -2));
    parts.push(twisted([[-82, 92, 0], [-74, 80, 0], [-60, 66, 0], [-44, 60, 0], [-20, 60, 0], [10, 61, 0], [36, 63, 0], [50, 72, 0], [58, 84, 0], [64, 92, 0], [74, 94, 0]]));
    // the foil: body and head, taped on
    parts.push(at(foil(44, 15, 14, 1), [0, Y, 0]));
    parts.push(at(foil(12, 8.5, 8, 5), [66, 92, 0], [0, 0, -12]));
    parts.push(at(group(tape(14, 14.9, 13.9)), [0, Y, 0]));
    parts.push(at(group(tape(30, 11.0, 10.3, 6)), [0, Y, 0]));
    parts.push(at(group(tape(-2, 9.0, 8.5, 5)), [66, 92, 0], [0, 0, -12]));
    // the clay on the back half: a shell over the foil, open at the front, the rear legs and tail
    const shell = (m) => { const g = new THREE.SphereGeometry(1, 64, 40, 0, Math.PI * 2, 0, Math.PI * 0.5); return at(group(at(mesh(g, m), [0, 0, 0], [0, 0, 90])), [0, 0, 0]); };
    const body = group(shell(clay), shell(clayIn)); body.scale.set(47, 18.5, 17.5);
    parts.push(at(group(body), [0, Y, 0]));
    // its open edge, a thin rim so the clay layer's thickness shows
    const rim = mesh(new THREE.RingGeometry(0.88, 1.0, 64), clayIn.clone()); rim.material.side = THREE.DoubleSide;
    const rimG = group(rim); rimG.scale.set(17.5, 18.5, 1); parts.push(at(group(at(rimG, [0, 0, 0], [0, 90, 0])), [0.05, Y, 0]));
    for (const s of [-1, 1]) {
      parts.push(at(K.cyl(4.4, Y - 8 - BH, clay, { r2: 7 }), [-33, BH + (Y - 8 - BH) / 2, s * 10.6], [0, 0, 0]));
    }
    parts.push(wire([[-46, 61, 0], [-60, 66, 0], [-74, 80, 0], [-82, 92, 0]], 3.4, clay));
    parts.push(at(K.sphere(3.4, clay), [-82, 92, 0]));
    return group(parts);
  },
};
