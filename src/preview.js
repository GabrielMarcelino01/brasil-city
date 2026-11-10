// ===== Miniaturas 3D (carros e skins) renderizadas uma vez e guardadas como imagem =====
import * as THREE from 'three';
import { buildVehicle, buildAvatar } from './voxel.js';
let R = null; const cache = {};
function renderer() {
  if (R) return R;
  const c = document.createElement('canvas'); c.width = 360; c.height = 240;
  const gl = new THREE.WebGLRenderer({ canvas: c, antialias: true, alpha: true, preserveDrawingBuffer: true });
  gl.outputColorSpace = THREE.SRGBColorSpace; gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.15; gl.setClearColor(0x000000, 0);
  const scene = new THREE.Scene(); scene.add(new THREE.HemisphereLight('#ffffff', '#8b7355', 1.6));
  const d = new THREE.DirectionalLight('#fff4dd', 2.2); d.position.set(4, 8, 6); scene.add(d);
  const cam = new THREE.PerspectiveCamera(30, 1.5, 0.1, 100);
  return (R = { gl, scene, cam });
}
function shoot(key, obj, { w = 360, h = 240, pos, look }) {
  if (cache[key]) return cache[key];
  try {
    const { gl, scene, cam } = renderer(); gl.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
    cam.position.set(...pos); cam.lookAt(...look); scene.add(obj); gl.render(scene, cam); const url = gl.domElement.toDataURL('image/png'); scene.remove(obj);
    return (cache[key] = url);
  } catch (e) { return null; }
}
export function carThumb(id) { const g = buildVehicle(id); g.rotation.y = -0.6; return shoot('car_' + id, g, { pos: [5.0, 1.9, 6.0], look: [0, 0.5, 0] }); }
export function skinThumb(id, skin = '#c68642') { const g = buildAvatar({ prof: id, skin, hairCol: '#2b1a10' }); g.rotation.y = 0.7; return shoot('skin_' + id + skin, g, { w: 240, h: 300, pos: [0, 2.0, 7.4], look: [0, 1.45, 0] }); }
