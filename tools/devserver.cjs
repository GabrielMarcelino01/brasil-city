// Servidor local: serve dist_site/ + funções de api/ (igual à Vercel). Uso: node tools/devserver.cjs [porta]
// Lê MERCADOPAGO_ACCESS_TOKEN do ambiente (use o token de TESTE). Gera VIP_SIGNING_SECRET aleatório se faltar.
const http = require('node:http'), fs = require('node:fs'), path = require('node:path');
process.env.VIP_SIGNING_SECRET ||= require('node:crypto').randomBytes(32).toString('hex');
const root = path.join(__dirname, '..'), site = path.join(root, 'dist_site');
// MOCK_MP=1: simula o Mercado Pago em memória (testes automáticos sem pagar nada)
const MOCK = process.env.MOCK_MP === '1'; const mockPays = new Map(); let mockSeq = 9000000001;
if (MOCK) {
  process.env.MERCADOPAGO_ACCESS_TOKEN = 'mock';
  const qr = fs.readFileSync(path.join(__dirname, 'mock_qr.b64'), 'utf8').trim(); const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, opt = {}) => {
    const u = String(url); if (!u.startsWith('https://api.mercadopago.com/')) return realFetch(url, opt);
    const J = (st, d) => new Response(JSON.stringify(d), { status: st, headers: { 'content-type': 'application/json' } });
    if (u.endsWith('/v1/payments') && opt.method === 'POST') { const b = JSON.parse(opt.body); const id = mockSeq++;
      const p = { id, status: 'pending', status_detail: 'pending_waiting_transfer', transaction_amount: b.transaction_amount, currency_id: 'BRL', external_reference: b.external_reference, description: b.description,
        point_of_interaction: { transaction_data: { qr_code: '00020126580014br.gov.bcb.pix0136mock-brasilcity-' + id + '5204000053039865405' + b.transaction_amount.toFixed(2) + '5802BR6304ABCD', qr_code_base64: qr } } };
      mockPays.set(String(id), p); return J(201, p); }
    const m = u.match(/\/v1\/payments\/(\d+)$/); if (m) { const p = mockPays.get(m[1]); return p ? J(200, p) : J(404, { message: 'not found' }); }
    return J(404, {});
  };
}
const routes = { '/api/vip/pix': 'vip/pix', '/api/vip/status': 'vip/status', '/api/vip/webhook': 'vip/webhook', '/api/vip/verify-token': 'vip/verify-token', '/api/mayor/verify': 'mayor/verify' };
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.png': 'image/png' };
http.createServer(async (req, res) => {
  const p = new URL(req.url, 'http://x').pathname;
  if (MOCK && p === '/__mock/set') { const q = new URL(req.url, 'http://x').searchParams; const pay = mockPays.get(q.get('id')) || [...mockPays.values()].pop(); if (pay) { if (q.get('status')) pay.status = q.get('status'); if (q.get('detail')) pay.status_detail = q.get('detail'); if (q.get('amount')) pay.transaction_amount = +q.get('amount'); } res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify(pay || null)); }
  if (routes[p]) return require(path.join(root, 'api', routes[p] + '.js'))(req, res);
  const f = path.join(site, p === '/' ? 'index.html' : path.normalize(p).replace(/^\/+/, ''));
  if (!f.startsWith(site) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.statusCode = 404; return res.end('404'); }
  res.setHeader('Content-Type', types[path.extname(f)] || 'application/octet-stream'); fs.createReadStream(f).pipe(res);
}).listen(+process.argv[2] || 3000, () => console.log('dev em http://localhost:' + (+process.argv[2] || 3000)));
