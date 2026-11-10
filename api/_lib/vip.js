// Utilidades do servidor do VIP (Mercado Pago Pix + tokens assinados). Sem dependências externas.
'use strict';
const crypto = require('node:crypto');

const PRICE = 19.9; // valor fixo do VIP (nunca vem do cliente)
const PRICE_CENTS = 1990;
const DESCRIPTION = 'Brasil City - Plano VIP';
const SITE = 'https://brasil-city.vercel.app';
const MP_API = 'https://api.mercadopago.com';
const PIX_TTL_MIN = 30;

function secret() {
  const s = process.env.VIP_SIGNING_SECRET;
  if (!s || s.length < 32) throw new Error('VIP_SIGNING_SECRET ausente');
  return s;
}
function mpToken() {
  const t = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!t) throw new Error('MERCADOPAGO_ACCESS_TOKEN ausente');
  return t;
}
const b64u = (buf) => Buffer.from(buf).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
const unb64u = (s) => Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64');

/** Assina um objeto: base64url(json).base64url(hmac-sha256). */
function sign(payload, key = secret()) {
  const body = b64u(JSON.stringify(payload));
  const mac = b64u(crypto.createHmac('sha256', key).update(body).digest());
  return body + '.' + mac;
}
/** Verifica a assinatura (e o tipo/expiração). Retorna o payload ou null. */
function verify(token, type, key = secret()) {
  if (typeof token !== 'string' || token.length > 2048) return null;
  const parts = token.split('.');
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  const want = crypto.createHmac('sha256', key).update(parts[0]).digest();
  let got;
  try { got = unb64u(parts[1]); } catch { return null; }
  if (got.length !== want.length || !crypto.timingSafeEqual(got, want)) return null;
  let p;
  try { p = JSON.parse(unb64u(parts[0]).toString('utf8')); } catch { return null; }
  if (!p || typeof p !== 'object' || (type && p.t !== type)) return null;
  if (p.exp && Date.now() > p.exp) return null;
  return p;
}

const cleanHandle = (h) => String(h || '').trim().replace(/^@+/, '').toLowerCase().replace(/[^a-z0-9._]/g, '').slice(0, 30);
const validEmail = (e) => typeof e === 'string' && e.length <= 120 && /^[^\s@<>()"',;:]+@[^\s@<>()"',;:]+\.[a-z]{2,}$/i.test(e.trim());
const cleanName = (n) => String(n || '').replace(/[^\p{L}\p{M} '\-]/gu, '').trim().slice(0, 40);

/** Data no formato que o Mercado Pago aceita (com fuso -03:00). */
function mpDate(ms) {
  const d = new Date(ms - 3 * 3600e3);
  return d.toISOString().replace('Z', '-03:00');
}

async function readBody(req) {
  if (req.body !== undefined && req.body !== null && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body;
  let raw = '';
  if (typeof req.body === 'string') raw = req.body;
  else if (Buffer.isBuffer(req.body)) raw = req.body.toString('utf8');
  else {
    raw = await new Promise((resolve, reject) => {
      let s = ''; req.on('data', (c) => { s += c; if (s.length > 1e5) reject(new Error('body grande demais')); });
      req.on('end', () => resolve(s)); req.on('error', reject);
    });
  }
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}
function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}
async function mp(path, { method = 'GET', body, idem } = {}) {
  const headers = { Authorization: 'Bearer ' + mpToken(), 'Content-Type': 'application/json' };
  if (idem) headers['X-Idempotency-Key'] = idem;
  const r = await fetch(MP_API + path, { method, headers, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(15000) });
  let data = null;
  try { data = await r.json(); } catch { data = null; }
  return { ok: r.ok, status: r.status, data };
}
const newId = (prefix) => prefix + '_' + crypto.randomBytes(12).toString('hex');

module.exports = { PRICE, PRICE_CENTS, DESCRIPTION, SITE, PIX_TTL_MIN, sign, verify, cleanHandle, validEmail, cleanName, mpDate, readBody, send, mp, newId };
