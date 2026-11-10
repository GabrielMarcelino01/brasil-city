// ===== Minigames por profissão =====
const rnd = (a) => a[(Math.random() * a.length) | 0];
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }
function canvasIn(area, ratio = 1.25, maxH) {
  const w = area.clientWidth, h = Math.floor(Math.min(w * ratio, maxH || (area.clientHeight > 60 ? area.clientHeight : 1e9))); const c = el('canvas', 'mgc'); const dpr = Math.min(2, devicePixelRatio || 1);
  c.width = w * dpr; c.height = h * dpr; c.style.width = w + 'px'; c.style.height = h + 'px'; area.appendChild(c); const x = c.getContext('2d'); x.scale(dpr, dpr); return { c, x, w, h };
}
function loop(fn) { let id, last = performance.now(), on = true; const f = (t) => { if (!on) return; const dt = Math.min(0.05, (t - last) / 1000); last = t; fn(dt, t / 1000); id = requestAnimationFrame(f); }; id = requestAnimationFrame(f); return () => { on = false; cancelAnimationFrame(id); }; }
function countdown(ctx, secs, onEnd) { let left = secs; ctx.time(left); const iv = setInterval(() => { left -= 0.1; ctx.time(Math.max(0, left)); if (left <= 0) { clearInterval(iv); onEnd(); } }, 100); return () => clearInterval(iv); }

// ---------- TAP (alvos bons/ruins, combo, estrela dourada) ----------
const TAPCFG = {
  jardineiro: { good: ['🌱', '🌿', '🌻'], bad: ['🐛'], hint: 'Regue as plantas • evite as pragas 🐛', bg: 'linear-gradient(#bbf7d0,#86efac)' },
  pintor: { good: ['🟫', '🟪', '⬛'], bad: ['🐈'], hint: 'Pinte as manchas • não pinte o gato 🐈', bg: 'linear-gradient(#fef3c7,#fde68a)' },
  eletricista: { good: ['💡'], bad: ['⚡'], hint: 'Troque as lâmpadas 💡 • fuja do choque ⚡', bg: 'linear-gradient(#1e293b,#2b3766)' },
  mecanico: { good: ['🔩', '⚙️'], bad: ['🔥'], hint: 'Aperte os parafusos • cuidado com o motor quente 🔥', bg: 'linear-gradient(#cbd5e1,#94a3b8)' },
  programador: { good: ['🐛', '🐞'], bad: ['☕'], hint: 'Esmague os bugs • não derrube o café ☕', bg: 'linear-gradient(#1b2340,#1e5fbf)' },
  policial: { good: ['🦹'], bad: ['🙋', '👵'], hint: 'Pegue os ladrões 🦹 • não os inocentes', bg: 'linear-gradient(#dbeafe,#93c5fd)' },
  heroi: { good: ['🦹', '👾'], bad: ['🙋', '🐱'], hint: 'Derrote os vilões • proteja os moradores', bg: 'linear-gradient(#1d4ed8,#1e5fbf)' },
};
function tap(ctx) {
  const cfg = TAPCFG[ctx.prof.id] || { good: [ctx.prof.emoji], bad: ['💣'], hint: 'Toque nos alvos', bg: 'linear-gradient(#e0f2fe,#dcfce7)' };
  ctx.hint(cfg.hint); const area = ctx.area; area.style.background = cfg.bg;
  let score = 0, combo = 0, over = false; const TARGET = 22; const timers = [];
  const spawn = () => {
    if (over) return; const r = Math.random(); const kind = r < 0.07 ? 'gold' : r < 0.27 ? 'bad' : 'good';
    const b = el('button', 'tgt ' + kind, kind === 'gold' ? '⭐' : rnd(kind === 'bad' ? cfg.bad : cfg.good));
    b.style.left = (10 + Math.random() * 80) + '%'; b.style.top = (10 + Math.random() * 78) + '%';
    const life = Math.max(700, 1500 - score * 25); const kill = setTimeout(() => { if (kind !== 'bad' && b.isConnected) combo = 0; b.classList.add('gone'); setTimeout(() => b.remove(), 200); }, life);
    b.onpointerdown = (e) => {
      e.preventDefault(); clearTimeout(kill); b.onpointerdown = null; const rc = b.getBoundingClientRect(), ar = area.getBoundingClientRect();
      if (kind === 'bad') { combo = 0; score = Math.max(0, score - 2); ctx.sfx('bad'); ctx.float(rc.left - ar.left, rc.top - ar.top, '-2', '#ec4b47'); area.classList.add('shake'); setTimeout(() => area.classList.remove('shake'), 300); }
      else { combo++; const g = kind === 'gold' ? 3 : 1 + (combo >= 5 ? 1 : 0); score += g; ctx.sfx(combo >= 5 ? 'combo' : 'good'); ctx.float(rc.left - ar.left, rc.top - ar.top, '+' + g + (combo >= 3 ? ` x${combo}` : ''), kind === 'gold' ? '#e8960c' : '#2fb14b'); }
      b.classList.add('hit'); setTimeout(() => b.remove(), 250); ctx.score(`${score}/${TARGET}`);
    };
    area.appendChild(b); timers.push(setTimeout(spawn, Math.max(330, 620 - score * 10)));
  };
  ctx.score(`0/${TARGET}`); spawn();
  const stop = countdown(ctx, 22, () => finish());
  function finish() { if (over) return; over = true; stop(); timers.forEach(clearTimeout); ctx.end(Math.min(1, score / TARGET)); }
  return { destroy() { over = true; stop(); timers.forEach(clearTimeout); }, win() { score = TARGET; finish(); } };
}

