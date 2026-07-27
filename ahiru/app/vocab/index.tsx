import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
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
import { useRouter } from 'expo-router';
import { useAuthUser } from '../../hooks/useAuthUser';
import { speakWithOpenAI, speakWithDevice, stopSpeaking } from '../../services/tts';
import { useVocabSubscription } from '../../hooks/useVocabSubscription';
import { useSubscription } from '../../hooks/useSubscription';
import {
  fetchVocabProducts,
  purchaseProduct,
  restorePurchases,
  tierFromCustomerInfo,
  hasVocabEntitlement,
} from '../../services/subscription';
import { VOCAB_MONTHLY_LABEL, VOCAB_YEARLY_LABEL } from '../../constants/pricing';
import type { VocabEntry, VocabLevel } from '../../data/vocab-meta';
import { levelColor, levelLabel } from '../../data/vocab-meta';
import { vocabWords } from '../../data/vocab_words';
import { vocabUsageNotes } from '../../data/vocab-usage-notes';
import { useFonts, BIZUDGothic_400Regular, BIZUDGothic_700Bold } from '@expo-google-fonts/biz-udgothic';

// 教科書体に近い、可読性重視のUD（ユニバーサルデザイン）フォント
const TEXTBOOK_REGULAR = 'BIZUDGothic_400Regular';
const TEXTBOOK_BOLD = 'BIZUDGothic_700Bold';

const { width: SCREEN_W } = Dimensions.get('window');

// 白基調（ミニマル幾何）パレット。キー名は据え置き、値だけライトに反転。
// white = 主要テキスト（ink）、soft/muted = 補助テキスト、card = 白カード。
const D = {
  bg:           '#F7F8FB',
  card:         '#FFFFFF',
  cardBorder:   '#CBD2DE',
  gold:         '#A9821E',
  goldDim:      'rgba(169,130,30,0.10)',
  goldBorder:   'rgba(169,130,30,0.40)',
  white:        '#0F1826',
  soft:         '#4A5A6B',
  muted:        '#8695AB',
  blue:         '#2B4ACB',
  teal:         'rgba(11,166,120,0.10)',
  tealBorder:   'rgba(11,166,120,0.40)',
  tealText:     '#0B8A5E',
  pinkBorder:   '#E06A93',
  purpleBorder: 'rgba(112,72,224,0.35)',
  purpleText:   '#6A3FD0',
};

const LEVEL_FILTER = [
  '全て', '中学基礎', '中学標準', '高校基礎', '高校標準', '受験重要',
  '英検準2級', '英検2級', '英検1級', 'TOEIC800',
] as const;
const LEVEL_MAP: Record<string, string> = {
  '全て': 'all', '中学基礎': 'junior_basic', '中学標準': 'junior_std',
  '高校基礎': 'senior_basic', '高校標準': 'senior_std', '受験重要': 'entrance',
  '英検準2級': 'eiken_pre2', '英検2級': 'eiken_2', '英検1級': 'eiken_1', 'TOEIC800': 'toeic_800',
};
const TYPE_FILTER = ['全て', '単語', '熟語', '英会話'] as const;
const LISTEN_INTERVAL_MS = 4500;

// 無料で試せる単語数。英検対策と同じ「一部無料・続きは加入」方式に合わせる。
// 全部無料だと、英単語Proの目玉として宣伝している内容が実際には無料で
// 読めてしまい、宣伝と実態が食い違う。
const FREE_WORD_LIMIT = 50;

