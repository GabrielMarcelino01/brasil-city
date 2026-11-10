// ===== Landing page + cadastro (DOM estático, sem 3D) =====
import { SIDES, REGIAO_UFS, UF_NOME, CAPITAIS, PROFISSOES } from './data.js';
import { MUNICIPIOS } from './municipios.js';
import { MAYOR_HANDLE } from './config.js';
import { MG_NAMES } from './minigames.js';
import { plansHTML, checkoutHTML, carPickerHTML, skinPickerHTML } from './vipui.js';

const $ = (s) => document.querySelector(s);
const fmtN = (n) => Math.floor(n).toLocaleString('pt-BR');
export const LAUNCH = Date.UTC(2026, 10, 6, 12);
export function landingTotals() {
  const h = Math.max(0, (Date.now() - LAUNCH) / 3.6e6); const wave = Math.sin(h / 5) * 0.012;
  const base = 41000 + h * 520;
  return { moradores: base, cidades: 1180 + h * 3.2, obras: 280 + h * 0.9, norte: 0.5 + wave, sul: 0.5 - wave };
}
const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function initLanding({ onStart, onContinue, savedHandle, toast }) {
  const L = $('#landing'); L.hidden = false;
  L.querySelectorAll('[data-go="start"]').forEach(b => b.addEventListener('click', () => onStart(b.dataset.side)));
  const cont = $('#lp-continue'); if (savedHandle) { cont.hidden = false; cont.textContent = `▶ Continuar como @${savedHandle}`; cont.onclick = onContinue; }
  $('#lp-buy').onclick = () => toast('🛒 Checkout em breve! Nesta versão de teste nada é vendido nem cobrado.', 4000);
  L.querySelectorAll('[data-soon]').forEach(a => a.onclick = (e) => { e.preventDefault(); toast('Em breve 😉'); });
  // números simulados
  const t = landingTotals(); const pn = Math.round(t.norte * 100);
  L.querySelectorAll('[data-ns="n"]').forEach(e => e.textContent = pn + '%'); L.querySelectorAll('[data-ns="s"]').forEach(e => e.textContent = (100 - pn) + '%');
  $('#lp-nb').style.width = pn + '%'; $('#lp-nb').textContent = `🌴 ${pn}%`; $('#lp-sb').style.width = (100 - pn) + '%'; $('#lp-sb').textContent = `${100 - pn}% 🏙️`;
  $('#lp-ticker').textContent = `🌴 NORTE ${pn}% x ${100 - pn}% SUL 🏙️ • ${fmtN(t.moradores)} moradores • ${fmtN(t.cidades)} cidades ativas • 🏆 Vila ➜ Cidade Comum ➜ Nível Suíça ➜ Nível Japão ➜ Nível EUA ➜ Grande Potência • números simulados do protótipo •`;
  const counters = L.querySelectorAll('[data-count]');
  const animCount = (el) => { const target = t[el.dataset.count]; const t0 = performance.now(); const f = (now) => { const k = Math.min(1, (now - t0) / 1400); el.textContent = fmtN(target * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); };
  const io = new IntersectionObserver((ents) => ents.forEach(en => {
    const el = en.target;
    if (el.tagName === 'VIDEO') { if (en.isIntersecting) { el.preload = 'auto'; el.play().catch(() => {}); } else el.pause(); return; }
    if (en.isIntersecting) { if (el.dataset.count) { animCount(el); io.unobserve(el); } else { el.classList.add('on'); io.unobserve(el); } }
  }), { root: L, threshold: 0.25 });
  counters.forEach(c => io.observe(c)); L.querySelectorAll('.reveal').forEach(r => io.observe(r)); L.querySelectorAll('video[data-lazy]').forEach(v => io.observe(v));
  const hv = L.querySelector('.phone video'); hv?.play?.().catch(() => {});
}
export function hideLanding() { const L = $('#landing'); L.hidden = true; L.querySelectorAll('video').forEach(v => v.pause()); }
export function showLandingAgain() { const L = $('#landing'); L.hidden = false; L.scrollTop = 0; L.querySelector('.phone video')?.play().catch(() => {}); }

// ---------------- cadastro ----------------
const STEPS = ['handle', 'idade', 'lado', 'estado', 'cidade', 'prof', 'plano'];
export function startSignup({ preSide, onDone, onCancel, toast, vipTest = false }) {
  const draft = { side: preSide || null, plan: 'free' }; let step = 0, sub = null;
  const box = $('#signup'), body = $('#su-body'); box.hidden = false; box.classList.remove('su-vip');
  $('#su-back').onclick = () => { if (sub) { sub === 'skin' ? carro() : plano(); return; } if (step === 0) { box.hidden = true; onCancel(); } else go(step - 1); };
  const isMayor = () => draft.handle === MAYOR_HANDLE;
  function go(n) {
    step = n; sub = null; const total = isMayor() ? 5 : 7; $('#su-prog').style.width = ((n + 1) / total * 100) + '%'; $('#su-n').textContent = `${n + 1}/${total}`;
    body.style.animation = 'none'; body.offsetHeight; body.style.animation = ''; box.scrollTop = 0; box.classList.toggle('su-vip', STEPS[n] === 'plano');
    ({ handle, idade, lado, estado, cidade, prof, plano })[STEPS[n]]();
  }
  function subGo(name, fn) { sub = name; body.style.animation = 'none'; body.offsetHeight; body.style.animation = ''; box.scrollTop = 0; box.classList.add('su-vip'); fn(); }
  function handle() {
    body.innerHTML = `<h2>Qual é o seu @ do Instagram?</h2><p class="hint">Ele vira o nome do seu morador e aparece em cima da sua cabeça na cidade.</p>
      <div class="igin"><span>@</span><input id="su-h" maxlength="30" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="seu.usuario" value="${esc(draft.handle || '')}"></div>
      <div class="ig-badge">🔒 Nesta versão de teste nada é enviado pra internet.</div>
      <button class="su-next" id="su-ok">Continuar ➜</button><p class="su-foot">Ao continuar você concorda em jogar limpo 😉</p>`;
    const inp = $('#su-h'), ok = $('#su-ok');
    const clean = () => inp.value.trim().replace(/^@+/, '').toLowerCase().replace(/[^a-z0-9._]/g, '');
    const val = () => { ok.disabled = clean().length < 2; }; inp.oninput = val; val();
    const next = () => { const h = clean(); if (h.length < 2) return toast('Digite seu @ (mínimo 2 letras)'); draft.handle = h; go(1); };
    ok.onclick = next; inp.onkeydown = (e) => { if (e.key === 'Enter') next(); };
    setTimeout(() => inp.focus({ preventScroll: true }), 250);
  }
  function idade() {
    const opts = [['até 12', 'com um responsável'], ['13 a 17', ''], ['18 a 24', ''], ['25 a 34', ''], ['35 a 44', ''], ['45+', '']];
    body.innerHTML = `<h2>Quantos anos você tem?</h2><p class="hint">Pra deixar o jogo com a sua cara. Ninguém vê isso além de você.</p>
      <div class="ages">${opts.map(([a, s]) => `<button class="age ${draft.idade === a ? 'sel' : ''}" data-a="${a}">${a}${s ? `<small>${s}</small>` : ''}</button>`).join('')}</div>`;
    body.querySelectorAll('.age').forEach(b => b.onclick = () => { draft.idade = b.dataset.a; b.classList.add('sel'); setTimeout(() => go(2), 140); });
  }
  function lado() {
    const card = (s) => { const d = SIDES[s]; return `<button class="side2 ${s} ${draft.side === s ? 'sel' : ''}" data-s="${s}"><span class="se">${d.emoji}</span><b>${d.emoji} ${d.nome}</b><div class="rg">${d.regioes.join(' • ')}</div><span class="st">Estilo ${d.estilo}</span><ul>${d.perks.slice(0, 3).map(p => `<li>${p}</li>`).join('')}</ul></button>`; };
    body.innerHTML = `<h2>Qual Brasil você vai ajudar a virar potência?</h2><p class="hint">Não tem lado rico ou pobre: é o seu jeito de jogar.</p><div class="sides2">${card('norte')}${card('sul')}</div>`;
    body.querySelectorAll('.side2').forEach(b => b.onclick = () => { if (draft.side !== b.dataset.s) { draft.uf = null; draft.cidade = null; } draft.side = b.dataset.s; b.classList.add('sel'); setTimeout(() => go(3), 140); });
  }
  function estado() {
    const regs = SIDES[draft.side].regioes;
    body.innerHTML = `<h2>Em qual estado você mora?</h2><p class="hint">${SIDES[draft.side].emoji} ${SIDES[draft.side].nome}</p>
      ${regs.map(rg => `<div class="rgh">${rg}</div><div class="ufgrid">${REGIAO_UFS[rg].map(uf => `<button class="uf2 ${draft.uf === uf ? 'sel' : ''}" data-uf="${uf}"><b>${uf}</b><small>${UF_NOME[uf]}</small></button>`).join('')}</div>`).join('')}`;
    body.querySelectorAll('.uf2').forEach(b => b.onclick = () => { if (draft.uf !== b.dataset.uf) draft.cidade = null; draft.uf = b.dataset.uf; b.classList.add('sel'); setTimeout(() => go(4), 120); });
  }
  function cidade() {
    const all = MUNICIPIOS[draft.uf].split('|'); const cap = CAPITAIS[draft.uf]; const idx = all.map(c => norm(c));
    body.innerHTML = `<h2>Qual é a sua cidade?</h2><p class="hint">${UF_NOME[draft.uf]} tem <b>${all.length}</b> municípios. Busque o seu:</p>
      <div class="search"><input id="su-q" placeholder="Digite o nome da cidade" autocomplete="off" spellcheck="false"></div><div class="ccount" id="su-cc"></div><div class="clist" id="su-cl"></div>`;
    const q = $('#su-q'), cl = $('#su-cl'), cc = $('#su-cc');
    const render = () => {
      const s = norm(q.value.trim()); let list;
      if (!s) list = [cap, ...all.filter(c => c !== cap)];
      else { const starts = [], has = []; all.forEach((c, i) => { const k = idx[i].indexOf(s); if (k === 0) starts.push(c); else if (k > 0) has.push(c); }); list = [...starts, ...has]; }
      const shown = list.slice(0, 60);
      cc.textContent = s ? `${list.length} resultado${list.length === 1 ? '' : 's'}` : `Mostrando ${shown.length} de ${all.length} • digite pra buscar`;
      cl.innerHTML = shown.map(c => { let label = esc(c); if (s) { const k = norm(c).indexOf(s); if (k >= 0) label = esc(c.slice(0, k)) + '<mark>' + esc(c.slice(k, k + s.length)) + '</mark>' + esc(c.slice(k + s.length)); } return `<button class="city2" data-c="${esc(c)}">📍 ${label}${c === cap ? '<em>CAPITAL</em>' : ''}</button>`; }).join('') || `<p class="hint">Nenhuma cidade com esse nome em ${draft.uf}. Confira a grafia 😉</p>`;
    };
    q.oninput = render; render();
    cl.onclick = (e) => { const b = e.target.closest('.city2'); if (!b) return; draft.cidade = b.dataset.c; b.style.background = '#ffdf00'; setTimeout(() => isMayor() ? finish() : go(5), 120); };
  }
  function prof() {
    const ps = PROFISSOES.filter(p => p.nivel === 1);
    body.innerHTML = `<h2>Qual vai ser seu primeiro trampo?</h2><p class="hint">Cada profissão é um minigame diferente. Depois você desbloqueia outras 21.</p>
      <div class="profs2">${ps.map(p => `<button class="prof2" data-p="${p.id}"><span class="pe">${p.emoji}</span><b>${p.nome}</b><span class="mgt">🎮 ${MG_NAMES[p.mg]}</span><small>${p.desc}</small></button>`).join('')}</div>`;
    body.querySelectorAll('.prof2').forEach(b => b.onclick = () => { draft.prof = b.dataset.p; go(6); });
  }
  function plano() {
    sub = null; box.classList.add('su-vip');
    body.innerHTML = `<h2>Escolha seu plano</h2><p class="hint">Jogue de graça pra sempre ou entre como <b>VIP</b> com tudo liberado.</p>${plansHTML({ test: vipTest })}`;
    $('#pl-free').onclick = () => { draft.plan = 'free'; finish(); };
    $('#pl-vip').onclick = () => { if (vipTest) { draft.plan = 'vip'; toast('VIP liberado (modo teste)!'); carro(); } else subGo('pix', checkout); };
    body.querySelectorAll('.plan').forEach(c => c.addEventListener('click', (e) => { if (e.target.closest('button')) return; (c.classList.contains('vip') ? $('#pl-vip') : $('#pl-free')).click(); }));
  }
  function checkout() {
    body.innerHTML = `<h2>Finalizar VIP</h2><p class="hint">Falta pouco pra entrar com tudo liberado.</p>${checkoutHTML()}`;
    $('#px-free').onclick = () => { draft.plan = 'free'; finish(); }; $('#px-back').onclick = () => plano();
  }
  function carro() {
    subGo('car', () => {
      body.innerHTML = `<h2>Escolha seu carro esportivo</h2><p class="hint">Presente do VIP: ele já fica estacionado na frente da sua casa.</p>${carPickerHTML(draft.vipCar)}`;
      body.querySelectorAll('.car3').forEach(b => b.onclick = () => { draft.vipCar = b.dataset.car; body.querySelectorAll('.car3').forEach(x => x.classList.toggle('sel', x === b)); setTimeout(skin, 260); });
    });
  }
  function skin() {
    subGo('skin', () => {
      body.innerHTML = `<h2>Suas 2 skins lendárias</h2><p class="hint">Qual você quer usar agora?</p>${skinPickerHTML(draft.vipSkin)}`;
      body.querySelectorAll('.skin2').forEach(b => b.onclick = () => { draft.vipSkin = b.dataset.skin; draft.plan = 'vip'; body.querySelectorAll('.skin2').forEach(x => x.classList.toggle('sel', x === b)); setTimeout(finish, 260); });
    });
  }
  function finish() { box.hidden = true; box.classList.remove('su-vip'); onDone({ ...draft }); }
  go(0);
}
