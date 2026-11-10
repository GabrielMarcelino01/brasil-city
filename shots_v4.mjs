// Screenshots v4 (planos VIP + chat): node shots_v4.mjs [outdir]
import { chromium } from 'playwright';
import fs from 'fs';
const OUT = (process.argv[2] || '/workspace/brasil_game/screenshots/v4') + '/'; fs.mkdirSync(OUT, { recursive: true });
const url = 'file:///workspace/brasil_game/dist/index.html';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const errors = [];
async function newPage() {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); }); page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  return { ctx, page };
}
const W = (p, ms) => p.waitForTimeout(ms);
const shot = async (page, name, wait = 600) => { await W(page, wait); await page.screenshot({ path: OUT + name + '.png', timeout: 120000 }); console.log('shot', name); };
const ev = (page, f, a) => page.evaluate(f, a);
async function signup(page, q, handle, side, uf, city, prof) {
  await page.goto(url); await ev(page, () => localStorage.clear()); await page.goto(url + q); await W(page, 2500);
  await page.fill('#su-h', handle); await page.click('#su-ok', { force: true }); await W(page, 300);
  await page.click('.age >> nth=2', { force: true }); await W(page, 300); await page.click(`.side2.${side}`, { force: true }); await W(page, 300);
  await page.click(`.uf2[data-uf=${uf}]`, { force: true }); await W(page, 300); await page.fill('#su-q', city); await W(page, 300);
  await page.click('.city2 >> nth=0', { force: true }); await W(page, 300); await page.click(`.prof2[data-p=${prof}]`, { force: true }); await W(page, 700);
}
const showcase = (page, rot = 0.35) => ev(page, (rot) => { const w = __game.world, v = w.vehicle.position; let L = w.lots[0], d = 1e9; for (const l of w.lots) { const q = Math.hypot(l.x - v.x, l.z - v.z); if (q < d) { d = q; L = l; } } const s = Math.sign(v.z - L.z) || 1;
  w.player.position.set(v.x + 3.3, w.player.position.y, v.z + s * 1.6); w.playerPos = w.player.position.clone(); w.player.rotation.y = (s > 0 ? 0 : Math.PI) - rot;
  const px = v.x + 1.6, pz = v.z; w.cine = (cam) => { cam.position.set(px - 0.6, 4.0, pz + s * 10.6); cam.lookAt(px + 0.2, 1.0, pz); }; w.mode = 'cine'; }, rot);
