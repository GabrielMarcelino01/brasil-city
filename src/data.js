// ===== Dados do jogo v3 (PT-BR) =====
export const GAME_NAME = 'BRASIL CITY';
export const GAME_TAG = 'Norte x Sul';

export const SIDES = {
  norte: { id: 'norte', nome: 'Brasil do Norte', regioes: ['Norte', 'Nordeste'], estilo: 'Cooperativo', cor: '#10b981', emoji: '🌴', lema: 'Juntos a gente constrói mais.',
    perks: ['🤝 20% do salário vai pro Fundo Coletivo das obras', '🌿 Bônus da natureza: +15% de XP', '🏗️ Mutirão: ajude nas obras e ganhe reputação', '💰 Renda da Cooperativa a cada minuto'] },
  sul: { id: 'sul', nome: 'Brasil do Sul', regioes: ['Sul', 'Sudeste', 'Centro-Oeste'], estilo: 'Competitivo', cor: '#3b82f6', emoji: '🏙️', lema: 'Cada um faz o seu corre.',
    perks: ['💵 Você fica com 100% do que ganha', '🏪 Mercado: compre negócios que rendem dinheiro', '🏆 Ranking dos mais ricos', '🤝 Patrocine obras e ganhe reputação'] },
};
export const REGIAO_UFS = {
  'Norte': ['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO'], 'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
  'Sul': ['PR', 'RS', 'SC'], 'Sudeste': ['ES', 'MG', 'RJ', 'SP'], 'Centro-Oeste': ['DF', 'GO', 'MS', 'MT'],
};
export const UF_NOME = {
  AC: 'Acre', AM: 'Amazonas', AP: 'Amapá', PA: 'Pará', RO: 'Rondônia', RR: 'Roraima', TO: 'Tocantins', MA: 'Maranhão', PI: 'Piauí', CE: 'Ceará',
  RN: 'Rio Grande do Norte', PB: 'Paraíba', PE: 'Pernambuco', AL: 'Alagoas', SE: 'Sergipe', BA: 'Bahia', PR: 'Paraná', SC: 'Santa Catarina',
  RS: 'Rio Grande do Sul', SP: 'São Paulo', RJ: 'Rio de Janeiro', MG: 'Minas Gerais', ES: 'Espírito Santo', GO: 'Goiás', MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul', DF: 'Distrito Federal',
};
export const CAPITAIS = { AC: 'Rio Branco', AM: 'Manaus', AP: 'Macapá', PA: 'Belém', RO: 'Porto Velho', RR: 'Boa Vista', TO: 'Palmas', MA: 'São Luís', PI: 'Teresina', CE: 'Fortaleza', RN: 'Natal', PB: 'João Pessoa', PE: 'Recife', AL: 'Maceió', SE: 'Aracaju', BA: 'Salvador', PR: 'Curitiba', SC: 'Florianópolis', RS: 'Porto Alegre', SP: 'São Paulo', RJ: 'Rio de Janeiro', MG: 'Belo Horizonte', ES: 'Vitória', GO: 'Goiânia', MT: 'Cuiabá', MS: 'Campo Grande', DF: 'Brasília' };

export const LEVEL_XP = [0, 100, 260, 500, 850, 1350, 2000, 2900];
export const MAX_LEVEL = 8;

