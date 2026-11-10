// uso: node dev.mjs '<query>' '<passos JSON: [["js","code"],["wait",ms],["shot","nome"],["click","sel"],["fill","sel","txt"],["key","w",ms]]>'
import { chromium } from 'playwright';
const url = 'file:///workspace/brasil_game/dist/index.html' + (process.argv[2] || '');
const steps = JSON.parse(process.argv[3] || '[]'); const out = process.env.OUT || 'screenshots/v3/tmp/';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: +(process.env.DPR || 1), isMobile: true, hasTouch: true });
const page = await ctx.newPage(); const errors = [];
page.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !m.text().includes('ERR_FILE_NOT_FOUND')) errors.push(m.type() + ': ' + m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
await page.goto(url); await page.waitForTimeout(3000);
for (const [k, a, b] of steps) {
  if (k === 'js') { const r = await page.evaluate(a); if (r !== undefined) console.log('js>', typeof r === 'string' ? r : JSON.stringify(r)); }
  if (k === 'wait') await page.waitForTimeout(a);
  if (k === 'shot') { await page.waitForTimeout(500); await page.screenshot({ path: out + a + '.png', timeout: 90000, fullPage: !!b }); console.log('shot', a); }
  if (k === 'click') await page.click(a, { force: true });
  if (k === 'fill') await page.fill(a, b);
  if (k === 'key') { await page.keyboard.down(a); await page.waitForTimeout(b); await page.keyboard.up(a); }
}
console.log(errors.join('\n') || 'no errors'); await browser.close();
