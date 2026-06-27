import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import { speakWithOpenAI, speakWithDevice } from '../../services/tts';
import { ENTITLEMENT_VOCAB } from '../../constants/proAccess';
import { useSubscription } from '../../hooks/useSubscription';
import type { VocabEntry } from '../../data/vocab-meta';
import { vocabWords } from '../../data/vocab_words';

const { width: SCREEN_W } = Dimensions.get('window');

// ── ダークテーマ ─────────────────────────────────────────────
const D = {
  bg:          '#040C1C',
  card:        'rgba(255,255,255,0.06)',
  cardBorder:  'rgba(255,255,255,0.10)',
  gold:        '#C8A84B',
  goldDim:     'rgba(200,168,75,0.15)',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#EDF4FF',
  soft:        '#7FA8CC',
  muted:       '#3E5870',
  green:       '#4CAF50',
  blue:        '#4A90D9',
  red:         '#E74C3C',
};

const LEVEL_FILTER = ['全て', '中学基礎', '中学標準', '高校基礎', '高校標準', '受験重要'] as const;
const LEVEL_MAP: Record<string, string> = {
  '全て': 'all',
  '中学基礎': 'junior_basic',
  '中学標準': 'junior_std',
  '高校基礎': 'senior_basic',
  '高校標準': 'senior_std',
  '受験重要': 'entrance',
};

