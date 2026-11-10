// ===== Configuração rápida =====
// @ do prefeito (sem o "@"). Troque aqui para mudar quem é o prefeito.
export const MAYOR_HANDLE = 'gabriel.marques';
export const MAYOR_NAME = 'Gabriel Marques';
// Cidade padrão do prefeito no atalho ?prefeito=1 (pode passar &lado=norte&uf=BA&cidade=Salvador)
export const MAYOR_DEFAULT = { side: 'sul', uf: 'SP', cidade: 'São Paulo' };
export const OFFER = { price: 'R$ 49,90', checkoutUrl: '' }; // link do checkout entra aqui depois

// ===== Planos (Grátis x VIP) — troque preços/limites aqui =====
export const PLANS = {
  vip: {
    nome: 'VIP',
    preco: 'R$ 19,90',        // preço exibido
    precoCentavos: 1990,      // valor que o checkout Pix vai cobrar
    ancora: 'R$ 49,90',       // preço "de" riscado
    cobranca: 'pagamento único',
    checkoutUrl: '',          // link/endpoint do Pix entra aqui depois (ver grantVip em vip.js)
  },
  chat: { freeCooldownS: 60, vipFloorS: 2, maxLen: 200 },
  lotM2: { free: 100, vip: 200 },
};
