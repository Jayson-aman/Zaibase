"""動画（縦 1080×1920・無音・字幕つき）を、アプリの実際の画面と字幕から組み立てる共通部品。
build_video_a45.py・build_video_b50.py が使う。Pillow と imageio-ffmpeg が要る。
字幕は上から 260〜560px に置く（リールのUIが重なる上下の帯を避ける）。"""
import os, subprocess, imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1080, 1920
FONT = '/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf'
BROWN, CREAM, ORANGE, INK, WHITE = (107, 66, 38), (250, 247, 242), (181, 98, 46), (62, 49, 38), (255, 255, 255)
SOFT, PEACH = (232, 200, 170), (255, 214, 170)
font = lambda n: ImageFont.truetype(FONT, n)

def tc(d, y, s, size, fill, stroke=2):
    ft = font(size); w = d.textlength(s, font=ft)
    d.text(((W - w) / 2, y), s, font=ft, fill=fill, stroke_width=stroke, stroke_fill=fill)

def framed(shot, crop_top, crop_h, width):
    im = Image.open(os.path.join(HERE, 'screens', shot)).convert('RGB')
    im = im.crop((0, crop_top, im.width, min(im.height, crop_top + crop_h)))
    h = int(im.height * width / im.width); im = im.resize((width, h), Image.LANCZOS)
    pad = 14; fr = Image.new('RGB', (width + pad * 2, h + pad * 2), (43, 36, 32))
    m = Image.new('L', fr.size, 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, *fr.size), 46, fill=255)
    fr.paste(im, (pad, pad))
    return fr, m

def put(base, fm, x, y):
    fr, m = fm
    sh = Image.new('RGBA', base.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((x + 8, y + 14, x + fr.width + 8, y + fr.height + 14), 46, fill=(0, 0, 0, 60))
    base.paste(Image.alpha_composite(base.convert('RGBA'), sh).convert('RGB'))
    base.paste(fr, (x, y), m)

def text_scene(bg, lines):
    """lines = [(y, 文字, サイズ, 色, 太さ)]"""
    im = Image.new('RGB', (W, H), bg); d = ImageDraw.Draw(im)
    for y, s, size, col, st in lines: tc(d, y, s, size, col, st)
    return im

def phone_scene(lines, shot, crop_top, crop_h, width=760, y=600):
    im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
    for yy, s, size, col, st in lines: tc(d, yy, s, size, col, st)
    fm = framed(shot, crop_top, crop_h, width); put(im, fm, (W - fm[0].width) // 2, y)
    return im

def three_phones(lines, shots, labels, tail=None):
    im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
    for yy, s, size, col, st in lines: tc(d, yy, s, size, col, st)
    x0, gap, w3 = 41, 22, 290
    for k, (shot, label) in enumerate(zip(shots, labels)):
        fm = framed(shot, 110, 1500, w3); px = x0 + k * (w3 + 28 + gap); put(im, fm, px, 650)
        lw = d.textlength(label, font=font(44)); d.text((px + (w3 + 28 - lw) / 2, 650 + fm[0].height + 24), label, font=font(44), fill=INK, stroke_width=1, stroke_fill=INK)
    if tail: tc(d, 1290, tail, 56, ORANGE, 2)
    return im

def end_card(lines, cta='詳しくは プロフィールのリンクから', url='exam.zaibase.group', y_cta=1330, cta_size=40):
    im = text_scene(BROWN, lines); d = ImageDraw.Draw(im)
    d.rounded_rectangle((150, y_cta, W - 150, y_cta + 130), 65, fill=ORANGE)
    tc(d, y_cta + 30, cta, cta_size, WHITE, 1); tc(d, y_cta + 170, url, 36 if len(url) > 20 else 40, SOFT, 1)
    tc(d, y_cta + 250, '※無料でお試しできるのは一部です。', 30, SOFT, 1); tc(d, y_cta + 296, '続きは月額プラン（Pro／Max）', 30, SOFT, 1)
    return im

class Reel:
    def __init__(self, name, total):
        self.name, self.total, self.scenes = name, total, []
        self.tmp = f'/tmp/{name}_frames'; os.makedirs(self.tmp, exist_ok=True)
    def add(self, im, dur, x=0.35):
        p = f'{self.tmp}/s{len(self.scenes):02d}.png'; im.save(p); self.scenes.append([p, dur, x])
    def build(self, out):
        sc = self.scenes
        # 合計が total になるよう、最後の場面の長さを調整する
        t = sc[0][1]
        for p, dur, x in sc[1:-1]: t += dur - x
        sc[-1][1] = round(self.total - t + sc[-1][2], 3)
        assert sc[-1][1] >= 4.0, f'最後の場面が短すぎる（{sc[-1][1]}秒）。他の場面を短くすること'
        ff = imageio_ffmpeg.get_ffmpeg_exe(); cmd = [ff, '-y']
        for p, dur, x in sc: cmd += ['-loop', '1', '-framerate', '30', '-t', str(dur), '-i', p]
        cmd += ['-f', 'lavfi', '-t', str(self.total + 5), '-i', 'anullsrc=r=44100:cl=stereo']
        parts = []; last = '[0:v]'; t = sc[0][1]
        for i in range(1, len(sc)):
            x = sc[i][2]; off = round(t - x, 3); o = f'[v{i}]'
            parts.append(f'{last}[{i}:v]xfade=transition=fade:duration={x}:offset={off}{o}'); last = o; t = t - x + sc[i][1]
        cmd += ['-filter_complex', ';'.join(parts) + f';{last}format=yuv420p[v]', '-map', '[v]', '-map', f'{len(sc)}:a',
                '-t', str(self.total), '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '64k', '-shortest', out]
        subprocess.run(cmd, check=True, capture_output=True)
        print('✓', out, f'{self.total}秒（最後の場面 {sc[-1][1]}秒）', f'{os.path.getsize(out)/1e6:.1f}MB')
