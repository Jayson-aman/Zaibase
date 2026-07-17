#!/usr/bin/env node
/**
 * 正確な日本の都道府県境界（GeoJSON, dataofjapan/land, public domain）から、
 * ahiruの地理マップ用の軽量SVGパスデータ（data/japanPrefectures.ts）を生成する。
 *
 * - 47都道府県を8地方に色分け
 * - 緯度経度を viewBox 0 0 300 420 の座標へ投影（本州の縦横比を保つ）
 * - Douglas-Peucker で簡略化し、バンドルサイズを小さく保つ
 * - 沖縄は本土から遠いので、左下にインセット（別枠）で小さく配置
 *
 * 使い方:
 *   curl -sL https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson -o /tmp/japan.geojson
 *   node scripts/build-japan-map.mjs /tmp/japan.geojson
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = process.argv[2] || '/tmp/japan.geojson';
const OUT = path.join(__dirname, '../data/japanPrefectures.ts');

// 都道府県コード(1-47) → 地方
const PREF_REGION = {};
const set = (ids, region) => ids.forEach((i) => (PREF_REGION[i] = region));
set([1], 'hokkaido');
set([2, 3, 4, 5, 6, 7], 'tohoku');
set([8, 9, 10, 11, 12, 13, 14], 'kanto');
set([15, 16, 17, 18, 19, 20, 21, 22, 23], 'chubu');
set([24, 25, 26, 27, 28, 29, 30], 'kinki');
set([31, 32, 33, 34, 35], 'chugoku');
set([36, 37, 38, 39], 'shikoku');
set([40, 41, 42, 43, 44, 45, 46, 47], 'kyushu');

const REGION_COLOR = {
  hokkaido: '#5B8DEF',
  tohoku: '#27AE60',
  kanto: '#E74C3C',
  chubu: '#F39C12',
  kinki: '#9B59B6',
  chugoku: '#1ABC9C',
  shikoku: '#3498DB',
  kyushu: '#E67E22',
};

// ── viewBox とレイアウト ──────────────────────────────────
const VB_W = 300;
const VB_H = 420;
// 本土（沖縄以外）を描く枠
const MAIN_BOX = { x0: 20, y0: 12, x1: 288, y1: 336 };
// 沖縄インセット枠（左下）
const OKI_BOX = { x0: 14, y0: 350, x1: 78, y1: 406 };

const LAT_MID = 38;
const KX = Math.cos((LAT_MID * Math.PI) / 180); // 経度方向の縮み

// ── 幾何ユーティリティ ────────────────────────────────────
function ringArea(ring) {
  let a = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a) / 2;
}

// Douglas-Peucker 簡略化
function simplify(points, tol) {
  if (points.length < 3) return points;
  const sqTol = tol * tol;
  const keep = new Array(points.length).fill(false);
  keep[0] = keep[points.length - 1] = true;
  const stack = [[0, points.length - 1]];
  const sqSegDist = (p, a, b) => {
    let [x, y] = a;
    let dx = b[0] - x;
    let dy = b[1] - y;
    if (dx !== 0 || dy !== 0) {
      const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x = b[0];
        y = b[1];
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }
    dx = p[0] - x;
    dy = p[1] - y;
    return dx * dx + dy * dy;
  };
  while (stack.length) {
    const [first, last] = stack.pop();
    let maxD = 0;
    let idx = -1;
    for (let i = first + 1; i < last; i++) {
      const d = sqSegDist(points[i], points[first], points[last]);
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > sqTol && idx !== -1) {
      keep[idx] = true;
      stack.push([first, idx], [idx, last]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

// MultiPolygon / Polygon から外側リング配列を取り出す
function outerRings(geom) {
  const polys = geom.type === 'MultiPolygon' ? geom.coordinates : [geom.coordinates];
  // 各ポリゴンの外側リング(rings[0])のみ使う
  return polys.map((p) => p[0]);
}

// ── メイン ────────────────────────────────────────────────
const gj = JSON.parse(fs.readFileSync(SRC, 'utf8'));

// 生の投影座標（緯度経度→平面）
const proj = ([lng, lat]) => [lng * KX, -lat];

// 本土の bbox を求める（沖縄=47 と、遠い離島を除外）
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const f of gj.features) {
  const id = f.properties.id;
  if (id === 47) continue; // 沖縄は別枠
  for (const ring of outerRings(f.geometry)) {
    for (const c of ring) {
      // 遠い離島（南鳥島・小笠原・沖ノ鳥島・与那国など）は bbox から除外し、
      // 本土4島（北海道〜九州本体）だけで縮尺を決める
      const [lng, lat] = c;
      if (lng < 128.5 || lng > 146.5 || lat < 30.9 || lat > 45.7) continue;
      const [px, py] = proj(c);
      if (px < minX) minX = px;
      if (px > maxX) maxX = px;
      if (py < minY) minY = py;
      if (py > maxY) maxY = py;
    }
  }
}

const mainW = MAIN_BOX.x1 - MAIN_BOX.x0;
const mainH = MAIN_BOX.y1 - MAIN_BOX.y0;
const scale = Math.min(mainW / (maxX - minX), mainH / (maxY - minY));
// 中央寄せ用オフセット
const offX = MAIN_BOX.x0 + (mainW - (maxX - minX) * scale) / 2;
const offY = MAIN_BOX.y0 + (mainH - (maxY - minY) * scale) / 2;
const toMain = (c) => {
  const [px, py] = proj(c);
  return [(px - minX) * scale + offX, (py - minY) * scale + offY];
};

// 沖縄インセットの投影（沖縄本島の bbox に fit）
function buildOkinawaProjector(feature) {
  let nx = Infinity, ny = Infinity, xx = -Infinity, xy = -Infinity;
  // 沖縄本島（最大ポリゴン）だけ使う
  const rings = outerRings(feature.geometry);
  let best = rings[0], bestA = 0;
  for (const r of rings) {
    const a = ringArea(r);
    if (a > bestA) {
      bestA = a;
      best = r;
    }
  }
  for (const c of best) {
    const [px, py] = proj(c);
    if (px < nx) nx = px;
    if (px > xx) xx = px;
    if (py < ny) ny = py;
    if (py > xy) xy = py;
  }
  const w = OKI_BOX.x1 - OKI_BOX.x0;
  const h = OKI_BOX.y1 - OKI_BOX.y0;
  const s = Math.min(w / (xx - nx), h / (xy - ny)) * 0.8;
  const ox = OKI_BOX.x0 + (w - (xx - nx) * s) / 2;
  const oy = OKI_BOX.y0 + (h - (xy - ny) * s) / 2;
  return {
    ring: best,
    project: (c) => {
      const [px, py] = proj(c);
      return [(px - nx) * s + ox, (py - ny) * s + oy];
    },
  };
}

const AREA_MIN = 0.0006; // これより小さいポリゴン(離島)は捨てる（投影前の平面積）
const SIMPLIFY_TOL = 0.55; // px

function ringToPath(ring, project) {
  const pts = ring.map(project);
  const simp = simplify(pts, SIMPLIFY_TOL);
  if (simp.length < 3) return '';
  const r = (n) => Math.round(n * 10) / 10;
  let d = `M ${r(simp[0][0])} ${r(simp[0][1])}`;
  for (let i = 1; i < simp.length; i++) d += ` L ${r(simp[i][0])} ${r(simp[i][1])}`;
  return d + ' Z';
}

const prefectures = [];
for (const f of gj.features) {
  const id = f.properties.id;
  const region = PREF_REGION[id];
  const nameJa = f.properties.nam_ja;
  let subpaths = [];
  let cxSum = 0, cySum = 0, cN = 0;

  if (id === 47) {
    // 沖縄：本島のみインセットに描く
    const okp = buildOkinawaProjector(f);
    const d = ringToPath(okp.ring, okp.project);
    if (d) subpaths.push(d);
    const c = okp.ring.map(okp.project);
    for (const [x, y] of c) {
      cxSum += x;
      cySum += y;
      cN++;
    }
  } else {
    const rings = outerRings(f.geometry)
      .map((r) => ({ r, a: ringArea(r) }))
      .filter((o) => o.a >= AREA_MIN)
      .sort((a, b) => b.a - a.a)
      .slice(0, 6); // 大きい順に最大6個（本島＋主要離島）
    for (const { r } of rings) {
      const d = ringToPath(r, toMain);
      if (d) {
        subpaths.push(d);
        for (const c of r) {
          const [x, y] = toMain(c);
          cxSum += x;
          cySum += y;
          cN++;
        }
      }
    }
  }

  if (subpaths.length === 0) continue;
  prefectures.push({
    id,
    nameJa,
    region,
    color: REGION_COLOR[region],
    cx: Math.round((cxSum / cN) * 10) / 10,
    cy: Math.round((cySum / cN) * 10) / 10,
    path: subpaths.join(' '),
  });
}

prefectures.sort((a, b) => a.id - b.id);

const header = `// このファイルは scripts/build-japan-map.mjs による自動生成です。手で編集しないでください。
// 出典：dataofjapan/land (japan.geojson, public domain) を簡略化・投影したもの。
// 座標系：viewBox 0 0 ${VB_W} ${VB_H}（沖縄は左下インセット）

export type PrefectureShape = {
  id: number;
  nameJa: string;
  region: string;
  color: string;
  /** 都道府県ラベル用のおおよその中心（viewBox座標） */
  cx: number;
  cy: number;
  /** SVGパス（複数の島は空白区切りで連結） */
  path: string;
};

