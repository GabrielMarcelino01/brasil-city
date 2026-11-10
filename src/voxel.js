import { stripEmoji } from './icons.js';
// ===== Mundo 3D voxel (estilo Minecraft/Roblox) =====
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TEX, faceTex, torsoTex, armTex, legTex, OUTFITS } from './textures.js';

export function rng(seed) {
  let a = typeof seed === 'string' ? [...seed].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 2654435761) >>> 0, 1779033703) : seed >>> 0;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export const BLOCK = 26, ROAD = 8, CELL = BLOCK + ROAD, N = 6, HALF = (N * CELL) / 2, GY = 0.25;

// ---------- materiais ----------
export const MATS = {};
const MATDEF = {
  grass: {}, sand: {}, dirt: {}, asphalt: { r: 0.95 }, sidewalk: {}, brick: {}, planks: {}, stone: {}, plaster: {}, quartz: { r: 0.6 },
  roof: {}, leaves: {}, log: {}, palmlog: {}, door: {}, concrete: {}, metal: { r: 0.45, m: 0.5 }, white: {}, tire: {}, plate: {},
  glass: { r: 0.15, m: 0.3, emissive: '#ffcf70', ei: 0 }, carpaint: { r: 0.3, m: 0.35 }, gold: { r: 0.3, m: 0.75 },
  carglass: { tex: 'glass', r: 0.12, m: 0.4 }, water: { r: 0.08, m: 0.15, transparent: true, opacity: 0.88 }, hair: {},
  tower: { r: 0.35, m: 0.25, emissiveMap: 'towerLit', emissive: '#ffd27a', ei: 0 },
  headlight: { tex: 'white', emissive: '#fff3c4', ei: 0.7, base: 0.7 }, taillight: { tex: 'white', emissive: '#ff2a2a', ei: 0.5, base: 0.5 },
  lamp: { tex: 'white', emissive: '#ffe7a8', ei: 0.15, base: 0.15 }, neon: { tex: 'white', emissive: '#e879f9', ei: 1.6, base: 1.6 },
};
export function M(name) {
  if (MATS[name]) return MATS[name];
  const d = MATDEF[name] || {};
  const m = new THREE.MeshStandardMaterial({ map: TEX[d.tex || name](), vertexColors: true, roughness: d.r ?? 0.92, metalness: d.m ?? 0, transparent: !!d.transparent, opacity: d.opacity ?? 1 });
  if (d.emissive) { m.emissive = new THREE.Color(d.emissive); m.emissiveIntensity = d.ei; if (d.emissiveMap) m.emissiveMap = TEX[d.emissiveMap](); }
  m.userData.def = d; return (MATS[name] = m);
}
const _c = new THREE.Color();
function boxGeo(w, h, d, tile = 1, o = {}) {
  const g = new THREE.BoxGeometry(w, h, d); const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  const t = Array.isArray(tile) ? tile : [tile, tile];
  for (let f = 0; f < 6; f++) for (let v = 0; v < 4; v++) { const i = f * 4 + v; uv.setXY(i, uv.getX(i) * dims[f][0] / t[0], uv.getY(i) * dims[f][1] / t[1]); }
  if (o.fit) for (let i = 0; i < uv.count; i++) { /* textura inteira por face */ const f = (i / 4) | 0; uv.setXY(i, uv.getX(i) * t[0] / dims[f][0], uv.getY(i) * t[1] / dims[f][1]); }
  return g;
}
const _m4 = new THREE.Matrix4(), _e = new THREE.Euler(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(1, 1, 1), _p = new THREE.Vector3();
export class Builder {
  constructor() { this.parts = {}; this.m = new THREE.Matrix4(); }
  at(x, y, z, ry = 0) { this.m.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(0, ry, 0)), _s); return this; }
  box(mat, w, h, d, x, y, z, o = {}) {
    const g = boxGeo(w, h, d, o.tile ?? 1, o);
    _m4.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(o.rx || 0, o.ry || 0, o.rz || 0)), _s); g.applyMatrix4(_m4); g.applyMatrix4(this.m);
    const pos = g.attributes.position, nor = g.attributes.normal, col = new Float32Array(pos.count * 3);
    _c.set(o.c ?? '#ffffff');
    for (let i = 0; i < pos.count; i++) {
      let s = 1; const ny = nor.getY(i);
      if (o.ao !== false) { if (ny < -0.5) s = 0.55; else if (ny < 0.5) s = 0.74 + 0.26 * Math.min(1, Math.max(0, (pos.getY(i) - GY) / 1.6)); }
      col[i * 3] = _c.r * s; col[i * 3 + 1] = _c.g * s; col[i * 3 + 2] = _c.b * s;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    (this.parts[mat] ||= []).push(g); return this;
  }
  build(cast = true, receive = true) {
    const grp = new THREE.Group();
    for (const [mat, gs] of Object.entries(this.parts)) {
      const merged = mergeGeometries(gs); gs.forEach(g => g.dispose());
      const mesh = new THREE.Mesh(merged, M(mat)); mesh.castShadow = cast && mat !== 'water'; mesh.receiveShadow = receive; grp.add(mesh);
    }
    this.parts = {}; return grp;
  }
}

