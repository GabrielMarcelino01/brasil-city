// ===== Telas do VIP: planos, checkout Pix (Mercado Pago), escolha de carro e de skin =====
import { ico } from './icons.js';
import { PLANS } from './config.js';
import { VIP_CARS, VIP_SKINS, VIP_BENEFITS, FREE_BENEFITS } from './vip.js';
import { carThumb, skinThumb } from './preview.js';
import { createPix, checkPix, loadPending, clearPending, pendingExpired, lastEmail, rememberEmail, isNetErr } from './pay.js';

const row = ([icon, t, s], cls = '') => `<li class="${cls}"><span class="pi">${ico(icon)}</span><span><b>${t}</b>${s ? `<small>${s}</small>` : ''}</span></li>`;
export function plansHTML({ test = false, from = 'signup' } = {}) {
  const V = PLANS.vip;
  const missing = [['vip', 'Sem selo VIP', ''], ['carSilver', 'Sem carro esportivo', '']];
  return `<div class="plans" id="plans">
    <div class="plan free" id="pl-free-card">
      <div class="pl-h"><b class="pl-n">GRÁTIS</b><div class="pl-price"><strong>R$ 0</strong><small>pra sempre</small></div></div>
      <ul>${FREE_BENEFITS.map((b) => row(b)).join('')}${missing.map((b) => row(b, 'no')).join('')}</ul>
      <button class="btn ghost pl-btn" id="pl-free">${from === 'signup' ? 'Jogar grátis' : 'Agora não'}</button>
    </div>
    <div class="plan vip" id="pl-vip-card">
      <div class="pl-rib">MAIS ESCOLHIDO</div>
      <div class="pl-h"><b class="pl-n"><span class="vipseal">${ico('vip')}</span>VIP</b><div class="pl-price"><s>de ${V.ancora}</s><strong>${V.preco}</strong><small>${V.cobranca}</small></div></div>
      <ul>${VIP_BENEFITS.map((b) => row(b)).join('')}</ul>
      <button class="btn gold pl-btn" id="pl-vip">${test ? 'Liberar VIP (teste)' : 'Quero ser VIP'}</button>
    </div>
  </div>
  ${test ? `<p class="pl-test">${ico('gear')} Modo teste local (?vip=1): o VIP é liberado sem pagamento.</p>` : `<p class="pl-foot">${ico('lock')} Pagamento seguro via Mercado Pago · Pix. Tudo que faz subir de nível continua grátis.</p>`}`;
}
const escH = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mmss = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const SAFE = `<p class="pl-foot px-safe">${ico('lock')} Pagamento seguro via Mercado Pago · Pix</p>`;
const SUM = () => { const V = PLANS.vip; return `<div class="pix-sum"><span class="pix-it"><span class="vipseal">${ico('vip')}</span><b>Plano VIP</b><small>${V.cobranca}</small></span><span class="pix-val"><s>${V.ancora}</s><b>${V.preco}</b></span></div>`; };

/**
 * Checkout Pix do VIP dentro de um container (cadastro ou modal do jogo).
 * opts: { handle, onApproved({ token, pid }), onFree(), onBack(), toast, freeLabel }
 */
