// 立命館系高校の入試対策（数学・自作）の動く図解。各問、状況→理由→手順→答え→確かめ→まちがい の流れ（7枚以上）。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
 "ritsumeikan_koko_sansu_01": {
  "caption": "17−2√6",
  "slides": [
   {
    "note": "√をふくむ式を展開して、できるだけ簡単な形にする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "(2√3＋√2)(2√3−√2)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "＋(√6−1)²を簡単に"
     }
    ]
   },
   {
    "note": "(a＋b)(a−b)＝a²−b² や (a−b)²＝a²−2ab＋b² は、a、bが文字でも数でも成り立つ公式である。a、bに√をふくむ数を入れても、かけ算のきまりは変わらないので、そのまま使える。計算のときは √a×√a＝a（根号どうしをかけると中が出てくる）が決め手になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "展開公式は数でもそのまま"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "√a×√a＝a が決め手"
     }
    ]
   },
   {
    "note": "前半を和と差の積で計算する。a＝2√3、b＝√2とすると a²−b²。a²＝(2√3)²＝2²×(√3)²＝4×3＝12、b²＝(√2)²＝2。よって 12−2＝10。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "前半＝(2√3)²−(√2)²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝12−2＝10"
     }
    ]
   },
   {
    "note": "後半を (a−b)²＝a²−2ab＋b² で展開する。a＝√6、b＝1とすると、(√6)²−2×√6×1＋1²＝6−2√6＋1＝7−2√6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "後半＝6−2√6＋1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝7−2√6"
     }
    ]
   },
   {
    "note": "前半と後半を足す。10＋(7−2√6)＝17−2√6。整数の部分どうしはまとめられるが、√6のついた項は整数とは別の種類の数なので、これ以上まとめられない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "10＋7−2√6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝17−2√6"
     }
    ]
   },
   {
    "note": "17−2√6",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　17−2√6"
     }
    ]
   },
   {
    "note": "近似値で調べる。√3≒1.7321、√2≒1.4142、√6≒2.4495。前半は (3.4641＋1.4142)×(3.4641−1.4142)＝4.8783×2.0499≒10.00。後半は (2.4495−1)²＝1.4495²≒2.10。合計 12.10。答えは 17−2×2.4495＝12.101 で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "もとの式≒12.10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "17−2√6≒12.10 で一致"
     }
    ]
   },
   {
    "note": "(2√3)²を、2だけ2乗しないで 2×3＝6 とする。正しくは 2²×3＝12。(√6−1)²を、中だけ引いて 6−1＝5 とするのも誤り。(a−b)²は a²−b² ではなく、まん中の −2ab を落としてはいけない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×(2√3)²＝6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 2²×3＝12"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_02": {
  "caption": "19",
  "slides": [
   {
    "note": "xとyに√をふくむ数が入っている。x²−xy＋y² の値を、できるだけ手間をかけずに求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "x＝√7＋2、y＝√7−2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "x²−xy＋y² の値は？"
     }
    ]
   },
   {
    "note": "x²＋y² は、(x＋y)²を展開した x²＋2xy＋y² から 2xy を引いたものに等しい。そして x＋y と xy は、√がうまく消えて簡単な数になる（x＋y は 2が消え、xy は和と差の積）。だから、先に和と積を求めて、式をそれで言いかえると計算が短い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "x＋y と xy を先に出す"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "式を和と積で言いかえる"
     }
    ]
   },
   {
    "note": "x＋y と xy を求める。x＋y＝(√7＋2)＋(√7−2)＝2√7。xy＝(√7＋2)(√7−2)＝(√7)²−2²＝7−4＝3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＋y＝2√7"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "xy＝7−4＝3"
     }
    ]
   },
   {
    "note": "x²＋y² を和と積で表す。x²＋y²＝(x＋y)²−2xy＝(2√7)²−2×3＝28−6＝22。（(2√7)²＝4×7＝28）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x²＋y²＝(x＋y)²−2xy"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝28−6＝22"
     }
    ]
   },
   {
    "note": "求める式 x²−xy＋y² は、(x²＋y²)−xy と書けるので、22−3＝19。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(x²＋y²)−xy"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝22−3＝19"
     }
    ]
   },
   {
    "note": "19",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　19"
     }
    ]
   },
   {
    "note": "別の方法で確かめる。x＝2.6458＋2＝4.6458、y＝0.6458。x²≒21.583、xy≒3.000、y²≒0.417。x²−xy＋y²＝21.583−3.000＋0.417＝19.000 で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x≒4.646、y≒0.646"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "21.58−3.00＋0.42＝19"
     }
    ]
   },
   {
    "note": "x²＋y² を (x＋y)² と同じだとして 28 のままにする。正しくは 2xy＝6 を引く。また、(2√7)²を 2×7＝14 としてしまうミスも多い。係数の2も2乗して 4×7＝28。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×x²＋y²＝(x＋y)²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ −2xy を引く"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_03": {
  "caption": "8100",
  "slides": [
   {
    "note": "大きな数の2乗どうしの差を、筆算せずに求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "2026²−2024²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "筆算なしで求めたい"
     }
    ]
   },
   {
    "note": "a²−b² は、長方形を使って考えると (a＋b)(a−b) と等しいことがわかる。一辺aの正方形から、一辺bの正方形を取りのぞいたL字形を、切って並べかえると、たて(a−b)、横(a＋b)の長方形になるからである。2026と2024はとても近いので、差の(a−b)が小さな数になり、計算がらくになる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "a²−b²＝(a＋b)(a−b)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "L字形→長方形に並べかえ"
     }
    ]
   },
   {
    "note": "a＝2026、b＝2024として、和と差を求める。a＋b＝4050、a−b＝2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＋b＝4050"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a−b＝2"
     }
    ]
   },
   {
    "note": "公式に入れる。2026²−2024²＝(2026＋2024)×(2026−2024)＝4050×2＝8100。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝4050×2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝8100"
     }
    ]
   },
   {
    "note": "8100",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　8100"
     }
    ]
   },
   {
    "note": "筆算で確かめる。2026²＝4104676、2024²＝4096576。4104676−4096576＝8100。くふうした答えと一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "2026²＝4104676"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "2024²＝4096576"
     },
     {
      "t": "box",
      "x": 20,
      "y": 102,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "差は 8100 で一致"
     }
    ]
   },
   {
    "note": "(2026−2024)²＝2²＝4 としてしまう。a²−b² は (a−b)² ではない。(a−b)²＝a²−2ab＋b² と別のものである。必ず「和」もかける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×(a−b)²＝4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 和もかけて8100"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_04": {
  "caption": "x＝6、y＝3",
  "slides": [
   {
    "note": "分数と小数がまざった連立方程式を解く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "① x/2＋y/3＝4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "② 0.2x＋0.5y＝2.7"
     }
    ]
   },
   {
    "note": "等式は、両辺に同じ数をかけても成り立つ。そこで、分数・小数のままではなく、先に両辺に同じ数をかけて整数の係数にそろえておけば、そのあとは今までの加減法と同じになる。かけ忘れる辺があると等式がくずれるので、「全部の項と右辺」にかける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "両辺に同じ数をかけて"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "係数を整数にしてから解く"
     }
    ]
   },
   {
    "note": "①の分母2と3の最小公倍数6を両辺にかける。3x＋2y＝24。（x/2×6＝3x、y/3×6＝2y、4×6＝24）②は両辺に10をかける。2x＋5y＝27。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "①×6　3x＋2y＝24"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "②×10　2x＋5y＝27"
     }
    ]
   },
   {
    "note": "xの係数を6にそろえる。①×2 は 6x＋4y＝48、②×3 は 6x＋15y＝81。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "①×2　6x＋4y＝48"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "②×3　6x＋15y＝81"
     }
    ]
   },
   {
    "note": "2つの式を辺々引く。(6x＋15y)−(6x＋4y)＝81−48 より 11y＝33、y＝3。y＝3を 3x＋2y＝24 に代入して 3x＋6＝24、3x＝18、x＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "11y＝33　y＝3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "3x＋6＝24　x＝6"
     }
    ]
   },
   {
    "note": "x＝6、y＝3",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　x＝6、y＝3"
     }
    ]
   },
   {
    "note": "もとの①②に代入して調べる。①は 6/2＋3/3＝3＋1＝4 で一致。②は 0.2×6＋0.5×3＝1.2＋1.5＝2.7 で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "① 3＋1＝4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "② 1.2＋1.5＝2.7"
     }
    ]
   },
   {
    "note": "①の右辺の4に6をかけ忘れて 3x＋2y＝4 としてしまう。また、②の2.7に10をかけず 2x＋5y＝2.7 とする。分数・小数を消すかけ算は、右辺にもかならず行う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×右辺にかけ忘れ"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 全部の項にかける"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_05": {
  "caption": "x＝4±2√2",
  "slides": [
   {
    "note": "x² をふくむ方程式を整理して、解を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "(x−3)²＝2x＋1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "解のx＝？"
     }
    ]
   },
   {
    "note": "2次方程式は、移項して ax²＋bx＋c＝0 の形にそろえてから解く。そろえる理由は、因数分解や解の公式が、この形を前提に作られているからである。因数分解できるか調べ、整数の積に分けられなければ、解の公式 x＝(−b±√(b²−4ac))/2a を使う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "ax²＋bx＋c＝0 の形に"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "因数分解→無理なら公式"
     }
    ]
   },
   {
    "note": "左辺を展開して整理する。(x−3)²＝x²−6x＋9。これが 2x＋1 に等しいので x²−6x＋9＝2x＋1。移項して x²−8x＋8＝0。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x²−6x＋9＝2x＋1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x²−8x＋8＝0"
     }
    ]
   },
   {
    "note": "かけて8、たして−8になる整数の組はない。（1と8、2と4のどちらも和が−8にならない。）だから因数分解はできず、解の公式を使う。a＝1、b＝−8、c＝8。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "整数の組が見つからない"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝1、b＝−8、c＝8"
     }
    ]
   },
   {
    "note": "公式に入れる。x＝(8±√(64−32))/2＝(8±√32)/2。√32＝4√2 なので x＝(8±4√2)/2＝4±2√2。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(8±√32)/2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝4±2√2"
     }
    ]
   },
   {
    "note": "x＝4±2√2",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　x＝4±2√2"
     }
    ]
   },
   {
    "note": "x＝4＋2√2（≒6.828）を、もとの式の両辺に入れる。左辺は (6.828−3)²＝3.828²≒14.66。右辺は 2×6.828＋1＝14.66 で一致。x＝4−2√2（≒1.172）も、左辺 (1.172−3)²≒3.34、右辺 2×1.172＋1＝3.34 で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "6.828で 14.66＝14.66"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "1.172で 3.34＝3.34"
     }
    ]
   },
   {
    "note": "(x−3)²を x²−9 と展開してしまう。正しくは x²−6x＋9。まん中の項を落とさない。また、(8±4√2)/2 の約分で、4√2だけ2でわって 8±2√2 としてしまうミスもある。分子の全部の項を2でわる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×(x−3)²＝x²−9"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ x²−6x＋9"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_06": {
  "caption": "3、4、5",
  "slides": [
   {
    "note": "連続する3つの整数のうち、最大の数の2乗が、他の2つの2乗の和になるとき、その3つを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "3つの連続する正の整数"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "最大²＝他の2つの²の和"
     }
    ]
   },
   {
    "note": "連続する3つの整数は、いちばん小さい数をnとおくと、n、n＋1、n＋2 と表せる。1ずつ大きくなるからである。こうおくと、最大の数が n＋2、残りが n と n＋1 となり、条件を1つの式で書ける。式が x² をふくむので、2次方程式になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "n、n＋1、n＋2 とおく"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "条件を式に直す"
     }
    ]
   },
   {
    "note": "条件を式にする。最大の数の2乗は (n＋2)²、残りの2つの2乗の和は n²＋(n＋1)²。だから (n＋2)²＝n²＋(n＋1)²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(n＋2)²＝n²＋(n＋1)²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "式をつくる"
     }
    ]
   },
   {
    "note": "展開して整理する。左辺は n²＋4n＋4、右辺は n²＋n²＋2n＋1＝2n²＋2n＋1。移項して n²−2n−3＝0。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n²＋4n＋4＝2n²＋2n＋1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n²−2n−3＝0"
     }
    ]
   },
   {
    "note": "因数分解する。かけて−3、たして−2になる2数は −3 と 1。(n−3)(n＋1)＝0 より n＝3 または n＝−1。n は正の整数なので n＝3 だけが条件にあう。3つの数は 3、4、5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(n−3)(n＋1)＝0"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n＝3（−1は不適）"
     }
    ]
   },
   {
    "note": "3、4、5",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　3、4、5"
     }
    ]
   },
   {
    "note": "もとの条件に入れて確かめる。最大の数の2乗は 5²＝25。残り2つの2乗の和は 3²＋4²＝9＋16＝25。一致する。（直角三角形の3辺 3、4、5 の関係と同じである。）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "5²＝25"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "3²＋4²＝9＋16＝25"
     }
    ]
   },
   {
    "note": "n＝−1 も答えにしてしまう。n＝−1 だと3つの数は −1、0、1 で、正の整数という条件にあわない。また、3つの数を n、2n、3n などと表すと、連続した数にならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×n＝−1 も答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 正の整数だけ"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_07": {
  "caption": "720m",
  "slides": [
   {
    "note": "歩いた道のりを求める。全体は1920m、20分、速さは60m/分と150m/分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "全体 1920m・20分"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "歩いた道のり＝？"
     }
    ]
   },
   {
    "note": "速さ×時間＝道のり、という関係が、歩く部分と走る部分の両方で成り立つ。知りたいものは2つ（歩いた時間と走った時間）なので、式も2本必要になる。1本は「かかった時間の合計」、もう1本は「道のりの合計」である。連立方程式にして解く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "速さ×時間＝道のり"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "時間の式と道のりの式"
     }
    ]
   },
   {
    "note": "歩いた時間をx分、走った時間をy分とする。時間の合計は x＋y＝20。道のりの合計は 60x＋150y＝1920。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＋y＝20"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "60x＋150y＝1920"
     }
    ]
   },
   {
    "note": "第1式を60倍して 60x＋60y＝1200。第2式から引くと 90y＝720、y＝8。第1式に入れて x＝20−8＝12。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "90y＝720　y＝8"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＝12（歩いた時間）"
     }
    ]
   },
   {
    "note": "歩いた道のりは 60×12＝720m。（走った道のりは 150×8＝1200m。）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "歩いた道のり60×12"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝720m"
     }
    ]
   },
   {
    "note": "720m",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　720m"
     }
    ]
   },
   {
    "note": "歩いた720mと走った1200mを足すと 720＋1200＝1920m で、全体の道のりと一致する。時間も 12＋8＝20分で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "720＋1200＝1920m"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "12＋8＝20分"
     }
    ]
   },
   {
    "note": "x＝12 を答えにしてしまう。x は「時間（分）」であり、問題が聞いているのは「道のり（m）」。最後に 60をかけて m にもどす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×12 と答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 60×12＝720m"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_08": {
  "caption": "200g",
  "slides": [
   {
    "note": "2種類の食塩水を混ぜて、10％のものを450gつくる。Aの量を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "A 5％、B 14％"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "合わせて10％・450g"
     }
    ]
   },
   {
    "note": "混ぜても、とけている食塩の重さの合計は変わらない。水と食塩が増えたり減ったりしないからである。そこで、混ぜる前のAとBの食塩の重さの和が、混ぜた後の食塩の重さに等しい、という式をつくる。食塩の重さは、食塩水の重さ×濃度（割合）で表す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "食塩の重さの合計は不変"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "食塩＝食塩水×濃度"
     }
    ]
   },
   {
    "note": "Aをxgとすると、Bは (450−x)g。混ぜた後の食塩は 450×0.10＝45g。式は 0.05x＋0.14(450−x)＝45。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "Aをxg、Bを(450−x)g"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "0.05x＋0.14(450−x)＝45"
     }
    ]
   },
   {
    "note": "かっこをはずす。0.05x＋63−0.14x＝45。まとめて −0.09x＋63＝45。−0.09x＝−18。x＝200。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "63−0.09x＝45"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＝200"
     }
    ]
   },
   {
    "note": "Aは200g。（Bは 450−200＝250g。）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "A＝200g、B＝250g"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "Aは 200g"
     }
    ]
   },
   {
    "note": "200g",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　200g"
     }
    ]
   },
   {
    "note": "食塩の重さで確かめる。Aの食塩は 200×0.05＝10g、Bの食塩は 250×0.14＝35g。合計45gで、450gの10％と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "10g＋35g＝45g"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "450×0.1＝45g"
     }
    ]
   },
   {
    "note": "濃度をそのまま足して「5＋14」などとする。濃度は割合なので、重さをかけて「食塩の重さ」にしてから足す。また、Bの重さを 450−x でなく 450 にしてしまうミスも多い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×濃度どうしを足す"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 食塩の重さで足す"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_09": {
  "caption": "378人",
  "slides": [
   {
    "note": "男子が減り女子が増えて、全体で6人減った。今年の女子の人数を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "昨年600人、今年は−6人"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "今年の女子＝？"
     }
    ]
   },
   {
    "note": "今年の人数は、昨年の人数をもとにして「10％減」「5％増」を計算して決まる。だから、まず昨年の男子・女子を文字でおくと、増減した人数を「昨年の人数×割合」で表せる。男子は減り、女子は増えるので、増減の符号が逆になる点に注意する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "昨年の人数をもとに"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "減る・増えるは符号が逆"
     }
    ]
   },
   {
    "note": "昨年の男子をx人、女子をy人とする。合計は x＋y＝600。増減は、男子が 0.1x 人減り、女子が 0.05y 人増えて、全体で6人減ったので −0.1x＋0.05y＝−6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＋y＝600"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "−0.1x＋0.05y＝−6"
     }
    ]
   },
   {
    "note": "第2式の両辺に100をかけると −10x＋5y＝−600、5でわって −2x＋y＝−120。これと x＋y＝600 を辺々引くと 3x＝720、x＝240。y＝600−240＝360。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "3x＝720　x＝240"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "y＝360（昨年の女子）"
     }
    ]
   },
   {
    "note": "今年の女子は、昨年の360人の5％増。360×1.05＝378人。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "360×1.05"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝378人"
     }
    ]
   },
   {
    "note": "378人",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　378人"
     }
    ]
   },
   {
    "note": "今年の男子は 240×0.9＝216人。女子378人と合わせて 216＋378＝594人で、昨年より6人減っている。条件と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "216＋378＝594"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "600−6＝594 で一致"
     }
    ]
   },
   {
    "note": "昨年の女子 y＝360 を答えにしてしまう。問題は「今年の」女子の人数。5％増をかけて 378人にする。また 5％増を 0.05倍（18人）と答えるミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×360人（昨年）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 360×1.05＝378人"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_10": {
  "caption": "12cm",
  "slides": [
   {
    "note": "厚紙の四すみを切って折った容器の容積が128cm³になるときの、もとの1辺を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "四すみに1辺2cmを切る"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "容積128cm³・1辺は？"
     }
    ]
   },
   {
    "note": "四すみを1辺2cm切り取って折り曲げると、切り取ったぶんの2cmが高さになる。底面は、もとの1辺から「両はしの2cmずつ」を引いた長さの正方形になる。もとの1辺をxとすると、引くのは2＋2＝4cm。底面の1辺はx−4。容積は 底面積×高さ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "高さ＝切り取った2cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "底面の1辺＝x−4"
     }
    ]
   },
   {
    "note": "容積の式をつくる。底面積は (x−4)²、高さは2cm。容積128cm³なので 2(x−4)²＝128。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "底面積(x−4)²×高さ2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "2(x−4)²＝128"
     }
    ]
   },
   {
    "note": "両辺を2でわって (x−4)²＝64。2乗して64になる数は8と−8なので x−4＝8 または x−4＝−8。x＝12 または x＝−4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(x−4)²＝64"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x−4＝±8"
     }
    ]
   },
   {
    "note": "x＝−4 は長さにならないので不適。x＝12cm。底面の1辺は 12−4＝8cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＝−4 は長さでない"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＝12"
     }
    ]
   },
   {
    "note": "12cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　12cm"
     }
    ]
   },
   {
    "note": "もとの1辺を12cmとして計算する。底面の1辺は 12−2×2＝8cm。容積は 8×8×2＝128cm³ で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "底面 8×8＝64cm²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "64×2＝128cm³"
     }
    ]
   },
   {
    "note": "底面の1辺を x−2 としてしまう。切り取る2cmは「両はし」に2回あるので、引くのは4cm。また、(x−4)²＝64 を x−4＝8 だけ考え、長さにならない解の−4もあわせて確かめる習慣をつける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×底面の1辺＝x−2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 両はしで x−4"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_11": {
  "caption": "a＝−1/4、−9/4≦y≦0",
  "slides": [
   {
    "note": "y＝ax² のaを求めたあと、xが −3 から 2 までのときのyの変域を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "xが2→6で変化の割合−2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "aと、yの変域を求める"
     }
    ]
   },
   {
    "note": "変化の割合は「yの増加量÷xの増加量」。y＝ax²でxがpからqまで増えるとき、yの増加量は aq²−ap²＝a(q＋p)(q−p)。これをxの増加量(q−p)でわると a(p＋q) になる。だから、y＝ax²では、変化の割合は a×(pとqの和) で一気に求められる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "変化の割合＝yの増加÷xの増加"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "y＝ax²では a(p＋q)"
     }
    ]
   },
   {
    "note": "p＝2、q＝6を入れる。a×(2＋6)＝8a。これが−2に等しいので 8a＝−2、a＝−1/4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "8a＝−2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "a＝−1/4"
     }
    ]
   },
   {
    "note": "y＝−x²/4 のグラフは、上に頂点があって下に開く形（a＜0）。xの変域−3≦x≦2は、x＝0（頂点）をふくむ。x＝0のとき y＝0、x＝−3のとき y＝−9/4、x＝2のとき y＝−1。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 60.2,
      "cy": 127.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 163.0,
      "cy": 66.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 231.5,
      "cy": 93.7,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝0で y＝0（最大）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝−3で y＝−9/4"
     }
    ]
   },
   {
    "note": "頂点のy＝0が最大値。最小値は、0から遠いほう（x＝−3、y＝−9/4）。−1より−9/4のほうが小さい。よって −9/4≦y≦0。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "最大 0、最小 −9/4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "−9/4≦y≦0"
     }
    ]
   },
   {
    "note": "a＝−1/4、−9/4≦y≦0",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　a＝−1/4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "−9/4≦y≦0"
     }
    ]
   },
   {
    "note": "xが2のときy＝−1、6のときy＝−9。変化の割合は (−9−(−1))÷(6−2)＝−8÷4＝−2で一致する。yの変域は、x＝−3、0、2の値 −9/4、0、−1 のうち最大0・最小−9/4で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(−9＋1)÷4＝−2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "値は −9/4、0、−1"
     }
    ]
   },
   {
    "note": "x＝−3とx＝2の両はしだけを比べて −9/4≦y≦−1 としてしまう。xの変域が0をふくむと、頂点のy＝0が最大値になる。かならずグラフの形を見て確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 66.6,
      "x2": 300.0,
      "y2": 66.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 78.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.2,
      "y1": 127.6,
      "x2": 74.9,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 74.9,
      "y1": 111.4,
      "x2": 89.6,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.6,
      "y1": 97.7,
      "x2": 104.3,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 104.3,
      "y1": 86.5,
      "x2": 119.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.0,
      "y1": 77.8,
      "x2": 133.6,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 133.6,
      "y1": 71.6,
      "x2": 148.3,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.3,
      "y1": 67.8,
      "x2": 163.0,
      "y2": 66.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 66.6,
      "x2": 177.7,
      "y2": 67.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 177.7,
      "y1": 67.8,
      "x2": 192.4,
      "y2": 71.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 192.4,
      "y1": 71.6,
      "x2": 207.0,
      "y2": 77.8,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 207.0,
      "y1": 77.8,
      "x2": 221.7,
      "y2": 86.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 221.7,
      "y1": 86.5,
      "x2": 236.4,
      "y2": 97.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 236.4,
      "y1": 97.7,
      "x2": 251.1,
      "y2": 111.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 251.1,
      "y1": 111.4,
      "x2": 265.8,
      "y2": 127.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×−9/4≦y≦−1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ x＝0で最大0"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_12": {
  "caption": "15",
  "slides": [
   {
    "note": "放物線と直線の2つの交点と原点でできる三角形の面積を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "y＝x² と y＝x＋6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "△OABの面積は？"
     }
    ]
   },
   {
    "note": "2つのグラフの交点は、2つの式を同時に満たす点なので、式を連立して解けば求まる。ここでは y を消して x²＝x＋6 とする。三角形の面積は、辺が斜めのままでは出しにくいので、y軸上の点Cをとり、OCを共通の底辺とする2つの三角形に分ける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "式を連立して交点を出す"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "y軸上のCで三角形を分ける"
     }
    ]
   },
   {
    "note": "x²＝x＋6 を整理して x²−x−6＝0。(x−3)(x＋2)＝0 より x＝3、−2。Aのx座標は負なので A(−2，4)、B(3，9)。（y＝x² に代入して y＝4、9）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x²−x−6＝0"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "A(−2,4)、B(3,9)"
     }
    ]
   },
   {
    "note": "直線 y＝x＋6 とy軸の交点は C(0，6)。OC＝6。△OAB＝△OAC＋△OBC。どちらもOCを底辺と見ると、高さはAとBのx座標の絶対値（2と3）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 143.4,
      "y1": 75.5,
      "x2": 65.1,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 143.4,
      "y1": 75.5,
      "x2": 260.9,
      "y2": 44.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "C(0,6)　OC＝6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "高さは2と3"
     }
    ]
   },
   {
    "note": "△OAC＝1/2×6×2＝6、△OBC＝1/2×6×3＝9。合わせて 6＋9＝15。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "6＋9＝15"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△OAB＝15"
     }
    ]
   },
   {
    "note": "15",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　15"
     }
    ]
   },
   {
    "note": "別の方法で確かめる。1/2×OC×(2＋3)＝1/2×6×5＝15 で一致する。また、Aの座標(−2,4)は y＝x＋6 に入れて −2＋6＝4、Bの座標(3,9)は 3＋6＝9 となり、直線上にあることも確かめられる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "1/2×6×(2＋3)＝15"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "A、Bは直線上の点"
     }
    ]
   },
   {
    "note": "Aのx座標の−2を、そのまま負の高さとして計算してしまう。高さは距離なので正の2。また、A・Bのx座標の差の5をそのまま面積と答えるミスも多い。底辺OCの長さ6を忘れない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 143.4,
      "y1": 148.0,
      "x2": 143.4,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 152.4,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 49.5,
      "y1": 77.9,
      "x2": 64.9,
      "y2": 95.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 64.9,
      "y1": 95.9,
      "x2": 80.2,
      "y2": 110.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 80.2,
      "y1": 110.6,
      "x2": 95.6,
      "y2": 122.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.6,
      "y1": 122.2,
      "x2": 111.0,
      "y2": 130.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 111.0,
      "y1": 130.5,
      "x2": 126.4,
      "y2": 135.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 135.7,
      "x2": 141.8,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 137.6,
      "x2": 157.1,
      "y2": 136.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 157.1,
      "y1": 136.4,
      "x2": 172.5,
      "y2": 131.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 172.5,
      "y1": 131.9,
      "x2": 187.9,
      "y2": 124.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.9,
      "y1": 124.3,
      "x2": 203.3,
      "y2": 113.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 203.3,
      "y1": 113.4,
      "x2": 218.6,
      "y2": 99.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.6,
      "y1": 99.4,
      "x2": 234.0,
      "y2": 82.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 234.0,
      "y1": 82.1,
      "x2": 249.4,
      "y2": 61.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.4,
      "y1": 61.7,
      "x2": 264.8,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 41.7,
      "y1": 102.4,
      "x2": 276.5,
      "y2": 40.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 65.1,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 260.9,
      "cy": 44.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 143.4,
      "cy": 75.5,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 55.1,
      "y": 98.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 270.9,
      "y": 44.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134.4,
      "y": 73.5,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 135.4,
      "y": 149.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×高さに−2を使う"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 距離で 2 と 3"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_13": {
  "caption": "y＝(1/2)x＋6",
  "slides": [
   {
    "note": "点Aを通って△OABの面積を2つに等しく分ける直線の式を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "A(−4,4)・B(8,16)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "Aを通る面積の二等分線"
     }
    ]
   },
   {
    "note": "三角形の頂点から向かいの辺へ線を引くと、その辺の上の2つの線分を底辺とする2つの三角形ができる。この2つは、頂点からの高さが同じなので、底辺の長さが等しければ面積も等しい。だから、Aから向かいの辺OBの「中点」Mへ線を引けばよい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "高さが同じなら底辺で決まる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "Aから、辺OBの中点Mへ"
     }
    ]
   },
   {
    "note": "2点の座標を求める。Aのy座標は (1/4)×(−4)²＝4 なので A(−4，4)。Bのy座標は (1/4)×8²＝16 なので B(8，16)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "A(−4,4)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "B(8,16)"
     }
    ]
   },
   {
    "note": "OBの中点Mの座標は、O(0，0)とB(8，16)の座標の平均。Mのx座標は (0＋8)÷2＝4、y座標は (0＋16)÷2＝8。M(4，8)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "circle",
      "cx": 201.4,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 210.4,
      "y": 88.0,
      "text": "M",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "M＝((0＋8)/2,(0＋16)/2)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "M(4,8)"
     }
    ]
   },
   {
    "note": "2点A(−4，4)とM(4，8)を通る直線の式を求める。傾きは (8−4)÷(4−(−4))＝4÷8＝1/2。y＝(1/2)x＋bにM(4，8)を入れて 8＝2＋b、b＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "circle",
      "cx": 201.4,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 210.4,
      "y": 88.0,
      "text": "M",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 201.4,
      "y2": 91.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "傾き＝4÷8＝1/2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "8＝2＋b　b＝6"
     }
    ]
   },
   {
    "note": "y＝(1/2)x＋6",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　y＝(1/2)x＋6"
     }
    ]
   },
   {
    "note": "直線上にAがあるか確かめる。x＝−4を入れると y＝−2＋6＝4でAと一致。さらに、2つの三角形 △OAM と △BAM は、底辺OM＝MB＝√(16＋64)で等しく、Aからの高さも共通なので、面積が等しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝−4で y＝4（Aと一致）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "OM＝MB、高さ共通"
     }
    ]
   },
   {
    "note": "ABの中点を通る直線を考えてしまう。Aを通る直線なので、Aの向かいの辺OBの中点を通る。また、中点を求めるとき (0＋8) とだけして 2でわるのを忘れ、M(8，16) としてしまうミスがある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 24.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 122.6,
      "y1": 148.0,
      "x2": 122.6,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 131.6,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 35.8,
      "y1": 109.0,
      "x2": 49.8,
      "y2": 117.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 49.8,
      "y1": 117.2,
      "x2": 63.9,
      "y2": 124.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 63.9,
      "y1": 124.0,
      "x2": 77.9,
      "y2": 129.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 77.9,
      "y1": 129.3,
      "x2": 91.9,
      "y2": 133.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 91.9,
      "y1": 133.2,
      "x2": 105.9,
      "y2": 135.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 105.9,
      "y1": 135.6,
      "x2": 119.9,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 119.9,
      "y1": 136.6,
      "x2": 134.0,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 134.0,
      "y1": 136.1,
      "x2": 148.0,
      "y2": 134.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 148.0,
      "y1": 134.2,
      "x2": 162.0,
      "y2": 130.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 162.0,
      "y1": 130.9,
      "x2": 176.0,
      "y2": 126.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.0,
      "y1": 126.1,
      "x2": 190.0,
      "y2": 119.9,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 190.0,
      "y1": 119.9,
      "x2": 204.1,
      "y2": 112.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 204.1,
      "y1": 112.3,
      "x2": 218.1,
      "y2": 103.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 218.1,
      "y1": 103.2,
      "x2": 232.1,
      "y2": 92.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 232.1,
      "y1": 92.6,
      "x2": 246.1,
      "y2": 80.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 246.1,
      "y1": 80.6,
      "x2": 260.1,
      "y2": 67.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 260.1,
      "y1": 67.2,
      "x2": 274.2,
      "y2": 52.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 274.2,
      "y1": 52.4,
      "x2": 288.2,
      "y2": 36.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 43.7,
      "y1": 113.8,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 122.6,
      "y1": 136.6,
      "x2": 280.3,
      "y2": 45.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 43.7,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 280.3,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 35.7,
      "y": 111.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 271.3,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 114.6,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×ABの中点"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ OBの中点M(4,8)"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_14": {
  "caption": "2秒後と6.5秒後",
  "slides": [
   {
    "note": "Pが動くとき、△ABPの面積が12cm²になる時間をすべて求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "Pは毎秒2cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "△ABP＝12cm² になる時刻"
     }
    ]
   },
   {
    "note": "△ABPの面積は、Pがどこにいるかで式が変わる。Pが辺BC上のあいだは、ABを底辺と見ると高さはBP。Pが辺CA上のあいだは、△ABPと△ABCは、頂点Bが共通で、底辺APとACが同じ直線上にあるので高さが等しく、面積の比がAPとACの比に等しくなる。そこで、場合に分けて式をつくる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "辺BC上と辺CA上で場合分け"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "式がそれぞれ変わる"
     }
    ]
   },
   {
    "note": "Pが辺BC上（0≦x≦4）のとき。BP＝2x なので、△ABP＝1/2×6×2x＝6x。6x＝12 より x＝2。これは0≦x≦4にあうので適する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        112,
        134
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 112,
      "cy": 134,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "y＝6x（0≦x≦4）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "6x＝12　x＝2"
     }
    ]
   },
   {
    "note": "Pが辺CA上（4≦x≦9）のとき。BCとCAの合計は 8＋10＝18cm。Pが進んだ道のりは2xなので、AP＝18−2x。△ABPの面積は△ABC(24cm²)のAP/AC倍で、24×(18−2x)/10＝(216−24x)/5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AP＝18−2x"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "y＝24×(18−2x)/10"
     }
    ]
   },
   {
    "note": "(216−24x)/5＝12 を解く。両辺を5倍して 216−24x＝60、24x＝156、x＝6.5。これは4≦x≦9にあうので適する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        112.0,
        92.0
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 112.0,
      "cy": 92.0,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "216−24x＝60"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝6.5"
     }
    ]
   },
   {
    "note": "2秒後と6.5秒後",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　2秒後と6.5秒後"
     }
    ]
   },
   {
    "note": "x＝2のとき、BP＝4cmで 1/2×6×4＝12cm²。x＝6.5のとき、Pは進んだ道のり13cmでAPは18−13＝5cm、AP/AC＝1/2なので 24×1/2＝12cm²で、どちらも一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝2：1/2×6×4＝12"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝6.5：24×1/2＝12"
     }
    ]
   },
   {
    "note": "辺BC上の場合だけで x＝2 と答えてしまう。Pが辺CA上を動くとき、面積はふたたび12cm²になる。また、辺CA上でAPを 2x−8 としてしまうと、「Cからの道のり」になり、Aまでの残りの長さではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        56,
        50
       ],
       [
        56,
        134
       ],
       [
        168,
        134
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 48,
      "y": 52,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 48,
      "y": 138,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177,
      "y": 138,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 112.0,
      "y": 145,
      "text": "8",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 47,
      "y": 92.0,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 130.0,
      "y": 84.0,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×2秒後だけ答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ CA上でも調べる"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_15": {
  "caption": "4分後、家から800mの地点",
  "slides": [
   {
    "note": "弟が兄に追いつく時刻と、その地点を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "兄 80m/分、弟 200m/分"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "弟は6分おくれて出発"
     }
    ]
   },
   {
    "note": "追いつくとは、2人が同じ地点にいることなので、2人の「家からの道のり」が等しくなる。そのためには、時計を1つに決める必要がある。ここでは「兄が出発してからの時間」を基準にする。弟は6分遅れて出発するので、弟が走っている時間は (基準の時間−6)分になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "追いつく＝道のりが等しい"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "時計は兄の出発を基準に"
     }
    ]
   },
   {
    "note": "兄が出発してからx分後の道のりは、兄が 80x m、弟が 200(x−6) m。追いつくので 80x＝200(x−6)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "兄 80x、弟 200(x−6)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "80x＝200(x−6)"
     }
    ]
   },
   {
    "note": "かっこをはずして 80x＝200x−1200。移項して −120x＝−1200、x＝10。兄の出発から10分後に追いつく。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "circle",
      "cx": 255.7,
      "cy": 54.0,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "120x＝1200"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝10（兄の出発から）"
     }
    ]
   },
   {
    "note": "弟の出発からは 10−6＝4分後。そのとき家から 80×10＝800m（弟は 200×4＝800m）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "弟の出発から 4分後"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "家から 800m"
     }
    ]
   },
   {
    "note": "4分後、家から800mの地点",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　4分後"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "家から800mの地点"
     }
    ]
   },
   {
    "note": "弟は4分で 200×4＝800m。兄は10分で 80×10＝800m。同じ地点で一致する。グラフでは、兄の直線と弟の直線が(10分、800m)で交わっている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "弟 200×4＝800m"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "兄 80×10＝800m"
     }
    ]
   },
   {
    "note": "x＝10 を答えにしてしまう。x は兄の出発からの時間で、問われているのは弟の出発から。また、弟の式を 200x としてしまうと、弟が6分遅れて出発していることを無視してしまう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 300.0,
      "y2": 134.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 34.0,
      "y1": 146.0,
      "x2": 34.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 146.0,
      "text": "分",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 43.0,
      "y": 42.0,
      "text": "m",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 34.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 46.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 167.0,
      "y1": 134.0,
      "x2": 277.8,
      "y2": 34.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 82.8,
      "y": 96.0,
      "text": "兄",
      "size": 11,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 226.8,
      "y": 104.0,
      "text": "弟",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×10分後と答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 10−6＝4分後"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_16": {
  "caption": "2/3",
  "slides": [
   {
    "note": "放物線上の2点と、x軸上の2点でつくる正方形の条件から、aを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "y＝ax² 上に A、B"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "ABCDは正方形・Bのx＝3"
     }
    ]
   },
   {
    "note": "A、Bはy軸について対称なので、Aのx座標は−3、Bのx座標は3。2点のy座標は同じになる。ABの長さは、x座標の差 3−(−3)＝6。正方形は4辺が等しいので、BCの長さ（Bのy座標）も6になる。Bのy座標がわかれば、y＝ax²に代入してaが求まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "A(−3,□)、B(3,□)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "AB＝6なら BC＝6"
     }
    ]
   },
   {
    "note": "ABの長さを求める。Aのx座標は−3、Bのx座標は3。AB＝3−(−3)＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AB＝3−(−3)＝6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "正方形なので BC＝6"
     }
    ]
   },
   {
    "note": "BCの長さがBのy座標。B(3，6)。この点は放物線 y＝ax² 上にあるので、x＝3、y＝6を代入する。6＝a×3²＝9a。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 80.8,
      "y1": 68.2,
      "x2": 245.2,
      "y2": 68.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "B(3,6)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "6＝9a"
     }
    ]
   },
   {
    "note": "9a＝6 を解く。a＝6/9＝2/3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "a＝6÷9"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "a＝2/3"
     }
    ]
   },
   {
    "note": "2/3",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　a＝2/3"
     }
    ]
   },
   {
    "note": "y＝(2/3)x²にx＝3を入れると y＝(2/3)×9＝6。Bの高さは6で、AB＝6と等しい。正方形ABCD（1辺6、面積36）ができている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "y＝(2/3)×9＝6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AB＝BC＝6 で一致"
     }
    ]
   },
   {
    "note": "ABの長さを、Bのx座標の3だけとしてしまう。Aは−3にあるので、AB＝6。また、Bのy座標を3としてa＝1/3と答えるミスが多い。正方形の辺の長さは6である。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 136.6,
      "x2": 300.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 64.4,
      "y1": 38.1,
      "x2": 76.7,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 76.7,
      "y1": 61.2,
      "x2": 89.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 89.0,
      "y1": 81.2,
      "x2": 101.4,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 101.4,
      "y1": 98.1,
      "x2": 113.7,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 113.7,
      "y1": 112.0,
      "x2": 126.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 126.0,
      "y1": 122.7,
      "x2": 138.3,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 138.3,
      "y1": 130.4,
      "x2": 150.7,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 150.7,
      "y1": 135.1,
      "x2": 163.0,
      "y2": 136.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 136.6,
      "x2": 175.3,
      "y2": 135.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 175.3,
      "y1": 135.1,
      "x2": 187.7,
      "y2": 130.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 187.7,
      "y1": 130.4,
      "x2": 200.0,
      "y2": 122.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 200.0,
      "y1": 122.7,
      "x2": 212.3,
      "y2": 112.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 212.3,
      "y1": 112.0,
      "x2": 224.7,
      "y2": 98.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 224.7,
      "y1": 98.1,
      "x2": 237.0,
      "y2": 81.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.0,
      "y1": 81.2,
      "x2": 249.3,
      "y2": 61.2,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 249.3,
      "y1": 61.2,
      "x2": 261.6,
      "y2": 38.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "poly",
      "pts": [
       [
        80.8,
        68.2
       ],
       [
        245.2,
        68.2
       ],
       [
        245.2,
        136.6
       ],
       [
        80.8,
        136.6
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 80.8,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 245.2,
      "cy": 68.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 72.8,
      "y": 64.2,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 64.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 254.2,
      "y": 146.6,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 71.8,
      "y": 146.6,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×AB＝3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ AB＝6"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_17": {
  "caption": "a＝1/4、12",
  "slides": [
   {
    "note": "2つの放物線の、同じx座標での縦の長さから、aを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "y＝x² と y＝ax²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "x＝2で縦の長さが3"
     }
    ]
   },
   {
    "note": "x座標が同じ2点を結ぶ線分は、y軸に平行になる。その長さは、2点のy座標の差である。y＝x²は、0＜a＜1より、y＝ax²よりも上にある（xを2乗した値のほうが大きい）。だから長さは「x²−ax²」で表せる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "y軸に平行な線分"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "長さ＝y座標の差"
     }
    ]
   },
   {
    "note": "x＝2のとき、y＝x²では y＝4、y＝ax²では y＝4a。長さは 4−4a＝3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "上の点 4、下の点 4a"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "4−4a＝3"
     }
    ]
   },
   {
    "note": "4−4a＝3 を解く。−4a＝−1、a＝1/4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "4a＝1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "a＝1/4"
     }
    ]
   },
   {
    "note": "x＝−4のとき、y＝x²では y＝16、y＝(1/4)x²では y＝4。線分の長さは 16−4＝12。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝−4で 16 と 4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "16−4＝12"
     }
    ]
   },
   {
    "note": "a＝1/4、12",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　a＝1/4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "長さは 12"
     }
    ]
   },
   {
    "note": "x＝2で、y＝x²は4、y＝(1/4)x²は1。差は3で条件と一致する。x＝−4でも、2つの点は y軸対称の位置のx＝4と同じ値をとるので、差は 16−4＝12 で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝2：4−1＝3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝−4：16−4＝12"
     }
    ]
   },
   {
    "note": "線分の長さを、y座標の差ではなく、a×2などと式にしてしまう。縦に引いた線分は、y座標の差を考える。また、x＝−4でx²を−16としてしまうミスもある。2乗は負にならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 26.0,
      "y1": 137.6,
      "x2": 300.0,
      "y2": 137.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 163.0,
      "y1": 148.0,
      "x2": 163.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 296.0,
      "y": 149.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 172.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 78.1,
      "y1": 38.0,
      "x2": 88.7,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 88.7,
      "y1": 61.4,
      "x2": 99.3,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 99.3,
      "y1": 81.6,
      "x2": 109.9,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 109.9,
      "y1": 98.7,
      "x2": 120.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 120.5,
      "y1": 112.7,
      "x2": 131.1,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.1,
      "y1": 123.6,
      "x2": 141.8,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 141.8,
      "y1": 131.4,
      "x2": 152.4,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 152.4,
      "y1": 136.1,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 173.6,
      "y2": 136.1,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 173.6,
      "y1": 136.1,
      "x2": 184.2,
      "y2": 131.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 184.2,
      "y1": 131.4,
      "x2": 194.9,
      "y2": 123.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.9,
      "y1": 123.6,
      "x2": 205.5,
      "y2": 112.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 205.5,
      "y1": 112.7,
      "x2": 216.1,
      "y2": 98.7,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 216.1,
      "y1": 98.7,
      "x2": 226.7,
      "y2": 81.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.7,
      "y1": 81.6,
      "x2": 237.3,
      "y2": 61.4,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 237.3,
      "y1": 61.4,
      "x2": 247.9,
      "y2": 38.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 37.0,
      "y1": 82.8,
      "x2": 52.7,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 52.7,
      "y1": 95.7,
      "x2": 68.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 68.5,
      "y1": 106.8,
      "x2": 84.2,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 84.2,
      "y1": 116.2,
      "x2": 100.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 100.0,
      "y1": 123.9,
      "x2": 115.7,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.7,
      "y1": 129.9,
      "x2": 131.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 131.5,
      "y1": 134.2,
      "x2": 147.2,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 147.2,
      "y1": 136.8,
      "x2": 163.0,
      "y2": 137.6,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 163.0,
      "y1": 137.6,
      "x2": 178.8,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 178.8,
      "y1": 136.8,
      "x2": 194.5,
      "y2": 134.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 194.5,
      "y1": 134.2,
      "x2": 210.3,
      "y2": 129.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 210.3,
      "y1": 129.9,
      "x2": 226.0,
      "y2": 123.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 226.0,
      "y1": 123.9,
      "x2": 241.8,
      "y2": 116.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 241.8,
      "y1": 116.2,
      "x2": 257.5,
      "y2": 106.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 257.5,
      "y1": 106.8,
      "x2": 273.3,
      "y2": 95.7,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 273.3,
      "y1": 95.7,
      "x2": 289.0,
      "y2": 82.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 217.8,
      "y1": 127.3,
      "x2": 217.8,
      "y2": 96.2,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 96.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 217.8,
      "cy": 127.3,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 227.8,
      "y": 92.2,
      "text": "3",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 89.0,
      "y": 54.7,
      "text": "y＝x²",
      "size": 10,
      "color": "#0284C7",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 269.9,
      "y": 116.9,
      "text": "y＝ax²",
      "size": 10,
      "color": "#16A34A",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×x²＝−16"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ (−4)²＝16"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_18": {
  "caption": "10",
  "slides": [
   {
    "note": "2本の直線とy軸・x軸でかこまれた四角形の面積を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "y＝−2x＋8 と y＝x＋2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "四角形OACDの面積は？"
     }
    ]
   },
   {
    "note": "四角形OACDは、そのままでは面積の公式が使いにくい形である。でも、△OABから、すみにある小さい△DBCを切り取ったものだと見ると、2つの三角形の面積の差として求められる。三角形の面積は、y軸上の辺を底辺とすれば、高さがx座標になってわかりやすい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "大きい△OAB−小さい△DBC"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "y軸上の辺を底辺に"
     }
    ]
   },
   {
    "note": "A、B、C、Dの座標を求める。A：y＝−2x＋8 に y＝0 を入れて x＝4、A(4，0)。B：x＝0 で y＝8、B(0，8)。D：y＝x＋2 で x＝0、D(0，2)。C：−2x＋8＝x＋2 より x＝2、y＝4、C(2，4)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "A(4,0)、B(0,8)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "D(0,2)、C(2,4)"
     }
    ]
   },
   {
    "note": "△OAB＝1/2×OB×OA＝1/2×8×4＝16。△DBC は、底辺DB＝8−2＝6、高さはCのx座標2。△DBC＝1/2×6×2＝6。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        85.0,
        45.4
       ],
       [
        85.0,
        113.8
       ],
       [
        167.0,
        91.0
       ]
      ],
      "color": "#E11D48",
      "fill": "none"
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△OAB＝1/2×8×4＝16"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△DBC＝1/2×6×2＝6"
     }
    ]
   },
   {
    "note": "四角形OACD＝△OAB−△DBC＝16−6＝10。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "16−6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝10"
     }
    ]
   },
   {
    "note": "10",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　10"
     }
    ]
   },
   {
    "note": "別の方法で確かめる。四角形OACDを、△OAC と △OCD に分ける。△OAC＝1/2×OA×(Cのy座標)＝1/2×4×4＝8。△OCD＝1/2×OD×(Cのx座標)＝1/2×2×2＝2。合計 8＋2＝10 で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△OAC＝1/2×4×4＝8"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△OCD＝1/2×2×2＝2"
     }
    ]
   },
   {
    "note": "△DBCの高さに、Cのy座標の4を使ってしまう。底辺DBがy軸上にあるときの高さは、Cのx座標の2。底辺と垂直な方向の距離を使うこと。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "arrow",
      "x1": 44.0,
      "y1": 136.6,
      "x2": 290.0,
      "y2": 136.6,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "arrow",
      "x1": 85.0,
      "y1": 148.0,
      "x2": 85.0,
      "y2": 34.0,
      "color": "#6E645C",
      "dashed": false
     },
     {
      "t": "label",
      "x": 286.0,
      "y": 148.6,
      "text": "x",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 94.0,
      "y": 42.0,
      "text": "y",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.4,
      "y1": 31.7,
      "x2": 273.6,
      "y2": 150.3,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 44.0,
      "y1": 125.2,
      "x2": 257.2,
      "y2": 65.9,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "circle",
      "cx": 249.0,
      "cy": 136.6,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 45.4,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 85.0,
      "cy": 113.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 167.0,
      "cy": 91.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "label",
      "x": 251.0,
      "y": 148.6,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 49.4,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 119.8,
      "text": "D",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 177.0,
      "y": 89.0,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 76.0,
      "y": 148.6,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×高さにy座標4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 底辺DBは縦なので x座標2"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_19": {
  "caption": "y＝(2/3)x−2/3",
  "slides": [
   {
    "note": "点Pを通って、平行四辺形の面積を2等分する直線の式を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "平行四辺形OABC"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "Pを通る面積の二等分線"
     }
    ]
   },
   {
    "note": "平行四辺形は、対角線の交点Mについて点対称な形をしている。だから、Mを通る直線は、図形を、Mについて入れかわる（合同な）2つの部分に分け、面積は等しくなる。つまり、「Mを通る直線」を求めればよい。Mは対角線OBの中点である。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "点対称な図形"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "中心Mを通る線なら等しい"
     }
    ]
   },
   {
    "note": "対角線OBの中点Mを求める。O(0，0)とB(11，6)なので、Mのx座標は 11÷2＝5.5、y座標は 6÷2＝3。M(5.5，3)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "M＝(11/2,6/2)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "M(5.5,3)"
     }
    ]
   },
   {
    "note": "P(1，0)とM(5.5，3)を通る直線の傾きは (3−0)÷(5.5−1)＝3÷4.5＝2/3。y＝(2/3)x＋b にP(1，0)を入れて 0＝2/3＋b、b＝−2/3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "傾き＝3÷4.5＝2/3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "0＝2/3＋b　b＝−2/3"
     }
    ]
   },
   {
    "note": "y＝(2/3)x−2/3",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　y＝(2/3)x−2/3"
     }
    ]
   },
   {
    "note": "この直線とCBの交点Qを調べる。y＝6のとき、6＝(2/3)x−2/3 より x＝10。Q(10，6)はCB(x＝3〜11)上にある。台形OPQCの面積は (1＋7)×6÷2＝24、平行四辺形全体は 8×6＝48で、ちょうど半分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "Q(10,6)　台形OPQC"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(1＋7)×6÷2＝24＝48÷2"
     }
    ]
   },
   {
    "note": "対角線の中点ではなく、辺OAの中点などを通る直線にしてしまう。また、Mの座標を求めるとき、11と6を2でわらず M(11，6) としてしまうミスもある。「平均」をとる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        45.2,
        126.8
       ],
       [
        215.1,
        126.8
       ],
       [
        278.8,
        47.2
       ],
       [
        108.9,
        47.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 66.5,
      "y1": 126.8,
      "x2": 257.5,
      "y2": 47.2,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 45.2,
      "y1": 126.8,
      "x2": 278.8,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 215.1,
      "y1": 126.8,
      "x2": 108.9,
      "y2": 47.2,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "circle",
      "cx": 162.0,
      "cy": 87.0,
      "r": 3.5,
      "color": "#9333EA",
      "fill": "#9333EA",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 66.5,
      "cy": 126.8,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "circle",
      "cx": 257.5,
      "cy": 47.2,
      "r": 3.5,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 37.2,
      "y": 137.8,
      "text": "O",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 219.1,
      "y": 138.8,
      "text": "A",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 286.8,
      "y": 44.2,
      "text": "B",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 102.9,
      "y": 43.2,
      "text": "C",
      "size": 10,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 66.5,
      "y": 138.8,
      "text": "P",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 265.5,
      "y": 44.2,
      "text": "Q",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 171.0,
      "y": 99.0,
      "text": "M",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×中点を2でわらない"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 座標の平均"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_20": {
  "caption": "63cm²",
  "slides": [
   {
    "note": "平行線でできた台形の面積を、相似を使って求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "DE∥BC、AD：DB＝2：3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "△ABC＝75cm²・台形DBCE？"
     }
    ]
   },
   {
    "note": "DE∥BCなので、同位角が等しく、△ADEと△ABCは2つの角が等しい相似な三角形になる。相似な図形では、対応する辺の比（相似比）がm：nなら、面積の比はm²：n²になる（長さが2倍なら面積は4倍）。台形の面積は、△ABCから、小さい△ADEを引いて求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "△ADE∽△ABC"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "面積比＝相似比の2回かけ"
     }
    ]
   },
   {
    "note": "相似比を求める。AD：DB＝2：3なので、AB＝2＋3＝5にあたる。△ADEと△ABCの相似比はAD：AB＝2：5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AD：AB＝2：5"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "（DBではなくABとくらべる）"
     }
    ]
   },
   {
    "note": "面積比は 2²：5²＝4：25。△ABC＝75cm²が25にあたるので、△ADE＝75×4/25＝12cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        120.0,
        82.4
       ],
       [
        200.0,
        82.4
       ]
      ],
      "color": "#E11D48",
      "fill": "none"
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "面積比 4：25"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△ADE＝75×4/25＝12"
     }
    ]
   },
   {
    "note": "台形DBCE＝△ABC−△ADE＝75−12＝63cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "75−12"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝63cm²"
     }
    ]
   },
   {
    "note": "63cm²",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　63cm²"
     }
    ]
   },
   {
    "note": "面積比で確かめる。台形DBCEは 25−4＝21にあたり、75×21/25＝63cm²。△ADE：台形＝4：21で、12：63＝4：21と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "台形は 25−4＝21"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "75×21/25＝63"
     }
    ]
   },
   {
    "note": "AD：DB＝2：3を相似比としてしまう。相似比は、小さい三角形ADEと大きい三角形ABCを比べるので、AD：AB＝2：5。また、面積比を相似比のまま2：5とするミスも多い。面積は相似比を2回かける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        40
       ],
       [
        60,
        146
       ],
       [
        260,
        146
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120.0,
      "y1": 82.4,
      "x2": 200.0,
      "y2": 82.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 36,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 150,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 150,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.0,
      "y": 84.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 209.0,
      "y": 84.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×相似比2：3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 2：5（全体で比べる）"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_21": {
  "caption": "4cm",
  "slides": [
   {
    "note": "3辺の長さが決まった三角形の、内接円の半径を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "AB＝13、BC＝14、CA＝15"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "内接円の半径＝？"
     }
    ]
   },
   {
    "note": "内接円は3つの辺すべてに接する円である。中心Iから3辺にひいた垂線は、どれも半径rに等しい。そこで、△ABCを、Iを頂点とする3つの三角形（底辺がそれぞれBC、CA、AB、高さがどれもr）に分けると、面積の和＝(1/2)×r×(14＋15＋13)となる。三角形の面積がわかれば、rが求まる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "中心から3辺への距離は r"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "3つの三角形に分ける"
     }
    ]
   },
   {
    "note": "高さを求める。AからBCに垂線AHをひき、BH＝xとすると、HC＝14−x。AH²は2通りに表せて、13²−x²＝15²−(14−x)²。169−x²＝225−196＋28x−x²、169＝29＋28x、x＝5。AH²＝169−25＝144、AH＝12。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "BH＝x、HC＝14−x"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AH²＝13²−5²＝144　AH＝12"
     }
    ]
   },
   {
    "note": "△ABCの面積＝(1/2)×BC×AH＝(1/2)×14×12＝84cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 138.0,
      "y1": 37.2,
      "x2": 138.0,
      "y2": 138.0,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 144.7,
      "y": 49.0,
      "text": "h",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(1/2)×14×12"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝84cm²"
     }
    ]
   },
   {
    "note": "3つの三角形に分けて面積を式にする。△IBC＋△ICA＋△IAB＝(1/2)×r×14＋(1/2)×r×15＋(1/2)×r×13＝(1/2)×r×42＝21r。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(1/2)r×(14＋15＋13)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝21r"
     }
    ]
   },
   {
    "note": "21r＝84 より r＝4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順4",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "21r＝84"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "r＝4cm"
     }
    ]
   },
   {
    "note": "4cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 146.4,
      "y1": 104.4,
      "x2": 146.4,
      "y2": 138.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　4cm"
     }
    ]
   },
   {
    "note": "Iの座標を図で見ると、B(0,0)、C(14,0)、A(5,12)のとき I(6,4)。Iから辺BCまでの距離は4で、半径と一致する。辺AB（直線 12x−5y＝0）までの距離は |72−20|÷13＝4、辺CAまでの距離も4で、3辺すべてから4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "I(6,4)から辺BCまで 4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "辺AB・辺CAまでも 4"
     }
    ]
   },
   {
    "note": "面積84を周の長さ42でわって r＝2としてしまう。三角形が3つにわかれる式は (1/2)×r×42＝21r なので、r＝84÷21＝4。1/2をかけ忘れない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        96.0,
        138.0
       ],
       [
        213.6,
        138.0
       ],
       [
        138.0,
        37.2
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        180.0,
        104.4
       ],
       [
        179.9,
        101.5
       ],
       [
        179.5,
        98.6
       ],
       [
        178.9,
        95.7
       ],
       [
        178.0,
        92.9
       ],
       [
        176.9,
        90.2
       ],
       [
        175.5,
        87.6
       ],
       [
        173.9,
        85.1
       ],
       [
        172.1,
        82.8
       ],
       [
        170.2,
        80.6
       ],
       [
        168.0,
        78.7
       ],
       [
        165.7,
        76.9
       ],
       [
        163.2,
        75.3
       ],
       [
        160.6,
        73.9
       ],
       [
        157.9,
        72.8
       ],
       [
        155.1,
        71.9
       ],
       [
        152.2,
        71.3
       ],
       [
        149.3,
        70.9
       ],
       [
        146.4,
        70.8
       ],
       [
        143.5,
        70.9
       ],
       [
        140.6,
        71.3
       ],
       [
        137.7,
        71.9
       ],
       [
        134.9,
        72.8
       ],
       [
        132.2,
        73.9
       ],
       [
        129.6,
        75.3
       ],
       [
        127.1,
        76.9
       ],
       [
        124.8,
        78.7
       ],
       [
        122.6,
        80.6
       ],
       [
        120.7,
        82.8
       ],
       [
        118.9,
        85.1
       ],
       [
        117.3,
        87.6
       ],
       [
        115.9,
        90.2
       ],
       [
        114.8,
        92.9
       ],
       [
        113.9,
        95.7
       ],
       [
        113.3,
        98.6
       ],
       [
        112.9,
        101.5
       ],
       [
        112.8,
        104.4
       ],
       [
        112.9,
        107.3
       ],
       [
        113.3,
        110.2
       ],
       [
        113.9,
        113.1
       ],
       [
        114.8,
        115.9
       ],
       [
        115.9,
        118.6
       ],
       [
        117.3,
        121.2
       ],
       [
        118.9,
        123.7
       ],
       [
        120.7,
        126.0
       ],
       [
        122.6,
        128.2
       ],
       [
        124.8,
        130.1
       ],
       [
        127.1,
        131.9
       ],
       [
        129.6,
        133.5
       ],
       [
        132.2,
        134.9
       ],
       [
        134.9,
        136.0
       ],
       [
        137.7,
        136.9
       ],
       [
        140.6,
        137.5
       ],
       [
        143.5,
        137.9
       ],
       [
        146.4,
        138.0
       ],
       [
        149.3,
        137.9
       ],
       [
        152.2,
        137.5
       ],
       [
        155.1,
        136.9
       ],
       [
        157.9,
        136.0
       ],
       [
        160.6,
        134.9
       ],
       [
        163.2,
        133.5
       ],
       [
        165.7,
        131.9
       ],
       [
        168.0,
        130.1
       ],
       [
        170.2,
        128.2
       ],
       [
        172.1,
        126.0
       ],
       [
        173.9,
        123.7
       ],
       [
        175.5,
        121.2
       ],
       [
        176.9,
        118.6
       ],
       [
        178.0,
        115.9
       ],
       [
        178.9,
        113.1
       ],
       [
        179.5,
        110.2
       ],
       [
        179.9,
        107.3
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "label",
      "x": 138.0,
      "y": 32.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 88.0,
      "y": 142.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 221.6,
      "y": 142.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 108.5,
      "y": 87.6,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184.0,
      "y": 80.2,
      "text": "15",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.8,
      "y": 150.0,
      "text": "14",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×84÷42＝2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 84÷21＝4"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_22": {
  "caption": "122°",
  "slides": [
   {
    "note": "円と直径にできた角度のつながりから、∠AEBを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "ACは直径　∠CAB＝36°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "∠ACD＝22° → ∠AEB＝？"
     }
    ]
   },
   {
    "note": "円周角の定理により、同じ弧に対する円周角は、どこにあっても等しい。だから∠ACDがわかれば、同じ弧ADに対する円周角∠ABDも同じ大きさとわかる。すると△ABEの角のうち、∠BAE（＝∠CAB）と∠ABE（＝∠ABD）がわかるので、三角形の内角の和から∠AEBが出る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "同じ弧ADに対する円周角"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "→ ∠ABD＝∠ACD"
     }
    ]
   },
   {
    "note": "弧ADに対する円周角を見る。∠ACDと∠ABDは、どちらも弧ADに対する円周角（BとCは弧ADの同じ側にある）なので、∠ABD＝∠ACD＝22°。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "∠ABD＝∠ACD"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝22°"
     }
    ]
   },
   {
    "note": "△ABEの2つの内角を整理する。∠BAE＝∠CAB＝36°（EはAC上の点）。∠ABE＝∠ABD＝22°。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 144.6,
      "y2": 92.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "∠BAE＝36°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "∠ABE＝22°"
     }
    ]
   },
   {
    "note": "△ABEの内角の和は180°なので、∠AEB＝180°−36°−22°＝122°。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "180°−36°−22°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝122°"
     }
    ]
   },
   {
    "note": "122°",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　122°"
     }
    ]
   },
   {
    "note": "別の見方で確かめる。ACは直径なので ∠ABC＝90°、∠ACB＝90°−36°＝54°。すると弧ABに対する円周角∠ADB＝54°。同様に∠ADC＝90°。△AEDで ∠EAD＝90°−22°＝68°、∠ADE＝∠ADB＝54°、∠AED＝180°−68°−54°＝58°。∠AEB＝180°−58°＝122°で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "∠AED＝180−68−54＝58°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "∠AEB＝180°−58°＝122°"
     }
    ]
   },
   {
    "note": "∠ABDを、直径にもとづく90°としてしまう。90°になるのは、直径ACを見こむ∠ABCや∠ADC。∠ABDは、弧ADを見こむ角なので22°。何の弧を見こんでいる角かを確認する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        214.0,
        92.0
       ],
       [
        213.8,
        87.3
       ],
       [
        213.2,
        82.6
       ],
       [
        212.2,
        78.0
       ],
       [
        210.7,
        73.5
       ],
       [
        208.9,
        69.2
       ],
       [
        206.8,
        65.0
       ],
       [
        204.2,
        61.0
       ],
       [
        201.4,
        57.3
       ],
       [
        198.2,
        53.8
       ],
       [
        194.7,
        50.6
       ],
       [
        191.0,
        47.8
       ],
       [
        187.0,
        45.2
       ],
       [
        182.8,
        43.1
       ],
       [
        178.5,
        41.3
       ],
       [
        174.0,
        39.8
       ],
       [
        169.4,
        38.8
       ],
       [
        164.7,
        38.2
       ],
       [
        160.0,
        38.0
       ],
       [
        155.3,
        38.2
       ],
       [
        150.6,
        38.8
       ],
       [
        146.0,
        39.8
       ],
       [
        141.5,
        41.3
       ],
       [
        137.2,
        43.1
       ],
       [
        133.0,
        45.2
       ],
       [
        129.0,
        47.8
       ],
       [
        125.3,
        50.6
       ],
       [
        121.8,
        53.8
       ],
       [
        118.6,
        57.3
       ],
       [
        115.8,
        61.0
       ],
       [
        113.2,
        65.0
       ],
       [
        111.1,
        69.2
       ],
       [
        109.3,
        73.5
       ],
       [
        107.8,
        78.0
       ],
       [
        106.8,
        82.6
       ],
       [
        106.2,
        87.3
       ],
       [
        106.0,
        92.0
       ],
       [
        106.2,
        96.7
       ],
       [
        106.8,
        101.4
       ],
       [
        107.8,
        106.0
       ],
       [
        109.3,
        110.5
       ],
       [
        111.1,
        114.8
       ],
       [
        113.2,
        119.0
       ],
       [
        115.8,
        123.0
       ],
       [
        118.6,
        126.7
       ],
       [
        121.8,
        130.2
       ],
       [
        125.3,
        133.4
       ],
       [
        129.0,
        136.2
       ],
       [
        133.0,
        138.8
       ],
       [
        137.2,
        140.9
       ],
       [
        141.5,
        142.7
       ],
       [
        146.0,
        144.2
       ],
       [
        150.6,
        145.2
       ],
       [
        155.3,
        145.8
       ],
       [
        160.0,
        146.0
       ],
       [
        164.7,
        145.8
       ],
       [
        169.4,
        145.2
       ],
       [
        174.0,
        144.2
       ],
       [
        178.5,
        142.7
       ],
       [
        182.8,
        140.9
       ],
       [
        187.0,
        138.8
       ],
       [
        191.0,
        136.2
       ],
       [
        194.7,
        133.4
       ],
       [
        198.2,
        130.2
       ],
       [
        201.4,
        126.7
       ],
       [
        204.2,
        123.0
       ],
       [
        206.8,
        119.0
       ],
       [
        208.9,
        114.8
       ],
       [
        210.7,
        110.5
       ],
       [
        212.2,
        106.0
       ],
       [
        213.2,
        101.4
       ],
       [
        213.8,
        96.7
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 106.0,
      "y1": 92.0,
      "x2": 176.7,
      "y2": 40.6,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 176.7,
      "y1": 40.6,
      "x2": 214.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 214.0,
      "y1": 92.0,
      "x2": 121.2,
      "y2": 129.5,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 121.2,
      "y1": 129.5,
      "x2": 106.0,
      "y2": 92.0,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 97.0,
      "y": 96.0,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 178.7,
      "y": 35.6,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 223.0,
      "y": 96.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 117.2,
      "y": 143.5,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 154.6,
      "y": 87.0,
      "text": "E",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×∠ABD＝90°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 弧ADを見こむので22°"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_23": {
  "caption": "128cm²",
  "slides": [
   {
    "note": "台形の対角線でできる4つの三角形から、台形全体の面積を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "AD＝6、BC＝10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "△APD＝18cm²"
     }
    ]
   },
   {
    "note": "AD∥BCなので、平行線の錯角が等しく、△APDと△CPBは相似になる。相似比はAD：CB＝6：10＝3：5。面積比は 3²：5²＝9：25。さらに、△APDと△CPDは、頂点Dが共通で底辺がAPとPC（比3：5）なので、面積の比も3：5。△ABPは△CDPと等しい面積になる（どちらも△ABDや△ACDから、共通の△APDを引いたものだから）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "上下の三角形は相似"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "左右の面積は等しい"
     }
    ]
   },
   {
    "note": "△CPBの面積。△APD：△CPB＝9：25 で、△APD＝18cm²。9が18なので、1あたり2cm²。△CPB＝25×2＝50cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "9：25＝18：□"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△CPB＝50cm²"
     }
    ]
   },
   {
    "note": "△CPDの面積。△APD：△CPD＝AP：PC＝3：5（高さが同じ）。18：△CPD＝3：5 より、△CPD＝18×5/3＝30cm²。△ABP＝△CPD＝30cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        172.5,
        76.2
       ]
      ],
      "color": "#E11D48",
      "fill": "none"
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△APD：△CPD＝3：5"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△CPD＝△ABP＝30cm²"
     }
    ]
   },
   {
    "note": "4つの三角形を合計する。18＋50＋30＋30＝128cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        130
       ],
       [
        260,
        130
       ],
       [
        172.5,
        76.2
       ]
      ],
      "color": "#16A34A",
      "fill": "none"
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "18＋50＋30＋30"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝128cm²"
     }
    ]
   },
   {
    "note": "128cm²",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　128cm²"
     }
    ]
   },
   {
    "note": "台形の面積の公式でも確かめる。台形の高さをhとすると、△APDと△CPBの高さの比は3：5なので、hのうち5/8が△CPBの高さ。△CPB＝(1/2)×10×(5/8)h＝50より h＝16。台形＝(6＋10)×16÷2＝128cm²で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△CPBの高さ＝(5/8)h"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(6＋10)×16÷2＝128"
     }
    ]
   },
   {
    "note": "△ABPや△CDPの面積を、18や50と同じだとしてしまう。△APD：△CPB＝9：25は、「相似な三角形」の面積比で、相似比3：5を2回かけたもの。左右の三角形は、相似ではなく「面積が等しい」関係で、30と30。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        120,
        44
       ],
       [
        180,
        44
       ],
       [
        260,
        130
       ],
       [
        60,
        130
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 120,
      "y1": 44,
      "x2": 260,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 180,
      "y1": 44,
      "x2": 60,
      "y2": 130,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 184,
      "y": 40,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 134,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 134,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 181.5,
      "y": 72.2,
      "text": "P",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 150,
      "y": 38,
      "text": "6",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 160,
      "y": 143,
      "text": "10",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×△ABP＝50"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ △ABP＝△CDP＝30"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_24": {
  "caption": "76.8πcm³",
  "slides": [
   {
    "note": "直角三角形を斜辺のまわりに回してできる立体の体積を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "AB＝6、AC＝8、∠A＝90°"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "斜辺BCを軸に1回転"
     }
    ]
   },
   {
    "note": "三角形を斜辺BCのまわりに1回転させると、Aは、軸BCからの距離がAHの円をえがく。この円が2つの円すいの共通の底面になり、頂点がBとCの円すいが、底面を合わせてくっついた形になる。体積は、底面積×(BHとHCの合計の高さ)÷3 で求められる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "2つの円すいがつながる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "底面の半径＝AH"
     }
    ]
   },
   {
    "note": "斜辺BCは、三平方の定理より √(6²＋8²)＝10cm。三角形の面積の2通りの表し方 (1/2)×6×8＝(1/2)×10×AH から、24＝5×AH、AH＝4.8cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "BC＝10cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AH＝6×8÷10＝4.8cm"
     }
    ]
   },
   {
    "note": "2つの円すいの体積の和を求める。底面積は π×4.8²＝23.04π。BHとHCの和は斜辺BC＝10cm。体積＝(1/3)×23.04π×BH＋(1/3)×23.04π×HC＝(1/3)×23.04π×(BH＋HC)。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 92,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "底面積 π×4.8²＝23.04π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "高さの合計 BH＋HC＝10"
     }
    ]
   },
   {
    "note": "(1/3)×23.04π×10＝76.8π（cm³）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "23.04π×10÷3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝76.8π cm³"
     }
    ]
   },
   {
    "note": "76.8πcm³",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　76.8πcm³"
     }
    ]
   },
   {
    "note": "BH＝√(6²−4.8²)＝√(36−23.04)＝√12.96＝3.6cm、HC＝√(8²−4.8²)＝√(64−23.04)＝√40.96＝6.4cm。3.6＋6.4＝10cmで斜辺と一致。底面を4.8cmとして、(1/3)π×23.04×3.6＋(1/3)π×23.04×6.4＝27.648π＋49.152π＝76.8π で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "BH＝3.6、HC＝6.4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "27.648π＋49.152π＝76.8π"
     }
    ]
   },
   {
    "note": "底面の半径を、辺ABの6cmや辺ACの8cmにしてしまう。軸（斜辺）に垂直な距離がAHの4.8cm。また、高さを斜辺全体の10cmではなく、円すい1つぶんの BH や HC だけにして、片方の円すいしか数えないミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        39.2
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "poly",
      "pts": [
       [
        60,
        92
       ],
       [
        132.0,
        144.8
       ],
       [
        260,
        92
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60,
      "y1": 92,
      "x2": 260,
      "y2": 92,
      "color": "#6E645C",
      "dashed": true,
      "width": 2
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 39.2,
      "x2": 132.0,
      "y2": 144.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "label",
      "x": 132.0,
      "y": 34.2,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52,
      "y": 96,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 268,
      "y": 96,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 140.0,
      "y": 89,
      "text": "H",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×半径6cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 半径はAH＝4.8cm"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_25": {
  "caption": "4cm",
  "slides": [
   {
    "note": "円柱に球を入れて取り出したときに、下がる水面の高さを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "円柱：半径3cm、高さ6cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "半径3cmの球を取り出す"
     }
    ]
   },
   {
    "note": "球をぴったり入れて水をあふれさせたとき、容器の中の水の体積は「円柱の体積−球の体積」になる。球を取り出すと、水面は、球が占めていた体積の分だけ下がる。減った水の体積は球の体積に等しく、底面積が円柱と同じ円柱を、下がった高さのぶん切り取ったものと同じ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "減った水＝球の体積"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "水の減り方は円柱のかたち"
     }
    ]
   },
   {
    "note": "球の体積は (4/3)π×3³＝(4/3)π×27＝36π（cm³）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "球 (4/3)π×3³"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝36πcm³"
     }
    ]
   },
   {
    "note": "円柱の底面積は π×3²＝9π（cm²）。水面が h cm下がるとすると、減った水の体積は 9π×h。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "底面積 π×3²＝9π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "減った水＝9π×h"
     }
    ]
   },
   {
    "note": "球の体積に等しいので 9πh＝36π、h＝4。水面は4cm下がる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "9πh＝36π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "h＝4cm"
     }
    ]
   },
   {
    "note": "4cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　4cm"
     }
    ]
   },
   {
    "note": "円柱の体積は 9π×6＝54π。球を入れてあふれたあと、中の水は 54π−36π＝18π。球を取り出したあとの水の高さは 18π÷9π＝2cm。もとの6cmから 6−2＝4cm下がっていて、答えと一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "水は 54π−36π＝18π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "高さ 18π÷9π＝2cm（6−4）"
     }
    ]
   },
   {
    "note": "球の体積を、(4/3)π×3²＝12π としてしまう。球の体積はr³を使う。また、「球の体積÷球の表面積」などと考えて、ちがう量をわってしまうミスもある。水面の下がり方は、体積÷底面積。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        109,
        40
       ],
       [
        211,
        40
       ],
       [
        211,
        142
       ],
       [
        109,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 91,
      "r": 51,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 10
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "直径6cm（球と同じ）",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 94,
      "text": "高さ",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 86,
      "y": 106,
      "text": "6cm",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×(4/3)π×3²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ (4/3)π×3³＝36π"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_26": {
  "caption": "10/3cm",
  "slides": [
   {
    "note": "折り返した長方形の、折り目の位置から、DEの長さを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "AB＝6、AD＝10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "D→F、DEの長さ？"
     }
    ]
   },
   {
    "note": "折り返すと、重なる辺の長さや角はもとと同じになる（折り返しは合同）。だから AF＝AD＝10、EF＝ED。BF、FCが三平方の定理で求まれば、EF＝ED＝xとして、直角三角形EFCから方程式がつくれる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "折り返し＝合同"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "AF＝AD、EF＝ED"
     }
    ]
   },
   {
    "note": "△ABFは∠B＝90°で、AF＝10、AB＝6。BF＝√(10²−6²)＝√64＝8cm。FC＝BC−BF＝10−8＝2cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "BF＝√(100−36)＝8"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "FC＝10−8＝2"
     }
    ]
   },
   {
    "note": "DE＝xとおく。EF＝DE＝x、EC＝CD−DE＝6−x。直角三角形EFCで三平方の定理：EF²＝EC²＋FC²。x²＝(6−x)²＋2²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "EF＝x、EC＝6−x"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x²＝(6−x)²＋2²"
     }
    ]
   },
   {
    "note": "展開して整理する。x²＝36−12x＋x²＋4。x²が消えて 12x＝40、x＝10/3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "12x＝40"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "x＝10/3"
     }
    ]
   },
   {
    "note": "10/3cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　10/3cm"
     }
    ]
   },
   {
    "note": "DE＝10/3のとき、EC＝6−10/3＝8/3。EC²＋FC²＝64/9＋4＝64/9＋36/9＝100/9。EF²＝(10/3)²＝100/9で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "EC＝8/3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "64/9＋4＝100/9＝EF²"
     }
    ]
   },
   {
    "note": "EC＝xとしてしまう。DEとEFが等しいので x＝DE＝EF、ECは6−x。また、AF＝ABや、AF＝BFなどと混同してBFを求めないミスもある。AFは、折り返した「AD」と等しい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        60.0,
        33.6
       ],
       [
        60.0,
        134.0
       ],
       [
        231.0,
        134.0
       ],
       [
        231.0,
        33.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 231.0,
      "y2": 89.4,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.0,
      "y1": 89.4,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.0,
      "y1": 33.6,
      "x2": 196.8,
      "y2": 134.0,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 31.6,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 52.0,
      "y": 138.0,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 138.0,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 239.0,
      "y": 31.6,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 196.8,
      "y": 146.0,
      "text": "F",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.0,
      "y": 92.4,
      "text": "E",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×EC＝x"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ EC＝6−x"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_27": {
  "caption": "234πcm³",
  "slides": [
   {
    "note": "底面に平行に切ってできる円すい台の体積を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "もとの円すい：高さ5、250π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "頂点から高さ2で切る"
     }
    ]
   },
   {
    "note": "底面に平行に切ると、頂点をふくむ小さい円すいは、もとの円すいを同じ形のまま縮めた相似な円すいになる。高さの比が相似比で、2：5。相似な立体では、体積の比は相似比を3回かけた比（縦・横・高さの3方向が全部縮むため）になる。円すい台は、もとの円すいから小さい円すいを引いた残りである。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "小さい円すいは相似"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "体積比＝相似比を3回かける"
     }
    ]
   },
   {
    "note": "相似比は高さの比で 2：5。体積比は 2³：5³＝8：125。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "相似比 2：5"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "体積比 8：125"
     }
    ]
   },
   {
    "note": "もとの円すい250πが125にあたるので、1あたり 250π÷125＝2π。小さい円すいは 8×2π＝16π（cm³）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "1あたり 250π÷125＝2π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "小さい円すい 16π"
     }
    ]
   },
   {
    "note": "円すい台＝もとの円すい−小さい円すい＝250π−16π＝234π（cm³）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "250π−16π"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝234πcm³"
     }
    ]
   },
   {
    "note": "234πcm³",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　234πcm³"
     }
    ]
   },
   {
    "note": "体積比で確かめる。円すい台は 125−8＝117にあたるので 117×2π＝234π。小さい円すい：円すい台＝8：117で、16π：234π＝8：117と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "円すい台は 125−8＝117"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "117×2π＝234π"
     }
    ]
   },
   {
    "note": "体積比を相似比と同じ2：5としてしまう。体積は3方向に縮むので、2³：5³。また、円すい台の体積を 250π×(3/5)³ のように、切り取った上の部分と取り違えてしまうミスもある。引き算を忘れない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        160,
        38
       ],
       [
        90,
        142
       ],
       [
        230,
        142
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 132.0,
      "y1": 79.6,
      "x2": 188.0,
      "y2": 79.6,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 160,
      "y": 35,
      "text": "頂点",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 62.8,
      "text": "2",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 114.8,
      "text": "3",
      "size": 11,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 250,
      "y": 142,
      "text": "底面",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×体積比 2：5"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 8：125"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_28": {
  "caption": "13cm",
  "slides": [
   {
    "note": "直方体の表面を通る最短の道の長さを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "2×3×12 の直方体"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "AからGまで表面を通る"
     }
    ]
   },
   {
    "note": "表面にそって進む道は、2つの面を1つの平面にひらけば、ふつうの平面の上の道になる。平面の上で2点を結ぶ最短の道は直線なので、ひらいた図で、AとGを直線で結んだ長さが答えの候補になる。ひらき方は何通りかあるので、すべて計算して、いちばん短いものを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "展開図で直線になる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "ひらき方を全部調べる"
     }
    ]
   },
   {
    "note": "長さ12cmの辺をはさむ2つの面（2cm×12cmと3cm×12cm）をひらく。横が 2＋3＝5cm、たてが12cmの長方形になり、その対角線がAG。三平方の定理で √(5²＋12²)＝√169＝13cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "横 2＋3＝5、たて 12"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "√(25＋144)＝13"
     }
    ]
   },
   {
    "note": "ほかのひらき方も調べる。横が 2＋12＝14cm、たてが3cmなら √(14²＋3²)＝√205。横が 3＋12＝15cm、たてが2cmなら √(15²＋2²)＝√229。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "14と3：√205≒14.3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "15と2：√229≒15.1"
     }
    ]
   },
   {
    "note": "13、√205（≒14.3）、√229（≒15.1）のうち、最小は13。よって最短は13cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "13＜14.3＜15.1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "最短は 13cm"
     }
    ]
   },
   {
    "note": "13cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　13cm"
     }
    ]
   },
   {
    "note": "13²＝169、205、229を比べて169が最小。13は整数なので、5・12・13の直角三角形になっている。参考として、空間の対角線は √(2²＋3²＋12²)＝√157≒12.5cm。糸は表面にそうので、これより長い13cmで、矛盾しない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "√157≒12.5＜13"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "表面を通るので13は自然"
     }
    ]
   },
   {
    "note": "空間の対角線 √157 を答えにしてしまう。糸は表面にそってはるので、立体の中を直線で通る対角線より長くなる。また、ひらき方を1通りしか調べず、√205や√229を答えにするミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        125,
        36
       ],
       [
        170,
        36
       ],
       [
        170,
        144
       ],
       [
        125,
        144
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 143,
      "y1": 36,
      "x2": 143,
      "y2": 144,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "line",
      "x1": 125,
      "y1": 36,
      "x2": 170,
      "y2": 144,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 116,
      "y": 40,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 179,
      "y": 147,
      "text": "G",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 134,
      "y": 32,
      "text": "2",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 156.5,
      "y": 32,
      "text": "3",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 180,
      "y": 90,
      "text": "12",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 197.5,
      "y": 90,
      "text": "13",
      "size": 11,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×√157（立体の中の線）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 展開図で全部調べて13"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_29": {
  "caption": "14cm",
  "slides": [
   {
    "note": "円の中の平行な2本の弦の距離を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "半径10、弦12と16"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "中心をはさんで反対側"
     }
    ]
   },
   {
    "note": "円の中心から弦にひいた垂線は、その弦をちょうど半分に分ける。すると、「半径」を斜辺、「弦の半分」と「中心からの距離」を直角をはさむ2辺とする直角三角形ができ、三平方の定理が使える。2本の弦は中心をはさんで反対側にあるので、中心からの2つの距離を足せば、弦どうしの距離になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "中心から弦へ垂線"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "半径・弦の半分・距離で直角三角形"
     }
    ]
   },
   {
    "note": "弦ABについて。弦の半分は 12÷2＝6cm、半径は10cm。中心Oから弦ABまでの距離は √(10²−6²)＝√64＝8cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "弦の半分6、半径10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "距離 √(100−36)＝8"
     }
    ]
   },
   {
    "note": "弦CDについて。弦の半分は 16÷2＝8cm、半径は10cm。中心Oから弦CDまでの距離は √(10²−8²)＝√36＝6cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 92,
      "x2": 160,
      "y2": 136.8,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "弦の半分8、半径10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "距離 √(100−64)＝6"
     }
    ]
   },
   {
    "note": "中心をはさんで反対側にあるので、距離は 8＋6＝14cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 160,
      "y1": 92,
      "x2": 160,
      "y2": 58.4,
      "color": "#E11D48",
      "dashed": true,
      "width": 2
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "8＋6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝14cm"
     }
    ]
   },
   {
    "note": "14cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　14cm"
     }
    ]
   },
   {
    "note": "弦ABを中心から8cmの位置、弦CDを6cmの位置に置くと、どちらの弦の両はしも、中心から距離 √(8²＋6²)＝10 の位置（円周上）にある。半径10と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(A,B)：√(6²＋8²)＝10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(C,D)：√(8²＋6²)＝10"
     }
    ]
   },
   {
    "note": "2本の弦が中心の同じ側にあるとして 8−6＝2cm と答えてしまう。問題文に「中心をはさんで反対側」とあるので足し算。また、弦の長さ12をそのまま三平方の定理に使い、半分にしないミスも多い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        216.0,
        92.0
       ],
       [
        215.8,
        87.1
       ],
       [
        215.1,
        82.3
       ],
       [
        214.1,
        77.5
       ],
       [
        212.6,
        72.8
       ],
       [
        210.8,
        68.3
       ],
       [
        208.5,
        64.0
       ],
       [
        205.9,
        59.9
       ],
       [
        202.9,
        56.0
       ],
       [
        199.6,
        52.4
       ],
       [
        196.0,
        49.1
       ],
       [
        192.1,
        46.1
       ],
       [
        188.0,
        43.5
       ],
       [
        183.7,
        41.2
       ],
       [
        179.2,
        39.4
       ],
       [
        174.5,
        37.9
       ],
       [
        169.7,
        36.9
       ],
       [
        164.9,
        36.2
       ],
       [
        160.0,
        36.0
       ],
       [
        155.1,
        36.2
       ],
       [
        150.3,
        36.9
       ],
       [
        145.5,
        37.9
       ],
       [
        140.8,
        39.4
       ],
       [
        136.3,
        41.2
       ],
       [
        132.0,
        43.5
       ],
       [
        127.9,
        46.1
       ],
       [
        124.0,
        49.1
       ],
       [
        120.4,
        52.4
       ],
       [
        117.1,
        56.0
       ],
       [
        114.1,
        59.9
       ],
       [
        111.5,
        64.0
       ],
       [
        109.2,
        68.3
       ],
       [
        107.4,
        72.8
       ],
       [
        105.9,
        77.5
       ],
       [
        104.9,
        82.3
       ],
       [
        104.2,
        87.1
       ],
       [
        104.0,
        92.0
       ],
       [
        104.2,
        96.9
       ],
       [
        104.9,
        101.7
       ],
       [
        105.9,
        106.5
       ],
       [
        107.4,
        111.2
       ],
       [
        109.2,
        115.7
       ],
       [
        111.5,
        120.0
       ],
       [
        114.1,
        124.1
       ],
       [
        117.1,
        128.0
       ],
       [
        120.4,
        131.6
       ],
       [
        124.0,
        134.9
       ],
       [
        127.9,
        137.9
       ],
       [
        132.0,
        140.5
       ],
       [
        136.3,
        142.8
       ],
       [
        140.8,
        144.6
       ],
       [
        145.5,
        146.1
       ],
       [
        150.3,
        147.1
       ],
       [
        155.1,
        147.8
       ],
       [
        160.0,
        148.0
       ],
       [
        164.9,
        147.8
       ],
       [
        169.7,
        147.1
       ],
       [
        174.5,
        146.1
       ],
       [
        179.2,
        144.6
       ],
       [
        183.7,
        142.8
       ],
       [
        188.0,
        140.5
       ],
       [
        192.1,
        137.9
       ],
       [
        196.0,
        134.9
       ],
       [
        199.6,
        131.6
       ],
       [
        202.9,
        128.0
       ],
       [
        205.9,
        124.1
       ],
       [
        208.5,
        120.0
       ],
       [
        210.8,
        115.7
       ],
       [
        212.6,
        111.2
       ],
       [
        214.1,
        106.5
       ],
       [
        215.1,
        101.7
       ],
       [
        215.8,
        96.9
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "circle",
      "cx": 160,
      "cy": 92,
      "r": 2,
      "color": "#E11D48",
      "fill": "#E11D48",
      "size": 10
     },
     {
      "t": "label",
      "x": 169,
      "y": 88,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 126.4,
      "y1": 136.8,
      "x2": 193.6,
      "y2": 136.8,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 58.4,
      "x2": 204.8,
      "y2": 58.4,
      "color": "#16A34A",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 120,
      "y": 139.8,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 200,
      "y": 139.8,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 109,
      "y": 55.4,
      "text": "C",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 211,
      "y": 55.4,
      "text": "D",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×8−6＝2"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 反対側なので 8＋6"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_30": {
  "caption": "120/13cm",
  "slides": [
   {
    "note": "円の外の点から接線をひいてできる、弦ABの長さを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "半径5cm、OP＝13cm"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "接点をA、B・ABの長さ？"
     }
    ]
   },
   {
    "note": "円の接線は、接点を通る半径に垂直である。だから△OAPは∠OAP＝90°の直角三角形になり、三平方の定理が使える。また、対称な図形なので、OPとABは垂直に交わる。四角形PAOBの対角線OPとABが垂直なら、面積は「対角線×対角線÷2」で求められる。この面積を、もう一つの方法でも出して等しいとおけば、ABがわかる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "接線⊥半径"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "対角線が垂直な四角形の面積"
     }
    ]
   },
   {
    "note": "△OAPで、OA＝5、OP＝13、∠OAP＝90°。PA＝√(13²−5²)＝√144＝12cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "PA＝√(169−25)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "＝12cm"
     }
    ]
   },
   {
    "note": "四角形PAOBの面積を、△OAPと△OBPの和で求める。△OAP＝(1/2)×OA×PA＝(1/2)×5×12＝30。△OBPも同じなので、四角形PAOB＝30×2＝60cm²。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "△OAP＝(1/2)×5×12＝30"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "四角形＝30×2＝60"
     }
    ]
   },
   {
    "note": "対角線OP（13cm）とAB（x）が垂直なので、面積＝(1/2)×13×x。これが60に等しいので (13/2)x＝60、x＝120/13cm。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(1/2)×13×AB＝60"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "AB＝120/13cm"
     }
    ]
   },
   {
    "note": "120/13cm",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　120/13cm"
     }
    ]
   },
   {
    "note": "120/13≒9.23cm。ABを弦の長さとして考えると、半径5の円で直径は10cmなので、弦は直径10cmより短くなければならない。9.23＜10で矛盾しない。また、AH＝AB÷2＝60/13。△OAHで OH＝√(25−3600/169)＝√(625/169)＝25/13、OH×OP＝(25/13)×13＝25＝OA²となり、接線の性質と合っている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "9.23＜10（直径）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "OH＝25/13、OH×OP＝25"
     }
    ]
   },
   {
    "note": "PAを5cmなどとしてしまう。接線は半径に垂直なので、PA＝√(13²−5²)＝12。また、ABの長さを60÷13とせず、(1/2)を忘れて 60÷13 のまま、あるいは 2倍して 120÷13 ではなく 60÷13 と答えるミスがある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "poly",
      "pts": [
       [
        147.5,
        88.0
       ],
       [
        147.3,
        83.4
       ],
       [
        146.7,
        78.9
       ],
       [
        145.7,
        74.4
       ],
       [
        144.3,
        70.0
       ],
       [
        142.6,
        65.8
       ],
       [
        140.5,
        61.8
       ],
       [
        138.0,
        57.9
       ],
       [
        135.2,
        54.3
       ],
       [
        132.1,
        50.9
       ],
       [
        128.7,
        47.8
       ],
       [
        125.1,
        45.0
       ],
       [
        121.2,
        42.5
       ],
       [
        117.2,
        40.4
       ],
       [
        113.0,
        38.7
       ],
       [
        108.6,
        37.3
       ],
       [
        104.1,
        36.3
       ],
       [
        99.6,
        35.7
       ],
       [
        95.0,
        35.5
       ],
       [
        90.4,
        35.7
       ],
       [
        85.9,
        36.3
       ],
       [
        81.4,
        37.3
       ],
       [
        77.0,
        38.7
       ],
       [
        72.8,
        40.4
       ],
       [
        68.8,
        42.5
       ],
       [
        64.9,
        45.0
       ],
       [
        61.3,
        47.8
       ],
       [
        57.9,
        50.9
       ],
       [
        54.8,
        54.3
       ],
       [
        52.0,
        57.9
       ],
       [
        49.5,
        61.7
       ],
       [
        47.4,
        65.8
       ],
       [
        45.7,
        70.0
       ],
       [
        44.3,
        74.4
       ],
       [
        43.3,
        78.9
       ],
       [
        42.7,
        83.4
       ],
       [
        42.5,
        88.0
       ],
       [
        42.7,
        92.6
       ],
       [
        43.3,
        97.1
       ],
       [
        44.3,
        101.6
       ],
       [
        45.7,
        106.0
       ],
       [
        47.4,
        110.2
       ],
       [
        49.5,
        114.2
       ],
       [
        52.0,
        118.1
       ],
       [
        54.8,
        121.7
       ],
       [
        57.9,
        125.1
       ],
       [
        61.3,
        128.2
       ],
       [
        64.9,
        131.0
       ],
       [
        68.7,
        133.5
       ],
       [
        72.8,
        135.6
       ],
       [
        77.0,
        137.3
       ],
       [
        81.4,
        138.7
       ],
       [
        85.9,
        139.7
       ],
       [
        90.4,
        140.3
       ],
       [
        95.0,
        140.5
       ],
       [
        99.6,
        140.3
       ],
       [
        104.1,
        139.7
       ],
       [
        108.6,
        138.7
       ],
       [
        113.0,
        137.3
       ],
       [
        117.2,
        135.6
       ],
       [
        121.2,
        133.5
       ],
       [
        125.1,
        131.0
       ],
       [
        128.7,
        128.2
       ],
       [
        132.1,
        125.1
       ],
       [
        135.2,
        121.7
       ],
       [
        138.0,
        118.1
       ],
       [
        140.5,
        114.2
       ],
       [
        142.6,
        110.2
       ],
       [
        144.3,
        106.0
       ],
       [
        145.7,
        101.6
       ],
       [
        146.7,
        97.1
       ],
       [
        147.3,
        92.6
       ]
      ],
      "color": "#0284C7",
      "fill": "none"
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 231.5,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#16A34A",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 39.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 115.2,
      "y1": 39.5,
      "x2": 115.2,
      "y2": 136.5,
      "color": "#E11D48",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 95.0,
      "y1": 88.0,
      "x2": 231.5,
      "y2": 88.0,
      "color": "#6E645C",
      "dashed": true,
      "width": 1
     },
     {
      "t": "label",
      "x": 86.0,
      "y": 92.0,
      "text": "O",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 240.5,
      "y": 92.0,
      "text": "P",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 33.5,
      "text": "A",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 111.2,
      "y": 150.5,
      "text": "B",
      "size": 11,
      "color": "#2B2420",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 163.2,
      "y": 100.0,
      "text": "13",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×AB＝60/13"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ (1/2)×13×AB＝60"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_31": {
  "caption": "3/7",
  "slides": [
   {
    "note": "袋から2個取り出して、同じ色になる確率を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "赤4個・白3個"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "同時に2個→同じ色"
     }
    ]
   },
   {
    "note": "確率は「あてはまる場合の数÷起こりうる全部の場合の数」。どの取り出し方も同様に確からしいと言えるのは、玉を1個ずつ区別したときである。赤玉が4個あっても、取り出し方の数は「赤」の1通りではなく、どの赤玉を取るかで変わる。だから玉に名前をつけて数える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "確率＝あてはまる÷全部"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "玉は1個ずつ区別する"
     }
    ]
   },
   {
    "note": "全部の取り出し方を数える。7個から2個を選ぶ。1個目の選び方が7通り、2個目が6通りで 7×6＝42通りだが、同時なので順番は関係なく、同じ組が2回ずつ数えられている。42÷2＝21通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "7×6＝42（順番つき）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "同時なので 42÷2＝21通り"
     }
    ]
   },
   {
    "note": "同じ色になる取り出し方。赤2個：4個から2個で 4×3÷2＝6通り。白2個：3個から2個で 3×2÷2＝3通り。合わせて 6＋3＝9通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "赤赤 4×3÷2＝6通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "白白 3×2÷2＝3通り"
     }
    ]
   },
   {
    "note": "確率は 9÷21＝3/7。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "9/21（÷3）"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝3/7"
     }
    ]
   },
   {
    "note": "3/7",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　3/7"
     }
    ]
   },
   {
    "note": "赤1個と白1個の場合も数えて確かめる。赤1個白1個は 4×3＝12通り。同じ色9通りと合わせて 9＋12＝21通りで、全部の数と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "赤白 4×3＝12通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "9＋12＝21通りで一致"
     }
    ]
   },
   {
    "note": "玉を色だけで区別して「赤赤、白白、赤白の3通り」とし、同じ色は2/3などとしてしまう。この3つは同様に確からしくない。玉1個1個を区別して数える。また、順番を区別して全部の数を42通りとするミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×3通りで 2/3"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 玉を区別して 9/21"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_32": {
  "caption": "7/18",
  "slides": [
   {
    "note": "方程式の解が整数になるような目の組の数から、確率を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "大小2つのさいころ a、b"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "ax＝b の解が整数"
     }
    ]
   },
   {
    "note": "方程式 ax＝b の両辺をaでわると x＝b/a。解が整数になるのは、b/aが整数、つまり bがaの倍数のとき。さいころは大小を区別するので、(a、b)と(b、a)は別の組。全部の組は 6×6＝36通りで、どれも同様に確からしい。aの値ごとに、bの倍数になる場合を調べるのが確実である。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "x＝b/a"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "bがaの倍数なら整数"
     }
    ]
   },
   {
    "note": "aごとに、bの値を調べる。a＝1：bは1〜6のすべてで6通り。a＝2：bは2、4、6で3通り。a＝3：bは3、6で2通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝1：6通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝2：3通り、a＝3：2通り"
     }
    ]
   },
   {
    "note": "a＝4：bは4の1通り。a＝5：bは5の1通り。a＝6：bは6の1通り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝4：1通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝5、a＝6：各1通り"
     }
    ]
   },
   {
    "note": "合計 6＋3＋2＋1＋1＋1＝14通り。確率は 14/36＝7/18。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "6＋3＋2＋1＋1＋1＝14"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "14/36＝7/18"
     }
    ]
   },
   {
    "note": "7/18",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　7/18"
     }
    ]
   },
   {
    "note": "表にして確かめる。bが1のとき、aは1だけ(1通り)。bが2のとき、aは1、2(2通り)。bが3：1、3(2通り)。bが4：1、2、4(3通り)。bが5：1、5(2通り)。bが6：1、2、3、6(4通り)。合計 1＋2＋2＋3＋2＋4＝14通りで一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "bごとに数えなおすと"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "1＋2＋2＋3＋2＋4＝14"
     }
    ]
   },
   {
    "note": "a＝bの6通りだけを数えて 6/36 としてしまう。a＝2のとき b＝4、6 もあてはまる。また、(a，b)＝(1，2)と(2，1)を同じ組と考えて数が減るミスもある。大小を区別して、36通りで数える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×a＝b だけ数える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ bがaの倍数なら全部"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_33": {
  "caption": "3/5",
  "slides": [
   {
    "note": "2けたの整数のうち、偶数または3の倍数になる確率を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "1〜5のカード、もどさない"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "偶数または3の倍数"
     }
    ]
   },
   {
    "note": "2枚を順に引いて並べるので、12と21は別の整数。全部の整数は、1枚目が5通り、2枚目が4通りで 5×4＝20通り。「AまたはB」の個数は、Aの個数とBの個数を足すと、両方にあてはまるものを2回数えてしまうので、重なった分を1回引く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "全部で 5×4＝20通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "「または」は重なりを引く"
     }
    ]
   },
   {
    "note": "偶数を数える。一の位が2か4。一の位が2：12、32、42、52。一の位が4：14、24、34、54。合わせて8個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "一の位2：12、32、42、52"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "一の位4：14、24、34、54"
     }
    ]
   },
   {
    "note": "3の倍数を数える。各位の数の和が3の倍数。12、21、15、51、24、42、45、54の8個。このうち偶数でもあるのは 12、24、42、54の4個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "3の倍数：12、21、15、51…"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "両方：12、24、42、54"
     }
    ]
   },
   {
    "note": "「偶数または3の倍数」は 8＋8−4＝12個。確率は 12/20＝3/5。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "8＋8−4＝12個"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "12/20＝3/5"
     }
    ]
   },
   {
    "note": "3/5",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　3/5"
     }
    ]
   },
   {
    "note": "どちらでもないものを数えて確かめる。偶数でも3の倍数でもないのは、13、31、23、25、35、41、43、53の8個（奇数で、3の倍数でないもの）。20−8＝12個で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "どちらでもない：8個"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "20−8＝12個で一致"
     }
    ]
   },
   {
    "note": "偶数の8個と3の倍数の8個をそのまま足して 16/20 としてしまう。12、24、42、54は両方にあてはまるので、2回数えている。重なりの4個を1回引く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×8＋8＝16"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 8＋8−4＝12"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_34": {
  "caption": "7/36",
  "slides": [
   {
    "note": "2次方程式が整数の解をもつ(a，b)の組を数えて確率を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "x²−ax＋b＝0"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "解が整数になる確率"
     }
    ]
   },
   {
    "note": "整数の解をp、qとすると、x²−ax＋b＝(x−p)(x−q)＝x²−(p＋q)x＋pq と書ける。左辺と右辺の係数を比べると、a＝p＋q、b＝pq。a、bは1〜6の目なので、「たして6以下（2〜6）、かけて6以下」になる1以上の整数p、qの組を、順に探せば、数え落としがない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "(x−p)(x−q)と係数を比べる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "a＝p＋q、b＝pq"
     }
    ]
   },
   {
    "note": "p＋q＝a、pq＝bで、aが2、3、4、5、6の場合を調べる。a＝2：(1，1)で b＝1。a＝3：(1，2)で b＝2。a＝4：(1，3)で b＝3、(2，2)で b＝4。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝2：b＝1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝3：b＝2、a＝4：b＝3、4"
     }
    ]
   },
   {
    "note": "a＝5：(1，4)で b＝4、(2，3)で b＝6。a＝6：(1，5)で b＝5、(2，4)で b＝8、(3，3)で b＝9。bは6以下なので、b＝8と9は目にない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝5：b＝4、6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "a＝6：b＝5 だけ"
     }
    ]
   },
   {
    "note": "あてはまる(a，b)は (2，1)、(3，2)、(4，3)、(4，4)、(5，4)、(5，6)、(6，5)の7通り。全部で36通りなので、確率は 7/36。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(a,b)は7通り"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "7/36"
     }
    ]
   },
   {
    "note": "7/36",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　7/36"
     }
    ]
   },
   {
    "note": "(5，6)で確かめる。x²−5x＋6＝(x−2)(x−3)＝0で、解は2と3で整数。(4，4)は x²−4x＋4＝(x−2)²で、解は2。(6，5)は x²−6x＋5＝(x−1)(x−5)で、解は1と5。どれも整数の解をもつ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(5,6)：(x−2)(x−3)"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "(6,5)：(x−1)(x−5)"
     }
    ]
   },
   {
    "note": "pとqの順番が逆の組、たとえば(1，2)と(2，1)を別のものとして7通りより多く数えてしまう。(a，b)はさいころの目なので、同じ(a，b)になる組は1回だけ数える。また、a＝6でb＝8、9の組を、目にないのにあてはまると数えるミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×pとqの順で数をふやす"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ (a,b)は1回ずつ"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_35": {
  "caption": "20点",
  "slides": [
   {
    "note": "15人の得点データの、四分位範囲を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "15人の得点"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "四分位範囲＝？"
     }
    ]
   },
   {
    "note": "四分位数は、データを小さい順に並べて、4つに等しく分ける3つの値である。中央値（第2四分位数）はデータを前半・後半に分け、前半の中央値が第1四分位数、後半の中央値が第3四分位数。四分位範囲は、真ん中の半分のデータの広がりを表す。そのため、並べかえが必要で、外れ値の影響を受けにくい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "小さい順に並べる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "Q3−Q1＝真ん中半分の広がり"
     }
    ]
   },
   {
    "note": "小さい順に並べる。45、52、55、58、60、62、65、68、70、72、75、78、82、88、95。15個ある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "45、52、55、58、60、62、65"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "68、70、72、75、78、82、88、95"
     }
    ]
   },
   {
    "note": "中央値は8番目の68点。これを除いて、下の7個（45、52、55、58、60、62、65）と、上の7個（70、72、75、78、82、88、95）に分ける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 156.7,
      "y": 68,
      "text": "中央値",
      "size": 10,
      "color": "#E11D48",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "中央値＝8番目＝68点"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "下7個・上7個に分ける"
     }
    ]
   },
   {
    "note": "第1四分位数は下の7個の中央値（4番目）で58点。第3四分位数は上の7個の中央値（4番目）で78点。四分位範囲は 78−58＝20点。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "label",
      "x": 115.0,
      "y": 68,
      "text": "Q1",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "label",
      "x": 198.3,
      "y": 68,
      "text": "Q3",
      "size": 10,
      "color": "#9333EA",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "Q1＝58点、Q3＝78点"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "78−58＝20点"
     }
    ]
   },
   {
    "note": "20点",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　20点"
     }
    ]
   },
   {
    "note": "箱ひげ図で確かめる。最小45、Q1が58、中央値68、Q3が78、最大95。箱の長さが Q3−Q1＝20。データの数も、下7個＋中央値1個＋上7個＝15個で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "最小45・最大95"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "箱の長さ78−58＝20"
     }
    ]
   },
   {
    "note": "並べかえずに、書いてある順のまま真ん中の値を選んでしまう。必ず小さい順にする。また、奇数個なのに、中央値を前半・後半の両方に入れて、8個ずつに分けるミスがある。中央値は除く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 40,
      "y1": 120,
      "x2": 290,
      "y2": 120,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 40.0,
      "y1": 116,
      "x2": 40.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 40.0,
      "y": 136,
      "text": "40",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 123.3,
      "y1": 116,
      "x2": 123.3,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 123.3,
      "y": 136,
      "text": "60",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 206.7,
      "y1": 116,
      "x2": 206.7,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 206.7,
      "y": 136,
      "text": "80",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 290.0,
      "y1": 116,
      "x2": 290.0,
      "y2": 124,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "label",
      "x": 290.0,
      "y": 136,
      "text": "100",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 92,
      "x2": 115.0,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 198.3,
      "y1": 92,
      "x2": 269.2,
      "y2": 92,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 60.8,
      "y1": 83,
      "x2": 60.8,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "line",
      "x1": 269.2,
      "y1": 83,
      "x2": 269.2,
      "y2": 101,
      "color": "#0284C7",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 115.0,
      "y": 74,
      "w": 83.3,
      "h": 36,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "line",
      "x1": 156.7,
      "y1": 74,
      "x2": 156.7,
      "y2": 110,
      "color": "#E11D48",
      "dashed": false,
      "width": 3
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×並べかえない"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 小さい順→中央値を除く"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_36": {
  "caption": "23.5分",
  "slides": [
   {
    "note": "度数分布表から、階級値を使って平均値を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "20人の通学時間"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "平均値（分）は？"
     }
    ]
   },
   {
    "note": "度数分布表では、1人ひとりの本当の値はわからない。そこで、各階級の中にいる人は、みな階級の真ん中の値（階級値）の時間だったと考えて、平均を求める。同じ値がいくつあるかが度数なので、合計は「階級値×度数」の和になり、それを全体の人数でわれば平均になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "階級の真ん中＝階級値"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "合計＝階級値×度数の和"
     }
    ]
   },
   {
    "note": "階級値を求める。0〜10は5、10〜20は15、20〜30は25、30〜40は35、40〜50は45。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "5、15、25、35、45"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "（階級の下限と上限の平均）"
     }
    ]
   },
   {
    "note": "階級値×度数を計算する。5×2＝10、15×5＝75、25×8＝200、35×4＝140、45×1＝45。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "10、75、200"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "140、45"
     }
    ]
   },
   {
    "note": "合計は 10＋75＋200＋140＋45＝470。人数は2＋5＋8＋4＋1＝20人。平均値＝470÷20＝23.5分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "合計 470分"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "470÷20＝23.5分"
     }
    ]
   },
   {
    "note": "23.5分",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　23.5分"
     }
    ]
   },
   {
    "note": "平均値23.5分は、20〜30分の階級の中にある。度数が最も多い（8人）のも20〜30分の階級で、山の中心が20〜30分にあるので、平均値が23.5分で自然である。人数の合計も 2＋5＋8＋4＋1＝20人で、問題文と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "23.5は20〜30の中"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "度数の合計 20人で一致"
     }
    ]
   },
   {
    "note": "階級の下限（0、10、20、30、40）を使うと、平均が小さくなりすぎる。階級値は真ん中。また、470を階級の数5でわって94としてしまうミスがある。わるのは、度数の合計の20。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "line",
      "x1": 36,
      "y1": 140,
      "x2": 296,
      "y2": 140,
      "color": "#6E645C",
      "dashed": false,
      "width": 2
     },
     {
      "t": "box",
      "x": 44,
      "y": 114,
      "w": 46,
      "h": 26,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "2"
     },
     {
      "t": "label",
      "x": 67,
      "y": 152,
      "text": "0〜10",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 94,
      "y": 75,
      "w": 46,
      "h": 65,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "5"
     },
     {
      "t": "label",
      "x": 117,
      "y": 152,
      "text": "10〜20",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 144,
      "y": 36,
      "w": 46,
      "h": 104,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "8"
     },
     {
      "t": "label",
      "x": 167,
      "y": 152,
      "text": "20〜30",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 194,
      "y": 88,
      "w": 46,
      "h": 52,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "4"
     },
     {
      "t": "label",
      "x": 217,
      "y": 152,
      "text": "30〜40",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 244,
      "y": 127,
      "w": 46,
      "h": 13,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 10,
      "text": "1"
     },
     {
      "t": "label",
      "x": 267,
      "y": 152,
      "text": "40〜50",
      "size": 9,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×下限を使う"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 真ん中（階級値）"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_37": {
  "caption": "およそ450個",
  "slides": [
   {
    "note": "取り出した一部（標本）から、箱の中の白い碁石の数を推測する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "赤50個を入れて混ぜる"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "40個中、赤が4個"
     }
    ]
   },
   {
    "note": "全部の碁石を数えるのは大変なので、一部を無作為に取り出して、そこから全体を推測する。これが標本調査である。よく混ぜてから無作為に取り出せば、取り出した40個の中の赤の割合は、箱全体の中の赤の割合に、ほぼ等しいと考えられる。この考えで、全体の個数を推定する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "よく混ぜて無作為に"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "標本の割合≒全体の割合"
     }
    ]
   },
   {
    "note": "標本での赤の割合は 4÷40＝1/10。箱全体でも、赤の割合はほぼ1/10だと考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "赤の割合 4/40＝1/10"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "全体でもほぼ1/10"
     }
    ]
   },
   {
    "note": "箱全体の碁石の数をN個とする。赤は50個で、これが全体の1/10にあたるので、N×1/10＝50、N＝500。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "N×(1/10)＝50"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "N＝500個"
     }
    ]
   },
   {
    "note": "Nは、はじめの白い碁石と、あとから入れた赤い碁石50個の合計。白い碁石は 500−50＝450個。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "500−50"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "＝450個"
     }
    ]
   },
   {
    "note": "およそ450個",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　およそ450個"
     }
    ]
   },
   {
    "note": "比で確かめる。(全体)：(赤)＝(取り出した数)：(赤の数)＝40：4＝10：1。赤が50個なので全体は50×10＝500個で、白は450個。もとの割合 50÷500＝1/10 で、標本の割合4/40と一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "全体：赤＝40：4＝10：1"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "50×10＝500、500−50＝450"
     }
    ]
   },
   {
    "note": "全体の個数500を白の個数と答えてしまう。500には赤50個がふくまれている。また、赤50個を全体と考えて、標本の割合1/10を「白」と思ってしまうミスもある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×500個と答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 赤50個を引いて450個"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_38": {
  "caption": "n＝13、22",
  "slides": [
   {
    "note": "√の中の式が平方数になるような、自然数nを探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "√(75−3n)が自然数"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "nは自然数→すべて求める"
     }
    ]
   },
   {
    "note": "√(75−3n)が自然数になるのは、75−3nが1、4、9、16、…のような「自然数の2乗（平方数）」になるとき。nは自然数（1以上）なので、75−3nの最大は 75−3＝72。一方、3n は3の倍数なので、75−3n も75が3の倍数のため、必ず3の倍数になる。この2つで、あてはまる平方数をしぼれる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "75−3nは平方数"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "72以下の3の倍数"
     }
    ]
   },
   {
    "note": "75−3nは3の倍数。平方数のうち3の倍数になるのは、3の倍数の2乗だけ（3の倍数でない数の2乗は、3の倍数にならない）。72以下では 3²＝9、6²＝36の2つ。（9²＝81は72より大きいので不適。）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "3の倍数の2乗"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "9、36（81は大きすぎ）"
     }
    ]
   },
   {
    "note": "75−3n＝9 のとき、3n＝66、n＝22。75−3n＝36 のとき、3n＝39、n＝13。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "75−3n＝9 → n＝22"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "75−3n＝36 → n＝13"
     }
    ]
   },
   {
    "note": "どちらも自然数なので条件にあう。n＝13、22。（75−3n＝0 になる n＝25 は √0＝0 で自然数でないので不適。）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n＝13、22"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n＝25は √0＝0 で不適"
     }
    ]
   },
   {
    "note": "n＝13、22",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　n＝13、22"
     }
    ]
   },
   {
    "note": "n＝13：√(75−39)＝√36＝6。n＝22：√(75−66)＝√9＝3。どちらも自然数で、条件を満たす。n＝1〜25の全部を調べても、75−3nが平方数になるのは 36（n＝13）、9（n＝22）、0（n＝25）だけで一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n＝13：√36＝6"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "n＝22：√9＝3"
     }
    ]
   },
   {
    "note": "n＝25を答えに入れてしまう。√0＝0 は自然数ではない。また、75−3nが1、4、16など3の倍数でない平方数になる場合を考えて、nが整数にならないのに調べつづけ、時間をむだにしてしまう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×n＝25も答える"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 0は自然数でない"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_39": {
  "caption": "8番目",
  "slides": [
   {
    "note": "黒と白の碁石の個数の差から、何番目かを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "黒 n×n・まわりを白が1周"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12,
      "text": "黒−白＝28になるn"
     }
    ]
   },
   {
    "note": "n番目の黒は n×n＝n²個。白は、黒の正方形のまわりを1周する。外側の正方形は1辺(n＋2)個なので、全部で (n＋2)²個。白の個数は、外側の正方形全体から、内側の黒の正方形を引いた数 (n＋2)²−n²。これを計算すると、n＝1、2、3で 8、12、16 になり、4ずつふえる。式で表せば、あとは方程式を解くだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "白＝(n＋2)²−n²"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12,
      "text": "n＝1、2、3で 8、12、16"
     }
    ]
   },
   {
    "note": "白の個数を式にする。(n＋2)²−n²＝n²＋4n＋4−n²＝4n＋4。n＝3のとき 4×3＋4＝16個で、図の白い碁石の数と合う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "白＝4n＋4"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "n＝3で16個"
     }
    ]
   },
   {
    "note": "黒−白の式を立てる。黒は n²、白は 4n＋4。「黒が白より28個多い」ので、n²−(4n＋4)＝28。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "n²−(4n＋4)＝28"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "n²−4n−4＝28"
     }
    ]
   },
   {
    "note": "整理して n²−4n−32＝0。因数分解して (n−8)(n＋4)＝0。n＝8 または n＝−4。nは自然数なので n＝8。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "n²−4n−32＝0"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "(n−8)(n＋4)＝0　n＝8"
     }
    ]
   },
   {
    "note": "8番目",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　8番目"
     }
    ]
   },
   {
    "note": "n＝8のとき、黒は 8×8＝64個、白は 4×8＋4＝36個。差は 64−36＝28個で、条件と一致する。外側の正方形は 10×10＝100個で、黒64＋白36＝100個でも一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "黒64個、白36個"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12,
      "text": "64−36＝28個"
     }
    ]
   },
   {
    "note": "白い碁石を4nとして n²−4n＝28 を解いてしまう。四すみの碁石が数え落とされて、白は4n＋4。また、n＝−4 を答えにしてしまうミスもある。nは何番目かを表すので、自然数。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 110,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 38,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 55,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 72,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#0284C7",
      "fill": "#1F2937",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 89,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 110,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 127,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 144,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 161,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "box",
      "x": 178,
      "y": 106,
      "w": 17,
      "h": 17,
      "color": "#6E645C",
      "fill": "#FFFFFF",
      "size": 9
     },
     {
      "t": "label",
      "x": 152.5,
      "y": 134,
      "text": "3番目の図",
      "size": 10,
      "color": "#6E645C",
      "anchor": "middle",
      "bold": false
     },
     {
      "t": "box",
      "x": 20,
      "y": 156,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "×白＝4n"
     },
     {
      "t": "box",
      "x": 20,
      "y": 188,
      "w": 280,
      "h": 28,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12,
      "text": "○ 白＝4n＋4（四すみ）"
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_sansu_40": {
  "caption": "47",
  "slides": [
   {
    "note": "条件にあう2けたの自然数を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "①状況・問い",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "十の位＋一の位＝11"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13,
      "text": "入れかえた数は27大きい"
     }
    ]
   },
   {
    "note": "2けたの数の値は、十の位の数を10倍したものと、一の位の数の和である。たとえば47は、10×4＋7。だから、十の位をx、一の位をyとすると、もとの数は10x＋y、入れかえた数は10y＋x と表せる。文字の数が2つなので、条件の式も2つ必要になり、連立方程式を解く。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "もとの数＝10x＋y"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13,
      "text": "入れかえた数＝10y＋x"
     }
    ]
   },
   {
    "note": "条件から式をつくる。和が11なので x＋y＝11。入れかえた数が27大きいので 10y＋x＝(10x＋y)＋27。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順1",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＋y＝11"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "10y＋x＝10x＋y＋27"
     }
    ]
   },
   {
    "note": "第2式を整理する。10y＋x−10x−y＝27 より 9y−9x＝27。両辺を9でわって y−x＝3。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順2",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "9y−9x＝27"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "y−x＝3"
     }
    ]
   },
   {
    "note": "x＋y＝11 と y−x＝3 を辺々たす。2y＝14、y＝7。x＝11−7＝4。もとの数は 10×4＋7＝47。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "手順3",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "2y＝14　y＝7"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "x＝4　もとの数は47"
     }
    ]
   },
   {
    "note": "47",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#0284C7",
      "fill": "#FEF9C3",
      "size": 13,
      "text": "答え　47"
     }
    ]
   },
   {
    "note": "47の十の位4と一の位7の和は 4＋7＝11。入れかえた数は74で、74−47＝27で一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "確かめ",
      "size": 12,
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "4＋7＝11"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13,
      "text": "74−47＝27"
     }
    ]
   },
   {
    "note": "もとの数を「xy」と書いて、そのまま計算してしまう。xyは「x×y」を意味するので、2けたの数を表せない。10x＋yと書く。また、入れかえた数を 10y＋x ではなく 10x＋y のままにしてしまうミスがある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 20,
      "y": 30,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "×もとの数＝xy"
     },
     {
      "t": "box",
      "x": 20,
      "y": 66,
      "w": 280,
      "h": 30,
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13,
      "text": "○ 10x＋y"
     }
    ]
   }
  ]
 }
}
;

export const figuresRitsumeikanKoko_sansu: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