// ---------- labels ----------
export function makeLabel(text, { bg = 'rgba(27,35,64,0.9)', fg = '#fff', scale = 1, border = null, vip = false } = {}) {
  text = stripEmoji(text);
  const c = document.createElement('canvas'); const ctx = c.getContext('2d');
  const fs = 42, font = `${fs}px "Lilita One", "Nunito", system-ui, sans-serif`; ctx.font = font;
  const VW = vip ? 54 : 0;
  const w = Math.ceil(ctx.measureText(text).width) + 48 + VW; c.width = w; c.height = 80;
  ctx.font = font;
  // pílula com contorno marinho + "lábio" inferior (mesmo estilo dos botões da interface)
  ctx.fillStyle = '#1b2340'; rr(ctx, 3, 9, w - 6, 66, 20); ctx.fill();
  ctx.fillStyle = bg; rr(ctx, 6, 5, w - 12, 62, 17); ctx.fill();
  ctx.strokeStyle = border || '#1b2340'; ctx.lineWidth = 5; ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.28)'; rr(ctx, 14, 10, w - 28, 12, 6); ctx.fill();
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const tx = (w + VW) / 2;
  if (fg === '#fff' || fg === '#ffffff') { ctx.lineWidth = 7; ctx.strokeStyle = '#1b2340'; ctx.lineJoin = 'round'; ctx.strokeText(text, tx, 39); }
  ctx.fillStyle = fg; ctx.fillText(text, tx, 39);
  if (vip) vipSeal(ctx, 36, 37, 22);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: true, transparent: true, fog: false }));
  sp.scale.set((w / 80) * 0.95 * scale, 0.95 * scale, 1); sp.renderOrder = 10; return sp;
}
// selo dourado VIP (mesmo desenho do ícone "vip" da interface)
export function vipSeal(ctx, cx, cy, R) {
  ctx.save(); ctx.beginPath(); const n = 12; for (let i = 0; i < n * 2; i++) { const a = -Math.PI / 2 + i * Math.PI / n, q = i % 2 ? R * 0.83 : R; ctx.lineTo(cx + Math.cos(a) * q, cy + Math.sin(a) * q); } ctx.closePath();
  ctx.fillStyle = '#ffc425'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = '#1b2340'; ctx.lineJoin = 'round'; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.55, 0, Math.PI * 2); ctx.fillStyle = '#e8960c'; ctx.fill(); ctx.lineWidth = 3.5; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - R * 0.26, cy + R * 0.02); ctx.lineTo(cx - R * 0.07, cy + R * 0.22); ctx.lineTo(cx + R * 0.28, cy - R * 0.2); ctx.lineWidth = 5; ctx.strokeStyle = '#fff'; ctx.lineCap = 'round'; ctx.stroke(); ctx.restore();
}
function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

