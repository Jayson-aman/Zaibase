// 本試験対策（学校別）早稲田大学附属高校 準拠の自作問題の動く図解。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
 "honshiken_school_koko_waseda_sansu_01": {
  "caption": "答え　80",
  "slides": [
   {
    "note": "x＝√7＋√3、y＝√7−√3 のとき、x³y＋xy³ の値を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x＝√7＋√3",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "y＝√7−√3",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "x³y＋xy³ ＝ ？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "3乗をそのまま代入すると根号がふくらむ。そこで、まず式の形を見る。x³y と xy³ には共通因数 xy がある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x³y＋xy³",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "共通因数は xy",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "xy でくくると、残りは x²＋y² になる。形が「対称」だと、和・積・2乗の和だけで書ける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x³y＋xy³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝ xy ×（x²＋y²）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "xy を計算する。和と差の積の公式 (a＋b)(a−b)＝a²−b² を使う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "xy＝(√7＋√3)(√7−√3)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝7−3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "x² を展開する。(√7＋√3)²＝7＋2√21＋3＝10＋2√21。y² は符号が逆で 10−2√21。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x²＝10＋2√21",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "y²＝10−2√21",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "足すと √21 の項が打ち消し合い、x²＋y²＝20。根号が消えるのが対称式のよさ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x²＋y²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝(10＋2√21)＋(10−2√21)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝20",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "代入する。xy(x²＋y²)＝4×20＝80。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "xy×(x²＋y²)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝4×20",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝80",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。x≒4.378、y≒0.914 で xy≒4.00、x²＋y²≒20.0。4×20＝80 で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x≒4.378、y≒0.914",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "xy≒4.00",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "x²＋y²≒20.0 → 80",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_02": {
  "caption": "答え　8個",
  "slides": [
   {
    "note": "2けたの数 N と、十の位・一の位を入れかえた数の和が平方数になる N は何個か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "N＝29 なら",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "29＋92＝121",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "121＝11×11（平方数）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "文字で表す。十の位 a、一の位 b なら N＝10a＋b、入れかえた数は 10b＋a。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "N＝10a＋b",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "入れかえた数＝10b＋a",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "和をつくる。(10a＋b)＋(10b＋a)＝11a＋11b＝11(a＋b)。いつも 11 の倍数になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(10a＋b)＋(10b＋a)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝11a＋11b",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝11(a＋b)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "理由。11 は素数。平方数は素因数の指数がすべて偶数。11 が1個だけでは足りない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "11(a＋b)＝平方数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "11 の指数は偶数が必要",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "a＋b も 11 の倍数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "a、b は 1 けたなので a＋b は最大 18。11 の倍数は 11 だけ。条件は a＋b＝11。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "a＋b≦9＋9＝18",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "11 の倍数は 11 だけ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "a＋b＝11",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "a＋b＝11 を数える。a＝2〜9 なら b＝9〜2。a＝1 は b＝10 になり不可。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "a＝2,3,4,5,6,7,8,9",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "b＝9,8,7,6,5,4,3,2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "a＝1 は b＝10 で不可",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "できた数：29、38、47、56、65、74、83、92。ちょうど 8 個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "29　38　47　56",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "65　74　83　92",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "8 個",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。29＋92、38＋83、47＋74、56＋65 は、どれも和が 121＝11²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "29＋92＝121",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "47＋74＝121",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "どれも 11²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_03": {
  "caption": "答え　分速360m",
  "slides": [
   {
    "note": "周囲1800mの池。A君・B君が同じ地点から出発。A君の分速を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "周囲 1800m",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "反対向き：3分で出会う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "同じ向き：15分で追いつく",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "反対向きに歩くと、2人の間の道のりは1分に（A＋B）だけ縮まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "縮む速さ＝A＋B",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "3分で1800m縮む",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "1800÷3＝600。つまり、A＋B＝分速600m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "A＋B＝1800÷3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝600（分速）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "同じ向きだと、2人の差は1分に（A−B）だけ広がる。1周分の差がつくと追いつく。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "広がる速さ＝A−B",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "15分で1800m広がる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "1800÷15＝120。つまり、A−B＝分速120m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "A−B＝1800÷15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝120（分速）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "和差算。A＝(和＋差)÷2＝(600＋120)÷2＝360。B＝(和−差)÷2＝240。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "A＝(600＋120)÷2＝360",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "B＝(600−120)÷2＝240",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。A君の速さは分速360m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "A君　分速360m",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。360＋240＝600で3分に1800m。360−240＝120で15分に1800m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "360＋240＝600×3＝1800",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "360−240＝120×15＝1800",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_04": {
  "caption": "答え　7/36",
  "slides": [
   {
    "note": "x²−ax＋b＝0 の解が2つとも整数になる (a, b) の確率を求める。a、b は 1〜6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x²−ax＋b＝0",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "解が整数になる確率は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "全体 6×6＝36 通り",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "解を p、q とすると x²−ax＋b＝(x−p)(x−q)。展開すると x²−(p＋q)x＋pq。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(x−p)(x−q)",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝x²−(p＋q)x＋pq",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "a＝p＋q、b＝pq",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "a、b は正なので p、q は正の整数。しかも p＋q≦6、pq≦6 と、小さい数に絞られる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "p、q は正の整数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "p＋q≦6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "pq≦6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "p≦q で書き出す。(1,1)(1,2)(1,3)(1,4)(1,5)(2,2)(2,3) の7組。(1,6) は p＋q＝7、(3,3) は pq＝9 で不可。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(1,1)(1,2)(1,3)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "(1,4)(1,5)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "(2,2)(2,3)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(p, q) を (a, b)＝(p＋q, pq) に直す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "(1,1)→(2,1)　(1,2)→(3,2)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "(1,3)→(4,3)　(1,4)→(5,4)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "(1,5)→(6,5)　(2,2)→(4,4)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "(2,3)→(5,6)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "(a, b) の組は 7 通り。確率は 7÷36。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "条件に合う (a, b)＝7通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "全体＝36通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "7/36",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。(5,6) は (x−2)(x−3)、(4,4) は (x−2)²。たしかに整数解。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x²−5x＋6＝(x−2)(x−3)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x²−4x＋4＝(x−2)²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "対比。(6,4) は x²−6x＋4。判別式 36−16＝20 は平方数でなく、整数解にならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x²−6x＋4＝0",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "判別式 20 は平方数でない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "整数解にならない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_05": {
  "caption": "答え　P(2,4)、(1±√7, 8±2√7)",
  "slides": [
   {
    "note": "放物線 y＝x² 上の A(−1,1)、B(3,9)。O と異なる点 P で △PAB＝△OAB となるものを探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "line",
      "x1": 64.80000000000001,
      "y1": 159.92,
      "x2": 71.6,
      "y2": 171.48,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 71.6,
      "y1": 171.48,
      "x2": 78.4,
      "y2": 181.68,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 78.4,
      "y1": 181.68,
      "x2": 85.19999999999999,
      "y2": 190.52,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 85.19999999999999,
      "y1": 190.52,
      "x2": 92.0,
      "y2": 198.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 92.0,
      "y1": 198.0,
      "x2": 98.8,
      "y2": 204.12,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 98.8,
      "y1": 204.12,
      "x2": 105.6,
      "y2": 208.88,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.6,
      "y1": 208.88,
      "x2": 112.4,
      "y2": 212.28,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 112.4,
      "y1": 212.28,
      "x2": 119.2,
      "y2": 214.32,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.2,
      "y1": 214.32,
      "x2": 126.0,
      "y2": 215.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 215.0,
      "x2": 132.8,
      "y2": 214.32,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.8,
      "y1": 214.32,
      "x2": 139.6,
      "y2": 212.28,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 139.6,
      "y1": 212.28,
      "x2": 146.4,
      "y2": 208.88,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 146.4,
      "y1": 208.88,
      "x2": 153.2,
      "y2": 204.12,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 153.2,
      "y1": 204.12,
      "x2": 160.0,
      "y2": 198.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 160.0,
      "y1": 198.0,
      "x2": 166.8,
      "y2": 190.52,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 166.8,
      "y1": 190.52,
      "x2": 173.6,
      "y2": 181.68,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 181.68,
      "x2": 180.4,
      "y2": 171.48,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180.4,
      "y1": 171.48,
      "x2": 187.2,
      "y2": 159.92,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.2,
      "y1": 159.92,
      "x2": 194.0,
      "y2": 147.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.0,
      "y1": 147.0,
      "x2": 200.8,
      "y2": 132.71999999999997,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.8,
      "y1": 132.71999999999997,
      "x2": 207.60000000000002,
      "y2": 117.07999999999997,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.60000000000002,
      "y1": 117.07999999999997,
      "x2": 214.40000000000003,
      "y2": 100.07999999999996,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.40000000000003,
      "y1": 100.07999999999996,
      "x2": 221.20000000000002,
      "y2": 81.71999999999991,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.20000000000002,
      "y1": 81.71999999999991,
      "x2": 228.00000000000003,
      "y2": 61.999999999999915,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 228.00000000000003,
      "y1": 61.999999999999915,
      "x2": 234.8,
      "y2": 40.91999999999996,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.8,
      "y1": 40.91999999999996,
      "x2": 241.60000000000002,
      "y2": 18.47999999999996,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 58,
      "y1": 215,
      "x2": 268.8,
      "y2": 215,
      "color": "#6E645C",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 126,
      "y1": 223.5,
      "x2": 126,
      "y2": 28,
      "color": "#6E645C",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 78.4,
      "y1": 218.4,
      "x2": 234.8,
      "y2": 55.19999999999999,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 78,
      "y": 194,
      "text": "A",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 238,
      "y": 66,
      "text": "B",
      "size": 12,
      "color": "#0284C7",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 117,
      "y": 227,
      "text": "O",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "まず直線 AB。傾き (9−1)÷(3＋1)＝2、A を通るので y＝2x＋3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "傾き＝(9−1)÷4＝2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "y＝2x＋3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△PAB と △OAB は底辺 AB が共通。面積が等しいのは、P と O が AB から同じ距離のとき。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "底辺 AB が共通",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "面積が等しい",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "⇔ AB からの距離が等しい",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "同じ距離の点は、AB に平行な2本の直線の上。1本は O を通る y＝2x。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "AB に平行（傾き2）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "1本目：O を通る y＝2x",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "y＝2x と放物線：x²＝2x → x＝0、2。O 以外の P は (2, 4)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x²＝2x",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "x＝0（O）、x＝2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "P(2, 4)",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "もう1本は AB の反対側。y 切片は 3 を中心に 0 と対称な 6。y＝2x＋6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "切片：0 ← 3 → 6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "2本目：y＝2x＋6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "x²＝2x＋6 → x²−2x−6＝0 → x＝1±√7。y＝2x＋6 に代入して y＝8±2√7。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x²−2x−6＝0",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "x＝1±√7",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "y＝8±2√7",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。P は3点：(2, 4)、(1＋√7, 8＋2√7)、(1−√7, 8−2√7)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(2, 4)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "(1＋√7, 8＋2√7)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "(1−√7, 8−2√7)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_06": {
  "caption": "答え　CD＝7√2 cm",
  "slides": [
   {
    "note": "AB＝10cm が直径の円。AC＝6cm の円周上の点 C。∠ACB の二等分線が円と交わるもう一つの点 D。CD を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "AB＝10（直径）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "AC＝6",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "CD＝？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "直径に対する円周角は 90°。∠ACB＝90° なので、三平方より BC＝8cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "∠ACB＝90°",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "BC＝√(100−36)",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "BC＝8",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "∠ACD＝∠DCB＝45°。等しい円周角に対する弧は等しいので、AD＝DB。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "∠ACD＝∠DCB＝45°",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "弧AD＝弧DB",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "AD＝DB",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "△ADB は ∠ADB＝90°、AD＝DB の直角二等辺三角形。AD＝DB＝5√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "∠ADB＝90°",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "AD＝DB＝10÷√2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝5√2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "A、B から直線 CD に垂線 AF、BG。∠ACF＝45° なので CF＝AF＝6÷√2＝3√2、CG＝BG＝4√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "CF＝AF＝3√2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "CG＝BG＝4√2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△AFD≡△DGB。斜辺 AD＝DB、∠ADF＝∠ABC＝∠DBG。よって DF＝BG＝4√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "△AFD ≡ △DGB",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "斜辺と鋭角1つが等しい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "DF＝BG＝4√2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "CD＝CF＋FD＝3√2＋4√2＝7√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "CD＝CF＋FD",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝3√2＋4√2",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝7√2 cm",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。公式 CD＝(AC＋BC)÷√2＝14÷√2＝7√2 とも一致。約 9.9cm で、直径10cm より短い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "(6＋8)÷√2＝7√2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "≒9.9cm＜10cm（直径）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_07": {
  "caption": "答え　3/2 cm",
  "slides": [
   {
    "note": "底面1辺6cm、高さ4cm の正四角錐に内接する球の半径 r を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "底面：1辺6cmの正方形",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "高さ：4cm",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "内接する球の半径 r",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "球は4つの側面と底面に接する。中心は頂点と底面の中心を結ぶ線上にある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "中心は高さの線上",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "対称だから",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "向かい合う2辺の中点と頂点を通る面で切る。切り口は二等辺三角形の中の円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "底辺6cm、高さ4cm",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "円は3辺に接する",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝三角形の内接円",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "斜辺は、底辺の半分3cm と高さ4cm の直角三角形から √(9＋16)＝5cm。三角形は 5、5、6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "斜辺＝√(3²＋4²)＝5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "三辺は 5、5、6",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "面積 S＝6×4÷2＝12。周の長さ L＝5＋5＋6＝16。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "面積 S＝12cm²",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "周 L＝16cm",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "S＝(1/2)×r×L だから r＝2S÷L。ここが公式の理由：三角形を中心から3つに分けると、高さがすべて r。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "S＝½×r×L",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "r＝2S÷L",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝24÷16",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。r＝3/2cm（1.5cm）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "r＝3/2 cm",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。中心は底面から 1.5cm。頂点までは 2.5cm で、2.5×3/5＝1.5。斜辺までの距離と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "中心の高さ1.5cm",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "頂点まで2.5cm",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "2.5×3/5＝1.5",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_08": {
  "caption": "答え　44cm²",
  "slides": [
   {
    "note": "面積120cm² の平行四辺形 ABCD。BE：EC＝2：1 の点 E をとり、AE と BD の交点を P とする。四角形 PECD の面積は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "poly",
      "pts": [
       [
        70,
        60
       ],
       [
        40,
        170
       ],
       [
        250,
        170
       ],
       [
        280,
        60
       ]
      ],
      "color": "#6E645C",
      "fill": "#F1EFEA"
     },
     {
      "t": "label",
      "x": 70,
      "y": 54,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 30,
      "y": 182,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 260,
      "y": 182,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 286,
      "y": 54,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 180.0,
      "y": 184,
      "text": "E",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "line",
      "x1": 70,
      "y1": 60,
      "x2": 180.0,
      "y2": 170,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 170,
      "x2": 280,
      "y2": 60,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 118.0,
      "text": "P",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "AD∥BE なので、△PAD と △PEB は相似（平行線の錯角）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "AD∥BC",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "△PAD ∽ △PEB",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "BC を3とすると BE＝2、AD＝3。相似比 AD：EB＝3：2 なので DP：PB＝3：2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "AD：EB＝3：2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "DP：PB＝3：2",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "BP：BD＝2：5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "対角線で2等分。△ABD＝△BCD＝60cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "120÷2＝60",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "△ABD＝△BCD＝60",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△ABE。△ABC の 2/3（BE：BC＝2：3）。△ABC＝60 なので △ABE＝40。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "△ABE＝60×2/3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝40",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△ABP は △ABD の BP/BD＝2/5。60×2/5＝24。△PBE＝40−24＝16。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "△ABP＝60×2/5＝24",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "△PBE＝40−24＝16",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "四角形 PECD は、△BCD から △PBE を引いたもの。60−16＝44。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "PECD＝△BCD−△PBE",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝60−16",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝44 cm²",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。別解：120−△ABE40−△APD36＝44。△APD＝60×3/5＝36。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "120−40−36＝44",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "2通りで一致",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_09": {
  "caption": "答え　231",
  "slides": [
   {
    "note": "1、3、6、10、15、… の中で、3けたで最小の11の倍数を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1　3　6　10　15　…",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "3けたで最小の11の倍数は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "n番目の数は 1＋2＋…＋n。逆順にならべて足すと (n＋1) が n 個。2倍の n(n＋1) を2でわる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1＋2＋…＋n",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝n(n＋1)÷2",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "11 は素数。n(n＋1)÷2 が 11 の倍数なら、n か n＋1 のどちらかが 11 の倍数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "11は素数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "n か n＋1 が 11 の倍数",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "それが起きる n：10、11、21、22、…。n＝10、11 は和が 55、66 で2けた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "n＝10 → 55",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "n＝11 → 66",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "どちらも2けた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "次は n＝21。21×22÷2＝231。3けたで、231＝11×21。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "n＝21",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "21×22÷2＝231",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "231＝11×21",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "n＝12〜20 の和（78〜210）は、11 の倍数になる n ではないので 11 でわり切れない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "n＝12〜20 は",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "n も n＋1 も11の倍数でない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。231。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "231",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。231÷11＝21。次の n＝22 は 253 で、231 のほうが小さい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "231÷11＝21",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "253（n＝22）より小さい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_10": {
  "caption": "答え　47",
  "slides": [
   {
    "note": "x²−3x＋1＝0 のとき、x⁴＋1/x⁴ の値を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x²−3x＋1＝0",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x⁴＋1/x⁴ ＝ ？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "x を求めると √5 が出て大変。解を求めずに、対称な量 x＋1/x を作る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x を直接求めない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x＋1/x を作る",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "x＝0 は解でない（1＝0 になる）。だから x でわってよい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x＝0 を代入→1＝0",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x≠0 でわれる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "x−3＋1/x＝0 より、x＋1/x＝3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x−3＋1/x＝0",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x＋1/x＝3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2乗する。(x＋1/x)²＝x²＋2＋1/x²＝9。2をひいて x²＋1/x²＝7。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x²＋2＋1/x²＝9",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x²＋1/x²＝7",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "もう一度2乗。(x²＋1/x²)²＝x⁴＋2＋1/x⁴＝49。2をひいて 47。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "x⁴＋2＋1/x⁴＝49",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x⁴＋1/x⁴＝47",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。47。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "47",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。x≒2.618 のとき x⁴≒46.98、1/x⁴≒0.021。合計はほぼ 47。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "x⁴≒46.98",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1/x⁴≒0.021",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "合計≒47",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_11": {
  "caption": "答え　51通り",
  "slides": [
   {
    "note": "A→B は東5・北4。P(2,2) を通らず、赤い通行止めの道も通らない道順を数える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 190,
      "x2": 50,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 88,
      "y1": 190,
      "x2": 88,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 126,
      "y1": 190,
      "x2": 126,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 164,
      "y1": 190,
      "x2": 164,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 202,
      "y1": 190,
      "x2": 202,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 240,
      "y1": 190,
      "x2": 240,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 190,
      "x2": 240,
      "y2": 190,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 156,
      "x2": 240,
      "y2": 156,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 122,
      "x2": 240,
      "y2": 122,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 88,
      "x2": 240,
      "y2": 88,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 50,
      "y1": 54,
      "x2": 240,
      "y2": 54,
      "color": "#C9C2B8",
      "dashed": false,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 50,
      "cy": 190,
      "r": 8,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "A"
     },
     {
      "t": "circle",
      "cx": 240,
      "cy": 54,
      "r": 8,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "B"
     },
     {
      "t": "circle",
      "cx": 126,
      "cy": 122,
      "r": 8,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 10,
      "text": "P"
     },
     {
      "t": "line",
      "x1": 202,
      "y1": 156,
      "x2": 202,
      "y2": 122,
      "color": "#E11D48",
      "dashed": true,
      "width": 4
     }
    ]
   },
   {
    "note": "全体。東5・北4 の並べ方。9回のうち北4回の位置を選ぶので 9×8×7×6÷24＝126通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "東5・北4 を並べる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "9×8×7×6÷24",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "全体＝126通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "P を通る道順。A→P は 6通り、P→B（東3・北2）は 10通り。6×10＝60通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "A→P：東2北2＝6通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "P→B：東3北2＝10通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "6×10＝60通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "通行止めを通る道順。A→(4,1) が 5通り、(4,2)→B が 3通り。5×3＝15通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "A→(4,1)：5通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "(4,2)→B：3通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "5×3＝15通り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "両方を通る道順はあるか。(4,1) までは北に1しか進まず、P(2,2) には届かない。0通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(4,1) までの道は北に1回",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "P(2,2) は通れない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "両方＝0通り",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "126−60−15＝51。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "126−60−15",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝51 通り",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。P を避ける 126−60＝66 通り。その中で通行止めを通るのは 15 通りで、すべて P を通らない。66−15＝51。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "126−60＝66",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "66−15＝51",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "同じ答え",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。禁止が2つなら「全体−A−B＋(AかつB)」。A かつ B が 0 通りかを必ず確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "全体−A−B＋(AかつB)",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "AかつB＝0 を確認",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_sansu_12": {
  "caption": "答え　1.8秒後と9.2秒後",
  "slides": [
   {
    "note": "AB＝6、AD＝10 の長方形。P は A→B→C→D を毎秒2cm。△APD＝18cm² になる時刻を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        190
       ],
       [
        60,
        130
       ],
       [
        260,
        130
       ],
       [
        260,
        190
       ]
      ],
      "color": "#6E645C",
      "fill": "#F1EFEA"
     },
     {
      "t": "label",
      "x": 52,
      "y": 194,
      "text": "A",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 52,
      "y": 128,
      "text": "B",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 269,
      "y": 128,
      "text": "C",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 269,
      "y": 194,
      "text": "D",
      "size": 12,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "circle",
      "cx": 60,
      "cy": 190,
      "r": 5,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 11
     }
    ]
   },
   {
    "note": "区切りの時刻。AB は6÷2＝3秒、BC は10÷2＝5秒（計8秒）、CD は6÷2＝3秒（計11秒）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "AB：0〜3秒",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "BC：3〜8秒",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "CD：8〜11秒",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "△APD は底辺 AD＝10。高さは P から AD までの距離。辺ごとに高さが変わる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "底辺 AD＝10",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "高さ＝P から AD まで",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "AB 上。高さ AP＝2t。面積＝10×2t÷2＝10t。10t＝18 → t＝1.8（0〜3の範囲）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "面積＝10t",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "10t＝18",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "t＝1.8",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "BC 上。高さは AB＝6 で変わらない。面積＝30 で一定。18 にならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "高さ＝6（一定）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "面積＝30（一定）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "18 にならない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "CD 上。DP＝22−2t（t＝8 で 6、t＝11 で 0）。面積＝5(22−2t)＝18 → 22−2t＝3.6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "DP＝22−2t",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "5(22−2t)＝18",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "22−2t＝3.6",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "t＝(22−3.6)÷2＝9.2。8〜11 の範囲に入っている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "t＝18.4÷2",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "t＝9.2",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。t＝1.8 で AP＝3.6、t＝9.2 で DP＝3.6。どちらも 10×3.6÷2＝18。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "AP＝3.6 → 18cm²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "DP＝3.6 → 18cm²",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "答え：1.8秒後・9.2秒後",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_01": {
  "caption": "答え　2.7g/cm³　アルミニウム",
  "slides": [
   {
    "note": "金属片の質量は54g。水50cm³ のメスシリンダーに入れると70cm³ になった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "質量 54g",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "水 50cm³ → 70cm³",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "金属片は水を押しのける。水面の上がった分が、金属片の体積。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "上がった分＝金属の体積",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "押しのけた水の体積",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "体積＝70−50＝20cm³。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "70−50",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝20cm³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "密度は1cm³あたりの質量。質量÷体積で求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "密度＝質量÷体積",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "54÷20＝2.7。密度は 2.7g/cm³。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "54÷20",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝2.7g/cm³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "表と比べる。2.7 に近いのはアルミニウム（2.70）。鉄 7.87、銅 8.96 は大きすぎ、マグネシウム 1.74 は小さすぎる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "アルミニウム 2.70 ← 一致",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "鉄7.87・銅8.96は大きい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "マグネシウム1.74は小さい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。2.7g/cm³、アルミニウム。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2.7g/cm³",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "アルミニウム",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。アルミニウムの20cm³ の質量は 2.70×20＝54g。測った値と同じ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2.70×20＝54g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "測定値と一致",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_02": {
  "caption": "答え　30cm、2倍",
  "slides": [
   {
    "note": "焦点距離10cm の凸レンズ。物体を 20cm の位置に置くと、20cm の位置に同じ大きさの像ができた。物体を 15cm の位置にしたら？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "line",
      "x1": 10,
      "y1": 140,
      "x2": 310,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 210,
      "color": "#0284C7",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 160,
      "y": 64,
      "text": "レンズ",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle"
     },
     {
      "t": "circle",
      "cx": 120,
      "cy": 140,
      "r": 2,
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 11
     },
     {
      "t": "circle",
      "cx": 200,
      "cy": 140,
      "r": 2,
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 11
     },
     {
      "t": "label",
      "x": 120,
      "y": 154,
      "text": "F",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 200,
      "y": 154,
      "text": "F",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "物体を 15cm の位置に置く。物体の先端から2本の光を考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "line",
      "x1": 10,
      "y1": 140,
      "x2": 310,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 1
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 210,
      "color": "#0284C7",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 160,
      "y": 64,
      "text": "レンズ",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle"
     },
     {
      "t": "circle",
      "cx": 120,
      "cy": 140,
      "r": 2,
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 11
     },
     {
      "t": "circle",
      "cx": 200,
      "cy": 140,
      "r": 2,
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 11
     },
     {
      "t": "label",
      "x": 120,
      "y": 154,
      "text": "F",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "label",
      "x": 200,
      "y": 154,
      "text": "F",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle"
     },
     {
      "t": "arrow",
      "x1": 100,
      "y1": 140,
      "x2": 100,
      "y2": 120,
      "color": "#B5622E"
     },
     {
      "t": "label",
      "x": 100,
      "y": 154,
      "text": "物体",
      "size": 10,
      "color": "#B5622E",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "光軸に平行な光は、レンズで曲がって反対側の焦点を通る。",
    "add": [
     {
      "t": "line",
      "x1": 100,
      "y1": 120,
      "x2": 160,
      "y2": 120,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 120,
      "x2": 280,
      "y2": 180,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     }
    ]
   },
   {
    "note": "レンズの中心を通る光は、まっすぐ進む。",
    "add": [
     {
      "t": "line",
      "x1": 100,
      "y1": 120,
      "x2": 280,
      "y2": 180,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     }
    ]
   },
   {
    "note": "2本の光が交わる点が像の先端。像は光軸より下（逆さま）にできる。",
    "add": [
     {
      "t": "arrow",
      "x1": 280,
      "y1": 140,
      "x2": 280,
      "y2": 180,
      "color": "#9333EA"
     },
     {
      "t": "label",
      "x": 280,
      "y": 134,
      "text": "像",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle"
     }
    ]
   },
   {
    "note": "相似から式を作る。中心を通る線：H/h＝b/15。焦点を通る線：H/h＝(b−10)/10。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "H/h＝b/15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "H/h＝(b−10)/10",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "b/15＝(b−10)/10 を解く。両辺に30をかけて 2b＝3b−30、b＝30。倍率は 30/15＝2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "2b＝3(b−10)",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "b＝30cm",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "倍率 30÷15＝2倍",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。物体20cm のとき同じ式 b/20＝(b−10)/10 は b＝20、倍率1。問題の事実と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "20cm：b＝20、1倍",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "15cm：b＝30、2倍",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_03": {
  "caption": "答え　9.0℃",
  "slides": [
   {
    "note": "6Ω と 12Ω の電熱線を、直列と並列にして同じ電圧で水をあたためる。直列で2.0℃上がったとき、並列は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "直列：水温 2.0℃ 上昇",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "並列：水温 ？℃ 上昇",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "水の温度上昇は、電熱線が出す熱の量に比例する。熱の量は電力で決まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "温度上昇 ∝ 発熱量",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "発熱量 ∝ 電力",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "直列の全体の抵抗は 6＋12＝18Ω。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "直列：6＋12＝18Ω",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "並列は、枝ごとに電流が流れる。電圧 V で 6Ω に V/6、12Ω に V/12。合計 V/4。全体の抵抗は 4Ω。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "電流 V/6＋V/12＝V/4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "並列の抵抗＝4Ω",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "電力 P＝V²/R。電圧が同じなので、電力の比は 1/R の比。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "直列 1/18",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "並列 1/4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "比は 2：9",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "発熱の比が 2：9 なので、水温の上昇も 2：9。直列 2.0℃ なら、並列は 2.0×9/2＝9.0℃。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2：9＝2.0℃：□℃",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "□＝9.0",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。並列の水温は 9.0℃ 上がる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "9.0℃",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。V＝36V なら、直列 72W、並列 324W。324÷72＝4.5倍。2.0×4.5＝9.0℃。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "直列 36²÷18＝72W",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "並列 36²÷4＝324W",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "4.5倍 → 9.0℃",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_04": {
  "caption": "答え　225cm",
  "slides": [
   {
    "note": "斜面を下る台車を記録タイマーで調べる。0.1秒ごとの移動距離が 3.0、5.0、7.0、9.0cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "0.1秒ごとの移動距離",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "3.0 → 5.0 → 7.0 → 9.0cm",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "距離がふえていくのは、速さが増しているから。2.0cm ずつ一定の割合で増えている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "差は 2.0cm で一定",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "斜面では速さが一定の割合で増える",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "最後の0.1秒の平均の速さ。9.0cm を 0.1秒で進んだので、9.0÷0.1＝90cm/s。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "9.0÷0.1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝90cm/s",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "水平面では、台車にはたらく力がつり合うので、速さが変わらない（等速直線運動）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "水平面：等速直線運動",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "速さは 90cm/s のまま",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "距離＝速さ×時間。90×2.5＝225。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "距離＝速さ×時間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝90×2.5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝225cm",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。225cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "225cm",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。0.1秒に9.0cm 進む。2.5秒は 25区間なので 9.0×25＝225cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2.5秒＝25区間",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "9.0×25＝225cm",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "注意。0.1秒の距離をそのまま1秒の距離と見ると 22.5cm にしてしまう。単位をそろえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "×10 を忘れない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_05": {
  "caption": "答え　2.4g",
  "slides": [
   {
    "note": "銅 6.0g を加熱。途中で質量をはかると 6.9g。銅：酸素＝4：1。まだ反応していない銅は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "銅 6.0g → 6.9g",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "銅：酸素＝4：1",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "加熱すると、銅は酸素と結びつく。皿の上の物質の質量は、結びついた酸素の分だけ増える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "銅＋酸素 → 酸化銅",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "増えた質量＝酸素の質量",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "結びついた酸素は 6.9−6.0＝0.9g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "6.9−6.0",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝0.9g（酸素）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "銅：酸素＝4：1 なので、反応した銅は酸素の4倍。0.9×4＝3.6g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "反応した銅",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝0.9×4",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "＝3.6g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "反応していない銅は、はじめの 6.0g から 3.6g を引く。6.0−3.6＝2.4g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "6.0−3.6",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝2.4g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。酸化銅 3.6＋0.9＝4.5g、未反応の銅 2.4g。合計 6.9g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "4.5＋2.4＝6.9g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "はかった値と一致",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "参考。すべて酸化すると 6.0×5/4＝7.5g。6.9g は途中の状態。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "完全に酸化：7.5g",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "今：6.9g（途中）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。増えた 0.9g を銅と見ると 5.1g になる。0.9g は酸素。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "0.9g は酸素の質量",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_06": {
  "caption": "答え　156g",
  "slides": [
   {
    "note": "60℃の飽和水溶液 420g を 20℃まで冷やす。出る結晶は何g？（水100gに 60℃で110g、20℃で32gとける）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "60℃：水100gに110g",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "20℃：水100gに32g",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "60℃の飽和水溶液は、水100g＋溶質110g＝210g が1セット。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "水 100g＋溶質 110g",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝水溶液 210g",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "420g は 210g の2倍。水は200g、溶質は220g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "420÷210＝2倍",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "水 200g、溶質 220g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "冷やしても水は200gのまま。20℃では、水200gに 32×2＝64g までしかとけない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "水 200g は変わらない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "20℃：32×2＝64g まで",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "とけきれない分が結晶になる。220−64＝156g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "220−64",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝156g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。残った水溶液は 200＋64＝264g。420−156＝264g で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "水溶液 264g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "420−156＝264g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "考え方のまとめ。水溶液＝水＋溶質。水が変わらないので、水を基準にそろえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "水を基準にそろえる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。420g を水の質量にすると、出る結晶の量が合わなくなる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "420g は水溶液全体",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_07": {
  "caption": "答え　0.60g、青色",
  "slides": [
   {
    "note": "水酸化バリウム水溶液20cm³に硫酸を加える。表の沈殿の質量は、30cm³で一定になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "硫酸 10　20　30　40　50",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "沈殿 .20 .40 .60 .60 .60",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "沈殿が止まるのは、水酸化バリウム水溶液が使い切られたから。20cm³ と硫酸 30cm³ がちょうど反応。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "水酸化バリウム 20cm³",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "硫酸 30cm³",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "ちょうど反応 → 沈殿0.60g",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "今回：硫酸 30cm³ と、水酸化バリウム水溶液 60cm³。どちらが余るか。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "硫酸 30cm³ ← 使い切る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "水酸化バリウム 60cm³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "硫酸30cm³と反応するのは、水酸化バリウム水溶液 20cm³ だけ。残り 60−20＝40cm³ は余る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "反応：20cm³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "余り：40cm³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "沈殿は、使い切るほう（硫酸30cm³）で決まる。表と同じ 0.60g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "沈殿＝0.60g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "余ったのは水酸化バリウム水溶液（アルカリ性）。BTB溶液は青色。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "余り：アルカリ性",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "BTB溶液：青色",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。硫酸の量が30cm³と同じなら、沈殿は表の 30cm³ の値 0.60g と同じ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "硫酸30cm³ → 0.60g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。水酸化バリウムが3倍だから沈殿も3倍、は誤り。少ないほうで決まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "沈殿 1.80g は誤り",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_08": {
  "caption": "答え　AとB（なくなった）・CとD（変わった）",
  "slides": [
   {
    "note": "4本の試験管。だ液の有無と、加える試薬を変えて、だ液のはたらきを調べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "A：デンプン＋水　→ヨウ素液",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "B：デンプン＋だ液→ヨウ素液",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "C：デンプン＋水　→ベネジクト",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "D：デンプン＋だ液→ベネジクト",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 12
     }
    ]
   },
   {
    "note": "結果。A 青紫、B 変化なし、C 変化なし、D 赤かっ色の沈殿。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "A 青紫　B 変化なし",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "C 変化なし",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "D 赤かっ色の沈殿",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "ヨウ素液は、デンプンがあると青紫色になる。ベネジクト液は加熱すると、糖があるとき赤かっ色になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "ヨウ素液：デンプン→青紫",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "ベネジクト液：糖→赤かっ色",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "条件を1つだけ変えた組を選ぶ。ヨウ素液どうしの AとB は、だ液の有無だけが違う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "AとB：試薬が同じ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "違いは、だ液だけ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "AとBの比べ。だ液なしは青紫（デンプンあり）、だ液ありは変化なし（デンプンなし）。デンプンがなくなった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "A 青紫：デンプンあり",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "B 変化なし：デンプンなし",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "→ なくなった",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "CとDの比べ。だ液なしは変化なし、だ液ありは赤かっ色。糖ができた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "C 変化なし：糖なし",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "D 赤かっ色：糖あり",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "→ 別のものに変わった",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。なくなったこと：AとB。変わったこと：CとD。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "なくなった：AとB",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "変わった：CとD",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。AとD は、だ液と試薬の両方が違うので比べられない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "AとD は比べられない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_09": {
  "caption": "答え　262.5mL",
  "slides": [
   {
    "note": "心臓は1分間に75回、1回70mLの血液を送り出す。細胞が1分間に使う酸素は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "75回/分",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "1回 70mL",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "動脈血 酸素20mL/100mL",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "静脈血 酸素15mL/100mL",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "まず、1分間に送り出される血液の量。70×75＝5250mL。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "70×75",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝5250mL/分",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "血液は、全身の細胞に酸素をわたして静脈血にもどる。酸素が減った分が、細胞で使われた分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "動脈血 → 細胞 → 静脈血",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "減った酸素＝使われた酸素",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "血液100mLあたり、20−15＝5mL が使われる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "20−15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝5mL（100mLあたり）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "5250mLは100mLの52.5倍。5×52.5＝262.5mL。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5250÷100＝52.5",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "5×52.5＝262.5mL",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。動脈血の酸素は 1050mL、静脈血は 787.5mL。差 262.5mL。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "5250×0.20＝1050",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "5250×0.15＝787.5",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "差＝262.5mL",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。使った酸素＝（動脈血−静脈血）×血液の量。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "差 × 血液の量",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。1050mL は動脈血の酸素の全量で、使った量ではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1050mL は誤り",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_10": {
  "caption": "答え　140km、10時12分00秒",
  "slides": [
   {
    "note": "P波は秒速8km、S波は秒速4km。初期微動継続時間は15秒。震源までの距離と発生時刻は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "P波 7km/秒",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "S波 4km/秒",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "時間の差 15秒",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "距離を d km とする。P波が届くまで d÷7 秒、S波が届くまで d÷4 秒。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "P波：d÷7 秒",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "S波：d÷4 秒",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "S波のほうが遅いので、その差が初期微動継続時間。d÷4−d÷7＝15。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "d÷4−d÷7＝15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "(7d−4d)÷28＝15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "3d÷28＝15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "d＝15×28÷3＝140。震源までは140km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "d＝15×28÷3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "d＝140km",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "P波が届くまでの時間。140÷7＝20秒。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "140÷7＝20秒",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "P波が10時12分20秒に届いた。その20秒前が発生時刻。10時12分00秒。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "10時12分20秒−20秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝10時12分00秒",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。S波は 140÷4＝35秒。到着は 10時12分35秒。P波（20秒）との差は 15秒で問題と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "S波：140÷4＝35秒",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "35秒−20秒＝15秒",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。15秒は時間の差で、P波にかかった時間（20秒）ではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "差と到着時間は別",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_11": {
  "caption": "答え　夏至 77.4°、冬至 30.6°",
  "slides": [
   {
    "note": "北緯36°の地点で、夏至と冬至の太陽の南中高度。地軸の傾きは23.4°。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "北緯36°",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "地軸の傾き 23.4°",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "春分・秋分は、太陽が赤道の真上。南中高度は天頂90°から緯度36°を引いた値。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "90°−36°",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝54°",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "夏至は、太陽が北へ23.4°ずれる。北にある地点では太陽が高くなる。足す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "夏至：54°＋23.4°",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝77.4°",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "冬至は、太陽が南へ23.4°ずれる。高度が下がる。引く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "冬至：54°−23.4°",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝30.6°",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。夏至 77.4°、冬至 30.6°。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "夏至　77.4°",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "冬至　30.6°",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。差は 77.4−30.6＝46.8°。地軸の傾き 23.4°の2倍。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "46.8°＝23.4°×2",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。南中高度＝90°−緯度＋（夏至なら＋23.4°、冬至なら−23.4°）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "90°−緯度±23.4°",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。夏至に引いてしまうと 30.6°（冬至の値）になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "足し引きの向きに注意",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_rika_12": {
  "caption": "答え　55％、960g、253g",
  "slides": [
   {
    "note": "部屋 6m×5m×2.5m、気温25℃、露点15℃。湿度、全体の水蒸気量、湿度70％にする追加量を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "25℃：23.1g/m³",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "15℃（露点）：12.8g/m³",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "露点は、水蒸気が水滴になりはじめる温度。そのときの飽和水蒸気量が、いまの空気1m³の水蒸気量。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "露点＝15℃",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "いまの水蒸気量＝12.8g/m³",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 湿度＝12.8÷23.1×100＝55.4…％。四捨五入して55％。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "12.8÷23.1×100",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "≒55％",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "部屋の体積は 6×5×2.5＝75m³。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "6×5×2.5",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝75m³",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 部屋全体の水蒸気は 12.8×75＝960g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "12.8×75",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝960g",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(3) 湿度70％なら、1m³あたり 23.1×0.70＝16.17g。部屋全体では 16.17×75＝1212.75g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "23.1×0.70＝16.17",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "16.17×75＝1212.75g",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "加える量は、必要な量からいまある量を引く。1212.75−960＝252.75g。四捨五入して253g。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1212.75−960",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝252.75g ≒ 253g",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。1212.75÷75＝16.17g/m³。÷23.1＝0.70。たしかに70％。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "16.17÷23.1＝0.70",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_01": {
  "caption": "答え　3月4日午後8時",
  "slides": [
   {
    "note": "日本は東経135度、ニューヨークは西経75度が標準時の基準。日本が3月5日午前10時のとき、ニューヨークは？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "日本：東経135度",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ニューヨーク：西経75度",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "日本 3月5日 午前10時",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "地球は24時間で360度まわる。360÷24＝15度。経度15度で1時間の時差。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "360÷24＝15度",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "15度＝1時間の時差",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "経度の差。東経と西経は、0度の経線をはさむので足す。135＋75＝210度。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "135＋75",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝210度",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "時差は 210÷15＝14時間。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "210÷15",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝14時間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "東にある日本のほうが時刻が進んでいる。ニューヨークは日本より14時間おそい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "東は進む、西は遅れる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "NY ＝ 日本 − 14時間",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "3月5日午前10時の14時間前。午前0時までの10時間と、さらに4時間。前日の20時。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "10時間さかのぼる → 3月5日 0時",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "さらに4時間 → 3月4日 20時",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。ニューヨークは3月4日午後8時。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "3月4日　午後8時",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。3月4日午後8時に14時間を足すと、3月5日午前10時。日本の時刻に一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "20時＋14時間＝34時",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "34−24＝翌日10時",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_02": {
  "caption": "答え　1.2km、5％",
  "slides": [
   {
    "note": "2万5千分の1の地形図。A（標高120m）とB（標高180m）の間は地図上4.8cm。実際の距離とこう配は？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "縮尺 1：25000",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "A 120m、B 180m",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "地図上 4.8cm",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "2万5千分の1は、地図上の1cmが実際の25000cm。25000cm＝250m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1cm → 25000cm",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝250m",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "4.8cm なら 4.8×250＝1200m。1.2km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "4.8×250",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝1200m＝1.2km",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "標高差は 180−120＝60m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "180−120",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝60m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "こう配は 高さ÷水平距離。単位をmにそろえて 60÷1200＝0.05。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "60m ÷ 1200m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝0.05",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "0.05 を％にする。×100 で 5％。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "0.05×100",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝5％",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。距離 1.2km、こう配 5％。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1.2km",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "5％",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。5％は100m進んで5m上がる。1200m なら 12倍で60m。標高差と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "5m×12＝60m",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_03": {
  "caption": "答え　22.2km、370.4km",
  "slides": [
   {
    "note": "領海は基線から12海里、排他的経済水域は200海里。1海里＝1852m。km では？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "領海：12海里",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "排他的経済水域：200海里",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "1海里＝1852m",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まず領海。1852×12＝22224m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1852×12",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝22224m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "m を km に直す。22224m＝22.224km。小数第1位まで求めて 22.2km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "22224÷1000",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "＝22.224km",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "≒22.2km",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "次に排他的経済水域。1852×200＝370400m。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1852×200",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝370400m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "370400m＝370.4km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "370400÷1000",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝370.4km",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "領海には主権が及ぶ。排他的経済水域では、資源は沿岸国のもので、船の通行は自由。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "領海：主権が及ぶ",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "EEZ：資源は沿岸国、通行は自由",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。領海 22.2km、排他的経済水域 370.4km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "領海　22.2km",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "EEZ　370.4km",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。km で直接。1.852×12＝22.224、1.852×200＝370.4。一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1.852×12＝22.224",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "1.852×200＝370.4",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_04": {
  "caption": "答え　836キロカロリー、154キロカロリー",
  "slides": [
   {
    "note": "自給率38％、供給熱量を2200キロカロリーと仮に考える。国産の熱量と、45％にするための増加分を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "自給率 38％",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "供給熱量 2200キロカロリー（仮）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "45％にするには？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "自給率は、供給熱量のうち国産でまかなえる割合。国産＝供給×自給率。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "自給率＝国産÷供給",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "国産＝供給×自給率",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "(1) 国産の熱量。2200×0.38＝836キロカロリー。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2200×0.38",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝836キロカロリー",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 自給率45％のときの国産の熱量。2200×0.45＝990キロカロリー。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2200×0.45",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝990キロカロリー",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "いまの 836キロカロリー との差が、増やす量。990−836＝154キロカロリー。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "990−836",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝154キロカロリー",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。差を割合で見る。45％−38％＝7％。2200×0.07＝154キロカロリー。一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "45−38＝7％",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "2200×0.07＝154",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。目標の量そのものでなく、いまとの差を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "答え：増加分 154キロカロリー",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "参考。生産額ベースの自給率は2024年度で64％。カロリーベースより高い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "カロリーベース 38％",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "生産額ベース 64％",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_05": {
  "caption": "答え　オ→イ→エ→ア→ウ",
  "slides": [
   {
    "note": "5つの出来事を古い順に並べる。ア日露戦争、イ三国干渉、ウ韓国併合、エ日英同盟、オ日清戦争。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "ア 日露戦争　イ 三国干渉",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ウ 韓国併合　エ 日英同盟",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "オ 日清戦争",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "最初は日清戦争（1894年）。勝った日本は下関条約で遼東半島などを得た。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1894　オ 日清戦争",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "遼東半島を得た日本に、ロシア・ドイツ・フランスが返還を求めた。三国干渉（1895年）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1895　イ 三国干渉",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "ロシアの南下に対抗するため、日本はイギリスと日英同盟を結んだ（1902年）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1902　エ 日英同盟",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "日露戦争（1904〜05年）。日英同盟は、この戦争に向けた備えでもあった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1904　ア 日露戦争",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "戦後、朝鮮半島への支配を強め、韓国併合（1910年）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1910　ウ 韓国併合",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。オ→イ→エ→ア→ウ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "オ→イ→エ→ア→ウ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。年号は 1894、1895、1902、1904、1910 の順に大きくなっている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "1894＜1895＜1902＜1904＜1910",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_06": {
  "caption": "答え　裁判の基準＋武家の慣習を成文化",
  "slides": [
   {
    "note": "御成敗式目（1232年、北条泰時）の目的と特色を、「裁判」「慣習」を使って60字以内で説明する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "1232年　北条泰時",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "語：裁判・慣習",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "60字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "背景。承久の乱（1221年）のあと、幕府の力が西日本にも広がり、御家人の土地争いが増えた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "承久の乱のあと",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "御家人どうしの土地争い増加",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "争いを裁くには、公平なものさしが必要。裁判の基準を決める必要があった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "裁判の基準が必要",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "泰時は、頼朝以来の武家の慣習や、道理（物事の筋道）をもとに51か条にまとめた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "武家の慣習＋道理",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "51か条",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "武士のための最初の法律。貴族の法（律令）とは別のもの。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "最初の武家法",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "文にまとめる。目的（公平な裁判）と特色（慣習の成文化・最初の武家法）の2点を入れる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "目的：裁判の基準・公平",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "特色：慣習の成文化・最初の武家法",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "解答例（57字）。『裁判の基準を明らかにして御家人の紛争を公平に裁くため、源頼朝以来の武家の慣習や道理を成文化した最初の武家法である。』",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "57字（60字以内）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "裁判・慣習を使っている",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。目的と特色の2点、指定語2つ、字数の3つを、順に確認した。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "目的◯　特色◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "指定語◯　字数◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_07": {
  "caption": "答え　吉宗＝公事方御定書",
  "slides": [
   {
    "note": "江戸幕府の改革について、正しい文を1つ選ぶ。人物と政策の組み合わせを確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "人物 × 政策の組み合わせ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "正しいのは1つだけ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "享保の改革（徳川吉宗）。公事方御定書、目安箱、上げ米。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "吉宗：享保の改革",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "公事方御定書・目安箱・上げ米",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "田沼意次。株仲間を奨励し、運上・冥加を取った。商業を重んじた政治。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "田沼意次",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "株仲間を奨励（運上・冥加）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "寛政の改革（松平定信）。棄捐令、囲米、寛政異学の禁。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "定信：寛政の改革",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "棄捐令・囲米・寛政異学の禁",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "天保の改革（水野忠邦）。株仲間の解散、人返しの法。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "忠邦：天保の改革",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "株仲間の解散・人返しの法",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "選択肢をひとつずつ見る。イは「定信が株仲間を解散」で誤り。ウは「忠邦が棄捐令」で誤り。エは「田沼が享保の改革」で誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "イ：定信×株仲間解散 ✕",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ウ：忠邦×棄捐令 ✕",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "エ：田沼×享保の改革 ✕",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "アは、吉宗と公事方御定書の組み合わせで正しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ア：吉宗×公事方御定書 ◯",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。選択肢4つのうち、組み合わせが正しいのはアだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "正解は ア の1つだけ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_08": {
  "caption": "答え　沖縄返還（佐藤）・日中共同声明（田中）",
  "slides": [
   {
    "note": "1972年に実現した日本の外交上の2つの出来事と、そのときの首相を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "1972年",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "2つの出来事",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "それぞれの首相",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "1951年の平和条約で独立を回復。1956年の日ソ共同宣言で国連に加盟した。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1951　サンフランシスコ平和条約",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "1956　日ソ共同宣言→国連加盟",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "まだ残っていた課題が2つ。アメリカ統治下の沖縄と、中国との国交。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "沖縄の返還",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "中国との国交",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "1972年5月、沖縄が日本に復帰した。交渉したのは佐藤栄作首相。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "1972年5月",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "沖縄の日本復帰",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "佐藤栄作",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "1972年9月、田中角栄首相が中国を訪れ、日中共同声明を出して国交を正常化した。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "1972年9月",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "日中共同声明",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "田中角栄",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "日中平和友好条約は1978年。1972年のものとは別。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "1972　日中共同声明",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "1978　日中平和友好条約",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。沖縄返還（佐藤栄作）、日中共同声明（田中角栄）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "沖縄返還　佐藤栄作",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "日中共同声明　田中角栄",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。5月→9月の順で、どちらも1972年。首相は別の人。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5月：沖縄　佐藤",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "9月：中国　田中",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_09": {
  "caption": "答え　300人",
  "slides": [
   {
    "note": "出席議員450人の衆議院で、参議院が否決した法律案を再可決する。必要な賛成は何人以上か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "出席議員 450人",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "参議院が否決した法律案",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "法律案は、原則は両院で可決されて成立。参議院が否決すると、そのままでは成立しない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "原則：両院で可決",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "参議院が否決 → 成立しない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "憲法第59条。衆議院が出席議員の3分の2以上で再び可決すれば、法律になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "憲法第59条",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "出席議員の3分の2以上",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "なぜ衆議院が強いのか。任期が短く解散もあるので、国民の意見をよく反映するとされる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "任期が短い・解散がある",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "衆議院の優越",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "人数に直す。450×2/3＝300。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "450×2/3",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝300人",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。300人以上の賛成が必要。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "300人以上",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。300÷450＝2/3でちょうど3分の2。299人では足りない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "300÷450＝2/3",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "299÷450＜2/3",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。過半数の226人では足りない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "226人は誤り",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_10": {
  "caption": "答え　5000円、390円、110円",
  "slides": [
   {
    "note": "税込み5,500円の文房具。本体価格、国税、地方消費税を求める。税率10％（国7.8％、地方2.2％）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "税込み 5,500円",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "税率 10％＝国7.8％＋地方2.2％",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "税込み価格は、本体価格に10％の税を足したもの。本体の 1.1 倍。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "税込み＝本体×1.1",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "本体価格を出す。5500÷1.1＝5000円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5500÷1.1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝5000円",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "消費税の合計は 5500−5000＝500円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5500−5000",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝500円",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "国税分は本体の7.8％。5000×0.078＝390円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5000×0.078",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝390円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "地方消費税分は本体の2.2％。5000×0.022＝110円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "5000×0.022",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝110円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。390＋110＝500円で、消費税の合計と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "390＋110＝500円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。本体5,000円、国税390円、地方消費税110円。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "本体　5,000円",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "国税　390円",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "地方　110円",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_11": {
  "caption": "答え　250円、売れ残り60個",
  "slides": [
   {
    "note": "価格と需要量・供給量の表。均衡価格と、400円のときの状態を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "価格　100 200 300 400",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "需要　 90  70  50  30",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "供給　 30  50  70  90",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "価格が100円上がると、需要量は20個減り、供給量は20個増える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "需要：−20個/100円",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "供給：＋20個/100円",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "200円は需要が多く、300円は供給が多い。つり合う価格は、そのあいだ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "200円：需要70＞供給50",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "300円：需要50＜供給70",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "均衡は200〜300円の間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "200円から x 円上がったとして、70−0.2x＝50＋0.2x。20＝0.4x、x＝50。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "70−0.2x＝50＋0.2x",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "x＝50",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "均衡価格は 200＋50＝250円。このとき需要も供給も60個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "均衡価格 250円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "需要＝供給＝60個",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "400円では、需要30個、供給90個。供給のほうが 90−30＝60個多い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "需要 30個",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "供給 90個",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "差 60個",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。均衡価格250円。400円では60個の売れ残り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "均衡価格　250円",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "400円：売れ残り60個",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。250円で需要 70−10＝60、供給 50＋10＝60。一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "70−10＝60",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "50＋10＝60",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_shakai_12": {
  "caption": "答え　12,000人以上、成立する",
  "slides": [
   {
    "note": "有権者60万人の県で、条例の制定を求める直接請求。必要な署名数と、成立するかどうか。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "有権者 60万人",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "条例の制定の請求",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "署名 15,000人（無効1,500人）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "直接請求権は、住民が地方の政治に直接参加する権利。条例の制定・改廃は、有権者の50分の1以上の署名。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "条例の制定・改廃の請求",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "有権者の1/50以上",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "請求先：首長",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "必要な署名数。600000÷50＝12000人。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "600000÷50",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝12000人以上",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "署名は、有効なものだけが数えられる。無効の1,500人分は引く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "15000−1500",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝13500人（有効）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "13500人は、必要な12000人より多い。請求は成立する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "13500＞12000",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "成立する",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。12,000人以上。有効署名13,500人なので成立する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "必要数 12,000人以上",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "13,500人で成立",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。13500÷600000＝0.0225。50分の1は0.02なので、それ以上。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "0.0225＞0.02",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "このあと。請求を受けた首長は議会にかけ、議会が条例を決める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "首長 → 議会で審議",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_02": {
  "caption": "答え　①受身　②可能　③自発　④尊敬",
  "slides": [
   {
    "note": "「れる・られる」には4つの意味がある。言いかえで見分ける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "受身　可能",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "自発　尊敬",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "言いかえのものさし。受身＝〜される、可能＝〜できる、自発＝自然に〜てしまう、尊敬＝〜なさる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "受身：〜される",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "可能：〜できる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "自発：自然に〜てしまう",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "尊敬：〜なさる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "①弟に宿題をじゃまされた。動作をするのは弟。私は動作を受ける側。受身。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "①受身",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "動作を受ける側",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "②朝六時に起きられる。「起きることができる」と言いかえられる。可能。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "②可能",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "〜することができる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "③母のことが思い出される。自然と心にうかんでくる。自発。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "③自発",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "自然に〜てしまう",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "④校長先生が述べられる。「述べなさる」と言いかえられる。尊敬。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "④尊敬",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "〜なさる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。①受身　②可能　③自発　④尊敬。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "①受身　②可能",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "③自発　④尊敬",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。自発は「思い出す」「感じる」など、心の動きを表す動詞に多い。③はそれにあたる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "自発：心の動きの動詞に多い",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_03": {
  "caption": "答え　省く＋示す＋結果の3点",
  "slides": [
   {
    "note": "傍線部「地図の価値は、何を捨てたかにある」を、路線図の例で60字以内に説明する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "傍線部の意味を",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "路線図の例で",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "60字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "記述は、傍線部の意味を、本文の具体例で言いかえる問い。例（路線図）を探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "具体例＝第1段落の路線図",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "省かれているもの。実際の線路のくねくねした曲がりと、駅と駅のまちまちな距離。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "省く：線路の曲がり",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "省く：駅の間の距離",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "示されているもの。駅の順序とつながり方だけ。直線と等しい間隔。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "示す：駅の順序",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "示す：つながり方",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "その結果。乗りかえの方法が一目で理解できる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "結果：乗りかえが",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "一目で分かる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "3つを1文に。字数は句点も1字に数えて、60字以内にする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "省く＋示す＋結果",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "句点も1字",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "解答例。路線図は線路の曲がりや駅間の距離を省き、駅の順序とつながりだけを示すことで、乗りかえが一目で分かるようにしている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 56,
      "w": 280,
      "h": 26,
      "text": "路線図は線路の曲がりや駅間の",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 90,
      "w": 280,
      "h": 26,
      "text": "距離を省き、駅の順序とつなが",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 26,
      "text": "りだけを示すことで、乗りかえ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 26,
      "text": "が一目で分かるようにしている。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   },
   {
    "note": "確かめ。3点がそろっているか。「路線図」の語があるか。57字で60字以内か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "3点そろっている",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "例を使っている",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "57字（60字以内）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_04": {
  "caption": "答え　選ばれた一部＋描かれなかったものへの思い",
  "slides": [
   {
    "note": "筆者の考えとして最も適当なものを選ぶ。文章全体の主張を見る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "第1段落：路線図の例",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "第2段落：何を捨てたか",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "第3段落：地図に限らない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "主張は最後の段落（まとめ）に書かれやすい。第3段落を読む。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "最後の段落に注目",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "第3段落。ニュースも統計も写真も、世界のすべては伝えられない。伝えられるのは誰かが選んだ一部。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "伝えられるのは",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "誰かが選んだ一部",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "さらに、「現実そのもの」と取りちがえると、選ばれなかったものを忘れてしまう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "選ばれなかったものを",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "忘れてしまう",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "第2段落。「描かれなかったものにも思いをめぐらせる」。第3段落とつながる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "描かれなかったものにも",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "思いをめぐらせる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "選択肢を消す。イは「正確に多く写すほどよい」で本文と反対。ウは「信用できない」と言いすぎ。エは「不完全」で、本文の評価と反対。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "イ ✕　ウ ✕　エ ✕",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。アの「誰かが選んだ一部」「描かれなかったものにも思いをめぐらせる」が本文と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "正解は ア",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。選んだ文の言葉が、第2・第3段落のどこにあるかを指させる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ア＝第2段落＋第3段落",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_06": {
  "caption": "答え　認められた＋受けついだ重み",
  "slides": [
   {
    "note": "傍線部「何か大切なものを手渡されたような気がして、返事ができなかった」の理由を50字以内で。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "傍線部の理由",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "50字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "「大切なもの」は物ではない。祖父の言葉と、その言葉にこめられた思いを指す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "物ではなく",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "祖父の言葉と思い",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "祖父の言葉。「お前の手は、昔のわしによく似ておる。待つべきところで待てる。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "お前の手は、昔のわしに",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "よく似ておる。待つべき",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "ところで待てる。",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "これは、「僕」の将棋の力を、祖父が認める言葉。1つ目の要素。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "要素①：力を認められた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「手渡された」は、祖父の技や将棋への思いを受けついだということ。2つ目の要素。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "要素②：受けついだ重み",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「うれしいと思うより先に」。喜びではなく、重みが先に来ている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "喜びより重みが先",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "解答例。祖父が「待つべきところで待てる」と自分の将棋の力を認め、祖父の技や思いを受けついだ重みを感じたから。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 56,
      "w": 280,
      "h": 26,
      "text": "祖父が「待つべきところで待て",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 90,
      "w": 280,
      "h": 26,
      "text": "る」と自分の将棋の力を認め、",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 26,
      "text": "祖父の技や思いを受けついだ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 26,
      "text": "重みを感じたから。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   },
   {
    "note": "確かめ。2つの要素がそろっているか。50字で50字以内か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "2つの要素◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "50字（50字以内）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_07": {
  "caption": "答え　(1)無常観　(2)沙羅双樹…　(3)あらわす",
  "slides": [
   {
    "note": "『平家物語』冒頭。(1)「諸行無常」の意味、(2)対句の一文、(3)「あらはす」の現代かなづかい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "祇園精舎の鐘の声、",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "諸行無常の響きあり。",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "沙羅双樹の花の色、",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "盛者必衰の理をあらはす。",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "(1)「諸行」はこの世のすべてのもの。「無常」は同じままではないこと。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "諸行＝すべてのもの",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "無常＝移り変わる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "意味は、「この世のすべてのものは絶えず移り変わり、永遠に変わらないものはない」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "すべては移り変わる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "永遠のものはない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "(2) 第1文と第2文を、同じ形で並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "鐘の声　　　　↔ 花の色",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "諸行無常の響き↔ 盛者必衰の理",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "あり　　　　　↔ をあらはす",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "対応しているので、対句。抜き出すのは、第2文全体。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "沙羅双樹の花の色、",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "盛者必衰の理をあらはす。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "(3) 歴史的かなづかい。語中・語尾の「は」は、現代では「わ」と書く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "あらはす",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ あらわす",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。(1)すべては移り変わる。(2)沙羅双樹の花の色、盛者必衰の理をあらはす。(3)あらわす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "(1) すべては移り変わる",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "(2) 沙羅双樹の花の色、…",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "(3) あらわす",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。「盛者必衰」も同じ無常観。「おごれる人も久しからず」へ続く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "盛者必衰＝栄えた者も衰える",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_08": {
  "caption": "答え　朋有り遠方より来たる、亦た楽しからずや",
  "slides": [
   {
    "note": "『論語』の一節「有レ朋自二遠方一来、不二亦楽一乎」を書き下し、現代語に直す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "有レ朋自二遠方一来",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "不二亦楽一乎",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "「有レ朋」。レ点は、すぐ下の字を先に読む。朋→有り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "朋　有り",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「自二遠方一来」。一二点で、一→二の順。遠方→来。「自」は「より」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "遠方　より　来たる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "前半の書き下し。朋有り遠方より来たる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "朋有り遠方より来たる、",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "「不二亦楽一乎」。亦（た）→楽（しから）→不（ず）→乎（や）の順に読む。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "亦た　楽しから　ず　や",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "後半の書き下し。亦た楽しからずや。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "亦た楽しからずや。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "意味。「不亦〜乎」は反語で「なんと〜ではないか」。友が遠くから来てくれるのは、なんと楽しいことか。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "志を同じくする友人が",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "遠くから訪ねてきてくれる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "なんと楽しいことではないか。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。返り点どおりに読めているか。「不亦〜乎」は否定でなく反語。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "亦た〜ずや＝なんと〜ではないか",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_09": {
  "caption": "答え　ウ（役不足の誤用）",
  "slides": [
   {
    "note": "――線の語句の使い方が誤っているものを選ぶ。慣用句の本来の意味を確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "気の置けない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "膝を打つ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "役不足",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "猫の手も借りたい",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "「気の置けない」は、気をつかわなくてよい、遠慮のいらない。アは正しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "気の置けない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝遠慮のいらない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「膝を打つ」は、感心したときや、思いついたときのしぐさ。イは正しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "膝を打つ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝感心するしぐさ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「猫の手も借りたい」は、とても忙しい様子。エは正しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "猫の手も借りたい",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝とても忙しい",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「役不足」は、本人の力に比べて、役目が軽すぎること。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "役不足",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "＝役が軽すぎる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "ウは、「大役」を任されて話せなかった。力が足りない意味なので、「力不足」が正しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "大役＝重い役",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "力が足りない＝力不足",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。ウ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 100,
      "w": 280,
      "h": 40,
      "text": "ウ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。役不足と力不足は反対の意味。入れかえて意味が通るかを確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "役不足 ⇔ 力不足",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_kokugo_12": {
  "caption": "答え　主張→例→気をつけること",
  "slides": [
   {
    "note": "本文をふまえ、情報を受け取るときに気をつけることを、身近な例をあげて100字以内で述べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "本文の主張を使う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "身近な例を1つ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "100字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まず本文の主張。伝えられるものは誰かが選んだ一部で、選ばれなかったものを忘れてはならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "伝えられるのは一部",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "選ばれなかったものを忘れない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "次に身近な例。天気予報、口コミ、写真など。ここでは天気予報で考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "例：天気予報",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "「晴れ」と伝えられた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "例を具体的に。「晴れ」だけを信じて傘を持たず、局地的な雨にぬれた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "晴れを信じて傘なし",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "局地的な雨にぬれた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "そこから言えること。伝えられたのは情報の一部。他の情報にも当たる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "情報の一部だと意識",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "他の情報にも当たる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "3点を1つにまとめる。主張→例→気をつけること。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "主張＋例＋気をつけること",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "解答例。私は、ニュースで見た天気予報の「晴れ」という言葉だけで安心して傘を持たず、局地的な雨にぬれた。伝えられたのは情報の一部だと意識し、他の情報にも当たるべきだと思う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "解答例（81字）",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "例と、気をつけることを",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "どちらも入っている",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。3点がそろい、100字以内か。本文の主張と例が結びついているか。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "81字（100字以内）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "主張と例が結びつく",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_02": {
  "caption": "答え　I don't know why she was late.",
  "slides": [
   {
    "note": "「彼女がなぜ遅れたのか、私にはわかりません」を並べかえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "why / was / I / she",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "late / know / don't",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "まず主文。「私は知らない」＝ I don't know。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "I don't know",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「なぜ遅れたのか」は、know のあとに続く、文の中の疑問（間接疑問）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "know ＋ （なぜ彼女が遅れたか）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "間接疑問の語順は、疑問詞＋主語＋動詞。疑問文の語順にしない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "why ＋ she ＋ was late",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "× why was she late",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "つなぐ。I don't know why she was late.",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "I don't know why she was late.",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "7語すべてを使ったか確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "why・was・I・she",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "late・know・don't ← 7語",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。I don't know why she was late.",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "I don't know why",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "she was late.",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。「なぜ彼女が遅れたか」の部分に、疑問文の語順（was she）が入っていない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "why she was ← 肯定文の語順",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_03": {
  "caption": "答え　been／playing／her削除／mountain",
  "slides": [
   {
    "note": "4つの英文の誤りを直す。それぞれ1か所だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "① has gone to Kyoto",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "② enjoyed to play",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "③ who I met her",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "④ any other mountains",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "① three times（3回）は経験。経験は have been to。has gone to は『行ってしまった』。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "has gone → has been",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "② enjoy は、あとに動名詞（〜ing）だけをとる。to play は使えない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "enjoyed to play",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ enjoyed playing",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "③ who が、met の目的語の役目をしている。her が二重になるので、取る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "who I met her",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ who I met",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "④ any other は『ほかのどの〜』。あとの名詞は単数形。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "any other mountains",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ any other mountain",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "直した4文。自然な英文になっているか、声に出して読んで確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "He has been to Kyoto ...",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "I enjoyed playing tennis ...",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "the girl who I met yesterday",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "any other mountain in Japan",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答え。① been　② playing　③ her をとる　④ mountain。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "① been　② playing",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "③ her をとる　④ mountain",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。経験＝have been to、enjoy＋〜ing、関係代名詞のあとは代名詞なし、any other＋単数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "4つの規則を覚える",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_04": {
  "caption": "答え　Because he was so happy to catch a fish.",
  "slides": [
   {
    "note": "Why did the writer forget about his phone? 本文から理由を探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "forgot about his phone",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ 理由は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "本文の forgot about my phone を探す。第2段落の最後の文にある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "I was so happy that",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "I forgot about my phone.",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "so ~ that ... は「とても〜なので…」。前が原因、後ろが結果。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "so happy（原因）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "that I forgot（結果）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "うれしかった理由は、直前の文。After an hour, I finally caught a small one.",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "魚を1匹つかまえた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ とてもうれしかった",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "選択肢を見る。ア「魚をつかまえてとてもうれしかったから」が一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ア ◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "イ・ウ・エは本文にない。ウ「携帯が使えない」は第1段落の事実で、理由ではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "イ ✕　ウ ✕　エ ✕",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。ア。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "Because he was so happy",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "to catch a fish.",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。本文の2つの文（魚をつかまえた→うれしくて忘れた）がつながっている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "つかまえた → うれしい → 忘れた",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_05": {
  "caption": "答え　都会（同時に多く）⇔ 村（1つをゆっくり）",
  "slides": [
   {
    "note": "第3段落で筆者が気づいたことを、日本語60字以内で説明する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "第3段落",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "気づいたこと",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "60字以内",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "I realized something important. 「大切なことに気づいた」。このあと内容が説明される。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "I realized something important.",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "In the city の文。「都会では、いつも同時にたくさんのことをしようとしていた」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "In the city",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "同時に多くのことをしようとした",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "In the village の文。「村では、1つのことをゆっくりするほうが楽しいと学んだ」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "In the village",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "1つのことをゆっくり → 楽しい",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "2つを対比して1文に。都会＝同時に多く、村＝1つをゆっくり。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "都会⇔村",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "同時に多く ⇔ 1つをゆっくり",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "解答例。都会ではいつも同時に多くのことをしようとしていたが、村では1つのことをゆっくりするほうが楽しめると学んだ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 56,
      "w": 280,
      "h": 26,
      "text": "都会ではいつも同時に多くの",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 90,
      "w": 280,
      "h": 26,
      "text": "ことをしようとしていたが、村",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 26,
      "text": "では1つのことをゆっくりする",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     },
     {
      "t": "box",
      "x": 20,
      "y": 158,
      "w": 280,
      "h": 26,
      "text": "ほうが楽しめると学んだ。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   },
   {
    "note": "確かめ。対比が2点とも入っているか。53字で60字以内か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "都会◯　村◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "53字（60字以内）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まちがい例。村での学びだけだと、「気づき」の意味が弱くなる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "都会との対比が必要",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_07": {
  "caption": "答え　The man I met yesterday is a friend of my brother's.",
  "slides": [
   {
    "note": "「私が昨日会った男の人は、私の兄の友だちです」を英語に。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "私が昨日会った男の人",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "は、私の兄の友だちです",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "主語は「私が昨日会った男の人」。名詞を文で説明する。説明は名詞のあとに置く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "The man ＋ （説明）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "説明は『私が昨日会った』＝ I met yesterday。whom / that は省略できる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "The man (whom) I met yesterday",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "述語。『〜は友だちです』＝ is a friend。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "... is a friend",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "『私の兄の』は of my brother's。a friend of my brother's＝兄の友だちの1人。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "a friend of my brother's",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "つなぐ。The man I met yesterday is a friend of my brother's.",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "The man I met yesterday",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "is a friend of my brother's.",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "The man I met yesterday",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "is a friend of my brother's.",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。met のあとに him を入れない。関係代名詞が目的語の役目。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "met him ✕",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_08": {
  "caption": "答え　This book gave me the courage to try again.",
  "slides": [
   {
    "note": "「この本は、私にもう一度やってみる勇気を与えてくれた」を並べかえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "courage / gave / try / book",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "this / to / me / again / the",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "主語と動詞。This book gave。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "This book gave",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "「人に物を与える」は give＋人＋物。『私に』が先、『勇気を』があと。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "gave ＋ me ＋ the courage",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "『やってみる勇気』。勇気の内容を、あとから説明する。to try again。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "the courage ＋ to try again",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "つなぐ。This book gave me the courage to try again.",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "This book gave me",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "the courage to try again.",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "9語すべてを使ったか確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "courage・gave・try・book",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "this・to・me・again・the",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "This book gave me",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "the courage to try again.",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。gave the courage me のように、人と物を逆にしない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "gave me the courage ◯",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_09": {
  "caption": "答え　This song has been loved by people ...",
  "slides": [
   {
    "note": "「People all over the world have loved this song for many years.」を受動態に。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "現在完了の文",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "主語を This song に",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "受動態は『〜される』の形。be＋過去分詞。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "be＋過去分詞",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "現在完了は have＋過去分詞。受動態にすると have been＋過去分詞。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 86,
      "w": 280,
      "h": 30,
      "text": "have loved",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 30,
      "text": "→ have been loved",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "主語は This song（単数）。have は has に変わる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "This song has been loved",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "もとの主語は by のあとに置く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "by people all over the world",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "期間の語句はそのまま。for many years。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "for many years",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 14
     }
    ]
   },
   {
    "note": "答え。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 67,
      "w": 280,
      "h": 30,
      "text": "This song has been loved",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "by people all over the world",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 143,
      "w": 280,
      "h": 30,
      "text": "for many years.",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。been を落としていないか。has（単数）か。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "has been loved ◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   }
  ]
 },
 "honshiken_school_koko_waseda_eigo_12": {
  "caption": "答え　祖父が手で魚をとる方法を見せた",
  "slides": [
   {
    "note": "本文と合っているものを選ぶ。選択肢の1語ずつを、本文で探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 52,
      "w": 280,
      "h": 28,
      "text": "ア　祖父が見せた",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 88,
      "w": 280,
      "h": 28,
      "text": "イ　最初から楽しい",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 124,
      "w": 280,
      "h": 28,
      "text": "ウ　大きな魚",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 160,
      "w": 280,
      "h": 28,
      "text": "エ　祖父と再訪",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   },
   {
    "note": "アは、第2段落の He showed me how to catch fish with my hands. と同じ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ア ◯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "イは、第1段落 At first, I was upset.（最初は不満）と反対。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "イ ✕（At first, upset）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "ウは、I failed many times と a small one。『大きな魚を最初に』は事実と違う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ウ ✕（small／many times）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "エは、最後の文。再訪して教えたい相手は妹。祖父とは書かれていない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "エ ✕（teach my little sister）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 14
     }
    ]
   },
   {
    "note": "答えはア。本文の文を、そのまま言いかえた選択肢。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "正解は ア",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ。ア以外の3つは、本文の語と食いちがう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "イ・ウ・エ ✕",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "まとめ。内容一致は、本文にない語・ちがう語を探して、消去する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "box",
      "x": 20,
      "y": 105,
      "w": 280,
      "h": 30,
      "text": "ちがう語を探す",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 14
     }
    ]
   }
  ]
 }
};

export const figuresHonshikenSchool_koko_waseda: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
