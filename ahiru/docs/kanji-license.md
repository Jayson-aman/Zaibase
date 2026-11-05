# 漢字の書き順データ：ライセンスの確認（2026/11/5）

対象：`data/kanji-strokes.ts`（小1の80字）。出どころは hanzi-writer-data-jp。

## 何を確かめたか（原文を読んだ）
- hanzi-writer-data-jp の README：このデータは animCJK と Make Me a Hanzi（元は台湾 Arphic Technology 社の字体）に由来し、**Arphic Public License（APL）**のもとで再配布・改変できる。
- animCJK の README「Licenses」：APL（`graphics` で始まるファイルと SVG ファイル）、LGPL（それ以外のファイル）。**字の形のデータは APL の側**。
- Make Me a Hanzi の COPYING：`graphics.txt` は APL。
- APL の本文（ARPHICPL.TXT）：
  - 第1条：コピー・再配布は自由。ただし **license 文（ARPHICPL.TXT）を変えずに添える**。
  - 第2条：改変は自由。ただし (a) **いつ・どう変えたかを目立つ形で書く**、(b) 改変したものを **同じ license で誰でも自由に使えるようにする**。元の字体から作られていない、独立した別の作品（アプリ本体など）には、この条件はおよばない（同条の最後の段）。
  - 第7・8条：無保証・免責。

## このアプリで守っていること（2026/11/5 に整えた）
1. license 全文を `public/licenses/ARPHICPL.TXT` に置いた（Web版では `/licenses/ARPHICPL.TXT` で誰でも読める）。クレジット画面（`data/legal.ts`）から、この場所を案内している。
2. `data/kanji-strokes.ts` の先頭に、**改変の表示**（80字の抜き出しと1ファイルへの形式変換。字の形は変えていない）を書いた。
3. クレジット画面に、改変の内容と、APL のもとで使っていることを書いた。
4. 書き順データは、アプリ本体とは別のファイルに分かれている（`data/kanji-strokes.ts`）。このファイルは APL のもとで誰でも自由に使える。

## まだ残っていること
- **法務の最終判断はしていない**（私は弁護士ではない）。気になる点：APL(b)「改変したものを自由に使えるようにする」を、アプリで配るデータファイルに当てはめたときの扱い。ふつうは「元の字体から作られた部分（このデータ）は APL、アプリ本体は別の作品」と考えるが、確実にしたいなら弁護士に聞くとよい（確認先：`docs/legal/lawyer-checklist.md` に追記するのがよい）。
- LGPL（animCJK のうち SVG 以外のファイル）は、このデータには使っていない。
