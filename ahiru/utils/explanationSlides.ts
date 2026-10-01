// 問題の解説を、7〜8枚のスライドに組み立てる。
//
// 解説は 【何を聞かれているか】【なぜその式なのか】【ステップ1】…【答え】【確かめ】【よくあるまちがい】
// という型で書かれているものが全体の93%（16,665問中15,417問）ある。この型の見出しごとに1枚のスライドにし、
// 最後に「おさらい」の1枚（その問題の前提になる計算の出し方）を足す。
//   ・枚数が多すぎるとき（ステップが多い）は、続いたステップをまとめて8枚以内にする。
//   ・少ないときは、いちばん長い枚を行や文の切れ目で分けて7枚以上にする。
//   ・型の無い解説（319問）は、文の切れ目で7枚に分ける。
// 画面での表示は components/ExplanationSlides.tsx。

import { explanationText } from './explanation';

export type SlideKind = 'question' | 'why' | 'step' | 'answer' | 'check' | 'mistake' | 'key' | 'review' | 'other';

export type Slide = { kind: SlideKind; title: string; body: string };

export const SLIDE_MIN = 7;
export const SLIDE_MAX = 8;

const KIND_RULES: [RegExp, SlideKind][] = [
  [/何を聞/, 'question'],
  [/まちがい|ひっかけ|つまずき/, 'mistake'],
  [/確かめ/, 'check'],
  [/^答え/, 'answer'],
  [/ステップ|解法|計算|手順/, 'step'],
  [/なぜ|理由|考え方|イメージ|出題意図/, 'why'],
  [/ここが|ポイント|注意|入試頻出|関連知識|類題/, 'key'],
];

function kindOf(heading: string): SlideKind {
  for (const [re, k] of KIND_RULES) if (re.test(heading)) return k;
  return 'other';
}

/** 解説を 【見出し】本文 の並びに分ける。最初の見出しより前に文があれば、見出し無しの1つめにする。 */
export function parseSections(text: string): { heading: string; body: string }[] {
  const out: { heading: string; body: string }[] = [];
  const re = /【([^】]{1,24})】/g;
  let last = 0;
  let head: string | null = null;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const chunk = text.slice(last, m.index);
    if (head !== null) out.push({ heading: head, body: chunk.trim() });
    else if (chunk.trim()) out.push({ heading: '', body: chunk.trim() });
    head = m[1];
    last = m.index + m[0].length;
  }
  if (head !== null) out.push({ heading: head, body: text.slice(last).trim() });
  else if (text.trim() && out.length === 0) out.push({ heading: '', body: text.trim() });
  return out.filter((s) => s.body !== '' || s.heading !== '');
}

/** 文を「。」「！」「？」「改行」で分ける（かっこの中は切らない） */
function splitUnits(body: string): string[] {
  const lines = body.split('\n').map((l) => l.trim()).filter(Boolean);
  const units: string[] = [];
  for (const line of lines) {
    // 計算式の行（＝や→をふくむ短い行）はそのまま1単位
    if (/[＝=→]/.test(line) && line.length <= 70) {
      units.push(line);
      continue;
    }
    let depth = 0;
    let cur = '';
    for (const ch of line) {
      cur += ch;
      if ('（(「『'.includes(ch)) depth++;
      else if ('）)」』'.includes(ch)) depth = Math.max(0, depth - 1);
      else if ('。！？'.includes(ch) && depth === 0) {
        units.push(cur.trim());
        cur = '';
      }
    }
    if (cur.trim()) units.push(cur.trim());
  }
  return units;
}

function mergeTitle(a: string, b: string): string {
  const na = /ステップ\s*([0-9０-９]+)/.exec(a);
  const nb = /ステップ\s*([0-9０-９]+)/.exec(b);
  if (na && nb) return `ステップ${na[1]}〜${nb[1]}`;
  return a.includes('（つづき）') ? a : a || b;
}

