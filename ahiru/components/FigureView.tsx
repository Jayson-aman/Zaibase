import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Svg, {
  Line,
  Circle as SvgCircle,
  Path,
  Polygon as SvgPolygon,
  Polyline,
  G,
  Text as SvgText,
  Ellipse,
  Rect,
  Defs,
  ClipPath,
} from 'react-native-svg';
import type {
  Figure,
  CoordFigure,
  PolyFigure,
  CircleFigure,
  SolidFigure,
  NumberLineFigure,
  BoxplotFigure,
  ChemEqFigure,
  ChemStructFigure,
  LineChartFigure,
  BarChartFigure,
  PieChartFigure,
  CircuitFigure,
  CircuitComponent,
  NetFigure,
  StratumFigure,
  JapanMapFigure,
  BioDiagramFigure,
  Pt,
} from '../data/figures';
import { prefectureShapes, JP_MAP_VIEWBOX } from '../data/japanPrefectures';

// 内部描画座標系（viewBox）。Svgの実サイズは画面幅に合わせて拡大縮小する。
const VBW = 320;
const VBH = 240;
const AXIS = '#334155';
const GRID = '#E2E8F0';
const INK = '#0F172A';
const ACCENT = '#0EA5E9';
const FILL = 'rgba(14,165,233,0.14)';
const PALETTE = ['#0EA5E9', '#E11D48', '#16A34A', '#9333EA', '#F59E0B'];

type Area = { x0: number; y0: number; w: number; h: number };

function useSize() {
  const cardW = Math.min(Dimensions.get('window').width - 64, 460);
  const w = Math.max(220, cardW);
  return { w, h: (w * VBH) / VBW };
}

// ---------- 座標平面 ----------

function niceStep(range: number): number {
  const raw = range / 8;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  const step = n >= 5 ? 5 : n >= 2 ? 2 : 1;
  return step * pow;
}

function CoordinateFig({ fig, uid }: { fig: CoordFigure; uid: string }) {
  const pad = 24;
  const area: Area = { x0: pad, y0: 12, w: VBW - pad * 2, h: VBH - pad * 2 };

  // 範囲を決める（明示が無ければデータから推定）
  const xs: number[] = [];
  const ys: number[] = [];
  fig.points?.forEach((p) => {
    xs.push(p.x);
    ys.push(p.y);
  });
  fig.polygon?.forEach((p) => {
    xs.push(p.x);
    ys.push(p.y);
  });
  fig.segments?.forEach(([a, b]) => {
    xs.push(a.x, b.x);
    ys.push(a.y, b.y);
  });
  const xr: [number, number] = fig.xRange ?? [
    Math.min(-1, ...(xs.length ? xs : [0])) - 1,
    Math.max(3, ...(xs.length ? xs : [0])) + 1,
  ];
  const yr: [number, number] = fig.yRange ?? [
    Math.min(-1, ...(ys.length ? ys : [0])) - 1,
    Math.max(3, ...(ys.length ? ys : [0])) + 1,
  ];

  const px = (x: number) => area.x0 + ((x - xr[0]) / (xr[1] - xr[0])) * area.w;
  const py = (y: number) => area.y0 + area.h - ((y - yr[0]) / (yr[1] - yr[0])) * area.h;
  const inY = (y: number) => y >= yr[0] && y <= yr[1];

  const els: React.ReactNode[] = [];

  // グリッド＋目盛り
  const sx = niceStep(xr[1] - xr[0]);
  const sy = niceStep(yr[1] - yr[0]);
  for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1] + 1e-9; x += sx) {
    els.push(<Line key={`gx${x}`} x1={px(x)} y1={area.y0} x2={px(x)} y2={area.y0 + area.h} stroke={GRID} strokeWidth={1} />);
  }
  for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1] + 1e-9; y += sy) {
    els.push(<Line key={`gy${y}`} x1={area.x0} y1={py(y)} x2={area.x0 + area.w} y2={py(y)} stroke={GRID} strokeWidth={1} />);
  }

  // 軸
  const y0 = inY(0) ? py(0) : area.y0 + area.h;
  const x0 = xr[0] <= 0 && xr[1] >= 0 ? px(0) : area.x0;
  els.push(<Line key="xaxis" x1={area.x0} y1={y0} x2={area.x0 + area.w} y2={y0} stroke={AXIS} strokeWidth={1.6} />);
  els.push(<Line key="yaxis" x1={x0} y1={area.y0} x2={x0} y2={area.y0 + area.h} stroke={AXIS} strokeWidth={1.6} />);
  els.push(<SvgText key="olab" x={x0 - 6} y={y0 + 13} fontSize={11} fill={AXIS} textAnchor="end">O</SvgText>);
  // 軸目盛り数値
  for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1] + 1e-9; x += sx) {
    if (Math.abs(x) < 1e-9) continue;
    els.push(<SvgText key={`tx${x}`} x={px(x)} y={y0 + 13} fontSize={10} fill={AXIS} textAnchor="middle">{+x.toFixed(2)}</SvgText>);
  }
  for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1] + 1e-9; y += sy) {
    if (Math.abs(y) < 1e-9) continue;
    els.push(<SvgText key={`ty${y}`} x={x0 - 5} y={py(y) + 3.5} fontSize={10} fill={AXIS} textAnchor="end">{+y.toFixed(2)}</SvgText>);
  }

  const clipId = `coord-${uid}`;

  // 塗りつぶし領域
  if (fig.polygon && fig.polygon.length >= 3) {
    els.push(
      <SvgPolygon
        key="poly"
        points={fig.polygon.map((p) => `${px(p.x)},${py(p.y)}`).join(' ')}
        fill={FILL}
        stroke={ACCENT}
        strokeWidth={1.4}
      />,
    );
  }

  // 直線 y=ax+b
  fig.lines?.forEach((ln, i) => {
    const color = ln.color ?? PALETTE[i % PALETTE.length];
    const yA = ln.a * xr[0] + ln.b;
    const yB = ln.a * xr[1] + ln.b;
    els.push(
      <Line key={`ln${i}`} x1={px(xr[0])} y1={py(yA)} x2={px(xr[1])} y2={py(yB)} stroke={color} strokeWidth={2} clipPath={`url(#${clipId})`} />,
    );
    if (ln.label) {
      const lx = xr[0] + (xr[1] - xr[0]) * 0.72;
      els.push(<SvgText key={`lnl${i}`} x={px(lx)} y={py(ln.a * lx + ln.b) - 5} fontSize={11} fill={color} fontWeight="bold">{ln.label}</SvgText>);
    }
  });

  // 放物線 y=ax²+bx+c
  fig.parabolas?.forEach((pb, i) => {
    const color = pb.color ?? PALETTE[(i + 1) % PALETTE.length];
    const b = pb.b ?? 0;
    const c = pb.c ?? 0;
    const N = 80;
    let d = '';
    for (let k = 0; k <= N; k++) {
      const x = xr[0] + ((xr[1] - xr[0]) * k) / N;
      const y = pb.a * x * x + b * x + c;
      d += `${k === 0 ? 'M' : 'L'}${px(x).toFixed(1)},${py(y).toFixed(1)} `;
    }
    els.push(<Path key={`pb${i}`} d={d} stroke={color} strokeWidth={2} fill="none" clipPath={`url(#${clipId})`} />);
    if (pb.label) els.push(<SvgText key={`pbl${i}`} x={px(xr[1] * 0.62)} y={py(pb.a * (xr[1] * 0.62) ** 2 + b * xr[1] * 0.62 + c) - 6} fontSize={11} fill={color} fontWeight="bold">{pb.label}</SvgText>);
  });

  // 双曲線 y=k/x
  fig.hyperbolas?.forEach((hy, i) => {
    const color = hy.color ?? PALETTE[(i + 2) % PALETTE.length];
    const branch = (from: number, to: number) => {
      const N = 60;
      let d = '';
      let started = false;
      for (let k = 0; k <= N; k++) {
        const x = from + ((to - from) * k) / N;
        if (Math.abs(x) < 1e-6) continue;
        const y = hy.k / x;
        if (!inY(y)) {
          started = false;
          continue;
        }
        d += `${started ? 'L' : 'M'}${px(x).toFixed(1)},${py(y).toFixed(1)} `;
        started = true;
      }
      return d;
    };
    els.push(<Path key={`hyp${i}`} d={branch(0.001, xr[1])} stroke={color} strokeWidth={2} fill="none" clipPath={`url(#${clipId})`} />);
    els.push(<Path key={`hyn${i}`} d={branch(xr[0], -0.001)} stroke={color} strokeWidth={2} fill="none" clipPath={`url(#${clipId})`} />);
    if (hy.label) els.push(<SvgText key={`hyl${i}`} x={px(xr[1] * 0.6)} y={py(hy.k / (xr[1] * 0.6)) - 6} fontSize={11} fill={color} fontWeight="bold">{hy.label}</SvgText>);
  });

  // 線分
  fig.segments?.forEach(([a, b], i) => {
    els.push(<Line key={`sg${i}`} x1={px(a.x)} y1={py(a.y)} x2={px(b.x)} y2={py(b.y)} stroke={INK} strokeWidth={1.8} />);
  });

  // 点
  fig.points?.forEach((p, i) => {
    els.push(<SvgCircle key={`pt${i}`} cx={px(p.x)} cy={py(p.y)} r={3.2} fill={INK} />);
    if (p.label) els.push(<SvgText key={`ptl${i}`} x={px(p.x) + 5} y={py(p.y) - 5} fontSize={11} fill={INK} fontWeight="bold">{p.label}</SvgText>);
  });

  return [
    <Defs key="defs">
      <ClipPath id={clipId}>
        <Rect x={area.x0} y={area.y0} width={area.w} height={area.h} />
      </ClipPath>
    </Defs>,
    ...els,
  ];
}

// ---------- 多角形（三角形・四角形の面積・合同・角度） ----------