export default function VocabScreen() {
  const router = useRouter();
  const { hasVocab } = useVocabSubscription();
  const { isMax } = useSubscription();
  // 英単語Pro（vocab）加入者、または全部入りのMax会員に開放。
  const hasVocabPro = hasVocab || isMax;
  const [fontsLoaded] = useFonts({ BIZUDGothic_400Regular, BIZUDGothic_700Bold });

  const [levelFilter, setLevelFilter] = useState<string>('全て');
  const [typeFilter,  setTypeFilter]  = useState<string>('全て');
  const [cardIndex,   setCardIndex]   = useState(0);
  const [flipped,     setFlipped]     = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isSpeaking,  setIsSpeaking]  = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [shuffleKey,  setShuffleKey]  = useState(0);

  const flipAnim    = useRef(new Animated.Value(0)).current;
  const listenTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // フィルターに合う単語（並べ替え前の安定した順序）。
  // 無料枠はこの安定順の先頭から取るため、シャッフルしても中身が変わらない。
  const filtered = useMemo(() => {
    return vocabWords.filter(w => {
      const levelOk = levelFilter === '全て' || w.level === LEVEL_MAP[levelFilter];
      const typeOk  = typeFilter  === '全て'
        || (typeFilter === '単語' && !w.isPhrase && w.category !== 'conversation')
        || (typeFilter === '熟語' &&  w.isPhrase && w.category !== 'conversation')
        || (typeFilter === '英会話' && w.category === 'conversation');
      return levelOk && typeOk;
    });
  }, [levelFilter, typeFilter]);

  // 表示対象。未加入は「安定順の先頭 FREE_WORD_LIMIT 語」に限定してから並べ替える。
  //
  // ⚠️ 先にシャッフルしてから slice すると、シャッフルのたびに違う50語が出てきて
  //    無料のまま全語を読めてしまう（＝有料の意味が無くなる）。必ず
  //    「絞り込み → 無料分を切り出す → その中だけ並べ替える」の順にすること。
  const visible = useMemo(() => {
    const pool = hasVocabPro ? filtered : filtered.slice(0, FREE_WORD_LIMIT);
    // Fisher-Yates シャッフル（偏りのない並べ替え）
    const a = [...pool];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    // shuffleKey が変わるたびに並べ替え直す（無料枠の中身自体は変わらない）
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered, hasVocabPro, shuffleKey]);

  // 加入状態が切れるなどで表示件数が減ったとき、位置が範囲外のままだと
  // 「3001 / 50」のような表示になり中身も出なくなるため、先頭に戻す。
  useEffect(() => {
    if (cardIndex >= visible.length) setCardIndex(0);
  }, [visible.length, cardIndex]);

  const card: VocabEntry | undefined = visible[cardIndex];

  // 用法・差がつきノート：カード自身に無ければ共通ノートで補う
  const usage = card ? vocabUsageNotes[card.word.toLowerCase()] : undefined;
  const kpNote = card?.keyPoint ?? usage?.keyPoint;
  const snNote = card?.setNote ?? usage?.setNote;

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
      setCardIndex(i => (visible.length > 0 ? (i + 1) % visible.length : 0));
    }, LISTEN_INTERVAL_MS);
    return () => {
      if (listenTimer.current) clearInterval(listenTimer.current);
      // 再生中の音声も止める。止めないとホームに戻っても読み上げが続く。
      stopSpeaking().catch(() => {});
    };
  }, [isListening, cardIndex, visible.length, hasVocabPro]);

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
  const goNext = () => { resetCard(); setCardIndex(i => (visible.length > 0 ? (i + 1) % visible.length : 0)); };
  const goPrev = () => { resetCard(); setCardIndex(i => (visible.length > 0 ? (i - 1 + visible.length) % visible.length : 0)); };
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
        {/* 戻る導線が無いと、この画面に入ったユーザーが行き止まりになる。 */}
        <TouchableOpacity
          style={s.backRow}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          activeOpacity={0.7}
        >
          <Text style={s.backText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={[s.title, fontsLoaded && { fontFamily: TEXTBOOK_BOLD }]}>英単語・英熟語</Text>
        <Text style={s.sub}>単語4,800語+・熟語4,000+・英会話200　英検準2級〜1級・TOEIC800対応</Text>

        <TouchableOpacity style={s.conversationEntryBtn} onPress={() => router.push('/conversation')}>
          <Text style={s.conversationEntryText}>🗣️ AIと英会話を練習する</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.eikenEntryBtn} onPress={() => router.push('/eiken')}>
          <Text style={s.eikenEntryText}>🇬🇧 英検対策（2・3・4級 5,160問）</Text>
        </TouchableOpacity>

        {/* レベルフィルター（レベルごとに色分け） */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filterRow}>
          {LEVEL_FILTER.map(lbl => {
            const lvKey = LEVEL_MAP[lbl] as VocabLevel | 'all';
            const lc = lvKey !== 'all' ? levelColor[lvKey as VocabLevel] : null;
            const isActive = levelFilter === lbl;
            return (
              <TouchableOpacity
                key={lbl}
                style={[
                  s.filterChip,
                  isActive && (lc
                    ? { backgroundColor: lc.bg, borderColor: lc.border }
                    : s.filterChipActive),
                ]}
                onPress={() => changeFilter(lbl, typeFilter)}
              >
                <Text style={[s.filterText, isActive && { color: lc ? lc.text : D.gold, fontWeight: '700' }]}>
                  {lbl}
                </Text>
              </TouchableOpacity>
            );
          })}
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

        {!hasVocabPro && filtered.length > FREE_WORD_LIMIT && (
          <TouchableOpacity style={s.freeLimitBanner} onPress={() => setShowPaywall(true)} activeOpacity={0.85}>
            <Text style={s.freeLimitText}>
              無料で{FREE_WORD_LIMIT}語まで試せます。全{filtered.length}語は英単語Proで解放 ▸
            </Text>
          </TouchableOpacity>
        )}

        <View style={s.progressRow}>
          <Text style={s.progress}>
            {cardIndex + 1} / {visible.length}
            {!hasVocabPro && filtered.length > FREE_WORD_LIMIT && `（無料分・全${filtered.length}語）`}　🔀ランダム出題
          </Text>
          <TouchableOpacity
            style={s.shuffleBtn}
            onPress={() => { resetCard(); setCardIndex(0); setShuffleKey(k => k + 1); }}
          >
            <Text style={s.shuffleBtnText}>🔀 シャッフル</Text>
          </TouchableOpacity>
        </View>

        {card ? (
          <TouchableOpacity activeOpacity={0.92} onPress={handleFlip} style={s.cardWrap}>
            {/* 表面 */}
            <Animated.View style={[s.card, s.cardFront, { transform: [{ rotateY: frontRotate }] }]}>
              <View style={s.badgeRow}>
                <View style={s.idBadge}><Text style={s.idBadgeText}>No.{card.id.replace(/[a-z]/gi,'').padStart(4,'0')}</Text></View>
                <View style={[s.levelBadge, { backgroundColor: levelColor[card.level].bg, borderColor: levelColor[card.level].border }]}>
                  <Text style={[s.levelBadgeText, { color: levelColor[card.level].text }]}>{levelLabel[card.level]}</Text>
                </View>
                <View style={s.posBadge}><Text style={s.posBadgeText}>{card.pos}</Text></View>
                {card.isPhrase && card.category !== 'conversation' && <View style={s.phraseBadge}><Text style={s.phraseBadgeText}>熟語</Text></View>}
                {card.category === 'conversation' && <View style={s.convBadge}><Text style={s.convBadgeText}>英会話</Text></View>}
              </View>

              <Text style={[s.wordText, fontsLoaded && { fontFamily: TEXTBOOK_BOLD }]}>{card.word}</Text>

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
                    <Text key={i} style={[s.meaningItem, fontsLoaded && { fontFamily: TEXTBOOK_BOLD }]}>
                      <Text style={s.meaningNum}>{'①②③④⑤'[i] ?? `${i+1}.`}</Text>{'  '}{m}
                    </Text>
                  ))
                ) : (
                  <Text style={[s.meaningText, fontsLoaded && { fontFamily: TEXTBOOK_BOLD }]}>{card.meaning}</Text>
                )}

                <View style={s.exampleBox}>
                  <Text style={s.exampleLabel}>例　文</Text>
                  <Text style={[s.exampleEn, fontsLoaded && { fontFamily: TEXTBOOK_REGULAR }]}>{card.example}</Text>
                  <Text style={[s.exampleJa, fontsLoaded && { fontFamily: TEXTBOOK_REGULAR }]}>{card.exampleJa}</Text>
                  {card.example2 ? <>
                    <Text style={[s.exampleEn, {marginTop: 8}, fontsLoaded && { fontFamily: TEXTBOOK_REGULAR }]}>{card.example2}</Text>
                    <Text style={[s.exampleJa, fontsLoaded && { fontFamily: TEXTBOOK_REGULAR }]}>{card.example2Ja}</Text>
                  </> : null}
                </View>

                {kpNote ? (
                  <View style={s.keyBox}>
                    <Text style={s.keyLabel}>📌 ここが大切（用法・差がつく）</Text>
                    <Text style={s.keyText}>{kpNote}</Text>
                  </View>
                ) : null}

                {snNote ? (
                  <View style={s.setBox}>
                    <Text style={s.setLabel}>🔗 セットで暗記</Text>
                    <Text style={s.setText}>{snNote}</Text>
                  </View>
                ) : null}

                <Text style={s.categoryTag}>#{card.category}  #{levelLabel[card.level]}</Text>
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
            <Text style={s.promoText}>🔊 英単語Pro — 単語4,800+・熟語4,000+・英検5,160問・ネイティブ発音　{VOCAB_MONTHLY_LABEL}〜</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Paywall ─────────────────────────────────────────
