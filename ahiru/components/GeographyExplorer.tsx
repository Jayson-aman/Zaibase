import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path as SvgPath, G as SvgG } from 'react-native-svg';
import {
  geographyRegions,
  industrialZoneSummary,
  sectorOverview,
  GeoRegion,
} from '../data/geographyRegions';
import {
  mountainRanges,
  rivers,
  abaregawaTrivia,
  japanAlpsTrivia,
} from '../data/geographyTerrain';
import { prefectureShapes, JP_MAP_VIEWBOX } from '../data/japanPrefectures';
import { geographyImages } from '../data/geographyImages';
import { GeoLayerId } from '../constants/proAccess';

// 初期レンダリングで window.width が 0 の場合に負値にならないようガード
const MAP_W = Math.max(240, Math.min(Dimensions.get('window').width - 48, 440));
const MAP_H = MAP_W * 1.15;
// 都道府県SVGパスのviewBox（data/japanPrefectures.ts と一致）
const VIEWBOX_W = JP_MAP_VIEWBOX.w;
const VIEWBOX_H = JP_MAP_VIEWBOX.h;

// 地方ごとに、その地方に属する都道府県の重心の平均をラベル位置にする
const REGION_LABEL_POS: Record<string, { x: number; y: number }> = (() => {
  const acc: Record<string, { x: number; y: number; n: number }> = {};
  for (const p of prefectureShapes) {
    const a = (acc[p.region] ??= { x: 0, y: 0, n: 0 });
    a.x += p.cx;
    a.y += p.cy;
    a.n += 1;
  }
  const out: Record<string, { x: number; y: number }> = {};
  for (const [region, a] of Object.entries(acc)) out[region] = { x: a.x / a.n, y: a.y / a.n };
  // 沖縄インセットに重心が引っぱられないよう、九州本体側へ寄せる
  if (out.kyushu) out.kyushu = { x: 55, y: 268 };
  return out;
})();

const LAYERS: { key: GeoLayerId; label: string; emoji: string }[] = [
  { key: 'terrain', label: '地形', emoji: '🏔' },
  { key: 'mountains', label: '山と川', emoji: '⛰️' },
  { key: 'agriculture', label: '農業', emoji: '🌾' },
  { key: 'fishery', label: '漁業', emoji: '🐟' },
  { key: 'forestry', label: '林業', emoji: '🌲' },
  { key: 'factory', label: '工業', emoji: '🏭' },
  { key: 'commerce', label: '商業', emoji: '🏪' },
];

type Props = {
  isPro?: boolean;
  onRequirePro?: () => void;
};

