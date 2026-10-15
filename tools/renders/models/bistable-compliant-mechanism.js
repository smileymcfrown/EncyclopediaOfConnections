// Bistable compliant mechanism: two identical one-piece printed snap switches lying flat, a
// frame with a centre block held by two pre-curved thin beams; one is snapped up, the other down.
const L = 70, h = 6, t = 0.9, gap = 9;   // beam span, arch height, beam thickness, beam spacing

// a thin beam clamped at both ends, following a cosine arch (sign +1 or -1), as a closed outline
function beam(y0, sign) {
  const top = [], bot = [];
  for (let i = 0; i <= 40; i++) {
    const x = -L / 2 - 1 + ((L + 2) * i) / 40;
    const xc = Math.max(-L / 2, Math.min(L / 2, x));
    const y = y0 + sign * (h / 2) * (1 - Math.cos((2 * Math.PI * (xc + L / 2)) / L));
    top.push([x, y + t / 2]); bot.push([x, y - t / 2]);
  }
  return [...bot, ...top.reverse()];
}
function snapSwitch(K, m, sign) {
  const { group, extrude, roundRect, THREE } = K;
  const frame = new THREE.Shape(roundRect(86, 46, 4).getPoints(8));
  const hole = new THREE.Path(roundRect(L, 32, 2).getPoints(8).reverse());
  frame.holes.push(hole);
  const d = 6;
  const parts = [extrude(frame, d, m)];
  for (const y0 of [-gap / 2, gap / 2]) parts.push(extrude(beam(y0, sign), d, m, { bevel: 0.15 }));
  // the centre block (shuttle) joining the two beams at their middle, pushed to snap it over
  const yc = sign * h;
  parts.push(K.at(extrude(roundRect(12, gap + 6, 1.5), d, m), [0, yc, 0]));
  return group(...parts);
}
export default {
  alt: 'Render of two identical one-piece 3D-printed bistable snap switches lying flat: in each, a frame holds a centre block on two thin pre-curved beams; in one the beams arch up and in the other they have snapped over to arch down.',
  view: { dir: [0.0, 2.4, 1.0], fill: 0.95 },
  build(K) {
    const { group, at, mat } = K;
    const m = mat.pla(0x1d5e9e, 120);
    const a = at(snapSwitch(K, m, 1), [0, 3, -27], [-90, 0, 0]);
    const b = at(snapSwitch(K, m, -1), [0, 3, 27], [-90, 0, 0]);
    return group(a, b);
  },
};