// ---------- casas ----------
const WALLS = ['#f6e7c8', '#fde2e4', '#d8f3dc', '#dbeafe', '#fff1b8', '#ffe5cc', '#e9d5ff', '#ccfbf1', '#ffffff', '#fecaca'];
const ROOFS = ['#b6412f', '#c2562f', '#8c3b2a', '#4b5563', '#2f5d8a', '#3f6e4a', '#7a4b2a'];
export function steppedRoof(B, W, D, y0, col, steps = 4, ov = 0.5) {
  const stepIn = (W + ov * 2) / (steps * 2 + 0.6);
  for (let i = 0; i < steps; i++) B.box('roof', W + ov * 2 - stepIn * 2 * i, 0.5, D + ov * 2, 0, y0 + 0.25 + i * 0.5, 0, { c: col });
  B.box('planks', 0.4, 0.3, D + ov * 2 + 0.1, 0, y0 + steps * 0.5 + 0.1, 0, { c: '#8b5a2b' });
}
export function windowAt(B, x, y, z, side = 'z', w = 1.2, h = 1.1) {
  if (side === 'z') { B.box('glass', w, h, 0.12, x, y, z, { tile: [w, h], fit: true, ao: false }); B.box('white', w + 0.3, 0.14, 0.3, x, y - h / 2 - 0.07, z + Math.sign(z) * 0.08, { c: '#e7e5e4' }); }
  else { B.box('glass', 0.12, h, w, x, y, z, { tile: [w, h], fit: true, ao: false }); B.box('white', 0.3, 0.14, w + 0.3, x + Math.sign(x) * 0.08, y - h / 2 - 0.07, z, { c: '#e7e5e4' }); }
}
export function doorAt(B, x, y0, z, h = 2.1) { B.box('door', 1.1, h, 0.14, x, y0 + h / 2, z, { tile: [1.1, h], fit: true }); B.box('stone', 1.6, 0.2, 0.8, x, 0.1 + y0 - 0.2, z + 0.4); }
export function buildHouse(type, r = Math.random, golden = false) {
  const B = new Builder();
  const wallMat = golden ? 'gold' : r() < 0.22 ? 'brick' : r() < 0.25 ? 'planks' : 'plaster';
  const wc = golden ? '#ffffff' : wallMat === 'plaster' ? WALLS[(r() * WALLS.length) | 0] : '#ffffff';
  const rc = golden ? '#d4a017' : ROOFS[(r() * ROOFS.length) | 0];
  const trim = wallMat === 'planks' ? 'log' : 'planks';
  if (type === 'casa_simples' || type === 'casa_reformada') {
    B.box('stone', 6.4, 0.4, 6.4, 0, 0.2, 0);
    B.box(wallMat, 6, 3.2, 6, 0, 2, 0, { c: wc });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box(trim, 0.5, 3.2, 0.5, sx * 2.95, 2, sz * 2.95, { c: '#d9b38c' });
    B.box(trim, 6.4, 0.35, 6.4, 0, 3.75, 0, { c: '#d9b38c' });
    doorAt(B, 0, 0.4, 3.04); windowAt(B, -1.85, 2.2, 3.04); windowAt(B, 1.85, 2.2, 3.04); windowAt(B, 3.04, 2.2, 0, 'x'); windowAt(B, -3.04, 2.2, 0, 'x');
    steppedRoof(B, 6, 6, 3.9, rc);
    B.box('brick', 0.8, 2.2, 0.8, 1.7, 5.4, -1.6);
    if (type === 'casa_reformada') {
      for (let i = -5; i <= 5; i++) if (Math.abs(i) > 0) B.box('planks', 0.2, 1, 0.2, i, 0.5, 5.4, { c: '#ffffff' });
      B.box('planks', 4.6, 0.15, 0.1, -3.2, 0.8, 5.4, { c: '#ffffff' }); B.box('planks', 4.6, 0.15, 0.1, 3.2, 0.8, 5.4, { c: '#ffffff' });
      B.box('stone', 1.4, 0.08, 2.2, 0, 0.04, 4.3, { c: '#d6d3d1' });
      for (const sx of [-1, 1]) { B.box('leaves', 2.6, 0.9, 1, sx * 2.4, 0.45, 4.3, { c: '#4f9a3a' }); for (let k = 0; k < 3; k++) B.box('white', 0.25, 0.25, 0.25, sx * (1.6 + k * 0.7), 1.0, 4.3, { c: ['#ef4444', '#facc15', '#f472b6'][k], ao: false }); }
      B.box('white', 0.2, 1.1, 0.2, 4.6, 0.55, 5.1, { c: '#334155' }); B.box('white', 0.5, 0.4, 0.7, 4.6, 1.2, 5.1, { c: '#1d4ed8' });
    }
    return finish(B, [6.4, 6.4]);
  }
  if (type === 'sobrado' || type === 'casa_piscina') {
    B.box('stone', 7.4, 0.4, 7, 0, 0.2, -0.5);
    B.box(wallMat, 7, 3, 6.5, 0, 1.9, -0.5, { c: wc }); B.box(trim, 7.3, 0.35, 6.8, 0, 3.55, -0.5, { c: '#d9b38c' });
    B.box(wallMat, 7, 3, 6.5, 0, 5.2, -0.5, { c: wc });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box(trim, 0.5, 6.3, 0.5, sx * 3.45, 3.55, -0.5 + sz * 3.2, { c: '#d9b38c' });
    doorAt(B, -1.6, 0.4, 2.79); windowAt(B, 1.6, 2.1, 2.79, 'z', 2, 1.2);
    windowAt(B, -1.7, 5.3, 2.79); windowAt(B, 1.7, 5.3, 2.79); windowAt(B, 3.54, 2.1, -0.5, 'x'); windowAt(B, -3.54, 5.3, -0.5, 'x'); windowAt(B, 3.54, 5.3, -0.5, 'x');
    B.box('planks', 7.2, 0.25, 1.6, 0, 3.85, 3.4, { c: '#c8a27a' });
    for (let i = -3.4; i <= 3.41; i += 0.85) B.box('planks', 0.15, 0.9, 0.15, i, 4.4, 4.1, { c: '#ffffff' });
    B.box('planks', 7.2, 0.15, 0.15, 0, 4.85, 4.1, { c: '#ffffff' });
    steppedRoof(B, 7, 6.5, 6.7, rc); B.box('brick', 0.9, 2.4, 0.9, -2, 8.3, -2.4);
    if (type === 'casa_piscina') {
      B.box('stone', 4.8, 0.3, 3, 3.3, 0.15, 4.8, { c: '#e7e5e4' }); B.box('water', 4.1, 0.12, 2.3, 3.3, 0.3, 4.8, { tile: 2, ao: false });
      B.box('white', 0.6, 0.2, 1.6, 0.4, 0.4, 5, { c: '#38bdf8' }); B.box('white', 1.4, 1.3, 0.1, 5.6, 1.4, 3.6, { c: '#f8fafc' });
    }
    return finish(B, [7.4, 7]);
  }
  // mansão
  const wm = golden ? 'gold' : 'quartz', tr = golden ? 'gold' : 'stone';
  B.box('stone', 11.6, 0.4, 8, 0, 0.2, -1.5, { c: '#e7e5e4' });
  B.box(wm, 11, 3.2, 7, 0, 2, -1.5); B.box(tr, 11.4, 0.3, 7.4, 0, 3.75, -1.5, { c: golden ? '#fff' : '#d6d3d1' });
  B.box(wm, 11, 3, 7, 0, 5.4, -1.5); B.box(tr, 11.6, 0.35, 7.6, 0, 7.07, -1.5, { c: golden ? '#fff' : '#d6d3d1' });
  for (let i = -5.2; i <= 5.21; i += 0.8) B.box(tr, 0.4, 0.5, 0.4, i, 7.45, 2.1, { c: golden ? '#fff' : '#d6d3d1' });
  B.box(wm, 4, 3, 6, -3.5, 8.7, -1.5); B.box(tr, 4.4, 0.35, 6.4, -3.5, 10.35, -1.5, { c: golden ? '#fff' : '#d6d3d1' });
  windowAt(B, -3.5, 8.8, 1.55, 'z', 2.6, 1.6);
  for (const x of [-3.6, 3.6]) { windowAt(B, x, 2.1, 2.04, 'z', 2.2, 1.6); windowAt(B, x, 5.4, 2.04, 'z', 2.2, 1.6); }
  windowAt(B, 0, 5.4, 2.04, 'z', 2, 1.6); windowAt(B, 5.54, 2.1, -1.5, 'x', 3, 1.6); windowAt(B, 5.54, 5.4, -1.5, 'x', 3, 1.6); windowAt(B, -5.54, 2.1, -1.5, 'x', 3, 1.6);
  B.box('door', 1.8, 2.6, 0.14, 0, 1.7, 2.04, { tile: [1.8, 2.6], fit: true });
  for (const x of [-1.5, 1.5]) B.box(golden ? 'gold' : 'quartz', 0.6, 3.2, 0.6, x, 2, 3.2);
  B.box(tr, 4.4, 0.4, 2.4, 0, 3.8, 2.9, { c: golden ? '#fff' : '#d6d3d1' });
  B.box('stone', 9.6, 0.3, 2.9, 0, 0.15, 4.6, { c: '#e7e5e4' }); B.box('water', 8.8, 0.12, 2.1, 0, 0.3, 4.6, { tile: 2, ao: false });
  for (const sx of [-1, 1]) { B.box('leaves', 1, 1.1, 7.4, sx * 5.9, 0.55, -1.5, { c: '#3f8a35' }); B.box('metal', 0.2, 2.6, 0.2, sx * 5.5, 1.3, 5.6, { c: '#334155' }); B.box('lamp', 0.5, 0.5, 0.5, sx * 5.5, 2.8, 5.6, { ao: false }); }
  B.box('leaves', 1.6, 1.6, 1.6, 3.5, 8.0, -3, { c: '#4f9a3a' });
  return finish(B, [11.6, 8]);
}
function finish(B, fp) { const g = B.build(); g.userData.footprint = fp; return g; }

