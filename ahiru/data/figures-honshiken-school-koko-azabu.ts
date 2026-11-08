// 本試験対策（学校別）麻布高校 準拠の自作問題の動く図解。各問、状況→手がかり→理由→計算→答え→確かめ（7枚以上）。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
 "honshiken_school_koko_azabu_sansu_01": {
  "caption": "答え　0",
  "slides": [
   {
    "note": "a＝2√3＋1 のとき、a²−2a−11 の値を求める問題。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "a ＝ 2√3 ＋ 1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "a² − 2a − 11 の値は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "そのまま代入すると、(2√3＋1)² を展開しなければならず計算が長い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "代入すると (2√3＋1)² が出る",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "展開すると √ が残って面倒",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "もっと楽な道はないか",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "a²−2a は (a−1)²＝a²−2a＋1 にそっくり。a−1 をつくれば 2乗で √ が消える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "(a−1)² ＝ a² − 2a ＋ 1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "だから a² − 2a ＝ (a−1)² − 1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "式を書きかえる。a²−2a−11＝(a−1)²−1−11＝(a−1)²−12。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "a² − 2a − 11",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "＝ (a−1)² − 1 − 11",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "＝ (a−1)² − 12",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "a−1＝(2√3＋1)−1＝2√3。これを2乗すると (2√3)²＝4×3＝12。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "a − 1 ＝ 2√3",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "(a−1)² ＝ (2√3)² ＝ 12",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(a−1)²−12＝12−12＝0。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "12 − 12 ＝ 0",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "答え　0",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "a² を展開して確かめる。13＋4√3 から 4√3＋2 と 11 を引くと 0 になり、一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "a² ＝ 13 ＋ 4√3",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "2a ＝ 4√3 ＋ 2",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "13＋4√3−4√3−2−11 ＝ 0",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "よくあるまちがいは、(2√3＋1)² のまん中の項 4√3 を落とすこと。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "(2√3＋1)² ≠ 12 ＋ 1",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "まん中の 2×2√3×1 ＝ 4√3",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "これを落とさない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_02": {
  "caption": "答え　4個（4・9・25・49）",
  "slides": [
   {
    "note": "1〜100 の整数で、約数がちょうど 3 個の数を数える問題。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "1 から 100 までの整数",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "約数がちょうど 3 個",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "何個ある？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "どんな数も 1 と自分自身は約数。残りの約数はひとつだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "約数は 1、p、N の 3 つ",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "（N が求める数、p はそのまん中）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "N÷p も約数。1 でも N でもないので p。だから N＝p×p。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "N ÷ p も約数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "N÷p ＝ 1 なら N＝p（2個になる）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "N÷p ＝ p なので N ＝ p × p",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "p が素数でないと、p の約数がふえて 3 個をこえる。例：16＝4×4 の約数は 5 個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "p が 4 なら N ＝ 16",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "16 の約数：1、2、4、8、16",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "5個だからだめ → p は素数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "p×p が 100 以下の素数 p を探す。p は 10 以下の素数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "p × p ≦ 100 より p ≦ 10",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "10 以下の素数：2、3、5、7",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "4、9、25、49 の 4 個。11×11＝121 は 100 をこえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "2×2＝4、3×3＝9",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "5×5＝25、7×7＝49",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "答え　4個",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "49 の約数は 1、7、49。ほかの数も 3 個。36 は 9 個で不適。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "49 → 1、7、49（3個）",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "25 → 1、5、25（3個）",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "36 → 9個（だめ）",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "素数でない数の2乗（16・36 など）を数えてしまうまちがい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "16、36、64、81 は不適",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "条件は「素数の2乗」だけ",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_03": {
  "caption": "答え　1/5",
  "slides": [
   {
    "note": "赤4個・白2個を 1 個ずつ取り出す。白が 2 個そろった時点でやめる。ちょうど 4 回目で止まる確率は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "赤4個、白2個（もどさない）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "白が2個そろったらやめる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "ちょうど4回目で止まる確率",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "6 個ぜんぶ取り出すと考えると、1列に並べることと同じ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "全部取り出す ＝ 6個を1列に並べる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "色だけ見れば、白の位置で決まる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "白玉が出る位置の組を考える。たとえば 1 番目と 4 番目なら、「白赤赤白赤赤」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 40,
      "cy": 110,
      "r": 17,
      "text": "白",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 110,
      "r": 17,
      "text": "2",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 136,
      "cy": 110,
      "r": 17,
      "text": "3",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 184,
      "cy": 110,
      "r": 17,
      "text": "白",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 110,
      "r": 17,
      "text": "5",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 280,
      "cy": 110,
      "r": 17,
      "text": "6",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "label",
      "x": 160,
      "y": 170,
      "text": "白が 1 番目と 4 番目の例",
      "size": 13,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 200,
      "text": "位置の組でぜんぶ決まる",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "位置の組は、(1,2)(1,3)…と数えて、5＋4＋3＋2＋1＝15 通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 50,
      "w": 280,
      "h": 30,
      "text": "1番目が白：5通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2番目が白：4通り、3番目：3通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 122,
      "w": 280,
      "h": 30,
      "text": "4番目：2通り、5番目：1通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 30,
      "text": "合計　15通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "4 回目で白がそろうのは、白の 2 個目が 4 番目のとき。1 個目は 1・2・3 番目のどれか。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 40,
      "cy": 110,
      "r": 17,
      "text": "1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 110,
      "r": 17,
      "text": "白",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 136,
      "cy": 110,
      "r": 17,
      "text": "3",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 184,
      "cy": 110,
      "r": 17,
      "text": "白",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 110,
      "r": 17,
      "text": "5",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "circle",
      "cx": 280,
      "cy": 110,
      "r": 17,
      "text": "6",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "label",
      "x": 160,
      "y": 170,
      "text": "2個目の白は 4 番目",
      "size": 13,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 200,
      "text": "1個目：1・2・3番目のどれか → 3通り",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "3÷15＝1/5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "条件に合う組　3通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "全部の組　15通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "3 ÷ 15 ＝ 1/5",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "順に確率をかけて調べると、3 通りそれぞれ 1/15。合計 3/15＝1/5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "白赤赤白：2/6×4/5×3/4×1/3＝1/15",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "赤白赤白：1/15、赤赤白白：1/15",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "3つ合わせて 3/15 ＝ 1/5",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "1 通りだけ数えてしまうまちがい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "白赤赤白 だけだと 1/15",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "白の1個目は 1〜3 番目のどこでも OK",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "→ 3 通り",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_04": {
  "caption": "答え　24個",
  "slides": [
   {
    "note": "円周上に等間隔に並ぶ 8 個の点（正八角形の頂点）。3 点を選んで直角三角形をつくる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 122,
      "r": 78,
      "color": "#0284C7"
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 50,
      "r": 9,
      "text": "1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 92,
      "r": 9,
      "text": "2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 152,
      "r": 9,
      "text": "3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 194,
      "r": 9,
      "text": "4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 194,
      "r": 9,
      "text": "5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 152,
      "r": 9,
      "text": "6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 92,
      "r": 9,
      "text": "7",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 50,
      "r": 9,
      "text": "8",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "直角三角形は何個できる？",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "円に入る三角形で、直径に対する円周角は 90°。逆も成り立つ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "text": "直径に対する円周角 ＝ 90°",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 102,
      "w": 280,
      "h": 36,
      "text": "逆に、三角形の1つの角が\n90° ならその向かいの辺は直径",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "直角三角形をつくるには、まず斜辺になる直径を 1 本決める。例：1 番と 5 番。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 122,
      "r": 78,
      "color": "#0284C7"
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 49.93739646411963,
      "x2": 130.150692275523,
      "y2": 194.06260353588038,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 50,
      "r": 9,
      "text": "1",
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 92,
      "r": 9,
      "text": "2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 152,
      "r": 9,
      "text": "3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 194,
      "r": 9,
      "text": "4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 194,
      "r": 9,
      "text": "5",
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 152,
      "r": 9,
      "text": "6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 92,
      "r": 9,
      "text": "7",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 50,
      "r": 9,
      "text": "8",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "まず直径（斜辺）を決める",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "直径は、向かい合う点の組：1-5、2-6、3-7、4-8 の 4 本。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 122,
      "r": 78,
      "color": "#0284C7"
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 49.93739646411963,
      "x2": 130.150692275523,
      "y2": 194.06260353588038,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.06260353588038,
      "y1": 92.150692275523,
      "x2": 87.93739646411963,
      "y2": 151.849307724477,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.06260353588038,
      "y1": 151.849307724477,
      "x2": 87.93739646411963,
      "y2": 92.150692275523,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 194.06260353588038,
      "x2": 130.15069227552303,
      "y2": 49.93739646411963,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 50,
      "r": 9,
      "text": "1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 92,
      "r": 9,
      "text": "2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 152,
      "r": 9,
      "text": "3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 194,
      "r": 9,
      "text": "4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 194,
      "r": 9,
      "text": "5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 152,
      "r": 9,
      "text": "6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 92,
      "r": 9,
      "text": "7",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 50,
      "r": 9,
      "text": "8",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "直径は 4 本",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "直径 1-5 に、残りの点（たとえば 3 番）を結ぶと直角三角形。残りは 6 個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 122,
      "r": 78,
      "color": "#0284C7"
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 49.93739646411963,
      "x2": 130.150692275523,
      "y2": 194.06260353588038,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 49.93739646411963,
      "x2": 130.150692275523,
      "y2": 194.06260353588038,
      "color": "#16A34A",
      "width": 2
     },
     {
      "t": "line",
      "x1": 130.150692275523,
      "y1": 194.06260353588038,
      "x2": 232.06260353588038,
      "y2": 151.849307724477,
      "color": "#16A34A",
      "width": 2
     },
     {
      "t": "line",
      "x1": 189.849307724477,
      "y1": 49.93739646411963,
      "x2": 232.06260353588038,
      "y2": 151.849307724477,
      "color": "#16A34A",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 50,
      "r": 9,
      "text": "1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 92,
      "r": 9,
      "text": "2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 232,
      "cy": 152,
      "r": 9,
      "text": "3",
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 194,
      "r": 9,
      "text": "4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 194,
      "r": 9,
      "text": "5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 152,
      "r": 9,
      "text": "6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 88,
      "cy": 92,
      "r": 9,
      "text": "7",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 130,
      "cy": 50,
      "r": 9,
      "text": "8",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "残りの点 6 個のどれでも直角",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "直径 4 本 × 残りの点 6 個＝24 個。三角形には直角が 1 つだけなので、重ならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "4 × 6 ＝ 24",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "答え　24個",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "正方形（点が 4 個）でためす。直径 2 本×残り 2 点＝4 個で、実際に全部直角三角形。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "正方形：2 × 2 ＝ 4 個",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "4 点から作れる三角形も 4 個",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "全部直角 → 一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "対角線ぜんぶで数えるのはまちがい。直径になるのは 4 本だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "対角線は 20 本あるが…",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "直径になるのは 4 本だけ",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_05": {
  "caption": "答え　(1) 24　(2) P(−10, 50)",
  "slides": [
   {
    "note": "放物線 y＝(1/2)x² 上に A(−6,18)、B(2,2)。原点を O とする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 3.5,
      "x2": 55.6,
      "y2": 39.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 39.7,
      "x2": 68.2,
      "y2": 72.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.6,
      "x2": 80.8,
      "y2": 102.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 102.3,
      "x2": 93.4,
      "y2": 128.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 128.8,
      "x2": 106.0,
      "y2": 152.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 152.0,
      "x2": 118.6,
      "y2": 172.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 172.0,
      "x2": 131.2,
      "y2": 188.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 188.7,
      "x2": 143.8,
      "y2": 202.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 202.2,
      "x2": 156.4,
      "y2": 212.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 212.5,
      "x2": 169.0,
      "y2": 219.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 219.5,
      "x2": 181.6,
      "y2": 223.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 223.3,
      "x2": 194.2,
      "y2": 223.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 223.8,
      "x2": 206.8,
      "y2": 221.1,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 221.1,
      "x2": 219.4,
      "y2": 215.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 215.2,
      "x2": 232.0,
      "y2": 206.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 206.0,
      "x2": 244.6,
      "y2": 193.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 224,
      "r": 3,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 184,
      "y": 220,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     }
    ]
   },
   {
    "note": "直線 AB の式は y＝−2x＋6。y 軸との交点を C(0,6) とする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 3.5,
      "x2": 55.6,
      "y2": 39.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 39.7,
      "x2": 68.2,
      "y2": 72.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.6,
      "x2": 80.8,
      "y2": 102.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 102.3,
      "x2": 93.4,
      "y2": 128.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 128.8,
      "x2": 106.0,
      "y2": 152.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 152.0,
      "x2": 118.6,
      "y2": 172.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 172.0,
      "x2": 131.2,
      "y2": 188.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 188.7,
      "x2": 143.8,
      "y2": 202.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 202.2,
      "x2": 156.4,
      "y2": 212.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 212.5,
      "x2": 169.0,
      "y2": 219.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 219.5,
      "x2": 181.6,
      "y2": 223.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 223.3,
      "x2": 194.2,
      "y2": 223.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 223.8,
      "x2": 206.8,
      "y2": 221.1,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 221.1,
      "x2": 219.4,
      "y2": 215.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 215.2,
      "x2": 232.0,
      "y2": 206.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 206.0,
      "x2": 244.6,
      "y2": 193.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 92,
      "y1": 144,
      "x2": 232,
      "y2": 224,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 200,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 195,
      "y": 196,
      "text": "C(0,6)",
      "size": 11,
      "color": "#9333EA",
      "bold": true
     }
    ]
   },
   {
    "note": "C で △OAB を 2 つに分ける。△OAC＝6×6÷2＝18、△OCB＝6×2÷2＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 200,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 195,
      "y": 196,
      "text": "C",
      "size": 11,
      "color": "#9333EA",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        190,
        224
       ],
       [
        106,
        152
       ],
       [
        190,
        200
       ]
      ],
      "color": "#16A34A",
      "fill": "#DCFCE7"
     },
     {
      "t": "poly",
      "pts": [
       [
        190,
        224
       ],
       [
        190,
        200
       ],
       [
        218,
        216
       ]
      ],
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "18 ＋ 6 ＝ 24",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "面積の 2 等分は「中線」。AB の中点 M＝(−2,10) と O を結ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 3.5,
      "x2": 55.6,
      "y2": 39.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 39.7,
      "x2": 68.2,
      "y2": 72.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.6,
      "x2": 80.8,
      "y2": 102.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 102.3,
      "x2": 93.4,
      "y2": 128.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 128.8,
      "x2": 106.0,
      "y2": 152.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 152.0,
      "x2": 118.6,
      "y2": 172.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 172.0,
      "x2": 131.2,
      "y2": 188.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 188.7,
      "x2": 143.8,
      "y2": 202.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 202.2,
      "x2": 156.4,
      "y2": 212.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 212.5,
      "x2": 169.0,
      "y2": 219.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 219.5,
      "x2": 181.6,
      "y2": 223.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 223.3,
      "x2": 194.2,
      "y2": 223.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 223.8,
      "x2": 206.8,
      "y2": 221.1,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 221.1,
      "x2": 219.4,
      "y2": 215.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 215.2,
      "x2": 232.0,
      "y2": 206.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 206.0,
      "x2": 244.6,
      "y2": 193.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 106,
      "y1": 152,
      "x2": 218,
      "y2": 216,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 162,
      "cy": 184,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 168,
      "y": 178,
      "text": "M(−2,10)",
      "size": 11,
      "color": "#9333EA",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 224,
      "r": 3,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 184,
      "y": 220,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "AM＝MB なので面積が等しい",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "直線 OM は傾き−5 で y＝−5x。放物線と式を連立する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 3.5,
      "x2": 55.6,
      "y2": 39.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 39.7,
      "x2": 68.2,
      "y2": 72.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.6,
      "x2": 80.8,
      "y2": 102.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 102.3,
      "x2": 93.4,
      "y2": 128.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 128.8,
      "x2": 106.0,
      "y2": 152.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 152.0,
      "x2": 118.6,
      "y2": 172.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 172.0,
      "x2": 131.2,
      "y2": 188.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 188.7,
      "x2": 143.8,
      "y2": 202.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 202.2,
      "x2": 156.4,
      "y2": 212.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 212.5,
      "x2": 169.0,
      "y2": 219.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 219.5,
      "x2": 181.6,
      "y2": 223.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 223.3,
      "x2": 194.2,
      "y2": 223.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 223.8,
      "x2": 206.8,
      "y2": 221.1,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 221.1,
      "x2": 219.4,
      "y2": 215.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 215.2,
      "x2": 232.0,
      "y2": 206.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 206.0,
      "x2": 244.6,
      "y2": 193.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 44.4,
      "y1": 16,
      "x2": 190,
      "y2": 224,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 162,
      "cy": 184,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 168,
      "y": 178,
      "text": "M",
      "size": 11,
      "color": "#9333EA",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "y＝−5x と y＝(1/2)x²",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(1/2)x²＝−5x より x＝0 または −10。P(−10, 50)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 14,
      "y1": 224,
      "x2": 310,
      "y2": 224,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 228,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 194,
      "y": 36,
      "text": "y",
      "size": 11,
      "color": "#6E645C"
     },
     {
      "t": "label",
      "x": 306,
      "y": 220,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 3.5,
      "x2": 55.6,
      "y2": 39.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 39.7,
      "x2": 68.2,
      "y2": 72.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.6,
      "x2": 80.8,
      "y2": 102.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 102.3,
      "x2": 93.4,
      "y2": 128.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 128.8,
      "x2": 106.0,
      "y2": 152.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 152.0,
      "x2": 118.6,
      "y2": 172.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 172.0,
      "x2": 131.2,
      "y2": 188.7,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 188.7,
      "x2": 143.8,
      "y2": 202.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 202.2,
      "x2": 156.4,
      "y2": 212.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 212.5,
      "x2": 169.0,
      "y2": 219.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 219.5,
      "x2": 181.6,
      "y2": 223.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 223.3,
      "x2": 194.2,
      "y2": 223.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 223.8,
      "x2": 206.8,
      "y2": 221.1,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 221.1,
      "x2": 219.4,
      "y2": 215.2,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 215.2,
      "x2": 232.0,
      "y2": 206.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 206.0,
      "x2": 244.6,
      "y2": 193.6,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 152,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 148,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 216,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 210,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 44.4,
      "y1": 16,
      "x2": 190,
      "y2": 224,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 50,
      "cy": 24,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 58,
      "y": 30,
      "text": "P(−10,50)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "(1) 24　(2) P(−10, 50)",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "面積を座標の公式でたしかめる。(−6)×2−18×2＝−48 で、半分の絶対値は 24。P も放物線の式を満たす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "|(−6)×2 − 18×2| ÷ 2 ＝ 24",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "P：(1/2)×(−10)² ＝ 50",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "放物線の上にある",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "2 等分する線を角の 2 等分線などと考えるまちがい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "面積を 2 等分 → 中線",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "（頂点と向かいの辺の中点）",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "角の 2 等分線ではない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_06": {
  "caption": "答え　半径 4cm、DH＝1cm",
  "slides": [
   {
    "note": "△ABC：AB＝13、BC＝14、CA＝15。内接円の半径と、DH の長さを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 222,
      "y2": 200,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 222,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "label",
      "x": 101,
      "y": 38,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 34,
      "y": 206,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 228,
      "y": 206,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 110,
      "y": 222,
      "text": "BC＝14",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 60,
      "y": 125,
      "text": "13",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "label",
      "x": 180,
      "y": 125,
      "text": "15",
      "size": 11,
      "color": "#6E645C"
     }
    ]
   },
   {
    "note": "まず高さ AH を求める。BH＝x とすると 13²−x²＝15²−(14−x)²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 222,
      "y2": 200,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 222,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 105,
      "y1": 44,
      "x2": 105,
      "y2": 200,
      "color": "#9333EA",
      "dashed": true
     },
     {
      "t": "label",
      "x": 101,
      "y": 38,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 34,
      "y": 206,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 228,
      "y": 206,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 109,
      "y": 125,
      "text": "AH",
      "size": 11,
      "color": "#9333EA"
     },
     {
      "t": "label",
      "x": 105,
      "y": 218,
      "text": "H",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "式を整理して x＝5。BH＝5、AH＝12。面積＝14×12÷2＝84。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 50,
      "w": 280,
      "h": 30,
      "text": "169 − x² ＝ 225 − (14−x)²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x ＝ 5 　BH ＝ 5",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 122,
      "w": 280,
      "h": 30,
      "text": "AH² ＝ 169 − 25 ＝ 144 より AH ＝ 12",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 30,
      "text": "面積 ＝ 14×12÷2 ＝ 84",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "内接円の中心 I と頂点を結ぶと、3 つの三角形に分かれる。どれも高さは半径 r。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 222,
      "y2": 200,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 222,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 118,
      "cy": 148,
      "r": 52,
      "color": "#0284C7"
     },
     {
      "t": "label",
      "x": 101,
      "y": 38,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 34,
      "y": 206,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 228,
      "y": 206,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "line",
      "x1": 118,
      "y1": 148,
      "x2": 105,
      "y2": 44,
      "color": "#16A34A",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 118,
      "y1": 148,
      "x2": 40,
      "y2": 200,
      "color": "#16A34A",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 118,
      "y1": 148,
      "x2": 222,
      "y2": 200,
      "color": "#16A34A",
      "dashed": true
     },
     {
      "t": "circle",
      "cx": 118,
      "cy": 148,
      "r": 7,
      "text": "I",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     }
    ]
   },
   {
    "note": "84＝(13＋14＋15)×r÷2＝21r。r＝4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "84 ＝ (13＋14＋15) × r ÷ 2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "84 ＝ 21 × r",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "r ＝ 4（cm）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "同じ頂点から出る接線の長さは等しい。BD＝x、CD＝y、AE＝z とすると x＋y＝14、y＋z＝15、z＋x＝13。たして x＋y＋z＝21。x＝21−15＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "x＋y＋z ＝ 42÷2 ＝ 21",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "BD ＝ x ＝ 21 − 15 ＝ 6",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "DH ＝ BD − BH ＝ 6 − 5 ＝ 1",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "D は H より C 側に 1cm。BH＝5、BD＝6 で、DH＝1。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 222,
      "y2": 200,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 222,
      "y1": 200,
      "x2": 105,
      "y2": 44,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 105,
      "y1": 44,
      "x2": 105,
      "y2": 200,
      "color": "#9333EA",
      "dashed": true
     },
     {
      "t": "circle",
      "cx": 118,
      "cy": 148,
      "r": 52,
      "color": "#0284C7"
     },
     {
      "t": "label",
      "x": 101,
      "y": 38,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 34,
      "y": 206,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 228,
      "y": 206,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 102,
      "y": 218,
      "text": "H",
      "size": 11,
      "color": "#9333EA",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 121,
      "y": 218,
      "text": "D",
      "size": 11,
      "color": "#0284C7",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "半径 4cm、DH＝1cm",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "CH＝9 なので AC²＝144＋81＝225、AC＝15 と合う。CD＝8 も CA＋BC−AB の半分に一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "CH ＝ 14 − 5 ＝ 9",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "AC² ＝ 144 ＋ 81 ＝ 225",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "AC ＝ 15 → 合っている",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_07": {
  "caption": "答え　A 分速90m、B 分速60m、3周",
  "slides": [
   {
    "note": "周囲 1200m の池を A・B が同じ地点から出発。反対向きなら 8 分、同じ向きなら 40 分で A が B を追いこす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "池の周り　1200m",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "反対向き：8分ごとに出会う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "同じ向き：40分ごとにAが追いこす",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "反対向きは、2 人が歩いた道のりの合計が 1 周分になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "反対向き → 合計で 1200m",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "1分に進む合計＝A の速さ＋B の速さ",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "同じ向きは、A が B より 1 周ぶん多く歩いたときに追いつく。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "同じ向き → 差が 1200m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "1分に広がる差＝A の速さ − B の速さ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "和＝1200÷8＝150、差＝1200÷40＝30。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "和：1200 ÷ 8 ＝ 150",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "差：1200 ÷ 40 ＝ 30",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "和差算。A＝(150＋30)÷2、B＝(150−30)÷2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "A ＝ (150＋30) ÷ 2 ＝ 90",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "B ＝ (150−30) ÷ 2 ＝ 60",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "追いこすのは 40 分後。A は 90×40＝3600m。3600÷1200＝3 周。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "90 × 40 ＝ 3600（m）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "3600 ÷ 1200 ＝ 3（周）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "A：分速90m　B：分速60m　3周",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(90＋60)×8＝1200、(90−60)×40＝1200 でどちらも 1 周分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "(90＋60) × 8 ＝ 1200",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "(90−60) × 40 ＝ 1200",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "B は 2周、A は 3周 → 差は1周",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "時間（8 分と 40 分）の取りちがえに注意。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "反対向き → 和 → 8分",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "同じ向き → 差 → 40分",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "取りちがえない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_08": {
  "caption": "答え　16通り",
  "slides": [
   {
    "note": "100 円・50 円・10 円玉で、ちょうど 300 円を支払う方法の数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "100円玉・50円玉・10円玉",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "何枚でも使ってよい（0枚もあり）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "ちょうど 300 円",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "3 種類をぜんぶ動かすと数えにくい。10 円玉は最後に残りで決まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "100円玉と50円玉の枚数を決める",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "→ 残りは10円玉で払う（1通り）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "残りが 10 円の倍数で 0 以上なら、10 円玉の枚数はひとつに決まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "100a ＋ 50b ≦ 300 ならOK",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "10円玉の枚数は必ず1通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "100 円玉が 0 枚：50 円玉 0〜6 枚で 7 通り。1 枚：残り 200 円で 0〜4 枚の 5 通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "100円玉 0 枚：50円玉 0〜6 → 7通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "100円玉 1 枚：50円玉 0〜4 → 5通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "2 枚：残り 100 円で 0〜2 枚の 3 通り。3 枚：残り 0 円で 1 通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "100円玉 2 枚：50円玉 0〜2 → 3通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "100円玉 3 枚：50円玉 0 → 1通り",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "7＋5＋3＋1＝16 通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "7 ＋ 5 ＋ 3 ＋ 1 ＝ 16",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "答え　16通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "例：100 円 1 枚・50 円 2 枚なら 200 円で、10 円玉 10 枚。ちゃんと 300 円になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "100×1 ＋ 50×2 ＝ 200",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "残り 100 円 ＝ 10円玉 10枚",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "合計 300 円",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "0 枚の場合の数え落としに注意。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "「0枚」も 1 通りとして数える",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "10円玉の枚数は動かさない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_09": {
  "caption": "答え　(1) 14　(2) 第191項",
  "slides": [
   {
    "note": "1, 2, 2, 3, 3, 3, 4, 4, 4, 4, … という列。第 100 項と、20 が初めて出る位置を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "1 | 2 2 | 3 3 3 | 4 4 4 4 | …",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "n が n 個ずつ並ぶ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "第100項は？　20 は第何項から？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "n までに並ぶ個数は 1＋2＋3＋…＋n。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "n までの個数 ＝ 1＋2＋…＋n",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "これが100をこえる n を探す",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "逆順にたすと (n＋1) が n 組できるので、合計は (n＋1)×n÷2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "1＋2＋…＋n",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "＋ n＋…＋2＋1 ＝ (n＋1) が n 組",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "だから (n＋1)×n÷2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "13 までに 91 個、14 までに 105 個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "n＝13：13×14÷2 ＝ 91",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "n＝14：14×15÷2 ＝ 105",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "91 ＜ 100 ≦ 105",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "第 100 項は 14 の中（第 92 項〜第 105 項）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "14 は 第92項〜第105項",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "100 はその中 → 第100項は 14",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "19 までに 19×20÷2＝190 個。20 は第 191 項から。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "19×20÷2 ＝ 190",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "(1) 14　(2) 第191項",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "20 の最後は第 210 項。191〜210 の 20 項が 20 で、ちょうど 20 個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "20×21÷2 ＝ 210",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "191〜210 ＝ 20 項",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "20 が 20 個 → OK",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "190 と 191 の取りちがいに注意。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "190 は 19 の最後の位置",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "20 が初めて出るのは 191",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_10": {
  "caption": "答え　(1) ひし形 18√6 cm²　(2) 108 cm³",
  "slides": [
   {
    "note": "立方体 ABCD-EFGH（1辺 6cm）。BF の中点 P、DH の中点 Q。3 点 C、P、Q を通る平面で切る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 160,
      "y2": 205,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 200,
      "y2": 175,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 100,
      "y2": 175,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 60,
      "y2": 205,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 105,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 105,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 75,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 75,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 52,
      "y": 217,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 219,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 181,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 181,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 54,
      "y": 101,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 101,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 73,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 71,
      "text": "H",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160.0,
      "cy": 155.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 166.0,
      "y": 159.0,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 100.0,
      "cy": 125.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 129.0,
      "text": "Q",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 200,
      "cy": 175,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "切り口はどんな形？",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "P と Q は高さがどちらも 3cm。PQ の中点は立方体の中心。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 160,
      "y2": 205,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 200,
      "y2": 175,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 100,
      "y2": 175,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 60,
      "y2": 205,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 105,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 105,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 75,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 75,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 52,
      "y": 217,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 219,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 181,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 181,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 54,
      "y": 101,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 101,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 73,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 71,
      "text": "H",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 160.0,
      "cy": 155.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 166.0,
      "y": 159.0,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 100.0,
      "cy": 125.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 129.0,
      "text": "Q",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160.0,
      "y1": 155.0,
      "x2": 100.0,
      "y2": 125.0,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 130.0,
      "cy": 140.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 136.0,
      "y": 136.0,
      "text": "中心",
      "size": 12,
      "color": "#9333EA",
      "bold": true
     }
    ]
   },
   {
    "note": "体対角線 CE も中心を通る。だから平面は E も通る。切り口は E・P・C・Q。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 160,
      "y2": 205,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 200,
      "y2": 175,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 100,
      "y2": 175,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 60,
      "y2": 205,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 105,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 105,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 75,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 75,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 205,
      "x2": 60,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 205,
      "x2": 160,
      "y2": 105,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 200,
      "y2": 75,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 175,
      "x2": 100,
      "y2": 75,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 52,
      "y": 217,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 219,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 181,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 181,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 54,
      "y": 101,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 101,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 207,
      "y": 73,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 94,
      "y": 71,
      "text": "H",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 105,
      "x2": 160.0,
      "y2": 155.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 160.0,
      "y1": 155.0,
      "x2": 200,
      "y2": 175,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 175,
      "x2": 100.0,
      "y2": 125.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 125.0,
      "x2": 60,
      "y2": 105,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 160.0,
      "cy": 155.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 166.0,
      "y": 159.0,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 100.0,
      "cy": 125.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 129.0,
      "text": "Q",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 105,
      "x2": 200,
      "y2": 175,
      "color": "#9333EA",
      "dashed": true
     },
     {
      "t": "circle",
      "cx": 130.0,
      "cy": 140.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 136.0,
      "y": 134.0,
      "text": "中心",
      "size": 12,
      "color": "#9333EA",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "四角形 EPCQ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "辺の長さは、EP＝PC＝CQ＝QE＝√(6²＋3²)＝√45。4 辺が等しいのでひし形。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "EP ＝ √(6² ＋ 3²) ＝ √45",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "PC ＝ CQ ＝ QE ＝ √45",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "4辺が等しい → ひし形",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "対角線 EC＝√(72＋36)＝6√3、PQ＝6√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "EC ＝ √((6√2)² ＋ 6²)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "＝ √(72 ＋ 36) ＝ 6√3",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "PQ ＝ 6√2（底面の対角線と同じ）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "面積＝6√3×6√2÷2＝18√6（cm²）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "6√3 × 6√2 ÷ 2",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "＝ 36√6 ÷ 2 ＝ 18√6 cm²",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "(1) ひし形　18√6 cm²",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "切り口は中心を通るので、立方体を半分ずつに分ける。216÷2＝108。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "立方体の体積 ＝ 6×6×6 ＝ 216",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "中心を通る平面 → 点対称で等しい",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "216 ÷ 2 ＝ 108 cm³",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "対角線 EC で 2 つの三角形に分けて確かめる。△EPC の高さは √(45−27)＝3√2、面積 9√6、2 つ分で 18√6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "△EPC：底辺 EC ＝ 6√3",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "高さ ＝ √(45 − 27) ＝ 3√2",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "面積 ＝ 9√6、2つ分で 18√6",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_11": {
  "caption": "答え　(23,22)、(9,6)、(7,2)",
  "slides": [
   {
    "note": "a²−b²＝45 をみたす正の整数の組 (a, b) をすべて求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "a² − b² ＝ 45",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "a、b は正の整数",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "(a, b) の組をすべて",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "左辺を因数分解すると (a＋b)(a−b)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "a² − b² ＝ (a＋b)(a−b)",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "だから (a＋b)(a−b) ＝ 45",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "b は正なので a＋b は a−b より大きい。「45 を大小の 2 数の積に分ける」問題になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "a＋b ＞ a−b ＞ 0",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "45 ＝ 大きい数 × 小さい数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "45 の約数は 1、3、5、9、15、45。積が 45 の組は 3 つ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "45 ＝ 45 × 1",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "45 ＝ 15 × 3",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "45 ＝ 9 × 5",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "a＝(大＋小)÷2、b＝(大−小)÷2。(45,1) → a＝23、b＝22。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "(45, 1)：a ＝ 23、b ＝ 22",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "(15, 3)：a ＝ 9、b ＝ 6",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "(9, 5)：a ＝ 7、b ＝ 2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "3 組。45 は奇数なので、和も差も偶数になり、a、b は必ず整数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "(23, 22)、(9, 6)、(7, 2)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "3 組",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "それぞれ 2 乗の差をたしかめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "23² − 22² ＝ 529 − 484 ＝ 45",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "9² − 6² ＝ 81 − 36 ＝ 45",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "7² − 2² ＝ 49 − 4 ＝ 45",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "大小を入れかえた組は数えない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【まちがい】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "(1, 45) や (5, 9) は a−b が負",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "6 組ではなく 3 組",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_sansu_12": {
  "caption": "答え　(1) 7.5cm²　(2) 27.5cm²",
  "slides": [
   {
    "note": "面積 60cm² の平行四辺形 ABCD。BC 上に BE：EC＝1：2 の点 E。AE と BD の交点が P。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【状況】",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 200,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 270,
      "y1": 60,
      "x2": 100,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 30,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "label",
      "x": 96,
      "y": 54,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 24,
      "y": 186,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 206,
      "y": 188,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 274,
      "y": 54,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 86.66666666666666,
      "cy": 180,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 86.66666666666666,
      "y": 194,
      "text": "E",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 86.66666666666666,
      "y2": 180,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 90,
      "cy": 150,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 96,
      "y": 146,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "△ABP と 四角形 PECD の面積は？",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "AD∥BE なので、△PBE と △PDA は相似。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【手がかり】",
      "size": 12,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        30,
        180
       ],
       [
        86.7,
        180
       ],
       [
        90,
        150
       ]
      ],
      "color": "#16A34A",
      "fill": "#DCFCE7"
     },
     {
      "t": "poly",
      "pts": [
       [
        100,
        60
       ],
       [
        270,
        60
       ],
       [
        90,
        150
       ]
      ],
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 200,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 270,
      "y1": 60,
      "x2": 100,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 30,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "label",
      "x": 96,
      "y": 54,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 24,
      "y": 186,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 206,
      "y": 188,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 274,
      "y": 54,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 86.66666666666666,
      "cy": 180,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 86.66666666666666,
      "y": 194,
      "text": "E",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 86.66666666666666,
      "y2": 180,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 90,
      "cy": 150,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 96,
      "y": 146,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     }
    ]
   },
   {
    "note": "BE は BC の 1/3 で、DA＝BC なので BE：DA＝1：3。よって BP：PD＝1：3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【理由】",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "BE : DA ＝ 1 : 3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "相似比 1 : 3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "BP : PD ＝ 1 : 3、EP : PA ＝ 1 : 3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△ABD の面積は 60÷2＝30。△ABP と △APD は高さが同じで、底辺の比 1：3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 16,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        100,
        60
       ],
       [
        30,
        180
       ],
       [
        270,
        60
       ]
      ],
      "color": "#FFF8EC",
      "fill": "#FFF8EC"
     },
     {
      "t": "poly",
      "pts": [
       [
        100,
        60
       ],
       [
        30,
        180
       ],
       [
        90,
        150
       ]
      ],
      "color": "#E11D48",
      "fill": "#FFE4E6"
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 200,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 200,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 270,
      "y1": 60,
      "x2": 100,
      "y2": 60,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 30,
      "y2": 180,
      "color": "#2B2420",
      "width": 2
     },
     {
      "t": "label",
      "x": 96,
      "y": 54,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 24,
      "y": 186,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 206,
      "y": 188,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 274,
      "y": 54,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 86.66666666666666,
      "cy": 180,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 86.66666666666666,
      "y": 194,
      "text": "E",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "line",
      "x1": 100,
      "y1": 60,
      "x2": 86.66666666666666,
      "y2": 180,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "line",
      "x1": 30,
      "y1": 180,
      "x2": 270,
      "y2": 60,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 90,
      "cy": 150,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 96,
      "y": 146,
      "text": "P",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "△ABP ＝ 30 × 1/4 ＝ 7.5",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(1) △ABP＝30×1/4＝7.5cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "△ABP ＝ 30 ×(1/4) ＝ 7.5",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "(1) 7.5 cm²",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 四角形 PECD＝△BCD−△BPE。△ABE＝30×1/3＝10、△PBE＝10×1/4＝2.5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【計算】",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "△BCD ＝ 30",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "△ABE ＝ 30 × 1/3 ＝ 10",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "△PBE ＝ 10 × 1/4 ＝ 2.5",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "30−2.5＝27.5cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【答え】",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "30 − 2.5 ＝ 27.5",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "(2) 27.5 cm²",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "面積比は相似比の2乗：△PBE：△PDA＝1：9。△PDA＝30−7.5＝22.5、÷9＝2.5 で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF"
     },
     {
      "t": "label",
      "x": 160,
      "y": 22,
      "text": "【確かめ】",
      "size": 12,
      "color": "#B5622E",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 58,
      "w": 280,
      "h": 30,
      "text": "△PBE : △PDA ＝ 1 : 9",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "△PDA ＝ 30 − 7.5 ＝ 22.5",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "22.5 ÷ 9 ＝ 2.5 → 一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   }
  ]
 }
};

export const figuresHonshikenSchool_koko_azabu: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