export default function GeographyExplorer(_props: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [layer, setLayer] = useState<GeoLayerId>('terrain');
  const zoom = useSharedValue(1);
  const tilt = useSharedValue(12);

  const selected = geographyRegions.find((r) => r.id === selectedId) ?? null;

  const mapAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 900 },
      { rotateX: `${tilt.value}deg` },
      { scale: zoom.value },
    ],
  }));

  function zoomIn() {
    const next = Math.min(zoom.get() + 0.25, 2.2);
    zoom.value = withSpring(next, { damping: 14 });
    tilt.value = withSpring(Math.max(tilt.get() - 2, 4), { damping: 14 });
  }

  function zoomOut() {
    const next = Math.max(zoom.get() - 0.25, 0.75);
    zoom.value = withSpring(next, { damping: 14 });
    tilt.value = withSpring(Math.min(tilt.get() + 2, 16), { damping: 14 });
  }

  function resetView() {
    zoom.value = withSpring(1, { damping: 14 });
    tilt.value = withSpring(12, { damping: 14 });
    setSelectedId(null);
  }

  function selectRegion(region: GeoRegion) {
    setSelectedId(region.id === selectedId ? null : region.id);
    zoom.value = withSpring(region.id === selectedId ? 1 : 1.35, { damping: 14 });
    tilt.value = withSpring(region.id === selectedId ? 12 : 6, { damping: 14 });
  }

  function handleLayerChange(key: GeoLayerId) {
    setLayer(key);
  }

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>🗾 日本地理マップ</Text>
        <View style={styles.zoomRow}>
          <TouchableOpacity style={styles.zoomBtn} onPress={zoomOut}>
            <Text style={styles.zoomBtnText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomBtn} onPress={resetView}>
            <Text style={styles.zoomBtnTextSmall}>全国</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomBtn} onPress={zoomIn}>
            <Text style={styles.zoomBtnText}>＋</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.layerScroll}>
        <View style={styles.layerRow}>
          {LAYERS.map((l) => (
            <TouchableOpacity
              key={l.key}
              style={[styles.layerBtn, layer === l.key && styles.layerBtnActive]}
              onPress={() => handleLayerChange(l.key)}
            >
              <Text style={[styles.layerText, layer === l.key && styles.layerTextActive]}>
                {l.emoji} {l.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.sectorRow}>
        {sectorOverview.map((s) => (
          <View key={s.name} style={styles.sectorChip}>
            <Text style={styles.sectorEmoji}>{s.emoji}</Text>
            <Text style={styles.sectorName} numberOfLines={1}>{s.name.replace('第一次産業（', '').replace('）', '')}</Text>
          </View>
        ))}
      </View>

      <View style={styles.mapStage}>
        <View style={styles.mapShadow} />
        <Animated.View style={[styles.mapContainer, mapAnimatedStyle]}>
          <View style={[styles.mapBase, { width: MAP_W, height: MAP_H }]}>
            <Svg width={MAP_W} height={MAP_H} viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}>
              {/* 47都道府県を地方の色で描く（正確な国土形状） */}
              {prefectureShapes.map((pref) => {
                const isSel = selectedId === pref.region;
                // 山と川レイヤーのときは、地方の色をうすくして山脈・川を目立たせる
                const dimmed = layer === 'mountains';
                const region = geographyRegions.find((r) => r.id === pref.region);
                return (
                  <SvgG key={`pref_${pref.id}`} onPress={() => region && selectRegion(region)}>
                    <SvgPath
                      d={pref.path}
                      fill={pref.color}
                      stroke={isSel ? '#FFFFFF' : 'rgba(255,255,255,0.55)'}
                      strokeWidth={isSel ? 1.2 : 0.5}
                      opacity={isSel ? 1 : dimmed ? 0.45 : 0.9}
                    />
                  </SvgG>
                );
              })}

              {/* 山と川レイヤー：川（青い線）と山脈（茶色のギザギザ）を重ねる */}
              {layer === 'mountains' && (
                <SvgG>
                  {rivers.map((r) => (
                    <SvgPath
                      key={`river_${r.id}`}
                      d={r.path}
                      fill="none"
                      stroke="#1D6FC0"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.95}
                    />
                  ))}
                  {mountainRanges.map((m) => (
                    <SvgPath
                      key={`mtn_${m.id}`}
                      d={m.path}
                      fill="none"
                      stroke="#7A5230"
                      strokeWidth={2.6}
                      strokeLinecap="round"
                      strokeLinejoin="miter"
                      opacity={0.95}
                    />
                  ))}
                </SvgG>
              )}
            </Svg>
            {/* 地域ラベル（絵文字＋名前）をSVGの上に絶対配置 */}
            {geographyRegions.map((region) => {
              const pos = REGION_LABEL_POS[region.id];
              if (!pos) return null;
              const isSel = selectedId === region.id;
              return (
                <Pressable
                  key={`label_${region.id}`}
                  onPress={() => selectRegion(region)}
                  style={[
                    styles.mapLabel,
                    layer === 'mountains' && styles.mapLabelDim,
                    {
                      left: (pos.x / VIEWBOX_W) * MAP_W - 30,
                      top: (pos.y / VIEWBOX_H) * MAP_H - 16,
                    },
                  ]}
                >
                  <Text style={styles.mapLabelEmoji}>{region.emoji}</Text>
                  <Text style={[styles.mapLabelText, isSel && styles.mapLabelTextSel]} numberOfLines={1}>
                    {region.name.replace(/（.*）/, '')}
                  </Text>
                </Pressable>
              );
            })}

            {/* 山と川レイヤーのラベル */}
            {layer === 'mountains' && rivers.map((r) => (
              <View
                key={`rlabel_${r.id}`}
                pointerEvents="none"
                style={[
                  styles.terrainLabel,
                  { left: (r.labelX / VIEWBOX_W) * MAP_W - 24, top: (r.labelY / VIEWBOX_H) * MAP_H - 8 },
                ]}
              >
                <Text style={styles.riverLabelText} numberOfLines={1}>💧{r.name}</Text>
              </View>
            ))}
            {layer === 'mountains' && mountainRanges.map((m) => (
              <View
                key={`mlabel_${m.id}`}
                pointerEvents="none"
                style={[
                  styles.terrainLabel,
                  { left: (m.labelX / VIEWBOX_W) * MAP_W - 24, top: (m.labelY / VIEWBOX_H) * MAP_H - 8 },
                ]}
              >
                <Text style={styles.mountainLabelText} numberOfLines={1}>⛰{m.name.replace(/（.*）/, '')}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </View>

      <View style={styles.tapHint}>
        <Text style={styles.tapHintText}>
          {layer === 'mountains'
            ? '⛰ 茶色の線が山脈、💧 青い線が川。下に長さ・標高の詳細があるよ'
            : '👆 地域をタップすると詳細情報が表示されます'}
        </Text>
      </View>

      {/* 山と川レイヤーの詳細リスト */}
      {layer === 'mountains' && (
        <View style={styles.terrainPanel}>
          {/* 川（長さ順） */}
          <Text style={styles.terrainPanelTitle}>💧 主要な川（長い順）</Text>
          {rivers.map((r) => (
            <View key={`rd_${r.id}`} style={styles.terrainCard}>
              <View style={styles.terrainCardHead}>
                <Text style={styles.terrainCardName}>{r.name}<Text style={styles.terrainReading}>（{r.reading}）</Text></Text>
                <View style={styles.terrainBadge}>
                  <Text style={styles.terrainBadgeText}>{r.lengthKm}km</Text>
                </View>
              </View>
              {(r.rank || r.nickname) && (
                <Text style={styles.terrainTag}>
                  {r.rank ? `🏅 ${r.rank}` : ''}{r.rank && r.nickname ? '　' : ''}{r.nickname ? `📛 別名「${r.nickname}」` : ''}
                </Text>
              )}
              <Text style={styles.terrainMeta}>🌾 つくる平野：{r.plain}　🌊 河口：{r.mouth}</Text>
              <Text style={styles.terrainNote}>{r.note}</Text>
            </View>
          ))}

          {/* 山脈（山地） */}
          <Text style={[styles.terrainPanelTitle, { marginTop: 14 }]}>⛰ 主要な山脈・山地</Text>
          {mountainRanges.map((m) => (
            <View key={`md_${m.id}`} style={styles.terrainCard}>
              <View style={styles.terrainCardHead}>
                <Text style={styles.terrainCardName}>{m.name}<Text style={styles.terrainReading}>（{m.reading}）</Text></Text>
                <View style={[styles.terrainBadge, styles.terrainBadgeMtn]}>
                  <Text style={styles.terrainBadgeText}>{m.heightM.toLocaleString()}m</Text>
                </View>
              </View>
              <Text style={styles.terrainMeta}>📍 {m.region}　🗻 最高峰：{m.highestPeak}</Text>
              <Text style={styles.terrainNote}>{m.note}</Text>
            </View>
          ))}

          {/* 豆知識：日本アルプス */}
          <View style={styles.triviaCard}>
            <Text style={styles.triviaTitle}>💡 {japanAlpsTrivia.title}</Text>
            <Text style={styles.triviaIntro}>{japanAlpsTrivia.intro}</Text>
            {japanAlpsTrivia.items.map((it) => (
              <Text key={it.name} style={styles.triviaItem}>・{it.name}：{it.peak}</Text>
            ))}
          </View>

          {/* 豆知識：三大暴れ川 */}
          <View style={styles.triviaCard}>
            <Text style={styles.triviaTitle}>💡 {abaregawaTrivia.title}</Text>
            <Text style={styles.triviaIntro}>{abaregawaTrivia.intro}</Text>
            {abaregawaTrivia.items.map((it) => (
              <Text key={it.name} style={styles.triviaItem}>・{it.name}（{it.region}）＝「{it.nickname}」</Text>
            ))}
          </View>
        </View>
      )}

      <Modal
        visible={!!selected}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => resetView()}
      >
        {selected && (
          <View style={styles.modalRoot}>
            <View style={[styles.modalHeader, { backgroundColor: selected.color }]}>
              <Text style={styles.modalHeaderTitle}>{selected.emoji} {selected.name}</Text>
              <TouchableOpacity onPress={() => resetView()} style={styles.modalCloseBtn}>
                <Text style={styles.modalCloseBtnText}>✕ 閉じる</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.layerRow2} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 12, gap: 8, flexDirection: 'row' }}>
              {LAYERS.map((l) => (
                <TouchableOpacity
                  key={l.key}
                  style={[styles.layerBtn, layer === l.key && styles.layerBtnActive]}
                  onPress={() => handleLayerChange(l.key)}
                >
                  <Text style={[styles.layerText, layer === l.key && styles.layerTextActive]}>
                    {l.emoji} {l.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <RegionDetail region={selected} layer={layer} onClose={() => resetView()} />
          </View>
        )}
      </Modal>
    </View>
  );
}

function RegionDetail({
  region,
  layer,
  onClose,
}: {
  region: GeoRegion;
  layer: GeoLayerId;
  onClose: () => void;
}) {
  const ag = region.agriculture;
  const fi = region.fishery;
  // 「山と川」レイヤーで地域を選んだとき用：この地域にある山地・山脈を抽出。
  // 地域名の括弧書き（例：近畿（関西））を外して region 文字列と突き合わせる。
  const regionKey = region.name.replace(/（.*）/, '');
  const regionMountains = mountainRanges.filter(
    (m) => m.region.includes(regionKey) || regionKey.includes(m.region),
  );

  return (
    <ScrollView style={styles.detailCard} showsVerticalScrollIndicator={false}>
      <View style={styles.detailHeader}>
        <Text style={styles.detailTitle}>{region.emoji} {region.name}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.detailClose}>✕ 閉じる</Text>
        </TouchableOpacity>
      </View>

      {layer === 'terrain' && (
        <>
          <DetailSection title="🏔 地形" items={[region.terrain]} />
          <DetailSection title="🌤 気候" items={[region.climate]} />
          <DetailSection title="✨ 特色" items={region.features} />
          <DetailSection title="🏙 主要都市" items={region.cities.map((c) => `${c.name} — ${c.note}`)} />
        </>
      )}

      {layer === 'mountains' && (
        <>
          <DetailSection title="🏔 地形" items={[region.terrain]} />
          {regionMountains.length > 0 ? (
            <DetailSection
              title="⛰ この地域のおもな山地・山脈"
              items={regionMountains.map(
                (m) => `${m.name}（${m.reading}）／${m.kind}・最高峰 ${m.highestPeak} ${m.heightM}m — ${m.note}`,
              )}
            />
          ) : (
            <DetailSection
              title="⛰ 山地・山脈"
              items={['この地域には日本アルプスのような大きな山脈はありません。全国のおもな山地・山脈は、地図の下の一覧で位置とあわせて確認できます。']}
            />
          )}
          <DetailSection
            title="💧 川について"
            items={['全国のおもな川（信濃川・利根川など）は、地図の下の「主要な川（長い順）」一覧で、つくる平野や河口とあわせて確認できます。']}
          />
        </>
      )}

      {layer === 'agriculture' && (
        <>
          <DetailSection title="🚜 農業の種類" items={ag.farmingTypes} />
          <DetailSection title="🌾 主要作物" items={ag.mainCrops} />
          {ag.spotlights && ag.spotlights.length > 0 && (
            <View style={styles.spotlightSection}>
              <Text style={styles.spotlightHeader}>🔍 注目の特産品</Text>
              {ag.spotlights.map((s) => {
                const img = geographyImages[s.name];
                return (
                  <View key={s.name} style={styles.spotlightCard}>
                    {img && (
                      <Image source={img} style={styles.spotlightImage} resizeMode="cover" />
                    )}
                    <Text style={styles.spotlightName}>{s.name}</Text>
                    <Text style={styles.spotlightLocation}>📍 {s.location}</Text>
                    <Text style={styles.spotlightWhy}>{s.why}</Text>
                  </View>
                );
              })}
            </View>
          )}
          <DetailSection title="🐄 畜産" items={ag.livestock} />
          <DetailSection title="📝 メモ" items={ag.notes} />
          <DetailSection title="🎁 特産" items={region.products} />
        </>
      )}

      {layer === 'fishery' && (
        <>
          <DetailSection title="🌊 漁場" items={fi.fishingGrounds} />
          <DetailSection title="🐟 主要魚種" items={fi.mainCatch} />
          <DetailSection title="🏗 養殖" items={fi.aquaculture} />
        </>
      )}

      {layer === 'forestry' && (
        <DetailSection title="🌲 林業" items={region.forestry} />
      )}

      {layer === 'factory' && (
        <>
          <DetailSection title="🏢 主な工業" items={region.industries} />
          {region.industrialZones.map((zone) => (
            <View key={zone.name} style={styles.factoryBlock}>
              <Text style={styles.factoryName}>🏭 {zone.name}</Text>
              <Text style={styles.factoryLabel}>主な工業</Text>
              {zone.mainIndustries.map((i) => (
                <Text key={i} style={styles.factoryItem}>• {i}</Text>
              ))}
              <Text style={[styles.factoryLabel, { marginTop: 8 }]}>有名</Text>
              {zone.famous.map((f) => (
                <Text key={f} style={styles.factoryHighlight}>★ {f}</Text>
              ))}
            </View>
          ))}
        </>
      )}

      {layer === 'commerce' && (
        <>
          <DetailSection title="🏪 商業・サービス業" items={region.commerce} />
          <DetailSection title="🎁 特産・名物" items={region.products} />
        </>
      )}
    </ScrollView>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <View style={styles.detailSection}>
      <Text style={styles.detailSectionTitle}>{title}</Text>
      {items.map((item) => (
        <Text key={item} style={styles.detailItem}>• {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { marginBottom: 20 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: { fontSize: 17, fontWeight: '800', color: '#221C18' },
  proBanner: {
    backgroundColor: '#9B59B6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  proBannerText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  layerScroll: { marginBottom: 8 },
  layerRow: { flexDirection: 'row', gap: 6, paddingRight: 8 },
  layerBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#EBE4D8',
  },
  layerBtnActive: { backgroundColor: '#6B4226' },
  layerText: { fontSize: 13, fontWeight: '700', color: '#555' },
  layerTextActive: { color: '#FFF' },
  sectorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  sectorChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FFF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  sectorEmoji: { fontSize: 12 },
  sectorName: { fontSize: 10, fontWeight: '700', color: '#276749', maxWidth: 56 },
  mapStage: { alignItems: 'center', marginBottom: 12, overflow: 'visible' },
  mapShadow: {
    position: 'absolute',
    bottom: -8,
    width: MAP_W * 0.85,
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.12)',
    borderRadius: 999,
    transform: [{ scaleX: 1.1 }],
  },
  mapContainer: { alignItems: 'center' },
  mapBase: {
    backgroundColor: '#B8D4E8',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#7EB8D4',
    overflow: 'hidden',
    position: 'relative',
  },
  regionBlock: {
    position: 'absolute',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  mapLabel: {
    position: 'absolute',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapLabelEmoji: { fontSize: 15, textAlign: 'center' },
  mapLabelText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.55)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  mapLabelTextSel: {
    fontSize: 11,
    textShadowColor: 'rgba(0,0,0,0.8)',
  },
  mapLabelDim: { opacity: 0.55 },
  terrainLabel: {
    position: 'absolute',
    width: 48,
    alignItems: 'center',
  },
  riverLabelText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#0B3D6B',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 4,
    paddingHorizontal: 2,
    overflow: 'hidden',
  },
  mountainLabelText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#5A3A1E',
    textAlign: 'center',
    backgroundColor: 'rgba(255,244,230,0.85)',
    borderRadius: 4,
    paddingHorizontal: 2,
    overflow: 'hidden',
  },
  terrainPanel: { marginBottom: 8 },
  terrainPanelTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#221C18',
    marginBottom: 8,
  },
  terrainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1D6FC0',
  },
  terrainCardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  terrainCardName: { fontSize: 15, fontWeight: '800', color: '#221C18', flexShrink: 1 },
  terrainReading: { fontSize: 11, fontWeight: '600', color: '#888' },
  terrainBadge: {
    backgroundColor: '#1D6FC0',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 6,
  },
  terrainBadgeMtn: { backgroundColor: '#7A5230' },
  terrainBadgeText: { fontSize: 12, fontWeight: '900', color: '#FFF' },
  terrainTag: { fontSize: 12, fontWeight: '700', color: '#D97706', marginBottom: 3 },
  terrainMeta: { fontSize: 12, color: '#555', marginBottom: 4, lineHeight: 18 },
  terrainNote: { fontSize: 13, color: '#333', lineHeight: 20 },
  triviaCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  triviaTitle: { fontSize: 14, fontWeight: '900', color: '#B45309', marginBottom: 6 },
  triviaIntro: { fontSize: 12, color: '#555', lineHeight: 19, marginBottom: 6 },
  triviaItem: { fontSize: 13, color: '#333', lineHeight: 22 },
  tapHint: {
    backgroundColor: '#F5EFE4',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  tapHintText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B4226',
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  modalHeader: {
    paddingTop: 52,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeaderTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  modalCloseBtn: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  modalCloseBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  layerRow2: {
    flexGrow: 0,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EBE4D8',
  },
  regionPress: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 2 },
  regionEmoji: { fontSize: 22 },
  regionName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    maxHeight: 480,
    borderWidth: 2,
    borderColor: '#6B4226',
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailTitle: { fontSize: 20, fontWeight: '900', color: '#221C18' },
  detailClose: { fontSize: 14, fontWeight: '700', color: '#6B4226' },
  detailSection: { marginBottom: 14 },
  detailSectionTitle: { fontSize: 16, fontWeight: '800', color: '#6B4226', marginBottom: 8 },
  detailItem: { fontSize: 14, color: '#333', lineHeight: 24 },
  spotlightSection: { marginBottom: 14 },
  spotlightHeader: { fontSize: 16, fontWeight: '800', color: '#D97706', marginBottom: 8 },
  spotlightCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  spotlightImage: { width: '100%', height: 150, borderRadius: 10, marginBottom: 8, backgroundColor: '#F5EFE4' },
  spotlightName: { fontSize: 16, fontWeight: '800', color: '#221C18', marginBottom: 4 },
  spotlightLocation: { fontSize: 13, color: '#666', marginBottom: 6 },
  spotlightWhy: { fontSize: 14, color: '#333', lineHeight: 22 },
  factoryBlock: {
    backgroundColor: '#FFF8EE',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#F39C12',
  },
  factoryName: { fontSize: 15, fontWeight: '800', color: '#221C18', marginBottom: 6 },
  factoryLabel: { fontSize: 12, fontWeight: '700', color: '#888' },
  factoryItem: { fontSize: 13, color: '#444', lineHeight: 20 },
  factoryHighlight: { fontSize: 13, color: '#B45309', fontWeight: '700', lineHeight: 22 },
  zoneScroll: { marginTop: 4 },
  zoneChip: {
    backgroundColor: '#F5EFE4',
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    width: 200,
  },
  zoneChipTitle: { fontSize: 13, fontWeight: '800', color: '#6B4226', marginBottom: 4 },
  zoneChipSub: { fontSize: 11, color: '#555', lineHeight: 16 },
  zoomRow: { flexDirection: 'row', gap: 6 },
  zoomBtn: {
    backgroundColor: '#6B4226',
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomBtnText: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  zoomBtnTextSmall: { color: '#FFF', fontSize: 11, fontWeight: '800' },
});
