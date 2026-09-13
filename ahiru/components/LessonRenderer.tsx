import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import type { LessonSection } from '../data/lesson-types';
import { getLessonFigure } from '../data/lesson-figures';
import { getKoushikiFormulaInfo } from '../data/koushiki-access';
import { getMangaScript } from '../data/manga-scripts';
import { getKoushikiQuestionsForFigure } from '../data/koushiki-questions';
import FigureView from './FigureView';
import MangaDialogue from './MangaDialogue';
import InlineQuiz, { questionsToQuizItems } from './InlineQuiz';

type Props = {
  sections: LessonSection[];
  isMax: boolean;
  /** Pro/Max加入者は公式集の買い切りロックを常にバイパスする */
  bypassFormulaLock?: boolean;
  unlockedFormulaIds?: Set<string>;
  formulaUnlockPriceLabel?: string;
  formulaUnlockProductReady?: boolean;
  purchasingFigureId?: string | null;
  onUnlockFormula?: (figureId: string, heading: string) => void;
};

// 本文に直接書かれた罫線の図（┌─┐│└┘ を使った枠や樹形図）は、
// 等幅フォントで桁をそろえる前提で書かれている。ふつうの本文と同じ
// 可変幅フォントで出すと桁がずれて何の図か分からなくなるので、
// 連続する罫線の行はまとめて等幅・横スクロールの箱で出す。
const BOX_DRAWING = /[┌┐└┘├┤┬┴┼─━│┃╱╲╳|/\\＼]/;
const MONO = Platform.select({ ios: 'Courier', android: 'monospace', default: 'monospace' });

function isArtLine(line: string): boolean {
  const t = line.replace(/[　\s]/g, '');
  if (t === '' || !BOX_DRAWING.test(t)) return false;
  // 「know ／ no」「big（large）／ small」のような単語の並びは図ではないので、
  // 単語（小文字が2つ以上続く）や日本語が入っている行は本文として扱う。
  if (/[a-z]{2,}/.test(t)) return false;
  if (/[ぁ-んァ-ヶ一-龥]/.test(t)) return false;
  return true;
}

function renderBody(body: string): React.ReactNode[] {
  const lines = body.split('\n');
  const out: React.ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!isArtLine(lines[i])) {
      out.push(renderLine(lines[i], i));
      continue;
    }
    // 罫線の行が続くあいだをひとかたまりの図として取り出す
    let j = i;
    while (j < lines.length && (isArtLine(lines[j]) || (lines[j].trim() === '' && j + 1 < lines.length && isArtLine(lines[j + 1])))) {
      j++;
    }
    // 1行だけのものは図ではなく、絶対値の式（|x−y|）などのことが多い。
    // 等幅の箱に入れると本文から浮くので、ふつうの本文として扱う。
    if (j - i < 2) {
      out.push(renderLine(lines[i], i));
      continue;
    }
    // 図に付いている短いラベル行（「C（頂点）」「左辺　右辺」「（∠A = 45°）」など）も
    // 同じ等幅の箱に入れる。別々に描くと、ラベルだけ字幅がずれて図から離れて見える。
    let start = i;
    const isLabel = (l: string) =>
      l.trim() !== '' && l.replace(/[　\s]/g, '').length <= 14 && !/^\s*[■●例★→⚠]/.test(l);
    while (start > 0 && out.length > 0 && isLabel(lines[start - 1])) {
      start--;
      out.pop();
    }
    let end = j;
    while (end < lines.length && isLabel(lines[end])) end++;
    out.push(
      <ScrollView key={`art${start}`} horizontal showsHorizontalScrollIndicator={false} style={styles.artBox}>
        <Text style={styles.artText}>{lines.slice(start, end).join('\n')}</Text>
      </ScrollView>,
    );
    i = end - 1;
  }
  return out;
}

function renderLine(line: string, i: number): React.ReactNode {
  {
    if (line.startsWith('■ ') || line.startsWith('● ')) {
      return (
        <Text key={i} style={styles.bullet}>
          {line}
        </Text>
      );
    }
    if (line.startsWith('→ ')) {
      return (
        <Text key={i} style={styles.arrow}>
          {line}
        </Text>
      );
    }
    if (line.startsWith('例）') || line.startsWith('例：') || line.startsWith('【例】')) {
      return (
        <View key={i} style={styles.exampleBox}>
          <Text style={styles.exampleText}>{line}</Text>
        </View>
      );
    }
    if (line.startsWith('⚠') || line.startsWith('注意') || line.startsWith('【注意】')) {
      return (
        <View key={i} style={styles.warningBox}>
          <Text style={styles.warningText}>{line}</Text>
        </View>
      );
    }
    if (line.startsWith('★') || line.startsWith('✓') || line.startsWith('【ポイント】')) {
      return (
        <View key={i} style={styles.pointBox}>
          <Text style={styles.pointText}>{line}</Text>
        </View>
      );
    }
    if (line === '') {
      return <View key={i} style={styles.spacer} />;
    }
    return (
      <Text key={i} style={styles.body}>
        {line}
      </Text>
    );
  }
}

