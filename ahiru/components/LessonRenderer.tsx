import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import type { LessonSection } from '../data/lesson-types';
import { getLessonFigure } from '../data/lesson-figures';
import { getKoushikiFormulaInfo } from '../data/koushiki-access';
import FigureView from './FigureView';

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

function renderBody(body: string): React.ReactNode[] {
  // Split by double newline for paragraphs
  return body.split('\n').map((line, i) => {
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
  });
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