export const JP_MAP_VIEWBOX = { w: ${VB_W}, h: ${VB_H} };

export const prefectureShapes: PrefectureShape[] = ${JSON.stringify(prefectures, null, 2)};
`;

fs.writeFileSync(OUT, header, 'utf8');
const kb = (fs.statSync(OUT).size / 1024).toFixed(1);
console.log(`Wrote ${prefectures.length} prefectures to ${OUT} (${kb} KB)`);

// ── 山脈・川を同じ投影で座標化して出力（geographyTerrain.ts に貼る用） ──
const r1 = (n) => Math.round(n * 10) / 10;
function projLine(latlngs) {
  const pts = latlngs.map(toMain);
  const r = (n) => Math.round(n * 10) / 10;
  // 川はなめらかに、山脈はギザ線（どちらも L でつなぐ。呼び出し側で調整）
  let d = `M ${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) d += ` L ${r(pts[i][0])} ${r(pts[i][1])}`;
  const cx = r(pts.reduce((s, p) => s + p[0], 0) / pts.length);
  const cy = r(pts.reduce((s, p) => s + p[1], 0) / pts.length);
  return { d, cx, cy, first: [r(pts[0][0]), r(pts[0][1])] };
}

const MOUNTAINS = {
  hidaka: [[142.85, 43.3], [143.0, 42.6], [142.9, 42.0]],
  ou: [[140.8, 40.4], [140.75, 39.6], [140.5, 38.8], [140.35, 38.0]],
  echigo: [[139.3, 37.2], [139.05, 36.8], [138.9, 36.6]],
  hida: [[137.65, 36.6], [137.62, 36.3], [137.7, 36.0]],
  kiso: [[137.85, 35.95], [137.83, 35.6]],
  akaishi: [[138.25, 35.95], [138.2, 35.5]],
  chugoku: [[134.4, 35.3], [133.5, 35.25], [132.6, 35.0], [131.7, 34.75]],
  shikoku: [[134.0, 33.9], [133.4, 33.8], [132.9, 33.8]],
  kyushu: [[131.2, 33.0], [131.0, 32.5], [130.9, 32.05]],
};
const RIVERS = {
  shinano: [[138.2, 36.2], [138.5, 36.9], [139.0, 37.95]],
  tone: [[139.0, 36.8], [139.8, 36.1], [140.85, 35.73]],
  ishikari: [[143.0, 43.5], [142.4, 43.75], [141.7, 43.3], [141.32, 43.25]],
  kitakami: [[141.1, 39.9], [141.2, 39.0], [141.3, 38.42]],
  kiso: [[137.6, 35.8], [136.9, 35.4], [136.7, 35.05]],
  mogami: [[140.05, 38.0], [140.0, 38.6], [139.85, 38.93]],
  yoshino: [[133.9, 33.9], [134.25, 34.0], [134.6, 34.07]],
  chikugo: [[131.0, 33.1], [130.6, 33.2], [130.4, 33.15]],
  yodo: [[135.9, 35.0], [135.6, 34.85], [135.42, 34.65]],
};

console.log('\n=== MOUNTAIN paths (geographyTerrain.ts へ) ===');
for (const [id, ll] of Object.entries(MOUNTAINS)) {
  const p = projLine(ll);
  console.log(`${id}: path='${p.d}'  labelX:${p.cx} labelY:${r1(p.cy - 6)}`);
}
console.log('\n=== RIVER paths ===');
for (const [id, ll] of Object.entries(RIVERS)) {
  const p = projLine(ll);
  console.log(`${id}: path='${p.d}'  labelX:${p.cx} labelY:${r1(p.cy - 4)}`);
}
