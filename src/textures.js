// ===== Texturas pixel-art procedurais (estilo Minecraft) =====
import * as THREE from 'three';

function R(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function hex2rgb(h) { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
function sh(h, f) { const [r, g, b] = hex2rgb(h); return `rgb(${Math.min(255, r * f) | 0},${Math.min(255, g * f) | 0},${Math.min(255, b * f) | 0})`; }

const cache = {};
export function canvasTex(key, w, h, draw, { nearest = true, mip = true } = {}) {
  if (cache[key]) return cache[key];
  const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
  let seed = 0; for (const ch of key) seed = Math.imul(seed ^ ch.charCodeAt(0), 2654435761);
  draw(x, R(seed), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (nearest) { t.magFilter = THREE.NearestFilter; t.minFilter = mip ? THREE.NearestMipmapLinearFilter : THREE.NearestFilter; }
  t.anisotropy = 4; t.generateMipmaps = mip;
  return (cache[key] = t);
}
const P = (x, X, Y, col) => { x.fillStyle = col; x.fillRect(X, Y, 1, 1); };
function noise(x, r, w, h, base, lo, hi) { for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) P(x, i, j, sh(base, lo + r() * (hi - lo))); }

export const TEX = {
  grass: () => canvasTex('grass', 16, 16, (x, r) => { noise(x, r, 16, 16, '#6abf45', 0.84, 1.1); for (let k = 0; k < 14; k++) P(x, r() * 16 | 0, r() * 16 | 0, r() > 0.5 ? '#4f9a33' : '#8ad35e'); }),
  sand: () => canvasTex('sand', 16, 16, (x, r) => { noise(x, r, 16, 16, '#ecdba8', 0.9, 1.06); for (let k = 0; k < 10; k++) P(x, r() * 16 | 0, r() * 16 | 0, '#d6c08a'); }),
  dirt: () => canvasTex('dirt', 16, 16, (x, r) => { noise(x, r, 16, 16, '#8b5a3c', 0.8, 1.12); for (let k = 0; k < 10; k++) P(x, r() * 16 | 0, r() * 16 | 0, '#6b4429'); }),
  asphalt: () => canvasTex('asphalt', 16, 16, (x, r) => { noise(x, r, 16, 16, '#474b52', 0.85, 1.12); for (let k = 0; k < 8; k++) P(x, r() * 16 | 0, r() * 16 | 0, '#62676f'); }),
  sidewalk: () => canvasTex('sidewalk', 16, 16, (x, r) => { noise(x, r, 16, 16, '#d2d2cc', 0.93, 1.05); for (let i = 0; i < 16; i++) { P(x, i, 0, '#a8a8a2'); P(x, 0, i, '#a8a8a2'); P(x, i, 8, '#b4b4ae'); P(x, 8, i, '#b4b4ae'); } }),
  brick: () => canvasTex('brick', 16, 16, (x, r) => { for (let y = 0; y < 16; y++) { const row = y >> 2; for (let i = 0; i < 16; i++) { const off = row % 2 ? 4 : 0; const mortar = y % 4 === 3 || (i + off) % 8 === 7; P(x, i, y, mortar ? sh('#d4cabb', 0.95 + r() * 0.08) : sh('#b5523a', 0.82 + r() * 0.25)); } } }),
  planks: () => canvasTex('planks', 16, 16, (x, r) => { for (let y = 0; y < 16; y++) { const row = y >> 2, tone = 0.88 + ((row * 37) % 5) * 0.05; for (let i = 0; i < 16; i++) { const seam = y % 4 === 3 || i === (row * 5 + 3) % 16; P(x, i, y, seam ? '#6e4a28' : sh('#b8874f', tone * (0.94 + r() * 0.1))); } } }),
  stone: () => canvasTex('stone', 16, 16, (x, r) => { for (let i = 0; i < 16; i += 2) for (let j = 0; j < 16; j += 2) { const f = 0.75 + r() * 0.4; for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) P(x, i + a, j + b, sh('#8f9296', f * (0.95 + r() * 0.08))); } for (let k = 0; k < 18; k++) P(x, r() * 16 | 0, r() * 16 | 0, '#5d6064'); }),
  plaster: () => canvasTex('plaster', 16, 16, (x, r) => noise(x, r, 16, 16, '#f2ede6', 0.94, 1.03)),
  quartz: () => canvasTex('quartz', 16, 16, (x, r) => { noise(x, r, 16, 16, '#f7f5f0', 0.96, 1.02); for (let i = 0; i < 16; i++) { P(x, i, 0, '#e0dcd3'); P(x, 0, i, '#e0dcd3'); } }),
  roof: () => canvasTex('roof', 16, 16, (x, r) => { for (let y = 0; y < 16; y++) { const row = y >> 2; for (let i = 0; i < 16; i++) { const edge = y % 4 === 3, seam = (i + (row % 2) * 2) % 4 === 0; P(x, i, y, edge ? '#7d7d7d' : seam ? '#a9a9a9' : sh('#dcdcdc', 0.92 + r() * 0.1 - (y % 4) * 0.03)); } } }),
  leaves: () => canvasTex('leaves', 16, 16, (x, r) => { noise(x, r, 16, 16, '#d8d8d8', 0.7, 1.15); for (let k = 0; k < 20; k++) P(x, r() * 16 | 0, r() * 16 | 0, r() > 0.5 ? '#8e8e8e' : '#ffffff'); }),
  log: () => canvasTex('log', 16, 16, (x, r) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) P(x, i, j, sh(i % 4 === 0 ? '#4e3520' : '#6b4a2b', 0.88 + r() * 0.2)); }),
  palmlog: () => canvasTex('palmlog', 16, 16, (x, r) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) P(x, i, j, sh(j % 4 === 0 ? '#7d5a3a' : '#a88158', 0.9 + r() * 0.15)); }),
  glass: () => canvasTex('glass', 16, 16, (x, r) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) { const fr = i === 0 || j === 0 || i === 15 || j === 15 || i === 7 || i === 8 || j === 7; const hl = (i - j === 3 || i - j === 4 || i - j === -6) && !fr; P(x, i, j, fr ? '#f1f1ef' : hl ? '#d9eefc' : sh('#7fb6e2', 0.85 + j * 0.015 + r() * 0.05)); } }),
  door: () => canvasTex('door', 16, 32, (x, r) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 32; j++) { const border = i < 1 || i > 14 || j < 1; const panel = (i > 2 && i < 13) && ((j > 2 && j < 13) || (j > 15 && j < 29)); P(x, i, j, border ? '#4f2e14' : panel ? sh('#8a5a32', 0.95 + r() * 0.1) : sh('#7a4a26', 0.9 + r() * 0.1)); } x.fillStyle = '#f5c542'; x.fillRect(12, 16, 2, 2); }),
  concrete: () => canvasTex('concrete', 16, 16, (x, r) => noise(x, r, 16, 16, '#a6aab0', 0.9, 1.06)),
  carpaint: () => canvasTex('carpaint', 16, 16, (x, r) => { noise(x, r, 16, 16, '#f2f2f2', 0.97, 1.02); for (let i = 0; i < 16; i++) P(x, i, 0, '#ffffff'); }),
  tire: () => canvasTex('tire', 16, 16, (x, r) => { noise(x, r, 16, 16, '#222225', 0.85, 1.1); x.fillStyle = '#5f6368'; x.fillRect(4, 4, 8, 8); x.fillStyle = '#b5bac0'; x.fillRect(5, 5, 6, 6); x.fillStyle = '#7d828a'; x.fillRect(7, 7, 2, 2); }),
  metal: () => canvasTex('metal', 16, 16, (x, r) => noise(x, r, 16, 16, '#b9bdc3', 0.92, 1.06)),
  white: () => canvasTex('white', 4, 4, (x) => { x.fillStyle = '#fff'; x.fillRect(0, 0, 4, 4); }),
  gold: () => canvasTex('gold', 16, 16, (x, r) => { noise(x, r, 16, 16, '#e8b923', 0.85, 1.12); for (let k = 0; k < 10; k++) P(x, r() * 16 | 0, r() * 16 | 0, '#fff1a8'); }),
  water: () => canvasTex('water', 32, 32, (x, r) => { for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) { const w = Math.sin(i * 0.4 + Math.sin(j * 0.3) * 2) > 0.85; P(x, i, j, w ? '#9ad6f7' : sh('#2f86cf', 0.9 + r() * 0.15)); } }),
  hair: () => canvasTex('hair', 16, 16, (x, r) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) P(x, i, j, sh(i % 3 === 0 ? '#a8a8a8' : '#d8d8d8', 0.9 + r() * 0.15)); }),
  plate: () => canvasTex('plate', 32, 16, (x) => { x.fillStyle = '#fff'; x.fillRect(0, 0, 32, 16); x.fillStyle = '#1f4fa3'; x.fillRect(0, 0, 32, 4); x.fillStyle = '#111'; x.font = 'bold 9px monospace'; x.textBaseline = 'top'; x.fillText('BRA2E26', 1, 5); x.strokeStyle = '#111'; x.strokeRect(0.5, 0.5, 31, 15); }, { mip: false }),
  tower: () => canvasTex('tower', 64, 64, (x, r) => { for (let i = 0; i < 64; i++) for (let j = 0; j < 64; j++) { const wi = i % 8, wj = j % 8; const win = wi > 0 && wi < 7 && wj > 1 && wj < 7; const hl = win && (wi - wj === 0 || wi - wj === 1); P(x, i, j, win ? (hl ? '#cfe6f7' : sh('#5b86ad', 0.85 + (wj / 8) * 0.25 + r() * 0.05)) : sh('#e0e3e8', 0.93 + r() * 0.06)); } }),
  towerLit: () => canvasTex('towerLit', 64, 64, (x, r) => { x.fillStyle = '#000'; x.fillRect(0, 0, 64, 64); for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if (r() < 0.38) { x.fillStyle = r() > 0.3 ? '#ffd27a' : '#fff4d6'; x.fillRect(i * 8 + 1, j * 8 + 2, 6, 5); } }),
};

