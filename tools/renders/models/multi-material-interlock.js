// Multi-material interlock: a printed test bar, rigid orange PLA at one end and soft black TPU at
// the other; across the seam the slicer's interlocking beams weave the two materials together, the
// beams turning 90 degrees on each layer, which shows as a checked band on the top and sides.
export default {
  alt: 'Render of a multi-material interlock: a 3D-printed bar that is rigid orange plastic at one end and soft black rubbery plastic at the other, with a checked band across the seam where small beams of each material reach into the other, crossing at right angles from layer to layer.',
  view: { dir: [0.7, 0.85, 1.0], fill: 1.05 },
  build(K) {
    const { group, at, box, mat } = K;
    const L = 64, H = 12, W = 20, z0 = 4.8, bw = 1.2, lh = 0.8;  // bar size, half-width of the interlock zone, beam width and layer height
    const plaMat = (n) => mat.pla(0xe4782d, n), tpuMat = (n) => mat.pla(0x26282b, n);
    const parts = [];
    // the plain ends
    parts.push(at(box(L / 2 - z0, H, W, plaMat(60), 0.15), [-(L / 2 + z0) / 2, H / 2, 0]));
    parts.push(at(box(L / 2 - z0, H, W, tpuMat(60), 0.15), [(L / 2 + z0) / 2, H / 2, 0]));
    // the woven zone: layer by layer
    const nL = Math.round(H / lh);
    for (let k = 0; k < nL; k++) {
      const y = (k + 0.5) * lh;
      if (k % 2 === 0) {
        // beams along the bar: strips across the width alternate PLA / TPU
        const n = Math.round(W / bw), w = W / n;
        for (let j = 0; j < n; j++) {
          const pla = (j + k / 2) % 2 === 0;           // shifted every other beam layer
          parts.push(at(box(2 * z0, lh, w, pla ? plaMat(4) : tpuMat(4), 0.04), [0, y, -W / 2 + (j + 0.5) * w]));
        }
      } else {
        // beams across the bar: strips along the bar alternate PLA / TPU
        const n = Math.round((2 * z0) / bw), w = (2 * z0) / n;
        for (let i = 0; i < n; i++) {
          const pla = i % 2 === 0;
          parts.push(at(box(w, lh, W, pla ? plaMat(4) : tpuMat(4), 0.04), [-z0 + (i + 0.5) * w, y, 0]));
        }
      }
    }
    return group(...parts);
  },
};
