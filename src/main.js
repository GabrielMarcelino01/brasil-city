import { World, rng } from './world.js';
import { SIDES, UF_NOME, LEVEL_XP, MAX_LEVEL, PROFISSOES, PROF_PREFEITO, BUILD_STAGES, LOJA, NEGOCIOS, OBRAS_CIDADE, STAGES, MISSOES, LOGIN_REWARDS, CONQUISTAS, NOMES, SUFIXOS, GAME_NAME, CAPITAIS } from './data.js';
import { MAYOR_HANDLE, MAYOR_NAME, MAYOR_DEFAULT, PLANS } from './config.js';
import { grantVip, isVip, ensurePlan, lotM2, VIP_CARS, VIP_SKINS } from './vip.js';
import { plansHTML, mountCheckout, carPickerHTML, skinPickerHTML } from './vipui.js';
import { verifyVipToken, loadPending, pendingExpired, mayorLogin, verifyMayorToken } from './pay.js';
import { initChat } from './chat/chat.js';
import { ENGINES, MG_NAMES } from './minigames.js';
import { startIconObserver, stripEmoji, ico } from './icons.js';
import { initLanding, hideLanding, showLandingAgain, startSignup, landingTotals } from './landing.js';

const SAVE_KEY = 'brasilcity_save_v3', SET_KEY = 'brasilcity_settings_v1';
const $ = (s) => document.querySelector(s);
const fmt = (n) => '🪙' + Math.floor(n).toLocaleString('pt-BR'); // 🪙 vira o ícone de moeda na tela
const fmtN = (n) => Math.floor(n).toLocaleString('pt-BR');
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ENERGY_COST = 10, ENERGY_REGEN_S = 12, TRASH_COST = 3, TREE_COST = 60, PAVE_COST = 250;
const TOTAL_LOTS = 128;
const params = new URLSearchParams(location.search);
const IS_LOCAL = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
const VIP_TEST = IS_LOCAL && params.get('vip') === '1'; // libera o VIP sem pagamento SÓ em teste local (nunca no site no ar)
// itens exclusivos do VIP entram na loja (carros e skins lendárias)
for (const c of VIP_CARS) LOJA.veiculos.push({ id: c.id, nome: c.nome, icon: c.icon, desc: c.desc, vel: c.vel, vip: true });
for (const k of VIP_SKINS) LOJA.roupas.push({ id: k.id, nome: k.nome, icon: k.icon, desc: k.tipo, tipo: 'skin', vip: true });
let chat = null;
const vipSeal = () => `<span class="vipseal" title="VIP">${ico('vip')}</span>`;
const igLink = (h) => `<a class="iglink" href="https://instagram.com/${encodeURIComponent(h)}" target="_blank" rel="noopener noreferrer">@${esc(h)}</a>`;

let S = null, world = null;
const defaultQ = (matchMedia('(pointer:coarse)').matches && (navigator.hardwareConcurrency || 4) <= 4) ? 'baixa' : 'alta';
const settings = Object.assign({ quality: defaultQ, dayNight: false, sound: true }, JSON.parse(localStorage.getItem(SET_KEY) || '{}'));

// ---------- som (WebAudio, sem arquivos) ----------
let AC = null;
function sfx(name) {
  if (!settings.sound) return; try { AC ||= new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  if (AC.state === 'suspended') AC.resume();
  const t = AC.currentTime; const tone = (f, d, type = 'square', v = 0.06, at = 0, f2) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.setValueAtTime(f, t + at); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + at + d); g.gain.setValueAtTime(v, t + at); g.gain.exponentialRampToValueAtTime(0.0001, t + at + d); o.connect(g).connect(AC.destination); o.start(t + at); o.stop(t + at + d + 0.02); };
  const S_ = { good: () => tone(660, 0.09, 'square', 0.05, 0, 990), bad: () => tone(180, 0.2, 'sawtooth', 0.05, 0, 90), tick: () => tone(880, 0.04, 'triangle', 0.04),
    combo: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.09, 'square', 0.045, i * 0.06)), coin: () => { tone(988, 0.07, 'square', 0.04); tone(1319, 0.18, 'square', 0.04, 0.07); },
    star: () => tone(1046, 0.25, 'triangle', 0.07, 0, 1568), kick: () => tone(120, 0.15, 'sine', 0.2, 0, 40), spray: () => tone(2000 + Math.random() * 800, 0.03, 'sawtooth', 0.01),
    build: () => { tone(220, 0.08, 'square', 0.06); tone(330, 0.08, 'square', 0.06, 0.1); tone(440, 0.15, 'square', 0.06, 0.2); },
    level: () => [523, 659, 784, 659, 784, 1046].forEach((f, i) => tone(f, 0.16, 'square', 0.05, i * 0.11)), pop: () => tone(400, 0.08, 'sine', 0.08, 0, 800), tap: () => tone(520, 0.05, 'sine', 0.05, 0, 720) };
  S_[name]?.();
}

// ---------- utilidades de estado ----------
function genNames(n, seed) { const r = rng(seed * 977 + 13); return Array.from({ length: n }, () => NOMES[Math.floor(r() * NOMES.length)] + SUFIXOS[Math.floor(r() * SUFIXOS.length)]); }
const seedOf = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
function save() { if (S) { S.savedAt = Date.now(); localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } }
function load() { try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch { return null; } }
function levelOf(xp) { let l = 1; for (let i = 1; i < LEVEL_XP.length; i++) if (xp >= LEVEL_XP[i]) l = i + 1; return Math.min(l, MAX_LEVEL); }
function prof(id) { return id === 'prefeito' ? PROF_PREFEITO : PROFISSOES.find(p => p.id === id); }
function reqVal(p) { return { totalWorks: S.stats.totalWorks, reputacao: S.stats.reputacao, perfeitos: S.stats.perfeitos }[p.req.tipo]; }
function reqOk(p) { return !p.req || reqVal(p) >= p.req.valor; }
const dayKey = (d = new Date()) => d.toLocaleDateString('sv');
const hoursSince = (t) => Math.max(0, (Date.now() - t) / 3.6e6);
function energyMax() { return 100 + (S.city.obras.includes('hospital') ? 10 : 0); }
function energyNow() { return Math.min(energyMax(), S.energia + (Date.now() - S.energiaTs) / 1000 / ENERGY_REGEN_S); }
function setEnergy(v) { S.energia = v; S.energiaTs = Date.now(); }
function hasHome() { return S.mayor || (S.lote?.stage || 0) >= 4; }

// ---------- cidade: vizinhos simulados, pontuação e estágio ----------
function npcLots() {
  const h = hoursSince(S.city.created) + (S.city.simH || 0); const r = rng(seedOf(S.cidade + 'lotes'));
  const cand = Array.from({ length: TOTAL_LOTS - 4 }, (_, i) => i + 4); for (let i = cand.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [cand[i], cand[j]] = [cand[j], cand[i]]; }
  const n = Math.min(30, 3 + Math.floor(h / 1.5)); const names = genNames(n, seedOf(S.cidade)); const out = {}; let k = 0;
  for (const idx of cand) { if (k >= n) break; if (S.lote && S.lote.idx === idx) continue; const t0 = Math.max(0, k - 2) * 1.5; out[idx] = { owner: names[k], stage: Math.max(1, Math.min(4, 1 + Math.floor((h - t0) / 1))), type: ['casa_simples', 'casa_reformada', 'sobrado', 'casa_simples'][Math.floor(r() * 4)] }; k++; }
  return out;
}
function myLotInfo() { return S.lote ? { stage: S.lote.stage, type: S.casa === 'p_mansao_dourada' ? 'mansao' : S.casa, golden: S.casa === 'p_mansao_dourada', me: true, owner: S.handle, vip: isVip(S), m2: lotM2(S) } : null; }
function cityBreakdown() {
  const c = S.city, npc = npcLots(); let houses = 0, partial = 0;
  for (const l of Object.values(npc)) { if (l.stage >= 4) houses++; else partial += l.stage; }
  if (S.lote) { if (S.lote.stage >= 4) houses++; else partial += S.lote.stage; }
  const h = hoursSince(c.created) + (c.simH || 0);
  const parts = { casas: 40 * houses + 8 * partial, limpeza: 4 * c.cleaned.length, arvores: 12 * c.trees.length, calcadas: 30 * c.paved.length, obras: 150 * c.obras.length, moradores: Math.floor(Math.min(h, 300) * 1.5), bonus: c.bonus || 0 };
  return { parts, total: Object.values(parts).reduce((a, b) => a + b, 0), houses, npc };
}
function cityScore() { return cityBreakdown().total; }
function stageOf(score) { let s = 0; STAGES.forEach((st, i) => { if (score >= st.min) s = i; }); return s; }
function cityCS() { const { npc, total } = cityBreakdown(); const lots = { ...npc }; if (S.lote) lots[S.lote.idx] = myLotInfo(); return { stage: stageOf(total), obras: S.city.obras, paved: S.city.paved, cleaned: S.city.cleaned, trees: S.city.trees, lots, mayor: MAYOR_HANDLE }; }
function suggestedLot() { const npc = npcLots(); for (let i = 0; i < TOTAL_LOTS; i++) if (!npc[i]) return i; return 0; }
function homeFront() { return S.mayor ? world.frontOfPalace() : world.frontOfLot(S.lote ? S.lote.idx : suggestedLot()); }
function residentsSim() { return Math.floor(12 + (hoursSince(S.city.created) + (S.city.simH || 0)) * 6 + cityScore() / 20); }

// ---------- criação / carregamento ----------
function newCity() { return { created: Date.now(), cleaned: [], trees: [], paved: [], obras: [], obra: { id: 'praca', prog: 0, ts: Date.now() }, caixa: 2000, stageSeen: 0, bonus: 0, decretos: {} }; }
function createPlayer(d) {
  const mayor = !!d.mayor && (!!d.mayorToken || (d.mayorDev && IS_LOCAL)); const r = rng(seedOf(d.handle + d.cidade));
  S = { v: 3, nome: mayor ? MAYOR_NAME : d.handle, handle: d.handle, idade: d.idade || null, side: d.side, uf: d.uf, cidade: d.cidade, mayor,
    numero: String(1 + Math.floor(r() * 99998)).padStart(5, '0'), criadoEm: Date.now(), prof: mayor ? 'prefeito' : d.prof, xp: 0, dinheiro: 200,
    energia: 100, energiaTs: Date.now(), casa: 'casa_simples', veiculo: null, roupa: 'camisa_verde', chapeu: null, inventario: ['casa_simples', 'camisa_verde'],
    negocios: {}, lote: null, city: newCity(), stats: { totalWorks: 0, perfeitos: 0, reputacao: 0, ganhos: 0, trash: 0, trees: 0, paved: 0, builds: 0, obras: 0 },
    passivaTs: Date.now(), missions: null, login: { last: null, streak: 0, claimed: null }, conq: [], lvSeen: 1, tut: 0, plan: 'free', skin: null };
  if (mayor) { grantVip(S, { source: 'prefeito' }); if (d.mayorToken) { S.mayorToken = d.mayorToken; S.mayorVerifiedAt = Date.now(); } else S.mayorDev = true; }
  if (d.plan === 'vip' && (d.vipToken || VIP_TEST)) { grantVip(S, { source: d.vipToken ? 'pix' : 'teste', txid: d.vipPid || null }); if (d.vipToken) { S.vip.token = d.vipToken; S.vip.verifiedAt = Date.now(); } if (d.vipCar) { S.veiculo = d.vipCar; S.vip.car = d.vipCar; } if (d.vipSkin) { S.skin = d.vipSkin; S.vip.skin = d.vipSkin; } }
  save();
}
function migrate(s) { s.stats = Object.assign({ totalWorks: 0, perfeitos: 0, reputacao: 0, ganhos: 0, trash: 0, trees: 0, paved: 0, builds: 0, obras: 0 }, s.stats); s.city ||= newCity(); s.city.decretos ||= {}; s.conq ||= []; s.login ||= { last: null, streak: 0 }; s.negocios ||= {}; s.lvSeen ||= levelOf(s.xp); ensurePlan(s); if (s.mayor && !isVip(s)) grantVip(s, { source: 'prefeito' }); return s; }