/** 7〜8枚におさめる（review は含まない）。 */
function fit(slides: Slide[], reserve: number): Slide[] {
  const s = slides.map((x) => ({ ...x }));
  const max = SLIDE_MAX - reserve;
  const min = SLIDE_MIN - reserve;
  // 多いとき：となりどうしで、合わせて短くなるものを、続いたステップから先にまとめる
  let guard = 200;
  while (s.length > max && guard-- > 0) {
    let best = -1;
    let bestLen = Infinity;
    for (let i = 0; i < s.length - 1; i++) {
      const stepPair = s[i].kind === 'step' && s[i + 1].kind === 'step';
      const len = s[i].body.length + s[i + 1].body.length + (stepPair ? 0 : 400);
      if (len < bestLen) {
        bestLen = len;
        best = i;
      }
    }
    if (best < 0) break;
    const a = s[best];
    const b = s[best + 1];
    const merged: Slide = {
      kind: a.kind === b.kind ? a.kind : a.kind === 'step' ? 'step' : a.kind,
      title: a.kind === 'step' && b.kind === 'step' ? mergeTitle(a.title, b.title) : a.title,
      body: [a.body, b.title && a.kind !== b.kind ? `【${b.title}】` : '', b.body].filter(Boolean).join('\n\n'),
    };
    s.splice(best, 2, merged);
  }
  // 少ないとき：いちばん長い枚を、文の切れ目で2つに分ける
  guard = 200;
  while (s.length < min && guard-- > 0) {
    let idx = -1;
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
      const units = splitUnits(s[i].body);
      if (units.length >= 2 && s[i].body.length > longest) {
        longest = s[i].body.length;
        idx = i;
      }
    }
    if (idx < 0) break;
    const units = splitUnits(s[idx].body);
    // 文字数が半分ずつになる場所で切る
    const total = units.reduce((n, u) => n + u.length, 0);
    let acc = 0;
    let cut = 1;
    for (let i = 0; i < units.length - 1; i++) {
      acc += units[i].length;
      cut = i + 1;
      if (acc >= total / 2) break;
    }
    const first: Slide = { ...s[idx], body: units.slice(0, cut).join('\n') };
    const second: Slide = {
      ...s[idx],
      title: s[idx].title.includes('つづき') ? s[idx].title : `${s[idx].title}（つづき）`,
      body: units.slice(cut).join('\n'),
    };
    s.splice(idx, 1, first, second);
  }
  return s;
}

/** 型の無い解説：文の切れ目で、最大 count 枚に等分する */
function chunkPlain(text: string, count: number): Slide[] {
  const units = splitUnits(text);
  if (units.length === 0) return [];
  const n = Math.max(1, Math.min(count, units.length));
  const per = Math.ceil(units.length / n);
  const out: Slide[] = [];
  for (let i = 0; i < units.length; i += per) {
    out.push({ kind: 'other', title: `ポイント${out.length + 1}`, body: units.slice(i, i + per).join('\n') });
  }
  return out;
}

export type SlideQuestion = { explanation?: string; hint?: string; memoryTip?: string; pitfall?: string };

/**
 * 解説のスライド（おさらいの1枚は含まない）。review スライドの本文は画面側で、
 * その問題に合う「おさらい」から作る。ここでは枠（kind: 'review'）だけ最後に置く。
 */
export function buildSlides(q: SlideQuestion): Slide[] {
  const text = explanationText(q);
  if (!text) return [];
  const sections = parseSections(text);
  const hasTemplate = sections.some((x) => x.heading !== '');
  let body: Slide[];
  if (hasTemplate) {
    body = sections.map((x) => ({ kind: kindOf(x.heading), title: x.heading || 'はじめに', body: x.body }));
    body = fit(body, 1);
  } else {
    body = chunkPlain(text, SLIDE_MAX - 1);
  }
  return [...body, { kind: 'review', title: 'おさらい', body: '' }];
}
