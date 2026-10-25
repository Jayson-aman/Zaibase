#!/usr/bin/env python3
"""動画C（約30秒）「通分のやり方、親も忘れてます。」算数のおさらいと動く図解を見せる。実際のアプリの画面と字幕。無音。
使い方：python3 build_video_c_sansu.py　出力：C_sansu_osarai_30s.mp4"""
import os
from vlib import *

r = Reel('c30', 30.0)
r.add(text_scene(BROWN, [(600, '通分のやり方、', 76, WHITE, 2), (720, '親も忘れてます。', 76, PEACH, 3), (1500, 'Zaibase受験', 44, SOFT, 1)]), 3.4)
r.add(text_scene(CREAM, [(560, 'でも、大丈夫。', 76, INK, 2), (700, '問題にも、単元にも、', 58, INK, 2), (790, '「おさらい」が出ます', 70, ORANGE, 3)]), 3.4)
r.add(phone_scene([(250, '昔習ったことを、', 66, INK, 2), (350, 'その場で思い出せる', 80, ORANGE, 3)], 'D_sansu_review_open.png', 1020, 1260, 760, 560), 5.6)
cap = [(250, '動く図解で、', 70, INK, 2), (350, '1枚ずつ「なぜ？」まで', 80, ORANGE, 3)]
for i in range(1, 9): r.add(phone_scene(cap, f'B_sansu_slide{i:02d}.png', 110, 1500, 760, 560), 1.0, 0.35 if i == 1 else 0.12)
r.add(phone_scene([(250, 'やさしい問題から。', 70, INK, 2), (350, 'できたら次のステップへ', 70, ORANGE, 3)], '03_practice_step1.png', 770, 1350, 760, 600), 4.4)
r.add(end_card([(520, '算数・数学も、', 70, WHITE, 2), (620, '国語・理科・社会・英語も。', 60, WHITE, 2), (780, 'まずは無料で、試してみてください', 52, PEACH, 2), (1000, 'Zaibase受験', 64, WHITE, 2), (1100, '中学受験・高校受験', 42, SOFT, 1)]), 6.0)
r.build(os.path.join(HERE, 'C_sansu_osarai_30s.mp4'))
