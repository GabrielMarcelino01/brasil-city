import { chromium } from 'playwright';
const b = await chromium.launch({args:["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"]});
const pg = await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; pg.on('pageerror',e=>errs.push(String(e)));
const r = await pg.goto('https://brasil-city.vercel.app/',{waitUntil:'networkidle',timeout:60000});
await pg.waitForTimeout(3000);
await pg.screenshot({path:'screenshots/live_vercel.png'});
console.log(r.status(), await pg.title(), 'errors:', errs.slice(0,5));
await b.close();
