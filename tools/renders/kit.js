// The modelling kit for the drawn renders (R35): materials and simple shapes, in millimetres.
// A model (models/<page>.js) builds its parts from these; stage.html lights and photographs it.
// Y is up. Parts sit on the ground (y = 0) unless the model says otherwise.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export { THREE };
const deg = (d) => (d * Math.PI) / 180;
export { deg };

// ---- materials -------------------------------------------------------------------------------
function canvasTexture(w, h, draw, repeat = [1, 1]) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(...repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const phys = (o) => new THREE.MeshPhysicalMaterial(o);
export const mat = {
  steel: () => phys({ color: 0xb4b8be, metalness: 1, roughness: 0.3 }),
  zinc: () => phys({ color: 0xc6ced6, metalness: 1, roughness: 0.36 }),        // zinc-plated steel
  stainless: () => phys({ color: 0xc8cacc, metalness: 1, roughness: 0.22 }),
  chrome: () => phys({ color: 0xeeeeee, metalness: 1, roughness: 0.07 }),
  aluminium: () => phys({ color: 0xd3d6da, metalness: 1, roughness: 0.42 }),
  anodised: (c = 0x2b4c7e) => phys({ color: c, metalness: 0.85, roughness: 0.38 }),
  brass: () => phys({ color: 0xd6ab4c, metalness: 1, roughness: 0.28 }),
  copper: () => phys({ color: 0xc87a4f, metalness: 1, roughness: 0.3 }),
  blackOxide: () => phys({ color: 0x2a2a2c, metalness: 0.8, roughness: 0.42 }),
  castIron: () => phys({ color: 0x55585c, metalness: 0.7, roughness: 0.75 }),
  paint: (c) => phys({ color: c, metalness: 0.2, roughness: 0.45, clearcoat: 0.4, clearcoatRoughness: 0.3 }),
  rubber: (c = 0x1d1d1f) => phys({ color: c, metalness: 0, roughness: 0.88 }),
  silicone: (c = 0xd9dde0) => phys({ color: c, metalness: 0, roughness: 0.55, transmission: 0.25, thickness: 2 }),
  plastic: (c) => phys({ color: c, metalness: 0, roughness: 0.4, clearcoat: 0.25, clearcoatRoughness: 0.4 }),
  nylon: (c = 0xf2eee4) => phys({ color: c, metalness: 0, roughness: 0.6 }),
  // 3D-printed plastic: matte, with fine layer lines (a bump map; set `layers` to the layer height
  // on screen, in texture repeats over the part's UVs)
  pla: (c, layers = 60) => {
    const bump = canvasTexture(8, 64, (g, w, h) => {
      for (let y = 0; y < h; y++) { const v = 150 + 80 * Math.sin((y / h) * Math.PI * 2 * 4); g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(0, y, w, 1); }
    }, [1, layers / 4]);
    bump.colorSpace = THREE.NoColorSpace;
    return phys({ color: c, metalness: 0, roughness: 0.62, bumpMap: bump, bumpScale: 0.6 });
  },
  wood: (c = '#c9a274', grain = '#9c7445') => phys({
    map: canvasTexture(512, 512, (g, w, h) => {
      g.fillStyle = c; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 70; i++) {
        g.strokeStyle = grain; g.globalAlpha = 0.15 + 0.35 * rnd(); g.lineWidth = 1 + 3 * rnd();
        const x0 = rnd() * w; g.beginPath();
        for (let y = 0; y <= h; y += 16) g.lineTo(x0 + 18 * Math.sin(y / 70 + i) + 6 * rnd(), y);
        g.stroke();
      }
    }), roughness: 0.7, metalness: 0,
  }),
  fabric: (c = '#2f4f7a') => phys({
    map: canvasTexture(64, 64, (g, w, h) => {
      g.fillStyle = c; g.fillRect(0, 0, w, h);
      g.globalAlpha = 0.25; g.fillStyle = '#000';
      for (let i = 0; i < w; i += 4) { g.fillRect(i, 0, 2, h); g.fillRect(0, i, w, 1); }
    }, [8, 8]), roughness: 0.95, metalness: 0, sheen: 0.6, sheenColor: new THREE.Color(c),
  }),
  glass: () => phys({ color: 0xffffff, metalness: 0, roughness: 0.05, transmission: 0.95, thickness: 3, ior: 1.5 }),
  magnet: () => phys({ color: 0x9a9da3, metalness: 1, roughness: 0.25 }),      // nickel-plated neodymium
  cut: (c = 0xd94a3d) => phys({ color: c, metalness: 0, roughness: 0.65, side: THREE.DoubleSide }), // cut faces
};

