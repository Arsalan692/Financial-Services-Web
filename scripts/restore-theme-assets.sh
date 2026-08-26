#!/usr/bin/env bash
#
# Restore the theme assets that .gitignore keeps out of the repository:
# the reference mirror in theme-reference/, and the binary assets the
# frontend serves from frontend/public/assets/.
#
# Run from the project root:   bash scripts/restore-theme-assets.sh
#
set -u

BASE="https://html.themexriver.com/consulting"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MIRROR="$ROOT/theme-reference"
PUBLIC="$ROOT/frontend/public/assets"

PAGES="about blog career cart contact faq index index-five index-four index-six
index-three index-two partner project project-three project-two service
service-four service-one service-three service-two shop single-blog
single-project team testimonial"

echo "==> restoring theme mirror into theme-reference/"
mkdir -p "$MIRROR" || exit 1
cd "$MIRROR" || exit 1

for p in $PAGES; do
  [ -s "$p.html" ] && continue
  curl -sS -L --retry 3 --retry-delay 2 -o "$p.html" "$BASE/$p.html" \
    && echo "    $p.html"
done

# Collect every asset the pages reference, then everything the CSS
# references (fonts, background images), resolved relative to each
# stylesheet's own directory.
#
# NOTE: write path lists with newline='\n'. On Windows, Python's text
# mode emits CRLF, every path picks up a trailing \r, and curl fails
# with "Malformed input to a URL function" / exit code 000.
python - "$MIRROR" "$BASE" <<'PY'
import os, re, subprocess, sys

mirror, base = sys.argv[1], sys.argv[2]
os.chdir(mirror)

wanted = set()

attr = re.compile(r'(?:src|href|data-src|data-bg|data-thumb)="([^"]+)"')
for name in os.listdir('.'):
    if not name.endswith('.html'):
        continue
    html = open(name, encoding='utf-8', errors='ignore').read()
    for ref in attr.findall(html):
        ref = ref.split('?')[0].split('#')[0]
        if not ref or ref.startswith(('http', '//', '#', 'mailto:', 'tel:', 'javascript:')):
            continue
        if ref.endswith('.html'):
            continue
        wanted.add(os.path.normpath(ref).replace('\\', '/'))

def sweep_css():
    found = set()
    for dirpath, _, files in os.walk('.'):
        for f in files:
            if not f.endswith('.css'):
                continue
            path = os.path.join(dirpath, f)
            css = open(path, encoding='utf-8', errors='ignore').read()
            for u in re.findall(r'url\(["\']?([^)"\']+)', css):
                u = u.split('?')[0].split('#')[0]
                if not u or u.startswith(('http', '//', 'data:')):
                    continue
                rel = os.path.normpath(
                    os.path.join(dirpath, u)).replace('\\', '/').lstrip('./')
                if not rel.startswith('..'):
                    found.add(rel)
    return found

for rnd in range(2):          # pages -> css -> css referenced by that css
    todo = sorted(p for p in wanted
                  if not (os.path.exists(p) and os.path.getsize(p) > 0))
    if todo:
        with open('_dl.conf', 'w', newline='\n', encoding='utf-8') as fh:
            for rel in todo:
                os.makedirs(os.path.dirname(rel) or '.', exist_ok=True)
                fh.write('url = "%s/%s"\noutput = "%s"\n' % (base, rel, rel))
        subprocess.run(['curl', '-sS', '-L', '--retry', '3',
                        '--retry-delay', '2', '-K', '_dl.conf'])
        os.remove('_dl.conf')
    wanted |= sweep_css()

missing = [p for p in sorted(wanted)
           if not (os.path.exists(p) and os.path.getsize(p) > 0)]
print("    files: %d, missing: %d" % (len(wanted), len(missing)))
for p in missing[:10]:
    print("      MISSING", p)
PY

echo "==> copying the assets the frontend serves"
mkdir -p "$PUBLIC/css" "$PUBLIC/bootstrap/css" "$PUBLIC/bootstrap/fonts" "$PUBLIC/fonts"

cp "$MIRROR/assets/css/style.css" \
   "$MIRROR/assets/css/animate.min.css" \
   "$MIRROR/assets/css/font-awesome.min.css" \
   "$MIRROR/assets/css/offcanvas-menu.css" "$PUBLIC/css/" 2>/dev/null
cp "$MIRROR/assets/bootstrap/css/bootstrap.min.css" "$PUBLIC/bootstrap/css/" 2>/dev/null
cp "$MIRROR"/assets/bootstrap/fonts/* "$PUBLIC/bootstrap/fonts/" 2>/dev/null
cp "$MIRROR"/assets/fonts/* "$PUBLIC/fonts/" 2>/dev/null
cp -r "$MIRROR/assets/images" "$PUBLIC/" 2>/dev/null
cp -r "$MIRROR/assets/video" "$PUBLIC/" 2>/dev/null

echo "==> done"
echo "    theme-reference : $(find "$MIRROR" -type f 2>/dev/null | wc -l) files"
echo "    public/assets   : $(find "$PUBLIC" -type f 2>/dev/null | wc -l) files"
echo
echo "Images generated for this project live in"
echo "frontend/public/assets/generated/ and are committed — this script"
echo "does not touch them."
