// 立命館対策（国語）の動く図解。各問、状況→手がかり→理由→手順→答え→確かめ→まちがい の7枚。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
 "ritsumeikan_koko_kokugo_04": {
  "caption": "答え　見込みがないとあきらめる",
  "slides": [
   {
    "note": "慣用句「さじを投げる」の意味を選ぶ問題。言葉どおりに読むと、さじを投げ捨てるだけで、意味がわからない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "慣用句「さじを投げる」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "意味はどれか？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「さじ」は、昔、医者が薬を量って混ぜるのに使った道具。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "さじ＝薬を量る道具",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "昔の医者が使った",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "治る見込みがないと考えた医者が、薬を調合するさじを投げ出す。ここから、見込みがないとあきらめる意味になったとされる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "治る見込みがない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "→ さじを投げ出す",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "→ あきらめる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "選択肢を成り立ちと照らす。あきらめる意味と合うのはイだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "ア 役目をゆずる　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ウ 思い切った手段　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "エ 世話をする　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "イ 見込みなくあきらめる　○",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「見込みがないと判断して、あきらめる。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "見込みがないと判断して、あきらめる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "例文に入れて読み直し、意味が通るか確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "例文で確かめる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 43,
      "text": "何度説得しても聞かない。先生もついにさじ\nを投げた。",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「投げる」の字面にひかれて、「思い切った手段」と考えるのは誤り。成り立ちで考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「投げる」の字面で思い切った手段",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "成り立ちから意味を考える",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_10": {
  "caption": "答え　難しく【ない】（形容詞）",
  "slides": [
   {
    "note": "四つの「ない」のうち、品詞が一つだけちがうものを探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "四つの「ない」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "品詞がちがうものは？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "見分けるには、「ぬ」に置きかえられるか、前の語は何の活用形かを調べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「ぬ」に置きかえられるか",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "前の語の活用形は何か",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "助動詞の「ない」は「ぬ」に置きかえられる。形容詞の「ない」は置きかえられない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "助動詞の「ない」＝「ぬ」にかえられる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "形容詞の「ない」＝かえられない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "一つずつ「ぬ」に置きかえてみる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "欠かさ【ない】→欠かさぬ　○",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "食べ【ない】→食べぬ　○",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "届か【ない】→届かぬ　○",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "難しく【ない】→難しくぬ　×",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「この問題は少しも難しく【ない】。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "この問題は少しも難しく【ない】。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "前の語でも確かめる。イだけが形容詞の連用形。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "難しく＝形容詞の連用形",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "欠かさ・食べ・届か＝動詞の未然形",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「ない」は全部助動詞と思いこむのは誤り。「ぬ」にかえて不自然なら形容詞。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「ない」はすべて助動詞",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "不自然なら形容詞",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_11": {
  "caption": "答え　紙飛行機を",
  "slides": [
   {
    "note": "「作った」がどの文節にかかっているかを答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "ぼくは　弟が　作った　紙飛行機を　飛ばし\nた。",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 77,
      "w": 296,
      "h": 28,
      "text": "「作った」はどこにかかる？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「作った」は、文の終わりではなく、後ろの名詞を説明する形（連体形）。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「作った」は連体形",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "文の終わりではない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「〜した○○」の形は、すぐ後ろの名詞にかかる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「〜した○○」は、すぐ後ろの名詞にかかる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "「何を作ったのか」と考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "何を作った？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "→ 紙飛行機を",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "弟が作った紙飛行機",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「紙飛行機を」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "紙飛行機を",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "つなげて読んで確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "弟が作った紙飛行機を飛ばした",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "意味が自然に通る",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「飛ばした」にかかると考えるのは誤り。形が合わない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「飛ばした」にかかる",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「作って飛ばした」とは形がちがう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_12": {
  "caption": "答え　おります",
  "slides": [
   {
    "note": "お客様に、自分の母のことを伝えるときの敬語を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "お客様に自分の母のことを伝える",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "母は ただいま 外出して（　）。",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "母は自分の身内（内）。お客様は外の人。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "母は自分の身内（内）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "お客様は外の人",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "内の人の動作を外の人に話すときは、内の人に尊敬語を使わない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "内の人の動作を外の人に話すとき",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "内の人に尊敬語は使わない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "四つの言い方を、尊敬語かどうかで分ける。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "いらっしゃいます＝尊敬語　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "おられます＝尊敬語　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "なさっています＝尊敬語　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "おります＝丁重語　○",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「おります」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "おります",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "文にして確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "母はただいま外出しております。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "お客様の前で母を高めない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "身内に尊敬語を使うのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×身内に尊敬語を使う",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "内と外で考える",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_13": {
  "caption": "答え　親切【で】（形容動詞）",
  "slides": [
   {
    "note": "「交通が不便で」の「で」と、同じ働きの「で」を探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「交通が不便で」の「で」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "同じ働きの「で」は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「で」の前に「な」を入れて、名詞にかかる形にしてみる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "前に「な」を入れてみる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "不便な交通　○",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「な」を入れて名詞にかかる形にできれば、形容動詞の活用語尾。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「な」で名詞にかかる形にできる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "→ 形容動詞の活用語尾",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "四つの選択肢で「な」を入れてみる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "新幹線な　×（格助詞）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "親切な彼女　○（形容動詞）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "遊んな　×（助詞「て」）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "小学生な　×（助動詞「だ」）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「彼女はとても親切【で】、だれからも好かれている。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "彼女はとても親切【で】、だれからも好かれ\nている。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "言い切りの形でも確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "不便だ・親切だ＝形容動詞",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "言い切りが「〜だ」になる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「小学生である」の「で」も同じと考えるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「小学生である」も同じ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「小学生な」とは言えない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_14": {
  "caption": "答え　手がかりを頭の中で結びつける作業",
  "slides": [
   {
    "note": "「こうした作業」が何を指すかを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「こうした作業」とは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "指示語の内容を選ぶ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "指示語は、直前の文から探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "指示語は直前から探す",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "直前の文に「作業」が出てくる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "直前の文に、機械が肩代わりした作業が書かれている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "「頭の中で結びつける作業は、すべて機械が\n肩代わり」",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "何をする作業かを、直前の文から取り出す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "目印・坂の向き・太陽の位置を",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "頭の中で結びつける作業",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "指示語に当てはめて読み直す",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「街角の目印や坂の向き、太陽の位置などの手がかりを、頭の中で結びつける作業。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "街角の目印や坂の向き、太陽の位置などの手\nがかりを、頭の中で結びつける作業。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "当てはめて読み直す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "この作業を省いた人は道を覚えられない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "前後がつながる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "少し前の文の内容を選ぶのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「来た道をたどる作業」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "直前の文を読み落とさない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_15": {
  "caption": "答え　しかし",
  "slides": [
   {
    "note": "空欄①に入る接続語を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "空欄①に入る接続語は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "空欄の前と後ろの内容を取り出す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "前：迷うことはほとんどない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "後：見えにくい代価がある",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "前がよい点、後ろがその裏にある悪い点で、内容が反対になっている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "前＝よい点",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "後＝その裏の悪い点",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "反対の内容 → 逆接",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "選択肢の働きを調べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "たとえば＝例を挙げる　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "だから・そこで＝順接　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "しかし＝逆接　○",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「しかし」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "しかし",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "入れて読み直す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "迷うことはほとんどない。しかし、この便利\nさには、見えにくい代価がある。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「だから」を選ぶのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「だから」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "便利だから代価がある、は成り立たない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_16": {
  "caption": "答え　道を見ず、結びつける作業を機械に任せたから",
  "slides": [
   {
    "note": "矢印に従って歩いた人が、道を覚えられない理由を探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "なぜ道を覚えられない？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "矢印に従って歩いた人",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "第2段落に、理由が二つ書かれている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「画面を見ていたのである」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「機械が肩代わりしてしまっている」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "道そのものを見ず、頭を使う作業も機械に任せているから。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "道そのものを見ていない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "手がかりを結びつける作業を任せた",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "理由を順に並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "①画面を見て歩く",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "②目印を結びつけない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "③道が頭に残らない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「画面を見て歩くので、道そのものを見ておらず、手がかりを結びつける作業も機械に任せているから。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "画面を見て歩くので、道そのものを見ておら\nず、手がかりを結びつける作業も機械に任せ\nているから。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "本文の言葉と照らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "「道そのものを見ていたのではなく、画面を\n見ていた」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "本文にない理由を選ぶのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×本文にない理由",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "歩く速さ・矢印のちがい・地図の誤り",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_17": {
  "caption": "答え　迷う経験が全体像を描く力を育てるから",
  "slides": [
   {
    "note": "迷いが「欠かせない過程」なのはなぜかを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "なぜ迷いは「欠かせない過程」？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "傍線部の文は「つまり」で始まる。前の文が理由になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「つまり」でまとめている",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "前の文が理由",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "前の文に、「その失敗こそが力を育てる」と書かれている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "「その失敗こそが、町の全体像を描く力を育\nてる」",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "流れを並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "予測を立てて歩く",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "予測が外れて迷う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "町の全体像を描く力が育つ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「予測が外れて迷う経験が、町の全体像を頭の中に描く力を育てるから。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "予測が外れて迷う経験が、町の全体像を頭の\n中に描く力を育てるから。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "傍線部につなげて読み直す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "迷いは力を育てる。だから欠かせない。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "本文にない内容を選ぶのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「紙の地図のほうが正確」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "筆者は正確さを述べていない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_18": {
  "caption": "答え　場面を自分で選べることが大切",
  "slides": [
   {
    "note": "本文の内容に合う選択肢を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "本文の内容に合うものは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "筆者の主張は、最後の段落の「大切なのは」の文にある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「大切なのは、便利さに頼る場面と…」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "反対・言い過ぎ・書いていないことを、一つずつ消していく。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "反対のことは消す",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "言い過ぎは消す",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "書いていないことは消す",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "選択肢を一つずつ照らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "ア 使わないほうがよい　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "イ 予測が外れない　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "エ 必ずたどれる　×",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "ウ 場面を自分で選ぶ　○",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「筆者は、地図アプリに頼る場面と、自分の頭を使う場面を、自分で選べることが大切だと考えている。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "筆者は、地図アプリに頼る場面と、自分の頭\nを使う場面を、自分で選べることが大切だと\n考えている。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "本文の最後の段落と照らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「自分で選べるようになることである」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「使うべきでない」と言い切るのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×アを選ぶ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "筆者は地図アプリを否定していない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_21": {
  "caption": "答え　もとの対象を自分で確かめるべき",
  "slides": [
   {
    "note": "「橋」と「向こう岸の景色」が何をたとえているかを読み取る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「橋」「向こう岸の景色」は何？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "橋は渡るための便利な道具。たとえも、理解のための便利な道具。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "橋＝たとえ（便利な道具）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "向こう岸の景色＝もとの対象",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "橋を渡るのは、たとえで理解すること。景色を見るのは、自分で確かめること。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "橋を渡る＝たとえで理解する",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "景色を見る＝自分で確かめる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "もとの話に置きかえて読む。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "たとえで理解したら",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "もとの対象を",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "自分で確かめる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「たとえで大まかな理解を得たあとは、もとの対象を自分で確かめて、理解を確かなものにすべきだということ。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "たとえで大まかな理解を得たあとは、もとの\n対象を自分で確かめて、理解を確かなものに\nすべきだということ。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "直前の文と照らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「もとの対象にもどして確かめる必要がある」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「何も信じてはいけない」は言い過ぎ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「何も信じてはいけない」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "筆者はたとえを便利と認めている",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_24": {
  "caption": "答え　不安や緊張を見すかされたくない",
  "slides": [
   {
    "note": "ラケットを背中に隠したときの「ぼく」の気持ちを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "ラケットを背中に隠した気持ち",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "前後の様子が手がかり。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "指先が冷たく落ち着かない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "何も悪いことはしていない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "人は、見られたくないものを隠す。ここで見られたくないのは、緊張している自分。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "隠すのは見られたくないから",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "見られたくないのは緊張",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "場面を順に追う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "①緊張してテープを巻きなおす",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "②父の声にあわてて隠す",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "③不安を見すかされたくない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「試合前の不安や緊張を、父に見すかされたくない気持ち。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "試合前の不安や緊張を、父に見すかされたく\nない気持ち。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "本文の言葉で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「何も悪いことはしていないのに」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "あやまる気持ちではない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「隠す」を、悪いことをした気持ちと決めつけるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「隠す＝悪いことをした」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_25": {
  "caption": "答え　余裕がなく素直に答えられなかった",
  "slides": [
   {
    "note": "「とげのある声」が出た理由を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "なぜとげのある声が出た？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "父の言葉と、ぼくの様子を確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "父「明日は朝が早いぞ」＝気づかい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ぼく＝指先が冷たく落ち着かない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "父が冷たいのではなく、ぼくに余裕がないことが原因。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "父は冷たくない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ぼくに余裕がない",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "流れを順に並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "父の言葉は責めていない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ぼくは緊張している",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "余裕がなく素直に答えられない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「試合前で気持ちに余裕がなく、父の気づかいにも、素直に答えられなかったから。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "試合前で気持ちに余裕がなく、父の気づかい\nにも、素直に答えられなかったから。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "あとの場面で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「胸の奥に小さな石が落ちた」＝後悔",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「父が冷たいから」と相手のせいにするのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「父が冷たいから」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "父の言葉の中身を確かめる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_26": {
  "caption": "答え　直喩。後ろめたさが重く心に残る",
  "slides": [
   {
    "note": "「小さな石が落ちたような」という表現の技法と効果を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「小さな石が落ちたような」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "技法と効果は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「ような」を使って、気持ちを石にたとえている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「ような」を使っている",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "気持ちを石にたとえる",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「ような」を使う比喩は直喩。石は、小さくても重く、心に残る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「ような」を使う比喩＝直喩",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "石＝小さいが重く心に残る",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "どんな気持ちかを、前の場面から考える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "きつい声で父を黙らせた",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "毎晩シューズを洗う背中を思う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "後ろめたさが心に残る",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「直喩。きつい返事をしたことへの後ろめたさが、小さいけれど重く心に残った様子を表している。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "直喩。きつい返事をしたことへの後ろめたさ\nが、小さいけれど重く心に残った様子を表し\nている。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "技法と効果の両方を確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "技法＝直喩　効果＝後ろめたさ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ほかの選択肢はどちらかがちがう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「隠喩」と答えるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「隠喩」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「ような」があれば直喩",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_29": {
  "caption": "答え　擬人法。自分らしさへの気づき",
  "slides": [
   {
    "note": "「空が、ひっそりと息をしていた」という表現を説明する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「自分だけの空が、ひっそりと息をしていた」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "空は、人間のようには息をしない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "空は息をしない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "人でないものを人のように表す",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "人でないものを人のように表すのが擬人法。「ひっそり」は、目立たないが確かにあること。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "人でないものを人のように表す＝擬人法",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ひっそり＝目立たないが確かにある",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "場面の流れと合わせる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "写し絵だと思った絵の中に",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "自分だけの空があった",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "自分らしさへの気づき",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「擬人法。自分の絵の中に確かにある、自分らしさに気づいた様子を表している。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "擬人法。自分の絵の中に確かにある、自分ら\nしさに気づいた様子を表している。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "「ような」がないかを確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「ような」を使っていない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "直喩ではない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「冬の朝の青」に引かれて直喩とするのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「冬の朝の青」に引かれて直喩",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_31": {
  "caption": "答え　初心者は、二本の矢を持ってはいけない。",
  "slides": [
   {
    "note": "「二つの矢を持つことなかれ」を、現代語に訳す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「二つの矢を持つことなかれ」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "現代語訳は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「なかれ」は、「なし」の命令形で、禁止を表す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「なかれ」＝「なし」の命令形",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "禁止を表す",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「〜してはいけない」の意味になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「なかれ」＝「〜してはいけない」",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "語ごとに訳して、つなげる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "初心の人＝初心者",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "二つの矢＝二本の矢",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "持つことなかれ＝持ってはいけない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「初心者は、二本の矢を持ってはいけない。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "初心者は、二本の矢を持ってはいけない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "あとの文脈で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "二本目を頼みにして一本目がいいかげんに",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "禁止の理由として合う",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「持たない」と訳すのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「持たない」と訳す",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「なかれ」は打ち消しでなく禁止",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_32": {
  "caption": "答え　二本目を頼みにして、一本目がいいかげんになるから",
  "slides": [
   {
    "note": "師が、二本の矢を持つなと言う理由を探す。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "なぜ二本持つなと言うのか",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "師の言葉の「」の中を読む。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "師の言葉の「」の中",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「後の矢を頼みて〜」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "後の矢を頼みにして、はじめの矢にいいかげんな気持ちが出る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "後の矢を頼みにする",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "はじめの矢がいいかげんになる",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "流れを並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "二本目があると安心する",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "一本目への心がゆるむ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "だから一本に集中せよ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「二本目の矢を頼みにして、一本目の矢に対していいかげんな気持ちが生じるから。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "二本目の矢を頼みにして、一本目の矢に対し\nていいかげんな気持ちが生じるから。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "あとの文で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「一つをおろそかにせんと思はんや」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "同じ内容の言いかえ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "本文にない理由（矢の重さ）を選ぶのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「矢の重さ」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "本文は気持ちのゆるみを述べる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_34": {
  "caption": "答え　食べたいが体裁が悪いので寝たふりをする",
  "slides": [
   {
    "note": "児が「寝ざらんも、わろかりなん」と思った気持ちを読み取る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "児の気持ちは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「寝ざらんも、わろかりなん」",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "前後の言葉が手がかり。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「心寄せに聞きけり」＝期待",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「寝たる由にて」＝寝たふり",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "食べたいと期待している。けれど、起きて待つのは体裁が悪い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "食べたい（期待している）",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "起きて待つのは体裁が悪い",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "語を訳して、つなげる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "さりとて＝そうかといって",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "わろかりなん＝具合が悪いだろう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "→ 寝たふりをして待つ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「かいもちひを食べたくて待っているが、起きて待つのは体裁が悪いと考え、寝たふりをして待とうとしている。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "かいもちひを食べたくて待っているが、起き\nて待つのは体裁が悪いと考え、寝たふりをし\nて待とうとしている。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "後ろの行動で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「寝たる由にて」＝寝たふり",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "眠いのでも怒っているのでもない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「本当に眠い」と考えるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「本当に眠い」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_35": {
  "caption": "答え　過ちては則ち改むるに憚ること勿かれ",
  "slides": [
   {
    "note": "白文「過則勿憚改」を、書き下し文にする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "白文「過則勿憚改」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "書き下し文は？",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "返り点をつけると「過 則 勿レ憚レ改」。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "勿レ憚レ改",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "改 → 憚 → 勿 の順に読む",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "漢文は「〜を〜する」を逆に書く。レ点は、すぐ下の字を先に読む印。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "漢文は目的語があとに来る",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "レ点＝下の字を先に読む",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "読む順に並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "過ちては",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "則ち",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "改むるに",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "憚ること",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 164,
      "w": 296,
      "h": 28,
      "text": "勿かれ",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「過ちては則ち改むるに憚ること勿かれ」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "過ちては則ち改むるに憚ること勿かれ",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "意味で確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "過ちは、改めるのをためらうな",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "論語の教えとして自然",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "白文の並びのまま読むのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×白文の並びのまま読む",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「勿」は最後に読む",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_36": {
  "caption": "答え　置き字で読まない",
  "slides": [
   {
    "note": "「温故而知新」の「而」の働きを答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "「温故而知新」の「而」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "書き下し文と見比べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "故きを温ねて新しきを知る",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「而」にあたる言葉がない",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "読まない字を置き字という。「温ねて」の「て」が、前後をつなぐ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "読まない字＝置き字",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「温ねて」の「て」がつなぐ",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "流れを確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "温（ねて）→ 知（る）",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "「て」＝「而」のつなぐ働き",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「置き字で、読まない。「温ねて」の送り仮名「て」が、前後をつなぐ働きを表している。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 43,
      "text": "置き字で、読まない。「温ねて」の送り仮名\n「て」が、前後をつなぐ働きを表している。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "意味でも確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "古いことをたずね、新しいことを知る",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "「而」を必ず「しかして」と読むのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×必ず「しかして」と読む",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "書き下し文で確かめる",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_37": {
  "caption": "答え　五言絶句　暁・鳥・少",
  "slides": [
   {
    "note": "この詩の形式と、押韻している字を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "春眠不覚暁　処処聞啼鳥",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "夜来風雨声　花落知多少",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "まず、一句の字数と、句の数を数える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "一句は五字",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "全体は四句",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "五字なら五言、四句なら絶句。句の終わりの響きをそろえるのが押韻。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "五字＝五言、四句＝絶句",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "句末の響きをそろえる＝押韻",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "句の終わりの字を読む。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "第1句末「暁」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "第2句末「鳥」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "第3句末「声」は響きがちがう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 130,
      "w": 296,
      "h": 28,
      "text": "第4句末「少」",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「五言絶句　暁・鳥・少」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "五言絶句　暁・鳥・少",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "数えて確かめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "五字×四句＝二十字",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "暁・鳥・少の響きがそろう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "第三句の「声」まで押韻と考えるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×第三句「声」まで押韻",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "第三句はふつう踏まない",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_kokugo_38": {
  "caption": "答え　蠅（夏）・擬人法・こっけい",
  "slides": [
   {
    "note": "一茶の句について、季語・技法・効果をまとめて答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "やれ打つな蠅が手をする足をする",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "季語と、句の言葉づかいに注目する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "②手がかり",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "季語＝蠅（夏）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "蠅が手をする足をする",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "人でないものを人のように表すのが擬人法。蠅が前足をこする様子を、手をすり合わせて頼む姿に見立てている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなる",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "人でないものを人のように＝擬人法",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "前足をこする＝手をすり合わせて頼む",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 13
     }
    ]
   },
   {
    "note": "三つの点にまとめる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④手順",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "季語…蠅＝夏",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "技法…擬人法",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 96,
      "w": 296,
      "h": 28,
      "text": "効果…命ごいがこっけい",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     }
    ]
   },
   {
    "note": "答えは「季語は「蠅」で、季節は夏。蠅を人間のように表す擬人法で、助けを求めるようすをこっけいに表している。」",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑤答え",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 59,
      "text": "季語は「蠅」で、季節は夏。蠅を人間のよう\nに表す擬人法で、助けを求めるようすをこっ\nけいに表している。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     }
    ]
   },
   {
    "note": "三点を、選択肢と照らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑥確かめ",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "季語・技法・効果が全部合う",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ほかは、どれかがちがう",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   },
   {
    "note": "「数の多さを表す」と考えるのは誤り。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦ひっかけ注意",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 12,
      "y": 28,
      "w": 296,
      "h": 28,
      "text": "×「数の多さを表す」",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 13
     },
     {
      "t": "box",
      "x": 12,
      "y": 62,
      "w": 296,
      "h": 28,
      "text": "ねらいは蠅のしぐさを人にたとえること",
      "color": "#6E645C",
      "fill": "#F1EFEA",
      "size": 13
     }
    ]
   }
  ]
 }
};

export const figuresRitsumeikanKoko_kokugo: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
