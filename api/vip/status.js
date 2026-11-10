// GET/POST /api/vip/status  { id, order } -> status do Pix; se aprovado, devolve o token VIP assinado
'use strict';
const L = require('../_lib/vip.js');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'method_not_allowed' }); }
  try {
    let id, order;
    if (req.method === 'GET') {
      const u = new URL(req.url, 'http://x'); id = u.searchParams.get('id'); order = u.searchParams.get('order');
    } else { const b = await L.readBody(req); id = b.id; order = b.order; }
    id = String(id || '');
    const o = L.verify(order, 'order');
    if (!o || !/^\d{1,20}$/.test(id) || o.pid !== id) return L.send(res, 403, { error: 'pedido_invalido', message: 'Pedido inválido.' });
    const r = await L.mp('/v1/payments/' + id);
    if (!r.ok || !r.data) {
      console.error('mp_get_failed', r.status);
      return L.send(res, 502, { error: 'mp_falhou', message: 'Não deu pra consultar o pagamento agora.' });
    }
    const p = r.data;
    const approved = p.status === 'approved' && Number(p.transaction_amount) >= L.PRICE && p.currency_id === 'BRL' && p.external_reference === o.ref;
    if (approved) {
      const vip = L.sign({ t: 'vip', h: o.h, pid: id, iat: Date.now() });
      return L.send(res, 200, { status: 'approved', handle: o.h, vip });
    }
    let status = p.status || 'unknown';
    if (status === 'approved') status = 'invalid'; // aprovado mas valor/referência não batem
    if (status === 'cancelled' && p.status_detail === 'expired') status = 'expired';
    return L.send(res, 200, { status, detail: p.status_detail || null });
  } catch (e) {
    console.error('status_error', e && e.message);
    return L.send(res, 500, { error: 'erro_interno', message: 'Erro ao consultar o pagamento.' });
  }
};
