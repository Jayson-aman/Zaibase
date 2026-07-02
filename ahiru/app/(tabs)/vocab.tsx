import React, { useState, useCallback, useRef, useEffect } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import { speakWithOpenAI, speakWithDevice } from '../../services/tts';
import { useVocabSubscription } from '../../hooks/useVocabSubscription';
import { fetchVocabProducts, purchaseProduct, restorePurchases } from '../../services/subscription';
import type { VocabEntry } from '../../data/vocab-meta';
import { vocabWords } from '../../data/vocab_words';

const { width: SCREEN_W } = Dimensions.get('window');

const D = {
  bg:           '#040C1C',
  card:         'rgba(255,255,255,0.06)',
  cardBorder:   'rgba(255,255,255,0.10)',
  gold:         '#C8A84B',
  goldDim:      'rgba(200,168,75,0.15)',
  goldBorder:   'rgba(200,168,75,0.35)',
  white:        '#EDF4FF',
  soft:         '#7FA8CC',
  muted:        '#3E5870',
  blue:         '#4A90D9',
  teal:         'rgba(74,200,180,0.12)',
  tealBorder:   'rgba(74,200,180,0.35)',
  tealText:     '#2EC4B6',
  pinkBorder:   '#F9A8C9',
  purpleBorder: 'rgba(160,100,220,0.35)',
  purpleText:   '#A064DC',
};

const LEVEL_FILTER = ['全て', '中学基礎', '中学標準', '高校基礎', '高校標準', '受験重要'] as const;
const LEVEL_MAP: Record<string, string> = {
  '全て': 'all', '中学基礎': 'junior_basic', '中学標準': 'junior_std',
  '高校基礎': 'senior_basic', '高校標準': 'senior_std', '受験重要': 'entrance',
};
const TYPE_FILTER = ['全て', '単語', '熟語'] as const;
const LISTEN_INTERVAL_MS = 4500;