// ---------- MATCH-3 ----------
const M3 = { empacotador: ['🍎', '🥖', '🧀', '🥛', '🍫', '🥫'], ambulante: ['🌽', '🍿', '🍦', '🥤', '🍉', '🥥'], caixa: ['💵', '🪙', '💳', '🧾', '🛒', '🏷️'] };
function match3(ctx) {
  const items = M3[ctx.prof.id] || M3.empacotador, S = 7, area = ctx.area; ctx.hint('Arraste ou toque 2 vizinhos pra trocar • 3 iguais somem');
  const size = Math.floor(Math.min(area.clientWidth - 8, 380) / S); const board = el('div', 'm3'); board.style.width = board.style.height = size * S + 'px'; area.appendChild(board); area.style.background = 'linear-gradient(#dcebff,#dbeafe)';
  let grid = [], score = 0, busy = false, over = false, sel = null; const TARGET = 650;
  const place = (t, r, c) => { t.r = r; t.c = c; t.el.style.transform = `translate(${c * size}px,${r * size}px)`; };
  const make = (r, c, type, fromTop = false) => { const e = el('div', 'm3t', `<span>${items[type]}</span>`); e.style.width = e.style.height = size + 'px'; e.style.fontSize = size * 0.62 + 'px'; const t = { type, el: e }; board.appendChild(e); if (fromTop) { e.style.transition = 'none'; e.style.transform = `translate(${c * size}px,${-size * 2}px)`; e.offsetHeight; e.style.transition = ''; } place(t, r, c); return t; };
  for (let r = 0; r < S; r++) { grid[r] = []; for (let c = 0; c < S; c++) { let ty; do { ty = (Math.random() * items.length) | 0; } while ((c >= 2 && grid[r][c - 1].type === ty && grid[r][c - 2].type === ty) || (r >= 2 && grid[r - 1][c].type === ty && grid[r - 2][c].type === ty)); grid[r][c] = make(r, c, ty); } }
  const findMatches = () => { const m = new Set(); for (let r = 0; r < S; r++) for (let c = 0; c < S - 2; c++) { const t = grid[r][c].type; if (grid[r][c + 1].type === t && grid[r][c + 2].type === t) { m.add(r * S + c); m.add(r * S + c + 1); m.add(r * S + c + 2); } } for (let c = 0; c < S; c++) for (let r = 0; r < S - 2; r++) { const t = grid[r][c].type; if (grid[r + 1][c].type === t && grid[r + 2][c].type === t) { m.add(r * S + c); m.add((r + 1) * S + c); m.add((r + 2) * S + c); } } return m; };
  const swap = (a, b) => { grid[a.r][a.c] = b; grid[b.r][b.c] = a; const ar = a.r, ac = a.c; place(a, b.r, b.c); place(b, ar, ac); };
  async function trySwap(a, b) {
    if (busy || over) return; busy = true; swap(a, b); ctx.sfx('tick'); await sleep(200);
    let m = findMatches(); if (!m.size) { swap(a, b); ctx.sfx('bad'); await sleep(200); busy = false; return; }
    let combo = 0;
    while (m.size && !over) {
      combo++; const pts = m.size * 10 * combo; score += pts; ctx.score(`${score}/${TARGET}`); ctx.sfx(combo > 1 ? 'combo' : 'good');
      const first = [...m][0]; ctx.float((first % S) * size, ((first / S) | 0) * size, '+' + pts + (combo > 1 ? ` COMBO x${combo}` : ''), combo > 1 ? '#2f80ed' : '#2fb14b');
      for (const k of m) { const t = grid[(k / S) | 0][k % S]; t.el.classList.add('pop'); t.dead = true; }
      await sleep(220);
      for (let c = 0; c < S; c++) { let w = S - 1; for (let r = S - 1; r >= 0; r--) { const t = grid[r][c]; if (!t.dead) { grid[w][c] = t; place(t, w, c); w--; } else t.el.remove(); } for (let r = w; r >= 0; r--) grid[r][c] = make(r, c, (Math.random() * items.length) | 0, true); }
      await sleep(260); m = findMatches();
    }
    busy = false; if (score >= TARGET) finish();
  }
  let start = null;
  board.onpointerdown = (e) => { const rc = board.getBoundingClientRect(); const c = Math.floor((e.clientX - rc.left) / size), r = Math.floor((e.clientY - rc.top) / size); if (r < 0 || c < 0 || r >= S || c >= S) return; start = { r, c, x: e.clientX, y: e.clientY, moved: false }; };
  board.onpointermove = (e) => { if (!start || start.moved) return; const dx = e.clientX - start.x, dy = e.clientY - start.y; if (Math.hypot(dx, dy) > size * 0.4) { start.moved = true; const [r2, c2] = Math.abs(dx) > Math.abs(dy) ? [start.r, start.c + Math.sign(dx)] : [start.r + Math.sign(dy), start.c]; if (r2 >= 0 && c2 >= 0 && r2 < S && c2 < S) { sel?.el.classList.remove('sel'); sel = null; trySwap(grid[start.r][start.c], grid[r2][c2]); } } };
  board.onpointerup = () => { if (!start) return; if (!start.moved) { const t = grid[start.r][start.c]; if (sel && Math.abs(sel.r - t.r) + Math.abs(sel.c - t.c) === 1) { sel.el.classList.remove('sel'); const s = sel; sel = null; trySwap(s, t); } else { sel?.el.classList.remove('sel'); sel = t; t.el.classList.add('sel'); } } start = null; };
  ctx.score(`0/${TARGET}`); const stop = countdown(ctx, 45, () => finish());
  function finish() { if (over) return; over = true; stop(); setTimeout(() => ctx.end(Math.min(1, score / TARGET)), 300); }
  return { destroy() { over = true; stop(); }, win() { score = TARGET; finish(); } };
}

