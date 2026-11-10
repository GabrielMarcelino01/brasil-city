// ===== Mundo 3D v3: cidade que evolui =====
import * as THREE from 'three';
import { rng, BLOCK, ROAD, CELL, N, HALF, GY, MATS, M, Builder, makeLabel, buildHouse, addTree, steppedRoof, windowAt, doorAt,
  buildAvatar, animateAvatar, buildVehicle, makeSky, makeCloud, CLOUD_MAT, AVM, AG, plainMat } from './voxel.js';
import { TEX } from './textures.js';
import { OUTFITS } from './textures.js';
export { rng };

const LAWN_Y = 0.28;
const SPECIAL = { palace: '2,2', obra: '3,2', plaza: '2,3', park: '4,1' };
const blockCenter = (i, j) => [-HALF + CELL / 2 + i * CELL, -HALF + CELL / 2 + j * CELL];

function makeFlag(w = 3.2, h = 2.2) {
  const c = document.createElement('canvas'); c.width = 160; c.height = 112; const f = c.getContext('2d');
  f.fillStyle = '#009c3b'; f.fillRect(0, 0, 160, 112); f.fillStyle = '#ffdf00'; f.beginPath(); f.moveTo(80, 10); f.lineTo(150, 56); f.lineTo(80, 102); f.lineTo(10, 56); f.fill();
  f.fillStyle = '#002776'; f.beginPath(); f.arc(80, 56, 26, 0, 7); f.fill(); f.fillStyle = '#fff'; f.fillRect(56, 52, 48, 5);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h, 10, 1), new THREE.MeshStandardMaterial({ map: t, side: THREE.DoubleSide }));
  m.geometry.translate(w / 2, 0, 0); m.castShadow = true; return m;
}
function trashGroup(r) {
  const B = new Builder(); const n = 2 + ((r() * 3) | 0);
  for (let k = 0; k < n; k++) {
    const x = (r() - 0.5) * 1.6, z = (r() - 0.5) * 1.6, t = r();
    if (t < 0.45) B.box('white', 0.7, 0.6, 0.6, x, 0.3, z, { c: '#1f2937', ry: r() * 3 });
    else if (t < 0.7) B.box('planks', 0.8, 0.6, 0.8, x, 0.3, z, { c: '#c8a070', ry: r() * 3 });
    else if (t < 0.85) B.box('white', 0.25, 0.4, 0.25, x, 0.2, z, { c: '#dc2626', rz: 1.4, ry: r() * 3 });
    else B.box('tire', 0.8, 0.3, 0.8, x, 0.15, z, { tile: [0.8, 0.8], fit: true });
  }
  if (r() > 0.5) B.box('white', 0.3, 0.05, 0.4, (r() - 0.5) * 2, 0.03, (r() - 0.5) * 2, { c: '#f8fafc', ao: false });
  return B.build(true, true);
}
function weeds(B, r, n, area, y = 0.05) {
  for (let k = 0; k < n; k++) { const x = (r() - 0.5) * area, z = (r() - 0.5) * area, h = 0.3 + r() * 0.5; B.box('leaves', 0.15, h, 0.15, x, y + h / 2, z, { c: r() > 0.5 ? '#8aa83a' : '#a3a04a', ry: r() * 3 }); B.box('leaves', 0.12, h * 0.7, 0.12, x + 0.15, y + h * 0.35, z + 0.05, { c: '#7c9a33' }); }
}
// lote: vazio / etapas de obra / casa
export function buildLot(info, r) {
  const B = new Builder(); const st = info?.stage || 0;
  if (st < 4) B.box('dirt', 11, 0.08, 11, 0, 0.04, 0, { tile: 2, ao: false, c: '#b08a6a' });
  if (st === 0) {
    weeds(B, r, 10 + ((r() * 10) | 0), 10);
    for (let k = 0; k < 3; k++) B.box('stone', 0.4 + r() * 0.6, 0.3 + r() * 0.4, 0.4 + r() * 0.6, (r() - 0.5) * 9, 0.2, (r() - 0.5) * 9, { ry: r() * 3 });
    if (r() > 0.55) { for (let k = 0; k < 4; k++) { B.box('dirt', 4, 0.25, 0.7, -1, 0.15, -3 + k * 1.2, { c: '#7a5236' }); for (let q = 0; q < 5; q++) B.box('leaves', 0.35, 0.35, 0.35, -2.6 + q * 0.8, 0.45, -3 + k * 1.2, { c: '#4caf50' }); } }
    else if (r() > 0.4) addTree(B, r() > 0.5 ? 'oak' : 'palm', (r() - 0.5) * 6, (r() - 0.5) * 6, r, 0.8, 0.08);
    // placa
    B.box('planks', 0.15, 1.6, 0.15, 3.8, 0.8, 4.6, { c: '#a07850' }); B.box('planks', 1.8, 0.9, 0.1, 3.8, 1.5, 4.66, { c: '#f5deb3' });
    if (r() > 0.6) for (let i = -5; i <= 5; i += 2.5) B.box('planks', 0.15, 0.9 - r() * 0.4, 0.15, i, 0.4, 5.4, { c: '#8b6a4a', rz: (r() - 0.5) * 0.4 });
  } else if (st < 4) {
    B.box('stone', 6.4, 0.5, 6.4, 0, 0.25, 0);
    if (st === 1) {
      for (let x = -3; x <= 3; x += 1.5) for (const z of [-3, 3]) B.box('metal', 0.08, 1.6, 0.08, x, 1.3, z, { c: '#7c2d12' });
      for (let k = 0; k < 6; k++) B.box('brick', 1.2, 0.3, 0.6, 4.4, 0.2 + k * 0.3, -3 + (k % 2) * 0.1);
      B.box('sand', 2, 1, 2, -4.2, 0.5, 3.2, { tile: 1 });
    } else {
      B.box('brick', 6, 3.2, 6, 0, 2.1, 0);
      for (const [x, y] of [[-1.85, 2.2], [1.85, 2.2]]) B.box('white', 1.2, 1.1, 0.1, x, y, 3.04, { c: '#2b2b2b', ao: false });
      B.box('white', 1.1, 2.1, 0.1, 0, 1.55, 3.04, { c: '#2b2b2b', ao: false });
      if (st === 3) { steppedRoof(B, 6, 6, 3.7, '#b6412f'); }
      for (let y = 1; y <= (st === 3 ? 3 : 4); y++) B.box('planks', 7.6, 0.12, 0.8, 0, y * 1.1, 3.9, { c: '#c8945a' });
      for (const x of [-3.7, 0, 3.7]) B.box('metal', 0.12, st === 3 ? 3.6 : 4.6, 0.12, x, (st === 3 ? 3.6 : 4.6) / 2, 4.3, { c: '#64748b' });
    }
    B.box('white', 0.15, 1, 0.15, 5.2, 0.5, 5.2, { c: '#f97316' }); B.box('white', 0.15, 1, 0.15, -5.2, 0.5, 5.2, { c: '#f97316' });
    B.box('white', 10.4, 0.12, 0.05, 0, 0.85, 5.2, { c: '#facc15', ao: false });
    const g = B.build(); g.userData.footprint = st >= 2 ? [6.6, 6.6] : null; return g;
  }
  if (st >= 4) {
    const h = buildHouse(info.type || 'casa_simples', r, info.golden);
    const g = new THREE.Group(); g.add(h);
    const gb = new Builder(); weeds(gb, r, 0, 1); gb.box('grass', 11, 0.04, 11, 0, 0.02, 0, { tile: 2, ao: false }); const gg = gb.build(false, true); g.add(gg);
    g.userData.footprint = h.userData.footprint; return g;
  }
  const g = B.build(); g.userData.footprint = null; return g;
}