function fitPoints(points: Pt[], area: Area) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const bw = Math.max(maxX - minX, 1e-6);
  const bh = Math.max(maxY - minY, 1e-6);
  const s = Math.min(area.w / bw, area.h / bh);
  const ox = area.x0 + (area.w - bw * s) / 2;
  const oy = area.y0 + (area.h - bh * s) / 2;
  return (p: { x: number; y: number }) => ({
    x: ox + (p.x - minX) * s,
    y: oy + (maxY - p.y) * s, // y反転（数学yは上向き）
  });
}

function centroid(pts: { x: number; y: number }[]) {
  return {
    x: pts.reduce((a, p) => a + p.x, 0) / pts.length,
    y: pts.reduce((a, p) => a + p.y, 0) / pts.length,
  };
}

function PolygonFig({ fig }: { fig: PolyFigure }) {
  const pad = 34;
  const area: Area = { x0: pad, y0: pad, w: VBW - pad * 2, h: VBH - pad * 2 };
  const map = fitPoints(fig.points, area);
  const P = fig.points.map(map);
  const c = centroid(P);
  const els: React.ReactNode[] = [];

  // 本体
  els.push(
    <SvgPolygon
      key="body"
      points={P.map((p) => `${p.x},${p.y}`).join(' ')}
      fill={fig.fill ? FILL : 'none'}
      stroke={ACCENT}
      strokeWidth={2}
      strokeLinejoin="round"
    />,
  );

  // 対角線
  fig.diagonals?.forEach(([i, j], k) => {
    els.push(<Line key={`dg${k}`} x1={P[i].x} y1={P[i].y} x2={P[j].x} y2={P[j].y} stroke={AXIS} strokeWidth={1.2} strokeDasharray="4 3" />);
  });

  // 高さ（垂線）
  fig.heights?.forEach((h, k) => {
    const A = P[h.from];
    const B = P[h.toEdge[0]];
    const C = P[h.toEdge[1]];
    const dx = C.x - B.x, dy = C.y - B.y;
    const t = ((A.x - B.x) * dx + (A.y - B.y) * dy) / (dx * dx + dy * dy);
    const foot = { x: B.x + t * dx, y: B.y + t * dy };
    els.push(<Line key={`ht${k}`} x1={A.x} y1={A.y} x2={foot.x} y2={foot.y} stroke="#E11D48" strokeWidth={1.5} strokeDasharray="4 3" />);
    // 足の直角マーク
    const m = 7;
    const u1 = norm({ x: A.x - foot.x, y: A.y - foot.y });
    const u2 = norm({ x: C.x - foot.x, y: C.y - foot.y });
    els.push(
      <Polyline
        key={`htr${k}`}
        points={`${foot.x + u2.x * m},${foot.y + u2.y * m} ${foot.x + (u1.x + u2.x) * m},${foot.y + (u1.y + u2.y) * m} ${foot.x + u1.x * m},${foot.y + u1.y * m}`}
        fill="none"
        stroke="#E11D48"
        strokeWidth={1.1}
      />,
    );
    if (h.label) els.push(<SvgText key={`htl${k}`} x={(A.x + foot.x) / 2 - 6} y={(A.y + foot.y) / 2} fontSize={11} fill="#E11D48">{h.label}</SvgText>);
  });

  // 直角マーク
  fig.rightAngles?.forEach((vi, k) => {
    const prev = P[(vi - 1 + P.length) % P.length];
    const cur = P[vi];
    const next = P[(vi + 1) % P.length];
    const u1 = norm({ x: prev.x - cur.x, y: prev.y - cur.y });
    const u2 = norm({ x: next.x - cur.x, y: next.y - cur.y });
    const m = 9;
    els.push(
      <Polyline
        key={`ra${k}`}
        points={`${cur.x + u1.x * m},${cur.y + u1.y * m} ${cur.x + (u1.x + u2.x) * m},${cur.y + (u1.y + u2.y) * m} ${cur.x + u2.x * m},${cur.y + u2.y * m}`}
        fill="none"
        stroke={AXIS}
        strokeWidth={1.2}
      />,
    );
  });

  // 等辺ティック
  fig.equalSides?.forEach((group, gi) => {
    group.forEach((ei) => {
      const A = P[ei];
      const B = P[(ei + 1) % P.length];
      const mid = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
      const dir = norm({ x: B.x - A.x, y: B.y - A.y });
      const perp = { x: -dir.y, y: dir.x };
      const ticks = gi + 1;
      for (let t = 0; t < ticks; t++) {
        const off = (t - (ticks - 1) / 2) * 4;
        const base = { x: mid.x + dir.x * off, y: mid.y + dir.y * off };
        els.push(
          <Line
            key={`es${gi}_${ei}_${t}`}
            x1={base.x - perp.x * 4}
            y1={base.y - perp.y * 4}
            x2={base.x + perp.x * 4}
            y2={base.y + perp.y * 4}
            stroke={AXIS}
            strokeWidth={1.3}
          />,
        );
      }
    });
  });

  // 等角アーク
  fig.equalAngles?.forEach((group, gi) => {
    group.forEach((vi) => {
      const prev = P[(vi - 1 + P.length) % P.length];
      const cur = P[vi];
      const next = P[(vi + 1) % P.length];
      const a1 = Math.atan2(prev.y - cur.y, prev.x - cur.x);
      const a2 = Math.atan2(next.y - cur.y, next.x - cur.x);
      const r = 13 + gi * 4;
      const large = Math.abs(a2 - a1) > Math.PI ? 1 : 0;
      let sweep = a2 > a1 ? 1 : 0;
      const s = { x: cur.x + r * Math.cos(a1), y: cur.y + r * Math.sin(a1) };
      const e = { x: cur.x + r * Math.cos(a2), y: cur.y + r * Math.sin(a2) };
      els.push(<Path key={`ea${gi}_${vi}`} d={`M${s.x},${s.y} A${r},${r} 0 ${large} ${sweep} ${e.x},${e.y}`} fill="none" stroke="#9333EA" strokeWidth={1.3} />);
    });
  });

  // 辺ラベル
  fig.sideLabels?.forEach((lab, i) => {
    if (!lab) return;
    const A = P[i];
    const B = P[(i + 1) % P.length];
    const mid = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    const out = norm({ x: mid.x - c.x, y: mid.y - c.y });
    els.push(<SvgText key={`sl${i}`} x={mid.x + out.x * 12} y={mid.y + out.y * 12 + 3} fontSize={11} fill={INK} textAnchor="middle">{lab}</SvgText>);
  });

  // 頂点ラベル
  fig.points.forEach((p, i) => {
    if (!p.label) return;
    const out = norm({ x: P[i].x - c.x, y: P[i].y - c.y });
    els.push(<SvgText key={`vl${i}`} x={P[i].x + out.x * 13} y={P[i].y + out.y * 13 + 4} fontSize={12} fill={INK} fontWeight="bold" textAnchor="middle">{p.label}</SvgText>);
  });

  return els;
}

function norm(v: { x: number; y: number }) {
  const l = Math.hypot(v.x, v.y) || 1;
  return { x: v.x / l, y: v.y / l };
}

// ---------- 円 ----------

function CircleFig({ fig }: { fig: CircleFigure }) {
  const cx = VBW / 2, cy = VBH / 2;
  const R = Math.min(VBW, VBH) / 2 - 40;
  const at = (deg: number) => ({
    x: cx + R * Math.cos((-deg * Math.PI) / 180),
    y: cy + R * Math.sin((-deg * Math.PI) / 180),
  });
  const els: React.ReactNode[] = [];

  // おうぎ形
  if (fig.sector) {
    const s = at(fig.sector.from);
    const e = at(fig.sector.to);
    const large = ((fig.sector.to - fig.sector.from + 360) % 360) > 180 ? 1 : 0;
    els.push(<Path key="sec" d={`M${cx},${cy} L${s.x},${s.y} A${R},${R} 0 ${large} 0 ${e.x},${e.y} Z`} fill={FILL} stroke={ACCENT} strokeWidth={1.4} />);
  }

  els.push(<SvgCircle key="circ" cx={cx} cy={cy} r={R} fill="none" stroke={ACCENT} strokeWidth={2} />);
  if (fig.showCenter) {
    els.push(<SvgCircle key="ctr" cx={cx} cy={cy} r={2.6} fill={INK} />);
    els.push(<SvgText key="ctrl" x={cx - 5} y={cy - 6} fontSize={11} fill={INK} fontWeight="bold">O</SvgText>);
  }
  if (fig.radiusLabel) {
    const m = at(35);
    els.push(<Line key="rad" x1={cx} y1={cy} x2={m.x} y2={m.y} stroke={AXIS} strokeWidth={1.2} />);
    els.push(<SvgText key="radl" x={(cx + m.x) / 2 + 4} y={(cy + m.y) / 2} fontSize={11} fill={INK}>{fig.radiusLabel}</SvgText>);
  }

  const pts = (fig.points ?? []).map((p) => ({ ...at(p.angle), label: p.label, angle: p.angle }));
  fig.chords?.forEach(([i, j], k) => {
    els.push(<Line key={`ch${k}`} x1={pts[i].x} y1={pts[i].y} x2={pts[j].x} y2={pts[j].y} stroke={INK} strokeWidth={1.6} />);
  });
  pts.forEach((p, i) => {
    els.push(<SvgCircle key={`cp${i}`} cx={p.x} cy={p.y} r={3} fill={INK} />);
    if (p.label) {
      const out = norm({ x: p.x - cx, y: p.y - cy });
      els.push(<SvgText key={`cpl${i}`} x={p.x + out.x * 12} y={p.y + out.y * 12 + 4} fontSize={11} fill={INK} fontWeight="bold" textAnchor="middle">{p.label}</SvgText>);
    }
  });

  return els;
}

// ---------- 立体 ----------

