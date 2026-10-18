// 公式集の「動く図解スライド」を書くための小さな道具。
// 座標は 320×240 の内部座標（FigureView の VBW×VBH）。
// スライドごとに add に入れた部品が、順に描き足されていく。
import type { DiagramElement, DiagramFigure } from './figures';

export const C = {
  main: '#B5622E',
  blue: '#0284C7',
  green: '#16A34A',
  red: '#E11D48',
  purple: '#9333EA',
  gray: '#6E645C',
  ink: '#2B2420',
} as const;

export const FILL = {
  warm: '#FFF8EC',
  blue: '#E0F2FE',
  green: '#DCFCE7',
  red: '#FFE4E6',
  purple: '#F3E8FF',
  yellow: '#FEF9C3',
  gray: '#F1EFEA',
} as const;

export const bx = (x: number, y: number, w: number, h: number, text?: string, color?: string, fill?: string, size?: number): DiagramElement =>
  ({ t: 'box', x, y, w, h, text, color, fill, size });
export const lb = (x: number, y: number, text: string, size?: number, color?: string, anchor?: 'start' | 'middle' | 'end', bold?: boolean): DiagramElement =>
  ({ t: 'label', x, y, text, size, color, anchor, bold });
export const ar = (x1: number, y1: number, x2: number, y2: number, color?: string, dashed?: boolean): DiagramElement =>
  ({ t: 'arrow', x1, y1, x2, y2, color, dashed });
export const ln = (x1: number, y1: number, x2: number, y2: number, color?: string, dashed?: boolean, width?: number): DiagramElement =>
  ({ t: 'line', x1, y1, x2, y2, color, dashed, width });
export const ci = (cx: number, cy: number, r: number, text?: string, color?: string, fill?: string, size?: number): DiagramElement =>
  ({ t: 'circle', cx, cy, r, text, color, fill, size });
export const pg = (pts: [number, number][], color?: string, fill?: string): DiagramElement =>
  ({ t: 'poly', pts, color, fill });
export const sc = (cx: number, cy: number, r: number, from: number, to: number, color?: string, fill?: string): DiagramElement =>
  ({ t: 'sector', cx, cy, r, from, to, color, fill });

export type Slide = { note: string; add?: DiagramElement[] };

/** スライドの並びから、動く図解（diagram）を組み立てる。 */
export function show(slides: Slide[], caption?: string): DiagramFigure {
  const parts: DiagramElement[] = [];
  const stepParts: number[] = [];
  for (const s of slides) {
    if (s.add) parts.push(...s.add);
    stepParts.push(parts.length);
  }
  return { kind: 'diagram', parts, stepParts, steps: slides.map((s) => s.note), caption, buildSteps: slides.length };
}

/** 横一列に並べた箱（左から順に矢印でつなぐ）。返り値は箱ごとの部品（矢印つき）。 */
export function flow(labels: string[], y: number, opts?: { h?: number; color?: string; fill?: string; size?: number; pad?: number; gap?: number }): DiagramElement[][] {
  const h = opts?.h ?? 40;
  const pad = opts?.pad ?? 8;
  const gap = opts?.gap ?? 16;
  const n = labels.length;
  const w = (320 - pad * 2 - gap * (n - 1)) / n;
  return labels.map((t, i) => {
    const x = pad + i * (w + gap);
    const els: DiagramElement[] = [];
    if (i > 0) els.push(ar(x - gap + 1, y + h / 2, x - 1, y + h / 2, opts?.color));
    els.push(bx(x, y, w, h, t, opts?.color, opts?.fill, opts?.size));
    return els;
  });
}

/** 縦に並べた箱（上から順に矢印でつなぐ）。 */
export function stack(labels: string[], x: number, w: number, y0: number, opts?: { h?: number; gap?: number; color?: string; fill?: string; size?: number }): DiagramElement[][] {
  const h = opts?.h ?? 30;
  const gap = opts?.gap ?? 14;
  return labels.map((t, i) => {
    const y = y0 + i * (h + gap);
    const els: DiagramElement[] = [];
    if (i > 0) els.push(ar(x + w / 2, y - gap + 1, x + w / 2, y - 1, opts?.color));
    els.push(bx(x, y, w, h, t, opts?.color, opts?.fill, opts?.size));
    return els;
  });
}

/** 点（ごばん・人・個数のたとえ）を格子状に並べる。 */
export function dots(n: number, x0: number, y0: number, opts?: { r?: number; gap?: number; perRow?: number; color?: string; fill?: string; texts?: string[] }): DiagramElement[] {
  const r = opts?.r ?? 6;
  const gap = opts?.gap ?? 16;
  const per = opts?.perRow ?? 10;
  const out: DiagramElement[] = [];
  for (let i = 0; i < n; i++) {
    out.push(ci(x0 + (i % per) * gap, y0 + Math.floor(i / per) * gap, r, opts?.texts?.[i], opts?.color, opts?.fill, 9));
  }
  return out;
}

/** 前のスライドの下の帯を、白い箱でおおいかくして、書きかえる（同じ位置に文字を重ねると読めなくなるため）。 */
export const cover = (x: number, y: number, w: number, h: number): DiagramElement =>
  bx(x, y, w, h, undefined, '#FFFFFF', '#FFFFFF');

/** 下の帯（y から下）を白でぬりつぶして、新しい部品に置きかえる。 */
export const band = (y: number, ...els: DiagramElement[]): DiagramElement[] => [cover(0, y, 320, 240 - y), ...els];

/** 画面全体をぬりつぶして、まっさらな図に切りかえる。 */
export const fresh = (...els: DiagramElement[]): DiagramElement[] => [cover(0, 0, 320, 240), ...els];