// terreno VIP: área maior (200 m²) com cerca dourada, gramado e canteiros
function vipYard() {
  const B = new Builder(), S2 = 6.3;
  B.box('grass', S2 * 2, 0.05, S2 * 2, 0, 0.03, 0, { tile: 2, ao: false, c: '#c9f0b4' });
  for (let i = -S2; i <= S2 + 0.01; i += 1.05) {
    for (const [x, z] of [[i, -S2], [-S2, i], [S2, i], [i, S2]]) { if (z === S2 && Math.abs(x) < 1.6) continue; B.box('white', 0.18, 0.8, 0.18, x, 0.4, z, { c: '#ffffff' }); }
  }
  for (const [w, d, x, z] of [[S2 * 2, 0.12, 0, -S2], [0.12, S2 * 2, -S2, 0], [0.12, S2 * 2, S2, 0], [S2 - 1.6, 0.12, -(S2 + 1.6) / 2, S2], [S2 - 1.6, 0.12, (S2 + 1.6) / 2, S2]]) { B.box('gold', w, 0.12, d, x, 0.82, z); B.box('gold', w, 0.1, d, x, 0.45, z); }
  for (const [x, z] of [[-S2, -S2], [S2, -S2], [-S2, S2], [S2, S2], [-1.6, S2], [1.6, S2]]) { B.box('gold', 0.42, 1.2, 0.42, x, 0.6, z); B.box('gold', 0.55, 0.16, 0.55, x, 1.28, z); }
  for (const sx of [-1, 1]) { B.box('leaves', 2.2, 0.5, 0.9, sx * 4.6, 0.3, -5.3, { c: '#4f9a3a' }); for (let k = 0; k < 4; k++) B.box('white', 0.25, 0.25, 0.25, sx * (3.8 + k * 0.5), 0.65, -5.3, { c: ['#ffc425', '#ec4b47', '#2f80ed', '#ffffff'][k], ao: false }); }
  B.box('stone', 2.4, 0.06, 3, 0, 0.06, 4.6, { c: '#f1efe9' });
  return B.build(false, true);
}

function buildPalace(B, cx, cz, flags) {
  const y0 = LAWN_Y; B.at(cx, y0, cz, 0);
  B.box('stone', 25, 0.1, 25, 0, 0.05, 0, { tile: 2, ao: false, c: '#f1efe9' });
  for (const sx of [-1, 1]) {
    B.box('grass', 6.5, 0.25, 9, sx * 8.5, 0.15, 5.5, { tile: 2 });
    B.box('leaves', 6.5, 0.8, 0.6, sx * 8.5, 0.5, 10.2, { c: '#3f8a35' }); B.box('leaves', 0.6, 0.8, 9, sx * 11.6, 0.5, 5.5, { c: '#3f8a35' });
    for (let k = 0; k < 7; k++) B.box('white', 0.35, 0.35, 0.35, sx * (6 + (k % 4) * 1.4), 0.45, 2.5 + Math.floor(k / 4) * 1.5, { c: ['#ef4444', '#facc15', '#3b82f6', '#f472b6'][k % 4], ao: false });
    addTree(B, sx > 0 ? 'palm' : 'oak', sx * 9.5, 7, rng(sx + 5), 0.8, 0.25);
    B.box('metal', 0.2, 7, 0.2, sx * 4.5, 3.5, 11, { c: '#e5e7eb' });
  }
  B.box('quartz', 4, 0.08, 10, 0, 0.12, 7.5);
  B.box('stone', 3.6, 0.6, 3.6, 0, 0.4, 7.5, { c: '#e7e5e4' }); B.box('water', 3, 0.1, 3, 0, 0.7, 7.5, { tile: 2, ao: false }); B.box('quartz', 0.6, 1.6, 0.6, 0, 1.2, 7.5);
  for (let s = 0; s < 3; s++) B.box('quartz', 12 - s * 0.6, 0.3, 1, 0, 0.15 + s * 0.3, 3.2 - s * 0.6);
  B.box('stone', 21, 0.9, 10, 0, 0.45, -3.5, { c: '#e7e5e4' });
  B.box('quartz', 19, 6, 8, 0, 3.9, -4);
  B.box('gold', 19.4, 0.3, 8.4, 0, 6.95, -4);
  B.box('quartz', 15, 3.6, 7, 0, 8.9, -4.3); B.box('gold', 15.4, 0.3, 7.4, 0, 10.85, -4.3);
  for (const x of [-7.5, -4.5, 4.5, 7.5]) { windowAt(B, x, 2.6, 0.04, 'z', 1.6, 1.8); windowAt(B, x, 5.3, 0.04, 'z', 1.6, 1.6); }
  for (const x of [-5.5, -2, 2, 5.5]) windowAt(B, x, 8.9, -0.76, 'z', 1.4, 1.4);
  for (const x of [-9.5, -6, 6, 9.5]) B.box('white', 0.6, 2.4, 0.08, x === -9.5 || x === 9.5 ? x * 0.95 : x, 4.2, 0.08, { c: Math.abs(x) > 7 ? '#16a34a' : '#facc15', ao: false });
  B.box('door', 2.4, 3.2, 0.14, 0, 2.5, 0.05, { tile: [2.4, 3.2], fit: true }); B.box('gold', 2.9, 0.3, 0.2, 0, 4.2, 0.1);
  for (let x = -5; x <= 5.01; x += 2) { B.box('quartz', 0.8, 6, 0.8, x, 3.9, 1.6); B.box('gold', 1.1, 0.3, 1.1, x, 6.95, 1.6); B.box('gold', 1.1, 0.3, 1.1, x, 1.05, 1.6); }
  B.box('quartz', 12.5, 0.9, 2.4, 0, 7.5, 1.2);
  [11, 8.4, 5.8, 3.2].forEach((w, i) => B.box(i % 2 ? 'gold' : 'quartz', w, 0.6, 2.2, 0, 8.25 + i * 0.6, 1.2));
  for (const sx of [-1, 1]) { B.box('quartz', 3.4, 10, 3.4, sx * 10.2, 5.9, -4); B.box('gold', 3.8, 0.4, 3.8, sx * 10.2, 11.1, -4); B.box('gold', 2, 1.2, 2, sx * 10.2, 11.9, -4); windowAt(B, sx * 10.2, 8.6, -2.26, 'z', 1.2, 1.6); }
  [[7, 1.2], [5.6, 1.1], [4.2, 1], [2.6, 1.2]].forEach(([w, h], i) => B.box(i === 3 ? 'gold' : i % 2 ? 'gold' : 'quartz', w, h, w, 0, 11.6 + [0, 1.15, 2.2, 3.3][i], -4.3));
  B.box('metal', 0.18, 6, 0.18, 0, 18.5, -4.3, { c: '#e5e7eb' });
  B.at(0, 0, 0, 0);
  const f1 = makeFlag(4.4, 3); f1.position.set(cx + 0.1, y0 + 20.2, cz - 4.3); flags.push(f1);
  for (const sx of [-1, 1]) { const f = makeFlag(2.4, 1.6); f.position.set(cx + sx * 4.5 + 0.1, y0 + 6.2, cz + 11); flags.push(f); }
}

