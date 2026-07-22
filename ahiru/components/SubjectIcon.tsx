import React from 'react';
import Svg, { Path, Circle, Ellipse, Rect, Line } from 'react-native-svg';

// ───────────────────────────────────────────────────────────────
// 教科アイコン（絵文字 📐📖🔬🗾🌍 の置き換え）
// ミニマル幾何：統一線幅の直線ラインアイコン。react-native-svg 描画なので
// 拡大しても綺麗で、色は subject カラーに合わせて渡せる。
//   算数=座標グラフ / 国語=縦書き枠 / 理科=分子 / 社会=地球儀 / 英語=吹き出しA
// ───────────────────────────────────────────────────────────────

export type IconSubject = 'sansu' | 'kokugo' | 'rika' | 'shakai' | 'eigo';

type Props = {
  subject: IconSubject;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export default function SubjectIcon({ subject, size = 24, color = '#0F1826', strokeWidth = 1.75 }: Props) {
  const common = {
    stroke: color,
    strokeWidth,
    fill: 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {subject === 'sansu' && (
        <>
          <Path d="M4 3.5V20h16" {...common} />
          <Path d="M4.5 16.5C9 16.5 10 7.5 19.5 6" {...common} />
          <Circle cx={19.5} cy={6} r={1.5} fill={color} />
        </>
      )}
      {subject === 'kokugo' && (
        <>
          <Rect x={4.5} y={3.5} width={15} height={17} rx={1.6} {...common} />
          <Line x1={14.6} y1={6.5} x2={14.6} y2={17.5} {...common} />
          <Line x1={9.6} y1={6.5} x2={9.6} y2={17.5} {...common} />
          <Path d="M15.8 7.6h1.6M15.8 10h1.6M15.8 12.4h1.6" {...common} />
        </>
      )}
      {subject === 'rika' && (
        <>
          <Circle cx={6} cy={16.5} r={2.6} {...common} />
          <Circle cx={18} cy={16.5} r={2.6} {...common} />
          <Circle cx={12} cy={6} r={2.6} {...common} />
          <Line x1={10.3} y1={8} x2={7.6} y2={14.6} {...common} />
          <Line x1={13.7} y1={8} x2={16.4} y2={14.6} {...common} />
          <Line x1={8.6} y1={16.5} x2={15.4} y2={16.5} {...common} />
        </>
      )}
      {subject === 'shakai' && (
        <>
          <Circle cx={12} cy={12} r={8.5} {...common} />
          <Ellipse cx={12} cy={12} rx={3.7} ry={8.5} {...common} />
          <Line x1={3.6} y1={12} x2={20.4} y2={12} {...common} />
          <Path d="M5.3 7.5h13.4M5.3 16.5h13.4" {...common} />
        </>
      )}
      {subject === 'eigo' && (
        <>
          <Path
            d="M5 4.5h14a1.6 1.6 0 0 1 1.6 1.6v8a1.6 1.6 0 0 1-1.6 1.6h-8l-4 3.4V16H5a1.6 1.6 0 0 1-1.6-1.6v-8A1.6 1.6 0 0 1 5 4.5z"
            {...common}
          />
          <Path d="M9.4 13.2 12 7l2.6 6.2M10.4 11.3h3.2" {...common} />
        </>
      )}
    </Svg>
  );
}
