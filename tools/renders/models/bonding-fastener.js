// Bonding fastener: a threaded stud welded to a thin, wide, perforated base plate, glued onto a
// carbon-fibre panel with no hole drilled; the glue has squeezed up through the plate's holes like
// little rivet heads. A second fastener lies beside it, tipped up to show its plate full of holes.
const HOLES = Array.from({ length: 8 }, (_, i) => [8.6 * Math.cos((i * Math.PI) / 4 + Math.PI / 8), 8.6 * Math.sin((i * Math.PI) / 4 + Math.PI / 8)]);
const R = 12.5, PT = 0.8;
// the fastener: plate in the XZ plane from y = 0 to PT, stud up the Y axis
function fastener(K) {
  const { group, at, extrude, circle, lathe, threaded, mat } = K;
  const m = mat.stainless();
  const plate = at(extrude(circle(R, 96), PT, m, { bevel: 0.15, holes: HOLES.map(([x, y]) => ({ x, y, r: 1.5 })) }), [0, PT / 2, 0], [90, 0, 0]);
  // a small welded boss where the stud joins the plate, then an M6 thread
  const boss = lathe([[0, PT], [4.4, PT], [3.9, PT + 0.9], [3.2, PT + 1.6], [0, PT + 1.6]], m);
  const stud = at(threaded(3, 1, 20, m), [0, PT + 1.4, 0]);
  return group(plate, boss, stud);
}
function carbon(K) {
  const { THREE } = K;
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#202224'; g.fillRect(0, 0, 256, 256);
  const n = 16, s = 256 / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const along = ((i + j) % 4) < 2;                       // a 2x2 twill pattern
    const grd = along ? g.createLinearGradient(i * s, 0, i * s + s, 0) : g.createLinearGradient(0, j * s, 0, j * s + s);
    grd.addColorStop(0, '#1b1c1e'); grd.addColorStop(0.5, along ? '#3a3d41' : '#2e3034'); grd.addColorStop(1, '#1b1c1e');
    g.fillStyle = grd; g.fillRect(i * s + 0.5, j * s + 0.5, s - 1, s - 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 4); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshPhysicalMaterial({ map: t, metalness: 0.1, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.15 });
}
export default {
  alt: 'Render of a bonding fastener: a threaded steel stud welded to a thin, wide base plate full of holes, glued flat onto a carbon-fibre panel with no hole drilled, the glue squeezed up through the holes like little rivet heads; a second fastener lies beside it, tipped up to show its perforated plate.',
  view: { dir: [0.75, 0.85, 1.3], fill: 0.98, light: [-0.4, 1, 0.6] },
  build(K) {
    const { group, at, box, lathe, mat } = K;
    const TP = 3, glueM = mat.plastic(0xe6d9a6);
    const parts = [at(box(64, TP, 46, carbon(K), 0.6), [6, TP / 2, 0])];
    // the glue line under the plate, with a small fillet round its edge, and blobs through the holes
    parts.push(at(lathe([[0, 0], [R + 1.4, 0], [R + 0.6, 0.35], [R + 0.1, 0.55], [R, 0.6], [0, 0.6]], glueM), [0, TP, 0]));
    for (const [x, z] of HOLES) parts.push(at(lathe([[0, 0], [1.5, 0], [1.5, PT], [1.45, PT + 0.25], [1.1, PT + 0.55], [0, PT + 0.7]], glueM), [x, TP + 0.6, z]));
    parts.push(at(fastener(K), [0, TP + 0.6, 0], [0, 10, 0]));
    // the loose one, resting on its plate rim and the end of its stud, plate face towards the camera
    const th = Math.atan((R - 3) / 21.8), cy = R * Math.cos(th);
    parts.push(at(group(at(fastener(K), [0, 0, 0], [0, 0, 0])), [-36, cy, 30], [0, -35, 90 + (th * 180) / Math.PI]));
    return group(parts);
  },
};
