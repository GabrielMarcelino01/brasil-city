// POST /api/vip/webhook — aviso do Mercado Pago. Sem banco ainda: só registra o id e responde 200.
// A liberação do VIP acontece via /api/vip/status (o jogo confere direto no Mercado Pago).
'use strict';
const L = require('../_lib/vip.js');

module.exports = async function handler(req, res) {
  let id = null, type = null;
  try {
    const u = new URL(req.url, 'http://x');
    id = u.searchParams.get('data.id') || u.searchParams.get('id');
    type = u.searchParams.get('type') || u.searchParams.get('topic');
    if (req.method === 'POST') { const b = await L.readBody(req); id = id || (b && b.data && b.data.id) || null; type = type || (b && (b.type || b.action)) || null; }
  } catch { /* ignora */ }
  console.log('mp_webhook', String(type || '').slice(0, 40), String(id || '').replace(/[^\w-]/g, '').slice(0, 40));
  return L.send(res, 200, { received: true });
};
