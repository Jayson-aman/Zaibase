#!/usr/bin/env python3
"""動画A（45秒版）「やる気のない日は、1問だけでOK」。実際のアプリの画面と字幕。無音。
使い方：python3 build_video_a45.py　出力：A_yaruki_1mon_45s.mp4"""
import os, sys
from vlib import *

# 使い方：python3 build_video_a45.py [--hook 1〜4] [--app]
#   --hook : 冒頭3〜4秒の文を差しかえる（1＝もとの文／2＝仕事も炊事も洗濯も／3＝通分のやり方、親も忘れてます／4＝言う体力が残ってない）
#   --app  : 最後の画面を App Store 向けにする（2.2.10 の公開後に使う）
HOOK = int(sys.argv[sys.argv.index('--hook') + 1]) if '--hook' in sys.argv else 1
APP = '--app' in sys.argv
HOOKS = {
    1: [(600, '「勉強しなさい」って、', 66, WHITE, 2), (710, 'また言いそうになった日へ', 66, WHITE, 2)],
    2: [(560, '仕事も、炊事も、洗濯も。', 66, WHITE, 2), (680, '宿題の面倒まで見る', 66, PEACH, 2), (780, '余裕、ない。', 66, PEACH, 2)],
    3: [(600, '通分のやり方、', 76, WHITE, 2), (720, '親も忘れてます。', 76, PEACH, 3)],
    4: [(560, '「勉強しなさい」を', 66, WHITE, 2), (670, '言う体力が、', 66, WHITE, 2), (780, 'もう残ってない。', 70, PEACH, 3)],
}

r = Reel(f'a45_{HOOK}{"a" if APP else ""}', 45.0)
r.add(text_scene(BROWN, HOOKS[HOOK] + [(1500, 'Zaibase受験', 44, SOFT, 1)]), 4.0)
# 悩み（1行ずつ増える）
L1 = (480, '「やりなさい」と言うたびに、', 54, INK, 2), (560, 'ケンカになる。', 54, INK, 2)
L2 = (800, '塾の送迎で、', 54, INK, 2), (880, '親のほうがヘトヘト。', 54, INK, 2)
L3 = (1120, '問題集を買っても、', 54, INK, 2), (1200, 'うまく説明できない。', 54, INK, 2)
r.add(text_scene(CREAM, list(L1)), 2.2); r.add(text_scene(CREAM, list(L1 + L2)), 2.2, 0.2); r.add(text_scene(CREAM, list(L1 + L2 + L3)), 2.6, 0.2)
r.add(text_scene(BROWN, [(560, 'そんなご家庭のために', 58, SOFT, 1), (700, '「今日も1問やった」を', 66, WHITE, 2), (800, 'いちばん大事にした', 66, WHITE, 2), (900, '学習アプリです', 66, WHITE, 2), (1150, 'Zaibase受験', 56, PEACH, 2)]), 5.0)
r.add(phone_scene([(250, 'やる気のない日は、', 70, INK, 2), (350, '1問だけでOK', 96, ORANGE, 3), (480, '1問できたら、そこで終わってOK', 44, INK, 1)], '03_practice_step1.png', 770, 1350, 760, 600), 6.0)
r.add(phone_scene([(250, '答えを選ぶと、', 70, INK, 2), (350, 'すぐに「なんで？」が', 80, ORANGE, 3), (460, 'わかります', 62, INK, 2)], '04_practice_correct.png', 168, 1500, 760, 600), 6.0)
cap = [(250, '答えのあとに「なんで？」まで、', 60, INK, 2), (350, '動くスライドで', 84, ORANGE, 3)]
for i in range(1, 9): r.add(phone_scene(cap, f'B_sansu_slide{i:02d}.png', 110, 1500, 760, 560), 1.0, 0.35 if i == 1 else 0.12)
r.add(phone_scene([(250, 'やさしい問題から。', 70, INK, 2), (350, 'できたら次のステップへ', 70, ORANGE, 3), (460, 'むずかしければ、前にもどれます', 44, INK, 1)], '05_practice_rika_step1.png', 770, 1350, 760, 620), 5.0)
r.add(text_scene(CREAM, [(640, '中学受験にも、', 70, INK, 2), (750, '高校受験にも。', 70, INK, 2), (930, '5教科の問題と教科書', 60, ORANGE, 3)]), 3.5)
END = [(520, 'まずは無料で、', 76, WHITE, 2), (630, '1問だけ。', 100, PEACH, 3), (880, 'Zaibase受験', 64, WHITE, 2), (980, '中学受験・高校受験', 44, SOFT, 1)]
r.add(end_card(END, cta='App Storeで無料ダウンロード', url='App Storeで「Zaibase受験」を検索', cta_size=38) if APP else end_card(END), 6.0)
name = 'A_yaruki_1mon_45s' + (f'_hook{HOOK}' if HOOK != 1 else '') + ('_app' if APP else '') + '.mp4'
r.build(os.path.join(HERE, name))
