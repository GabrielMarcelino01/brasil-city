// ===== Telas do VIP: planos, checkout Pix (em breve), escolha de carro e de skin =====
import { ico } from './icons.js';
import { PLANS } from './config.js';
import { VIP_CARS, VIP_SKINS, VIP_BENEFITS, FREE_BENEFITS } from './vip.js';
import { carThumb, skinThumb } from './preview.js';

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
  ${test ? `<p class="pl-test">${ico('gear')} Modo teste (?vip=1): o VIP é liberado sem pagamento.</p>` : `<p class="pl-foot">${ico('lock')} Pagamento via Pix (em breve). Tudo que faz subir de nível continua grátis.</p>`}`;
}
export function checkoutHTML() {
  const V = PLANS.vip;
  return `<div class="pix" id="pix">
    <div class="pix-sum"><span class="pix-it"><span class="vipseal">${ico('vip')}</span><b>Plano VIP</b><small>${V.cobranca}</small></span><span class="pix-val"><s>${V.ancora}</s><b>${V.preco}</b></span></div>
    <div class="pix-qr"><div class="qrbox">${ico('qr', 'qr')}<div class="qr-lock"><span>${ico('clock')}</span><b>EM BREVE</b></div></div></div>
    <div class="pix-t"><b>Pagamento via Pix em breve</b><small>Estamos finalizando a integração com o Pix. Nesta versão nada é cobrado. Assim que liberar, o VIP cai na sua conta na hora.</small></div>
    <ol class="pix-steps"><li><i>1</i>Abra o app do seu banco</li><li><i>2</i>Escaneie o QR Code Pix</li><li><i>3</i>VIP liberado na hora</li></ol>
    <button class="btn primary" id="px-free">Entrar grátis por enquanto</button>
    <button class="btn link" id="px-back">Voltar aos planos</button>
  </div>`;
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