// ---- shapes ----------------------------------------------------------------------------------
const mesh = (geo, m) => { const o = new THREE.Mesh(geo, m); o.castShadow = o.receiveShadow = true; return o; };
export { mesh };

/** Place an object: position [x, y, z] (mm) and rotation [x, y, z] (degrees). Returns it. */
export function at(o, pos = [0, 0, 0], rot = [0, 0, 0]) {
  o.position.set(...pos);
  o.rotation.set(deg(rot[0]), deg(rot[1]), deg(rot[2]));
  return o;
}
export function group(...children) { const g = new THREE.Group(); children.flat().forEach((c) => c && g.add(c)); return g; }

/** A box with rounded edges, centred on the origin. */
export function box(w, h, d, m, r = Math.min(w, h, d) * 0.08) {
  return mesh(new RoundedBoxGeometry(w, h, d, 4, Math.max(0.01, Math.min(r, Math.min(w, h, d) / 2 - 0.01))), m);
}
/** A cylinder along Y, centred on the origin (r2: top radius, for a cone). */
export function cyl(r, h, m, { r2 = r, seg = 64, open = false } = {}) {
  return mesh(new THREE.CylinderGeometry(r2, r, h, seg, 1, open), m);
}
export function sphere(r, m, seg = 48) { return mesh(new THREE.SphereGeometry(r, seg, seg / 2), m); }
export function torus(R, r, m, arc = 360) { return mesh(new THREE.TorusGeometry(R, r, 24, 96, deg(arc)), m); }

/**
 * A turned part: profile points [[radius, y], ...] spun round the Y axis. For a cut-away view give
 * `cut` (degrees to remove, e.g. 90) and the profile as a closed outline (include the axis, r = 0,
 * for solid parts): the cut faces are filled with `cutMat` (red, as in cut-away drawings).
 */
export function lathe(points, m, { seg = 96, cut = 0, cutMat = mat.cut(), start = 0 } = {}) {
  const pts = points.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0001), y));
  const len = deg(360 - cut), st = deg(start + cut / 2);
  const g = group(mesh(new THREE.LatheGeometry(pts, seg, st, len), m));
  if (cut) {
    cutMat.side = THREE.DoubleSide;                           // the far cut face is seen from behind
    const ring = points.slice();
    const [a, b] = [ring[0], ring[ring.length - 1]];
    if (a[0] === b[0] && a[1] === b[1]) ring.pop();          // a repeated closing point breaks the fill
    const shape = new THREE.Shape(ring.map(([r, y]) => new THREE.Vector2(r, y)));
    for (const phi of [st, st + len]) {
      const cap = mesh(new THREE.ShapeGeometry(shape), cutMat);
      cap.rotation.y = phi - Math.PI / 2;
      g.add(cap);
    }
  }
  return g;
}
/** A tube (ring) along Y: outer radius, inner radius, height, centred. */
export function tube(ro, ri, h, m, opts = {}) {
  return at(lathe([[ri, -h / 2], [ro, -h / 2], [ro, h / 2], [ri, h / 2], [ri, -h / 2]], m, opts), [0, 0, 0]);
}

