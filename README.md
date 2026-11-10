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