function VocabPaywall({ onClose, onPurchased }: { onClose: () => void; onPurchased: () => void }) {
  const { isLoggedIn } = useAuthUser();
  const isWebPlatform = Platform.OS === 'web';
  const router = useRouter();
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
    // Web版の購入はブラウザのローカルIDに紐づくため、未ログインだと
    // 別ブラウザや履歴消去で購入が復元できなくなる。先にログインさせる。
    if (isWebPlatform && !isLoggedIn) {
      alert('Web版のご購入にはログインが必要です。ログイン後にもう一度お試しください。');
      router.push('/login');
      return;
    }
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
      const info = await restorePurchases();
      // 復元対象が無いのに黙って閉じると「押しても何も起きない」ように見える
      // （App Store審査でよく指摘される）。結果を必ず伝える。
      const restored = hasVocabEntitlement(info) || tierFromCustomerInfo(info) === 'max';
      if (restored) {
        alert('ご購入内容を復元しました。');
        onPurchased();
      } else {
        alert('復元できる購入が見つかりませんでした。購入時と同じApple IDでサインインしているかご確認ください。');
      }
    } catch {
      alert('購入の復元に失敗しました。');
    } finally {
      setPurchasing(false);
    }
  }

  const monthlyPrice = (monthlyProd as any)?.priceString ?? VOCAB_MONTHLY_LABEL;
  const yearlyPrice  = (yearlyProd as any)?.priceString ?? VOCAB_YEARLY_LABEL;

  return (
    <SafeAreaView style={[s.safe, { justifyContent: 'center' }]}>
      <View style={s.paywallCard}>
        <Text style={s.paywallEmoji}>🔊</Text>
        <Text style={s.paywallTitle}>英単語 Pro</Text>
        <Text style={s.paywallSub}>ネイティブ発音 ＋ 聞き流しで効率UP</Text>

        {[
          '🔊 ネイティブ発音（OpenAI TTS・高音質）',
          '▶ 聞き流しモード（自動ページ送り）',
          '📖 単語4,800語+ ＋ 熟語4,000+ ＋ 日常英会話200',
          '🇬🇧 英検対策 2・3・4級 5,160問（リスニング音声つき）',
          '🗣️ AIと英会話練習',
          '🎓 英検準2級〜1級・TOEIC800レベル対応',
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
                {purchasing ? '処理中...' : yearlyProd ? `年額 ${yearlyPrice}　で始める（お得）` : '準備中'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.purchaseBtnOutline, (!monthlyProd || purchasing) && s.purchaseBtnDisabled]}
              onPress={() => handlePurchase(monthlyProd)}
              disabled={!monthlyProd || purchasing}
            >
              <Text style={s.purchaseBtnOutlineText}>{monthlyProd ? `月額 ${monthlyPrice}　で始める` : '準備中'}</Text>
            </TouchableOpacity>
          </>
        )}

        {Platform.OS === 'android' && (
          <View style={s.androidNotice}>
            <Text style={s.androidNoticeText}>
              ⚠️ Android アプリでは現在 英単語Pro のご購入はご利用いただけません。{'\n'}
              ※ Google Play での課金は近日実装予定です。
            </Text>
          </View>
        )}

        <Text style={s.paywallNote}>いつでもキャンセル可能</Text>
        <TouchableOpacity onPress={handleRestore} disabled={purchasing}>
          <Text style={s.restoreText}>購入を復元する</Text>
        </TouchableOpacity>

        {/* 自動更新サブスクの必須開示（App Store審査対応） */}
        <Text style={s.paywallTerms}>
          {Platform.OS === 'web'
            ? '英単語Proは月額/年額の自動更新サブスクリプションです。期間終了の24時間前までに解約しない限り自動更新されます。お支払いはクレジットカード（Stripe経由）。解約は購入完了メール内の管理リンクからいつでも可能です。'
            : '英単語Proは月額/年額の自動更新サブスクリプションです。期間終了の24時間前までに解約しない限り自動更新されます。解約はApp Store / Google Playの設定からいつでも可能。お支払いは購入確定時にストアアカウントへ請求されます。'}
        </Text>
        <View style={s.legalRow}>
          <TouchableOpacity onPress={() => { onClose(); router.push('/terms'); }}>
            <Text style={s.legalLink}>利用規約（EULA）</Text>
          </TouchableOpacity>
          <Text style={s.legalSep}>・</Text>
          <TouchableOpacity onPress={() => { onClose(); router.push('/privacy'); }}>
            <Text style={s.legalLink}>プライバシーポリシー</Text>
          </TouchableOpacity>
        </View>

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
  freeLimitBanner:   { backgroundColor: D.goldDim, borderWidth: 1, borderColor: D.goldBorder, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 10 },
  freeLimitText:     { fontSize: 13, fontWeight: '700', color: D.gold, textAlign: 'center' },
  backRow:           { alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 4 },
  backText:          { fontSize: 16, fontWeight: '700', color: D.gold },
  title:             { fontSize: 24, fontWeight: '800', color: D.gold, textAlign: 'center', marginTop: 8 },
  sub:               { fontSize: 12, color: D.muted, textAlign: 'center', marginBottom: 12 },
  conversationEntryBtn: { backgroundColor: 'rgba(160,100,220,0.14)', borderWidth: 1, borderColor: D.purpleBorder, borderRadius: 14, paddingVertical: 12, alignItems: 'center', marginBottom: 14 },
  conversationEntryText: { fontSize: 14, fontWeight: '700', color: D.purpleText },
  eikenEntryBtn: { backgroundColor: 'rgba(198,40,40,0.10)', borderWidth: 1, borderColor: 'rgba(198,40,40,0.35)', borderRadius: 14, paddingVertical: 12, alignItems: 'center', marginBottom: 14 },
  eikenEntryText: { fontSize: 14, fontWeight: '700', color: '#C62828' },
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
  progressRow:       { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 },
  progress:          { textAlign: 'center', color: D.muted, fontSize: 12 },
  shuffleBtn:        { backgroundColor: D.goldDim, borderWidth: 1, borderColor: D.goldBorder, borderRadius: 14, paddingHorizontal: 12, paddingVertical: 5 },
  shuffleBtnText:    { fontSize: 12, color: D.gold, fontWeight: '700' },
  cardWrap:          { width: '100%', maxWidth: 480, alignSelf: 'center', height: 460, marginBottom: 16 },
  card:              { position: 'absolute', width: '100%', height: '100%', borderRadius: 18, padding: 20, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, backfaceVisibility: 'hidden', ...glassWeb },
  cardFront:         {},
  cardBack:          { backgroundColor: 'rgba(74,144,217,0.06)' },
  badgeRow:          { flexDirection: 'row', gap: 6, marginBottom: 10 },
  idBadge:           { backgroundColor: 'rgba(15,24,38,0.04)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  idBadgeText:       { fontSize: 10, color: D.muted },
  posBadge:          { backgroundColor: 'rgba(200,168,75,0.18)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  posBadgeText:      { fontSize: 11, color: D.gold, fontWeight: '700' },
  phraseBadge:       { backgroundColor: 'rgba(74,200,180,0.15)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  phraseBadgeText:   { fontSize: 11, color: D.tealText, fontWeight: '700' },
  levelBadge:        { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, borderWidth: 1 },
  levelBadgeText:    { fontSize: 11, fontWeight: '700' },
  convBadge:         { backgroundColor: 'rgba(240,96,144,0.15)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  convBadgeText:     { fontSize: 11, color: '#F06090', fontWeight: '700' },
  wordText:          { fontSize: 38, fontWeight: '800', color: D.white, marginBottom: 4 },
  pronRow:           { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  ipaText:           { fontSize: 15, color: D.soft, fontStyle: 'italic' },
  pronText:          { fontSize: 15, color: D.gold },
  memoryBox:         { backgroundColor: 'rgba(160,100,220,0.10)', borderRadius: 10, padding: 10, marginBottom: 10, borderLeftWidth: 3, borderLeftColor: D.purpleBorder },
  memoryLabel:       { fontSize: 11, color: D.purpleText, fontWeight: '700', marginBottom: 4 },
  memoryText:        { fontSize: 13, color: '#6A3FD0', lineHeight: 18 },
  tapHint:           { fontSize: 12, color: D.muted, marginBottom: 12 },
  speakRow:          { flexDirection: 'row', gap: 10 },
  speakBtn:          { flex: 1, paddingVertical: 8, borderRadius: 10, backgroundColor: 'rgba(15,24,38,0.04)', borderWidth: 1, borderColor: D.cardBorder, alignItems: 'center' },
  speakBtnPro:       { backgroundColor: D.goldDim, borderColor: D.gold },
  speakBtnText:      { fontSize: 13, color: D.soft },
  speakBtnTextPro:   { fontSize: 13, color: D.gold, fontWeight: '700' },
  meaningLabel:      { fontSize: 11, color: D.muted, letterSpacing: 3, marginBottom: 8 },
  meaningItem:       { fontSize: 20, color: D.white, fontWeight: '700', marginBottom: 6, lineHeight: 28 },
  meaningNum:        { color: D.gold, fontWeight: '900' },
  meaningText:       { fontSize: 24, fontWeight: '700', color: D.white, marginBottom: 10 },
  exampleBox:        { backgroundColor: '#F6F8FB', borderRadius: 10, padding: 12, marginBottom: 10, borderLeftWidth: 2, borderLeftColor: D.blue },
  exampleLabel:      { fontSize: 10, color: D.soft, fontWeight: '700', marginBottom: 6, letterSpacing: 2 },
  exampleEn:         { fontSize: 14, color: D.white, marginBottom: 2, lineHeight: 20 },
  exampleJa:         { fontSize: 12, color: D.soft, lineHeight: 18 },
  keyBox:            { backgroundColor: 'rgba(249,168,201,0.10)', borderRadius: 10, padding: 10, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: D.pinkBorder },
  keyLabel:          { fontSize: 11, color: '#F9A8C9', fontWeight: '800', marginBottom: 4 },
  keyText:           { fontSize: 13, color: '#B03A63', lineHeight: 20 },
  setBox:            { backgroundColor: D.teal, borderRadius: 10, padding: 10, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: D.tealBorder },
  setLabel:          { fontSize: 11, color: D.tealText, fontWeight: '800', marginBottom: 4 },
  setText:           { fontSize: 13, color: '#0B7A54', lineHeight: 20 },
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
  featureRow:        { alignSelf: 'stretch', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'rgba(15,24,38,0.04)' },
  featureText:       { fontSize: 14, color: D.white },
  purchaseBtn:       { marginTop: 24, backgroundColor: D.gold, borderRadius: 14, paddingVertical: 16, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
  purchaseBtnText:   { fontSize: 20, fontWeight: '800', color: '#040C1C' },
  purchaseBtnOutline: { marginTop: 10, backgroundColor: 'transparent', borderRadius: 14, borderWidth: 1, borderColor: D.goldBorder, paddingVertical: 14, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
  purchaseBtnOutlineText: { fontSize: 16, fontWeight: '700', color: D.gold },
  purchaseBtnDisabled: { opacity: 0.5 },
  restoreText:       { fontSize: 13, color: D.muted, marginTop: 14, textAlign: 'center', textDecorationLine: 'underline' },
  paywallNote:       { fontSize: 11, color: D.muted, marginTop: 10, textAlign: 'center' },
  androidNotice:     { backgroundColor: 'rgba(255,165,0,0.14)', borderWidth: 1, borderColor: 'rgba(255,165,0,0.45)', borderRadius: 12, padding: 14, marginTop: 16, width: '100%' },
  androidNoticeText: { color: '#FFA500', fontSize: 13, fontWeight: '700', textAlign: 'center', lineHeight: 20 },
  paywallTerms:      { fontSize: 10, color: D.muted, textAlign: 'center', marginTop: 12, lineHeight: 16, paddingHorizontal: 6 },
  legalRow:          { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  legalLink:         { fontSize: 12, color: D.soft, fontWeight: '600', textDecorationLine: 'underline' },
  legalSep:          { fontSize: 12, color: D.muted, marginHorizontal: 8 },
  closeBtn:          { marginTop: 16, padding: 10 },
  closeBtnText:      { fontSize: 14, color: D.muted },
});
