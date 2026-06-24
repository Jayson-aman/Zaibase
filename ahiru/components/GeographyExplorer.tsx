import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  Modal,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  geographyRegions,
  industrialZoneSummary,
  sectorOverview,
  GeoRegion,
} from '../data/geographyRegions';
import { GeoLayerId } from '../constants/proAccess';

const MAP_W = Dimensions.get('window').width - 48;
const MAP_H = MAP_W * 0.72;

const LAYERS: { key: GeoLayerId; label: string; emoji: string }[] = [
  { key: 'terrain', label: '地形', emoji: '🏔' },
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
            {geographyRegions.map((region) => (
              <RegionBlock
                key={region.id}
                region={region}
                selected={selectedId === region.id}
                onPress={() => selectRegion(region)}
              />
            ))}
          </View>
        </Animated.View>
      </View>

      <View style={styles.tapHint}>
        <Text style={styles.tapHintText}>👆 地域をタップすると詳細情報が表示されます</Text>
      </View>

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

function RegionBlock({
  region,
  selected,
  onPress,
}: {
  region: GeoRegion;
  selected: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(selected ? 1.08 : 1, { damping: 12 });
  }, [selected, scale]);

  const blockStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    zIndex: selected ? 10 : 1,
  }));

  return (
    <Animated.View
      style={[
        styles.regionBlock,
        blockStyle,
        {
          left: `${region.mapX}%`,
          top: `${region.mapY}%`,
          width: `${region.mapW}%`,
          height: `${region.mapH}%`,
          backgroundColor: region.color,
          borderColor: selected ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
          borderWidth: selected ? 3 : 1.5,
        },
      ]}
    >
      <Pressable style={styles.regionPress} onPress={onPress}>
        <Text style={styles.regionEmoji}>{region.emoji}</Text>
        <Text style={styles.regionName} numberOfLines={1}>{region.name}</Text>
      </Pressable>
    </Animated.View>
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

      {layer === 'agriculture' && (
        <>
          <DetailSection title="🚜 農業の種類" items={ag.farmingTypes} />
          <DetailSection title="🌾 主要作物" items={ag.mainCrops} />
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
  title: { fontSize: 17, fontWeight: '800', color: '#1A1A2E' },
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
    backgroundColor: '#E8EEF8',
  },
  layerBtnActive: { backgroundColor: '#1E5FBE' },
  layerText: { fontSize: 11, fontWeight: '700', color: '#555' },
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
  tapHint: {
    backgroundColor: '#EEF4FF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C5D8F8',
  },
  tapHintText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E5FBE',
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#F5F7FA',
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
    borderBottomColor: '#E5EAF0',
  },
  regionPress: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 2 },
  regionEmoji: { fontSize: 16 },
  regionName: {
    fontSize: 9,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    maxHeight: 300,
    borderWidth: 2,
    borderColor: '#1E5FBE',
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailTitle: { fontSize: 18, fontWeight: '900', color: '#1A1A2E' },
  detailClose: { fontSize: 13, fontWeight: '700', color: '#1E5FBE' },
  detailSection: { marginBottom: 12 },
  detailSectionTitle: { fontSize: 14, fontWeight: '800', color: '#1E5FBE', marginBottom: 6 },
  detailItem: { fontSize: 13, color: '#333', lineHeight: 22 },
  factoryBlock: {
    backgroundColor: '#FFF8EE',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#F39C12',
  },
  factoryName: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 6 },
  factoryLabel: { fontSize: 12, fontWeight: '700', color: '#888' },
  factoryItem: { fontSize: 13, color: '#444', lineHeight: 20 },
  factoryHighlight: { fontSize: 13, color: '#B45309', fontWeight: '700', lineHeight: 22 },
  zoneScroll: { marginTop: 4 },
  zoneChip: {
    backgroundColor: '#EEF4FF',
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    width: 200,
  },
  zoneChipTitle: { fontSize: 13, fontWeight: '800', color: '#1E5FBE', marginBottom: 4 },
  zoneChipSub: { fontSize: 11, color: '#555', lineHeight: 16 },
  zoomRow: { flexDirection: 'row', gap: 6 },
  zoomBtn: {
    backgroundColor: '#1E5FBE',
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomBtnText: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  zoomBtnTextSmall: { color: '#FFF', fontSize: 11, fontWeight: '800' },
});
