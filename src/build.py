#!/usr/bin/env python3
"""Ghép PainPath: template + dữ liệu -> ../index.html (bản PWA phục vụ trên GitHub Pages).

Cách dùng (chạy từ bất kỳ đâu):
    python3 src/build.py          # build lại ../index.html
    python3 src/build.py bump     # build lại và tăng số phiên bản service worker (../sw.js)

'bump' cần thiết mỗi lần đổi nội dung để điện thoại/đã cài PWA nhận bản mới.
Không cần cài gói ngoài; chỉ cần Python 3. (Nếu có Node thì build.py tự chạy `node --check` để bắt lỗi cú pháp JS.)
"""
import re, sys, os, subprocess, shutil

D = os.path.dirname(os.path.abspath(__file__))        # thư mục src/
ROOT = os.path.dirname(D)                              # gốc repo (GitHub Pages phục vụ từ đây)
rd = lambda n: open(os.path.join(D, n), encoding='utf-8').read()

# 1) Lấy khối metadata nguồn (const SRC ... ) từ srcbase.html
old = rd('srcbase.html')
data = old[old.index('const SRC = {'):old.index('const DOW')]
data = re.sub(r'const PHASES = \[.*?\n\];\n', '', data, flags=re.S)

# 2) Ghép dữ liệu vào template
t = rd('index.html.tmp')
if '/*DATA*/' in t:
    nd = rd('newdata.js'); nd = nd[:nd.index('\n});') + 4]
    t = t.replace('/*DATA*/', data + '\n' + nd + '\n' + rd('plan39.js') + '\n' + rd('free.js') + '\n' + rd('benzon.js'))
# bộ thẻ/câu hỏi sinh lý gốc của template chuyển sang khóa tuần 9
t = t.replace('const CARDS = {\n1:[', 'const CARDS = {\n9:[', 1).replace('const QUIZ = {\n1:[', 'const QUIZ = {\n9:[', 1)
if 'CARDS[1] = [' not in t:
    t = t.replace('/*LESSONS*/', rd('w1.js') + '\n/*LESSONS*/', 1)
t = t.replace('/*LESSONS*/', rd('lessons.js') + '\n' + rd('week2.js'), 1)

# 3) Kiểm tra cú pháp JS nếu có Node
m = re.search(r'<script>(.*)</script>', t, re.S)
if m and shutil.which('node'):
    tb = os.path.join(D, '_check.js'); open(tb, 'w', encoding='utf-8').write(m.group(1))
    r = subprocess.run(['node', '--check', tb])
    os.remove(tb)
    if r.returncode != 0:
        sys.exit('Lỗi cú pháp JS — dừng, không ghi file.')

# 4) Dựng <head> sạch (không font ngoài: render ngay, chạy offline) rồi ghi ../index.html
HEAD = '''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>PainPath — Học điều trị đau mạn tính</title>
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#5d59d8">
<link rel="icon" href="icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="PainPath">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="mobile-web-app-capable" content="yes">
'''
TAIL = '\n<script>\nif("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));}\n</script>\n</body>\n</html>\n'
guts = t[t.index('<style>'):]
guts = guts.replace('<style>', '<style>\nhtml,body{margin:0;padding:0}\n', 1).replace('</style>', '</style>\n</head>\n<body>', 1)
open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8').write(HEAD + guts.rstrip() + TAIL)

# 5) Tăng phiên bản service worker nếu có 'bump'
swp = os.path.join(ROOT, 'sw.js')
sw = open(swp, encoding='utf-8').read()
v = int(re.search(r'painpath-v(\d+)', sw).group(1))
if len(sys.argv) > 1 and sys.argv[1] == 'bump':
    sw = sw.replace(f'painpath-v{v}', f'painpath-v{v + 1}')
    open(swp, 'w', encoding='utf-8').write(sw); v += 1
print(f'Đã build ../index.html — service worker phiên bản painpath-v{v}')
