// ===== Pagamento do VIP: Pix via Mercado Pago (Checkout Transparente) =====
// O servidor (api/vip/*) cria o Pix, confere o pagamento no Mercado Pago e devolve um token VIP assinado.
// O cliente só guarda o token; ao abrir o jogo ele é reconferido no servidor.
const PENDING_KEY = 'brasilcity_vip_pending_v1', EMAIL_KEY = 'brasilcity_vip_email_v1';
const API = '/api/vip';

async function post(path, body) {
  const r = await fetch(path.startsWith('/api/') ? path : API + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), cache: 'no-store' });
  let d = null; try { d = await r.json(); } catch { d = null; }
  if (!r.ok) { const e = new Error((d && d.message) || 'Erro ' + r.status); e.status = r.status; e.code = d && d.error; throw e; }
  return d;
}
const isNetErr = (e) => !e.status; // fetch falhou (sem internet/servidor fora)

/** Cria o Pix. O valor é fixado no servidor. */
export async function createPix({ handle, email, nome }) {
  const d = await post('/pix', { handle, email, nome });
  const pending = { id: d.id, order: d.order, qr: d.qr_code, qr64: d.qr_code_base64, exp: d.expires_at, handle, amount: d.amount, created: Date.now() };
  savePending(pending); return pending;
}
/** Status do Pix: { status: 'pending'|'approved'|'rejected'|'cancelled'|'expired'|..., vip? } */
export const checkPix = (p) => post('/status', { id: p.id, order: p.order });
/** Confere o token VIP no servidor. Retorna true/false, ou null se não deu pra falar com o servidor. */
export async function verifyVipToken(token, handle) {
  try { const d = await post('/verify-token', { token, handle }); return !!d.valid; }
  catch (e) { return isNetErr(e) || e.status >= 500 ? null : false; }
}
export function loadPending(handle) {
  try { const p = JSON.parse(localStorage.getItem(PENDING_KEY)); if (!p || !p.id || !p.order) return null; if (handle && p.handle !== handle) return null; return p; } catch { return null; }
}
export const savePending = (p) => localStorage.setItem(PENDING_KEY, JSON.stringify(p));
export const clearPending = () => localStorage.removeItem(PENDING_KEY);
export const pendingExpired = (p) => !p || Date.now() > p.exp;
export const lastEmail = () => localStorage.getItem(EMAIL_KEY) || '';
export const rememberEmail = (e) => localStorage.setItem(EMAIL_KEY, e);
export { isNetErr };

// ===== Prefeito: link privado (?prefeito=<chave>) vira um token assinado no servidor =====
/** Troca a chave do link pelo token de prefeito. Retorna o token ou null. */
export async function mayorLogin(key) { try { const d = await post('/api/mayor/verify', { key }); return d.token || null; } catch { return null; } }
/** true/false, ou null se não deu pra falar com o servidor. */
export async function verifyMayorToken(token) {
  try { const d = await post('/api/mayor/verify', { token }); return !!d.valid; }
  catch (e) { return isNetErr(e) || e.status >= 500 ? null : false; }
}