export class World {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.1;
    this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(55, 1, 0.5, 1400); this.clock = new THREE.Clock();
    this.input = { x: 0, z: 0 }; this.yaw = Math.PI * 0.25; this.camDist = 22; this.camPitch = 0.62;
    this.mode = 'orbit'; this.npcs = []; this.labels = []; this.obstacles = []; this.lotObs = {}; this.player = null; this.driving = false;
    this.quality = 'alta'; this.cycle = false; this.tod = 0.4; this.anims = []; this.flags = [];
    this.setQuality('alta');
    window.addEventListener('resize', () => this.resize()); this.resize();
    this.renderer.setAnimationLoop(() => { if (!this.paused) this.tick(); });
  }
  setQuality(q) {
    this.quality = q; const dpr = window.devicePixelRatio || 1;
    this.renderer.setPixelRatio(q === 'alta' ? Math.min(dpr, 2) : Math.min(dpr, 1.25));
    this.renderer.shadowMap.enabled = q === 'alta';
    Object.values(MATS).forEach(m => m.needsUpdate = true); Object.values(AVM).forEach(m => m.needsUpdate = true);
    if (this.sun) this.sun.castShadow = q === 'alta'; this.resize();
  }
  setDayNight(on) { this.cycle = on; if (!on) this.tod = 0.4; }
  setTimeOfDay(t) { this.tod = t; this.cycle = false; }
  resize() { const w = window.innerWidth, h = window.innerHeight; this.renderer.setSize(w, h, false); this.camera.aspect = w / h; this.camera.fov = w < h ? 70 : 55; this.camDist = w < h ? 26 : 22; this.camPitch = w < h ? 0.8 : 0.62; this.camera.updateProjectionMatrix(); }
  build(city, side, cs) {
    const r = rng(city + side); this.r = r; this.side = side; this.cs = cs;
    const sc = this.scene; sc.traverse(o => { if (o.isMesh && o.geometry && !Object.values(AG).includes(o.geometry)) o.geometry.dispose(); });
    while (sc.children.length) sc.remove(sc.children[0]);
    Object.assign(this, { npcs: [], labels: [], obstacles: [], lotObs: {}, player: null, vehicle: null, marker: null, driving: false, anims: [], flags: [], trash: [], planted: [], lotGroups: {}, blockBases: {}, lotLabels: {} });
    const norte = side === 'norte', hi = this.quality === 'alta', stage = cs.stage, obras = new Set(cs.obras || []);
    this.stage = stage; this.obrasDone = obras;
    this.sky = makeSky(); sc.add(this.sky);
    sc.fog = new THREE.Fog('#cfe6fb', hi ? 110 : 80, hi ? 380 : 260);
    this.hemi = new THREE.HemisphereLight('#dcecff', '#9c8b62', 1.25); sc.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff1d6', 2.7); this.sun.castShadow = hi;
    this.sun.shadow.mapSize.set(2048, 2048); const s = this.sun.shadow.camera; s.left = s.bottom = -70; s.right = s.top = 70; s.near = 1; s.far = 400;
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.04; sc.add(this.sun); sc.add(this.sun.target);
    const B = new Builder(), F = new Builder();
    const lawnTint = stage >= 3 ? '#ffffff' : stage >= 1 ? '#eef5c8' : '#e3e2a0';
    B.box('grass', 1000, 0.2, 1000, 0, -0.1, 0, { tile: 2, ao: false, c: stage >= 2 ? '#ffffff' : '#ecebb0' });
    // ruas
    const span = N * CELL + ROAD;
    for (let i = 0; i <= N; i++) {
      const c = -HALF + i * CELL;
      B.box('asphalt', span, 0.06, ROAD, 0, 0.03, c, { tile: 2, ao: false });
      for (let j = 0; j < N; j++) { const z = -HALF + CELL / 2 + j * CELL; B.box('asphalt', ROAD, 0.06, CELL - ROAD, c, 0.031, z, { tile: 2, ao: false }); }
      if (stage >= 1) {
        for (let j = 0; j < N; j++) { const m = -HALF + CELL / 2 + j * CELL; for (let k = -CELL / 2 + ROAD / 2 + 2.5; k < CELL / 2 - ROAD / 2 - 1.5; k += 5) { B.box('white', 2.4, 0.02, 0.22, m + k, 0.07, c, { c: '#facc15', ao: false }); B.box('white', 0.22, 0.02, 2.4, c, 0.07, m + k, { c: '#facc15', ao: false }); } }
        for (let j = 0; j <= N; j++) { const z = -HALF + j * CELL; for (let q = -3; q <= 3; q++) { B.box('white', 0.5, 0.02, 2.2, c + q, 0.075, z + ROAD / 2 + 1.4, { c: '#f1f5f9', ao: false }); B.box('white', 2.2, 0.02, 0.5, c + ROAD / 2 + 1.4, 0.075, z + q, { c: '#f1f5f9', ao: false }); } }
      }
      if (stage < 2) for (let k = 0; k < 6; k++) { const a = (r() - 0.5) * span; const w = 0.8 + r() * 1.6; B.box('asphalt', w, 0.02, w * (0.5 + r()), r() > 0.5 ? a : c + (r() - 0.5) * 5, 0.065, r() > 0.5 ? c + (r() - 0.5) * 5 : a, { c: '#6b6f78', ao: false }); }
    }
    const lamps = stage >= 2 || obras.has('iluminacao'), allPaved = stage >= 4 || obras.has('calcadas');
    this.lots = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const [cx, cz] = blockCenter(i, j), key = `${i},${j}`;
      this.setBlockBase(key, allPaved || (cs.paved || []).includes(key), lawnTint);
      if (lamps) for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.lampPost(B, cx + dx * (BLOCK / 2 - 0.6), cz + dz * (BLOCK / 2 - 0.6));
      if (stage >= 3 && key !== SPECIAL.palace) for (const [dx, dz] of [[-1, -1], [1, 1]]) { B.box('leaves', 2, 0.6, 1, cx + dx * 10.5, LAWN_Y + 0.3, cz + dz * 12, { c: '#4f9a3a' }); B.box('white', 0.3, 0.3, 0.3, cx + dx * 10.5, LAWN_Y + 0.7, cz + dz * 12, { c: '#f472b6', ao: false }); }
      if (key === SPECIAL.palace) { buildPalace(B, cx, cz, this.flags); this.palacePos = new THREE.Vector3(cx, 0, cz); this.obstacles.push({ minX: cx - 12, maxX: cx + 12, minZ: cz - 8.6, maxZ: cz + 2.2 }); continue; }
      if (key === SPECIAL.obra) { this.obraSite = this.buildObra(B, cx, cz); continue; }
      if (key === SPECIAL.plaza) { if (obras.has('praca') || stage >= 4) this.buildPlaza(B, cx, cz); else { B.box('dirt', 22, 0.06, 22, cx, LAWN_Y + 0.03, cz, { tile: 2, ao: false, c: '#b08a6a' }); B.at(cx, LAWN_Y, cz); weeds(B, r, 30, 20); B.at(0, 0, 0); } continue; }
      if (key === SPECIAL.park) {
        const full = obras.has('parque');
        for (let k = 0; k < (full ? 12 : 4); k++) addTree(B, norte && r() > 0.4 ? (r() > 0.5 ? 'palm' : 'ipe') : (r() > 0.5 ? 'oak' : 'pine'), cx + (r() - 0.5) * 20, cz + (r() - 0.5) * 20, r, 0.9 + r() * 0.3, LAWN_Y);
        if (full) { B.box('sand', 13, 0.1, 9, cx, LAWN_Y + 0.02, cz, { tile: 2, ao: false }); B.box('water', 11, 0.1, 7, cx, LAWN_Y + 0.06, cz, { tile: 2, ao: false }); }
        else { B.at(cx, LAWN_Y, cz); weeds(B, r, 40, 22); B.at(0, 0, 0); }
        continue;
      }
      for (const [dx, dz, rot] of [[-6.5, -6.5, Math.PI], [6.5, -6.5, Math.PI], [-6.5, 6.5, 0], [6.5, 6.5, 0]]) this.lots.push({ x: cx + dx, z: cz + dz, rot, key });
    }
    this.lots.sort((a, b) => Math.hypot(a.x, a.z) - Math.hypot(b.x, b.z) || a.x - b.x || a.z - b.z);
    this.lots.forEach((lot, idx) => { lot.idx = idx; this.setLot(idx, (cs.lots || {})[idx], false); });
    // lixo (determinístico, some quando limpo)
    const tr = rng(city + 'lixo'), cleaned = new Set(cs.cleaned || []);
    this.trashSpots = [];
    for (let k = 0; k < 44; k++) {
      const i = (tr() * N) | 0, j = (tr() * N) | 0, [cx, cz] = blockCenter(i, j); const key = `${i},${j}`;
      const side4 = (tr() * 4) | 0, along = (tr() - 0.5) * 22; const e = BLOCK / 2 - 0.9;
      const [x, z] = [[along, -e], [along, e], [-e, along], [e, along]][side4];
      const g = trashGroup(tr); if (key === SPECIAL.palace) continue;
      this.trashSpots.push(k); if (cleaned.has(k)) continue;
      g.position.set(cx + x, LAWN_Y - 0.02, cz + z); sc.add(g); this.trash.push({ k, g, x: cx + x, z: cz + z });
    }
    // árvores plantadas
    for (const [x, z, kind] of cs.trees || []) this.plantTree(x, z, kind, false);
    // arredores
    for (let k = 0; k < (hi ? 100 : 55); k++) {
      const a = r() * Math.PI * 2, d = HALF + 14 + r() * 70; const x = Math.cos(a) * d, z = Math.sin(a) * d;
      if (norte && (x > HALF + 12 || z < -HALF - 8)) continue;
      addTree(F, norte ? (r() > 0.35 ? 'palm' : r() > 0.5 ? 'ipe' : 'oak') : (r() > 0.45 ? 'pine' : r() > 0.2 ? 'oak' : 'ipe'), x, z, r, 0.9 + r() * 0.5, 0);
    }
    for (let f = 0; f < 4; f++) { // plantações
      const a = (f / 4) * Math.PI * 2 + 0.6, d = HALF + 30, fx = Math.cos(a) * d, fz = Math.sin(a) * d; if (norte && (fx > HALF + 12 || fz < -HALF - 8)) continue;
      const crop = ['#4caf50', '#facc15', '#65a30d', '#16a34a'][f];
      for (let k = 0; k < 9; k++) { F.box('dirt', 18, 0.3, 1, fx, 0.15, fz - 8 + k * 2, { tile: 1, c: '#8b5a3c' }); for (let q = 0; q < 12; q++) F.box('leaves', 0.6, 0.6 + (f === 1 ? 0.8 : 0), 0.6, fx - 8 + q * 1.45, 0.55, fz - 8 + k * 2, { c: crop }); }
    }
    if (norte) {
      F.box('sand', 34, 0.2, 700, HALF + 30, 0.0, 0, { tile: 2, ao: false }); F.box('water', 500, 0.2, 900, HALF + 297, -0.02, 0, { tile: 3, ao: false });
      F.box('sand', 900, 0.2, 6, 0, 0.0, -HALF - 14, { tile: 2, ao: false }); F.box('water', 900, 0.2, 18, 0, 0.02, -HALF - 26, { tile: 3, ao: false }); F.box('sand', 900, 0.2, 5, 0, 0.0, -HALF - 37.5, { tile: 2, ao: false });
      for (let k = 0; k < 22; k++) addTree(F, 'palm', HALF + 20 + r() * 22, -280 + k * 26 + r() * 10, r, 1 + r() * 0.3, 0.1);
      if (stage >= 3) for (let k = 0; k < 4; k++) { const bx = HALF + 70 + r() * 80, bz = (r() - 0.5) * 200; F.box('planks', 2.2, 0.7, 5, bx, 0.35, bz, { c: ['#dc2626', '#2563eb', '#f8fafc', '#facc15'][k] }); F.box('planks', 0.15, 3, 0.15, bx, 2, bz); }
    } else if (stage >= 4) {
      for (let k = 0; k < (hi ? 30 + stage * 4 : 20); k++) { const a = r() * Math.PI * 2, d = HALF + 85 + r() * 90; this.tower(F, Math.cos(a) * d, Math.sin(a) * d, 30 + r() * 20 * stage, r); }
    }
    if (stage >= 3) for (let k = 0; k < 30; k++) { const i = Math.floor(r() * (N + 1)); const c = -HALF + i * CELL; const along = (r() - 0.5) * N * CELL; const off = c + ROAD / 2 + 0.9; if (Math.abs(((along + HALF) % CELL + CELL) % CELL) < ROAD) continue; if (r() > 0.5) addTree(B, 'oak', off, along, r, 0.55); else addTree(B, 'oak', along, off, r, 0.55); }
    sc.add(B.build(hi, true)); sc.add(F.build(false, true));
    this.flags.forEach(f => sc.add(f));
    this.clouds = []; const cr = rng(7);
    for (let k = 0; k < (hi ? 16 : 8); k++) { const c = makeCloud(cr); c.position.set((cr() - 0.5) * 900, 80 + cr() * 50, (cr() - 0.5) * 900); sc.add(c); this.clouds.push(c); }
    this.carsTraffic = [];
    const nCars = Math.min(12, Math.max(0, stage - 2) * 3);
    const kinds = ['popular', 'suv', 'taxi', 'azul', 'verde'];
    for (let k = 0; k < nCars; k++) { const car = buildVehicle(kinds[k % kinds.length]); sc.add(car); this.carsTraffic.push({ m: car, ...this.randomRoadPath(r, 1.4) }); }
    const mayor = cs.mayor || '';
    this.palaceLabel = makeLabel(`🏛️ Palácio do Prefeito @${mayor}`, { bg: '#2fb14b', fg: '#fff', scale: 1.3 });
    this.palaceLabel.position.set(this.palacePos.x, 24, this.palacePos.z - 4); sc.add(this.palaceLabel);
    this.applyTime(true);
  }
  setBlockBase(key, paved, lawnTint) {
    const [i, j] = key.split(',').map(Number), [cx, cz] = blockCenter(i, j);
    if (this.blockBases[key]) { this.scene.remove(this.blockBases[key]); this.blockBases[key].traverse(m => m.geometry?.dispose()); }
    const B = new Builder();
    B.box(paved ? 'sidewalk' : 'dirt', BLOCK, 0.25, BLOCK, cx, 0.125, cz, { tile: 2, ao: false, c: paved ? '#ffffff' : '#c9a27e' });
    B.box('grass', BLOCK - 2.4, 0.05, BLOCK - 2.4, cx, 0.27, cz, { tile: 2, ao: false, c: lawnTint || this._lawn || '#ffffff' });
    if (paved) for (const [dx, dz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) B.box('stone', dx ? 0.3 : BLOCK, 0.32, dz ? 0.3 : BLOCK, cx + dx * (BLOCK / 2 - 0.15), 0.16, cz + dz * (BLOCK / 2 - 0.15), { c: '#9ca3af', ao: false });
    this._lawn = lawnTint || this._lawn;
    const g = B.build(false, true); this.scene.add(g); this.blockBases[key] = g; this.blockBases[key].userData.paved = paved;
  }
  isPaved(key) { return !!this.blockBases[key]?.userData.paved; }
  setLot(idx, info, animate = true) {
    const lot = this.lots[idx]; if (!lot) return;
    if (this.lotGroups[idx]) { this.scene.remove(this.lotGroups[idx]); }
    if (this.lotLabels[idx]) { this.scene.remove(this.lotLabels[idx]); this.labels = this.labels.filter(l => l.s !== this.lotLabels[idx]); }
    const g = buildLot(info, rng('lot' + idx + (info?.type || ''))); g.position.set(lot.x, LAWN_Y - 0.03, lot.z); g.rotation.y = lot.rot; this.scene.add(g); this.lotGroups[idx] = g;
    if (info?.vip) { const y = vipYard(); y.position.y = -0.02; g.add(y); g.userData.vipYard = true; }
    g.traverse(m => { if (m.isMesh) m.castShadow = this.quality === 'alta'; });
    const fp = g.userData.footprint; delete this.lotObs[idx];
    if (fp) { const off = lot.rot === 0 ? -1 : 1; this.lotObs[idx] = { minX: lot.x - fp[0] / 2, maxX: lot.x + fp[0] / 2, minZ: lot.z - fp[1] / 2 + off * 0.5, maxZ: lot.z + fp[1] / 2 + off * 0.5 }; }
    const st = info?.stage || 0, tall = info?.type === 'mansao' ? 13.5 : info?.type === 'sobrado' || info?.type === 'casa_piscina' ? 11 : 8;
    let lb;
    if (info?.me) lb = makeLabel((st >= 4 ? '⭐ SUA CASA' : `⭐ SEU TERRENO • ${['', 'Alicerce', 'Paredes', 'Telhado'][st] || 'Vazio'}`) + (info.m2 ? ` • ${info.m2} m²` : ''), { bg: '#ffc425', fg: '#1b2340', scale: 1.15, vip: !!info.vip });
    else if (info?.owner) lb = makeLabel(`🏠 @${info.owner}`, { bg: '#fff7e6', fg: '#1b2340', scale: 0.75 });
    else lb = makeLabel('🪧 Terreno livre', { bg: '#a7693e', fg: '#fff', scale: 0.7 });
    lb.position.set(lot.x, st >= 4 ? tall : st >= 2 ? 6 : 3, lot.z); this.scene.add(lb); this.lotLabels[idx] = lb; this.labels.push({ s: lb, d: info?.me ? 999 : 30 });
    if (info?.me) {
      if (!this.marker) { const MB = new Builder(); MB.box('white', 0.9, 0.5, 0.9, 0, 0.9, 0, { c: '#facc15', ao: false }); MB.box('white', 0.55, 0.45, 0.55, 0, 0.45, 0, { c: '#facc15', ao: false }); this.marker = MB.build(false); this.marker.children.forEach(m => { m.material = plainMat('#facc15', { emissive: '#f59e0b', emissiveIntensity: 0.7 }); }); this.scene.add(this.marker); }
      this.marker.position.set(lot.x, lb.position.y + 1.2, lot.z); this.marker.userData.y = lb.position.y + 1.2;
    }
    if (animate) { this.anims.push({ g, t: 0, dur: 0.7, type: 'grow' }); this.poof(lot.x, lot.z, 18); }
  }
  poof(x, z, n = 12, color = '#e7e5e4') {
    for (let k = 0; k < n; k++) {
      const m = new THREE.Mesh(AG.cube, plainMat(color)); m.scale.setScalar(0.3 + Math.random() * 0.4); m.position.set(x + (Math.random() - 0.5) * 4, 0.5 + Math.random() * 2, z + (Math.random() - 0.5) * 4); this.scene.add(m);
      this.anims.push({ g: m, t: 0, dur: 0.8 + Math.random() * 0.4, type: 'puff', v: new THREE.Vector3((Math.random() - 0.5) * 4, 3 + Math.random() * 3, (Math.random() - 0.5) * 4) });
    }
  }
  clearTrash(k) { const i = this.trash.findIndex(t => t.k === k); if (i < 0) return; const t = this.trash[i]; this.trash.splice(i, 1); this.anims.push({ g: t.g, t: 0, dur: 0.4, type: 'shrink' }); this.poof(t.x, t.z, 8, '#86efac'); }
  plantTree(x, z, kind = 'oak', animate = true) {
    const B = new Builder(); addTree(B, kind, 0, 0, rng(Math.round(x * 13 + z * 7)), 0.75, 0); const g = B.build(this.quality === 'alta'); g.position.set(x, LAWN_Y, z); this.scene.add(g); this.planted.push({ x, z, g });
    if (animate) { this.anims.push({ g, t: 0, dur: 0.9, type: 'grow' }); this.poof(x, z, 8, '#86efac'); }
  }
  paveBlock(key) { this.setBlockBase(key, true); const [i, j] = key.split(',').map(Number); const [cx, cz] = blockCenter(i, j); this.poof(cx + 12, cz, 10, '#d6d3d1'); this.poof(cx - 12, cz, 10, '#d6d3d1'); }
  nearest(p) {
    let trash = null; for (const t of this.trash) { const d = Math.hypot(t.x - p.x, t.z - p.z); if (!trash || d < trash.d) trash = { k: t.k, d }; }
    let lot = null; for (const l of this.lots) { const d = Math.hypot(l.x - p.x, l.z - p.z); if (!lot || d < lot.d) lot = { idx: l.idx, d }; }
    const i = Math.floor((p.x + HALF) / CELL), j = Math.floor((p.z + HALF) / CELL); let block = null;
    if (i >= 0 && j >= 0 && i < N && j < N) { const [cx, cz] = blockCenter(i, j); if (Math.abs(p.x - cx) < BLOCK / 2 + 1.2 && Math.abs(p.z - cz) < BLOCK / 2 + 1.2) block = `${i},${j}`; }
    const inBlock = block && (() => { const [cx, cz] = blockCenter(i, j); return Math.abs(p.x - cx) < BLOCK / 2 - 0.5 && Math.abs(p.z - cz) < BLOCK / 2 - 0.5; })();
    const nearTree = this.planted.some(t => Math.hypot(t.x - p.x, t.z - p.z) < 2.8);
    const special = block && Object.values(SPECIAL).includes(block);
    const canPlant = inBlock && !special && !nearTree && (!lot || lot.d > 6.8);
    return { trash, lot, block, special, canPlant };
  }
  frontOfLot(idx) { const l = this.lots[idx]; return new THREE.Vector3(l.x + 1.5, 0, l.z + (l.rot === 0 ? 1 : -1) * 8.6); }
  frontOfPalace() { return new THREE.Vector3(this.palacePos.x + 2.5, 0, this.palacePos.z + 15.5); }
  facePoint(target) { const p = this.player.position; this.yaw = Math.atan2(p.x - target.x, p.z - target.z) + 0.3; this.player.rotation.y = this.yaw + Math.PI - 0.3; }
  lampPost(B, x, z) { B.box('metal', 0.18, 4.4, 0.18, x, 2.45, z, { c: '#374151' }); B.box('metal', 0.9, 0.14, 0.14, x, 4.6, z, { c: '#374151', ry: Math.atan2(-x, -z) + Math.PI / 2 }); B.box('lamp', 0.4, 0.3, 0.4, x, 4.45, z, { ao: false }); }
  bench(B, x, z, ry) { B.box('planks', 2.2, 0.15, 0.7, x, 0.75, z, { ry, c: '#c8945a' }); B.box('planks', 2.2, 0.5, 0.12, x + Math.sin(ry) * -0.3, 1.1, z + Math.cos(ry) * -0.3, { ry, c: '#c8945a' }); B.box('metal', 0.12, 0.5, 0.6, x, 0.45, z, { ry, c: '#334155' }); }
  tower(B, x, z, h, r) {
    const w = 10, col = ['#ffffff', '#dbeafe', '#e2e8f0', '#fde68a', '#d1fae5', '#c7d2fe'][(r() * 6) | 0];
    B.box('concrete', w + 0.6, 1.4, w + 0.6, x, 0.7, z); B.box('tower', w, h, w, x, 1.4 + h / 2, z, { tile: 8, c: col, ao: false });
    B.box('concrete', w + 0.4, 0.6, w + 0.4, x, 1.4 + h + 0.3, z);
  }
  buildPlaza(B, cx, cz) {
    B.box('stone', 22, 0.08, 22, cx, LAWN_Y + 0.04, cz, { tile: 2, ao: false, c: '#e7e5e4' });
    B.box('stone', 7, 0.8, 0.7, cx, 0.7, cz + 3.15, { c: '#d6d3d1' }); B.box('stone', 7, 0.8, 0.7, cx, 0.7, cz - 3.15, { c: '#d6d3d1' }); B.box('stone', 0.7, 0.8, 7, cx + 3.15, 0.7, cz, { c: '#d6d3d1' }); B.box('stone', 0.7, 0.8, 7, cx - 3.15, 0.7, cz, { c: '#d6d3d1' });
    B.box('water', 5.6, 0.12, 5.6, cx, 0.95, cz, { tile: 2, ao: false }); B.box('stone', 1, 2.6, 1, cx, 1.6, cz, { c: '#d6d3d1' }); B.box('stone', 2.2, 0.4, 2.2, cx, 2.9, cz, { c: '#d6d3d1' });
    this.fountain = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.7), new THREE.MeshStandardMaterial({ map: TEX.water(), roughness: 0.1, transparent: true, opacity: 0.85 })); this.fountain.position.set(cx, 3.6, cz); this.scene.add(this.fountain);
    this.obstacles.push({ minX: cx - 3.5, maxX: cx + 3.5, minZ: cz - 3.5, maxZ: cz + 3.5 });
    const r = this.r; for (const [dx, dz] of [[-8, 8], [8, 8], [-8, -8], [8, -8]]) addTree(B, this.side === 'norte' ? (r() > 0.5 ? 'palm' : 'ipe') : 'oak', cx + dx, cz + dz, r, 0.85, LAWN_Y);
    for (const [dx, dz, ry] of [[0, 6.2, 0], [0, -6.2, Math.PI], [6.2, 0, Math.PI / 2], [-6.2, 0, -Math.PI / 2]]) this.bench(B, cx + dx, cz + dz, ry);
  }
  buildObra(B, cx, cz) {
    const g = new THREE.Group(); g.position.set(cx, LAWN_Y, cz); this.scene.add(g);
    B.box('dirt', 22, 0.1, 22, cx, LAWN_Y + 0.02, cz, { tile: 2, ao: false });
    for (let i = -10; i <= 10; i += 1) B.box('white', 0.9, 1, 0.12, cx + i, 0.8, cz + 11, { c: i % 2 ? '#f97316' : '#f8fafc', ao: false });
    for (let k = 0; k < 3; k++) B.box('brick', 1.2, 0.6, 1.2, cx - 9 + k * 1.3, 0.6, cz + 8);
    B.box('sand', 2.5, 1.2, 2.5, cx + 8.5, 0.9, cz + 7, { tile: 1 });
    const crane = new THREE.Group(); crane.position.set(8, 0, -8); g.add(crane); const CB = new Builder();
    for (let y = 0; y < 22; y += 2) { CB.box('white', 1.2, 0.15, 0.15, 0, y + 1, 0.55, { c: '#facc15' }); CB.box('white', 1.2, 0.15, 0.15, 0, y + 1, -0.55, { c: '#facc15' }); }
    for (const [x, z] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) CB.box('white', 0.18, 22, 0.18, x, 11, z, { c: '#facc15' });
    CB.box('white', 16, 0.6, 0.8, -6, 22.3, 0, { c: '#facc15' }); CB.box('concrete', 2.5, 1.5, 1.4, 3, 21.8, 0); CB.box('metal', 0.06, 8, 0.06, -12, 18, 0, { c: '#111827' }); CB.box('planks', 1.6, 0.4, 1.6, -12, 14, 0);
    crane.add(CB.build());
    const lb = makeLabel('🏗️ OBRA DA CIDADE', { bg: '#ff8a2a', fg: '#fff', scale: 1.4 }); lb.position.set(0, 26, -1); g.add(lb);
    this.obstacles.push({ minX: cx - 7, maxX: cx + 7, minZ: cz - 8, maxZ: cz + 6 });
    return { g, crane, label: lb, bld: null };
  }
  setObraProgress(p, name) {
    if (!this.obraSite) return; const o = this.obraSite; const pct = Math.round(p * 100);
    if (o.pct === pct && o.name === name) return; o.pct = pct; o.name = name;
    const floors = Math.max(1, Math.round(p * 7)), fh = 3;
    if (o.bld) { o.g.remove(o.bld); o.bld.traverse(m => m.geometry?.dispose()); }
    const B = new Builder();
    for (let f = 0; f < floors; f++) {
      const y = f * fh; B.box('concrete', 12, 0.4, 12, 0, y + 0.2, -1);
      for (const [x, z] of [[-5.6, -6.6], [5.6, -6.6], [-5.6, 4.6], [5.6, 4.6], [0, 4.6], [0, -6.6]]) B.box('concrete', 0.7, fh - 0.4, 0.7, x, y + 0.4 + (fh - 0.4) / 2, z);
      if (f < floors - 1) { B.box('brick', 12, fh - 0.4, 0.4, 0, y + 0.4 + (fh - 0.4) / 2, -6.8); B.box('brick', 0.4, fh - 0.4, 11, -6, y + 0.4 + (fh - 0.4) / 2, -1.3); }
      B.box('planks', 14, 0.12, 1, 0, y + fh - 0.1, 5.6);
    }
    o.bld = B.build(); o.g.add(o.bld);
    o.g.remove(o.label); o.label = makeLabel('🏗️ ' + name + ' ' + pct + '%', { bg: '#ff8a2a', fg: '#fff', scale: 1.4 }); o.label.position.set(0, Math.max(26, floors * fh + 5), -1); o.g.add(o.label);
  }
  setPlayer(look, name) {
    if (this.player) this.scene.remove(this.player);
    this.player = buildAvatar(look); const p = this.playerPos || this.spawn || new THREE.Vector3(); this.player.position.copy(p); this.player.position.y = GY; this.scene.add(this.player);
    const lb = makeLabel((look.mayor ? '👑 ' : '') + '@' + name, { bg: look.mayor ? '#2fb14b' : '#ffc425', fg: look.mayor ? '#fff' : '#1b2340', scale: 0.65, vip: !!look.vip }); lb.position.y = 3.4; this.player.add(lb); this.playerLabel = lb;
    this.mode = 'follow';
    if (this.driving && this.vehicle) this.player.visible = !!this.vehicle.userData.bike;
  }
  setVehicle(type, at) {
    if (this.vehicle) { this.scene.remove(this.vehicle); this.vehicle = null; }
    if (!type) { this.driving = false; return; }
    this.vehicle = buildVehicle(type); this.scene.add(this.vehicle); this.parkAt = at; this.parkVehicle();
  }
  parkVehicle() { if (!this.vehicle || !this.parkAt) return; this.vehicle.position.set(this.parkAt.x - 5.5, 0, this.parkAt.z + 0.5); this.vehicle.rotation.y = Math.PI / 2; }
  toggleDrive() {
    if (!this.vehicle || !this.player) return false; this.driving = !this.driving;
    if (this.driving) { this.player.position.copy(this.vehicle.position); this.player.visible = !!this.vehicle.userData.bike; }
    else { this.player.visible = true; this.player.position.x += 2.6; this.player.position.y = GY; }
    return this.driving;
  }
  spawnNPCs(n, names) {
    const r = this.r; const profs = Object.keys(OUTFITS).filter(p => p !== 'prefeito' && !p.startsWith('lend_'));
    const shirts = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7', '#ec4899', '#f8fafc', '#111827'];
    const skins = ['#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#ffdbac', '#a0522d', '#6b3e26'], hairs = ['#1b120c', '#2b1a10', '#5a3825', '#a0522d', '#e6c27a', '#111111'];
    for (let k = 0; k < n; k++) {
      const av = buildAvatar({ shirt: shirts[(r() * shirts.length) | 0], skin: skins[(r() * skins.length) | 0], hairCol: hairs[(r() * hairs.length) | 0], prof: profs[(r() * profs.length) | 0], face: r() > 0.5 ? 1 : 0 });
      this.scene.add(av); const name = names[k % names.length];
      const lb = makeLabel('@' + name, { scale: 0.6 }); lb.position.y = 3.2; av.add(lb); this.labels.push({ s: lb, d: 28, parent: av });
      this.npcs.push({ m: av, ...this.randomRoadPath(r, 0.25 + r() * 0.15, true), name, pause: 0 });
    }
  }
  randomRoadPath(r, speed, sidewalk = false) {
    const off = sidewalk ? ROAD / 2 + 0.7 : 0; const horiz = r() > 0.5, line = Math.floor(r() * (N + 1)), c = -HALF + line * CELL + (off && r() > 0.5 ? off : -off);
    return { horiz, c, t: (r() - 0.5) * N * CELL, dir: r() > 0.5 ? 1 : -1, speed: speed * 10 };
  }
  collide(p, rad = 0.6) {
    const lim = HALF + ROAD / 2 + 10; p.x = Math.max(-lim, Math.min(lim, p.x)); p.z = Math.max(-lim, Math.min(lim, p.z));
    for (const o of [...this.obstacles, ...Object.values(this.lotObs)]) {
      if (p.x > o.minX - rad && p.x < o.maxX + rad && p.z > o.minZ - rad && p.z < o.maxZ + rad) {
        const dl = p.x - (o.minX - rad), dr = (o.maxX + rad) - p.x, dt = p.z - (o.minZ - rad), db = (o.maxZ + rad) - p.z; const m = Math.min(dl, dr, dt, db);
        if (m === dl) p.x = o.minX - rad; else if (m === dr) p.x = o.maxX + rad; else if (m === dt) p.z = o.minZ - rad; else p.z = o.maxZ + rad;
      }
    }
  }
  applyTime(force = false) {
    const sunY = -Math.cos(this.tod * Math.PI * 2), day = THREE.MathUtils.smoothstep(sunY, -0.18, 0.3), night = 1 - day;
    if (!force && Math.abs((this._lastDay ?? -1) - day) < 0.004) return; this._lastDay = day;
    const u = this.sky?.material.uniforms; const lc = (a, b) => new THREE.Color(a).lerp(new THREE.Color(b), day);
    if (u) { u.top.value.copy(lc('#050b1f', '#3d8ee8')); u.mid.value.copy(lc('#14214a', '#8ec5f5')); u.bot.value.copy(lc('#2a2f55', '#dff0ff')); }
    if (this.scene.fog) this.scene.fog.color.copy(lc('#1a2147', '#cfe6fb'));
    if (this.hemi) this.hemi.intensity = 0.28 + 0.97 * day; if (this.sun) this.sun.intensity = 0.15 + 2.55 * day;
    for (const [k, m] of Object.entries(MATS)) { const d = m.userData.def || {}; if (k === 'tower') m.emissiveIntensity = night * 1.6; else if (k === 'glass') m.emissiveIntensity = night * 0.55; else if (d.base !== undefined) m.emissiveIntensity = d.base + night * (k === 'lamp' ? 2.4 : 1.4); }
    CLOUD_MAT.emissiveIntensity = 0.1 + 0.45 * day; CLOUD_MAT.opacity = 0.5 + 0.43 * day;
  }
  tick() {
    const dt = this.fixedDt || Math.min(this.clock.getDelta(), 0.05); this._t = (this._t || 0) + dt; const t = this._t;
    if (this.cycle) this.tod = (this.tod + dt / 360) % 1; this.applyTime();
    const wt = TEX.water(); wt.offset.x = (t * 0.03) % 1; wt.offset.y = Math.sin(t * 0.4) * 0.05;
    const span = N * CELL / 2;
    for (const n of this.npcs) {
      if (n.pause > 0) { n.pause -= dt; animateAvatar(n.m, 0, dt); continue; }
      n.t += n.dir * n.speed * dt * 0.35; if (Math.abs(n.t) > span) n.dir *= -1;
      if (Math.random() < 0.0015) n.pause = 1.5 + Math.random() * 3; if (Math.random() < 0.0015) n.dir *= -1;
      if (n.horiz) { n.m.position.set(n.t, GY, n.c); n.m.rotation.y = n.dir > 0 ? Math.PI / 2 : -Math.PI / 2; } else { n.m.position.set(n.c, GY, n.t); n.m.rotation.y = n.dir > 0 ? 0 : Math.PI; }
      animateAvatar(n.m, 0.45, dt);
    }
    for (const c of this.carsTraffic || []) {
      c.t += c.dir * c.speed * dt; if (Math.abs(c.t) > span + 6) c.t = -c.dir * (span + 5);
      if (c.horiz) { c.m.position.set(c.t, 0.06, c.c + (c.dir > 0 ? 1.9 : -1.9)); c.m.rotation.y = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2; } else { c.m.position.set(c.c + (c.dir > 0 ? -1.9 : 1.9), 0.06, c.t); c.m.rotation.y = c.dir > 0 ? 0 : Math.PI; }
    }
    for (const c of this.clouds || []) { c.position.x += dt * 2.2; if (c.position.x > 480) c.position.x = -480; }
    if (this.fountain) { this.fountain.position.y = 3.6 + Math.sin(t * 3) * 0.12; this.fountain.scale.y = 1 + Math.sin(t * 6) * 0.15; }
    for (const f of this.flags) { const pa = f.geometry.attributes.position; for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setZ(i, Math.sin(t * 4 + x * 1.6) * 0.12 * x); } pa.needsUpdate = true; }
    if (this.marker) { this.marker.position.y = this.marker.userData.y + Math.sin(t * 3) * 0.4; this.marker.rotation.y = t * 1.5; }
    if (this.obraSite) this.obraSite.crane.rotation.y = Math.sin(t * 0.3) * 0.8;
    for (let i = this.anims.length - 1; i >= 0; i--) {
      const a = this.anims[i]; a.t += dt; const k = Math.min(1, a.t / a.dur);
      if (a.type === 'grow') { const e = 1 - Math.pow(1 - k, 3); const s = k < 1 ? 0.2 + 0.8 * e + Math.sin(k * Math.PI) * 0.12 : 1; a.g.scale.set(1, s, 1); }
      else if (a.type === 'shrink') { a.g.scale.setScalar(Math.max(0.001, 1 - k)); if (k >= 1) this.scene.remove(a.g); }
      else if (a.type === 'puff') { a.v.y -= 9 * dt; a.g.position.addScaledVector(a.v, dt); a.g.scale.multiplyScalar(0.985); if (k >= 1) this.scene.remove(a.g); }
      if (k >= 1) this.anims.splice(i, 1);
    }
    const cam = this.camera; let focus;
    if (this.mode === 'follow' && this.player) {
      const { x, z } = this.input; const mag = Math.min(1, Math.hypot(x, z)); const actor = this.driving ? this.vehicle : this.player;
      if (mag > 0.05) {
        const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)), right = new THREE.Vector3(-fwd.z, 0, fwd.x);
        const dir = fwd.multiplyScalar(-z).add(right.multiplyScalar(x)).normalize();
        const sp = (mag > 0.85 ? 10.5 : 8) * (this.speedMul || 1) * (this.driving ? (this.vehicleSpeed || 2) : 1);
        actor.position.addScaledVector(dir, sp * mag * dt); this.collide(actor.position, this.driving ? 1.4 : 0.6);
        const target = Math.atan2(dir.x, dir.z); let d = target - actor.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); actor.rotation.y += d * Math.min(1, dt * 12);
        if (this.driving) { this.player.position.copy(actor.position); this.player.rotation.y = actor.rotation.y; this.player.position.y = this.vehicle.userData.bike ? 0.35 : 0; }
      }
      animateAvatar(this.player, this.driving ? (this.vehicle?.userData.bike && mag > 0.05 ? 0.3 : 0) : mag, dt);
      this.playerPos = actor.position.clone();
      const tgt = actor.position.clone().add(new THREE.Vector3(0, 2, 0)); focus = tgt; const d = this.camDist * (this.driving ? 1.3 : 1);
      const want = new THREE.Vector3(tgt.x + Math.sin(this.yaw) * Math.cos(this.camPitch) * d, tgt.y + Math.sin(this.camPitch) * d, tgt.z + Math.cos(this.yaw) * Math.cos(this.camPitch) * d);
      cam.position.lerp(want, Math.min(1, dt * 6)); cam.lookAt(tgt);
    } else if (this.mode === 'cine' && this.cine) { this.cine(cam, t, dt); focus = new THREE.Vector3(); }
    else { this.yaw += dt * 0.08; const d = 150; focus = new THREE.Vector3(); cam.position.set(Math.sin(this.yaw) * d, 75, Math.cos(this.yaw) * d); cam.lookAt(0, 0, 0); }
    if (this.sun) { const sa = this.tod * Math.PI * 2; this.sun.position.copy(focus).add(new THREE.Vector3(Math.sin(sa) * 70 + 40, Math.max(20, -Math.cos(sa) * 110), 50)); this.sun.target.position.copy(focus); }
    if (this.sky) this.sky.position.copy(cam.position);
    const cp = this.mode === 'follow' && this.playerPos ? this.playerPos : cam.position;
    for (const l of this.labels) { const wp = l.parent ? l.parent.position : l.s.position; l.s.visible = Math.hypot(wp.x - cp.x, wp.z - cp.z) < l.d; }
    this.renderer.render(this.scene, cam);
  }
}