// mg = tipo de minigame (ver minigames.js)
const P = (id, nome, emoji, nivel, salario, xp, mg, desc, extra = {}) => ({ id, nome, emoji, nivel, salario, xp, mg, desc, ...extra });
export const PROFISSOES = [
  P('pedreiro', 'Pedreiro(a)', '🧱', 1, 38, 25, 'bricks', 'Empilhe tijolos no ponto certo.'),
  P('empacotador', 'Empacotador(a)', '🛒', 1, 36, 25, 'match3', 'Junte 3 produtos iguais.'),
  P('gari', 'Gari', '🧹', 1, 38, 25, 'sort', 'Separe o lixo na lixeira certa.'),
  P('entregador', 'Entregador(a)', '🛵', 1, 40, 25, 'delivery', 'Pilote até a casa marcada.'),
  P('ambulante', 'Vendedor(a) Ambulante', '🌽', 1, 37, 25, 'match3', 'Combine os lanches da barraca.'),
  P('garcom', 'Garçom/Garçonete', '🍽️', 1, 37, 25, 'cook', 'Monte o pedido na ordem certa.'),
  P('jardineiro', 'Jardineiro(a)', '🌱', 1, 36, 25, 'tap', 'Regue as plantas, cuidado com as pragas.'),
  P('pintor', 'Pintor(a)', '🎨', 1, 37, 25, 'tap', 'Pinte as paredes rapidinho.'),
  P('mestre_obras', 'Mestre de Obras', '👷', 2, 60, 35, 'bricks', 'Torres mais altas, mais rápidas.'),
  P('motorista', 'Motorista de App', '🚕', 2, 62, 35, 'delivery', 'Busque os passageiros.'),
  P('caixa', 'Operador(a) de Caixa', '💳', 2, 58, 35, 'match3', 'Combine pagamentos iguais.'),
  P('eletricista', 'Eletricista', '⚡', 3, 92, 45, 'tap', 'Conserte as lâmpadas queimadas.'),
  P('cozinheiro', 'Cozinheiro(a)', '🍳', 3, 95, 45, 'cook', 'Prepare o prato antes de queimar.'),
  P('mecanico', 'Mecânico(a)', '🔧', 3, 90, 45, 'tap', 'Aperte os parafusos soltos.'),
  P('professor', 'Professor(a)', '📚', 4, 140, 55, 'quiz', 'Responda o quiz da turma.'),
  P('bombeiro', 'Bombeiro(a)', '🚒', 4, 148, 55, 'fire', 'Mire a água e apague o fogo.'),
  P('policial', 'Policial', '🚓', 4, 145, 55, 'tap', 'Pegue os ladrões, não os inocentes.'),
  P('enfermeiro', 'Enfermeiro(a)', '💉', 5, 210, 70, 'quiz', 'Escolha o cuidado certo.'),
  P('programador', 'Programador(a)', '💻', 5, 218, 70, 'tap', 'Esmague os bugs do sistema.'),
  P('jornalista', 'Jornalista', '📰', 5, 205, 70, 'quiz', 'Fato ou fake? Decida rápido.'),
  P('engenheiro', 'Engenheiro(a)', '📐', 6, 300, 85, 'bricks', 'Construa a torre perfeita.'),
  P('advogado', 'Advogado(a)', '⚖️', 6, 310, 85, 'court', 'Ache a contradição no depoimento.'),
  P('corretor', 'Corretor(a) de Imóveis', '🏘️', 6, 295, 85, 'market', 'Compre barato, venda caro.'),
  P('medico', 'Médico(a)', '🩺', 7, 450, 100, 'quiz', 'Diagnostique o paciente.'),
  P('empresario', 'Empresário(a)', '💼', 7, 460, 100, 'market', 'Opere na bolsa da cidade.'),
  P('juiz', 'Juiz(a)', '👨‍⚖️', 7, 455, 100, 'court', 'Julgue as provas com atenção.'),
  P('jogador', 'Jogador(a) de Futebol', '⚽', 8, 700, 130, 'penalty', 'Bata os pênaltis.', { raro: true, req: { tipo: 'totalWorks', valor: 60, texto: 'Passar na peneira: 60 trabalhos' } }),
  P('vereador', 'Vereador(a)', '🗳️', 8, 720, 130, 'quiz', 'Decida o melhor pra cidade.', { raro: true, req: { tipo: 'reputacao', valor: 300, texto: '300 de reputação (ajude a cidade)' } }),
  P('heroi', 'Super-herói(na)', '🦸', 8, 700, 140, 'tap', 'Proteja a cidade dos vilões.', { raro: true, req: { tipo: 'perfeitos', valor: 25, texto: '25 trabalhos com 3 estrelas' } }),
];
// profissão exclusiva do prefeito
export const PROF_PREFEITO = P('prefeito', 'Prefeito(a)', '🏛️', 1, 120, 40, 'quiz', 'Tome decisões pela cidade.');

