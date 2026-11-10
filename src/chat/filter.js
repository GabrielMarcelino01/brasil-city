// ===== Filtro do chat (PT-BR) =====
// Palavrões viram asteriscos; ofensas graves/discurso de ódio bloqueiam a mensagem;
// links, telefones e spam de @ são removidos; CAPS LOCK e enxurrada de emoji são suavizados.
// Mantém a mesma regra no servidor quando o chat for pra Supabase (nunca confie só no cliente).

const LEET = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '8': 'b', '9': 'g', '@': 'a', '$': 's' };
const strip = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const leet = (s, at = 'a') => s.replace(/[0-9@$]/g, (c) => (c === '@' ? at : LEET[c] || c));
const dedupe1 = (s) => s.replace(/(.)\1+/g, '$1');          // porrrra -> pora
const dedupe2 = (s) => s.replace(/(.)\1{2,}/g, '$1$1');     // porrrra -> porra
const keys = (tok, at) => { const b = leet(strip(tok), at).replace(/[^a-z]/g, ''); return { k1: dedupe1(b), k2: dedupe2(b) }; };

// palavra inteira (comparadas já sem acento/leet e sem letras repetidas)
const WHOLE = `porra merda bosta puta puto putas putos foda fodase fodasse fuder foder fudeu fodeu fodido fudido caralho karalho cacete
  cu cus cuzao cuzinho buceta boceta xota xoxota xereca piroca pica pau-no-cu punheta punheteiro boquete siririca
 viado viados viadinho viadao veadinho bicha bixa boiola baitola traveco sapatao sapatona arrombado arrombada otario otaria babaca corno corna
  vagabundo vagabunda vadia piranha prostituta desgracado desgracada retardado retardada mongoloide mongol imbecil
  macaco macaca crioulo criolo tiziu negrinho nazi nazista hitler
  fdp vtnc vsf tnc pnc pqp krl krlh crl crlh prr mrd ptqp tmnc tnmc vtmnc fdps`.split(/\s+/).filter(Boolean);
// prefixos (cobre plurais/derivações: caralhada, merdinha, arrombados…)
const PREFIX = ['caralh', 'karalh', 'porr', 'merd', 'bucet', 'bocet', 'arromb', 'fod', 'fud', 'putari', 'putinh', 'putona', 'punhet', 'cuza', 'otari',
  'vagabund', 'desgrac', 'retardad', 'babac', 'piroc', 'xerec', 'xoxot', 'boquet', 'cacet', 'piranh', 'prostitut', 'crioul', 'baitol', 'boiol', 'travec', 'nazis'];
// dentro de palavras grudadas (vaitomarnocu, filhadaputa…)
const INSIDE = ['caralho', 'buceta', 'arombad', 'arrombad', 'punheta', 'filhodaputa', 'filhadaputa', 'tomarnocu', 'tomanocu', 'vaisefoder', 'vaisefuder', 'putaquepariu', 'puraquepariu'];
const SAFE = new Set(['fodo', 'porra-louca', 'porres', 'porre', 'merdeiro', 'fodor', 'putz', 'cucurbita', 'pauta', 'picanha', 'picape', 'pinta', 'pintor', 'pintora', 'pintura', 'rolar', 'rolando', 'rolou', 'rolo', 'macacao', 'fudge', 'cuscuz', 'cuia', 'cume']);

const W1 = new Set(WHOLE.map((w) => dedupe1(w.replace(/[^a-z]/g, '')))), W2 = new Set(WHOLE.map((w) => dedupe2(w.replace(/[^a-z]/g, ''))));
const P2 = PREFIX.map(dedupe2), I1 = INSIDE.map(dedupe1);
export function isBadWord(tok) {
  const raw = strip(tok); if (SAFE.has(raw) || SAFE.has(dedupe1(raw))) return false;
  return badKey(keys(tok, 'a')) || (tok.includes('@') && badKey(keys(tok, 'o')));
}
function badKey({ k1, k2 }) {
  if (!k1) return false;
  if (W1.has(k1) || W2.has(k2)) return true;
  if (k2.length >= 4 && P2.some((p) => k2.startsWith(p)) && !SAFE.has(k2)) return true;
  if (k1.length >= 7 && I1.some((p) => k1.includes(p))) return true;
  return false;
}

