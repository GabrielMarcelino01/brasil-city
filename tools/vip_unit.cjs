// Testes unitários dos tokens assinados do VIP: node tools/vip_unit.cjs
process.env.VIP_SIGNING_SECRET = require('node:crypto').randomBytes(32).toString('hex');
const L = require('../api/_lib/vip.js');
let pass = 0, fail = 0; const ok = (c, m) => { c ? pass++ : fail++; console.log(c ? '✅' : '❌', m); };
const tok = L.sign({ t: 'vip', h: 'teste.vip', pid: '123', iat: Date.now() });
ok(L.verify(tok, 'vip')?.h === 'teste.vip', 'token VIP válido é aceito');
ok(L.verify(tok, 'order') === null, 'token VIP não serve como pedido');
const [b, m] = tok.split('.');
const forged = Buffer.from(JSON.stringify({ t: 'vip', h: 'hacker', pid: '1', iat: 1 })).toString('base64url') + '.' + m;
ok(L.verify(forged, 'vip') === null, 'payload trocado com assinatura antiga é recusado');
ok(L.verify(b + '.' + m.slice(0, -2) + 'AA', 'vip') === null, 'assinatura alterada é recusada');
ok(L.verify(L.sign({ t: 'vip', h: 'x' }, 'outra-chave-secreta-com-mais-de-32-caracteres!!'), 'vip') === null, 'token assinado com outra chave é recusado');
ok(L.verify(L.sign({ t: 'order', pid: '1', exp: Date.now() - 1 }), 'order') === null, 'pedido expirado é recusado');
ok(L.verify('lixo', 'vip') === null && L.verify(null, 'vip') === null && L.verify('a.b.c', 'vip') === null, 'lixo é recusado');
ok(L.cleanHandle('@Teste.VIP!') === 'teste.vip', 'limpa @');
ok(L.validEmail('teste+brasilcity@example.com') && !L.validEmail('x@') && !L.validEmail('a b@c.com'), 'valida e-mail');
ok(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}-03:00$/.test(L.mpDate(Date.now())), 'data no formato do Mercado Pago');
console.log(`${pass} OK, ${fail} falhas`); process.exitCode = fail ? 1 : 0;
