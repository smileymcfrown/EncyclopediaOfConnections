// Speed-control valve: a small round air cylinder (20 mm bore) with an elbow speed controller
// screwed into each port. Each controller has a nickel-plated threaded stem and hex, a black body
// that turns on the stem, a push-in fitting with a blue release collet holding a 6 mm air tube,
// and a needle screw with a locknut and knob on top for setting the speed.
function controller(K, tubeDir) {
  const { group, at, cyl, tube, hex, threaded, wire, mat } = K;
  const nickel = mat.chrome(), body = mat.plastic(0x232528);
  const g = group(
    at(threaded(4.6, 1.0, 5, nickel), [0, -4.5, 0]),               // thread, mostly inside the port
    at(hex(12, 3.2, nickel), [0, 1.6, 0]),
    at(cyl(6.6, 13, body), [0, 3.2 + 6.5, 0]),
    at(cyl(6.9, 1.2, body), [0, 3.2 + 1.0, 0]),
    // needle screw: brass stem, locknut and knurled knob
    at(cyl(2.6, 6, mat.brass()), [0, 16.2 + 3, 0]),
    at(hex(8, 2.4, mat.brass()), [0, 16.2 + 1.6, 0]),
    at(cyl(4.6, 5.5, mat.plastic(0x3a3d42), { seg: 20 }), [0, 16.2 + 6.2, 0]),
  );
  // push-in arm, release collet and tube, pointing along tubeDir (+1: +z towards the camera)
  const arm = group(
    at(cyl(5.6, 11, body), [0, 0, 5.5], [90, 0, 0]),
    at(tube(5.1, 3.1, 2.4, mat.plastic(0x3c8fd6)), [0, 0, 11.6], [90, 0, 0]),
    wire([[0, 0, 9], [0, 0, 17], [0, -3, 25], [0, -12, 31], [0, -25, 35], [0, -31.5, 41], [0, -32.2, 50], [0, -32.2, 62]], 3, mat.plastic(0x2f78c8)),
  );
  arm.position.y = 10.2; arm.rotation.y = tubeDir > 0 ? 0 : Math.PI;
  g.add(arm);
  return g;
}
export default {
  alt: 'Render of speed-control valves: a small round air cylinder with an elbow-shaped speed controller screwed into each of its two ports, each with a blue air tube pushed into its side and a small adjusting screw with a locknut on top.',
  view: { dir: [0.75, 0.8, 1.3], fill: 0.95 },
  build(K) {
    const { group, at, cyl, hex, threaded, mat } = K;
    const alu = mat.aluminium(), R = 12.5;
    const parts = [
      at(cyl(11, 64, alu), [0, 0, 0], [0, 0, 90]),                   // barrel
      at(cyl(R, 14, mat.anodised(0x3a3f47)), [-39, 0, 0], [0, 0, 90]), // rear cap
      at(cyl(R, 14, mat.anodised(0x3a3f47)), [39, 0, 0], [0, 0, 90]),  // front cap
      at(threaded(7.5, 1.0, 10, alu), [46, 0, 0], [0, 0, -90]),       // mounting thread
      at(hex(19, 5, mat.zinc(), 7.5), [50, 0, 0], [0, 90, 0]),
      at(cyl(4, 34, mat.chrome()), [70, 0, 0], [0, 0, 90]),            // piston rod
      at(threaded(4, 0.8, 9, mat.chrome()), [87, 0, 0], [0, 0, -90]),
      at(cyl(R, 0.6, mat.anodised(0x3a3f47)), [-46, 0, 0], [0, 0, 90]),
    ];
    for (const x of [-39, 39]) parts.push(at(controller(K, 1), [x, R, 0]));
    return group(parts);
  },
};