// ---------- árvores ----------
export function addTree(B, kind, x, z, r, s = 1, y0 = GY) {
  if (kind === 'palm') {
    let px = x, pz = z; const lean = r() * Math.PI * 2, n = 6 + ((r() * 3) | 0);
    for (let i = 0; i < n; i++) { B.box('palmlog', 0.55 * s, 1 * s, 0.55 * s, px, y0 + (i + 0.5) * s, pz, { c: '#ffffff' }); px += Math.cos(lean) * 0.12 * i * s * 0.25; pz += Math.sin(lean) * 0.12 * i * s * 0.25; }
    const top = y0 + n * s;
    B.box('leaves', 1.1 * s, 0.6 * s, 1.1 * s, px, top + 0.1, pz, { c: '#3f9a3a' });
    for (let k = 0; k < 8; k++) {
      const a = k / 8 * Math.PI * 2 + r() * 0.3, dx = Math.cos(a), dz = Math.sin(a), ry = Math.atan2(dx, dz);
      B.box('leaves', 0.7 * s, 0.22 * s, 1.8 * s, px + dx * 1.2 * s, top + 0.15 * s, pz + dz * 1.2 * s, { c: '#4fae3f', ry, rx: -0.15 });
      B.box('leaves', 0.6 * s, 0.22 * s, 1.5 * s, px + dx * 2.6 * s, top - 0.45 * s, pz + dz * 2.6 * s, { c: '#46a03a', ry, rx: 0.45 });
    }
    for (let k = 0; k < 3; k++) B.box('white', 0.3 * s, 0.3 * s, 0.3 * s, px + (r() - 0.5) * 0.8, top - 0.35 * s, pz + (r() - 0.5) * 0.8, { c: '#6b4423' });
    return;
  }
  if (kind === 'pine') {
    const h = (2 + r() * 1.5) * s; B.box('log', 0.7 * s, h, 0.7 * s, x, y0 + h / 2, z);
    const c = ['#2f6b3a', '#2a5f33', '#356f3f'][(r() * 3) | 0];
    [3.8, 3, 2.2, 1.4, 0.7].forEach((w, i) => B.box('leaves', w * s, 1.1 * s, w * s, x, y0 + h + (i * 1.05 + 0.4) * s, z, { c }));
    return;
  }
  const h = (2.6 + r() * 1.2) * s; B.box('log', 0.8 * s, h, 0.8 * s, x, y0 + h / 2, z);
  const c = kind === 'ipe' ? (r() > 0.5 ? '#f9a8d4' : '#d8b4fe') : ['#4f9a3a', '#5aa23f', '#468e35'][(r() * 3) | 0];
  B.box('leaves', 3.6 * s, 2 * s, 3.6 * s, x, y0 + h + 0.9 * s, z, { c });
  B.box('leaves', 2.2 * s, 1.2 * s, 2.2 * s, x, y0 + h + 2.4 * s, z, { c });
  for (let k = 0; k < 4; k++) B.box('leaves', 1.1 * s, 1.1 * s, 1.1 * s, x + (r() - 0.5) * 3.4 * s, y0 + h + (0.2 + r() * 1.6) * s, z + (r() - 0.5) * 3.4 * s, { c });
}

