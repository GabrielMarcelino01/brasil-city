// Grava os vídeos curtos da landing direto do jogo (playwright + ffmpeg).
// uso: node tools/record.mjs [nome...]   (sem args = todos)
import { chromium } from 'playwright';
import { execSync } from 'child_process';
import fs from 'fs';
const ROOT = '/workspace/brasil_game', MEDIA = ROOT + '/media', TMP = '/tmp/rec';
const base = 'file://' + ROOT + '/dist/index.html';
const want = process.argv.slice(2);
const ARGS = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'];
fs.mkdirSync(MEDIA, { recursive: true });
const browser = await chromium.launch({ args: ARGS });
const CAPCSS = `#toast{display:none!important}#rec-cap{position:fixed;left:0;right:0;top:34px;z-index:99;text-align:center;font:31px/1.05 "Lilita One",sans-serif;color:#ffc425;text-transform:uppercase;letter-spacing:.01em;text-shadow:-2.5px -2.5px 0 #1b2340,2.5px -2.5px 0 #1b2340,-2.5px 2.5px 0 #1b2340,2.5px 2.5px 0 #1b2340,0 5px 0 #1b2340;transition:transform .25s;padding:0 12px}#rec-cap .ic{width:1.1em;height:1.1em;vertical-align:-.2em;filter:drop-shadow(0 3px 0 #1b2340)}#rec-cap small{display:block;font:800 15px "Nunito",sans-serif;color:#fff;letter-spacing:.01em;margin-top:6px;text-transform:none;text-shadow:-1.5px -1.5px 0 #1b2340,1.5px -1.5px 0 #1b2340,-1.5px 1.5px 0 #1b2340,1.5px 1.5px 0 #1b2340}#rec-cap.pop{animation:rcp .45s cubic-bezier(.2,1.8,.4,1)}@keyframes rcp{from{transform:scale(.3)}}`;
async function open(query, opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 640 }, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true, ...opts });
  const page = await ctx.newPage(); page.on('pageerror', e => console.log('pageerror', e.message));
  await page.goto(base + query); await page.waitForTimeout(2500);
  await page.addStyleTag({ content: CAPCSS });
  await page.evaluate(() => { __game.quiet = true; __game.dropQueue(); __game.closeModal(true); const d = document.createElement('div'); d.id = 'rec-cap'; document.body.appendChild(d); window.cap = (t, s) => { d.innerHTML = t ? t + (s ? `<small>${s}</small>` : '') : ''; d.classList.remove('pop'); d.offsetHeight; d.classList.add('pop'); }; });
  return { ctx, page };
}
async function frames(page, name, n, fps, hook) {
  const dir = `${TMP}/${name}`; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  await page.evaluate((fps) => { const w = __game.world; w.paused = true; w.fixedDt = 1 / fps; }, fps);
  for (let i = 0; i < n; i++) {
    if (hook) await page.evaluate(hook, i);
    await page.evaluate(() => __game.world.tick());
    await page.screenshot({ path: `${dir}/f${String(i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 88 });
    if (i % 40 === 0) console.log(name, i, '/', n);
  }
  return dir;
}
function encode(dir, name, fps, crf = 30) {
  const out = `${MEDIA}/${name}.mp4`;
  execSync(`ffmpeg -y -loglevel error -framerate ${fps} -i ${dir}/f%04d.jpg -vf "scale=540:960:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf ${crf} -profile:v high -movflags +faststart -an ${out}`);
  execSync(`ffmpeg -y -loglevel error -i ${out} -vf "select=eq(n\\,${Math.floor(fs.readdirSync(dir).length * 0.6)}),scale=540:960" -frames:v 1 -q:v 4 ${MEDIA}/${name}.jpg`);
  console.log('ok', out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
}
function encodeWebm(src, name, trimStart, dur, crf = 32) {
  const out = `${MEDIA}/${name}.mp4`;
  execSync(`ffmpeg -y -loglevel error -ss ${trimStart} -t ${dur} -i ${src} -vf "scale=540:960:flags=lanczos,fps=24,format=yuv420p" -c:v libx264 -preset slow -crf ${crf} -profile:v high -movflags +faststart -an ${out}`);
  execSync(`ffmpeg -y -loglevel error -ss ${(dur * 0.55).toFixed(2)} -i ${out} -frames:v 1 -q:v 4 ${MEDIA}/${name}.jpg`);
  console.log('ok', out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
}
async function capture(page, name, fn, crf = 32) {
  const dir = `${TMP}/${name}`; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  let on = true; const fr = [];
  const loop = (async () => { while (on) { const ts = Date.now(); const f = `${dir}/f${String(fr.length).padStart(4, '0')}.jpg`; await page.screenshot({ path: f, type: 'jpeg', quality: 85 }); fr.push({ f, ts }); } })();
  await fn(); on = false; await loop;
  const list = fr.map((x, i) => `file '${x.f}'\nduration ${(((fr[i + 1]?.ts ?? x.ts + 80) - x.ts) / 1000).toFixed(3)}`).join('\n') + `\nfile '${fr[fr.length - 1].f}'\n`;
  fs.writeFileSync(`${dir}/list.txt`, list);
  const out = `${MEDIA}/${name}.mp4`;
  execSync(`ffmpeg -y -loglevel error -f concat -safe 0 -i ${dir}/list.txt -vf "scale=540:960:flags=lanczos,fps=24,format=yuv420p" -c:v libx264 -preset slow -crf ${crf} -profile:v high -movflags +faststart -an ${out}`);
  execSync(`ffmpeg -y -loglevel error -i ${out} -vf "select=eq(n\\,${Math.floor(fr.length * 0.5)})" -frames:v 1 -q:v 4 ${MEDIA}/${name}.jpg`);
  console.log('ok', out, fr.length + ' frames', (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
}
const jobs = {
  async v_cidade() {
    const { ctx, page } = await open('?prefeito=1&lado=norte&uf=BA&cidade=Salvador');
    await page.evaluate(() => { __game.cine('overview', 1.6); cap('🏚️ Começa vazia', 'só mato, lixo e o Palácio'); });
    const dir = await frames(page, 'v_cidade', 200, 20, (i) => {
      const g = __game, w = g.world;
      if (i < 70) {
        if (i % 3 === 0 && w.trash.length) w.clearTrash(w.trash[(i * 7) % w.trash.length].k);
        if (i % 6 === 0) { const idx = [0, 1, 2, 3, 8, 9][(i / 6) % 6 | 0]; const st = Math.min(4, 1 + Math.floor(i / 18)); w.setLot(idx, { stage: st, type: 'casa_simples', owner: 'morador' }, true); }
        if (i === 40) cap('🧱 Os moradores constroem', 'casa por casa, rua por rua');
      }
      if (i === 70) { g.simHours(30); g.cityBoost(3); g.closeModal(true); g.cine('overview', 1.6); cap('🌆 Cidade Desenvolvida', 'trânsito, flores e praça'); }
      if (i === 135) { g.simHours(60); g.cityBoost(6); g.closeModal(true); g.cine('overview', 1.6); cap('🇺🇸 Nível Estados Unidos', 'até virar Grande Potência 👑'); }
    });
    encode(dir, 'v_cidade', 20); await ctx.close();
  },
  async v_construir() {
    const { ctx, page } = await open('?prefeito=1');
    await page.evaluate(() => { const g = __game; g.cine('lot', 1); cap('🪧 Terreno livre'); });
    const dir = await frames(page, 'v_construir', 170, 20, (i) => {
      const g = __game, w = g.world, idx = 0; const names = ['🪨 Alicerce', '🧱 Paredes', '🏠 Telhado', '✨ Acabamento'];
      const k = [25, 55, 85, 115].indexOf(i);
      if (k >= 0) { w.setLot(idx, { stage: k + 1, type: k === 3 ? 'casa_reformada' : 'casa_simples', me: true }, true); cap(names[k], k === 3 ? 'casa pronta! 🎉 garagem liberada' : `etapa ${k + 1} de 4`); }
    });
    encode(dir, 'v_construir', 20); await ctx.close();
  },
  async v_palacio() {
    const { ctx, page } = await open('?prefeito=1');
    await page.evaluate(() => { __game.cine('palace', 1.4); cap('🏛️ Palácio do Prefeito', '@gabriel.marques'); });
    const dir = await frames(page, 'v_palacio', 150, 20);
    encode(dir, 'v_palacio', 20); await ctx.close();
  },
  async v_multidao() {
    const { ctx, page } = await open('?prefeito=1&lado=norte&uf=CE&cidade=Fortaleza');
    await page.evaluate(() => {
      const g = __game; g.simHours(40); g.cityBoost(4); g.closeModal(true); const w = g.world;
      const names = ['ana.bia', 'joaozinho', 'maria_ce', 'pedro.oficial', 'lari07', 'gui_br', 'duda', 'caio.real', 'malu', 'davi13', 'helo', 'enzo_s', 'valentina', 'arthurzinho', 'livia', 'bruno.ce', 'isa', 'mateus', 'clara', 'samuel07'];
      w.spawnNPCs(70, names); const P = w.palacePos; const lines = [P.x - 17 - 4.7, P.x - 17 + 4.7, P.x + 17 - 4.7, P.x + 17 + 4.7];
      w.npcs.forEach((n, i) => { n.horiz = false; n.c = lines[i % 4] + (Math.random() - 0.5) * 1.2; n.t = P.z + 20 + (Math.random() - 0.5) * 70; n.pause = 0; n.speed *= 1.2; });
      w.cine = (cam, t) => { const z = P.z + 50 - t * 3.2; cam.position.set(P.x + 6, 7, z); cam.lookAt(P.x - 2, 2, z - 22); }; w.mode = 'cine'; document.querySelector('#hud').hidden = true; document.querySelector('#joy').hidden = true;
      cap('👥 Cada morador é um @', 'de gente de verdade');
    });
    const dir = await frames(page, 'v_multidao', 150, 20);
    encode(dir, 'v_multidao', 20); await ctx.close();
  },
  async v_minigames() {
        const { ctx, page } = await open('?prefeito=1');
    await page.evaluate(() => { __game.world.paused = true; });
    
    const run = async (p, fn, dur, title) => { await page.evaluate(([p, title]) => { __game.closeModal(); __game.S.energia = 100; __game.startWork(p); cap(title); }, [p, title]); const end = Date.now() + dur; await fn(end); };
    await capture(page, 'v_minigames', async () => {
    await run('empacotador', async (end) => { await page.waitForTimeout(500); for (let k = 0; k < 6 && Date.now() < end; k++) { const tiles = await page.$$('.m3t'); const i = Math.floor(Math.random() * 42); const a = tiles[i], b = tiles[i + 1]; await a.click({ force: true }); await b.click({ force: true }); await page.waitForTimeout(450); } }, 2600, '🛒 Combina 3');
    await run('cozinheiro', async (end) => { await page.waitForTimeout(500); while (Date.now() < end) { await page.evaluate(() => { const now = document.querySelector('.ticket .steps span.now')?.textContent; const b = [...document.querySelectorAll('.ing')].find(x => x.textContent === now); b?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); }); await page.waitForTimeout(380); } }, 2600, '🍳 Cozinha');
    await run('jogador', async (end) => { await page.waitForTimeout(700); while (Date.now() < end) { await page.click('#mg-area canvas', { force: true }); await page.waitForTimeout(1100); } }, 2700, '⚽ Pênalti');
    await run('bombeiro', async (end) => { await page.waitForTimeout(600); const bb = await (await page.$('#mg-area canvas')).boundingBox(); await page.mouse.move(bb.x + bb.width * 0.3, bb.y + bb.height * 0.2); await page.mouse.down(); while (Date.now() < end) { for (const [fx, fy] of [[0.25, 0.15], [0.5, 0.15], [0.75, 0.15], [0.25, 0.32], [0.5, 0.32], [0.75, 0.32], [0.25, 0.5], [0.5, 0.5], [0.75, 0.5], [0.25, 0.66], [0.5, 0.66], [0.75, 0.66]]) { await page.mouse.move(bb.x + bb.width * fx, bb.y + bb.height * fy, { steps: 3 }); await page.waitForTimeout(90); } } await page.mouse.up(); }, 2500, '🚒 Incêndio');
    await run('advogado', async (end) => { await page.waitForTimeout(1000); await page.click('.dep >> nth=1', { force: true }); await page.waitForTimeout(Math.max(0, end - Date.now())); }, 2500, '⚖️ Tribunal');
    await run('entregador', async (end) => { await page.waitForTimeout(300); const seq = [2, 2, 3, 3, 2, 3]; let k = 0; while (Date.now() < end) { await page.evaluate((d) => document.querySelector(`.dpad button[data-d="${d}"]`)?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })), seq[k++ % seq.length]); await page.waitForTimeout(450); } }, 2300, '🛵 Entrega');
    await run('jardineiro', async (end) => { await page.waitForTimeout(400); while (Date.now() < end) { await page.evaluate(() => { const t = document.querySelector('.tgt.good:not(.hit),.tgt.gold:not(.hit)'); t?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); }); await page.waitForTimeout(260); } await page.evaluate(() => __mg.win()); await page.waitForTimeout(2300); }, 2000, '🌱 Reflexo');
    }, 33); await ctx.close();
  },
  async v_ranking() {
        const { ctx, page } = await open('?prefeito=1&lado=norte&uf=PE&cidade=Recife');
    await page.evaluate(() => { __game.simHours(20); __game.cityBoost(2); __game.closeModal(true); __game.cine('follow'); __game.world.paused = true; cap(''); });
    await capture(page, 'v_ranking', async () => {
    await page.evaluate(() => { __game.showRanking(); cap('🏆 Ranking das cidades'); });
    await page.waitForTimeout(1500);
    for (let k = 0; k < 14; k++) { await page.evaluate(() => document.querySelector('.mbox').scrollBy(0, 38)); await page.waitForTimeout(110); }
    await page.waitForTimeout(700); for (let k = 0; k < 14; k++) { await page.evaluate(() => document.querySelector('.mbox').scrollBy(0, -38)); await page.waitForTimeout(60); }
    await page.evaluate(() => { __game.showRanking('ns'); cap('🌴 Norte x Sul 🏙️'); }); await page.waitForTimeout(2200);
    await page.evaluate(() => { __game.showRanking('cidades'); cap('Vila ➜ Grande Potência 👑'); }); await page.waitForTimeout(2000);
    }, 32); await ctx.close();
  },
  async stills() {
    for (const [name, q, stage] of [['norte', '?prefeito=1&lado=norte&uf=BA&cidade=Salvador', 3], ['sul', '?prefeito=1&lado=sul&uf=SP&cidade=Campinas', 4]]) {
      const { ctx, page } = await open(q);
      await page.evaluate((st) => { const g = __game; g.simHours(30); g.cityBoost(st); g.cine('low'); cap(''); }, stage);
      await page.waitForTimeout(1500);
      await page.evaluate(() => { __game.dropQueue(); __game.closeModal(true); document.querySelectorAll('.modal,.toast,#toast,.confetti').forEach(e => e.style.display = 'none'); });
      await page.waitForTimeout(400);
      await frames(page, 'still_' + name, 30, 20);
      execSync(`ffmpeg -y -loglevel error -i ${TMP}/still_${name}/f0029.jpg -vf "crop=540:600:0:200,scale=360:400" -q:v 5 ${MEDIA}/${name}.jpg`); console.log('ok still', name); await ctx.close();
    }
  },
};
for (const [k, f] of Object.entries(jobs)) if (!want.length || want.includes(k)) { const t = Date.now(); await f(); console.log(k, ((Date.now() - t) / 1000).toFixed(0) + 's'); }
await browser.close();
