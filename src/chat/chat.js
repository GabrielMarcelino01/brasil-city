// ===== Chat da cidade: UI + limite por plano + moradores simulados =====
import { cleanMessage } from './filter.js';
import { createTransport } from './transport.js';
import { ico } from '../icons.js';
import { PLANS } from '../config.js';

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const hhmm = (ts) => new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
const mmss = (ms) => { const s = Math.ceil(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

// ---------- limite de mensagens ----------
export function cooldownMs(vip) { return (vip ? PLANS.chat.vipFloorS : PLANS.chat.freeCooldownS) * 1000; }
export class RateLimiter {
  constructor(handle) { this.key = 'brasilcity_chat_last_' + handle; }
  get last() { return +localStorage.getItem(this.key) || 0; }
  waitMs(vip, now = Date.now()) { return Math.max(0, this.last + cooldownMs(vip) - now); }
  mark(now = Date.now()) { localStorage.setItem(this.key, String(now)); }
}

// ---------- moradores simulados ----------
const T = {
  geral: ['Bom dia, {cidade}! Bora deixar a cidade Nível Suíça?', 'Alguém ajuda na obra {obra}? Falta pouco!', 'Acabei de terminar o telhado da minha casa!', 'Quem aí já limpou o lixo da praça hoje?',
    'Dica: limpar lixo dá XP rapidinho', 'Essa cidade vai virar Grande Potência, anota aí', 'Plantei 2 árvores perto do Palácio', 'Já tô no nível 4, bora que bora',
    'Tirei 3 estrelas no minigame de novo kkk', 'Quem mais tá na missão de hoje?', 'A praça ficou linda depois do mutirão', 'Bem-vindo quem chegou agora!', 'Bora subir {cidade} no ranking, gente',
    'Vi um esportivo amarelo passando na avenida', 'Hoje eu fecho as 3 missões', 'Alguém sabe qual profissão paga mais?', 'Construir a casa primeiro libera a garagem, fica a dica'],
  norte: ['Mutirão na obra às 20h, quem vem?', 'No Norte a gente cresce junto!', 'Mandei 20% do salário pra obra, partiu {obra}', 'Cooperativa rendendo bonito hoje'],
  sul: ['Abri mais uma barraca, os negócios tão rendendo', 'No Sul é trabalho e lucro, bora', 'Patrocinei a obra {obra}, quem mais?', 'Meu negócio rendeu enquanto eu dormia kkk'],
  rival: { norte: ['O Sul tá chegando perto no placar, bora acelerar!', 'Norte na frente hoje, segura!'], sul: ['O Norte tá passando a gente no ranking, bora!', 'Sul vai virar o placar hoje!'] },
  perguntas: [['Como faz pra ganhar moeda rápido?', 'Toca em TRABALHAR! Cada profissão é um minigame'], ['Onde fica meu terreno?', 'Toca no botão Casa que ele te leva'], ['Pra que serve limpar o lixo?', 'Conta ponto pra cidade subir de nível']],
  resposta: ['Bem-vindo(a), @{h}!', 'Boa, @{h}! Tamo junto', 'Isso aí @{h}, bora crescer {cidade}', '@{h} cola na obra com a gente!', 'Salve @{h}!'],
  respostaQ: ['@{h} eu quero!', '@{h} boa pergunta, alguém sabe?', '@{h} toca no botão de Ajuda, explica tudo', '@{h} conta comigo'],
};
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const fill = (s, c) => s.replace(/\{(\w+)\}/g, (_, k) => c[k] ?? '');

export function initChat({ getPlayer, getCtx, residentCount, botNames, onUpsell, toast, bots = true }) {
  const P = getPlayer(); const room = (P.uf + '_' + P.cidade).replace(/\s+/g, '_');
  const tr = createTransport(room); const rl = new RateLimiter(P.handle);
  let open = false, unread = 0, timer = null, botT = null, previewT = null;
  const root = document.createElement('div'); root.id = 'chatp'; root.hidden = true;
  root.innerHTML = `<div class="chat-h"><span class="chat-ic">${ico('chat')}</span><div><b>Chat de ${esc(P.cidade)}</b><small id="chat-on"></small></div><button class="chat-x" id="chat-x" aria-label="Fechar chat">${ico('close')}</button></div>
    <div class="chat-list" id="chat-list" data-raw></div>
    <div class="chat-lim" id="chat-lim"></div>
    <form class="chat-f" id="chat-f" autocomplete="off"><input id="chat-in" maxlength="${PLANS.chat.maxLen}" placeholder="Escreva pra cidade…" enterkeyhint="send"><button id="chat-send" type="submit" aria-label="Enviar">${ico('send')}</button></form>`;
  document.body.appendChild(root);
  const prev = document.createElement('div'); prev.id = 'chat-prev'; prev.hidden = true; prev.setAttribute('data-raw', ''); document.body.appendChild(prev);
  const list = $('#chat-list', root), inp = $('#chat-in', root), lim = $('#chat-lim', root), sendB = $('#chat-send', root);
  const msgs = [];

  const vip = () => getPlayer()?.plan === 'vip';
  function rowHTML(m) {
    const me = m.handle === getPlayer()?.handle && !m.bot;
    return `<div class="cm ${m.side === 'sul' ? 'sul' : 'norte'} ${me ? 'me' : ''}" data-id="${esc(m.id)}"><span class="cm-h"><b>@${esc(m.handle)}</b>${m.mayor ? `<span class="cm-crown" title="Prefeito">${ico('crown')}</span>` : ''}${m.vip ? `<span class="vipseal" title="VIP">${ico('vip')}</span>` : ''}<time>${hhmm(m.ts)}</time></span><span class="cm-t">${esc(m.text)}</span></div>`;
  }
  function add(m, { silent } = {}) {
    if (msgs.some((x) => x.id === m.id)) return; msgs.push(m); if (msgs.length > 80) msgs.shift();
    const atEnd = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
    list.insertAdjacentHTML('beforeend', rowHTML(m)); while (list.children.length > 80) list.firstChild.remove();
    if (open && atEnd) list.scrollTop = list.scrollHeight;
    if (!open && !silent) { unread++; syncButton(); showPreview(m); }
  }
  function showPreview(m) {
    prev.innerHTML = `<b class="${m.side === 'sul' ? 'sul' : 'norte'}">@${esc(m.handle)}</b>${m.vip ? `<span class="vipseal">${ico('vip')}</span>` : ''} ${esc(m.text)}`;
    prev.hidden = !document.querySelector('#b-chat') || !!document.querySelector('.modal'); prev.classList.remove('show'); void prev.offsetWidth; prev.classList.add('show');
    clearTimeout(previewT); previewT = setTimeout(() => { prev.classList.remove('show'); setTimeout(() => (prev.hidden = true), 300); }, 4200);
  }
  function syncButton() { const b = document.querySelector('#b-chat'); if (!b) return; let bd = b.querySelector('.bd'); if (unread && !open) { if (!bd) { bd = document.createElement('i'); bd.className = 'bd'; b.appendChild(bd); } bd.textContent = unread > 9 ? '9+' : unread; } else bd?.remove(); b.classList.toggle('on', open); }
  function updateLimit() {
    const w = rl.waitMs(vip());
    if (vip()) lim.innerHTML = `<span class="vipseal">${ico('vip')}</span><b>VIP</b> chat ilimitado${w > 0 ? ` • ${Math.ceil(w / 1000)}s` : ''}`;
    else if (w > 0) lim.innerHTML = `${ico('clock')}<span class="cd">aguarde <b id="chat-cd">${mmss(w)}</b></span><button type="button" class="chat-up" id="chat-up">${ico('vip')}VIP manda sem limite</button>`;
    else lim.innerHTML = `${ico('chat')}<span>Grátis: 1 mensagem por minuto</span><button type="button" class="chat-up" id="chat-up">${ico('vip')}Seja VIP</button>`;
    lim.classList.toggle('wait', !vip() && w > 0); sendB.disabled = w > 0; inp.placeholder = w > 0 && !vip() ? `Aguarde ${mmss(w)} pra mandar de novo` : 'Escreva pra cidade…';
    const up = $('#chat-up', root); if (up) up.onclick = () => onUpsell?.('chat');
    $('#chat-on', root).textContent = `${Math.max(3, Math.round((residentCount?.() || 12) / 6))} online agora`;
  }
  function post(text, { as } = {}) {
    const p = as || getPlayer(); if (!p) return { ok: false, reason: 'sem jogador' };
    if (!as) { const w = rl.waitMs(vip()); if (w > 0) { updateLimit(); return { ok: false, reason: 'limite', waitMs: w }; } }
    const c = cleanMessage(text, { maxLen: PLANS.chat.maxLen });
    if (!c.ok) { if (c.reason === 'odio') toast?.('Mensagem bloqueada: aqui é lugar de respeito.', 3500); else if (c.reason === 'link' || c.reason === 'telefone') toast?.('Links e telefones não são permitidos no chat.'); return { ok: false, reason: c.reason }; }
    const m = { id: uid(), room, handle: p.handle, side: p.side, vip: p.plan === 'vip', mayor: !!p.mayor, text: c.text, ts: Date.now() };
    if (!as) rl.mark(); tr.send(m); add(m, { silent: true }); if (open) list.scrollTop = list.scrollHeight;
    if (c.flags.includes('palavrao')) toast?.('Palavrões viram asteriscos por aqui.', 2500);
    if (bots && !as && Math.random() < 0.7) setTimeout(() => botReply(m), 2500 + Math.random() * 3500);
    updateLimit(); return { ok: true, msg: m, flags: c.flags };
  }
  // ---- moradores simulados (somem quando houver chat real) ----
  const names = () => botNames?.() || ['morador.novo'];
  function botMsg(text, o = {}) {
    const P2 = getPlayer(), side = o.side || P2.side, n = o.handle || pick(names());
    const m = { id: uid(), room, handle: n, side, vip: o.vip ?? Math.random() < 0.22, mayor: false, text: cleanMessage(text).text || text, ts: o.ts || Date.now(), bot: true };
    tr.remember(m); add(m, { silent: !!o.silent }); return m;
  }
  function botTick() {
    const c = getCtx(), P2 = getPlayer(); const other = P2.side === 'norte' ? 'sul' : 'norte'; const r = Math.random();
    if (r < 0.12) botMsg(pick(T.rival[P2.side]));
    else if (r < 0.2) botMsg(pick(T.rival[other]), { side: other });
    else if (r < 0.32) { const [q, a] = pick(T.perguntas); const qm = botMsg(q); setTimeout(() => botMsg('@' + qm.handle + ' ' + a), 3000 + Math.random() * 2000); }
    else botMsg(fill(pick(Math.random() < 0.3 ? T[P2.side] : T.geral), c));
  }
  function botReply(m) { const c = getCtx(); botMsg(fill(pick(m.text.includes('?') ? T.respostaQ : T.resposta), { ...c, h: m.handle })); }
  function scheduleBots() { clearTimeout(botT); if (!bots) return; botT = setTimeout(() => { if (!document.hidden) botTick(); scheduleBots(); }, 14000 + Math.random() * 16000); }

  // histórico + semente
  const hist = tr.history(); hist.forEach((m) => add(m, { silent: true }));
  if (bots && hist.length < 3) { const c = getCtx(), now = Date.now(); [0, 1, 2, 3, 4].forEach((i) => botMsg(fill(pick(i % 2 ? T.geral : T[getPlayer().side]), c), { ts: now - (5 - i) * 95000, silent: true })); }
  tr.connect((m) => add(m));
  scheduleBots();

  $('#chat-f', root).onsubmit = (e) => { e.preventDefault(); const v = inp.value; if (!v.trim()) return; const r = post(v); if (r.ok) inp.value = ''; else if (r.reason === 'limite') toast?.(vip() ? 'Calma! 2 segundinhos entre mensagens.' : `Plano grátis: 1 mensagem por minuto. Aguarde ${mmss(r.waitMs)}.`); };
  $('#chat-x', root).onclick = () => setOpen(false);
  inp.addEventListener('keydown', (e) => e.stopPropagation());
  function setOpen(v) {
    open = v; root.hidden = !v; document.body.classList.toggle('chat-open', v);
    if (v) { unread = 0; prev.hidden = true; updateLimit(); list.scrollTop = list.scrollHeight; clearInterval(timer); timer = setInterval(updateLimit, 250); }
    else { clearInterval(timer); inp.blur(); }
    syncButton();
  }
  return {
    open: () => setOpen(true), close: () => setOpen(false), toggle: () => setOpen(!open), get isOpen() { return open; }, syncButton, refresh: updateLimit,
    send: (t) => post(t), botTick, messages: () => msgs.slice(), waitMs: () => rl.waitMs(vip()), limiter: rl,
    destroy() { clearInterval(timer); clearTimeout(botT); clearTimeout(previewT); tr.close(); root.remove(); prev.remove(); document.body.classList.remove('chat-open'); },
  };
}
