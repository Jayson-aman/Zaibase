// 問題を解く前の画面に出す図から、答えそのものを伏せる。
//
// 図データは「解き終わった状態」で描かれている（例：y=2x+2 の直線に「y=2x+2」と書いてある、
// 比の問題の図に「男子 24人」と書いてある）。そのまま問題文の下に出すと、答えが先に見える。
// 図の文字のうち、答えと同じ値を含むものだけを「？」に置きかえる。
// ただし問題文に最初から書いてある値（与えられた条件）は伏せない。

const TEXT_KEYS = new Set(['label', 'text', 'radiusLabel', 'width', 'depth', 'height', 'radius', 'slant', 'name', 'xLabel', 'yLabel', 'sideLabels', 'topLabel', 'labels']);

const nfkc = (s: string) => s.normalize('NFKC').replace(/\s+/g, '').toLowerCase();
const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** 答えを、伏せる対象の値（トークン）に分ける。「A=10cm、B=14cm」→ 10cm・14cm */
export function answerTokens(answer: string): string[] {
  const parts: string[] = [];
  let depth = 0, cur = '';
  for (const ch of answer.normalize('NFKC')) {
    if ('([{'.includes(ch)) depth++;
    if (')]}'.includes(ch)) depth = Math.max(0, depth - 1);
    if (depth === 0 && /[、,;；\n　]/.test(ch)) { parts.push(cur); cur = ''; continue; }
    cur += ch;
  }
  parts.push(cur);
  const out = new Set<string>();
  for (const p of parts) {
    let t = p.replace(/^[(（]\d+[)）]\s*/, '').replace(/^問\d+[.．、:：\s]*/, '');
    const eq = t.split(/[=＝]/);
    t = eq[eq.length - 1];
    t = nfkc(t).replace(/[。．.]+$/, '');
    // 1文字だけの答え（a, 3 など）は、図のほかの文字とまちがえやすいので伏せない
    if ([...t].length >= 2) out.add(t);
  }
  return [...out];
}

export function tokenRegex(tok: string): RegExp {
  const body = [...tok].map(escRe).join('\\s*');
  // 数字の途中（135 の中の 35、2.5 の中の 5）にはかけない
  const head = /^[0-9]/.test(tok) ? '(?<![0-9.])' : '';
  const tail = /[0-9]$/.test(tok) ? '(?![0-9])' : '';
  return new RegExp(head + body + tail, 'gi');
}

function maskText(text: string, toks: RegExp[], given: string): string {
  let t = text.normalize('NFKC');
  let hit = false;
  for (const re of toks) {
    re.lastIndex = 0;
    if (re.test(t)) { re.lastIndex = 0; t = t.replace(re, '？'); hit = true; }
  }
  return hit ? t : text;
}

// 描きなおすたびに別の図になると、図の部品が毎回つくり直される。同じ図・同じ答えなら同じものを返す。
const cache = new WeakMap<object, Map<string, unknown>>();

export function maskFigureForProblem<T>(figure: T, q: { question: string; answer: string; subQuestions?: { prompt: string }[] }): T {
  if (figure == null || typeof figure !== 'object') return figure;
  let m = cache.get(figure as object);
  if (m == null) { m = new Map(); cache.set(figure as object, m); }
  const ck = q.question + '\u0000' + q.answer;
  if (m.has(ck)) return m.get(ck) as T;
  const r = maskUncached(figure, q);
  m.set(ck, r);
  return r;
}

function maskUncached<T>(figure: T, q: { question: string; answer: string; subQuestions?: { prompt: string }[] }): T {
  const given = nfkc(q.question + (q.subQuestions ?? []).map((s) => s.prompt).join(''));
  // 問題文に書いてある値は条件なので伏せない
  const toks = answerTokens(q.answer).filter((t) => !tokenRegex(t).test(given)).map(tokenRegex);
  // 棒グラフの棒の上の数字が答えと同じなら「？」にする（図の文字ではなく数値で持っているため）
  const ansNums = answerTokens(q.answer).map((t) => t.match(/^-?\d+(\.\d+)?/)?.[0]).filter((x): x is string => x != null);
  const qNums = new Set((q.question + (q.subQuestions ?? []).map((s) => s.prompt).join('')).normalize('NFKC').match(/\d+(\.\d+)?/g) ?? []);
  const hideNums = new Set(ansNums.filter((n) => !qNums.has(n)).map(Number));
  if (toks.length === 0 && hideNums.size === 0) return figure;
  const walk = (v: unknown, key?: string): unknown => {
    if (typeof v === 'string') return key != null && TEXT_KEYS.has(key) ? maskText(v, toks, given) : v;
    if (Array.isArray(v)) {
      const arr = v.map((x) => walk(x, key));
      // 答えの式をラベルに持つ直線は、直線そのものが答えなので描かない（「y=？」だけの直線が残るため）
      if (key === 'lines') return arr.filter((l) => !(l && typeof l === 'object' && typeof (l as { label?: unknown }).label === 'string' && ((l as { label: string }).label).includes('？')));
      return arr;
    }
    if (v != null && typeof v === 'object') {
      const o: Record<string, unknown> = {};
      const rec = v as Record<string, unknown>;
      for (const [k, x] of Object.entries(v)) o[k] = k === 'steps' || k === 'caption' ? x : walk(x, k);
      if (key === 'bars' && typeof rec.value === 'number' && hideNums.has(rec.value)) o.hidden = true;
      return o;
    }
    return v;
  };
  return walk(figure) as T;
}

/** 図そのものが答えになっていて、伏せようがない問題。解く前の画面には図を出さず、解いたあとの解説でだけ見せる。 */
export const FIGURE_IS_ANSWER = new Set<string>([
  'grade_e6_rika_41', // 水溶液ごとの「酸性・中性・アルカリ性」の図が、そのまま答え
  'grade_e6_rika_38', // 右端のおもり「20g」が、与えられた20gと同じ値で、文字では区別できない
]);
