#!/usr/bin/env python3
"""動画B「定期テストの教科書」（約26秒・縦 9:16・無音）を、アプリの画面と字幕から組み立てる。

使い方：python3 build_video_b.py   （imageio-ffmpeg と Pillow が要る。画面は screens/ にある実際のアプリ画面）
出力：B_teiki_textbook_26s.mp4（1080×1920・30fps・音声は無音のトラックつき）
動く図解は、実際の画面を1枚ずつ撮った8枚（screens/B_sansu_slideNN.png）を、約0.9秒ずつ切りかえて見せている。
字幕は上から 260〜560px に置いた（リールのUIが重なる上下の帯を避ける）。
"""
import os, subprocess, imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'B_teiki_textbook_26s.mp4')
TMP = '/tmp/video_b'; os.makedirs(TMP, exist_ok=True)
W, H = 1080, 1920
FONT = '/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf'
BROWN, CREAM, ORANGE, INK, WHITE = (107, 66, 38), (250, 247, 242), (181, 98, 46), (62, 49, 38), (255, 255, 255)
SOFT = (232, 200, 170)
f = lambda n: ImageFont.truetype(FONT, n)

def tc(d, y, s, size, fill, stroke=2):
    ft = f(size); w = d.textlength(s, font=ft)
    d.text(((W - w) / 2, y), s, font=ft, fill=fill, stroke_width=stroke, stroke_fill=fill)

def framed(shot, crop_top, crop_h, width):
    im = Image.open(os.path.join(HERE, 'screens', shot)).convert('RGB')
    im = im.crop((0, crop_top, im.width, min(im.height, crop_top + crop_h)))
    h = int(im.height * width / im.width); im = im.resize((width, h), Image.LANCZOS)
    pad = 14; fr = Image.new('RGB', (width + pad * 2, h + pad * 2), (43, 36, 32))
    m = Image.new('L', fr.size, 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, *fr.size), 46, fill=255)
    fr.paste(im, (pad, pad))
    return fr, m

def put(base, fr_m, x, y):
    fr, m = fr_m
    sh = Image.new('RGBA', base.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((x + 8, y + 14, x + fr.width + 8, y + fr.height + 14), 46, fill=(0, 0, 0, 60))
    base.paste(Image.alpha_composite(base.convert('RGBA'), sh).convert('RGB'))
    base.paste(fr, (x, y), m)

def cream_scene(lines, shot, crop_top, crop_h, width=760, y=600):
    im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
    for yy, s, size, col, st in lines: tc(d, yy, s, size, col, st)
    fm = framed(shot, crop_top, crop_h, width); put(im, fm, (W - fm[0].width) // 2, y)
    return im

scenes = []  # (画像, 長さ, 前の場面とのフェード秒)
def add(im, dur, x=0.35):
    p = f'{TMP}/s{len(scenes)}.png'; im.save(p); scenes.append((p, dur, x))

# 1 問いかけ
im = Image.new('RGB', (W, H), BROWN); d = ImageDraw.Draw(im)
tc(d, 600, '「教科書を読んでも、', 66, WHITE); tc(d, 710, 'わからない」と言われたら', 66, WHITE)
tc(d, 1500, 'Zaibase受験', 44, SOFT, 1)
add(im, 3.2)

# 2 定期テストの教科書（一覧）
add(cream_scene([(260, '定期テストの教科書', 76, ORANGE, 3), (368, '中1〜中3・5教科', 60, INK, 2)],
                '01_teiki_list_j2_sansu.png', 168, 1500, 760, 560), 3.6)

# 3 動く図解（実際の画面を1枚ずつ切りかえる）
cap3 = [(250, '動く図解で、', 70, INK, 2), (350, '1枚ずつ「なぜ？」まで', 80, ORANGE, 3)]
for i in range(1, 9):
    add(cream_scene(cap3, f'B_sansu_slide{i:02d}.png', 110, 1500, 760, 560), 0.95, 0.35 if i == 1 else 0.12)

# 4 5教科（理科・英語・社会の画面を並べる）
im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
tc(d, 250, '数学・国語・理科・社会・英語', 56, INK, 2); tc(d, 340, 'すべての教科に', 66, INK, 2); tc(d, 440, '動く図解', 92, ORANGE, 3)
x0, gap, w3 = 41, 22, 290
for k, (shot, label) in enumerate([('06_rika_force_slide05.png', '理科'), ('07_eigo_futeishi_slide06.png', '英語'), ('08_shakai_sanken_slide07.png', '社会')]):
    fm = framed(shot, 110, 1500, w3); px = x0 + k * (w3 + 28 + gap); put(im, fm, px, 650)
    lw = d.textlength(label, font=f(44)); d.text((px + (w3 + 28 - lw) / 2, 650 + fm[0].height + 24), label, font=f(44), fill=INK, stroke_width=1, stroke_fill=INK)
tc(d, 1290, '中1〜中3・全51単元', 56, ORANGE, 2)
add(im, 4.0)

# 5 やさしい問題から（基本問題）
add(cream_scene([(250, 'やさしい問題から。', 70, INK, 2), (350, 'できたら次のステップへ', 70, ORANGE, 3)],
                '03_practice_step1.png', 770, 1350, 760, 600), 4.4)

# 6 最後の案内
im = Image.new('RGB', (W, H), BROWN); d = ImageDraw.Draw(im)
tc(d, 520, '定期テストの教科書', 74, WHITE); tc(d, 630, '動く図解 ＋ 基本問題750問', 56, (255, 214, 170), 2)
tc(d, 800, 'まずは無料で、', 70, WHITE); tc(d, 900, '試してみてください', 70, WHITE)
tc(d, 1120, 'Zaibase受験', 60, WHITE); tc(d, 1210, '中学受験・高校受験', 42, SOFT, 1)
d.rounded_rectangle((150, 1330, W - 150, 1460), 65, fill=ORANGE)
tc(d, 1360, '詳しくは プロフィールのリンクから', 40, WHITE, 1); tc(d, 1500, 'exam.zaibase.group', 40, SOFT, 1)
tc(d, 1580, '※無料でお試しできるのは一部です。', 30, SOFT, 1); tc(d, 1626, '続きは月額プラン（Pro／Max）', 30, SOFT, 1)
add(im, 4.2)

ff = imageio_ffmpeg.get_ffmpeg_exe()
cmd = [ff, '-y']
for p, dur, x in scenes: cmd += ['-loop', '1', '-framerate', '30', '-t', str(dur), '-i', p]
cmd += ['-f', 'lavfi', '-t', '40', '-i', 'anullsrc=r=44100:cl=stereo']
parts = []; last = '[0:v]'; t = scenes[0][1]
for i in range(1, len(scenes)):
    x = scenes[i][2]; off = round(t - x, 3); out = f'[v{i}]'
    parts.append(f'{last}[{i}:v]xfade=transition=fade:duration={x}:offset={off}{out}'); last = out; t = t - x + scenes[i][1]
total = round(t, 2)
cmd += ['-filter_complex', ';'.join(parts) + f';{last}format=yuv420p[v]', '-map', '[v]', '-map', f'{len(scenes)}:a',
        '-t', str(total), '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '64k', '-shortest', OUT]
subprocess.run(cmd, check=True, capture_output=True)
print('✓', OUT, f'{total}秒', f'{os.path.getsize(OUT)/1e6:.1f}MB')
