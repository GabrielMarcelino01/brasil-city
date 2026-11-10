import os, re, base64, shutil, glob
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = lambda *a: os.path.join(root, *a)
def font(fam, f, w):
    return "@font-face{font-family:'%s';src:url(data:font/woff2;base64,%s) format('woff2');font-weight:%s;font-style:normal;font-display:swap}" % (fam, base64.b64encode(open(P('src/fonts/' + f), 'rb').read()).decode(), w)
fonts = font('Lilita One', 'lilita.woff2', 400) + ''.join(font('Nunito', 'nunito-%d.woff2' % w, w) for w in (400, 600, 800, 900))
css = fonts + ''.join(open(P('src/parts/' + f)).read() for f in ['base.css', 'landing.css', 'signup.css', 'game3.css', 'skin.css', 'skin_landing.css', 'vip_chat.css'])
head = '''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#151c36">
<title>BRASIL CITY — Qual Brasil vai virar uma potência?</title>
<meta name="description" content="Escolha Norte ou Sul, construa sua casa e leve sua cidade de Vila a Grande Potência. Grátis, no celular.">
<style>''' + css + '''</style>
</head>
<body>
'''
BOOT = '<div id="boot"><div class="boot-in"><span class="bc-logo"><span class="w">BRASIL</span><span class="blk"><i>C</i><i>I</i><i>T</i><i>Y</i></span></span><span class="bc-tag">NORTE x SUL</span><div class="boot-bar"><i></i></div><div class="boot-msg">Carregando…</div></div></div>\n'
body = BOOT + open(P('src/parts/landing.html')).read() + open(P('src/parts/signup.html')).read() + '''
<div id="app" hidden><canvas id="scene"></canvas></div>
<div id="hud" hidden><div id="hud-top"></div><div id="hud-bottom"></div></div>
<div id="joy" hidden><div id="knob"></div></div>
<div id="ui"></div><div id="toast"></div><div id="confetti"></div>
'''
js = open(P('dist_site/game.js')).read()
# pasta
media = sorted(glob.glob(P('media/*')))
for f in glob.glob(P('dist_site/media/*')): os.remove(f)
for f in media: shutil.copy(f, P('dist_site/media/'))
open(P('dist_site/index.html'), 'w').write(head + body + '<script src="game.js" defer></script>\n</body>\n</html>\n')
# arquivo único
mime = {'.mp4': 'video/mp4', '.webm': 'video/webm', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp'}
total = sum(os.path.getsize(f) for f in media)
single_body = body
if total < 11 * 1024 * 1024:
    for f in media:
        name = os.path.basename(f); uri = 'data:%s;base64,%s' % (mime[os.path.splitext(f)[1]], base64.b64encode(open(f, 'rb').read()).decode())
        single_body = single_body.replace('media/' + name, uri)
    note = 'midias embutidas'
else:
    note = 'midias NAO embutidas (grandes demais)'
html = head + single_body + '<script>' + js.replace('</script', '<\\/script') + '</script>\n</body>\n</html>\n'
open(P('dist/index.html'), 'w').write(html)
print('single-file: %.2f MB (%s); media total %.2f MB' % (len(html.encode()) / 1e6, note, total / 1e6))
