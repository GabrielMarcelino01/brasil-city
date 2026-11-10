# BRASIL CITY: Norte x Sul (documento de design, v3)

## 1. Ideia em uma frase
Um jogo de cidade em blocos 3D (estilo Minecraft/Roblox) que roda no navegador do celular. A pessoa entra com o @ do Instagram, escolhe o **Brasil do Norte** ou o **Brasil do Sul** e a sua cidade de verdade (os 5.571 municípios do IBGE).

A cidade começa **quase vazia**: só mato, lixo e o **Palácio do Prefeito**. Os moradores trabalham, constroem as casas, limpam e arborizam as ruas e levam a cidade de **Vila** até **Grande Potência**.

## 2. Os dois lados (estilos de jogo, nunca rico x pobre)

| | 🌴 Brasil do Norte | 🏙️ Brasil do Sul |
|---|---|---|
| Regiões | Norte + Nordeste (16 UFs) | Sul + Sudeste + Centro-Oeste (11 UFs) |
| Estilo | **Cooperativo** | **Competitivo** |
| Salário | 20% vai pra obra da cidade (e vira reputação) | Fica com 100% |
| Bônus | +15% de XP | Negócios com renda por minuto |
| Ação especial | **Mutirão** (-15⚡, +40 XP, +450 na obra) | **Patrocínio** (R$ 200, +600 na obra) |
| Visual | Praia, mar, rio, palmeiras e barcos | Skyline de prédios a partir da Cidade Desenvolvida |

## 3. Página inicial e cadastro (v3)

**Landing page**, vertical e pensada primeiro pro celular. É estática e rápida: o 3D só carrega depois do cadastro. Cores verde, amarelo e azul, visual de blocos.

Seções, na ordem:
1. **Hero**, com a manchete "Agora é você quem escolhe: qual Brasil vai virar uma potência?". Mostra os cards Norte x Sul com a porcentagem, o CTA e um vídeo real do jogo dentro de um celular, além de cubos de grama flutuando e selos animados.
2. Faixa com o placar rolando.
3. **"Veja o jogo rodando"**: 5 vídeos curtos gravados do jogo (construção da casa, minigames, palácio, ranking e multidão). São mudos, em loop e só tocam quando aparecem na tela.
4. **"Talvez você esteja pensando…"**: as objeções, como baixar app, celular fraco, cidade pequena, pay-to-win e rivalidade.
5. **Como funciona**, em 5 passos numerados.
6. **O que tem no jogo**, em grade.
7. **Escada de evolução**: Vila ➜ Grande Potência.
8. **Placar ao vivo**, com números **simulados e marcados como prévia do protótipo**.
9. **Oferta "Crie o seu próprio jogo"**: R$ 49,90, com os arquivos completos, um mini curso e os bônus. A garantia ainda está como placeholder e o botão de checkout está **"em breve"**: não vende nem cobra nada.
10. **FAQ "Boas perguntas"**, com 9 perguntas.
11. CTA final Norte/Sul e rodapé.

**Cadastro**, em 6 passos com barra de progresso e botão voltar:
1. @ do Instagram
2. Idade, por faixa
3. Qual Brasil
4. Estado (só os do lado escolhido)
5. Cidade: busca sem acento em todos os municípios do estado, com a capital no topo
6. Primeira profissão (mostra o minigame de cada uma)

Depois disso o jogador entra direto no jogo. Se o @ for o do prefeito, o passo 6 é pulado.

## 4. Prefeito
- O @ do prefeito fica em `src/config.js`: `MAYOR_HANDLE = 'gabriel.marques'`. Dá pra entrar como prefeito de dois jeitos:
  - cadastrando com esse @;
  - pela URL de dev `?prefeito=1`, com `&lado=norte&uf=BA&cidade=Salvador` opcionais.
- O prefeito mora no **Palácio do Prefeito**, que é a única construção pronta no início. O palácio tem colunas, cúpula, jardins com sebes e flores, fonte e 3 bandeiras do Brasil tremulando.
- Todo jogador vê a placa "🏛️ Palácio do Prefeito @gabriel.marques".
- Visual do prefeito: terno com faixa verde-amarela e nome com 👑 em placa verde.
- **Gabinete do Prefeito**:
  - Estatísticas: estágio, pontos, moradores, casas, lixo na rua, árvores, calçadas, obras e caixa da prefeitura.
  - Lançar a próxima obra: Praça, Iluminação, Calçadas, Parque, Escola, Hospital, Estádio.
  - Investir o caixa na obra.
  - Decretos: mutirão de limpeza, Dia da Árvore, pavimentar quadra e festa na praça.

## 5. Cidade que evolui
**Início.** Os terrenos são de terra, com mato, pedras e às vezes uma hortinha. As ruas têm asfalto esburacado, sem faixa. Há 44 pontos de lixo e **nenhum carro**.

**Terreno do jogador.** Ele chega perto de um 🪧 terreno livre e toca em **Reivindicar** (é grátis). Depois constrói em 4 etapas, cada uma com animação de crescimento:

