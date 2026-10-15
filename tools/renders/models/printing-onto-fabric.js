// Printing onto fabric: a "dragon scale" sheet of hexagonal PLA tiles printed through black tulle.
// The tiles grip the net; the bare net between them bends like hinges, so the end of the sheet
// curls up off the table.
const L = 120, WID = 64, S0 = 8, RB = 20, CURL = 46; // sheet length and width; where the curl starts, its radius and length
const NET = 0.65;                             // height of the net inside each tile (mm above its base)

// a point on the sheet's centre line at distance s along it, and the angle of the sheet there
function path(s) {
  if (s <= S0) return { x: s, y: 0, a: 0 };
  const a = (s - S0) / RB;
  return { x: S0 + RB * Math.sin(a), y: RB * (1 - Math.cos(a)), a };
}
export default {
  alt: 'Render of 3D printing onto fabric: a sheet of teal hexagonal plastic scales printed through black see-through tulle, with the end of the sheet curling up because the bare net between the scales bends like a hinge.',
  view: { dir: [-0.45, 0.8, 1.2], fill: 1.12, light: [-0.4, 1, 0.8] },
  build(K) {
    const { group, at, extrude, mesh, mat, THREE } = K;
    const parts = [];
    // tulle: a fine black diamond net (alpha map), bent along the path
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, 64, 64);
    g.strokeStyle = '#fff'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(0, 0); g.lineTo(64, 64); g.moveTo(64, 0); g.lineTo(0, 64);
    g.moveTo(-32, 32); g.lineTo(32, 96); g.moveTo(32, -32); g.lineTo(96, 32); g.moveTo(96, 32); g.lineTo(32, 96); g.moveTo(32, -32); g.lineTo(-32, 32); g.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(L / 1.6, WID / 2.2);
    const tulle = new THREE.MeshPhysicalMaterial({ color: 0x18181b, roughness: 0.8, alphaMap: tex, alphaTest: 0.45, side: THREE.DoubleSide });
    const R = 6.2, gap = 2.2, ds = 1.5 * R + gap * 0.87, dz = Math.sqrt(3) * R + gap;
    const cols = [];
    for (let s = S0 + CURL - L + R + 1; s < S0 + CURL - R; s += ds) cols.push(s);
    const s0 = cols[0] - R - 1.5, s1 = cols[cols.length - 1] + R + 1.5;
    const sheet = new THREE.PlaneGeometry(s1 - s0, WID, 240, 1);
    const p = sheet.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const s = p.getX(i) + (s0 + s1) / 2, z = p.getY(i), q = path(s);
      p.setXYZ(i, q.x, q.y + NET, z);
    }
    sheet.computeVertexNormals();
    const net = mesh(sheet, tulle); net.castShadow = false;
    parts.push(net);
    // hexagonal scales: corner radius 6.2, 2 mm gaps, alternate columns offset by half a row
    const hex = Array.from({ length: 6 }, (_, k) => [R * Math.cos((k * Math.PI) / 3), R * Math.sin((k * Math.PI) / 3)]);
    const teal = mat.pla(0x1f8f87, 18);
    teal.metalness = 0.25; teal.roughness = 0.45;
    cols.forEach((s, col) => {
      for (let z = -WID / 2 + R + (col % 2 ? dz / 2 : 0); z < WID / 2 - R + 1; z += dz) {
        const q = path(s);
        const tile = at(extrude(hex, 2.8, teal, { bevel: 0.7 }), [0, 1.4, 0], [-90, 0, 0]);
        parts.push(at(group(tile), [q.x, q.y, z], [0, 0, (q.a * 180) / Math.PI]));
      }
    });
    return group(parts);
  },
};
