// Clamp-on accessory mount: a two-piece printed bar clamp squeezed round a 25.4 mm handlebar by two
// pinch screws, with a black rubber shim between clamp and bar and two GoPro-style prongs on top
// for the accessory.
const BAR_R = 12.7, SHIM = 1.0, WALL = 4.5, GAP = 0.8, EAR = 9, EAR_H = 5.5, W = 18;
function halfShell(K, m) {
  const { THREE, extrude } = K;
  const ri = BAR_R + SHIM, ro = ri + WALL, eo = ro + EAR;
  const s = new THREE.Shape();
  s.moveTo(ri, GAP); s.lineTo(eo - 1, GAP); s.quadraticCurveTo(eo, GAP, eo, GAP + 1);
  s.lineTo(eo, GAP + EAR_H - 1); s.quadraticCurveTo(eo, GAP + EAR_H, eo - 1, GAP + EAR_H);
  const a0 = Math.asin((GAP + EAR_H) / ro);
  s.lineTo(ro * Math.cos(a0), GAP + EAR_H);
  s.absarc(0, 0, ro, a0, Math.PI - a0, false);
  s.lineTo(-eo + 1, GAP + EAR_H); s.quadraticCurveTo(-eo, GAP + EAR_H, -eo, GAP + EAR_H - 1);
  s.lineTo(-eo, GAP + 1); s.quadraticCurveTo(-eo, GAP, -eo + 1, GAP);
  const b0 = Math.asin(GAP / ri);
  s.lineTo(-ri * Math.cos(b0), GAP);
  s.absarc(0, 0, ri, Math.PI - b0, b0, true);
  return extrude(s, W, m, { bevel: 0.6, curve: 48 });
}
function capScrew(K) {
  const { group, at, cyl, hex, mat } = K;
  const ox = mat.blackOxide();
  return group(
    at(cyl(3.5, 4, ox), [0, 2, 0]),
    at(hex(3, 1.2, mat.rubber(0x0a0a0a)), [0, 3.5, 0]),          // the hex socket, as a dark recess
    at(cyl(2, 2 * (GAP + EAR_H) + 2, ox), [0, -(GAP + EAR_H) - 1, 0]),
  );
}
export default {
  alt: 'Render of a clamp-on accessory mount: a two-piece printed clamp squeezed round a short length of handlebar by two screws, with a black rubber pad between clamp and bar and two flat prongs on top for fixing a light or camera.',
  view: { dir: [0.9, 0.75, 1.4], fill: 0.95 },
  build(K) {
    const { group, at, cyl, tube, hex, extrude, circle, mat } = K;
    const bar = at(tube(BAR_R, BAR_R - 1.6, 100, mat.aluminium()), [0, 0, 0], [90, 0, 0]);
    const shim = at(tube(BAR_R + SHIM, BAR_R + 0.02, W + 2.4, mat.rubber(0x161617)), [0, 0, 0], [90, 0, 0]);
    const print = mat.pla(0xe0702a, 40);
    const upper = halfShell(K, print);
    const lower = at(halfShell(K, print), [0, 0, 0], [0, 0, 180]);
    const xs = BAR_R + SHIM + WALL + EAR / 2;
    const screws = [-xs, xs].map((x) => at(capScrew(K), [x, GAP + EAR_H, 0]));
    const nuts = [-xs, xs].map((x) => at(hex(7, 3.2, mat.zinc(), 2), [x, -GAP - EAR_H - 1.6, 0]));
    // two prongs on top for a GoPro-style accessory, on a small base
    const top = BAR_R + SHIM + WALL;
    const base = at(K.box(16, 4, W, print, 1), [0, top + 0.5, 0]);
    const prongOutline = [[-7.5, 0], [7.5, 0], [7.5, 8], ...circle(7.5, 24, 0, 8).filter(([, y]) => y > 8).sort((a, b) => b[0] - a[0]), [-7.5, 8]];
    const prong = () => extrude(prongOutline, 3, print, { holes: [{ x: 0, y: 8.5, r: 2.6 }], bevel: 0.4 });
    const prongs = [-3.1, 3.1].map((x) => at(prong(), [x, top + 2.4, 0], [0, 90, 0]));
    return group(bar, shim, upper, lower, screws, nuts, base, prongs);
  },
};
