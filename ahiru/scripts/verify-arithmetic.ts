// 問題集15,199問の解説に書かれた計算を、実際に評価して検算する。
//
// ■ なぜ必要か
// 「予備の解説」に (√2/12)×6³ ≈ 36√2 ≈ 50.9cm³ という誤った値（正しくは18√2 ≈ 25.5）が
// 残っていたのを見つけたことがきっかけ。人の目では15,199問を追いきれない。
//
// ■ 誤検出をなくすまでに6回作り直した。日本語まじりの文から式を切り出すのは難しく、
//    最初は1,889件出たが、そのほとんどが読み取りの失敗だった。除外した形：
//      ・√ ² ³ π 文字式（数字だけが残って別の式に見える）
//      ・「12×6÷2＝72÷2＝36」の途中式（連鎖として評価する）
//      ・比のコロン（1800:1400 の左右が混ざる）
//      ・分数の a/b（5/6÷10/3 は (5/6)÷(10/3) の意味）
//      ・「200÷3＝66個」の切り捨て、「＝66あまり2」
//      ・「第1四分位数」「5分の3」など日本語の中の数字
//      ・組み合わせ記号を (9 3) と書いたもの
//    現在の残り73件も手で確認した結果すべて読み取りの失敗で、中身のまちがいは無かった。
//
// ■ 使い方: npx tsx scripts/verify-arithmetic.ts （または esbuild 経由）
//    件数が増えたら、増えた分の原文を必ず読むこと。**数字だけ見て直さない。**
// 解説の計算を検算する（第4版・境界を厳密に）。
// 「面積＝底辺×高さ÷2＝10×7÷2＝35」のような文では、日本語のすぐ後ろから
// 式が始まる。前の式の途中（÷2 の 2）から拾ってしまわないよう、
// 式の前後が「数・演算子・=」でないことを確かめる。
import { questions } from '../data/questions';
const Q = questions as any[];

function prep(s: string): string {
  let t = s
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[×✕✖]/g, '*').replace(/[÷]/g, '/').replace(/[＋]/g, '+')
    .replace(/[－−ー–—]/g, '-').replace(/[（]/g, '(').replace(/[）]/g, ')')
    .replace(/[，,]/g, '').replace(/[＝]/g, '=').replace(/[:：]/g, '|');
  t = t.replace(/√\s*\(?[0-9.]*\)?/g, 'X');
  t = t.replace(/[0-9)]\s*[²³⁴]/g, 'X');
  t = t.replace(/[πΠ]/g, 'X');
  t = t.replace(/[a-zA-Zａ-ｚＡ-Ｚ]/g, 'X');
  t = t.replace(/[≒≈≧≦<>%％]/g, 'X');
  return t;
}
const MATHCH = /[0-9.+\-*/=()]/;
function evalSafe(e: string): number | null {
  const t = e.trim();
  if (!/^[0-9.+\-*/()\s]+$/.test(t) || !/[0-9]/.test(t)) return null;
  if (/[+\-*/]\s*$/.test(t) || /^\s*[*/]/.test(t)) return null;
  if (/\(\s*\)/.test(t)) return null;
  try { const v = Function(`"use strict";return (${t})`)(); return typeof v === 'number' && isFinite(v) ? v : null; }
  catch { return null; }
}
type Bad = { id: string; subject: string; chain: string; vals: number[] };
const bad: Bad[] = [];
let chains = 0;
const CHAIN = /[0-9(][0-9.+\-*/()\s]*(?:=[0-9(][0-9.+\-*/()\s]*)+/g;
for (const q of Q) {
  const text = prep([q.explanation, q.hint, q.answer].filter(Boolean).join('\n'));
  for (const m of text.matchAll(CHAIN)) {
    const st = m.index!, en = st + m[0].length;
    const before = st > 0 ? text[st - 1]! : '';
    const after = en < text.length ? text[en]! : '';
    // 前後が数式の一部なら、切り出しがずれている可能性が高いので見送る
    if (before && MATHCH.test(before)) continue;
    if (after && MATHCH.test(after)) continue;
    if (m[0].includes('X')) continue;
    // ⑦ 「第1四分位数＝40」「5分の3」のように、日本語の中に数字が入る言い方がある。
    //    直前が日本語で、最初の段が演算子を持たないただの数なら、その数は
    //    式の一部ではなく言葉の一部なので見送る。
    const seg0 = m[0].split('=')[0]!.trim();
    if (before && /[ぁ-んァ-ヶ一-龠]/.test(before) && !/[+\-*/]/.test(seg0)) continue;
    // ① 「200÷3＝66あまり2」は正しい書き方なので対象外
    if (/^\s*(あまり|余り|…)/.test(text.slice(en, en + 4))) continue;
    // ② 「8%」のように直後が記号（Xに置きかえ済み）なら、単位つきなので対象外
    if (after === 'X') continue;
    // ③ 組み合わせ記号（₉C₃ を (9 3) と書いたもの）は式ではない
    if (/\(\s*[0-9]+\s+[0-9]+\s*\)/.test(m[0])) continue;
    if (/\([0-9]{2}\)/.test(m[0].replace(/\s+/g, ''))) continue;
    // ④ 分数を a/b の形で書いた式は、÷ と 分数の区切りが見分けられない
    //    （5/6÷10/3 は (5/6)÷(10/3) の意味だが、素直に読むと別の値になる）。
    //    段のどこかに「/」が2つ以上あれば、自動検算には向かないので見送る。
    if (m[0].split('=').some((seg) => (seg.match(/\//g) ?? []).length >= 2)) continue;
    // ⑤ 帯分数（13/12＝1と1/12 の「1」）も同じ理由で見送る
    if (/[と余]/.test(text.slice(en, en + 2))) continue;
    const segs = m[0].split('=').map((x) => x.trim()).filter(Boolean);
    if (segs.length < 2) continue;
    if (!segs.some((x) => /[+\-*/]/.test(x))) continue;
    const vals = segs.map(evalSafe);
    if (vals.some((v) => v == null)) continue;   // 全段が評価できるものだけ見る
    const nums = vals as number[];
    chains++;
    const base = nums[0]!;
    const tol = Math.max(0.011, Math.abs(base) * 0.005);
    // ⑥ 「200÷3＝66個」のように、わり算の商だけを取る書き方は正しい。
    //    ずれが1未満で、切り捨て・切り上げ・四捨五入のどれかに一致するなら見送る。
    const roundingOK = nums.every((v) => {
      const d = Math.abs(v - base);
      return d < 1 && (Math.floor(base) === v || Math.ceil(base) === v || Math.round(base) === v || v === base);
    });
    if (roundingOK) continue;
    if (nums.some((v) => Math.abs(v - base) > tol)) bad.push({ id: q.id, subject: q.subject, chain: m[0].replace(/\s+/g, ''), vals: nums });
  }
}
const ids = new Set(bad.map((b) => b.id));
const bySubj: Record<string, number> = {};
bad.forEach((b) => { bySubj[b.subject] = (bySubj[b.subject] ?? 0) + 1; });
console.log(`検算した式 ${chains}個 ／ 食いちがい ${bad.length}個 ／ 問題数 ${ids.size}`);
console.log('教科別:', JSON.stringify(bySubj));
bad.slice(0, 40).forEach((b) => console.log(`  ${b.id} : ${b.chain} → [${b.vals.map((v) => Math.round(v * 1000) / 1000).join(', ')}]`));
