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
    "note": "AB＝10cm が直径の半円。AC＝6cm の点 C。∠ACB の二等分線が半円と交わる点 D。CD を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
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
 }
};

export const figuresHonshikenSchool_koko_waseda: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
