// Housing (dado) and rebate (rabbet) joints: a pine board lying flat with two housings cut across
// it and a rebate along its end; one upright board sits in a housing, one in the rebate, and the
// other housing is left empty to show the channel.
const T = 18;             // board thickness
const D = 150;            // board width (front to back)

// scale and (optionally) swap a mesh's texture coordinates, so the wood grain is life-size and
// runs along the board
function grain(o, s, swap = false) {
  o.traverse((m) => {
    if (!m.isMesh) return;
    const uv = m.geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) {
      const u = uv.getX(i) * s, v = uv.getY(i) * s;
      if (swap) uv.setXY(i, v, u); else uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
  });
  return o;
}
export default {
  alt: 'Render of housing and rebate joints in pine: a board lying flat has two shallow channels (housings or dados) cut across it and a step (rebate or rabbet) cut along its end; an upright board sits in one housing and another in the rebate, and the second housing is empty.',
  view: { dir: [-0.4, 0.75, 1.0], fill: 0.95, light: [-1, 0.75, 0.35], exposure: 0.85 },
  build(K) {
    const { group, at, extrude, box, mat } = K;
    const pine = mat.wood('#c7975c', '#94632f');
    const pine2 = mat.wood('#c08f55', '#8d5d2c');
    const L = 240;
    const hx1 = -70, hx2 = -10, dep = 7, reb = 9, rw = T;
    const profile = [[-L / 2, 0], [L / 2, 0], [L / 2, reb], [L / 2 - rw, reb], [L / 2 - rw, T],
      [hx2 + T, T], [hx2 + T, T - dep], [hx2, T - dep], [hx2, T],
      [hx1 + T, T], [hx1 + T, T - dep], [hx1, T - dep], [hx1, T], [-L / 2, T]];
    const base = grain(extrude(profile, D, pine, { bevel: 0.3, curve: 4 }), 1 / 260, true);
    const H = 90;
    const up1 = grain(at(box(T - 0.2, H, D, pine2, 0.6), [hx2 + T / 2, T - dep + H / 2, 0]), 1);
    const up2 = grain(at(box(rw - 0.2, H, D, pine2, 0.6), [L / 2 - rw / 2, reb + H / 2, 0]), 1);
    return group(base, up1, up2);
  },
};
