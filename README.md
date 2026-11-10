# Brasil City v3 (protótipo)

- Jogar/abrir: `dist/index.html` (arquivo único, offline, com landing + vídeos)
- Site em pasta: `dist_site/index.html` (ou `brasil_game_site.zip`: descompacte e abra o index.html)
- Entrar direto como prefeito (dev): `dist/index.html?prefeito=1` (opcional `&lado=norte&uf=BA&cidade=Salvador`)
- Código: `src/` (main.js, world.js, voxel.js, minigames.js, landing.js, data.js, config.js, municipios.js, parts/*.css|html)
- Rebuild: `./build.sh` • Regravar vídeos: `node tools/record.mjs`
- Testes: `node test.mjs norte`, `node test.mjs sul`, `node test.mjs prefeito`

### Visual (v3.1)
- Design system em `src/parts/skin.css` e `src/parts/skin_landing.css`, ícones em `src/icons.js` e fontes em `src/fonts/` (embutidas pelo `tools/assemble.py`).
- Screenshots: `node shots_ui.mjs all` grava em `screenshots/v3_ui/`.

## Pagamento do VIP (Pix — Mercado Pago, Checkout Transparente)
- Funções na Vercel em `api/vip/`: `pix` (cria o Pix de R$ 19,90, valor fixo no servidor), `status` (confere no Mercado Pago e devolve o token VIP assinado), `verify-token` (o jogo reconfere o token ao abrir), `webhook` (só registra o aviso; ainda sem banco).
- Variáveis de ambiente (Vercel › Settings › Environment Variables, Production, tipo Sensitive): `MERCADOPAGO_ACCESS_TOKEN` (token de produção da conta Mercado Pago) e `VIP_SIGNING_SECRET` (texto aleatório com 32+ caracteres). Depois de mudar, faça um redeploy.
- `vercel.json` serve `dist_site/` como site e `api/` como funções (sem build/instalação).
- Teste local sem cobrar nada: `node tools/vip_unit.cjs` (tokens) e `node test_pix.mjs` (fluxo completo com o Mercado Pago simulado; `MOCK_MP=1 node tools/devserver.cjs 3000` sobe o servidor local).
- `?vip=1` (VIP sem pagar) só funciona em teste local (`file://` ou `localhost`), nunca no site no ar.

## Prefeito (link privado)
- Ninguém vira prefeito pelo @. Os @ `ogabmarques_`, `gabriel.marques` e `gabimarques_` são reservados no cadastro.
- O prefeito entra pelo link privado `https://brasil-city.vercel.app/?prefeito=<MAYOR_KEY>`. O jogo troca a chave por um token assinado (`POST /api/mayor/verify`), tira a chave da URL e reconfere o token toda vez que abre.
- Variável de ambiente: `MAYOR_KEY` (Production, Sensitive). Trocar a chave invalida o link antigo, mas tokens já emitidos continuam valendo até trocar também o `VIP_SIGNING_SECRET`.
- `?prefeito=1` só funciona em teste local. Teste: `node test_mayor.mjs`.