const calm = (page) => ev(page, () => { __game.closeModal(true); __game.dropQueue(); document.querySelector('#toast').classList.remove('show'); });
// 1) grátis: planos, checkout e chat com contagem
{
  const { ctx, page } = await newPage();
  await signup(page, '?jogar=1', 'ana.do.recife', 'norte', 'PE', 'recife', 'empacotador');
  await shot(page, '01_planos_gratis_x_vip', 900);
  await page.click('#pl-vip', { force: true }); await shot(page, '02_checkout_pix_em_breve', 800);
  await page.click('#px-free', { force: true }); await W(page, 4000); await page.click('#claimlogin', { force: true }); await W(page, 800); await calm(page); await W(page, 1500);
  await shot(page, '06a_hud_gratis_botoes_chat_vip', 600);
  await ev(page, () => { __chat.botTick(); }); await shot(page, '06b_chat_previa_mensagem', 900);
  await ev(page, () => __chat.open()); await W(page, 300);
  await page.fill('#chat-in', 'Bom dia! Bora terminar a praça hoje'); await page.click('#chat-send', { force: true }); await W(page, 15500);
  await page.fill('#chat-in', 'porra, quero mandar de novo'); await shot(page, '06c_chat_gratis_contagem', 300);
  await ev(page, () => __chat.close()); await ev(page, () => __game.showPlans('chat')); await shot(page, '06d_planos_no_jogo', 900);
  await ctx.close();
}
// 2) VIP (?vip=1): carro, skin, avatar + carro na cidade, chat com selo
{
  const { ctx, page } = await newPage();
  await signup(page, '?jogar=1&vip=1', 'caio.campinas', 'sul', 'SP', 'campinas', 'pedreiro');
  await shot(page, '03a_planos_modo_teste', 600);
  await page.click('#pl-vip', { force: true }); await shot(page, '03_escolha_carro_esportivo', 1800);
  await page.click('.car3[data-car=vip_lambo]', { force: true }); await shot(page, '04_escolha_skin_lendaria', 1800);
  await page.click('.skin2[data-skin=lend_heroi]', { force: true }); await W(page, 4500); await page.click('#claimlogin', { force: true }); await W(page, 800); await calm(page); await W(page, 800);
  // enquadra o herói ao lado do carro
  await showcase(page); await ev(page, () => document.querySelector('#hud-bottom').style.visibility = 'hidden'); await ev(page, () => document.querySelector('#joy').style.visibility = 'hidden');
  await shot(page, '05_vip_heroi_e_lamborghini_na_cidade', 2500);
  await ev(page, () => { const w = __game.world; w.player.rotation.y = w.player.rotation.y + Math.PI + 0.35 + 0.5; }); await shot(page, '05c_heroi_capa_dourada', 1200);
  await ev(page, () => { document.querySelector('#hud-bottom').style.visibility = ''; document.querySelector('#joy').style.visibility = ''; __game.cine('follow'); });
  await ev(page, () => { __game.teleport(__game.world.spawn.x, __game.world.spawn.z); }); await W(page, 500); await ev(page, () => __game.doCtx('claim')); await W(page, 300);
  await ev(page, () => { __game.setLotStage(4); __game.closeModal(true); __game.dropQueue(); const w = __game.world, L = w.lots[__game.S.lote.idx]; w.cine = (cam) => { cam.position.set(L.x + 15, 15, L.z + (L.rot === 0 ? 17 : -17)); cam.lookAt(L.x, 1.5, L.z); }; w.mode = 'cine'; document.querySelector('#hud').hidden = true; document.querySelector('#joy').hidden = true; });
  await ev(page, () => document.querySelector('#toast').classList.remove('show')); await shot(page, '05b_terreno_vip_200m2', 2500);
  await ev(page, () => { __game.cine('follow'); __game.closeModal(true); }); await W(page, 500);
  await ev(page, () => { localStorage.removeItem('brasilcity_chat_last_caio.campinas'); __chat.open(); }); await W(page, 300);
  await page.fill('#chat-in', 'Chegou o VIP! Quem quer carona na Lamborghini?'); await page.click('#chat-send', { force: true }); await W(page, 2300);
  await page.fill('#chat-in', 'Bora bater a meta da obra hoje'); await page.click('#chat-send', { force: true }); await W(page, 4500);
  await shot(page, '07_chat_vip_com_selo', 300);
  await ev(page, () => __chat.close()); await ev(page, () => __game.showCarteira()); await shot(page, '08_perfil_vip_arroba_clicavel', 700);
  await ev(page, () => __game.showRanking('ricos')); await shot(page, '09_ranking_vip', 600);
  await ev(page, () => __game.showShop('veiculos')); await shot(page, '10_loja_esportivos_vip', 700);
  await ev(page, () => __game.showShop('roupas')); await ev(page, () => document.querySelector('.mbox').scrollTop = 9999); await shot(page, '10b_loja_skins_vip', 500);
  await ev(page, () => { __game.closeModal(true); __game.S.skin = 'lend_piloto'; __game.refreshAvatar(); __game.S.veiculo = 'vip_ferrari'; __game.world.setVehicle('vip_ferrari', __game.world.parkAt); document.querySelector('#hud-bottom').style.visibility = 'hidden'; document.querySelector('#joy').style.visibility = 'hidden'; }); await showcase(page);
  await shot(page, '11_skin_piloto_e_ferrari', 2500);
  await ev(page, () => { __game.world.setVehicle('vip_porsche', __game.world.parkAt); }); await shot(page, '11b_porsche', 1500);
  await ctx.close();
}
console.log(errors.length ? 'ERROS:\n' + errors.join('\n') : 'sem erros no console');
await browser.close();