export const BUILD_STAGES = [
  { id: 'alicerce', nome: 'Alicerce', emoji: '🪨', preco: 100, xp: 30 },
  { id: 'paredes', nome: 'Paredes', emoji: '🧱', preco: 250, xp: 50 },
  { id: 'telhado', nome: 'Telhado', emoji: '🏠', preco: 400, xp: 70 },
  { id: 'acabamento', nome: 'Acabamento', emoji: '✨', preco: 600, xp: 100 },
];

export const LOJA = {
  casas: [
    { id: 'casa_simples', nome: 'Casa Simples', preco: 0, emoji: '🏠', desc: 'Sua casa construída.' },
    { id: 'casa_reformada', nome: 'Casa Reformada', preco: 600, emoji: '🏡', desc: 'Cerca, jardim e flores.' },
    { id: 'sobrado', nome: 'Sobrado', preco: 2500, emoji: '🏘️', desc: 'Dois andares e varanda.' },
    { id: 'casa_piscina', nome: 'Casa com Piscina', preco: 7000, emoji: '🏊', desc: 'Sobrado com piscina.' },
    { id: 'mansao', nome: 'Mansão', preco: 20000, emoji: '🏰', desc: 'Colunas, piscina e muito espaço.' },
  ],
  veiculos: [
    { id: 'bike', nome: 'Bicicleta', preco: 150, emoji: '🚲', desc: '+40% de velocidade. Liberada desde o início.', vel: 1.4 },
    { id: 'popular', nome: 'Carro Popular', preco: 3000, emoji: '🚗', desc: 'Dirija pela cidade!', vel: 2.2, casa: true },
    { id: 'suv', nome: 'SUV', preco: 12000, emoji: '🚙', desc: 'Grandão e confortável.', vel: 2.5, casa: true },
    { id: 'p_esportivo', nome: 'Esportivo', pix: 3.00, emoji: '🏎️', desc: 'O mais rápido da cidade.', premium: true, casa: true },
    { id: 'p_carro_neon', nome: 'Carro Neon', pix: 4.00, emoji: '🚘', desc: 'Luzes neon por baixo.', premium: true, casa: true },
  ],
  roupas: [
    { id: 'camisa_verde', nome: 'Camisa Verde', preco: 0, cor: '#16a34a', tipo: 'camisa', desc: 'Básica.' },
    { id: 'camisa_amarela', nome: 'Camisa Canarinho', preco: 80, cor: '#facc15', tipo: 'camisa', desc: 'Pra torcer pela cidade.' },
    { id: 'camisa_azul', nome: 'Camisa Azul', preco: 80, cor: '#2563eb', tipo: 'camisa', desc: 'Clássica.' },
    { id: 'camisa_vermelha', nome: 'Camisa Vermelha', preco: 80, cor: '#dc2626', tipo: 'camisa', desc: 'Chama atenção.' },
    { id: 'camisa_rosa', nome: 'Camisa Rosa', preco: 120, cor: '#ec4899', tipo: 'camisa', desc: 'Estilosa.' },
    { id: 'camisa_preta', nome: 'Camisa Preta', preco: 150, cor: '#111827', tipo: 'camisa', desc: 'Elegante.' },
    { id: 'bone', nome: 'Boné', preco: 120, tipo: 'chapeu', modelo: 'bone', desc: 'Aba reta.' },
    { id: 'palha', nome: 'Chapéu de Palha', preco: 150, tipo: 'chapeu', modelo: 'palha', desc: 'Pro sol forte.' },
    { id: 'coroa', nome: 'Coroa', preco: 5000, tipo: 'chapeu', modelo: 'coroa', desc: 'Pra quem manda.' },
  ],
  premium: [
    { id: 'p_mansao_dourada', nome: 'Mansão Dourada', pix: 9.90, emoji: '🏆', desc: 'Mansão exclusiva em ouro.' },
    { id: 'p_capa', nome: 'Capa de Super-herói', pix: 2.90, emoji: '🦸', desc: 'Capa vermelha esvoaçante.' },
    { id: 'p_turbo', nome: 'Turbo XP 2x (24h)', pix: 1.99, emoji: '🚀', desc: 'Dobro de XP por 24 horas.' },
    { id: 'p_energia', nome: 'Energia Cheia', pix: 1.00, emoji: '⚡', desc: 'Recarrega na hora.' },
    { id: 'p_pet', nome: 'Pet Caramelo', pix: 3.90, emoji: '🐕', desc: 'Um vira-lata caramelo te segue.' },
  ],
};
export const NEGOCIOS = [
  { id: 'pipoca', nome: 'Carrinho de Pipoca', emoji: '🍿', preco: 300, renda: 2 },
  { id: 'lanchonete', nome: 'Lanchonete', emoji: '🍔', preco: 1500, renda: 9 },
  { id: 'mercadinho', nome: 'Mercadinho', emoji: '🏪', preco: 6000, renda: 35 },
  { id: 'concessionaria', nome: 'Concessionária', emoji: '🚘', preco: 25000, renda: 140 },
];
// obras da cidade (o prefeito escolhe a próxima)
export const OBRAS_CIDADE = [
  { id: 'praca', nome: 'Praça Central', emoji: '⛲', meta: 3000, efeito: 'Praça com fonte no centro' },
  { id: 'iluminacao', nome: 'Iluminação Pública', emoji: '💡', meta: 5000, efeito: 'Postes em todas as ruas' },
  { id: 'calcadas', nome: 'Calçadas Novas', emoji: '🧱', meta: 8000, efeito: 'Todas as calçadas pavimentadas' },
  { id: 'parque', nome: 'Parque da Cidade', emoji: '🌳', meta: 12000, efeito: 'Parque com lago e árvores' },
  { id: 'escola', nome: 'Escola', emoji: '🏫', meta: 18000, efeito: '+5% de XP pra cidade' },
  { id: 'hospital', nome: 'Hospital', emoji: '🏥', meta: 26000, efeito: '+10 de energia máxima' },
  { id: 'estadio', nome: 'Estádio', emoji: '🏟️', meta: 40000, efeito: 'Orgulho da cidade' },
];
// estágios de evolução da cidade
export const STAGES = [
  { nome: 'Vila', emoji: '🏚️', min: 0 },
  { nome: 'Cidade Comum', emoji: '🏘️', min: 250 },
  { nome: 'Cidade em Crescimento', emoji: '🏗️', min: 700 },
  { nome: 'Cidade Desenvolvida', emoji: '🌆', min: 1500 },
  { nome: 'Nível Suíça', emoji: '🇨🇭', min: 2800 },
  { nome: 'Nível Japão', emoji: '🇯🇵', min: 4500 },
  { nome: 'Nível Estados Unidos', emoji: '🇺🇸', min: 7000 },
  { nome: 'Grande Potência', emoji: '👑', min: 10000 },
];
export const MISSOES = [
  { id: 'work3', txt: 'Faça 3 trabalhos', ev: 'work', meta: 3, r: { $: 150, xp: 30 } },
  { id: 'stars3', txt: 'Tire ⭐⭐⭐ em um trabalho', ev: 'stars3', meta: 1, r: { $: 200, xp: 20 } },
  { id: 'trash5', txt: 'Limpe 5 lixos da cidade', ev: 'trash', meta: 5, r: { $: 150, xp: 40 } },
  { id: 'tree2', txt: 'Plante 2 árvores', ev: 'tree', meta: 2, r: { $: 120, xp: 40 } },
  { id: 'build1', txt: 'Avance 1 etapa da sua casa', ev: 'build', meta: 1, r: { $: 200, xp: 30 } },
  { id: 'obra1', txt: 'Ajude na obra da cidade', ev: 'obra', meta: 1, r: { $: 120, xp: 30 } },
  { id: 'earn400', txt: 'Ganhe 🪙400 trabalhando', ev: 'earn', meta: 400, r: { $: 150, xp: 30 } },
  { id: 'pave1', txt: 'Pavimente 1 calçada', ev: 'pave', meta: 1, r: { $: 150, xp: 40 } },
];
export const LOGIN_REWARDS = [
  { d: 1, txt: '🪙100', $: 100 }, { d: 2, txt: '🪙150', $: 150 }, { d: 3, txt: '⚡ Energia cheia', en: true }, { d: 4, txt: '🪙300', $: 300 },
  { d: 5, txt: '🪙400 + 50 XP', $: 400, xp: 50 }, { d: 6, txt: '🪙500 + ⚡', $: 500, en: true }, { d: 7, txt: '🪙1.000 + 150 XP', $: 1000, xp: 150 },
];
export const CONQUISTAS = [
  { id: 'w1', emoji: '👶', nome: 'Primeiro corre', txt: 'Faça seu primeiro trabalho', ok: s => s.stats.totalWorks >= 1 },
  { id: 'w10', emoji: '💪', nome: 'Trabalhador', txt: '10 trabalhos', ok: s => s.stats.totalWorks >= 10 },
  { id: 'w50', emoji: '🏅', nome: 'Incansável', txt: '50 trabalhos', ok: s => s.stats.totalWorks >= 50 },
  { id: 's3', emoji: '⭐', nome: 'Perfeito!', txt: 'Tire 3 estrelas', ok: s => s.stats.perfeitos >= 1 },
  { id: 's25', emoji: '🌟', nome: 'Mestre', txt: '25 trabalhos com 3 estrelas', ok: s => s.stats.perfeitos >= 25 },
  { id: 'casa', emoji: '🏠', nome: 'Casa própria', txt: 'Termine de construir sua casa', ok: s => (s.lote?.stage || 0) >= 4 || s.mayor },
  { id: 't10', emoji: '🧹', nome: 'Cidade limpa', txt: 'Limpe 10 lixos', ok: s => s.stats.trash >= 10 },
  { id: 'a5', emoji: '🌳', nome: 'Pulmão verde', txt: 'Plante 5 árvores', ok: s => s.stats.trees >= 5 },
  { id: 'l5', emoji: '🚀', nome: 'Subindo', txt: 'Chegue ao nível 5', ok: s => s.xp >= LEVEL_XP[4] },
  { id: 'l8', emoji: '👑', nome: 'Topo', txt: 'Chegue ao nível 8', ok: s => s.xp >= LEVEL_XP[7] },
  { id: 'r10k', emoji: '💰', nome: 'Rico', txt: 'Tenha 🪙10.000', ok: s => s.dinheiro >= 10000 },
  { id: 'st7', emoji: '🔥', nome: 'Fiel', txt: '7 dias seguidos jogando', ok: s => (s.login?.streak || 0) >= 7 },
];
export const NOMES = ['ana', 'joao', 'maria', 'pedro', 'julia', 'lucas', 'bia', 'gabi', 'rafa', 'duda', 'leo', 'carol', 'thiago', 'vini', 'lari', 'gui', 'nanda', 'caio', 'malu', 'davi', 'helo', 'enzo', 'valentina', 'arthur', 'livia', 'bruno', 'isa', 'mateus', 'clara', 'samuel', 'yasmin', 'felipe', 'sofia', 'diego', 'luana', 'igor', 'manu', 'renan', 'paula', 'kaique'];
export const SUFIXOS = ['', '_', '.oficial', '2009', '_br', 'zinho', '.real', '07', '_s', 'x', '13', 'dabahia', 'dosul', 'nordestino', 'tche', 'paulista', 'carioca', 'mineiro'];
