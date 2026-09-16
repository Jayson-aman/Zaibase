import type { Question } from '../data/questions-meta';

// ───────────────────────────────────────────────────────────────
// 書いた答えの採点
//
// 子どもが自分で答えを書き、機械が正誤を判定する。合っていれば花火を上げ、
// まちがっていれば「どこがちがったか」を見せる。
//
// ⚠️ いちばん大事なのは「合っているのに不正解にしない」こと。
//    書き方のちがい（全角と半角、単位をつけるかどうか、かっこの中の言いかえ）で
//    ×になると、子どもは正しく解けたのに自信をなくす。
//    だから判定はゆるめに寄せ、迷ったら正解にする。
// ───────────────────────────────────────────────────────────────

/** 答え方の種類。問題のつくりから決まる。 */
export type AnswerMode =
  /** 選択肢から選ぶ（タップで答える） */
  | 'choice'
  /** 短い答えを書く（機械で正誤を判定できる） */
  | 'input'
  /** 長い記述。機械では正誤を判定できないので、模範解答と見くらべる */
  | 'writing';

/** 採点の結果 */
export type Judgement =
  /** 正解 */
  | 'correct'
  /** まちがい */
  | 'wrong'
  /** 機械では判定しない（記述問題）。自分で見くらべる */
  | 'review';

/**
 * この問題にどう答えてもらうかを決める。
 *
 * ・選択肢があれば、タップして答える
 * ・小問がある、答えが長い、答えが何行にもわたる → 記述として見くらべる
 * ・それ以外は書いて判定する
 */
export function answerMode(q: Question): AnswerMode {
  if ((q.choices ?? []).length > 0) return 'choice';
  const a = String(q.answer ?? '');
  if ((q.subQuestions ?? []).length > 0) return 'writing';
  if (a.includes('\n') || a.length > 40) return 'writing';
  return 'input';
}

/** 全角の英数字・記号を半角に直す */
function toHalfWidth(s: string): string {
  return s
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/　/g, ' ')
    .replace(/[＋]/g, '+')
    .replace(/[－−ー―‐]/g, '-')
    .replace(/[×✕]/g, '*')
    .replace(/[÷]/g, '/')
    .replace(/[＝]/g, '=')
    .replace(/[／]/g, '/')
    .replace(/[（]/g, '(')
    .replace(/[）]/g, ')')
    .replace(/[：]/g, ':')
    .replace(/[，]/g, ',')
    .replace(/[．]/g, '.')
    .replace(/[’‘]/g, "'")
    .replace(/[”“]/g, '"');
}

/** 上付き・下付きの数字をふつうの数字に直す（cm² と cm2 を同じに見る） */
const SUPSUB: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '⁺': '+', '⁻': '-',
};

/**
 * 見くらべるための形にそろえる。
 *
 * ここでそろえたちがいは、すべて「正解あつかい」になる。
 */
export function normalize(s: string): string {
  let t = toHalfWidth(String(s ?? ''));
  t = t.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉⁺⁻]/g, (c) => SUPSUB[c] ?? c);
  // 「答え：」「答え】」のような書き出しは、答えそのものではないので落とす
  t = t.replace(/^\s*(?:答え|こたえ|解答|答)\s*[:：]?\s*/u, '');
  // 空白・句読点・かぎかっこは、あってもなくても同じとみなす
  t = t.replace(/[\s。、．，「」『』]/g, '');
  // 英字は大文字小文字を区別しない
  t = t.toLowerCase();
  // 分数の「3分の4」を「4/3」の形にそろえる
  t = t.replace(/([0-9]+)分の([0-9]+)/g, '$2/$1');
  // 「1と4/15」と「1 4/15」を同じに見る
  t = t.replace(/と([0-9]+\/)/g, '$1');
  return t;
}

/** 文の終わりにつく記号は、あってもなくても同じとみなす */
function stripTailPunct(s: string): string {
  return s.replace(/[.!?,;:]+$/g, '');
}

/** 数と単位に分ける。単位は書いても書かなくてもよいことにする。 */
const UNIT_TAIL =
  /(cm3|cm2|km2|m3|m2|mm2|cm|mm|km|kg|mg|ml|dl|l|g|m|度|°|℃|%|人|円|個|通り|時間|時|分|秒|本|枚|冊|回|点|才|歳|倍|台|羽|匹|頭|袋|組|色|つ|こ)$/;

/** 「時速」「秒速」などの前につく言い方も、あってもなくてもよいことにする */
const SPEED_HEAD = /^(?:時速|分速|秒速|約|およそ)/;

/**
 * 「45kg」を 数の部分「45」と 単位「kg」に分ける。
 *
 * ⚠️ 単位は「書かなくてもよい」が「ちがう単位を書いたら不正解」にする。
 *    面積を聞かれて「50°」と書いたら、数が合っていてもまちがいだからである。
 *    単位を落として数だけで比べると、これが正解になってしまう。
 */
function numericCore(s: string): { num: string; unit: string } | null {
  let t = s.replace(SPEED_HEAD, '');
  const m = t.match(UNIT_TAIL);
  const unit = m ? m[1] : '';
  t = t.replace(UNIT_TAIL, '');
  if (t === '') return null;
  // 数・小数・分数・比・マイナス・π だけでできているか
  if (!/^-?[0-9]+(?:\.[0-9]+)?(?:\/[0-9]+)?(?:[:][0-9]+(?:\.[0-9]+)?)*(?:π|pi)?$/.test(t)) return null;
  // 末尾の 0 のちがい（3.50 と 3.5）をそろえる
  if (/^-?[0-9]+\.[0-9]+$/.test(t)) t = String(parseFloat(t));
  return { num: t, unit };
}

