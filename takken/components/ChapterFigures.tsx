import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { ChapterFigure } from '../data/chapters';

/**
 * 章の構造化図解を描画する。React Native の View/Text のみで構成しているため、
 * iPhone・iPad・Web で同一表示になる（画像・SVG 依存なし）。
 */
export default function ChapterFigures({ figures }: { figures?: ChapterFigure[] }) {
  if (!figures || figures.length === 0) return null;
  return (
    <View style={styles.wrap}>
      <Text style={styles.sectionTitle}>🖼 図解でチェック</Text>
      {figures.map((fig, i) => (
        <Figure key={i} fig={fig} />
      ))}
    </View>
  );
}

function Figure({ fig }: { fig: ChapterFigure }) {
  switch (fig.type) {
    case 'table':
      return <TableFigure fig={fig} />;
    case 'compare':
      return <CompareFigure fig={fig} />;
    case 'flow':
      return <FlowFigure fig={fig} />;
    case 'hierarchy':
      return <HierarchyFigure fig={fig} />;
    case 'timeline':
      return <TimelineFigure fig={fig} />;
    case 'callout':
      return <CalloutFigure fig={fig} />;
    default:
      return null;
  }
}

function FigTitle({ title }: { title?: string }) {
  if (!title) return null;
  return <Text style={styles.figTitle}>{title}</Text>;
}

function TableFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'table' }> }) {
  return (
    <View style={styles.card}>
      <FigTitle title={fig.title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={[styles.tr, styles.trHead]}>
            {fig.headers.map((h, i) => (
              <View key={i} style={[styles.td, styles.tdHead, i === 0 && styles.tdFirst]}>
                <Text style={styles.tdHeadText}>{h}</Text>
              </View>
            ))}
          </View>
          {fig.rows.map((row, ri) => (
            <View key={ri} style={[styles.tr, ri % 2 === 1 && styles.trAlt]}>
              {row.map((cell, ci) => (
                <View key={ci} style={[styles.td, ci === 0 && styles.tdFirst]}>
                  <Text style={[styles.tdText, ci === 0 && styles.tdTextFirst]}>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      {fig.note ? <Text style={styles.note}>※ {fig.note}</Text> : null}
    </View>
  );
}

function CompareFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'compare' }> }) {
  return (
    <View style={styles.card}>
      <FigTitle title={fig.title} />
      <View style={styles.compareRow}>
        {[fig.left, fig.right].map((col, i) => (
          <View key={i} style={[styles.compareCol, i === 0 ? styles.compareLeft : styles.compareRight]}>
            <Text style={[styles.compareHeading, i === 0 ? styles.compareHeadingLeft : styles.compareHeadingRight]}>
              {col.heading}
            </Text>
            {col.items.map((it, j) => (
              <View key={j} style={styles.compareItemRow}>
                <Text style={styles.compareBullet}>・</Text>
                <Text style={styles.compareItemText}>{it}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      {fig.note ? <Text style={styles.note}>※ {fig.note}</Text> : null}
    </View>
  );
}

function FlowFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'flow' }> }) {
  return (
    <View style={styles.card}>
      <FigTitle title={fig.title} />
      {fig.steps.map((step, i) => (
        <View key={i}>
          <View style={styles.flowStep}>
            <View style={styles.flowNum}>
              <Text style={styles.flowNumText}>{i + 1}</Text>
            </View>
            <View style={styles.flowBody}>
              <Text style={styles.flowLabel}>{step.label}</Text>
              {step.detail ? <Text style={styles.flowDetail}>{step.detail}</Text> : null}
            </View>
          </View>
          {i < fig.steps.length - 1 && <Text style={styles.flowArrow}>▼</Text>}
        </View>
      ))}
      {fig.note ? <Text style={styles.note}>※ {fig.note}</Text> : null}
    </View>
  );
}

function HierarchyFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'hierarchy' }> }) {
  return (
    <View style={styles.card}>
      <FigTitle title={fig.title} />
      <View style={styles.hierRoot}>
        <Text style={styles.hierRootText}>{fig.root}</Text>
      </View>
      <View style={styles.hierChildren}>
        {fig.children.map((child, i) => (
          <View key={i} style={styles.hierChild}>
            <Text style={styles.hierChildLabel}>{child.label}</Text>
            {child.sub?.map((s, j) => (
              <Text key={j} style={styles.hierSub}>
                - {s}
              </Text>
            ))}
          </View>
        ))}
      </View>
      {fig.note ? <Text style={styles.note}>※ {fig.note}</Text> : null}
    </View>
  );
}

function TimelineFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'timeline' }> }) {
  return (
    <View style={styles.card}>
      <FigTitle title={fig.title} />
      {fig.events.map((ev, i) => (
        <View key={i} style={styles.tlRow}>
          <View style={styles.tlLeft}>
            <View style={styles.tlDot} />
            {i < fig.events.length - 1 && <View style={styles.tlLine} />}
          </View>
          <View style={styles.tlBody}>
            <Text style={styles.tlWhen}>{ev.when}</Text>
            <Text style={styles.tlWhat}>{ev.what}</Text>
          </View>
        </View>
      ))}
      {fig.note ? <Text style={styles.note}>※ {fig.note}</Text> : null}
    </View>
  );
}

const CALLOUT_STYLE = {
  point: { bg: '#EFF6FF', border: '#3B82F6', label: '📌 ポイント', color: '#1E40AF' },
  warning: { bg: '#FEF3C7', border: '#F59E0B', label: '⚠️ 注意', color: '#92400E' },
  trap: { bg: '#FEE2E2', border: '#EF4444', label: '🚨 ひっかけ注意', color: '#991B1B' },
} as const;

function CalloutFigure({ fig }: { fig: Extract<ChapterFigure, { type: 'callout' }> }) {
  const c = CALLOUT_STYLE[fig.variant];
  return (
    <View style={[styles.callout, { backgroundColor: c.bg, borderLeftColor: c.border }]}>
      <Text style={[styles.calloutLabel, { color: c.color }]}>{fig.title ? `${c.label}｜${fig.title}` : c.label}</Text>
      <Text style={[styles.calloutBody, { color: c.color }]}>{fig.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 16 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#0F172A', marginBottom: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  figTitle: { fontSize: 14, fontWeight: '800', color: '#1E293B', marginBottom: 10 },

  // table
  tr: { flexDirection: 'row' },
  trHead: {},
  trAlt: { backgroundColor: '#F8FAFC' },
  td: { paddingVertical: 8, paddingHorizontal: 10, minWidth: 92, borderWidth: 0.5, borderColor: '#E2E8F0' },
  tdFirst: { minWidth: 110, backgroundColor: '#F1F5F9' },
  tdHead: { backgroundColor: '#1E40AF' },
  tdHeadText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  tdText: { color: '#334155', fontSize: 12, lineHeight: 18 },
  tdTextFirst: { fontWeight: '700', color: '#1E293B' },
  note: { fontSize: 11, color: '#64748B', marginTop: 8 },

  // compare
  compareRow: { flexDirection: 'row', gap: 8 },
  compareCol: { flex: 1, borderRadius: 10, padding: 10 },
  compareLeft: { backgroundColor: '#EFF6FF' },
  compareRight: { backgroundColor: '#FEF2F2' },
  compareHeading: { fontSize: 13, fontWeight: '800', marginBottom: 6, textAlign: 'center' },
  compareHeadingLeft: { color: '#1E40AF' },
  compareHeadingRight: { color: '#B91C1C' },
  compareItemRow: { flexDirection: 'row', marginBottom: 4 },
  compareBullet: { fontSize: 12, color: '#64748B' },
  compareItemText: { flex: 1, fontSize: 12, color: '#334155', lineHeight: 18 },

  // flow
  flowStep: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  flowNum: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#1E40AF', alignItems: 'center', justifyContent: 'center' },
  flowNumText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  flowBody: { flex: 1, backgroundColor: '#F1F5F9', borderRadius: 8, padding: 10 },
  flowLabel: { fontSize: 13, fontWeight: '700', color: '#1E293B' },
  flowDetail: { fontSize: 12, color: '#475569', marginTop: 3, lineHeight: 18 },
  flowArrow: { textAlign: 'center', color: '#94A3B8', fontSize: 14, marginVertical: 3, marginLeft: 12 },

  // hierarchy
  hierRoot: { backgroundColor: '#1E40AF', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'center', marginBottom: 6 },
  hierRootText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  hierChildren: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  hierChild: { backgroundColor: '#EFF6FF', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#BFDBFE', minWidth: 100, flexGrow: 1 },
  hierChildLabel: { fontSize: 12, fontWeight: '800', color: '#1E40AF', marginBottom: 3 },
  hierSub: { fontSize: 11, color: '#475569', lineHeight: 17 },

  // timeline
  tlRow: { flexDirection: 'row', gap: 10 },
  tlLeft: { alignItems: 'center', width: 16 },
  tlDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#1E40AF', marginTop: 4 },
  tlLine: { flex: 1, width: 2, backgroundColor: '#CBD5E1', marginTop: 2 },
  tlBody: { flex: 1, paddingBottom: 14 },
  tlWhen: { fontSize: 12, fontWeight: '800', color: '#1E40AF' },
  tlWhat: { fontSize: 12, color: '#334155', lineHeight: 18, marginTop: 2 },

  // callout
  callout: { borderLeftWidth: 4, borderRadius: 8, padding: 12, marginBottom: 12 },
  calloutLabel: { fontSize: 12, fontWeight: '800', marginBottom: 4 },
  calloutBody: { fontSize: 13, lineHeight: 20 },
});
