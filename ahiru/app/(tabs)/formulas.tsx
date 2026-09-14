import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FORMULAS, SUBJECTS, type Subject, type FormulaItem } from '../../data/formulas';
import { STUDY_PERIOD_ORDER, type StudyPeriod } from '../../data/formulas-types';
import { useExamType, examTypeLabel, type ExamType } from '../../store/examType';
import SubjectIcon, { type IconSubject } from '../../components/SubjectIcon';
import FigureView from '../../components/FigureView';
import InlineQuiz from '../../components/InlineQuiz';
import { formulaImages } from '../../data/formulaImages';
import { useFormulaUnlocks } from '../../hooks/useFormulaUnlocks';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';

// 公式タブの教科名（算数/理科/社会）→ アイコンキー
// 毎回作り直すとリスト全体の再描画のきっかけになるので、定数にしておく
const LIST_FOOTER = <View style={{ height: 120 }} />;

const SUBJ_ICON: Record<Subject, IconSubject> = {
  算数: 'sansu',
  国語: 'kokugo',
  理科: 'rika',
  社会: 'shakai',
  英語: 'eigo',
};


// 1項目分の描画。FlatListの行として使う。
// メモ化しないと、画面のどこかの状態が変わるたびに全行が描き直され、
// 図解画像の多い理科・社会で画面が点滅する。
const FormulaRow = React.memo(function FormulaRow({
  item,
  accent,
  bypassLock,
  isUnlocked,
  priceLabel,
  productReady,
  purchasing,
  onUnlock,
  imageSize,
}: {
  item: FormulaItem;
  accent: string;
  bypassLock: boolean;
  isUnlocked: boolean;
  priceLabel: string;
  productReady: boolean;
  purchasing: boolean;
  onUnlock: (label: string) => void;
  imageSize: number;
}) {
  if (item.locked && !bypassLock && !isUnlocked) {
    return (
      <View style={styles.formulaRow}>
        <View style={[styles.formulaLabel, { borderLeftColor: accent }]}>
          <Text style={styles.formulaLabelText}>{item.label}</Text>
        </View>
        <View style={[styles.formulaBox, { borderColor: accent + '55' }]}>
          <Text style={[styles.formulaText, { color: accent }]}>{item.formula}</Text>
        </View>
        <View style={styles.lockCard}>
          <Text style={styles.lockIcon}>🔒</Text>
          <Text style={styles.lockText}>
            くわしい説明・図解・例題・一問一答は買い切りで解放できます（{priceLabel}・1回のみ）
          </Text>
          <TouchableOpacity
            style={[styles.unlockBtn, { backgroundColor: accent }, (!productReady || purchasing) && styles.unlockBtnDisabled]}
            activeOpacity={0.85}
            disabled={!productReady || purchasing}
            onPress={() => onUnlock(item.label)}
          >
            {purchasing ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.unlockBtnText}>
                {productReady ? `${priceLabel}で解放する` : '準備中です'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
      <View style={styles.formulaRow}>
        <View style={[styles.formulaLabel, { borderLeftColor: accent }]}>
          <Text style={styles.formulaLabelText}>{item.label}</Text>
        </View>

        <View style={styles.formulaBox}>
          <Text style={[styles.formulaText, { color: accent }]}>{item.formula}</Text>
          {item.note && <Text style={styles.formulaNote}>{item.note}</Text>}
        </View>

        {item.explanation && (
          <Text style={styles.explanation}>{item.explanation}</Text>
        )}

        {item.figure && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <FigureView figure={item.figure} />
          </View>
        )}

        {!item.figure && formulaImages[item.label] && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <Image
              source={formulaImages[item.label]}
              style={[styles.formulaImage, { width: imageSize, height: imageSize }]}
              resizeMode="cover"
            />
          </View>
        )}

        {!item.figure && !formulaImages[item.label] && item.steps && item.steps.length > 0 && (
          <View style={styles.stepsBox}>
            <Text style={styles.figureLabel}>とき方の流れ</Text>
            {item.steps.map((st: string, si: number) => (
              <Text key={si} style={styles.stepsLine}>{st}</Text>
            ))}
          </View>
        )}

        {!item.figure && !formulaImages[item.label] && !(item.steps && item.steps.length > 0) && item.asciiFigure && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={styles.figureText}>{item.asciiFigure}</Text>
            </ScrollView>
          </View>
        )}

        {item.example && (
          <View style={[styles.exampleBox, { borderLeftColor: accent }]}>
            <Text style={styles.exampleQ}>
              <Text style={[styles.exampleTag, { color: accent }]}>例題 </Text>
              {item.example.q}
            </Text>
            <Text style={styles.exampleA}>
              <Text style={styles.exampleTagA}>解答 </Text>
              {item.example.a}
            </Text>
          </View>
        )}

        {item.checkpoints && item.checkpoints.length > 0 && (
          <View style={styles.checkBox}>
            <Text style={[styles.checkTitle, { color: accent }]}>✓ チェックポイント</Text>
            {item.checkpoints.map((cp: string, ci: number) => (
              <View key={ci} style={styles.checkRow}>
                <Text style={[styles.checkMark, { color: accent }]}>▸</Text>
                <Text style={styles.checkText}>{cp}</Text>
              </View>
            ))}
          </View>
        )}

        {item.quiz && item.quiz.length > 0 && (
          <InlineQuiz
            label={`「${item.label}」の一問一答`}
            items={item.quiz.map((qz) => ({
              question: qz.q,
              answer: qz.a,
              explanation: qz.explanation,
            }))}
          />
        )}
      </View>
  );
});