/**
 * 模範解答から「正解としてよい書き方」をぜんぶ取り出す。
 *
 * かっこの中に言いかえが書かれていることが多いので（866問）、
 * かっこの中も外も、どちらで書いても正解にする。
 *   「カナダ（Canada）」→ カナダ ／ Canada ／ カナダ（Canada）
 *   「19/12（1と7/12）」→ 19/12 ／ 1と7/12
 *   「y＝24/x、y＝4cm」→ ぜんぶ書いたときだけ正解（読点は区切りとして残す）
 */
export function acceptedAnswers(answer: string): string[] {
  const raw = String(answer ?? '').trim();
  const out = new Set<string>();
  const add = (s: string) => {
    const n = normalize(s);
    if (n) out.add(n);
  };
  add(raw);
  // かっこの外だけ／かっこの中だけ
  const outside = raw.replace(/[（(][^）)]*[）)]/g, '').trim();
  if (outside) add(outside);
  for (const m of raw.matchAll(/[（(]([^）)]*)[）)]/g)) {
    const inner = m[1].trim();
    // 「（合っている）」のような説明のかっこは答えではないので、短いものだけ拾う
    if (inner && inner.length <= 24 && !/[はがをにでと]/.test(inner.slice(0, 1))) add(inner);
  }
  // 「〜です」「〜になる」のような言い回しを外した形
  add(raw.replace(/(?:です|でした|になる|になります|である)。?$/u, ''));
  return [...out];
}

/**
 * 書かれた答えを採点する。
 *
 * 迷ったら正解に寄せる。合っているのに×にするほうが、
 * まちがっているのに○にするより、子どもにとってずっと害が大きい。
 */
export function judge(input: string, answer: string): Judgement {
  const got = normalize(input);
  if (!got) return 'wrong';
  const oks = acceptedAnswers(answer);
  for (const ok of oks) {
    if (got === ok) return 'correct';
    if (stripTailPunct(got) === stripTailPunct(ok)) return 'correct';
    // 数の答えは、単位を書かなくても正解。ただし「ちがう単位」を書いたら不正解。
    const a = numericCore(got);
    const b = numericCore(ok);
    if (a != null && b != null && a.num === b.num && (a.unit === '' || a.unit === b.unit)) return 'correct';
  }
  return 'wrong';
}

/**
 * 記述問題の添削に使う「入っているとよい言葉」を模範解答から取り出す。
 *
 * ⚠️ これは点数をつけるためのものではない。
 *    「ここが入っている／ここが抜けている」を色分けして見せるだけに使う。
 */
const STOP = new Set([
  'こと', 'もの', 'ため', 'ように', 'ので', 'から', 'また', 'そして', 'しかし',
  'これ', 'それ', 'あれ', 'この', 'その', 'あの', 'よう', 'とき', 'ところ',
  'ある', 'いる', 'する', 'なる', 'できる', 'れる', 'られる', 'です', 'ます',
]);

export function keyPhrases(answer: string): string[] {
  const t = String(answer ?? '');
  const words = t.match(/[一-龥ァ-ヶー]{2,8}|[A-Za-z]{3,}/g) ?? [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const w of words) {
    if (STOP.has(w) || seen.has(w)) continue;
    seen.add(w);
    out.push(w);
  }
  return out.slice(0, 12);
}

/** 記述の添削結果：模範解答の要点のうち、書けていたもの／抜けていたもの */
export function reviewWriting(input: string, answer: string): { hit: string[]; miss: string[] } {
  const got = normalize(input);
  const hit: string[] = [];
  const miss: string[] = [];
  for (const k of keyPhrases(answer)) (got.includes(normalize(k)) ? hit : miss).push(k);
  return { hit, miss };
}

/** まちがえたとき、自分の答えと正しい答えのどこがちがうかを1文で言う */
export function diffHint(input: string, answer: string): string | null {
  const got = normalize(input);
  const ok = normalize(acceptedAnswers(answer)[0] ?? answer);
  if (!got || !ok) return null;
  const a = numericCore(got);
  const b = numericCore(ok);
  if (a != null && b != null) {
    if (a.num === b.num && a.unit !== b.unit) return '数は合っています。単位の書き方を見直してみましょう。';
    const na = parseFloat(a.num);
    const nb = parseFloat(b.num);
    if (Number.isFinite(na) && Number.isFinite(nb) && nb !== 0) {
      const r = na / nb;
      if (Math.abs(r - 2) < 1e-9) return '答えの2倍になっています。どこかで2をかけすぎたか、÷2を忘れていないか見直してみましょう。';
      if (Math.abs(r - 0.5) < 1e-9) return '答えの半分になっています。÷2を1回よぶんにしていないか見直してみましょう。';
      if (Math.abs(r - 10) < 1e-9 || Math.abs(r - 100) < 1e-9) return 'けたが大きすぎます。小数点の位置か、0の数を見直してみましょう。';
      if (Math.abs(r - 0.1) < 1e-9 || Math.abs(r - 0.01) < 1e-9) return 'けたが小さすぎます。小数点の位置か、0の数を見直してみましょう。';
      if (Math.abs(na + nb) < 1e-9) return '符号（＋と−）が反対になっています。';
    }
  }
  if (got.replace(UNIT_TAIL, '') === ok.replace(UNIT_TAIL, '')) return '数は合っています。単位の書き方を見直してみましょう。';
  if (ok.includes(got) || got.includes(ok)) return '言いたいことは近いです。書き方をそろえてみましょう。';
  return null;
}
