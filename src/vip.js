// ===== Plano VIP: definição dos benefícios + ponto único de liberação =====
// Quando o Pix real existir, o webhook do gateway (no servidor) marca o jogador como VIP no banco
// e o cliente chama grantVip(player, { source: 'pix', txid }) ao carregar. Nada mais precisa mudar.
import { PLANS } from './config.js';

export const VIP_CARS = [
  { id: 'vip_porsche', nome: 'Porsche', icon: 'carSilver', desc: 'Cupê prata, clássico e veloz.', cor: '#c3cad6', vel: 3.0 },
  { id: 'vip_lambo', nome: 'Lamborghini', icon: 'carWedge', desc: 'Cunha amarela, superbaixa.', cor: '#ffc425', vel: 3.2 },
  { id: 'vip_ferrari', nome: 'Ferrari', icon: 'carRed', desc: 'Vermelha, capô longo e motor potente.', cor: '#e1251b', vel: 3.1 },
];
export const VIP_SKINS = [
  { id: 'lend_heroi', nome: 'Guardião Brasil', tipo: 'Super-herói lendário', icon: 'heroBR', desc: 'Traje verde, capa dourada e máscara.' },
  { id: 'lend_piloto', nome: 'Piloto de Corrida', tipo: 'Profissão lendária', icon: 'racer', desc: 'Macacão de corrida e capacete com viseira.' },
];
export const VIP_BENEFITS = [
  ['chat', 'Chat ilimitado', 'manda quando quiser'],
  ['vip', 'Selo dourado VIP', 'ao lado do seu @'],
  ['at', '@ do Instagram clicável', 'no perfil e no ranking'],
  ['carSilver', 'Carro esportivo', 'Porsche, Lamborghini ou Ferrari'],
  ['heroBR', '2 skins lendárias', 'super-herói + piloto'],
  ['sign', `Terreno de ${PLANS.lotM2.vip}\u00a0m²`, `o dobro do grátis (${PLANS.lotM2.free}\u00a0m²)`],
];
export const FREE_BENEFITS = [
  ['gamepad', 'Jogo completo', 'todas as profissões'],
  ['chat', 'Chat da cidade', '1 mensagem por minuto'],
  ['house', 'Casa padrão', 'construa em 4 etapas'],
  ['sign', `Terreno de ${PLANS.lotM2.free}\u00a0m²`, ''],
];

export const isVip = (p) => !!p && p.plan === 'vip';
export const lotM2 = (p) => (isVip(p) ? PLANS.lotM2.vip : PLANS.lotM2.free);

/** Libera o VIP para um jogador (objeto salvo). Idempotente. Retorna o jogador. */
export function grantVip(player, { source = 'pix', txid = null } = {}) {
  if (!player) return player;
  player.plan = 'vip';
  player.vip = Object.assign({ since: Date.now(), source, txid, car: null, skin: null }, player.vip || {});
  player.inventario ||= [];
  for (const it of [...VIP_CARS, ...VIP_SKINS]) if (!player.inventario.includes(it.id)) player.inventario.push(it.id);
  return player;
}
/** Plano grátis padrão (novo jogador). */
export function ensurePlan(player) { if (player && !player.plan) player.plan = 'free'; return player; }