// ---------- texturas do avatar (atlas: metade esquerda = frente, direita = resto) ----------
export function faceTex(skin, hairCol, style = 0) {
  return canvasTex(`face_${skin}_${hairCol}_${style}`, 32, 16, (x, r) => {
    noise(x, r, 32, 16, skin, 0.97, 1.03);
    // frente
    x.fillStyle = hairCol; x.fillRect(0, 0, 16, 3); x.fillRect(0, 3, 2, 3); x.fillRect(14, 3, 2, 3);
    x.fillStyle = '#fff'; x.fillRect(4, 6, 3, 3); x.fillRect(9, 6, 3, 3);
    x.fillStyle = '#1b1b1b'; x.fillRect(5, 7, 2, 2); x.fillRect(9, 7, 2, 2);
    x.fillStyle = '#ffffff'; x.fillRect(5, 7, 1, 1); x.fillRect(9, 7, 1, 1);
    x.fillStyle = sh(hairCol, 0.9); x.fillRect(4, 4, 3, 1); x.fillRect(9, 4, 3, 1);
    x.fillStyle = '#5a2d1e'; x.fillRect(6, 11, 4, 1); x.fillRect(5, 10, 1, 1); x.fillRect(10, 10, 1, 1);
    if (style === 1) { x.fillStyle = '#e88f8f'; x.fillRect(3, 9, 2, 1); x.fillRect(11, 9, 2, 1); }
    // nuca/lados: cabelo no topo
    x.fillStyle = hairCol; x.fillRect(16, 0, 16, 6);
  });
}
// outfits por profissão
export const OUTFITS = {
  pedreiro: { hat: 'capacete', hatColor: '#facc15', pants: '#3b5b8c' },
  empacotador: { overlay: 'apron', apron: '#16a34a', pants: '#1f2937' },
  gari: { shirt: '#f97316', overlay: 'stripes', pants: '#f97316', hat: 'bone', hatColor: '#f97316' },
  entregador: { shirt: '#dc2626', backpack: true, pants: '#1f2937', hat: 'bone', hatColor: '#dc2626' },
  ambulante: { overlay: 'apron', apron: '#f8fafc', hat: 'palha' },
  mestre_obras: { overlay: 'vest', hat: 'capacete', hatColor: '#f8fafc', pants: '#3b5b8c' },
  motorista: { overlay: 'polo', pants: '#1f2937' },
  eletricista: { shirt: '#1d4ed8', overlay: 'stripes', hat: 'capacete', hatColor: '#2563eb', pants: '#1e3a8a' },
  cozinheiro: { shirt: '#f8fafc', overlay: 'chef', hat: 'chef', pants: '#111827' },
  professor: { overlay: 'tie', tie: '#7c2d12', pants: '#78716c' },
  bombeiro: { shirt: '#b45309', overlay: 'stripes', hat: 'bombeiro', pants: '#b45309' },
  enfermeiro: { shirt: '#14b8a6', overlay: 'cross', pants: '#14b8a6' },
  programador: { overlay: 'hoodie', pants: '#1f2937', headphones: true },
  engenheiro: { overlay: 'vest', hat: 'capacete', hatColor: '#f8fafc', pants: '#1e3a8a' },
  advogado: { shirt: '#1f2937', overlay: 'suit', tie: '#991b1b', pants: '#1f2937' },
  medico: { overlay: 'coat', pants: '#1e3a8a', coat: true },
  empresario: { shirt: '#1e3a8a', overlay: 'suit', tie: '#facc15', pants: '#1e3a8a' },
  jogador: { shirt: '#facc15', overlay: 'jersey', pants: '#1d4ed8', shoes: '#f8fafc' },
  prefeito: { shirt: '#111827', overlay: 'sash', tie: '#111827', pants: '#111827' },
  heroi: { shirt: '#1d4ed8', overlay: 'hero', pants: '#1d4ed8', cape: true, shoes: '#dc2626' },
  garcom: { shirt: '#f8fafc', overlay: 'tie', tie: '#111827', pants: '#111827' },
  jardineiro: { shirt: '#65a30d', overlay: 'apron', apron: '#78350f', hat: 'palha', pants: '#3b5b8c' },
  pintor: { shirt: '#f8fafc', overlay: 'apron', apron: '#e2e8f0', hat: 'bone', hatColor: '#f8fafc', pants: '#e2e8f0' },
  caixa: { shirt: '#dc2626', overlay: 'polo', pants: '#1f2937' },
  mecanico: { shirt: '#1e3a8a', overlay: 'stripes', pants: '#1e3a8a', hat: 'bone', hatColor: '#1e3a8a' },
  policial: { shirt: '#1f2937', overlay: 'polo', pants: '#1f2937', hat: 'bone', hatColor: '#111827' },
  jornalista: { overlay: 'tie', tie: '#2563eb', pants: '#475569' },
  corretor: { shirt: '#334155', overlay: 'suit', tie: '#16a34a', pants: '#334155' },
  juiz: { shirt: '#111827', overlay: 'suit', tie: '#111827', pants: '#111827' },
  vereador: { shirt: '#14532d', overlay: 'suit', tie: '#facc15', pants: '#14532d' },
  // skins lendárias (VIP) — designs originais
  lend_heroi: { shirt: '#1d8a39', overlay: 'herobr', pants: '#1d8a39', shoes: '#ffc425', cape: true, capeColor: '#ffc425', mask: '#1e5fbf' },
  lend_piloto: { shirt: '#f8fafc', overlay: 'race', pants: '#f8fafc', shoes: '#1b2340', hat: 'race', hatColor: '#2f80ed' },
};
export function torsoTex(shirt, prof) {
  const o = OUTFITS[prof] || {}; const base = o.shirt || shirt;
  return canvasTex(`torso_${base}_${prof}`, 32, 16, (x, r) => {
    noise(x, r, 32, 16, base, 0.93, 1.04);
    const F = (col, X, Y, W, H) => { x.fillStyle = col; x.fillRect(X, Y, W, H); };
    F(sh(base, 0.75), 6, 0, 4, 1); // gola
    switch (o.overlay) {
      case 'stripes': F('#e5e7eb', 0, 9, 32, 2); F('#facc15', 0, 11, 32, 1); break;
      case 'apron': F(o.apron, 3, 4, 10, 12); F(sh(o.apron, 0.8), 3, 4, 10, 1); F('#ffffff', 6, 8, 4, 2); break;
      case 'vest': F('#f97316', 1, 0, 5, 16); F('#f97316', 10, 0, 5, 16); F('#e5e7eb', 1, 10, 5, 1); F('#e5e7eb', 10, 10, 5, 1); F('#f97316', 16, 0, 16, 16); F('#e5e7eb', 16, 10, 16, 1); break;
      case 'polo': F('#ffffff', 6, 0, 4, 2); F('#facc15', 10, 3, 3, 2); break;
      case 'chef': for (const y of [4, 8, 12]) { F('#9ca3af', 5, y, 1, 1); F('#9ca3af', 10, y, 1, 1); } F('#e5e7eb', 3, 0, 10, 1); break;
      case 'tie': F('#ffffff', 6, 0, 4, 2); F(o.tie, 7, 1, 2, 9); break;
      case 'suit': F('#f8fafc', 5, 0, 6, 9); F(o.tie, 7, 1, 2, 8); F(sh(base, 0.7), 4, 0, 1, 12); F(sh(base, 0.7), 11, 0, 1, 12); break;
      case 'cross': F('#ffffff', 10, 3, 4, 4); F('#dc2626', 11, 4, 2, 2); F('#dc2626', 11.5, 3.3, 1, 3.4); break;
      case 'hoodie': F(sh(base, 0.8), 4, 0, 8, 2); F('#e5e7eb', 6, 2, 1, 4); F('#e5e7eb', 9, 2, 1, 4); F(sh(base, 0.85), 4, 10, 8, 4); break;
      case 'coat': F('#f8fafc', 0, 0, 6, 16); F('#f8fafc', 10, 0, 6, 16); F('#f8fafc', 16, 0, 16, 16); F('#374151', 5, 2, 1, 6); F('#374151', 9, 2, 1, 6); F('#9ca3af', 6, 7, 4, 1); break;
      case 'jersey': F('#16a34a', 0, 0, 32, 1); F('#16a34a', 6, 0, 4, 2); F('#16a34a', 4, 4, 2, 2); F('#1d4ed8', 21, 4, 2, 8); F('#1d4ed8', 24, 4, 4, 1); F('#1d4ed8', 27, 4, 1, 8); F('#1d4ed8', 24, 11, 4, 1); F('#1d4ed8', 24, 4, 1, 8); break;
      case 'sash': F('#f8fafc', 6, 0, 4, 4); for (let i = 0; i < 16; i++) { F('#16a34a', i, 15 - i, 2, 2); F('#facc15', i, 14 - i, 1, 1); } break;
      case 'herobr': F('#ffc425', 0, 12, 32, 2); F('#e8960c', 7, 12, 2, 2); F('#ffc425', 7, 2, 2, 1); F('#ffc425', 6, 3, 4, 1); F('#ffc425', 5, 4, 6, 1); F('#ffc425', 4, 5, 8, 2); F('#ffc425', 5, 7, 6, 1); F('#ffc425', 6, 8, 4, 1); F('#ffc425', 7, 9, 2, 1); F('#1e5fbf', 6, 5, 4, 2); F('#1e5fbf', 7, 4, 2, 4); F('#ffffff', 6, 5, 4, 1); F('#1d8a39', 16, 0, 16, 16); F('#156b2c', 16, 0, 16, 2); break;
      case 'race': F('#2f80ed', 0, 0, 3, 16); F('#2f80ed', 13, 0, 3, 16); F('#ffc425', 3, 0, 1, 16); F('#ffc425', 12, 0, 1, 16); F('#1b2340', 6, 0, 4, 2); F('#ec4b47', 5, 5, 6, 4); F('#ffffff', 7, 6, 2, 2); F('#2f80ed', 16, 0, 3, 16); F('#2f80ed', 29, 0, 3, 16); F('#ffc425', 19, 0, 1, 16); F('#ffc425', 28, 0, 1, 16); F('#1b2340', 20, 4, 8, 3); break;
      case 'hero': F('#dc2626', 0, 13, 32, 3); F('#facc15', 5, 3, 6, 6); F('#dc2626', 6, 4, 4, 4); F('#facc15', 7, 5, 2, 2); break;
    }
  });
}
export function armTex(shirt, prof, skin) {
  const o = OUTFITS[prof] || {}; const sleeve = o.coat ? '#f8fafc' : o.overlay === 'vest' ? (o.shirt || shirt) : (o.shirt || shirt);
  return canvasTex(`arm_${sleeve}_${skin}`, 8, 16, (x, r) => { noise(x, r, 8, 16, sleeve, 0.92, 1.04); noise2(x, r, 0, 11, 8, 5, skin); });
}
function noise2(x, r, X, Y, w, h, base) { for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) P(x, X + i, Y + j, sh(base, 0.95 + r() * 0.06)); }
export function legTex(pants, shoes = '#3f2a1d') {
  return canvasTex(`leg_${pants}_${shoes}`, 8, 16, (x, r) => { noise(x, r, 8, 16, pants, 0.9, 1.05); noise2(x, r, 0, 13, 8, 3, shoes); });
}