export function mountCheckout(root, { handle, onApproved, onFree, onBack, toast = () => {}, freeLabel = 'Continuar grátis por enquanto' }) {
  let poll = null, tick = null, busy = false, dead = false, curCheck = null;
  const alive = () => !dead && root.isConnected && !!root.querySelector('.pix');
  const stop = () => { clearInterval(poll); clearInterval(tick); poll = tick = null; document.removeEventListener('visibilitychange', onVis); };
  const kill = () => { dead = true; stop(); };
  const onVis = () => { if (document.visibilityState === 'visible' && alive() && curCheck) curCheck(false); };
  const bindCommon = () => { const f = root.querySelector('#px-free'), b = root.querySelector('#px-back'); if (f) f.onclick = () => { kill(); onFree(); }; if (b) b.onclick = () => { kill(); onBack(); }; };
  const footer = () => `<button class="btn link" id="px-free">${freeLabel}</button><button class="btn link" id="px-back">Voltar aos planos</button>${SAFE}`;

  function form(err = '') {
    stop();
    root.innerHTML = `<div class="pix" id="pix">${SUM()}
      <div class="px-form">
        <label class="px-lb" for="px-email">Seu e-mail <small>(pro comprovante do Mercado Pago)</small></label>
        <input id="px-email" class="px-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" spellcheck="false" maxlength="120" placeholder="voce@email.com" value="${escH(lastEmail())}">
        <label class="px-lb" for="px-nome">Primeiro nome <small>(opcional)</small></label>
        <input id="px-nome" class="px-in" type="text" autocomplete="given-name" maxlength="40" placeholder="Seu nome">
        <div class="px-for">${ico('at')}<span>VIP vai para <b>@${escH(handle)}</b></span></div>
        <p class="px-err" id="px-err" ${err ? '' : 'hidden'}>${escH(err)}</p>
      </div>
      <button class="btn gold" id="px-go">${ico('qr')} Gerar Pix de ${PLANS.vip.preco}</button>
      <ol class="pix-steps"><li><i>1</i>Gere o Pix</li><li><i>2</i>Pague no app do banco</li><li><i>3</i>VIP liberado na hora</li></ol>
      ${footer()}</div>`;
    bindCommon();
    const em = root.querySelector('#px-email'), go = root.querySelector('#px-go'), er = root.querySelector('#px-err');
    const showErr = (m) => { er.textContent = m; er.hidden = false; };
    go.onclick = async () => {
      if (busy) return; const email = em.value.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) { showErr('Digite um e-mail válido pra gerar o Pix.'); em.focus(); return; }
      busy = true; go.disabled = true; go.innerHTML = `<span class="px-spin"></span> Gerando Pix…`; er.hidden = true;
      try { rememberEmail(email); const p = await createPix({ handle, email, nome: root.querySelector('#px-nome').value.trim() }); if (!dead) qr(p); }
      catch (e) { if (!dead && root.isConnected) { go.disabled = false; go.innerHTML = `${ico('qr')} Gerar Pix de ${PLANS.vip.preco}`; showErr(isNetErr(e) ? 'Sem conexão com o servidor. Confere sua internet e tenta de novo.' : e.message); } }
      finally { busy = false; }
    };
    em.onkeydown = (e) => { if (e.key === 'Enter') go.click(); };
  }

  function qr(p) {
    stop();
    const img = p.qr64 ? `<img class="qrimg" alt="QR Code Pix" src="data:image/png;base64,${p.qr64}">` : ico('qr', 'qr');
    root.innerHTML = `<div class="pix" id="pix">${SUM()}
      <div class="pix-qr"><div class="qrbox live">${img}</div></div>
      <div class="px-timer" id="px-timer">${ico('clock')}<span>Expira em <b id="px-left">${mmss(p.exp - Date.now())}</b></span></div>
      <div class="px-code"><code id="px-code">${escH(p.qr)}</code></div>
      <button class="btn primary" id="px-copy">${ico('clipboard')} Copiar código Pix</button>
      <div class="px-wait" id="px-wait"><span class="px-spin"></span><b>Aguardando pagamento…</b><small>Assim que o Pix cair, o VIP libera sozinho.</small></div>
      <button class="btn ghost" id="px-paid">${ico('check')} Já paguei</button>
      <ol class="pix-steps"><li><i>1</i>Copie o código ou escaneie o QR</li><li><i>2</i>Pague no app do banco</li><li><i>3</i>Volte aqui: VIP na hora</li></ol>
      ${footer()}</div>`;
    bindCommon();
    root.querySelector('#px-copy').onclick = async () => {
      let done = false; try { await navigator.clipboard.writeText(p.qr); done = true; } catch { /* fallback abaixo */ }
      if (!done) { const r = document.createRange(); r.selectNodeContents(root.querySelector('#px-code')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); try { done = document.execCommand('copy'); } catch { done = false; } }
      const b = root.querySelector('#px-copy'); b.innerHTML = `${ico('check')} ${done ? 'Código copiado!' : 'Selecione e copie o código acima'}`; b.classList.toggle('ok', done); if (!done) toast('Segure o código pra copiar.');
      setTimeout(() => { if (alive() && root.querySelector('#px-copy')) { b.innerHTML = `${ico('clipboard')} Copiar código Pix`; b.classList.remove('ok'); } }, 4000);
    };
    curCheck = check; root.querySelector('#px-paid').onclick = () => check(true);
    tick = setInterval(() => { if (!alive()) return kill(); const left = p.exp - Date.now(); const el = root.querySelector('#px-left'); if (el) el.textContent = mmss(left); if (left <= 0) { check(false).then(() => { if (alive() && root.querySelector('#px-left')) ended('expired', p); }); stop(); } }, 1000);
    poll = setInterval(() => { if (!alive()) return kill(); check(false); }, 4000);
    document.addEventListener('visibilitychange', onVis);
    check(false); // confere na hora (útil ao retomar um Pix depois de recarregar)
    async function check(manual) {
      if (!alive() || busy) return; busy = true; const pb = root.querySelector('#px-paid'); if (manual && pb) { pb.disabled = true; pb.innerHTML = `<span class="px-spin"></span> Conferindo…`; }
      try {
        const d = await checkPix(p); if (!alive()) return;
        if (d.status === 'approved' && d.vip) { kill(); clearPending(); onApproved({ token: d.vip, pid: p.id }); return; }
        if (['rejected', 'cancelled', 'expired', 'refunded', 'charged_back', 'invalid'].includes(d.status)) { ended(d.status, p); return; }
        if (manual) toast('Ainda não recebemos o Pix. Se já pagou, espera uns segundinhos.', 4000);
      } catch (e) {
        if (!alive()) return;
        if (e.status === 403) { clearPending(); form('Esse Pix não vale mais. Gere um novo.'); return; }
        if (manual) toast(isNetErr(e) ? 'Sem conexão. Vamos tentar de novo sozinhos.' : 'Não deu pra conferir agora. Tentando de novo…', 4000);
      } finally { busy = false; const b2 = root.querySelector('#px-paid'); if (manual && b2) { b2.disabled = false; b2.innerHTML = `${ico('check')} Já paguei`; } }
    }
  }

  function ended(status, p) {
    stop(); clearPending();
    const msg = { expired: ['O Pix expirou', 'O código vale por 30 minutos. Gere um novo, leva 2 segundos.'], rejected: ['Pagamento recusado', 'O banco recusou esse Pix. Tenta gerar um novo.'], invalid: ['Pagamento não confere', 'Esse pagamento não bate com o pedido. Fala com a gente no Instagram.'] }[status] || ['Pix cancelado', 'Esse Pix foi cancelado. Gere um novo pra virar VIP.'];
    root.innerHTML = `<div class="pix" id="pix">${SUM()}<div class="pix-qr"><div class="qrbox">${ico('qr', 'qr')}<div class="qr-lock"><span>${ico('clock')}</span><b>${status === 'expired' ? 'EXPIROU' : 'CANCELADO'}</b></div></div></div>
      <div class="pix-t"><b>${msg[0]}</b><small>${msg[1]}</small></div>
      <button class="btn gold" id="px-new">${ico('qr')} Gerar novo Pix</button>${footer()}</div>`;
    bindCommon(); root.querySelector('#px-new').onclick = () => form();
  }

  const pending = loadPending(handle);
  if (pending && !pendingExpired(pending)) qr(pending); else { if (pending) clearPending(); form(); }
  return { destroy: kill };
}
const img = (url, icon) => (url ? `<img src="${url}" alt="">` : ico(icon));
export function carPickerHTML(sel) {
  return `<div class="cars3" id="cars3">${VIP_CARS.map((c) => `<button class="car3 ${sel === c.id ? 'sel' : ''}" data-car="${c.id}" style="--cc:${c.cor}">
    <span class="c3-img">${img(carThumb(c.id), c.icon)}</span><span class="c3-i"><b>${c.nome}</b><small>${c.desc}</small><span class="c3-v"><i style="width:${Math.round(c.vel / 3.2 * 100)}%"></i></span></span><span class="c3-ok">${ico('check')}</span></button>`).join('')}</div>`;
}
export function skinPickerHTML(sel) {
  return `<div class="skins2" id="skins2">${VIP_SKINS.map((s) => `<button class="skin2 ${sel === s.id ? 'sel' : ''}" data-skin="${s.id}">
    <span class="s2-tag">LENDÁRIA</span><span class="s2-img">${img(skinThumb(s.id), s.icon)}</span><b>${s.nome}</b><small>${s.tipo}</small><em>${s.desc}</em></button>`).join('')}</div>
    <p class="pl-foot">${ico('shirt')} As duas são suas. Troque quando quiser em Loja › Roupas.</p>`;
}
