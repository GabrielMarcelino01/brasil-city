// POST /api/vip/pix  { handle, email, nome? } -> cria um Pix de R$ 19,90 no Mercado Pago
'use strict';
const L = require('../_lib/vip.js');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'method_not_allowed' }); }
  try {
    const b = await L.readBody(req);
    const handle = L.cleanHandle(b.handle);
    const email = String(b.email || '').trim().toLowerCase();
    const nome = L.cleanName(b.nome);
    if (handle.length < 2) return L.send(res, 400, { error: 'handle_invalido', message: 'Seu @ do Instagram está inválido.' });
    if (!L.validEmail(email)) return L.send(res, 400, { error: 'email_invalido', message: 'Digite um e-mail válido.' });
    const ref = L.newId('bc');
    const expMs = Date.now() + L.PIX_TTL_MIN * 60e3;
    const payer = { email };
    if (nome) payer.first_name = nome;
    const r = await L.mp('/v1/payments', {
      method: 'POST', idem: ref,
      body: {
        transaction_amount: L.PRICE,
        description: L.DESCRIPTION,
        payment_method_id: 'pix',
        payer,
        external_reference: ref,
        notification_url: L.SITE + '/api/vip/webhook',
        date_of_expiration: L.mpDate(expMs),
        metadata: { handle, produto: 'vip' },
      },
    });
    const td = r.data && r.data.point_of_interaction && r.data.point_of_interaction.transaction_data;
    if (!r.ok || !r.data || !r.data.id || !td || !td.qr_code) {
      console.error('mp_create_failed', r.status, r.data && (r.data.message || r.data.error));
      return L.send(res, 502, { error: 'mp_falhou', message: 'Não deu pra gerar o Pix agora. Tenta de novo em instantes.' });
    }
    const id = String(r.data.id);
    const order = L.sign({ t: 'order', pid: id, ref, h: handle, iat: Date.now(), exp: expMs + 24 * 3600e3 });
    console.log('pix_created', id);
    return L.send(res, 200, {
      id, status: r.data.status, amount: r.data.transaction_amount,
      qr_code: td.qr_code, qr_code_base64: td.qr_code_base64 || null,
      expires_at: expMs, order,
    });
  } catch (e) {
    console.error('pix_error', e && e.message);
    return L.send(res, 500, { error: 'erro_interno', message: 'Erro ao gerar o Pix. Tenta de novo.' });
  }
};