// ---------- mundo 3D ----------
function ensureWorld() {
  if (world) return world; $('#app').hidden = false; world = new World($('#scene')); world.setQuality(settings.quality); world.setDayNight(settings.dayNight); window.__game.world = world; return world;
}
function npcCount(stage) { return settings.quality === 'alta' ? 10 + stage * 4 : 6 + stage * 2; }
function buildWorld(keepPos) {
  const pos = keepPos && world.playerPos ? world.playerPos.clone() : null; const cs = cityCS();
  world.build(S.cidade, S.side, cs);
  world.spawnNPCs(npcCount(cs.stage), genNames(40, seedOf(S.cidade + 'npc')));
  const spawn = pos || homeFront(); world.spawn = spawn; world.playerPos = spawn.clone();
  refreshAvatar(); if (!pos) world.facePoint(S.mayor ? world.palacePos : world.lots[S.lote ? S.lote.idx : suggestedLot()]);
  world.vehicleSpeed = LOJA.veiculos.find(v => v.id === S.veiculo)?.vel || 2.6;
  world.setVehicle(vehicleModel(), homeFront());
  updateObra3D();
}
function vehicleModel() { return { p_esportivo: 'esportivo', p_carro_neon: 'neon' }[S.veiculo] || S.veiculo; }
function refreshAvatar() {
  const roupa = LOJA.roupas.find(x => x.id === S.roupa); const hat = LOJA.roupas.find(x => x.id === S.chapeu); const skin = isVip(S) ? S.skin : null;
  world.setPlayer({ shirt: S.mayor ? '#15803d' : (roupa?.cor || '#16a34a'), hat: skin ? null : hat?.modelo || null, cape: false, skin: S.pele || '#c68642', prof: skin || S.prof, hairCol: '#2b1a10', mayor: S.mayor, vip: isVip(S) }, S.handle);
}

// ---------- entrada no jogo ----------
function enterGame() {
  hideLanding(); $('#signup').hidden = true; ensureWorld(); document.body.classList.add('ingame');
  ensureMissions(); tickEconomy(true); S.city.stageSeen = Math.max(S.city.stageSeen || 0, stageOf(cityScore()));
  if (VIP_TEST && !isVip(S)) { grantVip(S, { source: 'teste' }); save(); }
  buildWorld(false); ui.innerHTML = ''; $('#hud').hidden = false; $('#joy').hidden = false; startChat(); renderHUD(); startCtxLoop();
  dailyLogin(); checkAch(true);
  if (isVip(S) && !S.mayor && !S.vip.car) enqueue(() => showCarPicker(true));
  revalidateVip(); revalidateMayor();
  const pend = !isVip(S) && loadPending(S.handle); if (pend && !pendingExpired(pend)) enqueue(() => showVipCheckout());
  if (!S.tut) { S.tut = 1; save(); enqueue(() => S.mayor ? toast(`👑 Bem-vindo, Prefeito! Abra o 🏛️ Gabinete pra lançar obras. ${S.cidade} ainda é uma Vila.`, 7000) : toast(`👋 ${S.cidade} ainda é uma Vila! Esse 🪧 terreno na sua frente está livre: toque em REIVINDICAR.`, 7000)); }
}
function startChat() {
  chat?.destroy();
  chat = initChat({ getPlayer: () => S, toast, bots: params.get('bots') !== '0',
    getCtx: () => ({ cidade: S.cidade, obra: obraDef()?.nome || 'da praça', lado: SIDES[S.side].nome }),
    residentCount: () => residentsSim(), botNames: () => (world?.npcs?.length ? world.npcs.map(n => n.name) : genNames(20, seedOf(S.cidade + 'npc'))),
    onUpsell: (from) => showPlans(from) });
  window.__chat = chat;
}
function backToLanding() { chat?.close(); closeModal(true); document.body.classList.remove('ingame'); $('#hud').hidden = true; $('#joy').hidden = true; if (world) world.mode = 'orbit'; showLandingAgain(); }

// ---------- economia ----------
function wageMult() { return 1 + 0.04 * S.city.obras.length; }
function tickEconomy(offline = false) {
  if (!S) return; const now = Date.now(); let mins = (now - S.passivaTs) / 60000; if (offline) mins = Math.min(mins, 120);
  if (mins > 0.05) {
    let renda = 0; if (S.side === 'sul') for (const n of NEGOCIOS) renda += (S.negocios[n.id] || 0) * n.renda * mins; else renda = (1.5 * levelOf(S.xp) + 3 * S.city.obras.length) * mins;
    S.dinheiro += renda; S.passivaTs = now; if (S.mayor) S.city.caixa += mins * 8;
    if (offline && renda > 1) setTimeout(() => toast(`💰 Enquanto você estava fora: +${fmt(renda)} (${S.side === 'sul' ? 'seus negócios' : 'Renda da Cooperativa'})`, 5000), 2500);
  }
  const o = S.city.obra; if (o) { const om = Math.min(240, (now - (o.ts || now)) / 60000); o.ts = now; addObra(om * (20 + 6 * stageOf(cityScore())), false); }
  save();
}
function obraDef() { return S.city.obra ? OBRAS_CIDADE.find(o => o.id === S.city.obra.id) : null; }
function nextObraId() { return OBRAS_CIDADE.find(o => !S.city.obras.includes(o.id) && o.id !== S.city.obra?.id)?.id || null; }
function addObra(v, byPlayer) {
  const o = S.city.obra; if (!o) return; o.prog += v; const def = obraDef();
  if (o.prog >= def.meta) {
    S.city.obras.push(def.id); const rest = o.prog - def.meta; const nx = OBRAS_CIDADE.find(x => !S.city.obras.includes(x.id));
    S.city.obra = nx ? { id: nx.id, prog: Math.min(rest, nx.meta * 0.5), ts: Date.now() } : null;
    if (S.hudReady) { confetti(); sfx('level'); enqueue(() => showStagePop(def.emoji, `${def.nome} concluída!`, `${def.efeito}. Todos os salários da cidade: +${Math.round((wageMult() - 1) * 100)}%`)); buildWorld(true); checkStage(); }
  }
  if (byPlayer || S.hudReady) updateObra3D();
}
function updateObra3D() { const d = obraDef(); if (world && d) world.setObraProgress(S.city.obra.prog / d.meta, d.nome); else if (world) world.setObraProgress(1, 'Cidade completa'); }
function checkStage() {
  const st = stageOf(cityScore()); if (st > (S.city.stageSeen || 0)) {
    S.city.stageSeen = st; save(); const d = STAGES[st]; buildWorld(true); renderHUD(); confetti(); sfx('level');
    enqueue(() => showStagePop(d.emoji, `${S.cidade} virou ${d.nome}!`, 'A cidade mudou: olhe em volta! ' + ['', 'Ruas com faixa e moradores chegando.', 'Postes acesos e mais gente.', 'Trânsito, flores e árvores nas ruas.', 'Calçadas, praça e prédios no horizonte.', 'Cidade nível mundial.', 'Uma das melhores do país.', 'Topo do Brasil!'][st]));
  }
}
function showStagePop(emoji, title, sub) { modal(`<div class="stagepop"><div class="big">${emoji}</div><h2>${esc(title)}</h2><p class="sub">${sub}</p><button class="btn primary" id="mok">Bora!</button></div>`, 'lvm'); $('#mok').onclick = () => closeModal(); }

