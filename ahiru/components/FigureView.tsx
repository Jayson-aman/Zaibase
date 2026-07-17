import React, { useEffect, useId, useMemo, useRef, useState, useCallback } from 'react';
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
  Pt,
} from '../data/figures';

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

  return (
    <>
      <Defs>
        <ClipPath id={clipId}>
          <Rect x={area.x0} y={area.y0} width={area.w} height={area.h} />
        </ClipPath>
      </Defs>
      {els}
    </>
  );
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

  return <>{els}</>;
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

  return <>{els}</>;
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

  return <>{els}</>;
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
  return <>{els}</>;
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
  return <>{els}</>;
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
  return <>{els}</>;
}

// ---------- 公開コンポーネント ----------

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// animated=true（主に解説側）で、図が左から描き込まれるアニメーションを再生。
// タップで何度でも再生し直せる。
export default function FigureView({ figure, animated = false }: { figure: Figure; animated?: boolean }) {
  const { w, h } = useSize();
  const isChem = figure.kind === 'chemEquation';
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const [progress, setProgress] = useState(animated ? 0 : 1);
  const rafRef = useRef<number | null>(null);

  const play = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    const DUR = 1150;
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

  const body = useMemo(() => {
    switch (figure.kind) {
      case 'coordinate': return <CoordinateFig fig={figure} uid={uid} />;
      case 'polygon': return <PolygonFig fig={figure} />;
      case 'circle': return <CircleFig fig={figure} />;
      case 'solid': return <SolidFig fig={figure} />;
      case 'numberLine': return <NumberLineFig fig={figure} />;
      case 'boxplot': return <BoxplotFig fig={figure} />;
      case 'chemStructure': return <ChemStructFig fig={figure} />;
      default: return null;
    }
  }, [figure, uid]);

  // 化学反応式はSVGではないのでフェードインで演出
  if (isChem) {
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

  const revealW = Math.max(0.001, VBW * progress);

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        activeOpacity={animated ? 0.85 : 1}
        onPress={animated ? play : undefined}
        style={[styles.canvas, { width: w, height: h }]}
      >
        <Svg width="100%" height="100%" viewBox={`0 0 ${VBW} ${VBH}`}>
          <Defs>
            <ClipPath id={`reveal-${uid}`}>
              <Rect x={0} y={0} width={revealW} height={VBH} />
            </ClipPath>
          </Defs>
          <G clipPath={animated ? `url(#reveal-${uid})` : undefined}>{body}</G>
        </Svg>
      </TouchableOpacity>
      {animated && <Text style={styles.replayHint}>▶ タップで再生</Text>}
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
