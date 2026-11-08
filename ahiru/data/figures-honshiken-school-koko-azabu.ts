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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 8.0,
      "x2": 55.6,
      "y2": 41.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 41.5,
      "x2": 68.2,
      "y2": 72.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.0,
      "x2": 80.8,
      "y2": 99.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 99.4,
      "x2": 93.4,
      "y2": 123.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 123.9,
      "x2": 106.0,
      "y2": 145.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 145.4,
      "x2": 118.6,
      "y2": 163.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 163.9,
      "x2": 131.2,
      "y2": 179.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 179.4,
      "x2": 143.8,
      "y2": 191.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 191.9,
      "x2": 156.4,
      "y2": 201.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 201.3,
      "x2": 169.0,
      "y2": 207.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 207.8,
      "x2": 181.6,
      "y2": 211.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 211.3,
      "x2": 194.2,
      "y2": 211.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 211.8,
      "x2": 206.8,
      "y2": 209.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 209.3,
      "x2": 219.4,
      "y2": 203.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 203.8,
      "x2": 232.0,
      "y2": 195.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 195.3,
      "x2": 244.6,
      "y2": 183.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 212.0,
      "r": 3,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 184,
      "y": 208.0,
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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 8.0,
      "x2": 55.6,
      "y2": 41.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 41.5,
      "x2": 68.2,
      "y2": 72.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.0,
      "x2": 80.8,
      "y2": 99.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 99.4,
      "x2": 93.4,
      "y2": 123.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 123.9,
      "x2": 106.0,
      "y2": 145.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 145.4,
      "x2": 118.6,
      "y2": 163.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 163.9,
      "x2": 131.2,
      "y2": 179.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 179.4,
      "x2": 143.8,
      "y2": 191.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 191.9,
      "x2": 156.4,
      "y2": 201.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 201.3,
      "x2": 169.0,
      "y2": 207.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 207.8,
      "x2": 181.6,
      "y2": 211.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 211.3,
      "x2": 194.2,
      "y2": 211.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 211.8,
      "x2": 206.8,
      "y2": 209.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 209.3,
      "x2": 219.4,
      "y2": 203.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 203.8,
      "x2": 232.0,
      "y2": 195.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 195.3,
      "x2": 244.6,
      "y2": 183.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 92,
      "y1": 138.0,
      "x2": 232,
      "y2": 212.0,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 189.8,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 195,
      "y": 185.8,
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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 189.8,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 195,
      "y": 185.8,
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
        212.0
       ],
       [
        106,
        145.4
       ],
       [
        190,
        189.8
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
        212.0
       ],
       [
        190,
        189.8
       ],
       [
        218,
        204.6
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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 8.0,
      "x2": 55.6,
      "y2": 41.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 41.5,
      "x2": 68.2,
      "y2": 72.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.0,
      "x2": 80.8,
      "y2": 99.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 99.4,
      "x2": 93.4,
      "y2": 123.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 123.9,
      "x2": 106.0,
      "y2": 145.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 145.4,
      "x2": 118.6,
      "y2": 163.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 163.9,
      "x2": 131.2,
      "y2": 179.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 179.4,
      "x2": 143.8,
      "y2": 191.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 191.9,
      "x2": 156.4,
      "y2": 201.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 201.3,
      "x2": 169.0,
      "y2": 207.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 207.8,
      "x2": 181.6,
      "y2": 211.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 211.3,
      "x2": 194.2,
      "y2": 211.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 211.8,
      "x2": 206.8,
      "y2": 209.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 209.3,
      "x2": 219.4,
      "y2": 203.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 203.8,
      "x2": 232.0,
      "y2": 195.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 195.3,
      "x2": 244.6,
      "y2": 183.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 106,
      "y1": 145.4,
      "x2": 218,
      "y2": 204.6,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 162,
      "cy": 175.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 168,
      "y": 169.0,
      "text": "M(−2,10)",
      "size": 11,
      "color": "#9333EA",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 190,
      "cy": 212.0,
      "r": 3,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 184,
      "y": 208.0,
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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 8.0,
      "x2": 55.6,
      "y2": 41.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 41.5,
      "x2": 68.2,
      "y2": 72.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.0,
      "x2": 80.8,
      "y2": 99.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 99.4,
      "x2": 93.4,
      "y2": 123.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 123.9,
      "x2": 106.0,
      "y2": 145.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 145.4,
      "x2": 118.6,
      "y2": 163.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 163.9,
      "x2": 131.2,
      "y2": 179.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 179.4,
      "x2": 143.8,
      "y2": 191.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 191.9,
      "x2": 156.4,
      "y2": 201.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 201.3,
      "x2": 169.0,
      "y2": 207.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 207.8,
      "x2": 181.6,
      "y2": 211.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 211.3,
      "x2": 194.2,
      "y2": 211.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 211.8,
      "x2": 206.8,
      "y2": 209.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 209.3,
      "x2": 219.4,
      "y2": 203.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 203.8,
      "x2": 232.0,
      "y2": 195.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 195.3,
      "x2": 244.6,
      "y2": 183.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 44.4,
      "y1": 19.6,
      "x2": 190,
      "y2": 212.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 162,
      "cy": 175.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 168,
      "y": 169.0,
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
      "y1": 212.0,
      "x2": 310,
      "y2": 212.0,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 190,
      "y1": 24,
      "x2": 190,
      "y2": 218,
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
      "y": 208.0,
      "text": "x",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end"
     },
     {
      "t": "line",
      "x1": 43.0,
      "y1": 8.0,
      "x2": 55.6,
      "y2": 41.5,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 55.6,
      "y1": 41.5,
      "x2": 68.2,
      "y2": 72.0,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.2,
      "y1": 72.0,
      "x2": 80.8,
      "y2": 99.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 99.4,
      "x2": 93.4,
      "y2": 123.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 93.4,
      "y1": 123.9,
      "x2": 106.0,
      "y2": 145.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 145.4,
      "x2": 118.6,
      "y2": 163.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 118.6,
      "y1": 163.9,
      "x2": 131.2,
      "y2": 179.4,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.2,
      "y1": 179.4,
      "x2": 143.8,
      "y2": 191.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 143.8,
      "y1": 191.9,
      "x2": 156.4,
      "y2": 201.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 156.4,
      "y1": 201.3,
      "x2": 169.0,
      "y2": 207.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 169.0,
      "y1": 207.8,
      "x2": 181.6,
      "y2": 211.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 181.6,
      "y1": 211.3,
      "x2": 194.2,
      "y2": 211.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.2,
      "y1": 211.8,
      "x2": 206.8,
      "y2": 209.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 206.8,
      "y1": 209.3,
      "x2": 219.4,
      "y2": 203.8,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 219.4,
      "y1": 203.8,
      "x2": 232.0,
      "y2": 195.3,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.0,
      "y1": 195.3,
      "x2": 244.6,
      "y2": 183.9,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 106,
      "cy": 145.4,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 112,
      "y": 141.4,
      "text": "A(−6,18)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 218,
      "cy": 204.6,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 223,
      "y": 198.6,
      "text": "B(2,2)",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 44.4,
      "y1": 19.6,
      "x2": 190,
      "y2": 212.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 50,
      "cy": 27.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 58,
      "y": 33.0,
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
      "x1": 70,
      "y1": 200,
      "x2": 160,
      "y2": 200,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 210,
      "y2": 160,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 120,
      "y2": 160,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 70,
      "y2": 200,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 110,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 110,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 70,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 70,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 200,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 62,
      "y": 212,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 214,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 166,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 166,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 64,
      "y": 106,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 106,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 68,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 66,
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
      "cx": 120.0,
      "cy": 115.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 114.0,
      "y": 119.0,
      "text": "Q",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "circle",
      "cx": 210,
      "cy": 160,
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
      "x1": 70,
      "y1": 200,
      "x2": 160,
      "y2": 200,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 210,
      "y2": 160,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 120,
      "y2": 160,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 70,
      "y2": 200,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 110,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 110,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 70,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 70,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 200,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 62,
      "y": 212,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 214,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 166,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 166,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 64,
      "y": 106,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 106,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 68,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 66,
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
      "cx": 120.0,
      "cy": 115.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 114.0,
      "y": 119.0,
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
      "x2": 120.0,
      "y2": 115.0,
      "color": "#9333EA",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 140.0,
      "cy": 135.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 146.0,
      "y": 131.0,
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
      "x1": 70,
      "y1": 200,
      "x2": 160,
      "y2": 200,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 210,
      "y2": 160,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 120,
      "y2": 160,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 70,
      "y2": 200,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 110,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 110,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 70,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 70,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 200,
      "x2": 70,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 200,
      "x2": 160,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 210,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 160,
      "x2": 120,
      "y2": 70,
      "color": "#2B2420",
      "dashed": true
     },
     {
      "t": "label",
      "x": 62,
      "y": 212,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 214,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 166,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 166,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 64,
      "y": 106,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 166,
      "y": 106,
      "text": "F",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 217,
      "y": 68,
      "text": "G",
      "size": 12,
      "color": "#2B2420",
      "bold": true
     },
     {
      "t": "label",
      "x": 114,
      "y": 66,
      "text": "H",
      "size": 12,
      "color": "#2B2420",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 110,
      "x2": 160.0,
      "y2": 155.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 160.0,
      "y1": 155.0,
      "x2": 210,
      "y2": 160,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 210,
      "y1": 160,
      "x2": 120.0,
      "y2": 115.0,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 115.0,
      "x2": 70,
      "y2": 110,
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
      "cx": 120.0,
      "cy": 115.0,
      "r": 3,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 114.0,
      "y": 119.0,
      "text": "Q",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 110,
      "x2": 210,
      "y2": 160,
      "color": "#9333EA",
      "dashed": true
     },
     {
      "t": "circle",
      "cx": 140.0,
      "cy": 135.0,
      "r": 3,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 146.0,
      "y": 129.0,
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
 },
 "honshiken_school_koko_azabu_kokugo_02": {
  "caption": "答え　まちがえないことに気をとられて、声や気持ちが出ない",
  "slides": [
   {
    "note": "「声が文字の後ろに隠れる」を 40 字以内で説明する。",
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
      "text": "傍線部：声が文字の後ろに隠れる",
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
      "text": "どういうことか　40 字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "比喩をほどく。文字＝原稿の字、声＝読み手の声や気持ち。",
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
      "text": "文字 ＝ 原稿の字",
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
      "text": "声 ＝ 読み手の声や気持ち",
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
      "text": "隠れる ＝ 表に出ない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "原因：ぼくは「まちがえたくないから、慎重に読んでる」。",
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
      "text": "原因を探す",
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
      "text": "「まちがえたくないから慎重に」",
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
      "text": "→ まちがえないことが一番",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "結果：そのせいで、ぼくの声は小さくなっていった。",
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
      "text": "結果を探す",
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
      "text": "「声は少しずつ小さくなっていった」",
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
      "text": "→ 声や気持ちが出ない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "原因と結果をつなぐ。",
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
      "text": "まちがえないことに気をとられて、",
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
      "text": "自分の声や気持ちが表に出なくなる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "字数を数える。38 字で四十字以内。",
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
      "text": "16 字 ＋ 22 字 ＝ 38 字",
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
      "text": "答え　上の 2 行をつなげる",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "原因と結果の 2 つが入っているか確かめる。",
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
      "text": "原因：まちがえないことへのこだわり",
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
      "text": "結果：声や気持ちが出ない",
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
      "text": "38 字（句点を含む）",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "原因を書き落とさないこと。",
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
      "text": "「声が小さくなる」だけは不足",
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
      "text": "原因（まちがえないこと）が必要",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_03": {
  "caption": "答え　自分の朗読と、聞きたくなる声との違いに気づいたから",
  "slides": [
   {
    "note": "「ぼくは何も言えなかった」のはなぜか。選択肢から選ぶ。",
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
      "text": "傍線部：ぼくは何も言えなかった",
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
      "text": "理由を 4 つの選択肢から選ぶ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "直前：紗代「まちがえてるでしょ。でもこの人の声、ずっと聞いていたくなる」。",
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
      "text": "直前を見る",
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
      "text": "祖父の声は、まちがえても聞きたくなる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "直後：「まちがえないことだけを目指してきた自分の朗読と、この声との間にある距離が見えた」。",
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
      "text": "直後を見る",
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
      "text": "自分の朗読との「距離」が見えた",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "下手で笑いそうだった、は「聞いていたくなる」と合わない。",
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
      "text": "1番目：笑いをこらえた → ×",
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
      "text": "本文は「聞いていたくなる」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "腹を立てた、開き直った、も本文に根拠がない。",
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
      "text": "2番目：腹を立てた → ×",
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
      "text": "4番目：すっかり開き直った → ×",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "3 番目が、直前・直後と合っている。",
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
      "text": "まちがえないことだけを目指した朗読",
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
      "text": "と、まちがえても聞きたくなる声の違い",
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
      "text": "→ 3番目",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "最後に、ぼくは自分から読み直す。気づきが先、行動があと。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "気づく → 読み直す",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "変化の流れとして自然",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "言いすぎの選択肢に注意。",
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
      "text": "「すっかり開き直った」は言いすぎ",
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
      "text": "気づいたばかりで、決意はまだ",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_04": {
  "caption": "答え　恐れて縮こまる → まちがえても読み直せばよいと受け入れる",
  "slides": [
   {
    "note": "「失礼しました」と読み直した行動は、「ぼく」のどんな変化を表すか。60 字以内。",
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
      "y": 66,
      "w": 280,
      "h": 36,
      "text": "傍線部：「失礼しました」と\n小さく言って、読み直した",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 108,
      "w": 280,
      "h": 30,
      "text": "60 字以内で変化を説明",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "変化は「以前」と「今」を対比して書く。",
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
      "text": "以前の「ぼく」は？",
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
      "text": "今の「ぼく」は？",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "以前：まちがえて、笑い声が聞こえた気がして、声が小さくなった。",
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
      "text": "まちがえたくないから慎重に",
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
      "text": "声が少しずつ小さくなった",
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
      "text": "→ まちがえることを恐れていた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "今：また読みまちがえたが、「失礼しました」と言って読み直した。",
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
      "text": "まちがえた → 読み直す",
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
      "text": "マイクの向こうは静かなまま",
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
      "text": "→ まちがいを受け入れた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2 つをつなぐ。恐れて縮こまる状態から、受け入れた状態へ。",
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
      "text": "恐れて縮こまっていた",
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
      "text": "↓",
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
      "text": "まちがえても読み直せばよいと受け入れた",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "文末を整えて、59 字にまとめる。",
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
      "text": "20 字 ＋ 19 字 ＋ 20 字 ＝ 59 字",
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
      "text": "六十字以内（句点を含む）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "以前と今の対比が入っているか確かめる。",
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
      "text": "以前：恐れて縮こまる",
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
      "text": "今：読み直せばよいと受け入れる",
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
      "text": "59 字で OK",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「うまくなった」と書かないこと。",
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
      "text": "また読みまちがえている",
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
      "text": "変わったのはうまさでなく向き合い方",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_05": {
  "caption": "答え　答えが出たあとにも、なお考えることが残る問い",
  "slides": [
   {
    "note": "筆者が考える「よい問い」を、22 字で抜き出す。",
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
      "text": "筆者の考える「よい問い」とは？",
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
      "text": "本文から 22 字（句読点を含む）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "「では、よい問いとは何か。」のすぐあとに答えがある。",
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
      "text": "第 2 段落",
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
      "text": "「では、よい問いとは何か。」",
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
      "text": "→ 直後の文を読む",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "直後の文：「私は、〜問いだと思っている。」",
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
      "text": "私は、答えが出たあとにも、",
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
      "text": "なお考えることが残る問いだと思っている。",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "「私は、」と「だと思っている。」を除く。",
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
      "y": 66,
      "w": 280,
      "h": 30,
      "text": "除く：「私は、」「だと思っている。」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 102,
      "w": 280,
      "h": 36,
      "text": "残る：答えが出たあとにも、\nなお考えることが残る問い",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "字数を数える。ちょうど 22 字。",
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
      "text": "答えが出たあとにも、（11字）",
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
      "text": "なお考えることが残る問い（11字）",
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
      "text": "合わせて 22 字",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "元の文にもどして読み、意味が通る。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "「私は、□□□□□だと思っている。」",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "意味が通る・22 字",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "読点も 1 字として数える。",
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
      "text": "「、」を数えわすれると 21 字",
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
      "text": "句読点をふくむ → 読点も 1 字",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   },
   {
    "note": "「私は」や「だと思っている」は入れない。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "筆者の考えの部分だけ抜き出す",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_07": {
  "caption": "答え　決めるための材料を増やすか、決めることから逃げるか",
  "slides": [
   {
    "note": "「問いを深めること」と「結論の先延ばし」の違いを 60 字以内で説明する。",
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
      "text": "傍線部：問いを深めることと、",
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
      "text": "結論を先延ばしにすることとは違う",
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
      "text": "60 字以内で違いを説明",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "傍線部の直後に、それぞれの説明がある。",
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
      "text": "「問いを深める」の説明は？",
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
      "text": "「先延ばし」の説明は？",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "深める：最終的に自分で決めるために、判断の材料を増やす作業。",
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
      "text": "目的 ＝ 最終的に自分で決める",
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
      "text": "やること ＝ 判断の材料を増やす",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "先延ばし：いつまでも「もう少し考えたい」と言う。問いから逃げている。",
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
      "text": "目的 ＝ なし（決めない）",
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
      "text": "やっていること ＝ 逃げている",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「A は〜だが、B は〜」の形で対比する。",
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
      "text": "深める → 決めるための材料を増やす",
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
      "text": "先延ばし → 決めることから逃げる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "字数を整えて 56 字にする。",
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
      "text": "32 字 ＋ 24 字 ＝ 56 字",
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
      "text": "六十字以内（句点を含む）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "目的のちがいの対比が入っているか確かめる。",
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
      "text": "深める：決めるため",
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
      "text": "先延ばし：逃げるため",
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
      "text": "対比になっている",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "善悪だけを書かないこと。",
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
      "y": 66,
      "w": 280,
      "h": 36,
      "text": "「深めるのは良い、先延ばしは\n悪い」だけは不足",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 108,
      "w": 280,
      "h": 30,
      "text": "目的のちがいを書く",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_08": {
  "caption": "答え　2番目（言い直す粘り強さ＋責任を持って決める勇気）",
  "slides": [
   {
    "note": "本文の内容と合うものを一つ選ぶ。",
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
      "text": "4 つの選択肢を本文と照らす",
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
      "text": "本文に書いてあるか？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "筆者の主張は、最後の段落にまとまっている。",
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
      "text": "最後の段落",
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
      "text": "「二つのことが求められる」",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "1 番目：「答えがあるから点数をつけられる」が本文。逆。",
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
      "text": "1番目 → ×",
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
      "text": "本文：答えがあるから点数がつく",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "3 番目：「知識の量よりも」とあり、知識が多ければよいとは書いていない。",
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
      "text": "3番目 → ×",
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
      "text": "本文にない関係を足している",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "4 番目：先延ばしと「深める」は違う、と本文は言っている。",
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
      "text": "4番目 → ×",
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
      "text": "本文：結論の先延ばしとは違う",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2 番目が、最後の段落の 2 つのこととそのまま合う。",
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
      "text": "言い直す粘り強さ",
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
      "text": "責任を持って決める勇気",
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
      "text": "→ 2番目",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "最後の段落の言いかえになっている。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "「二つのこと」を言いかえた文",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "根拠：最後の段落",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "本文にない関係を足した選択肢に注意。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "知識が多い → よい問い、は本文にない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_10": {
  "caption": "答え　ふもとの寺社を石清水のすべてと思い、山の上に参らず帰った",
  "slides": [
   {
    "note": "「かばかりと心得て帰りにけり」。法師はどんな思いちがいをしたか。50 字以内。",
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
      "text": "傍線部：かばかりと心得て帰りにけり",
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
      "text": "思いちがいの中身を 50 字以内で",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まず現代語に直す。「かばかり」＝これだけ。",
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
      "text": "かばかりと心得て",
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
      "text": "＝ これだけだと思いこんで",
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
      "text": "帰りにけり ＝ 帰ってしまった",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "「これだけ」の中身：直前に「極楽寺、高良などを拝みて」。注では、ふもとの寺社。",
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
      "text": "極楽寺・高良 ＝ 男山のふもと",
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
      "text": "（注より）",
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
      "text": "ここを拝んで「これだけ」と思った",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "最後に法師は「山までは見ず」と言う。山の上には登っていない。",
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
      "text": "「山へのぼりしは…山までは見ず」",
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
      "text": "山の上には行かなかった",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2 つを合わせる。",
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
      "text": "ふもとの寺社を石清水のすべてだと思い",
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
      "text": "山の上の本社に参らずに帰った",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "字数を整える。",
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
      "text": "23 字 ＋ 24 字 ＝ 47 字",
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
      "text": "五十字以内に入っている",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "「ふもとを全体と思った」と「山に行かなかった」の 2 点を確かめる。",
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
      "text": "ふもとの寺社を全体と思った",
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
      "text": "山の上に行かなかった",
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
      "text": "2 点とも入っている",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「満足して帰った」だけでは足りない。",
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
      "text": "何が思いちがいかを書く",
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
      "text": "注から「ふもと」を使う",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_kokugo_12": {
  "caption": "答え（例）文化祭の出し物：問い直し、責任を持って決める",
  "slides": [
   {
    "note": "答えのない問いを一つ挙げ、どう向き合うかを 80 字以内で書く。",
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
      "text": "答えが一つに決まらない問いを挙げる",
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
      "text": "どう向き合うか　80 字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "書く内容は 3 つ。①具体例、②本文の考え、③自分の行動。",
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
      "text": "① 身近な問いの例",
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
      "text": "② 言い直す粘り強さ",
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
      "text": "③ 責任を持って決める勇気",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "①の例：「文化祭の出し物を何にするか」。",
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
      "text": "答えが一つに決まらない",
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
      "text": "学校生活でよくある問い",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "②を例にあてはめる：費用や人手の面から問い直す。",
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
      "text": "言い直す ＝ 見方を変えて考える",
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
      "text": "→ 費用・人手の面から問い直す",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "③を例にあてはめる：材料がそろったら、責任を持って決める。",
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
      "text": "責任を持って決める",
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
      "text": "→ 多数決で決める",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "3 つをつないで、字数におさめる。",
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
      "text": "例）文化祭の出し物は、費用や人手の面から",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "問い直し、材料がそろったら、責任を持って",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "多数決で決めたい。（60 字）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "3 点が入っているか確かめる。",
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
      "text": "具体例：文化祭",
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
      "text": "問い直す：費用や人手",
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
      "text": "決める：多数決",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「よく考えたい」だけでは先延ばしになる。",
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
      "text": "具体例がない・決めない",
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
      "text": "本文の「先延ばし」と同じ",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_01": {
  "caption": "答え　(1) 0.6A　(2) 20Ω",
  "slides": [
   {
    "note": "12V の電源に 30Ω と 60Ω を並列につなぐ。全体の電流と合成抵抗を求める。",
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
      "y1": 70,
      "x2": 260,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 180,
      "x2": 260,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 70,
      "x2": 40,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 140,
      "x2": 40,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 24,
      "y": 110,
      "w": 32,
      "h": 30,
      "text": "電源",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 9
     },
     {
      "t": "line",
      "x1": 130,
      "y1": 70,
      "x2": 130,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 130,
      "y1": 140,
      "x2": 130,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 112,
      "y": 100,
      "w": 36,
      "h": 40,
      "text": "30Ω",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 11
     },
     {
      "t": "line",
      "x1": 230,
      "y1": 70,
      "x2": 230,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 230,
      "y1": 140,
      "x2": 230,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 212,
      "y": 100,
      "w": 36,
      "h": 40,
      "text": "60Ω",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 11
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "12V の電源",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "並列では、どの枝にも電源と同じ電圧 12V がかかる。",
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
      "text": "並列 → どの枝も 12V",
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
      "text": "電流は 電圧 ÷ 抵抗（オームの法則）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "枝ごとに電流を求めて、合計が全体の電流になる。",
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
      "text": "分かれた電流の和 ＝ 全体の電流",
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
      "text": "合成抵抗 ＝ 電圧 ÷ 全体の電流",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "R₁：12÷30＝0.4A。R₂：12÷60＝0.2A。",
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
      "x1": 40,
      "y1": 70,
      "x2": 260,
      "y2": 70,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 180,
      "x2": 260,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 70,
      "x2": 40,
      "y2": 110,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 140,
      "x2": 40,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 24,
      "y": 110,
      "w": 32,
      "h": 30,
      "text": "電源",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 9
     },
     {
      "t": "line",
      "x1": 130,
      "y1": 70,
      "x2": 130,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 130,
      "y1": 140,
      "x2": 130,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 112,
      "y": 100,
      "w": 36,
      "h": 40,
      "text": "30Ω",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 11
     },
     {
      "t": "line",
      "x1": 230,
      "y1": 70,
      "x2": 230,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 230,
      "y1": 140,
      "x2": 230,
      "y2": 180,
      "color": "#2B2420"
     },
     {
      "t": "box",
      "x": 212,
      "y": 100,
      "w": 36,
      "h": 40,
      "text": "60Ω",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 11
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "12V の電源",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 138,
      "y": 92,
      "text": "0.4A",
      "size": 11,
      "color": "#E11D48"
     },
     {
      "t": "label",
      "x": 238,
      "y": 92,
      "text": "0.2A",
      "size": 11,
      "color": "#16A34A"
     },
     {
      "t": "label",
      "x": 70,
      "y": 62,
      "text": "0.6A",
      "size": 11,
      "color": "#0284C7"
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "0.4A ＋ 0.2A",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "全体の電流＝0.4＋0.2＝0.6A。",
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
      "text": "0.4 ＋ 0.2 ＝ 0.6（A）",
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
      "text": "(1) 0.6 A",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "合成抵抗＝12÷0.6＝20Ω。",
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
      "text": "12 ÷ 0.6 ＝ 20（Ω）",
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
      "text": "(2) 20 Ω",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "20Ω に 12V をかけると 0.6A で一致。小さいほうの 30Ω より小さくなっている。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "12 ÷ 20 ＝ 0.6 A",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "30Ω より小さい → 並列として自然",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "並列なのに抵抗を足してしまうまちがい。",
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
      "text": "30＋60＝90Ω は直列の考え方",
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
      "text": "並列では電圧は分け合わない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_02": {
  "caption": "答え　(1) 30N　(2) 4m　(3) 15W",
  "slides": [
   {
    "note": "6kg の物体を動滑車 1 個で 2m 引き上げる。",
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
      "t": "label",
      "x": 160,
      "y": 222,
      "text": "ひもの重さ・摩擦は考えない",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 100,
      "r": 18,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 40,
      "x2": 260,
      "y2": 40,
      "color": "#6E645C",
      "width": 3
     },
     {
      "t": "line",
      "x1": 142,
      "y1": 40,
      "x2": 142,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 178,
      "y1": 40,
      "x2": 178,
      "y2": 100,
      "color": "#2B2420"
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 118,
      "x2": 160,
      "y2": 150,
      "color": "#6E645C"
     },
     {
      "t": "box",
      "x": 120,
      "y": 150,
      "w": 80,
      "h": 34,
      "text": "6kg",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 12
     }
    ]
   },
   {
    "note": "100g で 1N。6kg＝6000g なので 60N。",
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
      "text": "6kg ＝ 6000 g",
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
      "text": "6000 ÷ 100 ＝ 60 N",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "動滑車は 2 本のひもで物体を支える。1 本あたりは半分。",
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
      "text": "2 本のひもで 60N を支える",
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
      "text": "1 本あたり　60 ÷ 2 ＝ 30 N",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 引く力は 30N。",
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
      "text": "60 ÷ 2 ＝ 30 N",
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
      "text": "(1) 30 N",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "2m 上げるには、2 本のひもが 2m ずつ縮む。手で引くのは 2×2＝4m。",
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
      "text": "2 本 × 2 m ＝ 4 m",
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
      "text": "(2) 4 m",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "仕事＝30N×4m＝120J。仕事率＝120÷8＝15W。",
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
      "text": "仕事 ＝ 30 × 4 ＝ 120 J",
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
      "text": "仕事率 ＝ 120 ÷ 8 ＝ 15 W",
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
      "text": "(3) 15 W",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "道具なしでも 60N×2m＝120J。動滑車でも 30N×4m＝120J。仕事の原理。",
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
      "text": "直接：60 × 2 ＝ 120 J",
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
      "text": "動滑車：30 × 4 ＝ 120 J",
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
      "text": "同じ → 仕事の原理",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "引く長さが 2 倍になることを忘れるまちがい。",
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
      "text": "力が半分 → 長さは 2 倍",
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
      "text": "仕事は減らない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_03": {
  "caption": "答え　(1) 0.1秒　(2) 80cm/s　(3) 60cm/s",
  "slides": [
   {
    "note": "台車を記録タイマーで記録。5 本のテープを並べる（長さ 2、4、6、8、10cm）。",
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
      "x1": 20,
      "y1": 200,
      "x2": 300,
      "y2": 200,
      "color": "#6E645C"
     },
     {
      "t": "box",
      "x": 40,
      "y": 172,
      "w": 34,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 57,
      "y": 166,
      "text": "2.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 94,
      "y": 144,
      "w": 34,
      "h": 56,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 111,
      "y": 138,
      "text": "4.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 148,
      "y": 116,
      "w": 34,
      "h": 84,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 165,
      "y": 110,
      "text": "6.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 202,
      "y": 88,
      "w": 34,
      "h": 112,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 219,
      "y": 82,
      "text": "8.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 256,
      "y": 60,
      "w": 34,
      "h": 140,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 273,
      "y": 54,
      "text": "10.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 222,
      "text": "テープの長さ（cm）",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "1 秒に 50 回の打点なので、打点 1 間隔は 0.02 秒。",
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
      "text": "1 ÷ 50 ＝ 0.02（秒）",
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
      "text": "5 個ぶん → 0.02 × 5 ＝ 0.1 秒",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "時間がそろっているので、長さで速さがくらべられる。2、4、6…と一定の割合で増える。",
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
      "text": "1 本 ＝ 0.1 秒（すべて同じ）",
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
      "text": "長さが一定の割合で増える",
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
      "text": "→ 速さも一定の割合で増える",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 1 本ぶんは 0.1 秒。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "(1) 0.1 秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 4 本目は 8.0cm を 0.1 秒。8.0÷0.1＝80cm/s。",
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
      "x1": 20,
      "y1": 200,
      "x2": 300,
      "y2": 200,
      "color": "#6E645C"
     },
     {
      "t": "box",
      "x": 40,
      "y": 172,
      "w": 34,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 57,
      "y": 166,
      "text": "2.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 94,
      "y": 144,
      "w": 34,
      "h": 56,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 111,
      "y": 138,
      "text": "4.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 148,
      "y": 116,
      "w": 34,
      "h": 84,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 165,
      "y": 110,
      "text": "6.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 202,
      "y": 88,
      "w": 34,
      "h": 112,
      "color": "#E11D48",
      "fill": "#FFE4E6"
     },
     {
      "t": "label",
      "x": 219,
      "y": 82,
      "text": "8.0",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "box",
      "x": 256,
      "y": 60,
      "w": 34,
      "h": 140,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "label",
      "x": 273,
      "y": 54,
      "text": "10.0",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "8.0 ÷ 0.1 ＝ 80 cm/s",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(3) 合計 30.0cm を 0.5 秒で。30.0÷0.5＝60cm/s。",
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
      "text": "2＋4＋6＋8＋10 ＝ 30（cm）",
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
      "text": "0.1 × 5 ＝ 0.5（秒）",
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
      "text": "30 ÷ 0.5 ＝ 60（cm/s）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "3 本目（まん中）の速さ 6.0÷0.1＝60cm/s と、(3) が一致する。",
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
      "text": "3 本目：6.0 ÷ 0.1 ＝ 60 cm/s",
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
      "text": "全体の平均 ＝ まん中の速さ",
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
      "text": "→ 一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "5 打点を 0.5 秒と取りちがえるまちがい。",
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
      "text": "5つぶん ＝ 0.1 秒（0.5 秒ではない）",
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
      "text": "0.5 秒は 5 本ぶんの全体",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_04": {
  "caption": "答え　(1) 0.4g　(2) 1.6g　(3) 1.6g",
  "slides": [
   {
    "note": "銅 3.2g を加熱すると、とちゅうでやめて 3.6g になった。銅：酸素＝4：1。",
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
      "text": "銅の粉末　3.2 g",
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
      "text": "加熱後　3.6 g（途中でやめた）",
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
      "text": "銅 : 酸素 ＝ 4 : 1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "酸化すると酸素が結びつくので、質量がふえる。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "ふえた質量 ＝ 結びついた酸素",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 3.6−3.2＝0.4g。",
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
      "text": "3.6 − 3.2 ＝ 0.4",
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
      "text": "(1) 酸素　0.4 g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "銅：酸素＝4：1 なので、反応した銅は酸素の 4 倍。",
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
      "text": "銅 : 酸素 ＝ 4 : 1",
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
      "text": "反応した銅 ＝ 酸素 × 4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 0.4×4＝1.6g。",
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
      "text": "0.4 × 4 ＝ 1.6",
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
      "text": "(2) 反応した銅　1.6 g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(3) 3.2−1.6＝1.6g が、酸化されずに残っている。",
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
      "text": "3.2 − 1.6 ＝ 1.6",
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
      "text": "(3) 残った銅　1.6 g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "酸化銅 1.6＋0.4＝2.0g。残った銅 1.6g を足すと 3.6g で一致。",
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
      "text": "酸化銅 ＝ 1.6 ＋ 0.4 ＝ 2.0 g",
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
      "text": "2.0 ＋ 1.6 ＝ 3.6 g",
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
      "text": "皿の中の質量と同じ",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "4：1 を銅：酸化銅と取りちがえない。",
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
      "text": "4 : 1 は 銅 : 酸素",
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
      "text": "銅 : 酸化銅 ＝ 4 : 5",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_05": {
  "caption": "答え　156g",
  "slides": [
   {
    "note": "60℃の硝酸カリウム飽和水溶液 420g を 20℃に冷やす。出てくる結晶は何g？",
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
      "text": "60℃：水100gに 110g まで溶ける",
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
      "text": "20℃：水100gに 32g まで溶ける",
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
      "text": "60℃の飽和水溶液 420g を冷やす",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "飽和水溶液 210g は「水 100g＋硝酸カリウム 110g」。420g はその 2 組分。",
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
      "t": "box",
      "x": 30,
      "y": 60,
      "w": 120,
      "h": 36,
      "text": "水 100 g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 150,
      "y": 60,
      "w": 132,
      "h": 36,
      "text": "硝酸カリウム 110 g",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 12
     },
     {
      "t": "label",
      "x": 160,
      "y": 125,
      "text": "これで 210 g（1 組）",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 160,
      "y": 160,
      "text": "420 ÷ 210 ＝ 2 組分",
      "size": 13,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "420g の中身：水 200g、硝酸カリウム 220g。",
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
      "t": "box",
      "x": 20,
      "y": 80,
      "w": 120,
      "h": 40,
      "text": "水 200 g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 140,
      "y": 80,
      "w": 150,
      "h": 40,
      "text": "硝酸カリウム 220 g",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 12
     },
     {
      "t": "label",
      "x": 160,
      "y": 150,
      "text": "合わせて 420 g",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "水は蒸発しないので 200g のまま。20℃で溶けるのは 32×2＝64g。",
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
      "text": "水は 200 g のまま",
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
      "text": "20℃：水 200g に溶ける ＝ 32×2 ＝ 64 g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "冷やすと、溶けきれない分が結晶になる。",
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
      "t": "box",
      "x": 20,
      "y": 80,
      "w": 120,
      "h": 40,
      "text": "水 200 g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 140,
      "y": 80,
      "w": 45,
      "h": 40,
      "text": "64",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     },
     {
      "t": "box",
      "x": 185,
      "y": 80,
      "w": 105,
      "h": 40,
      "text": "結晶 156 g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "label",
      "x": 160,
      "y": 150,
      "text": "220 g のうち 64 g は溶けたまま",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "結晶＝220−64＝156g。",
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
      "text": "220 − 64 ＝ 156",
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
      "text": "答え　156 g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "冷やしたあとの水溶液 200＋64＝264g。結晶を足すと 420g で一致。",
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
      "text": "200 ＋ 64 ＝ 264 g",
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
      "text": "264 ＋ 156 ＝ 420 g",
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
      "text": "もとの質量と同じ",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "420g を水の質量と取りちがえるまちがい。",
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
      "text": "420g は水溶液の質量",
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
      "text": "水は 200 g",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_06": {
  "caption": "答え　(1) 22.5mL　(2) 黄色　(3) B を 2.5mL",
  "slides": [
   {
    "note": "A（塩酸）20mL と B（水酸化ナトリウム水溶液）15mL でちょうど中性。",
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
      "text": "A 20 mL ＋ B 15 mL → 中性",
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
      "text": "(1) A 30 mL に必要な B は？",
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
      "text": "(2) A 30 mL ＋ B 20 mL の BTB 色は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "A の量が変わっても、ちょうど中和する比は同じ。",
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
      "text": "A : B ＝ 20 : 15 ＝ 4 : 3",
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
      "text": "A が 1.5 倍 → B も 1.5 倍",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 30÷20＝1.5 倍。B＝15×1.5＝22.5mL。",
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
      "text": "30 ÷ 20 ＝ 1.5（倍）",
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
      "text": "15 × 1.5 ＝ 22.5",
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
      "text": "(1) 22.5 mL",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "必要な B は 22.5mL。20mL しか加えていないので B が足りない。",
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
      "text": "必要　22.5 mL",
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
      "text": "加えた　20 mL",
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
      "text": "B が足りない → 酸のはたらきが余る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 酸性なので BTB 溶液は黄色。",
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
      "text": "酸性 → BTB は黄色",
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
      "text": "（中性：緑、アルカリ性：青）",
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
      "text": "(2) 黄色",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(3) 足りない B＝22.5−20＝2.5mL。酸性なので B を加える。",
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
      "text": "22.5 − 20 ＝ 2.5",
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
      "text": "(3) B を 2.5 mL",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "B は合計 22.5mL になり、(1) と一致。A：B＝30：22.5＝4：3 で同じ比。",
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
      "text": "20 ＋ 2.5 ＝ 22.5 mL",
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
      "text": "30 : 22.5 ＝ 4 : 3",
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
      "text": "はじめの比と同じ",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "必要量と加えた量を見比べずに色を決めない。",
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
      "text": "22.5 と 20 を見比べる",
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
      "text": "少ないのは B → 酸性",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_07": {
  "caption": "答え　(1) だ液がデンプンを分解した　(2) 煮立たせるとはたらきを失う",
  "slides": [
   {
    "note": "4 本の試験管で、だ液とデンプンの実験。ヨウ素液を加えた結果は A・C・D が青紫、B だけ変化なし。",
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
      "y": 50,
      "w": 280,
      "h": 30,
      "text": "A：水＋35℃ → 青紫",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "B：だ液＋35℃ → 変化なし",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 122,
      "w": 280,
      "h": 30,
      "text": "C：だ液＋0℃ → 青紫",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 30,
      "text": "D：煮立てただ液＋35℃ → 青紫",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "ヨウ素液は、デンプンがあると青紫色になる。",
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
      "text": "青紫 ＝ デンプンが残っている",
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
      "text": "変化なし ＝ デンプンがない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) B と A のちがいは、だ液の有無だけ。",
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
      "text": "A（水）：デンプンが残る",
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
      "text": "B（だ液）：デンプンがなくなる",
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
      "text": "だ液のはたらき！",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) だ液がデンプンを別のもの（糖）に変えた。",
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
      "text": "だ液のはたらきで",
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
      "text": "デンプンが分解された",
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
      "text": "(1) の答え",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) B と D のちがいは、だ液を煮立たせたかどうかだけ。",
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
      "text": "B（そのまま）：なくなる",
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
      "text": "D（煮立てた）：デンプンが残る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "煮立たせただ液ははたらきを失う。",
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
      "text": "加熱するとだ液のはたらきが失われる",
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
      "text": "(2) の答え",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "おまけ：B と C のちがいは温度だけ。0℃ではデンプンが残る。",
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
      "text": "B（35℃）：なくなる",
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
      "text": "C（0℃）：残る",
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
      "text": "温度でもはたらきが変わる",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「だ液がヨウ素液と反応した」はまちがい。",
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
      "text": "ヨウ素液と反応するのはデンプン",
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
      "text": "だ液ではない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_08": {
  "caption": "答え　(1) Aa　(2) 1/4",
  "slides": [
   {
    "note": "丸い株 X × しわの株（aa）。子は丸 51 個、しわ 49 個。X の遺伝子を考える。",
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
      "text": "X：丸（AA か Aa かわからない）",
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
      "text": "かけ合わせる相手：しわ（aa）",
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
      "text": "結果：丸 51 ：しわ 49 ＝ ほぼ 1：1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "しわの株は aa。つくる生殖細胞は a だけ。",
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
      "text": "aa がつくる生殖細胞 ＝ すべて a",
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
      "text": "子の形は X からもらう遺伝子で決まる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "X が AA なら、子はすべて Aa で丸になる。",
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
      "text": "AA × aa → 子は すべて Aa（丸）",
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
      "text": "丸：しわ ＝ 1：0",
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
      "text": "実験と合わない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "X が Aa なら、子は Aa（丸）と aa（しわ）が 1：1。",
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
      "text": "Aa × aa → Aa（丸）：aa（しわ）",
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
      "text": "＝ 1 : 1",
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
      "text": "51 : 49 に合う",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) X の遺伝子の組み合わせは Aa。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "(1) Aa",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) Aa×Aa。生殖細胞は A と a が 1：1。子は AA：Aa：aa＝1：2：1。",
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
      "text": "AA : Aa : aa ＝ 1 : 2 : 1",
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
      "text": "しわ（aa）は 4 つのうち 1 つ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "しわの割合は 1/4。丸：しわ＝3：1 の基本の割合と一致。",
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
      "text": "(2) 1/4",
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
      "text": "丸 3 ：しわ 1 と同じ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "1:1（検定）と 3:1（自家受粉）を混ぜない。",
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
      "text": "かけ合わせ（aa）：丸：しわ＝1：1",
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
      "text": "自家受粉：丸：しわ＝3：1",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_09": {
  "caption": "答え　(1) 4900mL　(2) 約60秒",
  "slides": [
   {
    "note": "心臓は 1 分間に 70 回拍動し、1 回に 70mL 送り出す。血液は全部で 4900mL。",
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
      "text": "1 分間に 70 回拍動",
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
      "text": "1 回に 70 mL を送り出す",
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
      "text": "体全体の血液　4900 mL",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "1 分間に送り出す量は、1 回の量に回数をかければ出る。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "1 分間の量 ＝ 1 回の量 × 回数",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 70×70＝4900mL。",
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
      "text": "70 × 70 ＝ 4900（mL）",
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
      "text": "(1) 4900 mL",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "血液は体の中を回っている。全体の量が、送り出す量の何分ぶんかを見る。",
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
      "text": "全体の血液 ÷ 1 分間に送り出す量",
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
      "text": "＝ 1 周にかかる時間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 4900÷4900＝1 分。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "4900 ÷ 4900 ＝ 1（分）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "1 分＝60 秒。約 60 秒で 1 周。",
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
      "text": "1 分 ＝ 60 秒",
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
      "text": "(2) 約 60 秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "4900÷70＝70 回の拍動で全部の血液が送り出される。70 回は 1 分間の回数。",
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
      "text": "4900 ÷ 70 ＝ 70（回）",
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
      "text": "70 回 ＝ 1 分間の拍動回数",
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
      "text": "→ 約 60 秒で一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "たし算で 140mL にしてしまうまちがい。",
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
      "text": "70 ＋ 70 は ×",
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
      "text": "かけ算で 4900 mL",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_10": {
  "caption": "答え　(1) 59%　(2) 16℃　(3) 79%",
  "slides": [
   {
    "note": "25℃の空気 1m³ に水蒸気 13.6g。表で飽和水蒸気量を調べる。",
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
      "text": "水蒸気　13.6 g/m³（25℃）",
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
      "text": "25℃：23.1　20℃：17.3",
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
      "text": "16℃：13.6　14℃：12.1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "湿度は、水蒸気の量が飽和水蒸気量の何%か。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "湿度 ＝ 水蒸気量 ÷ 飽和水蒸気量 × 100",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 13.6÷23.1×100＝58.87…≒59%。",
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
      "text": "13.6 ÷ 23.1 ＝ 0.5887…",
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
      "text": "(1) 約 59 %",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "冷やすと飽和水蒸気量が下がる。13.6g に等しくなる気温が露点。",
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
      "text": "冷やしても水蒸気は 13.6 g のまま",
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
      "text": "飽和水蒸気量 ＝ 13.6 になる気温を探す",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 表で 13.6g/m³ になるのは 16℃。露点は 16℃。",
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
      "text": "16℃ のとき 13.6 g/m³",
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
      "text": "(2) 16 ℃",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(3) 20℃は 16℃より高いので水滴はできない。13.6÷17.3×100＝78.6…≒79%。",
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
      "text": "20℃の飽和水蒸気量 ＝ 17.3",
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
      "text": "13.6 ÷ 17.3 ＝ 0.786…",
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
      "text": "(3) 約 79 %",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "25℃：59%、20℃：79%、16℃：100%。冷やすほど湿度が上がる。",
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
      "text": "25℃：59 %",
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
      "text": "20℃：79 %",
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
      "text": "16℃：100 %（露点）",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "分母は、そのときの気温の飽和水蒸気量。",
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
      "text": "20℃のとき分母は 23.1 ではなく 17.3",
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
      "text": "気温が変われば分母も変わる",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_11": {
  "caption": "答え　(1) 78.4°　(2) 31.6°　(3) 31.6°、北の空",
  "slides": [
   {
    "note": "北緯 35 度の地点。夏至・冬至・南半球の同じ日で、太陽の南中高度を求める。",
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
      "x1": 20,
      "y1": 190,
      "x2": 300,
      "y2": 190,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 190,
      "r": 4,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "観測地点（北緯35度）",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 290,
      "y": 184,
      "text": "南",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 30,
      "y": 184,
      "text": "北",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "地軸のかたむき 23.4°",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "春分・秋分は太陽が赤道の真上。南中高度＝90°−緯度。",
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
      "text": "春分・秋分：90° − 35° ＝ 55°",
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
      "text": "夏至：太陽の真下が北へ 23.4°",
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
      "text": "冬至：太陽の真下が南へ 23.4°",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "春分・秋分の高度は 55°。",
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
      "x1": 20,
      "y1": 190,
      "x2": 300,
      "y2": 190,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 190,
      "r": 4,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "観測地点（北緯35度）",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 290,
      "y": 184,
      "text": "南",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 30,
      "y": 184,
      "text": "北",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 235,
      "y2": 84,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "label",
      "x": 239,
      "y": 94,
      "text": "55°",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     }
    ]
   },
   {
    "note": "(1) 夏至は 23.4°高いので 78.4°。",
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
      "x1": 20,
      "y1": 190,
      "x2": 300,
      "y2": 190,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 190,
      "r": 4,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "観測地点（北緯35度）",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 290,
      "y": 184,
      "text": "南",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 30,
      "y": 184,
      "text": "北",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 235,
      "y2": 84,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "label",
      "x": 239,
      "y": 94,
      "text": "55°",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 186,
      "y2": 63,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "label",
      "x": 190,
      "y": 71,
      "text": "78.4°（夏至）",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "55° ＋ 23.4° ＝ 78.4°",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(2) 冬至は 23.4°低いので 31.6°。",
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
      "x1": 20,
      "y1": 190,
      "x2": 300,
      "y2": 190,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 190,
      "r": 4,
      "color": "#2B2420",
      "fill": "#2B2420"
     },
     {
      "t": "label",
      "x": 160,
      "y": 210,
      "text": "観測地点（北緯35度）",
      "size": 11,
      "color": "#6E645C",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 290,
      "y": 184,
      "text": "南",
      "size": 11,
      "color": "#6E645C",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 30,
      "y": 184,
      "text": "北",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 235,
      "y2": 84,
      "color": "#6E645C",
      "width": 2
     },
     {
      "t": "label",
      "x": 239,
      "y": 94,
      "text": "55°",
      "size": 11,
      "color": "#6E645C",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 186,
      "y2": 63,
      "color": "#E11D48",
      "width": 2
     },
     {
      "t": "label",
      "x": 190,
      "y": 69,
      "text": "78.4°",
      "size": 11,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 190,
      "x2": 271,
      "y2": 122,
      "color": "#0284C7",
      "width": 2
     },
     {
      "t": "label",
      "x": 277,
      "y": 138,
      "text": "31.6°（冬至）",
      "size": 11,
      "color": "#0284C7",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "55° − 23.4° ＝ 31.6°",
      "size": 12,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(3) 夏至の日、太陽の真下は北緯 23.4°。南緯 35 度からは 35＋23.4＝58.4°はなれる。",
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
      "text": "太陽の真下：北緯 23.4°",
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
      "text": "南緯 35 度との差：35 ＋ 23.4 ＝ 58.4°",
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
      "text": "太陽は自分より北にある",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "南中高度＝90°−58.4°＝31.6°。北の空で南中。",
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
      "text": "90° − 58.4° ＝ 31.6°",
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
      "text": "(3) 31.6°、北の空",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) と (2) の差 78.4−31.6＝46.8° は 23.4°×2 と一致。",
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
      "text": "78.4 − 31.6 ＝ 46.8",
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
      "text": "23.4 × 2 ＝ 46.8",
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
      "text": "→ 一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_rika_12": {
  "caption": "答え　(1) 10時15分20秒　(2) 10時16分10秒",
  "slides": [
   {
    "note": "P波は秒速 8km、S波は秒速 4km。A でP波が 10:15:30、初期微動継続時間 10 秒。",
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
      "text": "P波 8 km/s、S波 4 km/s",
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
      "text": "A：P波 10時15分30秒",
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
      "text": "A：初期微動継続時間 10 秒",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "距離 d km なら、P波は d÷8 秒、S波は d÷4 秒で届く。",
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
      "text": "P波：d ÷ 8 秒",
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
      "text": "S波：d ÷ 4 秒",
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
      "text": "差：d÷4 − d÷8 ＝ d÷8 秒",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "初期微動継続時間＝d÷8＝10 秒なので、A までの距離は 80km。",
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
      "text": "d ÷ 8 ＝ 10",
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
      "text": "d ＝ 80（km）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "P波が A に届くまで 80÷8＝10 秒。発生は、観測の 10 秒前。",
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
      "text": "80 ÷ 8 ＝ 10（秒）",
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
      "text": "発生 ＝ 10:15:30 の 10 秒前",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 発生時刻は 10 時 15 分 20 秒。",
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
      "text": "10:15:30 − 10秒 ＝ 10:15:20",
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
      "text": "(1) 10時15分20秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "B までの距離は 80×2.5＝200km。S波は 200÷4＝50 秒で届く。",
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
      "text": "80 × 2.5 ＝ 200（km）",
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
      "text": "200 ÷ 4 ＝ 50（秒）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 10 時 15 分 20 秒の 50 秒後＝10 時 16 分 10 秒。",
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
      "text": "10:15:20 ＋ 50秒 ＝ 10:16:10",
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
      "text": "(2) 10時16分10秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "A の S波は 10:15:40 で、P波との差 10 秒。B は 25 秒で、距離が 2.5 倍なので 2.5 倍。",
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
      "text": "A：S波 10:15:40（差 10 秒）",
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
      "text": "B：P波 10:15:45、S波 10:16:10",
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
      "text": "差 25 秒 ＝ 10 × 2.5",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_01": {
  "caption": "答え　ものさしのちがい（カロリーと金額）",
  "slides": [
   {
    "note": "食料自給率（2024年度）はカロリーベース 38%、生産額ベース 64%。この差の理由を考える。",
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
      "text": "カロリーベース　38 %",
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
      "text": "生産額ベース　64 %",
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
      "text": "なぜ 26 ポイントも差がある？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "2 つはものさしがちがう。",
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
      "text": "カロリーベース → エネルギーで数える",
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
      "text": "生産額ベース → 金額で数える",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "カロリーが高くて安い品目は、カロリーベースで重みが大きい。",
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
      "text": "小麦・大豆・油脂類",
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
      "text": "カロリーは高いが金額は安い",
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
      "text": "輸入が多い → 38 % を下げる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "カロリーは低いが値段が高い品目は、生産額ベースで重みが大きい。",
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
      "text": "野菜・果実・魚介類",
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
      "text": "カロリーは低いが金額は高い",
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
      "text": "国産が多い → 64 % を上げる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめると、国産が多い品目と輸入が多い品目の重みが、ものさしでちがってくる。",
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
      "text": "カロリー：輸入品目（小麦・油脂）が重い",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "金額：国産品目（野菜・果実）が重い",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：ものさしのちがい、と品目の例を書く。",
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
      "text": "野菜・果実：安いのでなく高額・国産多い",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 94,
      "w": 280,
      "h": 30,
      "text": "小麦・油脂：高カロリー・安価・輸入多い",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 130,
      "w": 280,
      "h": 30,
      "text": "→ 64 % ＞ 38 %",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "向きを確かめる。64% ＞ 38% なので、金額では国産が目立つ。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "金額のものさし → 国産多い品目が重い",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "数字の向きと合っている",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「輸入が多い」とだけ書くのはまちがい。",
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
      "text": "差の理由は「ものさしのちがい」",
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
      "text": "品目の例を 2 つの数字に結びつける",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_02": {
  "caption": "答え　(1) 1200m　(2) 1/4m",
  "slides": [
   {
    "note": "地形図（2万5千分の1）。A と B の間は 4.8cm。A は標高 80m、B は 380m。",
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
      "y1": 170,
      "x2": 280,
      "y2": 170,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 280,
      "y1": 170,
      "x2": 280,
      "y2": 110,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 170,
      "x2": 280,
      "y2": 110,
      "color": "#B5622E",
      "width": 3
     },
     {
      "t": "circle",
      "cx": 40,
      "cy": 170,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "circle",
      "cx": 280,
      "cy": 110,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 36,
      "y": 188,
      "text": "A（80m）",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 284,
      "y": 104,
      "text": "B（380m）",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 222,
      "text": "地図上 4.8cm",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "縮尺 1/25000 は、地図上 1cm が実際の 25000cm。",
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
      "text": "地図上 1 cm ＝ 実際 25000 cm",
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
      "text": "25000 cm ＝ 250 m",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "単位は cm から m にそろえる。100 でわると m になる。",
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
      "text": "100 cm ＝ 1 m",
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
      "text": "だから cm の数を 100 でわる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 4.8×25000＝120000cm＝1200m。",
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
      "text": "4.8 × 25000 ＝ 120000（cm）",
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
      "text": "120000 ÷ 100 ＝ 1200（m）",
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
      "text": "(1) 1200 m",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 標高差は 380−80＝300m。水平距離は 1200m。",
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
      "x1": 40,
      "y1": 170,
      "x2": 280,
      "y2": 170,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 280,
      "y1": 170,
      "x2": 280,
      "y2": 110,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 170,
      "x2": 280,
      "y2": 110,
      "color": "#B5622E",
      "width": 3
     },
     {
      "t": "circle",
      "cx": 40,
      "cy": 170,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "circle",
      "cx": 280,
      "cy": 110,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 36,
      "y": 188,
      "text": "A（80m）",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 284,
      "y": 104,
      "text": "B（380m）",
      "size": 12,
      "color": "#E11D48",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 160,
      "y": 200,
      "text": "水平 1200 m",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": true
     },
     {
      "t": "label",
      "x": 272,
      "y": 145,
      "text": "300 m",
      "size": 12,
      "color": "#16A34A",
      "anchor": "end",
      "bold": true
     }
    ]
   },
   {
    "note": "300÷1200＝1/4。水平に 1m 進むごとに 1/4m 高くなる。",
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
      "text": "300 ÷ 1200 ＝ 1/4",
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
      "text": "(2) 1/4 m",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "4.8cm×250m/cm＝1200m で一致。4m 進んで 1m 上がるなら、300m 上がるのに 1200m 進む。",
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
      "text": "250 × 4.8 ＝ 1200 m",
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
      "text": "4 × 300 ＝ 1200 m",
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
      "text": "→ 一致",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "25000 を m のまま計算しないこと。",
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
      "text": "25000 は cm の数",
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
      "text": "m に直すときは 100 でわる",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_03": {
  "caption": "答え　南緯36度・西経40度（海）",
  "slides": [
   {
    "note": "東京（東経140度・北緯36度）の、地球の反対側の地点を求める。",
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
      "r": 82,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 122,
      "x2": 250,
      "y2": 122,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "label",
      "x": 252,
      "y": 126,
      "text": "赤道",
      "size": 10,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 226,
      "y1": 74,
      "x2": 94,
      "y2": 170,
      "color": "#B5622E",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 226,
      "cy": 74,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 236,
      "y": 66,
      "text": "東京",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 236,
      "y": 80,
      "text": "北緯36度",
      "size": 10,
      "color": "#E11D48"
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "地球の中心を通って反対側へ",
      "size": 12,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "地球の中心を通る直線の両はしの 2 点は、赤道から見て同じ角度で反対の向き。",
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
      "text": "中心を通る直線の反対側の点 ＝ 対蹠点",
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
      "text": "緯度は同じ角度で、北↔南が反対",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(緯度) 北緯 36 度の反対側は南緯 36 度。",
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
      "r": 82,
      "color": "#0284C7",
      "fill": "#E0F2FE"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 122,
      "x2": 250,
      "y2": 122,
      "color": "#6E645C",
      "dashed": true
     },
     {
      "t": "label",
      "x": 252,
      "y": 126,
      "text": "赤道",
      "size": 10,
      "color": "#6E645C"
     },
     {
      "t": "line",
      "x1": 226,
      "y1": 74,
      "x2": 94,
      "y2": 170,
      "color": "#B5622E",
      "width": 2
     },
     {
      "t": "circle",
      "cx": 226,
      "cy": 74,
      "r": 4,
      "color": "#E11D48",
      "fill": "#E11D48"
     },
     {
      "t": "label",
      "x": 236,
      "y": 66,
      "text": "東京",
      "size": 12,
      "color": "#E11D48",
      "bold": true
     },
     {
      "t": "label",
      "x": 236,
      "y": 80,
      "text": "北緯36度",
      "size": 10,
      "color": "#E11D48"
     },
     {
      "t": "circle",
      "cx": 94,
      "cy": 170,
      "r": 4,
      "color": "#9333EA",
      "fill": "#9333EA"
     },
     {
      "t": "label",
      "x": 84,
      "y": 182,
      "text": "対蹠点",
      "size": 12,
      "color": "#9333EA",
      "anchor": "end",
      "bold": true
     },
     {
      "t": "label",
      "x": 84,
      "y": 196,
      "text": "南緯36度",
      "size": 10,
      "color": "#9333EA",
      "anchor": "end"
     },
     {
      "t": "label",
      "x": 160,
      "y": 232,
      "text": "北緯36度 ⇔ 南緯36度",
      "size": 12,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": true
     }
    ]
   },
   {
    "note": "(経度) 地球 1 周は 360 度。反対側は 180 度ずれる。",
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
      "text": "東経 140 度 ＋ 180 度 ＝ 320 度",
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
      "text": "東経は 180 度まで",
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
      "text": "→ 360 − 320 ＝ 40 度の西経",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "経度は、足して 180 度になる反対側。140＋40＝180。",
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
      "text": "東経 140 度 ＋ 西経 40 度 ＝ 180 度",
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
      "text": "→ 西経 40 度",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "南緯 36 度・西経 40 度は、南アメリカの東の沖、南大西洋の海上。",
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
      "text": "南緯 36 度、西経 40 度",
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
      "text": "陸ではなく海（南大西洋）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "140＋40＝180。緯度は赤道に対して対称。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "経度：140 ＋ 40 ＝ 180",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "緯度：北36 ⇔ 南36",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "緯度だけ反対にして経度を変え忘れないこと。",
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
      "text": "南緯36度・東経140度は反対側ではない",
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
      "text": "（日本の真南の地点）",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_04": {
  "caption": "答え　モノカルチャー経済",
  "slides": [
   {
    "note": "輸出額の約 7 割がコーヒー豆の国。この経済の名前と、収入が不安定な理由は？",
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
      "text": "輸出額の約 7 割 ＝ コーヒー豆",
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
      "text": "この経済の名前は？",
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
      "text": "収入が不安定なのはなぜ？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "1 つの品目に収入をたよる経済を、モノカルチャー経済という。",
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
      "text": "モノ ＝ 1 つ",
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
      "text": "カルチャー ＝ 栽培",
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
      "text": "→ モノカルチャー経済",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "農産物の国際価格は、年によって大きく上下する。",
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
      "text": "世界の需要と供給で決まる",
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
      "text": "価格が下がる → 収入が減る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "農産物は、天候が悪いと収穫量が減る。",
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
      "text": "干ばつ・病害虫で不作",
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
      "text": "輸出できる量が減る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "収入の源が 1 つだと、減った分を、ほかでおぎなえない。",
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
      "text": "コーヒー豆だけに集中",
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
      "text": "ほかの産業でカバーできない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：モノカルチャー経済。国際価格の下落や不作で収入が大きく減る。",
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
      "text": "モノカルチャー経済",
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
      "text": "価格が下がる／不作 → 収入が減る",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "輸出品を多様にしたい国が多いのは、この弱点をへらすため。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "工業などを育てて",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "輸出品をふやす → 収入が安定",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "プランテーションは大農園の方法で、経済の名前ではない。",
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
      "text": "プランテーション ≠ 経済の名前",
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
      "text": "（大農園で輸出作物をつくる農業）",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_05": {
  "caption": "答え　武士と農民の身分が分かれた（兵農分離）",
  "slides": [
   {
    "note": "秀吉の太閤検地と刀狩は、社会をどう変えたか。「兵農分離」を使って説明する。",
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
      "text": "太閤検地と刀狩",
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
      "text": "社会はどう変わったか",
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
      "text": "「兵農分離」を使って説明",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "戦国時代は、農民が武士になるなど、身分があいまいだった。",
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
      "text": "農民が武士に、武士が農村に",
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
      "text": "身分の区別があいまい",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "太閤検地：田畑を調べ、耕作者を検地帳に登録して年貢を納めさせた。",
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
      "text": "検地帳に耕作者を登録",
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
      "text": "だれが年貢を納めるかが決まる",
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
      "text": "→ 農民",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "刀狩：農民の刀・やり・鉄砲を取り上げた。",
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
      "text": "農民の武器を取り上げる",
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
      "text": "一揆をおさえる",
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
      "text": "→ 武器は武士だけ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2 つをあわせると、農民と武士の役割が分かれた。",
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
      "text": "農民 ＝ 耕して年貢を納める",
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
      "text": "武士 ＝ 武器を持って戦う",
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
      "text": "→ 兵農分離",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：検地と刀狩で、武士と農民の身分が区別された。",
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
      "text": "検地：耕作者を登録・年貢",
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
      "text": "刀狩：武器を取り上げる",
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
      "text": "→ 兵農分離",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "検地＝農、刀狩＝兵に対応している。",
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
      "text": "検地 → 農民の確定",
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
      "text": "刀狩 → 武士だけが武器",
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
      "text": "「兵」と「農」を分ける",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "1 つずつ説明して終わらないこと。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "2つが兵農分離につながった点を書く",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_06": {
  "caption": "答え　シベリア出兵を見こした米の買いしめ",
  "slides": [
   {
    "note": "1918 年に富山県から全国に広がった米騒動。きっかけは？",
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
      "text": "1918 年　富山県から全国へ",
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
      "text": "米屋などに人々がおしかけた",
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
      "text": "きっかけは何か",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "背景：大戦景気で物価が上がり、庶民の生活は苦しかった。",
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
      "text": "第一次世界大戦の好景気",
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
      "text": "物価は上がるが賃金は追いつかない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "1918 年にシベリア出兵が決まった。",
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
      "text": "政府がシベリア出兵を決める",
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
      "text": "軍隊に大量の米が必要になる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "米が足りなくなると見こして、商人が米を買いしめた。",
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
      "text": "「米は値上がりする」と予想",
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
      "text": "商人・地主が買いしめ・売りおしみ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "結果：米の値段が急に上がり、米が買えない人が出た。",
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
      "text": "米の値段が急上昇",
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
      "text": "生活が苦しい人が米屋におしかける",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：シベリア出兵を見こした米の買いしめで、米価が急に上がった。",
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
      "text": "シベリア出兵 → 買いしめ",
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
      "text": "→ 米の値段が急に上がる",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "騒動のあと、寺内内閣が退き、原敬の政党内閣ができた。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "米騒動 → 寺内内閣が総辞職",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "→ 原敬の政党内閣",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "実際に不足したのではなく、不足を見こしたのが原因。",
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
      "text": "「米が不足した」は不正確",
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
      "text": "見こして買いしめたのが原因",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_07": {
  "caption": "答え　領事裁判権と関税自主権",
  "slides": [
   {
    "note": "1858 年の日米修好通商条約。日本に不平等な内容を 2 つ答える。",
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
      "text": "1858 年　日米修好通商条約",
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
      "text": "日本に不利な内容が 2 つ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "1 つめは、外国人が罪を犯したときに、だれが裁くか。",
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
      "text": "外国人が日本で罪を犯したら？",
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
      "text": "→ だれが裁く？",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "領事裁判権：その国の領事が、自分の国の法律で裁く。",
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
      "text": "日本の法律で裁けない",
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
      "text": "領事裁判権（治外法権）を認めた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2 つめは、輸入品にかける税。",
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
      "text": "輸入品にかける税（関税）",
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
      "text": "→ だれが決める？",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "関税自主権がない：日本が関税を自分で決められない。",
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
      "text": "関税を自由に決められない",
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
      "text": "安い外国製品が大量に入る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：領事裁判権を認め、関税自主権がなかった。",
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
      "text": "① 領事裁判権を認めた",
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
      "text": "② 関税自主権がない",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "どちらも「自分で決める権利」が欠けている。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "裁判の権利と税の権利",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "ともに日本の主権がそこなわれた",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「港を開いた」こと自体は不平等ではない。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "開港は不平等の内容ではない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_08": {
  "caption": "答え　アヘンの密輸出、香港",
  "slides": [
   {
    "note": "1840 年に始まったアヘン戦争。原因と、イギリスが得た島は？",
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
      "text": "1840 年　アヘン戦争",
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
      "text": "(1) 原因となったイギリスの行為",
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
      "text": "(2) 南京条約で得た島",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "イギリスは清から茶を大量に買い、銀が清に流れ出ていた。",
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
      "text": "茶を輸入 → 銀が清へ",
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
      "text": "銀の流出をとりもどしたい",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "そこで、植民地インドのアヘンを清に売りこんだ。",
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
      "text": "インドでアヘンを栽培",
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
      "text": "清へ密輸出して銀をとりもどす",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "アヘンの害と銀の流出から、清は取りしまりを強めた。",
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
      "text": "清：アヘンの取りしまり",
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
      "text": "イギリスが不満 → 戦争",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) インド産アヘンの清への密輸出。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "(1) アヘンの密輸出",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "戦争に負けた清は、1842 年に南京条約を結んだ。",
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
      "text": "1842 年　南京条約",
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
      "text": "上海などの 5 港を開く",
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
      "text": "賠償金を払う",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 清は香港をイギリスに譲った。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "(2) 香港",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "マカオはポルトガル領。まちがえないこと。",
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
      "text": "マカオ ＝ ポルトガル",
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
      "text": "香港 ＝ イギリス",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_09": {
  "caption": "答え　衆議院の議決が国会の議決",
  "slides": [
   {
    "note": "予算で、衆議院と参議院の議決が異なり、両院協議会でも一致しない。どうなる？",
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
      "text": "予算：衆議院と参議院で議決が異なる",
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
      "text": "両院協議会でも一致しない",
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
      "text": "国会の議決は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "いつまでも決まらないと、政治が止まってしまう。",
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
      "text": "二院制で意見が分かれることがある",
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
      "text": "決まらないと困る",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "そこで、憲法は衆議院の議決を優先させる。",
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
      "text": "衆議院の優越",
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
      "text": "予算・条約の承認・内閣総理大臣の指名など",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "答え：衆議院の議決が、国会の議決となる。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "衆議院の議決 ＝ 国会の議決",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "なぜ衆議院が優先？ 任期の長さのちがい。",
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
      "text": "衆議院：任期 4 年",
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
      "text": "参議院：任期 6 年（3年ごとに半数改選）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "衆議院には解散がある。選挙のたびに民意が反映される。",
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
      "text": "衆議院：解散あり",
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
      "text": "参議院：解散なし",
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
      "text": "→ 衆議院は民意を反映しやすい",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "30 日以内に参議院が議決しなくても、衆議院の議決が国会の議決。",
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
      "text": "予算の議決：30日ルール",
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
      "text": "法律案：衆議院で 3分の 2 以上の再可決",
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
      "text": "→ いずれも衆議院優先",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "「議員が多いから」は理由ではない。",
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
      "text": "理由は任期の短さと解散",
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
      "text": "議員の数は理由ではない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_10": {
  "caption": "答え　3000円、2400円、円高",
  "slides": [
   {
    "note": "1 ドル＝150 円で、20 ドルの商品を輸入する。相場が 120 円になると？",
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
      "text": "1 ドル ＝ 150 円（はじめ）",
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
      "text": "商品　20 ドル",
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
      "text": "1 ドル ＝ 120 円（あと）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "円の値段は、ドルの値段に「1ドルが何円か」をかける。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "円の値段 ＝ ドルの値段 × 為替相場",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "150 円のとき：20×150＝3000 円。",
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
      "text": "20 × 150 ＝ 3000",
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
      "text": "3000 円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "120 円のとき：20×120＝2400 円。",
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
      "text": "20 × 120 ＝ 2400",
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
      "text": "2400 円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "1 ドルを買うのに必要な円が減った。円の価値が上がったので、円高。",
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
      "text": "150 円 → 120 円（必要な円が減る）",
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
      "text": "円の価値が上がる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え：3000 円、2400 円、円高。",
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
      "text": "3000 円、2400 円",
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
      "text": "円高",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "輸入品は 600 円安くなる。円高は輸入に有利。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "3000 − 2400 ＝ 600 円",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "円高 → 輸入品が安い",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "数字が小さくなるのは円高。",
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
      "text": "数字が減る＝円の価値が上がる",
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
      "text": "円高",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_11": {
  "caption": "答え　694年・持統天皇・碁盤の目の都",
  "slides": [
   {
    "note": "2026 年 7 月に登録された「飛鳥・藤原の宮都」。藤原京がいつ、どんな都になったか。",
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
      "text": "飛鳥・藤原の宮都とその関連資産群",
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
      "text": "藤原京は何年、だれの時代？",
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
      "text": "どんな特徴？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "飛鳥時代の都は、天皇の代がわりごとにうつった。",
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
      "text": "代がわりごとに宮をうつす",
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
      "text": "街づくりは整っていなかった",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "7 世紀の終わり、中国（唐）の都にならって、本格的な都をつくった。",
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
      "text": "中国の都をまねる",
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
      "text": "道路で碁盤の目に区切る（条坊制）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "年と天皇：694 年、持統天皇。",
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
      "text": "694 年",
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
      "text": "持統天皇",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "特徴：碁盤の目のように区切られた、日本初の本格的な都。",
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
      "text": "碁盤の目の道路（条坊制）",
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
      "text": "日本初の本格的な都",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "のちの平城京・平安京に受けつがれた。",
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
      "text": "694 年　藤原京",
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
      "text": "710 年　平城京",
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
      "text": "794 年　平安京",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "694→710→794。藤原京が、碁盤の目の都の出発点。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "約 100 年に 2 回遷都",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "条坊制は平城京・平安京へ",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "710 年は平城京。取りちがえないこと。",
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
      "text": "694 ＝ 藤原京",
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
      "text": "710 ＝ 平城京",
      "color": "#B5622E",
      "fill": "#FEF9C3",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_azabu_shakai_12": {
  "caption": "答え　高市早苗／国会が指名・天皇が任命",
  "slides": [
   {
    "note": "2025 年 10 月に就任した現在の内閣総理大臣と、選ばれる手続きを答える。",
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
      "text": "2025 年 10 月に就任",
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
      "text": "内閣総理大臣はだれ？",
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
      "text": "だれが指名し、だれが任命する？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "国民が直接選ぶのではない。",
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
      "text": "総理大臣は国民が直接選ばない",
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
      "text": "国会が関わる（議院内閣制）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "指名：国会が、国会議員の中から指名する（憲法第 67 条）。",
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
      "text": "国会議員の中から",
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
      "text": "国会の議決で指名",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "任命：国会の指名にもとづいて、天皇が任命する（憲法第 6 条）。",
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
      "text": "天皇の仕事は国事行為",
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
      "text": "形式的な任命",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2025 年 10 月に、高市早苗氏が指名・任命された。",
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
      "y": 76,
      "w": 280,
      "h": 30,
      "text": "内閣総理大臣　高市早苗",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "手続きは「国会が指名 → 天皇が任命」。",
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
      "text": "指名 ＝ 国会",
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
      "text": "任命 ＝ 天皇",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "国民が選んだ国会に、内閣が責任を負う議院内閣制。",
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
      "y": 68,
      "w": 280,
      "h": 30,
      "text": "国会議員の中から選ぶ",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 104,
      "w": 280,
      "h": 30,
      "text": "内閣は国会に責任を負う",
      "color": "#B5622E",
      "fill": "#FFF8EC",
      "size": 14
     }
    ]
   },
   {
    "note": "指名と任命を逆にしないこと。",
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
      "text": "指名は国会、任命は天皇",
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
      "text": "国民の直接選挙ではない",
      "color": "#B5622E",
      "fill": "#FEF9C3",
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