function SolidFig({ fig }: { fig: SolidFigure }) {
  const els: React.ReactNode[] = [];
  const L = fig.labels ?? {};
  const cx = VBW / 2;
  const dx = 34, dy = -22; // 奥行き方向

  if (fig.shape === 'cube' || fig.shape === 'cuboid') {
    const w = fig.shape === 'cube' ? 120 : 140;
    const h = fig.shape === 'cube' ? 120 : 96;
    const x = cx - w / 2 - dx / 2, y = 60;
    const F = [ { x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h } ];
    const B = F.map((p) => ({ x: p.x + dx, y: p.y + dy }));
    els.push(<SvgPolygon key="front" points={F.map((p) => `${p.x},${p.y}`).join(' ')} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Path key="top" d={`M${F[0].x},${F[0].y} L${B[0].x},${B[0].y} L${B[1].x},${B[1].y} L${F[1].x},${F[1].y} Z`} fill="rgba(14,165,233,0.05)" stroke={ACCENT} strokeWidth={1.5} />);
    els.push(<Path key="side" d={`M${F[1].x},${F[1].y} L${B[1].x},${B[1].y} L${B[2].x},${B[2].y} L${F[2].x},${F[2].y} Z`} fill="rgba(14,165,233,0.05)" stroke={ACCENT} strokeWidth={1.5} />);
    els.push(<Line key="h1" x1={B[0].x} y1={B[0].y} x2={B[3].x} y2={B[3].y} stroke={ACCENT} strokeWidth={1} strokeDasharray="3 3" />);
    els.push(<Line key="h2" x1={B[3].x} y1={B[3].y} x2={B[2].x} y2={B[2].y} stroke={ACCENT} strokeWidth={1} strokeDasharray="3 3" />);
    els.push(<Line key="h3" x1={B[3].x} y1={B[3].y} x2={F[3].x} y2={F[3].y} stroke={ACCENT} strokeWidth={1} strokeDasharray="3 3" />);
    if (L.width) els.push(<SvgText key="lw" x={x + w / 2} y={y + h + 16} fontSize={11} fill={INK} textAnchor="middle">{L.width}</SvgText>);
    if (L.height) els.push(<SvgText key="lh" x={x - 8} y={y + h / 2} fontSize={11} fill={INK} textAnchor="end">{L.height}</SvgText>);
    if (L.depth) els.push(<SvgText key="ld" x={x + w + dx / 2 + 8} y={y + dy / 2 + 2} fontSize={11} fill={INK}>{L.depth}</SvgText>);
  } else if (fig.shape === 'cylinder') {
    const rx = 52, ry = 15, top = 46, bot = 190;
    els.push(<Line key="l" x1={cx - rx} y1={top} x2={cx - rx} y2={bot} stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Line key="r" x1={cx + rx} y1={top} x2={cx + rx} y2={bot} stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Path key="botfront" d={`M${cx - rx},${bot} A${rx},${ry} 0 0 0 ${cx + rx},${bot}`} fill="none" stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Path key="botback" d={`M${cx - rx},${bot} A${rx},${ry} 0 0 1 ${cx + rx},${bot}`} fill="none" stroke={ACCENT} strokeWidth={1} strokeDasharray="3 3" />);
    els.push(<Ellipse key="topell" cx={cx} cy={top} rx={rx} ry={ry} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.8} />);
    if (L.height) els.push(<SvgText key="lh" x={cx + rx + 8} y={(top + bot) / 2} fontSize={11} fill={INK}>{L.height}</SvgText>);
    if (L.radius) {
      els.push(<Line key="rl" x1={cx} y1={top} x2={cx + rx} y2={top} stroke={AXIS} strokeWidth={1} />);
      els.push(<SvgText key="lr" x={cx + rx / 2} y={top - 5} fontSize={11} fill={INK} textAnchor="middle">{L.radius}</SvgText>);
    }
  } else if (fig.shape === 'cone') {
    const rx = 56, ry = 16, apexY = 40, baseY = 188;
    els.push(<Ellipse key="base" cx={cx} cy={baseY} rx={rx} ry={ry} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Line key="lft" x1={cx - rx} y1={baseY} x2={cx} y2={apexY} stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Line key="rgt" x1={cx + rx} y1={baseY} x2={cx} y2={apexY} stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Line key="axis" x1={cx} y1={apexY} x2={cx} y2={baseY} stroke={AXIS} strokeWidth={1} strokeDasharray="3 3" />);
    if (L.height) els.push(<SvgText key="lh" x={cx + 5} y={(apexY + baseY) / 2} fontSize={11} fill={INK}>{L.height}</SvgText>);
    if (L.radius) els.push(<SvgText key="lr" x={cx + rx / 2} y={baseY - 5} fontSize={11} fill={INK} textAnchor="middle">{L.radius}</SvgText>);
    if (L.slant) els.push(<SvgText key="ls" x={cx - rx / 2 - 12} y={(apexY + baseY) / 2} fontSize={11} fill={INK} textAnchor="end">{L.slant}</SvgText>);
  } else if (fig.shape === 'triangularPrism') {
    const w = 120, h = 96, x = cx - w / 2 - dx / 2, y = 70;
    const F = [ { x: x + w / 2, y }, { x: x + w, y: y + h }, { x, y: y + h } ];
    const B = F.map((p) => ({ x: p.x + dx, y: p.y + dy }));
    els.push(<SvgPolygon key="front" points={F.map((p) => `${p.x},${p.y}`).join(' ')} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<SvgPolygon key="back" points={B.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={ACCENT} strokeWidth={1} strokeDasharray="3 3" />);
    [0, 1, 2].forEach((i) => els.push(<Line key={`e${i}`} x1={F[i].x} y1={F[i].y} x2={B[i].x} y2={B[i].y} stroke={ACCENT} strokeWidth={1.4} />));
    if (L.height) els.push(<SvgText key="lh" x={x - 8} y={y + h / 2} fontSize={11} fill={INK} textAnchor="end">{L.height}</SvgText>);
  } else if (fig.shape === 'sphere') {
    const R = 74, cy = 120;
    els.push(<SvgCircle key="sph" cx={cx} cy={cy} r={R} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.8} />);
    els.push(<Ellipse key="eq" cx={cx} cy={cy} rx={R} ry={22} fill="none" stroke={AXIS} strokeWidth={1} strokeDasharray="3 3" />);
    if (L.radius) {
      els.push(<Line key="rl" x1={cx} y1={cy} x2={cx + R} y2={cy} stroke={AXIS} strokeWidth={1} />);
      els.push(<SvgText key="lr" x={cx + R / 2} y={cy - 5} fontSize={11} fill={INK} textAnchor="middle">{L.radius}</SvgText>);
    }
  }

  return els;
}

// ---------- 数直線 ----------

function NumberLineFig({ fig }: { fig: NumberLineFigure }) {
  const y = VBH / 2;
  const pad = 30;
  const w = VBW - pad * 2;
  const step = fig.step ?? 1;
  const px = (v: number) => pad + ((v - fig.min) / (fig.max - fig.min)) * w;
  const els: React.ReactNode[] = [];
  els.push(<Line key="axis" x1={pad - 10} y1={y} x2={VBW - pad + 10} y2={y} stroke={AXIS} strokeWidth={1.8} />);
  for (let v = fig.min; v <= fig.max + 1e-9; v += step) {
    els.push(<Line key={`t${v}`} x1={px(v)} y1={y - 5} x2={px(v)} y2={y + 5} stroke={AXIS} strokeWidth={1.2} />);
    els.push(<SvgText key={`tl${v}`} x={px(v)} y={y + 20} fontSize={10} fill={AXIS} textAnchor="middle">{+v.toFixed(2)}</SvgText>);
  }
  fig.segments?.forEach((s, i) => {
    els.push(<Line key={`sg${i}`} x1={px(s.from)} y1={y} x2={px(s.to)} y2={y} stroke={ACCENT} strokeWidth={4} />);
    els.push(<SvgCircle key={`sf${i}`} cx={px(s.from)} cy={y} r={5} fill={s.fromOpen ? '#fff' : ACCENT} stroke={ACCENT} strokeWidth={2} />);
    els.push(<SvgCircle key={`st${i}`} cx={px(s.to)} cy={y} r={5} fill={s.toOpen ? '#fff' : ACCENT} stroke={ACCENT} strokeWidth={2} />);
  });
  fig.points?.forEach((p, i) => {
    els.push(<SvgCircle key={`p${i}`} cx={px(p.x)} cy={y} r={5} fill={p.open ? '#fff' : ACCENT} stroke={ACCENT} strokeWidth={2} />);
    if (p.label) els.push(<SvgText key={`pl${i}`} x={px(p.x)} y={y - 12} fontSize={11} fill={INK} textAnchor="middle" fontWeight="bold">{p.label}</SvgText>);
  });
  return els;
}

// ---------- 箱ひげ図 ----------

