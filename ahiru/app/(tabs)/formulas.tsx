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
  useWindowDimensions,
  Platform,
} from 'react-native';
import { FORMULAS, SUBJECTS, type Subject, type FormulaItem } from '../../data/formulas';
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

export default function FormulasScreen() {
  const [subject, setSubject] = useState<Subject>('算数');
  // 図解画像の一辺。画面幅から1回だけ決める。行ごとに測り直すと、
  // スクロールで行が外れて戻るたびに測り直しが走り、画像が点滅する。
  const { width: winWidth } = useWindowDimensions();
  const imageSize = Math.max(200, winWidth - (16 + 12 + 1) * 2);
  const sections = FORMULAS[subject];
  const subjectInfo = SUBJECTS.find((s) => s.key === subject)!;

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
    | { kind: 'header'; key: string; title: string; intro?: string }
    | { kind: 'item'; key: string; item: (typeof sections)[number]['items'][number] };
  // 画像を多く含む教科かどうか（描画の刻み方を変えるため）
  const heavyImages = React.useMemo(
    () => sections.reduce((n, sec) => n + sec.items.filter((it) => !it.figure && formulaImages[it.label]).length, 0) > 20,
    [sections],
  );

  const rows: Row[] = React.useMemo(() => {
    const out: Row[] = [];
    sections.forEach((section, si) => {
      out.push({ kind: 'header', key: `h${si}`, title: section.title, intro: section.intro });
      section.items.forEach((item, ii) => {
        out.push({ kind: 'item', key: `i${si}_${ii}`, item });
      });
    });
    return out;
  }, [sections]);

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
              {s.key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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
        // 使いすぎるので従来どおり画面に入った分だけ描く（刻み幅は大きめ）。
        initialNumToRender={heavyImages ? 6 : rows.length}
        maxToRenderPerBatch={heavyImages ? 6 : 20}
        windowSize={heavyImages ? 9 : 41}
        updateCellsBatchingPeriod={100}
        removeClippedSubviews={heavyImages && Platform.OS === 'android'}
        ListFooterComponent={LIST_FOOTER}
        renderItem={({ item: row }) =>
          row.kind === 'header' ? (
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: subjectInfo.color }]}>{row.title}</Text>
              {row.intro != null && <Text style={styles.sectionIntro}>{row.intro}</Text>}
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
          )
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
