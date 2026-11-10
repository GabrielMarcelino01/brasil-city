// POST /api/vip/verify-token { token, handle? } -> confere a assinatura do token VIP
'use strict';
const L = require('../_lib/vip.js');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'method_not_allowed' }); }
  try {
    const b = await L.readBody(req);
    const p = L.verify(b.token, 'vip');
    if (!p) return L.send(res, 200, { valid: false });
    if (b.handle && L.cleanHandle(b.handle) !== p.h) return L.send(res, 200, { valid: false, reason: 'handle' });
    return L.send(res, 200, { valid: true, handle: p.h, pid: p.pid, iat: p.iat });
  } catch (e) {
    console.error('verify_error', e && e.message);
    return L.send(res, 500, { error: 'erro_interno' });
  }
};
