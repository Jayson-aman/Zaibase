import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Text as SvgText, G } from 'react-native-svg';
import { prefectureShapes } from '../data/japanPrefectures';
import { mountainRanges, rivers } from '../data/geographyTerrain';
import { regionMaps } from '../data/geographyRegionMaps';
import { project } from '../data/geoProject';

/**
 * 地方ごとの拡大地図。都道府県の形、県庁所在地、おもな都市、山脈・川、平野、海・海流を、
 * その地方だけを大きく映して描く。「どこに何があるか」を位置で覚えるための地図。
 */

type Props = {
  regionId: string;
  /** 地方名（地域名の括弧書きを外したもの。山・川データの region と突き合わせる） */
  regionKey: string;
  width: number;
  /** 'all'：すべて／'terrain'：山と川を目立たせる */
  focus?: 'all' | 'terrain';
};

const PAD = 7; // 地図の外側の余白（viewBox座標）

// 沖縄は本土から遠く、左下に別枠で描かれているので、九州の地図では外す
const SKIP_PREF_IDS = new Set([47]);

export default function RegionMap({ regionId, regionKey, width, focus = 'all' }: Props) {
  const data = regionMaps[regionId];

  const { prefs, vb } = useMemo(() => {
    const regionPrefs = prefectureShapes.filter((p) => p.region === regionId && !SKIP_PREF_IDS.has(p.id));
    // 地方の外形（bbox）を、パスの座標から求める
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of regionPrefs) {
      const nums = p.path.match(/-?\d+(\.\d+)?/g) ?? [];
      for (let i = 0; i + 1 < nums.length; i += 2) {
        const x = parseFloat(nums[i]);
        const y = parseFloat(nums[i + 1]);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
    const w = maxX - minX + PAD * 2;
    const h = maxY - minY + PAD * 2;
    return { prefs: regionPrefs, vb: { x: minX - PAD, y: minY - PAD, w, h } };
  }, [regionId]);

  if (!data || prefs.length === 0) return null;

  const height = Math.round((width * vb.h) / vb.w);
  const k = vb.w / width; // 1画面px あたりの viewBox 座標の長さ。文字・線の太さをこれで割り戻す
  const fs = (px: number) => px * k;

  const mtns = mountainRanges.filter((m) => m.region.includes(regionKey) || regionKey.includes(m.region));
  const rvs = rivers.filter((r) => r.region.includes(regionKey) || regionKey.includes(r.region));
  const dim = focus === 'terrain' ? 0.55 : 1;

  const label = (name: string, lat: number, lon: number, opts: { size: number; color: string; weight?: '700' | '400'; dy?: number; anchor?: 'start' | 'middle' | 'end' }) => {
    const [x, y] = project(lat, lon);
    const common = {
      x,
      y: y + fs(opts.dy ?? 0),
      fontSize: fs(opts.size),
      fontWeight: opts.weight ?? '700',
      textAnchor: opts.anchor ?? 'middle',
    } as const;
    return (
      <G key={`${name}_${lat}_${lon}`}>
        <SvgText {...common} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth={fs(3)} strokeLinejoin="round">
          {name}
        </SvgText>
        <SvgText {...common} fill={opts.color}>
          {name}
        </SvgText>
      </G>
    );
  };

  return (
    <View style={styles.wrap}>
      <Svg width={width} height={height} viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}>
        {/* 海 */}
        <Path d={`M ${vb.x} ${vb.y} h ${vb.w} v ${vb.h} h ${-vb.w} Z`} fill="#E3F1FB" />

        {/* ほかの地方（うすい灰色） */}
        {prefectureShapes
          .filter((p) => p.region !== regionId)
          .map((p) => (
            <Path key={`o_${p.id}`} d={p.path} fill="#EFE9DD" stroke="#D8CFBF" strokeWidth={fs(0.8)} />
          ))}

        {/* この地方の都道府県 */}
        {prefs.map((p) => (
          <Path
            key={`p_${p.id}`}
            d={p.path}
            fill={p.color}
            fillOpacity={0.22 * dim + 0.1}
            stroke="#8A7B66"
            strokeWidth={fs(1)}
            strokeLinejoin="round"
          />
        ))}

        {/* 山脈（茶色のギザギザ） */}
        {mtns.map((m) => (
          <Path key={`m_${m.id}`} d={m.path} fill="none" stroke="#7A5230" strokeWidth={fs(focus === 'terrain' ? 3.4 : 2.4)} strokeLinecap="round" strokeLinejoin="miter" />
        ))}

        {/* 川（青い線） */}
        {rvs.map((r) => (
          <Path key={`r_${r.id}`} d={r.path} fill="none" stroke="#1E88E5" strokeWidth={fs(focus === 'terrain' ? 3 : 2.2)} strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* 海・海流の名前 */}
        {data.seas.map((s) =>
          label(s.name, s.lat, s.lon, {
            size: s.kind === 'sea' ? 11 : 10,
            color: s.kind === 'warm' ? '#D32F2F' : s.kind === 'cold' ? '#1565C0' : '#3B7FB8',
            weight: s.kind === 'sea' ? '400' : '700',
          }),
        )}

        {/* 平野・盆地・半島 */}
        {data.plains.map((s) => label(s.name, s.lat, s.lon, { size: 10.5, color: '#2E7D32', dy: 13 }))}

        {/* おもな都市 */}
        {data.cities.map((c) => {
          const [x, y] = project(c.lat, c.lon);
          return (
            <G key={`c_${c.name}`}>
              <Circle cx={x} cy={y} r={fs(2.4)} fill="#5D4037" stroke="#FFFFFF" strokeWidth={fs(1)} />
              {label(c.name, c.lat, c.lon, { size: 10, color: '#4E342E', weight: '400', dy: -4.5 })}
            </G>
          );
        })}

        {/* 県庁所在地 */}
        {data.capitals.map((c) => {
          const [x, y] = project(c.lat, c.lon);
          return (
            <G key={`k_${c.name}`}>
              <Circle cx={x} cy={y} r={fs(3.8)} fill="#C62828" stroke="#FFFFFF" strokeWidth={fs(1.2)} />
              {label(c.name, c.lat, c.lon, { size: 11.5, color: '#B71C1C', dy: -7 })}
            </G>
          );
        })}
      </Svg>

      <View style={styles.legend}>
        <Text style={styles.legendItem}>🔴 県庁所在地</Text>
        <Text style={styles.legendItem}>⚫ おもな都市</Text>
        <Text style={styles.legendItem}>🟫 山脈</Text>
        <Text style={styles.legendItem}>🔵 川</Text>
        <Text style={styles.legendItem}>🟢 平野・半島</Text>
        <Text style={[styles.legendItem, { color: '#D32F2F' }]}>赤字＝暖流</Text>
        <Text style={[styles.legendItem, { color: '#1565C0' }]}>青字＝寒流</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 8, borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#D8CFBF', backgroundColor: '#FFFFFF' },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 10, paddingVertical: 8, backgroundColor: '#FAF6EE' },
  legendItem: { fontSize: 12, color: '#4E4338', fontWeight: '600' },
});
