// POST /api/mayor/verify
//   { key }   -> confere a chave privada do prefeito (env MAYOR_KEY) e devolve um token de prefeito assinado
//   { token } -> confere se o token de prefeito é válido (o jogo reconfere ao abrir)
'use strict';
const crypto = require('node:crypto');
const L = require('../_lib/vip.js');
const MAYOR_HANDLE = 'ogabmarques_';
const h = (s) => crypto.createHash('sha256').update(String(s)).digest();

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'method_not_allowed' }); }
  try {
    const b = await L.readBody(req);
    if (b.token !== undefined) {
      const p = L.verify(b.token, 'mayor');
      return L.send(res, 200, p ? { valid: true, handle: p.h } : { valid: false });
    }
    const real = process.env.MAYOR_KEY;
    if (!real || real.length < 32) return L.send(res, 503, { error: 'indisponivel' });
    const key = typeof b.key === 'string' ? b.key : '';
    if (!key || key.length > 200 || !crypto.timingSafeEqual(h(key), h(real))) {
      await new Promise((r) => setTimeout(r, 600)); // freia tentativas
      return L.send(res, 403, { error: 'chave_invalida', message: 'Link de prefeito inválido.' });
    }
    console.log('mayor_token_issued');
    return L.send(res, 200, { ok: true, handle: MAYOR_HANDLE, token: L.sign({ t: 'mayor', h: MAYOR_HANDLE, iat: Date.now() }) });
  } catch (e) {
    console.error('mayor_error', e && e.message);
    return L.send(res, 500, { error: 'erro_interno' });
  }
};
