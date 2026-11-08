// 立命館高校・立命館宇治高校・立命館守山高校の入試対策（社会40問）の動く図解。各問、状況→手がかり→理由→考え方・計算→答え→確かめ→まちがい の流れ（7枚以上）。座標は 320×240。
import type { Figure } from './figures';
import { show, type Slide } from './diagram-kit';

const D: Record<string, { slides: unknown; caption: string }> = {
 "ritsumeikan_koko_shakai_01": {
  "caption": "答え　ウェリントン（ニュージーランド）",
  "slides": [
   {
    "note": "問題の状況を整理する。気温が高い月と低い月が、日本とは逆になる都市を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "12月〜2月がいちばん暑く、6月〜8月がいちば\nん寒い都市はどれ？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。手がかり：日本とは暑い月と寒い月が逆／ウェリントンは南緯41度、ほかの3つは北半球",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "手がかり：日本とは暑い月と寒い月が逆",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "ウェリントンは南緯41度、ほかの3つは北半球",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：地軸がかたむいたまま公転するので、12月ごろは南半球が太陽の光を強く受けて夏になる。だから季節が逆になるのは南半球。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "地軸がかたむいたまま公転するので、12月ごろは南\n半球が太陽の光を強く受けて夏になる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "だから季節が逆になるのは南半球。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：北半球の都市（ロンドン・カイロ・北京）は6月〜8月が夏。→南半球のウェリントンは12月〜2月が夏。→特徴に合うのはウェリントンだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "北半球の都市（ロンドン・カイロ・北京）は6月〜8\n月が夏。",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 80,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 81,
      "w": 300,
      "h": 24,
      "text": "南半球のウェリントンは12月〜2月が夏。",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 106,
      "x2": 160,
      "y2": 116,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 117,
      "w": 300,
      "h": 24,
      "text": "特徴に合うのはウェリントンだけ。",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：ウェリントン（ニュージーランド）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "ウェリントン（ニュージーランド）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：ウェリントンの7月は冬。12月が夏になる国として知られるニュージーランドとも合う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "ウェリントンの7月は冬。12月が夏になる国として\n知られるニュージーランドとも合う。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：赤道に近いからカイロ、と考えない。南北どちらの半球かで季節が逆になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "赤道に近いからカイロ、と考えない。南北どちらの\n半球かで季節が逆になる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_02": {
  "caption": "答え　1月15日午前10時",
  "slides": [
   {
    "note": "問題の状況を整理する。日本を出発した時刻と飛行時間から、到着地の現地時刻を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 57,
      "text": "成田を1月15日18時に出発。9時間飛んでロサン\nゼルス（西経120度）に着陸。現地は何月何日\nの何時？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。日本：東経135度　ロサンゼルス：西経120度／飛行時間：9時間／15度で1時間の時差",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "日本：東経135度　ロサンゼルス：西経120度",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "飛行時間：9時間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 94,
      "w": 300,
      "h": 24,
      "text": "15度で1時間の時差",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：東経と西経は本初子午線の反対側にある。だから経度の差は足し算。東ほど時刻が進むので、ロスは日本よりおそい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "東経と西経は本初子午線の反対側にある。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "だから経度の差は足し算。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 94,
      "w": 300,
      "h": 24,
      "text": "東ほど時刻が進むので、ロスは日本よりおそい。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：経度差　135＋120＝255度→時差　255÷15＝17時間→ロスの出発時刻　18−17＝1時（1月15日午前1時）→到着　1＋9＝10時",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "経度差　135＋120＝255度",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "時差　255÷15＝17時間",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "ロスの出発時刻　18−17＝1時（1月15日午前1時）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "到着　1＋9＝10時",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：1月15日午前10時",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "1月15日午前10時",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：日本時間で考える。1月16日午前3時から17時間もどすと、1月15日午前10時。一致する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "日本時間で考える。1月16日午前3時から17時間もど\nすと、1月15日午前10時。一致する。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：135−120と引き算しない。飛行時間も足し忘れない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "135−120と引き算しない。飛行時間も足し忘れない\n。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_03": {
  "caption": "答え　15分",
  "slides": [
   {
    "note": "問題の状況を整理する。地形図上の長さから実際の距離を求め、歩く時間を計算する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "2万5千分の1の地形図で、A地点〜B地点は4.8c\nm。分速80mで歩くと何分？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。縮尺　25000分の1／図上の長さ　4.8cm／歩く速さ　分速80m",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "縮尺　25000分の1",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "図上の長さ　4.8cm",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 94,
      "w": 300,
      "h": 24,
      "text": "歩く速さ　分速80m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：25000分の1に縮めてあるので、図上の長さに25000をかけると実際の長さ。時間は、道のり÷速さ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "25000分の1に縮めてあるので、図上の長さに25000\nをかけると実際の長さ。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "時間は、道のり÷速さ。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：実際の距離　4.8×25000＝120000cm→cmをmに　120000÷100＝1200m→時間　1200÷80＝15分",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "実際の距離　4.8×25000＝120000cm",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "cmをmに　120000÷100＝1200m",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "時間　1200÷80＝15分",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：15分",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "15分",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：80m×15分＝1200m。1200m＝120000cm、25000でわると4.8cmで図上の長さと一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "80m×15分＝1200m。1200m＝120000cm、25000で\nわると4.8cmで図上の長さと一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：cmのまま80でわらない。1m＝100cmで単位をそろえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "cmのまま80でわらない。1m＝100cmで単位をそろえ\nる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_04": {
  "caption": "答え　抑制栽培",
  "slides": [
   {
    "note": "問題の状況を整理する。高原の涼しさを生かして、出荷時期をずらす栽培方法の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "夏でもすずしい群馬県・嬬恋村で、夏にキャベ\nツを出荷する栽培方法は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。高原のすずしい気候／平地の産地が出荷できない夏に出す",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "高原のすずしい気候",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "平地の産地が出荷できない夏に出す",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：産地が重なると値段が下がる。出荷の少ない時期に出せば高く売れるので、成長や出荷をおくらせる工夫をする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "産地が重なると値段が下がる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 39,
      "text": "出荷の少ない時期に出せば高く売れるので、成長や\n出荷をおくらせる工夫をする。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：早める栽培＝促成栽培（宮崎・高知）→おくらせる栽培＝抑制栽培（嬬恋・野辺山原）→嬬恋村は夏に出荷する → 抑制",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "早める栽培＝促成栽培（宮崎・高知）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "おくらせる栽培＝抑制栽培（嬬恋・野辺山原）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "嬬恋村は夏に出荷する → 抑制",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：抑制栽培",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "抑制栽培",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：促成は冬もあたたかい地方、抑制はすずしい高原。今回は高原なので抑制。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "促成は冬もあたたかい地方、抑制はすずしい高原。\n今回は高原なので抑制。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：早く出す促成栽培とまちがえない。夏にずらすのが抑制。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "早く出す促成栽培とまちがえない。夏にずらすのが\n抑制。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_05": {
  "caption": "答え　中京工業地帯",
  "slides": [
   {
    "note": "問題の状況を整理する。工業地帯・工業地域の中で、製造品出荷額等が最大のものを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "日本で製造品出荷額等がいちばん多い工業地帯\nは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。京浜・中京・阪神・北九州の4つ／自動車の生産が日本一の県をふくむのは？",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "京浜・中京・阪神・北九州の4つ",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "自動車の生産が日本一の県をふくむのは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：自動車は部品が多く、関連工場の生産額も加わる。愛知県に自動車工場が集まるので、輸送用機械の割合が高くなる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "自動車は部品が多く、関連工場の生産額も加わる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 39,
      "text": "愛知県に自動車工場が集まるので、輸送用機械の割\n合が高くなる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：京浜：東京・神奈川→中京：愛知・三重（自動車）→阪神：大阪・兵庫　北九州：福岡→出荷額が最大なのは中京",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "京浜：東京・神奈川",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "中京：愛知・三重（自動車）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "阪神：大阪・兵庫　北九州：福岡",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "出荷額が最大なのは中京",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：中京工業地帯",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "中京工業地帯",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：ほかの3つは、自動車に特化した中京より出荷額が少ない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "ほかの3つは、自動車に特化した中京より出荷額が\n少ない。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：大都市のイメージで京浜や阪神を選ばない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "大都市のイメージで京浜や阪神を選ばない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_06": {
  "caption": "答え　2.5％",
  "slides": [
   {
    "note": "問題の状況を整理する。5年間の人口の減少率（減った割合）を、百分率で求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "2020年：126,146,099人　2025年：122,972,\n528人。人口は何％減った？（小数第1位まで）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。国勢調査は5年ごと／もとにする量＝古いほう（2020年）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "国勢調査は5年ごと",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "もとにする量＝古いほう（2020年）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：割合＝くらべる量÷もとにする量。もとになるのは、変化する前の2020年の人口。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "割合＝くらべる量÷もとにする量。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "もとになるのは、変化する前の2020年の人口。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：減った人数　126,146,099−122,972,528＝3,173,571人→減少率　3,173,571÷126,146,099＝約0.02516→百分率に　約2.516％→小数第1位まで　2.5％",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "減った人数　126,146,099−122,972,528＝3,173\n,571人",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 80,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 81,
      "w": 300,
      "h": 24,
      "text": "減少率　3,173,571÷126,146,099＝約0.02516",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 106,
      "x2": 160,
      "y2": 116,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 117,
      "w": 300,
      "h": 24,
      "text": "百分率に　約2.516％",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 142,
      "x2": 160,
      "y2": 152,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 153,
      "w": 300,
      "h": 24,
      "text": "小数第1位まで　2.5％",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：2.5％",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "2.5％",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：126,146,099×0.025≒3,153,652人で、実際の減少3,173,571人にほぼ一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "126,146,099×0.025≒3,153,652人で、実際の減\n少3,173,571人にほぼ一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：2025年の人口で割らない。もとにする量は2020年。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "2025年の人口で割らない。もとにする量は2020年\n。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_07": {
  "caption": "答え　イ→ウ→ア→エ",
  "slides": [
   {
    "note": "問題の状況を整理する。4つの世界遺産が登録された年を、古い順に並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 57,
      "text": "世界遺産を登録された年の古い順に。ア佐渡島\nの金山　イ百舌鳥・古市古墳群　ウ縄文遺跡群\n　エ飛鳥・藤原の宮都",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。問われているのは「登録された年」／遺産ができた時代ではない",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "問われているのは「登録された年」",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "遺産ができた時代ではない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：世界遺産委員会が毎年夏に登録を決める。縄文が古い時代でも、登録は2021年。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "世界遺産委員会が毎年夏に登録を決める。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "縄文が古い時代でも、登録は2021年。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：イ　百舌鳥・古市古墳群　2019年→ウ　縄文遺跡群　2021年→ア　佐渡島の金山　2024年→エ　飛鳥・藤原の宮都　2026年7月",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "イ　百舌鳥・古市古墳群　2019年",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "ウ　縄文遺跡群　2021年",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "ア　佐渡島の金山　2024年",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "エ　飛鳥・藤原の宮都　2026年7月",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：イ→ウ→ア→エ",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "イ→ウ→ア→エ",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：2019＜2021＜2024＜2026の順。選択肢で合うのはイ→ウ→ア→エ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "2019＜2021＜2024＜2026の順。選択肢で合うのは\nイ→ウ→ア→エ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：遺産ができた時代の古さで並べない。登録年で並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "遺産ができた時代の古さで並べない。登録年で並べ\nる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_08": {
  "caption": "答え　インド",
  "slides": [
   {
    "note": "問題の状況を整理する。赤道（緯度0度）が国土を通らない国を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "赤道が通らない国は？　インド・インドネシア\n・ケニア・ブラジル",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。赤道＝緯度0度／南アメリカ・アフリカ・東南アジアの島々を通る",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "赤道＝緯度0度",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "南アメリカ・アフリカ・東南アジアの島々を通る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：国土が北半球だけ、または南半球だけにあれば赤道は通らない。インドは北緯7度〜37度。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "国土が北半球だけ、または南半球だけにあれば赤道\nは通らない。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "インドは北緯7度〜37度。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：ブラジル　北部を通る→ケニア　国土の中央を通る→インドネシア　スマトラ島・ボルネオ島を通る→インド　北半球だけ → 通らない",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "ブラジル　北部を通る",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "ケニア　国土の中央を通る",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "インドネシア　スマトラ島・ボルネオ島を通る",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "インド　北半球だけ → 通らない",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：インド",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "インド",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：インドは世界地図で赤道よりずっと北にある。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "インドは世界地図で赤道よりずっと北にある。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：アジアだから通らない、と決めつけない。インドネシアは赤道直下。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "アジアだから通らない、と決めつけない。インドネ\nシアは赤道直下。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_09": {
  "caption": "答え　暖流の北大西洋海流と偏西風の影響",
  "slides": [
   {
    "note": "問題の状況を整理する。高緯度なのに冬があまり寒くない、ヨーロッパ西部の気候の理由を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "ロンドン（北緯51度）は北海道の最北端より北\nにあるのに、冬があまり寒くない。なぜ？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。ヨーロッパの西の海には暖流がある／中緯度では偏西風が西から東へ吹く",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "ヨーロッパの西の海には暖流がある",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "中緯度では偏西風が西から東へ吹く",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：暖流が空気をあたためる。偏西風が暖かい空気を大陸の西岸へ運ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "暖流が空気をあたためる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "偏西風が暖かい空気を大陸の西岸へ運ぶ。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：沖合に北大西洋海流（暖流）が流れる→偏西風が西から吹いてくる→暖かい空気が運ばれ、冬も氷点下になりにくい",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "沖合に北大西洋海流（暖流）が流れる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "偏西風が西から吹いてくる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "暖かい空気が運ばれ、冬も氷点下になりにくい",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：暖流の北大西洋海流と偏西風の影響",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "暖流の北大西洋海流と偏西風の影響",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：リマン海流は日本海の寒流、季節風はアジアの話。ロンドンの説明にはならない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "リマン海流は日本海の寒流、季節風はアジアの話。\nロンドンの説明にはならない。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：暖流だけ、偏西風だけで終わらない。両方を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "暖流だけ、偏西風だけで終わらない。両方を答える\n。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_10": {
  "caption": "答え　韓国",
  "slides": [
   {
    "note": "問題の状況を整理する。東南アジアの国ではない国を、ASEANの加盟国から外れる国として選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "ASEAN（東南アジア諸国連合）に入っていない\n国は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。ASEANは東南アジアの組織／1967年に5か国で結成、現在は11か国",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "ASEANは東南アジアの組織",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "1967年に5か国で結成、現在は11か国",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：東南アジアの国々が、経済や安全保障で協力するための組織。東アジアの国は加盟国ではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "東南アジアの国々が、経済や安全保障で協力するた\nめの組織。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "東アジアの国は加盟国ではない。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：タイ・ベトナム・フィリピン → 東南アジア（加盟）→韓国 → 東アジア（加盟国ではない）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "タイ・ベトナム・フィリピン → 東南アジア（加盟\n）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 80,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 81,
      "w": 300,
      "h": 24,
      "text": "韓国 → 東アジア（加盟国ではない）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：韓国",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "韓国",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：地図で見ると、韓国は朝鮮半島の南で東南アジアではない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "地図で見ると、韓国は朝鮮半島の南で東南アジアで\nはない。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：アジアの国全部が加盟していると思わない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "アジアの国全部が加盟していると思わない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_11": {
  "caption": "答え　モノカルチャー経済。国際価格が下がると収入が減り、不安定になる。",
  "slides": [
   {
    "note": "問題の状況を整理する。特定の産物にたよる経済の名前と、その弱点を価格の面から説明する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "カカオや銅の輸出にたよるアフリカの国が多い\n。この経済の名前と、不安定な理由は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。特定の農産物・鉱産資源の輸出にたよる／説明には「価格」を使う",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "特定の農産物・鉱産資源の輸出にたよる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "説明には「価格」を使う",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：国際価格は天候や景気で変わる。収入の中心の産物の価格が下がると、国全体の収入が減る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "国際価格は天候や景気で変わる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 39,
      "text": "収入の中心の産物の価格が下がると、国全体の収入\nが減る。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：名前：モノカルチャー経済→国際価格が下がる→輸出しても収入が減り、経済が不安定に",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "名前：モノカルチャー経済",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "国際価格が下がる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "輸出しても収入が減り、経済が不安定に",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：モノカルチャー経済。国際価格が下がると収入が減り、不安定になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "モノカルチャー経済。国際価格が下がると収\n入が減り、不安定になる。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：名前と「価格が変動すると収入が不安定」の2点がそろっている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "名前と「価格が変動すると収入が不安定」の2点が\nそろっている。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：価格にふれずに「貧しいから」と書かない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "価格にふれずに「貧しいから」と書かない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_12": {
  "caption": "答え　夏は四国山地、冬は中国山地が季節風をさえぎるから",
  "slides": [
   {
    "note": "問題の状況を整理する。瀬戸内地方で降水量が少ない理由を、地形と季節風から説明した文を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "瀬戸内地方は一年中雨が少ない。その理由は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。北に中国山地、南に四国山地／季節風は山をこえるときに雨や雪を降らせる",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "北に中国山地、南に四国山地",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "季節風は山をこえるときに雨や雪を降らせる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：湿った風は山の手前で雨や雪を降らせる。山をこえた風は水分を失って、かわいた風になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "湿った風は山の手前で雨や雪を降らせる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "山をこえた風は水分を失って、かわいた風になる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：夏：南東の季節風 → 四国山地でさえぎられる→冬：北西の季節風 → 中国山地でさえぎられる→どちらもかわいた風になり、一年中雨が少ない",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "夏：南東の季節風 → 四国山地でさえぎられる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "冬：北西の季節風 → 中国山地でさえぎられる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "どちらもかわいた風になり、一年中雨が少ない",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：夏は四国山地、冬は中国山地が季節風をさえぎるから",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "夏は四国山地、冬は中国山地が季節風をさえ\nぎるから",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：黒潮では説明できない。夏の風は届くが山でさえぎられるだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "黒潮では説明できない。夏の風は届くが山でさえぎ\nられるだけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：夏だけで説明しない。冬の北西の季節風も入れる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "夏だけで説明しない。冬の北西の季節風も入れる。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_13": {
  "caption": "答え　黒潮（日本海流）と親潮（千島海流）",
  "slides": [
   {
    "note": "問題の状況を整理する。東北地方の太平洋側の沖でぶつかる、暖流と寒流の名前を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "三陸海岸の沖でぶつかる暖流と寒流は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。三陸海岸は東北の太平洋側／太平洋側の海流は黒潮と親潮",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "三陸海岸は東北の太平洋側",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "太平洋側の海流は黒潮と親潮",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：暖流と寒流がぶつかる潮目には、プランクトンと魚が集まる。だから好漁場になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "暖流と寒流がぶつかる潮目には、プランクトンと魚\nが集まる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "だから好漁場になる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：太平洋側：黒潮（暖）と親潮（寒）→日本海側：対馬海流（暖）とリマン海流（寒）→三陸沖は太平洋側 → 黒潮と親潮",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "太平洋側：黒潮（暖）と親潮（寒）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "日本海側：対馬海流（暖）とリマン海流（寒）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "三陸沖は太平洋側 → 黒潮と親潮",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：黒潮（日本海流）と親潮（千島海流）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "黒潮（日本海流）と親潮（千島海流）",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：三陸沖は太平洋側なので、日本海側の海流は関係しない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "三陸沖は太平洋側なので、日本海側の海流は関係し\nない。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：太平洋側と日本海側の海流を混ぜない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "太平洋側と日本海側の海流を混ぜない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_14": {
  "caption": "答え　約370km",
  "slides": [
   {
    "note": "問題の状況を整理する。200海里を、kmの単位になおす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "排他的経済水域は沿岸から200海里。1海里＝18\n52mとして、約何km？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。200海里／1海里＝1852m",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "200海里",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "1海里＝1852m",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：海里は船や飛行機で使う長さの単位。m→kmは1000でわる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "海里は船や飛行機で使う長さの単位。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "m→kmは1000でわる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：200×1852＝370400m→370400÷1000＝370.4km→約370km",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "200×1852＝370400m",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "370400÷1000＝370.4km",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "約370km",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：約370km",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "約370km",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：1海里≒1.85kmで計算すると、200×1.85＝370km。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "1海里≒1.85kmで計算すると、200×1.85＝370km\n。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：1海里＝1kmとしない。桁にも注意。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1海里＝1kmとしない。桁にも注意。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_15": {
  "caption": "答え　稲作が伝わり、米をたくわえて、むらどうしの争いが起こった。",
  "slides": [
   {
    "note": "問題の状況を整理する。4つの文から、弥生時代にあてはまるものを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "弥生時代のようすについて正しい文はどれ？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。弥生時代＝稲作と金属器が大陸から伝わった／吉野ヶ里遺跡：争いにそなえたむら",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "弥生時代＝稲作と金属器が大陸から伝わった",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "吉野ヶ里遺跡：争いにそなえたむら",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：米をたくわえると、米や水田、水をめぐる争いが起こる。むらをまとめる指導者が現れた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "米をたくわえると、米や水田、水をめぐる争いが起\nこる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "むらをまとめる指導者が現れた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：稲作・米のたくわえ・争い → 弥生→打製石器・ナウマンゾウ → 旧石器→前方後円墳 → 古墳→国分寺 → 奈良時代",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "稲作・米のたくわえ・争い → 弥生",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "打製石器・ナウマンゾウ → 旧石器",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "前方後円墳 → 古墳",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "国分寺 → 奈良時代",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：稲作が伝わり、米をたくわえて、むらどうしの争いが起こった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "稲作が伝わり、米をたくわえて、むらどうし\nの争いが起こった。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：旧石器→弥生→古墳→奈良の順に並べると、弥生にあたるのは1つだけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "旧石器→弥生→古墳→奈良の順に並べると、弥生に\nあたるのは1つだけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：争いがあったから戦国時代、と考えない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "争いがあったから戦国時代、と考えない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_16": {
  "caption": "答え　家柄にかかわらず、能力や功績のある人を取り立てるため",
  "slides": [
   {
    "note": "問題の状況を整理する。冠位十二階の目的を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "603年の冠位十二階の目的は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。冠の色で12の位を区別／有力豪族が家柄で地位を独占していた",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "冠の色で12の位を区別",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "有力豪族が家柄で地位を独占していた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：家柄ではなく能力や功績で位をあたえれば、天皇中心の政治をすすめやすい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "家柄ではなく能力や功績で位をあたえれば、天皇中\n心の政治をすすめやすい。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：冠位十二階（603年）＝人材登用→十七条の憲法（604年）＝役人の心構え→遣隋使（607年）＝大陸の文化を学ぶ→公地公民（645年）＝土地と人民を国家のものに",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "冠位十二階（603年）＝人材登用",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "十七条の憲法（604年）＝役人の心構え",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "遣隋使（607年）＝大陸の文化を学ぶ",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "公地公民（645年）＝土地と人民を国家のものに",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：家柄にかかわらず、能力や功績のある人を取り立てるため",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "家柄にかかわらず、能力や功績のある人を取\nり立てるため",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：4つの政策を年代と目的で整理すると、人材登用は冠位十二階だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "4つの政策を年代と目的で整理すると、人材登用は\n冠位十二階だけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：十七条の憲法（心構え）と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "十七条の憲法（心構え）と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_17": {
  "caption": "答え　荘園",
  "slides": [
   {
    "note": "問題の状況を整理する。墾田永年私財法のあとに広がった、貴族・寺社の私有地の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "743年の墾田永年私財法で、開墾した土地の私\n有が認められた。のちに広がった私有地は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。743年　墾田永年私財法／貴族や寺社が開墾地を広げた",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "743年　墾田永年私財法",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "貴族や寺社が開墾地を広げた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：口分田が足りなくなり、田が荒れた。開墾をすすめるため、私有を認めた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "口分田が足りなくなり、田が荒れた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "開墾をすすめるため、私有を認めた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：班田収授法：田は国のもの（口分田）→743年　開墾した土地の私有を認める→貴族・寺社が開墾地を広げる→→ 荘園",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "班田収授法：田は国のもの（口分田）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "743年　開墾した土地の私有を認める",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "貴族・寺社が開墾地を広げる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "→ 荘園",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：荘園",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "荘園",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：公地公民がくずれ、私有地の荘園が広がったという流れに合う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "公地公民がくずれ、私有地の荘園が広がったという\n流れに合う。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：口分田（国が貸す田）や公領と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "口分田（国が貸す田）や公領と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_18": {
  "caption": "答え　娘を天皇のきさきにし、天皇の祖父（外戚）となって実権をにぎった",
  "slides": [
   {
    "note": "問題の状況を整理する。摂関政治の特徴と、藤原氏が権力をにぎったしくみを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "藤原道長が摂関政治で権力をにぎった方法は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。摂政・関白は天皇に代わって政治を行う役／天皇の外戚（母方の親せき）になる",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "摂政・関白は天皇に代わって政治を行う役",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "天皇の外戚（母方の親せき）になる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：幼い天皇の祖父なら、天皇を思いどおりに動かせる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "幼い天皇の祖父なら、天皇を思いどおりに動かせる\n。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：娘を天皇のきさきにする→生まれた子を天皇にする→祖父として摂政・関白になる→院政は上皇、平氏は太政大臣で別の政治",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "娘を天皇のきさきにする",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "生まれた子を天皇にする",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "祖父として摂政・関白になる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "院政は上皇、平氏は太政大臣で別の政治",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：娘を天皇のきさきにし、天皇の祖父（外戚）となって実権をにぎった",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "娘を天皇のきさきにし、天皇の祖父（外戚）\nとなって実権をにぎった",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：院政・平氏政権・鎌倉幕府はいずれも摂関政治のあとの時代。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "院政・平氏政権・鎌倉幕府はいずれも摂関政治のあ\nとの時代。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：院政（上皇の政治）と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "院政（上皇の政治）と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_19": {
  "caption": "答え　六波羅探題",
  "slides": [
   {
    "note": "問題の状況を整理する。承久の乱のあとに、幕府が京都に置いた機関の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "承久の乱のあと、幕府が京都に置いて朝廷を監\n視した機関は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。1221年　承久の乱／幕府が勝った",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1221年　承久の乱",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "幕府が勝った",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：朝廷がまた幕府にさからわないよう、京都に役所を置いて見はらせた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "朝廷がまた幕府にさからわないよう、京都に役所を\n置いて見はらせた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：鎌倉：侍所・政所・問注所→各地：守護・地頭→承久の乱のあと、京都に置く → 六波羅探題→江戸幕府の京都所司代とは別",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "鎌倉：侍所・政所・問注所",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "各地：守護・地頭",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "承久の乱のあと、京都に置く → 六波羅探題",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "江戸幕府の京都所司代とは別",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：六波羅探題",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "六波羅探題",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：「京都で朝廷を監視」にあたる鎌倉幕府の機関は、六波羅探題だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "「京都で朝廷を監視」にあたる鎌倉幕府の機関は、\n六波羅探題だけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：江戸時代の京都所司代と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "江戸時代の京都所司代と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_20": {
  "caption": "答え　足利義政",
  "slides": [
   {
    "note": "問題の状況を整理する。応仁の乱のころの将軍で、銀閣を建てた人物を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "応仁の乱（1467年）のころの将軍で、銀閣を建\nてた人物は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。応仁の乱　1467〜1477年／銀閣は東山に建てられた",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "応仁の乱　1467〜1477年",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "銀閣は東山に建てられた",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：将軍のあとつぎ問題に守護大名の対立がからんで、争いが全国に広がった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "将軍のあとつぎ問題に守護大名の対立がからんで、\n争いが全国に広がった。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：3代将軍　足利義満：金閣（北山文化）→8代将軍　足利義政：銀閣（東山文化）→応仁の乱は1467年 → 義政",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "3代将軍　足利義満：金閣（北山文化）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "8代将軍　足利義政：銀閣（東山文化）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "応仁の乱は1467年 → 義政",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：足利義政",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "足利義政",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：義満は1408年に亡くなっている。1467年なら義政。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "義満は1408年に亡くなっている。1467年なら義政\n。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：金閣（義満）と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "金閣（義満）と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_21": {
  "caption": "答え　兵農分離",
  "slides": [
   {
    "note": "問題の状況を整理する。太閤検地と刀狩の結果起こった、身分の区別の変化を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "太閤検地と刀狩のあと、武士と百姓の身分が区\n別された。この変化は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。太閤検地：耕す百姓を検地帳に登録／刀狩：百姓から武器を取り上げる",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "太閤検地：耕す百姓を検地帳に登録",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "刀狩：百姓から武器を取り上げる",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：百姓は耕作に専念、武士は政治と軍事を受け持つ。役割がはっきり分かれた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "百姓は耕作に専念、武士は政治と軍事を受け持つ。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "役割がはっきり分かれた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：太閤検地 → 百姓の登録→刀狩 → 武器を取り上げる→兵（武士）と農（百姓）が分かれる",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "太閤検地 → 百姓の登録",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "刀狩 → 武器を取り上げる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "兵（武士）と農（百姓）が分かれる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：兵農分離",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "兵農分離",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：兵と農が分かれた、という名前と政策の内容が合う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "兵と農が分かれた、という名前と政策の内容が合う\n。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：信長の楽市・楽座と混ぜない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "信長の楽市・楽座と混ぜない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_22": {
  "caption": "答え　北国街道",
  "slides": [
   {
    "note": "問題の状況を整理する。五街道にふくまれない街道を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "日本橋を起点とする五街道にふくまれない街道\nは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。参勤交代のため、街道が整備された／五街道は幕府の直轄",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "参勤交代のため、街道が整備された",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "五街道は幕府の直轄",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：大名が行き来する道には、宿場や問屋が発達した。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "大名が行き来する道には、宿場や問屋が発達した。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：五街道：東海道・中山道・日光街道・奥州街道・甲州街道→東海道・中山道・日光街道は五街道→北国街道は脇街道",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "五街道：東海道・中山道・日光街道・奥州街道・甲\n州街道",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 70,
      "x2": 160,
      "y2": 80,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 81,
      "w": 300,
      "h": 24,
      "text": "東海道・中山道・日光街道は五街道",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 106,
      "x2": 160,
      "y2": 116,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 117,
      "w": 300,
      "h": 24,
      "text": "北国街道は脇街道",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：北国街道",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "北国街道",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：3つが五街道なので、残りの北国街道が五街道以外。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "3つが五街道なので、残りの北国街道が五街道以外\n。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：北国街道と奥州街道を取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "北国街道と奥州街道を取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_23": {
  "caption": "答え　朝鮮",
  "slides": [
   {
    "note": "問題の状況を整理する。江戸時代の4つの窓口のうち、対馬藩が受け持った相手を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "江戸時代、対馬藩が窓口となって交流した相手\nは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。長崎・対馬・薩摩・松前の4つの窓口／対馬は朝鮮半島に近い",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "長崎・対馬・薩摩・松前の4つの窓口",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "対馬は朝鮮半島に近い",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：秀吉の朝鮮出兵のあと、対馬藩が国交回復に努めた。朝鮮通信使が江戸を訪れた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "秀吉の朝鮮出兵のあと、対馬藩が国交回復に努めた\n。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "朝鮮通信使が江戸を訪れた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：長崎：オランダ・中国→対馬藩：朝鮮→薩摩藩：琉球王国→松前藩：アイヌ民族",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "長崎：オランダ・中国",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "対馬藩：朝鮮",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "薩摩藩：琉球王国",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "松前藩：アイヌ民族",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：朝鮮",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "朝鮮",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：対馬は朝鮮半島に近い。位置関係とも合う。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "対馬は朝鮮半島に近い。位置関係とも合う。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：薩摩藩（琉球王国）と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "薩摩藩（琉球王国）と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_24": {
  "caption": "答え　小村寿太郎",
  "slides": [
   {
    "note": "問題の状況を整理する。関税自主権の回復に成功した外務大臣の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "1911年、関税自主権の回復に成功した外務大臣\nは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。不平等条約：領事裁判権を認め、関税自主権がない／1894年は陸奥宗光",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "不平等条約：領事裁判権を認め、関税自主権がない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "1894年は陸奥宗光",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：関税自主権は、輸入品に自由に関税をかける権利。これがなかったので、国内の産業が守れなかった。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "関税自主権は、輸入品に自由に関税をかける権利。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "これがなかったので、国内の産業が守れなかった。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：1894年　陸奥宗光：領事裁判権の撤廃→1911年　小村寿太郎：関税自主権の回復",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1894年　陸奥宗光：領事裁判権の撤廃",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "1911年　小村寿太郎：関税自主権の回復",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：小村寿太郎",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "小村寿太郎",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：領事裁判権（1894年・陸奥宗光）が先、関税自主権（1911年・小村寿太郎）があと。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "領事裁判権（1894年・陸奥宗光）が先、関税自主権\n（1911年・小村寿太郎）があと。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：陸奥宗光と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "陸奥宗光と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_25": {
  "caption": "答え　八幡製鉄所",
  "slides": [
   {
    "note": "問題の状況を整理する。下関条約の賠償金の一部で建てられた官営の製鉄所の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "下関条約の賠償金の一部で、1901年に操業を始\nめた官営の製鉄所は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。日清戦争のあと、1895年に下関条約／福岡県・筑豊炭田の近く",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "日清戦争のあと、1895年に下関条約",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "福岡県・筑豊炭田の近く",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：製鉄には石炭と鉄鉱石が必要。近くに炭田があり、鉄鉱石も輸入しやすい場所が選ばれた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "製鉄には石炭と鉄鉱石が必要。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 39,
      "text": "近くに炭田があり、鉄鉱石も輸入しやすい場所が選\nばれた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：日清戦争に勝つ → 賠償金→賠償金の一部で、官営の製鉄所を建てる→筑豊炭田が近い福岡県に→1901年に操業開始",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "日清戦争に勝つ → 賠償金",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "賠償金の一部で、官営の製鉄所を建てる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "筑豊炭田が近い福岡県に",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "1901年に操業開始",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：八幡製鉄所",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "八幡製鉄所",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：福岡県・官営・1901年・筑豊炭田がそろうのは八幡製鉄所だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "福岡県・官営・1901年・筑豊炭田がそろうのは八幡\n製鉄所だけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：富岡製糸場（群馬県・製糸）と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "富岡製糸場（群馬県・製糸）と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_26": {
  "caption": "答え　満25歳以上のすべての男子",
  "slides": [
   {
    "note": "問題の状況を整理する。普通選挙法で選挙権をもつようになった人の条件を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "1925年の普通選挙法で選挙権を得たのは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。普通選挙＝納税額で制限しない選挙／女性の選挙権は戦後",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "普通選挙＝納税額で制限しない選挙",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "女性の選挙権は戦後",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：納税額の条件がなくなり、有権者が大きく増えた。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "納税額の条件がなくなり、有権者が大きく増えた。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：1889年　直接国税15円以上の男子→1919年　直接国税3円以上の男子→1925年　満25歳以上のすべての男子→1945年　満20歳以上の男女",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1889年　直接国税15円以上の男子",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "1919年　直接国税3円以上の男子",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "1925年　満25歳以上のすべての男子",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "1945年　満20歳以上の男女",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：満25歳以上のすべての男子",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "満25歳以上のすべての男子",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：納税額の条件がなくなったのは1925年。男女がそろうのは1945年。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "納税額の条件がなくなったのは1925年。男女がそろ\nうのは1945年。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：普通選挙＝男女全員と思わない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "普通選挙＝男女全員と思わない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_27": {
  "caption": "答え　1947年5月3日",
  "slides": [
   {
    "note": "問題の状況を整理する。日本国憲法が「施行」された日を選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "日本国憲法が施行された日（憲法記念日）は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。公布は1946年11月3日／施行は公布から半年後",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公布は1946年11月3日",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "施行は公布から半年後",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：公布は国民に知らせること。施行は効力が実際に発生すること。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公布は国民に知らせること。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "施行は効力が実際に発生すること。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：公布　1946年11月3日（文化の日）→半年後に施行→施行　1947年5月3日（憲法記念日）",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公布　1946年11月3日（文化の日）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "半年後に施行",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "施行　1947年5月3日（憲法記念日）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：1947年5月3日",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "1947年5月3日",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：公布の半年後は1947年5月3日。憲法記念日と一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公布の半年後は1947年5月3日。憲法記念日と一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：公布と施行を取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公布と施行を取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_28": {
  "caption": "答え　エ→イ→ウ→ア",
  "slides": [
   {
    "note": "問題の状況を整理する。4つの戦後の出来事を、年代の古い順に並べる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 57,
      "text": "戦後の出来事を古い順に。ア日中共同声明　イ\n国際連合加盟　ウ沖縄返還　エサンフランシス\nコ平和条約",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。平和条約　1951年（独立回復は1952年）／国連加盟　1956年／沖縄返還と日中共同声明は、どちらも1972年",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "平和条約　1951年（独立回復は1952年）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "国連加盟　1956年",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 94,
      "w": 300,
      "h": 24,
      "text": "沖縄返還と日中共同声明は、どちらも1972年",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：占領から独立し、国際社会に復帰、領土の返還、隣国との国交正常化の順に進んだ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "占領から独立し、国際社会に復帰、領土の返還、隣\n国との国交正常化の順に進んだ。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：エ　サンフランシスコ平和条約　1951年→イ　国際連合加盟　1956年→ウ　沖縄の日本復帰　1972年5月→ア　日中共同声明　1972年9月",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "エ　サンフランシスコ平和条約　1951年",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "イ　国際連合加盟　1956年",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "ウ　沖縄の日本復帰　1972年5月",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "ア　日中共同声明　1972年9月",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：エ→イ→ウ→ア",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "エ→イ→ウ→ア",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：1951＜1956＜1972年5月＜1972年9月。この順は選択肢の1番目だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "1951＜1956＜1972年5月＜1972年9月。この順は選\n択肢の1番目だけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：1972年の2つは、月まで覚える。沖縄が先。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1972年の2つは、月まで覚える。沖縄が先。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_29": {
  "caption": "答え　参政権",
  "slides": [
   {
    "note": "問題の状況を整理する。「新しい人権」ではないものを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "「新しい人権」にあたらないものは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。新しい人権＝憲法に直接の規定がない／環境権・知る権利・プライバシーの権利など",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "新しい人権＝憲法に直接の規定がない",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "環境権・知る権利・プライバシーの権利など",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：社会の変化で、新しい権利が必要になった。参政権は憲法15条に書かれている。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "社会の変化で、新しい権利が必要になった。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "参政権は憲法15条に書かれている。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：環境権　公害問題から→知る権利　情報公開制度→プライバシーの権利　個人情報保護→参政権は憲法に明記 → 新しい人権ではない",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "環境権　公害問題から",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "知る権利　情報公開制度",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "プライバシーの権利　個人情報保護",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "参政権は憲法に明記 → 新しい人権ではない",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：参政権",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "参政権",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：新しい人権と、憲法に明記された権利を区別すると、参政権だけがちがう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "新しい人権と、憲法に明記された権利を区別すると\n、参政権だけがちがう。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：「新しく認められた権利」を、新しい人権と思わない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "「新しく認められた権利」を、新しい人権と思わな\nい。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_30": {
  "caption": "答え　出席議員の3分の2以上",
  "slides": [
   {
    "note": "問題の状況を整理する。衆議院の再可決に必要な賛成の割合を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "衆議院が可決し、参議院が否決した法律案が、\n再び可決されて成立するには？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。衆議院の優越／法律案の再可決は特別に重い条件",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "衆議院の優越",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "法律案の再可決は特別に重い条件",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：衆議院は任期が短く解散もあるので、国民の意思を反映しやすい。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "衆議院は任期が短く解散もあるので、国民の意思を\n反映しやすい。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：衆議院が可決 → 参議院が否決→衆議院で再可決→出席議員の3分の2以上 → 法律になる",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "衆議院が可決 → 参議院が否決",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "衆議院で再可決",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "出席議員の3分の2以上 → 法律になる",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：出席議員の3分の2以上",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "出席議員の3分の2以上",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：予算・条約・首相指名は「衆議院の議決が国会の議決」で別の仕組み。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "予算・条約・首相指名は「衆議院の議決が国会の議\n決」で別の仕組み。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：過半数と答えない。3分の2以上。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "過半数と答えない。3分の2以上。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_31": {
  "caption": "答え　満30歳以上",
  "slides": [
   {
    "note": "問題の状況を整理する。参議院議員になれる最低年齢を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "参議院議員の被選挙権は満何歳以上？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。被選挙権＝立候補できる資格／衆議院は満25歳以上",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "被選挙権＝立候補できる資格",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "衆議院は満25歳以上",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：参議院は任期6年・解散なし。落ち着いて議論する議院なので、年齢が高い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "参議院は任期6年・解散なし。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "落ち着いて議論する議院なので、年齢が高い。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：衆議院　被選挙権25歳以上→参議院　被選挙権30歳以上→選挙権は両方とも18歳以上",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "衆議院　被選挙権25歳以上",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "参議院　被選挙権30歳以上",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "選挙権は両方とも18歳以上",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：満30歳以上",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "満30歳以上",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：任期が長い参議院は、被選挙権の年齢も高い。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "任期が長い参議院は、被選挙権の年齢も高い。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：衆議院の25歳と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "衆議院の25歳と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_32": {
  "caption": "答え　国会が国会議員の中から指名し、天皇が任命する",
  "slides": [
   {
    "note": "問題の状況を整理する。内閣総理大臣が選ばれる手続きを選ぶ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 26,
      "text": "内閣総理大臣が任命されるまでの手続きは？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。日本は議院内閣制／2025年10月に高市早苗氏が就任",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "日本は議院内閣制",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "2025年10月に高市早苗氏が就任",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：内閣は国会の信任にもとづいて成立するので、国会が首相を指名する。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "内閣は国会の信任にもとづいて成立するので、国会\nが首相を指名する。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：国会が国会議員の中から指名→天皇が任命（国事行為）→国民の直接選挙ではない",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "国会が国会議員の中から指名",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "天皇が任命（国事行為）",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "国民の直接選挙ではない",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：国会が国会議員の中から指名し、天皇が任命する",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 44,
      "text": "国会が国会議員の中から指名し、天皇が任命\nする",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：国会が指名する議院内閣制。大統領制とはちがう。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "国会が指名する議院内閣制。大統領制とはちがう。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：指名（国会）と任命（天皇）を逆にしない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "指名（国会）と任命（天皇）を逆にしない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_33": {
  "caption": "答え　控訴",
  "slides": [
   {
    "note": "問題の状況を整理する。第一審の判決に不服なとき、第二審の裁判所に訴える手続きの名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "地方裁判所の第一審に不服で、高等裁判所に訴\nえることを何という？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。三審制／第一審→第二審",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "三審制",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "第一審→第二審",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：公正な裁判のため、3回まで裁判を受けられる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "公正な裁判のため、3回まで裁判を受けられる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：第一審：地方裁判所→第一審→第二審：控訴→第二審→第三審：上告",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "第一審：地方裁判所",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "第一審→第二審：控訴",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "第二審→第三審：上告",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：控訴",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "控訴",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：段階ごとに言葉が変わる。第一審から第二審は控訴。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "段階ごとに言葉が変わる。第一審から第二審は控訴\n。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：上告と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "上告と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_34": {
  "caption": "答え　約931万円",
  "slides": [
   {
    "note": "問題の状況を整理する。国の借金の合計を、人口でわって、1人あたりの金額を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "国債残高1,145兆円を、人口1億2300万人でわ\nると、1人あたり約何万円？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。1,145兆円（令和8年度末の見込み）／1億2300万人／1兆円＝1億万円",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1,145兆円（令和8年度末の見込み）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "1億2300万人",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 94,
      "w": 300,
      "h": 24,
      "text": "1兆円＝1億万円",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：借金の総額を人口でわって、1人あたりの大きさを見る。位をそろえないと桁をまちがえる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "借金の総額を人口でわって、1人あたりの大きさを\n見る。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "位をそろえないと桁をまちがえる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：1,145兆円＝114,500,000,000万円→1億2300万人＝123,000,000人→114,500,000,000÷123,000,000＝約930.89→四捨五入して931万円",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1,145兆円＝114,500,000,000万円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "1億2300万人＝123,000,000人",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "114,500,000,000÷123,000,000＝約930.89",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "四捨五入して931万円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：約931万円",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "約931万円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：931万円×1億2300万人≒1,145兆円。もとの金額とほぼ一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "931万円×1億2300万人≒1,145兆円。もとの金額と\nほぼ一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：兆と億の位をまちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "兆と億の位をまちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_35": {
  "caption": "答え　141,240円",
  "slides": [
   {
    "note": "問題の状況を整理する。時給から、4週間の賃金の合計を求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "時給1,177円で、1日6時間、週5日、4週間働く\nと、賃金の合計は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。時給1,177円／1日6時間・週5日・4週間",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "時給1,177円",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "1日6時間・週5日・4週間",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：最低賃金は、会社が最低でも払わなければならない時給。賃金＝時給×働く時間。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "最低賃金は、会社が最低でも払わなければならない\n時給。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "賃金＝時給×働く時間。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：日数　5×4＝20日→時間　6×20＝120時間→賃金　1,177×120＝141,240円",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "日数　5×4＝20日",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "時間　6×20＝120時間",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "賃金　1,177×120＝141,240円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：141,240円",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "141,240円",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：1日7,062円×20日＝141,240円で一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "1日7,062円×20日＝141,240円で一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：週5日の4週間は20日。28日や30日にしない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "週5日の4週間は20日。28日や30日にしない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_36": {
  "caption": "答え　公正取引委員会",
  "slides": [
   {
    "note": "問題の状況を整理する。独占禁止法を運用して、市場の競争を守る機関の名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "価格を相談して決めるなど競争をさまたげる行\n為を取りしまる機関は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。企業どうしの話し合い（カルテル）／独占禁止法",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "企業どうしの話し合い（カルテル）",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "独占禁止法",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：競争がなくなると、価格が高くなり、消費者が損をする。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "競争がなくなると、価格が高くなり、消費者が損を\nする。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：競争をさまたげる行為を禁止→法律：独占禁止法→運用する機関：公正取引委員会",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "競争をさまたげる行為を禁止",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "法律：独占禁止法",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "運用する機関：公正取引委員会",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：公正取引委員会",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "公正取引委員会",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：独占禁止法と公正取引委員会は対。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "独占禁止法と公正取引委員会は対。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：消費者庁と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "消費者庁と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_37": {
  "caption": "答え　1.5℃",
  "slides": [
   {
    "note": "問題の状況を整理する。パリ協定の努力目標の数値を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "パリ協定が努力目標とする、産業革命前からの\n気温上昇の上限は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。2015年　パリ協定／2℃より十分低く",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "2015年　パリ協定",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "2℃より十分低く",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：温室効果ガスが増えると、平均気温が上がる。海面上昇や異常気象の原因になる。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "温室効果ガスが増えると、平均気温が上がる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "海面上昇や異常気象の原因になる。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：2015年　COP21で採択→気温上昇を2℃より十分低く→さらに努力目標として1.5℃",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "2015年　COP21で採択",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "気温上昇を2℃より十分低く",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "さらに努力目標として1.5℃",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：1.5℃",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "1.5℃",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：「2℃より十分低く」と「1.5℃」がセット。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "「2℃より十分低く」と「1.5℃」がセット。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：京都議定書（先進国のみ）と混ぜない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "京都議定書（先進国のみ）と混ぜない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_38": {
  "caption": "答え　地方交付税交付金",
  "slides": [
   {
    "note": "問題の状況を整理する。国が地方に配分する財源のうち、使いみちが自由なものの名前を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "地方の財政の格差を減らすため、国が配分する\n、使いみちが自由な財源は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。地方の収入には格差がある／国庫支出金は使いみちが決まっている",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "地方の収入には格差がある",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "国庫支出金は使いみちが決まっている",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：格差があると、住む地域で行政サービスに差が出る。国税の一部を配分して、差を減らす。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "格差があると、住む地域で行政サービスに差が出る\n。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "国税の一部を配分して、差を減らす。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：格差を減らす → 地方交付税交付金→使いみちは自由→国庫支出金は使いみち指定 → ちがう",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "格差を減らす → 地方交付税交付金",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "使いみちは自由",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "国庫支出金は使いみち指定 → ちがう",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：地方交付税交付金",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "地方交付税交付金",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：2つの条件が両方当てはまるのは地方交付税交付金だけ。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "2つの条件が両方当てはまるのは地方交付税交付金\nだけ。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：国庫支出金と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "国庫支出金と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_39": {
  "caption": "答え　満40歳以上",
  "slides": [
   {
    "note": "問題の状況を整理する。介護保険の保険料を納める義務が始まる年齢を答える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "介護保険の保険料を納める義務が生じるのは満\n何歳以上？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。2000年に始まった／社会全体で介護を支える",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "2000年に始まった",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "社会全体で介護を支える",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：介護が必要な人が増えたので、現役世代も保険料を出して支える。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "介護が必要な人が増えたので、現役世代も保険料を\n出して支える。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：40歳以上のすべての人が加入→保険料を納める→原則65歳から介護サービス",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "40歳以上のすべての人が加入",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "保険料を納める",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "原則65歳から介護サービス",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：満40歳以上",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "満40歳以上",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：40歳＝保険料、65歳＝サービス。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "40歳＝保険料、65歳＝サービス。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：65歳と取りちがえない。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "65歳と取りちがえない。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 },
 "ritsumeikan_koko_shakai_40": {
  "caption": "答え　75万円減る",
  "slides": [
   {
    "note": "問題の状況を整理する。為替相場の変化で、輸出企業の円での収入がどれだけ変わるかを求める。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 41,
      "text": "3万ドルの車。為替が1ドル150円→125円に。円\nでの売り上げの変化は？",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 13
     }
    ]
   },
   {
    "note": "問題文の手がかりに印をつける。3万ドルの車を1台売る／150円→125円は円高",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "3万ドルの車を1台売る",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 62,
      "w": 300,
      "h": 24,
      "text": "150円→125円は円高",
      "color": "#0284C7",
      "fill": "#E0F2FE",
      "size": 12
     }
    ]
   },
   {
    "note": "理由：ドルを円に交換すると、1ドルで受け取る円が減る。輸出企業は円での収入が減る。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "③なぜそうなるの？",
      "size": 12,
      "color": "#9333EA",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "ドルを円に交換すると、1ドルで受け取る円が減る\n。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     },
     {
      "t": "box",
      "x": 10,
      "y": 77,
      "w": 300,
      "h": 24,
      "text": "輸出企業は円での収入が減る。",
      "color": "#9333EA",
      "fill": "#F3E8FF",
      "size": 12
     }
    ]
   },
   {
    "note": "手順：150円のとき　3万×150＝450万円→125円のとき　3万×125＝375万円→差　450万−375万＝75万円→75万円減る",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "④考え方・計算",
      "size": 12,
      "color": "#0284C7",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "150円のとき　3万×150＝450万円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 55,
      "x2": 160,
      "y2": 65,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 66,
      "w": 300,
      "h": 24,
      "text": "125円のとき　3万×125＝375万円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 91,
      "x2": 160,
      "y2": 101,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 102,
      "w": 300,
      "h": 24,
      "text": "差　450万−375万＝75万円",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     },
     {
      "t": "arrow",
      "x1": 160,
      "y1": 127,
      "x2": 160,
      "y2": 137,
      "color": "#0284C7"
     },
     {
      "t": "box",
      "x": 10,
      "y": 138,
      "w": 300,
      "h": 24,
      "text": "75万円減る",
      "color": "#0284C7",
      "fill": "#FFFFFF",
      "size": 12
     }
    ]
   },
   {
    "note": "答え：75万円減る",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 40,
      "w": 300,
      "h": 27,
      "text": "75万円減る",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 14
     }
    ]
   },
   {
    "note": "確かめ：1ドルで25円減るので、3万ドルでは750,000円減る。一致。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
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
      "color": "#16A34A",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 39,
      "text": "1ドルで25円減るので、3万ドルでは750,000円減る\n。一致。",
      "color": "#16A34A",
      "fill": "#DCFCE7",
      "size": 12
     }
    ]
   },
   {
    "note": "まちがい注意：円高と円安を逆にしない。輸出企業は円高で不利。",
    "add": [
     {
      "t": "box",
      "x": 0,
      "y": 0,
      "w": 320,
      "h": 240,
      "color": "#FFFFFF",
      "fill": "#FFFFFF",
      "size": 14
     },
     {
      "t": "label",
      "x": 12,
      "y": 19,
      "text": "⑦まちがい注意",
      "size": 12,
      "color": "#E11D48",
      "anchor": "start",
      "bold": true
     },
     {
      "t": "box",
      "x": 10,
      "y": 30,
      "w": 300,
      "h": 24,
      "text": "円高と円安を逆にしない。輸出企業は円高で不利。",
      "color": "#E11D48",
      "fill": "#FFE4E6",
      "size": 12
     }
    ]
   }
  ]
 }
}
;

export const figuresRitsumeikanKoko_shakai: Record<string, Figure> = Object.fromEntries(
  Object.entries(D).map(([k, v]) => [k, show(v.slides as Slide[], v.caption)]),
);