export default function LessonRenderer({
  sections,
  isMax,
  bypassFormulaLock = false,
  unlockedFormulaIds,
  formulaUnlockPriceLabel,
  formulaUnlockProductReady = false,
  purchasingFigureId = null,
  onUnlockFormula,
}: Props) {
  const visibleSections = isMax ? sections : sections.filter((s) => !s.maxOnly);

  return (
    <View>
      {visibleSections.map((section, idx) => {
        const formulaInfo = section.figureId != null ? getKoushikiFormulaInfo(section.figureId) : null;
        const isLockedFormula =
          formulaInfo != null &&
          !formulaInfo.isFree &&
          !bypassFormulaLock &&
          !(unlockedFormulaIds?.has(section.figureId as string) ?? false);

        if (isLockedFormula) {
          const figureId = section.figureId as string;
          const isPurchasing = purchasingFigureId === figureId;
          return (
            <View key={idx} style={styles.lockedSection}>
              {section.heading && <Text style={styles.heading}>{section.heading}</Text>}
              <View style={styles.lockCard}>
                <Text style={styles.lockIcon}>🔒</Text>
                <Text style={styles.lockText}>
                  この公式は買い切りで解放できます（{formulaUnlockPriceLabel ?? '¥50'}・1回のみ）
                </Text>
                <TouchableOpacity
                  style={[styles.unlockBtn, (!formulaUnlockProductReady || isPurchasing) && styles.unlockBtnDisabled]}
                  activeOpacity={0.85}
                  disabled={!formulaUnlockProductReady || isPurchasing}
                  onPress={() => onUnlockFormula?.(figureId, section.heading ?? '')}
                >
                  {isPurchasing ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text style={styles.unlockBtnText}>
                      {formulaUnlockProductReady ? `${formulaUnlockPriceLabel ?? '¥50'}で解放する` : '準備中です'}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          );
        }

        return (
          <View key={idx} style={[styles.section, section.maxOnly && styles.maxSection]}>
            {section.maxOnly && (
              <View style={styles.maxBadge}>
                <Text style={styles.maxBadgeText}>⭐ MAX限定</Text>
              </View>
            )}
            {section.heading && (
              <Text style={[styles.heading, section.maxOnly && styles.maxHeading]}>
                {section.heading}
              </Text>
            )}
            {renderBody(section.body)}
            {section.figureId != null && (() => {
              const fig = getLessonFigure(section.figureId);
              return fig != null ? <FigureView figure={fig} animated /> : null;
            })()}
            {section.mangaId != null && (() => {
              const script = getMangaScript(section.mangaId);
              return script != null ? <MangaDialogue script={script} /> : null;
            })()}
            {/* 「何の問題を解いているか分からない」を防ぐため、公式集は
                その公式の例題・応用問題をこの場に出す。ロック中のセクションは
                上のisLockedFormula分岐でこの行まで到達しないので、
                買い切り前の公式の問題が漏れることはない。 */}
            {section.figureId != null && (() => {
              const qs = getKoushikiQuestionsForFigure(section.figureId);
              return qs.length > 0 ? <InlineQuiz items={questionsToQuizItems(qs)} /> : null;
            })()}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  maxSection: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    marginBottom: 20,
  },
  maxBadge: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  maxBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#92400E',
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E3A5F',
    marginBottom: 10,
    marginTop: 4,
  },
  maxHeading: {
    color: '#92400E',
  },
  body: {
    fontSize: 16,
    color: '#221C18',
    lineHeight: 28,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 16,
    color: '#221C18',
    lineHeight: 28,
    paddingLeft: 8,
    marginBottom: 2,
  },
  arrow: {
    fontSize: 16,
    color: '#2B2420',
    lineHeight: 28,
    paddingLeft: 16,
    marginBottom: 2,
    fontWeight: '600',
  },
  exampleBox: {
    backgroundColor: '#FAF6EF',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#B5622E',
  },
  exampleText: {
    fontSize: 15,
    color: '#2B2420',
    lineHeight: 24,
  },
  warningBox: {
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#EF4444',
  },
  warningText: {
    fontSize: 15,
    color: '#B91C1C',
    lineHeight: 24,
  },
  pointBox: {
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#22C55E',
  },
  pointText: {
    fontSize: 15,
    color: '#15803D',
    lineHeight: 24,
    fontWeight: '600',
  },
  spacer: {
    height: 8,
  },
  artBox: {
    backgroundColor: '#FAF6EF',
    borderWidth: 1,
    borderColor: '#E8DCC8',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 8,
  },
  artText: {
    fontFamily: MONO,
    fontSize: 13,
    lineHeight: 19,
    color: '#2B2420',
  },
  lockedSection: {
    marginBottom: 20,
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
  lockIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  lockText: {
    fontSize: 14,
    color: '#6E645C',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 21,
  },
  unlockBtn: {
    backgroundColor: '#B5622E',
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 24,
    minWidth: 160,
    alignItems: 'center',
  },
  unlockBtnDisabled: {
    backgroundColor: '#C7B9A6',
  },
  unlockBtnText: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight: '800',
  },
});