// ---------- HUD ----------
const ui = $('#ui'); let lastXpPct = null, lastCityPct = null;
function renderHUD() {
  if (!S || !world) return; S.hudReady = true;
  const lv = levelOf(S.xp), p = prof(S.prof), cur = LEVEL_XP[lv - 1], nxt = LEVEL_XP[lv] ?? LEVEL_XP[lv - 1];
  const pct = lv >= MAX_LEVEL ? 100 : ((S.xp - cur) / (nxt - cur)) * 100; const en = energyNow(), em = energyMax();
  const score = cityScore(), st = stageOf(score), nx = STAGES[st + 1]; const cpct = nx ? ((score - STAGES[st].min) / (nx.min - STAGES[st].min)) * 100 : 100;
  const rank = cityRankPos(score);
  $('#hud-top').innerHTML = `<div class="hrow">
    <div class="pill me ${S.side}" id="h-me"><div class="av">${p.emoji}<em>${lv}</em></div><div class="pinfo"><b>${S.mayor ? '👑 ' : ''}@${esc(S.handle)}${isVip(S) ? vipSeal() : ''}</b>
      <div class="xpbar" id="h-xp"><i style="width:${lastXpPct ?? pct}%"></i><span>${lv >= MAX_LEVEL ? 'MÁX' : `${fmtN(S.xp)}/${fmtN(nxt)}`}</span></div><small>${p.nome}</small></div></div>
    <div class="right"><div class="pill cur money" id="h-money"><span class="ci">🪙</span><b>${fmtN(S.dinheiro)}</b></div><div class="pill cur energy"><span class="ci">⚡</span><b>${Math.floor(en)}<small>/${em}</small></b><div class="enbar"><i style="width:${en / em * 100}%"></i></div></div></div></div>
    <div class="citybar" id="h-city"><span class="ce">${STAGES[st].emoji}</span><div class="cb"><b>${esc(S.cidade)} <em>${STAGES[st].nome}</em></b><div class="cbar"><i style="width:${lastCityPct ?? cpct}%"></i><span>${nx ? `${fmtN(score)} / ${fmtN(nx.min)}` : 'TOPO'}</span></div><small>${nx ? `próximo: ${nx.emoji} ${nx.nome}` : 'Topo do ranking de evolução!'}</small></div><span class="rk">🏆<b>#${rank}</b></span></div>
    <div class="sidecol" id="sidecol"></div><div class="leftcol" id="leftcol"><button class="act chatb" id="b-chat"><span class="ai">${ico('chat')}</span><span class="al">Chat</span></button>${isVip(S) ? '' : `<button class="act vipb" id="b-vip"><span class="ai">${ico('vip')}</span><span class="al">Seja VIP</span></button>`}</div>`;
  requestAnimationFrame(() => { const xi = $('#h-xp i'); if (xi) xi.style.width = pct + '%'; const ci = $('#h-city .cbar i'); if (ci) ci.style.width = cpct + '%'; });
  if (lastXpPct !== null && Math.abs(lastXpPct - pct) > 0.5) $('#h-xp')?.classList.add('flash');
  lastXpPct = pct; lastCityPct = cpct;
  $('#h-me').onclick = () => showCarteira(); $('#h-city').onclick = () => showRanking();
  $('#b-chat').onclick = () => chat?.toggle(); const bv = $('#b-vip'); if (bv) bv.onclick = () => showPlans('hud'); chat?.syncButton();
  const hasCar = !!S.veiculo, mis = (S.missions?.list || []).filter(m => m.p >= MISSOES.find(x => x.id === m.id).meta && !m.claimed).length + (S.login.claimed !== dayKey() ? 1 : 0);
  const acts = [
    ['b-car', '📈', 'Carreira'], ['b-shop', '🛍️', 'Loja'], ['b-mis', '📋', 'Missões', mis], ['b-rank', '🏆', 'Ranking'], ['b-side', S.side === 'norte' ? '🤝' : '🏪', S.side === 'norte' ? 'Mutirão' : 'Negócios'],
    ['b-home', S.mayor ? '🏛️' : '🏠', S.mayor ? 'Palácio' : 'Casa'], hasCar ? ['b-drive', S.veiculo === 'bike' ? '🚲' : '🚗', world.driving ? 'Descer' : (S.veiculo === 'bike' ? 'Pedalar' : 'Dirigir'), 0, world.driving ? 'on' : ''] : ['b-cart', '🪪', 'Carteira'],
    S.mayor ? ['b-gab', '🏛️', 'Gabinete', 0, 'gab'] : ['b-ach', '🏅', 'Conquistas'], ['b-set', '⚙️', 'Ajustes'], ['b-help', '❓', 'Ajuda'],
  ];
  const dock = acts.slice(0, 6), side = acts.slice(6);
  const btn = ([id, e, t, bd, cls]) => `<button class="act ${cls || ''}" id="${id}"><span class="ai">${e}</span><span class="al">${t}</span>${bd ? `<i class="bd">${bd}</i>` : ''}</button>`;
  $('#sidecol').innerHTML = side.map(btn).join('');
  $('#hud-bottom').innerHTML = `<div class="ctxrow" id="ctxrow"></div><div class="brow"><button class="act work" id="b-work"><span class="ai">${p.emoji}</span><span class="al">TRABALHAR</span><small>-${ENERGY_COST} ⚡</small></button></div>
    <div class="acts">${dock.map(btn).join('')}</div>`;
  const on = (id, f) => { const e = $('#' + id); if (e) e.onclick = f; };
  on('b-work', () => startWork()); on('b-car', showCareer); on('b-shop', () => showShop()); on('b-mis', () => showMissions()); on('b-rank', () => showRanking()); on('b-side', showSidePanel);
  on('b-home', goHome); on('b-cart', () => showCarteira()); on('b-gab', showGabinete); on('b-ach', () => showMissions('conq')); on('b-set', showSettings); on('b-help', showHelp);
  on('b-drive', () => { if (Date.now() - (world.lastDriveToggle || 0) < 300) return; world.lastDriveToggle = Date.now(); if (!world.driving && world.vehicle && world.player.position.distanceTo(world.vehicle.position) > 8) { world.vehicle.position.copy(world.player.position).add({ x: 2.5, y: 0, z: 0 }); } world.toggleDrive(); renderHUD(); });
  ctxSig = '';
}
function cityRankPos(score) { const list = simCities(); return list.filter(c => c.score > score).length + 1; }
setInterval(() => { if (S && S.hudReady && !$('#hud').hidden && world?.mode === 'follow') { tickEconomy(); if (!document.querySelector('.modal')) renderHUD(); } }, 4000);
function goHome() { if (world.driving) world.toggleDrive(); const p = homeFront(); world.player.position.copy(p); world.playerPos = p.clone(); world.facePoint(S.mayor ? world.palacePos : world.lots[S.lote ? S.lote.idx : suggestedLot()]); toast(S.mayor ? '🏛️ Você está no Palácio do Prefeito' : S.lote ? `🏠 Seu terreno #${S.numero}` : '🪧 Terreno livre sugerido pra você'); renderHUD(); }

// ---------- ações por proximidade ----------
let ctxSig = '', ctxTimer = null;
function startCtxLoop() { clearInterval(ctxTimer); ctxTimer = setInterval(updateCtx, 250); }
function ctxActions() {
  if (!world?.player || world.driving || world.mode !== 'follow') return [];
  const n = world.nearest(world.playerPos || world.player.position), a = [];
  if (n.trash && n.trash.d < 3.4) a.push({ id: 'trash', k: n.trash.k, cls: 'trash', t: '🧹 Limpar lixo', s: `-${TRASH_COST}⚡ • +8 XP` });
  if (n.lot && n.lot.d < 9.6) {
    const mine = S.lote?.idx === n.lot.idx, npc = npcLots()[n.lot.idx];
    if (mine && S.lote.stage < 4) { const b = BUILD_STAGES[S.lote.stage]; a.push({ id: 'build', cls: 'build', t: `${b.emoji} Construir ${b.nome}`, s: `${fmt(b.preco)} • +${b.xp} XP` }); }
    else if (!mine && !npc && !S.lote && !S.mayor) a.push({ id: 'claim', idx: n.lot.idx, cls: 'claim', t: '🪧 Reivindicar terreno', s: `grátis • ${lotM2(S)} m²${isVip(S) ? ' VIP' : ''}` });
  }
  if (a.length < 2 && n.canPlant) a.push({ id: 'plant', cls: 'plant', t: '🌳 Plantar árvore', s: `${fmt(TREE_COST)} • +15 XP` });
  if (a.length < 2 && n.block && !n.special && !world.isPaved(n.block)) a.push({ id: 'pave', key: n.block, cls: 'pave', t: '🧱 Pavimentar calçada', s: `${fmt(PAVE_COST)} • +20 XP` });
  return a;
}
function updateCtx() {
  const row = $('#ctxrow'); if (!row) return; const acts = document.querySelector('.modal') ? [] : ctxActions(); const sig = acts.map(x => x.id + (x.k ?? x.idx ?? x.key ?? '') + x.t).join('|');
  if (sig === ctxSig) return; ctxSig = sig;
  row.innerHTML = acts.map((x, i) => `<button class="ctx ${x.cls}" data-i="${i}">${x.t}<small>${x.s}</small></button>`).join('');
  row.querySelectorAll('.ctx').forEach(b => b.onclick = () => doCtx(acts[+b.dataset.i], b));
}
function doCtx(a, el) {
  const p = world.playerPos || world.player.position;
  if (a.id === 'trash') { const en = energyNow(); if (en < TRASH_COST) return toast('⚡ Sem energia pra limpar agora'); setEnergy(en - TRASH_COST); world.clearTrash(a.k); S.city.cleaned.push(a.k); S.stats.trash++; sfx('pop'); gain(S.prof === 'gari' ? 10 : 5, 8, el); ev('trash'); }
  else if (a.id === 'claim') { S.lote = { idx: a.idx, stage: 0, ts: Date.now() }; world.setLot(a.idx, myLotInfo(), true); sfx('build'); confetti(); toast(`🪧 Terreno de ${lotM2(S)} m² é seu! Agora construa o 🪨 Alicerce (R$ 100).`, 5000); gain(0, 10, el); }
  else if (a.id === 'build') {
    const b = BUILD_STAGES[S.lote.stage]; if (S.dinheiro < b.preco) return toast(`💸 Faltam ${fmt(b.preco - S.dinheiro)}. Bora TRABALHAR! 💪`); S.dinheiro -= b.preco; S.lote.stage++; S.stats.builds++; world.setLot(S.lote.idx, myLotInfo(), true); sfx('build'); gain(0, b.xp, el); ev('build');
    if (S.lote.stage >= 4) { confetti(); world.setVehicle(vehicleModel(), homeFront()); enqueue(() => showStagePop('🏠', 'Sua casa está pronta!', 'A 🚗 garagem foi liberada na Loja. E agora você pode fazer reformas: sobrado, piscina, mansão…')); }
    else toast(`${b.emoji} ${b.nome} pronto! Próxima etapa: ${BUILD_STAGES[S.lote.stage].emoji} ${BUILD_STAGES[S.lote.stage].nome} (${fmt(BUILD_STAGES[S.lote.stage].preco)})`, 4000);
  }
  else if (a.id === 'plant') { if (S.dinheiro < TREE_COST) return toast(`💸 Uma muda custa ${fmt(TREE_COST)}`); S.dinheiro -= TREE_COST; const kinds = S.side === 'norte' ? ['palm', 'ipe', 'oak'] : ['oak', 'pine', 'ipe']; const kind = kinds[S.city.trees.length % 3]; const x = +p.x.toFixed(1), z = +p.z.toFixed(1); world.plantTree(x, z, kind); S.city.trees.push([x, z, kind]); S.stats.trees++; sfx('pop'); gain(0, 15, el); ev('tree'); }
  else if (a.id === 'pave') { if (S.dinheiro < PAVE_COST) return toast(`💸 Pavimentar custa ${fmt(PAVE_COST)}`); S.dinheiro -= PAVE_COST; world.paveBlock(a.key); S.city.paved.push(a.key); S.stats.paved++; sfx('build'); gain(0, 20, el); ev('pave'); }
  ctxSig = ''; save(); checkStage(); checkAch(); renderHUD();
}