// ---------- avatar Roblox ----------
function atlasBox(w, h, d, topHair = false) {
  const g = new THREE.BoxGeometry(w, h, d); const uv = g.attributes.uv;
  for (let f = 0; f < 6; f++) for (let v = 0; v < 4; v++) {
    const i = f * 4 + v; let u = uv.getX(i), vv = uv.getY(i);
    if (f === 4) u = u * 0.5; else u = 0.5 + u * 0.5;
    if (topHair && f === 2) vv = 0.7 + vv * 0.3;
    uv.setXY(i, u, vv);
  }
  return g;
}
export const AVM = {};
function avMat(tex) { return AVM[tex.uuid] ||= new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }); }
export function plainMat(c, o = {}) { const k = c + JSON.stringify(o); return AVM[k] ||= new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, ...o }); }
function part(geo, mat, x, y, z) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; return m; }
export const AG = { torso: atlasBox(0.96, 1, 0.5), head: atlasBox(0.66, 0.64, 0.64, true), limb: new THREE.BoxGeometry(0.46, 1, 0.48), cube: new THREE.BoxGeometry(1, 1, 1) };
export function buildAvatar({ shirt = '#16a34a', skin = '#c68642', hat = null, pants = null, cape = false, prof = 'pedreiro', hairCol = '#2b1a10', face = 0 } = {}) {
  const o = OUTFITS[prof] || {};
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const legT = avMat(legTex(pants || o.pants || '#1e3a8a', o.shoes)); const armT = avMat(armTex(shirt, prof, skin));
  const legs = [], arms = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(0.24 * s, 1.0, 0); leg.add(part(AG.limb, legT, 0, -0.5, 0)); body.add(leg); legs.push(leg);
    const arm = new THREE.Group(); arm.position.set(0.72 * s, 1.95, 0); arm.add(part(AG.limb, armT, 0, -0.45, 0)); body.add(arm); arms.push(arm);
  }
  const torso = part(AG.torso, avMat(torsoTex(shirt, prof)), 0, 1.5, 0); body.add(torso);
  const headG = new THREE.Group(); headG.position.set(0, 2.0, 0); body.add(headG);
  headG.add(part(AG.head, avMat(faceTex(skin, hairCol, face)), 0, 0.33, 0));
  const hm = plainMat(hairCol);
  const H = hat || o.hat;
  if (!H || H === 'palha' || H === 'chef') { headG.add(scaled(part(AG.cube, hm, 0, 0.68, -0.02), 0.72, 0.14, 0.7)); headG.add(scaled(part(AG.cube, hm, 0, 0.42, -0.33), 0.7, 0.5, 0.06)); if (!H) headG.add(scaled(part(AG.cube, hm, 0, 0.6, 0.31), 0.7, 0.1, 0.06)); }
  const hc = o.hatColor || '#dc2626';
  if (H === 'bone') { headG.add(scaled(part(AG.cube, plainMat(hc), 0, 0.72, 0), 0.72, 0.2, 0.72)); headG.add(scaled(part(AG.cube, plainMat(hc), 0, 0.64, 0.45), 0.6, 0.06, 0.36)); }
  if (H === 'capacete') { headG.add(scaled(part(AG.cube, plainMat(hc, { roughness: 0.4 }), 0, 0.75, 0), 0.76, 0.26, 0.76)); headG.add(scaled(part(AG.cube, plainMat(hc, { roughness: 0.4 }), 0, 0.64, 0.05), 0.86, 0.06, 0.9)); }
  if (H === 'bombeiro') { headG.add(scaled(part(AG.cube, plainMat('#b91c1c', { roughness: 0.4 }), 0, 0.76, 0), 0.76, 0.28, 0.76)); headG.add(scaled(part(AG.cube, plainMat('#b91c1c'), 0, 0.64, -0.15), 0.9, 0.06, 1.05)); headG.add(scaled(part(AG.cube, plainMat('#facc15'), 0, 0.78, 0.39), 0.2, 0.2, 0.04)); }
  if (H === 'palha') { headG.add(scaled(part(AG.cube, plainMat('#e2b84a'), 0, 0.7, 0), 1.3, 0.07, 1.3)); headG.add(scaled(part(AG.cube, plainMat('#d4a632'), 0, 0.84, 0), 0.68, 0.24, 0.68)); headG.add(scaled(part(AG.cube, plainMat('#7c2d12'), 0, 0.76, 0), 0.7, 0.07, 0.7)); }
  if (H === 'chef') { headG.add(scaled(part(AG.cube, plainMat('#ffffff'), 0, 0.95, 0), 0.7, 0.6, 0.7)); headG.add(scaled(part(AG.cube, plainMat('#ffffff'), 0, 1.3, 0), 0.82, 0.22, 0.82)); }
  if (H === 'coroa') { const g = plainMat('#facc15', { metalness: 0.8, roughness: 0.25, emissive: '#7c4a03', emissiveIntensity: 0.25 }); headG.add(scaled(part(AG.cube, g, 0, 0.75, 0), 0.72, 0.18, 0.72)); for (const [x, z] of [[-0.28, 0.28], [0.28, 0.28], [-0.28, -0.28], [0.28, -0.28], [0, 0.28]]) headG.add(scaled(part(AG.cube, g, x, 0.92, z), 0.14, 0.18, 0.14)); headG.add(scaled(part(AG.cube, plainMat('#dc2626', { emissive: '#7f1d1d', emissiveIntensity: 0.4 }), 0, 0.78, 0.37), 0.12, 0.1, 0.02)); }
  if (o.headphones) { headG.add(scaled(part(AG.cube, plainMat('#111827'), 0, 0.72, 0), 0.74, 0.08, 0.2)); for (const s of [-1, 1]) headG.add(scaled(part(AG.cube, plainMat('#ef4444'), s * 0.36, 0.35, 0), 0.1, 0.26, 0.24)); }
  if (o.backpack) { body.add(scaled(part(AG.cube, plainMat('#dc2626'), 0, 1.6, -0.55), 0.85, 0.85, 0.6)); body.add(scaled(part(AG.cube, plainMat('#facc15'), 0, 1.75, -0.86), 0.5, 0.2, 0.02)); }
  if (H === 'race') { const hm2 = plainMat(hc, { roughness: 0.3, metalness: 0.2 }); headG.add(scaled(part(AG.cube, hm2, 0, 0.36, -0.02), 0.78, 0.8, 0.76)); headG.add(scaled(part(AG.cube, plainMat('#1b2340', { roughness: 0.1, metalness: 0.6 }), 0, 0.38, 0.37), 0.62, 0.24, 0.04)); headG.add(scaled(part(AG.cube, plainMat('#ffc425'), 0, 0.77, 0), 0.16, 0.04, 0.78)); headG.add(scaled(part(AG.cube, plainMat('#ffffff'), 0, 0.12, 0.37), 0.5, 0.06, 0.04)); }
  if (o.mask) { headG.add(scaled(part(AG.cube, plainMat(o.mask), 0, 0.35, 0.005), 0.69, 0.16, 0.67)); for (const sx of [-1, 1]) headG.add(scaled(part(AG.cube, plainMat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 0.25 }), sx * 0.11, 0.355, 0.335), 0.13, 0.07, 0.02)); }
  let capeM = null; if (cape || o.cape) { const cc = o.capeColor || '#dc2626'; capeM = new THREE.Group(); capeM.position.set(0, 1.98, -0.27); capeM.add(scaled(part(AG.cube, plainMat(cc, { side: THREE.DoubleSide }), 0, -0.75, 0), 0.9, 1.5, 0.05)); if (o.capeColor) { capeM.add(scaled(part(AG.cube, plainMat('#1e5fbf'), 0, -0.02, 0.03), 0.96, 0.1, 0.06)); } body.add(capeM); }
  root.userData = { legs, arms, body, head: headG, torso, cape: capeM, phase: Math.random() * 6, t: Math.random() * 10 };
  return root;
}
function scaled(m, x, y, z) { m.scale.set(x, y, z); return m; }
export function animateAvatar(av, speed, dt) {
  const u = av.userData; u.t += dt; const L = THREE.MathUtils.lerp;
  if (speed > 0.05) {
    u.phase += dt * (5 + 7 * speed); const amp = 0.45 + 0.55 * Math.min(1, speed), s = Math.sin(u.phase) * amp;
    u.legs[0].rotation.x = s; u.legs[1].rotation.x = -s; u.arms[0].rotation.x = -s; u.arms[1].rotation.x = s;
    u.arms[0].rotation.z = L(u.arms[0].rotation.z, 0, 0.2); u.arms[1].rotation.z = L(u.arms[1].rotation.z, 0, 0.2);
    u.body.position.y = Math.abs(Math.cos(u.phase)) * 0.08 * amp; u.body.rotation.x = L(u.body.rotation.x, speed > 0.8 ? 0.12 : 0.03, 0.15);
    if (u.cape) u.cape.rotation.x = L(u.cape.rotation.x, 0.25 + 0.5 * speed + Math.sin(u.t * 9) * 0.05, 0.2);
    u.head.rotation.y = L(u.head.rotation.y, 0, 0.1);
  } else {
    for (let i = 0; i < 2; i++) { u.legs[i].rotation.x = L(u.legs[i].rotation.x, 0, 0.2); u.arms[i].rotation.x = L(u.arms[i].rotation.x, Math.sin(u.t * 1.6 + i) * 0.04, 0.2); }
    u.arms[0].rotation.z = -0.06 - Math.sin(u.t * 2) * 0.03; u.arms[1].rotation.z = 0.06 + Math.sin(u.t * 2) * 0.03;
    u.body.position.y = Math.sin(u.t * 2) * 0.015; u.body.rotation.x = L(u.body.rotation.x, 0, 0.15);
    u.head.rotation.y = Math.sin(u.t * 0.6) * 0.35 * (Math.sin(u.t * 0.23) > 0.3 ? 1 : 0.2);
    if (u.cape) u.cape.rotation.x = L(u.cape.rotation.x, 0.08 + Math.sin(u.t * 2.5) * 0.04, 0.1);
  }
}

