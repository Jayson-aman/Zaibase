import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { LessonSection } from '../data/lesson-types';

type Props = {
  sections: LessonSection[];
  isMax: boolean;
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

export default function LessonRenderer({ sections, isMax }: Props) {
  const visibleSections = isMax ? sections : sections.filter((s) => !s.maxOnly);

  return (
    <View>
      {visibleSections.map((section, idx) => (
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
        </View>
      ))}
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
    color: '#1A1A2E',
    lineHeight: 28,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 16,
    color: '#1A1A2E',
    lineHeight: 28,
    paddingLeft: 8,
    marginBottom: 2,
  },
  arrow: {
    fontSize: 16,
    color: '#0369A1',
    lineHeight: 28,
    paddingLeft: 16,
    marginBottom: 2,
    fontWeight: '600',
  },
  exampleBox: {
    backgroundColor: '#F0F9FF',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#0EA5E9',
  },
  exampleText: {
    fontSize: 15,
    color: '#0369A1',
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
});
