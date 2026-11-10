// Teste ponta a ponta do Pix VIP com o Mercado Pago SIMULADO (nada é cobrado).
// Sobe tools/devserver.cjs com MOCK_MP=1 e roda o fluxo completo no navegador. Uso: node test_pix.mjs
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const PORT = 3123, base = `http://localhost:${PORT}/`;
const srv = spawn('node', ['tools/devserver.cjs', String(PORT)], { env: { ...process.env, MOCK_MP: '1', MERCADOPAGO_ACCESS_TOKEN: '', MERCADOPAGO_ACCESS_TOKEN_LIVE: '' }, stdio: 'ignore' });
await new Promise(r => setTimeout(r, 800));
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: base });
const page = await ctx.newPage(); const errors = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
let pass = 0; const ok = (c, msg) => { if (!c) { console.log('❌ FALHOU:', msg); process.exitCode = 1; } else { pass++; console.log('✅', msg); } };
const ev = (f, a) => page.evaluate(f, a); const W = (ms) => page.waitForTimeout(ms);
const mock = (q) => fetch(base + '__mock/set?' + q).then(r => r.json());
const shots = process.env.SHOTS; // pasta pra salvar prints (opcional)
const shot = async (n) => { if (shots) { await W(400); await page.screenshot({ path: `${shots}/${n}.png` }); } };
async function signupTo(handle) {
  await page.click('.cta[data-go=start]', { force: true }); await W(300);
  await page.fill('#su-h', handle); await page.click('#su-ok', { force: true }); await W(300);
  await page.click('.age >> nth=2', { force: true }); await W(400);
  await page.click('.side2.sul', { force: true }); await W(400);
  await page.click('.uf2[data-uf=SP]', { force: true }); await W(400);
  await page.click('.city2 >> nth=0', { force: true }); await W(400);
  await page.click('.prof2 >> nth=0', { force: true }); await W(600);
}
await page.goto(base); await ev(() => localStorage.clear());
// ?vip=1 em localhost continua sendo modo teste; aqui testamos o caminho real (sem ?vip)
await page.goto(base); await W(2500);
await signupTo('@Pix.Teste');
ok(await ev(() => document.querySelector('.plan.vip .pl-foot, .pl-foot')?.textContent.includes('Mercado Pago')), 'planos: rodapé "Pagamento seguro via Mercado Pago · Pix"');
await page.click('#pl-vip', { force: true }); await W(500);
ok(await ev(() => !!document.querySelector('#px-email') && document.querySelector('.px-for b').textContent === '@pix.teste'), 'pré-checkout pede e-mail e mostra o @ do VIP');
await page.fill('#px-email', 'teste+brasilcity@example.com'); await page.fill('#px-nome', 'Teste'); await shot('01_pre_checkout');
await page.click('#px-go', { force: true }); await W(1500);
ok(await ev(() => document.querySelector('.qrimg')?.naturalWidth > 50), 'QR Code do Pix aparece (imagem)');
ok(await ev(() => document.querySelector('#px-code').textContent.startsWith('000201') && /^\d+:\d\d$/.test(document.querySelector('#px-left').textContent)), 'código copia e cola + contagem regressiva');
ok(await ev(() => document.querySelector('#px-wait').textContent.includes('Aguardando pagamento')), '"Aguardando pagamento…"');
const pend = await ev(() => JSON.parse(localStorage.getItem('brasilcity_vip_pending_v1')));
ok(pend && pend.id && pend.order && pend.amount === 19.9 && pend.handle === 'pix.teste', 'Pix pendente salvo (R$ 19,90, @ correto)');
await shot('02_qr_pix'); await page.click('#px-copy', { force: true }); await W(300);
ok(await ev(() => document.querySelector('#px-copy').textContent.includes('copiado')), 'botão "Copiar código Pix" copia');
await shot('03_codigo_copiado');
await page.click('#px-paid', { force: true }); await W(1200);
ok(await ev(() => document.querySelector('#toast').textContent.includes('Ainda não recebemos')), '"Já paguei" sem pagar: avisa que ainda não caiu');
// recarregar no meio: retoma o mesmo Pix
await page.reload(); await W(2500); await signupTo('@Pix.Teste'); await page.click('#pl-vip', { force: true }); await W(1200);
ok(await ev((id) => !!document.querySelector('.qrimg') && JSON.parse(localStorage.getItem('brasilcity_vip_pending_v1')).id === id, pend.id), 'depois de recarregar, retoma o mesmo Pix');
// valor errado aprovado não libera
await mock(`id=${pend.id}&status=approved&amount=0.01`); await W(5000);
ok(await ev(() => !document.querySelector('.car3') && document.querySelector('.pix-t')?.textContent.includes('não confere')), 'pagamento com valor errado NÃO libera VIP');
await page.click('#px-new', { force: true }); await W(300); await page.fill('#px-email', 'teste+brasilcity@example.com'); await page.click('#px-go', { force: true }); await W(1500);
const pend2 = await ev(() => JSON.parse(localStorage.getItem('brasilcity_vip_pending_v1')));
ok(pend2 && pend2.id !== pend.id, 'gera um Pix novo');
await mock(`id=${pend2.id}&status=approved`); await W(5500);
ok(await ev(() => !!document.querySelector('.car3')), 'Pix aprovado: VIP liberado sozinho (polling) e abre a escolha do carro');
ok(await ev(() => !localStorage.getItem('brasilcity_vip_pending_v1')), 'Pix pendente limpo após aprovar');
await page.click('.car3[data-car=vip_ferrari]', { force: true }); await W(800);
await page.click('.skin2 >> nth=1', { force: true }); await W(3500);
ok(await ev(() => __game.S.plan === 'vip' && __game.S.vip.source === 'pix' && __game.S.vip.txid === String(__game.S.vip.txid) && !!__game.S.vip.token && __game.S.veiculo === 'vip_ferrari'), 'jogador entra VIP (fonte pix, token salvo, Ferrari)');
ok(await ev(() => !!document.querySelector('#h-me .vipseal')), 'selo VIP no HUD');
// recarregar: token conferido no servidor e mantido
await page.reload(); await W(2000); await page.click('#lp-continue', { force: true }); await W(3500);
ok(await ev(() => __game.S.plan === 'vip' && __game.S.vip.verifiedAt > Date.now() - 20000), 'ao reabrir, token VIP conferido no servidor e mantido');
// editar o save não basta
await ev(() => { const s = JSON.parse(localStorage.getItem('brasilcity_save_v3')); s.vip.token = s.vip.token.slice(0, -4) + 'AAAA'; localStorage.setItem('brasilcity_save_v3', JSON.stringify(s)); });
await page.reload(); await W(2000); await page.click('#lp-continue', { force: true }); await W(3500);
ok(await ev(() => __game.S.plan === 'free' && !__game.S.vip && !__game.S.inventario.includes('vip_ferrari') && __game.S.veiculo !== 'vip_ferrari'), 'token adulterado: VIP removido (volta pro grátis)');
await ev(() => { const s = JSON.parse(localStorage.getItem('brasilcity_save_v3')); s.plan = 'vip'; s.vip = { source: 'pix' }; localStorage.setItem('brasilcity_save_v3', JSON.stringify(s)); });
await page.reload(); await W(2000); await page.click('#lp-continue', { force: true }); await W(3500);
ok(await ev(() => __game.S.plan === 'free'), 'plan:"vip" escrito à mão no save sem token: removido');
ok(await ev(() => window.BrasilCity.grantVip({}) === false), 'window.BrasilCity.grantVip bloqueado fora do modo teste');
// pelo jogo (HUD > Seja VIP) também funciona, e Pix expirado mostra "Gerar novo Pix"
await ev(() => __game.closeModal(true)); await W(300); await page.click('#b-vip', { force: true }); await W(400); await page.click('#pl-vip', { force: true }); await W(400);
await page.fill('#px-email', 'teste+brasilcity@example.com'); await page.click('#px-go', { force: true }); await W(1500);
const pend3 = await ev(() => JSON.parse(localStorage.getItem('brasilcity_vip_pending_v1')));
await mock(`id=${pend3.id}&status=cancelled&detail=expired`); await page.click('#px-paid', { force: true }); await W(1500);
ok(await ev(() => document.querySelector('.pix-t')?.textContent.includes('expirou') && !!document.querySelector('#px-new')), 'Pix expirado: mensagem + "Gerar novo Pix"');
await page.click('#px-new', { force: true }); await W(300); await page.click('#px-go', { force: true }); await W(1500);
const pend4 = await ev(() => JSON.parse(localStorage.getItem('brasilcity_vip_pending_v1')));
await mock(`id=${pend4.id}&status=approved`); await page.click('#px-paid', { force: true }); await W(2000);
ok(await ev((id) => __game.S.plan === 'vip' && __game.S.vip.txid === id && !!__game.S.vip.token, pend4.id), 'VIP comprado dentro do jogo também libera');
ok(await ev(() => !!document.querySelector('.car3')), 'abre a escolha do carro depois do pagamento no jogo');
// pedido forjado é recusado pelo servidor
const forged = await fetch(base + 'api/vip/status', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: pend4.id, order: pend4.order.split('.')[0] + '.AAAA' }) });
ok(forged.status === 403, 'status com pedido forjado: 403');
const real = errors.filter(e => !e.includes('GPU stall') && !e.includes('GL_CLOSE_PATH'));
ok(real.length === 0, 'sem erros no console' + (real.length ? ': ' + real.join(' | ') : ''));
console.log(`\npix: ${pass} verificações OK${process.exitCode ? ' (com falhas)' : ''}`);
await browser.close(); srv.kill();