function BoxplotFig({ fig }: { fig: BoxplotFigure }) {
  const pad = 30;
  const w = VBW - pad * 2;
  const y = VBH / 2;
  const bh = 44;
  const lo = fig.scaleMin ?? fig.min;
  const hi = fig.scaleMax ?? fig.max;
  const px = (v: number) => pad + ((v - lo) / (hi - lo)) * w;
  const els: React.ReactNode[] = [];
  // 目盛り軸
  els.push(<Line key="ax" x1={pad} y1={y + bh} x2={VBW - pad} y2={y + bh} stroke={AXIS} strokeWidth={1.2} />);
  const step = niceStep(hi - lo);
  for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) {
    els.push(<Line key={`t${v}`} x1={px(v)} y1={y + bh} x2={px(v)} y2={y + bh + 5} stroke={AXIS} strokeWidth={1} />);
    els.push(<SvgText key={`tl${v}`} x={px(v)} y={y + bh + 18} fontSize={10} fill={AXIS} textAnchor="middle">{+v.toFixed(1)}</SvgText>);
  }
  // ひげ
  els.push(<Line key="wl" x1={px(fig.min)} y1={y} x2={px(fig.q1)} y2={y} stroke={INK} strokeWidth={1.4} />);
  els.push(<Line key="wr" x1={px(fig.q3)} y1={y} x2={px(fig.max)} y2={y} stroke={INK} strokeWidth={1.4} />);
  els.push(<Line key="cmin" x1={px(fig.min)} y1={y - 12} x2={px(fig.min)} y2={y + 12} stroke={INK} strokeWidth={1.4} />);
  els.push(<Line key="cmax" x1={px(fig.max)} y1={y - 12} x2={px(fig.max)} y2={y + 12} stroke={INK} strokeWidth={1.4} />);
  // 箱
  els.push(<Rect key="box" x={px(fig.q1)} y={y - 18} width={px(fig.q3) - px(fig.q1)} height={36} fill={FILL} stroke={ACCENT} strokeWidth={1.8} />);
  els.push(<Line key="med" x1={px(fig.median)} y1={y - 18} x2={px(fig.median)} y2={y + 18} stroke="#E11D48" strokeWidth={2} />);
  const lab = (v: number, t: string) => els.push(<SvgText key={`lb${t}`} x={px(v)} y={y - 24} fontSize={9} fill={AXIS} textAnchor="middle">{t}</SvgText>);
  lab(fig.min, '最小'); lab(fig.median, '中央'); lab(fig.max, '最大');
  return els;
}

// ---------- 化学反応式（RN Textで整形） ----------

function formatFormula(token: string): React.ReactNode[] {
  // 例: 2H2O → 係数2 + H, 添字2, O
  const out: React.ReactNode[] = [];
  let i = 0;
  // 先頭の係数
  const coef = token.match(/^\d+/);
  if (coef) {
    out.push(<Text key="coef" style={styles.chemCoef}>{coef[0]}</Text>);
    i = coef[0].length;
  }
  for (; i < token.length; i++) {
    const ch = token[i];
    if (/\d/.test(ch)) {
      out.push(<Text key={`s${i}`} style={styles.chemSub}>{ch}</Text>);
    } else {
      out.push(<Text key={`c${i}`} style={styles.chemMain}>{ch}</Text>);
    }
  }
  return out;
}

function ChemEquationFig({ fig }: { fig: ChemEqFigure }) {
  const [lhs, rhs] = fig.equation.split(/->|→|=/);
  const parts = (side: string) => side.trim().split(/\s*\+\s*/);
  const render = (arr: string[]) =>
    arr.map((tok, i) => (
      <View key={i} style={styles.chemTerm}>
        {i > 0 && <Text style={styles.chemMain}> + </Text>}
        <Text style={styles.chemFormula}>{formatFormula(tok)}</Text>
      </View>
    ));
  return (
    <View style={styles.chemRow}>
      {render(parts(lhs))}
      <Text style={styles.chemArrow}>  →  </Text>
      {render(parts(rhs))}
    </View>
  );
}

// ---------- 構造式 ----------

