// Compliant gripper: a one-piece 3D-printed plier lying flat. Two long handles join at a thin
// U-shaped bending section (the flexure hinge, instead of a pin), and short jaws close to the hinge
// pinch a wooden bead.
const RO = 7, RI = 5.4;          // outer and inner radius of the thin bending loop (1.6 mm wall)
const L = 105, W = 7.5;           // handle length and width
const SLOPE = Math.tan((7.5 * Math.PI) / 180);
const yi = (x) => RI + x * SLOPE; // inner edge of the upper arm
const PAD = 5.2;                  // jaw faces, half the gap between them

function outline() {
  const upperInner = [[0, RI], [14, yi(14)], [16, PAD], [29, PAD], [31, yi(31)], [L, yi(L)]];
  const tip = [];
  for (let i = 0; i <= 8; i++) {                  // round end of the handle
    const a = -Math.PI / 2 + (i / 8) * Math.PI, c = [L, yi(L) + W / 2];
    tip.push([c[0] + (W / 2) * Math.cos(a), c[1] + (W / 2) * Math.sin(a)]);
  }
  const upperOuter = [[9, yi(9) + W], [2.5, RO]];
  const arc = (r, a0, a1, n = 16) => Array.from({ length: n + 1 }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / n; return [r * Math.cos(a), r * Math.sin(a)];
  });
  const upper = [...upperInner, ...tip.slice(1), ...upperOuter];
  const lower = upper.slice().reverse().map(([x, y]) => [x, -y]);
  // upper inner -> tip -> upper outer -> outer loop -> lower outer -> tip -> lower inner -> inner loop
  return [...upper, ...arc(RO, Math.PI / 2, (3 * Math.PI) / 2).slice(1, -1), ...lower,
    ...arc(RI, (3 * Math.PI) / 2, Math.PI / 2).slice(1, -1)];
}

export default {
  alt: 'Render of a one-piece 3D-printed compliant gripper: two long plastic handles joined at one end by a thin U-shaped loop that bends instead of a pin, with short jaws near the loop pinching a wooden bead.',
  view: { dir: [-0.25, 1.5, 0.75], fill: 1.0 },
  build(K) {
    const { group, at, extrude, sphere, mat } = K;
    const part = at(extrude(outline(), 8, mat.pla(0x15607a, 40), { bevel: 0.3, curve: 16 }), [0, 4, 0], [-90, 0, 0]);
    const bead = at(sphere(PAD, mat.wood('#a8672e', '#7a4520')), [23, PAD, 0]);
    return group(part, bead);
  },
};