// 中学受験は「算数」、高校受験は「数学」。データのキーは共通なので表示名だけ変える。
function subjectLabel(key: Subject, examType: ExamType): string {
  return key === '算数' && examType === 'koko' ? '数学' : key;
}

export default function FormulasScreen() {
  const router = useRouter();
  const [subject, setSubject] = useState<Subject>('算数');
  // 図解画像の一辺。画面幅から1回だけ決める。行ごとに測り直すと、
  // スクロールで行が外れて戻るたびに測り直しが走り、画像が点滅する。
  const { width: winWidth } = useWindowDimensions();
  // 図解画像の一辺。
  // ① 上限をつける。元画像が640×640なので、それ以上に広げても粗くなるだけ。
  //    Macのブラウザ（幅1400px前後）では上限に張りつくので、窓幅が多少
  //    変わっても値が変わらない。
  // ② 32pxきざみに丸める。丸めないと、縦スクロールバーが出入りしただけで
  //    窓幅が十数px変わり、全行が別のimageSizeで描き直されて画像がちらつき、
  //    行の高さが変わってスクロール位置まで巻き戻る（Web版で実際に発生）。
  const imageSize = React.useMemo(() => {
    const avail = winWidth - (16 + 12 + 1) * 2;
    return Math.min(460, Math.max(200, Math.round(avail / 32) * 32));
  }, [winWidth]);
  const subjectInfo = SUBJECTS.find((s) => s.key === subject)!;

  // 受験種別。入口で選んだ値を初期値にし、この画面でも切りかえられるようにする。
  // これが無いと、高校受験の生徒が公式集を開いたときに
  // 小4〜小6の内容ばかりが並んでしまう。
  const { examType: savedExamType } = useExamType();
  const [examType, setExamType] = useState<ExamType>('chugaku');
  const examTypePicked = React.useRef(false);
  React.useEffect(() => {
    // 保存値の読みこみは非同期。まだ手で切りかえていないときだけ反映する。
    if (savedExamType && !examTypePicked.current) setExamType(savedExamType);
  }, [savedExamType]);

  // 学年（学習時期）のしぼりこみ。null は「すべて」。
  const [period, setPeriod] = useState<StudyPeriod | null>(null);

  // examType 未設定のセクションは「どちらにも出す」（英語がこれにあたる）
  const allSections = React.useMemo(
    () => FORMULAS[subject].filter((s) => s.examType == null || s.examType === examType),
    [subject, examType],
  );

  // その教科に実際にあるものだけをチップに出す（空の学年を押せても意味がない）
  const periods = React.useMemo(() => {
    const s = new Set(allSections.map((sec) => sec.studyPeriod).filter(Boolean) as StudyPeriod[]);
    return STUDY_PERIOD_ORDER.filter((p) => s.has(p));
  }, [allSections]);

  // 選んだ学年がその教科に無いときは「すべて」に戻す。
  // （算数で「小4」を選んだまま英語に切りかえると、中身が空になってしまう）
  React.useEffect(() => {
    if (period != null && !periods.includes(period)) setPeriod(null);
  }, [period, periods]);

  const sections = React.useMemo(
    () => (period == null ? allSections : allSections.filter((sec) => sec.studyPeriod === period)),
    [allSections, period],
  );

  const { isPro, isMax } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const bypassLock = isPro || isMax || betaAccess;
  const {
    unlockedIds,
    productReady,
    priceLabel,
    purchasingFigureId,
    unlockFormula,
  } = useFormulaUnlocks();

  const handleUnlock = React.useCallback(async (label: string) => {
    const result = await unlockFormula(label);
    if (!result.ok) {
      Alert.alert('購入できませんでした', result.message);
      return;
    }
    Alert.alert('解放しました', `「${label}」はこれ以降ずっと無料で見られます。`);
  }, [unlockFormula]);

  // セクション見出しと項目を1本のリストにならし、FlatListで仮想化できるようにする
  type Row =
    | {
        kind: 'header';
        key: string;
        title: string;
        intro?: string;
        period?: StudyPeriod;
        relatedLessons?: { id: string; label: string }[];
      }
    | { kind: 'item'; key: string; item: (typeof sections)[number]['items'][number] };
  // いま表示するぶんに図解画像（PNG）が何枚あるか。学年でしぼると減るので、
  // 全教科まとめてではなく、しぼったあとの実数で数える。
  const shownImageCount = React.useMemo(
    () =>
      sections.reduce(
        (n, sec) => n + sec.items.filter((it) => !it.figure && formulaImages[it.label]).length,
        0,
      ),
    [sections],
  );

  const rows: Row[] = React.useMemo(() => {
    const out: Row[] = [];
    sections.forEach((section, si) => {
      out.push({
        kind: 'header',
        key: `h${si}`,
        title: section.title,
        intro: section.intro,
        period: section.studyPeriod,
        relatedLessons: section.relatedLessons,
      });
      section.items.forEach((item, ii) => {
        out.push({ kind: 'item', key: `i${si}_${ii}`, item });
      });
    });
    return out;
  }, [sections]);

  // 点滅の正体は仮想化による行の付け外し（と、そのたびの測り直し）なので、
  // 可能なかぎり全行を出しっぱなしにする。画像は640×640で1枚あたりの
  // メモリが大きいため、枚数が多いときだけ仮想化に戻す。
  // 学年をしぼればほとんどの組み合わせがこの閾値を下回り、点滅しない。
  // 例：理科 小6前半=24枚 → 全行描画／社会 小6後半・直前=30枚 → 仮想化。
  //
  // ただしWeb版では枚数によらず仮想化しない。ブラウザは画面外の要素を
  // 持っていても平気な一方、仮想化でセルが増えるたびに全体の高さが
  // 測り直され、そのぶんスクロール位置が巻き戻ってしまう
  // （Macで「社会が点滅して元のページに戻る」と報告された症状）。
  // メモリが限られるのはネイティブ側なので、制限もそちらだけでよい。
  const MAX_IMAGES_WITHOUT_VIRTUALIZATION = 25;
  const virtualize =
    Platform.OS !== 'web' && shownImageCount > MAX_IMAGES_WITHOUT_VIRTUALIZATION;

  // renderItem を毎回作りなおすと、FlatList が全セルを描き直す。
  // FormulaRow 自体はメモ化してあるが、見出し側は素通りしてしまうので
  // ここでもメモ化しておく。
  const renderRow = React.useCallback(
    ({ item: row }: { item: Row }) =>
      row.kind === 'header' ? (
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={[styles.sectionTitle, { color: subjectInfo.color }]}>{row.title}</Text>
            {row.period != null && (
              <View style={styles.sectionPeriodChip}>
                <Text style={styles.sectionPeriodChipText}>📅 {row.period}</Text>
              </View>
            )}
          </View>
          {row.intro != null && <Text style={styles.sectionIntro}>{row.intro}</Text>}
          {row.relatedLessons?.map((rl) => (
            <TouchableOpacity
              key={rl.id}
              style={[styles.relatedBtn, { borderColor: subjectInfo.color }]}
              onPress={() => router.push(`/lesson/${rl.id}` as any)}
              activeOpacity={0.8}
            >
              <Text style={[styles.relatedBtnText, { color: subjectInfo.color }]}>
                {`📘 ${rl.label} →`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <FormulaRow
          item={row.item}
          accent={subjectInfo.color}
          bypassLock={bypassLock}
          isUnlocked={unlockedIds.has(row.item.label)}
          priceLabel={priceLabel}
          productReady={productReady}
          purchasing={purchasingFigureId === row.item.label}
          onUnlock={handleUnlock}
          imageSize={imageSize}
        />
      ),
    [
      router,
      subjectInfo.color,
      bypassLock,
      unlockedIds,
      priceLabel,
      productReady,
      purchasingFigureId,
      handleUnlock,
      imageSize,
    ],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <SubjectIcon subject={SUBJ_ICON[subject]} size={30} color="#FFFFFF" strokeWidth={2} />
        <View>
          <Text style={styles.headerTitle}>📋 公式・まとめ</Text>
          <Text style={styles.headerSub}>図解でわかる・チェックポイントで固める</Text>
        </View>
      </View>

      <View style={styles.subjectRow}>
        {SUBJECTS.map((s) => (
          <TouchableOpacity
            key={s.key}
            style={[styles.subjectBtn, subject === s.key && { backgroundColor: s.color }]}
            onPress={() => setSubject(s.key)}
            activeOpacity={0.8}
          >
            <SubjectIcon subject={SUBJ_ICON[s.key]} size={16} color={subject === s.key ? '#FFFFFF' : s.color} strokeWidth={2} />
            <Text style={[styles.subjectBtnText, subject === s.key && styles.subjectBtnTextActive]}>
              {subjectLabel(s.key, examType)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.examTypeRow}>
        {(['chugaku', 'koko'] as ExamType[]).map((t) => (
          <TouchableOpacity
            key={t}
            style={[
              styles.examTypeBtn,
              examType === t && { backgroundColor: subjectInfo.color, borderColor: subjectInfo.color },
            ]}
            onPress={() => {
              examTypePicked.current = true;
              setExamType(t);
            }}
            activeOpacity={0.85}
          >
            <Text style={[styles.examTypeText, examType === t && styles.examTypeTextActive]}>
              {examTypeLabel[t]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {periods.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.periodRow}
          contentContainerStyle={styles.periodRowContent}
        >
          <TouchableOpacity
            style={[styles.periodChip, period == null && { backgroundColor: subjectInfo.color, borderColor: subjectInfo.color }]}
            onPress={() => setPeriod(null)}
            activeOpacity={0.8}
          >
            <Text style={[styles.periodChipText, period == null && styles.periodChipTextActive]}>すべて</Text>
          </TouchableOpacity>
          {periods.map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.periodChip, period === p && { backgroundColor: subjectInfo.color, borderColor: subjectInfo.color }]}
              onPress={() => setPeriod(p)}
              activeOpacity={0.8}
            >
              <Text style={[styles.periodChipText, period === p && styles.periodChipTextActive]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.content}
        data={rows}
        keyExtractor={(r) => r.key}
        // 行の高さがばらばらなリストを少しずつ描画すると、スクロールのたびに
        // 測り直しと描き直しが走り、画面が点滅する。
        // 画像を持たない教科（国語・英語など）は項目数も少ないので、
        // 刻まずに一度に描いてしまい、仮想化そのものを避ける。
        // 画像が多い教科（理科・社会）だけは、まとめて展開するとメモリを
        // 使いすぎるので画面に入った分だけ描く。ただし刻みが細かいと、
        // 前後の余裕が足りずスクロール中に空セルが見えて点滅になるため、
        // メモリが許す範囲で前後を厚めに持たせる。
        initialNumToRender={virtualize ? 10 : rows.length}
        maxToRenderPerBatch={virtualize ? 10 : 20}
        windowSize={virtualize ? 21 : 41}
        updateCellsBatchingPeriod={50}
        // removeClippedSubviews は画面外のセルをビュー階層から切り離すので、
        // 戻ってきたときに一瞬空白になる。理科・社会の点滅の原因なので使わない。
        removeClippedSubviews={false}
        ListFooterComponent={LIST_FOOTER}
        renderItem={renderRow}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>準備中です</Text>
            <Text style={styles.emptyText}>
              {`${examTypeLabel[examType]}の${subjectLabel(subject, examType)}は、いま作成中です。\nほかの教科、または${examTypeLabel[examType === 'chugaku' ? 'koko' : 'chugaku']}に切りかえてご覧ください。`}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF7F2' },
  header: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerEmoji: { fontSize: 40 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 2 },
  subjectRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#DCD3C5',
    padding: 10,
    // 5教科ぶんを1行に並べるので、狭い端末でも入るよう余白は詰めてある
    gap: 6,
  },
  subjectBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DCD3C5',
  },
  subjectBtnEmoji: { fontSize: 18 },
  subjectBtnText: { fontSize: 14, fontWeight: '700', color: '#666' },
  subjectBtnTextActive: { color: '#FFFFFF' },
  scroll: { flex: 1 },
  examTypeRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  examTypeBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD2C0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  examTypeText: { fontSize: 14, fontWeight: '800', color: '#6B5B45' },
  examTypeTextActive: { color: '#FFFFFF' },
  emptyBox: { padding: 28, alignItems: 'center', gap: 8 },
  emptyTitle: { fontSize: 16, fontWeight: '800', color: '#6B5B45' },
  emptyText: { fontSize: 13, color: '#8A7A62', textAlign: 'center', lineHeight: 20 },
  periodRow: { flexGrow: 0, borderBottomWidth: 1, borderBottomColor: '#EFE7DA', backgroundColor: '#FFFFFF' },
  periodRowContent: { paddingHorizontal: 12, paddingVertical: 8, gap: 6, alignItems: 'center' },
  periodChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#DDD2C0',
    backgroundColor: '#FFFFFF',
  },
  periodChipText: { fontSize: 13, fontWeight: '700', color: '#6B5B45' },
  periodChipTextActive: { color: '#FFFFFF' },
  relatedBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1.5,
    backgroundColor: '#FFFFFF',
  },
  relatedBtnText: { fontSize: 13, fontWeight: '700' },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  sectionPeriodChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: '#F3EDE2',
  },
  sectionPeriodChipText: { fontSize: 11, fontWeight: '700', color: '#7A6A52' },
  content: { padding: 16 },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 14,
    borderWidth: 1.5,
    borderColor: '#DCD3C5',
    overflow: 'hidden',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#DCD3C5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F5EFE4',
  },
  sectionIntro: {
    fontSize: 12.5,
    color: '#6E645C',
    lineHeight: 19,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 2,
  },
  formulaRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5EFE4',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  formulaLabel: {
    borderLeftWidth: 3,
    paddingLeft: 8,
    marginBottom: 6,
  },
  formulaLabelText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
  },
  lockCard: {
    backgroundColor: '#FAF6EF',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8DCC8',
    borderStyle: 'dashed',
  },
  lockIcon: { fontSize: 28, marginBottom: 6 },
  lockText: { fontSize: 14, color: '#6E645C', textAlign: 'center', marginBottom: 12, lineHeight: 21 },
  unlockBtn: {
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 24,
    minWidth: 160,
    alignItems: 'center',
  },
  unlockBtnDisabled: { backgroundColor: '#C7B9A6' },
  unlockBtnText: { color: '#FFFFFF', fontSize: 14.5, fontWeight: '800' },
  formulaBox: {
    backgroundColor: '#FAF6EF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  formulaText: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  formulaNote: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    fontWeight: '400',
  },
  explanation: {
    fontSize: 13,
    color: '#6E645C',
    lineHeight: 20,
    marginTop: 8,
  },
  figureBox: {
    backgroundColor: '#FCFDF6',
    borderWidth: 1,
    borderColor: '#EAEEDA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
    overflow: 'hidden',
  },
  figureLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A0A88A',
    marginBottom: 4,
    letterSpacing: 1,
  },
  figureText: {
    fontSize: 12,
    lineHeight: 17,
    color: '#33413B',
    fontFamily: 'monospace',
  },
  formulaImage: {
    borderRadius: 10,
    backgroundColor: '#F5EFE4',
    // 画像の一辺には上限（460px）があるので、PCのような広い画面では
    // 枠のほうが広くなる。左に寄ると間が抜けて見えるため中央に置く。
    alignSelf: 'center',
  },
  stepsBox: {
    backgroundColor: '#FAF6EF',
    borderWidth: 1,
    borderColor: '#EBE4D8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  stepsLine: {
    fontSize: 13,
    lineHeight: 21,
    color: '#2B2420',
    fontVariant: ['tabular-nums'],
  },
  exampleBox: {
    backgroundColor: '#FFF9F0',
    borderLeftWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  exampleQ: {
    fontSize: 12.5,
    color: '#4A3A2A',
    lineHeight: 19,
  },
  exampleTag: {
    fontWeight: '900',
    fontSize: 11,
  },
  exampleA: {
    fontSize: 12.5,
    color: '#4A3A2A',
    lineHeight: 19,
    marginTop: 5,
  },
  exampleTagA: {
    fontWeight: '900',
    fontSize: 11,
    color: '#C0894A',
  },
  checkBox: {
    backgroundColor: '#FAF6EF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  checkTitle: {
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 6,
  },
  checkRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  checkMark: {
    fontSize: 12,
    fontWeight: '900',
    marginRight: 6,
    lineHeight: 19,
  },
  checkText: {
    flex: 1,
    fontSize: 12.5,
    color: '#6E645C',
    lineHeight: 19,
  },
});