function ChemStructFig({ fig }: { fig: ChemStructFigure }) {
  const xs = fig.atoms.map((a) => a.x);
  const ys = fig.atoms.map((a) => a.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const pad = 40;
  const s = Math.min((VBW - pad * 2) / Math.max(maxX - minX, 1), (VBH - pad * 2) / Math.max(maxY - minY, 1));
  const map = (a: { x: number; y: number }) => ({
    x: VBW / 2 + (a.x - (minX + maxX) / 2) * s,
    y: VBH / 2 + (a.y - (minY + maxY) / 2) * s,
  });
  const P = fig.atoms.map(map);
  const els: React.ReactNode[] = [];
  fig.bonds.forEach((b, i) => {
    const A = P[b.from], B = P[b.to];
    const d = norm({ x: B.x - A.x, y: B.y - A.y });
    const perp = { x: -d.y, y: d.x };
    const shrink = 14;
    const a2 = { x: A.x + d.x * shrink, y: A.y + d.y * shrink };
    const b2 = { x: B.x - d.x * shrink, y: B.y - d.y * shrink };
    const order = b.order ?? 1;
    const offs = order === 1 ? [0] : order === 2 ? [-3, 3] : [-4, 0, 4];
    offs.forEach((o, k) =>
      els.push(<Line key={`b${i}_${k}`} x1={a2.x + perp.x * o} y1={a2.y + perp.y * o} x2={b2.x + perp.x * o} y2={b2.y + perp.y * o} stroke={INK} strokeWidth={1.6} />),
    );
  });
  fig.atoms.forEach((a, i) => {
    els.push(<SvgText key={`a${i}`} x={P[i].x} y={P[i].y + 6} fontSize={17} fill={INK} textAnchor="middle" fontWeight="bold">{a.el}</SvgText>);
  });
  return els;
}

// ---------- 折れ線・曲線グラフ ----------

function LineChartFig({ fig }: { fig: LineChartFigure }) {
  const area: Area = { x0: 42, y0: 14, w: VBW - 60, h: VBH - 54 };
  const allX: number[] = [];
  const allY: number[] = [];
  fig.series.forEach((s) => s.points.forEach((p) => { allX.push(p.x); allY.push(p.y); }));
  const xr = fig.xRange ?? [Math.min(...allX), Math.max(...allX)];
  let yr = fig.yRange ?? [Math.min(0, ...allY), Math.max(...allY) * 1.1];
  if (yr[1] - yr[0] < 1e-9) yr = [yr[0] - 1, yr[1] + 1];
  const px = (x: number) => area.x0 + ((x - xr[0]) / (xr[1] - xr[0] || 1)) * area.w;
  const py = (y: number) => area.y0 + area.h - ((y - yr[0]) / (yr[1] - yr[0] || 1)) * area.h;
  const els: React.ReactNode[] = [];
  const sx = niceStep(xr[1] - xr[0]);
  const sy = niceStep(yr[1] - yr[0]);
  for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1] + 1e-9; x += sx) {
    els.push(<Line key={`gx${x}`} x1={px(x)} y1={area.y0} x2={px(x)} y2={area.y0 + area.h} stroke={GRID} strokeWidth={1} />);
    els.push(<SvgText key={`gxl${x}`} x={px(x)} y={area.y0 + area.h + 12} fontSize={9} fill={AXIS} textAnchor="middle">{+x.toFixed(1)}</SvgText>);
  }
  for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1] + 1e-9; y += sy) {
    els.push(<Line key={`gy${y}`} x1={area.x0} y1={py(y)} x2={area.x0 + area.w} y2={py(y)} stroke={GRID} strokeWidth={1} />);
    els.push(<SvgText key={`gyl${y}`} x={area.x0 - 4} y={py(y) + 3} fontSize={9} fill={AXIS} textAnchor="end">{+y.toFixed(1)}</SvgText>);
  }
  els.push(<Line key="xax" x1={area.x0} y1={area.y0 + area.h} x2={area.x0 + area.w} y2={area.y0 + area.h} stroke={AXIS} strokeWidth={1.6} />);
  els.push(<Line key="yax" x1={area.x0} y1={area.y0} x2={area.x0} y2={area.y0 + area.h} stroke={AXIS} strokeWidth={1.6} />);
  fig.series.forEach((s, i) => {
    const color = s.color ?? PALETTE[i % PALETTE.length];
    const pts = s.points.map((p) => `${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(' ');
    els.push(<Polyline key={`ser${i}`} points={pts} fill="none" stroke={color} strokeWidth={2} strokeDasharray={s.dashed ? '5 3' : undefined} strokeLinejoin="round" />);
    if (s.markers) s.points.forEach((p, k) => els.push(<SvgCircle key={`m${i}_${k}`} cx={px(p.x)} cy={py(p.y)} r={2.6} fill={color} />));
    if (s.label) {
      const last = s.points[s.points.length - 1];
      els.push(<SvgText key={`sl${i}`} x={px(last.x) - 2} y={py(last.y) - 5} fontSize={10} fill={color} fontWeight="bold" textAnchor="end">{s.label}</SvgText>);
    }
  });
  if (fig.xLabel) els.push(<SvgText key="xlab" x={area.x0 + area.w / 2} y={VBH - 4} fontSize={10} fill={INK} textAnchor="middle">{fig.xLabel}</SvgText>);
  if (fig.yLabel) els.push(<SvgText key="ylab" x={12} y={area.y0 + area.h / 2} fontSize={10} fill={INK} textAnchor="middle" transform={`rotate(-90, 12, ${area.y0 + area.h / 2})`}>{fig.yLabel}</SvgText>);
  return els;
}

// ---------- 棒グラフ・ヒストグラム ----------

function BarChartFig({ fig }: { fig: BarChartFigure }) {
  const area: Area = { x0: 40, y0: 16, w: VBW - 56, h: VBH - 54 };
  const yMax = fig.yMax ?? ((Math.max(...fig.bars.map((b) => b.value)) * 1.15) || 1);
  const n = fig.bars.length;
  const slot = area.w / n;
  const gap = fig.histogram ? 0 : slot * 0.28;
  const bw = slot - gap;
  const py = (v: number) => area.y0 + area.h - (v / yMax) * area.h;
  const els: React.ReactNode[] = [];
  const sy = niceStep(yMax);
  for (let y = 0; y <= yMax + 1e-9; y += sy) {
    els.push(<Line key={`gy${y}`} x1={area.x0} y1={py(y)} x2={area.x0 + area.w} y2={py(y)} stroke={GRID} strokeWidth={1} />);
    els.push(<SvgText key={`gyl${y}`} x={area.x0 - 4} y={py(y) + 3} fontSize={9} fill={AXIS} textAnchor="end">{+y.toFixed(0)}</SvgText>);
  }
  els.push(<Line key="xax" x1={area.x0} y1={area.y0 + area.h} x2={area.x0 + area.w} y2={area.y0 + area.h} stroke={AXIS} strokeWidth={1.6} />);
  els.push(<Line key="yax" x1={area.x0} y1={area.y0} x2={area.x0} y2={area.y0 + area.h} stroke={AXIS} strokeWidth={1.6} />);
  fig.bars.forEach((b, i) => {
    const x = area.x0 + slot * i + gap / 2;
    const color = b.color ?? PALETTE[i % PALETTE.length];
    els.push(<Rect key={`b${i}`} x={x} y={py(b.value)} width={bw} height={area.y0 + area.h - py(b.value)} fill={color} opacity={0.82} stroke={fig.histogram ? '#fff' : color} strokeWidth={fig.histogram ? 1 : 0} />);
    els.push(<SvgText key={`bl${i}`} x={x + bw / 2} y={area.y0 + area.h + 12} fontSize={9} fill={AXIS} textAnchor="middle">{b.label}</SvgText>);
  });
  if (fig.yLabel) els.push(<SvgText key="ylab" x={12} y={area.y0 + area.h / 2} fontSize={10} fill={INK} textAnchor="middle" transform={`rotate(-90, 12, ${area.y0 + area.h / 2})`}>{fig.yLabel}</SvgText>);
  return els;
}

// ---------- 円グラフ ----------

function PieChartFig({ fig }: { fig: PieChartFigure }) {
  const cx = 108, cy = VBH / 2, R = 84;
  const total = fig.slices.reduce((a, s) => a + s.value, 0) || 1;
  const els: React.ReactNode[] = [];
  let acc = -90;
  fig.slices.forEach((s, i) => {
    const frac = s.value / total;
    const a0 = acc;
    const a1 = acc + frac * 360;
    acc = a1;
    const color = s.color ?? PALETTE[i % PALETTE.length];
    const rad = (d: number) => (d * Math.PI) / 180;
    const p0 = { x: cx + R * Math.cos(rad(a0)), y: cy + R * Math.sin(rad(a0)) };
    const p1 = { x: cx + R * Math.cos(rad(a1)), y: cy + R * Math.sin(rad(a1)) };
    const large = a1 - a0 > 180 ? 1 : 0;
    els.push(<Path key={`sl${i}`} d={`M${cx},${cy} L${p0.x},${p0.y} A${R},${R} 0 ${large} 1 ${p1.x},${p1.y} Z`} fill={color} opacity={0.85} stroke="#fff" strokeWidth={1.4} />);
    // 凡例
    const ly = 40 + i * 22;
    els.push(<Rect key={`lg${i}`} x={214} y={ly - 8} width={12} height={12} fill={color} opacity={0.85} />);
    els.push(<SvgText key={`lt${i}`} x={230} y={ly + 2} fontSize={10} fill={INK}>{`${s.label} ${Math.round(frac * 100)}%`}</SvgText>);
  });
  return els;
}

// ---------- 回路図 ----------

function circuitComp(comp: CircuitComponent, cx: number, cy: number, orient: 'h' | 'v', keyp: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const half = 16;
  const labelPos = orient === 'h' ? { x: cx, y: cy - 14, anchor: 'middle' as const } : { x: cx + 20, y: cy + 3, anchor: 'start' as const };
  if (comp.type === 'resistor') {
    if (orient === 'h') out.push(<Rect key={`${keyp}r`} x={cx - half} y={cy - 8} width={half * 2} height={16} fill="#fff" stroke={INK} strokeWidth={1.6} />);
    else out.push(<Rect key={`${keyp}r`} x={cx - 8} y={cy - half} width={16} height={half * 2} fill="#fff" stroke={INK} strokeWidth={1.6} />);
  } else if (comp.type === 'bulb') {
    out.push(<SvgCircle key={`${keyp}c`} cx={cx} cy={cy} r={12} fill="#fff" stroke={INK} strokeWidth={1.6} />);
    out.push(<Line key={`${keyp}x1`} x1={cx - 8.5} y1={cy - 8.5} x2={cx + 8.5} y2={cy + 8.5} stroke={INK} strokeWidth={1.3} />);
    out.push(<Line key={`${keyp}x2`} x1={cx - 8.5} y1={cy + 8.5} x2={cx + 8.5} y2={cy - 8.5} stroke={INK} strokeWidth={1.3} />);
  } else if (comp.type === 'ammeter' || comp.type === 'voltmeter') {
    out.push(<SvgCircle key={`${keyp}c`} cx={cx} cy={cy} r={12} fill="#fff" stroke={INK} strokeWidth={1.6} />);
    out.push(<SvgText key={`${keyp}t`} x={cx} y={cy + 5} fontSize={14} fill={INK} textAnchor="middle" fontWeight="bold">{comp.type === 'ammeter' ? 'A' : 'V'}</SvgText>);
  } else if (comp.type === 'switch') {
    if (orient === 'h') {
      out.push(<SvgCircle key={`${keyp}s1`} cx={cx - half} cy={cy} r={2.4} fill={INK} />);
      out.push(<SvgCircle key={`${keyp}s2`} cx={cx + half} cy={cy} r={2.4} fill={INK} />);
      out.push(<Line key={`${keyp}sl`} x1={cx - half} y1={cy} x2={cx + half - 4} y2={cy - 11} stroke={INK} strokeWidth={1.6} />);
    } else {
      out.push(<SvgCircle key={`${keyp}s1`} cx={cx} cy={cy - half} r={2.4} fill={INK} />);
      out.push(<SvgCircle key={`${keyp}s2`} cx={cx} cy={cy + half} r={2.4} fill={INK} />);
      out.push(<Line key={`${keyp}sl`} x1={cx} y1={cy - half} x2={cx + 11} y2={cy + half - 4} stroke={INK} strokeWidth={1.6} />);
    }
  }
  if (comp.label) out.push(<SvgText key={`${keyp}l`} x={labelPos.x} y={labelPos.y} fontSize={10} fill={ACCENT} textAnchor={labelPos.anchor} fontWeight="bold">{comp.label}</SvgText>);
  return out;
}

function batterySym(cx: number, cy: number, orient: 'h' | 'v', label: string | undefined, keyp: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  if (orient === 'h') {
    out.push(<Line key={`${keyp}long`} x1={cx - 4} y1={cy - 11} x2={cx - 4} y2={cy + 11} stroke={INK} strokeWidth={1.8} />);
    out.push(<Line key={`${keyp}short`} x1={cx + 4} y1={cy - 6} x2={cx + 4} y2={cy + 6} stroke={INK} strokeWidth={3.4} />);
  } else {
    out.push(<Line key={`${keyp}long`} x1={cx - 11} y1={cy - 4} x2={cx + 11} y2={cy - 4} stroke={INK} strokeWidth={1.8} />);
    out.push(<Line key={`${keyp}short`} x1={cx - 6} y1={cy + 4} x2={cx + 6} y2={cy + 4} stroke={INK} strokeWidth={3.4} />);
  }
  out.push(<SvgText key={`${keyp}bl`} x={cx} y={orient === 'h' ? cy + 24 : cy - 12} fontSize={10} fill={INK} textAnchor="middle">{label ?? '電池'}</SvgText>);
  return out;
}

function CircuitFig({ fig }: { fig: CircuitFigure }) {
  const els: React.ReactNode[] = [];
  const L = 44, R = VBW - 44, T = 66, B = 182;
  if (fig.layout === 'parallel' && fig.branches && fig.branches.length) {
    // 左に電池、上下レールの間に各枝を縦に配置
    els.push(<Line key="top" x1={L} y1={T} x2={R} y2={T} stroke={INK} strokeWidth={1.8} />);
    els.push(<Line key="bot" x1={L} y1={B} x2={R} y2={B} stroke={INK} strokeWidth={1.8} />);
    els.push(<Line key="lft" x1={L} y1={T} x2={L} y2={B} stroke={INK} strokeWidth={1.8} />);
    els.push(...batterySym(L, (T + B) / 2, 'v', fig.battery?.label, 'bat'));
    const series = fig.series ?? [];
    series.forEach((c, i) => els.push(...circuitComp(c, L + 60 + i * 44, T, 'h', `s${i}`)));
    const nb = fig.branches.length;
    fig.branches.forEach((branch, bi) => {
      const bx = L + (R - L) * ((bi + 1) / (nb + 1));
      els.push(<Line key={`br${bi}`} x1={bx} y1={T} x2={bx} y2={B} stroke={INK} strokeWidth={1.6} />);
      branch.forEach((c, ci) => els.push(...circuitComp(c, bx, (T + B) / 2 + ci * 40 - (branch.length - 1) * 20, 'v', `b${bi}_${ci}`)));
    });
  } else {
    // 直列：長方形ループ。上辺に素子、下辺に電池。
    els.push(<Line key="left" x1={L} y1={T} x2={L} y2={B} stroke={INK} strokeWidth={1.8} />);
    els.push(<Line key="right" x1={R} y1={T} x2={R} y2={B} stroke={INK} strokeWidth={1.8} />);
    els.push(<Line key="top" x1={L} y1={T} x2={R} y2={T} stroke={INK} strokeWidth={1.8} />);
    els.push(<Line key="bot" x1={L} y1={B} x2={R} y2={B} stroke={INK} strokeWidth={1.8} />);
    const series = fig.series ?? [];
    const n = Math.max(series.length, 1);
    series.forEach((c, i) => {
      const cx = L + ((R - L) * (i + 1)) / (n + 1);
      // 素子部分の導線を白で隠す表現は省略。素子を上辺の上に重ねる。
      els.push(...circuitComp(c, cx, T, 'h', `s${i}`));
    });
    els.push(...batterySym((L + R) / 2, B, 'h', fig.battery?.label, 'bat'));
  }
  return els;
}

// ---------- 展開図 ----------

function NetFig({ fig }: { fig: NetFigure }) {
  const els: React.ReactNode[] = [];
  const u = 42;
  const ox = VBW / 2 - u / 2;
  const oy = 20;
  // 十字型（クロス）配置：中央列に4面、左右に1面ずつ
  const cells: { c: number; r: number }[] = [
    { c: 1, r: 0 }, { c: 1, r: 1 }, { c: 1, r: 2 }, { c: 1, r: 3 }, { c: 0, r: 1 }, { c: 2, r: 1 },
  ];
  const baseX = VBW / 2 - u * 1.5;
  cells.forEach((cell, i) => {
    const x = baseX + cell.c * u;
    const y = oy + cell.r * u;
    els.push(<Rect key={`f${i}`} x={x} y={y} width={u} height={u} fill="rgba(14,165,233,0.10)" stroke={ACCENT} strokeWidth={1.6} />);
    const lab = fig.faceLabels?.[i];
    if (lab) els.push(<SvgText key={`fl${i}`} x={x + u / 2} y={y + u / 2 + 4} fontSize={12} fill={INK} textAnchor="middle" fontWeight="bold">{lab}</SvgText>);
  });
  if (fig.dims) {
    els.push(<SvgText key="dw" x={baseX + u + u / 2} y={oy + 4 * u + 14} fontSize={10} fill={INK} textAnchor="middle">{fig.dims.w}</SvgText>);
    els.push(<SvgText key="dh" x={baseX - 6} y={oy + u + u / 2} fontSize={10} fill={INK} textAnchor="end">{fig.dims.h}</SvgText>);
    els.push(<SvgText key="dd" x={baseX + 2 * u + u + 6} y={oy + u + u / 2} fontSize={10} fill={INK} textAnchor="start">{fig.dims.d}</SvgText>);
  }
  return els;
}

// ---------- 日本地図 ----------

function JapanMapFig({ fig }: { fig: JapanMapFigure }) {
  const scale = Math.min(VBW / JP_MAP_VIEWBOX.w, VBH / JP_MAP_VIEWBOX.h);
  const ox = (VBW - JP_MAP_VIEWBOX.w * scale) / 2;
  const oy = (VBH - JP_MAP_VIEWBOX.h * scale) / 2;
  const tx = (x: number) => ox + x * scale;
  const ty = (y: number) => oy + y * scale;
  const els: React.ReactNode[] = [];
  els.push(
    <G key="prefs" transform={`translate(${ox},${oy}) scale(${scale})`}>
      {prefectureShapes.map((p) => (
        <Path key={`pf${p.id}`} d={p.path} fill="rgba(34,197,94,0.28)" stroke={ACCENT} strokeWidth={1 / scale} />
      ))}
    </G>,
  );
  fig.markers?.forEach((m, i) => {
    const x = tx(m.x);
    const y = ty(m.y);
    els.push(<SvgCircle key={`mk${i}`} cx={x} cy={y} r={3.5} fill="#E11D48" stroke="#FFFFFF" strokeWidth={1} />);
    els.push(
      <SvgText key={`mkl${i}`} x={x} y={y - 7} fontSize={10} fill={INK} textAnchor="middle" fontWeight="bold">
        {m.label}
      </SvgText>,
    );
  });
  return els;
}

// ---------- 地層・柱状図 ----------

const STRATUM_FILL: Record<string, string> = {
  mud: '#9CA3AF', sand: '#FCD34D', gravel: '#A8A29E', lime: '#93C5FD', ash: '#FBCFE8', plain: '#E5E7EB',
};

function StratumFig({ fig }: { fig: StratumFigure }) {
  const els: React.ReactNode[] = [];
  const n = fig.columns.length;
  const totalMax = Math.max(...fig.columns.map((c) => c.layers.reduce((a, l) => a + l.thickness, 0))) || 1;
  const H = 150;
  const scale = H / totalMax;
  const colW = Math.min(52, (VBW - 30) / n - 14);
  fig.columns.forEach((col, ci) => {
    const x = 24 + ci * ((VBW - 40) / n);
    let y = 40;
    if (col.topLabel) els.push(<SvgText key={`tl${ci}`} x={x + colW / 2} y={34} fontSize={9} fill={AXIS} textAnchor="middle">{col.topLabel}</SvgText>);
    col.layers.forEach((ly, li) => {
      const hh = ly.thickness * scale;
      els.push(<Rect key={`ly${ci}_${li}`} x={x} y={y} width={colW} height={hh} fill={STRATUM_FILL[ly.pattern ?? 'plain']} stroke={INK} strokeWidth={1} />);
      if (hh >= 12) els.push(<SvgText key={`lyt${ci}_${li}`} x={x + colW / 2} y={y + hh / 2 + 3} fontSize={8} fill={INK} textAnchor="middle">{ly.name}</SvgText>);
      y += hh;
    });
    if (col.label) els.push(<SvgText key={`cl${ci}`} x={x + colW / 2} y={y + 12} fontSize={10} fill={INK} textAnchor="middle" fontWeight="bold">{col.label}</SvgText>);
  });
  return els;
}

// ---------- 生物の構造図（花・種子・葉・こん虫・心臓・消化器官・目・耳） ----------

function bioLabel(
  hide: Set<string>,
  key: string,
  text: string,
  lx1: number,
  ly1: number,
  lx2: number,
  ly2: number,
  anchor: 'start' | 'middle' | 'end' = 'start',
): React.ReactNode[] {
  const shown = hide.has(key) ? '？' : text;
  return [
    <Line key={`${key}_ld`} x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={INK} strokeWidth={1} />,
    <SvgText key={`${key}_lt`} x={lx2 + (anchor === 'end' ? -2 : anchor === 'middle' ? 0 : 2)} y={ly2 + 3} fontSize={10} fill={INK} textAnchor={anchor}>
      {shown}
    </SvgText>,
  ];
}

function BioFlower(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(<Line key="stem" x1={160} y1={232} x2={160} y2={150} stroke="#16A34A" strokeWidth={4} />);
  els.push(<Path key="sepL" d="M160,150 C140,150 128,132 132,112 C142,124 152,138 160,150 Z" fill="#16A34A" opacity={0.85} />);
  els.push(<Path key="sepR" d="M160,150 C180,150 192,132 188,112 C178,124 168,138 160,150 Z" fill="#16A34A" opacity={0.85} />);
  [0, 72, 144, 216, 288].forEach((deg, i) => {
    els.push(
      <Ellipse key={`pet${i}`} cx={160} cy={72} rx={17} ry={34} fill="#F472B6" stroke="#DB2777" strokeWidth={1.2} transform={`rotate(${deg}, 160, 106)`} />,
    );
  });
  els.push(<Line key="fil1" x1={160} y1={140} x2={132} y2={95} stroke="#CA8A04" strokeWidth={2} />);
  els.push(<Line key="fil2" x1={160} y1={140} x2={188} y2={95} stroke="#CA8A04" strokeWidth={2} />);
  els.push(<Line key="fil3" x1={160} y1={140} x2={145} y2={80} stroke="#CA8A04" strokeWidth={2} />);
  els.push(<Line key="fil4" x1={160} y1={140} x2={175} y2={80} stroke="#CA8A04" strokeWidth={2} />);
  els.push(<Ellipse key="ykA" cx={132} cy={90} rx={6} ry={9} fill="#FACC15" stroke="#A16207" strokeWidth={1} transform="rotate(-20, 132, 90)" />);
  els.push(<Ellipse key="ykB" cx={188} cy={90} rx={6} ry={9} fill="#FACC15" stroke="#A16207" strokeWidth={1} transform="rotate(20, 188, 90)" />);
  els.push(<Ellipse key="ykC" cx={145} cy={74} rx={6} ry={9} fill="#FACC15" stroke="#A16207" strokeWidth={1} transform="rotate(-12, 145, 74)" />);
  els.push(<Ellipse key="ykD" cx={175} cy={74} rx={6} ry={9} fill="#FACC15" stroke="#A16207" strokeWidth={1} transform="rotate(12, 175, 74)" />);
  els.push(<Ellipse key="shibou" cx={160} cy={142} rx={11} ry={15} fill="#BBF7D0" stroke="#16A34A" strokeWidth={1.6} />);
  els.push(<SvgCircle key="hs1" cx={155} cy={145} r={2.2} fill="#166534" />);
  els.push(<SvgCircle key="hs2" cx={165} cy={145} r={2.2} fill="#166534" />);
  els.push(<SvgCircle key="hs3" cx={160} cy={138} r={2.2} fill="#166534" />);
  els.push(<Line key="kachu" x1={160} y1={128} x2={160} y2={98} stroke="#16A34A" strokeWidth={3} />);
  els.push(<SvgCircle key="chuto" cx={160} cy={92} r={6} fill="#86EFAC" stroke="#16A34A" strokeWidth={1.6} />);

  els.push(...bioLabel(hide, 'gaku', 'がく', 120, 118, 90, 118, 'end'));
  els.push(...bioLabel(hide, 'kaben', '花弁', 177, 60, 210, 50, 'start'));
  els.push(...bioLabel(hide, 'yaku', 'やく', 132, 90, 100, 70, 'end'));
  els.push(...bioLabel(hide, 'kashi', '花糸', 150, 115, 115, 100, 'end'));
  els.push(...bioLabel(hide, 'chuto', '柱頭', 160, 92, 160, 63, 'middle'));
  els.push(...bioLabel(hide, 'kachu', '花柱', 160, 112, 210, 112, 'start'));
  els.push(...bioLabel(hide, 'shibou', '子房', 169, 142, 230, 150, 'start'));
  els.push(...bioLabel(hide, 'haishu', '胚珠', 163, 145, 230, 180, 'start'));
  return els;
}

function BioSeed(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(
    <Path key="body" d="M120,60 C80,70 70,110 80,150 C90,190 130,210 165,205 C210,200 240,170 245,130 C250,90 220,55 175,50 C155,48 138,52 120,60 Z" fill="#FDE68A" stroke="#B45309" strokeWidth={2} />,
  );
  els.push(<Path key="split" d="M163,60 C150,90 150,160 163,200" fill="none" stroke="#B45309" strokeWidth={2} strokeDasharray="4 3" />);
  els.push(<Ellipse key="embryo" cx={163} cy={128} rx={14} ry={20} fill="#86EFAC" stroke="#16A34A" strokeWidth={1.6} />);
  els.push(<Path key="root" d="M163,148 C160,165 155,175 148,182" fill="none" stroke="#16A34A" strokeWidth={2.4} />);
  els.push(<Path key="shoot" d="M163,108 C168,98 178,92 188,90" fill="none" stroke="#16A34A" strokeWidth={2.4} />);

  els.push(...bioLabel(hide, 'shuhi', '種皮', 245, 120, 280, 105, 'start'));
  els.push(...bioLabel(hide, 'shiyou', '子葉', 110, 90, 65, 70, 'end'));
  els.push(...bioLabel(hide, 'youkon', '幼根', 148, 182, 130, 205, 'end'));
  els.push(...bioLabel(hide, 'youga', '幼芽', 188, 90, 210, 70, 'start'));
  return els;
}

function BioLeaf(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(<Rect key="epi1" x={40} y={40} width={240} height={14} fill="#DDD6FE" stroke={INK} strokeWidth={1} />);
  els.push(<Rect key="palisade" x={40} y={54} width={240} height={40} fill="#86EFAC" stroke={INK} strokeWidth={1} />);
  els.push(<Rect key="spongy" x={40} y={94} width={240} height={55} fill="#BBF7D0" stroke={INK} strokeWidth={1} />);
  els.push(<Rect key="epi2" x={40} y={149} width={240} height={14} fill="#DDD6FE" stroke={INK} strokeWidth={1} />);
  const dots: [number, number, number][] = [
    [70, 70, 2.4], [95, 75, 2.4], [120, 68, 2.4], [150, 76, 2.4], [180, 70, 2.4], [210, 76, 2.4], [240, 70, 2.4],
    [80, 115, 2], [130, 125, 2], [190, 118, 2], [230, 128, 2],
  ];
  dots.forEach(([x, y, r], i) => els.push(<SvgCircle key={`dot${i}`} cx={x} cy={y} r={r} fill="#166534" />));
  els.push(<Ellipse key="vein" cx={160} cy={120} rx={20} ry={26} fill="#FDE68A" stroke="#B45309" strokeWidth={1.4} />);
  els.push(<SvgCircle key="xylem" cx={160} cy={108} r={5} fill="#F59E0B" />);
  els.push(<SvgCircle key="phloem" cx={160} cy={132} r={5} fill="#93C5FD" />);
  els.push(<SvgCircle key="stomaOuter" cx={220} cy={156} r={5.5} fill="#fff" stroke={INK} strokeWidth={1.4} />);
  els.push(<SvgCircle key="stomaInner" cx={220} cy={156} r={1.6} fill={INK} />);

  els.push(...bioLabel(hide, 'hyohi', '表皮', 280, 47, 300, 35, 'start'));
  els.push(...bioLabel(hide, 'youmyaku', '葉脈', 180, 120, 230, 95, 'start'));
  els.push(...bioLabel(hide, 'doukan', '道管', 160, 108, 60, 105, 'end'));
  els.push(...bioLabel(hide, 'shikan', '師管', 160, 132, 60, 135, 'end'));
  els.push(...bioLabel(hide, 'kikou', '気孔', 220, 156, 250, 180, 'start'));
  return els;
}

function BioInsect(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(<SvgCircle key="head" cx={70} cy={120} r={26} fill="#FDE68A" stroke={INK} strokeWidth={1.8} />);
  els.push(<Ellipse key="thorax" cx={140} cy={120} rx={34} ry={26} fill="#FCA5A5" stroke={INK} strokeWidth={1.8} />);
  els.push(<Ellipse key="abdomen" cx={230} cy={120} rx={60} ry={30} fill="#BBF7D0" stroke={INK} strokeWidth={1.8} />);
  els.push(<Line key="ant1" x1={60} y1={98} x2={35} y2={70} stroke={INK} strokeWidth={1.6} />);
  els.push(<Line key="ant2" x1={80} y1={98} x2={90} y2={65} stroke={INK} strokeWidth={1.6} />);
  els.push(<SvgCircle key="cEye" cx={82} cy={112} r={7} fill="#1E293B" />);
  els.push(<Path key="leg1" d="M120,140 L100,175" stroke={INK} strokeWidth={2} fill="none" />);
  els.push(<Path key="leg2" d="M140,146 L130,182" stroke={INK} strokeWidth={2} fill="none" />);
  els.push(<Path key="leg3" d="M160,140 L175,175" stroke={INK} strokeWidth={2} fill="none" />);
  els.push(<Ellipse key="wing" cx={150} cy={90} rx={34} ry={14} fill="#BFDBFE" opacity={0.8} stroke="#3B82F6" strokeWidth={1.2} transform="rotate(-10, 150, 90)" />);
  els.push(<SvgCircle key="sp1" cx={200} cy={105} r={2.2} fill={INK} />);
  els.push(<SvgCircle key="sp2" cx={225} cy={100} r={2.2} fill={INK} />);
  els.push(<SvgCircle key="sp3" cx={250} cy={102} r={2.2} fill={INK} />);

  els.push(...bioLabel(hide, 'toubu', '頭部', 70, 146, 55, 175, 'end'));
  els.push(...bioLabel(hide, 'kyoubu', '胸部', 140, 146, 140, 175, 'middle'));
  els.push(...bioLabel(hide, 'fukubu', '腹部', 230, 150, 230, 185, 'middle'));
  els.push(...bioLabel(hide, 'shokkaku', '触角', 35, 70, 20, 50, 'end'));
  els.push(...bioLabel(hide, 'fukugan', '複眼', 82, 112, 60, 90, 'end'));
  els.push(...bioLabel(hide, 'kimon', '気門', 225, 100, 225, 70, 'middle'));
  return els;
}

function BioHeart(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(<Rect key="frame" x={90} y={50} width={140} height={150} rx={16} fill="none" stroke={INK} strokeWidth={1.6} strokeDasharray="3 3" />);
  els.push(<Line key="vsep" x1={160} y1={50} x2={160} y2={200} stroke={INK} strokeWidth={2} />);
  els.push(<Line key="hsep" x1={90} y1={120} x2={230} y2={120} stroke={INK} strokeWidth={2} />);
  els.push(<Rect key="ra" x={93} y={53} width={64} height={64} fill="#FCA5A5" />);
  els.push(<Rect key="la" x={163} y={53} width={64} height={64} fill="#F87171" />);
  els.push(<Rect key="rv" x={93} y={120} width={64} height={77} fill="#EF4444" />);
  els.push(<Rect key="lv" x={163} y={120} width={64} height={77} fill="#B91C1C" />);
  els.push(<Line key="valveR" x1={93} y1={118} x2={157} y2={122} stroke="#fff" strokeWidth={3} />);
  els.push(<Line key="valveL" x1={163} y1={122} x2={227} y2={118} stroke="#fff" strokeWidth={3} />);
  els.push(<Path key="vesR" d="M120,50 L110,20" stroke="#3B82F6" strokeWidth={6} fill="none" />);
  els.push(<Path key="vesL" d="M200,50 L210,20" stroke="#EF4444" strokeWidth={6} fill="none" />);

  const wtext = (key: string, text: string, x: number, y: number) => (
    <SvgText key={`${key}_wt`} x={x} y={y} textAnchor="middle" fontSize={11} fill="#fff" fontWeight="bold">
      {hide.has(key) ? '？' : text}
    </SvgText>
  );
  els.push(wtext('usinbou', '右心房', 125, 88));
  els.push(wtext('sasinbou', '左心房', 195, 88));
  els.push(wtext('usinshitsu', '右心室', 125, 162));
  els.push(wtext('sasinshitsu', '左心室', 195, 162));
  els.push(...bioLabel(hide, 'ben', '弁', 160, 120, 260, 140, 'start'));
  return els;
}

function BioDigestive(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(
    <Path
      key="outline"
      d="M140,10 C120,10 110,30 115,45 C90,55 70,90 90,130 C70,140 60,160 75,185 C95,210 150,215 180,195 C210,205 235,190 230,165 C250,150 245,120 220,110 C230,85 210,55 180,50 C185,30 165,10 140,10 Z"
      fill="none" stroke="#CBD5E1" strokeWidth={1.4} strokeDasharray="3 3"
    />,
  );
  els.push(<SvgCircle key="mouth" cx={140} cy={18} r={5} fill={INK} />);
  els.push(<Line key="esophagus" x1={140} y1={23} x2={130} y2={55} stroke="#F59E0B" strokeWidth={4} />);
  els.push(<Path key="stomach" d="M130,55 C110,60 95,80 105,100 C112,115 135,118 145,105 C155,92 150,65 130,55 Z" fill="#FCA5A5" stroke="#B91C1C" strokeWidth={1.6} />);
  els.push(<Path key="liver" d="M150,60 C175,55 195,65 190,80 C185,92 160,90 150,80 Z" fill="#92400E" opacity={0.85} />);
  els.push(<Ellipse key="pancreas" cx={150} cy={100} rx={22} ry={8} fill="#FBCFE8" stroke="#DB2777" strokeWidth={1.2} transform="rotate(10, 150, 100)" />);
  els.push(
    <Path
      key="smallIntestine"
      d="M110,105 C90,120 90,140 110,150 C130,160 150,145 145,130 C140,118 120,122 122,135 C124,145 138,142 136,132"
      fill="none" stroke="#F97316" strokeWidth={5} strokeLinecap="round"
    />,
  );
  els.push(<Path key="largeIntestine" d="M70,110 L70,190 L200,190 L200,100" fill="none" stroke="#7C3AED" strokeWidth={7} strokeLinecap="round" />);
  els.push(<SvgCircle key="anus" cx={200} cy={195} r={4} fill={INK} />);

  els.push(...bioLabel(hide, 'kuchi', '口', 140, 18, 100, 15, 'end'));
  els.push(...bioLabel(hide, 'shokudou', '食道', 132, 40, 90, 35, 'end'));
  els.push(...bioLabel(hide, 'i', '胃', 112, 90, 60, 80, 'end'));
  els.push(...bioLabel(hide, 'kanzou', '肝臓', 175, 70, 225, 55, 'start'));
  els.push(...bioLabel(hide, 'suizou', 'すい臓', 165, 102, 225, 100, 'start'));
  els.push(...bioLabel(hide, 'shouchou', '小腸', 120, 140, 235, 130, 'start'));
  els.push(...bioLabel(hide, 'daichou', '大腸', 200, 150, 250, 160, 'start'));
  els.push(...bioLabel(hide, 'koumon', 'こう門', 200, 195, 230, 205, 'start'));
  return els;
}

function BioEye(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(<SvgCircle key="ball" cx={150} cy={120} r={70} fill="#F1F5F9" stroke={INK} strokeWidth={2} />);
  els.push(<Path key="cornea" d="M90,90 C70,105 70,135 90,150" fill="none" stroke="#38BDF8" strokeWidth={4} />);
  els.push(<SvgCircle key="irisRing" cx={100} cy={120} r={18} fill="none" stroke={INK} strokeWidth={6} opacity={0.7} />);
  els.push(<SvgCircle key="pupil" cx={100} cy={120} r={8} fill={INK} />);
  els.push(<Ellipse key="lens" cx={118} cy={120} rx={10} ry={22} fill="#BAE6FD" stroke="#0369A1" strokeWidth={1.6} />);
  els.push(<SvgCircle key="vitreous" cx={160} cy={120} r={58} fill="#E0F2FE" opacity={0.5} />);
  els.push(<Path key="retina" d="M150,50 A70,70 0 0 1 150,190" fill="none" stroke="#DC2626" strokeWidth={4} />);
  els.push(<Line key="opticNerve" x1={220} y1={120} x2={250} y2={120} stroke="#FACC15" strokeWidth={8} />);

  els.push(...bioLabel(hide, 'kakumaku', '角膜', 78, 95, 55, 70, 'end'));
  els.push(...bioLabel(hide, 'koushi', 'こう彩', 100, 120, 55, 120, 'end'));
  els.push(...bioLabel(hide, 'suishoutai', '水晶体', 118, 98, 90, 60, 'end'));
  els.push(...bioLabel(hide, 'moumaku', '網膜', 150, 52, 180, 25, 'start'));
  els.push(...bioLabel(hide, 'sishinkei', '視神経', 235, 120, 260, 150, 'start'));
  return els;
}

function BioEar(hide: Set<string>): React.ReactNode[] {
  const els: React.ReactNode[] = [];
  els.push(
    <Path key="outer" d="M40,110 C20,90 30,50 60,45 C90,40 95,80 80,100 C95,105 95,130 75,135" fill="none" stroke={INK} strokeWidth={3} />,
  );
  els.push(<Line key="canal" x1={80} y1={100} x2={140} y2={105} stroke={INK} strokeWidth={6} />);
  els.push(<Line key="eardrum" x1={140} y1={80} x2={140} y2={130} stroke="#DC2626" strokeWidth={4} />);
  els.push(<SvgCircle key="oss1" cx={155} cy={95} r={5} fill="#F59E0B" />);
  els.push(<SvgCircle key="oss2" cx={168} cy={90} r={4} fill="#F59E0B" />);
  els.push(<SvgCircle key="oss3" cx={180} cy={100} r={4} fill="#F59E0B" />);
  els.push(
    <Path key="cochlea" d="M210,110 C230,100 245,110 240,125 C236,136 220,136 218,124 C216,115 226,110 232,116" fill="none" stroke="#7C3AED" strokeWidth={4} strokeLinecap="round" />,
  );
  els.push(<Path key="canal1" d="M195,70 C210,50 235,55 235,75" fill="none" stroke="#0EA5E9" strokeWidth={4} strokeLinecap="round" />);
  els.push(<Path key="canal2" d="M205,65 C215,45 240,48 242,68" fill="none" stroke="#16A34A" strokeWidth={4} strokeLinecap="round" opacity={0.85} />);

  els.push(...bioLabel(hide, 'komaku', '鼓膜', 140, 130, 130, 170, 'end'));
  els.push(...bioLabel(hide, 'jishoukotsu', '耳小骨', 168, 90, 170, 60, 'start'));
  els.push(...bioLabel(hide, 'uzumakikan', 'うずまき管', 228, 118, 250, 150, 'start'));
  els.push(...bioLabel(hide, 'sanhankikan', '三半規管', 215, 60, 230, 30, 'start'));
  return els;
}

function BioDiagramFig({ fig }: { fig: BioDiagramFigure }): React.ReactNode[] {
  const hide = new Set(fig.hideParts ?? []);
  switch (fig.template) {
    case 'flower': return BioFlower(hide);
    case 'seed': return BioSeed(hide);
    case 'leafCrossSection': return BioLeaf(hide);
    case 'insectBody': return BioInsect(hide);
    case 'heart': return BioHeart(hide);
    case 'digestiveSystem': return BioDigestive(hide);
    case 'eye': return BioEye(hide);
    case 'ear': return BioEar(hide);
    default: return [];
  }
}

// ---------- 公開コンポーネント ----------

function buildParts(figure: Figure, uid: string): React.ReactNode[] {
  switch (figure.kind) {
    case 'coordinate': return CoordinateFig({ fig: figure, uid });
    case 'polygon': return PolygonFig({ fig: figure });
    case 'circle': return CircleFig({ fig: figure });
    case 'solid': return SolidFig({ fig: figure });
    case 'numberLine': return NumberLineFig({ fig: figure });
    case 'boxplot': return BoxplotFig({ fig: figure });
    case 'chemStructure': return ChemStructFig({ fig: figure });
    case 'lineChart': return LineChartFig({ fig: figure });
    case 'barChart': return BarChartFig({ fig: figure });
    case 'pieChart': return PieChartFig({ fig: figure });
    case 'circuit': return CircuitFig({ fig: figure });
    case 'net': return NetFig({ fig: figure });
    case 'stratum': return StratumFig({ fig: figure });
    case 'japanMap': return JapanMapFig({ fig: figure });
    case 'bioDiagram': return BioDiagramFig({ fig: figure });
    default: return [];
  }
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// 図解は要素が描かれた順に段階的に立ち上がる「動く解説」。
// animated=true（解説側）で自動再生、タップで再生し直し。question側は静止。
export default function FigureView({ figure, animated = false }: { figure: Figure; animated?: boolean }) {
  const { w, h } = useSize();
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const parts = useMemo(() => buildParts(figure, uid), [figure, uid]);

  const [progress, setProgress] = useState(animated ? 0 : 1);
  const rafRef = useRef<number | null>(null);

  const play = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    const DUR = 1700;
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (startTs == null) startTs = ts;
      const t = Math.min(1, (ts - startTs) / DUR);
      setProgress(easeOut(t));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    setProgress(0);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (animated) play();
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [animated, play]);

  if (figure.kind === 'chemEquation') {
    return (
      <View style={styles.wrap}>
        <TouchableOpacity
          activeOpacity={animated ? 0.7 : 1}
          onPress={animated ? play : undefined}
          style={[styles.canvas, styles.chemCanvas, { opacity: animated ? Math.max(0.15, progress) : 1 }]}
        >
          <ChemEquationFig fig={figure as ChemEqFigure} />
        </TouchableOpacity>
        {animated && <Text style={styles.replayHint}>▶ タップで再生</Text>}
        {figure.caption != null && <Text style={styles.caption}>{figure.caption}</Text>}
      </View>
    );
  }

  const N = Math.max(parts.length, 1);
  const WINDOW = Math.max(3, Math.round(N * 0.18));
  const opacityOf = (i: number) => {
    if (!animated) return 1;
    const t = progress * (N + WINDOW) - i;
    return Math.max(0, Math.min(1, t / WINDOW));
  };

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        activeOpacity={animated ? 0.85 : 1}
        onPress={animated ? play : undefined}
        style={[styles.canvas, { width: w, height: h }]}
      >
        <Svg width="100%" height="100%" viewBox={`0 0 ${VBW} ${VBH}`}>
          {parts.map((el, i) => (
            <G key={`p${i}`} opacity={opacityOf(i)}>{el}</G>
          ))}
        </Svg>
      </TouchableOpacity>
      {animated && (
        <View style={[styles.progressTrack, { width: w }]}>
          <View style={[styles.progressFill, { width: Math.round(w * progress) }]} />
        </View>
      )}
      {animated && <Text style={styles.replayHint}>▶ タップで再生（動く解説）</Text>}
      {figure.caption != null && <Text style={styles.caption}>{figure.caption}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  canvas: {
    alignSelf: 'center',
  },
  chemCanvas: {
    paddingVertical: 14,
  },
  caption: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  replayHint: {
    fontSize: 11,
    color: '#0EA5E9',
    marginTop: 4,
    fontWeight: '600',
  },
  progressTrack: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#E2E8F0',
    marginTop: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#0EA5E9',
  },
  chemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chemTerm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chemFormula: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chemMain: {
    fontSize: 22,
    color: INK,
    fontWeight: '600',
    ...Platform.select({ web: { fontFamily: 'Georgia, serif' }, default: {} }),
  },
  chemCoef: {
    fontSize: 22,
    color: '#E11D48',
    fontWeight: '700',
  },
  chemSub: {
    fontSize: 13,
    color: INK,
    lineHeight: 30,
  },
  chemArrow: {
    fontSize: 22,
    color: ACCENT,
    fontWeight: '700',
  },
});