// ---------- veículos ----------
export function buildVehicle(type) {
  if (type && type.startsWith('vip_')) return buildVipCar(type);
  const B = new Builder();
  if (type === 'bike') {
    for (const z of [-0.65, 0.65]) B.box('tire', 0.1, 0.8, 0.8, 0, 0.4, z, { tile: [0.8, 0.8], fit: true, ao: false });
    B.box('white', 0.1, 0.1, 1.3, 0, 0.75, 0, { c: '#ef4444' }); B.box('white', 0.1, 0.55, 0.1, 0, 0.6, 0.55, { c: '#ef4444' });
    B.box('white', 0.1, 0.4, 0.1, 0, 0.8, -0.3, { c: '#ef4444' }); B.box('white', 0.25, 0.08, 0.35, 0, 1.02, -0.3, { c: '#111827' });
    B.box('metal', 0.6, 0.06, 0.06, 0, 0.98, 0.6, { c: '#334155' });
    const g = B.build(); g.userData.bike = true; return g;
  }
  const col = { popular: '#f8fafc', suv: '#334155', esportivo: '#dc2626', neon: '#7c3aed', taxi: '#facc15', azul: '#2563eb', verde: '#16a34a' }[type] || '#f8fafc';
  const L = type === 'suv' ? 4.4 : 4.1, H = type === 'suv' ? 1.0 : type === 'esportivo' || type === 'neon' ? 0.55 : 0.75, W = 2;
  const by = 0.45;
  B.box('carpaint', W, H, L, 0, by + H / 2, 0, { c: col, ao: false });
  const cabL = type === 'esportivo' || type === 'neon' ? L * 0.42 : L * 0.55, cabH = type === 'esportivo' || type === 'neon' ? 0.5 : 0.7, cz = -0.15;
  B.box('carglass', W - 0.2, cabH, cabL, 0, by + H + cabH / 2, cz, { tile: [1, 1], ao: false });
  B.box('carpaint', W - 0.15, 0.1, cabL + 0.05, 0, by + H + cabH + 0.05, cz, { c: col, ao: false });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box('tire', 0.36, 0.8, 0.8, sx * (W / 2 - 0.1), 0.4, sz * L * 0.31, { tile: [0.8, 0.8], fit: true, ao: false });
  B.box('metal', W + 0.05, 0.25, 0.2, 0, by + 0.12, L / 2 + 0.05, { c: '#475569' }); B.box('metal', W + 0.05, 0.25, 0.2, 0, by + 0.12, -L / 2 - 0.05, { c: '#475569' });
  for (const sx of [-1, 1]) { B.box('headlight', 0.45, 0.2, 0.06, sx * 0.62, by + H - 0.2, L / 2 + 0.01, { ao: false }); B.box('taillight', 0.45, 0.18, 0.06, sx * 0.62, by + H - 0.2, -L / 2 - 0.01, { ao: false }); }
  B.box('plate', 0.6, 0.2, 0.04, 0, by + 0.2, L / 2 + 0.17, { tile: [0.6, 0.2], fit: true, ao: false }); B.box('plate', 0.6, 0.2, 0.04, 0, by + 0.2, -L / 2 - 0.17, { tile: [0.6, 0.2], fit: true, ao: false, ry: Math.PI });
  if (type === 'esportivo' || type === 'neon') { B.box('carpaint', W - 0.2, 0.08, 0.4, 0, by + H + 0.45, -L / 2 + 0.25, { c: '#111827' }); B.box('metal', 0.1, 0.4, 0.1, -0.6, by + H + 0.2, -L / 2 + 0.25, { c: '#111827' }); B.box('metal', 0.1, 0.4, 0.1, 0.6, by + H + 0.2, -L / 2 + 0.25, { c: '#111827' }); }
  if (type === 'neon') B.box('neon', W - 0.3, 0.06, L - 0.6, 0, 0.3, 0, { ao: false });
  if (type === 'suv') B.box('metal', W - 0.4, 0.08, 1.6, 0, by + H + cabH + 0.16, cz, { c: '#111827' });
  if (type === 'taxi') B.box('white', 0.7, 0.25, 0.35, 0, by + H + cabH + 0.2, cz, { c: '#111827' });
  return B.build();
}