// ---------- ganhos com animação ----------
function fly(text, color, from, toSel) {
  const to = $(toSel)?.getBoundingClientRect(); const f = from?.getBoundingClientRect?.() || { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  const d = document.createElement('div'); d.className = 'fx'; d.textContent = text; d.style.color = color; d.style.left = (f.left + f.width / 2 - 30) + 'px'; d.style.top = (f.top - 10) + 'px'; document.body.appendChild(d);
  requestAnimationFrame(() => requestAnimationFrame(() => { if (to) d.style.transform = `translate(${to.left - f.left - f.width / 2 + 30}px,${to.top - f.top + 10}px) scale(.6)`; d.style.opacity = '0.2'; }));
  setTimeout(() => d.remove(), 950);
}
function gain(money, xp, fromEl) {
  if (money) { S.dinheiro += money; fly(`🪙+${fmtN(money)}`, '#ffc425', fromEl, '#h-money'); sfx('coin'); }
  if (xp) { const mult = (S.side === 'norte' ? 1 : 1) * (S.city.obras.includes('escola') ? 1.05 : 1); xp = Math.round(xp * mult); S.xp += xp; fly(`+${xp} XP`, '#2f80ed', fromEl, '#h-xp'); }
  save(); setTimeout(() => { renderHUD(); checkLevel(); }, 600);
}

// ---------- fila de popups ----------
const queue = []; let QUIET = false;
function enqueue(fn) { if (QUIET) return; queue.push(fn); if (!document.querySelector('.modal')) setTimeout(flush, 50); }
function flush() { if (document.querySelector('.modal')) return; const fn = queue.shift(); if (fn) { fn(); if (!document.querySelector('.modal')) setTimeout(flush, 300); } }
function checkLevel() { const lv = levelOf(S.xp); if (lv > (S.lvSeen || 1)) { const from = S.lvSeen; S.lvSeen = lv; save(); for (let l = from + 1; l <= lv; l++) enqueue(() => showLevelUp(l)); } }

// ---------- trabalho / minigames ----------
let curMG = null;
function startWork(profId) {
  const p = prof(profId || S.prof); const en = energyNow();
  if (en < ENERGY_COST) { const w = Math.ceil((ENERGY_COST - en) * ENERGY_REGEN_S); return toast(`⚡ Sem energia! Recarrega em ${w}s. Enquanto isso, limpe a cidade ou faça missões.`); }
  setEnergy(en - ENERGY_COST); save();
  modal(`<div class="mg"><div class="mg-head"><div class="mgt"><span style="font-size:30px">${p.emoji}</span><div><b>${p.nome}</b><small>🎮 ${MG_NAMES[p.mg]}</small></div></div><div class="mgs"><span id="mg-s">0</span><span class="tm" id="mg-t">--</span></div></div>
    <div class="mg-hint" id="mg-hint"></div><div class="mg-area" id="mg-area"></div><button class="btn link" id="mg-quit" style="color:#64748b;margin-top:4px">Desistir</button></div>`, 'mgm nox');
  const area = $('#mg-area'); let ended = false;
  const ctx = { area, prof: p, sfx, hint: (t) => $('#mg-hint').textContent = t, score: (t) => { const e = $('#mg-s'); if (e) e.textContent = t; }, time: (s) => { const e = $('#mg-t'); if (e) e.textContent = s > 0 ? s.toFixed(1) + 's' : '⏱️'; },
    float: (x, y, txt, color) => { const d = document.createElement('div'); d.className = 'mgfloat'; d.textContent = txt; d.style.left = Math.max(0, Math.min(area.clientWidth - 120, x)) + 'px'; d.style.top = Math.max(0, y) + 'px'; d.style.color = color; area.appendChild(d); setTimeout(() => d.remove(), 900); },
    end: (ratio) => { if (ended) return; ended = true; curMG = null; setTimeout(() => finishWork(p, Math.max(0, Math.min(1, ratio))), 450); } };
  curMG = ENGINES[p.mg](ctx);
  $('#mg-quit').onclick = () => { curMG?.destroy(); curMG = null; ended = true; closeModal(); toast('Tudo bem, a energia foi gasta mas amanhã tem mais 😉'); };
  window.__mg = { win: () => curMG?.win(), hitAll: () => curMG?.win() };
}
function starsOf(r) { return r >= 0.9 ? 3 : r >= 0.65 ? 2 : r >= 0.35 ? 1 : 0; }
function finishWork(p, ratio) {
  const stars = starsOf(ratio), q = 0.4 + 0.6 * ratio; let pay = Math.round(p.salario * q * wageMult()); let xp = Math.round(p.xp * q) + stars * 3; let fundo = 0;
  if (S.side === 'norte') { fundo = Math.round(pay * 0.2); pay -= fundo; xp = Math.round(xp * 1.15); S.stats.reputacao += Math.max(1, Math.round(fundo / 6)); addObra(fundo * 3, true); }
  if (S.mayor) S.city.caixa += Math.round(pay * 0.5);
  if (stars === 3) S.stats.perfeitos++; S.stats.totalWorks++; S.stats.ganhos += pay; save();
  const nota = ['😬 Foi difícil hoje', '🙂 Deu pro gasto', '👍 Mandou bem!', '🌟 PERFEITO!'][stars];
  modal(`<div class="result"><div class="stars">${[0, 1, 2].map(i => `<i data-i="${i}">⭐</i>`).join('')}</div><div class="nota">${nota}</div>
    <div class="gains"><div class="gm">🪙 +${fmtN(pay)}</div><div class="gx">💠 +${xp} XP</div></div>
    ${S.side === 'norte' ? `<p class="sub">🤝 ${fmt(fundo)} foi pra obra da cidade • 🌿 +15% XP do Norte</p>` : `<p class="sub">💼 No Sul você fica com 100% do salário.</p>`}
    <button class="btn primary" id="again">Trabalhar de novo (-${ENERGY_COST}⚡)</button><button class="btn ghost" id="mok">Voltar pra cidade</button></div>`, 'nox');
  ui.querySelectorAll('.stars i').forEach((s, i) => setTimeout(() => { s.classList.add(i < stars ? 'on' : 'off'); if (i < stars) sfx('star'); }, 300 + i * 320));
  if (stars === 3) setTimeout(confetti, 1200);
  const collect = (again) => { const from = $('.gains'); const fr = from?.getBoundingClientRect(); closeModal(true); const fake = { getBoundingClientRect: () => fr || { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 } }; gain(pay, 0, fake); S.xp += xp; fly(`+${xp} XP`, '#2f80ed', fake, '#h-xp'); ev('work'); ev('earn', pay); if (stars === 3) ev('stars3'); save(); checkAch(); setTimeout(() => { renderHUD(); checkLevel(); if (again && !queue.length) startWork(); else flush(); }, 700); };
  $('#mok').onclick = () => collect(false); $('#again').onclick = () => collect(true);
}
function showLevelUp(lv) {
  const novas = PROFISSOES.filter(p => p.nivel === lv); const bonus = lv * 100; S.dinheiro += bonus; setEnergy(energyMax()); save();
  confetti(); sfx('level');
  modal(`<div class="lvup"><div class="rays"></div><div class="lvnum">NÍVEL ${lv}</div><h2>Você subiu de nível!</h2>
    <div class="rewards"><div>🪙 +${fmtN(bonus)}</div><div>⚡ Energia cheia</div><div>🎨 Novo visual</div></div>
    ${novas.length ? `<p class="sub"><b>${novas.length} profissões desbloqueadas</b>, cada uma com seu minigame:</p><div class="unl">${novas.map(p => `<button class="u" data-p="${p.id}"><span>${p.emoji}</span><b>${p.nome}</b><small>🎮 ${MG_NAMES[p.mg]}${p.raro ? ' • raro' : ''}</small></button>`).join('')}</div>` : ''}
    <button class="btn primary" id="mok">Ver carreiras</button><button class="btn ghost" id="mclose">Continuar</button></div>`, 'lvm nox');
  $('#mok').onclick = () => { closeModal(true); showCareer(); }; $('#mclose').onclick = () => closeModal();
  ui.querySelectorAll('.unl .u').forEach(b => b.onclick = () => chooseProf(b.dataset.p));
  renderHUD();
}
function chooseProf(id) {
  if (S.mayor && id !== 'prefeito') return toast('👑 O prefeito trabalha pela cidade: sua profissão é Prefeito.');
  const p = prof(id), lv = levelOf(S.xp);
  if (p.nivel > lv) return toast(`🔒 Chegue ao nível ${p.nivel} pra desbloquear.`);
  if (!reqOk(p)) return toast(`🔒 Título raro! Requisito: ${p.req.texto} (${Math.min(reqVal(p), p.req.valor)}/${p.req.valor})`);
  S.prof = id; save(); closeModal(); refreshAvatar(); renderHUD(); toast(`${p.emoji} Agora você é ${p.nome}! Minigame: ${MG_NAMES[p.mg]}`);
}
function showCareer() {
  const lv = levelOf(S.xp);
  let html = `<h2>📈 Carreiras</h2><p class="sub">Nível <b>${lv}</b>. Cada profissão tem um minigame diferente.${S.mayor ? ' <br>👑 Como prefeito, sua profissão é fixa.' : ''}</p><div class="tree">`;
  for (let l = 1; l <= MAX_LEVEL; l++) {
    html += `<div class="tlevel ${l <= lv ? 'open' : 'locked'}"><div class="tl-h"><span>Nível ${l}</span><small>${l === 1 ? 'início' : l <= lv ? 'desbloqueado' : fmtN(LEVEL_XP[l - 1]) + ' XP'}</small></div><div class="tl-row">`;
    for (const p of PROFISSOES.filter(p => p.nivel === l)) {
      const locked = l > lv || !reqOk(p), cur = S.prof === p.id;
      html += `<button class="tnode ${locked ? 'lock' : ''} ${cur ? 'cur' : ''} ${p.raro ? 'raro' : ''}" data-p="${p.id}"><span class="pe">${p.emoji}${locked ? '<sup>🔒</sup>' : ''}</span><b>${p.nome}</b><small>💵 ${fmt(p.salario)} • 🎮 ${MG_NAMES[p.mg]}</small>${p.req ? `<em>${p.req.texto}${l <= lv ? ' (' + Math.min(reqVal(p), p.req.valor) + '/' + p.req.valor + ')' : ''}</em>` : ''}${cur ? '<i>ATUAL</i>' : ''}</button>`;
    }
    html += `</div></div>`;
  }
  modal(html + `</div><button class="btn primary" id="mok">Fechar</button>`, 'wide'); $('#mok').onclick = () => closeModal();
  setTimeout(() => document.querySelector('.tnode.cur')?.scrollIntoView({ block: 'center' }), 50);
  document.querySelectorAll('.tnode').forEach(b => b.onclick = () => chooseProf(b.dataset.p));
}

// ---------- missões, login, conquistas ----------
function ensureMissions() {
  const d = dayKey(); if (S.missions?.day === d) return; const r = rng(seedOf(d + S.handle));
  let pool = MISSOES.filter(m => !(m.id === 'build1' && (S.mayor || (S.lote?.stage || 0) >= 4))); const list = [];
  while (list.length < 3 && pool.length) { const i = Math.floor(r() * pool.length); list.push({ id: pool[i].id, p: 0, claimed: false }); pool.splice(i, 1); }
  if (!list.some(m => m.id === 'work3')) list[0] = { id: 'work3', p: 0, claimed: false };
  S.missions = { day: d, list }; save();
}
function ev(type, n = 1) {
  ensureMissions(); for (const m of S.missions.list) { const def = MISSOES.find(x => x.id === m.id); if (def.ev !== type || m.p >= def.meta) continue; m.p = Math.min(def.meta, m.p + n); if (m.p >= def.meta) { sfx('combo'); toast(`✅ Missão completa: ${def.txt}! Resgate em 📋 Missões`, 4000); } }
  if (type === 'obra') S.stats.obras++; save();
}
function dailyLogin() {
  const today = dayKey(); if (S.login.last === today) return; const y = new Date(); y.setDate(y.getDate() - 1);
  S.login.streak = S.login.last === dayKey(y) ? S.login.streak + 1 : 1; S.login.last = today; save(); enqueue(() => showMissions('login'));
}
function claimLogin() {
  const today = dayKey(); if (S.login.claimed === today) return; const d = ((S.login.streak - 1) % 7); const rw = LOGIN_REWARDS[d];
  S.login.claimed = today; if (rw.en) setEnergy(energyMax()); const btn = $('#claimlogin'); gain(rw.$ || 0, rw.xp || 0, btn); sfx('combo'); confetti(); checkAch(); showMissions('login');
}
function checkAch(silent) { for (const a of CONQUISTAS) if (!S.conq.includes(a.id) && a.ok(S)) { S.conq.push(a.id); if (!silent) { sfx('star'); toast(`🏅 Conquista: ${a.emoji} ${a.nome}!`, 3500); } } save(); }
function showMissions(tab = 'mis') {
  ensureMissions(); const today = dayKey();
  const tabs = `<div class="tabs"><button class="tab ${tab === 'mis' ? 'on' : ''}" data-t="mis">📋 Missões do dia</button><button class="tab ${tab === 'login' ? 'on' : ''}" data-t="login">🔥 Sequência</button><button class="tab ${tab === 'conq' ? 'on' : ''}" data-t="conq">🏅 Conquistas</button></div>`;
  let body = '';
  if (tab === 'mis') body = `<p class="sub">3 missões novas todo dia (renovam à meia-noite).</p><div class="mis">${S.missions.list.map((m, i) => { const d = MISSOES.find(x => x.id === m.id); const done = m.p >= d.meta; return `<div class="mi ${done ? 'done' : ''} ${m.claimed ? 'claimed' : ''}"><div class="mic">${['🎯', '⭐', '🧹', '🌳', '🧱', '🏗️', '💵', '🛣️'][MISSOES.indexOf(d)] || '🎯'}</div><div class="mb"><b>${d.txt}</b><small>Prêmio: ${fmt(d.r.$)} + ${d.r.xp} XP</small><div class="pb"><i style="width:${m.p / d.meta * 100}%"></i></div><small>${d.id === 'earn400' ? fmt(m.p) + ' / ' + fmt(d.meta) : m.p + '/' + d.meta}</small></div>${done && !m.claimed ? `<button data-claim="${i}">Resgatar</button>` : m.claimed ? '✅' : ''}</div>`; }).join('')}</div>`;
  if (tab === 'login') { const day = ((S.login.streak - 1) % 7) + 1; const got = S.login.claimed === today; body = `<p class="sub">Entre todo dia e ganhe prêmios maiores. Sequência atual: <b>🔥 ${S.login.streak} dia${S.login.streak > 1 ? 's' : ''}</b></p><div class="days">${LOGIN_REWARDS.map(r => `<div class="day ${r.d < day || (r.d === day && got) ? 'got' : ''} ${r.d === day && !got ? 'today' : ''}"><b>Dia ${r.d}</b><span>${r.d < day || (r.d === day && got) ? '✅' : r.d === 7 ? '🏆' : r.en && !r.$ ? '⚡' : '💰'}</span>${r.txt}</div>`).join('')}</div>${got ? '<p class="sub">✅ Prêmio de hoje resgatado. Volte amanhã!</p>' : `<button class="btn primary" id="claimlogin">🎁 Resgatar prêmio do dia ${day}</button>`}`; }
  if (tab === 'conq') body = `<p class="sub">${S.conq.length}/${CONQUISTAS.length} desbloqueadas</p><div class="achs">${CONQUISTAS.map(a => `<div class="ach ${S.conq.includes(a.id) ? '' : 'lock'}"><span>${a.emoji}</span><b>${a.nome}</b><small>${a.txt}</small></div>`).join('')}</div>`;
  modal(`<h2>📋 Todo dia tem prêmio</h2>${tabs}${body}<button class="btn ghost" id="mok">Fechar</button>`, 'wide');
  $('#mok').onclick = () => closeModal(); ui.querySelectorAll('[data-t]').forEach(b => b.onclick = () => showMissions(b.dataset.t));
  ui.querySelectorAll('[data-claim]').forEach(b => b.onclick = () => { const m = S.missions.list[+b.dataset.claim]; const d = MISSOES.find(x => x.id === m.id); m.claimed = true; gain(d.r.$, d.r.xp, b); confetti(); sfx('combo'); showMissions('mis'); });
  const cl = $('#claimlogin'); if (cl) cl.onclick = claimLogin;
}

// ---------- loja ----------
function showShop(tab = 'veiculos') {
  const tabs = { veiculos: '🚗 Veículos', casas: '🏠 Casas', roupas: '👕 Roupas', premium: '💎 Premium' };
  let items = '', note = '';
  for (const it of LOJA[tab]) {
    const owned = S.inventario.includes(it.id); const equipped = S.casa === it.id || S.veiculo === it.id || (S.roupa === it.id && !(isVip(S) && S.skin)) || S.chapeu === it.id;
    const icon = it.icon ? ico(it.icon) : it.emoji || (it.tipo === 'camisa' ? `<i class="sw" style="background:${it.cor}"></i>` : { bone: '🧢', palha: '👒', coroa: '👑' }[it.modelo]);
    if (it.vip) { const on = S.veiculo === it.id || S.skin === it.id; items += `<div class="item vipi"><span class="vtag">${ico('vip')}VIP</span><div class="ii">${icon}</div><b>${it.nome}</b><small>${it.desc}</small>${isVip(S) ? (on ? `<button class="btn ok" disabled>✔ Usando</button>` : `<button class="btn ghost" data-eq="${it.id}">Usar</button>`) : `<button class="btn gold" data-vip="${it.id}">Seja VIP</button>`}</div>`; continue; }
    const locked = (tab === 'veiculos' && it.casa && !hasHome()) || (tab === 'casas' && it.preco > 0 && (S.mayor || (S.lote?.stage || 0) < 4));
    let btn;
    if (it.premium || tab === 'premium') btn = `<button class="btn pix" data-pix="${it.id}">Pix R$ ${it.pix.toFixed(2).replace('.', ',')}</button><small class="soon">em breve</small>`;
    else if (equipped) btn = `<button class="btn ok" disabled>✔ Usando</button>`;
    else if (owned) btn = `<button class="btn ghost" data-eq="${it.id}">Usar</button>`;
    else if (locked) btn = `<button class="btn buy poor" data-lock="1">🔒 ${it.preco ? fmt(it.preco) : ''}</button>`;
    else btn = `<button class="btn buy ${S.dinheiro >= it.preco ? '' : 'poor'}" data-buy="${it.id}">${it.preco ? fmt(it.preco) : 'Grátis'}</button>`;
    items += `<div class="item ${it.premium || tab === 'premium' ? 'prem' : ''}"><div class="ii">${icon}</div><b>${it.nome}</b><small>${it.desc}</small>${locked ? `<span class="lockcar">${tab === 'veiculos' ? '🏠 Termine sua casa pra liberar' : S.mayor ? '🏛️ Você mora no Palácio' : '🏠 Termine sua casa primeiro'}</span>` : ''}${btn}</div>`;
  }
  if (tab === 'veiculos') note = hasHome() ? `<div class="note">🚗 Garagem liberada! Carros básicos com dinheiro do jogo. Esportivos via Pix chegam <b>em breve</b>.</div>` : `<div class="note">🚧 A cidade começa <b>sem carros</b>. Construa sua casa até o ✨ Acabamento pra liberar a garagem. A 🚲 bike já pode!</div>`;
  if (tab === 'premium') note = `<div class="note">💎 Itens opcionais via Pix. <b>Pagamento em breve</b>: nesta versão de teste nada é cobrado. Tudo que faz subir de nível continua grátis.</div>`;
  modal(`<h2>🛍️ Loja</h2><div class="money-line">Seu saldo: <b>${fmt(S.dinheiro)}</b></div><div class="tabs">${Object.entries(tabs).map(([k, v]) => `<button class="tab ${k === tab ? 'on' : ''}" data-tab="${k}">${v}</button>`).join('')}</div>${note}<div class="items">${items}</div><button class="btn primary" id="mok">Fechar</button>`, 'wide');
  $('#mok').onclick = () => closeModal();
  ui.querySelectorAll('.tab').forEach(b => b.onclick = () => showShop(b.dataset.tab));
  ui.querySelectorAll('[data-buy]').forEach(b => b.onclick = () => buy(tab, b.dataset.buy, b));
  ui.querySelectorAll('[data-eq]').forEach(b => b.onclick = () => { equip(tab, b.dataset.eq); showShop(tab); });
  ui.querySelectorAll('[data-lock]').forEach(b => b.onclick = () => toast(tab === 'veiculos' ? '🏠 Termine as 4 etapas da sua casa pra liberar a garagem.' : '🏠 Termine sua casa primeiro.'));
  ui.querySelectorAll('[data-pix]').forEach(b => b.onclick = () => toast('💎 Pagamento via Pix chega em breve! Nesta versão de teste nada é cobrado.', 4000));
  ui.querySelectorAll('[data-vip]').forEach(b => b.onclick = () => showPlans('loja'));
}
function buy(tab, id, el) { const it = LOJA[tab].find(x => x.id === id); if (S.dinheiro < it.preco) return toast(`Faltam ${fmt(it.preco - S.dinheiro)}. Bora trabalhar! 💪`); S.dinheiro -= it.preco; S.inventario.push(id); equip(tab, id); confetti(); sfx('coin'); toast(`🎉 Você comprou: ${it.nome}!`); showShop(tab); }
function equip(tab, id) {
  if (tab === 'casas') { S.casa = id; if (S.lote) world.setLot(S.lote.idx, myLotInfo(), true); }
  if (tab === 'veiculos') { if (world.driving) world.toggleDrive(); S.veiculo = id; world.setVehicle(vehicleModel(), homeFront()); world.vehicleSpeed = LOJA.veiculos.find(v => v.id === id).vel || 2.6; }
  if (tab === 'roupas') { const it = LOJA.roupas.find(x => x.id === id); if (it.tipo === 'skin') S.skin = id; else if (it.tipo === 'camisa') { S.roupa = id; S.skin = null; } else { S.chapeu = S.chapeu === id ? null : id; S.skin = null; } refreshAvatar(); }
  save(); renderHUD();
}

// ---------- mutirão / negócios / obra ----------
function obraBox() {
  const d = obraDef(); if (!d) return `<div class="obra"><b>🎉 Todas as obras da cidade foram concluídas!</b></div>`;
  const pct = S.city.obra.prog / d.meta * 100;
  return `<div class="obra"><div class="ob-h"><span class="pe">${d.emoji}</span><div><b>Obra atual: ${d.nome}</b><small>Escolhida pelo prefeito @${MAYOR_HANDLE} • ${d.efeito}</small></div></div><div class="bar big"><i style="width:${pct}%"></i><span>${fmtN(S.city.obra.prog)} / ${fmtN(d.meta)}</span></div><small>Obras entregues: <b>${S.city.obras.length}</b> • Bônus de salário: <b>+${Math.round((wageMult() - 1) * 100)}%</b> • Sua reputação: <b>${S.stats.reputacao}</b></small></div>`;
}
function showSidePanel() {
  tickEconomy(); let body;
  if (S.side === 'norte') body = `<h2>🤝 Mutirão do Norte</h2><p class="sub">20% de cada salário vai pra obra da cidade. Quando ela termina, todo mundo ganha bônus.</p>${obraBox()}<button class="btn primary" id="mut">🏗️ Ajudar na obra (-15⚡ • +40 XP • +12 reputação)</button><div class="note">💰 Renda da Cooperativa: <b>${fmt(1.5 * levelOf(S.xp) + 3 * S.city.obras.length)}/min</b></div>`;
  else body = `<h2>🏪 Negócios do Sul</h2><p class="sub">Negócios rendem dinheiro por minuto, mesmo com o jogo fechado (até 2h).</p><div class="items">${NEGOCIOS.map(n => `<div class="item"><div class="ii">${n.emoji}</div><b>${n.nome} ${S.negocios[n.id] ? '×' + S.negocios[n.id] : ''}</b><small>Rende ${fmt(n.renda)}/min</small><button class="btn buy ${S.dinheiro >= n.preco ? '' : 'poor'}" data-neg="${n.id}">${fmt(n.preco)}</button></div>`).join('')}</div>${obraBox()}<button class="btn primary" id="pat">🤝 Patrocinar a obra com ${fmt(200)} (+10 reputação)</button>`;
  modal(body + `<button class="btn ghost" id="mok">Fechar</button>`, 'wide'); $('#mok').onclick = () => closeModal();
  const mut = $('#mut'); if (mut) mut.onclick = () => { if (!S.city.obra) return; const en = energyNow(); if (en < 15) return toast('⚡ Energia insuficiente'); setEnergy(en - 15); S.stats.reputacao += 12; addObra(450, true); ev('obra'); gain(0, 40, mut); sfx('build'); showSidePanel(); };
  const pat = $('#pat'); if (pat) pat.onclick = () => { if (!S.city.obra) return; if (S.dinheiro < 200) return toast('Saldo insuficiente'); S.dinheiro -= 200; S.stats.reputacao += 10; addObra(600, true); ev('obra'); save(); sfx('build'); toast('🤝 Obrigado pelo patrocínio!'); showSidePanel(); renderHUD(); };
  ui.querySelectorAll('[data-neg]').forEach(b => b.onclick = () => { const n = NEGOCIOS.find(x => x.id === b.dataset.neg); if (S.dinheiro < n.preco) return toast(`Faltam ${fmt(n.preco - S.dinheiro)}`); S.dinheiro -= n.preco; S.negocios[n.id] = (S.negocios[n.id] || 0) + 1; save(); confetti(); sfx('coin'); toast(`${n.emoji} ${n.nome} aberto!`); showSidePanel(); renderHUD(); });
}

// ---------- gabinete do prefeito ----------
function showGabinete() {
  tickEconomy(); const b = cityBreakdown(), st = stageOf(b.total), d = obraDef(); const trashLeft = world.trash.length; const cd = (k, min) => Math.max(0, (S.city.decretos[k] || 0) + min * 60000 - Date.now());
  const mm = (ms) => Math.ceil(ms / 60000) + ' min';
  modal(`<div class="gabh"><span class="gi">🏛️</span><div><b>Gabinete do Prefeito</b><small>👑 @${esc(S.handle)} • ${esc(S.cidade)} - ${S.uf}</small></div></div>
    <div class="gstats"><div><b>${STAGES[st].emoji}</b><small>${STAGES[st].nome}</small></div><div><b>${fmtN(b.total)}</b><small>pontos</small></div><div><b>${fmtN(residentsSim())}</b><small>moradores</small></div>
      <div><b>${b.houses}</b><small>casas prontas</small></div><div><b>${trashLeft}</b><small>lixos na rua</small></div><div><b>${S.city.trees.length}</b><small>árvores</small></div>
      <div><b>${S.city.paved.length}</b><small>calçadas</small></div><div><b>${S.city.obras.length}/${OBRAS_CIDADE.length}</b><small>obras</small></div><div><b style="color:#15803d">${fmt(S.city.caixa)}</b><small>caixa da prefeitura</small></div></div>
    <h3>🏗️ Obras da cidade</h3><div class="olist">${OBRAS_CIDADE.map(o => { const done = S.city.obras.includes(o.id), cur = d?.id === o.id; return `<div class="oitem ${done ? 'done' : ''} ${cur ? 'cur' : ''}"><span>${o.emoji}</span><div class="ob"><b>${o.nome} ${done ? '✅' : cur ? `• ${Math.floor(S.city.obra.prog / o.meta * 100)}%` : ''}</b><small>${o.efeito} • meta ${fmtN(o.meta)}</small></div>${!done && !cur ? `<button data-obra="${o.id}">Lançar</button>` : ''}</div>`; }).join('')}</div>
    ${d ? `<button class="btn primary" id="invest" ${S.city.caixa < 1000 ? 'disabled' : ''}>💰 Investir ${fmt(1000)} do caixa em ${d.nome}</button>` : ''}
    <h3>📜 Decretos</h3><div class="decs">
      <button class="dec" id="d-limpa" ${cd('limpa', 20) ? 'disabled' : ''}><span>🧹</span><b>Mutirão de limpeza</b><small>${cd('limpa', 20) ? 'de novo em ' + mm(cd('limpa', 20)) : 'Recolhe 6 lixos agora'}</small></button>
      <button class="dec" id="d-arvore" ${cd('arvore', 30) ? 'disabled' : ''}><span>🌳</span><b>Dia da Árvore</b><small>${cd('arvore', 30) ? 'de novo em ' + mm(cd('arvore', 30)) : 'Planta 4 árvores'}</small></button>
      <button class="dec" id="d-pave" ${S.city.caixa < 800 ? 'disabled' : ''}><span>🛣️</span><b>Pavimentar quadra</b><small>${fmt(800)} do caixa</small></button>
      <button class="dec" id="d-festa"><span>🎉</span><b>Festa na praça</b><small>Anima os moradores</small></button></div>
    <button class="btn ghost" id="mok">Fechar</button>`, 'wide gabm');
  $('#mok').onclick = () => closeModal();
  ui.querySelectorAll('[data-obra]').forEach(bt => bt.onclick = () => { const o = OBRAS_CIDADE.find(x => x.id === bt.dataset.obra); const keep = S.city.obra ? S.city.obra.prog : 0; S.city.obra = { id: o.id, prog: Math.min(keep, o.meta * 0.9), ts: Date.now() }; save(); updateObra3D(); sfx('build'); toast(`🏗️ Obra lançada: ${o.emoji} ${o.nome}! Os moradores já foram avisados.`); showGabinete(); });
  const inv = $('#invest'); if (inv) inv.onclick = () => { S.city.caixa -= 1000; addObra(1000, true); ev('obra'); save(); sfx('coin'); showGabinete(); };
  $('#d-limpa').onclick = () => { const ks = world.trash.slice(0, 6).map(t => t.k); ks.forEach(k => { world.clearTrash(k); S.city.cleaned.push(k); }); S.city.decretos.limpa = Date.now(); save(); sfx('combo'); toast(`🧹 Decreto assinado: ${ks.length} lixos recolhidos!`); checkStage(); showGabinete(); };
  $('#d-arvore').onclick = () => { const cen = {}; for (const l of world.lots) { (cen[l.key] ||= { x: 0, z: 0, n: 0 }); cen[l.key].x += l.x / 4; cen[l.key].z += l.z / 4; } let n = 0; const kind = S.side === 'norte' ? 'palm' : 'oak'; for (const c of Object.values(cen)) { if (n >= 4) break; const x = +(c.x + (n % 2 ? 1.2 : -1.2)).toFixed(1), z = +c.z.toFixed(1); if (!world.nearest({ x, z }).canPlant) continue; world.plantTree(x, z, kind); S.city.trees.push([x, z, kind]); n++; } S.city.decretos.arvore = Date.now(); save(); sfx('combo'); toast(`🌳 Dia da Árvore: ${n} árvores plantadas!`); checkStage(); showGabinete(); };
  $('#d-pave').onclick = () => { const keys = []; for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) keys.push(`${i},${j}`); const k = keys.find(k => !world.isPaved(k) && !['2,2', '3,2', '2,3', '4,1'].includes(k)); if (!k) return toast('Todas as calçadas já estão prontas!'); S.city.caixa -= 800; world.paveBlock(k); S.city.paved.push(k); save(); sfx('build'); toast('🛣️ Quadra pavimentada!'); checkStage(); showGabinete(); };
  $('#d-festa').onclick = () => { confetti(); sfx('level'); toast('🎉 Festa na praça! Os moradores adoraram.'); };
}