export default function VocabScreen() {
  const { tier, entitlements } = useSubscription();
  const hasVocabPro = entitlements?.includes(ENTITLEMENT_VOCAB) ?? false;

  const [levelFilter, setLevelFilter] = useState<string>('全て');
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const filtered = levelFilter === '全て'
    ? vocabWords
    : vocabWords.filter(w => w.level === LEVEL_MAP[levelFilter]);

  const card: VocabEntry | undefined = filtered[cardIndex];

  const handleFlip = useCallback(() => {
    Animated.spring(flipAnim, {
      toValue: flipped ? 0 : 1,
      useNativeDriver: true,
      friction: 8,
    }).start();
    setFlipped(f => !f);
  }, [flipped, flipAnim]);

  const handleSpeak = useCallback(async () => {
    if (!card) return;
    if (!hasVocabPro) {
      setShowPaywall(true);
      return;
    }
    setIsSpeaking(true);
    try {
      await speakWithOpenAI(card.word + '. ' + card.example);
    } finally {
      setIsSpeaking(false);
    }
  }, [card, hasVocabPro]);

  const handleFreeSpeak = useCallback(async () => {
    if (!card) return;
    setIsSpeaking(true);
    try {
      await speakWithDevice(card.word);
    } finally {
      setIsSpeaking(false);
    }
  }, [card]);

  const goNext = () => {
    setFlipped(false);
    flipAnim.setValue(0);
    setCardIndex(i => (i + 1) % filtered.length);
  };
  const goPrev = () => {
    setFlipped(false);
    flipAnim.setValue(0);
    setCardIndex(i => (i - 1 + filtered.length) % filtered.length);
  };

  const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate  = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  if (showPaywall) {
    return <VocabPaywall onClose={() => setShowPaywall(false)} />;
  }

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.title}>英単語・英熟語</Text>
        <Text style={s.sub}>LEAP準拠 1,000語収録</Text>

        {/* レベルフィルター */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filterRow}>
          {LEVEL_FILTER.map(lbl => (
            <TouchableOpacity
              key={lbl}
              style={[s.filterChip, levelFilter === lbl && s.filterChipActive]}
              onPress={() => { setLevelFilter(lbl); setCardIndex(0); setFlipped(false); flipAnim.setValue(0); }}
            >
              <Text style={[s.filterText, levelFilter === lbl && s.filterTextActive]}>{lbl}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 進捗 */}
        <Text style={s.progress}>{cardIndex + 1} / {filtered.length}</Text>

        {/* フラッシュカード */}
        {card ? (
          <TouchableOpacity activeOpacity={0.92} onPress={handleFlip} style={s.cardWrap}>
            {/* 表面 */}
            <Animated.View style={[s.card, s.cardFront, { transform: [{ rotateY: frontRotate }] }]}>
              <Text style={s.posTag}>{card.pos}  {card.isPhrase ? '熟語' : ''}</Text>
              <Text style={s.wordText}>{card.word}</Text>
              <Text style={s.pronText}>{card.pronunciation}</Text>
              <Text style={s.tapHint}>タップして意味を確認</Text>
              <View style={s.speakRow}>
                <TouchableOpacity style={s.speakBtn} onPress={handleFreeSpeak}>
                  <Text style={s.speakBtnText}>🔈 読む（無料）</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[s.speakBtn, s.speakBtnPro]}
                  onPress={handleSpeak}
                  disabled={isSpeaking}
                >
                  <Text style={s.speakBtnTextPro}>
                    {isSpeaking ? '再生中...' : '🔊 ネイティブ'}
                    {!hasVocabPro && ' 🔒'}
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* 裏面 */}
            <Animated.View style={[s.card, s.cardBack, { transform: [{ rotateY: backRotate }] }]}>
              <Text style={s.meaningLabel}>意味</Text>
              <Text style={s.meaningText}>{card.meaning}</Text>
              {card.meanings && card.meanings.length > 1 && (
                <Text style={s.meanings}>{card.meanings.join('　/　')}</Text>
              )}
              <View style={s.exampleBox}>
                <Text style={s.exampleEn}>{card.example}</Text>
                <Text style={s.exampleJa}>{card.exampleJa}</Text>
              </View>
              <Text style={s.categoryTag}>#{card.category}  #{card.level}</Text>
            </Animated.View>
          </TouchableOpacity>
        ) : (
          <View style={s.emptyCard}>
            <Text style={s.emptyText}>該当する単語がありません</Text>
          </View>
        )}

        {/* ナビゲーション */}
        <View style={s.navRow}>
          <TouchableOpacity style={s.navBtn} onPress={goPrev}>
            <Text style={s.navBtnText}>← 前</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.navBtn, s.navBtnNext]} onPress={goNext}>
            <Text style={[s.navBtnText, s.navBtnTextNext]}>次 →</Text>
          </TouchableOpacity>
        </View>

        {/* 英単語Pro誘導バナー */}
        {!hasVocabPro && (
          <TouchableOpacity style={s.promoBanner} onPress={() => setShowPaywall(true)}>
            <Text style={s.promoText}>🔊 英単語Pro — ネイティブ発音・例文詳細　¥480/月</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── 英単語専用 Paywall ────────────────────────────────────────
function VocabPaywall({ onClose }: { onClose: () => void }) {
  const handlePurchase = async () => {
    // TODO: RevenueCat で ENTITLEMENT_VOCAB 購入フロー
    // 現在はプレースホルダー
    alert('購入フロー準備中です。\n英単語Pro: ¥480/月\nネイティブ発音（OpenAI TTS HD）が使い放題になります。');
  };

  return (
    <SafeAreaView style={[s.safe, { justifyContent: 'center' }]}>
      <View style={s.paywallCard}>
        <Text style={s.paywallEmoji}>🔊</Text>
        <Text style={s.paywallTitle}>英単語 Pro</Text>
        <Text style={s.paywallSub}>ネイティブ発音で効率的に覚える</Text>

        {[
          '🔊 ネイティブ発音（OpenAI TTS HD・高音質）',
          '📖 全1,000語+の例文と詳細解説',
          '📊 学習進捗トラッキング',
          '🔁 スペリング練習モード',
        ].map(f => (
          <View key={f} style={s.featureRow}>
            <Text style={s.featureText}>{f}</Text>
          </View>
        ))}

        <TouchableOpacity style={s.purchaseBtn} onPress={handlePurchase}>
          <Text style={s.purchaseBtnText}>¥480/月　で始める</Text>
        </TouchableOpacity>
        <Text style={s.paywallNote}>いつでもキャンセル可能</Text>
        <TouchableOpacity onPress={onClose} style={s.closeBtn}>
          <Text style={s.closeBtnText}>閉じる</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ── スタイル ─────────────────────────────────────────────────
const glassWeb: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
  : {};

const s = StyleSheet.create({
  safe:              { flex: 1, backgroundColor: D.bg },
  scroll:            { padding: 16, paddingBottom: 40 },
  title:             { fontSize: 22, fontWeight: '700', color: D.gold, textAlign: 'center', marginTop: 8 },
  sub:               { fontSize: 13, color: D.muted, textAlign: 'center', marginBottom: 12 },
  filterRow:         { flexGrow: 0, marginBottom: 12 },
  filterChip:        { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, marginRight: 8 },
  filterChipActive:  { backgroundColor: D.goldDim, borderColor: D.gold },
  filterText:        { fontSize: 12, color: D.muted },
  filterTextActive:  { color: D.gold, fontWeight: '700' },
  progress:          { textAlign: 'center', color: D.muted, fontSize: 12, marginBottom: 10 },
  cardWrap:          { width: '100%', maxWidth: 480, alignSelf: 'center', height: 320, marginBottom: 16 },
  card:              { position: 'absolute', width: '100%', height: '100%', borderRadius: 18, padding: 24, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, justifyContent: 'center', backfaceVisibility: 'hidden', ...glassWeb },
  cardFront:         {},
  cardBack:          { backgroundColor: 'rgba(74,144,217,0.08)' },
  posTag:            { fontSize: 12, color: D.muted, marginBottom: 4 },
  wordText:          { fontSize: 40, fontWeight: '800', color: D.white, marginBottom: 4 },
  pronText:          { fontSize: 16, color: D.soft, marginBottom: 12 },
  tapHint:           { fontSize: 12, color: D.muted, marginBottom: 16 },
  speakRow:          { flexDirection: 'row', gap: 10 },
  speakBtn:          { flex: 1, paddingVertical: 8, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  speakBtnPro:       { backgroundColor: D.goldDim, borderColor: D.gold },
  speakBtnText:      { fontSize: 13, color: D.soft },
  speakBtnTextPro:   { fontSize: 13, color: D.gold, fontWeight: '700' },
  meaningLabel:      { fontSize: 12, color: D.muted, marginBottom: 4 },
  meaningText:       { fontSize: 28, fontWeight: '700', color: D.white, marginBottom: 4 },
  meanings:          { fontSize: 14, color: D.soft, marginBottom: 12 },
  exampleBox:        { backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: 12, marginBottom: 8 },
  exampleEn:         { fontSize: 14, color: D.white, marginBottom: 4, lineHeight: 20 },
  exampleJa:         { fontSize: 12, color: D.soft, lineHeight: 18 },
  categoryTag:       { fontSize: 11, color: D.muted },
  emptyCard:         { height: 200, alignItems: 'center', justifyContent: 'center' },
  emptyText:         { color: D.muted, fontSize: 16 },
  navRow:            { flexDirection: 'row', gap: 12, marginBottom: 16, maxWidth: 480, alignSelf: 'center', width: '100%' },
  navBtn:            { flex: 1, paddingVertical: 14, borderRadius: 12, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  navBtnNext:        { backgroundColor: D.goldDim, borderColor: D.gold },
  navBtnText:        { fontSize: 15, color: D.soft, fontWeight: '600' },
  navBtnTextNext:    { color: D.gold },
  promoBanner:       { backgroundColor: D.goldDim, borderWidth: 1, borderColor: D.gold, borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 4 },
  promoText:         { fontSize: 14, color: D.gold, fontWeight: '700', textAlign: 'center' },
  paywallCard:       { margin: 20, backgroundColor: D.card, borderRadius: 20, borderWidth: 1, borderColor: D.goldBorder, padding: 28, alignItems: 'center', ...glassWeb },
  paywallEmoji:      { fontSize: 48, marginBottom: 12 },
  paywallTitle:      { fontSize: 26, fontWeight: '800', color: D.gold, marginBottom: 6 },
  paywallSub:        { fontSize: 14, color: D.soft, marginBottom: 20, textAlign: 'center' },
  featureRow:        { alignSelf: 'stretch', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)' },
  featureText:       { fontSize: 14, color: D.white },
  purchaseBtn:       { marginTop: 24, backgroundColor: D.gold, borderRadius: 14, paddingVertical: 16, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
  purchaseBtnText:   { fontSize: 18, fontWeight: '800', color: '#040C1C' },
  paywallNote:       { fontSize: 12, color: D.muted, marginTop: 10 },
  closeBtn:          { marginTop: 16, padding: 10 },
  closeBtnText:      { fontSize: 14, color: D.muted },
});
