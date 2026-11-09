// 本試験対策（学校別）追加分A：麻布中学校（中学受験・算数 ID _13〜_50）の動く図解。算数の追加38問のうち20問に付ける。
// 各図は show() で7枚以上。座標は 320×240、下の帯（y 146〜）に説明の文字が出る。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;

// 文字の幅の見積もり（scripts/figlint.ts と同じ）。はみ出すときは文字サイズを自動で小さくする。
const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const textW = (t: string, s: number) => Math.max(...t.split('\n').map((l) => [...l].reduce((a, c) => a + charW(c, s), 0)));
const fit = (t: string, w: number, s: number) => { let z = s; while (textW(t, z) > w && z > 8) z -= 0.5; return z; };

const tx = (x: number, y: number, t: string, size = 14, color: string = C.ink, bold = true, anchor: 'start' | 'middle' | 'end' = 'middle'): E => {
  const room = anchor === 'middle' ? 2 * Math.min(x, 320 - x) - 8 : anchor === 'start' ? 316 - x : x - 4;
  return lb(x, y, t, fit(t, room, size), color, anchor, bold);
};
// 箱の中の文字は、箱に収まる大きさに自動で小さくする
const bf = (x: number, y: number, w: number, h: number, t: string, color?: string, fill?: string, size = 12): E => {
  const nl = t.split('\n').length;
  let z = fit(t, w - 6, size);
  while (nl * z * 1.2 > h - 1 && z > 8) z -= 0.5;
  return bx(x, y, w, h, t, color, fill, z);
};

// 下の帯：lines の先頭文字で色が決まる（=緑 / ~赤 / *紫 / それ以外は青）
const tone = (s: string): [string, string, string] => {
  const c = s[0];
  if (c === '=') return [s.slice(1), C.green, FILL.green];
  if (c === '~') return [s.slice(1), C.red, FILL.red];
  if (c === '*') return [s.slice(1), C.purple, FILL.purple];
  return [s, C.blue, FILL.blue];
};
const B = (lines: string[]): E[] => {
  if (lines.length === 1) {
    const [t, col, fill] = tone(lines[0]);
    const big = t.startsWith('答え');
    return band(146, bf(20, big ? 158 : 166, 280, big ? 42 : 36, t, col, fill, big ? 18 : 15));
  }
  const h = lines.length === 2 ? 36 : 27;
  const gap = lines.length === 2 ? 40 : 30;
  const y0 = lines.length === 2 ? 154 : 150;
  return band(146, ...lines.map((s, i) => { const [t, col, fill] = tone(s); return bf(20, y0 + i * gap, 280, h, t, col, fill, lines.length === 2 ? 14 : 13); }));
};
const S = (note: string, lines: string[], add: E[] = []): Slide => ({ note, add: [...add, ...B(lines)] });
const SF = (note: string, lines: string[], draw: E[]): Slide => ({ note, add: [...fresh(...draw), ...B(lines)] });
// 上の欄に文字の行だけを並べる（色は行頭の記号：=緑 ~赤 *紫）
const textLines = (strs: string[]): E[] => {
  const n = strs.length;
  const size = n === 1 ? 24 : n === 2 ? 20 : n === 3 ? 18 : 16;
  const dy = n === 1 ? 0 : n <= 3 ? 34 : 28;
  return strs.map((s, i) => {
    const c = s[0];
    const [t, col] = c === '=' ? [s.slice(1), C.green] : c === '~' ? [s.slice(1), C.red] : c === '*' ? [s.slice(1), C.purple] : [s, C.ink];
    return lb(160, 70 + (i - (n - 1) / 2) * dy + size * 0.35, t, fit(t, 288, size), col, 'middle', true);
  });
};
const P = (note: string, strs: string[], bottom: string[], extra: E[] = []): Slide => SF(note, bottom, [...textLines(strs), ...extra]);
const ANS = (t: string, note?: string): Slide => S(note ?? `答えは${t}です。`, [`=答え　${t}`]);

const poly = (cx: number, cy: number, r: number, n: number, rot = -90): [number, number][] =>
  Array.from({ length: n }, (_, k) => { const a = ((rot + (360 / n) * k) * Math.PI) / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number]; });
const circ = (cx: number, cy: number, r: number, color: string = C.ink, fill?: string): E => pg(poly(cx, cy, r, 48), color, fill);
const arcLines = (cx: number, cy: number, r: number, a0: number, a1: number, color: string = C.ink, width = 2.5): E[] => {
  const out: E[] = []; const n = 14;
  for (let i = 0; i < n; i++) {
    const t0 = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, t1 = ((a0 + ((a1 - a0) * (i + 1)) / n) * Math.PI) / 180;
    out.push(ln(cx + r * Math.cos(t0), cy - r * Math.sin(t0), cx + r * Math.cos(t1), cy - r * Math.sin(t1), color, false, width));
  }
  return out;
};

