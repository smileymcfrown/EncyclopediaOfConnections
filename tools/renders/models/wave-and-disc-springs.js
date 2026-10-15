// Wave and disc springs: a stack of six dark phosphated disc springs (Belleville washers, 25 mm)
// on an M12 bolt between flat washers, stacked alternately so the cones face each other, with a
// quarter cut away from the springs and washers to show the zigzag of the cones; beside it
// a bright multi-turn crest-to-crest wave spring standing up, and a single wave washer lying flat.

// a flat-wire ring or coil: mean radius R, radial width w, thickness t, height z(theta) of its centre
function flatWire(K, R, w, t, turns, z, m, closed) {
  const { THREE, mesh } = K;
  const n = Math.ceil(turns * 160), pos = [], idx = [];
  for (let i = 0; i <= n; i++) {
    const th = (i / n) * turns * 2 * Math.PI, c = Math.cos(th), s = Math.sin(th), y = z(th);
    for (const [r, dy] of [[R - w / 2, -t / 2], [R + w / 2, -t / 2], [R + w / 2, t / 2], [R - w / 2, t / 2]]) pos.push(r * c, y + dy, r * s);
    if (i) for (let k = 0; k < 4; k++) {
      const a = (i - 1) * 4 + k, b = (i - 1) * 4 + ((k + 1) % 4), a2 = a + 4, b2 = b + 4;
      idx.push(a, a2, b, b, a2, b2);
    }
  }
  if (!closed) {   // end caps
    const last = n * 4;
    idx.push(0, 2, 1, 0, 3, 2, last, last + 1, last + 2, last, last + 2, last + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const mm = m.clone(); mm.side = THREE.DoubleSide;
  return mesh(g, mm);
}
export default {
  alt: 'Render of wave and disc springs: a stack of six dark cone-shaped disc springs on a bolt between flat washers, a quarter cut away to show them facing alternately in a zigzag, with a shiny multi-turn wavy flat-wire wave spring standing beside it and a single wave washer lying flat in front.',
  kind: 'cross-section',
  view: { dir: [0.5, 0.75, 1.3], fill: 1.0, light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, lathe, hex, threaded, mat } = K;
    const parts = [];
    // M12 bolt, head down, with the disc-spring stack between two flat washers and a nut on top
    const ri = 6.15, ro = 12.5, t = 1.0, h0 = 1.1, l0 = t + h0;
    const disc = (flip) => lathe((flip ? [[ri, 0], [ro, h0], [ro, l0], [ri, t]] : [[ri, h0], [ro, 0], [ro, t], [ri, l0]]), mat.castIron(), { cut: 90, cutMat: mat.cut(0xb4b9bf) });
    const washerCut = { cut: 90, cutMat: mat.cut(0xd3d8de) };
    parts.push(at(group(hex(18, 7.5, mat.zinc())), [0, 3.75, 0]));
    parts.push(at(threaded(6, 1.75, 36, mat.zinc()), [0, 7.5, 0]));
    parts.push(at(lathe([[6.4, 0], [12, 0], [12, 2.5], [6.4, 2.5], [6.4, 0]], mat.zinc(), washerCut), [0, 7.5, 0]));
    let y = 10;
    for (let k = 0; k < 6; k++) { parts.push(at(disc(k % 2 === 1), [0, y, 0])); y += l0; }
    parts.push(at(lathe([[6.4, 0], [12, 0], [12, 2.5], [6.4, 2.5], [6.4, 0]], mat.zinc(), washerCut), [0, y, 0]));
    parts.push(at(group(hex(18, 10, mat.zinc(), 5.6)), [0, y + 2.5 + 5, 0]));
    // multi-turn crest-to-crest wave spring: 3.5 waves a turn, so crests meet the next turn's troughs
    const a = 1.15, tw = 0.45, pitch = 2 * a + tw, turns = 5;
    parts.push(at(flatWire(K, 12, 2.8, tw, turns, (th) => (pitch * th) / (2 * Math.PI) + a * Math.sin(3.5 * th), mat.stainless(), false), [36, a + tw / 2, -6]));
    // a single wave washer (3 waves) lying flat
    parts.push(at(flatWire(K, 10.5, 3.2, 0.5, 1, (th) => 0.9 * Math.sin(3 * th), mat.steel(), true), [14, 1.15, 26]));
    return group(parts);
  },
};