export default function VocabScreen() {
  const { hasVocab } = useVocabSubscription();
  const hasVocabPro = hasVocab;

  const [levelFilter, setLevelFilter] = useState<string>('全て');
  const [typeFilter,  setTypeFilter]  = useState<string>('全て');
  const [cardIndex,   setCardIndex]   = useState(0);
  const [flipped,     setFlipped]     = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isSpeaking,  setIsSpeaking]  = useState(false);
  const [isListening, setIsListening] = useState(false);

  const flipAnim    = useRef(new Animated.Value(0)).current;
  const listenTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered = vocabWords.filter(w => {
    const levelOk = levelFilter === '全て' || w.level === LEVEL_MAP[levelFilter];
    const typeOk  = typeFilter  === '全て'
      || (typeFilter === '単語' && !w.isPhrase)
      || (typeFilter === '熟語' &&  w.isPhrase);
    return levelOk && typeOk;
  });

  const card: VocabEntry | undefined = filtered[cardIndex];

  // 聞き流し自動送り
  useEffect(() => {
    if (!isListening) {
      if (listenTimer.current) clearInterval(listenTimer.current);
      return;
    }
    const speak = async () => {
      if (!card) return;
      try {
        if (hasVocabPro) {
          const pron = card.ipa ?? card.pronunciation;
          await speakWithOpenAI(`${card.word}. ${pron}. ${card.meaning}`);
        } else {
          await speakWithDevice(card.word);
        }
      } catch (_) {}
    };
    speak();
    listenTimer.current = setInterval(() => {
      setFlipped(false);
      flipAnim.setValue(0);
      setCardIndex(i => (i + 1) % filtered.length);
    }, LISTEN_INTERVAL_MS);
    return () => { if (listenTimer.current) clearInterval(listenTimer.current); };
  }, [isListening, cardIndex, filtered.length, hasVocabPro]);

  const handleFlip = useCallback(() => {
    Animated.spring(flipAnim, { toValue: flipped ? 0 : 1, useNativeDriver: true, friction: 8 }).start();
    setFlipped(f => !f);
  }, [flipped, flipAnim]);

  const handleSpeak = useCallback(async () => {
    if (!card) return;
    if (!hasVocabPro) { setShowPaywall(true); return; }
    setIsSpeaking(true);
    try {
      const pron = card.ipa ?? card.pronunciation;
      await speakWithOpenAI(`${card.word}. ${pron}. ${card.example}`);
    }
    finally { setIsSpeaking(false); }
  }, [card, hasVocabPro]);

  const handleFreeSpeak = useCallback(async () => {
    if (!card) return;
    setIsSpeaking(true);
    try { await speakWithDevice(card.word); }
    finally { setIsSpeaking(false); }
  }, [card]);

  const resetCard = () => { setFlipped(false); flipAnim.setValue(0); };
  const goNext = () => { resetCard(); setCardIndex(i => (i + 1) % filtered.length); };
  const goPrev = () => { resetCard(); setCardIndex(i => (i - 1 + filtered.length) % filtered.length); };
  const changeFilter = (lv: string, tp: string) => { setLevelFilter(lv); setTypeFilter(tp); setCardIndex(0); resetCard(); };

  const frontRotate = flipAnim.interpolate({ inputRange: [0,1], outputRange: ['0deg','180deg'] });
  const backRotate  = flipAnim.interpolate({ inputRange: [0,1], outputRange: ['180deg','360deg'] });

  if (showPaywall) {
    return (
      <VocabPaywall
        onClose={() => setShowPaywall(false)}
        onPurchased={() => setShowPaywall(false)}
      />
    );
  }

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.title}>英単語・英熟語</Text>
        <Text style={s.sub}>LEAP準拠 2,000語 ＋ 2,000熟語収録</Text>

        {/* レベルフィルター */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filterRow}>
          {LEVEL_FILTER.map(lbl => (
            <TouchableOpacity key={lbl} style={[s.filterChip, levelFilter === lbl && s.filterChipActive]}
              onPress={() => changeFilter(lbl, typeFilter)}>
              <Text style={[s.filterText, levelFilter === lbl && s.filterTextActive]}>{lbl}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 単語／熟語切替 */}
        <View style={s.typeRow}>
          {TYPE_FILTER.map(t => (
            <TouchableOpacity key={t} style={[s.typeChip, typeFilter === t && s.typeChipActive]}
              onPress={() => changeFilter(levelFilter, t)}>
              <Text style={[s.typeText, typeFilter === t && s.typeTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={s.progress}>{cardIndex + 1} / {filtered.length}</Text>

        {card ? (
          <TouchableOpacity activeOpacity={0.92} onPress={handleFlip} style={s.cardWrap}>
            {/* 表面 */}
            <Animated.View style={[s.card, s.cardFront, { transform: [{ rotateY: frontRotate }] }]}>
              <View style={s.badgeRow}>
                <View style={s.idBadge}><Text style={s.idBadgeText}>No.{card.id.replace(/[a-z]/gi,'').padStart(4,'0')}</Text></View>
                <View style={s.posBadge}><Text style={s.posBadgeText}>{card.pos}</Text></View>
                {card.isPhrase && <View style={s.phraseBadge}><Text style={s.phraseBadgeText}>熟語</Text></View>}
              </View>

              <Text style={s.wordText}>{card.word}</Text>

              <View style={s.pronRow}>
                {card.ipa ? <Text style={s.ipaText}>{card.ipa}</Text> : null}
                <Text style={s.pronText}>{card.pronunciation}</Text>
              </View>

              {card.memoryHook ? (
                <View style={s.memoryBox}>
                  <Text style={s.memoryLabel}>💡 覚え方ダブル</Text>
                  <Text style={s.memoryText}>{card.memoryHook}</Text>
                </View>
              ) : null}

              <Text style={s.tapHint}>タップして意味を確認 👆</Text>

              <View style={s.speakRow}>
                <TouchableOpacity style={s.speakBtn} onPress={handleFreeSpeak}>
                  <Text style={s.speakBtnText}>🔈 読む（無料）</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[s.speakBtn, s.speakBtnPro]} onPress={handleSpeak} disabled={isSpeaking}>
                  <Text style={s.speakBtnTextPro}>
                    {isSpeaking ? '再生中...' : '🔊 ネイティブ'}{!hasVocabPro ? ' 🔒' : ''}
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* 裏面 */}
            <Animated.View style={[s.card, s.cardBack, { transform: [{ rotateY: backRotate }] }]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={s.meaningLabel}>意　味</Text>

                {card.meanings && card.meanings.length > 1 ? (
                  card.meanings.map((m, i) => (
                    <Text key={i} style={s.meaningItem}>
                      <Text style={s.meaningNum}>{'①②③④⑤'[i] ?? `${i+1}.`}</Text>{'  '}{m}
                    </Text>
                  ))
                ) : (
                  <Text style={s.meaningText}>{card.meaning}</Text>
                )}

                <View style={s.exampleBox}>
                  <Text style={s.exampleLabel}>例　文</Text>
                  <Text style={s.exampleEn}>{card.example}</Text>
                  <Text style={s.exampleJa}>{card.exampleJa}</Text>
                  {card.example2 ? <>
                    <Text style={[s.exampleEn, {marginTop: 8}]}>{card.example2}</Text>
                    <Text style={s.exampleJa}>{card.example2Ja}</Text>
                  </> : null}
                </View>

                {card.keyPoint ? (
                  <View style={s.keyBox}>
                    <Text style={s.keyLabel}>📌 ここが大切</Text>
                    <Text style={s.keyText}>{card.keyPoint}</Text>
                  </View>
                ) : null}

                {card.setNote ? (
                  <View style={s.setBox}>
                    <Text style={s.setLabel}>🔗 セットで暗記</Text>
                    <Text style={s.setText}>{card.setNote}</Text>
                  </View>
                ) : null}

                <Text style={s.categoryTag}>#{card.category}  #{card.level}</Text>
              </ScrollView>
            </Animated.View>
          </TouchableOpacity>
        ) : (
          <View style={s.emptyCard}><Text style={s.emptyText}>該当する単語がありません</Text></View>
        )}

        {/* ナビ ＋ 聞き流し */}
        <View style={s.navRow}>
          <TouchableOpacity style={s.navBtn} onPress={goPrev}>
            <Text style={s.navBtnText}>← 前</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.listenBtn, isListening && s.listenBtnActive]}
            onPress={() => {
              if (!hasVocabPro) { setShowPaywall(true); return; }
              setIsListening(l => !l);
            }}
          >
            <Text style={[s.listenBtnText, isListening && s.listenBtnTextActive]}>
              {isListening ? '⏹ 停止' : '▶ 聞き流し'}{!hasVocabPro ? ' 🔒' : ''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.navBtn, s.navBtnNext]} onPress={goNext}>
            <Text style={[s.navBtnText, s.navBtnTextNext]}>次 →</Text>
          </TouchableOpacity>
        </View>

        {!hasVocabPro && (
          <TouchableOpacity style={s.promoBanner} onPress={() => setShowPaywall(true)}>
            <Text style={s.promoText}>🔊 英単語Pro — ネイティブ発音・聞き流し・全4,000語　¥1,000/月〜</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Paywall ─────────────────────────────────────────
function VocabPaywall({ onClose, onPurchased }: { onClose: () => void; onPurchased: () => void }) {
  const [monthlyProd, setMonthlyProd] = useState<unknown>(null);
  const [yearlyProd,  setYearlyProd]  = useState<unknown>(null);
  const [loadingProd, setLoadingProd] = useState(true);
  const [purchasing,  setPurchasing]  = useState(false);

  useEffect(() => {
    setLoadingProd(true);
    fetchVocabProducts()
      .then(({ monthly, yearly }) => {
        setMonthlyProd(monthly);
        setYearlyProd(yearly);
      })
      .catch(() => {})
      .finally(() => setLoadingProd(false));
  }, []);

  async function handlePurchase(product: unknown) {
    if (!product) return;
    setPurchasing(true);
    try {
      await purchaseProduct(product);
      onPurchased();
    } catch (err: any) {
      if (!err?.userCancelled) {
        alert('購入エラー。もう一度お試しください。');
      }
    } finally {
      setPurchasing(false);
    }
  }

  async function handleRestore() {
    setPurchasing(true);
    try {
      await restorePurchases();
      onPurchased();
    } catch {
      alert('購入の復元に失敗しました。');
    } finally {
      setPurchasing(false);
    }
  }

  const monthlyPrice = (monthlyProd as any)?.priceString ?? '¥1,000/月';
  const yearlyPrice  = (yearlyProd as any)?.priceString ?? '¥4,000/年';

  return (
    <SafeAreaView style={[s.safe, { justifyContent: 'center' }]}>
      <View style={s.paywallCard}>
        <Text style={s.paywallEmoji}>🔊</Text>
        <Text style={s.paywallTitle}>英単語 Pro</Text>
        <Text style={s.paywallSub}>ネイティブ発音 ＋ 聞き流しで効率UP</Text>

        {[
          '🔊 ネイティブ発音（OpenAI TTS HD・高音質）',
          '▶ 聞き流しモード（自動ページ送り）',
          '📖 全2,000語 ＋ 2,000熟語',
          '📌 ここが大切・セットで暗記・覚え方ダブル',
          '📊 学習進捗トラッキング',
        ].map(f => (
          <View key={f} style={s.featureRow}>
            <Text style={s.featureText}>{f}</Text>
          </View>
        ))}

        {loadingProd ? (
          <ActivityIndicator color={D.gold} style={{ marginTop: 24 }} />
        ) : (
          <>
            <TouchableOpacity
              style={[s.purchaseBtn, (!yearlyProd || purchasing) && s.purchaseBtnDisabled]}
              onPress={() => handlePurchase(yearlyProd)}
              disabled={!yearlyProd || purchasing}
            >
              <Text style={s.purchaseBtnText}>
                {purchasing ? '処理中...' : `${yearlyPrice}　で始める（お得）`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.purchaseBtnOutline, (!monthlyProd || purchasing) && s.purchaseBtnDisabled]}
              onPress={() => handlePurchase(monthlyProd)}
              disabled={!monthlyProd || purchasing}
            >
              <Text style={s.purchaseBtnOutlineText}>{monthlyPrice}　で始める</Text>
            </TouchableOpacity>
          </>
        )}

        <Text style={s.paywallNote}>いつでもキャンセル可能</Text>
        <TouchableOpacity onPress={handleRestore} disabled={purchasing}>
          <Text style={s.restoreText}>購入を復元する</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={s.closeBtn}>
          <Text style={s.closeBtnText}>閉じる</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const glassWeb: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
  : {};

const s = StyleSheet.create({
  safe:              { flex: 1, backgroundColor: D.bg },
  scroll:            { padding: 16, paddingBottom: 40 },
  title:             { fontSize: 24, fontWeight: '800', color: D.gold, textAlign: 'center', marginTop: 8 },
  sub:               { fontSize: 12, color: D.muted, textAlign: 'center', marginBottom: 12 },
  filterRow:         { flexGrow: 0, marginBottom: 8 },
  filterChip:        { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, marginRight: 8 },
  filterChipActive:  { backgroundColor: D.goldDim, borderColor: D.gold },
  filterText:        { fontSize: 12, color: D.muted },
  filterTextActive:  { color: D.gold, fontWeight: '700' },
  typeRow:           { flexDirection: 'row', gap: 8, marginBottom: 12 },
  typeChip:          { flex: 1, paddingVertical: 7, borderRadius: 14, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  typeChipActive:    { backgroundColor: 'rgba(74,144,217,0.18)', borderColor: D.blue },
  typeText:          { fontSize: 13, color: D.muted },
  typeTextActive:    { color: D.blue, fontWeight: '700' },
  progress:          { textAlign: 'center', color: D.muted, fontSize: 12, marginBottom: 10 },
  cardWrap:          { width: '100%', maxWidth: 480, alignSelf: 'center', height: 460, marginBottom: 16 },
  card:              { position: 'absolute', width: '100%', height: '100%', borderRadius: 18, padding: 20, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, backfaceVisibility: 'hidden', ...glassWeb },
  cardFront:         {},
  cardBack:          { backgroundColor: 'rgba(74,144,217,0.06)' },
  badgeRow:          { flexDirection: 'row', gap: 6, marginBottom: 10 },
  idBadge:           { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  idBadgeText:       { fontSize: 10, color: D.muted },
  posBadge:          { backgroundColor: 'rgba(200,168,75,0.18)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  posBadgeText:      { fontSize: 11, color: D.gold, fontWeight: '700' },
  phraseBadge:       { backgroundColor: 'rgba(74,200,180,0.15)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  phraseBadgeText:   { fontSize: 11, color: D.tealText, fontWeight: '700' },
  wordText:          { fontSize: 38, fontWeight: '800', color: D.white, marginBottom: 4 },
  pronRow:           { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  ipaText:           { fontSize: 15, color: D.soft, fontStyle: 'italic' },
  pronText:          { fontSize: 15, color: D.gold },
  memoryBox:         { backgroundColor: 'rgba(160,100,220,0.10)', borderRadius: 10, padding: 10, marginBottom: 10, borderLeftWidth: 3, borderLeftColor: D.purpleBorder },
  memoryLabel:       { fontSize: 11, color: D.purpleText, fontWeight: '700', marginBottom: 4 },
  memoryText:        { fontSize: 13, color: '#C8AAEE', lineHeight: 18 },
  tapHint:           { fontSize: 12, color: D.muted, marginBottom: 12 },
  speakRow:          { flexDirection: 'row', gap: 10 },
  speakBtn:          { flex: 1, paddingVertical: 8, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.06)', borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  speakBtnPro:       { backgroundColor: D.goldDim, borderColor: D.gold },
  speakBtnText:      { fontSize: 13, color: D.soft },
  speakBtnTextPro:   { fontSize: 13, color: D.gold, fontWeight: '700' },
  meaningLabel:      { fontSize: 11, color: D.muted, letterSpacing: 3, marginBottom: 8 },
  meaningItem:       { fontSize: 20, color: D.white, fontWeight: '700', marginBottom: 6, lineHeight: 28 },
  meaningNum:        { color: D.gold, fontWeight: '900' },
  meaningText:       { fontSize: 24, fontWeight: '700', color: D.white, marginBottom: 10 },
  exampleBox:        { backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: 12, marginBottom: 10, borderLeftWidth: 2, borderLeftColor: D.blue },
  exampleLabel:      { fontSize: 10, color: D.soft, fontWeight: '700', marginBottom: 6, letterSpacing: 2 },
  exampleEn:         { fontSize: 14, color: D.white, marginBottom: 2, lineHeight: 20 },
  exampleJa:         { fontSize: 12, color: D.soft, lineHeight: 18 },
  keyBox:            { backgroundColor: 'rgba(249,168,201,0.10)', borderRadius: 10, padding: 10, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: D.pinkBorder },
  keyLabel:          { fontSize: 11, color: '#F9A8C9', fontWeight: '800', marginBottom: 4 },
  keyText:           { fontSize: 13, color: '#FFCCE0', lineHeight: 20 },
  setBox:            { backgroundColor: D.teal, borderRadius: 10, padding: 10, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: D.tealBorder },
  setLabel:          { fontSize: 11, color: D.tealText, fontWeight: '800', marginBottom: 4 },
  setText:           { fontSize: 13, color: '#A0EEE8', lineHeight: 20 },
  categoryTag:       { fontSize: 11, color: D.muted, marginTop: 6 },
  emptyCard:         { height: 200, alignItems: 'center', justifyContent: 'center' },
  emptyText:         { color: D.muted, fontSize: 16 },
  navRow:            { flexDirection: 'row', gap: 8, marginBottom: 16, maxWidth: 480, alignSelf: 'center', width: '100%' },
  navBtn:            { flex: 1, paddingVertical: 14, borderRadius: 12, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  navBtnNext:        { backgroundColor: D.goldDim, borderColor: D.gold },
  navBtnText:        { fontSize: 14, color: D.soft, fontWeight: '600' },
  navBtnTextNext:    { color: D.gold },
  listenBtn:         { flex: 1.4, paddingVertical: 14, borderRadius: 12, backgroundColor: 'rgba(74,200,180,0.12)', borderWidth: 1, borderColor: D.tealBorder, alignItems: 'center' },
  listenBtnActive:   { backgroundColor: 'rgba(74,200,180,0.28)', borderColor: D.tealText },
  listenBtnText:     { fontSize: 13, color: D.tealText, fontWeight: '700' },
  listenBtnTextActive: { color: '#2EC4B6' },
  promoBanner:       { backgroundColor: D.goldDim, borderWidth: 1, borderColor: D.gold, borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 4 },
  promoText:         { fontSize: 13, color: D.gold, fontWeight: '700', textAlign: 'center' },
  paywallCard:       { margin: 20, backgroundColor: D.card, borderRadius: 20, borderWidth: 1, borderColor: D.goldBorder, padding: 28, alignItems: 'center', ...glassWeb },
  paywallEmoji:      { fontSize: 48, marginBottom: 12 },
  paywallTitle:      { fontSize: 28, fontWeight: '800', color: D.gold, marginBottom: 6 },
  paywallSub:        { fontSize: 14, color: D.soft, marginBottom: 20, textAlign: 'center' },
  featureRow:        { alignSelf: 'stretch', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)' },
  featureText:       { fontSize: 14, color: D.white },
  purchaseBtn:       { marginTop: 24, backgroundColor: D.gold, borderRadius: 14, paddingVertical: 16, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
  purchaseBtnText:   { fontSize: 20, fontWeight: '800', color: '#040C1C' },
  purchaseBtnOutline: { marginTop: 10, backgroundColor: 'transparent', borderRadius: 14, borderWidth: 1, borderColor: D.goldBorder, paddingVertical: 14, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
  purchaseBtnOutlineText: { fontSize: 16, fontWeight: '700', color: D.gold },
  purchaseBtnDisabled: { opacity: 0.5 },
  restoreText:       { fontSize: 13, color: D.muted, marginTop: 14, textAlign: 'center', textDecorationLine: 'underline' },
  paywallNote:       { fontSize: 11, color: D.muted, marginTop: 10, textAlign: 'center' },
  closeBtn:          { marginTop: 16, padding: 10 },
  closeBtnText:      { fontSize: 14, color: D.muted },
});