// ---------- ranking ----------
function simCities() {
  const h = hoursSince(Date.UTC(2026, 10, 6, 12)); const r = rng(42); const pick = ['São Paulo', 'Rio de Janeiro', 'Fortaleza', 'Salvador', 'Recife', 'Curitiba', 'Manaus', 'Belo Horizonte', 'Porto Alegre', 'Belém', 'Goiânia', 'Florianópolis', 'Natal', 'Campinas', 'João Pessoa', 'Maceió', 'Feira de Santana', 'Joinville'];
  const ufOf = { 'São Paulo': 'SP', 'Rio de Janeiro': 'RJ', Fortaleza: 'CE', Salvador: 'BA', Recife: 'PE', Curitiba: 'PR', Manaus: 'AM', 'Belo Horizonte': 'MG', 'Porto Alegre': 'RS', 'Belém': 'PA', 'Goiânia': 'GO', 'Florianópolis': 'SC', Natal: 'RN', Campinas: 'SP', 'João Pessoa': 'PB', 'Maceió': 'AL', 'Feira de Santana': 'BA', Joinville: 'SC' };
  const norteUF = ['CE', 'BA', 'PE', 'AM', 'PA', 'RN', 'PB', 'AL'];
  return pick.filter(c => !S || c !== S.cidade).map((c, i) => { const base = 9000 / (1 + i * 0.45) * (0.7 + r() * 0.5); const score = Math.round(base * Math.min(1, 0.06 + h * 0.0025) + Math.sin(h / 3 + i) * 40); return { c, uf: ufOf[c], score, side: norteUF.includes(ufOf[c]) ? 'norte' : 'sul', mor: Math.round(score * 2.2 + 300) }; });
}
function showRanking(tab = 'cidades') {
  const tabs = `<div class="tabs"><button class="tab ${tab === 'cidades' ? 'on' : ''}" data-t="cidades">🏙️ Cidades</button><button class="tab ${tab === 'ns' ? 'on' : ''}" data-t="ns">🌴 Norte x Sul 🏙️</button><button class="tab ${tab === 'ricos' ? 'on' : ''}" data-t="ricos">💰 Mais ricos</button></div>`;
  let body = ''; const b = cityBreakdown(), st = stageOf(b.total);
  if (tab === 'cidades') {
    const list = [...simCities(), { c: S.cidade, uf: S.uf, score: b.total, side: S.side, mor: residentsSim(), me: true }].sort((x, y) => y.score - x.score);
    const nx = STAGES[st + 1];
    body = `<div class="stagebox"><div style="display:flex;gap:12px;align-items:center"><span class="big">${STAGES[st].emoji}</span><div><small>Sua cidade</small><b>${esc(S.cidade)} • ${STAGES[st].nome}</b><small>${fmtN(b.total)} pts${nx ? ` • faltam ${fmtN(nx.min - b.total)} pra ${nx.emoji} ${nx.nome}` : ''}</small></div></div>
      <div class="stladder">${STAGES.map((s, i) => `<i class="${i <= st ? 'on' : ''} ${i === st ? 'cur' : ''}" title="${s.nome}">${s.emoji}</i>`).join('')}</div>
      <small style="display:block;margin-top:8px">🏠 casas ${fmtN(b.parts.casas)} • 🧹 limpeza ${fmtN(b.parts.limpeza)} • 🌳 árvores ${fmtN(b.parts.arvores)} • 🧱 calçadas ${fmtN(b.parts.calcadas)} • 🏗️ obras ${fmtN(b.parts.obras)} • 👥 moradores ${fmtN(b.parts.moradores)}</small></div>
      <ol class="crank">${list.map((x, i) => `<li class="${x.me ? 'me' : ''}"><span class="pos">${i + 1}</span><span style="font-size:22px">${STAGES[stageOf(x.score)].emoji}</span><div class="ci"><b>${x.side === 'norte' ? '🌴' : '🏙️'} ${esc(x.c)} - ${x.uf}${x.me ? ' (você)' : ''}</b><small>${STAGES[stageOf(x.score)].nome} • ${fmtN(x.mor)} moradores</small></div><div class="sc">${fmtN(x.score)}<small>pts</small></div></li>`).join('')}</ol>`;
  } else if (tab === 'ns') {
    const t = landingTotals(); const row = (lbl, a, c) => { const pa = a / (a + c) * 100; return `<div class="srow"><div class="sl"><b>${fmtN(a)}</b><span>${lbl}</span><b>${fmtN(c)}</b></div><div class="sbar"><i class="n" style="width:${pa}%"></i><i class="s" style="width:${100 - pa}%"></i></div></div>`; };
    body = `<div class="vshead"><span class="n">🌴 NORTE</span><span class="s">SUL 🏙️</span></div>${row('Moradores', t.moradores * t.norte * 2 / 2, t.moradores * t.sul)}${row('Cidades evoluídas', t.cidades * t.norte, t.cidades * t.sul)}${row('Obras entregues', t.obras * (t.norte + 0.03), t.obras * (t.sul - 0.03))}`;
  } else {
    const r = rng(Math.floor(Date.now() / 3.6e6)); const names = genNames(9, 7);
    const rich = names.map((n, i) => ({ n, v: Math.round(90000 / (i + 1) * (0.8 + r() * 0.4)), s: i % 3 ? 'sul' : 'norte', vip: i % 4 === 0 })); rich.push({ n: S.handle, v: S.dinheiro, s: S.side, me: true, vip: isVip(S) }); rich.sort((a, c) => c.v - a.v);
    body = `<ol class="rank">${(rich.slice(0, 10).some(x => x.me) ? rich.slice(0, 10) : [...rich.slice(0, 9), rich.find(x => x.me)]).map(x => `<li class="${x.me ? 'me' : ''}"><span>${x.s === 'norte' ? '🌴' : '🏙️'} ${x.me && x.vip ? igLink(x.n) : '@' + esc(x.n)}${x.vip ? vipSeal() : ''}</span><b>${fmt(x.v)}</b></li>`).join('')}</ol>${isVip(S) ? '' : `<p class="small vipup">${ico('vip')} VIPs aparecem com selo dourado e @ clicável. <button class="btn-mini gold" id="rk-vip">Seja VIP</button></p>`}`;
  }
  modal(`<h2>🏆 Ranking</h2>${tabs}${body}<p class="small" style="color:#64748b">Outras cidades e jogadores são simulados nesta versão de teste.</p><button class="btn primary" id="mok">Fechar</button>`, 'wide');
  $('#mok').onclick = () => closeModal(); ui.querySelectorAll('[data-t]').forEach(bt => bt.onclick = () => showRanking(bt.dataset.t));
  const rv = $('#rk-vip'); if (rv) rv.onclick = () => showPlans('ranking');
}

