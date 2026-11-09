// 本試験対策（学校別）洛南高校 準拠の自作問題【追加分B】の動く図解（理科14・社会14）。各問、状況→手がかり→理由→計算→答え→確かめ（7枚）。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
  "honshiken_school_koko_rakunan_rika_14": {
    "caption": "答え　(1) 700m　(2) 660m",
    "slides": [
      {
        "note": "船は秒速10mで崖に近づきながら、汽笛を鳴らす。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "船：秒速10m　音：秒速340m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "4.0秒後に反射音が聞こえた",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：汽笛の地点と崖の距離",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "音は4.0秒で、どれだけ進んだか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "音が進んだ道のり",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "340×4.0＝1360m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "これは行きと帰りの合計",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "船も4.0秒のあいだに進んでいる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "船が進んだ道のり",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "10×4.0＝40m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "帰りは行きより40m短い",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "行きを x とすると、帰りは x−40。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "行き：x",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "帰り：x−40",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "合計：x＋(x−40)＝1360",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "式を解く。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "2x−40＝1360",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "2x＝1400",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "x＝700m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(1)は700m。(2)は帰りの道のり。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 汽笛の地点から崖：700m",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 船から崖：700−40＝660m",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "行き＋帰りが音の道のりと一致するか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "700＋660＝1360m",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "340×4.0＝1360m　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_16": {
    "caption": "答え　(1) 10cm　(2) スクリーンをレンズに近づける。像は小さくなる。　(3) うつらない（虚像ができる）",
    "slides": [
      {
        "note": "物体を20cmの位置に置くと、同じ大きさの像がうつる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "物体：レンズから20cm",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "スクリーンに等倍の像",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：焦点距離",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "等倍になる位置は決まっている。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "物体が焦点距離の2倍の位置",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "像も反対側の2倍の位置",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "像の大きさ＝物体の大きさ",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 2f＝20cm。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "2f＝20cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "f＝10cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 25cmは2f（20cm）より遠い。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "25cm ＞ 20cm（2fより外）",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "像は f と 2f の間（10〜20cm）",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "だからスクリーンは近づけ、像は小さい",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 8cmは焦点距離10cmより内側。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "8cm ＜ 10cm（fより内側）",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "光は反対側で交わらない",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "像はスクリーンにうつらない",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 10cm",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 近づける。小さくなる。",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) うつらない（虚像）",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "f＝10cmで、はじめの条件を確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "2f＝20cm で、物体20cmと一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "等倍の像：像も20cmの位置",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_17": {
    "caption": "答え　(1) 80cm　(2) 75cm",
    "slides": [
      {
        "note": "垂直な鏡の前に立つ。身長160cm、目の高さ150cm。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "身長160cm",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "目の高さ150cm",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "全身を映す鏡の最小の長さは？",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "line",
            "x1": 250,
            "y1": 156,
            "x2": 250,
            "y2": 230,
            "color": "#0284C7",
            "width": 3
          },
          {
            "t": "label",
            "x": 250,
            "y": 148,
            "text": "鏡",
            "size": 11,
            "color": "#0284C7",
            "anchor": "middle"
          },
          {
            "t": "line",
            "x1": 120,
            "y1": 230,
            "x2": 120,
            "y2": 172,
            "color": "#6E645C",
            "width": 3
          },
          {
            "t": "circle",
            "cx": 120,
            "cy": 164,
            "r": 7,
            "color": "#6E645C",
            "fill": "#F1EFEA"
          }
        ]
      },
      {
        "note": "反射の法則：入射角＝反射角。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "光が鏡ではね返る点は",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "物体と目の中間の高さ",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "この点を、上と下で求める",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "足の先の光が反射する点（鏡の下端）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "足の先：0cm　目：150cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "中間：(0＋150)÷2",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝75cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "頭の先の光が反射する点（鏡の上端）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "頭の先：160cm　目：150cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "中間：(160＋150)÷2",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝155cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "上端と下端の差が、鏡の長さ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "鏡の長さ＝155−75",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝80cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "鏡の下端の高さ＝75cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(1)は80cm、(2)は75cm。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 鏡の最小の長さ：80cm",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 鏡の下端の高さ：75cm",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "身長の半分になっているか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "160÷2＝80cm　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "距離を変えても長さは同じ",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_19": {
    "caption": "答え　(1) 77g　(2) 93g",
    "slides": [
      {
        "note": "60℃の飽和水溶液209gを冷やす。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "水100gに109gがとけている",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "20℃では水100gに32gまで",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：出てくる結晶の量",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "209gの中身を分ける。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "水：100g",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "硝酸カリウム：109g",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "合計：209g",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "冷やすと、とける限度が小さくなる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "60℃：水100gに109g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "20℃：水100gに32g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "限度をこえた分が結晶になる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 水100gのまま冷やす。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "結晶＝109−32",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝77g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 水を50g蒸発させる。水は50gになる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "20℃で水50gにとける量",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "32÷2＝16g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "結晶＝109−16",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1)は77g、(2)は93g。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 77g",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 93g",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "残った水溶液が飽和になっているか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 水100g＋32g＝132g",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "209−77＝132g　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(2) 209−50−93＝66g＝50＋16",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_20": {
    "caption": "答え　(1) 25g　(2) 100g",
    "slides": [
      {
        "note": "10%の食塩水200gを20%にしたい。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "10%の食塩水　200g",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(1) 食塩を加える",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(2) 水を蒸発させる",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "まず中身を分ける。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "食塩：200×0.10＝20g",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "水：200−20＝180g",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 食塩を x g加える。全体も x 増える。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "食塩：20＋x",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "全体：200＋x",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(20＋x)÷(200＋x)＝0.20",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 式を解く。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "20＋x＝40＋0.2x",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "0.8x＝20",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "x＝25g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 食塩は20gのまま。全体を何gにするか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "20÷全体＝0.20",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "全体＝100g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1)は25g、(2)は100g。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 食塩を25g加える",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 水を200−100＝100g蒸発",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "どちらも20%になるか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 45÷225＝0.20",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 20÷100＝0.20",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_21": {
    "caption": "答え　(1) 0.30g　(2) 500mL　(3) 0.35g",
    "slides": [
      {
        "note": "塩酸30cm³に、マグネシウムを入れる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "0.10g〜0.30g：水素が増える",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "0.30gをこえると300mLで一定",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：(1)(2)(3)",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "頭打ちは、塩酸が足りなくなったから。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "マグネシウムが少ない：全部反応",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "マグネシウムが多い：塩酸が不足",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "境目＝ちょうど反応する量",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 境目は0.30g。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "0.10gで100mL",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "300mLのとき0.30g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(1) 0.30g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 塩酸が2倍なら、反応できる量も2倍。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "60cm³では0.60gまで反応",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "0.50gは全部反応",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "0.10gで100mL → 0.50gで500mL",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 塩酸が半分なら、反応できる量も半分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "15cm³では0.15gまで反応",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "0.50−0.15＝0.35g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "これが残るマグネシウム",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 0.30g　(2) 500mL",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 0.35g",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "(3)の水素の量で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "0.15gから出る水素は150mL",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "塩酸30cm³の300mLの半分　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_24": {
    "caption": "答え　(1) 10A　(2) 10Ω　(3) 16A、20Aのブレーカーは落ちない",
    "slides": [
      {
        "note": "100Vのコンセントで、ドライヤーを使う。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ドライヤー：1000W",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "コンセント：100V",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：電流・抵抗・同時使用",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "電力の式を使う。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "電力（W）＝電圧（V）×電流（A）",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "電流＝電力÷電圧",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 電流を求める。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1000÷100",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝10A",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) オームの法則で抵抗を求める。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "抵抗＝電圧÷電流",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "100÷10＝10Ω",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) ストーブを同時に使うと、並列つなぎ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ストーブ：600÷100＝6A",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "どちらにも100Vが加わる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "電流は足し算",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "全体の電流は16A。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 10A　(2) 10Ω",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 10＋6＝16A",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "20Aより小さいので落ちない",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "電力の合計から確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1000＋600＝1600W",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1600÷100＝16A　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_25": {
    "caption": "答え　(1) 30N　(2) 4m　(3) 40N",
    "slides": [
      {
        "note": "動滑車で、6kgの物体を2m引き上げる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "物体：6kg → 60N",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "引き上げる高さ：2m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "動滑車の重さが無視できるとき",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "動滑車は、ささえるひもが2本。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "物体と動滑車を",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "2本のひもでささえる",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1本が受け持つ重さは半分",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) ひもを引く力。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "60÷2",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝30N",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) ひもを引く距離。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "物体が2m上がる",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "ひもは両側とも2mずつ短くなる",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "引く距離＝2×2＝4m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 動滑車の重さ20Nもささえる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ささえる重さ＝60＋20＝80N",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "2本で受け持つので",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "80÷2＝40N",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 30N　(2) 4m",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 40N",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "仕事の原理で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 30×4＝120J",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "60×2＝120J　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 40×4＝160J ＞ 120J",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_27": {
    "caption": "答え　(1) 18cm　(2) 4cm　(3) 2N",
    "slides": [
      {
        "note": "ばねAは1Nで2cm、Bは1Nで4cmのびる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：1Nで2cm（のびにくい）",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：1Nで4cm（のびやすい）",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "全体に3Nの力を加える",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "直列は力が同じ、並列はのびが同じ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "直列：どちらも3N",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "並列：のびが同じ",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "並列は力が2本に分かれる",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 直列。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：2×3＝6cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：4×3＝12cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "合計：6＋12＝18cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 並列。1cmのばす力を足す。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：1÷2＝0.5N／cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：1÷4＝0.25N／cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "合わせて0.75N／cm",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 3Nで何cmのびるか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "3÷0.75",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝4cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) Aの力は、0.5×4。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 18cm　(2) 4cm",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) A：0.5×4＝2N",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "AとBの力の和と、のびを確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A 2N ＋ B 1N ＝ 3N　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "A 2÷0.5＝4cm、B 1÷0.25＝4cm",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_28": {
    "caption": "答え　(1) 78cm/s　(2) 18cm/s　(3) 27.6cm",
    "slides": [
      {
        "note": "記録タイマーのテープ4本。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1秒間に60回、点をうつ",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "6打点ごとに切る",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "4.2、6.0、7.8、9.6cm",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "テープ1本は、何秒ぶんか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "6打点＝6÷60",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝0.1秒",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1本＝0.1秒間に進んだ距離",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 3本目の平均の速さ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "7.8÷0.1",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝78cm/s",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 各テープの速さを並べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "42、60、78、96cm/s",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "差：18、18、18",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "0.1秒ごとに18cm/s増える",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "速さが一定の割合で増える運動。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "テープの長さの差が一定",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "斜面にそった力が一定のとき",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "台車の運動はこうなる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 4本の長さの合計。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "4.2＋6.0＝10.2",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "10.2＋7.8＝18.0",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "18.0＋9.6＝27.6cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 78cm/s",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 18cm/s　(3) 27.6cm",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "全体の平均の速さで確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "27.6÷0.4＝69cm/s",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(60＋78)÷2＝69　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_30": {
    "caption": "答え　(1) 1.0mL　(2) 7.0mL　(3) 2.0mL　(4) 裏側",
    "slides": [
      {
        "note": "4本の枝。ワセリンをぬる場所を変える。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：何もしない　10.0mL",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：表側にぬる　9.0mL",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "C：裏側にぬる　3.0mL",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "D：表と裏にぬる　2.0mL",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "ワセリンをぬった部分は、蒸散しない。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "水面には油：蒸発はなし",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "減少量＝枝からの蒸散量",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "A−B、A−C の差を使う",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 表側からの蒸散量。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "Bは表をふさいだ",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "A−B＝10.0−9.0",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝1.0mL",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 裏側からの蒸散量。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "Cは裏をふさいだ",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "A−C＝10.0−3.0",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝7.0mL",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 表も裏もふさいだDに残る減少。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "葉の気孔は全部ふさがった",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "残りは茎などからの蒸散",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝Dの2.0mL",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(4) 裏側の蒸散が多い。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 1.0mL　(2) 7.0mL",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 2.0mL　(4) 裏側",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "合計がAの減少量になるか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1.0＋7.0＋2.0＝10.0mL",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "Aの10.0mLと一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_35": {
    "caption": "答え　(1) 反時計回りに90°　(2) 反時計回りに約30°",
    "slides": [
      {
        "note": "午後9時、カシオペヤ座が北極星の真上。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "北の空の星は反時計回り",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1時間に15°",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：6時間後と30日後",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "2つの動きがある。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "日周運動：自転が原因",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1時間に15°",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "年周運動：公転が原因",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "1日に約1°",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 午後9時から午前3時まで。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "6時間",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "15°×6＝90°",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 反時計回りに90°。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "北極星の真上から",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "反時計回りに90°",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "北極星の真西（左）の位置",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 同じ時刻の星空は、少しずつずれる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "地球は1年で360°公転",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1日あたり約1°",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "星は同じ向きにずれて見える",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 30日後。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1°×30日",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝約30°",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "向きは反時計回り",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "公転の割合で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "360°÷365日≒1°",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1°×30＝約30°　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_36": {
    "caption": "答え　(1) 東と南（南東）に向かって低くなっている　(2) 10m",
    "slides": [
      {
        "note": "4地点で、同じ火山灰の層を調べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：標高50m　深さ8m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：Aの東200m　標高40m　深さ4m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "C：Aの南200m　標高46m　深さ6m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "D：Aの東400m・南200m　標高38m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "層の標高を求める。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "層の標高＝地表−深さ",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "A：50−8＝42m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "B：40−4＝36m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "C：46−6＝40m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "東へ200mと、南へ200mで、どれだけ低くなるか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A→B（東200m）：42→36",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "6m低くなる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "A→C（南200m）：42→40",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "2m低くなる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 東にも南にも低い。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "層は東と南（南東）に向かって",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "低くなっている",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) Dの層の標高。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "東400m：6×2＝12m低い",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "南200m：2m低い",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "42−12−2＝28m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) Dの深さ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "地表の標高38m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "層の標高28m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "38−28＝10m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "Bから南へのばして確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "B（36m）から南200mで2m低い",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "36−2＝34m、東へ200mで6m低い",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "34−6＝28m　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_rika_38": {
    "caption": "答え　(1) 9.6g　(2) 0.9g　(3) 9.9g",
    "slides": [
      {
        "note": "酸化銅12.0gを、炭素と加熱する。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "酸化銅：銅：酸素＝4：1",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "二酸化炭素：炭素：酸素＝3：8",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：銅、炭素、残る固体",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 酸化銅の中身を分ける。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "銅：12.0×4÷5＝9.6g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "酸素：12.0−9.6＝2.4g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "炭素は、この酸素2.4gと結びつく。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "炭素：酸素＝3：8",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "酸素2.4gに必要な炭素",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "2.4×3÷8",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) ちょうど反応する炭素。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "2.4×3÷8",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝0.9g",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 炭素1.2gでは、炭素が余る。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "反応する炭素：0.9g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "余る炭素：1.2−0.9＝0.3g",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "余った炭素は固体で残る",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 銅と余った炭素。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 9.6g　(2) 0.9g",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 9.6＋0.3＝9.9g",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "質量保存で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "二酸化炭素：0.9＋2.4＝3.3g",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "13.2g ＝ 9.9g ＋ 3.3g　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_13": {
    "caption": "答え　(1) 1.5km　(2) 4%　(3) 20m",
    "slides": [
      {
        "note": "5万分の1の地形図。A・B間は3.0cm。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "Aの標高：120m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "Bの標高：180m",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：距離・傾き・等高線",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "縮尺5万分の1の意味。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "地図上1cm＝実際5万cm",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "5万cm＝500m",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "地図上3.0cm＝500×3",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 実際の距離。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "3.0×50000＝150000cm",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "150000cm＝1500m",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝1.5km",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 傾きは、標高差と水平距離の比。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "標高差＝180−120＝60m",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "水平距離＝1500m",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "単位をそろえて割る",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 傾きを%にする。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "60÷1500＝0.04",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝4%",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 主曲線は20mごと。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 1.5km　(2) 4%",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 20m",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "1500mで何m上がるか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1500×0.04＝60m",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "標高差60mと一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_15": {
    "caption": "答え　(1) 35%　(2) 2000人/km²　(3) 6.3万人、1.5人　(4) 超高齢社会",
    "slides": [
      {
        "note": "ある市の人口は12万人。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "年少人口：1.5万人",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "老年人口：4.2万人",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "面積：60km²",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 老年人口の割合。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "4.2÷12×100",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝35%",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 人口密度。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "120000÷60",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝2000人/km²",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 生産年齢人口。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "12−1.5−4.2",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝6.3万人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "老年人口1人を、何人で支えているか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "生産年齢人口÷老年人口",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "6.3÷4.2",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝1.5人",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(4) 21%をこえると超高齢社会。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 35%　(2) 2000人/km²",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 6.3万人、1.5人",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(4) 超高齢社会",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの人口の合計を確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1.5＋6.3＋4.2＝12万人",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "2000×60＝120000人　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_17": {
    "caption": "答え　(1) 5000km　(2) 2500km　(3) 1時間",
    "slides": [
      {
        "note": "地球の1周を4万kmとする。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 赤道で、経度差45度",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 北緯60度で、経度差45度",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 経度差15度の時差",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "経度差45度は、1周のどれだけか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "360度で1周",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "45÷360＝1/8",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1周の8分の1",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 赤道は4万km。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "40000÷8",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝5000km",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 北緯60度の緯線は、赤道の半分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "緯線は高緯度ほど短い",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "北緯60度：4万÷2＝2万km",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1周の長さが半分",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 2万kmの8分の1。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "20000÷8",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝2500km",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 360度÷24時間。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "＝15度/時間",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "15度で1時間",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 5000km　(2) 2500km",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(3) 1時間",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_22": {
    "caption": "答え　(1) 12海里　(2) 約370km　(3) 航行（通過）",
    "slides": [
      {
        "note": "海の区分。沿岸から、領海と排他的経済水域。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "領海：沿岸から12海里まで",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "排他的経済水域：200海里まで",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1海里＝1.852km",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "領海は主権がおよぶ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 領海は12海里まで",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "12×1.852＝約22km",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "排他的経済水域では、資源が沿岸国のもの。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "水産資源・鉱産資源",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "沿岸国が管理する",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "他国が資源をとるには許可が必要",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 200海里は何kmか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "200×1.852",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝370.4km",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "整数で約370km",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 資源以外は、他国にも自由。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "航行・通過は自由",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "上空を飛ぶのも自由",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "これは公海と同じ",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 12海里",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 約370km",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 航行（通過）",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "12海里と200海里を比べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "12海里＝約22km",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "200海里＝約370km",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "領海は内側の小さな範囲",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_23": {
    "caption": "答え　(1) 10段　(2) 租、稲",
    "slides": [
      {
        "note": "班田収授法。6歳以上に口分田が与えられる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "男子は2段",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "女子は男子の3分の2",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "5歳以下には与えない",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "ある家の人数。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "6歳以上の男子：3人",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "6歳以上の女子：3人",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "5歳の男子：1人",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "男子の分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "2段×3人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝6段",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "女子の分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1人：2×2/3＝4/3段",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "4/3×3人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "＝4段",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "5歳の男子は、口分田がない。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "6歳に満たない",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "与えられるのは6歳以上",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "この子は0段",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1)は合計10段。(2)は租。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 6＋4＝10段",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 租（稲を納める）",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "1人あたりの平均で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "6歳以上の6人で10段",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "男子2段、女子4/3段",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "2×3＋(4/3)×3＝10　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_27": {
    "caption": "答え　ウ→イ→ア→エ",
    "slides": [
      {
        "note": "4つの出来事を、年代順に並べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ア　寛政の改革（松平定信）",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "イ　田沼意次の政治",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "ウ　享保の改革（徳川吉宗）",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "エ　天保の改革（水野忠邦）",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "三大改革の順番。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "享保 → 寛政 → 天保",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1716年　1787年　1841年",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "line",
            "x1": 20,
            "y1": 190,
            "x2": 300,
            "y2": 190,
            "color": "#6E645C",
            "width": 2
          }
        ]
      },
      {
        "note": "まず、享保の改革（ウ）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "徳川吉宗　18世紀前半",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "もっとも早い",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "享保",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1716〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "田沼意次の政治（イ）は、その後。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "享保の改革のあと",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "寛政の改革の前",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "わいろの批判で失脚",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "享保",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1716〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "田沼",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1767〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "寛政の改革（ア）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "田沼のあとを受けた",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "松平定信が倹約を中心に",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "1787年から",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "享保",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1716〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "田沼",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1767〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 200.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 176,
            "text": "寛政",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 212,
            "text": "1787〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "天保の改革（エ）が最後。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "水野忠邦　19世紀なかば",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1841年から",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "享保",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1716〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "田沼",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1767〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 200.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 176,
            "text": "寛政",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 212,
            "text": "1787〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 280.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 176,
            "text": "天保",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 212,
            "text": "1841〜",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "古い順の並び。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ウ → イ → ア → エ",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "享保 → 田沼 → 寛政 → 天保",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_28": {
    "caption": "答え　(1) 陸奥宗光　(2) 小村寿太郎",
    "slides": [
      {
        "note": "幕末の不平等条約。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "領事裁判権を認めた",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "関税自主権がなかった",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "明治政府は改正をめざす",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "line",
            "x1": 20,
            "y1": 190,
            "x2": 300,
            "y2": 190,
            "color": "#6E645C",
            "width": 2
          }
        ]
      },
      {
        "note": "不平等の中身は2つ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "領事裁判権：外国人を日本でさばけない",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "関税自主権：税率を決められない",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "不平等条約",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1858",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "1894年。領事裁判権をなくす。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "イギリスとの条約改正",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "日清戦争の直前",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "外務大臣：陸奥宗光",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "不平等条約",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1858",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 160.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 160.0,
            "y": 176,
            "text": "領事裁判権",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 160.0,
            "y": 212,
            "text": "1894",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "1911年。関税自主権の回復。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "日露戦争のあと",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "条約改正が完成",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "外務大臣：小村寿太郎",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "不平等条約",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1858",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 160.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 160.0,
            "y": 176,
            "text": "領事裁判権",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 160.0,
            "y": 212,
            "text": "1894",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 280.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 176,
            "text": "関税自主権",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 212,
            "text": "1911",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "2人の外務大臣。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 領事裁判権の撤廃：陸奥宗光",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 関税自主権の回復：小村寿太郎",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "順番を確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1894年が先、1911年が後",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "陸奥 → 小村の順",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      },
      {
        "note": "もう一度、条約の中身と人物。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "領事裁判権（1894）：陸奥宗光",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "関税自主権（1911）：小村寿太郎",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_30": {
    "caption": "答え　ア→イ→ウ→エ",
    "slides": [
      {
        "note": "昭和のはじめの4つの出来事。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ア　満州事変",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "イ　五・一五事件",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "ウ　国際連盟脱退",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "エ　二・二六事件",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "年代を思い出す。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "満州事変：1931年",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "五・一五事件：1932年",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "国際連盟脱退：1933年",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 132,
            "w": 280,
            "h": 26,
            "text": "二・二六事件：1936年",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "まず、満州事変（1931年）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "関東軍が柳条湖で線路を爆破",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "満州国をつくる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "満州事変",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1931",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "次に、五・一五事件（1932年）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "犬養毅首相が暗殺される",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "政党内閣の時代が終わる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "満州事変",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1931",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "五・一五",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1932",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "国際連盟脱退（1933年）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "満州国を認められない",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "日本が連盟を脱退",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "満州事変",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1931",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "五・一五",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1932",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 200.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 176,
            "text": "連盟脱退",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 212,
            "text": "1933",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "最後に、二・二六事件（1936年）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "陸軍の青年将校が起こす",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "軍の力が強まる",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
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
            "cx": 40.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 176,
            "text": "満州事変",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 40.0,
            "y": 212,
            "text": "1931",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 120.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 176,
            "text": "五・一五",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 120.0,
            "y": 212,
            "text": "1932",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 200.0,
            "cy": 190,
            "r": 5,
            "color": "#0284C7",
            "fill": "#0284C7"
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 176,
            "text": "連盟脱退",
            "size": 10,
            "color": "#0284C7",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 200.0,
            "y": 212,
            "text": "1933",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          },
          {
            "t": "circle",
            "cx": 280.0,
            "cy": 190,
            "r": 5,
            "color": "#E11D48",
            "fill": "#E11D48"
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 176,
            "text": "二・二六",
            "size": 10,
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "label",
            "x": 280.0,
            "y": 212,
            "text": "1936",
            "size": 10,
            "color": "#6E645C",
            "anchor": "middle"
          }
        ]
      },
      {
        "note": "古い順の並び。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "ア → イ → ウ → エ",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "1931 → 1932 → 1933 → 1936",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_33": {
    "caption": "答え　(1) 10日以内　(2) 40日以内　(3) 30日以内",
    "slides": [
      {
        "note": "衆議院が内閣不信任案を可決した。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "内閣は、どうするか",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "数字がいくつか出てくる",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "10日・40日・30日",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "憲法69条。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "可決から10日以内に",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "解散するか、総辞職する",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 総辞職までの日数。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "解散しないなら",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "10日以内に総辞職",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(1) 10日",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "衆議院を解散したとき（憲法54条）。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "解散の日から40日以内に",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "総選挙を行う",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 総選挙までの日数。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "解散の日から",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "40日以内",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(2) 40日",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 特別会までの日数。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "総選挙の日から",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "30日以内に特別会を召集",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "内閣総理大臣を指名",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 10日以内",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 40日以内",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 30日以内",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_34": {
    "caption": "答え　A党3人、B党2人、C党1人、D党0人",
    "slides": [
      {
        "note": "定数6。得票は A1200、B900、C480、D240。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "比例代表制",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "ドント方式で配分",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "求める：各党の議席数",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "得票を1、2、3…でわる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：1200、600、400、300",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：900、450、300",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "C：480、240　D：240",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "商を大きい順に並べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1200、900、600、480",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "450、400、300、…",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "上から6つを選ぶ",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "6つの商。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1200（A）、900（B）",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "600（A）、480（C）",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "450（B）、400（A）",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "各党の数を数える。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A：1200、600、400 → 3人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "B：900、450 → 2人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "C：480 → 1人　D：0人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "議席の配分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "A党3人、B党2人",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "C党1人、D党0人",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "合計が定数と合うか。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "3＋2＋1＋0＝6",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "7番目は300　選ばれない",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_36": {
    "caption": "答え　(1) 170万円　(2) 約18.9%　(3) 累進課税",
    "slides": [
      {
        "note": "累進課税。課税所得900万円の人。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "300万円以下：10%",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "300万円〜700万円：20%",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "700万円をこえる部分：30%",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "900万円を3つの部分に分ける。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "300万円の部分",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "400万円の部分（300〜700）",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "200万円の部分（700〜900）",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "1つ目の部分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "300×0.10",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝30万円",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "2つ目の部分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "400×0.20",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝80万円",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "3つ目の部分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "200×0.30",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝60万円",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "合計と、税額の割合。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 30＋80＋60＝170万円",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 170÷900＝約18.9%",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 累進課税",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "全体に30%をかけた場合と比べる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "900×0.30＝270万円",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "170万円は270より少ない",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "10%と30%の間の18.9%",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_38": {
    "caption": "答え　(1) 15か国　(2) 9か国　(3) 否決される（拒否権）",
    "slides": [
      {
        "note": "国際連合の安全保障理事会。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "世界の平和と安全を守る機関",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "常任理事国と非常任理事国",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "15か国で構成",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "常任理事国の5か国。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "アメリカ・イギリス・フランス",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "ロシア・中国",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "拒否権をもつ",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 構成する国の数。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "常任理事国：5か国",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "非常任理事国：10か国",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "5＋10＝15か国",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 重要な決議の条件。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "15か国のうち9か国以上の賛成",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "常任理事国の反対がないこと",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(3) 常任理事国の拒否権。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1か国でも反対すると",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "決議は成立しない",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "大国の協力が必要",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "3つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 15か国",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 9か国",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(3) 否決される（拒否権）",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "数を確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "5＋10＝15",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "過半数は8。必要なのは9",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "8では足りない",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_39": {
    "caption": "答え　(1) 団結権・団体交渉権・団体行動権（争議権）　(2) 3000円",
    "slides": [
      {
        "note": "労働者の権利と、時間外の賃金。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "労働三権",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "法定労働時間をこえた労働",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "割増賃金25%以上",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "労働三権の3つ。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "団結権：組合をつくる",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "団体交渉権：使用者と交渉",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "団体行動権：ストライキなど",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "労働基準法の決まり。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "法定労働時間：1日8時間",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "これをこえると割増賃金",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "通常の賃金の25%以上",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 割増後の時給。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1200×1.25",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝1500円",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 2時間分。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1500×2",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝3000円",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "2つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 団結権・団体交渉権",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "　　団体行動権（争議権）",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "(2) 3000円",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "割増分で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "1200×0.25＝300円",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "300×2＝600円",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "2400＋600＝3000円　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  },
  "honshiken_school_koko_rakunan_shakai_40": {
    "caption": "答え　(1) 600人　(2) 10000人",
    "slides": [
      {
        "note": "有権者3万人の町。直接請求。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "条例の制定を求める",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "議会の解散を求める",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "必要な署名の数は？",
            "color": "#6E645C",
            "fill": "#F1EFEA",
            "size": 13
          }
        ]
      },
      {
        "note": "請求の内容で、割合がちがう。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "条例の制定・改廃：50分の1",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "議会の解散・解職：3分の1",
            "color": "#9333EA",
            "fill": "#F3E8FF",
            "size": 13
          }
        ]
      },
      {
        "note": "重い請求ほど、多くの署名が必要。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "条例の制定：比較的軽い",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "議会の解散：議員の地位をうばう",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 100,
            "w": 280,
            "h": 26,
            "text": "だから割合が大きい",
            "color": "#0284C7",
            "fill": "#E0F2FE",
            "size": 13
          }
        ]
      },
      {
        "note": "(1) 条例の制定。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "30000÷50",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝600人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "(2) 議会の解散。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "30000÷3",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "＝10000人",
            "color": "#16A34A",
            "fill": "#DCFCE7",
            "size": 13
          }
        ]
      },
      {
        "note": "2つの答え。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#B5622E",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "(1) 600人",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "(2) 10000人",
            "color": "#B5622E",
            "fill": "#FEF9C3",
            "size": 13
          }
        ]
      },
      {
        "note": "割合で確かめる。",
        "add": [
          {
            "t": "box",
            "x": 0,
            "y": 0,
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
            "color": "#E11D48",
            "anchor": "middle",
            "bold": true
          },
          {
            "t": "box",
            "x": 20,
            "y": 36,
            "w": 280,
            "h": 26,
            "text": "600÷30000＝1/50",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          },
          {
            "t": "box",
            "x": 20,
            "y": 68,
            "w": 280,
            "h": 26,
            "text": "10000÷30000＝1/3　一致",
            "color": "#E11D48",
            "fill": "#FFE4E6",
            "size": 13
          }
        ]
      }
    ]
  }
};

export const figuresHonshikenSchool_koko_rakunan_B: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
