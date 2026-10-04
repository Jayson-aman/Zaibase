// 絵（diagram）の図解の「文字のはみ出し・重なり」を機械で見つける。
//   使い方: npx esbuild scripts/figlint.ts --bundle --platform=node --format=cjs --loader:.png=empty --outfile=/tmp/figlint.cjs && node /tmp/figlint.cjs [data/lesson-figs-sansu-pic*.ts のキー接頭辞]
// 画面は 320×240。文字の幅は、全角＝文字サイズ、半角英数＝0.55倍、で見積もる。
import type { Figure, DiagramElement } from '../data/figures';
import * as fs from 'fs';
import { getLessonFigure } from '../data/lesson-figures';
import * as path from 'path';

type Box = { x0: number; y0: number; x1: number; y1: number };
const W = 320, H = 240;
const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const textW = (t: string, s: number) => Math.max(...t.split('\n').map((l) => [...l].reduce((a, c) => a + charW(c, s), 0)));
const lines = (t: string) => t.split('\n').length;

function bboxOf(el: DiagramElement): { kind: 'label' | 'boxtext'; b: Box; text: string; rect?: Box } | null {
  if (el.t === 'label') {
    const s = el.size ?? 12; const w = textW(el.text, s) * (el.bold ? 1.04 : 1); const h = lines(el.text) * s * 1.2;
    const a = el.anchor ?? 'start';
    const x0 = a === 'start' ? el.x : a === 'end' ? el.x - w : el.x - w / 2;
    return { kind: 'label', text: el.text, b: { x0, x1: x0 + w, y0: el.y - s * 0.95, y1: el.y - s * 0.95 + h } };
  }
  if ((el.t === 'box' || el.t === 'circle') && el.text) {
    const s = el.size ?? 12; const w = textW(el.text, s); const h = lines(el.text) * s * 1.2;
    const [cx, cy, bw, bh] = el.t === 'box' ? [el.x + el.w / 2, el.y + el.h / 2, el.w, el.h] : [el.cx, el.cy, el.r * 2, el.r * 2];
    return { kind: 'boxtext', text: el.text, b: { x0: cx - w / 2, x1: cx + w / 2, y0: cy - h / 2, y1: cy + h / 2 }, rect: { x0: cx - bw / 2, x1: cx + bw / 2, y0: cy - bh / 2, y1: cy + bh / 2 } };
  }
  return null;
}
const inter = (a: Box, b: Box) => Math.max(0, Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)) * Math.max(0, Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0));
const area = (a: Box) => (a.x1 - a.x0) * (a.y1 - a.y0);

export function lintDiagram(id: string, f: Figure): string[] {
  const out: string[] = [];
  if (f.kind !== 'diagram') return out;
  const items = f.parts.map((p, i) => ({ i, p, bb: bboxOf(p) }));
  for (const { i, p, bb } of items) {
    if (!bb) {
      // 円・箱・線の図形そのものが画面の外に出ていないか
      const xs = p.t === 'box' ? [p.x, p.x + p.w] : p.t === 'circle' ? [p.cx - p.r, p.cx + p.r] : p.t === 'line' || p.t === 'arrow' ? [p.x1, p.x2] : [];
      const ys = p.t === 'box' ? [p.y, p.y + p.h] : p.t === 'circle' ? [p.cy - p.r, p.cy + p.r] : p.t === 'line' || p.t === 'arrow' ? [p.y1, p.y2] : [];
      if (xs.some((x) => x < 0 || x > W) || ys.some((y) => y < 0 || y > H)) out.push(`${id} 部品${i}(${p.t}) が画面の外`);
      continue;
    }
    const { b, text, kind, rect } = bb;
    if (b.x0 < 2 || b.x1 > W - 2 || b.y0 < 2 || b.y1 > H - 2) out.push(`${id} 「${text.replace(/\n/g, '／').slice(0, 14)}」が画面の外にはみ出す (x${Math.round(b.x0)}〜${Math.round(b.x1)}, y${Math.round(b.y0)}〜${Math.round(b.y1)})`);
    if (kind === 'boxtext' && rect && (b.x1 - b.x0 > rect.x1 - rect.x0 - 3 || b.y1 - b.y0 > rect.y1 - rect.y0 - 1)) out.push(`${id} 「${text.replace(/\n/g, '／').slice(0, 14)}」が箱・円に収まらない`);
  }
  for (let a = 0; a < items.length; a++) for (let c = a + 1; c < items.length; c++) {
    const A = items[a].bb, B = items[c].bb; if (!A || !B) continue;
    const o = inter(A.b, B.b); if (o > 0.25 * Math.min(area(A.b), area(B.b))) out.push(`${id} 文字どうしが重なる「${A.text.replace(/\n/g, '／').slice(0, 10)}」と「${B.text.replace(/\n/g, '／').slice(0, 10)}」`);
  }
  // 文字（ラベル）が、ほかの箱の中の字にかぶる、またはほかの円・箱の上に乗る
  for (const L of items) { if (!L.bb || L.bb.kind !== 'label') continue; for (const X of items) {
    if (X.p.t !== 'box' && X.p.t !== 'circle') continue; if (X.bb) continue; // 文字なしの箱・円
    const r: Box = X.p.t === 'box' ? { x0: X.p.x, x1: X.p.x + X.p.w, y0: X.p.y, y1: X.p.y + X.p.h } : { x0: X.p.cx - X.p.r, x1: X.p.cx + X.p.r, y0: X.p.cy - X.p.r, y1: X.p.cy + X.p.r };
    if (inter(L.bb.b, r) > 0.3 * area(L.bb.b)) out.push(`${id} 「${L.bb.text.replace(/\n/g, '／').slice(0, 10)}」が箱・円の上に乗っている`);
  } }
  return out;
}

if (require.main === module) {
  // data/lesson-figs-sansu-pic*.ts に書かれた図（キーが「名前: show(」）を、実際に画面で使われる形で読んで検査する
  const dir = path.resolve(process.cwd(), 'data');
  const prefix = process.argv[2] ?? 'lesson-figs-sansu-pic';
  let n = 0, bad = 0;
  for (const file of fs.readdirSync(dir).filter((x) => x.startsWith(prefix) && x.endsWith('.ts'))) {
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const m of src.matchAll(/^  ['"]?([A-Za-z0-9_]+)['"]?: (?:show\(|\(\(\) =>)/gm)) {
      const fig = getLessonFigure(m[1]); if (!fig) { console.log('✗ ' + m[1] + ' が見つからない（配線されていない）'); bad++; continue; }
      n++; const r = lintDiagram(m[1], fig); bad += r.length; r.forEach((x) => console.log('✗ ' + x));
    }
  }
  console.log(`図 ${n} 枚、指摘 ${bad} 件`);
}
