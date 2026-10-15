// Annular snap fit: a printed tube with a raised ring (bead) round its end and a printed cap with
// a matching groove snapped over it, cut open to show the bead sitting in the groove; a second cap
// lies beside it with its open end towards the camera.
// tube: 20 mm across, 2 mm wall, 24 tall; bead 1 mm proud, steep back face, gentle lead-in face
const tubeProfile = [[8, 0], [10, 0], [10, 16.6], [11, 17.1], [11, 18.0], [10, 19.6], [10, 23.6], [9.6, 24], [8, 24], [8, 0]];
// cap, rim at y = 0: outer radius 12.4, 10 tall, 2 mm roof; groove matches the bead
const capProfile = [[10.8, 0], [12.4, 0], [12.4, 9.4], [11.8, 10], [0, 10], [0, 8], [10, 8], [10, 4.4], [11, 2.8], [11, 1.9], [10, 1.4], [10, 0.7], [10.8, 0]];
export default {
  alt: 'Render of an annular snap fit: a 3D-printed cap snapped onto the end of a printed tube, cut open to show the raised ring round the tube sitting in a matching groove inside the cap; a second cap lies beside it.',
  kind: 'cross-section',
  view: { dir: [0.3, 0.5, 1.3], fill: 1.0 },
  build(K) {
    const { group, at, lathe, mat } = K;
    const tube = lathe(tubeProfile, mat.pla(0x3a7bc8, 130), { cut: 90, cutMat: mat.pla(0x24548f, 130) });
    const cap = at(lathe(capProfile, mat.pla(0xe8812f, 60), { cut: 90, cutMat: mat.pla(0xb85a17, 60) }), [0, 16, 0]);
    const loose = at(lathe(capProfile, mat.pla(0xe8812f, 60)), [29, 12.4, -8], [-90, -25, 0]);
    return group(tube, cap, loose);
  },
};
