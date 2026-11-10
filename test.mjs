// Testes automatizados v3: node test.mjs norte | sul | prefeito
import { chromium } from 'playwright';
const mode = process.argv[2] || 'norte'; const side = mode === 'vip' ? 'sul' : mode;
const url = 'file:///workspace/brasil_game/dist/index.html';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const page = await ctx.newPage(); const errors = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
let pass = 0; const ok = (c, msg) => { if (!c) { console.log('❌ FALHOU:', msg); process.exitCode = 1; } else { pass++; console.log('✅', msg); } };
const ev = (f, a) => page.evaluate(f, a);
const W = (ms) => page.waitForTimeout(ms);

if (mode === 'vip') {
  // ?vip=1 libera o VIP sem pagamento: selo, escolha de carro, skins e terreno maior
  await page.goto(url); await ev(() => localStorage.clear()); await page.goto(url + '?vip=1'); await W(1500);
  await page.click('.cta[data-go=start]', { force: true }); await W(300);
  await page.fill('#su-h', '@Teste.Vip'); await page.click('#su-ok', { force: true }); await W(300);
  await page.click('.age >> nth=2', { force: true }); await W(400); await page.click('.side2.sul', { force: true }); await W(400);
  await page.click('.uf2[data-uf=SP]', { force: true }); await W(400); await page.fill('#su-q', 'campinas'); await W(300);
  await page.click('.city2 >> nth=0', { force: true }); await W(400); await page.click('.prof2[data-p=pedreiro]', { force: true }); await W(600);
  ok(await ev(() => !!document.querySelector('.plan.free') && !!document.querySelector('.plan.vip') && !!document.querySelector('.pl-test')), 'tela de planos em modo teste');
  await page.click('#pl-vip', { force: true }); await W(1200);
  ok(await ev(() => document.querySelectorAll('.car3').length === 3 && ['Porsche', 'Lamborghini', 'Ferrari'].every(n => document.querySelector('#cars3').textContent.includes(n))), 'escolha de carro com 3 esportivos (Porsche, Lamborghini, Ferrari)');
  ok(await ev(() => [...document.querySelectorAll('.c3-img img')].every(i => i.src.startsWith('data:image/png') && i.src.length > 3000)), 'miniaturas 3D dos carros renderizadas');
  await page.click('.car3[data-car=vip_lambo]', { force: true }); await W(1200);
  ok(await ev(() => document.querySelectorAll('.skin2').length === 2 && !!document.querySelector('.skin2[data-skin=lend_heroi]') && !!document.querySelector('.skin2[data-skin=lend_piloto]')), 'escolha entre 2 skins lendárias (super-herói e piloto)');
  await page.click('.skin2[data-skin=lend_heroi]', { force: true }); await W(4000);
  ok(await ev(() => __game.S.plan === 'vip' && __game.S.vip.source === 'teste'), 'jogador entra como VIP');
  ok(await ev(() => __game.S.veiculo === 'vip_lambo' && __game.world.vehicle?.userData.vip === true), 'Lamborghini estacionada no mundo 3D');
  ok(await ev(() => __game.S.skin === 'lend_heroi' && ['lend_heroi', 'lend_piloto', 'vip_porsche', 'vip_lambo', 'vip_ferrari'].every(i => __game.S.inventario.includes(i))), 'skin de super-herói aplicada e itens VIP no inventário');
  ok(await ev(() => !!__game.world.player.userData.cape), 'avatar com capa (skin Guardião Brasil)');
  ok(await ev(() => !!document.querySelector('#h-me .vipseal') && !document.querySelector('#b-vip')), 'selo VIP ao lado do @ no HUD');
  await page.click('#claimlogin', { force: true }); await W(800); await ev(() => { __game.closeModal(true); __game.dropQueue(); }); await W(800);
  ok(await ev(() => __game.ctx().some(a => a.id === 'claim' && a.s.includes('200 m²'))), 'terreno VIP mostra 200 m²');
  await page.click('.ctx.claim', { force: true }); await W(800);
  ok(await ev(() => !!__game.world.lotGroups[__game.S.lote.idx].userData.vipYard), 'terreno VIP maior (cerca dourada) no mundo 3D');
  await ev(() => __game.showCarteira()); await W(300);
  ok(await ev(() => document.querySelector('.ct-info a.iglink')?.href === 'https://instagram.com/teste.vip' && !!document.querySelector('.ct-info .vipseal')), '@ clicável pro Instagram e selo no perfil');
  await ev(() => { __game.closeModal(true); __game.showRanking('ricos'); }); await W(300);
  ok(await ev(() => !!document.querySelector('.rank li.me a.iglink') && !!document.querySelector('.rank li.me .vipseal')), '@ clicável e selo no ranking');
  await ev(() => __game.closeModal(true)); await W(200);
  await ev(() => __game.showShop('veiculos')); await W(300);
  ok(await ev(() => document.querySelectorAll('.item.vipi').length === 3 && !document.querySelector('[data-vip]')), 'loja: 3 esportivos VIP liberados');
  await ev(() => __game.closeModal(true));
  // chat VIP: sem limite (só um intervalo mínimo de 2s)
  await ev(() => { localStorage.removeItem('brasilcity_chat_last_teste.vip'); __chat.open(); }); await W(300);
  const r1 = await ev(() => __chat.send('Primeira mensagem VIP').ok); await W(2100);
  const r2 = await ev(() => __chat.send('Segunda mensagem VIP').ok); await W(2100);
  const r3 = await ev(() => __chat.send('Terceira mensagem VIP').ok);
  ok(r1 && r2 && r3, 'VIP manda várias mensagens seguidas');
  ok(await ev(() => __chat.send('rapidinho').reason === 'limite'), 'VIP tem só o intervalo anti-spam de 2s');
  ok(await ev(() => [...document.querySelectorAll('.cm.me')].length >= 3 && !!document.querySelector('.cm.me .vipseal') && document.querySelector('#chat-lim').textContent.includes('ilimitado')), 'mensagens do VIP com selo dourado');
} else if (side === 'prefeito') {
  await page.goto(url + '?prefeito=1'); await W(3500);
  ok(await ev(() => __game.S.mayor && __game.S.handle === 'gabriel.marques'), 'entra como prefeito via ?prefeito=1');
  ok(await ev(() => __game.S.prof === 'prefeito'), 'profissão Prefeito');
  ok(await ev(() => !!document.querySelector('.modal')), 'modal de sequência diária aparece');
  await page.click('#claimlogin', { force: true }); await W(900);
  ok(await ev(() => __game.S.login.claimed === new Date().toLocaleDateString('sv')), 'prêmio diário resgatado');
  await ev(() => __game.closeModal()); await W(600);
  ok(await ev(() => !!document.querySelector('#b-gab')), 'botão Gabinete no HUD');
  await page.click('#b-gab', { force: true }); await W(500);
  ok(await ev(() => !!document.querySelector('.gabh')), 'Gabinete do Prefeito abre');
  const before = await ev(() => __game.world.trash.length);
  await page.click('#d-limpa', { force: true }); await W(500);
  ok(await ev((b) => __game.world.trash.length < b, before), 'decreto de limpeza remove lixo');
  await page.click('[data-obra="iluminacao"]', { force: true }); await W(400);
  ok(await ev(() => __game.S.city.obra.id === 'iluminacao'), 'prefeito lança obra (Iluminação)');
  await page.click('#invest', { force: true }); await W(300);
  ok(await ev(() => __game.S.city.obra.prog >= 1000 || __game.S.city.obras.includes('iluminacao')), 'investe caixa na obra');
  await ev(() => __game.closeModal()); await W(300);
  ok(await ev(() => __game.S.mayor && document.querySelector('#b-shop') && true), 'HUD ok');
  await ev(() => __game.showShop('veiculos')); await W(300);
  ok(await ev(() => !document.querySelector('[data-lock]')), 'prefeito já tem garagem (mora no Palácio)');
  await ev(() => __game.closeModal()); await W(300);
  await ev(() => { __game.S.energia = 100; __game.startWork(); }); await W(1200);
  ok(await ev(() => !!document.querySelector('.quiz')), 'minigame do prefeito (decisões) abre');
  await ev(() => __mg.win()); await W(1500); await page.click('#mok', { force: true }); await W(1500);
  ok(await ev(() => __game.S.stats.totalWorks === 1), 'trabalho do prefeito conta');
  // cadastro com o @ do prefeito também vira prefeito
  await page.goto(url); await ev(() => localStorage.clear()); await page.goto(url); await W(1500);
  await page.click('.cta[data-go=start]', { force: true }); await W(300);
  await page.fill('#su-h', '@Gabriel.Marques'); await page.click('#su-ok', { force: true }); await W(300);
  await page.click('.age >> nth=3', { force: true }); await W(400); await page.click('.side2.sul', { force: true }); await W(400);
  await page.click('.uf2[data-uf=SP]', { force: true }); await W(400); await page.fill('#su-q', 'sao paulo'); await W(300);
  await page.click('.city2 >> nth=0', { force: true }); await W(3500);
  ok(await ev(() => __game.S?.mayor === true && __game.S.cidade === 'São Paulo'), 'cadastro com @gabriel.marques vira prefeito (pula profissão)');
  ok(await ev(() => __game.S.plan === 'vip' && !__game.S.veiculo && !document.querySelector('.plan')), 'prefeito já é VIP (sem tela de planos, sem carro equipado à força)');
} else {
  await page.goto(url); await ev(() => localStorage.clear()); await page.goto(url); await W(1500);
  ok(await ev(() => !document.querySelector('#landing').hidden), 'landing visível');
  ok(await ev(() => document.querySelectorAll('#landing video').length >= 5), 'landing tem vídeos de demonstração');
  ok(await ev(() => document.querySelectorAll('.faq details').length >= 6), 'FAQ completo');
  await page.click('#lp-buy', { force: true }); await W(300);
  ok(await ev(() => document.querySelector('#toast').textContent.includes('em breve')), 'checkout é placeholder (em breve)');
  await page.click('.cta[data-go=start]', { force: true }); await W(300);
  ok(await ev(() => !document.querySelector('#signup').hidden), 'cadastro abre');
  await page.fill('#su-h', '@Teste.' + side); await page.click('#su-ok', { force: true }); await W(300);
  await page.click('.age >> nth=2', { force: true }); await W(400);
  await page.click(`.side2.${side}`, { force: true }); await W(400);
  const ufs = await ev(() => [...document.querySelectorAll('.uf2')].map(b => b.dataset.uf));
  ok(side === 'norte' ? ufs.length === 16 && !ufs.includes('SP') : ufs.length === 11 && !ufs.includes('BA'), `só estados do ${side} (${ufs.length})`);
  const uf = side === 'norte' ? 'PB' : 'MG'; await page.click(`.uf2[data-uf=${uf}]`, { force: true }); await W(400);
  const count = await ev(() => +document.querySelector('.hint b').textContent);
  ok(count === (side === 'norte' ? 223 : 853), `todos os municípios do IBGE em ${uf}: ${count}`);
  await page.fill('#su-q', side === 'norte' ? 'campina' : 'uberl'); await W(300);
  const first = await ev(() => document.querySelector('.city2')?.dataset.c);
  ok(first === (side === 'norte' ? 'Campina Grande' : 'Uberlândia'), 'busca de cidade sem acento: ' + first);
  await page.click('.city2 >> nth=0', { force: true }); await W(400);
  await page.click('.prof2[data-p=empacotador]', { force: true }); await W(600);
  // planos
  ok(await ev(() => !!document.querySelector('.plan.free') && !!document.querySelector('.plan.vip')), 'tela de planos com os 2 cartões');
  ok(await ev(() => { const v = document.querySelector('.plan.vip'), f = document.querySelector('.plan.free'); const cs = getComputedStyle(v); return v.querySelector('.pl-rib').textContent.trim() === 'MAIS ESCOLHIDO' && cs.borderTopColor === 'rgb(255, 196, 37)' && v.getBoundingClientRect().left > f.getBoundingClientRect().left; }), 'VIP destacado (faixa MAIS ESCOLHIDO, borda dourada, ao lado do grátis)');
  ok(await ev(() => { const v = document.querySelector('.plan.vip'); return v.querySelector('.pl-price strong').textContent === 'R$ 19,90' && v.querySelector('.pl-price s').textContent.includes('R$ 49,90'); }), 'preço VIP R$ 19,90 com âncora R$ 49,90 riscada');
  ok(await ev(() => { const t = document.querySelector('.plan.vip').textContent.replace(/\u00a0/g, ' '); return ['Chat ilimitado', 'Selo dourado', 'Instagram', 'Porsche', 'skins lendárias', '200 m²'].every(x => t.includes(x)); }), 'benefícios do VIP listados');
  await page.click('#pl-vip', { force: true }); await W(500);
  ok(await ev(() => !!document.querySelector('.pix') && document.querySelector('.pix').textContent.includes('Pagamento via Pix em breve')), 'VIP abre checkout Pix (em breve)');
  await page.click('#px-free', { force: true }); await W(3500);
  ok(await ev((side) => __game.S && __game.S.side === side && !__game.S.mayor && __game.S.handle === 'teste.' + side, side), 'jogador criado e dentro do jogo');
  ok(await ev(() => __game.S.plan === 'free' && !document.querySelector('#h-me .vipseal') && !!document.querySelector('#b-vip')), 'entra no plano grátis (sem selo, com botão Seja VIP)');
  ok(await ev(() => __game.world.carsTraffic.length === 0 && !__game.world.vehicle), 'cidade começa sem carros');
  ok(await ev(() => __game.world.trash.length > 30), 'cidade começa com lixo');
  ok(await ev(() => document.querySelector('#claimlogin') !== null), 'sequência diária aparece no 1º acesso');
  await page.click('#claimlogin', { force: true }); await W(800); await ev(() => __game.closeModal()); await W(1200);
  ok(await ev(() => __game.S.missions.list.length === 3), '3 missões diárias');
  // chat grátis: 1 mensagem por minuto + filtro
  await ev(() => __chat.open()); await W(300);
  ok(await ev(() => document.querySelectorAll('.cm').length >= 3), 'chat abre com mensagens dos moradores');
  await page.fill('#chat-in', 'porra, bora construir'); await page.click('#chat-send', { force: true }); await W(300);
  ok(await ev(() => [...document.querySelectorAll('.cm.me .cm-t')].some(e => e.textContent === '*****, bora construir')), "palavrão vira asteriscos ('porra' -> '*****')");
  ok(await ev(() => /aguarde (1:00|0:5\d)/.test(document.querySelector('#chat-lim').textContent) && document.querySelector('#chat-lim').textContent.includes('VIP manda sem limite') && document.querySelector('#chat-send').disabled), 'grátis: contagem "aguarde 0:59" + convite VIP');
  ok(await ev(() => __chat.send('segunda mensagem').reason === 'limite'), 'grátis: 2ª mensagem bloqueada antes de 1 minuto');
  ok(await ev(() => { __chat.limiter.mark(Date.now() - 61000); return __chat.send('p0rr4 de novo').ok && [...document.querySelectorAll('.cm.me .cm-t')].some(e => e.textContent === '***** de novo'); }), "depois de 1 min manda de novo; 'p0rr4' mascarado");
  ok(await ev(() => { __chat.limiter.mark(Date.now() - 61000); const r = __chat.send('entra no www.site.com.br ou liga 11 98888-7777'); return r.ok && r.msg.text.includes('[link removido]') && r.msg.text.includes('[número removido]'); }), 'links e telefones removidos');
  ok(await ev(() => { __chat.limiter.mark(Date.now() - 61000); return __chat.send('nordestino é burro').reason === 'odio'; }), 'discurso de ódio bloqueado');
  await ev(() => __chat.close());
  // terreno
  ok(await ev(() => __game.ctx().some(a => a.id === 'claim' && a.s.includes('100 m²'))), 'botão Reivindicar aparece perto do terreno (100 m²)');
  await page.click('.ctx.claim', { force: true }); await W(600);
  ok(await ev(() => __game.S.lote && __game.S.lote.stage === 0), 'terreno reivindicado');
  await ev(() => __game.give(1500, 0)); await W(300);
  for (let i = 0; i < 4; i++) { await ev(() => __game.closeModal(true)); await W(300); await page.click('.ctx.build', { force: true }); await W(700); }
  ok(await ev(() => __game.S.lote.stage === 4), 'casa construída nas 4 etapas');
  await ev(() => __game.closeModal(true));
  ok(await ev(() => !!__game.world.lotGroups[__game.S.lote.idx]), 'casa aparece no mundo 3D');
  // lixo e árvore
  await ev(() => { const t = __game.world.trash[0]; __game.teleport(t.x, t.z); }); await W(600);
  const tb = await ev(() => __game.world.trash.length);
  ok(await ev(() => __game.doCtx('trash')), 'limpar lixo'); await W(500);
  ok(await ev((b) => __game.world.trash.length === b - 1 && __game.S.stats.trash === 1, tb), 'lixo removido e contado');
  // minigame
  await ev(() => { __game.closeModal(true); __game.S.energia = 100; __game.startWork(); }); await W(1500);
  ok(await ev(() => !!document.querySelector('.m3')), 'minigame Combina 3 abre (empacotador)');
  await ev(() => __mg.win()); await W(1800);
  ok(await ev(() => document.querySelectorAll('.stars i.on').length === 3), 'resultado com 3 estrelas');
  await page.click('#mok', { force: true }); await W(1800);
  ok(await ev(() => __game.S.stats.totalWorks === 1 && __game.S.stats.perfeitos === 1), 'trabalho e perfeito contabilizados');
  // loja: carros liberados após casa
  await ev(() => { __game.closeModal(true); __game.showShop('veiculos'); }); await W(400);
  ok(await ev(() => !document.querySelector('[data-lock]') && document.querySelectorAll('[data-pix]').length === 2), 'carros liberados após casa; esportivos via Pix (em breve)');
  // level up
  await ev(() => { __game.closeModal(true); __game.give(0, 400); }); await W(800);
  ok(await ev(() => !!document.querySelector('.lvup')), 'comemoração de nível');
  await ev(() => __game.closeModal()); await W(400);
  // ranking e estágio
  await ev(() => __game.showRanking()); await W(400);
  ok(await ev(() => document.querySelectorAll('.crank li').length > 10 && !!document.querySelector('.crank li.me')), 'ranking de cidades com a sua');
  await ev(() => { __game.closeModal(true); __game.cityBoost(1); }); await W(1500);
  ok(await ev(() => __game.S.city.stageSeen === 1 && __game.world.stage === 1), 'cidade sobe pra Cidade Comum e o mundo muda');
  // persistência
  await page.reload(); await W(2000);
  ok(await ev(() => !document.querySelector('#lp-continue').hidden), 'botão Continuar após recarregar');
  await page.click('#lp-continue', { force: true }); await W(2500);
  ok(await ev(() => __game.S.lote.stage === 4 && __game.S.stats.trash === 1), 'progresso salvo (localStorage)');
}
const real = errors.filter(e => !e.includes('GPU stall') && !e.includes('GL_CLOSE_PATH'));
ok(real.length === 0, 'sem erros no console' + (real.length ? ': ' + real.join(' | ') : ''));
console.log(`\n${mode}: ${pass} verificações OK${process.exitCode ? ' (com falhas)' : ''}`);
await browser.close();