| Etapa | Custo | XP |
|---|---|---|
| 🪨 Alicerce | R$ 100 | 30 |
| 🧱 Paredes | R$ 250 | 50 |
| 🏠 Telhado | R$ 400 | 70 |
| ✨ Acabamento | R$ 600 | 100 |

A casa pronta libera a garagem e as reformas: sobrado, piscina e mansão.

**Ações por proximidade** (botões aparecem sozinhos quando o jogador chega perto):

| Ação | Custo | Ganho |
|---|---|---|
| 🧹 Limpar lixo | 3⚡ | +8 XP |
| 🌳 Plantar árvore | R$ 60 | +15 XP |
| 🧱 Pavimentar calçada | R$ 250 | +20 XP |

**Vizinhos simulados.** Outros "moradores" reivindicam terrenos com o tempo: 3 no início e +1 a cada 1h30, até 30. As casas deles também sobem de etapa.

**Pontos da cidade:**
- 40 por casa pronta e 8 por etapa parcial
- 4 por lixo limpo
- 12 por árvore
- 30 por calçada
- 150 por obra
- moradores ao longo do tempo

**Estágios:**

| Estágio | Pontos |
|---|---|
| 🏚️ Vila | 0 |
| 🏘️ Cidade Comum | 250 |
| 🏗️ Cidade em Crescimento | 700 |
| 🌆 Cidade Desenvolvida | 1.500 |
| 🇨🇭 Nível Suíça | 2.800 |
| 🇯🇵 Nível Japão | 4.500 |
| 🇺🇸 Nível Estados Unidos | 7.000 |
| 👑 Grande Potência | 10.000 |

**O mundo 3D muda em cada estágio:**
- Faixas na rua e grama verde
- Postes
- Trânsito, flores, árvores de rua e barcos
- Calçadas, praça e prédios no horizonte

A barra no HUD mostra o progresso e a posição no ranking.

**Ranking**, com 3 abas:
- Cidades: as outras são simuladas, e a sua aparece com os pontos detalhados e a escada de estágios.
- Norte x Sul.
- Mais ricos.

## 6. Profissões e minigames
O jogo tem 29 profissões em 8 níveis, mais a de Prefeito, e 11 tipos de minigame. Todo minigame tem efeitos visuais e sons (WebAudio, sem arquivos), combos, cronômetro e um resultado de **1 a 3 estrelas**:
- ★ a partir de 35% de acerto
- ★★ a partir de 65%
- ★★★ a partir de 90%

Pagamento = salário × (0,4 + 0,6 × acerto).

| Minigame | Profissões | Como joga |
|---|---|---|
| 🧱 Empilha | Pedreiro, Mestre de Obras, Engenheiro | Toque pra soltar o tijolo. Acerto perfeito dá combo; tem 3 vidas e a meta é 15 andares |
| 🍬 Combina 3 | Empacotador, Ambulante, Caixa | Estilo Candy Crush: tabuleiro 7×7, troca arrastando ou tocando, cascatas com combo |
| ♻️ Recicla | Gari | O lixo cai e você toca na lixeira certa: papel, plástico, metal, vidro ou orgânico |
| 🛵 Entrega | Entregador, Motorista de App | Mapa visto de cima, controlado por deslize ou setas. Leve o pacote ou busque o passageiro; 4 entregas |
| 🍳 Cozinha | Cozinheiro, Garçom | Monte a receita na ordem antes de queimar ou o cliente ir embora. São 3 pratos |
| ❓ Quiz | Professor (lousa), Enfermeiro e Médico (diagnóstico), Jornalista (fato ou fake), Vereador e Prefeito (decisões) | 6 perguntas com tempo e sequência |
| ⚖️ Tribunal | Advogado, Juiz | Compare a prova com o depoimento e aponte a frase que é mentira ("OBJEÇÃO!") |
| 🚒 Incêndio | Bombeiro | Segure o dedo no fogo pra mirar a mangueira |
| ⚽ Pênalti | Jogador de Futebol | O goleiro se mexe e a mira oscila; 5 cobranças |
| 📈 Bolsa | Corretor, Empresário | Compre na baixa e venda na alta em 28s |
| 🎯 Reflexo | Jardineiro, Pintor, Eletricista, Mecânico, Policial, Programador, Super-herói | Alvos bons e ruins por tema (por exemplo, pegar os ladrões sem pegar os inocentes), com estrela dourada |

Os títulos raros (nível 8) pedem esforço, não dinheiro:
- Jogador de Futebol: 60 trabalhos
- Vereador: 300 de reputação
- Super-herói: 25 trabalhos com 3 estrelas

## 7. Motivos pra voltar todo dia
- **Barra de XP animada**: os ganhos "voam" até o HUD.
- **Subida de nível**: tela com raios e confete. Dá R$ 100 × nível e energia cheia, e mostra as profissões desbloqueadas com o minigame de cada uma.
- **3 missões por dia**, sorteadas por dia e por jogador, com resgate manual. Exemplos: 3 trabalhos, 3 estrelas, 5 lixos, 2 árvores, uma etapa da casa, ajudar na obra, ganhar R$ 400 e pavimentar.
- **Sequência de login de 7 dias**: R$ 100, 150, energia, 300, 400 + XP, 500 + energia e, no dia 7, R$ 1.000 + 150 XP.
- **12 conquistas**.
- **Energia**: 100 (110 com o Hospital), e recarrega 1 ponto a cada 12s.

