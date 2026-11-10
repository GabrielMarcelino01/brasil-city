// Screenshots do novo visual (Play Store skin): node shots_ui.mjs [all|landing|jogo|prefeito] [outdir]
import { chromium } from 'playwright';
import fs from 'fs';
const which = process.argv[2] || 'all';
const OUT = (process.argv[3] || '/workspace/brasil_game/screenshots/v3_ui') + '/'; fs.mkdirSync(OUT, { recursive: true });
const url = 'file:///workspace/brasil_game/dist/index.html';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const errors = [];
async function newPage(q = '', keep) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  await page.goto(url); await page.evaluate(() => localStorage.clear()); await page.goto(url + q); await page.waitForTimeout(3200);
  return { ctx, page };
}
const shot = async (page, name, wait = 600) => { await page.waitForTimeout(wait); await page.screenshot({ path: OUT + name + '.png', timeout: 120000 }); console.log('shot', name); };
const ev = (page, f, a) => page.evaluate(f, a);
if (which === 'all' || which === 'landing') {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage(); page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  // tela de carregamento (congelada antes do script rodar)
  await page.goto(url); await page.evaluate(() => { localStorage.clear(); });
  await page.goto(url); await page.waitForTimeout(3000);
  await page.addStyleTag({ content: '#landing{scroll-behavior:auto!important}.reveal{opacity:1!important;transform:none!important}' });
  const to = async (sel, off = 0) => ev(page, ([s, o]) => { const L = document.querySelector('#landing'); const e = document.querySelector(s); L.scrollTop = e.getBoundingClientRect().top + L.scrollTop - 58 + o; }, [sel, off]);
  await shot(page, '01_landing_hero', 1500);
  await to('.split', -30); await shot(page, '01b_landing_norte_x_sul', 1000);
  await to('.sec.dark'); await shot(page, '01c_landing_videos', 2000);
  await to('.sec.green'); await shot(page, '01d_landing_objecoes');
  await to('.feat', -80); await shot(page, '01e_landing_recursos');
  await to('.sec.yellow'); await shot(page, '01f_landing_placar', 1600);
  await to('#oferta'); await shot(page, '01g_landing_oferta');
  await ev(page, () => document.querySelectorAll('.faq details')[2].open = true); await to('.faq'); await shot(page, '01h_landing_faq');
  await to('.final'); await shot(page, '01i_landing_final');
  await ev(page, () => { const b = document.querySelector('#boot'); b.hidden = false; b.classList.remove('done'); }); await shot(page, '00_tela_de_carregamento', 300);
  await ev(page, () => { document.querySelector('#boot').hidden = true; document.querySelector('#landing').scrollTop = 0; }); await page.click('.cta[data-go=start]', { force: true });
  await page.fill('#su-h', 'maria.do.sertao'); await shot(page, '02a_cadastro_arroba', 500);
  await page.click('#su-ok', { force: true }); await page.click('.age >> nth=2', { force: true }); await shot(page, '02b_cadastro_qual_brasil', 700);
  await page.click('.side2.norte', { force: true }); await shot(page, '02c_cadastro_estado', 700);
  await page.click('.uf2[data-uf=PE]', { force: true }); await page.fill('#su-q', 'cabo'); await shot(page, '02d_cadastro_cidade_busca', 600);
  await page.click('.city2 >> nth=0', { force: true }); await shot(page, '02e_cadastro_profissao', 700);
  await ctx.close();
}
if (which === 'all' || which === 'jogo') {
  const { ctx, page } = await newPage('?jogar=1');
  await page.fill('#su-h', 'joao.recife'); await page.click('#su-ok', { force: true }); await page.waitForTimeout(300);
  await page.click('.age >> nth=3', { force: true }); await page.waitForTimeout(300); await page.click('.side2.norte', { force: true }); await page.waitForTimeout(300);
  await page.click('.uf2[data-uf=PE]', { force: true }); await page.waitForTimeout(300); await page.fill('#su-q', 'recife'); await page.waitForTimeout(300);
  await page.click('.city2 >> nth=0', { force: true }); await page.waitForTimeout(300); await page.click('.prof2[data-p=empacotador]', { force: true }); await page.waitForTimeout(4000);
  await shot(page, '06b_sequencia_diaria');
  await page.click('#claimlogin', { force: true }); await page.waitForTimeout(1200); await ev(page, () => __game.closeModal()); await page.waitForTimeout(1500);
  await ev(page, () => { __game.toast(''); document.querySelector('#toast').classList.remove('show'); });
  await shot(page, '03_hud_no_mundo', 1200);
  await ev(page, () => { __game.give(2600, 0); __game.setLotStage(4); __game.closeModal(true); __game.dropQueue(); }); await page.waitForTimeout(600);
  await ev(page, () => __game.showShop('veiculos')); await shot(page, '04_loja', 700);
  await ev(page, () => __game.showShop('premium')); await shot(page, '04b_loja_premium', 500);
  await ev(page, () => __game.showCareer()); await shot(page, '05_carreira', 900);
  await ev(page, () => __game.showMissions('mis')); await shot(page, '06_missoes', 600);
  await ev(page, () => __game.showMissions('conq')); await shot(page, '06c_conquistas', 500);
  await ev(page, () => __game.showRanking()); await shot(page, '06d_ranking', 600);
  await ev(page, () => { __game.closeModal(true); __game.S.energia = 100; __game.startWork(); }); await shot(page, '07_minigame_combina3', 1800);
  await ev(page, () => __mg.win()); await shot(page, '08_resultado_3_estrelas', 2600);
  await ev(page, () => { __game.closeModal(true); __game.dropQueue(); }); await page.waitForTimeout(300);
  await ev(page, () => { __game.S.energia = 100; __game.startWork('professor'); }); await shot(page, '07b_minigame_quiz', 1500);
  await ev(page, () => { __game.closeModal(true); __game.dropQueue(); __game.showLevelUp(3); }); await shot(page, '09_level_up', 1500);
  await ev(page, () => { __game.closeModal(true); __game.dropQueue(); __game.showCarteira(); }); await shot(page, '09b_carteira', 500);
  await ev(page, () => { __game.closeModal(true); __game.showSettings(); }); await shot(page, '09c_ajustes', 500);
  await ctx.close();
}
if (which === 'all' || which === 'prefeito') {
  const { ctx, page } = await newPage('?prefeito=1');
  await page.click('#claimlogin', { force: true }); await page.waitForTimeout(800); await ev(page, () => { __game.closeModal(); __game.dropQueue(); }); await page.waitForTimeout(1500);
  await shot(page, '10b_prefeito_hud', 800);
  await ev(page, () => __game.showGabinete()); await shot(page, '10_gabinete_prefeito', 800);
  await ev(page, () => document.querySelector('.mbox').scrollTop = 420); await shot(page, '10c_gabinete_obras_decretos', 400);
  await ctx.close();
}
console.log(errors.length ? 'ERROS:\n' + errors.join('\n') : 'sem erros no console');
await browser.close();
