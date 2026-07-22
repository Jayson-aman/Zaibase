import React from 'react';
import type { ColorValue } from 'react-native';
import Svg, { Path, Rect, Circle, Line } from 'react-native-svg';

// ───────────────────────────────────────────────────────────────
// タブバー用の線アイコン（絵文字 🏫📝📚🗾📅📋🎓 の置き換え）。
// expo-router の tabBarIcon から渡る color でアクティブ/非アクティブを着色。
// ───────────────────────────────────────────────────────────────

export type TabName =
  | 'schools' | 'quiz' | 'textbook' | 'geography' | 'timeline' | 'formulas' | 'coach';

export default function TabBarIcon({ name, color, size = 22 }: { name: TabName; color: ColorValue; size?: number }) {
  const stroke = color as string;
  const c = { stroke, strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {name === 'schools' && (
        <>
          <Path d="M3 20h18" {...c} />
          <Path d="M6 20V9l6-3.5 6 3.5v11" {...c} />
          <Path d="M12 5.5V3M10.5 4h3" {...c} />
          <Rect x={10} y={15} width={4} height={5} {...c} />
          <Path d="M9 10h1.5M13.5 10h1.5M9 12.5h1.5M13.5 12.5h1.5" {...c} />
        </>
      )}
      {name === 'quiz' && (
        <>
          <Rect x={4} y={4} width={16} height={16} rx={2.4} {...c} />
          <Path d="M9 9.5h6M9 13h4" {...c} />
          <Circle cx={16} cy={16} r={0.6} fill={stroke} />
        </>
      )}
      {name === 'textbook' && (
        <>
          <Path d="M12 6.5C9.5 5 6.5 5 4.5 5.8v12C6.5 17 9.5 17 12 18.5" {...c} />
          <Path d="M12 6.5c2.5-1.5 5.5-1.5 7.5-.7v12c-2-.8-5-.8-7.5.7" {...c} />
          <Line x1={12} y1={6.5} x2={12} y2={18.5} {...c} />
        </>
      )}
      {name === 'geography' && (
        <>
          <Path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" {...c} />
          <Line x1={9} y1={4} x2={9} y2={18} {...c} />
          <Line x1={15} y1={6} x2={15} y2={20} {...c} />
        </>
      )}
      {name === 'timeline' && (
        <>
          <Line x1={6} y1={4} x2={6} y2={20} {...c} />
          <Circle cx={6} cy={7} r={1.6} {...c} />
          <Circle cx={6} cy={12.5} r={1.6} {...c} />
          <Circle cx={6} cy={18} r={1.6} {...c} />
          <Path d="M9.5 7h9M9.5 12.5h9M9.5 18h6" {...c} />
        </>
      )}
      {name === 'formulas' && (
        <>
          <Path d="M9 4.5h6v2.5H9z" {...c} />
          <Path d="M15 5.7h1.5A1.5 1.5 0 0 1 18 7.2v11.3A1.5 1.5 0 0 1 16.5 20h-9A1.5 1.5 0 0 1 6 18.5V7.2a1.5 1.5 0 0 1 1.5-1.5H9" {...c} />
          <Path d="M9 11h6M9 14.5h4" {...c} />
        </>
      )}
      {name === 'coach' && (
        <>
          <Path d="M2.5 9 12 5.2 21.5 9 12 12.8z" {...c} />
          <Path d="M6.5 11v4.2c0 1 2.5 2 5.5 2s5.5-1 5.5-2V11" {...c} />
          <Path d="M21.5 9v5" {...c} />
        </>
      )}
    </Svg>
  );
}