// ---------- VIP no jogo ----------
function showPlans(from = 'hud') {
  if (isVip(S)) return showCarPicker();
  modal(`<h2>${ico('vip')} Seja VIP</h2><p class="sub" style="text-align:center">${from === 'chat' ? 'No plano grátis é 1 mensagem por minuto. VIP manda sem limite.' : 'Tudo liberado de uma vez, num pagamento só.'}</p>${plansHTML({ test: VIP_TEST, from: 'game' })}`, 'wide vipm');
  $('#pl-free').onclick = () => closeModal();
  $('#pl-vip').onclick = () => (VIP_TEST ? unlockVip('teste') : showVipCheckout());
}
function showVipCheckout() {
  if (isVip(S)) return;
  modal(`<h2>Finalizar VIP</h2><div id="pxroot"></div>`, 'wide vipm');
  mountCheckout($('#pxroot'), { handle: S.handle, toast, onFree: () => closeModal(), onBack: () => showPlans('checkout'),
    onApproved: ({ token, pid }) => { closeModal(true); toast('Pagamento aprovado! Agora você é VIP.', 4500); unlockVip('pix', pid, token); } });
}
/** Reconfere no servidor o token do VIP pago (editar o save não basta). Sem internet: mantém se já foi validado antes. */
async function revalidateVip() {
  if (!S || !isVip(S) || S.mayor) return;
  if (S.vip?.source === 'teste' && VIP_TEST) return;
  const tok = S.vip?.token; const res = tok ? await verifyVipToken(tok, S.handle) : false;
  if (res === true) { S.vip.verifiedAt = Date.now(); save(); return; }
  if (res === null && S.vip?.verifiedAt) return; // falha de rede: mantém o VIP já validado
  revokeVip();
}
/** O prefeito precisa do token assinado (vindo do link privado). Sem ele, vira morador comum. */
async function revalidateMayor() {
  if (!S || !S.mayor) return;
  if (S.mayorDev && IS_LOCAL) return;
  const res = S.mayorToken ? await verifyMayorToken(S.mayorToken) : false;
  if (res === true) { S.mayorVerifiedAt = Date.now(); save(); return; }
  if (res === null && S.mayorVerifiedAt) return; // sem internet: mantém
  demoteMayor();
}
function demoteMayor() {
  S.mayor = false; delete S.mayorToken; delete S.mayorDev; delete S.mayorVerifiedAt; S.nome = S.handle; if (S.prof === 'prefeito') S.prof = PROFISSOES.find(p => p.nivel === 1)?.id;
  if (S.vip?.source === 'prefeito') { S.plan = 'free'; delete S.vip; }
  save(); toast('Esse acesso de prefeito não é válido. Você entra como morador.', 5000); setTimeout(() => location.replace(location.pathname), 1800);
}
function revokeVip() {
  const vipIds = [...VIP_CARS, ...VIP_SKINS].map(x => x.id);
  S.plan = 'free'; delete S.vip; if (vipIds.includes(S.veiculo)) S.veiculo = null; if (vipIds.includes(S.skin)) S.skin = null;
  S.inventario = (S.inventario || []).filter(i => !vipIds.includes(i)); save();
  if (world) { refreshAvatar(); world.setVehicle(vehicleModel(), homeFront()); if (S.lote) world.setLot(S.lote.idx, myLotInfo(), true); }
  if (S.hudReady) renderHUD(); chat?.refresh(); toast('Não conseguimos confirmar o VIP deste aparelho. Você continua no plano grátis.', 6000);
}
/** Efeitos no jogo depois de grantVip (o webhook do Pix chama isto via window.BrasilCity.grantVip). */
function unlockVip(source = 'pix', txid = null, token = null) {
  grantVip(S, { source, txid }); if (token) { S.vip.token = token; S.vip.txid = txid; S.vip.source = source; S.vip.verifiedAt = Date.now(); } save(); confetti(); sfx('level');
  refreshAvatar(); if (S.lote) world.setLot(S.lote.idx, myLotInfo(), true); renderHUD(); chat?.refresh();
  showCarPicker(true);
}
function showCarPicker(first = false) {
  modal(`<h2>${first ? 'Bem-vindo ao VIP!' : 'Seu esportivo'}</h2><p class="sub" style="text-align:center">Escolha seu carro esportivo. Dá pra trocar depois na Loja.</p>${carPickerHTML(S.veiculo)}`, 'wide vipm');
  ui.querySelectorAll('.car3').forEach(b => b.onclick = () => { const id = b.dataset.car; if (world.driving) world.toggleDrive(); S.veiculo = id; S.vip.car = id; world.setVehicle(vehicleModel(), homeFront()); world.vehicleSpeed = LOJA.veiculos.find(v => v.id === id).vel; save(); sfx('coin'); ui.querySelectorAll('.car3').forEach(x => x.classList.toggle('sel', x === b)); setTimeout(() => showSkinPicker(first), 280); });
}
function showSkinPicker(first = false) {
  modal(`<h2>Skins lendárias</h2>${skinPickerHTML(S.skin)}`, 'wide vipm');
  ui.querySelectorAll('.skin2').forEach(b => b.onclick = () => { S.skin = b.dataset.skin; S.vip.skin = S.skin; save(); refreshAvatar(); sfx('star'); confetti(); ui.querySelectorAll('.skin2').forEach(x => x.classList.toggle('sel', x === b)); setTimeout(() => { closeModal(); if (first) toast(`Tudo pronto! Seu ${VIP_CARS.find(c => c.id === S.veiculo)?.nome || 'carro'} está na garagem e o chat está liberado sem limite.`, 5000); renderHUD(); }, 320); });
}

