#!/bin/bash
# Gera:
#  dist/index.html          -> arquivo único (jogo + landing, vídeos embutidos se couber em ~15 MB)
#  dist_site/               -> pasta (index.html + game.js + media/)
#  brasil_game_site.zip     -> zip da pasta
set -e
cd "$(dirname "$0")"
mkdir -p dist dist_site/media
npx esbuild src/main.js --bundle --minify --format=iife --target=es2020 --outfile=dist_site/game.js --log-level=warning
python3 tools/assemble.py
python3 -c "import shutil; shutil.make_archive('brasil_game_site', 'zip', 'dist_site')"
ls -la dist dist_site brasil_game_site.zip
