#!/usr/bin/env python3
"""動画B（50秒版）「定期テストの教科書」。実際のアプリの画面と字幕。無音。
使い方：python3 build_video_b50.py　出力：B_teiki_textbook_50s.mp4"""
import os
from vlib import *

r = Reel('b50', 50.0)
r.add(text_scene(BROWN, [(600, '「教科書を読んでも、', 66, WHITE, 2), (710, 'わからない」と言われたら', 66, WHITE, 2), (1500, 'Zaibase受験', 44, SOFT, 1)]), 3.8)
L1 = (500, '定期テスト前。', 60, INK, 2),
L2 = (700, '「ここがわからない」を、', 60, INK, 2), (790, 'そのままにしていませんか？', 60, INK, 2)
r.add(text_scene(CREAM, list(L1)), 2.0); r.add(text_scene(CREAM, list(L1 + L2)), 3.0, 0.2)
r.add(phone_scene([(260, '定期テストの教科書', 76, ORANGE, 3), (368, '中1〜中3・5教科', 60, INK, 2)], '01_teiki_list_j2_sansu.png', 168, 1500, 760, 560), 4.2)
cap = [(250, '動く図解で、', 70, INK, 2), (350, '1枚ずつ「なぜ？」まで', 80, ORANGE, 3)]
for i in range(1, 9): r.add(phone_scene(cap, f'B_sansu_slide{i:02d}.png', 110, 1500, 760, 560), 1.3, 0.35 if i == 1 else 0.12)
r.add(phone_scene([(250, '身近な具体例で、', 70, INK, 2), (350, '途中式まで', 84, ORANGE, 3)], 'C_sansu_gutairei.png', 0, 1500, 760, 560), 4.6)
r.add(phone_scene([(250, 'テストに出るポイントも、', 62, INK, 2), (350, 'まとめて確認', 84, ORANGE, 3)], 'C_sansu_points.png', 0, 1500, 760, 560), 4.2)
r.add(three_phones([(250, '数学・国語・理科・社会・英語', 56, INK, 2), (340, 'すべての教科に', 66, INK, 2), (440, '動く図解', 92, ORANGE, 3)],
                   ['06_rika_force_slide05.png', '07_eigo_futeishi_slide06.png', '08_shakai_sanken_slide07.png'], ['理科', '英語', '社会'], '中1〜中3・全51単元'), 4.2)
r.add(phone_scene([(250, 'やさしい問題から。', 70, INK, 2), (350, 'できたら次のステップへ', 70, ORANGE, 3)], '03_practice_step1.png', 770, 1350, 760, 600), 4.2)
r.add(phone_scene([(250, '選んで答えると、', 70, INK, 2), (350, 'すぐに解説', 90, ORANGE, 3)], '04_practice_correct.png', 168, 1500, 760, 600), 4.0)
r.add(text_scene(BROWN, [(560, '全51単元', 92, PEACH, 3), (720, '動く図解 683枚', 70, WHITE, 2), (830, '基本問題 750問', 70, WHITE, 2), (1100, '中1〜中3・5教科', 50, SOFT, 1)]), 3.4)
r.add(end_card([(520, '定期テストの教科書', 74, WHITE, 2), (630, '動く図解 ＋ 基本問題750問', 56, PEACH, 2), (800, 'まずは無料で、', 70, WHITE, 2), (900, '試してみてください', 70, WHITE, 2), (1120, 'Zaibase受験', 60, WHITE, 2), (1210, '中学受験・高校受験', 42, SOFT, 1)], y_cta=1330), 6.0)
r.build(os.path.join(HERE, 'B_teiki_textbook_50s.mp4'))