// ---------- ENTREGA (mapa top-down) ----------
function delivery(ctx) {
  const taxi = ctx.prof.id === 'motorista'; ctx.hint(taxi ? 'Deslize ou use as setas • busque o passageiro 🙋' : 'Deslize ou use as setas • leve o pacote até a casa 📦');
  const area = ctx.area; const COLS = 9, ROWS = 13; const wrap = el('div', 'dl'); area.appendChild(wrap);
  const { c, x, w, h } = canvasIn(wrap, ROWS / COLS, area.clientHeight - 10); const cs = Math.min(w / COLS, h / ROWS); const ox = (w - cs * COLS) / 2, oy = (h - cs * ROWS) / 2;
  const isRoad = (cx, cy) => cx >= 0 && cy >= 0 && cx < COLS && cy < ROWS && (cx % 4 === 0 || cy % 4 === 0);
  const houses = []; for (let cy = 0; cy < ROWS; cy++) for (let cx = 0; cx < COLS; cx++) if (!isRoad(cx, cy)) houses.push({ cx, cy, col: rnd(['#fca5a5', '#fde68a', '#a7f3d0', '#bfdbfe', '#dcebff', '#ffdcdb']), roof: rnd(['#b8302d', '#9a3412', '#1e5fbf', '#065f46']) });
  const edgeHouses = houses.filter(hh => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => isRoad(hh.cx + a, hh.cy + b)));
  const p = { x: 0, y: 0, dir: [1, 0], want: [1, 0], ang: 0 }; let target = null, delivered = 0, over = false; const GOAL = 4;
  const pick = () => { do { target = rnd(edgeHouses); } while (Math.hypot(target.cx - p.x, target.cy - p.y) < 4); };
  pick(); ctx.score(`0/${GOAL}`);
  const setDir = (d) => { p.want = d; };
  const pad = el('div', 'dpad', ['⬆️', '⬅️', '➡️', '⬇️'].map((a, i) => `<button data-d="${i}">${a}</button>`).join('')); area.appendChild(pad);
  const D = [[0, -1], [-1, 0], [1, 0], [0, 1]]; pad.querySelectorAll('button').forEach(b => b.onpointerdown = (e) => { e.preventDefault(); setDir(D[b.dataset.d]); ctx.sfx('tick'); });
  let sw = null; c.onpointerdown = (e) => sw = { x: e.clientX, y: e.clientY }; c.onpointerup = (e) => { if (!sw) return; const dx = e.clientX - sw.x, dy = e.clientY - sw.y; if (Math.hypot(dx, dy) > 15) setDir(Math.abs(dx) > Math.abs(dy) ? [Math.sign(dx), 0] : [0, Math.sign(dy)]); sw = null; };
  const key = (e) => { const m = { ArrowUp: 0, ArrowLeft: 1, ArrowRight: 2, ArrowDown: 3, w: 0, a: 1, d: 2, s: 3 }[e.key]; if (m !== undefined) setDir(D[m]); }; addEventListener('keydown', key);
  const SPEED = 4.6; let pulse = 0;
  const stopLoop = loop((dt) => {
    pulse += dt;
    const atCenter = Math.abs(p.x - Math.round(p.x)) < 0.08 && Math.abs(p.y - Math.round(p.y)) < 0.08;
    if (atCenter) { const rx = Math.round(p.x), ry = Math.round(p.y); if (isRoad(rx + p.want[0], ry + p.want[1])) { p.x = rx; p.y = ry; p.dir = p.want; } else if (!isRoad(rx + p.dir[0], ry + p.dir[1])) { p.x = rx; p.y = ry; p.dir = [0, 0]; } }
    p.x += p.dir[0] * SPEED * dt; p.y += p.dir[1] * SPEED * dt;
    if (p.dir[0] || p.dir[1]) p.ang = Math.atan2(p.dir[1], p.dir[0]);
    const near = Math.abs(p.x - target.cx) + Math.abs(p.y - target.cy) <= 1.15;
    if (near && !over) { delivered++; ctx.sfx('combo'); ctx.float(ox + target.cx * cs, oy + target.cy * cs, taxi ? '+1 corrida!' : '+1 entrega!', '#2fb14b'); ctx.score(`${delivered}/${GOAL}`); if (delivered >= GOAL) return finish(); pick(); }
    // desenho
    x.fillStyle = '#86efac'; x.fillRect(0, 0, w, h);
    for (let cy = 0; cy < ROWS; cy++) for (let cx = 0; cx < COLS; cx++) if (isRoad(cx, cy)) { x.fillStyle = '#6a7393'; x.fillRect(ox + cx * cs, oy + cy * cs, cs + 0.5, cs + 0.5); }
    x.fillStyle = '#ffc425'; for (let cy = 0; cy < ROWS; cy++) for (let cx = 0; cx < COLS; cx++) if (isRoad(cx, cy) && (cx + cy) % 2 === 0) { if (cy % 4 === 0) x.fillRect(ox + cx * cs + cs * 0.3, oy + cy * cs + cs * 0.46, cs * 0.4, cs * 0.08); else x.fillRect(ox + cx * cs + cs * 0.46, oy + cy * cs + cs * 0.3, cs * 0.08, cs * 0.4); }
    for (const hh of houses) { const X = ox + hh.cx * cs, Y = oy + hh.cy * cs; const t = hh === target; x.fillStyle = hh.col; x.fillRect(X + cs * 0.12, Y + cs * 0.3, cs * 0.76, cs * 0.6); x.fillStyle = hh.roof; x.fillRect(X + cs * 0.06, Y + cs * 0.12, cs * 0.88, cs * 0.26);
      if (t) { const s = 1 + Math.sin(pulse * 8) * 0.12; x.strokeStyle = '#ffc425'; x.lineWidth = 4; x.strokeRect(X + 2, Y + 2, cs - 4, cs - 4); x.font = `${cs * 0.6 * s}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(taxi ? '🙋' : '📦', X + cs / 2, Y - cs * 0.15); } }
    x.save(); x.translate(ox + p.x * cs + cs / 2, oy + p.y * cs + cs / 2); x.font = `${cs * 0.8}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; if (Math.cos(p.ang) > 0.1) x.scale(-1, 1); x.fillText(taxi ? '🚕' : '🛵', 0, 0); x.restore();
    // seta guia
    const dx = target.cx - p.x, dy = target.cy - p.y; const a = Math.atan2(dy, dx); x.save(); x.translate(ox + p.x * cs + cs / 2 + Math.cos(a) * cs * 0.9, oy + p.y * cs + cs / 2 + Math.sin(a) * cs * 0.9); x.rotate(a); x.fillStyle = '#e8960c'; x.beginPath(); x.moveTo(8, 0); x.lineTo(-5, -6); x.lineTo(-5, 6); x.fill(); x.restore();
  });
  const stop = countdown(ctx, 40, () => finish());
  function finish() { if (over) return; over = true; stop(); stopLoop(); removeEventListener('keydown', key); ctx.end(Math.min(1, delivered / GOAL)); }
  return { destroy() { over = true; stop(); stopLoop(); removeEventListener('keydown', key); }, win() { delivered = GOAL; finish(); } };
}

// ---------- TIJOLOS (empilhar) ----------
function bricks(ctx) {
  ctx.hint('Toque pra soltar o tijolo • alinhe certinho pra ganhar combo'); const area = ctx.area; const { c, x, w, h } = canvasIn(area, 1.3);
  const LH = 24, GOAL = 15; const col = ctx.prof.id === 'engenheiro' ? '#6a7393' : '#b5523a';
  let stack = [{ x: w * 0.2, w: w * 0.6 }], cur = null, falling = [], over = false, combo = 0, cam = 0, speed = 150, lives = 3;
  const sc = () => ctx.score(`${stack.length - 1}/${GOAL} ${'❤️'.repeat(lives)}`);
  const next = () => { const top = stack[stack.length - 1]; cur = { x: Math.random() > 0.5 ? -top.w * 0.6 : w - top.w * 0.4, w: top.w, dir: 1 }; cur.dir = cur.x < 0 ? 1 : -1; speed = 150 + stack.length * 9; };
  next(); sc();
  const drop = () => {
    if (over || !cur) return; const top = stack[stack.length - 1]; const l = Math.max(cur.x, top.x), r = Math.min(cur.x + cur.w, top.x + top.w), ov = r - l;
    if (ov <= 0) { falling.push({ ...cur, y: stack.length, vy: 0 }); cur = null; lives--; combo = 0; ctx.sfx('bad'); area.classList.add('shake'); setTimeout(() => area.classList.remove('shake'), 300); ctx.float(w / 2 - 40, 60, lives ? 'Errou! 💔' : 'Acabou!', '#ec4b47'); sc(); if (!lives) return setTimeout(finish, 700); return setTimeout(() => { if (!over) next(); }, 450); }
    if (Math.abs(cur.x - top.x) < 6) { cur.x = top.x; combo++; ctx.sfx('combo'); ctx.float(cur.x + cur.w / 2, h - (stack.length - cam) * LH - 40, combo > 1 ? `PERFEITO x${combo}` : 'PERFEITO!', '#e8960c'); stack.push({ x: top.x, w: top.w }); }
    else { combo = 0; ctx.sfx('good'); const cutL = cur.x < top.x; falling.push({ x: cutL ? cur.x : r, w: cur.w - ov, y: stack.length, vy: 0 }); stack.push({ x: l, w: ov }); }
    sc(); if (stack.length - 1 >= GOAL) return finish(); next();
  };
  c.onpointerdown = (e) => { e.preventDefault(); drop(); }; const key = (e) => { if (e.key === ' ') drop(); }; addEventListener('keydown', key);
  const brick = (bx, by, bw, a = 1) => { x.globalAlpha = a; x.fillStyle = col; x.fillRect(bx, by, bw, LH - 2); x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(bx, by, bw, 4); x.strokeStyle = 'rgba(0,0,0,.25)'; for (let k = bx + 18; k < bx + bw; k += 26) { x.beginPath(); x.moveTo(k, by); x.lineTo(k, by + LH - 2); x.stroke(); } x.globalAlpha = 1; };
  const stopLoop = loop((dt) => {
    if (cur) { cur.x += cur.dir * speed * dt; if (cur.x + cur.w > w + 20 && cur.dir > 0) cur.dir = -1; if (cur.x < -20 && cur.dir < 0) cur.dir = 1; }
    const want = Math.max(0, stack.length - 9); cam += (want - cam) * Math.min(1, dt * 5);
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#7dd3fc'); g.addColorStop(1, '#e0f2fe'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    x.fillStyle = '#2fb14b'; x.fillRect(0, h - LH + cam * LH, w, LH * 3);
    stack.forEach((s, i) => brick(s.x, h - (i + 1) * LH + cam * LH - LH * 0, s.w));
    if (cur) brick(cur.x, h - (stack.length + 1) * LH + cam * LH, cur.w);
    falling = falling.filter(f => { f.vy += 900 * dt; f.y -= f.vy * dt / LH; brick(f.x, h - (f.y + 1) * LH + cam * LH, f.w, 0.8); return f.y > -20; });
  });
  function finish() { if (over) return; over = true; stopLoop(); stop(); removeEventListener('keydown', key); ctx.end(Math.min(1, (stack.length - 1) / GOAL)); }
  const stop = countdown(ctx, 45, () => finish());
  return { destroy() { over = true; stopLoop(); stop(); removeEventListener('keydown', key); }, win() { for (let i = 0; i < GOAL; i++) stack.push({ ...stack[stack.length - 1] }); finish(); } };
}

// ---------- RECICLAGEM ----------
const BINS = [{ id: 'papel', nome: 'Papel', cor: '#2f80ed', items: ['📰', '📦', '📄'] }, { id: 'plastico', nome: 'Plástico', cor: '#ec4b47', items: ['🥤', '🧴', '🛍️'] }, { id: 'metal', nome: 'Metal', cor: '#ffc425', items: ['🥫', '🔩'] }, { id: 'vidro', nome: 'Vidro', cor: '#2fb14b', items: ['🍾', '🫙'] }, { id: 'organico', nome: 'Orgânico', cor: '#78350f', items: ['🍌', '🍎', '🦴'] }];
function sort(ctx) {
  ctx.hint('Toque na lixeira certa antes do lixo cair!'); const area = ctx.area; area.style.background = 'linear-gradient(#e0f2fe,#f0fdf4)';
  const lane = el('div', 'sortlane'); area.appendChild(lane); const bins = el('div', 'bins', BINS.map(b => `<button class="bin" data-b="${b.id}" style="--c:${b.cor}"><span>🗑️</span>${b.nome}</button>`).join('')); area.appendChild(bins);
  const GOAL = 14; let n = 0, ok = 0, cur = null, over = false, combo = 0;
  const next = () => { if (over) return; if (n >= GOAL) return finish(); n++; const b = rnd(BINS); const it = el('div', 'fall', rnd(b.items)); it.dataset.b = b.id; lane.appendChild(it); const dur = Math.max(1.6, 3.4 - n * 0.12); it.style.animationDuration = dur + 's'; cur = it; it.addEventListener('animationend', () => { if (cur === it) { combo = 0; ctx.sfx('bad'); ctx.float(lane.clientWidth / 2, lane.clientHeight - 30, 'caiu no chão!', '#ec4b47'); it.remove(); cur = null; next(); } }); };
  bins.querySelectorAll('.bin').forEach(bt => bt.onpointerdown = (e) => {
    e.preventDefault(); if (!cur || over) return; const it = cur; cur = null; const right = it.dataset.b === bt.dataset.b;
    if (right) { ok++; combo++; ctx.sfx(combo >= 3 ? 'combo' : 'good'); bt.classList.add('ok'); ctx.float(bt.offsetLeft, lane.clientHeight - 40, combo >= 3 ? `+1 x${combo}` : '+1', '#2fb14b'); } else { combo = 0; ctx.sfx('bad'); bt.classList.add('no'); ctx.float(bt.offsetLeft, lane.clientHeight - 40, 'lixeira errada', '#ec4b47'); }
    setTimeout(() => bt.classList.remove('ok', 'no'), 300); it.classList.add('toss'); setTimeout(() => it.remove(), 250); ctx.score(`${ok}/${GOAL}`); setTimeout(next, 250);
  });
  ctx.score(`0/${GOAL}`); next(); const stop = countdown(ctx, 40, () => finish());
  function finish() { if (over) return; over = true; stop(); ctx.end(Math.min(1, ok / GOAL)); }
  return { destroy() { over = true; stop(); }, win() { ok = GOAL; finish(); } };
}

// ---------- COZINHA ----------
const RECEITAS = [{ n: 'Hambúrguer', s: ['🍞', '🥬', '🍅', '🧀', '🥩', '🍞'] }, { n: 'Pizza', s: ['🫓', '🍅', '🧀', '🍄', '🌿'] }, { n: 'Açaí na tigela', s: ['🥣', '🍇', '🍌', '🍓', '🍯'] }, { n: 'Prato Feito', s: ['🍚', '🫘', '🥩', '🥗', '🍟'] }, { n: 'Tapioca', s: ['🫓', '🧀', '🥥'] }, { n: 'Cachorro-quente', s: ['🌭', '🍅', '🌽', '🧀'] }, { n: 'Salada de frutas', s: ['🍉', '🍍', '🍌', '🍓'] }];
const EXTRAS = ['🧅', '🥕', '🌶️', '🥚', '🧄', '🍋', '🥑', '🐟'];
function cook(ctx) {
  const garcom = ctx.prof.id === 'garcom'; ctx.hint(garcom ? 'Monte o pedido na ordem da comanda' : 'Coloque os ingredientes na ordem antes de queimar 🔥');
  const area = ctx.area; area.style.background = 'linear-gradient(#fff7ed,#fed7aa)';
  const DISHES = 3; let d = 0, total = 0, over = false, rec, step, errs, burn, burnIv;
  const ui = el('div', 'cook'); area.appendChild(ui);
  const render = () => {
    ui.innerHTML = `<div class="ticket"><b>${garcom ? '🧾 Comanda' : '📋 Receita'} ${d + 1}/${DISHES}: ${rec.n}</b><div class="steps">${rec.s.map((s, i) => `<span class="${i < step ? 'done' : i === step ? 'now' : ''}">${s}</span>`).join('<i>›</i>')}</div></div>
      <div class="burn"><i style="width:${burn}%"></i><span>${garcom ? '⏳ cliente esperando' : '🔥 queimando'}</span></div>
      <div class="plate">${rec.s.slice(0, step).map((s, i) => `<span style="bottom:${i * 16}px">${s}</span>`).join('')}<div class="dish">${garcom ? '🍽️' : '🍳'}</div></div>
      <div class="shelf">${shelf.map(s => `<button class="ing">${s}</button>`).join('')}</div>`;
    ui.querySelectorAll('.ing').forEach(b => b.onpointerdown = (e) => { e.preventDefault(); pickIng(b.textContent, b); });
  };
  let shelf = [];
  const newDish = () => { rec = rnd(RECEITAS); step = 0; errs = 0; burn = 0; shelf = shuffle([...new Set([...rec.s, ...shuffle(EXTRAS).slice(0, 8 - new Set(rec.s).size)])]).slice(0, 8); render(); };
  const pickIng = (s, b) => {
    if (over) return;
    if (s === rec.s[step]) { step++; ctx.sfx('good'); b.classList.add('ok'); if (step >= rec.s.length) { const sc = Math.max(0.2, 1 - errs * 0.2 - burn / 250); total += sc; ctx.sfx('combo'); ctx.float(area.clientWidth / 2 - 40, 140, sc > 0.9 ? 'PERFEITO! 🤩' : 'Pronto! 😋', '#2fb14b'); d++; if (d >= DISHES) return finish(); setTimeout(newDish, 500); } render(); }
    else { errs++; burn = Math.min(100, burn + 12); ctx.sfx('bad'); b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 300); area.classList.add('shake'); setTimeout(() => area.classList.remove('shake'), 300); }
    ctx.score(`${d}/${DISHES}`);
  };
  newDish(); ctx.score(`0/${DISHES}`);
  burnIv = setInterval(() => { if (over) return; burn += 0.9; const bar = ui.querySelector('.burn i'); if (bar) bar.style.width = Math.min(100, burn) + '%'; if (burn >= 100) { ctx.sfx('bad'); ctx.float(area.clientWidth / 2 - 40, 140, garcom ? 'Cliente foi embora 😤' : 'Queimou! 🔥', '#ec4b47'); d++; if (d >= DISHES) return finish(); newDish(); } }, 100);
  const stop = countdown(ctx, 45, () => finish());
  function finish() { if (over) return; over = true; clearInterval(burnIv); stop(); ctx.end(Math.min(1, total / DISHES)); }
  return { destroy() { over = true; clearInterval(burnIv); stop(); }, win() { total = DISHES; finish(); } };
}