## 8. Carros e loja
- **A cidade começa sem carros.** A bicicleta (R$ 150) pode ser comprada desde o início.
- Os carros ficam bloqueados ("🏠 Termine sua casa pra liberar") até a casa ficar pronta. O prefeito já tem garagem.
- Carros básicos com dinheiro do jogo: Carro Popular R$ 3.000 e SUV R$ 12.000.
- Carros premium via Pix: **Esportivo R$ 3,00** e **Carro Neon R$ 4,00**, marcados como **"em breve"**. O checkout ainda não está ligado e nada é cobrado.
- O trânsito de carros dos NPCs só aparece a partir do estágio Cidade Desenvolvida.

## 9. Grátis x pago
Tudo que faz subir de nível é grátis. Os itens pagos são **visuais ou atalhos de tempo**, sempre via Pix e marcados como "em breve":
- Mansão Dourada
- Capa
- Pet Caramelo
- Turbo XP
- Energia Cheia
- Esportivo
- Neon

Ninguém compra título nem vitória do lado.

## 10. Técnica
- **Stack**: Three.js 0.170, empacotado com esbuild. O mundo é feito de blocos com texturas de pixel geradas em canvas, sem arquivos de imagem.
- **Qualidade**:
  - Alta: sombras, DPR 2 e mais NPCs.
  - Baixa: sem sombras, DPR 1,25 e menos NPCs.
- **Ciclo dia/noite** opcional.
- **Salvamento**: localStorage, na chave `brasilcity_save_v3`. As configurações ficam em `brasilcity_settings_v1`.
- **Municípios**: `src/municipios.js` tem os 5.571 municípios da API de localidades do IBGE.
- **Build** (`./build.sh`) gera três saídas:
  - `dist/index.html`: arquivo único com a landing, o jogo e os vídeos embutidos.
  - `dist_site/`: pasta com `index.html`, `game.js` e `media/`.
  - `brasil_game_site.zip`.
- **Vídeos**: `tools/record.mjs` grava os vídeos da landing a partir do jogo de verdade, com Playwright e ffmpeg. As cenas 3D são renderizadas quadro a quadro e as de interface são gravadas em tempo real. Saída em H.264, 540×960, sem áudio.
- **Testes**: `node test.mjs norte|sul|prefeito`.

## 11. Próximos passos
- **Supabase**: contas, cidade compartilhada de verdade (lotes, lixo e obras por município), ranking ao vivo e prefeito por cidade.
- **Pix** (Mercado Pago ou Asaas) com webhook, pros carros premium e pro Pacote Criador.
- **Hospedagem**: Vercel com domínio próprio.
- **Anti-trapaça**: salário, XP e pontos calculados no servidor.
- Eleição de prefeito por cidade e multiplayer leve com Realtime.

## Identidade visual (v3.1 — visual de jogo da Play Store)
- **Paleta única (tokens CSS em `src/parts/skin.css`)**: verde da marca `#2fb14b`, dourado `#ffc425`, azul `#2f80ed`, azul-marinho de contorno `#1b2340` e painéis creme `#fff7e6`. Cores semânticas: moeda = dourado, energia = laranja `#ff8a2a`, XP = azul, sucesso = verde, perigo = vermelho `#ec4b47`. Norte = verde, Sul = azul.
- **Ícones próprios (`src/icons.js`)**: cerca de 100 ícones SVG no mesmo estilo (contorno marinho de 3px, só cores da paleta). Os emojis do texto viram ícones automaticamente na tela (`startIconObserver`). A arte dos itens dentro dos minigames continua com emoji, de propósito.
- **Moeda do jogo**: aparece como ícone de moeda + número. Valores em dinheiro real (Pix, Pacote Criador) continuam em R$.
- **Componentes**:
  - Botões 3D com lábio inferior e animação de apertar.
  - Painéis creme com contorno grosso e título em faixa.
  - Botão redondo de fechar.
  - Abas no estilo de jogo de celular e contadores em pílula no topo.
  - Selos vermelhos de notificação e barras de progresso com contorno.
  - Doca inferior com 6 botões, coluna lateral com 4 botões e botão TRABALHAR redondo.
- **Tipografia**: *Lilita One* para títulos e botões e *Nunito* para o texto. As fontes vão embutidas em base64 (licença OFL, em `src/fonts/`), sem CDN, então funcionam offline.
- **Outros**:
  - Logo em blocos (BRASIL + C-I-T-Y em cubos) e tela de carregamento.
  - Popups abrem com animação de escala.
  - Som curto de toque nos botões (respeita o ajuste de Som).
  - As etiquetas do mundo 3D usam o mesmo estilo de pílula.