// ---------- esportivos VIP (formas genéricas, sem logos) ----------
function buildVipCar(type) {
  const B = new Builder(), W = 2.1, by = 0.38;
  const paint = (w, h, d, x, y, z, c, o = {}) => B.box('carpaint', w, h, d, x, y, z, { c, ao: false, ...o });
  const glass = (w, h, d, x, y, z) => B.box('carglass', w, h, d, x, y, z, { tile: [1, 1], ao: false });
  const blk = (w, h, d, x, y, z) => B.box('metal', w, h, d, x, y, z, { c: '#151a2b' });
  let L, wheelZ;
  if (type === 'vip_porsche') { // cupê prata, traseira arredondada (fastback)
    const c = '#c3cad6'; L = 4.3; wheelZ = 1.35;
    paint(W, 0.55, L, 0, by + 0.28, 0, c);
    paint(W - 0.1, 0.18, 1.3, 0, by + 0.64, 1.35, c); // capô
    for (const sx of [-1, 1]) paint(0.42, 0.26, 1.0, sx * 0.78, by + 0.72, 1.45, c); // paralamas altos
    glass(W - 0.35, 0.42, 1.05, 0, by + 0.98, 0.05); paint(W - 0.35, 0.1, 0.95, 0, by + 1.22, -0.05, c);
    glass(W - 0.45, 0.36, 0.5, 0, by + 0.95, -0.72); paint(W - 0.25, 0.4, 0.5, 0, by + 0.75, -1.17, c); paint(W - 0.2, 0.24, 0.5, 0, by + 0.67, -1.62, c); paint(W - 0.3, 0.14, 0.34, 0, by + 0.62, -1.98, c);
    paint(W - 0.5, 0.06, 0.26, 0, by + 0.82, -1.9, '#9aa3b2'); // spoiler discreto
    for (const sx of [-1, 1]) { B.box('headlight', 0.36, 0.22, 0.06, sx * 0.72, by + 0.62, L / 2 + 0.01, { ao: false }); }
    B.box('taillight', W - 0.4, 0.1, 0.05, 0, by + 0.46, -L / 2 - 0.01, { ao: false });
  } else if (type === 'vip_lambo') { // cunha amarela, superbaixa, angulosa
    const c = '#ffc425'; L = 4.5; wheelZ = 1.45;
    paint(W + 0.1, 0.45, L, 0, by + 0.22, 0, c);
    paint(W - 0.1, 0.12, 1.2, 0, by + 0.5, 1.6, c); paint(W - 0.2, 0.14, 0.6, 0, by + 0.42, 2.0, c, {});
    glass(W - 0.4, 0.36, 1.3, 0, by + 0.63, 0.45); glass(W - 0.5, 0.26, 0.9, 0, by + 0.76, -0.4);
    paint(W - 0.5, 0.08, 0.9, 0, by + 0.93, -0.35, c); paint(W, 0.3, 1.5, 0, by + 0.6, -1.4, c);
    for (const sx of [-1, 1]) { blk(0.06, 0.24, 0.8, sx * (W / 2 + 0.07), by + 0.4, -0.6); }
    blk(W - 0.2, 0.08, 0.4, 0, by + 1.08, -2.0); for (const sx of [-1, 1]) blk(0.08, 0.32, 0.12, sx * 0.7, by + 0.9, -2.0); // asa traseira
    for (const sx of [-1, 1]) B.box('headlight', 0.5, 0.1, 0.06, sx * 0.68, by + 0.42, L / 2 + 0.01, { ao: false });
    for (const sx of [-1, 1]) B.box('taillight', 0.55, 0.1, 0.05, sx * 0.62, by + 0.48, -L / 2 - 0.01, { ao: false });
  } else { // vip_ferrari: vermelha, capô longo, cabine recuada, entradas de ar laterais
    const c = '#e1251b'; L = 4.6; wheelZ = 1.5;
    paint(W, 0.5, L, 0, by + 0.25, 0, c);
    paint(W - 0.12, 0.16, 1.9, 0, by + 0.58, 1.2, c);
    for (const sx of [-1, 1]) paint(0.4, 0.22, 1.1, sx * 0.8, by + 0.62, -1.3, c);
    glass(W - 0.35, 0.42, 1.2, 0, by + 0.86, -0.35); paint(W - 0.35, 0.1, 1.0, 0, by + 1.1, -0.45, c);
    paint(W - 0.2, 0.24, 1.0, 0, by + 0.62, -1.6, c);
    for (const sx of [-1, 1]) blk(0.06, 0.26, 0.7, sx * (W / 2 + 0.04), by + 0.32, -0.55);
    blk(W - 0.3, 0.12, 0.08, 0, by + 0.3, L / 2 + 0.02); // grade
    for (const sx of [-1, 1]) B.box('headlight', 0.42, 0.14, 0.06, sx * 0.7, by + 0.52, L / 2 + 0.01, { ao: false });
    for (const sx of [-1, 1]) for (const k of [0.45, 0.8]) B.box('taillight', 0.22, 0.22, 0.05, sx * k, by + 0.45, -L / 2 - 0.01, { ao: false });
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { B.box('tire', 0.34, 0.72, 0.72, sx * (W / 2 - 0.08), 0.36, sz * wheelZ, { tile: [0.72, 0.72], fit: true, ao: false }); B.box('metal', 0.36, 0.32, 0.32, sx * (W / 2 - 0.07), 0.36, sz * wheelZ, { c: '#d1d5db' }); }
  B.box('plate', 0.6, 0.18, 0.04, 0, by + 0.12, -L / 2 - 0.03, { tile: [0.6, 0.2], fit: true, ao: false, ry: Math.PI });
  const g = B.build(); g.userData.vip = true; return g;
}

// ---------- céu ----------
export function makeSky() {
  const geo = new THREE.SphereGeometry(600, 24, 12);
  const mat = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color('#3d8ee8') }, mid: { value: new THREE.Color('#8ec5f5') }, bot: { value: new THREE.Color('#dff0ff') } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.15 ? mix(mid, top, smoothstep(0.15, 0.7, h)) : mix(bot, mid, smoothstep(-0.05, 0.15, h)); gl_FragColor = vec4(c, 1.0); }' });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = -1; m.frustumCulled = false; return m;
}
export function makeCloud(r) {
  const B = new Builder(); const n = 3 + ((r() * 4) | 0);
  for (let i = 0; i < n; i++) B.box('white', 8 + r() * 14, 3 + r() * 2, 6 + r() * 10, (r() - 0.5) * 20, r() * 2, (r() - 0.5) * 10, { ao: false, c: '#ffffff' });
  const g = B.build(false, false); g.children.forEach(m => { m.material = CLOUD_MAT; }); return g;
}
export const CLOUD_MAT = new THREE.MeshLambertMaterial({ color: '#ffffff', emissive: '#e8f2ff', emissiveIntensity: 0.55, transparent: true, opacity: 0.93, fog: false });