/** An extruded flat part: outline [[x, y], ...] (or a THREE.Shape, with holes), thickness along Z. */
export function extrude(outline, depth, m, { bevel = Math.min(0.6, depth / 6), holes = [], curve = 12 } = {}) {
  let shape = outline;
  if (Array.isArray(outline)) {
    shape = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(x, y)));
    for (const h of holes) {
      const p = new THREE.Path();
      if (h.r) p.absarc(h.x, h.y, h.r, 0, Math.PI * 2, true); else p.setFromPoints(h.map(([x, y]) => new THREE.Vector2(x, y)));
      shape.holes.push(p);
    }
  }
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(depth - 2 * bevel, 0.01), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 3, curveSegments: curve,
  });
  geo.translate(0, 0, -Math.max(depth - 2 * bevel, 0.01) / 2);
  return mesh(geo, m);
}
/** Points round a circle (for outlines): n points, radius r, centre [cx, cy]. */
export function circle(r, n = 48, cx = 0, cy = 0, a0 = 0) {
  return Array.from({ length: n }, (_, i) => [cx + r * Math.cos(a0 + (i / n) * Math.PI * 2), cy + r * Math.sin(a0 + (i / n) * Math.PI * 2)]);
}
/** A rounded-rectangle outline, w x h, corner radius r, centred. */
export function roundRect(w, h, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/** A spur gear (extruded along Z, centred): teeth, module (tooth size, mm), face width, bore radius. */
export function gear(teeth, module, width, m, { bore = 0, hub = 0 } = {}) {
  const rp = (teeth * module) / 2, ra = rp + module, rf = rp - 1.25 * module;
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2, t = (Math.PI * 2) / teeth;
    for (const [f, r] of [[0, rf], [0.12, rf], [0.2, rp * 0.995], [0.3, ra], [0.45, ra], [0.55, rp * 0.995], [0.63, rf], [1, rf]]) {
      if (f === 1) continue;
      pts.push([r * Math.cos(a + f * t), r * Math.sin(a + f * t)]);
    }
  }
  const holes = bore ? [{ x: 0, y: 0, r: bore }] : [];
  const g = group(extrude(pts, width, m, { bevel: Math.min(0.3 * module, width / 6), holes }));
  if (hub) g.add(at(tube(hub, bore || 0.01, width * 1.8, m), [0, 0, 0], [90, 0, 0]));
  return g;
}

class Helix extends THREE.Curve {
  constructor(R, pitch, turns) { super(); Object.assign(this, { R, pitch, turns }); }
  getPoint(t, v = new THREE.Vector3()) {
    const a = t * this.turns * Math.PI * 2;
    return v.set(this.R * Math.cos(a), t * this.turns * this.pitch, this.R * Math.sin(a));
  }
}
/** A coil spring along Y from y = 0: coil radius R, wire radius w, turns, length. */
export function spring(R, w, turns, length, m) {
  return mesh(new THREE.TubeGeometry(new Helix(R, length / turns, turns), Math.ceil(turns * 48), w, 12), m);
}
/** A threaded rod along Y from y = 0: radius, pitch, length (core plus a helical ridge). */
export function threaded(r, pitch, length, m) {
  const depth = pitch * 0.32, turns = length / pitch;
  return group(at(cyl(r - depth, length, m), [0, length / 2, 0]),
    mesh(new THREE.TubeGeometry(new Helix(r - depth, pitch, turns - 0.3), Math.ceil(turns * 32), depth * 1.05, 6), m));
}
/** A hexagon nut or head, axis Y, centred: across-flats size, height, hole radius. */
export function hex(af, h, m, hole = 0) {
  const r = af / Math.sqrt(3);
  const outline = Array.from({ length: 6 }, (_, i) => [r * Math.cos((i * Math.PI) / 3), r * Math.sin((i * Math.PI) / 3)]);
  return at(extrude(outline, h, m, { bevel: h * 0.08, holes: hole ? [{ x: 0, y: 0, r: hole }] : [] }), [0, 0, 0], [90, 0, 0]);
}
/** A smooth bent rod or wire through points [[x, y, z], ...], radius r. */
export function wire(points, r, m, closed = false) {
  const c = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), closed, 'centripetal');
  return mesh(new THREE.TubeGeometry(c, Math.max(64, points.length * 24), r, 16, closed), m);
}