// discurso de ódio / ameaça: bloqueia a mensagem inteira
const HATE = [
  /\b(morte|morra|morram|matar|mata|exterminar)\s+(a|aos?|as|todos?|todas?|os|esses|essas)?\s*(nordestin|baian|paraib|sulist|paulist|gauch|negr|pret|gay|gays|lesbic|trans|judeu|judia|indi|evangelic|macumbeir|pobre)/,
  /\b(nordestin\w*|baian\w*|paraib\w*|sulist\w*|negr\w*|pret[oa]s?|gays?|indi[oa]s?|judeus?)\s+(e|eh|sao|é|são)?\s*(burr|lixo|praga|vagabund|inferior|sujo|suja|macac|nojent|raca ruim)/,
  /\b(volta|voltem|vai|vao)\s+(pra|para)\s+(sua|tua)\s+terra\b/,
  /\b(raca|gente)\s+(inferior|nojenta|imunda)\b/,
  /\b(heil|sieg heil|88 heil|white power|supremacia branca)\b/,
  /\b(se mata|se matar|vou te matar|vou matar voce|te pego na saida)\b/,
];
const URL_RE = /\b((https?:\/\/|www\.)\S+|[a-z0-9-]+(\.[a-z0-9-]+)*\s?(\.|\s(ponto|dot)\s)\s?(com|net|org|br|io|gg|ly|me|xyz|app|site|online|link|info|biz|co|tv|tk|shop|store|vip|bet)(\.[a-z]{2})?(\/\S*)?)\b/gi;
const PHONE_RE = /(\+?\d[\d\s().\-]{7,}\d)/g;
const MENTION_RE = /(^|[^\w])@[\w.]{2,30}/g;
const BAIT_RE = /\b(segue|sigam|siga|seguir|follow|sdv|insta|instagram|ig|tiktok|zap|whats|wpp|chama no|chama na dm|dm)\b/i;
const EMOJI_RE = /\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic}\uFE0F?|[\u{1F3FB}-\u{1F3FF}])*/gu;

export function cleanMessage(input, { maxLen = 200 } = {}) {
  let t = String(input ?? '').replace(/[\u0000-\u001f\u007f\u200b-\u200f\u202a-\u202e\u2066-\u2069]/g, ' ').replace(/\s+/g, ' ').trim();
  const flags = [];
  if (!t) return { ok: false, text: '', reason: 'vazia', flags };
  if (t.length > maxLen) { t = t.slice(0, maxLen); flags.push('cortada'); }
  // ódio (checa no texto normalizado, inclusive com leet e letras repetidas)
  const norm = dedupe2(leet(strip(t)).replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' '));
  if (HATE.some((re) => re.test(norm))) return { ok: false, text: '', reason: 'odio', flags: ['odio'] };
  // links e telefones
  const t0 = t; t = t.replace(URL_RE, '[link removido]'); if (t !== t0) flags.push('link');
  const t1 = t; t = t.replace(PHONE_RE, (m) => (m.replace(/\D/g, '').length >= 8 ? '[número removido]' : m)); if (t !== t1) flags.push('telefone');
  // @: no máximo 1 menção e nunca junto de pedido de "segue"
  const mentions = t.match(MENTION_RE) || [];
  if (mentions.length > 1 || (mentions.length && BAIT_RE.test(t))) { t = t.replace(MENTION_RE, '$1@…'); flags.push('mencao'); }
  // palavrões: palavra por palavra + letras soltas (p o r r a / p.o.r.r.a)
  const toks = []; const TOK = /[\p{L}\p{N}](?:[\p{L}\p{N}@$]*[\p{L}\p{N}])?/gu; let m;
  while ((m = TOK.exec(t))) toks.push({ s: m.index, e: m.index + m[0].length, w: m[0] });
  const mask = new Array(t.length).fill(false);
  for (const k of toks) if (!/^\[/.test(t.slice(k.s - 1, k.s)) && isBadWord(k.w)) for (let i = k.s; i < k.e; i++) mask[i] = true;
  for (let i = 0; i < toks.length;) {
    let j = i; while (j < toks.length && toks[j].w.length === 1 && (j === i || toks[j].s - toks[j - 1].e <= 2)) j++;
    if (j - i >= 2) { const word = toks.slice(i, j).map((x) => x.w).join(''); if (isBadWord(word)) for (let q = toks[i].s; q < toks[j - 1].e; q++) if (!/\s/.test(t[q])) mask[q] = true; }
    i = Math.max(j, i + 1);
  }
  if (mask.some(Boolean)) { t = [...t].map((c, i) => (mask[i] ? '*' : c)).join(''); flags.push('palavrao'); }
  // enxurrada de emoji: no máximo 4
  let ec = 0; t = t.replace(EMOJI_RE, (e) => (++ec > 4 ? '' : e)); if (ec > 4) flags.push('emoji');
  // repetição: kkkkkkkkkk -> kkkkkk, !!!!!! -> !!!
  t = t.replace(/([^\s*])\1{6,}/gu, '$1$1$1$1$1$1').replace(/([!?.,])\1{3,}/g, '$1$1$1');
  // CAPS LOCK: mais de 70% maiúsculas em texto com 8+ letras vira minúscula
  const letters = t.replace(/[^\p{L}]/gu, ''); const ups = letters.replace(/[^\p{Lu}]/gu, '').length;
  if (letters.length >= 8 && ups / letters.length > 0.7) { t = t.toLowerCase(); t = t.charAt(0).toUpperCase() + t.slice(1); flags.push('caps'); }
  t = t.replace(/\s+/g, ' ').trim();
  if (!t.replace(/\[link removido\]|\[número removido\]|@…|\s/g, '')) return { ok: false, text: '', reason: flags.includes('link') ? 'link' : flags.includes('telefone') ? 'telefone' : 'vazia', flags };
  return { ok: true, text: t, flags };
}
