// ===== Transporte do chat (plugável) =====
// Interface que o chat usa:  { connect(onMessage), send(msg), history(), close() }
//   msg = { id, room, handle, side: 'norte'|'sul', vip: bool, mayor: bool, text, ts, bot?: bool }
// Hoje: LocalTransport (BroadcastChannel + localStorage) -> funciona entre abas do mesmo aparelho.
// Depois: SupabaseTransport com Realtime, p.ex.:
//   const ch = supabase.channel('chat:' + room); ch.on('broadcast', { event: 'msg' }, ({ payload }) => onMessage(payload)).subscribe();
//   send = (msg) => ch.send({ type: 'broadcast', event: 'msg', payload: msg })  // + insert na tabela chat_messages
//   (filtro de palavrões e limite de mensagens também precisam rodar no servidor / Edge Function)
const HIST_MAX = 60;

export class LocalTransport {
  constructor(room) { this.room = room; this.key = 'brasilcity_chat_' + room; this.bc = null; this.cb = null; this._onStorage = null; }
  connect(onMessage) {
    this.cb = onMessage;
    try { this.bc = new BroadcastChannel('brasilcity_chat'); this.bc.onmessage = (e) => { const m = e.data; if (m && m.room === this.room) this.cb?.(m, { remote: true }); }; }
    catch { this._onStorage = (e) => { if (e.key === this.key + '_last' && e.newValue) { try { const m = JSON.parse(e.newValue); this.cb?.(m, { remote: true }); } catch { /* */ } } }; addEventListener('storage', this._onStorage); }
    return this;
  }
  history() { try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { return []; } }
  _store(msg) { const h = this.history(); if (h.some((x) => x.id === msg.id)) return; h.push(msg); localStorage.setItem(this.key, JSON.stringify(h.slice(-HIST_MAX))); }
  send(msg) {
    this._store(msg);
    if (this.bc) this.bc.postMessage(msg); else localStorage.setItem(this.key + '_last', JSON.stringify(msg));
    return Promise.resolve(msg);
  }
  /** mensagens locais (moradores simulados) entram no histórico mas não são retransmitidas */
  remember(msg) { this._store(msg); }
  close() { this.bc?.close(); if (this._onStorage) removeEventListener('storage', this._onStorage); this.cb = null; }
}
export function createTransport(room) { return new LocalTransport(room); }