// ---------- carteira, ajustes, ajuda ----------
function showCarteira() {
  const p = prof(S.prof), d = SIDES[S.side];
  modal(`<h2>🪪 Carteira de morador</h2><div class="carteira ${S.side}"><div class="ct-top"><span>🇧🇷 ${GAME_NAME}</span><span>${S.mayor ? 'PREFEITO' : 'MORADOR'}</span></div>
    <div class="ct-body"><div class="ct-photo">${p.emoji}</div><div class="ct-info"><b>${S.mayor ? '👑 ' : ''}${esc(S.nome)}${isVip(S) ? vipSeal() : ''}</b><span>${isVip(S) ? igLink(S.handle) : '@' + esc(S.handle)}</span>
    <div class="ct-grid"><div><small>${S.mayor ? 'Residência' : 'Casa nº'}</small>${S.mayor ? 'Palácio' : '#' + S.numero}</div><div><small>Lado</small>${d.nome}</div><div><small>Cidade</small>${esc(S.cidade)} - ${S.uf}</div><div><small>Profissão</small>${p.nome}</div><div><small>Nível</small>${levelOf(S.xp)}</div><div><small>Desde</small>${new Date(S.criadoEm).toLocaleDateString('pt-BR')}</div><div><small>Plano</small>${isVip(S) ? 'VIP' : 'Grátis'}</div><div><small>Terreno</small>${lotM2(S)} m²</div></div></div></div><div class="ct-bar"></div></div>
    ${isVip(S) ? `<div class="note vipnote">${ico('at')} Seu @ é clicável no perfil e no ranking: quem tocar vai direto pro seu Instagram.</div>` : `<button class="btn gold" id="ct-vip">${ico('vip')} Seja VIP: @ clicável e selo dourado</button>`}
    <button class="btn primary" id="mok">Fechar</button><button class="btn ghost" id="share">📋 Copiar texto pra compartilhar</button>`);
  const cv = $('#ct-vip'); if (cv) cv.onclick = () => showPlans('perfil');
  $('#mok').onclick = () => closeModal(); $('#share').onclick = () => { navigator.clipboard?.writeText(`Sou ${S.mayor ? 'prefeito' : 'morador(a) #' + S.numero} de ${S.cidade} no ${GAME_NAME}, time ${SIDES[S.side].nome}! Nível ${levelOf(S.xp)}. Bora deixar nossa cidade Nível Suíça? 🇧🇷`); toast('Texto copiado!'); };
}
function showSettings() {
  const opt = (k, v, label) => `<button class="tab ${settings[k] === v ? 'on' : ''}" data-k="${k}" data-v="${v}">${label}</button>`;
  modal(`<h2>⚙️ Ajustes</h2><h3>Qualidade gráfica</h3><div class="tabs">${opt('quality', 'alta', '✨ Alta')}${opt('quality', 'baixa', '⚡ Baixa (celular leve)')}</div>
    <h3>Ciclo dia/noite</h3><div class="tabs">${opt('dayNight', false, '☀️ Sempre dia')}${opt('dayNight', true, '🌙 Dia e noite')}</div>
    <h3>Som</h3><div class="tabs">${opt('sound', true, '🔊 Ligado')}${opt('sound', false, '🔇 Desligado')}</div>
    <button class="btn primary" id="mok">Fechar</button><button class="btn ghost" id="exit">🏠 Voltar pra página inicial</button><button class="btn link" id="reset" style="color:#b91c1c">Apagar meu morador deste aparelho</button>`);
  $('#mok').onclick = () => closeModal(); $('#exit').onclick = backToLanding;
  $('#reset').onclick = () => { if (!confirm('Apagar todo o progresso salvo neste aparelho?')) return; localStorage.removeItem(SAVE_KEY); location.href = location.pathname; };
  ui.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
    const k = b.dataset.k, v = b.dataset.v === 'true' ? true : b.dataset.v === 'false' ? false : b.dataset.v; if (settings[k] === v) return;
    settings[k] = v; localStorage.setItem(SET_KEY, JSON.stringify(settings));
    if (k === 'dayNight') world.setDayNight(v); if (k === 'quality') { world.setQuality(v); buildWorld(true); } if (k === 'sound' && v) sfx('coin');
    showSettings();
  });
}
function showHelp() {
  modal(`<h2>❓ Como jogar</h2><div class="mis">
    <div class="mi"><div class="mic">🕹️</div><div class="mb"><b>Ande pela cidade</b><small>Joystick (ou WASD). Arraste a tela pra girar a câmera.</small></div></div>
    <div class="mi"><div class="mic">💼</div><div class="mb"><b>Trabalhe</b><small>Cada profissão é um minigame. Mais estrelas = mais dinheiro e XP.</small></div></div>
    <div class="mi"><div class="mic">🪧</div><div class="mb"><b>Reivindique um terreno</b><small>Chegue perto de um terreno livre e construa em 4 etapas.</small></div></div>
    <div class="mi"><div class="mic">🧹</div><div class="mb"><b>Arrume a cidade</b><small>Limpe lixo, plante árvores e pavimente calçadas: tudo soma pontos.</small></div></div>
    <div class="mi"><div class="mic">🏆</div><div class="mb"><b>Suba a cidade</b><small>Vila ➜ Cidade Comum ➜ … ➜ Nível Suíça ➜ Japão ➜ EUA ➜ Grande Potência.</small></div></div></div><button class="btn primary" id="mok">Entendi</button>`);
  $('#mok').onclick = () => closeModal();
}

