#!/usr/bin/env python3
"""動画A「やる気のない日は、1問だけでOK」（15秒・縦 9:16・無音）を、アプリの画面と字幕から組み立てる。

使い方：python3 build_video_a.py   （imageio-ffmpeg と Pillow が要る。画面は screens/ にある実際のアプリ画面）
出力：A_yaruki_1mon_15s.mp4（1080×1920・30fps・音声は無音のトラックつき）
字幕は画面に焼きこんである（音なしで見られる）。Instagram のリールの UI が重なる上下の帯を避けて、字幕は上から 260〜560px に置いた。
"""
import os, subprocess, imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'A_yaruki_1mon_15s.mp4')
TMP = '/tmp/video_a'; os.makedirs(TMP, exist_ok=True)
W, H = 1080, 1920
FONT = '/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf'
BROWN, CREAM, ORANGE, INK, WHITE = (107, 66, 38), (250, 247, 242), (181, 98, 46), (62, 49, 38), (255, 255, 255)
f = lambda n: ImageFont.truetype(FONT, n)

def text_center(d, y, s, size, fill, stroke=2):
    ft = f(size); w = d.textlength(s, font=ft)
    d.text(((W - w) / 2, y), s, font=ft, fill=fill, stroke_width=stroke, stroke_fill=fill)

def phone(base, shot, crop_top, crop_h, width=760, y=600):
    im = Image.open(os.path.join(HERE, 'screens', shot)).convert('RGB')
    im = im.crop((0, crop_top, im.width, crop_top + crop_h))
    h = int(im.height * width / im.width); im = im.resize((width, h), Image.LANCZOS)
    pad = 14; frame = Image.new('RGB', (width + pad * 2, h + pad * 2), (43, 36, 32))
    m = Image.new('L', frame.size, 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, *frame.size), 46, fill=255)
    frame.paste(im, (pad, pad))
    x = (W - frame.width) // 2
    shadow = Image.new('RGBA', base.size, (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((x + 8, y + 14, x + frame.width + 8, y + frame.height + 14), 46, fill=(0, 0, 0, 60))
    base.paste(Image.alpha_composite(base.convert('RGBA'), shadow).convert('RGB'))
    base.paste(frame, (x, y), m)

scenes = []
# 1 共感のひとこと
im = Image.new('RGB', (W, H), BROWN); d = ImageDraw.Draw(im)
text_center(d, 640, '「勉強しなさい」って、', 66, WHITE)
text_center(d, 750, 'また言いそうになった日へ', 66, WHITE)
text_center(d, 1500, 'Zaibase受験', 44, (232, 200, 170), 1)
im.save(f'{TMP}/s1.png'); scenes.append((f'{TMP}/s1.png', 3.4))

# 2 1問だけでOK
im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
text_center(d, 260, 'やる気のない日は、', 70, INK)
text_center(d, 360, '1問だけでOK', 96, ORANGE, 3)
phone(im, '03_practice_step1.png', 770, 1350, 760, 600)
im.save(f'{TMP}/s2.png'); scenes.append((f'{TMP}/s2.png', 4.2))

# 3 なんで？まで
im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
text_center(d, 250, 'まちがえても大丈夫。', 70, INK)
text_center(d, 350, '「なんで？」まで', 84, ORANGE, 3)
text_center(d, 462, '教えてくれます', 62, INK)
phone(im, '04_practice_correct.png', 168, 1500, 760, 600)
im.save(f'{TMP}/s3.png'); scenes.append((f'{TMP}/s3.png', 4.2))

# 4 最後の案内
im = Image.new('RGB', (W, H), BROWN); d = ImageDraw.Draw(im)
text_center(d, 560, 'まずは無料で、', 76, WHITE)
text_center(d, 670, '1問だけ。', 100, (255, 214, 170), 3)
text_center(d, 930, 'Zaibase受験', 64, WHITE)
text_center(d, 1030, '中学受験・高校受験', 44, (232, 200, 170), 1)
pill = (150, 1160, W - 150, 1290); d.rounded_rectangle(pill, 65, fill=ORANGE)
text_center(d, 1190, '詳しくは プロフィールのリンクから', 40, WHITE, 1)
text_center(d, 1340, 'exam.zaibase.group', 40, (232, 200, 170), 1)
im.save(f'{TMP}/s4.png'); scenes.append((f'{TMP}/s4.png', 3.8))

# ffmpeg：場面を 0.4 秒のフェードでつなぐ
ff = imageio_ffmpeg.get_ffmpeg_exe(); X = 0.4
cmd = [ff, '-y']
for p, dur in scenes: cmd += ['-loop', '1', '-framerate', '30', '-t', str(dur), '-i', p]
cmd += ['-f', 'lavfi', '-t', '20', '-i', 'anullsrc=r=44100:cl=stereo']
parts = []; last = '[0:v]'; t = scenes[0][1]
for i in range(1, len(scenes)):
    off = round(t - X, 2); out = f'[v{i}]'
    parts.append(f'{last}[{i}:v]xfade=transition=fade:duration={X}:offset={off}{out}'); last = out; t = t - X + scenes[i][1]
total = round(t, 2)
cmd += ['-filter_complex', ';'.join(parts) + f';{last}format=yuv420p[v]', '-map', '[v]', '-map', f'{len(scenes)}:a',
        '-t', str(total), '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '64k', '-shortest', OUT]
subprocess.run(cmd, check=True, capture_output=True)
print('✓', OUT, f'{total}秒', f'{os.path.getsize(OUT)/1e6:.1f}MB')
