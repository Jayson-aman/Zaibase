// 2027年2月号 本試験対策（社会・中学受験）担当B c26〜c50 の動く図解。キーは問題ID。
// 問題の場面 → 手がかり → 理由（なぜ？） → 答え → 確かめ の順に、7枚で動かす。
// 座標は 320×240。下の帯（y=160 から）にそのスライドのひとことを出す。上の図は y=154 までに収める。
// 文字は、箱の幅に合わせて自動で折りかえし、箱の高さも文字の行数から決める（はみ出し・重なりを防ぐ）。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];

// 文字の幅の見積もり（全角＝文字サイズ、半角＝約0.5倍）。
const cw = (ch: string, s: number): number =>
  /[\x20-\x7e]/.test(ch) ? (ch === ' ' ? 0.3 : /[0-9]/.test(ch) ? 0.58 : /[A-Z]/.test(ch) ? 0.66 : 0.52) * s : s;
const tw = (t: string, s: number): number => [...t].reduce((a, c) => a + cw(c, s), 0);
const NOHEAD = '、。）」』，．,.！？ー';
const NOTAIL = '（「『';
// 指定の幅（maxW）をこえないように、文字を折りかえす（もとの改行も生かす）。
const wrap = (t: string, s: number, maxW: number): string =>
  t
    .split('\n')
    .map((line) => {
      const out: string[] = [];
      let cur = '';
      for (const ch of [...line]) {
        if (tw(cur + ch, s) > maxW) {
          if (NOHEAD.includes(ch) && cur.length > 1) {
            out.push(cur.slice(0, -1));
            cur = cur[cur.length - 1] + ch;
            continue;
          }
          if (cur && NOTAIL.includes(cur[cur.length - 1])) {
            out.push(cur.slice(0, -1));
            cur = cur[cur.length - 1] + ch;
            continue;
          }
          out.push(cur);
          cur = ch;
        } else cur += ch;
      }
      out.push(cur);
      return out.join('\n');
    })
    .join('\n');
const nl = (t: string): number => t.split('\n').length;
const hOf = (t: string, s: number): number => Math.ceil(nl(t) * s * 1.22 + 10);

// 下の帯（そのスライドのひとこと）
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const w = wrap(t, size, 276);
  return bx(14, 160, 292, 16 + 15 * nl(w), w, c[0], c[1], size);
};
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 縦に並べた箱（自動の高さ）。arrows=true で上から下へ矢印。
const V = (items: (string | [string, Col])[], c: Col = BLUE, size = 12, y0 = 8, arrows = false, gap = 7): DiagramElement[] => {
  const out: DiagramElement[] = [];
  let y = y0;
  items.forEach((it, i) => {
    const [t0, cc] = typeof it === 'string' ? [it, c] : it;
    const t = wrap(t0, size, 280);
    const h = Math.max(26, hOf(t, size));
    if (arrows && i > 0) out.push(ar(160, y - gap + 1, 160, y - 1, cc[0]));
    out.push(bx(14, y, 292, h, t, cc[0], cc[1], size));
    y += h + gap;
  });
  return out;
};
// 「なぜ？」→ 答え
const QA = (q: string, a: string, c: Col = BLUE, asz = 13): DiagramElement[] => {
  const qt = wrap('なぜ？ ' + q.replace(/^なぜ/, ''), 12, 280);
  const at = wrap(a, asz, 280);
  const qh = Math.max(30, hOf(qt, 12));
  const ah = Math.max(40, hOf(at, asz));
  return [
    bx(12, 8, 296, qh, qt, PURPLE[0], PURPLE[1], 12),
    ar(160, 8 + qh + 1, 160, 8 + qh + 13, PURPLE[0]),
    bx(12, 8 + qh + 14, 296, ah, at, c[0], c[1], asz),
  ];
};
// 左右2つの箱（矢印つき）＋下のひとこと
const P = (l: string, r: string, cl: Col = BLUE, cr: Col = MAIN, note?: string, size = 12): DiagramElement[] => {
  const lt = wrap(l, size, 116);
  const rt = wrap(r, size, 116);
  const h = Math.max(hOf(lt, size), hOf(rt, size), 54);
  const out: DiagramElement[] = [
    bx(10, 12, 130, h, lt, cl[0], cl[1], size),
    ar(143, 12 + h / 2, 177, 12 + h / 2, C.ink),
    bx(180, 12, 130, h, rt, cr[0], cr[1], size),
  ];
  if (note) {
    const n = wrap(note, 13, 290);
    out.push(lb(160, 12 + h + 22, n, 13, C.ink, 'middle', true));
  }
  return out;
};
// 年表（横一列）。items は [年, ラベル]。
const T = (items: [string, string][], y = 56, c: Col = MAIN): DiagramElement[] => {
  const n = items.length;
  const slot = 292 / n;
  const out: DiagramElement[] = [ln(14, y, 306, y, c[0], false, 2)];
  items.forEach(([yr, lab], i) => {
    const x = 14 + (i + 0.5) * slot;
    out.push(ci(x, y, 5, undefined, c[0], c[1]));
    out.push(lb(x, y - 12, yr, 11, c[0], 'middle', true));
    wrap(lab, 10, slot - 6)
      .split('\n')
      .forEach((t, j) => out.push(lb(x, y + 20 + j * 13, t, 10, C.ink, 'middle')));
  });
  return out;
};
// 横に並べた箱（左から右へ矢印）
const F = (labels: string[], y = 20, c: Col = MAIN, size = 12): DiagramElement[] => {
  const n = labels.length;
  const gap = 14;
  const w = (304 - gap * (n - 1)) / n;
  const ts = labels.map((t) => wrap(t, size, w - 8));
  const h = Math.max(...ts.map((t) => hOf(t, size)), 44);
  const out: DiagramElement[] = [];
  ts.forEach((t, i) => {
    const x = 8 + i * (w + gap);
    if (i > 0) out.push(ar(x - gap + 1, y + h / 2, x - 1, y + h / 2, c[0]));
    out.push(bx(x, y, w, h, t, c[0], c[1], size));
  });
  return out;
};
const X = (a: string, b: string, d: string): DiagramElement[] => V([a, b, d].map((t) => [t, RED] as [string, Col]), RED, 11);
const ANS = (t: string, c: Col = GREEN, size = 14): DiagramElement[] => V([t], c, size, 14);

export const figuresHonshiken202702ShakaiChugaku2: Record<string, Figure> = {};
const add = (n: number, f: Figure): void => {
  figuresHonshiken202702ShakaiChugaku2['honshiken_2027_02_shakai_c' + n] = f;
};