// ---------- utilitários de UI ----------
function modal(html, cls = '') { closeModal(true); const m = document.createElement('div'); m.className = 'modal ' + cls; m.innerHTML = `<div class="mbox">${cls.includes('nox') ? '' : '<button class="mx" aria-label="Fechar">❌</button>'}${html}</div>`; ui.appendChild(m); if (!cls.includes('nox')) { m.addEventListener('pointerdown', e => { if (e.target === m) closeModal(); }); m.querySelector('.mx').onclick = () => closeModal(); } updateCtx(); }
function closeModal(silent) { if (curMG && !silent) { curMG.destroy(); curMG = null; } ui.querySelectorAll('.modal').forEach(m => m.remove()); if (!silent) { if (S?.hudReady) renderHUD(); setTimeout(flush, 200); } }
let toastT; function toast(msg, ms = 3000) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), ms); }
function confetti() { if (QUIET) return; const c = $('#confetti'); for (let i = 0; i < 60; i++) { const d = document.createElement('i'); d.style.left = Math.random() * 100 + 'vw'; d.style.background = ['#2fb14b', '#ffc425', '#2f80ed', '#ec4b47', '#ffffff'][i % 5]; d.style.animationDelay = Math.random() * 0.5 + 's'; d.style.transform = `rotate(${Math.random() * 360}deg)`; c.appendChild(d); setTimeout(() => d.remove(), 2600); } }

// ---------- controles ----------
const keys = {};
addEventListener('keydown', e => { if (e.target.tagName === 'INPUT' || !world) return; keys[e.key.toLowerCase()] = true; upd(); });
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; upd(); });
function upd() { if (joyActive || !world) return; world.input.x = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0); world.input.z = (keys.s || keys.arrowdown ? 1 : 0) - (keys.w || keys.arrowup ? 1 : 0); }
const joy = $('#joy'), knob = $('#knob'); let joyActive = false, joyId = null;
joy.addEventListener('pointerdown', e => { joyActive = true; joyId = e.pointerId; joy.setPointerCapture(e.pointerId); moveJoy(e); });
joy.addEventListener('pointermove', e => { if (joyActive && e.pointerId === joyId) moveJoy(e); });
const endJoy = () => { joyActive = false; knob.style.transform = ''; if (world) { world.input.x = 0; world.input.z = 0; } };
joy.addEventListener('pointerup', endJoy); joy.addEventListener('pointercancel', endJoy);
function moveJoy(e) { const r = joy.getBoundingClientRect(); let x = (e.clientX - r.left - r.width / 2) / (r.width / 2), y = (e.clientY - r.top - r.height / 2) / (r.height / 2); const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m; } knob.style.transform = `translate(${x * 40}px, ${y * 40}px)`; world.input.x = x; world.input.z = y; }
const cv = $('#scene'); let drag = null;
cv.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, id: e.pointerId }; });
addEventListener('pointermove', e => { if (!drag || !world || e.pointerId !== drag.id || world.mode !== 'follow') return; world.yaw -= (e.clientX - drag.x) * 0.006; world.camPitch = Math.max(0.2, Math.min(1.3, world.camPitch + (e.clientY - drag.y) * 0.004)); drag.x = e.clientX; drag.y = e.clientY; });
addEventListener('pointerup', () => drag = null);
cv.addEventListener('wheel', e => { if (world) world.camDist = Math.max(8, Math.min(40, world.camDist + e.deltaY * 0.02)); }, { passive: true });

// ---------- ganchos de teste / dev ----------
window.__game = {
  set quiet(v) { QUIET = v; }, get quiet() { return QUIET; },
  get S() { return S; }, world: null, enterGame, showCareer, showShop, showRanking, showMissions, showSidePanel, showGabinete, showSettings, showLevelUp, showCarteira, startWork, refreshAvatar, buildWorld, cityScore, checkStage, toast,
  give(m, xp) { S.dinheiro += m; S.xp += xp; save(); renderHUD(); checkLevel(); },
  cityBoost(stage) { const sc = cityScore() - (S.city.bonus || 0); S.city.bonus = Math.max(0, STAGES[stage].min - sc + 5); save(); checkStage(); renderHUD(); },
  simHours(h) { S.city.simH = h; save(); buildWorld(true); renderHUD(); },
  setLotStage(n) { if (!S.lote) S.lote = { idx: suggestedLot(), stage: 0 }; S.lote.stage = n; save(); world.setLot(S.lote.idx, myLotInfo(), true); world.setVehicle(vehicleModel(), homeFront()); renderHUD(); },
  ctx: () => ctxActions(), doCtx: (id) => { const a = ctxActions().find(x => x.id === id); if (a) doCtx(a, null); return !!a; },
  teleport(x, z) { world.player.position.set(x, world.player.position.y, z); world.playerPos = world.player.position.clone(); },
  cine(preset, speed = 1) {
    if (preset === 'follow') { world.mode = 'follow'; $('#hud').hidden = false; $('#joy').hidden = false; return; }
    const P = world.palacePos, L = S.lote ? world.lots[S.lote.idx] : world.lots[suggestedLot()];
    const presets = {
      overview: (cam, t) => { const a = 0.7 + t * 0.06 * speed; cam.position.set(Math.sin(a) * 120, 78, Math.cos(a) * 120); cam.lookAt(0, 0, 0); },
      low: (cam, t) => { const a = 0.5 + t * 0.05 * speed; cam.position.set(Math.sin(a) * 70, 26, Math.cos(a) * 70); cam.lookAt(0, 2, 0); },
      palace: (cam, t) => { const a = -0.35 + Math.sin(t * 0.15 * speed) * 0.45; cam.position.set(P.x + Math.sin(a) * 40, 15, P.z + Math.cos(a) * 40); cam.lookAt(P.x, 6, P.z - 2); },
      lot: (cam, t) => { const a = 0.4 + Math.sin(t * 0.2 * speed) * 0.3, s = L.rot === 0 ? 1 : -1; cam.position.set(L.x + Math.sin(a) * 22, 13, L.z + s * Math.cos(a) * 22); cam.lookAt(L.x, 2, L.z); },
      street: (cam, t) => { const z = -40 + ((t * 6 * speed) % 80); cam.position.set(-2.5, 4, z); cam.lookAt(-2.5 + 4, 2.5, z + 12); },
    };
    world.cine = presets[preset]; world.mode = 'cine'; $('#hud').hidden = true; $('#joy').hidden = true;
  },
  dropQueue() { queue.length = 0; },
  showPlans, showVipCheckout, showCarPicker, showSkinPicker, unlockVip, get chat() { return chat; },
  closeModal, flush, sfx, newDay() { S.login.last = null; S.missions = null; S.login.claimed = null; save(); },
};

// ponto de integração para o checkout real (Pix): o front chama isto quando o servidor confirmar o pagamento
window.BrasilCity = { grantVip: (opts = {}) => { if (!S || !VIP_TEST) return false; if (S.hudReady) unlockVip(opts.source || 'pix', opts.txid || null); else { grantVip(S, opts); save(); } return true; }, isVip: () => isVip(S) };

// ---------- boot ----------
startIconObserver(document.body);
addEventListener('pointerdown', (e) => { const b = e.target.closest?.('button'); if (b && !b.closest('.mg-area') && !b.disabled) sfx('tap'); }, true);
const bootEl = $('#boot');
function bootDone() { if (!bootEl) return; bootEl.classList.add('done'); setTimeout(() => { bootEl.hidden = true; }, 450); }
function withLoading(fn, msg = 'Carregando sua cidade…') { if (!bootEl) return fn(); bootEl.hidden = false; bootEl.classList.remove('done'); const m = bootEl.querySelector('.boot-msg'); if (m) m.textContent = msg; setTimeout(() => { fn(); bootDone(); }, 60); }
document.fonts?.load?.('40px "Lilita One"').catch(() => {});
function begin(d) { createPlayer(d); withLoading(enterGame); }
const saved = load();
const mayorParam = params.get('prefeito');
if (mayorParam && mayorParam !== '1') { // link privado do prefeito: troca a chave por um token e tira a chave da URL
  params.delete('prefeito'); history.replaceState(null, '', location.pathname + (params.toString() ? '?' + params : '') + location.hash);
  const side = params.get('lado') || MAYOR_DEFAULT.side, uf = params.get('uf') || (side === MAYOR_DEFAULT.side ? MAYOR_DEFAULT.uf : 'CE'), cidade = params.get('cidade') || (uf === MAYOR_DEFAULT.uf ? MAYOR_DEFAULT.cidade : CAPITAIS[uf]);
  mayorLogin(mayorParam).then((token) => {
    if (!token) { toast('Link de prefeito inválido.', 5000); return startLanding(); }
    if (saved?.mayor && saved.cidade === cidade && saved.side === side) { S = migrate(saved); S.mayorToken = token; S.mayorVerifiedAt = Date.now(); delete S.mayorDev; S.handle = MAYOR_HANDLE; save(); withLoading(enterGame); }
    else begin({ handle: MAYOR_HANDLE, side, uf, cidade, mayor: true, mayorToken: token });
  });
} else if (mayorParam === '1' && IS_LOCAL) { // atalho só pra teste local
  const side = params.get('lado') || MAYOR_DEFAULT.side, uf = params.get('uf') || (side === MAYOR_DEFAULT.side ? MAYOR_DEFAULT.uf : 'CE'), cidade = params.get('cidade') || (uf === MAYOR_DEFAULT.uf ? MAYOR_DEFAULT.cidade : CAPITAIS[uf]);
  if (saved?.mayor && saved.cidade === cidade && saved.side === side) { S = migrate(saved); withLoading(enterGame); } else begin({ handle: MAYOR_HANDLE, side, uf, cidade, mayor: true, mayorDev: true });
} else startLanding();
function startLanding() {
  const start = (preSide) => { hideLanding(); startSignup({ preSide, toast, vipTest: VIP_TEST, onDone: (d) => begin(d), onCancel: () => showLandingAgain() }); };
  initLanding({ toast, savedHandle: saved?.handle, onStart: start, onContinue: () => { S = migrate(saved); withLoading(enterGame); } });
  if (params.get('jogar') === '1') start();
  setTimeout(bootDone, 350);
}