// ---------- QUIZ (professor, saúde, fato/fake, decisões) ----------
const QUIZ = {
  professor: [['Capital do Ceará?', ['Fortaleza', 'Recife', 'Natal']], ['7 × 8 = ?', ['56', '54', '63']], ['Maior bioma do Brasil?', ['Amazônia', 'Cerrado', 'Pampa']], ['Capital do Paraná?', ['Curitiba', 'Londrina', 'Maringá']], ['12 + 19 = ?', ['31', '29', '33']], ['Quantos estados tem o Brasil (sem contar o DF)?', ['26', '27', '25']], ['Quem escreveu "Dom Casmurro"?', ['Machado de Assis', 'Jorge Amado', 'Clarice Lispector']], ['Capital da Bahia?', ['Salvador', 'Feira de Santana', 'Ilhéus']], ['Metade de 150?', ['75', '70', '80']], ['O Brasil fica em qual continente?', ['América do Sul', 'África', 'Europa']], ['9 × 9 = ?', ['81', '72', '99']], ['Capital de Minas Gerais?', ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora']]],
  saude: [['Febre alta. Primeiro passo?', ['Medir a temperatura e dar antitérmico', 'Engessar o braço', 'Dar refrigerante']], ['Corte sangrando muito:', ['Pressionar com pano limpo', 'Soprar o machucado', 'Ignorar']], ['Sinais de desidratação:', ['Soro e hidratação', 'Café bem forte', 'Correr no sol']], ['Braço possivelmente quebrado:', ['Imobilizar e fazer raio-X', 'Massagear forte', 'Esperar passar']], ['Queimadura leve na mão:', ['Água corrente fria', 'Pasta de dente', 'Manteiga']], ['Adulto engasgado e consciente:', ['Manobra de Heimlich', 'Dar água', 'Deitar de costas']], ['Picada de abelha com inchaço leve:', ['Tirar o ferrão e compressa fria', 'Apertar o ferrão', 'Óleo quente']], ['Pressão muito alta:', ['Medir e encaminhar ao médico', 'Comer mais sal', 'Ignorar']]],
  fake: [['"O Brasil é o maior país da América do Sul."', ['FATO', 'FAKE']], ['"Brasília foi inaugurada em 1960."', ['FATO', 'FAKE']], ['"A Amazônia fica toda no Nordeste."', ['FAKE', 'FATO']], ['"O Rio São Francisco passa por Minas e pela Bahia."', ['FATO', 'FAKE']], ['"O Brasil tem 50 estados."', ['FAKE', 'FATO']], ['"Água com limão cura qualquer doença."', ['FAKE', 'FATO']], ['"O Pantanal fica em MT e MS."', ['FATO', 'FAKE']], ['"Tomar vacina faz a pessoa virar jacaré."', ['FAKE', 'FATO']]],
  cidade: [['Rua cheia de buracos. O que fazer?', ['Tapar e pavimentar', 'Esperar a chuva', 'Pintar de azul']], ['Muito lixo na praça:', ['Lixeiras e coleta seletiva', 'Esconder com lona', 'Proibir a praça']], ['Crianças sem escola perto:', ['Construir uma escola', 'Fechar a rua', 'Fazer um outdoor']], ['Rua escura à noite:', ['Iluminação pública', 'Pedir ajuda pra lua', 'Cortar as árvores']], ['Trânsito parado no centro:', ['Ônibus e ciclovias', 'Buzinar mais', 'Não fazer nada']], ['Calor forte no bairro:', ['Plantar árvores', 'Asfaltar a praça', 'Tirar as sombras']], ['Posto de saúde lotado:', ['Contratar e ampliar', 'Fechar mais cedo', 'Cobrar entrada']]],
};
const QBANK = { professor: 'professor', enfermeiro: 'saude', medico: 'saude', jornalista: 'fake', vereador: 'cidade', prefeito: 'cidade' };
function quiz(ctx) {
  const bank = QBANK[ctx.prof.id] || 'professor'; ctx.hint({ professor: 'Responda rápido pra turma!', saude: 'Escolha o cuidado certo pro paciente', fake: 'Fato ou fake? Decida rápido!', cidade: 'Decida o melhor pra cidade' }[bank]);
  const area = ctx.area; area.style.background = bank === 'saude' ? 'linear-gradient(#ecfeff,#cffafe)' : bank === 'fake' ? 'linear-gradient(#fef2f2,#fee2e2)' : bank === 'cidade' ? 'linear-gradient(#f0fdf4,#dcfce7)' : 'linear-gradient(#14532d,#166534)';
  const Q = shuffle(QUIZ[bank]).slice(0, 6); let i = 0, ok = 0, combo = 0, over = false, qt = 0, qiv;
  const ui = el('div', 'quiz' + (bank === 'professor' ? ' lousa' : '')); area.appendChild(ui);
  const show = () => {
    if (i >= Q.length) return finish(); const [q, opts] = Q[i]; const correct = opts[0]; qt = 8;
    ui.innerHTML = `<div class="qn">Pergunta ${i + 1}/${Q.length} ${bank === 'saude' ? '🩺' : bank === 'fake' ? '📰' : bank === 'cidade' ? '🏛️' : '✏️'}</div><div class="qq">${q}</div><div class="qbar"><i></i></div><div class="qopts">${shuffle(opts).map(o => `<button class="qo ${o === 'FATO' ? 'fato' : o === 'FAKE' ? 'fakeb' : ''}">${o}</button>`).join('')}</div>`;
    ui.querySelectorAll('.qo').forEach(b => b.onclick = () => answer(b, b.textContent === correct, correct));
  };
  const answer = (b, right, correct) => {
    if (over || ui.dataset.lock) return; ui.dataset.lock = 1;
    ui.querySelectorAll('.qo').forEach(x => { if (x.textContent === correct) x.classList.add('ok'); });
    if (right) { ok++; combo++; ctx.sfx(combo >= 3 ? 'combo' : 'good'); ctx.float(area.clientWidth / 2 - 30, 60, combo >= 3 ? `Sequência x${combo}! 🔥` : 'Certo! ✅', '#2fb14b'); } else { combo = 0; if (b) b.classList.add('no'); ctx.sfx('bad'); }
    ctx.score(`${ok}/${Q.length}`); setTimeout(() => { delete ui.dataset.lock; i++; show(); }, 750);
  };
  qiv = setInterval(() => { if (over || ui.dataset.lock) return; qt -= 0.1; const bar = ui.querySelector('.qbar i'); if (bar) bar.style.width = (qt / 8 * 100) + '%'; ctx.time(qt); if (qt <= 0) answer(null, false, Q[i][1][0]); }, 100);
  ctx.score(`0/${Q.length}`); show();
  function finish() { if (over) return; over = true; clearInterval(qiv); ctx.end(ok / Q.length); }
  return { destroy() { over = true; clearInterval(qiv); }, win() { ok = Q.length; finish(); } };
}

// ---------- TRIBUNAL ----------
const CASOS = [
  ['📹 A câmera mostra o réu no shopping às 20h.', ['Saí do trabalho às 18h.', 'Jantei em casa sozinho às 20h.', 'Dormi por volta das 23h.'], 1],
  ['🧾 Recibo: abasteceu em Campinas às 7h.', ['Moro em Campinas há 5 anos.', 'Meu carro é prata.', 'Ontem acordei só às 10h.'], 2],
  ['📱 O celular do réu estava em Recife às 15h.', ['Passei a tarde toda em Natal.', 'Almocei ao meio-dia.', 'Fui de ônibus.'], 0],
  ['🌧️ Choveu forte a noite toda.', ['Voltei pra casa às 22h.', 'A rua estava seca quando cheguei.', 'Assisti TV depois.'], 1],
  ['🏪 A loja fecha às 18h.', ['Comprei o presente lá às 21h.', 'Paguei no cartão.', 'O vendedor foi simpático.'], 0],
  ['🚗 O carro está registrado no nome do réu.', ['Eu nunca tive carro.', 'Vou de bicicleta às vezes.', 'Tenho carteira de motorista.'], 0],
  ['🎂 Nota fiscal da padaria: bolo de chocolate.', ['Encomendei o bolo.', 'Eu mesmo fiz o bolo em casa.', 'A festa começou às 19h.'], 1],
  ['🐕 Vizinhos: o cachorro latiu a noite toda.', ['Foi uma noite silenciosa.', 'Moro com meu cachorro.', 'Fui deitar cedo.'], 0],
  ['📸 Foto do réu na praia às 14h.', ['Fiquei no escritório até as 17h.', 'Gosto de praia.', 'Uso óculos escuros.'], 0],
];
function court(ctx) {
  ctx.hint(ctx.prof.id === 'juiz' ? 'Compare a prova com o depoimento e aponte a mentira' : 'Toque na frase que CONTRADIZ a prova'); const area = ctx.area; area.style.background = 'linear-gradient(#fef3c7,#d6b98c)';
  const cases = shuffle(CASOS).slice(0, 5); let i = 0, ok = 0, over = false, t = 12, iv; const ui = el('div', 'court'); area.appendChild(ui);
  const show = () => {
    if (i >= cases.length) return finish(); const [prova, deps, wrong] = cases[i]; t = 12;
    ui.innerHTML = `<div class="qn">⚖️ Caso ${i + 1}/${cases.length}</div><div class="prova"><small>PROVA</small>${prova}</div><div class="deps"><small>🗣️ DEPOIMENTO DO RÉU</small>${deps.map((d, k) => `<button class="dep" data-k="${k}">“${d}”</button>`).join('')}</div><div class="gavel">🔨</div>`;
    ui.querySelectorAll('.dep').forEach(b => b.onclick = () => judge(b, +b.dataset.k === wrong, wrong));
  };
  const judge = (b, right, wrong) => {
    if (over || ui.dataset.lock) return; ui.dataset.lock = 1; ui.querySelector(`.dep[data-k="${wrong}"]`)?.classList.add('lie'); ui.querySelector('.gavel').classList.add('bang');
    if (right) { ok++; ctx.sfx('combo'); ctx.float(area.clientWidth / 2 - 50, 80, 'OBJEÇÃO! 👉', '#2fb14b'); } else { b?.classList.add('no'); ctx.sfx('bad'); ctx.float(area.clientWidth / 2 - 50, 80, 'Não era essa...', '#ec4b47'); }
    ctx.score(`${ok}/${cases.length}`); setTimeout(() => { delete ui.dataset.lock; i++; show(); }, 1000);
  };
  iv = setInterval(() => { if (over || ui.dataset.lock) return; t -= 0.1; ctx.time(t); if (t <= 0) judge(null, false, cases[i][2]); }, 100);
  ctx.score(`0/${cases.length}`); show();
  function finish() { if (over) return; over = true; clearInterval(iv); ctx.end(ok / cases.length); }
  return { destroy() { over = true; clearInterval(iv); }, win() { ok = cases.length; finish(); } };
}

// ---------- BOMBEIRO ----------
function fire(ctx) {
  ctx.hint('Segure o dedo no fogo pra jogar água 💦'); const area = ctx.area; const { c, x, w, h } = canvasIn(area, 1.3);
  const COLS = 3, ROWS = 4, bw = w * 0.8, bx = w * 0.1, by = h * 0.06, bh = h * 0.7; const wins = []; for (let r = 0; r < ROWS; r++) for (let q = 0; q < COLS; q++) wins.push({ x: bx + bw * (q + 0.5) / COLS, y: by + bh * (r + 0.5) / ROWS, fire: 0, hp: 0, age: 0, burnt: false });
  let ptr = null, out = 0, over = false, spawnT = 0; const GOAL = 14; const drops = [];
  c.onpointerdown = (e) => { const r = c.getBoundingClientRect(); ptr = { x: e.clientX - r.left, y: e.clientY - r.top }; c.setPointerCapture(e.pointerId); };
  c.onpointermove = (e) => { if (!ptr) return; const r = c.getBoundingClientRect(); ptr = { x: e.clientX - r.left, y: e.clientY - r.top }; };
  c.onpointerup = c.onpointercancel = () => ptr = null;
  const stopLoop = loop((dt, t) => {
    spawnT -= dt; if (spawnT <= 0) { spawnT = Math.max(0.55, 1.2 - out * 0.04); const free = wins.filter(wn => !wn.fire); if (free.length) { const wn = rnd(free); wn.fire = 1; wn.hp = 1; wn.age = 0; } }
    for (const wn of wins) if (wn.fire) { wn.age += dt; if (ptr && Math.hypot(ptr.x - wn.x, ptr.y - wn.y) < bw / COLS * 0.55) { wn.hp -= dt * 1.9; if (Math.random() < 0.3) ctx.sfx('spray'); } if (wn.hp <= 0) { wn.fire = 0; out++; ctx.sfx('good'); ctx.float(wn.x - 20, wn.y - 30, '+1 💦', '#0ea5e9'); ctx.score(`${out}/${GOAL}`); if (out >= GOAL) finish(); } else if (wn.age > 6.5) { wn.fire = 0; wn.burnt = true; ctx.sfx('bad'); } }
    x.fillStyle = '#bae6fd'; x.fillRect(0, 0, w, h); x.fillStyle = '#e2e8f0'; x.fillRect(bx - 8, by - 8, bw + 16, bh + 16); x.fillStyle = '#b5523a'; x.fillRect(bx, by, bw, bh);
    for (const wn of wins) { const ww = bw / COLS * 0.6, wh = bh / ROWS * 0.6; x.fillStyle = wn.burnt ? '#1b2340' : '#7dd3fc'; x.fillRect(wn.x - ww / 2, wn.y - wh / 2, ww, wh); if (wn.fire) { const s = (0.8 + Math.sin(t * 14 + wn.x) * 0.1) * (0.5 + wn.hp * 0.6) * (1 + wn.age * 0.05); x.font = `${ww * s}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🔥', wn.x, wn.y); } }
    x.fillStyle = '#6a7393'; x.fillRect(0, h * 0.8, w, h * 0.2); x.font = `${w * 0.13}px serif`; x.textAlign = 'center'; x.fillText('🚒', w / 2, h * 0.9);
    if (ptr) { for (let k = 0; k < 3; k++) drops.push({ x: w / 2, y: h * 0.85, tx: ptr.x + (Math.random() - 0.5) * 20, ty: ptr.y + (Math.random() - 0.5) * 20, k: 0 }); x.strokeStyle = 'rgba(14,165,233,.5)'; x.lineWidth = 8; x.beginPath(); x.moveTo(w / 2, h * 0.85); x.quadraticCurveTo(w / 2, ptr.y, ptr.x, ptr.y); x.stroke(); }
    for (let i = drops.length - 1; i >= 0; i--) { const d = drops[i]; d.k += dt * 3; if (d.k >= 1) { drops.splice(i, 1); continue; } x.fillStyle = 'rgba(56,189,248,.8)'; x.beginPath(); x.arc(d.x + (d.tx - d.x) * d.k, d.y + (d.ty - d.y) * d.k, 4, 0, 7); x.fill(); }
  });
  ctx.score(`0/${GOAL}`); const stop = countdown(ctx, 32, () => finish());
  function finish() { if (over) return; over = true; stopLoop(); stop(); ctx.end(Math.min(1, out / GOAL)); }
  return { destroy() { over = true; stopLoop(); stop(); }, win() { out = GOAL; finish(); } };
}

// ---------- PÊNALTI ----------
function penalty(ctx) {
  ctx.hint('Toque na hora certa pra chutar na mira 🎯'); const area = ctx.area; const { c, x, w, h } = canvasIn(area, 1.2);
  const gx = w * 0.12, gw = w * 0.76, gy = h * 0.12, gh = h * 0.3; let kick = 0, goals = 0, over = false, aim = 0, ball = null, keeper = 0.5, kdir = 1, msg = '', msgT = 0; const KICKS = 5;
  c.onpointerdown = (e) => { e.preventDefault(); if (ball || over) return; const tx = gx + gw * (0.5 + 0.55 * Math.sin(aim)); ball = { k: 0, tx, ty: gy + gh * (0.35 + Math.random() * 0.4) }; ctx.sfx('kick'); };
  const stopLoop = loop((dt, t) => {
    aim += dt * (2.2 + kick * 0.35); keeper += kdir * dt * (0.45 + kick * 0.12); if (keeper > 0.85) kdir = -1; if (keeper < 0.15) kdir = 1;
    x.fillStyle = '#2fb14b'; x.fillRect(0, 0, w, h); for (let k = 0; k < 8; k++) { x.fillStyle = k % 2 ? '#15803d' : '#2fb14b'; x.fillRect(0, h * k / 8, w, h / 8); }
    x.fillStyle = '#f8fafc'; x.fillRect(gx - 6, gy - 6, gw + 12, 6); x.fillRect(gx - 6, gy - 6, 6, gh + 6); x.fillRect(gx + gw, gy - 6, 6, gh + 6);
    x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 1; for (let k = 0; k < gw; k += 12) { x.beginPath(); x.moveTo(gx + k, gy); x.lineTo(gx + k, gy + gh); x.stroke(); } for (let k = 0; k < gh; k += 12) { x.beginPath(); x.moveTo(gx, gy + k); x.lineTo(gx + gw, gy + k); x.stroke(); }
    const kx = gx + gw * keeper; x.font = `${gh * 0.75}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🧤', kx, gy + gh * 0.55);
    x.fillStyle = '#ffc425'; x.fillRect(kx - gw * 0.12, gy + gh * 0.9, gw * 0.24, 4);
    if (!ball && !over) { const ax = gx + gw * (0.5 + 0.55 * Math.sin(aim)); x.font = `${w * 0.09}px serif`; x.fillText('🎯', ax, gy + gh * 0.5); }
    x.fillStyle = '#fff'; x.beginPath(); x.ellipse(w / 2, h * 0.82, w * 0.1, h * 0.02, 0, 0, 7); x.fill();
    if (ball) { ball.k += dt * 2.2; const bx2 = w / 2 + (ball.tx - w / 2) * ball.k, by2 = h * 0.8 + (ball.ty - h * 0.8) * ball.k; x.font = `${w * 0.1 * (1 - ball.k * 0.45)}px serif`; x.fillText('⚽', bx2, by2);
      if (ball.k >= 1) { kick++; const inGoal = ball.tx > gx && ball.tx < gx + gw, saved = Math.abs(ball.tx - kx) < gw * 0.13; if (inGoal && !saved) { goals++; msg = 'GOOOL! ⚽'; ctx.sfx('combo'); } else { msg = saved ? 'DEFENDEU! 🧤' : 'PRA FORA! 😩'; ctx.sfx('bad'); } msgT = 1; ball = null; ctx.score(`${goals}/${KICKS}`); if (kick >= KICKS) setTimeout(finish, 900); } }
    else { x.font = `${w * 0.1}px serif`; x.fillText('⚽', w / 2, h * 0.8); }
    if (msgT > 0) { msgT -= dt; x.globalAlpha = Math.min(1, msgT * 2); x.font = `900 ${w * 0.11}px system-ui`; x.fillStyle = '#ffc425'; x.strokeStyle = '#000'; x.lineWidth = 6; x.strokeText(msg, w / 2, h * 0.58); x.fillText(msg, w / 2, h * 0.58); x.globalAlpha = 1; }
    x.font = `${w * 0.05}px serif`; for (let k = 0; k < KICKS; k++) x.fillText(k < kick ? '●' : '○', w / 2 + (k - 2) * w * 0.07, h * 0.95);
  });
  ctx.score(`0/${KICKS}`); ctx.time(0);
  function finish() { if (over) return; over = true; stopLoop(); ctx.end(goals / KICKS); }
  return { destroy() { over = true; stopLoop(); }, win() { goals = KICKS; finish(); } };
}

// ---------- BOLSA / IMÓVEIS ----------
function market(ctx) {
  const imov = ctx.prof.id === 'corretor'; ctx.hint(imov ? 'Compre imóveis barato e venda caro 🏘️' : 'Compre na baixa, venda na alta 📈');
  const area = ctx.area; const wrap = el('div', 'mk'); area.appendChild(wrap); const { c, x, w, h } = canvasIn(wrap, 0.75, area.clientHeight - 150);
  const bar = el('div', 'mkbar', `<div class="mkinfo"></div><div class="mkbtns"><button class="buy">COMPRAR</button><button class="sell">VENDER</button></div>`); area.appendChild(bar);
  let cash = 1000, units = 0, price = 100, hist = [], t = 0, over = false; const ph = Math.random() * 6; const GOAL = 300;
  const info = bar.querySelector('.mkinfo'); const total = () => cash + units * price;
  const upd = () => { info.innerHTML = `💵 R$ ${cash.toFixed(0)} • ${imov ? '🏠' : '📈'} ${units} • Total <b style="color:${total() >= 1000 ? '#2fb14b' : '#ec4b47'}">R$ ${total().toFixed(0)}</b>`; ctx.score(`${total() - 1000 >= 0 ? '+' : ''}${(total() - 1000).toFixed(0)}`); };
  bar.querySelector('.buy').onclick = () => { const n = Math.floor(cash / price); if (!n) return ctx.sfx('bad'); units += n; cash -= n * price; ctx.sfx('tick'); ctx.float(w * 0.2, h * 0.3, `comprou ${n} a R$${price.toFixed(0)}`, '#2f80ed'); upd(); };
  bar.querySelector('.sell').onclick = () => { if (!units) return ctx.sfx('bad'); const v = units * price; cash += v; ctx.sfx(price > 110 ? 'combo' : 'good'); ctx.float(w * 0.5, h * 0.3, `vendeu a R$${price.toFixed(0)}`, '#2fb14b'); units = 0; upd(); };
  const stopLoop = loop((dt) => {
    t += dt; price = Math.max(20, 100 + 26 * Math.sin(t * 0.85 + ph) + 9 * Math.sin(t * 2.7 + ph * 2) + (Math.random() - 0.5) * 3); hist.push(price); if (hist.length > 220) hist.shift();
    x.fillStyle = '#1b2340'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,255,255,.08)'; for (let k = 0; k < 5; k++) { x.beginPath(); x.moveTo(0, h * k / 5); x.lineTo(w, h * k / 5); x.stroke(); }
    const y = (p) => h - ((p - 50) / 110) * h; x.lineWidth = 3; x.strokeStyle = hist.length > 1 && hist[hist.length - 1] >= hist[hist.length - 2] ? '#2fb14b' : '#ec4b47'; x.beginPath(); hist.forEach((p, i) => { const X = (i / 220) * w; i ? x.lineTo(X, y(p)) : x.moveTo(X, y(p)); }); x.stroke();
    x.fillStyle = '#fff'; x.font = '800 18px system-ui'; x.textAlign = 'left'; x.fillText(`${imov ? '🏠 Casa' : '📊 BRC3'}  R$ ${price.toFixed(2)}`, 10, 26); upd();
  });
  upd(); const stop = countdown(ctx, 28, () => finish());
  function finish() { if (over) return; over = true; stopLoop(); stop(); cash += units * price; units = 0; ctx.end(Math.max(0, Math.min(1, (cash - 1000) / GOAL))); }
  return { destroy() { over = true; stopLoop(); stop(); }, win() { cash = 1000 + GOAL; units = 0; finish(); } };
}

export const ENGINES = { tap, match3, delivery, bricks, sort, cook, quiz, court, fire, penalty, market };
export const MG_NAMES = { tap: 'Reflexo', match3: 'Combina 3', delivery: 'Entrega', bricks: 'Empilha', sort: 'Recicla', cook: 'Cozinha', quiz: 'Quiz', court: 'Tribunal', fire: 'Incêndio', penalty: 'Pênalti', market: 'Bolsa' };
